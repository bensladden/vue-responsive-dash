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
            <component
              :is="items[index].template"
              :options="items[index].data"
            ></component>
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
import Master from "../components/Master";
import {
  BarChart,
  EffectScatterChart,
  LineChart,
  MapChart,
  PieChart,
  RadarChart,
  ScatterChart
} from "@vue-responsive-dash/echarts";
export default {
  name: "Home",
  components: {
    Dashboard,
    DashLayout,
    DashItem,
    Master,
    BarChart,
    EffectScatterChart,
    LineChart,
    MapChart,
    PieChart,
    RadarChart,
    ScatterChart
  },
  data() {
    return {
      layouts: null,
      items: null
    };
  },
  mounted() {
    this.layouts = JSON.parse(
      JSON.stringify(this.$store.getters["layouts/getLayouts"])
    );
    this.items = this.$store.getters["eCharts/getItems"];
  }
};
</script>
