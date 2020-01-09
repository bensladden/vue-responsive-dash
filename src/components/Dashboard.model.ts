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
import { DashItem } from "./DashItem.model";
export class Dashboard {
  protected id: string | number;
  protected breakpoints: Breakpoint[];
  protected currentBreakpoint: string;
  protected layouts: Layout[];
  protected margin: Margin;
  protected autoHeight: boolean;
  protected width: number;
  protected height: number;
  protected colWidth: number;
  protected rowHeight: number;
  protected dashItems: DashItem[];
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
    autoHeight,
    width,
    height,
    rowHeight
  }: {
    id: string | number;
    breakpoints?: Breakpoint[];
    layouts?: Layout[];
    margin?: Margin;
    autoHeight?: boolean;
    width?: number;
    height?: number;
    rowHeight?: number;
  }) {
    this.id = id;
    this.dashItems = [];
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

    if (typeof height !== "undefined") {
      this.height = height;
    } else {
      this.height = 400;
    }
    if (typeof rowHeight !== "undefined") {
      this.rowHeight = rowHeight;
    } else {
      this.rowHeight = 200;
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
    //Dummy Set to keep ts happy
    this.colWidth = 10;
    this.calculateColWidth();
    //Update Height
    if (this.autoHeight) {
      this.calculateHeight();
    }
  }
  setId(id: string | number) {
    this.id = id;
  }
  addDashItem(d: DashItem) {
    this.dashItems.push(d);
    this.updateDashItems();
  }
  removeDashItem(d: DashItem) {
    let index = this.dashItems.findIndex(item => {
      return item.getId() === d.getId();
    });
    if (index >= 0) {
      this.dashItems.splice(index, 1);
    }
  }
  updateDashItems() {
    this.dashItems.forEach(item => {
      item.setColWidth(this.colWidth);
      item.setRowHeight(this.rowHeight);
      item.setMargin(this.margin);
    });
  }
  setBreakpoints(breakpoints: Breakpoint[]) {
    this.breakpoints = breakpoints;
    this.sortBreakpoints();
    this.updateResponsiveVariables();
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
  getItemById(id: number): Item | null {
    let currentLayout = this.getLayoutFromBreakpoint(this.currentBreakpoint);
    if (currentLayout) {
      let index = currentLayout.items.findIndex(item => {
        return item.id === id;
      });
      if (index >= 0) {
        return currentLayout.items[index];
      }
    }
    return null;
  }
  collides(item1: Item, item2: Item) {
    if (item1.id === item2.id) {
      return false;
    }
    if (item1.x + item1.width <= item2.x) {
      return false;
    }
    if (item1.x >= item2.x + item2.width) {
      return false;
    }
    if (item1.y + item1.height <= item2.y) {
      return false;
    }
    if (item1.y >= item2.y + item2.height) {
      return false;
    }
    return true;
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
    this.updateResponsiveVariables();
  }
  setWidth(w: number) {
    this.width = w;
    this.updateResponsiveVariables();
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
  updateResponsiveVariables() {
    this.updateCurrentBreakpoint();
    this.calculateColWidth();
    //Update Height
    if (this.autoHeight) {
      this.calculateHeight();
    }
    //Update dash items
    this.updateDashItems();
  }
  calculateColWidth() {
    const numberOfCols = this.getnumberOfColsFromCurrentBreakpoint();
    this.colWidth =
      (this.width - (this.margin.x + numberOfCols + 1)) / numberOfCols;
  }
  calculateHeight() {
    let layout = this.getLayoutFromBreakpoint(this.currentBreakpoint);
    let maxY = 0;
    let bottomY = 0;
    for (let item of layout!.items) {
      bottomY = item.y + item.height;
      if (bottomY > maxY) {
        maxY = bottomY;
      }
    }
    this.setHeight(maxY * (this.rowHeight + this.margin.y) + this.margin.y);
  }
  getRowHeight() {
    return this.rowHeight;
  }
  getLeftFromX(x: number) {
    return getLeftFromX(x, this.colWidth, this.margin);
  }
  getXFromLeft(l: number) {
    return getXFromLeft(l, this.colWidth, this.margin);
  }
  getTopFromY(y: number) {
    return getTopFromY(y, this.rowHeight, this.margin);
  }
  getYFromTop(t: number) {
    return getYFromTop(t, this.rowHeight, this.margin);
  }
  getWidthInPx(w: number) {
    return getWidthInPx(w, this.colWidth, this.margin);
  }
  getWidthFromPx(widthPx: number) {}
  getHeightInPx(h: number) {
    return getHeightInPx(h, this.rowHeight, this.margin);
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
