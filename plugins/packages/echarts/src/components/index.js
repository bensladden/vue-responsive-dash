import Vue from "vue";

import BarChart from "./BarChart.vue";
import EffectScatterChart from "./EffectScatterChart.vue";
import LineChart from "./LineChart.vue";
import MapChart from "./MapChart.vue";
import PieChart from "./PieChart.vue";
import RadarChart from "./RadarChart.vue";
import ScatterChart from "./ScatterChart.vue";

const VueResponsiveDashECharts = {
  BarChart,
  EffectScatterChart,
  LineChart,
  MapChart,
  PieChart,
  RadarChart,
  ScatterChart
};

Object.keys(VueResponsiveDashECharts).forEach(name => {
  Vue.component(name, VueResponsiveDashECharts[name]);
});

export default VueResponsiveDashECharts;
export {
  BarChart,
  EffectScatterChart,
  LineChart,
  MapChart,
  PieChart,
  RadarChart,
  ScatterChart
};
