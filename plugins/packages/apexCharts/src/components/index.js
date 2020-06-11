import Vue from "vue";

import ApexChart from "./ApexChartDashItem.vue";

const VueResponsiveDashApexcharts = {
  ApexChart
};

Object.keys(VueResponsiveDashApexcharts).forEach(name => {
  Vue.component(name, VueResponsiveDashApexcharts[name]);
});

export default VueResponsiveDashApexcharts;
export { ApexChart };
