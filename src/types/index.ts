import { DashItem } from "../components/DashItem.model"

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
