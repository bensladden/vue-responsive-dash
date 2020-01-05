export class DashItem {
  protected id: number | string;
  protected x: number;
  protected y: number;
  protected width: number;
  protected height: number;
  protected draggable: boolean;
  protected resizeable: boolean;
  protected resizeEdges: string;
  protected resizeHandleSize: number;

  private onDragStartEvent = undefined as DragEvent | undefined;
  private onDragStartX = 0 as number;
  private onDragStartY = 0 as number;
  private onResizeStartEvent = undefined as DragEvent | undefined;
  private onResizeStartX = 0 as number;
  private onResizeStartY = 0 as number;
  private onResizeStartingWidth = 0 as number;
  private onResizeStartingHeight = 0 as number;

  constructor({
    id,
    x,
    y,
    width,
    height,
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
    draggable?: boolean;
    resizeable?: boolean;
    resizeEdges?: string;
    resizeHandleSize?: number;
  }) {
    this.id = id;

    if (typeof x !== "undefined") {
      this.x = x;
    } else {
      this.x = 0;
    }

    if (typeof y !== "undefined") {
      this.y = y;
    } else {
      this.y = 0;
    }

    if (typeof width !== "undefined") {
      this.width = width;
    } else {
      this.width = 0;
    }

    if (typeof height !== "undefined") {
      this.height = height;
    } else {
      this.height = 0;
    }

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
  setWidth(w: number) {
    this.width = w;
  }
  setHeight(h: number) {
    this.height = h;
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
    this.onDragStartX = this.x;
    this.onDragStartY = this.y;
  }
  onDrag(event: DragEvent) {
    if (typeof this.onDragStartEvent !== "undefined") {
      let x =
        +this.onDragStartX - this.onDragStartEvent.screenX + event.screenX;
      let y =
        +this.onDragStartY - this.onDragStartEvent.screenY + event.screenY;
      this.setX(x);
      this.setY(y);
    }
  }
  onDragEnd(event: DragEvent) {
    event.preventDefault();
    let x = +this.onDragStartX - this.onDragStartEvent!.screenX + event.screenX;
    let y = +this.onDragStartY - this.onDragStartEvent!.screenY + event.screenY;
    this.setX(x);
    this.setY(y);
    this.onDragStartEvent = undefined;
    this.onDragStartX = 0;
    this.onDragStartY = 0;
    if (event.dataTransfer) {
      event.dataTransfer.clearData();
    }
  }

  onResizeStart(event: DragEvent, _: string) {
    if (event && event.dataTransfer) {
      this.onResizeStartEvent = event;
      event.dataTransfer.setData("text/plain", this.id.toString());
    }
    this.onResizeStartX = this.x;
    this.onResizeStartY = this.y;
    this.onResizeStartingWidth = this.width;
    this.onResizeStartingHeight = this.height;
  }
  onResize(event: DragEvent, location: string) {
    if (location.includes("left")) {
      let x =
        +this.onResizeStartX - this.onResizeStartEvent!.screenX + event.screenX;
      this.setX(x);
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
      let y =
        +this.onResizeStartY - this.onResizeStartEvent!.screenY + event.screenY;
      this.setY(y);
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
    this.onResizeStartX = 0;
    this.onResizeStartY = 0;
    this.onResizeStartingHeight = 0;
    this.onResizeStartingWidth = 0;
  }
}
