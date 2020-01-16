<template>
  <div>
    <div :id="id" :ref="id" v-if="d" v-resize @resize="onResize">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { Dashboard } from "./Dashboard.model";

export default {
  name: "Dashboard",
  props: {
    id: { type: [Number, String], required: true },
    layouts: Array
  },
  components: {},
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

<style>
.placeholder {
  height: 100%;
  width: 100%;
  background-color: red;
  opacity: 0.2;
}
</style>
