<template>
  <SwappingSquaresSpinner
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
import SwappingSquaresSpinner from "epic-spinners/src/components/lib/SwappingSquaresSpinner";

export default {
  name: "SwappingSquaresSpinnerWrapper",
  mixins: [mixinComponent],
  components: {
    SwappingSquaresSpinner
  }
};
</script>
