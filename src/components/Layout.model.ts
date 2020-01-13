import { Item, Margin, Subscription } from "@/inferfaces";
import { DashItem } from "./DashItem.model";

export class Layout {
  private _breakpoint: string;
  private _margin: Margin;
  private _width: number;
  private _height: number;
  private _numberOfCols: number;
  private _autoHeight: boolean;
  private _rowHeight: number;
  private _colWidth: number;
  private _itemBeingDragged: boolean = false;
  private _itemBeingResized: boolean = false;
  private _dashItems: DashItem[] = [];
  private _dragStartListeners: Subscription[] = [];
  private _dragListeners: Subscription[] = [];
  private _dragEndListeners: Subscription[] = [];
  private _resizeStartListeners: Subscription[] = [];
  private _resizeListeners: Subscription[] = [];
  private _resizeEndListeners: Subscription[] = [];

  constructor({
    breakpoint,
    margin,
    numberOfCols,
    autoHeight,
    width,
    height,
    rowHeight
  }: {
    breakpoint: string;
    numberOfCols: number;
    margin?: Margin;
    autoHeight?: boolean;
    width?: number;
    height?: number;
    rowHeight?: number;
  }) {
    this._breakpoint = breakpoint;
    this._numberOfCols = numberOfCols;

    if (typeof margin !== "undefined") {
      this._margin = margin;
    } else {
      this._margin = { x: 10, y: 10 };
    }

    if (typeof autoHeight !== "undefined") {
      this._autoHeight = autoHeight;
    } else {
      this._autoHeight = true;
    }

    if (typeof width !== "undefined") {
      this._width = width;
    } else {
      this._width = 400;
    }

    if (typeof height !== "undefined") {
      this._height = height;
    } else {
      this._height = 400;
    }
    if (typeof rowHeight !== "undefined") {
      this._rowHeight = rowHeight;
    } else {
      this._rowHeight = 200;
    }

    this._colWidth = this.calculateColWidth();
    if (this.autoHeight) {
      this.calculateHeight();
    }
  }
  get breakpoint() {
    return this._breakpoint;
  }
  set breakpoint(b: string) {
    this._breakpoint = b;
  }
  get margin() {
    return this._margin;
  }
  set margin(m: Margin) {
    this._margin = m;
  }
  get width() {
    return this._width;
  }
  set width(w: number) {
    this._width = w;
    this.updateResponsiveVariables();
  }
  get height() {
    return this._height;
  }
  set height(h: number) {
    this._height = h;
  }
  get numberOfCols() {
    return this._numberOfCols;
  }
  set numberOfCols(n: number) {
    this._numberOfCols = n;
    this.updateResponsiveVariables();
  }
  get autoHeight() {
    return this._autoHeight;
  }
  set autoHeight(ah: boolean) {
    this._autoHeight = ah;
  }
  get rowHeight() {
    return this._rowHeight;
  }
  set rowHeight(rh: number) {
    this._rowHeight = rh;
  }
  get colWidth() {
    return this._colWidth;
  }
  set colWidth(cW: number) {
    this._colWidth = cW;
  }
  //Item Methods
  get itemBeingDragged() {
    return this._itemBeingDragged;
  }
  set itemBeingDragged(ibd: boolean) {
    this._itemBeingDragged = ibd;
  }
  get itemBeingResized() {
    return this._itemBeingResized;
  }
  set itemBeingResized(ibr: boolean) {
    this._itemBeingResized = ibr;
  }
  get placeholder() {
    return this.getDashItemById("-1Placeholder");
  }
  set placeholder(p) {
    this.placeholder = p;
  }
  //Reactive Methods
  calculateColWidth() {
    this.colWidth =
      (this.width - (this.margin.x + this.numberOfCols + 1)) /
      this.numberOfCols;
    return this.colWidth;
  }
  calculateHeight() {
    let maxY = 0;
    let bottomY = 0;
    for (let item of this._dashItems) {
      bottomY = item.y + item.height;
      if (bottomY > maxY) {
        maxY = bottomY;
      }
    }
    this.height = maxY * (this.rowHeight + this.margin.y) + this.margin.y;
  }
  updateDashItems() {
    this._dashItems.forEach(item => {
      item.colWidth = this.colWidth;
      item.rowHeight = this.rowHeight;
      item.margin = this.margin;
    });
  }
  updateResponsiveVariables() {
    this.calculateColWidth();
    //Update Height
    if (this.autoHeight) {
      this.calculateHeight();
    }
    //Update dash items
    this.updateDashItems();
  }
  //DashItem Methods
  addDashItem(d: DashItem) {
    this._dashItems.push(d);
    this.updateDashItems();
    //Drag Subscriptions
    let unDragStart = d.onDragStart.subscribe(item => {
      this.itemDragging(item);
    });
    this._dragStartListeners.push({
      id: d.id,
      unsubscribe: unDragStart
    });
    let unDrag = d.onDrag.subscribe(item => {
      this.itemDragging(item);
    });
    this._dragListeners.push({
      id: d.id,
      unsubscribe: unDrag
    });
    let unDragEnd = d.onDragEnd.subscribe(item => {
      this.itemDraggingComplete(item);
    });
    this._dragEndListeners.push({ id: d.id, unsubscribe: unDragEnd });
    //Resize Subscirptions
    let unResizeStart = d.onResizeStart.subscribe(item => {
      this.itemResizing(item);
    });
    this._resizeStartListeners.push({
      id: d.id,
      unsubscribe: unResizeStart
    });
    let unResize = d.onResize.subscribe(item => {
      this.itemResizing(item);
    });
    this._resizeListeners.push({
      id: d.id,
      unsubscribe: unResize
    });
    let unResizeEnd = d.onResizeEnd.subscribe(item => {
      this.itemResizingComplete(item);
    });
    this._resizeEndListeners.push({
      id: d.id,
      unsubscribe: unResizeEnd
    });
  }
  removeDashItem(d: DashItem) {
    let index = this._dashItems.findIndex(item => {
      return item.id === d.id;
    });
    if (index >= 0) {
      this._dashItems.splice(index, 1);
    }
    //Remove Event Listerners
    index = this._dragStartListeners.findIndex(item => {
      return item.id === d.id;
    });
    if (index >= 0) {
      this._dragStartListeners[index].unsubscribe();
      this._dragStartListeners.splice(index, 1);
    }
    index = this._dragListeners.findIndex(item => {
      return item.id === d.id;
    });
    if (index >= 0) {
      this._dragListeners[index].unsubscribe();
      this._dragListeners.splice(index, 1);
    }
    index = this._dragEndListeners.findIndex(item => {
      return item.id === d.id;
    });
    if (index >= 0) {
      this._dragEndListeners[index].unsubscribe();
      this._dragEndListeners.splice(index, 1);
    }
    //Remove Drag Listerners
    index = this._resizeStartListeners.findIndex(item => {
      return item.id === d.id;
    });
    if (index >= 0) {
      this._resizeStartListeners[index].unsubscribe();
      this._resizeStartListeners.splice(index, 1);
    }
    index = this._resizeListeners.findIndex(item => {
      return item.id === d.id;
    });
    if (index >= 0) {
      this._resizeListeners[index].unsubscribe();
      this._resizeListeners.splice(index, 1);
    }
    index = this._resizeEndListeners.findIndex(item => {
      return item.id === d.id;
    });
    if (index >= 0) {
      this._resizeEndListeners[index].unsubscribe();
      this._resizeEndListeners.splice(index, 1);
    }
  }
  getDashItemById(id: string | number) {
    let index = this._dashItems.findIndex(item => {
      return item.id === id;
    });
    if (index >= 0) {
      return this._dashItems[index];
    }
    return null;
  }
  get items() {
    let items: Item[] = [];
    this._dashItems.forEach(dashItem => {
      items.push(dashItem.toItem());
    });
    return items;
  }
  itemDragging(item: Item) {
    console.log("dragging");
    this.itemBeingDragged = true;
    this.placeholder!.x = DashItem.getXFromLeft(
      item.left!,
      this.colWidth,
      this.margin
    );
    this.placeholder!.y = DashItem.getYFromTop(
      item.top!,
      this.rowHeight,
      this.margin
    );
    this.placeholder!.width = item.width;
    this.placeholder!.height = item.height;
    let items = this.items;
    //Remove the dragging item as the placeholder takes its place
    items = items.filter(i => {
      return i.id !== item.id;
    });
    this.moveElement(
      items,
      this.placeholder!.toItem(),
      DashItem.getXFromLeft(item.left!, this.colWidth, this.margin),
      DashItem.getYFromTop(item.top!, this.rowHeight, this.margin),
      true
    );
  }
  itemDraggingComplete(item: Item) {
    this.itemBeingDragged = false;
    let dashItem = this.getDashItemById(item.id);
    if (dashItem) {
      dashItem.x = this.placeholder!.x;
      dashItem.y = this.placeholder!.y;
    }
    this.placeholder!.x = 0;
    this.placeholder!.y = 0;
    this.placeholder!.width = 0;
    this.placeholder!.height = 0;
  }
  itemResizing(item: Item) {
    this.itemBeingResized = true;
    this.placeholder!.x = DashItem.getXFromLeft(
      item.left!,
      this.colWidth,
      this.margin
    );
    this.placeholder!.y = DashItem.getYFromTop(
      item.top!,
      this.rowHeight,
      this.margin
    );
    this.placeholder!.width = DashItem.getWidthFromPx(
      item.widthPx!,
      this.colWidth,
      this.margin
    );
    this.placeholder!.height = DashItem.getHeightFromPx(
      item.heightPx!,
      this.rowHeight,
      this.margin
    );
  }
  itemResizingComplete(item: Item) {
    this.itemBeingResized = false;
    let dashItem = this.getDashItemById(item.id);
    if (dashItem) {
      dashItem.x = this.placeholder!.x;
      dashItem.y = this.placeholder!.y;
      dashItem.width = this.placeholder!.width;
      dashItem.height = this.placeholder!.height;
    }
    this.placeholder!.x = 0;
    this.placeholder!.y = 0;
    this.placeholder!.width = 0;
    this.placeholder!.height = 0;
  }
  //Layout Utils
  checkForCollision(d1: Item, d2: Item) {
    if (d1.id === d2.id) {
      return false;
    }
    if (d1.x + d1.width <= d2.x) {
      return false;
    }
    if (d1.x >= d2.x + d2.width) {
      return false;
    }
    if (d1.y + d1.height <= d2.y) {
      return false;
    }
    if (d1.y >= d2.y + d2.height) {
      return false;
    }
    return true;
  }
  getFirstCollision(d: Item) {
    for (let i of this._dashItems) {
      if (this.checkForCollision(d, i)) {
        return i;
      }
    }
    return null;
  }
  getAllCollisions(d: Item) {
    return this._dashItems.filter(item => this.checkForCollision(d, item));
  }
  correctBounds() {
    this._dashItems.forEach(item => {
      if (item.x + item.width > this.numberOfCols) {
        item.x = this.numberOfCols - item.width;
      }
      if (item.x < 0) {
        item.x = 0;
      }
      if (item.width > this.numberOfCols) {
        item.x = 0;
        item.width = this.numberOfCols;
      }
    });
  }
  //Layout and Item Moving Methods
  compact(items: Item[]) {
    items = this.sortItems(items);
    items.forEach(d => {
      d = this.compactItem(d);
    });
    return items;
  }
  compactItem(d: Item) {
    while (d.y > 0 && !this.getFirstCollision(d)) {
      d.y--;
    }
    let collides;
    while ((collides = this.getFirstCollision(d))) {
      d.y = collides.y + collides.height;
    }
    return d;
  }
  sortItems(items: Item[], reverse?: Boolean) {
    items.sort((a, b) => {
      if (a.y > b.y || (a.y === b.y && a.x > b.x)) {
        return 1;
      }
      return -1;
    });
    if (reverse) {
      items.reverse();
    }
    return items;
  }
  moveElement(
    items: Item[],
    d: Item,
    x: number,
    y: number,
    isUserAction?: boolean
  ) {
    const oldX = d.x;
    const oldY = d.y;

    const movingUp: boolean = d.y > y;

    d.x = x;
    d.y = y;
    d.moved = true;

    items = this.sortItems(items, movingUp);

    const collisions = this.getAllCollisions(d);
    for (let collision of collisions) {
      if (collision.moved) {
        continue;
      }
      // This makes it feel a bit more precise by waiting to swap for just a bit when moving up.
      if (d.y > collision.y && d.y - collision.y > collision.height / 4) {
        continue;
      }
      this.moveElementAwayFromCollision(items, d, collision, isUserAction);
    }
  }
  moveElementAwayFromCollision(
    items: Item[],
    colllidesWith: Item,
    itemToMove: Item,
    isUserAction?: Boolean
  ) {
    if (isUserAction) {
      const fakeItem: Item = {
        id: "-1fakeItem",
        x: itemToMove.x,
        y: itemToMove.y,
        width: itemToMove.width,
        height: itemToMove.height
      };
      fakeItem.y = Math.max(colllidesWith.y - itemToMove.height, 0);
      if (!this.getFirstCollision(fakeItem)) {
        return this.moveElement(items, itemToMove, itemToMove.x, fakeItem.y);
      }
    }
    return this.moveElement(items, itemToMove, itemToMove.x, itemToMove.y + 1);
  }
  syncItems(items: Item[]) {
    items.forEach(i => {
      if (i.moved) {
        let dashItem = this.getDashItemById(i.id);
        dashItem!.fromItem(i);
      }
    });
  }
}
