import Vue from "vue";

import itemMixin from "./itemMixin";
import { layouts, largeLayouts } from "./layoutExamples";
import TextMiddleCenter from "./TextMiddleCenter.vue";

const VueResponsiveDashBasicItems = {
  TextMiddleCenter,
};

Object.keys(VueResponsiveDashBasicItems).forEach((name) => {
  Vue.component(name, VueResponsiveDashBasicItems[name]);
});

export default VueResponsiveDashBasicItems;

export { itemMixin, layouts, largeLayouts, TextMiddleCenter };
