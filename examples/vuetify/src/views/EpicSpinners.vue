<template>
  <v-container fluid
    ><Dashboard :id="'dashExample'">
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
          <Master></Master>
          <template v-slot:resizeBottomRight>
            <v-icon style="vertical-align:top;" size="13">
              mdi-arrow-bottom-right
            </v-icon>
          </template>
        </DashItem>
      </DashLayout>
    </Dashboard>
  </v-container>
</template>

<script>
import { Dashboard, DashLayout, DashItem } from "vue-responsive-dash";
import Master from "../components/Master";
export default {
  name: "Home",
  components: {
    Dashboard,
    DashLayout,
    DashItem,
    Master
  },
  data() {
    return {
      layouts: null
    };
  },
  mounted() {
    this.layouts = this.$store.getters["layouts/getLayouts"];
  }
};
</script>
