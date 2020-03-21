import Vue from "vue";

import LineChart from "./LineChart.vue";

const VueResponsiveDashChartJs = {
  LineChart
};

Object.keys(VueResponsiveDashChartJs).forEach(name => {
  Vue.component(name, VueResponsiveDashChartJs[name]);
});

export default VueResponsiveDashChartJs;
export { LineChart };
