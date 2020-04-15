<template>
  <div id="app">
    <dashboard
      :id="'dashTest'"
      @currentBreakpointUpdated="updateCurrentBreakpoint"
    >
      <Dash-Layout
        v-for="layout in layouts"
        v-bind="layout"
        :key="layout.breakpoint"
        :compact="compact"
        :margin="margin"
      >
        <Dash-Item
          v-for="item in layout.items"
          v-bind.sync="item"
          :key="item.id"
          :resizable="resizable"
          :draggable="draggable"
        >
          <div class="content">{{ JSON.stringify(item, null, 2) }}</div>
        </Dash-Item>
      </Dash-Layout>
    </dashboard>
    <button @click="compact = !compact">toggle compact</button> {{ compact }}
    <button @click="resizable = !resizable">toggle resizable</button>
    {{ resizable }}
    <button @click="draggable = !draggable">toggle draggable</button>
    {{ draggable }} <button @click="addItem">Add Item</button
    ><button @click="removeItem">Remove Item</button> Current Breakpoint:
    {{ currentBreakpoint }}
  </div>
</template>

<script>
import Vue from "vue";
import DashItem from "./components/DashItem.vue";
import DashLayout from "./components/DashLayout.vue";
import Dashboard from "./components/Dashboard.vue";
export default {
  name: "app",
  components: {
    DashItem,
    DashLayout,
    Dashboard,
  },
  data() {
    return {
      compact: true,
      draggable: true,
      resizable: true,
      margin: { x: 20, y: 20 },
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
              height: 1,
            },
            { id: "2", x: 1, y: 0, width: 2, height: 1 },
            { id: "3", x: 0, y: 1, width: 2, height: 1 },
            { id: "4", x: 3, y: 0, width: 2, height: 2 },
            { id: "5", x: 5, y: 0, width: 1, height: 2 },
            { id: "6", x: 6, y: 0, width: 2, height: 1 },
            { id: "7", x: 7, y: 1, width: 5, height: 1 },
          ],
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
              height: 1,
            },
            { id: "2", x: 1, y: 0, width: 2, height: 1 },
            { id: "3", x: 0, y: 1, width: 2, height: 1 },
            { id: "4", x: 3, y: 0, width: 2, height: 2 },
            { id: "5", x: 5, y: 0, width: 1, height: 2 },
            { id: "6", x: 6, y: 0, width: 2, height: 1 },
            { id: "7", x: 7, y: 1, width: 3, height: 1 },
          ],
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
              height: 1,
            },
            { id: "2", x: 1, y: 0, width: 2, height: 1 },
            { id: "3", x: 0, y: 1, width: 2, height: 1 },
            { id: "4", x: 3, y: 0, width: 2, height: 2 },
            { id: "5", x: 5, y: 0, width: 1, height: 2 },
            { id: "6", x: 6, y: 0, width: 2, height: 1 },
            { id: "7", x: 7, y: 1, width: 1, height: 1 },
          ],
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
              height: 1,
            },
            { id: "2", x: 1, y: 0, width: 2, height: 1 },
            { id: "3", x: 0, y: 1, width: 2, height: 1 },
            { id: "4", x: 3, y: 0, width: 1, height: 2 },
            { id: "5", x: 2, y: 1, width: 1, height: 1 },
          ],
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
              height: 1,
            },
            { id: "2", x: 1, y: 0, width: 1, height: 1 },
            { id: "3", x: 0, y: 1, width: 2, height: 1 },
          ],
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
              height: 1,
            },
            { id: "2", x: 0, y: 1, width: 1, height: 1 },
          ],
        },
      ],
      currentBreakpoint: "",
      origLayout: [],
      testHelper: false,
    };
  },
  methods: {
    addItem() {
      for (let layout of this.layouts) {
        layout.items.push({
          id: (layout.items.length + 1).toString(),
          x: 1,
          y: 0,
          width: 2,
          height: 1,
        });
      }
    },
    removeItem() {
      for (let layout of this.layouts) {
        layout.items.splice(0, 1);
      }
    },
    updateCurrentBreakpoint(val) {
      this.currentBreakpoint = val;
    },
  },
};
</script>

<style>
.content {
  height: 100%;
  width: 100%;
  border: 2px solid #42b983;
  border-radius: 5px;
  background-color: #42b9833d;
}
</style>
