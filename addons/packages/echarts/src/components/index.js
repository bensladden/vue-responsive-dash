import Vue from "vue";

import Chart from "./Chart.vue";

const VueResponsiveDashECharts = {
  Chart
};

Object.keys(VueResponsiveDashECharts).forEach(name => {
  Vue.component(name, VueResponsiveDashECharts[name]);
});

export default VueResponsiveDashECharts;
export { Chart };
