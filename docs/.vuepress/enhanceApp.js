import resize from "vue-element-resize-detector";
export default ({ Vue }) => {
	Vue.prototype.$__VERSION__ = process.env.VERSION

	Vue.use(resize)
}
