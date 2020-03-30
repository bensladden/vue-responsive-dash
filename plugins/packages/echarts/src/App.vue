<template>
  <div id="app">
    <Dashboard :id="'dashExample'">
      <DashLayout
        v-for="layout in layouts"
        :key="layout.breakpoint"
        v-bind="layout"
      >
        <DashItem
          v-for="(item, index) in layout.items"
          :key="item.id"
          v-bind.sync="item"
        >
          <component
            v-if="items && items[index]"
            :is="items[index].template"
            :options="items[index].data"
          ></component>
          <template v-slot:resizeBottomRight> _| </template>
        </DashItem>
      </DashLayout>
    </Dashboard>
  </div>
</template>

<script>
import { Dashboard, DashLayout, DashItem } from "vue-responsive-dash";
import {
  BarChart,
  EffectScatterChart,
  LineChart,
  MapChart,
  PieChart,
  RadarChart,
  ScatterChart,
} from "./components/";
import {
  barData,
  pieData,
  polarData,
  scatterData,
  radarData,
  lineData,
} from "./components/data";
import mapData from "./components/mapData";
import { largeLayouts } from "../../common/dataItems";
export default {
  name: "App",
  components: {
    Dashboard,
    DashLayout,
    DashItem,
    BarChart,
    EffectScatterChart,
    LineChart,
    MapChart,
    PieChart,
    RadarChart,
    ScatterChart,
  },
  data() {
    return {
      layouts: largeLayouts,
      items: [
        {
          id: "1",
          template: "BarChart",
          data: barData,
        },
        {
          id: "2",
          template: "EffectScatterChart",
          data: scatterData,
        },
        {
          id: "3",
          template: "LineChart",
          data: lineData,
        },
        {
          id: "4",
          template: "MapChart",
          data: mapData,
        },
        {
          id: "5",
          template: "PieChart",
          data: pieData,
        },
        {
          id: "6",
          template: "RadarChart",
          data: radarData,
        },
        {
          id: "7",
          template: "ScatterChart",
          data: scatterData,
        },
        {
          id: "8",
          template: "RadarChart",
          data: polarData,
        },
        {
          id: "9",
          template: "RadarChart",
          data: polarData,
        },
      ],
    };
  },
};
</script>

<style></style>
