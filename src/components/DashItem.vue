<template>
  <div ref="item">
    <slot></slot>
  </div>
</template>

<script>
import interactjs from "interactjs";

export default {
  data() {
    return {
      interactInstance: null
    };
  },
  mounted() {},
  beforeDestroy() {
    if (this.interactInstance) {
      interactInstance.unset();
    }
  }
};
</script>

<style></style>
