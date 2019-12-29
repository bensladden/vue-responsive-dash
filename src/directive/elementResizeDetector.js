var elementResizeDetectorMaker = require("element-resize-detector");
var erd = elementResizeDetectorMaker({
	strategy: "scroll" //<- For ultra performance.
});

// this occurs once when the directive is attached to the element.
function bind(el, binding, vnode) {
	let options = {}
	if (binding.value) {
		options = binding.value
	}
	erd.listenTo(options, el, element => {
		let width = element.offsetWidth;
		let height = element.offsetHeight;
		if (vnode.componentInstance) {
			vnode.componentInstance.$emit("resize", { detail: { width, height } });
		} else {
			vnode.elm.dispatchEvent(
				new CustomEvent("resize", { detail: { width, height } })
			);
		}
	});
}
function unbind(el, binding, vnode) {
	erd.uninstall(el);
}

export default {
	bind,
	unbind
};
