import FusionChart from "./FusionChart.vue";

const VueResponsiveDashFusioncharts = {
  FusionChart,
};
// Declare install function executed by Vue.use()
export function install(Vue) {
  if (install.installed) return;
  install.installed = true;
  Object.keys(VueResponsiveDashFusioncharts).forEach((name) => {
    Vue.component(name, VueResponsiveDashFusioncharts[name]);
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

export default VueResponsiveDashFusioncharts;
export { FusionChart };
