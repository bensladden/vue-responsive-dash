<template>
  <b-card :style="{ width: widthPx + 'px', height: heightPx + 'px' }">
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
    widthPx() {
      return this.item.widthPx;
    },
    heightPx() {
      return this.item.heightPx;
    }
  }
};
</script>

<style></style>
