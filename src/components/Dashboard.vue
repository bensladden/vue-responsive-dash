<template>
  <div>
    <div :id="id" :ref="id" v-if="d" v-rlocal @resize="onResize">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { Dashboard } from "./Dashboard.model";
import { resize } from "vue-element-resize-detector";
export default {
  name: "Dashboard",
  props: {
    id: { type: [Number, String], required: true },
    layouts: Array
  },
  components: {},
  directives: {
    rlocal: resize
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
