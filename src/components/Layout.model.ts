import { Item, Margin } from "@/inferfaces";
import { DashItem } from "./DashItem.model";

export class Layout {
  protected breakpoint: string;
  protected items: Item[];
  protected margin: Margin;
  protected width: number;
  protected height: number;
  protected numberOfCols: number;
  protected autoHeight: boolean;
  protected rowHeight: number;
  protected colWidth: number;
  protected dashItems: DashItem[];

  constructor({
    breakpoint,
    items,
    margin,
    numberOfCols,
    autoHeight,
    width,
    height,
    rowHeight
  }: {
    breakpoint: string;
    items: Item[];
    numberOfCols: number;
    margin?: Margin;
    autoHeight?: boolean;
    width?: number;
    height?: number;
    rowHeight?: number;
  }) {
    this.breakpoint = breakpoint;
    this.items = items;
    this.numberOfCols = numberOfCols;
    this.dashItems = [];

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

    this.colWidth = this.calculateColWidth();
    if (this.autoHeight) {
      this.calculateHeight();
    }
  }
  getBreakpoint() {
    return this.breakpoint;
  }
  setWidth(w: number) {
    this.width = w;
    this.updateResponsiveVariables();
  }
  setNumberOfCols(n: number) {
    this.numberOfCols = n;
    this.updateResponsiveVariables();
  }

  //Item Methods
  getItemById(id: String | Number) {
    let index = this.items.findIndex(item => {
      return item.id === id;
    });
    if (index >= 0) {
      return this.items[index];
    }
    return null;
  }
  addItem(item: Item) {
    if (!this.getItemById(item.id)) {
      this.items.push(item);
    }
  }
  setItem(item: Item) {
    let index = this.items.findIndex(i => {
      return i.id === item.id;
    });
    if (index >= 0) {
      this.items[index] = item;
    }
  }
  removeItem(item: Item) {
    let index = this.items.findIndex(i => {
      return i.id === item.id;
    });
    if (index >= 0) {
      this.items.splice(index, 1);
    }
  }
  sortItems() {
    this.items.sort((a, b) => {
      if (a.y > b.y || (a.y === b.y && a.x > b.x)) {
        return 1;
      }
      return -1;
    });
  }
  checkForCollision(item1: Item, item2: Item) {
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
  getFirstCollision(item: Item) {
    for (let i of this.items) {
      if (this.checkForCollision(item, i)) {
        return i;
      }
    }
    return null;
  }
  //Reactive Methods
  calculateColWidth() {
    this.colWidth =
      (this.width - (this.margin.x + this.numberOfCols + 1)) /
      this.numberOfCols;
    return this.colWidth;
  }
  calculateHeight() {
    let maxY = 0;
    let bottomY = 0;
    for (let item of this.items) {
      bottomY = item.y + item.height;
      if (bottomY > maxY) {
        maxY = bottomY;
      }
    }
    this.height = maxY * (this.rowHeight + this.margin.y) + this.margin.y;
  }
  updateDashItems() {
    this.dashItems.forEach(item => {
      item.setColWidth(this.colWidth);
      item.setRowHeight(this.rowHeight);
      item.setMargin(this.margin);
    });
  }
  updateResponsiveVariables() {
    this.calculateColWidth();
    //Update Height
    if (this.autoHeight) {
      this.calculateHeight();
    }
    //Update dash items
    this.updateDashItems();
  }
  //DashItem Methods
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
}
