import Vue from "vue";

const VueResponsiveDash = {};

Object.keys(VueResponsiveDash).forEach(name => {
	Vue.component(name, VueResponsiveDash[name]);
});

export default VueResponsiveDash;
export { };
