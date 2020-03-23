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

Implements vue-chartjs [https://vue-chartjs.org/](https://vue-chartjs.org/).
This wrapper automatically scales the chart to fit DashItem. 

See vue-chartjs for usage information: [https://vue-chartjs.org/guide/](https://vue-chartjs.org/guide/)

```vue

```

## eCharts

Implements vue-echarts [https://ecomfe.github.io/vue-echarts/demo/](https://ecomfe.github.io/vue-echarts/demo/).
This wrapper automatically scales the charts to fit each DashItem. 

See vue-echarts for usage information: [https://github.com/ecomfe/vue-echarts](https://github.com/ecomfe/vue-echarts)

```vue

```

## FusionCharts

Wrapper for fusioncharts [https://github.com/fusioncharts/vue-fusioncharts](https://github.com/fusioncharts/vue-fusioncharts).
This wrapper automatically scales the chart to fit DashItem. 

See vue-fusioncharts for usage information: [https://fusioncharts.github.io/vue-fusioncharts/](https://fusioncharts.github.io/vue-fusioncharts/)

```vue

```

