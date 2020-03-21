<template>
  <BreedingRhombusSpinner
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
import BreedingRhombusSpinner from "epic-spinners/src/components/lib/BreedingRhombusSpinner";

export default {
  name: "BreedingRhombusSpinnerWrapper",
  mixins: [mixinComponent],
  components: {
    BreedingRhombusSpinner
  }
};
</script>
