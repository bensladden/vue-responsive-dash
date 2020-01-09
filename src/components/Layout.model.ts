import { Item } from "@/inferfaces";

export class Layout {
  protected breakpoint: string;
  protected items: Item[];
  protected numberOfCols: number;
  protected rowHeight: number;
  protected colWidth: number;
  constructor() {
    this.breakpoint = "";
    this.items = [];
  }

  getItems() {
    return this.items;
  }
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

  static collides(item1: Item, item2: Item) {
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
      if (Layout.collides(item, i)) {
        return i;
      }
    }
    return null;
  }
}
