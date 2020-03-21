---
sidebar: auto
---

# Addons

## epic-spinners

Wrapper for [https://github.com/epicmaxco/epic-spinners](https://github.com/epicmaxco/epic-spinners).
Places the choice of spinner automatically in the middle of the DashItem.
Intended to be used when your DashItem components require data to be loaded. (Loading Spinners)

Note: Also includes a Random spinner object which will choose a Spinner at runtime.

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


## Chartjs


## eCharts


## FusionCharts


## Highcharts
