import ApexChart from "./ApexChartDashItem.vue";

const VueResponsiveDashApexcharts = {
  ApexChart,
};
// Declare install function executed by Vue.use()
export function install(Vue) {
  if (install.installed) return;
  Object.keys(VueResponsiveDashApexcharts).forEach((name) => {
    Vue.component(name, VueResponsiveDashApexcharts[name]);
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

export default VueResponsiveDashApexcharts;
export { ApexChart };
