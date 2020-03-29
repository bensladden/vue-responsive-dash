export default {
  namespaced: true,
  state: {
    items: [
      { template: "HollowDotsSpinner" },
      { template: "PixelSpinner" },
      { template: "FlowerSpinner" },
      { template: "IntersectingCirclesSpinner" },
      { template: "OrbitSpinner" },
      { template: "FingerprintSpinner" },
      { template: "TrinityRingsSpinner" },
      { template: "FulfillingSquareSpinner" },
      { template: "CirclesToRhombusesSpinner" },
      { template: "SemipolarSpinner" },
      { template: "BreedingRhombusSpinner" },
      { template: "SwappingSquaresSpinner" },
      { template: "ScalingSquaresSpinner" },
      { template: "FulfillingBouncingCircleSpinner" },
      { template: "RadarSpinner" },
      { template: "SelfBuildingSquareSpinner" },
      { template: "SpringSpinner" },
      { template: "LoopingRhombusesSpinner" },
      { template: "HalfCircleSpinner" },
      { template: "AtomSpinner" }
    ]
  },
  getters: {
    getItems(store) {
      return store.items;
    }
  },
  mutations: {},
  actions: {}
};
