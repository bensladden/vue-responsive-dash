<template>
  <LoopingRhombusesSpinner
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
import LoopingRhombusesSpinner from "epic-spinners/src/components/lib/LoopingRhombusesSpinner";

export default {
  name: "LoopingRhombusesSpinnerWrapper",
  mixins: [mixinComponent],
  components: {
    LoopingRhombusesSpinner
  }
};
</script>
