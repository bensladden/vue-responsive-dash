<template>
  <FulfillingBouncingCircleSpinner
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
import FulfillingBouncingCircleSpinner from "epic-spinners/src/components/lib/FulfillingBouncingCircleSpinner";

export default {
  name: "FulfillingBouncingCircleSpinnerWrapper",
  mixins: [mixinComponent],
  components: {
    FulfillingBouncingCircleSpinner
  }
};
</script>
