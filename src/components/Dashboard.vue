<template>
  <div :id="id" :ref="id" v-if="d" v-rlocal @resize="onResize">
    <slot></slot>
  </div>
</template>

<script>
import { Dashboard } from "./Dashboard.model";
import { resize } from "vue-element-resize-detector";
export default {
  name: "Dashboard",
  inheritAttrs: false,
  props: {
    id: { type: [Number, String], required: true }
  },
  components: {},
  directives: {
    rlocal: resize
  },
  data() {
    return {
      d: null
    };
  },
  provide() {
    return {
      $dashboard: () => this.d
    };
  },
  computed: {},
  methods: {
    onResize(e) {
      this.d.width = e.detail.width;
    }
  },
  created() {
    this.d = new Dashboard(this.id);
  }
};
</script>

<style></style>
