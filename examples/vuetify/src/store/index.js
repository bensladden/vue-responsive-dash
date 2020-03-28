import Vue from "vue";
import Vuex from "vuex";
import layouts from "./layouts";

Vue.use(Vuex);

/* eslint-disable no-new */
const store = new Vuex.Store({
  modules: {
    layouts
  }
});

export default store;
