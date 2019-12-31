import { Breakpoints, Layout, Margins } from "../types"
import { DashItem } from "./DashItem.model"

export class Dashboard {
	protected id: String | Number;
	protected breakpoints: Breakpoints;
	protected layouts: Layout[];
	protected margins: Margins;
	protected width: Number;
	protected height: Number;
	protected placeholder = new DashItem({
		id: -1,
		draggable: false,
		resizeable: false,
		x: 0,
		y: 0,
		width: 0,
		height: 0
	}) as DashItem

	constructor(
		{ id, breakpoints, layouts, margins, width, height }: { id: String | Number; breakpoints?: Breakpoints; layouts?: Layout[]; margins?: Margins; width?: Number, height?: Number }) {
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

		if (typeof width !== "undefined") {
			this.width = width
		} else {
			this.width = 400
		}

		if (typeof height !== "undefined") {
			this.height = height
		} else {
			this.height = 400
		}
	}
	setId(id: String | Number) {
		this.id = id
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
	setMargins(m: Margins) {
		this.margins = m
	}
	setWidth(w: Number) {
		this.width = w
	}
	setHeight(h: Number) {
		this.height = h
	}
}