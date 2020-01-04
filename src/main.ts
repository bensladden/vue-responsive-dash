import Vue from "vue";
import App from "./App.vue";
import resize from "vue-element-resize-detector";
Vue.config.productionTip = false;

Vue.use(resize);
new Vue({
  render: h => h(App)
}).$mount("#app");
