<template>
  <div id="app">
    <Dashboard :id="'dashExample'">
      <DashLayout
        v-for="layout in layouts"
        :key="layout.breakpoint"
        v-bind="layout"
      >
        <DashItem
          v-for="item in layout.items"
          :key="item.id"
          v-bind.sync="item"
        >
          <fusionChart
            :type="'column2d'"
            :dataFormat="'json'"
            :dataSource="myDataSource"
          ></fusionChart>
          <template v-slot:resizeBottomRight> _| </template>
        </DashItem>
      </DashLayout>
    </Dashboard>
  </div>
</template>

<script>
import { Dashboard, DashLayout, DashItem } from "vue-responsive-dash";
import FusionChart from "./components/FusionChart.vue";
import { layouts } from "../../common/dataItems";

export default {
  name: "App",
  components: {
    Dashboard,
    DashLayout,
    DashItem,
    FusionChart,
  },
  data() {
    return {
      myDataSource: {
        chart: {
          caption: "Recommended Portfolio Split",
          subCaption: "For a net-worth of $1M",
          showValues: "1",
          showPercentInTooltip: "0",
          numberPrefix: "$",
          enableMultiSlicing: "1",
          theme: "fusion",
        },
        data: [
          {
            label: "Equity",
            value: "300000",
          },
          {
            label: "Debt",
            value: "230000",
          },
          {
            label: "Bullion",
            value: "180000",
          },
          {
            label: "Real-estate",
            value: "270000",
          },
          {
            label: "Insurance",
            value: "20000",
          },
        ],
      },
      layouts: layouts,
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
