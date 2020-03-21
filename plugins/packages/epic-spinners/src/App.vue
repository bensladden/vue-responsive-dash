<template>
  <div id="app">
    <Dashboard :id="'dashExample'">
      <DashLayout
        v-for="layout in layouts"
        :key="layout.breakpoint"
        v-bind="layout"
      >
        <DashItem
          v-for="item in layout.items"
          :key="item.id"
          v-bind.sync="item"
        >
          <randomSpinner
            :animation-duration="1000"
            :size="60"
            :color="'#ff1d5e'"
          ></randomSpinner>
          <template v-slot:resizeBottomRight> _| </template>
        </DashItem>
      </DashLayout>
    </Dashboard>
  </div>
</template>

<script>
import { Dashboard, DashLayout, DashItem } from "vue-responsive-dash";
import RandomSpinner from "./components/RandomSpinner";
import { layouts } from "../../common/dataItems";

export default {
  name: "App",
  components: {
    Dashboard,
    DashLayout,
    DashItem,
    RandomSpinner
  },
  data() {
    return {
      layouts: layouts
    };
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
