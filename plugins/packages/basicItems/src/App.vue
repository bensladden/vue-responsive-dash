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
          <TextMiddleCenter>{{ item.id }}</TextMiddleCenter>
          <template v-slot:resizeBottomRight> _| </template>
        </DashItem>
      </DashLayout>
    </Dashboard>
  </div>
</template>

<script>
import { Dashboard, DashLayout, DashItem } from "vue-responsive-dash";
import { largeLayouts } from "./components/layoutExamples";
import TextMiddleCenter from "./components/TextMiddleCenter.vue";

export default {
  name: "App",
  components: {
    Dashboard,
    DashLayout,
    DashItem,
    TextMiddleCenter,
  },
  data() {
    return {
      datacollection: null,
      options: null,
      layouts: largeLayouts,
      items: null,
    };
  },
  mounted() {
    this.items = [
      {
        id: "1",
        template: "BarChart",
        data: {},
      },
      {
        id: "2",
        template: "BubbleChart",
        data: {},
      },
      {
        id: "3",
        template: "DoughnutChart",
        data: {},
      },
      {
        id: "4",
        template: "HorizontalBarChart",
        data: {},
      },
      {
        id: "5",
        template: "LineChart",
        data: {},
      },
      {
        id: "6",
        template: "PieChart",
        data: {},
      },
      {
        id: "7",
        template: "PolarAreaChart",
        data: {},
      },
      {
        id: "8",
        template: "RadarChart",
        data: {},
      },
      {
        id: "9",
        template: "ScatterChart",
        data: {},
      },
    ];
  },
};
</script>
