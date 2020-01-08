<template>
  <div id="app">
    <dashboard
      :id="'dashTest'"
      :layouts="layouts"
      :currentLayout.sync="currentLayout"
    >
      <Dash-Item
        v-for="item in currentLayout.items"
        v-bind="item"
        :key="item.id"
      >
        <div class="content">{{ item.id }}</div>
      </Dash-Item>
    </dashboard>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import DashItem from "./components/DashItem.vue";
import Dashboard from "./components/Dashboard.vue";
export default Vue.extend({
  name: "app",
  components: {
    DashItem,
    Dashboard
  },
  data() {
    return {
      layouts: [
        {
          breakpoint: "xl",
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
        }
      ],
      currentLayout: {
        breakpoint: "xl",
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
      }
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
