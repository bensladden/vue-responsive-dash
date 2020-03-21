<template>
  <FulfillingSquareSpinner
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
import FulfillingSquareSpinner from "epic-spinners/src/components/lib/FulfillingSquareSpinner";

export default {
  name: "FulfillingSquareSpinnerWrapper",
  mixins: [mixinComponent],
  components: {
    FulfillingSquareSpinner
  }
};
</script>
