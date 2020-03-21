<template>
  <CirclesToRhombusesSpinner
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
import CirclesToRhombusesSpinner from "epic-spinners/src/components/lib/CirclesToRhombusesSpinner";

export default {
  name: "CirclesToRhombusesSpinnerWrapper",
  mixins: [mixinComponent],
  components: {
    CirclesToRhombusesSpinner
  }
};
</script>
