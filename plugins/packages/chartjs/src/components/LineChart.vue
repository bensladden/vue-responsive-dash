<template>
  <line-chart
    v-if="chartData"
    :chart-data="chartData"
    :options="mergedOptions"
    :style="{ width: width + 'px', height: height + 'px' }"
  ></line-chart>
</template>

<script>
import { merge } from "lodash";
import LineChart from "./lineChart.js";
import mixinComponent from "./mixinComponent.js";

const defaultOptions = {
  responsive: true,
  maintainAspectRatio: false,
};
export default {
  name: "lineChartWrapper",
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
    LineChart,
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
