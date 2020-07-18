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
  ScatterChart,
};

// Declare install function executed by Vue.use()
export function install(Vue) {
  if (install.installed) return;
  install.installed = true;
  Object.keys(VueResponsiveDashChartJs).forEach((name) => {
    Vue.component(name, VueResponsiveDashChartJs[name]);
  });
}

// Create module definition for Vue.use()
const plugin = {
  install,
};

// Auto-install when vue is found (eg. in browser via <script> tag)
let GlobalVue = null;
if (typeof window !== "undefined") {
  GlobalVue = window.Vue;
} else if (typeof global !== "undefined") {
  GlobalVue = global.Vue;
}
if (GlobalVue) {
  GlobalVue.use(plugin);
}

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
  ScatterChart,
};
