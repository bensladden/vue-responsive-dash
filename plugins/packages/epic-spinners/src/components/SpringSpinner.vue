<template>
  <SpringSpinner
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
import SpringSpinner from "epic-spinners/src/components/lib/SpringSpinner";

export default {
  name: "SpringSpinnerWrapper",
  mixins: [mixinComponent],
  components: {
    SpringSpinner
  }
};
</script>
