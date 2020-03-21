import Vue from "vue";

import highchartsChart from "./highchartsChart.vue";
import highchartsPie from "./highchartsPie.vue";

const VueResponsiveDashHighcharts = {
  highchartsChart,
  highchartsPie
};

Object.keys(VueResponsiveDashHighcharts).forEach(name => {
  Vue.component(name, VueResponsiveDashHighcharts[name]);
});

export default VueResponsiveDashHighcharts;
export { highchartsChart, highchartsPie };
