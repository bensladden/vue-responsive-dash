<template>
  <OrbitSpinner
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
import OrbitSpinner from "epic-spinners/src/components/lib/OrbitSpinner";

export default {
  name: "OrbitSpinnerWrapper",
  mixins: [mixinComponent],
  components: {
    OrbitSpinner
  }
};
</script>
