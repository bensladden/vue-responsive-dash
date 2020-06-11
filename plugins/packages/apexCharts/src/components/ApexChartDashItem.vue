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
      return this.item.widthPx;
    },
    height() {
      return this.item.heightPx;
    }
  }
};
</script>

<style></style>
