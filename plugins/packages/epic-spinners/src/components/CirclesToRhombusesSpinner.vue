<template>
  <CirclesToRhombusesSpinner
    :animation-duration="animationDuration"
    :size="size"
    :color="color"
    :style="{
      position: 'absolute',
      left: (width - circlesWidth) / 2 + 'px',
      top: (height - circleSize) / 2 + 'px',
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
    CirclesToRhombusesSpinner,
  },
  props: {
    circleSize: {
      type: Number,
      default: 15,
    },
    circlesNum: {
      type: Number,
      default: 3,
    },
  },
  computed: {
    circleMarginLeft() {
      return this.circleSize * 1.125;
    },
    circlesWidth() {
      return (this.circleSize + this.circleMarginLeft) * this.circlesNum;
    },
  },
};
</script>
