<template>
  <pie-chart
    v-if="chartData"
    :chart-data="chartData"
    :options="mergedOptions"
    :style="{ width: width + 'px', height: height + 'px' }"
  ></pie-chart>
</template>

<script>
import { merge } from "lodash";
import PieChart from "./pieChart.js";
import mixinComponent from "./mixinComponent.js";

const defaultOptions = {
  responsive: true,
  maintainAspectRatio: false,
};
export default {
  name: "pieChartWrapper",
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
    PieChart,
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
