import { Margin, Breakpoint } from "../inferfaces";
import { Layout } from "./Layout.model";

export class Dashboard {
  private readonly _id: string | number;
  private _breakpoints: Breakpoint[];
  private _currentBreakpoint: string;
  private _layouts: Layout[];
  private _margin: Margin;
  private _autoHeight: boolean;
  private _width: number;

  constructor({
    id,
    breakpoints,
    margin,
    autoHeight,
    width
  }: {
    id: string | number;
    breakpoints?: Breakpoint[];
    margin?: Margin;
    autoHeight?: boolean;
    width?: number;
  }) {
    this._id = id;
    this._layouts = [];
    //Setup Margins
    if (typeof margin !== "undefined") {
      this._margin = margin;
    } else {
      this._margin = { x: 10, y: 10 };
    }

    if (typeof autoHeight !== "undefined") {
      this._autoHeight = autoHeight;
    } else {
      this._autoHeight = true;
    }

    if (typeof width !== "undefined") {
      this._width = width;
    } else {
      this._width = 400;
    }

    //Setup Breakpoints
    if (typeof breakpoints !== "undefined") {
      this._breakpoints = breakpoints;
    } else {
      this._breakpoints = [
        { name: "xl", numberOfCols: 12 },
        { name: "lg", numberOfCols: 10, setpoint: 1200 },
        { name: "md", numberOfCols: 8, setpoint: 996 },
        { name: "sm", numberOfCols: 4, setpoint: 768 },
        { name: "xs", numberOfCols: 2, setpoint: 480 },
        { name: "xxs", numberOfCols: 1, setpoint: 0 }
      ];
    }
    //Sort Breakpoints to make finding the current breakpoint easy
    this.sortBreakpoints();
    //Update current breakpoint using true method
    this._currentBreakpoint = this.updateCurrentBreakpoint();
  }
  get id() {
    return this._id;
  }
  get breakpoints() {
    return this._breakpoints;
  }
  set breakpoints(b: Breakpoint[]) {
    this._breakpoints = b;
  }
  setBreakpoints(breakpoints: Breakpoint[]) {
    this.breakpoints = breakpoints;
    this.sortBreakpoints();
    //this.updateResponsiveVariables();
  }
  get currentBreakpoint() {
    return this._currentBreakpoint;
  }
  set currentBreakpoint(cb: string) {
    this._currentBreakpoint = cb;
  }
  get layouts() {
    return this._layouts;
  }
  set layouts(l: Layout[]) {
    this._layouts = l;
  }
  get margin() {
    return this._margin;
  }
  set margin(m: Margin) {
    this._margin = m;
  }
  get autoHeight() {
    return this._autoHeight;
  }
  set autoHeight(ah: boolean) {
    this._autoHeight = ah;
  }
  get width() {
    return this._width;
  }
  set width(w: number) {
    this._width = w;
    this.updateCurrentBreakpoint();
    this.updateLayouts();
  }
  updateCurrentBreakpoint() {
    //TODO check if we are right on the edge of a breakpoint (i.e. dont allow a change if a scroll bar is added)
    let previousBreakpoint = this.currentBreakpoint;
    let matching = this.breakpoints[0].name;
    for (let i = 1; i < this.breakpoints.length; i++) {
      if (typeof this.breakpoints[i].setpoint !== undefined) {
        if (this.width > this.breakpoints[i].setpoint!) {
          matching = this.breakpoints[i].name;
        }
      }
    }
    this.currentBreakpoint = matching;
    if (previousBreakpoint !== this.currentBreakpoint) {
      console.log(
        "layout Change Required (from=>to)",
        previousBreakpoint,
        this.currentBreakpoint
      );
    }
    return this.currentBreakpoint;
  }
  setMargins(m: Margin) {
    this.margin = m;
    //this.updateResponsiveVariables();
  }
  sortBreakpoints() {
    this.breakpoints.sort((a, b) => {
      if (
        typeof a.setpoint !== "undefined" &&
        typeof b.setpoint !== "undefined"
      ) {
        return +a.setpoint - +b.setpoint;
      }
      if (typeof a.setpoint == "undefined") {
        return 1;
      }
      return -1;
    });
  }
  addLayoutInstance(l: Layout) {
    this.layouts.push(l);
  }
  updateLayouts() {
    this.layouts.forEach(layout => {
      layout.width = this.width;
    });
  }
  removeLayoutInstance(l: Layout) {
    let index = this.layouts.findIndex(layout => {
      return l.breakpoint === layout.breakpoint;
    });
    if (index >= 0) {
      this.layouts.splice(index, 1);
    }
  }
}
