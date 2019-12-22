export type DashItem = {
	id: Number | String,
	width: Number,
	height: Number,
	xPos: Number,
	yPos: Number,
	draggable?: Boolean,
	resizable?: Boolean
}

export type Layout = {
	items: DashItem[]
	breakpoint: String
}

export type Breakpoint = {
	name: String,
	numberOfCols: Number,
	setpoint?: Number,
}

export type Breakpoints = Breakpoint[]

export type Margins = {
	x: Number,
	y: Number
}
