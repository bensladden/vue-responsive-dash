import { Breakpoint } from "../interfaces";
import { Layout } from "./Layout.model";

export class Dashboard {
  private readonly _id: string | number;
  private _layouts: Layout[];
  private _autoHeight: boolean;
  private _width: number;

  constructor({
    id,
    autoHeight,
    width,
  }: {
    id: string | number;
    autoHeight?: boolean;
    width?: number;
  }) {
    this._id = id;
    this._layouts = [];
    if (typeof autoHeight !== "undefined") {
      this._autoHeight = autoHeight;
    } else {
      this._autoHeight = Dashboard.defaults.autoHeight;
    }

    if (typeof width !== "undefined") {
      this._width = width;
    } else {
      this._width = Dashboard.defaults.width;
    }
  }
  get id() {
    return this._id;
  }
  get breakpoints() {
    let bp: Breakpoint[] = [];
    for (let layout of this._layouts) {
      bp.push({
        name: layout.breakpoint,
        numberOfCols: layout.numberOfCols,
        setpoint: layout.breakpointWidth,
      });
    }
    bp.sort((a, b) => {
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
    return bp;
  }
  get currentBreakpoint() {
    return this.updateCurrentBreakpoint();
  }
  get layouts() {
    return this._layouts;
  }
  set layouts(l: Layout[]) {
    this._layouts = l;
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
    if (this.breakpoints.length == 0) {
      return "";
    }
    //let previousBreakpoint = this.currentBreakpoint;
    let matching = this.breakpoints[0].name;
    for (let i = 1; i < this.breakpoints.length; i++) {
      if (typeof this.breakpoints[i].setpoint !== undefined) {
        if (this.width > this.breakpoints[i].setpoint!) {
          matching = this.breakpoints[i].name;
        }
      }
    }
    return matching;
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
    this._layouts.push(l);
  }
  updateLayouts() {
    this._layouts.forEach((layout) => {
      layout.width = this.width;
    });
  }
  removeLayoutInstance(l: Layout) {
    let index = this.layouts.findIndex((layout) => {
      return l.breakpoint === layout.breakpoint;
    });
    if (index >= 0) {
      this._layouts.splice(index, 1);
    }
  }
  static get defaults() {
    return {
      autoHeight: true as boolean,
      width: 400 as number,
    };
  }
}
