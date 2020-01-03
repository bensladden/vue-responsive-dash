export class DashItem {
	protected id: Number | String
	protected x: Number
	protected y: Number
	protected width: Number
	protected height: Number
	protected draggable: Boolean
	protected resizeable: Boolean
	protected resizeEdges: String
	protected resizeHandleSize: Number

	private onDragStartEvent = undefined as DragEvent | undefined
	private onDragStartX = 0 as Number
	private onDragStartY = 0 as Number
	private onResizeStartEvent = undefined as DragEvent | undefined
	private onResizeStartX = 0 as Number
	private onResizeStartY = 0 as Number
	private onResizeStartingWidth = 0 as Number
	private onResizeStartingHeight = 0 as Number

	constructor(
		{ id, x, y, width, height, draggable, resizeable, resizeEdges, resizeHandleSize }: { id: String | Number; x?: Number; y?: Number; width?: Number; height?: Number; draggable?: Boolean; resizeable?: Boolean; resizeEdges?: String; resizeHandleSize?: Number }) {
		this.id = id

		if (typeof x !== "undefined") {
			this.x = x
		} else {
			this.x = 0
		}

		if (typeof y !== "undefined") {
			this.y = y
		} else {
			this.y = 0
		}

		if (typeof width !== "undefined") {
			this.width = width
		} else {
			this.width = 0
		}

		if (typeof height !== "undefined") {
			this.height = height
		} else {
			this.height = 0
		}

		if (typeof draggable !== "undefined") {
			this.draggable = draggable
		} else {
			this.draggable = true
		}

		if (typeof draggable !== "undefined") {
			this.draggable = draggable
		} else {
			this.draggable = true
		}

		if (typeof resizeable !== "undefined") {
			this.resizeable = resizeable
		} else {
			this.resizeable = true
		}

		if (typeof resizeEdges !== "undefined") {
			this.resizeEdges = resizeEdges
		} else {
			this.resizeEdges = "top bottom left right"
		}

		if (typeof resizeHandleSize !== "undefined") {
			this.resizeHandleSize = resizeHandleSize
		} else {
			this.resizeHandleSize = 8
		}
	}
	setX(x: Number) {
		this.x = x
	}
	setY(y: Number) {
		this.y = y
	}
	setWidth(w: Number) {
		this.width = w
	}
	setHeight(h: Number) {
		this.height = h
	}
	setDraggable(d: Boolean) {
		this.draggable = d
	}
	setResizeable(r: Boolean) {
		this.resizeable = r
	}
	setResizeEdges(e: String) {
		this.resizeEdges = e
	}
	setResizeHandleSize(rhs: Number) {
		this.resizeHandleSize = rhs
	}

	onDragStart(event: DragEvent) {
		if (event && event.dataTransfer) {
			this.onDragStartEvent = event
			event.dataTransfer.setData("text/plain", this.id.toString());
		}
		this.onDragStartX = this.x
		this.onDragStartY = this.y
	}
	onDrag(event: DragEvent) {
		if (typeof this.onDragStartEvent !== "undefined") {
			let x = +this.onDragStartX - this.onDragStartEvent.screenX + event.screenX
			let y = +this.onDragStartY - this.onDragStartEvent.screenY + event.screenY
			this.setX(x);
			this.setY(y);
		}
	}
	onDragEnd(event: DragEvent) {
		event.preventDefault();
		let x = +this.onDragStartX - this.onDragStartEvent!.screenX + event.screenX
		let y = +this.onDragStartY - this.onDragStartEvent!.screenY + event.screenY
		this.setX(x);
		this.setY(y);
		this.onDragStartEvent = undefined
		this.onDragStartX = 0;
		this.onDragStartY = 0;
		if (event.dataTransfer) {
			event.dataTransfer.clearData();
		}
	}

	onResizeStart(event: DragEvent, _: string) {
		if (event && event.dataTransfer) {
			this.onResizeStartEvent = event
			event.dataTransfer.setData("text/plain", this.id.toString());
		}
		this.onResizeStartX = this.x
		this.onResizeStartY = this.y
		this.onResizeStartingWidth = this.width
		this.onResizeStartingHeight = this.height
	}
	onResize(event: DragEvent, location: string) {
		if (location.includes("left")) {
			let x = +this.onResizeStartX - this.onResizeStartEvent!.screenX + event.screenX
			this.setX(x)
			let width = +this.onResizeStartingWidth + this.onResizeStartEvent!.screenX - event.screenX
			this.setWidth(width)
		}
		if (location.includes("right")) {
			let width = +this.onResizeStartingWidth - this.onResizeStartEvent!.screenX + event.screenX
			this.setWidth(width)
		}
		if (location.includes("top")) {
			let y = +this.onResizeStartY - this.onResizeStartEvent!.screenY + event.screenY
			this.setY(y)
			let height = +this.onResizeStartingHeight + this.onResizeStartEvent!.screenY - event.screenY
			this.setHeight(height)
		}
		if (location.includes("bottom")) {
			let height = +this.onResizeStartingHeight - this.onResizeStartEvent!.screenY + event.screenY
			this.setHeight(height)
		}

	}
	onResizeEnd(event: DragEvent, location: string) {
		event.preventDefault();
		this.onResize(event, location)
		this.onResizeStartEvent = undefined
		this.onResizeStartX = 0
		this.onResizeStartY = 0
		this.onResizeStartingHeight = 0
		this.onResizeStartingWidth = 0
	}
}