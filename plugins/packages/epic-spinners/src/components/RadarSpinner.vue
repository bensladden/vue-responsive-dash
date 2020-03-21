<template>
  <RadarSpinner
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
import RadarSpinner from "epic-spinners/src/components/lib/RadarSpinner";

export default {
  name: "RadarSpinnerWrapper",
  mixins: [mixinComponent],
  components: {
    RadarSpinner
  }
};
</script>
