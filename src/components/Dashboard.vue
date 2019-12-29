<template>
  <div :id="id" :ref="id" v-if="d" v-resize @resize="onResize">
    <DashItem v-bind="placeholder" v-if="dragging"></DashItem>
  </div>
</template>

<script>
import { Dashboard } from "./Dashboard.model";
import DashItem from "./DashItem";
import resize from "../directive/elementResizeDetector";
export default {
  name: "Dashboard",
  props: { id: { type: [Number, String], required: true } },
  components: {
    DashItem
  },
  directives: {
    resize
  },
  data() {
    return {
      d: null,
      dragging: false
    };
  },
  computed: {
    placeholder() {
      return this.dashboard.placeholder;
    }
  },
  methods: {
    onResize(e) {
      console.log("resize event", e.detail.width);
    }
  },
  mounted() {
    this.d = new Dashboard(this.$props);
  }
};
</script>

<style></style>
