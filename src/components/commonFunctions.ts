import { Margin } from "../inferfaces";

export function getLeftFromX(x: number, colWidth: number, margin: Margin) {
  return Math.round(colWidth * x + (x + 1) * margin.x);
}
export function getXFromLeft(l: number, colWidth: number, margin: Margin) {
  return Math.round((l - margin.x) / (colWidth + margin.x));
}
export function getTopFromY(y: number, rowHeight: number, margin: Margin) {
  return Math.round(rowHeight * y + (y + 1) * margin.y);
}
export function getYFromTop(t: number, rowHeight: number, margin: Margin) {
  return Math.round((t - margin.y) / (rowHeight + margin.y));
}
export function getWidthInPx(w: number, colWidth: number, margin: Margin) {
  return Math.round(colWidth * w + Math.max(0, w - 1) * margin.x);
}
export function getWidthFromPx(
  widthPx: number,
  colWidth: number,
  margin: Margin
) {}
export function getHeightInPx(h: number, rowHeight: number, margin: Margin) {
  return Math.round(rowHeight * h + Math.max(0, h - 1) * margin.y);
}
export function getHeightFromPx(
  heightPx: number,
  rowHeight: number,
  margin: Margin
) {}
