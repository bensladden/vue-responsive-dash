<template>
  <HalfCircleSpinner
    :animation-duration="animationDuration"
    :size="size"
    :color="color"
    :style="{
      position: 'absolute',
      left: (width - size) / 2 + 'px',
      top: (height - size) / 2 + 'px'
    }"
  />
</template>

<script>
import mixinComponent from "./MixinComponent";
import HalfCircleSpinner from "epic-spinners/src/components/lib/HalfCircleSpinner";

export default {
  name: "HalfCircleSpinnerWrapper",
  mixins: [mixinComponent],
  components: {
    HalfCircleSpinner
  }
};
</script>
