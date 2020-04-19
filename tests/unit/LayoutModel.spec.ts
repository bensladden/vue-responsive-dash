import { Layout } from "../../src/components/Layout.model";

let layoutOptions = {
  breakpoint: "1",
  numberOfCols: Layout.defaults.numberOfCols,
  margin: Layout.defaults.margin,
};

//Row Height Tests --------------------
test("Test Row Height being equal to colWidth when not defined", () => {
  let layout = new Layout({ ...layoutOptions });
  expect(layout.rowHeight).toBe(layout.colWidth);
});

test("Test Row Height being set by constructor", () => {
  let rowHeight = 200;
  let layout = new Layout({ ...layoutOptions, rowHeight });
  expect(layout.rowHeight).toBe(rowHeight);
});

test("Test Row Height being set by reactive Method", () => {
  let rowHeight = 200;
  let layout = new Layout({ ...layoutOptions });
  expect(layout.rowHeight).not.toBe(rowHeight);
  layout.rowHeight = rowHeight;
  expect(layout.rowHeight).toBe(rowHeight);
});

test("Test Max Row Height", () => {
  let rowHeight = 200;
  let maxRowHeight = 190;
  let layout = new Layout({ ...layoutOptions, rowHeight });
  expect(layout.rowHeight).toBe(rowHeight);
  layout.maxRowHeight = maxRowHeight;
  expect(layout.rowHeight).toBe(maxRowHeight);

  let layout2 = new Layout({ ...layoutOptions, width: 400, numberOfCols: 1 });
  expect(layout2.rowHeight).not.toBe(rowHeight);
  layout2.maxRowHeight = maxRowHeight;
  expect(layout2.rowHeight).toBe(maxRowHeight);
});

test("Test Min Row Height", () => {
  let rowHeight = 200;
  let minRowHeight = 210;
  let layout = new Layout({ ...layoutOptions, rowHeight });
  expect(layout.rowHeight).toBe(rowHeight);
  layout.minRowHeight = minRowHeight;
  expect(layout.rowHeight).toBe(minRowHeight);

  let layout2 = new Layout({ ...layoutOptions, width: 400, numberOfCols: 10 });
  expect(layout2.rowHeight).not.toBe(rowHeight);
  layout2.minRowHeight = minRowHeight;
  expect(layout2.rowHeight).toBe(minRowHeight);
});
