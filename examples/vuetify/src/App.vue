<template>
  <v-app>
    <v-container fluid>
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
            <Master></Master>
            <template v-slot:resizeBottomRight>
              <v-icon style="vertical-align:top;" size="13">
                mdi-arrow-bottom-right
              </v-icon>
            </template>
          </DashItem>
        </DashLayout>
      </Dashboard>
    </v-container>
  </v-app>
</template>

<script>
import { Dashboard, DashLayout, DashItem } from "vue-responsive-dash";
import Master from "./components/Master";
export default {
  name: "App",

  components: {
    Dashboard,
    DashLayout,
    DashItem,
    Master
  },
  data() {
    return {
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
            },
            { id: "2", x: 1, y: 0, width: 2, height: 1 },
            { id: "3", x: 0, y: 1, width: 2, height: 1 },
            { id: "4", x: 3, y: 0, width: 2, height: 2 },
            { id: "5", x: 5, y: 0, width: 1, height: 2 },
            { id: "6", x: 6, y: 0, width: 2, height: 1 },
            { id: "7", x: 7, y: 1, width: 5, height: 1 }
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
            },
            { id: "2", x: 1, y: 0, width: 2, height: 1 },
            { id: "3", x: 0, y: 1, width: 2, height: 1 },
            { id: "4", x: 3, y: 0, width: 2, height: 2 },
            { id: "5", x: 5, y: 0, width: 1, height: 2 },
            { id: "6", x: 6, y: 0, width: 2, height: 1 },
            { id: "7", x: 7, y: 1, width: 3, height: 1 }
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
            },
            { id: "2", x: 1, y: 0, width: 2, height: 1 },
            { id: "3", x: 0, y: 1, width: 2, height: 1 },
            { id: "4", x: 3, y: 0, width: 2, height: 2 },
            { id: "5", x: 5, y: 0, width: 1, height: 2 },
            { id: "6", x: 6, y: 0, width: 2, height: 1 },
            { id: "7", x: 7, y: 1, width: 1, height: 1 }
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
            },
            { id: "2", x: 1, y: 0, width: 2, height: 1 },
            { id: "3", x: 0, y: 1, width: 2, height: 1 },
            { id: "4", x: 3, y: 0, width: 1, height: 2 },
            { id: "5", x: 2, y: 1, width: 1, height: 1 }
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
            },
            { id: "2", x: 1, y: 0, width: 1, height: 1 },
            { id: "3", x: 0, y: 1, width: 2, height: 1 }
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
            },
            { id: "2", x: 0, y: 1, width: 1, height: 1 }
          ]
        }
      ]
    };
  }
};
</script>
