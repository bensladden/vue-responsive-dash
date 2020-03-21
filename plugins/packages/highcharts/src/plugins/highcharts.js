import Vue from "vue";
import Highcharts from "highcharts";
import HighchartsVue from "highcharts-vue";
import stockInit from "highcharts/modules/stock";
import ganttInit from "highcharts/modules/gantt";
import solidGaugeInit from "highcharts/modules/solid-gauge";
import exportingInit from "highcharts/modules/exporting";
import exportingDataInit from "highcharts/modules/export-data";
import highchartsMoreInit from "highcharts/highcharts-more";

exportingInit(Highcharts);
exportingDataInit(Highcharts);
stockInit(Highcharts);
ganttInit(Highcharts);
solidGaugeInit(Highcharts);
highchartsMoreInit(Highcharts);

Vue.use(HighchartsVue);
