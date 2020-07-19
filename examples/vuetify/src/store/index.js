import Vue from "vue";
import Vuex from "vuex";
import layouts from "./layouts";

import chartjs from "./chartjs";
import eCharts from "./eCharts";
import epicSpinners from "./epicSpinners";
import apexCharts from "./apexCharts"

Vue.use(Vuex);

/* eslint-disable no-new */
const store = new Vuex.Store({
  modules: {
    layouts,
    chartjs,
    eCharts,
    epicSpinners,
    apexCharts
  }
});

export default store;
