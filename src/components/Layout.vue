<template>
  <div v-show="currentBreakpoint === breakpoint">
    <div v-if="l" :style="{ height: height }">
      <slot></slot>
      <DashItem v-bind="placeholder" v-if="dragging">
        <div class="placeholder"></div>
      </DashItem>
    </div>
    <div>
      Layout Breakpoint: {{ breakpoint }} Current ColWidth:
      {{ colWidth }} Layout Number of Cols {{ numberOfCols }}
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
    if (this.item[key] === newValue) {
      return;
    }
    switch (key) {
      case "breakpoint":
        this.l.setBreakpoint(newValue);
        break;
      case "width":
        this.l.setWidth(newValue);
        break;
      case "numberOfCols":
        this.l.setNumberOfCols(newValue);
        break;
      case "margin":
        this.l.setMargin(newValue);
        break;
      case "items":
        this.l.setItems(newValue);
        break;
    }
  },
  deep
});

export default {
  name: "Dashboard",
  props: {
    breakpoint: String,
    items: Array,
    numberOfCols: Number
  },
  components: {
    DashItem
  },
  data() {
    return {
      l: null
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
    placeholder() {
      return this.l.placeholder;
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
