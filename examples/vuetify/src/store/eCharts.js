import {
  barData,
  pieData,
  polarData,
  scatterData,
  radarData,
  lineData
} from "../assets/data";

export default {
  namespaced: true,
  state: {
    barData,
    pieData,
    polarData,
    scatterData,
    radarData,
    lineData
  },
  getters: {
    getItems(state) {
      return [
        {
          id: "1",
          template: "BarChart",
          data: state.barData
        },
        {
          id: "2",
          template: "EffectScatterChart",
          data: state.scatterData
        },
        {
          id: "3",
          template: "LineChart",
          data: state.lineData
        },
        {
          id: "4",
          template: "MapChart",
          data: state.mapData
        },
        {
          id: "5",
          template: "PieChart",
          data: state.pieData
        },
        {
          id: "6",
          template: "RadarChart",
          data: state.radarData
        },
        {
          id: "7",
          template: "ScatterChart",
          data: state.scatterData
        },
        {
          id: "8",
          template: "RadarChart",
          data: state.polarData
        },
        {
          id: "9",
          template: "RadarChart",
          data: state.polarData
        }
      ];
    }
  },
  mutations: {},
  actions: {}
};
