<template>
  <PixelSpinner
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
import PixelSpinner from "epic-spinners/src/components/lib/PixelSpinner";

export default {
  name: "PixelSpinnerWrapper",
  mixins: [mixinComponent],
  components: {
    PixelSpinner
  }
};
</script>
