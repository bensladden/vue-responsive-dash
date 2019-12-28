export class DashItem {
	private id: Number | String
	private x: Number
	private y: Number
	private width: Number
	private height: Number
	private draggable: Boolean
	private resizeable: Boolean
	private resizeEdges: String
	private resizeHandleSize: Number

	private onDragStartEvent: DragEvent | undefined
	private onDragStartX: Number
	private onDragStartY: Number

	constructor(
		id: String | Number,
		x?: Number,
		y?: Number,
		width?: Number,
		height?: Number,
		draggable?: Boolean,
		resizeable?: Boolean,
		resizeEdges?: String,
		resizeHandleSize?: Number
	) {
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
		this.onDragStartX = 0
		this.onDragStartY = 0
	}

	getId() {
		return this.id
	}
	getX() {
		return this.x
	}
	setX(x: Number) {
		this.x = x
	}
	getY() {
		return this.y
	}
	setY(y: Number) {
		this.y = y
	}
	getWidth() {
		return this.width
	}
	setWidth(w: Number) {
		this.width = w
	}
	getHeight() {
		return this.height
	}
	setHeight(h: Number) {
		this.height = h
	}

	onDragStart(event: DragEvent) {
		this.onDragStartEvent = event
		this.onDragStartX = this.x
	}
	onDrag(event: DragEvent) {
		if (typeof this.onDragStartEvent !== "undefined") {
			let x = +this.onDragStartX - this.onDragStartEvent?.screenX + event.screenX
			let y = +this.onDragStartY - this.onDragStartEvent?.screenY + event.screenY
			this.setX(x);
			this.setY(y);
		}

	}
	onDragEnd(event: DragEvent) {

	}

}