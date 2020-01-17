import Vue from "vue";

import DashItem from "./DashItem.vue";
import Layout from "./Layout.vue";
import Dashboard from "./Dashboard.vue";

const VueResponsiveDash = {
  DashItem,
  Layout,
  Dashboard
};

Object.keys(VueResponsiveDash).forEach(name => {
  Vue.component(name, VueResponsiveDash[name]);
});

export default VueResponsiveDash;
export { DashItem, Layout, Dashboard };
