<template>
  <apexchart
    :width="width"
    :height="height"
    :type="type"
    :options="chartOptions"
    :series="series"
  ></apexchart>
</template>

<script>
export default {
  inject: ["$item"],
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
