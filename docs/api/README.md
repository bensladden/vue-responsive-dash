---
sidebar: auto
---

# API

## Dashboard

The Dashboard component is responsible in deciding what responsive breakpoint is to be used.
From this the layouts can then change to best suit the screen size. 

### Props
| Name | Type               | Required | Default | Description |
| ---- | ------------------ | -------- | ------- | ----------- |
| id | `String | Number` | yes | | UUID for the dashboard |

## Dash Layout

Each Dash Layout contains an name, numberOfCols and optionally a breakpointWidth.
Note that only one layout should have the breakpontWidth `undefined`. This layout is the biggest. The smallest should have a brekpointWidth of `0`.  

### Props
| Name | Type               | Required | Default | Description |
| ---- | ------------------ | -------- | ------- | ----------- |
| name | `string` | yes | | Layout name (typically describing the breakpoint Size (i.e. xl, lg etc)) |
| numberOfCols | `number` | no | `12` | Number of columns allowed |
| breakpointWidth | `number` | no | | Width used to determine which layout is most appropiate for the screen size |

## Dash Item

The dash item is responsible for displaying the items content (via slot) and also for dragging and resizing around the layout.
All props can be synced back to the item being passed via the .sync modifier (see examples)

There are also slots around the item for custom drag icons (again see examples)

### Props
| Name | Type               | Required | Default | Description |
| ---- | ------------------ | -------- | ------- | ----------- |
| id |  `[Number, String]` |  true | | UUID for the item |
| x |  `Number` |  false |  `0` | | X coordinate | 
| y |  `Number` |  false |  `0` | | Y coordinate |
| width |  `Number` |  false |  `1` | Width (in col units) | 
| height |  `Number` |  false |  `1` | Height (in row units) | 
| draggable |  `Boolean` |  false |  `true` | If the item can be dragged | 
| resizeable |  `Boolean` |  false |  `true` | If the item can be resized | 
| resizeEdges |  `String` |  false |  `"bottom right"` | The edges it can be resized (experimental for all options appart from bottom right) | 
| resizeHandleSize | `Number` |  false |  `8` | The area where resize can be selected on the item |

### Resizing Slots

| Names |
|-------|
| resizeTop |
| resizeBottom |
| resizeBottomRight |
| resizeBottomLeft |
| resizeTopLeft |
| resizeTopRight |