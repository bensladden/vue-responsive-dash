<template>
  <highcharts
    :constructor-type="constructorType"
    :options="options"
    :updateArgs="updateArgs"
    :style="{ height: height + 'px', width: width + 'px' }"
  ></highcharts>
</template>

<script>
export default {
  inject: ["$item"],
  props: {
    constructorType: { type: String, default: "chart" },
    options: {
      type: Object,
      required: true
    },
    updateArgs: {
      type: Array,
      default: () => {
        return [true, true, { duration: 1000 }];
      }
    }
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
  }
};
</script>

<style></style>
