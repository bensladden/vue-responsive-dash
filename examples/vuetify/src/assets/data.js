import { graphic } from "echarts/lib/export";

const barData = {
  legend: {},
  tooltip: {},
  dataset: {
    // Provide data.
    source: [
      ["Product", "2015", "2016", "2017"],
      ["Matcha Latte", ...randomize()],
      ["Milk Tea", ...randomize()],
      ["Cheese Cocoa", ...randomize()],
      ["Walnut Brownie", ...randomize()]
    ]
  },
  // Declare X axis, which is a category axis, mapping
  // to the first column by default.
  xAxis: { type: "category" },
  // Declare Y axis, which is a value axis.
  yAxis: {},
  // Declare several series, each of them mapped to a
  // column of the dataset by default.
  series: [{ type: "bar" }, { type: "bar" }, { type: "bar" }]
};

function randomize() {
  return [0, 0, 0].map(() => {
    return Math.round(300 + Math.random() * 700) / 10;
  });
}

const pieData = {
  title: {
    text: "Pie Sections",
    x: "center"
  },
  tooltip: {
    trigger: "item",
    formatter: "{a} <br/>{b} : {c} ({d}%)"
  },
  legend: {
    orient: "vertical",
    left: "left",
    data: ["Section 1", "Section 2", "Section 3", "Section 4", "Section 5"]
  },
  series: [
    {
      name: "Sections",
      type: "pie",
      radius: "55%",
      center: ["50%", "60%"],
      data: [
        { value: 335, name: "Section 1" },
        { value: 310, name: "Section 2" },
        { value: 234, name: "Section 3" },
        { value: 135, name: "Section 4" },
        { value: 1548, name: "Section 5" }
      ],
      itemStyle: {
        emphasis: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: "rgba(0, 0, 0, 0.5)"
        }
      }
    }
  ]
};

const polarDataArray = [];

for (let i = 0; i <= 360; i++) {
  const t = (i / 180) * Math.PI;
  const r = Math.sin(2 * t) * Math.cos(2 * t);
  polarDataArray.push([r, i]);
}

const polarData = {
  title: {
    text: "Polar Series"
  },
  legend: {
    data: ["line"]
  },
  polar: {
    center: ["50%", "54%"]
  },
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "cross"
    }
  },
  angleAxis: {
    type: "value",
    startAngle: 0
  },
  radiusAxis: {
    min: 0
  },
  series: [
    {
      coordinateSystem: "polar",
      name: "line",
      type: "line",
      showSymbol: false,
      data: polarDataArray
    }
  ],
  animationDuration: 2000
};

const scatterDataArray = [
  [
    [28604, 77, 17096869, "Australia", 1990],
    [31163, 77.4, 27662440, "Canada", 1990],
    [1516, 68, 1154605773, "China", 1990],
    [13670, 74.7, 10582082, "Cuba", 1990],
    [28599, 75, 4986705, "Finland", 1990],
    [29476, 77.1, 56943299, "France", 1990],
    [31476, 75.4, 78958237, "Germany", 1990],
    [28666, 78.1, 254830, "Iceland", 1990],
    [1777, 57.7, 870601776, "India", 1990],
    [29550, 79.1, 122249285, "Japan", 1990],
    [2076, 67.9, 20194354, "North Korea", 1990],
    [12087, 72, 42972254, "South Korea", 1990],
    [24021, 75.4, 3397534, "New Zealand", 1990],
    [43296, 76.8, 4240375, "Norway", 1990],
    [10088, 70.8, 38195258, "Poland", 1990],
    [19349, 69.6, 147568552, "Russia", 1990],
    [10670, 67.3, 53994605, "Turkey", 1990],
    [26424, 75.7, 57110117, "United Kingdom", 1990],
    [37062, 75.4, 252847810, "United States", 1990]
  ],
  [
    [44056, 81.8, 23968973, "Australia", 2015],
    [43294, 81.7, 35939927, "Canada", 2015],
    [13334, 76.9, 1376048943, "China", 2015],
    [21291, 78.5, 11389562, "Cuba", 2015],
    [38923, 80.8, 5503457, "Finland", 2015],
    [37599, 81.9, 64395345, "France", 2015],
    [44053, 81.1, 80688545, "Germany", 2015],
    [42182, 82.8, 329425, "Iceland", 2015],
    [5903, 66.8, 1311050527, "India", 2015],
    [36162, 83.5, 126573481, "Japan", 2015],
    [1390, 71.4, 25155317, "North Korea", 2015],
    [34644, 80.7, 50293439, "South Korea", 2015],
    [34186, 80.6, 4528526, "New Zealand", 2015],
    [64304, 81.6, 5210967, "Norway", 2015],
    [24787, 77.3, 38611794, "Poland", 2015],
    [23038, 73.13, 143456918, "Russia", 2015],
    [19360, 76.5, 78665830, "Turkey", 2015],
    [38225, 81.4, 64715810, "United Kingdom", 2015],
    [53354, 79.1, 321773631, "United States", 2015]
  ]
];

const scatterData = {
  title: {
    text: "各国人均寿命与GDP对比"
  },
  legend: {
    right: 10,
    data: ["1990", "2015"]
  },
  xAxis: {
    splitLine: {
      lineStyle: {
        type: "dashed"
      }
    }
  },
  yAxis: {
    splitLine: {
      lineStyle: {
        type: "dashed"
      }
    },
    scale: true
  },
  series: [
    {
      name: "1990",
      data: scatterDataArray[0],
      type: "scatter",
      symbolSize(data) {
        return Math.sqrt(data[2]) / 5e2;
      },
      label: {
        emphasis: {
          show: true,
          formatter({ data }) {
            return data[3];
          },
          position: "top"
        }
      },
      itemStyle: {
        normal: {
          shadowBlur: 10,
          shadowColor: "rgba(120, 36, 50, 0.5)",
          shadowOffsetY: 5,
          color: new graphic.RadialGradient(0.4, 0.3, 1, [
            {
              offset: 0,
              color: "rgb(251, 118, 123)"
            },
            {
              offset: 1,
              color: "rgb(204, 46, 72)"
            }
          ])
        }
      }
    },
    {
      name: "2015",
      data: scatterDataArray[1],
      type: "scatter",
      symbolSize(data) {
        return Math.sqrt(data[2]) / 5e2;
      },
      label: {
        emphasis: {
          show: true,
          formatter({ data }) {
            return data[3];
          },
          position: "top"
        }
      },
      itemStyle: {
        normal: {
          shadowBlur: 10,
          shadowColor: "rgba(25, 100, 150, 0.5)",
          shadowOffsetY: 5,
          color: new graphic.RadialGradient(0.4, 0.3, 1, [
            {
              offset: 0,
              color: "rgb(129, 227, 238)"
            },
            {
              offset: 1,
              color: "rgb(25, 183, 207)"
            }
          ])
        }
      }
    }
  ]
};

const scores = [
  { name: "T1", max: 20, value: 19 },
  { name: "T2", max: 20, value: 9 },
  { name: "T3", max: 20, value: 18 },
  { name: "T4", max: 20, value: 16 },
  { name: "T5", max: 20, value: 16 },
  { name: "T6", max: 20, value: 20 }
];

const radarData = {
  title: {
    text: "Scores Radar"
  },
  tooltip: {},
  radar: {
    indicator: scores.map(({ name, max }) => {
      return { name, max };
    })
  },
  series: [
    {
      name: "Scores",
      type: "radar",
      data: [{ value: scores.map(({ value }) => value) }]
    }
  ]
};

const lineData = {
  xAxis: {
    type: "category",
    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
  },
  yAxis: {
    type: "value"
  },
  series: [
    {
      data: [820, 932, 901, 934, 1290, 1330, 1320],
      type: "line"
    }
  ]
};

export { barData, pieData, polarData, scatterData, radarData, lineData };
