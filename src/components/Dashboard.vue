<template>
  <div>
    <div
      :id="id"
      :ref="id"
      v-if="d"
      v-resize
      @resize="onResize"
      :style="{ height: height }"
    >
      <slot></slot>
      <DashItem v-bind="placeholder" v-if="dragging">
        <div class="placeholder"></div>
      </DashItem>
    </div>
    <div>
      Current Breakpoint: {{ currentBreakpoint }} Current ColWidth:
      {{ colWidth }}
    </div>
  </div>
</template>

<script>
import { Dashboard } from "./Dashboard.model";
import { Layout } from "../inferfaces";
import DashItem from "./DashItem";
export default {
  name: "Dashboard",
  props: {
    id: { type: [Number, String], required: true },
    layouts: Array,
    currentLayout: Object
  },
  components: {
    DashItem
  },
  data() {
    return {
      d: null,
      dragging: false
    };
  },
  provide() {
    return {
      $dashboard: () => this.d
    };
  },
  computed: {
    placeholder() {
      return this.d.placeholder;
    },
    breakpoints() {
      return this.d.breakpoints;
    },
    currentBreakpoint() {
      if (this.d) {
        return this.d.currentBreakpoint;
      }
      return "";
    },
    colWidth() {
      return this.d.colWidth;
    },
    height() {
      if (this.d) {
        return this.d.height + "px";
      }
      return "0px";
    }
  },
  methods: {
    onResize(e) {
      this.d.setWidth(e.detail.width);
    }
  },
  watch: {
    currentBreakpoint(newValue) {
      if (newValue && newValue !== "") {
        let currentLayout = this.d.getLayoutFromBreakpoint(newValue);
        this.$emit("update:currentLayout", currentLayout);
      }
    }
  },
  created() {
    this.d = new Dashboard(this.$props);
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
