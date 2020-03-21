<template>
  <SemipolarSpinner
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
import SemipolarSpinner from "epic-spinners/src/components/lib/SemipolarSpinner";

export default {
  name: "SemipolarSpinnerWrapper",
  mixins: [mixinComponent],
  components: {
    SemipolarSpinner
  }
};
</script>
