export default {
  namespaced: true,
  state: {
    layouts: [
      {
        breakpoint: "xl",
        numberOfCols: 12,
        items: [
          { id: "1", x: 0, y: 0, width: 2, height: 2 },
          { id: "2", x: 2, y: 0, width: 2, height: 2 },
          { id: "3", x: 4, y: 0, width: 2, height: 2 },
          { id: "4", x: 6, y: 0, width: 2, height: 2 },
          { id: "5", x: 8, y: 0, width: 2, height: 2 },
          { id: "6", x: 10, y: 0, width: 2, height: 2 },
          { id: "7", x: 0, y: 2, width: 5, height: 2 },
          { id: "8", x: 2, y: 2, width: 2, height: 2 },
          { id: "9", x: 4, y: 2, width: 2, height: 2 }
        ]
      },
      {
        breakpoint: "lg",
        breakpointWidth: 1200,
        numberOfCols: 10,
        items: [
          { id: "1", x: 0, y: 0, width: 2, height: 2 },
          { id: "2", x: 2, y: 0, width: 2, height: 2 },
          { id: "3", x: 4, y: 0, width: 2, height: 2 },
          { id: "4", x: 6, y: 0, width: 2, height: 2 },
          { id: "5", x: 8, y: 0, width: 2, height: 2 },
          { id: "6", x: 0, y: 2, width: 2, height: 2 },
          { id: "7", x: 2, y: 2, width: 2, height: 2 },
          { id: "8", x: 4, y: 2, width: 2, height: 2 },
          { id: "9", x: 6, y: 2, width: 2, height: 2 }
        ]
      },
      {
        breakpoint: "md",
        breakpointWidth: 996,
        numberOfCols: 8,
        items: [
          { id: "1", x: 0, y: 0, width: 2, height: 2 },
          { id: "2", x: 2, y: 0, width: 2, height: 2 },
          { id: "3", x: 4, y: 0, width: 2, height: 2 },
          { id: "4", x: 6, y: 0, width: 2, height: 2 },
          { id: "5", x: 0, y: 2, width: 2, height: 2 },
          { id: "6", x: 2, y: 2, width: 2, height: 2 },
          { id: "7", x: 4, y: 2, width: 2, height: 2 },
          { id: "8", x: 6, y: 2, width: 2, height: 2 },
          { id: "9", x: 0, y: 4, width: 2, height: 2 }
        ]
      },
      {
        breakpoint: "sm",
        breakpointWidth: 768,
        numberOfCols: 4,
        items: [
          { id: "1", x: 0, y: 0, width: 2, height: 2 },
          { id: "2", x: 2, y: 0, width: 2, height: 2 },
          { id: "3", x: 0, y: 2, width: 2, height: 2 },
          { id: "4", x: 2, y: 2, width: 2, height: 2 },
          { id: "5", x: 2, y: 4, width: 2, height: 2 }
        ]
      },
      {
        breakpoint: "xs",
        breakpointWidth: 480,
        numberOfCols: 2,
        items: [
          { id: "1", x: 0, y: 0, width: 1, height: 1 },
          { id: "2", x: 1, y: 0, width: 1, height: 1 },
          { id: "3", x: 0, y: 1, width: 2, height: 1 }
        ]
      },
      {
        breakpoint: "xxs",
        breakpointWidth: 0,
        numberOfCols: 1,
        items: [
          { id: "1", x: 0, y: 0, width: 1, height: 1 },
          { id: "2", x: 0, y: 1, width: 1, height: 1 }
        ]
      }
    ]
  },
  getters: {
    getLayouts(state) {
      return state.layouts;
    }
  },
  mutations: {},
  actions: {}
};
