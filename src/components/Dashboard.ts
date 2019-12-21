import { Breakpoints, Layout } from "./types"


class Dashboard {
	private id: String | Number;
	private breakpoints: Breakpoints;
	private layouts: Layout[];

	constructor(
		id: String | Number,
		breakpoints?: Breakpoints,
		layouts?: Layout[]
	) {
		this.id = id
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
		}
		if (typeof layouts !== "undefined") {
			this.layouts = layouts
		} else {
			this.layouts = []
			for (let b of this.breakpoints) {
				this.layouts.push({ breakpoint: b.name, items: [] })
			}

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
}