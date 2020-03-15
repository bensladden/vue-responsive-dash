<template>
  <highchartsChart :options="chartOptions"></highchartsChart>
</template>

<script>
import highchartsChart from "./highchartsChart";

const chartDefaults = {
  chart: {
    plotBackgroundColor: null,
    backgroundColor: null,
    plotBorderWidth: null,
    plotShadow: false
  },
  plotOptions: {
    pie: {
      allowPointSelect: true,
      cursor: "pointer",
      dataLabels: {
        enabled: false
      },
      showInLegend: true
    }
  },
  credits: {
    enabled: false
  },
  exporting: {
    enabled: false
  },
  title: {
    text: ""
  },
  series: [
    {
      type: "pie",
      data: []
    }
  ]
};
export default {
  props: ["options"],
  components: {
    highchartsChart
  },
  data() {
    return {
      chartOptions: chartDefaults
    };
  },
  watch: {
    options: {
      handler(newValue) {
        this.chartOptions = Object.assign({}, chartDefaults, newValue);
      },
      immediate: true,
      deep: true
    }
  }
};
</script>

<style></style>
