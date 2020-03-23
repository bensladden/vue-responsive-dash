import Vue from "vue";

import BarChart from "./BarChart.vue";
import BubbleChart from "./BubbleChart.vue";
import DoughnutChart from "./DoughnutChart.vue";
import HorizontalBarChart from "./HorizontalBarChart.vue";
import LineChart from "./LineChart.vue";
import PieChart from "./PieChart.vue";
import PolarAreaChart from "./PolarAreaChart.vue";
import RadarChart from "./RadarChart.vue";
import ScatterChart from "./ScatterChart.vue";

const VueResponsiveDashChartJs = {
  BarChart,
  BubbleChart,
  DoughnutChart,
  HorizontalBarChart,
  LineChart,
  PieChart,
  PolarAreaChart,
  RadarChart,
  ScatterChart
};

Object.keys(VueResponsiveDashChartJs).forEach(name => {
  Vue.component(name, VueResponsiveDashChartJs[name]);
});

export default VueResponsiveDashChartJs;

export {
  BarChart,
  BubbleChart,
  DoughnutChart,
  HorizontalBarChart,
  LineChart,
  PieChart,
  PolarAreaChart,
  RadarChart,
  ScatterChart
};
