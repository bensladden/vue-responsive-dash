# @vue-responsive-dash/chartjs

Implements vue-chartjs [https://vue-chartjs.org/](https://vue-chartjs.org/).
This wrapper automatically scales the chart to fit DashItem. 

## ⚙️ Installation
```sh
$ npm install @vue-responsive-dash/chartjs
```

## 📄 Documents
[Link](https://vue-responsive-dash.netlify.com/)

## 🚀 How to use in Vue

```vue
<template>
  <div id="app">
    <Dashboard :id="'dashExample'">
      <DashLayout
        v-for="layout in layouts"
        :key="layout.breakpoint"
        v-bind="layout"
      >
        <DashItem
          v-for="(item, index) in layout.items"
          :key="item.id"
          v-bind.sync="item"
        >
          <component
            :is="items[index].template"
            :chart-data="items[index].data"
            :options="options"
          ></component>
          <template v-slot:resizeBottomRight> _| </template>
        </DashItem>
      </DashLayout>
    </Dashboard>
  </div>
</template>

<script>
import { Dashboard, DashLayout, DashItem } from "vue-responsive-dash";
import { 
        BarChart, 
        BubbleChart, 
        DoughnutChart, 
        LineChart, 
        HorizontalBarChart, 
        PieChart, 
        PolarAreaChart, 
        RadarChart,
        ScatterChart
    } from "@vue-responsive-dash/chartjs"

let largeLayouts = [
  {
    breakpoint: "xl",
    numberOfCols: 12,
    items: [
      {
        id: "1",
        x: 0,
        y: 0,
        width: 1,
        height: 1
      },
      { id: "2", x: 1, y: 0, width: 2, height: 1 },
      { id: "3", x: 0, y: 1, width: 2, height: 1 },
      { id: "4", x: 3, y: 0, width: 2, height: 2 },
      { id: "5", x: 5, y: 0, width: 1, height: 2 },
      { id: "6", x: 6, y: 0, width: 2, height: 1 },
      { id: "7", x: 7, y: 1, width: 5, height: 2 },
      { id: "8", x: 0, y: 3, width: 2, height: 2 },
      { id: "9", x: 2, y: 3, width: 2, height: 2 }
    ]
  },
  {
    breakpoint: "lg",
    breakpointWidth: 1200,
    numberOfCols: 10,
    items: [
      {
        id: "1",
        x: 0,
        y: 0,
        width: 1,
        height: 1
      },
      { id: "2", x: 1, y: 0, width: 2, height: 1 },
      { id: "3", x: 0, y: 1, width: 2, height: 1 },
      { id: "4", x: 3, y: 0, width: 2, height: 2 },
      { id: "5", x: 5, y: 0, width: 1, height: 2 },
      { id: "6", x: 6, y: 0, width: 2, height: 1 },
      { id: "7", x: 7, y: 1, width: 3, height: 2 },
      { id: "8", x: 0, y: 3, width: 2, height: 2 },
      { id: "9", x: 2, y: 3, width: 2, height: 2 }
    ]
  },
  {
    breakpoint: "md",
    breakpointWidth: 996,
    numberOfCols: 8,
    items: [
      {
        id: "1",
        x: 0,
        y: 0,
        width: 1,
        height: 1
      },
      { id: "2", x: 1, y: 0, width: 2, height: 1 },
      { id: "3", x: 0, y: 1, width: 2, height: 1 },
      { id: "4", x: 3, y: 0, width: 2, height: 2 },
      { id: "5", x: 5, y: 0, width: 1, height: 2 },
      { id: "6", x: 6, y: 0, width: 2, height: 1 },
      { id: "7", x: 7, y: 1, width: 2, height: 2 },
      { id: "8", x: 0, y: 3, width: 2, height: 2 },
      { id: "9", x: 2, y: 3, width: 2, height: 2 }
    ]
  },
  {
    breakpoint: "sm",
    breakpointWidth: 768,
    numberOfCols: 4,
    items: [
      {
        id: "1",
        x: 0,
        y: 0,
        width: 1,
        height: 1
      },
      { id: "2", x: 1, y: 0, width: 2, height: 1 },
      { id: "3", x: 0, y: 1, width: 2, height: 1 },
      { id: "4", x: 3, y: 0, width: 1, height: 2 },
      { id: "5", x: 2, y: 1, width: 1, height: 1 }
    ]
  },
  {
    breakpoint: "xs",
    breakpointWidth: 480,
    numberOfCols: 2,
    items: [
      {
        id: "1",
        x: 0,
        y: 0,
        width: 1,
        height: 1
      },
      { id: "2", x: 1, y: 0, width: 1, height: 1 },
      { id: "3", x: 0, y: 1, width: 2, height: 1 }
    ]
  },
  {
    breakpoint: "xxs",
    breakpointWidth: 0,
    numberOfCols: 1,
    items: [
      {
        id: "1",
        x: 0,
        y: 0,
        width: 1,
        height: 1
      },
      { id: "2", x: 0, y: 1, width: 1, height: 1 }
    ]
  }
];

export default {
  name: "App",
  components: {
    Dashboard,
    DashLayout,
    DashItem,
    BarChart,
    BubbleChart,
    DoughnutChart,
    HorizontalBarChart,
    LineChart,
    PieChart,
    PolarAreaChart,
    RadarChart,
    ScatterChart
  },
  data() {
    return {
      datacollection: null,
      options: null,
      layouts: largeLayouts,
      items: [
        {
          id: "1",
          template: "BarChart",
          data: {
            labels: [
              "January",
              "February",
              "March",
              "April",
              "May",
              "June",
              "July"
            ],
            datasets: [
              {
                label: "Data One",
                backgroundColor: "#f87979",
                barPercentage: 0.5,
                barThickness: 6,
                maxBarThickness: 8,
                minBarLength: 2,
                data: [10, 20, 30, 40, 50, 60, 70]
              }
            ]
          }
        },
        {
          id: "2",
          template: "BubbleChart",
          data: {
            datasets: [
              {
                label: "Data One",
                backgroundColor: "#f87979",
                data: [
                  {
                    x: 20,
                    y: 25,
                    r: 5
                  },
                  {
                    x: 40,
                    y: 10,
                    r: 10
                  },
                  {
                    x: 30,
                    y: 22,
                    r: 30
                  }
                ]
              },
              {
                label: "Data Two",
                backgroundColor: "#7C8CF8",
                data: [
                  {
                    x: 10,
                    y: 30,
                    r: 15
                  },
                  {
                    x: 20,
                    y: 20,
                    r: 10
                  },
                  {
                    x: 15,
                    y: 8,
                    r: 30
                  }
                ]
              }
            ]
          }
        },
        {
          id: "3",
          template: "DoughnutChart",
          data: {
            labels: ["VueJs", "EmberJs", "ReactJs", "AngularJs"],
            datasets: [
              {
                backgroundColor: ["#41B883", "#E46651", "#00D8FF", "#DD1B16"],
                data: [40, 20, 80, 10]
              }
            ]
          }
        },
        {
          id: "4",
          template: "HorizontalBarChart",
          data: {
            labels: [
              "January",
              "February",
              "March",
              "April",
              "May",
              "June",
              "July"
            ],
            datasets: [
              {
                label: "Data One",
                backgroundColor: "#f87979",
                barPercentage: 0.5,
                barThickness: 6,
                maxBarThickness: 8,
                minBarLength: 2,
                data: [10, 20, 30, 40, 50, 60, 70]
              }
            ]
          }
        },
        {
          id: "5",
          template: "LineChart",
          data: {
            labels: [
              "January",
              "February",
              "March",
              "April",
              "May",
              "June",
              "July"
            ],
            datasets: [
              {
                label: "Data One",
                backgroundColor: "#f87979",
                data: [40, 39, 10, 40, 39, 80, 40]
              }
            ]
          }
        },
        {
          id: "6",
          template: "PieChart",
          data: {
            labels: ["VueJs", "EmberJs", "ReactJs", "AngularJs"],
            datasets: [
              {
                backgroundColor: ["#41B883", "#E46651", "#00D8FF", "#DD1B16"],
                data: [40, 20, 80, 10]
              }
            ]
          }
        },
        {
          id: "7",
          template: "PolarAreaChart",
          data: {
            labels: [
              "Eating",
              "Drinking",
              "Sleeping",
              "Designing",
              "Coding",
              "Cycling",
              "Running"
            ],
            datasets: [
              {
                label: "My First dataset",
                backgroundColor: "rgba(179,181,198,0.2)",
                pointBackgroundColor: "rgba(179,181,198,1)",
                pointBorderColor: "#fff",
                pointHoverBackgroundColor: "#fff",
                pointHoverBorderColor: "rgba(179,181,198,1)",
                data: [65, 59, 90, 81, 56, 55, 40]
              },
              {
                label: "My Second dataset",
                backgroundColor: "rgba(255,99,132,0.2)",
                pointBackgroundColor: "rgba(255,99,132,1)",
                pointBorderColor: "#fff",
                pointHoverBackgroundColor: "#fff",
                pointHoverBorderColor: "rgba(255,99,132,1)",
                data: [28, 48, 40, 19, 96, 27, 100]
              }
            ]
          }
        },
        {
          id: "8",
          template: "RadarChart",
          data: {
            labels: [
              "Eating",
              "Drinking",
              "Sleeping",
              "Designing",
              "Coding",
              "Cycling",
              "Running"
            ],
            datasets: [
              {
                label: "My First dataset",
                backgroundColor: "rgba(179,181,198,0.2)",
                borderColor: "rgba(179,181,198,1)",
                pointBackgroundColor: "rgba(179,181,198,1)",
                pointBorderColor: "#fff",
                pointHoverBackgroundColor: "#fff",
                pointHoverBorderColor: "rgba(179,181,198,1)",
                data: [65, 59, 90, 81, 56, 55, 40]
              },
              {
                label: "My Second dataset",
                backgroundColor: "rgba(255,99,132,0.2)",
                borderColor: "rgba(255,99,132,1)",
                pointBackgroundColor: "rgba(255,99,132,1)",
                pointBorderColor: "#fff",
                pointHoverBackgroundColor: "#fff",
                pointHoverBorderColor: "rgba(255,99,132,1)",
                data: [28, 48, 40, 19, 96, 27, 100]
              }
            ]
          }
        },
        {
          id: "9",
          template: "ScatterChart",
          data: {
            datasets: [
              {
                label: "Scatter Dataset 1",
                fill: false,
                borderColor: "#f87979",
                backgroundColor: "#f87979",
                data: [
                  {
                    x: -2,
                    y: 4
                  },
                  {
                    x: -1,
                    y: 1
                  },
                  {
                    x: 0,
                    y: 0
                  },
                  {
                    x: 1,
                    y: 1
                  },
                  {
                    x: 2,
                    y: 4
                  }
                ]
              },
              {
                label: "Scatter Dataset 2",
                fill: false,
                borderColor: "#7acbf9",
                backgroundColor: "#7acbf9",
                data: [
                  {
                    x: -2,
                    y: -4
                  },
                  {
                    x: -1,
                    y: -1
                  },
                  {
                    x: 0,
                    y: 1
                  },
                  {
                    x: 1,
                    y: -1
                  },
                  {
                    x: 2,
                    y: -4
                  }
                ]
              }
            ]
          }
        }
      ]
    };
  }
};
</script>

```

## Licensing
This package is open-source and distributed under the terms of the MIT License.

## ⭐️ Show Your Support
Please give a ⭐️ if this project helped you!

## 👏 Contributing
If you have any questions or requests or want to contribute to `vue-responsive-dash` or other packages, please write the [issue](https://github.com/bensladden/vue-responsive-dash/issues) or give me a Pull Request freely.

## 🐞 Bug Report
If you find a bug, please report to us opening a new [Issue](https://github.com/bensladden/vue-responsive-dash/issues) on GitHub.

## ⚙️ Development
### `npm run serve`

Runs the app in the development mode.<br>
Open [http://localhost:8080](http://localhost:8080) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.