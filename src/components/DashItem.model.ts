import {
  getLeftFromX,
  getXFromLeft,
  getTopFromY,
  getYFromTop,
  getWidthInPx,
  getWidthFromPx,
  getHeightInPx,
  getHeightFromPx
} from "./commonFunctions";
import { Margin } from "../inferfaces";

export class DashItem {
  protected id: number | string;
  protected x: number;
  protected y: number;
  protected colWidth: number;
  protected rowHeight: number;
  protected margin: Margin;
  protected left: number;
  protected top: number;
  protected width: number;
  protected height: number;
  protected widthPx: number;
  protected heightPx: number;
  protected draggable: boolean;
  protected resizeable: boolean;
  protected resizeEdges: string;
  protected resizeHandleSize: number;

  private onDragStartEvent = undefined as DragEvent | undefined;
  private onDragStartLeft = 0 as number;
  private onDragStartTop = 0 as number;
  private onResizeStartEvent = undefined as DragEvent | undefined;
  private onResizeStartLeft = 0 as number;
  private onResizeStartTop = 0 as number;
  private onResizeStartingWidth = 0 as number;
  private onResizeStartingHeight = 0 as number;

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
    this.id = id;

    if (typeof colWidth !== "undefined") {
      this.colWidth = colWidth;
    } else {
      this.colWidth = 1;
    }
    if (typeof rowHeight !== "undefined") {
      this.rowHeight = rowHeight;
    } else {
      this.rowHeight = 1;
    }
    if (typeof margin !== "undefined") {
      this.margin = margin;
    } else {
      this.margin = { x: 1, y: 1 };
    }
    if (typeof x !== "undefined") {
      this.x = x;
    } else {
      this.x = 0;
    }
    this.left = getLeftFromX(this.x, this.colWidth, this.margin);
    if (typeof y !== "undefined") {
      this.y = y;
    } else {
      this.y = 0;
    }
    this.top = getTopFromY(this.y, this.rowHeight, this.margin);
    if (typeof width !== "undefined") {
      this.width = width;
    } else {
      this.width = 0;
    }
    this.widthPx = getWidthInPx(this.width, this.colWidth, this.margin);
    if (typeof height !== "undefined") {
      this.height = height;
    } else {
      this.height = 0;
    }
    this.heightPx = getHeightInPx(this.height, this.rowHeight, this.margin);
    if (typeof draggable !== "undefined") {
      this.draggable = draggable;
    } else {
      this.draggable = true;
    }

    if (typeof draggable !== "undefined") {
      this.draggable = draggable;
    } else {
      this.draggable = true;
    }

    if (typeof resizeable !== "undefined") {
      this.resizeable = resizeable;
    } else {
      this.resizeable = true;
    }

    if (typeof resizeEdges !== "undefined") {
      this.resizeEdges = resizeEdges;
    } else {
      this.resizeEdges = "top bottom left right";
    }

    if (typeof resizeHandleSize !== "undefined") {
      this.resizeHandleSize = resizeHandleSize;
    } else {
      this.resizeHandleSize = 8;
    }
  }
  getId() {
    return this.id;
  }
  setX(x: number) {
    this.x = x;
  }
  setY(y: number) {
    this.y = y;
  }
  setColWidth(c: number) {
    this.colWidth = c;
  }
  setRowHeight(r: number) {
    this.rowHeight = r;
  }
  setLeft(l: number) {
    this.left = l;
  }
  setTop(t: number) {
    this.top = t;
  }
  setXAndUpdateLeft(x: number) {
    this.setX(x);
    this.setLeft(getLeftFromX(x, this.colWidth, this.margin));
  }
  setYAndUpdateTop(y: number) {
    this.setY(y);
    this.setTop(getTopFromY(y, this.rowHeight, this.margin));
  }
  setWidth(w: number) {
    this.width = w;
  }
  setHeight(h: number) {
    this.height = h;
  }
  setWidthPx(w: number) {
    this.widthPx = w;
  }
  setHeightPx(h: number) {
    this.heightPx = h;
  }
  setWidthAndUpdatePx(w: number) {
    this.setWidth(w);
    this.setWidthPx(getWidthInPx(w, this.colWidth, this.margin));
  }
  setHeightAndUpdatePx(h: number) {
    this.setHeight(h);
    this.setHeightPx(getHeightInPx(h, this.rowHeight, this.margin));
  }
  setDraggable(d: boolean) {
    this.draggable = d;
  }
  setResizeable(r: boolean) {
    this.resizeable = r;
  }
  setResizeEdges(e: string) {
    this.resizeEdges = e;
  }
  setResizeHandleSize(rhs: number) {
    this.resizeHandleSize = rhs;
  }
  onDragStart(event: DragEvent) {
    if (event && event.dataTransfer) {
      this.onDragStartEvent = event;
      event.dataTransfer.setData("text/plain", this.id.toString());
    }
    this.onDragStartLeft = this.left;
    this.onDragStartTop = this.top;
  }
  onDrag(event: DragEvent) {
    if (
      typeof this.onDragStartEvent !== "undefined" &&
      event.screenX > 0 &&
      event.screenY > 0
    ) {
      let left =
        +this.onDragStartLeft - this.onDragStartEvent.screenX + event.screenX;
      let top =
        +this.onDragStartTop - this.onDragStartEvent.screenY + event.screenY;
      this.setLeft(left);
      this.setTop(top);
    }
  }
  onDragEnd(event: DragEvent) {
    event.preventDefault();
    this.onDrag(event);
    this.onDragStartEvent = undefined;
    this.onDragStartLeft = 0;
    this.onDragStartTop = 0;
    if (event.dataTransfer) {
      event.dataTransfer.clearData();
    }
  }
  onResizeStart(event: DragEvent, _: string) {
    if (event && event.dataTransfer) {
      this.onResizeStartEvent = event;
      event.dataTransfer.setData("text/plain", this.id.toString());
    }
    this.onResizeStartLeft = this.left;
    this.onResizeStartTop = this.top;
    this.onResizeStartingWidth = this.width;
    this.onResizeStartingHeight = this.height;
  }
  onResize(event: DragEvent, location: string) {
    if (location.includes("left")) {
      let left =
        +this.onResizeStartLeft -
        this.onResizeStartEvent!.screenX +
        event.screenX;
      this.setLeft(left);
      let width =
        +this.onResizeStartingWidth +
        this.onResizeStartEvent!.screenX -
        event.screenX;
      this.setWidth(width);
    }
    if (location.includes("right")) {
      let width =
        +this.onResizeStartingWidth -
        this.onResizeStartEvent!.screenX +
        event.screenX;
      this.setWidth(width);
    }
    if (location.includes("top")) {
      let top =
        +this.onResizeStartTop -
        this.onResizeStartEvent!.screenY +
        event.screenY;
      this.setTop(top);
      let height =
        +this.onResizeStartingHeight +
        this.onResizeStartEvent!.screenY -
        event.screenY;
      this.setHeight(height);
    }
    if (location.includes("bottom")) {
      let height =
        +this.onResizeStartingHeight -
        this.onResizeStartEvent!.screenY +
        event.screenY;
      this.setHeight(height);
    }
  }
  onResizeEnd(event: DragEvent, location: string) {
    event.preventDefault();
    this.onResize(event, location);
    this.onResizeStartEvent = undefined;
    this.onResizeStartLeft = 0;
    this.onResizeStartTop = 0;
    this.onResizeStartingHeight = 0;
    this.onResizeStartingWidth = 0;
  }
}
