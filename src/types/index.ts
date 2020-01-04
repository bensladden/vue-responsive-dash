import { DashItem } from "../components/DashItem.model"

export type Layout = {
	items: DashItem[]
	breakpoint: string
}

export type Breakpoint = {
	name: string,
	numberOfCols: number,
	setpoint?: number,
}

export type Breakpoints = Breakpoint[]

export type Margins = {
	x: number,
	y: number
}
