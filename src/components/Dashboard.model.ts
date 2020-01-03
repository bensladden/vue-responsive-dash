import { Breakpoints, Layout, Margins } from "../types"
import { DashItem } from "./DashItem.model"

export class Dashboard {
	protected id: String | Number;
	protected breakpoints: Breakpoints;
	protected currentBreakpoint: String;
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
		//Setup Breakpoints
		if (typeof breakpoints !== "undefined") {
			this.breakpoints = breakpoints
		} else {
			this.breakpoints = [
				{ name: "xl", numberOfCols: 12 },
				{ name: "lg", numberOfCols: 10, setpoint: 1200 },
				{ name: "md", numberOfCols: 8, setpoint: 996 },
				{ name: "sm", numberOfCols: 4, setpoint: 768 },
				{ name: "xs", numberOfCols: 2, setpoint: 480 },
				{ name: "xxs", numberOfCols: 1, setpoint: 0 }
			]
		}
		//Sort Breakpoints to make finding the current breakpoint easy
		this.sortBreakpoints()
		//Dummy Set to keep ts happy
		this.currentBreakpoint = this.breakpoints[0].name
		//Update current breakpoint using true method
		this.updateCurrentBreakpoint()
		//Import or create new layouts baded on breakpoints
		if (typeof layouts !== "undefined") {
			this.layouts = layouts
		} else {
			this.layouts = []
			for (let b of this.breakpoints) {
				this.layouts.push({ breakpoint: b.name, items: [] })
			}

		}

	}
	setId(id: String | Number) {
		this.id = id
	}
	setBreakpoints(breakpoints: Breakpoints) {
		this.breakpoints = breakpoints
		this.sortBreakpoints()
		this.updateCurrentBreakpoint()
	}
	updateCurrentBreakpoint() {
		let previousBreakpoint = this.currentBreakpoint
		let matching = this.breakpoints[0].name
		for (let i = 1; i < this.breakpoints.length; i++) {
			if (typeof this.breakpoints[i].setpoint !== undefined) {
				if (this.width > this.breakpoints[i].setpoint!) {
					matching = this.breakpoints[i].name
				}
			}
		}
		this.currentBreakpoint = matching
		if (previousBreakpoint !== this.currentBreakpoint) {
			console.log("layout Change Required (from=>to)", previousBreakpoint, this.currentBreakpoint)
		}
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
		this.updateCurrentBreakpoint()
	}
	setHeight(h: Number) {
		this.height = h
	}
	sortBreakpoints() {
		this.breakpoints.sort((a, b) => {
			if (typeof a.setpoint !== "undefined" && typeof b.setpoint !== "undefined") {
				return (+a.setpoint) - (+b.setpoint)
			}
			if (typeof a.setpoint == "undefined") {
				return 1
			}
			return -1
		})
	}
}