---
sidebar: auto
---

# Guide

## Getting Started

## Setup

```sh
$ npm install vue-responsive-dash
```

## How to use with Vue

```vue
<template>
  <div id="app">
    <dashboard :id="'dashExample'">
      <dash-layout v-for="layout in dlayouts" v-bind="layout" :debug="true" :key="layout.breakpoint">
        <dash-item v-for="item in layout.items" v-bind.sync="item" :key="item.id">
          <div class="content"></div>
        </dash-item>
      </dash-layout>
    </dashboard>
  </div>
</template>

<script>
import { Dashboard, DashLayout, DashItem } from "vue-responsive-dash";

export default {
  name: "App",
  components: {
    Dashboard,
    DashLayout,
    DashItem
  },
  data() {
    return {
      dlayouts: [
        {
          breakpoint: "xl",
          numberOfCols: 12,
          items: [
            { id: "1", x: 0, y: 0, width: 1, height: 1 },
            { id: "2", x: 1, y: 0, width: 2, height: 1 },
          ]
        },
        {
          breakpoint: "lg",
          breakpointWidth: 1200,
          numberOfCols: 10,
          items: [
            { id: "1", x: 0, y: 0, width: 1, height: 1 },
            { id: "2", x: 1, y: 0, width: 2, height: 1 },
          ]
        },
        {
          breakpoint: "md",
          breakpointWidth: 996,
          numberOfCols: 8,
          items: [
            { id: "1", x: 0, y: 0, width: 1, height: 1 },
            { id: "2", x: 1, y: 0, width: 2, height: 1 },
          ]
        },
        {
          breakpoint: "sm",
          breakpointWidth: 768,
          numberOfCols: 4,
          items: [
            { id: "1", x: 0, y: 0, width: 1, height: 1 },
            { id: "2", x: 1, y: 0, width: 2, height: 1 },
          ]
        },
        {
          breakpoint: "xs",
          breakpointWidth: 480,
          numberOfCols: 2,
          items: [
            { id: "1", x: 0, y: 0, width: 1, height: 1 },
            { id: "2", x: 1, y: 0, width: 1, height: 1 },
          ]
        },
        {
          breakpoint: "xxs",
          breakpointWidth: 0,
          numberOfCols: 1,
          items: [
            {
              id: "1",
              x: 0,
              y: 0,
              width: 1,
              height: 1
            },
            { id: "2", x: 0, y: 1, width: 1, height: 1 }
          ]
        }
      ]
    };
  }
};
</script>

<style>
.content {
  height: 100%;
  width: 100%;
  border: 2px solid #42b983;
  border-radius: 5px;
}
</style>
```


## Support
Please give a ⭐️ if this project helped you!

## Contributing

If you have any questions or requests or want to contribute to `vue-responsive-dash` or other packages, please write the [issue](https://github.com/bensladden/vue-responsive-dash/issues) or give me a Pull Request freely.

## Bug Report

If you find a bug, please report to us opening a new [Issue](https://github.com/bensladden/vue-responsive-dash/issues) on GitHub.
