<template>
  <LoopingRhombusesSpinner
    :animation-duration="animationDuration"
    :size="size"
    :color="color"
    :style="{
      position: 'absolute',
      left: (width - spinnerWidth) / 2 + 'px',
      top: (height - rhombusSize) / 2 + 'px',
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
    LoopingRhombusesSpinner,
  },
  props: {
    rhombusSize: {
      type: Number,
      default: 15,
    },
  },
  computed: {
    spinnerWidth() {
      return this.rhombusSize * 4;
    },
  },
};
</script>
