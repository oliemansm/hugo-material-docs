(function(e, a) { for(var i in a) e[i] = a[i]; }(window, /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
/*
 * Copyright (c) 2016-2018 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */

/* ----------------------------------------------------------------------------
 * Module
 * ------------------------------------------------------------------------- */

/* eslint-disable no-underscore-dangle */
exports.default = /* JSX */{

  /**
   * Create a native DOM node from JSX's intermediate representation
   *
   * @param {string} tag - Tag name
   * @param {?Object} properties - Properties
   * @param {Array<string | number | { __html: string } | Array<HTMLElement>>}
   *   children - Child nodes
   * @return {HTMLElement} Native DOM node
   */
  createElement: function createElement(tag, properties) {
    var el = document.createElement(tag);

    /* Set all properties */
    if (properties) Array.prototype.forEach.call(Object.keys(properties), function (attr) {
      el.setAttribute(attr, properties[attr]);
    });

    /* Iterate child nodes */
    var iterateChildNodes = function iterateChildNodes(nodes) {
      Array.prototype.forEach.call(nodes, function (node) {

        /* Directly append text content */
        if (typeof node === "string" || typeof node === "number") {
          el.textContent += node;

          /* Recurse, if we got an array */
        } else if (Array.isArray(node)) {
          iterateChildNodes(node);

          /* Append raw HTML */
        } else if (typeof node.__html !== "undefined") {
          el.innerHTML += node.__html;

          /* Append regular nodes */
        } else if (node instanceof Node) {
          el.appendChild(node);
        }
      });
    };

    /* Iterate child nodes and return element */

    for (var _len = arguments.length, children = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      children[_key - 2] = arguments[_key];
    }

    iterateChildNodes(children);
    return el;
  }
};
module.exports = exports.default;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var g;

// This works in non-strict mode
g = function () {
	return this;
}();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if (item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function (modules, mediaQuery) {
		if (typeof modules === "string") modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for (var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if (typeof id === "number") alreadyImportedModules[id] = true;
		}
		for (i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if (mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if (mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(15);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {
		return null;
	}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var index = typeof fetch == 'function' ? fetch.bind() : function (url, options) {
	options = options || {};
	return new Promise(function (resolve, reject) {
		var request = new XMLHttpRequest();

		request.open(options.method || 'get', url, true);

		for (var i in options.headers) {
			request.setRequestHeader(i, options.headers[i]);
		}

		request.withCredentials = options.credentials == 'include';

		request.onload = function () {
			resolve(response());
		};

		request.onerror = reject;

		request.send(options.body || null);

		function response() {
			var _keys = [],
			    all = [],
			    headers = {},
			    header;

			request.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm, function (m, key, value) {
				_keys.push(key = key.toLowerCase());
				all.push([key, value]);
				header = headers[key];
				headers[key] = header ? header + "," + value : value;
			});

			return {
				ok: (request.status / 100 | 0) == 2, // 200-299
				status: request.status,
				statusText: request.statusText,
				url: request.responseURL,
				clone: response,
				text: function text() {
					return Promise.resolve(request.responseText);
				},
				json: function json() {
					return Promise.resolve(request.responseText).then(JSON.parse);
				},
				blob: function blob() {
					return Promise.resolve(new Blob([request.response]));
				},
				headers: {
					keys: function keys() {
						return _keys;
					},
					entries: function entries() {
						return all;
					},
					get: function get(n) {
						return headers[n.toLowerCase()];
					},
					has: function has(n) {
						return n.toLowerCase() in headers;
					}
				}
			};
		}
	});
};

exports.default = index;
//# sourceMappingURL=unfetch.es.js.map

/***/ }),
/* 5 */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
 * Copyright (c) 2016-2018 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */

/* ----------------------------------------------------------------------------
 * Class
 * ------------------------------------------------------------------------- */

var Listener = function () {

  /**
   * Generic event listener
   *
   * @constructor
   *
   * @property {(Array<EventTarget>)} els_ - Event targets
   * @property {Object} handler_- Event handlers
   * @property {Array<string>} events_ - Event names
   * @property {Function} update_ - Update handler
   *
   * @param {?(string|EventTarget|NodeList<EventTarget>)} els -
   *   Selector or Event targets
   * @param {(string|Array<string>)} events - Event names
   * @param {(Object|Function)} handler - Handler to be invoked
   */
  function Listener(els, events, handler) {
    var _this = this;

    _classCallCheck(this, Listener);

    this.els_ = Array.prototype.slice.call(typeof els === "string" ? document.querySelectorAll(els) : [].concat(els));

    /* Set handler as function or directly as object */
    this.handler_ = typeof handler === "function" ? { update: handler } : handler;

    /* Initialize event names and update handler */
    this.events_ = [].concat(events);
    this.update_ = function (ev) {
      return _this.handler_.update(ev);
    };
  }

  /**
   * Register listener for all relevant events
   */


  Listener.prototype.listen = function listen() {
    var _this2 = this;

    this.els_.forEach(function (el) {
      _this2.events_.forEach(function (event) {
        el.addEventListener(event, _this2.update_, false);
      });
    });

    /* Execute setup handler, if implemented */
    if (typeof this.handler_.setup === "function") this.handler_.setup();
  };

  /**
   * Unregister listener for all relevant events
   */


  Listener.prototype.unlisten = function unlisten() {
    var _this3 = this;

    this.els_.forEach(function (el) {
      _this3.events_.forEach(function (event) {
        el.removeEventListener(event, _this3.update_);
      });
    });

    /* Execute reset handler, if implemented */
    if (typeof this.handler_.reset === "function") this.handler_.reset();
  };

  return Listener;
}();

exports.default = Listener;

/***/ }),
/* 7 */,
/* 8 */,
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(JSX) {

exports.__esModule = true;
exports.app = undefined;

__webpack_require__(10);

__webpack_require__(11);

__webpack_require__(12);

__webpack_require__(13);

__webpack_require__(16);

__webpack_require__(18);

__webpack_require__(19);

var _promisePolyfill = __webpack_require__(20);

var _promisePolyfill2 = _interopRequireDefault(_promisePolyfill);

var _clipboard = __webpack_require__(25);

var _clipboard2 = _interopRequireDefault(_clipboard);

var _fastclick = __webpack_require__(27);

var _fastclick2 = _interopRequireDefault(_fastclick);

var _Material = __webpack_require__(28);

var _Material2 = _interopRequireDefault(_Material);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * Copyright (c) 2016-2018 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */

window.Promise = window.Promise || _promisePolyfill2.default;

/* ----------------------------------------------------------------------------
 * Dependencies
 * ------------------------------------------------------------------------- */

/* ----------------------------------------------------------------------------
 * Polyfills
 * ------------------------------------------------------------------------- */

/* ----------------------------------------------------------------------------
 * Functions
 * ------------------------------------------------------------------------- */

/**
 * Return the meta tag value for the given key
 *
 * @param {string} key - Meta name
 *
 * @return {string} Meta content value
 */
var translate = function translate(key) {
  var meta = document.getElementsByName("lang:" + key)[0];
  if (!(meta instanceof HTMLMetaElement)) throw new ReferenceError();
  return meta.content;
};

/* ----------------------------------------------------------------------------
 * Application
 * ------------------------------------------------------------------------- */

/**
 * Initialize Material for MkDocs
 *
 * @param {Object} config - Configuration
 */
function initialize(config) {
  // eslint-disable-line func-style

  /* Initialize Modernizr and FastClick */
  new _Material2.default.Event.Listener(document, "DOMContentLoaded", function () {
    if (!(document.body instanceof HTMLElement)) throw new ReferenceError();

    /* Attach FastClick to mitigate 300ms delay on touch devices */
    _fastclick2.default.attach(document.body);

    /* Test for iOS */
    Modernizr.addTest("ios", function () {
      return !!navigator.userAgent.match(/(iPad|iPhone|iPod)/g);
    });

    /* Wrap all data tables for better overflow scrolling */
    var tables = document.querySelectorAll("table:not([class])"); // TODO: this is JSX, we should rename the file
    Array.prototype.forEach.call(tables, function (table) {
      var wrap = JSX.createElement(
        "div",
        { "class": "md-typeset__scrollwrap" },
        JSX.createElement("div", { "class": "md-typeset__table" })
      );
      if (table.nextSibling) {
        table.parentNode.insertBefore(wrap, table.nextSibling);
      } else {
        table.parentNode.appendChild(wrap);
      }
      wrap.children[0].appendChild(table);
    });

    /* Clipboard integration */
    if (_clipboard2.default.isSupported()) {
      var blocks = document.querySelectorAll(".codehilite > pre, pre > code");
      Array.prototype.forEach.call(blocks, function (block, index) {
        var id = "__code_" + index;

        /* Create button with message container */
        var button = JSX.createElement(
          "button",
          { "class": "md-clipboard", title: translate("clipboard.copy"),
            "data-clipboard-target": "#" + id + " pre, #" + id + " code" },
          JSX.createElement("span", { "class": "md-clipboard__message" })
        );

        /* Link to block and insert button */
        var parent = block.parentNode;
        parent.id = id;
        parent.insertBefore(button, block);
      });

      /* Initialize Clipboard listener */
      var copy = new _clipboard2.default(".md-clipboard");

      /* Success handler */
      copy.on("success", function (action) {
        var message = action.trigger.querySelector(".md-clipboard__message");
        if (!(message instanceof HTMLElement)) throw new ReferenceError();

        /* Clear selection and reset debounce logic */
        action.clearSelection();
        if (message.dataset.mdTimer) clearTimeout(parseInt(message.dataset.mdTimer, 10));

        /* Set message indicating success and show it */
        message.classList.add("md-clipboard__message--active");
        message.innerHTML = translate("clipboard.copied");

        /* Hide message after two seconds */
        message.dataset.mdTimer = setTimeout(function () {
          message.classList.remove("md-clipboard__message--active");
          message.dataset.mdTimer = "";
        }, 2000).toString();
      });
    }

    /* Polyfill details/summary functionality */
    if (!Modernizr.details) {
      var _blocks = document.querySelectorAll("details > summary");
      Array.prototype.forEach.call(_blocks, function (summary) {
        summary.addEventListener("click", function (ev) {
          var details = ev.target.parentNode;
          if (details.hasAttribute("open")) {
            details.removeAttribute("open");
          } else {
            details.setAttribute("open", "");
          }
        });
      });
    }

    /* Open details after anchor jump */
    var details = function details() {
      if (document.location.hash) {
        var el = document.getElementById(document.location.hash.substring(1));
        if (!el) return;

        /* Walk up as long as we're not in a details tag */
        var parent = el.parentNode;
        while (parent && !(parent instanceof HTMLDetailsElement)) {
          parent = parent.parentNode;
        } /* If there's a details tag, open it */
        if (parent && !parent.open) {
          parent.open = true;

          /* Force reload, so the viewport repositions */
          var loc = location.hash;
          location.hash = " ";
          location.hash = loc;
        }
      }
    };
    window.addEventListener("hashchange", details);
    details();

    /* Force 1px scroll offset to trigger overflow scrolling */
    if (Modernizr.ios) {
      var scrollable = document.querySelectorAll("[data-md-scrollfix]");
      Array.prototype.forEach.call(scrollable, function (item) {
        item.addEventListener("touchstart", function () {
          var top = item.scrollTop;

          /* We're at the top of the container */
          if (top === 0) {
            item.scrollTop = 1;

            /* We're at the bottom of the container */
          } else if (top + item.offsetHeight === item.scrollHeight) {
            item.scrollTop = top - 1;
          }
        });
      });
    }
  }).listen();

  /* Component: header shadow toggle */
  new _Material2.default.Event.Listener(window, ["scroll", "resize", "orientationchange"], new _Material2.default.Header.Shadow("[data-md-component=container]", "[data-md-component=header]")).listen();

  /* Component: header title toggle */
  new _Material2.default.Event.Listener(window, ["scroll", "resize", "orientationchange"], new _Material2.default.Header.Title("[data-md-component=title]", ".md-typeset h1")).listen();

  /* Component: hero visibility toggle */
  if (document.querySelector("[data-md-component=hero]")) new _Material2.default.Event.Listener(window, ["scroll", "resize", "orientationchange"], new _Material2.default.Tabs.Toggle("[data-md-component=hero]")).listen();

  /* Component: tabs visibility toggle */
  if (document.querySelector("[data-md-component=tabs]")) new _Material2.default.Event.Listener(window, ["scroll", "resize", "orientationchange"], new _Material2.default.Tabs.Toggle("[data-md-component=tabs]")).listen();

  /* Component: sidebar with navigation */
  new _Material2.default.Event.MatchMedia("(min-width: 1220px)", new _Material2.default.Event.Listener(window, ["scroll", "resize", "orientationchange"], new _Material2.default.Sidebar.Position("[data-md-component=navigation]", "[data-md-component=header]")));

  /* Component: sidebar with table of contents (missing on 404 page) */
  if (document.querySelector("[data-md-component=toc]")) new _Material2.default.Event.MatchMedia("(min-width: 960px)", new _Material2.default.Event.Listener(window, ["scroll", "resize", "orientationchange"], new _Material2.default.Sidebar.Position("[data-md-component=toc]", "[data-md-component=header]")));

  /* Component: link blurring for table of contents */
  new _Material2.default.Event.MatchMedia("(min-width: 960px)", new _Material2.default.Event.Listener(window, "scroll", new _Material2.default.Nav.Blur("[data-md-component=toc] [href]")));

  /* Component: collapsible elements for navigation */
  var collapsibles = document.querySelectorAll("[data-md-component=collapsible]");
  Array.prototype.forEach.call(collapsibles, function (collapse) {
    new _Material2.default.Event.MatchMedia("(min-width: 1220px)", new _Material2.default.Event.Listener(collapse.previousElementSibling, "click", new _Material2.default.Nav.Collapse(collapse)));
  });

  /* Component: active pane monitor for iOS scrolling fixes */
  new _Material2.default.Event.MatchMedia("(max-width: 1219px)", new _Material2.default.Event.Listener("[data-md-component=navigation] [data-md-toggle]", "change", new _Material2.default.Nav.Scrolling("[data-md-component=navigation] nav")));

  /* Initialize search, if available */
  if (document.querySelector("[data-md-component=search]")) {

    /* Component: search body lock for mobile */
    new _Material2.default.Event.MatchMedia("(max-width: 959px)", new _Material2.default.Event.Listener("[data-md-toggle=search]", "change", new _Material2.default.Search.Lock("[data-md-toggle=search]")));

    /* Component: search results */
    new _Material2.default.Event.Listener("[data-md-component=query]", ["focus", "keyup", "change"], new _Material2.default.Search.Result("[data-md-component=result]", function () {
      return fetch(config.url.base + "/" + (config.version < "0.17" ? "mkdocs" : "search") + "/search_index.json", {
        credentials: "same-origin"
      }).then(function (response) {
        return response.json();
      }).then(function (data) {
        return data.docs.map(function (doc) {
          doc.location = config.url.base + "/" + doc.location;
          return doc;
        });
      });
    })).listen();

    /* Listener: focus input after form reset */
    new _Material2.default.Event.Listener("[data-md-component=reset]", "click", function () {
      setTimeout(function () {
        var query = document.querySelector("[data-md-component=query]");
        if (!(query instanceof HTMLInputElement)) throw new ReferenceError();
        query.focus();
      }, 10);
    }).listen();

    /* Listener: focus input after opening search */
    new _Material2.default.Event.Listener("[data-md-toggle=search]", "change", function (ev) {
      setTimeout(function (toggle) {
        if (!(toggle instanceof HTMLInputElement)) throw new ReferenceError();
        if (toggle.checked) {
          var query = document.querySelector("[data-md-component=query]");
          if (!(query instanceof HTMLInputElement)) throw new ReferenceError();
          query.focus();
        }
      }, 400, ev.target);
    }).listen();

    /* Listener: open search on focus */
    new _Material2.default.Event.MatchMedia("(min-width: 960px)", new _Material2.default.Event.Listener("[data-md-component=query]", "focus", function () {
      var toggle = document.querySelector("[data-md-toggle=search]");
      if (!(toggle instanceof HTMLInputElement)) throw new ReferenceError();
      if (!toggle.checked) {
        toggle.checked = true;
        toggle.dispatchEvent(new CustomEvent("change"));
      }
    }));

    /* Listener: keyboard handlers */ // eslint-disable-next-line complexity
    new _Material2.default.Event.Listener(window, "keydown", function (ev) {
      // TODO: split up into component to reduce complexity
      var toggle = document.querySelector("[data-md-toggle=search]");
      if (!(toggle instanceof HTMLInputElement)) throw new ReferenceError();
      var query = document.querySelector("[data-md-component=query]");
      if (!(query instanceof HTMLInputElement)) throw new ReferenceError();

      /* Abort if meta key (macOS) or ctrl key (Windows) is pressed */
      if (ev.metaKey || ev.ctrlKey) return;

      /* Search is open */
      if (toggle.checked) {

        /* Enter: prevent form submission */
        if (ev.keyCode === 13) {
          if (query === document.activeElement) {
            ev.preventDefault();

            /* Go to current active/focused link */
            var focus = document.querySelector("[data-md-component=search] [href][data-md-state=active]");
            if (focus instanceof HTMLLinkElement) {
              window.location = focus.getAttribute("href");

              /* Close search */
              toggle.checked = false;
              toggle.dispatchEvent(new CustomEvent("change"));
              query.blur();
            }
          }

          /* Escape or Tab: close search */
        } else if (ev.keyCode === 9 || ev.keyCode === 27) {
          toggle.checked = false;
          toggle.dispatchEvent(new CustomEvent("change"));
          query.blur();

          /* Horizontal arrows and backspace: focus input */
        } else if ([8, 37, 39].indexOf(ev.keyCode) !== -1) {
          if (query !== document.activeElement) query.focus();

          /* Vertical arrows: select previous or next search result */
        } else if ([38, 40].indexOf(ev.keyCode) !== -1) {
          var key = ev.keyCode;

          /* Retrieve all results */
          var links = Array.prototype.slice.call(document.querySelectorAll("[data-md-component=query], [data-md-component=search] [href]"));

          /* Retrieve current active/focused result */
          var _focus = links.find(function (link) {
            if (!(link instanceof HTMLElement)) throw new ReferenceError();
            return link.dataset.mdState === "active";
          });
          if (_focus) _focus.dataset.mdState = "";

          /* Calculate index depending on direction, add length to form ring */
          var index = Math.max(0, (links.indexOf(_focus) + links.length + (key === 38 ? -1 : +1)) % links.length);

          /* Set active state and focus */
          if (links[index]) {
            links[index].dataset.mdState = "active";
            links[index].focus();
          }

          /* Prevent scrolling of page */
          ev.preventDefault();
          ev.stopPropagation();

          /* Return false prevents the cursor position from changing */
          return false;
        }

        /* Search is closed and we're not inside a form */
      } else if (document.activeElement && !document.activeElement.form) {

        /* F/S: Open search if not in input field */
        if (ev.keyCode === 70 || ev.keyCode === 83) {
          query.focus();
          ev.preventDefault();
        }
      }
    }).listen();

    /* Listener: focus query if in search is open and character is typed */
    new _Material2.default.Event.Listener(window, "keypress", function () {
      var toggle = document.querySelector("[data-md-toggle=search]");
      if (!(toggle instanceof HTMLInputElement)) throw new ReferenceError();
      if (toggle.checked) {
        var query = document.querySelector("[data-md-component=query]");
        if (!(query instanceof HTMLInputElement)) throw new ReferenceError();
        if (query !== document.activeElement) query.focus();
      }
    }).listen();
  }

  /* Listener: handle tabbing context for better accessibility */
  new _Material2.default.Event.Listener(document.body, "keydown", function (ev) {
    if (ev.keyCode === 9) {
      var labels = document.querySelectorAll("[data-md-component=navigation] .md-nav__link[for]:not([tabindex])");
      Array.prototype.forEach.call(labels, function (label) {
        if (label.offsetHeight) label.tabIndex = 0;
      });
    }
  }).listen();

  /* Listener: reset tabbing behavior */
  new _Material2.default.Event.Listener(document.body, "mousedown", function () {
    var labels = document.querySelectorAll("[data-md-component=navigation] .md-nav__link[tabindex]");
    Array.prototype.forEach.call(labels, function (label) {
      label.removeAttribute("tabIndex");
    });
  }).listen();

  document.body.addEventListener("click", function () {
    if (document.body.dataset.mdState === "tabbing") document.body.dataset.mdState = "";
  });

  /* Listener: close drawer when anchor links are clicked */
  new _Material2.default.Event.MatchMedia("(max-width: 959px)", new _Material2.default.Event.Listener("[data-md-component=navigation] [href^='#']", "click", function () {
    var toggle = document.querySelector("[data-md-toggle=drawer]");
    if (!(toggle instanceof HTMLInputElement)) throw new ReferenceError();
    if (toggle.checked) {
      toggle.checked = false;
      toggle.dispatchEvent(new CustomEvent("change"));
    }
  }))

  /* Retrieve facts for the given repository type */
  ;(function () {
    var el = document.querySelector("[data-md-source]");
    if (!el) return _promisePolyfill2.default.resolve([]);else if (!(el instanceof HTMLAnchorElement)) throw new ReferenceError();
    switch (el.dataset.mdSource) {
      case "github":
        return new _Material2.default.Source.Adapter.GitHub(el).fetch();
      default:
        return _promisePolyfill2.default.resolve([]);
    }

    /* Render repository information */
  })().then(function (facts) {
    var sources = document.querySelectorAll("[data-md-source]");
    Array.prototype.forEach.call(sources, function (source) {
      new _Material2.default.Source.Repository(source).initialize(facts);
    });
  });
}

/* ----------------------------------------------------------------------------
 * Exports
 * ------------------------------------------------------------------------- */

/* Provide this for downward compatibility for now */
var app = {
  initialize: initialize
};

exports.app = app;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/icons/bitbucket.svg";

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/icons/github.svg";

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/icons/gitlab.svg";

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(14);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(3)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/lib/loader.js!./application.scss", function() {
		var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/lib/loader.js!./application.scss");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\nhtml {\n  box-sizing: border-box; }\n\n*,\n*::before,\n*::after {\n  box-sizing: inherit; }\n\nhtml {\n  text-size-adjust: none; }\n\nbody {\n  margin: 0; }\n\nhr {\n  overflow: visible;\n  box-sizing: content-box; }\n\na {\n  -webkit-text-decoration-skip: objects; }\n\na,\nbutton,\nlabel,\ninput {\n  -webkit-tap-highlight-color: transparent; }\n\na {\n  color: inherit;\n  text-decoration: none; }\n\nsmall {\n  font-size: 80%; }\n\nsub,\nsup {\n  position: relative;\n  font-size: 80%;\n  line-height: 0;\n  vertical-align: baseline; }\n\nsub {\n  bottom: -0.25em; }\n\nsup {\n  top: -0.5em; }\n\nimg {\n  border-style: none; }\n\ntable {\n  border-collapse: separate;\n  border-spacing: 0; }\n\ntd,\nth {\n  font-weight: normal;\n  vertical-align: top; }\n\nbutton {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  outline-style: none;\n  background: transparent;\n  font-size: inherit; }\n\ninput {\n  border: 0;\n  outline: 0; }\n\n.md-icon, .md-clipboard::before, .md-nav__title::before, .md-nav__button, .md-nav__link::after, .md-search-result__article--document::before, .md-source-file::before, .md-typeset .admonition > .admonition-title::before, .md-typeset details > .admonition-title::before, .md-typeset .admonition > summary::before, .md-typeset details > summary::before, .md-typeset .footnote-backref, .md-typeset .critic.comment::before, .md-typeset summary::after, .md-typeset .task-list-control .task-list-indicator::before {\n  font-family: \"Material Icons\";\n  font-style: normal;\n  font-variant: normal;\n  font-weight: normal;\n  line-height: 1;\n  text-transform: none;\n  white-space: nowrap;\n  speak: none;\n  word-wrap: normal;\n  direction: ltr; }\n  .md-content__icon, .md-header-nav__button, .md-footer-nav__button, .md-nav__title::before, .md-nav__button, .md-search-result__article--document::before {\n    display: inline-block;\n    margin: 0.4rem;\n    padding: 0.8rem;\n    font-size: 2.4rem;\n    cursor: pointer; }\n\n.md-icon--arrow-back::before {\n  content: \"\\E5C4\"; }\n\n.md-icon--arrow-forward::before {\n  content: \"\\E5C8\"; }\n\n.md-icon--menu::before {\n  content: \"\\E5D2\"; }\n\n.md-icon--search::before {\n  content: \"\\E8B6\"; }\n\n[dir=\"rtl\"] .md-icon--arrow-back::before {\n  content: \"\\E5C8\"; }\n\n[dir=\"rtl\"] .md-icon--arrow-forward::before {\n  content: \"\\E5C4\"; }\n\nbody {\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n\nbody,\ninput {\n  color: rgba(0, 0, 0, 0.87);\n  font-feature-settings: \"kern\", \"liga\";\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif; }\n\npre,\ncode,\nkbd {\n  color: rgba(0, 0, 0, 0.87);\n  font-feature-settings: \"kern\";\n  font-family: \"Courier New\", Courier, monospace; }\n\n.md-typeset {\n  font-size: 1.6rem;\n  line-height: 1.6;\n  -webkit-print-color-adjust: exact; }\n  .md-typeset p,\n  .md-typeset ul,\n  .md-typeset ol,\n  .md-typeset blockquote {\n    margin: 1em 0; }\n  .md-typeset h1 {\n    margin: 0 0 4rem;\n    color: rgba(0, 0, 0, 0.54);\n    font-size: 3.125rem;\n    font-weight: 300;\n    letter-spacing: -0.01em;\n    line-height: 1.3; }\n  .md-typeset h2 {\n    margin: 4rem 0 1.6rem;\n    font-size: 2.5rem;\n    font-weight: 300;\n    letter-spacing: -0.01em;\n    line-height: 1.4; }\n  .md-typeset h3 {\n    margin: 3.2rem 0 1.6rem;\n    font-size: 2rem;\n    font-weight: 400;\n    letter-spacing: -0.01em;\n    line-height: 1.5; }\n  .md-typeset h2 + h3 {\n    margin-top: 1.6rem; }\n  .md-typeset h4 {\n    margin: 1.6rem 0;\n    font-size: 1.6rem;\n    font-weight: 700;\n    letter-spacing: -0.01em; }\n  .md-typeset h5,\n  .md-typeset h6 {\n    margin: 1.6rem 0;\n    color: rgba(0, 0, 0, 0.54);\n    font-size: 1.28rem;\n    font-weight: 700;\n    letter-spacing: -0.01em; }\n  .md-typeset h5 {\n    text-transform: uppercase; }\n  .md-typeset hr {\n    margin: 1.5em 0;\n    border-bottom: 0.1rem dotted rgba(0, 0, 0, 0.26); }\n  .md-typeset a {\n    color: #3f51b5;\n    word-break: break-word; }\n    .md-typeset a, .md-typeset a::before {\n      transition: color 0.125s; }\n    .md-typeset a:hover, .md-typeset a:active {\n      color: #536dfe; }\n    @media print {\n      .md-typeset a::after {\n        color: rgba(0, 0, 0, 0.54);\n        content: \" [\" attr(href) \"]\"; } }\n  .md-typeset code,\n  .md-typeset pre {\n    background-color: rgba(236, 236, 236, 0.5);\n    color: #37474F;\n    font-size: 85%;\n    direction: ltr; }\n    @media print {\n      .md-typeset code,\n      .md-typeset pre {\n        white-space: pre-wrap; } }\n  .md-typeset code {\n    margin: 0 0.29412em;\n    padding: 0.07353em 0;\n    border-radius: 0.2rem;\n    box-shadow: 0.29412em 0 0 rgba(236, 236, 236, 0.5), -0.29412em 0 0 rgba(236, 236, 236, 0.5);\n    word-break: break-word;\n    box-decoration-break: clone; }\n    @media print {\n      .md-typeset code {\n        box-shadow: none;\n        box-decoration-break: initial; } }\n  .md-typeset h1 code,\n  .md-typeset h2 code,\n  .md-typeset h3 code,\n  .md-typeset h4 code,\n  .md-typeset h5 code,\n  .md-typeset h6 code {\n    margin: 0;\n    background-color: transparent;\n    box-shadow: none; }\n  .md-typeset a > code {\n    margin: inherit;\n    padding: inherit;\n    border-radius: none;\n    background-color: inherit;\n    color: inherit;\n    box-shadow: none; }\n  .md-typeset pre {\n    position: relative;\n    margin: 1em 0;\n    border-radius: 0.2rem;\n    line-height: 1.4;\n    -webkit-overflow-scrolling: touch; }\n    @media only screen and (max-width: 44.9375em) {\n      .md-typeset pre {\n        margin: 1em -1.6rem;\n        border-radius: 0; } }\n    .md-typeset pre > code {\n      display: block;\n      margin: 0;\n      padding: 1.05rem 1.2rem;\n      background-color: transparent;\n      font-size: inherit;\n      box-shadow: none;\n      box-decoration-break: none;\n      overflow: auto; }\n      @media only screen and (max-width: 44.9375em) {\n        .md-typeset pre > code {\n          padding: 1.05rem 1.6rem; } }\n      .md-typeset pre > code::-webkit-scrollbar {\n        width: 0.4rem;\n        height: 0.4rem; }\n      .md-typeset pre > code::-webkit-scrollbar-thumb {\n        background-color: rgba(0, 0, 0, 0.26); }\n        .md-typeset pre > code::-webkit-scrollbar-thumb:hover {\n          background-color: #536dfe; }\n  .md-typeset kbd {\n    padding: 0 0.29412em;\n    border: 0.1rem solid #c9c9c9;\n    border-radius: 0.3rem;\n    border-bottom-color: #bcbcbc;\n    background-color: #FCFCFC;\n    color: #555555;\n    font-size: 85%;\n    box-shadow: 0 0.1rem 0 #b0b0b0;\n    word-break: break-word; }\n  .md-typeset mark {\n    margin: 0 0.25em;\n    padding: 0.0625em 0;\n    border-radius: 0.2rem;\n    background-color: rgba(255, 235, 59, 0.5);\n    box-shadow: 0.25em 0 0 rgba(255, 235, 59, 0.5), -0.25em 0 0 rgba(255, 235, 59, 0.5);\n    word-break: break-word;\n    box-decoration-break: clone; }\n  .md-typeset abbr {\n    border-bottom: 0.1rem dotted rgba(0, 0, 0, 0.54);\n    text-decoration: none;\n    cursor: help; }\n  .md-typeset small {\n    opacity: 0.75; }\n  .md-typeset sup,\n  .md-typeset sub {\n    margin-left: 0.07813em; }\n    [dir=\"rtl\"] .md-typeset sup, [dir=\"rtl\"]\n    .md-typeset sub {\n      margin-right: 0.07813em;\n      margin-left: initial; }\n  .md-typeset blockquote {\n    padding-left: 1.2rem;\n    border-left: 0.4rem solid rgba(0, 0, 0, 0.26);\n    color: rgba(0, 0, 0, 0.54); }\n    [dir=\"rtl\"] .md-typeset blockquote {\n      padding-right: 1.2rem;\n      padding-left: initial;\n      border-right: 0.4rem solid rgba(0, 0, 0, 0.26);\n      border-left: initial; }\n  .md-typeset ul {\n    list-style-type: disc; }\n  .md-typeset ul,\n  .md-typeset ol {\n    margin-left: 0.625em;\n    padding: 0; }\n    [dir=\"rtl\"] .md-typeset ul, [dir=\"rtl\"]\n    .md-typeset ol {\n      margin-right: 0.625em;\n      margin-left: initial; }\n    .md-typeset ul ol,\n    .md-typeset ol ol {\n      list-style-type: lower-alpha; }\n      .md-typeset ul ol ol,\n      .md-typeset ol ol ol {\n        list-style-type: lower-roman; }\n    .md-typeset ul li,\n    .md-typeset ol li {\n      margin-bottom: 0.5em;\n      margin-left: 1.25em; }\n      [dir=\"rtl\"] .md-typeset ul li, [dir=\"rtl\"]\n      .md-typeset ol li {\n        margin-right: 1.25em;\n        margin-left: initial; }\n      .md-typeset ul li p,\n      .md-typeset ul li blockquote,\n      .md-typeset ol li p,\n      .md-typeset ol li blockquote {\n        margin: 0.5em 0; }\n      .md-typeset ul li:last-child,\n      .md-typeset ol li:last-child {\n        margin-bottom: 0; }\n      .md-typeset ul li ul,\n      .md-typeset ul li ol,\n      .md-typeset ol li ul,\n      .md-typeset ol li ol {\n        margin: 0.5em 0 0.5em 0.625em; }\n        [dir=\"rtl\"] .md-typeset ul li ul, [dir=\"rtl\"]\n        .md-typeset ul li ol, [dir=\"rtl\"]\n        .md-typeset ol li ul, [dir=\"rtl\"]\n        .md-typeset ol li ol {\n          margin-right: 0.625em;\n          margin-left: initial; }\n  .md-typeset dd {\n    margin: 1em 0 1em 1.875em; }\n    [dir=\"rtl\"] .md-typeset dd {\n      margin-right: 1.875em;\n      margin-left: initial; }\n  .md-typeset iframe,\n  .md-typeset img,\n  .md-typeset svg {\n    max-width: 100%; }\n  .md-typeset table:not([class]) {\n    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);\n    display: inline-block;\n    max-width: 100%;\n    border-radius: 0.2rem;\n    font-size: 1.28rem;\n    overflow: auto;\n    -webkit-overflow-scrolling: touch; }\n    .md-typeset table:not([class]) + * {\n      margin-top: 1.5em; }\n    .md-typeset table:not([class]) th:not([align]),\n    .md-typeset table:not([class]) td:not([align]) {\n      text-align: left; }\n      [dir=\"rtl\"] .md-typeset table:not([class]) th:not([align]), [dir=\"rtl\"]\n      .md-typeset table:not([class]) td:not([align]) {\n        text-align: right; }\n    .md-typeset table:not([class]) th {\n      min-width: 10rem;\n      padding: 1.2rem 1.6rem;\n      background-color: rgba(0, 0, 0, 0.54);\n      color: white;\n      vertical-align: top; }\n    .md-typeset table:not([class]) td {\n      padding: 1.2rem 1.6rem;\n      border-top: 0.1rem solid rgba(0, 0, 0, 0.07);\n      vertical-align: top; }\n    .md-typeset table:not([class]) tr:first-child td {\n      border-top: 0; }\n    .md-typeset table:not([class]) a {\n      word-break: normal; }\n  .md-typeset__scrollwrap {\n    margin: 1em -1.6rem;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch; }\n  .md-typeset .md-typeset__table {\n    display: inline-block;\n    margin-bottom: 0.5em;\n    padding: 0 1.6rem; }\n    .md-typeset .md-typeset__table table {\n      display: table;\n      width: 100%;\n      margin: 0;\n      overflow: hidden; }\n\nhtml {\n  height: 100%;\n  font-size: 62.5%;\n  overflow-x: hidden; }\n  @media only screen and (min-width: 100em) {\n    html {\n      font-size: 68.75%; } }\n  @media only screen and (min-width: 125em) {\n    html {\n      font-size: 75%; } }\n\nbody {\n  position: relative;\n  height: 100%; }\n  @media only screen and (max-width: 59.9375em) {\n    body[data-md-state=\"lock\"] {\n      overflow: hidden; }\n      .ios body[data-md-state=\"lock\"] .md-container {\n        display: none; } }\n\nhr {\n  display: block;\n  height: 0.1rem;\n  padding: 0;\n  border: 0; }\n\n.md-svg {\n  display: none; }\n\n.md-grid {\n  max-width: 122rem;\n  margin-right: auto;\n  margin-left: auto; }\n\n.md-container,\n.md-main {\n  overflow: auto; }\n\n.md-container {\n  display: table;\n  width: 100%;\n  height: 100%;\n  padding-top: 4.8rem;\n  table-layout: fixed; }\n\n.md-main {\n  display: table-row;\n  height: 100%; }\n  .md-main__inner {\n    height: 100%;\n    padding-top: 3rem;\n    padding-bottom: 0.1rem; }\n\n.md-toggle {\n  display: none; }\n\n.md-overlay {\n  position: fixed;\n  top: 0;\n  width: 0;\n  height: 0;\n  transition: width   0s 0.25s,\r height  0s 0.25s,\r opacity 0.25s;\n  background-color: rgba(0, 0, 0, 0.54);\n  opacity: 0;\n  z-index: 3; }\n  @media only screen and (max-width: 76.1875em) {\n    [data-md-toggle=\"drawer\"]:checked ~ .md-overlay {\n      width: 100%;\n      height: 100%;\n      transition: width   0s,\r height  0s,\r opacity 0.25s;\n      opacity: 1; } }\n\n.md-flex {\n  display: table; }\n  .md-flex__cell {\n    display: table-cell;\n    position: relative;\n    vertical-align: top; }\n    .md-flex__cell--shrink {\n      width: 0%; }\n    .md-flex__cell--stretch {\n      display: table;\n      width: 100%;\n      table-layout: fixed; }\n  .md-flex__ellipsis {\n    display: table-cell;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    overflow: hidden; }\n\n.md-skip {\n  position: fixed;\n  width: 0.1rem;\n  height: 0.1rem;\n  margin: 1rem;\n  padding: 0.6rem 1rem;\n  clip: rect(0.1rem);\n  transform: translateY(0.8rem);\n  border-radius: 0.2rem;\n  background-color: rgba(0, 0, 0, 0.87);\n  color: white;\n  font-size: 1.28rem;\n  opacity: 0;\n  overflow: hidden; }\n  .md-skip:focus {\n    width: auto;\n    height: auto;\n    clip: auto;\n    transform: translateX(0);\n    transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.175s 0.075s;\n    opacity: 1;\n    z-index: 10; }\n\n@page {\n  margin: 25mm; }\n\n.md-clipboard {\n  position: absolute;\n  top: 0.6rem;\n  right: 0.6rem;\n  width: 2.8rem;\n  height: 2.8rem;\n  border-radius: 0.2rem;\n  font-size: 1.6rem;\n  cursor: pointer;\n  z-index: 1;\n  backface-visibility: hidden; }\n  @media print {\n    .md-clipboard {\n      display: none; } }\n  .md-clipboard::before {\n    transition: color   0.25s,\r opacity 0.25s;\n    color: rgba(0, 0, 0, 0.07);\n    content: \"\\E14D\"; }\n    pre:hover .md-clipboard::before,\n    .codehilite:hover .md-clipboard::before,\n    .md-typeset .highlight:hover .md-clipboard::before {\n      color: rgba(0, 0, 0, 0.54); }\n  .md-clipboard:focus::before, .md-clipboard:hover::before {\n    color: #536dfe; }\n  .md-clipboard__message {\n    display: block;\n    position: absolute;\n    top: 0;\n    right: 3.4rem;\n    padding: 0.6rem 1rem;\n    transform: translateX(0.8rem);\n    transition: transform 0.25s cubic-bezier(0.9, 0.1, 0.9, 0), opacity 0.175s;\n    border-radius: 0.2rem;\n    background-color: rgba(0, 0, 0, 0.54);\n    color: white;\n    font-size: 1.28rem;\n    white-space: nowrap;\n    opacity: 0;\n    pointer-events: none; }\n    .md-clipboard__message--active {\n      transform: translateX(0);\n      transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.175s 0.075s;\n      opacity: 1;\n      pointer-events: initial; }\n    .md-clipboard__message::before {\n      content: attr(aria-label); }\n    .md-clipboard__message::after {\n      display: block;\n      position: absolute;\n      top: 50%;\n      right: -0.4rem;\n      width: 0;\n      margin-top: -0.4rem;\n      border-width: 0.4rem 0 0.4rem 0.4rem;\n      border-style: solid;\n      border-color: transparent rgba(0, 0, 0, 0.54);\n      content: \"\"; }\n\n@media only screen and (min-width: 60em) {\n  .md-content {\n    margin-right: 24.2rem; }\n    [dir=\"rtl\"] .md-content {\n      margin-right: initial;\n      margin-left: 24.2rem; } }\n\n@media only screen and (min-width: 76.25em) {\n  .md-content {\n    margin-left: 24.2rem; }\n    [dir=\"rtl\"] .md-content {\n      margin-right: 24.2rem; } }\n\n.md-content__inner {\n  margin: 0 1.6rem 2.4rem;\n  padding-top: 1.2rem; }\n  @media only screen and (min-width: 76.25em) {\n    .md-content__inner {\n      margin-right: 2.4rem;\n      margin-left: 2.4rem; } }\n  .md-content__inner::before {\n    display: block;\n    height: 0.8rem;\n    content: \"\"; }\n  .md-content__inner > :last-child {\n    margin-bottom: 0; }\n\n.md-content__icon {\n  position: relative;\n  margin: 0.8rem 0;\n  padding: 0;\n  float: right; }\n  .md-typeset .md-content__icon {\n    color: rgba(0, 0, 0, 0.26); }\n  @media print {\n    .md-content__icon {\n      display: none; } }\n\n.md-header {\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n  height: 4.8rem;\n  transition: background-color 0.25s,\r color 0.25s;\n  background-color: #3f51b5;\n  color: white;\n  box-shadow: none;\n  z-index: 2;\n  backface-visibility: hidden; }\n  .no-js .md-header {\n    transition: none;\n    box-shadow: none; }\n  .md-header[data-md-state=\"shadow\"] {\n    transition: background-color 0.25s,\r color 0.25s,\r box-shadow 0.25s;\n    box-shadow: 0 0 0.4rem rgba(0, 0, 0, 0.1), 0 0.4rem 0.8rem rgba(0, 0, 0, 0.2); }\n  @media print {\n    .md-header {\n      display: none; } }\n\n.md-header-nav {\n  padding: 0 0.4rem; }\n  .md-header-nav__button {\n    position: relative;\n    transition: opacity 0.25s;\n    z-index: 1; }\n    .md-header-nav__button:hover {\n      opacity: 0.7; }\n    .md-header-nav__button.md-logo * {\n      display: block; }\n    .no-js .md-header-nav__button.md-icon--search {\n      display: none; }\n    @media only screen and (min-width: 60em) {\n      .md-header-nav__button.md-icon--search {\n        display: none; } }\n    @media only screen and (max-width: 76.1875em) {\n      .md-header-nav__button.md-icon--home, .md-header-nav__button.md-logo {\n        display: none; } }\n    @media only screen and (min-width: 76.25em) {\n      .md-header-nav__button.md-icon--menu {\n        display: none; } }\n  .md-header-nav__topic {\n    display: block;\n    position: absolute;\n    transition: transform 0.4s cubic-bezier(0.1, 0.7, 0.1, 1), opacity 0.15s;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    overflow: hidden; }\n    .md-header-nav__topic + .md-header-nav__topic {\n      transform: translateX(2.5rem);\n      transition: transform 0.4s cubic-bezier(1, 0.7, 0.1, 0.1), opacity 0.15s;\n      opacity: 0;\n      z-index: -1;\n      pointer-events: none; }\n      [dir=\"rtl\"] .md-header-nav__topic + .md-header-nav__topic {\n        transform: translateX(-2.5rem); }\n    .no-js .md-header-nav__topic {\n      position: initial; }\n    .no-js .md-header-nav__topic + .md-header-nav__topic {\n      display: none; }\n  .md-header-nav__title {\n    padding: 0 2rem;\n    font-size: 1.8rem;\n    line-height: 4.8rem; }\n    .md-header-nav__title[data-md-state=\"active\"] .md-header-nav__topic {\n      transform: translateX(-2.5rem);\n      transition: transform 0.4s cubic-bezier(1, 0.7, 0.1, 0.1), opacity 0.15s;\n      opacity: 0;\n      z-index: -1;\n      pointer-events: none; }\n      [dir=\"rtl\"] .md-header-nav__title[data-md-state=\"active\"] .md-header-nav__topic {\n        transform: translateX(2.5rem); }\n      .md-header-nav__title[data-md-state=\"active\"] .md-header-nav__topic + .md-header-nav__topic {\n        transform: translateX(0);\n        transition: transform 0.4s cubic-bezier(0.1, 0.7, 0.1, 1), opacity 0.15s;\n        opacity: 1;\n        z-index: 0;\n        pointer-events: initial; }\n  .md-header-nav__source {\n    display: none; }\n    @media only screen and (min-width: 60em) {\n      .md-header-nav__source {\n        display: block;\n        width: 23rem;\n        max-width: 23rem;\n        margin-left: 2.8rem;\n        padding-right: 1.2rem; }\n        [dir=\"rtl\"] .md-header-nav__source {\n          margin-right: 2.8rem;\n          margin-left: initial;\n          padding-right: initial;\n          padding-left: 1.2rem; } }\n\n.md-hero {\n  transition: background 0.25s;\n  background-color: #3f51b5;\n  color: white;\n  font-size: 2rem;\n  overflow: hidden; }\n  .md-hero__inner {\n    margin-top: 2rem;\n    padding: 1.6rem 1.6rem 0.8rem;\n    transition: transform 0.4s cubic-bezier(0.1, 0.7, 0.1, 1), opacity 0.25s;\n    transition-delay: 0.1s; }\n    @media only screen and (max-width: 76.1875em) {\n      .md-hero__inner {\n        margin-top: 4.8rem;\n        margin-bottom: 2.4rem; } }\n    [data-md-state=\"hidden\"] .md-hero__inner {\n      pointer-events: none;\n      transform: translateY(1.25rem);\n      transition: transform 0s   0.4s,\r opacity   0.1s 0s;\n      opacity: 0; }\n    .md-hero--expand .md-hero__inner {\n      margin-bottom: 2.4rem; }\n\n@media print {\n  .md-footer {\n    display: none; } }\n\n.md-footer-nav {\n  background-color: rgba(0, 0, 0, 0.87);\n  color: white; }\n  .md-footer-nav__inner {\n    padding: 0.4rem;\n    overflow: auto; }\n  .md-footer-nav__link {\n    padding-top: 2.8rem;\n    padding-bottom: 0.8rem;\n    transition: opacity 0.25s; }\n    @media only screen and (min-width: 45em) {\n      .md-footer-nav__link {\n        width: 50%; } }\n    .md-footer-nav__link:hover {\n      opacity: 0.7; }\n    .md-footer-nav__link--prev {\n      width: 25%;\n      float: left; }\n      [dir=\"rtl\"] .md-footer-nav__link--prev {\n        float: right; }\n      @media only screen and (max-width: 44.9375em) {\n        .md-footer-nav__link--prev .md-footer-nav__title {\n          display: none; } }\n    .md-footer-nav__link--next {\n      width: 75%;\n      float: right;\n      text-align: right; }\n      [dir=\"rtl\"] .md-footer-nav__link--next {\n        float: left;\n        text-align: left; }\n  .md-footer-nav__button {\n    transition: background 0.25s; }\n  .md-footer-nav__title {\n    position: relative;\n    padding: 0 2rem;\n    font-size: 1.8rem;\n    line-height: 4.8rem; }\n  .md-footer-nav__direction {\n    position: absolute;\n    right: 0;\n    left: 0;\n    margin-top: -2rem;\n    padding: 0 2rem;\n    color: rgba(255, 255, 255, 0.7);\n    font-size: 1.5rem; }\n\n.md-footer-meta {\n  background-color: rgba(0, 0, 0, 0.895); }\n  .md-footer-meta__inner {\n    padding: 0.4rem;\n    overflow: auto; }\n  html .md-footer-meta.md-typeset a {\n    color: rgba(255, 255, 255, 0.7); }\n    html .md-footer-meta.md-typeset a:focus, html .md-footer-meta.md-typeset a:hover {\n      color: white; }\n\n.md-footer-copyright {\n  margin: 0 1.2rem;\n  padding: 0.8rem 0;\n  color: rgba(255, 255, 255, 0.3);\n  font-size: 1.28rem; }\n  @media only screen and (min-width: 45em) {\n    .md-footer-copyright {\n      max-width: 75%;\n      float: left; }\n      [dir=\"rtl\"] .md-footer-copyright {\n        float: right; } }\n  .md-footer-copyright__highlight {\n    color: rgba(255, 255, 255, 0.7); }\n\n.md-footer-social {\n  margin: 0 0.8rem;\n  padding: 0.4rem 0 1.2rem; }\n  @media only screen and (min-width: 45em) {\n    .md-footer-social {\n      padding: 1.2rem 0;\n      float: right; }\n      [dir=\"rtl\"] .md-footer-social {\n        float: left; } }\n  .md-footer-social__link {\n    display: inline-block;\n    width: 3.2rem;\n    height: 3.2rem;\n    font-size: 1.6rem;\n    text-align: center; }\n    .md-footer-social__link::before {\n      line-height: 1.9; }\n\n.md-nav {\n  font-size: 1.4rem;\n  line-height: 1.3; }\n  .md-nav__title {\n    display: block;\n    padding: 0 1.2rem;\n    font-weight: 700;\n    text-overflow: ellipsis;\n    overflow: hidden; }\n    .md-nav__title::before {\n      display: none;\n      content: \"\\E5C4\"; }\n      [dir=\"rtl\"] .md-nav__title::before {\n        content: \"\\E5C8\"; }\n    .md-nav__title .md-nav__button {\n      display: none; }\n  .md-nav__list {\n    margin: 0;\n    padding: 0;\n    list-style: none; }\n  .md-nav__item {\n    padding: 0 1.2rem; }\n    .md-nav__item:last-child {\n      padding-bottom: 1.2rem; }\n    .md-nav__item .md-nav__item {\n      padding-right: 0; }\n      [dir=\"rtl\"] .md-nav__item .md-nav__item {\n        padding-right: 1.2rem;\n        padding-left: 0; }\n      .md-nav__item .md-nav__item:last-child {\n        padding-bottom: 0; }\n  .md-nav__button img {\n    width: 100%;\n    height: auto; }\n  .md-nav__link {\n    display: block;\n    margin-top: 0.625em;\n    transition: color 0.125s;\n    text-overflow: ellipsis;\n    cursor: pointer;\n    overflow: hidden; }\n    .md-nav__item--nested > .md-nav__link::after {\n      content: \"\\E313\"; }\n    html .md-nav__link[for=\"__toc\"] {\n      display: none; }\n      html .md-nav__link[for=\"__toc\"] ~ .md-nav {\n        display: none; }\n      html .md-nav__link[for=\"__toc\"] + .md-nav__link::after {\n        display: none; }\n    .md-nav__link[data-md-state=\"blur\"] {\n      color: rgba(0, 0, 0, 0.54); }\n    .md-nav__link:active, .md-nav__link--active {\n      color: #3f51b5; }\n    .md-nav__item--nested > .md-nav__link {\n      color: inherit; }\n    .md-nav__link:focus, .md-nav__link:hover {\n      color: #536dfe; }\n  .md-nav__source {\n    display: none; }\n  @media only screen and (max-width: 76.1875em) {\n    .md-nav {\n      background-color: white; }\n      .md-nav--primary,\n      .md-nav--primary .md-nav {\n        display: flex;\n        position: absolute;\n        top: 0;\n        right: 0;\n        left: 0;\n        flex-direction: column;\n        height: 100%;\n        z-index: 1; }\n      .md-nav--primary .md-nav__title,\n      .md-nav--primary .md-nav__item {\n        font-size: 1.6rem;\n        line-height: 1.5; }\n      html .md-nav--primary .md-nav__title {\n        position: relative;\n        height: 11.2rem;\n        padding: 6rem 1.6rem 0.4rem;\n        background-color: rgba(0, 0, 0, 0.07);\n        color: rgba(0, 0, 0, 0.54);\n        font-weight: 400;\n        line-height: 4.8rem;\n        white-space: nowrap;\n        cursor: pointer; }\n        html .md-nav--primary .md-nav__title::before {\n          display: block;\n          position: absolute;\n          top: 0.4rem;\n          left: 0.4rem;\n          width: 4rem;\n          height: 4rem;\n          color: rgba(0, 0, 0, 0.54); }\n        html .md-nav--primary .md-nav__title ~ .md-nav__list {\n          background-color: white;\n          box-shadow: 0 0.1rem 0 rgba(0, 0, 0, 0.07) inset; }\n          html .md-nav--primary .md-nav__title ~ .md-nav__list > .md-nav__item:first-child {\n            border-top: 0; }\n        html .md-nav--primary .md-nav__title--site {\n          position: relative;\n          background-color: #3f51b5;\n          color: white; }\n          html .md-nav--primary .md-nav__title--site .md-nav__button {\n            display: block;\n            position: absolute;\n            top: 0.4rem;\n            left: 0.4rem;\n            width: 6.4rem;\n            height: 6.4rem;\n            font-size: 4.8rem; }\n          html .md-nav--primary .md-nav__title--site::before {\n            display: none; }\n      html [dir=\"rtl\"] .md-nav--primary .md-nav__title::before {\n        right: 0.4rem;\n        left: initial; }\n      html [dir=\"rtl\"] .md-nav--primary .md-nav__title--site .md-nav__button {\n        right: 0.4rem;\n        left: initial; }\n      .md-nav--primary .md-nav__list {\n        flex: 1;\n        overflow-y: auto; }\n      .md-nav--primary .md-nav__item {\n        padding: 0;\n        border-top: 0.1rem solid rgba(0, 0, 0, 0.07); }\n        [dir=\"rtl\"] .md-nav--primary .md-nav__item {\n          padding: 0; }\n        .md-nav--primary .md-nav__item--nested > .md-nav__link {\n          padding-right: 4.8rem; }\n          [dir=\"rtl\"] .md-nav--primary .md-nav__item--nested > .md-nav__link {\n            padding-right: 1.6rem;\n            padding-left: 4.8rem; }\n          .md-nav--primary .md-nav__item--nested > .md-nav__link::after {\n            content: \"\\E315\"; }\n            [dir=\"rtl\"] .md-nav--primary .md-nav__item--nested > .md-nav__link::after {\n              content: \"\\E314\"; }\n      .md-nav--primary .md-nav__link {\n        position: relative;\n        margin-top: 0;\n        padding: 1.2rem 1.6rem; }\n        .md-nav--primary .md-nav__link::after {\n          position: absolute;\n          top: 50%;\n          right: 1.2rem;\n          margin-top: -1.2rem;\n          color: inherit;\n          font-size: 2.4rem; }\n          [dir=\"rtl\"] .md-nav--primary .md-nav__link::after {\n            right: initial;\n            left: 1.2rem; }\n      .md-nav--primary .md-nav--secondary .md-nav__link {\n        position: static; }\n      .md-nav--primary .md-nav--secondary .md-nav {\n        position: static;\n        background-color: transparent; }\n        .md-nav--primary .md-nav--secondary .md-nav .md-nav__link {\n          padding-left: 2.8rem; }\n          [dir=\"rtl\"] .md-nav--primary .md-nav--secondary .md-nav .md-nav__link {\n            padding-right: 2.8rem;\n            padding-left: initial; }\n        .md-nav--primary .md-nav--secondary .md-nav .md-nav .md-nav__link {\n          padding-left: 4rem; }\n          [dir=\"rtl\"] .md-nav--primary .md-nav--secondary .md-nav .md-nav .md-nav__link {\n            padding-right: 4rem;\n            padding-left: initial; }\n        .md-nav--primary .md-nav--secondary .md-nav .md-nav .md-nav .md-nav__link {\n          padding-left: 5.2rem; }\n          [dir=\"rtl\"] .md-nav--primary .md-nav--secondary .md-nav .md-nav .md-nav .md-nav__link {\n            padding-right: 5.2rem;\n            padding-left: initial; }\n        .md-nav--primary .md-nav--secondary .md-nav .md-nav .md-nav .md-nav .md-nav__link {\n          padding-left: 6.4rem; }\n          [dir=\"rtl\"] .md-nav--primary .md-nav--secondary .md-nav .md-nav .md-nav .md-nav .md-nav__link {\n            padding-right: 6.4rem;\n            padding-left: initial; }\n      .md-nav__toggle ~ .md-nav {\n        display: flex;\n        transform: translateX(100%);\n        transition: transform 0.25s cubic-bezier(0.8, 0, 0.6, 1), opacity 0.125s 0.05s;\n        opacity: 0; }\n        [dir=\"rtl\"] .md-nav__toggle ~ .md-nav {\n          transform: translateX(-100%); }\n        .no-csstransforms3d .md-nav__toggle ~ .md-nav {\n          display: none; }\n      .md-nav__toggle:checked ~ .md-nav {\n        transform: translateX(0);\n        transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.125s 0.125s;\n        opacity: 1; }\n        .no-csstransforms3d .md-nav__toggle:checked ~ .md-nav {\n          display: flex; } }\n  @media only screen and (max-width: 59.9375em) {\n    html .md-nav__link[for=\"__toc\"] {\n      display: block;\n      padding-right: 4.8rem; }\n      html .md-nav__link[for=\"__toc\"]::after {\n        color: inherit;\n        content: \"\\E8DE\"; }\n      html .md-nav__link[for=\"__toc\"] + .md-nav__link {\n        display: none; }\n      html .md-nav__link[for=\"__toc\"] ~ .md-nav {\n        display: flex; }\n    html [dir=\"rtl\"] .md-nav__link {\n      padding-right: 1.6rem;\n      padding-left: 4.8rem; }\n    .md-nav__source {\n      display: block;\n      padding: 0 0.4rem;\n      background-color: rgba(50, 64, 144, 0.9675);\n      color: white; } }\n  @media only screen and (min-width: 76.25em) {\n    .md-nav[data-md-state=\"animate\"] {\n      transition: max-height 0.25s cubic-bezier(0.86, 0, 0.07, 1); }\n    .md-nav__toggle ~ .md-nav {\n      max-height: 0;\n      overflow: hidden; }\n      .no-js .md-nav__toggle ~ .md-nav {\n        display: none; }\n    .md-nav__toggle:checked ~ .md-nav, .md-nav[data-md-state=\"expand\"] {\n      max-height: 100%; }\n      .no-js .md-nav__toggle:checked ~ .md-nav, .no-js .md-nav[data-md-state=\"expand\"] {\n        display: block; }\n    .md-nav__item--nested > .md-nav > .md-nav__title {\n      display: none; }\n    .md-nav__item--nested > .md-nav__link::after {\n      display: inline-block;\n      transform-origin: 0.45em 0.45em;\n      transform-style: preserve-3d;\n      vertical-align: -0.125em; }\n      .js .md-nav__item--nested > .md-nav__link::after {\n        transition: transform 0.4s; }\n    .md-nav__item--nested .md-nav__toggle:checked ~ .md-nav__link::after {\n      transform: rotateX(180deg); } }\n\n.no-js .md-search {\n  display: none; }\n\n@media only screen and (min-width: 60em) {\n  .md-search {\n    padding: 0.4rem; } }\n\n.md-search__overlay {\n  opacity: 0;\n  z-index: 1; }\n  @media only screen and (max-width: 59.9375em) {\n    .md-search__overlay {\n      position: absolute;\n      top: 0.4rem;\n      left: 0.4rem;\n      width: 3.6rem;\n      height: 3.6rem;\n      transform-origin: center;\n      transition: transform 0.3s 0.1s,\r opacity   0.2s 0.2s;\n      border-radius: 2rem;\n      background-color: white;\n      overflow: hidden;\n      pointer-events: none; }\n      [dir=\"rtl\"] .md-search__overlay {\n        right: 0.4rem;\n        left: initial; }\n      [data-md-toggle=\"search\"]:checked ~ .md-header .md-search__overlay {\n        transition: transform 0.4s,\r opacity   0.1s;\n        opacity: 1; } }\n  @media only screen and (max-width: 29.9375em) {\n    [data-md-toggle=\"search\"]:checked ~ .md-header .md-search__overlay {\n      transform: scale(45); } }\n  @media only screen and (min-width: 30em) and (max-width: 44.9375em) {\n    [data-md-toggle=\"search\"]:checked ~ .md-header .md-search__overlay {\n      transform: scale(60); } }\n  @media only screen and (min-width: 45em) and (max-width: 59.9375em) {\n    [data-md-toggle=\"search\"]:checked ~ .md-header .md-search__overlay {\n      transform: scale(75); } }\n  @media only screen and (min-width: 60em) {\n    .md-search__overlay {\n      position: fixed;\n      top: 0;\n      left: 0;\n      width: 0;\n      height: 0;\n      transition: width   0s 0.25s,\r height  0s 0.25s,\r opacity 0.25s;\n      background-color: rgba(0, 0, 0, 0.54);\n      cursor: pointer; }\n      [dir=\"rtl\"] .md-search__overlay {\n        right: 0;\n        left: initial; }\n      [data-md-toggle=\"search\"]:checked ~ .md-header .md-search__overlay {\n        width: 100%;\n        height: 100%;\n        transition: width   0s,\r height  0s,\r opacity 0.25s;\n        opacity: 1; } }\n\n@media only screen and (max-width: 59.9375em) {\n  .md-search__inner {\n    position: fixed;\n    top: 0;\n    left: 100%;\n    width: 100%;\n    height: 100%;\n    transform: translateX(5%);\n    transition: right 0s 0.3s, left 0s 0.3s, transform 0.15s 0.15s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.15s 0.15s;\n    opacity: 0;\n    z-index: 2; }\n    [data-md-toggle=\"search\"]:checked ~ .md-header .md-search__inner {\n      left: 0;\n      transform: translateX(0);\n      transition: right 0s 0s, left 0s 0s, transform 0.15s 0.15s cubic-bezier(0.1, 0.7, 0.1, 1), opacity 0.15s 0.15s;\n      opacity: 1; }\n      [dir=\"rtl\"] [data-md-toggle=\"search\"]:checked ~ .md-header .md-search__inner {\n        right: 0;\n        left: initial; }\n    html [dir=\"rtl\"] .md-search__inner {\n      right: 100%;\n      left: initial;\n      transform: translateX(-5%); } }\n\n@media only screen and (min-width: 60em) {\n  .md-search__inner {\n    position: relative;\n    width: 23rem;\n    padding: 0.2rem 0;\n    float: right;\n    transition: width 0.25s cubic-bezier(0.1, 0.7, 0.1, 1); }\n    [dir=\"rtl\"] .md-search__inner {\n      float: left; } }\n\n@media only screen and (min-width: 60em) and (max-width: 76.1875em) {\n  [data-md-toggle=\"search\"]:checked ~ .md-header .md-search__inner {\n    width: 46.8rem; } }\n\n@media only screen and (min-width: 76.25em) {\n  [data-md-toggle=\"search\"]:checked ~ .md-header .md-search__inner {\n    width: 68.8rem; } }\n\n.md-search__form {\n  position: relative; }\n  @media only screen and (min-width: 60em) {\n    .md-search__form {\n      border-radius: 0.2rem; } }\n\n.md-search__input {\n  position: relative;\n  padding: 0 4.4rem 0 7.2rem;\n  text-overflow: ellipsis;\n  z-index: 2; }\n  [dir=\"rtl\"] .md-search__input {\n    padding: 0 7.2rem 0 4.4rem; }\n  .md-search__input::placeholder {\n    transition: color 0.25s cubic-bezier(0.1, 0.7, 0.1, 1); }\n  .md-search__input ~ .md-search__icon, .md-search__input::placeholder {\n    color: rgba(0, 0, 0, 0.54); }\n  .md-search__input::-ms-clear {\n    display: none; }\n  @media only screen and (max-width: 59.9375em) {\n    .md-search__input {\n      width: 100%;\n      height: 4.8rem;\n      font-size: 1.8rem; } }\n  @media only screen and (min-width: 60em) {\n    .md-search__input {\n      width: 100%;\n      height: 3.6rem;\n      padding-left: 4.4rem;\n      transition: background-color 0.25s cubic-bezier(0.1, 0.7, 0.1, 1), color 0.25s cubic-bezier(0.1, 0.7, 0.1, 1);\n      border-radius: 0.2rem;\n      background-color: rgba(0, 0, 0, 0.26);\n      color: inherit;\n      font-size: 1.6rem; }\n      [dir=\"rtl\"] .md-search__input {\n        padding-right: 4.4rem; }\n      .md-search__input + .md-search__icon {\n        color: inherit; }\n      .md-search__input::placeholder {\n        color: rgba(255, 255, 255, 0.7); }\n      .md-search__input:hover {\n        background-color: rgba(255, 255, 255, 0.12); }\n      [data-md-toggle=\"search\"]:checked ~ .md-header .md-search__input {\n        border-radius: 0.2rem 0.2rem 0 0;\n        background-color: white;\n        color: rgba(0, 0, 0, 0.87);\n        text-overflow: none; }\n        [data-md-toggle=\"search\"]:checked ~ .md-header .md-search__input + .md-search__icon, [data-md-toggle=\"search\"]:checked ~ .md-header .md-search__input::placeholder {\n          color: rgba(0, 0, 0, 0.54); } }\n\n.md-search__icon {\n  position: absolute;\n  transition: color 0.25s cubic-bezier(0.1, 0.7, 0.1, 1), opacity 0.25s;\n  font-size: 2.4rem;\n  cursor: pointer;\n  z-index: 2; }\n  .md-search__icon:hover {\n    opacity: 0.7; }\n  .md-search__icon[for=\"__search\"] {\n    top: 0.6rem;\n    left: 1rem; }\n    [dir=\"rtl\"] .md-search__icon[for=\"__search\"] {\n      right: 1rem;\n      left: initial; }\n    .md-search__icon[for=\"__search\"]::before {\n      content: \"\\E8B6\"; }\n    @media only screen and (max-width: 59.9375em) {\n      .md-search__icon[for=\"__search\"] {\n        top: 1.2rem;\n        left: 1.6rem; }\n        .md-search__icon[for=\"__search\"][for=\"__search\"]::before {\n          content: \"\\E5C4\"; }\n          [dir=\"rtl\"] .md-search__icon[for=\"__search\"][for=\"__search\"]::before {\n            content: \"\\E5C8\"; } }\n  .md-search__icon[type=\"reset\"] {\n    top: 0.6rem;\n    right: 1rem;\n    transform: scale(0.125);\n    transition: transform 0.15s cubic-bezier(0.1, 0.7, 0.1, 1), opacity 0.15s;\n    opacity: 0; }\n    [dir=\"rtl\"] .md-search__icon[type=\"reset\"] {\n      right: initial;\n      left: 1rem; }\n    @media only screen and (max-width: 59.9375em) {\n      .md-search__icon[type=\"reset\"] {\n        top: 1.2rem;\n        right: 1.6rem; } }\n    [data-md-toggle=\"search\"]:checked ~ .md-header .md-search__input:valid ~ .md-search__icon[type=\"reset\"] {\n      transform: scale(1);\n      opacity: 1; }\n      [data-md-toggle=\"search\"]:checked ~ .md-header .md-search__input:valid ~ .md-search__icon[type=\"reset\"]:hover {\n        opacity: 0.7; }\n\n.md-search__output {\n  position: absolute;\n  width: 100%;\n  border-radius: 0 0 0.2rem 0.2rem;\n  overflow: hidden;\n  z-index: 1; }\n  @media only screen and (max-width: 59.9375em) {\n    .md-search__output {\n      top: 4.8rem;\n      bottom: 0; } }\n  @media only screen and (min-width: 60em) {\n    .md-search__output {\n      top: 3.8rem;\n      transition: opacity 0.4s;\n      opacity: 0; }\n      [data-md-toggle=\"search\"]:checked ~ .md-header .md-search__output {\n        box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12), 0 3px 5px -1px rgba(0, 0, 0, 0.4);\n        opacity: 1; } }\n\n.md-search__scrollwrap {\n  height: 100%;\n  background-color: white;\n  box-shadow: 0 0.1rem 0 rgba(0, 0, 0, 0.07) inset;\n  overflow-y: auto;\n  -webkit-overflow-scrolling: touch; }\n  @media only screen and (min-width: 60em) and (max-width: 76.1875em) {\n    .md-search__scrollwrap {\n      width: 46.8rem; } }\n  @media only screen and (min-width: 76.25em) {\n    .md-search__scrollwrap {\n      width: 68.8rem; } }\n  @media only screen and (min-width: 60em) {\n    .md-search__scrollwrap {\n      max-height: 0; }\n      [data-md-toggle=\"search\"]:checked ~ .md-header .md-search__scrollwrap {\n        max-height: 75vh; }\n      .md-search__scrollwrap::-webkit-scrollbar {\n        width: 0.4rem;\n        height: 0.4rem; }\n      .md-search__scrollwrap::-webkit-scrollbar-thumb {\n        background-color: rgba(0, 0, 0, 0.26); }\n        .md-search__scrollwrap::-webkit-scrollbar-thumb:hover {\n          background-color: #536dfe; } }\n\n.md-search-result {\n  color: rgba(0, 0, 0, 0.87);\n  word-break: break-word; }\n  .md-search-result__meta {\n    padding: 0 1.6rem;\n    background-color: rgba(0, 0, 0, 0.07);\n    color: rgba(0, 0, 0, 0.54);\n    font-size: 1.28rem;\n    line-height: 3.6rem; }\n    @media only screen and (min-width: 60em) {\n      .md-search-result__meta {\n        padding-left: 4.4rem; }\n        [dir=\"rtl\"] .md-search-result__meta {\n          padding-right: 4.4rem;\n          padding-left: initial; } }\n  .md-search-result__list {\n    margin: 0;\n    padding: 0;\n    border-top: 0.1rem solid rgba(0, 0, 0, 0.07);\n    list-style: none; }\n  .md-search-result__item {\n    box-shadow: 0 -0.1rem 0 rgba(0, 0, 0, 0.07); }\n  .md-search-result__link {\n    display: block;\n    transition: background 0.25s;\n    outline: 0;\n    overflow: hidden; }\n    .md-search-result__link[data-md-state=\"active\"], .md-search-result__link:hover {\n      background-color: rgba(83, 109, 254, 0.1); }\n      .md-search-result__link[data-md-state=\"active\"] .md-search-result__article::before, .md-search-result__link:hover .md-search-result__article::before {\n        opacity: 0.7; }\n    .md-search-result__link:last-child .md-search-result__teaser {\n      margin-bottom: 1.2rem; }\n  .md-search-result__article {\n    position: relative;\n    padding: 0 1.6rem;\n    overflow: auto; }\n    @media only screen and (min-width: 60em) {\n      .md-search-result__article {\n        padding-left: 4.4rem; }\n        [dir=\"rtl\"] .md-search-result__article {\n          padding-right: 4.4rem;\n          padding-left: 1.6rem; } }\n    .md-search-result__article--document::before {\n      position: absolute;\n      left: 0;\n      margin: 0.2rem;\n      transition: opacity 0.25s;\n      color: rgba(0, 0, 0, 0.54);\n      content: \"\\E880\"; }\n      [dir=\"rtl\"] .md-search-result__article--document::before {\n        right: 0;\n        left: initial; }\n      @media only screen and (max-width: 59.9375em) {\n        .md-search-result__article--document::before {\n          display: none; } }\n    .md-search-result__article--document .md-search-result__title {\n      margin: 1.1rem 0;\n      font-size: 1.6rem;\n      font-weight: 400;\n      line-height: 1.4; }\n  .md-search-result__title {\n    margin: 0.5em 0;\n    font-size: 1.28rem;\n    font-weight: 700;\n    line-height: 1.4; }\n  .md-search-result__teaser {\n    display: -webkit-box;\n    max-height: 3.3rem;\n    margin: 0.5em 0;\n    color: rgba(0, 0, 0, 0.54);\n    font-size: 1.28rem;\n    line-height: 1.4;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    -webkit-box-orient: vertical;\n    -webkit-line-clamp: 2; }\n    @media only screen and (max-width: 44.9375em) {\n      .md-search-result__teaser {\n        max-height: 5rem;\n        -webkit-line-clamp: 3; } }\n    @media only screen and (min-width: 60em) and (max-width: 76.1875em) {\n      .md-search-result__teaser {\n        max-height: 5rem;\n        -webkit-line-clamp: 3; } }\n  .md-search-result em {\n    font-style: normal;\n    font-weight: 700;\n    text-decoration: underline; }\n\n.md-sidebar {\n  position: absolute;\n  width: 24.2rem;\n  padding: 2.4rem 0;\n  overflow: hidden; }\n  @media print {\n    .md-sidebar {\n      display: none; } }\n  .md-sidebar[data-md-state=\"lock\"] {\n    position: fixed;\n    top: 4.8rem; }\n  @media only screen and (max-width: 76.1875em) {\n    .md-sidebar--primary {\n      position: fixed;\n      top: 0;\n      left: -24.2rem;\n      width: 24.2rem;\n      height: 100%;\n      transform: translateX(0);\n      transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.25s;\n      background-color: white;\n      z-index: 3; }\n      [dir=\"rtl\"] .md-sidebar--primary {\n        right: -24.2rem;\n        left: initial; }\n      .no-csstransforms3d .md-sidebar--primary {\n        display: none; }\n      [data-md-toggle=\"drawer\"]:checked ~ .md-container .md-sidebar--primary {\n        box-shadow: 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.4);\n        transform: translateX(24.2rem); }\n        [dir=\"rtl\"] [data-md-toggle=\"drawer\"]:checked ~ .md-container .md-sidebar--primary {\n          transform: translateX(-24.2rem); }\n        .no-csstransforms3d [data-md-toggle=\"drawer\"]:checked ~ .md-container .md-sidebar--primary {\n          display: block; }\n      .md-sidebar--primary .md-sidebar__scrollwrap {\n        overflow: hidden; } }\n  .md-sidebar--secondary {\n    display: none; }\n    @media only screen and (min-width: 60em) {\n      .md-sidebar--secondary {\n        display: block;\n        margin-left: 100%;\n        transform: translate(-100%, 0); }\n        [dir=\"rtl\"] .md-sidebar--secondary {\n          margin-right: 100%;\n          margin-left: initial;\n          transform: translate(100%, 0); } }\n    @media only screen and (min-width: 76.25em) {\n      .md-sidebar--secondary {\n        margin-left: 122rem; }\n        [dir=\"rtl\"] .md-sidebar--secondary {\n          margin-right: 122rem;\n          margin-left: initial; } }\n  .md-sidebar__scrollwrap {\n    max-height: 100%;\n    margin: 0 0.4rem;\n    overflow-y: auto;\n    backface-visibility: hidden; }\n    @media only screen and (max-width: 76.1875em) {\n      .md-sidebar--primary .md-sidebar__scrollwrap {\n        position: absolute;\n        top: 0;\n        right: 0;\n        bottom: 0;\n        left: 0;\n        margin: 0; } }\n    .md-sidebar__scrollwrap::-webkit-scrollbar {\n      width: 0.4rem;\n      height: 0.4rem; }\n    .md-sidebar__scrollwrap::-webkit-scrollbar-thumb {\n      background-color: rgba(0, 0, 0, 0.26); }\n      .md-sidebar__scrollwrap::-webkit-scrollbar-thumb:hover {\n        background-color: #536dfe; }\n\n@keyframes md-source__facts--done {\n  0% {\n    height: 0; }\n  100% {\n    height: 1.3rem; } }\n\n@keyframes md-source__fact--done {\n  0% {\n    transform: translateY(100%);\n    opacity: 0; }\n  50% {\n    opacity: 0; }\n  100% {\n    transform: translateY(0%);\n    opacity: 1; } }\n\n.md-source {\n  display: block;\n  padding-right: 1.2rem;\n  transition: opacity 0.25s;\n  font-size: 1.3rem;\n  line-height: 1.2;\n  white-space: nowrap; }\n  [dir=\"rtl\"] .md-source {\n    padding-right: initial;\n    padding-left: 1.2rem; }\n  .md-source:hover {\n    opacity: 0.7; }\n  .md-source::after {\n    display: inline-block;\n    height: 4.8rem;\n    content: \"\";\n    vertical-align: middle; }\n  .md-source__icon {\n    display: inline-block;\n    width: 4.8rem;\n    height: 4.8rem;\n    content: \"\";\n    vertical-align: middle; }\n    .md-source__icon svg {\n      width: 2.4rem;\n      height: 2.4rem;\n      margin-top: 1.2rem;\n      margin-left: 1.2rem; }\n      [dir=\"rtl\"] .md-source__icon svg {\n        margin-right: 1.2rem;\n        margin-left: initial; }\n    .md-source__icon + .md-source__repository {\n      margin-left: -4.4rem;\n      padding-left: 4rem; }\n      [dir=\"rtl\"] .md-source__icon + .md-source__repository {\n        margin-right: -4.4rem;\n        margin-left: initial;\n        padding-right: 4rem;\n        padding-left: initial; }\n  .md-source__repository {\n    display: inline-block;\n    max-width: 100%;\n    margin-left: 1.2rem;\n    font-weight: 700;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    vertical-align: middle; }\n  .md-source__facts {\n    margin: 0;\n    padding: 0;\n    font-size: 1.1rem;\n    font-weight: 700;\n    list-style-type: none;\n    opacity: 0.75;\n    overflow: hidden; }\n    [data-md-state=\"done\"] .md-source__facts {\n      animation: md-source__facts--done 0.25s ease-in; }\n  .md-source__fact {\n    float: left; }\n    [dir=\"rtl\"] .md-source__fact {\n      float: right; }\n    [data-md-state=\"done\"] .md-source__fact {\n      animation: md-source__fact--done 0.4s ease-out; }\n    .md-source__fact::before {\n      margin: 0 0.2rem;\n      content: \"\\B7\"; }\n    .md-source__fact:first-child::before {\n      display: none; }\n\n.md-source-file {\n  display: inline-block;\n  margin: 1em 0.5em 1em 0;\n  padding-right: 0.5rem;\n  border-radius: 0.2rem;\n  background-color: rgba(0, 0, 0, 0.07);\n  font-size: 1.28rem;\n  list-style-type: none;\n  cursor: pointer;\n  overflow: hidden; }\n  .md-source-file::before {\n    display: inline-block;\n    margin-right: 0.5rem;\n    padding: 0.5rem;\n    background-color: rgba(0, 0, 0, 0.26);\n    color: white;\n    font-size: 1.6rem;\n    content: \"\\E86F\";\n    vertical-align: middle; }\n  html .md-source-file {\n    transition: background 0.4s, color 0.4s, box-shadow 0.4s cubic-bezier(0.4, 0, 0.2, 1); }\n    html .md-source-file::before {\n      transition: inherit; }\n  html body .md-typeset .md-source-file {\n    color: rgba(0, 0, 0, 0.54); }\n  .md-source-file:hover {\n    box-shadow: 0 0 8px rgba(0, 0, 0, 0.18), 0 8px 16px rgba(0, 0, 0, 0.36); }\n    .md-source-file:hover::before {\n      background-color: #536dfe; }\n\n.md-tabs {\n  width: 100%;\n  transition: background 0.25s;\n  background-color: #3f51b5;\n  color: white;\n  overflow: auto; }\n  @media only screen and (max-width: 76.1875em) {\n    .md-tabs {\n      display: none; } }\n  @media print {\n    .md-tabs {\n      display: none; } }\n  .md-tabs__list {\n    margin: 0;\n    margin-left: 0.4rem;\n    padding: 0;\n    list-style: none;\n    white-space: nowrap; }\n  .md-tabs__item {\n    display: inline-block;\n    height: 4.8rem;\n    padding-right: 1.2rem;\n    padding-left: 1.2rem; }\n  .md-tabs__link {\n    display: block;\n    margin-top: 1.6rem;\n    transition: transform 0.4s cubic-bezier(0.1, 0.7, 0.1, 1), opacity 0.25s;\n    font-size: 1.4rem;\n    opacity: 0.7; }\n    .md-tabs__link--active, .md-tabs__link:hover {\n      color: inherit;\n      opacity: 1; }\n    .md-tabs__item:nth-child(2) .md-tabs__link {\n      transition-delay: 0.02s; }\n    .md-tabs__item:nth-child(3) .md-tabs__link {\n      transition-delay: 0.04s; }\n    .md-tabs__item:nth-child(4) .md-tabs__link {\n      transition-delay: 0.06s; }\n    .md-tabs__item:nth-child(5) .md-tabs__link {\n      transition-delay: 0.08s; }\n    .md-tabs__item:nth-child(6) .md-tabs__link {\n      transition-delay: 0.1s; }\n    .md-tabs__item:nth-child(7) .md-tabs__link {\n      transition-delay: 0.12s; }\n    .md-tabs__item:nth-child(8) .md-tabs__link {\n      transition-delay: 0.14s; }\n    .md-tabs__item:nth-child(9) .md-tabs__link {\n      transition-delay: 0.16s; }\n    .md-tabs__item:nth-child(10) .md-tabs__link {\n      transition-delay: 0.18s; }\n    .md-tabs__item:nth-child(11) .md-tabs__link {\n      transition-delay: 0.2s; }\n    .md-tabs__item:nth-child(12) .md-tabs__link {\n      transition-delay: 0.22s; }\n    .md-tabs__item:nth-child(13) .md-tabs__link {\n      transition-delay: 0.24s; }\n    .md-tabs__item:nth-child(14) .md-tabs__link {\n      transition-delay: 0.26s; }\n    .md-tabs__item:nth-child(15) .md-tabs__link {\n      transition-delay: 0.28s; }\n    .md-tabs__item:nth-child(16) .md-tabs__link {\n      transition-delay: 0.3s; }\n  .md-tabs[data-md-state=\"hidden\"] {\n    pointer-events: none; }\n    .md-tabs[data-md-state=\"hidden\"] .md-tabs__link {\n      transform: translateY(50%);\n      transition: color     0.25s,\r transform 0s 0.4s,\r opacity   0.1s;\n      opacity: 0; }\n  @media only screen and (min-width: 76.25em) {\n    .md-tabs ~ .md-main .md-nav--primary > .md-nav__list > .md-nav__item--nested {\n      font-size: 0;\n      visibility: hidden; }\n    .md-tabs--active ~ .md-main .md-nav--primary .md-nav__title {\n      display: block;\n      padding: 0; }\n    .md-tabs--active ~ .md-main .md-nav--primary .md-nav__title--site {\n      display: none; }\n    .no-js .md-tabs--active ~ .md-main .md-nav--primary .md-nav {\n      display: block; }\n    .md-tabs--active ~ .md-main .md-nav--primary > .md-nav__list > .md-nav__item {\n      font-size: 0;\n      visibility: hidden; }\n      .md-tabs--active ~ .md-main .md-nav--primary > .md-nav__list > .md-nav__item--nested {\n        display: none;\n        font-size: 1.4rem;\n        overflow: auto;\n        visibility: visible; }\n        .md-tabs--active ~ .md-main .md-nav--primary > .md-nav__list > .md-nav__item--nested > .md-nav__link {\n          display: none; }\n      .md-tabs--active ~ .md-main .md-nav--primary > .md-nav__list > .md-nav__item--active {\n        display: block; }\n    .md-tabs--active ~ .md-main .md-nav[data-md-level=\"1\"] {\n      max-height: initial;\n      overflow: visible; }\n      .md-tabs--active ~ .md-main .md-nav[data-md-level=\"1\"] > .md-nav__list > .md-nav__item {\n        padding-left: 0; }\n      .md-tabs--active ~ .md-main .md-nav[data-md-level=\"1\"] .md-nav .md-nav__title {\n        display: none; } }\n\n.md-typeset .admonition, .md-typeset details {\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);\n  position: relative;\n  margin: 1.5625em 0;\n  padding: 0 1.2rem;\n  border-left: 0.4rem solid #448aff;\n  border-radius: 0.2rem;\n  font-size: 1.28rem;\n  overflow: auto; }\n  [dir=\"rtl\"] .md-typeset .admonition, [dir=\"rtl\"] .md-typeset details {\n    border-right: 0.4rem solid #448aff;\n    border-left: none; }\n  html .md-typeset .admonition > :last-child, html .md-typeset details > :last-child {\n    margin-bottom: 1.2rem; }\n  .md-typeset .admonition .admonition, .md-typeset details .admonition, .md-typeset .admonition details, .md-typeset details details {\n    margin: 1em 0; }\n  .md-typeset .admonition > .admonition-title, .md-typeset details > .admonition-title, .md-typeset .admonition > summary, .md-typeset details > summary {\n    margin: 0 -1.2rem;\n    padding: 0.8rem 1.2rem 0.8rem 4rem;\n    border-bottom: 0.1rem solid rgba(68, 138, 255, 0.1);\n    background-color: rgba(68, 138, 255, 0.1);\n    font-weight: 700; }\n    [dir=\"rtl\"] .md-typeset .admonition > .admonition-title, [dir=\"rtl\"] .md-typeset details > .admonition-title, [dir=\"rtl\"] .md-typeset .admonition > summary, [dir=\"rtl\"] .md-typeset details > summary {\n      padding: 0.8rem 4rem 0.8rem 1.2rem; }\n    .md-typeset .admonition > .admonition-title:last-child, .md-typeset details > .admonition-title:last-child, .md-typeset .admonition > summary:last-child, .md-typeset details > summary:last-child {\n      margin-bottom: 0; }\n    .md-typeset .admonition > .admonition-title::before, .md-typeset details > .admonition-title::before, .md-typeset .admonition > summary::before, .md-typeset details > summary::before {\n      position: absolute;\n      left: 1.2rem;\n      color: #448aff;\n      font-size: 2rem;\n      content: \"\\E3C9\"; }\n      [dir=\"rtl\"] .md-typeset .admonition > .admonition-title::before, [dir=\"rtl\"] .md-typeset details > .admonition-title::before, [dir=\"rtl\"] .md-typeset .admonition > summary::before, [dir=\"rtl\"] .md-typeset details > summary::before {\n        right: 1.2rem;\n        left: initial; }\n  .md-typeset .admonition.summary, .md-typeset details.summary, .md-typeset .admonition.tldr, .md-typeset details.tldr, .md-typeset .admonition.abstract, .md-typeset details.abstract {\n    border-left-color: #00b0ff; }\n    [dir=\"rtl\"] .md-typeset .admonition.summary, [dir=\"rtl\"] .md-typeset details.summary, [dir=\"rtl\"] .md-typeset .admonition.tldr, [dir=\"rtl\"] .md-typeset details.tldr, [dir=\"rtl\"] .md-typeset .admonition.abstract, [dir=\"rtl\"] .md-typeset details.abstract {\n      border-right-color: #00b0ff; }\n    .md-typeset .admonition.summary > .admonition-title, .md-typeset details.summary > .admonition-title, .md-typeset .admonition.tldr > .admonition-title, .md-typeset details.tldr > .admonition-title, .md-typeset .admonition.summary > summary, .md-typeset details.summary > summary, .md-typeset .admonition.tldr > summary, .md-typeset details.tldr > summary, .md-typeset .admonition.abstract > .admonition-title, .md-typeset details.abstract > .admonition-title, .md-typeset .admonition.abstract > summary, .md-typeset details.abstract > summary {\n      border-bottom-color: 0.1rem solid rgba(0, 176, 255, 0.1);\n      background-color: rgba(0, 176, 255, 0.1); }\n      .md-typeset .admonition.summary > .admonition-title::before, .md-typeset details.summary > .admonition-title::before, .md-typeset .admonition.tldr > .admonition-title::before, .md-typeset details.tldr > .admonition-title::before, .md-typeset .admonition.summary > summary::before, .md-typeset details.summary > summary::before, .md-typeset .admonition.tldr > summary::before, .md-typeset details.tldr > summary::before, .md-typeset .admonition.abstract > .admonition-title::before, .md-typeset details.abstract > .admonition-title::before, .md-typeset .admonition.abstract > summary::before, .md-typeset details.abstract > summary::before {\n        color: #00b0ff;\n        content: \"\\E8D2\"; }\n  .md-typeset .admonition.todo, .md-typeset details.todo, .md-typeset .admonition.info, .md-typeset details.info {\n    border-left-color: #00b8d4; }\n    [dir=\"rtl\"] .md-typeset .admonition.todo, [dir=\"rtl\"] .md-typeset details.todo, [dir=\"rtl\"] .md-typeset .admonition.info, [dir=\"rtl\"] .md-typeset details.info {\n      border-right-color: #00b8d4; }\n    .md-typeset .admonition.todo > .admonition-title, .md-typeset details.todo > .admonition-title, .md-typeset .admonition.todo > summary, .md-typeset details.todo > summary, .md-typeset .admonition.info > .admonition-title, .md-typeset details.info > .admonition-title, .md-typeset .admonition.info > summary, .md-typeset details.info > summary {\n      border-bottom-color: 0.1rem solid rgba(0, 184, 212, 0.1);\n      background-color: rgba(0, 184, 212, 0.1); }\n      .md-typeset .admonition.todo > .admonition-title::before, .md-typeset details.todo > .admonition-title::before, .md-typeset .admonition.todo > summary::before, .md-typeset details.todo > summary::before, .md-typeset .admonition.info > .admonition-title::before, .md-typeset details.info > .admonition-title::before, .md-typeset .admonition.info > summary::before, .md-typeset details.info > summary::before {\n        color: #00b8d4;\n        content: \"\\E88E\"; }\n  .md-typeset .admonition.hint, .md-typeset details.hint, .md-typeset .admonition.important, .md-typeset details.important, .md-typeset .admonition.tip, .md-typeset details.tip {\n    border-left-color: #00bfa5; }\n    [dir=\"rtl\"] .md-typeset .admonition.hint, [dir=\"rtl\"] .md-typeset details.hint, [dir=\"rtl\"] .md-typeset .admonition.important, [dir=\"rtl\"] .md-typeset details.important, [dir=\"rtl\"] .md-typeset .admonition.tip, [dir=\"rtl\"] .md-typeset details.tip {\n      border-right-color: #00bfa5; }\n    .md-typeset .admonition.hint > .admonition-title, .md-typeset details.hint > .admonition-title, .md-typeset .admonition.important > .admonition-title, .md-typeset details.important > .admonition-title, .md-typeset .admonition.hint > summary, .md-typeset details.hint > summary, .md-typeset .admonition.important > summary, .md-typeset details.important > summary, .md-typeset .admonition.tip > .admonition-title, .md-typeset details.tip > .admonition-title, .md-typeset .admonition.tip > summary, .md-typeset details.tip > summary {\n      border-bottom-color: 0.1rem solid rgba(0, 191, 165, 0.1);\n      background-color: rgba(0, 191, 165, 0.1); }\n      .md-typeset .admonition.hint > .admonition-title::before, .md-typeset details.hint > .admonition-title::before, .md-typeset .admonition.important > .admonition-title::before, .md-typeset details.important > .admonition-title::before, .md-typeset .admonition.hint > summary::before, .md-typeset details.hint > summary::before, .md-typeset .admonition.important > summary::before, .md-typeset details.important > summary::before, .md-typeset .admonition.tip > .admonition-title::before, .md-typeset details.tip > .admonition-title::before, .md-typeset .admonition.tip > summary::before, .md-typeset details.tip > summary::before {\n        color: #00bfa5;\n        content: \"\\E80E\"; }\n  .md-typeset .admonition.check, .md-typeset details.check, .md-typeset .admonition.done, .md-typeset details.done, .md-typeset .admonition.success, .md-typeset details.success {\n    border-left-color: #00c853; }\n    [dir=\"rtl\"] .md-typeset .admonition.check, [dir=\"rtl\"] .md-typeset details.check, [dir=\"rtl\"] .md-typeset .admonition.done, [dir=\"rtl\"] .md-typeset details.done, [dir=\"rtl\"] .md-typeset .admonition.success, [dir=\"rtl\"] .md-typeset details.success {\n      border-right-color: #00c853; }\n    .md-typeset .admonition.check > .admonition-title, .md-typeset details.check > .admonition-title, .md-typeset .admonition.done > .admonition-title, .md-typeset details.done > .admonition-title, .md-typeset .admonition.check > summary, .md-typeset details.check > summary, .md-typeset .admonition.done > summary, .md-typeset details.done > summary, .md-typeset .admonition.success > .admonition-title, .md-typeset details.success > .admonition-title, .md-typeset .admonition.success > summary, .md-typeset details.success > summary {\n      border-bottom-color: 0.1rem solid rgba(0, 200, 83, 0.1);\n      background-color: rgba(0, 200, 83, 0.1); }\n      .md-typeset .admonition.check > .admonition-title::before, .md-typeset details.check > .admonition-title::before, .md-typeset .admonition.done > .admonition-title::before, .md-typeset details.done > .admonition-title::before, .md-typeset .admonition.check > summary::before, .md-typeset details.check > summary::before, .md-typeset .admonition.done > summary::before, .md-typeset details.done > summary::before, .md-typeset .admonition.success > .admonition-title::before, .md-typeset details.success > .admonition-title::before, .md-typeset .admonition.success > summary::before, .md-typeset details.success > summary::before {\n        color: #00c853;\n        content: \"\\E876\"; }\n  .md-typeset .admonition.help, .md-typeset details.help, .md-typeset .admonition.faq, .md-typeset details.faq, .md-typeset .admonition.question, .md-typeset details.question {\n    border-left-color: #64dd17; }\n    [dir=\"rtl\"] .md-typeset .admonition.help, [dir=\"rtl\"] .md-typeset details.help, [dir=\"rtl\"] .md-typeset .admonition.faq, [dir=\"rtl\"] .md-typeset details.faq, [dir=\"rtl\"] .md-typeset .admonition.question, [dir=\"rtl\"] .md-typeset details.question {\n      border-right-color: #64dd17; }\n    .md-typeset .admonition.help > .admonition-title, .md-typeset details.help > .admonition-title, .md-typeset .admonition.faq > .admonition-title, .md-typeset details.faq > .admonition-title, .md-typeset .admonition.help > summary, .md-typeset details.help > summary, .md-typeset .admonition.faq > summary, .md-typeset details.faq > summary, .md-typeset .admonition.question > .admonition-title, .md-typeset details.question > .admonition-title, .md-typeset .admonition.question > summary, .md-typeset details.question > summary {\n      border-bottom-color: 0.1rem solid rgba(100, 221, 23, 0.1);\n      background-color: rgba(100, 221, 23, 0.1); }\n      .md-typeset .admonition.help > .admonition-title::before, .md-typeset details.help > .admonition-title::before, .md-typeset .admonition.faq > .admonition-title::before, .md-typeset details.faq > .admonition-title::before, .md-typeset .admonition.help > summary::before, .md-typeset details.help > summary::before, .md-typeset .admonition.faq > summary::before, .md-typeset details.faq > summary::before, .md-typeset .admonition.question > .admonition-title::before, .md-typeset details.question > .admonition-title::before, .md-typeset .admonition.question > summary::before, .md-typeset details.question > summary::before {\n        color: #64dd17;\n        content: \"\\E887\"; }\n  .md-typeset .admonition.caution, .md-typeset details.caution, .md-typeset .admonition.attention, .md-typeset details.attention, .md-typeset .admonition.warning, .md-typeset details.warning {\n    border-left-color: #ff9100; }\n    [dir=\"rtl\"] .md-typeset .admonition.caution, [dir=\"rtl\"] .md-typeset details.caution, [dir=\"rtl\"] .md-typeset .admonition.attention, [dir=\"rtl\"] .md-typeset details.attention, [dir=\"rtl\"] .md-typeset .admonition.warning, [dir=\"rtl\"] .md-typeset details.warning {\n      border-right-color: #ff9100; }\n    .md-typeset .admonition.caution > .admonition-title, .md-typeset details.caution > .admonition-title, .md-typeset .admonition.attention > .admonition-title, .md-typeset details.attention > .admonition-title, .md-typeset .admonition.caution > summary, .md-typeset details.caution > summary, .md-typeset .admonition.attention > summary, .md-typeset details.attention > summary, .md-typeset .admonition.warning > .admonition-title, .md-typeset details.warning > .admonition-title, .md-typeset .admonition.warning > summary, .md-typeset details.warning > summary {\n      border-bottom-color: 0.1rem solid rgba(255, 145, 0, 0.1);\n      background-color: rgba(255, 145, 0, 0.1); }\n      .md-typeset .admonition.caution > .admonition-title::before, .md-typeset details.caution > .admonition-title::before, .md-typeset .admonition.attention > .admonition-title::before, .md-typeset details.attention > .admonition-title::before, .md-typeset .admonition.caution > summary::before, .md-typeset details.caution > summary::before, .md-typeset .admonition.attention > summary::before, .md-typeset details.attention > summary::before, .md-typeset .admonition.warning > .admonition-title::before, .md-typeset details.warning > .admonition-title::before, .md-typeset .admonition.warning > summary::before, .md-typeset details.warning > summary::before {\n        color: #ff9100;\n        content: \"\\E002\"; }\n  .md-typeset .admonition.fail, .md-typeset details.fail, .md-typeset .admonition.missing, .md-typeset details.missing, .md-typeset .admonition.failure, .md-typeset details.failure {\n    border-left-color: #ff5252; }\n    [dir=\"rtl\"] .md-typeset .admonition.fail, [dir=\"rtl\"] .md-typeset details.fail, [dir=\"rtl\"] .md-typeset .admonition.missing, [dir=\"rtl\"] .md-typeset details.missing, [dir=\"rtl\"] .md-typeset .admonition.failure, [dir=\"rtl\"] .md-typeset details.failure {\n      border-right-color: #ff5252; }\n    .md-typeset .admonition.fail > .admonition-title, .md-typeset details.fail > .admonition-title, .md-typeset .admonition.missing > .admonition-title, .md-typeset details.missing > .admonition-title, .md-typeset .admonition.fail > summary, .md-typeset details.fail > summary, .md-typeset .admonition.missing > summary, .md-typeset details.missing > summary, .md-typeset .admonition.failure > .admonition-title, .md-typeset details.failure > .admonition-title, .md-typeset .admonition.failure > summary, .md-typeset details.failure > summary {\n      border-bottom-color: 0.1rem solid rgba(255, 82, 82, 0.1);\n      background-color: rgba(255, 82, 82, 0.1); }\n      .md-typeset .admonition.fail > .admonition-title::before, .md-typeset details.fail > .admonition-title::before, .md-typeset .admonition.missing > .admonition-title::before, .md-typeset details.missing > .admonition-title::before, .md-typeset .admonition.fail > summary::before, .md-typeset details.fail > summary::before, .md-typeset .admonition.missing > summary::before, .md-typeset details.missing > summary::before, .md-typeset .admonition.failure > .admonition-title::before, .md-typeset details.failure > .admonition-title::before, .md-typeset .admonition.failure > summary::before, .md-typeset details.failure > summary::before {\n        color: #ff5252;\n        content: \"\\E14C\"; }\n  .md-typeset .admonition.error, .md-typeset details.error, .md-typeset .admonition.danger, .md-typeset details.danger {\n    border-left-color: #ff1744; }\n    [dir=\"rtl\"] .md-typeset .admonition.error, [dir=\"rtl\"] .md-typeset details.error, [dir=\"rtl\"] .md-typeset .admonition.danger, [dir=\"rtl\"] .md-typeset details.danger {\n      border-right-color: #ff1744; }\n    .md-typeset .admonition.error > .admonition-title, .md-typeset details.error > .admonition-title, .md-typeset .admonition.error > summary, .md-typeset details.error > summary, .md-typeset .admonition.danger > .admonition-title, .md-typeset details.danger > .admonition-title, .md-typeset .admonition.danger > summary, .md-typeset details.danger > summary {\n      border-bottom-color: 0.1rem solid rgba(255, 23, 68, 0.1);\n      background-color: rgba(255, 23, 68, 0.1); }\n      .md-typeset .admonition.error > .admonition-title::before, .md-typeset details.error > .admonition-title::before, .md-typeset .admonition.error > summary::before, .md-typeset details.error > summary::before, .md-typeset .admonition.danger > .admonition-title::before, .md-typeset details.danger > .admonition-title::before, .md-typeset .admonition.danger > summary::before, .md-typeset details.danger > summary::before {\n        color: #ff1744;\n        content: \"\\E3E7\"; }\n  .md-typeset .admonition.bug, .md-typeset details.bug {\n    border-left-color: #f50057; }\n    [dir=\"rtl\"] .md-typeset .admonition.bug, [dir=\"rtl\"] .md-typeset details.bug {\n      border-right-color: #f50057; }\n    .md-typeset .admonition.bug > .admonition-title, .md-typeset details.bug > .admonition-title, .md-typeset .admonition.bug > summary, .md-typeset details.bug > summary {\n      border-bottom-color: 0.1rem solid rgba(245, 0, 87, 0.1);\n      background-color: rgba(245, 0, 87, 0.1); }\n      .md-typeset .admonition.bug > .admonition-title::before, .md-typeset details.bug > .admonition-title::before, .md-typeset .admonition.bug > summary::before, .md-typeset details.bug > summary::before {\n        color: #f50057;\n        content: \"\\E868\"; }\n  .md-typeset .admonition.example, .md-typeset details.example {\n    border-left-color: #651fff; }\n    [dir=\"rtl\"] .md-typeset .admonition.example, [dir=\"rtl\"] .md-typeset details.example {\n      border-right-color: #651fff; }\n    .md-typeset .admonition.example > .admonition-title, .md-typeset details.example > .admonition-title, .md-typeset .admonition.example > summary, .md-typeset details.example > summary {\n      border-bottom-color: 0.1rem solid rgba(101, 31, 255, 0.1);\n      background-color: rgba(101, 31, 255, 0.1); }\n      .md-typeset .admonition.example > .admonition-title::before, .md-typeset details.example > .admonition-title::before, .md-typeset .admonition.example > summary::before, .md-typeset details.example > summary::before {\n        color: #651fff;\n        content: \"\\E242\"; }\n  .md-typeset .admonition.cite, .md-typeset details.cite, .md-typeset .admonition.quote, .md-typeset details.quote {\n    border-left-color: #9e9e9e; }\n    [dir=\"rtl\"] .md-typeset .admonition.cite, [dir=\"rtl\"] .md-typeset details.cite, [dir=\"rtl\"] .md-typeset .admonition.quote, [dir=\"rtl\"] .md-typeset details.quote {\n      border-right-color: #9e9e9e; }\n    .md-typeset .admonition.cite > .admonition-title, .md-typeset details.cite > .admonition-title, .md-typeset .admonition.cite > summary, .md-typeset details.cite > summary, .md-typeset .admonition.quote > .admonition-title, .md-typeset details.quote > .admonition-title, .md-typeset .admonition.quote > summary, .md-typeset details.quote > summary {\n      border-bottom-color: 0.1rem solid rgba(158, 158, 158, 0.1);\n      background-color: rgba(158, 158, 158, 0.1); }\n      .md-typeset .admonition.cite > .admonition-title::before, .md-typeset details.cite > .admonition-title::before, .md-typeset .admonition.cite > summary::before, .md-typeset details.cite > summary::before, .md-typeset .admonition.quote > .admonition-title::before, .md-typeset details.quote > .admonition-title::before, .md-typeset .admonition.quote > summary::before, .md-typeset details.quote > summary::before {\n        color: #9e9e9e;\n        content: \"\\E244\"; }\n\n.codehilite .o, .md-typeset .highlight .o {\n  color: inherit; }\n\n.codehilite .ow, .md-typeset .highlight .ow {\n  color: inherit; }\n\n.codehilite .ge, .md-typeset .highlight .ge {\n  color: #000000; }\n\n.codehilite .gr, .md-typeset .highlight .gr {\n  color: #AA0000; }\n\n.codehilite .gh, .md-typeset .highlight .gh {\n  color: #999999; }\n\n.codehilite .go, .md-typeset .highlight .go {\n  color: #888888; }\n\n.codehilite .gp, .md-typeset .highlight .gp {\n  color: #555555; }\n\n.codehilite .gs, .md-typeset .highlight .gs {\n  color: inherit; }\n\n.codehilite .gu, .md-typeset .highlight .gu {\n  color: #AAAAAA; }\n\n.codehilite .gt, .md-typeset .highlight .gt {\n  color: #AA0000; }\n\n.codehilite .gd, .md-typeset .highlight .gd {\n  background-color: #FFDDDD; }\n\n.codehilite .gi, .md-typeset .highlight .gi {\n  background-color: #DDFFDD; }\n\n.codehilite .k, .md-typeset .highlight .k {\n  color: #3B78E7; }\n\n.codehilite .kc, .md-typeset .highlight .kc {\n  color: #A71D5D; }\n\n.codehilite .kd, .md-typeset .highlight .kd {\n  color: #3B78E7; }\n\n.codehilite .kn, .md-typeset .highlight .kn {\n  color: #3B78E7; }\n\n.codehilite .kp, .md-typeset .highlight .kp {\n  color: #A71D5D; }\n\n.codehilite .kr, .md-typeset .highlight .kr {\n  color: #3E61A2; }\n\n.codehilite .kt, .md-typeset .highlight .kt {\n  color: #3E61A2; }\n\n.codehilite .c, .md-typeset .highlight .c {\n  color: #999999; }\n\n.codehilite .cm, .md-typeset .highlight .cm {\n  color: #999999; }\n\n.codehilite .cp, .md-typeset .highlight .cp {\n  color: #666666; }\n\n.codehilite .c1, .md-typeset .highlight .c1 {\n  color: #999999; }\n\n.codehilite .ch, .md-typeset .highlight .ch {\n  color: #999999; }\n\n.codehilite .cs, .md-typeset .highlight .cs {\n  color: #999999; }\n\n.codehilite .na, .md-typeset .highlight .na {\n  color: #C2185B; }\n\n.codehilite .nb, .md-typeset .highlight .nb {\n  color: #C2185B; }\n\n.codehilite .bp, .md-typeset .highlight .bp {\n  color: #3E61A2; }\n\n.codehilite .nc, .md-typeset .highlight .nc {\n  color: #C2185B; }\n\n.codehilite .no, .md-typeset .highlight .no {\n  color: #3E61A2; }\n\n.codehilite .nd, .md-typeset .highlight .nd {\n  color: #666666; }\n\n.codehilite .ni, .md-typeset .highlight .ni {\n  color: #666666; }\n\n.codehilite .ne, .md-typeset .highlight .ne {\n  color: #C2185B; }\n\n.codehilite .nf, .md-typeset .highlight .nf {\n  color: #C2185B; }\n\n.codehilite .nl, .md-typeset .highlight .nl {\n  color: #3B5179; }\n\n.codehilite .nn, .md-typeset .highlight .nn {\n  color: #EC407A; }\n\n.codehilite .nt, .md-typeset .highlight .nt {\n  color: #3B78E7; }\n\n.codehilite .nv, .md-typeset .highlight .nv {\n  color: #3E61A2; }\n\n.codehilite .vc, .md-typeset .highlight .vc {\n  color: #3E61A2; }\n\n.codehilite .vg, .md-typeset .highlight .vg {\n  color: #3E61A2; }\n\n.codehilite .vi, .md-typeset .highlight .vi {\n  color: #3E61A2; }\n\n.codehilite .nx, .md-typeset .highlight .nx {\n  color: #EC407A; }\n\n.codehilite .m, .md-typeset .highlight .m {\n  color: #E74C3C; }\n\n.codehilite .mf, .md-typeset .highlight .mf {\n  color: #E74C3C; }\n\n.codehilite .mh, .md-typeset .highlight .mh {\n  color: #E74C3C; }\n\n.codehilite .mi, .md-typeset .highlight .mi {\n  color: #E74C3C; }\n\n.codehilite .il, .md-typeset .highlight .il {\n  color: #E74C3C; }\n\n.codehilite .mo, .md-typeset .highlight .mo {\n  color: #E74C3C; }\n\n.codehilite .s, .md-typeset .highlight .s {\n  color: #0D904F; }\n\n.codehilite .sb, .md-typeset .highlight .sb {\n  color: #0D904F; }\n\n.codehilite .sc, .md-typeset .highlight .sc {\n  color: #0D904F; }\n\n.codehilite .sd, .md-typeset .highlight .sd {\n  color: #999999; }\n\n.codehilite .s2, .md-typeset .highlight .s2 {\n  color: #0D904F; }\n\n.codehilite .se, .md-typeset .highlight .se {\n  color: #183691; }\n\n.codehilite .sh, .md-typeset .highlight .sh {\n  color: #183691; }\n\n.codehilite .si, .md-typeset .highlight .si {\n  color: #183691; }\n\n.codehilite .sx, .md-typeset .highlight .sx {\n  color: #183691; }\n\n.codehilite .sr, .md-typeset .highlight .sr {\n  color: #009926; }\n\n.codehilite .s1, .md-typeset .highlight .s1 {\n  color: #0D904F; }\n\n.codehilite .ss, .md-typeset .highlight .ss {\n  color: #0D904F; }\n\n.codehilite .err, .md-typeset .highlight .err {\n  color: #A61717; }\n\n.codehilite .w, .md-typeset .highlight .w {\n  color: transparent; }\n\n.codehilite .hll, .md-typeset .highlight .hll {\n  display: block;\n  margin: 0 -1.2rem;\n  padding: 0 1.2rem;\n  background-color: rgba(255, 235, 59, 0.5); }\n  @media only screen and (max-width: 44.9375em) {\n    .codehilite .hll, .md-typeset .highlight .hll {\n      margin: 0 -1.6rem;\n      padding: 0 1.6rem; } }\n\n.md-typeset .codehilite, .md-typeset .highlight {\n  position: relative;\n  margin: 1em 0;\n  padding: 0;\n  border-radius: 0.2rem;\n  background-color: rgba(236, 236, 236, 0.5);\n  color: #37474F;\n  line-height: 1.4;\n  -webkit-overflow-scrolling: touch; }\n  .md-typeset .codehilite pre, .md-typeset .highlight pre,\n  .md-typeset .codehilite code,\n  .md-typeset .highlight code {\n    display: block;\n    margin: 0;\n    padding: 1.05rem 1.2rem;\n    background-color: transparent;\n    overflow: auto;\n    vertical-align: top; }\n    .md-typeset .codehilite pre::-webkit-scrollbar, .md-typeset .highlight pre::-webkit-scrollbar,\n    .md-typeset .codehilite code::-webkit-scrollbar,\n    .md-typeset .highlight code::-webkit-scrollbar {\n      width: 0.4rem;\n      height: 0.4rem; }\n    .md-typeset .codehilite pre::-webkit-scrollbar-thumb, .md-typeset .highlight pre::-webkit-scrollbar-thumb,\n    .md-typeset .codehilite code::-webkit-scrollbar-thumb,\n    .md-typeset .highlight code::-webkit-scrollbar-thumb {\n      background-color: rgba(0, 0, 0, 0.26); }\n      .md-typeset .codehilite pre::-webkit-scrollbar-thumb:hover, .md-typeset .highlight pre::-webkit-scrollbar-thumb:hover,\n      .md-typeset .codehilite code::-webkit-scrollbar-thumb:hover,\n      .md-typeset .highlight code::-webkit-scrollbar-thumb:hover {\n        background-color: #536dfe; }\n\n.md-typeset pre.codehilite, .md-typeset pre.highlight {\n  overflow: visible; }\n  .md-typeset pre.codehilite code, .md-typeset pre.highlight code {\n    display: block;\n    padding: 1.05rem 1.2rem;\n    overflow: auto; }\n\n.md-typeset .codehilitetable, .md-typeset .highlighttable {\n  display: block;\n  margin: 1em 0;\n  border-radius: 0.2em;\n  font-size: 1.6rem;\n  overflow: hidden; }\n  .md-typeset .codehilitetable tbody, .md-typeset .highlighttable tbody,\n  .md-typeset .codehilitetable td,\n  .md-typeset .highlighttable td {\n    display: block;\n    padding: 0; }\n  .md-typeset .codehilitetable tr, .md-typeset .highlighttable tr {\n    display: flex; }\n  .md-typeset .codehilitetable .codehilite, .md-typeset .highlighttable .codehilite, .md-typeset .codehilitetable .highlight, .md-typeset .highlighttable .highlight,\n  .md-typeset .codehilitetable .linenodiv,\n  .md-typeset .highlighttable .linenodiv {\n    margin: 0;\n    border-radius: 0; }\n  \n  .md-typeset .codehilitetable .linenodiv,\n  .md-typeset .highlighttable .linenodiv {\n    padding: 1.05rem 1.2rem; }\n  .md-typeset .codehilitetable .linenos, .md-typeset .highlighttable .linenos {\n    background-color: rgba(0, 0, 0, 0.07);\n    color: rgba(0, 0, 0, 0.26);\n    user-select: none; }\n    .md-typeset .codehilitetable .linenos pre, .md-typeset .highlighttable .linenos pre {\n      margin: 0;\n      padding: 0;\n      background-color: transparent;\n      color: inherit;\n      text-align: right; }\n  .md-typeset .codehilitetable .code, .md-typeset .highlighttable .code {\n    flex: 1;\n    overflow: hidden; }\n\n@media only screen and (max-width: 44.9375em) {\n  .md-typeset > .codehilite, .md-typeset > .highlight {\n    margin: 1em -1.6rem;\n    border-radius: 0; }\n    .md-typeset > .codehilite pre, .md-typeset > .highlight pre,\n    .md-typeset > .codehilite code,\n    .md-typeset > .highlight code {\n      padding: 1.05rem 1.6rem; } }\n\n.md-typeset > .codehilitetable, .md-typeset > .highlighttable {\n  box-shadow: none; }\n  @media only screen and (max-width: 44.9375em) {\n    .md-typeset > .codehilitetable, .md-typeset > .highlighttable {\n      margin: 1em -1.6rem;\n      border-radius: 0; }\n      .md-typeset > .codehilitetable .codehilite > pre, .md-typeset > .highlighttable .codehilite > pre, .md-typeset > .codehilitetable .highlight > pre, .md-typeset > .highlighttable .highlight > pre,\n      .md-typeset > .codehilitetable .codehilite > code,\n      .md-typeset > .highlighttable .codehilite > code,\n      .md-typeset > .codehilitetable .highlight > code,\n      .md-typeset > .highlighttable .highlight > code,\n      .md-typeset > .codehilitetable .linenodiv,\n      .md-typeset > .highlighttable .linenodiv {\n        padding: 1rem 1.6rem; } }\n\n.md-typeset [id^=\"fnref:\"] {\n  display: inline-block; }\n  .md-typeset [id^=\"fnref:\"]:target {\n    margin-top: -7.6rem;\n    padding-top: 7.6rem;\n    pointer-events: none; }\n\n.md-typeset [id^=\"fn:\"]::before {\n  display: none;\n  height: 0;\n  content: \"\"; }\n\n.md-typeset [id^=\"fn:\"]:target::before {\n  display: block;\n  margin-top: -7rem;\n  padding-top: 7rem;\n  pointer-events: none; }\n\n.md-typeset .footnote {\n  color: rgba(0, 0, 0, 0.54);\n  font-size: 1.28rem; }\n  .md-typeset .footnote ol {\n    margin-left: 0; }\n  .md-typeset .footnote li {\n    transition: color 0.25s; }\n    .md-typeset .footnote li:target {\n      color: rgba(0, 0, 0, 0.87); }\n    .md-typeset .footnote li :first-child {\n      margin-top: 0; }\n    .md-typeset .footnote li:hover .footnote-backref,\n    .md-typeset .footnote li:target .footnote-backref {\n      transform: translateX(0);\n      opacity: 1; }\n    .md-typeset .footnote li:hover .footnote-backref:hover,\n    .md-typeset .footnote li:target .footnote-backref {\n      color: #536dfe; }\n\n.md-typeset .footnote-ref {\n  display: inline-block;\n  pointer-events: initial; }\n  .md-typeset .footnote-ref::before {\n    display: inline;\n    margin: 0 0.2em;\n    border-left: 0.1rem solid rgba(0, 0, 0, 0.26);\n    font-size: 1.25em;\n    content: \"\";\n    vertical-align: -0.5rem; }\n\n.md-typeset .footnote-backref {\n  display: inline-block;\n  transform: translateX(0.5rem);\n  transition: transform 0.25s  0.125s,\r color     0.25s,\r opacity   0.125s 0.125s;\n  color: rgba(0, 0, 0, 0.26);\n  font-size: 0;\n  opacity: 0;\n  vertical-align: text-bottom; }\n  [dir=\"rtl\"] .md-typeset .footnote-backref {\n    transform: translateX(-0.5rem); }\n  .md-typeset .footnote-backref::before {\n    display: inline-block;\n    font-size: 1.6rem;\n    content: \"\\E31B\"; }\n    [dir=\"rtl\"] .md-typeset .footnote-backref::before {\n      transform: scaleX(-1); }\n\n.md-typeset .headerlink {\n  display: inline-block;\n  margin-left: 1rem;\n  transform: translate(0, 0.5rem);\n  transition: transform 0.25s  0.25s,\r color     0.25s,\r opacity   0.125s 0.25s;\n  opacity: 0; }\n  [dir=\"rtl\"] .md-typeset .headerlink {\n    margin-right: 1rem;\n    margin-left: initial; }\n  html body .md-typeset .headerlink {\n    color: rgba(0, 0, 0, 0.26); }\n  @media print {\n    .md-typeset .headerlink {\n      display: none; } }\n\n.md-typeset h1[id]::before {\n  display: block;\n  margin-top: -0.9rem;\n  padding-top: 0.9rem;\n  content: \"\"; }\n\n.md-typeset h1[id]:target::before {\n  margin-top: -6.9rem;\n  padding-top: 6.9rem; }\n\n.md-typeset h1[id]:hover .headerlink,\n.md-typeset h1[id]:target .headerlink,\n.md-typeset h1[id] .headerlink:focus {\n  transform: translate(0, 0);\n  opacity: 1; }\n\n.md-typeset h1[id]:hover .headerlink:hover,\n.md-typeset h1[id]:target .headerlink,\n.md-typeset h1[id] .headerlink:focus {\n  color: #536dfe; }\n\n.md-typeset h2[id]::before {\n  display: block;\n  margin-top: -0.8rem;\n  padding-top: 0.8rem;\n  content: \"\"; }\n\n.md-typeset h2[id]:target::before {\n  margin-top: -6.8rem;\n  padding-top: 6.8rem; }\n\n.md-typeset h2[id]:hover .headerlink,\n.md-typeset h2[id]:target .headerlink,\n.md-typeset h2[id] .headerlink:focus {\n  transform: translate(0, 0);\n  opacity: 1; }\n\n.md-typeset h2[id]:hover .headerlink:hover,\n.md-typeset h2[id]:target .headerlink,\n.md-typeset h2[id] .headerlink:focus {\n  color: #536dfe; }\n\n.md-typeset h3[id]::before {\n  display: block;\n  margin-top: -0.9rem;\n  padding-top: 0.9rem;\n  content: \"\"; }\n\n.md-typeset h3[id]:target::before {\n  margin-top: -6.9rem;\n  padding-top: 6.9rem; }\n\n.md-typeset h3[id]:hover .headerlink,\n.md-typeset h3[id]:target .headerlink,\n.md-typeset h3[id] .headerlink:focus {\n  transform: translate(0, 0);\n  opacity: 1; }\n\n.md-typeset h3[id]:hover .headerlink:hover,\n.md-typeset h3[id]:target .headerlink,\n.md-typeset h3[id] .headerlink:focus {\n  color: #536dfe; }\n\n.md-typeset h4[id]::before {\n  display: block;\n  margin-top: -0.9rem;\n  padding-top: 0.9rem;\n  content: \"\"; }\n\n.md-typeset h4[id]:target::before {\n  margin-top: -6.9rem;\n  padding-top: 6.9rem; }\n\n.md-typeset h4[id]:hover .headerlink,\n.md-typeset h4[id]:target .headerlink,\n.md-typeset h4[id] .headerlink:focus {\n  transform: translate(0, 0);\n  opacity: 1; }\n\n.md-typeset h4[id]:hover .headerlink:hover,\n.md-typeset h4[id]:target .headerlink,\n.md-typeset h4[id] .headerlink:focus {\n  color: #536dfe; }\n\n.md-typeset h5[id]::before {\n  display: block;\n  margin-top: -1.1rem;\n  padding-top: 1.1rem;\n  content: \"\"; }\n\n.md-typeset h5[id]:target::before {\n  margin-top: -7.1rem;\n  padding-top: 7.1rem; }\n\n.md-typeset h5[id]:hover .headerlink,\n.md-typeset h5[id]:target .headerlink,\n.md-typeset h5[id] .headerlink:focus {\n  transform: translate(0, 0);\n  opacity: 1; }\n\n.md-typeset h5[id]:hover .headerlink:hover,\n.md-typeset h5[id]:target .headerlink,\n.md-typeset h5[id] .headerlink:focus {\n  color: #536dfe; }\n\n.md-typeset h6[id]::before {\n  display: block;\n  margin-top: -1.1rem;\n  padding-top: 1.1rem;\n  content: \"\"; }\n\n.md-typeset h6[id]:target::before {\n  margin-top: -7.1rem;\n  padding-top: 7.1rem; }\n\n.md-typeset h6[id]:hover .headerlink,\n.md-typeset h6[id]:target .headerlink,\n.md-typeset h6[id] .headerlink:focus {\n  transform: translate(0, 0);\n  opacity: 1; }\n\n.md-typeset h6[id]:hover .headerlink:hover,\n.md-typeset h6[id]:target .headerlink,\n.md-typeset h6[id] .headerlink:focus {\n  color: #536dfe; }\n\n.md-typeset .MJXc-display {\n  margin: 0.75em 0;\n  padding: 0.75em 0;\n  overflow: auto;\n  -webkit-overflow-scrolling: touch; }\n\n@media only screen and (max-width: 44.9375em) {\n  .md-typeset > p > .MJXc-display {\n    margin: 0.75em -1.6rem;\n    padding: 0.25em 1.6rem; } }\n\n.md-typeset .MathJax_CHTML {\n  outline: 0; }\n\n.md-typeset del.critic,\n.md-typeset ins.critic,\n.md-typeset .critic.comment {\n  margin: 0 0.25em;\n  padding: 0.0625em 0;\n  border-radius: 0.2rem;\n  box-decoration-break: clone; }\n\n.md-typeset del.critic {\n  background-color: #FFDDDD;\n  box-shadow: 0.25em 0 0 #FFDDDD, -0.25em 0 0 #FFDDDD; }\n\n.md-typeset ins.critic {\n  background-color: #DDFFDD;\n  box-shadow: 0.25em 0 0 #DDFFDD, -0.25em 0 0 #DDFFDD; }\n\n.md-typeset .critic.comment {\n  background-color: rgba(236, 236, 236, 0.5);\n  color: #37474F;\n  box-shadow: 0.25em 0 0 rgba(236, 236, 236, 0.5), -0.25em 0 0 rgba(236, 236, 236, 0.5); }\n  .md-typeset .critic.comment::before {\n    padding-right: 0.125em;\n    color: rgba(0, 0, 0, 0.26);\n    content: \"\\E0B7\";\n    vertical-align: -0.125em; }\n\n.md-typeset .critic.block {\n  display: block;\n  margin: 1em 0;\n  padding-right: 1.6rem;\n  padding-left: 1.6rem;\n  box-shadow: none; }\n  .md-typeset .critic.block :first-child {\n    margin-top: 0.5em; }\n  .md-typeset .critic.block :last-child {\n    margin-bottom: 0.5em; }\n\n.md-typeset details {\n  display: block;\n  padding-top: 0; }\n  .md-typeset details[open] > summary::after {\n    transform: rotate(180deg); }\n  .md-typeset details:not([open]) {\n    padding-bottom: 0; }\n    .md-typeset details:not([open]) > summary {\n      border-bottom: none; }\n  .md-typeset details summary {\n    padding-right: 4rem; }\n    [dir=\"rtl\"] .md-typeset details summary {\n      padding-left: 4rem; }\n  .no-details .md-typeset details:not([open]) > * {\n    display: none; }\n  .no-details .md-typeset details:not([open]) summary {\n    display: block; }\n\n.md-typeset summary {\n  display: block;\n  outline: none;\n  cursor: pointer; }\n  .md-typeset summary::-webkit-details-marker {\n    display: none; }\n  .md-typeset summary::after {\n    position: absolute;\n    top: 0.8rem;\n    right: 1.2rem;\n    color: rgba(0, 0, 0, 0.26);\n    font-size: 2rem;\n    content: \"\\E313\"; }\n    [dir=\"rtl\"] .md-typeset summary::after {\n      right: initial;\n      left: 1.2rem; }\n\n.md-typeset .emojione {\n  width: 2rem;\n  vertical-align: text-top; }\n\n.md-typeset code.codehilite, .md-typeset code.highlight {\n  margin: 0 0.29412em;\n  padding: 0.07353em 0; }\n\n.md-typeset .superfences-content {\n  display: none;\n  order: 99;\n  width: 100%;\n  background-color: white; }\n  .md-typeset .superfences-content > * {\n    margin: 0;\n    border-radius: 0; }\n\n.md-typeset .superfences-tabs {\n  display: flex;\n  position: relative;\n  flex-wrap: wrap;\n  margin: 1em 0;\n  border: 0.1rem solid rgba(0, 0, 0, 0.07);\n  border-radius: 0.2em; }\n  .md-typeset .superfences-tabs > input {\n    display: none; }\n    .md-typeset .superfences-tabs > input:checked + label {\n      font-weight: 700; }\n      .md-typeset .superfences-tabs > input:checked + label + .superfences-content {\n        display: block; }\n  .md-typeset .superfences-tabs > label {\n    width: auto;\n    padding: 1.2rem 1.2rem;\n    transition: color 0.125s;\n    font-size: 1.28rem;\n    cursor: pointer; }\n    html .md-typeset .superfences-tabs > label:hover {\n      color: #536dfe; }\n\n@media only screen and (max-width: 44.9375em) {\n  .md-typeset > .superfences-tabs {\n    margin: 1em -1.6rem;\n    border: 0;\n    border-top: 0.1rem solid rgba(0, 0, 0, 0.07);\n    border-radius: 0; }\n    .md-typeset > .superfences-tabs pre,\n    .md-typeset > .superfences-tabs code {\n      padding: 1.05rem 1.6rem; } }\n\n.md-typeset .task-list-item {\n  position: relative;\n  list-style-type: none; }\n  .md-typeset .task-list-item [type=\"checkbox\"] {\n    position: absolute;\n    top: 0.45em;\n    left: -2em; }\n    [dir=\"rtl\"] .md-typeset .task-list-item [type=\"checkbox\"] {\n      right: -2em;\n      left: initial; }\n\n.md-typeset .task-list-control .task-list-indicator::before {\n  position: absolute;\n  top: 0.15em;\n  left: -1.25em;\n  color: rgba(0, 0, 0, 0.26);\n  font-size: 1.25em;\n  content: \"\\E835\";\n  vertical-align: -0.25em; }\n  [dir=\"rtl\"] .md-typeset .task-list-control .task-list-indicator::before {\n    right: -1.25em;\n    left: initial; }\n\n.md-typeset .task-list-control [type=\"checkbox\"]:checked + .task-list-indicator::before {\n  content: \"\\E834\"; }\n\n.md-typeset .task-list-control [type=\"checkbox\"] {\n  opacity: 0;\n  z-index: -1; }\n", ""]);

// exports


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
	// get current location
	var location = typeof window !== "undefined" && window.location;

	if (!location) {
		throw new Error("fixUrls requires window.location");
	}

	// blank or null?
	if (!css || typeof css !== "string") {
		return css;
	}

	var baseUrl = location.protocol + "//" + location.host;
	var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
 This regular expression is just a way to recursively match brackets within
 a string.
 	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
    (  = Start a capturing group
      (?:  = Start a non-capturing group
          [^)(]  = Match anything that isn't a parentheses
          |  = OR
          \(  = Match a start parentheses
              (?:  = Start another non-capturing groups
                  [^)(]+  = Match anything that isn't a parentheses
                  |  = OR
                  \(  = Match a start parentheses
                      [^)(]*  = Match anything that isn't a parentheses
                  \)  = Match a end parentheses
              )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
  \)  = Match a close parens
 	 /gi  = Get all matches, not the first.  Be case insensitive.
  */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl.trim().replace(/^"(.*)"$/, function (o, $1) {
			return $1;
		}).replace(/^'(.*)'$/, function (o, $1) {
			return $1;
		});

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
			return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
			//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(17);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(3)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/lib/loader.js!./application-palette.scss", function() {
		var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/lib/loader.js!./application-palette.scss");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "button[data-md-color-primary],\nbutton[data-md-color-accent] {\n  width: 13rem;\n  margin-bottom: 0.4rem;\n  padding: 2.4rem 0.8rem 0.4rem;\n  transition: background-color 0.25s,\r opacity          0.25s;\n  border-radius: 0.2rem;\n  color: white;\n  font-size: 1.28rem;\n  text-align: left;\n  cursor: pointer; }\n  button[data-md-color-primary]:hover,\n  button[data-md-color-accent]:hover {\n    opacity: 0.75; }\n\nbutton[data-md-color-primary=\"red\"] {\n  background-color: #ef5350; }\n\n[data-md-color-primary=\"red\"] .md-typeset a {\n  color: #ef5350; }\n\n[data-md-color-primary=\"red\"] .md-header {\n  background-color: #ef5350; }\n\n[data-md-color-primary=\"red\"] .md-hero {\n  background-color: #ef5350; }\n\n[data-md-color-primary=\"red\"] .md-nav__link:active,\n[data-md-color-primary=\"red\"] .md-nav__link--active {\n  color: #ef5350; }\n\n[data-md-color-primary=\"red\"] .md-nav__item--nested > .md-nav__link {\n  color: inherit; }\n\n@media only screen and (max-width: 59.9375em) {\n  [data-md-color-primary=\"red\"] .md-nav__source {\n    background-color: rgba(190, 66, 64, 0.9675); } }\n\n@media only screen and (max-width: 76.1875em) {\n  html [data-md-color-primary=\"red\"] .md-nav--primary .md-nav__title--site {\n    background-color: #ef5350; } }\n\n@media only screen and (min-width: 76.25em) {\n  [data-md-color-primary=\"red\"] .md-tabs {\n    background-color: #ef5350; } }\n\nbutton[data-md-color-primary=\"pink\"] {\n  background-color: #e91e63; }\n\n[data-md-color-primary=\"pink\"] .md-typeset a {\n  color: #e91e63; }\n\n[data-md-color-primary=\"pink\"] .md-header {\n  background-color: #e91e63; }\n\n[data-md-color-primary=\"pink\"] .md-hero {\n  background-color: #e91e63; }\n\n[data-md-color-primary=\"pink\"] .md-nav__link:active,\n[data-md-color-primary=\"pink\"] .md-nav__link--active {\n  color: #e91e63; }\n\n[data-md-color-primary=\"pink\"] .md-nav__item--nested > .md-nav__link {\n  color: inherit; }\n\n@media only screen and (max-width: 59.9375em) {\n  [data-md-color-primary=\"pink\"] .md-nav__source {\n    background-color: rgba(185, 24, 79, 0.9675); } }\n\n@media only screen and (max-width: 76.1875em) {\n  html [data-md-color-primary=\"pink\"] .md-nav--primary .md-nav__title--site {\n    background-color: #e91e63; } }\n\n@media only screen and (min-width: 76.25em) {\n  [data-md-color-primary=\"pink\"] .md-tabs {\n    background-color: #e91e63; } }\n\nbutton[data-md-color-primary=\"purple\"] {\n  background-color: #ab47bc; }\n\n[data-md-color-primary=\"purple\"] .md-typeset a {\n  color: #ab47bc; }\n\n[data-md-color-primary=\"purple\"] .md-header {\n  background-color: #ab47bc; }\n\n[data-md-color-primary=\"purple\"] .md-hero {\n  background-color: #ab47bc; }\n\n[data-md-color-primary=\"purple\"] .md-nav__link:active,\n[data-md-color-primary=\"purple\"] .md-nav__link--active {\n  color: #ab47bc; }\n\n[data-md-color-primary=\"purple\"] .md-nav__item--nested > .md-nav__link {\n  color: inherit; }\n\n@media only screen and (max-width: 59.9375em) {\n  [data-md-color-primary=\"purple\"] .md-nav__source {\n    background-color: rgba(136, 57, 150, 0.9675); } }\n\n@media only screen and (max-width: 76.1875em) {\n  html [data-md-color-primary=\"purple\"] .md-nav--primary .md-nav__title--site {\n    background-color: #ab47bc; } }\n\n@media only screen and (min-width: 76.25em) {\n  [data-md-color-primary=\"purple\"] .md-tabs {\n    background-color: #ab47bc; } }\n\nbutton[data-md-color-primary=\"deep-purple\"] {\n  background-color: #7e57c2; }\n\n[data-md-color-primary=\"deep-purple\"] .md-typeset a {\n  color: #7e57c2; }\n\n[data-md-color-primary=\"deep-purple\"] .md-header {\n  background-color: #7e57c2; }\n\n[data-md-color-primary=\"deep-purple\"] .md-hero {\n  background-color: #7e57c2; }\n\n[data-md-color-primary=\"deep-purple\"] .md-nav__link:active,\n[data-md-color-primary=\"deep-purple\"] .md-nav__link--active {\n  color: #7e57c2; }\n\n[data-md-color-primary=\"deep-purple\"] .md-nav__item--nested > .md-nav__link {\n  color: inherit; }\n\n@media only screen and (max-width: 59.9375em) {\n  [data-md-color-primary=\"deep-purple\"] .md-nav__source {\n    background-color: rgba(100, 69, 154, 0.9675); } }\n\n@media only screen and (max-width: 76.1875em) {\n  html [data-md-color-primary=\"deep-purple\"] .md-nav--primary .md-nav__title--site {\n    background-color: #7e57c2; } }\n\n@media only screen and (min-width: 76.25em) {\n  [data-md-color-primary=\"deep-purple\"] .md-tabs {\n    background-color: #7e57c2; } }\n\nbutton[data-md-color-primary=\"indigo\"] {\n  background-color: #3f51b5; }\n\n[data-md-color-primary=\"indigo\"] .md-typeset a {\n  color: #3f51b5; }\n\n[data-md-color-primary=\"indigo\"] .md-header {\n  background-color: #3f51b5; }\n\n[data-md-color-primary=\"indigo\"] .md-hero {\n  background-color: #3f51b5; }\n\n[data-md-color-primary=\"indigo\"] .md-nav__link:active,\n[data-md-color-primary=\"indigo\"] .md-nav__link--active {\n  color: #3f51b5; }\n\n[data-md-color-primary=\"indigo\"] .md-nav__item--nested > .md-nav__link {\n  color: inherit; }\n\n@media only screen and (max-width: 59.9375em) {\n  [data-md-color-primary=\"indigo\"] .md-nav__source {\n    background-color: rgba(50, 64, 144, 0.9675); } }\n\n@media only screen and (max-width: 76.1875em) {\n  html [data-md-color-primary=\"indigo\"] .md-nav--primary .md-nav__title--site {\n    background-color: #3f51b5; } }\n\n@media only screen and (min-width: 76.25em) {\n  [data-md-color-primary=\"indigo\"] .md-tabs {\n    background-color: #3f51b5; } }\n\nbutton[data-md-color-primary=\"blue\"] {\n  background-color: #2196f3; }\n\n[data-md-color-primary=\"blue\"] .md-typeset a {\n  color: #2196f3; }\n\n[data-md-color-primary=\"blue\"] .md-header {\n  background-color: #2196f3; }\n\n[data-md-color-primary=\"blue\"] .md-hero {\n  background-color: #2196f3; }\n\n[data-md-color-primary=\"blue\"] .md-nav__link:active,\n[data-md-color-primary=\"blue\"] .md-nav__link--active {\n  color: #2196f3; }\n\n[data-md-color-primary=\"blue\"] .md-nav__item--nested > .md-nav__link {\n  color: inherit; }\n\n@media only screen and (max-width: 59.9375em) {\n  [data-md-color-primary=\"blue\"] .md-nav__source {\n    background-color: rgba(26, 119, 193, 0.9675); } }\n\n@media only screen and (max-width: 76.1875em) {\n  html [data-md-color-primary=\"blue\"] .md-nav--primary .md-nav__title--site {\n    background-color: #2196f3; } }\n\n@media only screen and (min-width: 76.25em) {\n  [data-md-color-primary=\"blue\"] .md-tabs {\n    background-color: #2196f3; } }\n\nbutton[data-md-color-primary=\"light-blue\"] {\n  background-color: #03a9f4; }\n\n[data-md-color-primary=\"light-blue\"] .md-typeset a {\n  color: #03a9f4; }\n\n[data-md-color-primary=\"light-blue\"] .md-header {\n  background-color: #03a9f4; }\n\n[data-md-color-primary=\"light-blue\"] .md-hero {\n  background-color: #03a9f4; }\n\n[data-md-color-primary=\"light-blue\"] .md-nav__link:active,\n[data-md-color-primary=\"light-blue\"] .md-nav__link--active {\n  color: #03a9f4; }\n\n[data-md-color-primary=\"light-blue\"] .md-nav__item--nested > .md-nav__link {\n  color: inherit; }\n\n@media only screen and (max-width: 59.9375em) {\n  [data-md-color-primary=\"light-blue\"] .md-nav__source {\n    background-color: rgba(2, 134, 194, 0.9675); } }\n\n@media only screen and (max-width: 76.1875em) {\n  html [data-md-color-primary=\"light-blue\"] .md-nav--primary .md-nav__title--site {\n    background-color: #03a9f4; } }\n\n@media only screen and (min-width: 76.25em) {\n  [data-md-color-primary=\"light-blue\"] .md-tabs {\n    background-color: #03a9f4; } }\n\nbutton[data-md-color-primary=\"cyan\"] {\n  background-color: #00bcd4; }\n\n[data-md-color-primary=\"cyan\"] .md-typeset a {\n  color: #00bcd4; }\n\n[data-md-color-primary=\"cyan\"] .md-header {\n  background-color: #00bcd4; }\n\n[data-md-color-primary=\"cyan\"] .md-hero {\n  background-color: #00bcd4; }\n\n[data-md-color-primary=\"cyan\"] .md-nav__link:active,\n[data-md-color-primary=\"cyan\"] .md-nav__link--active {\n  color: #00bcd4; }\n\n[data-md-color-primary=\"cyan\"] .md-nav__item--nested > .md-nav__link {\n  color: inherit; }\n\n@media only screen and (max-width: 59.9375em) {\n  [data-md-color-primary=\"cyan\"] .md-nav__source {\n    background-color: rgba(0, 150, 169, 0.9675); } }\n\n@media only screen and (max-width: 76.1875em) {\n  html [data-md-color-primary=\"cyan\"] .md-nav--primary .md-nav__title--site {\n    background-color: #00bcd4; } }\n\n@media only screen and (min-width: 76.25em) {\n  [data-md-color-primary=\"cyan\"] .md-tabs {\n    background-color: #00bcd4; } }\n\nbutton[data-md-color-primary=\"teal\"] {\n  background-color: #009688; }\n\n[data-md-color-primary=\"teal\"] .md-typeset a {\n  color: #009688; }\n\n[data-md-color-primary=\"teal\"] .md-header {\n  background-color: #009688; }\n\n[data-md-color-primary=\"teal\"] .md-hero {\n  background-color: #009688; }\n\n[data-md-color-primary=\"teal\"] .md-nav__link:active,\n[data-md-color-primary=\"teal\"] .md-nav__link--active {\n  color: #009688; }\n\n[data-md-color-primary=\"teal\"] .md-nav__item--nested > .md-nav__link {\n  color: inherit; }\n\n@media only screen and (max-width: 59.9375em) {\n  [data-md-color-primary=\"teal\"] .md-nav__source {\n    background-color: rgba(0, 119, 108, 0.9675); } }\n\n@media only screen and (max-width: 76.1875em) {\n  html [data-md-color-primary=\"teal\"] .md-nav--primary .md-nav__title--site {\n    background-color: #009688; } }\n\n@media only screen and (min-width: 76.25em) {\n  [data-md-color-primary=\"teal\"] .md-tabs {\n    background-color: #009688; } }\n\nbutton[data-md-color-primary=\"green\"] {\n  background-color: #4caf50; }\n\n[data-md-color-primary=\"green\"] .md-typeset a {\n  color: #4caf50; }\n\n[data-md-color-primary=\"green\"] .md-header {\n  background-color: #4caf50; }\n\n[data-md-color-primary=\"green\"] .md-hero {\n  background-color: #4caf50; }\n\n[data-md-color-primary=\"green\"] .md-nav__link:active,\n[data-md-color-primary=\"green\"] .md-nav__link--active {\n  color: #4caf50; }\n\n[data-md-color-primary=\"green\"] .md-nav__item--nested > .md-nav__link {\n  color: inherit; }\n\n@media only screen and (max-width: 59.9375em) {\n  [data-md-color-primary=\"green\"] .md-nav__source {\n    background-color: rgba(60, 139, 64, 0.9675); } }\n\n@media only screen and (max-width: 76.1875em) {\n  html [data-md-color-primary=\"green\"] .md-nav--primary .md-nav__title--site {\n    background-color: #4caf50; } }\n\n@media only screen and (min-width: 76.25em) {\n  [data-md-color-primary=\"green\"] .md-tabs {\n    background-color: #4caf50; } }\n\nbutton[data-md-color-primary=\"light-green\"] {\n  background-color: #7cb342; }\n\n[data-md-color-primary=\"light-green\"] .md-typeset a {\n  color: #7cb342; }\n\n[data-md-color-primary=\"light-green\"] .md-header {\n  background-color: #7cb342; }\n\n[data-md-color-primary=\"light-green\"] .md-hero {\n  background-color: #7cb342; }\n\n[data-md-color-primary=\"light-green\"] .md-nav__link:active,\n[data-md-color-primary=\"light-green\"] .md-nav__link--active {\n  color: #7cb342; }\n\n[data-md-color-primary=\"light-green\"] .md-nav__item--nested > .md-nav__link {\n  color: inherit; }\n\n@media only screen and (max-width: 59.9375em) {\n  [data-md-color-primary=\"light-green\"] .md-nav__source {\n    background-color: rgba(99, 142, 53, 0.9675); } }\n\n@media only screen and (max-width: 76.1875em) {\n  html [data-md-color-primary=\"light-green\"] .md-nav--primary .md-nav__title--site {\n    background-color: #7cb342; } }\n\n@media only screen and (min-width: 76.25em) {\n  [data-md-color-primary=\"light-green\"] .md-tabs {\n    background-color: #7cb342; } }\n\nbutton[data-md-color-primary=\"lime\"] {\n  background-color: #c0ca33; }\n\n[data-md-color-primary=\"lime\"] .md-typeset a {\n  color: #c0ca33; }\n\n[data-md-color-primary=\"lime\"] .md-header {\n  background-color: #c0ca33; }\n\n[data-md-color-primary=\"lime\"] .md-hero {\n  background-color: #c0ca33; }\n\n[data-md-color-primary=\"lime\"] .md-nav__link:active,\n[data-md-color-primary=\"lime\"] .md-nav__link--active {\n  color: #c0ca33; }\n\n[data-md-color-primary=\"lime\"] .md-nav__item--nested > .md-nav__link {\n  color: inherit; }\n\n@media only screen and (max-width: 59.9375em) {\n  [data-md-color-primary=\"lime\"] .md-nav__source {\n    background-color: rgba(153, 161, 41, 0.9675); } }\n\n@media only screen and (max-width: 76.1875em) {\n  html [data-md-color-primary=\"lime\"] .md-nav--primary .md-nav__title--site {\n    background-color: #c0ca33; } }\n\n@media only screen and (min-width: 76.25em) {\n  [data-md-color-primary=\"lime\"] .md-tabs {\n    background-color: #c0ca33; } }\n\nbutton[data-md-color-primary=\"yellow\"] {\n  background-color: #f9a825; }\n\n[data-md-color-primary=\"yellow\"] .md-typeset a {\n  color: #f9a825; }\n\n[data-md-color-primary=\"yellow\"] .md-header {\n  background-color: #f9a825; }\n\n[data-md-color-primary=\"yellow\"] .md-hero {\n  background-color: #f9a825; }\n\n[data-md-color-primary=\"yellow\"] .md-nav__link:active,\n[data-md-color-primary=\"yellow\"] .md-nav__link--active {\n  color: #f9a825; }\n\n[data-md-color-primary=\"yellow\"] .md-nav__item--nested > .md-nav__link {\n  color: inherit; }\n\n@media only screen and (max-width: 59.9375em) {\n  [data-md-color-primary=\"yellow\"] .md-nav__source {\n    background-color: rgba(198, 134, 29, 0.9675); } }\n\n@media only screen and (max-width: 76.1875em) {\n  html [data-md-color-primary=\"yellow\"] .md-nav--primary .md-nav__title--site {\n    background-color: #f9a825; } }\n\n@media only screen and (min-width: 76.25em) {\n  [data-md-color-primary=\"yellow\"] .md-tabs {\n    background-color: #f9a825; } }\n\nbutton[data-md-color-primary=\"amber\"] {\n  background-color: #ffa000; }\n\n[data-md-color-primary=\"amber\"] .md-typeset a {\n  color: #ffa000; }\n\n[data-md-color-primary=\"amber\"] .md-header {\n  background-color: #ffa000; }\n\n[data-md-color-primary=\"amber\"] .md-hero {\n  background-color: #ffa000; }\n\n[data-md-color-primary=\"amber\"] .md-nav__link:active,\n[data-md-color-primary=\"amber\"] .md-nav__link--active {\n  color: #ffa000; }\n\n[data-md-color-primary=\"amber\"] .md-nav__item--nested > .md-nav__link {\n  color: inherit; }\n\n@media only screen and (max-width: 59.9375em) {\n  [data-md-color-primary=\"amber\"] .md-nav__source {\n    background-color: rgba(203, 127, 0, 0.9675); } }\n\n@media only screen and (max-width: 76.1875em) {\n  html [data-md-color-primary=\"amber\"] .md-nav--primary .md-nav__title--site {\n    background-color: #ffa000; } }\n\n@media only screen and (min-width: 76.25em) {\n  [data-md-color-primary=\"amber\"] .md-tabs {\n    background-color: #ffa000; } }\n\nbutton[data-md-color-primary=\"orange\"] {\n  background-color: #fb8c00; }\n\n[data-md-color-primary=\"orange\"] .md-typeset a {\n  color: #fb8c00; }\n\n[data-md-color-primary=\"orange\"] .md-header {\n  background-color: #fb8c00; }\n\n[data-md-color-primary=\"orange\"] .md-hero {\n  background-color: #fb8c00; }\n\n[data-md-color-primary=\"orange\"] .md-nav__link:active,\n[data-md-color-primary=\"orange\"] .md-nav__link--active {\n  color: #fb8c00; }\n\n[data-md-color-primary=\"orange\"] .md-nav__item--nested > .md-nav__link {\n  color: inherit; }\n\n@media only screen and (max-width: 59.9375em) {\n  [data-md-color-primary=\"orange\"] .md-nav__source {\n    background-color: rgba(200, 111, 0, 0.9675); } }\n\n@media only screen and (max-width: 76.1875em) {\n  html [data-md-color-primary=\"orange\"] .md-nav--primary .md-nav__title--site {\n    background-color: #fb8c00; } }\n\n@media only screen and (min-width: 76.25em) {\n  [data-md-color-primary=\"orange\"] .md-tabs {\n    background-color: #fb8c00; } }\n\nbutton[data-md-color-primary=\"deep-orange\"] {\n  background-color: #ff7043; }\n\n[data-md-color-primary=\"deep-orange\"] .md-typeset a {\n  color: #ff7043; }\n\n[data-md-color-primary=\"deep-orange\"] .md-header {\n  background-color: #ff7043; }\n\n[data-md-color-primary=\"deep-orange\"] .md-hero {\n  background-color: #ff7043; }\n\n[data-md-color-primary=\"deep-orange\"] .md-nav__link:active,\n[data-md-color-primary=\"deep-orange\"] .md-nav__link--active {\n  color: #ff7043; }\n\n[data-md-color-primary=\"deep-orange\"] .md-nav__item--nested > .md-nav__link {\n  color: inherit; }\n\n@media only screen and (max-width: 59.9375em) {\n  [data-md-color-primary=\"deep-orange\"] .md-nav__source {\n    background-color: rgba(203, 89, 53, 0.9675); } }\n\n@media only screen and (max-width: 76.1875em) {\n  html [data-md-color-primary=\"deep-orange\"] .md-nav--primary .md-nav__title--site {\n    background-color: #ff7043; } }\n\n@media only screen and (min-width: 76.25em) {\n  [data-md-color-primary=\"deep-orange\"] .md-tabs {\n    background-color: #ff7043; } }\n\nbutton[data-md-color-primary=\"brown\"] {\n  background-color: #795548; }\n\n[data-md-color-primary=\"brown\"] .md-typeset a {\n  color: #795548; }\n\n[data-md-color-primary=\"brown\"] .md-header {\n  background-color: #795548; }\n\n[data-md-color-primary=\"brown\"] .md-hero {\n  background-color: #795548; }\n\n[data-md-color-primary=\"brown\"] .md-nav__link:active,\n[data-md-color-primary=\"brown\"] .md-nav__link--active {\n  color: #795548; }\n\n[data-md-color-primary=\"brown\"] .md-nav__item--nested > .md-nav__link {\n  color: inherit; }\n\n@media only screen and (max-width: 59.9375em) {\n  [data-md-color-primary=\"brown\"] .md-nav__source {\n    background-color: rgba(96, 68, 57, 0.9675); } }\n\n@media only screen and (max-width: 76.1875em) {\n  html [data-md-color-primary=\"brown\"] .md-nav--primary .md-nav__title--site {\n    background-color: #795548; } }\n\n@media only screen and (min-width: 76.25em) {\n  [data-md-color-primary=\"brown\"] .md-tabs {\n    background-color: #795548; } }\n\nbutton[data-md-color-primary=\"grey\"] {\n  background-color: #757575; }\n\n[data-md-color-primary=\"grey\"] .md-typeset a {\n  color: #757575; }\n\n[data-md-color-primary=\"grey\"] .md-header {\n  background-color: #757575; }\n\n[data-md-color-primary=\"grey\"] .md-hero {\n  background-color: #757575; }\n\n[data-md-color-primary=\"grey\"] .md-nav__link:active,\n[data-md-color-primary=\"grey\"] .md-nav__link--active {\n  color: #757575; }\n\n[data-md-color-primary=\"grey\"] .md-nav__item--nested > .md-nav__link {\n  color: inherit; }\n\n@media only screen and (max-width: 59.9375em) {\n  [data-md-color-primary=\"grey\"] .md-nav__source {\n    background-color: rgba(93, 93, 93, 0.9675); } }\n\n@media only screen and (max-width: 76.1875em) {\n  html [data-md-color-primary=\"grey\"] .md-nav--primary .md-nav__title--site {\n    background-color: #757575; } }\n\n@media only screen and (min-width: 76.25em) {\n  [data-md-color-primary=\"grey\"] .md-tabs {\n    background-color: #757575; } }\n\nbutton[data-md-color-primary=\"blue-grey\"] {\n  background-color: #546e7a; }\n\n[data-md-color-primary=\"blue-grey\"] .md-typeset a {\n  color: #546e7a; }\n\n[data-md-color-primary=\"blue-grey\"] .md-header {\n  background-color: #546e7a; }\n\n[data-md-color-primary=\"blue-grey\"] .md-hero {\n  background-color: #546e7a; }\n\n[data-md-color-primary=\"blue-grey\"] .md-nav__link:active,\n[data-md-color-primary=\"blue-grey\"] .md-nav__link--active {\n  color: #546e7a; }\n\n[data-md-color-primary=\"blue-grey\"] .md-nav__item--nested > .md-nav__link {\n  color: inherit; }\n\n@media only screen and (max-width: 59.9375em) {\n  [data-md-color-primary=\"blue-grey\"] .md-nav__source {\n    background-color: rgba(67, 88, 97, 0.9675); } }\n\n@media only screen and (max-width: 76.1875em) {\n  html [data-md-color-primary=\"blue-grey\"] .md-nav--primary .md-nav__title--site {\n    background-color: #546e7a; } }\n\n@media only screen and (min-width: 76.25em) {\n  [data-md-color-primary=\"blue-grey\"] .md-tabs {\n    background-color: #546e7a; } }\n\nbutton[data-md-color-primary=\"white\"] {\n  background-color: white;\n  color: rgba(0, 0, 0, 0.87);\n  box-shadow: 0 0 0.1rem rgba(0, 0, 0, 0.54) inset; }\n\n[data-md-color-primary=\"white\"] .md-header {\n  background-color: white;\n  color: rgba(0, 0, 0, 0.87); }\n\n[data-md-color-primary=\"white\"] .md-hero {\n  background-color: white;\n  color: rgba(0, 0, 0, 0.87); }\n  [data-md-color-primary=\"white\"] .md-hero--expand {\n    border-bottom: 0.1rem solid rgba(0, 0, 0, 0.07); }\n\n@media only screen and (max-width: 59.9375em) {\n  [data-md-color-primary=\"white\"] .md-nav__source {\n    background-color: rgba(0, 0, 0, 0.07);\n    color: rgba(0, 0, 0, 0.87); } }\n\n@media only screen and (min-width: 60em) {\n  [data-md-color-primary=\"white\"] .md-search__input {\n    background-color: rgba(0, 0, 0, 0.07); }\n    [data-md-color-primary=\"white\"] .md-search__input::placeholder {\n      color: rgba(0, 0, 0, 0.54); } }\n\n@media only screen and (max-width: 76.1875em) {\n  html [data-md-color-primary=\"white\"] .md-nav--primary .md-nav__title--site {\n    background-color: white;\n    color: rgba(0, 0, 0, 0.87); }\n  [data-md-color-primary=\"white\"] .md-hero {\n    border-bottom: 0.1rem solid rgba(0, 0, 0, 0.07); } }\n\n@media only screen and (min-width: 76.25em) {\n  [data-md-color-primary=\"white\"] .md-tabs {\n    border-bottom: 0.1rem solid rgba(0, 0, 0, 0.07);\n    background-color: white;\n    color: rgba(0, 0, 0, 0.87); } }\n\nbutton[data-md-color-accent=\"red\"] {\n  background-color: #ff1744; }\n\n[data-md-color-accent=\"red\"] .md-typeset a:hover,\n[data-md-color-accent=\"red\"] .md-typeset a:active {\n  color: #ff1744; }\n\n[data-md-color-accent=\"red\"] .md-typeset pre code::-webkit-scrollbar-thumb:hover,\n[data-md-color-accent=\"red\"] .md-typeset .codehilite pre::-webkit-scrollbar-thumb:hover {\n  background-color: #ff1744; }\n\n[data-md-color-accent=\"red\"] .md-typeset .md-clipboard:hover::before,\n[data-md-color-accent=\"red\"] .md-typeset .md-clipboard:active::before {\n  color: #ff1744; }\n\n[data-md-color-accent=\"red\"] .md-typeset .footnote li:hover .footnote-backref:hover,\n[data-md-color-accent=\"red\"] .md-typeset .footnote li:target .footnote-backref {\n  color: #ff1744; }\n\n[data-md-color-accent=\"red\"] .md-typeset [id]:hover .headerlink:hover,\n[data-md-color-accent=\"red\"] .md-typeset [id]:target .headerlink,\n[data-md-color-accent=\"red\"] .md-typeset [id] .headerlink:focus {\n  color: #ff1744; }\n\n[data-md-color-accent=\"red\"] .md-nav__link:focus,\n[data-md-color-accent=\"red\"] .md-nav__link:hover {\n  color: #ff1744; }\n\n[data-md-color-accent=\"red\"] .md-search__scrollwrap::-webkit-scrollbar-thumb:hover {\n  background-color: #ff1744; }\n\n[data-md-color-accent=\"red\"] .md-search-result__link[data-md-state=\"active\"], [data-md-color-accent=\"red\"] .md-search-result__link:hover {\n  background-color: rgba(255, 23, 68, 0.1); }\n\n[data-md-color-accent=\"red\"] .md-sidebar__scrollwrap::-webkit-scrollbar-thumb:hover {\n  background-color: #ff1744; }\n\n[data-md-color-accent=\"red\"] .md-source-file:hover::before {\n  background-color: #ff1744; }\n\nbutton[data-md-color-accent=\"pink\"] {\n  background-color: #f50057; }\n\n[data-md-color-accent=\"pink\"] .md-typeset a:hover,\n[data-md-color-accent=\"pink\"] .md-typeset a:active {\n  color: #f50057; }\n\n[data-md-color-accent=\"pink\"] .md-typeset pre code::-webkit-scrollbar-thumb:hover,\n[data-md-color-accent=\"pink\"] .md-typeset .codehilite pre::-webkit-scrollbar-thumb:hover {\n  background-color: #f50057; }\n\n[data-md-color-accent=\"pink\"] .md-typeset .md-clipboard:hover::before,\n[data-md-color-accent=\"pink\"] .md-typeset .md-clipboard:active::before {\n  color: #f50057; }\n\n[data-md-color-accent=\"pink\"] .md-typeset .footnote li:hover .footnote-backref:hover,\n[data-md-color-accent=\"pink\"] .md-typeset .footnote li:target .footnote-backref {\n  color: #f50057; }\n\n[data-md-color-accent=\"pink\"] .md-typeset [id]:hover .headerlink:hover,\n[data-md-color-accent=\"pink\"] .md-typeset [id]:target .headerlink,\n[data-md-color-accent=\"pink\"] .md-typeset [id] .headerlink:focus {\n  color: #f50057; }\n\n[data-md-color-accent=\"pink\"] .md-nav__link:focus,\n[data-md-color-accent=\"pink\"] .md-nav__link:hover {\n  color: #f50057; }\n\n[data-md-color-accent=\"pink\"] .md-search__scrollwrap::-webkit-scrollbar-thumb:hover {\n  background-color: #f50057; }\n\n[data-md-color-accent=\"pink\"] .md-search-result__link[data-md-state=\"active\"], [data-md-color-accent=\"pink\"] .md-search-result__link:hover {\n  background-color: rgba(245, 0, 87, 0.1); }\n\n[data-md-color-accent=\"pink\"] .md-sidebar__scrollwrap::-webkit-scrollbar-thumb:hover {\n  background-color: #f50057; }\n\n[data-md-color-accent=\"pink\"] .md-source-file:hover::before {\n  background-color: #f50057; }\n\nbutton[data-md-color-accent=\"purple\"] {\n  background-color: #e040fb; }\n\n[data-md-color-accent=\"purple\"] .md-typeset a:hover,\n[data-md-color-accent=\"purple\"] .md-typeset a:active {\n  color: #e040fb; }\n\n[data-md-color-accent=\"purple\"] .md-typeset pre code::-webkit-scrollbar-thumb:hover,\n[data-md-color-accent=\"purple\"] .md-typeset .codehilite pre::-webkit-scrollbar-thumb:hover {\n  background-color: #e040fb; }\n\n[data-md-color-accent=\"purple\"] .md-typeset .md-clipboard:hover::before,\n[data-md-color-accent=\"purple\"] .md-typeset .md-clipboard:active::before {\n  color: #e040fb; }\n\n[data-md-color-accent=\"purple\"] .md-typeset .footnote li:hover .footnote-backref:hover,\n[data-md-color-accent=\"purple\"] .md-typeset .footnote li:target .footnote-backref {\n  color: #e040fb; }\n\n[data-md-color-accent=\"purple\"] .md-typeset [id]:hover .headerlink:hover,\n[data-md-color-accent=\"purple\"] .md-typeset [id]:target .headerlink,\n[data-md-color-accent=\"purple\"] .md-typeset [id] .headerlink:focus {\n  color: #e040fb; }\n\n[data-md-color-accent=\"purple\"] .md-nav__link:focus,\n[data-md-color-accent=\"purple\"] .md-nav__link:hover {\n  color: #e040fb; }\n\n[data-md-color-accent=\"purple\"] .md-search__scrollwrap::-webkit-scrollbar-thumb:hover {\n  background-color: #e040fb; }\n\n[data-md-color-accent=\"purple\"] .md-search-result__link[data-md-state=\"active\"], [data-md-color-accent=\"purple\"] .md-search-result__link:hover {\n  background-color: rgba(224, 64, 251, 0.1); }\n\n[data-md-color-accent=\"purple\"] .md-sidebar__scrollwrap::-webkit-scrollbar-thumb:hover {\n  background-color: #e040fb; }\n\n[data-md-color-accent=\"purple\"] .md-source-file:hover::before {\n  background-color: #e040fb; }\n\nbutton[data-md-color-accent=\"deep-purple\"] {\n  background-color: #7c4dff; }\n\n[data-md-color-accent=\"deep-purple\"] .md-typeset a:hover,\n[data-md-color-accent=\"deep-purple\"] .md-typeset a:active {\n  color: #7c4dff; }\n\n[data-md-color-accent=\"deep-purple\"] .md-typeset pre code::-webkit-scrollbar-thumb:hover,\n[data-md-color-accent=\"deep-purple\"] .md-typeset .codehilite pre::-webkit-scrollbar-thumb:hover {\n  background-color: #7c4dff; }\n\n[data-md-color-accent=\"deep-purple\"] .md-typeset .md-clipboard:hover::before,\n[data-md-color-accent=\"deep-purple\"] .md-typeset .md-clipboard:active::before {\n  color: #7c4dff; }\n\n[data-md-color-accent=\"deep-purple\"] .md-typeset .footnote li:hover .footnote-backref:hover,\n[data-md-color-accent=\"deep-purple\"] .md-typeset .footnote li:target .footnote-backref {\n  color: #7c4dff; }\n\n[data-md-color-accent=\"deep-purple\"] .md-typeset [id]:hover .headerlink:hover,\n[data-md-color-accent=\"deep-purple\"] .md-typeset [id]:target .headerlink,\n[data-md-color-accent=\"deep-purple\"] .md-typeset [id] .headerlink:focus {\n  color: #7c4dff; }\n\n[data-md-color-accent=\"deep-purple\"] .md-nav__link:focus,\n[data-md-color-accent=\"deep-purple\"] .md-nav__link:hover {\n  color: #7c4dff; }\n\n[data-md-color-accent=\"deep-purple\"] .md-search__scrollwrap::-webkit-scrollbar-thumb:hover {\n  background-color: #7c4dff; }\n\n[data-md-color-accent=\"deep-purple\"] .md-search-result__link[data-md-state=\"active\"], [data-md-color-accent=\"deep-purple\"] .md-search-result__link:hover {\n  background-color: rgba(124, 77, 255, 0.1); }\n\n[data-md-color-accent=\"deep-purple\"] .md-sidebar__scrollwrap::-webkit-scrollbar-thumb:hover {\n  background-color: #7c4dff; }\n\n[data-md-color-accent=\"deep-purple\"] .md-source-file:hover::before {\n  background-color: #7c4dff; }\n\nbutton[data-md-color-accent=\"indigo\"] {\n  background-color: #536dfe; }\n\n[data-md-color-accent=\"indigo\"] .md-typeset a:hover,\n[data-md-color-accent=\"indigo\"] .md-typeset a:active {\n  color: #536dfe; }\n\n[data-md-color-accent=\"indigo\"] .md-typeset pre code::-webkit-scrollbar-thumb:hover,\n[data-md-color-accent=\"indigo\"] .md-typeset .codehilite pre::-webkit-scrollbar-thumb:hover {\n  background-color: #536dfe; }\n\n[data-md-color-accent=\"indigo\"] .md-typeset .md-clipboard:hover::before,\n[data-md-color-accent=\"indigo\"] .md-typeset .md-clipboard:active::before {\n  color: #536dfe; }\n\n[data-md-color-accent=\"indigo\"] .md-typeset .footnote li:hover .footnote-backref:hover,\n[data-md-color-accent=\"indigo\"] .md-typeset .footnote li:target .footnote-backref {\n  color: #536dfe; }\n\n[data-md-color-accent=\"indigo\"] .md-typeset [id]:hover .headerlink:hover,\n[data-md-color-accent=\"indigo\"] .md-typeset [id]:target .headerlink,\n[data-md-color-accent=\"indigo\"] .md-typeset [id] .headerlink:focus {\n  color: #536dfe; }\n\n[data-md-color-accent=\"indigo\"] .md-nav__link:focus,\n[data-md-color-accent=\"indigo\"] .md-nav__link:hover {\n  color: #536dfe; }\n\n[data-md-color-accent=\"indigo\"] .md-search__scrollwrap::-webkit-scrollbar-thumb:hover {\n  background-color: #536dfe; }\n\n[data-md-color-accent=\"indigo\"] .md-search-result__link[data-md-state=\"active\"], [data-md-color-accent=\"indigo\"] .md-search-result__link:hover {\n  background-color: rgba(83, 109, 254, 0.1); }\n\n[data-md-color-accent=\"indigo\"] .md-sidebar__scrollwrap::-webkit-scrollbar-thumb:hover {\n  background-color: #536dfe; }\n\n[data-md-color-accent=\"indigo\"] .md-source-file:hover::before {\n  background-color: #536dfe; }\n\nbutton[data-md-color-accent=\"blue\"] {\n  background-color: #448aff; }\n\n[data-md-color-accent=\"blue\"] .md-typeset a:hover,\n[data-md-color-accent=\"blue\"] .md-typeset a:active {\n  color: #448aff; }\n\n[data-md-color-accent=\"blue\"] .md-typeset pre code::-webkit-scrollbar-thumb:hover,\n[data-md-color-accent=\"blue\"] .md-typeset .codehilite pre::-webkit-scrollbar-thumb:hover {\n  background-color: #448aff; }\n\n[data-md-color-accent=\"blue\"] .md-typeset .md-clipboard:hover::before,\n[data-md-color-accent=\"blue\"] .md-typeset .md-clipboard:active::before {\n  color: #448aff; }\n\n[data-md-color-accent=\"blue\"] .md-typeset .footnote li:hover .footnote-backref:hover,\n[data-md-color-accent=\"blue\"] .md-typeset .footnote li:target .footnote-backref {\n  color: #448aff; }\n\n[data-md-color-accent=\"blue\"] .md-typeset [id]:hover .headerlink:hover,\n[data-md-color-accent=\"blue\"] .md-typeset [id]:target .headerlink,\n[data-md-color-accent=\"blue\"] .md-typeset [id] .headerlink:focus {\n  color: #448aff; }\n\n[data-md-color-accent=\"blue\"] .md-nav__link:focus,\n[data-md-color-accent=\"blue\"] .md-nav__link:hover {\n  color: #448aff; }\n\n[data-md-color-accent=\"blue\"] .md-search__scrollwrap::-webkit-scrollbar-thumb:hover {\n  background-color: #448aff; }\n\n[data-md-color-accent=\"blue\"] .md-search-result__link[data-md-state=\"active\"], [data-md-color-accent=\"blue\"] .md-search-result__link:hover {\n  background-color: rgba(68, 138, 255, 0.1); }\n\n[data-md-color-accent=\"blue\"] .md-sidebar__scrollwrap::-webkit-scrollbar-thumb:hover {\n  background-color: #448aff; }\n\n[data-md-color-accent=\"blue\"] .md-source-file:hover::before {\n  background-color: #448aff; }\n\nbutton[data-md-color-accent=\"light-blue\"] {\n  background-color: #0091ea; }\n\n[data-md-color-accent=\"light-blue\"] .md-typeset a:hover,\n[data-md-color-accent=\"light-blue\"] .md-typeset a:active {\n  color: #0091ea; }\n\n[data-md-color-accent=\"light-blue\"] .md-typeset pre code::-webkit-scrollbar-thumb:hover,\n[data-md-color-accent=\"light-blue\"] .md-typeset .codehilite pre::-webkit-scrollbar-thumb:hover {\n  background-color: #0091ea; }\n\n[data-md-color-accent=\"light-blue\"] .md-typeset .md-clipboard:hover::before,\n[data-md-color-accent=\"light-blue\"] .md-typeset .md-clipboard:active::before {\n  color: #0091ea; }\n\n[data-md-color-accent=\"light-blue\"] .md-typeset .footnote li:hover .footnote-backref:hover,\n[data-md-color-accent=\"light-blue\"] .md-typeset .footnote li:target .footnote-backref {\n  color: #0091ea; }\n\n[data-md-color-accent=\"light-blue\"] .md-typeset [id]:hover .headerlink:hover,\n[data-md-color-accent=\"light-blue\"] .md-typeset [id]:target .headerlink,\n[data-md-color-accent=\"light-blue\"] .md-typeset [id] .headerlink:focus {\n  color: #0091ea; }\n\n[data-md-color-accent=\"light-blue\"] .md-nav__link:focus,\n[data-md-color-accent=\"light-blue\"] .md-nav__link:hover {\n  color: #0091ea; }\n\n[data-md-color-accent=\"light-blue\"] .md-search__scrollwrap::-webkit-scrollbar-thumb:hover {\n  background-color: #0091ea; }\n\n[data-md-color-accent=\"light-blue\"] .md-search-result__link[data-md-state=\"active\"], [data-md-color-accent=\"light-blue\"] .md-search-result__link:hover {\n  background-color: rgba(0, 145, 234, 0.1); }\n\n[data-md-color-accent=\"light-blue\"] .md-sidebar__scrollwrap::-webkit-scrollbar-thumb:hover {\n  background-color: #0091ea; }\n\n[data-md-color-accent=\"light-blue\"] .md-source-file:hover::before {\n  background-color: #0091ea; }\n\nbutton[data-md-color-accent=\"cyan\"] {\n  background-color: #00b8d4; }\n\n[data-md-color-accent=\"cyan\"] .md-typeset a:hover,\n[data-md-color-accent=\"cyan\"] .md-typeset a:active {\n  color: #00b8d4; }\n\n[data-md-color-accent=\"cyan\"] .md-typeset pre code::-webkit-scrollbar-thumb:hover,\n[data-md-color-accent=\"cyan\"] .md-typeset .codehilite pre::-webkit-scrollbar-thumb:hover {\n  background-color: #00b8d4; }\n\n[data-md-color-accent=\"cyan\"] .md-typeset .md-clipboard:hover::before,\n[data-md-color-accent=\"cyan\"] .md-typeset .md-clipboard:active::before {\n  color: #00b8d4; }\n\n[data-md-color-accent=\"cyan\"] .md-typeset .footnote li:hover .footnote-backref:hover,\n[data-md-color-accent=\"cyan\"] .md-typeset .footnote li:target .footnote-backref {\n  color: #00b8d4; }\n\n[data-md-color-accent=\"cyan\"] .md-typeset [id]:hover .headerlink:hover,\n[data-md-color-accent=\"cyan\"] .md-typeset [id]:target .headerlink,\n[data-md-color-accent=\"cyan\"] .md-typeset [id] .headerlink:focus {\n  color: #00b8d4; }\n\n[data-md-color-accent=\"cyan\"] .md-nav__link:focus,\n[data-md-color-accent=\"cyan\"] .md-nav__link:hover {\n  color: #00b8d4; }\n\n[data-md-color-accent=\"cyan\"] .md-search__scrollwrap::-webkit-scrollbar-thumb:hover {\n  background-color: #00b8d4; }\n\n[data-md-color-accent=\"cyan\"] .md-search-result__link[data-md-state=\"active\"], [data-md-color-accent=\"cyan\"] .md-search-result__link:hover {\n  background-color: rgba(0, 184, 212, 0.1); }\n\n[data-md-color-accent=\"cyan\"] .md-sidebar__scrollwrap::-webkit-scrollbar-thumb:hover {\n  background-color: #00b8d4; }\n\n[data-md-color-accent=\"cyan\"] .md-source-file:hover::before {\n  background-color: #00b8d4; }\n\nbutton[data-md-color-accent=\"teal\"] {\n  background-color: #00bfa5; }\n\n[data-md-color-accent=\"teal\"] .md-typeset a:hover,\n[data-md-color-accent=\"teal\"] .md-typeset a:active {\n  color: #00bfa5; }\n\n[data-md-color-accent=\"teal\"] .md-typeset pre code::-webkit-scrollbar-thumb:hover,\n[data-md-color-accent=\"teal\"] .md-typeset .codehilite pre::-webkit-scrollbar-thumb:hover {\n  background-color: #00bfa5; }\n\n[data-md-color-accent=\"teal\"] .md-typeset .md-clipboard:hover::before,\n[data-md-color-accent=\"teal\"] .md-typeset .md-clipboard:active::before {\n  color: #00bfa5; }\n\n[data-md-color-accent=\"teal\"] .md-typeset .footnote li:hover .footnote-backref:hover,\n[data-md-color-accent=\"teal\"] .md-typeset .footnote li:target .footnote-backref {\n  color: #00bfa5; }\n\n[data-md-color-accent=\"teal\"] .md-typeset [id]:hover .headerlink:hover,\n[data-md-color-accent=\"teal\"] .md-typeset [id]:target .headerlink,\n[data-md-color-accent=\"teal\"] .md-typeset [id] .headerlink:focus {\n  color: #00bfa5; }\n\n[data-md-color-accent=\"teal\"] .md-nav__link:focus,\n[data-md-color-accent=\"teal\"] .md-nav__link:hover {\n  color: #00bfa5; }\n\n[data-md-color-accent=\"teal\"] .md-search__scrollwrap::-webkit-scrollbar-thumb:hover {\n  background-color: #00bfa5; }\n\n[data-md-color-accent=\"teal\"] .md-search-result__link[data-md-state=\"active\"], [data-md-color-accent=\"teal\"] .md-search-result__link:hover {\n  background-color: rgba(0, 191, 165, 0.1); }\n\n[data-md-color-accent=\"teal\"] .md-sidebar__scrollwrap::-webkit-scrollbar-thumb:hover {\n  background-color: #00bfa5; }\n\n[data-md-color-accent=\"teal\"] .md-source-file:hover::before {\n  background-color: #00bfa5; }\n\nbutton[data-md-color-accent=\"green\"] {\n  background-color: #00c853; }\n\n[data-md-color-accent=\"green\"] .md-typeset a:hover,\n[data-md-color-accent=\"green\"] .md-typeset a:active {\n  color: #00c853; }\n\n[data-md-color-accent=\"green\"] .md-typeset pre code::-webkit-scrollbar-thumb:hover,\n[data-md-color-accent=\"green\"] .md-typeset .codehilite pre::-webkit-scrollbar-thumb:hover {\n  background-color: #00c853; }\n\n[data-md-color-accent=\"green\"] .md-typeset .md-clipboard:hover::before,\n[data-md-color-accent=\"green\"] .md-typeset .md-clipboard:active::before {\n  color: #00c853; }\n\n[data-md-color-accent=\"green\"] .md-typeset .footnote li:hover .footnote-backref:hover,\n[data-md-color-accent=\"green\"] .md-typeset .footnote li:target .footnote-backref {\n  color: #00c853; }\n\n[data-md-color-accent=\"green\"] .md-typeset [id]:hover .headerlink:hover,\n[data-md-color-accent=\"green\"] .md-typeset [id]:target .headerlink,\n[data-md-color-accent=\"green\"] .md-typeset [id] .headerlink:focus {\n  color: #00c853; }\n\n[data-md-color-accent=\"green\"] .md-nav__link:focus,\n[data-md-color-accent=\"green\"] .md-nav__link:hover {\n  color: #00c853; }\n\n[data-md-color-accent=\"green\"] .md-search__scrollwrap::-webkit-scrollbar-thumb:hover {\n  background-color: #00c853; }\n\n[data-md-color-accent=\"green\"] .md-search-result__link[data-md-state=\"active\"], [data-md-color-accent=\"green\"] .md-search-result__link:hover {\n  background-color: rgba(0, 200, 83, 0.1); }\n\n[data-md-color-accent=\"green\"] .md-sidebar__scrollwrap::-webkit-scrollbar-thumb:hover {\n  background-color: #00c853; }\n\n[data-md-color-accent=\"green\"] .md-source-file:hover::before {\n  background-color: #00c853; }\n\nbutton[data-md-color-accent=\"light-green\"] {\n  background-color: #64dd17; }\n\n[data-md-color-accent=\"light-green\"] .md-typeset a:hover,\n[data-md-color-accent=\"light-green\"] .md-typeset a:active {\n  color: #64dd17; }\n\n[data-md-color-accent=\"light-green\"] .md-typeset pre code::-webkit-scrollbar-thumb:hover,\n[data-md-color-accent=\"light-green\"] .md-typeset .codehilite pre::-webkit-scrollbar-thumb:hover {\n  background-color: #64dd17; }\n\n[data-md-color-accent=\"light-green\"] .md-typeset .md-clipboard:hover::before,\n[data-md-color-accent=\"light-green\"] .md-typeset .md-clipboard:active::before {\n  color: #64dd17; }\n\n[data-md-color-accent=\"light-green\"] .md-typeset .footnote li:hover .footnote-backref:hover,\n[data-md-color-accent=\"light-green\"] .md-typeset .footnote li:target .footnote-backref {\n  color: #64dd17; }\n\n[data-md-color-accent=\"light-green\"] .md-typeset [id]:hover .headerlink:hover,\n[data-md-color-accent=\"light-green\"] .md-typeset [id]:target .headerlink,\n[data-md-color-accent=\"light-green\"] .md-typeset [id] .headerlink:focus {\n  color: #64dd17; }\n\n[data-md-color-accent=\"light-green\"] .md-nav__link:focus,\n[data-md-color-accent=\"light-green\"] .md-nav__link:hover {\n  color: #64dd17; }\n\n[data-md-color-accent=\"light-green\"] .md-search__scrollwrap::-webkit-scrollbar-thumb:hover {\n  background-color: #64dd17; }\n\n[data-md-color-accent=\"light-green\"] .md-search-result__link[data-md-state=\"active\"], [data-md-color-accent=\"light-green\"] .md-search-result__link:hover {\n  background-color: rgba(100, 221, 23, 0.1); }\n\n[data-md-color-accent=\"light-green\"] .md-sidebar__scrollwrap::-webkit-scrollbar-thumb:hover {\n  background-color: #64dd17; }\n\n[data-md-color-accent=\"light-green\"] .md-source-file:hover::before {\n  background-color: #64dd17; }\n\nbutton[data-md-color-accent=\"lime\"] {\n  background-color: #aeea00; }\n\n[data-md-color-accent=\"lime\"] .md-typeset a:hover,\n[data-md-color-accent=\"lime\"] .md-typeset a:active {\n  color: #aeea00; }\n\n[data-md-color-accent=\"lime\"] .md-typeset pre code::-webkit-scrollbar-thumb:hover,\n[data-md-color-accent=\"lime\"] .md-typeset .codehilite pre::-webkit-scrollbar-thumb:hover {\n  background-color: #aeea00; }\n\n[data-md-color-accent=\"lime\"] .md-typeset .md-clipboard:hover::before,\n[data-md-color-accent=\"lime\"] .md-typeset .md-clipboard:active::before {\n  color: #aeea00; }\n\n[data-md-color-accent=\"lime\"] .md-typeset .footnote li:hover .footnote-backref:hover,\n[data-md-color-accent=\"lime\"] .md-typeset .footnote li:target .footnote-backref {\n  color: #aeea00; }\n\n[data-md-color-accent=\"lime\"] .md-typeset [id]:hover .headerlink:hover,\n[data-md-color-accent=\"lime\"] .md-typeset [id]:target .headerlink,\n[data-md-color-accent=\"lime\"] .md-typeset [id] .headerlink:focus {\n  color: #aeea00; }\n\n[data-md-color-accent=\"lime\"] .md-nav__link:focus,\n[data-md-color-accent=\"lime\"] .md-nav__link:hover {\n  color: #aeea00; }\n\n[data-md-color-accent=\"lime\"] .md-search__scrollwrap::-webkit-scrollbar-thumb:hover {\n  background-color: #aeea00; }\n\n[data-md-color-accent=\"lime\"] .md-search-result__link[data-md-state=\"active\"], [data-md-color-accent=\"lime\"] .md-search-result__link:hover {\n  background-color: rgba(174, 234, 0, 0.1); }\n\n[data-md-color-accent=\"lime\"] .md-sidebar__scrollwrap::-webkit-scrollbar-thumb:hover {\n  background-color: #aeea00; }\n\n[data-md-color-accent=\"lime\"] .md-source-file:hover::before {\n  background-color: #aeea00; }\n\nbutton[data-md-color-accent=\"yellow\"] {\n  background-color: #ffd600; }\n\n[data-md-color-accent=\"yellow\"] .md-typeset a:hover,\n[data-md-color-accent=\"yellow\"] .md-typeset a:active {\n  color: #ffd600; }\n\n[data-md-color-accent=\"yellow\"] .md-typeset pre code::-webkit-scrollbar-thumb:hover,\n[data-md-color-accent=\"yellow\"] .md-typeset .codehilite pre::-webkit-scrollbar-thumb:hover {\n  background-color: #ffd600; }\n\n[data-md-color-accent=\"yellow\"] .md-typeset .md-clipboard:hover::before,\n[data-md-color-accent=\"yellow\"] .md-typeset .md-clipboard:active::before {\n  color: #ffd600; }\n\n[data-md-color-accent=\"yellow\"] .md-typeset .footnote li:hover .footnote-backref:hover,\n[data-md-color-accent=\"yellow\"] .md-typeset .footnote li:target .footnote-backref {\n  color: #ffd600; }\n\n[data-md-color-accent=\"yellow\"] .md-typeset [id]:hover .headerlink:hover,\n[data-md-color-accent=\"yellow\"] .md-typeset [id]:target .headerlink,\n[data-md-color-accent=\"yellow\"] .md-typeset [id] .headerlink:focus {\n  color: #ffd600; }\n\n[data-md-color-accent=\"yellow\"] .md-nav__link:focus,\n[data-md-color-accent=\"yellow\"] .md-nav__link:hover {\n  color: #ffd600; }\n\n[data-md-color-accent=\"yellow\"] .md-search__scrollwrap::-webkit-scrollbar-thumb:hover {\n  background-color: #ffd600; }\n\n[data-md-color-accent=\"yellow\"] .md-search-result__link[data-md-state=\"active\"], [data-md-color-accent=\"yellow\"] .md-search-result__link:hover {\n  background-color: rgba(255, 214, 0, 0.1); }\n\n[data-md-color-accent=\"yellow\"] .md-sidebar__scrollwrap::-webkit-scrollbar-thumb:hover {\n  background-color: #ffd600; }\n\n[data-md-color-accent=\"yellow\"] .md-source-file:hover::before {\n  background-color: #ffd600; }\n\nbutton[data-md-color-accent=\"amber\"] {\n  background-color: #ffab00; }\n\n[data-md-color-accent=\"amber\"] .md-typeset a:hover,\n[data-md-color-accent=\"amber\"] .md-typeset a:active {\n  color: #ffab00; }\n\n[data-md-color-accent=\"amber\"] .md-typeset pre code::-webkit-scrollbar-thumb:hover,\n[data-md-color-accent=\"amber\"] .md-typeset .codehilite pre::-webkit-scrollbar-thumb:hover {\n  background-color: #ffab00; }\n\n[data-md-color-accent=\"amber\"] .md-typeset .md-clipboard:hover::before,\n[data-md-color-accent=\"amber\"] .md-typeset .md-clipboard:active::before {\n  color: #ffab00; }\n\n[data-md-color-accent=\"amber\"] .md-typeset .footnote li:hover .footnote-backref:hover,\n[data-md-color-accent=\"amber\"] .md-typeset .footnote li:target .footnote-backref {\n  color: #ffab00; }\n\n[data-md-color-accent=\"amber\"] .md-typeset [id]:hover .headerlink:hover,\n[data-md-color-accent=\"amber\"] .md-typeset [id]:target .headerlink,\n[data-md-color-accent=\"amber\"] .md-typeset [id] .headerlink:focus {\n  color: #ffab00; }\n\n[data-md-color-accent=\"amber\"] .md-nav__link:focus,\n[data-md-color-accent=\"amber\"] .md-nav__link:hover {\n  color: #ffab00; }\n\n[data-md-color-accent=\"amber\"] .md-search__scrollwrap::-webkit-scrollbar-thumb:hover {\n  background-color: #ffab00; }\n\n[data-md-color-accent=\"amber\"] .md-search-result__link[data-md-state=\"active\"], [data-md-color-accent=\"amber\"] .md-search-result__link:hover {\n  background-color: rgba(255, 171, 0, 0.1); }\n\n[data-md-color-accent=\"amber\"] .md-sidebar__scrollwrap::-webkit-scrollbar-thumb:hover {\n  background-color: #ffab00; }\n\n[data-md-color-accent=\"amber\"] .md-source-file:hover::before {\n  background-color: #ffab00; }\n\nbutton[data-md-color-accent=\"orange\"] {\n  background-color: #ff9100; }\n\n[data-md-color-accent=\"orange\"] .md-typeset a:hover,\n[data-md-color-accent=\"orange\"] .md-typeset a:active {\n  color: #ff9100; }\n\n[data-md-color-accent=\"orange\"] .md-typeset pre code::-webkit-scrollbar-thumb:hover,\n[data-md-color-accent=\"orange\"] .md-typeset .codehilite pre::-webkit-scrollbar-thumb:hover {\n  background-color: #ff9100; }\n\n[data-md-color-accent=\"orange\"] .md-typeset .md-clipboard:hover::before,\n[data-md-color-accent=\"orange\"] .md-typeset .md-clipboard:active::before {\n  color: #ff9100; }\n\n[data-md-color-accent=\"orange\"] .md-typeset .footnote li:hover .footnote-backref:hover,\n[data-md-color-accent=\"orange\"] .md-typeset .footnote li:target .footnote-backref {\n  color: #ff9100; }\n\n[data-md-color-accent=\"orange\"] .md-typeset [id]:hover .headerlink:hover,\n[data-md-color-accent=\"orange\"] .md-typeset [id]:target .headerlink,\n[data-md-color-accent=\"orange\"] .md-typeset [id] .headerlink:focus {\n  color: #ff9100; }\n\n[data-md-color-accent=\"orange\"] .md-nav__link:focus,\n[data-md-color-accent=\"orange\"] .md-nav__link:hover {\n  color: #ff9100; }\n\n[data-md-color-accent=\"orange\"] .md-search__scrollwrap::-webkit-scrollbar-thumb:hover {\n  background-color: #ff9100; }\n\n[data-md-color-accent=\"orange\"] .md-search-result__link[data-md-state=\"active\"], [data-md-color-accent=\"orange\"] .md-search-result__link:hover {\n  background-color: rgba(255, 145, 0, 0.1); }\n\n[data-md-color-accent=\"orange\"] .md-sidebar__scrollwrap::-webkit-scrollbar-thumb:hover {\n  background-color: #ff9100; }\n\n[data-md-color-accent=\"orange\"] .md-source-file:hover::before {\n  background-color: #ff9100; }\n\nbutton[data-md-color-accent=\"deep-orange\"] {\n  background-color: #ff6e40; }\n\n[data-md-color-accent=\"deep-orange\"] .md-typeset a:hover,\n[data-md-color-accent=\"deep-orange\"] .md-typeset a:active {\n  color: #ff6e40; }\n\n[data-md-color-accent=\"deep-orange\"] .md-typeset pre code::-webkit-scrollbar-thumb:hover,\n[data-md-color-accent=\"deep-orange\"] .md-typeset .codehilite pre::-webkit-scrollbar-thumb:hover {\n  background-color: #ff6e40; }\n\n[data-md-color-accent=\"deep-orange\"] .md-typeset .md-clipboard:hover::before,\n[data-md-color-accent=\"deep-orange\"] .md-typeset .md-clipboard:active::before {\n  color: #ff6e40; }\n\n[data-md-color-accent=\"deep-orange\"] .md-typeset .footnote li:hover .footnote-backref:hover,\n[data-md-color-accent=\"deep-orange\"] .md-typeset .footnote li:target .footnote-backref {\n  color: #ff6e40; }\n\n[data-md-color-accent=\"deep-orange\"] .md-typeset [id]:hover .headerlink:hover,\n[data-md-color-accent=\"deep-orange\"] .md-typeset [id]:target .headerlink,\n[data-md-color-accent=\"deep-orange\"] .md-typeset [id] .headerlink:focus {\n  color: #ff6e40; }\n\n[data-md-color-accent=\"deep-orange\"] .md-nav__link:focus,\n[data-md-color-accent=\"deep-orange\"] .md-nav__link:hover {\n  color: #ff6e40; }\n\n[data-md-color-accent=\"deep-orange\"] .md-search__scrollwrap::-webkit-scrollbar-thumb:hover {\n  background-color: #ff6e40; }\n\n[data-md-color-accent=\"deep-orange\"] .md-search-result__link[data-md-state=\"active\"], [data-md-color-accent=\"deep-orange\"] .md-search-result__link:hover {\n  background-color: rgba(255, 110, 64, 0.1); }\n\n[data-md-color-accent=\"deep-orange\"] .md-sidebar__scrollwrap::-webkit-scrollbar-thumb:hover {\n  background-color: #ff6e40; }\n\n[data-md-color-accent=\"deep-orange\"] .md-source-file:hover::before {\n  background-color: #ff6e40; }\n", ""]);

// exports


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Polyfill for creating CustomEvents on IE9/10/11

// code pulled from:
// https://github.com/d4tocchini/customevent-polyfill
// https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent#Polyfill

(function () {
  if (typeof window === 'undefined') {
    return;
  }

  try {
    var ce = new window.CustomEvent('test', { cancelable: true });
    ce.preventDefault();
    if (ce.defaultPrevented !== true) {
      // IE has problems with .preventDefault() on custom events
      // http://stackoverflow.com/questions/23349191
      throw new Error('Could not prevent default');
    }
  } catch (e) {
    var CustomEvent = function CustomEvent(event, params) {
      var evt, origPrevent;
      params = params || {
        bubbles: false,
        cancelable: false,
        detail: undefined
      };

      evt = document.createEvent('CustomEvent');
      evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
      origPrevent = evt.preventDefault;
      evt.preventDefault = function () {
        origPrevent.call(this);
        try {
          Object.defineProperty(this, 'defaultPrevented', {
            get: function get() {
              return true;
            }
          });
        } catch (e) {
          this.defaultPrevented = true;
        }
      };
      return evt;
    };

    CustomEvent.prototype = window.Event.prototype;
    window.CustomEvent = CustomEvent; // expose definition to window
  }
})();

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (!window.fetch) window.fetch = __webpack_require__(4).default || __webpack_require__(4);

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(setImmediate) {

exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _finally = __webpack_require__(24);

var _finally2 = _interopRequireDefault(_finally);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Store setTimeout reference so promise-polyfill will be unaffected by
// other code modifying setTimeout (like sinon.useFakeTimers())
var setTimeoutFunc = setTimeout;

function noop() {}

// Polyfill for Function.prototype.bind
function bind(fn, thisArg) {
  return function () {
    fn.apply(thisArg, arguments);
  };
}

/**
 * @constructor
 * @param {Function} fn
 */
function Promise(fn) {
  if (!(this instanceof Promise)) throw new TypeError('Promises must be constructed via new');
  if (typeof fn !== 'function') throw new TypeError('not a function');
  /** @type {!number} */
  this._state = 0;
  /** @type {!boolean} */
  this._handled = false;
  /** @type {Promise|undefined} */
  this._value = undefined;
  /** @type {!Array<!Function>} */
  this._deferreds = [];

  doResolve(fn, this);
}

function handle(self, deferred) {
  while (self._state === 3) {
    self = self._value;
  }
  if (self._state === 0) {
    self._deferreds.push(deferred);
    return;
  }
  self._handled = true;
  Promise._immediateFn(function () {
    var cb = self._state === 1 ? deferred.onFulfilled : deferred.onRejected;
    if (cb === null) {
      (self._state === 1 ? resolve : reject)(deferred.promise, self._value);
      return;
    }
    var ret;
    try {
      ret = cb(self._value);
    } catch (e) {
      reject(deferred.promise, e);
      return;
    }
    resolve(deferred.promise, ret);
  });
}

function resolve(self, newValue) {
  try {
    // Promise Resolution Procedure: https://github.com/promises-aplus/promises-spec#the-promise-resolution-procedure
    if (newValue === self) throw new TypeError('A promise cannot be resolved with itself.');
    if (newValue && ((typeof newValue === 'undefined' ? 'undefined' : _typeof(newValue)) === 'object' || typeof newValue === 'function')) {
      var then = newValue.then;
      if (newValue instanceof Promise) {
        self._state = 3;
        self._value = newValue;
        finale(self);
        return;
      } else if (typeof then === 'function') {
        doResolve(bind(then, newValue), self);
        return;
      }
    }
    self._state = 1;
    self._value = newValue;
    finale(self);
  } catch (e) {
    reject(self, e);
  }
}

function reject(self, newValue) {
  self._state = 2;
  self._value = newValue;
  finale(self);
}

function finale(self) {
  if (self._state === 2 && self._deferreds.length === 0) {
    Promise._immediateFn(function () {
      if (!self._handled) {
        Promise._unhandledRejectionFn(self._value);
      }
    });
  }

  for (var i = 0, len = self._deferreds.length; i < len; i++) {
    handle(self, self._deferreds[i]);
  }
  self._deferreds = null;
}

/**
 * @constructor
 */
function Handler(onFulfilled, onRejected, promise) {
  this.onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : null;
  this.onRejected = typeof onRejected === 'function' ? onRejected : null;
  this.promise = promise;
}

/**
 * Take a potentially misbehaving resolver function and make sure
 * onFulfilled and onRejected are only called once.
 *
 * Makes no guarantees about asynchrony.
 */
function doResolve(fn, self) {
  var done = false;
  try {
    fn(function (value) {
      if (done) return;
      done = true;
      resolve(self, value);
    }, function (reason) {
      if (done) return;
      done = true;
      reject(self, reason);
    });
  } catch (ex) {
    if (done) return;
    done = true;
    reject(self, ex);
  }
}

Promise.prototype['catch'] = function (onRejected) {
  return this.then(null, onRejected);
};

Promise.prototype.then = function (onFulfilled, onRejected) {
  // @ts-ignore
  var prom = new this.constructor(noop);

  handle(this, new Handler(onFulfilled, onRejected, prom));
  return prom;
};

Promise.prototype['finally'] = _finally2.default;

Promise.all = function (arr) {
  return new Promise(function (resolve, reject) {
    if (!arr || typeof arr.length === 'undefined') throw new TypeError('Promise.all accepts an array');
    var args = Array.prototype.slice.call(arr);
    if (args.length === 0) return resolve([]);
    var remaining = args.length;

    function res(i, val) {
      try {
        if (val && ((typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object' || typeof val === 'function')) {
          var then = val.then;
          if (typeof then === 'function') {
            then.call(val, function (val) {
              res(i, val);
            }, reject);
            return;
          }
        }
        args[i] = val;
        if (--remaining === 0) {
          resolve(args);
        }
      } catch (ex) {
        reject(ex);
      }
    }

    for (var i = 0; i < args.length; i++) {
      res(i, args[i]);
    }
  });
};

Promise.resolve = function (value) {
  if (value && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && value.constructor === Promise) {
    return value;
  }

  return new Promise(function (resolve) {
    resolve(value);
  });
};

Promise.reject = function (value) {
  return new Promise(function (resolve, reject) {
    reject(value);
  });
};

Promise.race = function (values) {
  return new Promise(function (resolve, reject) {
    for (var i = 0, len = values.length; i < len; i++) {
      values[i].then(resolve, reject);
    }
  });
};

// Use polyfill for setImmediate for performance gains
Promise._immediateFn = typeof setImmediate === 'function' && function (fn) {
  setImmediate(fn);
} || function (fn) {
  setTimeoutFunc(fn, 0);
};

Promise._unhandledRejectionFn = function _unhandledRejectionFn(err) {
  if (typeof console !== 'undefined' && console) {
    console.warn('Possible Unhandled Promise Rejection:', err); // eslint-disable-line no-console
  }
};

exports.default = Promise;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(21).setImmediate))

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var scope = typeof global !== "undefined" && global || typeof self !== "undefined" && self || window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function () {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function () {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout = exports.clearInterval = function (timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function () {};
Timeout.prototype.close = function () {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function (item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function (item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function (item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout) item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(22);
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = typeof self !== "undefined" && self.setImmediate || typeof global !== "undefined" && global.setImmediate || undefined && undefined.setImmediate;
exports.clearImmediate = typeof self !== "undefined" && self.clearImmediate || typeof global !== "undefined" && global.clearImmediate || undefined && undefined.clearImmediate;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, process) {

(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
        // Callback can either be a function or a string
        if (typeof callback !== "function") {
            callback = new Function("" + callback);
        }
        // Copy function arguments
        var args = new Array(arguments.length - 1);
        for (var i = 0; i < args.length; i++) {
            args[i] = arguments[i + 1];
        }
        // Store and register the task
        var task = { callback: callback, args: args };
        tasksByHandle[nextHandle] = task;
        registerImmediate(nextHandle);
        return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
            case 0:
                callback();
                break;
            case 1:
                callback(args[0]);
                break;
            case 2:
                callback(args[0], args[1]);
                break;
            case 3:
                callback(args[0], args[1], args[2]);
                break;
            default:
                callback.apply(undefined, args);
                break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function registerImmediate(handle) {
            process.nextTick(function () {
                runIfPresent(handle);
            });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function () {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function onGlobalMessage(event) {
            if (event.source === global && typeof event.data === "string" && event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function registerImmediate(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function (event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function registerImmediate(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function registerImmediate(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function registerImmediate(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();
    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();
    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();
    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();
    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
})(typeof self === "undefined" ? typeof global === "undefined" ? undefined : global : self);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1), __webpack_require__(23)))

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout() {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
})();
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while (len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
    return [];
};

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () {
    return '/';
};
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function () {
    return 0;
};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
/**
 * @this {Promise}
 */
function finallyConstructor(callback) {
  var constructor = this.constructor;
  return this.then(function (value) {
    return constructor.resolve(callback()).then(function () {
      return value;
    });
  }, function (reason) {
    return constructor.resolve(callback()).then(function () {
      return constructor.reject(reason);
    });
  });
}

exports.default = finallyConstructor;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*!
 * clipboard.js v2.0.1
 * https://zenorocha.github.io/clipboard.js
 * 
 * Licensed MIT © Zeno Rocha
 */
(function webpackUniversalModuleDefinition(root, factory) {
    if (( false ? 'undefined' : _typeof2(exports)) === 'object' && ( false ? 'undefined' : _typeof2(module)) === 'object') module.exports = factory();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else if ((typeof exports === 'undefined' ? 'undefined' : _typeof2(exports)) === 'object') exports["ClipboardJS"] = factory();else root["ClipboardJS"] = factory();
})(undefined, function () {
    return (/******/function (modules) {
            // webpackBootstrap
            /******/ // The module cache
            /******/var installedModules = {};
            /******/
            /******/ // The require function
            /******/function __webpack_require__(moduleId) {
                /******/
                /******/ // Check if module is in cache
                /******/if (installedModules[moduleId]) {
                    /******/return installedModules[moduleId].exports;
                    /******/
                }
                /******/ // Create a new module (and put it into the cache)
                /******/var module = installedModules[moduleId] = {
                    /******/i: moduleId,
                    /******/l: false,
                    /******/exports: {}
                    /******/ };
                /******/
                /******/ // Execute the module function
                /******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
                /******/
                /******/ // Flag the module as loaded
                /******/module.l = true;
                /******/
                /******/ // Return the exports of the module
                /******/return module.exports;
                /******/
            }
            /******/
            /******/
            /******/ // expose the modules object (__webpack_modules__)
            /******/__webpack_require__.m = modules;
            /******/
            /******/ // expose the module cache
            /******/__webpack_require__.c = installedModules;
            /******/
            /******/ // identity function for calling harmony imports with the correct context
            /******/__webpack_require__.i = function (value) {
                return value;
            };
            /******/
            /******/ // define getter function for harmony exports
            /******/__webpack_require__.d = function (exports, name, getter) {
                /******/if (!__webpack_require__.o(exports, name)) {
                    /******/Object.defineProperty(exports, name, {
                        /******/configurable: false,
                        /******/enumerable: true,
                        /******/get: getter
                        /******/ });
                    /******/
                }
                /******/
            };
            /******/
            /******/ // getDefaultExport function for compatibility with non-harmony modules
            /******/__webpack_require__.n = function (module) {
                /******/var getter = module && module.__esModule ?
                /******/function getDefault() {
                    return module['default'];
                } :
                /******/function getModuleExports() {
                    return module;
                };
                /******/__webpack_require__.d(getter, 'a', getter);
                /******/return getter;
                /******/
            };
            /******/
            /******/ // Object.prototype.hasOwnProperty.call
            /******/__webpack_require__.o = function (object, property) {
                return Object.prototype.hasOwnProperty.call(object, property);
            };
            /******/
            /******/ // __webpack_public_path__
            /******/__webpack_require__.p = "";
            /******/
            /******/ // Load entry module and return exports
            /******/return __webpack_require__(__webpack_require__.s = 3);
            /******/
        }(
        /************************************************************************/
        /******/[
        /* 0 */
        /***/function (module, exports, __webpack_require__) {

            var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
                if (true) {
                    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, __webpack_require__(7)], __WEBPACK_AMD_DEFINE_FACTORY__ = factory, __WEBPACK_AMD_DEFINE_RESULT__ = typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
                } else if (typeof exports !== "undefined") {
                    factory(module, require('select'));
                } else {
                    var mod = {
                        exports: {}
                    };
                    factory(mod, global.select);
                    global.clipboardAction = mod.exports;
                }
            })(this, function (module, _select) {
                'use strict';

                var _select2 = _interopRequireDefault(_select);

                function _interopRequireDefault(obj) {
                    return obj && obj.__esModule ? obj : {
                        default: obj
                    };
                }

                var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
                    return typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
                } : function (obj) {
                    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
                };

                function _classCallCheck(instance, Constructor) {
                    if (!(instance instanceof Constructor)) {
                        throw new TypeError("Cannot call a class as a function");
                    }
                }

                var _createClass = function () {
                    function defineProperties(target, props) {
                        for (var i = 0; i < props.length; i++) {
                            var descriptor = props[i];
                            descriptor.enumerable = descriptor.enumerable || false;
                            descriptor.configurable = true;
                            if ("value" in descriptor) descriptor.writable = true;
                            Object.defineProperty(target, descriptor.key, descriptor);
                        }
                    }

                    return function (Constructor, protoProps, staticProps) {
                        if (protoProps) defineProperties(Constructor.prototype, protoProps);
                        if (staticProps) defineProperties(Constructor, staticProps);
                        return Constructor;
                    };
                }();

                var ClipboardAction = function () {
                    /**
                     * @param {Object} options
                     */
                    function ClipboardAction(options) {
                        _classCallCheck(this, ClipboardAction);

                        this.resolveOptions(options);
                        this.initSelection();
                    }

                    /**
                     * Defines base properties passed from constructor.
                     * @param {Object} options
                     */

                    _createClass(ClipboardAction, [{
                        key: 'resolveOptions',
                        value: function resolveOptions() {
                            var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

                            this.action = options.action;
                            this.container = options.container;
                            this.emitter = options.emitter;
                            this.target = options.target;
                            this.text = options.text;
                            this.trigger = options.trigger;

                            this.selectedText = '';
                        }
                    }, {
                        key: 'initSelection',
                        value: function initSelection() {
                            if (this.text) {
                                this.selectFake();
                            } else if (this.target) {
                                this.selectTarget();
                            }
                        }
                    }, {
                        key: 'selectFake',
                        value: function selectFake() {
                            var _this = this;

                            var isRTL = document.documentElement.getAttribute('dir') == 'rtl';

                            this.removeFake();

                            this.fakeHandlerCallback = function () {
                                return _this.removeFake();
                            };
                            this.fakeHandler = this.container.addEventListener('click', this.fakeHandlerCallback) || true;

                            this.fakeElem = document.createElement('textarea');
                            // Prevent zooming on iOS
                            this.fakeElem.style.fontSize = '12pt';
                            // Reset box model
                            this.fakeElem.style.border = '0';
                            this.fakeElem.style.padding = '0';
                            this.fakeElem.style.margin = '0';
                            // Move element out of screen horizontally
                            this.fakeElem.style.position = 'absolute';
                            this.fakeElem.style[isRTL ? 'right' : 'left'] = '-9999px';
                            // Move element to the same position vertically
                            var yPosition = window.pageYOffset || document.documentElement.scrollTop;
                            this.fakeElem.style.top = yPosition + 'px';

                            this.fakeElem.setAttribute('readonly', '');
                            this.fakeElem.value = this.text;

                            this.container.appendChild(this.fakeElem);

                            this.selectedText = (0, _select2.default)(this.fakeElem);
                            this.copyText();
                        }
                    }, {
                        key: 'removeFake',
                        value: function removeFake() {
                            if (this.fakeHandler) {
                                this.container.removeEventListener('click', this.fakeHandlerCallback);
                                this.fakeHandler = null;
                                this.fakeHandlerCallback = null;
                            }

                            if (this.fakeElem) {
                                this.container.removeChild(this.fakeElem);
                                this.fakeElem = null;
                            }
                        }
                    }, {
                        key: 'selectTarget',
                        value: function selectTarget() {
                            this.selectedText = (0, _select2.default)(this.target);
                            this.copyText();
                        }
                    }, {
                        key: 'copyText',
                        value: function copyText() {
                            var succeeded = void 0;

                            try {
                                succeeded = document.execCommand(this.action);
                            } catch (err) {
                                succeeded = false;
                            }

                            this.handleResult(succeeded);
                        }
                    }, {
                        key: 'handleResult',
                        value: function handleResult(succeeded) {
                            this.emitter.emit(succeeded ? 'success' : 'error', {
                                action: this.action,
                                text: this.selectedText,
                                trigger: this.trigger,
                                clearSelection: this.clearSelection.bind(this)
                            });
                        }
                    }, {
                        key: 'clearSelection',
                        value: function clearSelection() {
                            if (this.trigger) {
                                this.trigger.focus();
                            }

                            window.getSelection().removeAllRanges();
                        }
                    }, {
                        key: 'destroy',
                        value: function destroy() {
                            this.removeFake();
                        }
                    }, {
                        key: 'action',
                        set: function set() {
                            var action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'copy';

                            this._action = action;

                            if (this._action !== 'copy' && this._action !== 'cut') {
                                throw new Error('Invalid "action" value, use either "copy" or "cut"');
                            }
                        },
                        get: function get() {
                            return this._action;
                        }
                    }, {
                        key: 'target',
                        set: function set(target) {
                            if (target !== undefined) {
                                if (target && (typeof target === 'undefined' ? 'undefined' : _typeof(target)) === 'object' && target.nodeType === 1) {
                                    if (this.action === 'copy' && target.hasAttribute('disabled')) {
                                        throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                                    }

                                    if (this.action === 'cut' && (target.hasAttribute('readonly') || target.hasAttribute('disabled'))) {
                                        throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');
                                    }

                                    this._target = target;
                                } else {
                                    throw new Error('Invalid "target" value, use a valid Element');
                                }
                            }
                        },
                        get: function get() {
                            return this._target;
                        }
                    }]);

                    return ClipboardAction;
                }();

                module.exports = ClipboardAction;
            });

            /***/
        },
        /* 1 */
        /***/function (module, exports, __webpack_require__) {

            var is = __webpack_require__(6);
            var delegate = __webpack_require__(5);

            /**
             * Validates all params and calls the right
             * listener function based on its target type.
             *
             * @param {String|HTMLElement|HTMLCollection|NodeList} target
             * @param {String} type
             * @param {Function} callback
             * @return {Object}
             */
            function listen(target, type, callback) {
                if (!target && !type && !callback) {
                    throw new Error('Missing required arguments');
                }

                if (!is.string(type)) {
                    throw new TypeError('Second argument must be a String');
                }

                if (!is.fn(callback)) {
                    throw new TypeError('Third argument must be a Function');
                }

                if (is.node(target)) {
                    return listenNode(target, type, callback);
                } else if (is.nodeList(target)) {
                    return listenNodeList(target, type, callback);
                } else if (is.string(target)) {
                    return listenSelector(target, type, callback);
                } else {
                    throw new TypeError('First argument must be a String, HTMLElement, HTMLCollection, or NodeList');
                }
            }

            /**
             * Adds an event listener to a HTML element
             * and returns a remove listener function.
             *
             * @param {HTMLElement} node
             * @param {String} type
             * @param {Function} callback
             * @return {Object}
             */
            function listenNode(node, type, callback) {
                node.addEventListener(type, callback);

                return {
                    destroy: function destroy() {
                        node.removeEventListener(type, callback);
                    }
                };
            }

            /**
             * Add an event listener to a list of HTML elements
             * and returns a remove listener function.
             *
             * @param {NodeList|HTMLCollection} nodeList
             * @param {String} type
             * @param {Function} callback
             * @return {Object}
             */
            function listenNodeList(nodeList, type, callback) {
                Array.prototype.forEach.call(nodeList, function (node) {
                    node.addEventListener(type, callback);
                });

                return {
                    destroy: function destroy() {
                        Array.prototype.forEach.call(nodeList, function (node) {
                            node.removeEventListener(type, callback);
                        });
                    }
                };
            }

            /**
             * Add an event listener to a selector
             * and returns a remove listener function.
             *
             * @param {String} selector
             * @param {String} type
             * @param {Function} callback
             * @return {Object}
             */
            function listenSelector(selector, type, callback) {
                return delegate(document.body, selector, type, callback);
            }

            module.exports = listen;

            /***/
        },
        /* 2 */
        /***/function (module, exports) {

            function E() {
                // Keep this empty so it's easier to inherit from
                // (via https://github.com/lipsmack from https://github.com/scottcorgan/tiny-emitter/issues/3)
            }

            E.prototype = {
                on: function on(name, callback, ctx) {
                    var e = this.e || (this.e = {});

                    (e[name] || (e[name] = [])).push({
                        fn: callback,
                        ctx: ctx
                    });

                    return this;
                },

                once: function once(name, callback, ctx) {
                    var self = this;
                    function listener() {
                        self.off(name, listener);
                        callback.apply(ctx, arguments);
                    };

                    listener._ = callback;
                    return this.on(name, listener, ctx);
                },

                emit: function emit(name) {
                    var data = [].slice.call(arguments, 1);
                    var evtArr = ((this.e || (this.e = {}))[name] || []).slice();
                    var i = 0;
                    var len = evtArr.length;

                    for (i; i < len; i++) {
                        evtArr[i].fn.apply(evtArr[i].ctx, data);
                    }

                    return this;
                },

                off: function off(name, callback) {
                    var e = this.e || (this.e = {});
                    var evts = e[name];
                    var liveEvents = [];

                    if (evts && callback) {
                        for (var i = 0, len = evts.length; i < len; i++) {
                            if (evts[i].fn !== callback && evts[i].fn._ !== callback) liveEvents.push(evts[i]);
                        }
                    }

                    // Remove event from queue to prevent memory leak
                    // Suggested by https://github.com/lazd
                    // Ref: https://github.com/scottcorgan/tiny-emitter/commit/c6ebfaa9bc973b33d110a84a307742b7cf94c953#commitcomment-5024910

                    liveEvents.length ? e[name] = liveEvents : delete e[name];

                    return this;
                }
            };

            module.exports = E;

            /***/
        },
        /* 3 */
        /***/function (module, exports, __webpack_require__) {

            var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
                if (true) {
                    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, __webpack_require__(0), __webpack_require__(2), __webpack_require__(1)], __WEBPACK_AMD_DEFINE_FACTORY__ = factory, __WEBPACK_AMD_DEFINE_RESULT__ = typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
                } else if (typeof exports !== "undefined") {
                    factory(module, require('./clipboard-action'), require('tiny-emitter'), require('good-listener'));
                } else {
                    var mod = {
                        exports: {}
                    };
                    factory(mod, global.clipboardAction, global.tinyEmitter, global.goodListener);
                    global.clipboard = mod.exports;
                }
            })(this, function (module, _clipboardAction, _tinyEmitter, _goodListener) {
                'use strict';

                var _clipboardAction2 = _interopRequireDefault(_clipboardAction);

                var _tinyEmitter2 = _interopRequireDefault(_tinyEmitter);

                var _goodListener2 = _interopRequireDefault(_goodListener);

                function _interopRequireDefault(obj) {
                    return obj && obj.__esModule ? obj : {
                        default: obj
                    };
                }

                var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
                    return typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
                } : function (obj) {
                    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
                };

                function _classCallCheck(instance, Constructor) {
                    if (!(instance instanceof Constructor)) {
                        throw new TypeError("Cannot call a class as a function");
                    }
                }

                var _createClass = function () {
                    function defineProperties(target, props) {
                        for (var i = 0; i < props.length; i++) {
                            var descriptor = props[i];
                            descriptor.enumerable = descriptor.enumerable || false;
                            descriptor.configurable = true;
                            if ("value" in descriptor) descriptor.writable = true;
                            Object.defineProperty(target, descriptor.key, descriptor);
                        }
                    }

                    return function (Constructor, protoProps, staticProps) {
                        if (protoProps) defineProperties(Constructor.prototype, protoProps);
                        if (staticProps) defineProperties(Constructor, staticProps);
                        return Constructor;
                    };
                }();

                function _possibleConstructorReturn(self, call) {
                    if (!self) {
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    }

                    return call && ((typeof call === 'undefined' ? 'undefined' : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
                }

                function _inherits(subClass, superClass) {
                    if (typeof superClass !== "function" && superClass !== null) {
                        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof2(superClass)));
                    }

                    subClass.prototype = Object.create(superClass && superClass.prototype, {
                        constructor: {
                            value: subClass,
                            enumerable: false,
                            writable: true,
                            configurable: true
                        }
                    });
                    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
                }

                var Clipboard = function (_Emitter) {
                    _inherits(Clipboard, _Emitter);

                    /**
                     * @param {String|HTMLElement|HTMLCollection|NodeList} trigger
                     * @param {Object} options
                     */
                    function Clipboard(trigger, options) {
                        _classCallCheck(this, Clipboard);

                        var _this = _possibleConstructorReturn(this, (Clipboard.__proto__ || Object.getPrototypeOf(Clipboard)).call(this));

                        _this.resolveOptions(options);
                        _this.listenClick(trigger);
                        return _this;
                    }

                    /**
                     * Defines if attributes would be resolved using internal setter functions
                     * or custom functions that were passed in the constructor.
                     * @param {Object} options
                     */

                    _createClass(Clipboard, [{
                        key: 'resolveOptions',
                        value: function resolveOptions() {
                            var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

                            this.action = typeof options.action === 'function' ? options.action : this.defaultAction;
                            this.target = typeof options.target === 'function' ? options.target : this.defaultTarget;
                            this.text = typeof options.text === 'function' ? options.text : this.defaultText;
                            this.container = _typeof(options.container) === 'object' ? options.container : document.body;
                        }
                    }, {
                        key: 'listenClick',
                        value: function listenClick(trigger) {
                            var _this2 = this;

                            this.listener = (0, _goodListener2.default)(trigger, 'click', function (e) {
                                return _this2.onClick(e);
                            });
                        }
                    }, {
                        key: 'onClick',
                        value: function onClick(e) {
                            var trigger = e.delegateTarget || e.currentTarget;

                            if (this.clipboardAction) {
                                this.clipboardAction = null;
                            }

                            this.clipboardAction = new _clipboardAction2.default({
                                action: this.action(trigger),
                                target: this.target(trigger),
                                text: this.text(trigger),
                                container: this.container,
                                trigger: trigger,
                                emitter: this
                            });
                        }
                    }, {
                        key: 'defaultAction',
                        value: function defaultAction(trigger) {
                            return getAttributeValue('action', trigger);
                        }
                    }, {
                        key: 'defaultTarget',
                        value: function defaultTarget(trigger) {
                            var selector = getAttributeValue('target', trigger);

                            if (selector) {
                                return document.querySelector(selector);
                            }
                        }
                    }, {
                        key: 'defaultText',
                        value: function defaultText(trigger) {
                            return getAttributeValue('text', trigger);
                        }
                    }, {
                        key: 'destroy',
                        value: function destroy() {
                            this.listener.destroy();

                            if (this.clipboardAction) {
                                this.clipboardAction.destroy();
                                this.clipboardAction = null;
                            }
                        }
                    }], [{
                        key: 'isSupported',
                        value: function isSupported() {
                            var action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ['copy', 'cut'];

                            var actions = typeof action === 'string' ? [action] : action;
                            var support = !!document.queryCommandSupported;

                            actions.forEach(function (action) {
                                support = support && !!document.queryCommandSupported(action);
                            });

                            return support;
                        }
                    }]);

                    return Clipboard;
                }(_tinyEmitter2.default);

                /**
                 * Helper function to retrieve attribute value.
                 * @param {String} suffix
                 * @param {Element} element
                 */
                function getAttributeValue(suffix, element) {
                    var attribute = 'data-clipboard-' + suffix;

                    if (!element.hasAttribute(attribute)) {
                        return;
                    }

                    return element.getAttribute(attribute);
                }

                module.exports = Clipboard;
            });

            /***/
        },
        /* 4 */
        /***/function (module, exports) {

            var DOCUMENT_NODE_TYPE = 9;

            /**
             * A polyfill for Element.matches()
             */
            if (typeof Element !== 'undefined' && !Element.prototype.matches) {
                var proto = Element.prototype;

                proto.matches = proto.matchesSelector || proto.mozMatchesSelector || proto.msMatchesSelector || proto.oMatchesSelector || proto.webkitMatchesSelector;
            }

            /**
             * Finds the closest parent that matches a selector.
             *
             * @param {Element} element
             * @param {String} selector
             * @return {Function}
             */
            function closest(element, selector) {
                while (element && element.nodeType !== DOCUMENT_NODE_TYPE) {
                    if (typeof element.matches === 'function' && element.matches(selector)) {
                        return element;
                    }
                    element = element.parentNode;
                }
            }

            module.exports = closest;

            /***/
        },
        /* 5 */
        /***/function (module, exports, __webpack_require__) {

            var closest = __webpack_require__(4);

            /**
             * Delegates event to a selector.
             *
             * @param {Element} element
             * @param {String} selector
             * @param {String} type
             * @param {Function} callback
             * @param {Boolean} useCapture
             * @return {Object}
             */
            function _delegate(element, selector, type, callback, useCapture) {
                var listenerFn = listener.apply(this, arguments);

                element.addEventListener(type, listenerFn, useCapture);

                return {
                    destroy: function destroy() {
                        element.removeEventListener(type, listenerFn, useCapture);
                    }
                };
            }

            /**
             * Delegates event to a selector.
             *
             * @param {Element|String|Array} [elements]
             * @param {String} selector
             * @param {String} type
             * @param {Function} callback
             * @param {Boolean} useCapture
             * @return {Object}
             */
            function delegate(elements, selector, type, callback, useCapture) {
                // Handle the regular Element usage
                if (typeof elements.addEventListener === 'function') {
                    return _delegate.apply(null, arguments);
                }

                // Handle Element-less usage, it defaults to global delegation
                if (typeof type === 'function') {
                    // Use `document` as the first parameter, then apply arguments
                    // This is a short way to .unshift `arguments` without running into deoptimizations
                    return _delegate.bind(null, document).apply(null, arguments);
                }

                // Handle Selector-based usage
                if (typeof elements === 'string') {
                    elements = document.querySelectorAll(elements);
                }

                // Handle Array-like based usage
                return Array.prototype.map.call(elements, function (element) {
                    return _delegate(element, selector, type, callback, useCapture);
                });
            }

            /**
             * Finds closest match and invokes callback.
             *
             * @param {Element} element
             * @param {String} selector
             * @param {String} type
             * @param {Function} callback
             * @return {Function}
             */
            function listener(element, selector, type, callback) {
                return function (e) {
                    e.delegateTarget = closest(e.target, selector);

                    if (e.delegateTarget) {
                        callback.call(element, e);
                    }
                };
            }

            module.exports = delegate;

            /***/
        },
        /* 6 */
        /***/function (module, exports) {

            /**
             * Check if argument is a HTML element.
             *
             * @param {Object} value
             * @return {Boolean}
             */
            exports.node = function (value) {
                return value !== undefined && value instanceof HTMLElement && value.nodeType === 1;
            };

            /**
             * Check if argument is a list of HTML elements.
             *
             * @param {Object} value
             * @return {Boolean}
             */
            exports.nodeList = function (value) {
                var type = Object.prototype.toString.call(value);

                return value !== undefined && (type === '[object NodeList]' || type === '[object HTMLCollection]') && 'length' in value && (value.length === 0 || exports.node(value[0]));
            };

            /**
             * Check if argument is a string.
             *
             * @param {Object} value
             * @return {Boolean}
             */
            exports.string = function (value) {
                return typeof value === 'string' || value instanceof String;
            };

            /**
             * Check if argument is a function.
             *
             * @param {Object} value
             * @return {Boolean}
             */
            exports.fn = function (value) {
                var type = Object.prototype.toString.call(value);

                return type === '[object Function]';
            };

            /***/
        },
        /* 7 */
        /***/function (module, exports) {

            function select(element) {
                var selectedText;

                if (element.nodeName === 'SELECT') {
                    element.focus();

                    selectedText = element.value;
                } else if (element.nodeName === 'INPUT' || element.nodeName === 'TEXTAREA') {
                    var isReadOnly = element.hasAttribute('readonly');

                    if (!isReadOnly) {
                        element.setAttribute('readonly', '');
                    }

                    element.select();
                    element.setSelectionRange(0, element.value.length);

                    if (!isReadOnly) {
                        element.removeAttribute('readonly');
                    }

                    selectedText = element.value;
                } else {
                    if (element.hasAttribute('contenteditable')) {
                        element.focus();
                    }

                    var selection = window.getSelection();
                    var range = document.createRange();

                    range.selectNodeContents(element);
                    selection.removeAllRanges();
                    selection.addRange(range);

                    selectedText = selection.toString();
                }

                return selectedText;
            }

            module.exports = select;

            /***/
        }]
        /******/)
    );
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(26)(module)))

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function () {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function get() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function get() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

;(function () {
	'use strict';

	/**
  * @preserve FastClick: polyfill to remove click delays on browsers with touch UIs.
  *
  * @codingstandard ftlabs-jsv2
  * @copyright The Financial Times Limited [All Rights Reserved]
  * @license MIT License (see LICENSE.txt)
  */

	/*jslint browser:true, node:true*/
	/*global define, Event, Node*/

	/**
  * Instantiate fast-clicking listeners on the specified layer.
  *
  * @constructor
  * @param {Element} layer The layer to listen on
  * @param {Object} [options={}] The options to override the defaults
  */

	function FastClick(layer, options) {
		var oldOnClick;

		options = options || {};

		/**
   * Whether a click is currently being tracked.
   *
   * @type boolean
   */
		this.trackingClick = false;

		/**
   * Timestamp for when click tracking started.
   *
   * @type number
   */
		this.trackingClickStart = 0;

		/**
   * The element being tracked for a click.
   *
   * @type EventTarget
   */
		this.targetElement = null;

		/**
   * X-coordinate of touch start event.
   *
   * @type number
   */
		this.touchStartX = 0;

		/**
   * Y-coordinate of touch start event.
   *
   * @type number
   */
		this.touchStartY = 0;

		/**
   * ID of the last touch, retrieved from Touch.identifier.
   *
   * @type number
   */
		this.lastTouchIdentifier = 0;

		/**
   * Touchmove boundary, beyond which a click will be cancelled.
   *
   * @type number
   */
		this.touchBoundary = options.touchBoundary || 10;

		/**
   * The FastClick layer.
   *
   * @type Element
   */
		this.layer = layer;

		/**
   * The minimum time between tap(touchstart and touchend) events
   *
   * @type number
   */
		this.tapDelay = options.tapDelay || 200;

		/**
   * The maximum time for a tap
   *
   * @type number
   */
		this.tapTimeout = options.tapTimeout || 700;

		if (FastClick.notNeeded(layer)) {
			return;
		}

		// Some old versions of Android don't have Function.prototype.bind
		function bind(method, context) {
			return function () {
				return method.apply(context, arguments);
			};
		}

		var methods = ['onMouse', 'onClick', 'onTouchStart', 'onTouchMove', 'onTouchEnd', 'onTouchCancel'];
		var context = this;
		for (var i = 0, l = methods.length; i < l; i++) {
			context[methods[i]] = bind(context[methods[i]], context);
		}

		// Set up event handlers as required
		if (deviceIsAndroid) {
			layer.addEventListener('mouseover', this.onMouse, true);
			layer.addEventListener('mousedown', this.onMouse, true);
			layer.addEventListener('mouseup', this.onMouse, true);
		}

		layer.addEventListener('click', this.onClick, true);
		layer.addEventListener('touchstart', this.onTouchStart, false);
		layer.addEventListener('touchmove', this.onTouchMove, false);
		layer.addEventListener('touchend', this.onTouchEnd, false);
		layer.addEventListener('touchcancel', this.onTouchCancel, false);

		// Hack is required for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)
		// which is how FastClick normally stops click events bubbling to callbacks registered on the FastClick
		// layer when they are cancelled.
		if (!Event.prototype.stopImmediatePropagation) {
			layer.removeEventListener = function (type, callback, capture) {
				var rmv = Node.prototype.removeEventListener;
				if (type === 'click') {
					rmv.call(layer, type, callback.hijacked || callback, capture);
				} else {
					rmv.call(layer, type, callback, capture);
				}
			};

			layer.addEventListener = function (type, callback, capture) {
				var adv = Node.prototype.addEventListener;
				if (type === 'click') {
					adv.call(layer, type, callback.hijacked || (callback.hijacked = function (event) {
						if (!event.propagationStopped) {
							callback(event);
						}
					}), capture);
				} else {
					adv.call(layer, type, callback, capture);
				}
			};
		}

		// If a handler is already declared in the element's onclick attribute, it will be fired before
		// FastClick's onClick handler. Fix this by pulling out the user-defined handler function and
		// adding it as listener.
		if (typeof layer.onclick === 'function') {

			// Android browser on at least 3.2 requires a new reference to the function in layer.onclick
			// - the old one won't work if passed to addEventListener directly.
			oldOnClick = layer.onclick;
			layer.addEventListener('click', function (event) {
				oldOnClick(event);
			}, false);
			layer.onclick = null;
		}
	}

	/**
 * Windows Phone 8.1 fakes user agent string to look like Android and iPhone.
 *
 * @type boolean
 */
	var deviceIsWindowsPhone = navigator.userAgent.indexOf("Windows Phone") >= 0;

	/**
  * Android requires exceptions.
  *
  * @type boolean
  */
	var deviceIsAndroid = navigator.userAgent.indexOf('Android') > 0 && !deviceIsWindowsPhone;

	/**
  * iOS requires exceptions.
  *
  * @type boolean
  */
	var deviceIsIOS = /iP(ad|hone|od)/.test(navigator.userAgent) && !deviceIsWindowsPhone;

	/**
  * iOS 4 requires an exception for select elements.
  *
  * @type boolean
  */
	var deviceIsIOS4 = deviceIsIOS && /OS 4_\d(_\d)?/.test(navigator.userAgent);

	/**
  * iOS 6.0-7.* requires the target element to be manually derived
  *
  * @type boolean
  */
	var deviceIsIOSWithBadTarget = deviceIsIOS && /OS [6-7]_\d/.test(navigator.userAgent);

	/**
  * BlackBerry requires exceptions.
  *
  * @type boolean
  */
	var deviceIsBlackBerry10 = navigator.userAgent.indexOf('BB10') > 0;

	/**
  * Determine whether a given element requires a native click.
  *
  * @param {EventTarget|Element} target Target DOM element
  * @returns {boolean} Returns true if the element needs a native click
  */
	FastClick.prototype.needsClick = function (target) {
		switch (target.nodeName.toLowerCase()) {

			// Don't send a synthetic click to disabled inputs (issue #62)
			case 'button':
			case 'select':
			case 'textarea':
				if (target.disabled) {
					return true;
				}

				break;
			case 'input':

				// File inputs need real clicks on iOS 6 due to a browser bug (issue #68)
				if (deviceIsIOS && target.type === 'file' || target.disabled) {
					return true;
				}

				break;
			case 'label':
			case 'iframe': // iOS8 homescreen apps can prevent events bubbling into frames
			case 'video':
				return true;
		}

		return (/\bneedsclick\b/.test(target.className)
		);
	};

	/**
  * Determine whether a given element requires a call to focus to simulate click into element.
  *
  * @param {EventTarget|Element} target Target DOM element
  * @returns {boolean} Returns true if the element requires a call to focus to simulate native click.
  */
	FastClick.prototype.needsFocus = function (target) {
		switch (target.nodeName.toLowerCase()) {
			case 'textarea':
				return true;
			case 'select':
				return !deviceIsAndroid;
			case 'input':
				switch (target.type) {
					case 'button':
					case 'checkbox':
					case 'file':
					case 'image':
					case 'radio':
					case 'submit':
						return false;
				}

				// No point in attempting to focus disabled inputs
				return !target.disabled && !target.readOnly;
			default:
				return (/\bneedsfocus\b/.test(target.className)
				);
		}
	};

	/**
  * Send a click event to the specified element.
  *
  * @param {EventTarget|Element} targetElement
  * @param {Event} event
  */
	FastClick.prototype.sendClick = function (targetElement, event) {
		var clickEvent, touch;

		// On some Android devices activeElement needs to be blurred otherwise the synthetic click will have no effect (#24)
		if (document.activeElement && document.activeElement !== targetElement) {
			document.activeElement.blur();
		}

		touch = event.changedTouches[0];

		// Synthesise a click event, with an extra attribute so it can be tracked
		clickEvent = document.createEvent('MouseEvents');
		clickEvent.initMouseEvent(this.determineEventType(targetElement), true, true, window, 1, touch.screenX, touch.screenY, touch.clientX, touch.clientY, false, false, false, false, 0, null);
		clickEvent.forwardedTouchEvent = true;
		targetElement.dispatchEvent(clickEvent);
	};

	FastClick.prototype.determineEventType = function (targetElement) {

		//Issue #159: Android Chrome Select Box does not open with a synthetic click event
		if (deviceIsAndroid && targetElement.tagName.toLowerCase() === 'select') {
			return 'mousedown';
		}

		return 'click';
	};

	/**
  * @param {EventTarget|Element} targetElement
  */
	FastClick.prototype.focus = function (targetElement) {
		var length;

		// Issue #160: on iOS 7, some input elements (e.g. date datetime month) throw a vague TypeError on setSelectionRange. These elements don't have an integer value for the selectionStart and selectionEnd properties, but unfortunately that can't be used for detection because accessing the properties also throws a TypeError. Just check the type instead. Filed as Apple bug #15122724.
		if (deviceIsIOS && targetElement.setSelectionRange && targetElement.type.indexOf('date') !== 0 && targetElement.type !== 'time' && targetElement.type !== 'month') {
			length = targetElement.value.length;
			targetElement.setSelectionRange(length, length);
		} else {
			targetElement.focus();
		}
	};

	/**
  * Check whether the given target element is a child of a scrollable layer and if so, set a flag on it.
  *
  * @param {EventTarget|Element} targetElement
  */
	FastClick.prototype.updateScrollParent = function (targetElement) {
		var scrollParent, parentElement;

		scrollParent = targetElement.fastClickScrollParent;

		// Attempt to discover whether the target element is contained within a scrollable layer. Re-check if the
		// target element was moved to another parent.
		if (!scrollParent || !scrollParent.contains(targetElement)) {
			parentElement = targetElement;
			do {
				if (parentElement.scrollHeight > parentElement.offsetHeight) {
					scrollParent = parentElement;
					targetElement.fastClickScrollParent = parentElement;
					break;
				}

				parentElement = parentElement.parentElement;
			} while (parentElement);
		}

		// Always update the scroll top tracker if possible.
		if (scrollParent) {
			scrollParent.fastClickLastScrollTop = scrollParent.scrollTop;
		}
	};

	/**
  * @param {EventTarget} targetElement
  * @returns {Element|EventTarget}
  */
	FastClick.prototype.getTargetElementFromEventTarget = function (eventTarget) {

		// On some older browsers (notably Safari on iOS 4.1 - see issue #56) the event target may be a text node.
		if (eventTarget.nodeType === Node.TEXT_NODE) {
			return eventTarget.parentNode;
		}

		return eventTarget;
	};

	/**
  * On touch start, record the position and scroll offset.
  *
  * @param {Event} event
  * @returns {boolean}
  */
	FastClick.prototype.onTouchStart = function (event) {
		var targetElement, touch, selection;

		// Ignore multiple touches, otherwise pinch-to-zoom is prevented if both fingers are on the FastClick element (issue #111).
		if (event.targetTouches.length > 1) {
			return true;
		}

		targetElement = this.getTargetElementFromEventTarget(event.target);
		touch = event.targetTouches[0];

		if (deviceIsIOS) {

			// Only trusted events will deselect text on iOS (issue #49)
			selection = window.getSelection();
			if (selection.rangeCount && !selection.isCollapsed) {
				return true;
			}

			if (!deviceIsIOS4) {

				// Weird things happen on iOS when an alert or confirm dialog is opened from a click event callback (issue #23):
				// when the user next taps anywhere else on the page, new touchstart and touchend events are dispatched
				// with the same identifier as the touch event that previously triggered the click that triggered the alert.
				// Sadly, there is an issue on iOS 4 that causes some normal touch events to have the same identifier as an
				// immediately preceeding touch event (issue #52), so this fix is unavailable on that platform.
				// Issue 120: touch.identifier is 0 when Chrome dev tools 'Emulate touch events' is set with an iOS device UA string,
				// which causes all touch events to be ignored. As this block only applies to iOS, and iOS identifiers are always long,
				// random integers, it's safe to to continue if the identifier is 0 here.
				if (touch.identifier && touch.identifier === this.lastTouchIdentifier) {
					event.preventDefault();
					return false;
				}

				this.lastTouchIdentifier = touch.identifier;

				// If the target element is a child of a scrollable layer (using -webkit-overflow-scrolling: touch) and:
				// 1) the user does a fling scroll on the scrollable layer
				// 2) the user stops the fling scroll with another tap
				// then the event.target of the last 'touchend' event will be the element that was under the user's finger
				// when the fling scroll was started, causing FastClick to send a click event to that layer - unless a check
				// is made to ensure that a parent layer was not scrolled before sending a synthetic click (issue #42).
				this.updateScrollParent(targetElement);
			}
		}

		this.trackingClick = true;
		this.trackingClickStart = event.timeStamp;
		this.targetElement = targetElement;

		this.touchStartX = touch.pageX;
		this.touchStartY = touch.pageY;

		// Prevent phantom clicks on fast double-tap (issue #36)
		if (event.timeStamp - this.lastClickTime < this.tapDelay) {
			event.preventDefault();
		}

		return true;
	};

	/**
  * Based on a touchmove event object, check whether the touch has moved past a boundary since it started.
  *
  * @param {Event} event
  * @returns {boolean}
  */
	FastClick.prototype.touchHasMoved = function (event) {
		var touch = event.changedTouches[0],
		    boundary = this.touchBoundary;

		if (Math.abs(touch.pageX - this.touchStartX) > boundary || Math.abs(touch.pageY - this.touchStartY) > boundary) {
			return true;
		}

		return false;
	};

	/**
  * Update the last position.
  *
  * @param {Event} event
  * @returns {boolean}
  */
	FastClick.prototype.onTouchMove = function (event) {
		if (!this.trackingClick) {
			return true;
		}

		// If the touch has moved, cancel the click tracking
		if (this.targetElement !== this.getTargetElementFromEventTarget(event.target) || this.touchHasMoved(event)) {
			this.trackingClick = false;
			this.targetElement = null;
		}

		return true;
	};

	/**
  * Attempt to find the labelled control for the given label element.
  *
  * @param {EventTarget|HTMLLabelElement} labelElement
  * @returns {Element|null}
  */
	FastClick.prototype.findControl = function (labelElement) {

		// Fast path for newer browsers supporting the HTML5 control attribute
		if (labelElement.control !== undefined) {
			return labelElement.control;
		}

		// All browsers under test that support touch events also support the HTML5 htmlFor attribute
		if (labelElement.htmlFor) {
			return document.getElementById(labelElement.htmlFor);
		}

		// If no for attribute exists, attempt to retrieve the first labellable descendant element
		// the list of which is defined here: http://www.w3.org/TR/html5/forms.html#category-label
		return labelElement.querySelector('button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea');
	};

	/**
  * On touch end, determine whether to send a click event at once.
  *
  * @param {Event} event
  * @returns {boolean}
  */
	FastClick.prototype.onTouchEnd = function (event) {
		var forElement,
		    trackingClickStart,
		    targetTagName,
		    scrollParent,
		    touch,
		    targetElement = this.targetElement;

		if (!this.trackingClick) {
			return true;
		}

		// Prevent phantom clicks on fast double-tap (issue #36)
		if (event.timeStamp - this.lastClickTime < this.tapDelay) {
			this.cancelNextClick = true;
			return true;
		}

		if (event.timeStamp - this.trackingClickStart > this.tapTimeout) {
			return true;
		}

		// Reset to prevent wrong click cancel on input (issue #156).
		this.cancelNextClick = false;

		this.lastClickTime = event.timeStamp;

		trackingClickStart = this.trackingClickStart;
		this.trackingClick = false;
		this.trackingClickStart = 0;

		// On some iOS devices, the targetElement supplied with the event is invalid if the layer
		// is performing a transition or scroll, and has to be re-detected manually. Note that
		// for this to function correctly, it must be called *after* the event target is checked!
		// See issue #57; also filed as rdar://13048589 .
		if (deviceIsIOSWithBadTarget) {
			touch = event.changedTouches[0];

			// In certain cases arguments of elementFromPoint can be negative, so prevent setting targetElement to null
			targetElement = document.elementFromPoint(touch.pageX - window.pageXOffset, touch.pageY - window.pageYOffset) || targetElement;
			targetElement.fastClickScrollParent = this.targetElement.fastClickScrollParent;
		}

		targetTagName = targetElement.tagName.toLowerCase();
		if (targetTagName === 'label') {
			forElement = this.findControl(targetElement);
			if (forElement) {
				this.focus(targetElement);
				if (deviceIsAndroid) {
					return false;
				}

				targetElement = forElement;
			}
		} else if (this.needsFocus(targetElement)) {

			// Case 1: If the touch started a while ago (best guess is 100ms based on tests for issue #36) then focus will be triggered anyway. Return early and unset the target element reference so that the subsequent click will be allowed through.
			// Case 2: Without this exception for input elements tapped when the document is contained in an iframe, then any inputted text won't be visible even though the value attribute is updated as the user types (issue #37).
			if (event.timeStamp - trackingClickStart > 100 || deviceIsIOS && window.top !== window && targetTagName === 'input') {
				this.targetElement = null;
				return false;
			}

			this.focus(targetElement);
			this.sendClick(targetElement, event);

			// Select elements need the event to go through on iOS 4, otherwise the selector menu won't open.
			// Also this breaks opening selects when VoiceOver is active on iOS6, iOS7 (and possibly others)
			if (!deviceIsIOS || targetTagName !== 'select') {
				this.targetElement = null;
				event.preventDefault();
			}

			return false;
		}

		if (deviceIsIOS && !deviceIsIOS4) {

			// Don't send a synthetic click event if the target element is contained within a parent layer that was scrolled
			// and this tap is being used to stop the scrolling (usually initiated by a fling - issue #42).
			scrollParent = targetElement.fastClickScrollParent;
			if (scrollParent && scrollParent.fastClickLastScrollTop !== scrollParent.scrollTop) {
				return true;
			}
		}

		// Prevent the actual click from going though - unless the target node is marked as requiring
		// real clicks or if it is in the whitelist in which case only non-programmatic clicks are permitted.
		if (!this.needsClick(targetElement)) {
			event.preventDefault();
			this.sendClick(targetElement, event);
		}

		return false;
	};

	/**
  * On touch cancel, stop tracking the click.
  *
  * @returns {void}
  */
	FastClick.prototype.onTouchCancel = function () {
		this.trackingClick = false;
		this.targetElement = null;
	};

	/**
  * Determine mouse events which should be permitted.
  *
  * @param {Event} event
  * @returns {boolean}
  */
	FastClick.prototype.onMouse = function (event) {

		// If a target element was never set (because a touch event was never fired) allow the event
		if (!this.targetElement) {
			return true;
		}

		if (event.forwardedTouchEvent) {
			return true;
		}

		// Programmatically generated events targeting a specific element should be permitted
		if (!event.cancelable) {
			return true;
		}

		// Derive and check the target element to see whether the mouse event needs to be permitted;
		// unless explicitly enabled, prevent non-touch click events from triggering actions,
		// to prevent ghost/doubleclicks.
		if (!this.needsClick(this.targetElement) || this.cancelNextClick) {

			// Prevent any user-added listeners declared on FastClick element from being fired.
			if (event.stopImmediatePropagation) {
				event.stopImmediatePropagation();
			} else {

				// Part of the hack for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)
				event.propagationStopped = true;
			}

			// Cancel the event
			event.stopPropagation();
			event.preventDefault();

			return false;
		}

		// If the mouse event is permitted, return true for the action to go through.
		return true;
	};

	/**
  * On actual clicks, determine whether this is a touch-generated click, a click action occurring
  * naturally after a delay after a touch (which needs to be cancelled to avoid duplication), or
  * an actual click which should be permitted.
  *
  * @param {Event} event
  * @returns {boolean}
  */
	FastClick.prototype.onClick = function (event) {
		var permitted;

		// It's possible for another FastClick-like library delivered with third-party code to fire a click event before FastClick does (issue #44). In that case, set the click-tracking flag back to false and return early. This will cause onTouchEnd to return early.
		if (this.trackingClick) {
			this.targetElement = null;
			this.trackingClick = false;
			return true;
		}

		// Very odd behaviour on iOS (issue #18): if a submit element is present inside a form and the user hits enter in the iOS simulator or clicks the Go button on the pop-up OS keyboard the a kind of 'fake' click event will be triggered with the submit-type input element as the target.
		if (event.target.type === 'submit' && event.detail === 0) {
			return true;
		}

		permitted = this.onMouse(event);

		// Only unset targetElement if the click is not permitted. This will ensure that the check for !targetElement in onMouse fails and the browser's click doesn't go through.
		if (!permitted) {
			this.targetElement = null;
		}

		// If clicks are permitted, return true for the action to go through.
		return permitted;
	};

	/**
  * Remove all FastClick's event listeners.
  *
  * @returns {void}
  */
	FastClick.prototype.destroy = function () {
		var layer = this.layer;

		if (deviceIsAndroid) {
			layer.removeEventListener('mouseover', this.onMouse, true);
			layer.removeEventListener('mousedown', this.onMouse, true);
			layer.removeEventListener('mouseup', this.onMouse, true);
		}

		layer.removeEventListener('click', this.onClick, true);
		layer.removeEventListener('touchstart', this.onTouchStart, false);
		layer.removeEventListener('touchmove', this.onTouchMove, false);
		layer.removeEventListener('touchend', this.onTouchEnd, false);
		layer.removeEventListener('touchcancel', this.onTouchCancel, false);
	};

	/**
  * Check whether FastClick is needed.
  *
  * @param {Element} layer The layer to listen on
  */
	FastClick.notNeeded = function (layer) {
		var metaViewport;
		var chromeVersion;
		var blackberryVersion;
		var firefoxVersion;

		// Devices that don't support touch don't need FastClick
		if (typeof window.ontouchstart === 'undefined') {
			return true;
		}

		// Chrome version - zero for other browsers
		chromeVersion = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1];

		if (chromeVersion) {

			if (deviceIsAndroid) {
				metaViewport = document.querySelector('meta[name=viewport]');

				if (metaViewport) {
					// Chrome on Android with user-scalable="no" doesn't need FastClick (issue #89)
					if (metaViewport.content.indexOf('user-scalable=no') !== -1) {
						return true;
					}
					// Chrome 32 and above with width=device-width or less don't need FastClick
					if (chromeVersion > 31 && document.documentElement.scrollWidth <= window.outerWidth) {
						return true;
					}
				}

				// Chrome desktop doesn't need FastClick (issue #15)
			} else {
				return true;
			}
		}

		if (deviceIsBlackBerry10) {
			blackberryVersion = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/);

			// BlackBerry 10.3+ does not require Fastclick library.
			// https://github.com/ftlabs/fastclick/issues/251
			if (blackberryVersion[1] >= 10 && blackberryVersion[2] >= 3) {
				metaViewport = document.querySelector('meta[name=viewport]');

				if (metaViewport) {
					// user-scalable=no eliminates click delay.
					if (metaViewport.content.indexOf('user-scalable=no') !== -1) {
						return true;
					}
					// width=device-width (or less than device-width) eliminates click delay.
					if (document.documentElement.scrollWidth <= window.outerWidth) {
						return true;
					}
				}
			}
		}

		// IE10 with -ms-touch-action: none or manipulation, which disables double-tap-to-zoom (issue #97)
		if (layer.style.msTouchAction === 'none' || layer.style.touchAction === 'manipulation') {
			return true;
		}

		// Firefox version - zero for other browsers
		firefoxVersion = +(/Firefox\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1];

		if (firefoxVersion >= 27) {
			// Firefox 27+ does not have tap delay if the content is not zoomable - https://bugzilla.mozilla.org/show_bug.cgi?id=922896

			metaViewport = document.querySelector('meta[name=viewport]');
			if (metaViewport && (metaViewport.content.indexOf('user-scalable=no') !== -1 || document.documentElement.scrollWidth <= window.outerWidth)) {
				return true;
			}
		}

		// IE11: prefixed -ms-touch-action is no longer supported and it's recomended to use non-prefixed version
		// http://msdn.microsoft.com/en-us/library/windows/apps/Hh767313.aspx
		if (layer.style.touchAction === 'none' || layer.style.touchAction === 'manipulation') {
			return true;
		}

		return false;
	};

	/**
  * Factory method for creating a FastClick object
  *
  * @param {Element} layer The layer to listen on
  * @param {Object} [options={}] The options to override the defaults
  */
	FastClick.attach = function (layer, options) {
		return new FastClick(layer, options);
	};

	if ("function" === 'function' && _typeof(__webpack_require__(5)) === 'object' && __webpack_require__(5)) {

		// AMD. Register as an anonymous module.
		!(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return FastClick;
		}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else if (typeof module !== 'undefined' && module.exports) {
		module.exports = FastClick.attach;
		module.exports.FastClick = FastClick;
	} else {
		window.FastClick = FastClick;
	}
})();

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _Event = __webpack_require__(29);

var _Event2 = _interopRequireDefault(_Event);

var _Header = __webpack_require__(31);

var _Header2 = _interopRequireDefault(_Header);

var _Nav = __webpack_require__(34);

var _Nav2 = _interopRequireDefault(_Nav);

var _Search = __webpack_require__(38);

var _Search2 = _interopRequireDefault(_Search);

var _Sidebar = __webpack_require__(44);

var _Sidebar2 = _interopRequireDefault(_Sidebar);

var _Source = __webpack_require__(46);

var _Source2 = _interopRequireDefault(_Source);

var _Tabs = __webpack_require__(52);

var _Tabs2 = _interopRequireDefault(_Tabs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* ----------------------------------------------------------------------------
 * Module
 * ------------------------------------------------------------------------- */

exports.default = {
  Event: _Event2.default,
  Header: _Header2.default,
  Nav: _Nav2.default,
  Search: _Search2.default,
  Sidebar: _Sidebar2.default,
  Source: _Source2.default,
  Tabs: _Tabs2.default
}; /*
    * Copyright (c) 2016-2018 Martin Donath <martin.donath@squidfunk.com>
    *
    * Permission is hereby granted, free of charge, to any person obtaining a copy
    * of this software and associated documentation files (the "Software"), to
    * deal in the Software without restriction, including without limitation the
    * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
    * sell copies of the Software, and to permit persons to whom the Software is
    * furnished to do so, subject to the following conditions:
    *
    * The above copyright notice and this permission notice shall be included in
    * all copies or substantial portions of the Software.
    *
    * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
    * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
    * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
    * IN THE SOFTWARE.
    */

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _Listener = __webpack_require__(6);

var _Listener2 = _interopRequireDefault(_Listener);

var _MatchMedia = __webpack_require__(30);

var _MatchMedia2 = _interopRequireDefault(_MatchMedia);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* ----------------------------------------------------------------------------
 * Module
 * ------------------------------------------------------------------------- */

/*
 * Copyright (c) 2016-2018 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */

exports.default = {
  Listener: _Listener2.default,
  MatchMedia: _MatchMedia2.default
};

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _Listener = __webpack_require__(6);

var _Listener2 = _interopRequireDefault(_Listener);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /*
                                                                                                                                                           * Copyright (c) 2016-2018 Martin Donath <martin.donath@squidfunk.com>
                                                                                                                                                           *
                                                                                                                                                           * Permission is hereby granted, free of charge, to any person obtaining a copy
                                                                                                                                                           * of this software and associated documentation files (the "Software"), to
                                                                                                                                                           * deal in the Software without restriction, including without limitation the
                                                                                                                                                           * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
                                                                                                                                                           * sell copies of the Software, and to permit persons to whom the Software is
                                                                                                                                                           * furnished to do so, subject to the following conditions:
                                                                                                                                                           *
                                                                                                                                                           * The above copyright notice and this permission notice shall be included in
                                                                                                                                                           * all copies or substantial portions of the Software.
                                                                                                                                                           *
                                                                                                                                                           * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                                                                                                                                                           * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                                                                                                                                                           * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
                                                                                                                                                           * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                                                                                                                                                           * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
                                                                                                                                                           * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
                                                                                                                                                           * IN THE SOFTWARE.
                                                                                                                                                           */

// eslint-disable-line no-unused-vars

/* ----------------------------------------------------------------------------
 * Class
 * ------------------------------------------------------------------------- */

var MatchMedia =

/**
 * Media query listener
 *
 * This class listens for state changes of media queries and automatically
 * switches the given listeners on or off.
 *
 * @constructor
 *
 * @property {Function} handler_ - Media query event handler
 *
 * @param {string} query - Media query to test for
 * @param {Listener} listener - Event listener
 */
function MatchMedia(query, listener) {
  _classCallCheck(this, MatchMedia);

  this.handler_ = function (mq) {
    if (mq.matches) listener.listen();else listener.unlisten();
  };

  /* Initialize media query listener */
  var media = window.matchMedia(query);
  media.addListener(this.handler_);

  /* Always check at initialization */
  this.handler_(media);
};

exports.default = MatchMedia;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _Shadow = __webpack_require__(32);

var _Shadow2 = _interopRequireDefault(_Shadow);

var _Title = __webpack_require__(33);

var _Title2 = _interopRequireDefault(_Title);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* ----------------------------------------------------------------------------
 * Module
 * ------------------------------------------------------------------------- */

/*
 * Copyright (c) 2016-2018 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */

exports.default = {
  Shadow: _Shadow2.default,
  Title: _Title2.default
};

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
 * Copyright (c) 2016-2018 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */

/* ----------------------------------------------------------------------------
 * Class
 * ------------------------------------------------------------------------- */

var Shadow = function () {

  /**
   * Show or hide header shadow depending on page y-offset
   *
   * @constructor
   *
   * @property {HTMLElement} el_ - Content container
   * @property {HTMLElement} header_ - Header
   * @property {number} height_ - Offset height of previous nodes
   * @property {boolean} active_ - Header shadow state
   *
   * @param {(string|HTMLElement)} el - Selector or HTML element
   * @param {(string|HTMLElement)} header - Selector or HTML element
   */
  function Shadow(el, header) {
    _classCallCheck(this, Shadow);

    var ref = typeof el === "string" ? document.querySelector(el) : el;
    if (!(ref instanceof HTMLElement) || !(ref.parentNode instanceof HTMLElement)) throw new ReferenceError();
    this.el_ = ref.parentNode;

    /* Retrieve header */
    ref = typeof header === "string" ? document.querySelector(header) : header;
    if (!(ref instanceof HTMLElement)) throw new ReferenceError();
    this.header_ = ref;

    /* Initialize height and state */
    this.height_ = 0;
    this.active_ = false;
  }

  /**
   * Calculate total height of previous nodes
   */


  Shadow.prototype.setup = function setup() {
    var current = this.el_;
    while (current = current.previousElementSibling) {
      if (!(current instanceof HTMLElement)) throw new ReferenceError();
      this.height_ += current.offsetHeight;
    }
    this.update();
  };

  /**
   * Update shadow state
   *
   * @param {Event} ev - Event
   */


  Shadow.prototype.update = function update(ev) {
    if (ev && (ev.type === "resize" || ev.type === "orientationchange")) {
      this.height_ = 0;
      this.setup();
    } else {
      var active = window.pageYOffset >= this.height_;
      if (active !== this.active_) this.header_.dataset.mdState = (this.active_ = active) ? "shadow" : "";
    }
  };

  /**
   * Reset shadow state
   */


  Shadow.prototype.reset = function reset() {
    this.header_.dataset.mdState = "";
    this.height_ = 0;
    this.active_ = false;
  };

  return Shadow;
}();

exports.default = Shadow;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
 * Copyright (c) 2016-2018 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */

/* ----------------------------------------------------------------------------
 * Class
 * ------------------------------------------------------------------------- */

var Title = function () {

  /**
   * Swap header title topics when header is scrolled past
   *
   * @constructor
   *
   * @property {HTMLElement} el_ - Element
   * @property {HTMLElement} header_ - Header
   * @property {boolean} active_ - Title state
   *
   * @param {(string|HTMLElement)} el - Selector or HTML element
   * @param {(string|HTMLHeadingElement)} header - Selector or HTML element
   */
  function Title(el, header) {
    _classCallCheck(this, Title);

    var ref = typeof el === "string" ? document.querySelector(el) : el;
    if (!(ref instanceof HTMLElement)) throw new ReferenceError();
    this.el_ = ref;

    /* Retrieve header */
    ref = typeof header === "string" ? document.querySelector(header) : header;
    if (!(ref instanceof HTMLHeadingElement)) throw new ReferenceError();
    this.header_ = ref;

    /* Initialize state */
    this.active_ = false;
  }

  /**
   * Setup title state
   */


  Title.prototype.setup = function setup() {
    var _this = this;

    Array.prototype.forEach.call(this.el_.children, function (node) {
      // TODO: use childNodes here for IE?
      node.style.width = _this.el_.offsetWidth - 20 + "px";
    });
  };

  /**
   * Update title state
   *
   * @param {Event} ev - Event
   */


  Title.prototype.update = function update(ev) {
    var _this2 = this;

    var active = window.pageYOffset >= this.header_.offsetTop;
    if (active !== this.active_) this.el_.dataset.mdState = (this.active_ = active) ? "active" : "";

    /* Hack: induce ellipsis on topics */
    if (ev.type === "resize" || ev.type === "orientationchange") {
      Array.prototype.forEach.call(this.el_.children, function (node) {
        node.style.width = _this2.el_.offsetWidth - 20 + "px";
      });
    }
  };

  /**
   * Reset title state
   */


  Title.prototype.reset = function reset() {
    this.el_.dataset.mdState = "";
    this.el_.style.width = "";
    this.active_ = false;
  };

  return Title;
}();

exports.default = Title;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _Blur = __webpack_require__(35);

var _Blur2 = _interopRequireDefault(_Blur);

var _Collapse = __webpack_require__(36);

var _Collapse2 = _interopRequireDefault(_Collapse);

var _Scrolling = __webpack_require__(37);

var _Scrolling2 = _interopRequireDefault(_Scrolling);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* ----------------------------------------------------------------------------
 * Module
 * ------------------------------------------------------------------------- */

exports.default = {
  Blur: _Blur2.default,
  Collapse: _Collapse2.default,
  Scrolling: _Scrolling2.default
}; /*
    * Copyright (c) 2016-2018 Martin Donath <martin.donath@squidfunk.com>
    *
    * Permission is hereby granted, free of charge, to any person obtaining a copy
    * of this software and associated documentation files (the "Software"), to
    * deal in the Software without restriction, including without limitation the
    * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
    * sell copies of the Software, and to permit persons to whom the Software is
    * furnished to do so, subject to the following conditions:
    *
    * The above copyright notice and this permission notice shall be included in
    * all copies or substantial portions of the Software.
    *
    * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
    * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
    * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
    * IN THE SOFTWARE.
    */

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
 * Copyright (c) 2016-2018 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */

/* ----------------------------------------------------------------------------
 * Class
 * ------------------------------------------------------------------------- */

var Blur = function () {

  /**
   * Blur links within the table of contents above current page y-offset
   *
   * @constructor
   *
   * @property {NodeList<HTMLElement>} els_ - Table of contents links
   * @property {Array<HTMLElement>} anchors_ - Referenced anchor nodes
   * @property {number} index_ - Current link index
   * @property {number} offset_ - Current page y-offset
   * @property {boolean} dir_ - Scroll direction change
   *
   * @param {(string|NodeList<HTMLElement>)} els - Selector or HTML elements
   */
  function Blur(els) {
    _classCallCheck(this, Blur);

    this.els_ = typeof els === "string" ? document.querySelectorAll(els) : els;

    /* Initialize index and page y-offset */
    this.index_ = 0;
    this.offset_ = window.pageYOffset;

    /* Necessary state to correctly reset the index */
    this.dir_ = false;

    /* Index anchor node offsets for fast lookup */
    this.anchors_ = [].reduce.call(this.els_, function (anchors, el) {
      return anchors.concat(document.getElementById(el.hash.substring(1)) || []);
    }, []);
  }

  /**
   * Initialize blur states
   */


  Blur.prototype.setup = function setup() {
    this.update();
  };

  /**
   * Update blur states
   *
   * Deduct the static offset of the header (56px) and sidebar offset (24px),
   * see _permalinks.scss for more information.
   */


  Blur.prototype.update = function update() {
    var offset = window.pageYOffset;
    var dir = this.offset_ - offset < 0;

    /* Hack: reset index if direction changed to catch very fast scrolling,
       because otherwise we would have to register a timer and that sucks */
    if (this.dir_ !== dir) this.index_ = dir ? this.index_ = 0 : this.index_ = this.els_.length - 1;

    /* Exit when there are no anchors */
    if (this.anchors_.length === 0) return;

    /* Scroll direction is down */
    if (this.offset_ <= offset) {
      for (var i = this.index_ + 1; i < this.els_.length; i++) {
        if (this.anchors_[i].offsetTop - (56 + 24) <= offset) {
          if (i > 0) this.els_[i - 1].dataset.mdState = "blur";
          this.index_ = i;
        } else {
          break;
        }
      }

      /* Scroll direction is up */
    } else {
      for (var _i = this.index_; _i >= 0; _i--) {
        if (this.anchors_[_i].offsetTop - (56 + 24) > offset) {
          if (_i > 0) this.els_[_i - 1].dataset.mdState = "";
        } else {
          this.index_ = _i;
          break;
        }
      }
    }

    /* Remember current offset and direction for next iteration */
    this.offset_ = offset;
    this.dir_ = dir;
  };

  /**
   * Reset blur states
   */


  Blur.prototype.reset = function reset() {
    Array.prototype.forEach.call(this.els_, function (el) {
      el.dataset.mdState = "";
    });

    /* Reset index and page y-offset */
    this.index_ = 0;
    this.offset_ = window.pageYOffset;
  };

  return Blur;
}();

exports.default = Blur;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
 * Copyright (c) 2016-2018 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */

/* ----------------------------------------------------------------------------
 * Class
 * ------------------------------------------------------------------------- */

var Collapse = function () {

  /**
   * Expand or collapse navigation on toggle
   *
   * @constructor
   *
   * @property {HTMLElement} el_ - Navigation list
   *
   * @param {(string|HTMLElement)} el - Selector or HTML element
   */
  function Collapse(el) {
    _classCallCheck(this, Collapse);

    var ref = typeof el === "string" ? document.querySelector(el) : el;
    if (!(ref instanceof HTMLElement)) throw new ReferenceError();
    this.el_ = ref;
  }

  /**
   * Initialize overflow and display for accessibility
   */


  Collapse.prototype.setup = function setup() {
    var current = this.el_.getBoundingClientRect().height;

    /* Hidden links should not be focusable, so hide them when the navigation
       is collapsed and set overflow so the outline is not cut off */
    this.el_.style.display = current ? "block" : "none";
    this.el_.style.overflow = current ? "visible" : "hidden";
  };

  /**
   * Animate expand and collapse smoothly
   *
   * Internet Explorer 11 is very slow at recognizing changes on the dataset
   * which results in the menu not expanding or collapsing properly. THerefore,
   * for reasons of compatibility, the attribute accessors are used.
   */


  Collapse.prototype.update = function update() {
    var _this = this;

    var current = this.el_.getBoundingClientRect().height;

    /* Reset overflow to CSS defaults */
    this.el_.style.display = "block";
    this.el_.style.overflow = "";

    /* Expanded, so collapse */
    if (current) {
      this.el_.style.maxHeight = current + "px";
      requestAnimationFrame(function () {
        _this.el_.setAttribute("data-md-state", "animate");
        _this.el_.style.maxHeight = "0px";
      });

      /* Collapsed, so expand */
    } else {
      this.el_.setAttribute("data-md-state", "expand");
      this.el_.style.maxHeight = "";

      /* Read height and unset pseudo-toggled state */
      var height = this.el_.getBoundingClientRect().height;
      this.el_.removeAttribute("data-md-state");

      /* Set initial state and animate */
      this.el_.style.maxHeight = "0px";
      requestAnimationFrame(function () {
        _this.el_.setAttribute("data-md-state", "animate");
        _this.el_.style.maxHeight = height + "px";
      });
    }

    /* Remove state on end of transition */
    var end = function end(ev) {
      var target = ev.target;
      if (!(target instanceof HTMLElement)) throw new ReferenceError();

      /* Reset height and state */
      target.removeAttribute("data-md-state");
      target.style.maxHeight = "";

      /* Hidden links should not be focusable, so hide them when the navigation
         is collapsed and set overflow so the outline is not cut off */
      target.style.display = current ? "none" : "block";
      target.style.overflow = current ? "hidden" : "visible";

      /* Only fire once, so directly remove event listener */
      target.removeEventListener("transitionend", end);
    };
    this.el_.addEventListener("transitionend", end, false);
  };

  /**
   * Reset height and pseudo-toggled state
   */


  Collapse.prototype.reset = function reset() {
    this.el_.dataset.mdState = "";
    this.el_.style.maxHeight = "";
    this.el_.style.display = "";
    this.el_.style.overflow = "";
  };

  return Collapse;
}();

exports.default = Collapse;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
 * Copyright (c) 2016-2018 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */

/* ----------------------------------------------------------------------------
 * Class
 * ------------------------------------------------------------------------- */

var Scrolling = function () {

  /**
   * Set overflow scrolling on the current active pane (for iOS)
   *
   * @constructor
   *
   * @property {HTMLElement} el_ - Primary navigation
   *
   * @param {(string|HTMLElement)} el - Selector or HTML element
   */
  function Scrolling(el) {
    _classCallCheck(this, Scrolling);

    var ref = typeof el === "string" ? document.querySelector(el) : el;
    if (!(ref instanceof HTMLElement)) throw new ReferenceError();
    this.el_ = ref;
  }

  /**
   * Setup panes
   */


  Scrolling.prototype.setup = function setup() {

    /* Initially set overflow scrolling on main pane */
    var main = this.el_.children[this.el_.children.length - 1];
    main.style.webkitOverflowScrolling = "touch";

    /* Find all toggles and check which one is active */
    var toggles = this.el_.querySelectorAll("[data-md-toggle]");
    Array.prototype.forEach.call(toggles, function (toggle) {
      if (!(toggle instanceof HTMLInputElement)) throw new ReferenceError();
      if (toggle.checked) {

        /* Find corresponding navigational pane */
        var pane = toggle.nextElementSibling;
        if (!(pane instanceof HTMLElement)) throw new ReferenceError();
        while (pane.tagName !== "NAV" && pane.nextElementSibling) {
          pane = pane.nextElementSibling;
        } /* Check references */
        if (!(toggle.parentNode instanceof HTMLElement) || !(toggle.parentNode.parentNode instanceof HTMLElement)) throw new ReferenceError();

        /* Find current and parent list elements */
        var parent = toggle.parentNode.parentNode;
        var target = pane.children[pane.children.length - 1];

        /* Always reset all lists when transitioning */
        parent.style.webkitOverflowScrolling = "";
        target.style.webkitOverflowScrolling = "touch";
      }
    });
  };

  /**
   * Update active panes
   *
   * @param {Event} ev - Change event
   */


  Scrolling.prototype.update = function update(ev) {
    var target = ev.target;
    if (!(target instanceof HTMLElement)) throw new ReferenceError();

    /* Find corresponding navigational pane */
    var pane = target.nextElementSibling;
    if (!(pane instanceof HTMLElement)) throw new ReferenceError();
    while (pane.tagName !== "NAV" && pane.nextElementSibling) {
      pane = pane.nextElementSibling;
    } /* Check references */
    if (!(target.parentNode instanceof HTMLElement) || !(target.parentNode.parentNode instanceof HTMLElement)) throw new ReferenceError();

    /* Find parent and active panes */
    var parent = target.parentNode.parentNode;
    var active = pane.children[pane.children.length - 1];

    /* Always reset all lists when transitioning */
    parent.style.webkitOverflowScrolling = "";
    active.style.webkitOverflowScrolling = "";

    /* Set overflow scrolling on parent pane */
    if (!target.checked) {
      var end = function end() {
        if (pane instanceof HTMLElement) {
          parent.style.webkitOverflowScrolling = "touch";
          pane.removeEventListener("transitionend", end);
        }
      };
      pane.addEventListener("transitionend", end, false);
    }

    /* Set overflow scrolling on active pane */
    if (target.checked) {
      var _end = function _end() {
        if (pane instanceof HTMLElement) {
          active.style.webkitOverflowScrolling = "touch";
          pane.removeEventListener("transitionend", _end);
        }
      };
      pane.addEventListener("transitionend", _end, false);
    }
  };

  /**
   * Reset panes
   */


  Scrolling.prototype.reset = function reset() {

    /* Reset overflow scrolling on main pane */
    this.el_.children[1].style.webkitOverflowScrolling = "";

    /* Find all toggles and check which one is active */
    var toggles = this.el_.querySelectorAll("[data-md-toggle]");
    Array.prototype.forEach.call(toggles, function (toggle) {
      if (!(toggle instanceof HTMLInputElement)) throw new ReferenceError();
      if (toggle.checked) {

        /* Find corresponding navigational pane */
        var pane = toggle.nextElementSibling;
        if (!(pane instanceof HTMLElement)) throw new ReferenceError();
        while (pane.tagName !== "NAV" && pane.nextElementSibling) {
          pane = pane.nextElementSibling;
        } /* Check references */
        if (!(toggle.parentNode instanceof HTMLElement) || !(toggle.parentNode.parentNode instanceof HTMLElement)) throw new ReferenceError();

        /* Find parent and active panes */
        var parent = toggle.parentNode.parentNode;
        var active = pane.children[pane.children.length - 1];

        /* Always reset all lists when transitioning */
        parent.style.webkitOverflowScrolling = "";
        active.style.webkitOverflowScrolling = "";
      }
    });
  };

  return Scrolling;
}();

exports.default = Scrolling;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _Lock = __webpack_require__(39);

var _Lock2 = _interopRequireDefault(_Lock);

var _Result = __webpack_require__(40);

var _Result2 = _interopRequireDefault(_Result);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* ----------------------------------------------------------------------------
 * Module
 * ------------------------------------------------------------------------- */

/*
 * Copyright (c) 2016-2018 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */

exports.default = {
  Lock: _Lock2.default,
  Result: _Result2.default
};

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
 * Copyright (c) 2016-2018 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */

/* ----------------------------------------------------------------------------
 * Class
 * ------------------------------------------------------------------------- */

var Lock = function () {

  /**
   * Lock body for full-screen search modal
   *
   * @constructor
   *
   * @property {HTMLInputElement} el_ - Lock toggle
   * @property {HTMLElement} lock_ - Element to lock (document body)
   * @property {number} offset_ - Current page y-offset
   *
   * @param {(string|HTMLElement)} el - Selector or HTML element
   */
  function Lock(el) {
    _classCallCheck(this, Lock);

    var ref = typeof el === "string" ? document.querySelector(el) : el;
    if (!(ref instanceof HTMLInputElement)) throw new ReferenceError();
    this.el_ = ref;

    /* Retrieve element to lock (= body) */
    if (!document.body) throw new ReferenceError();
    this.lock_ = document.body;
  }

  /**
   * Setup locked state
   */


  Lock.prototype.setup = function setup() {
    this.update();
  };

  /**
   * Update locked state
   */


  Lock.prototype.update = function update() {
    var _this = this;

    /* Entering search mode */
    if (this.el_.checked) {
      this.offset_ = window.pageYOffset;

      /* Scroll to top after transition, to omit flickering */
      setTimeout(function () {
        window.scrollTo(0, 0);

        /* Lock body after finishing transition */
        if (_this.el_.checked) {
          _this.lock_.dataset.mdState = "lock";
        }
      }, 400);

      /* Exiting search mode */
    } else {
      this.lock_.dataset.mdState = "";

      /* Scroll to former position, but wait for 100ms to prevent flashes on
         iOS. A short timeout seems to do the trick */
      setTimeout(function () {
        if (typeof _this.offset_ !== "undefined") window.scrollTo(0, _this.offset_);
      }, 100);
    }
  };

  /**
   * Reset locked state and page y-offset
   */


  Lock.prototype.reset = function reset() {
    if (this.lock_.dataset.mdState === "lock") window.scrollTo(0, this.offset_);
    this.lock_.dataset.mdState = "";
  };

  return Lock;
}();

exports.default = Lock;

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(JSX) {

exports.__esModule = true;

var _escapeStringRegexp = __webpack_require__(41);

var _escapeStringRegexp2 = _interopRequireDefault(_escapeStringRegexp);

var _exposeLoaderLunrLunr = __webpack_require__(42);

var _exposeLoaderLunrLunr2 = _interopRequireDefault(_exposeLoaderLunrLunr);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /*
                                                                                                                                                           * Copyright (c) 2016-2018 Martin Donath <martin.donath@squidfunk.com>
                                                                                                                                                           *
                                                                                                                                                           * Permission is hereby granted, free of charge, to any person obtaining a copy
                                                                                                                                                           * of this software and associated documentation files (the "Software"), to
                                                                                                                                                           * deal in the Software without restriction, including without limitation the
                                                                                                                                                           * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
                                                                                                                                                           * sell copies of the Software, and to permit persons to whom the Software is
                                                                                                                                                           * furnished to do so, subject to the following conditions:
                                                                                                                                                           *
                                                                                                                                                           * The above copyright notice and this permission notice shall be included in
                                                                                                                                                           * all copies or substantial portions of the Software.
                                                                                                                                                           *
                                                                                                                                                           * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                                                                                                                                                           * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                                                                                                                                                           * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
                                                                                                                                                           * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                                                                                                                                                           * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
                                                                                                                                                           * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
                                                                                                                                                           * IN THE SOFTWARE.
                                                                                                                                                           */

/* ----------------------------------------------------------------------------
 * Functions
 * ------------------------------------------------------------------------- */

/**
 * Escape HTML strings
 *
 * Documentation may contain code JavaScript code snippets which would get
 * executed when inserted into the DOM as plain HTML.
 *
 * See https://github.com/squidfunk/mkdocs-material/issues/906
 *
 * @param {string} html - HTML string
 *
 * @return {string} Escaped HTML string
 */
var escapeHTML = function escapeHTML(html) {
  var text = document.createTextNode(html);
  var p = document.createElement('p');
  p.appendChild(text);
  return p.innerHTML;
};

/**
 * Truncate a string after the given number of character
 *
 * This is not a reasonable approach, since the summaries kind of suck. It
 * would be better to create something more intelligent, highlighting the
 * search occurrences and making a better summary out of it.
 *
 * @param {string} string - String to be truncated
 * @param {number} n - Number of characters
 * @return {string} Truncated string
 */
var truncate = function truncate(string, n) {
  var i = n;
  if (string.length > i) {
    while (string[i] !== " " && --i > 0) {}
    return string.substring(0, i) + "...";
  }
  return string;
};

/**
 * Return the meta tag value for the given key
 *
 * @param {string} key - Meta name
 *
 * @return {string} Meta content value
 */
var translate = function translate(key) {
  var meta = document.getElementsByName("lang:" + key)[0];
  if (!(meta instanceof HTMLMetaElement)) throw new ReferenceError();
  return meta.content;
};

/* ----------------------------------------------------------------------------
 * Class
 * ------------------------------------------------------------------------- */

var Result = function () {

  /**
   * Perform search and update results on keyboard events
   *
   * @constructor
   *
   * @property {HTMLElement} el_ - Search result container
   * @property {(Array<Object>|Function)} data_ - Raw document data
   * @property {Object} docs_ - Indexed documents
   * @property {HTMLElement} meta_ - Search meta information
   * @property {HTMLElement} list_ - Search result list
   * @property {Array<string>} lang_ - Search languages
   * @property {Object} message_ - Search result messages
   * @property {Object} index_ - Search index
   * @property {Array<Function>} stack_ - Search result stack
   * @property {string} value_ - Last input value
   *
   * @param {(string|HTMLElement)} el - Selector or HTML element
   * @param {(Array<Object>|Function)} data - Function providing data or array
   */
  function Result(el, data) {
    _classCallCheck(this, Result);

    var ref = typeof el === "string" ? document.querySelector(el) : el;
    if (!(ref instanceof HTMLElement)) throw new ReferenceError();
    this.el_ = ref;

    /* Retrieve metadata and list element */

    var _Array$prototype$slic = Array.prototype.slice.call(this.el_.children),
        meta = _Array$prototype$slic[0],
        list = _Array$prototype$slic[1];

    /* Set data, metadata and list elements */


    this.data_ = data;
    this.meta_ = meta;
    this.list_ = list;

    /* Load messages for metadata display */
    this.message_ = {
      placeholder: this.meta_.textContent,
      none: translate("search.result.none"),
      one: translate("search.result.one"),
      other: translate("search.result.other")

      /* Override tokenizer separator, if given */
    };var tokenizer = translate("search.tokenizer");
    if (tokenizer.length) _exposeLoaderLunrLunr2.default.tokenizer.separator = tokenizer;

    /* Load search languages */
    this.lang_ = translate("search.language").split(",").filter(Boolean).map(function (lang) {
      return lang.trim();
    });
  }

  /**
   * Update search results
   *
   * @param {Event} ev - Input or focus event
   */


  Result.prototype.update = function update(ev) {
    var _this = this;

    /* Initialize index, if this has not be done yet */
    if (ev.type === "focus" && !this.index_) {

      /* Initialize index */
      var init = function init(data) {

        /* Preprocess and index sections and documents */
        _this.docs_ = data.reduce(function (docs, doc) {
          var _doc$location$split = doc.location.split("#"),
              path = _doc$location$split[0],
              hash = _doc$location$split[1];

          /* Escape HTML */


          doc.title = escapeHTML(doc.title);
          doc.text = escapeHTML(doc.text);

          /* Associate section with parent document */
          if (hash) {
            doc.parent = docs.get(path);

            /* Override page title with document title if first section */
            if (doc.parent && !doc.parent.done) {
              doc.parent.title = doc.title;
              doc.parent.text = doc.text;
              doc.parent.done = true;
            }
          }

          /* Some cleanup on the text */
          doc.text = doc.text.replace(/\n/g, " ") /* Remove newlines */
          .replace(/\s+/g, " ") /* Compact whitespace */
          .replace(/\s+([,.:;!?])/g, /* Correct punctuation */
          function (_, char) {
            return char;
          });

          /* Index sections and documents, but skip top-level headline */
          if (!doc.parent || doc.parent.title !== doc.title) docs.set(doc.location, doc);
          return docs;
        }, new Map());

        /* eslint-disable no-invalid-this */
        var docs = _this.docs_,
            lang = _this.lang_;

        /* Create stack and index */
        _this.stack_ = [];
        _this.index_ = (0, _exposeLoaderLunrLunr2.default)(function () {
          var _pipeline,
              _this2 = this;

          var filters = {
            "search.pipeline.trimmer": _exposeLoaderLunrLunr2.default.trimmer,
            "search.pipeline.stopwords": _exposeLoaderLunrLunr2.default.stopWordFilter

            /* Disable stop words filter and trimmer, if desired */
          };var pipeline = Object.keys(filters).reduce(function (result, name) {
            if (!translate(name).match(/^false$/i)) result.push(filters[name]);
            return result;
          }, []);

          /* Remove stemmer, as it cripples search experience */
          this.pipeline.reset();
          if (pipeline) (_pipeline = this.pipeline).add.apply(_pipeline, pipeline);

          /* Set up alternate search languages */
          if (lang.length === 1 && lang[0] !== "en" && _exposeLoaderLunrLunr2.default[lang[0]]) {
            this.use(_exposeLoaderLunrLunr2.default[lang[0]]);
          } else if (lang.length > 1) {
            this.use(_exposeLoaderLunrLunr2.default.multiLanguage.apply(_exposeLoaderLunrLunr2.default, lang));
          }

          /* Index fields */
          this.field("title", { boost: 10 });
          this.field("text");
          this.ref("location");

          /* Index documents */
          docs.forEach(function (doc) {
            return _this2.add(doc);
          });
        });

        /* Register event handler for lazy rendering */
        var container = _this.el_.parentNode;
        if (!(container instanceof HTMLElement)) throw new ReferenceError();
        container.addEventListener("scroll", function () {
          while (_this.stack_.length && container.scrollTop + container.offsetHeight >= container.scrollHeight - 16) {
            _this.stack_.splice(0, 10).forEach(function (render) {
              return render();
            });
          }
        });
      };
      /* eslint-enable no-invalid-this */

      /* Initialize index after short timeout to account for transition */
      setTimeout(function () {
        return typeof _this.data_ === "function" ? _this.data_().then(init) : init(_this.data_);
      }, 250);

      /* Execute search on new input event */
    } else if (ev.type === "focus" || ev.type === "keyup") {
      var target = ev.target;
      if (!(target instanceof HTMLInputElement)) throw new ReferenceError();

      /* Abort early, if index is not build or input hasn't changed */
      if (!this.index_ || target.value === this.value_) return;

      /* Clear current list */
      while (this.list_.firstChild) {
        this.list_.removeChild(this.list_.firstChild);
      } /* Abort early, if search input is empty */
      this.value_ = target.value;
      if (this.value_.length === 0) {
        this.meta_.textContent = this.message_.placeholder;
        return;
      }

      /* Perform search on index and group sections by document */
      var result = this.index_

      /* Append trailing wildcard to all terms for prefix querying */
      .query(function (query) {
        _this.value_.toLowerCase().split(" ").filter(Boolean).forEach(function (term) {
          query.term(term, { wildcard: _exposeLoaderLunrLunr2.default.Query.wildcard.TRAILING });
        });
      })

      /* Process query results */
      .reduce(function (items, item) {
        var doc = _this.docs_.get(item.ref);
        if (doc.parent) {
          var ref = doc.parent.location;
          items.set(ref, (items.get(ref) || []).concat(item));
        } else {
          var _ref = doc.location;
          items.set(_ref, items.get(_ref) || []);
        }
        return items;
      }, new Map());

      /* Assemble regular expressions for matching */
      var query = (0, _escapeStringRegexp2.default)(this.value_.trim()).replace(new RegExp(_exposeLoaderLunrLunr2.default.tokenizer.separator, "img"), "|");
      var match = new RegExp("(^|" + _exposeLoaderLunrLunr2.default.tokenizer.separator + ")(" + query + ")", "img");
      var highlight = function highlight(_, separator, token) {
        return separator + "<em>" + token + "</em>";
      };

      /* Reset stack and render results */
      this.stack_ = [];
      result.forEach(function (items, ref) {
        var _stack_;

        var doc = _this.docs_.get(ref);

        /* Render article */
        var article = JSX.createElement(
          "li",
          { "class": "md-search-result__item" },
          JSX.createElement(
            "a",
            { href: doc.location, title: doc.title,
              "class": "md-search-result__link", tabindex: "-1" },
            JSX.createElement(
              "article",
              { "class": "md-search-result__article\r md-search-result__article--document" },
              JSX.createElement(
                "h1",
                { "class": "md-search-result__title" },
                { __html: doc.title.replace(match, highlight) }
              ),
              doc.text.length ? JSX.createElement(
                "p",
                { "class": "md-search-result__teaser" },
                { __html: doc.text.replace(match, highlight) }
              ) : {}
            )
          )
        );

        /* Render sections for article */
        var sections = items.map(function (item) {
          return function () {
            var section = _this.docs_.get(item.ref);
            article.appendChild(JSX.createElement(
              "a",
              { href: section.location, title: section.title,
                "class": "md-search-result__link", "data-md-rel": "anchor",
                tabindex: "-1" },
              JSX.createElement(
                "article",
                { "class": "md-search-result__article" },
                JSX.createElement(
                  "h1",
                  { "class": "md-search-result__title" },
                  { __html: section.title.replace(match, highlight) }
                ),
                section.text.length ? JSX.createElement(
                  "p",
                  { "class": "md-search-result__teaser" },
                  { __html: truncate(section.text.replace(match, highlight), 400)
                  }
                ) : {}
              )
            ));
          };
        });

        /* Push articles and section renderers onto stack */
        (_stack_ = _this.stack_).push.apply(_stack_, [function () {
          return _this.list_.appendChild(article);
        }].concat(sections));
      });

      /* Gradually add results as long as the height of the container grows */
      var container = this.el_.parentNode;
      if (!(container instanceof HTMLElement)) throw new ReferenceError();
      while (this.stack_.length && container.offsetHeight >= container.scrollHeight - 16) {
        this.stack_.shift()();
      } /* Bind click handlers for anchors */
      var anchors = this.list_.querySelectorAll("[data-md-rel=anchor]");
      Array.prototype.forEach.call(anchors, function (anchor) {
        ["click", "keydown"].forEach(function (action) {
          anchor.addEventListener(action, function (ev2) {
            if (action === "keydown" && ev2.keyCode !== 13) return;

            /* Close search */
            var toggle = document.querySelector("[data-md-toggle=search]");
            if (!(toggle instanceof HTMLInputElement)) throw new ReferenceError();
            if (toggle.checked) {
              toggle.checked = false;
              toggle.dispatchEvent(new CustomEvent("change"));
            }

            /* Hack: prevent default, as the navigation needs to be delayed due
               to the search body lock on mobile */
            ev2.preventDefault();
            setTimeout(function () {
              document.location.href = anchor.href;
            }, 100);
          });
        });
      });

      /* Update search metadata */
      switch (result.size) {
        case 0:
          this.meta_.textContent = this.message_.none;
          break;
        case 1:
          this.meta_.textContent = this.message_.one;
          break;
        default:
          this.meta_.textContent = this.message_.other.replace("#", result.size);
      }
    }
  };

  return Result;
}();

exports.default = Result;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var matchOperatorsRe = /[|\\{}()[\]^$+*?.]/g;

module.exports = function (str) {
	if (typeof str !== 'string') {
		throw new TypeError('Expected a string');
	}

	return str.replace(matchOperatorsRe, '\\$&');
};

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["lunr"] = __webpack_require__(43);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * lunr - http://lunrjs.com - A bit like Solr, but much smaller and not as bright - 2.3.5
 * Copyright (C) 2018 Oliver Nightingale
 * @license MIT
 */

;(function () {

  /**
   * A convenience function for configuring and constructing
   * a new lunr Index.
   *
   * A lunr.Builder instance is created and the pipeline setup
   * with a trimmer, stop word filter and stemmer.
   *
   * This builder object is yielded to the configuration function
   * that is passed as a parameter, allowing the list of fields
   * and other builder parameters to be customised.
   *
   * All documents _must_ be added within the passed config function.
   *
   * @example
   * var idx = lunr(function () {
   *   this.field('title')
   *   this.field('body')
   *   this.ref('id')
   *
   *   documents.forEach(function (doc) {
   *     this.add(doc)
   *   }, this)
   * })
   *
   * @see {@link lunr.Builder}
   * @see {@link lunr.Pipeline}
   * @see {@link lunr.trimmer}
   * @see {@link lunr.stopWordFilter}
   * @see {@link lunr.stemmer}
   * @namespace {function} lunr
   */
  var lunr = function lunr(config) {
    var builder = new lunr.Builder();

    builder.pipeline.add(lunr.trimmer, lunr.stopWordFilter, lunr.stemmer);

    builder.searchPipeline.add(lunr.stemmer);

    config.call(builder, builder);
    return builder.build();
  };

  lunr.version = "2.3.5";
  /*!
   * lunr.utils
   * Copyright (C) 2018 Oliver Nightingale
   */

  /**
   * A namespace containing utils for the rest of the lunr library
   * @namespace lunr.utils
   */
  lunr.utils = {};

  /**
   * Print a warning message to the console.
   *
   * @param {String} message The message to be printed.
   * @memberOf lunr.utils
   * @function
   */
  lunr.utils.warn = function (global) {
    /* eslint-disable no-console */
    return function (message) {
      if (global.console && console.warn) {
        console.warn(message);
      }
    };
    /* eslint-enable no-console */
  }(this);

  /**
   * Convert an object to a string.
   *
   * In the case of `null` and `undefined` the function returns
   * the empty string, in all other cases the result of calling
   * `toString` on the passed object is returned.
   *
   * @param {Any} obj The object to convert to a string.
   * @return {String} string representation of the passed object.
   * @memberOf lunr.utils
   */
  lunr.utils.asString = function (obj) {
    if (obj === void 0 || obj === null) {
      return "";
    } else {
      return obj.toString();
    }
  };

  /**
   * Clones an object.
   *
   * Will create a copy of an existing object such that any mutations
   * on the copy cannot affect the original.
   *
   * Only shallow objects are supported, passing a nested object to this
   * function will cause a TypeError.
   *
   * Objects with primitives, and arrays of primitives are supported.
   *
   * @param {Object} obj The object to clone.
   * @return {Object} a clone of the passed object.
   * @throws {TypeError} when a nested object is passed.
   * @memberOf Utils
   */
  lunr.utils.clone = function (obj) {
    if (obj === null || obj === undefined) {
      return obj;
    }

    var clone = Object.create(null),
        keys = Object.keys(obj);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i],
          val = obj[key];

      if (Array.isArray(val)) {
        clone[key] = val.slice();
        continue;
      }

      if (typeof val === 'string' || typeof val === 'number' || typeof val === 'boolean') {
        clone[key] = val;
        continue;
      }

      throw new TypeError("clone is not deep and does not support nested objects");
    }

    return clone;
  };
  lunr.FieldRef = function (docRef, fieldName, stringValue) {
    this.docRef = docRef;
    this.fieldName = fieldName;
    this._stringValue = stringValue;
  };

  lunr.FieldRef.joiner = "/";

  lunr.FieldRef.fromString = function (s) {
    var n = s.indexOf(lunr.FieldRef.joiner);

    if (n === -1) {
      throw "malformed field ref string";
    }

    var fieldRef = s.slice(0, n),
        docRef = s.slice(n + 1);

    return new lunr.FieldRef(docRef, fieldRef, s);
  };

  lunr.FieldRef.prototype.toString = function () {
    if (this._stringValue == undefined) {
      this._stringValue = this.fieldName + lunr.FieldRef.joiner + this.docRef;
    }

    return this._stringValue;
  };
  /*!
   * lunr.Set
   * Copyright (C) 2018 Oliver Nightingale
   */

  /**
   * A lunr set.
   *
   * @constructor
   */
  lunr.Set = function (elements) {
    this.elements = Object.create(null);

    if (elements) {
      this.length = elements.length;

      for (var i = 0; i < this.length; i++) {
        this.elements[elements[i]] = true;
      }
    } else {
      this.length = 0;
    }
  };

  /**
   * A complete set that contains all elements.
   *
   * @static
   * @readonly
   * @type {lunr.Set}
   */
  lunr.Set.complete = {
    intersect: function intersect(other) {
      return other;
    },

    union: function union(other) {
      return other;
    },

    contains: function contains() {
      return true;
    }

    /**
     * An empty set that contains no elements.
     *
     * @static
     * @readonly
     * @type {lunr.Set}
     */
  };lunr.Set.empty = {
    intersect: function intersect() {
      return this;
    },

    union: function union(other) {
      return other;
    },

    contains: function contains() {
      return false;
    }

    /**
     * Returns true if this set contains the specified object.
     *
     * @param {object} object - Object whose presence in this set is to be tested.
     * @returns {boolean} - True if this set contains the specified object.
     */
  };lunr.Set.prototype.contains = function (object) {
    return !!this.elements[object];
  };

  /**
   * Returns a new set containing only the elements that are present in both
   * this set and the specified set.
   *
   * @param {lunr.Set} other - set to intersect with this set.
   * @returns {lunr.Set} a new set that is the intersection of this and the specified set.
   */

  lunr.Set.prototype.intersect = function (other) {
    var a,
        b,
        elements,
        intersection = [];

    if (other === lunr.Set.complete) {
      return this;
    }

    if (other === lunr.Set.empty) {
      return other;
    }

    if (this.length < other.length) {
      a = this;
      b = other;
    } else {
      a = other;
      b = this;
    }

    elements = Object.keys(a.elements);

    for (var i = 0; i < elements.length; i++) {
      var element = elements[i];
      if (element in b.elements) {
        intersection.push(element);
      }
    }

    return new lunr.Set(intersection);
  };

  /**
   * Returns a new set combining the elements of this and the specified set.
   *
   * @param {lunr.Set} other - set to union with this set.
   * @return {lunr.Set} a new set that is the union of this and the specified set.
   */

  lunr.Set.prototype.union = function (other) {
    if (other === lunr.Set.complete) {
      return lunr.Set.complete;
    }

    if (other === lunr.Set.empty) {
      return this;
    }

    return new lunr.Set(Object.keys(this.elements).concat(Object.keys(other.elements)));
  };
  /**
   * A function to calculate the inverse document frequency for
   * a posting. This is shared between the builder and the index
   *
   * @private
   * @param {object} posting - The posting for a given term
   * @param {number} documentCount - The total number of documents.
   */
  lunr.idf = function (posting, documentCount) {
    var documentsWithTerm = 0;

    for (var fieldName in posting) {
      if (fieldName == '_index') continue; // Ignore the term index, its not a field
      documentsWithTerm += Object.keys(posting[fieldName]).length;
    }

    var x = (documentCount - documentsWithTerm + 0.5) / (documentsWithTerm + 0.5);

    return Math.log(1 + Math.abs(x));
  };

  /**
   * A token wraps a string representation of a token
   * as it is passed through the text processing pipeline.
   *
   * @constructor
   * @param {string} [str=''] - The string token being wrapped.
   * @param {object} [metadata={}] - Metadata associated with this token.
   */
  lunr.Token = function (str, metadata) {
    this.str = str || "";
    this.metadata = metadata || {};
  };

  /**
   * Returns the token string that is being wrapped by this object.
   *
   * @returns {string}
   */
  lunr.Token.prototype.toString = function () {
    return this.str;
  };

  /**
   * A token update function is used when updating or optionally
   * when cloning a token.
   *
   * @callback lunr.Token~updateFunction
   * @param {string} str - The string representation of the token.
   * @param {Object} metadata - All metadata associated with this token.
   */

  /**
   * Applies the given function to the wrapped string token.
   *
   * @example
   * token.update(function (str, metadata) {
   *   return str.toUpperCase()
   * })
   *
   * @param {lunr.Token~updateFunction} fn - A function to apply to the token string.
   * @returns {lunr.Token}
   */
  lunr.Token.prototype.update = function (fn) {
    this.str = fn(this.str, this.metadata);
    return this;
  };

  /**
   * Creates a clone of this token. Optionally a function can be
   * applied to the cloned token.
   *
   * @param {lunr.Token~updateFunction} [fn] - An optional function to apply to the cloned token.
   * @returns {lunr.Token}
   */
  lunr.Token.prototype.clone = function (fn) {
    fn = fn || function (s) {
      return s;
    };
    return new lunr.Token(fn(this.str, this.metadata), this.metadata);
  };
  /*!
   * lunr.tokenizer
   * Copyright (C) 2018 Oliver Nightingale
   */

  /**
   * A function for splitting a string into tokens ready to be inserted into
   * the search index. Uses `lunr.tokenizer.separator` to split strings, change
   * the value of this property to change how strings are split into tokens.
   *
   * This tokenizer will convert its parameter to a string by calling `toString` and
   * then will split this string on the character in `lunr.tokenizer.separator`.
   * Arrays will have their elements converted to strings and wrapped in a lunr.Token.
   *
   * Optional metadata can be passed to the tokenizer, this metadata will be cloned and
   * added as metadata to every token that is created from the object to be tokenized.
   *
   * @static
   * @param {?(string|object|object[])} obj - The object to convert into tokens
   * @param {?object} metadata - Optional metadata to associate with every token
   * @returns {lunr.Token[]}
   * @see {@link lunr.Pipeline}
   */
  lunr.tokenizer = function (obj, metadata) {
    if (obj == null || obj == undefined) {
      return [];
    }

    if (Array.isArray(obj)) {
      return obj.map(function (t) {
        return new lunr.Token(lunr.utils.asString(t).toLowerCase(), lunr.utils.clone(metadata));
      });
    }

    var str = obj.toString().trim().toLowerCase(),
        len = str.length,
        tokens = [];

    for (var sliceEnd = 0, sliceStart = 0; sliceEnd <= len; sliceEnd++) {
      var char = str.charAt(sliceEnd),
          sliceLength = sliceEnd - sliceStart;

      if (char.match(lunr.tokenizer.separator) || sliceEnd == len) {

        if (sliceLength > 0) {
          var tokenMetadata = lunr.utils.clone(metadata) || {};
          tokenMetadata["position"] = [sliceStart, sliceLength];
          tokenMetadata["index"] = tokens.length;

          tokens.push(new lunr.Token(str.slice(sliceStart, sliceEnd), tokenMetadata));
        }

        sliceStart = sliceEnd + 1;
      }
    }

    return tokens;
  };

  /**
   * The separator used to split a string into tokens. Override this property to change the behaviour of
   * `lunr.tokenizer` behaviour when tokenizing strings. By default this splits on whitespace and hyphens.
   *
   * @static
   * @see lunr.tokenizer
   */
  lunr.tokenizer.separator = /[\s\-]+/;
  /*!
   * lunr.Pipeline
   * Copyright (C) 2018 Oliver Nightingale
   */

  /**
   * lunr.Pipelines maintain an ordered list of functions to be applied to all
   * tokens in documents entering the search index and queries being ran against
   * the index.
   *
   * An instance of lunr.Index created with the lunr shortcut will contain a
   * pipeline with a stop word filter and an English language stemmer. Extra
   * functions can be added before or after either of these functions or these
   * default functions can be removed.
   *
   * When run the pipeline will call each function in turn, passing a token, the
   * index of that token in the original list of all tokens and finally a list of
   * all the original tokens.
   *
   * The output of functions in the pipeline will be passed to the next function
   * in the pipeline. To exclude a token from entering the index the function
   * should return undefined, the rest of the pipeline will not be called with
   * this token.
   *
   * For serialisation of pipelines to work, all functions used in an instance of
   * a pipeline should be registered with lunr.Pipeline. Registered functions can
   * then be loaded. If trying to load a serialised pipeline that uses functions
   * that are not registered an error will be thrown.
   *
   * If not planning on serialising the pipeline then registering pipeline functions
   * is not necessary.
   *
   * @constructor
   */
  lunr.Pipeline = function () {
    this._stack = [];
  };

  lunr.Pipeline.registeredFunctions = Object.create(null);

  /**
   * A pipeline function maps lunr.Token to lunr.Token. A lunr.Token contains the token
   * string as well as all known metadata. A pipeline function can mutate the token string
   * or mutate (or add) metadata for a given token.
   *
   * A pipeline function can indicate that the passed token should be discarded by returning
   * null. This token will not be passed to any downstream pipeline functions and will not be
   * added to the index.
   *
   * Multiple tokens can be returned by returning an array of tokens. Each token will be passed
   * to any downstream pipeline functions and all will returned tokens will be added to the index.
   *
   * Any number of pipeline functions may be chained together using a lunr.Pipeline.
   *
   * @interface lunr.PipelineFunction
   * @param {lunr.Token} token - A token from the document being processed.
   * @param {number} i - The index of this token in the complete list of tokens for this document/field.
   * @param {lunr.Token[]} tokens - All tokens for this document/field.
   * @returns {(?lunr.Token|lunr.Token[])}
   */

  /**
   * Register a function with the pipeline.
   *
   * Functions that are used in the pipeline should be registered if the pipeline
   * needs to be serialised, or a serialised pipeline needs to be loaded.
   *
   * Registering a function does not add it to a pipeline, functions must still be
   * added to instances of the pipeline for them to be used when running a pipeline.
   *
   * @param {lunr.PipelineFunction} fn - The function to check for.
   * @param {String} label - The label to register this function with
   */
  lunr.Pipeline.registerFunction = function (fn, label) {
    if (label in this.registeredFunctions) {
      lunr.utils.warn('Overwriting existing registered function: ' + label);
    }

    fn.label = label;
    lunr.Pipeline.registeredFunctions[fn.label] = fn;
  };

  /**
   * Warns if the function is not registered as a Pipeline function.
   *
   * @param {lunr.PipelineFunction} fn - The function to check for.
   * @private
   */
  lunr.Pipeline.warnIfFunctionNotRegistered = function (fn) {
    var isRegistered = fn.label && fn.label in this.registeredFunctions;

    if (!isRegistered) {
      lunr.utils.warn('Function is not registered with pipeline. This may cause problems when serialising the index.\n', fn);
    }
  };

  /**
   * Loads a previously serialised pipeline.
   *
   * All functions to be loaded must already be registered with lunr.Pipeline.
   * If any function from the serialised data has not been registered then an
   * error will be thrown.
   *
   * @param {Object} serialised - The serialised pipeline to load.
   * @returns {lunr.Pipeline}
   */
  lunr.Pipeline.load = function (serialised) {
    var pipeline = new lunr.Pipeline();

    serialised.forEach(function (fnName) {
      var fn = lunr.Pipeline.registeredFunctions[fnName];

      if (fn) {
        pipeline.add(fn);
      } else {
        throw new Error('Cannot load unregistered function: ' + fnName);
      }
    });

    return pipeline;
  };

  /**
   * Adds new functions to the end of the pipeline.
   *
   * Logs a warning if the function has not been registered.
   *
   * @param {lunr.PipelineFunction[]} functions - Any number of functions to add to the pipeline.
   */
  lunr.Pipeline.prototype.add = function () {
    var fns = Array.prototype.slice.call(arguments);

    fns.forEach(function (fn) {
      lunr.Pipeline.warnIfFunctionNotRegistered(fn);
      this._stack.push(fn);
    }, this);
  };

  /**
   * Adds a single function after a function that already exists in the
   * pipeline.
   *
   * Logs a warning if the function has not been registered.
   *
   * @param {lunr.PipelineFunction} existingFn - A function that already exists in the pipeline.
   * @param {lunr.PipelineFunction} newFn - The new function to add to the pipeline.
   */
  lunr.Pipeline.prototype.after = function (existingFn, newFn) {
    lunr.Pipeline.warnIfFunctionNotRegistered(newFn);

    var pos = this._stack.indexOf(existingFn);
    if (pos == -1) {
      throw new Error('Cannot find existingFn');
    }

    pos = pos + 1;
    this._stack.splice(pos, 0, newFn);
  };

  /**
   * Adds a single function before a function that already exists in the
   * pipeline.
   *
   * Logs a warning if the function has not been registered.
   *
   * @param {lunr.PipelineFunction} existingFn - A function that already exists in the pipeline.
   * @param {lunr.PipelineFunction} newFn - The new function to add to the pipeline.
   */
  lunr.Pipeline.prototype.before = function (existingFn, newFn) {
    lunr.Pipeline.warnIfFunctionNotRegistered(newFn);

    var pos = this._stack.indexOf(existingFn);
    if (pos == -1) {
      throw new Error('Cannot find existingFn');
    }

    this._stack.splice(pos, 0, newFn);
  };

  /**
   * Removes a function from the pipeline.
   *
   * @param {lunr.PipelineFunction} fn The function to remove from the pipeline.
   */
  lunr.Pipeline.prototype.remove = function (fn) {
    var pos = this._stack.indexOf(fn);
    if (pos == -1) {
      return;
    }

    this._stack.splice(pos, 1);
  };

  /**
   * Runs the current list of functions that make up the pipeline against the
   * passed tokens.
   *
   * @param {Array} tokens The tokens to run through the pipeline.
   * @returns {Array}
   */
  lunr.Pipeline.prototype.run = function (tokens) {
    var stackLength = this._stack.length;

    for (var i = 0; i < stackLength; i++) {
      var fn = this._stack[i];
      var memo = [];

      for (var j = 0; j < tokens.length; j++) {
        var result = fn(tokens[j], j, tokens);

        if (result === void 0 || result === '') continue;

        if (Array.isArray(result)) {
          for (var k = 0; k < result.length; k++) {
            memo.push(result[k]);
          }
        } else {
          memo.push(result);
        }
      }

      tokens = memo;
    }

    return tokens;
  };

  /**
   * Convenience method for passing a string through a pipeline and getting
   * strings out. This method takes care of wrapping the passed string in a
   * token and mapping the resulting tokens back to strings.
   *
   * @param {string} str - The string to pass through the pipeline.
   * @param {?object} metadata - Optional metadata to associate with the token
   * passed to the pipeline.
   * @returns {string[]}
   */
  lunr.Pipeline.prototype.runString = function (str, metadata) {
    var token = new lunr.Token(str, metadata);

    return this.run([token]).map(function (t) {
      return t.toString();
    });
  };

  /**
   * Resets the pipeline by removing any existing processors.
   *
   */
  lunr.Pipeline.prototype.reset = function () {
    this._stack = [];
  };

  /**
   * Returns a representation of the pipeline ready for serialisation.
   *
   * Logs a warning if the function has not been registered.
   *
   * @returns {Array}
   */
  lunr.Pipeline.prototype.toJSON = function () {
    return this._stack.map(function (fn) {
      lunr.Pipeline.warnIfFunctionNotRegistered(fn);

      return fn.label;
    });
  };
  /*!
   * lunr.Vector
   * Copyright (C) 2018 Oliver Nightingale
   */

  /**
   * A vector is used to construct the vector space of documents and queries. These
   * vectors support operations to determine the similarity between two documents or
   * a document and a query.
   *
   * Normally no parameters are required for initializing a vector, but in the case of
   * loading a previously dumped vector the raw elements can be provided to the constructor.
   *
   * For performance reasons vectors are implemented with a flat array, where an elements
   * index is immediately followed by its value. E.g. [index, value, index, value]. This
   * allows the underlying array to be as sparse as possible and still offer decent
   * performance when being used for vector calculations.
   *
   * @constructor
   * @param {Number[]} [elements] - The flat list of element index and element value pairs.
   */
  lunr.Vector = function (elements) {
    this._magnitude = 0;
    this.elements = elements || [];
  };

  /**
   * Calculates the position within the vector to insert a given index.
   *
   * This is used internally by insert and upsert. If there are duplicate indexes then
   * the position is returned as if the value for that index were to be updated, but it
   * is the callers responsibility to check whether there is a duplicate at that index
   *
   * @param {Number} insertIdx - The index at which the element should be inserted.
   * @returns {Number}
   */
  lunr.Vector.prototype.positionForIndex = function (index) {
    // For an empty vector the tuple can be inserted at the beginning
    if (this.elements.length == 0) {
      return 0;
    }

    var start = 0,
        end = this.elements.length / 2,
        sliceLength = end - start,
        pivotPoint = Math.floor(sliceLength / 2),
        pivotIndex = this.elements[pivotPoint * 2];

    while (sliceLength > 1) {
      if (pivotIndex < index) {
        start = pivotPoint;
      }

      if (pivotIndex > index) {
        end = pivotPoint;
      }

      if (pivotIndex == index) {
        break;
      }

      sliceLength = end - start;
      pivotPoint = start + Math.floor(sliceLength / 2);
      pivotIndex = this.elements[pivotPoint * 2];
    }

    if (pivotIndex == index) {
      return pivotPoint * 2;
    }

    if (pivotIndex > index) {
      return pivotPoint * 2;
    }

    if (pivotIndex < index) {
      return (pivotPoint + 1) * 2;
    }
  };

  /**
   * Inserts an element at an index within the vector.
   *
   * Does not allow duplicates, will throw an error if there is already an entry
   * for this index.
   *
   * @param {Number} insertIdx - The index at which the element should be inserted.
   * @param {Number} val - The value to be inserted into the vector.
   */
  lunr.Vector.prototype.insert = function (insertIdx, val) {
    this.upsert(insertIdx, val, function () {
      throw "duplicate index";
    });
  };

  /**
   * Inserts or updates an existing index within the vector.
   *
   * @param {Number} insertIdx - The index at which the element should be inserted.
   * @param {Number} val - The value to be inserted into the vector.
   * @param {function} fn - A function that is called for updates, the existing value and the
   * requested value are passed as arguments
   */
  lunr.Vector.prototype.upsert = function (insertIdx, val, fn) {
    this._magnitude = 0;
    var position = this.positionForIndex(insertIdx);

    if (this.elements[position] == insertIdx) {
      this.elements[position + 1] = fn(this.elements[position + 1], val);
    } else {
      this.elements.splice(position, 0, insertIdx, val);
    }
  };

  /**
   * Calculates the magnitude of this vector.
   *
   * @returns {Number}
   */
  lunr.Vector.prototype.magnitude = function () {
    if (this._magnitude) return this._magnitude;

    var sumOfSquares = 0,
        elementsLength = this.elements.length;

    for (var i = 1; i < elementsLength; i += 2) {
      var val = this.elements[i];
      sumOfSquares += val * val;
    }

    return this._magnitude = Math.sqrt(sumOfSquares);
  };

  /**
   * Calculates the dot product of this vector and another vector.
   *
   * @param {lunr.Vector} otherVector - The vector to compute the dot product with.
   * @returns {Number}
   */
  lunr.Vector.prototype.dot = function (otherVector) {
    var dotProduct = 0,
        a = this.elements,
        b = otherVector.elements,
        aLen = a.length,
        bLen = b.length,
        aVal = 0,
        bVal = 0,
        i = 0,
        j = 0;

    while (i < aLen && j < bLen) {
      aVal = a[i], bVal = b[j];
      if (aVal < bVal) {
        i += 2;
      } else if (aVal > bVal) {
        j += 2;
      } else if (aVal == bVal) {
        dotProduct += a[i + 1] * b[j + 1];
        i += 2;
        j += 2;
      }
    }

    return dotProduct;
  };

  /**
   * Calculates the similarity between this vector and another vector.
   *
   * @param {lunr.Vector} otherVector - The other vector to calculate the
   * similarity with.
   * @returns {Number}
   */
  lunr.Vector.prototype.similarity = function (otherVector) {
    return this.dot(otherVector) / this.magnitude() || 0;
  };

  /**
   * Converts the vector to an array of the elements within the vector.
   *
   * @returns {Number[]}
   */
  lunr.Vector.prototype.toArray = function () {
    var output = new Array(this.elements.length / 2);

    for (var i = 1, j = 0; i < this.elements.length; i += 2, j++) {
      output[j] = this.elements[i];
    }

    return output;
  };

  /**
   * A JSON serializable representation of the vector.
   *
   * @returns {Number[]}
   */
  lunr.Vector.prototype.toJSON = function () {
    return this.elements;
  };
  /* eslint-disable */
  /*!
   * lunr.stemmer
   * Copyright (C) 2018 Oliver Nightingale
   * Includes code from - http://tartarus.org/~martin/PorterStemmer/js.txt
   */

  /**
   * lunr.stemmer is an english language stemmer, this is a JavaScript
   * implementation of the PorterStemmer taken from http://tartarus.org/~martin
   *
   * @static
   * @implements {lunr.PipelineFunction}
   * @param {lunr.Token} token - The string to stem
   * @returns {lunr.Token}
   * @see {@link lunr.Pipeline}
   * @function
   */
  lunr.stemmer = function () {
    var step2list = {
      "ational": "ate",
      "tional": "tion",
      "enci": "ence",
      "anci": "ance",
      "izer": "ize",
      "bli": "ble",
      "alli": "al",
      "entli": "ent",
      "eli": "e",
      "ousli": "ous",
      "ization": "ize",
      "ation": "ate",
      "ator": "ate",
      "alism": "al",
      "iveness": "ive",
      "fulness": "ful",
      "ousness": "ous",
      "aliti": "al",
      "iviti": "ive",
      "biliti": "ble",
      "logi": "log"
    },
        step3list = {
      "icate": "ic",
      "ative": "",
      "alize": "al",
      "iciti": "ic",
      "ical": "ic",
      "ful": "",
      "ness": ""
    },
        c = "[^aeiou]",
        // consonant
    v = "[aeiouy]",
        // vowel
    C = c + "[^aeiouy]*",
        // consonant sequence
    V = v + "[aeiou]*",
        // vowel sequence

    mgr0 = "^(" + C + ")?" + V + C,
        // [C]VC... is m>0
    meq1 = "^(" + C + ")?" + V + C + "(" + V + ")?$",
        // [C]VC[V] is m=1
    mgr1 = "^(" + C + ")?" + V + C + V + C,
        // [C]VCVC... is m>1
    s_v = "^(" + C + ")?" + v; // vowel in stem

    var re_mgr0 = new RegExp(mgr0);
    var re_mgr1 = new RegExp(mgr1);
    var re_meq1 = new RegExp(meq1);
    var re_s_v = new RegExp(s_v);

    var re_1a = /^(.+?)(ss|i)es$/;
    var re2_1a = /^(.+?)([^s])s$/;
    var re_1b = /^(.+?)eed$/;
    var re2_1b = /^(.+?)(ed|ing)$/;
    var re_1b_2 = /.$/;
    var re2_1b_2 = /(at|bl|iz)$/;
    var re3_1b_2 = new RegExp("([^aeiouylsz])\\1$");
    var re4_1b_2 = new RegExp("^" + C + v + "[^aeiouwxy]$");

    var re_1c = /^(.+?[^aeiou])y$/;
    var re_2 = /^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/;

    var re_3 = /^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/;

    var re_4 = /^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/;
    var re2_4 = /^(.+?)(s|t)(ion)$/;

    var re_5 = /^(.+?)e$/;
    var re_5_1 = /ll$/;
    var re3_5 = new RegExp("^" + C + v + "[^aeiouwxy]$");

    var porterStemmer = function porterStemmer(w) {
      var stem, suffix, firstch, re, re2, re3, re4;

      if (w.length < 3) {
        return w;
      }

      firstch = w.substr(0, 1);
      if (firstch == "y") {
        w = firstch.toUpperCase() + w.substr(1);
      }

      // Step 1a
      re = re_1a;
      re2 = re2_1a;

      if (re.test(w)) {
        w = w.replace(re, "$1$2");
      } else if (re2.test(w)) {
        w = w.replace(re2, "$1$2");
      }

      // Step 1b
      re = re_1b;
      re2 = re2_1b;
      if (re.test(w)) {
        var fp = re.exec(w);
        re = re_mgr0;
        if (re.test(fp[1])) {
          re = re_1b_2;
          w = w.replace(re, "");
        }
      } else if (re2.test(w)) {
        var fp = re2.exec(w);
        stem = fp[1];
        re2 = re_s_v;
        if (re2.test(stem)) {
          w = stem;
          re2 = re2_1b_2;
          re3 = re3_1b_2;
          re4 = re4_1b_2;
          if (re2.test(w)) {
            w = w + "e";
          } else if (re3.test(w)) {
            re = re_1b_2;w = w.replace(re, "");
          } else if (re4.test(w)) {
            w = w + "e";
          }
        }
      }

      // Step 1c - replace suffix y or Y by i if preceded by a non-vowel which is not the first letter of the word (so cry -> cri, by -> by, say -> say)
      re = re_1c;
      if (re.test(w)) {
        var fp = re.exec(w);
        stem = fp[1];
        w = stem + "i";
      }

      // Step 2
      re = re_2;
      if (re.test(w)) {
        var fp = re.exec(w);
        stem = fp[1];
        suffix = fp[2];
        re = re_mgr0;
        if (re.test(stem)) {
          w = stem + step2list[suffix];
        }
      }

      // Step 3
      re = re_3;
      if (re.test(w)) {
        var fp = re.exec(w);
        stem = fp[1];
        suffix = fp[2];
        re = re_mgr0;
        if (re.test(stem)) {
          w = stem + step3list[suffix];
        }
      }

      // Step 4
      re = re_4;
      re2 = re2_4;
      if (re.test(w)) {
        var fp = re.exec(w);
        stem = fp[1];
        re = re_mgr1;
        if (re.test(stem)) {
          w = stem;
        }
      } else if (re2.test(w)) {
        var fp = re2.exec(w);
        stem = fp[1] + fp[2];
        re2 = re_mgr1;
        if (re2.test(stem)) {
          w = stem;
        }
      }

      // Step 5
      re = re_5;
      if (re.test(w)) {
        var fp = re.exec(w);
        stem = fp[1];
        re = re_mgr1;
        re2 = re_meq1;
        re3 = re3_5;
        if (re.test(stem) || re2.test(stem) && !re3.test(stem)) {
          w = stem;
        }
      }

      re = re_5_1;
      re2 = re_mgr1;
      if (re.test(w) && re2.test(w)) {
        re = re_1b_2;
        w = w.replace(re, "");
      }

      // and turn initial Y back to y

      if (firstch == "y") {
        w = firstch.toLowerCase() + w.substr(1);
      }

      return w;
    };

    return function (token) {
      return token.update(porterStemmer);
    };
  }();

  lunr.Pipeline.registerFunction(lunr.stemmer, 'stemmer');
  /*!
   * lunr.stopWordFilter
   * Copyright (C) 2018 Oliver Nightingale
   */

  /**
   * lunr.generateStopWordFilter builds a stopWordFilter function from the provided
   * list of stop words.
   *
   * The built in lunr.stopWordFilter is built using this generator and can be used
   * to generate custom stopWordFilters for applications or non English languages.
   *
   * @function
   * @param {Array} token The token to pass through the filter
   * @returns {lunr.PipelineFunction}
   * @see lunr.Pipeline
   * @see lunr.stopWordFilter
   */
  lunr.generateStopWordFilter = function (stopWords) {
    var words = stopWords.reduce(function (memo, stopWord) {
      memo[stopWord] = stopWord;
      return memo;
    }, {});

    return function (token) {
      if (token && words[token.toString()] !== token.toString()) return token;
    };
  };

  /**
   * lunr.stopWordFilter is an English language stop word list filter, any words
   * contained in the list will not be passed through the filter.
   *
   * This is intended to be used in the Pipeline. If the token does not pass the
   * filter then undefined will be returned.
   *
   * @function
   * @implements {lunr.PipelineFunction}
   * @params {lunr.Token} token - A token to check for being a stop word.
   * @returns {lunr.Token}
   * @see {@link lunr.Pipeline}
   */
  lunr.stopWordFilter = lunr.generateStopWordFilter(['a', 'able', 'about', 'across', 'after', 'all', 'almost', 'also', 'am', 'among', 'an', 'and', 'any', 'are', 'as', 'at', 'be', 'because', 'been', 'but', 'by', 'can', 'cannot', 'could', 'dear', 'did', 'do', 'does', 'either', 'else', 'ever', 'every', 'for', 'from', 'get', 'got', 'had', 'has', 'have', 'he', 'her', 'hers', 'him', 'his', 'how', 'however', 'i', 'if', 'in', 'into', 'is', 'it', 'its', 'just', 'least', 'let', 'like', 'likely', 'may', 'me', 'might', 'most', 'must', 'my', 'neither', 'no', 'nor', 'not', 'of', 'off', 'often', 'on', 'only', 'or', 'other', 'our', 'own', 'rather', 'said', 'say', 'says', 'she', 'should', 'since', 'so', 'some', 'than', 'that', 'the', 'their', 'them', 'then', 'there', 'these', 'they', 'this', 'tis', 'to', 'too', 'twas', 'us', 'wants', 'was', 'we', 'were', 'what', 'when', 'where', 'which', 'while', 'who', 'whom', 'why', 'will', 'with', 'would', 'yet', 'you', 'your']);

  lunr.Pipeline.registerFunction(lunr.stopWordFilter, 'stopWordFilter');
  /*!
   * lunr.trimmer
   * Copyright (C) 2018 Oliver Nightingale
   */

  /**
   * lunr.trimmer is a pipeline function for trimming non word
   * characters from the beginning and end of tokens before they
   * enter the index.
   *
   * This implementation may not work correctly for non latin
   * characters and should either be removed or adapted for use
   * with languages with non-latin characters.
   *
   * @static
   * @implements {lunr.PipelineFunction}
   * @param {lunr.Token} token The token to pass through the filter
   * @returns {lunr.Token}
   * @see lunr.Pipeline
   */
  lunr.trimmer = function (token) {
    return token.update(function (s) {
      return s.replace(/^\W+/, '').replace(/\W+$/, '');
    });
  };

  lunr.Pipeline.registerFunction(lunr.trimmer, 'trimmer');
  /*!
   * lunr.TokenSet
   * Copyright (C) 2018 Oliver Nightingale
   */

  /**
   * A token set is used to store the unique list of all tokens
   * within an index. Token sets are also used to represent an
   * incoming query to the index, this query token set and index
   * token set are then intersected to find which tokens to look
   * up in the inverted index.
   *
   * A token set can hold multiple tokens, as in the case of the
   * index token set, or it can hold a single token as in the
   * case of a simple query token set.
   *
   * Additionally token sets are used to perform wildcard matching.
   * Leading, contained and trailing wildcards are supported, and
   * from this edit distance matching can also be provided.
   *
   * Token sets are implemented as a minimal finite state automata,
   * where both common prefixes and suffixes are shared between tokens.
   * This helps to reduce the space used for storing the token set.
   *
   * @constructor
   */
  lunr.TokenSet = function () {
    this.final = false;
    this.edges = {};
    this.id = lunr.TokenSet._nextId;
    lunr.TokenSet._nextId += 1;
  };

  /**
   * Keeps track of the next, auto increment, identifier to assign
   * to a new tokenSet.
   *
   * TokenSets require a unique identifier to be correctly minimised.
   *
   * @private
   */
  lunr.TokenSet._nextId = 1;

  /**
   * Creates a TokenSet instance from the given sorted array of words.
   *
   * @param {String[]} arr - A sorted array of strings to create the set from.
   * @returns {lunr.TokenSet}
   * @throws Will throw an error if the input array is not sorted.
   */
  lunr.TokenSet.fromArray = function (arr) {
    var builder = new lunr.TokenSet.Builder();

    for (var i = 0, len = arr.length; i < len; i++) {
      builder.insert(arr[i]);
    }

    builder.finish();
    return builder.root;
  };

  /**
   * Creates a token set from a query clause.
   *
   * @private
   * @param {Object} clause - A single clause from lunr.Query.
   * @param {string} clause.term - The query clause term.
   * @param {number} [clause.editDistance] - The optional edit distance for the term.
   * @returns {lunr.TokenSet}
   */
  lunr.TokenSet.fromClause = function (clause) {
    if ('editDistance' in clause) {
      return lunr.TokenSet.fromFuzzyString(clause.term, clause.editDistance);
    } else {
      return lunr.TokenSet.fromString(clause.term);
    }
  };

  /**
   * Creates a token set representing a single string with a specified
   * edit distance.
   *
   * Insertions, deletions, substitutions and transpositions are each
   * treated as an edit distance of 1.
   *
   * Increasing the allowed edit distance will have a dramatic impact
   * on the performance of both creating and intersecting these TokenSets.
   * It is advised to keep the edit distance less than 3.
   *
   * @param {string} str - The string to create the token set from.
   * @param {number} editDistance - The allowed edit distance to match.
   * @returns {lunr.Vector}
   */
  lunr.TokenSet.fromFuzzyString = function (str, editDistance) {
    var root = new lunr.TokenSet();

    var stack = [{
      node: root,
      editsRemaining: editDistance,
      str: str
    }];

    while (stack.length) {
      var frame = stack.pop();

      // no edit
      if (frame.str.length > 0) {
        var char = frame.str.charAt(0),
            noEditNode;

        if (char in frame.node.edges) {
          noEditNode = frame.node.edges[char];
        } else {
          noEditNode = new lunr.TokenSet();
          frame.node.edges[char] = noEditNode;
        }

        if (frame.str.length == 1) {
          noEditNode.final = true;
        }

        stack.push({
          node: noEditNode,
          editsRemaining: frame.editsRemaining,
          str: frame.str.slice(1)
        });
      }

      // deletion
      // can only do a deletion if we have enough edits remaining
      // and if there are characters left to delete in the string
      if (frame.editsRemaining > 0 && frame.str.length > 1) {
        var char = frame.str.charAt(1),
            deletionNode;

        if (char in frame.node.edges) {
          deletionNode = frame.node.edges[char];
        } else {
          deletionNode = new lunr.TokenSet();
          frame.node.edges[char] = deletionNode;
        }

        if (frame.str.length <= 2) {
          deletionNode.final = true;
        } else {
          stack.push({
            node: deletionNode,
            editsRemaining: frame.editsRemaining - 1,
            str: frame.str.slice(2)
          });
        }
      }

      // deletion
      // just removing the last character from the str
      if (frame.editsRemaining > 0 && frame.str.length == 1) {
        frame.node.final = true;
      }

      // substitution
      // can only do a substitution if we have enough edits remaining
      // and if there are characters left to substitute
      if (frame.editsRemaining > 0 && frame.str.length >= 1) {
        if ("*" in frame.node.edges) {
          var substitutionNode = frame.node.edges["*"];
        } else {
          var substitutionNode = new lunr.TokenSet();
          frame.node.edges["*"] = substitutionNode;
        }

        if (frame.str.length == 1) {
          substitutionNode.final = true;
        } else {
          stack.push({
            node: substitutionNode,
            editsRemaining: frame.editsRemaining - 1,
            str: frame.str.slice(1)
          });
        }
      }

      // insertion
      // can only do insertion if there are edits remaining
      if (frame.editsRemaining > 0) {
        if ("*" in frame.node.edges) {
          var insertionNode = frame.node.edges["*"];
        } else {
          var insertionNode = new lunr.TokenSet();
          frame.node.edges["*"] = insertionNode;
        }

        if (frame.str.length == 0) {
          insertionNode.final = true;
        } else {
          stack.push({
            node: insertionNode,
            editsRemaining: frame.editsRemaining - 1,
            str: frame.str
          });
        }
      }

      // transposition
      // can only do a transposition if there are edits remaining
      // and there are enough characters to transpose
      if (frame.editsRemaining > 0 && frame.str.length > 1) {
        var charA = frame.str.charAt(0),
            charB = frame.str.charAt(1),
            transposeNode;

        if (charB in frame.node.edges) {
          transposeNode = frame.node.edges[charB];
        } else {
          transposeNode = new lunr.TokenSet();
          frame.node.edges[charB] = transposeNode;
        }

        if (frame.str.length == 1) {
          transposeNode.final = true;
        } else {
          stack.push({
            node: transposeNode,
            editsRemaining: frame.editsRemaining - 1,
            str: charA + frame.str.slice(2)
          });
        }
      }
    }

    return root;
  };

  /**
   * Creates a TokenSet from a string.
   *
   * The string may contain one or more wildcard characters (*)
   * that will allow wildcard matching when intersecting with
   * another TokenSet.
   *
   * @param {string} str - The string to create a TokenSet from.
   * @returns {lunr.TokenSet}
   */
  lunr.TokenSet.fromString = function (str) {
    var node = new lunr.TokenSet(),
        root = node;

    /*
     * Iterates through all characters within the passed string
     * appending a node for each character.
     *
     * When a wildcard character is found then a self
     * referencing edge is introduced to continually match
     * any number of any characters.
     */
    for (var i = 0, len = str.length; i < len; i++) {
      var char = str[i],
          final = i == len - 1;

      if (char == "*") {
        node.edges[char] = node;
        node.final = final;
      } else {
        var next = new lunr.TokenSet();
        next.final = final;

        node.edges[char] = next;
        node = next;
      }
    }

    return root;
  };

  /**
   * Converts this TokenSet into an array of strings
   * contained within the TokenSet.
   *
   * @returns {string[]}
   */
  lunr.TokenSet.prototype.toArray = function () {
    var words = [];

    var stack = [{
      prefix: "",
      node: this
    }];

    while (stack.length) {
      var frame = stack.pop(),
          edges = Object.keys(frame.node.edges),
          len = edges.length;

      if (frame.node.final) {
        /* In Safari, at this point the prefix is sometimes corrupted, see:
         * https://github.com/olivernn/lunr.js/issues/279 Calling any
         * String.prototype method forces Safari to "cast" this string to what
         * it's supposed to be, fixing the bug. */
        frame.prefix.charAt(0);
        words.push(frame.prefix);
      }

      for (var i = 0; i < len; i++) {
        var edge = edges[i];

        stack.push({
          prefix: frame.prefix.concat(edge),
          node: frame.node.edges[edge]
        });
      }
    }

    return words;
  };

  /**
   * Generates a string representation of a TokenSet.
   *
   * This is intended to allow TokenSets to be used as keys
   * in objects, largely to aid the construction and minimisation
   * of a TokenSet. As such it is not designed to be a human
   * friendly representation of the TokenSet.
   *
   * @returns {string}
   */
  lunr.TokenSet.prototype.toString = function () {
    // NOTE: Using Object.keys here as this.edges is very likely
    // to enter 'hash-mode' with many keys being added
    //
    // avoiding a for-in loop here as it leads to the function
    // being de-optimised (at least in V8). From some simple
    // benchmarks the performance is comparable, but allowing
    // V8 to optimize may mean easy performance wins in the future.

    if (this._str) {
      return this._str;
    }

    var str = this.final ? '1' : '0',
        labels = Object.keys(this.edges).sort(),
        len = labels.length;

    for (var i = 0; i < len; i++) {
      var label = labels[i],
          node = this.edges[label];

      str = str + label + node.id;
    }

    return str;
  };

  /**
   * Returns a new TokenSet that is the intersection of
   * this TokenSet and the passed TokenSet.
   *
   * This intersection will take into account any wildcards
   * contained within the TokenSet.
   *
   * @param {lunr.TokenSet} b - An other TokenSet to intersect with.
   * @returns {lunr.TokenSet}
   */
  lunr.TokenSet.prototype.intersect = function (b) {
    var output = new lunr.TokenSet(),
        frame = undefined;

    var stack = [{
      qNode: b,
      output: output,
      node: this
    }];

    while (stack.length) {
      frame = stack.pop();

      // NOTE: As with the #toString method, we are using
      // Object.keys and a for loop instead of a for-in loop
      // as both of these objects enter 'hash' mode, causing
      // the function to be de-optimised in V8
      var qEdges = Object.keys(frame.qNode.edges),
          qLen = qEdges.length,
          nEdges = Object.keys(frame.node.edges),
          nLen = nEdges.length;

      for (var q = 0; q < qLen; q++) {
        var qEdge = qEdges[q];

        for (var n = 0; n < nLen; n++) {
          var nEdge = nEdges[n];

          if (nEdge == qEdge || qEdge == '*') {
            var node = frame.node.edges[nEdge],
                qNode = frame.qNode.edges[qEdge],
                final = node.final && qNode.final,
                next = undefined;

            if (nEdge in frame.output.edges) {
              // an edge already exists for this character
              // no need to create a new node, just set the finality
              // bit unless this node is already final
              next = frame.output.edges[nEdge];
              next.final = next.final || final;
            } else {
              // no edge exists yet, must create one
              // set the finality bit and insert it
              // into the output
              next = new lunr.TokenSet();
              next.final = final;
              frame.output.edges[nEdge] = next;
            }

            stack.push({
              qNode: qNode,
              output: next,
              node: node
            });
          }
        }
      }
    }

    return output;
  };
  lunr.TokenSet.Builder = function () {
    this.previousWord = "";
    this.root = new lunr.TokenSet();
    this.uncheckedNodes = [];
    this.minimizedNodes = {};
  };

  lunr.TokenSet.Builder.prototype.insert = function (word) {
    var node,
        commonPrefix = 0;

    if (word < this.previousWord) {
      throw new Error("Out of order word insertion");
    }

    for (var i = 0; i < word.length && i < this.previousWord.length; i++) {
      if (word[i] != this.previousWord[i]) break;
      commonPrefix++;
    }

    this.minimize(commonPrefix);

    if (this.uncheckedNodes.length == 0) {
      node = this.root;
    } else {
      node = this.uncheckedNodes[this.uncheckedNodes.length - 1].child;
    }

    for (var i = commonPrefix; i < word.length; i++) {
      var nextNode = new lunr.TokenSet(),
          char = word[i];

      node.edges[char] = nextNode;

      this.uncheckedNodes.push({
        parent: node,
        char: char,
        child: nextNode
      });

      node = nextNode;
    }

    node.final = true;
    this.previousWord = word;
  };

  lunr.TokenSet.Builder.prototype.finish = function () {
    this.minimize(0);
  };

  lunr.TokenSet.Builder.prototype.minimize = function (downTo) {
    for (var i = this.uncheckedNodes.length - 1; i >= downTo; i--) {
      var node = this.uncheckedNodes[i],
          childKey = node.child.toString();

      if (childKey in this.minimizedNodes) {
        node.parent.edges[node.char] = this.minimizedNodes[childKey];
      } else {
        // Cache the key for this node since
        // we know it can't change anymore
        node.child._str = childKey;

        this.minimizedNodes[childKey] = node.child;
      }

      this.uncheckedNodes.pop();
    }
  };
  /*!
   * lunr.Index
   * Copyright (C) 2018 Oliver Nightingale
   */

  /**
   * An index contains the built index of all documents and provides a query interface
   * to the index.
   *
   * Usually instances of lunr.Index will not be created using this constructor, instead
   * lunr.Builder should be used to construct new indexes, or lunr.Index.load should be
   * used to load previously built and serialized indexes.
   *
   * @constructor
   * @param {Object} attrs - The attributes of the built search index.
   * @param {Object} attrs.invertedIndex - An index of term/field to document reference.
   * @param {Object<string, lunr.Vector>} attrs.fieldVectors - Field vectors
   * @param {lunr.TokenSet} attrs.tokenSet - An set of all corpus tokens.
   * @param {string[]} attrs.fields - The names of indexed document fields.
   * @param {lunr.Pipeline} attrs.pipeline - The pipeline to use for search terms.
   */
  lunr.Index = function (attrs) {
    this.invertedIndex = attrs.invertedIndex;
    this.fieldVectors = attrs.fieldVectors;
    this.tokenSet = attrs.tokenSet;
    this.fields = attrs.fields;
    this.pipeline = attrs.pipeline;
  };

  /**
   * A result contains details of a document matching a search query.
   * @typedef {Object} lunr.Index~Result
   * @property {string} ref - The reference of the document this result represents.
   * @property {number} score - A number between 0 and 1 representing how similar this document is to the query.
   * @property {lunr.MatchData} matchData - Contains metadata about this match including which term(s) caused the match.
   */

  /**
   * Although lunr provides the ability to create queries using lunr.Query, it also provides a simple
   * query language which itself is parsed into an instance of lunr.Query.
   *
   * For programmatically building queries it is advised to directly use lunr.Query, the query language
   * is best used for human entered text rather than program generated text.
   *
   * At its simplest queries can just be a single term, e.g. `hello`, multiple terms are also supported
   * and will be combined with OR, e.g `hello world` will match documents that contain either 'hello'
   * or 'world', though those that contain both will rank higher in the results.
   *
   * Wildcards can be included in terms to match one or more unspecified characters, these wildcards can
   * be inserted anywhere within the term, and more than one wildcard can exist in a single term. Adding
   * wildcards will increase the number of documents that will be found but can also have a negative
   * impact on query performance, especially with wildcards at the beginning of a term.
   *
   * Terms can be restricted to specific fields, e.g. `title:hello`, only documents with the term
   * hello in the title field will match this query. Using a field not present in the index will lead
   * to an error being thrown.
   *
   * Modifiers can also be added to terms, lunr supports edit distance and boost modifiers on terms. A term
   * boost will make documents matching that term score higher, e.g. `foo^5`. Edit distance is also supported
   * to provide fuzzy matching, e.g. 'hello~2' will match documents with hello with an edit distance of 2.
   * Avoid large values for edit distance to improve query performance.
   *
   * Each term also supports a presence modifier. By default a term's presence in document is optional, however
   * this can be changed to either required or prohibited. For a term's presence to be required in a document the
   * term should be prefixed with a '+', e.g. `+foo bar` is a search for documents that must contain 'foo' and
   * optionally contain 'bar'. Conversely a leading '-' sets the terms presence to prohibited, i.e. it must not
   * appear in a document, e.g. `-foo bar` is a search for documents that do not contain 'foo' but may contain 'bar'.
   *
   * To escape special characters the backslash character '\' can be used, this allows searches to include
   * characters that would normally be considered modifiers, e.g. `foo\~2` will search for a term "foo~2" instead
   * of attempting to apply a boost of 2 to the search term "foo".
   *
   * @typedef {string} lunr.Index~QueryString
   * @example <caption>Simple single term query</caption>
   * hello
   * @example <caption>Multiple term query</caption>
   * hello world
   * @example <caption>term scoped to a field</caption>
   * title:hello
   * @example <caption>term with a boost of 10</caption>
   * hello^10
   * @example <caption>term with an edit distance of 2</caption>
   * hello~2
   * @example <caption>terms with presence modifiers</caption>
   * -foo +bar baz
   */

  /**
   * Performs a search against the index using lunr query syntax.
   *
   * Results will be returned sorted by their score, the most relevant results
   * will be returned first.  For details on how the score is calculated, please see
   * the {@link https://lunrjs.com/guides/searching.html#scoring|guide}.
   *
   * For more programmatic querying use lunr.Index#query.
   *
   * @param {lunr.Index~QueryString} queryString - A string containing a lunr query.
   * @throws {lunr.QueryParseError} If the passed query string cannot be parsed.
   * @returns {lunr.Index~Result[]}
   */
  lunr.Index.prototype.search = function (queryString) {
    return this.query(function (query) {
      var parser = new lunr.QueryParser(queryString, query);
      parser.parse();
    });
  };

  /**
   * A query builder callback provides a query object to be used to express
   * the query to perform on the index.
   *
   * @callback lunr.Index~queryBuilder
   * @param {lunr.Query} query - The query object to build up.
   * @this lunr.Query
   */

  /**
   * Performs a query against the index using the yielded lunr.Query object.
   *
   * If performing programmatic queries against the index, this method is preferred
   * over lunr.Index#search so as to avoid the additional query parsing overhead.
   *
   * A query object is yielded to the supplied function which should be used to
   * express the query to be run against the index.
   *
   * Note that although this function takes a callback parameter it is _not_ an
   * asynchronous operation, the callback is just yielded a query object to be
   * customized.
   *
   * @param {lunr.Index~queryBuilder} fn - A function that is used to build the query.
   * @returns {lunr.Index~Result[]}
   */
  lunr.Index.prototype.query = function (fn) {
    // for each query clause
    // * process terms
    // * expand terms from token set
    // * find matching documents and metadata
    // * get document vectors
    // * score documents

    var query = new lunr.Query(this.fields),
        matchingFields = Object.create(null),
        queryVectors = Object.create(null),
        termFieldCache = Object.create(null),
        requiredMatches = Object.create(null),
        prohibitedMatches = Object.create(null);

    /*
     * To support field level boosts a query vector is created per
     * field. An empty vector is eagerly created to support negated
     * queries.
     */
    for (var i = 0; i < this.fields.length; i++) {
      queryVectors[this.fields[i]] = new lunr.Vector();
    }

    fn.call(query, query);

    for (var i = 0; i < query.clauses.length; i++) {
      /*
       * Unless the pipeline has been disabled for this term, which is
       * the case for terms with wildcards, we need to pass the clause
       * term through the search pipeline. A pipeline returns an array
       * of processed terms. Pipeline functions may expand the passed
       * term, which means we may end up performing multiple index lookups
       * for a single query term.
       */
      var clause = query.clauses[i],
          terms = null,
          clauseMatches = lunr.Set.complete;

      if (clause.usePipeline) {
        terms = this.pipeline.runString(clause.term, {
          fields: clause.fields
        });
      } else {
        terms = [clause.term];
      }

      for (var m = 0; m < terms.length; m++) {
        var term = terms[m];

        /*
         * Each term returned from the pipeline needs to use the same query
         * clause object, e.g. the same boost and or edit distance. The
         * simplest way to do this is to re-use the clause object but mutate
         * its term property.
         */
        clause.term = term;

        /*
         * From the term in the clause we create a token set which will then
         * be used to intersect the indexes token set to get a list of terms
         * to lookup in the inverted index
         */
        var termTokenSet = lunr.TokenSet.fromClause(clause),
            expandedTerms = this.tokenSet.intersect(termTokenSet).toArray();

        /*
         * If a term marked as required does not exist in the tokenSet it is
         * impossible for the search to return any matches. We set all the field
         * scoped required matches set to empty and stop examining any further
         * clauses.
         */
        if (expandedTerms.length === 0 && clause.presence === lunr.Query.presence.REQUIRED) {
          for (var k = 0; k < clause.fields.length; k++) {
            var field = clause.fields[k];
            requiredMatches[field] = lunr.Set.empty;
          }

          break;
        }

        for (var j = 0; j < expandedTerms.length; j++) {
          /*
           * For each term get the posting and termIndex, this is required for
           * building the query vector.
           */
          var expandedTerm = expandedTerms[j],
              posting = this.invertedIndex[expandedTerm],
              termIndex = posting._index;

          for (var k = 0; k < clause.fields.length; k++) {
            /*
             * For each field that this query term is scoped by (by default
             * all fields are in scope) we need to get all the document refs
             * that have this term in that field.
             *
             * The posting is the entry in the invertedIndex for the matching
             * term from above.
             */
            var field = clause.fields[k],
                fieldPosting = posting[field],
                matchingDocumentRefs = Object.keys(fieldPosting),
                termField = expandedTerm + "/" + field,
                matchingDocumentsSet = new lunr.Set(matchingDocumentRefs);

            /*
             * if the presence of this term is required ensure that the matching
             * documents are added to the set of required matches for this clause.
             *
             */
            if (clause.presence == lunr.Query.presence.REQUIRED) {
              clauseMatches = clauseMatches.union(matchingDocumentsSet);

              if (requiredMatches[field] === undefined) {
                requiredMatches[field] = lunr.Set.complete;
              }
            }

            /*
             * if the presence of this term is prohibited ensure that the matching
             * documents are added to the set of prohibited matches for this field,
             * creating that set if it does not yet exist.
             */
            if (clause.presence == lunr.Query.presence.PROHIBITED) {
              if (prohibitedMatches[field] === undefined) {
                prohibitedMatches[field] = lunr.Set.empty;
              }

              prohibitedMatches[field] = prohibitedMatches[field].union(matchingDocumentsSet);

              /*
               * Prohibited matches should not be part of the query vector used for
               * similarity scoring and no metadata should be extracted so we continue
               * to the next field
               */
              continue;
            }

            /*
             * The query field vector is populated using the termIndex found for
             * the term and a unit value with the appropriate boost applied.
             * Using upsert because there could already be an entry in the vector
             * for the term we are working with. In that case we just add the scores
             * together.
             */
            queryVectors[field].upsert(termIndex, clause.boost, function (a, b) {
              return a + b;
            });

            /**
             * If we've already seen this term, field combo then we've already collected
             * the matching documents and metadata, no need to go through all that again
             */
            if (termFieldCache[termField]) {
              continue;
            }

            for (var l = 0; l < matchingDocumentRefs.length; l++) {
              /*
               * All metadata for this term/field/document triple
               * are then extracted and collected into an instance
               * of lunr.MatchData ready to be returned in the query
               * results
               */
              var matchingDocumentRef = matchingDocumentRefs[l],
                  matchingFieldRef = new lunr.FieldRef(matchingDocumentRef, field),
                  metadata = fieldPosting[matchingDocumentRef],
                  fieldMatch;

              if ((fieldMatch = matchingFields[matchingFieldRef]) === undefined) {
                matchingFields[matchingFieldRef] = new lunr.MatchData(expandedTerm, field, metadata);
              } else {
                fieldMatch.add(expandedTerm, field, metadata);
              }
            }

            termFieldCache[termField] = true;
          }
        }
      }

      /**
       * If the presence was required we need to update the requiredMatches field sets.
       * We do this after all fields for the term have collected their matches because
       * the clause terms presence is required in _any_ of the fields not _all_ of the
       * fields.
       */
      if (clause.presence === lunr.Query.presence.REQUIRED) {
        for (var k = 0; k < clause.fields.length; k++) {
          var field = clause.fields[k];
          requiredMatches[field] = requiredMatches[field].intersect(clauseMatches);
        }
      }
    }

    /**
     * Need to combine the field scoped required and prohibited
     * matching documents into a global set of required and prohibited
     * matches
     */
    var allRequiredMatches = lunr.Set.complete,
        allProhibitedMatches = lunr.Set.empty;

    for (var i = 0; i < this.fields.length; i++) {
      var field = this.fields[i];

      if (requiredMatches[field]) {
        allRequiredMatches = allRequiredMatches.intersect(requiredMatches[field]);
      }

      if (prohibitedMatches[field]) {
        allProhibitedMatches = allProhibitedMatches.union(prohibitedMatches[field]);
      }
    }

    var matchingFieldRefs = Object.keys(matchingFields),
        results = [],
        matches = Object.create(null);

    /*
     * If the query is negated (contains only prohibited terms)
     * we need to get _all_ fieldRefs currently existing in the
     * index. This is only done when we know that the query is
     * entirely prohibited terms to avoid any cost of getting all
     * fieldRefs unnecessarily.
     *
     * Additionally, blank MatchData must be created to correctly
     * populate the results.
     */
    if (query.isNegated()) {
      matchingFieldRefs = Object.keys(this.fieldVectors);

      for (var i = 0; i < matchingFieldRefs.length; i++) {
        var matchingFieldRef = matchingFieldRefs[i];
        var fieldRef = lunr.FieldRef.fromString(matchingFieldRef);
        matchingFields[matchingFieldRef] = new lunr.MatchData();
      }
    }

    for (var i = 0; i < matchingFieldRefs.length; i++) {
      /*
       * Currently we have document fields that match the query, but we
       * need to return documents. The matchData and scores are combined
       * from multiple fields belonging to the same document.
       *
       * Scores are calculated by field, using the query vectors created
       * above, and combined into a final document score using addition.
       */
      var fieldRef = lunr.FieldRef.fromString(matchingFieldRefs[i]),
          docRef = fieldRef.docRef;

      if (!allRequiredMatches.contains(docRef)) {
        continue;
      }

      if (allProhibitedMatches.contains(docRef)) {
        continue;
      }

      var fieldVector = this.fieldVectors[fieldRef],
          score = queryVectors[fieldRef.fieldName].similarity(fieldVector),
          docMatch;

      if ((docMatch = matches[docRef]) !== undefined) {
        docMatch.score += score;
        docMatch.matchData.combine(matchingFields[fieldRef]);
      } else {
        var match = {
          ref: docRef,
          score: score,
          matchData: matchingFields[fieldRef]
        };
        matches[docRef] = match;
        results.push(match);
      }
    }

    /*
     * Sort the results objects by score, highest first.
     */
    return results.sort(function (a, b) {
      return b.score - a.score;
    });
  };

  /**
   * Prepares the index for JSON serialization.
   *
   * The schema for this JSON blob will be described in a
   * separate JSON schema file.
   *
   * @returns {Object}
   */
  lunr.Index.prototype.toJSON = function () {
    var invertedIndex = Object.keys(this.invertedIndex).sort().map(function (term) {
      return [term, this.invertedIndex[term]];
    }, this);

    var fieldVectors = Object.keys(this.fieldVectors).map(function (ref) {
      return [ref, this.fieldVectors[ref].toJSON()];
    }, this);

    return {
      version: lunr.version,
      fields: this.fields,
      fieldVectors: fieldVectors,
      invertedIndex: invertedIndex,
      pipeline: this.pipeline.toJSON()
    };
  };

  /**
   * Loads a previously serialized lunr.Index
   *
   * @param {Object} serializedIndex - A previously serialized lunr.Index
   * @returns {lunr.Index}
   */
  lunr.Index.load = function (serializedIndex) {
    var attrs = {},
        fieldVectors = {},
        serializedVectors = serializedIndex.fieldVectors,
        invertedIndex = Object.create(null),
        serializedInvertedIndex = serializedIndex.invertedIndex,
        tokenSetBuilder = new lunr.TokenSet.Builder(),
        pipeline = lunr.Pipeline.load(serializedIndex.pipeline);

    if (serializedIndex.version != lunr.version) {
      lunr.utils.warn("Version mismatch when loading serialised index. Current version of lunr '" + lunr.version + "' does not match serialized index '" + serializedIndex.version + "'");
    }

    for (var i = 0; i < serializedVectors.length; i++) {
      var tuple = serializedVectors[i],
          ref = tuple[0],
          elements = tuple[1];

      fieldVectors[ref] = new lunr.Vector(elements);
    }

    for (var i = 0; i < serializedInvertedIndex.length; i++) {
      var tuple = serializedInvertedIndex[i],
          term = tuple[0],
          posting = tuple[1];

      tokenSetBuilder.insert(term);
      invertedIndex[term] = posting;
    }

    tokenSetBuilder.finish();

    attrs.fields = serializedIndex.fields;

    attrs.fieldVectors = fieldVectors;
    attrs.invertedIndex = invertedIndex;
    attrs.tokenSet = tokenSetBuilder.root;
    attrs.pipeline = pipeline;

    return new lunr.Index(attrs);
  };
  /*!
   * lunr.Builder
   * Copyright (C) 2018 Oliver Nightingale
   */

  /**
   * lunr.Builder performs indexing on a set of documents and
   * returns instances of lunr.Index ready for querying.
   *
   * All configuration of the index is done via the builder, the
   * fields to index, the document reference, the text processing
   * pipeline and document scoring parameters are all set on the
   * builder before indexing.
   *
   * @constructor
   * @property {string} _ref - Internal reference to the document reference field.
   * @property {string[]} _fields - Internal reference to the document fields to index.
   * @property {object} invertedIndex - The inverted index maps terms to document fields.
   * @property {object} documentTermFrequencies - Keeps track of document term frequencies.
   * @property {object} documentLengths - Keeps track of the length of documents added to the index.
   * @property {lunr.tokenizer} tokenizer - Function for splitting strings into tokens for indexing.
   * @property {lunr.Pipeline} pipeline - The pipeline performs text processing on tokens before indexing.
   * @property {lunr.Pipeline} searchPipeline - A pipeline for processing search terms before querying the index.
   * @property {number} documentCount - Keeps track of the total number of documents indexed.
   * @property {number} _b - A parameter to control field length normalization, setting this to 0 disabled normalization, 1 fully normalizes field lengths, the default value is 0.75.
   * @property {number} _k1 - A parameter to control how quickly an increase in term frequency results in term frequency saturation, the default value is 1.2.
   * @property {number} termIndex - A counter incremented for each unique term, used to identify a terms position in the vector space.
   * @property {array} metadataWhitelist - A list of metadata keys that have been whitelisted for entry in the index.
   */
  lunr.Builder = function () {
    this._ref = "id";
    this._fields = Object.create(null);
    this._documents = Object.create(null);
    this.invertedIndex = Object.create(null);
    this.fieldTermFrequencies = {};
    this.fieldLengths = {};
    this.tokenizer = lunr.tokenizer;
    this.pipeline = new lunr.Pipeline();
    this.searchPipeline = new lunr.Pipeline();
    this.documentCount = 0;
    this._b = 0.75;
    this._k1 = 1.2;
    this.termIndex = 0;
    this.metadataWhitelist = [];
  };

  /**
   * Sets the document field used as the document reference. Every document must have this field.
   * The type of this field in the document should be a string, if it is not a string it will be
   * coerced into a string by calling toString.
   *
   * The default ref is 'id'.
   *
   * The ref should _not_ be changed during indexing, it should be set before any documents are
   * added to the index. Changing it during indexing can lead to inconsistent results.
   *
   * @param {string} ref - The name of the reference field in the document.
   */
  lunr.Builder.prototype.ref = function (ref) {
    this._ref = ref;
  };

  /**
   * A function that is used to extract a field from a document.
   *
   * Lunr expects a field to be at the top level of a document, if however the field
   * is deeply nested within a document an extractor function can be used to extract
   * the right field for indexing.
   *
   * @callback fieldExtractor
   * @param {object} doc - The document being added to the index.
   * @returns {?(string|object|object[])} obj - The object that will be indexed for this field.
   * @example <caption>Extracting a nested field</caption>
   * function (doc) { return doc.nested.field }
   */

  /**
   * Adds a field to the list of document fields that will be indexed. Every document being
   * indexed should have this field. Null values for this field in indexed documents will
   * not cause errors but will limit the chance of that document being retrieved by searches.
   *
   * All fields should be added before adding documents to the index. Adding fields after
   * a document has been indexed will have no effect on already indexed documents.
   *
   * Fields can be boosted at build time. This allows terms within that field to have more
   * importance when ranking search results. Use a field boost to specify that matches within
   * one field are more important than other fields.
   *
   * @param {string} fieldName - The name of a field to index in all documents.
   * @param {object} attributes - Optional attributes associated with this field.
   * @param {number} [attributes.boost=1] - Boost applied to all terms within this field.
   * @param {fieldExtractor} [attributes.extractor] - Function to extract a field from a document.
   * @throws {RangeError} fieldName cannot contain unsupported characters '/'
   */
  lunr.Builder.prototype.field = function (fieldName, attributes) {
    if (/\//.test(fieldName)) {
      throw new RangeError("Field '" + fieldName + "' contains illegal character '/'");
    }

    this._fields[fieldName] = attributes || {};
  };

  /**
   * A parameter to tune the amount of field length normalisation that is applied when
   * calculating relevance scores. A value of 0 will completely disable any normalisation
   * and a value of 1 will fully normalise field lengths. The default is 0.75. Values of b
   * will be clamped to the range 0 - 1.
   *
   * @param {number} number - The value to set for this tuning parameter.
   */
  lunr.Builder.prototype.b = function (number) {
    if (number < 0) {
      this._b = 0;
    } else if (number > 1) {
      this._b = 1;
    } else {
      this._b = number;
    }
  };

  /**
   * A parameter that controls the speed at which a rise in term frequency results in term
   * frequency saturation. The default value is 1.2. Setting this to a higher value will give
   * slower saturation levels, a lower value will result in quicker saturation.
   *
   * @param {number} number - The value to set for this tuning parameter.
   */
  lunr.Builder.prototype.k1 = function (number) {
    this._k1 = number;
  };

  /**
   * Adds a document to the index.
   *
   * Before adding fields to the index the index should have been fully setup, with the document
   * ref and all fields to index already having been specified.
   *
   * The document must have a field name as specified by the ref (by default this is 'id') and
   * it should have all fields defined for indexing, though null or undefined values will not
   * cause errors.
   *
   * Entire documents can be boosted at build time. Applying a boost to a document indicates that
   * this document should rank higher in search results than other documents.
   *
   * @param {object} doc - The document to add to the index.
   * @param {object} attributes - Optional attributes associated with this document.
   * @param {number} [attributes.boost=1] - Boost applied to all terms within this document.
   */
  lunr.Builder.prototype.add = function (doc, attributes) {
    var docRef = doc[this._ref],
        fields = Object.keys(this._fields);

    this._documents[docRef] = attributes || {};
    this.documentCount += 1;

    for (var i = 0; i < fields.length; i++) {
      var fieldName = fields[i],
          extractor = this._fields[fieldName].extractor,
          field = extractor ? extractor(doc) : doc[fieldName],
          tokens = this.tokenizer(field, {
        fields: [fieldName]
      }),
          terms = this.pipeline.run(tokens),
          fieldRef = new lunr.FieldRef(docRef, fieldName),
          fieldTerms = Object.create(null);

      this.fieldTermFrequencies[fieldRef] = fieldTerms;
      this.fieldLengths[fieldRef] = 0;

      // store the length of this field for this document
      this.fieldLengths[fieldRef] += terms.length;

      // calculate term frequencies for this field
      for (var j = 0; j < terms.length; j++) {
        var term = terms[j];

        if (fieldTerms[term] == undefined) {
          fieldTerms[term] = 0;
        }

        fieldTerms[term] += 1;

        // add to inverted index
        // create an initial posting if one doesn't exist
        if (this.invertedIndex[term] == undefined) {
          var posting = Object.create(null);
          posting["_index"] = this.termIndex;
          this.termIndex += 1;

          for (var k = 0; k < fields.length; k++) {
            posting[fields[k]] = Object.create(null);
          }

          this.invertedIndex[term] = posting;
        }

        // add an entry for this term/fieldName/docRef to the invertedIndex
        if (this.invertedIndex[term][fieldName][docRef] == undefined) {
          this.invertedIndex[term][fieldName][docRef] = Object.create(null);
        }

        // store all whitelisted metadata about this token in the
        // inverted index
        for (var l = 0; l < this.metadataWhitelist.length; l++) {
          var metadataKey = this.metadataWhitelist[l],
              metadata = term.metadata[metadataKey];

          if (this.invertedIndex[term][fieldName][docRef][metadataKey] == undefined) {
            this.invertedIndex[term][fieldName][docRef][metadataKey] = [];
          }

          this.invertedIndex[term][fieldName][docRef][metadataKey].push(metadata);
        }
      }
    }
  };

  /**
   * Calculates the average document length for this index
   *
   * @private
   */
  lunr.Builder.prototype.calculateAverageFieldLengths = function () {

    var fieldRefs = Object.keys(this.fieldLengths),
        numberOfFields = fieldRefs.length,
        accumulator = {},
        documentsWithField = {};

    for (var i = 0; i < numberOfFields; i++) {
      var fieldRef = lunr.FieldRef.fromString(fieldRefs[i]),
          field = fieldRef.fieldName;

      documentsWithField[field] || (documentsWithField[field] = 0);
      documentsWithField[field] += 1;

      accumulator[field] || (accumulator[field] = 0);
      accumulator[field] += this.fieldLengths[fieldRef];
    }

    var fields = Object.keys(this._fields);

    for (var i = 0; i < fields.length; i++) {
      var fieldName = fields[i];
      accumulator[fieldName] = accumulator[fieldName] / documentsWithField[fieldName];
    }

    this.averageFieldLength = accumulator;
  };

  /**
   * Builds a vector space model of every document using lunr.Vector
   *
   * @private
   */
  lunr.Builder.prototype.createFieldVectors = function () {
    var fieldVectors = {},
        fieldRefs = Object.keys(this.fieldTermFrequencies),
        fieldRefsLength = fieldRefs.length,
        termIdfCache = Object.create(null);

    for (var i = 0; i < fieldRefsLength; i++) {
      var fieldRef = lunr.FieldRef.fromString(fieldRefs[i]),
          fieldName = fieldRef.fieldName,
          fieldLength = this.fieldLengths[fieldRef],
          fieldVector = new lunr.Vector(),
          termFrequencies = this.fieldTermFrequencies[fieldRef],
          terms = Object.keys(termFrequencies),
          termsLength = terms.length;

      var fieldBoost = this._fields[fieldName].boost || 1,
          docBoost = this._documents[fieldRef.docRef].boost || 1;

      for (var j = 0; j < termsLength; j++) {
        var term = terms[j],
            tf = termFrequencies[term],
            termIndex = this.invertedIndex[term]._index,
            idf,
            score,
            scoreWithPrecision;

        if (termIdfCache[term] === undefined) {
          idf = lunr.idf(this.invertedIndex[term], this.documentCount);
          termIdfCache[term] = idf;
        } else {
          idf = termIdfCache[term];
        }

        score = idf * ((this._k1 + 1) * tf) / (this._k1 * (1 - this._b + this._b * (fieldLength / this.averageFieldLength[fieldName])) + tf);
        score *= fieldBoost;
        score *= docBoost;
        scoreWithPrecision = Math.round(score * 1000) / 1000;
        // Converts 1.23456789 to 1.234.
        // Reducing the precision so that the vectors take up less
        // space when serialised. Doing it now so that they behave
        // the same before and after serialisation. Also, this is
        // the fastest approach to reducing a number's precision in
        // JavaScript.

        fieldVector.insert(termIndex, scoreWithPrecision);
      }

      fieldVectors[fieldRef] = fieldVector;
    }

    this.fieldVectors = fieldVectors;
  };

  /**
   * Creates a token set of all tokens in the index using lunr.TokenSet
   *
   * @private
   */
  lunr.Builder.prototype.createTokenSet = function () {
    this.tokenSet = lunr.TokenSet.fromArray(Object.keys(this.invertedIndex).sort());
  };

  /**
   * Builds the index, creating an instance of lunr.Index.
   *
   * This completes the indexing process and should only be called
   * once all documents have been added to the index.
   *
   * @returns {lunr.Index}
   */
  lunr.Builder.prototype.build = function () {
    this.calculateAverageFieldLengths();
    this.createFieldVectors();
    this.createTokenSet();

    return new lunr.Index({
      invertedIndex: this.invertedIndex,
      fieldVectors: this.fieldVectors,
      tokenSet: this.tokenSet,
      fields: Object.keys(this._fields),
      pipeline: this.searchPipeline
    });
  };

  /**
   * Applies a plugin to the index builder.
   *
   * A plugin is a function that is called with the index builder as its context.
   * Plugins can be used to customise or extend the behaviour of the index
   * in some way. A plugin is just a function, that encapsulated the custom
   * behaviour that should be applied when building the index.
   *
   * The plugin function will be called with the index builder as its argument, additional
   * arguments can also be passed when calling use. The function will be called
   * with the index builder as its context.
   *
   * @param {Function} plugin The plugin to apply.
   */
  lunr.Builder.prototype.use = function (fn) {
    var args = Array.prototype.slice.call(arguments, 1);
    args.unshift(this);
    fn.apply(this, args);
  };
  /**
   * Contains and collects metadata about a matching document.
   * A single instance of lunr.MatchData is returned as part of every
   * lunr.Index~Result.
   *
   * @constructor
   * @param {string} term - The term this match data is associated with
   * @param {string} field - The field in which the term was found
   * @param {object} metadata - The metadata recorded about this term in this field
   * @property {object} metadata - A cloned collection of metadata associated with this document.
   * @see {@link lunr.Index~Result}
   */
  lunr.MatchData = function (term, field, metadata) {
    var clonedMetadata = Object.create(null),
        metadataKeys = Object.keys(metadata || {});

    // Cloning the metadata to prevent the original
    // being mutated during match data combination.
    // Metadata is kept in an array within the inverted
    // index so cloning the data can be done with
    // Array#slice
    for (var i = 0; i < metadataKeys.length; i++) {
      var key = metadataKeys[i];
      clonedMetadata[key] = metadata[key].slice();
    }

    this.metadata = Object.create(null);

    if (term !== undefined) {
      this.metadata[term] = Object.create(null);
      this.metadata[term][field] = clonedMetadata;
    }
  };

  /**
   * An instance of lunr.MatchData will be created for every term that matches a
   * document. However only one instance is required in a lunr.Index~Result. This
   * method combines metadata from another instance of lunr.MatchData with this
   * objects metadata.
   *
   * @param {lunr.MatchData} otherMatchData - Another instance of match data to merge with this one.
   * @see {@link lunr.Index~Result}
   */
  lunr.MatchData.prototype.combine = function (otherMatchData) {
    var terms = Object.keys(otherMatchData.metadata);

    for (var i = 0; i < terms.length; i++) {
      var term = terms[i],
          fields = Object.keys(otherMatchData.metadata[term]);

      if (this.metadata[term] == undefined) {
        this.metadata[term] = Object.create(null);
      }

      for (var j = 0; j < fields.length; j++) {
        var field = fields[j],
            keys = Object.keys(otherMatchData.metadata[term][field]);

        if (this.metadata[term][field] == undefined) {
          this.metadata[term][field] = Object.create(null);
        }

        for (var k = 0; k < keys.length; k++) {
          var key = keys[k];

          if (this.metadata[term][field][key] == undefined) {
            this.metadata[term][field][key] = otherMatchData.metadata[term][field][key];
          } else {
            this.metadata[term][field][key] = this.metadata[term][field][key].concat(otherMatchData.metadata[term][field][key]);
          }
        }
      }
    }
  };

  /**
   * Add metadata for a term/field pair to this instance of match data.
   *
   * @param {string} term - The term this match data is associated with
   * @param {string} field - The field in which the term was found
   * @param {object} metadata - The metadata recorded about this term in this field
   */
  lunr.MatchData.prototype.add = function (term, field, metadata) {
    if (!(term in this.metadata)) {
      this.metadata[term] = Object.create(null);
      this.metadata[term][field] = metadata;
      return;
    }

    if (!(field in this.metadata[term])) {
      this.metadata[term][field] = metadata;
      return;
    }

    var metadataKeys = Object.keys(metadata);

    for (var i = 0; i < metadataKeys.length; i++) {
      var key = metadataKeys[i];

      if (key in this.metadata[term][field]) {
        this.metadata[term][field][key] = this.metadata[term][field][key].concat(metadata[key]);
      } else {
        this.metadata[term][field][key] = metadata[key];
      }
    }
  };
  /**
   * A lunr.Query provides a programmatic way of defining queries to be performed
   * against a {@link lunr.Index}.
   *
   * Prefer constructing a lunr.Query using the {@link lunr.Index#query} method
   * so the query object is pre-initialized with the right index fields.
   *
   * @constructor
   * @property {lunr.Query~Clause[]} clauses - An array of query clauses.
   * @property {string[]} allFields - An array of all available fields in a lunr.Index.
   */
  lunr.Query = function (allFields) {
    this.clauses = [];
    this.allFields = allFields;
  };

  /**
   * Constants for indicating what kind of automatic wildcard insertion will be used when constructing a query clause.
   *
   * This allows wildcards to be added to the beginning and end of a term without having to manually do any string
   * concatenation.
   *
   * The wildcard constants can be bitwise combined to select both leading and trailing wildcards.
   *
   * @constant
   * @default
   * @property {number} wildcard.NONE - The term will have no wildcards inserted, this is the default behaviour
   * @property {number} wildcard.LEADING - Prepend the term with a wildcard, unless a leading wildcard already exists
   * @property {number} wildcard.TRAILING - Append a wildcard to the term, unless a trailing wildcard already exists
   * @see lunr.Query~Clause
   * @see lunr.Query#clause
   * @see lunr.Query#term
   * @example <caption>query term with trailing wildcard</caption>
   * query.term('foo', { wildcard: lunr.Query.wildcard.TRAILING })
   * @example <caption>query term with leading and trailing wildcard</caption>
   * query.term('foo', {
   *   wildcard: lunr.Query.wildcard.LEADING | lunr.Query.wildcard.TRAILING
   * })
   */

  lunr.Query.wildcard = new String("*");
  lunr.Query.wildcard.NONE = 0;
  lunr.Query.wildcard.LEADING = 1;
  lunr.Query.wildcard.TRAILING = 2;

  /**
   * Constants for indicating what kind of presence a term must have in matching documents.
   *
   * @constant
   * @enum {number}
   * @see lunr.Query~Clause
   * @see lunr.Query#clause
   * @see lunr.Query#term
   * @example <caption>query term with required presence</caption>
   * query.term('foo', { presence: lunr.Query.presence.REQUIRED })
   */
  lunr.Query.presence = {
    /**
     * Term's presence in a document is optional, this is the default value.
     */
    OPTIONAL: 1,

    /**
     * Term's presence in a document is required, documents that do not contain
     * this term will not be returned.
     */
    REQUIRED: 2,

    /**
     * Term's presence in a document is prohibited, documents that do contain
     * this term will not be returned.
     */
    PROHIBITED: 3

    /**
     * A single clause in a {@link lunr.Query} contains a term and details on how to
     * match that term against a {@link lunr.Index}.
     *
     * @typedef {Object} lunr.Query~Clause
     * @property {string[]} fields - The fields in an index this clause should be matched against.
     * @property {number} [boost=1] - Any boost that should be applied when matching this clause.
     * @property {number} [editDistance] - Whether the term should have fuzzy matching applied, and how fuzzy the match should be.
     * @property {boolean} [usePipeline] - Whether the term should be passed through the search pipeline.
     * @property {number} [wildcard=lunr.Query.wildcard.NONE] - Whether the term should have wildcards appended or prepended.
     * @property {number} [presence=lunr.Query.presence.OPTIONAL] - The terms presence in any matching documents.
     */

    /**
     * Adds a {@link lunr.Query~Clause} to this query.
     *
     * Unless the clause contains the fields to be matched all fields will be matched. In addition
     * a default boost of 1 is applied to the clause.
     *
     * @param {lunr.Query~Clause} clause - The clause to add to this query.
     * @see lunr.Query~Clause
     * @returns {lunr.Query}
     */
  };lunr.Query.prototype.clause = function (clause) {
    if (!('fields' in clause)) {
      clause.fields = this.allFields;
    }

    if (!('boost' in clause)) {
      clause.boost = 1;
    }

    if (!('usePipeline' in clause)) {
      clause.usePipeline = true;
    }

    if (!('wildcard' in clause)) {
      clause.wildcard = lunr.Query.wildcard.NONE;
    }

    if (clause.wildcard & lunr.Query.wildcard.LEADING && clause.term.charAt(0) != lunr.Query.wildcard) {
      clause.term = "*" + clause.term;
    }

    if (clause.wildcard & lunr.Query.wildcard.TRAILING && clause.term.slice(-1) != lunr.Query.wildcard) {
      clause.term = "" + clause.term + "*";
    }

    if (!('presence' in clause)) {
      clause.presence = lunr.Query.presence.OPTIONAL;
    }

    this.clauses.push(clause);

    return this;
  };

  /**
   * A negated query is one in which every clause has a presence of
   * prohibited. These queries require some special processing to return
   * the expected results.
   *
   * @returns boolean
   */
  lunr.Query.prototype.isNegated = function () {
    for (var i = 0; i < this.clauses.length; i++) {
      if (this.clauses[i].presence != lunr.Query.presence.PROHIBITED) {
        return false;
      }
    }

    return true;
  };

  /**
   * Adds a term to the current query, under the covers this will create a {@link lunr.Query~Clause}
   * to the list of clauses that make up this query.
   *
   * The term is used as is, i.e. no tokenization will be performed by this method. Instead conversion
   * to a token or token-like string should be done before calling this method.
   *
   * The term will be converted to a string by calling `toString`. Multiple terms can be passed as an
   * array, each term in the array will share the same options.
   *
   * @param {object|object[]} term - The term(s) to add to the query.
   * @param {object} [options] - Any additional properties to add to the query clause.
   * @returns {lunr.Query}
   * @see lunr.Query#clause
   * @see lunr.Query~Clause
   * @example <caption>adding a single term to a query</caption>
   * query.term("foo")
   * @example <caption>adding a single term to a query and specifying search fields, term boost and automatic trailing wildcard</caption>
   * query.term("foo", {
   *   fields: ["title"],
   *   boost: 10,
   *   wildcard: lunr.Query.wildcard.TRAILING
   * })
   * @example <caption>using lunr.tokenizer to convert a string to tokens before using them as terms</caption>
   * query.term(lunr.tokenizer("foo bar"))
   */
  lunr.Query.prototype.term = function (term, options) {
    if (Array.isArray(term)) {
      term.forEach(function (t) {
        this.term(t, lunr.utils.clone(options));
      }, this);
      return this;
    }

    var clause = options || {};
    clause.term = term.toString();

    this.clause(clause);

    return this;
  };
  lunr.QueryParseError = function (message, start, end) {
    this.name = "QueryParseError";
    this.message = message;
    this.start = start;
    this.end = end;
  };

  lunr.QueryParseError.prototype = new Error();
  lunr.QueryLexer = function (str) {
    this.lexemes = [];
    this.str = str;
    this.length = str.length;
    this.pos = 0;
    this.start = 0;
    this.escapeCharPositions = [];
  };

  lunr.QueryLexer.prototype.run = function () {
    var state = lunr.QueryLexer.lexText;

    while (state) {
      state = state(this);
    }
  };

  lunr.QueryLexer.prototype.sliceString = function () {
    var subSlices = [],
        sliceStart = this.start,
        sliceEnd = this.pos;

    for (var i = 0; i < this.escapeCharPositions.length; i++) {
      sliceEnd = this.escapeCharPositions[i];
      subSlices.push(this.str.slice(sliceStart, sliceEnd));
      sliceStart = sliceEnd + 1;
    }

    subSlices.push(this.str.slice(sliceStart, this.pos));
    this.escapeCharPositions.length = 0;

    return subSlices.join('');
  };

  lunr.QueryLexer.prototype.emit = function (type) {
    this.lexemes.push({
      type: type,
      str: this.sliceString(),
      start: this.start,
      end: this.pos
    });

    this.start = this.pos;
  };

  lunr.QueryLexer.prototype.escapeCharacter = function () {
    this.escapeCharPositions.push(this.pos - 1);
    this.pos += 1;
  };

  lunr.QueryLexer.prototype.next = function () {
    if (this.pos >= this.length) {
      return lunr.QueryLexer.EOS;
    }

    var char = this.str.charAt(this.pos);
    this.pos += 1;
    return char;
  };

  lunr.QueryLexer.prototype.width = function () {
    return this.pos - this.start;
  };

  lunr.QueryLexer.prototype.ignore = function () {
    if (this.start == this.pos) {
      this.pos += 1;
    }

    this.start = this.pos;
  };

  lunr.QueryLexer.prototype.backup = function () {
    this.pos -= 1;
  };

  lunr.QueryLexer.prototype.acceptDigitRun = function () {
    var char, charCode;

    do {
      char = this.next();
      charCode = char.charCodeAt(0);
    } while (charCode > 47 && charCode < 58);

    if (char != lunr.QueryLexer.EOS) {
      this.backup();
    }
  };

  lunr.QueryLexer.prototype.more = function () {
    return this.pos < this.length;
  };

  lunr.QueryLexer.EOS = 'EOS';
  lunr.QueryLexer.FIELD = 'FIELD';
  lunr.QueryLexer.TERM = 'TERM';
  lunr.QueryLexer.EDIT_DISTANCE = 'EDIT_DISTANCE';
  lunr.QueryLexer.BOOST = 'BOOST';
  lunr.QueryLexer.PRESENCE = 'PRESENCE';

  lunr.QueryLexer.lexField = function (lexer) {
    lexer.backup();
    lexer.emit(lunr.QueryLexer.FIELD);
    lexer.ignore();
    return lunr.QueryLexer.lexText;
  };

  lunr.QueryLexer.lexTerm = function (lexer) {
    if (lexer.width() > 1) {
      lexer.backup();
      lexer.emit(lunr.QueryLexer.TERM);
    }

    lexer.ignore();

    if (lexer.more()) {
      return lunr.QueryLexer.lexText;
    }
  };

  lunr.QueryLexer.lexEditDistance = function (lexer) {
    lexer.ignore();
    lexer.acceptDigitRun();
    lexer.emit(lunr.QueryLexer.EDIT_DISTANCE);
    return lunr.QueryLexer.lexText;
  };

  lunr.QueryLexer.lexBoost = function (lexer) {
    lexer.ignore();
    lexer.acceptDigitRun();
    lexer.emit(lunr.QueryLexer.BOOST);
    return lunr.QueryLexer.lexText;
  };

  lunr.QueryLexer.lexEOS = function (lexer) {
    if (lexer.width() > 0) {
      lexer.emit(lunr.QueryLexer.TERM);
    }
  };

  // This matches the separator used when tokenising fields
  // within a document. These should match otherwise it is
  // not possible to search for some tokens within a document.
  //
  // It is possible for the user to change the separator on the
  // tokenizer so it _might_ clash with any other of the special
  // characters already used within the search string, e.g. :.
  //
  // This means that it is possible to change the separator in
  // such a way that makes some words unsearchable using a search
  // string.
  lunr.QueryLexer.termSeparator = lunr.tokenizer.separator;

  lunr.QueryLexer.lexText = function (lexer) {
    while (true) {
      var char = lexer.next();

      if (char == lunr.QueryLexer.EOS) {
        return lunr.QueryLexer.lexEOS;
      }

      // Escape character is '\'
      if (char.charCodeAt(0) == 92) {
        lexer.escapeCharacter();
        continue;
      }

      if (char == ":") {
        return lunr.QueryLexer.lexField;
      }

      if (char == "~") {
        lexer.backup();
        if (lexer.width() > 0) {
          lexer.emit(lunr.QueryLexer.TERM);
        }
        return lunr.QueryLexer.lexEditDistance;
      }

      if (char == "^") {
        lexer.backup();
        if (lexer.width() > 0) {
          lexer.emit(lunr.QueryLexer.TERM);
        }
        return lunr.QueryLexer.lexBoost;
      }

      // "+" indicates term presence is required
      // checking for length to ensure that only
      // leading "+" are considered
      if (char == "+" && lexer.width() === 1) {
        lexer.emit(lunr.QueryLexer.PRESENCE);
        return lunr.QueryLexer.lexText;
      }

      // "-" indicates term presence is prohibited
      // checking for length to ensure that only
      // leading "-" are considered
      if (char == "-" && lexer.width() === 1) {
        lexer.emit(lunr.QueryLexer.PRESENCE);
        return lunr.QueryLexer.lexText;
      }

      if (char.match(lunr.QueryLexer.termSeparator)) {
        return lunr.QueryLexer.lexTerm;
      }
    }
  };

  lunr.QueryParser = function (str, query) {
    this.lexer = new lunr.QueryLexer(str);
    this.query = query;
    this.currentClause = {};
    this.lexemeIdx = 0;
  };

  lunr.QueryParser.prototype.parse = function () {
    this.lexer.run();
    this.lexemes = this.lexer.lexemes;

    var state = lunr.QueryParser.parseClause;

    while (state) {
      state = state(this);
    }

    return this.query;
  };

  lunr.QueryParser.prototype.peekLexeme = function () {
    return this.lexemes[this.lexemeIdx];
  };

  lunr.QueryParser.prototype.consumeLexeme = function () {
    var lexeme = this.peekLexeme();
    this.lexemeIdx += 1;
    return lexeme;
  };

  lunr.QueryParser.prototype.nextClause = function () {
    var completedClause = this.currentClause;
    this.query.clause(completedClause);
    this.currentClause = {};
  };

  lunr.QueryParser.parseClause = function (parser) {
    var lexeme = parser.peekLexeme();

    if (lexeme == undefined) {
      return;
    }

    switch (lexeme.type) {
      case lunr.QueryLexer.PRESENCE:
        return lunr.QueryParser.parsePresence;
      case lunr.QueryLexer.FIELD:
        return lunr.QueryParser.parseField;
      case lunr.QueryLexer.TERM:
        return lunr.QueryParser.parseTerm;
      default:
        var errorMessage = "expected either a field or a term, found " + lexeme.type;

        if (lexeme.str.length >= 1) {
          errorMessage += " with value '" + lexeme.str + "'";
        }

        throw new lunr.QueryParseError(errorMessage, lexeme.start, lexeme.end);
    }
  };

  lunr.QueryParser.parsePresence = function (parser) {
    var lexeme = parser.consumeLexeme();

    if (lexeme == undefined) {
      return;
    }

    switch (lexeme.str) {
      case "-":
        parser.currentClause.presence = lunr.Query.presence.PROHIBITED;
        break;
      case "+":
        parser.currentClause.presence = lunr.Query.presence.REQUIRED;
        break;
      default:
        var errorMessage = "unrecognised presence operator'" + lexeme.str + "'";
        throw new lunr.QueryParseError(errorMessage, lexeme.start, lexeme.end);
    }

    var nextLexeme = parser.peekLexeme();

    if (nextLexeme == undefined) {
      var errorMessage = "expecting term or field, found nothing";
      throw new lunr.QueryParseError(errorMessage, lexeme.start, lexeme.end);
    }

    switch (nextLexeme.type) {
      case lunr.QueryLexer.FIELD:
        return lunr.QueryParser.parseField;
      case lunr.QueryLexer.TERM:
        return lunr.QueryParser.parseTerm;
      default:
        var errorMessage = "expecting term or field, found '" + nextLexeme.type + "'";
        throw new lunr.QueryParseError(errorMessage, nextLexeme.start, nextLexeme.end);
    }
  };

  lunr.QueryParser.parseField = function (parser) {
    var lexeme = parser.consumeLexeme();

    if (lexeme == undefined) {
      return;
    }

    if (parser.query.allFields.indexOf(lexeme.str) == -1) {
      var possibleFields = parser.query.allFields.map(function (f) {
        return "'" + f + "'";
      }).join(', '),
          errorMessage = "unrecognised field '" + lexeme.str + "', possible fields: " + possibleFields;

      throw new lunr.QueryParseError(errorMessage, lexeme.start, lexeme.end);
    }

    parser.currentClause.fields = [lexeme.str];

    var nextLexeme = parser.peekLexeme();

    if (nextLexeme == undefined) {
      var errorMessage = "expecting term, found nothing";
      throw new lunr.QueryParseError(errorMessage, lexeme.start, lexeme.end);
    }

    switch (nextLexeme.type) {
      case lunr.QueryLexer.TERM:
        return lunr.QueryParser.parseTerm;
      default:
        var errorMessage = "expecting term, found '" + nextLexeme.type + "'";
        throw new lunr.QueryParseError(errorMessage, nextLexeme.start, nextLexeme.end);
    }
  };

  lunr.QueryParser.parseTerm = function (parser) {
    var lexeme = parser.consumeLexeme();

    if (lexeme == undefined) {
      return;
    }

    parser.currentClause.term = lexeme.str.toLowerCase();

    if (lexeme.str.indexOf("*") != -1) {
      parser.currentClause.usePipeline = false;
    }

    var nextLexeme = parser.peekLexeme();

    if (nextLexeme == undefined) {
      parser.nextClause();
      return;
    }

    switch (nextLexeme.type) {
      case lunr.QueryLexer.TERM:
        parser.nextClause();
        return lunr.QueryParser.parseTerm;
      case lunr.QueryLexer.FIELD:
        parser.nextClause();
        return lunr.QueryParser.parseField;
      case lunr.QueryLexer.EDIT_DISTANCE:
        return lunr.QueryParser.parseEditDistance;
      case lunr.QueryLexer.BOOST:
        return lunr.QueryParser.parseBoost;
      case lunr.QueryLexer.PRESENCE:
        parser.nextClause();
        return lunr.QueryParser.parsePresence;
      default:
        var errorMessage = "Unexpected lexeme type '" + nextLexeme.type + "'";
        throw new lunr.QueryParseError(errorMessage, nextLexeme.start, nextLexeme.end);
    }
  };

  lunr.QueryParser.parseEditDistance = function (parser) {
    var lexeme = parser.consumeLexeme();

    if (lexeme == undefined) {
      return;
    }

    var editDistance = parseInt(lexeme.str, 10);

    if (isNaN(editDistance)) {
      var errorMessage = "edit distance must be numeric";
      throw new lunr.QueryParseError(errorMessage, lexeme.start, lexeme.end);
    }

    parser.currentClause.editDistance = editDistance;

    var nextLexeme = parser.peekLexeme();

    if (nextLexeme == undefined) {
      parser.nextClause();
      return;
    }

    switch (nextLexeme.type) {
      case lunr.QueryLexer.TERM:
        parser.nextClause();
        return lunr.QueryParser.parseTerm;
      case lunr.QueryLexer.FIELD:
        parser.nextClause();
        return lunr.QueryParser.parseField;
      case lunr.QueryLexer.EDIT_DISTANCE:
        return lunr.QueryParser.parseEditDistance;
      case lunr.QueryLexer.BOOST:
        return lunr.QueryParser.parseBoost;
      case lunr.QueryLexer.PRESENCE:
        parser.nextClause();
        return lunr.QueryParser.parsePresence;
      default:
        var errorMessage = "Unexpected lexeme type '" + nextLexeme.type + "'";
        throw new lunr.QueryParseError(errorMessage, nextLexeme.start, nextLexeme.end);
    }
  };

  lunr.QueryParser.parseBoost = function (parser) {
    var lexeme = parser.consumeLexeme();

    if (lexeme == undefined) {
      return;
    }

    var boost = parseInt(lexeme.str, 10);

    if (isNaN(boost)) {
      var errorMessage = "boost must be numeric";
      throw new lunr.QueryParseError(errorMessage, lexeme.start, lexeme.end);
    }

    parser.currentClause.boost = boost;

    var nextLexeme = parser.peekLexeme();

    if (nextLexeme == undefined) {
      parser.nextClause();
      return;
    }

    switch (nextLexeme.type) {
      case lunr.QueryLexer.TERM:
        parser.nextClause();
        return lunr.QueryParser.parseTerm;
      case lunr.QueryLexer.FIELD:
        parser.nextClause();
        return lunr.QueryParser.parseField;
      case lunr.QueryLexer.EDIT_DISTANCE:
        return lunr.QueryParser.parseEditDistance;
      case lunr.QueryLexer.BOOST:
        return lunr.QueryParser.parseBoost;
      case lunr.QueryLexer.PRESENCE:
        parser.nextClause();
        return lunr.QueryParser.parsePresence;
      default:
        var errorMessage = "Unexpected lexeme type '" + nextLexeme.type + "'";
        throw new lunr.QueryParseError(errorMessage, nextLexeme.start, nextLexeme.end);
    }
  }

  /**
   * export the module via AMD, CommonJS or as a browser global
   * Export code from https://github.com/umdjs/umd/blob/master/returnExports.js
   */
  ;(function (root, factory) {
    if (true) {
      // AMD. Register as an anonymous module.
      !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if ((typeof exports === "undefined" ? "undefined" : _typeof(exports)) === 'object') {
      /**
       * Node. Does not work with strict CommonJS, but
       * only CommonJS-like enviroments that support module.exports,
       * like Node.
       */
      module.exports = factory();
    } else {
      // Browser globals (root is window)
      root.lunr = factory();
    }
  })(this, function () {
    /**
     * Just return a value to define the module export.
     * This example returns an object, but the module
     * can return a function as the exported value.
     */
    return lunr;
  });
})();

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _Position = __webpack_require__(45);

var _Position2 = _interopRequireDefault(_Position);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* ----------------------------------------------------------------------------
 * Module
 * ------------------------------------------------------------------------- */

exports.default = {
  Position: _Position2.default
}; /*
    * Copyright (c) 2016-2018 Martin Donath <martin.donath@squidfunk.com>
    *
    * Permission is hereby granted, free of charge, to any person obtaining a copy
    * of this software and associated documentation files (the "Software"), to
    * deal in the Software without restriction, including without limitation the
    * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
    * sell copies of the Software, and to permit persons to whom the Software is
    * furnished to do so, subject to the following conditions:
    *
    * The above copyright notice and this permission notice shall be included in
    * all copies or substantial portions of the Software.
    *
    * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
    * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
    * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
    * IN THE SOFTWARE.
    */

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
 * Copyright (c) 2016-2018 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */

/* ----------------------------------------------------------------------------
 * Class
 * ------------------------------------------------------------------------- */

var Position = function () {

  /**
   * Set sidebars to locked state and limit height to parent node
   *
   * @constructor
   *
   * @property {HTMLElement} el_ - Sidebar
   * @property {HTMLElement} parent_ - Sidebar container
   * @property {HTMLElement} header_ - Header
   * @property {number} height_ - Current sidebar height
   * @property {number} offset_ - Current page y-offset
   * @property {boolean} pad_ - Pad when header is fixed
   *
   * @param {(string|HTMLElement)} el - Selector or HTML element
   * @param {(string|HTMLElement)} header - Selector or HTML element
   */
  function Position(el, header) {
    _classCallCheck(this, Position);

    var ref = typeof el === "string" ? document.querySelector(el) : el;
    if (!(ref instanceof HTMLElement) || !(ref.parentNode instanceof HTMLElement)) throw new ReferenceError();
    this.el_ = ref;
    this.parent_ = ref.parentNode;

    /* Retrieve header */
    ref = typeof header === "string" ? document.querySelector(header) : header;
    if (!(ref instanceof HTMLElement)) throw new ReferenceError();
    this.header_ = ref;

    /* Initialize current height and test whether header is fixed */
    this.height_ = 0;
    this.pad_ = window.getComputedStyle(this.header_).position === "fixed";
  }

  /**
   * Initialize sidebar state
   */


  Position.prototype.setup = function setup() {
    var top = Array.prototype.reduce.call(this.parent_.children, function (offset, child) {
      return Math.max(offset, child.offsetTop);
    }, 0);

    /* Set lock offset for element with largest top offset */
    this.offset_ = top - (this.pad_ ? this.header_.offsetHeight : 0);
    this.update();
  };

  /**
   * Update locked state and height
   *
   * The inner height of the window (= the visible area) is the maximum
   * possible height for the stretching sidebar. This height must be deducted
   * by the height of the fixed header (56px). Depending on the page y-offset,
   * the top offset of the sidebar must be taken into account, as well as the
   * case where the window is scrolled beyond the sidebar container.
   *
   * @param {Event?} ev - Event
   */


  Position.prototype.update = function update(ev) {
    var offset = window.pageYOffset;
    var visible = window.innerHeight;

    /* Update offset, in case window is resized */
    if (ev && ev.type === "resize") this.setup();

    /* Set bounds of sidebar container - must be calculated on every run, as
       the height of the content might change due to loading images etc. */
    var bounds = {
      top: this.pad_ ? this.header_.offsetHeight : 0,
      bottom: this.parent_.offsetTop + this.parent_.offsetHeight

      /* Calculate new offset and height */
    };var height = visible - bounds.top - Math.max(0, this.offset_ - offset) - Math.max(0, offset + visible - bounds.bottom);

    /* If height changed, update element */
    if (height !== this.height_) this.el_.style.height = (this.height_ = height) + "px";

    /* Sidebar should be locked, as we're below parent offset */
    if (offset >= this.offset_) {
      if (this.el_.dataset.mdState !== "lock") this.el_.dataset.mdState = "lock";

      /* Sidebar should be unlocked, if locked */
    } else if (this.el_.dataset.mdState === "lock") {
      this.el_.dataset.mdState = "";
    }
  };

  /**
   * Reset locked state and height
   */


  Position.prototype.reset = function reset() {
    this.el_.dataset.mdState = "";
    this.el_.style.height = "";
    this.height_ = 0;
  };

  return Position;
}();

exports.default = Position;

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _Adapter = __webpack_require__(47);

var _Adapter2 = _interopRequireDefault(_Adapter);

var _Repository = __webpack_require__(51);

var _Repository2 = _interopRequireDefault(_Repository);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* ----------------------------------------------------------------------------
 * Module
 * ------------------------------------------------------------------------- */

/*
 * Copyright (c) 2016-2018 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */

exports.default = {
  Adapter: _Adapter2.default,
  Repository: _Repository2.default
};

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _GitHub = __webpack_require__(48);

var _GitHub2 = _interopRequireDefault(_GitHub);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* ----------------------------------------------------------------------------
 * Module
 * ------------------------------------------------------------------------- */

exports.default = {
  GitHub: _GitHub2.default
}; /*
    * Copyright (c) 2016-2018 Martin Donath <martin.donath@squidfunk.com>
    *
    * Permission is hereby granted, free of charge, to any person obtaining a copy
    * of this software and associated documentation files (the "Software"), to
    * deal in the Software without restriction, including without limitation the
    * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
    * sell copies of the Software, and to permit persons to whom the Software is
    * furnished to do so, subject to the following conditions:
    *
    * The above copyright notice and this permission notice shall be included in
    * all copies or substantial portions of the Software.
    *
    * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
    * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
    * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
    * IN THE SOFTWARE.
    */

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _Abstract2 = __webpack_require__(49);

var _Abstract3 = _interopRequireDefault(_Abstract2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) 2016-2018 Martin Donath <martin.donath@squidfunk.com>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Permission is hereby granted, free of charge, to any person obtaining a copy
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * of this software and associated documentation files (the "Software"), to
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * deal in the Software without restriction, including without limitation the
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * sell copies of the Software, and to permit persons to whom the Software is
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * furnished to do so, subject to the following conditions:
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * The above copyright notice and this permission notice shall be included in
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * all copies or substantial portions of the Software.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * IN THE SOFTWARE.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

/* ----------------------------------------------------------------------------
 * Class
 * ------------------------------------------------------------------------- */

var GitHub = function (_Abstract) {
  _inherits(GitHub, _Abstract);

  /**
   * Retrieve repository information from GitHub
   *
   * @constructor
   *
   * @property {string} name_ - Name of the repository
   *
   * @param {(string|HTMLAnchorElement)} el - Selector or HTML element
   */
  function GitHub(el) {
    _classCallCheck(this, GitHub);

    /* Extract user (and repository name) from URL, as we have to query for all
       repositories, to omit 404 errors for private repositories */
    var _this = _possibleConstructorReturn(this, _Abstract.call(this, el));

    var matches = /^.+github\.com\/([^/]+)\/?([^/]+)?.*$/.exec(_this.base_);
    if (matches && matches.length === 3) {
      var user = matches[1],
          name = matches[2];

      /* Initialize base URL and repository name */

      _this.base_ = "https://api.github.com/users/" + user + "/repos";
      _this.name_ = name;
    }
    return _this;
  }

  /**
   * Fetch relevant repository information from GitHub
   *
   * @return {Promise<Array<string>>} Promise returning an array of facts
   */


  GitHub.prototype.fetch_ = function fetch_() {
    var _this2 = this;

    var paginate = function paginate() {
      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      return fetch(_this2.base_ + "?per_page=30&page=" + page).then(function (response) {
        return response.json();
      }).then(function (data) {
        if (!(data instanceof Array)) throw new TypeError();

        /* Display number of stars and forks, if repository is given */
        if (_this2.name_) {
          var repo = data.find(function (item) {
            return item.name === _this2.name_;
          });
          if (!repo && data.length === 30) return paginate(page + 1);

          /* If we found a repo, extract the facts */
          return repo ? [_this2.format_(repo.stargazers_count) + " Stars", _this2.format_(repo.forks_count) + " Forks"] : [];

          /* Display number of repositories, otherwise */
        } else {
          return [data.length + " Repositories"];
        }
      });
    };

    /* Paginate through repos */
    return paginate();
  };

  return GitHub;
}(_Abstract3.default);

exports.default = GitHub;

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _jsCookie = __webpack_require__(50);

var _jsCookie2 = _interopRequireDefault(_jsCookie);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /*
                                                                                                                                                           * Copyright (c) 2016-2018 Martin Donath <martin.donath@squidfunk.com>
                                                                                                                                                           *
                                                                                                                                                           * Permission is hereby granted, free of charge, to any person obtaining a copy
                                                                                                                                                           * of this software and associated documentation files (the "Software"), to
                                                                                                                                                           * deal in the Software without restriction, including without limitation the
                                                                                                                                                           * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
                                                                                                                                                           * sell copies of the Software, and to permit persons to whom the Software is
                                                                                                                                                           * furnished to do so, subject to the following conditions:
                                                                                                                                                           *
                                                                                                                                                           * The above copyright notice and this permission notice shall be included in
                                                                                                                                                           * all copies or substantial portions of the Software.
                                                                                                                                                           *
                                                                                                                                                           * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                                                                                                                                                           * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                                                                                                                                                           * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
                                                                                                                                                           * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                                                                                                                                                           * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
                                                                                                                                                           * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
                                                                                                                                                           * IN THE SOFTWARE.
                                                                                                                                                           */

/* ----------------------------------------------------------------------------
 * Class
 * ------------------------------------------------------------------------- */

var Abstract = function () {

  /**
   * Retrieve repository information
   *
   * @constructor
   *
   * @property {HTMLAnchorElement} el_ - Link to repository
   * @property {string} base_ - API base URL
   * @property {number} salt_ - Unique identifier
   *
   * @param {(string|HTMLAnchorElement)} el - Selector or HTML element
   */
  function Abstract(el) {
    _classCallCheck(this, Abstract);

    var ref = typeof el === "string" ? document.querySelector(el) : el;
    if (!(ref instanceof HTMLAnchorElement)) throw new ReferenceError();
    this.el_ = ref;

    /* Retrieve base URL */
    this.base_ = this.el_.href;
    this.salt_ = this.hash_(this.base_);
  }

  /**
   * Retrieve data from Cookie or fetch from respective API
   *
   * @return {Promise<Array<string>>} Promise that returns an array of facts
   */


  Abstract.prototype.fetch = function fetch() {
    var _this = this;

    return new Promise(function (resolve) {
      var cached = _jsCookie2.default.getJSON(_this.salt_ + ".cache-source");
      if (typeof cached !== "undefined") {
        resolve(cached);

        /* If the data is not cached in a cookie, invoke fetch and set
           a cookie that automatically expires in 15 minutes */
      } else {
        _this.fetch_().then(function (data) {
          _jsCookie2.default.set(_this.salt_ + ".cache-source", data, { expires: 1 / 96 });
          resolve(data);
        });
      }
    });
  };

  /**
   * Abstract private function that fetches relevant repository information
   *
   * @abstract
   */


  Abstract.prototype.fetch_ = function fetch_() {
    throw new Error("fetch_(): Not implemented");
  };

  /**
   * Format a number with suffix
   *
   * @param {number} number - Number to format
   * @return {string} Formatted number
   */


  Abstract.prototype.format_ = function format_(number) {
    if (number > 10000) return (number / 1000).toFixed(0) + "k";else if (number > 1000) return (number / 1000).toFixed(1) + "k";
    return "" + number;
  };

  /**
   * Simple hash function
   *
   * Taken from http://stackoverflow.com/a/7616484/1065584
   *
   * @param {string} str - Input string
   * @return {number} Hashed string
   */


  Abstract.prototype.hash_ = function hash_(str) {
    var hash = 0;
    if (str.length === 0) return hash;
    for (var i = 0, len = str.length; i < len; i++) {
      hash = (hash << 5) - hash + str.charCodeAt(i);
      hash |= 0; // Convert to 32bit integer
    }
    return hash;
  };

  return Abstract;
}();

exports.default = Abstract;

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*!
 * JavaScript Cookie v2.2.0
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
;(function (factory) {
	var registeredInModuleLoader = false;
	if (true) {
		!(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		registeredInModuleLoader = true;
	}
	if (( false ? 'undefined' : _typeof(exports)) === 'object') {
		module.exports = factory();
		registeredInModuleLoader = true;
	}
	if (!registeredInModuleLoader) {
		var OldCookies = window.Cookies;
		var api = window.Cookies = factory();
		api.noConflict = function () {
			window.Cookies = OldCookies;
			return api;
		};
	}
})(function () {
	function extend() {
		var i = 0;
		var result = {};
		for (; i < arguments.length; i++) {
			var attributes = arguments[i];
			for (var key in attributes) {
				result[key] = attributes[key];
			}
		}
		return result;
	}

	function init(converter) {
		function api(key, value, attributes) {
			var result;
			if (typeof document === 'undefined') {
				return;
			}

			// Write

			if (arguments.length > 1) {
				attributes = extend({
					path: '/'
				}, api.defaults, attributes);

				if (typeof attributes.expires === 'number') {
					var expires = new Date();
					expires.setMilliseconds(expires.getMilliseconds() + attributes.expires * 864e+5);
					attributes.expires = expires;
				}

				// We're using "expires" because "max-age" is not supported by IE
				attributes.expires = attributes.expires ? attributes.expires.toUTCString() : '';

				try {
					result = JSON.stringify(value);
					if (/^[\{\[]/.test(result)) {
						value = result;
					}
				} catch (e) {}

				if (!converter.write) {
					value = encodeURIComponent(String(value)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);
				} else {
					value = converter.write(value, key);
				}

				key = encodeURIComponent(String(key));
				key = key.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent);
				key = key.replace(/[\(\)]/g, escape);

				var stringifiedAttributes = '';

				for (var attributeName in attributes) {
					if (!attributes[attributeName]) {
						continue;
					}
					stringifiedAttributes += '; ' + attributeName;
					if (attributes[attributeName] === true) {
						continue;
					}
					stringifiedAttributes += '=' + attributes[attributeName];
				}
				return document.cookie = key + '=' + value + stringifiedAttributes;
			}

			// Read

			if (!key) {
				result = {};
			}

			// To prevent the for loop in the first place assign an empty array
			// in case there are no cookies at all. Also prevents odd result when
			// calling "get()"
			var cookies = document.cookie ? document.cookie.split('; ') : [];
			var rdecode = /(%[0-9A-Z]{2})+/g;
			var i = 0;

			for (; i < cookies.length; i++) {
				var parts = cookies[i].split('=');
				var cookie = parts.slice(1).join('=');

				if (!this.json && cookie.charAt(0) === '"') {
					cookie = cookie.slice(1, -1);
				}

				try {
					var name = parts[0].replace(rdecode, decodeURIComponent);
					cookie = converter.read ? converter.read(cookie, name) : converter(cookie, name) || cookie.replace(rdecode, decodeURIComponent);

					if (this.json) {
						try {
							cookie = JSON.parse(cookie);
						} catch (e) {}
					}

					if (key === name) {
						result = cookie;
						break;
					}

					if (!key) {
						result[name] = cookie;
					}
				} catch (e) {}
			}

			return result;
		}

		api.set = api;
		api.get = function (key) {
			return api.call(api, key);
		};
		api.getJSON = function () {
			return api.apply({
				json: true
			}, [].slice.call(arguments));
		};
		api.defaults = {};

		api.remove = function (key, attributes) {
			api(key, '', extend(attributes, {
				expires: -1
			}));
		};

		api.withConverter = init;

		return api;
	}

	return init(function () {});
});

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(JSX) {

exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
 * Copyright (c) 2016-2018 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */

/* ----------------------------------------------------------------------------
 * Class
 * ------------------------------------------------------------------------- */

var Repository = function () {

  /**
   * Render repository information
   *
   * @constructor
   *
   * @property {HTMLElement} el_ - Repository information
   *
   * @param {(string|HTMLElement)} el - Selector or HTML element
   */
  function Repository(el) {
    _classCallCheck(this, Repository);

    var ref = typeof el === "string" ? document.querySelector(el) : el;
    if (!(ref instanceof HTMLElement)) throw new ReferenceError();
    this.el_ = ref;
  }

  /**
   * Initialize the repository
   *
   * @param {Array<string>} facts - Facts to be rendered
   */


  Repository.prototype.initialize = function initialize(facts) {
    if (facts.length && this.el_.children.length) this.el_.children[this.el_.children.length - 1].appendChild(JSX.createElement(
      "ul",
      { "class": "md-source__facts" },
      facts.map(function (fact) {
        return JSX.createElement(
          "li",
          { "class": "md-source__fact" },
          fact
        );
      })
    ));

    /* Finish rendering with animation */
    this.el_.dataset.mdState = "done";
  };

  return Repository;
}();

exports.default = Repository;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _Toggle = __webpack_require__(53);

var _Toggle2 = _interopRequireDefault(_Toggle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* ----------------------------------------------------------------------------
 * Module
 * ------------------------------------------------------------------------- */

exports.default = {
  Toggle: _Toggle2.default
}; /*
    * Copyright (c) 2016-2018 Martin Donath <martin.donath@squidfunk.com>
    *
    * Permission is hereby granted, free of charge, to any person obtaining a copy
    * of this software and associated documentation files (the "Software"), to
    * deal in the Software without restriction, including without limitation the
    * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
    * sell copies of the Software, and to permit persons to whom the Software is
    * furnished to do so, subject to the following conditions:
    *
    * The above copyright notice and this permission notice shall be included in
    * all copies or substantial portions of the Software.
    *
    * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
    * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
    * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
    * IN THE SOFTWARE.
    */

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
 * Copyright (c) 2016-2018 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */

/* ----------------------------------------------------------------------------
 * Class
 * ------------------------------------------------------------------------- */

var Toggle = function () {

  /**
   * Toggle tabs visibility depending on page y-offset
   *
   * @constructor
   *
   * @property {HTMLElement} el_ - Content container
   * @property {number} offset_ - Toggle page-y offset
   * @property {boolean} active_ - Tabs visibility
   *
   * @param {(string|HTMLElement)} el - Selector or HTML element
   */
  function Toggle(el) {
    _classCallCheck(this, Toggle);

    var ref = typeof el === "string" ? document.querySelector(el) : el;
    if (!(ref instanceof Node)) throw new ReferenceError();
    this.el_ = ref;

    /* Initialize offset and state */
    this.active_ = false;
  }

  /**
   * Update visibility
   */


  Toggle.prototype.update = function update() {
    var active = window.pageYOffset >= this.el_.children[0].offsetTop + (5 - 48); // TODO: quick hack to enable same handling for hero
    if (active !== this.active_) this.el_.dataset.mdState = (this.active_ = active) ? "hidden" : "";
  };

  /**
   * Reset visibility
   */


  Toggle.prototype.reset = function reset() {
    this.el_.dataset.mdState = "";
    this.active_ = false;
  };

  return Toggle;
}();

exports.default = Toggle;

/***/ })
/******/ ])));