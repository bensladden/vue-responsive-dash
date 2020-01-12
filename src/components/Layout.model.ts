import { Item, Margin, Subscription, Breakpoint } from "@/inferfaces";
// import {
//   getLeftFromX,
//   getXFromLeft,
//   getTopFromY,
//   getYFromTop,
//   getWidthInPx,
//   getWidthFromPx,
//   getHeightInPx,
//   getHeightFromPx
// } from "./commonFunctions";
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
  protected itemBeingDragged: boolean = false;
  protected itemBeingResized: boolean = false;
  protected placeholder: Item = {
    id: "placeholder",
    x: 0,
    y: 0,
    width: 0,
    height: 0
  };
  private dashItems: DashItem[] = [];
  private dragStartListeners: Subscription[] = [];
  private dragListeners: Subscription[] = [];
  private dragEndListeners: Subscription[] = [];
  private resizeStartListeners: Subscription[] = [];
  private resizeListeners: Subscription[] = [];
  private resizeEndListeners: Subscription[] = [];

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
  sortItems() {
    this.items.sort((a, b) => {
      if (a.y > b.y || (a.y === b.y && a.x > b.x)) {
        return 1;
      }
      return -1;
    });
  }
  checkForCollision(item1: Item, item2: Item) {
    if (item1.id === item2.id) {
      return false;
    }
    if (item1.x + item1.width <= item2.x) {
      return false;
    }
    if (item1.x >= item2.x + item2.width) {
      return false;
    }
    if (item1.y + item1.height <= item2.y) {
      return false;
    }
    if (item1.y >= item2.y + item2.height) {
      return false;
    }
    return true;
  }
  getFirstCollision(item: Item) {
    for (let i of this.items) {
      if (this.checkForCollision(item, i)) {
        return i;
      }
    }
    return null;
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
    this.dashItems.forEach(item => {
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
    this.dashItems.push(d);
    this.updateDashItems();
    //Drag Subscriptions
    let unDragStart = d.onDragStart.subscribe(item => {
      this.itemDragging(item);
    });
    this.dragStartListeners.push({
      id: d.id,
      unsubscribe: unDragStart
    });
    let unDrag = d.onDrag.subscribe(item => {
      this.itemDragging(item);
    });
    this.dragListeners.push({
      id: d.id,
      unsubscribe: unDrag
    });
    let unDragEnd = d.onDragEnd.subscribe(item => {
      this.itemDraggingComplete(item);
    });
    this.dragEndListeners.push({ id: d.id, unsubscribe: unDragEnd });
    //Resize Subscirptions
    let unResizeStart = d.onResizeStart.subscribe(item => {
      this.itemResizing(item);
    });
    this.resizeStartListeners.push({
      id: d.id,
      unsubscribe: unResizeStart
    });
    let unResize = d.onResize.subscribe(item => {
      this.itemResizing(item);
    });
    this.resizeListeners.push({
      id: d.id,
      unsubscribe: unResize
    });
    let unResizeEnd = d.onResizeEnd.subscribe(item => {
      this.itemResizingComplete(item);
    });
    this.resizeEndListeners.push({
      id: d.id,
      unsubscribe: unResizeEnd
    });
  }
  removeDashItem(d: DashItem) {
    let index = this.dashItems.findIndex(item => {
      return item.id === d.id;
    });
    if (index >= 0) {
      this.dashItems.splice(index, 1);
    }
    //Remove Event Listerners
    index = this.dragStartListeners.findIndex(item => {
      return item.id === d.id;
    });
    if (index >= 0) {
      this.dragStartListeners[index].unsubscribe();
      this.dragStartListeners.splice(index, 1);
    }
    index = this.dragListeners.findIndex(item => {
      return item.id === d.id;
    });
    if (index >= 0) {
      this.dragListeners[index].unsubscribe();
      this.dragListeners.splice(index, 1);
    }
    index = this.dragEndListeners.findIndex(item => {
      return item.id === d.id;
    });
    if (index >= 0) {
      this.dragEndListeners[index].unsubscribe();
      this.dragEndListeners.splice(index, 1);
    }
    //Remove Drag Listerners
    index = this.resizeStartListeners.findIndex(item => {
      return item.id === d.id;
    });
    if (index >= 0) {
      this.resizeStartListeners[index].unsubscribe();
      this.resizeStartListeners.splice(index, 1);
    }
    index = this.resizeListeners.findIndex(item => {
      return item.id === d.id;
    });
    if (index >= 0) {
      this.resizeListeners[index].unsubscribe();
      this.resizeListeners.splice(index, 1);
    }
    index = this.resizeEndListeners.findIndex(item => {
      return item.id === d.id;
    });
    if (index >= 0) {
      this.resizeEndListeners[index].unsubscribe();
      this.resizeEndListeners.splice(index, 1);
    }
  }
  getDashItemById(id: string | number) {
    let index = this.dashItems.findIndex(item => {
      return item.id === id;
    });
    if (index >= 0) {
      return this.dashItems[index];
    }
    return null;
  }
  itemDragging(item: Item) {
    this.itemBeingDragged = true;
    this.placeholder.x = DashItem.getXFromLeft(
      item.left!,
      this.colWidth,
      this.margin
    );
    this.placeholder.y = DashItem.getYFromTop(
      item.top!,
      this.rowHeight,
      this.margin
    );
    this.placeholder.width = item.width;
    this.placeholder.height = item.height;
  }
  itemDraggingComplete(item: Item) {
    this.itemBeingDragged = false;
    let dashItem = this.getDashItemById(item.id);
    if (dashItem) {
      dashItem.x = this.placeholder.x;
      dashItem.y = this.placeholder.y;
    }
    this.placeholder.x = 0;
    this.placeholder.y = 0;
    this.placeholder.width = 0;
    this.placeholder.height = 0;
  }
  itemResizing(item: Item) {
    this.itemBeingResized = true;
    this.placeholder.x = DashItem.getXFromLeft(
      item.left!,
      this.colWidth,
      this.margin
    );
    this.placeholder.y = DashItem.getYFromTop(
      item.top!,
      this.rowHeight,
      this.margin
    );
    this.placeholder.width = DashItem.getWidthFromPx(
      item.widthPx!,
      this.colWidth,
      this.margin
    );
    this.placeholder.height = DashItem.getHeightFromPx(
      item.heightPx!,
      this.rowHeight,
      this.margin
    );
  }
  itemResizingComplete(item: Item) {
    this.itemBeingResized = false;
    let dashItem = this.getDashItemById(item.id);
    if (dashItem) {
      dashItem.x = this.placeholder.x;
      dashItem.y = this.placeholder.y;
      dashItem.width = this.placeholder.width;
      dashItem.height = this.placeholder.height;
    }
    this.placeholder.x = 0;
    this.placeholder.y = 0;
    this.placeholder.width = 0;
    this.placeholder.height = 0;
  }
}
