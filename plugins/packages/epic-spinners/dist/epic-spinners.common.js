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

/***/ "012d":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _vue_style_loader_index_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_postcss_loader_src_index_js_ref_6_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_SpringSpinner_vue_vue_type_style_index_0_id_1ae1dc20_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("be7d");
/* harmony import */ var _vue_style_loader_index_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_postcss_loader_src_index_js_ref_6_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_SpringSpinner_vue_vue_type_style_index_0_id_1ae1dc20_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_style_loader_index_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_postcss_loader_src_index_js_ref_6_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_SpringSpinner_vue_vue_type_style_index_0_id_1ae1dc20_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_vue_style_loader_index_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_postcss_loader_src_index_js_ref_6_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_SpringSpinner_vue_vue_type_style_index_0_id_1ae1dc20_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "02a2":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("3c10");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".spring-spinner[data-v-1ae1dc20],.spring-spinner *[data-v-1ae1dc20]{-webkit-box-sizing:border-box;box-sizing:border-box}.spring-spinner[data-v-1ae1dc20]{height:60px;width:60px}.spring-spinner .spring-spinner-part[data-v-1ae1dc20]{overflow:hidden;height:30px;width:60px}.spring-spinner .spring-spinner-part.bottom[data-v-1ae1dc20]{-webkit-transform:rotate(180deg) scaleX(-1);transform:rotate(180deg) scaleX(-1)}.spring-spinner .spring-spinner-rotator[data-v-1ae1dc20]{width:60px;height:60px;border:8.57143px solid transparent;border-right-color:#ff1d5e;border-top-color:#ff1d5e;border-radius:50%;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-animation:spring-spinner-animation-data-v-1ae1dc20 3s ease-in-out infinite;animation:spring-spinner-animation-data-v-1ae1dc20 3s ease-in-out infinite;-webkit-transform:rotate(-200deg);transform:rotate(-200deg)}@-webkit-keyframes spring-spinner-animation-data-v-1ae1dc20{0%{border-width:8.57143px}25%{border-width:2.5718px}50%{-webkit-transform:rotate(115deg);transform:rotate(115deg);border-width:8.57143px}75%{border-width:2.5718px}to{border-width:8.57143px}}@keyframes spring-spinner-animation-data-v-1ae1dc20{0%{border-width:8.57143px}25%{border-width:2.5718px}50%{-webkit-transform:rotate(115deg);transform:rotate(115deg);border-width:8.57143px}75%{border-width:2.5718px}to{border-width:8.57143px}}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "060d":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("3c10");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".breeding-rhombus-spinner[data-v-8fa7a3fc]{height:65px;width:65px;position:relative;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.breeding-rhombus-spinner[data-v-8fa7a3fc],.breeding-rhombus-spinner *[data-v-8fa7a3fc]{-webkit-box-sizing:border-box;box-sizing:border-box}.breeding-rhombus-spinner .rhombus[data-v-8fa7a3fc]{height:8.66667px;width:8.66667px;-webkit-animation-duration:2s;animation-duration:2s;top:28.16657px;left:28.16657px;background-color:#ff1d5e;position:absolute;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.breeding-rhombus-spinner .rhombus[data-v-8fa7a3fc]:nth-child(2n+0){margin-right:0}.breeding-rhombus-spinner .rhombus.child-1[data-v-8fa7a3fc]{-webkit-animation-name:breeding-rhombus-spinner-animation-child-1-data-v-8fa7a3fc;animation-name:breeding-rhombus-spinner-animation-child-1-data-v-8fa7a3fc;-webkit-animation-delay:.1s;animation-delay:.1s}.breeding-rhombus-spinner .rhombus.child-2[data-v-8fa7a3fc]{-webkit-animation-name:breeding-rhombus-spinner-animation-child-2-data-v-8fa7a3fc;animation-name:breeding-rhombus-spinner-animation-child-2-data-v-8fa7a3fc;-webkit-animation-delay:.2s;animation-delay:.2s}.breeding-rhombus-spinner .rhombus.child-3[data-v-8fa7a3fc]{-webkit-animation-name:breeding-rhombus-spinner-animation-child-3-data-v-8fa7a3fc;animation-name:breeding-rhombus-spinner-animation-child-3-data-v-8fa7a3fc;-webkit-animation-delay:.3s;animation-delay:.3s}.breeding-rhombus-spinner .rhombus.child-4[data-v-8fa7a3fc]{-webkit-animation-name:breeding-rhombus-spinner-animation-child-4-data-v-8fa7a3fc;animation-name:breeding-rhombus-spinner-animation-child-4-data-v-8fa7a3fc;-webkit-animation-delay:.4s;animation-delay:.4s}.breeding-rhombus-spinner .rhombus.child-5[data-v-8fa7a3fc]{-webkit-animation-name:breeding-rhombus-spinner-animation-child-5-data-v-8fa7a3fc;animation-name:breeding-rhombus-spinner-animation-child-5-data-v-8fa7a3fc;-webkit-animation-delay:.5s;animation-delay:.5s}.breeding-rhombus-spinner .rhombus.child-6[data-v-8fa7a3fc]{-webkit-animation-name:breeding-rhombus-spinner-animation-child-6-data-v-8fa7a3fc;animation-name:breeding-rhombus-spinner-animation-child-6-data-v-8fa7a3fc;-webkit-animation-delay:.6s;animation-delay:.6s}.breeding-rhombus-spinner .rhombus.child-7[data-v-8fa7a3fc]{-webkit-animation-name:breeding-rhombus-spinner-animation-child-7-data-v-8fa7a3fc;animation-name:breeding-rhombus-spinner-animation-child-7-data-v-8fa7a3fc;-webkit-animation-delay:.7s;animation-delay:.7s}.breeding-rhombus-spinner .rhombus.child-8[data-v-8fa7a3fc]{-webkit-animation-name:breeding-rhombus-spinner-animation-child-8-data-v-8fa7a3fc;animation-name:breeding-rhombus-spinner-animation-child-8-data-v-8fa7a3fc;-webkit-animation-delay:.8s;animation-delay:.8s}.breeding-rhombus-spinner .rhombus.big[data-v-8fa7a3fc]{height:21.66667px;width:21.66667px;-webkit-animation-duration:2s;animation-duration:2s;top:21.66667px;left:21.66667px;background-color:#ff1d5e;-webkit-animation:breeding-rhombus-spinner-animation-child-big-data-v-8fa7a3fc 2s infinite;animation:breeding-rhombus-spinner-animation-child-big-data-v-8fa7a3fc 2s infinite;-webkit-animation-delay:.5s;animation-delay:.5s}@-webkit-keyframes breeding-rhombus-spinner-animation-child-1-data-v-8fa7a3fc{50%{-webkit-transform:translate(-325%,-325%);transform:translate(-325%,-325%)}}@keyframes breeding-rhombus-spinner-animation-child-1-data-v-8fa7a3fc{50%{-webkit-transform:translate(-325%,-325%);transform:translate(-325%,-325%)}}@-webkit-keyframes breeding-rhombus-spinner-animation-child-2-data-v-8fa7a3fc{50%{-webkit-transform:translateY(-325%);transform:translateY(-325%)}}@keyframes breeding-rhombus-spinner-animation-child-2-data-v-8fa7a3fc{50%{-webkit-transform:translateY(-325%);transform:translateY(-325%)}}@-webkit-keyframes breeding-rhombus-spinner-animation-child-3-data-v-8fa7a3fc{50%{-webkit-transform:translate(325%,-325%);transform:translate(325%,-325%)}}@keyframes breeding-rhombus-spinner-animation-child-3-data-v-8fa7a3fc{50%{-webkit-transform:translate(325%,-325%);transform:translate(325%,-325%)}}@-webkit-keyframes breeding-rhombus-spinner-animation-child-4-data-v-8fa7a3fc{50%{-webkit-transform:translate(325%);transform:translate(325%)}}@keyframes breeding-rhombus-spinner-animation-child-4-data-v-8fa7a3fc{50%{-webkit-transform:translate(325%);transform:translate(325%)}}@-webkit-keyframes breeding-rhombus-spinner-animation-child-5-data-v-8fa7a3fc{50%{-webkit-transform:translate(325%,325%);transform:translate(325%,325%)}}@keyframes breeding-rhombus-spinner-animation-child-5-data-v-8fa7a3fc{50%{-webkit-transform:translate(325%,325%);transform:translate(325%,325%)}}@-webkit-keyframes breeding-rhombus-spinner-animation-child-6-data-v-8fa7a3fc{50%{-webkit-transform:translateY(325%);transform:translateY(325%)}}@keyframes breeding-rhombus-spinner-animation-child-6-data-v-8fa7a3fc{50%{-webkit-transform:translateY(325%);transform:translateY(325%)}}@-webkit-keyframes breeding-rhombus-spinner-animation-child-7-data-v-8fa7a3fc{50%{-webkit-transform:translate(-325%,325%);transform:translate(-325%,325%)}}@keyframes breeding-rhombus-spinner-animation-child-7-data-v-8fa7a3fc{50%{-webkit-transform:translate(-325%,325%);transform:translate(-325%,325%)}}@-webkit-keyframes breeding-rhombus-spinner-animation-child-8-data-v-8fa7a3fc{50%{-webkit-transform:translate(-325%);transform:translate(-325%)}}@keyframes breeding-rhombus-spinner-animation-child-8-data-v-8fa7a3fc{50%{-webkit-transform:translate(-325%);transform:translate(-325%)}}@-webkit-keyframes breeding-rhombus-spinner-animation-child-big-data-v-8fa7a3fc{50%{-webkit-transform:scale(.5);transform:scale(.5)}}@keyframes breeding-rhombus-spinner-animation-child-big-data-v-8fa7a3fc{50%{-webkit-transform:scale(.5);transform:scale(.5)}}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "0d2c":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("3c10");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".hollow-dots-spinner[data-v-5a033c16],.hollow-dots-spinner *[data-v-5a033c16]{-webkit-box-sizing:border-box;box-sizing:border-box}.hollow-dots-spinner[data-v-5a033c16]{height:15px;width:90px}.hollow-dots-spinner .dot[data-v-5a033c16]{width:15px;height:15px;margin:0 7.5px;border:3px solid #ff1d5e;border-radius:50%;float:left;-webkit-transform:scale(0);transform:scale(0);-webkit-animation:hollow-dots-spinner-animation-data-v-5a033c16 1s ease 0ms infinite;animation:hollow-dots-spinner-animation-data-v-5a033c16 1s ease 0ms infinite}.hollow-dots-spinner .dot[data-v-5a033c16]:first-child{-webkit-animation-delay:.3s;animation-delay:.3s}.hollow-dots-spinner .dot[data-v-5a033c16]:nth-child(2){-webkit-animation-delay:.6s;animation-delay:.6s}.hollow-dots-spinner .dot[data-v-5a033c16]:nth-child(3){-webkit-animation-delay:.9s;animation-delay:.9s}@-webkit-keyframes hollow-dots-spinner-animation-data-v-5a033c16{50%{-webkit-transform:scale(1);transform:scale(1);opacity:1}to{opacity:0}}@keyframes hollow-dots-spinner-animation-data-v-5a033c16{50%{-webkit-transform:scale(1);transform:scale(1);opacity:1}to{opacity:0}}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "0ed3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ addStylesClient; });

// CONCATENATED MODULE: C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

// CONCATENATED MODULE: C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/vue-style-loader/lib/addStylesClient.js
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/



var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ "185d":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("3c10");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".orbit-spinner[data-v-34a3fdef],.orbit-spinner *[data-v-34a3fdef]{-webkit-box-sizing:border-box;box-sizing:border-box}.orbit-spinner[data-v-34a3fdef]{height:55px;width:55px;border-radius:50%;-webkit-perspective:800px;perspective:800px}.orbit-spinner .orbit[data-v-34a3fdef]{position:absolute;-webkit-box-sizing:border-box;box-sizing:border-box;width:100%;height:100%;border-radius:50%}.orbit-spinner .orbit[data-v-34a3fdef]:first-child{left:0;top:0;-webkit-animation:orbit-spinner-orbit-one-animation-data-v-34a3fdef 1.2s linear infinite;animation:orbit-spinner-orbit-one-animation-data-v-34a3fdef 1.2s linear infinite;border-bottom:3px solid #ff1d5e}.orbit-spinner .orbit[data-v-34a3fdef]:nth-child(2){right:0;top:0;-webkit-animation:orbit-spinner-orbit-two-animation-data-v-34a3fdef 1.2s linear infinite;animation:orbit-spinner-orbit-two-animation-data-v-34a3fdef 1.2s linear infinite;border-right:3px solid #ff1d5e}.orbit-spinner .orbit[data-v-34a3fdef]:nth-child(3){right:0;bottom:0;-webkit-animation:orbit-spinner-orbit-three-animation-data-v-34a3fdef 1.2s linear infinite;animation:orbit-spinner-orbit-three-animation-data-v-34a3fdef 1.2s linear infinite;border-top:3px solid #ff1d5e}@-webkit-keyframes orbit-spinner-orbit-one-animation-data-v-34a3fdef{0%{-webkit-transform:rotateX(35deg) rotateY(-45deg) rotate(0deg);transform:rotateX(35deg) rotateY(-45deg) rotate(0deg)}to{-webkit-transform:rotateX(35deg) rotateY(-45deg) rotate(1turn);transform:rotateX(35deg) rotateY(-45deg) rotate(1turn)}}@keyframes orbit-spinner-orbit-one-animation-data-v-34a3fdef{0%{-webkit-transform:rotateX(35deg) rotateY(-45deg) rotate(0deg);transform:rotateX(35deg) rotateY(-45deg) rotate(0deg)}to{-webkit-transform:rotateX(35deg) rotateY(-45deg) rotate(1turn);transform:rotateX(35deg) rotateY(-45deg) rotate(1turn)}}@-webkit-keyframes orbit-spinner-orbit-two-animation-data-v-34a3fdef{0%{-webkit-transform:rotateX(50deg) rotateY(10deg) rotate(0deg);transform:rotateX(50deg) rotateY(10deg) rotate(0deg)}to{-webkit-transform:rotateX(50deg) rotateY(10deg) rotate(1turn);transform:rotateX(50deg) rotateY(10deg) rotate(1turn)}}@keyframes orbit-spinner-orbit-two-animation-data-v-34a3fdef{0%{-webkit-transform:rotateX(50deg) rotateY(10deg) rotate(0deg);transform:rotateX(50deg) rotateY(10deg) rotate(0deg)}to{-webkit-transform:rotateX(50deg) rotateY(10deg) rotate(1turn);transform:rotateX(50deg) rotateY(10deg) rotate(1turn)}}@-webkit-keyframes orbit-spinner-orbit-three-animation-data-v-34a3fdef{0%{-webkit-transform:rotateX(35deg) rotateY(55deg) rotate(0deg);transform:rotateX(35deg) rotateY(55deg) rotate(0deg)}to{-webkit-transform:rotateX(35deg) rotateY(55deg) rotate(1turn);transform:rotateX(35deg) rotateY(55deg) rotate(1turn)}}@keyframes orbit-spinner-orbit-three-animation-data-v-34a3fdef{0%{-webkit-transform:rotateX(35deg) rotateY(55deg) rotate(0deg);transform:rotateX(35deg) rotateY(55deg) rotate(0deg)}to{-webkit-transform:rotateX(35deg) rotateY(55deg) rotate(1turn);transform:rotateX(35deg) rotateY(55deg) rotate(1turn)}}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "1c25":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "install", function() { return /* reexport */ components["w" /* install */]; });
__webpack_require__.d(__webpack_exports__, "HollowDotsSpinner", function() { return /* reexport */ components["i" /* HollowDotsSpinner */]; });
__webpack_require__.d(__webpack_exports__, "PixelSpinner", function() { return /* reexport */ components["m" /* PixelSpinner */]; });
__webpack_require__.d(__webpack_exports__, "FlowerSpinner", function() { return /* reexport */ components["e" /* FlowerSpinner */]; });
__webpack_require__.d(__webpack_exports__, "IntersectingCirclesSpinner", function() { return /* reexport */ components["j" /* IntersectingCirclesSpinner */]; });
__webpack_require__.d(__webpack_exports__, "OrbitSpinner", function() { return /* reexport */ components["l" /* OrbitSpinner */]; });
__webpack_require__.d(__webpack_exports__, "FingerprintSpinner", function() { return /* reexport */ components["d" /* FingerprintSpinner */]; });
__webpack_require__.d(__webpack_exports__, "TrinityRingsSpinner", function() { return /* reexport */ components["u" /* TrinityRingsSpinner */]; });
__webpack_require__.d(__webpack_exports__, "FulfillingSquareSpinner", function() { return /* reexport */ components["g" /* FulfillingSquareSpinner */]; });
__webpack_require__.d(__webpack_exports__, "CirclesToRhombusesSpinner", function() { return /* reexport */ components["c" /* CirclesToRhombusesSpinner */]; });
__webpack_require__.d(__webpack_exports__, "SemipolarSpinner", function() { return /* reexport */ components["r" /* SemipolarSpinner */]; });
__webpack_require__.d(__webpack_exports__, "BreedingRhombusSpinner", function() { return /* reexport */ components["b" /* BreedingRhombusSpinner */]; });
__webpack_require__.d(__webpack_exports__, "SwappingSquaresSpinner", function() { return /* reexport */ components["t" /* SwappingSquaresSpinner */]; });
__webpack_require__.d(__webpack_exports__, "ScalingSquaresSpinner", function() { return /* reexport */ components["p" /* ScalingSquaresSpinner */]; });
__webpack_require__.d(__webpack_exports__, "FulfillingBouncingCircleSpinner", function() { return /* reexport */ components["f" /* FulfillingBouncingCircleSpinner */]; });
__webpack_require__.d(__webpack_exports__, "RadarSpinner", function() { return /* reexport */ components["n" /* RadarSpinner */]; });
__webpack_require__.d(__webpack_exports__, "SelfBuildingSquareSpinner", function() { return /* reexport */ components["q" /* SelfBuildingSquareSpinner */]; });
__webpack_require__.d(__webpack_exports__, "SpringSpinner", function() { return /* reexport */ components["s" /* SpringSpinner */]; });
__webpack_require__.d(__webpack_exports__, "LoopingRhombusesSpinner", function() { return /* reexport */ components["k" /* LoopingRhombusesSpinner */]; });
__webpack_require__.d(__webpack_exports__, "HalfCircleSpinner", function() { return /* reexport */ components["h" /* HalfCircleSpinner */]; });
__webpack_require__.d(__webpack_exports__, "AtomSpinner", function() { return /* reexport */ components["a" /* AtomSpinner */]; });
__webpack_require__.d(__webpack_exports__, "RandomSpinner", function() { return /* reexport */ components["o" /* RandomSpinner */]; });

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

// EXTERNAL MODULE: ./src/components/index.js
var components = __webpack_require__("2af9");

// CONCATENATED MODULE: C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (components["v" /* default */]);



/***/ }),

/***/ "1cd7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  /**
   * Add reyframes to body as style block
   * @param name string
   * @param frames string
   */
  appendKeyframes: function (name, frames) {
    const sheet = document.createElement('style')
    if (!sheet) {
      return
    }
    sheet.setAttribute('id', name)
    sheet.innerHTML = `@keyframes ${name} {${frames}}`
    document.body.appendChild(sheet)
  },
  /**
   * Remove reyframes from body
   * @param name string
   */
  removeKeyframes: function (name) {
    const sheet = document.getElementById(name)
    if (!sheet) {
      return
    }
    const sheetParent = sheet.parentNode
    sheetParent.removeChild(sheet)
  }
});


/***/ }),

/***/ "1d1a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _vue_style_loader_index_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_postcss_loader_src_index_js_ref_6_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_SelfBuildingSquareSpinner_vue_vue_type_style_index_0_id_eb840b8e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("c49d");
/* harmony import */ var _vue_style_loader_index_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_postcss_loader_src_index_js_ref_6_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_SelfBuildingSquareSpinner_vue_vue_type_style_index_0_id_eb840b8e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_style_loader_index_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_postcss_loader_src_index_js_ref_6_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_SelfBuildingSquareSpinner_vue_vue_type_style_index_0_id_eb840b8e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_vue_style_loader_index_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_postcss_loader_src_index_js_ref_6_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_SelfBuildingSquareSpinner_vue_vue_type_style_index_0_id_eb840b8e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "242f":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("3c10");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".fulfilling-square-spinner[data-v-3f451d6f],.fulfilling-square-spinner *[data-v-3f451d6f]{-webkit-box-sizing:border-box;box-sizing:border-box}.fulfilling-square-spinner[data-v-3f451d6f]{height:50px;width:50px;position:relative;border:4px solid #ff1d5e;-webkit-animation:fulfilling-square-spinner-animation-data-v-3f451d6f 4s ease infinite;animation:fulfilling-square-spinner-animation-data-v-3f451d6f 4s ease infinite}.fulfilling-square-spinner .spinner-inner[data-v-3f451d6f]{vertical-align:top;display:inline-block;background-color:#ff1d5e;width:100%;opacity:1;-webkit-animation:fulfilling-square-spinner-inner-animation-data-v-3f451d6f 4s ease-in infinite;animation:fulfilling-square-spinner-inner-animation-data-v-3f451d6f 4s ease-in infinite}@-webkit-keyframes fulfilling-square-spinner-animation-data-v-3f451d6f{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}25%{-webkit-transform:rotate(180deg);transform:rotate(180deg)}50%{-webkit-transform:rotate(180deg);transform:rotate(180deg)}75%{-webkit-transform:rotate(1turn);transform:rotate(1turn)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes fulfilling-square-spinner-animation-data-v-3f451d6f{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}25%{-webkit-transform:rotate(180deg);transform:rotate(180deg)}50%{-webkit-transform:rotate(180deg);transform:rotate(180deg)}75%{-webkit-transform:rotate(1turn);transform:rotate(1turn)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@-webkit-keyframes fulfilling-square-spinner-inner-animation-data-v-3f451d6f{0%{height:0%}25%{height:0%}50%{height:100%}75%{height:100%}to{height:0%}}@keyframes fulfilling-square-spinner-inner-animation-data-v-3f451d6f{0%{height:0%}25%{height:0%}50%{height:100%}75%{height:100%}to{height:0%}}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "275f":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("3c10");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".half-circle-spinner[data-v-669f3b60],.half-circle-spinner *[data-v-669f3b60]{-webkit-box-sizing:border-box;box-sizing:border-box}.half-circle-spinner[data-v-669f3b60]{width:60px;height:60px;border-radius:100%;position:relative}.half-circle-spinner .circle[data-v-669f3b60]{content:\"\";position:absolute;width:100%;height:100%;border-radius:100%;border:6px solid transparent}.half-circle-spinner .circle.circle-1[data-v-669f3b60]{border-top-color:#ff1d5e;-webkit-animation:half-circle-spinner-animation-data-v-669f3b60 1s infinite;animation:half-circle-spinner-animation-data-v-669f3b60 1s infinite}.half-circle-spinner .circle.circle-2[data-v-669f3b60]{border-bottom-color:#ff1d5e;-webkit-animation:half-circle-spinner-animation-data-v-669f3b60 1s infinite alternate;animation:half-circle-spinner-animation-data-v-669f3b60 1s infinite alternate}@-webkit-keyframes half-circle-spinner-animation-data-v-669f3b60{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes half-circle-spinner-animation-data-v-669f3b60{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "2946":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"93ce6ae4-vue-loader-template"}!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/vue-loader/lib??vue-loader-options!./src/components/FulfillingSquareSpinner.vue?vue&type=template&id=79f28893&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('FulfillingSquareSpinner',{style:({
    position: 'absolute',
    left: (_vm.width - _vm.size) / 2 + 'px',
    top: (_vm.height - _vm.size) / 2 + 'px'
  }),attrs:{"animation-duration":_vm.animationDuration,"size":_vm.size,"color":_vm.color}})}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/FulfillingSquareSpinner.vue?vue&type=template&id=79f28893&

// EXTERNAL MODULE: ./src/components/MixinComponent.js
var MixinComponent = __webpack_require__("d7a5");

// CONCATENATED MODULE: C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"93ce6ae4-vue-loader-template"}!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/vue-loader/lib??vue-loader-options!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/epic-spinners/src/components/lib/FulfillingSquareSpinner.vue?vue&type=template&id=3f451d6f&scoped=true&
var FulfillingSquareSpinnervue_type_template_id_3f451d6f_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"fulfilling-square-spinner",style:(_vm.spinnerStyle)},[_c('div',{staticClass:"spinner-inner",style:(_vm.spinnerInnerStyle)})])}
var FulfillingSquareSpinnervue_type_template_id_3f451d6f_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/epic-spinners/src/components/lib/FulfillingSquareSpinner.vue?vue&type=template&id=3f451d6f&scoped=true&

// CONCATENATED MODULE: C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/vue-loader/lib??vue-loader-options!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/epic-spinners/src/components/lib/FulfillingSquareSpinner.vue?vue&type=script&lang=js&
//
//
//
//
//
//

/* harmony default export */ var FulfillingSquareSpinnervue_type_script_lang_js_ = ({
  name: 'FulfillingSquareSpinner',

  props: {
    animationDuration: {
      type: Number,
      default: 4000
    },
    size: {
      type: Number,
      default: 50
    },
    color: {
      type: String,
      default: '#fff'
    }
  },

  computed: {
    spinnerStyle () {
      return {
        height: `${this.size}px`,
        width: `${this.size}px`,
        borderColor: this.color
      }
    },

    spinnerInnerStyle () {
      return {
        backgroundColor: this.color
      }
    }
  }
});

// CONCATENATED MODULE: C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/epic-spinners/src/components/lib/FulfillingSquareSpinner.vue?vue&type=script&lang=js&
 /* harmony default export */ var lib_FulfillingSquareSpinnervue_type_script_lang_js_ = (FulfillingSquareSpinnervue_type_script_lang_js_); 
// EXTERNAL MODULE: C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/epic-spinners/src/components/lib/FulfillingSquareSpinner.vue?vue&type=style&index=0&id=3f451d6f&scoped=true&lang=css&
var FulfillingSquareSpinnervue_type_style_index_0_id_3f451d6f_scoped_true_lang_css_ = __webpack_require__("3e17");

// EXTERNAL MODULE: C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2be6");

// CONCATENATED MODULE: C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/epic-spinners/src/components/lib/FulfillingSquareSpinner.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  lib_FulfillingSquareSpinnervue_type_script_lang_js_,
  FulfillingSquareSpinnervue_type_template_id_3f451d6f_scoped_true_render,
  FulfillingSquareSpinnervue_type_template_id_3f451d6f_scoped_true_staticRenderFns,
  false,
  null,
  "3f451d6f",
  null
  
)

/* harmony default export */ var FulfillingSquareSpinner = (component.exports);
// CONCATENATED MODULE: C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/vue-loader/lib??vue-loader-options!./src/components/FulfillingSquareSpinner.vue?vue&type=script&lang=js&
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




/* harmony default export */ var components_FulfillingSquareSpinnervue_type_script_lang_js_ = ({
  name: "FulfillingSquareSpinnerWrapper",
  mixins: [MixinComponent["a" /* default */]],
  components: {
    FulfillingSquareSpinner: FulfillingSquareSpinner
  }
});

// CONCATENATED MODULE: ./src/components/FulfillingSquareSpinner.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_components_FulfillingSquareSpinnervue_type_script_lang_js_ = (components_FulfillingSquareSpinnervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/FulfillingSquareSpinner.vue





/* normalize component */

var FulfillingSquareSpinner_component = Object(componentNormalizer["a" /* default */])(
  src_components_FulfillingSquareSpinnervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var components_FulfillingSquareSpinner = __webpack_exports__["a"] = (FulfillingSquareSpinner_component.exports);

/***/ }),

/***/ "2a57":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("3c10");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".self-building-square-spinner[data-v-eb840b8e],.self-building-square-spinner *[data-v-eb840b8e]{-webkit-box-sizing:border-box;box-sizing:border-box}.self-building-square-spinner[data-v-eb840b8e]{height:40px;width:40px;top:-6.66667px}.self-building-square-spinner .square[data-v-eb840b8e]{height:10px;width:10px;top:-6.66667px;margin-right:3.33333px;margin-top:3.33333px;background:#ff1d5e;float:left;position:relative;opacity:0;-webkit-animation:self-building-square-spinner-data-v-eb840b8e 6s infinite;animation:self-building-square-spinner-data-v-eb840b8e 6s infinite}.self-building-square-spinner .square[data-v-eb840b8e]:first-child{-webkit-animation-delay:1.8s;animation-delay:1.8s}.self-building-square-spinner .square[data-v-eb840b8e]:nth-child(2){-webkit-animation-delay:2.1s;animation-delay:2.1s}.self-building-square-spinner .square[data-v-eb840b8e]:nth-child(3){-webkit-animation-delay:2.4s;animation-delay:2.4s}.self-building-square-spinner .square[data-v-eb840b8e]:nth-child(4){-webkit-animation-delay:.9s;animation-delay:.9s}.self-building-square-spinner .square[data-v-eb840b8e]:nth-child(5){-webkit-animation-delay:1.2s;animation-delay:1.2s}.self-building-square-spinner .square[data-v-eb840b8e]:nth-child(6){-webkit-animation-delay:1.5s;animation-delay:1.5s}.self-building-square-spinner .square[data-v-eb840b8e]:nth-child(7){-webkit-animation-delay:0ms;animation-delay:0ms}.self-building-square-spinner .square[data-v-eb840b8e]:nth-child(8){-webkit-animation-delay:.3s;animation-delay:.3s}.self-building-square-spinner .square[data-v-eb840b8e]:nth-child(9){-webkit-animation-delay:.6s;animation-delay:.6s}.self-building-square-spinner .clear[data-v-eb840b8e]{clear:both}@-webkit-keyframes self-building-square-spinner-data-v-eb840b8e{0%{opacity:0}5%{opacity:1;top:0}50.9%{opacity:1;top:0}55.9%{opacity:0;top:inherit}}@keyframes self-building-square-spinner-data-v-eb840b8e{0%{opacity:0}5%{opacity:1;top:0}50.9%{opacity:1;top:0}55.9%{opacity:0;top:inherit}}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "2af9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return install; });
/* harmony import */ var _HollowDotsSpinner_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("f30d");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "i", function() { return _HollowDotsSpinner_vue__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony import */ var _PixelSpinner_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("36f5");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "m", function() { return _PixelSpinner_vue__WEBPACK_IMPORTED_MODULE_1__["a"]; });

/* harmony import */ var _FlowerSpinner_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("a454");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "e", function() { return _FlowerSpinner_vue__WEBPACK_IMPORTED_MODULE_2__["a"]; });

/* harmony import */ var _IntersectingCirclesSpinner_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("b684");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "j", function() { return _IntersectingCirclesSpinner_vue__WEBPACK_IMPORTED_MODULE_3__["a"]; });

/* harmony import */ var _OrbitSpinner_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("f625");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "l", function() { return _OrbitSpinner_vue__WEBPACK_IMPORTED_MODULE_4__["a"]; });

/* harmony import */ var _FingerprintSpinner_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("fe18");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "d", function() { return _FingerprintSpinner_vue__WEBPACK_IMPORTED_MODULE_5__["a"]; });

/* harmony import */ var _TrinityRingsSpinner_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("8259");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "u", function() { return _TrinityRingsSpinner_vue__WEBPACK_IMPORTED_MODULE_6__["a"]; });

/* harmony import */ var _FulfillingSquareSpinner_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("2946");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "g", function() { return _FulfillingSquareSpinner_vue__WEBPACK_IMPORTED_MODULE_7__["a"]; });

/* harmony import */ var _CirclesToRhombusesSpinner_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("48dc");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "c", function() { return _CirclesToRhombusesSpinner_vue__WEBPACK_IMPORTED_MODULE_8__["a"]; });

/* harmony import */ var _SemipolarSpinner_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("4912");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "r", function() { return _SemipolarSpinner_vue__WEBPACK_IMPORTED_MODULE_9__["a"]; });

/* harmony import */ var _BreedingRhombusSpinner_vue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("47ed");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _BreedingRhombusSpinner_vue__WEBPACK_IMPORTED_MODULE_10__["a"]; });

/* harmony import */ var _SwappingSquaresSpinner_vue__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("a182");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "t", function() { return _SwappingSquaresSpinner_vue__WEBPACK_IMPORTED_MODULE_11__["a"]; });

/* harmony import */ var _ScalingSquaresSpinner_vue__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("ee95");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "p", function() { return _ScalingSquaresSpinner_vue__WEBPACK_IMPORTED_MODULE_12__["a"]; });

/* harmony import */ var _FulfillingBouncingCircleSpinner_vue__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("d6e1");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "f", function() { return _FulfillingBouncingCircleSpinner_vue__WEBPACK_IMPORTED_MODULE_13__["a"]; });

/* harmony import */ var _RadarSpinner_vue__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("c8ee");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "n", function() { return _RadarSpinner_vue__WEBPACK_IMPORTED_MODULE_14__["a"]; });

/* harmony import */ var _SelfBuildingSquareSpinner_vue__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("b567");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "q", function() { return _SelfBuildingSquareSpinner_vue__WEBPACK_IMPORTED_MODULE_15__["a"]; });

/* harmony import */ var _SpringSpinner_vue__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("5800");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "s", function() { return _SpringSpinner_vue__WEBPACK_IMPORTED_MODULE_16__["a"]; });

/* harmony import */ var _LoopingRhombusesSpinner_vue__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("ca9e");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "k", function() { return _LoopingRhombusesSpinner_vue__WEBPACK_IMPORTED_MODULE_17__["a"]; });

/* harmony import */ var _HalfCircleSpinner_vue__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("4c83");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "h", function() { return _HalfCircleSpinner_vue__WEBPACK_IMPORTED_MODULE_18__["a"]; });

/* harmony import */ var _AtomSpinner_vue__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("887f");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _AtomSpinner_vue__WEBPACK_IMPORTED_MODULE_19__["a"]; });

/* harmony import */ var _RandomSpinner__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("f277");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "o", function() { return _RandomSpinner__WEBPACK_IMPORTED_MODULE_20__["a"]; });
























const VueResponsiveDashEpicSpinners = {
  HollowDotsSpinner: _HollowDotsSpinner_vue__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"],
  PixelSpinner: _PixelSpinner_vue__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
  FlowerSpinner: _FlowerSpinner_vue__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"],
  IntersectingCirclesSpinner: _IntersectingCirclesSpinner_vue__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"],
  OrbitSpinner: _OrbitSpinner_vue__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"],
  FingerprintSpinner: _FingerprintSpinner_vue__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"],
  TrinityRingsSpinner: _TrinityRingsSpinner_vue__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"],
  FulfillingSquareSpinner: _FulfillingSquareSpinner_vue__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"],
  CirclesToRhombusesSpinner: _CirclesToRhombusesSpinner_vue__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"],
  SemipolarSpinner: _SemipolarSpinner_vue__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"],
  BreedingRhombusSpinner: _BreedingRhombusSpinner_vue__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"],
  SwappingSquaresSpinner: _SwappingSquaresSpinner_vue__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"],
  ScalingSquaresSpinner: _ScalingSquaresSpinner_vue__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"],
  FulfillingBouncingCircleSpinner: _FulfillingBouncingCircleSpinner_vue__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"],
  RadarSpinner: _RadarSpinner_vue__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"],
  SelfBuildingSquareSpinner: _SelfBuildingSquareSpinner_vue__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"],
  SpringSpinner: _SpringSpinner_vue__WEBPACK_IMPORTED_MODULE_16__[/* default */ "a"],
  LoopingRhombusesSpinner: _LoopingRhombusesSpinner_vue__WEBPACK_IMPORTED_MODULE_17__[/* default */ "a"],
  HalfCircleSpinner: _HalfCircleSpinner_vue__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"],
  AtomSpinner: _AtomSpinner_vue__WEBPACK_IMPORTED_MODULE_19__[/* default */ "a"],
  RandomSpinner: _RandomSpinner__WEBPACK_IMPORTED_MODULE_20__[/* default */ "a"],
};
// Declare install function executed by Vue.use()
function install(Vue) {
  if (install.installed) return;
  install.installed = true;
  Object.keys(VueResponsiveDashEpicSpinners).forEach((name) => {
    Vue.component(name, VueResponsiveDashEpicSpinners[name]);
  });
}

// Create module definition for Vue.use()
const plugin = {
  install,
};

// Auto-install when vue is found (eg. in browser via <script> tag)
let GlobalVue = null;
if (typeof window !== "undefined") {
  GlobalVue = window.Vue;
} else if (typeof global !== "undefined") {
  GlobalVue = global.Vue;
}
if (GlobalVue) {
  GlobalVue.use(plugin);
}
/* harmony default export */ __webpack_exports__["v"] = (VueResponsiveDashEpicSpinners);



/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("7d15")))

/***/ }),

/***/ "2be6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return normalizeComponent; });
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
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
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


/***/ }),

/***/ "2d69":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("3c10");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".semipolar-spinner[data-v-9544fc1a],.semipolar-spinner *[data-v-9544fc1a]{-webkit-box-sizing:border-box;box-sizing:border-box}.semipolar-spinner[data-v-9544fc1a]{height:65px;width:65px;position:relative}.semipolar-spinner .ring[data-v-9544fc1a]{border-radius:50%;position:absolute;border:3.25px solid transparent;border-top-color:#ff1d5e;border-left-color:#ff1d5e;-webkit-animation:semipolar-spinner-animation-data-v-9544fc1a 2s infinite;animation:semipolar-spinner-animation-data-v-9544fc1a 2s infinite}.semipolar-spinner .ring[data-v-9544fc1a]:first-child{height:65px;width:65px;top:0;left:0;-webkit-animation-delay:.8s;animation-delay:.8s;z-index:5}.semipolar-spinner .ring[data-v-9544fc1a]:nth-child(2){height:52px;width:52px;top:6.5px;left:6.5px;-webkit-animation-delay:.6s;animation-delay:.6s;z-index:4}.semipolar-spinner .ring[data-v-9544fc1a]:nth-child(3){height:39px;width:39px;top:13px;left:13px;-webkit-animation-delay:.4s;animation-delay:.4s;z-index:3}.semipolar-spinner .ring[data-v-9544fc1a]:nth-child(4){height:26px;width:26px;top:19.5px;left:19.5px;-webkit-animation-delay:.2s;animation-delay:.2s;z-index:2}.semipolar-spinner .ring[data-v-9544fc1a]:nth-child(5){height:13px;width:13px;top:26px;left:26px;-webkit-animation-delay:0ms;animation-delay:0ms;z-index:1}@-webkit-keyframes semipolar-spinner-animation-data-v-9544fc1a{50%{-webkit-transform:rotate(1turn) scale(.7);transform:rotate(1turn) scale(.7)}}@keyframes semipolar-spinner-animation-data-v-9544fc1a{50%{-webkit-transform:rotate(1turn) scale(.7);transform:rotate(1turn) scale(.7)}}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "3362":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("2d69");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("0ed3").default
var update = add("ded3c3bc", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "36f5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"93ce6ae4-vue-loader-template"}!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/vue-loader/lib??vue-loader-options!./src/components/PixelSpinner.vue?vue&type=template&id=78c9a309&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('PixelSpinner',{style:({
    position: 'absolute',
    left: (_vm.width - _vm.size) / 2 + 'px',
    top: (_vm.height - _vm.size) / 2 + 'px'
  }),attrs:{"animation-duration":_vm.animationDuration,"size":_vm.size,"color":_vm.color}})}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/PixelSpinner.vue?vue&type=template&id=78c9a309&

// EXTERNAL MODULE: ./src/components/MixinComponent.js
var MixinComponent = __webpack_require__("d7a5");

// CONCATENATED MODULE: C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"93ce6ae4-vue-loader-template"}!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/vue-loader/lib??vue-loader-options!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/epic-spinners/src/components/lib/PixelSpinner.vue?vue&type=template&id=c76fc818&scoped=true&
var PixelSpinnervue_type_template_id_c76fc818_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"pixel-spinner",style:(_vm.spinnerStyle)},[_c('div',{staticClass:"pixel-spinner-inner",style:(_vm.spinnerInnerStyle)})])}
var PixelSpinnervue_type_template_id_c76fc818_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/epic-spinners/src/components/lib/PixelSpinner.vue?vue&type=template&id=c76fc818&scoped=true&

// EXTERNAL MODULE: C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/epic-spinners/src/services/utils.js
var utils = __webpack_require__("1cd7");

// CONCATENATED MODULE: C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/vue-loader/lib??vue-loader-options!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/epic-spinners/src/components/lib/PixelSpinner.vue?vue&type=script&lang=js&
//
//
//
//
//
//



/* harmony default export */ var PixelSpinnervue_type_script_lang_js_ = ({
  name: 'PixelSpinner',

  props: {
    animationDuration: {
      type: Number,
      default: 1500
    },
    size: {
      type: Number,
      default: 70
    },
    color: {
      type: String,
      default: '#fff'
    }
  },

  data () {
    return {
      animationName: `pixel-spinner-animation-${Date.now()}`
    }
  },

  computed: {
    pixelSize () {
      return this.size / 7
    },

    spinnerStyle () {
      return {
        width: `${this.size}px`,
        height: `${this.size}px`
      }
    },

    spinnerInnerStyle () {
      return {
        animationDuration: `${this.animationDuration}ms`,
        animationName: this.animationName,
        width: `${this.pixelSize}px`,
        height: `${this.pixelSize}px`,
        backgroundColor: this.color,
        color: this.color,
        boxShadow: `
                      ${this.pixelSize * 1.5}px ${this.pixelSize * 1.5}px 0 0,
                      ${this.pixelSize * -1.5}px ${this.pixelSize * -1.5}px 0 0,
                      ${this.pixelSize * 1.5}px ${this.pixelSize * -1.5}px 0 0,
                      ${this.pixelSize * -1.5}px ${this.pixelSize * 1.5}px 0 0,
                      0 ${this.pixelSize * 1.5}px 0 0,
                      ${this.pixelSize * 1.5}px 0 0 0,
                      ${this.pixelSize * -1.5}px 0 0 0,
                      0 ${this.pixelSize * -1.5}px 0 0
                    `
      }
    }
  },

  watch: {
    size: {
      handler: 'updateAnimation',
      immediate: true
    }
  },

  mounted () {
    this.updateAnimation()
  },

  beforeDestroy () {
    utils["a" /* default */].removeKeyframes(this.animationName)
  },

  methods: {
    updateAnimation () {
      utils["a" /* default */].removeKeyframes(this.animationName)
      utils["a" /* default */].appendKeyframes(this.animationName, this.generateKeyframes())
    },

    generateKeyframes () {
      return `
      50% {
        box-shadow:  ${this.pixelSize * 2}px ${this.pixelSize * 2}px 0 0,
                     ${this.pixelSize * -2}px ${this.pixelSize * -2}px 0 0,
                     ${this.pixelSize * 2}px ${this.pixelSize * -2}px 0 0,
                     ${this.pixelSize * -2}px ${this.pixelSize * 2}px 0 0,
                     0 ${this.pixelSize}px 0 0,
                     ${this.pixelSize}px 0 0 0,
                     ${this.pixelSize * -1}px 0 0 0,
                     0 ${this.pixelSize * -1}px 0 0;
      }


      75% {
        box-shadow:  ${this.pixelSize * 2}px ${this.pixelSize * 2}px 0 0,
                     ${this.pixelSize * -2}px ${this.pixelSize * -2}px 0 0,
                     ${this.pixelSize * 2}px ${this.pixelSize * -2}px 0 0,
                     ${this.pixelSize * -2}px ${this.pixelSize * 2}px 0 0,
                     0 ${this.pixelSize}px 0 0,
                     ${this.pixelSize}px 0 0 0,
                     ${this.pixelSize * -1}px 0 0 0,
                     0 ${this.pixelSize * -1}px 0 0;
      }

      100% {
        transform: rotate(360deg);
      }`
    }
  }
});

// CONCATENATED MODULE: C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/epic-spinners/src/components/lib/PixelSpinner.vue?vue&type=script&lang=js&
 /* harmony default export */ var lib_PixelSpinnervue_type_script_lang_js_ = (PixelSpinnervue_type_script_lang_js_); 
// EXTERNAL MODULE: C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/epic-spinners/src/components/lib/PixelSpinner.vue?vue&type=style&index=0&id=c76fc818&scoped=true&lang=css&
var PixelSpinnervue_type_style_index_0_id_c76fc818_scoped_true_lang_css_ = __webpack_require__("81c2");

// EXTERNAL MODULE: C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2be6");

// CONCATENATED MODULE: C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/epic-spinners/src/components/lib/PixelSpinner.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  lib_PixelSpinnervue_type_script_lang_js_,
  PixelSpinnervue_type_template_id_c76fc818_scoped_true_render,
  PixelSpinnervue_type_template_id_c76fc818_scoped_true_staticRenderFns,
  false,
  null,
  "c76fc818",
  null
  
)

/* harmony default export */ var PixelSpinner = (component.exports);
// CONCATENATED MODULE: C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/vue-loader/lib??vue-loader-options!./src/components/PixelSpinner.vue?vue&type=script&lang=js&
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




/* harmony default export */ var components_PixelSpinnervue_type_script_lang_js_ = ({
  name: "PixelSpinnerWrapper",
  mixins: [MixinComponent["a" /* default */]],
  components: {
    PixelSpinner: PixelSpinner
  }
});

// CONCATENATED MODULE: ./src/components/PixelSpinner.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_components_PixelSpinnervue_type_script_lang_js_ = (components_PixelSpinnervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/PixelSpinner.vue





/* normalize component */

var PixelSpinner_component = Object(componentNormalizer["a" /* default */])(
  src_components_PixelSpinnervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var components_PixelSpinner = __webpack_exports__["a"] = (PixelSpinner_component.exports);

/***/ }),

/***/ "3c10":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "3c9e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _vue_style_loader_index_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_postcss_loader_src_index_js_ref_6_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_SwappingSquaresSpinner_vue_vue_type_style_index_0_id_8265a670_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4903");
/* harmony import */ var _vue_style_loader_index_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_postcss_loader_src_index_js_ref_6_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_SwappingSquaresSpinner_vue_vue_type_style_index_0_id_8265a670_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_style_loader_index_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_postcss_loader_src_index_js_ref_6_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_SwappingSquaresSpinner_vue_vue_type_style_index_0_id_8265a670_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_vue_style_loader_index_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_postcss_loader_src_index_js_ref_6_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_SwappingSquaresSpinner_vue_vue_type_style_index_0_id_8265a670_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "3cfd":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("242f");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("0ed3").default
var update = add("2a2fed94", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "3d7c":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("e534");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("0ed3").default
var update = add("fb54c4cc", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "3e17":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _vue_style_loader_index_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_postcss_loader_src_index_js_ref_6_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_FulfillingSquareSpinner_vue_vue_type_style_index_0_id_3f451d6f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("3cfd");
/* harmony import */ var _vue_style_loader_index_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_postcss_loader_src_index_js_ref_6_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_FulfillingSquareSpinner_vue_vue_type_style_index_0_id_3f451d6f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_style_loader_index_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_postcss_loader_src_index_js_ref_6_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_FulfillingSquareSpinner_vue_vue_type_style_index_0_id_3f451d6f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_vue_style_loader_index_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_postcss_loader_src_index_js_ref_6_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_FulfillingSquareSpinner_vue_vue_type_style_index_0_id_3f451d6f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "40bb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _vue_style_loader_index_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_postcss_loader_src_index_js_ref_6_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_CirclesToRhombusesSpinner_vue_vue_type_style_index_0_id_7a6e17e5_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("f583");
/* harmony import */ var _vue_style_loader_index_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_postcss_loader_src_index_js_ref_6_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_CirclesToRhombusesSpinner_vue_vue_type_style_index_0_id_7a6e17e5_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_style_loader_index_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_postcss_loader_src_index_js_ref_6_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_CirclesToRhombusesSpinner_vue_vue_type_style_index_0_id_7a6e17e5_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_vue_style_loader_index_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_postcss_loader_src_index_js_ref_6_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_CirclesToRhombusesSpinner_vue_vue_type_style_index_0_id_7a6e17e5_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

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

/***/ "4439":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("46eb");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("0ed3").default
var update = add("b1e67052", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "447c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _vue_style_loader_index_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_postcss_loader_src_index_js_ref_6_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_LoopingRhombusesSpinner_vue_vue_type_style_index_0_id_49d9ad28_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("65e8");
/* harmony import */ var _vue_style_loader_index_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_postcss_loader_src_index_js_ref_6_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_LoopingRhombusesSpinner_vue_vue_type_style_index_0_id_49d9ad28_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_style_loader_index_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_postcss_loader_src_index_js_ref_6_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_LoopingRhombusesSpinner_vue_vue_type_style_index_0_id_49d9ad28_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_vue_style_loader_index_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_postcss_loader_src_index_js_ref_6_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_LoopingRhombusesSpinner_vue_vue_type_style_index_0_id_49d9ad28_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "46bd":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _vue_style_loader_index_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_postcss_loader_src_index_js_ref_6_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_FingerprintSpinner_vue_vue_type_style_index_0_id_077ae5a6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("bb3d");
/* harmony import */ var _vue_style_loader_index_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_postcss_loader_src_index_js_ref_6_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_FingerprintSpinner_vue_vue_type_style_index_0_id_077ae5a6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_style_loader_index_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_postcss_loader_src_index_js_ref_6_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_FingerprintSpinner_vue_vue_type_style_index_0_id_077ae5a6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_vue_style_loader_index_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_postcss_loader_src_index_js_ref_6_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_FingerprintSpinner_vue_vue_type_style_index_0_id_077ae5a6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "46eb":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("3c10");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".scaling-squares-spinner[data-v-dbacb9de],.scaling-squares-spinner *[data-v-dbacb9de]{-webkit-box-sizing:border-box;box-sizing:border-box}.scaling-squares-spinner[data-v-dbacb9de]{height:65px;width:65px;position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-animation:scaling-squares-animation-data-v-dbacb9de 1.25s;animation:scaling-squares-animation-data-v-dbacb9de 1.25s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-transform:rotate(0deg);transform:rotate(0deg)}.scaling-squares-spinner .square[data-v-dbacb9de]{height:12.5px;width:12.5px;margin-right:auto;margin-left:auto;border:2px solid #ff1d5e;position:absolute;-webkit-animation-duration:1.25s;animation-duration:1.25s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.scaling-squares-spinner .square[data-v-dbacb9de]:first-child{-webkit-animation-name:scaling-squares-spinner-animation-child-1-data-v-dbacb9de;animation-name:scaling-squares-spinner-animation-child-1-data-v-dbacb9de}.scaling-squares-spinner .square[data-v-dbacb9de]:nth-child(2){-webkit-animation-name:scaling-squares-spinner-animation-child-2-data-v-dbacb9de;animation-name:scaling-squares-spinner-animation-child-2-data-v-dbacb9de}.scaling-squares-spinner .square[data-v-dbacb9de]:nth-child(3){-webkit-animation-name:scaling-squares-spinner-animation-child-3-data-v-dbacb9de;animation-name:scaling-squares-spinner-animation-child-3-data-v-dbacb9de}.scaling-squares-spinner .square[data-v-dbacb9de]:nth-child(4){-webkit-animation-name:scaling-squares-spinner-animation-child-4-data-v-dbacb9de;animation-name:scaling-squares-spinner-animation-child-4-data-v-dbacb9de}@-webkit-keyframes scaling-squares-animation-data-v-dbacb9de{50%{-webkit-transform:rotate(90deg);transform:rotate(90deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}@keyframes scaling-squares-animation-data-v-dbacb9de{50%{-webkit-transform:rotate(90deg);transform:rotate(90deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}@-webkit-keyframes scaling-squares-spinner-animation-child-1-data-v-dbacb9de{50%{-webkit-transform:translate(150%,150%) scale(2);transform:translate(150%,150%) scale(2)}}@keyframes scaling-squares-spinner-animation-child-1-data-v-dbacb9de{50%{-webkit-transform:translate(150%,150%) scale(2);transform:translate(150%,150%) scale(2)}}@-webkit-keyframes scaling-squares-spinner-animation-child-2-data-v-dbacb9de{50%{-webkit-transform:translate(-150%,150%) scale(2);transform:translate(-150%,150%) scale(2)}}@keyframes scaling-squares-spinner-animation-child-2-data-v-dbacb9de{50%{-webkit-transform:translate(-150%,150%) scale(2);transform:translate(-150%,150%) scale(2)}}@-webkit-keyframes scaling-squares-spinner-animation-child-3-data-v-dbacb9de{50%{-webkit-transform:translate(-150%,-150%) scale(2);transform:translate(-150%,-150%) scale(2)}}@keyframes scaling-squares-spinner-animation-child-3-data-v-dbacb9de{50%{-webkit-transform:translate(-150%,-150%) scale(2);transform:translate(-150%,-150%) scale(2)}}@-webkit-keyframes scaling-squares-spinner-animation-child-4-data-v-dbacb9de{50%{-webkit-transform:translate(150%,-150%) scale(2);transform:translate(150%,-150%) scale(2)}}@keyframes scaling-squares-spinner-animation-child-4-data-v-dbacb9de{50%{-webkit-transform:translate(150%,-150%) scale(2);transform:translate(150%,-150%) scale(2)}}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "47ed":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"93ce6ae4-vue-loader-template"}!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/vue-loader/lib??vue-loader-options!./src/components/BreedingRhombusSpinner.vue?vue&type=template&id=2181d7ae&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('BreedingRhombusSpinner',{style:({
    position: 'absolute',
    left: (_vm.width - _vm.size) / 2 + 'px',
    top: (_vm.height - _vm.size) / 2 + 'px'
  }),attrs:{"animation-duration":_vm.animationDuration,"size":_vm.size,"color":_vm.color}})}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/BreedingRhombusSpinner.vue?vue&type=template&id=2181d7ae&

// EXTERNAL MODULE: ./src/components/MixinComponent.js
var MixinComponent = __webpack_require__("d7a5");

// CONCATENATED MODULE: C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"93ce6ae4-vue-loader-template"}!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/vue-loader/lib??vue-loader-options!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/epic-spinners/src/components/lib/BreedingRhombusSpinner.vue?vue&type=template&id=8fa7a3fc&scoped=true&
var BreedingRhombusSpinnervue_type_template_id_8fa7a3fc_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"breeding-rhombus-spinner",style:(_vm.spinnerStyle)},[_vm._l((_vm.rhombusesStyles),function(rs,index){return _c('div',{key:index,staticClass:"rhombus",class:("child-" + (index + 1)),style:(rs)})}),_c('div',{staticClass:"rhombus big",style:(_vm.bigRhombusStyle)})],2)}
var BreedingRhombusSpinnervue_type_template_id_8fa7a3fc_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/epic-spinners/src/components/lib/BreedingRhombusSpinner.vue?vue&type=template&id=8fa7a3fc&scoped=true&

// CONCATENATED MODULE: C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/vue-loader/lib??vue-loader-options!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/epic-spinners/src/components/lib/BreedingRhombusSpinner.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//

/* harmony default export */ var BreedingRhombusSpinnervue_type_script_lang_js_ = ({
  name: 'BreedingRhombusSpinner',

  props: {
    animationDuration: {
      type: Number,
      default: 2000
    },
    size: {
      type: Number,
      default: 150
    },
    color: {
      type: String,
      default: '#fff'
    }
  },

  data () {
    return {
      animationBaseName: 'breeding-rhombus-spinner-animation-child',
      rhombusesNum: 8
    }
  },

  computed: {
    spinnerStyle () {
      return {
        height: `${this.size}px`,
        width: `${this.size}px`
      }
    },

    rhombusStyle () {
      return {
        height: `${this.size / 7.5}px`,
        width: `${this.size / 7.5}px`,
        animationDuration: `${this.animationDuration}ms`,
        top: `${this.size / 2.3077}px`,
        left: `${this.size / 2.3077}px`,
        backgroundColor: this.color
      }
    },

    rhombusesStyles () {
      const rhombusesStyles = []
      const delayModifier = this.animationDuration * 0.05

      for (let i = 1; i <= this.rhombusesNum; i++) {
        rhombusesStyles.push(Object.assign({
          animationDelay: `${delayModifier * (i + 1)}ms`
        }, this.rhombusStyle))
      }

      return rhombusesStyles
    },

    bigRhombusStyle () {
      return {
        height: `${this.size / 3}px`,
        width: `${this.size / 3}px`,
        animationDuration: `${this.animationDuration}`,
        top: `${this.size / 3}px`,
        left: `${this.size / 3}px`,
        backgroundColor: this.color
      }
    }
  }

});

// CONCATENATED MODULE: C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/epic-spinners/src/components/lib/BreedingRhombusSpinner.vue?vue&type=script&lang=js&
 /* harmony default export */ var lib_BreedingRhombusSpinnervue_type_script_lang_js_ = (BreedingRhombusSpinnervue_type_script_lang_js_); 
// EXTERNAL MODULE: C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/epic-spinners/src/components/lib/BreedingRhombusSpinner.vue?vue&type=style&index=0&id=8fa7a3fc&scoped=true&lang=css&
var BreedingRhombusSpinnervue_type_style_index_0_id_8fa7a3fc_scoped_true_lang_css_ = __webpack_require__("df49");

// EXTERNAL MODULE: C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2be6");

// CONCATENATED MODULE: C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/epic-spinners/src/components/lib/BreedingRhombusSpinner.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  lib_BreedingRhombusSpinnervue_type_script_lang_js_,
  BreedingRhombusSpinnervue_type_template_id_8fa7a3fc_scoped_true_render,
  BreedingRhombusSpinnervue_type_template_id_8fa7a3fc_scoped_true_staticRenderFns,
  false,
  null,
  "8fa7a3fc",
  null
  
)

/* harmony default export */ var BreedingRhombusSpinner = (component.exports);
// CONCATENATED MODULE: C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/vue-loader/lib??vue-loader-options!./src/components/BreedingRhombusSpinner.vue?vue&type=script&lang=js&
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




/* harmony default export */ var components_BreedingRhombusSpinnervue_type_script_lang_js_ = ({
  name: "BreedingRhombusSpinnerWrapper",
  mixins: [MixinComponent["a" /* default */]],
  components: {
    BreedingRhombusSpinner: BreedingRhombusSpinner
  }
});

// CONCATENATED MODULE: ./src/components/BreedingRhombusSpinner.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_components_BreedingRhombusSpinnervue_type_script_lang_js_ = (components_BreedingRhombusSpinnervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/BreedingRhombusSpinner.vue





/* normalize component */

var BreedingRhombusSpinner_component = Object(componentNormalizer["a" /* default */])(
  src_components_BreedingRhombusSpinnervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var components_BreedingRhombusSpinner = __webpack_exports__["a"] = (BreedingRhombusSpinner_component.exports);

/***/ }),

/***/ "48dc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"93ce6ae4-vue-loader-template"}!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/vue-loader/lib??vue-loader-options!./src/components/CirclesToRhombusesSpinner.vue?vue&type=template&id=3d0e8840&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('CirclesToRhombusesSpinner',{style:({
    position: 'absolute',
    left: (_vm.width - _vm.circlesWidth) / 2 + 'px',
    top: (_vm.height - _vm.circleSize) / 2 + 'px',
  }),attrs:{"animation-duration":_vm.animationDuration,"size":_vm.size,"color":_vm.color}})}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/CirclesToRhombusesSpinner.vue?vue&type=template&id=3d0e8840&

// EXTERNAL MODULE: ./src/components/MixinComponent.js
var MixinComponent = __webpack_require__("d7a5");

// CONCATENATED MODULE: C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"93ce6ae4-vue-loader-template"}!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/vue-loader/lib??vue-loader-options!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/epic-spinners/src/components/lib/CirclesToRhombusesSpinner.vue?vue&type=template&id=7a6e17e5&scoped=true&
var CirclesToRhombusesSpinnervue_type_template_id_7a6e17e5_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"circles-to-rhombuses-spinner",style:(_vm.spinnertStyle)},_vm._l((_vm.circlesStyles),function(cs,index){return _c('div',{key:index,staticClass:"circle",style:(cs)})}),0)}
var CirclesToRhombusesSpinnervue_type_template_id_7a6e17e5_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/epic-spinners/src/components/lib/CirclesToRhombusesSpinner.vue?vue&type=template&id=7a6e17e5&scoped=true&

// CONCATENATED MODULE: C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/vue-loader/lib??vue-loader-options!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/epic-spinners/src/components/lib/CirclesToRhombusesSpinner.vue?vue&type=script&lang=js&
//
//
//
//
//
//

/* harmony default export */ var CirclesToRhombusesSpinnervue_type_script_lang_js_ = ({
  name: 'CirclesToRhombusesSpinner',

  props: {
    animationDuration: {
      type: Number,
      default: 1200
    },
    circleSize: {
      type: Number,
      default: 15
    },
    color: {
      type: String,
      default: '#fff'
    },
    circlesNum: {
      type: Number,
      default: 3
    }
  },

  computed: {
    circleMarginLeft () {
      return this.circleSize * 1.125
    },

    spinnertStyle () {
      return {
        height: `${this.circleSize}px`,
        width: `${(this.circleSize + this.circleMarginLeft) * this.circlesNum}px`
      }
    },

    circleStyle () {
      return {
        borderColor: this.color,
        animationDuration: `${this.animationDuration}ms`,
        height: `${this.circleSize}px`,
        width: `${this.circleSize}px`,
        marginLeft: `${this.circleMarginLeft}px`
      }
    },

    circlesStyles () {
      const circlesStyles = []
      const delay = 150

      for (let i = 1; i <= this.circlesNum; i++) {
        const style = Object.assign({
          animationDelay: `${i * delay}ms`
        }, this.circleStyle)

        if (i === 1) {
          style.marginLeft = 0
        }

        circlesStyles.push(style)
      }

      return circlesStyles
    }
  }
});

// CONCATENATED MODULE: C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/epic-spinners/src/components/lib/CirclesToRhombusesSpinner.vue?vue&type=script&lang=js&
 /* harmony default export */ var lib_CirclesToRhombusesSpinnervue_type_script_lang_js_ = (CirclesToRhombusesSpinnervue_type_script_lang_js_); 
// EXTERNAL MODULE: C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/epic-spinners/src/components/lib/CirclesToRhombusesSpinner.vue?vue&type=style&index=0&id=7a6e17e5&scoped=true&lang=css&
var CirclesToRhombusesSpinnervue_type_style_index_0_id_7a6e17e5_scoped_true_lang_css_ = __webpack_require__("40bb");

// EXTERNAL MODULE: C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2be6");

// CONCATENATED MODULE: C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/epic-spinners/src/components/lib/CirclesToRhombusesSpinner.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  lib_CirclesToRhombusesSpinnervue_type_script_lang_js_,
  CirclesToRhombusesSpinnervue_type_template_id_7a6e17e5_scoped_true_render,
  CirclesToRhombusesSpinnervue_type_template_id_7a6e17e5_scoped_true_staticRenderFns,
  false,
  null,
  "7a6e17e5",
  null
  
)

/* harmony default export */ var CirclesToRhombusesSpinner = (component.exports);
// CONCATENATED MODULE: C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/vue-loader/lib??vue-loader-options!./src/components/CirclesToRhombusesSpinner.vue?vue&type=script&lang=js&
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




/* harmony default export */ var components_CirclesToRhombusesSpinnervue_type_script_lang_js_ = ({
  name: "CirclesToRhombusesSpinnerWrapper",
  mixins: [MixinComponent["a" /* default */]],
  components: {
    CirclesToRhombusesSpinner: CirclesToRhombusesSpinner,
  },
  props: {
    circleSize: {
      type: Number,
      default: 15,
    },
    circlesNum: {
      type: Number,
      default: 3,
    },
  },
  computed: {
    circleMarginLeft() {
      return this.circleSize * 1.125;
    },
    circlesWidth() {
      return (this.circleSize + this.circleMarginLeft) * this.circlesNum;
    },
  },
});

// CONCATENATED MODULE: ./src/components/CirclesToRhombusesSpinner.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_components_CirclesToRhombusesSpinnervue_type_script_lang_js_ = (components_CirclesToRhombusesSpinnervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/CirclesToRhombusesSpinner.vue





/* normalize component */

var CirclesToRhombusesSpinner_component = Object(componentNormalizer["a" /* default */])(
  src_components_CirclesToRhombusesSpinnervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var components_CirclesToRhombusesSpinner = __webpack_exports__["a"] = (CirclesToRhombusesSpinner_component.exports);

/***/ }),

/***/ "4903":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("a3f0");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("0ed3").default
var update = add("962ee67c", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "4912":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"93ce6ae4-vue-loader-template"}!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/vue-loader/lib??vue-loader-options!./src/components/SemipolarSpinner.vue?vue&type=template&id=46470ca1&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('SemipolarSpinner',{style:({
    position: 'absolute',
    left: (_vm.width - _vm.size) / 2 + 'px',
    top: (_vm.height - _vm.size) / 2 + 'px'
  }),attrs:{"animation-duration":_vm.animationDuration,"size":_vm.size,"color":_vm.color}})}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/SemipolarSpinner.vue?vue&type=template&id=46470ca1&

// EXTERNAL MODULE: ./src/components/MixinComponent.js
var MixinComponent = __webpack_require__("d7a5");

// CONCATENATED MODULE: C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"93ce6ae4-vue-loader-template"}!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/vue-loader/lib??vue-loader-options!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/epic-spinners/src/components/lib/SemipolarSpinner.vue?vue&type=template&id=9544fc1a&scoped=true&
var SemipolarSpinnervue_type_template_id_9544fc1a_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"semipolar-spinner",style:(_vm.spinnerStyle)},_vm._l((_vm.ringsStyles),function(rs,index){return _c('div',{key:index,staticClass:"ring",style:(rs)})}),0)}
var SemipolarSpinnervue_type_template_id_9544fc1a_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/epic-spinners/src/components/lib/SemipolarSpinner.vue?vue&type=template&id=9544fc1a&scoped=true&

// CONCATENATED MODULE: C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/vue-loader/lib??vue-loader-options!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/epic-spinners/src/components/lib/SemipolarSpinner.vue?vue&type=script&lang=js&
//
//
//
//
//
//

/* harmony default export */ var SemipolarSpinnervue_type_script_lang_js_ = ({
  name: 'SemipolarSpinner',

  props: {
    animationDuration: {
      type: Number,
      default: 2000
    },
    size: {
      type: Number,
      default: 65
    },
    color: {
      type: String,
      default: '#fff'
    }
  },

  data () {
    return {
      ringsNum: 5
    }
  },

  computed: {
    spinnerStyle () {
      return {
        height: `${this.size}px`,
        width: `${this.size}px`
      }
    },
    ringStyle () {
      return {
        animationDuration: `${this.animationDuration}ms`,
        borderTopColor: this.color,
        borderLeftColor: this.color
      }
    },
    ringsStyles () {
      const ringsStyles = []
      const delayModifier = 0.1
      const ringWidth = this.size * 0.05
      const positionIncrement = ringWidth * 2
      const sizeDecrement = this.size * 0.2

      for (let i = 0; i < this.ringsNum; i++) {
        const computedSize = `${this.size - sizeDecrement * i}px`
        const computedPosition = `${positionIncrement * i}px`
        const style = Object.assign({
          animationDelay: `${this.animationDuration * delayModifier * (this.ringsNum - i - 1)}ms`,
          height: computedSize,
          width: computedSize,
          left: computedPosition,
          top: computedPosition,
          borderWidth: `${ringWidth}px`
        }, this.ringStyle)
        ringsStyles.push(style)
      }

      return ringsStyles
    }
  }
});

// CONCATENATED MODULE: C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/epic-spinners/src/components/lib/SemipolarSpinner.vue?vue&type=script&lang=js&
 /* harmony default export */ var lib_SemipolarSpinnervue_type_script_lang_js_ = (SemipolarSpinnervue_type_script_lang_js_); 
// EXTERNAL MODULE: C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/epic-spinners/src/components/lib/SemipolarSpinner.vue?vue&type=style&index=0&id=9544fc1a&scoped=true&lang=css&
var SemipolarSpinnervue_type_style_index_0_id_9544fc1a_scoped_true_lang_css_ = __webpack_require__("719f");

// EXTERNAL MODULE: C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2be6");

// CONCATENATED MODULE: C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/epic-spinners/src/components/lib/SemipolarSpinner.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  lib_SemipolarSpinnervue_type_script_lang_js_,
  SemipolarSpinnervue_type_template_id_9544fc1a_scoped_true_render,
  SemipolarSpinnervue_type_template_id_9544fc1a_scoped_true_staticRenderFns,
  false,
  null,
  "9544fc1a",
  null
  
)

/* harmony default export */ var SemipolarSpinner = (component.exports);
// CONCATENATED MODULE: C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/vue-loader/lib??vue-loader-options!./src/components/SemipolarSpinner.vue?vue&type=script&lang=js&
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




/* harmony default export */ var components_SemipolarSpinnervue_type_script_lang_js_ = ({
  name: "SemipolarSpinnerWrapper",
  mixins: [MixinComponent["a" /* default */]],
  components: {
    SemipolarSpinner: SemipolarSpinner
  }
});

// CONCATENATED MODULE: ./src/components/SemipolarSpinner.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_components_SemipolarSpinnervue_type_script_lang_js_ = (components_SemipolarSpinnervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/SemipolarSpinner.vue





/* normalize component */

var SemipolarSpinner_component = Object(componentNormalizer["a" /* default */])(
  src_components_SemipolarSpinnervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var components_SemipolarSpinner = __webpack_exports__["a"] = (SemipolarSpinner_component.exports);

/***/ }),

/***/ "4c83":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"93ce6ae4-vue-loader-template"}!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/vue-loader/lib??vue-loader-options!./src/components/HalfCircleSpinner.vue?vue&type=template&id=4e85e36a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('HalfCircleSpinner',{style:({
    position: 'absolute',
    left: (_vm.width - _vm.size) / 2 + 'px',
    top: (_vm.height - _vm.size) / 2 + 'px'
  }),attrs:{"animation-duration":_vm.animationDuration,"size":_vm.size,"color":_vm.color}})}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/HalfCircleSpinner.vue?vue&type=template&id=4e85e36a&

// EXTERNAL MODULE: ./src/components/MixinComponent.js
var MixinComponent = __webpack_require__("d7a5");

// CONCATENATED MODULE: C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"93ce6ae4-vue-loader-template"}!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/vue-loader/lib??vue-loader-options!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/epic-spinners/src/components/lib/HalfCircleSpinner.vue?vue&type=template&id=669f3b60&scoped=true&
var HalfCircleSpinnervue_type_template_id_669f3b60_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"half-circle-spinner",style:(_vm.spinnerStyle)},[_c('div',{staticClass:"circle circle-1",style:(_vm.circle1Style)}),_c('div',{staticClass:"circle circle-2",style:(_vm.circle2Style)})])}
var HalfCircleSpinnervue_type_template_id_669f3b60_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/epic-spinners/src/components/lib/HalfCircleSpinner.vue?vue&type=template&id=669f3b60&scoped=true&

// CONCATENATED MODULE: C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/vue-loader/lib??vue-loader-options!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/epic-spinners/src/components/lib/HalfCircleSpinner.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//

/* harmony default export */ var HalfCircleSpinnervue_type_script_lang_js_ = ({
  name: 'HalfCircleSpinner',

  props: {
    animationDuration: {
      type: Number,
      default: 1000
    },
    size: {
      type: Number,
      default: 60
    },
    color: {
      type: String,
      default: '#fff'
    }
  },

  computed: {
    spinnerStyle () {
      return {
        height: `${this.size}px`,
        width: `${this.size}px`
      }
    },

    circleStyle () {
      return {
        borderWidth: `${this.size / 10}px`,
        animationDuration: `${this.animationDuration}ms`
      }
    },

    circle1Style () {
      return Object.assign({
        borderTopColor: this.color
      }, this.circleStyle)
    },

    circle2Style () {
      return Object.assign({
        borderBottomColor: this.color
      }, this.circleStyle)
    }
  }
});

// CONCATENATED MODULE: C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/epic-spinners/src/components/lib/HalfCircleSpinner.vue?vue&type=script&lang=js&
 /* harmony default export */ var lib_HalfCircleSpinnervue_type_script_lang_js_ = (HalfCircleSpinnervue_type_script_lang_js_); 
// EXTERNAL MODULE: C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/epic-spinners/src/components/lib/HalfCircleSpinner.vue?vue&type=style&index=0&id=669f3b60&scoped=true&lang=css&
var HalfCircleSpinnervue_type_style_index_0_id_669f3b60_scoped_true_lang_css_ = __webpack_require__("84f1");

// EXTERNAL MODULE: C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2be6");

// CONCATENATED MODULE: C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/epic-spinners/src/components/lib/HalfCircleSpinner.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  lib_HalfCircleSpinnervue_type_script_lang_js_,
  HalfCircleSpinnervue_type_template_id_669f3b60_scoped_true_render,
  HalfCircleSpinnervue_type_template_id_669f3b60_scoped_true_staticRenderFns,
  false,
  null,
  "669f3b60",
  null
  
)

/* harmony default export */ var HalfCircleSpinner = (component.exports);
// CONCATENATED MODULE: C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/vue-loader/lib??vue-loader-options!./src/components/HalfCircleSpinner.vue?vue&type=script&lang=js&
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




/* harmony default export */ var components_HalfCircleSpinnervue_type_script_lang_js_ = ({
  name: "HalfCircleSpinnerWrapper",
  mixins: [MixinComponent["a" /* default */]],
  components: {
    HalfCircleSpinner: HalfCircleSpinner
  }
});

// CONCATENATED MODULE: ./src/components/HalfCircleSpinner.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_components_HalfCircleSpinnervue_type_script_lang_js_ = (components_HalfCircleSpinnervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/HalfCircleSpinner.vue





/* normalize component */

var HalfCircleSpinner_component = Object(componentNormalizer["a" /* default */])(
  src_components_HalfCircleSpinnervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var components_HalfCircleSpinner = __webpack_exports__["a"] = (HalfCircleSpinner_component.exports);

/***/ }),

/***/ "4ebb":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("3c10");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".pixel-spinner[data-v-c76fc818],.pixel-spinner *[data-v-c76fc818]{-webkit-box-sizing:border-box;box-sizing:border-box}.pixel-spinner[data-v-c76fc818]{height:70px;width:70px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.pixel-spinner .pixel-spinner-inner[data-v-c76fc818]{width:10px;height:10px;background-color:#ff1d5e;color:#ff1d5e;-webkit-box-shadow:15px 15px 0 0,-15px -15px 0 0,15px -15px 0 0,-15px 15px 0 0,0 15px 0 0,15px 0 0 0,-15px 0 0 0,0 -15px 0 0;box-shadow:15px 15px 0 0,-15px -15px 0 0,15px -15px 0 0,-15px 15px 0 0,0 15px 0 0,15px 0 0 0,-15px 0 0 0,0 -15px 0 0;-webkit-animation:pixel-spinner-animation-data-v-c76fc818 2s linear infinite;animation:pixel-spinner-animation-data-v-c76fc818 2s linear infinite}@-webkit-keyframes pixel-spinner-animation-data-v-c76fc818{50%{-webkit-box-shadow:20px 20px 0 0,-20px -20px 0 0,20px -20px 0 0,-20px 20px 0 0,0 10px 0 0,10px 0 0 0,-10px 0 0 0,0 -10px 0 0;box-shadow:20px 20px 0 0,-20px -20px 0 0,20px -20px 0 0,-20px 20px 0 0,0 10px 0 0,10px 0 0 0,-10px 0 0 0,0 -10px 0 0}75%{-webkit-box-shadow:20px 20px 0 0,-20px -20px 0 0,20px -20px 0 0,-20px 20px 0 0,0 10px 0 0,10px 0 0 0,-10px 0 0 0,0 -10px 0 0;box-shadow:20px 20px 0 0,-20px -20px 0 0,20px -20px 0 0,-20px 20px 0 0,0 10px 0 0,10px 0 0 0,-10px 0 0 0,0 -10px 0 0}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes pixel-spinner-animation-data-v-c76fc818{50%{-webkit-box-shadow:20px 20px 0 0,-20px -20px 0 0,20px -20px 0 0,-20px 20px 0 0,0 10px 0 0,10px 0 0 0,-10px 0 0 0,0 -10px 0 0;box-shadow:20px 20px 0 0,-20px -20px 0 0,20px -20px 0 0,-20px 20px 0 0,0 10px 0 0,10px 0 0 0,-10px 0 0 0,0 -10px 0 0}75%{-webkit-box-shadow:20px 20px 0 0,-20px -20px 0 0,20px -20px 0 0,-20px 20px 0 0,0 10px 0 0,10px 0 0 0,-10px 0 0 0,0 -10px 0 0;box-shadow:20px 20px 0 0,-20px -20px 0 0,20px -20px 0 0,-20px 20px 0 0,0 10px 0 0,10px 0 0 0,-10px 0 0 0,0 -10px 0 0}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "55d8":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("3c10");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".intersecting-circles-spinner[data-v-91c71956],.intersecting-circles-spinner *[data-v-91c71956]{-webkit-box-sizing:border-box;box-sizing:border-box}.intersecting-circles-spinner[data-v-91c71956]{height:70px;width:70px;position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.intersecting-circles-spinner .spinnerBlock[data-v-91c71956]{-webkit-animation:intersecting-circles-spinners-animation-data-v-91c71956 1.2s linear infinite;animation:intersecting-circles-spinners-animation-data-v-91c71956 1.2s linear infinite;-webkit-transform-origin:center;transform-origin:center;display:block;height:35px;width:35px}.intersecting-circles-spinner .circle[data-v-91c71956]{display:block;border:2px solid #ff1d5e;border-radius:50%;height:100%;width:100%;position:absolute;left:0;top:0}.intersecting-circles-spinner .circle[data-v-91c71956]:first-child{left:0;top:0}.intersecting-circles-spinner .circle[data-v-91c71956]:nth-child(2){left:-12.6px;top:7px}.intersecting-circles-spinner .circle[data-v-91c71956]:nth-child(3){left:-12.6px;top:-7px}.intersecting-circles-spinner .circle[data-v-91c71956]:nth-child(4){left:0;top:-12.6px}.intersecting-circles-spinner .circle[data-v-91c71956]:nth-child(5){left:12.6px;top:-7px}.intersecting-circles-spinner .circle[data-v-91c71956]:nth-child(6){left:12.6px;top:7px}.intersecting-circles-spinner .circle[data-v-91c71956]:nth-child(7){left:0;top:12.6px}@-webkit-keyframes intersecting-circles-spinners-animation-data-v-91c71956{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes intersecting-circles-spinners-animation-data-v-91c71956{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "5800":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"93ce6ae4-vue-loader-template"}!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/vue-loader/lib??vue-loader-options!./src/components/SpringSpinner.vue?vue&type=template&id=ca6d0e12&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('SpringSpinner',{style:({
    position: 'absolute',
    left: (_vm.width - _vm.size) / 2 + 'px',
    top: (_vm.height - _vm.size) / 2 + 'px'
  }),attrs:{"animation-duration":_vm.animationDuration,"size":_vm.size,"color":_vm.color}})}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/SpringSpinner.vue?vue&type=template&id=ca6d0e12&

// EXTERNAL MODULE: ./src/components/MixinComponent.js
var MixinComponent = __webpack_require__("d7a5");

// CONCATENATED MODULE: C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"93ce6ae4-vue-loader-template"}!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/vue-loader/lib??vue-loader-options!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/epic-spinners/src/components/lib/SpringSpinner.vue?vue&type=template&id=1ae1dc20&scoped=true&
var SpringSpinnervue_type_template_id_1ae1dc20_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"spring-spinner",style:(_vm.spinnerStyle)},[_c('div',{staticClass:"spring-spinner-part top",style:(_vm.spinnerPartStyle)},[_c('div',{staticClass:"spring-spinner-rotator",style:(_vm.rotatorStyle)})]),_c('div',{staticClass:"spring-spinner-part bottom",style:(_vm.spinnerPartStyle)},[_c('div',{staticClass:"spring-spinner-rotator",style:(_vm.rotatorStyle)})])])}
var SpringSpinnervue_type_template_id_1ae1dc20_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/epic-spinners/src/components/lib/SpringSpinner.vue?vue&type=template&id=1ae1dc20&scoped=true&

// EXTERNAL MODULE: C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/epic-spinners/src/services/utils.js
var utils = __webpack_require__("1cd7");

// CONCATENATED MODULE: C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/vue-loader/lib??vue-loader-options!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/epic-spinners/src/components/lib/SpringSpinner.vue?vue&type=script&lang=js&
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



/* harmony default export */ var SpringSpinnervue_type_script_lang_js_ = ({
  name: 'SpringSpinner',

  props: {
    animationDuration: {
      type: Number,
      default: 3000
    },
    size: {
      type: Number,
      default: 70
    },
    color: {
      type: String,
      default: '#fff'
    }
  },

  data () {
    return {
      animationName: `spring-spinner-animation-${Date.now()}`
    }
  },

  computed: {
    spinnerStyle () {
      return {
        height: `${this.size}px`,
        width: `${this.size}px`
      }
    },

    spinnerPartStyle () {
      return {
        height: `${this.size / 2}px`,
        width: `${this.size}px`
      }
    },

    rotatorStyle () {
      return {
        height: `${this.size}px`,
        width: `${this.size}px`,
        borderRightColor: this.color,
        borderTopColor: this.color,
        borderWidth: `${this.size / 7}px`,
        animationDuration: `${this.animationDuration}ms`,
        animationName: this.animationName
      }
    }
  },

  watch: {
    size: {
      handler: 'updateAnimation',
      immediate: true
    },
    color: {
      handler: 'updateAnimation',
      immediate: true
    }
  },

  mounted () {
    this.updateAnimation()
  },

  beforeDestroy () {
    utils["a" /* default */].removeKeyframes(this.animationName)
  },

  methods: {
    updateAnimation () {
      utils["a" /* default */].removeKeyframes(this.animationName)
      utils["a" /* default */].appendKeyframes(this.animationName, this.generateKeyframes())
    },

    generateKeyframes () {
      return `
        0% {
          border-width: ${this.size / 7}px;
        }
        25% {
          border-width: ${this.size / 23.33}px;
        }
        50% {
          transform: rotate(115deg);
          border-width: ${this.size / 7}px;
        }
        75% {
          border-width: ${this.size / 23.33}px;
         }
        100% {
         border-width: ${this.size / 7}px;
        }`
    }
  }
});

// CONCATENATED MODULE: C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/epic-spinners/src/components/lib/SpringSpinner.vue?vue&type=script&lang=js&
 /* harmony default export */ var lib_SpringSpinnervue_type_script_lang_js_ = (SpringSpinnervue_type_script_lang_js_); 
// EXTERNAL MODULE: C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/epic-spinners/src/components/lib/SpringSpinner.vue?vue&type=style&index=0&id=1ae1dc20&scoped=true&lang=css&
var SpringSpinnervue_type_style_index_0_id_1ae1dc20_scoped_true_lang_css_ = __webpack_require__("012d");

// EXTERNAL MODULE: C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2be6");

// CONCATENATED MODULE: C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/epic-spinners/src/components/lib/SpringSpinner.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  lib_SpringSpinnervue_type_script_lang_js_,
  SpringSpinnervue_type_template_id_1ae1dc20_scoped_true_render,
  SpringSpinnervue_type_template_id_1ae1dc20_scoped_true_staticRenderFns,
  false,
  null,
  "1ae1dc20",
  null
  
)

/* harmony default export */ var SpringSpinner = (component.exports);
// CONCATENATED MODULE: C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/vue-loader/lib??vue-loader-options!./src/components/SpringSpinner.vue?vue&type=script&lang=js&
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




/* harmony default export */ var components_SpringSpinnervue_type_script_lang_js_ = ({
  name: "SpringSpinnerWrapper",
  mixins: [MixinComponent["a" /* default */]],
  components: {
    SpringSpinner: SpringSpinner
  }
});

// CONCATENATED MODULE: ./src/components/SpringSpinner.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_components_SpringSpinnervue_type_script_lang_js_ = (components_SpringSpinnervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/SpringSpinner.vue





/* normalize component */

var SpringSpinner_component = Object(componentNormalizer["a" /* default */])(
  src_components_SpringSpinnervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var components_SpringSpinner = __webpack_exports__["a"] = (SpringSpinner_component.exports);

/***/ }),

/***/ "6585":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("185d");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("0ed3").default
var update = add("b8464ef6", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "65a8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _vue_style_loader_index_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_postcss_loader_src_index_js_ref_6_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_RadarSpinner_vue_vue_type_style_index_0_id_5710a196_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("fa9c");
/* harmony import */ var _vue_style_loader_index_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_postcss_loader_src_index_js_ref_6_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_RadarSpinner_vue_vue_type_style_index_0_id_5710a196_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_style_loader_index_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_postcss_loader_src_index_js_ref_6_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_RadarSpinner_vue_vue_type_style_index_0_id_5710a196_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_vue_style_loader_index_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_postcss_loader_src_index_js_ref_6_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_RadarSpinner_vue_vue_type_style_index_0_id_5710a196_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "65e8":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("bc02");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("0ed3").default
var update = add("09f9dd02", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "719f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _vue_style_loader_index_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_postcss_loader_src_index_js_ref_6_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_SemipolarSpinner_vue_vue_type_style_index_0_id_9544fc1a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("3362");
/* harmony import */ var _vue_style_loader_index_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_postcss_loader_src_index_js_ref_6_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_SemipolarSpinner_vue_vue_type_style_index_0_id_9544fc1a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_style_loader_index_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_postcss_loader_src_index_js_ref_6_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_SemipolarSpinner_vue_vue_type_style_index_0_id_9544fc1a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_vue_style_loader_index_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_postcss_loader_src_index_js_ref_6_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_SemipolarSpinner_vue_vue_type_style_index_0_id_9544fc1a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "7d15":
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "7daf":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("275f");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("0ed3").default
var update = add("1d8e89f5", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "81c2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _vue_style_loader_index_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_postcss_loader_src_index_js_ref_6_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_PixelSpinner_vue_vue_type_style_index_0_id_c76fc818_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("b722");
/* harmony import */ var _vue_style_loader_index_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_postcss_loader_src_index_js_ref_6_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_PixelSpinner_vue_vue_type_style_index_0_id_c76fc818_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_style_loader_index_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_postcss_loader_src_index_js_ref_6_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_PixelSpinner_vue_vue_type_style_index_0_id_c76fc818_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_vue_style_loader_index_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_postcss_loader_src_index_js_ref_6_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_PixelSpinner_vue_vue_type_style_index_0_id_c76fc818_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "8259":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"93ce6ae4-vue-loader-template"}!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/vue-loader/lib??vue-loader-options!./src/components/TrinityRingsSpinner.vue?vue&type=template&id=aa8482be&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('TrinityRingsSpinner',{style:({
    position: 'absolute',
    left: (_vm.width - _vm.size) / 2 + 'px',
    top: (_vm.height - _vm.size) / 2 + 'px'
  }),attrs:{"animation-duration":_vm.animationDuration,"size":_vm.size,"color":_vm.color}})}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/TrinityRingsSpinner.vue?vue&type=template&id=aa8482be&

// EXTERNAL MODULE: ./src/components/MixinComponent.js
var MixinComponent = __webpack_require__("d7a5");

// CONCATENATED MODULE: C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"93ce6ae4-vue-loader-template"}!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/vue-loader/lib??vue-loader-options!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/epic-spinners/src/components/lib/TrinityRingsSpinner.vue?vue&type=template&id=19bbdf0e&scoped=true&
var TrinityRingsSpinnervue_type_template_id_19bbdf0e_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"trinity-rings-spinner",style:(_vm.spinnerStyle)},[_c('div',{staticClass:"circle circle1",style:(_vm.ring1Style)}),_c('div',{staticClass:"circle circle2",style:(_vm.ring2Style)}),_c('div',{staticClass:"circle circle3",style:(_vm.ring3Style)})])}
var TrinityRingsSpinnervue_type_template_id_19bbdf0e_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/epic-spinners/src/components/lib/TrinityRingsSpinner.vue?vue&type=template&id=19bbdf0e&scoped=true&

// CONCATENATED MODULE: C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/vue-loader/lib??vue-loader-options!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/epic-spinners/src/components/lib/TrinityRingsSpinner.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//

/* harmony default export */ var TrinityRingsSpinnervue_type_script_lang_js_ = ({
  name: 'TrinityRingsSpinner',

  props: {
    animationDuration: {
      type: Number,
      default: 1500
    },
    size: {
      type: Number,
      default: 60
    },
    color: {
      type: String,
      default: '#fff'
    }
  },

  data () {
    return {
      containerPadding: 3
    }
  },

  computed: {
    outerRingSize () {
      return this.size - this.containerPadding * 2
    },

    spinnerStyle () {
      return {
        height: `${this.size}px`,
        width: `${this.size}px`,
        padding: `${this.containerPadding}px`
      }
    },

    ring1Style () {
      return {
        height: `${this.outerRingSize}px`,
        width: `${this.outerRingSize}px`,
        borderColor: this.color,
        animationDuration: `${this.animationDuration}ms`
      }
    },

    ring2Style () {
      return {
        height: `${this.outerRingSize * 0.65}px`,
        width: `${this.outerRingSize * 0.65}px`,
        borderColor: this.color,
        animationDuration: `${this.animationDuration}ms`
      }
    },

    ring3Style () {
      return {
        height: `${this.outerRingSize * 0.1}px`,
        width: `${this.outerRingSize * 0.1}px`,
        borderColor: this.color,
        animationDuration: `${this.animationDuration}ms`
      }
    }
  }
});

// CONCATENATED MODULE: C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/epic-spinners/src/components/lib/TrinityRingsSpinner.vue?vue&type=script&lang=js&
 /* harmony default export */ var lib_TrinityRingsSpinnervue_type_script_lang_js_ = (TrinityRingsSpinnervue_type_script_lang_js_); 
// EXTERNAL MODULE: C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/epic-spinners/src/components/lib/TrinityRingsSpinner.vue?vue&type=style&index=0&id=19bbdf0e&scoped=true&lang=css&
var TrinityRingsSpinnervue_type_style_index_0_id_19bbdf0e_scoped_true_lang_css_ = __webpack_require__("c32a");

// EXTERNAL MODULE: C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2be6");

// CONCATENATED MODULE: C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/epic-spinners/src/components/lib/TrinityRingsSpinner.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  lib_TrinityRingsSpinnervue_type_script_lang_js_,
  TrinityRingsSpinnervue_type_template_id_19bbdf0e_scoped_true_render,
  TrinityRingsSpinnervue_type_template_id_19bbdf0e_scoped_true_staticRenderFns,
  false,
  null,
  "19bbdf0e",
  null
  
)

/* harmony default export */ var TrinityRingsSpinner = (component.exports);
// CONCATENATED MODULE: C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/vue-loader/lib??vue-loader-options!./src/components/TrinityRingsSpinner.vue?vue&type=script&lang=js&
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




/* harmony default export */ var components_TrinityRingsSpinnervue_type_script_lang_js_ = ({
  name: "TrinityRingsSpinnerWrapper",
  mixins: [MixinComponent["a" /* default */]],
  components: {
    TrinityRingsSpinner: TrinityRingsSpinner
  }
});

// CONCATENATED MODULE: ./src/components/TrinityRingsSpinner.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_components_TrinityRingsSpinnervue_type_script_lang_js_ = (components_TrinityRingsSpinnervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/TrinityRingsSpinner.vue





/* normalize component */

var TrinityRingsSpinner_component = Object(componentNormalizer["a" /* default */])(
  src_components_TrinityRingsSpinnervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var components_TrinityRingsSpinner = __webpack_exports__["a"] = (TrinityRingsSpinner_component.exports);

/***/ }),

/***/ "84f1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _vue_style_loader_index_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_postcss_loader_src_index_js_ref_6_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_HalfCircleSpinner_vue_vue_type_style_index_0_id_669f3b60_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("7daf");
/* harmony import */ var _vue_style_loader_index_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_postcss_loader_src_index_js_ref_6_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_HalfCircleSpinner_vue_vue_type_style_index_0_id_669f3b60_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_style_loader_index_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_postcss_loader_src_index_js_ref_6_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_HalfCircleSpinner_vue_vue_type_style_index_0_id_669f3b60_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_vue_style_loader_index_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_postcss_loader_src_index_js_ref_6_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_HalfCircleSpinner_vue_vue_type_style_index_0_id_669f3b60_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "8512":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("3c10");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".radar-spinner[data-v-5710a196],.radar-spinner *[data-v-5710a196]{-webkit-box-sizing:border-box;box-sizing:border-box}.radar-spinner[data-v-5710a196]{height:60px;width:60px;position:relative}.radar-spinner .circle[data-v-5710a196]{position:absolute;height:100%;width:100%;top:0;left:0;-webkit-animation:radar-spinner-animation-data-v-5710a196 2s infinite;animation:radar-spinner-animation-data-v-5710a196 2s infinite}.radar-spinner .circle[data-v-5710a196]:first-child{padding:0;-webkit-animation-delay:.3s;animation-delay:.3s}.radar-spinner .circle[data-v-5710a196]:nth-child(2){padding:5.45455px;-webkit-animation-delay:.3s;animation-delay:.3s}.radar-spinner .circle[data-v-5710a196]:nth-child(3){padding:10.90909px;-webkit-animation-delay:.3s;animation-delay:.3s}.radar-spinner .circle[data-v-5710a196]:nth-child(4){padding:16.36364px;-webkit-animation-delay:0ms;animation-delay:0ms}.radar-spinner .circle-inner[data-v-5710a196],.radar-spinner .circle-inner-container[data-v-5710a196]{height:100%;width:100%;border-radius:50%;border:2.72727px solid transparent}.radar-spinner .circle-inner[data-v-5710a196]{border-left-color:#ff1d5e;border-right-color:#ff1d5e}@-webkit-keyframes radar-spinner-animation-data-v-5710a196{50%{-webkit-transform:rotate(180deg);transform:rotate(180deg)}to{-webkit-transform:rotate(0deg);transform:rotate(0deg)}}@keyframes radar-spinner-animation-data-v-5710a196{50%{-webkit-transform:rotate(180deg);transform:rotate(180deg)}to{-webkit-transform:rotate(0deg);transform:rotate(0deg)}}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "887f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"93ce6ae4-vue-loader-template"}!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/vue-loader/lib??vue-loader-options!./src/components/AtomSpinner.vue?vue&type=template&id=9b077ea2&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('AtomSpinner',{style:({
    position: 'absolute',
    left: (_vm.width - _vm.size) / 2 + 'px',
    top: (_vm.height - _vm.size) / 2 + 'px'
  }),attrs:{"animation-duration":_vm.animationDuration,"size":_vm.size,"color":_vm.color}})}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/AtomSpinner.vue?vue&type=template&id=9b077ea2&

// EXTERNAL MODULE: ./src/components/MixinComponent.js
var MixinComponent = __webpack_require__("d7a5");

// CONCATENATED MODULE: C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"93ce6ae4-vue-loader-template"}!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/vue-loader/lib??vue-loader-options!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/epic-spinners/src/components/lib/AtomSpinner.vue?vue&type=template&id=fb9a33c4&scoped=true&
var AtomSpinnervue_type_template_id_fb9a33c4_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"atom-spinner",style:(_vm.spinnerStyle)},[_c('div',{staticClass:"spinner-inner"},[_c('div',{staticClass:"spinner-line",style:(_vm.lineStyle)}),_c('div',{staticClass:"spinner-line",style:(_vm.lineStyle)}),_c('div',{staticClass:"spinner-line",style:(_vm.lineStyle)}),_c('div',{staticClass:"spinner-circle",style:(_vm.circleStyle)},[_vm._v(" ● ")])])])}
var AtomSpinnervue_type_template_id_fb9a33c4_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/epic-spinners/src/components/lib/AtomSpinner.vue?vue&type=template&id=fb9a33c4&scoped=true&

// CONCATENATED MODULE: C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/vue-loader/lib??vue-loader-options!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/epic-spinners/src/components/lib/AtomSpinner.vue?vue&type=script&lang=js&
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
//

/* harmony default export */ var AtomSpinnervue_type_script_lang_js_ = ({
  name: 'AtomSpinner',

  props: {
    animationDuration: {
      type: Number,
      default: 1000
    },
    size: {
      type: Number,
      default: 60
    },
    color: {
      type: String,
      default: '#fff'
    }
  },

  computed: {
    spinnerStyle () {
      return {
        height: `${this.size}px`,
        width: `${this.size}px`
      }
    },

    circleStyle () {
      return {
        color: this.color,
        fontSize: `${this.size * 0.24}px`
      }
    },

    lineStyle () {
      return {
        animationDuration: `${this.animationDuration}ms`,
        borderLeftWidth: `${this.size / 25}px`,
        borderTopWidth: `${this.size / 25}px`,
        borderLeftColor: this.color
      }
    }
  }
});

// CONCATENATED MODULE: C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/epic-spinners/src/components/lib/AtomSpinner.vue?vue&type=script&lang=js&
 /* harmony default export */ var lib_AtomSpinnervue_type_script_lang_js_ = (AtomSpinnervue_type_script_lang_js_); 
// EXTERNAL MODULE: C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/epic-spinners/src/components/lib/AtomSpinner.vue?vue&type=style&index=0&id=fb9a33c4&scoped=true&lang=css&
var AtomSpinnervue_type_style_index_0_id_fb9a33c4_scoped_true_lang_css_ = __webpack_require__("f28c");

// EXTERNAL MODULE: C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2be6");

// CONCATENATED MODULE: C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/epic-spinners/src/components/lib/AtomSpinner.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  lib_AtomSpinnervue_type_script_lang_js_,
  AtomSpinnervue_type_template_id_fb9a33c4_scoped_true_render,
  AtomSpinnervue_type_template_id_fb9a33c4_scoped_true_staticRenderFns,
  false,
  null,
  "fb9a33c4",
  null
  
)

/* harmony default export */ var AtomSpinner = (component.exports);
// CONCATENATED MODULE: C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/vue-loader/lib??vue-loader-options!./src/components/AtomSpinner.vue?vue&type=script&lang=js&
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




/* harmony default export */ var components_AtomSpinnervue_type_script_lang_js_ = ({
  name: "AtomSpinnerWrapper",
  mixins: [MixinComponent["a" /* default */]],
  components: {
    AtomSpinner: AtomSpinner
  }
});

// CONCATENATED MODULE: ./src/components/AtomSpinner.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_components_AtomSpinnervue_type_script_lang_js_ = (components_AtomSpinnervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/AtomSpinner.vue





/* normalize component */

var AtomSpinner_component = Object(componentNormalizer["a" /* default */])(
  src_components_AtomSpinnervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var components_AtomSpinner = __webpack_exports__["a"] = (AtomSpinner_component.exports);

/***/ }),

/***/ "8ed6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _vue_style_loader_index_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_postcss_loader_src_index_js_ref_6_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_FlowerSpinner_vue_vue_type_style_index_0_id_f15101b8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("eeb4");
/* harmony import */ var _vue_style_loader_index_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_postcss_loader_src_index_js_ref_6_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_FlowerSpinner_vue_vue_type_style_index_0_id_f15101b8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_style_loader_index_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_postcss_loader_src_index_js_ref_6_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_FlowerSpinner_vue_vue_type_style_index_0_id_f15101b8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_vue_style_loader_index_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_postcss_loader_src_index_js_ref_6_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_FlowerSpinner_vue_vue_type_style_index_0_id_f15101b8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "93db":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _vue_style_loader_index_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_postcss_loader_src_index_js_ref_6_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_IntersectingCirclesSpinner_vue_vue_type_style_index_0_id_91c71956_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("c965");
/* harmony import */ var _vue_style_loader_index_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_postcss_loader_src_index_js_ref_6_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_IntersectingCirclesSpinner_vue_vue_type_style_index_0_id_91c71956_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_style_loader_index_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_postcss_loader_src_index_js_ref_6_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_IntersectingCirclesSpinner_vue_vue_type_style_index_0_id_91c71956_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_vue_style_loader_index_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_postcss_loader_src_index_js_ref_6_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_IntersectingCirclesSpinner_vue_vue_type_style_index_0_id_91c71956_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "9ec9":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("fc8a");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("0ed3").default
var update = add("06513598", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "a182":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"93ce6ae4-vue-loader-template"}!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/vue-loader/lib??vue-loader-options!./src/components/SwappingSquaresSpinner.vue?vue&type=template&id=289fe1bd&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('SwappingSquaresSpinner',{style:({
    position: 'absolute',
    left: (_vm.width - _vm.size) / 2 + 'px',
    top: (_vm.height - _vm.size) / 2 + 'px'
  }),attrs:{"animation-duration":_vm.animationDuration,"size":_vm.size,"color":_vm.color}})}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/SwappingSquaresSpinner.vue?vue&type=template&id=289fe1bd&

// EXTERNAL MODULE: ./src/components/MixinComponent.js
var MixinComponent = __webpack_require__("d7a5");

// CONCATENATED MODULE: C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"93ce6ae4-vue-loader-template"}!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/vue-loader/lib??vue-loader-options!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/epic-spinners/src/components/lib/SwappingSquaresSpinner.vue?vue&type=template&id=8265a670&scoped=true&
var SwappingSquaresSpinnervue_type_template_id_8265a670_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"swapping-squares-spinner",style:(_vm.spinnerStyle)},_vm._l((_vm.squaresStyles),function(ss,index){return _c('div',{key:index,staticClass:"square",class:("square-" + (index + 1)),style:(ss)})}),0)}
var SwappingSquaresSpinnervue_type_template_id_8265a670_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/epic-spinners/src/components/lib/SwappingSquaresSpinner.vue?vue&type=template&id=8265a670&scoped=true&

// CONCATENATED MODULE: C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/vue-loader/lib??vue-loader-options!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/epic-spinners/src/components/lib/SwappingSquaresSpinner.vue?vue&type=script&lang=js&
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

/* harmony default export */ var SwappingSquaresSpinnervue_type_script_lang_js_ = ({
  name: 'SwappingSquaresSpinner',

  props: {
    animationDuration: {
      type: Number,
      default: 1000
    },
    size: {
      type: Number,
      default: 65
    },
    color: {
      type: String,
      default: '#fff'
    }
  },

  data () {
    return {
      animationBaseName: 'swapping-squares-animation-child',
      squaresNum: 4
    }
  },

  computed: {
    spinnerStyle () {
      return {
        height: `${this.size}px`,
        width: `${this.size}px`
      }
    },

    squareStyle () {
      return {
        height: `${this.size * 0.25 / 1.3}px`,
        width: `${this.size * 0.25 / 1.3}px`,
        animationDuration: `${this.animationDuration}ms`,
        borderWidth: `${this.size * 0.04 / 1.3}px`,
        borderColor: this.color
      }
    },

    squaresStyles () {
      const squaresStyles = []
      const delay = this.animationDuration * 0.5

      for (let i = 1; i <= this.squaresNum; i++) {
        squaresStyles.push(Object.assign({
          animationDelay: `${i % 2 === 0 ? delay : 0}ms`
        }, this.squareStyle))
      }

      return squaresStyles
    }
  }
});

// CONCATENATED MODULE: C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/epic-spinners/src/components/lib/SwappingSquaresSpinner.vue?vue&type=script&lang=js&
 /* harmony default export */ var lib_SwappingSquaresSpinnervue_type_script_lang_js_ = (SwappingSquaresSpinnervue_type_script_lang_js_); 
// EXTERNAL MODULE: C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/epic-spinners/src/components/lib/SwappingSquaresSpinner.vue?vue&type=style&index=0&id=8265a670&scoped=true&lang=css&
var SwappingSquaresSpinnervue_type_style_index_0_id_8265a670_scoped_true_lang_css_ = __webpack_require__("3c9e");

// EXTERNAL MODULE: C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2be6");

// CONCATENATED MODULE: C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/epic-spinners/src/components/lib/SwappingSquaresSpinner.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  lib_SwappingSquaresSpinnervue_type_script_lang_js_,
  SwappingSquaresSpinnervue_type_template_id_8265a670_scoped_true_render,
  SwappingSquaresSpinnervue_type_template_id_8265a670_scoped_true_staticRenderFns,
  false,
  null,
  "8265a670",
  null
  
)

/* harmony default export */ var SwappingSquaresSpinner = (component.exports);
// CONCATENATED MODULE: C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/vue-loader/lib??vue-loader-options!./src/components/SwappingSquaresSpinner.vue?vue&type=script&lang=js&
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




/* harmony default export */ var components_SwappingSquaresSpinnervue_type_script_lang_js_ = ({
  name: "SwappingSquaresSpinnerWrapper",
  mixins: [MixinComponent["a" /* default */]],
  components: {
    SwappingSquaresSpinner: SwappingSquaresSpinner
  }
});

// CONCATENATED MODULE: ./src/components/SwappingSquaresSpinner.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_components_SwappingSquaresSpinnervue_type_script_lang_js_ = (components_SwappingSquaresSpinnervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/SwappingSquaresSpinner.vue





/* normalize component */

var SwappingSquaresSpinner_component = Object(componentNormalizer["a" /* default */])(
  src_components_SwappingSquaresSpinnervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var components_SwappingSquaresSpinner = __webpack_exports__["a"] = (SwappingSquaresSpinner_component.exports);

/***/ }),

/***/ "a1b7":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("3c10");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".fingerprint-spinner[data-v-077ae5a6],.fingerprint-spinner *[data-v-077ae5a6]{-webkit-box-sizing:border-box;box-sizing:border-box}.fingerprint-spinner[data-v-077ae5a6]{height:64px;width:64px;padding:2px;overflow:hidden;position:relative}.fingerprint-spinner .spinner-ring[data-v-077ae5a6]{position:absolute;border-radius:50%;border:2px solid transparent;border-top-color:#ff1d5e;-webkit-animation:fingerprint-spinner-animation-data-v-077ae5a6 1.5s cubic-bezier(.68,-.75,.265,1.75) infinite forwards;animation:fingerprint-spinner-animation-data-v-077ae5a6 1.5s cubic-bezier(.68,-.75,.265,1.75) infinite forwards;margin:auto;bottom:0;left:0;right:0;top:0}.fingerprint-spinner .spinner-ring[data-v-077ae5a6]:first-child{height:6.66667px;width:6.66667px;-webkit-animation-delay:50ms;animation-delay:50ms}.fingerprint-spinner .spinner-ring[data-v-077ae5a6]:nth-child(2){height:13.33334px;width:13.33334px;-webkit-animation-delay:.1s;animation-delay:.1s}.fingerprint-spinner .spinner-ring[data-v-077ae5a6]:nth-child(3){height:20px;width:20px;-webkit-animation-delay:.15s;animation-delay:.15s}.fingerprint-spinner .spinner-ring[data-v-077ae5a6]:nth-child(4){height:26.66667px;width:26.66667px;-webkit-animation-delay:.2s;animation-delay:.2s}.fingerprint-spinner .spinner-ring[data-v-077ae5a6]:nth-child(5){height:33.33334px;width:33.33334px;-webkit-animation-delay:.25s;animation-delay:.25s}.fingerprint-spinner .spinner-ring[data-v-077ae5a6]:nth-child(6){height:40px;width:40px;-webkit-animation-delay:.3s;animation-delay:.3s}.fingerprint-spinner .spinner-ring[data-v-077ae5a6]:nth-child(7){height:46.66667px;width:46.66667px;-webkit-animation-delay:.35s;animation-delay:.35s}.fingerprint-spinner .spinner-ring[data-v-077ae5a6]:nth-child(8){height:53.33334px;width:53.33334px;-webkit-animation-delay:.4s;animation-delay:.4s}.fingerprint-spinner .spinner-ring[data-v-077ae5a6]:nth-child(9){height:60px;width:60px;-webkit-animation-delay:.45s;animation-delay:.45s}@-webkit-keyframes fingerprint-spinner-animation-data-v-077ae5a6{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes fingerprint-spinner-animation-data-v-077ae5a6{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "a3f0":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("3c10");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".swapping-squares-spinner[data-v-8265a670],.swapping-squares-spinner *[data-v-8265a670]{-webkit-box-sizing:border-box;box-sizing:border-box}.swapping-squares-spinner[data-v-8265a670]{height:65px;width:65px;position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.swapping-squares-spinner .square[data-v-8265a670]{height:12.5px;width:12.5px;-webkit-animation-duration:1s;animation-duration:1s;border:2px solid #ff1d5e;margin-right:auto;margin-left:auto;position:absolute;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.swapping-squares-spinner .square[data-v-8265a670]:first-child{-webkit-animation-name:swapping-squares-animation-child-1-data-v-8265a670;animation-name:swapping-squares-animation-child-1-data-v-8265a670;-webkit-animation-delay:.5s;animation-delay:.5s}.swapping-squares-spinner .square[data-v-8265a670]:nth-child(2){-webkit-animation-name:swapping-squares-animation-child-2-data-v-8265a670;animation-name:swapping-squares-animation-child-2-data-v-8265a670;-webkit-animation-delay:0ms;animation-delay:0ms}.swapping-squares-spinner .square[data-v-8265a670]:nth-child(3){-webkit-animation-name:swapping-squares-animation-child-3-data-v-8265a670;animation-name:swapping-squares-animation-child-3-data-v-8265a670;-webkit-animation-delay:.5s;animation-delay:.5s}.swapping-squares-spinner .square[data-v-8265a670]:nth-child(4){-webkit-animation-name:swapping-squares-animation-child-4-data-v-8265a670;animation-name:swapping-squares-animation-child-4-data-v-8265a670;-webkit-animation-delay:0ms;animation-delay:0ms}@-webkit-keyframes swapping-squares-animation-child-1-data-v-8265a670{50%{-webkit-transform:translate(150%,150%) scale(2);transform:translate(150%,150%) scale(2)}}@keyframes swapping-squares-animation-child-1-data-v-8265a670{50%{-webkit-transform:translate(150%,150%) scale(2);transform:translate(150%,150%) scale(2)}}@-webkit-keyframes swapping-squares-animation-child-2-data-v-8265a670{50%{-webkit-transform:translate(-150%,150%) scale(2);transform:translate(-150%,150%) scale(2)}}@keyframes swapping-squares-animation-child-2-data-v-8265a670{50%{-webkit-transform:translate(-150%,150%) scale(2);transform:translate(-150%,150%) scale(2)}}@-webkit-keyframes swapping-squares-animation-child-3-data-v-8265a670{50%{-webkit-transform:translate(-150%,-150%) scale(2);transform:translate(-150%,-150%) scale(2)}}@keyframes swapping-squares-animation-child-3-data-v-8265a670{50%{-webkit-transform:translate(-150%,-150%) scale(2);transform:translate(-150%,-150%) scale(2)}}@-webkit-keyframes swapping-squares-animation-child-4-data-v-8265a670{50%{-webkit-transform:translate(150%,-150%) scale(2);transform:translate(150%,-150%) scale(2)}}@keyframes swapping-squares-animation-child-4-data-v-8265a670{50%{-webkit-transform:translate(150%,-150%) scale(2);transform:translate(150%,-150%) scale(2)}}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "a454":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"93ce6ae4-vue-loader-template"}!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/vue-loader/lib??vue-loader-options!./src/components/FlowerSpinner.vue?vue&type=template&id=d17e3e4a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('FlowerSpinner',{style:({
    position: 'absolute',
    left: (_vm.width - _vm.size) / 2 + 'px',
    top: (_vm.height - _vm.size) / 2 + 'px'
  }),attrs:{"animation-duration":_vm.animationDuration,"size":_vm.size,"color":_vm.color}})}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/FlowerSpinner.vue?vue&type=template&id=d17e3e4a&

// EXTERNAL MODULE: ./src/components/MixinComponent.js
var MixinComponent = __webpack_require__("d7a5");

// CONCATENATED MODULE: C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"93ce6ae4-vue-loader-template"}!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/vue-loader/lib??vue-loader-options!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/epic-spinners/src/components/lib/FlowerSpinner.vue?vue&type=template&id=f15101b8&scoped=true&
var FlowerSpinnervue_type_template_id_f15101b8_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"flower-spinner",style:(_vm.spinnerStyle)},[_c('div',{staticClass:"dots-container",style:(_vm.dotsContainerStyle)},[_c('div',{staticClass:"big-dot",style:(_vm.biggerDotStyle)},[_c('div',{staticClass:"small-dot",style:(_vm.smallerDotStyle)})])])])}
var FlowerSpinnervue_type_template_id_f15101b8_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/epic-spinners/src/components/lib/FlowerSpinner.vue?vue&type=template&id=f15101b8&scoped=true&

// EXTERNAL MODULE: C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/epic-spinners/src/services/utils.js
var utils = __webpack_require__("1cd7");

// CONCATENATED MODULE: C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/vue-loader/lib??vue-loader-options!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/epic-spinners/src/components/lib/FlowerSpinner.vue?vue&type=script&lang=js&
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



/* harmony default export */ var FlowerSpinnervue_type_script_lang_js_ = ({
  name: 'FlowerSpinner',

  props: {
    animationDuration: {
      type: Number,
      default: 2500
    },
    size: {
      type: Number,
      default: 70
    },
    color: {
      type: String,
      default: '#fff'
    }
  },

  data () {
    return {
      smallDotName: `flower-spinner-small-dot-${Date.now()}`,
      bigDotName: `flower-spinner-big-dot-${Date.now()}`
    }
  },

  computed: {
    dotSize () {
      return this.size / 7
    },

    spinnerStyle () {
      return {
        width: `${this.size}px`,
        height: `${this.size}px`
      }
    },

    dotsContainerStyle () {
      return {
        width: `${this.dotSize}px`,
        height: `${this.dotSize}px`
      }
    },

    smallerDotStyle () {
      return {
        background: this.color,
        animationDuration: `${this.animationDuration}ms`,
        animationName: this.smallDotName
      }
    },

    biggerDotStyle () {
      return {
        background: this.color,
        animationDuration: `${this.animationDuration}ms`,
        animationName: this.bigDotName
      }
    }
  },

  watch: {
    size: {
      handler: 'updateAnimation',
      immediate: true
    },
    color: {
      handler: 'updateAnimation',
      immediate: true
    }
  },

  beforeDestroy () {
    utils["a" /* default */].removeKeyframes(this.smallDotName)
    utils["a" /* default */].removeKeyframes(this.bigDotName)
  },

  methods: {
    updateAnimation () {
      utils["a" /* default */].removeKeyframes(this.smallDotName)
      utils["a" /* default */].appendKeyframes(this.smallDotName, this.generateSmallDotKeyframes())
      utils["a" /* default */].removeKeyframes(this.bigDotName)
      utils["a" /* default */].appendKeyframes(this.bigDotName, this.generateBigDotKeyframes())
    },

    generateSmallDotKeyframes () {
      return `0%, 100% {
                  box-shadow: 0 0 0 ${this.color},
                              0 0 0 ${this.color},
                              0 0 0 ${this.color},
                              0 0 0 ${this.color},
                              0 0 0 ${this.color},
                              0 0 0 ${this.color},
                              0 0 0 ${this.color},
                              0 0 0 ${this.color};
                }
                25%, 75% {
                  box-shadow: ${this.dotSize * 1.4}px 0 0 ${this.color},
                              -${this.dotSize * 1.4}px 0 0 ${this.color},
                              0 ${this.dotSize * 1.4}px 0 ${this.color},
                              0 -${this.dotSize * 1.4}px 0 ${this.color},
                              ${this.dotSize}px -${this.dotSize}px 0 ${this.color},
                              ${this.dotSize}px ${this.dotSize}px 0 ${this.color},
                              -${this.dotSize}px -${this.dotSize}px 0 ${this.color},
                              -${this.dotSize}px ${this.dotSize}px 0 ${this.color};

                }
                100% {
                  box-shadow: 0 0 0 ${this.color},
                              0 0 0 ${this.color},
                              0 0 0 ${this.color},
                              0 0 0 ${this.color},
                              0 0 0 ${this.color},
                              0 0 0 ${this.color},
                              0 0 0 ${this.color},
                              0 0 0 ${this.color};
                }`
    },

    generateBigDotKeyframes () {
      return `0%, 100% {
                  box-shadow: 0 0 0 ${this.color},
                              0 0 0 ${this.color},
                              0 0 0 ${this.color},
                              0 0 0 ${this.color},
                              0 0 0 ${this.color},
                              0 0 0 ${this.color},
                              0 0 0 ${this.color},
                              0 0 0 ${this.color};
                }
                50% {
                  transform: rotate(180deg);
                }
                25%, 75% {
                  box-shadow: ${this.dotSize * 2.6}px 0 0 ${this.color},
                              -${this.dotSize * 2.6}px 0 0 ${this.color},
                              0 ${this.dotSize * 2.6}px 0 ${this.color},
                              0 -${this.dotSize * 2.6}px 0 ${this.color},
                              ${this.dotSize * 1.9}px -${this.dotSize * 1.9}px 0 ${this.color},
                              ${this.dotSize * 1.9}px ${this.dotSize * 1.9}px 0 ${this.color},
                              -${this.dotSize * 1.9}px -${this.dotSize * 1.9}px 0 ${this.color},
                              -${this.dotSize * 1.9}px ${this.dotSize * 1.9}px 0 ${this.color};

                }
                100% {
                  transform: rotate(360deg);
                  box-shadow: 0 0 0 ${this.color},
                              0 0 0 ${this.color},
                              0 0 0 ${this.color},
                              0 0 0 ${this.color},
                              0 0 0 ${this.color},
                              0 0 0 ${this.color},
                              0 0 0 ${this.color},
                              0 0 0 ${this.color};
                }`
    }
  }
});

// CONCATENATED MODULE: C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/epic-spinners/src/components/lib/FlowerSpinner.vue?vue&type=script&lang=js&
 /* harmony default export */ var lib_FlowerSpinnervue_type_script_lang_js_ = (FlowerSpinnervue_type_script_lang_js_); 
// EXTERNAL MODULE: C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/epic-spinners/src/components/lib/FlowerSpinner.vue?vue&type=style&index=0&id=f15101b8&scoped=true&lang=css&
var FlowerSpinnervue_type_style_index_0_id_f15101b8_scoped_true_lang_css_ = __webpack_require__("8ed6");

// EXTERNAL MODULE: C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2be6");

// CONCATENATED MODULE: C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/epic-spinners/src/components/lib/FlowerSpinner.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  lib_FlowerSpinnervue_type_script_lang_js_,
  FlowerSpinnervue_type_template_id_f15101b8_scoped_true_render,
  FlowerSpinnervue_type_template_id_f15101b8_scoped_true_staticRenderFns,
  false,
  null,
  "f15101b8",
  null
  
)

/* harmony default export */ var FlowerSpinner = (component.exports);
// CONCATENATED MODULE: C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/vue-loader/lib??vue-loader-options!./src/components/FlowerSpinner.vue?vue&type=script&lang=js&
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




/* harmony default export */ var components_FlowerSpinnervue_type_script_lang_js_ = ({
  name: "FlowerSpinnerWrapper",
  mixins: [MixinComponent["a" /* default */]],
  components: {
    FlowerSpinner: FlowerSpinner
  }
});

// CONCATENATED MODULE: ./src/components/FlowerSpinner.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_components_FlowerSpinnervue_type_script_lang_js_ = (components_FlowerSpinnervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/FlowerSpinner.vue





/* normalize component */

var FlowerSpinner_component = Object(componentNormalizer["a" /* default */])(
  src_components_FlowerSpinnervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var components_FlowerSpinner = __webpack_exports__["a"] = (FlowerSpinner_component.exports);

/***/ }),

/***/ "a51a":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("060d");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("0ed3").default
var update = add("f1c4f4c8", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "a735":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("e017");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("0ed3").default
var update = add("c6869544", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "b567":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"93ce6ae4-vue-loader-template"}!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/vue-loader/lib??vue-loader-options!./src/components/SelfBuildingSquareSpinner.vue?vue&type=template&id=f12c4652&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('SelfBuildingSquareSpinner',{style:({
    position: 'absolute',
    left: (_vm.width - _vm.size) / 2 + 'px',
    top: (_vm.height - _vm.size) / 2 + 'px'
  }),attrs:{"animation-duration":_vm.animationDuration,"size":_vm.size,"color":_vm.color}})}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/SelfBuildingSquareSpinner.vue?vue&type=template&id=f12c4652&

// EXTERNAL MODULE: ./src/components/MixinComponent.js
var MixinComponent = __webpack_require__("d7a5");

// CONCATENATED MODULE: C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"93ce6ae4-vue-loader-template"}!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/vue-loader/lib??vue-loader-options!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/epic-spinners/src/components/lib/SelfBuildingSquareSpinner.vue?vue&type=template&id=eb840b8e&scoped=true&
var SelfBuildingSquareSpinnervue_type_template_id_eb840b8e_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"self-building-square-spinner",style:(_vm.spinnerStyle)},_vm._l((_vm.squaresStyles),function(ss,index){return _c('div',{key:index,staticClass:"square",class:{'clear': index && index % 3 === 0},style:(ss)})}),0)}
var SelfBuildingSquareSpinnervue_type_template_id_eb840b8e_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/epic-spinners/src/components/lib/SelfBuildingSquareSpinner.vue?vue&type=template&id=eb840b8e&scoped=true&

// CONCATENATED MODULE: C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/vue-loader/lib??vue-loader-options!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/epic-spinners/src/components/lib/SelfBuildingSquareSpinner.vue?vue&type=script&lang=js&
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

/* harmony default export */ var SelfBuildingSquareSpinnervue_type_script_lang_js_ = ({
  name: 'SelfBuildingSquareSpinner',

  props: {
    animationDuration: {
      type: Number,
      default: 6000
    },
    size: {
      type: Number,
      default: 40
    },
    color: {
      type: String,
      default: '#fff'
    }
  },

  data () {
    return {
      squaresNum: 9
    }
  },

  computed: {
    squareSize () {
      return this.size / 4
    },

    initialTopPosition () {
      return -this.squareSize * 2 / 3
    },

    spinnerStyle () {
      return {
        top: `${-this.initialTopPosition}px`,
        height: `${this.size}px`,
        width: `${this.size}px`
      }
    },

    squareStyle () {
      return {
        height: `${this.squareSize}px`,
        width: `${this.squareSize}px`,
        top: `${this.initialTopPosition}px`,
        marginRight: `${this.squareSize / 3}px`,
        marginTop: `${this.squareSize / 3}px`,
        animationDuration: `${this.animationDuration}ms`,
        background: this.color
      }
    },

    squaresStyles () {
      const squaresStyles = []
      const delaysMultipliers = [6, 7, 8, 3, 4, 5, 0, 1, 2]
      const delayModifier = this.animationDuration * 0.05

      for (let i = 0; i < this.squaresNum; i++) {
        squaresStyles.push(Object.assign({
          animationDelay: `${delayModifier * delaysMultipliers[i]}ms`
        }, this.squareStyle))
      }

      return squaresStyles
    }
  }
});

// CONCATENATED MODULE: C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/epic-spinners/src/components/lib/SelfBuildingSquareSpinner.vue?vue&type=script&lang=js&
 /* harmony default export */ var lib_SelfBuildingSquareSpinnervue_type_script_lang_js_ = (SelfBuildingSquareSpinnervue_type_script_lang_js_); 
// EXTERNAL MODULE: C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/epic-spinners/src/components/lib/SelfBuildingSquareSpinner.vue?vue&type=style&index=0&id=eb840b8e&scoped=true&lang=css&
var SelfBuildingSquareSpinnervue_type_style_index_0_id_eb840b8e_scoped_true_lang_css_ = __webpack_require__("1d1a");

// EXTERNAL MODULE: C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2be6");

// CONCATENATED MODULE: C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/epic-spinners/src/components/lib/SelfBuildingSquareSpinner.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  lib_SelfBuildingSquareSpinnervue_type_script_lang_js_,
  SelfBuildingSquareSpinnervue_type_template_id_eb840b8e_scoped_true_render,
  SelfBuildingSquareSpinnervue_type_template_id_eb840b8e_scoped_true_staticRenderFns,
  false,
  null,
  "eb840b8e",
  null
  
)

/* harmony default export */ var SelfBuildingSquareSpinner = (component.exports);
// CONCATENATED MODULE: C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/vue-loader/lib??vue-loader-options!./src/components/SelfBuildingSquareSpinner.vue?vue&type=script&lang=js&
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




/* harmony default export */ var components_SelfBuildingSquareSpinnervue_type_script_lang_js_ = ({
  name: "SelfBuildingSquareSpinnerWrapper",
  mixins: [MixinComponent["a" /* default */]],
  components: {
    SelfBuildingSquareSpinner: SelfBuildingSquareSpinner
  }
});

// CONCATENATED MODULE: ./src/components/SelfBuildingSquareSpinner.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_components_SelfBuildingSquareSpinnervue_type_script_lang_js_ = (components_SelfBuildingSquareSpinnervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/SelfBuildingSquareSpinner.vue





/* normalize component */

var SelfBuildingSquareSpinner_component = Object(componentNormalizer["a" /* default */])(
  src_components_SelfBuildingSquareSpinnervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var components_SelfBuildingSquareSpinner = __webpack_exports__["a"] = (SelfBuildingSquareSpinner_component.exports);

/***/ }),

/***/ "b684":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"93ce6ae4-vue-loader-template"}!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/vue-loader/lib??vue-loader-options!./src/components/IntersectingCirclesSpinner.vue?vue&type=template&id=18ff76e1&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('IntersectingCirclesSpinner',{style:({
    position: 'absolute',
    left: (_vm.width - _vm.size) / 2 + 'px',
    top: (_vm.height - _vm.size) / 2 + 'px'
  }),attrs:{"animation-duration":_vm.animationDuration,"size":_vm.size,"color":_vm.color}})}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/IntersectingCirclesSpinner.vue?vue&type=template&id=18ff76e1&

// EXTERNAL MODULE: ./src/components/MixinComponent.js
var MixinComponent = __webpack_require__("d7a5");

// CONCATENATED MODULE: C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"93ce6ae4-vue-loader-template"}!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/vue-loader/lib??vue-loader-options!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/epic-spinners/src/components/lib/IntersectingCirclesSpinner.vue?vue&type=template&id=91c71956&scoped=true&
var IntersectingCirclesSpinnervue_type_template_id_91c71956_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"intersecting-circles-spinner",style:(_vm.spinnerStyle)},[_c('div',{staticClass:"spinnerBlock",style:(_vm.spinnerBlockStyle)},_vm._l((_vm.circleStyles),function(cs,index){return _c('span',{key:index,staticClass:"circle",style:(cs)})}),0)])}
var IntersectingCirclesSpinnervue_type_template_id_91c71956_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/epic-spinners/src/components/lib/IntersectingCirclesSpinner.vue?vue&type=template&id=91c71956&scoped=true&

// CONCATENATED MODULE: C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/vue-loader/lib??vue-loader-options!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/epic-spinners/src/components/lib/IntersectingCirclesSpinner.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//

/* harmony default export */ var IntersectingCirclesSpinnervue_type_script_lang_js_ = ({
  name: 'IntersectingCirclesSpinner',

  props: {
    animationDuration: {
      type: Number,
      default: 1200
    },
    size: {
      type: Number,
      default: 70
    },
    color: {
      type: String,
      default: '#fff'
    }
  },

  computed: {
    circleSize () {
      return this.size / 2
    },

    spinnerStyle () {
      return {
        width: `${this.size}px`,
        height: `${this.size}px`
      }
    },

    spinnerBlockStyle () {
      return {
        animationDuration: `${this.animationDuration}ms`,
        width: `${this.circleSize}px`,
        height: `${this.circleSize}px`
      }
    },

    circleStyle () {
      return {
        borderColor: this.color
      }
    },

    circleStyles () {
      const circlesPositions = [
        {top: 0, left: 0},
        {left: `${this.circleSize * -0.36}px`, top: `${this.circleSize * 0.2}px`},
        {left: `${this.circleSize * -0.36}px`, top: `${this.circleSize * -0.2}px`},
        {left: 0, top: `${this.circleSize * -0.36}px`},
        {left: `${this.circleSize * 0.36}px`, top: `${this.circleSize * -0.2}px`},
        {left: `${this.circleSize * 0.36}px`, top: `${this.circleSize * 0.2}px`},
        {left: 0, top: `${this.circleSize * 0.36}px`}
      ]

      return circlesPositions.map((cp) => Object.assign(cp, this.circleStyle))
    }
  }
});

// CONCATENATED MODULE: C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/epic-spinners/src/components/lib/IntersectingCirclesSpinner.vue?vue&type=script&lang=js&
 /* harmony default export */ var lib_IntersectingCirclesSpinnervue_type_script_lang_js_ = (IntersectingCirclesSpinnervue_type_script_lang_js_); 
// EXTERNAL MODULE: C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/epic-spinners/src/components/lib/IntersectingCirclesSpinner.vue?vue&type=style&index=0&id=91c71956&scoped=true&lang=css&
var IntersectingCirclesSpinnervue_type_style_index_0_id_91c71956_scoped_true_lang_css_ = __webpack_require__("93db");

// EXTERNAL MODULE: C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2be6");

// CONCATENATED MODULE: C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/epic-spinners/src/components/lib/IntersectingCirclesSpinner.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  lib_IntersectingCirclesSpinnervue_type_script_lang_js_,
  IntersectingCirclesSpinnervue_type_template_id_91c71956_scoped_true_render,
  IntersectingCirclesSpinnervue_type_template_id_91c71956_scoped_true_staticRenderFns,
  false,
  null,
  "91c71956",
  null
  
)

/* harmony default export */ var IntersectingCirclesSpinner = (component.exports);
// CONCATENATED MODULE: C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/vue-loader/lib??vue-loader-options!./src/components/IntersectingCirclesSpinner.vue?vue&type=script&lang=js&
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




/* harmony default export */ var components_IntersectingCirclesSpinnervue_type_script_lang_js_ = ({
  name: "IntersectingCirclesSpinnerWrapper",
  mixins: [MixinComponent["a" /* default */]],
  components: {
    IntersectingCirclesSpinner: IntersectingCirclesSpinner
  }
});

// CONCATENATED MODULE: ./src/components/IntersectingCirclesSpinner.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_components_IntersectingCirclesSpinnervue_type_script_lang_js_ = (components_IntersectingCirclesSpinnervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/IntersectingCirclesSpinner.vue





/* normalize component */

var IntersectingCirclesSpinner_component = Object(componentNormalizer["a" /* default */])(
  src_components_IntersectingCirclesSpinnervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var components_IntersectingCirclesSpinner = __webpack_exports__["a"] = (IntersectingCirclesSpinner_component.exports);

/***/ }),

/***/ "b722":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("4ebb");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("0ed3").default
var update = add("0eecb302", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "bb3d":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("a1b7");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("0ed3").default
var update = add("08d8560d", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "bc02":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("3c10");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".looping-rhombuses-spinner[data-v-49d9ad28],.looping-rhombuses-spinner *[data-v-49d9ad28]{-webkit-box-sizing:border-box;box-sizing:border-box}.looping-rhombuses-spinner[data-v-49d9ad28]{width:60px;height:15px;position:relative}.looping-rhombuses-spinner .rhombus[data-v-49d9ad28]{height:15px;width:15px;background-color:#ff1d5e;left:60px;position:absolute;margin:0 auto;border-radius:2px;-webkit-transform:translateY(0) rotate(45deg) scale(0);transform:translateY(0) rotate(45deg) scale(0);-webkit-animation:looping-rhombuses-spinner-animation-data-v-49d9ad28 2.5s linear infinite;animation:looping-rhombuses-spinner-animation-data-v-49d9ad28 2.5s linear infinite}.looping-rhombuses-spinner .rhombus[data-v-49d9ad28]:first-child{-webkit-animation-delay:-1666.66667ms;animation-delay:-1666.66667ms}.looping-rhombuses-spinner .rhombus[data-v-49d9ad28]:nth-child(2){-webkit-animation-delay:-3.33333333s;animation-delay:-3.33333333s}.looping-rhombuses-spinner .rhombus[data-v-49d9ad28]:nth-child(3){-webkit-animation-delay:-5s;animation-delay:-5s}@-webkit-keyframes looping-rhombuses-spinner-animation-data-v-49d9ad28{0%{-webkit-transform:translateX(0) rotate(45deg) scale(0);transform:translateX(0) rotate(45deg) scale(0)}50%{-webkit-transform:translateX(-233%) rotate(45deg) scale(1);transform:translateX(-233%) rotate(45deg) scale(1)}to{-webkit-transform:translateX(-466%) rotate(45deg) scale(0);transform:translateX(-466%) rotate(45deg) scale(0)}}@keyframes looping-rhombuses-spinner-animation-data-v-49d9ad28{0%{-webkit-transform:translateX(0) rotate(45deg) scale(0);transform:translateX(0) rotate(45deg) scale(0)}50%{-webkit-transform:translateX(-233%) rotate(45deg) scale(1);transform:translateX(-233%) rotate(45deg) scale(1)}to{-webkit-transform:translateX(-466%) rotate(45deg) scale(0);transform:translateX(-466%) rotate(45deg) scale(0)}}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "be27":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _vue_style_loader_index_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_postcss_loader_src_index_js_ref_6_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_ScalingSquaresSpinner_vue_vue_type_style_index_0_id_dbacb9de_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4439");
/* harmony import */ var _vue_style_loader_index_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_postcss_loader_src_index_js_ref_6_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_ScalingSquaresSpinner_vue_vue_type_style_index_0_id_dbacb9de_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_style_loader_index_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_postcss_loader_src_index_js_ref_6_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_ScalingSquaresSpinner_vue_vue_type_style_index_0_id_dbacb9de_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_vue_style_loader_index_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_postcss_loader_src_index_js_ref_6_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_ScalingSquaresSpinner_vue_vue_type_style_index_0_id_dbacb9de_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "be7d":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("02a2");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("0ed3").default
var update = add("56ca5ed8", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "c32a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _vue_style_loader_index_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_postcss_loader_src_index_js_ref_6_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_TrinityRingsSpinner_vue_vue_type_style_index_0_id_19bbdf0e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("a735");
/* harmony import */ var _vue_style_loader_index_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_postcss_loader_src_index_js_ref_6_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_TrinityRingsSpinner_vue_vue_type_style_index_0_id_19bbdf0e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_style_loader_index_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_postcss_loader_src_index_js_ref_6_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_TrinityRingsSpinner_vue_vue_type_style_index_0_id_19bbdf0e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_vue_style_loader_index_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_postcss_loader_src_index_js_ref_6_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_TrinityRingsSpinner_vue_vue_type_style_index_0_id_19bbdf0e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "c49d":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("2a57");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("0ed3").default
var update = add("b1821652", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "c8ee":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"93ce6ae4-vue-loader-template"}!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/vue-loader/lib??vue-loader-options!./src/components/RadarSpinner.vue?vue&type=template&id=71f45dee&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('RadarSpinner',{style:({
    position: 'absolute',
    left: (_vm.width - _vm.size) / 2 + 'px',
    top: (_vm.height - _vm.size) / 2 + 'px'
  }),attrs:{"animation-duration":_vm.animationDuration,"size":_vm.size,"color":_vm.color}})}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/RadarSpinner.vue?vue&type=template&id=71f45dee&

// EXTERNAL MODULE: ./src/components/MixinComponent.js
var MixinComponent = __webpack_require__("d7a5");

// CONCATENATED MODULE: C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"93ce6ae4-vue-loader-template"}!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/vue-loader/lib??vue-loader-options!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/epic-spinners/src/components/lib/RadarSpinner.vue?vue&type=template&id=5710a196&scoped=true&
var RadarSpinnervue_type_template_id_5710a196_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"radar-spinner",style:(_vm.spinnerStyle)},_vm._l((_vm.circlesStyles),function(cs,index){return _c('div',{key:index,staticClass:"circle",style:(cs)},[_c('div',{staticClass:"circle-inner-container",style:(_vm.circleInnerContainerStyle)},[_c('div',{staticClass:"circle-inner",style:(_vm.circleInnerStyle)})])])}),0)}
var RadarSpinnervue_type_template_id_5710a196_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/epic-spinners/src/components/lib/RadarSpinner.vue?vue&type=template&id=5710a196&scoped=true&

// CONCATENATED MODULE: C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/vue-loader/lib??vue-loader-options!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/epic-spinners/src/components/lib/RadarSpinner.vue?vue&type=script&lang=js&
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

/* harmony default export */ var RadarSpinnervue_type_script_lang_js_ = ({
  name: 'RadarSpinner',

  props: {
    animationDuration: {
      type: Number,
      default: 2000
    },
    size: {
      type: Number,
      default: 110
    },
    color: {
      type: String,
      default: '#fff'
    }
  },

  data () {
    return {
      circlesNum: 4
    }
  },

  computed: {
    borderWidth () {
      return this.size * 5 / 110
    },

    spinnerStyle () {
      return {
        height: `${this.size}px`,
        width: `${this.size}px`
      }
    },

    circleStyle () {
      return {
        animationDuration: `${this.animationDuration}ms`
      }
    },

    circleInnerContainerStyle () {
      return {
        borderWidth: `${this.borderWidth}px`
      }
    },

    circleInnerStyle () {
      return {
        borderLeftColor: this.color,
        borderRightColor: this.color,
        borderWidth: `${this.borderWidth}px`
      }
    },

    circlesStyles () {
      const circlesStyles = []
      const delay = this.animationDuration * 0.15

      for (let i = 0; i < this.circlesNum; i++) {
        circlesStyles.push(Object.assign({
          padding: `${this.borderWidth * 2 * i}px`,
          animationDelay: `${i === this.circlesNum - 1 ? 0 : delay}ms`
        }, this.circleStyle))
      }

      return circlesStyles
    }
  }
});

// CONCATENATED MODULE: C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/epic-spinners/src/components/lib/RadarSpinner.vue?vue&type=script&lang=js&
 /* harmony default export */ var lib_RadarSpinnervue_type_script_lang_js_ = (RadarSpinnervue_type_script_lang_js_); 
// EXTERNAL MODULE: C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/epic-spinners/src/components/lib/RadarSpinner.vue?vue&type=style&index=0&id=5710a196&scoped=true&lang=css&
var RadarSpinnervue_type_style_index_0_id_5710a196_scoped_true_lang_css_ = __webpack_require__("65a8");

// EXTERNAL MODULE: C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2be6");

// CONCATENATED MODULE: C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/epic-spinners/src/components/lib/RadarSpinner.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  lib_RadarSpinnervue_type_script_lang_js_,
  RadarSpinnervue_type_template_id_5710a196_scoped_true_render,
  RadarSpinnervue_type_template_id_5710a196_scoped_true_staticRenderFns,
  false,
  null,
  "5710a196",
  null
  
)

/* harmony default export */ var RadarSpinner = (component.exports);
// CONCATENATED MODULE: C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/vue-loader/lib??vue-loader-options!./src/components/RadarSpinner.vue?vue&type=script&lang=js&
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




/* harmony default export */ var components_RadarSpinnervue_type_script_lang_js_ = ({
  name: "RadarSpinnerWrapper",
  mixins: [MixinComponent["a" /* default */]],
  components: {
    RadarSpinner: RadarSpinner
  }
});

// CONCATENATED MODULE: ./src/components/RadarSpinner.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_components_RadarSpinnervue_type_script_lang_js_ = (components_RadarSpinnervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/RadarSpinner.vue





/* normalize component */

var RadarSpinner_component = Object(componentNormalizer["a" /* default */])(
  src_components_RadarSpinnervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var components_RadarSpinner = __webpack_exports__["a"] = (RadarSpinner_component.exports);

/***/ }),

/***/ "c95f":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("0d2c");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("0ed3").default
var update = add("2221e8ba", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "c965":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("55d8");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("0ed3").default
var update = add("05536156", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "ca9e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"93ce6ae4-vue-loader-template"}!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/vue-loader/lib??vue-loader-options!./src/components/LoopingRhombusesSpinner.vue?vue&type=template&id=36c9f6c4&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('LoopingRhombusesSpinner',{style:({
    position: 'absolute',
    left: (_vm.width - _vm.spinnerWidth) / 2 + 'px',
    top: (_vm.height - _vm.rhombusSize) / 2 + 'px',
  }),attrs:{"animation-duration":_vm.animationDuration,"size":_vm.size,"color":_vm.color}})}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/LoopingRhombusesSpinner.vue?vue&type=template&id=36c9f6c4&

// EXTERNAL MODULE: ./src/components/MixinComponent.js
var MixinComponent = __webpack_require__("d7a5");

// CONCATENATED MODULE: C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"93ce6ae4-vue-loader-template"}!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/vue-loader/lib??vue-loader-options!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/epic-spinners/src/components/lib/LoopingRhombusesSpinner.vue?vue&type=template&id=49d9ad28&scoped=true&
var LoopingRhombusesSpinnervue_type_template_id_49d9ad28_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"looping-rhombuses-spinner",style:(_vm.spinnerStyle)},_vm._l((_vm.rhombusesStyles),function(rs,index){return _c('div',{staticClass:"rhombus",style:(rs),attrs:{"ikey":index}})}),0)}
var LoopingRhombusesSpinnervue_type_template_id_49d9ad28_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/epic-spinners/src/components/lib/LoopingRhombusesSpinner.vue?vue&type=template&id=49d9ad28&scoped=true&

// CONCATENATED MODULE: C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/vue-loader/lib??vue-loader-options!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/epic-spinners/src/components/lib/LoopingRhombusesSpinner.vue?vue&type=script&lang=js&
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

/* harmony default export */ var LoopingRhombusesSpinnervue_type_script_lang_js_ = ({
  name: 'LoopingRhombusesSpinner',

  props: {
    animationDuration: {
      type: Number,
      default: 2500
    },
    rhombusSize: {
      type: Number,
      default: 15
    },
    color: {
      type: String,
      default: '#fff'
    }
  },

  data () {
    return {
      rhombusesNum: 3
    }
  },

  computed: {
    spinnerStyle () {
      return {
        height: `${this.rhombusSize}px`,
        width: `${this.rhombusSize * 4}px`
      }
    },

    rhombusStyle () {
      return {
        height: `${this.rhombusSize}px`,
        width: `${this.rhombusSize}px`,
        backgroundColor: this.color,
        animationDuration: `${this.animationDuration}ms`,
        left: `${this.rhombusSize * 4}px`
      }
    },

    rhombusesStyles () {
      const rhombusesStyles = []
      const delay = -this.animationDuration / 1.5

      for (let i = 1; i <= this.rhombusesNum; i++) {
        const style = Object.assign({
          animationDelay: `${i * delay}ms`
        }, this.rhombusStyle)

        rhombusesStyles.push(style)
      }

      return rhombusesStyles
    }
  }
});

// CONCATENATED MODULE: C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/epic-spinners/src/components/lib/LoopingRhombusesSpinner.vue?vue&type=script&lang=js&
 /* harmony default export */ var lib_LoopingRhombusesSpinnervue_type_script_lang_js_ = (LoopingRhombusesSpinnervue_type_script_lang_js_); 
// EXTERNAL MODULE: C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/epic-spinners/src/components/lib/LoopingRhombusesSpinner.vue?vue&type=style&index=0&id=49d9ad28&scoped=true&lang=css&
var LoopingRhombusesSpinnervue_type_style_index_0_id_49d9ad28_scoped_true_lang_css_ = __webpack_require__("447c");

// EXTERNAL MODULE: C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2be6");

// CONCATENATED MODULE: C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/epic-spinners/src/components/lib/LoopingRhombusesSpinner.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  lib_LoopingRhombusesSpinnervue_type_script_lang_js_,
  LoopingRhombusesSpinnervue_type_template_id_49d9ad28_scoped_true_render,
  LoopingRhombusesSpinnervue_type_template_id_49d9ad28_scoped_true_staticRenderFns,
  false,
  null,
  "49d9ad28",
  null
  
)

/* harmony default export */ var LoopingRhombusesSpinner = (component.exports);
// CONCATENATED MODULE: C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/vue-loader/lib??vue-loader-options!./src/components/LoopingRhombusesSpinner.vue?vue&type=script&lang=js&
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




/* harmony default export */ var components_LoopingRhombusesSpinnervue_type_script_lang_js_ = ({
  name: "LoopingRhombusesSpinnerWrapper",
  mixins: [MixinComponent["a" /* default */]],
  components: {
    LoopingRhombusesSpinner: LoopingRhombusesSpinner,
  },
  props: {
    rhombusSize: {
      type: Number,
      default: 15,
    },
  },
  computed: {
    spinnerWidth() {
      return this.rhombusSize * 4;
    },
  },
});

// CONCATENATED MODULE: ./src/components/LoopingRhombusesSpinner.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_components_LoopingRhombusesSpinnervue_type_script_lang_js_ = (components_LoopingRhombusesSpinnervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/LoopingRhombusesSpinner.vue





/* normalize component */

var LoopingRhombusesSpinner_component = Object(componentNormalizer["a" /* default */])(
  src_components_LoopingRhombusesSpinnervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var components_LoopingRhombusesSpinner = __webpack_exports__["a"] = (LoopingRhombusesSpinner_component.exports);

/***/ }),

/***/ "d6e1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"93ce6ae4-vue-loader-template"}!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/vue-loader/lib??vue-loader-options!./src/components/FulfillingBouncingCircleSpinner.vue?vue&type=template&id=6d4fc2e3&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('FulfillingBouncingCircleSpinner',{style:({
    position: 'absolute',
    left: (_vm.width - _vm.size) / 2 + 'px',
    top: (_vm.height - _vm.size) / 2 + 'px'
  }),attrs:{"animation-duration":_vm.animationDuration,"size":_vm.size,"color":_vm.color}})}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/FulfillingBouncingCircleSpinner.vue?vue&type=template&id=6d4fc2e3&

// EXTERNAL MODULE: ./src/components/MixinComponent.js
var MixinComponent = __webpack_require__("d7a5");

// CONCATENATED MODULE: C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"93ce6ae4-vue-loader-template"}!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/vue-loader/lib??vue-loader-options!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/epic-spinners/src/components/lib/FulfillingBouncingCircleSpinner.vue?vue&type=template&id=e5e606d8&scoped=true&
var FulfillingBouncingCircleSpinnervue_type_template_id_e5e606d8_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"fulfilling-bouncing-circle-spinner",style:(_vm.spinnerStyle)},[_c('div',{staticClass:"circle",style:(_vm.circleStyle)}),_c('div',{staticClass:"orbit",style:(_vm.orbitStyle)})])}
var FulfillingBouncingCircleSpinnervue_type_template_id_e5e606d8_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/epic-spinners/src/components/lib/FulfillingBouncingCircleSpinner.vue?vue&type=template&id=e5e606d8&scoped=true&

// CONCATENATED MODULE: C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/vue-loader/lib??vue-loader-options!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/epic-spinners/src/components/lib/FulfillingBouncingCircleSpinner.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//

/* harmony default export */ var FulfillingBouncingCircleSpinnervue_type_script_lang_js_ = ({
  name: 'FulfillingBouncingCircleSpinner',

  props: {
    animationDuration: {
      type: Number,
      default: 4000
    },
    size: {
      type: Number,
      default: 60
    },
    color: {
      type: String,
      default: '#fff'
    }
  },

  computed: {
    spinnerStyle () {
      return {
        height: `${this.size}px`,
        width: `${this.size}px`,
        animationDuration: `${this.animationDuration}ms`
      }
    },

    orbitStyle () {
      return {
        height: `${this.size}px`,
        width: `${this.size}px`,
        borderColor: this.color,
        borderWidth: `${this.size * 0.03}px`,
        animationDuration: `${this.animationDuration}ms`
      }
    },

    circleStyle () {
      return {
        height: `${this.size}px`,
        width: `${this.size}px`,
        borderColor: this.color,
        color: this.color,
        borderWidth: `${this.size * 0.1}px`,
        animationDuration: `${this.animationDuration}ms`
      }
    }
  }
});

// CONCATENATED MODULE: C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/epic-spinners/src/components/lib/FulfillingBouncingCircleSpinner.vue?vue&type=script&lang=js&
 /* harmony default export */ var lib_FulfillingBouncingCircleSpinnervue_type_script_lang_js_ = (FulfillingBouncingCircleSpinnervue_type_script_lang_js_); 
// EXTERNAL MODULE: C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/epic-spinners/src/components/lib/FulfillingBouncingCircleSpinner.vue?vue&type=style&index=0&id=e5e606d8&scoped=true&lang=css&
var FulfillingBouncingCircleSpinnervue_type_style_index_0_id_e5e606d8_scoped_true_lang_css_ = __webpack_require__("fee1");

// EXTERNAL MODULE: C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2be6");

// CONCATENATED MODULE: C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/epic-spinners/src/components/lib/FulfillingBouncingCircleSpinner.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  lib_FulfillingBouncingCircleSpinnervue_type_script_lang_js_,
  FulfillingBouncingCircleSpinnervue_type_template_id_e5e606d8_scoped_true_render,
  FulfillingBouncingCircleSpinnervue_type_template_id_e5e606d8_scoped_true_staticRenderFns,
  false,
  null,
  "e5e606d8",
  null
  
)

/* harmony default export */ var FulfillingBouncingCircleSpinner = (component.exports);
// CONCATENATED MODULE: C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/vue-loader/lib??vue-loader-options!./src/components/FulfillingBouncingCircleSpinner.vue?vue&type=script&lang=js&
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




/* harmony default export */ var components_FulfillingBouncingCircleSpinnervue_type_script_lang_js_ = ({
  name: "FulfillingBouncingCircleSpinnerWrapper",
  mixins: [MixinComponent["a" /* default */]],
  components: {
    FulfillingBouncingCircleSpinner: FulfillingBouncingCircleSpinner
  }
});

// CONCATENATED MODULE: ./src/components/FulfillingBouncingCircleSpinner.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_components_FulfillingBouncingCircleSpinnervue_type_script_lang_js_ = (components_FulfillingBouncingCircleSpinnervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/FulfillingBouncingCircleSpinner.vue





/* normalize component */

var FulfillingBouncingCircleSpinner_component = Object(componentNormalizer["a" /* default */])(
  src_components_FulfillingBouncingCircleSpinnervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var components_FulfillingBouncingCircleSpinner = __webpack_exports__["a"] = (FulfillingBouncingCircleSpinner_component.exports);

/***/ }),

/***/ "d7a5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  props: {
    animationDuration: {
      type: Number,
      default: 1000
    },
    size: {
      type: Number,
      default: 60
    },
    color: {
      type: String,
      default: "#fff"
    }
  },
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
    }
  }
});


/***/ }),

/***/ "df49":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _vue_style_loader_index_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_postcss_loader_src_index_js_ref_6_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_BreedingRhombusSpinner_vue_vue_type_style_index_0_id_8fa7a3fc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("a51a");
/* harmony import */ var _vue_style_loader_index_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_postcss_loader_src_index_js_ref_6_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_BreedingRhombusSpinner_vue_vue_type_style_index_0_id_8fa7a3fc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_style_loader_index_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_postcss_loader_src_index_js_ref_6_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_BreedingRhombusSpinner_vue_vue_type_style_index_0_id_8fa7a3fc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_vue_style_loader_index_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_postcss_loader_src_index_js_ref_6_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_BreedingRhombusSpinner_vue_vue_type_style_index_0_id_8fa7a3fc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "e017":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("3c10");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".trinity-rings-spinner[data-v-19bbdf0e],.trinity-rings-spinner *[data-v-19bbdf0e]{-webkit-box-sizing:border-box;box-sizing:border-box}.trinity-rings-spinner[data-v-19bbdf0e]{height:66px;width:66px;padding:3px;position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;overflow:hidden}.trinity-rings-spinner .circle[data-v-19bbdf0e]{position:absolute;display:block;border-radius:50%;border:3px solid #ff1d5e;opacity:1}.trinity-rings-spinner .circle[data-v-19bbdf0e]:first-child{height:60px;width:60px;-webkit-animation:trinity-rings-spinner-circle1-animation-data-v-19bbdf0e 1.5s linear infinite;animation:trinity-rings-spinner-circle1-animation-data-v-19bbdf0e 1.5s linear infinite;border-width:3px}.trinity-rings-spinner .circle[data-v-19bbdf0e]:nth-child(2){height:39px;width:39px;-webkit-animation:trinity-rings-spinner-circle2-animation-data-v-19bbdf0e 1.5s linear infinite;animation:trinity-rings-spinner-circle2-animation-data-v-19bbdf0e 1.5s linear infinite;border-width:2px}.trinity-rings-spinner .circle[data-v-19bbdf0e]:nth-child(3){height:6px;width:6px;-webkit-animation:trinity-rings-spinner-circle3-animation-data-v-19bbdf0e 1.5s linear infinite;animation:trinity-rings-spinner-circle3-animation-data-v-19bbdf0e 1.5s linear infinite;border-width:1px}@-webkit-keyframes trinity-rings-spinner-circle1-animation-data-v-19bbdf0e{0%{-webkit-transform:rotate(20deg) rotateY(0deg);transform:rotate(20deg) rotateY(0deg)}to{-webkit-transform:rotate(100deg) rotateY(1turn);transform:rotate(100deg) rotateY(1turn)}}@keyframes trinity-rings-spinner-circle1-animation-data-v-19bbdf0e{0%{-webkit-transform:rotate(20deg) rotateY(0deg);transform:rotate(20deg) rotateY(0deg)}to{-webkit-transform:rotate(100deg) rotateY(1turn);transform:rotate(100deg) rotateY(1turn)}}@-webkit-keyframes trinity-rings-spinner-circle2-animation-data-v-19bbdf0e{0%{-webkit-transform:rotate(100deg) rotateX(0deg);transform:rotate(100deg) rotateX(0deg)}to{-webkit-transform:rotate(0deg) rotateX(1turn);transform:rotate(0deg) rotateX(1turn)}}@keyframes trinity-rings-spinner-circle2-animation-data-v-19bbdf0e{0%{-webkit-transform:rotate(100deg) rotateX(0deg);transform:rotate(100deg) rotateX(0deg)}to{-webkit-transform:rotate(0deg) rotateX(1turn);transform:rotate(0deg) rotateX(1turn)}}@-webkit-keyframes trinity-rings-spinner-circle3-animation-data-v-19bbdf0e{0%{-webkit-transform:rotate(100deg) rotateX(-1turn);transform:rotate(100deg) rotateX(-1turn)}to{-webkit-transform:rotate(-1turn) rotateX(1turn);transform:rotate(-1turn) rotateX(1turn)}}@keyframes trinity-rings-spinner-circle3-animation-data-v-19bbdf0e{0%{-webkit-transform:rotate(100deg) rotateX(-1turn);transform:rotate(100deg) rotateX(-1turn)}to{-webkit-transform:rotate(-1turn) rotateX(1turn);transform:rotate(-1turn) rotateX(1turn)}}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "e51c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _vue_style_loader_index_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_postcss_loader_src_index_js_ref_6_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_HollowDotsSpinner_vue_vue_type_style_index_0_id_5a033c16_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("c95f");
/* harmony import */ var _vue_style_loader_index_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_postcss_loader_src_index_js_ref_6_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_HollowDotsSpinner_vue_vue_type_style_index_0_id_5a033c16_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_style_loader_index_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_postcss_loader_src_index_js_ref_6_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_HollowDotsSpinner_vue_vue_type_style_index_0_id_5a033c16_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_vue_style_loader_index_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_postcss_loader_src_index_js_ref_6_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_HollowDotsSpinner_vue_vue_type_style_index_0_id_5a033c16_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "e534":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("3c10");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".fulfilling-bouncing-circle-spinner[data-v-e5e606d8],.fulfilling-bouncing-circle-spinner *[data-v-e5e606d8]{-webkit-box-sizing:border-box;box-sizing:border-box}.fulfilling-bouncing-circle-spinner[data-v-e5e606d8]{height:60px;width:60px;position:relative;-webkit-animation:fulfilling-bouncing-circle-spinner-animation-data-v-e5e606d8 4s ease infinite;animation:fulfilling-bouncing-circle-spinner-animation-data-v-e5e606d8 4s ease infinite}.fulfilling-bouncing-circle-spinner .orbit[data-v-e5e606d8]{height:60px;width:60px;position:absolute;top:0;left:0;border-radius:50%;border:1.8px solid #ff1d5e;-webkit-animation:fulfilling-bouncing-circle-spinner-orbit-animation-data-v-e5e606d8 4s ease infinite;animation:fulfilling-bouncing-circle-spinner-orbit-animation-data-v-e5e606d8 4s ease infinite}.fulfilling-bouncing-circle-spinner .circle[data-v-e5e606d8]{height:60px;width:60px;color:#ff1d5e;display:block;border-radius:50%;position:relative;border:6px solid #ff1d5e;-webkit-animation:fulfilling-bouncing-circle-spinner-circle-animation-data-v-e5e606d8 4s ease infinite;animation:fulfilling-bouncing-circle-spinner-circle-animation-data-v-e5e606d8 4s ease infinite;-webkit-transform:rotate(0deg) scale(1);transform:rotate(0deg) scale(1)}@-webkit-keyframes fulfilling-bouncing-circle-spinner-animation-data-v-e5e606d8{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes fulfilling-bouncing-circle-spinner-animation-data-v-e5e606d8{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@-webkit-keyframes fulfilling-bouncing-circle-spinner-orbit-animation-data-v-e5e606d8{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1);transform:scale(1)}62.5%{-webkit-transform:scale(.8);transform:scale(.8)}75%{-webkit-transform:scale(1);transform:scale(1)}87.5%{-webkit-transform:scale(.8);transform:scale(.8)}to{-webkit-transform:scale(1);transform:scale(1)}}@keyframes fulfilling-bouncing-circle-spinner-orbit-animation-data-v-e5e606d8{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1);transform:scale(1)}62.5%{-webkit-transform:scale(.8);transform:scale(.8)}75%{-webkit-transform:scale(1);transform:scale(1)}87.5%{-webkit-transform:scale(.8);transform:scale(.8)}to{-webkit-transform:scale(1);transform:scale(1)}}@-webkit-keyframes fulfilling-bouncing-circle-spinner-circle-animation-data-v-e5e606d8{0%{-webkit-transform:scale(1);transform:scale(1);border-color:transparent;border-top-color:inherit}16.7%{border-color:transparent;border-top-color:initial;border-right-color:initial}33.4%{border-color:transparent;border-top-color:inherit;border-right-color:inherit;border-bottom-color:inherit}50%{border-color:inherit;-webkit-transform:scale(1);transform:scale(1)}62.5%{border-color:inherit;-webkit-transform:scale(1.4);transform:scale(1.4)}75%{border-color:inherit;-webkit-transform:scale(1);transform:scale(1);opacity:1}87.5%{border-color:inherit;-webkit-transform:scale(1.4);transform:scale(1.4)}to{border-color:transparent;border-top-color:inherit;-webkit-transform:scale(1);transform:scale(1)}}@keyframes fulfilling-bouncing-circle-spinner-circle-animation-data-v-e5e606d8{0%{-webkit-transform:scale(1);transform:scale(1);border-color:transparent;border-top-color:inherit}16.7%{border-color:transparent;border-top-color:initial;border-right-color:initial}33.4%{border-color:transparent;border-top-color:inherit;border-right-color:inherit;border-bottom-color:inherit}50%{border-color:inherit;-webkit-transform:scale(1);transform:scale(1)}62.5%{border-color:inherit;-webkit-transform:scale(1.4);transform:scale(1.4)}75%{border-color:inherit;-webkit-transform:scale(1);transform:scale(1);opacity:1}87.5%{border-color:inherit;-webkit-transform:scale(1.4);transform:scale(1.4)}to{border-color:transparent;border-top-color:inherit;-webkit-transform:scale(1);transform:scale(1)}}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "e769":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _vue_style_loader_index_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_postcss_loader_src_index_js_ref_6_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_OrbitSpinner_vue_vue_type_style_index_0_id_34a3fdef_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("6585");
/* harmony import */ var _vue_style_loader_index_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_postcss_loader_src_index_js_ref_6_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_OrbitSpinner_vue_vue_type_style_index_0_id_34a3fdef_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_style_loader_index_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_postcss_loader_src_index_js_ref_6_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_OrbitSpinner_vue_vue_type_style_index_0_id_34a3fdef_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_vue_style_loader_index_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_postcss_loader_src_index_js_ref_6_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_OrbitSpinner_vue_vue_type_style_index_0_id_34a3fdef_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "ee95":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"93ce6ae4-vue-loader-template"}!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/vue-loader/lib??vue-loader-options!./src/components/ScalingSquaresSpinner.vue?vue&type=template&id=a06aca9a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ScalingSquaresSpinner',{style:({
    position: 'absolute',
    left: (_vm.width - _vm.size) / 2 + 'px',
    top: (_vm.height - _vm.size) / 2 + 'px'
  }),attrs:{"animation-duration":_vm.animationDuration,"size":_vm.size,"color":_vm.color}})}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/ScalingSquaresSpinner.vue?vue&type=template&id=a06aca9a&

// EXTERNAL MODULE: ./src/components/MixinComponent.js
var MixinComponent = __webpack_require__("d7a5");

// CONCATENATED MODULE: C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"93ce6ae4-vue-loader-template"}!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/vue-loader/lib??vue-loader-options!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/epic-spinners/src/components/lib/ScalingSquaresSpinner.vue?vue&type=template&id=dbacb9de&scoped=true&
var ScalingSquaresSpinnervue_type_template_id_dbacb9de_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"scaling-squares-spinner",style:(_vm.spinnerStyle)},_vm._l((_vm.squaresStyles),function(ss,index){return _c('div',{key:index,staticClass:"square",class:("square-" + (index + 1)),style:(ss)})}),0)}
var ScalingSquaresSpinnervue_type_template_id_dbacb9de_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/epic-spinners/src/components/lib/ScalingSquaresSpinner.vue?vue&type=template&id=dbacb9de&scoped=true&

// CONCATENATED MODULE: C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/vue-loader/lib??vue-loader-options!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/epic-spinners/src/components/lib/ScalingSquaresSpinner.vue?vue&type=script&lang=js&
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

/* harmony default export */ var ScalingSquaresSpinnervue_type_script_lang_js_ = ({
  name: 'ScalingSquaresSpinner',

  props: {
    animationDuration: {
      type: Number,
      default: 1250
    },
    size: {
      type: Number,
      default: 65
    },
    color: {
      type: String,
      default: '#fff'
    }
  },

  data () {
    return {
      squaresNum: 4
    }
  },

  computed: {
    spinnerStyle () {
      return {
        height: `${this.size}px`,
        width: `${this.size}px`,
        animationDuration: `${this.animationDuration}ms`
      }
    },

    squareStyle () {
      return {
        height: `${this.size * 0.25 / 1.3}px`,
        width: `${this.size * 0.25 / 1.3}px`,
        animationDuration: `${this.animationDuration}ms`,
        borderWidth: `${this.size * 0.04 / 1.3}px`,
        borderColor: this.color
      }
    },

    squaresStyles () {
      const squaresStyles = []

      for (let i = 1; i <= this.squaresNum; i++) {
        squaresStyles.push(Object.assign({
        }, this.squareStyle))
      }

      return squaresStyles
    }
  }
});

// CONCATENATED MODULE: C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/epic-spinners/src/components/lib/ScalingSquaresSpinner.vue?vue&type=script&lang=js&
 /* harmony default export */ var lib_ScalingSquaresSpinnervue_type_script_lang_js_ = (ScalingSquaresSpinnervue_type_script_lang_js_); 
// EXTERNAL MODULE: C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/epic-spinners/src/components/lib/ScalingSquaresSpinner.vue?vue&type=style&index=0&id=dbacb9de&scoped=true&lang=css&
var ScalingSquaresSpinnervue_type_style_index_0_id_dbacb9de_scoped_true_lang_css_ = __webpack_require__("be27");

// EXTERNAL MODULE: C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2be6");

// CONCATENATED MODULE: C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/epic-spinners/src/components/lib/ScalingSquaresSpinner.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  lib_ScalingSquaresSpinnervue_type_script_lang_js_,
  ScalingSquaresSpinnervue_type_template_id_dbacb9de_scoped_true_render,
  ScalingSquaresSpinnervue_type_template_id_dbacb9de_scoped_true_staticRenderFns,
  false,
  null,
  "dbacb9de",
  null
  
)

/* harmony default export */ var ScalingSquaresSpinner = (component.exports);
// CONCATENATED MODULE: C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/vue-loader/lib??vue-loader-options!./src/components/ScalingSquaresSpinner.vue?vue&type=script&lang=js&
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




/* harmony default export */ var components_ScalingSquaresSpinnervue_type_script_lang_js_ = ({
  name: "ScalingSquaresSpinnerWrapper",
  mixins: [MixinComponent["a" /* default */]],
  components: {
    ScalingSquaresSpinner: ScalingSquaresSpinner
  }
});

// CONCATENATED MODULE: ./src/components/ScalingSquaresSpinner.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_components_ScalingSquaresSpinnervue_type_script_lang_js_ = (components_ScalingSquaresSpinnervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/ScalingSquaresSpinner.vue





/* normalize component */

var ScalingSquaresSpinner_component = Object(componentNormalizer["a" /* default */])(
  src_components_ScalingSquaresSpinnervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var components_ScalingSquaresSpinner = __webpack_exports__["a"] = (ScalingSquaresSpinner_component.exports);

/***/ }),

/***/ "eeb4":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("fa79");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("0ed3").default
var update = add("2398e41d", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "f277":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"93ce6ae4-vue-loader-template"}!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/vue-loader/lib??vue-loader-options!./src/components/RandomSpinner.vue?vue&type=template&id=ea8bd38c&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.template)?_c(_vm.template,_vm._b({tag:"component"},'component',_vm.$props,false)):_vm._e()}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/RandomSpinner.vue?vue&type=template&id=ea8bd38c&

// EXTERNAL MODULE: ./src/components/HollowDotsSpinner.vue + 9 modules
var HollowDotsSpinner = __webpack_require__("f30d");

// EXTERNAL MODULE: ./src/components/PixelSpinner.vue + 9 modules
var PixelSpinner = __webpack_require__("36f5");

// EXTERNAL MODULE: ./src/components/FlowerSpinner.vue + 9 modules
var FlowerSpinner = __webpack_require__("a454");

// EXTERNAL MODULE: ./src/components/IntersectingCirclesSpinner.vue + 9 modules
var IntersectingCirclesSpinner = __webpack_require__("b684");

// EXTERNAL MODULE: ./src/components/OrbitSpinner.vue + 9 modules
var OrbitSpinner = __webpack_require__("f625");

// EXTERNAL MODULE: ./src/components/FingerprintSpinner.vue + 9 modules
var FingerprintSpinner = __webpack_require__("fe18");

// EXTERNAL MODULE: ./src/components/TrinityRingsSpinner.vue + 9 modules
var TrinityRingsSpinner = __webpack_require__("8259");

// EXTERNAL MODULE: ./src/components/FulfillingSquareSpinner.vue + 9 modules
var FulfillingSquareSpinner = __webpack_require__("2946");

// EXTERNAL MODULE: ./src/components/CirclesToRhombusesSpinner.vue + 9 modules
var CirclesToRhombusesSpinner = __webpack_require__("48dc");

// EXTERNAL MODULE: ./src/components/SemipolarSpinner.vue + 9 modules
var SemipolarSpinner = __webpack_require__("4912");

// EXTERNAL MODULE: ./src/components/BreedingRhombusSpinner.vue + 9 modules
var BreedingRhombusSpinner = __webpack_require__("47ed");

// EXTERNAL MODULE: ./src/components/SwappingSquaresSpinner.vue + 9 modules
var SwappingSquaresSpinner = __webpack_require__("a182");

// EXTERNAL MODULE: ./src/components/ScalingSquaresSpinner.vue + 9 modules
var ScalingSquaresSpinner = __webpack_require__("ee95");

// EXTERNAL MODULE: ./src/components/FulfillingBouncingCircleSpinner.vue + 9 modules
var FulfillingBouncingCircleSpinner = __webpack_require__("d6e1");

// EXTERNAL MODULE: ./src/components/RadarSpinner.vue + 9 modules
var RadarSpinner = __webpack_require__("c8ee");

// EXTERNAL MODULE: ./src/components/SelfBuildingSquareSpinner.vue + 9 modules
var SelfBuildingSquareSpinner = __webpack_require__("b567");

// EXTERNAL MODULE: ./src/components/SpringSpinner.vue + 9 modules
var SpringSpinner = __webpack_require__("5800");

// EXTERNAL MODULE: ./src/components/LoopingRhombusesSpinner.vue + 9 modules
var LoopingRhombusesSpinner = __webpack_require__("ca9e");

// EXTERNAL MODULE: ./src/components/HalfCircleSpinner.vue + 9 modules
var HalfCircleSpinner = __webpack_require__("4c83");

// EXTERNAL MODULE: ./src/components/AtomSpinner.vue + 9 modules
var AtomSpinner = __webpack_require__("887f");

// CONCATENATED MODULE: C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/vue-loader/lib??vue-loader-options!./src/components/RandomSpinner.vue?vue&type=script&lang=js&
//
//
//
//






















const spinners = [
  "HollowDotsSpinner",
  "PixelSpinner",
  "FlowerSpinner",
  "IntersectingCirclesSpinner",
  "OrbitSpinner",
  "FingerprintSpinner",
  "TrinityRingsSpinner",
  "FulfillingSquareSpinner",
  "CirclesToRhombusesSpinner",
  "SemipolarSpinner",
  "BreedingRhombusSpinner",
  "SwappingSquaresSpinner",
  "ScalingSquaresSpinner",
  "FulfillingBouncingCircleSpinner",
  "RadarSpinner",
  "SelfBuildingSquareSpinner",
  "SpringSpinner",
  "LoopingRhombusesSpinner",
  "HalfCircleSpinner",
  "AtomSpinner"
];

/* harmony default export */ var RandomSpinnervue_type_script_lang_js_ = ({
  components: {
    HollowDotsSpinner: HollowDotsSpinner["a" /* default */],
    PixelSpinner: PixelSpinner["a" /* default */],
    FlowerSpinner: FlowerSpinner["a" /* default */],
    IntersectingCirclesSpinner: IntersectingCirclesSpinner["a" /* default */],
    OrbitSpinner: OrbitSpinner["a" /* default */],
    FingerprintSpinner: FingerprintSpinner["a" /* default */],
    TrinityRingsSpinner: TrinityRingsSpinner["a" /* default */],
    FulfillingSquareSpinner: FulfillingSquareSpinner["a" /* default */],
    CirclesToRhombusesSpinner: CirclesToRhombusesSpinner["a" /* default */],
    SemipolarSpinner: SemipolarSpinner["a" /* default */],
    BreedingRhombusSpinner: BreedingRhombusSpinner["a" /* default */],
    SwappingSquaresSpinner: SwappingSquaresSpinner["a" /* default */],
    ScalingSquaresSpinner: ScalingSquaresSpinner["a" /* default */],
    FulfillingBouncingCircleSpinner: FulfillingBouncingCircleSpinner["a" /* default */],
    RadarSpinner: RadarSpinner["a" /* default */],
    SelfBuildingSquareSpinner: SelfBuildingSquareSpinner["a" /* default */],
    SpringSpinner: SpringSpinner["a" /* default */],
    LoopingRhombusesSpinner: LoopingRhombusesSpinner["a" /* default */],
    HalfCircleSpinner: HalfCircleSpinner["a" /* default */],
    AtomSpinner: AtomSpinner["a" /* default */]
  },
  props: {
    animationDuration: {
      type: Number,
      default: 1000
    },
    size: {
      type: Number,
      default: 60
    },
    color: {
      type: String,
      default: "#fff"
    }
  },
  data() {
    return {
      template: null
    };
  },
  mounted() {
    this.template = spinners[Math.floor(Math.random() * spinners.length)];
  }
});

// CONCATENATED MODULE: ./src/components/RandomSpinner.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_RandomSpinnervue_type_script_lang_js_ = (RandomSpinnervue_type_script_lang_js_); 
// EXTERNAL MODULE: C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2be6");

// CONCATENATED MODULE: ./src/components/RandomSpinner.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_RandomSpinnervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var RandomSpinner = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ "f28c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _vue_style_loader_index_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_postcss_loader_src_index_js_ref_6_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_AtomSpinner_vue_vue_type_style_index_0_id_fb9a33c4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("9ec9");
/* harmony import */ var _vue_style_loader_index_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_postcss_loader_src_index_js_ref_6_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_AtomSpinner_vue_vue_type_style_index_0_id_fb9a33c4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_style_loader_index_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_postcss_loader_src_index_js_ref_6_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_AtomSpinner_vue_vue_type_style_index_0_id_fb9a33c4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_vue_style_loader_index_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_postcss_loader_src_index_js_ref_6_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_AtomSpinner_vue_vue_type_style_index_0_id_fb9a33c4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "f30d":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"93ce6ae4-vue-loader-template"}!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/vue-loader/lib??vue-loader-options!./src/components/HollowDotsSpinner.vue?vue&type=template&id=d94061ea&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('HollowDotsSpinner',{style:({
    position: 'absolute',
    left: (_vm.width - _vm.spinnerWidth) / 2 + 'px',
    top: (_vm.height - _vm.spinnerHeight) / 2 + 'px',
  }),attrs:{"animation-duration":_vm.animationDuration,"size":_vm.size,"color":_vm.color,"dotSize":_vm.dotSize,"dotsNum":_vm.dotsNum}})}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/HollowDotsSpinner.vue?vue&type=template&id=d94061ea&

// EXTERNAL MODULE: ./src/components/MixinComponent.js
var MixinComponent = __webpack_require__("d7a5");

// CONCATENATED MODULE: C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"93ce6ae4-vue-loader-template"}!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/vue-loader/lib??vue-loader-options!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/epic-spinners/src/components/lib/HollowDotsSpinner.vue?vue&type=template&id=5a033c16&scoped=true&
var HollowDotsSpinnervue_type_template_id_5a033c16_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"hollow-dots-spinner",style:(_vm.spinnerStyle)},_vm._l((_vm.dotsStyles),function(ds,index){return _c('div',{key:index,staticClass:"dot",style:(ds)})}),0)}
var HollowDotsSpinnervue_type_template_id_5a033c16_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/epic-spinners/src/components/lib/HollowDotsSpinner.vue?vue&type=template&id=5a033c16&scoped=true&

// CONCATENATED MODULE: C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/vue-loader/lib??vue-loader-options!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/epic-spinners/src/components/lib/HollowDotsSpinner.vue?vue&type=script&lang=js&
//
//
//
//
//
//

/* harmony default export */ var HollowDotsSpinnervue_type_script_lang_js_ = ({
  name: 'HollowDotsSpinner',

  props: {
    animationDuration: {
      type: Number,
      default: 1000
    },
    dotSize: {
      type: Number,
      default: 15
    },
    dotsNum: {
      type: Number,
      default: 3
    },
    color: {
      type: String,
      default: '#fff'
    }
  },

  computed: {
    horizontalMargin () {
      return this.dotSize / 2
    },

    spinnerStyle () {
      return {
        height: `${this.dotSize}px`,
        width: `${(this.dotSize + this.horizontalMargin * 2) * this.dotsNum}px`
      }
    },

    dotStyle () {
      return {
        animationDuration: `${this.animationDuration}ms`,
        width: `${this.dotSize}px`,
        height: `${this.dotSize}px`,
        margin: `0 ${this.horizontalMargin}px`,
        borderWidth: `${this.dotSize / 5}px`,
        borderColor: this.color
      }
    },

    dotsStyles () {
      const dotsStyles = []
      const delayModifier = 0.3
      const basicDelay = 1000

      for (let i = 1; i <= this.dotsNum; i++) {
        const style = Object.assign({
          animationDelay: `${basicDelay * i * delayModifier}ms`
        }, this.dotStyle)

        dotsStyles.push(style)
      }

      return dotsStyles
    }
  }
});

// CONCATENATED MODULE: C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/epic-spinners/src/components/lib/HollowDotsSpinner.vue?vue&type=script&lang=js&
 /* harmony default export */ var lib_HollowDotsSpinnervue_type_script_lang_js_ = (HollowDotsSpinnervue_type_script_lang_js_); 
// EXTERNAL MODULE: C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/epic-spinners/src/components/lib/HollowDotsSpinner.vue?vue&type=style&index=0&id=5a033c16&scoped=true&lang=css&
var HollowDotsSpinnervue_type_style_index_0_id_5a033c16_scoped_true_lang_css_ = __webpack_require__("e51c");

// EXTERNAL MODULE: C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2be6");

// CONCATENATED MODULE: C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/epic-spinners/src/components/lib/HollowDotsSpinner.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  lib_HollowDotsSpinnervue_type_script_lang_js_,
  HollowDotsSpinnervue_type_template_id_5a033c16_scoped_true_render,
  HollowDotsSpinnervue_type_template_id_5a033c16_scoped_true_staticRenderFns,
  false,
  null,
  "5a033c16",
  null
  
)

/* harmony default export */ var HollowDotsSpinner = (component.exports);
// CONCATENATED MODULE: C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/vue-loader/lib??vue-loader-options!./src/components/HollowDotsSpinner.vue?vue&type=script&lang=js&
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
//




/* harmony default export */ var components_HollowDotsSpinnervue_type_script_lang_js_ = ({
  name: "HollowDotsSpinnerWrapper",
  mixins: [MixinComponent["a" /* default */]],
  components: {
    HollowDotsSpinner: HollowDotsSpinner,
  },
  props: {
    dotSize: {
      type: Number,
      default: 15,
    },
    dotsNum: {
      type: Number,
      default: 3,
    },
  },
  computed: {
    spinnerHeight() {
      return this.dotSize;
    },
    horizontalMargin() {
      return this.dotSize / 2;
    },
    spinnerWidth() {
      return (this.dotSize + this.horizontalMargin * 2) * this.dotsNum;
    },
  },
});

// CONCATENATED MODULE: ./src/components/HollowDotsSpinner.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_components_HollowDotsSpinnervue_type_script_lang_js_ = (components_HollowDotsSpinnervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/HollowDotsSpinner.vue





/* normalize component */

var HollowDotsSpinner_component = Object(componentNormalizer["a" /* default */])(
  src_components_HollowDotsSpinnervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var components_HollowDotsSpinner = __webpack_exports__["a"] = (HollowDotsSpinner_component.exports);

/***/ }),

/***/ "f4c3":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("3c10");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".circles-to-rhombuses-spinner[data-v-7a6e17e5],.circles-to-rhombuses-spinner *[data-v-7a6e17e5]{-webkit-box-sizing:border-box;box-sizing:border-box}.circles-to-rhombuses-spinner[data-v-7a6e17e5]{height:15px;width:95.625px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.circles-to-rhombuses-spinner .circle[data-v-7a6e17e5]{height:15px;width:15px;margin-left:16.875px;-webkit-transform:rotate(45deg);transform:rotate(45deg);border-radius:10%;border:3px solid #ff1d5e;overflow:hidden;background:transparent;-webkit-animation:circles-to-rhombuses-animation-data-v-7a6e17e5 1.2s linear infinite;animation:circles-to-rhombuses-animation-data-v-7a6e17e5 1.2s linear infinite}.circles-to-rhombuses-spinner .circle[data-v-7a6e17e5]:first-child{-webkit-animation-delay:.15s;animation-delay:.15s;margin-left:0}.circles-to-rhombuses-spinner .circle[data-v-7a6e17e5]:nth-child(2){-webkit-animation-delay:.3s;animation-delay:.3s}.circles-to-rhombuses-spinner .circle[data-v-7a6e17e5]:nth-child(3){-webkit-animation-delay:.45s;animation-delay:.45s}@-webkit-keyframes circles-to-rhombuses-animation-data-v-7a6e17e5{0%{border-radius:10%}17.5%{border-radius:10%}50%{border-radius:100%}93.5%{border-radius:10%}to{border-radius:10%}}@keyframes circles-to-rhombuses-animation-data-v-7a6e17e5{0%{border-radius:10%}17.5%{border-radius:10%}50%{border-radius:100%}93.5%{border-radius:10%}to{border-radius:10%}}@-webkit-keyframes circles-to-rhombuses-background-animation-data-v-7a6e17e5{50%{opacity:.4}}@keyframes circles-to-rhombuses-background-animation-data-v-7a6e17e5{50%{opacity:.4}}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "f583":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("f4c3");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("0ed3").default
var update = add("cb0242e4", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "f625":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"93ce6ae4-vue-loader-template"}!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/vue-loader/lib??vue-loader-options!./src/components/OrbitSpinner.vue?vue&type=template&id=46f5bd79&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('OrbitSpinner',{style:({
    position: 'absolute',
    left: (_vm.width - _vm.size) / 2 + 'px',
    top: (_vm.height - _vm.size) / 2 + 'px'
  }),attrs:{"animation-duration":_vm.animationDuration,"size":_vm.size,"color":_vm.color}})}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/OrbitSpinner.vue?vue&type=template&id=46f5bd79&

// EXTERNAL MODULE: ./src/components/MixinComponent.js
var MixinComponent = __webpack_require__("d7a5");

// CONCATENATED MODULE: C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"93ce6ae4-vue-loader-template"}!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/vue-loader/lib??vue-loader-options!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/epic-spinners/src/components/lib/OrbitSpinner.vue?vue&type=template&id=34a3fdef&scoped=true&
var OrbitSpinnervue_type_template_id_34a3fdef_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"orbit-spinner",style:(_vm.spinnerStyle)},[_c('div',{staticClass:"orbit one",style:(_vm.orbitStyle)}),_c('div',{staticClass:"orbit two",style:(_vm.orbitStyle)}),_c('div',{staticClass:"orbit three",style:(_vm.orbitStyle)})])}
var OrbitSpinnervue_type_template_id_34a3fdef_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/epic-spinners/src/components/lib/OrbitSpinner.vue?vue&type=template&id=34a3fdef&scoped=true&

// CONCATENATED MODULE: C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/vue-loader/lib??vue-loader-options!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/epic-spinners/src/components/lib/OrbitSpinner.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//

/* harmony default export */ var OrbitSpinnervue_type_script_lang_js_ = ({
  name: 'OrbitSpinner',

  props: {
    animationDuration: {
      type: Number,
      default: 1000
    },
    size: {
      type: Number,
      default: 50
    },
    color: {
      type: String,
      default: '#fff'
    }
  },

  computed: {
    spinnerStyle () {
      return {
        height: `${this.size}px`,
        width: `${this.size}px`
      }
    },

    orbitStyle () {
      return {
        borderColor: this.color,
        animationDuration: `${this.animationDuration}ms`
      }
    }
  }
});

// CONCATENATED MODULE: C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/epic-spinners/src/components/lib/OrbitSpinner.vue?vue&type=script&lang=js&
 /* harmony default export */ var lib_OrbitSpinnervue_type_script_lang_js_ = (OrbitSpinnervue_type_script_lang_js_); 
// EXTERNAL MODULE: C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/epic-spinners/src/components/lib/OrbitSpinner.vue?vue&type=style&index=0&id=34a3fdef&scoped=true&lang=css&
var OrbitSpinnervue_type_style_index_0_id_34a3fdef_scoped_true_lang_css_ = __webpack_require__("e769");

// EXTERNAL MODULE: C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2be6");

// CONCATENATED MODULE: C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/epic-spinners/src/components/lib/OrbitSpinner.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  lib_OrbitSpinnervue_type_script_lang_js_,
  OrbitSpinnervue_type_template_id_34a3fdef_scoped_true_render,
  OrbitSpinnervue_type_template_id_34a3fdef_scoped_true_staticRenderFns,
  false,
  null,
  "34a3fdef",
  null
  
)

/* harmony default export */ var OrbitSpinner = (component.exports);
// CONCATENATED MODULE: C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/vue-loader/lib??vue-loader-options!./src/components/OrbitSpinner.vue?vue&type=script&lang=js&
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




/* harmony default export */ var components_OrbitSpinnervue_type_script_lang_js_ = ({
  name: "OrbitSpinnerWrapper",
  mixins: [MixinComponent["a" /* default */]],
  components: {
    OrbitSpinner: OrbitSpinner
  }
});

// CONCATENATED MODULE: ./src/components/OrbitSpinner.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_components_OrbitSpinnervue_type_script_lang_js_ = (components_OrbitSpinnervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/OrbitSpinner.vue





/* normalize component */

var OrbitSpinner_component = Object(componentNormalizer["a" /* default */])(
  src_components_OrbitSpinnervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var components_OrbitSpinner = __webpack_exports__["a"] = (OrbitSpinner_component.exports);

/***/ }),

/***/ "fa79":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("3c10");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".flower-spinner[data-v-f15101b8],.flower-spinner *[data-v-f15101b8]{-webkit-box-sizing:border-box;box-sizing:border-box}.flower-spinner[data-v-f15101b8]{height:70px;width:70px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.flower-spinner .dots-container[data-v-f15101b8]{height:10px;width:10px}.flower-spinner .small-dot[data-v-f15101b8]{-webkit-animation:flower-spinner-small-dot-animation-data-v-f15101b8 2.5s 0s infinite both;animation:flower-spinner-small-dot-animation-data-v-f15101b8 2.5s 0s infinite both}.flower-spinner .big-dot[data-v-f15101b8],.flower-spinner .small-dot[data-v-f15101b8]{background:#ff1d5e;height:100%;width:100%;border-radius:50%}.flower-spinner .big-dot[data-v-f15101b8]{padding:10%;-webkit-animation:flower-spinner-big-dot-animation-data-v-f15101b8 2.5s 0s infinite both;animation:flower-spinner-big-dot-animation-data-v-f15101b8 2.5s 0s infinite both}@-webkit-keyframes flower-spinner-big-dot-animation-data-v-f15101b8{0%,to{-webkit-box-shadow:#ff1d5e 0 0 0,#ff1d5e 0 0 0,#ff1d5e 0 0 0,#ff1d5e 0 0 0,#ff1d5e 0 0 0,#ff1d5e 0 0 0,#ff1d5e 0 0 0,#ff1d5e 0 0 0;box-shadow:0 0 0 #ff1d5e,0 0 0 #ff1d5e,0 0 0 #ff1d5e,0 0 0 #ff1d5e,0 0 0 #ff1d5e,0 0 0 #ff1d5e,0 0 0 #ff1d5e,0 0 0 #ff1d5e}50%{-webkit-transform:rotate(180deg);transform:rotate(180deg)}25%,75%{-webkit-box-shadow:#ff1d5e 26px 0 0,#ff1d5e -26px 0 0,#ff1d5e 0 26px 0,#ff1d5e 0 -26px 0,#ff1d5e 19px -19px 0,#ff1d5e 19px 19px 0,#ff1d5e -19px -19px 0,#ff1d5e -19px 19px 0;box-shadow:26px 0 0 #ff1d5e,-26px 0 0 #ff1d5e,0 26px 0 #ff1d5e,0 -26px 0 #ff1d5e,19px -19px 0 #ff1d5e,19px 19px 0 #ff1d5e,-19px -19px 0 #ff1d5e,-19px 19px 0 #ff1d5e}to{-webkit-transform:rotate(1turn);transform:rotate(1turn);-webkit-box-shadow:#ff1d5e 0 0 0,#ff1d5e 0 0 0,#ff1d5e 0 0 0,#ff1d5e 0 0 0,#ff1d5e 0 0 0,#ff1d5e 0 0 0,#ff1d5e 0 0 0,#ff1d5e 0 0 0;box-shadow:0 0 0 #ff1d5e,0 0 0 #ff1d5e,0 0 0 #ff1d5e,0 0 0 #ff1d5e,0 0 0 #ff1d5e,0 0 0 #ff1d5e,0 0 0 #ff1d5e,0 0 0 #ff1d5e}}@keyframes flower-spinner-big-dot-animation-data-v-f15101b8{0%,to{-webkit-box-shadow:#ff1d5e 0 0 0,#ff1d5e 0 0 0,#ff1d5e 0 0 0,#ff1d5e 0 0 0,#ff1d5e 0 0 0,#ff1d5e 0 0 0,#ff1d5e 0 0 0,#ff1d5e 0 0 0;box-shadow:0 0 0 #ff1d5e,0 0 0 #ff1d5e,0 0 0 #ff1d5e,0 0 0 #ff1d5e,0 0 0 #ff1d5e,0 0 0 #ff1d5e,0 0 0 #ff1d5e,0 0 0 #ff1d5e}50%{-webkit-transform:rotate(180deg);transform:rotate(180deg)}25%,75%{-webkit-box-shadow:#ff1d5e 26px 0 0,#ff1d5e -26px 0 0,#ff1d5e 0 26px 0,#ff1d5e 0 -26px 0,#ff1d5e 19px -19px 0,#ff1d5e 19px 19px 0,#ff1d5e -19px -19px 0,#ff1d5e -19px 19px 0;box-shadow:26px 0 0 #ff1d5e,-26px 0 0 #ff1d5e,0 26px 0 #ff1d5e,0 -26px 0 #ff1d5e,19px -19px 0 #ff1d5e,19px 19px 0 #ff1d5e,-19px -19px 0 #ff1d5e,-19px 19px 0 #ff1d5e}to{-webkit-transform:rotate(1turn);transform:rotate(1turn);-webkit-box-shadow:#ff1d5e 0 0 0,#ff1d5e 0 0 0,#ff1d5e 0 0 0,#ff1d5e 0 0 0,#ff1d5e 0 0 0,#ff1d5e 0 0 0,#ff1d5e 0 0 0,#ff1d5e 0 0 0;box-shadow:0 0 0 #ff1d5e,0 0 0 #ff1d5e,0 0 0 #ff1d5e,0 0 0 #ff1d5e,0 0 0 #ff1d5e,0 0 0 #ff1d5e,0 0 0 #ff1d5e,0 0 0 #ff1d5e}}@-webkit-keyframes flower-spinner-small-dot-animation-data-v-f15101b8{0%,to{-webkit-box-shadow:#ff1d5e 0 0 0,#ff1d5e 0 0 0,#ff1d5e 0 0 0,#ff1d5e 0 0 0,#ff1d5e 0 0 0,#ff1d5e 0 0 0,#ff1d5e 0 0 0,#ff1d5e 0 0 0;box-shadow:0 0 0 #ff1d5e,0 0 0 #ff1d5e,0 0 0 #ff1d5e,0 0 0 #ff1d5e,0 0 0 #ff1d5e,0 0 0 #ff1d5e,0 0 0 #ff1d5e,0 0 0 #ff1d5e}25%,75%{-webkit-box-shadow:#ff1d5e 14px 0 0,#ff1d5e -14px 0 0,#ff1d5e 0 14px 0,#ff1d5e 0 -14px 0,#ff1d5e 10px -10px 0,#ff1d5e 10px 10px 0,#ff1d5e -10px -10px 0,#ff1d5e -10px 10px 0;box-shadow:14px 0 0 #ff1d5e,-14px 0 0 #ff1d5e,0 14px 0 #ff1d5e,0 -14px 0 #ff1d5e,10px -10px 0 #ff1d5e,10px 10px 0 #ff1d5e,-10px -10px 0 #ff1d5e,-10px 10px 0 #ff1d5e}to{-webkit-box-shadow:#ff1d5e 0 0 0,#ff1d5e 0 0 0,#ff1d5e 0 0 0,#ff1d5e 0 0 0,#ff1d5e 0 0 0,#ff1d5e 0 0 0,#ff1d5e 0 0 0,#ff1d5e 0 0 0;box-shadow:0 0 0 #ff1d5e,0 0 0 #ff1d5e,0 0 0 #ff1d5e,0 0 0 #ff1d5e,0 0 0 #ff1d5e,0 0 0 #ff1d5e,0 0 0 #ff1d5e,0 0 0 #ff1d5e}}@keyframes flower-spinner-small-dot-animation-data-v-f15101b8{0%,to{-webkit-box-shadow:#ff1d5e 0 0 0,#ff1d5e 0 0 0,#ff1d5e 0 0 0,#ff1d5e 0 0 0,#ff1d5e 0 0 0,#ff1d5e 0 0 0,#ff1d5e 0 0 0,#ff1d5e 0 0 0;box-shadow:0 0 0 #ff1d5e,0 0 0 #ff1d5e,0 0 0 #ff1d5e,0 0 0 #ff1d5e,0 0 0 #ff1d5e,0 0 0 #ff1d5e,0 0 0 #ff1d5e,0 0 0 #ff1d5e}25%,75%{-webkit-box-shadow:#ff1d5e 14px 0 0,#ff1d5e -14px 0 0,#ff1d5e 0 14px 0,#ff1d5e 0 -14px 0,#ff1d5e 10px -10px 0,#ff1d5e 10px 10px 0,#ff1d5e -10px -10px 0,#ff1d5e -10px 10px 0;box-shadow:14px 0 0 #ff1d5e,-14px 0 0 #ff1d5e,0 14px 0 #ff1d5e,0 -14px 0 #ff1d5e,10px -10px 0 #ff1d5e,10px 10px 0 #ff1d5e,-10px -10px 0 #ff1d5e,-10px 10px 0 #ff1d5e}to{-webkit-box-shadow:#ff1d5e 0 0 0,#ff1d5e 0 0 0,#ff1d5e 0 0 0,#ff1d5e 0 0 0,#ff1d5e 0 0 0,#ff1d5e 0 0 0,#ff1d5e 0 0 0,#ff1d5e 0 0 0;box-shadow:0 0 0 #ff1d5e,0 0 0 #ff1d5e,0 0 0 #ff1d5e,0 0 0 #ff1d5e,0 0 0 #ff1d5e,0 0 0 #ff1d5e,0 0 0 #ff1d5e,0 0 0 #ff1d5e}}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "fa9c":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("8512");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("0ed3").default
var update = add("8ce2999e", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "fc8a":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("3c10");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".atom-spinner[data-v-fb9a33c4],.atom-spinner *[data-v-fb9a33c4]{-webkit-box-sizing:border-box;box-sizing:border-box}.atom-spinner[data-v-fb9a33c4]{height:60px;width:60px;overflow:hidden}.atom-spinner .spinner-inner[data-v-fb9a33c4]{position:relative;display:block;height:100%;width:100%}.atom-spinner .spinner-circle[data-v-fb9a33c4]{display:block;position:absolute;color:#ff1d5e;font-size:14.4px;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.atom-spinner .spinner-line[data-v-fb9a33c4]{position:absolute;width:100%;height:100%;border-radius:50%;-webkit-animation-duration:1s;animation-duration:1s;border-left-width:2.4px;border-top-width:2.4px;border-left-color:#ff1d5e;border-left-style:solid;border-top-style:solid;border-top-color:transparent}.atom-spinner .spinner-line[data-v-fb9a33c4]:first-child{-webkit-animation:atom-spinner-animation-1-data-v-fb9a33c4 1s linear infinite;animation:atom-spinner-animation-1-data-v-fb9a33c4 1s linear infinite;-webkit-transform:rotate(120deg) rotateX(66deg) rotate(0deg);transform:rotate(120deg) rotateX(66deg) rotate(0deg)}.atom-spinner .spinner-line[data-v-fb9a33c4]:nth-child(2){-webkit-animation:atom-spinner-animation-2-data-v-fb9a33c4 1s linear infinite;animation:atom-spinner-animation-2-data-v-fb9a33c4 1s linear infinite;-webkit-transform:rotate(240deg) rotateX(66deg) rotate(0deg);transform:rotate(240deg) rotateX(66deg) rotate(0deg)}.atom-spinner .spinner-line[data-v-fb9a33c4]:nth-child(3){-webkit-animation:atom-spinner-animation-3-data-v-fb9a33c4 1s linear infinite;animation:atom-spinner-animation-3-data-v-fb9a33c4 1s linear infinite;-webkit-transform:rotate(1turn) rotateX(66deg) rotate(0deg);transform:rotate(1turn) rotateX(66deg) rotate(0deg)}@-webkit-keyframes atom-spinner-animation-1-data-v-fb9a33c4{to{-webkit-transform:rotate(120deg) rotateX(66deg) rotate(1turn);transform:rotate(120deg) rotateX(66deg) rotate(1turn)}}@keyframes atom-spinner-animation-1-data-v-fb9a33c4{to{-webkit-transform:rotate(120deg) rotateX(66deg) rotate(1turn);transform:rotate(120deg) rotateX(66deg) rotate(1turn)}}@-webkit-keyframes atom-spinner-animation-2-data-v-fb9a33c4{to{-webkit-transform:rotate(240deg) rotateX(66deg) rotate(1turn);transform:rotate(240deg) rotateX(66deg) rotate(1turn)}}@keyframes atom-spinner-animation-2-data-v-fb9a33c4{to{-webkit-transform:rotate(240deg) rotateX(66deg) rotate(1turn);transform:rotate(240deg) rotateX(66deg) rotate(1turn)}}@-webkit-keyframes atom-spinner-animation-3-data-v-fb9a33c4{to{-webkit-transform:rotate(1turn) rotateX(66deg) rotate(1turn);transform:rotate(1turn) rotateX(66deg) rotate(1turn)}}@keyframes atom-spinner-animation-3-data-v-fb9a33c4{to{-webkit-transform:rotate(1turn) rotateX(66deg) rotate(1turn);transform:rotate(1turn) rotateX(66deg) rotate(1turn)}}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "fe18":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"93ce6ae4-vue-loader-template"}!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/vue-loader/lib??vue-loader-options!./src/components/FingerprintSpinner.vue?vue&type=template&id=d8a7aa5e&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('FingerprintSpinner',{style:({
    position: 'absolute',
    left: (_vm.width - _vm.size) / 2 + 'px',
    top: (_vm.height - _vm.size) / 2 + 'px'
  }),attrs:{"animation-duration":_vm.animationDuration,"size":_vm.size,"color":_vm.color}})}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/FingerprintSpinner.vue?vue&type=template&id=d8a7aa5e&

// EXTERNAL MODULE: ./src/components/MixinComponent.js
var MixinComponent = __webpack_require__("d7a5");

// CONCATENATED MODULE: C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"93ce6ae4-vue-loader-template"}!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/vue-loader/lib??vue-loader-options!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/epic-spinners/src/components/lib/FingerprintSpinner.vue?vue&type=template&id=077ae5a6&scoped=true&
var FingerprintSpinnervue_type_template_id_077ae5a6_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"fingerprint-spinner",style:(_vm.spinnerStyle)},_vm._l((_vm.ringsStyles),function(rs,index){return _c('div',{key:index,staticClass:"spinner-ring",style:(rs)})}),0)}
var FingerprintSpinnervue_type_template_id_077ae5a6_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/epic-spinners/src/components/lib/FingerprintSpinner.vue?vue&type=template&id=077ae5a6&scoped=true&

// CONCATENATED MODULE: C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/vue-loader/lib??vue-loader-options!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/epic-spinners/src/components/lib/FingerprintSpinner.vue?vue&type=script&lang=js&
//
//
//
//
//
//

/* harmony default export */ var FingerprintSpinnervue_type_script_lang_js_ = ({
  name: 'FingerprintSpinner',

  props: {
    animationDuration: {
      type: Number,
      default: 1500
    },
    size: {
      type: Number,
      default: 60
    },
    color: {
      type: String,
      default: '#fff'
    }
  },

  data () {
    return {
      ringsNum: 9,
      containerPadding: 2
    }
  },

  computed: {
    outerRingSize () {
      return this.size - this.containerPadding * 2
    },

    spinnerStyle () {
      return {
        height: `${this.size}px`,
        width: `${this.size}px`,
        padding: `${this.containerPadding}px`
      }
    },

    ringStyle () {
      return {
        borderTopColor: this.color,
        animationDuration: `${this.animationDuration}ms`
      }
    },

    ringsStyles () {
      const ringsStyles = []
      const ringBase = this.outerRingSize / (this.ringsNum)
      const ringInc = ringBase

      for (let i = 1; i <= this.ringsNum; i++) {
        let style = Object.assign({
          animationDelay: `${i * 50}ms`,
          height: `${ringBase + (i - 1) * ringInc}px`,
          width: `${ringBase + (i - 1) * ringInc}px`
        }, this.ringStyle)
        ringsStyles.push(style)
      }

      return ringsStyles
    }
  }
});

// CONCATENATED MODULE: C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/epic-spinners/src/components/lib/FingerprintSpinner.vue?vue&type=script&lang=js&
 /* harmony default export */ var lib_FingerprintSpinnervue_type_script_lang_js_ = (FingerprintSpinnervue_type_script_lang_js_); 
// EXTERNAL MODULE: C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/epic-spinners/src/components/lib/FingerprintSpinner.vue?vue&type=style&index=0&id=077ae5a6&scoped=true&lang=css&
var FingerprintSpinnervue_type_style_index_0_id_077ae5a6_scoped_true_lang_css_ = __webpack_require__("46bd");

// EXTERNAL MODULE: C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2be6");

// CONCATENATED MODULE: C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/epic-spinners/src/components/lib/FingerprintSpinner.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  lib_FingerprintSpinnervue_type_script_lang_js_,
  FingerprintSpinnervue_type_template_id_077ae5a6_scoped_true_render,
  FingerprintSpinnervue_type_template_id_077ae5a6_scoped_true_staticRenderFns,
  false,
  null,
  "077ae5a6",
  null
  
)

/* harmony default export */ var FingerprintSpinner = (component.exports);
// CONCATENATED MODULE: C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/_Projects/WEBSITE/vue-responsive-dash/plugins/node_modules/vue-loader/lib??vue-loader-options!./src/components/FingerprintSpinner.vue?vue&type=script&lang=js&
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




/* harmony default export */ var components_FingerprintSpinnervue_type_script_lang_js_ = ({
  name: "FingerprintSpinnerWrapper",
  mixins: [MixinComponent["a" /* default */]],
  components: {
    FingerprintSpinner: FingerprintSpinner
  }
});

// CONCATENATED MODULE: ./src/components/FingerprintSpinner.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_components_FingerprintSpinnervue_type_script_lang_js_ = (components_FingerprintSpinnervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/FingerprintSpinner.vue





/* normalize component */

var FingerprintSpinner_component = Object(componentNormalizer["a" /* default */])(
  src_components_FingerprintSpinnervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var components_FingerprintSpinner = __webpack_exports__["a"] = (FingerprintSpinner_component.exports);

/***/ }),

/***/ "fee1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _vue_style_loader_index_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_postcss_loader_src_index_js_ref_6_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_FulfillingBouncingCircleSpinner_vue_vue_type_style_index_0_id_e5e606d8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("3d7c");
/* harmony import */ var _vue_style_loader_index_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_postcss_loader_src_index_js_ref_6_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_FulfillingBouncingCircleSpinner_vue_vue_type_style_index_0_id_e5e606d8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_style_loader_index_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_postcss_loader_src_index_js_ref_6_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_FulfillingBouncingCircleSpinner_vue_vue_type_style_index_0_id_e5e606d8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_vue_style_loader_index_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_postcss_loader_src_index_js_ref_6_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_FulfillingBouncingCircleSpinner_vue_vue_type_style_index_0_id_e5e606d8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ })

/******/ });
//# sourceMappingURL=epic-spinners.common.js.map