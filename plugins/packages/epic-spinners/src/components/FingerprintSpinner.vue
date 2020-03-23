<template>
  <FingerprintSpinner
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
import FingerprintSpinner from "epic-spinners/src/components/lib/FingerprintSpinner";

export default {
  name: "FingerprintSpinnerWrapper",
  mixins: [mixinComponent],
  components: {
    FingerprintSpinner
  }
};
</script>
