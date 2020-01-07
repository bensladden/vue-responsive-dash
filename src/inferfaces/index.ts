export interface Item {
  id: number | String;
  x: number;
  y: number;
  width: number;
  height: number;
  draggable: boolean;
  resizeable: boolean;
}

export interface Layout {
  items: Item[];
  breakpoint: string;
}

export interface Breakpoint {
  name: string;
  numberOfCols: number;
  setpoint?: number;
}

export interface Margin {
  x: number;
  y: number;
}
