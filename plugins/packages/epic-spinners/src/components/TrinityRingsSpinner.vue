<template>
  <TrinityRingsSpinner
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
import TrinityRingsSpinner from "epic-spinners/src/components/lib/TrinityRingsSpinner";

export default {
  name: "TrinityRingsSpinnerWrapper",
  mixins: [mixinComponent],
  components: {
    TrinityRingsSpinner
  }
};
</script>
