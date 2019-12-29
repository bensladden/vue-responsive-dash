<template>
  <div id="app">
    <dash-item :id="'test'">
      <div class="content">Hello</div>
    </dash-item>
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
