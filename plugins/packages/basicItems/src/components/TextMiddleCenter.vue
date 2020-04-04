<template>
  <div
    :style="{
      height: size + 'px',
      width: size + 'px',
      position: 'absolute',
      left: (width - size) / 2 + 'px',
      top: (height - size) / 2 + 'px',
    }"
  >
    <div class="itemtext"><slot></slot></div>
  </div>
</template>

<script>
import itemMixin from "./itemMixin";
export default {
  mixins: [itemMixin],
  computed: {
    size() {
      return this.height > this.width ? this.width : this.height;
    },
  },
};
</script>

<style>
.item-text {
  font-size: 8vw;
}

.itemtext {
  position: relative;
  float: left;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}
</style>
