import { Breakpoints, Layout, Margins } from "../types"

class Dashboard {
	private id: String | Number;
	private breakpoints: Breakpoints;
	private layouts: Layout[];
	private margins: Margins;

	constructor(
		id: String | Number,
		breakpoints?: Breakpoints,
		layouts?: Layout[],
		margins?: Margins
	) {
		this.id = id
		//Setup Breakpoints
		if (typeof breakpoints !== "undefined") {
			this.breakpoints = breakpoints
		} else {
			this.breakpoints = [
				{ name: "xl", numberOfCols: 12 },
				{ name: "lg", numberOfCols: 10 },
				{ name: "md", numberOfCols: 8 },
				{ name: "sm", numberOfCols: 4 },
				{ name: "xs", numberOfCols: 2 },
				{ name: "xxs", numberOfCols: 1 }
			]
		}//Import or create new layouts baded on breakpoints
		if (typeof layouts !== "undefined") {
			this.layouts = layouts
		} else {
			this.layouts = []
			for (let b of this.breakpoints) {
				this.layouts.push({ breakpoint: b.name, items: [] })
			}

		}
		//Setup Margins
		if (typeof margins !== "undefined") {
			this.margins = margins
		} else {
			this.margins = { x: 10, y: 10 }
		}
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
		if (index >= 0) {
			return this.layouts[index]
		}
		return null
	}
	setLayout(layout: Layout) {
		let index = this.layouts.findIndex(el => {
			el.breakpoint === layout.breakpoint
		})
		if (index >= 0) {
			this.layouts[index].items = layout.items
		}
	}
	getMargins() {
		return this.margins
	}
	setMargins(m: Margins) {
		this.margins = m
	}
}