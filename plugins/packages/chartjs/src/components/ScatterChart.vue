<template>
  <scatter-chart
    v-if="chartData"
    :chart-data="chartData"
    :options="mergedOptions"
    :style="{ width: width + 'px', height: height + 'px' }"
  ></scatter-chart>
</template>

<script>
import { merge } from "lodash";
import ScatterChart from "./scatterChart.js";
import mixinComponent from "./mixinComponent.js";

const defaultOptions = {
  responsive: true,
  maintainAspectRatio: false,
};
export default {
  name: "ScatterChartWrapper",
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
    ScatterChart,
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
