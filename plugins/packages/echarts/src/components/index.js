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
  ScatterChart,
};
// Declare install function executed by Vue.use()
export function install(Vue) {
  if (install.installed) return;
  install.installed = true;
  Object.keys(VueResponsiveDashECharts).forEach((name) => {
    Vue.component(name, VueResponsiveDashECharts[name]);
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

export default VueResponsiveDashECharts;
export {
  BarChart,
  EffectScatterChart,
  LineChart,
  MapChart,
  PieChart,
  RadarChart,
  ScatterChart,
};
