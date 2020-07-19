import { generateData, generateHeatData } from "./apexChartsUtils";
export default {
  namespaced: true,
  state: {
    chartTypes: [
      "area",
      "bar",
      "bubble",
      "bar",
      "donut",
      "heatmap",
      "line",
      "radialBar",
      "scatter"
    ],
    chartOptions: [
      {
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: "smooth"
        },
        xaxis: {
          categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"]
        },
        tooltip: {
          fixed: {
            enabled: false,
            position: "topRight"
          }
        }
      },
      {
        plotOptions: {
          bar: {
            horizontal: true
          }
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
        }
      },
      {
        dataLabels: {
          enabled: false
        },
        fill: {
          opacity: 0.8,
          gradient: {
            enabled: false
          }
        },
        title: {
          text: "Simple Bubble Chart"
        },
        xaxis: {
          tickAmount: 12,
          type: "category"
        },
        yaxis: {
          max: 70
        }
      },
      {
        plotOptions: {
          bar: {
            horizontal: false,
            endingShape: "rounded",
            columnWidth: "55%"
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          show: true,
          width: 2,
          colors: ["transparent"]
        },
        xaxis: {
          categories: [
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct"
          ]
        },
        yaxis: {
          title: {
            text: "$ (thousands)"
          }
        },
        fill: {
          opacity: 1
        },
        tooltip: {
          y: {
            formatter: function(val) {
              return "$ " + val + " thousands";
            }
          }
        }
      },
      {
        labels: ["Blue", "Green", "Yellow", "Red"]
      },
      {
        dataLabels: {
          enabled: false
        },
        colors: ["#008FFB"],
        xaxis: {
          type: "category"
        },
        title: {
          text: "HeatMap Chart (Single color)"
        }
      },
      {
        xaxis: {
          type: "datetime",
          categories: [
            "01/01/2003",
            "02/01/2003",
            "03/01/2003",
            "04/01/2003",
            "05/01/2003",
            "06/01/2003",
            "07/01/2003",
            "08/01/2003"
          ]
        }
      },
      {
        labels: ["Percent"]
      },
      {
        chart: {
          zoom: {
            enabled: false
          }
        },
        xaxis: {
          tickAmount: 10
        },
        yaxis: {
          tickAmount: 7
        }
      }
    ],
    series: [
      [
        {
          name: "series1",
          data: [31, 40, 28, 51, 42, 109, 100]
        },
        {
          name: "series2",
          data: [11, 32, 45, 32, 34, 52, 41]
        }
      ],
      [
        {
          name: "series-1",
          data: [30, 40, 45, 50, 49, 60, 70, 91]
        }
      ],
      [
        {
          name: "Bubble1",
          data: generateData(new Date("11 Feb 2017 GMT").getTime(), 20, {
            min: 10,
            max: 60
          })
        },
        {
          name: "Bubble2",
          data: generateData(new Date("11 Feb 2017 GMT").getTime(), 20, {
            min: 10,
            max: 60
          })
        },
        {
          name: "Bubble3",
          data: generateData(new Date("11 Feb 2017 GMT").getTime(), 20, {
            min: 10,
            max: 60
          })
        },
        {
          name: "Bubble4",
          data: generateData(new Date("11 Feb 2017 GMT").getTime(), 20, {
            min: 10,
            max: 60
          })
        }
      ],
      [
        {
          name: "Net Profit",
          data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
        },
        {
          name: "Revenue",
          data: [76, 85, 41, 98, 87, 44, 91, 81, 94]
        },
        {
          name: "Free Cash Flow",
          data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
        }
      ],
      [11, 32, 45, 32],
      [
        {
          name: "Metric1",
          data: generateHeatData(20, {
            min: 0,
            max: 90
          })
        },
        {
          name: "Metric2",
          data: generateHeatData(20, {
            min: 0,
            max: 90
          })
        },
        {
          name: "Metric3",
          data: generateHeatData(20, {
            min: 0,
            max: 90
          })
        },
        {
          name: "Metric4",
          data: generateHeatData(20, {
            min: 0,
            max: 90
          })
        },
        {
          name: "Metric5",
          data: generateHeatData(20, {
            min: 0,
            max: 90
          })
        },
        {
          name: "Metric6",
          data: generateHeatData(20, {
            min: 0,
            max: 90
          })
        },
        {
          name: "Metric7",
          data: generateHeatData(20, {
            min: 0,
            max: 90
          })
        },
        {
          name: "Metric8",
          data: generateHeatData(20, {
            min: 0,
            max: 90
          })
        },
        {
          name: "Metric9",
          data: generateHeatData(20, {
            min: 0,
            max: 90
          })
        }
      ],
      [
        {
          name: "Series A",
          data: [30, 40, 45, 50, 49, 60, 70, 91]
        },
        {
          name: "Series B",
          data: [23, 43, 54, 12, 44, 52, 32, 11]
        }
      ],
      [81],
      [
        {
          name: "SAMPLE A",
          data: [
            [16.4, 5.4],
            [21.7, 2],
            [25.4, 3],
            [19, 2],
            [10.9, 1],
            [13.6, 3.2],
            [10.9, 7.4],
            [10.9, 0],
            [10.9, 8.2],
            [16.4, 0],
            [16.4, 1.8],
            [13.6, 0.3],
            [13.6, 0],
            [29.9, 0],
            [27.1, 2.3],
            [16.4, 0],
            [13.6, 3.7],
            [10.9, 5.2],
            [16.4, 6.5],
            [10.9, 0],
            [24.5, 7.1],
            [10.9, 0],
            [8.1, 4.7],
            [19, 0],
            [21.7, 1.8],
            [27.1, 0],
            [24.5, 0],
            [27.1, 0],
            [29.9, 1.5],
            [27.1, 0.8],
            [22.1, 2]
          ]
        },
        {
          name: "SAMPLE B",
          data: [
            [6.4, 13.4],
            [1.7, 11],
            [5.4, 8],
            [9, 17],
            [1.9, 4],
            [3.6, 12.2],
            [1.9, 14.4],
            [1.9, 9],
            [1.9, 13.2],
            [1.4, 7],
            [6.4, 8.8],
            [3.6, 4.3],
            [1.6, 10],
            [9.9, 2],
            [7.1, 15],
            [1.4, 0],
            [3.6, 13.7],
            [1.9, 15.2],
            [6.4, 16.5],
            [0.9, 10],
            [4.5, 17.1],
            [10.9, 10],
            [0.1, 14.7],
            [9, 10],
            [12.7, 11.8],
            [2.1, 10],
            [2.5, 10],
            [27.1, 10],
            [2.9, 11.5],
            [7.1, 10.8],
            [2.1, 12]
          ]
        },
        {
          name: "SAMPLE C",
          data: [
            [21.7, 3],
            [23.6, 3.5],
            [24.6, 3],
            [29.9, 3],
            [21.7, 20],
            [23, 2],
            [10.9, 3],
            [28, 4],
            [27.1, 0.3],
            [16.4, 4],
            [13.6, 0],
            [19, 5],
            [22.4, 3],
            [24.5, 3],
            [32.6, 3],
            [27.1, 4],
            [29.6, 6],
            [31.6, 8],
            [21.6, 5],
            [20.9, 4],
            [22.4, 0],
            [32.6, 10.3],
            [29.7, 20.8],
            [24.5, 0.8],
            [21.4, 0],
            [21.7, 6.9],
            [28.6, 7.7],
            [15.4, 0],
            [18.1, 0],
            [33.4, 0],
            [16.4, 0]
          ]
        }
      ]
    ]
  },
  getters: {
    getChartTypes(state) {
      return state.chartTypes;
    },
    getChartOptions(state) {
      return state.chartOptions;
    },
    getSeries(state) {
      return state.series;
    }
  },
  mutations: {},
  actions: {}
};
