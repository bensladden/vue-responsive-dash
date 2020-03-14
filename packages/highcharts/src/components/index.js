import Vue from "vue";

import chart from "./chart.vue";

const VueResponsiveDashHighcharts = {
  chart
};

Object.keys(VueResponsiveDashHighcharts).forEach(name => {
  Vue.component(name, VueResponsiveDashHighcharts[name]);
});

export default VueResponsiveDashHighcharts;
export { chart };
