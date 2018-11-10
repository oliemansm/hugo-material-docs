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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
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
/* 3 */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ }),
/* 4 */
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
/* 5 */,
/* 6 */,
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(JSX) {

exports.__esModule = true;
exports.app = undefined;

__webpack_require__(8);

__webpack_require__(9);

__webpack_require__(10);

__webpack_require__(11);

__webpack_require__(12);

__webpack_require__(13);

__webpack_require__(14);

var _promisePolyfill = __webpack_require__(15);

var _promisePolyfill2 = _interopRequireDefault(_promisePolyfill);

var _clipboard = __webpack_require__(20);

var _clipboard2 = _interopRequireDefault(_clipboard);

var _fastclick = __webpack_require__(22);

var _fastclick2 = _interopRequireDefault(_fastclick);

var _Material = __webpack_require__(23);

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

  /* Load table of contents */
  _Material2.default.TableOfContents.render("#scrollspy");
  var blur = new _Material2.default.Nav.Blur("[data-md-component=toc] [href]");

  /* Component: link blurring for table of contents */
  new _Material2.default.Event.MatchMedia("(min-width: 960px)", new _Material2.default.Event.Listener(window, "scroll", blur));

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
      return fetch(config.url.base + "/index.json", {
        credentials: "same-origin"
      }).then(function (response) {
        return response.json();
      }).then(function (data) {
        return data.map(function (doc) {
          doc.location = "" + doc.permalink;
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
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/icons/bitbucket.svg";

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/icons/github.svg";

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/icons/gitlab.svg";

/***/ }),
/* 11 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 12 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 13 */
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
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (!window.fetch) window.fetch = __webpack_require__(2).default || __webpack_require__(2);

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(setImmediate) {

exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _finally = __webpack_require__(19);

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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(16).setImmediate))

/***/ }),
/* 16 */
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
__webpack_require__(17);
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = typeof self !== "undefined" && self.setImmediate || typeof global !== "undefined" && global.setImmediate || undefined && undefined.setImmediate;
exports.clearImmediate = typeof self !== "undefined" && self.clearImmediate || typeof global !== "undefined" && global.clearImmediate || undefined && undefined.clearImmediate;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 17 */
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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1), __webpack_require__(18)))

/***/ }),
/* 18 */
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
/* 19 */
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
/* 20 */
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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(21)(module)))

/***/ }),
/* 21 */
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
/* 22 */
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

	if ("function" === 'function' && _typeof(__webpack_require__(3)) === 'object' && __webpack_require__(3)) {

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
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _Event = __webpack_require__(24);

var _Event2 = _interopRequireDefault(_Event);

var _Header = __webpack_require__(26);

var _Header2 = _interopRequireDefault(_Header);

var _Nav = __webpack_require__(29);

var _Nav2 = _interopRequireDefault(_Nav);

var _Search = __webpack_require__(33);

var _Search2 = _interopRequireDefault(_Search);

var _Sidebar = __webpack_require__(39);

var _Sidebar2 = _interopRequireDefault(_Sidebar);

var _Source = __webpack_require__(41);

var _Source2 = _interopRequireDefault(_Source);

var _Tabs = __webpack_require__(47);

var _Tabs2 = _interopRequireDefault(_Tabs);

var _TableOfContents = __webpack_require__(49);

var _TableOfContents2 = _interopRequireDefault(_TableOfContents);

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
  Event: _Event2.default,
  Header: _Header2.default,
  Nav: _Nav2.default,
  Search: _Search2.default,
  Sidebar: _Sidebar2.default,
  Source: _Source2.default,
  Tabs: _Tabs2.default,
  TableOfContents: _TableOfContents2.default
};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _Listener = __webpack_require__(4);

var _Listener2 = _interopRequireDefault(_Listener);

var _MatchMedia = __webpack_require__(25);

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
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _Listener = __webpack_require__(4);

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
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _Shadow = __webpack_require__(27);

var _Shadow2 = _interopRequireDefault(_Shadow);

var _Title = __webpack_require__(28);

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
/* 27 */
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
/* 28 */
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
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _Blur = __webpack_require__(30);

var _Blur2 = _interopRequireDefault(_Blur);

var _Collapse = __webpack_require__(31);

var _Collapse2 = _interopRequireDefault(_Collapse);

var _Scrolling = __webpack_require__(32);

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
/* 30 */
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

    this.init(els);
  }

  Blur.prototype.init = function init(els) {
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
  };

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
/* 31 */
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
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _Lock = __webpack_require__(34);

var _Lock2 = _interopRequireDefault(_Lock);

var _Result = __webpack_require__(35);

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
/* 34 */
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
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(JSX) {

exports.__esModule = true;

var _escapeStringRegexp = __webpack_require__(36);

var _escapeStringRegexp2 = _interopRequireDefault(_escapeStringRegexp);

var _exposeLoaderLunrLunr = __webpack_require__(37);

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
          doc.text = escapeHTML(doc.contents);

          /* Associate section with parent document */
          if (hash) {
            doc.parent = docs.get(path);

            /* Override page title with document title if first section */
            if (doc.parent && !doc.parent.done) {
              doc.parent.title = doc.title;
              doc.parent.text = doc.contents;
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
          this.field("tags");
          this.field("categories");
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
/* 36 */
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
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["lunr"] = __webpack_require__(38);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 38 */
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
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _Position = __webpack_require__(40);

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
/* 40 */
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
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _Adapter = __webpack_require__(42);

var _Adapter2 = _interopRequireDefault(_Adapter);

var _Repository = __webpack_require__(46);

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
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _GitHub = __webpack_require__(43);

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
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _Abstract2 = __webpack_require__(44);

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
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _jsCookie = __webpack_require__(45);

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
/* 45 */
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
/* 46 */
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
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _Toggle = __webpack_require__(48);

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
/* 48 */
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

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _TableOfContents = __webpack_require__(50);

var _TableOfContents2 = _interopRequireDefault(_TableOfContents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  render: _TableOfContents2.default
};

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(JSX) {

exports.__esModule = true;
var toLevel = function toLevel(tagName) {
  return tagName.replace(/\D/g, '');
};

var toItem = function toItem(el) {
  return { el: el, level: toLevel(el.tagName), children: [] };
};

var toItems = function toItems(els) {
  return [].reduce.call(els, function (items, el) {
    return items.concat(toItem(el));
  }, []);
};

var nextWithLowerLevel = function nextWithLowerLevel(item, items) {
  items.reduce();
};

var toTOC = function toTOC(items) {
  var idx = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  var previous = null;
  var toc = [];
  for (var i = idx; i < items.length; i++) {
    var item = items[i];
    if (previous == null || item.level == previous.level) {
      toc.push(item);
      previous = item;
    } else if (item.level > previous.level) {
      previous.children = toTOC(items, i + 1);
      i += previous.children.length;
    } else {
      return toc;
    }
  }
  return toc;
};

var render = function render(el) {
  var ref = typeof el === "string" ? document.querySelector(el) : el;
  if (!(ref instanceof HTMLElement)) return;

  var els = document.querySelectorAll("h2, h3, h4, h5, h6");
  var items = toItems(els);
  var toc = toTOC(items);
  if (toc.length == 0) {
    return;
  }

  ref.appendChild(JSX.createElement(
    "label",
    { "class": "md-nav__title", "for": "__toc" },
    "Table of contents"
  ));
  var list = JSX.createElement("ul", { "class": "md-nav__list", "data-md-scrollfix": true });
  ref.appendChild(list);
  for (var i = 0; i < toc.length; i++) {
    var tocItem = toc[i];
    list.appendChild(TocItem(tocItem));
  }
};

var TocItem = function TocItem(tocItem) {
  return JSX.createElement(
    "li",
    { "class": "md-nav__item" },
    JSX.createElement(
      "a",
      { href: "#" + tocItem.el.id, title: tocItem.el.id, "class": "md-nav__link" },
      tocItem.el.innerHTML
    ),
    tocItem.children.length > 0 && JSX.createElement(
      "nav",
      { "class": "md-nav" },
      JSX.createElement(
        "ul",
        { "class": "md-nav__list" },
        tocItem.children.map(function (child) {
          return TocItem(child);
        })
      )
    )
  );
};

exports.default = render;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ })
/******/ ])));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgN2E3MzJmMGMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qYXZhc2NyaXB0cy9wcm92aWRlcnMvanN4LmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3VuZmV0Y2gvZGlzdC91bmZldGNoLmVzLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9hbWQtb3B0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2phdmFzY3JpcHRzL2NvbXBvbmVudHMvTWF0ZXJpYWwvRXZlbnQvTGlzdGVuZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qYXZhc2NyaXB0cy9hcHBsaWNhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ltYWdlcy9pY29ucy9iaXRidWNrZXQuc3ZnIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaW1hZ2VzL2ljb25zL2dpdGh1Yi5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pbWFnZXMvaWNvbnMvZ2l0bGFiLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3N0eWxlc2hlZXRzL2FwcGxpY2F0aW9uLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9zdHlsZXNoZWV0cy9hcHBsaWNhdGlvbi1wYWxldHRlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2N1c3RvbS1ldmVudC1wb2x5ZmlsbC9wb2x5ZmlsbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdW5mZXRjaC9wb2x5ZmlsbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJvbWlzZS1wb2x5ZmlsbC9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3RpbWVycy1icm93c2VyaWZ5L21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NldGltbWVkaWF0ZS9zZXRJbW1lZGlhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJvbWlzZS1wb2x5ZmlsbC9zcmMvZmluYWxseS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY2xpcGJvYXJkL2Rpc3QvY2xpcGJvYXJkLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Zhc3RjbGljay9saWIvZmFzdGNsaWNrLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvamF2YXNjcmlwdHMvY29tcG9uZW50cy9NYXRlcmlhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2phdmFzY3JpcHRzL2NvbXBvbmVudHMvTWF0ZXJpYWwvRXZlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qYXZhc2NyaXB0cy9jb21wb25lbnRzL01hdGVyaWFsL0V2ZW50L01hdGNoTWVkaWEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qYXZhc2NyaXB0cy9jb21wb25lbnRzL01hdGVyaWFsL0hlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2phdmFzY3JpcHRzL2NvbXBvbmVudHMvTWF0ZXJpYWwvSGVhZGVyL1NoYWRvdy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2phdmFzY3JpcHRzL2NvbXBvbmVudHMvTWF0ZXJpYWwvSGVhZGVyL1RpdGxlLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvamF2YXNjcmlwdHMvY29tcG9uZW50cy9NYXRlcmlhbC9OYXYuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qYXZhc2NyaXB0cy9jb21wb25lbnRzL01hdGVyaWFsL05hdi9CbHVyLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvamF2YXNjcmlwdHMvY29tcG9uZW50cy9NYXRlcmlhbC9OYXYvQ29sbGFwc2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qYXZhc2NyaXB0cy9jb21wb25lbnRzL01hdGVyaWFsL05hdi9TY3JvbGxpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qYXZhc2NyaXB0cy9jb21wb25lbnRzL01hdGVyaWFsL1NlYXJjaC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2phdmFzY3JpcHRzL2NvbXBvbmVudHMvTWF0ZXJpYWwvU2VhcmNoL0xvY2suanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qYXZhc2NyaXB0cy9jb21wb25lbnRzL01hdGVyaWFsL1NlYXJjaC9SZXN1bHQuanN4Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9lc2NhcGUtc3RyaW5nLXJlZ2V4cC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbHVuci9sdW5yLmpzLWV4cG9zZWQiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2x1bnIvbHVuci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2phdmFzY3JpcHRzL2NvbXBvbmVudHMvTWF0ZXJpYWwvU2lkZWJhci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2phdmFzY3JpcHRzL2NvbXBvbmVudHMvTWF0ZXJpYWwvU2lkZWJhci9Qb3NpdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2phdmFzY3JpcHRzL2NvbXBvbmVudHMvTWF0ZXJpYWwvU291cmNlLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvamF2YXNjcmlwdHMvY29tcG9uZW50cy9NYXRlcmlhbC9Tb3VyY2UvQWRhcHRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2phdmFzY3JpcHRzL2NvbXBvbmVudHMvTWF0ZXJpYWwvU291cmNlL0FkYXB0ZXIvR2l0SHViLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvamF2YXNjcmlwdHMvY29tcG9uZW50cy9NYXRlcmlhbC9Tb3VyY2UvQWRhcHRlci9BYnN0cmFjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvanMtY29va2llL3NyYy9qcy5jb29raWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qYXZhc2NyaXB0cy9jb21wb25lbnRzL01hdGVyaWFsL1NvdXJjZS9SZXBvc2l0b3J5LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2phdmFzY3JpcHRzL2NvbXBvbmVudHMvTWF0ZXJpYWwvVGFicy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2phdmFzY3JpcHRzL2NvbXBvbmVudHMvTWF0ZXJpYWwvVGFicy9Ub2dnbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qYXZhc2NyaXB0cy9jb21wb25lbnRzL01hdGVyaWFsL1RhYmxlT2ZDb250ZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2phdmFzY3JpcHRzL2NvbXBvbmVudHMvTWF0ZXJpYWwvVGFibGVPZkNvbnRlbnRzL1RhYmxlT2ZDb250ZW50cy5qc3giXSwibmFtZXMiOlsiY3JlYXRlRWxlbWVudCIsInRhZyIsInByb3BlcnRpZXMiLCJlbCIsImRvY3VtZW50IiwiQXJyYXkiLCJwcm90b3R5cGUiLCJmb3JFYWNoIiwiY2FsbCIsIk9iamVjdCIsImtleXMiLCJzZXRBdHRyaWJ1dGUiLCJhdHRyIiwiaXRlcmF0ZUNoaWxkTm9kZXMiLCJub2RlcyIsIm5vZGUiLCJ0ZXh0Q29udGVudCIsImlzQXJyYXkiLCJfX2h0bWwiLCJpbm5lckhUTUwiLCJOb2RlIiwiYXBwZW5kQ2hpbGQiLCJjaGlsZHJlbiIsImciLCJGdW5jdGlvbiIsImV2YWwiLCJlIiwid2luZG93IiwibW9kdWxlIiwiZXhwb3J0cyIsImluZGV4IiwiZmV0Y2giLCJiaW5kIiwidXJsIiwib3B0aW9ucyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicmVxdWVzdCIsIlhNTEh0dHBSZXF1ZXN0Iiwib3BlbiIsIm1ldGhvZCIsImkiLCJoZWFkZXJzIiwic2V0UmVxdWVzdEhlYWRlciIsIndpdGhDcmVkZW50aWFscyIsImNyZWRlbnRpYWxzIiwib25sb2FkIiwicmVzcG9uc2UiLCJvbmVycm9yIiwic2VuZCIsImJvZHkiLCJhbGwiLCJoZWFkZXIiLCJnZXRBbGxSZXNwb25zZUhlYWRlcnMiLCJyZXBsYWNlIiwibSIsImtleSIsInZhbHVlIiwicHVzaCIsInRvTG93ZXJDYXNlIiwib2siLCJzdGF0dXMiLCJzdGF0dXNUZXh0IiwicmVzcG9uc2VVUkwiLCJjbG9uZSIsInRleHQiLCJyZXNwb25zZVRleHQiLCJqc29uIiwidGhlbiIsIkpTT04iLCJwYXJzZSIsImJsb2IiLCJCbG9iIiwiZW50cmllcyIsImdldCIsIm4iLCJoYXMiLCJMaXN0ZW5lciIsImVscyIsImV2ZW50cyIsImhhbmRsZXIiLCJlbHNfIiwic2xpY2UiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY29uY2F0IiwiaGFuZGxlcl8iLCJ1cGRhdGUiLCJldmVudHNfIiwidXBkYXRlXyIsImV2IiwibGlzdGVuIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50Iiwic2V0dXAiLCJ1bmxpc3RlbiIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJyZXNldCIsInRyYW5zbGF0ZSIsIm1ldGEiLCJnZXRFbGVtZW50c0J5TmFtZSIsIkhUTUxNZXRhRWxlbWVudCIsIlJlZmVyZW5jZUVycm9yIiwiY29udGVudCIsImluaXRpYWxpemUiLCJjb25maWciLCJNYXRlcmlhbCIsIkV2ZW50IiwiSFRNTEVsZW1lbnQiLCJGYXN0Q2xpY2siLCJhdHRhY2giLCJNb2Rlcm5penIiLCJhZGRUZXN0IiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwibWF0Y2giLCJ0YWJsZXMiLCJ3cmFwIiwidGFibGUiLCJuZXh0U2libGluZyIsInBhcmVudE5vZGUiLCJpbnNlcnRCZWZvcmUiLCJDbGlwYm9hcmQiLCJpc1N1cHBvcnRlZCIsImJsb2NrcyIsImJsb2NrIiwiaWQiLCJidXR0b24iLCJwYXJlbnQiLCJjb3B5Iiwib24iLCJtZXNzYWdlIiwiYWN0aW9uIiwidHJpZ2dlciIsInF1ZXJ5U2VsZWN0b3IiLCJjbGVhclNlbGVjdGlvbiIsImRhdGFzZXQiLCJtZFRpbWVyIiwiY2xlYXJUaW1lb3V0IiwicGFyc2VJbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJzZXRUaW1lb3V0IiwicmVtb3ZlIiwidG9TdHJpbmciLCJkZXRhaWxzIiwic3VtbWFyeSIsInRhcmdldCIsImhhc0F0dHJpYnV0ZSIsInJlbW92ZUF0dHJpYnV0ZSIsImxvY2F0aW9uIiwiaGFzaCIsImdldEVsZW1lbnRCeUlkIiwic3Vic3RyaW5nIiwiSFRNTERldGFpbHNFbGVtZW50IiwibG9jIiwiaW9zIiwic2Nyb2xsYWJsZSIsIml0ZW0iLCJ0b3AiLCJzY3JvbGxUb3AiLCJvZmZzZXRIZWlnaHQiLCJzY3JvbGxIZWlnaHQiLCJIZWFkZXIiLCJTaGFkb3ciLCJUaXRsZSIsIlRhYnMiLCJUb2dnbGUiLCJNYXRjaE1lZGlhIiwiU2lkZWJhciIsIlBvc2l0aW9uIiwiVGFibGVPZkNvbnRlbnRzIiwicmVuZGVyIiwiYmx1ciIsIk5hdiIsIkJsdXIiLCJjb2xsYXBzaWJsZXMiLCJjb2xsYXBzZSIsInByZXZpb3VzRWxlbWVudFNpYmxpbmciLCJDb2xsYXBzZSIsIlNjcm9sbGluZyIsIlNlYXJjaCIsIkxvY2siLCJSZXN1bHQiLCJiYXNlIiwiZGF0YSIsIm1hcCIsImRvYyIsInBlcm1hbGluayIsInF1ZXJ5IiwiSFRNTElucHV0RWxlbWVudCIsImZvY3VzIiwidG9nZ2xlIiwiY2hlY2tlZCIsImRpc3BhdGNoRXZlbnQiLCJDdXN0b21FdmVudCIsIm1ldGFLZXkiLCJjdHJsS2V5Iiwia2V5Q29kZSIsImFjdGl2ZUVsZW1lbnQiLCJwcmV2ZW50RGVmYXVsdCIsIkhUTUxMaW5rRWxlbWVudCIsImdldEF0dHJpYnV0ZSIsImluZGV4T2YiLCJsaW5rcyIsImZpbmQiLCJsaW5rIiwibWRTdGF0ZSIsIk1hdGgiLCJtYXgiLCJsZW5ndGgiLCJzdG9wUHJvcGFnYXRpb24iLCJmb3JtIiwibGFiZWxzIiwibGFiZWwiLCJ0YWJJbmRleCIsIkhUTUxBbmNob3JFbGVtZW50IiwibWRTb3VyY2UiLCJTb3VyY2UiLCJBZGFwdGVyIiwiR2l0SHViIiwic291cmNlcyIsIlJlcG9zaXRvcnkiLCJzb3VyY2UiLCJmYWN0cyIsImFwcCIsImNlIiwiY2FuY2VsYWJsZSIsImRlZmF1bHRQcmV2ZW50ZWQiLCJFcnJvciIsInBhcmFtcyIsImV2dCIsIm9yaWdQcmV2ZW50IiwiYnViYmxlcyIsImRldGFpbCIsInVuZGVmaW5lZCIsImNyZWF0ZUV2ZW50IiwiaW5pdEN1c3RvbUV2ZW50IiwiZGVmaW5lUHJvcGVydHkiLCJyZXF1aXJlIiwiZGVmYXVsdCIsInNldFRpbWVvdXRGdW5jIiwibm9vcCIsImZuIiwidGhpc0FyZyIsImFwcGx5IiwiYXJndW1lbnRzIiwiVHlwZUVycm9yIiwiX3N0YXRlIiwiX2hhbmRsZWQiLCJfdmFsdWUiLCJfZGVmZXJyZWRzIiwiZG9SZXNvbHZlIiwiaGFuZGxlIiwic2VsZiIsImRlZmVycmVkIiwiX2ltbWVkaWF0ZUZuIiwiY2IiLCJvbkZ1bGZpbGxlZCIsIm9uUmVqZWN0ZWQiLCJwcm9taXNlIiwicmV0IiwibmV3VmFsdWUiLCJmaW5hbGUiLCJfdW5oYW5kbGVkUmVqZWN0aW9uRm4iLCJsZW4iLCJIYW5kbGVyIiwiZG9uZSIsInJlYXNvbiIsImV4IiwicHJvbSIsImNvbnN0cnVjdG9yIiwicHJvbWlzZUZpbmFsbHkiLCJhcnIiLCJhcmdzIiwicmVtYWluaW5nIiwicmVzIiwidmFsIiwicmFjZSIsInZhbHVlcyIsInNldEltbWVkaWF0ZSIsImVyciIsImNvbnNvbGUiLCJ3YXJuIiwic2NvcGUiLCJnbG9iYWwiLCJUaW1lb3V0Iiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwidGltZW91dCIsImNsb3NlIiwiY2xlYXJGbiIsIl9pZCIsIl9jbGVhckZuIiwidW5yZWYiLCJyZWYiLCJlbnJvbGwiLCJtc2VjcyIsIl9pZGxlVGltZW91dElkIiwiX2lkbGVUaW1lb3V0IiwidW5lbnJvbGwiLCJfdW5yZWZBY3RpdmUiLCJhY3RpdmUiLCJvblRpbWVvdXQiLCJfb25UaW1lb3V0IiwiY2xlYXJJbW1lZGlhdGUiLCJuZXh0SGFuZGxlIiwidGFza3NCeUhhbmRsZSIsImN1cnJlbnRseVJ1bm5pbmdBVGFzayIsInJlZ2lzdGVySW1tZWRpYXRlIiwiY2FsbGJhY2siLCJ0YXNrIiwicnVuIiwicnVuSWZQcmVzZW50IiwiaW5zdGFsbE5leHRUaWNrSW1wbGVtZW50YXRpb24iLCJwcm9jZXNzIiwibmV4dFRpY2siLCJjYW5Vc2VQb3N0TWVzc2FnZSIsInBvc3RNZXNzYWdlIiwiaW1wb3J0U2NyaXB0cyIsInBvc3RNZXNzYWdlSXNBc3luY2hyb25vdXMiLCJvbGRPbk1lc3NhZ2UiLCJvbm1lc3NhZ2UiLCJpbnN0YWxsUG9zdE1lc3NhZ2VJbXBsZW1lbnRhdGlvbiIsIm1lc3NhZ2VQcmVmaXgiLCJyYW5kb20iLCJvbkdsb2JhbE1lc3NhZ2UiLCJhdHRhY2hFdmVudCIsImluc3RhbGxNZXNzYWdlQ2hhbm5lbEltcGxlbWVudGF0aW9uIiwiY2hhbm5lbCIsIk1lc3NhZ2VDaGFubmVsIiwicG9ydDEiLCJwb3J0MiIsImluc3RhbGxSZWFkeVN0YXRlQ2hhbmdlSW1wbGVtZW50YXRpb24iLCJodG1sIiwiZG9jdW1lbnRFbGVtZW50Iiwic2NyaXB0Iiwib25yZWFkeXN0YXRlY2hhbmdlIiwicmVtb3ZlQ2hpbGQiLCJpbnN0YWxsU2V0VGltZW91dEltcGxlbWVudGF0aW9uIiwiYXR0YWNoVG8iLCJnZXRQcm90b3R5cGVPZiIsImNhY2hlZFNldFRpbWVvdXQiLCJjYWNoZWRDbGVhclRpbWVvdXQiLCJkZWZhdWx0U2V0VGltb3V0IiwiZGVmYXVsdENsZWFyVGltZW91dCIsInJ1blRpbWVvdXQiLCJmdW4iLCJydW5DbGVhclRpbWVvdXQiLCJtYXJrZXIiLCJxdWV1ZSIsImRyYWluaW5nIiwiY3VycmVudFF1ZXVlIiwicXVldWVJbmRleCIsImNsZWFuVXBOZXh0VGljayIsImRyYWluUXVldWUiLCJJdGVtIiwiYXJyYXkiLCJ0aXRsZSIsImJyb3dzZXIiLCJlbnYiLCJhcmd2IiwidmVyc2lvbiIsInZlcnNpb25zIiwiYWRkTGlzdGVuZXIiLCJvbmNlIiwib2ZmIiwicmVtb3ZlTGlzdGVuZXIiLCJyZW1vdmVBbGxMaXN0ZW5lcnMiLCJlbWl0IiwicHJlcGVuZExpc3RlbmVyIiwicHJlcGVuZE9uY2VMaXN0ZW5lciIsImxpc3RlbmVycyIsIm5hbWUiLCJiaW5kaW5nIiwiY3dkIiwiY2hkaXIiLCJkaXIiLCJ1bWFzayIsImZpbmFsbHlDb25zdHJ1Y3RvciIsIndlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwicm9vdCIsImZhY3RvcnkiLCJkZWZpbmUiLCJtb2R1bGVzIiwiaW5zdGFsbGVkTW9kdWxlcyIsIl9fd2VicGFja19yZXF1aXJlX18iLCJtb2R1bGVJZCIsImwiLCJjIiwiZCIsImdldHRlciIsIm8iLCJjb25maWd1cmFibGUiLCJlbnVtZXJhYmxlIiwiX19lc01vZHVsZSIsImdldERlZmF1bHQiLCJnZXRNb2R1bGVFeHBvcnRzIiwib2JqZWN0IiwicHJvcGVydHkiLCJoYXNPd25Qcm9wZXJ0eSIsInAiLCJzIiwiX19XRUJQQUNLX0FNRF9ERUZJTkVfRkFDVE9SWV9fIiwiX19XRUJQQUNLX0FNRF9ERUZJTkVfQVJSQVlfXyIsIl9fV0VCUEFDS19BTURfREVGSU5FX1JFU1VMVF9fIiwibW9kIiwic2VsZWN0IiwiY2xpcGJvYXJkQWN0aW9uIiwiX3NlbGVjdCIsIl9zZWxlY3QyIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsIm9iaiIsIl90eXBlb2YiLCJTeW1ib2wiLCJpdGVyYXRvciIsIl9jbGFzc0NhbGxDaGVjayIsImluc3RhbmNlIiwiQ29uc3RydWN0b3IiLCJfY3JlYXRlQ2xhc3MiLCJkZWZpbmVQcm9wZXJ0aWVzIiwicHJvcHMiLCJkZXNjcmlwdG9yIiwid3JpdGFibGUiLCJwcm90b1Byb3BzIiwic3RhdGljUHJvcHMiLCJDbGlwYm9hcmRBY3Rpb24iLCJyZXNvbHZlT3B0aW9ucyIsImluaXRTZWxlY3Rpb24iLCJjb250YWluZXIiLCJlbWl0dGVyIiwic2VsZWN0ZWRUZXh0Iiwic2VsZWN0RmFrZSIsInNlbGVjdFRhcmdldCIsIl90aGlzIiwiaXNSVEwiLCJyZW1vdmVGYWtlIiwiZmFrZUhhbmRsZXJDYWxsYmFjayIsImZha2VIYW5kbGVyIiwiZmFrZUVsZW0iLCJzdHlsZSIsImZvbnRTaXplIiwiYm9yZGVyIiwicGFkZGluZyIsIm1hcmdpbiIsInBvc2l0aW9uIiwieVBvc2l0aW9uIiwicGFnZVlPZmZzZXQiLCJjb3B5VGV4dCIsInN1Y2NlZWRlZCIsImV4ZWNDb21tYW5kIiwiaGFuZGxlUmVzdWx0IiwiZ2V0U2VsZWN0aW9uIiwicmVtb3ZlQWxsUmFuZ2VzIiwiZGVzdHJveSIsInNldCIsIl9hY3Rpb24iLCJub2RlVHlwZSIsIl90YXJnZXQiLCJpcyIsImRlbGVnYXRlIiwidHlwZSIsInN0cmluZyIsImxpc3Rlbk5vZGUiLCJub2RlTGlzdCIsImxpc3Rlbk5vZGVMaXN0IiwibGlzdGVuU2VsZWN0b3IiLCJzZWxlY3RvciIsIkUiLCJjdHgiLCJsaXN0ZW5lciIsIl8iLCJldnRBcnIiLCJldnRzIiwibGl2ZUV2ZW50cyIsInRpbnlFbWl0dGVyIiwiZ29vZExpc3RlbmVyIiwiY2xpcGJvYXJkIiwiX2NsaXBib2FyZEFjdGlvbiIsIl90aW55RW1pdHRlciIsIl9nb29kTGlzdGVuZXIiLCJfY2xpcGJvYXJkQWN0aW9uMiIsIl90aW55RW1pdHRlcjIiLCJfZ29vZExpc3RlbmVyMiIsIl9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuIiwiX2luaGVyaXRzIiwic3ViQ2xhc3MiLCJzdXBlckNsYXNzIiwiY3JlYXRlIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJfRW1pdHRlciIsImxpc3RlbkNsaWNrIiwiZGVmYXVsdEFjdGlvbiIsImRlZmF1bHRUYXJnZXQiLCJkZWZhdWx0VGV4dCIsIl90aGlzMiIsIm9uQ2xpY2siLCJkZWxlZ2F0ZVRhcmdldCIsImN1cnJlbnRUYXJnZXQiLCJnZXRBdHRyaWJ1dGVWYWx1ZSIsImFjdGlvbnMiLCJzdXBwb3J0IiwicXVlcnlDb21tYW5kU3VwcG9ydGVkIiwic3VmZml4IiwiZWxlbWVudCIsImF0dHJpYnV0ZSIsIkRPQ1VNRU5UX05PREVfVFlQRSIsIkVsZW1lbnQiLCJtYXRjaGVzIiwicHJvdG8iLCJtYXRjaGVzU2VsZWN0b3IiLCJtb3pNYXRjaGVzU2VsZWN0b3IiLCJtc01hdGNoZXNTZWxlY3RvciIsIm9NYXRjaGVzU2VsZWN0b3IiLCJ3ZWJraXRNYXRjaGVzU2VsZWN0b3IiLCJjbG9zZXN0IiwiX2RlbGVnYXRlIiwidXNlQ2FwdHVyZSIsImxpc3RlbmVyRm4iLCJlbGVtZW50cyIsIlN0cmluZyIsIm5vZGVOYW1lIiwiaXNSZWFkT25seSIsInNldFNlbGVjdGlvblJhbmdlIiwic2VsZWN0aW9uIiwicmFuZ2UiLCJjcmVhdGVSYW5nZSIsInNlbGVjdE5vZGVDb250ZW50cyIsImFkZFJhbmdlIiwid2VicGFja1BvbHlmaWxsIiwiZGVwcmVjYXRlIiwicGF0aHMiLCJsYXllciIsIm9sZE9uQ2xpY2siLCJ0cmFja2luZ0NsaWNrIiwidHJhY2tpbmdDbGlja1N0YXJ0IiwidGFyZ2V0RWxlbWVudCIsInRvdWNoU3RhcnRYIiwidG91Y2hTdGFydFkiLCJsYXN0VG91Y2hJZGVudGlmaWVyIiwidG91Y2hCb3VuZGFyeSIsInRhcERlbGF5IiwidGFwVGltZW91dCIsIm5vdE5lZWRlZCIsImNvbnRleHQiLCJtZXRob2RzIiwiZGV2aWNlSXNBbmRyb2lkIiwib25Nb3VzZSIsIm9uVG91Y2hTdGFydCIsIm9uVG91Y2hNb3ZlIiwib25Ub3VjaEVuZCIsIm9uVG91Y2hDYW5jZWwiLCJzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24iLCJjYXB0dXJlIiwicm12IiwiaGlqYWNrZWQiLCJhZHYiLCJwcm9wYWdhdGlvblN0b3BwZWQiLCJvbmNsaWNrIiwiZGV2aWNlSXNXaW5kb3dzUGhvbmUiLCJkZXZpY2VJc0lPUyIsInRlc3QiLCJkZXZpY2VJc0lPUzQiLCJkZXZpY2VJc0lPU1dpdGhCYWRUYXJnZXQiLCJkZXZpY2VJc0JsYWNrQmVycnkxMCIsIm5lZWRzQ2xpY2siLCJkaXNhYmxlZCIsImNsYXNzTmFtZSIsIm5lZWRzRm9jdXMiLCJyZWFkT25seSIsInNlbmRDbGljayIsImNsaWNrRXZlbnQiLCJ0b3VjaCIsImNoYW5nZWRUb3VjaGVzIiwiaW5pdE1vdXNlRXZlbnQiLCJkZXRlcm1pbmVFdmVudFR5cGUiLCJzY3JlZW5YIiwic2NyZWVuWSIsImNsaWVudFgiLCJjbGllbnRZIiwiZm9yd2FyZGVkVG91Y2hFdmVudCIsInRhZ05hbWUiLCJ1cGRhdGVTY3JvbGxQYXJlbnQiLCJzY3JvbGxQYXJlbnQiLCJwYXJlbnRFbGVtZW50IiwiZmFzdENsaWNrU2Nyb2xsUGFyZW50IiwiY29udGFpbnMiLCJmYXN0Q2xpY2tMYXN0U2Nyb2xsVG9wIiwiZ2V0VGFyZ2V0RWxlbWVudEZyb21FdmVudFRhcmdldCIsImV2ZW50VGFyZ2V0IiwiVEVYVF9OT0RFIiwidGFyZ2V0VG91Y2hlcyIsInJhbmdlQ291bnQiLCJpc0NvbGxhcHNlZCIsImlkZW50aWZpZXIiLCJ0aW1lU3RhbXAiLCJwYWdlWCIsInBhZ2VZIiwibGFzdENsaWNrVGltZSIsInRvdWNoSGFzTW92ZWQiLCJib3VuZGFyeSIsImFicyIsImZpbmRDb250cm9sIiwibGFiZWxFbGVtZW50IiwiY29udHJvbCIsImh0bWxGb3IiLCJmb3JFbGVtZW50IiwidGFyZ2V0VGFnTmFtZSIsImNhbmNlbE5leHRDbGljayIsImVsZW1lbnRGcm9tUG9pbnQiLCJwYWdlWE9mZnNldCIsInBlcm1pdHRlZCIsIm1ldGFWaWV3cG9ydCIsImNocm9tZVZlcnNpb24iLCJibGFja2JlcnJ5VmVyc2lvbiIsImZpcmVmb3hWZXJzaW9uIiwib250b3VjaHN0YXJ0IiwiZXhlYyIsInNjcm9sbFdpZHRoIiwib3V0ZXJXaWR0aCIsIm1zVG91Y2hBY3Rpb24iLCJ0b3VjaEFjdGlvbiIsIm1xIiwibWVkaWEiLCJtYXRjaE1lZGlhIiwiZWxfIiwiaGVhZGVyXyIsImhlaWdodF8iLCJhY3RpdmVfIiwiY3VycmVudCIsIkhUTUxIZWFkaW5nRWxlbWVudCIsIndpZHRoIiwib2Zmc2V0V2lkdGgiLCJvZmZzZXRUb3AiLCJpbml0IiwiaW5kZXhfIiwib2Zmc2V0XyIsImRpcl8iLCJhbmNob3JzXyIsInJlZHVjZSIsImFuY2hvcnMiLCJvZmZzZXQiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJoZWlnaHQiLCJkaXNwbGF5Iiwib3ZlcmZsb3ciLCJtYXhIZWlnaHQiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJlbmQiLCJtYWluIiwid2Via2l0T3ZlcmZsb3dTY3JvbGxpbmciLCJ0b2dnbGVzIiwicGFuZSIsIm5leHRFbGVtZW50U2libGluZyIsImxvY2tfIiwic2Nyb2xsVG8iLCJlc2NhcGVIVE1MIiwiY3JlYXRlVGV4dE5vZGUiLCJ0cnVuY2F0ZSIsImxpc3QiLCJkYXRhXyIsIm1ldGFfIiwibGlzdF8iLCJtZXNzYWdlXyIsInBsYWNlaG9sZGVyIiwibm9uZSIsIm9uZSIsIm90aGVyIiwidG9rZW5pemVyIiwibHVuciIsInNlcGFyYXRvciIsImxhbmdfIiwic3BsaXQiLCJmaWx0ZXIiLCJCb29sZWFuIiwibGFuZyIsInRyaW0iLCJkb2NzXyIsImRvY3MiLCJwYXRoIiwiY29udGVudHMiLCJjaGFyIiwiTWFwIiwic3RhY2tfIiwiZmlsdGVycyIsInRyaW1tZXIiLCJzdG9wV29yZEZpbHRlciIsInBpcGVsaW5lIiwicmVzdWx0IiwidXNlIiwibXVsdGlMYW5ndWFnZSIsImZpZWxkIiwiYm9vc3QiLCJzcGxpY2UiLCJ2YWx1ZV8iLCJmaXJzdENoaWxkIiwidGVybSIsIndpbGRjYXJkIiwiUXVlcnkiLCJUUkFJTElORyIsIml0ZW1zIiwiUmVnRXhwIiwiaGlnaGxpZ2h0IiwidG9rZW4iLCJhcnRpY2xlIiwic2VjdGlvbnMiLCJzZWN0aW9uIiwic2hpZnQiLCJhbmNob3IiLCJldjIiLCJocmVmIiwic2l6ZSIsIm1hdGNoT3BlcmF0b3JzUmUiLCJzdHIiLCJidWlsZGVyIiwiQnVpbGRlciIsInN0ZW1tZXIiLCJzZWFyY2hQaXBlbGluZSIsImJ1aWxkIiwidXRpbHMiLCJhc1N0cmluZyIsIkZpZWxkUmVmIiwiZG9jUmVmIiwiZmllbGROYW1lIiwic3RyaW5nVmFsdWUiLCJfc3RyaW5nVmFsdWUiLCJqb2luZXIiLCJmcm9tU3RyaW5nIiwiZmllbGRSZWYiLCJTZXQiLCJjb21wbGV0ZSIsImludGVyc2VjdCIsInVuaW9uIiwiZW1wdHkiLCJhIiwiYiIsImludGVyc2VjdGlvbiIsImlkZiIsInBvc3RpbmciLCJkb2N1bWVudENvdW50IiwiZG9jdW1lbnRzV2l0aFRlcm0iLCJ4IiwibG9nIiwiVG9rZW4iLCJtZXRhZGF0YSIsInQiLCJ0b2tlbnMiLCJzbGljZUVuZCIsInNsaWNlU3RhcnQiLCJjaGFyQXQiLCJzbGljZUxlbmd0aCIsInRva2VuTWV0YWRhdGEiLCJQaXBlbGluZSIsIl9zdGFjayIsInJlZ2lzdGVyZWRGdW5jdGlvbnMiLCJyZWdpc3RlckZ1bmN0aW9uIiwid2FybklmRnVuY3Rpb25Ob3RSZWdpc3RlcmVkIiwiaXNSZWdpc3RlcmVkIiwibG9hZCIsInNlcmlhbGlzZWQiLCJmbk5hbWUiLCJmbnMiLCJhZnRlciIsImV4aXN0aW5nRm4iLCJuZXdGbiIsInBvcyIsImJlZm9yZSIsInN0YWNrTGVuZ3RoIiwibWVtbyIsImoiLCJrIiwicnVuU3RyaW5nIiwidG9KU09OIiwiVmVjdG9yIiwiX21hZ25pdHVkZSIsInBvc2l0aW9uRm9ySW5kZXgiLCJzdGFydCIsInBpdm90UG9pbnQiLCJmbG9vciIsInBpdm90SW5kZXgiLCJpbnNlcnQiLCJpbnNlcnRJZHgiLCJ1cHNlcnQiLCJtYWduaXR1ZGUiLCJzdW1PZlNxdWFyZXMiLCJlbGVtZW50c0xlbmd0aCIsInNxcnQiLCJkb3QiLCJvdGhlclZlY3RvciIsImRvdFByb2R1Y3QiLCJhTGVuIiwiYkxlbiIsImFWYWwiLCJiVmFsIiwic2ltaWxhcml0eSIsInRvQXJyYXkiLCJvdXRwdXQiLCJzdGVwMmxpc3QiLCJzdGVwM2xpc3QiLCJ2IiwiQyIsIlYiLCJtZ3IwIiwibWVxMSIsIm1ncjEiLCJzX3YiLCJyZV9tZ3IwIiwicmVfbWdyMSIsInJlX21lcTEiLCJyZV9zX3YiLCJyZV8xYSIsInJlMl8xYSIsInJlXzFiIiwicmUyXzFiIiwicmVfMWJfMiIsInJlMl8xYl8yIiwicmUzXzFiXzIiLCJyZTRfMWJfMiIsInJlXzFjIiwicmVfMiIsInJlXzMiLCJyZV80IiwicmUyXzQiLCJyZV81IiwicmVfNV8xIiwicmUzXzUiLCJwb3J0ZXJTdGVtbWVyIiwidyIsInN0ZW0iLCJmaXJzdGNoIiwicmUiLCJyZTIiLCJyZTMiLCJyZTQiLCJzdWJzdHIiLCJ0b1VwcGVyQ2FzZSIsImZwIiwiZ2VuZXJhdGVTdG9wV29yZEZpbHRlciIsInN0b3BXb3JkcyIsIndvcmRzIiwic3RvcFdvcmQiLCJUb2tlblNldCIsImZpbmFsIiwiZWRnZXMiLCJfbmV4dElkIiwiZnJvbUFycmF5IiwiZmluaXNoIiwiZnJvbUNsYXVzZSIsImNsYXVzZSIsImZyb21GdXp6eVN0cmluZyIsImVkaXREaXN0YW5jZSIsInN0YWNrIiwiZWRpdHNSZW1haW5pbmciLCJmcmFtZSIsInBvcCIsIm5vRWRpdE5vZGUiLCJkZWxldGlvbk5vZGUiLCJzdWJzdGl0dXRpb25Ob2RlIiwiaW5zZXJ0aW9uTm9kZSIsImNoYXJBIiwiY2hhckIiLCJ0cmFuc3Bvc2VOb2RlIiwibmV4dCIsInByZWZpeCIsImVkZ2UiLCJfc3RyIiwic29ydCIsInFOb2RlIiwicUVkZ2VzIiwicUxlbiIsIm5FZGdlcyIsIm5MZW4iLCJxIiwicUVkZ2UiLCJuRWRnZSIsInByZXZpb3VzV29yZCIsInVuY2hlY2tlZE5vZGVzIiwibWluaW1pemVkTm9kZXMiLCJ3b3JkIiwiY29tbW9uUHJlZml4IiwibWluaW1pemUiLCJjaGlsZCIsIm5leHROb2RlIiwiZG93blRvIiwiY2hpbGRLZXkiLCJJbmRleCIsImF0dHJzIiwiaW52ZXJ0ZWRJbmRleCIsImZpZWxkVmVjdG9ycyIsInRva2VuU2V0IiwiZmllbGRzIiwic2VhcmNoIiwicXVlcnlTdHJpbmciLCJwYXJzZXIiLCJRdWVyeVBhcnNlciIsIm1hdGNoaW5nRmllbGRzIiwicXVlcnlWZWN0b3JzIiwidGVybUZpZWxkQ2FjaGUiLCJyZXF1aXJlZE1hdGNoZXMiLCJwcm9oaWJpdGVkTWF0Y2hlcyIsImNsYXVzZXMiLCJ0ZXJtcyIsImNsYXVzZU1hdGNoZXMiLCJ1c2VQaXBlbGluZSIsInRlcm1Ub2tlblNldCIsImV4cGFuZGVkVGVybXMiLCJwcmVzZW5jZSIsIlJFUVVJUkVEIiwiZXhwYW5kZWRUZXJtIiwidGVybUluZGV4IiwiX2luZGV4IiwiZmllbGRQb3N0aW5nIiwibWF0Y2hpbmdEb2N1bWVudFJlZnMiLCJ0ZXJtRmllbGQiLCJtYXRjaGluZ0RvY3VtZW50c1NldCIsIlBST0hJQklURUQiLCJtYXRjaGluZ0RvY3VtZW50UmVmIiwibWF0Y2hpbmdGaWVsZFJlZiIsImZpZWxkTWF0Y2giLCJNYXRjaERhdGEiLCJhbGxSZXF1aXJlZE1hdGNoZXMiLCJhbGxQcm9oaWJpdGVkTWF0Y2hlcyIsIm1hdGNoaW5nRmllbGRSZWZzIiwicmVzdWx0cyIsImlzTmVnYXRlZCIsImZpZWxkVmVjdG9yIiwic2NvcmUiLCJkb2NNYXRjaCIsIm1hdGNoRGF0YSIsImNvbWJpbmUiLCJzZXJpYWxpemVkSW5kZXgiLCJzZXJpYWxpemVkVmVjdG9ycyIsInNlcmlhbGl6ZWRJbnZlcnRlZEluZGV4IiwidG9rZW5TZXRCdWlsZGVyIiwidHVwbGUiLCJfcmVmIiwiX2ZpZWxkcyIsIl9kb2N1bWVudHMiLCJmaWVsZFRlcm1GcmVxdWVuY2llcyIsImZpZWxkTGVuZ3RocyIsIl9iIiwiX2sxIiwibWV0YWRhdGFXaGl0ZWxpc3QiLCJhdHRyaWJ1dGVzIiwiUmFuZ2VFcnJvciIsIm51bWJlciIsImsxIiwiZXh0cmFjdG9yIiwiZmllbGRUZXJtcyIsIm1ldGFkYXRhS2V5IiwiY2FsY3VsYXRlQXZlcmFnZUZpZWxkTGVuZ3RocyIsImZpZWxkUmVmcyIsIm51bWJlck9mRmllbGRzIiwiYWNjdW11bGF0b3IiLCJkb2N1bWVudHNXaXRoRmllbGQiLCJhdmVyYWdlRmllbGRMZW5ndGgiLCJjcmVhdGVGaWVsZFZlY3RvcnMiLCJmaWVsZFJlZnNMZW5ndGgiLCJ0ZXJtSWRmQ2FjaGUiLCJmaWVsZExlbmd0aCIsInRlcm1GcmVxdWVuY2llcyIsInRlcm1zTGVuZ3RoIiwiZmllbGRCb29zdCIsImRvY0Jvb3N0IiwidGYiLCJzY29yZVdpdGhQcmVjaXNpb24iLCJyb3VuZCIsImNyZWF0ZVRva2VuU2V0IiwidW5zaGlmdCIsImNsb25lZE1ldGFkYXRhIiwibWV0YWRhdGFLZXlzIiwib3RoZXJNYXRjaERhdGEiLCJhbGxGaWVsZHMiLCJOT05FIiwiTEVBRElORyIsIk9QVElPTkFMIiwiUXVlcnlQYXJzZUVycm9yIiwiUXVlcnlMZXhlciIsImxleGVtZXMiLCJlc2NhcGVDaGFyUG9zaXRpb25zIiwic3RhdGUiLCJsZXhUZXh0Iiwic2xpY2VTdHJpbmciLCJzdWJTbGljZXMiLCJqb2luIiwiZXNjYXBlQ2hhcmFjdGVyIiwiRU9TIiwiaWdub3JlIiwiYmFja3VwIiwiYWNjZXB0RGlnaXRSdW4iLCJjaGFyQ29kZSIsImNoYXJDb2RlQXQiLCJtb3JlIiwiRklFTEQiLCJURVJNIiwiRURJVF9ESVNUQU5DRSIsIkJPT1NUIiwiUFJFU0VOQ0UiLCJsZXhGaWVsZCIsImxleGVyIiwibGV4VGVybSIsImxleEVkaXREaXN0YW5jZSIsImxleEJvb3N0IiwibGV4RU9TIiwidGVybVNlcGFyYXRvciIsImN1cnJlbnRDbGF1c2UiLCJsZXhlbWVJZHgiLCJwYXJzZUNsYXVzZSIsInBlZWtMZXhlbWUiLCJjb25zdW1lTGV4ZW1lIiwibGV4ZW1lIiwibmV4dENsYXVzZSIsImNvbXBsZXRlZENsYXVzZSIsInBhcnNlUHJlc2VuY2UiLCJwYXJzZUZpZWxkIiwicGFyc2VUZXJtIiwiZXJyb3JNZXNzYWdlIiwibmV4dExleGVtZSIsInBvc3NpYmxlRmllbGRzIiwiZiIsInBhcnNlRWRpdERpc3RhbmNlIiwicGFyc2VCb29zdCIsImlzTmFOIiwicGFyZW50XyIsInBhZF8iLCJnZXRDb21wdXRlZFN0eWxlIiwidmlzaWJsZSIsImlubmVySGVpZ2h0IiwiYm91bmRzIiwiYm90dG9tIiwiYmFzZV8iLCJ1c2VyIiwibmFtZV8iLCJmZXRjaF8iLCJwYWdpbmF0ZSIsInBhZ2UiLCJyZXBvIiwiZm9ybWF0XyIsInN0YXJnYXplcnNfY291bnQiLCJmb3Jrc19jb3VudCIsIkFic3RyYWN0Iiwic2FsdF8iLCJoYXNoXyIsImNhY2hlZCIsIkNvb2tpZXMiLCJnZXRKU09OIiwiZXhwaXJlcyIsInRvRml4ZWQiLCJyZWdpc3RlcmVkSW5Nb2R1bGVMb2FkZXIiLCJPbGRDb29raWVzIiwiYXBpIiwibm9Db25mbGljdCIsImV4dGVuZCIsImNvbnZlcnRlciIsImRlZmF1bHRzIiwiRGF0ZSIsInNldE1pbGxpc2Vjb25kcyIsImdldE1pbGxpc2Vjb25kcyIsInRvVVRDU3RyaW5nIiwic3RyaW5naWZ5Iiwid3JpdGUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJkZWNvZGVVUklDb21wb25lbnQiLCJlc2NhcGUiLCJzdHJpbmdpZmllZEF0dHJpYnV0ZXMiLCJhdHRyaWJ1dGVOYW1lIiwiY29va2llIiwiY29va2llcyIsInJkZWNvZGUiLCJwYXJ0cyIsInJlYWQiLCJ3aXRoQ29udmVydGVyIiwiZmFjdCIsInRvTGV2ZWwiLCJ0b0l0ZW0iLCJsZXZlbCIsInRvSXRlbXMiLCJuZXh0V2l0aExvd2VyTGV2ZWwiLCJ0b1RPQyIsImlkeCIsInByZXZpb3VzIiwidG9jIiwidG9jSXRlbSIsIlRvY0l0ZW0iXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEw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ekIsR0FBYjtBQUNBN1csTUFBSWxSLFdBQUosQ0FBZ0IrbkIsSUFBaEI7QUFDQSxPQUFLLElBQUkxbUIsSUFBSSxDQUFiLEVBQWdCQSxJQUFJZ2hDLElBQUl4MkIsTUFBeEIsRUFBZ0N4SyxHQUFoQyxFQUFxQztBQUNuQyxRQUFNaWhDLFVBQVVELElBQUloaEMsQ0FBSixDQUFoQjtBQUNBMG1CLFNBQUsvbkIsV0FBTCxDQUFpQnVpQyxRQUFRRCxPQUFSLENBQWpCO0FBQ0Q7QUFDRixDQXJCRDs7QUF1QkEsSUFBTUMsVUFBVSxTQUFWQSxPQUFVLENBQUNELE9BQUQ7QUFBQSxTQUNkO0FBQUE7QUFBQSxNQUFJLFNBQU0sY0FBVjtBQUNFO0FBQUE7QUFBQSxRQUFHLE1BQU0sTUFBTUEsUUFBUXhqQyxFQUFSLENBQVcySCxFQUExQixFQUE4QixPQUFPNjdCLFFBQVF4akMsRUFBUixDQUFXMkgsRUFBaEQsRUFBb0QsU0FBTSxjQUExRDtBQUNLNjdCLGNBQVF4akMsRUFBUixDQUFXZ0I7QUFEaEIsS0FERjtBQUtHd2lDLFlBQVFyaUMsUUFBUixDQUFpQjRMLE1BQWpCLEdBQTBCLENBQTFCLElBQ0M7QUFBQTtBQUFBLFFBQUssU0FBTSxRQUFYO0FBQ0U7QUFBQTtBQUFBLFVBQUksU0FBTSxjQUFWO0FBQ0d5MkIsZ0JBQVFyaUMsUUFBUixDQUFpQm9LLEdBQWpCLENBQXFCO0FBQUEsaUJBQVNrNEIsUUFBUTFNLEtBQVIsQ0FBVDtBQUFBLFNBQXJCO0FBREg7QUFERjtBQU5KLEdBRGM7QUFBQSxDQUFoQjs7a0JBZ0JldHNCLE0iLCJmaWxlIjoiamF2YXNjcmlwdHMvYXBwbGljYXRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA3KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA3YTczMmYwYyIsIi8qXHJcbiAqIENvcHlyaWdodCAoYykgMjAxNi0yMDE4IE1hcnRpbiBEb25hdGggPG1hcnRpbi5kb25hdGhAc3F1aWRmdW5rLmNvbT5cclxuICpcclxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxyXG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0b1xyXG4gKiBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZVxyXG4gKiByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3JcclxuICogc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcclxuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcclxuICpcclxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cclxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcbiAqXHJcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcclxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXHJcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT04tSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcclxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxyXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lOR1xyXG4gKiBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTXHJcbiAqIElOIFRIRSBTT0ZUV0FSRS5cclxuICovXHJcblxyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqIE1vZHVsZVxyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcblxyXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlcnNjb3JlLWRhbmdsZSAqL1xyXG5leHBvcnQgZGVmYXVsdCAvKiBKU1ggKi8ge1xyXG5cclxuICAvKipcclxuICAgKiBDcmVhdGUgYSBuYXRpdmUgRE9NIG5vZGUgZnJvbSBKU1gncyBpbnRlcm1lZGlhdGUgcmVwcmVzZW50YXRpb25cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0YWcgLSBUYWcgbmFtZVxyXG4gICAqIEBwYXJhbSB7P09iamVjdH0gcHJvcGVydGllcyAtIFByb3BlcnRpZXNcclxuICAgKiBAcGFyYW0ge0FycmF5PHN0cmluZyB8IG51bWJlciB8IHsgX19odG1sOiBzdHJpbmcgfSB8IEFycmF5PEhUTUxFbGVtZW50Pj59XHJcbiAgICogICBjaGlsZHJlbiAtIENoaWxkIG5vZGVzXHJcbiAgICogQHJldHVybiB7SFRNTEVsZW1lbnR9IE5hdGl2ZSBET00gbm9kZVxyXG4gICAqL1xyXG4gIGNyZWF0ZUVsZW1lbnQodGFnLCBwcm9wZXJ0aWVzLCAuLi5jaGlsZHJlbikge1xyXG4gICAgY29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZylcclxuXHJcbiAgICAvKiBTZXQgYWxsIHByb3BlcnRpZXMgKi9cclxuICAgIGlmIChwcm9wZXJ0aWVzKVxyXG4gICAgICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKE9iamVjdC5rZXlzKHByb3BlcnRpZXMpLCBhdHRyID0+IHtcclxuICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoYXR0ciwgcHJvcGVydGllc1thdHRyXSlcclxuICAgICAgfSlcclxuXHJcbiAgICAvKiBJdGVyYXRlIGNoaWxkIG5vZGVzICovXHJcbiAgICBjb25zdCBpdGVyYXRlQ2hpbGROb2RlcyA9IG5vZGVzID0+IHtcclxuICAgICAgQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChub2Rlcywgbm9kZSA9PiB7XHJcblxyXG4gICAgICAgIC8qIERpcmVjdGx5IGFwcGVuZCB0ZXh0IGNvbnRlbnQgKi9cclxuICAgICAgICBpZiAodHlwZW9mIG5vZGUgPT09IFwic3RyaW5nXCIgfHxcclxuICAgICAgICAgICAgdHlwZW9mIG5vZGUgPT09IFwibnVtYmVyXCIpIHtcclxuICAgICAgICAgIGVsLnRleHRDb250ZW50ICs9IG5vZGVcclxuXHJcbiAgICAgICAgLyogUmVjdXJzZSwgaWYgd2UgZ290IGFuIGFycmF5ICovXHJcbiAgICAgICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KG5vZGUpKSB7XHJcbiAgICAgICAgICBpdGVyYXRlQ2hpbGROb2Rlcyhub2RlKVxyXG5cclxuICAgICAgICAvKiBBcHBlbmQgcmF3IEhUTUwgKi9cclxuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBub2RlLl9faHRtbCAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgZWwuaW5uZXJIVE1MICs9IG5vZGUuX19odG1sXHJcblxyXG4gICAgICAgIC8qIEFwcGVuZCByZWd1bGFyIG5vZGVzICovXHJcbiAgICAgICAgfSBlbHNlIGlmIChub2RlIGluc3RhbmNlb2YgTm9kZSkge1xyXG4gICAgICAgICAgZWwuYXBwZW5kQ2hpbGQobm9kZSlcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLyogSXRlcmF0ZSBjaGlsZCBub2RlcyBhbmQgcmV0dXJuIGVsZW1lbnQgKi9cclxuICAgIGl0ZXJhdGVDaGlsZE5vZGVzKGNoaWxkcmVuKVxyXG4gICAgcmV0dXJuIGVsXHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hc3NldHMvamF2YXNjcmlwdHMvcHJvdmlkZXJzL2pzeC5qcyIsInZhciBnO1xyXG5cclxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcclxuZyA9IChmdW5jdGlvbigpIHtcclxuXHRyZXR1cm4gdGhpcztcclxufSkoKTtcclxuXHJcbnRyeSB7XHJcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXHJcblx0ZyA9IGcgfHwgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpIHx8ICgxLGV2YWwpKFwidGhpc1wiKTtcclxufSBjYXRjaChlKSB7XHJcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcclxuXHRpZih0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKVxyXG5cdFx0ZyA9IHdpbmRvdztcclxufVxyXG5cclxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxyXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xyXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGc7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAod2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ2YXIgaW5kZXggPSB0eXBlb2YgZmV0Y2g9PSdmdW5jdGlvbicgPyBmZXRjaC5iaW5kKCkgOiBmdW5jdGlvbih1cmwsIG9wdGlvbnMpIHtcblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cdHJldHVybiBuZXcgUHJvbWlzZSggZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuXHRcdHZhciByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG5cblx0XHRyZXF1ZXN0Lm9wZW4ob3B0aW9ucy5tZXRob2QgfHwgJ2dldCcsIHVybCwgdHJ1ZSk7XG5cblx0XHRmb3IgKHZhciBpIGluIG9wdGlvbnMuaGVhZGVycykge1xuXHRcdFx0cmVxdWVzdC5zZXRSZXF1ZXN0SGVhZGVyKGksIG9wdGlvbnMuaGVhZGVyc1tpXSk7XG5cdFx0fVxuXG5cdFx0cmVxdWVzdC53aXRoQ3JlZGVudGlhbHMgPSBvcHRpb25zLmNyZWRlbnRpYWxzPT0naW5jbHVkZSc7XG5cblx0XHRyZXF1ZXN0Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlc29sdmUocmVzcG9uc2UoKSk7XG5cdFx0fTtcblxuXHRcdHJlcXVlc3Qub25lcnJvciA9IHJlamVjdDtcblxuXHRcdHJlcXVlc3Quc2VuZChvcHRpb25zLmJvZHkgfHwgbnVsbCk7XG5cblx0XHRmdW5jdGlvbiByZXNwb25zZSgpIHtcblx0XHRcdHZhciBrZXlzID0gW10sXG5cdFx0XHRcdGFsbCA9IFtdLFxuXHRcdFx0XHRoZWFkZXJzID0ge30sXG5cdFx0XHRcdGhlYWRlcjtcblxuXHRcdFx0cmVxdWVzdC5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKS5yZXBsYWNlKC9eKC4qPyk6W15cXFNcXG5dKihbXFxzXFxTXSo/KSQvZ20sIGZ1bmN0aW9uIChtLCBrZXksIHZhbHVlKSB7XG5cdFx0XHRcdGtleXMucHVzaChrZXkgPSBrZXkudG9Mb3dlckNhc2UoKSk7XG5cdFx0XHRcdGFsbC5wdXNoKFtrZXksIHZhbHVlXSk7XG5cdFx0XHRcdGhlYWRlciA9IGhlYWRlcnNba2V5XTtcblx0XHRcdFx0aGVhZGVyc1trZXldID0gaGVhZGVyID8gKGhlYWRlciArIFwiLFwiICsgdmFsdWUpIDogdmFsdWU7XG5cdFx0XHR9KTtcblxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0b2s6IChyZXF1ZXN0LnN0YXR1cy8xMDB8MCkgPT0gMixcdFx0Ly8gMjAwLTI5OVxuXHRcdFx0XHRzdGF0dXM6IHJlcXVlc3Quc3RhdHVzLFxuXHRcdFx0XHRzdGF0dXNUZXh0OiByZXF1ZXN0LnN0YXR1c1RleHQsXG5cdFx0XHRcdHVybDogcmVxdWVzdC5yZXNwb25zZVVSTCxcblx0XHRcdFx0Y2xvbmU6IHJlc3BvbnNlLFxuXHRcdFx0XHR0ZXh0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBQcm9taXNlLnJlc29sdmUocmVxdWVzdC5yZXNwb25zZVRleHQpOyB9LFxuXHRcdFx0XHRqc29uOiBmdW5jdGlvbiAoKSB7IHJldHVybiBQcm9taXNlLnJlc29sdmUocmVxdWVzdC5yZXNwb25zZVRleHQpLnRoZW4oSlNPTi5wYXJzZSk7IH0sXG5cdFx0XHRcdGJsb2I6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFByb21pc2UucmVzb2x2ZShuZXcgQmxvYihbcmVxdWVzdC5yZXNwb25zZV0pKTsgfSxcblx0XHRcdFx0aGVhZGVyczoge1xuXHRcdFx0XHRcdGtleXM6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGtleXM7IH0sXG5cdFx0XHRcdFx0ZW50cmllczogZnVuY3Rpb24gKCkgeyByZXR1cm4gYWxsOyB9LFxuXHRcdFx0XHRcdGdldDogZnVuY3Rpb24gKG4pIHsgcmV0dXJuIGhlYWRlcnNbbi50b0xvd2VyQ2FzZSgpXTsgfSxcblx0XHRcdFx0XHRoYXM6IGZ1bmN0aW9uIChuKSB7IHJldHVybiBuLnRvTG93ZXJDYXNlKCkgaW4gaGVhZGVyczsgfVxuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXHRcdH1cblx0fSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBpbmRleDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVuZmV0Y2guZXMuanMubWFwXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdW5mZXRjaC9kaXN0L3VuZmV0Y2guZXMuanMiLCIvKiBnbG9iYWxzIF9fd2VicGFja19hbWRfb3B0aW9uc19fICovXHJcbm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX2FtZF9vcHRpb25zX187XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vICh3ZWJwYWNrKS9idWlsZGluL2FtZC1vcHRpb25zLmpzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXHJcbiAqIENvcHlyaWdodCAoYykgMjAxNi0yMDE4IE1hcnRpbiBEb25hdGggPG1hcnRpbi5kb25hdGhAc3F1aWRmdW5rLmNvbT5cclxuICpcclxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxyXG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0b1xyXG4gKiBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZVxyXG4gKiByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3JcclxuICogc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcclxuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcclxuICpcclxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cclxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcbiAqXHJcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcclxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXHJcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT04tSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcclxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxyXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lOR1xyXG4gKiBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTXHJcbiAqIElOIFRIRSBTT0ZUV0FSRS5cclxuICovXHJcblxyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqIENsYXNzXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpc3RlbmVyIHtcclxuXHJcbiAgLyoqXHJcbiAgICogR2VuZXJpYyBldmVudCBsaXN0ZW5lclxyXG4gICAqXHJcbiAgICogQGNvbnN0cnVjdG9yXHJcbiAgICpcclxuICAgKiBAcHJvcGVydHkgeyhBcnJheTxFdmVudFRhcmdldD4pfSBlbHNfIC0gRXZlbnQgdGFyZ2V0c1xyXG4gICAqIEBwcm9wZXJ0eSB7T2JqZWN0fSBoYW5kbGVyXy0gRXZlbnQgaGFuZGxlcnNcclxuICAgKiBAcHJvcGVydHkge0FycmF5PHN0cmluZz59IGV2ZW50c18gLSBFdmVudCBuYW1lc1xyXG4gICAqIEBwcm9wZXJ0eSB7RnVuY3Rpb259IHVwZGF0ZV8gLSBVcGRhdGUgaGFuZGxlclxyXG4gICAqXHJcbiAgICogQHBhcmFtIHs/KHN0cmluZ3xFdmVudFRhcmdldHxOb2RlTGlzdDxFdmVudFRhcmdldD4pfSBlbHMgLVxyXG4gICAqICAgU2VsZWN0b3Igb3IgRXZlbnQgdGFyZ2V0c1xyXG4gICAqIEBwYXJhbSB7KHN0cmluZ3xBcnJheTxzdHJpbmc+KX0gZXZlbnRzIC0gRXZlbnQgbmFtZXNcclxuICAgKiBAcGFyYW0geyhPYmplY3R8RnVuY3Rpb24pfSBoYW5kbGVyIC0gSGFuZGxlciB0byBiZSBpbnZva2VkXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoZWxzLCBldmVudHMsIGhhbmRsZXIpIHtcclxuICAgIHRoaXMuZWxzXyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKFxyXG4gICAgICAodHlwZW9mIGVscyA9PT0gXCJzdHJpbmdcIilcclxuICAgICAgICA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoZWxzKVxyXG4gICAgICAgIDogW10uY29uY2F0KGVscykpXHJcblxyXG4gICAgLyogU2V0IGhhbmRsZXIgYXMgZnVuY3Rpb24gb3IgZGlyZWN0bHkgYXMgb2JqZWN0ICovXHJcbiAgICB0aGlzLmhhbmRsZXJfID0gdHlwZW9mIGhhbmRsZXIgPT09IFwiZnVuY3Rpb25cIlxyXG4gICAgICA/IHsgdXBkYXRlOiBoYW5kbGVyIH1cclxuICAgICAgOiBoYW5kbGVyXHJcblxyXG4gICAgLyogSW5pdGlhbGl6ZSBldmVudCBuYW1lcyBhbmQgdXBkYXRlIGhhbmRsZXIgKi9cclxuICAgIHRoaXMuZXZlbnRzXyA9IFtdLmNvbmNhdChldmVudHMpXHJcbiAgICB0aGlzLnVwZGF0ZV8gPSBldiA9PiB0aGlzLmhhbmRsZXJfLnVwZGF0ZShldilcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlZ2lzdGVyIGxpc3RlbmVyIGZvciBhbGwgcmVsZXZhbnQgZXZlbnRzXHJcbiAgICovXHJcbiAgbGlzdGVuKCkge1xyXG4gICAgdGhpcy5lbHNfLmZvckVhY2goZWwgPT4ge1xyXG4gICAgICB0aGlzLmV2ZW50c18uZm9yRWFjaChldmVudCA9PiB7XHJcbiAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgdGhpcy51cGRhdGVfLCBmYWxzZSlcclxuICAgICAgfSlcclxuICAgIH0pXHJcblxyXG4gICAgLyogRXhlY3V0ZSBzZXR1cCBoYW5kbGVyLCBpZiBpbXBsZW1lbnRlZCAqL1xyXG4gICAgaWYgKHR5cGVvZiB0aGlzLmhhbmRsZXJfLnNldHVwID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgIHRoaXMuaGFuZGxlcl8uc2V0dXAoKVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVW5yZWdpc3RlciBsaXN0ZW5lciBmb3IgYWxsIHJlbGV2YW50IGV2ZW50c1xyXG4gICAqL1xyXG4gIHVubGlzdGVuKCkge1xyXG4gICAgdGhpcy5lbHNfLmZvckVhY2goZWwgPT4ge1xyXG4gICAgICB0aGlzLmV2ZW50c18uZm9yRWFjaChldmVudCA9PiB7XHJcbiAgICAgICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgdGhpcy51cGRhdGVfKVxyXG4gICAgICB9KVxyXG4gICAgfSlcclxuXHJcbiAgICAvKiBFeGVjdXRlIHJlc2V0IGhhbmRsZXIsIGlmIGltcGxlbWVudGVkICovXHJcbiAgICBpZiAodHlwZW9mIHRoaXMuaGFuZGxlcl8ucmVzZXQgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgdGhpcy5oYW5kbGVyXy5yZXNldCgpXHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hc3NldHMvamF2YXNjcmlwdHMvY29tcG9uZW50cy9NYXRlcmlhbC9FdmVudC9MaXN0ZW5lci5qcyIsIi8qXHJcbiAqIENvcHlyaWdodCAoYykgMjAxNi0yMDE4IE1hcnRpbiBEb25hdGggPG1hcnRpbi5kb25hdGhAc3F1aWRmdW5rLmNvbT5cclxuICpcclxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxyXG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0b1xyXG4gKiBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZVxyXG4gKiByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3JcclxuICogc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcclxuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcclxuICpcclxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cclxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcbiAqXHJcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcclxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXHJcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT04tSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcclxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxyXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lOR1xyXG4gKiBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTXHJcbiAqIElOIFRIRSBTT0ZUV0FSRS5cclxuICovXHJcblxyXG5pbXBvcnQgXCIuLi9pbWFnZXMvaWNvbnMvYml0YnVja2V0LnN2Z1wiXHJcbmltcG9ydCBcIi4uL2ltYWdlcy9pY29ucy9naXRodWIuc3ZnXCJcclxuaW1wb3J0IFwiLi4vaW1hZ2VzL2ljb25zL2dpdGxhYi5zdmdcIlxyXG5cclxuaW1wb3J0IFwiLi4vc3R5bGVzaGVldHMvYXBwbGljYXRpb24uc2Nzc1wiXHJcbmltcG9ydCBcIi4uL3N0eWxlc2hlZXRzL2FwcGxpY2F0aW9uLXBhbGV0dGUuc2Nzc1wiXHJcblxyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqIFBvbHlmaWxsc1xyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcblxyXG5pbXBvcnQgXCJjdXN0b20tZXZlbnQtcG9seWZpbGxcIlxyXG5pbXBvcnQgXCJ1bmZldGNoL3BvbHlmaWxsXCJcclxuXHJcbmltcG9ydCBQcm9taXNlIGZyb20gXCJwcm9taXNlLXBvbHlmaWxsXCJcclxud2luZG93LlByb21pc2UgPSB3aW5kb3cuUHJvbWlzZSB8fCBQcm9taXNlXHJcblxyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqIERlcGVuZGVuY2llc1xyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcblxyXG5pbXBvcnQgQ2xpcGJvYXJkIGZyb20gXCJjbGlwYm9hcmRcIlxyXG5pbXBvcnQgRmFzdENsaWNrIGZyb20gXCJmYXN0Y2xpY2tcIlxyXG5cclxuaW1wb3J0IE1hdGVyaWFsIGZyb20gXCIuL2NvbXBvbmVudHMvTWF0ZXJpYWxcIlxyXG5cclxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiBGdW5jdGlvbnNcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG5cclxuLyoqXHJcbiAqIFJldHVybiB0aGUgbWV0YSB0YWcgdmFsdWUgZm9yIHRoZSBnaXZlbiBrZXlcclxuICpcclxuICogQHBhcmFtIHtzdHJpbmd9IGtleSAtIE1ldGEgbmFtZVxyXG4gKlxyXG4gKiBAcmV0dXJuIHtzdHJpbmd9IE1ldGEgY29udGVudCB2YWx1ZVxyXG4gKi9cclxuY29uc3QgdHJhbnNsYXRlID0ga2V5ID0+IHtcclxuICBjb25zdCBtZXRhID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoYGxhbmc6JHtrZXl9YClbMF1cclxuICBpZiAoIShtZXRhIGluc3RhbmNlb2YgSFRNTE1ldGFFbGVtZW50KSlcclxuICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvclxyXG4gIHJldHVybiBtZXRhLmNvbnRlbnRcclxufVxyXG5cclxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiBBcHBsaWNhdGlvblxyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcblxyXG4vKipcclxuICogSW5pdGlhbGl6ZSBNYXRlcmlhbCBmb3IgTWtEb2NzXHJcbiAqXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgLSBDb25maWd1cmF0aW9uXHJcbiAqL1xyXG5mdW5jdGlvbiBpbml0aWFsaXplKGNvbmZpZykgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGZ1bmMtc3R5bGVcclxuXHJcbiAgLyogSW5pdGlhbGl6ZSBNb2Rlcm5penIgYW5kIEZhc3RDbGljayAqL1xyXG4gIG5ldyBNYXRlcmlhbC5FdmVudC5MaXN0ZW5lcihkb2N1bWVudCwgXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcclxuICAgIGlmICghKGRvY3VtZW50LmJvZHkgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpXHJcbiAgICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvclxyXG5cclxuICAgIC8qIEF0dGFjaCBGYXN0Q2xpY2sgdG8gbWl0aWdhdGUgMzAwbXMgZGVsYXkgb24gdG91Y2ggZGV2aWNlcyAqL1xyXG4gICAgRmFzdENsaWNrLmF0dGFjaChkb2N1bWVudC5ib2R5KVxyXG5cclxuICAgIC8qIFRlc3QgZm9yIGlPUyAqL1xyXG4gICAgTW9kZXJuaXpyLmFkZFRlc3QoXCJpb3NcIiwgKCkgPT4ge1xyXG4gICAgICByZXR1cm4gISFuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC8oaVBhZHxpUGhvbmV8aVBvZCkvZylcclxuICAgIH0pXHJcblxyXG4gICAgLyogV3JhcCBhbGwgZGF0YSB0YWJsZXMgZm9yIGJldHRlciBvdmVyZmxvdyBzY3JvbGxpbmcgKi9cclxuICAgIGNvbnN0IHRhYmxlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJ0YWJsZTpub3QoW2NsYXNzXSlcIikgICAgICAgICAgICAgIC8vIFRPRE86IHRoaXMgaXMgSlNYLCB3ZSBzaG91bGQgcmVuYW1lIHRoZSBmaWxlXHJcbiAgICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKHRhYmxlcywgdGFibGUgPT4ge1xyXG4gICAgICBjb25zdCB3cmFwID0gKFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJtZC10eXBlc2V0X19zY3JvbGx3cmFwXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibWQtdHlwZXNldF9fdGFibGVcIj48L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKVxyXG4gICAgICBpZiAodGFibGUubmV4dFNpYmxpbmcpIHtcclxuICAgICAgICB0YWJsZS5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh3cmFwLCB0YWJsZS5uZXh0U2libGluZylcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0YWJsZS5wYXJlbnROb2RlLmFwcGVuZENoaWxkKHdyYXApXHJcbiAgICAgIH1cclxuICAgICAgd3JhcC5jaGlsZHJlblswXS5hcHBlbmRDaGlsZCh0YWJsZSlcclxuICAgIH0pXHJcblxyXG4gICAgLyogQ2xpcGJvYXJkIGludGVncmF0aW9uICovXHJcbiAgICBpZiAoQ2xpcGJvYXJkLmlzU3VwcG9ydGVkKCkpIHtcclxuICAgICAgY29uc3QgYmxvY2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jb2RlaGlsaXRlID4gcHJlLCBwcmUgPiBjb2RlXCIpXHJcbiAgICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoYmxvY2tzLCAoYmxvY2ssIGluZGV4KSA9PiB7XHJcbiAgICAgICAgY29uc3QgaWQgPSBgX19jb2RlXyR7aW5kZXh9YFxyXG5cclxuICAgICAgICAvKiBDcmVhdGUgYnV0dG9uIHdpdGggbWVzc2FnZSBjb250YWluZXIgKi9cclxuICAgICAgICBjb25zdCBidXR0b24gPSAoXHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwibWQtY2xpcGJvYXJkXCIgdGl0bGU9e3RyYW5zbGF0ZShcImNsaXBib2FyZC5jb3B5XCIpfVxyXG4gICAgICAgICAgICBkYXRhLWNsaXBib2FyZC10YXJnZXQ9e2AjJHtpZH0gcHJlLCAjJHtpZH0gY29kZWB9PlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1kLWNsaXBib2FyZF9fbWVzc2FnZVwiPjwvc3Bhbj5cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIClcclxuXHJcbiAgICAgICAgLyogTGluayB0byBibG9jayBhbmQgaW5zZXJ0IGJ1dHRvbiAqL1xyXG4gICAgICAgIGNvbnN0IHBhcmVudCA9IGJsb2NrLnBhcmVudE5vZGVcclxuICAgICAgICBwYXJlbnQuaWQgPSBpZFxyXG4gICAgICAgIHBhcmVudC5pbnNlcnRCZWZvcmUoYnV0dG9uLCBibG9jaylcclxuICAgICAgfSlcclxuXHJcbiAgICAgIC8qIEluaXRpYWxpemUgQ2xpcGJvYXJkIGxpc3RlbmVyICovXHJcbiAgICAgIGNvbnN0IGNvcHkgPSBuZXcgQ2xpcGJvYXJkKFwiLm1kLWNsaXBib2FyZFwiKVxyXG5cclxuICAgICAgLyogU3VjY2VzcyBoYW5kbGVyICovXHJcbiAgICAgIGNvcHkub24oXCJzdWNjZXNzXCIsIGFjdGlvbiA9PiB7XHJcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IGFjdGlvbi50cmlnZ2VyLnF1ZXJ5U2VsZWN0b3IoXCIubWQtY2xpcGJvYXJkX19tZXNzYWdlXCIpXHJcbiAgICAgICAgaWYgKCEobWVzc2FnZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSlcclxuICAgICAgICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvclxyXG5cclxuICAgICAgICAvKiBDbGVhciBzZWxlY3Rpb24gYW5kIHJlc2V0IGRlYm91bmNlIGxvZ2ljICovXHJcbiAgICAgICAgYWN0aW9uLmNsZWFyU2VsZWN0aW9uKClcclxuICAgICAgICBpZiAobWVzc2FnZS5kYXRhc2V0Lm1kVGltZXIpXHJcbiAgICAgICAgICBjbGVhclRpbWVvdXQocGFyc2VJbnQobWVzc2FnZS5kYXRhc2V0Lm1kVGltZXIsIDEwKSlcclxuXHJcbiAgICAgICAgLyogU2V0IG1lc3NhZ2UgaW5kaWNhdGluZyBzdWNjZXNzIGFuZCBzaG93IGl0ICovXHJcbiAgICAgICAgbWVzc2FnZS5jbGFzc0xpc3QuYWRkKFwibWQtY2xpcGJvYXJkX19tZXNzYWdlLS1hY3RpdmVcIilcclxuICAgICAgICBtZXNzYWdlLmlubmVySFRNTCA9IHRyYW5zbGF0ZShcImNsaXBib2FyZC5jb3BpZWRcIilcclxuXHJcbiAgICAgICAgLyogSGlkZSBtZXNzYWdlIGFmdGVyIHR3byBzZWNvbmRzICovXHJcbiAgICAgICAgbWVzc2FnZS5kYXRhc2V0Lm1kVGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgIG1lc3NhZ2UuY2xhc3NMaXN0LnJlbW92ZShcIm1kLWNsaXBib2FyZF9fbWVzc2FnZS0tYWN0aXZlXCIpXHJcbiAgICAgICAgICBtZXNzYWdlLmRhdGFzZXQubWRUaW1lciA9IFwiXCJcclxuICAgICAgICB9LCAyMDAwKS50b1N0cmluZygpXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLyogUG9seWZpbGwgZGV0YWlscy9zdW1tYXJ5IGZ1bmN0aW9uYWxpdHkgKi9cclxuICAgIGlmICghTW9kZXJuaXpyLmRldGFpbHMpIHtcclxuICAgICAgY29uc3QgYmxvY2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImRldGFpbHMgPiBzdW1tYXJ5XCIpXHJcbiAgICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoYmxvY2tzLCBzdW1tYXJ5ID0+IHtcclxuICAgICAgICBzdW1tYXJ5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBldiA9PiB7XHJcbiAgICAgICAgICBjb25zdCBkZXRhaWxzID0gZXYudGFyZ2V0LnBhcmVudE5vZGVcclxuICAgICAgICAgIGlmIChkZXRhaWxzLmhhc0F0dHJpYnV0ZShcIm9wZW5cIikpIHtcclxuICAgICAgICAgICAgZGV0YWlscy5yZW1vdmVBdHRyaWJ1dGUoXCJvcGVuXCIpXHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBkZXRhaWxzLnNldEF0dHJpYnV0ZShcIm9wZW5cIiwgXCJcIilcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIC8qIE9wZW4gZGV0YWlscyBhZnRlciBhbmNob3IganVtcCAqL1xyXG4gICAgY29uc3QgZGV0YWlscyA9ICgpID0+IHtcclxuICAgICAgaWYgKGRvY3VtZW50LmxvY2F0aW9uLmhhc2gpIHtcclxuICAgICAgICBjb25zdCBlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGRvY3VtZW50LmxvY2F0aW9uLmhhc2guc3Vic3RyaW5nKDEpKVxyXG4gICAgICAgIGlmICghZWwpXHJcbiAgICAgICAgICByZXR1cm5cclxuXHJcbiAgICAgICAgLyogV2FsayB1cCBhcyBsb25nIGFzIHdlJ3JlIG5vdCBpbiBhIGRldGFpbHMgdGFnICovXHJcbiAgICAgICAgbGV0IHBhcmVudCA9IGVsLnBhcmVudE5vZGVcclxuICAgICAgICB3aGlsZSAocGFyZW50ICYmICEocGFyZW50IGluc3RhbmNlb2YgSFRNTERldGFpbHNFbGVtZW50KSlcclxuICAgICAgICAgIHBhcmVudCA9IHBhcmVudC5wYXJlbnROb2RlXHJcblxyXG4gICAgICAgIC8qIElmIHRoZXJlJ3MgYSBkZXRhaWxzIHRhZywgb3BlbiBpdCAqL1xyXG4gICAgICAgIGlmIChwYXJlbnQgJiYgIXBhcmVudC5vcGVuKSB7XHJcbiAgICAgICAgICBwYXJlbnQub3BlbiA9IHRydWVcclxuXHJcbiAgICAgICAgICAvKiBGb3JjZSByZWxvYWQsIHNvIHRoZSB2aWV3cG9ydCByZXBvc2l0aW9ucyAqL1xyXG4gICAgICAgICAgY29uc3QgbG9jID0gbG9jYXRpb24uaGFzaFxyXG4gICAgICAgICAgbG9jYXRpb24uaGFzaCA9IFwiIFwiXHJcbiAgICAgICAgICBsb2NhdGlvbi5oYXNoID0gbG9jXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImhhc2hjaGFuZ2VcIiwgZGV0YWlscylcclxuICAgIGRldGFpbHMoKVxyXG5cclxuICAgIC8qIEZvcmNlIDFweCBzY3JvbGwgb2Zmc2V0IHRvIHRyaWdnZXIgb3ZlcmZsb3cgc2Nyb2xsaW5nICovXHJcbiAgICBpZiAoTW9kZXJuaXpyLmlvcykge1xyXG4gICAgICBjb25zdCBzY3JvbGxhYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLW1kLXNjcm9sbGZpeF1cIilcclxuICAgICAgQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChzY3JvbGxhYmxlLCBpdGVtID0+IHtcclxuICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsICgpID0+IHtcclxuICAgICAgICAgIGNvbnN0IHRvcCA9IGl0ZW0uc2Nyb2xsVG9wXHJcblxyXG4gICAgICAgICAgLyogV2UncmUgYXQgdGhlIHRvcCBvZiB0aGUgY29udGFpbmVyICovXHJcbiAgICAgICAgICBpZiAodG9wID09PSAwKSB7XHJcbiAgICAgICAgICAgIGl0ZW0uc2Nyb2xsVG9wID0gMVxyXG5cclxuICAgICAgICAgICAgLyogV2UncmUgYXQgdGhlIGJvdHRvbSBvZiB0aGUgY29udGFpbmVyICovXHJcbiAgICAgICAgICB9IGVsc2UgaWYgKHRvcCArIGl0ZW0ub2Zmc2V0SGVpZ2h0ID09PSBpdGVtLnNjcm9sbEhlaWdodCkge1xyXG4gICAgICAgICAgICBpdGVtLnNjcm9sbFRvcCA9IHRvcCAtIDFcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH0pLmxpc3RlbigpXHJcblxyXG4gIC8qIENvbXBvbmVudDogaGVhZGVyIHNoYWRvdyB0b2dnbGUgKi9cclxuICBuZXcgTWF0ZXJpYWwuRXZlbnQuTGlzdGVuZXIod2luZG93LCBbXHJcbiAgICBcInNjcm9sbFwiLCBcInJlc2l6ZVwiLCBcIm9yaWVudGF0aW9uY2hhbmdlXCJcclxuICBdLCBuZXcgTWF0ZXJpYWwuSGVhZGVyLlNoYWRvdyhcclxuICAgIFwiW2RhdGEtbWQtY29tcG9uZW50PWNvbnRhaW5lcl1cIixcclxuICAgIFwiW2RhdGEtbWQtY29tcG9uZW50PWhlYWRlcl1cIilcclxuICApLmxpc3RlbigpXHJcblxyXG4gIC8qIENvbXBvbmVudDogaGVhZGVyIHRpdGxlIHRvZ2dsZSAqL1xyXG4gIG5ldyBNYXRlcmlhbC5FdmVudC5MaXN0ZW5lcih3aW5kb3csIFtcclxuICAgIFwic2Nyb2xsXCIsIFwicmVzaXplXCIsIFwib3JpZW50YXRpb25jaGFuZ2VcIlxyXG4gIF0sIG5ldyBNYXRlcmlhbC5IZWFkZXIuVGl0bGUoXHJcbiAgICBcIltkYXRhLW1kLWNvbXBvbmVudD10aXRsZV1cIixcclxuICAgIFwiLm1kLXR5cGVzZXQgaDFcIilcclxuICApLmxpc3RlbigpXHJcblxyXG4gIC8qIENvbXBvbmVudDogaGVybyB2aXNpYmlsaXR5IHRvZ2dsZSAqL1xyXG4gIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtbWQtY29tcG9uZW50PWhlcm9dXCIpKVxyXG4gICAgbmV3IE1hdGVyaWFsLkV2ZW50Lkxpc3RlbmVyKHdpbmRvdywgW1xyXG4gICAgICBcInNjcm9sbFwiLCBcInJlc2l6ZVwiLCBcIm9yaWVudGF0aW9uY2hhbmdlXCJcclxuICAgIF0sIG5ldyBNYXRlcmlhbC5UYWJzLlRvZ2dsZShcIltkYXRhLW1kLWNvbXBvbmVudD1oZXJvXVwiKSkubGlzdGVuKClcclxuXHJcbiAgLyogQ29tcG9uZW50OiB0YWJzIHZpc2liaWxpdHkgdG9nZ2xlICovXHJcbiAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1tZC1jb21wb25lbnQ9dGFic11cIikpXHJcbiAgICBuZXcgTWF0ZXJpYWwuRXZlbnQuTGlzdGVuZXIod2luZG93LCBbXHJcbiAgICAgIFwic2Nyb2xsXCIsIFwicmVzaXplXCIsIFwib3JpZW50YXRpb25jaGFuZ2VcIlxyXG4gICAgXSwgbmV3IE1hdGVyaWFsLlRhYnMuVG9nZ2xlKFwiW2RhdGEtbWQtY29tcG9uZW50PXRhYnNdXCIpKS5saXN0ZW4oKVxyXG5cclxuICAvKiBDb21wb25lbnQ6IHNpZGViYXIgd2l0aCBuYXZpZ2F0aW9uICovXHJcbiAgbmV3IE1hdGVyaWFsLkV2ZW50Lk1hdGNoTWVkaWEoXCIobWluLXdpZHRoOiAxMjIwcHgpXCIsXHJcbiAgICBuZXcgTWF0ZXJpYWwuRXZlbnQuTGlzdGVuZXIod2luZG93LCBbXHJcbiAgICAgIFwic2Nyb2xsXCIsIFwicmVzaXplXCIsIFwib3JpZW50YXRpb25jaGFuZ2VcIlxyXG4gICAgXSwgbmV3IE1hdGVyaWFsLlNpZGViYXIuUG9zaXRpb24oXHJcbiAgICAgIFwiW2RhdGEtbWQtY29tcG9uZW50PW5hdmlnYXRpb25dXCIsXHJcbiAgICAgIFwiW2RhdGEtbWQtY29tcG9uZW50PWhlYWRlcl1cIikpKVxyXG5cclxuICAvKiBDb21wb25lbnQ6IHNpZGViYXIgd2l0aCB0YWJsZSBvZiBjb250ZW50cyAobWlzc2luZyBvbiA0MDQgcGFnZSkgKi9cclxuICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLW1kLWNvbXBvbmVudD10b2NdXCIpKVxyXG4gICAgbmV3IE1hdGVyaWFsLkV2ZW50Lk1hdGNoTWVkaWEoXCIobWluLXdpZHRoOiA5NjBweClcIixcclxuICAgICAgbmV3IE1hdGVyaWFsLkV2ZW50Lkxpc3RlbmVyKHdpbmRvdywgW1xyXG4gICAgICAgIFwic2Nyb2xsXCIsIFwicmVzaXplXCIsIFwib3JpZW50YXRpb25jaGFuZ2VcIlxyXG4gICAgICBdLCBuZXcgTWF0ZXJpYWwuU2lkZWJhci5Qb3NpdGlvbihcclxuICAgICAgICBcIltkYXRhLW1kLWNvbXBvbmVudD10b2NdXCIsXHJcbiAgICAgICAgXCJbZGF0YS1tZC1jb21wb25lbnQ9aGVhZGVyXVwiKSkpXHJcblxyXG4gIC8qIExvYWQgdGFibGUgb2YgY29udGVudHMgKi9cclxuICBNYXRlcmlhbC5UYWJsZU9mQ29udGVudHMucmVuZGVyKFwiI3Njcm9sbHNweVwiKVxyXG4gIGNvbnN0IGJsdXIgPSBuZXcgTWF0ZXJpYWwuTmF2LkJsdXIoXCJbZGF0YS1tZC1jb21wb25lbnQ9dG9jXSBbaHJlZl1cIilcclxuXHJcbiAgLyogQ29tcG9uZW50OiBsaW5rIGJsdXJyaW5nIGZvciB0YWJsZSBvZiBjb250ZW50cyAqL1xyXG4gIG5ldyBNYXRlcmlhbC5FdmVudC5NYXRjaE1lZGlhKFwiKG1pbi13aWR0aDogOTYwcHgpXCIsXHJcbiAgICBuZXcgTWF0ZXJpYWwuRXZlbnQuTGlzdGVuZXIod2luZG93LCBcInNjcm9sbFwiLCBibHVyKSlcclxuXHJcbiAgLyogQ29tcG9uZW50OiBjb2xsYXBzaWJsZSBlbGVtZW50cyBmb3IgbmF2aWdhdGlvbiAqL1xyXG4gIGNvbnN0IGNvbGxhcHNpYmxlcyA9XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGEtbWQtY29tcG9uZW50PWNvbGxhcHNpYmxlXVwiKVxyXG4gIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoY29sbGFwc2libGVzLCBjb2xsYXBzZSA9PiB7XHJcbiAgICBuZXcgTWF0ZXJpYWwuRXZlbnQuTWF0Y2hNZWRpYShcIihtaW4td2lkdGg6IDEyMjBweClcIixcclxuICAgICAgbmV3IE1hdGVyaWFsLkV2ZW50Lkxpc3RlbmVyKGNvbGxhcHNlLnByZXZpb3VzRWxlbWVudFNpYmxpbmcsIFwiY2xpY2tcIixcclxuICAgICAgICBuZXcgTWF0ZXJpYWwuTmF2LkNvbGxhcHNlKGNvbGxhcHNlKSkpXHJcbiAgfSlcclxuXHJcbiAgLyogQ29tcG9uZW50OiBhY3RpdmUgcGFuZSBtb25pdG9yIGZvciBpT1Mgc2Nyb2xsaW5nIGZpeGVzICovXHJcbiAgbmV3IE1hdGVyaWFsLkV2ZW50Lk1hdGNoTWVkaWEoXCIobWF4LXdpZHRoOiAxMjE5cHgpXCIsXHJcbiAgICBuZXcgTWF0ZXJpYWwuRXZlbnQuTGlzdGVuZXIoXHJcbiAgICAgIFwiW2RhdGEtbWQtY29tcG9uZW50PW5hdmlnYXRpb25dIFtkYXRhLW1kLXRvZ2dsZV1cIiwgXCJjaGFuZ2VcIixcclxuICAgICAgbmV3IE1hdGVyaWFsLk5hdi5TY3JvbGxpbmcoXCJbZGF0YS1tZC1jb21wb25lbnQ9bmF2aWdhdGlvbl0gbmF2XCIpKSlcclxuXHJcbiAgLyogSW5pdGlhbGl6ZSBzZWFyY2gsIGlmIGF2YWlsYWJsZSAqL1xyXG4gIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtbWQtY29tcG9uZW50PXNlYXJjaF1cIikpIHtcclxuXHJcbiAgICAvKiBDb21wb25lbnQ6IHNlYXJjaCBib2R5IGxvY2sgZm9yIG1vYmlsZSAqL1xyXG4gICAgbmV3IE1hdGVyaWFsLkV2ZW50Lk1hdGNoTWVkaWEoXCIobWF4LXdpZHRoOiA5NTlweClcIixcclxuICAgICAgbmV3IE1hdGVyaWFsLkV2ZW50Lkxpc3RlbmVyKFwiW2RhdGEtbWQtdG9nZ2xlPXNlYXJjaF1cIiwgXCJjaGFuZ2VcIixcclxuICAgICAgICBuZXcgTWF0ZXJpYWwuU2VhcmNoLkxvY2soXCJbZGF0YS1tZC10b2dnbGU9c2VhcmNoXVwiKSkpXHJcblxyXG4gICAgLyogQ29tcG9uZW50OiBzZWFyY2ggcmVzdWx0cyAqL1xyXG4gICAgbmV3IE1hdGVyaWFsLkV2ZW50Lkxpc3RlbmVyKFwiW2RhdGEtbWQtY29tcG9uZW50PXF1ZXJ5XVwiLCBbXHJcbiAgICAgIFwiZm9jdXNcIiwgXCJrZXl1cFwiLCBcImNoYW5nZVwiXHJcbiAgICBdLCBuZXcgTWF0ZXJpYWwuU2VhcmNoLlJlc3VsdChcIltkYXRhLW1kLWNvbXBvbmVudD1yZXN1bHRdXCIsICgpID0+IHtcclxuICAgICAgcmV0dXJuIGZldGNoKGAke2NvbmZpZy51cmwuYmFzZX0vaW5kZXguanNvbmAsIHtcclxuICAgICAgICBjcmVkZW50aWFsczogXCJzYW1lLW9yaWdpblwiXHJcbiAgICAgIH0pLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgIC50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIGRhdGEubWFwKGRvYyA9PiB7XHJcbiAgICAgICAgICAgIGRvYy5sb2NhdGlvbiA9IGAke2RvYy5wZXJtYWxpbmt9YFxyXG4gICAgICAgICAgICByZXR1cm4gZG9jXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICB9KSkubGlzdGVuKClcclxuXHJcbiAgICAvKiBMaXN0ZW5lcjogZm9jdXMgaW5wdXQgYWZ0ZXIgZm9ybSByZXNldCAqL1xyXG4gICAgbmV3IE1hdGVyaWFsLkV2ZW50Lkxpc3RlbmVyKFwiW2RhdGEtbWQtY29tcG9uZW50PXJlc2V0XVwiLCBcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcXVlcnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtbWQtY29tcG9uZW50PXF1ZXJ5XVwiKVxyXG4gICAgICAgIGlmICghKHF1ZXJ5IGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCkpXHJcbiAgICAgICAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3JcclxuICAgICAgICBxdWVyeS5mb2N1cygpXHJcbiAgICAgIH0sIDEwKVxyXG4gICAgfSkubGlzdGVuKClcclxuXHJcbiAgICAvKiBMaXN0ZW5lcjogZm9jdXMgaW5wdXQgYWZ0ZXIgb3BlbmluZyBzZWFyY2ggKi9cclxuICAgIG5ldyBNYXRlcmlhbC5FdmVudC5MaXN0ZW5lcihcIltkYXRhLW1kLXRvZ2dsZT1zZWFyY2hdXCIsIFwiY2hhbmdlXCIsIGV2ID0+IHtcclxuICAgICAgc2V0VGltZW91dCh0b2dnbGUgPT4ge1xyXG4gICAgICAgIGlmICghKHRvZ2dsZSBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQpKVxyXG4gICAgICAgICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yXHJcbiAgICAgICAgaWYgKHRvZ2dsZS5jaGVja2VkKSB7XHJcbiAgICAgICAgICBjb25zdCBxdWVyeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1tZC1jb21wb25lbnQ9cXVlcnldXCIpXHJcbiAgICAgICAgICBpZiAoIShxdWVyeSBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQpKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3JcclxuICAgICAgICAgIHF1ZXJ5LmZvY3VzKClcclxuICAgICAgICB9XHJcbiAgICAgIH0sIDQwMCwgZXYudGFyZ2V0KVxyXG4gICAgfSkubGlzdGVuKClcclxuXHJcbiAgICAvKiBMaXN0ZW5lcjogb3BlbiBzZWFyY2ggb24gZm9jdXMgKi9cclxuICAgIG5ldyBNYXRlcmlhbC5FdmVudC5NYXRjaE1lZGlhKFwiKG1pbi13aWR0aDogOTYwcHgpXCIsXHJcbiAgICAgIG5ldyBNYXRlcmlhbC5FdmVudC5MaXN0ZW5lcihcIltkYXRhLW1kLWNvbXBvbmVudD1xdWVyeV1cIiwgXCJmb2N1c1wiLCAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdG9nZ2xlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLW1kLXRvZ2dsZT1zZWFyY2hdXCIpXHJcbiAgICAgICAgaWYgKCEodG9nZ2xlIGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCkpXHJcbiAgICAgICAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3JcclxuICAgICAgICBpZiAoIXRvZ2dsZS5jaGVja2VkKSB7XHJcbiAgICAgICAgICB0b2dnbGUuY2hlY2tlZCA9IHRydWVcclxuICAgICAgICAgIHRvZ2dsZS5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChcImNoYW5nZVwiKSlcclxuICAgICAgICB9XHJcbiAgICAgIH0pKVxyXG5cclxuICAgIC8qIExpc3RlbmVyOiBrZXlib2FyZCBoYW5kbGVycyAqLyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY29tcGxleGl0eVxyXG4gICAgbmV3IE1hdGVyaWFsLkV2ZW50Lkxpc3RlbmVyKHdpbmRvdywgXCJrZXlkb3duXCIsIGV2ID0+IHsgICAgICAgICAgICAgICAgICAgICAgICAvLyBUT0RPOiBzcGxpdCB1cCBpbnRvIGNvbXBvbmVudCB0byByZWR1Y2UgY29tcGxleGl0eVxyXG4gICAgICBjb25zdCB0b2dnbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtbWQtdG9nZ2xlPXNlYXJjaF1cIilcclxuICAgICAgaWYgKCEodG9nZ2xlIGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCkpXHJcbiAgICAgICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yXHJcbiAgICAgIGNvbnN0IHF1ZXJ5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLW1kLWNvbXBvbmVudD1xdWVyeV1cIilcclxuICAgICAgaWYgKCEocXVlcnkgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50KSlcclxuICAgICAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3JcclxuXHJcbiAgICAgIC8qIEFib3J0IGlmIG1ldGEga2V5IChtYWNPUykgb3IgY3RybCBrZXkgKFdpbmRvd3MpIGlzIHByZXNzZWQgKi9cclxuICAgICAgaWYgKGV2Lm1ldGFLZXkgfHwgZXYuY3RybEtleSlcclxuICAgICAgICByZXR1cm5cclxuXHJcbiAgICAgIC8qIFNlYXJjaCBpcyBvcGVuICovXHJcbiAgICAgIGlmICh0b2dnbGUuY2hlY2tlZCkge1xyXG5cclxuICAgICAgICAvKiBFbnRlcjogcHJldmVudCBmb3JtIHN1Ym1pc3Npb24gKi9cclxuICAgICAgICBpZiAoZXYua2V5Q29kZSA9PT0gMTMpIHtcclxuICAgICAgICAgIGlmIChxdWVyeSA9PT0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkge1xyXG4gICAgICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpXHJcblxyXG4gICAgICAgICAgICAvKiBHbyB0byBjdXJyZW50IGFjdGl2ZS9mb2N1c2VkIGxpbmsgKi9cclxuICAgICAgICAgICAgY29uc3QgZm9jdXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICAgICAgICAgIFwiW2RhdGEtbWQtY29tcG9uZW50PXNlYXJjaF0gW2hyZWZdW2RhdGEtbWQtc3RhdGU9YWN0aXZlXVwiKVxyXG4gICAgICAgICAgICBpZiAoZm9jdXMgaW5zdGFuY2VvZiBIVE1MTGlua0VsZW1lbnQpIHtcclxuICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24gPSBmb2N1cy5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpXHJcblxyXG4gICAgICAgICAgICAgIC8qIENsb3NlIHNlYXJjaCAqL1xyXG4gICAgICAgICAgICAgIHRvZ2dsZS5jaGVja2VkID0gZmFsc2VcclxuICAgICAgICAgICAgICB0b2dnbGUuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoXCJjaGFuZ2VcIikpXHJcbiAgICAgICAgICAgICAgcXVlcnkuYmx1cigpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgLyogRXNjYXBlIG9yIFRhYjogY2xvc2Ugc2VhcmNoICovXHJcbiAgICAgICAgfSBlbHNlIGlmIChldi5rZXlDb2RlID09PSA5IHx8IGV2LmtleUNvZGUgPT09IDI3KSB7XHJcbiAgICAgICAgICB0b2dnbGUuY2hlY2tlZCA9IGZhbHNlXHJcbiAgICAgICAgICB0b2dnbGUuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoXCJjaGFuZ2VcIikpXHJcbiAgICAgICAgICBxdWVyeS5ibHVyKClcclxuXHJcbiAgICAgICAgLyogSG9yaXpvbnRhbCBhcnJvd3MgYW5kIGJhY2tzcGFjZTogZm9jdXMgaW5wdXQgKi9cclxuICAgICAgICB9IGVsc2UgaWYgKFs4LCAzNywgMzldLmluZGV4T2YoZXYua2V5Q29kZSkgIT09IC0xKSB7XHJcbiAgICAgICAgICBpZiAocXVlcnkgIT09IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpXHJcbiAgICAgICAgICAgIHF1ZXJ5LmZvY3VzKClcclxuXHJcbiAgICAgICAgLyogVmVydGljYWwgYXJyb3dzOiBzZWxlY3QgcHJldmlvdXMgb3IgbmV4dCBzZWFyY2ggcmVzdWx0ICovXHJcbiAgICAgICAgfSBlbHNlIGlmIChbMzgsIDQwXS5pbmRleE9mKGV2LmtleUNvZGUpICE9PSAtMSkge1xyXG4gICAgICAgICAgY29uc3Qga2V5ID0gZXYua2V5Q29kZVxyXG5cclxuICAgICAgICAgIC8qIFJldHJpZXZlIGFsbCByZXN1bHRzICovXHJcbiAgICAgICAgICBjb25zdCBsaW5rcyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKFxyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxyXG4gICAgICAgICAgICAgIFwiW2RhdGEtbWQtY29tcG9uZW50PXF1ZXJ5XSwgW2RhdGEtbWQtY29tcG9uZW50PXNlYXJjaF0gW2hyZWZdXCIpKVxyXG5cclxuICAgICAgICAgIC8qIFJldHJpZXZlIGN1cnJlbnQgYWN0aXZlL2ZvY3VzZWQgcmVzdWx0ICovXHJcbiAgICAgICAgICBjb25zdCBmb2N1cyA9IGxpbmtzLmZpbmQobGluayA9PiB7XHJcbiAgICAgICAgICAgIGlmICghKGxpbmsgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpXHJcbiAgICAgICAgICAgICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yXHJcbiAgICAgICAgICAgIHJldHVybiBsaW5rLmRhdGFzZXQubWRTdGF0ZSA9PT0gXCJhY3RpdmVcIlxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIGlmIChmb2N1cylcclxuICAgICAgICAgICAgZm9jdXMuZGF0YXNldC5tZFN0YXRlID0gXCJcIlxyXG5cclxuICAgICAgICAgIC8qIENhbGN1bGF0ZSBpbmRleCBkZXBlbmRpbmcgb24gZGlyZWN0aW9uLCBhZGQgbGVuZ3RoIHRvIGZvcm0gcmluZyAqL1xyXG4gICAgICAgICAgY29uc3QgaW5kZXggPSBNYXRoLm1heCgwLCAoXHJcbiAgICAgICAgICAgIGxpbmtzLmluZGV4T2YoZm9jdXMpICsgbGlua3MubGVuZ3RoICsgKGtleSA9PT0gMzggPyAtMSA6ICsxKVxyXG4gICAgICAgICAgKSAlIGxpbmtzLmxlbmd0aClcclxuXHJcbiAgICAgICAgICAvKiBTZXQgYWN0aXZlIHN0YXRlIGFuZCBmb2N1cyAqL1xyXG4gICAgICAgICAgaWYgKGxpbmtzW2luZGV4XSkge1xyXG4gICAgICAgICAgICBsaW5rc1tpbmRleF0uZGF0YXNldC5tZFN0YXRlID0gXCJhY3RpdmVcIlxyXG4gICAgICAgICAgICBsaW5rc1tpbmRleF0uZm9jdXMoKVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC8qIFByZXZlbnQgc2Nyb2xsaW5nIG9mIHBhZ2UgKi9cclxuICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpXHJcblxyXG4gICAgICAgICAgLyogUmV0dXJuIGZhbHNlIHByZXZlbnRzIHRoZSBjdXJzb3IgcG9zaXRpb24gZnJvbSBjaGFuZ2luZyAqL1xyXG4gICAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgLyogU2VhcmNoIGlzIGNsb3NlZCBhbmQgd2UncmUgbm90IGluc2lkZSBhIGZvcm0gKi9cclxuICAgICAgfSBlbHNlIGlmIChkb2N1bWVudC5hY3RpdmVFbGVtZW50ICYmICFkb2N1bWVudC5hY3RpdmVFbGVtZW50LmZvcm0pIHtcclxuXHJcbiAgICAgICAgLyogRi9TOiBPcGVuIHNlYXJjaCBpZiBub3QgaW4gaW5wdXQgZmllbGQgKi9cclxuICAgICAgICBpZiAoZXYua2V5Q29kZSA9PT0gNzAgfHwgZXYua2V5Q29kZSA9PT0gODMpIHtcclxuICAgICAgICAgIHF1ZXJ5LmZvY3VzKClcclxuICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pLmxpc3RlbigpXHJcblxyXG4gICAgLyogTGlzdGVuZXI6IGZvY3VzIHF1ZXJ5IGlmIGluIHNlYXJjaCBpcyBvcGVuIGFuZCBjaGFyYWN0ZXIgaXMgdHlwZWQgKi9cclxuICAgIG5ldyBNYXRlcmlhbC5FdmVudC5MaXN0ZW5lcih3aW5kb3csIFwia2V5cHJlc3NcIiwgKCkgPT4ge1xyXG4gICAgICBjb25zdCB0b2dnbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtbWQtdG9nZ2xlPXNlYXJjaF1cIilcclxuICAgICAgaWYgKCEodG9nZ2xlIGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCkpXHJcbiAgICAgICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yXHJcbiAgICAgIGlmICh0b2dnbGUuY2hlY2tlZCkge1xyXG4gICAgICAgIGNvbnN0IHF1ZXJ5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLW1kLWNvbXBvbmVudD1xdWVyeV1cIilcclxuICAgICAgICBpZiAoIShxdWVyeSBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQpKVxyXG4gICAgICAgICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yXHJcbiAgICAgICAgaWYgKHF1ZXJ5ICE9PSBkb2N1bWVudC5hY3RpdmVFbGVtZW50KVxyXG4gICAgICAgICAgcXVlcnkuZm9jdXMoKVxyXG4gICAgICB9XHJcbiAgICB9KS5saXN0ZW4oKVxyXG4gIH1cclxuXHJcbiAgLyogTGlzdGVuZXI6IGhhbmRsZSB0YWJiaW5nIGNvbnRleHQgZm9yIGJldHRlciBhY2Nlc3NpYmlsaXR5ICovXHJcbiAgbmV3IE1hdGVyaWFsLkV2ZW50Lkxpc3RlbmVyKGRvY3VtZW50LmJvZHksIFwia2V5ZG93blwiLCBldiA9PiB7XHJcbiAgICBpZiAoZXYua2V5Q29kZSA9PT0gOSkge1xyXG4gICAgICBjb25zdCBsYWJlbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxyXG4gICAgICAgIFwiW2RhdGEtbWQtY29tcG9uZW50PW5hdmlnYXRpb25dIC5tZC1uYXZfX2xpbmtbZm9yXTpub3QoW3RhYmluZGV4XSlcIilcclxuICAgICAgQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChsYWJlbHMsIGxhYmVsID0+IHtcclxuICAgICAgICBpZiAobGFiZWwub2Zmc2V0SGVpZ2h0KVxyXG4gICAgICAgICAgbGFiZWwudGFiSW5kZXggPSAwXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfSkubGlzdGVuKClcclxuXHJcbiAgLyogTGlzdGVuZXI6IHJlc2V0IHRhYmJpbmcgYmVoYXZpb3IgKi9cclxuICBuZXcgTWF0ZXJpYWwuRXZlbnQuTGlzdGVuZXIoZG9jdW1lbnQuYm9keSwgXCJtb3VzZWRvd25cIiwgKCkgPT4ge1xyXG4gICAgY29uc3QgbGFiZWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcclxuICAgICAgXCJbZGF0YS1tZC1jb21wb25lbnQ9bmF2aWdhdGlvbl0gLm1kLW5hdl9fbGlua1t0YWJpbmRleF1cIilcclxuICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwobGFiZWxzLCBsYWJlbCA9PiB7XHJcbiAgICAgIGxhYmVsLnJlbW92ZUF0dHJpYnV0ZShcInRhYkluZGV4XCIpXHJcbiAgICB9KVxyXG4gIH0pLmxpc3RlbigpXHJcblxyXG4gIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIGlmIChkb2N1bWVudC5ib2R5LmRhdGFzZXQubWRTdGF0ZSA9PT0gXCJ0YWJiaW5nXCIpXHJcbiAgICAgIGRvY3VtZW50LmJvZHkuZGF0YXNldC5tZFN0YXRlID0gXCJcIlxyXG4gIH0pXHJcblxyXG4gIC8qIExpc3RlbmVyOiBjbG9zZSBkcmF3ZXIgd2hlbiBhbmNob3IgbGlua3MgYXJlIGNsaWNrZWQgKi9cclxuICBuZXcgTWF0ZXJpYWwuRXZlbnQuTWF0Y2hNZWRpYShcIihtYXgtd2lkdGg6IDk1OXB4KVwiLFxyXG4gICAgbmV3IE1hdGVyaWFsLkV2ZW50Lkxpc3RlbmVyKFwiW2RhdGEtbWQtY29tcG9uZW50PW5hdmlnYXRpb25dIFtocmVmXj0nIyddXCIsXHJcbiAgICAgIFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRvZ2dsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1tZC10b2dnbGU9ZHJhd2VyXVwiKVxyXG4gICAgICAgIGlmICghKHRvZ2dsZSBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQpKVxyXG4gICAgICAgICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yXHJcbiAgICAgICAgaWYgKHRvZ2dsZS5jaGVja2VkKSB7XHJcbiAgICAgICAgICB0b2dnbGUuY2hlY2tlZCA9IGZhbHNlXHJcbiAgICAgICAgICB0b2dnbGUuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoXCJjaGFuZ2VcIikpXHJcbiAgICAgICAgfVxyXG4gICAgICB9KSlcclxuXHJcbiAgLyogUmV0cmlldmUgZmFjdHMgZm9yIHRoZSBnaXZlbiByZXBvc2l0b3J5IHR5cGUgKi9cclxuICA7KCgpID0+IHtcclxuICAgIGNvbnN0IGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLW1kLXNvdXJjZV1cIilcclxuICAgIGlmICghZWwpXHJcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoW10pXHJcbiAgICBlbHNlIGlmICghKGVsIGluc3RhbmNlb2YgSFRNTEFuY2hvckVsZW1lbnQpKVxyXG4gICAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3JcclxuICAgIHN3aXRjaCAoZWwuZGF0YXNldC5tZFNvdXJjZSkge1xyXG4gICAgICBjYXNlIFwiZ2l0aHViXCI6IHJldHVybiBuZXcgTWF0ZXJpYWwuU291cmNlLkFkYXB0ZXIuR2l0SHViKGVsKS5mZXRjaCgpXHJcbiAgICAgIGRlZmF1bHQ6IHJldHVybiBQcm9taXNlLnJlc29sdmUoW10pXHJcbiAgICB9XHJcblxyXG4gIC8qIFJlbmRlciByZXBvc2l0b3J5IGluZm9ybWF0aW9uICovXHJcbiAgfSkoKS50aGVuKGZhY3RzID0+IHtcclxuICAgIGNvbnN0IHNvdXJjZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGEtbWQtc291cmNlXVwiKVxyXG4gICAgQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChzb3VyY2VzLCBzb3VyY2UgPT4ge1xyXG4gICAgICBuZXcgTWF0ZXJpYWwuU291cmNlLlJlcG9zaXRvcnkoc291cmNlKVxyXG4gICAgICAgIC5pbml0aWFsaXplKGZhY3RzKVxyXG4gICAgfSlcclxuICB9KVxyXG59XHJcblxyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqIEV4cG9ydHNcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG5cclxuLyogUHJvdmlkZSB0aGlzIGZvciBkb3dud2FyZCBjb21wYXRpYmlsaXR5IGZvciBub3cgKi9cclxuY29uc3QgYXBwID0ge1xyXG4gIGluaXRpYWxpemVcclxufVxyXG5cclxuZXhwb3J0IHtcclxuICBhcHBcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXNzZXRzL2phdmFzY3JpcHRzL2FwcGxpY2F0aW9uLmpzIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYXNzZXRzL2ltYWdlcy9pY29ucy9iaXRidWNrZXQuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXNzZXRzL2ltYWdlcy9pY29ucy9iaXRidWNrZXQuc3ZnXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImFzc2V0cy9pbWFnZXMvaWNvbnMvZ2l0aHViLnN2Z1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Fzc2V0cy9pbWFnZXMvaWNvbnMvZ2l0aHViLnN2Z1xuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJhc3NldHMvaW1hZ2VzL2ljb25zL2dpdGxhYi5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hc3NldHMvaW1hZ2VzL2ljb25zL2dpdGxhYi5zdmdcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXNzZXRzL3N0eWxlc2hlZXRzL2FwcGxpY2F0aW9uLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXNzZXRzL3N0eWxlc2hlZXRzL2FwcGxpY2F0aW9uLXBhbGV0dGUuc2Nzc1xuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gUG9seWZpbGwgZm9yIGNyZWF0aW5nIEN1c3RvbUV2ZW50cyBvbiBJRTkvMTAvMTFcblxuLy8gY29kZSBwdWxsZWQgZnJvbTpcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9kNHRvY2NoaW5pL2N1c3RvbWV2ZW50LXBvbHlmaWxsXG4vLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvQ3VzdG9tRXZlbnQjUG9seWZpbGxcblxuKGZ1bmN0aW9uKCkge1xuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB0cnkge1xuICAgIHZhciBjZSA9IG5ldyB3aW5kb3cuQ3VzdG9tRXZlbnQoJ3Rlc3QnLCB7IGNhbmNlbGFibGU6IHRydWUgfSk7XG4gICAgY2UucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAoY2UuZGVmYXVsdFByZXZlbnRlZCAhPT0gdHJ1ZSkge1xuICAgICAgLy8gSUUgaGFzIHByb2JsZW1zIHdpdGggLnByZXZlbnREZWZhdWx0KCkgb24gY3VzdG9tIGV2ZW50c1xuICAgICAgLy8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8yMzM0OTE5MVxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdDb3VsZCBub3QgcHJldmVudCBkZWZhdWx0Jyk7XG4gICAgfVxuICB9IGNhdGNoIChlKSB7XG4gICAgdmFyIEN1c3RvbUV2ZW50ID0gZnVuY3Rpb24oZXZlbnQsIHBhcmFtcykge1xuICAgICAgdmFyIGV2dCwgb3JpZ1ByZXZlbnQ7XG4gICAgICBwYXJhbXMgPSBwYXJhbXMgfHwge1xuICAgICAgICBidWJibGVzOiBmYWxzZSxcbiAgICAgICAgY2FuY2VsYWJsZTogZmFsc2UsXG4gICAgICAgIGRldGFpbDogdW5kZWZpbmVkXG4gICAgICB9O1xuXG4gICAgICBldnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnQ3VzdG9tRXZlbnQnKTtcbiAgICAgIGV2dC5pbml0Q3VzdG9tRXZlbnQoXG4gICAgICAgIGV2ZW50LFxuICAgICAgICBwYXJhbXMuYnViYmxlcyxcbiAgICAgICAgcGFyYW1zLmNhbmNlbGFibGUsXG4gICAgICAgIHBhcmFtcy5kZXRhaWxcbiAgICAgICk7XG4gICAgICBvcmlnUHJldmVudCA9IGV2dC5wcmV2ZW50RGVmYXVsdDtcbiAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBvcmlnUHJldmVudC5jYWxsKHRoaXMpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCAnZGVmYXVsdFByZXZlbnRlZCcsIHtcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgdGhpcy5kZWZhdWx0UHJldmVudGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIHJldHVybiBldnQ7XG4gICAgfTtcblxuICAgIEN1c3RvbUV2ZW50LnByb3RvdHlwZSA9IHdpbmRvdy5FdmVudC5wcm90b3R5cGU7XG4gICAgd2luZG93LkN1c3RvbUV2ZW50ID0gQ3VzdG9tRXZlbnQ7IC8vIGV4cG9zZSBkZWZpbml0aW9uIHRvIHdpbmRvd1xuICB9XG59KSgpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2N1c3RvbS1ldmVudC1wb2x5ZmlsbC9wb2x5ZmlsbC5qcyIsImlmICghd2luZG93LmZldGNoKSB3aW5kb3cuZmV0Y2ggPSByZXF1aXJlKCcuJykuZGVmYXVsdCB8fCByZXF1aXJlKCcuJyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdW5mZXRjaC9wb2x5ZmlsbC5qcyIsImltcG9ydCBwcm9taXNlRmluYWxseSBmcm9tICcuL2ZpbmFsbHknO1xuXG4vLyBTdG9yZSBzZXRUaW1lb3V0IHJlZmVyZW5jZSBzbyBwcm9taXNlLXBvbHlmaWxsIHdpbGwgYmUgdW5hZmZlY3RlZCBieVxuLy8gb3RoZXIgY29kZSBtb2RpZnlpbmcgc2V0VGltZW91dCAobGlrZSBzaW5vbi51c2VGYWtlVGltZXJzKCkpXG52YXIgc2V0VGltZW91dEZ1bmMgPSBzZXRUaW1lb3V0O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxuLy8gUG9seWZpbGwgZm9yIEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kXG5mdW5jdGlvbiBiaW5kKGZuLCB0aGlzQXJnKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICBmbi5hcHBseSh0aGlzQXJnLCBhcmd1bWVudHMpO1xuICB9O1xufVxuXG4vKipcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cbiAqL1xuZnVuY3Rpb24gUHJvbWlzZShmbikge1xuICBpZiAoISh0aGlzIGluc3RhbmNlb2YgUHJvbWlzZSkpXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignUHJvbWlzZXMgbXVzdCBiZSBjb25zdHJ1Y3RlZCB2aWEgbmV3Jyk7XG4gIGlmICh0eXBlb2YgZm4gIT09ICdmdW5jdGlvbicpIHRocm93IG5ldyBUeXBlRXJyb3IoJ25vdCBhIGZ1bmN0aW9uJyk7XG4gIC8qKiBAdHlwZSB7IW51bWJlcn0gKi9cbiAgdGhpcy5fc3RhdGUgPSAwO1xuICAvKiogQHR5cGUgeyFib29sZWFufSAqL1xuICB0aGlzLl9oYW5kbGVkID0gZmFsc2U7XG4gIC8qKiBAdHlwZSB7UHJvbWlzZXx1bmRlZmluZWR9ICovXG4gIHRoaXMuX3ZhbHVlID0gdW5kZWZpbmVkO1xuICAvKiogQHR5cGUgeyFBcnJheTwhRnVuY3Rpb24+fSAqL1xuICB0aGlzLl9kZWZlcnJlZHMgPSBbXTtcblxuICBkb1Jlc29sdmUoZm4sIHRoaXMpO1xufVxuXG5mdW5jdGlvbiBoYW5kbGUoc2VsZiwgZGVmZXJyZWQpIHtcbiAgd2hpbGUgKHNlbGYuX3N0YXRlID09PSAzKSB7XG4gICAgc2VsZiA9IHNlbGYuX3ZhbHVlO1xuICB9XG4gIGlmIChzZWxmLl9zdGF0ZSA9PT0gMCkge1xuICAgIHNlbGYuX2RlZmVycmVkcy5wdXNoKGRlZmVycmVkKTtcbiAgICByZXR1cm47XG4gIH1cbiAgc2VsZi5faGFuZGxlZCA9IHRydWU7XG4gIFByb21pc2UuX2ltbWVkaWF0ZUZuKGZ1bmN0aW9uKCkge1xuICAgIHZhciBjYiA9IHNlbGYuX3N0YXRlID09PSAxID8gZGVmZXJyZWQub25GdWxmaWxsZWQgOiBkZWZlcnJlZC5vblJlamVjdGVkO1xuICAgIGlmIChjYiA9PT0gbnVsbCkge1xuICAgICAgKHNlbGYuX3N0YXRlID09PSAxID8gcmVzb2x2ZSA6IHJlamVjdCkoZGVmZXJyZWQucHJvbWlzZSwgc2VsZi5fdmFsdWUpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgcmV0O1xuICAgIHRyeSB7XG4gICAgICByZXQgPSBjYihzZWxmLl92YWx1ZSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgcmVqZWN0KGRlZmVycmVkLnByb21pc2UsIGUpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICByZXNvbHZlKGRlZmVycmVkLnByb21pc2UsIHJldCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiByZXNvbHZlKHNlbGYsIG5ld1ZhbHVlKSB7XG4gIHRyeSB7XG4gICAgLy8gUHJvbWlzZSBSZXNvbHV0aW9uIFByb2NlZHVyZTogaHR0cHM6Ly9naXRodWIuY29tL3Byb21pc2VzLWFwbHVzL3Byb21pc2VzLXNwZWMjdGhlLXByb21pc2UtcmVzb2x1dGlvbi1wcm9jZWR1cmVcbiAgICBpZiAobmV3VmFsdWUgPT09IHNlbGYpXG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBIHByb21pc2UgY2Fubm90IGJlIHJlc29sdmVkIHdpdGggaXRzZWxmLicpO1xuICAgIGlmIChcbiAgICAgIG5ld1ZhbHVlICYmXG4gICAgICAodHlwZW9mIG5ld1ZhbHVlID09PSAnb2JqZWN0JyB8fCB0eXBlb2YgbmV3VmFsdWUgPT09ICdmdW5jdGlvbicpXG4gICAgKSB7XG4gICAgICB2YXIgdGhlbiA9IG5ld1ZhbHVlLnRoZW47XG4gICAgICBpZiAobmV3VmFsdWUgaW5zdGFuY2VvZiBQcm9taXNlKSB7XG4gICAgICAgIHNlbGYuX3N0YXRlID0gMztcbiAgICAgICAgc2VsZi5fdmFsdWUgPSBuZXdWYWx1ZTtcbiAgICAgICAgZmluYWxlKHNlbGYpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiB0aGVuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGRvUmVzb2x2ZShiaW5kKHRoZW4sIG5ld1ZhbHVlKSwgc2VsZik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG4gICAgc2VsZi5fc3RhdGUgPSAxO1xuICAgIHNlbGYuX3ZhbHVlID0gbmV3VmFsdWU7XG4gICAgZmluYWxlKHNlbGYpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmVqZWN0KHNlbGYsIGUpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlamVjdChzZWxmLCBuZXdWYWx1ZSkge1xuICBzZWxmLl9zdGF0ZSA9IDI7XG4gIHNlbGYuX3ZhbHVlID0gbmV3VmFsdWU7XG4gIGZpbmFsZShzZWxmKTtcbn1cblxuZnVuY3Rpb24gZmluYWxlKHNlbGYpIHtcbiAgaWYgKHNlbGYuX3N0YXRlID09PSAyICYmIHNlbGYuX2RlZmVycmVkcy5sZW5ndGggPT09IDApIHtcbiAgICBQcm9taXNlLl9pbW1lZGlhdGVGbihmdW5jdGlvbigpIHtcbiAgICAgIGlmICghc2VsZi5faGFuZGxlZCkge1xuICAgICAgICBQcm9taXNlLl91bmhhbmRsZWRSZWplY3Rpb25GbihzZWxmLl92YWx1ZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmb3IgKHZhciBpID0gMCwgbGVuID0gc2VsZi5fZGVmZXJyZWRzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgaGFuZGxlKHNlbGYsIHNlbGYuX2RlZmVycmVkc1tpXSk7XG4gIH1cbiAgc2VsZi5fZGVmZXJyZWRzID0gbnVsbDtcbn1cblxuLyoqXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZnVuY3Rpb24gSGFuZGxlcihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCwgcHJvbWlzZSkge1xuICB0aGlzLm9uRnVsZmlsbGVkID0gdHlwZW9mIG9uRnVsZmlsbGVkID09PSAnZnVuY3Rpb24nID8gb25GdWxmaWxsZWQgOiBudWxsO1xuICB0aGlzLm9uUmVqZWN0ZWQgPSB0eXBlb2Ygb25SZWplY3RlZCA9PT0gJ2Z1bmN0aW9uJyA/IG9uUmVqZWN0ZWQgOiBudWxsO1xuICB0aGlzLnByb21pc2UgPSBwcm9taXNlO1xufVxuXG4vKipcbiAqIFRha2UgYSBwb3RlbnRpYWxseSBtaXNiZWhhdmluZyByZXNvbHZlciBmdW5jdGlvbiBhbmQgbWFrZSBzdXJlXG4gKiBvbkZ1bGZpbGxlZCBhbmQgb25SZWplY3RlZCBhcmUgb25seSBjYWxsZWQgb25jZS5cbiAqXG4gKiBNYWtlcyBubyBndWFyYW50ZWVzIGFib3V0IGFzeW5jaHJvbnkuXG4gKi9cbmZ1bmN0aW9uIGRvUmVzb2x2ZShmbiwgc2VsZikge1xuICB2YXIgZG9uZSA9IGZhbHNlO1xuICB0cnkge1xuICAgIGZuKFxuICAgICAgZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgaWYgKGRvbmUpIHJldHVybjtcbiAgICAgICAgZG9uZSA9IHRydWU7XG4gICAgICAgIHJlc29sdmUoc2VsZiwgdmFsdWUpO1xuICAgICAgfSxcbiAgICAgIGZ1bmN0aW9uKHJlYXNvbikge1xuICAgICAgICBpZiAoZG9uZSkgcmV0dXJuO1xuICAgICAgICBkb25lID0gdHJ1ZTtcbiAgICAgICAgcmVqZWN0KHNlbGYsIHJlYXNvbik7XG4gICAgICB9XG4gICAgKTtcbiAgfSBjYXRjaCAoZXgpIHtcbiAgICBpZiAoZG9uZSkgcmV0dXJuO1xuICAgIGRvbmUgPSB0cnVlO1xuICAgIHJlamVjdChzZWxmLCBleCk7XG4gIH1cbn1cblxuUHJvbWlzZS5wcm90b3R5cGVbJ2NhdGNoJ10gPSBmdW5jdGlvbihvblJlamVjdGVkKSB7XG4gIHJldHVybiB0aGlzLnRoZW4obnVsbCwgb25SZWplY3RlZCk7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS50aGVuID0gZnVuY3Rpb24ob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpIHtcbiAgLy8gQHRzLWlnbm9yZVxuICB2YXIgcHJvbSA9IG5ldyB0aGlzLmNvbnN0cnVjdG9yKG5vb3ApO1xuXG4gIGhhbmRsZSh0aGlzLCBuZXcgSGFuZGxlcihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCwgcHJvbSkpO1xuICByZXR1cm4gcHJvbTtcbn07XG5cblByb21pc2UucHJvdG90eXBlWydmaW5hbGx5J10gPSBwcm9taXNlRmluYWxseTtcblxuUHJvbWlzZS5hbGwgPSBmdW5jdGlvbihhcnIpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgIGlmICghYXJyIHx8IHR5cGVvZiBhcnIubGVuZ3RoID09PSAndW5kZWZpbmVkJylcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1Byb21pc2UuYWxsIGFjY2VwdHMgYW4gYXJyYXknKTtcbiAgICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFycik7XG4gICAgaWYgKGFyZ3MubGVuZ3RoID09PSAwKSByZXR1cm4gcmVzb2x2ZShbXSk7XG4gICAgdmFyIHJlbWFpbmluZyA9IGFyZ3MubGVuZ3RoO1xuXG4gICAgZnVuY3Rpb24gcmVzKGksIHZhbCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKHZhbCAmJiAodHlwZW9mIHZhbCA9PT0gJ29iamVjdCcgfHwgdHlwZW9mIHZhbCA9PT0gJ2Z1bmN0aW9uJykpIHtcbiAgICAgICAgICB2YXIgdGhlbiA9IHZhbC50aGVuO1xuICAgICAgICAgIGlmICh0eXBlb2YgdGhlbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdGhlbi5jYWxsKFxuICAgICAgICAgICAgICB2YWwsXG4gICAgICAgICAgICAgIGZ1bmN0aW9uKHZhbCkge1xuICAgICAgICAgICAgICAgIHJlcyhpLCB2YWwpO1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICByZWplY3RcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGFyZ3NbaV0gPSB2YWw7XG4gICAgICAgIGlmICgtLXJlbWFpbmluZyA9PT0gMCkge1xuICAgICAgICAgIHJlc29sdmUoYXJncyk7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICAgIHJlamVjdChleCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICByZXMoaSwgYXJnc1tpXSk7XG4gICAgfVxuICB9KTtcbn07XG5cblByb21pc2UucmVzb2x2ZSA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIGlmICh2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlLmNvbnN0cnVjdG9yID09PSBQcm9taXNlKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUpIHtcbiAgICByZXNvbHZlKHZhbHVlKTtcbiAgfSk7XG59O1xuXG5Qcm9taXNlLnJlamVjdCA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICByZWplY3QodmFsdWUpO1xuICB9KTtcbn07XG5cblByb21pc2UucmFjZSA9IGZ1bmN0aW9uKHZhbHVlcykge1xuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHZhbHVlcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgdmFsdWVzW2ldLnRoZW4ocmVzb2x2ZSwgcmVqZWN0KTtcbiAgICB9XG4gIH0pO1xufTtcblxuLy8gVXNlIHBvbHlmaWxsIGZvciBzZXRJbW1lZGlhdGUgZm9yIHBlcmZvcm1hbmNlIGdhaW5zXG5Qcm9taXNlLl9pbW1lZGlhdGVGbiA9XG4gICh0eXBlb2Ygc2V0SW1tZWRpYXRlID09PSAnZnVuY3Rpb24nICYmXG4gICAgZnVuY3Rpb24oZm4pIHtcbiAgICAgIHNldEltbWVkaWF0ZShmbik7XG4gICAgfSkgfHxcbiAgZnVuY3Rpb24oZm4pIHtcbiAgICBzZXRUaW1lb3V0RnVuYyhmbiwgMCk7XG4gIH07XG5cblByb21pc2UuX3VuaGFuZGxlZFJlamVjdGlvbkZuID0gZnVuY3Rpb24gX3VuaGFuZGxlZFJlamVjdGlvbkZuKGVycikge1xuICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnICYmIGNvbnNvbGUpIHtcbiAgICBjb25zb2xlLndhcm4oJ1Bvc3NpYmxlIFVuaGFuZGxlZCBQcm9taXNlIFJlamVjdGlvbjonLCBlcnIpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvbWlzZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9wcm9taXNlLXBvbHlmaWxsL3NyYy9pbmRleC5qcyIsInZhciBzY29wZSA9ICh0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiICYmIGdsb2JhbCkgfHxcbiAgICAgICAgICAgICh0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiAmJiBzZWxmKSB8fFxuICAgICAgICAgICAgd2luZG93O1xudmFyIGFwcGx5ID0gRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5O1xuXG4vLyBET00gQVBJcywgZm9yIGNvbXBsZXRlbmVzc1xuXG5leHBvcnRzLnNldFRpbWVvdXQgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIG5ldyBUaW1lb3V0KGFwcGx5LmNhbGwoc2V0VGltZW91dCwgc2NvcGUsIGFyZ3VtZW50cyksIGNsZWFyVGltZW91dCk7XG59O1xuZXhwb3J0cy5zZXRJbnRlcnZhbCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gbmV3IFRpbWVvdXQoYXBwbHkuY2FsbChzZXRJbnRlcnZhbCwgc2NvcGUsIGFyZ3VtZW50cyksIGNsZWFySW50ZXJ2YWwpO1xufTtcbmV4cG9ydHMuY2xlYXJUaW1lb3V0ID1cbmV4cG9ydHMuY2xlYXJJbnRlcnZhbCA9IGZ1bmN0aW9uKHRpbWVvdXQpIHtcbiAgaWYgKHRpbWVvdXQpIHtcbiAgICB0aW1lb3V0LmNsb3NlKCk7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIFRpbWVvdXQoaWQsIGNsZWFyRm4pIHtcbiAgdGhpcy5faWQgPSBpZDtcbiAgdGhpcy5fY2xlYXJGbiA9IGNsZWFyRm47XG59XG5UaW1lb3V0LnByb3RvdHlwZS51bnJlZiA9IFRpbWVvdXQucHJvdG90eXBlLnJlZiA9IGZ1bmN0aW9uKCkge307XG5UaW1lb3V0LnByb3RvdHlwZS5jbG9zZSA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLl9jbGVhckZuLmNhbGwoc2NvcGUsIHRoaXMuX2lkKTtcbn07XG5cbi8vIERvZXMgbm90IHN0YXJ0IHRoZSB0aW1lLCBqdXN0IHNldHMgdXAgdGhlIG1lbWJlcnMgbmVlZGVkLlxuZXhwb3J0cy5lbnJvbGwgPSBmdW5jdGlvbihpdGVtLCBtc2Vjcykge1xuICBjbGVhclRpbWVvdXQoaXRlbS5faWRsZVRpbWVvdXRJZCk7XG4gIGl0ZW0uX2lkbGVUaW1lb3V0ID0gbXNlY3M7XG59O1xuXG5leHBvcnRzLnVuZW5yb2xsID0gZnVuY3Rpb24oaXRlbSkge1xuICBjbGVhclRpbWVvdXQoaXRlbS5faWRsZVRpbWVvdXRJZCk7XG4gIGl0ZW0uX2lkbGVUaW1lb3V0ID0gLTE7XG59O1xuXG5leHBvcnRzLl91bnJlZkFjdGl2ZSA9IGV4cG9ydHMuYWN0aXZlID0gZnVuY3Rpb24oaXRlbSkge1xuICBjbGVhclRpbWVvdXQoaXRlbS5faWRsZVRpbWVvdXRJZCk7XG5cbiAgdmFyIG1zZWNzID0gaXRlbS5faWRsZVRpbWVvdXQ7XG4gIGlmIChtc2VjcyA+PSAwKSB7XG4gICAgaXRlbS5faWRsZVRpbWVvdXRJZCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gb25UaW1lb3V0KCkge1xuICAgICAgaWYgKGl0ZW0uX29uVGltZW91dClcbiAgICAgICAgaXRlbS5fb25UaW1lb3V0KCk7XG4gICAgfSwgbXNlY3MpO1xuICB9XG59O1xuXG4vLyBzZXRpbW1lZGlhdGUgYXR0YWNoZXMgaXRzZWxmIHRvIHRoZSBnbG9iYWwgb2JqZWN0XG5yZXF1aXJlKFwic2V0aW1tZWRpYXRlXCIpO1xuLy8gT24gc29tZSBleG90aWMgZW52aXJvbm1lbnRzLCBpdCdzIG5vdCBjbGVhciB3aGljaCBvYmplY3QgYHNldGltbWVkaWF0ZWAgd2FzXG4vLyBhYmxlIHRvIGluc3RhbGwgb250by4gIFNlYXJjaCBlYWNoIHBvc3NpYmlsaXR5IGluIHRoZSBzYW1lIG9yZGVyIGFzIHRoZVxuLy8gYHNldGltbWVkaWF0ZWAgbGlicmFyeS5cbmV4cG9ydHMuc2V0SW1tZWRpYXRlID0gKHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiICYmIHNlbGYuc2V0SW1tZWRpYXRlKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAodHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBnbG9iYWwuc2V0SW1tZWRpYXRlKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAodGhpcyAmJiB0aGlzLnNldEltbWVkaWF0ZSk7XG5leHBvcnRzLmNsZWFySW1tZWRpYXRlID0gKHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiICYmIHNlbGYuY2xlYXJJbW1lZGlhdGUpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgKHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgJiYgZ2xvYmFsLmNsZWFySW1tZWRpYXRlKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICh0aGlzICYmIHRoaXMuY2xlYXJJbW1lZGlhdGUpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RpbWVycy1icm93c2VyaWZ5L21haW4uanMiLCIoZnVuY3Rpb24gKGdsb2JhbCwgdW5kZWZpbmVkKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICBpZiAoZ2xvYmFsLnNldEltbWVkaWF0ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIG5leHRIYW5kbGUgPSAxOyAvLyBTcGVjIHNheXMgZ3JlYXRlciB0aGFuIHplcm9cbiAgICB2YXIgdGFza3NCeUhhbmRsZSA9IHt9O1xuICAgIHZhciBjdXJyZW50bHlSdW5uaW5nQVRhc2sgPSBmYWxzZTtcbiAgICB2YXIgZG9jID0gZ2xvYmFsLmRvY3VtZW50O1xuICAgIHZhciByZWdpc3RlckltbWVkaWF0ZTtcblxuICAgIGZ1bmN0aW9uIHNldEltbWVkaWF0ZShjYWxsYmFjaykge1xuICAgICAgLy8gQ2FsbGJhY2sgY2FuIGVpdGhlciBiZSBhIGZ1bmN0aW9uIG9yIGEgc3RyaW5nXG4gICAgICBpZiAodHlwZW9mIGNhbGxiYWNrICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgY2FsbGJhY2sgPSBuZXcgRnVuY3Rpb24oXCJcIiArIGNhbGxiYWNrKTtcbiAgICAgIH1cbiAgICAgIC8vIENvcHkgZnVuY3Rpb24gYXJndW1lbnRzXG4gICAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBhcmdzW2ldID0gYXJndW1lbnRzW2kgKyAxXTtcbiAgICAgIH1cbiAgICAgIC8vIFN0b3JlIGFuZCByZWdpc3RlciB0aGUgdGFza1xuICAgICAgdmFyIHRhc2sgPSB7IGNhbGxiYWNrOiBjYWxsYmFjaywgYXJnczogYXJncyB9O1xuICAgICAgdGFza3NCeUhhbmRsZVtuZXh0SGFuZGxlXSA9IHRhc2s7XG4gICAgICByZWdpc3RlckltbWVkaWF0ZShuZXh0SGFuZGxlKTtcbiAgICAgIHJldHVybiBuZXh0SGFuZGxlKys7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2xlYXJJbW1lZGlhdGUoaGFuZGxlKSB7XG4gICAgICAgIGRlbGV0ZSB0YXNrc0J5SGFuZGxlW2hhbmRsZV07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcnVuKHRhc2spIHtcbiAgICAgICAgdmFyIGNhbGxiYWNrID0gdGFzay5jYWxsYmFjaztcbiAgICAgICAgdmFyIGFyZ3MgPSB0YXNrLmFyZ3M7XG4gICAgICAgIHN3aXRjaCAoYXJncy5sZW5ndGgpIHtcbiAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICBjYWxsYmFjayhhcmdzWzBdKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICBjYWxsYmFjayhhcmdzWzBdLCBhcmdzWzFdKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICBjYWxsYmFjayhhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgY2FsbGJhY2suYXBwbHkodW5kZWZpbmVkLCBhcmdzKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcnVuSWZQcmVzZW50KGhhbmRsZSkge1xuICAgICAgICAvLyBGcm9tIHRoZSBzcGVjOiBcIldhaXQgdW50aWwgYW55IGludm9jYXRpb25zIG9mIHRoaXMgYWxnb3JpdGhtIHN0YXJ0ZWQgYmVmb3JlIHRoaXMgb25lIGhhdmUgY29tcGxldGVkLlwiXG4gICAgICAgIC8vIFNvIGlmIHdlJ3JlIGN1cnJlbnRseSBydW5uaW5nIGEgdGFzaywgd2UnbGwgbmVlZCB0byBkZWxheSB0aGlzIGludm9jYXRpb24uXG4gICAgICAgIGlmIChjdXJyZW50bHlSdW5uaW5nQVRhc2spIHtcbiAgICAgICAgICAgIC8vIERlbGF5IGJ5IGRvaW5nIGEgc2V0VGltZW91dC4gc2V0SW1tZWRpYXRlIHdhcyB0cmllZCBpbnN0ZWFkLCBidXQgaW4gRmlyZWZveCA3IGl0IGdlbmVyYXRlZCBhXG4gICAgICAgICAgICAvLyBcInRvbyBtdWNoIHJlY3Vyc2lvblwiIGVycm9yLlxuICAgICAgICAgICAgc2V0VGltZW91dChydW5JZlByZXNlbnQsIDAsIGhhbmRsZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgdGFzayA9IHRhc2tzQnlIYW5kbGVbaGFuZGxlXTtcbiAgICAgICAgICAgIGlmICh0YXNrKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudGx5UnVubmluZ0FUYXNrID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBydW4odGFzayk7XG4gICAgICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJJbW1lZGlhdGUoaGFuZGxlKTtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudGx5UnVubmluZ0FUYXNrID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zdGFsbE5leHRUaWNrSW1wbGVtZW50YXRpb24oKSB7XG4gICAgICAgIHJlZ2lzdGVySW1tZWRpYXRlID0gZnVuY3Rpb24oaGFuZGxlKSB7XG4gICAgICAgICAgICBwcm9jZXNzLm5leHRUaWNrKGZ1bmN0aW9uICgpIHsgcnVuSWZQcmVzZW50KGhhbmRsZSk7IH0pO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNhblVzZVBvc3RNZXNzYWdlKCkge1xuICAgICAgICAvLyBUaGUgdGVzdCBhZ2FpbnN0IGBpbXBvcnRTY3JpcHRzYCBwcmV2ZW50cyB0aGlzIGltcGxlbWVudGF0aW9uIGZyb20gYmVpbmcgaW5zdGFsbGVkIGluc2lkZSBhIHdlYiB3b3JrZXIsXG4gICAgICAgIC8vIHdoZXJlIGBnbG9iYWwucG9zdE1lc3NhZ2VgIG1lYW5zIHNvbWV0aGluZyBjb21wbGV0ZWx5IGRpZmZlcmVudCBhbmQgY2FuJ3QgYmUgdXNlZCBmb3IgdGhpcyBwdXJwb3NlLlxuICAgICAgICBpZiAoZ2xvYmFsLnBvc3RNZXNzYWdlICYmICFnbG9iYWwuaW1wb3J0U2NyaXB0cykge1xuICAgICAgICAgICAgdmFyIHBvc3RNZXNzYWdlSXNBc3luY2hyb25vdXMgPSB0cnVlO1xuICAgICAgICAgICAgdmFyIG9sZE9uTWVzc2FnZSA9IGdsb2JhbC5vbm1lc3NhZ2U7XG4gICAgICAgICAgICBnbG9iYWwub25tZXNzYWdlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcG9zdE1lc3NhZ2VJc0FzeW5jaHJvbm91cyA9IGZhbHNlO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGdsb2JhbC5wb3N0TWVzc2FnZShcIlwiLCBcIipcIik7XG4gICAgICAgICAgICBnbG9iYWwub25tZXNzYWdlID0gb2xkT25NZXNzYWdlO1xuICAgICAgICAgICAgcmV0dXJuIHBvc3RNZXNzYWdlSXNBc3luY2hyb25vdXM7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnN0YWxsUG9zdE1lc3NhZ2VJbXBsZW1lbnRhdGlvbigpIHtcbiAgICAgICAgLy8gSW5zdGFsbHMgYW4gZXZlbnQgaGFuZGxlciBvbiBgZ2xvYmFsYCBmb3IgdGhlIGBtZXNzYWdlYCBldmVudDogc2VlXG4gICAgICAgIC8vICogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4vRE9NL3dpbmRvdy5wb3N0TWVzc2FnZVxuICAgICAgICAvLyAqIGh0dHA6Ly93d3cud2hhdHdnLm9yZy9zcGVjcy93ZWItYXBwcy9jdXJyZW50LXdvcmsvbXVsdGlwYWdlL2NvbW1zLmh0bWwjY3Jvc3NEb2N1bWVudE1lc3NhZ2VzXG5cbiAgICAgICAgdmFyIG1lc3NhZ2VQcmVmaXggPSBcInNldEltbWVkaWF0ZSRcIiArIE1hdGgucmFuZG9tKCkgKyBcIiRcIjtcbiAgICAgICAgdmFyIG9uR2xvYmFsTWVzc2FnZSA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICBpZiAoZXZlbnQuc291cmNlID09PSBnbG9iYWwgJiZcbiAgICAgICAgICAgICAgICB0eXBlb2YgZXZlbnQuZGF0YSA9PT0gXCJzdHJpbmdcIiAmJlxuICAgICAgICAgICAgICAgIGV2ZW50LmRhdGEuaW5kZXhPZihtZXNzYWdlUHJlZml4KSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHJ1bklmUHJlc2VudCgrZXZlbnQuZGF0YS5zbGljZShtZXNzYWdlUHJlZml4Lmxlbmd0aCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgICAgICAgICAgZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsIG9uR2xvYmFsTWVzc2FnZSwgZmFsc2UpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZ2xvYmFsLmF0dGFjaEV2ZW50KFwib25tZXNzYWdlXCIsIG9uR2xvYmFsTWVzc2FnZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZWdpc3RlckltbWVkaWF0ZSA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgICAgICAgICAgZ2xvYmFsLnBvc3RNZXNzYWdlKG1lc3NhZ2VQcmVmaXggKyBoYW5kbGUsIFwiKlwiKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnN0YWxsTWVzc2FnZUNoYW5uZWxJbXBsZW1lbnRhdGlvbigpIHtcbiAgICAgICAgdmFyIGNoYW5uZWwgPSBuZXcgTWVzc2FnZUNoYW5uZWwoKTtcbiAgICAgICAgY2hhbm5lbC5wb3J0MS5vbm1lc3NhZ2UgPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgdmFyIGhhbmRsZSA9IGV2ZW50LmRhdGE7XG4gICAgICAgICAgICBydW5JZlByZXNlbnQoaGFuZGxlKTtcbiAgICAgICAgfTtcblxuICAgICAgICByZWdpc3RlckltbWVkaWF0ZSA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgICAgICAgICAgY2hhbm5lbC5wb3J0Mi5wb3N0TWVzc2FnZShoYW5kbGUpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc3RhbGxSZWFkeVN0YXRlQ2hhbmdlSW1wbGVtZW50YXRpb24oKSB7XG4gICAgICAgIHZhciBodG1sID0gZG9jLmRvY3VtZW50RWxlbWVudDtcbiAgICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUgPSBmdW5jdGlvbihoYW5kbGUpIHtcbiAgICAgICAgICAgIC8vIENyZWF0ZSBhIDxzY3JpcHQ+IGVsZW1lbnQ7IGl0cyByZWFkeXN0YXRlY2hhbmdlIGV2ZW50IHdpbGwgYmUgZmlyZWQgYXN5bmNocm9ub3VzbHkgb25jZSBpdCBpcyBpbnNlcnRlZFxuICAgICAgICAgICAgLy8gaW50byB0aGUgZG9jdW1lbnQuIERvIHNvLCB0aHVzIHF1ZXVpbmcgdXAgdGhlIHRhc2suIFJlbWVtYmVyIHRvIGNsZWFuIHVwIG9uY2UgaXQncyBiZWVuIGNhbGxlZC5cbiAgICAgICAgICAgIHZhciBzY3JpcHQgPSBkb2MuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcbiAgICAgICAgICAgIHNjcmlwdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcnVuSWZQcmVzZW50KGhhbmRsZSk7XG4gICAgICAgICAgICAgICAgc2NyaXB0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgaHRtbC5yZW1vdmVDaGlsZChzY3JpcHQpO1xuICAgICAgICAgICAgICAgIHNjcmlwdCA9IG51bGw7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaHRtbC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc3RhbGxTZXRUaW1lb3V0SW1wbGVtZW50YXRpb24oKSB7XG4gICAgICAgIHJlZ2lzdGVySW1tZWRpYXRlID0gZnVuY3Rpb24oaGFuZGxlKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KHJ1bklmUHJlc2VudCwgMCwgaGFuZGxlKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyBJZiBzdXBwb3J0ZWQsIHdlIHNob3VsZCBhdHRhY2ggdG8gdGhlIHByb3RvdHlwZSBvZiBnbG9iYWwsIHNpbmNlIHRoYXQgaXMgd2hlcmUgc2V0VGltZW91dCBldCBhbC4gbGl2ZS5cbiAgICB2YXIgYXR0YWNoVG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YgJiYgT2JqZWN0LmdldFByb3RvdHlwZU9mKGdsb2JhbCk7XG4gICAgYXR0YWNoVG8gPSBhdHRhY2hUbyAmJiBhdHRhY2hUby5zZXRUaW1lb3V0ID8gYXR0YWNoVG8gOiBnbG9iYWw7XG5cbiAgICAvLyBEb24ndCBnZXQgZm9vbGVkIGJ5IGUuZy4gYnJvd3NlcmlmeSBlbnZpcm9ubWVudHMuXG4gICAgaWYgKHt9LnRvU3RyaW5nLmNhbGwoZ2xvYmFsLnByb2Nlc3MpID09PSBcIltvYmplY3QgcHJvY2Vzc11cIikge1xuICAgICAgICAvLyBGb3IgTm9kZS5qcyBiZWZvcmUgMC45XG4gICAgICAgIGluc3RhbGxOZXh0VGlja0ltcGxlbWVudGF0aW9uKCk7XG5cbiAgICB9IGVsc2UgaWYgKGNhblVzZVBvc3RNZXNzYWdlKCkpIHtcbiAgICAgICAgLy8gRm9yIG5vbi1JRTEwIG1vZGVybiBicm93c2Vyc1xuICAgICAgICBpbnN0YWxsUG9zdE1lc3NhZ2VJbXBsZW1lbnRhdGlvbigpO1xuXG4gICAgfSBlbHNlIGlmIChnbG9iYWwuTWVzc2FnZUNoYW5uZWwpIHtcbiAgICAgICAgLy8gRm9yIHdlYiB3b3JrZXJzLCB3aGVyZSBzdXBwb3J0ZWRcbiAgICAgICAgaW5zdGFsbE1lc3NhZ2VDaGFubmVsSW1wbGVtZW50YXRpb24oKTtcblxuICAgIH0gZWxzZSBpZiAoZG9jICYmIFwib25yZWFkeXN0YXRlY2hhbmdlXCIgaW4gZG9jLmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIikpIHtcbiAgICAgICAgLy8gRm9yIElFIDbigJM4XG4gICAgICAgIGluc3RhbGxSZWFkeVN0YXRlQ2hhbmdlSW1wbGVtZW50YXRpb24oKTtcblxuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIEZvciBvbGRlciBicm93c2Vyc1xuICAgICAgICBpbnN0YWxsU2V0VGltZW91dEltcGxlbWVudGF0aW9uKCk7XG4gICAgfVxuXG4gICAgYXR0YWNoVG8uc2V0SW1tZWRpYXRlID0gc2V0SW1tZWRpYXRlO1xuICAgIGF0dGFjaFRvLmNsZWFySW1tZWRpYXRlID0gY2xlYXJJbW1lZGlhdGU7XG59KHR5cGVvZiBzZWxmID09PSBcInVuZGVmaW5lZFwiID8gdHlwZW9mIGdsb2JhbCA9PT0gXCJ1bmRlZmluZWRcIiA/IHRoaXMgOiBnbG9iYWwgOiBzZWxmKSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvc2V0aW1tZWRpYXRlL3NldEltbWVkaWF0ZS5qcyIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtdIH1cblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwiLyoqXG4gKiBAdGhpcyB7UHJvbWlzZX1cbiAqL1xuZnVuY3Rpb24gZmluYWxseUNvbnN0cnVjdG9yKGNhbGxiYWNrKSB7XG4gIHZhciBjb25zdHJ1Y3RvciA9IHRoaXMuY29uc3RydWN0b3I7XG4gIHJldHVybiB0aGlzLnRoZW4oXG4gICAgZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgIHJldHVybiBjb25zdHJ1Y3Rvci5yZXNvbHZlKGNhbGxiYWNrKCkpLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgZnVuY3Rpb24ocmVhc29uKSB7XG4gICAgICByZXR1cm4gY29uc3RydWN0b3IucmVzb2x2ZShjYWxsYmFjaygpKS50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gY29uc3RydWN0b3IucmVqZWN0KHJlYXNvbik7XG4gICAgICB9KTtcbiAgICB9XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZpbmFsbHlDb25zdHJ1Y3RvcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9wcm9taXNlLXBvbHlmaWxsL3NyYy9maW5hbGx5LmpzIiwiLyohXG4gKiBjbGlwYm9hcmQuanMgdjIuMC4xXG4gKiBodHRwczovL3plbm9yb2NoYS5naXRodWIuaW8vY2xpcGJvYXJkLmpzXG4gKiBcbiAqIExpY2Vuc2VkIE1JVCDCqSBaZW5vIFJvY2hhXG4gKi9cbihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkNsaXBib2FyZEpTXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkNsaXBib2FyZEpTXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gLyoqKioqKi8gKGZ1bmN0aW9uKG1vZHVsZXMpIHsgLy8gd2VicGFja0Jvb3RzdHJhcFxuLyoqKioqKi8gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuLyoqKioqKi8gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuLyoqKioqKi8gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4vKioqKioqLyBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbi8qKioqKiovIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4vKioqKioqLyBcdFx0XHRpOiBtb2R1bGVJZCxcbi8qKioqKiovIFx0XHRcdGw6IGZhbHNlLFxuLyoqKioqKi8gXHRcdFx0ZXhwb3J0czoge31cbi8qKioqKiovIFx0XHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbi8qKioqKiovIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuLyoqKioqKi8gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbi8qKioqKiovIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4vKioqKioqLyBcdH1cbi8qKioqKiovXG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuLyoqKioqKi8gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbi8qKioqKiovIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4vKioqKioqLyBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4vKioqKioqLyBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4vKioqKioqLyBcdFx0XHRcdGdldDogZ2V0dGVyXG4vKioqKioqLyBcdFx0XHR9KTtcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbi8qKioqKiovIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbi8qKioqKiovIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4vKioqKioqLyBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuLyoqKioqKi8gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbi8qKioqKiovIFx0XHRyZXR1cm4gZ2V0dGVyO1xuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8qKioqKiovIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMyk7XG4vKioqKioqLyB9KVxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKiovIChbXG4vKiAwICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbnZhciBfX1dFQlBBQ0tfQU1EX0RFRklORV9GQUNUT1JZX18sIF9fV0VCUEFDS19BTURfREVGSU5FX0FSUkFZX18sIF9fV0VCUEFDS19BTURfREVGSU5FX1JFU1VMVF9fOyhmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gICAgaWYgKHRydWUpIHtcbiAgICAgICAgIShfX1dFQlBBQ0tfQU1EX0RFRklORV9BUlJBWV9fID0gW21vZHVsZSwgX193ZWJwYWNrX3JlcXVpcmVfXyg3KV0sIF9fV0VCUEFDS19BTURfREVGSU5FX0ZBQ1RPUllfXyA9IChmYWN0b3J5KSxcblx0XHRcdFx0X19XRUJQQUNLX0FNRF9ERUZJTkVfUkVTVUxUX18gPSAodHlwZW9mIF9fV0VCUEFDS19BTURfREVGSU5FX0ZBQ1RPUllfXyA9PT0gJ2Z1bmN0aW9uJyA/XG5cdFx0XHRcdChfX1dFQlBBQ0tfQU1EX0RFRklORV9GQUNUT1JZX18uYXBwbHkoZXhwb3J0cywgX19XRUJQQUNLX0FNRF9ERUZJTkVfQVJSQVlfXykpIDogX19XRUJQQUNLX0FNRF9ERUZJTkVfRkFDVE9SWV9fKSxcblx0XHRcdFx0X19XRUJQQUNLX0FNRF9ERUZJTkVfUkVTVUxUX18gIT09IHVuZGVmaW5lZCAmJiAobW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfQU1EX0RFRklORV9SRVNVTFRfXykpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGV4cG9ydHMgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgZmFjdG9yeShtb2R1bGUsIHJlcXVpcmUoJ3NlbGVjdCcpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgbW9kID0ge1xuICAgICAgICAgICAgZXhwb3J0czoge31cbiAgICAgICAgfTtcbiAgICAgICAgZmFjdG9yeShtb2QsIGdsb2JhbC5zZWxlY3QpO1xuICAgICAgICBnbG9iYWwuY2xpcGJvYXJkQWN0aW9uID0gbW9kLmV4cG9ydHM7XG4gICAgfVxufSkodGhpcywgZnVuY3Rpb24gKG1vZHVsZSwgX3NlbGVjdCkge1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIHZhciBfc2VsZWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NlbGVjdCk7XG5cbiAgICBmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICAgICAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgICAgICAgZGVmYXVsdDogb2JqXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgdmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfSA6IGZ1bmN0aW9uIChvYmopIHtcbiAgICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgICAgICAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgICAgICAgICAgICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICAgICAgICAgICAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICAgICAgICAgICAgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgICAgICAgICAgIGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICAgICAgICAgICAgcmV0dXJuIENvbnN0cnVjdG9yO1xuICAgICAgICB9O1xuICAgIH0oKTtcblxuICAgIHZhciBDbGlwYm9hcmRBY3Rpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gQ2xpcGJvYXJkQWN0aW9uKG9wdGlvbnMpIHtcbiAgICAgICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDbGlwYm9hcmRBY3Rpb24pO1xuXG4gICAgICAgICAgICB0aGlzLnJlc29sdmVPcHRpb25zKG9wdGlvbnMpO1xuICAgICAgICAgICAgdGhpcy5pbml0U2VsZWN0aW9uKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogRGVmaW5lcyBiYXNlIHByb3BlcnRpZXMgcGFzc2VkIGZyb20gY29uc3RydWN0b3IuXG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gICAgICAgICAqL1xuXG5cbiAgICAgICAgX2NyZWF0ZUNsYXNzKENsaXBib2FyZEFjdGlvbiwgW3tcbiAgICAgICAgICAgIGtleTogJ3Jlc29sdmVPcHRpb25zJyxcbiAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZXNvbHZlT3B0aW9ucygpIHtcbiAgICAgICAgICAgICAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG5cbiAgICAgICAgICAgICAgICB0aGlzLmFjdGlvbiA9IG9wdGlvbnMuYWN0aW9uO1xuICAgICAgICAgICAgICAgIHRoaXMuY29udGFpbmVyID0gb3B0aW9ucy5jb250YWluZXI7XG4gICAgICAgICAgICAgICAgdGhpcy5lbWl0dGVyID0gb3B0aW9ucy5lbWl0dGVyO1xuICAgICAgICAgICAgICAgIHRoaXMudGFyZ2V0ID0gb3B0aW9ucy50YXJnZXQ7XG4gICAgICAgICAgICAgICAgdGhpcy50ZXh0ID0gb3B0aW9ucy50ZXh0O1xuICAgICAgICAgICAgICAgIHRoaXMudHJpZ2dlciA9IG9wdGlvbnMudHJpZ2dlcjtcblxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRUZXh0ID0gJyc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGtleTogJ2luaXRTZWxlY3Rpb24nLFxuICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGluaXRTZWxlY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudGV4dCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdEZha2UoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMudGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0VGFyZ2V0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBrZXk6ICdzZWxlY3RGYWtlJyxcbiAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBzZWxlY3RGYWtlKCkge1xuICAgICAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgICAgICAgICAgICB2YXIgaXNSVEwgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkaXInKSA9PSAncnRsJztcblxuICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlRmFrZSgpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5mYWtlSGFuZGxlckNhbGxiYWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXMucmVtb3ZlRmFrZSgpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgdGhpcy5mYWtlSGFuZGxlciA9IHRoaXMuY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5mYWtlSGFuZGxlckNhbGxiYWNrKSB8fCB0cnVlO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5mYWtlRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgICAgICAgICAgICAgLy8gUHJldmVudCB6b29taW5nIG9uIGlPU1xuICAgICAgICAgICAgICAgIHRoaXMuZmFrZUVsZW0uc3R5bGUuZm9udFNpemUgPSAnMTJwdCc7XG4gICAgICAgICAgICAgICAgLy8gUmVzZXQgYm94IG1vZGVsXG4gICAgICAgICAgICAgICAgdGhpcy5mYWtlRWxlbS5zdHlsZS5ib3JkZXIgPSAnMCc7XG4gICAgICAgICAgICAgICAgdGhpcy5mYWtlRWxlbS5zdHlsZS5wYWRkaW5nID0gJzAnO1xuICAgICAgICAgICAgICAgIHRoaXMuZmFrZUVsZW0uc3R5bGUubWFyZ2luID0gJzAnO1xuICAgICAgICAgICAgICAgIC8vIE1vdmUgZWxlbWVudCBvdXQgb2Ygc2NyZWVuIGhvcml6b250YWxseVxuICAgICAgICAgICAgICAgIHRoaXMuZmFrZUVsZW0uc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgICAgICAgICAgICAgIHRoaXMuZmFrZUVsZW0uc3R5bGVbaXNSVEwgPyAncmlnaHQnIDogJ2xlZnQnXSA9ICctOTk5OXB4JztcbiAgICAgICAgICAgICAgICAvLyBNb3ZlIGVsZW1lbnQgdG8gdGhlIHNhbWUgcG9zaXRpb24gdmVydGljYWxseVxuICAgICAgICAgICAgICAgIHZhciB5UG9zaXRpb24gPSB3aW5kb3cucGFnZVlPZmZzZXQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDtcbiAgICAgICAgICAgICAgICB0aGlzLmZha2VFbGVtLnN0eWxlLnRvcCA9IHlQb3NpdGlvbiArICdweCc7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmZha2VFbGVtLnNldEF0dHJpYnV0ZSgncmVhZG9ubHknLCAnJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5mYWtlRWxlbS52YWx1ZSA9IHRoaXMudGV4dDtcblxuICAgICAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuZmFrZUVsZW0pO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZFRleHQgPSAoMCwgX3NlbGVjdDIuZGVmYXVsdCkodGhpcy5mYWtlRWxlbSk7XG4gICAgICAgICAgICAgICAgdGhpcy5jb3B5VGV4dCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBrZXk6ICdyZW1vdmVGYWtlJyxcbiAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW1vdmVGYWtlKCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmZha2VIYW5kbGVyKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5mYWtlSGFuZGxlckNhbGxiYWNrKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mYWtlSGFuZGxlciA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmFrZUhhbmRsZXJDYWxsYmFjayA9IG51bGw7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZmFrZUVsZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250YWluZXIucmVtb3ZlQ2hpbGQodGhpcy5mYWtlRWxlbSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmFrZUVsZW0gPSBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwge1xuICAgICAgICAgICAga2V5OiAnc2VsZWN0VGFyZ2V0JyxcbiAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBzZWxlY3RUYXJnZXQoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZFRleHQgPSAoMCwgX3NlbGVjdDIuZGVmYXVsdCkodGhpcy50YXJnZXQpO1xuICAgICAgICAgICAgICAgIHRoaXMuY29weVRleHQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwge1xuICAgICAgICAgICAga2V5OiAnY29weVRleHQnLFxuICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNvcHlUZXh0KCkge1xuICAgICAgICAgICAgICAgIHZhciBzdWNjZWVkZWQgPSB2b2lkIDA7XG5cbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBzdWNjZWVkZWQgPSBkb2N1bWVudC5leGVjQ29tbWFuZCh0aGlzLmFjdGlvbik7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIHN1Y2NlZWRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlUmVzdWx0KHN1Y2NlZWRlZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGtleTogJ2hhbmRsZVJlc3VsdCcsXG4gICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gaGFuZGxlUmVzdWx0KHN1Y2NlZWRlZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZW1pdHRlci5lbWl0KHN1Y2NlZWRlZCA/ICdzdWNjZXNzJyA6ICdlcnJvcicsIHtcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiB0aGlzLmFjdGlvbixcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogdGhpcy5zZWxlY3RlZFRleHQsXG4gICAgICAgICAgICAgICAgICAgIHRyaWdnZXI6IHRoaXMudHJpZ2dlcixcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJTZWxlY3Rpb246IHRoaXMuY2xlYXJTZWxlY3Rpb24uYmluZCh0aGlzKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBrZXk6ICdjbGVhclNlbGVjdGlvbicsXG4gICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gY2xlYXJTZWxlY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudHJpZ2dlcikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRyaWdnZXIuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB3aW5kb3cuZ2V0U2VsZWN0aW9uKCkucmVtb3ZlQWxsUmFuZ2VzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGtleTogJ2Rlc3Ryb3knLFxuICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVGYWtlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGtleTogJ2FjdGlvbicsXG4gICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uIHNldCgpIHtcbiAgICAgICAgICAgICAgICB2YXIgYWN0aW9uID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiAnY29weSc7XG5cbiAgICAgICAgICAgICAgICB0aGlzLl9hY3Rpb24gPSBhY3Rpb247XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fYWN0aW9uICE9PSAnY29weScgJiYgdGhpcy5fYWN0aW9uICE9PSAnY3V0Jykge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgXCJhY3Rpb25cIiB2YWx1ZSwgdXNlIGVpdGhlciBcImNvcHlcIiBvciBcImN1dFwiJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9hY3Rpb247XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGtleTogJ3RhcmdldCcsXG4gICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uIHNldCh0YXJnZXQpIHtcbiAgICAgICAgICAgICAgICBpZiAodGFyZ2V0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRhcmdldCAmJiAodHlwZW9mIHRhcmdldCA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YodGFyZ2V0KSkgPT09ICdvYmplY3QnICYmIHRhcmdldC5ub2RlVHlwZSA9PT0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuYWN0aW9uID09PSAnY29weScgJiYgdGFyZ2V0Lmhhc0F0dHJpYnV0ZSgnZGlzYWJsZWQnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBcInRhcmdldFwiIGF0dHJpYnV0ZS4gUGxlYXNlIHVzZSBcInJlYWRvbmx5XCIgaW5zdGVhZCBvZiBcImRpc2FibGVkXCIgYXR0cmlidXRlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmFjdGlvbiA9PT0gJ2N1dCcgJiYgKHRhcmdldC5oYXNBdHRyaWJ1dGUoJ3JlYWRvbmx5JykgfHwgdGFyZ2V0Lmhhc0F0dHJpYnV0ZSgnZGlzYWJsZWQnKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgXCJ0YXJnZXRcIiBhdHRyaWJ1dGUuIFlvdSBjYW5cXCd0IGN1dCB0ZXh0IGZyb20gZWxlbWVudHMgd2l0aCBcInJlYWRvbmx5XCIgb3IgXCJkaXNhYmxlZFwiIGF0dHJpYnV0ZXMnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fdGFyZ2V0ID0gdGFyZ2V0O1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIFwidGFyZ2V0XCIgdmFsdWUsIHVzZSBhIHZhbGlkIEVsZW1lbnQnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fdGFyZ2V0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XSk7XG5cbiAgICAgICAgcmV0dXJuIENsaXBib2FyZEFjdGlvbjtcbiAgICB9KCk7XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IENsaXBib2FyZEFjdGlvbjtcbn0pO1xuXG4vKioqLyB9KSxcbi8qIDEgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxudmFyIGlzID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KTtcbnZhciBkZWxlZ2F0ZSA9IF9fd2VicGFja19yZXF1aXJlX18oNSk7XG5cbi8qKlxuICogVmFsaWRhdGVzIGFsbCBwYXJhbXMgYW5kIGNhbGxzIHRoZSByaWdodFxuICogbGlzdGVuZXIgZnVuY3Rpb24gYmFzZWQgb24gaXRzIHRhcmdldCB0eXBlLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfEhUTUxFbGVtZW50fEhUTUxDb2xsZWN0aW9ufE5vZGVMaXN0fSB0YXJnZXRcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICogQHJldHVybiB7T2JqZWN0fVxuICovXG5mdW5jdGlvbiBsaXN0ZW4odGFyZ2V0LCB0eXBlLCBjYWxsYmFjaykge1xuICAgIGlmICghdGFyZ2V0ICYmICF0eXBlICYmICFjYWxsYmFjaykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgcmVxdWlyZWQgYXJndW1lbnRzJyk7XG4gICAgfVxuXG4gICAgaWYgKCFpcy5zdHJpbmcodHlwZSkpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignU2Vjb25kIGFyZ3VtZW50IG11c3QgYmUgYSBTdHJpbmcnKTtcbiAgICB9XG5cbiAgICBpZiAoIWlzLmZuKGNhbGxiYWNrKSkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdUaGlyZCBhcmd1bWVudCBtdXN0IGJlIGEgRnVuY3Rpb24nKTtcbiAgICB9XG5cbiAgICBpZiAoaXMubm9kZSh0YXJnZXQpKSB7XG4gICAgICAgIHJldHVybiBsaXN0ZW5Ob2RlKHRhcmdldCwgdHlwZSwgY2FsbGJhY2spO1xuICAgIH1cbiAgICBlbHNlIGlmIChpcy5ub2RlTGlzdCh0YXJnZXQpKSB7XG4gICAgICAgIHJldHVybiBsaXN0ZW5Ob2RlTGlzdCh0YXJnZXQsIHR5cGUsIGNhbGxiYWNrKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoaXMuc3RyaW5nKHRhcmdldCkpIHtcbiAgICAgICAgcmV0dXJuIGxpc3RlblNlbGVjdG9yKHRhcmdldCwgdHlwZSwgY2FsbGJhY2spO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignRmlyc3QgYXJndW1lbnQgbXVzdCBiZSBhIFN0cmluZywgSFRNTEVsZW1lbnQsIEhUTUxDb2xsZWN0aW9uLCBvciBOb2RlTGlzdCcpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBBZGRzIGFuIGV2ZW50IGxpc3RlbmVyIHRvIGEgSFRNTCBlbGVtZW50XG4gKiBhbmQgcmV0dXJucyBhIHJlbW92ZSBsaXN0ZW5lciBmdW5jdGlvbi5cbiAqXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBub2RlXG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xuZnVuY3Rpb24gbGlzdGVuTm9kZShub2RlLCB0eXBlLCBjYWxsYmFjaykge1xuICAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBjYWxsYmFjayk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBkZXN0cm95OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIG5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBjYWxsYmFjayk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8qKlxuICogQWRkIGFuIGV2ZW50IGxpc3RlbmVyIHRvIGEgbGlzdCBvZiBIVE1MIGVsZW1lbnRzXG4gKiBhbmQgcmV0dXJucyBhIHJlbW92ZSBsaXN0ZW5lciBmdW5jdGlvbi5cbiAqXG4gKiBAcGFyYW0ge05vZGVMaXN0fEhUTUxDb2xsZWN0aW9ufSBub2RlTGlzdFxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cbmZ1bmN0aW9uIGxpc3Rlbk5vZGVMaXN0KG5vZGVMaXN0LCB0eXBlLCBjYWxsYmFjaykge1xuICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwobm9kZUxpc3QsIGZ1bmN0aW9uKG5vZGUpIHtcbiAgICAgICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGNhbGxiYWNrKTtcbiAgICB9KTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIGRlc3Ryb3k6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChub2RlTGlzdCwgZnVuY3Rpb24obm9kZSkge1xuICAgICAgICAgICAgICAgIG5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBjYWxsYmFjayk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLyoqXG4gKiBBZGQgYW4gZXZlbnQgbGlzdGVuZXIgdG8gYSBzZWxlY3RvclxuICogYW5kIHJldHVybnMgYSByZW1vdmUgbGlzdGVuZXIgZnVuY3Rpb24uXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHNlbGVjdG9yXG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xuZnVuY3Rpb24gbGlzdGVuU2VsZWN0b3Ioc2VsZWN0b3IsIHR5cGUsIGNhbGxiYWNrKSB7XG4gICAgcmV0dXJuIGRlbGVnYXRlKGRvY3VtZW50LmJvZHksIHNlbGVjdG9yLCB0eXBlLCBjYWxsYmFjayk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbGlzdGVuO1xuXG5cbi8qKiovIH0pLFxuLyogMiAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5mdW5jdGlvbiBFICgpIHtcbiAgLy8gS2VlcCB0aGlzIGVtcHR5IHNvIGl0J3MgZWFzaWVyIHRvIGluaGVyaXQgZnJvbVxuICAvLyAodmlhIGh0dHBzOi8vZ2l0aHViLmNvbS9saXBzbWFjayBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9zY290dGNvcmdhbi90aW55LWVtaXR0ZXIvaXNzdWVzLzMpXG59XG5cbkUucHJvdG90eXBlID0ge1xuICBvbjogZnVuY3Rpb24gKG5hbWUsIGNhbGxiYWNrLCBjdHgpIHtcbiAgICB2YXIgZSA9IHRoaXMuZSB8fCAodGhpcy5lID0ge30pO1xuXG4gICAgKGVbbmFtZV0gfHwgKGVbbmFtZV0gPSBbXSkpLnB1c2goe1xuICAgICAgZm46IGNhbGxiYWNrLFxuICAgICAgY3R4OiBjdHhcbiAgICB9KTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9LFxuXG4gIG9uY2U6IGZ1bmN0aW9uIChuYW1lLCBjYWxsYmFjaywgY3R4KSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIGZ1bmN0aW9uIGxpc3RlbmVyICgpIHtcbiAgICAgIHNlbGYub2ZmKG5hbWUsIGxpc3RlbmVyKTtcbiAgICAgIGNhbGxiYWNrLmFwcGx5KGN0eCwgYXJndW1lbnRzKTtcbiAgICB9O1xuXG4gICAgbGlzdGVuZXIuXyA9IGNhbGxiYWNrXG4gICAgcmV0dXJuIHRoaXMub24obmFtZSwgbGlzdGVuZXIsIGN0eCk7XG4gIH0sXG5cbiAgZW1pdDogZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB2YXIgZGF0YSA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcbiAgICB2YXIgZXZ0QXJyID0gKCh0aGlzLmUgfHwgKHRoaXMuZSA9IHt9KSlbbmFtZV0gfHwgW10pLnNsaWNlKCk7XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciBsZW4gPSBldnRBcnIubGVuZ3RoO1xuXG4gICAgZm9yIChpOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIGV2dEFycltpXS5mbi5hcHBseShldnRBcnJbaV0uY3R4LCBkYXRhKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfSxcblxuICBvZmY6IGZ1bmN0aW9uIChuYW1lLCBjYWxsYmFjaykge1xuICAgIHZhciBlID0gdGhpcy5lIHx8ICh0aGlzLmUgPSB7fSk7XG4gICAgdmFyIGV2dHMgPSBlW25hbWVdO1xuICAgIHZhciBsaXZlRXZlbnRzID0gW107XG5cbiAgICBpZiAoZXZ0cyAmJiBjYWxsYmFjaykge1xuICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGV2dHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgaWYgKGV2dHNbaV0uZm4gIT09IGNhbGxiYWNrICYmIGV2dHNbaV0uZm4uXyAhPT0gY2FsbGJhY2spXG4gICAgICAgICAgbGl2ZUV2ZW50cy5wdXNoKGV2dHNbaV0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJlbW92ZSBldmVudCBmcm9tIHF1ZXVlIHRvIHByZXZlbnQgbWVtb3J5IGxlYWtcbiAgICAvLyBTdWdnZXN0ZWQgYnkgaHR0cHM6Ly9naXRodWIuY29tL2xhemRcbiAgICAvLyBSZWY6IGh0dHBzOi8vZ2l0aHViLmNvbS9zY290dGNvcmdhbi90aW55LWVtaXR0ZXIvY29tbWl0L2M2ZWJmYWE5YmM5NzNiMzNkMTEwYTg0YTMwNzc0MmI3Y2Y5NGM5NTMjY29tbWl0Y29tbWVudC01MDI0OTEwXG5cbiAgICAobGl2ZUV2ZW50cy5sZW5ndGgpXG4gICAgICA/IGVbbmFtZV0gPSBsaXZlRXZlbnRzXG4gICAgICA6IGRlbGV0ZSBlW25hbWVdO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gRTtcblxuXG4vKioqLyB9KSxcbi8qIDMgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxudmFyIF9fV0VCUEFDS19BTURfREVGSU5FX0ZBQ1RPUllfXywgX19XRUJQQUNLX0FNRF9ERUZJTkVfQVJSQVlfXywgX19XRUJQQUNLX0FNRF9ERUZJTkVfUkVTVUxUX187KGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgICBpZiAodHJ1ZSkge1xuICAgICAgICAhKF9fV0VCUEFDS19BTURfREVGSU5FX0FSUkFZX18gPSBbbW9kdWxlLCBfX3dlYnBhY2tfcmVxdWlyZV9fKDApLCBfX3dlYnBhY2tfcmVxdWlyZV9fKDIpLCBfX3dlYnBhY2tfcmVxdWlyZV9fKDEpXSwgX19XRUJQQUNLX0FNRF9ERUZJTkVfRkFDVE9SWV9fID0gKGZhY3RvcnkpLFxuXHRcdFx0XHRfX1dFQlBBQ0tfQU1EX0RFRklORV9SRVNVTFRfXyA9ICh0eXBlb2YgX19XRUJQQUNLX0FNRF9ERUZJTkVfRkFDVE9SWV9fID09PSAnZnVuY3Rpb24nID9cblx0XHRcdFx0KF9fV0VCUEFDS19BTURfREVGSU5FX0ZBQ1RPUllfXy5hcHBseShleHBvcnRzLCBfX1dFQlBBQ0tfQU1EX0RFRklORV9BUlJBWV9fKSkgOiBfX1dFQlBBQ0tfQU1EX0RFRklORV9GQUNUT1JZX18pLFxuXHRcdFx0XHRfX1dFQlBBQ0tfQU1EX0RFRklORV9SRVNVTFRfXyAhPT0gdW5kZWZpbmVkICYmIChtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19BTURfREVGSU5FX1JFU1VMVF9fKSk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZXhwb3J0cyAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBmYWN0b3J5KG1vZHVsZSwgcmVxdWlyZSgnLi9jbGlwYm9hcmQtYWN0aW9uJyksIHJlcXVpcmUoJ3RpbnktZW1pdHRlcicpLCByZXF1aXJlKCdnb29kLWxpc3RlbmVyJykpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBtb2QgPSB7XG4gICAgICAgICAgICBleHBvcnRzOiB7fVxuICAgICAgICB9O1xuICAgICAgICBmYWN0b3J5KG1vZCwgZ2xvYmFsLmNsaXBib2FyZEFjdGlvbiwgZ2xvYmFsLnRpbnlFbWl0dGVyLCBnbG9iYWwuZ29vZExpc3RlbmVyKTtcbiAgICAgICAgZ2xvYmFsLmNsaXBib2FyZCA9IG1vZC5leHBvcnRzO1xuICAgIH1cbn0pKHRoaXMsIGZ1bmN0aW9uIChtb2R1bGUsIF9jbGlwYm9hcmRBY3Rpb24sIF90aW55RW1pdHRlciwgX2dvb2RMaXN0ZW5lcikge1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIHZhciBfY2xpcGJvYXJkQWN0aW9uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsaXBib2FyZEFjdGlvbik7XG5cbiAgICB2YXIgX3RpbnlFbWl0dGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RpbnlFbWl0dGVyKTtcblxuICAgIHZhciBfZ29vZExpc3RlbmVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dvb2RMaXN0ZW5lcik7XG5cbiAgICBmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICAgICAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgICAgICAgZGVmYXVsdDogb2JqXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgdmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfSA6IGZ1bmN0aW9uIChvYmopIHtcbiAgICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgICAgICAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgICAgICAgICAgICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICAgICAgICAgICAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICAgICAgICAgICAgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgICAgICAgICAgIGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICAgICAgICAgICAgcmV0dXJuIENvbnN0cnVjdG9yO1xuICAgICAgICB9O1xuICAgIH0oKTtcblxuICAgIGZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHtcbiAgICAgICAgaWYgKCFzZWxmKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7XG4gICAgICAgIH1cblxuICAgICAgICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHtcbiAgICAgICAgICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IHN1YkNsYXNzLFxuICAgICAgICAgICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzO1xuICAgIH1cblxuICAgIHZhciBDbGlwYm9hcmQgPSBmdW5jdGlvbiAoX0VtaXR0ZXIpIHtcbiAgICAgICAgX2luaGVyaXRzKENsaXBib2FyZCwgX0VtaXR0ZXIpO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0ge1N0cmluZ3xIVE1MRWxlbWVudHxIVE1MQ29sbGVjdGlvbnxOb2RlTGlzdH0gdHJpZ2dlclxuICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gQ2xpcGJvYXJkKHRyaWdnZXIsIG9wdGlvbnMpIHtcbiAgICAgICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDbGlwYm9hcmQpO1xuXG4gICAgICAgICAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoQ2xpcGJvYXJkLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoQ2xpcGJvYXJkKSkuY2FsbCh0aGlzKSk7XG5cbiAgICAgICAgICAgIF90aGlzLnJlc29sdmVPcHRpb25zKG9wdGlvbnMpO1xuICAgICAgICAgICAgX3RoaXMubGlzdGVuQ2xpY2sodHJpZ2dlcik7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogRGVmaW5lcyBpZiBhdHRyaWJ1dGVzIHdvdWxkIGJlIHJlc29sdmVkIHVzaW5nIGludGVybmFsIHNldHRlciBmdW5jdGlvbnNcbiAgICAgICAgICogb3IgY3VzdG9tIGZ1bmN0aW9ucyB0aGF0IHdlcmUgcGFzc2VkIGluIHRoZSBjb25zdHJ1Y3Rvci5cbiAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAgICAgICAgICovXG5cblxuICAgICAgICBfY3JlYXRlQ2xhc3MoQ2xpcGJvYXJkLCBbe1xuICAgICAgICAgICAga2V5OiAncmVzb2x2ZU9wdGlvbnMnLFxuICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlc29sdmVPcHRpb25zKCkge1xuICAgICAgICAgICAgICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcblxuICAgICAgICAgICAgICAgIHRoaXMuYWN0aW9uID0gdHlwZW9mIG9wdGlvbnMuYWN0aW9uID09PSAnZnVuY3Rpb24nID8gb3B0aW9ucy5hY3Rpb24gOiB0aGlzLmRlZmF1bHRBY3Rpb247XG4gICAgICAgICAgICAgICAgdGhpcy50YXJnZXQgPSB0eXBlb2Ygb3B0aW9ucy50YXJnZXQgPT09ICdmdW5jdGlvbicgPyBvcHRpb25zLnRhcmdldCA6IHRoaXMuZGVmYXVsdFRhcmdldDtcbiAgICAgICAgICAgICAgICB0aGlzLnRleHQgPSB0eXBlb2Ygb3B0aW9ucy50ZXh0ID09PSAnZnVuY3Rpb24nID8gb3B0aW9ucy50ZXh0IDogdGhpcy5kZWZhdWx0VGV4dDtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRhaW5lciA9IF90eXBlb2Yob3B0aW9ucy5jb250YWluZXIpID09PSAnb2JqZWN0JyA/IG9wdGlvbnMuY29udGFpbmVyIDogZG9jdW1lbnQuYm9keTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwge1xuICAgICAgICAgICAga2V5OiAnbGlzdGVuQ2xpY2snLFxuICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGxpc3RlbkNsaWNrKHRyaWdnZXIpIHtcbiAgICAgICAgICAgICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgICAgICAgICAgIHRoaXMubGlzdGVuZXIgPSAoMCwgX2dvb2RMaXN0ZW5lcjIuZGVmYXVsdCkodHJpZ2dlciwgJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzMi5vbkNsaWNrKGUpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBrZXk6ICdvbkNsaWNrJyxcbiAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBvbkNsaWNrKGUpIHtcbiAgICAgICAgICAgICAgICB2YXIgdHJpZ2dlciA9IGUuZGVsZWdhdGVUYXJnZXQgfHwgZS5jdXJyZW50VGFyZ2V0O1xuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY2xpcGJvYXJkQWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xpcGJvYXJkQWN0aW9uID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLmNsaXBib2FyZEFjdGlvbiA9IG5ldyBfY2xpcGJvYXJkQWN0aW9uMi5kZWZhdWx0KHtcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiB0aGlzLmFjdGlvbih0cmlnZ2VyKSxcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiB0aGlzLnRhcmdldCh0cmlnZ2VyKSxcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogdGhpcy50ZXh0KHRyaWdnZXIpLFxuICAgICAgICAgICAgICAgICAgICBjb250YWluZXI6IHRoaXMuY29udGFpbmVyLFxuICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyOiB0cmlnZ2VyLFxuICAgICAgICAgICAgICAgICAgICBlbWl0dGVyOiB0aGlzXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGtleTogJ2RlZmF1bHRBY3Rpb24nLFxuICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGRlZmF1bHRBY3Rpb24odHJpZ2dlcikge1xuICAgICAgICAgICAgICAgIHJldHVybiBnZXRBdHRyaWJ1dGVWYWx1ZSgnYWN0aW9uJywgdHJpZ2dlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGtleTogJ2RlZmF1bHRUYXJnZXQnLFxuICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGRlZmF1bHRUYXJnZXQodHJpZ2dlcikge1xuICAgICAgICAgICAgICAgIHZhciBzZWxlY3RvciA9IGdldEF0dHJpYnV0ZVZhbHVlKCd0YXJnZXQnLCB0cmlnZ2VyKTtcblxuICAgICAgICAgICAgICAgIGlmIChzZWxlY3Rvcikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBrZXk6ICdkZWZhdWx0VGV4dCcsXG4gICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZGVmYXVsdFRleHQodHJpZ2dlcikge1xuICAgICAgICAgICAgICAgIHJldHVybiBnZXRBdHRyaWJ1dGVWYWx1ZSgndGV4dCcsIHRyaWdnZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBrZXk6ICdkZXN0cm95JyxcbiAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgICAgICAgICAgICAgIHRoaXMubGlzdGVuZXIuZGVzdHJveSgpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY2xpcGJvYXJkQWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xpcGJvYXJkQWN0aW9uLmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jbGlwYm9hcmRBY3Rpb24gPSBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfV0sIFt7XG4gICAgICAgICAgICBrZXk6ICdpc1N1cHBvcnRlZCcsXG4gICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gaXNTdXBwb3J0ZWQoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGFjdGlvbiA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogWydjb3B5JywgJ2N1dCddO1xuXG4gICAgICAgICAgICAgICAgdmFyIGFjdGlvbnMgPSB0eXBlb2YgYWN0aW9uID09PSAnc3RyaW5nJyA/IFthY3Rpb25dIDogYWN0aW9uO1xuICAgICAgICAgICAgICAgIHZhciBzdXBwb3J0ID0gISFkb2N1bWVudC5xdWVyeUNvbW1hbmRTdXBwb3J0ZWQ7XG5cbiAgICAgICAgICAgICAgICBhY3Rpb25zLmZvckVhY2goZnVuY3Rpb24gKGFjdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBzdXBwb3J0ID0gc3VwcG9ydCAmJiAhIWRvY3VtZW50LnF1ZXJ5Q29tbWFuZFN1cHBvcnRlZChhY3Rpb24pO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHN1cHBvcnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1dKTtcblxuICAgICAgICByZXR1cm4gQ2xpcGJvYXJkO1xuICAgIH0oX3RpbnlFbWl0dGVyMi5kZWZhdWx0KTtcblxuICAgIC8qKlxuICAgICAqIEhlbHBlciBmdW5jdGlvbiB0byByZXRyaWV2ZSBhdHRyaWJ1dGUgdmFsdWUuXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHN1ZmZpeFxuICAgICAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbWVudFxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGdldEF0dHJpYnV0ZVZhbHVlKHN1ZmZpeCwgZWxlbWVudCkge1xuICAgICAgICB2YXIgYXR0cmlidXRlID0gJ2RhdGEtY2xpcGJvYXJkLScgKyBzdWZmaXg7XG5cbiAgICAgICAgaWYgKCFlbGVtZW50Lmhhc0F0dHJpYnV0ZShhdHRyaWJ1dGUpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZWxlbWVudC5nZXRBdHRyaWJ1dGUoYXR0cmlidXRlKTtcbiAgICB9XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IENsaXBib2FyZDtcbn0pO1xuXG4vKioqLyB9KSxcbi8qIDQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxudmFyIERPQ1VNRU5UX05PREVfVFlQRSA9IDk7XG5cbi8qKlxuICogQSBwb2x5ZmlsbCBmb3IgRWxlbWVudC5tYXRjaGVzKClcbiAqL1xuaWYgKHR5cGVvZiBFbGVtZW50ICE9PSAndW5kZWZpbmVkJyAmJiAhRWxlbWVudC5wcm90b3R5cGUubWF0Y2hlcykge1xuICAgIHZhciBwcm90byA9IEVsZW1lbnQucHJvdG90eXBlO1xuXG4gICAgcHJvdG8ubWF0Y2hlcyA9IHByb3RvLm1hdGNoZXNTZWxlY3RvciB8fFxuICAgICAgICAgICAgICAgICAgICBwcm90by5tb3pNYXRjaGVzU2VsZWN0b3IgfHxcbiAgICAgICAgICAgICAgICAgICAgcHJvdG8ubXNNYXRjaGVzU2VsZWN0b3IgfHxcbiAgICAgICAgICAgICAgICAgICAgcHJvdG8ub01hdGNoZXNTZWxlY3RvciB8fFxuICAgICAgICAgICAgICAgICAgICBwcm90by53ZWJraXRNYXRjaGVzU2VsZWN0b3I7XG59XG5cbi8qKlxuICogRmluZHMgdGhlIGNsb3Nlc3QgcGFyZW50IHRoYXQgbWF0Y2hlcyBhIHNlbGVjdG9yLlxuICpcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbWVudFxuICogQHBhcmFtIHtTdHJpbmd9IHNlbGVjdG9yXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn1cbiAqL1xuZnVuY3Rpb24gY2xvc2VzdCAoZWxlbWVudCwgc2VsZWN0b3IpIHtcbiAgICB3aGlsZSAoZWxlbWVudCAmJiBlbGVtZW50Lm5vZGVUeXBlICE9PSBET0NVTUVOVF9OT0RFX1RZUEUpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBlbGVtZW50Lm1hdGNoZXMgPT09ICdmdW5jdGlvbicgJiZcbiAgICAgICAgICAgIGVsZW1lbnQubWF0Y2hlcyhzZWxlY3RvcikpIHtcbiAgICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICAgICAgfVxuICAgICAgICBlbGVtZW50ID0gZWxlbWVudC5wYXJlbnROb2RlO1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjbG9zZXN0O1xuXG5cbi8qKiovIH0pLFxuLyogNSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG52YXIgY2xvc2VzdCA9IF9fd2VicGFja19yZXF1aXJlX18oNCk7XG5cbi8qKlxuICogRGVsZWdhdGVzIGV2ZW50IHRvIGEgc2VsZWN0b3IuXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSBlbGVtZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gc2VsZWN0b3JcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICogQHBhcmFtIHtCb29sZWFufSB1c2VDYXB0dXJlXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cbmZ1bmN0aW9uIF9kZWxlZ2F0ZShlbGVtZW50LCBzZWxlY3RvciwgdHlwZSwgY2FsbGJhY2ssIHVzZUNhcHR1cmUpIHtcbiAgICB2YXIgbGlzdGVuZXJGbiA9IGxpc3RlbmVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgbGlzdGVuZXJGbiwgdXNlQ2FwdHVyZSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBkZXN0cm95OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lckZuLCB1c2VDYXB0dXJlKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLyoqXG4gKiBEZWxlZ2F0ZXMgZXZlbnQgdG8gYSBzZWxlY3Rvci5cbiAqXG4gKiBAcGFyYW0ge0VsZW1lbnR8U3RyaW5nfEFycmF5fSBbZWxlbWVudHNdXG4gKiBAcGFyYW0ge1N0cmluZ30gc2VsZWN0b3JcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICogQHBhcmFtIHtCb29sZWFufSB1c2VDYXB0dXJlXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cbmZ1bmN0aW9uIGRlbGVnYXRlKGVsZW1lbnRzLCBzZWxlY3RvciwgdHlwZSwgY2FsbGJhY2ssIHVzZUNhcHR1cmUpIHtcbiAgICAvLyBIYW5kbGUgdGhlIHJlZ3VsYXIgRWxlbWVudCB1c2FnZVxuICAgIGlmICh0eXBlb2YgZWxlbWVudHMuYWRkRXZlbnRMaXN0ZW5lciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gX2RlbGVnYXRlLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG4gICAgfVxuXG4gICAgLy8gSGFuZGxlIEVsZW1lbnQtbGVzcyB1c2FnZSwgaXQgZGVmYXVsdHMgdG8gZ2xvYmFsIGRlbGVnYXRpb25cbiAgICBpZiAodHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgLy8gVXNlIGBkb2N1bWVudGAgYXMgdGhlIGZpcnN0IHBhcmFtZXRlciwgdGhlbiBhcHBseSBhcmd1bWVudHNcbiAgICAgICAgLy8gVGhpcyBpcyBhIHNob3J0IHdheSB0byAudW5zaGlmdCBgYXJndW1lbnRzYCB3aXRob3V0IHJ1bm5pbmcgaW50byBkZW9wdGltaXphdGlvbnNcbiAgICAgICAgcmV0dXJuIF9kZWxlZ2F0ZS5iaW5kKG51bGwsIGRvY3VtZW50KS5hcHBseShudWxsLCBhcmd1bWVudHMpO1xuICAgIH1cblxuICAgIC8vIEhhbmRsZSBTZWxlY3Rvci1iYXNlZCB1c2FnZVxuICAgIGlmICh0eXBlb2YgZWxlbWVudHMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChlbGVtZW50cyk7XG4gICAgfVxuXG4gICAgLy8gSGFuZGxlIEFycmF5LWxpa2UgYmFzZWQgdXNhZ2VcbiAgICByZXR1cm4gQXJyYXkucHJvdG90eXBlLm1hcC5jYWxsKGVsZW1lbnRzLCBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICByZXR1cm4gX2RlbGVnYXRlKGVsZW1lbnQsIHNlbGVjdG9yLCB0eXBlLCBjYWxsYmFjaywgdXNlQ2FwdHVyZSk7XG4gICAgfSk7XG59XG5cbi8qKlxuICogRmluZHMgY2xvc2VzdCBtYXRjaCBhbmQgaW52b2tlcyBjYWxsYmFjay5cbiAqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBzZWxlY3RvclxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn1cbiAqL1xuZnVuY3Rpb24gbGlzdGVuZXIoZWxlbWVudCwgc2VsZWN0b3IsIHR5cGUsIGNhbGxiYWNrKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgZS5kZWxlZ2F0ZVRhcmdldCA9IGNsb3Nlc3QoZS50YXJnZXQsIHNlbGVjdG9yKTtcblxuICAgICAgICBpZiAoZS5kZWxlZ2F0ZVRhcmdldCkge1xuICAgICAgICAgICAgY2FsbGJhY2suY2FsbChlbGVtZW50LCBlKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkZWxlZ2F0ZTtcblxuXG4vKioqLyB9KSxcbi8qIDYgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuLyoqXG4gKiBDaGVjayBpZiBhcmd1bWVudCBpcyBhIEhUTUwgZWxlbWVudC5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsdWVcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKi9cbmV4cG9ydHMubm9kZSA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlICE9PSB1bmRlZmluZWRcbiAgICAgICAgJiYgdmFsdWUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudFxuICAgICAgICAmJiB2YWx1ZS5ub2RlVHlwZSA9PT0gMTtcbn07XG5cbi8qKlxuICogQ2hlY2sgaWYgYXJndW1lbnQgaXMgYSBsaXN0IG9mIEhUTUwgZWxlbWVudHMuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbHVlXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG5leHBvcnRzLm5vZGVMaXN0ID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICB2YXIgdHlwZSA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG5cbiAgICByZXR1cm4gdmFsdWUgIT09IHVuZGVmaW5lZFxuICAgICAgICAmJiAodHlwZSA9PT0gJ1tvYmplY3QgTm9kZUxpc3RdJyB8fCB0eXBlID09PSAnW29iamVjdCBIVE1MQ29sbGVjdGlvbl0nKVxuICAgICAgICAmJiAoJ2xlbmd0aCcgaW4gdmFsdWUpXG4gICAgICAgICYmICh2YWx1ZS5sZW5ndGggPT09IDAgfHwgZXhwb3J0cy5ub2RlKHZhbHVlWzBdKSk7XG59O1xuXG4vKipcbiAqIENoZWNrIGlmIGFyZ3VtZW50IGlzIGEgc3RyaW5nLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWx1ZVxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuZXhwb3J0cy5zdHJpbmcgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnXG4gICAgICAgIHx8IHZhbHVlIGluc3RhbmNlb2YgU3RyaW5nO1xufTtcblxuLyoqXG4gKiBDaGVjayBpZiBhcmd1bWVudCBpcyBhIGZ1bmN0aW9uLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWx1ZVxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuZXhwb3J0cy5mbiA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgdmFyIHR5cGUgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpO1xuXG4gICAgcmV0dXJuIHR5cGUgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXSc7XG59O1xuXG5cbi8qKiovIH0pLFxuLyogNyAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5mdW5jdGlvbiBzZWxlY3QoZWxlbWVudCkge1xuICAgIHZhciBzZWxlY3RlZFRleHQ7XG5cbiAgICBpZiAoZWxlbWVudC5ub2RlTmFtZSA9PT0gJ1NFTEVDVCcpIHtcbiAgICAgICAgZWxlbWVudC5mb2N1cygpO1xuXG4gICAgICAgIHNlbGVjdGVkVGV4dCA9IGVsZW1lbnQudmFsdWU7XG4gICAgfVxuICAgIGVsc2UgaWYgKGVsZW1lbnQubm9kZU5hbWUgPT09ICdJTlBVVCcgfHwgZWxlbWVudC5ub2RlTmFtZSA9PT0gJ1RFWFRBUkVBJykge1xuICAgICAgICB2YXIgaXNSZWFkT25seSA9IGVsZW1lbnQuaGFzQXR0cmlidXRlKCdyZWFkb25seScpO1xuXG4gICAgICAgIGlmICghaXNSZWFkT25seSkge1xuICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3JlYWRvbmx5JywgJycpO1xuICAgICAgICB9XG5cbiAgICAgICAgZWxlbWVudC5zZWxlY3QoKTtcbiAgICAgICAgZWxlbWVudC5zZXRTZWxlY3Rpb25SYW5nZSgwLCBlbGVtZW50LnZhbHVlLmxlbmd0aCk7XG5cbiAgICAgICAgaWYgKCFpc1JlYWRPbmx5KSB7XG4gICAgICAgICAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgncmVhZG9ubHknKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNlbGVjdGVkVGV4dCA9IGVsZW1lbnQudmFsdWU7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2NvbnRlbnRlZGl0YWJsZScpKSB7XG4gICAgICAgICAgICBlbGVtZW50LmZvY3VzKCk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgc2VsZWN0aW9uID0gd2luZG93LmdldFNlbGVjdGlvbigpO1xuICAgICAgICB2YXIgcmFuZ2UgPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpO1xuXG4gICAgICAgIHJhbmdlLnNlbGVjdE5vZGVDb250ZW50cyhlbGVtZW50KTtcbiAgICAgICAgc2VsZWN0aW9uLnJlbW92ZUFsbFJhbmdlcygpO1xuICAgICAgICBzZWxlY3Rpb24uYWRkUmFuZ2UocmFuZ2UpO1xuXG4gICAgICAgIHNlbGVjdGVkVGV4dCA9IHNlbGVjdGlvbi50b1N0cmluZygpO1xuICAgIH1cblxuICAgIHJldHVybiBzZWxlY3RlZFRleHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2VsZWN0O1xuXG5cbi8qKiovIH0pXG4vKioqKioqLyBdKTtcbn0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9jbGlwYm9hcmQvZGlzdC9jbGlwYm9hcmQuanMiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSkge1xyXG5cdGlmKCFtb2R1bGUud2VicGFja1BvbHlmaWxsKSB7XHJcblx0XHRtb2R1bGUuZGVwcmVjYXRlID0gZnVuY3Rpb24oKSB7fTtcclxuXHRcdG1vZHVsZS5wYXRocyA9IFtdO1xyXG5cdFx0Ly8gbW9kdWxlLnBhcmVudCA9IHVuZGVmaW5lZCBieSBkZWZhdWx0XHJcblx0XHRpZighbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcclxuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwibG9hZGVkXCIsIHtcclxuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcclxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmw7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJpZFwiLCB7XHJcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXHJcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5pO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdG1vZHVsZS53ZWJwYWNrUG9seWZpbGwgPSAxO1xyXG5cdH1cclxuXHRyZXR1cm4gbW9kdWxlO1xyXG59O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gKHdlYnBhY2spL2J1aWxkaW4vbW9kdWxlLmpzIiwiOyhmdW5jdGlvbiAoKSB7XG5cdCd1c2Ugc3RyaWN0JztcblxuXHQvKipcblx0ICogQHByZXNlcnZlIEZhc3RDbGljazogcG9seWZpbGwgdG8gcmVtb3ZlIGNsaWNrIGRlbGF5cyBvbiBicm93c2VycyB3aXRoIHRvdWNoIFVJcy5cblx0ICpcblx0ICogQGNvZGluZ3N0YW5kYXJkIGZ0bGFicy1qc3YyXG5cdCAqIEBjb3B5cmlnaHQgVGhlIEZpbmFuY2lhbCBUaW1lcyBMaW1pdGVkIFtBbGwgUmlnaHRzIFJlc2VydmVkXVxuXHQgKiBAbGljZW5zZSBNSVQgTGljZW5zZSAoc2VlIExJQ0VOU0UudHh0KVxuXHQgKi9cblxuXHQvKmpzbGludCBicm93c2VyOnRydWUsIG5vZGU6dHJ1ZSovXG5cdC8qZ2xvYmFsIGRlZmluZSwgRXZlbnQsIE5vZGUqL1xuXG5cblx0LyoqXG5cdCAqIEluc3RhbnRpYXRlIGZhc3QtY2xpY2tpbmcgbGlzdGVuZXJzIG9uIHRoZSBzcGVjaWZpZWQgbGF5ZXIuXG5cdCAqXG5cdCAqIEBjb25zdHJ1Y3RvclxuXHQgKiBAcGFyYW0ge0VsZW1lbnR9IGxheWVyIFRoZSBsYXllciB0byBsaXN0ZW4gb25cblx0ICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zPXt9XSBUaGUgb3B0aW9ucyB0byBvdmVycmlkZSB0aGUgZGVmYXVsdHNcblx0ICovXG5cdGZ1bmN0aW9uIEZhc3RDbGljayhsYXllciwgb3B0aW9ucykge1xuXHRcdHZhciBvbGRPbkNsaWNrO1xuXG5cdFx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cblx0XHQvKipcblx0XHQgKiBXaGV0aGVyIGEgY2xpY2sgaXMgY3VycmVudGx5IGJlaW5nIHRyYWNrZWQuXG5cdFx0ICpcblx0XHQgKiBAdHlwZSBib29sZWFuXG5cdFx0ICovXG5cdFx0dGhpcy50cmFja2luZ0NsaWNrID0gZmFsc2U7XG5cblxuXHRcdC8qKlxuXHRcdCAqIFRpbWVzdGFtcCBmb3Igd2hlbiBjbGljayB0cmFja2luZyBzdGFydGVkLlxuXHRcdCAqXG5cdFx0ICogQHR5cGUgbnVtYmVyXG5cdFx0ICovXG5cdFx0dGhpcy50cmFja2luZ0NsaWNrU3RhcnQgPSAwO1xuXG5cblx0XHQvKipcblx0XHQgKiBUaGUgZWxlbWVudCBiZWluZyB0cmFja2VkIGZvciBhIGNsaWNrLlxuXHRcdCAqXG5cdFx0ICogQHR5cGUgRXZlbnRUYXJnZXRcblx0XHQgKi9cblx0XHR0aGlzLnRhcmdldEVsZW1lbnQgPSBudWxsO1xuXG5cblx0XHQvKipcblx0XHQgKiBYLWNvb3JkaW5hdGUgb2YgdG91Y2ggc3RhcnQgZXZlbnQuXG5cdFx0ICpcblx0XHQgKiBAdHlwZSBudW1iZXJcblx0XHQgKi9cblx0XHR0aGlzLnRvdWNoU3RhcnRYID0gMDtcblxuXG5cdFx0LyoqXG5cdFx0ICogWS1jb29yZGluYXRlIG9mIHRvdWNoIHN0YXJ0IGV2ZW50LlxuXHRcdCAqXG5cdFx0ICogQHR5cGUgbnVtYmVyXG5cdFx0ICovXG5cdFx0dGhpcy50b3VjaFN0YXJ0WSA9IDA7XG5cblxuXHRcdC8qKlxuXHRcdCAqIElEIG9mIHRoZSBsYXN0IHRvdWNoLCByZXRyaWV2ZWQgZnJvbSBUb3VjaC5pZGVudGlmaWVyLlxuXHRcdCAqXG5cdFx0ICogQHR5cGUgbnVtYmVyXG5cdFx0ICovXG5cdFx0dGhpcy5sYXN0VG91Y2hJZGVudGlmaWVyID0gMDtcblxuXG5cdFx0LyoqXG5cdFx0ICogVG91Y2htb3ZlIGJvdW5kYXJ5LCBiZXlvbmQgd2hpY2ggYSBjbGljayB3aWxsIGJlIGNhbmNlbGxlZC5cblx0XHQgKlxuXHRcdCAqIEB0eXBlIG51bWJlclxuXHRcdCAqL1xuXHRcdHRoaXMudG91Y2hCb3VuZGFyeSA9IG9wdGlvbnMudG91Y2hCb3VuZGFyeSB8fCAxMDtcblxuXG5cdFx0LyoqXG5cdFx0ICogVGhlIEZhc3RDbGljayBsYXllci5cblx0XHQgKlxuXHRcdCAqIEB0eXBlIEVsZW1lbnRcblx0XHQgKi9cblx0XHR0aGlzLmxheWVyID0gbGF5ZXI7XG5cblx0XHQvKipcblx0XHQgKiBUaGUgbWluaW11bSB0aW1lIGJldHdlZW4gdGFwKHRvdWNoc3RhcnQgYW5kIHRvdWNoZW5kKSBldmVudHNcblx0XHQgKlxuXHRcdCAqIEB0eXBlIG51bWJlclxuXHRcdCAqL1xuXHRcdHRoaXMudGFwRGVsYXkgPSBvcHRpb25zLnRhcERlbGF5IHx8IDIwMDtcblxuXHRcdC8qKlxuXHRcdCAqIFRoZSBtYXhpbXVtIHRpbWUgZm9yIGEgdGFwXG5cdFx0ICpcblx0XHQgKiBAdHlwZSBudW1iZXJcblx0XHQgKi9cblx0XHR0aGlzLnRhcFRpbWVvdXQgPSBvcHRpb25zLnRhcFRpbWVvdXQgfHwgNzAwO1xuXG5cdFx0aWYgKEZhc3RDbGljay5ub3ROZWVkZWQobGF5ZXIpKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Ly8gU29tZSBvbGQgdmVyc2lvbnMgb2YgQW5kcm9pZCBkb24ndCBoYXZlIEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kXG5cdFx0ZnVuY3Rpb24gYmluZChtZXRob2QsIGNvbnRleHQpIHtcblx0XHRcdHJldHVybiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ldGhvZC5hcHBseShjb250ZXh0LCBhcmd1bWVudHMpOyB9O1xuXHRcdH1cblxuXG5cdFx0dmFyIG1ldGhvZHMgPSBbJ29uTW91c2UnLCAnb25DbGljaycsICdvblRvdWNoU3RhcnQnLCAnb25Ub3VjaE1vdmUnLCAnb25Ub3VjaEVuZCcsICdvblRvdWNoQ2FuY2VsJ107XG5cdFx0dmFyIGNvbnRleHQgPSB0aGlzO1xuXHRcdGZvciAodmFyIGkgPSAwLCBsID0gbWV0aG9kcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcblx0XHRcdGNvbnRleHRbbWV0aG9kc1tpXV0gPSBiaW5kKGNvbnRleHRbbWV0aG9kc1tpXV0sIGNvbnRleHQpO1xuXHRcdH1cblxuXHRcdC8vIFNldCB1cCBldmVudCBoYW5kbGVycyBhcyByZXF1aXJlZFxuXHRcdGlmIChkZXZpY2VJc0FuZHJvaWQpIHtcblx0XHRcdGxheWVyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIHRoaXMub25Nb3VzZSwgdHJ1ZSk7XG5cdFx0XHRsYXllci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLm9uTW91c2UsIHRydWUpO1xuXHRcdFx0bGF5ZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMub25Nb3VzZSwgdHJ1ZSk7XG5cdFx0fVxuXG5cdFx0bGF5ZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uQ2xpY2ssIHRydWUpO1xuXHRcdGxheWVyLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCB0aGlzLm9uVG91Y2hTdGFydCwgZmFsc2UpO1xuXHRcdGxheWVyLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRoaXMub25Ub3VjaE1vdmUsIGZhbHNlKTtcblx0XHRsYXllci5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHRoaXMub25Ub3VjaEVuZCwgZmFsc2UpO1xuXHRcdGxheWVyLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoY2FuY2VsJywgdGhpcy5vblRvdWNoQ2FuY2VsLCBmYWxzZSk7XG5cblx0XHQvLyBIYWNrIGlzIHJlcXVpcmVkIGZvciBicm93c2VycyB0aGF0IGRvbid0IHN1cHBvcnQgRXZlbnQjc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uIChlLmcuIEFuZHJvaWQgMilcblx0XHQvLyB3aGljaCBpcyBob3cgRmFzdENsaWNrIG5vcm1hbGx5IHN0b3BzIGNsaWNrIGV2ZW50cyBidWJibGluZyB0byBjYWxsYmFja3MgcmVnaXN0ZXJlZCBvbiB0aGUgRmFzdENsaWNrXG5cdFx0Ly8gbGF5ZXIgd2hlbiB0aGV5IGFyZSBjYW5jZWxsZWQuXG5cdFx0aWYgKCFFdmVudC5wcm90b3R5cGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKSB7XG5cdFx0XHRsYXllci5yZW1vdmVFdmVudExpc3RlbmVyID0gZnVuY3Rpb24odHlwZSwgY2FsbGJhY2ssIGNhcHR1cmUpIHtcblx0XHRcdFx0dmFyIHJtdiA9IE5vZGUucHJvdG90eXBlLnJlbW92ZUV2ZW50TGlzdGVuZXI7XG5cdFx0XHRcdGlmICh0eXBlID09PSAnY2xpY2snKSB7XG5cdFx0XHRcdFx0cm12LmNhbGwobGF5ZXIsIHR5cGUsIGNhbGxiYWNrLmhpamFja2VkIHx8IGNhbGxiYWNrLCBjYXB0dXJlKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRybXYuY2FsbChsYXllciwgdHlwZSwgY2FsbGJhY2ssIGNhcHR1cmUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXG5cdFx0XHRsYXllci5hZGRFdmVudExpc3RlbmVyID0gZnVuY3Rpb24odHlwZSwgY2FsbGJhY2ssIGNhcHR1cmUpIHtcblx0XHRcdFx0dmFyIGFkdiA9IE5vZGUucHJvdG90eXBlLmFkZEV2ZW50TGlzdGVuZXI7XG5cdFx0XHRcdGlmICh0eXBlID09PSAnY2xpY2snKSB7XG5cdFx0XHRcdFx0YWR2LmNhbGwobGF5ZXIsIHR5cGUsIGNhbGxiYWNrLmhpamFja2VkIHx8IChjYWxsYmFjay5oaWphY2tlZCA9IGZ1bmN0aW9uKGV2ZW50KSB7XG5cdFx0XHRcdFx0XHRpZiAoIWV2ZW50LnByb3BhZ2F0aW9uU3RvcHBlZCkge1xuXHRcdFx0XHRcdFx0XHRjYWxsYmFjayhldmVudCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSksIGNhcHR1cmUpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGFkdi5jYWxsKGxheWVyLCB0eXBlLCBjYWxsYmFjaywgY2FwdHVyZSk7XG5cdFx0XHRcdH1cblx0XHRcdH07XG5cdFx0fVxuXG5cdFx0Ly8gSWYgYSBoYW5kbGVyIGlzIGFscmVhZHkgZGVjbGFyZWQgaW4gdGhlIGVsZW1lbnQncyBvbmNsaWNrIGF0dHJpYnV0ZSwgaXQgd2lsbCBiZSBmaXJlZCBiZWZvcmVcblx0XHQvLyBGYXN0Q2xpY2sncyBvbkNsaWNrIGhhbmRsZXIuIEZpeCB0aGlzIGJ5IHB1bGxpbmcgb3V0IHRoZSB1c2VyLWRlZmluZWQgaGFuZGxlciBmdW5jdGlvbiBhbmRcblx0XHQvLyBhZGRpbmcgaXQgYXMgbGlzdGVuZXIuXG5cdFx0aWYgKHR5cGVvZiBsYXllci5vbmNsaWNrID09PSAnZnVuY3Rpb24nKSB7XG5cblx0XHRcdC8vIEFuZHJvaWQgYnJvd3NlciBvbiBhdCBsZWFzdCAzLjIgcmVxdWlyZXMgYSBuZXcgcmVmZXJlbmNlIHRvIHRoZSBmdW5jdGlvbiBpbiBsYXllci5vbmNsaWNrXG5cdFx0XHQvLyAtIHRoZSBvbGQgb25lIHdvbid0IHdvcmsgaWYgcGFzc2VkIHRvIGFkZEV2ZW50TGlzdGVuZXIgZGlyZWN0bHkuXG5cdFx0XHRvbGRPbkNsaWNrID0gbGF5ZXIub25jbGljaztcblx0XHRcdGxheWVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcblx0XHRcdFx0b2xkT25DbGljayhldmVudCk7XG5cdFx0XHR9LCBmYWxzZSk7XG5cdFx0XHRsYXllci5vbmNsaWNrID0gbnVsbDtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0KiBXaW5kb3dzIFBob25lIDguMSBmYWtlcyB1c2VyIGFnZW50IHN0cmluZyB0byBsb29rIGxpa2UgQW5kcm9pZCBhbmQgaVBob25lLlxuXHQqXG5cdCogQHR5cGUgYm9vbGVhblxuXHQqL1xuXHR2YXIgZGV2aWNlSXNXaW5kb3dzUGhvbmUgPSBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoXCJXaW5kb3dzIFBob25lXCIpID49IDA7XG5cblx0LyoqXG5cdCAqIEFuZHJvaWQgcmVxdWlyZXMgZXhjZXB0aW9ucy5cblx0ICpcblx0ICogQHR5cGUgYm9vbGVhblxuXHQgKi9cblx0dmFyIGRldmljZUlzQW5kcm9pZCA9IG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignQW5kcm9pZCcpID4gMCAmJiAhZGV2aWNlSXNXaW5kb3dzUGhvbmU7XG5cblxuXHQvKipcblx0ICogaU9TIHJlcXVpcmVzIGV4Y2VwdGlvbnMuXG5cdCAqXG5cdCAqIEB0eXBlIGJvb2xlYW5cblx0ICovXG5cdHZhciBkZXZpY2VJc0lPUyA9IC9pUChhZHxob25lfG9kKS8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSAmJiAhZGV2aWNlSXNXaW5kb3dzUGhvbmU7XG5cblxuXHQvKipcblx0ICogaU9TIDQgcmVxdWlyZXMgYW4gZXhjZXB0aW9uIGZvciBzZWxlY3QgZWxlbWVudHMuXG5cdCAqXG5cdCAqIEB0eXBlIGJvb2xlYW5cblx0ICovXG5cdHZhciBkZXZpY2VJc0lPUzQgPSBkZXZpY2VJc0lPUyAmJiAoL09TIDRfXFxkKF9cXGQpPy8pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XG5cblxuXHQvKipcblx0ICogaU9TIDYuMC03LiogcmVxdWlyZXMgdGhlIHRhcmdldCBlbGVtZW50IHRvIGJlIG1hbnVhbGx5IGRlcml2ZWRcblx0ICpcblx0ICogQHR5cGUgYm9vbGVhblxuXHQgKi9cblx0dmFyIGRldmljZUlzSU9TV2l0aEJhZFRhcmdldCA9IGRldmljZUlzSU9TICYmICgvT1MgWzYtN11fXFxkLykudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcblxuXHQvKipcblx0ICogQmxhY2tCZXJyeSByZXF1aXJlcyBleGNlcHRpb25zLlxuXHQgKlxuXHQgKiBAdHlwZSBib29sZWFuXG5cdCAqL1xuXHR2YXIgZGV2aWNlSXNCbGFja0JlcnJ5MTAgPSBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoJ0JCMTAnKSA+IDA7XG5cblx0LyoqXG5cdCAqIERldGVybWluZSB3aGV0aGVyIGEgZ2l2ZW4gZWxlbWVudCByZXF1aXJlcyBhIG5hdGl2ZSBjbGljay5cblx0ICpcblx0ICogQHBhcmFtIHtFdmVudFRhcmdldHxFbGVtZW50fSB0YXJnZXQgVGFyZ2V0IERPTSBlbGVtZW50XG5cdCAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIHRydWUgaWYgdGhlIGVsZW1lbnQgbmVlZHMgYSBuYXRpdmUgY2xpY2tcblx0ICovXG5cdEZhc3RDbGljay5wcm90b3R5cGUubmVlZHNDbGljayA9IGZ1bmN0aW9uKHRhcmdldCkge1xuXHRcdHN3aXRjaCAodGFyZ2V0Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkpIHtcblxuXHRcdC8vIERvbid0IHNlbmQgYSBzeW50aGV0aWMgY2xpY2sgdG8gZGlzYWJsZWQgaW5wdXRzIChpc3N1ZSAjNjIpXG5cdFx0Y2FzZSAnYnV0dG9uJzpcblx0XHRjYXNlICdzZWxlY3QnOlxuXHRcdGNhc2UgJ3RleHRhcmVhJzpcblx0XHRcdGlmICh0YXJnZXQuZGlzYWJsZWQpIHtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgJ2lucHV0JzpcblxuXHRcdFx0Ly8gRmlsZSBpbnB1dHMgbmVlZCByZWFsIGNsaWNrcyBvbiBpT1MgNiBkdWUgdG8gYSBicm93c2VyIGJ1ZyAoaXNzdWUgIzY4KVxuXHRcdFx0aWYgKChkZXZpY2VJc0lPUyAmJiB0YXJnZXQudHlwZSA9PT0gJ2ZpbGUnKSB8fCB0YXJnZXQuZGlzYWJsZWQpIHtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgJ2xhYmVsJzpcblx0XHRjYXNlICdpZnJhbWUnOiAvLyBpT1M4IGhvbWVzY3JlZW4gYXBwcyBjYW4gcHJldmVudCBldmVudHMgYnViYmxpbmcgaW50byBmcmFtZXNcblx0XHRjYXNlICd2aWRlbyc6XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gKC9cXGJuZWVkc2NsaWNrXFxiLykudGVzdCh0YXJnZXQuY2xhc3NOYW1lKTtcblx0fTtcblxuXG5cdC8qKlxuXHQgKiBEZXRlcm1pbmUgd2hldGhlciBhIGdpdmVuIGVsZW1lbnQgcmVxdWlyZXMgYSBjYWxsIHRvIGZvY3VzIHRvIHNpbXVsYXRlIGNsaWNrIGludG8gZWxlbWVudC5cblx0ICpcblx0ICogQHBhcmFtIHtFdmVudFRhcmdldHxFbGVtZW50fSB0YXJnZXQgVGFyZ2V0IERPTSBlbGVtZW50XG5cdCAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIHRydWUgaWYgdGhlIGVsZW1lbnQgcmVxdWlyZXMgYSBjYWxsIHRvIGZvY3VzIHRvIHNpbXVsYXRlIG5hdGl2ZSBjbGljay5cblx0ICovXG5cdEZhc3RDbGljay5wcm90b3R5cGUubmVlZHNGb2N1cyA9IGZ1bmN0aW9uKHRhcmdldCkge1xuXHRcdHN3aXRjaCAodGFyZ2V0Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkpIHtcblx0XHRjYXNlICd0ZXh0YXJlYSc6XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRjYXNlICdzZWxlY3QnOlxuXHRcdFx0cmV0dXJuICFkZXZpY2VJc0FuZHJvaWQ7XG5cdFx0Y2FzZSAnaW5wdXQnOlxuXHRcdFx0c3dpdGNoICh0YXJnZXQudHlwZSkge1xuXHRcdFx0Y2FzZSAnYnV0dG9uJzpcblx0XHRcdGNhc2UgJ2NoZWNrYm94Jzpcblx0XHRcdGNhc2UgJ2ZpbGUnOlxuXHRcdFx0Y2FzZSAnaW1hZ2UnOlxuXHRcdFx0Y2FzZSAncmFkaW8nOlxuXHRcdFx0Y2FzZSAnc3VibWl0Jzpcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBObyBwb2ludCBpbiBhdHRlbXB0aW5nIHRvIGZvY3VzIGRpc2FibGVkIGlucHV0c1xuXHRcdFx0cmV0dXJuICF0YXJnZXQuZGlzYWJsZWQgJiYgIXRhcmdldC5yZWFkT25seTtcblx0XHRkZWZhdWx0OlxuXHRcdFx0cmV0dXJuICgvXFxibmVlZHNmb2N1c1xcYi8pLnRlc3QodGFyZ2V0LmNsYXNzTmFtZSk7XG5cdFx0fVxuXHR9O1xuXG5cblx0LyoqXG5cdCAqIFNlbmQgYSBjbGljayBldmVudCB0byB0aGUgc3BlY2lmaWVkIGVsZW1lbnQuXG5cdCAqXG5cdCAqIEBwYXJhbSB7RXZlbnRUYXJnZXR8RWxlbWVudH0gdGFyZ2V0RWxlbWVudFxuXHQgKiBAcGFyYW0ge0V2ZW50fSBldmVudFxuXHQgKi9cblx0RmFzdENsaWNrLnByb3RvdHlwZS5zZW5kQ2xpY2sgPSBmdW5jdGlvbih0YXJnZXRFbGVtZW50LCBldmVudCkge1xuXHRcdHZhciBjbGlja0V2ZW50LCB0b3VjaDtcblxuXHRcdC8vIE9uIHNvbWUgQW5kcm9pZCBkZXZpY2VzIGFjdGl2ZUVsZW1lbnQgbmVlZHMgdG8gYmUgYmx1cnJlZCBvdGhlcndpc2UgdGhlIHN5bnRoZXRpYyBjbGljayB3aWxsIGhhdmUgbm8gZWZmZWN0ICgjMjQpXG5cdFx0aWYgKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgJiYgZG9jdW1lbnQuYWN0aXZlRWxlbWVudCAhPT0gdGFyZ2V0RWxlbWVudCkge1xuXHRcdFx0ZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5ibHVyKCk7XG5cdFx0fVxuXG5cdFx0dG91Y2ggPSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXTtcblxuXHRcdC8vIFN5bnRoZXNpc2UgYSBjbGljayBldmVudCwgd2l0aCBhbiBleHRyYSBhdHRyaWJ1dGUgc28gaXQgY2FuIGJlIHRyYWNrZWRcblx0XHRjbGlja0V2ZW50ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ01vdXNlRXZlbnRzJyk7XG5cdFx0Y2xpY2tFdmVudC5pbml0TW91c2VFdmVudCh0aGlzLmRldGVybWluZUV2ZW50VHlwZSh0YXJnZXRFbGVtZW50KSwgdHJ1ZSwgdHJ1ZSwgd2luZG93LCAxLCB0b3VjaC5zY3JlZW5YLCB0b3VjaC5zY3JlZW5ZLCB0b3VjaC5jbGllbnRYLCB0b3VjaC5jbGllbnRZLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgMCwgbnVsbCk7XG5cdFx0Y2xpY2tFdmVudC5mb3J3YXJkZWRUb3VjaEV2ZW50ID0gdHJ1ZTtcblx0XHR0YXJnZXRFbGVtZW50LmRpc3BhdGNoRXZlbnQoY2xpY2tFdmVudCk7XG5cdH07XG5cblx0RmFzdENsaWNrLnByb3RvdHlwZS5kZXRlcm1pbmVFdmVudFR5cGUgPSBmdW5jdGlvbih0YXJnZXRFbGVtZW50KSB7XG5cblx0XHQvL0lzc3VlICMxNTk6IEFuZHJvaWQgQ2hyb21lIFNlbGVjdCBCb3ggZG9lcyBub3Qgb3BlbiB3aXRoIGEgc3ludGhldGljIGNsaWNrIGV2ZW50XG5cdFx0aWYgKGRldmljZUlzQW5kcm9pZCAmJiB0YXJnZXRFbGVtZW50LnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ3NlbGVjdCcpIHtcblx0XHRcdHJldHVybiAnbW91c2Vkb3duJztcblx0XHR9XG5cblx0XHRyZXR1cm4gJ2NsaWNrJztcblx0fTtcblxuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge0V2ZW50VGFyZ2V0fEVsZW1lbnR9IHRhcmdldEVsZW1lbnRcblx0ICovXG5cdEZhc3RDbGljay5wcm90b3R5cGUuZm9jdXMgPSBmdW5jdGlvbih0YXJnZXRFbGVtZW50KSB7XG5cdFx0dmFyIGxlbmd0aDtcblxuXHRcdC8vIElzc3VlICMxNjA6IG9uIGlPUyA3LCBzb21lIGlucHV0IGVsZW1lbnRzIChlLmcuIGRhdGUgZGF0ZXRpbWUgbW9udGgpIHRocm93IGEgdmFndWUgVHlwZUVycm9yIG9uIHNldFNlbGVjdGlvblJhbmdlLiBUaGVzZSBlbGVtZW50cyBkb24ndCBoYXZlIGFuIGludGVnZXIgdmFsdWUgZm9yIHRoZSBzZWxlY3Rpb25TdGFydCBhbmQgc2VsZWN0aW9uRW5kIHByb3BlcnRpZXMsIGJ1dCB1bmZvcnR1bmF0ZWx5IHRoYXQgY2FuJ3QgYmUgdXNlZCBmb3IgZGV0ZWN0aW9uIGJlY2F1c2UgYWNjZXNzaW5nIHRoZSBwcm9wZXJ0aWVzIGFsc28gdGhyb3dzIGEgVHlwZUVycm9yLiBKdXN0IGNoZWNrIHRoZSB0eXBlIGluc3RlYWQuIEZpbGVkIGFzIEFwcGxlIGJ1ZyAjMTUxMjI3MjQuXG5cdFx0aWYgKGRldmljZUlzSU9TICYmIHRhcmdldEVsZW1lbnQuc2V0U2VsZWN0aW9uUmFuZ2UgJiYgdGFyZ2V0RWxlbWVudC50eXBlLmluZGV4T2YoJ2RhdGUnKSAhPT0gMCAmJiB0YXJnZXRFbGVtZW50LnR5cGUgIT09ICd0aW1lJyAmJiB0YXJnZXRFbGVtZW50LnR5cGUgIT09ICdtb250aCcpIHtcblx0XHRcdGxlbmd0aCA9IHRhcmdldEVsZW1lbnQudmFsdWUubGVuZ3RoO1xuXHRcdFx0dGFyZ2V0RWxlbWVudC5zZXRTZWxlY3Rpb25SYW5nZShsZW5ndGgsIGxlbmd0aCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRhcmdldEVsZW1lbnQuZm9jdXMoKTtcblx0XHR9XG5cdH07XG5cblxuXHQvKipcblx0ICogQ2hlY2sgd2hldGhlciB0aGUgZ2l2ZW4gdGFyZ2V0IGVsZW1lbnQgaXMgYSBjaGlsZCBvZiBhIHNjcm9sbGFibGUgbGF5ZXIgYW5kIGlmIHNvLCBzZXQgYSBmbGFnIG9uIGl0LlxuXHQgKlxuXHQgKiBAcGFyYW0ge0V2ZW50VGFyZ2V0fEVsZW1lbnR9IHRhcmdldEVsZW1lbnRcblx0ICovXG5cdEZhc3RDbGljay5wcm90b3R5cGUudXBkYXRlU2Nyb2xsUGFyZW50ID0gZnVuY3Rpb24odGFyZ2V0RWxlbWVudCkge1xuXHRcdHZhciBzY3JvbGxQYXJlbnQsIHBhcmVudEVsZW1lbnQ7XG5cblx0XHRzY3JvbGxQYXJlbnQgPSB0YXJnZXRFbGVtZW50LmZhc3RDbGlja1Njcm9sbFBhcmVudDtcblxuXHRcdC8vIEF0dGVtcHQgdG8gZGlzY292ZXIgd2hldGhlciB0aGUgdGFyZ2V0IGVsZW1lbnQgaXMgY29udGFpbmVkIHdpdGhpbiBhIHNjcm9sbGFibGUgbGF5ZXIuIFJlLWNoZWNrIGlmIHRoZVxuXHRcdC8vIHRhcmdldCBlbGVtZW50IHdhcyBtb3ZlZCB0byBhbm90aGVyIHBhcmVudC5cblx0XHRpZiAoIXNjcm9sbFBhcmVudCB8fCAhc2Nyb2xsUGFyZW50LmNvbnRhaW5zKHRhcmdldEVsZW1lbnQpKSB7XG5cdFx0XHRwYXJlbnRFbGVtZW50ID0gdGFyZ2V0RWxlbWVudDtcblx0XHRcdGRvIHtcblx0XHRcdFx0aWYgKHBhcmVudEVsZW1lbnQuc2Nyb2xsSGVpZ2h0ID4gcGFyZW50RWxlbWVudC5vZmZzZXRIZWlnaHQpIHtcblx0XHRcdFx0XHRzY3JvbGxQYXJlbnQgPSBwYXJlbnRFbGVtZW50O1xuXHRcdFx0XHRcdHRhcmdldEVsZW1lbnQuZmFzdENsaWNrU2Nyb2xsUGFyZW50ID0gcGFyZW50RWxlbWVudDtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHBhcmVudEVsZW1lbnQgPSBwYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XG5cdFx0XHR9IHdoaWxlIChwYXJlbnRFbGVtZW50KTtcblx0XHR9XG5cblx0XHQvLyBBbHdheXMgdXBkYXRlIHRoZSBzY3JvbGwgdG9wIHRyYWNrZXIgaWYgcG9zc2libGUuXG5cdFx0aWYgKHNjcm9sbFBhcmVudCkge1xuXHRcdFx0c2Nyb2xsUGFyZW50LmZhc3RDbGlja0xhc3RTY3JvbGxUb3AgPSBzY3JvbGxQYXJlbnQuc2Nyb2xsVG9wO1xuXHRcdH1cblx0fTtcblxuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge0V2ZW50VGFyZ2V0fSB0YXJnZXRFbGVtZW50XG5cdCAqIEByZXR1cm5zIHtFbGVtZW50fEV2ZW50VGFyZ2V0fVxuXHQgKi9cblx0RmFzdENsaWNrLnByb3RvdHlwZS5nZXRUYXJnZXRFbGVtZW50RnJvbUV2ZW50VGFyZ2V0ID0gZnVuY3Rpb24oZXZlbnRUYXJnZXQpIHtcblxuXHRcdC8vIE9uIHNvbWUgb2xkZXIgYnJvd3NlcnMgKG5vdGFibHkgU2FmYXJpIG9uIGlPUyA0LjEgLSBzZWUgaXNzdWUgIzU2KSB0aGUgZXZlbnQgdGFyZ2V0IG1heSBiZSBhIHRleHQgbm9kZS5cblx0XHRpZiAoZXZlbnRUYXJnZXQubm9kZVR5cGUgPT09IE5vZGUuVEVYVF9OT0RFKSB7XG5cdFx0XHRyZXR1cm4gZXZlbnRUYXJnZXQucGFyZW50Tm9kZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZXZlbnRUYXJnZXQ7XG5cdH07XG5cblxuXHQvKipcblx0ICogT24gdG91Y2ggc3RhcnQsIHJlY29yZCB0aGUgcG9zaXRpb24gYW5kIHNjcm9sbCBvZmZzZXQuXG5cdCAqXG5cdCAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50XG5cdCAqIEByZXR1cm5zIHtib29sZWFufVxuXHQgKi9cblx0RmFzdENsaWNrLnByb3RvdHlwZS5vblRvdWNoU3RhcnQgPSBmdW5jdGlvbihldmVudCkge1xuXHRcdHZhciB0YXJnZXRFbGVtZW50LCB0b3VjaCwgc2VsZWN0aW9uO1xuXG5cdFx0Ly8gSWdub3JlIG11bHRpcGxlIHRvdWNoZXMsIG90aGVyd2lzZSBwaW5jaC10by16b29tIGlzIHByZXZlbnRlZCBpZiBib3RoIGZpbmdlcnMgYXJlIG9uIHRoZSBGYXN0Q2xpY2sgZWxlbWVudCAoaXNzdWUgIzExMSkuXG5cdFx0aWYgKGV2ZW50LnRhcmdldFRvdWNoZXMubGVuZ3RoID4gMSkge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0dGFyZ2V0RWxlbWVudCA9IHRoaXMuZ2V0VGFyZ2V0RWxlbWVudEZyb21FdmVudFRhcmdldChldmVudC50YXJnZXQpO1xuXHRcdHRvdWNoID0gZXZlbnQudGFyZ2V0VG91Y2hlc1swXTtcblxuXHRcdGlmIChkZXZpY2VJc0lPUykge1xuXG5cdFx0XHQvLyBPbmx5IHRydXN0ZWQgZXZlbnRzIHdpbGwgZGVzZWxlY3QgdGV4dCBvbiBpT1MgKGlzc3VlICM0OSlcblx0XHRcdHNlbGVjdGlvbiA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKTtcblx0XHRcdGlmIChzZWxlY3Rpb24ucmFuZ2VDb3VudCAmJiAhc2VsZWN0aW9uLmlzQ29sbGFwc2VkKSB7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIWRldmljZUlzSU9TNCkge1xuXG5cdFx0XHRcdC8vIFdlaXJkIHRoaW5ncyBoYXBwZW4gb24gaU9TIHdoZW4gYW4gYWxlcnQgb3IgY29uZmlybSBkaWFsb2cgaXMgb3BlbmVkIGZyb20gYSBjbGljayBldmVudCBjYWxsYmFjayAoaXNzdWUgIzIzKTpcblx0XHRcdFx0Ly8gd2hlbiB0aGUgdXNlciBuZXh0IHRhcHMgYW55d2hlcmUgZWxzZSBvbiB0aGUgcGFnZSwgbmV3IHRvdWNoc3RhcnQgYW5kIHRvdWNoZW5kIGV2ZW50cyBhcmUgZGlzcGF0Y2hlZFxuXHRcdFx0XHQvLyB3aXRoIHRoZSBzYW1lIGlkZW50aWZpZXIgYXMgdGhlIHRvdWNoIGV2ZW50IHRoYXQgcHJldmlvdXNseSB0cmlnZ2VyZWQgdGhlIGNsaWNrIHRoYXQgdHJpZ2dlcmVkIHRoZSBhbGVydC5cblx0XHRcdFx0Ly8gU2FkbHksIHRoZXJlIGlzIGFuIGlzc3VlIG9uIGlPUyA0IHRoYXQgY2F1c2VzIHNvbWUgbm9ybWFsIHRvdWNoIGV2ZW50cyB0byBoYXZlIHRoZSBzYW1lIGlkZW50aWZpZXIgYXMgYW5cblx0XHRcdFx0Ly8gaW1tZWRpYXRlbHkgcHJlY2VlZGluZyB0b3VjaCBldmVudCAoaXNzdWUgIzUyKSwgc28gdGhpcyBmaXggaXMgdW5hdmFpbGFibGUgb24gdGhhdCBwbGF0Zm9ybS5cblx0XHRcdFx0Ly8gSXNzdWUgMTIwOiB0b3VjaC5pZGVudGlmaWVyIGlzIDAgd2hlbiBDaHJvbWUgZGV2IHRvb2xzICdFbXVsYXRlIHRvdWNoIGV2ZW50cycgaXMgc2V0IHdpdGggYW4gaU9TIGRldmljZSBVQSBzdHJpbmcsXG5cdFx0XHRcdC8vIHdoaWNoIGNhdXNlcyBhbGwgdG91Y2ggZXZlbnRzIHRvIGJlIGlnbm9yZWQuIEFzIHRoaXMgYmxvY2sgb25seSBhcHBsaWVzIHRvIGlPUywgYW5kIGlPUyBpZGVudGlmaWVycyBhcmUgYWx3YXlzIGxvbmcsXG5cdFx0XHRcdC8vIHJhbmRvbSBpbnRlZ2VycywgaXQncyBzYWZlIHRvIHRvIGNvbnRpbnVlIGlmIHRoZSBpZGVudGlmaWVyIGlzIDAgaGVyZS5cblx0XHRcdFx0aWYgKHRvdWNoLmlkZW50aWZpZXIgJiYgdG91Y2guaWRlbnRpZmllciA9PT0gdGhpcy5sYXN0VG91Y2hJZGVudGlmaWVyKSB7XG5cdFx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzLmxhc3RUb3VjaElkZW50aWZpZXIgPSB0b3VjaC5pZGVudGlmaWVyO1xuXG5cdFx0XHRcdC8vIElmIHRoZSB0YXJnZXQgZWxlbWVudCBpcyBhIGNoaWxkIG9mIGEgc2Nyb2xsYWJsZSBsYXllciAodXNpbmcgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoKSBhbmQ6XG5cdFx0XHRcdC8vIDEpIHRoZSB1c2VyIGRvZXMgYSBmbGluZyBzY3JvbGwgb24gdGhlIHNjcm9sbGFibGUgbGF5ZXJcblx0XHRcdFx0Ly8gMikgdGhlIHVzZXIgc3RvcHMgdGhlIGZsaW5nIHNjcm9sbCB3aXRoIGFub3RoZXIgdGFwXG5cdFx0XHRcdC8vIHRoZW4gdGhlIGV2ZW50LnRhcmdldCBvZiB0aGUgbGFzdCAndG91Y2hlbmQnIGV2ZW50IHdpbGwgYmUgdGhlIGVsZW1lbnQgdGhhdCB3YXMgdW5kZXIgdGhlIHVzZXIncyBmaW5nZXJcblx0XHRcdFx0Ly8gd2hlbiB0aGUgZmxpbmcgc2Nyb2xsIHdhcyBzdGFydGVkLCBjYXVzaW5nIEZhc3RDbGljayB0byBzZW5kIGEgY2xpY2sgZXZlbnQgdG8gdGhhdCBsYXllciAtIHVubGVzcyBhIGNoZWNrXG5cdFx0XHRcdC8vIGlzIG1hZGUgdG8gZW5zdXJlIHRoYXQgYSBwYXJlbnQgbGF5ZXIgd2FzIG5vdCBzY3JvbGxlZCBiZWZvcmUgc2VuZGluZyBhIHN5bnRoZXRpYyBjbGljayAoaXNzdWUgIzQyKS5cblx0XHRcdFx0dGhpcy51cGRhdGVTY3JvbGxQYXJlbnQodGFyZ2V0RWxlbWVudCk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0dGhpcy50cmFja2luZ0NsaWNrID0gdHJ1ZTtcblx0XHR0aGlzLnRyYWNraW5nQ2xpY2tTdGFydCA9IGV2ZW50LnRpbWVTdGFtcDtcblx0XHR0aGlzLnRhcmdldEVsZW1lbnQgPSB0YXJnZXRFbGVtZW50O1xuXG5cdFx0dGhpcy50b3VjaFN0YXJ0WCA9IHRvdWNoLnBhZ2VYO1xuXHRcdHRoaXMudG91Y2hTdGFydFkgPSB0b3VjaC5wYWdlWTtcblxuXHRcdC8vIFByZXZlbnQgcGhhbnRvbSBjbGlja3Mgb24gZmFzdCBkb3VibGUtdGFwIChpc3N1ZSAjMzYpXG5cdFx0aWYgKChldmVudC50aW1lU3RhbXAgLSB0aGlzLmxhc3RDbGlja1RpbWUpIDwgdGhpcy50YXBEZWxheSkge1xuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fTtcblxuXG5cdC8qKlxuXHQgKiBCYXNlZCBvbiBhIHRvdWNobW92ZSBldmVudCBvYmplY3QsIGNoZWNrIHdoZXRoZXIgdGhlIHRvdWNoIGhhcyBtb3ZlZCBwYXN0IGEgYm91bmRhcnkgc2luY2UgaXQgc3RhcnRlZC5cblx0ICpcblx0ICogQHBhcmFtIHtFdmVudH0gZXZlbnRcblx0ICogQHJldHVybnMge2Jvb2xlYW59XG5cdCAqL1xuXHRGYXN0Q2xpY2sucHJvdG90eXBlLnRvdWNoSGFzTW92ZWQgPSBmdW5jdGlvbihldmVudCkge1xuXHRcdHZhciB0b3VjaCA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLCBib3VuZGFyeSA9IHRoaXMudG91Y2hCb3VuZGFyeTtcblxuXHRcdGlmIChNYXRoLmFicyh0b3VjaC5wYWdlWCAtIHRoaXMudG91Y2hTdGFydFgpID4gYm91bmRhcnkgfHwgTWF0aC5hYnModG91Y2gucGFnZVkgLSB0aGlzLnRvdWNoU3RhcnRZKSA+IGJvdW5kYXJ5KSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH07XG5cblxuXHQvKipcblx0ICogVXBkYXRlIHRoZSBsYXN0IHBvc2l0aW9uLlxuXHQgKlxuXHQgKiBAcGFyYW0ge0V2ZW50fSBldmVudFxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn1cblx0ICovXG5cdEZhc3RDbGljay5wcm90b3R5cGUub25Ub3VjaE1vdmUgPSBmdW5jdGlvbihldmVudCkge1xuXHRcdGlmICghdGhpcy50cmFja2luZ0NsaWNrKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHQvLyBJZiB0aGUgdG91Y2ggaGFzIG1vdmVkLCBjYW5jZWwgdGhlIGNsaWNrIHRyYWNraW5nXG5cdFx0aWYgKHRoaXMudGFyZ2V0RWxlbWVudCAhPT0gdGhpcy5nZXRUYXJnZXRFbGVtZW50RnJvbUV2ZW50VGFyZ2V0KGV2ZW50LnRhcmdldCkgfHwgdGhpcy50b3VjaEhhc01vdmVkKGV2ZW50KSkge1xuXHRcdFx0dGhpcy50cmFja2luZ0NsaWNrID0gZmFsc2U7XG5cdFx0XHR0aGlzLnRhcmdldEVsZW1lbnQgPSBudWxsO1xuXHRcdH1cblxuXHRcdHJldHVybiB0cnVlO1xuXHR9O1xuXG5cblx0LyoqXG5cdCAqIEF0dGVtcHQgdG8gZmluZCB0aGUgbGFiZWxsZWQgY29udHJvbCBmb3IgdGhlIGdpdmVuIGxhYmVsIGVsZW1lbnQuXG5cdCAqXG5cdCAqIEBwYXJhbSB7RXZlbnRUYXJnZXR8SFRNTExhYmVsRWxlbWVudH0gbGFiZWxFbGVtZW50XG5cdCAqIEByZXR1cm5zIHtFbGVtZW50fG51bGx9XG5cdCAqL1xuXHRGYXN0Q2xpY2sucHJvdG90eXBlLmZpbmRDb250cm9sID0gZnVuY3Rpb24obGFiZWxFbGVtZW50KSB7XG5cblx0XHQvLyBGYXN0IHBhdGggZm9yIG5ld2VyIGJyb3dzZXJzIHN1cHBvcnRpbmcgdGhlIEhUTUw1IGNvbnRyb2wgYXR0cmlidXRlXG5cdFx0aWYgKGxhYmVsRWxlbWVudC5jb250cm9sICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiBsYWJlbEVsZW1lbnQuY29udHJvbDtcblx0XHR9XG5cblx0XHQvLyBBbGwgYnJvd3NlcnMgdW5kZXIgdGVzdCB0aGF0IHN1cHBvcnQgdG91Y2ggZXZlbnRzIGFsc28gc3VwcG9ydCB0aGUgSFRNTDUgaHRtbEZvciBhdHRyaWJ1dGVcblx0XHRpZiAobGFiZWxFbGVtZW50Lmh0bWxGb3IpIHtcblx0XHRcdHJldHVybiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChsYWJlbEVsZW1lbnQuaHRtbEZvcik7XG5cdFx0fVxuXG5cdFx0Ly8gSWYgbm8gZm9yIGF0dHJpYnV0ZSBleGlzdHMsIGF0dGVtcHQgdG8gcmV0cmlldmUgdGhlIGZpcnN0IGxhYmVsbGFibGUgZGVzY2VuZGFudCBlbGVtZW50XG5cdFx0Ly8gdGhlIGxpc3Qgb2Ygd2hpY2ggaXMgZGVmaW5lZCBoZXJlOiBodHRwOi8vd3d3LnczLm9yZy9UUi9odG1sNS9mb3Jtcy5odG1sI2NhdGVnb3J5LWxhYmVsXG5cdFx0cmV0dXJuIGxhYmVsRWxlbWVudC5xdWVyeVNlbGVjdG9yKCdidXR0b24sIGlucHV0Om5vdChbdHlwZT1oaWRkZW5dKSwga2V5Z2VuLCBtZXRlciwgb3V0cHV0LCBwcm9ncmVzcywgc2VsZWN0LCB0ZXh0YXJlYScpO1xuXHR9O1xuXG5cblx0LyoqXG5cdCAqIE9uIHRvdWNoIGVuZCwgZGV0ZXJtaW5lIHdoZXRoZXIgdG8gc2VuZCBhIGNsaWNrIGV2ZW50IGF0IG9uY2UuXG5cdCAqXG5cdCAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50XG5cdCAqIEByZXR1cm5zIHtib29sZWFufVxuXHQgKi9cblx0RmFzdENsaWNrLnByb3RvdHlwZS5vblRvdWNoRW5kID0gZnVuY3Rpb24oZXZlbnQpIHtcblx0XHR2YXIgZm9yRWxlbWVudCwgdHJhY2tpbmdDbGlja1N0YXJ0LCB0YXJnZXRUYWdOYW1lLCBzY3JvbGxQYXJlbnQsIHRvdWNoLCB0YXJnZXRFbGVtZW50ID0gdGhpcy50YXJnZXRFbGVtZW50O1xuXG5cdFx0aWYgKCF0aGlzLnRyYWNraW5nQ2xpY2spIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdC8vIFByZXZlbnQgcGhhbnRvbSBjbGlja3Mgb24gZmFzdCBkb3VibGUtdGFwIChpc3N1ZSAjMzYpXG5cdFx0aWYgKChldmVudC50aW1lU3RhbXAgLSB0aGlzLmxhc3RDbGlja1RpbWUpIDwgdGhpcy50YXBEZWxheSkge1xuXHRcdFx0dGhpcy5jYW5jZWxOZXh0Q2xpY2sgPSB0cnVlO1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0aWYgKChldmVudC50aW1lU3RhbXAgLSB0aGlzLnRyYWNraW5nQ2xpY2tTdGFydCkgPiB0aGlzLnRhcFRpbWVvdXQpIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdC8vIFJlc2V0IHRvIHByZXZlbnQgd3JvbmcgY2xpY2sgY2FuY2VsIG9uIGlucHV0IChpc3N1ZSAjMTU2KS5cblx0XHR0aGlzLmNhbmNlbE5leHRDbGljayA9IGZhbHNlO1xuXG5cdFx0dGhpcy5sYXN0Q2xpY2tUaW1lID0gZXZlbnQudGltZVN0YW1wO1xuXG5cdFx0dHJhY2tpbmdDbGlja1N0YXJ0ID0gdGhpcy50cmFja2luZ0NsaWNrU3RhcnQ7XG5cdFx0dGhpcy50cmFja2luZ0NsaWNrID0gZmFsc2U7XG5cdFx0dGhpcy50cmFja2luZ0NsaWNrU3RhcnQgPSAwO1xuXG5cdFx0Ly8gT24gc29tZSBpT1MgZGV2aWNlcywgdGhlIHRhcmdldEVsZW1lbnQgc3VwcGxpZWQgd2l0aCB0aGUgZXZlbnQgaXMgaW52YWxpZCBpZiB0aGUgbGF5ZXJcblx0XHQvLyBpcyBwZXJmb3JtaW5nIGEgdHJhbnNpdGlvbiBvciBzY3JvbGwsIGFuZCBoYXMgdG8gYmUgcmUtZGV0ZWN0ZWQgbWFudWFsbHkuIE5vdGUgdGhhdFxuXHRcdC8vIGZvciB0aGlzIHRvIGZ1bmN0aW9uIGNvcnJlY3RseSwgaXQgbXVzdCBiZSBjYWxsZWQgKmFmdGVyKiB0aGUgZXZlbnQgdGFyZ2V0IGlzIGNoZWNrZWQhXG5cdFx0Ly8gU2VlIGlzc3VlICM1NzsgYWxzbyBmaWxlZCBhcyByZGFyOi8vMTMwNDg1ODkgLlxuXHRcdGlmIChkZXZpY2VJc0lPU1dpdGhCYWRUYXJnZXQpIHtcblx0XHRcdHRvdWNoID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF07XG5cblx0XHRcdC8vIEluIGNlcnRhaW4gY2FzZXMgYXJndW1lbnRzIG9mIGVsZW1lbnRGcm9tUG9pbnQgY2FuIGJlIG5lZ2F0aXZlLCBzbyBwcmV2ZW50IHNldHRpbmcgdGFyZ2V0RWxlbWVudCB0byBudWxsXG5cdFx0XHR0YXJnZXRFbGVtZW50ID0gZG9jdW1lbnQuZWxlbWVudEZyb21Qb2ludCh0b3VjaC5wYWdlWCAtIHdpbmRvdy5wYWdlWE9mZnNldCwgdG91Y2gucGFnZVkgLSB3aW5kb3cucGFnZVlPZmZzZXQpIHx8IHRhcmdldEVsZW1lbnQ7XG5cdFx0XHR0YXJnZXRFbGVtZW50LmZhc3RDbGlja1Njcm9sbFBhcmVudCA9IHRoaXMudGFyZ2V0RWxlbWVudC5mYXN0Q2xpY2tTY3JvbGxQYXJlbnQ7XG5cdFx0fVxuXG5cdFx0dGFyZ2V0VGFnTmFtZSA9IHRhcmdldEVsZW1lbnQudGFnTmFtZS50b0xvd2VyQ2FzZSgpO1xuXHRcdGlmICh0YXJnZXRUYWdOYW1lID09PSAnbGFiZWwnKSB7XG5cdFx0XHRmb3JFbGVtZW50ID0gdGhpcy5maW5kQ29udHJvbCh0YXJnZXRFbGVtZW50KTtcblx0XHRcdGlmIChmb3JFbGVtZW50KSB7XG5cdFx0XHRcdHRoaXMuZm9jdXModGFyZ2V0RWxlbWVudCk7XG5cdFx0XHRcdGlmIChkZXZpY2VJc0FuZHJvaWQpIHtcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0YXJnZXRFbGVtZW50ID0gZm9yRWxlbWVudDtcblx0XHRcdH1cblx0XHR9IGVsc2UgaWYgKHRoaXMubmVlZHNGb2N1cyh0YXJnZXRFbGVtZW50KSkge1xuXG5cdFx0XHQvLyBDYXNlIDE6IElmIHRoZSB0b3VjaCBzdGFydGVkIGEgd2hpbGUgYWdvIChiZXN0IGd1ZXNzIGlzIDEwMG1zIGJhc2VkIG9uIHRlc3RzIGZvciBpc3N1ZSAjMzYpIHRoZW4gZm9jdXMgd2lsbCBiZSB0cmlnZ2VyZWQgYW55d2F5LiBSZXR1cm4gZWFybHkgYW5kIHVuc2V0IHRoZSB0YXJnZXQgZWxlbWVudCByZWZlcmVuY2Ugc28gdGhhdCB0aGUgc3Vic2VxdWVudCBjbGljayB3aWxsIGJlIGFsbG93ZWQgdGhyb3VnaC5cblx0XHRcdC8vIENhc2UgMjogV2l0aG91dCB0aGlzIGV4Y2VwdGlvbiBmb3IgaW5wdXQgZWxlbWVudHMgdGFwcGVkIHdoZW4gdGhlIGRvY3VtZW50IGlzIGNvbnRhaW5lZCBpbiBhbiBpZnJhbWUsIHRoZW4gYW55IGlucHV0dGVkIHRleHQgd29uJ3QgYmUgdmlzaWJsZSBldmVuIHRob3VnaCB0aGUgdmFsdWUgYXR0cmlidXRlIGlzIHVwZGF0ZWQgYXMgdGhlIHVzZXIgdHlwZXMgKGlzc3VlICMzNykuXG5cdFx0XHRpZiAoKGV2ZW50LnRpbWVTdGFtcCAtIHRyYWNraW5nQ2xpY2tTdGFydCkgPiAxMDAgfHwgKGRldmljZUlzSU9TICYmIHdpbmRvdy50b3AgIT09IHdpbmRvdyAmJiB0YXJnZXRUYWdOYW1lID09PSAnaW5wdXQnKSkge1xuXHRcdFx0XHR0aGlzLnRhcmdldEVsZW1lbnQgPSBudWxsO1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuZm9jdXModGFyZ2V0RWxlbWVudCk7XG5cdFx0XHR0aGlzLnNlbmRDbGljayh0YXJnZXRFbGVtZW50LCBldmVudCk7XG5cblx0XHRcdC8vIFNlbGVjdCBlbGVtZW50cyBuZWVkIHRoZSBldmVudCB0byBnbyB0aHJvdWdoIG9uIGlPUyA0LCBvdGhlcndpc2UgdGhlIHNlbGVjdG9yIG1lbnUgd29uJ3Qgb3Blbi5cblx0XHRcdC8vIEFsc28gdGhpcyBicmVha3Mgb3BlbmluZyBzZWxlY3RzIHdoZW4gVm9pY2VPdmVyIGlzIGFjdGl2ZSBvbiBpT1M2LCBpT1M3IChhbmQgcG9zc2libHkgb3RoZXJzKVxuXHRcdFx0aWYgKCFkZXZpY2VJc0lPUyB8fCB0YXJnZXRUYWdOYW1lICE9PSAnc2VsZWN0Jykge1xuXHRcdFx0XHR0aGlzLnRhcmdldEVsZW1lbnQgPSBudWxsO1xuXHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0aWYgKGRldmljZUlzSU9TICYmICFkZXZpY2VJc0lPUzQpIHtcblxuXHRcdFx0Ly8gRG9uJ3Qgc2VuZCBhIHN5bnRoZXRpYyBjbGljayBldmVudCBpZiB0aGUgdGFyZ2V0IGVsZW1lbnQgaXMgY29udGFpbmVkIHdpdGhpbiBhIHBhcmVudCBsYXllciB0aGF0IHdhcyBzY3JvbGxlZFxuXHRcdFx0Ly8gYW5kIHRoaXMgdGFwIGlzIGJlaW5nIHVzZWQgdG8gc3RvcCB0aGUgc2Nyb2xsaW5nICh1c3VhbGx5IGluaXRpYXRlZCBieSBhIGZsaW5nIC0gaXNzdWUgIzQyKS5cblx0XHRcdHNjcm9sbFBhcmVudCA9IHRhcmdldEVsZW1lbnQuZmFzdENsaWNrU2Nyb2xsUGFyZW50O1xuXHRcdFx0aWYgKHNjcm9sbFBhcmVudCAmJiBzY3JvbGxQYXJlbnQuZmFzdENsaWNrTGFzdFNjcm9sbFRvcCAhPT0gc2Nyb2xsUGFyZW50LnNjcm9sbFRvcCkge1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBQcmV2ZW50IHRoZSBhY3R1YWwgY2xpY2sgZnJvbSBnb2luZyB0aG91Z2ggLSB1bmxlc3MgdGhlIHRhcmdldCBub2RlIGlzIG1hcmtlZCBhcyByZXF1aXJpbmdcblx0XHQvLyByZWFsIGNsaWNrcyBvciBpZiBpdCBpcyBpbiB0aGUgd2hpdGVsaXN0IGluIHdoaWNoIGNhc2Ugb25seSBub24tcHJvZ3JhbW1hdGljIGNsaWNrcyBhcmUgcGVybWl0dGVkLlxuXHRcdGlmICghdGhpcy5uZWVkc0NsaWNrKHRhcmdldEVsZW1lbnQpKSB7XG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0dGhpcy5zZW5kQ2xpY2sodGFyZ2V0RWxlbWVudCwgZXZlbnQpO1xuXHRcdH1cblxuXHRcdHJldHVybiBmYWxzZTtcblx0fTtcblxuXG5cdC8qKlxuXHQgKiBPbiB0b3VjaCBjYW5jZWwsIHN0b3AgdHJhY2tpbmcgdGhlIGNsaWNrLlxuXHQgKlxuXHQgKiBAcmV0dXJucyB7dm9pZH1cblx0ICovXG5cdEZhc3RDbGljay5wcm90b3R5cGUub25Ub3VjaENhbmNlbCA9IGZ1bmN0aW9uKCkge1xuXHRcdHRoaXMudHJhY2tpbmdDbGljayA9IGZhbHNlO1xuXHRcdHRoaXMudGFyZ2V0RWxlbWVudCA9IG51bGw7XG5cdH07XG5cblxuXHQvKipcblx0ICogRGV0ZXJtaW5lIG1vdXNlIGV2ZW50cyB3aGljaCBzaG91bGQgYmUgcGVybWl0dGVkLlxuXHQgKlxuXHQgKiBAcGFyYW0ge0V2ZW50fSBldmVudFxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn1cblx0ICovXG5cdEZhc3RDbGljay5wcm90b3R5cGUub25Nb3VzZSA9IGZ1bmN0aW9uKGV2ZW50KSB7XG5cblx0XHQvLyBJZiBhIHRhcmdldCBlbGVtZW50IHdhcyBuZXZlciBzZXQgKGJlY2F1c2UgYSB0b3VjaCBldmVudCB3YXMgbmV2ZXIgZmlyZWQpIGFsbG93IHRoZSBldmVudFxuXHRcdGlmICghdGhpcy50YXJnZXRFbGVtZW50KSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHRpZiAoZXZlbnQuZm9yd2FyZGVkVG91Y2hFdmVudCkge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0Ly8gUHJvZ3JhbW1hdGljYWxseSBnZW5lcmF0ZWQgZXZlbnRzIHRhcmdldGluZyBhIHNwZWNpZmljIGVsZW1lbnQgc2hvdWxkIGJlIHBlcm1pdHRlZFxuXHRcdGlmICghZXZlbnQuY2FuY2VsYWJsZSkge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0Ly8gRGVyaXZlIGFuZCBjaGVjayB0aGUgdGFyZ2V0IGVsZW1lbnQgdG8gc2VlIHdoZXRoZXIgdGhlIG1vdXNlIGV2ZW50IG5lZWRzIHRvIGJlIHBlcm1pdHRlZDtcblx0XHQvLyB1bmxlc3MgZXhwbGljaXRseSBlbmFibGVkLCBwcmV2ZW50IG5vbi10b3VjaCBjbGljayBldmVudHMgZnJvbSB0cmlnZ2VyaW5nIGFjdGlvbnMsXG5cdFx0Ly8gdG8gcHJldmVudCBnaG9zdC9kb3VibGVjbGlja3MuXG5cdFx0aWYgKCF0aGlzLm5lZWRzQ2xpY2sodGhpcy50YXJnZXRFbGVtZW50KSB8fCB0aGlzLmNhbmNlbE5leHRDbGljaykge1xuXG5cdFx0XHQvLyBQcmV2ZW50IGFueSB1c2VyLWFkZGVkIGxpc3RlbmVycyBkZWNsYXJlZCBvbiBGYXN0Q2xpY2sgZWxlbWVudCBmcm9tIGJlaW5nIGZpcmVkLlxuXHRcdFx0aWYgKGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbikge1xuXHRcdFx0XHRldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcblx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0Ly8gUGFydCBvZiB0aGUgaGFjayBmb3IgYnJvd3NlcnMgdGhhdCBkb24ndCBzdXBwb3J0IEV2ZW50I3N0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbiAoZS5nLiBBbmRyb2lkIDIpXG5cdFx0XHRcdGV2ZW50LnByb3BhZ2F0aW9uU3RvcHBlZCA9IHRydWU7XG5cdFx0XHR9XG5cblx0XHRcdC8vIENhbmNlbCB0aGUgZXZlbnRcblx0XHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIElmIHRoZSBtb3VzZSBldmVudCBpcyBwZXJtaXR0ZWQsIHJldHVybiB0cnVlIGZvciB0aGUgYWN0aW9uIHRvIGdvIHRocm91Z2guXG5cdFx0cmV0dXJuIHRydWU7XG5cdH07XG5cblxuXHQvKipcblx0ICogT24gYWN0dWFsIGNsaWNrcywgZGV0ZXJtaW5lIHdoZXRoZXIgdGhpcyBpcyBhIHRvdWNoLWdlbmVyYXRlZCBjbGljaywgYSBjbGljayBhY3Rpb24gb2NjdXJyaW5nXG5cdCAqIG5hdHVyYWxseSBhZnRlciBhIGRlbGF5IGFmdGVyIGEgdG91Y2ggKHdoaWNoIG5lZWRzIHRvIGJlIGNhbmNlbGxlZCB0byBhdm9pZCBkdXBsaWNhdGlvbiksIG9yXG5cdCAqIGFuIGFjdHVhbCBjbGljayB3aGljaCBzaG91bGQgYmUgcGVybWl0dGVkLlxuXHQgKlxuXHQgKiBAcGFyYW0ge0V2ZW50fSBldmVudFxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn1cblx0ICovXG5cdEZhc3RDbGljay5wcm90b3R5cGUub25DbGljayA9IGZ1bmN0aW9uKGV2ZW50KSB7XG5cdFx0dmFyIHBlcm1pdHRlZDtcblxuXHRcdC8vIEl0J3MgcG9zc2libGUgZm9yIGFub3RoZXIgRmFzdENsaWNrLWxpa2UgbGlicmFyeSBkZWxpdmVyZWQgd2l0aCB0aGlyZC1wYXJ0eSBjb2RlIHRvIGZpcmUgYSBjbGljayBldmVudCBiZWZvcmUgRmFzdENsaWNrIGRvZXMgKGlzc3VlICM0NCkuIEluIHRoYXQgY2FzZSwgc2V0IHRoZSBjbGljay10cmFja2luZyBmbGFnIGJhY2sgdG8gZmFsc2UgYW5kIHJldHVybiBlYXJseS4gVGhpcyB3aWxsIGNhdXNlIG9uVG91Y2hFbmQgdG8gcmV0dXJuIGVhcmx5LlxuXHRcdGlmICh0aGlzLnRyYWNraW5nQ2xpY2spIHtcblx0XHRcdHRoaXMudGFyZ2V0RWxlbWVudCA9IG51bGw7XG5cdFx0XHR0aGlzLnRyYWNraW5nQ2xpY2sgPSBmYWxzZTtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdC8vIFZlcnkgb2RkIGJlaGF2aW91ciBvbiBpT1MgKGlzc3VlICMxOCk6IGlmIGEgc3VibWl0IGVsZW1lbnQgaXMgcHJlc2VudCBpbnNpZGUgYSBmb3JtIGFuZCB0aGUgdXNlciBoaXRzIGVudGVyIGluIHRoZSBpT1Mgc2ltdWxhdG9yIG9yIGNsaWNrcyB0aGUgR28gYnV0dG9uIG9uIHRoZSBwb3AtdXAgT1Mga2V5Ym9hcmQgdGhlIGEga2luZCBvZiAnZmFrZScgY2xpY2sgZXZlbnQgd2lsbCBiZSB0cmlnZ2VyZWQgd2l0aCB0aGUgc3VibWl0LXR5cGUgaW5wdXQgZWxlbWVudCBhcyB0aGUgdGFyZ2V0LlxuXHRcdGlmIChldmVudC50YXJnZXQudHlwZSA9PT0gJ3N1Ym1pdCcgJiYgZXZlbnQuZGV0YWlsID09PSAwKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHRwZXJtaXR0ZWQgPSB0aGlzLm9uTW91c2UoZXZlbnQpO1xuXG5cdFx0Ly8gT25seSB1bnNldCB0YXJnZXRFbGVtZW50IGlmIHRoZSBjbGljayBpcyBub3QgcGVybWl0dGVkLiBUaGlzIHdpbGwgZW5zdXJlIHRoYXQgdGhlIGNoZWNrIGZvciAhdGFyZ2V0RWxlbWVudCBpbiBvbk1vdXNlIGZhaWxzIGFuZCB0aGUgYnJvd3NlcidzIGNsaWNrIGRvZXNuJ3QgZ28gdGhyb3VnaC5cblx0XHRpZiAoIXBlcm1pdHRlZCkge1xuXHRcdFx0dGhpcy50YXJnZXRFbGVtZW50ID0gbnVsbDtcblx0XHR9XG5cblx0XHQvLyBJZiBjbGlja3MgYXJlIHBlcm1pdHRlZCwgcmV0dXJuIHRydWUgZm9yIHRoZSBhY3Rpb24gdG8gZ28gdGhyb3VnaC5cblx0XHRyZXR1cm4gcGVybWl0dGVkO1xuXHR9O1xuXG5cblx0LyoqXG5cdCAqIFJlbW92ZSBhbGwgRmFzdENsaWNrJ3MgZXZlbnQgbGlzdGVuZXJzLlxuXHQgKlxuXHQgKiBAcmV0dXJucyB7dm9pZH1cblx0ICovXG5cdEZhc3RDbGljay5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuXHRcdHZhciBsYXllciA9IHRoaXMubGF5ZXI7XG5cblx0XHRpZiAoZGV2aWNlSXNBbmRyb2lkKSB7XG5cdFx0XHRsYXllci5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCB0aGlzLm9uTW91c2UsIHRydWUpO1xuXHRcdFx0bGF5ZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5vbk1vdXNlLCB0cnVlKTtcblx0XHRcdGxheWVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLm9uTW91c2UsIHRydWUpO1xuXHRcdH1cblxuXHRcdGxheWVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbkNsaWNrLCB0cnVlKTtcblx0XHRsYXllci5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgdGhpcy5vblRvdWNoU3RhcnQsIGZhbHNlKTtcblx0XHRsYXllci5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCB0aGlzLm9uVG91Y2hNb3ZlLCBmYWxzZSk7XG5cdFx0bGF5ZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB0aGlzLm9uVG91Y2hFbmQsIGZhbHNlKTtcblx0XHRsYXllci5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaGNhbmNlbCcsIHRoaXMub25Ub3VjaENhbmNlbCwgZmFsc2UpO1xuXHR9O1xuXG5cblx0LyoqXG5cdCAqIENoZWNrIHdoZXRoZXIgRmFzdENsaWNrIGlzIG5lZWRlZC5cblx0ICpcblx0ICogQHBhcmFtIHtFbGVtZW50fSBsYXllciBUaGUgbGF5ZXIgdG8gbGlzdGVuIG9uXG5cdCAqL1xuXHRGYXN0Q2xpY2subm90TmVlZGVkID0gZnVuY3Rpb24obGF5ZXIpIHtcblx0XHR2YXIgbWV0YVZpZXdwb3J0O1xuXHRcdHZhciBjaHJvbWVWZXJzaW9uO1xuXHRcdHZhciBibGFja2JlcnJ5VmVyc2lvbjtcblx0XHR2YXIgZmlyZWZveFZlcnNpb247XG5cblx0XHQvLyBEZXZpY2VzIHRoYXQgZG9uJ3Qgc3VwcG9ydCB0b3VjaCBkb24ndCBuZWVkIEZhc3RDbGlja1xuXHRcdGlmICh0eXBlb2Ygd2luZG93Lm9udG91Y2hzdGFydCA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdC8vIENocm9tZSB2ZXJzaW9uIC0gemVybyBmb3Igb3RoZXIgYnJvd3NlcnNcblx0XHRjaHJvbWVWZXJzaW9uID0gKygvQ2hyb21lXFwvKFswLTldKykvLmV4ZWMobmF2aWdhdG9yLnVzZXJBZ2VudCkgfHwgWywwXSlbMV07XG5cblx0XHRpZiAoY2hyb21lVmVyc2lvbikge1xuXG5cdFx0XHRpZiAoZGV2aWNlSXNBbmRyb2lkKSB7XG5cdFx0XHRcdG1ldGFWaWV3cG9ydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21ldGFbbmFtZT12aWV3cG9ydF0nKTtcblxuXHRcdFx0XHRpZiAobWV0YVZpZXdwb3J0KSB7XG5cdFx0XHRcdFx0Ly8gQ2hyb21lIG9uIEFuZHJvaWQgd2l0aCB1c2VyLXNjYWxhYmxlPVwibm9cIiBkb2Vzbid0IG5lZWQgRmFzdENsaWNrIChpc3N1ZSAjODkpXG5cdFx0XHRcdFx0aWYgKG1ldGFWaWV3cG9ydC5jb250ZW50LmluZGV4T2YoJ3VzZXItc2NhbGFibGU9bm8nKSAhPT0gLTEpIHtcblx0XHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQvLyBDaHJvbWUgMzIgYW5kIGFib3ZlIHdpdGggd2lkdGg9ZGV2aWNlLXdpZHRoIG9yIGxlc3MgZG9uJ3QgbmVlZCBGYXN0Q2xpY2tcblx0XHRcdFx0XHRpZiAoY2hyb21lVmVyc2lvbiA+IDMxICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxXaWR0aCA8PSB3aW5kb3cub3V0ZXJXaWR0aCkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdC8vIENocm9tZSBkZXNrdG9wIGRvZXNuJ3QgbmVlZCBGYXN0Q2xpY2sgKGlzc3VlICMxNSlcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChkZXZpY2VJc0JsYWNrQmVycnkxMCkge1xuXHRcdFx0YmxhY2tiZXJyeVZlcnNpb24gPSBuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9WZXJzaW9uXFwvKFswLTldKilcXC4oWzAtOV0qKS8pO1xuXG5cdFx0XHQvLyBCbGFja0JlcnJ5IDEwLjMrIGRvZXMgbm90IHJlcXVpcmUgRmFzdGNsaWNrIGxpYnJhcnkuXG5cdFx0XHQvLyBodHRwczovL2dpdGh1Yi5jb20vZnRsYWJzL2Zhc3RjbGljay9pc3N1ZXMvMjUxXG5cdFx0XHRpZiAoYmxhY2tiZXJyeVZlcnNpb25bMV0gPj0gMTAgJiYgYmxhY2tiZXJyeVZlcnNpb25bMl0gPj0gMykge1xuXHRcdFx0XHRtZXRhVmlld3BvcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtZXRhW25hbWU9dmlld3BvcnRdJyk7XG5cblx0XHRcdFx0aWYgKG1ldGFWaWV3cG9ydCkge1xuXHRcdFx0XHRcdC8vIHVzZXItc2NhbGFibGU9bm8gZWxpbWluYXRlcyBjbGljayBkZWxheS5cblx0XHRcdFx0XHRpZiAobWV0YVZpZXdwb3J0LmNvbnRlbnQuaW5kZXhPZigndXNlci1zY2FsYWJsZT1ubycpICE9PSAtMSkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC8vIHdpZHRoPWRldmljZS13aWR0aCAob3IgbGVzcyB0aGFuIGRldmljZS13aWR0aCkgZWxpbWluYXRlcyBjbGljayBkZWxheS5cblx0XHRcdFx0XHRpZiAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFdpZHRoIDw9IHdpbmRvdy5vdXRlcldpZHRoKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBJRTEwIHdpdGggLW1zLXRvdWNoLWFjdGlvbjogbm9uZSBvciBtYW5pcHVsYXRpb24sIHdoaWNoIGRpc2FibGVzIGRvdWJsZS10YXAtdG8tem9vbSAoaXNzdWUgIzk3KVxuXHRcdGlmIChsYXllci5zdHlsZS5tc1RvdWNoQWN0aW9uID09PSAnbm9uZScgfHwgbGF5ZXIuc3R5bGUudG91Y2hBY3Rpb24gPT09ICdtYW5pcHVsYXRpb24nKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHQvLyBGaXJlZm94IHZlcnNpb24gLSB6ZXJvIGZvciBvdGhlciBicm93c2Vyc1xuXHRcdGZpcmVmb3hWZXJzaW9uID0gKygvRmlyZWZveFxcLyhbMC05XSspLy5leGVjKG5hdmlnYXRvci51c2VyQWdlbnQpIHx8IFssMF0pWzFdO1xuXG5cdFx0aWYgKGZpcmVmb3hWZXJzaW9uID49IDI3KSB7XG5cdFx0XHQvLyBGaXJlZm94IDI3KyBkb2VzIG5vdCBoYXZlIHRhcCBkZWxheSBpZiB0aGUgY29udGVudCBpcyBub3Qgem9vbWFibGUgLSBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD05MjI4OTZcblxuXHRcdFx0bWV0YVZpZXdwb3J0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWV0YVtuYW1lPXZpZXdwb3J0XScpO1xuXHRcdFx0aWYgKG1ldGFWaWV3cG9ydCAmJiAobWV0YVZpZXdwb3J0LmNvbnRlbnQuaW5kZXhPZigndXNlci1zY2FsYWJsZT1ubycpICE9PSAtMSB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsV2lkdGggPD0gd2luZG93Lm91dGVyV2lkdGgpKSB7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIElFMTE6IHByZWZpeGVkIC1tcy10b3VjaC1hY3Rpb24gaXMgbm8gbG9uZ2VyIHN1cHBvcnRlZCBhbmQgaXQncyByZWNvbWVuZGVkIHRvIHVzZSBub24tcHJlZml4ZWQgdmVyc2lvblxuXHRcdC8vIGh0dHA6Ly9tc2RuLm1pY3Jvc29mdC5jb20vZW4tdXMvbGlicmFyeS93aW5kb3dzL2FwcHMvSGg3NjczMTMuYXNweFxuXHRcdGlmIChsYXllci5zdHlsZS50b3VjaEFjdGlvbiA9PT0gJ25vbmUnIHx8IGxheWVyLnN0eWxlLnRvdWNoQWN0aW9uID09PSAnbWFuaXB1bGF0aW9uJykge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9O1xuXG5cblx0LyoqXG5cdCAqIEZhY3RvcnkgbWV0aG9kIGZvciBjcmVhdGluZyBhIEZhc3RDbGljayBvYmplY3Rcblx0ICpcblx0ICogQHBhcmFtIHtFbGVtZW50fSBsYXllciBUaGUgbGF5ZXIgdG8gbGlzdGVuIG9uXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucz17fV0gVGhlIG9wdGlvbnMgdG8gb3ZlcnJpZGUgdGhlIGRlZmF1bHRzXG5cdCAqL1xuXHRGYXN0Q2xpY2suYXR0YWNoID0gZnVuY3Rpb24obGF5ZXIsIG9wdGlvbnMpIHtcblx0XHRyZXR1cm4gbmV3IEZhc3RDbGljayhsYXllciwgb3B0aW9ucyk7XG5cdH07XG5cblxuXHRpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgZGVmaW5lLmFtZCA9PT0gJ29iamVjdCcgJiYgZGVmaW5lLmFtZCkge1xuXG5cdFx0Ly8gQU1ELiBSZWdpc3RlciBhcyBhbiBhbm9ueW1vdXMgbW9kdWxlLlxuXHRcdGRlZmluZShmdW5jdGlvbigpIHtcblx0XHRcdHJldHVybiBGYXN0Q2xpY2s7XG5cdFx0fSk7XG5cdH0gZWxzZSBpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcblx0XHRtb2R1bGUuZXhwb3J0cyA9IEZhc3RDbGljay5hdHRhY2g7XG5cdFx0bW9kdWxlLmV4cG9ydHMuRmFzdENsaWNrID0gRmFzdENsaWNrO1xuXHR9IGVsc2Uge1xuXHRcdHdpbmRvdy5GYXN0Q2xpY2sgPSBGYXN0Q2xpY2s7XG5cdH1cbn0oKSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvZmFzdGNsaWNrL2xpYi9mYXN0Y2xpY2suanMiLCIvKlxyXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYtMjAxOCBNYXJ0aW4gRG9uYXRoIDxtYXJ0aW4uZG9uYXRoQHNxdWlkZnVuay5jb20+XHJcbiAqXHJcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcclxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG9cclxuICogZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGVcclxuICogcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yXHJcbiAqIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXHJcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XHJcbiAqXHJcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXHJcbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxyXG4gKlxyXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXHJcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxyXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OLUlORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXHJcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcclxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkdcclxuICogRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HU1xyXG4gKiBJTiBUSEUgU09GVFdBUkUuXHJcbiAqL1xyXG5cclxuaW1wb3J0IEV2ZW50IGZyb20gXCIuL01hdGVyaWFsL0V2ZW50XCJcclxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi9NYXRlcmlhbC9IZWFkZXJcIlxyXG5pbXBvcnQgTmF2IGZyb20gXCIuL01hdGVyaWFsL05hdlwiXHJcbmltcG9ydCBTZWFyY2ggZnJvbSBcIi4vTWF0ZXJpYWwvU2VhcmNoXCJcclxuaW1wb3J0IFNpZGViYXIgZnJvbSBcIi4vTWF0ZXJpYWwvU2lkZWJhclwiXHJcbmltcG9ydCBTb3VyY2UgZnJvbSBcIi4vTWF0ZXJpYWwvU291cmNlXCJcclxuaW1wb3J0IFRhYnMgZnJvbSBcIi4vTWF0ZXJpYWwvVGFic1wiXHJcbmltcG9ydCBUYWJsZU9mQ29udGVudHMgZnJvbSBcIi4vTWF0ZXJpYWwvVGFibGVPZkNvbnRlbnRzXCJcclxuXHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogTW9kdWxlXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBFdmVudCxcclxuICBIZWFkZXIsXHJcbiAgTmF2LFxyXG4gIFNlYXJjaCxcclxuICBTaWRlYmFyLFxyXG4gIFNvdXJjZSxcclxuICBUYWJzLFxyXG4gIFRhYmxlT2ZDb250ZW50c1xyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hc3NldHMvamF2YXNjcmlwdHMvY29tcG9uZW50cy9NYXRlcmlhbC5qcyIsIi8qXHJcbiAqIENvcHlyaWdodCAoYykgMjAxNi0yMDE4IE1hcnRpbiBEb25hdGggPG1hcnRpbi5kb25hdGhAc3F1aWRmdW5rLmNvbT5cclxuICpcclxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxyXG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0b1xyXG4gKiBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZVxyXG4gKiByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3JcclxuICogc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcclxuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcclxuICpcclxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cclxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcbiAqXHJcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcclxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXHJcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT04tSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcclxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxyXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lOR1xyXG4gKiBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTXHJcbiAqIElOIFRIRSBTT0ZUV0FSRS5cclxuICovXHJcblxyXG5pbXBvcnQgTGlzdGVuZXIgZnJvbSBcIi4vRXZlbnQvTGlzdGVuZXJcIlxyXG5pbXBvcnQgTWF0Y2hNZWRpYSBmcm9tIFwiLi9FdmVudC9NYXRjaE1lZGlhXCJcclxuXHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogTW9kdWxlXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBMaXN0ZW5lcixcclxuICBNYXRjaE1lZGlhXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Fzc2V0cy9qYXZhc2NyaXB0cy9jb21wb25lbnRzL01hdGVyaWFsL0V2ZW50LmpzIiwiLypcclxuICogQ29weXJpZ2h0IChjKSAyMDE2LTIwMTggTWFydGluIERvbmF0aCA8bWFydGluLmRvbmF0aEBzcXVpZGZ1bmsuY29tPlxyXG4gKlxyXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XHJcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvXHJcbiAqIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlXHJcbiAqIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vclxyXG4gKiBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xyXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxyXG4gKlxyXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxyXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cclxuICpcclxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxyXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcclxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTi1JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxyXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXHJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HXHJcbiAqIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1NcclxuICogSU4gVEhFIFNPRlRXQVJFLlxyXG4gKi9cclxuXHJcbmltcG9ydCBMaXN0ZW5lciBmcm9tIFwiLi9MaXN0ZW5lclwiIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcclxuXHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogQ2xhc3NcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWF0Y2hNZWRpYSB7XHJcblxyXG4gIC8qKlxyXG4gICAqIE1lZGlhIHF1ZXJ5IGxpc3RlbmVyXHJcbiAgICpcclxuICAgKiBUaGlzIGNsYXNzIGxpc3RlbnMgZm9yIHN0YXRlIGNoYW5nZXMgb2YgbWVkaWEgcXVlcmllcyBhbmQgYXV0b21hdGljYWxseVxyXG4gICAqIHN3aXRjaGVzIHRoZSBnaXZlbiBsaXN0ZW5lcnMgb24gb3Igb2ZmLlxyXG4gICAqXHJcbiAgICogQGNvbnN0cnVjdG9yXHJcbiAgICpcclxuICAgKiBAcHJvcGVydHkge0Z1bmN0aW9ufSBoYW5kbGVyXyAtIE1lZGlhIHF1ZXJ5IGV2ZW50IGhhbmRsZXJcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBxdWVyeSAtIE1lZGlhIHF1ZXJ5IHRvIHRlc3QgZm9yXHJcbiAgICogQHBhcmFtIHtMaXN0ZW5lcn0gbGlzdGVuZXIgLSBFdmVudCBsaXN0ZW5lclxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKHF1ZXJ5LCBsaXN0ZW5lcikge1xyXG4gICAgdGhpcy5oYW5kbGVyXyA9IG1xID0+IHtcclxuICAgICAgaWYgKG1xLm1hdGNoZXMpXHJcbiAgICAgICAgbGlzdGVuZXIubGlzdGVuKClcclxuICAgICAgZWxzZVxyXG4gICAgICAgIGxpc3RlbmVyLnVubGlzdGVuKClcclxuICAgIH1cclxuXHJcbiAgICAvKiBJbml0aWFsaXplIG1lZGlhIHF1ZXJ5IGxpc3RlbmVyICovXHJcbiAgICBjb25zdCBtZWRpYSA9IHdpbmRvdy5tYXRjaE1lZGlhKHF1ZXJ5KVxyXG4gICAgbWVkaWEuYWRkTGlzdGVuZXIodGhpcy5oYW5kbGVyXylcclxuXHJcbiAgICAvKiBBbHdheXMgY2hlY2sgYXQgaW5pdGlhbGl6YXRpb24gKi9cclxuICAgIHRoaXMuaGFuZGxlcl8obWVkaWEpXHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hc3NldHMvamF2YXNjcmlwdHMvY29tcG9uZW50cy9NYXRlcmlhbC9FdmVudC9NYXRjaE1lZGlhLmpzIiwiLypcclxuICogQ29weXJpZ2h0IChjKSAyMDE2LTIwMTggTWFydGluIERvbmF0aCA8bWFydGluLmRvbmF0aEBzcXVpZGZ1bmsuY29tPlxyXG4gKlxyXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XHJcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvXHJcbiAqIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlXHJcbiAqIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vclxyXG4gKiBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xyXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxyXG4gKlxyXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxyXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cclxuICpcclxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxyXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcclxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTi1JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxyXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXHJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HXHJcbiAqIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1NcclxuICogSU4gVEhFIFNPRlRXQVJFLlxyXG4gKi9cclxuXHJcbmltcG9ydCBTaGFkb3cgZnJvbSBcIi4vSGVhZGVyL1NoYWRvd1wiXHJcbmltcG9ydCBUaXRsZSBmcm9tIFwiLi9IZWFkZXIvVGl0bGVcIlxyXG5cclxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiBNb2R1bGVcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIFNoYWRvdyxcclxuICBUaXRsZVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hc3NldHMvamF2YXNjcmlwdHMvY29tcG9uZW50cy9NYXRlcmlhbC9IZWFkZXIuanMiLCIvKlxyXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYtMjAxOCBNYXJ0aW4gRG9uYXRoIDxtYXJ0aW4uZG9uYXRoQHNxdWlkZnVuay5jb20+XHJcbiAqXHJcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcclxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG9cclxuICogZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGVcclxuICogcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yXHJcbiAqIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXHJcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XHJcbiAqXHJcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXHJcbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxyXG4gKlxyXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXHJcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxyXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OLUlORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXHJcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcclxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkdcclxuICogRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HU1xyXG4gKiBJTiBUSEUgU09GVFdBUkUuXHJcbiAqL1xyXG5cclxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiBDbGFzc1xyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaGFkb3cge1xyXG5cclxuICAvKipcclxuICAgKiBTaG93IG9yIGhpZGUgaGVhZGVyIHNoYWRvdyBkZXBlbmRpbmcgb24gcGFnZSB5LW9mZnNldFxyXG4gICAqXHJcbiAgICogQGNvbnN0cnVjdG9yXHJcbiAgICpcclxuICAgKiBAcHJvcGVydHkge0hUTUxFbGVtZW50fSBlbF8gLSBDb250ZW50IGNvbnRhaW5lclxyXG4gICAqIEBwcm9wZXJ0eSB7SFRNTEVsZW1lbnR9IGhlYWRlcl8gLSBIZWFkZXJcclxuICAgKiBAcHJvcGVydHkge251bWJlcn0gaGVpZ2h0XyAtIE9mZnNldCBoZWlnaHQgb2YgcHJldmlvdXMgbm9kZXNcclxuICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IGFjdGl2ZV8gLSBIZWFkZXIgc2hhZG93IHN0YXRlXHJcbiAgICpcclxuICAgKiBAcGFyYW0geyhzdHJpbmd8SFRNTEVsZW1lbnQpfSBlbCAtIFNlbGVjdG9yIG9yIEhUTUwgZWxlbWVudFxyXG4gICAqIEBwYXJhbSB7KHN0cmluZ3xIVE1MRWxlbWVudCl9IGhlYWRlciAtIFNlbGVjdG9yIG9yIEhUTUwgZWxlbWVudFxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKGVsLCBoZWFkZXIpIHtcclxuICAgIGxldCByZWYgPSAodHlwZW9mIGVsID09PSBcInN0cmluZ1wiKVxyXG4gICAgICA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZWwpXHJcbiAgICAgIDogZWxcclxuICAgIGlmICghKHJlZiBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB8fFxyXG4gICAgICAgICEocmVmLnBhcmVudE5vZGUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpXHJcbiAgICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvclxyXG4gICAgdGhpcy5lbF8gPSByZWYucGFyZW50Tm9kZVxyXG5cclxuICAgIC8qIFJldHJpZXZlIGhlYWRlciAqL1xyXG4gICAgcmVmID0gKHR5cGVvZiBoZWFkZXIgPT09IFwic3RyaW5nXCIpXHJcbiAgICAgID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihoZWFkZXIpXHJcbiAgICAgIDogaGVhZGVyXHJcbiAgICBpZiAoIShyZWYgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpXHJcbiAgICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvclxyXG4gICAgdGhpcy5oZWFkZXJfID0gcmVmXHJcblxyXG4gICAgLyogSW5pdGlhbGl6ZSBoZWlnaHQgYW5kIHN0YXRlICovXHJcbiAgICB0aGlzLmhlaWdodF8gPSAwXHJcbiAgICB0aGlzLmFjdGl2ZV8gPSBmYWxzZVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2FsY3VsYXRlIHRvdGFsIGhlaWdodCBvZiBwcmV2aW91cyBub2Rlc1xyXG4gICAqL1xyXG4gIHNldHVwKCkge1xyXG4gICAgbGV0IGN1cnJlbnQgPSB0aGlzLmVsX1xyXG4gICAgd2hpbGUgKChjdXJyZW50ID0gY3VycmVudC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nKSkge1xyXG4gICAgICBpZiAoIShjdXJyZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKVxyXG4gICAgICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvclxyXG4gICAgICB0aGlzLmhlaWdodF8gKz0gY3VycmVudC5vZmZzZXRIZWlnaHRcclxuICAgIH1cclxuICAgIHRoaXMudXBkYXRlKClcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFVwZGF0ZSBzaGFkb3cgc3RhdGVcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7RXZlbnR9IGV2IC0gRXZlbnRcclxuICAgKi9cclxuICB1cGRhdGUoZXYpIHtcclxuICAgIGlmIChldiAmJiAoZXYudHlwZSA9PT0gXCJyZXNpemVcIiB8fCBldi50eXBlID09PSBcIm9yaWVudGF0aW9uY2hhbmdlXCIpKSB7XHJcbiAgICAgIHRoaXMuaGVpZ2h0XyA9IDBcclxuICAgICAgdGhpcy5zZXR1cCgpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBhY3RpdmUgPSB3aW5kb3cucGFnZVlPZmZzZXQgPj0gdGhpcy5oZWlnaHRfXHJcbiAgICAgIGlmIChhY3RpdmUgIT09IHRoaXMuYWN0aXZlXylcclxuICAgICAgICB0aGlzLmhlYWRlcl8uZGF0YXNldC5tZFN0YXRlID0gKHRoaXMuYWN0aXZlXyA9IGFjdGl2ZSkgPyBcInNoYWRvd1wiIDogXCJcIlxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmVzZXQgc2hhZG93IHN0YXRlXHJcbiAgICovXHJcbiAgcmVzZXQoKSB7XHJcbiAgICB0aGlzLmhlYWRlcl8uZGF0YXNldC5tZFN0YXRlID0gXCJcIlxyXG4gICAgdGhpcy5oZWlnaHRfID0gMFxyXG4gICAgdGhpcy5hY3RpdmVfID0gZmFsc2VcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Fzc2V0cy9qYXZhc2NyaXB0cy9jb21wb25lbnRzL01hdGVyaWFsL0hlYWRlci9TaGFkb3cuanMiLCIvKlxyXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYtMjAxOCBNYXJ0aW4gRG9uYXRoIDxtYXJ0aW4uZG9uYXRoQHNxdWlkZnVuay5jb20+XHJcbiAqXHJcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcclxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG9cclxuICogZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGVcclxuICogcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yXHJcbiAqIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXHJcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XHJcbiAqXHJcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXHJcbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxyXG4gKlxyXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXHJcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxyXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OLUlORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXHJcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcclxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkdcclxuICogRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HU1xyXG4gKiBJTiBUSEUgU09GVFdBUkUuXHJcbiAqL1xyXG5cclxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiBDbGFzc1xyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaXRsZSB7XHJcblxyXG4gIC8qKlxyXG4gICAqIFN3YXAgaGVhZGVyIHRpdGxlIHRvcGljcyB3aGVuIGhlYWRlciBpcyBzY3JvbGxlZCBwYXN0XHJcbiAgICpcclxuICAgKiBAY29uc3RydWN0b3JcclxuICAgKlxyXG4gICAqIEBwcm9wZXJ0eSB7SFRNTEVsZW1lbnR9IGVsXyAtIEVsZW1lbnRcclxuICAgKiBAcHJvcGVydHkge0hUTUxFbGVtZW50fSBoZWFkZXJfIC0gSGVhZGVyXHJcbiAgICogQHByb3BlcnR5IHtib29sZWFufSBhY3RpdmVfIC0gVGl0bGUgc3RhdGVcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7KHN0cmluZ3xIVE1MRWxlbWVudCl9IGVsIC0gU2VsZWN0b3Igb3IgSFRNTCBlbGVtZW50XHJcbiAgICogQHBhcmFtIHsoc3RyaW5nfEhUTUxIZWFkaW5nRWxlbWVudCl9IGhlYWRlciAtIFNlbGVjdG9yIG9yIEhUTUwgZWxlbWVudFxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKGVsLCBoZWFkZXIpIHtcclxuICAgIGxldCByZWYgPSAodHlwZW9mIGVsID09PSBcInN0cmluZ1wiKVxyXG4gICAgICA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZWwpXHJcbiAgICAgIDogZWxcclxuICAgIGlmICghKHJlZiBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSlcclxuICAgICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yXHJcbiAgICB0aGlzLmVsXyA9IHJlZlxyXG5cclxuICAgIC8qIFJldHJpZXZlIGhlYWRlciAqL1xyXG4gICAgcmVmID0gKHR5cGVvZiBoZWFkZXIgPT09IFwic3RyaW5nXCIpXHJcbiAgICAgID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihoZWFkZXIpXHJcbiAgICAgIDogaGVhZGVyXHJcbiAgICBpZiAoIShyZWYgaW5zdGFuY2VvZiBIVE1MSGVhZGluZ0VsZW1lbnQpKVxyXG4gICAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3JcclxuICAgIHRoaXMuaGVhZGVyXyA9IHJlZlxyXG5cclxuICAgIC8qIEluaXRpYWxpemUgc3RhdGUgKi9cclxuICAgIHRoaXMuYWN0aXZlXyA9IGZhbHNlXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTZXR1cCB0aXRsZSBzdGF0ZVxyXG4gICAqL1xyXG4gIHNldHVwKCkge1xyXG4gICAgQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbCh0aGlzLmVsXy5jaGlsZHJlbiwgbm9kZSA9PiB7ICAgICAgICAgICAgICAgICAgIC8vIFRPRE86IHVzZSBjaGlsZE5vZGVzIGhlcmUgZm9yIElFP1xyXG4gICAgICBub2RlLnN0eWxlLndpZHRoID0gYCR7dGhpcy5lbF8ub2Zmc2V0V2lkdGggLSAyMH1weGBcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBVcGRhdGUgdGl0bGUgc3RhdGVcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7RXZlbnR9IGV2IC0gRXZlbnRcclxuICAgKi9cclxuICB1cGRhdGUoZXYpIHtcclxuICAgIGNvbnN0IGFjdGl2ZSA9IHdpbmRvdy5wYWdlWU9mZnNldCA+PSB0aGlzLmhlYWRlcl8ub2Zmc2V0VG9wXHJcbiAgICBpZiAoYWN0aXZlICE9PSB0aGlzLmFjdGl2ZV8pXHJcbiAgICAgIHRoaXMuZWxfLmRhdGFzZXQubWRTdGF0ZSA9ICh0aGlzLmFjdGl2ZV8gPSBhY3RpdmUpID8gXCJhY3RpdmVcIiA6IFwiXCJcclxuXHJcbiAgICAvKiBIYWNrOiBpbmR1Y2UgZWxsaXBzaXMgb24gdG9waWNzICovXHJcbiAgICBpZiAoZXYudHlwZSA9PT0gXCJyZXNpemVcIiB8fCBldi50eXBlID09PSBcIm9yaWVudGF0aW9uY2hhbmdlXCIpIHtcclxuICAgICAgQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbCh0aGlzLmVsXy5jaGlsZHJlbiwgbm9kZSA9PiB7XHJcbiAgICAgICAgbm9kZS5zdHlsZS53aWR0aCA9IGAke3RoaXMuZWxfLm9mZnNldFdpZHRoIC0gMjB9cHhgXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmVzZXQgdGl0bGUgc3RhdGVcclxuICAgKi9cclxuICByZXNldCgpIHtcclxuICAgIHRoaXMuZWxfLmRhdGFzZXQubWRTdGF0ZSA9IFwiXCJcclxuICAgIHRoaXMuZWxfLnN0eWxlLndpZHRoID0gXCJcIlxyXG4gICAgdGhpcy5hY3RpdmVfID0gZmFsc2VcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Fzc2V0cy9qYXZhc2NyaXB0cy9jb21wb25lbnRzL01hdGVyaWFsL0hlYWRlci9UaXRsZS5qcyIsIi8qXHJcbiAqIENvcHlyaWdodCAoYykgMjAxNi0yMDE4IE1hcnRpbiBEb25hdGggPG1hcnRpbi5kb25hdGhAc3F1aWRmdW5rLmNvbT5cclxuICpcclxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxyXG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0b1xyXG4gKiBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZVxyXG4gKiByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3JcclxuICogc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcclxuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcclxuICpcclxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cclxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcbiAqXHJcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcclxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXHJcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT04tSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcclxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxyXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lOR1xyXG4gKiBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTXHJcbiAqIElOIFRIRSBTT0ZUV0FSRS5cclxuICovXHJcblxyXG5pbXBvcnQgQmx1ciBmcm9tIFwiLi9OYXYvQmx1clwiXHJcbmltcG9ydCBDb2xsYXBzZSBmcm9tIFwiLi9OYXYvQ29sbGFwc2VcIlxyXG5pbXBvcnQgU2Nyb2xsaW5nIGZyb20gXCIuL05hdi9TY3JvbGxpbmdcIlxyXG5cclxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiBNb2R1bGVcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIEJsdXIsXHJcbiAgQ29sbGFwc2UsXHJcbiAgU2Nyb2xsaW5nXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Fzc2V0cy9qYXZhc2NyaXB0cy9jb21wb25lbnRzL01hdGVyaWFsL05hdi5qcyIsIi8qXHJcbiAqIENvcHlyaWdodCAoYykgMjAxNi0yMDE4IE1hcnRpbiBEb25hdGggPG1hcnRpbi5kb25hdGhAc3F1aWRmdW5rLmNvbT5cclxuICpcclxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxyXG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0b1xyXG4gKiBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZVxyXG4gKiByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3JcclxuICogc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcclxuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcclxuICpcclxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cclxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcbiAqXHJcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcclxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXHJcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT04tSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcclxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxyXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lOR1xyXG4gKiBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTXHJcbiAqIElOIFRIRSBTT0ZUV0FSRS5cclxuICovXHJcblxyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqIENsYXNzXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJsdXIge1xyXG5cclxuICAvKipcclxuICAgKiBCbHVyIGxpbmtzIHdpdGhpbiB0aGUgdGFibGUgb2YgY29udGVudHMgYWJvdmUgY3VycmVudCBwYWdlIHktb2Zmc2V0XHJcbiAgICpcclxuICAgKiBAY29uc3RydWN0b3JcclxuICAgKlxyXG4gICAqIEBwcm9wZXJ0eSB7Tm9kZUxpc3Q8SFRNTEVsZW1lbnQ+fSBlbHNfIC0gVGFibGUgb2YgY29udGVudHMgbGlua3NcclxuICAgKiBAcHJvcGVydHkge0FycmF5PEhUTUxFbGVtZW50Pn0gYW5jaG9yc18gLSBSZWZlcmVuY2VkIGFuY2hvciBub2Rlc1xyXG4gICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBpbmRleF8gLSBDdXJyZW50IGxpbmsgaW5kZXhcclxuICAgKiBAcHJvcGVydHkge251bWJlcn0gb2Zmc2V0XyAtIEN1cnJlbnQgcGFnZSB5LW9mZnNldFxyXG4gICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gZGlyXyAtIFNjcm9sbCBkaXJlY3Rpb24gY2hhbmdlXHJcbiAgICpcclxuICAgKiBAcGFyYW0geyhzdHJpbmd8Tm9kZUxpc3Q8SFRNTEVsZW1lbnQ+KX0gZWxzIC0gU2VsZWN0b3Igb3IgSFRNTCBlbGVtZW50c1xyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKGVscykge1xyXG4gICAgdGhpcy5pbml0KGVscylcclxuICB9XHJcblxyXG4gIGluaXQoZWxzKSB7XHJcbiAgICB0aGlzLmVsc18gPSAodHlwZW9mIGVscyA9PT0gXCJzdHJpbmdcIilcclxuICAgICAgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGVscylcclxuICAgICAgOiBlbHNcclxuXHJcbiAgICAvKiBJbml0aWFsaXplIGluZGV4IGFuZCBwYWdlIHktb2Zmc2V0ICovXHJcbiAgICB0aGlzLmluZGV4XyA9IDBcclxuICAgIHRoaXMub2Zmc2V0XyA9IHdpbmRvdy5wYWdlWU9mZnNldFxyXG5cclxuICAgIC8qIE5lY2Vzc2FyeSBzdGF0ZSB0byBjb3JyZWN0bHkgcmVzZXQgdGhlIGluZGV4ICovXHJcbiAgICB0aGlzLmRpcl8gPSBmYWxzZVxyXG5cclxuICAgIC8qIEluZGV4IGFuY2hvciBub2RlIG9mZnNldHMgZm9yIGZhc3QgbG9va3VwICovXHJcbiAgICB0aGlzLmFuY2hvcnNfID0gW10ucmVkdWNlLmNhbGwodGhpcy5lbHNfLCAoYW5jaG9ycywgZWwpID0+IHtcclxuICAgICAgcmV0dXJuIGFuY2hvcnMuY29uY2F0KFxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVsLmhhc2guc3Vic3RyaW5nKDEpKSB8fCBbXSlcclxuICAgIH0sIFtdKVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogSW5pdGlhbGl6ZSBibHVyIHN0YXRlc1xyXG4gICAqL1xyXG4gIHNldHVwKCkge1xyXG4gICAgdGhpcy51cGRhdGUoKVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVXBkYXRlIGJsdXIgc3RhdGVzXHJcbiAgICpcclxuICAgKiBEZWR1Y3QgdGhlIHN0YXRpYyBvZmZzZXQgb2YgdGhlIGhlYWRlciAoNTZweCkgYW5kIHNpZGViYXIgb2Zmc2V0ICgyNHB4KSxcclxuICAgKiBzZWUgX3Blcm1hbGlua3Muc2NzcyBmb3IgbW9yZSBpbmZvcm1hdGlvbi5cclxuICAgKi9cclxuICB1cGRhdGUoKSB7XHJcbiAgICBjb25zdCBvZmZzZXQgPSB3aW5kb3cucGFnZVlPZmZzZXRcclxuICAgIGNvbnN0IGRpciA9IHRoaXMub2Zmc2V0XyAtIG9mZnNldCA8IDBcclxuXHJcbiAgICAvKiBIYWNrOiByZXNldCBpbmRleCBpZiBkaXJlY3Rpb24gY2hhbmdlZCB0byBjYXRjaCB2ZXJ5IGZhc3Qgc2Nyb2xsaW5nLFxyXG4gICAgICAgYmVjYXVzZSBvdGhlcndpc2Ugd2Ugd291bGQgaGF2ZSB0byByZWdpc3RlciBhIHRpbWVyIGFuZCB0aGF0IHN1Y2tzICovXHJcbiAgICBpZiAodGhpcy5kaXJfICE9PSBkaXIpXHJcbiAgICAgIHRoaXMuaW5kZXhfID0gZGlyXHJcbiAgICAgICAgPyB0aGlzLmluZGV4XyA9IDBcclxuICAgICAgICA6IHRoaXMuaW5kZXhfID0gdGhpcy5lbHNfLmxlbmd0aCAtIDFcclxuXHJcbiAgICAvKiBFeGl0IHdoZW4gdGhlcmUgYXJlIG5vIGFuY2hvcnMgKi9cclxuICAgIGlmICh0aGlzLmFuY2hvcnNfLmxlbmd0aCA9PT0gMClcclxuICAgICAgcmV0dXJuXHJcblxyXG4gICAgLyogU2Nyb2xsIGRpcmVjdGlvbiBpcyBkb3duICovXHJcbiAgICBpZiAodGhpcy5vZmZzZXRfIDw9IG9mZnNldCkge1xyXG4gICAgICBmb3IgKGxldCBpID0gdGhpcy5pbmRleF8gKyAxOyBpIDwgdGhpcy5lbHNfLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYW5jaG9yc19baV0ub2Zmc2V0VG9wIC0gKDU2ICsgMjQpIDw9IG9mZnNldCkge1xyXG4gICAgICAgICAgaWYgKGkgPiAwKVxyXG4gICAgICAgICAgICB0aGlzLmVsc19baSAtIDFdLmRhdGFzZXQubWRTdGF0ZSA9IFwiYmx1clwiXHJcbiAgICAgICAgICB0aGlzLmluZGV4XyA9IGlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgYnJlYWtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAvKiBTY3JvbGwgZGlyZWN0aW9uIGlzIHVwICovXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBmb3IgKGxldCBpID0gdGhpcy5pbmRleF87IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYW5jaG9yc19baV0ub2Zmc2V0VG9wIC0gKDU2ICsgMjQpID4gb2Zmc2V0KSB7XHJcbiAgICAgICAgICBpZiAoaSA+IDApXHJcbiAgICAgICAgICAgIHRoaXMuZWxzX1tpIC0gMV0uZGF0YXNldC5tZFN0YXRlID0gXCJcIlxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLmluZGV4XyA9IGlcclxuICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyogUmVtZW1iZXIgY3VycmVudCBvZmZzZXQgYW5kIGRpcmVjdGlvbiBmb3IgbmV4dCBpdGVyYXRpb24gKi9cclxuICAgIHRoaXMub2Zmc2V0XyA9IG9mZnNldFxyXG4gICAgdGhpcy5kaXJfID0gZGlyXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXNldCBibHVyIHN0YXRlc1xyXG4gICAqL1xyXG4gIHJlc2V0KCkge1xyXG4gICAgQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbCh0aGlzLmVsc18sIGVsID0+IHtcclxuICAgICAgZWwuZGF0YXNldC5tZFN0YXRlID0gXCJcIlxyXG4gICAgfSlcclxuXHJcbiAgICAvKiBSZXNldCBpbmRleCBhbmQgcGFnZSB5LW9mZnNldCAqL1xyXG4gICAgdGhpcy5pbmRleF8gID0gMFxyXG4gICAgdGhpcy5vZmZzZXRfID0gd2luZG93LnBhZ2VZT2Zmc2V0XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hc3NldHMvamF2YXNjcmlwdHMvY29tcG9uZW50cy9NYXRlcmlhbC9OYXYvQmx1ci5qcyIsIi8qXHJcbiAqIENvcHlyaWdodCAoYykgMjAxNi0yMDE4IE1hcnRpbiBEb25hdGggPG1hcnRpbi5kb25hdGhAc3F1aWRmdW5rLmNvbT5cclxuICpcclxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxyXG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0b1xyXG4gKiBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZVxyXG4gKiByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3JcclxuICogc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcclxuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcclxuICpcclxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cclxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcbiAqXHJcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcclxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXHJcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT04tSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcclxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxyXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lOR1xyXG4gKiBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTXHJcbiAqIElOIFRIRSBTT0ZUV0FSRS5cclxuICovXHJcblxyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqIENsYXNzXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbGxhcHNlIHtcclxuXHJcbiAgLyoqXHJcbiAgICogRXhwYW5kIG9yIGNvbGxhcHNlIG5hdmlnYXRpb24gb24gdG9nZ2xlXHJcbiAgICpcclxuICAgKiBAY29uc3RydWN0b3JcclxuICAgKlxyXG4gICAqIEBwcm9wZXJ0eSB7SFRNTEVsZW1lbnR9IGVsXyAtIE5hdmlnYXRpb24gbGlzdFxyXG4gICAqXHJcbiAgICogQHBhcmFtIHsoc3RyaW5nfEhUTUxFbGVtZW50KX0gZWwgLSBTZWxlY3RvciBvciBIVE1MIGVsZW1lbnRcclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcihlbCkge1xyXG4gICAgY29uc3QgcmVmID0gKHR5cGVvZiBlbCA9PT0gXCJzdHJpbmdcIilcclxuICAgICAgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVsKVxyXG4gICAgICA6IGVsXHJcbiAgICBpZiAoIShyZWYgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpXHJcbiAgICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvclxyXG4gICAgdGhpcy5lbF8gPSByZWZcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEluaXRpYWxpemUgb3ZlcmZsb3cgYW5kIGRpc3BsYXkgZm9yIGFjY2Vzc2liaWxpdHlcclxuICAgKi9cclxuICBzZXR1cCgpIHtcclxuICAgIGNvbnN0IGN1cnJlbnQgPSB0aGlzLmVsXy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHRcclxuXHJcbiAgICAvKiBIaWRkZW4gbGlua3Mgc2hvdWxkIG5vdCBiZSBmb2N1c2FibGUsIHNvIGhpZGUgdGhlbSB3aGVuIHRoZSBuYXZpZ2F0aW9uXHJcbiAgICAgICBpcyBjb2xsYXBzZWQgYW5kIHNldCBvdmVyZmxvdyBzbyB0aGUgb3V0bGluZSBpcyBub3QgY3V0IG9mZiAqL1xyXG4gICAgdGhpcy5lbF8uc3R5bGUuZGlzcGxheSAgPSBjdXJyZW50ID8gXCJibG9ja1wiICAgOiBcIm5vbmVcIlxyXG4gICAgdGhpcy5lbF8uc3R5bGUub3ZlcmZsb3cgPSBjdXJyZW50ID8gXCJ2aXNpYmxlXCIgOiBcImhpZGRlblwiXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBBbmltYXRlIGV4cGFuZCBhbmQgY29sbGFwc2Ugc21vb3RobHlcclxuICAgKlxyXG4gICAqIEludGVybmV0IEV4cGxvcmVyIDExIGlzIHZlcnkgc2xvdyBhdCByZWNvZ25pemluZyBjaGFuZ2VzIG9uIHRoZSBkYXRhc2V0XHJcbiAgICogd2hpY2ggcmVzdWx0cyBpbiB0aGUgbWVudSBub3QgZXhwYW5kaW5nIG9yIGNvbGxhcHNpbmcgcHJvcGVybHkuIFRIZXJlZm9yZSxcclxuICAgKiBmb3IgcmVhc29ucyBvZiBjb21wYXRpYmlsaXR5LCB0aGUgYXR0cmlidXRlIGFjY2Vzc29ycyBhcmUgdXNlZC5cclxuICAgKi9cclxuICB1cGRhdGUoKSB7XHJcbiAgICBjb25zdCBjdXJyZW50ID0gdGhpcy5lbF8uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0XHJcblxyXG4gICAgLyogUmVzZXQgb3ZlcmZsb3cgdG8gQ1NTIGRlZmF1bHRzICovXHJcbiAgICB0aGlzLmVsXy5zdHlsZS5kaXNwbGF5ICA9IFwiYmxvY2tcIlxyXG4gICAgdGhpcy5lbF8uc3R5bGUub3ZlcmZsb3cgPSBcIlwiXHJcblxyXG4gICAgLyogRXhwYW5kZWQsIHNvIGNvbGxhcHNlICovXHJcbiAgICBpZiAoY3VycmVudCkge1xyXG4gICAgICB0aGlzLmVsXy5zdHlsZS5tYXhIZWlnaHQgPSBgJHtjdXJyZW50fXB4YFxyXG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuZWxfLnNldEF0dHJpYnV0ZShcImRhdGEtbWQtc3RhdGVcIiwgXCJhbmltYXRlXCIpXHJcbiAgICAgICAgdGhpcy5lbF8uc3R5bGUubWF4SGVpZ2h0ID0gXCIwcHhcIlxyXG4gICAgICB9KVxyXG5cclxuICAgIC8qIENvbGxhcHNlZCwgc28gZXhwYW5kICovXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmVsXy5zZXRBdHRyaWJ1dGUoXCJkYXRhLW1kLXN0YXRlXCIsIFwiZXhwYW5kXCIpXHJcbiAgICAgIHRoaXMuZWxfLnN0eWxlLm1heEhlaWdodCA9IFwiXCJcclxuXHJcbiAgICAgIC8qIFJlYWQgaGVpZ2h0IGFuZCB1bnNldCBwc2V1ZG8tdG9nZ2xlZCBzdGF0ZSAqL1xyXG4gICAgICBjb25zdCBoZWlnaHQgPSB0aGlzLmVsXy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHRcclxuICAgICAgdGhpcy5lbF8ucmVtb3ZlQXR0cmlidXRlKFwiZGF0YS1tZC1zdGF0ZVwiKVxyXG5cclxuICAgICAgLyogU2V0IGluaXRpYWwgc3RhdGUgYW5kIGFuaW1hdGUgKi9cclxuICAgICAgdGhpcy5lbF8uc3R5bGUubWF4SGVpZ2h0ID0gXCIwcHhcIlxyXG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuZWxfLnNldEF0dHJpYnV0ZShcImRhdGEtbWQtc3RhdGVcIiwgXCJhbmltYXRlXCIpXHJcbiAgICAgICAgdGhpcy5lbF8uc3R5bGUubWF4SGVpZ2h0ID0gYCR7aGVpZ2h0fXB4YFxyXG4gICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIC8qIFJlbW92ZSBzdGF0ZSBvbiBlbmQgb2YgdHJhbnNpdGlvbiAqL1xyXG4gICAgY29uc3QgZW5kID0gZXYgPT4ge1xyXG4gICAgICBjb25zdCB0YXJnZXQgPSBldi50YXJnZXRcclxuICAgICAgaWYgKCEodGFyZ2V0IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKVxyXG4gICAgICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvclxyXG5cclxuICAgICAgLyogUmVzZXQgaGVpZ2h0IGFuZCBzdGF0ZSAqL1xyXG4gICAgICB0YXJnZXQucmVtb3ZlQXR0cmlidXRlKFwiZGF0YS1tZC1zdGF0ZVwiKVxyXG4gICAgICB0YXJnZXQuc3R5bGUubWF4SGVpZ2h0ID0gXCJcIlxyXG5cclxuICAgICAgLyogSGlkZGVuIGxpbmtzIHNob3VsZCBub3QgYmUgZm9jdXNhYmxlLCBzbyBoaWRlIHRoZW0gd2hlbiB0aGUgbmF2aWdhdGlvblxyXG4gICAgICAgICBpcyBjb2xsYXBzZWQgYW5kIHNldCBvdmVyZmxvdyBzbyB0aGUgb3V0bGluZSBpcyBub3QgY3V0IG9mZiAqL1xyXG4gICAgICB0YXJnZXQuc3R5bGUuZGlzcGxheSAgPSBjdXJyZW50ID8gXCJub25lXCIgICA6IFwiYmxvY2tcIlxyXG4gICAgICB0YXJnZXQuc3R5bGUub3ZlcmZsb3cgPSBjdXJyZW50ID8gXCJoaWRkZW5cIiA6IFwidmlzaWJsZVwiXHJcblxyXG4gICAgICAvKiBPbmx5IGZpcmUgb25jZSwgc28gZGlyZWN0bHkgcmVtb3ZlIGV2ZW50IGxpc3RlbmVyICovXHJcbiAgICAgIHRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKFwidHJhbnNpdGlvbmVuZFwiLCBlbmQpXHJcbiAgICB9XHJcbiAgICB0aGlzLmVsXy5hZGRFdmVudExpc3RlbmVyKFwidHJhbnNpdGlvbmVuZFwiLCBlbmQsIGZhbHNlKVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmVzZXQgaGVpZ2h0IGFuZCBwc2V1ZG8tdG9nZ2xlZCBzdGF0ZVxyXG4gICAqL1xyXG4gIHJlc2V0KCkge1xyXG4gICAgdGhpcy5lbF8uZGF0YXNldC5tZFN0YXRlID0gXCJcIlxyXG4gICAgdGhpcy5lbF8uc3R5bGUubWF4SGVpZ2h0ID0gXCJcIlxyXG4gICAgdGhpcy5lbF8uc3R5bGUuZGlzcGxheSAgID0gXCJcIlxyXG4gICAgdGhpcy5lbF8uc3R5bGUub3ZlcmZsb3cgID0gXCJcIlxyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXNzZXRzL2phdmFzY3JpcHRzL2NvbXBvbmVudHMvTWF0ZXJpYWwvTmF2L0NvbGxhcHNlLmpzIiwiLypcclxuICogQ29weXJpZ2h0IChjKSAyMDE2LTIwMTggTWFydGluIERvbmF0aCA8bWFydGluLmRvbmF0aEBzcXVpZGZ1bmsuY29tPlxyXG4gKlxyXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XHJcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvXHJcbiAqIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlXHJcbiAqIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vclxyXG4gKiBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xyXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxyXG4gKlxyXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxyXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cclxuICpcclxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxyXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcclxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTi1JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxyXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXHJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HXHJcbiAqIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1NcclxuICogSU4gVEhFIFNPRlRXQVJFLlxyXG4gKi9cclxuXHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogQ2xhc3NcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2Nyb2xsaW5nIHtcclxuXHJcbiAgLyoqXHJcbiAgICogU2V0IG92ZXJmbG93IHNjcm9sbGluZyBvbiB0aGUgY3VycmVudCBhY3RpdmUgcGFuZSAoZm9yIGlPUylcclxuICAgKlxyXG4gICAqIEBjb25zdHJ1Y3RvclxyXG4gICAqXHJcbiAgICogQHByb3BlcnR5IHtIVE1MRWxlbWVudH0gZWxfIC0gUHJpbWFyeSBuYXZpZ2F0aW9uXHJcbiAgICpcclxuICAgKiBAcGFyYW0geyhzdHJpbmd8SFRNTEVsZW1lbnQpfSBlbCAtIFNlbGVjdG9yIG9yIEhUTUwgZWxlbWVudFxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKGVsKSB7XHJcbiAgICBjb25zdCByZWYgPSAodHlwZW9mIGVsID09PSBcInN0cmluZ1wiKVxyXG4gICAgICA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZWwpXHJcbiAgICAgIDogZWxcclxuICAgIGlmICghKHJlZiBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSlcclxuICAgICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yXHJcbiAgICB0aGlzLmVsXyA9IHJlZlxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2V0dXAgcGFuZXNcclxuICAgKi9cclxuICBzZXR1cCgpIHtcclxuXHJcbiAgICAvKiBJbml0aWFsbHkgc2V0IG92ZXJmbG93IHNjcm9sbGluZyBvbiBtYWluIHBhbmUgKi9cclxuICAgIGNvbnN0IG1haW4gPSB0aGlzLmVsXy5jaGlsZHJlblt0aGlzLmVsXy5jaGlsZHJlbi5sZW5ndGggLSAxXVxyXG4gICAgbWFpbi5zdHlsZS53ZWJraXRPdmVyZmxvd1Njcm9sbGluZyA9IFwidG91Y2hcIlxyXG5cclxuICAgIC8qIEZpbmQgYWxsIHRvZ2dsZXMgYW5kIGNoZWNrIHdoaWNoIG9uZSBpcyBhY3RpdmUgKi9cclxuICAgIGNvbnN0IHRvZ2dsZXMgPSB0aGlzLmVsXy5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGEtbWQtdG9nZ2xlXVwiKVxyXG4gICAgQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbCh0b2dnbGVzLCB0b2dnbGUgPT4ge1xyXG4gICAgICBpZiAoISh0b2dnbGUgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50KSlcclxuICAgICAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3JcclxuICAgICAgaWYgKHRvZ2dsZS5jaGVja2VkKSB7XHJcblxyXG4gICAgICAgIC8qIEZpbmQgY29ycmVzcG9uZGluZyBuYXZpZ2F0aW9uYWwgcGFuZSAqL1xyXG4gICAgICAgIGxldCBwYW5lID0gdG9nZ2xlLm5leHRFbGVtZW50U2libGluZ1xyXG4gICAgICAgIGlmICghKHBhbmUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpXHJcbiAgICAgICAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3JcclxuICAgICAgICB3aGlsZSAocGFuZS50YWdOYW1lICE9PSBcIk5BVlwiICYmIHBhbmUubmV4dEVsZW1lbnRTaWJsaW5nKVxyXG4gICAgICAgICAgcGFuZSA9IHBhbmUubmV4dEVsZW1lbnRTaWJsaW5nXHJcblxyXG4gICAgICAgIC8qIENoZWNrIHJlZmVyZW5jZXMgKi9cclxuICAgICAgICBpZiAoISh0b2dnbGUucGFyZW50Tm9kZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB8fFxyXG4gICAgICAgICAgICAhKHRvZ2dsZS5wYXJlbnROb2RlLnBhcmVudE5vZGUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpXHJcbiAgICAgICAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3JcclxuXHJcbiAgICAgICAgLyogRmluZCBjdXJyZW50IGFuZCBwYXJlbnQgbGlzdCBlbGVtZW50cyAqL1xyXG4gICAgICAgIGNvbnN0IHBhcmVudCA9IHRvZ2dsZS5wYXJlbnROb2RlLnBhcmVudE5vZGVcclxuICAgICAgICBjb25zdCB0YXJnZXQgPSBwYW5lLmNoaWxkcmVuW3BhbmUuY2hpbGRyZW4ubGVuZ3RoIC0gMV1cclxuXHJcbiAgICAgICAgLyogQWx3YXlzIHJlc2V0IGFsbCBsaXN0cyB3aGVuIHRyYW5zaXRpb25pbmcgKi9cclxuICAgICAgICBwYXJlbnQuc3R5bGUud2Via2l0T3ZlcmZsb3dTY3JvbGxpbmcgPSBcIlwiXHJcbiAgICAgICAgdGFyZ2V0LnN0eWxlLndlYmtpdE92ZXJmbG93U2Nyb2xsaW5nID0gXCJ0b3VjaFwiXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBVcGRhdGUgYWN0aXZlIHBhbmVzXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge0V2ZW50fSBldiAtIENoYW5nZSBldmVudFxyXG4gICAqL1xyXG4gIHVwZGF0ZShldikge1xyXG4gICAgY29uc3QgdGFyZ2V0ID0gZXYudGFyZ2V0XHJcbiAgICBpZiAoISh0YXJnZXQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpXHJcbiAgICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvclxyXG5cclxuICAgIC8qIEZpbmQgY29ycmVzcG9uZGluZyBuYXZpZ2F0aW9uYWwgcGFuZSAqL1xyXG4gICAgbGV0IHBhbmUgPSB0YXJnZXQubmV4dEVsZW1lbnRTaWJsaW5nXHJcbiAgICBpZiAoIShwYW5lIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKVxyXG4gICAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3JcclxuICAgIHdoaWxlIChwYW5lLnRhZ05hbWUgIT09IFwiTkFWXCIgJiYgcGFuZS5uZXh0RWxlbWVudFNpYmxpbmcpXHJcbiAgICAgIHBhbmUgPSBwYW5lLm5leHRFbGVtZW50U2libGluZ1xyXG5cclxuICAgIC8qIENoZWNrIHJlZmVyZW5jZXMgKi9cclxuICAgIGlmICghKHRhcmdldC5wYXJlbnROb2RlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHx8XHJcbiAgICAgICAgISh0YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKVxyXG4gICAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3JcclxuXHJcbiAgICAvKiBGaW5kIHBhcmVudCBhbmQgYWN0aXZlIHBhbmVzICovXHJcbiAgICBjb25zdCBwYXJlbnQgPSB0YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlXHJcbiAgICBjb25zdCBhY3RpdmUgPSBwYW5lLmNoaWxkcmVuW3BhbmUuY2hpbGRyZW4ubGVuZ3RoIC0gMV1cclxuXHJcbiAgICAvKiBBbHdheXMgcmVzZXQgYWxsIGxpc3RzIHdoZW4gdHJhbnNpdGlvbmluZyAqL1xyXG4gICAgcGFyZW50LnN0eWxlLndlYmtpdE92ZXJmbG93U2Nyb2xsaW5nID0gXCJcIlxyXG4gICAgYWN0aXZlLnN0eWxlLndlYmtpdE92ZXJmbG93U2Nyb2xsaW5nID0gXCJcIlxyXG5cclxuICAgIC8qIFNldCBvdmVyZmxvdyBzY3JvbGxpbmcgb24gcGFyZW50IHBhbmUgKi9cclxuICAgIGlmICghdGFyZ2V0LmNoZWNrZWQpIHtcclxuICAgICAgY29uc3QgZW5kID0gKCkgPT4ge1xyXG4gICAgICAgIGlmIChwYW5lIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcclxuICAgICAgICAgIHBhcmVudC5zdHlsZS53ZWJraXRPdmVyZmxvd1Njcm9sbGluZyA9IFwidG91Y2hcIlxyXG4gICAgICAgICAgcGFuZS5yZW1vdmVFdmVudExpc3RlbmVyKFwidHJhbnNpdGlvbmVuZFwiLCBlbmQpXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHBhbmUuYWRkRXZlbnRMaXN0ZW5lcihcInRyYW5zaXRpb25lbmRcIiwgZW5kLCBmYWxzZSlcclxuICAgIH1cclxuXHJcbiAgICAvKiBTZXQgb3ZlcmZsb3cgc2Nyb2xsaW5nIG9uIGFjdGl2ZSBwYW5lICovXHJcbiAgICBpZiAodGFyZ2V0LmNoZWNrZWQpIHtcclxuICAgICAgY29uc3QgZW5kID0gKCkgPT4ge1xyXG4gICAgICAgIGlmIChwYW5lIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcclxuICAgICAgICAgIGFjdGl2ZS5zdHlsZS53ZWJraXRPdmVyZmxvd1Njcm9sbGluZyA9IFwidG91Y2hcIlxyXG4gICAgICAgICAgcGFuZS5yZW1vdmVFdmVudExpc3RlbmVyKFwidHJhbnNpdGlvbmVuZFwiLCBlbmQpXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHBhbmUuYWRkRXZlbnRMaXN0ZW5lcihcInRyYW5zaXRpb25lbmRcIiwgZW5kLCBmYWxzZSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlc2V0IHBhbmVzXHJcbiAgICovXHJcbiAgcmVzZXQoKSB7XHJcblxyXG4gICAgLyogUmVzZXQgb3ZlcmZsb3cgc2Nyb2xsaW5nIG9uIG1haW4gcGFuZSAqL1xyXG4gICAgdGhpcy5lbF8uY2hpbGRyZW5bMV0uc3R5bGUud2Via2l0T3ZlcmZsb3dTY3JvbGxpbmcgPSBcIlwiXHJcblxyXG4gICAgLyogRmluZCBhbGwgdG9nZ2xlcyBhbmQgY2hlY2sgd2hpY2ggb25lIGlzIGFjdGl2ZSAqL1xyXG4gICAgY29uc3QgdG9nZ2xlcyA9IHRoaXMuZWxfLnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS1tZC10b2dnbGVdXCIpXHJcbiAgICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKHRvZ2dsZXMsIHRvZ2dsZSA9PiB7XHJcbiAgICAgIGlmICghKHRvZ2dsZSBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQpKVxyXG4gICAgICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvclxyXG4gICAgICBpZiAodG9nZ2xlLmNoZWNrZWQpIHtcclxuXHJcbiAgICAgICAgLyogRmluZCBjb3JyZXNwb25kaW5nIG5hdmlnYXRpb25hbCBwYW5lICovXHJcbiAgICAgICAgbGV0IHBhbmUgPSB0b2dnbGUubmV4dEVsZW1lbnRTaWJsaW5nXHJcbiAgICAgICAgaWYgKCEocGFuZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSlcclxuICAgICAgICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvclxyXG4gICAgICAgIHdoaWxlIChwYW5lLnRhZ05hbWUgIT09IFwiTkFWXCIgJiYgcGFuZS5uZXh0RWxlbWVudFNpYmxpbmcpXHJcbiAgICAgICAgICBwYW5lID0gcGFuZS5uZXh0RWxlbWVudFNpYmxpbmdcclxuXHJcbiAgICAgICAgLyogQ2hlY2sgcmVmZXJlbmNlcyAqL1xyXG4gICAgICAgIGlmICghKHRvZ2dsZS5wYXJlbnROb2RlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHx8XHJcbiAgICAgICAgICAgICEodG9nZ2xlLnBhcmVudE5vZGUucGFyZW50Tm9kZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSlcclxuICAgICAgICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvclxyXG5cclxuICAgICAgICAvKiBGaW5kIHBhcmVudCBhbmQgYWN0aXZlIHBhbmVzICovXHJcbiAgICAgICAgY29uc3QgcGFyZW50ID0gdG9nZ2xlLnBhcmVudE5vZGUucGFyZW50Tm9kZVxyXG4gICAgICAgIGNvbnN0IGFjdGl2ZSA9IHBhbmUuY2hpbGRyZW5bcGFuZS5jaGlsZHJlbi5sZW5ndGggLSAxXVxyXG5cclxuICAgICAgICAvKiBBbHdheXMgcmVzZXQgYWxsIGxpc3RzIHdoZW4gdHJhbnNpdGlvbmluZyAqL1xyXG4gICAgICAgIHBhcmVudC5zdHlsZS53ZWJraXRPdmVyZmxvd1Njcm9sbGluZyA9IFwiXCJcclxuICAgICAgICBhY3RpdmUuc3R5bGUud2Via2l0T3ZlcmZsb3dTY3JvbGxpbmcgPSBcIlwiXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hc3NldHMvamF2YXNjcmlwdHMvY29tcG9uZW50cy9NYXRlcmlhbC9OYXYvU2Nyb2xsaW5nLmpzIiwiLypcclxuICogQ29weXJpZ2h0IChjKSAyMDE2LTIwMTggTWFydGluIERvbmF0aCA8bWFydGluLmRvbmF0aEBzcXVpZGZ1bmsuY29tPlxyXG4gKlxyXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XHJcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvXHJcbiAqIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlXHJcbiAqIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vclxyXG4gKiBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xyXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxyXG4gKlxyXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxyXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cclxuICpcclxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxyXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcclxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTi1JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxyXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXHJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HXHJcbiAqIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1NcclxuICogSU4gVEhFIFNPRlRXQVJFLlxyXG4gKi9cclxuXHJcbmltcG9ydCBMb2NrIGZyb20gXCIuL1NlYXJjaC9Mb2NrXCJcclxuaW1wb3J0IFJlc3VsdCBmcm9tIFwiLi9TZWFyY2gvUmVzdWx0XCJcclxuXHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogTW9kdWxlXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBMb2NrLFxyXG4gIFJlc3VsdFxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hc3NldHMvamF2YXNjcmlwdHMvY29tcG9uZW50cy9NYXRlcmlhbC9TZWFyY2guanMiLCIvKlxyXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYtMjAxOCBNYXJ0aW4gRG9uYXRoIDxtYXJ0aW4uZG9uYXRoQHNxdWlkZnVuay5jb20+XHJcbiAqXHJcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcclxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG9cclxuICogZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGVcclxuICogcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yXHJcbiAqIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXHJcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XHJcbiAqXHJcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXHJcbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxyXG4gKlxyXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXHJcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxyXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OLUlORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXHJcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcclxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkdcclxuICogRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HU1xyXG4gKiBJTiBUSEUgU09GVFdBUkUuXHJcbiAqL1xyXG5cclxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiBDbGFzc1xyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2NrIHtcclxuXHJcbiAgLyoqXHJcbiAgICogTG9jayBib2R5IGZvciBmdWxsLXNjcmVlbiBzZWFyY2ggbW9kYWxcclxuICAgKlxyXG4gICAqIEBjb25zdHJ1Y3RvclxyXG4gICAqXHJcbiAgICogQHByb3BlcnR5IHtIVE1MSW5wdXRFbGVtZW50fSBlbF8gLSBMb2NrIHRvZ2dsZVxyXG4gICAqIEBwcm9wZXJ0eSB7SFRNTEVsZW1lbnR9IGxvY2tfIC0gRWxlbWVudCB0byBsb2NrIChkb2N1bWVudCBib2R5KVxyXG4gICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBvZmZzZXRfIC0gQ3VycmVudCBwYWdlIHktb2Zmc2V0XHJcbiAgICpcclxuICAgKiBAcGFyYW0geyhzdHJpbmd8SFRNTEVsZW1lbnQpfSBlbCAtIFNlbGVjdG9yIG9yIEhUTUwgZWxlbWVudFxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKGVsKSB7XHJcbiAgICBjb25zdCByZWYgPSAodHlwZW9mIGVsID09PSBcInN0cmluZ1wiKVxyXG4gICAgICA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZWwpXHJcbiAgICAgIDogZWxcclxuICAgIGlmICghKHJlZiBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQpKVxyXG4gICAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3JcclxuICAgIHRoaXMuZWxfID0gcmVmXHJcblxyXG4gICAgLyogUmV0cmlldmUgZWxlbWVudCB0byBsb2NrICg9IGJvZHkpICovXHJcbiAgICBpZiAoIWRvY3VtZW50LmJvZHkpXHJcbiAgICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvclxyXG4gICAgdGhpcy5sb2NrXyA9IGRvY3VtZW50LmJvZHlcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNldHVwIGxvY2tlZCBzdGF0ZVxyXG4gICAqL1xyXG4gIHNldHVwKCkge1xyXG4gICAgdGhpcy51cGRhdGUoKVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVXBkYXRlIGxvY2tlZCBzdGF0ZVxyXG4gICAqL1xyXG4gIHVwZGF0ZSgpIHtcclxuXHJcbiAgICAvKiBFbnRlcmluZyBzZWFyY2ggbW9kZSAqL1xyXG4gICAgaWYgKHRoaXMuZWxfLmNoZWNrZWQpIHtcclxuICAgICAgdGhpcy5vZmZzZXRfID0gd2luZG93LnBhZ2VZT2Zmc2V0XHJcblxyXG4gICAgICAvKiBTY3JvbGwgdG8gdG9wIGFmdGVyIHRyYW5zaXRpb24sIHRvIG9taXQgZmxpY2tlcmluZyAqL1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcclxuXHJcbiAgICAgICAgLyogTG9jayBib2R5IGFmdGVyIGZpbmlzaGluZyB0cmFuc2l0aW9uICovXHJcbiAgICAgICAgaWYgKHRoaXMuZWxfLmNoZWNrZWQpIHtcclxuICAgICAgICAgIHRoaXMubG9ja18uZGF0YXNldC5tZFN0YXRlID0gXCJsb2NrXCJcclxuICAgICAgICB9XHJcbiAgICAgIH0sIDQwMClcclxuXHJcbiAgICAvKiBFeGl0aW5nIHNlYXJjaCBtb2RlICovXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmxvY2tfLmRhdGFzZXQubWRTdGF0ZSA9IFwiXCJcclxuXHJcbiAgICAgIC8qIFNjcm9sbCB0byBmb3JtZXIgcG9zaXRpb24sIGJ1dCB3YWl0IGZvciAxMDBtcyB0byBwcmV2ZW50IGZsYXNoZXMgb25cclxuICAgICAgICAgaU9TLiBBIHNob3J0IHRpbWVvdXQgc2VlbXMgdG8gZG8gdGhlIHRyaWNrICovXHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5vZmZzZXRfICE9PSBcInVuZGVmaW5lZFwiKVxyXG4gICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIHRoaXMub2Zmc2V0XylcclxuICAgICAgfSwgMTAwKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmVzZXQgbG9ja2VkIHN0YXRlIGFuZCBwYWdlIHktb2Zmc2V0XHJcbiAgICovXHJcbiAgcmVzZXQoKSB7XHJcbiAgICBpZiAodGhpcy5sb2NrXy5kYXRhc2V0Lm1kU3RhdGUgPT09IFwibG9ja1wiKVxyXG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgdGhpcy5vZmZzZXRfKVxyXG4gICAgdGhpcy5sb2NrXy5kYXRhc2V0Lm1kU3RhdGUgPSBcIlwiXHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hc3NldHMvamF2YXNjcmlwdHMvY29tcG9uZW50cy9NYXRlcmlhbC9TZWFyY2gvTG9jay5qcyIsIi8qXHJcbiAqIENvcHlyaWdodCAoYykgMjAxNi0yMDE4IE1hcnRpbiBEb25hdGggPG1hcnRpbi5kb25hdGhAc3F1aWRmdW5rLmNvbT5cclxuICpcclxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxyXG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0b1xyXG4gKiBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZVxyXG4gKiByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3JcclxuICogc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcclxuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcclxuICpcclxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cclxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcbiAqXHJcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcclxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXHJcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT04tSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcclxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxyXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lOR1xyXG4gKiBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTXHJcbiAqIElOIFRIRSBTT0ZUV0FSRS5cclxuICovXHJcblxyXG5pbXBvcnQgZXNjYXBlIGZyb20gXCJlc2NhcGUtc3RyaW5nLXJlZ2V4cFwiXHJcbmltcG9ydCBsdW5yIGZyb20gXCJleHBvc2UtbG9hZGVyP2x1bnIhbHVuclwiXHJcblxyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqIEZ1bmN0aW9uc1xyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcblxyXG4vKipcclxuICogRXNjYXBlIEhUTUwgc3RyaW5nc1xyXG4gKlxyXG4gKiBEb2N1bWVudGF0aW9uIG1heSBjb250YWluIGNvZGUgSmF2YVNjcmlwdCBjb2RlIHNuaXBwZXRzIHdoaWNoIHdvdWxkIGdldFxyXG4gKiBleGVjdXRlZCB3aGVuIGluc2VydGVkIGludG8gdGhlIERPTSBhcyBwbGFpbiBIVE1MLlxyXG4gKlxyXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3NxdWlkZnVuay9ta2RvY3MtbWF0ZXJpYWwvaXNzdWVzLzkwNlxyXG4gKlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gaHRtbCAtIEhUTUwgc3RyaW5nXHJcbiAqXHJcbiAqIEByZXR1cm4ge3N0cmluZ30gRXNjYXBlZCBIVE1MIHN0cmluZ1xyXG4gKi9cclxuY29uc3QgZXNjYXBlSFRNTCA9IGh0bWwgPT4ge1xyXG4gIHZhciB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoaHRtbCk7XHJcbiAgdmFyIHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgcC5hcHBlbmRDaGlsZCh0ZXh0KTtcclxuICByZXR1cm4gcC5pbm5lckhUTUw7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBUcnVuY2F0ZSBhIHN0cmluZyBhZnRlciB0aGUgZ2l2ZW4gbnVtYmVyIG9mIGNoYXJhY3RlclxyXG4gKlxyXG4gKiBUaGlzIGlzIG5vdCBhIHJlYXNvbmFibGUgYXBwcm9hY2gsIHNpbmNlIHRoZSBzdW1tYXJpZXMga2luZCBvZiBzdWNrLiBJdFxyXG4gKiB3b3VsZCBiZSBiZXR0ZXIgdG8gY3JlYXRlIHNvbWV0aGluZyBtb3JlIGludGVsbGlnZW50LCBoaWdobGlnaHRpbmcgdGhlXHJcbiAqIHNlYXJjaCBvY2N1cnJlbmNlcyBhbmQgbWFraW5nIGEgYmV0dGVyIHN1bW1hcnkgb3V0IG9mIGl0LlxyXG4gKlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nIC0gU3RyaW5nIHRvIGJlIHRydW5jYXRlZFxyXG4gKiBAcGFyYW0ge251bWJlcn0gbiAtIE51bWJlciBvZiBjaGFyYWN0ZXJzXHJcbiAqIEByZXR1cm4ge3N0cmluZ30gVHJ1bmNhdGVkIHN0cmluZ1xyXG4gKi9cclxuY29uc3QgdHJ1bmNhdGUgPSAoc3RyaW5nLCBuKSA9PiB7XHJcbiAgbGV0IGkgPSBuXHJcbiAgaWYgKHN0cmluZy5sZW5ndGggPiBpKSB7XHJcbiAgICB3aGlsZSAoc3RyaW5nW2ldICE9PSBcIiBcIiAmJiAtLWkgPiAwKTtcclxuICAgIHJldHVybiBgJHtzdHJpbmcuc3Vic3RyaW5nKDAsIGkpfS4uLmBcclxuICB9XHJcbiAgcmV0dXJuIHN0cmluZ1xyXG59XHJcblxyXG4vKipcclxuICogUmV0dXJuIHRoZSBtZXRhIHRhZyB2YWx1ZSBmb3IgdGhlIGdpdmVuIGtleVxyXG4gKlxyXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IC0gTWV0YSBuYW1lXHJcbiAqXHJcbiAqIEByZXR1cm4ge3N0cmluZ30gTWV0YSBjb250ZW50IHZhbHVlXHJcbiAqL1xyXG5jb25zdCB0cmFuc2xhdGUgPSBrZXkgPT4ge1xyXG4gIGNvbnN0IG1ldGEgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShgbGFuZzoke2tleX1gKVswXVxyXG4gIGlmICghKG1ldGEgaW5zdGFuY2VvZiBIVE1MTWV0YUVsZW1lbnQpKVxyXG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yXHJcbiAgcmV0dXJuIG1ldGEuY29udGVudFxyXG59XHJcblxyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqIENsYXNzXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlc3VsdCB7XHJcblxyXG4gIC8qKlxyXG4gICAqIFBlcmZvcm0gc2VhcmNoIGFuZCB1cGRhdGUgcmVzdWx0cyBvbiBrZXlib2FyZCBldmVudHNcclxuICAgKlxyXG4gICAqIEBjb25zdHJ1Y3RvclxyXG4gICAqXHJcbiAgICogQHByb3BlcnR5IHtIVE1MRWxlbWVudH0gZWxfIC0gU2VhcmNoIHJlc3VsdCBjb250YWluZXJcclxuICAgKiBAcHJvcGVydHkgeyhBcnJheTxPYmplY3Q+fEZ1bmN0aW9uKX0gZGF0YV8gLSBSYXcgZG9jdW1lbnQgZGF0YVxyXG4gICAqIEBwcm9wZXJ0eSB7T2JqZWN0fSBkb2NzXyAtIEluZGV4ZWQgZG9jdW1lbnRzXHJcbiAgICogQHByb3BlcnR5IHtIVE1MRWxlbWVudH0gbWV0YV8gLSBTZWFyY2ggbWV0YSBpbmZvcm1hdGlvblxyXG4gICAqIEBwcm9wZXJ0eSB7SFRNTEVsZW1lbnR9IGxpc3RfIC0gU2VhcmNoIHJlc3VsdCBsaXN0XHJcbiAgICogQHByb3BlcnR5IHtBcnJheTxzdHJpbmc+fSBsYW5nXyAtIFNlYXJjaCBsYW5ndWFnZXNcclxuICAgKiBAcHJvcGVydHkge09iamVjdH0gbWVzc2FnZV8gLSBTZWFyY2ggcmVzdWx0IG1lc3NhZ2VzXHJcbiAgICogQHByb3BlcnR5IHtPYmplY3R9IGluZGV4XyAtIFNlYXJjaCBpbmRleFxyXG4gICAqIEBwcm9wZXJ0eSB7QXJyYXk8RnVuY3Rpb24+fSBzdGFja18gLSBTZWFyY2ggcmVzdWx0IHN0YWNrXHJcbiAgICogQHByb3BlcnR5IHtzdHJpbmd9IHZhbHVlXyAtIExhc3QgaW5wdXQgdmFsdWVcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7KHN0cmluZ3xIVE1MRWxlbWVudCl9IGVsIC0gU2VsZWN0b3Igb3IgSFRNTCBlbGVtZW50XHJcbiAgICogQHBhcmFtIHsoQXJyYXk8T2JqZWN0PnxGdW5jdGlvbil9IGRhdGEgLSBGdW5jdGlvbiBwcm92aWRpbmcgZGF0YSBvciBhcnJheVxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKGVsLCBkYXRhKSB7XHJcbiAgICBjb25zdCByZWYgPSAodHlwZW9mIGVsID09PSBcInN0cmluZ1wiKVxyXG4gICAgICA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZWwpXHJcbiAgICAgIDogZWxcclxuICAgIGlmICghKHJlZiBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSlcclxuICAgICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yXHJcbiAgICB0aGlzLmVsXyA9IHJlZlxyXG5cclxuICAgIC8qIFJldHJpZXZlIG1ldGFkYXRhIGFuZCBsaXN0IGVsZW1lbnQgKi9cclxuICAgIGNvbnN0IFttZXRhLCBsaXN0XSA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKHRoaXMuZWxfLmNoaWxkcmVuKVxyXG5cclxuICAgIC8qIFNldCBkYXRhLCBtZXRhZGF0YSBhbmQgbGlzdCBlbGVtZW50cyAqL1xyXG4gICAgdGhpcy5kYXRhXyA9IGRhdGFcclxuICAgIHRoaXMubWV0YV8gPSBtZXRhXHJcbiAgICB0aGlzLmxpc3RfID0gbGlzdFxyXG5cclxuICAgIC8qIExvYWQgbWVzc2FnZXMgZm9yIG1ldGFkYXRhIGRpc3BsYXkgKi9cclxuICAgIHRoaXMubWVzc2FnZV8gPSB7XHJcbiAgICAgIHBsYWNlaG9sZGVyOiB0aGlzLm1ldGFfLnRleHRDb250ZW50LFxyXG4gICAgICBub25lOiB0cmFuc2xhdGUoXCJzZWFyY2gucmVzdWx0Lm5vbmVcIiksXHJcbiAgICAgIG9uZTogdHJhbnNsYXRlKFwic2VhcmNoLnJlc3VsdC5vbmVcIiksXHJcbiAgICAgIG90aGVyOiB0cmFuc2xhdGUoXCJzZWFyY2gucmVzdWx0Lm90aGVyXCIpXHJcbiAgICB9XHJcblxyXG4gICAgLyogT3ZlcnJpZGUgdG9rZW5pemVyIHNlcGFyYXRvciwgaWYgZ2l2ZW4gKi9cclxuICAgIGNvbnN0IHRva2VuaXplciA9IHRyYW5zbGF0ZShcInNlYXJjaC50b2tlbml6ZXJcIilcclxuICAgIGlmICh0b2tlbml6ZXIubGVuZ3RoKVxyXG4gICAgICBsdW5yLnRva2VuaXplci5zZXBhcmF0b3IgPSB0b2tlbml6ZXJcclxuXHJcbiAgICAvKiBMb2FkIHNlYXJjaCBsYW5ndWFnZXMgKi9cclxuICAgIHRoaXMubGFuZ18gPSB0cmFuc2xhdGUoXCJzZWFyY2gubGFuZ3VhZ2VcIikuc3BsaXQoXCIsXCIpXHJcbiAgICAgIC5maWx0ZXIoQm9vbGVhbilcclxuICAgICAgLm1hcChsYW5nID0+IGxhbmcudHJpbSgpKVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVXBkYXRlIHNlYXJjaCByZXN1bHRzXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge0V2ZW50fSBldiAtIElucHV0IG9yIGZvY3VzIGV2ZW50XHJcbiAgICovXHJcbiAgdXBkYXRlKGV2KSB7XHJcblxyXG4gICAgLyogSW5pdGlhbGl6ZSBpbmRleCwgaWYgdGhpcyBoYXMgbm90IGJlIGRvbmUgeWV0ICovXHJcbiAgICBpZiAoZXYudHlwZSA9PT0gXCJmb2N1c1wiICYmICF0aGlzLmluZGV4Xykge1xyXG5cclxuICAgICAgLyogSW5pdGlhbGl6ZSBpbmRleCAqL1xyXG4gICAgICBjb25zdCBpbml0ID0gZGF0YSA9PiB7XHJcblxyXG4gICAgICAgIC8qIFByZXByb2Nlc3MgYW5kIGluZGV4IHNlY3Rpb25zIGFuZCBkb2N1bWVudHMgKi9cclxuICAgICAgICB0aGlzLmRvY3NfID0gZGF0YS5yZWR1Y2UoKGRvY3MsIGRvYykgPT4ge1xyXG4gICAgICAgICAgY29uc3QgW3BhdGgsIGhhc2hdID0gZG9jLmxvY2F0aW9uLnNwbGl0KFwiI1wiKVxyXG5cclxuICAgICAgICAgIC8qIEVzY2FwZSBIVE1MICovXHJcbiAgICAgICAgICBkb2MudGl0bGUgPSBlc2NhcGVIVE1MKGRvYy50aXRsZSlcclxuICAgICAgICAgIGRvYy50ZXh0ICA9IGVzY2FwZUhUTUwoZG9jLmNvbnRlbnRzKVxyXG5cclxuICAgICAgICAgIC8qIEFzc29jaWF0ZSBzZWN0aW9uIHdpdGggcGFyZW50IGRvY3VtZW50ICovXHJcbiAgICAgICAgICBpZiAoaGFzaCkge1xyXG4gICAgICAgICAgICBkb2MucGFyZW50ID0gZG9jcy5nZXQocGF0aClcclxuXHJcbiAgICAgICAgICAgIC8qIE92ZXJyaWRlIHBhZ2UgdGl0bGUgd2l0aCBkb2N1bWVudCB0aXRsZSBpZiBmaXJzdCBzZWN0aW9uICovXHJcbiAgICAgICAgICAgIGlmIChkb2MucGFyZW50ICYmICFkb2MucGFyZW50LmRvbmUpIHtcclxuICAgICAgICAgICAgICBkb2MucGFyZW50LnRpdGxlID0gZG9jLnRpdGxlXHJcbiAgICAgICAgICAgICAgZG9jLnBhcmVudC50ZXh0ICA9IGRvYy5jb250ZW50c1xyXG4gICAgICAgICAgICAgIGRvYy5wYXJlbnQuZG9uZSAgPSB0cnVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAvKiBTb21lIGNsZWFudXAgb24gdGhlIHRleHQgKi9cclxuICAgICAgICAgIGRvYy50ZXh0ID0gZG9jLnRleHRcclxuICAgICAgICAgICAgLnJlcGxhY2UoL1xcbi9nLCBcIiBcIikgICAgICAgICAgICAgICAvKiBSZW1vdmUgbmV3bGluZXMgKi9cclxuICAgICAgICAgICAgLnJlcGxhY2UoL1xccysvZywgXCIgXCIpICAgICAgICAgICAgICAvKiBDb21wYWN0IHdoaXRlc3BhY2UgKi9cclxuICAgICAgICAgICAgLnJlcGxhY2UoL1xccysoWywuOjshP10pL2csICAgICAgICAgLyogQ29ycmVjdCBwdW5jdHVhdGlvbiAqL1xyXG4gICAgICAgICAgICAgIChfLCBjaGFyKSA9PiBjaGFyKVxyXG5cclxuICAgICAgICAgIC8qIEluZGV4IHNlY3Rpb25zIGFuZCBkb2N1bWVudHMsIGJ1dCBza2lwIHRvcC1sZXZlbCBoZWFkbGluZSAqL1xyXG4gICAgICAgICAgaWYgKCFkb2MucGFyZW50IHx8IGRvYy5wYXJlbnQudGl0bGUgIT09IGRvYy50aXRsZSlcclxuICAgICAgICAgICAgZG9jcy5zZXQoZG9jLmxvY2F0aW9uLCBkb2MpXHJcbiAgICAgICAgICByZXR1cm4gZG9jc1xyXG4gICAgICAgIH0sIG5ldyBNYXApXHJcblxyXG4gICAgICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLWludmFsaWQtdGhpcyAqL1xyXG4gICAgICAgIGNvbnN0IGRvY3MgPSB0aGlzLmRvY3NfLFxyXG4gICAgICAgICAgICAgIGxhbmcgPSB0aGlzLmxhbmdfXHJcblxyXG4gICAgICAgIC8qIENyZWF0ZSBzdGFjayBhbmQgaW5kZXggKi9cclxuICAgICAgICB0aGlzLnN0YWNrXyA9IFtdXHJcbiAgICAgICAgdGhpcy5pbmRleF8gPSBsdW5yKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgY29uc3QgZmlsdGVycyA9IHtcclxuICAgICAgICAgICAgXCJzZWFyY2gucGlwZWxpbmUudHJpbW1lclwiOiBsdW5yLnRyaW1tZXIsXHJcbiAgICAgICAgICAgIFwic2VhcmNoLnBpcGVsaW5lLnN0b3B3b3Jkc1wiOiBsdW5yLnN0b3BXb3JkRmlsdGVyXHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLyogRGlzYWJsZSBzdG9wIHdvcmRzIGZpbHRlciBhbmQgdHJpbW1lciwgaWYgZGVzaXJlZCAqL1xyXG4gICAgICAgICAgY29uc3QgcGlwZWxpbmUgPSBPYmplY3Qua2V5cyhmaWx0ZXJzKS5yZWR1Y2UoKHJlc3VsdCwgbmFtZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIXRyYW5zbGF0ZShuYW1lKS5tYXRjaCgvXmZhbHNlJC9pKSlcclxuICAgICAgICAgICAgICByZXN1bHQucHVzaChmaWx0ZXJzW25hbWVdKVxyXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0XHJcbiAgICAgICAgICB9LCBbXSlcclxuXHJcbiAgICAgICAgICAvKiBSZW1vdmUgc3RlbW1lciwgYXMgaXQgY3JpcHBsZXMgc2VhcmNoIGV4cGVyaWVuY2UgKi9cclxuICAgICAgICAgIHRoaXMucGlwZWxpbmUucmVzZXQoKVxyXG4gICAgICAgICAgaWYgKHBpcGVsaW5lKVxyXG4gICAgICAgICAgICB0aGlzLnBpcGVsaW5lLmFkZCguLi5waXBlbGluZSlcclxuXHJcbiAgICAgICAgICAvKiBTZXQgdXAgYWx0ZXJuYXRlIHNlYXJjaCBsYW5ndWFnZXMgKi9cclxuICAgICAgICAgIGlmIChsYW5nLmxlbmd0aCA9PT0gMSAmJiBsYW5nWzBdICE9PSBcImVuXCIgJiYgbHVucltsYW5nWzBdXSkge1xyXG4gICAgICAgICAgICB0aGlzLnVzZShsdW5yW2xhbmdbMF1dKVxyXG4gICAgICAgICAgfSBlbHNlIGlmIChsYW5nLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICAgICAgdGhpcy51c2UobHVuci5tdWx0aUxhbmd1YWdlKC4uLmxhbmcpKVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC8qIEluZGV4IGZpZWxkcyAqL1xyXG4gICAgICAgICAgdGhpcy5maWVsZChcInRpdGxlXCIsIHsgYm9vc3Q6IDEwIH0pXHJcbiAgICAgICAgICB0aGlzLmZpZWxkKFwidGV4dFwiKVxyXG4gICAgICAgICAgdGhpcy5maWVsZChcInRhZ3NcIilcclxuICAgICAgICAgIHRoaXMuZmllbGQoXCJjYXRlZ29yaWVzXCIpXHJcbiAgICAgICAgICB0aGlzLnJlZihcImxvY2F0aW9uXCIpXHJcblxyXG4gICAgICAgICAgLyogSW5kZXggZG9jdW1lbnRzICovXHJcbiAgICAgICAgICBkb2NzLmZvckVhY2goZG9jID0+IHRoaXMuYWRkKGRvYykpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgLyogUmVnaXN0ZXIgZXZlbnQgaGFuZGxlciBmb3IgbGF6eSByZW5kZXJpbmcgKi9cclxuICAgICAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLmVsXy5wYXJlbnROb2RlXHJcbiAgICAgICAgaWYgKCEoY29udGFpbmVyIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKVxyXG4gICAgICAgICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yXHJcbiAgICAgICAgY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgd2hpbGUgKHRoaXMuc3RhY2tfLmxlbmd0aCAmJiBjb250YWluZXIuc2Nyb2xsVG9wICtcclxuICAgICAgICAgICAgICBjb250YWluZXIub2Zmc2V0SGVpZ2h0ID49IGNvbnRhaW5lci5zY3JvbGxIZWlnaHQgLSAxNilcclxuICAgICAgICAgICAgdGhpcy5zdGFja18uc3BsaWNlKDAsIDEwKS5mb3JFYWNoKHJlbmRlciA9PiByZW5kZXIoKSlcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICAgIC8qIGVzbGludC1lbmFibGUgbm8taW52YWxpZC10aGlzICovXHJcblxyXG4gICAgICAvKiBJbml0aWFsaXplIGluZGV4IGFmdGVyIHNob3J0IHRpbWVvdXQgdG8gYWNjb3VudCBmb3IgdHJhbnNpdGlvbiAqL1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICByZXR1cm4gdHlwZW9mIHRoaXMuZGF0YV8gPT09IFwiZnVuY3Rpb25cIlxyXG4gICAgICAgICAgPyB0aGlzLmRhdGFfKCkudGhlbihpbml0KVxyXG4gICAgICAgICAgOiBpbml0KHRoaXMuZGF0YV8pXHJcbiAgICAgIH0sIDI1MClcclxuXHJcbiAgICAvKiBFeGVjdXRlIHNlYXJjaCBvbiBuZXcgaW5wdXQgZXZlbnQgKi9cclxuICAgIH0gZWxzZSBpZiAoZXYudHlwZSA9PT0gXCJmb2N1c1wiIHx8IGV2LnR5cGUgPT09IFwia2V5dXBcIikge1xyXG4gICAgICBjb25zdCB0YXJnZXQgPSBldi50YXJnZXRcclxuICAgICAgaWYgKCEodGFyZ2V0IGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCkpXHJcbiAgICAgICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yXHJcblxyXG4gICAgICAvKiBBYm9ydCBlYXJseSwgaWYgaW5kZXggaXMgbm90IGJ1aWxkIG9yIGlucHV0IGhhc24ndCBjaGFuZ2VkICovXHJcbiAgICAgIGlmICghdGhpcy5pbmRleF8gfHwgdGFyZ2V0LnZhbHVlID09PSB0aGlzLnZhbHVlXylcclxuICAgICAgICByZXR1cm5cclxuXHJcbiAgICAgIC8qIENsZWFyIGN1cnJlbnQgbGlzdCAqL1xyXG4gICAgICB3aGlsZSAodGhpcy5saXN0Xy5maXJzdENoaWxkKVxyXG4gICAgICAgIHRoaXMubGlzdF8ucmVtb3ZlQ2hpbGQodGhpcy5saXN0Xy5maXJzdENoaWxkKVxyXG5cclxuICAgICAgLyogQWJvcnQgZWFybHksIGlmIHNlYXJjaCBpbnB1dCBpcyBlbXB0eSAqL1xyXG4gICAgICB0aGlzLnZhbHVlXyA9IHRhcmdldC52YWx1ZVxyXG4gICAgICBpZiAodGhpcy52YWx1ZV8ubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgdGhpcy5tZXRhXy50ZXh0Q29udGVudCA9IHRoaXMubWVzc2FnZV8ucGxhY2Vob2xkZXJcclxuICAgICAgICByZXR1cm5cclxuICAgICAgfVxyXG5cclxuICAgICAgLyogUGVyZm9ybSBzZWFyY2ggb24gaW5kZXggYW5kIGdyb3VwIHNlY3Rpb25zIGJ5IGRvY3VtZW50ICovXHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuaW5kZXhfXHJcblxyXG4gICAgICAgIC8qIEFwcGVuZCB0cmFpbGluZyB3aWxkY2FyZCB0byBhbGwgdGVybXMgZm9yIHByZWZpeCBxdWVyeWluZyAqL1xyXG4gICAgICAgIC5xdWVyeShxdWVyeSA9PiB7XHJcbiAgICAgICAgICB0aGlzLnZhbHVlXy50b0xvd2VyQ2FzZSgpLnNwbGl0KFwiIFwiKVxyXG4gICAgICAgICAgICAuZmlsdGVyKEJvb2xlYW4pXHJcbiAgICAgICAgICAgIC5mb3JFYWNoKHRlcm0gPT4ge1xyXG4gICAgICAgICAgICAgIHF1ZXJ5LnRlcm0odGVybSwgeyB3aWxkY2FyZDogbHVuci5RdWVyeS53aWxkY2FyZC5UUkFJTElORyB9KVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIC8qIFByb2Nlc3MgcXVlcnkgcmVzdWx0cyAqL1xyXG4gICAgICAgIC5yZWR1Y2UoKGl0ZW1zLCBpdGVtKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBkb2MgPSB0aGlzLmRvY3NfLmdldChpdGVtLnJlZilcclxuICAgICAgICAgIGlmIChkb2MucGFyZW50KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlZiA9IGRvYy5wYXJlbnQubG9jYXRpb25cclxuICAgICAgICAgICAgaXRlbXMuc2V0KHJlZiwgKGl0ZW1zLmdldChyZWYpIHx8IFtdKS5jb25jYXQoaXRlbSkpXHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCByZWYgPSBkb2MubG9jYXRpb25cclxuICAgICAgICAgICAgaXRlbXMuc2V0KHJlZiwgKGl0ZW1zLmdldChyZWYpIHx8IFtdKSlcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJldHVybiBpdGVtc1xyXG4gICAgICAgIH0sIG5ldyBNYXApXHJcblxyXG4gICAgICAvKiBBc3NlbWJsZSByZWd1bGFyIGV4cHJlc3Npb25zIGZvciBtYXRjaGluZyAqL1xyXG4gICAgICBjb25zdCBxdWVyeSA9IGVzY2FwZSh0aGlzLnZhbHVlXy50cmltKCkpLnJlcGxhY2UoXHJcbiAgICAgICAgbmV3IFJlZ0V4cChsdW5yLnRva2VuaXplci5zZXBhcmF0b3IsIFwiaW1nXCIpLCBcInxcIilcclxuICAgICAgY29uc3QgbWF0Y2ggPVxyXG4gICAgICAgIG5ldyBSZWdFeHAoYChefCR7bHVuci50b2tlbml6ZXIuc2VwYXJhdG9yfSkoJHtxdWVyeX0pYCwgXCJpbWdcIilcclxuICAgICAgY29uc3QgaGlnaGxpZ2h0ID0gKF8sIHNlcGFyYXRvciwgdG9rZW4pID0+XHJcbiAgICAgICAgYCR7c2VwYXJhdG9yfTxlbT4ke3Rva2VufTwvZW0+YFxyXG5cclxuICAgICAgLyogUmVzZXQgc3RhY2sgYW5kIHJlbmRlciByZXN1bHRzICovXHJcbiAgICAgIHRoaXMuc3RhY2tfID0gW11cclxuICAgICAgcmVzdWx0LmZvckVhY2goKGl0ZW1zLCByZWYpID0+IHtcclxuICAgICAgICBjb25zdCBkb2MgPSB0aGlzLmRvY3NfLmdldChyZWYpXHJcblxyXG4gICAgICAgIC8qIFJlbmRlciBhcnRpY2xlICovXHJcbiAgICAgICAgY29uc3QgYXJ0aWNsZSA9IChcclxuICAgICAgICAgIDxsaSBjbGFzcz1cIm1kLXNlYXJjaC1yZXN1bHRfX2l0ZW1cIj5cclxuICAgICAgICAgICAgPGEgaHJlZj17ZG9jLmxvY2F0aW9ufSB0aXRsZT17ZG9jLnRpdGxlfVxyXG4gICAgICAgICAgICAgIGNsYXNzPVwibWQtc2VhcmNoLXJlc3VsdF9fbGlua1wiIHRhYmluZGV4PVwiLTFcIj5cclxuICAgICAgICAgICAgICA8YXJ0aWNsZSBjbGFzcz1cIm1kLXNlYXJjaC1yZXN1bHRfX2FydGljbGVcclxuICAgICAgICAgICAgICAgICAgICBtZC1zZWFyY2gtcmVzdWx0X19hcnRpY2xlLS1kb2N1bWVudFwiPlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzPVwibWQtc2VhcmNoLXJlc3VsdF9fdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAge3sgX19odG1sOiBkb2MudGl0bGUucmVwbGFjZShtYXRjaCwgaGlnaGxpZ2h0KSB9fVxyXG4gICAgICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgICAgIHtkb2MudGV4dC5sZW5ndGggP1xyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cIm1kLXNlYXJjaC1yZXN1bHRfX3RlYXNlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHt7IF9faHRtbDogZG9jLnRleHQucmVwbGFjZShtYXRjaCwgaGlnaGxpZ2h0KSB9fVxyXG4gICAgICAgICAgICAgICAgICA8L3A+IDoge319XHJcbiAgICAgICAgICAgICAgPC9hcnRpY2xlPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgIClcclxuXHJcbiAgICAgICAgLyogUmVuZGVyIHNlY3Rpb25zIGZvciBhcnRpY2xlICovXHJcbiAgICAgICAgY29uc3Qgc2VjdGlvbnMgPSBpdGVtcy5tYXAoaXRlbSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBzZWN0aW9uID0gdGhpcy5kb2NzXy5nZXQoaXRlbS5yZWYpXHJcbiAgICAgICAgICAgIGFydGljbGUuYXBwZW5kQ2hpbGQoXHJcbiAgICAgICAgICAgICAgPGEgaHJlZj17c2VjdGlvbi5sb2NhdGlvbn0gdGl0bGU9e3NlY3Rpb24udGl0bGV9XHJcbiAgICAgICAgICAgICAgICBjbGFzcz1cIm1kLXNlYXJjaC1yZXN1bHRfX2xpbmtcIiBkYXRhLW1kLXJlbD1cImFuY2hvclwiXHJcbiAgICAgICAgICAgICAgICB0YWJpbmRleD1cIi0xXCI+XHJcbiAgICAgICAgICAgICAgICA8YXJ0aWNsZSBjbGFzcz1cIm1kLXNlYXJjaC1yZXN1bHRfX2FydGljbGVcIj5cclxuICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzPVwibWQtc2VhcmNoLXJlc3VsdF9fdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICB7eyBfX2h0bWw6IHNlY3Rpb24udGl0bGUucmVwbGFjZShtYXRjaCwgaGlnaGxpZ2h0KSB9fVxyXG4gICAgICAgICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICAgICAgICB7c2VjdGlvbi50ZXh0Lmxlbmd0aCA/XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJtZC1zZWFyY2gtcmVzdWx0X190ZWFzZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIHt7IF9faHRtbDogdHJ1bmNhdGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlY3Rpb24udGV4dC5yZXBsYWNlKG1hdGNoLCBoaWdobGlnaHQpLCA0MDApXHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD4gOiB7fX1cclxuICAgICAgICAgICAgICAgIDwvYXJ0aWNsZT5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAvKiBQdXNoIGFydGljbGVzIGFuZCBzZWN0aW9uIHJlbmRlcmVycyBvbnRvIHN0YWNrICovXHJcbiAgICAgICAgdGhpcy5zdGFja18ucHVzaCgoKSA9PiB0aGlzLmxpc3RfLmFwcGVuZENoaWxkKGFydGljbGUpLCAuLi5zZWN0aW9ucylcclxuICAgICAgfSlcclxuXHJcbiAgICAgIC8qIEdyYWR1YWxseSBhZGQgcmVzdWx0cyBhcyBsb25nIGFzIHRoZSBoZWlnaHQgb2YgdGhlIGNvbnRhaW5lciBncm93cyAqL1xyXG4gICAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLmVsXy5wYXJlbnROb2RlXHJcbiAgICAgIGlmICghKGNvbnRhaW5lciBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSlcclxuICAgICAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3JcclxuICAgICAgd2hpbGUgKHRoaXMuc3RhY2tfLmxlbmd0aCAmJlxyXG4gICAgICAgICAgY29udGFpbmVyLm9mZnNldEhlaWdodCA+PSBjb250YWluZXIuc2Nyb2xsSGVpZ2h0IC0gMTYpXHJcbiAgICAgICAgKHRoaXMuc3RhY2tfLnNoaWZ0KCkpKClcclxuXHJcbiAgICAgIC8qIEJpbmQgY2xpY2sgaGFuZGxlcnMgZm9yIGFuY2hvcnMgKi9cclxuICAgICAgY29uc3QgYW5jaG9ycyA9IHRoaXMubGlzdF8ucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLW1kLXJlbD1hbmNob3JdXCIpXHJcbiAgICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoYW5jaG9ycywgYW5jaG9yID0+IHtcclxuICAgICAgICBbXCJjbGlja1wiLCBcImtleWRvd25cIl0uZm9yRWFjaChhY3Rpb24gPT4ge1xyXG4gICAgICAgICAgYW5jaG9yLmFkZEV2ZW50TGlzdGVuZXIoYWN0aW9uLCBldjIgPT4ge1xyXG4gICAgICAgICAgICBpZiAoYWN0aW9uID09PSBcImtleWRvd25cIiAmJiBldjIua2V5Q29kZSAhPT0gMTMpXHJcbiAgICAgICAgICAgICAgcmV0dXJuXHJcblxyXG4gICAgICAgICAgICAvKiBDbG9zZSBzZWFyY2ggKi9cclxuICAgICAgICAgICAgY29uc3QgdG9nZ2xlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLW1kLXRvZ2dsZT1zZWFyY2hdXCIpXHJcbiAgICAgICAgICAgIGlmICghKHRvZ2dsZSBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQpKVxyXG4gICAgICAgICAgICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvclxyXG4gICAgICAgICAgICBpZiAodG9nZ2xlLmNoZWNrZWQpIHtcclxuICAgICAgICAgICAgICB0b2dnbGUuY2hlY2tlZCA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgdG9nZ2xlLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwiY2hhbmdlXCIpKVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvKiBIYWNrOiBwcmV2ZW50IGRlZmF1bHQsIGFzIHRoZSBuYXZpZ2F0aW9uIG5lZWRzIHRvIGJlIGRlbGF5ZWQgZHVlXHJcbiAgICAgICAgICAgICAgIHRvIHRoZSBzZWFyY2ggYm9keSBsb2NrIG9uIG1vYmlsZSAqL1xyXG4gICAgICAgICAgICBldjIucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICBkb2N1bWVudC5sb2NhdGlvbi5ocmVmID0gYW5jaG9yLmhyZWZcclxuICAgICAgICAgICAgfSwgMTAwKVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgICB9KVxyXG5cclxuICAgICAgLyogVXBkYXRlIHNlYXJjaCBtZXRhZGF0YSAqL1xyXG4gICAgICBzd2l0Y2ggKHJlc3VsdC5zaXplKSB7XHJcbiAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgdGhpcy5tZXRhXy50ZXh0Q29udGVudCA9IHRoaXMubWVzc2FnZV8ubm9uZVxyXG4gICAgICAgICAgYnJlYWtcclxuICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICB0aGlzLm1ldGFfLnRleHRDb250ZW50ID0gdGhpcy5tZXNzYWdlXy5vbmVcclxuICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIHRoaXMubWV0YV8udGV4dENvbnRlbnQgPVxyXG4gICAgICAgICAgICB0aGlzLm1lc3NhZ2VfLm90aGVyLnJlcGxhY2UoXCIjXCIsIHJlc3VsdC5zaXplKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hc3NldHMvamF2YXNjcmlwdHMvY29tcG9uZW50cy9NYXRlcmlhbC9TZWFyY2gvUmVzdWx0LmpzeCIsIid1c2Ugc3RyaWN0JztcblxudmFyIG1hdGNoT3BlcmF0b3JzUmUgPSAvW3xcXFxce30oKVtcXF1eJCsqPy5dL2c7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHN0cikge1xuXHRpZiAodHlwZW9mIHN0ciAhPT0gJ3N0cmluZycpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdFeHBlY3RlZCBhIHN0cmluZycpO1xuXHR9XG5cblx0cmV0dXJuIHN0ci5yZXBsYWNlKG1hdGNoT3BlcmF0b3JzUmUsICdcXFxcJCYnKTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvZXNjYXBlLXN0cmluZy1yZWdleHAvaW5kZXguanMiLCJtb2R1bGUuZXhwb3J0cyA9IGdsb2JhbFtcImx1bnJcIl0gPSByZXF1aXJlKFwiLSFEOlxcXFxTY29waXN0b1xcXFxEZXZlbG9wbWVudFxcXFxodWdvXFxcXGh1Z28tbWF0ZXJpYWwtZG9jc1xcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcyEuXFxcXGx1bnIuanNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZXhwb3NlLWxvYWRlcj9sdW5yIS4vbm9kZV9tb2R1bGVzL2x1bnIvbHVuci5qcy1leHBvc2VkXG4vLyBtb2R1bGUgaWQgPSAzN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIGx1bnIgLSBodHRwOi8vbHVucmpzLmNvbSAtIEEgYml0IGxpa2UgU29sciwgYnV0IG11Y2ggc21hbGxlciBhbmQgbm90IGFzIGJyaWdodCAtIDIuMy41XG4gKiBDb3B5cmlnaHQgKEMpIDIwMTggT2xpdmVyIE5pZ2h0aW5nYWxlXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuXG47KGZ1bmN0aW9uKCl7XG5cbi8qKlxuICogQSBjb252ZW5pZW5jZSBmdW5jdGlvbiBmb3IgY29uZmlndXJpbmcgYW5kIGNvbnN0cnVjdGluZ1xuICogYSBuZXcgbHVuciBJbmRleC5cbiAqXG4gKiBBIGx1bnIuQnVpbGRlciBpbnN0YW5jZSBpcyBjcmVhdGVkIGFuZCB0aGUgcGlwZWxpbmUgc2V0dXBcbiAqIHdpdGggYSB0cmltbWVyLCBzdG9wIHdvcmQgZmlsdGVyIGFuZCBzdGVtbWVyLlxuICpcbiAqIFRoaXMgYnVpbGRlciBvYmplY3QgaXMgeWllbGRlZCB0byB0aGUgY29uZmlndXJhdGlvbiBmdW5jdGlvblxuICogdGhhdCBpcyBwYXNzZWQgYXMgYSBwYXJhbWV0ZXIsIGFsbG93aW5nIHRoZSBsaXN0IG9mIGZpZWxkc1xuICogYW5kIG90aGVyIGJ1aWxkZXIgcGFyYW1ldGVycyB0byBiZSBjdXN0b21pc2VkLlxuICpcbiAqIEFsbCBkb2N1bWVudHMgX211c3RfIGJlIGFkZGVkIHdpdGhpbiB0aGUgcGFzc2VkIGNvbmZpZyBmdW5jdGlvbi5cbiAqXG4gKiBAZXhhbXBsZVxuICogdmFyIGlkeCA9IGx1bnIoZnVuY3Rpb24gKCkge1xuICogICB0aGlzLmZpZWxkKCd0aXRsZScpXG4gKiAgIHRoaXMuZmllbGQoJ2JvZHknKVxuICogICB0aGlzLnJlZignaWQnKVxuICpcbiAqICAgZG9jdW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKGRvYykge1xuICogICAgIHRoaXMuYWRkKGRvYylcbiAqICAgfSwgdGhpcylcbiAqIH0pXG4gKlxuICogQHNlZSB7QGxpbmsgbHVuci5CdWlsZGVyfVxuICogQHNlZSB7QGxpbmsgbHVuci5QaXBlbGluZX1cbiAqIEBzZWUge0BsaW5rIGx1bnIudHJpbW1lcn1cbiAqIEBzZWUge0BsaW5rIGx1bnIuc3RvcFdvcmRGaWx0ZXJ9XG4gKiBAc2VlIHtAbGluayBsdW5yLnN0ZW1tZXJ9XG4gKiBAbmFtZXNwYWNlIHtmdW5jdGlvbn0gbHVuclxuICovXG52YXIgbHVuciA9IGZ1bmN0aW9uIChjb25maWcpIHtcbiAgdmFyIGJ1aWxkZXIgPSBuZXcgbHVuci5CdWlsZGVyXG5cbiAgYnVpbGRlci5waXBlbGluZS5hZGQoXG4gICAgbHVuci50cmltbWVyLFxuICAgIGx1bnIuc3RvcFdvcmRGaWx0ZXIsXG4gICAgbHVuci5zdGVtbWVyXG4gIClcblxuICBidWlsZGVyLnNlYXJjaFBpcGVsaW5lLmFkZChcbiAgICBsdW5yLnN0ZW1tZXJcbiAgKVxuXG4gIGNvbmZpZy5jYWxsKGJ1aWxkZXIsIGJ1aWxkZXIpXG4gIHJldHVybiBidWlsZGVyLmJ1aWxkKClcbn1cblxubHVuci52ZXJzaW9uID0gXCIyLjMuNVwiXG4vKiFcbiAqIGx1bnIudXRpbHNcbiAqIENvcHlyaWdodCAoQykgMjAxOCBPbGl2ZXIgTmlnaHRpbmdhbGVcbiAqL1xuXG4vKipcbiAqIEEgbmFtZXNwYWNlIGNvbnRhaW5pbmcgdXRpbHMgZm9yIHRoZSByZXN0IG9mIHRoZSBsdW5yIGxpYnJhcnlcbiAqIEBuYW1lc3BhY2UgbHVuci51dGlsc1xuICovXG5sdW5yLnV0aWxzID0ge31cblxuLyoqXG4gKiBQcmludCBhIHdhcm5pbmcgbWVzc2FnZSB0byB0aGUgY29uc29sZS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbWVzc2FnZSBUaGUgbWVzc2FnZSB0byBiZSBwcmludGVkLlxuICogQG1lbWJlck9mIGx1bnIudXRpbHNcbiAqIEBmdW5jdGlvblxuICovXG5sdW5yLnV0aWxzLndhcm4gPSAoZnVuY3Rpb24gKGdsb2JhbCkge1xuICAvKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlICovXG4gIHJldHVybiBmdW5jdGlvbiAobWVzc2FnZSkge1xuICAgIGlmIChnbG9iYWwuY29uc29sZSAmJiBjb25zb2xlLndhcm4pIHtcbiAgICAgIGNvbnNvbGUud2FybihtZXNzYWdlKVxuICAgIH1cbiAgfVxuICAvKiBlc2xpbnQtZW5hYmxlIG5vLWNvbnNvbGUgKi9cbn0pKHRoaXMpXG5cbi8qKlxuICogQ29udmVydCBhbiBvYmplY3QgdG8gYSBzdHJpbmcuXG4gKlxuICogSW4gdGhlIGNhc2Ugb2YgYG51bGxgIGFuZCBgdW5kZWZpbmVkYCB0aGUgZnVuY3Rpb24gcmV0dXJuc1xuICogdGhlIGVtcHR5IHN0cmluZywgaW4gYWxsIG90aGVyIGNhc2VzIHRoZSByZXN1bHQgb2YgY2FsbGluZ1xuICogYHRvU3RyaW5nYCBvbiB0aGUgcGFzc2VkIG9iamVjdCBpcyByZXR1cm5lZC5cbiAqXG4gKiBAcGFyYW0ge0FueX0gb2JqIFRoZSBvYmplY3QgdG8gY29udmVydCB0byBhIHN0cmluZy5cbiAqIEByZXR1cm4ge1N0cmluZ30gc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBwYXNzZWQgb2JqZWN0LlxuICogQG1lbWJlck9mIGx1bnIudXRpbHNcbiAqL1xubHVuci51dGlscy5hc1N0cmluZyA9IGZ1bmN0aW9uIChvYmopIHtcbiAgaWYgKG9iaiA9PT0gdm9pZCAwIHx8IG9iaiA9PT0gbnVsbCkge1xuICAgIHJldHVybiBcIlwiXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG9iai50b1N0cmluZygpXG4gIH1cbn1cblxuLyoqXG4gKiBDbG9uZXMgYW4gb2JqZWN0LlxuICpcbiAqIFdpbGwgY3JlYXRlIGEgY29weSBvZiBhbiBleGlzdGluZyBvYmplY3Qgc3VjaCB0aGF0IGFueSBtdXRhdGlvbnNcbiAqIG9uIHRoZSBjb3B5IGNhbm5vdCBhZmZlY3QgdGhlIG9yaWdpbmFsLlxuICpcbiAqIE9ubHkgc2hhbGxvdyBvYmplY3RzIGFyZSBzdXBwb3J0ZWQsIHBhc3NpbmcgYSBuZXN0ZWQgb2JqZWN0IHRvIHRoaXNcbiAqIGZ1bmN0aW9uIHdpbGwgY2F1c2UgYSBUeXBlRXJyb3IuXG4gKlxuICogT2JqZWN0cyB3aXRoIHByaW1pdGl2ZXMsIGFuZCBhcnJheXMgb2YgcHJpbWl0aXZlcyBhcmUgc3VwcG9ydGVkLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmogVGhlIG9iamVjdCB0byBjbG9uZS5cbiAqIEByZXR1cm4ge09iamVjdH0gYSBjbG9uZSBvZiB0aGUgcGFzc2VkIG9iamVjdC5cbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gd2hlbiBhIG5lc3RlZCBvYmplY3QgaXMgcGFzc2VkLlxuICogQG1lbWJlck9mIFV0aWxzXG4gKi9cbmx1bnIudXRpbHMuY2xvbmUgPSBmdW5jdGlvbiAob2JqKSB7XG4gIGlmIChvYmogPT09IG51bGwgfHwgb2JqID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gb2JqXG4gIH1cblxuICB2YXIgY2xvbmUgPSBPYmplY3QuY3JlYXRlKG51bGwpLFxuICAgICAga2V5cyA9IE9iamVjdC5rZXlzKG9iailcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIga2V5ID0ga2V5c1tpXSxcbiAgICAgICAgdmFsID0gb2JqW2tleV1cblxuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbCkpIHtcbiAgICAgIGNsb25lW2tleV0gPSB2YWwuc2xpY2UoKVxuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHZhbCA9PT0gJ3N0cmluZycgfHxcbiAgICAgICAgdHlwZW9mIHZhbCA9PT0gJ251bWJlcicgfHxcbiAgICAgICAgdHlwZW9mIHZhbCA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICBjbG9uZVtrZXldID0gdmFsXG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJjbG9uZSBpcyBub3QgZGVlcCBhbmQgZG9lcyBub3Qgc3VwcG9ydCBuZXN0ZWQgb2JqZWN0c1wiKVxuICB9XG5cbiAgcmV0dXJuIGNsb25lXG59XG5sdW5yLkZpZWxkUmVmID0gZnVuY3Rpb24gKGRvY1JlZiwgZmllbGROYW1lLCBzdHJpbmdWYWx1ZSkge1xuICB0aGlzLmRvY1JlZiA9IGRvY1JlZlxuICB0aGlzLmZpZWxkTmFtZSA9IGZpZWxkTmFtZVxuICB0aGlzLl9zdHJpbmdWYWx1ZSA9IHN0cmluZ1ZhbHVlXG59XG5cbmx1bnIuRmllbGRSZWYuam9pbmVyID0gXCIvXCJcblxubHVuci5GaWVsZFJlZi5mcm9tU3RyaW5nID0gZnVuY3Rpb24gKHMpIHtcbiAgdmFyIG4gPSBzLmluZGV4T2YobHVuci5GaWVsZFJlZi5qb2luZXIpXG5cbiAgaWYgKG4gPT09IC0xKSB7XG4gICAgdGhyb3cgXCJtYWxmb3JtZWQgZmllbGQgcmVmIHN0cmluZ1wiXG4gIH1cblxuICB2YXIgZmllbGRSZWYgPSBzLnNsaWNlKDAsIG4pLFxuICAgICAgZG9jUmVmID0gcy5zbGljZShuICsgMSlcblxuICByZXR1cm4gbmV3IGx1bnIuRmllbGRSZWYgKGRvY1JlZiwgZmllbGRSZWYsIHMpXG59XG5cbmx1bnIuRmllbGRSZWYucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICBpZiAodGhpcy5fc3RyaW5nVmFsdWUgPT0gdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fc3RyaW5nVmFsdWUgPSB0aGlzLmZpZWxkTmFtZSArIGx1bnIuRmllbGRSZWYuam9pbmVyICsgdGhpcy5kb2NSZWZcbiAgfVxuXG4gIHJldHVybiB0aGlzLl9zdHJpbmdWYWx1ZVxufVxuLyohXG4gKiBsdW5yLlNldFxuICogQ29weXJpZ2h0IChDKSAyMDE4IE9saXZlciBOaWdodGluZ2FsZVxuICovXG5cbi8qKlxuICogQSBsdW5yIHNldC5cbiAqXG4gKiBAY29uc3RydWN0b3JcbiAqL1xubHVuci5TZXQgPSBmdW5jdGlvbiAoZWxlbWVudHMpIHtcbiAgdGhpcy5lbGVtZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbClcblxuICBpZiAoZWxlbWVudHMpIHtcbiAgICB0aGlzLmxlbmd0aCA9IGVsZW1lbnRzLmxlbmd0aFxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0aGlzLmVsZW1lbnRzW2VsZW1lbnRzW2ldXSA9IHRydWVcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5sZW5ndGggPSAwXG4gIH1cbn1cblxuLyoqXG4gKiBBIGNvbXBsZXRlIHNldCB0aGF0IGNvbnRhaW5zIGFsbCBlbGVtZW50cy5cbiAqXG4gKiBAc3RhdGljXG4gKiBAcmVhZG9ubHlcbiAqIEB0eXBlIHtsdW5yLlNldH1cbiAqL1xubHVuci5TZXQuY29tcGxldGUgPSB7XG4gIGludGVyc2VjdDogZnVuY3Rpb24gKG90aGVyKSB7XG4gICAgcmV0dXJuIG90aGVyXG4gIH0sXG5cbiAgdW5pb246IGZ1bmN0aW9uIChvdGhlcikge1xuICAgIHJldHVybiBvdGhlclxuICB9LFxuXG4gIGNvbnRhaW5zOiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRydWVcbiAgfVxufVxuXG4vKipcbiAqIEFuIGVtcHR5IHNldCB0aGF0IGNvbnRhaW5zIG5vIGVsZW1lbnRzLlxuICpcbiAqIEBzdGF0aWNcbiAqIEByZWFkb25seVxuICogQHR5cGUge2x1bnIuU2V0fVxuICovXG5sdW5yLlNldC5lbXB0eSA9IHtcbiAgaW50ZXJzZWN0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXNcbiAgfSxcblxuICB1bmlvbjogZnVuY3Rpb24gKG90aGVyKSB7XG4gICAgcmV0dXJuIG90aGVyXG4gIH0sXG5cbiAgY29udGFpbnM6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGlzIHNldCBjb250YWlucyB0aGUgc3BlY2lmaWVkIG9iamVjdC5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqZWN0IC0gT2JqZWN0IHdob3NlIHByZXNlbmNlIGluIHRoaXMgc2V0IGlzIHRvIGJlIHRlc3RlZC5cbiAqIEByZXR1cm5zIHtib29sZWFufSAtIFRydWUgaWYgdGhpcyBzZXQgY29udGFpbnMgdGhlIHNwZWNpZmllZCBvYmplY3QuXG4gKi9cbmx1bnIuU2V0LnByb3RvdHlwZS5jb250YWlucyA9IGZ1bmN0aW9uIChvYmplY3QpIHtcbiAgcmV0dXJuICEhdGhpcy5lbGVtZW50c1tvYmplY3RdXG59XG5cbi8qKlxuICogUmV0dXJucyBhIG5ldyBzZXQgY29udGFpbmluZyBvbmx5IHRoZSBlbGVtZW50cyB0aGF0IGFyZSBwcmVzZW50IGluIGJvdGhcbiAqIHRoaXMgc2V0IGFuZCB0aGUgc3BlY2lmaWVkIHNldC5cbiAqXG4gKiBAcGFyYW0ge2x1bnIuU2V0fSBvdGhlciAtIHNldCB0byBpbnRlcnNlY3Qgd2l0aCB0aGlzIHNldC5cbiAqIEByZXR1cm5zIHtsdW5yLlNldH0gYSBuZXcgc2V0IHRoYXQgaXMgdGhlIGludGVyc2VjdGlvbiBvZiB0aGlzIGFuZCB0aGUgc3BlY2lmaWVkIHNldC5cbiAqL1xuXG5sdW5yLlNldC5wcm90b3R5cGUuaW50ZXJzZWN0ID0gZnVuY3Rpb24gKG90aGVyKSB7XG4gIHZhciBhLCBiLCBlbGVtZW50cywgaW50ZXJzZWN0aW9uID0gW11cblxuICBpZiAob3RoZXIgPT09IGx1bnIuU2V0LmNvbXBsZXRlKSB7XG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIGlmIChvdGhlciA9PT0gbHVuci5TZXQuZW1wdHkpIHtcbiAgICByZXR1cm4gb3RoZXJcbiAgfVxuXG4gIGlmICh0aGlzLmxlbmd0aCA8IG90aGVyLmxlbmd0aCkge1xuICAgIGEgPSB0aGlzXG4gICAgYiA9IG90aGVyXG4gIH0gZWxzZSB7XG4gICAgYSA9IG90aGVyXG4gICAgYiA9IHRoaXNcbiAgfVxuXG4gIGVsZW1lbnRzID0gT2JqZWN0LmtleXMoYS5lbGVtZW50cylcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGVsZW1lbnQgPSBlbGVtZW50c1tpXVxuICAgIGlmIChlbGVtZW50IGluIGIuZWxlbWVudHMpIHtcbiAgICAgIGludGVyc2VjdGlvbi5wdXNoKGVsZW1lbnQpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5ldyBsdW5yLlNldCAoaW50ZXJzZWN0aW9uKVxufVxuXG4vKipcbiAqIFJldHVybnMgYSBuZXcgc2V0IGNvbWJpbmluZyB0aGUgZWxlbWVudHMgb2YgdGhpcyBhbmQgdGhlIHNwZWNpZmllZCBzZXQuXG4gKlxuICogQHBhcmFtIHtsdW5yLlNldH0gb3RoZXIgLSBzZXQgdG8gdW5pb24gd2l0aCB0aGlzIHNldC5cbiAqIEByZXR1cm4ge2x1bnIuU2V0fSBhIG5ldyBzZXQgdGhhdCBpcyB0aGUgdW5pb24gb2YgdGhpcyBhbmQgdGhlIHNwZWNpZmllZCBzZXQuXG4gKi9cblxubHVuci5TZXQucHJvdG90eXBlLnVuaW9uID0gZnVuY3Rpb24gKG90aGVyKSB7XG4gIGlmIChvdGhlciA9PT0gbHVuci5TZXQuY29tcGxldGUpIHtcbiAgICByZXR1cm4gbHVuci5TZXQuY29tcGxldGVcbiAgfVxuXG4gIGlmIChvdGhlciA9PT0gbHVuci5TZXQuZW1wdHkpIHtcbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgcmV0dXJuIG5ldyBsdW5yLlNldChPYmplY3Qua2V5cyh0aGlzLmVsZW1lbnRzKS5jb25jYXQoT2JqZWN0LmtleXMob3RoZXIuZWxlbWVudHMpKSlcbn1cbi8qKlxuICogQSBmdW5jdGlvbiB0byBjYWxjdWxhdGUgdGhlIGludmVyc2UgZG9jdW1lbnQgZnJlcXVlbmN5IGZvclxuICogYSBwb3N0aW5nLiBUaGlzIGlzIHNoYXJlZCBiZXR3ZWVuIHRoZSBidWlsZGVyIGFuZCB0aGUgaW5kZXhcbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtvYmplY3R9IHBvc3RpbmcgLSBUaGUgcG9zdGluZyBmb3IgYSBnaXZlbiB0ZXJtXG4gKiBAcGFyYW0ge251bWJlcn0gZG9jdW1lbnRDb3VudCAtIFRoZSB0b3RhbCBudW1iZXIgb2YgZG9jdW1lbnRzLlxuICovXG5sdW5yLmlkZiA9IGZ1bmN0aW9uIChwb3N0aW5nLCBkb2N1bWVudENvdW50KSB7XG4gIHZhciBkb2N1bWVudHNXaXRoVGVybSA9IDBcblxuICBmb3IgKHZhciBmaWVsZE5hbWUgaW4gcG9zdGluZykge1xuICAgIGlmIChmaWVsZE5hbWUgPT0gJ19pbmRleCcpIGNvbnRpbnVlIC8vIElnbm9yZSB0aGUgdGVybSBpbmRleCwgaXRzIG5vdCBhIGZpZWxkXG4gICAgZG9jdW1lbnRzV2l0aFRlcm0gKz0gT2JqZWN0LmtleXMocG9zdGluZ1tmaWVsZE5hbWVdKS5sZW5ndGhcbiAgfVxuXG4gIHZhciB4ID0gKGRvY3VtZW50Q291bnQgLSBkb2N1bWVudHNXaXRoVGVybSArIDAuNSkgLyAoZG9jdW1lbnRzV2l0aFRlcm0gKyAwLjUpXG5cbiAgcmV0dXJuIE1hdGgubG9nKDEgKyBNYXRoLmFicyh4KSlcbn1cblxuLyoqXG4gKiBBIHRva2VuIHdyYXBzIGEgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIGEgdG9rZW5cbiAqIGFzIGl0IGlzIHBhc3NlZCB0aHJvdWdoIHRoZSB0ZXh0IHByb2Nlc3NpbmcgcGlwZWxpbmUuXG4gKlxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge3N0cmluZ30gW3N0cj0nJ10gLSBUaGUgc3RyaW5nIHRva2VuIGJlaW5nIHdyYXBwZWQuXG4gKiBAcGFyYW0ge29iamVjdH0gW21ldGFkYXRhPXt9XSAtIE1ldGFkYXRhIGFzc29jaWF0ZWQgd2l0aCB0aGlzIHRva2VuLlxuICovXG5sdW5yLlRva2VuID0gZnVuY3Rpb24gKHN0ciwgbWV0YWRhdGEpIHtcbiAgdGhpcy5zdHIgPSBzdHIgfHwgXCJcIlxuICB0aGlzLm1ldGFkYXRhID0gbWV0YWRhdGEgfHwge31cbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSB0b2tlbiBzdHJpbmcgdGhhdCBpcyBiZWluZyB3cmFwcGVkIGJ5IHRoaXMgb2JqZWN0LlxuICpcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmx1bnIuVG9rZW4ucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5zdHJcbn1cblxuLyoqXG4gKiBBIHRva2VuIHVwZGF0ZSBmdW5jdGlvbiBpcyB1c2VkIHdoZW4gdXBkYXRpbmcgb3Igb3B0aW9uYWxseVxuICogd2hlbiBjbG9uaW5nIGEgdG9rZW4uXG4gKlxuICogQGNhbGxiYWNrIGx1bnIuVG9rZW5+dXBkYXRlRnVuY3Rpb25cbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHIgLSBUaGUgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSB0b2tlbi5cbiAqIEBwYXJhbSB7T2JqZWN0fSBtZXRhZGF0YSAtIEFsbCBtZXRhZGF0YSBhc3NvY2lhdGVkIHdpdGggdGhpcyB0b2tlbi5cbiAqL1xuXG4vKipcbiAqIEFwcGxpZXMgdGhlIGdpdmVuIGZ1bmN0aW9uIHRvIHRoZSB3cmFwcGVkIHN0cmluZyB0b2tlbi5cbiAqXG4gKiBAZXhhbXBsZVxuICogdG9rZW4udXBkYXRlKGZ1bmN0aW9uIChzdHIsIG1ldGFkYXRhKSB7XG4gKiAgIHJldHVybiBzdHIudG9VcHBlckNhc2UoKVxuICogfSlcbiAqXG4gKiBAcGFyYW0ge2x1bnIuVG9rZW5+dXBkYXRlRnVuY3Rpb259IGZuIC0gQSBmdW5jdGlvbiB0byBhcHBseSB0byB0aGUgdG9rZW4gc3RyaW5nLlxuICogQHJldHVybnMge2x1bnIuVG9rZW59XG4gKi9cbmx1bnIuVG9rZW4ucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uIChmbikge1xuICB0aGlzLnN0ciA9IGZuKHRoaXMuc3RyLCB0aGlzLm1ldGFkYXRhKVxuICByZXR1cm4gdGhpc1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBjbG9uZSBvZiB0aGlzIHRva2VuLiBPcHRpb25hbGx5IGEgZnVuY3Rpb24gY2FuIGJlXG4gKiBhcHBsaWVkIHRvIHRoZSBjbG9uZWQgdG9rZW4uXG4gKlxuICogQHBhcmFtIHtsdW5yLlRva2VufnVwZGF0ZUZ1bmN0aW9ufSBbZm5dIC0gQW4gb3B0aW9uYWwgZnVuY3Rpb24gdG8gYXBwbHkgdG8gdGhlIGNsb25lZCB0b2tlbi5cbiAqIEByZXR1cm5zIHtsdW5yLlRva2VufVxuICovXG5sdW5yLlRva2VuLnByb3RvdHlwZS5jbG9uZSA9IGZ1bmN0aW9uIChmbikge1xuICBmbiA9IGZuIHx8IGZ1bmN0aW9uIChzKSB7IHJldHVybiBzIH1cbiAgcmV0dXJuIG5ldyBsdW5yLlRva2VuIChmbih0aGlzLnN0ciwgdGhpcy5tZXRhZGF0YSksIHRoaXMubWV0YWRhdGEpXG59XG4vKiFcbiAqIGx1bnIudG9rZW5pemVyXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTggT2xpdmVyIE5pZ2h0aW5nYWxlXG4gKi9cblxuLyoqXG4gKiBBIGZ1bmN0aW9uIGZvciBzcGxpdHRpbmcgYSBzdHJpbmcgaW50byB0b2tlbnMgcmVhZHkgdG8gYmUgaW5zZXJ0ZWQgaW50b1xuICogdGhlIHNlYXJjaCBpbmRleC4gVXNlcyBgbHVuci50b2tlbml6ZXIuc2VwYXJhdG9yYCB0byBzcGxpdCBzdHJpbmdzLCBjaGFuZ2VcbiAqIHRoZSB2YWx1ZSBvZiB0aGlzIHByb3BlcnR5IHRvIGNoYW5nZSBob3cgc3RyaW5ncyBhcmUgc3BsaXQgaW50byB0b2tlbnMuXG4gKlxuICogVGhpcyB0b2tlbml6ZXIgd2lsbCBjb252ZXJ0IGl0cyBwYXJhbWV0ZXIgdG8gYSBzdHJpbmcgYnkgY2FsbGluZyBgdG9TdHJpbmdgIGFuZFxuICogdGhlbiB3aWxsIHNwbGl0IHRoaXMgc3RyaW5nIG9uIHRoZSBjaGFyYWN0ZXIgaW4gYGx1bnIudG9rZW5pemVyLnNlcGFyYXRvcmAuXG4gKiBBcnJheXMgd2lsbCBoYXZlIHRoZWlyIGVsZW1lbnRzIGNvbnZlcnRlZCB0byBzdHJpbmdzIGFuZCB3cmFwcGVkIGluIGEgbHVuci5Ub2tlbi5cbiAqXG4gKiBPcHRpb25hbCBtZXRhZGF0YSBjYW4gYmUgcGFzc2VkIHRvIHRoZSB0b2tlbml6ZXIsIHRoaXMgbWV0YWRhdGEgd2lsbCBiZSBjbG9uZWQgYW5kXG4gKiBhZGRlZCBhcyBtZXRhZGF0YSB0byBldmVyeSB0b2tlbiB0aGF0IGlzIGNyZWF0ZWQgZnJvbSB0aGUgb2JqZWN0IHRvIGJlIHRva2VuaXplZC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAcGFyYW0gez8oc3RyaW5nfG9iamVjdHxvYmplY3RbXSl9IG9iaiAtIFRoZSBvYmplY3QgdG8gY29udmVydCBpbnRvIHRva2Vuc1xuICogQHBhcmFtIHs/b2JqZWN0fSBtZXRhZGF0YSAtIE9wdGlvbmFsIG1ldGFkYXRhIHRvIGFzc29jaWF0ZSB3aXRoIGV2ZXJ5IHRva2VuXG4gKiBAcmV0dXJucyB7bHVuci5Ub2tlbltdfVxuICogQHNlZSB7QGxpbmsgbHVuci5QaXBlbGluZX1cbiAqL1xubHVuci50b2tlbml6ZXIgPSBmdW5jdGlvbiAob2JqLCBtZXRhZGF0YSkge1xuICBpZiAob2JqID09IG51bGwgfHwgb2JqID09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBbXVxuICB9XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkob2JqKSkge1xuICAgIHJldHVybiBvYmoubWFwKGZ1bmN0aW9uICh0KSB7XG4gICAgICByZXR1cm4gbmV3IGx1bnIuVG9rZW4oXG4gICAgICAgIGx1bnIudXRpbHMuYXNTdHJpbmcodCkudG9Mb3dlckNhc2UoKSxcbiAgICAgICAgbHVuci51dGlscy5jbG9uZShtZXRhZGF0YSlcbiAgICAgIClcbiAgICB9KVxuICB9XG5cbiAgdmFyIHN0ciA9IG9iai50b1N0cmluZygpLnRyaW0oKS50b0xvd2VyQ2FzZSgpLFxuICAgICAgbGVuID0gc3RyLmxlbmd0aCxcbiAgICAgIHRva2VucyA9IFtdXG5cbiAgZm9yICh2YXIgc2xpY2VFbmQgPSAwLCBzbGljZVN0YXJ0ID0gMDsgc2xpY2VFbmQgPD0gbGVuOyBzbGljZUVuZCsrKSB7XG4gICAgdmFyIGNoYXIgPSBzdHIuY2hhckF0KHNsaWNlRW5kKSxcbiAgICAgICAgc2xpY2VMZW5ndGggPSBzbGljZUVuZCAtIHNsaWNlU3RhcnRcblxuICAgIGlmICgoY2hhci5tYXRjaChsdW5yLnRva2VuaXplci5zZXBhcmF0b3IpIHx8IHNsaWNlRW5kID09IGxlbikpIHtcblxuICAgICAgaWYgKHNsaWNlTGVuZ3RoID4gMCkge1xuICAgICAgICB2YXIgdG9rZW5NZXRhZGF0YSA9IGx1bnIudXRpbHMuY2xvbmUobWV0YWRhdGEpIHx8IHt9XG4gICAgICAgIHRva2VuTWV0YWRhdGFbXCJwb3NpdGlvblwiXSA9IFtzbGljZVN0YXJ0LCBzbGljZUxlbmd0aF1cbiAgICAgICAgdG9rZW5NZXRhZGF0YVtcImluZGV4XCJdID0gdG9rZW5zLmxlbmd0aFxuXG4gICAgICAgIHRva2Vucy5wdXNoKFxuICAgICAgICAgIG5ldyBsdW5yLlRva2VuIChcbiAgICAgICAgICAgIHN0ci5zbGljZShzbGljZVN0YXJ0LCBzbGljZUVuZCksXG4gICAgICAgICAgICB0b2tlbk1ldGFkYXRhXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHNsaWNlU3RhcnQgPSBzbGljZUVuZCArIDFcbiAgICB9XG5cbiAgfVxuXG4gIHJldHVybiB0b2tlbnNcbn1cblxuLyoqXG4gKiBUaGUgc2VwYXJhdG9yIHVzZWQgdG8gc3BsaXQgYSBzdHJpbmcgaW50byB0b2tlbnMuIE92ZXJyaWRlIHRoaXMgcHJvcGVydHkgdG8gY2hhbmdlIHRoZSBiZWhhdmlvdXIgb2ZcbiAqIGBsdW5yLnRva2VuaXplcmAgYmVoYXZpb3VyIHdoZW4gdG9rZW5pemluZyBzdHJpbmdzLiBCeSBkZWZhdWx0IHRoaXMgc3BsaXRzIG9uIHdoaXRlc3BhY2UgYW5kIGh5cGhlbnMuXG4gKlxuICogQHN0YXRpY1xuICogQHNlZSBsdW5yLnRva2VuaXplclxuICovXG5sdW5yLnRva2VuaXplci5zZXBhcmF0b3IgPSAvW1xcc1xcLV0rL1xuLyohXG4gKiBsdW5yLlBpcGVsaW5lXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTggT2xpdmVyIE5pZ2h0aW5nYWxlXG4gKi9cblxuLyoqXG4gKiBsdW5yLlBpcGVsaW5lcyBtYWludGFpbiBhbiBvcmRlcmVkIGxpc3Qgb2YgZnVuY3Rpb25zIHRvIGJlIGFwcGxpZWQgdG8gYWxsXG4gKiB0b2tlbnMgaW4gZG9jdW1lbnRzIGVudGVyaW5nIHRoZSBzZWFyY2ggaW5kZXggYW5kIHF1ZXJpZXMgYmVpbmcgcmFuIGFnYWluc3RcbiAqIHRoZSBpbmRleC5cbiAqXG4gKiBBbiBpbnN0YW5jZSBvZiBsdW5yLkluZGV4IGNyZWF0ZWQgd2l0aCB0aGUgbHVuciBzaG9ydGN1dCB3aWxsIGNvbnRhaW4gYVxuICogcGlwZWxpbmUgd2l0aCBhIHN0b3Agd29yZCBmaWx0ZXIgYW5kIGFuIEVuZ2xpc2ggbGFuZ3VhZ2Ugc3RlbW1lci4gRXh0cmFcbiAqIGZ1bmN0aW9ucyBjYW4gYmUgYWRkZWQgYmVmb3JlIG9yIGFmdGVyIGVpdGhlciBvZiB0aGVzZSBmdW5jdGlvbnMgb3IgdGhlc2VcbiAqIGRlZmF1bHQgZnVuY3Rpb25zIGNhbiBiZSByZW1vdmVkLlxuICpcbiAqIFdoZW4gcnVuIHRoZSBwaXBlbGluZSB3aWxsIGNhbGwgZWFjaCBmdW5jdGlvbiBpbiB0dXJuLCBwYXNzaW5nIGEgdG9rZW4sIHRoZVxuICogaW5kZXggb2YgdGhhdCB0b2tlbiBpbiB0aGUgb3JpZ2luYWwgbGlzdCBvZiBhbGwgdG9rZW5zIGFuZCBmaW5hbGx5IGEgbGlzdCBvZlxuICogYWxsIHRoZSBvcmlnaW5hbCB0b2tlbnMuXG4gKlxuICogVGhlIG91dHB1dCBvZiBmdW5jdGlvbnMgaW4gdGhlIHBpcGVsaW5lIHdpbGwgYmUgcGFzc2VkIHRvIHRoZSBuZXh0IGZ1bmN0aW9uXG4gKiBpbiB0aGUgcGlwZWxpbmUuIFRvIGV4Y2x1ZGUgYSB0b2tlbiBmcm9tIGVudGVyaW5nIHRoZSBpbmRleCB0aGUgZnVuY3Rpb25cbiAqIHNob3VsZCByZXR1cm4gdW5kZWZpbmVkLCB0aGUgcmVzdCBvZiB0aGUgcGlwZWxpbmUgd2lsbCBub3QgYmUgY2FsbGVkIHdpdGhcbiAqIHRoaXMgdG9rZW4uXG4gKlxuICogRm9yIHNlcmlhbGlzYXRpb24gb2YgcGlwZWxpbmVzIHRvIHdvcmssIGFsbCBmdW5jdGlvbnMgdXNlZCBpbiBhbiBpbnN0YW5jZSBvZlxuICogYSBwaXBlbGluZSBzaG91bGQgYmUgcmVnaXN0ZXJlZCB3aXRoIGx1bnIuUGlwZWxpbmUuIFJlZ2lzdGVyZWQgZnVuY3Rpb25zIGNhblxuICogdGhlbiBiZSBsb2FkZWQuIElmIHRyeWluZyB0byBsb2FkIGEgc2VyaWFsaXNlZCBwaXBlbGluZSB0aGF0IHVzZXMgZnVuY3Rpb25zXG4gKiB0aGF0IGFyZSBub3QgcmVnaXN0ZXJlZCBhbiBlcnJvciB3aWxsIGJlIHRocm93bi5cbiAqXG4gKiBJZiBub3QgcGxhbm5pbmcgb24gc2VyaWFsaXNpbmcgdGhlIHBpcGVsaW5lIHRoZW4gcmVnaXN0ZXJpbmcgcGlwZWxpbmUgZnVuY3Rpb25zXG4gKiBpcyBub3QgbmVjZXNzYXJ5LlxuICpcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5sdW5yLlBpcGVsaW5lID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLl9zdGFjayA9IFtdXG59XG5cbmx1bnIuUGlwZWxpbmUucmVnaXN0ZXJlZEZ1bmN0aW9ucyA9IE9iamVjdC5jcmVhdGUobnVsbClcblxuLyoqXG4gKiBBIHBpcGVsaW5lIGZ1bmN0aW9uIG1hcHMgbHVuci5Ub2tlbiB0byBsdW5yLlRva2VuLiBBIGx1bnIuVG9rZW4gY29udGFpbnMgdGhlIHRva2VuXG4gKiBzdHJpbmcgYXMgd2VsbCBhcyBhbGwga25vd24gbWV0YWRhdGEuIEEgcGlwZWxpbmUgZnVuY3Rpb24gY2FuIG11dGF0ZSB0aGUgdG9rZW4gc3RyaW5nXG4gKiBvciBtdXRhdGUgKG9yIGFkZCkgbWV0YWRhdGEgZm9yIGEgZ2l2ZW4gdG9rZW4uXG4gKlxuICogQSBwaXBlbGluZSBmdW5jdGlvbiBjYW4gaW5kaWNhdGUgdGhhdCB0aGUgcGFzc2VkIHRva2VuIHNob3VsZCBiZSBkaXNjYXJkZWQgYnkgcmV0dXJuaW5nXG4gKiBudWxsLiBUaGlzIHRva2VuIHdpbGwgbm90IGJlIHBhc3NlZCB0byBhbnkgZG93bnN0cmVhbSBwaXBlbGluZSBmdW5jdGlvbnMgYW5kIHdpbGwgbm90IGJlXG4gKiBhZGRlZCB0byB0aGUgaW5kZXguXG4gKlxuICogTXVsdGlwbGUgdG9rZW5zIGNhbiBiZSByZXR1cm5lZCBieSByZXR1cm5pbmcgYW4gYXJyYXkgb2YgdG9rZW5zLiBFYWNoIHRva2VuIHdpbGwgYmUgcGFzc2VkXG4gKiB0byBhbnkgZG93bnN0cmVhbSBwaXBlbGluZSBmdW5jdGlvbnMgYW5kIGFsbCB3aWxsIHJldHVybmVkIHRva2VucyB3aWxsIGJlIGFkZGVkIHRvIHRoZSBpbmRleC5cbiAqXG4gKiBBbnkgbnVtYmVyIG9mIHBpcGVsaW5lIGZ1bmN0aW9ucyBtYXkgYmUgY2hhaW5lZCB0b2dldGhlciB1c2luZyBhIGx1bnIuUGlwZWxpbmUuXG4gKlxuICogQGludGVyZmFjZSBsdW5yLlBpcGVsaW5lRnVuY3Rpb25cbiAqIEBwYXJhbSB7bHVuci5Ub2tlbn0gdG9rZW4gLSBBIHRva2VuIGZyb20gdGhlIGRvY3VtZW50IGJlaW5nIHByb2Nlc3NlZC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBpIC0gVGhlIGluZGV4IG9mIHRoaXMgdG9rZW4gaW4gdGhlIGNvbXBsZXRlIGxpc3Qgb2YgdG9rZW5zIGZvciB0aGlzIGRvY3VtZW50L2ZpZWxkLlxuICogQHBhcmFtIHtsdW5yLlRva2VuW119IHRva2VucyAtIEFsbCB0b2tlbnMgZm9yIHRoaXMgZG9jdW1lbnQvZmllbGQuXG4gKiBAcmV0dXJucyB7KD9sdW5yLlRva2VufGx1bnIuVG9rZW5bXSl9XG4gKi9cblxuLyoqXG4gKiBSZWdpc3RlciBhIGZ1bmN0aW9uIHdpdGggdGhlIHBpcGVsaW5lLlxuICpcbiAqIEZ1bmN0aW9ucyB0aGF0IGFyZSB1c2VkIGluIHRoZSBwaXBlbGluZSBzaG91bGQgYmUgcmVnaXN0ZXJlZCBpZiB0aGUgcGlwZWxpbmVcbiAqIG5lZWRzIHRvIGJlIHNlcmlhbGlzZWQsIG9yIGEgc2VyaWFsaXNlZCBwaXBlbGluZSBuZWVkcyB0byBiZSBsb2FkZWQuXG4gKlxuICogUmVnaXN0ZXJpbmcgYSBmdW5jdGlvbiBkb2VzIG5vdCBhZGQgaXQgdG8gYSBwaXBlbGluZSwgZnVuY3Rpb25zIG11c3Qgc3RpbGwgYmVcbiAqIGFkZGVkIHRvIGluc3RhbmNlcyBvZiB0aGUgcGlwZWxpbmUgZm9yIHRoZW0gdG8gYmUgdXNlZCB3aGVuIHJ1bm5pbmcgYSBwaXBlbGluZS5cbiAqXG4gKiBAcGFyYW0ge2x1bnIuUGlwZWxpbmVGdW5jdGlvbn0gZm4gLSBUaGUgZnVuY3Rpb24gdG8gY2hlY2sgZm9yLlxuICogQHBhcmFtIHtTdHJpbmd9IGxhYmVsIC0gVGhlIGxhYmVsIHRvIHJlZ2lzdGVyIHRoaXMgZnVuY3Rpb24gd2l0aFxuICovXG5sdW5yLlBpcGVsaW5lLnJlZ2lzdGVyRnVuY3Rpb24gPSBmdW5jdGlvbiAoZm4sIGxhYmVsKSB7XG4gIGlmIChsYWJlbCBpbiB0aGlzLnJlZ2lzdGVyZWRGdW5jdGlvbnMpIHtcbiAgICBsdW5yLnV0aWxzLndhcm4oJ092ZXJ3cml0aW5nIGV4aXN0aW5nIHJlZ2lzdGVyZWQgZnVuY3Rpb246ICcgKyBsYWJlbClcbiAgfVxuXG4gIGZuLmxhYmVsID0gbGFiZWxcbiAgbHVuci5QaXBlbGluZS5yZWdpc3RlcmVkRnVuY3Rpb25zW2ZuLmxhYmVsXSA9IGZuXG59XG5cbi8qKlxuICogV2FybnMgaWYgdGhlIGZ1bmN0aW9uIGlzIG5vdCByZWdpc3RlcmVkIGFzIGEgUGlwZWxpbmUgZnVuY3Rpb24uXG4gKlxuICogQHBhcmFtIHtsdW5yLlBpcGVsaW5lRnVuY3Rpb259IGZuIC0gVGhlIGZ1bmN0aW9uIHRvIGNoZWNrIGZvci5cbiAqIEBwcml2YXRlXG4gKi9cbmx1bnIuUGlwZWxpbmUud2FybklmRnVuY3Rpb25Ob3RSZWdpc3RlcmVkID0gZnVuY3Rpb24gKGZuKSB7XG4gIHZhciBpc1JlZ2lzdGVyZWQgPSBmbi5sYWJlbCAmJiAoZm4ubGFiZWwgaW4gdGhpcy5yZWdpc3RlcmVkRnVuY3Rpb25zKVxuXG4gIGlmICghaXNSZWdpc3RlcmVkKSB7XG4gICAgbHVuci51dGlscy53YXJuKCdGdW5jdGlvbiBpcyBub3QgcmVnaXN0ZXJlZCB3aXRoIHBpcGVsaW5lLiBUaGlzIG1heSBjYXVzZSBwcm9ibGVtcyB3aGVuIHNlcmlhbGlzaW5nIHRoZSBpbmRleC5cXG4nLCBmbilcbiAgfVxufVxuXG4vKipcbiAqIExvYWRzIGEgcHJldmlvdXNseSBzZXJpYWxpc2VkIHBpcGVsaW5lLlxuICpcbiAqIEFsbCBmdW5jdGlvbnMgdG8gYmUgbG9hZGVkIG11c3QgYWxyZWFkeSBiZSByZWdpc3RlcmVkIHdpdGggbHVuci5QaXBlbGluZS5cbiAqIElmIGFueSBmdW5jdGlvbiBmcm9tIHRoZSBzZXJpYWxpc2VkIGRhdGEgaGFzIG5vdCBiZWVuIHJlZ2lzdGVyZWQgdGhlbiBhblxuICogZXJyb3Igd2lsbCBiZSB0aHJvd24uXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHNlcmlhbGlzZWQgLSBUaGUgc2VyaWFsaXNlZCBwaXBlbGluZSB0byBsb2FkLlxuICogQHJldHVybnMge2x1bnIuUGlwZWxpbmV9XG4gKi9cbmx1bnIuUGlwZWxpbmUubG9hZCA9IGZ1bmN0aW9uIChzZXJpYWxpc2VkKSB7XG4gIHZhciBwaXBlbGluZSA9IG5ldyBsdW5yLlBpcGVsaW5lXG5cbiAgc2VyaWFsaXNlZC5mb3JFYWNoKGZ1bmN0aW9uIChmbk5hbWUpIHtcbiAgICB2YXIgZm4gPSBsdW5yLlBpcGVsaW5lLnJlZ2lzdGVyZWRGdW5jdGlvbnNbZm5OYW1lXVxuXG4gICAgaWYgKGZuKSB7XG4gICAgICBwaXBlbGluZS5hZGQoZm4pXG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQ2Fubm90IGxvYWQgdW5yZWdpc3RlcmVkIGZ1bmN0aW9uOiAnICsgZm5OYW1lKVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4gcGlwZWxpbmVcbn1cblxuLyoqXG4gKiBBZGRzIG5ldyBmdW5jdGlvbnMgdG8gdGhlIGVuZCBvZiB0aGUgcGlwZWxpbmUuXG4gKlxuICogTG9ncyBhIHdhcm5pbmcgaWYgdGhlIGZ1bmN0aW9uIGhhcyBub3QgYmVlbiByZWdpc3RlcmVkLlxuICpcbiAqIEBwYXJhbSB7bHVuci5QaXBlbGluZUZ1bmN0aW9uW119IGZ1bmN0aW9ucyAtIEFueSBudW1iZXIgb2YgZnVuY3Rpb25zIHRvIGFkZCB0byB0aGUgcGlwZWxpbmUuXG4gKi9cbmx1bnIuUGlwZWxpbmUucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGZucyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cylcblxuICBmbnMuZm9yRWFjaChmdW5jdGlvbiAoZm4pIHtcbiAgICBsdW5yLlBpcGVsaW5lLndhcm5JZkZ1bmN0aW9uTm90UmVnaXN0ZXJlZChmbilcbiAgICB0aGlzLl9zdGFjay5wdXNoKGZuKVxuICB9LCB0aGlzKVxufVxuXG4vKipcbiAqIEFkZHMgYSBzaW5nbGUgZnVuY3Rpb24gYWZ0ZXIgYSBmdW5jdGlvbiB0aGF0IGFscmVhZHkgZXhpc3RzIGluIHRoZVxuICogcGlwZWxpbmUuXG4gKlxuICogTG9ncyBhIHdhcm5pbmcgaWYgdGhlIGZ1bmN0aW9uIGhhcyBub3QgYmVlbiByZWdpc3RlcmVkLlxuICpcbiAqIEBwYXJhbSB7bHVuci5QaXBlbGluZUZ1bmN0aW9ufSBleGlzdGluZ0ZuIC0gQSBmdW5jdGlvbiB0aGF0IGFscmVhZHkgZXhpc3RzIGluIHRoZSBwaXBlbGluZS5cbiAqIEBwYXJhbSB7bHVuci5QaXBlbGluZUZ1bmN0aW9ufSBuZXdGbiAtIFRoZSBuZXcgZnVuY3Rpb24gdG8gYWRkIHRvIHRoZSBwaXBlbGluZS5cbiAqL1xubHVuci5QaXBlbGluZS5wcm90b3R5cGUuYWZ0ZXIgPSBmdW5jdGlvbiAoZXhpc3RpbmdGbiwgbmV3Rm4pIHtcbiAgbHVuci5QaXBlbGluZS53YXJuSWZGdW5jdGlvbk5vdFJlZ2lzdGVyZWQobmV3Rm4pXG5cbiAgdmFyIHBvcyA9IHRoaXMuX3N0YWNrLmluZGV4T2YoZXhpc3RpbmdGbilcbiAgaWYgKHBvcyA9PSAtMSkge1xuICAgIHRocm93IG5ldyBFcnJvcignQ2Fubm90IGZpbmQgZXhpc3RpbmdGbicpXG4gIH1cblxuICBwb3MgPSBwb3MgKyAxXG4gIHRoaXMuX3N0YWNrLnNwbGljZShwb3MsIDAsIG5ld0ZuKVxufVxuXG4vKipcbiAqIEFkZHMgYSBzaW5nbGUgZnVuY3Rpb24gYmVmb3JlIGEgZnVuY3Rpb24gdGhhdCBhbHJlYWR5IGV4aXN0cyBpbiB0aGVcbiAqIHBpcGVsaW5lLlxuICpcbiAqIExvZ3MgYSB3YXJuaW5nIGlmIHRoZSBmdW5jdGlvbiBoYXMgbm90IGJlZW4gcmVnaXN0ZXJlZC5cbiAqXG4gKiBAcGFyYW0ge2x1bnIuUGlwZWxpbmVGdW5jdGlvbn0gZXhpc3RpbmdGbiAtIEEgZnVuY3Rpb24gdGhhdCBhbHJlYWR5IGV4aXN0cyBpbiB0aGUgcGlwZWxpbmUuXG4gKiBAcGFyYW0ge2x1bnIuUGlwZWxpbmVGdW5jdGlvbn0gbmV3Rm4gLSBUaGUgbmV3IGZ1bmN0aW9uIHRvIGFkZCB0byB0aGUgcGlwZWxpbmUuXG4gKi9cbmx1bnIuUGlwZWxpbmUucHJvdG90eXBlLmJlZm9yZSA9IGZ1bmN0aW9uIChleGlzdGluZ0ZuLCBuZXdGbikge1xuICBsdW5yLlBpcGVsaW5lLndhcm5JZkZ1bmN0aW9uTm90UmVnaXN0ZXJlZChuZXdGbilcblxuICB2YXIgcG9zID0gdGhpcy5fc3RhY2suaW5kZXhPZihleGlzdGluZ0ZuKVxuICBpZiAocG9zID09IC0xKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgZmluZCBleGlzdGluZ0ZuJylcbiAgfVxuXG4gIHRoaXMuX3N0YWNrLnNwbGljZShwb3MsIDAsIG5ld0ZuKVxufVxuXG4vKipcbiAqIFJlbW92ZXMgYSBmdW5jdGlvbiBmcm9tIHRoZSBwaXBlbGluZS5cbiAqXG4gKiBAcGFyYW0ge2x1bnIuUGlwZWxpbmVGdW5jdGlvbn0gZm4gVGhlIGZ1bmN0aW9uIHRvIHJlbW92ZSBmcm9tIHRoZSBwaXBlbGluZS5cbiAqL1xubHVuci5QaXBlbGluZS5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24gKGZuKSB7XG4gIHZhciBwb3MgPSB0aGlzLl9zdGFjay5pbmRleE9mKGZuKVxuICBpZiAocG9zID09IC0xKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICB0aGlzLl9zdGFjay5zcGxpY2UocG9zLCAxKVxufVxuXG4vKipcbiAqIFJ1bnMgdGhlIGN1cnJlbnQgbGlzdCBvZiBmdW5jdGlvbnMgdGhhdCBtYWtlIHVwIHRoZSBwaXBlbGluZSBhZ2FpbnN0IHRoZVxuICogcGFzc2VkIHRva2Vucy5cbiAqXG4gKiBAcGFyYW0ge0FycmF5fSB0b2tlbnMgVGhlIHRva2VucyB0byBydW4gdGhyb3VnaCB0aGUgcGlwZWxpbmUuXG4gKiBAcmV0dXJucyB7QXJyYXl9XG4gKi9cbmx1bnIuUGlwZWxpbmUucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICh0b2tlbnMpIHtcbiAgdmFyIHN0YWNrTGVuZ3RoID0gdGhpcy5fc3RhY2subGVuZ3RoXG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdGFja0xlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGZuID0gdGhpcy5fc3RhY2tbaV1cbiAgICB2YXIgbWVtbyA9IFtdXG5cbiAgICBmb3IgKHZhciBqID0gMDsgaiA8IHRva2Vucy5sZW5ndGg7IGorKykge1xuICAgICAgdmFyIHJlc3VsdCA9IGZuKHRva2Vuc1tqXSwgaiwgdG9rZW5zKVxuXG4gICAgICBpZiAocmVzdWx0ID09PSB2b2lkIDAgfHwgcmVzdWx0ID09PSAnJykgY29udGludWVcblxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkocmVzdWx0KSkge1xuICAgICAgICBmb3IgKHZhciBrID0gMDsgayA8IHJlc3VsdC5sZW5ndGg7IGsrKykge1xuICAgICAgICAgIG1lbW8ucHVzaChyZXN1bHRba10pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1lbW8ucHVzaChyZXN1bHQpXG4gICAgICB9XG4gICAgfVxuXG4gICAgdG9rZW5zID0gbWVtb1xuICB9XG5cbiAgcmV0dXJuIHRva2Vuc1xufVxuXG4vKipcbiAqIENvbnZlbmllbmNlIG1ldGhvZCBmb3IgcGFzc2luZyBhIHN0cmluZyB0aHJvdWdoIGEgcGlwZWxpbmUgYW5kIGdldHRpbmdcbiAqIHN0cmluZ3Mgb3V0LiBUaGlzIG1ldGhvZCB0YWtlcyBjYXJlIG9mIHdyYXBwaW5nIHRoZSBwYXNzZWQgc3RyaW5nIGluIGFcbiAqIHRva2VuIGFuZCBtYXBwaW5nIHRoZSByZXN1bHRpbmcgdG9rZW5zIGJhY2sgdG8gc3RyaW5ncy5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyIC0gVGhlIHN0cmluZyB0byBwYXNzIHRocm91Z2ggdGhlIHBpcGVsaW5lLlxuICogQHBhcmFtIHs/b2JqZWN0fSBtZXRhZGF0YSAtIE9wdGlvbmFsIG1ldGFkYXRhIHRvIGFzc29jaWF0ZSB3aXRoIHRoZSB0b2tlblxuICogcGFzc2VkIHRvIHRoZSBwaXBlbGluZS5cbiAqIEByZXR1cm5zIHtzdHJpbmdbXX1cbiAqL1xubHVuci5QaXBlbGluZS5wcm90b3R5cGUucnVuU3RyaW5nID0gZnVuY3Rpb24gKHN0ciwgbWV0YWRhdGEpIHtcbiAgdmFyIHRva2VuID0gbmV3IGx1bnIuVG9rZW4gKHN0ciwgbWV0YWRhdGEpXG5cbiAgcmV0dXJuIHRoaXMucnVuKFt0b2tlbl0pLm1hcChmdW5jdGlvbiAodCkge1xuICAgIHJldHVybiB0LnRvU3RyaW5nKClcbiAgfSlcbn1cblxuLyoqXG4gKiBSZXNldHMgdGhlIHBpcGVsaW5lIGJ5IHJlbW92aW5nIGFueSBleGlzdGluZyBwcm9jZXNzb3JzLlxuICpcbiAqL1xubHVuci5QaXBlbGluZS5wcm90b3R5cGUucmVzZXQgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuX3N0YWNrID0gW11cbn1cblxuLyoqXG4gKiBSZXR1cm5zIGEgcmVwcmVzZW50YXRpb24gb2YgdGhlIHBpcGVsaW5lIHJlYWR5IGZvciBzZXJpYWxpc2F0aW9uLlxuICpcbiAqIExvZ3MgYSB3YXJuaW5nIGlmIHRoZSBmdW5jdGlvbiBoYXMgbm90IGJlZW4gcmVnaXN0ZXJlZC5cbiAqXG4gKiBAcmV0dXJucyB7QXJyYXl9XG4gKi9cbmx1bnIuUGlwZWxpbmUucHJvdG90eXBlLnRvSlNPTiA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMuX3N0YWNrLm1hcChmdW5jdGlvbiAoZm4pIHtcbiAgICBsdW5yLlBpcGVsaW5lLndhcm5JZkZ1bmN0aW9uTm90UmVnaXN0ZXJlZChmbilcblxuICAgIHJldHVybiBmbi5sYWJlbFxuICB9KVxufVxuLyohXG4gKiBsdW5yLlZlY3RvclxuICogQ29weXJpZ2h0IChDKSAyMDE4IE9saXZlciBOaWdodGluZ2FsZVxuICovXG5cbi8qKlxuICogQSB2ZWN0b3IgaXMgdXNlZCB0byBjb25zdHJ1Y3QgdGhlIHZlY3RvciBzcGFjZSBvZiBkb2N1bWVudHMgYW5kIHF1ZXJpZXMuIFRoZXNlXG4gKiB2ZWN0b3JzIHN1cHBvcnQgb3BlcmF0aW9ucyB0byBkZXRlcm1pbmUgdGhlIHNpbWlsYXJpdHkgYmV0d2VlbiB0d28gZG9jdW1lbnRzIG9yXG4gKiBhIGRvY3VtZW50IGFuZCBhIHF1ZXJ5LlxuICpcbiAqIE5vcm1hbGx5IG5vIHBhcmFtZXRlcnMgYXJlIHJlcXVpcmVkIGZvciBpbml0aWFsaXppbmcgYSB2ZWN0b3IsIGJ1dCBpbiB0aGUgY2FzZSBvZlxuICogbG9hZGluZyBhIHByZXZpb3VzbHkgZHVtcGVkIHZlY3RvciB0aGUgcmF3IGVsZW1lbnRzIGNhbiBiZSBwcm92aWRlZCB0byB0aGUgY29uc3RydWN0b3IuXG4gKlxuICogRm9yIHBlcmZvcm1hbmNlIHJlYXNvbnMgdmVjdG9ycyBhcmUgaW1wbGVtZW50ZWQgd2l0aCBhIGZsYXQgYXJyYXksIHdoZXJlIGFuIGVsZW1lbnRzXG4gKiBpbmRleCBpcyBpbW1lZGlhdGVseSBmb2xsb3dlZCBieSBpdHMgdmFsdWUuIEUuZy4gW2luZGV4LCB2YWx1ZSwgaW5kZXgsIHZhbHVlXS4gVGhpc1xuICogYWxsb3dzIHRoZSB1bmRlcmx5aW5nIGFycmF5IHRvIGJlIGFzIHNwYXJzZSBhcyBwb3NzaWJsZSBhbmQgc3RpbGwgb2ZmZXIgZGVjZW50XG4gKiBwZXJmb3JtYW5jZSB3aGVuIGJlaW5nIHVzZWQgZm9yIHZlY3RvciBjYWxjdWxhdGlvbnMuXG4gKlxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge051bWJlcltdfSBbZWxlbWVudHNdIC0gVGhlIGZsYXQgbGlzdCBvZiBlbGVtZW50IGluZGV4IGFuZCBlbGVtZW50IHZhbHVlIHBhaXJzLlxuICovXG5sdW5yLlZlY3RvciA9IGZ1bmN0aW9uIChlbGVtZW50cykge1xuICB0aGlzLl9tYWduaXR1ZGUgPSAwXG4gIHRoaXMuZWxlbWVudHMgPSBlbGVtZW50cyB8fCBbXVxufVxuXG5cbi8qKlxuICogQ2FsY3VsYXRlcyB0aGUgcG9zaXRpb24gd2l0aGluIHRoZSB2ZWN0b3IgdG8gaW5zZXJ0IGEgZ2l2ZW4gaW5kZXguXG4gKlxuICogVGhpcyBpcyB1c2VkIGludGVybmFsbHkgYnkgaW5zZXJ0IGFuZCB1cHNlcnQuIElmIHRoZXJlIGFyZSBkdXBsaWNhdGUgaW5kZXhlcyB0aGVuXG4gKiB0aGUgcG9zaXRpb24gaXMgcmV0dXJuZWQgYXMgaWYgdGhlIHZhbHVlIGZvciB0aGF0IGluZGV4IHdlcmUgdG8gYmUgdXBkYXRlZCwgYnV0IGl0XG4gKiBpcyB0aGUgY2FsbGVycyByZXNwb25zaWJpbGl0eSB0byBjaGVjayB3aGV0aGVyIHRoZXJlIGlzIGEgZHVwbGljYXRlIGF0IHRoYXQgaW5kZXhcbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gaW5zZXJ0SWR4IC0gVGhlIGluZGV4IGF0IHdoaWNoIHRoZSBlbGVtZW50IHNob3VsZCBiZSBpbnNlcnRlZC5cbiAqIEByZXR1cm5zIHtOdW1iZXJ9XG4gKi9cbmx1bnIuVmVjdG9yLnByb3RvdHlwZS5wb3NpdGlvbkZvckluZGV4ID0gZnVuY3Rpb24gKGluZGV4KSB7XG4gIC8vIEZvciBhbiBlbXB0eSB2ZWN0b3IgdGhlIHR1cGxlIGNhbiBiZSBpbnNlcnRlZCBhdCB0aGUgYmVnaW5uaW5nXG4gIGlmICh0aGlzLmVsZW1lbnRzLmxlbmd0aCA9PSAwKSB7XG4gICAgcmV0dXJuIDBcbiAgfVxuXG4gIHZhciBzdGFydCA9IDAsXG4gICAgICBlbmQgPSB0aGlzLmVsZW1lbnRzLmxlbmd0aCAvIDIsXG4gICAgICBzbGljZUxlbmd0aCA9IGVuZCAtIHN0YXJ0LFxuICAgICAgcGl2b3RQb2ludCA9IE1hdGguZmxvb3Ioc2xpY2VMZW5ndGggLyAyKSxcbiAgICAgIHBpdm90SW5kZXggPSB0aGlzLmVsZW1lbnRzW3Bpdm90UG9pbnQgKiAyXVxuXG4gIHdoaWxlIChzbGljZUxlbmd0aCA+IDEpIHtcbiAgICBpZiAocGl2b3RJbmRleCA8IGluZGV4KSB7XG4gICAgICBzdGFydCA9IHBpdm90UG9pbnRcbiAgICB9XG5cbiAgICBpZiAocGl2b3RJbmRleCA+IGluZGV4KSB7XG4gICAgICBlbmQgPSBwaXZvdFBvaW50XG4gICAgfVxuXG4gICAgaWYgKHBpdm90SW5kZXggPT0gaW5kZXgpIHtcbiAgICAgIGJyZWFrXG4gICAgfVxuXG4gICAgc2xpY2VMZW5ndGggPSBlbmQgLSBzdGFydFxuICAgIHBpdm90UG9pbnQgPSBzdGFydCArIE1hdGguZmxvb3Ioc2xpY2VMZW5ndGggLyAyKVxuICAgIHBpdm90SW5kZXggPSB0aGlzLmVsZW1lbnRzW3Bpdm90UG9pbnQgKiAyXVxuICB9XG5cbiAgaWYgKHBpdm90SW5kZXggPT0gaW5kZXgpIHtcbiAgICByZXR1cm4gcGl2b3RQb2ludCAqIDJcbiAgfVxuXG4gIGlmIChwaXZvdEluZGV4ID4gaW5kZXgpIHtcbiAgICByZXR1cm4gcGl2b3RQb2ludCAqIDJcbiAgfVxuXG4gIGlmIChwaXZvdEluZGV4IDwgaW5kZXgpIHtcbiAgICByZXR1cm4gKHBpdm90UG9pbnQgKyAxKSAqIDJcbiAgfVxufVxuXG4vKipcbiAqIEluc2VydHMgYW4gZWxlbWVudCBhdCBhbiBpbmRleCB3aXRoaW4gdGhlIHZlY3Rvci5cbiAqXG4gKiBEb2VzIG5vdCBhbGxvdyBkdXBsaWNhdGVzLCB3aWxsIHRocm93IGFuIGVycm9yIGlmIHRoZXJlIGlzIGFscmVhZHkgYW4gZW50cnlcbiAqIGZvciB0aGlzIGluZGV4LlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBpbnNlcnRJZHggLSBUaGUgaW5kZXggYXQgd2hpY2ggdGhlIGVsZW1lbnQgc2hvdWxkIGJlIGluc2VydGVkLlxuICogQHBhcmFtIHtOdW1iZXJ9IHZhbCAtIFRoZSB2YWx1ZSB0byBiZSBpbnNlcnRlZCBpbnRvIHRoZSB2ZWN0b3IuXG4gKi9cbmx1bnIuVmVjdG9yLnByb3RvdHlwZS5pbnNlcnQgPSBmdW5jdGlvbiAoaW5zZXJ0SWR4LCB2YWwpIHtcbiAgdGhpcy51cHNlcnQoaW5zZXJ0SWR4LCB2YWwsIGZ1bmN0aW9uICgpIHtcbiAgICB0aHJvdyBcImR1cGxpY2F0ZSBpbmRleFwiXG4gIH0pXG59XG5cbi8qKlxuICogSW5zZXJ0cyBvciB1cGRhdGVzIGFuIGV4aXN0aW5nIGluZGV4IHdpdGhpbiB0aGUgdmVjdG9yLlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBpbnNlcnRJZHggLSBUaGUgaW5kZXggYXQgd2hpY2ggdGhlIGVsZW1lbnQgc2hvdWxkIGJlIGluc2VydGVkLlxuICogQHBhcmFtIHtOdW1iZXJ9IHZhbCAtIFRoZSB2YWx1ZSB0byBiZSBpbnNlcnRlZCBpbnRvIHRoZSB2ZWN0b3IuXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBmbiAtIEEgZnVuY3Rpb24gdGhhdCBpcyBjYWxsZWQgZm9yIHVwZGF0ZXMsIHRoZSBleGlzdGluZyB2YWx1ZSBhbmQgdGhlXG4gKiByZXF1ZXN0ZWQgdmFsdWUgYXJlIHBhc3NlZCBhcyBhcmd1bWVudHNcbiAqL1xubHVuci5WZWN0b3IucHJvdG90eXBlLnVwc2VydCA9IGZ1bmN0aW9uIChpbnNlcnRJZHgsIHZhbCwgZm4pIHtcbiAgdGhpcy5fbWFnbml0dWRlID0gMFxuICB2YXIgcG9zaXRpb24gPSB0aGlzLnBvc2l0aW9uRm9ySW5kZXgoaW5zZXJ0SWR4KVxuXG4gIGlmICh0aGlzLmVsZW1lbnRzW3Bvc2l0aW9uXSA9PSBpbnNlcnRJZHgpIHtcbiAgICB0aGlzLmVsZW1lbnRzW3Bvc2l0aW9uICsgMV0gPSBmbih0aGlzLmVsZW1lbnRzW3Bvc2l0aW9uICsgMV0sIHZhbClcbiAgfSBlbHNlIHtcbiAgICB0aGlzLmVsZW1lbnRzLnNwbGljZShwb3NpdGlvbiwgMCwgaW5zZXJ0SWR4LCB2YWwpXG4gIH1cbn1cblxuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBtYWduaXR1ZGUgb2YgdGhpcyB2ZWN0b3IuXG4gKlxuICogQHJldHVybnMge051bWJlcn1cbiAqL1xubHVuci5WZWN0b3IucHJvdG90eXBlLm1hZ25pdHVkZSA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHRoaXMuX21hZ25pdHVkZSkgcmV0dXJuIHRoaXMuX21hZ25pdHVkZVxuXG4gIHZhciBzdW1PZlNxdWFyZXMgPSAwLFxuICAgICAgZWxlbWVudHNMZW5ndGggPSB0aGlzLmVsZW1lbnRzLmxlbmd0aFxuXG4gIGZvciAodmFyIGkgPSAxOyBpIDwgZWxlbWVudHNMZW5ndGg7IGkgKz0gMikge1xuICAgIHZhciB2YWwgPSB0aGlzLmVsZW1lbnRzW2ldXG4gICAgc3VtT2ZTcXVhcmVzICs9IHZhbCAqIHZhbFxuICB9XG5cbiAgcmV0dXJuIHRoaXMuX21hZ25pdHVkZSA9IE1hdGguc3FydChzdW1PZlNxdWFyZXMpXG59XG5cbi8qKlxuICogQ2FsY3VsYXRlcyB0aGUgZG90IHByb2R1Y3Qgb2YgdGhpcyB2ZWN0b3IgYW5kIGFub3RoZXIgdmVjdG9yLlxuICpcbiAqIEBwYXJhbSB7bHVuci5WZWN0b3J9IG90aGVyVmVjdG9yIC0gVGhlIHZlY3RvciB0byBjb21wdXRlIHRoZSBkb3QgcHJvZHVjdCB3aXRoLlxuICogQHJldHVybnMge051bWJlcn1cbiAqL1xubHVuci5WZWN0b3IucHJvdG90eXBlLmRvdCA9IGZ1bmN0aW9uIChvdGhlclZlY3Rvcikge1xuICB2YXIgZG90UHJvZHVjdCA9IDAsXG4gICAgICBhID0gdGhpcy5lbGVtZW50cywgYiA9IG90aGVyVmVjdG9yLmVsZW1lbnRzLFxuICAgICAgYUxlbiA9IGEubGVuZ3RoLCBiTGVuID0gYi5sZW5ndGgsXG4gICAgICBhVmFsID0gMCwgYlZhbCA9IDAsXG4gICAgICBpID0gMCwgaiA9IDBcblxuICB3aGlsZSAoaSA8IGFMZW4gJiYgaiA8IGJMZW4pIHtcbiAgICBhVmFsID0gYVtpXSwgYlZhbCA9IGJbal1cbiAgICBpZiAoYVZhbCA8IGJWYWwpIHtcbiAgICAgIGkgKz0gMlxuICAgIH0gZWxzZSBpZiAoYVZhbCA+IGJWYWwpIHtcbiAgICAgIGogKz0gMlxuICAgIH0gZWxzZSBpZiAoYVZhbCA9PSBiVmFsKSB7XG4gICAgICBkb3RQcm9kdWN0ICs9IGFbaSArIDFdICogYltqICsgMV1cbiAgICAgIGkgKz0gMlxuICAgICAgaiArPSAyXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGRvdFByb2R1Y3Rcbn1cblxuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBzaW1pbGFyaXR5IGJldHdlZW4gdGhpcyB2ZWN0b3IgYW5kIGFub3RoZXIgdmVjdG9yLlxuICpcbiAqIEBwYXJhbSB7bHVuci5WZWN0b3J9IG90aGVyVmVjdG9yIC0gVGhlIG90aGVyIHZlY3RvciB0byBjYWxjdWxhdGUgdGhlXG4gKiBzaW1pbGFyaXR5IHdpdGguXG4gKiBAcmV0dXJucyB7TnVtYmVyfVxuICovXG5sdW5yLlZlY3Rvci5wcm90b3R5cGUuc2ltaWxhcml0eSA9IGZ1bmN0aW9uIChvdGhlclZlY3Rvcikge1xuICByZXR1cm4gdGhpcy5kb3Qob3RoZXJWZWN0b3IpIC8gdGhpcy5tYWduaXR1ZGUoKSB8fCAwXG59XG5cbi8qKlxuICogQ29udmVydHMgdGhlIHZlY3RvciB0byBhbiBhcnJheSBvZiB0aGUgZWxlbWVudHMgd2l0aGluIHRoZSB2ZWN0b3IuXG4gKlxuICogQHJldHVybnMge051bWJlcltdfVxuICovXG5sdW5yLlZlY3Rvci5wcm90b3R5cGUudG9BcnJheSA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIG91dHB1dCA9IG5ldyBBcnJheSAodGhpcy5lbGVtZW50cy5sZW5ndGggLyAyKVxuXG4gIGZvciAodmFyIGkgPSAxLCBqID0gMDsgaSA8IHRoaXMuZWxlbWVudHMubGVuZ3RoOyBpICs9IDIsIGorKykge1xuICAgIG91dHB1dFtqXSA9IHRoaXMuZWxlbWVudHNbaV1cbiAgfVxuXG4gIHJldHVybiBvdXRwdXRcbn1cblxuLyoqXG4gKiBBIEpTT04gc2VyaWFsaXphYmxlIHJlcHJlc2VudGF0aW9uIG9mIHRoZSB2ZWN0b3IuXG4gKlxuICogQHJldHVybnMge051bWJlcltdfVxuICovXG5sdW5yLlZlY3Rvci5wcm90b3R5cGUudG9KU09OID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5lbGVtZW50c1xufVxuLyogZXNsaW50LWRpc2FibGUgKi9cbi8qIVxuICogbHVuci5zdGVtbWVyXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTggT2xpdmVyIE5pZ2h0aW5nYWxlXG4gKiBJbmNsdWRlcyBjb2RlIGZyb20gLSBodHRwOi8vdGFydGFydXMub3JnL35tYXJ0aW4vUG9ydGVyU3RlbW1lci9qcy50eHRcbiAqL1xuXG4vKipcbiAqIGx1bnIuc3RlbW1lciBpcyBhbiBlbmdsaXNoIGxhbmd1YWdlIHN0ZW1tZXIsIHRoaXMgaXMgYSBKYXZhU2NyaXB0XG4gKiBpbXBsZW1lbnRhdGlvbiBvZiB0aGUgUG9ydGVyU3RlbW1lciB0YWtlbiBmcm9tIGh0dHA6Ly90YXJ0YXJ1cy5vcmcvfm1hcnRpblxuICpcbiAqIEBzdGF0aWNcbiAqIEBpbXBsZW1lbnRzIHtsdW5yLlBpcGVsaW5lRnVuY3Rpb259XG4gKiBAcGFyYW0ge2x1bnIuVG9rZW59IHRva2VuIC0gVGhlIHN0cmluZyB0byBzdGVtXG4gKiBAcmV0dXJucyB7bHVuci5Ub2tlbn1cbiAqIEBzZWUge0BsaW5rIGx1bnIuUGlwZWxpbmV9XG4gKiBAZnVuY3Rpb25cbiAqL1xubHVuci5zdGVtbWVyID0gKGZ1bmN0aW9uKCl7XG4gIHZhciBzdGVwMmxpc3QgPSB7XG4gICAgICBcImF0aW9uYWxcIiA6IFwiYXRlXCIsXG4gICAgICBcInRpb25hbFwiIDogXCJ0aW9uXCIsXG4gICAgICBcImVuY2lcIiA6IFwiZW5jZVwiLFxuICAgICAgXCJhbmNpXCIgOiBcImFuY2VcIixcbiAgICAgIFwiaXplclwiIDogXCJpemVcIixcbiAgICAgIFwiYmxpXCIgOiBcImJsZVwiLFxuICAgICAgXCJhbGxpXCIgOiBcImFsXCIsXG4gICAgICBcImVudGxpXCIgOiBcImVudFwiLFxuICAgICAgXCJlbGlcIiA6IFwiZVwiLFxuICAgICAgXCJvdXNsaVwiIDogXCJvdXNcIixcbiAgICAgIFwiaXphdGlvblwiIDogXCJpemVcIixcbiAgICAgIFwiYXRpb25cIiA6IFwiYXRlXCIsXG4gICAgICBcImF0b3JcIiA6IFwiYXRlXCIsXG4gICAgICBcImFsaXNtXCIgOiBcImFsXCIsXG4gICAgICBcIml2ZW5lc3NcIiA6IFwiaXZlXCIsXG4gICAgICBcImZ1bG5lc3NcIiA6IFwiZnVsXCIsXG4gICAgICBcIm91c25lc3NcIiA6IFwib3VzXCIsXG4gICAgICBcImFsaXRpXCIgOiBcImFsXCIsXG4gICAgICBcIml2aXRpXCIgOiBcIml2ZVwiLFxuICAgICAgXCJiaWxpdGlcIiA6IFwiYmxlXCIsXG4gICAgICBcImxvZ2lcIiA6IFwibG9nXCJcbiAgICB9LFxuXG4gICAgc3RlcDNsaXN0ID0ge1xuICAgICAgXCJpY2F0ZVwiIDogXCJpY1wiLFxuICAgICAgXCJhdGl2ZVwiIDogXCJcIixcbiAgICAgIFwiYWxpemVcIiA6IFwiYWxcIixcbiAgICAgIFwiaWNpdGlcIiA6IFwiaWNcIixcbiAgICAgIFwiaWNhbFwiIDogXCJpY1wiLFxuICAgICAgXCJmdWxcIiA6IFwiXCIsXG4gICAgICBcIm5lc3NcIiA6IFwiXCJcbiAgICB9LFxuXG4gICAgYyA9IFwiW15hZWlvdV1cIiwgICAgICAgICAgLy8gY29uc29uYW50XG4gICAgdiA9IFwiW2FlaW91eV1cIiwgICAgICAgICAgLy8gdm93ZWxcbiAgICBDID0gYyArIFwiW15hZWlvdXldKlwiLCAgICAvLyBjb25zb25hbnQgc2VxdWVuY2VcbiAgICBWID0gdiArIFwiW2FlaW91XSpcIiwgICAgICAvLyB2b3dlbCBzZXF1ZW5jZVxuXG4gICAgbWdyMCA9IFwiXihcIiArIEMgKyBcIik/XCIgKyBWICsgQywgICAgICAgICAgICAgICAvLyBbQ11WQy4uLiBpcyBtPjBcbiAgICBtZXExID0gXCJeKFwiICsgQyArIFwiKT9cIiArIFYgKyBDICsgXCIoXCIgKyBWICsgXCIpPyRcIiwgIC8vIFtDXVZDW1ZdIGlzIG09MVxuICAgIG1ncjEgPSBcIl4oXCIgKyBDICsgXCIpP1wiICsgViArIEMgKyBWICsgQywgICAgICAgLy8gW0NdVkNWQy4uLiBpcyBtPjFcbiAgICBzX3YgPSBcIl4oXCIgKyBDICsgXCIpP1wiICsgdjsgICAgICAgICAgICAgICAgICAgLy8gdm93ZWwgaW4gc3RlbVxuXG4gIHZhciByZV9tZ3IwID0gbmV3IFJlZ0V4cChtZ3IwKTtcbiAgdmFyIHJlX21ncjEgPSBuZXcgUmVnRXhwKG1ncjEpO1xuICB2YXIgcmVfbWVxMSA9IG5ldyBSZWdFeHAobWVxMSk7XG4gIHZhciByZV9zX3YgPSBuZXcgUmVnRXhwKHNfdik7XG5cbiAgdmFyIHJlXzFhID0gL14oLis/KShzc3xpKWVzJC87XG4gIHZhciByZTJfMWEgPSAvXiguKz8pKFtec10pcyQvO1xuICB2YXIgcmVfMWIgPSAvXiguKz8pZWVkJC87XG4gIHZhciByZTJfMWIgPSAvXiguKz8pKGVkfGluZykkLztcbiAgdmFyIHJlXzFiXzIgPSAvLiQvO1xuICB2YXIgcmUyXzFiXzIgPSAvKGF0fGJsfGl6KSQvO1xuICB2YXIgcmUzXzFiXzIgPSBuZXcgUmVnRXhwKFwiKFteYWVpb3V5bHN6XSlcXFxcMSRcIik7XG4gIHZhciByZTRfMWJfMiA9IG5ldyBSZWdFeHAoXCJeXCIgKyBDICsgdiArIFwiW15hZWlvdXd4eV0kXCIpO1xuXG4gIHZhciByZV8xYyA9IC9eKC4rP1teYWVpb3VdKXkkLztcbiAgdmFyIHJlXzIgPSAvXiguKz8pKGF0aW9uYWx8dGlvbmFsfGVuY2l8YW5jaXxpemVyfGJsaXxhbGxpfGVudGxpfGVsaXxvdXNsaXxpemF0aW9ufGF0aW9ufGF0b3J8YWxpc218aXZlbmVzc3xmdWxuZXNzfG91c25lc3N8YWxpdGl8aXZpdGl8YmlsaXRpfGxvZ2kpJC87XG5cbiAgdmFyIHJlXzMgPSAvXiguKz8pKGljYXRlfGF0aXZlfGFsaXplfGljaXRpfGljYWx8ZnVsfG5lc3MpJC87XG5cbiAgdmFyIHJlXzQgPSAvXiguKz8pKGFsfGFuY2V8ZW5jZXxlcnxpY3xhYmxlfGlibGV8YW50fGVtZW50fG1lbnR8ZW50fG91fGlzbXxhdGV8aXRpfG91c3xpdmV8aXplKSQvO1xuICB2YXIgcmUyXzQgPSAvXiguKz8pKHN8dCkoaW9uKSQvO1xuXG4gIHZhciByZV81ID0gL14oLis/KWUkLztcbiAgdmFyIHJlXzVfMSA9IC9sbCQvO1xuICB2YXIgcmUzXzUgPSBuZXcgUmVnRXhwKFwiXlwiICsgQyArIHYgKyBcIlteYWVpb3V3eHldJFwiKTtcblxuICB2YXIgcG9ydGVyU3RlbW1lciA9IGZ1bmN0aW9uIHBvcnRlclN0ZW1tZXIodykge1xuICAgIHZhciBzdGVtLFxuICAgICAgc3VmZml4LFxuICAgICAgZmlyc3RjaCxcbiAgICAgIHJlLFxuICAgICAgcmUyLFxuICAgICAgcmUzLFxuICAgICAgcmU0O1xuXG4gICAgaWYgKHcubGVuZ3RoIDwgMykgeyByZXR1cm4gdzsgfVxuXG4gICAgZmlyc3RjaCA9IHcuc3Vic3RyKDAsMSk7XG4gICAgaWYgKGZpcnN0Y2ggPT0gXCJ5XCIpIHtcbiAgICAgIHcgPSBmaXJzdGNoLnRvVXBwZXJDYXNlKCkgKyB3LnN1YnN0cigxKTtcbiAgICB9XG5cbiAgICAvLyBTdGVwIDFhXG4gICAgcmUgPSByZV8xYVxuICAgIHJlMiA9IHJlMl8xYTtcblxuICAgIGlmIChyZS50ZXN0KHcpKSB7IHcgPSB3LnJlcGxhY2UocmUsXCIkMSQyXCIpOyB9XG4gICAgZWxzZSBpZiAocmUyLnRlc3QodykpIHsgdyA9IHcucmVwbGFjZShyZTIsXCIkMSQyXCIpOyB9XG5cbiAgICAvLyBTdGVwIDFiXG4gICAgcmUgPSByZV8xYjtcbiAgICByZTIgPSByZTJfMWI7XG4gICAgaWYgKHJlLnRlc3QodykpIHtcbiAgICAgIHZhciBmcCA9IHJlLmV4ZWModyk7XG4gICAgICByZSA9IHJlX21ncjA7XG4gICAgICBpZiAocmUudGVzdChmcFsxXSkpIHtcbiAgICAgICAgcmUgPSByZV8xYl8yO1xuICAgICAgICB3ID0gdy5yZXBsYWNlKHJlLFwiXCIpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAocmUyLnRlc3QodykpIHtcbiAgICAgIHZhciBmcCA9IHJlMi5leGVjKHcpO1xuICAgICAgc3RlbSA9IGZwWzFdO1xuICAgICAgcmUyID0gcmVfc192O1xuICAgICAgaWYgKHJlMi50ZXN0KHN0ZW0pKSB7XG4gICAgICAgIHcgPSBzdGVtO1xuICAgICAgICByZTIgPSByZTJfMWJfMjtcbiAgICAgICAgcmUzID0gcmUzXzFiXzI7XG4gICAgICAgIHJlNCA9IHJlNF8xYl8yO1xuICAgICAgICBpZiAocmUyLnRlc3QodykpIHsgdyA9IHcgKyBcImVcIjsgfVxuICAgICAgICBlbHNlIGlmIChyZTMudGVzdCh3KSkgeyByZSA9IHJlXzFiXzI7IHcgPSB3LnJlcGxhY2UocmUsXCJcIik7IH1cbiAgICAgICAgZWxzZSBpZiAocmU0LnRlc3QodykpIHsgdyA9IHcgKyBcImVcIjsgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFN0ZXAgMWMgLSByZXBsYWNlIHN1ZmZpeCB5IG9yIFkgYnkgaSBpZiBwcmVjZWRlZCBieSBhIG5vbi12b3dlbCB3aGljaCBpcyBub3QgdGhlIGZpcnN0IGxldHRlciBvZiB0aGUgd29yZCAoc28gY3J5IC0+IGNyaSwgYnkgLT4gYnksIHNheSAtPiBzYXkpXG4gICAgcmUgPSByZV8xYztcbiAgICBpZiAocmUudGVzdCh3KSkge1xuICAgICAgdmFyIGZwID0gcmUuZXhlYyh3KTtcbiAgICAgIHN0ZW0gPSBmcFsxXTtcbiAgICAgIHcgPSBzdGVtICsgXCJpXCI7XG4gICAgfVxuXG4gICAgLy8gU3RlcCAyXG4gICAgcmUgPSByZV8yO1xuICAgIGlmIChyZS50ZXN0KHcpKSB7XG4gICAgICB2YXIgZnAgPSByZS5leGVjKHcpO1xuICAgICAgc3RlbSA9IGZwWzFdO1xuICAgICAgc3VmZml4ID0gZnBbMl07XG4gICAgICByZSA9IHJlX21ncjA7XG4gICAgICBpZiAocmUudGVzdChzdGVtKSkge1xuICAgICAgICB3ID0gc3RlbSArIHN0ZXAybGlzdFtzdWZmaXhdO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFN0ZXAgM1xuICAgIHJlID0gcmVfMztcbiAgICBpZiAocmUudGVzdCh3KSkge1xuICAgICAgdmFyIGZwID0gcmUuZXhlYyh3KTtcbiAgICAgIHN0ZW0gPSBmcFsxXTtcbiAgICAgIHN1ZmZpeCA9IGZwWzJdO1xuICAgICAgcmUgPSByZV9tZ3IwO1xuICAgICAgaWYgKHJlLnRlc3Qoc3RlbSkpIHtcbiAgICAgICAgdyA9IHN0ZW0gKyBzdGVwM2xpc3Rbc3VmZml4XTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBTdGVwIDRcbiAgICByZSA9IHJlXzQ7XG4gICAgcmUyID0gcmUyXzQ7XG4gICAgaWYgKHJlLnRlc3QodykpIHtcbiAgICAgIHZhciBmcCA9IHJlLmV4ZWModyk7XG4gICAgICBzdGVtID0gZnBbMV07XG4gICAgICByZSA9IHJlX21ncjE7XG4gICAgICBpZiAocmUudGVzdChzdGVtKSkge1xuICAgICAgICB3ID0gc3RlbTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHJlMi50ZXN0KHcpKSB7XG4gICAgICB2YXIgZnAgPSByZTIuZXhlYyh3KTtcbiAgICAgIHN0ZW0gPSBmcFsxXSArIGZwWzJdO1xuICAgICAgcmUyID0gcmVfbWdyMTtcbiAgICAgIGlmIChyZTIudGVzdChzdGVtKSkge1xuICAgICAgICB3ID0gc3RlbTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBTdGVwIDVcbiAgICByZSA9IHJlXzU7XG4gICAgaWYgKHJlLnRlc3QodykpIHtcbiAgICAgIHZhciBmcCA9IHJlLmV4ZWModyk7XG4gICAgICBzdGVtID0gZnBbMV07XG4gICAgICByZSA9IHJlX21ncjE7XG4gICAgICByZTIgPSByZV9tZXExO1xuICAgICAgcmUzID0gcmUzXzU7XG4gICAgICBpZiAocmUudGVzdChzdGVtKSB8fCAocmUyLnRlc3Qoc3RlbSkgJiYgIShyZTMudGVzdChzdGVtKSkpKSB7XG4gICAgICAgIHcgPSBzdGVtO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJlID0gcmVfNV8xO1xuICAgIHJlMiA9IHJlX21ncjE7XG4gICAgaWYgKHJlLnRlc3QodykgJiYgcmUyLnRlc3QodykpIHtcbiAgICAgIHJlID0gcmVfMWJfMjtcbiAgICAgIHcgPSB3LnJlcGxhY2UocmUsXCJcIik7XG4gICAgfVxuXG4gICAgLy8gYW5kIHR1cm4gaW5pdGlhbCBZIGJhY2sgdG8geVxuXG4gICAgaWYgKGZpcnN0Y2ggPT0gXCJ5XCIpIHtcbiAgICAgIHcgPSBmaXJzdGNoLnRvTG93ZXJDYXNlKCkgKyB3LnN1YnN0cigxKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdztcbiAgfTtcblxuICByZXR1cm4gZnVuY3Rpb24gKHRva2VuKSB7XG4gICAgcmV0dXJuIHRva2VuLnVwZGF0ZShwb3J0ZXJTdGVtbWVyKTtcbiAgfVxufSkoKTtcblxubHVuci5QaXBlbGluZS5yZWdpc3RlckZ1bmN0aW9uKGx1bnIuc3RlbW1lciwgJ3N0ZW1tZXInKVxuLyohXG4gKiBsdW5yLnN0b3BXb3JkRmlsdGVyXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTggT2xpdmVyIE5pZ2h0aW5nYWxlXG4gKi9cblxuLyoqXG4gKiBsdW5yLmdlbmVyYXRlU3RvcFdvcmRGaWx0ZXIgYnVpbGRzIGEgc3RvcFdvcmRGaWx0ZXIgZnVuY3Rpb24gZnJvbSB0aGUgcHJvdmlkZWRcbiAqIGxpc3Qgb2Ygc3RvcCB3b3Jkcy5cbiAqXG4gKiBUaGUgYnVpbHQgaW4gbHVuci5zdG9wV29yZEZpbHRlciBpcyBidWlsdCB1c2luZyB0aGlzIGdlbmVyYXRvciBhbmQgY2FuIGJlIHVzZWRcbiAqIHRvIGdlbmVyYXRlIGN1c3RvbSBzdG9wV29yZEZpbHRlcnMgZm9yIGFwcGxpY2F0aW9ucyBvciBub24gRW5nbGlzaCBsYW5ndWFnZXMuXG4gKlxuICogQGZ1bmN0aW9uXG4gKiBAcGFyYW0ge0FycmF5fSB0b2tlbiBUaGUgdG9rZW4gdG8gcGFzcyB0aHJvdWdoIHRoZSBmaWx0ZXJcbiAqIEByZXR1cm5zIHtsdW5yLlBpcGVsaW5lRnVuY3Rpb259XG4gKiBAc2VlIGx1bnIuUGlwZWxpbmVcbiAqIEBzZWUgbHVuci5zdG9wV29yZEZpbHRlclxuICovXG5sdW5yLmdlbmVyYXRlU3RvcFdvcmRGaWx0ZXIgPSBmdW5jdGlvbiAoc3RvcFdvcmRzKSB7XG4gIHZhciB3b3JkcyA9IHN0b3BXb3Jkcy5yZWR1Y2UoZnVuY3Rpb24gKG1lbW8sIHN0b3BXb3JkKSB7XG4gICAgbWVtb1tzdG9wV29yZF0gPSBzdG9wV29yZFxuICAgIHJldHVybiBtZW1vXG4gIH0sIHt9KVxuXG4gIHJldHVybiBmdW5jdGlvbiAodG9rZW4pIHtcbiAgICBpZiAodG9rZW4gJiYgd29yZHNbdG9rZW4udG9TdHJpbmcoKV0gIT09IHRva2VuLnRvU3RyaW5nKCkpIHJldHVybiB0b2tlblxuICB9XG59XG5cbi8qKlxuICogbHVuci5zdG9wV29yZEZpbHRlciBpcyBhbiBFbmdsaXNoIGxhbmd1YWdlIHN0b3Agd29yZCBsaXN0IGZpbHRlciwgYW55IHdvcmRzXG4gKiBjb250YWluZWQgaW4gdGhlIGxpc3Qgd2lsbCBub3QgYmUgcGFzc2VkIHRocm91Z2ggdGhlIGZpbHRlci5cbiAqXG4gKiBUaGlzIGlzIGludGVuZGVkIHRvIGJlIHVzZWQgaW4gdGhlIFBpcGVsaW5lLiBJZiB0aGUgdG9rZW4gZG9lcyBub3QgcGFzcyB0aGVcbiAqIGZpbHRlciB0aGVuIHVuZGVmaW5lZCB3aWxsIGJlIHJldHVybmVkLlxuICpcbiAqIEBmdW5jdGlvblxuICogQGltcGxlbWVudHMge2x1bnIuUGlwZWxpbmVGdW5jdGlvbn1cbiAqIEBwYXJhbXMge2x1bnIuVG9rZW59IHRva2VuIC0gQSB0b2tlbiB0byBjaGVjayBmb3IgYmVpbmcgYSBzdG9wIHdvcmQuXG4gKiBAcmV0dXJucyB7bHVuci5Ub2tlbn1cbiAqIEBzZWUge0BsaW5rIGx1bnIuUGlwZWxpbmV9XG4gKi9cbmx1bnIuc3RvcFdvcmRGaWx0ZXIgPSBsdW5yLmdlbmVyYXRlU3RvcFdvcmRGaWx0ZXIoW1xuICAnYScsXG4gICdhYmxlJyxcbiAgJ2Fib3V0JyxcbiAgJ2Fjcm9zcycsXG4gICdhZnRlcicsXG4gICdhbGwnLFxuICAnYWxtb3N0JyxcbiAgJ2Fsc28nLFxuICAnYW0nLFxuICAnYW1vbmcnLFxuICAnYW4nLFxuICAnYW5kJyxcbiAgJ2FueScsXG4gICdhcmUnLFxuICAnYXMnLFxuICAnYXQnLFxuICAnYmUnLFxuICAnYmVjYXVzZScsXG4gICdiZWVuJyxcbiAgJ2J1dCcsXG4gICdieScsXG4gICdjYW4nLFxuICAnY2Fubm90JyxcbiAgJ2NvdWxkJyxcbiAgJ2RlYXInLFxuICAnZGlkJyxcbiAgJ2RvJyxcbiAgJ2RvZXMnLFxuICAnZWl0aGVyJyxcbiAgJ2Vsc2UnLFxuICAnZXZlcicsXG4gICdldmVyeScsXG4gICdmb3InLFxuICAnZnJvbScsXG4gICdnZXQnLFxuICAnZ290JyxcbiAgJ2hhZCcsXG4gICdoYXMnLFxuICAnaGF2ZScsXG4gICdoZScsXG4gICdoZXInLFxuICAnaGVycycsXG4gICdoaW0nLFxuICAnaGlzJyxcbiAgJ2hvdycsXG4gICdob3dldmVyJyxcbiAgJ2knLFxuICAnaWYnLFxuICAnaW4nLFxuICAnaW50bycsXG4gICdpcycsXG4gICdpdCcsXG4gICdpdHMnLFxuICAnanVzdCcsXG4gICdsZWFzdCcsXG4gICdsZXQnLFxuICAnbGlrZScsXG4gICdsaWtlbHknLFxuICAnbWF5JyxcbiAgJ21lJyxcbiAgJ21pZ2h0JyxcbiAgJ21vc3QnLFxuICAnbXVzdCcsXG4gICdteScsXG4gICduZWl0aGVyJyxcbiAgJ25vJyxcbiAgJ25vcicsXG4gICdub3QnLFxuICAnb2YnLFxuICAnb2ZmJyxcbiAgJ29mdGVuJyxcbiAgJ29uJyxcbiAgJ29ubHknLFxuICAnb3InLFxuICAnb3RoZXInLFxuICAnb3VyJyxcbiAgJ293bicsXG4gICdyYXRoZXInLFxuICAnc2FpZCcsXG4gICdzYXknLFxuICAnc2F5cycsXG4gICdzaGUnLFxuICAnc2hvdWxkJyxcbiAgJ3NpbmNlJyxcbiAgJ3NvJyxcbiAgJ3NvbWUnLFxuICAndGhhbicsXG4gICd0aGF0JyxcbiAgJ3RoZScsXG4gICd0aGVpcicsXG4gICd0aGVtJyxcbiAgJ3RoZW4nLFxuICAndGhlcmUnLFxuICAndGhlc2UnLFxuICAndGhleScsXG4gICd0aGlzJyxcbiAgJ3RpcycsXG4gICd0bycsXG4gICd0b28nLFxuICAndHdhcycsXG4gICd1cycsXG4gICd3YW50cycsXG4gICd3YXMnLFxuICAnd2UnLFxuICAnd2VyZScsXG4gICd3aGF0JyxcbiAgJ3doZW4nLFxuICAnd2hlcmUnLFxuICAnd2hpY2gnLFxuICAnd2hpbGUnLFxuICAnd2hvJyxcbiAgJ3dob20nLFxuICAnd2h5JyxcbiAgJ3dpbGwnLFxuICAnd2l0aCcsXG4gICd3b3VsZCcsXG4gICd5ZXQnLFxuICAneW91JyxcbiAgJ3lvdXInXG5dKVxuXG5sdW5yLlBpcGVsaW5lLnJlZ2lzdGVyRnVuY3Rpb24obHVuci5zdG9wV29yZEZpbHRlciwgJ3N0b3BXb3JkRmlsdGVyJylcbi8qIVxuICogbHVuci50cmltbWVyXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTggT2xpdmVyIE5pZ2h0aW5nYWxlXG4gKi9cblxuLyoqXG4gKiBsdW5yLnRyaW1tZXIgaXMgYSBwaXBlbGluZSBmdW5jdGlvbiBmb3IgdHJpbW1pbmcgbm9uIHdvcmRcbiAqIGNoYXJhY3RlcnMgZnJvbSB0aGUgYmVnaW5uaW5nIGFuZCBlbmQgb2YgdG9rZW5zIGJlZm9yZSB0aGV5XG4gKiBlbnRlciB0aGUgaW5kZXguXG4gKlxuICogVGhpcyBpbXBsZW1lbnRhdGlvbiBtYXkgbm90IHdvcmsgY29ycmVjdGx5IGZvciBub24gbGF0aW5cbiAqIGNoYXJhY3RlcnMgYW5kIHNob3VsZCBlaXRoZXIgYmUgcmVtb3ZlZCBvciBhZGFwdGVkIGZvciB1c2VcbiAqIHdpdGggbGFuZ3VhZ2VzIHdpdGggbm9uLWxhdGluIGNoYXJhY3RlcnMuXG4gKlxuICogQHN0YXRpY1xuICogQGltcGxlbWVudHMge2x1bnIuUGlwZWxpbmVGdW5jdGlvbn1cbiAqIEBwYXJhbSB7bHVuci5Ub2tlbn0gdG9rZW4gVGhlIHRva2VuIHRvIHBhc3MgdGhyb3VnaCB0aGUgZmlsdGVyXG4gKiBAcmV0dXJucyB7bHVuci5Ub2tlbn1cbiAqIEBzZWUgbHVuci5QaXBlbGluZVxuICovXG5sdW5yLnRyaW1tZXIgPSBmdW5jdGlvbiAodG9rZW4pIHtcbiAgcmV0dXJuIHRva2VuLnVwZGF0ZShmdW5jdGlvbiAocykge1xuICAgIHJldHVybiBzLnJlcGxhY2UoL15cXFcrLywgJycpLnJlcGxhY2UoL1xcVyskLywgJycpXG4gIH0pXG59XG5cbmx1bnIuUGlwZWxpbmUucmVnaXN0ZXJGdW5jdGlvbihsdW5yLnRyaW1tZXIsICd0cmltbWVyJylcbi8qIVxuICogbHVuci5Ub2tlblNldFxuICogQ29weXJpZ2h0IChDKSAyMDE4IE9saXZlciBOaWdodGluZ2FsZVxuICovXG5cbi8qKlxuICogQSB0b2tlbiBzZXQgaXMgdXNlZCB0byBzdG9yZSB0aGUgdW5pcXVlIGxpc3Qgb2YgYWxsIHRva2Vuc1xuICogd2l0aGluIGFuIGluZGV4LiBUb2tlbiBzZXRzIGFyZSBhbHNvIHVzZWQgdG8gcmVwcmVzZW50IGFuXG4gKiBpbmNvbWluZyBxdWVyeSB0byB0aGUgaW5kZXgsIHRoaXMgcXVlcnkgdG9rZW4gc2V0IGFuZCBpbmRleFxuICogdG9rZW4gc2V0IGFyZSB0aGVuIGludGVyc2VjdGVkIHRvIGZpbmQgd2hpY2ggdG9rZW5zIHRvIGxvb2tcbiAqIHVwIGluIHRoZSBpbnZlcnRlZCBpbmRleC5cbiAqXG4gKiBBIHRva2VuIHNldCBjYW4gaG9sZCBtdWx0aXBsZSB0b2tlbnMsIGFzIGluIHRoZSBjYXNlIG9mIHRoZVxuICogaW5kZXggdG9rZW4gc2V0LCBvciBpdCBjYW4gaG9sZCBhIHNpbmdsZSB0b2tlbiBhcyBpbiB0aGVcbiAqIGNhc2Ugb2YgYSBzaW1wbGUgcXVlcnkgdG9rZW4gc2V0LlxuICpcbiAqIEFkZGl0aW9uYWxseSB0b2tlbiBzZXRzIGFyZSB1c2VkIHRvIHBlcmZvcm0gd2lsZGNhcmQgbWF0Y2hpbmcuXG4gKiBMZWFkaW5nLCBjb250YWluZWQgYW5kIHRyYWlsaW5nIHdpbGRjYXJkcyBhcmUgc3VwcG9ydGVkLCBhbmRcbiAqIGZyb20gdGhpcyBlZGl0IGRpc3RhbmNlIG1hdGNoaW5nIGNhbiBhbHNvIGJlIHByb3ZpZGVkLlxuICpcbiAqIFRva2VuIHNldHMgYXJlIGltcGxlbWVudGVkIGFzIGEgbWluaW1hbCBmaW5pdGUgc3RhdGUgYXV0b21hdGEsXG4gKiB3aGVyZSBib3RoIGNvbW1vbiBwcmVmaXhlcyBhbmQgc3VmZml4ZXMgYXJlIHNoYXJlZCBiZXR3ZWVuIHRva2Vucy5cbiAqIFRoaXMgaGVscHMgdG8gcmVkdWNlIHRoZSBzcGFjZSB1c2VkIGZvciBzdG9yaW5nIHRoZSB0b2tlbiBzZXQuXG4gKlxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmx1bnIuVG9rZW5TZXQgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuZmluYWwgPSBmYWxzZVxuICB0aGlzLmVkZ2VzID0ge31cbiAgdGhpcy5pZCA9IGx1bnIuVG9rZW5TZXQuX25leHRJZFxuICBsdW5yLlRva2VuU2V0Ll9uZXh0SWQgKz0gMVxufVxuXG4vKipcbiAqIEtlZXBzIHRyYWNrIG9mIHRoZSBuZXh0LCBhdXRvIGluY3JlbWVudCwgaWRlbnRpZmllciB0byBhc3NpZ25cbiAqIHRvIGEgbmV3IHRva2VuU2V0LlxuICpcbiAqIFRva2VuU2V0cyByZXF1aXJlIGEgdW5pcXVlIGlkZW50aWZpZXIgdG8gYmUgY29ycmVjdGx5IG1pbmltaXNlZC5cbiAqXG4gKiBAcHJpdmF0ZVxuICovXG5sdW5yLlRva2VuU2V0Ll9uZXh0SWQgPSAxXG5cbi8qKlxuICogQ3JlYXRlcyBhIFRva2VuU2V0IGluc3RhbmNlIGZyb20gdGhlIGdpdmVuIHNvcnRlZCBhcnJheSBvZiB3b3Jkcy5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ1tdfSBhcnIgLSBBIHNvcnRlZCBhcnJheSBvZiBzdHJpbmdzIHRvIGNyZWF0ZSB0aGUgc2V0IGZyb20uXG4gKiBAcmV0dXJucyB7bHVuci5Ub2tlblNldH1cbiAqIEB0aHJvd3MgV2lsbCB0aHJvdyBhbiBlcnJvciBpZiB0aGUgaW5wdXQgYXJyYXkgaXMgbm90IHNvcnRlZC5cbiAqL1xubHVuci5Ub2tlblNldC5mcm9tQXJyYXkgPSBmdW5jdGlvbiAoYXJyKSB7XG4gIHZhciBidWlsZGVyID0gbmV3IGx1bnIuVG9rZW5TZXQuQnVpbGRlclxuXG4gIGZvciAodmFyIGkgPSAwLCBsZW4gPSBhcnIubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICBidWlsZGVyLmluc2VydChhcnJbaV0pXG4gIH1cblxuICBidWlsZGVyLmZpbmlzaCgpXG4gIHJldHVybiBidWlsZGVyLnJvb3Rcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgdG9rZW4gc2V0IGZyb20gYSBxdWVyeSBjbGF1c2UuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBjbGF1c2UgLSBBIHNpbmdsZSBjbGF1c2UgZnJvbSBsdW5yLlF1ZXJ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGNsYXVzZS50ZXJtIC0gVGhlIHF1ZXJ5IGNsYXVzZSB0ZXJtLlxuICogQHBhcmFtIHtudW1iZXJ9IFtjbGF1c2UuZWRpdERpc3RhbmNlXSAtIFRoZSBvcHRpb25hbCBlZGl0IGRpc3RhbmNlIGZvciB0aGUgdGVybS5cbiAqIEByZXR1cm5zIHtsdW5yLlRva2VuU2V0fVxuICovXG5sdW5yLlRva2VuU2V0LmZyb21DbGF1c2UgPSBmdW5jdGlvbiAoY2xhdXNlKSB7XG4gIGlmICgnZWRpdERpc3RhbmNlJyBpbiBjbGF1c2UpIHtcbiAgICByZXR1cm4gbHVuci5Ub2tlblNldC5mcm9tRnV6enlTdHJpbmcoY2xhdXNlLnRlcm0sIGNsYXVzZS5lZGl0RGlzdGFuY2UpXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGx1bnIuVG9rZW5TZXQuZnJvbVN0cmluZyhjbGF1c2UudGVybSlcbiAgfVxufVxuXG4vKipcbiAqIENyZWF0ZXMgYSB0b2tlbiBzZXQgcmVwcmVzZW50aW5nIGEgc2luZ2xlIHN0cmluZyB3aXRoIGEgc3BlY2lmaWVkXG4gKiBlZGl0IGRpc3RhbmNlLlxuICpcbiAqIEluc2VydGlvbnMsIGRlbGV0aW9ucywgc3Vic3RpdHV0aW9ucyBhbmQgdHJhbnNwb3NpdGlvbnMgYXJlIGVhY2hcbiAqIHRyZWF0ZWQgYXMgYW4gZWRpdCBkaXN0YW5jZSBvZiAxLlxuICpcbiAqIEluY3JlYXNpbmcgdGhlIGFsbG93ZWQgZWRpdCBkaXN0YW5jZSB3aWxsIGhhdmUgYSBkcmFtYXRpYyBpbXBhY3RcbiAqIG9uIHRoZSBwZXJmb3JtYW5jZSBvZiBib3RoIGNyZWF0aW5nIGFuZCBpbnRlcnNlY3RpbmcgdGhlc2UgVG9rZW5TZXRzLlxuICogSXQgaXMgYWR2aXNlZCB0byBrZWVwIHRoZSBlZGl0IGRpc3RhbmNlIGxlc3MgdGhhbiAzLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHIgLSBUaGUgc3RyaW5nIHRvIGNyZWF0ZSB0aGUgdG9rZW4gc2V0IGZyb20uXG4gKiBAcGFyYW0ge251bWJlcn0gZWRpdERpc3RhbmNlIC0gVGhlIGFsbG93ZWQgZWRpdCBkaXN0YW5jZSB0byBtYXRjaC5cbiAqIEByZXR1cm5zIHtsdW5yLlZlY3Rvcn1cbiAqL1xubHVuci5Ub2tlblNldC5mcm9tRnV6enlTdHJpbmcgPSBmdW5jdGlvbiAoc3RyLCBlZGl0RGlzdGFuY2UpIHtcbiAgdmFyIHJvb3QgPSBuZXcgbHVuci5Ub2tlblNldFxuXG4gIHZhciBzdGFjayA9IFt7XG4gICAgbm9kZTogcm9vdCxcbiAgICBlZGl0c1JlbWFpbmluZzogZWRpdERpc3RhbmNlLFxuICAgIHN0cjogc3RyXG4gIH1dXG5cbiAgd2hpbGUgKHN0YWNrLmxlbmd0aCkge1xuICAgIHZhciBmcmFtZSA9IHN0YWNrLnBvcCgpXG5cbiAgICAvLyBubyBlZGl0XG4gICAgaWYgKGZyYW1lLnN0ci5sZW5ndGggPiAwKSB7XG4gICAgICB2YXIgY2hhciA9IGZyYW1lLnN0ci5jaGFyQXQoMCksXG4gICAgICAgICAgbm9FZGl0Tm9kZVxuXG4gICAgICBpZiAoY2hhciBpbiBmcmFtZS5ub2RlLmVkZ2VzKSB7XG4gICAgICAgIG5vRWRpdE5vZGUgPSBmcmFtZS5ub2RlLmVkZ2VzW2NoYXJdXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBub0VkaXROb2RlID0gbmV3IGx1bnIuVG9rZW5TZXRcbiAgICAgICAgZnJhbWUubm9kZS5lZGdlc1tjaGFyXSA9IG5vRWRpdE5vZGVcbiAgICAgIH1cblxuICAgICAgaWYgKGZyYW1lLnN0ci5sZW5ndGggPT0gMSkge1xuICAgICAgICBub0VkaXROb2RlLmZpbmFsID0gdHJ1ZVxuICAgICAgfVxuXG4gICAgICBzdGFjay5wdXNoKHtcbiAgICAgICAgbm9kZTogbm9FZGl0Tm9kZSxcbiAgICAgICAgZWRpdHNSZW1haW5pbmc6IGZyYW1lLmVkaXRzUmVtYWluaW5nLFxuICAgICAgICBzdHI6IGZyYW1lLnN0ci5zbGljZSgxKVxuICAgICAgfSlcbiAgICB9XG5cbiAgICAvLyBkZWxldGlvblxuICAgIC8vIGNhbiBvbmx5IGRvIGEgZGVsZXRpb24gaWYgd2UgaGF2ZSBlbm91Z2ggZWRpdHMgcmVtYWluaW5nXG4gICAgLy8gYW5kIGlmIHRoZXJlIGFyZSBjaGFyYWN0ZXJzIGxlZnQgdG8gZGVsZXRlIGluIHRoZSBzdHJpbmdcbiAgICBpZiAoZnJhbWUuZWRpdHNSZW1haW5pbmcgPiAwICYmIGZyYW1lLnN0ci5sZW5ndGggPiAxKSB7XG4gICAgICB2YXIgY2hhciA9IGZyYW1lLnN0ci5jaGFyQXQoMSksXG4gICAgICAgICAgZGVsZXRpb25Ob2RlXG5cbiAgICAgIGlmIChjaGFyIGluIGZyYW1lLm5vZGUuZWRnZXMpIHtcbiAgICAgICAgZGVsZXRpb25Ob2RlID0gZnJhbWUubm9kZS5lZGdlc1tjaGFyXVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGVsZXRpb25Ob2RlID0gbmV3IGx1bnIuVG9rZW5TZXRcbiAgICAgICAgZnJhbWUubm9kZS5lZGdlc1tjaGFyXSA9IGRlbGV0aW9uTm9kZVxuICAgICAgfVxuXG4gICAgICBpZiAoZnJhbWUuc3RyLmxlbmd0aCA8PSAyKSB7XG4gICAgICAgIGRlbGV0aW9uTm9kZS5maW5hbCA9IHRydWVcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN0YWNrLnB1c2goe1xuICAgICAgICAgIG5vZGU6IGRlbGV0aW9uTm9kZSxcbiAgICAgICAgICBlZGl0c1JlbWFpbmluZzogZnJhbWUuZWRpdHNSZW1haW5pbmcgLSAxLFxuICAgICAgICAgIHN0cjogZnJhbWUuc3RyLnNsaWNlKDIpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gZGVsZXRpb25cbiAgICAvLyBqdXN0IHJlbW92aW5nIHRoZSBsYXN0IGNoYXJhY3RlciBmcm9tIHRoZSBzdHJcbiAgICBpZiAoZnJhbWUuZWRpdHNSZW1haW5pbmcgPiAwICYmIGZyYW1lLnN0ci5sZW5ndGggPT0gMSkge1xuICAgICAgZnJhbWUubm9kZS5maW5hbCA9IHRydWVcbiAgICB9XG5cbiAgICAvLyBzdWJzdGl0dXRpb25cbiAgICAvLyBjYW4gb25seSBkbyBhIHN1YnN0aXR1dGlvbiBpZiB3ZSBoYXZlIGVub3VnaCBlZGl0cyByZW1haW5pbmdcbiAgICAvLyBhbmQgaWYgdGhlcmUgYXJlIGNoYXJhY3RlcnMgbGVmdCB0byBzdWJzdGl0dXRlXG4gICAgaWYgKGZyYW1lLmVkaXRzUmVtYWluaW5nID4gMCAmJiBmcmFtZS5zdHIubGVuZ3RoID49IDEpIHtcbiAgICAgIGlmIChcIipcIiBpbiBmcmFtZS5ub2RlLmVkZ2VzKSB7XG4gICAgICAgIHZhciBzdWJzdGl0dXRpb25Ob2RlID0gZnJhbWUubm9kZS5lZGdlc1tcIipcIl1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBzdWJzdGl0dXRpb25Ob2RlID0gbmV3IGx1bnIuVG9rZW5TZXRcbiAgICAgICAgZnJhbWUubm9kZS5lZGdlc1tcIipcIl0gPSBzdWJzdGl0dXRpb25Ob2RlXG4gICAgICB9XG5cbiAgICAgIGlmIChmcmFtZS5zdHIubGVuZ3RoID09IDEpIHtcbiAgICAgICAgc3Vic3RpdHV0aW9uTm9kZS5maW5hbCA9IHRydWVcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN0YWNrLnB1c2goe1xuICAgICAgICAgIG5vZGU6IHN1YnN0aXR1dGlvbk5vZGUsXG4gICAgICAgICAgZWRpdHNSZW1haW5pbmc6IGZyYW1lLmVkaXRzUmVtYWluaW5nIC0gMSxcbiAgICAgICAgICBzdHI6IGZyYW1lLnN0ci5zbGljZSgxKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGluc2VydGlvblxuICAgIC8vIGNhbiBvbmx5IGRvIGluc2VydGlvbiBpZiB0aGVyZSBhcmUgZWRpdHMgcmVtYWluaW5nXG4gICAgaWYgKGZyYW1lLmVkaXRzUmVtYWluaW5nID4gMCkge1xuICAgICAgaWYgKFwiKlwiIGluIGZyYW1lLm5vZGUuZWRnZXMpIHtcbiAgICAgICAgdmFyIGluc2VydGlvbk5vZGUgPSBmcmFtZS5ub2RlLmVkZ2VzW1wiKlwiXVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIGluc2VydGlvbk5vZGUgPSBuZXcgbHVuci5Ub2tlblNldFxuICAgICAgICBmcmFtZS5ub2RlLmVkZ2VzW1wiKlwiXSA9IGluc2VydGlvbk5vZGVcbiAgICAgIH1cblxuICAgICAgaWYgKGZyYW1lLnN0ci5sZW5ndGggPT0gMCkge1xuICAgICAgICBpbnNlcnRpb25Ob2RlLmZpbmFsID0gdHJ1ZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3RhY2sucHVzaCh7XG4gICAgICAgICAgbm9kZTogaW5zZXJ0aW9uTm9kZSxcbiAgICAgICAgICBlZGl0c1JlbWFpbmluZzogZnJhbWUuZWRpdHNSZW1haW5pbmcgLSAxLFxuICAgICAgICAgIHN0cjogZnJhbWUuc3RyXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gdHJhbnNwb3NpdGlvblxuICAgIC8vIGNhbiBvbmx5IGRvIGEgdHJhbnNwb3NpdGlvbiBpZiB0aGVyZSBhcmUgZWRpdHMgcmVtYWluaW5nXG4gICAgLy8gYW5kIHRoZXJlIGFyZSBlbm91Z2ggY2hhcmFjdGVycyB0byB0cmFuc3Bvc2VcbiAgICBpZiAoZnJhbWUuZWRpdHNSZW1haW5pbmcgPiAwICYmIGZyYW1lLnN0ci5sZW5ndGggPiAxKSB7XG4gICAgICB2YXIgY2hhckEgPSBmcmFtZS5zdHIuY2hhckF0KDApLFxuICAgICAgICAgIGNoYXJCID0gZnJhbWUuc3RyLmNoYXJBdCgxKSxcbiAgICAgICAgICB0cmFuc3Bvc2VOb2RlXG5cbiAgICAgIGlmIChjaGFyQiBpbiBmcmFtZS5ub2RlLmVkZ2VzKSB7XG4gICAgICAgIHRyYW5zcG9zZU5vZGUgPSBmcmFtZS5ub2RlLmVkZ2VzW2NoYXJCXVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHJhbnNwb3NlTm9kZSA9IG5ldyBsdW5yLlRva2VuU2V0XG4gICAgICAgIGZyYW1lLm5vZGUuZWRnZXNbY2hhckJdID0gdHJhbnNwb3NlTm9kZVxuICAgICAgfVxuXG4gICAgICBpZiAoZnJhbWUuc3RyLmxlbmd0aCA9PSAxKSB7XG4gICAgICAgIHRyYW5zcG9zZU5vZGUuZmluYWwgPSB0cnVlXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdGFjay5wdXNoKHtcbiAgICAgICAgICBub2RlOiB0cmFuc3Bvc2VOb2RlLFxuICAgICAgICAgIGVkaXRzUmVtYWluaW5nOiBmcmFtZS5lZGl0c1JlbWFpbmluZyAtIDEsXG4gICAgICAgICAgc3RyOiBjaGFyQSArIGZyYW1lLnN0ci5zbGljZSgyKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiByb290XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIFRva2VuU2V0IGZyb20gYSBzdHJpbmcuXG4gKlxuICogVGhlIHN0cmluZyBtYXkgY29udGFpbiBvbmUgb3IgbW9yZSB3aWxkY2FyZCBjaGFyYWN0ZXJzICgqKVxuICogdGhhdCB3aWxsIGFsbG93IHdpbGRjYXJkIG1hdGNoaW5nIHdoZW4gaW50ZXJzZWN0aW5nIHdpdGhcbiAqIGFub3RoZXIgVG9rZW5TZXQuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHN0ciAtIFRoZSBzdHJpbmcgdG8gY3JlYXRlIGEgVG9rZW5TZXQgZnJvbS5cbiAqIEByZXR1cm5zIHtsdW5yLlRva2VuU2V0fVxuICovXG5sdW5yLlRva2VuU2V0LmZyb21TdHJpbmcgPSBmdW5jdGlvbiAoc3RyKSB7XG4gIHZhciBub2RlID0gbmV3IGx1bnIuVG9rZW5TZXQsXG4gICAgICByb290ID0gbm9kZVxuXG4gIC8qXG4gICAqIEl0ZXJhdGVzIHRocm91Z2ggYWxsIGNoYXJhY3RlcnMgd2l0aGluIHRoZSBwYXNzZWQgc3RyaW5nXG4gICAqIGFwcGVuZGluZyBhIG5vZGUgZm9yIGVhY2ggY2hhcmFjdGVyLlxuICAgKlxuICAgKiBXaGVuIGEgd2lsZGNhcmQgY2hhcmFjdGVyIGlzIGZvdW5kIHRoZW4gYSBzZWxmXG4gICAqIHJlZmVyZW5jaW5nIGVkZ2UgaXMgaW50cm9kdWNlZCB0byBjb250aW51YWxseSBtYXRjaFxuICAgKiBhbnkgbnVtYmVyIG9mIGFueSBjaGFyYWN0ZXJzLlxuICAgKi9cbiAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHN0ci5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIHZhciBjaGFyID0gc3RyW2ldLFxuICAgICAgICBmaW5hbCA9IChpID09IGxlbiAtIDEpXG5cbiAgICBpZiAoY2hhciA9PSBcIipcIikge1xuICAgICAgbm9kZS5lZGdlc1tjaGFyXSA9IG5vZGVcbiAgICAgIG5vZGUuZmluYWwgPSBmaW5hbFxuXG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBuZXh0ID0gbmV3IGx1bnIuVG9rZW5TZXRcbiAgICAgIG5leHQuZmluYWwgPSBmaW5hbFxuXG4gICAgICBub2RlLmVkZ2VzW2NoYXJdID0gbmV4dFxuICAgICAgbm9kZSA9IG5leHRcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcm9vdFxufVxuXG4vKipcbiAqIENvbnZlcnRzIHRoaXMgVG9rZW5TZXQgaW50byBhbiBhcnJheSBvZiBzdHJpbmdzXG4gKiBjb250YWluZWQgd2l0aGluIHRoZSBUb2tlblNldC5cbiAqXG4gKiBAcmV0dXJucyB7c3RyaW5nW119XG4gKi9cbmx1bnIuVG9rZW5TZXQucHJvdG90eXBlLnRvQXJyYXkgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciB3b3JkcyA9IFtdXG5cbiAgdmFyIHN0YWNrID0gW3tcbiAgICBwcmVmaXg6IFwiXCIsXG4gICAgbm9kZTogdGhpc1xuICB9XVxuXG4gIHdoaWxlIChzdGFjay5sZW5ndGgpIHtcbiAgICB2YXIgZnJhbWUgPSBzdGFjay5wb3AoKSxcbiAgICAgICAgZWRnZXMgPSBPYmplY3Qua2V5cyhmcmFtZS5ub2RlLmVkZ2VzKSxcbiAgICAgICAgbGVuID0gZWRnZXMubGVuZ3RoXG5cbiAgICBpZiAoZnJhbWUubm9kZS5maW5hbCkge1xuICAgICAgLyogSW4gU2FmYXJpLCBhdCB0aGlzIHBvaW50IHRoZSBwcmVmaXggaXMgc29tZXRpbWVzIGNvcnJ1cHRlZCwgc2VlOlxuICAgICAgICogaHR0cHM6Ly9naXRodWIuY29tL29saXZlcm5uL2x1bnIuanMvaXNzdWVzLzI3OSBDYWxsaW5nIGFueVxuICAgICAgICogU3RyaW5nLnByb3RvdHlwZSBtZXRob2QgZm9yY2VzIFNhZmFyaSB0byBcImNhc3RcIiB0aGlzIHN0cmluZyB0byB3aGF0XG4gICAgICAgKiBpdCdzIHN1cHBvc2VkIHRvIGJlLCBmaXhpbmcgdGhlIGJ1Zy4gKi9cbiAgICAgIGZyYW1lLnByZWZpeC5jaGFyQXQoMClcbiAgICAgIHdvcmRzLnB1c2goZnJhbWUucHJlZml4KVxuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIHZhciBlZGdlID0gZWRnZXNbaV1cblxuICAgICAgc3RhY2sucHVzaCh7XG4gICAgICAgIHByZWZpeDogZnJhbWUucHJlZml4LmNvbmNhdChlZGdlKSxcbiAgICAgICAgbm9kZTogZnJhbWUubm9kZS5lZGdlc1tlZGdlXVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gd29yZHNcbn1cblxuLyoqXG4gKiBHZW5lcmF0ZXMgYSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgYSBUb2tlblNldC5cbiAqXG4gKiBUaGlzIGlzIGludGVuZGVkIHRvIGFsbG93IFRva2VuU2V0cyB0byBiZSB1c2VkIGFzIGtleXNcbiAqIGluIG9iamVjdHMsIGxhcmdlbHkgdG8gYWlkIHRoZSBjb25zdHJ1Y3Rpb24gYW5kIG1pbmltaXNhdGlvblxuICogb2YgYSBUb2tlblNldC4gQXMgc3VjaCBpdCBpcyBub3QgZGVzaWduZWQgdG8gYmUgYSBodW1hblxuICogZnJpZW5kbHkgcmVwcmVzZW50YXRpb24gb2YgdGhlIFRva2VuU2V0LlxuICpcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmx1bnIuVG9rZW5TZXQucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICAvLyBOT1RFOiBVc2luZyBPYmplY3Qua2V5cyBoZXJlIGFzIHRoaXMuZWRnZXMgaXMgdmVyeSBsaWtlbHlcbiAgLy8gdG8gZW50ZXIgJ2hhc2gtbW9kZScgd2l0aCBtYW55IGtleXMgYmVpbmcgYWRkZWRcbiAgLy9cbiAgLy8gYXZvaWRpbmcgYSBmb3ItaW4gbG9vcCBoZXJlIGFzIGl0IGxlYWRzIHRvIHRoZSBmdW5jdGlvblxuICAvLyBiZWluZyBkZS1vcHRpbWlzZWQgKGF0IGxlYXN0IGluIFY4KS4gRnJvbSBzb21lIHNpbXBsZVxuICAvLyBiZW5jaG1hcmtzIHRoZSBwZXJmb3JtYW5jZSBpcyBjb21wYXJhYmxlLCBidXQgYWxsb3dpbmdcbiAgLy8gVjggdG8gb3B0aW1pemUgbWF5IG1lYW4gZWFzeSBwZXJmb3JtYW5jZSB3aW5zIGluIHRoZSBmdXR1cmUuXG5cbiAgaWYgKHRoaXMuX3N0cikge1xuICAgIHJldHVybiB0aGlzLl9zdHJcbiAgfVxuXG4gIHZhciBzdHIgPSB0aGlzLmZpbmFsID8gJzEnIDogJzAnLFxuICAgICAgbGFiZWxzID0gT2JqZWN0LmtleXModGhpcy5lZGdlcykuc29ydCgpLFxuICAgICAgbGVuID0gbGFiZWxzLmxlbmd0aFxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICB2YXIgbGFiZWwgPSBsYWJlbHNbaV0sXG4gICAgICAgIG5vZGUgPSB0aGlzLmVkZ2VzW2xhYmVsXVxuXG4gICAgc3RyID0gc3RyICsgbGFiZWwgKyBub2RlLmlkXG4gIH1cblxuICByZXR1cm4gc3RyXG59XG5cbi8qKlxuICogUmV0dXJucyBhIG5ldyBUb2tlblNldCB0aGF0IGlzIHRoZSBpbnRlcnNlY3Rpb24gb2ZcbiAqIHRoaXMgVG9rZW5TZXQgYW5kIHRoZSBwYXNzZWQgVG9rZW5TZXQuXG4gKlxuICogVGhpcyBpbnRlcnNlY3Rpb24gd2lsbCB0YWtlIGludG8gYWNjb3VudCBhbnkgd2lsZGNhcmRzXG4gKiBjb250YWluZWQgd2l0aGluIHRoZSBUb2tlblNldC5cbiAqXG4gKiBAcGFyYW0ge2x1bnIuVG9rZW5TZXR9IGIgLSBBbiBvdGhlciBUb2tlblNldCB0byBpbnRlcnNlY3Qgd2l0aC5cbiAqIEByZXR1cm5zIHtsdW5yLlRva2VuU2V0fVxuICovXG5sdW5yLlRva2VuU2V0LnByb3RvdHlwZS5pbnRlcnNlY3QgPSBmdW5jdGlvbiAoYikge1xuICB2YXIgb3V0cHV0ID0gbmV3IGx1bnIuVG9rZW5TZXQsXG4gICAgICBmcmFtZSA9IHVuZGVmaW5lZFxuXG4gIHZhciBzdGFjayA9IFt7XG4gICAgcU5vZGU6IGIsXG4gICAgb3V0cHV0OiBvdXRwdXQsXG4gICAgbm9kZTogdGhpc1xuICB9XVxuXG4gIHdoaWxlIChzdGFjay5sZW5ndGgpIHtcbiAgICBmcmFtZSA9IHN0YWNrLnBvcCgpXG5cbiAgICAvLyBOT1RFOiBBcyB3aXRoIHRoZSAjdG9TdHJpbmcgbWV0aG9kLCB3ZSBhcmUgdXNpbmdcbiAgICAvLyBPYmplY3Qua2V5cyBhbmQgYSBmb3IgbG9vcCBpbnN0ZWFkIG9mIGEgZm9yLWluIGxvb3BcbiAgICAvLyBhcyBib3RoIG9mIHRoZXNlIG9iamVjdHMgZW50ZXIgJ2hhc2gnIG1vZGUsIGNhdXNpbmdcbiAgICAvLyB0aGUgZnVuY3Rpb24gdG8gYmUgZGUtb3B0aW1pc2VkIGluIFY4XG4gICAgdmFyIHFFZGdlcyA9IE9iamVjdC5rZXlzKGZyYW1lLnFOb2RlLmVkZ2VzKSxcbiAgICAgICAgcUxlbiA9IHFFZGdlcy5sZW5ndGgsXG4gICAgICAgIG5FZGdlcyA9IE9iamVjdC5rZXlzKGZyYW1lLm5vZGUuZWRnZXMpLFxuICAgICAgICBuTGVuID0gbkVkZ2VzLmxlbmd0aFxuXG4gICAgZm9yICh2YXIgcSA9IDA7IHEgPCBxTGVuOyBxKyspIHtcbiAgICAgIHZhciBxRWRnZSA9IHFFZGdlc1txXVxuXG4gICAgICBmb3IgKHZhciBuID0gMDsgbiA8IG5MZW47IG4rKykge1xuICAgICAgICB2YXIgbkVkZ2UgPSBuRWRnZXNbbl1cblxuICAgICAgICBpZiAobkVkZ2UgPT0gcUVkZ2UgfHwgcUVkZ2UgPT0gJyonKSB7XG4gICAgICAgICAgdmFyIG5vZGUgPSBmcmFtZS5ub2RlLmVkZ2VzW25FZGdlXSxcbiAgICAgICAgICAgICAgcU5vZGUgPSBmcmFtZS5xTm9kZS5lZGdlc1txRWRnZV0sXG4gICAgICAgICAgICAgIGZpbmFsID0gbm9kZS5maW5hbCAmJiBxTm9kZS5maW5hbCxcbiAgICAgICAgICAgICAgbmV4dCA9IHVuZGVmaW5lZFxuXG4gICAgICAgICAgaWYgKG5FZGdlIGluIGZyYW1lLm91dHB1dC5lZGdlcykge1xuICAgICAgICAgICAgLy8gYW4gZWRnZSBhbHJlYWR5IGV4aXN0cyBmb3IgdGhpcyBjaGFyYWN0ZXJcbiAgICAgICAgICAgIC8vIG5vIG5lZWQgdG8gY3JlYXRlIGEgbmV3IG5vZGUsIGp1c3Qgc2V0IHRoZSBmaW5hbGl0eVxuICAgICAgICAgICAgLy8gYml0IHVubGVzcyB0aGlzIG5vZGUgaXMgYWxyZWFkeSBmaW5hbFxuICAgICAgICAgICAgbmV4dCA9IGZyYW1lLm91dHB1dC5lZGdlc1tuRWRnZV1cbiAgICAgICAgICAgIG5leHQuZmluYWwgPSBuZXh0LmZpbmFsIHx8IGZpbmFsXG5cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gbm8gZWRnZSBleGlzdHMgeWV0LCBtdXN0IGNyZWF0ZSBvbmVcbiAgICAgICAgICAgIC8vIHNldCB0aGUgZmluYWxpdHkgYml0IGFuZCBpbnNlcnQgaXRcbiAgICAgICAgICAgIC8vIGludG8gdGhlIG91dHB1dFxuICAgICAgICAgICAgbmV4dCA9IG5ldyBsdW5yLlRva2VuU2V0XG4gICAgICAgICAgICBuZXh0LmZpbmFsID0gZmluYWxcbiAgICAgICAgICAgIGZyYW1lLm91dHB1dC5lZGdlc1tuRWRnZV0gPSBuZXh0XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgc3RhY2sucHVzaCh7XG4gICAgICAgICAgICBxTm9kZTogcU5vZGUsXG4gICAgICAgICAgICBvdXRwdXQ6IG5leHQsXG4gICAgICAgICAgICBub2RlOiBub2RlXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBvdXRwdXRcbn1cbmx1bnIuVG9rZW5TZXQuQnVpbGRlciA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5wcmV2aW91c1dvcmQgPSBcIlwiXG4gIHRoaXMucm9vdCA9IG5ldyBsdW5yLlRva2VuU2V0XG4gIHRoaXMudW5jaGVja2VkTm9kZXMgPSBbXVxuICB0aGlzLm1pbmltaXplZE5vZGVzID0ge31cbn1cblxubHVuci5Ub2tlblNldC5CdWlsZGVyLnByb3RvdHlwZS5pbnNlcnQgPSBmdW5jdGlvbiAod29yZCkge1xuICB2YXIgbm9kZSxcbiAgICAgIGNvbW1vblByZWZpeCA9IDBcblxuICBpZiAod29yZCA8IHRoaXMucHJldmlvdXNXb3JkKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yIChcIk91dCBvZiBvcmRlciB3b3JkIGluc2VydGlvblwiKVxuICB9XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB3b3JkLmxlbmd0aCAmJiBpIDwgdGhpcy5wcmV2aW91c1dvcmQubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAod29yZFtpXSAhPSB0aGlzLnByZXZpb3VzV29yZFtpXSkgYnJlYWtcbiAgICBjb21tb25QcmVmaXgrK1xuICB9XG5cbiAgdGhpcy5taW5pbWl6ZShjb21tb25QcmVmaXgpXG5cbiAgaWYgKHRoaXMudW5jaGVja2VkTm9kZXMubGVuZ3RoID09IDApIHtcbiAgICBub2RlID0gdGhpcy5yb290XG4gIH0gZWxzZSB7XG4gICAgbm9kZSA9IHRoaXMudW5jaGVja2VkTm9kZXNbdGhpcy51bmNoZWNrZWROb2Rlcy5sZW5ndGggLSAxXS5jaGlsZFxuICB9XG5cbiAgZm9yICh2YXIgaSA9IGNvbW1vblByZWZpeDsgaSA8IHdvcmQubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgbmV4dE5vZGUgPSBuZXcgbHVuci5Ub2tlblNldCxcbiAgICAgICAgY2hhciA9IHdvcmRbaV1cblxuICAgIG5vZGUuZWRnZXNbY2hhcl0gPSBuZXh0Tm9kZVxuXG4gICAgdGhpcy51bmNoZWNrZWROb2Rlcy5wdXNoKHtcbiAgICAgIHBhcmVudDogbm9kZSxcbiAgICAgIGNoYXI6IGNoYXIsXG4gICAgICBjaGlsZDogbmV4dE5vZGVcbiAgICB9KVxuXG4gICAgbm9kZSA9IG5leHROb2RlXG4gIH1cblxuICBub2RlLmZpbmFsID0gdHJ1ZVxuICB0aGlzLnByZXZpb3VzV29yZCA9IHdvcmRcbn1cblxubHVuci5Ub2tlblNldC5CdWlsZGVyLnByb3RvdHlwZS5maW5pc2ggPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMubWluaW1pemUoMClcbn1cblxubHVuci5Ub2tlblNldC5CdWlsZGVyLnByb3RvdHlwZS5taW5pbWl6ZSA9IGZ1bmN0aW9uIChkb3duVG8pIHtcbiAgZm9yICh2YXIgaSA9IHRoaXMudW5jaGVja2VkTm9kZXMubGVuZ3RoIC0gMTsgaSA+PSBkb3duVG87IGktLSkge1xuICAgIHZhciBub2RlID0gdGhpcy51bmNoZWNrZWROb2Rlc1tpXSxcbiAgICAgICAgY2hpbGRLZXkgPSBub2RlLmNoaWxkLnRvU3RyaW5nKClcblxuICAgIGlmIChjaGlsZEtleSBpbiB0aGlzLm1pbmltaXplZE5vZGVzKSB7XG4gICAgICBub2RlLnBhcmVudC5lZGdlc1tub2RlLmNoYXJdID0gdGhpcy5taW5pbWl6ZWROb2Rlc1tjaGlsZEtleV1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gQ2FjaGUgdGhlIGtleSBmb3IgdGhpcyBub2RlIHNpbmNlXG4gICAgICAvLyB3ZSBrbm93IGl0IGNhbid0IGNoYW5nZSBhbnltb3JlXG4gICAgICBub2RlLmNoaWxkLl9zdHIgPSBjaGlsZEtleVxuXG4gICAgICB0aGlzLm1pbmltaXplZE5vZGVzW2NoaWxkS2V5XSA9IG5vZGUuY2hpbGRcbiAgICB9XG5cbiAgICB0aGlzLnVuY2hlY2tlZE5vZGVzLnBvcCgpXG4gIH1cbn1cbi8qIVxuICogbHVuci5JbmRleFxuICogQ29weXJpZ2h0IChDKSAyMDE4IE9saXZlciBOaWdodGluZ2FsZVxuICovXG5cbi8qKlxuICogQW4gaW5kZXggY29udGFpbnMgdGhlIGJ1aWx0IGluZGV4IG9mIGFsbCBkb2N1bWVudHMgYW5kIHByb3ZpZGVzIGEgcXVlcnkgaW50ZXJmYWNlXG4gKiB0byB0aGUgaW5kZXguXG4gKlxuICogVXN1YWxseSBpbnN0YW5jZXMgb2YgbHVuci5JbmRleCB3aWxsIG5vdCBiZSBjcmVhdGVkIHVzaW5nIHRoaXMgY29uc3RydWN0b3IsIGluc3RlYWRcbiAqIGx1bnIuQnVpbGRlciBzaG91bGQgYmUgdXNlZCB0byBjb25zdHJ1Y3QgbmV3IGluZGV4ZXMsIG9yIGx1bnIuSW5kZXgubG9hZCBzaG91bGQgYmVcbiAqIHVzZWQgdG8gbG9hZCBwcmV2aW91c2x5IGJ1aWx0IGFuZCBzZXJpYWxpemVkIGluZGV4ZXMuXG4gKlxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge09iamVjdH0gYXR0cnMgLSBUaGUgYXR0cmlidXRlcyBvZiB0aGUgYnVpbHQgc2VhcmNoIGluZGV4LlxuICogQHBhcmFtIHtPYmplY3R9IGF0dHJzLmludmVydGVkSW5kZXggLSBBbiBpbmRleCBvZiB0ZXJtL2ZpZWxkIHRvIGRvY3VtZW50IHJlZmVyZW5jZS5cbiAqIEBwYXJhbSB7T2JqZWN0PHN0cmluZywgbHVuci5WZWN0b3I+fSBhdHRycy5maWVsZFZlY3RvcnMgLSBGaWVsZCB2ZWN0b3JzXG4gKiBAcGFyYW0ge2x1bnIuVG9rZW5TZXR9IGF0dHJzLnRva2VuU2V0IC0gQW4gc2V0IG9mIGFsbCBjb3JwdXMgdG9rZW5zLlxuICogQHBhcmFtIHtzdHJpbmdbXX0gYXR0cnMuZmllbGRzIC0gVGhlIG5hbWVzIG9mIGluZGV4ZWQgZG9jdW1lbnQgZmllbGRzLlxuICogQHBhcmFtIHtsdW5yLlBpcGVsaW5lfSBhdHRycy5waXBlbGluZSAtIFRoZSBwaXBlbGluZSB0byB1c2UgZm9yIHNlYXJjaCB0ZXJtcy5cbiAqL1xubHVuci5JbmRleCA9IGZ1bmN0aW9uIChhdHRycykge1xuICB0aGlzLmludmVydGVkSW5kZXggPSBhdHRycy5pbnZlcnRlZEluZGV4XG4gIHRoaXMuZmllbGRWZWN0b3JzID0gYXR0cnMuZmllbGRWZWN0b3JzXG4gIHRoaXMudG9rZW5TZXQgPSBhdHRycy50b2tlblNldFxuICB0aGlzLmZpZWxkcyA9IGF0dHJzLmZpZWxkc1xuICB0aGlzLnBpcGVsaW5lID0gYXR0cnMucGlwZWxpbmVcbn1cblxuLyoqXG4gKiBBIHJlc3VsdCBjb250YWlucyBkZXRhaWxzIG9mIGEgZG9jdW1lbnQgbWF0Y2hpbmcgYSBzZWFyY2ggcXVlcnkuXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBsdW5yLkluZGV4flJlc3VsdFxuICogQHByb3BlcnR5IHtzdHJpbmd9IHJlZiAtIFRoZSByZWZlcmVuY2Ugb2YgdGhlIGRvY3VtZW50IHRoaXMgcmVzdWx0IHJlcHJlc2VudHMuXG4gKiBAcHJvcGVydHkge251bWJlcn0gc2NvcmUgLSBBIG51bWJlciBiZXR3ZWVuIDAgYW5kIDEgcmVwcmVzZW50aW5nIGhvdyBzaW1pbGFyIHRoaXMgZG9jdW1lbnQgaXMgdG8gdGhlIHF1ZXJ5LlxuICogQHByb3BlcnR5IHtsdW5yLk1hdGNoRGF0YX0gbWF0Y2hEYXRhIC0gQ29udGFpbnMgbWV0YWRhdGEgYWJvdXQgdGhpcyBtYXRjaCBpbmNsdWRpbmcgd2hpY2ggdGVybShzKSBjYXVzZWQgdGhlIG1hdGNoLlxuICovXG5cbi8qKlxuICogQWx0aG91Z2ggbHVuciBwcm92aWRlcyB0aGUgYWJpbGl0eSB0byBjcmVhdGUgcXVlcmllcyB1c2luZyBsdW5yLlF1ZXJ5LCBpdCBhbHNvIHByb3ZpZGVzIGEgc2ltcGxlXG4gKiBxdWVyeSBsYW5ndWFnZSB3aGljaCBpdHNlbGYgaXMgcGFyc2VkIGludG8gYW4gaW5zdGFuY2Ugb2YgbHVuci5RdWVyeS5cbiAqXG4gKiBGb3IgcHJvZ3JhbW1hdGljYWxseSBidWlsZGluZyBxdWVyaWVzIGl0IGlzIGFkdmlzZWQgdG8gZGlyZWN0bHkgdXNlIGx1bnIuUXVlcnksIHRoZSBxdWVyeSBsYW5ndWFnZVxuICogaXMgYmVzdCB1c2VkIGZvciBodW1hbiBlbnRlcmVkIHRleHQgcmF0aGVyIHRoYW4gcHJvZ3JhbSBnZW5lcmF0ZWQgdGV4dC5cbiAqXG4gKiBBdCBpdHMgc2ltcGxlc3QgcXVlcmllcyBjYW4ganVzdCBiZSBhIHNpbmdsZSB0ZXJtLCBlLmcuIGBoZWxsb2AsIG11bHRpcGxlIHRlcm1zIGFyZSBhbHNvIHN1cHBvcnRlZFxuICogYW5kIHdpbGwgYmUgY29tYmluZWQgd2l0aCBPUiwgZS5nIGBoZWxsbyB3b3JsZGAgd2lsbCBtYXRjaCBkb2N1bWVudHMgdGhhdCBjb250YWluIGVpdGhlciAnaGVsbG8nXG4gKiBvciAnd29ybGQnLCB0aG91Z2ggdGhvc2UgdGhhdCBjb250YWluIGJvdGggd2lsbCByYW5rIGhpZ2hlciBpbiB0aGUgcmVzdWx0cy5cbiAqXG4gKiBXaWxkY2FyZHMgY2FuIGJlIGluY2x1ZGVkIGluIHRlcm1zIHRvIG1hdGNoIG9uZSBvciBtb3JlIHVuc3BlY2lmaWVkIGNoYXJhY3RlcnMsIHRoZXNlIHdpbGRjYXJkcyBjYW5cbiAqIGJlIGluc2VydGVkIGFueXdoZXJlIHdpdGhpbiB0aGUgdGVybSwgYW5kIG1vcmUgdGhhbiBvbmUgd2lsZGNhcmQgY2FuIGV4aXN0IGluIGEgc2luZ2xlIHRlcm0uIEFkZGluZ1xuICogd2lsZGNhcmRzIHdpbGwgaW5jcmVhc2UgdGhlIG51bWJlciBvZiBkb2N1bWVudHMgdGhhdCB3aWxsIGJlIGZvdW5kIGJ1dCBjYW4gYWxzbyBoYXZlIGEgbmVnYXRpdmVcbiAqIGltcGFjdCBvbiBxdWVyeSBwZXJmb3JtYW5jZSwgZXNwZWNpYWxseSB3aXRoIHdpbGRjYXJkcyBhdCB0aGUgYmVnaW5uaW5nIG9mIGEgdGVybS5cbiAqXG4gKiBUZXJtcyBjYW4gYmUgcmVzdHJpY3RlZCB0byBzcGVjaWZpYyBmaWVsZHMsIGUuZy4gYHRpdGxlOmhlbGxvYCwgb25seSBkb2N1bWVudHMgd2l0aCB0aGUgdGVybVxuICogaGVsbG8gaW4gdGhlIHRpdGxlIGZpZWxkIHdpbGwgbWF0Y2ggdGhpcyBxdWVyeS4gVXNpbmcgYSBmaWVsZCBub3QgcHJlc2VudCBpbiB0aGUgaW5kZXggd2lsbCBsZWFkXG4gKiB0byBhbiBlcnJvciBiZWluZyB0aHJvd24uXG4gKlxuICogTW9kaWZpZXJzIGNhbiBhbHNvIGJlIGFkZGVkIHRvIHRlcm1zLCBsdW5yIHN1cHBvcnRzIGVkaXQgZGlzdGFuY2UgYW5kIGJvb3N0IG1vZGlmaWVycyBvbiB0ZXJtcy4gQSB0ZXJtXG4gKiBib29zdCB3aWxsIG1ha2UgZG9jdW1lbnRzIG1hdGNoaW5nIHRoYXQgdGVybSBzY29yZSBoaWdoZXIsIGUuZy4gYGZvb141YC4gRWRpdCBkaXN0YW5jZSBpcyBhbHNvIHN1cHBvcnRlZFxuICogdG8gcHJvdmlkZSBmdXp6eSBtYXRjaGluZywgZS5nLiAnaGVsbG9+Micgd2lsbCBtYXRjaCBkb2N1bWVudHMgd2l0aCBoZWxsbyB3aXRoIGFuIGVkaXQgZGlzdGFuY2Ugb2YgMi5cbiAqIEF2b2lkIGxhcmdlIHZhbHVlcyBmb3IgZWRpdCBkaXN0YW5jZSB0byBpbXByb3ZlIHF1ZXJ5IHBlcmZvcm1hbmNlLlxuICpcbiAqIEVhY2ggdGVybSBhbHNvIHN1cHBvcnRzIGEgcHJlc2VuY2UgbW9kaWZpZXIuIEJ5IGRlZmF1bHQgYSB0ZXJtJ3MgcHJlc2VuY2UgaW4gZG9jdW1lbnQgaXMgb3B0aW9uYWwsIGhvd2V2ZXJcbiAqIHRoaXMgY2FuIGJlIGNoYW5nZWQgdG8gZWl0aGVyIHJlcXVpcmVkIG9yIHByb2hpYml0ZWQuIEZvciBhIHRlcm0ncyBwcmVzZW5jZSB0byBiZSByZXF1aXJlZCBpbiBhIGRvY3VtZW50IHRoZVxuICogdGVybSBzaG91bGQgYmUgcHJlZml4ZWQgd2l0aCBhICcrJywgZS5nLiBgK2ZvbyBiYXJgIGlzIGEgc2VhcmNoIGZvciBkb2N1bWVudHMgdGhhdCBtdXN0IGNvbnRhaW4gJ2ZvbycgYW5kXG4gKiBvcHRpb25hbGx5IGNvbnRhaW4gJ2JhcicuIENvbnZlcnNlbHkgYSBsZWFkaW5nICctJyBzZXRzIHRoZSB0ZXJtcyBwcmVzZW5jZSB0byBwcm9oaWJpdGVkLCBpLmUuIGl0IG11c3Qgbm90XG4gKiBhcHBlYXIgaW4gYSBkb2N1bWVudCwgZS5nLiBgLWZvbyBiYXJgIGlzIGEgc2VhcmNoIGZvciBkb2N1bWVudHMgdGhhdCBkbyBub3QgY29udGFpbiAnZm9vJyBidXQgbWF5IGNvbnRhaW4gJ2JhcicuXG4gKlxuICogVG8gZXNjYXBlIHNwZWNpYWwgY2hhcmFjdGVycyB0aGUgYmFja3NsYXNoIGNoYXJhY3RlciAnXFwnIGNhbiBiZSB1c2VkLCB0aGlzIGFsbG93cyBzZWFyY2hlcyB0byBpbmNsdWRlXG4gKiBjaGFyYWN0ZXJzIHRoYXQgd291bGQgbm9ybWFsbHkgYmUgY29uc2lkZXJlZCBtb2RpZmllcnMsIGUuZy4gYGZvb1xcfjJgIHdpbGwgc2VhcmNoIGZvciBhIHRlcm0gXCJmb29+MlwiIGluc3RlYWRcbiAqIG9mIGF0dGVtcHRpbmcgdG8gYXBwbHkgYSBib29zdCBvZiAyIHRvIHRoZSBzZWFyY2ggdGVybSBcImZvb1wiLlxuICpcbiAqIEB0eXBlZGVmIHtzdHJpbmd9IGx1bnIuSW5kZXh+UXVlcnlTdHJpbmdcbiAqIEBleGFtcGxlIDxjYXB0aW9uPlNpbXBsZSBzaW5nbGUgdGVybSBxdWVyeTwvY2FwdGlvbj5cbiAqIGhlbGxvXG4gKiBAZXhhbXBsZSA8Y2FwdGlvbj5NdWx0aXBsZSB0ZXJtIHF1ZXJ5PC9jYXB0aW9uPlxuICogaGVsbG8gd29ybGRcbiAqIEBleGFtcGxlIDxjYXB0aW9uPnRlcm0gc2NvcGVkIHRvIGEgZmllbGQ8L2NhcHRpb24+XG4gKiB0aXRsZTpoZWxsb1xuICogQGV4YW1wbGUgPGNhcHRpb24+dGVybSB3aXRoIGEgYm9vc3Qgb2YgMTA8L2NhcHRpb24+XG4gKiBoZWxsb14xMFxuICogQGV4YW1wbGUgPGNhcHRpb24+dGVybSB3aXRoIGFuIGVkaXQgZGlzdGFuY2Ugb2YgMjwvY2FwdGlvbj5cbiAqIGhlbGxvfjJcbiAqIEBleGFtcGxlIDxjYXB0aW9uPnRlcm1zIHdpdGggcHJlc2VuY2UgbW9kaWZpZXJzPC9jYXB0aW9uPlxuICogLWZvbyArYmFyIGJhelxuICovXG5cbi8qKlxuICogUGVyZm9ybXMgYSBzZWFyY2ggYWdhaW5zdCB0aGUgaW5kZXggdXNpbmcgbHVuciBxdWVyeSBzeW50YXguXG4gKlxuICogUmVzdWx0cyB3aWxsIGJlIHJldHVybmVkIHNvcnRlZCBieSB0aGVpciBzY29yZSwgdGhlIG1vc3QgcmVsZXZhbnQgcmVzdWx0c1xuICogd2lsbCBiZSByZXR1cm5lZCBmaXJzdC4gIEZvciBkZXRhaWxzIG9uIGhvdyB0aGUgc2NvcmUgaXMgY2FsY3VsYXRlZCwgcGxlYXNlIHNlZVxuICogdGhlIHtAbGluayBodHRwczovL2x1bnJqcy5jb20vZ3VpZGVzL3NlYXJjaGluZy5odG1sI3Njb3Jpbmd8Z3VpZGV9LlxuICpcbiAqIEZvciBtb3JlIHByb2dyYW1tYXRpYyBxdWVyeWluZyB1c2UgbHVuci5JbmRleCNxdWVyeS5cbiAqXG4gKiBAcGFyYW0ge2x1bnIuSW5kZXh+UXVlcnlTdHJpbmd9IHF1ZXJ5U3RyaW5nIC0gQSBzdHJpbmcgY29udGFpbmluZyBhIGx1bnIgcXVlcnkuXG4gKiBAdGhyb3dzIHtsdW5yLlF1ZXJ5UGFyc2VFcnJvcn0gSWYgdGhlIHBhc3NlZCBxdWVyeSBzdHJpbmcgY2Fubm90IGJlIHBhcnNlZC5cbiAqIEByZXR1cm5zIHtsdW5yLkluZGV4flJlc3VsdFtdfVxuICovXG5sdW5yLkluZGV4LnByb3RvdHlwZS5zZWFyY2ggPSBmdW5jdGlvbiAocXVlcnlTdHJpbmcpIHtcbiAgcmV0dXJuIHRoaXMucXVlcnkoZnVuY3Rpb24gKHF1ZXJ5KSB7XG4gICAgdmFyIHBhcnNlciA9IG5ldyBsdW5yLlF1ZXJ5UGFyc2VyKHF1ZXJ5U3RyaW5nLCBxdWVyeSlcbiAgICBwYXJzZXIucGFyc2UoKVxuICB9KVxufVxuXG4vKipcbiAqIEEgcXVlcnkgYnVpbGRlciBjYWxsYmFjayBwcm92aWRlcyBhIHF1ZXJ5IG9iamVjdCB0byBiZSB1c2VkIHRvIGV4cHJlc3NcbiAqIHRoZSBxdWVyeSB0byBwZXJmb3JtIG9uIHRoZSBpbmRleC5cbiAqXG4gKiBAY2FsbGJhY2sgbHVuci5JbmRleH5xdWVyeUJ1aWxkZXJcbiAqIEBwYXJhbSB7bHVuci5RdWVyeX0gcXVlcnkgLSBUaGUgcXVlcnkgb2JqZWN0IHRvIGJ1aWxkIHVwLlxuICogQHRoaXMgbHVuci5RdWVyeVxuICovXG5cbi8qKlxuICogUGVyZm9ybXMgYSBxdWVyeSBhZ2FpbnN0IHRoZSBpbmRleCB1c2luZyB0aGUgeWllbGRlZCBsdW5yLlF1ZXJ5IG9iamVjdC5cbiAqXG4gKiBJZiBwZXJmb3JtaW5nIHByb2dyYW1tYXRpYyBxdWVyaWVzIGFnYWluc3QgdGhlIGluZGV4LCB0aGlzIG1ldGhvZCBpcyBwcmVmZXJyZWRcbiAqIG92ZXIgbHVuci5JbmRleCNzZWFyY2ggc28gYXMgdG8gYXZvaWQgdGhlIGFkZGl0aW9uYWwgcXVlcnkgcGFyc2luZyBvdmVyaGVhZC5cbiAqXG4gKiBBIHF1ZXJ5IG9iamVjdCBpcyB5aWVsZGVkIHRvIHRoZSBzdXBwbGllZCBmdW5jdGlvbiB3aGljaCBzaG91bGQgYmUgdXNlZCB0b1xuICogZXhwcmVzcyB0aGUgcXVlcnkgdG8gYmUgcnVuIGFnYWluc3QgdGhlIGluZGV4LlxuICpcbiAqIE5vdGUgdGhhdCBhbHRob3VnaCB0aGlzIGZ1bmN0aW9uIHRha2VzIGEgY2FsbGJhY2sgcGFyYW1ldGVyIGl0IGlzIF9ub3RfIGFuXG4gKiBhc3luY2hyb25vdXMgb3BlcmF0aW9uLCB0aGUgY2FsbGJhY2sgaXMganVzdCB5aWVsZGVkIGEgcXVlcnkgb2JqZWN0IHRvIGJlXG4gKiBjdXN0b21pemVkLlxuICpcbiAqIEBwYXJhbSB7bHVuci5JbmRleH5xdWVyeUJ1aWxkZXJ9IGZuIC0gQSBmdW5jdGlvbiB0aGF0IGlzIHVzZWQgdG8gYnVpbGQgdGhlIHF1ZXJ5LlxuICogQHJldHVybnMge2x1bnIuSW5kZXh+UmVzdWx0W119XG4gKi9cbmx1bnIuSW5kZXgucHJvdG90eXBlLnF1ZXJ5ID0gZnVuY3Rpb24gKGZuKSB7XG4gIC8vIGZvciBlYWNoIHF1ZXJ5IGNsYXVzZVxuICAvLyAqIHByb2Nlc3MgdGVybXNcbiAgLy8gKiBleHBhbmQgdGVybXMgZnJvbSB0b2tlbiBzZXRcbiAgLy8gKiBmaW5kIG1hdGNoaW5nIGRvY3VtZW50cyBhbmQgbWV0YWRhdGFcbiAgLy8gKiBnZXQgZG9jdW1lbnQgdmVjdG9yc1xuICAvLyAqIHNjb3JlIGRvY3VtZW50c1xuXG4gIHZhciBxdWVyeSA9IG5ldyBsdW5yLlF1ZXJ5KHRoaXMuZmllbGRzKSxcbiAgICAgIG1hdGNoaW5nRmllbGRzID0gT2JqZWN0LmNyZWF0ZShudWxsKSxcbiAgICAgIHF1ZXJ5VmVjdG9ycyA9IE9iamVjdC5jcmVhdGUobnVsbCksXG4gICAgICB0ZXJtRmllbGRDYWNoZSA9IE9iamVjdC5jcmVhdGUobnVsbCksXG4gICAgICByZXF1aXJlZE1hdGNoZXMgPSBPYmplY3QuY3JlYXRlKG51bGwpLFxuICAgICAgcHJvaGliaXRlZE1hdGNoZXMgPSBPYmplY3QuY3JlYXRlKG51bGwpXG5cbiAgLypcbiAgICogVG8gc3VwcG9ydCBmaWVsZCBsZXZlbCBib29zdHMgYSBxdWVyeSB2ZWN0b3IgaXMgY3JlYXRlZCBwZXJcbiAgICogZmllbGQuIEFuIGVtcHR5IHZlY3RvciBpcyBlYWdlcmx5IGNyZWF0ZWQgdG8gc3VwcG9ydCBuZWdhdGVkXG4gICAqIHF1ZXJpZXMuXG4gICAqL1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuZmllbGRzLmxlbmd0aDsgaSsrKSB7XG4gICAgcXVlcnlWZWN0b3JzW3RoaXMuZmllbGRzW2ldXSA9IG5ldyBsdW5yLlZlY3RvclxuICB9XG5cbiAgZm4uY2FsbChxdWVyeSwgcXVlcnkpXG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBxdWVyeS5jbGF1c2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgLypcbiAgICAgKiBVbmxlc3MgdGhlIHBpcGVsaW5lIGhhcyBiZWVuIGRpc2FibGVkIGZvciB0aGlzIHRlcm0sIHdoaWNoIGlzXG4gICAgICogdGhlIGNhc2UgZm9yIHRlcm1zIHdpdGggd2lsZGNhcmRzLCB3ZSBuZWVkIHRvIHBhc3MgdGhlIGNsYXVzZVxuICAgICAqIHRlcm0gdGhyb3VnaCB0aGUgc2VhcmNoIHBpcGVsaW5lLiBBIHBpcGVsaW5lIHJldHVybnMgYW4gYXJyYXlcbiAgICAgKiBvZiBwcm9jZXNzZWQgdGVybXMuIFBpcGVsaW5lIGZ1bmN0aW9ucyBtYXkgZXhwYW5kIHRoZSBwYXNzZWRcbiAgICAgKiB0ZXJtLCB3aGljaCBtZWFucyB3ZSBtYXkgZW5kIHVwIHBlcmZvcm1pbmcgbXVsdGlwbGUgaW5kZXggbG9va3Vwc1xuICAgICAqIGZvciBhIHNpbmdsZSBxdWVyeSB0ZXJtLlxuICAgICAqL1xuICAgIHZhciBjbGF1c2UgPSBxdWVyeS5jbGF1c2VzW2ldLFxuICAgICAgICB0ZXJtcyA9IG51bGwsXG4gICAgICAgIGNsYXVzZU1hdGNoZXMgPSBsdW5yLlNldC5jb21wbGV0ZVxuXG4gICAgaWYgKGNsYXVzZS51c2VQaXBlbGluZSkge1xuICAgICAgdGVybXMgPSB0aGlzLnBpcGVsaW5lLnJ1blN0cmluZyhjbGF1c2UudGVybSwge1xuICAgICAgICBmaWVsZHM6IGNsYXVzZS5maWVsZHNcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHRlcm1zID0gW2NsYXVzZS50ZXJtXVxuICAgIH1cblxuICAgIGZvciAodmFyIG0gPSAwOyBtIDwgdGVybXMubGVuZ3RoOyBtKyspIHtcbiAgICAgIHZhciB0ZXJtID0gdGVybXNbbV1cblxuICAgICAgLypcbiAgICAgICAqIEVhY2ggdGVybSByZXR1cm5lZCBmcm9tIHRoZSBwaXBlbGluZSBuZWVkcyB0byB1c2UgdGhlIHNhbWUgcXVlcnlcbiAgICAgICAqIGNsYXVzZSBvYmplY3QsIGUuZy4gdGhlIHNhbWUgYm9vc3QgYW5kIG9yIGVkaXQgZGlzdGFuY2UuIFRoZVxuICAgICAgICogc2ltcGxlc3Qgd2F5IHRvIGRvIHRoaXMgaXMgdG8gcmUtdXNlIHRoZSBjbGF1c2Ugb2JqZWN0IGJ1dCBtdXRhdGVcbiAgICAgICAqIGl0cyB0ZXJtIHByb3BlcnR5LlxuICAgICAgICovXG4gICAgICBjbGF1c2UudGVybSA9IHRlcm1cblxuICAgICAgLypcbiAgICAgICAqIEZyb20gdGhlIHRlcm0gaW4gdGhlIGNsYXVzZSB3ZSBjcmVhdGUgYSB0b2tlbiBzZXQgd2hpY2ggd2lsbCB0aGVuXG4gICAgICAgKiBiZSB1c2VkIHRvIGludGVyc2VjdCB0aGUgaW5kZXhlcyB0b2tlbiBzZXQgdG8gZ2V0IGEgbGlzdCBvZiB0ZXJtc1xuICAgICAgICogdG8gbG9va3VwIGluIHRoZSBpbnZlcnRlZCBpbmRleFxuICAgICAgICovXG4gICAgICB2YXIgdGVybVRva2VuU2V0ID0gbHVuci5Ub2tlblNldC5mcm9tQ2xhdXNlKGNsYXVzZSksXG4gICAgICAgICAgZXhwYW5kZWRUZXJtcyA9IHRoaXMudG9rZW5TZXQuaW50ZXJzZWN0KHRlcm1Ub2tlblNldCkudG9BcnJheSgpXG5cbiAgICAgIC8qXG4gICAgICAgKiBJZiBhIHRlcm0gbWFya2VkIGFzIHJlcXVpcmVkIGRvZXMgbm90IGV4aXN0IGluIHRoZSB0b2tlblNldCBpdCBpc1xuICAgICAgICogaW1wb3NzaWJsZSBmb3IgdGhlIHNlYXJjaCB0byByZXR1cm4gYW55IG1hdGNoZXMuIFdlIHNldCBhbGwgdGhlIGZpZWxkXG4gICAgICAgKiBzY29wZWQgcmVxdWlyZWQgbWF0Y2hlcyBzZXQgdG8gZW1wdHkgYW5kIHN0b3AgZXhhbWluaW5nIGFueSBmdXJ0aGVyXG4gICAgICAgKiBjbGF1c2VzLlxuICAgICAgICovXG4gICAgICBpZiAoZXhwYW5kZWRUZXJtcy5sZW5ndGggPT09IDAgJiYgY2xhdXNlLnByZXNlbmNlID09PSBsdW5yLlF1ZXJ5LnByZXNlbmNlLlJFUVVJUkVEKSB7XG4gICAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgY2xhdXNlLmZpZWxkcy5sZW5ndGg7IGsrKykge1xuICAgICAgICAgIHZhciBmaWVsZCA9IGNsYXVzZS5maWVsZHNba11cbiAgICAgICAgICByZXF1aXJlZE1hdGNoZXNbZmllbGRdID0gbHVuci5TZXQuZW1wdHlcbiAgICAgICAgfVxuXG4gICAgICAgIGJyZWFrXG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgZXhwYW5kZWRUZXJtcy5sZW5ndGg7IGorKykge1xuICAgICAgICAvKlxuICAgICAgICAgKiBGb3IgZWFjaCB0ZXJtIGdldCB0aGUgcG9zdGluZyBhbmQgdGVybUluZGV4LCB0aGlzIGlzIHJlcXVpcmVkIGZvclxuICAgICAgICAgKiBidWlsZGluZyB0aGUgcXVlcnkgdmVjdG9yLlxuICAgICAgICAgKi9cbiAgICAgICAgdmFyIGV4cGFuZGVkVGVybSA9IGV4cGFuZGVkVGVybXNbal0sXG4gICAgICAgICAgICBwb3N0aW5nID0gdGhpcy5pbnZlcnRlZEluZGV4W2V4cGFuZGVkVGVybV0sXG4gICAgICAgICAgICB0ZXJtSW5kZXggPSBwb3N0aW5nLl9pbmRleFxuXG4gICAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgY2xhdXNlLmZpZWxkcy5sZW5ndGg7IGsrKykge1xuICAgICAgICAgIC8qXG4gICAgICAgICAgICogRm9yIGVhY2ggZmllbGQgdGhhdCB0aGlzIHF1ZXJ5IHRlcm0gaXMgc2NvcGVkIGJ5IChieSBkZWZhdWx0XG4gICAgICAgICAgICogYWxsIGZpZWxkcyBhcmUgaW4gc2NvcGUpIHdlIG5lZWQgdG8gZ2V0IGFsbCB0aGUgZG9jdW1lbnQgcmVmc1xuICAgICAgICAgICAqIHRoYXQgaGF2ZSB0aGlzIHRlcm0gaW4gdGhhdCBmaWVsZC5cbiAgICAgICAgICAgKlxuICAgICAgICAgICAqIFRoZSBwb3N0aW5nIGlzIHRoZSBlbnRyeSBpbiB0aGUgaW52ZXJ0ZWRJbmRleCBmb3IgdGhlIG1hdGNoaW5nXG4gICAgICAgICAgICogdGVybSBmcm9tIGFib3ZlLlxuICAgICAgICAgICAqL1xuICAgICAgICAgIHZhciBmaWVsZCA9IGNsYXVzZS5maWVsZHNba10sXG4gICAgICAgICAgICAgIGZpZWxkUG9zdGluZyA9IHBvc3RpbmdbZmllbGRdLFxuICAgICAgICAgICAgICBtYXRjaGluZ0RvY3VtZW50UmVmcyA9IE9iamVjdC5rZXlzKGZpZWxkUG9zdGluZyksXG4gICAgICAgICAgICAgIHRlcm1GaWVsZCA9IGV4cGFuZGVkVGVybSArIFwiL1wiICsgZmllbGQsXG4gICAgICAgICAgICAgIG1hdGNoaW5nRG9jdW1lbnRzU2V0ID0gbmV3IGx1bnIuU2V0KG1hdGNoaW5nRG9jdW1lbnRSZWZzKVxuXG4gICAgICAgICAgLypcbiAgICAgICAgICAgKiBpZiB0aGUgcHJlc2VuY2Ugb2YgdGhpcyB0ZXJtIGlzIHJlcXVpcmVkIGVuc3VyZSB0aGF0IHRoZSBtYXRjaGluZ1xuICAgICAgICAgICAqIGRvY3VtZW50cyBhcmUgYWRkZWQgdG8gdGhlIHNldCBvZiByZXF1aXJlZCBtYXRjaGVzIGZvciB0aGlzIGNsYXVzZS5cbiAgICAgICAgICAgKlxuICAgICAgICAgICAqL1xuICAgICAgICAgIGlmIChjbGF1c2UucHJlc2VuY2UgPT0gbHVuci5RdWVyeS5wcmVzZW5jZS5SRVFVSVJFRCkge1xuICAgICAgICAgICAgY2xhdXNlTWF0Y2hlcyA9IGNsYXVzZU1hdGNoZXMudW5pb24obWF0Y2hpbmdEb2N1bWVudHNTZXQpXG5cbiAgICAgICAgICAgIGlmIChyZXF1aXJlZE1hdGNoZXNbZmllbGRdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgcmVxdWlyZWRNYXRjaGVzW2ZpZWxkXSA9IGx1bnIuU2V0LmNvbXBsZXRlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLypcbiAgICAgICAgICAgKiBpZiB0aGUgcHJlc2VuY2Ugb2YgdGhpcyB0ZXJtIGlzIHByb2hpYml0ZWQgZW5zdXJlIHRoYXQgdGhlIG1hdGNoaW5nXG4gICAgICAgICAgICogZG9jdW1lbnRzIGFyZSBhZGRlZCB0byB0aGUgc2V0IG9mIHByb2hpYml0ZWQgbWF0Y2hlcyBmb3IgdGhpcyBmaWVsZCxcbiAgICAgICAgICAgKiBjcmVhdGluZyB0aGF0IHNldCBpZiBpdCBkb2VzIG5vdCB5ZXQgZXhpc3QuXG4gICAgICAgICAgICovXG4gICAgICAgICAgaWYgKGNsYXVzZS5wcmVzZW5jZSA9PSBsdW5yLlF1ZXJ5LnByZXNlbmNlLlBST0hJQklURUQpIHtcbiAgICAgICAgICAgIGlmIChwcm9oaWJpdGVkTWF0Y2hlc1tmaWVsZF0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICBwcm9oaWJpdGVkTWF0Y2hlc1tmaWVsZF0gPSBsdW5yLlNldC5lbXB0eVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBwcm9oaWJpdGVkTWF0Y2hlc1tmaWVsZF0gPSBwcm9oaWJpdGVkTWF0Y2hlc1tmaWVsZF0udW5pb24obWF0Y2hpbmdEb2N1bWVudHNTZXQpXG5cbiAgICAgICAgICAgIC8qXG4gICAgICAgICAgICAgKiBQcm9oaWJpdGVkIG1hdGNoZXMgc2hvdWxkIG5vdCBiZSBwYXJ0IG9mIHRoZSBxdWVyeSB2ZWN0b3IgdXNlZCBmb3JcbiAgICAgICAgICAgICAqIHNpbWlsYXJpdHkgc2NvcmluZyBhbmQgbm8gbWV0YWRhdGEgc2hvdWxkIGJlIGV4dHJhY3RlZCBzbyB3ZSBjb250aW51ZVxuICAgICAgICAgICAgICogdG8gdGhlIG5leHQgZmllbGRcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgY29udGludWVcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvKlxuICAgICAgICAgICAqIFRoZSBxdWVyeSBmaWVsZCB2ZWN0b3IgaXMgcG9wdWxhdGVkIHVzaW5nIHRoZSB0ZXJtSW5kZXggZm91bmQgZm9yXG4gICAgICAgICAgICogdGhlIHRlcm0gYW5kIGEgdW5pdCB2YWx1ZSB3aXRoIHRoZSBhcHByb3ByaWF0ZSBib29zdCBhcHBsaWVkLlxuICAgICAgICAgICAqIFVzaW5nIHVwc2VydCBiZWNhdXNlIHRoZXJlIGNvdWxkIGFscmVhZHkgYmUgYW4gZW50cnkgaW4gdGhlIHZlY3RvclxuICAgICAgICAgICAqIGZvciB0aGUgdGVybSB3ZSBhcmUgd29ya2luZyB3aXRoLiBJbiB0aGF0IGNhc2Ugd2UganVzdCBhZGQgdGhlIHNjb3Jlc1xuICAgICAgICAgICAqIHRvZ2V0aGVyLlxuICAgICAgICAgICAqL1xuICAgICAgICAgIHF1ZXJ5VmVjdG9yc1tmaWVsZF0udXBzZXJ0KHRlcm1JbmRleCwgY2xhdXNlLmJvb3N0LCBmdW5jdGlvbiAoYSwgYikgeyByZXR1cm4gYSArIGIgfSlcblxuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIElmIHdlJ3ZlIGFscmVhZHkgc2VlbiB0aGlzIHRlcm0sIGZpZWxkIGNvbWJvIHRoZW4gd2UndmUgYWxyZWFkeSBjb2xsZWN0ZWRcbiAgICAgICAgICAgKiB0aGUgbWF0Y2hpbmcgZG9jdW1lbnRzIGFuZCBtZXRhZGF0YSwgbm8gbmVlZCB0byBnbyB0aHJvdWdoIGFsbCB0aGF0IGFnYWluXG4gICAgICAgICAgICovXG4gICAgICAgICAgaWYgKHRlcm1GaWVsZENhY2hlW3Rlcm1GaWVsZF0pIHtcbiAgICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZm9yICh2YXIgbCA9IDA7IGwgPCBtYXRjaGluZ0RvY3VtZW50UmVmcy5sZW5ndGg7IGwrKykge1xuICAgICAgICAgICAgLypcbiAgICAgICAgICAgICAqIEFsbCBtZXRhZGF0YSBmb3IgdGhpcyB0ZXJtL2ZpZWxkL2RvY3VtZW50IHRyaXBsZVxuICAgICAgICAgICAgICogYXJlIHRoZW4gZXh0cmFjdGVkIGFuZCBjb2xsZWN0ZWQgaW50byBhbiBpbnN0YW5jZVxuICAgICAgICAgICAgICogb2YgbHVuci5NYXRjaERhdGEgcmVhZHkgdG8gYmUgcmV0dXJuZWQgaW4gdGhlIHF1ZXJ5XG4gICAgICAgICAgICAgKiByZXN1bHRzXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHZhciBtYXRjaGluZ0RvY3VtZW50UmVmID0gbWF0Y2hpbmdEb2N1bWVudFJlZnNbbF0sXG4gICAgICAgICAgICAgICAgbWF0Y2hpbmdGaWVsZFJlZiA9IG5ldyBsdW5yLkZpZWxkUmVmIChtYXRjaGluZ0RvY3VtZW50UmVmLCBmaWVsZCksXG4gICAgICAgICAgICAgICAgbWV0YWRhdGEgPSBmaWVsZFBvc3RpbmdbbWF0Y2hpbmdEb2N1bWVudFJlZl0sXG4gICAgICAgICAgICAgICAgZmllbGRNYXRjaFxuXG4gICAgICAgICAgICBpZiAoKGZpZWxkTWF0Y2ggPSBtYXRjaGluZ0ZpZWxkc1ttYXRjaGluZ0ZpZWxkUmVmXSkgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICBtYXRjaGluZ0ZpZWxkc1ttYXRjaGluZ0ZpZWxkUmVmXSA9IG5ldyBsdW5yLk1hdGNoRGF0YSAoZXhwYW5kZWRUZXJtLCBmaWVsZCwgbWV0YWRhdGEpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBmaWVsZE1hdGNoLmFkZChleHBhbmRlZFRlcm0sIGZpZWxkLCBtZXRhZGF0YSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH1cblxuICAgICAgICAgIHRlcm1GaWVsZENhY2hlW3Rlcm1GaWVsZF0gPSB0cnVlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJZiB0aGUgcHJlc2VuY2Ugd2FzIHJlcXVpcmVkIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSByZXF1aXJlZE1hdGNoZXMgZmllbGQgc2V0cy5cbiAgICAgKiBXZSBkbyB0aGlzIGFmdGVyIGFsbCBmaWVsZHMgZm9yIHRoZSB0ZXJtIGhhdmUgY29sbGVjdGVkIHRoZWlyIG1hdGNoZXMgYmVjYXVzZVxuICAgICAqIHRoZSBjbGF1c2UgdGVybXMgcHJlc2VuY2UgaXMgcmVxdWlyZWQgaW4gX2FueV8gb2YgdGhlIGZpZWxkcyBub3QgX2FsbF8gb2YgdGhlXG4gICAgICogZmllbGRzLlxuICAgICAqL1xuICAgIGlmIChjbGF1c2UucHJlc2VuY2UgPT09IGx1bnIuUXVlcnkucHJlc2VuY2UuUkVRVUlSRUQpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgY2xhdXNlLmZpZWxkcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgZmllbGQgPSBjbGF1c2UuZmllbGRzW2tdXG4gICAgICAgIHJlcXVpcmVkTWF0Y2hlc1tmaWVsZF0gPSByZXF1aXJlZE1hdGNoZXNbZmllbGRdLmludGVyc2VjdChjbGF1c2VNYXRjaGVzKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBOZWVkIHRvIGNvbWJpbmUgdGhlIGZpZWxkIHNjb3BlZCByZXF1aXJlZCBhbmQgcHJvaGliaXRlZFxuICAgKiBtYXRjaGluZyBkb2N1bWVudHMgaW50byBhIGdsb2JhbCBzZXQgb2YgcmVxdWlyZWQgYW5kIHByb2hpYml0ZWRcbiAgICogbWF0Y2hlc1xuICAgKi9cbiAgdmFyIGFsbFJlcXVpcmVkTWF0Y2hlcyA9IGx1bnIuU2V0LmNvbXBsZXRlLFxuICAgICAgYWxsUHJvaGliaXRlZE1hdGNoZXMgPSBsdW5yLlNldC5lbXB0eVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5maWVsZHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZmllbGQgPSB0aGlzLmZpZWxkc1tpXVxuXG4gICAgaWYgKHJlcXVpcmVkTWF0Y2hlc1tmaWVsZF0pIHtcbiAgICAgIGFsbFJlcXVpcmVkTWF0Y2hlcyA9IGFsbFJlcXVpcmVkTWF0Y2hlcy5pbnRlcnNlY3QocmVxdWlyZWRNYXRjaGVzW2ZpZWxkXSlcbiAgICB9XG5cbiAgICBpZiAocHJvaGliaXRlZE1hdGNoZXNbZmllbGRdKSB7XG4gICAgICBhbGxQcm9oaWJpdGVkTWF0Y2hlcyA9IGFsbFByb2hpYml0ZWRNYXRjaGVzLnVuaW9uKHByb2hpYml0ZWRNYXRjaGVzW2ZpZWxkXSlcbiAgICB9XG4gIH1cblxuICB2YXIgbWF0Y2hpbmdGaWVsZFJlZnMgPSBPYmplY3Qua2V5cyhtYXRjaGluZ0ZpZWxkcyksXG4gICAgICByZXN1bHRzID0gW10sXG4gICAgICBtYXRjaGVzID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuXG4gIC8qXG4gICAqIElmIHRoZSBxdWVyeSBpcyBuZWdhdGVkIChjb250YWlucyBvbmx5IHByb2hpYml0ZWQgdGVybXMpXG4gICAqIHdlIG5lZWQgdG8gZ2V0IF9hbGxfIGZpZWxkUmVmcyBjdXJyZW50bHkgZXhpc3RpbmcgaW4gdGhlXG4gICAqIGluZGV4LiBUaGlzIGlzIG9ubHkgZG9uZSB3aGVuIHdlIGtub3cgdGhhdCB0aGUgcXVlcnkgaXNcbiAgICogZW50aXJlbHkgcHJvaGliaXRlZCB0ZXJtcyB0byBhdm9pZCBhbnkgY29zdCBvZiBnZXR0aW5nIGFsbFxuICAgKiBmaWVsZFJlZnMgdW5uZWNlc3NhcmlseS5cbiAgICpcbiAgICogQWRkaXRpb25hbGx5LCBibGFuayBNYXRjaERhdGEgbXVzdCBiZSBjcmVhdGVkIHRvIGNvcnJlY3RseVxuICAgKiBwb3B1bGF0ZSB0aGUgcmVzdWx0cy5cbiAgICovXG4gIGlmIChxdWVyeS5pc05lZ2F0ZWQoKSkge1xuICAgIG1hdGNoaW5nRmllbGRSZWZzID0gT2JqZWN0LmtleXModGhpcy5maWVsZFZlY3RvcnMpXG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG1hdGNoaW5nRmllbGRSZWZzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgbWF0Y2hpbmdGaWVsZFJlZiA9IG1hdGNoaW5nRmllbGRSZWZzW2ldXG4gICAgICB2YXIgZmllbGRSZWYgPSBsdW5yLkZpZWxkUmVmLmZyb21TdHJpbmcobWF0Y2hpbmdGaWVsZFJlZilcbiAgICAgIG1hdGNoaW5nRmllbGRzW21hdGNoaW5nRmllbGRSZWZdID0gbmV3IGx1bnIuTWF0Y2hEYXRhXG4gICAgfVxuICB9XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBtYXRjaGluZ0ZpZWxkUmVmcy5sZW5ndGg7IGkrKykge1xuICAgIC8qXG4gICAgICogQ3VycmVudGx5IHdlIGhhdmUgZG9jdW1lbnQgZmllbGRzIHRoYXQgbWF0Y2ggdGhlIHF1ZXJ5LCBidXQgd2VcbiAgICAgKiBuZWVkIHRvIHJldHVybiBkb2N1bWVudHMuIFRoZSBtYXRjaERhdGEgYW5kIHNjb3JlcyBhcmUgY29tYmluZWRcbiAgICAgKiBmcm9tIG11bHRpcGxlIGZpZWxkcyBiZWxvbmdpbmcgdG8gdGhlIHNhbWUgZG9jdW1lbnQuXG4gICAgICpcbiAgICAgKiBTY29yZXMgYXJlIGNhbGN1bGF0ZWQgYnkgZmllbGQsIHVzaW5nIHRoZSBxdWVyeSB2ZWN0b3JzIGNyZWF0ZWRcbiAgICAgKiBhYm92ZSwgYW5kIGNvbWJpbmVkIGludG8gYSBmaW5hbCBkb2N1bWVudCBzY29yZSB1c2luZyBhZGRpdGlvbi5cbiAgICAgKi9cbiAgICB2YXIgZmllbGRSZWYgPSBsdW5yLkZpZWxkUmVmLmZyb21TdHJpbmcobWF0Y2hpbmdGaWVsZFJlZnNbaV0pLFxuICAgICAgICBkb2NSZWYgPSBmaWVsZFJlZi5kb2NSZWZcblxuICAgIGlmICghYWxsUmVxdWlyZWRNYXRjaGVzLmNvbnRhaW5zKGRvY1JlZikpIHtcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgaWYgKGFsbFByb2hpYml0ZWRNYXRjaGVzLmNvbnRhaW5zKGRvY1JlZikpIHtcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgdmFyIGZpZWxkVmVjdG9yID0gdGhpcy5maWVsZFZlY3RvcnNbZmllbGRSZWZdLFxuICAgICAgICBzY29yZSA9IHF1ZXJ5VmVjdG9yc1tmaWVsZFJlZi5maWVsZE5hbWVdLnNpbWlsYXJpdHkoZmllbGRWZWN0b3IpLFxuICAgICAgICBkb2NNYXRjaFxuXG4gICAgaWYgKChkb2NNYXRjaCA9IG1hdGNoZXNbZG9jUmVmXSkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgZG9jTWF0Y2guc2NvcmUgKz0gc2NvcmVcbiAgICAgIGRvY01hdGNoLm1hdGNoRGF0YS5jb21iaW5lKG1hdGNoaW5nRmllbGRzW2ZpZWxkUmVmXSlcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIG1hdGNoID0ge1xuICAgICAgICByZWY6IGRvY1JlZixcbiAgICAgICAgc2NvcmU6IHNjb3JlLFxuICAgICAgICBtYXRjaERhdGE6IG1hdGNoaW5nRmllbGRzW2ZpZWxkUmVmXVxuICAgICAgfVxuICAgICAgbWF0Y2hlc1tkb2NSZWZdID0gbWF0Y2hcbiAgICAgIHJlc3VsdHMucHVzaChtYXRjaClcbiAgICB9XG4gIH1cblxuICAvKlxuICAgKiBTb3J0IHRoZSByZXN1bHRzIG9iamVjdHMgYnkgc2NvcmUsIGhpZ2hlc3QgZmlyc3QuXG4gICAqL1xuICByZXR1cm4gcmVzdWx0cy5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgcmV0dXJuIGIuc2NvcmUgLSBhLnNjb3JlXG4gIH0pXG59XG5cbi8qKlxuICogUHJlcGFyZXMgdGhlIGluZGV4IGZvciBKU09OIHNlcmlhbGl6YXRpb24uXG4gKlxuICogVGhlIHNjaGVtYSBmb3IgdGhpcyBKU09OIGJsb2Igd2lsbCBiZSBkZXNjcmliZWQgaW4gYVxuICogc2VwYXJhdGUgSlNPTiBzY2hlbWEgZmlsZS5cbiAqXG4gKiBAcmV0dXJucyB7T2JqZWN0fVxuICovXG5sdW5yLkluZGV4LnByb3RvdHlwZS50b0pTT04gPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBpbnZlcnRlZEluZGV4ID0gT2JqZWN0LmtleXModGhpcy5pbnZlcnRlZEluZGV4KVxuICAgIC5zb3J0KClcbiAgICAubWFwKGZ1bmN0aW9uICh0ZXJtKSB7XG4gICAgICByZXR1cm4gW3Rlcm0sIHRoaXMuaW52ZXJ0ZWRJbmRleFt0ZXJtXV1cbiAgICB9LCB0aGlzKVxuXG4gIHZhciBmaWVsZFZlY3RvcnMgPSBPYmplY3Qua2V5cyh0aGlzLmZpZWxkVmVjdG9ycylcbiAgICAubWFwKGZ1bmN0aW9uIChyZWYpIHtcbiAgICAgIHJldHVybiBbcmVmLCB0aGlzLmZpZWxkVmVjdG9yc1tyZWZdLnRvSlNPTigpXVxuICAgIH0sIHRoaXMpXG5cbiAgcmV0dXJuIHtcbiAgICB2ZXJzaW9uOiBsdW5yLnZlcnNpb24sXG4gICAgZmllbGRzOiB0aGlzLmZpZWxkcyxcbiAgICBmaWVsZFZlY3RvcnM6IGZpZWxkVmVjdG9ycyxcbiAgICBpbnZlcnRlZEluZGV4OiBpbnZlcnRlZEluZGV4LFxuICAgIHBpcGVsaW5lOiB0aGlzLnBpcGVsaW5lLnRvSlNPTigpXG4gIH1cbn1cblxuLyoqXG4gKiBMb2FkcyBhIHByZXZpb3VzbHkgc2VyaWFsaXplZCBsdW5yLkluZGV4XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHNlcmlhbGl6ZWRJbmRleCAtIEEgcHJldmlvdXNseSBzZXJpYWxpemVkIGx1bnIuSW5kZXhcbiAqIEByZXR1cm5zIHtsdW5yLkluZGV4fVxuICovXG5sdW5yLkluZGV4LmxvYWQgPSBmdW5jdGlvbiAoc2VyaWFsaXplZEluZGV4KSB7XG4gIHZhciBhdHRycyA9IHt9LFxuICAgICAgZmllbGRWZWN0b3JzID0ge30sXG4gICAgICBzZXJpYWxpemVkVmVjdG9ycyA9IHNlcmlhbGl6ZWRJbmRleC5maWVsZFZlY3RvcnMsXG4gICAgICBpbnZlcnRlZEluZGV4ID0gT2JqZWN0LmNyZWF0ZShudWxsKSxcbiAgICAgIHNlcmlhbGl6ZWRJbnZlcnRlZEluZGV4ID0gc2VyaWFsaXplZEluZGV4LmludmVydGVkSW5kZXgsXG4gICAgICB0b2tlblNldEJ1aWxkZXIgPSBuZXcgbHVuci5Ub2tlblNldC5CdWlsZGVyLFxuICAgICAgcGlwZWxpbmUgPSBsdW5yLlBpcGVsaW5lLmxvYWQoc2VyaWFsaXplZEluZGV4LnBpcGVsaW5lKVxuXG4gIGlmIChzZXJpYWxpemVkSW5kZXgudmVyc2lvbiAhPSBsdW5yLnZlcnNpb24pIHtcbiAgICBsdW5yLnV0aWxzLndhcm4oXCJWZXJzaW9uIG1pc21hdGNoIHdoZW4gbG9hZGluZyBzZXJpYWxpc2VkIGluZGV4LiBDdXJyZW50IHZlcnNpb24gb2YgbHVuciAnXCIgKyBsdW5yLnZlcnNpb24gKyBcIicgZG9lcyBub3QgbWF0Y2ggc2VyaWFsaXplZCBpbmRleCAnXCIgKyBzZXJpYWxpemVkSW5kZXgudmVyc2lvbiArIFwiJ1wiKVxuICB9XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzZXJpYWxpemVkVmVjdG9ycy5sZW5ndGg7IGkrKykge1xuICAgIHZhciB0dXBsZSA9IHNlcmlhbGl6ZWRWZWN0b3JzW2ldLFxuICAgICAgICByZWYgPSB0dXBsZVswXSxcbiAgICAgICAgZWxlbWVudHMgPSB0dXBsZVsxXVxuXG4gICAgZmllbGRWZWN0b3JzW3JlZl0gPSBuZXcgbHVuci5WZWN0b3IoZWxlbWVudHMpXG4gIH1cblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHNlcmlhbGl6ZWRJbnZlcnRlZEluZGV4Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHR1cGxlID0gc2VyaWFsaXplZEludmVydGVkSW5kZXhbaV0sXG4gICAgICAgIHRlcm0gPSB0dXBsZVswXSxcbiAgICAgICAgcG9zdGluZyA9IHR1cGxlWzFdXG5cbiAgICB0b2tlblNldEJ1aWxkZXIuaW5zZXJ0KHRlcm0pXG4gICAgaW52ZXJ0ZWRJbmRleFt0ZXJtXSA9IHBvc3RpbmdcbiAgfVxuXG4gIHRva2VuU2V0QnVpbGRlci5maW5pc2goKVxuXG4gIGF0dHJzLmZpZWxkcyA9IHNlcmlhbGl6ZWRJbmRleC5maWVsZHNcblxuICBhdHRycy5maWVsZFZlY3RvcnMgPSBmaWVsZFZlY3RvcnNcbiAgYXR0cnMuaW52ZXJ0ZWRJbmRleCA9IGludmVydGVkSW5kZXhcbiAgYXR0cnMudG9rZW5TZXQgPSB0b2tlblNldEJ1aWxkZXIucm9vdFxuICBhdHRycy5waXBlbGluZSA9IHBpcGVsaW5lXG5cbiAgcmV0dXJuIG5ldyBsdW5yLkluZGV4KGF0dHJzKVxufVxuLyohXG4gKiBsdW5yLkJ1aWxkZXJcbiAqIENvcHlyaWdodCAoQykgMjAxOCBPbGl2ZXIgTmlnaHRpbmdhbGVcbiAqL1xuXG4vKipcbiAqIGx1bnIuQnVpbGRlciBwZXJmb3JtcyBpbmRleGluZyBvbiBhIHNldCBvZiBkb2N1bWVudHMgYW5kXG4gKiByZXR1cm5zIGluc3RhbmNlcyBvZiBsdW5yLkluZGV4IHJlYWR5IGZvciBxdWVyeWluZy5cbiAqXG4gKiBBbGwgY29uZmlndXJhdGlvbiBvZiB0aGUgaW5kZXggaXMgZG9uZSB2aWEgdGhlIGJ1aWxkZXIsIHRoZVxuICogZmllbGRzIHRvIGluZGV4LCB0aGUgZG9jdW1lbnQgcmVmZXJlbmNlLCB0aGUgdGV4dCBwcm9jZXNzaW5nXG4gKiBwaXBlbGluZSBhbmQgZG9jdW1lbnQgc2NvcmluZyBwYXJhbWV0ZXJzIGFyZSBhbGwgc2V0IG9uIHRoZVxuICogYnVpbGRlciBiZWZvcmUgaW5kZXhpbmcuXG4gKlxuICogQGNvbnN0cnVjdG9yXG4gKiBAcHJvcGVydHkge3N0cmluZ30gX3JlZiAtIEludGVybmFsIHJlZmVyZW5jZSB0byB0aGUgZG9jdW1lbnQgcmVmZXJlbmNlIGZpZWxkLlxuICogQHByb3BlcnR5IHtzdHJpbmdbXX0gX2ZpZWxkcyAtIEludGVybmFsIHJlZmVyZW5jZSB0byB0aGUgZG9jdW1lbnQgZmllbGRzIHRvIGluZGV4LlxuICogQHByb3BlcnR5IHtvYmplY3R9IGludmVydGVkSW5kZXggLSBUaGUgaW52ZXJ0ZWQgaW5kZXggbWFwcyB0ZXJtcyB0byBkb2N1bWVudCBmaWVsZHMuXG4gKiBAcHJvcGVydHkge29iamVjdH0gZG9jdW1lbnRUZXJtRnJlcXVlbmNpZXMgLSBLZWVwcyB0cmFjayBvZiBkb2N1bWVudCB0ZXJtIGZyZXF1ZW5jaWVzLlxuICogQHByb3BlcnR5IHtvYmplY3R9IGRvY3VtZW50TGVuZ3RocyAtIEtlZXBzIHRyYWNrIG9mIHRoZSBsZW5ndGggb2YgZG9jdW1lbnRzIGFkZGVkIHRvIHRoZSBpbmRleC5cbiAqIEBwcm9wZXJ0eSB7bHVuci50b2tlbml6ZXJ9IHRva2VuaXplciAtIEZ1bmN0aW9uIGZvciBzcGxpdHRpbmcgc3RyaW5ncyBpbnRvIHRva2VucyBmb3IgaW5kZXhpbmcuXG4gKiBAcHJvcGVydHkge2x1bnIuUGlwZWxpbmV9IHBpcGVsaW5lIC0gVGhlIHBpcGVsaW5lIHBlcmZvcm1zIHRleHQgcHJvY2Vzc2luZyBvbiB0b2tlbnMgYmVmb3JlIGluZGV4aW5nLlxuICogQHByb3BlcnR5IHtsdW5yLlBpcGVsaW5lfSBzZWFyY2hQaXBlbGluZSAtIEEgcGlwZWxpbmUgZm9yIHByb2Nlc3Npbmcgc2VhcmNoIHRlcm1zIGJlZm9yZSBxdWVyeWluZyB0aGUgaW5kZXguXG4gKiBAcHJvcGVydHkge251bWJlcn0gZG9jdW1lbnRDb3VudCAtIEtlZXBzIHRyYWNrIG9mIHRoZSB0b3RhbCBudW1iZXIgb2YgZG9jdW1lbnRzIGluZGV4ZWQuXG4gKiBAcHJvcGVydHkge251bWJlcn0gX2IgLSBBIHBhcmFtZXRlciB0byBjb250cm9sIGZpZWxkIGxlbmd0aCBub3JtYWxpemF0aW9uLCBzZXR0aW5nIHRoaXMgdG8gMCBkaXNhYmxlZCBub3JtYWxpemF0aW9uLCAxIGZ1bGx5IG5vcm1hbGl6ZXMgZmllbGQgbGVuZ3RocywgdGhlIGRlZmF1bHQgdmFsdWUgaXMgMC43NS5cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBfazEgLSBBIHBhcmFtZXRlciB0byBjb250cm9sIGhvdyBxdWlja2x5IGFuIGluY3JlYXNlIGluIHRlcm0gZnJlcXVlbmN5IHJlc3VsdHMgaW4gdGVybSBmcmVxdWVuY3kgc2F0dXJhdGlvbiwgdGhlIGRlZmF1bHQgdmFsdWUgaXMgMS4yLlxuICogQHByb3BlcnR5IHtudW1iZXJ9IHRlcm1JbmRleCAtIEEgY291bnRlciBpbmNyZW1lbnRlZCBmb3IgZWFjaCB1bmlxdWUgdGVybSwgdXNlZCB0byBpZGVudGlmeSBhIHRlcm1zIHBvc2l0aW9uIGluIHRoZSB2ZWN0b3Igc3BhY2UuXG4gKiBAcHJvcGVydHkge2FycmF5fSBtZXRhZGF0YVdoaXRlbGlzdCAtIEEgbGlzdCBvZiBtZXRhZGF0YSBrZXlzIHRoYXQgaGF2ZSBiZWVuIHdoaXRlbGlzdGVkIGZvciBlbnRyeSBpbiB0aGUgaW5kZXguXG4gKi9cbmx1bnIuQnVpbGRlciA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5fcmVmID0gXCJpZFwiXG4gIHRoaXMuX2ZpZWxkcyA9IE9iamVjdC5jcmVhdGUobnVsbClcbiAgdGhpcy5fZG9jdW1lbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuICB0aGlzLmludmVydGVkSW5kZXggPSBPYmplY3QuY3JlYXRlKG51bGwpXG4gIHRoaXMuZmllbGRUZXJtRnJlcXVlbmNpZXMgPSB7fVxuICB0aGlzLmZpZWxkTGVuZ3RocyA9IHt9XG4gIHRoaXMudG9rZW5pemVyID0gbHVuci50b2tlbml6ZXJcbiAgdGhpcy5waXBlbGluZSA9IG5ldyBsdW5yLlBpcGVsaW5lXG4gIHRoaXMuc2VhcmNoUGlwZWxpbmUgPSBuZXcgbHVuci5QaXBlbGluZVxuICB0aGlzLmRvY3VtZW50Q291bnQgPSAwXG4gIHRoaXMuX2IgPSAwLjc1XG4gIHRoaXMuX2sxID0gMS4yXG4gIHRoaXMudGVybUluZGV4ID0gMFxuICB0aGlzLm1ldGFkYXRhV2hpdGVsaXN0ID0gW11cbn1cblxuLyoqXG4gKiBTZXRzIHRoZSBkb2N1bWVudCBmaWVsZCB1c2VkIGFzIHRoZSBkb2N1bWVudCByZWZlcmVuY2UuIEV2ZXJ5IGRvY3VtZW50IG11c3QgaGF2ZSB0aGlzIGZpZWxkLlxuICogVGhlIHR5cGUgb2YgdGhpcyBmaWVsZCBpbiB0aGUgZG9jdW1lbnQgc2hvdWxkIGJlIGEgc3RyaW5nLCBpZiBpdCBpcyBub3QgYSBzdHJpbmcgaXQgd2lsbCBiZVxuICogY29lcmNlZCBpbnRvIGEgc3RyaW5nIGJ5IGNhbGxpbmcgdG9TdHJpbmcuXG4gKlxuICogVGhlIGRlZmF1bHQgcmVmIGlzICdpZCcuXG4gKlxuICogVGhlIHJlZiBzaG91bGQgX25vdF8gYmUgY2hhbmdlZCBkdXJpbmcgaW5kZXhpbmcsIGl0IHNob3VsZCBiZSBzZXQgYmVmb3JlIGFueSBkb2N1bWVudHMgYXJlXG4gKiBhZGRlZCB0byB0aGUgaW5kZXguIENoYW5naW5nIGl0IGR1cmluZyBpbmRleGluZyBjYW4gbGVhZCB0byBpbmNvbnNpc3RlbnQgcmVzdWx0cy5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gcmVmIC0gVGhlIG5hbWUgb2YgdGhlIHJlZmVyZW5jZSBmaWVsZCBpbiB0aGUgZG9jdW1lbnQuXG4gKi9cbmx1bnIuQnVpbGRlci5wcm90b3R5cGUucmVmID0gZnVuY3Rpb24gKHJlZikge1xuICB0aGlzLl9yZWYgPSByZWZcbn1cblxuLyoqXG4gKiBBIGZ1bmN0aW9uIHRoYXQgaXMgdXNlZCB0byBleHRyYWN0IGEgZmllbGQgZnJvbSBhIGRvY3VtZW50LlxuICpcbiAqIEx1bnIgZXhwZWN0cyBhIGZpZWxkIHRvIGJlIGF0IHRoZSB0b3AgbGV2ZWwgb2YgYSBkb2N1bWVudCwgaWYgaG93ZXZlciB0aGUgZmllbGRcbiAqIGlzIGRlZXBseSBuZXN0ZWQgd2l0aGluIGEgZG9jdW1lbnQgYW4gZXh0cmFjdG9yIGZ1bmN0aW9uIGNhbiBiZSB1c2VkIHRvIGV4dHJhY3RcbiAqIHRoZSByaWdodCBmaWVsZCBmb3IgaW5kZXhpbmcuXG4gKlxuICogQGNhbGxiYWNrIGZpZWxkRXh0cmFjdG9yXG4gKiBAcGFyYW0ge29iamVjdH0gZG9jIC0gVGhlIGRvY3VtZW50IGJlaW5nIGFkZGVkIHRvIHRoZSBpbmRleC5cbiAqIEByZXR1cm5zIHs/KHN0cmluZ3xvYmplY3R8b2JqZWN0W10pfSBvYmogLSBUaGUgb2JqZWN0IHRoYXQgd2lsbCBiZSBpbmRleGVkIGZvciB0aGlzIGZpZWxkLlxuICogQGV4YW1wbGUgPGNhcHRpb24+RXh0cmFjdGluZyBhIG5lc3RlZCBmaWVsZDwvY2FwdGlvbj5cbiAqIGZ1bmN0aW9uIChkb2MpIHsgcmV0dXJuIGRvYy5uZXN0ZWQuZmllbGQgfVxuICovXG5cbi8qKlxuICogQWRkcyBhIGZpZWxkIHRvIHRoZSBsaXN0IG9mIGRvY3VtZW50IGZpZWxkcyB0aGF0IHdpbGwgYmUgaW5kZXhlZC4gRXZlcnkgZG9jdW1lbnQgYmVpbmdcbiAqIGluZGV4ZWQgc2hvdWxkIGhhdmUgdGhpcyBmaWVsZC4gTnVsbCB2YWx1ZXMgZm9yIHRoaXMgZmllbGQgaW4gaW5kZXhlZCBkb2N1bWVudHMgd2lsbFxuICogbm90IGNhdXNlIGVycm9ycyBidXQgd2lsbCBsaW1pdCB0aGUgY2hhbmNlIG9mIHRoYXQgZG9jdW1lbnQgYmVpbmcgcmV0cmlldmVkIGJ5IHNlYXJjaGVzLlxuICpcbiAqIEFsbCBmaWVsZHMgc2hvdWxkIGJlIGFkZGVkIGJlZm9yZSBhZGRpbmcgZG9jdW1lbnRzIHRvIHRoZSBpbmRleC4gQWRkaW5nIGZpZWxkcyBhZnRlclxuICogYSBkb2N1bWVudCBoYXMgYmVlbiBpbmRleGVkIHdpbGwgaGF2ZSBubyBlZmZlY3Qgb24gYWxyZWFkeSBpbmRleGVkIGRvY3VtZW50cy5cbiAqXG4gKiBGaWVsZHMgY2FuIGJlIGJvb3N0ZWQgYXQgYnVpbGQgdGltZS4gVGhpcyBhbGxvd3MgdGVybXMgd2l0aGluIHRoYXQgZmllbGQgdG8gaGF2ZSBtb3JlXG4gKiBpbXBvcnRhbmNlIHdoZW4gcmFua2luZyBzZWFyY2ggcmVzdWx0cy4gVXNlIGEgZmllbGQgYm9vc3QgdG8gc3BlY2lmeSB0aGF0IG1hdGNoZXMgd2l0aGluXG4gKiBvbmUgZmllbGQgYXJlIG1vcmUgaW1wb3J0YW50IHRoYW4gb3RoZXIgZmllbGRzLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBmaWVsZE5hbWUgLSBUaGUgbmFtZSBvZiBhIGZpZWxkIHRvIGluZGV4IGluIGFsbCBkb2N1bWVudHMuXG4gKiBAcGFyYW0ge29iamVjdH0gYXR0cmlidXRlcyAtIE9wdGlvbmFsIGF0dHJpYnV0ZXMgYXNzb2NpYXRlZCB3aXRoIHRoaXMgZmllbGQuXG4gKiBAcGFyYW0ge251bWJlcn0gW2F0dHJpYnV0ZXMuYm9vc3Q9MV0gLSBCb29zdCBhcHBsaWVkIHRvIGFsbCB0ZXJtcyB3aXRoaW4gdGhpcyBmaWVsZC5cbiAqIEBwYXJhbSB7ZmllbGRFeHRyYWN0b3J9IFthdHRyaWJ1dGVzLmV4dHJhY3Rvcl0gLSBGdW5jdGlvbiB0byBleHRyYWN0IGEgZmllbGQgZnJvbSBhIGRvY3VtZW50LlxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gZmllbGROYW1lIGNhbm5vdCBjb250YWluIHVuc3VwcG9ydGVkIGNoYXJhY3RlcnMgJy8nXG4gKi9cbmx1bnIuQnVpbGRlci5wcm90b3R5cGUuZmllbGQgPSBmdW5jdGlvbiAoZmllbGROYW1lLCBhdHRyaWJ1dGVzKSB7XG4gIGlmICgvXFwvLy50ZXN0KGZpZWxkTmFtZSkpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvciAoXCJGaWVsZCAnXCIgKyBmaWVsZE5hbWUgKyBcIicgY29udGFpbnMgaWxsZWdhbCBjaGFyYWN0ZXIgJy8nXCIpXG4gIH1cblxuICB0aGlzLl9maWVsZHNbZmllbGROYW1lXSA9IGF0dHJpYnV0ZXMgfHwge31cbn1cblxuLyoqXG4gKiBBIHBhcmFtZXRlciB0byB0dW5lIHRoZSBhbW91bnQgb2YgZmllbGQgbGVuZ3RoIG5vcm1hbGlzYXRpb24gdGhhdCBpcyBhcHBsaWVkIHdoZW5cbiAqIGNhbGN1bGF0aW5nIHJlbGV2YW5jZSBzY29yZXMuIEEgdmFsdWUgb2YgMCB3aWxsIGNvbXBsZXRlbHkgZGlzYWJsZSBhbnkgbm9ybWFsaXNhdGlvblxuICogYW5kIGEgdmFsdWUgb2YgMSB3aWxsIGZ1bGx5IG5vcm1hbGlzZSBmaWVsZCBsZW5ndGhzLiBUaGUgZGVmYXVsdCBpcyAwLjc1LiBWYWx1ZXMgb2YgYlxuICogd2lsbCBiZSBjbGFtcGVkIHRvIHRoZSByYW5nZSAwIC0gMS5cbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gbnVtYmVyIC0gVGhlIHZhbHVlIHRvIHNldCBmb3IgdGhpcyB0dW5pbmcgcGFyYW1ldGVyLlxuICovXG5sdW5yLkJ1aWxkZXIucHJvdG90eXBlLmIgPSBmdW5jdGlvbiAobnVtYmVyKSB7XG4gIGlmIChudW1iZXIgPCAwKSB7XG4gICAgdGhpcy5fYiA9IDBcbiAgfSBlbHNlIGlmIChudW1iZXIgPiAxKSB7XG4gICAgdGhpcy5fYiA9IDFcbiAgfSBlbHNlIHtcbiAgICB0aGlzLl9iID0gbnVtYmVyXG4gIH1cbn1cblxuLyoqXG4gKiBBIHBhcmFtZXRlciB0aGF0IGNvbnRyb2xzIHRoZSBzcGVlZCBhdCB3aGljaCBhIHJpc2UgaW4gdGVybSBmcmVxdWVuY3kgcmVzdWx0cyBpbiB0ZXJtXG4gKiBmcmVxdWVuY3kgc2F0dXJhdGlvbi4gVGhlIGRlZmF1bHQgdmFsdWUgaXMgMS4yLiBTZXR0aW5nIHRoaXMgdG8gYSBoaWdoZXIgdmFsdWUgd2lsbCBnaXZlXG4gKiBzbG93ZXIgc2F0dXJhdGlvbiBsZXZlbHMsIGEgbG93ZXIgdmFsdWUgd2lsbCByZXN1bHQgaW4gcXVpY2tlciBzYXR1cmF0aW9uLlxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSBudW1iZXIgLSBUaGUgdmFsdWUgdG8gc2V0IGZvciB0aGlzIHR1bmluZyBwYXJhbWV0ZXIuXG4gKi9cbmx1bnIuQnVpbGRlci5wcm90b3R5cGUuazEgPSBmdW5jdGlvbiAobnVtYmVyKSB7XG4gIHRoaXMuX2sxID0gbnVtYmVyXG59XG5cbi8qKlxuICogQWRkcyBhIGRvY3VtZW50IHRvIHRoZSBpbmRleC5cbiAqXG4gKiBCZWZvcmUgYWRkaW5nIGZpZWxkcyB0byB0aGUgaW5kZXggdGhlIGluZGV4IHNob3VsZCBoYXZlIGJlZW4gZnVsbHkgc2V0dXAsIHdpdGggdGhlIGRvY3VtZW50XG4gKiByZWYgYW5kIGFsbCBmaWVsZHMgdG8gaW5kZXggYWxyZWFkeSBoYXZpbmcgYmVlbiBzcGVjaWZpZWQuXG4gKlxuICogVGhlIGRvY3VtZW50IG11c3QgaGF2ZSBhIGZpZWxkIG5hbWUgYXMgc3BlY2lmaWVkIGJ5IHRoZSByZWYgKGJ5IGRlZmF1bHQgdGhpcyBpcyAnaWQnKSBhbmRcbiAqIGl0IHNob3VsZCBoYXZlIGFsbCBmaWVsZHMgZGVmaW5lZCBmb3IgaW5kZXhpbmcsIHRob3VnaCBudWxsIG9yIHVuZGVmaW5lZCB2YWx1ZXMgd2lsbCBub3RcbiAqIGNhdXNlIGVycm9ycy5cbiAqXG4gKiBFbnRpcmUgZG9jdW1lbnRzIGNhbiBiZSBib29zdGVkIGF0IGJ1aWxkIHRpbWUuIEFwcGx5aW5nIGEgYm9vc3QgdG8gYSBkb2N1bWVudCBpbmRpY2F0ZXMgdGhhdFxuICogdGhpcyBkb2N1bWVudCBzaG91bGQgcmFuayBoaWdoZXIgaW4gc2VhcmNoIHJlc3VsdHMgdGhhbiBvdGhlciBkb2N1bWVudHMuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IGRvYyAtIFRoZSBkb2N1bWVudCB0byBhZGQgdG8gdGhlIGluZGV4LlxuICogQHBhcmFtIHtvYmplY3R9IGF0dHJpYnV0ZXMgLSBPcHRpb25hbCBhdHRyaWJ1dGVzIGFzc29jaWF0ZWQgd2l0aCB0aGlzIGRvY3VtZW50LlxuICogQHBhcmFtIHtudW1iZXJ9IFthdHRyaWJ1dGVzLmJvb3N0PTFdIC0gQm9vc3QgYXBwbGllZCB0byBhbGwgdGVybXMgd2l0aGluIHRoaXMgZG9jdW1lbnQuXG4gKi9cbmx1bnIuQnVpbGRlci5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24gKGRvYywgYXR0cmlidXRlcykge1xuICB2YXIgZG9jUmVmID0gZG9jW3RoaXMuX3JlZl0sXG4gICAgICBmaWVsZHMgPSBPYmplY3Qua2V5cyh0aGlzLl9maWVsZHMpXG5cbiAgdGhpcy5fZG9jdW1lbnRzW2RvY1JlZl0gPSBhdHRyaWJ1dGVzIHx8IHt9XG4gIHRoaXMuZG9jdW1lbnRDb3VudCArPSAxXG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBmaWVsZHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZmllbGROYW1lID0gZmllbGRzW2ldLFxuICAgICAgICBleHRyYWN0b3IgPSB0aGlzLl9maWVsZHNbZmllbGROYW1lXS5leHRyYWN0b3IsXG4gICAgICAgIGZpZWxkID0gZXh0cmFjdG9yID8gZXh0cmFjdG9yKGRvYykgOiBkb2NbZmllbGROYW1lXSxcbiAgICAgICAgdG9rZW5zID0gdGhpcy50b2tlbml6ZXIoZmllbGQsIHtcbiAgICAgICAgICBmaWVsZHM6IFtmaWVsZE5hbWVdXG4gICAgICAgIH0pLFxuICAgICAgICB0ZXJtcyA9IHRoaXMucGlwZWxpbmUucnVuKHRva2VucyksXG4gICAgICAgIGZpZWxkUmVmID0gbmV3IGx1bnIuRmllbGRSZWYgKGRvY1JlZiwgZmllbGROYW1lKSxcbiAgICAgICAgZmllbGRUZXJtcyA9IE9iamVjdC5jcmVhdGUobnVsbClcblxuICAgIHRoaXMuZmllbGRUZXJtRnJlcXVlbmNpZXNbZmllbGRSZWZdID0gZmllbGRUZXJtc1xuICAgIHRoaXMuZmllbGRMZW5ndGhzW2ZpZWxkUmVmXSA9IDBcblxuICAgIC8vIHN0b3JlIHRoZSBsZW5ndGggb2YgdGhpcyBmaWVsZCBmb3IgdGhpcyBkb2N1bWVudFxuICAgIHRoaXMuZmllbGRMZW5ndGhzW2ZpZWxkUmVmXSArPSB0ZXJtcy5sZW5ndGhcblxuICAgIC8vIGNhbGN1bGF0ZSB0ZXJtIGZyZXF1ZW5jaWVzIGZvciB0aGlzIGZpZWxkXG4gICAgZm9yICh2YXIgaiA9IDA7IGogPCB0ZXJtcy5sZW5ndGg7IGorKykge1xuICAgICAgdmFyIHRlcm0gPSB0ZXJtc1tqXVxuXG4gICAgICBpZiAoZmllbGRUZXJtc1t0ZXJtXSA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgZmllbGRUZXJtc1t0ZXJtXSA9IDBcbiAgICAgIH1cblxuICAgICAgZmllbGRUZXJtc1t0ZXJtXSArPSAxXG5cbiAgICAgIC8vIGFkZCB0byBpbnZlcnRlZCBpbmRleFxuICAgICAgLy8gY3JlYXRlIGFuIGluaXRpYWwgcG9zdGluZyBpZiBvbmUgZG9lc24ndCBleGlzdFxuICAgICAgaWYgKHRoaXMuaW52ZXJ0ZWRJbmRleFt0ZXJtXSA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdmFyIHBvc3RpbmcgPSBPYmplY3QuY3JlYXRlKG51bGwpXG4gICAgICAgIHBvc3RpbmdbXCJfaW5kZXhcIl0gPSB0aGlzLnRlcm1JbmRleFxuICAgICAgICB0aGlzLnRlcm1JbmRleCArPSAxXG5cbiAgICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCBmaWVsZHMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgICBwb3N0aW5nW2ZpZWxkc1trXV0gPSBPYmplY3QuY3JlYXRlKG51bGwpXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmludmVydGVkSW5kZXhbdGVybV0gPSBwb3N0aW5nXG4gICAgICB9XG5cbiAgICAgIC8vIGFkZCBhbiBlbnRyeSBmb3IgdGhpcyB0ZXJtL2ZpZWxkTmFtZS9kb2NSZWYgdG8gdGhlIGludmVydGVkSW5kZXhcbiAgICAgIGlmICh0aGlzLmludmVydGVkSW5kZXhbdGVybV1bZmllbGROYW1lXVtkb2NSZWZdID09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLmludmVydGVkSW5kZXhbdGVybV1bZmllbGROYW1lXVtkb2NSZWZdID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuICAgICAgfVxuXG4gICAgICAvLyBzdG9yZSBhbGwgd2hpdGVsaXN0ZWQgbWV0YWRhdGEgYWJvdXQgdGhpcyB0b2tlbiBpbiB0aGVcbiAgICAgIC8vIGludmVydGVkIGluZGV4XG4gICAgICBmb3IgKHZhciBsID0gMDsgbCA8IHRoaXMubWV0YWRhdGFXaGl0ZWxpc3QubGVuZ3RoOyBsKyspIHtcbiAgICAgICAgdmFyIG1ldGFkYXRhS2V5ID0gdGhpcy5tZXRhZGF0YVdoaXRlbGlzdFtsXSxcbiAgICAgICAgICAgIG1ldGFkYXRhID0gdGVybS5tZXRhZGF0YVttZXRhZGF0YUtleV1cblxuICAgICAgICBpZiAodGhpcy5pbnZlcnRlZEluZGV4W3Rlcm1dW2ZpZWxkTmFtZV1bZG9jUmVmXVttZXRhZGF0YUtleV0gPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5pbnZlcnRlZEluZGV4W3Rlcm1dW2ZpZWxkTmFtZV1bZG9jUmVmXVttZXRhZGF0YUtleV0gPSBbXVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5pbnZlcnRlZEluZGV4W3Rlcm1dW2ZpZWxkTmFtZV1bZG9jUmVmXVttZXRhZGF0YUtleV0ucHVzaChtZXRhZGF0YSlcbiAgICAgIH1cbiAgICB9XG5cbiAgfVxufVxuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIGF2ZXJhZ2UgZG9jdW1lbnQgbGVuZ3RoIGZvciB0aGlzIGluZGV4XG4gKlxuICogQHByaXZhdGVcbiAqL1xubHVuci5CdWlsZGVyLnByb3RvdHlwZS5jYWxjdWxhdGVBdmVyYWdlRmllbGRMZW5ndGhzID0gZnVuY3Rpb24gKCkge1xuXG4gIHZhciBmaWVsZFJlZnMgPSBPYmplY3Qua2V5cyh0aGlzLmZpZWxkTGVuZ3RocyksXG4gICAgICBudW1iZXJPZkZpZWxkcyA9IGZpZWxkUmVmcy5sZW5ndGgsXG4gICAgICBhY2N1bXVsYXRvciA9IHt9LFxuICAgICAgZG9jdW1lbnRzV2l0aEZpZWxkID0ge31cblxuICBmb3IgKHZhciBpID0gMDsgaSA8IG51bWJlck9mRmllbGRzOyBpKyspIHtcbiAgICB2YXIgZmllbGRSZWYgPSBsdW5yLkZpZWxkUmVmLmZyb21TdHJpbmcoZmllbGRSZWZzW2ldKSxcbiAgICAgICAgZmllbGQgPSBmaWVsZFJlZi5maWVsZE5hbWVcblxuICAgIGRvY3VtZW50c1dpdGhGaWVsZFtmaWVsZF0gfHwgKGRvY3VtZW50c1dpdGhGaWVsZFtmaWVsZF0gPSAwKVxuICAgIGRvY3VtZW50c1dpdGhGaWVsZFtmaWVsZF0gKz0gMVxuXG4gICAgYWNjdW11bGF0b3JbZmllbGRdIHx8IChhY2N1bXVsYXRvcltmaWVsZF0gPSAwKVxuICAgIGFjY3VtdWxhdG9yW2ZpZWxkXSArPSB0aGlzLmZpZWxkTGVuZ3Roc1tmaWVsZFJlZl1cbiAgfVxuXG4gIHZhciBmaWVsZHMgPSBPYmplY3Qua2V5cyh0aGlzLl9maWVsZHMpXG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBmaWVsZHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZmllbGROYW1lID0gZmllbGRzW2ldXG4gICAgYWNjdW11bGF0b3JbZmllbGROYW1lXSA9IGFjY3VtdWxhdG9yW2ZpZWxkTmFtZV0gLyBkb2N1bWVudHNXaXRoRmllbGRbZmllbGROYW1lXVxuICB9XG5cbiAgdGhpcy5hdmVyYWdlRmllbGRMZW5ndGggPSBhY2N1bXVsYXRvclxufVxuXG4vKipcbiAqIEJ1aWxkcyBhIHZlY3RvciBzcGFjZSBtb2RlbCBvZiBldmVyeSBkb2N1bWVudCB1c2luZyBsdW5yLlZlY3RvclxuICpcbiAqIEBwcml2YXRlXG4gKi9cbmx1bnIuQnVpbGRlci5wcm90b3R5cGUuY3JlYXRlRmllbGRWZWN0b3JzID0gZnVuY3Rpb24gKCkge1xuICB2YXIgZmllbGRWZWN0b3JzID0ge30sXG4gICAgICBmaWVsZFJlZnMgPSBPYmplY3Qua2V5cyh0aGlzLmZpZWxkVGVybUZyZXF1ZW5jaWVzKSxcbiAgICAgIGZpZWxkUmVmc0xlbmd0aCA9IGZpZWxkUmVmcy5sZW5ndGgsXG4gICAgICB0ZXJtSWRmQ2FjaGUgPSBPYmplY3QuY3JlYXRlKG51bGwpXG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBmaWVsZFJlZnNMZW5ndGg7IGkrKykge1xuICAgIHZhciBmaWVsZFJlZiA9IGx1bnIuRmllbGRSZWYuZnJvbVN0cmluZyhmaWVsZFJlZnNbaV0pLFxuICAgICAgICBmaWVsZE5hbWUgPSBmaWVsZFJlZi5maWVsZE5hbWUsXG4gICAgICAgIGZpZWxkTGVuZ3RoID0gdGhpcy5maWVsZExlbmd0aHNbZmllbGRSZWZdLFxuICAgICAgICBmaWVsZFZlY3RvciA9IG5ldyBsdW5yLlZlY3RvcixcbiAgICAgICAgdGVybUZyZXF1ZW5jaWVzID0gdGhpcy5maWVsZFRlcm1GcmVxdWVuY2llc1tmaWVsZFJlZl0sXG4gICAgICAgIHRlcm1zID0gT2JqZWN0LmtleXModGVybUZyZXF1ZW5jaWVzKSxcbiAgICAgICAgdGVybXNMZW5ndGggPSB0ZXJtcy5sZW5ndGhcblxuXG4gICAgdmFyIGZpZWxkQm9vc3QgPSB0aGlzLl9maWVsZHNbZmllbGROYW1lXS5ib29zdCB8fCAxLFxuICAgICAgICBkb2NCb29zdCA9IHRoaXMuX2RvY3VtZW50c1tmaWVsZFJlZi5kb2NSZWZdLmJvb3N0IHx8IDFcblxuICAgIGZvciAodmFyIGogPSAwOyBqIDwgdGVybXNMZW5ndGg7IGorKykge1xuICAgICAgdmFyIHRlcm0gPSB0ZXJtc1tqXSxcbiAgICAgICAgICB0ZiA9IHRlcm1GcmVxdWVuY2llc1t0ZXJtXSxcbiAgICAgICAgICB0ZXJtSW5kZXggPSB0aGlzLmludmVydGVkSW5kZXhbdGVybV0uX2luZGV4LFxuICAgICAgICAgIGlkZiwgc2NvcmUsIHNjb3JlV2l0aFByZWNpc2lvblxuXG4gICAgICBpZiAodGVybUlkZkNhY2hlW3Rlcm1dID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWRmID0gbHVuci5pZGYodGhpcy5pbnZlcnRlZEluZGV4W3Rlcm1dLCB0aGlzLmRvY3VtZW50Q291bnQpXG4gICAgICAgIHRlcm1JZGZDYWNoZVt0ZXJtXSA9IGlkZlxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWRmID0gdGVybUlkZkNhY2hlW3Rlcm1dXG4gICAgICB9XG5cbiAgICAgIHNjb3JlID0gaWRmICogKCh0aGlzLl9rMSArIDEpICogdGYpIC8gKHRoaXMuX2sxICogKDEgLSB0aGlzLl9iICsgdGhpcy5fYiAqIChmaWVsZExlbmd0aCAvIHRoaXMuYXZlcmFnZUZpZWxkTGVuZ3RoW2ZpZWxkTmFtZV0pKSArIHRmKVxuICAgICAgc2NvcmUgKj0gZmllbGRCb29zdFxuICAgICAgc2NvcmUgKj0gZG9jQm9vc3RcbiAgICAgIHNjb3JlV2l0aFByZWNpc2lvbiA9IE1hdGgucm91bmQoc2NvcmUgKiAxMDAwKSAvIDEwMDBcbiAgICAgIC8vIENvbnZlcnRzIDEuMjM0NTY3ODkgdG8gMS4yMzQuXG4gICAgICAvLyBSZWR1Y2luZyB0aGUgcHJlY2lzaW9uIHNvIHRoYXQgdGhlIHZlY3RvcnMgdGFrZSB1cCBsZXNzXG4gICAgICAvLyBzcGFjZSB3aGVuIHNlcmlhbGlzZWQuIERvaW5nIGl0IG5vdyBzbyB0aGF0IHRoZXkgYmVoYXZlXG4gICAgICAvLyB0aGUgc2FtZSBiZWZvcmUgYW5kIGFmdGVyIHNlcmlhbGlzYXRpb24uIEFsc28sIHRoaXMgaXNcbiAgICAgIC8vIHRoZSBmYXN0ZXN0IGFwcHJvYWNoIHRvIHJlZHVjaW5nIGEgbnVtYmVyJ3MgcHJlY2lzaW9uIGluXG4gICAgICAvLyBKYXZhU2NyaXB0LlxuXG4gICAgICBmaWVsZFZlY3Rvci5pbnNlcnQodGVybUluZGV4LCBzY29yZVdpdGhQcmVjaXNpb24pXG4gICAgfVxuXG4gICAgZmllbGRWZWN0b3JzW2ZpZWxkUmVmXSA9IGZpZWxkVmVjdG9yXG4gIH1cblxuICB0aGlzLmZpZWxkVmVjdG9ycyA9IGZpZWxkVmVjdG9yc1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSB0b2tlbiBzZXQgb2YgYWxsIHRva2VucyBpbiB0aGUgaW5kZXggdXNpbmcgbHVuci5Ub2tlblNldFxuICpcbiAqIEBwcml2YXRlXG4gKi9cbmx1bnIuQnVpbGRlci5wcm90b3R5cGUuY3JlYXRlVG9rZW5TZXQgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMudG9rZW5TZXQgPSBsdW5yLlRva2VuU2V0LmZyb21BcnJheShcbiAgICBPYmplY3Qua2V5cyh0aGlzLmludmVydGVkSW5kZXgpLnNvcnQoKVxuICApXG59XG5cbi8qKlxuICogQnVpbGRzIHRoZSBpbmRleCwgY3JlYXRpbmcgYW4gaW5zdGFuY2Ugb2YgbHVuci5JbmRleC5cbiAqXG4gKiBUaGlzIGNvbXBsZXRlcyB0aGUgaW5kZXhpbmcgcHJvY2VzcyBhbmQgc2hvdWxkIG9ubHkgYmUgY2FsbGVkXG4gKiBvbmNlIGFsbCBkb2N1bWVudHMgaGF2ZSBiZWVuIGFkZGVkIHRvIHRoZSBpbmRleC5cbiAqXG4gKiBAcmV0dXJucyB7bHVuci5JbmRleH1cbiAqL1xubHVuci5CdWlsZGVyLnByb3RvdHlwZS5idWlsZCA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5jYWxjdWxhdGVBdmVyYWdlRmllbGRMZW5ndGhzKClcbiAgdGhpcy5jcmVhdGVGaWVsZFZlY3RvcnMoKVxuICB0aGlzLmNyZWF0ZVRva2VuU2V0KClcblxuICByZXR1cm4gbmV3IGx1bnIuSW5kZXgoe1xuICAgIGludmVydGVkSW5kZXg6IHRoaXMuaW52ZXJ0ZWRJbmRleCxcbiAgICBmaWVsZFZlY3RvcnM6IHRoaXMuZmllbGRWZWN0b3JzLFxuICAgIHRva2VuU2V0OiB0aGlzLnRva2VuU2V0LFxuICAgIGZpZWxkczogT2JqZWN0LmtleXModGhpcy5fZmllbGRzKSxcbiAgICBwaXBlbGluZTogdGhpcy5zZWFyY2hQaXBlbGluZVxuICB9KVxufVxuXG4vKipcbiAqIEFwcGxpZXMgYSBwbHVnaW4gdG8gdGhlIGluZGV4IGJ1aWxkZXIuXG4gKlxuICogQSBwbHVnaW4gaXMgYSBmdW5jdGlvbiB0aGF0IGlzIGNhbGxlZCB3aXRoIHRoZSBpbmRleCBidWlsZGVyIGFzIGl0cyBjb250ZXh0LlxuICogUGx1Z2lucyBjYW4gYmUgdXNlZCB0byBjdXN0b21pc2Ugb3IgZXh0ZW5kIHRoZSBiZWhhdmlvdXIgb2YgdGhlIGluZGV4XG4gKiBpbiBzb21lIHdheS4gQSBwbHVnaW4gaXMganVzdCBhIGZ1bmN0aW9uLCB0aGF0IGVuY2Fwc3VsYXRlZCB0aGUgY3VzdG9tXG4gKiBiZWhhdmlvdXIgdGhhdCBzaG91bGQgYmUgYXBwbGllZCB3aGVuIGJ1aWxkaW5nIHRoZSBpbmRleC5cbiAqXG4gKiBUaGUgcGx1Z2luIGZ1bmN0aW9uIHdpbGwgYmUgY2FsbGVkIHdpdGggdGhlIGluZGV4IGJ1aWxkZXIgYXMgaXRzIGFyZ3VtZW50LCBhZGRpdGlvbmFsXG4gKiBhcmd1bWVudHMgY2FuIGFsc28gYmUgcGFzc2VkIHdoZW4gY2FsbGluZyB1c2UuIFRoZSBmdW5jdGlvbiB3aWxsIGJlIGNhbGxlZFxuICogd2l0aCB0aGUgaW5kZXggYnVpbGRlciBhcyBpdHMgY29udGV4dC5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBwbHVnaW4gVGhlIHBsdWdpbiB0byBhcHBseS5cbiAqL1xubHVuci5CdWlsZGVyLnByb3RvdHlwZS51c2UgPSBmdW5jdGlvbiAoZm4pIHtcbiAgdmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpXG4gIGFyZ3MudW5zaGlmdCh0aGlzKVxuICBmbi5hcHBseSh0aGlzLCBhcmdzKVxufVxuLyoqXG4gKiBDb250YWlucyBhbmQgY29sbGVjdHMgbWV0YWRhdGEgYWJvdXQgYSBtYXRjaGluZyBkb2N1bWVudC5cbiAqIEEgc2luZ2xlIGluc3RhbmNlIG9mIGx1bnIuTWF0Y2hEYXRhIGlzIHJldHVybmVkIGFzIHBhcnQgb2YgZXZlcnlcbiAqIGx1bnIuSW5kZXh+UmVzdWx0LlxuICpcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtzdHJpbmd9IHRlcm0gLSBUaGUgdGVybSB0aGlzIG1hdGNoIGRhdGEgaXMgYXNzb2NpYXRlZCB3aXRoXG4gKiBAcGFyYW0ge3N0cmluZ30gZmllbGQgLSBUaGUgZmllbGQgaW4gd2hpY2ggdGhlIHRlcm0gd2FzIGZvdW5kXG4gKiBAcGFyYW0ge29iamVjdH0gbWV0YWRhdGEgLSBUaGUgbWV0YWRhdGEgcmVjb3JkZWQgYWJvdXQgdGhpcyB0ZXJtIGluIHRoaXMgZmllbGRcbiAqIEBwcm9wZXJ0eSB7b2JqZWN0fSBtZXRhZGF0YSAtIEEgY2xvbmVkIGNvbGxlY3Rpb24gb2YgbWV0YWRhdGEgYXNzb2NpYXRlZCB3aXRoIHRoaXMgZG9jdW1lbnQuXG4gKiBAc2VlIHtAbGluayBsdW5yLkluZGV4flJlc3VsdH1cbiAqL1xubHVuci5NYXRjaERhdGEgPSBmdW5jdGlvbiAodGVybSwgZmllbGQsIG1ldGFkYXRhKSB7XG4gIHZhciBjbG9uZWRNZXRhZGF0YSA9IE9iamVjdC5jcmVhdGUobnVsbCksXG4gICAgICBtZXRhZGF0YUtleXMgPSBPYmplY3Qua2V5cyhtZXRhZGF0YSB8fCB7fSlcblxuICAvLyBDbG9uaW5nIHRoZSBtZXRhZGF0YSB0byBwcmV2ZW50IHRoZSBvcmlnaW5hbFxuICAvLyBiZWluZyBtdXRhdGVkIGR1cmluZyBtYXRjaCBkYXRhIGNvbWJpbmF0aW9uLlxuICAvLyBNZXRhZGF0YSBpcyBrZXB0IGluIGFuIGFycmF5IHdpdGhpbiB0aGUgaW52ZXJ0ZWRcbiAgLy8gaW5kZXggc28gY2xvbmluZyB0aGUgZGF0YSBjYW4gYmUgZG9uZSB3aXRoXG4gIC8vIEFycmF5I3NsaWNlXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbWV0YWRhdGFLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGtleSA9IG1ldGFkYXRhS2V5c1tpXVxuICAgIGNsb25lZE1ldGFkYXRhW2tleV0gPSBtZXRhZGF0YVtrZXldLnNsaWNlKClcbiAgfVxuXG4gIHRoaXMubWV0YWRhdGEgPSBPYmplY3QuY3JlYXRlKG51bGwpXG5cbiAgaWYgKHRlcm0gIT09IHVuZGVmaW5lZCkge1xuICAgIHRoaXMubWV0YWRhdGFbdGVybV0gPSBPYmplY3QuY3JlYXRlKG51bGwpXG4gICAgdGhpcy5tZXRhZGF0YVt0ZXJtXVtmaWVsZF0gPSBjbG9uZWRNZXRhZGF0YVxuICB9XG59XG5cbi8qKlxuICogQW4gaW5zdGFuY2Ugb2YgbHVuci5NYXRjaERhdGEgd2lsbCBiZSBjcmVhdGVkIGZvciBldmVyeSB0ZXJtIHRoYXQgbWF0Y2hlcyBhXG4gKiBkb2N1bWVudC4gSG93ZXZlciBvbmx5IG9uZSBpbnN0YW5jZSBpcyByZXF1aXJlZCBpbiBhIGx1bnIuSW5kZXh+UmVzdWx0LiBUaGlzXG4gKiBtZXRob2QgY29tYmluZXMgbWV0YWRhdGEgZnJvbSBhbm90aGVyIGluc3RhbmNlIG9mIGx1bnIuTWF0Y2hEYXRhIHdpdGggdGhpc1xuICogb2JqZWN0cyBtZXRhZGF0YS5cbiAqXG4gKiBAcGFyYW0ge2x1bnIuTWF0Y2hEYXRhfSBvdGhlck1hdGNoRGF0YSAtIEFub3RoZXIgaW5zdGFuY2Ugb2YgbWF0Y2ggZGF0YSB0byBtZXJnZSB3aXRoIHRoaXMgb25lLlxuICogQHNlZSB7QGxpbmsgbHVuci5JbmRleH5SZXN1bHR9XG4gKi9cbmx1bnIuTWF0Y2hEYXRhLnByb3RvdHlwZS5jb21iaW5lID0gZnVuY3Rpb24gKG90aGVyTWF0Y2hEYXRhKSB7XG4gIHZhciB0ZXJtcyA9IE9iamVjdC5rZXlzKG90aGVyTWF0Y2hEYXRhLm1ldGFkYXRhKVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdGVybXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgdGVybSA9IHRlcm1zW2ldLFxuICAgICAgICBmaWVsZHMgPSBPYmplY3Qua2V5cyhvdGhlck1hdGNoRGF0YS5tZXRhZGF0YVt0ZXJtXSlcblxuICAgIGlmICh0aGlzLm1ldGFkYXRhW3Rlcm1dID09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5tZXRhZGF0YVt0ZXJtXSA9IE9iamVjdC5jcmVhdGUobnVsbClcbiAgICB9XG5cbiAgICBmb3IgKHZhciBqID0gMDsgaiA8IGZpZWxkcy5sZW5ndGg7IGorKykge1xuICAgICAgdmFyIGZpZWxkID0gZmllbGRzW2pdLFxuICAgICAgICAgIGtleXMgPSBPYmplY3Qua2V5cyhvdGhlck1hdGNoRGF0YS5tZXRhZGF0YVt0ZXJtXVtmaWVsZF0pXG5cbiAgICAgIGlmICh0aGlzLm1ldGFkYXRhW3Rlcm1dW2ZpZWxkXSA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5tZXRhZGF0YVt0ZXJtXVtmaWVsZF0gPSBPYmplY3QuY3JlYXRlKG51bGwpXG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwga2V5cy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIga2V5ID0ga2V5c1trXVxuXG4gICAgICAgIGlmICh0aGlzLm1ldGFkYXRhW3Rlcm1dW2ZpZWxkXVtrZXldID09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMubWV0YWRhdGFbdGVybV1bZmllbGRdW2tleV0gPSBvdGhlck1hdGNoRGF0YS5tZXRhZGF0YVt0ZXJtXVtmaWVsZF1ba2V5XVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMubWV0YWRhdGFbdGVybV1bZmllbGRdW2tleV0gPSB0aGlzLm1ldGFkYXRhW3Rlcm1dW2ZpZWxkXVtrZXldLmNvbmNhdChvdGhlck1hdGNoRGF0YS5tZXRhZGF0YVt0ZXJtXVtmaWVsZF1ba2V5XSlcbiAgICAgICAgfVxuXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQWRkIG1ldGFkYXRhIGZvciBhIHRlcm0vZmllbGQgcGFpciB0byB0aGlzIGluc3RhbmNlIG9mIG1hdGNoIGRhdGEuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHRlcm0gLSBUaGUgdGVybSB0aGlzIG1hdGNoIGRhdGEgaXMgYXNzb2NpYXRlZCB3aXRoXG4gKiBAcGFyYW0ge3N0cmluZ30gZmllbGQgLSBUaGUgZmllbGQgaW4gd2hpY2ggdGhlIHRlcm0gd2FzIGZvdW5kXG4gKiBAcGFyYW0ge29iamVjdH0gbWV0YWRhdGEgLSBUaGUgbWV0YWRhdGEgcmVjb3JkZWQgYWJvdXQgdGhpcyB0ZXJtIGluIHRoaXMgZmllbGRcbiAqL1xubHVuci5NYXRjaERhdGEucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uICh0ZXJtLCBmaWVsZCwgbWV0YWRhdGEpIHtcbiAgaWYgKCEodGVybSBpbiB0aGlzLm1ldGFkYXRhKSkge1xuICAgIHRoaXMubWV0YWRhdGFbdGVybV0gPSBPYmplY3QuY3JlYXRlKG51bGwpXG4gICAgdGhpcy5tZXRhZGF0YVt0ZXJtXVtmaWVsZF0gPSBtZXRhZGF0YVxuICAgIHJldHVyblxuICB9XG5cbiAgaWYgKCEoZmllbGQgaW4gdGhpcy5tZXRhZGF0YVt0ZXJtXSkpIHtcbiAgICB0aGlzLm1ldGFkYXRhW3Rlcm1dW2ZpZWxkXSA9IG1ldGFkYXRhXG4gICAgcmV0dXJuXG4gIH1cblxuICB2YXIgbWV0YWRhdGFLZXlzID0gT2JqZWN0LmtleXMobWV0YWRhdGEpXG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBtZXRhZGF0YUtleXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIga2V5ID0gbWV0YWRhdGFLZXlzW2ldXG5cbiAgICBpZiAoa2V5IGluIHRoaXMubWV0YWRhdGFbdGVybV1bZmllbGRdKSB7XG4gICAgICB0aGlzLm1ldGFkYXRhW3Rlcm1dW2ZpZWxkXVtrZXldID0gdGhpcy5tZXRhZGF0YVt0ZXJtXVtmaWVsZF1ba2V5XS5jb25jYXQobWV0YWRhdGFba2V5XSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5tZXRhZGF0YVt0ZXJtXVtmaWVsZF1ba2V5XSA9IG1ldGFkYXRhW2tleV1cbiAgICB9XG4gIH1cbn1cbi8qKlxuICogQSBsdW5yLlF1ZXJ5IHByb3ZpZGVzIGEgcHJvZ3JhbW1hdGljIHdheSBvZiBkZWZpbmluZyBxdWVyaWVzIHRvIGJlIHBlcmZvcm1lZFxuICogYWdhaW5zdCBhIHtAbGluayBsdW5yLkluZGV4fS5cbiAqXG4gKiBQcmVmZXIgY29uc3RydWN0aW5nIGEgbHVuci5RdWVyeSB1c2luZyB0aGUge0BsaW5rIGx1bnIuSW5kZXgjcXVlcnl9IG1ldGhvZFxuICogc28gdGhlIHF1ZXJ5IG9iamVjdCBpcyBwcmUtaW5pdGlhbGl6ZWQgd2l0aCB0aGUgcmlnaHQgaW5kZXggZmllbGRzLlxuICpcbiAqIEBjb25zdHJ1Y3RvclxuICogQHByb3BlcnR5IHtsdW5yLlF1ZXJ5fkNsYXVzZVtdfSBjbGF1c2VzIC0gQW4gYXJyYXkgb2YgcXVlcnkgY2xhdXNlcy5cbiAqIEBwcm9wZXJ0eSB7c3RyaW5nW119IGFsbEZpZWxkcyAtIEFuIGFycmF5IG9mIGFsbCBhdmFpbGFibGUgZmllbGRzIGluIGEgbHVuci5JbmRleC5cbiAqL1xubHVuci5RdWVyeSA9IGZ1bmN0aW9uIChhbGxGaWVsZHMpIHtcbiAgdGhpcy5jbGF1c2VzID0gW11cbiAgdGhpcy5hbGxGaWVsZHMgPSBhbGxGaWVsZHNcbn1cblxuLyoqXG4gKiBDb25zdGFudHMgZm9yIGluZGljYXRpbmcgd2hhdCBraW5kIG9mIGF1dG9tYXRpYyB3aWxkY2FyZCBpbnNlcnRpb24gd2lsbCBiZSB1c2VkIHdoZW4gY29uc3RydWN0aW5nIGEgcXVlcnkgY2xhdXNlLlxuICpcbiAqIFRoaXMgYWxsb3dzIHdpbGRjYXJkcyB0byBiZSBhZGRlZCB0byB0aGUgYmVnaW5uaW5nIGFuZCBlbmQgb2YgYSB0ZXJtIHdpdGhvdXQgaGF2aW5nIHRvIG1hbnVhbGx5IGRvIGFueSBzdHJpbmdcbiAqIGNvbmNhdGVuYXRpb24uXG4gKlxuICogVGhlIHdpbGRjYXJkIGNvbnN0YW50cyBjYW4gYmUgYml0d2lzZSBjb21iaW5lZCB0byBzZWxlY3QgYm90aCBsZWFkaW5nIGFuZCB0cmFpbGluZyB3aWxkY2FyZHMuXG4gKlxuICogQGNvbnN0YW50XG4gKiBAZGVmYXVsdFxuICogQHByb3BlcnR5IHtudW1iZXJ9IHdpbGRjYXJkLk5PTkUgLSBUaGUgdGVybSB3aWxsIGhhdmUgbm8gd2lsZGNhcmRzIGluc2VydGVkLCB0aGlzIGlzIHRoZSBkZWZhdWx0IGJlaGF2aW91clxuICogQHByb3BlcnR5IHtudW1iZXJ9IHdpbGRjYXJkLkxFQURJTkcgLSBQcmVwZW5kIHRoZSB0ZXJtIHdpdGggYSB3aWxkY2FyZCwgdW5sZXNzIGEgbGVhZGluZyB3aWxkY2FyZCBhbHJlYWR5IGV4aXN0c1xuICogQHByb3BlcnR5IHtudW1iZXJ9IHdpbGRjYXJkLlRSQUlMSU5HIC0gQXBwZW5kIGEgd2lsZGNhcmQgdG8gdGhlIHRlcm0sIHVubGVzcyBhIHRyYWlsaW5nIHdpbGRjYXJkIGFscmVhZHkgZXhpc3RzXG4gKiBAc2VlIGx1bnIuUXVlcnl+Q2xhdXNlXG4gKiBAc2VlIGx1bnIuUXVlcnkjY2xhdXNlXG4gKiBAc2VlIGx1bnIuUXVlcnkjdGVybVxuICogQGV4YW1wbGUgPGNhcHRpb24+cXVlcnkgdGVybSB3aXRoIHRyYWlsaW5nIHdpbGRjYXJkPC9jYXB0aW9uPlxuICogcXVlcnkudGVybSgnZm9vJywgeyB3aWxkY2FyZDogbHVuci5RdWVyeS53aWxkY2FyZC5UUkFJTElORyB9KVxuICogQGV4YW1wbGUgPGNhcHRpb24+cXVlcnkgdGVybSB3aXRoIGxlYWRpbmcgYW5kIHRyYWlsaW5nIHdpbGRjYXJkPC9jYXB0aW9uPlxuICogcXVlcnkudGVybSgnZm9vJywge1xuICogICB3aWxkY2FyZDogbHVuci5RdWVyeS53aWxkY2FyZC5MRUFESU5HIHwgbHVuci5RdWVyeS53aWxkY2FyZC5UUkFJTElOR1xuICogfSlcbiAqL1xuXG5sdW5yLlF1ZXJ5LndpbGRjYXJkID0gbmV3IFN0cmluZyAoXCIqXCIpXG5sdW5yLlF1ZXJ5LndpbGRjYXJkLk5PTkUgPSAwXG5sdW5yLlF1ZXJ5LndpbGRjYXJkLkxFQURJTkcgPSAxXG5sdW5yLlF1ZXJ5LndpbGRjYXJkLlRSQUlMSU5HID0gMlxuXG4vKipcbiAqIENvbnN0YW50cyBmb3IgaW5kaWNhdGluZyB3aGF0IGtpbmQgb2YgcHJlc2VuY2UgYSB0ZXJtIG11c3QgaGF2ZSBpbiBtYXRjaGluZyBkb2N1bWVudHMuXG4gKlxuICogQGNvbnN0YW50XG4gKiBAZW51bSB7bnVtYmVyfVxuICogQHNlZSBsdW5yLlF1ZXJ5fkNsYXVzZVxuICogQHNlZSBsdW5yLlF1ZXJ5I2NsYXVzZVxuICogQHNlZSBsdW5yLlF1ZXJ5I3Rlcm1cbiAqIEBleGFtcGxlIDxjYXB0aW9uPnF1ZXJ5IHRlcm0gd2l0aCByZXF1aXJlZCBwcmVzZW5jZTwvY2FwdGlvbj5cbiAqIHF1ZXJ5LnRlcm0oJ2ZvbycsIHsgcHJlc2VuY2U6IGx1bnIuUXVlcnkucHJlc2VuY2UuUkVRVUlSRUQgfSlcbiAqL1xubHVuci5RdWVyeS5wcmVzZW5jZSA9IHtcbiAgLyoqXG4gICAqIFRlcm0ncyBwcmVzZW5jZSBpbiBhIGRvY3VtZW50IGlzIG9wdGlvbmFsLCB0aGlzIGlzIHRoZSBkZWZhdWx0IHZhbHVlLlxuICAgKi9cbiAgT1BUSU9OQUw6IDEsXG5cbiAgLyoqXG4gICAqIFRlcm0ncyBwcmVzZW5jZSBpbiBhIGRvY3VtZW50IGlzIHJlcXVpcmVkLCBkb2N1bWVudHMgdGhhdCBkbyBub3QgY29udGFpblxuICAgKiB0aGlzIHRlcm0gd2lsbCBub3QgYmUgcmV0dXJuZWQuXG4gICAqL1xuICBSRVFVSVJFRDogMixcblxuICAvKipcbiAgICogVGVybSdzIHByZXNlbmNlIGluIGEgZG9jdW1lbnQgaXMgcHJvaGliaXRlZCwgZG9jdW1lbnRzIHRoYXQgZG8gY29udGFpblxuICAgKiB0aGlzIHRlcm0gd2lsbCBub3QgYmUgcmV0dXJuZWQuXG4gICAqL1xuICBQUk9ISUJJVEVEOiAzXG59XG5cbi8qKlxuICogQSBzaW5nbGUgY2xhdXNlIGluIGEge0BsaW5rIGx1bnIuUXVlcnl9IGNvbnRhaW5zIGEgdGVybSBhbmQgZGV0YWlscyBvbiBob3cgdG9cbiAqIG1hdGNoIHRoYXQgdGVybSBhZ2FpbnN0IGEge0BsaW5rIGx1bnIuSW5kZXh9LlxuICpcbiAqIEB0eXBlZGVmIHtPYmplY3R9IGx1bnIuUXVlcnl+Q2xhdXNlXG4gKiBAcHJvcGVydHkge3N0cmluZ1tdfSBmaWVsZHMgLSBUaGUgZmllbGRzIGluIGFuIGluZGV4IHRoaXMgY2xhdXNlIHNob3VsZCBiZSBtYXRjaGVkIGFnYWluc3QuXG4gKiBAcHJvcGVydHkge251bWJlcn0gW2Jvb3N0PTFdIC0gQW55IGJvb3N0IHRoYXQgc2hvdWxkIGJlIGFwcGxpZWQgd2hlbiBtYXRjaGluZyB0aGlzIGNsYXVzZS5cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBbZWRpdERpc3RhbmNlXSAtIFdoZXRoZXIgdGhlIHRlcm0gc2hvdWxkIGhhdmUgZnV6enkgbWF0Y2hpbmcgYXBwbGllZCwgYW5kIGhvdyBmdXp6eSB0aGUgbWF0Y2ggc2hvdWxkIGJlLlxuICogQHByb3BlcnR5IHtib29sZWFufSBbdXNlUGlwZWxpbmVdIC0gV2hldGhlciB0aGUgdGVybSBzaG91bGQgYmUgcGFzc2VkIHRocm91Z2ggdGhlIHNlYXJjaCBwaXBlbGluZS5cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBbd2lsZGNhcmQ9bHVuci5RdWVyeS53aWxkY2FyZC5OT05FXSAtIFdoZXRoZXIgdGhlIHRlcm0gc2hvdWxkIGhhdmUgd2lsZGNhcmRzIGFwcGVuZGVkIG9yIHByZXBlbmRlZC5cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBbcHJlc2VuY2U9bHVuci5RdWVyeS5wcmVzZW5jZS5PUFRJT05BTF0gLSBUaGUgdGVybXMgcHJlc2VuY2UgaW4gYW55IG1hdGNoaW5nIGRvY3VtZW50cy5cbiAqL1xuXG4vKipcbiAqIEFkZHMgYSB7QGxpbmsgbHVuci5RdWVyeX5DbGF1c2V9IHRvIHRoaXMgcXVlcnkuXG4gKlxuICogVW5sZXNzIHRoZSBjbGF1c2UgY29udGFpbnMgdGhlIGZpZWxkcyB0byBiZSBtYXRjaGVkIGFsbCBmaWVsZHMgd2lsbCBiZSBtYXRjaGVkLiBJbiBhZGRpdGlvblxuICogYSBkZWZhdWx0IGJvb3N0IG9mIDEgaXMgYXBwbGllZCB0byB0aGUgY2xhdXNlLlxuICpcbiAqIEBwYXJhbSB7bHVuci5RdWVyeX5DbGF1c2V9IGNsYXVzZSAtIFRoZSBjbGF1c2UgdG8gYWRkIHRvIHRoaXMgcXVlcnkuXG4gKiBAc2VlIGx1bnIuUXVlcnl+Q2xhdXNlXG4gKiBAcmV0dXJucyB7bHVuci5RdWVyeX1cbiAqL1xubHVuci5RdWVyeS5wcm90b3R5cGUuY2xhdXNlID0gZnVuY3Rpb24gKGNsYXVzZSkge1xuICBpZiAoISgnZmllbGRzJyBpbiBjbGF1c2UpKSB7XG4gICAgY2xhdXNlLmZpZWxkcyA9IHRoaXMuYWxsRmllbGRzXG4gIH1cblxuICBpZiAoISgnYm9vc3QnIGluIGNsYXVzZSkpIHtcbiAgICBjbGF1c2UuYm9vc3QgPSAxXG4gIH1cblxuICBpZiAoISgndXNlUGlwZWxpbmUnIGluIGNsYXVzZSkpIHtcbiAgICBjbGF1c2UudXNlUGlwZWxpbmUgPSB0cnVlXG4gIH1cblxuICBpZiAoISgnd2lsZGNhcmQnIGluIGNsYXVzZSkpIHtcbiAgICBjbGF1c2Uud2lsZGNhcmQgPSBsdW5yLlF1ZXJ5LndpbGRjYXJkLk5PTkVcbiAgfVxuXG4gIGlmICgoY2xhdXNlLndpbGRjYXJkICYgbHVuci5RdWVyeS53aWxkY2FyZC5MRUFESU5HKSAmJiAoY2xhdXNlLnRlcm0uY2hhckF0KDApICE9IGx1bnIuUXVlcnkud2lsZGNhcmQpKSB7XG4gICAgY2xhdXNlLnRlcm0gPSBcIipcIiArIGNsYXVzZS50ZXJtXG4gIH1cblxuICBpZiAoKGNsYXVzZS53aWxkY2FyZCAmIGx1bnIuUXVlcnkud2lsZGNhcmQuVFJBSUxJTkcpICYmIChjbGF1c2UudGVybS5zbGljZSgtMSkgIT0gbHVuci5RdWVyeS53aWxkY2FyZCkpIHtcbiAgICBjbGF1c2UudGVybSA9IFwiXCIgKyBjbGF1c2UudGVybSArIFwiKlwiXG4gIH1cblxuICBpZiAoISgncHJlc2VuY2UnIGluIGNsYXVzZSkpIHtcbiAgICBjbGF1c2UucHJlc2VuY2UgPSBsdW5yLlF1ZXJ5LnByZXNlbmNlLk9QVElPTkFMXG4gIH1cblxuICB0aGlzLmNsYXVzZXMucHVzaChjbGF1c2UpXG5cbiAgcmV0dXJuIHRoaXNcbn1cblxuLyoqXG4gKiBBIG5lZ2F0ZWQgcXVlcnkgaXMgb25lIGluIHdoaWNoIGV2ZXJ5IGNsYXVzZSBoYXMgYSBwcmVzZW5jZSBvZlxuICogcHJvaGliaXRlZC4gVGhlc2UgcXVlcmllcyByZXF1aXJlIHNvbWUgc3BlY2lhbCBwcm9jZXNzaW5nIHRvIHJldHVyblxuICogdGhlIGV4cGVjdGVkIHJlc3VsdHMuXG4gKlxuICogQHJldHVybnMgYm9vbGVhblxuICovXG5sdW5yLlF1ZXJ5LnByb3RvdHlwZS5pc05lZ2F0ZWQgPSBmdW5jdGlvbiAoKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5jbGF1c2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHRoaXMuY2xhdXNlc1tpXS5wcmVzZW5jZSAhPSBsdW5yLlF1ZXJ5LnByZXNlbmNlLlBST0hJQklURUQpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlXG59XG5cbi8qKlxuICogQWRkcyBhIHRlcm0gdG8gdGhlIGN1cnJlbnQgcXVlcnksIHVuZGVyIHRoZSBjb3ZlcnMgdGhpcyB3aWxsIGNyZWF0ZSBhIHtAbGluayBsdW5yLlF1ZXJ5fkNsYXVzZX1cbiAqIHRvIHRoZSBsaXN0IG9mIGNsYXVzZXMgdGhhdCBtYWtlIHVwIHRoaXMgcXVlcnkuXG4gKlxuICogVGhlIHRlcm0gaXMgdXNlZCBhcyBpcywgaS5lLiBubyB0b2tlbml6YXRpb24gd2lsbCBiZSBwZXJmb3JtZWQgYnkgdGhpcyBtZXRob2QuIEluc3RlYWQgY29udmVyc2lvblxuICogdG8gYSB0b2tlbiBvciB0b2tlbi1saWtlIHN0cmluZyBzaG91bGQgYmUgZG9uZSBiZWZvcmUgY2FsbGluZyB0aGlzIG1ldGhvZC5cbiAqXG4gKiBUaGUgdGVybSB3aWxsIGJlIGNvbnZlcnRlZCB0byBhIHN0cmluZyBieSBjYWxsaW5nIGB0b1N0cmluZ2AuIE11bHRpcGxlIHRlcm1zIGNhbiBiZSBwYXNzZWQgYXMgYW5cbiAqIGFycmF5LCBlYWNoIHRlcm0gaW4gdGhlIGFycmF5IHdpbGwgc2hhcmUgdGhlIHNhbWUgb3B0aW9ucy5cbiAqXG4gKiBAcGFyYW0ge29iamVjdHxvYmplY3RbXX0gdGVybSAtIFRoZSB0ZXJtKHMpIHRvIGFkZCB0byB0aGUgcXVlcnkuXG4gKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdIC0gQW55IGFkZGl0aW9uYWwgcHJvcGVydGllcyB0byBhZGQgdG8gdGhlIHF1ZXJ5IGNsYXVzZS5cbiAqIEByZXR1cm5zIHtsdW5yLlF1ZXJ5fVxuICogQHNlZSBsdW5yLlF1ZXJ5I2NsYXVzZVxuICogQHNlZSBsdW5yLlF1ZXJ5fkNsYXVzZVxuICogQGV4YW1wbGUgPGNhcHRpb24+YWRkaW5nIGEgc2luZ2xlIHRlcm0gdG8gYSBxdWVyeTwvY2FwdGlvbj5cbiAqIHF1ZXJ5LnRlcm0oXCJmb29cIilcbiAqIEBleGFtcGxlIDxjYXB0aW9uPmFkZGluZyBhIHNpbmdsZSB0ZXJtIHRvIGEgcXVlcnkgYW5kIHNwZWNpZnlpbmcgc2VhcmNoIGZpZWxkcywgdGVybSBib29zdCBhbmQgYXV0b21hdGljIHRyYWlsaW5nIHdpbGRjYXJkPC9jYXB0aW9uPlxuICogcXVlcnkudGVybShcImZvb1wiLCB7XG4gKiAgIGZpZWxkczogW1widGl0bGVcIl0sXG4gKiAgIGJvb3N0OiAxMCxcbiAqICAgd2lsZGNhcmQ6IGx1bnIuUXVlcnkud2lsZGNhcmQuVFJBSUxJTkdcbiAqIH0pXG4gKiBAZXhhbXBsZSA8Y2FwdGlvbj51c2luZyBsdW5yLnRva2VuaXplciB0byBjb252ZXJ0IGEgc3RyaW5nIHRvIHRva2VucyBiZWZvcmUgdXNpbmcgdGhlbSBhcyB0ZXJtczwvY2FwdGlvbj5cbiAqIHF1ZXJ5LnRlcm0obHVuci50b2tlbml6ZXIoXCJmb28gYmFyXCIpKVxuICovXG5sdW5yLlF1ZXJ5LnByb3RvdHlwZS50ZXJtID0gZnVuY3Rpb24gKHRlcm0sIG9wdGlvbnMpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkodGVybSkpIHtcbiAgICB0ZXJtLmZvckVhY2goZnVuY3Rpb24gKHQpIHsgdGhpcy50ZXJtKHQsIGx1bnIudXRpbHMuY2xvbmUob3B0aW9ucykpIH0sIHRoaXMpXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIHZhciBjbGF1c2UgPSBvcHRpb25zIHx8IHt9XG4gIGNsYXVzZS50ZXJtID0gdGVybS50b1N0cmluZygpXG5cbiAgdGhpcy5jbGF1c2UoY2xhdXNlKVxuXG4gIHJldHVybiB0aGlzXG59XG5sdW5yLlF1ZXJ5UGFyc2VFcnJvciA9IGZ1bmN0aW9uIChtZXNzYWdlLCBzdGFydCwgZW5kKSB7XG4gIHRoaXMubmFtZSA9IFwiUXVlcnlQYXJzZUVycm9yXCJcbiAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZVxuICB0aGlzLnN0YXJ0ID0gc3RhcnRcbiAgdGhpcy5lbmQgPSBlbmRcbn1cblxubHVuci5RdWVyeVBhcnNlRXJyb3IucHJvdG90eXBlID0gbmV3IEVycm9yXG5sdW5yLlF1ZXJ5TGV4ZXIgPSBmdW5jdGlvbiAoc3RyKSB7XG4gIHRoaXMubGV4ZW1lcyA9IFtdXG4gIHRoaXMuc3RyID0gc3RyXG4gIHRoaXMubGVuZ3RoID0gc3RyLmxlbmd0aFxuICB0aGlzLnBvcyA9IDBcbiAgdGhpcy5zdGFydCA9IDBcbiAgdGhpcy5lc2NhcGVDaGFyUG9zaXRpb25zID0gW11cbn1cblxubHVuci5RdWVyeUxleGVyLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBzdGF0ZSA9IGx1bnIuUXVlcnlMZXhlci5sZXhUZXh0XG5cbiAgd2hpbGUgKHN0YXRlKSB7XG4gICAgc3RhdGUgPSBzdGF0ZSh0aGlzKVxuICB9XG59XG5cbmx1bnIuUXVlcnlMZXhlci5wcm90b3R5cGUuc2xpY2VTdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBzdWJTbGljZXMgPSBbXSxcbiAgICAgIHNsaWNlU3RhcnQgPSB0aGlzLnN0YXJ0LFxuICAgICAgc2xpY2VFbmQgPSB0aGlzLnBvc1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5lc2NhcGVDaGFyUG9zaXRpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgc2xpY2VFbmQgPSB0aGlzLmVzY2FwZUNoYXJQb3NpdGlvbnNbaV1cbiAgICBzdWJTbGljZXMucHVzaCh0aGlzLnN0ci5zbGljZShzbGljZVN0YXJ0LCBzbGljZUVuZCkpXG4gICAgc2xpY2VTdGFydCA9IHNsaWNlRW5kICsgMVxuICB9XG5cbiAgc3ViU2xpY2VzLnB1c2godGhpcy5zdHIuc2xpY2Uoc2xpY2VTdGFydCwgdGhpcy5wb3MpKVxuICB0aGlzLmVzY2FwZUNoYXJQb3NpdGlvbnMubGVuZ3RoID0gMFxuXG4gIHJldHVybiBzdWJTbGljZXMuam9pbignJylcbn1cblxubHVuci5RdWVyeUxleGVyLnByb3RvdHlwZS5lbWl0ID0gZnVuY3Rpb24gKHR5cGUpIHtcbiAgdGhpcy5sZXhlbWVzLnB1c2goe1xuICAgIHR5cGU6IHR5cGUsXG4gICAgc3RyOiB0aGlzLnNsaWNlU3RyaW5nKCksXG4gICAgc3RhcnQ6IHRoaXMuc3RhcnQsXG4gICAgZW5kOiB0aGlzLnBvc1xuICB9KVxuXG4gIHRoaXMuc3RhcnQgPSB0aGlzLnBvc1xufVxuXG5sdW5yLlF1ZXJ5TGV4ZXIucHJvdG90eXBlLmVzY2FwZUNoYXJhY3RlciA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5lc2NhcGVDaGFyUG9zaXRpb25zLnB1c2godGhpcy5wb3MgLSAxKVxuICB0aGlzLnBvcyArPSAxXG59XG5cbmx1bnIuUXVlcnlMZXhlci5wcm90b3R5cGUubmV4dCA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHRoaXMucG9zID49IHRoaXMubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGx1bnIuUXVlcnlMZXhlci5FT1NcbiAgfVxuXG4gIHZhciBjaGFyID0gdGhpcy5zdHIuY2hhckF0KHRoaXMucG9zKVxuICB0aGlzLnBvcyArPSAxXG4gIHJldHVybiBjaGFyXG59XG5cbmx1bnIuUXVlcnlMZXhlci5wcm90b3R5cGUud2lkdGggPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLnBvcyAtIHRoaXMuc3RhcnRcbn1cblxubHVuci5RdWVyeUxleGVyLnByb3RvdHlwZS5pZ25vcmUgPSBmdW5jdGlvbiAoKSB7XG4gIGlmICh0aGlzLnN0YXJ0ID09IHRoaXMucG9zKSB7XG4gICAgdGhpcy5wb3MgKz0gMVxuICB9XG5cbiAgdGhpcy5zdGFydCA9IHRoaXMucG9zXG59XG5cbmx1bnIuUXVlcnlMZXhlci5wcm90b3R5cGUuYmFja3VwID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLnBvcyAtPSAxXG59XG5cbmx1bnIuUXVlcnlMZXhlci5wcm90b3R5cGUuYWNjZXB0RGlnaXRSdW4gPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBjaGFyLCBjaGFyQ29kZVxuXG4gIGRvIHtcbiAgICBjaGFyID0gdGhpcy5uZXh0KClcbiAgICBjaGFyQ29kZSA9IGNoYXIuY2hhckNvZGVBdCgwKVxuICB9IHdoaWxlIChjaGFyQ29kZSA+IDQ3ICYmIGNoYXJDb2RlIDwgNTgpXG5cbiAgaWYgKGNoYXIgIT0gbHVuci5RdWVyeUxleGVyLkVPUykge1xuICAgIHRoaXMuYmFja3VwKClcbiAgfVxufVxuXG5sdW5yLlF1ZXJ5TGV4ZXIucHJvdG90eXBlLm1vcmUgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLnBvcyA8IHRoaXMubGVuZ3RoXG59XG5cbmx1bnIuUXVlcnlMZXhlci5FT1MgPSAnRU9TJ1xubHVuci5RdWVyeUxleGVyLkZJRUxEID0gJ0ZJRUxEJ1xubHVuci5RdWVyeUxleGVyLlRFUk0gPSAnVEVSTSdcbmx1bnIuUXVlcnlMZXhlci5FRElUX0RJU1RBTkNFID0gJ0VESVRfRElTVEFOQ0UnXG5sdW5yLlF1ZXJ5TGV4ZXIuQk9PU1QgPSAnQk9PU1QnXG5sdW5yLlF1ZXJ5TGV4ZXIuUFJFU0VOQ0UgPSAnUFJFU0VOQ0UnXG5cbmx1bnIuUXVlcnlMZXhlci5sZXhGaWVsZCA9IGZ1bmN0aW9uIChsZXhlcikge1xuICBsZXhlci5iYWNrdXAoKVxuICBsZXhlci5lbWl0KGx1bnIuUXVlcnlMZXhlci5GSUVMRClcbiAgbGV4ZXIuaWdub3JlKClcbiAgcmV0dXJuIGx1bnIuUXVlcnlMZXhlci5sZXhUZXh0XG59XG5cbmx1bnIuUXVlcnlMZXhlci5sZXhUZXJtID0gZnVuY3Rpb24gKGxleGVyKSB7XG4gIGlmIChsZXhlci53aWR0aCgpID4gMSkge1xuICAgIGxleGVyLmJhY2t1cCgpXG4gICAgbGV4ZXIuZW1pdChsdW5yLlF1ZXJ5TGV4ZXIuVEVSTSlcbiAgfVxuXG4gIGxleGVyLmlnbm9yZSgpXG5cbiAgaWYgKGxleGVyLm1vcmUoKSkge1xuICAgIHJldHVybiBsdW5yLlF1ZXJ5TGV4ZXIubGV4VGV4dFxuICB9XG59XG5cbmx1bnIuUXVlcnlMZXhlci5sZXhFZGl0RGlzdGFuY2UgPSBmdW5jdGlvbiAobGV4ZXIpIHtcbiAgbGV4ZXIuaWdub3JlKClcbiAgbGV4ZXIuYWNjZXB0RGlnaXRSdW4oKVxuICBsZXhlci5lbWl0KGx1bnIuUXVlcnlMZXhlci5FRElUX0RJU1RBTkNFKVxuICByZXR1cm4gbHVuci5RdWVyeUxleGVyLmxleFRleHRcbn1cblxubHVuci5RdWVyeUxleGVyLmxleEJvb3N0ID0gZnVuY3Rpb24gKGxleGVyKSB7XG4gIGxleGVyLmlnbm9yZSgpXG4gIGxleGVyLmFjY2VwdERpZ2l0UnVuKClcbiAgbGV4ZXIuZW1pdChsdW5yLlF1ZXJ5TGV4ZXIuQk9PU1QpXG4gIHJldHVybiBsdW5yLlF1ZXJ5TGV4ZXIubGV4VGV4dFxufVxuXG5sdW5yLlF1ZXJ5TGV4ZXIubGV4RU9TID0gZnVuY3Rpb24gKGxleGVyKSB7XG4gIGlmIChsZXhlci53aWR0aCgpID4gMCkge1xuICAgIGxleGVyLmVtaXQobHVuci5RdWVyeUxleGVyLlRFUk0pXG4gIH1cbn1cblxuLy8gVGhpcyBtYXRjaGVzIHRoZSBzZXBhcmF0b3IgdXNlZCB3aGVuIHRva2VuaXNpbmcgZmllbGRzXG4vLyB3aXRoaW4gYSBkb2N1bWVudC4gVGhlc2Ugc2hvdWxkIG1hdGNoIG90aGVyd2lzZSBpdCBpc1xuLy8gbm90IHBvc3NpYmxlIHRvIHNlYXJjaCBmb3Igc29tZSB0b2tlbnMgd2l0aGluIGEgZG9jdW1lbnQuXG4vL1xuLy8gSXQgaXMgcG9zc2libGUgZm9yIHRoZSB1c2VyIHRvIGNoYW5nZSB0aGUgc2VwYXJhdG9yIG9uIHRoZVxuLy8gdG9rZW5pemVyIHNvIGl0IF9taWdodF8gY2xhc2ggd2l0aCBhbnkgb3RoZXIgb2YgdGhlIHNwZWNpYWxcbi8vIGNoYXJhY3RlcnMgYWxyZWFkeSB1c2VkIHdpdGhpbiB0aGUgc2VhcmNoIHN0cmluZywgZS5nLiA6LlxuLy9cbi8vIFRoaXMgbWVhbnMgdGhhdCBpdCBpcyBwb3NzaWJsZSB0byBjaGFuZ2UgdGhlIHNlcGFyYXRvciBpblxuLy8gc3VjaCBhIHdheSB0aGF0IG1ha2VzIHNvbWUgd29yZHMgdW5zZWFyY2hhYmxlIHVzaW5nIGEgc2VhcmNoXG4vLyBzdHJpbmcuXG5sdW5yLlF1ZXJ5TGV4ZXIudGVybVNlcGFyYXRvciA9IGx1bnIudG9rZW5pemVyLnNlcGFyYXRvclxuXG5sdW5yLlF1ZXJ5TGV4ZXIubGV4VGV4dCA9IGZ1bmN0aW9uIChsZXhlcikge1xuICB3aGlsZSAodHJ1ZSkge1xuICAgIHZhciBjaGFyID0gbGV4ZXIubmV4dCgpXG5cbiAgICBpZiAoY2hhciA9PSBsdW5yLlF1ZXJ5TGV4ZXIuRU9TKSB7XG4gICAgICByZXR1cm4gbHVuci5RdWVyeUxleGVyLmxleEVPU1xuICAgIH1cblxuICAgIC8vIEVzY2FwZSBjaGFyYWN0ZXIgaXMgJ1xcJ1xuICAgIGlmIChjaGFyLmNoYXJDb2RlQXQoMCkgPT0gOTIpIHtcbiAgICAgIGxleGVyLmVzY2FwZUNoYXJhY3RlcigpXG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIGlmIChjaGFyID09IFwiOlwiKSB7XG4gICAgICByZXR1cm4gbHVuci5RdWVyeUxleGVyLmxleEZpZWxkXG4gICAgfVxuXG4gICAgaWYgKGNoYXIgPT0gXCJ+XCIpIHtcbiAgICAgIGxleGVyLmJhY2t1cCgpXG4gICAgICBpZiAobGV4ZXIud2lkdGgoKSA+IDApIHtcbiAgICAgICAgbGV4ZXIuZW1pdChsdW5yLlF1ZXJ5TGV4ZXIuVEVSTSlcbiAgICAgIH1cbiAgICAgIHJldHVybiBsdW5yLlF1ZXJ5TGV4ZXIubGV4RWRpdERpc3RhbmNlXG4gICAgfVxuXG4gICAgaWYgKGNoYXIgPT0gXCJeXCIpIHtcbiAgICAgIGxleGVyLmJhY2t1cCgpXG4gICAgICBpZiAobGV4ZXIud2lkdGgoKSA+IDApIHtcbiAgICAgICAgbGV4ZXIuZW1pdChsdW5yLlF1ZXJ5TGV4ZXIuVEVSTSlcbiAgICAgIH1cbiAgICAgIHJldHVybiBsdW5yLlF1ZXJ5TGV4ZXIubGV4Qm9vc3RcbiAgICB9XG5cbiAgICAvLyBcIitcIiBpbmRpY2F0ZXMgdGVybSBwcmVzZW5jZSBpcyByZXF1aXJlZFxuICAgIC8vIGNoZWNraW5nIGZvciBsZW5ndGggdG8gZW5zdXJlIHRoYXQgb25seVxuICAgIC8vIGxlYWRpbmcgXCIrXCIgYXJlIGNvbnNpZGVyZWRcbiAgICBpZiAoY2hhciA9PSBcIitcIiAmJiBsZXhlci53aWR0aCgpID09PSAxKSB7XG4gICAgICBsZXhlci5lbWl0KGx1bnIuUXVlcnlMZXhlci5QUkVTRU5DRSlcbiAgICAgIHJldHVybiBsdW5yLlF1ZXJ5TGV4ZXIubGV4VGV4dFxuICAgIH1cblxuICAgIC8vIFwiLVwiIGluZGljYXRlcyB0ZXJtIHByZXNlbmNlIGlzIHByb2hpYml0ZWRcbiAgICAvLyBjaGVja2luZyBmb3IgbGVuZ3RoIHRvIGVuc3VyZSB0aGF0IG9ubHlcbiAgICAvLyBsZWFkaW5nIFwiLVwiIGFyZSBjb25zaWRlcmVkXG4gICAgaWYgKGNoYXIgPT0gXCItXCIgJiYgbGV4ZXIud2lkdGgoKSA9PT0gMSkge1xuICAgICAgbGV4ZXIuZW1pdChsdW5yLlF1ZXJ5TGV4ZXIuUFJFU0VOQ0UpXG4gICAgICByZXR1cm4gbHVuci5RdWVyeUxleGVyLmxleFRleHRcbiAgICB9XG5cbiAgICBpZiAoY2hhci5tYXRjaChsdW5yLlF1ZXJ5TGV4ZXIudGVybVNlcGFyYXRvcikpIHtcbiAgICAgIHJldHVybiBsdW5yLlF1ZXJ5TGV4ZXIubGV4VGVybVxuICAgIH1cbiAgfVxufVxuXG5sdW5yLlF1ZXJ5UGFyc2VyID0gZnVuY3Rpb24gKHN0ciwgcXVlcnkpIHtcbiAgdGhpcy5sZXhlciA9IG5ldyBsdW5yLlF1ZXJ5TGV4ZXIgKHN0cilcbiAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gIHRoaXMuY3VycmVudENsYXVzZSA9IHt9XG4gIHRoaXMubGV4ZW1lSWR4ID0gMFxufVxuXG5sdW5yLlF1ZXJ5UGFyc2VyLnByb3RvdHlwZS5wYXJzZSA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5sZXhlci5ydW4oKVxuICB0aGlzLmxleGVtZXMgPSB0aGlzLmxleGVyLmxleGVtZXNcblxuICB2YXIgc3RhdGUgPSBsdW5yLlF1ZXJ5UGFyc2VyLnBhcnNlQ2xhdXNlXG5cbiAgd2hpbGUgKHN0YXRlKSB7XG4gICAgc3RhdGUgPSBzdGF0ZSh0aGlzKVxuICB9XG5cbiAgcmV0dXJuIHRoaXMucXVlcnlcbn1cblxubHVuci5RdWVyeVBhcnNlci5wcm90b3R5cGUucGVla0xleGVtZSA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMubGV4ZW1lc1t0aGlzLmxleGVtZUlkeF1cbn1cblxubHVuci5RdWVyeVBhcnNlci5wcm90b3R5cGUuY29uc3VtZUxleGVtZSA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGxleGVtZSA9IHRoaXMucGVla0xleGVtZSgpXG4gIHRoaXMubGV4ZW1lSWR4ICs9IDFcbiAgcmV0dXJuIGxleGVtZVxufVxuXG5sdW5yLlF1ZXJ5UGFyc2VyLnByb3RvdHlwZS5uZXh0Q2xhdXNlID0gZnVuY3Rpb24gKCkge1xuICB2YXIgY29tcGxldGVkQ2xhdXNlID0gdGhpcy5jdXJyZW50Q2xhdXNlXG4gIHRoaXMucXVlcnkuY2xhdXNlKGNvbXBsZXRlZENsYXVzZSlcbiAgdGhpcy5jdXJyZW50Q2xhdXNlID0ge31cbn1cblxubHVuci5RdWVyeVBhcnNlci5wYXJzZUNsYXVzZSA9IGZ1bmN0aW9uIChwYXJzZXIpIHtcbiAgdmFyIGxleGVtZSA9IHBhcnNlci5wZWVrTGV4ZW1lKClcblxuICBpZiAobGV4ZW1lID09IHVuZGVmaW5lZCkge1xuICAgIHJldHVyblxuICB9XG5cbiAgc3dpdGNoIChsZXhlbWUudHlwZSkge1xuICAgIGNhc2UgbHVuci5RdWVyeUxleGVyLlBSRVNFTkNFOlxuICAgICAgcmV0dXJuIGx1bnIuUXVlcnlQYXJzZXIucGFyc2VQcmVzZW5jZVxuICAgIGNhc2UgbHVuci5RdWVyeUxleGVyLkZJRUxEOlxuICAgICAgcmV0dXJuIGx1bnIuUXVlcnlQYXJzZXIucGFyc2VGaWVsZFxuICAgIGNhc2UgbHVuci5RdWVyeUxleGVyLlRFUk06XG4gICAgICByZXR1cm4gbHVuci5RdWVyeVBhcnNlci5wYXJzZVRlcm1cbiAgICBkZWZhdWx0OlxuICAgICAgdmFyIGVycm9yTWVzc2FnZSA9IFwiZXhwZWN0ZWQgZWl0aGVyIGEgZmllbGQgb3IgYSB0ZXJtLCBmb3VuZCBcIiArIGxleGVtZS50eXBlXG5cbiAgICAgIGlmIChsZXhlbWUuc3RyLmxlbmd0aCA+PSAxKSB7XG4gICAgICAgIGVycm9yTWVzc2FnZSArPSBcIiB3aXRoIHZhbHVlICdcIiArIGxleGVtZS5zdHIgKyBcIidcIlxuICAgICAgfVxuXG4gICAgICB0aHJvdyBuZXcgbHVuci5RdWVyeVBhcnNlRXJyb3IgKGVycm9yTWVzc2FnZSwgbGV4ZW1lLnN0YXJ0LCBsZXhlbWUuZW5kKVxuICB9XG59XG5cbmx1bnIuUXVlcnlQYXJzZXIucGFyc2VQcmVzZW5jZSA9IGZ1bmN0aW9uIChwYXJzZXIpIHtcbiAgdmFyIGxleGVtZSA9IHBhcnNlci5jb25zdW1lTGV4ZW1lKClcblxuICBpZiAobGV4ZW1lID09IHVuZGVmaW5lZCkge1xuICAgIHJldHVyblxuICB9XG5cbiAgc3dpdGNoIChsZXhlbWUuc3RyKSB7XG4gICAgY2FzZSBcIi1cIjpcbiAgICAgIHBhcnNlci5jdXJyZW50Q2xhdXNlLnByZXNlbmNlID0gbHVuci5RdWVyeS5wcmVzZW5jZS5QUk9ISUJJVEVEXG4gICAgICBicmVha1xuICAgIGNhc2UgXCIrXCI6XG4gICAgICBwYXJzZXIuY3VycmVudENsYXVzZS5wcmVzZW5jZSA9IGx1bnIuUXVlcnkucHJlc2VuY2UuUkVRVUlSRURcbiAgICAgIGJyZWFrXG4gICAgZGVmYXVsdDpcbiAgICAgIHZhciBlcnJvck1lc3NhZ2UgPSBcInVucmVjb2duaXNlZCBwcmVzZW5jZSBvcGVyYXRvcidcIiArIGxleGVtZS5zdHIgKyBcIidcIlxuICAgICAgdGhyb3cgbmV3IGx1bnIuUXVlcnlQYXJzZUVycm9yIChlcnJvck1lc3NhZ2UsIGxleGVtZS5zdGFydCwgbGV4ZW1lLmVuZClcbiAgfVxuXG4gIHZhciBuZXh0TGV4ZW1lID0gcGFyc2VyLnBlZWtMZXhlbWUoKVxuXG4gIGlmIChuZXh0TGV4ZW1lID09IHVuZGVmaW5lZCkge1xuICAgIHZhciBlcnJvck1lc3NhZ2UgPSBcImV4cGVjdGluZyB0ZXJtIG9yIGZpZWxkLCBmb3VuZCBub3RoaW5nXCJcbiAgICB0aHJvdyBuZXcgbHVuci5RdWVyeVBhcnNlRXJyb3IgKGVycm9yTWVzc2FnZSwgbGV4ZW1lLnN0YXJ0LCBsZXhlbWUuZW5kKVxuICB9XG5cbiAgc3dpdGNoIChuZXh0TGV4ZW1lLnR5cGUpIHtcbiAgICBjYXNlIGx1bnIuUXVlcnlMZXhlci5GSUVMRDpcbiAgICAgIHJldHVybiBsdW5yLlF1ZXJ5UGFyc2VyLnBhcnNlRmllbGRcbiAgICBjYXNlIGx1bnIuUXVlcnlMZXhlci5URVJNOlxuICAgICAgcmV0dXJuIGx1bnIuUXVlcnlQYXJzZXIucGFyc2VUZXJtXG4gICAgZGVmYXVsdDpcbiAgICAgIHZhciBlcnJvck1lc3NhZ2UgPSBcImV4cGVjdGluZyB0ZXJtIG9yIGZpZWxkLCBmb3VuZCAnXCIgKyBuZXh0TGV4ZW1lLnR5cGUgKyBcIidcIlxuICAgICAgdGhyb3cgbmV3IGx1bnIuUXVlcnlQYXJzZUVycm9yIChlcnJvck1lc3NhZ2UsIG5leHRMZXhlbWUuc3RhcnQsIG5leHRMZXhlbWUuZW5kKVxuICB9XG59XG5cbmx1bnIuUXVlcnlQYXJzZXIucGFyc2VGaWVsZCA9IGZ1bmN0aW9uIChwYXJzZXIpIHtcbiAgdmFyIGxleGVtZSA9IHBhcnNlci5jb25zdW1lTGV4ZW1lKClcblxuICBpZiAobGV4ZW1lID09IHVuZGVmaW5lZCkge1xuICAgIHJldHVyblxuICB9XG5cbiAgaWYgKHBhcnNlci5xdWVyeS5hbGxGaWVsZHMuaW5kZXhPZihsZXhlbWUuc3RyKSA9PSAtMSkge1xuICAgIHZhciBwb3NzaWJsZUZpZWxkcyA9IHBhcnNlci5xdWVyeS5hbGxGaWVsZHMubWFwKGZ1bmN0aW9uIChmKSB7IHJldHVybiBcIidcIiArIGYgKyBcIidcIiB9KS5qb2luKCcsICcpLFxuICAgICAgICBlcnJvck1lc3NhZ2UgPSBcInVucmVjb2duaXNlZCBmaWVsZCAnXCIgKyBsZXhlbWUuc3RyICsgXCInLCBwb3NzaWJsZSBmaWVsZHM6IFwiICsgcG9zc2libGVGaWVsZHNcblxuICAgIHRocm93IG5ldyBsdW5yLlF1ZXJ5UGFyc2VFcnJvciAoZXJyb3JNZXNzYWdlLCBsZXhlbWUuc3RhcnQsIGxleGVtZS5lbmQpXG4gIH1cblxuICBwYXJzZXIuY3VycmVudENsYXVzZS5maWVsZHMgPSBbbGV4ZW1lLnN0cl1cblxuICB2YXIgbmV4dExleGVtZSA9IHBhcnNlci5wZWVrTGV4ZW1lKClcblxuICBpZiAobmV4dExleGVtZSA9PSB1bmRlZmluZWQpIHtcbiAgICB2YXIgZXJyb3JNZXNzYWdlID0gXCJleHBlY3RpbmcgdGVybSwgZm91bmQgbm90aGluZ1wiXG4gICAgdGhyb3cgbmV3IGx1bnIuUXVlcnlQYXJzZUVycm9yIChlcnJvck1lc3NhZ2UsIGxleGVtZS5zdGFydCwgbGV4ZW1lLmVuZClcbiAgfVxuXG4gIHN3aXRjaCAobmV4dExleGVtZS50eXBlKSB7XG4gICAgY2FzZSBsdW5yLlF1ZXJ5TGV4ZXIuVEVSTTpcbiAgICAgIHJldHVybiBsdW5yLlF1ZXJ5UGFyc2VyLnBhcnNlVGVybVxuICAgIGRlZmF1bHQ6XG4gICAgICB2YXIgZXJyb3JNZXNzYWdlID0gXCJleHBlY3RpbmcgdGVybSwgZm91bmQgJ1wiICsgbmV4dExleGVtZS50eXBlICsgXCInXCJcbiAgICAgIHRocm93IG5ldyBsdW5yLlF1ZXJ5UGFyc2VFcnJvciAoZXJyb3JNZXNzYWdlLCBuZXh0TGV4ZW1lLnN0YXJ0LCBuZXh0TGV4ZW1lLmVuZClcbiAgfVxufVxuXG5sdW5yLlF1ZXJ5UGFyc2VyLnBhcnNlVGVybSA9IGZ1bmN0aW9uIChwYXJzZXIpIHtcbiAgdmFyIGxleGVtZSA9IHBhcnNlci5jb25zdW1lTGV4ZW1lKClcblxuICBpZiAobGV4ZW1lID09IHVuZGVmaW5lZCkge1xuICAgIHJldHVyblxuICB9XG5cbiAgcGFyc2VyLmN1cnJlbnRDbGF1c2UudGVybSA9IGxleGVtZS5zdHIudG9Mb3dlckNhc2UoKVxuXG4gIGlmIChsZXhlbWUuc3RyLmluZGV4T2YoXCIqXCIpICE9IC0xKSB7XG4gICAgcGFyc2VyLmN1cnJlbnRDbGF1c2UudXNlUGlwZWxpbmUgPSBmYWxzZVxuICB9XG5cbiAgdmFyIG5leHRMZXhlbWUgPSBwYXJzZXIucGVla0xleGVtZSgpXG5cbiAgaWYgKG5leHRMZXhlbWUgPT0gdW5kZWZpbmVkKSB7XG4gICAgcGFyc2VyLm5leHRDbGF1c2UoKVxuICAgIHJldHVyblxuICB9XG5cbiAgc3dpdGNoIChuZXh0TGV4ZW1lLnR5cGUpIHtcbiAgICBjYXNlIGx1bnIuUXVlcnlMZXhlci5URVJNOlxuICAgICAgcGFyc2VyLm5leHRDbGF1c2UoKVxuICAgICAgcmV0dXJuIGx1bnIuUXVlcnlQYXJzZXIucGFyc2VUZXJtXG4gICAgY2FzZSBsdW5yLlF1ZXJ5TGV4ZXIuRklFTEQ6XG4gICAgICBwYXJzZXIubmV4dENsYXVzZSgpXG4gICAgICByZXR1cm4gbHVuci5RdWVyeVBhcnNlci5wYXJzZUZpZWxkXG4gICAgY2FzZSBsdW5yLlF1ZXJ5TGV4ZXIuRURJVF9ESVNUQU5DRTpcbiAgICAgIHJldHVybiBsdW5yLlF1ZXJ5UGFyc2VyLnBhcnNlRWRpdERpc3RhbmNlXG4gICAgY2FzZSBsdW5yLlF1ZXJ5TGV4ZXIuQk9PU1Q6XG4gICAgICByZXR1cm4gbHVuci5RdWVyeVBhcnNlci5wYXJzZUJvb3N0XG4gICAgY2FzZSBsdW5yLlF1ZXJ5TGV4ZXIuUFJFU0VOQ0U6XG4gICAgICBwYXJzZXIubmV4dENsYXVzZSgpXG4gICAgICByZXR1cm4gbHVuci5RdWVyeVBhcnNlci5wYXJzZVByZXNlbmNlXG4gICAgZGVmYXVsdDpcbiAgICAgIHZhciBlcnJvck1lc3NhZ2UgPSBcIlVuZXhwZWN0ZWQgbGV4ZW1lIHR5cGUgJ1wiICsgbmV4dExleGVtZS50eXBlICsgXCInXCJcbiAgICAgIHRocm93IG5ldyBsdW5yLlF1ZXJ5UGFyc2VFcnJvciAoZXJyb3JNZXNzYWdlLCBuZXh0TGV4ZW1lLnN0YXJ0LCBuZXh0TGV4ZW1lLmVuZClcbiAgfVxufVxuXG5sdW5yLlF1ZXJ5UGFyc2VyLnBhcnNlRWRpdERpc3RhbmNlID0gZnVuY3Rpb24gKHBhcnNlcikge1xuICB2YXIgbGV4ZW1lID0gcGFyc2VyLmNvbnN1bWVMZXhlbWUoKVxuXG4gIGlmIChsZXhlbWUgPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICB2YXIgZWRpdERpc3RhbmNlID0gcGFyc2VJbnQobGV4ZW1lLnN0ciwgMTApXG5cbiAgaWYgKGlzTmFOKGVkaXREaXN0YW5jZSkpIHtcbiAgICB2YXIgZXJyb3JNZXNzYWdlID0gXCJlZGl0IGRpc3RhbmNlIG11c3QgYmUgbnVtZXJpY1wiXG4gICAgdGhyb3cgbmV3IGx1bnIuUXVlcnlQYXJzZUVycm9yIChlcnJvck1lc3NhZ2UsIGxleGVtZS5zdGFydCwgbGV4ZW1lLmVuZClcbiAgfVxuXG4gIHBhcnNlci5jdXJyZW50Q2xhdXNlLmVkaXREaXN0YW5jZSA9IGVkaXREaXN0YW5jZVxuXG4gIHZhciBuZXh0TGV4ZW1lID0gcGFyc2VyLnBlZWtMZXhlbWUoKVxuXG4gIGlmIChuZXh0TGV4ZW1lID09IHVuZGVmaW5lZCkge1xuICAgIHBhcnNlci5uZXh0Q2xhdXNlKClcbiAgICByZXR1cm5cbiAgfVxuXG4gIHN3aXRjaCAobmV4dExleGVtZS50eXBlKSB7XG4gICAgY2FzZSBsdW5yLlF1ZXJ5TGV4ZXIuVEVSTTpcbiAgICAgIHBhcnNlci5uZXh0Q2xhdXNlKClcbiAgICAgIHJldHVybiBsdW5yLlF1ZXJ5UGFyc2VyLnBhcnNlVGVybVxuICAgIGNhc2UgbHVuci5RdWVyeUxleGVyLkZJRUxEOlxuICAgICAgcGFyc2VyLm5leHRDbGF1c2UoKVxuICAgICAgcmV0dXJuIGx1bnIuUXVlcnlQYXJzZXIucGFyc2VGaWVsZFxuICAgIGNhc2UgbHVuci5RdWVyeUxleGVyLkVESVRfRElTVEFOQ0U6XG4gICAgICByZXR1cm4gbHVuci5RdWVyeVBhcnNlci5wYXJzZUVkaXREaXN0YW5jZVxuICAgIGNhc2UgbHVuci5RdWVyeUxleGVyLkJPT1NUOlxuICAgICAgcmV0dXJuIGx1bnIuUXVlcnlQYXJzZXIucGFyc2VCb29zdFxuICAgIGNhc2UgbHVuci5RdWVyeUxleGVyLlBSRVNFTkNFOlxuICAgICAgcGFyc2VyLm5leHRDbGF1c2UoKVxuICAgICAgcmV0dXJuIGx1bnIuUXVlcnlQYXJzZXIucGFyc2VQcmVzZW5jZVxuICAgIGRlZmF1bHQ6XG4gICAgICB2YXIgZXJyb3JNZXNzYWdlID0gXCJVbmV4cGVjdGVkIGxleGVtZSB0eXBlICdcIiArIG5leHRMZXhlbWUudHlwZSArIFwiJ1wiXG4gICAgICB0aHJvdyBuZXcgbHVuci5RdWVyeVBhcnNlRXJyb3IgKGVycm9yTWVzc2FnZSwgbmV4dExleGVtZS5zdGFydCwgbmV4dExleGVtZS5lbmQpXG4gIH1cbn1cblxubHVuci5RdWVyeVBhcnNlci5wYXJzZUJvb3N0ID0gZnVuY3Rpb24gKHBhcnNlcikge1xuICB2YXIgbGV4ZW1lID0gcGFyc2VyLmNvbnN1bWVMZXhlbWUoKVxuXG4gIGlmIChsZXhlbWUgPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICB2YXIgYm9vc3QgPSBwYXJzZUludChsZXhlbWUuc3RyLCAxMClcblxuICBpZiAoaXNOYU4oYm9vc3QpKSB7XG4gICAgdmFyIGVycm9yTWVzc2FnZSA9IFwiYm9vc3QgbXVzdCBiZSBudW1lcmljXCJcbiAgICB0aHJvdyBuZXcgbHVuci5RdWVyeVBhcnNlRXJyb3IgKGVycm9yTWVzc2FnZSwgbGV4ZW1lLnN0YXJ0LCBsZXhlbWUuZW5kKVxuICB9XG5cbiAgcGFyc2VyLmN1cnJlbnRDbGF1c2UuYm9vc3QgPSBib29zdFxuXG4gIHZhciBuZXh0TGV4ZW1lID0gcGFyc2VyLnBlZWtMZXhlbWUoKVxuXG4gIGlmIChuZXh0TGV4ZW1lID09IHVuZGVmaW5lZCkge1xuICAgIHBhcnNlci5uZXh0Q2xhdXNlKClcbiAgICByZXR1cm5cbiAgfVxuXG4gIHN3aXRjaCAobmV4dExleGVtZS50eXBlKSB7XG4gICAgY2FzZSBsdW5yLlF1ZXJ5TGV4ZXIuVEVSTTpcbiAgICAgIHBhcnNlci5uZXh0Q2xhdXNlKClcbiAgICAgIHJldHVybiBsdW5yLlF1ZXJ5UGFyc2VyLnBhcnNlVGVybVxuICAgIGNhc2UgbHVuci5RdWVyeUxleGVyLkZJRUxEOlxuICAgICAgcGFyc2VyLm5leHRDbGF1c2UoKVxuICAgICAgcmV0dXJuIGx1bnIuUXVlcnlQYXJzZXIucGFyc2VGaWVsZFxuICAgIGNhc2UgbHVuci5RdWVyeUxleGVyLkVESVRfRElTVEFOQ0U6XG4gICAgICByZXR1cm4gbHVuci5RdWVyeVBhcnNlci5wYXJzZUVkaXREaXN0YW5jZVxuICAgIGNhc2UgbHVuci5RdWVyeUxleGVyLkJPT1NUOlxuICAgICAgcmV0dXJuIGx1bnIuUXVlcnlQYXJzZXIucGFyc2VCb29zdFxuICAgIGNhc2UgbHVuci5RdWVyeUxleGVyLlBSRVNFTkNFOlxuICAgICAgcGFyc2VyLm5leHRDbGF1c2UoKVxuICAgICAgcmV0dXJuIGx1bnIuUXVlcnlQYXJzZXIucGFyc2VQcmVzZW5jZVxuICAgIGRlZmF1bHQ6XG4gICAgICB2YXIgZXJyb3JNZXNzYWdlID0gXCJVbmV4cGVjdGVkIGxleGVtZSB0eXBlICdcIiArIG5leHRMZXhlbWUudHlwZSArIFwiJ1wiXG4gICAgICB0aHJvdyBuZXcgbHVuci5RdWVyeVBhcnNlRXJyb3IgKGVycm9yTWVzc2FnZSwgbmV4dExleGVtZS5zdGFydCwgbmV4dExleGVtZS5lbmQpXG4gIH1cbn1cblxuICAvKipcbiAgICogZXhwb3J0IHRoZSBtb2R1bGUgdmlhIEFNRCwgQ29tbW9uSlMgb3IgYXMgYSBicm93c2VyIGdsb2JhbFxuICAgKiBFeHBvcnQgY29kZSBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS91bWRqcy91bWQvYmxvYi9tYXN0ZXIvcmV0dXJuRXhwb3J0cy5qc1xuICAgKi9cbiAgOyhmdW5jdGlvbiAocm9vdCwgZmFjdG9yeSkge1xuICAgIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgICAgIC8vIEFNRC4gUmVnaXN0ZXIgYXMgYW4gYW5vbnltb3VzIG1vZHVsZS5cbiAgICAgIGRlZmluZShmYWN0b3J5KVxuICAgIH0gZWxzZSBpZiAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKSB7XG4gICAgICAvKipcbiAgICAgICAqIE5vZGUuIERvZXMgbm90IHdvcmsgd2l0aCBzdHJpY3QgQ29tbW9uSlMsIGJ1dFxuICAgICAgICogb25seSBDb21tb25KUy1saWtlIGVudmlyb21lbnRzIHRoYXQgc3VwcG9ydCBtb2R1bGUuZXhwb3J0cyxcbiAgICAgICAqIGxpa2UgTm9kZS5cbiAgICAgICAqL1xuICAgICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KClcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gQnJvd3NlciBnbG9iYWxzIChyb290IGlzIHdpbmRvdylcbiAgICAgIHJvb3QubHVuciA9IGZhY3RvcnkoKVxuICAgIH1cbiAgfSh0aGlzLCBmdW5jdGlvbiAoKSB7XG4gICAgLyoqXG4gICAgICogSnVzdCByZXR1cm4gYSB2YWx1ZSB0byBkZWZpbmUgdGhlIG1vZHVsZSBleHBvcnQuXG4gICAgICogVGhpcyBleGFtcGxlIHJldHVybnMgYW4gb2JqZWN0LCBidXQgdGhlIG1vZHVsZVxuICAgICAqIGNhbiByZXR1cm4gYSBmdW5jdGlvbiBhcyB0aGUgZXhwb3J0ZWQgdmFsdWUuXG4gICAgICovXG4gICAgcmV0dXJuIGx1bnJcbiAgfSkpXG59KSgpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2x1bnIvbHVuci5qcyIsIi8qXHJcbiAqIENvcHlyaWdodCAoYykgMjAxNi0yMDE4IE1hcnRpbiBEb25hdGggPG1hcnRpbi5kb25hdGhAc3F1aWRmdW5rLmNvbT5cclxuICpcclxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxyXG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0b1xyXG4gKiBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZVxyXG4gKiByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3JcclxuICogc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcclxuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcclxuICpcclxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cclxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcbiAqXHJcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcclxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXHJcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT04tSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcclxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxyXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lOR1xyXG4gKiBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTXHJcbiAqIElOIFRIRSBTT0ZUV0FSRS5cclxuICovXHJcblxyXG5pbXBvcnQgUG9zaXRpb24gZnJvbSBcIi4vU2lkZWJhci9Qb3NpdGlvblwiXHJcblxyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqIE1vZHVsZVxyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgUG9zaXRpb25cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXNzZXRzL2phdmFzY3JpcHRzL2NvbXBvbmVudHMvTWF0ZXJpYWwvU2lkZWJhci5qcyIsIi8qXHJcbiAqIENvcHlyaWdodCAoYykgMjAxNi0yMDE4IE1hcnRpbiBEb25hdGggPG1hcnRpbi5kb25hdGhAc3F1aWRmdW5rLmNvbT5cclxuICpcclxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxyXG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0b1xyXG4gKiBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZVxyXG4gKiByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3JcclxuICogc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcclxuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcclxuICpcclxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cclxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcbiAqXHJcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcclxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXHJcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT04tSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcclxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxyXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lOR1xyXG4gKiBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTXHJcbiAqIElOIFRIRSBTT0ZUV0FSRS5cclxuICovXHJcblxyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqIENsYXNzXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvc2l0aW9uIHtcclxuXHJcbiAgLyoqXHJcbiAgICogU2V0IHNpZGViYXJzIHRvIGxvY2tlZCBzdGF0ZSBhbmQgbGltaXQgaGVpZ2h0IHRvIHBhcmVudCBub2RlXHJcbiAgICpcclxuICAgKiBAY29uc3RydWN0b3JcclxuICAgKlxyXG4gICAqIEBwcm9wZXJ0eSB7SFRNTEVsZW1lbnR9IGVsXyAtIFNpZGViYXJcclxuICAgKiBAcHJvcGVydHkge0hUTUxFbGVtZW50fSBwYXJlbnRfIC0gU2lkZWJhciBjb250YWluZXJcclxuICAgKiBAcHJvcGVydHkge0hUTUxFbGVtZW50fSBoZWFkZXJfIC0gSGVhZGVyXHJcbiAgICogQHByb3BlcnR5IHtudW1iZXJ9IGhlaWdodF8gLSBDdXJyZW50IHNpZGViYXIgaGVpZ2h0XHJcbiAgICogQHByb3BlcnR5IHtudW1iZXJ9IG9mZnNldF8gLSBDdXJyZW50IHBhZ2UgeS1vZmZzZXRcclxuICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IHBhZF8gLSBQYWQgd2hlbiBoZWFkZXIgaXMgZml4ZWRcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7KHN0cmluZ3xIVE1MRWxlbWVudCl9IGVsIC0gU2VsZWN0b3Igb3IgSFRNTCBlbGVtZW50XHJcbiAgICogQHBhcmFtIHsoc3RyaW5nfEhUTUxFbGVtZW50KX0gaGVhZGVyIC0gU2VsZWN0b3Igb3IgSFRNTCBlbGVtZW50XHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoZWwsIGhlYWRlcikge1xyXG4gICAgbGV0IHJlZiA9ICh0eXBlb2YgZWwgPT09IFwic3RyaW5nXCIpXHJcbiAgICAgID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbClcclxuICAgICAgOiBlbFxyXG4gICAgaWYgKCEocmVmIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHx8XHJcbiAgICAgICAgIShyZWYucGFyZW50Tm9kZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSlcclxuICAgICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yXHJcbiAgICB0aGlzLmVsXyA9IHJlZlxyXG4gICAgdGhpcy5wYXJlbnRfID0gcmVmLnBhcmVudE5vZGVcclxuXHJcbiAgICAvKiBSZXRyaWV2ZSBoZWFkZXIgKi9cclxuICAgIHJlZiA9ICh0eXBlb2YgaGVhZGVyID09PSBcInN0cmluZ1wiKVxyXG4gICAgICA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoaGVhZGVyKVxyXG4gICAgICA6IGhlYWRlclxyXG4gICAgaWYgKCEocmVmIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKVxyXG4gICAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3JcclxuICAgIHRoaXMuaGVhZGVyXyA9IHJlZlxyXG5cclxuICAgIC8qIEluaXRpYWxpemUgY3VycmVudCBoZWlnaHQgYW5kIHRlc3Qgd2hldGhlciBoZWFkZXIgaXMgZml4ZWQgKi9cclxuICAgIHRoaXMuaGVpZ2h0XyA9IDBcclxuICAgIHRoaXMucGFkXyA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMuaGVhZGVyXykucG9zaXRpb24gPT09IFwiZml4ZWRcIlxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogSW5pdGlhbGl6ZSBzaWRlYmFyIHN0YXRlXHJcbiAgICovXHJcbiAgc2V0dXAoKSB7XHJcbiAgICBjb25zdCB0b3AgPSBBcnJheS5wcm90b3R5cGUucmVkdWNlLmNhbGwoXHJcbiAgICAgIHRoaXMucGFyZW50Xy5jaGlsZHJlbiwgKG9mZnNldCwgY2hpbGQpID0+IHtcclxuICAgICAgICByZXR1cm4gTWF0aC5tYXgob2Zmc2V0LCBjaGlsZC5vZmZzZXRUb3ApXHJcbiAgICAgIH0sIDApXHJcblxyXG4gICAgLyogU2V0IGxvY2sgb2Zmc2V0IGZvciBlbGVtZW50IHdpdGggbGFyZ2VzdCB0b3Agb2Zmc2V0ICovXHJcbiAgICB0aGlzLm9mZnNldF8gPSB0b3AgLSAodGhpcy5wYWRfID8gdGhpcy5oZWFkZXJfLm9mZnNldEhlaWdodCA6IDApXHJcbiAgICB0aGlzLnVwZGF0ZSgpXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBVcGRhdGUgbG9ja2VkIHN0YXRlIGFuZCBoZWlnaHRcclxuICAgKlxyXG4gICAqIFRoZSBpbm5lciBoZWlnaHQgb2YgdGhlIHdpbmRvdyAoPSB0aGUgdmlzaWJsZSBhcmVhKSBpcyB0aGUgbWF4aW11bVxyXG4gICAqIHBvc3NpYmxlIGhlaWdodCBmb3IgdGhlIHN0cmV0Y2hpbmcgc2lkZWJhci4gVGhpcyBoZWlnaHQgbXVzdCBiZSBkZWR1Y3RlZFxyXG4gICAqIGJ5IHRoZSBoZWlnaHQgb2YgdGhlIGZpeGVkIGhlYWRlciAoNTZweCkuIERlcGVuZGluZyBvbiB0aGUgcGFnZSB5LW9mZnNldCxcclxuICAgKiB0aGUgdG9wIG9mZnNldCBvZiB0aGUgc2lkZWJhciBtdXN0IGJlIHRha2VuIGludG8gYWNjb3VudCwgYXMgd2VsbCBhcyB0aGVcclxuICAgKiBjYXNlIHdoZXJlIHRoZSB3aW5kb3cgaXMgc2Nyb2xsZWQgYmV5b25kIHRoZSBzaWRlYmFyIGNvbnRhaW5lci5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7RXZlbnQ/fSBldiAtIEV2ZW50XHJcbiAgICovXHJcbiAgdXBkYXRlKGV2KSB7XHJcbiAgICBjb25zdCBvZmZzZXQgID0gd2luZG93LnBhZ2VZT2Zmc2V0XHJcbiAgICBjb25zdCB2aXNpYmxlID0gd2luZG93LmlubmVySGVpZ2h0XHJcblxyXG4gICAgLyogVXBkYXRlIG9mZnNldCwgaW4gY2FzZSB3aW5kb3cgaXMgcmVzaXplZCAqL1xyXG4gICAgaWYgKGV2ICYmIGV2LnR5cGUgPT09IFwicmVzaXplXCIpXHJcbiAgICAgIHRoaXMuc2V0dXAoKVxyXG5cclxuICAgIC8qIFNldCBib3VuZHMgb2Ygc2lkZWJhciBjb250YWluZXIgLSBtdXN0IGJlIGNhbGN1bGF0ZWQgb24gZXZlcnkgcnVuLCBhc1xyXG4gICAgICAgdGhlIGhlaWdodCBvZiB0aGUgY29udGVudCBtaWdodCBjaGFuZ2UgZHVlIHRvIGxvYWRpbmcgaW1hZ2VzIGV0Yy4gKi9cclxuICAgIGNvbnN0IGJvdW5kcyA9IHtcclxuICAgICAgdG9wOiB0aGlzLnBhZF8gPyB0aGlzLmhlYWRlcl8ub2Zmc2V0SGVpZ2h0IDogMCxcclxuICAgICAgYm90dG9tOiB0aGlzLnBhcmVudF8ub2Zmc2V0VG9wICsgdGhpcy5wYXJlbnRfLm9mZnNldEhlaWdodFxyXG4gICAgfVxyXG5cclxuICAgIC8qIENhbGN1bGF0ZSBuZXcgb2Zmc2V0IGFuZCBoZWlnaHQgKi9cclxuICAgIGNvbnN0IGhlaWdodCA9IHZpc2libGUgLSBib3VuZHMudG9wXHJcbiAgICAgICAgICAgICAgICAgLSBNYXRoLm1heCgwLCB0aGlzLm9mZnNldF8gLSBvZmZzZXQpXHJcbiAgICAgICAgICAgICAgICAgLSBNYXRoLm1heCgwLCBvZmZzZXQgKyB2aXNpYmxlIC0gYm91bmRzLmJvdHRvbSlcclxuXHJcbiAgICAvKiBJZiBoZWlnaHQgY2hhbmdlZCwgdXBkYXRlIGVsZW1lbnQgKi9cclxuICAgIGlmIChoZWlnaHQgIT09IHRoaXMuaGVpZ2h0XylcclxuICAgICAgdGhpcy5lbF8uc3R5bGUuaGVpZ2h0ID0gYCR7dGhpcy5oZWlnaHRfID0gaGVpZ2h0fXB4YFxyXG5cclxuICAgIC8qIFNpZGViYXIgc2hvdWxkIGJlIGxvY2tlZCwgYXMgd2UncmUgYmVsb3cgcGFyZW50IG9mZnNldCAqL1xyXG4gICAgaWYgKG9mZnNldCA+PSB0aGlzLm9mZnNldF8pIHtcclxuICAgICAgaWYgKHRoaXMuZWxfLmRhdGFzZXQubWRTdGF0ZSAhPT0gXCJsb2NrXCIpXHJcbiAgICAgICAgdGhpcy5lbF8uZGF0YXNldC5tZFN0YXRlID0gXCJsb2NrXCJcclxuXHJcbiAgICAvKiBTaWRlYmFyIHNob3VsZCBiZSB1bmxvY2tlZCwgaWYgbG9ja2VkICovXHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuZWxfLmRhdGFzZXQubWRTdGF0ZSA9PT0gXCJsb2NrXCIpIHtcclxuICAgICAgdGhpcy5lbF8uZGF0YXNldC5tZFN0YXRlID0gXCJcIlxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmVzZXQgbG9ja2VkIHN0YXRlIGFuZCBoZWlnaHRcclxuICAgKi9cclxuICByZXNldCgpIHtcclxuICAgIHRoaXMuZWxfLmRhdGFzZXQubWRTdGF0ZSA9IFwiXCJcclxuICAgIHRoaXMuZWxfLnN0eWxlLmhlaWdodCA9IFwiXCJcclxuICAgIHRoaXMuaGVpZ2h0XyA9IDBcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Fzc2V0cy9qYXZhc2NyaXB0cy9jb21wb25lbnRzL01hdGVyaWFsL1NpZGViYXIvUG9zaXRpb24uanMiLCIvKlxyXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYtMjAxOCBNYXJ0aW4gRG9uYXRoIDxtYXJ0aW4uZG9uYXRoQHNxdWlkZnVuay5jb20+XHJcbiAqXHJcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcclxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG9cclxuICogZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGVcclxuICogcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yXHJcbiAqIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXHJcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XHJcbiAqXHJcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXHJcbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxyXG4gKlxyXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXHJcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxyXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OLUlORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXHJcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcclxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkdcclxuICogRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HU1xyXG4gKiBJTiBUSEUgU09GVFdBUkUuXHJcbiAqL1xyXG5cclxuaW1wb3J0IEFkYXB0ZXIgZnJvbSBcIi4vU291cmNlL0FkYXB0ZXJcIlxyXG5pbXBvcnQgUmVwb3NpdG9yeSBmcm9tIFwiLi9Tb3VyY2UvUmVwb3NpdG9yeVwiXHJcblxyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqIE1vZHVsZVxyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgQWRhcHRlcixcclxuICBSZXBvc2l0b3J5XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Fzc2V0cy9qYXZhc2NyaXB0cy9jb21wb25lbnRzL01hdGVyaWFsL1NvdXJjZS5qcyIsIi8qXHJcbiAqIENvcHlyaWdodCAoYykgMjAxNi0yMDE4IE1hcnRpbiBEb25hdGggPG1hcnRpbi5kb25hdGhAc3F1aWRmdW5rLmNvbT5cclxuICpcclxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxyXG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0b1xyXG4gKiBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZVxyXG4gKiByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3JcclxuICogc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcclxuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcclxuICpcclxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cclxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcbiAqXHJcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcclxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXHJcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT04tSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcclxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxyXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lOR1xyXG4gKiBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTXHJcbiAqIElOIFRIRSBTT0ZUV0FSRS5cclxuICovXHJcblxyXG5pbXBvcnQgR2l0SHViIGZyb20gXCIuL0FkYXB0ZXIvR2l0SHViXCJcclxuXHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogTW9kdWxlXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBHaXRIdWJcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXNzZXRzL2phdmFzY3JpcHRzL2NvbXBvbmVudHMvTWF0ZXJpYWwvU291cmNlL0FkYXB0ZXIuanMiLCIvKlxyXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYtMjAxOCBNYXJ0aW4gRG9uYXRoIDxtYXJ0aW4uZG9uYXRoQHNxdWlkZnVuay5jb20+XHJcbiAqXHJcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcclxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG9cclxuICogZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGVcclxuICogcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yXHJcbiAqIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXHJcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XHJcbiAqXHJcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXHJcbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxyXG4gKlxyXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXHJcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxyXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OLUlORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXHJcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcclxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkdcclxuICogRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HU1xyXG4gKiBJTiBUSEUgU09GVFdBUkUuXHJcbiAqL1xyXG5cclxuaW1wb3J0IEFic3RyYWN0IGZyb20gXCIuL0Fic3RyYWN0XCJcclxuXHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogQ2xhc3NcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2l0SHViIGV4dGVuZHMgQWJzdHJhY3Qge1xyXG5cclxuICAvKipcclxuICAgKiBSZXRyaWV2ZSByZXBvc2l0b3J5IGluZm9ybWF0aW9uIGZyb20gR2l0SHViXHJcbiAgICpcclxuICAgKiBAY29uc3RydWN0b3JcclxuICAgKlxyXG4gICAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBuYW1lXyAtIE5hbWUgb2YgdGhlIHJlcG9zaXRvcnlcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7KHN0cmluZ3xIVE1MQW5jaG9yRWxlbWVudCl9IGVsIC0gU2VsZWN0b3Igb3IgSFRNTCBlbGVtZW50XHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoZWwpIHtcclxuICAgIHN1cGVyKGVsKVxyXG5cclxuICAgIC8qIEV4dHJhY3QgdXNlciAoYW5kIHJlcG9zaXRvcnkgbmFtZSkgZnJvbSBVUkwsIGFzIHdlIGhhdmUgdG8gcXVlcnkgZm9yIGFsbFxyXG4gICAgICAgcmVwb3NpdG9yaWVzLCB0byBvbWl0IDQwNCBlcnJvcnMgZm9yIHByaXZhdGUgcmVwb3NpdG9yaWVzICovXHJcbiAgICBjb25zdCBtYXRjaGVzID0gL14uK2dpdGh1YlxcLmNvbVxcLyhbXi9dKylcXC8/KFteL10rKT8uKiQvXHJcbiAgICAgIC5leGVjKHRoaXMuYmFzZV8pXHJcbiAgICBpZiAobWF0Y2hlcyAmJiBtYXRjaGVzLmxlbmd0aCA9PT0gMykge1xyXG4gICAgICBjb25zdCBbLCB1c2VyLCBuYW1lXSA9IG1hdGNoZXNcclxuXHJcbiAgICAgIC8qIEluaXRpYWxpemUgYmFzZSBVUkwgYW5kIHJlcG9zaXRvcnkgbmFtZSAqL1xyXG4gICAgICB0aGlzLmJhc2VfID0gYGh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMvJHt1c2VyfS9yZXBvc2BcclxuICAgICAgdGhpcy5uYW1lXyA9IG5hbWVcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEZldGNoIHJlbGV2YW50IHJlcG9zaXRvcnkgaW5mb3JtYXRpb24gZnJvbSBHaXRIdWJcclxuICAgKlxyXG4gICAqIEByZXR1cm4ge1Byb21pc2U8QXJyYXk8c3RyaW5nPj59IFByb21pc2UgcmV0dXJuaW5nIGFuIGFycmF5IG9mIGZhY3RzXHJcbiAgICovXHJcbiAgZmV0Y2hfKCkge1xyXG4gICAgY29uc3QgcGFnaW5hdGUgPSAocGFnZSA9IDApID0+IHtcclxuICAgICAgcmV0dXJuIGZldGNoKGAke3RoaXMuYmFzZV99P3Blcl9wYWdlPTMwJnBhZ2U9JHtwYWdlfWApXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgIC50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgaWYgKCEoZGF0YSBpbnN0YW5jZW9mIEFycmF5KSlcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvclxyXG5cclxuICAgICAgICAgIC8qIERpc3BsYXkgbnVtYmVyIG9mIHN0YXJzIGFuZCBmb3JrcywgaWYgcmVwb3NpdG9yeSBpcyBnaXZlbiAqL1xyXG4gICAgICAgICAgaWYgKHRoaXMubmFtZV8pIHtcclxuICAgICAgICAgICAgY29uc3QgcmVwbyA9IGRhdGEuZmluZChpdGVtID0+IGl0ZW0ubmFtZSA9PT0gdGhpcy5uYW1lXylcclxuICAgICAgICAgICAgaWYgKCFyZXBvICYmIGRhdGEubGVuZ3RoID09PSAzMClcclxuICAgICAgICAgICAgICByZXR1cm4gcGFnaW5hdGUocGFnZSArIDEpXHJcblxyXG4gICAgICAgICAgICAvKiBJZiB3ZSBmb3VuZCBhIHJlcG8sIGV4dHJhY3QgdGhlIGZhY3RzICovXHJcbiAgICAgICAgICAgIHJldHVybiByZXBvXHJcbiAgICAgICAgICAgICAgPyBbXHJcbiAgICAgICAgICAgICAgICBgJHt0aGlzLmZvcm1hdF8ocmVwby5zdGFyZ2F6ZXJzX2NvdW50KX0gU3RhcnNgLFxyXG4gICAgICAgICAgICAgICAgYCR7dGhpcy5mb3JtYXRfKHJlcG8uZm9ya3NfY291bnQpfSBGb3Jrc2BcclxuICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgOiBbXVxyXG5cclxuICAgICAgICAgIC8qIERpc3BsYXkgbnVtYmVyIG9mIHJlcG9zaXRvcmllcywgb3RoZXJ3aXNlICovXHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgICAgIGAke2RhdGEubGVuZ3RofSBSZXBvc2l0b3JpZXNgXHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIC8qIFBhZ2luYXRlIHRocm91Z2ggcmVwb3MgKi9cclxuICAgIHJldHVybiBwYWdpbmF0ZSgpXHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hc3NldHMvamF2YXNjcmlwdHMvY29tcG9uZW50cy9NYXRlcmlhbC9Tb3VyY2UvQWRhcHRlci9HaXRIdWIuanMiLCIvKlxyXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYtMjAxOCBNYXJ0aW4gRG9uYXRoIDxtYXJ0aW4uZG9uYXRoQHNxdWlkZnVuay5jb20+XHJcbiAqXHJcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcclxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG9cclxuICogZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGVcclxuICogcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yXHJcbiAqIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXHJcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XHJcbiAqXHJcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXHJcbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxyXG4gKlxyXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXHJcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxyXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OLUlORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXHJcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcclxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkdcclxuICogRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HU1xyXG4gKiBJTiBUSEUgU09GVFdBUkUuXHJcbiAqL1xyXG5cclxuaW1wb3J0IENvb2tpZXMgZnJvbSBcImpzLWNvb2tpZVwiXHJcblxyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqIENsYXNzXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFic3RyYWN0IHtcclxuXHJcbiAgLyoqXHJcbiAgICogUmV0cmlldmUgcmVwb3NpdG9yeSBpbmZvcm1hdGlvblxyXG4gICAqXHJcbiAgICogQGNvbnN0cnVjdG9yXHJcbiAgICpcclxuICAgKiBAcHJvcGVydHkge0hUTUxBbmNob3JFbGVtZW50fSBlbF8gLSBMaW5rIHRvIHJlcG9zaXRvcnlcclxuICAgKiBAcHJvcGVydHkge3N0cmluZ30gYmFzZV8gLSBBUEkgYmFzZSBVUkxcclxuICAgKiBAcHJvcGVydHkge251bWJlcn0gc2FsdF8gLSBVbmlxdWUgaWRlbnRpZmllclxyXG4gICAqXHJcbiAgICogQHBhcmFtIHsoc3RyaW5nfEhUTUxBbmNob3JFbGVtZW50KX0gZWwgLSBTZWxlY3RvciBvciBIVE1MIGVsZW1lbnRcclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcihlbCkge1xyXG4gICAgY29uc3QgcmVmID0gKHR5cGVvZiBlbCA9PT0gXCJzdHJpbmdcIilcclxuICAgICAgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVsKVxyXG4gICAgICA6IGVsXHJcbiAgICBpZiAoIShyZWYgaW5zdGFuY2VvZiBIVE1MQW5jaG9yRWxlbWVudCkpXHJcbiAgICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvclxyXG4gICAgdGhpcy5lbF8gPSByZWZcclxuXHJcbiAgICAvKiBSZXRyaWV2ZSBiYXNlIFVSTCAqL1xyXG4gICAgdGhpcy5iYXNlXyA9IHRoaXMuZWxfLmhyZWZcclxuICAgIHRoaXMuc2FsdF8gPSB0aGlzLmhhc2hfKHRoaXMuYmFzZV8pXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXRyaWV2ZSBkYXRhIGZyb20gQ29va2llIG9yIGZldGNoIGZyb20gcmVzcGVjdGl2ZSBBUElcclxuICAgKlxyXG4gICAqIEByZXR1cm4ge1Byb21pc2U8QXJyYXk8c3RyaW5nPj59IFByb21pc2UgdGhhdCByZXR1cm5zIGFuIGFycmF5IG9mIGZhY3RzXHJcbiAgICovXHJcbiAgZmV0Y2goKSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XHJcbiAgICAgIGNvbnN0IGNhY2hlZCA9IENvb2tpZXMuZ2V0SlNPTihgJHt0aGlzLnNhbHRffS5jYWNoZS1zb3VyY2VgKVxyXG4gICAgICBpZiAodHlwZW9mIGNhY2hlZCAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgIHJlc29sdmUoY2FjaGVkKVxyXG5cclxuICAgICAgLyogSWYgdGhlIGRhdGEgaXMgbm90IGNhY2hlZCBpbiBhIGNvb2tpZSwgaW52b2tlIGZldGNoIGFuZCBzZXRcclxuICAgICAgICAgYSBjb29raWUgdGhhdCBhdXRvbWF0aWNhbGx5IGV4cGlyZXMgaW4gMTUgbWludXRlcyAqL1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuZmV0Y2hfKCkudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgIENvb2tpZXMuc2V0KGAke3RoaXMuc2FsdF99LmNhY2hlLXNvdXJjZWAsIGRhdGEsIHsgZXhwaXJlczogMSAvIDk2IH0pXHJcbiAgICAgICAgICByZXNvbHZlKGRhdGEpXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEFic3RyYWN0IHByaXZhdGUgZnVuY3Rpb24gdGhhdCBmZXRjaGVzIHJlbGV2YW50IHJlcG9zaXRvcnkgaW5mb3JtYXRpb25cclxuICAgKlxyXG4gICAqIEBhYnN0cmFjdFxyXG4gICAqL1xyXG4gIGZldGNoXygpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcihcImZldGNoXygpOiBOb3QgaW1wbGVtZW50ZWRcIilcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEZvcm1hdCBhIG51bWJlciB3aXRoIHN1ZmZpeFxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IG51bWJlciAtIE51bWJlciB0byBmb3JtYXRcclxuICAgKiBAcmV0dXJuIHtzdHJpbmd9IEZvcm1hdHRlZCBudW1iZXJcclxuICAgKi9cclxuICBmb3JtYXRfKG51bWJlcikge1xyXG4gICAgaWYgKG51bWJlciA+IDEwMDAwKVxyXG4gICAgICByZXR1cm4gYCR7KG51bWJlciAvIDEwMDApLnRvRml4ZWQoMCl9a2BcclxuICAgIGVsc2UgaWYgKG51bWJlciA+IDEwMDApXHJcbiAgICAgIHJldHVybiBgJHsobnVtYmVyIC8gMTAwMCkudG9GaXhlZCgxKX1rYFxyXG4gICAgcmV0dXJuIGAke251bWJlcn1gXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTaW1wbGUgaGFzaCBmdW5jdGlvblxyXG4gICAqXHJcbiAgICogVGFrZW4gZnJvbSBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS83NjE2NDg0LzEwNjU1ODRcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzdHIgLSBJbnB1dCBzdHJpbmdcclxuICAgKiBAcmV0dXJuIHtudW1iZXJ9IEhhc2hlZCBzdHJpbmdcclxuICAgKi9cclxuICBoYXNoXyhzdHIpIHtcclxuICAgIGxldCBoYXNoID0gMFxyXG4gICAgaWYgKHN0ci5sZW5ndGggPT09IDApIHJldHVybiBoYXNoXHJcbiAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gc3RyLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgIGhhc2ggID0gKChoYXNoIDw8IDUpIC0gaGFzaCkgKyBzdHIuY2hhckNvZGVBdChpKVxyXG4gICAgICBoYXNoIHw9IDAgLy8gQ29udmVydCB0byAzMmJpdCBpbnRlZ2VyXHJcbiAgICB9XHJcbiAgICByZXR1cm4gaGFzaFxyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXNzZXRzL2phdmFzY3JpcHRzL2NvbXBvbmVudHMvTWF0ZXJpYWwvU291cmNlL0FkYXB0ZXIvQWJzdHJhY3QuanMiLCIvKiFcbiAqIEphdmFTY3JpcHQgQ29va2llIHYyLjIuMFxuICogaHR0cHM6Ly9naXRodWIuY29tL2pzLWNvb2tpZS9qcy1jb29raWVcbiAqXG4gKiBDb3B5cmlnaHQgMjAwNiwgMjAxNSBLbGF1cyBIYXJ0bCAmIEZhZ25lciBCcmFja1xuICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlXG4gKi9cbjsoZnVuY3Rpb24gKGZhY3RvcnkpIHtcblx0dmFyIHJlZ2lzdGVyZWRJbk1vZHVsZUxvYWRlciA9IGZhbHNlO1xuXHRpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0ZGVmaW5lKGZhY3RvcnkpO1xuXHRcdHJlZ2lzdGVyZWRJbk1vZHVsZUxvYWRlciA9IHRydWU7XG5cdH1cblx0aWYgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jykge1xuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRcdHJlZ2lzdGVyZWRJbk1vZHVsZUxvYWRlciA9IHRydWU7XG5cdH1cblx0aWYgKCFyZWdpc3RlcmVkSW5Nb2R1bGVMb2FkZXIpIHtcblx0XHR2YXIgT2xkQ29va2llcyA9IHdpbmRvdy5Db29raWVzO1xuXHRcdHZhciBhcGkgPSB3aW5kb3cuQ29va2llcyA9IGZhY3RvcnkoKTtcblx0XHRhcGkubm9Db25mbGljdCA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHdpbmRvdy5Db29raWVzID0gT2xkQ29va2llcztcblx0XHRcdHJldHVybiBhcGk7XG5cdFx0fTtcblx0fVxufShmdW5jdGlvbiAoKSB7XG5cdGZ1bmN0aW9uIGV4dGVuZCAoKSB7XG5cdFx0dmFyIGkgPSAwO1xuXHRcdHZhciByZXN1bHQgPSB7fTtcblx0XHRmb3IgKDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGF0dHJpYnV0ZXMgPSBhcmd1bWVudHNbIGkgXTtcblx0XHRcdGZvciAodmFyIGtleSBpbiBhdHRyaWJ1dGVzKSB7XG5cdFx0XHRcdHJlc3VsdFtrZXldID0gYXR0cmlidXRlc1trZXldO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9XG5cblx0ZnVuY3Rpb24gaW5pdCAoY29udmVydGVyKSB7XG5cdFx0ZnVuY3Rpb24gYXBpIChrZXksIHZhbHVlLCBhdHRyaWJ1dGVzKSB7XG5cdFx0XHR2YXIgcmVzdWx0O1xuXHRcdFx0aWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBXcml0ZVxuXG5cdFx0XHRpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcblx0XHRcdFx0YXR0cmlidXRlcyA9IGV4dGVuZCh7XG5cdFx0XHRcdFx0cGF0aDogJy8nXG5cdFx0XHRcdH0sIGFwaS5kZWZhdWx0cywgYXR0cmlidXRlcyk7XG5cblx0XHRcdFx0aWYgKHR5cGVvZiBhdHRyaWJ1dGVzLmV4cGlyZXMgPT09ICdudW1iZXInKSB7XG5cdFx0XHRcdFx0dmFyIGV4cGlyZXMgPSBuZXcgRGF0ZSgpO1xuXHRcdFx0XHRcdGV4cGlyZXMuc2V0TWlsbGlzZWNvbmRzKGV4cGlyZXMuZ2V0TWlsbGlzZWNvbmRzKCkgKyBhdHRyaWJ1dGVzLmV4cGlyZXMgKiA4NjRlKzUpO1xuXHRcdFx0XHRcdGF0dHJpYnV0ZXMuZXhwaXJlcyA9IGV4cGlyZXM7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBXZSdyZSB1c2luZyBcImV4cGlyZXNcIiBiZWNhdXNlIFwibWF4LWFnZVwiIGlzIG5vdCBzdXBwb3J0ZWQgYnkgSUVcblx0XHRcdFx0YXR0cmlidXRlcy5leHBpcmVzID0gYXR0cmlidXRlcy5leHBpcmVzID8gYXR0cmlidXRlcy5leHBpcmVzLnRvVVRDU3RyaW5nKCkgOiAnJztcblxuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdHJlc3VsdCA9IEpTT04uc3RyaW5naWZ5KHZhbHVlKTtcblx0XHRcdFx0XHRpZiAoL15bXFx7XFxbXS8udGVzdChyZXN1bHQpKSB7XG5cdFx0XHRcdFx0XHR2YWx1ZSA9IHJlc3VsdDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gY2F0Y2ggKGUpIHt9XG5cblx0XHRcdFx0aWYgKCFjb252ZXJ0ZXIud3JpdGUpIHtcblx0XHRcdFx0XHR2YWx1ZSA9IGVuY29kZVVSSUNvbXBvbmVudChTdHJpbmcodmFsdWUpKVxuXHRcdFx0XHRcdFx0LnJlcGxhY2UoLyUoMjN8MjR8MjZ8MkJ8M0F8M0N8M0V8M0R8MkZ8M0Z8NDB8NUJ8NUR8NUV8NjB8N0J8N0R8N0MpL2csIGRlY29kZVVSSUNvbXBvbmVudCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dmFsdWUgPSBjb252ZXJ0ZXIud3JpdGUodmFsdWUsIGtleSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRrZXkgPSBlbmNvZGVVUklDb21wb25lbnQoU3RyaW5nKGtleSkpO1xuXHRcdFx0XHRrZXkgPSBrZXkucmVwbGFjZSgvJSgyM3wyNHwyNnwyQnw1RXw2MHw3QykvZywgZGVjb2RlVVJJQ29tcG9uZW50KTtcblx0XHRcdFx0a2V5ID0ga2V5LnJlcGxhY2UoL1tcXChcXCldL2csIGVzY2FwZSk7XG5cblx0XHRcdFx0dmFyIHN0cmluZ2lmaWVkQXR0cmlidXRlcyA9ICcnO1xuXG5cdFx0XHRcdGZvciAodmFyIGF0dHJpYnV0ZU5hbWUgaW4gYXR0cmlidXRlcykge1xuXHRcdFx0XHRcdGlmICghYXR0cmlidXRlc1thdHRyaWJ1dGVOYW1lXSkge1xuXHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHN0cmluZ2lmaWVkQXR0cmlidXRlcyArPSAnOyAnICsgYXR0cmlidXRlTmFtZTtcblx0XHRcdFx0XHRpZiAoYXR0cmlidXRlc1thdHRyaWJ1dGVOYW1lXSA9PT0gdHJ1ZSkge1xuXHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHN0cmluZ2lmaWVkQXR0cmlidXRlcyArPSAnPScgKyBhdHRyaWJ1dGVzW2F0dHJpYnV0ZU5hbWVdO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiAoZG9jdW1lbnQuY29va2llID0ga2V5ICsgJz0nICsgdmFsdWUgKyBzdHJpbmdpZmllZEF0dHJpYnV0ZXMpO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBSZWFkXG5cblx0XHRcdGlmICgha2V5KSB7XG5cdFx0XHRcdHJlc3VsdCA9IHt9O1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBUbyBwcmV2ZW50IHRoZSBmb3IgbG9vcCBpbiB0aGUgZmlyc3QgcGxhY2UgYXNzaWduIGFuIGVtcHR5IGFycmF5XG5cdFx0XHQvLyBpbiBjYXNlIHRoZXJlIGFyZSBubyBjb29raWVzIGF0IGFsbC4gQWxzbyBwcmV2ZW50cyBvZGQgcmVzdWx0IHdoZW5cblx0XHRcdC8vIGNhbGxpbmcgXCJnZXQoKVwiXG5cdFx0XHR2YXIgY29va2llcyA9IGRvY3VtZW50LmNvb2tpZSA/IGRvY3VtZW50LmNvb2tpZS5zcGxpdCgnOyAnKSA6IFtdO1xuXHRcdFx0dmFyIHJkZWNvZGUgPSAvKCVbMC05QS1aXXsyfSkrL2c7XG5cdFx0XHR2YXIgaSA9IDA7XG5cblx0XHRcdGZvciAoOyBpIDwgY29va2llcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHR2YXIgcGFydHMgPSBjb29raWVzW2ldLnNwbGl0KCc9Jyk7XG5cdFx0XHRcdHZhciBjb29raWUgPSBwYXJ0cy5zbGljZSgxKS5qb2luKCc9Jyk7XG5cblx0XHRcdFx0aWYgKCF0aGlzLmpzb24gJiYgY29va2llLmNoYXJBdCgwKSA9PT0gJ1wiJykge1xuXHRcdFx0XHRcdGNvb2tpZSA9IGNvb2tpZS5zbGljZSgxLCAtMSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdHZhciBuYW1lID0gcGFydHNbMF0ucmVwbGFjZShyZGVjb2RlLCBkZWNvZGVVUklDb21wb25lbnQpO1xuXHRcdFx0XHRcdGNvb2tpZSA9IGNvbnZlcnRlci5yZWFkID9cblx0XHRcdFx0XHRcdGNvbnZlcnRlci5yZWFkKGNvb2tpZSwgbmFtZSkgOiBjb252ZXJ0ZXIoY29va2llLCBuYW1lKSB8fFxuXHRcdFx0XHRcdFx0Y29va2llLnJlcGxhY2UocmRlY29kZSwgZGVjb2RlVVJJQ29tcG9uZW50KTtcblxuXHRcdFx0XHRcdGlmICh0aGlzLmpzb24pIHtcblx0XHRcdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0XHRcdGNvb2tpZSA9IEpTT04ucGFyc2UoY29va2llKTtcblx0XHRcdFx0XHRcdH0gY2F0Y2ggKGUpIHt9XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0aWYgKGtleSA9PT0gbmFtZSkge1xuXHRcdFx0XHRcdFx0cmVzdWx0ID0gY29va2llO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0aWYgKCFrZXkpIHtcblx0XHRcdFx0XHRcdHJlc3VsdFtuYW1lXSA9IGNvb2tpZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gY2F0Y2ggKGUpIHt9XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0fVxuXG5cdFx0YXBpLnNldCA9IGFwaTtcblx0XHRhcGkuZ2V0ID0gZnVuY3Rpb24gKGtleSkge1xuXHRcdFx0cmV0dXJuIGFwaS5jYWxsKGFwaSwga2V5KTtcblx0XHR9O1xuXHRcdGFwaS5nZXRKU09OID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmV0dXJuIGFwaS5hcHBseSh7XG5cdFx0XHRcdGpzb246IHRydWVcblx0XHRcdH0sIFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKSk7XG5cdFx0fTtcblx0XHRhcGkuZGVmYXVsdHMgPSB7fTtcblxuXHRcdGFwaS5yZW1vdmUgPSBmdW5jdGlvbiAoa2V5LCBhdHRyaWJ1dGVzKSB7XG5cdFx0XHRhcGkoa2V5LCAnJywgZXh0ZW5kKGF0dHJpYnV0ZXMsIHtcblx0XHRcdFx0ZXhwaXJlczogLTFcblx0XHRcdH0pKTtcblx0XHR9O1xuXG5cdFx0YXBpLndpdGhDb252ZXJ0ZXIgPSBpbml0O1xuXG5cdFx0cmV0dXJuIGFwaTtcblx0fVxuXG5cdHJldHVybiBpbml0KGZ1bmN0aW9uICgpIHt9KTtcbn0pKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9qcy1jb29raWUvc3JjL2pzLmNvb2tpZS5qcyIsIi8qXHJcbiAqIENvcHlyaWdodCAoYykgMjAxNi0yMDE4IE1hcnRpbiBEb25hdGggPG1hcnRpbi5kb25hdGhAc3F1aWRmdW5rLmNvbT5cclxuICpcclxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxyXG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0b1xyXG4gKiBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZVxyXG4gKiByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3JcclxuICogc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcclxuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcclxuICpcclxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cclxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcbiAqXHJcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcclxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXHJcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT04tSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcclxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxyXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lOR1xyXG4gKiBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTXHJcbiAqIElOIFRIRSBTT0ZUV0FSRS5cclxuICovXHJcblxyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqIENsYXNzXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlcG9zaXRvcnkge1xyXG5cclxuICAvKipcclxuICAgKiBSZW5kZXIgcmVwb3NpdG9yeSBpbmZvcm1hdGlvblxyXG4gICAqXHJcbiAgICogQGNvbnN0cnVjdG9yXHJcbiAgICpcclxuICAgKiBAcHJvcGVydHkge0hUTUxFbGVtZW50fSBlbF8gLSBSZXBvc2l0b3J5IGluZm9ybWF0aW9uXHJcbiAgICpcclxuICAgKiBAcGFyYW0geyhzdHJpbmd8SFRNTEVsZW1lbnQpfSBlbCAtIFNlbGVjdG9yIG9yIEhUTUwgZWxlbWVudFxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKGVsKSB7XHJcbiAgICBjb25zdCByZWYgPSAodHlwZW9mIGVsID09PSBcInN0cmluZ1wiKVxyXG4gICAgICA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZWwpXHJcbiAgICAgIDogZWxcclxuICAgIGlmICghKHJlZiBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSlcclxuICAgICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yXHJcbiAgICB0aGlzLmVsXyA9IHJlZlxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogSW5pdGlhbGl6ZSB0aGUgcmVwb3NpdG9yeVxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtBcnJheTxzdHJpbmc+fSBmYWN0cyAtIEZhY3RzIHRvIGJlIHJlbmRlcmVkXHJcbiAgICovXHJcbiAgaW5pdGlhbGl6ZShmYWN0cykge1xyXG4gICAgaWYgKGZhY3RzLmxlbmd0aCAmJiB0aGlzLmVsXy5jaGlsZHJlbi5sZW5ndGgpXHJcbiAgICAgIHRoaXMuZWxfLmNoaWxkcmVuW3RoaXMuZWxfLmNoaWxkcmVuLmxlbmd0aCAtIDFdLmFwcGVuZENoaWxkKFxyXG4gICAgICAgIDx1bCBjbGFzcz1cIm1kLXNvdXJjZV9fZmFjdHNcIj5cclxuICAgICAgICAgIHtmYWN0cy5tYXAoZmFjdCA9PiA8bGkgY2xhc3M9XCJtZC1zb3VyY2VfX2ZhY3RcIj57ZmFjdH08L2xpPil9XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgKVxyXG5cclxuICAgIC8qIEZpbmlzaCByZW5kZXJpbmcgd2l0aCBhbmltYXRpb24gKi9cclxuICAgIHRoaXMuZWxfLmRhdGFzZXQubWRTdGF0ZSA9IFwiZG9uZVwiXHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hc3NldHMvamF2YXNjcmlwdHMvY29tcG9uZW50cy9NYXRlcmlhbC9Tb3VyY2UvUmVwb3NpdG9yeS5qc3giLCIvKlxyXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYtMjAxOCBNYXJ0aW4gRG9uYXRoIDxtYXJ0aW4uZG9uYXRoQHNxdWlkZnVuay5jb20+XHJcbiAqXHJcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcclxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG9cclxuICogZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGVcclxuICogcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yXHJcbiAqIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXHJcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XHJcbiAqXHJcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXHJcbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxyXG4gKlxyXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXHJcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxyXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OLUlORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXHJcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcclxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkdcclxuICogRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HU1xyXG4gKiBJTiBUSEUgU09GVFdBUkUuXHJcbiAqL1xyXG5cclxuaW1wb3J0IFRvZ2dsZSBmcm9tIFwiLi9UYWJzL1RvZ2dsZVwiXHJcblxyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqIE1vZHVsZVxyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgVG9nZ2xlXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Fzc2V0cy9qYXZhc2NyaXB0cy9jb21wb25lbnRzL01hdGVyaWFsL1RhYnMuanMiLCIvKlxyXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYtMjAxOCBNYXJ0aW4gRG9uYXRoIDxtYXJ0aW4uZG9uYXRoQHNxdWlkZnVuay5jb20+XHJcbiAqXHJcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcclxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG9cclxuICogZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGVcclxuICogcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yXHJcbiAqIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXHJcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XHJcbiAqXHJcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXHJcbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxyXG4gKlxyXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXHJcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxyXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OLUlORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXHJcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcclxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkdcclxuICogRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HU1xyXG4gKiBJTiBUSEUgU09GVFdBUkUuXHJcbiAqL1xyXG5cclxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiBDbGFzc1xyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb2dnbGUge1xyXG5cclxuICAvKipcclxuICAgKiBUb2dnbGUgdGFicyB2aXNpYmlsaXR5IGRlcGVuZGluZyBvbiBwYWdlIHktb2Zmc2V0XHJcbiAgICpcclxuICAgKiBAY29uc3RydWN0b3JcclxuICAgKlxyXG4gICAqIEBwcm9wZXJ0eSB7SFRNTEVsZW1lbnR9IGVsXyAtIENvbnRlbnQgY29udGFpbmVyXHJcbiAgICogQHByb3BlcnR5IHtudW1iZXJ9IG9mZnNldF8gLSBUb2dnbGUgcGFnZS15IG9mZnNldFxyXG4gICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gYWN0aXZlXyAtIFRhYnMgdmlzaWJpbGl0eVxyXG4gICAqXHJcbiAgICogQHBhcmFtIHsoc3RyaW5nfEhUTUxFbGVtZW50KX0gZWwgLSBTZWxlY3RvciBvciBIVE1MIGVsZW1lbnRcclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcihlbCkge1xyXG4gICAgY29uc3QgcmVmID0gKHR5cGVvZiBlbCA9PT0gXCJzdHJpbmdcIilcclxuICAgICAgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVsKVxyXG4gICAgICA6IGVsXHJcbiAgICBpZiAoIShyZWYgaW5zdGFuY2VvZiBOb2RlKSlcclxuICAgICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yXHJcbiAgICB0aGlzLmVsXyA9IHJlZlxyXG5cclxuICAgIC8qIEluaXRpYWxpemUgb2Zmc2V0IGFuZCBzdGF0ZSAqL1xyXG4gICAgdGhpcy5hY3RpdmVfID0gZmFsc2VcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFVwZGF0ZSB2aXNpYmlsaXR5XHJcbiAgICovXHJcbiAgdXBkYXRlKCkge1xyXG4gICAgY29uc3QgYWN0aXZlID0gd2luZG93LnBhZ2VZT2Zmc2V0ID49XHJcbiAgICAgIHRoaXMuZWxfLmNoaWxkcmVuWzBdLm9mZnNldFRvcCArICg1IC0gNDgpICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gVE9ETzogcXVpY2sgaGFjayB0byBlbmFibGUgc2FtZSBoYW5kbGluZyBmb3IgaGVyb1xyXG4gICAgaWYgKGFjdGl2ZSAhPT0gdGhpcy5hY3RpdmVfKVxyXG4gICAgICB0aGlzLmVsXy5kYXRhc2V0Lm1kU3RhdGUgPSAodGhpcy5hY3RpdmVfID0gYWN0aXZlKSA/IFwiaGlkZGVuXCIgOiBcIlwiXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXNldCB2aXNpYmlsaXR5XHJcbiAgICovXHJcbiAgcmVzZXQoKSB7XHJcbiAgICB0aGlzLmVsXy5kYXRhc2V0Lm1kU3RhdGUgPSBcIlwiXHJcbiAgICB0aGlzLmFjdGl2ZV8gPSBmYWxzZVxyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXNzZXRzL2phdmFzY3JpcHRzL2NvbXBvbmVudHMvTWF0ZXJpYWwvVGFicy9Ub2dnbGUuanMiLCJpbXBvcnQgcmVuZGVyIGZyb20gXCIuL1RhYmxlT2ZDb250ZW50cy9UYWJsZU9mQ29udGVudHNcIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIHJlbmRlclxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hc3NldHMvamF2YXNjcmlwdHMvY29tcG9uZW50cy9NYXRlcmlhbC9UYWJsZU9mQ29udGVudHMuanMiLCJjb25zdCB0b0xldmVsID0gKHRhZ05hbWUpID0+IHtcclxuICByZXR1cm4gdGFnTmFtZS5yZXBsYWNlKC9cXEQvZywnJyk7XHJcbn1cclxuXHJcbmNvbnN0IHRvSXRlbSA9IChlbCkgPT4ge1xyXG4gIHJldHVybiB7IGVsOiBlbCwgbGV2ZWw6IHRvTGV2ZWwoZWwudGFnTmFtZSksIGNoaWxkcmVuOiBbXSB9XHJcbn1cclxuXHJcbmNvbnN0IHRvSXRlbXMgPSAoZWxzKSA9PiB7XHJcbiAgcmV0dXJuIFtdLnJlZHVjZS5jYWxsKGVscywgKGl0ZW1zLCBlbCkgPT4gaXRlbXMuY29uY2F0KHRvSXRlbShlbCkpLCBbXSlcclxufVxyXG5cclxuY29uc3QgbmV4dFdpdGhMb3dlckxldmVsID0gKGl0ZW0sIGl0ZW1zKSA9PiB7XHJcbiAgaXRlbXMucmVkdWNlKClcclxufVxyXG5cclxuY29uc3QgdG9UT0MgPSAoaXRlbXMsIGlkeCA9IDApID0+IHtcclxuICBsZXQgcHJldmlvdXMgPSBudWxsXHJcbiAgbGV0IHRvYyA9IFtdXHJcbiAgZm9yIChsZXQgaSA9IGlkeDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBjb25zdCBpdGVtID0gaXRlbXNbaV1cclxuICAgIGlmIChwcmV2aW91cyA9PSBudWxsIHx8IGl0ZW0ubGV2ZWwgPT0gcHJldmlvdXMubGV2ZWwpIHtcclxuICAgICAgdG9jLnB1c2goaXRlbSlcclxuICAgICAgcHJldmlvdXMgPSBpdGVtXHJcbiAgICB9IGVsc2UgaWYgKGl0ZW0ubGV2ZWwgPiBwcmV2aW91cy5sZXZlbCkge1xyXG4gICAgICBwcmV2aW91cy5jaGlsZHJlbiA9IHRvVE9DKGl0ZW1zLCBpICsgMSlcclxuICAgICAgaSArPSBwcmV2aW91cy5jaGlsZHJlbi5sZW5ndGhcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiB0b2NcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHRvY1xyXG59XHJcblxyXG5jb25zdCByZW5kZXIgPSAoZWwpID0+IHtcclxuICBjb25zdCByZWYgPSAodHlwZW9mIGVsID09PSBcInN0cmluZ1wiKVxyXG4gICAgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVsKVxyXG4gICAgOiBlbFxyXG4gIGlmICghKHJlZiBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSlcclxuICAgIHJldHVyblxyXG5cclxuICBjb25zdCBlbHMgICA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJoMiwgaDMsIGg0LCBoNSwgaDZcIik7XHJcbiAgY29uc3QgaXRlbXMgPSB0b0l0ZW1zKGVscylcclxuICBjb25zdCB0b2MgPSB0b1RPQyhpdGVtcylcclxuICBpZiAodG9jLmxlbmd0aCA9PSAwKSB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICByZWYuYXBwZW5kQ2hpbGQoPGxhYmVsIGNsYXNzPVwibWQtbmF2X190aXRsZVwiIGZvcj1cIl9fdG9jXCI+VGFibGUgb2YgY29udGVudHM8L2xhYmVsPilcclxuICBjb25zdCBsaXN0ID0gPHVsIGNsYXNzPVwibWQtbmF2X19saXN0XCIgZGF0YS1tZC1zY3JvbGxmaXg+PC91bD5cclxuICByZWYuYXBwZW5kQ2hpbGQobGlzdClcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IHRvYy5sZW5ndGg7IGkrKykge1xyXG4gICAgY29uc3QgdG9jSXRlbSA9IHRvY1tpXVxyXG4gICAgbGlzdC5hcHBlbmRDaGlsZChUb2NJdGVtKHRvY0l0ZW0pKVxyXG4gIH1cclxufVxyXG5cclxuY29uc3QgVG9jSXRlbSA9ICh0b2NJdGVtKSA9PiAoXHJcbiAgPGxpIGNsYXNzPVwibWQtbmF2X19pdGVtXCI+XHJcbiAgICA8YSBocmVmPXtcIiNcIiArIHRvY0l0ZW0uZWwuaWR9IHRpdGxlPXt0b2NJdGVtLmVsLmlkfSBjbGFzcz1cIm1kLW5hdl9fbGlua1wiPlxyXG4gICAgICAgIHt0b2NJdGVtLmVsLmlubmVySFRNTH1cclxuICAgIDwvYT5cclxuXHJcbiAgICB7dG9jSXRlbS5jaGlsZHJlbi5sZW5ndGggPiAwICYmIChcclxuICAgICAgPG5hdiBjbGFzcz1cIm1kLW5hdlwiPlxyXG4gICAgICAgIDx1bCBjbGFzcz1cIm1kLW5hdl9fbGlzdFwiPlxyXG4gICAgICAgICAge3RvY0l0ZW0uY2hpbGRyZW4ubWFwKGNoaWxkID0+IFRvY0l0ZW0oY2hpbGQpKX1cclxuICAgICAgICA8L3VsPlxyXG4gICAgICA8L25hdj5cclxuICAgICl9XHJcbiAgPC9saT5cclxuKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hc3NldHMvamF2YXNjcmlwdHMvY29tcG9uZW50cy9NYXRlcmlhbC9UYWJsZU9mQ29udGVudHMvVGFibGVPZkNvbnRlbnRzLmpzeCJdLCJzb3VyY2VSb290IjoiIn0=