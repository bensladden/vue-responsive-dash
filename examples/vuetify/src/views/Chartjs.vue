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
              v-if="items && items[index]"
              :is="items[index].template"
              :chart-data="items[index].data"
              :options="options"
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
import {
  BarChart,
  BubbleChart,
  DoughnutChart,
  HorizontalBarChart,
  LineChart,
  PieChart,
  PolarAreaChart,
  RadarChart,
  ScatterChart
} from "@vue-responsive-dash/chartjs";
import Master from "../components/Master";
export default {
  name: "ChartjsDashboard",
  components: {
    Dashboard,
    DashLayout,
    DashItem,
    Master,
    BarChart,
    BubbleChart,
    DoughnutChart,
    HorizontalBarChart,
    LineChart,
    PieChart,
    PolarAreaChart,
    RadarChart,
    ScatterChart
  },
  data() {
    return {
      layouts: null,
      items: null,
      options: null
    };
  },
  mounted() {
    this.layouts = this.layouts = JSON.parse(
      JSON.stringify(this.$store.getters["layouts/getLayouts"])
    );
    this.items = this.$store.getters["chartjs/getItems"];
  }
};
</script>
