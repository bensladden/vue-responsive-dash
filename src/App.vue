<template>
  <div id="app">
    <dash-item :id="'test'" :x.sync="x" :y.sync="y">
      <div class="content">Hello</div>
    </dash-item>
    x:<input v-model.number="x" type="number" /> y:
    <input v-model.number="y" type="number" />
    <dashboard :id="'dashTest'"></dashboard>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import DashItem from "./components/DashItem.vue";
import Dashboard from "./components/Dashboard.vue";

export default Vue.extend({
  name: "app",
  components: {
    DashItem,
    Dashboard
  },
  data() {
    return {
      x: 100,
      y: 100
    };
  }
});
</script>

<style lang="scss">
.content {
  height: 100%;
  width: 100%;
  background-color: lightblue;
}
</style>
