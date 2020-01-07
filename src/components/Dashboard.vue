<template>
  <div :id="id" :ref="id" v-if="d" v-resize @resize="onResize">
    <slot></slot>
    <DashItem v-bind="test"></DashItem>
    <DashItem v-bind="placeholder" v-if="dragging">
      <div class="placeholder"></div>
    </DashItem>
    Current Breakpoint: {{ currentBreakpoint }} Current ColWidth: {{ colWidth }}
  </div>
</template>

<script>
import { Dashboard } from "./Dashboard.model";
import DashItem from "./DashItem";
export default {
  name: "Dashboard",
  props: { id: { type: [Number, String], required: true } },
  components: {
    DashItem
  },
  data() {
    return {
      d: null,
      dragging: true,
      test: {
        id: 11,
        x: 0,
        y: 0,
        width: 1,
        height: 1
      }
    };
  },
  computed: {
    placeholder() {
      let p = this.d.placeholder;
      let modifiedPos = {
        x: this.d.getLeftFromX(p.x),
        y: this.d.getTopFromY(p.y),
        width: this.d.getWidthInPx(p.width),
        height: this.d.getHeightInPx(p.height)
      };
      return {
        ...p,
        ...modifiedPos
      };
    },
    breakpoints() {
      return this.d.breakpoints;
    },
    currentBreakpoint() {
      return this.d.currentBreakpoint;
    },
    colWidth() {
      return this.d.getColWidth();
    }
  },
  methods: {
    onResize(e) {
      this.d.setWidth(e.detail.width);
    }
  },
  mounted() {
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
