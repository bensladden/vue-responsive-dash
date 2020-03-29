<template>
  <v-app>
    <navbar />
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import Navbar from "./components/NavBar";
export default {
  components: {
    Navbar
  }
};
</script>
