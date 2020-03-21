<template>
  <IntersectingCirclesSpinner
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
import IntersectingCirclesSpinner from "epic-spinners/src/components/lib/IntersectingCirclesSpinner";

export default {
  name: "IntersectingCirclesSpinnerWrapper",
  mixins: [mixinComponent],
  components: {
    IntersectingCirclesSpinner
  }
};
</script>
