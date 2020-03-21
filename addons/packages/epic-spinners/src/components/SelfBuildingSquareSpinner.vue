<template>
  <SelfBuildingSquareSpinner
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
import SelfBuildingSquareSpinner from "epic-spinners/src/components/lib/SelfBuildingSquareSpinner";

export default {
  name: "SelfBuildingSquareSpinnerWrapper",
  mixins: [mixinComponent],
  components: {
    SelfBuildingSquareSpinner
  }
};
</script>
