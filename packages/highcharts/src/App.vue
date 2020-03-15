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
          <highchartsPie :options="options"></highchartsPie>
          <template v-slot:resizeBottomRight> _| </template>
        </DashItem>
      </DashLayout>
    </Dashboard>
  </div>
</template>

<script>
import { Dashboard, DashLayout, DashItem } from "vue-responsive-dash";
import highchartsPie from "./components/highchartsPie";
export default {
  name: "App",
  components: {
    Dashboard,
    DashLayout,
    DashItem,
    highchartsPie
  },
  data() {
    return {
      options: {
        series: [
          {
            type: "pie",
            data: [
              {
                name: "test1",
                y: 5
              },
              {
                name: "test2",
                y: 6
              }
            ]
          }
        ]
      },
      layouts: [
        {
          breakpoint: "xl",
          numberOfCols: 12,
          items: [
            {
              id: "1",
              x: 0,
              y: 0,
              width: 1,
              height: 1
            }
          ]
        },
        {
          breakpoint: "lg",
          breakpointWidth: 1200,
          numberOfCols: 10,
          items: [
            {
              id: "1",
              x: 0,
              y: 0,
              width: 1,
              height: 1
            }
          ]
        },
        {
          breakpoint: "md",
          breakpointWidth: 996,
          numberOfCols: 8,
          items: [
            {
              id: "1",
              x: 0,
              y: 0,
              width: 1,
              height: 1
            }
          ]
        },
        {
          breakpoint: "sm",
          breakpointWidth: 768,
          numberOfCols: 4,
          items: [
            {
              id: "1",
              x: 0,
              y: 0,
              width: 1,
              height: 1
            }
          ]
        },
        {
          breakpoint: "xs",
          breakpointWidth: 480,
          numberOfCols: 2,
          items: [
            {
              id: "1",
              x: 0,
              y: 0,
              width: 1,
              height: 1
            }
          ]
        },
        {
          breakpoint: "xxs",
          breakpointWidth: 0,
          numberOfCols: 1,
          items: [
            {
              id: "1",
              x: 0,
              y: 0,
              width: 1,
              height: 1
            }
          ]
        }
      ]
    };
  },
  mounted() {
    setInterval(() => {
      this.options.series[0].data[0].y = Math.random() * 5;
      this.options.series[0].data[1].y = Math.random() * 6;
    }, 2000);
  }
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
