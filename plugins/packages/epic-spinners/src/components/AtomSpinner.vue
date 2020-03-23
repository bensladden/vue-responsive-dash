<template>
  <AtomSpinner
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
import AtomSpinner from "epic-spinners/src/components/lib/AtomSpinner";

export default {
  name: "AtomSpinnerWrapper",
  mixins: [mixinComponent],
  components: {
    AtomSpinner
  }
};
</script>
