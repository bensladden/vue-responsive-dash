export interface Item {
  id: number | string;
  x: number;
  y: number;
  top?: number;
  left?: number;
  width: number;
  minWidth: number | boolean;
  maxWidth: number | boolean;
  widthPx?: number;
  height: number;
  minHeight: number | boolean;
  maxHeight: number | boolean;
  heightPx?: number;
  draggable?: boolean;
  resizable?: boolean;
  moved?: boolean;
  locked?: boolean;
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
