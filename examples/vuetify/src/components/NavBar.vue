<template>
  <v-app-bar app color="quaternary">
    <v-toolbar-title>Vue Responsive Dash</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn :to="'/'" text router exact>Basic</v-btn>
    <v-btn :to="'EpicSpinners'" text router exact>Epic Spinners</v-btn>
    <v-btn :to="'ApexCharts'" text router exact>ApexCharts</v-btn>
    <v-btn :to="'Chartjs'" text router exact>Chartjs</v-btn>
    <v-btn :to="'Echarts'" text router exact>Echarts</v-btn>
  </v-app-bar>
</template>

<script>
export default {};
</script>

<style></style>
