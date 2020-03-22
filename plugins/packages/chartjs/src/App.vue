<template>
  <div id="app">
    <Dashboard :id="'dashExample'">
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
          <component
            :is="items[index].template"
            :chart-data="items[index].data"
            :options="options"
          ></component>
          <template v-slot:resizeBottomRight> _| </template>
        </DashItem>
      </DashLayout>
    </Dashboard>
  </div>
</template>

<script>
import { Dashboard, DashLayout, DashItem } from "vue-responsive-dash";
import BarChart from "./components/BarChart.vue";
import BubbleChart from "./components/BubbleChart.vue";
import DoughnutChart from "./components/DoughnutChart.vue";
import LineChart from "./components/LineChart.vue";
import HorizontalBarChart from "./components/HorizontalBarChart.vue";
import PieChart from "./components/PieChart.vue";
import PolarAreaChart from "./components/PolarAreaChart.vue";
import RadarChart from "./components/RadarChart.vue";
import ScatterChart from "./components/ScatterChart.vue";
import { largeLayouts } from "../../common/dataItems";

export default {
  name: "App",
  components: {
    Dashboard,
    DashLayout,
    DashItem,
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
      datacollection: null,
      options: null,
      layouts: largeLayouts,
      items: [
        {
          id: "1",
          template: "BarChart",
          data: {
            labels: [
              "January",
              "February",
              "March",
              "April",
              "May",
              "June",
              "July"
            ],
            datasets: [
              {
                label: "Data One",
                barPercentage: 0.5,
                barThickness: 6,
                maxBarThickness: 8,
                minBarLength: 2,
                data: [10, 20, 30, 40, 50, 60, 70]
              }
            ]
          }
        },
        {
          id: "2",
          template: "BubbleChart",
          data: {
            data: [
              { x: 10, y: 20, r: 5 },
              { x: 20, y: 20, r: 15 }
            ]
          }
        },
        {
          id: "3",
          template: "DoughnutChart",
          data: {
            datasets: [
              {
                data: [10, 20, 30]
              }
            ],

            // These labels appear in the legend and in the tooltips when hovering different arcs
            labels: ["Red", "Yellow", "Blue"]
          }
        },
        {
          id: "4",
          template: "HorizontalBarChart",
          data: {
            labels: [
              "January",
              "February",
              "March",
              "April",
              "May",
              "June",
              "July"
            ],
            datasets: [
              {
                label: "Data One",
                barPercentage: 0.5,
                barThickness: 6,
                maxBarThickness: 8,
                minBarLength: 2,
                data: [10, 20, 30, 40, 50, 60, 70]
              }
            ]
          }
        },
        { id: "5", template: "LineChart", data: { data: [10, 24, 21] } },
        {
          id: "6",
          template: "PieChart",
          data: {
            datasets: [
              {
                data: [10, 20, 30]
              }
            ],

            // These labels appear in the legend and in the tooltips when hovering different arcs
            labels: ["Red", "Yellow", "Blue"]
          }
        },
        {
          id: "7",
          template: "PolarAreaChart",
          data: {
            datasets: [
              {
                data: [10, 20, 30]
              }
            ],

            // These labels appear in the legend and in the tooltips when hovering different arcs
            labels: ["Red", "Yellow", "Blue"]
          }
        },
        {
          id: "8",
          template: "RadarChart",
          data: {
            labels: ["Running", "Swimming", "Eating", "Cycling"],
            datasets: [
              {
                data: [20, 10, 4, 2]
              }
            ]
          }
        },
        {
          id: "9",
          template: "ScatterChart",
          data: {
            datasets: [
              {
                label: "Scatter Dataset",
                data: [
                  {
                    x: -10,
                    y: 0
                  },
                  {
                    x: 0,
                    y: 10
                  },
                  {
                    x: 10,
                    y: 5
                  }
                ]
              }
            ]
          }
        }
      ]
    };
  },
  mounted() {
    this.fillData();
    setInterval(() => {
      this.fillData();
    }, 2000);
  },
  methods: {
    fillData() {
      this.datacollection = {
        labels: [this.getRandomInt(), this.getRandomInt()],
        datasets: [
          {
            label: "Data One",
            backgroundColor: "#f87979",
            data: [this.getRandomInt(), this.getRandomInt()]
          },
          {
            label: "Data Two",
            backgroundColor: "#8888",
            data: [this.getRandomInt(), this.getRandomInt()]
          }
        ]
      };
    },
    getRandomInt() {
      return Math.floor(Math.random() * (50 - 5 + 1)) + 5;
    }
  }
};
</script>
