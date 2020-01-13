export interface Item {
  id: number | string;
  x: number;
  y: number;
  top?: number;
  left?: number;
  width: number;
  widthPx?: number;
  height: number;
  heightPx?: number;
  draggable?: boolean;
  resizeable?: boolean;
  moved?: boolean;
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

export interface Subscription {
  id: number | string;
  unsubscribe: () => void;
}
