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
const defaultOptions = {
  responsive: true,
  maintainAspectRatio: false
};
export default {
  props: {
    chartData: {
      type: Object,
      default: null
    },
    options: {
      type: Object,
      default: () => {
        return defaultOptions;
      }
    }
  },
  components: {
    LineChart
  },
  inject: ["$item"],
  data() {
    return {
      mergedOptions: defaultOptions
    };
  },
  computed: {
    item() {
      return this.$item();
    },
    width() {
      return this.item.widthPx;
    },
    height() {
      return this.item.heightPx;
    }
  },
  watch: {
    options: {
      handler(newValue) {
        this.mergedOptions = merge({}, defaultOptions, newValue);
      }
    }
  }
};
</script>

<style>
.small {
  max-width: 600px;
  margin: 150px auto;
}
</style>
