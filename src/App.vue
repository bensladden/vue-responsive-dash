<template>
  <div id="app">
    <dash-item :id="'test'" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import DashItem from "./components/DashItem.vue";

export default Vue.extend({
  name: "app",
  components: {
    DashItem
  }
});
</script>

<style lang="scss"></style>
