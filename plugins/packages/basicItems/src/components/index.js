import itemMixin from "./itemMixin";
import { layouts, largeLayouts } from "./layoutExamples";
import TextMiddleCenter from "./TextMiddleCenter.vue";

const VueResponsiveDashBasicItems = {
  TextMiddleCenter,
};

// Declare install function executed by Vue.use()
export function install(Vue) {
  if (install.installed) return;
  install.installed = true;
  Object.keys(VueResponsiveDashBasicItems).forEach((name) => {
    Vue.component(name, VueResponsiveDashBasicItems[name]);
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

export default VueResponsiveDashBasicItems;
export { itemMixin, layouts, largeLayouts, TextMiddleCenter };
