<template>
  <horizontal-bar-chart
    v-if="chartData"
    :chart-data="chartData"
    :options="mergedOptions"
    :style="{ width: width + 'px', height: height + 'px' }"
  ></horizontal-bar-chart>
</template>

<script>
import { merge } from "lodash";
import HorizontalBarChart from "./horizontalBarChart.js";
import mixinComponent from "./mixinComponent.js";

const defaultOptions = {
  responsive: true,
  maintainAspectRatio: false,
};
export default {
  name: "horizontalBarWrapper",
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
    HorizontalBarChart,
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
