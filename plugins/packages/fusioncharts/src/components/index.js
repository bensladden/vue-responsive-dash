import Vue from "vue";

import FusionChart from "./FusionChart.vue";

const VueResponsiveDashFusioncharts = {
  FusionChart
};

Object.keys(VueResponsiveDashFusioncharts).forEach(name => {
  Vue.component(name, VueResponsiveDashFusioncharts[name]);
});

export default VueResponsiveDashFusioncharts;
export { FusionChart };
