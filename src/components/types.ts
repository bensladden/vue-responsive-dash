export type DashItem = {
	id: Number | String,
	width: Number,
	height: Number,
	xPos: Number,
	yPos: Number
}

export type Layout = {
	items: DashItem[]
	breakpoint: String
}

export type Breakpoint = {
	setpoint: Number,
	numberOfCols: Number
}

export type Breakpoints = {
	xL: Breakpoint,
	lg: Breakpoint,
	md: Breakpoint,
	sm: Breakpoint,
	xs: Breakpoint,
	xxs: Breakpoint
}


class Dashboard {
	constructor(
		private id: String | Number,
		private breakpoints: Breakpoints,
		private layouts: Layout[]
	) {

	}
	getId() {
		return this.id
	}
	setId(id: String | Number) {
		this.id = id
	}
	getBreakpoints() {
		return this.breakpoints
	}
	setBreakpoints(breakpoints: Breakpoints) {
		this.breakpoints = breakpoints
	}
	getLayoutFromBreakpoint(breakpoint: String) {
		let index = this.layouts.findIndex(el => {
			return breakpoint === el.breakpoint
		})
		if (index > 0) {
			return this.layouts[index]
		}
		return null
	}
}