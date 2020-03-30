<template>
  <v-container fluid
    ><Dashboard :id="'dashExample'">
      <DashLayout
        v-for="layout in layouts"
        :key="layout.breakpoint"
        v-bind="layout"
      >
        <DashItem
          v-for="(item, index) in layout.items"
          :key="item.id"
          v-bind.sync="item"
        >
          <Master>
            <component :is="items[index].template" :color="color"></component>
          </Master>
          <template v-slot:resizeBottomRight>
            <v-icon style="vertical-align:top;" size="13">
              mdi-arrow-bottom-right
            </v-icon>
          </template>
        </DashItem>
      </DashLayout>
    </Dashboard>
  </v-container>
</template>

<script>
import { Dashboard, DashLayout, DashItem } from "vue-responsive-dash";
import {
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
} from "@vue-responsive-dash/epic-spinners";
import Master from "../components/Master";
export default {
  name: "Home",
  components: {
    Dashboard,
    DashLayout,
    DashItem,
    Master,
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
  data() {
    return {
      layouts: null,
      items: null
    };
  },
  computed: {
    color() {
      return this.$vuetify.theme.themes.light.primary;
    }
  },
  mounted() {
    this.layouts = this.layouts = JSON.parse(
      JSON.stringify(this.$store.getters["layouts/getLayouts"])
    );
    this.items = this.$store.getters["epicSpinners/getItems"];
  }
};
</script>
