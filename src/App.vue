<template>
  <div id="app">
    <dashboard :id="'dashTest'" :layouts="layouts">
      <layout
        v-for="layout in layouts"
        v-bind="layout"
        :key="layout.breakpoint"
      >
        <Dash-Item
          v-for="item in layout.items"
          v-bind.sync="item"
          :key="item.id"
        >
          <div class="content">{{ JSON.stringify(item) }}</div>
        </Dash-Item>
      </layout>
    </dashboard>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import DashItem from "./components/DashItem.vue";
import Layout from "./components/Layout.vue";
import Dashboard from "./components/Dashboard.vue";
export default Vue.extend({
  name: "app",
  components: {
    DashItem,
    Layout,
    Dashboard
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
            { id: "2", x: 1, y: 1, width: 1, height: 1 }
          ]
        },
        {
          breakpoint: "lg",
          numberOfCols: 10,
          items: [
            {
              id: "1",
              x: 0,
              y: 0,
              width: 1,
              height: 1
            },
            { id: "2", x: 1, y: 1, width: 1, height: 1 }
          ]
        },
        {
          breakpoint: "md",
          numberOfCols: 8,
          items: [
            {
              id: "1",
              x: 0,
              y: 0,
              width: 1,
              height: 1
            },
            { id: "2", x: 1, y: 1, width: 1, height: 1 }
          ]
        },
        {
          breakpoint: "sm",
          numberOfCols: 4,
          items: [
            {
              id: "1",
              x: 0,
              y: 0,
              width: 1,
              height: 1
            },
            { id: "2", x: 1, y: 1, width: 1, height: 1 }
          ]
        },
        {
          breakpoint: "xs",
          numberOfCols: 2,
          items: [
            {
              id: "1",
              x: 0,
              y: 0,
              width: 1,
              height: 1
            },
            { id: "2", x: 1, y: 1, width: 1, height: 1 }
          ]
        },
        {
          breakpoint: "xxs",
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
});
</script>

<style lang="scss">
.content {
  height: 100%;
  width: 100%;
  background-color: lightblue;
}
</style>
