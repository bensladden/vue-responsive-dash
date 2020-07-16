<template>
  <b-card :style="{ width: width + 'px', height: height + 'px' }">
    <slot></slot>
  </b-card>
</template>

<script>
export default {
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

<style></style>
