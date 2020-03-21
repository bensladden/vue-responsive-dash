<template>
  <component v-if="template" v-bind:is="template" v-bind="$props"></component>
</template>

<script>
import HollowDotsSpinner from "./HollowDotsSpinner.vue";
import PixelSpinner from "./PixelSpinner.vue";
import FlowerSpinner from "./FlowerSpinner.vue";
import IntersectingCirclesSpinner from "./IntersectingCirclesSpinner.vue";
import OrbitSpinner from "./OrbitSpinner.vue";
import FingerprintSpinner from "./FingerprintSpinner.vue";
import TrinityRingsSpinner from "./TrinityRingsSpinner.vue";
import FulfillingSquareSpinner from "./FulfillingSquareSpinner.vue";
import CirclesToRhombusesSpinner from "./CirclesToRhombusesSpinner.vue";
import SemipolarSpinner from "./SemipolarSpinner.vue";
import BreedingRhombusSpinner from "./BreedingRhombusSpinner.vue";
import SwappingSquaresSpinner from "./SwappingSquaresSpinner.vue";
import ScalingSquaresSpinner from "./ScalingSquaresSpinner.vue";
import FulfillingBouncingCircleSpinner from "./FulfillingBouncingCircleSpinner.vue";
import RadarSpinner from "./RadarSpinner.vue";
import SelfBuildingSquareSpinner from "./SelfBuildingSquareSpinner.vue";
import SpringSpinner from "./SpringSpinner.vue";
import LoopingRhombusesSpinner from "./LoopingRhombusesSpinner.vue";
import HalfCircleSpinner from "./HalfCircleSpinner.vue";
import AtomSpinner from "./AtomSpinner.vue";

const spinners = [
  "HollowDotsSpinner",
  "PixelSpinner",
  "FlowerSpinner",
  "IntersectingCirclesSpinner",
  "OrbitSpinner",
  "FingerprintSpinner",
  "TrinityRingsSpinner",
  "FulfillingSquareSpinner",
  "CirclesToRhombusesSpinner",
  "SemipolarSpinner",
  "BreedingRhombusSpinner",
  "SwappingSquaresSpinner",
  "ScalingSquaresSpinner",
  "FulfillingBouncingCircleSpinner",
  "RadarSpinner",
  "SelfBuildingSquareSpinner",
  "SpringSpinner",
  "LoopingRhombusesSpinner",
  "HalfCircleSpinner",
  "AtomSpinner"
];

export default {
  components: {
    HollowDotsSpinner,
    PixelSpinner,
    FlowerSpinner,
    IntersectingCirclesSpinner,
    OrbitSpinner,
    FingerprintSpinner,
    TrinityRingsSpinner,
    FulfillingSquareSpinner,
    CirclesToRhombusesSpinner,
    SemipolarSpinner,
    BreedingRhombusSpinner,
    SwappingSquaresSpinner,
    ScalingSquaresSpinner,
    FulfillingBouncingCircleSpinner,
    RadarSpinner,
    SelfBuildingSquareSpinner,
    SpringSpinner,
    LoopingRhombusesSpinner,
    HalfCircleSpinner,
    AtomSpinner
  },
  props: {
    animationDuration: {
      type: Number,
      default: 1000
    },
    size: {
      type: Number,
      default: 60
    },
    color: {
      type: String,
      default: "#fff"
    }
  },
  data() {
    return {
      template: null
    };
  },
  mounted() {
    this.template = spinners[Math.floor(Math.random() * spinners.length)];
  }
};
</script>
