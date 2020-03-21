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
          <Chart :options="options"></Chart>
          <template v-slot:resizeBottomRight> _| </template>
        </DashItem>
      </DashLayout>
    </Dashboard>
  </div>
</template>

<script>
import { Dashboard, DashLayout, DashItem } from "vue-responsive-dash";
import Chart from "./components/Chart.vue";
import { layouts } from "../../common/dataItems";
export default {
  name: "App",
  components: {
    Dashboard,
    DashLayout,
    DashItem,
    Chart
  },
  data() {
    return {
      layouts: layouts,
      options: {
        title: {
          text: "Pie",
          x: "center"
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          left: "left",
          data: ["S1", "S2", "S3", "S4", "S5"]
        },
        series: [
          {
            name: "Pie",
            type: "pie",
            radius: "55%",
            center: ["50%", "60%"],
            data: [
              { value: 335, name: "S1" },
              { value: 310, name: "S2" },
              { value: 234, name: "S3" },
              { value: 135, name: "S4" },
              { value: 1548, name: "S5" }
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          }
        ]
      }
    };
  }
};
</script>

<style></style>
