import { SimpleEventDispatcher } from "ste-simple-events";
import { Margin, Item } from "../interfaces";
import { ResizeEvent } from "@interactjs/types";
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
  private _minWidth: number | boolean;
  private _maxWidth: number | boolean;
  private _minHeight: number | boolean;
  private _maxHeight: number | boolean;
  private _widthPx: number;
  private _heightPx: number;
  private _draggable: boolean;
  private _resizable: boolean;
  private _resizeEdges: string;
  private _resizeHandleSize: number;
  private _moved: boolean = false;
  private _hover: boolean = false;
  private _resizeHold: number;
  private _moveHold: number;
  private _locked: boolean;

  private _moving = false as boolean;
  private _resizing = false as boolean;
  private _onMoveStartEventDispatcher = new SimpleEventDispatcher<Item>();
  private _onMoveEventDispatcher = new SimpleEventDispatcher<Item>();
  private _onMoveEndEventDispatcher = new SimpleEventDispatcher<Item>();
  private _onResizeStartEventDispatcher = new SimpleEventDispatcher<Item>();
  private _onResizeEventDispatcher = new SimpleEventDispatcher<Item>();
  private _onResizeEndEventDispatcher = new SimpleEventDispatcher<Item>();

  constructor({
    id,
    x,
    y,
    width,
    height,
    minWidth,
    maxWidth,
    minHeight,
    maxHeight,
    colWidth,
    rowHeight,
    margin,
    draggable,
    resizable,
    resizeEdges,
    resizeHandleSize,
    moveHold,
    resizeHold,
    locked,
  }: {
    id: string | number;
    x?: number;
    y?: number;
    width?: number;
    height?: number;
    minWidth?: number | boolean;
    maxWidth?: number | boolean;
    minHeight?: number | boolean;
    maxHeight?: number | boolean;
    colWidth?: number;
    rowHeight?: number;
    margin?: Margin;
    draggable?: boolean;
    resizable?: boolean;
    resizeEdges?: string;
    resizeHandleSize?: number;
    moveHold?: number;
    resizeHold?: number;
    locked?: boolean;
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
      this._x = DashItem.defaults.x;
    }
    this._left = DashItem.getLeftFromX(this._x, this._colWidth, this._margin);
    if (typeof y !== "undefined") {
      this._y = y;
    } else {
      this._y = DashItem.defaults.y;
    }
    this._top = DashItem.getTopFromY(this._y, this._rowHeight, this._margin);

    if (typeof minWidth !== "undefined") {
      this._minWidth = minWidth;
    } else {
      this._minWidth = DashItem.defaults.minWidth;
    }
    if (typeof maxWidth !== "undefined") {
      this._maxWidth = maxWidth;
    } else {
      this._maxWidth = DashItem.defaults.maxWidth;
    }
    if (typeof width !== "undefined") {
      this._width = width;
    } else {
      this._width = DashItem.defaults.width;
    }
    if (typeof minHeight !== "undefined") {
      this._minHeight = minHeight;
    } else {
      this._minHeight = DashItem.defaults.minHeight;
    }
    if (typeof maxHeight !== "undefined") {
      this._maxHeight = maxHeight;
    } else {
      this._maxHeight = DashItem.defaults.maxHeight;
    }
    if (typeof height !== "undefined") {
      this._height = height;
    } else {
      this._height = DashItem.defaults.height;
    }
    this._widthPx = DashItem.getWidthInPx(
      this._width,
      this._colWidth,
      this._margin
    );
    this._heightPx = DashItem.getHeightInPx(
      this._height,
      this._rowHeight,
      this._margin
    );
    if (typeof draggable !== "undefined") {
      this._draggable = draggable;
    } else {
      this._draggable = DashItem.defaults.draggable!;
    }
    if (typeof resizable !== "undefined") {
      this._resizable = resizable;
    } else {
      this._resizable = DashItem.defaults.resizable!;
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
    if (typeof moveHold !== "undefined") {
      this._moveHold = moveHold;
    } else {
      this._moveHold = 0;
    }
    if (typeof resizeHold !== "undefined") {
      this._resizeHold = resizeHold;
    } else {
      this._resizeHold = 0;
    }
    if (typeof locked !== "undefined") {
      this._locked = locked;
    } else {
      this._locked = DashItem.defaults.locked!;
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
    if (!this._moving && !this._resizing) {
      this._left = l;
    }
  }
  get top() {
    return this._top;
  }
  set top(t: number) {
    if (!this._moving && !this._resizing) {
      this._top = t;
    }
  }
  get minWidth() {
    return this._minWidth;
  }
  set minWidth(mW: number | boolean) {
    this._minWidth = mW;
  }
  get maxWidth() {
    return this._maxWidth;
  }
  set maxWidth(mW: number | boolean) {
    this._maxWidth = mW;
  }
  get width() {
    return this._width;
  }
  set width(w: number) {
    this._width = w;
    this.checkSizeLimits();
    this.updatePositionAndSize();
  }

  get minHeight() {
    return this._minHeight;
  }
  set minHeight(mW: number | boolean) {
    this._minHeight = mW;
  }
  get maxHeight() {
    return this._maxHeight;
  }
  set maxHeight(mW: number | boolean) {
    this._maxHeight = mW;
  }
  get height() {
    return this._height;
  }
  set height(h: number) {
    this._height = h;
    this.checkSizeLimits();
    this.updatePositionAndSize();
  }
  get widthPx() {
    return this._widthPx;
  }
  set widthPx(w: number) {
    if (!this._resizing) {
      this._widthPx = w;
    }
  }
  get heightPx() {
    return this._heightPx;
  }
  set heightPx(h: number) {
    if (!this._resizing) {
      this._heightPx = h;
    }
  }
  get hover() {
    return this._hover;
  }
  set hover(h: boolean) {
    this._hover = h;
  }
  get moveHold() {
    return this._moveHold;
  }
  set moveHold(dh: number) {
    this._moveHold = dh;
  }
  get resizeHold() {
    return this._resizeHold;
  }
  set resizeHold(rh: number) {
    this._resizeHold = rh;
  }
  get moving() {
    return this._moving;
  }
  get resizing() {
    return this._resizing;
  }
  checkSizeLimits() {
    if (typeof this.maxWidth == "number") {
      if (this.width > this.maxWidth) {
        this.width = this.maxWidth;
      }
    }
    if (typeof this.minWidth == "number") {
      if (this.width < this.minWidth) {
        this.width = this.minWidth;
      }
    }
    if (typeof this.maxHeight == "number") {
      if (this.height > this.maxHeight) {
        this.height = this.maxHeight;
      }
    }
    if (typeof this.minHeight == "number") {
      if (this.height < this.minHeight) {
        this.height = this.minHeight;
      }
    }
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
  get resizable() {
    return this._resizable;
  }
  set resizable(r: boolean) {
    this._resizable = r;
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
  get locked() {
    return this._locked;
  }
  set locked(l: boolean) {
    this._locked = l;
  }
  toItem() {
    let item = {
      id: this.id,
      x: this.x,
      y: this.y,
      top: this.top,
      left: this.left,
      width: this.width,
      maxWidth: this.maxWidth,
      minWidth: this.minWidth,
      widthPx: this.widthPx,
      height: this.height,
      maxHeight: this.maxHeight,
      minHeight: this.minHeight,
      heightPx: this.heightPx,
      draggable: this.draggable,
      resizable: this.resizable,
      locked: this.locked,
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
  _onMoveStart() {
    this._moving = true;
    this._onMoveStartEventDispatcher.dispatch(this.toItem());
  }
  _onMove(left: number, top: number) {
    this._left += left;
    this._top += top;
    this._onMoveEventDispatcher.dispatch(this.toItem());
  }
  _onMoveEnd() {
    this._moving = false;
    this._onMoveEndEventDispatcher.dispatch(this.toItem());
  }
  get onMoveStart() {
    return this._onMoveStartEventDispatcher.asEvent();
  }
  get onMove() {
    return this._onMoveEventDispatcher.asEvent();
  }
  get onMoveEnd() {
    return this._onMoveEndEventDispatcher.asEvent();
  }
  //ResizeEventManagement
  _onResizeStart() {
    this._resizing = true;
    this._onResizeStartEventDispatcher.dispatch(this.toItem());
  }
  _onResize(event: ResizeEvent) {
    this._left += event.deltaRect!.left;
    this._top += event.deltaRect!.top;
    this._widthPx = event.rect.width;
    this._heightPx = event.rect.height;
    this._onResizeEventDispatcher.dispatch(this.toItem());
  }
  _onResizeEnd() {
    this._resizing = false;
    this._onResizeEndEventDispatcher.dispatch(this.toItem());
  }
  get onResizeStart() {
    return this._onResizeStartEventDispatcher.asEvent();
  }
  get onResize() {
    return this._onResizeEventDispatcher.asEvent();
  }
  get onResizeEnd() {
    return this._onResizeEndEventDispatcher.asEvent();
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
  static get defaults() {
    let defaults: Item = {
      id: "",
      x: 0,
      y: 0,
      width: 1,
      height: 1,
      minWidth: 1,
      maxWidth: false,
      minHeight: 1,
      maxHeight: false,
      draggable: true,
      resizable: true,
      locked: false,
    };
    return defaults;
  }
  static cssTransform(
    top: number,
    left: number,
    widthPx: number,
    heightPx: number
  ) {
    const translate = "translate3d(" + left + "px," + top + "px, 0)";
    return {
      transform: translate,
      WebkitTransform: translate,
      MozTransform: translate,
      msTransform: translate,
      OTransform: translate,
      width: widthPx + "px",
      height: heightPx + "px",
    };
  }
  static cssTopLeft(
    top: number,
    left: number,
    widthPx: number,
    heightPx: number
  ) {
    return {
      top: top + "px",
      left: left + "px",
      width: widthPx + "px",
      height: heightPx + "px",
    };
  }
}
