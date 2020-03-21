<template>
  <ScalingSquaresSpinner
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
import ScalingSquaresSpinner from "epic-spinners/src/components/lib/ScalingSquaresSpinner";

export default {
  name: "ScalingSquaresSpinnerWrapper",
  mixins: [mixinComponent],
  components: {
    ScalingSquaresSpinner
  }
};
</script>
