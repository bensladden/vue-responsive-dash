import Vue from "vue";

import DashItem from "./DashItem.vue";
import DashLayout from "./DashLayout.vue";
import Dashboard from "./Dashboard.vue";

const VueResponsiveDash = {
  DashItem,
  DashLayout,
  Dashboard
};

Object.keys(VueResponsiveDash).forEach(name => {
  Vue.component(name, VueResponsiveDash[name]);
});

export default VueResponsiveDash;
export { DashItem, DashLayout, Dashboard };
