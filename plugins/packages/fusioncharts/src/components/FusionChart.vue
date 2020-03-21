<template>
  <fusioncharts
    :type="type"
    :width="width"
    :height="height"
    :dataFormat="dataFormat"
    :dataSource="dataSource"
  >
  </fusioncharts>
</template>

<script>
export default {
  inject: ["$item"],
  props: ["type", "dataFormat", "dataSource"],
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
