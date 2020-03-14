<template>
  <v-card :elevation="4" :width="width" :height="height">
    <slot></slot>
  </v-card>
</template>

<script>
export default {
  inject: ["$item"],
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
