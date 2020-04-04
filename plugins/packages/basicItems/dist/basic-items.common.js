module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "1c25");
/******/ })
/************************************************************************/
/******/ ({

/***/ "1c25":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "itemMixin", function() { return /* reexport */ itemMixin; });
__webpack_require__.d(__webpack_exports__, "layouts", function() { return /* reexport */ layouts; });
__webpack_require__.d(__webpack_exports__, "largeLayouts", function() { return /* reexport */ largeLayouts; });
__webpack_require__.d(__webpack_exports__, "TextMiddleCenter", function() { return /* reexport */ TextMiddleCenter; });

// CONCATENATED MODULE: C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  if (true) {
    __webpack_require__("4141")
  }

  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");
var external_commonjs_vue_commonjs2_vue_root_Vue_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_vue_commonjs2_vue_root_Vue_);

// CONCATENATED MODULE: ./src/components/itemMixin.js
/* harmony default export */ var itemMixin = ({
  inject: ["$item"],
  computed: {
    item() {
      return this.$item();
    },
    width() {
      if (this.item) {
        return this.item.widthPx;
      }
      return 0;
    },
    height() {
      if (this.item) {
        return this.item.heightPx;
      }
      return 0;
    },
  },
});

// CONCATENATED MODULE: ./src/components/layoutExamples.js
let layouts = [
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
      }
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
      }
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
      }
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
      }
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
      }
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
      }
    ]
  }
];
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


// CONCATENATED MODULE: C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"b3ebfbf2-vue-loader-template"}!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/vue-loader/lib??vue-loader-options!./src/components/TextMiddleCenter.vue?vue&type=template&id=a41e1eee&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{style:({
    height: _vm.size + 'px',
    width: _vm.size + 'px',
    position: 'absolute',
    left: (_vm.width - _vm.size) / 2 + 'px',
    top: (_vm.height - _vm.size) / 2 + 'px',
  })},[_c('div',{staticClass:"itemtext"},[_vm._t("default")],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/TextMiddleCenter.vue?vue&type=template&id=a41e1eee&

// CONCATENATED MODULE: C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/vue-loader/lib??vue-loader-options!./src/components/TextMiddleCenter.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var TextMiddleCentervue_type_script_lang_js_ = ({
  mixins: [itemMixin],
  computed: {
    size() {
      return this.height > this.width ? this.width : this.height;
    },
  },
});

// CONCATENATED MODULE: ./src/components/TextMiddleCenter.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_TextMiddleCentervue_type_script_lang_js_ = (TextMiddleCentervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/TextMiddleCenter.vue?vue&type=style&index=0&lang=css&
var TextMiddleCentervue_type_style_index_0_lang_css_ = __webpack_require__("5694");

// CONCATENATED MODULE: C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/components/TextMiddleCenter.vue






/* normalize component */

var component = normalizeComponent(
  components_TextMiddleCentervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var TextMiddleCenter = (component.exports);
// CONCATENATED MODULE: ./src/components/index.js






const VueResponsiveDashBasicItems = {
  TextMiddleCenter: TextMiddleCenter,
};

Object.keys(VueResponsiveDashBasicItems).forEach((name) => {
  external_commonjs_vue_commonjs2_vue_root_Vue_default.a.component(name, VueResponsiveDashBasicItems[name]);
});

/* harmony default export */ var components = (VueResponsiveDashBasicItems);



// CONCATENATED MODULE: C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (components);



/***/ }),

/***/ "4141":
/***/ (function(module, exports) {

// document.currentScript polyfill by Adam Miller

// MIT license

(function(document){
  var currentScript = "currentScript",
      scripts = document.getElementsByTagName('script'); // Live NodeList collection

  // If browser needs currentScript polyfill, add get currentScript() to the document object
  if (!(currentScript in document)) {
    Object.defineProperty(document, currentScript, {
      get: function(){

        // IE 6-10 supports script readyState
        // IE 10+ support stack trace
        try { throw new Error(); }
        catch (err) {

          // Find the second match for the "at" string to get file src url from stack.
          // Specifically works with the format of stack traces in IE.
          var i, res = ((/.*at [^\(]*\((.*):.+:.+\)$/ig).exec(err.stack) || [false])[1];

          // For all scripts on the page, if src matches or if ready state is interactive, return the script tag
          for(i in scripts){
            if(scripts[i].src == res || scripts[i].readyState == "interactive"){
              return scripts[i];
            }
          }

          // If no match, return null
          return null;
        }
      }
    });
  }
})(document);


/***/ }),

/***/ "5694":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TextMiddleCenter_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ccee");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TextMiddleCenter_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TextMiddleCenter_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TextMiddleCenter_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),

/***/ "ccee":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=basic-items.common.js.map