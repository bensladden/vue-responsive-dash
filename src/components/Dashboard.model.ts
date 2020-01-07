import { Item, Layout, Margin, Breakpoint } from "../inferfaces";
import {
  getLeftFromX,
  getXFromLeft,
  getTopFromY,
  getYFromTop,
  getWidthInPx,
  getWidthFromPx,
  getHeightInPx,
  getHeightFromPx
} from "./commonFunctions";
export class Dashboard {
  protected id: string | number;
  protected breakpoints: Breakpoint[];
  protected currentBreakpoint: string;
  protected layouts: Layout[];
  protected margin: Margin;
  protected width: number;
  protected height: number;
  protected placeholder = {
    id: -1,
    draggable: false,
    resizeable: false,
    x: 0,
    y: 0,
    width: 1,
    height: 1
  } as Item;

  constructor({
    id,
    breakpoints,
    layouts,
    margin,
    width,
    height
  }: {
    id: string | number;
    breakpoints?: Breakpoint[];
    layouts?: Layout[];
    margin?: Margin;
    width?: number;
    height?: number;
  }) {
    this.id = id;
    //Setup Margins
    if (typeof margin !== "undefined") {
      this.margin = margin;
    } else {
      this.margin = { x: 10, y: 10 };
    }

    if (typeof width !== "undefined") {
      this.width = width;
    } else {
      this.width = 400;
    }

    if (typeof height !== "undefined") {
      this.height = height;
    } else {
      this.height = 400;
    }
    //Setup Breakpoints
    if (typeof breakpoints !== "undefined") {
      this.breakpoints = breakpoints;
    } else {
      this.breakpoints = [
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
    //Dummy Set to keep ts happy
    this.currentBreakpoint = "";
    //Update current breakpoint using true method
    this.updateCurrentBreakpoint();
    //Import or create new layouts baded on breakpoints
    if (typeof layouts !== "undefined") {
      this.layouts = layouts;
    } else {
      this.layouts = [];
      for (let b of this.breakpoints) {
        this.layouts.push({ breakpoint: b.name, items: [] });
      }
    }
  }
  setId(id: string | number) {
    this.id = id;
  }
  setBreakpoints(breakpoints: Breakpoint[]) {
    this.breakpoints = breakpoints;
    this.sortBreakpoints();
    this.updateCurrentBreakpoint();
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
  }
  getLayoutFromBreakpoint(breakpoint: string): Layout | null {
    let index = this.layouts.findIndex(el => {
      return breakpoint === el.breakpoint;
    });
    if (index >= 0) {
      return this.layouts[index];
    }
    return null;
  }
  getnumberOfColsFromCurrentBreakpoint() {
    let index = this.breakpoints.findIndex(el => {
      return this.currentBreakpoint === el.name;
    });
    if (index >= 0) {
      return this.breakpoints[index].numberOfCols;
    }
    return 12;
  }
  setLayout(layout: Layout) {
    let index = this.layouts.findIndex(el => {
      el.breakpoint === layout.breakpoint;
    });
    if (index >= 0) {
      this.layouts[index].items = layout.items;
    }
  }
  setMargins(m: Margin) {
    this.margin = m;
  }
  setWidth(w: number) {
    this.width = w;
    this.updateCurrentBreakpoint();
  }
  setHeight(h: number) {
    this.height = h;
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
  getColWidth() {
    const numberOfCols = this.getnumberOfColsFromCurrentBreakpoint();
    return (this.width - (this.margin.x + numberOfCols + 1)) / numberOfCols;
  }
  getRowHeight() {
    return 130; //TODO
  }
  getLeftFromX(x: number) {
    const colWidth = this.getColWidth();
    return getLeftFromX(x, colWidth, this.margin);
  }
  getXFromLeft(l: number) {
    const colWidth = this.getColWidth();
    return getXFromLeft(l, colWidth, this.margin);
  }
  getTopFromY(y: number) {
    const rowHeight = this.getRowHeight();
    return getTopFromY(y, rowHeight, this.margin);
  }
  getYFromTop(t: number) {
    const rowHeight = this.getRowHeight();
    return getYFromTop(t, rowHeight, this.margin);
  }
  getWidthInPx(w: number) {
    const colWidth = this.getColWidth();
    return getWidthInPx(w, colWidth, this.margin);
  }
  getWidthFromPx(widthPx: number) {}
  getHeightInPx(h: number) {
    const rowHeight = this.getRowHeight();
    return getHeightInPx(h, rowHeight, this.margin);
  }
  getHeightFromPx(heightPx: number) {}
  addItemtoLayouts(d: Item) {
    let ids = this.layouts[0].items.map(i => {
      return i.id;
    });
    if (!ids.includes(d.id) && d.id !== this.placeholder.id) {
      for (let l of this.layouts) {
        l.items.push(d);
      }
      console.log("Item Added => Commence verifying layouts");
    } else {
      throw Error("Must be Unique ID");
    }
  }
}
