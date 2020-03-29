<template>
  <HollowDotsSpinner
    :animation-duration="animationDuration"
    :size="size"
    :color="color"
    :dotSize="dotSize"
    :dotsNum="dotsNum"
    :style="{
      position: 'absolute',
      left: (width - spinnerWidth) / 2 + 'px',
      top: (height - spinnerHeight) / 2 + 'px',
    }"
  />
</template>

<script>
import mixinComponent from "./MixinComponent";
import HollowDotsSpinner from "epic-spinners/src/components/lib/HollowDotsSpinner";

export default {
  name: "HollowDotsSpinnerWrapper",
  mixins: [mixinComponent],
  components: {
    HollowDotsSpinner,
  },
  props: {
    dotSize: {
      type: Number,
      default: 15,
    },
    dotsNum: {
      type: Number,
      default: 3,
    },
  },
  computed: {
    spinnerHeight() {
      return this.dotSize;
    },
    horizontalMargin() {
      return this.dotSize / 2;
    },
    spinnerWidth() {
      return (this.dotSize + this.horizontalMargin * 2) * this.dotsNum;
    },
  },
};
</script>
