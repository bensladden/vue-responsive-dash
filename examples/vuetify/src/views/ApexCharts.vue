<template>
  <Dashboard :id="'apexCharts'">
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
          <ApexChart
            v-if="chartTypes && chartTypes[index]"
            :type="chartTypes[index]"
            :chartOptions="chartOptions[index]"
            :series="series[index]"
          ></ApexChart>
        </Master>
      </DashItem>
    </DashLayout>
  </Dashboard>
</template>

<script>
import { Dashboard, DashLayout, DashItem } from "vue-responsive-dash";
import Master from "../components/Master";
import { ApexChart } from "@vue-responsive-dash/apexcharts";
export default {
  components: {
    Dashboard,
    DashLayout,
    DashItem,
    Master,
    ApexChart
  },
  data() {
    return {
      layouts: null,
      chartTypes: null,
      chartOptions: null,
      series: null
    };
  },
  mounted() {
    this.layouts = this.layouts = JSON.parse(
      JSON.stringify(this.$store.getters["layouts/getLayouts"])
    );
    this.chartTypes = this.$store.getters["apexCharts/getChartTypes"];
    this.chartOptions = this.$store.getters["apexCharts/getChartOptions"];
    this.series = this.$store.getters["apexCharts/getSeries"];
  }
};
</script>

<style></style>
