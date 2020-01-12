import { Item, Margin, Subscription } from "@/inferfaces";
import { DashItem } from "./DashItem.model";

export class Layout {
  private _breakpoint: string;
  private _items: Item[];
  private _margin: Margin;
  private _width: number;
  private _height: number;
  private _numberOfCols: number;
  private _autoHeight: boolean;
  private _rowHeight: number;
  private _colWidth: number;
  private _itemBeingDragged: boolean = false;
  private _itemBeingResized: boolean = false;
  private _placeholder: Item = {
    id: "placeholder",
    x: 0,
    y: 0,
    width: 0,
    height: 0
  };
  private _dashItems: DashItem[] = [];
  private _dragStartListeners: Subscription[] = [];
  private _dragListeners: Subscription[] = [];
  private _dragEndListeners: Subscription[] = [];
  private _resizeStartListeners: Subscription[] = [];
  private _resizeListeners: Subscription[] = [];
  private _resizeEndListeners: Subscription[] = [];

  constructor({
    breakpoint,
    items,
    margin,
    numberOfCols,
    autoHeight,
    width,
    height,
    rowHeight
  }: {
    breakpoint: string;
    items: Item[];
    numberOfCols: number;
    margin?: Margin;
    autoHeight?: boolean;
    width?: number;
    height?: number;
    rowHeight?: number;
  }) {
    this._breakpoint = breakpoint;
    this._items = items;
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
  get items() {
    return this._items;
  }
  set items(i: Item[]) {
    this._items = i;
  }
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
  getItemById(id: String | Number) {
    let index = this.items.findIndex(item => {
      return item.id === id;
    });
    if (index >= 0) {
      return this.items[index];
    }
    return null;
  }
  addItem(item: Item) {
    if (!this.getItemById(item.id)) {
      this.items.push(item);
    }
  }
  setItem(item: Item) {
    let index = this.items.findIndex(i => {
      return i.id === item.id;
    });
    if (index >= 0) {
      this.items[index] = item;
    }
  }
  removeItem(item: Item) {
    let index = this.items.findIndex(i => {
      return i.id === item.id;
    });
    if (index >= 0) {
      this.items.splice(index, 1);
    }
  }
  get placeholder() {
    return this._placeholder;
  }
  sortItems() {
    this.items.sort((a, b) => {
      if (a.y > b.y || (a.y === b.y && a.x > b.x)) {
        return 1;
      }
      return -1;
    });
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
    for (let item of this.items) {
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
  itemDragging(item: Item) {
    this.itemBeingDragged = true;
    this._placeholder.x = DashItem.getXFromLeft(
      item.left!,
      this.colWidth,
      this.margin
    );
    this._placeholder.y = DashItem.getYFromTop(
      item.top!,
      this.rowHeight,
      this.margin
    );
    this._placeholder.width = item.width;
    this._placeholder.height = item.height;
    // this.moveElement(
    //   this.placeholder,
    //   DashItem.getXFromLeft(item.left!, this.colWidth, this.margin),
    //   DashItem.getYFromTop(item.top!, this.rowHeight, this.margin),
    //   true
    // );
  }
  itemDraggingComplete(item: Item) {
    this.itemBeingDragged = false;
    let dashItem = this.getDashItemById(item.id);
    if (dashItem) {
      dashItem.x = this._placeholder.x;
      dashItem.y = this._placeholder.y;
    }
    this._placeholder.x = 0;
    this._placeholder.y = 0;
    this._placeholder.width = 0;
    this._placeholder.height = 0;
    this.moveTidyup();
  }
  itemResizing(item: Item) {
    this.itemBeingResized = true;
    this._placeholder.x = DashItem.getXFromLeft(
      item.left!,
      this.colWidth,
      this.margin
    );
    this._placeholder.y = DashItem.getYFromTop(
      item.top!,
      this.rowHeight,
      this.margin
    );
    this._placeholder.width = DashItem.getWidthFromPx(
      item.widthPx!,
      this.colWidth,
      this.margin
    );
    this._placeholder.height = DashItem.getHeightFromPx(
      item.heightPx!,
      this.rowHeight,
      this.margin
    );
  }
  itemResizingComplete(item: Item) {
    this.itemBeingResized = false;
    let dashItem = this.getDashItemById(item.id);
    if (dashItem) {
      dashItem.x = this._placeholder.x;
      dashItem.y = this._placeholder.y;
      dashItem.width = this._placeholder.width;
      dashItem.height = this._placeholder.height;
    }
    this._placeholder.x = 0;
    this._placeholder.y = 0;
    this._placeholder.width = 0;
    this._placeholder.height = 0;
  }
  //Layout Utils
  checkForCollision(d1: DashItem, d2: DashItem) {
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
  getFirstCollision(d: DashItem) {
    for (let i of this._dashItems) {
      if (this.checkForCollision(d, i)) {
        return i;
      }
    }
    return null;
  }
  getAllCollisions(d: DashItem) {
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
  compact() {
    this.sortDashItems();
    this._dashItems.forEach(d => {
      this.compactDashItem(d);
    });
  }
  compactDashItem(d: DashItem) {
    while (d.y > 0 && !this.getFirstCollision(d)) {
      d.y--;
    }
    let collides;
    while ((collides = this.getFirstCollision(d))) {
      d.y = collides.y + collides.height;
    }
  }
  sortDashItems(reverse?: Boolean) {
    this._dashItems.sort((a, b) => {
      if (a.y > b.y || (a.y === b.y && a.x > b.x)) {
        return 1;
      }
      return -1;
    });
    if (reverse) {
      this._dashItems.reverse();
    }
  }
  moveElement(d: DashItem, x: number, y: number, isUserAction?: boolean) {
    const oldX = d.x;
    const oldY = d.y;

    const movingUp: boolean = d.y > y;

    d.x = x;
    d.y = y;
    d.moved = true;

    this.sortDashItems(movingUp);

    const collisions = this.getAllCollisions(d);
    for (let collision of collisions) {
      if (collision.moved) {
        continue;
      }
      // This makes it feel a bit more precise by waiting to swap for just a bit when moving up.
      if (d.y > collision.y && d.y - collision.y > collision.height / 4) {
        continue;
      }
      this.moveElementAwayFromCollision(d, collision, isUserAction);
    }
  }
  moveElementAwayFromCollision(
    colllidesWith: DashItem,
    itemToMove: DashItem,
    isUserAction?: Boolean
  ) {
    if (isUserAction) {
      const fakeDashItem = new DashItem({
        id: "-1fakeDashItem",
        x: itemToMove.x,
        y: itemToMove.y,
        width: itemToMove.width,
        height: itemToMove.height
      });
      fakeDashItem.y = Math.max(colllidesWith.y - itemToMove.height, 0);
      if (!this.getFirstCollision(fakeDashItem)) {
        return this.moveElement(itemToMove, itemToMove.x, fakeDashItem.y);
      }
    }
    return this.moveElement(itemToMove, itemToMove.x, itemToMove.y + 1);
  }
  moveTidyup() {
    this._dashItems.forEach(item => {
      item.moved = false;
    });
  }
}
