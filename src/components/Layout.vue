<template>
  <div v-show="currentBreakpoint === breakpoint">
    <div v-if="l" :style="{ height: height }">
      <slot></slot>
      <DashItem
        :id="placeholderId"
        :draggable="false"
        :resizeable="false"
        v-show="dragging || resizing"
      >
        <div class="placeholder"></div>
      </DashItem>
    </div>
    <div>
      Layout Breakpoint: {{ breakpoint }} <br />
      Current ColWidth: {{ colWidth }} <br />
      Layout Number of Cols: {{ numberOfCols }} <br />
      placeholder: {{ JSON.stringify(placeholder) }} <br />
      Items: {{ JSON.stringify(itemsFromLayout) }}
    </div>
  </div>
</template>

<script>
import { Layout } from "./Layout.model";
import DashItem from "./DashItem";

//Monitor the Props and update the item with the changed value
const watchProp = (key, deep) => ({
  handler(newValue) {
    //If the prop did not cause the update there is no updating
    if (this.l[key] === newValue) {
      return;
    }
    this.l[key] = newValue;
  },
  deep
});

export default {
  name: "Dashboard",
  props: {
    breakpoint: String,
    breakpointWidth: Number,
    items: Array,
    numberOfCols: Number
  },
  components: {
    DashItem
  },
  data() {
    return {
      l: null,
      placeholderId: "-1Placeholder"
    };
  },
  provide() {
    return {
      $layout: () => this.l
    };
  },
  inject: ["$dashboard"],
  computed: {
    dashboard() {
      return this.$dashboard();
    },
    currentBreakpoint() {
      if (this.dashboard) {
        return this.dashboard.currentBreakpoint;
      }
      return "";
    },
    dragging() {
      return this.l.itemBeingDragged;
    },
    resizing() {
      return this.l.itemBeingResized;
    },
    placeholder() {
      if (this.l.placeholder) {
        return this.l.placeholder.toItem();
      }
      return "";
    },
    itemsFromLayout() {
      return this.l.items;
    },
    colWidth() {
      return this.l.colWidth;
    },
    height() {
      if (this.l) {
        return this.l.height + "px";
      }
      return "0px";
    }
  },
  methods: {
    createPropWatchers() {
      //Setup prop watches to sync with the Dash Item
      Object.keys(this.$props).forEach(key => {
        this.$watch(key, watchProp(key, true));
      });
    }
  },
  created() {
    this.l = new Layout(this.$props);
    this.dashboard.addLayoutInstance(this.l);
  },
  beforeDestroy() {
    this.dashboard.removeLayoutInstance(this.l);
  }
};
</script>

<style>
.placeholder {
  height: 100%;
  width: 100%;
  background-color: red;
  opacity: 0.2;
}
</style>
