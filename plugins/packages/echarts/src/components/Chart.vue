<template>
  <v-chart
    :initOptions="initOptions"
    :options="options"
    :theme="theme"
    :group="group"
    :watchShallow="watchShallow"
    :manualUpdate="manualUpdate"
    autoresize
    :style="{ width: width + 'px', height: height + 'px' }"
  ></v-chart>
</template>

<script>
export default {
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
</script>
