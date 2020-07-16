import DashItem from "./DashItem.vue";
import DashLayout from "./DashLayout.vue";
import Dashboard from "./Dashboard.vue";

const VueResponsiveDash = {
  DashItem,
  DashLayout,
  Dashboard,
};

// Declare install function executed by Vue.use()
export function install(Vue) {
  if (install.installed) return;
  install.installed = true;
  Object.keys(VueResponsiveDash).forEach((name) => {
    Vue.component(name, VueResponsiveDash[name]);
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

export default VueResponsiveDash;
export { DashItem, DashLayout, Dashboard };
