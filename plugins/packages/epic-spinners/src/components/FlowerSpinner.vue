<template>
  <FlowerSpinner
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
import FlowerSpinner from "epic-spinners/src/components/lib/FlowerSpinner";

export default {
  name: "FlowerSpinnerWrapper",
  mixins: [mixinComponent],
  components: {
    FlowerSpinner
  }
};
</script>
