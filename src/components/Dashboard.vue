<template>
  <div :id="id" :ref="id" v-if="d" v-resize @resize="onResize">
    <DashItem v-bind="placeholder" v-if="dragging"></DashItem>
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
      dragging: false
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

<style></style>
