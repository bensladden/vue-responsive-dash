<template>
  <div id="app">
    <dashboard
      :id="'dashTest'"
      @currentBreakpointUpdated="updateCurrentBreakpoint"
    >
      <Dash-Layout
        v-for="layout in layouts"
        :key="layout.breakpoint"
        v-bind="layout"
        :rowHeight="rowHeight"
        :colWidth="colWidth"
        :maxColWidth="maxColWidth"
        :minColWidth="minColWidth"
        :maxRowHeight="maxRowHeight"
        :minRowHeight="minRowHeight"
        :compact="compact"
        :margin="margin"
        :debug="true"
      >
        <Dash-Item
          v-for="item in layout.items"
          :id.sync="item.id"
          :x.sync="item.x"
          :y.sync="item.y"
          :width.sync="item.width"
          :height.sync="item.height"
          :locked="item.locked"
          :key="item.id"
          :resizable="resizable"
          :draggable="draggable"
          :maxWidth="3"
          :moveHold="moveHold"
          :dragAllowFrom="allowFrom"
          :dragIgnoreFrom="ignoreFrom"
        >
          <div class="content">
            {{ JSON.stringify(item, null, 2) }}
            <div class="dragHandle"></div>
            <div class="dragHandle2"></div>
          </div>
        </Dash-Item>
        <template v-slot:placeholder>
          <div class="placeholderTest"></div>
        </template>
      </Dash-Layout>
    </dashboard>
    Current Breakpoint:
    {{ currentBreakpoint }} <br />
    <button @click="compact = !compact">toggle compact ({{ compact }})</button>
    <button @click="resizable = !resizable">
      toggle resizable ({{ resizable }})
    </button>
    <button @click="draggable = !draggable">
      toggle draggable ({{ draggable }})
    </button>
    <button @click="addItem">Add Item</button
    ><button @click="removeItem">Remove Item</button>
    <button @click="enableStaticRowHeight = !enableStaticRowHeight">
      Toggle Static Row Height ({{ enableStaticRowHeight }})
    </button>
    <button @click="enableStaticColWidth = !enableStaticColWidth">
      Toggle Static Col Width ({{ enableStaticColWidth }})
    </button>
    <button @click="enableColWidthLimits = !enableColWidthLimits">
      Toggle Col Width Limits ({{ enableColWidthLimits }})
    </button>
    <button @click="enableRowHeightLimits = !enableRowHeightLimits">
      Toggle Row Height Limits ({{ enableRowHeightLimits }})
    </button>
    <button @click="toggleAllowFrom">
      Toggle Allow From ({{ allowFrom }})
    </button>
    <button @click="toggleIgnoreFrom">
      Toggle Ignore From ({{ ignoreFrom }})
    </button>
    <input type="number" min="0" max="5000" v-model.number="moveHold" />
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
      allowFrom: null,
      ignoreFrom: null,
      moveHold: 0,
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
            { id: "3", x: 0, y: 1, width: 2, height: 1, locked: true },
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
      dlayouts: [
        {
          breakpoint: "xl",
          numberOfCols: 12,
          items: [
            { id: "1", x: 6, y: 3, width: 6, height: 3 },
            { id: "2", x: 9, y: 0, width: 3, height: 3 },
            { id: "3", x: 0, y: 0, width: 8, height: 3 },
          ],
        },
      ],
      currentBreakpoint: "",
      origLayout: [],
      testHelper: false,
      rowHeightInput: 200,
      enableStaticRowHeight: false,
      colWidthInput: 200,
      maxColWidthInput: 210,
      minColWidthInput: 190,
      maxRowHeightInput: 210,
      minRowHeightInput: 190,
      enableStaticColWidth: false,
      enableColWidthLimits: false,
      enableRowHeightLimits: false,
    };
  },
  computed: {
    rowHeight() {
      if (this.enableStaticRowHeight) {
        return this.rowHeightInput;
      }
      return this.enableStaticRowHeight;
    },
    colWidth() {
      if (this.enableStaticColWidth) {
        return this.colWidthInput;
      }
      return this.enableStaticColWidth;
    },
    maxColWidth() {
      if (this.enableColWidthLimits) {
        return this.maxColWidthInput;
      }
      return this.enableColWidthLimits;
    },
    minColWidth() {
      if (this.enableColWidthLimits) {
        return this.minColWidthInput;
      }
      return this.enableColWidthLimits;
    },
    maxRowHeight() {
      if (this.enableRowHeightLimits) {
        return this.maxRowHeightInput;
      }
      return this.enableRowHeightLimits;
    },
    minRowHeight() {
      if (this.enableRowHeightLimits) {
        return this.minRowHeightInput;
      }
      return this.enableRowHeightLimits;
    },
  },
  methods: {
    toggleAllowFrom() {
      if (this.allowFrom) {
        this.allowFrom = null;
      } else {
        this.allowFrom = ".dragHandle";
      }
    },
    toggleIgnoreFrom() {
      if (this.ignoreFrom) {
        this.ignoreFrom = null;
      } else {
        this.ignoreFrom = ".dragHandle2";
      }
    },
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
.dragHandle {
  height: 20px;
  width: 20px;
  border: 2px solid #b9a342;
  border-radius: 5px;
  background-color: #b9a3423d;
}
.dragHandle2 {
  height: 20px;
  width: 20px;
  border: 2px solid #b94256;
  border-radius: 5px;
  background-color: #b942563d;
}
.placeholderTest {
  height: 100%;
  width: 100%;
  background-color: rgb(173, 207, 77);
  opacity: 0.2;
}
</style>
