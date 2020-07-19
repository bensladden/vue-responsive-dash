<template>
  <VueApexCharts
    :width="width"
    :height="height"
    :type="type"
    :options="chartOptions"
    :series="series"
  ></VueApexCharts>
</template>

<script>
import VueApexCharts from "vue-apexcharts";
export default {
  inject: ["$item"],
  components: {
    VueApexCharts,
  },
  props: ["type", "chartOptions", "series"],
  computed: {
    item() {
      return this.$item();
    },
    width() {
      if (this.item) {
        return this.item.widthPx;
      }
      return 0;
    },
    height() {
      if (this.item) {
        return this.item.heightPx;
      }
      return 0;
    },
  },
};
</script>

<style></style>
