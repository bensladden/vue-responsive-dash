# @vue-responsive-dash/epic-spinners

Wrapper for [https://github.com/epicmaxco/epic-spinners](https://github.com/epicmaxco/epic-spinners).
Places the choice of spinner automatically in the middle of the DashItem.
Intended to be used when your DashItem components require data to be loaded. (Loading Spinners)

Note: Also includes a Random spinner object which will choose a Spinner at runtime.

## ⚙️ Installation
```sh
$ npm install @vue-responsive-dash/epic-spinners
```

## 📄 Documents
[Link](https://vue-responsive-dash.netlify.com/)

```vue

<template>
  <div id="app">
    <Dashboard :id="'dashExample'">
      <DashLayout
        v-for="layout in layouts"
        :key="layout.breakpoint"
        v-bind="layout"
      >
        <DashItem
          v-for="item in layout.items"
          :key="item.id"
          v-bind.sync="item"
        >
          <randomSpinner
            :animation-duration="1000"
            :size="60"
            :color="'#ff1d5e'"
          ></randomSpinner>
          <template v-slot:resizeBottomRight> _| </template>
        </DashItem>
      </DashLayout>
    </Dashboard>
  </div>
</template>

<script>
import { Dashboard, DashLayout, DashItem } from "vue-responsive-dash";
import { RandomSpinner } from "@vue-responsive-dash/epic-spinners";

export default {
  name: "App",
  components: {
    Dashboard,
    DashLayout,
    DashItem,
    RandomSpinner
  },
  data() {
    return {
      layouts: ...
    };
  }
};
</script>

```

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
