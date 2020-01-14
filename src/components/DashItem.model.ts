import { SimpleEventDispatcher } from "ste-simple-events";
import { Margin, Item } from "../inferfaces";

export class DashItem {
  private readonly _id: number | string;
  private _x: number;
  private _y: number;
  private _colWidth: number;
  private _rowHeight: number;
  private _margin: Margin;
  private _left: number;
  private _top: number;
  private _width: number;
  private _height: number;
  private _widthPx: number;
  private _heightPx: number;
  private _draggable: boolean;
  private _resizeable: boolean;
  private _resizeEdges: string;
  private _resizeHandleSize: number;
  private _moved: boolean = false;

  private onDragStartEvent = undefined as DragEvent | undefined;
  private onDragStartLeft = 0 as number;
  private onDragStartTop = 0 as number;
  private _onDragStartEvent = new SimpleEventDispatcher<Item>();
  private _onDragEvent = new SimpleEventDispatcher<Item>();
  private _onDragEndEvent = new SimpleEventDispatcher<Item>();
  private onResizeStartEvent = undefined as DragEvent | undefined;
  private onResizeStartLeft = 0 as number;
  private onResizeStartTop = 0 as number;
  private onResizeStartingWidth = 0 as number;
  private onResizeStartingHeight = 0 as number;
  private _onResizeStartEvent = new SimpleEventDispatcher<Item>();
  private _onResizeEvent = new SimpleEventDispatcher<Item>();
  private _onResizeEndEvent = new SimpleEventDispatcher<Item>();

  constructor({
    id,
    x,
    y,
    width,
    height,
    colWidth,
    rowHeight,
    margin,
    draggable,
    resizeable,
    resizeEdges,
    resizeHandleSize
  }: {
    id: string | number;
    x?: number;
    y?: number;
    width?: number;
    height?: number;
    colWidth?: number;
    rowHeight?: number;
    margin?: Margin;
    draggable?: boolean;
    resizeable?: boolean;
    resizeEdges?: string;
    resizeHandleSize?: number;
  }) {
    this._id = id;

    if (typeof colWidth !== "undefined") {
      this._colWidth = colWidth;
    } else {
      this._colWidth = 1;
    }
    if (typeof rowHeight !== "undefined") {
      this._rowHeight = rowHeight;
    } else {
      this._rowHeight = 1;
    }
    if (typeof margin !== "undefined") {
      this._margin = margin;
    } else {
      this._margin = { x: 1, y: 1 };
    }
    if (typeof x !== "undefined") {
      this._x = x;
    } else {
      this._x = 0;
    }
    this._left = DashItem.getLeftFromX(this._x, this._colWidth, this._margin);
    if (typeof y !== "undefined") {
      this._y = y;
    } else {
      this._y = 0;
    }
    this._top = DashItem.getTopFromY(this._y, this._rowHeight, this._margin);
    if (typeof width !== "undefined") {
      this._width = width;
    } else {
      this._width = 0;
    }
    this._widthPx = DashItem.getWidthInPx(
      this._width,
      this._colWidth,
      this._margin
    );
    if (typeof height !== "undefined") {
      this._height = height;
    } else {
      this._height = 0;
    }
    this._heightPx = DashItem.getHeightInPx(
      this._height,
      this._rowHeight,
      this._margin
    );
    if (typeof draggable !== "undefined") {
      this._draggable = draggable;
    } else {
      this._draggable = true;
    }
    if (typeof resizeable !== "undefined") {
      this._resizeable = resizeable;
    } else {
      this._resizeable = true;
    }
    if (typeof resizeEdges !== "undefined") {
      this._resizeEdges = resizeEdges;
    } else {
      this._resizeEdges = "top bottom left right";
    }
    if (typeof resizeHandleSize !== "undefined") {
      this._resizeHandleSize = resizeHandleSize;
    } else {
      this._resizeHandleSize = 8;
    }
  }
  get id() {
    return this._id;
  }
  get x() {
    return this._x;
  }
  set x(x: number) {
    this._x = x;
    this.updatePositionAndSize();
  }
  get y() {
    return this._y;
  }
  set y(y: number) {
    this._y = y;
    this.updatePositionAndSize();
  }
  get colWidth() {
    return this._colWidth;
  }
  set colWidth(c: number) {
    this._colWidth = c;
    this.updatePositionAndSize();
  }
  get rowHeight() {
    return this._rowHeight;
  }
  set rowHeight(r: number) {
    this._rowHeight = r;
    this.updatePositionAndSize();
  }
  get margin() {
    return this._margin;
  }
  set margin(m: Margin) {
    this._margin = m;
    this.updatePositionAndSize();
  }
  get left() {
    return this._left;
  }
  set left(l: number) {
    this._left = l;
  }
  get top() {
    return this._top;
  }
  set top(t: number) {
    this._top = t;
  }
  get width() {
    return this._width;
  }
  set width(w: number) {
    this._width = w;
    this.updatePositionAndSize();
  }
  get height() {
    return this._height;
  }
  set height(h: number) {
    this._height = h;
    this.updatePositionAndSize();
  }
  get widthPx() {
    return this._widthPx;
  }
  set widthPx(w: number) {
    this._widthPx = w;
  }
  get heightPx() {
    return this._heightPx;
  }
  set heightPx(h: number) {
    this._heightPx = h;
  }
  updatePositionAndSize() {
    this.left = DashItem.getLeftFromX(this.x, this.colWidth, this.margin);
    this.top = DashItem.getTopFromY(this.y, this.rowHeight, this.margin);
    this.widthPx = DashItem.getWidthInPx(
      this.width,
      this.colWidth,
      this.margin
    );
    this.heightPx = DashItem.getHeightInPx(
      this.height,
      this.rowHeight,
      this.margin
    );
  }
  get draggable() {
    return this._draggable;
  }
  set draggable(d: boolean) {
    this._draggable = d;
  }
  get resizeable() {
    return this._resizeable;
  }
  set resizeable(r: boolean) {
    this._resizeable = r;
  }
  get resizeEdges() {
    return this._resizeEdges;
  }
  set resizeEdges(e: string) {
    this._resizeEdges = e;
  }
  get resizeHandleSize() {
    return this._resizeHandleSize;
  }
  set resizeHandleSize(rhs: number) {
    this._resizeHandleSize = rhs;
  }
  get moved() {
    return this._moved;
  }
  set moved(m: boolean) {
    this._moved = m;
  }
  toItem() {
    let item = {
      id: this.id,
      x: this.x,
      y: this.y,
      top: this.top,
      left: this.left,
      width: this.width,
      widthPx: this.widthPx,
      height: this.height,
      heightPx: this.heightPx,
      draggable: this.draggable,
      resizeable: this.resizeable
    } as Item;
    return item;
  }
  fromItem(item: Item) {
    this._x = item.x;
    this._y = item.y;
    this._width = item.width;
    this._height = item.height;
    this.updatePositionAndSize();
  }
  //Drag Event Management
  _onDragStart(event: DragEvent) {
    if (event && event.dataTransfer) {
      this.onDragStartEvent = event;
      event.dataTransfer.setData("text/plain", this.id.toString());
    }
    this.onDragStartLeft = this.left;
    this.onDragStartTop = this.top;
    this._onDragStartEvent.dispatch(this.toItem());
  }
  _onDrag(event: DragEvent) {
    if (
      typeof this.onDragStartEvent !== "undefined" &&
      event.screenX > 0 &&
      event.screenY > 0
    ) {
      let left =
        +this.onDragStartLeft - this.onDragStartEvent.screenX + event.screenX;
      let top =
        +this.onDragStartTop - this.onDragStartEvent.screenY + event.screenY;
      this.left = left;
      this.top = top;
      this._onDragEvent.dispatch(this.toItem());
    }
  }
  _onDragEnd(event: DragEvent) {
    event.preventDefault();
    this._onDrag(event);
    this.onDragStartEvent = undefined;
    this.onDragStartLeft = 0;
    this.onDragStartTop = 0;
    if (event.dataTransfer) {
      event.dataTransfer.clearData();
    }
    this._onDragEndEvent.dispatch(this.toItem());
  }
  get onDragStart() {
    return this._onDragStartEvent.asEvent();
  }
  get onDrag() {
    return this._onDragEvent.asEvent();
  }
  get onDragEnd() {
    return this._onDragEndEvent.asEvent();
  }
  //ResizeEventManagement
  _onResizeStart(event: DragEvent, _: string) {
    if (event && event.dataTransfer) {
      this.onResizeStartEvent = event;
      event.dataTransfer.setData("text/plain", this.id.toString());
    }
    this.onResizeStartLeft = this.left;
    this.onResizeStartTop = this.top;
    this.onResizeStartingWidth = this.widthPx;
    this.onResizeStartingHeight = this.heightPx;
    this._onResizeStartEvent.dispatch(this.toItem());
  }
  _onResize(event: DragEvent, location: string) {
    //Should never fire at present
    if (location.includes("left")) {
      let left =
        +this.onResizeStartLeft -
        this.onResizeStartEvent!.screenX +
        event.screenX;
      this.left = left;
      let width =
        +this.onResizeStartingWidth +
        this.onResizeStartEvent!.screenX -
        event.screenX;
      this.widthPx = width;
    }
    //will fire
    if (location.includes("right")) {
      let width =
        +this.onResizeStartingWidth -
        this.onResizeStartEvent!.screenX +
        event.screenX;
      this.widthPx = width;
    }
    //Should never fire currently
    if (location.includes("top")) {
      let top =
        +this.onResizeStartTop -
        this.onResizeStartEvent!.screenY +
        event.screenY;
      this.top = top;
      let height =
        +this.onResizeStartingHeight +
        this.onResizeStartEvent!.screenY -
        event.screenY;
      this.heightPx = height;
    }
    //will fire
    if (location.includes("bottom")) {
      let height =
        +this.onResizeStartingHeight -
        this.onResizeStartEvent!.screenY +
        event.screenY;
      this.heightPx = height;
    }
    this._onResizeEvent.dispatch(this.toItem());
  }
  _onResizeEnd(event: DragEvent, location: string) {
    event.preventDefault();
    this._onResize(event, location);
    this.onResizeStartEvent = undefined;
    this.onResizeStartLeft = 0;
    this.onResizeStartTop = 0;
    this.onResizeStartingHeight = 0;
    this.onResizeStartingWidth = 0;
    this._onResizeEndEvent.dispatch(this.toItem());
  }
  get onResizeStart() {
    return this._onResizeStartEvent.asEvent();
  }
  get onResize() {
    return this._onResizeEvent.asEvent();
  }
  get onResizeEnd() {
    return this._onResizeEndEvent.asEvent();
  }
  //Static Methods
  static getLeftFromX(x: number, colWidth: number, margin: Margin) {
    return Math.round(colWidth * x + (x + 1) * margin.x);
  }
  static getXFromLeft(l: number, colWidth: number, margin: Margin) {
    return Math.round((l - margin.x) / (colWidth + margin.x));
  }
  static getTopFromY(y: number, rowHeight: number, margin: Margin) {
    return Math.round(rowHeight * y + (y + 1) * margin.y);
  }
  static getYFromTop(t: number, rowHeight: number, margin: Margin) {
    return Math.round((t - margin.y) / (rowHeight + margin.y));
  }
  static getWidthInPx(w: number, colWidth: number, margin: Margin) {
    return Math.round(colWidth * w + Math.max(0, w - 1) * margin.x);
  }
  static getWidthFromPx(widthPx: number, colWidth: number, margin: Margin) {
    return Math.round((widthPx + margin.x) / (colWidth + margin.x));
  }
  static getHeightInPx(h: number, rowHeight: number, margin: Margin) {
    return Math.round(rowHeight * h + Math.max(0, h - 1) * margin.y);
  }
  static getHeightFromPx(heightPx: number, rowHeight: number, margin: Margin) {
    return Math.round((heightPx + margin.y) / (rowHeight + margin.y));
  }
}
