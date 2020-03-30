<template>
  <doughnut-chart
    v-if="chartData"
    :chart-data="chartData"
    :options="mergedOptions"
    :style="{ width: width + 'px', height: height + 'px' }"
  ></doughnut-chart>
</template>

<script>
import { merge } from "lodash";
import DoughnutChart from "./doughnutChart.js";
import mixinComponent from "./mixinComponent.js";

const defaultOptions = {
  responsive: true,
  maintainAspectRatio: false,
};
export default {
  name: "doughnutChartWrapper",
  mixins: [mixinComponent],
  props: {
    chartData: {
      type: Object,
      default: null,
    },
    options: {
      type: Object,
      default: () => {
        return defaultOptions;
      },
    },
  },
  components: {
    DoughnutChart,
  },
  data() {
    return {
      mergedOptions: defaultOptions,
    };
  },
  watch: {
    options: {
      handler(newValue) {
        this.mergedOptions = merge({}, defaultOptions, newValue);
      },
    },
  },
};
</script>
