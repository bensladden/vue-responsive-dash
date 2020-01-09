import { Margin, Breakpoint } from "../inferfaces";
import { Layout } from "./Layout.model";

export class Dashboard {
  protected id: string | number;
  protected breakpoints: Breakpoint[];
  protected currentBreakpoint: string;
  protected layouts: Layout[];
  protected margin: Margin;
  protected autoHeight: boolean;
  protected width: number;

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
    this.id = id;
    this.layouts = [];
    //Setup Margins
    if (typeof margin !== "undefined") {
      this.margin = margin;
    } else {
      this.margin = { x: 10, y: 10 };
    }

    if (typeof autoHeight !== "undefined") {
      this.autoHeight = autoHeight;
    } else {
      this.autoHeight = true;
    }

    if (typeof width !== "undefined") {
      this.width = width;
    } else {
      this.width = 400;
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
    //Update current breakpoint using true method
    this.currentBreakpoint = this.updateCurrentBreakpoint();
  }
  setId(id: string | number) {
    this.id = id;
  }
  // addDashItem(d: DashItem) {
  //   this.dashItems.push(d);
  //   this.updateDashItems();
  // }
  // removeDashItem(d: DashItem) {
  //   let index = this.dashItems.findIndex(item => {
  //     return item.getId() === d.getId();
  //   });
  //   if (index >= 0) {
  //     this.dashItems.splice(index, 1);
  //   }
  // }
  // updateDashItems() {
  //   this.dashItems.forEach(item => {
  //     item.setColWidth(this.colWidth);
  //     item.setRowHeight(this.rowHeight);
  //     item.setMargin(this.margin);
  //   });
  // }
  setBreakpoints(breakpoints: Breakpoint[]) {
    this.breakpoints = breakpoints;
    this.sortBreakpoints();
    //this.updateResponsiveVariables();
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
  setWidth(w: number) {
    this.width = w;
    this.updateCurrentBreakpoint();
    this.updateLayouts();
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
      layout.setWidth(this.width);
    });
  }
  removeLayoutInstance(l: Layout) {
    let index = this.layouts.findIndex(layout => {
      return l.getBreakpoint() === layout.getBreakpoint();
    });
    if (index >= 0) {
      this.layouts.splice(index, 1);
    }
  }
}
