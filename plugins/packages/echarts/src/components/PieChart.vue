<template>
  <v-chart
    :initOptions="initOptions"
    :options="options"
    :theme="theme"
    :group="group"
    :watchShallow="watchShallow"
    :manualUpdate="manualUpdate"
    autoresize
    :style="{ width: width + 'px', height: height + 'px' }"
  ></v-chart>
</template>

<script>
import "echarts/lib/chart/pie";
import chartMixin from "./chartMixin";
export default {
  mixins: [chartMixin]
};
</script>
