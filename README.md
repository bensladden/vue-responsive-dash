# vue-responsive-dash

A Responsive, Draggable & Resizable Dashboard (grid) made with vue and typescript. 
Inspired by React-Grid-Layout & Vue-Grid-Layout

<p align="center">
    <img alt="netlify" src="https://img.shields.io/netlify/0d5865ba-90df-4e35-826f-296d6fc6b106">
    <img alt="deps" src ="https://img.shields.io/david/bensladden/vue-responsive-dash">
    <img alt="code-size" src ="https://img.shields.io/github/languages/code-size/bensladden/vue-responsive-dash">
    <img alt="repo-size" src="https://img.shields.io/github/repo-size/bensladden/vue-responsive-dash">
    <img alt="open-issues" src="https://img.shields.io/github/issues-raw/bensladden/vue-responsive-dash">
    <img alt="pull-req" src="https://img.shields.io/github/issues-pr/bensladden/vue-responsive-dash">
    <img alt="lic" src="https://img.shields.io/github/license/bensladden/vue-responsive-dash">
    <img alt="npm" src="https://img.shields.io/npm/v/vue-responsive-dash">
</p>


Example: [![Edit Vue Template](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/vue-responsive-dash-eggbc?fontsize=14&hidenavigation=1&theme=dark)

## ⚙️ Installation
```sh
$ npm install vue-responsive-dash
```
## 📄 Documents
[Link](https://vue-responsive-dash.netlify.com/)

## 🚀 How to use in Vue

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

### Grid Item Child Component

[![Edit Vue Template](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/vue-responsive-dash-idttk)

See example above. The Grid Item object can be passed to the child component via props or injection. Typically the child component will look at the grid Item ID (which is unique) and decide what to render via a data/computed variable/s or VUEX. 

See Example/Docs Website for more information.

## ⭐️ Show Your Support
Please give a ⭐️ if this project helped you!


## 👏 Contributing

If you have any questions or requests or want to contribute to `vue-responsive-dash` or other packages, please write the [issue](https://github.com/bensladden/vue-responsive-dash/issues) or give me a Pull Request freely.

## 🐞 Bug Report

If you find a bug, please report to us opening a new [Issue](https://github.com/bensladden/vue-responsive-dash/issues) on GitHub.

## ⚙️ Development
### `npm run serve`

Runs the app in the development mode.<br>
Open [http://localhost:8080](http://localhost:8080) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.