import ECharts from "vue-echarts";
export default {
  components: { "v-chart": ECharts },
  props: {
    initOptions: Object,
    options: Object,
    theme: [String, Object],
    group: String,
    watchShallow: Boolean,
    manualUpdate: Boolean
  },
  inject: ["$item"],
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
    }
  }
};
