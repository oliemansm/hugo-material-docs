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

/***/ })
/******/ ])));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYjVkNDcxYjMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qYXZhc2NyaXB0cy9wcm92aWRlcnMvanN4LmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3VuZmV0Y2gvZGlzdC91bmZldGNoLmVzLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9hbWQtb3B0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2phdmFzY3JpcHRzL2NvbXBvbmVudHMvTWF0ZXJpYWwvRXZlbnQvTGlzdGVuZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qYXZhc2NyaXB0cy9hcHBsaWNhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ltYWdlcy9pY29ucy9iaXRidWNrZXQuc3ZnIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaW1hZ2VzL2ljb25zL2dpdGh1Yi5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pbWFnZXMvaWNvbnMvZ2l0bGFiLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3N0eWxlc2hlZXRzL2FwcGxpY2F0aW9uLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9zdHlsZXNoZWV0cy9hcHBsaWNhdGlvbi1wYWxldHRlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2N1c3RvbS1ldmVudC1wb2x5ZmlsbC9wb2x5ZmlsbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdW5mZXRjaC9wb2x5ZmlsbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJvbWlzZS1wb2x5ZmlsbC9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3RpbWVycy1icm93c2VyaWZ5L21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NldGltbWVkaWF0ZS9zZXRJbW1lZGlhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJvbWlzZS1wb2x5ZmlsbC9zcmMvZmluYWxseS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY2xpcGJvYXJkL2Rpc3QvY2xpcGJvYXJkLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Zhc3RjbGljay9saWIvZmFzdGNsaWNrLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvamF2YXNjcmlwdHMvY29tcG9uZW50cy9NYXRlcmlhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2phdmFzY3JpcHRzL2NvbXBvbmVudHMvTWF0ZXJpYWwvRXZlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qYXZhc2NyaXB0cy9jb21wb25lbnRzL01hdGVyaWFsL0V2ZW50L01hdGNoTWVkaWEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qYXZhc2NyaXB0cy9jb21wb25lbnRzL01hdGVyaWFsL0hlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2phdmFzY3JpcHRzL2NvbXBvbmVudHMvTWF0ZXJpYWwvSGVhZGVyL1NoYWRvdy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2phdmFzY3JpcHRzL2NvbXBvbmVudHMvTWF0ZXJpYWwvSGVhZGVyL1RpdGxlLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvamF2YXNjcmlwdHMvY29tcG9uZW50cy9NYXRlcmlhbC9OYXYuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qYXZhc2NyaXB0cy9jb21wb25lbnRzL01hdGVyaWFsL05hdi9CbHVyLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvamF2YXNjcmlwdHMvY29tcG9uZW50cy9NYXRlcmlhbC9OYXYvQ29sbGFwc2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qYXZhc2NyaXB0cy9jb21wb25lbnRzL01hdGVyaWFsL05hdi9TY3JvbGxpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qYXZhc2NyaXB0cy9jb21wb25lbnRzL01hdGVyaWFsL1NlYXJjaC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2phdmFzY3JpcHRzL2NvbXBvbmVudHMvTWF0ZXJpYWwvU2VhcmNoL0xvY2suanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qYXZhc2NyaXB0cy9jb21wb25lbnRzL01hdGVyaWFsL1NlYXJjaC9SZXN1bHQuanN4Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9lc2NhcGUtc3RyaW5nLXJlZ2V4cC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbHVuci9sdW5yLmpzLWV4cG9zZWQiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2x1bnIvbHVuci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2phdmFzY3JpcHRzL2NvbXBvbmVudHMvTWF0ZXJpYWwvU2lkZWJhci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2phdmFzY3JpcHRzL2NvbXBvbmVudHMvTWF0ZXJpYWwvU2lkZWJhci9Qb3NpdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2phdmFzY3JpcHRzL2NvbXBvbmVudHMvTWF0ZXJpYWwvU291cmNlLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvamF2YXNjcmlwdHMvY29tcG9uZW50cy9NYXRlcmlhbC9Tb3VyY2UvQWRhcHRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2phdmFzY3JpcHRzL2NvbXBvbmVudHMvTWF0ZXJpYWwvU291cmNlL0FkYXB0ZXIvR2l0SHViLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvamF2YXNjcmlwdHMvY29tcG9uZW50cy9NYXRlcmlhbC9Tb3VyY2UvQWRhcHRlci9BYnN0cmFjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvanMtY29va2llL3NyYy9qcy5jb29raWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qYXZhc2NyaXB0cy9jb21wb25lbnRzL01hdGVyaWFsL1NvdXJjZS9SZXBvc2l0b3J5LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2phdmFzY3JpcHRzL2NvbXBvbmVudHMvTWF0ZXJpYWwvVGFicy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2phdmFzY3JpcHRzL2NvbXBvbmVudHMvTWF0ZXJpYWwvVGFicy9Ub2dnbGUuanMiXSwibmFtZXMiOlsiY3JlYXRlRWxlbWVudCIsInRhZyIsInByb3BlcnRpZXMiLCJlbCIsImRvY3VtZW50IiwiQXJyYXkiLCJwcm90b3R5cGUiLCJmb3JFYWNoIiwiY2FsbCIsIk9iamVjdCIsImtleXMiLCJzZXRBdHRyaWJ1dGUiLCJhdHRyIiwiaXRlcmF0ZUNoaWxkTm9kZXMiLCJub2RlcyIsIm5vZGUiLCJ0ZXh0Q29udGVudCIsImlzQXJyYXkiLCJfX2h0bWwiLCJpbm5lckhUTUwiLCJOb2RlIiwiYXBwZW5kQ2hpbGQiLCJjaGlsZHJlbiIsImciLCJGdW5jdGlvbiIsImV2YWwiLCJlIiwid2luZG93IiwibW9kdWxlIiwiZXhwb3J0cyIsImluZGV4IiwiZmV0Y2giLCJiaW5kIiwidXJsIiwib3B0aW9ucyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicmVxdWVzdCIsIlhNTEh0dHBSZXF1ZXN0Iiwib3BlbiIsIm1ldGhvZCIsImkiLCJoZWFkZXJzIiwic2V0UmVxdWVzdEhlYWRlciIsIndpdGhDcmVkZW50aWFscyIsImNyZWRlbnRpYWxzIiwib25sb2FkIiwicmVzcG9uc2UiLCJvbmVycm9yIiwic2VuZCIsImJvZHkiLCJhbGwiLCJoZWFkZXIiLCJnZXRBbGxSZXNwb25zZUhlYWRlcnMiLCJyZXBsYWNlIiwibSIsImtleSIsInZhbHVlIiwicHVzaCIsInRvTG93ZXJDYXNlIiwib2siLCJzdGF0dXMiLCJzdGF0dXNUZXh0IiwicmVzcG9uc2VVUkwiLCJjbG9uZSIsInRleHQiLCJyZXNwb25zZVRleHQiLCJqc29uIiwidGhlbiIsIkpTT04iLCJwYXJzZSIsImJsb2IiLCJCbG9iIiwiZW50cmllcyIsImdldCIsIm4iLCJoYXMiLCJMaXN0ZW5lciIsImVscyIsImV2ZW50cyIsImhhbmRsZXIiLCJlbHNfIiwic2xpY2UiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY29uY2F0IiwiaGFuZGxlcl8iLCJ1cGRhdGUiLCJldmVudHNfIiwidXBkYXRlXyIsImV2IiwibGlzdGVuIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50Iiwic2V0dXAiLCJ1bmxpc3RlbiIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJyZXNldCIsInRyYW5zbGF0ZSIsIm1ldGEiLCJnZXRFbGVtZW50c0J5TmFtZSIsIkhUTUxNZXRhRWxlbWVudCIsIlJlZmVyZW5jZUVycm9yIiwiY29udGVudCIsImluaXRpYWxpemUiLCJjb25maWciLCJNYXRlcmlhbCIsIkV2ZW50IiwiSFRNTEVsZW1lbnQiLCJGYXN0Q2xpY2siLCJhdHRhY2giLCJNb2Rlcm5penIiLCJhZGRUZXN0IiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwibWF0Y2giLCJ0YWJsZXMiLCJ3cmFwIiwidGFibGUiLCJuZXh0U2libGluZyIsInBhcmVudE5vZGUiLCJpbnNlcnRCZWZvcmUiLCJDbGlwYm9hcmQiLCJpc1N1cHBvcnRlZCIsImJsb2NrcyIsImJsb2NrIiwiaWQiLCJidXR0b24iLCJwYXJlbnQiLCJjb3B5Iiwib24iLCJtZXNzYWdlIiwiYWN0aW9uIiwidHJpZ2dlciIsInF1ZXJ5U2VsZWN0b3IiLCJjbGVhclNlbGVjdGlvbiIsImRhdGFzZXQiLCJtZFRpbWVyIiwiY2xlYXJUaW1lb3V0IiwicGFyc2VJbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJzZXRUaW1lb3V0IiwicmVtb3ZlIiwidG9TdHJpbmciLCJkZXRhaWxzIiwic3VtbWFyeSIsInRhcmdldCIsImhhc0F0dHJpYnV0ZSIsInJlbW92ZUF0dHJpYnV0ZSIsImxvY2F0aW9uIiwiaGFzaCIsImdldEVsZW1lbnRCeUlkIiwic3Vic3RyaW5nIiwiSFRNTERldGFpbHNFbGVtZW50IiwibG9jIiwiaW9zIiwic2Nyb2xsYWJsZSIsIml0ZW0iLCJ0b3AiLCJzY3JvbGxUb3AiLCJvZmZzZXRIZWlnaHQiLCJzY3JvbGxIZWlnaHQiLCJIZWFkZXIiLCJTaGFkb3ciLCJUaXRsZSIsIlRhYnMiLCJUb2dnbGUiLCJNYXRjaE1lZGlhIiwiU2lkZWJhciIsIlBvc2l0aW9uIiwiTmF2IiwiQmx1ciIsImNvbGxhcHNpYmxlcyIsImNvbGxhcHNlIiwicHJldmlvdXNFbGVtZW50U2libGluZyIsIkNvbGxhcHNlIiwiU2Nyb2xsaW5nIiwiU2VhcmNoIiwiTG9jayIsIlJlc3VsdCIsImJhc2UiLCJkYXRhIiwibWFwIiwiZG9jIiwicGVybWFsaW5rIiwicXVlcnkiLCJIVE1MSW5wdXRFbGVtZW50IiwiZm9jdXMiLCJ0b2dnbGUiLCJjaGVja2VkIiwiZGlzcGF0Y2hFdmVudCIsIkN1c3RvbUV2ZW50IiwibWV0YUtleSIsImN0cmxLZXkiLCJrZXlDb2RlIiwiYWN0aXZlRWxlbWVudCIsInByZXZlbnREZWZhdWx0IiwiSFRNTExpbmtFbGVtZW50IiwiZ2V0QXR0cmlidXRlIiwiYmx1ciIsImluZGV4T2YiLCJsaW5rcyIsImZpbmQiLCJsaW5rIiwibWRTdGF0ZSIsIk1hdGgiLCJtYXgiLCJsZW5ndGgiLCJzdG9wUHJvcGFnYXRpb24iLCJmb3JtIiwibGFiZWxzIiwibGFiZWwiLCJ0YWJJbmRleCIsIkhUTUxBbmNob3JFbGVtZW50IiwibWRTb3VyY2UiLCJTb3VyY2UiLCJBZGFwdGVyIiwiR2l0SHViIiwic291cmNlcyIsIlJlcG9zaXRvcnkiLCJzb3VyY2UiLCJmYWN0cyIsImFwcCIsImNlIiwiY2FuY2VsYWJsZSIsImRlZmF1bHRQcmV2ZW50ZWQiLCJFcnJvciIsInBhcmFtcyIsImV2dCIsIm9yaWdQcmV2ZW50IiwiYnViYmxlcyIsImRldGFpbCIsInVuZGVmaW5lZCIsImNyZWF0ZUV2ZW50IiwiaW5pdEN1c3RvbUV2ZW50IiwiZGVmaW5lUHJvcGVydHkiLCJyZXF1aXJlIiwiZGVmYXVsdCIsInNldFRpbWVvdXRGdW5jIiwibm9vcCIsImZuIiwidGhpc0FyZyIsImFwcGx5IiwiYXJndW1lbnRzIiwiVHlwZUVycm9yIiwiX3N0YXRlIiwiX2hhbmRsZWQiLCJfdmFsdWUiLCJfZGVmZXJyZWRzIiwiZG9SZXNvbHZlIiwiaGFuZGxlIiwic2VsZiIsImRlZmVycmVkIiwiX2ltbWVkaWF0ZUZuIiwiY2IiLCJvbkZ1bGZpbGxlZCIsIm9uUmVqZWN0ZWQiLCJwcm9taXNlIiwicmV0IiwibmV3VmFsdWUiLCJmaW5hbGUiLCJfdW5oYW5kbGVkUmVqZWN0aW9uRm4iLCJsZW4iLCJIYW5kbGVyIiwiZG9uZSIsInJlYXNvbiIsImV4IiwicHJvbSIsImNvbnN0cnVjdG9yIiwicHJvbWlzZUZpbmFsbHkiLCJhcnIiLCJhcmdzIiwicmVtYWluaW5nIiwicmVzIiwidmFsIiwicmFjZSIsInZhbHVlcyIsInNldEltbWVkaWF0ZSIsImVyciIsImNvbnNvbGUiLCJ3YXJuIiwic2NvcGUiLCJnbG9iYWwiLCJUaW1lb3V0Iiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwidGltZW91dCIsImNsb3NlIiwiY2xlYXJGbiIsIl9pZCIsIl9jbGVhckZuIiwidW5yZWYiLCJyZWYiLCJlbnJvbGwiLCJtc2VjcyIsIl9pZGxlVGltZW91dElkIiwiX2lkbGVUaW1lb3V0IiwidW5lbnJvbGwiLCJfdW5yZWZBY3RpdmUiLCJhY3RpdmUiLCJvblRpbWVvdXQiLCJfb25UaW1lb3V0IiwiY2xlYXJJbW1lZGlhdGUiLCJuZXh0SGFuZGxlIiwidGFza3NCeUhhbmRsZSIsImN1cnJlbnRseVJ1bm5pbmdBVGFzayIsInJlZ2lzdGVySW1tZWRpYXRlIiwiY2FsbGJhY2siLCJ0YXNrIiwicnVuIiwicnVuSWZQcmVzZW50IiwiaW5zdGFsbE5leHRUaWNrSW1wbGVtZW50YXRpb24iLCJwcm9jZXNzIiwibmV4dFRpY2siLCJjYW5Vc2VQb3N0TWVzc2FnZSIsInBvc3RNZXNzYWdlIiwiaW1wb3J0U2NyaXB0cyIsInBvc3RNZXNzYWdlSXNBc3luY2hyb25vdXMiLCJvbGRPbk1lc3NhZ2UiLCJvbm1lc3NhZ2UiLCJpbnN0YWxsUG9zdE1lc3NhZ2VJbXBsZW1lbnRhdGlvbiIsIm1lc3NhZ2VQcmVmaXgiLCJyYW5kb20iLCJvbkdsb2JhbE1lc3NhZ2UiLCJhdHRhY2hFdmVudCIsImluc3RhbGxNZXNzYWdlQ2hhbm5lbEltcGxlbWVudGF0aW9uIiwiY2hhbm5lbCIsIk1lc3NhZ2VDaGFubmVsIiwicG9ydDEiLCJwb3J0MiIsImluc3RhbGxSZWFkeVN0YXRlQ2hhbmdlSW1wbGVtZW50YXRpb24iLCJodG1sIiwiZG9jdW1lbnRFbGVtZW50Iiwic2NyaXB0Iiwib25yZWFkeXN0YXRlY2hhbmdlIiwicmVtb3ZlQ2hpbGQiLCJpbnN0YWxsU2V0VGltZW91dEltcGxlbWVudGF0aW9uIiwiYXR0YWNoVG8iLCJnZXRQcm90b3R5cGVPZiIsImNhY2hlZFNldFRpbWVvdXQiLCJjYWNoZWRDbGVhclRpbWVvdXQiLCJkZWZhdWx0U2V0VGltb3V0IiwiZGVmYXVsdENsZWFyVGltZW91dCIsInJ1blRpbWVvdXQiLCJmdW4iLCJydW5DbGVhclRpbWVvdXQiLCJtYXJrZXIiLCJxdWV1ZSIsImRyYWluaW5nIiwiY3VycmVudFF1ZXVlIiwicXVldWVJbmRleCIsImNsZWFuVXBOZXh0VGljayIsImRyYWluUXVldWUiLCJJdGVtIiwiYXJyYXkiLCJ0aXRsZSIsImJyb3dzZXIiLCJlbnYiLCJhcmd2IiwidmVyc2lvbiIsInZlcnNpb25zIiwiYWRkTGlzdGVuZXIiLCJvbmNlIiwib2ZmIiwicmVtb3ZlTGlzdGVuZXIiLCJyZW1vdmVBbGxMaXN0ZW5lcnMiLCJlbWl0IiwicHJlcGVuZExpc3RlbmVyIiwicHJlcGVuZE9uY2VMaXN0ZW5lciIsImxpc3RlbmVycyIsIm5hbWUiLCJiaW5kaW5nIiwiY3dkIiwiY2hkaXIiLCJkaXIiLCJ1bWFzayIsImZpbmFsbHlDb25zdHJ1Y3RvciIsIndlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwicm9vdCIsImZhY3RvcnkiLCJkZWZpbmUiLCJtb2R1bGVzIiwiaW5zdGFsbGVkTW9kdWxlcyIsIl9fd2VicGFja19yZXF1aXJlX18iLCJtb2R1bGVJZCIsImwiLCJjIiwiZCIsImdldHRlciIsIm8iLCJjb25maWd1cmFibGUiLCJlbnVtZXJhYmxlIiwiX19lc01vZHVsZSIsImdldERlZmF1bHQiLCJnZXRNb2R1bGVFeHBvcnRzIiwib2JqZWN0IiwicHJvcGVydHkiLCJoYXNPd25Qcm9wZXJ0eSIsInAiLCJzIiwiX19XRUJQQUNLX0FNRF9ERUZJTkVfRkFDVE9SWV9fIiwiX19XRUJQQUNLX0FNRF9ERUZJTkVfQVJSQVlfXyIsIl9fV0VCUEFDS19BTURfREVGSU5FX1JFU1VMVF9fIiwibW9kIiwic2VsZWN0IiwiY2xpcGJvYXJkQWN0aW9uIiwiX3NlbGVjdCIsIl9zZWxlY3QyIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsIm9iaiIsIl90eXBlb2YiLCJTeW1ib2wiLCJpdGVyYXRvciIsIl9jbGFzc0NhbGxDaGVjayIsImluc3RhbmNlIiwiQ29uc3RydWN0b3IiLCJfY3JlYXRlQ2xhc3MiLCJkZWZpbmVQcm9wZXJ0aWVzIiwicHJvcHMiLCJkZXNjcmlwdG9yIiwid3JpdGFibGUiLCJwcm90b1Byb3BzIiwic3RhdGljUHJvcHMiLCJDbGlwYm9hcmRBY3Rpb24iLCJyZXNvbHZlT3B0aW9ucyIsImluaXRTZWxlY3Rpb24iLCJjb250YWluZXIiLCJlbWl0dGVyIiwic2VsZWN0ZWRUZXh0Iiwic2VsZWN0RmFrZSIsInNlbGVjdFRhcmdldCIsIl90aGlzIiwiaXNSVEwiLCJyZW1vdmVGYWtlIiwiZmFrZUhhbmRsZXJDYWxsYmFjayIsImZha2VIYW5kbGVyIiwiZmFrZUVsZW0iLCJzdHlsZSIsImZvbnRTaXplIiwiYm9yZGVyIiwicGFkZGluZyIsIm1hcmdpbiIsInBvc2l0aW9uIiwieVBvc2l0aW9uIiwicGFnZVlPZmZzZXQiLCJjb3B5VGV4dCIsInN1Y2NlZWRlZCIsImV4ZWNDb21tYW5kIiwiaGFuZGxlUmVzdWx0IiwiZ2V0U2VsZWN0aW9uIiwicmVtb3ZlQWxsUmFuZ2VzIiwiZGVzdHJveSIsInNldCIsIl9hY3Rpb24iLCJub2RlVHlwZSIsIl90YXJnZXQiLCJpcyIsImRlbGVnYXRlIiwidHlwZSIsInN0cmluZyIsImxpc3Rlbk5vZGUiLCJub2RlTGlzdCIsImxpc3Rlbk5vZGVMaXN0IiwibGlzdGVuU2VsZWN0b3IiLCJzZWxlY3RvciIsIkUiLCJjdHgiLCJsaXN0ZW5lciIsIl8iLCJldnRBcnIiLCJldnRzIiwibGl2ZUV2ZW50cyIsInRpbnlFbWl0dGVyIiwiZ29vZExpc3RlbmVyIiwiY2xpcGJvYXJkIiwiX2NsaXBib2FyZEFjdGlvbiIsIl90aW55RW1pdHRlciIsIl9nb29kTGlzdGVuZXIiLCJfY2xpcGJvYXJkQWN0aW9uMiIsIl90aW55RW1pdHRlcjIiLCJfZ29vZExpc3RlbmVyMiIsIl9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuIiwiX2luaGVyaXRzIiwic3ViQ2xhc3MiLCJzdXBlckNsYXNzIiwiY3JlYXRlIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJfRW1pdHRlciIsImxpc3RlbkNsaWNrIiwiZGVmYXVsdEFjdGlvbiIsImRlZmF1bHRUYXJnZXQiLCJkZWZhdWx0VGV4dCIsIl90aGlzMiIsIm9uQ2xpY2siLCJkZWxlZ2F0ZVRhcmdldCIsImN1cnJlbnRUYXJnZXQiLCJnZXRBdHRyaWJ1dGVWYWx1ZSIsImFjdGlvbnMiLCJzdXBwb3J0IiwicXVlcnlDb21tYW5kU3VwcG9ydGVkIiwic3VmZml4IiwiZWxlbWVudCIsImF0dHJpYnV0ZSIsIkRPQ1VNRU5UX05PREVfVFlQRSIsIkVsZW1lbnQiLCJtYXRjaGVzIiwicHJvdG8iLCJtYXRjaGVzU2VsZWN0b3IiLCJtb3pNYXRjaGVzU2VsZWN0b3IiLCJtc01hdGNoZXNTZWxlY3RvciIsIm9NYXRjaGVzU2VsZWN0b3IiLCJ3ZWJraXRNYXRjaGVzU2VsZWN0b3IiLCJjbG9zZXN0IiwiX2RlbGVnYXRlIiwidXNlQ2FwdHVyZSIsImxpc3RlbmVyRm4iLCJlbGVtZW50cyIsIlN0cmluZyIsIm5vZGVOYW1lIiwiaXNSZWFkT25seSIsInNldFNlbGVjdGlvblJhbmdlIiwic2VsZWN0aW9uIiwicmFuZ2UiLCJjcmVhdGVSYW5nZSIsInNlbGVjdE5vZGVDb250ZW50cyIsImFkZFJhbmdlIiwid2VicGFja1BvbHlmaWxsIiwiZGVwcmVjYXRlIiwicGF0aHMiLCJsYXllciIsIm9sZE9uQ2xpY2siLCJ0cmFja2luZ0NsaWNrIiwidHJhY2tpbmdDbGlja1N0YXJ0IiwidGFyZ2V0RWxlbWVudCIsInRvdWNoU3RhcnRYIiwidG91Y2hTdGFydFkiLCJsYXN0VG91Y2hJZGVudGlmaWVyIiwidG91Y2hCb3VuZGFyeSIsInRhcERlbGF5IiwidGFwVGltZW91dCIsIm5vdE5lZWRlZCIsImNvbnRleHQiLCJtZXRob2RzIiwiZGV2aWNlSXNBbmRyb2lkIiwib25Nb3VzZSIsIm9uVG91Y2hTdGFydCIsIm9uVG91Y2hNb3ZlIiwib25Ub3VjaEVuZCIsIm9uVG91Y2hDYW5jZWwiLCJzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24iLCJjYXB0dXJlIiwicm12IiwiaGlqYWNrZWQiLCJhZHYiLCJwcm9wYWdhdGlvblN0b3BwZWQiLCJvbmNsaWNrIiwiZGV2aWNlSXNXaW5kb3dzUGhvbmUiLCJkZXZpY2VJc0lPUyIsInRlc3QiLCJkZXZpY2VJc0lPUzQiLCJkZXZpY2VJc0lPU1dpdGhCYWRUYXJnZXQiLCJkZXZpY2VJc0JsYWNrQmVycnkxMCIsIm5lZWRzQ2xpY2siLCJkaXNhYmxlZCIsImNsYXNzTmFtZSIsIm5lZWRzRm9jdXMiLCJyZWFkT25seSIsInNlbmRDbGljayIsImNsaWNrRXZlbnQiLCJ0b3VjaCIsImNoYW5nZWRUb3VjaGVzIiwiaW5pdE1vdXNlRXZlbnQiLCJkZXRlcm1pbmVFdmVudFR5cGUiLCJzY3JlZW5YIiwic2NyZWVuWSIsImNsaWVudFgiLCJjbGllbnRZIiwiZm9yd2FyZGVkVG91Y2hFdmVudCIsInRhZ05hbWUiLCJ1cGRhdGVTY3JvbGxQYXJlbnQiLCJzY3JvbGxQYXJlbnQiLCJwYXJlbnRFbGVtZW50IiwiZmFzdENsaWNrU2Nyb2xsUGFyZW50IiwiY29udGFpbnMiLCJmYXN0Q2xpY2tMYXN0U2Nyb2xsVG9wIiwiZ2V0VGFyZ2V0RWxlbWVudEZyb21FdmVudFRhcmdldCIsImV2ZW50VGFyZ2V0IiwiVEVYVF9OT0RFIiwidGFyZ2V0VG91Y2hlcyIsInJhbmdlQ291bnQiLCJpc0NvbGxhcHNlZCIsImlkZW50aWZpZXIiLCJ0aW1lU3RhbXAiLCJwYWdlWCIsInBhZ2VZIiwibGFzdENsaWNrVGltZSIsInRvdWNoSGFzTW92ZWQiLCJib3VuZGFyeSIsImFicyIsImZpbmRDb250cm9sIiwibGFiZWxFbGVtZW50IiwiY29udHJvbCIsImh0bWxGb3IiLCJmb3JFbGVtZW50IiwidGFyZ2V0VGFnTmFtZSIsImNhbmNlbE5leHRDbGljayIsImVsZW1lbnRGcm9tUG9pbnQiLCJwYWdlWE9mZnNldCIsInBlcm1pdHRlZCIsIm1ldGFWaWV3cG9ydCIsImNocm9tZVZlcnNpb24iLCJibGFja2JlcnJ5VmVyc2lvbiIsImZpcmVmb3hWZXJzaW9uIiwib250b3VjaHN0YXJ0IiwiZXhlYyIsInNjcm9sbFdpZHRoIiwib3V0ZXJXaWR0aCIsIm1zVG91Y2hBY3Rpb24iLCJ0b3VjaEFjdGlvbiIsIm1xIiwibWVkaWEiLCJtYXRjaE1lZGlhIiwiZWxfIiwiaGVhZGVyXyIsImhlaWdodF8iLCJhY3RpdmVfIiwiY3VycmVudCIsIkhUTUxIZWFkaW5nRWxlbWVudCIsIndpZHRoIiwib2Zmc2V0V2lkdGgiLCJvZmZzZXRUb3AiLCJpbmRleF8iLCJvZmZzZXRfIiwiZGlyXyIsImFuY2hvcnNfIiwicmVkdWNlIiwiYW5jaG9ycyIsIm9mZnNldCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImhlaWdodCIsImRpc3BsYXkiLCJvdmVyZmxvdyIsIm1heEhlaWdodCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImVuZCIsIm1haW4iLCJ3ZWJraXRPdmVyZmxvd1Njcm9sbGluZyIsInRvZ2dsZXMiLCJwYW5lIiwibmV4dEVsZW1lbnRTaWJsaW5nIiwibG9ja18iLCJzY3JvbGxUbyIsImVzY2FwZUhUTUwiLCJjcmVhdGVUZXh0Tm9kZSIsInRydW5jYXRlIiwibGlzdCIsImRhdGFfIiwibWV0YV8iLCJsaXN0XyIsIm1lc3NhZ2VfIiwicGxhY2Vob2xkZXIiLCJub25lIiwib25lIiwib3RoZXIiLCJ0b2tlbml6ZXIiLCJsdW5yIiwic2VwYXJhdG9yIiwibGFuZ18iLCJzcGxpdCIsImZpbHRlciIsIkJvb2xlYW4iLCJsYW5nIiwidHJpbSIsImluaXQiLCJkb2NzXyIsImRvY3MiLCJwYXRoIiwiY29udGVudHMiLCJjaGFyIiwiTWFwIiwic3RhY2tfIiwiZmlsdGVycyIsInRyaW1tZXIiLCJzdG9wV29yZEZpbHRlciIsInBpcGVsaW5lIiwicmVzdWx0IiwidXNlIiwibXVsdGlMYW5ndWFnZSIsImZpZWxkIiwiYm9vc3QiLCJzcGxpY2UiLCJyZW5kZXIiLCJ2YWx1ZV8iLCJmaXJzdENoaWxkIiwidGVybSIsIndpbGRjYXJkIiwiUXVlcnkiLCJUUkFJTElORyIsIml0ZW1zIiwiUmVnRXhwIiwiaGlnaGxpZ2h0IiwidG9rZW4iLCJhcnRpY2xlIiwic2VjdGlvbnMiLCJzZWN0aW9uIiwic2hpZnQiLCJhbmNob3IiLCJldjIiLCJocmVmIiwic2l6ZSIsIm1hdGNoT3BlcmF0b3JzUmUiLCJzdHIiLCJidWlsZGVyIiwiQnVpbGRlciIsInN0ZW1tZXIiLCJzZWFyY2hQaXBlbGluZSIsImJ1aWxkIiwidXRpbHMiLCJhc1N0cmluZyIsIkZpZWxkUmVmIiwiZG9jUmVmIiwiZmllbGROYW1lIiwic3RyaW5nVmFsdWUiLCJfc3RyaW5nVmFsdWUiLCJqb2luZXIiLCJmcm9tU3RyaW5nIiwiZmllbGRSZWYiLCJTZXQiLCJjb21wbGV0ZSIsImludGVyc2VjdCIsInVuaW9uIiwiZW1wdHkiLCJhIiwiYiIsImludGVyc2VjdGlvbiIsImlkZiIsInBvc3RpbmciLCJkb2N1bWVudENvdW50IiwiZG9jdW1lbnRzV2l0aFRlcm0iLCJ4IiwibG9nIiwiVG9rZW4iLCJtZXRhZGF0YSIsInQiLCJ0b2tlbnMiLCJzbGljZUVuZCIsInNsaWNlU3RhcnQiLCJjaGFyQXQiLCJzbGljZUxlbmd0aCIsInRva2VuTWV0YWRhdGEiLCJQaXBlbGluZSIsIl9zdGFjayIsInJlZ2lzdGVyZWRGdW5jdGlvbnMiLCJyZWdpc3RlckZ1bmN0aW9uIiwid2FybklmRnVuY3Rpb25Ob3RSZWdpc3RlcmVkIiwiaXNSZWdpc3RlcmVkIiwibG9hZCIsInNlcmlhbGlzZWQiLCJmbk5hbWUiLCJmbnMiLCJhZnRlciIsImV4aXN0aW5nRm4iLCJuZXdGbiIsInBvcyIsImJlZm9yZSIsInN0YWNrTGVuZ3RoIiwibWVtbyIsImoiLCJrIiwicnVuU3RyaW5nIiwidG9KU09OIiwiVmVjdG9yIiwiX21hZ25pdHVkZSIsInBvc2l0aW9uRm9ySW5kZXgiLCJzdGFydCIsInBpdm90UG9pbnQiLCJmbG9vciIsInBpdm90SW5kZXgiLCJpbnNlcnQiLCJpbnNlcnRJZHgiLCJ1cHNlcnQiLCJtYWduaXR1ZGUiLCJzdW1PZlNxdWFyZXMiLCJlbGVtZW50c0xlbmd0aCIsInNxcnQiLCJkb3QiLCJvdGhlclZlY3RvciIsImRvdFByb2R1Y3QiLCJhTGVuIiwiYkxlbiIsImFWYWwiLCJiVmFsIiwic2ltaWxhcml0eSIsInRvQXJyYXkiLCJvdXRwdXQiLCJzdGVwMmxpc3QiLCJzdGVwM2xpc3QiLCJ2IiwiQyIsIlYiLCJtZ3IwIiwibWVxMSIsIm1ncjEiLCJzX3YiLCJyZV9tZ3IwIiwicmVfbWdyMSIsInJlX21lcTEiLCJyZV9zX3YiLCJyZV8xYSIsInJlMl8xYSIsInJlXzFiIiwicmUyXzFiIiwicmVfMWJfMiIsInJlMl8xYl8yIiwicmUzXzFiXzIiLCJyZTRfMWJfMiIsInJlXzFjIiwicmVfMiIsInJlXzMiLCJyZV80IiwicmUyXzQiLCJyZV81IiwicmVfNV8xIiwicmUzXzUiLCJwb3J0ZXJTdGVtbWVyIiwidyIsInN0ZW0iLCJmaXJzdGNoIiwicmUiLCJyZTIiLCJyZTMiLCJyZTQiLCJzdWJzdHIiLCJ0b1VwcGVyQ2FzZSIsImZwIiwiZ2VuZXJhdGVTdG9wV29yZEZpbHRlciIsInN0b3BXb3JkcyIsIndvcmRzIiwic3RvcFdvcmQiLCJUb2tlblNldCIsImZpbmFsIiwiZWRnZXMiLCJfbmV4dElkIiwiZnJvbUFycmF5IiwiZmluaXNoIiwiZnJvbUNsYXVzZSIsImNsYXVzZSIsImZyb21GdXp6eVN0cmluZyIsImVkaXREaXN0YW5jZSIsInN0YWNrIiwiZWRpdHNSZW1haW5pbmciLCJmcmFtZSIsInBvcCIsIm5vRWRpdE5vZGUiLCJkZWxldGlvbk5vZGUiLCJzdWJzdGl0dXRpb25Ob2RlIiwiaW5zZXJ0aW9uTm9kZSIsImNoYXJBIiwiY2hhckIiLCJ0cmFuc3Bvc2VOb2RlIiwibmV4dCIsInByZWZpeCIsImVkZ2UiLCJfc3RyIiwic29ydCIsInFOb2RlIiwicUVkZ2VzIiwicUxlbiIsIm5FZGdlcyIsIm5MZW4iLCJxIiwicUVkZ2UiLCJuRWRnZSIsInByZXZpb3VzV29yZCIsInVuY2hlY2tlZE5vZGVzIiwibWluaW1pemVkTm9kZXMiLCJ3b3JkIiwiY29tbW9uUHJlZml4IiwibWluaW1pemUiLCJjaGlsZCIsIm5leHROb2RlIiwiZG93blRvIiwiY2hpbGRLZXkiLCJJbmRleCIsImF0dHJzIiwiaW52ZXJ0ZWRJbmRleCIsImZpZWxkVmVjdG9ycyIsInRva2VuU2V0IiwiZmllbGRzIiwic2VhcmNoIiwicXVlcnlTdHJpbmciLCJwYXJzZXIiLCJRdWVyeVBhcnNlciIsIm1hdGNoaW5nRmllbGRzIiwicXVlcnlWZWN0b3JzIiwidGVybUZpZWxkQ2FjaGUiLCJyZXF1aXJlZE1hdGNoZXMiLCJwcm9oaWJpdGVkTWF0Y2hlcyIsImNsYXVzZXMiLCJ0ZXJtcyIsImNsYXVzZU1hdGNoZXMiLCJ1c2VQaXBlbGluZSIsInRlcm1Ub2tlblNldCIsImV4cGFuZGVkVGVybXMiLCJwcmVzZW5jZSIsIlJFUVVJUkVEIiwiZXhwYW5kZWRUZXJtIiwidGVybUluZGV4IiwiX2luZGV4IiwiZmllbGRQb3N0aW5nIiwibWF0Y2hpbmdEb2N1bWVudFJlZnMiLCJ0ZXJtRmllbGQiLCJtYXRjaGluZ0RvY3VtZW50c1NldCIsIlBST0hJQklURUQiLCJtYXRjaGluZ0RvY3VtZW50UmVmIiwibWF0Y2hpbmdGaWVsZFJlZiIsImZpZWxkTWF0Y2giLCJNYXRjaERhdGEiLCJhbGxSZXF1aXJlZE1hdGNoZXMiLCJhbGxQcm9oaWJpdGVkTWF0Y2hlcyIsIm1hdGNoaW5nRmllbGRSZWZzIiwicmVzdWx0cyIsImlzTmVnYXRlZCIsImZpZWxkVmVjdG9yIiwic2NvcmUiLCJkb2NNYXRjaCIsIm1hdGNoRGF0YSIsImNvbWJpbmUiLCJzZXJpYWxpemVkSW5kZXgiLCJzZXJpYWxpemVkVmVjdG9ycyIsInNlcmlhbGl6ZWRJbnZlcnRlZEluZGV4IiwidG9rZW5TZXRCdWlsZGVyIiwidHVwbGUiLCJfcmVmIiwiX2ZpZWxkcyIsIl9kb2N1bWVudHMiLCJmaWVsZFRlcm1GcmVxdWVuY2llcyIsImZpZWxkTGVuZ3RocyIsIl9iIiwiX2sxIiwibWV0YWRhdGFXaGl0ZWxpc3QiLCJhdHRyaWJ1dGVzIiwiUmFuZ2VFcnJvciIsIm51bWJlciIsImsxIiwiZXh0cmFjdG9yIiwiZmllbGRUZXJtcyIsIm1ldGFkYXRhS2V5IiwiY2FsY3VsYXRlQXZlcmFnZUZpZWxkTGVuZ3RocyIsImZpZWxkUmVmcyIsIm51bWJlck9mRmllbGRzIiwiYWNjdW11bGF0b3IiLCJkb2N1bWVudHNXaXRoRmllbGQiLCJhdmVyYWdlRmllbGRMZW5ndGgiLCJjcmVhdGVGaWVsZFZlY3RvcnMiLCJmaWVsZFJlZnNMZW5ndGgiLCJ0ZXJtSWRmQ2FjaGUiLCJmaWVsZExlbmd0aCIsInRlcm1GcmVxdWVuY2llcyIsInRlcm1zTGVuZ3RoIiwiZmllbGRCb29zdCIsImRvY0Jvb3N0IiwidGYiLCJzY29yZVdpdGhQcmVjaXNpb24iLCJyb3VuZCIsImNyZWF0ZVRva2VuU2V0IiwidW5zaGlmdCIsImNsb25lZE1ldGFkYXRhIiwibWV0YWRhdGFLZXlzIiwib3RoZXJNYXRjaERhdGEiLCJhbGxGaWVsZHMiLCJOT05FIiwiTEVBRElORyIsIk9QVElPTkFMIiwiUXVlcnlQYXJzZUVycm9yIiwiUXVlcnlMZXhlciIsImxleGVtZXMiLCJlc2NhcGVDaGFyUG9zaXRpb25zIiwic3RhdGUiLCJsZXhUZXh0Iiwic2xpY2VTdHJpbmciLCJzdWJTbGljZXMiLCJqb2luIiwiZXNjYXBlQ2hhcmFjdGVyIiwiRU9TIiwiaWdub3JlIiwiYmFja3VwIiwiYWNjZXB0RGlnaXRSdW4iLCJjaGFyQ29kZSIsImNoYXJDb2RlQXQiLCJtb3JlIiwiRklFTEQiLCJURVJNIiwiRURJVF9ESVNUQU5DRSIsIkJPT1NUIiwiUFJFU0VOQ0UiLCJsZXhGaWVsZCIsImxleGVyIiwibGV4VGVybSIsImxleEVkaXREaXN0YW5jZSIsImxleEJvb3N0IiwibGV4RU9TIiwidGVybVNlcGFyYXRvciIsImN1cnJlbnRDbGF1c2UiLCJsZXhlbWVJZHgiLCJwYXJzZUNsYXVzZSIsInBlZWtMZXhlbWUiLCJjb25zdW1lTGV4ZW1lIiwibGV4ZW1lIiwibmV4dENsYXVzZSIsImNvbXBsZXRlZENsYXVzZSIsInBhcnNlUHJlc2VuY2UiLCJwYXJzZUZpZWxkIiwicGFyc2VUZXJtIiwiZXJyb3JNZXNzYWdlIiwibmV4dExleGVtZSIsInBvc3NpYmxlRmllbGRzIiwiZiIsInBhcnNlRWRpdERpc3RhbmNlIiwicGFyc2VCb29zdCIsImlzTmFOIiwicGFyZW50XyIsInBhZF8iLCJnZXRDb21wdXRlZFN0eWxlIiwidmlzaWJsZSIsImlubmVySGVpZ2h0IiwiYm91bmRzIiwiYm90dG9tIiwiYmFzZV8iLCJ1c2VyIiwibmFtZV8iLCJmZXRjaF8iLCJwYWdpbmF0ZSIsInBhZ2UiLCJyZXBvIiwiZm9ybWF0XyIsInN0YXJnYXplcnNfY291bnQiLCJmb3Jrc19jb3VudCIsIkFic3RyYWN0Iiwic2FsdF8iLCJoYXNoXyIsImNhY2hlZCIsIkNvb2tpZXMiLCJnZXRKU09OIiwiZXhwaXJlcyIsInRvRml4ZWQiLCJyZWdpc3RlcmVkSW5Nb2R1bGVMb2FkZXIiLCJPbGRDb29raWVzIiwiYXBpIiwibm9Db25mbGljdCIsImV4dGVuZCIsImNvbnZlcnRlciIsImRlZmF1bHRzIiwiRGF0ZSIsInNldE1pbGxpc2Vjb25kcyIsImdldE1pbGxpc2Vjb25kcyIsInRvVVRDU3RyaW5nIiwic3RyaW5naWZ5Iiwid3JpdGUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJkZWNvZGVVUklDb21wb25lbnQiLCJlc2NhcGUiLCJzdHJpbmdpZmllZEF0dHJpYnV0ZXMiLCJhdHRyaWJ1dGVOYW1lIiwiY29va2llIiwiY29va2llcyIsInJkZWNvZGUiLCJwYXJ0cyIsInJlYWQiLCJ3aXRoQ29udmVydGVyIiwiZmFjdCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7OztBQzdEQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXNCQTs7OztBQUlBO2tCQUNlLFNBQVU7O0FBRXZCOzs7Ozs7Ozs7QUFTQUEsZUFYdUIseUJBV1RDLEdBWFMsRUFXSkMsVUFYSSxFQVdxQjtBQUMxQyxRQUFNQyxLQUFLQyxTQUFTSixhQUFULENBQXVCQyxHQUF2QixDQUFYOztBQUVBO0FBQ0EsUUFBSUMsVUFBSixFQUNFRyxNQUFNQyxTQUFOLENBQWdC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akIsQ0FBSixFQUNFLE1BQU0sSUFBSWtGLGNBQUosRUFBTjtBQUNGLFNBQUswZ0IsR0FBTCxHQUFXM1UsR0FBWDs7QUFFQTtBQUNBLFNBQUs4VSxPQUFMLEdBQWUsS0FBZjtBQUNEOztBQUVEOzs7OzttQkFHQTVoQixNLHFCQUFTO0FBQ1AsUUFBTXFOLFNBQVNqUixPQUFPa2EsV0FBUCxJQUNiLEtBQUttTCxHQUFMLENBQVMxbEIsUUFBVCxDQUFrQixDQUFsQixFQUFxQmttQixTQUFyQixJQUFrQyxJQUFJLEVBQXRDLENBREYsQ0FETyxDQUVxRTtBQUM1RSxRQUFJNVUsV0FBVyxLQUFLdVUsT0FBcEIsRUFDRSxLQUFLSCxHQUFMLENBQVN4ZSxPQUFULENBQWlCcUUsT0FBakIsR0FBMkIsQ0FBQyxLQUFLc2EsT0FBTCxHQUFldlUsTUFBaEIsSUFBMEIsUUFBMUIsR0FBcUMsRUFBaEU7QUFDSCxHOztBQUVEOzs7OzttQkFHQTNNLEssb0JBQVE7QUFDTixTQUFLK2dCLEdBQUwsQ0FBU3hlLE9BQVQsQ0FBaUJxRSxPQUFqQixHQUEyQixFQUEzQjtBQUNBLFNBQUtzYSxPQUFMLEdBQWUsS0FBZjtBQUNELEc7Ozs7O2tCQXpDa0I1YyxNIiwiZmlsZSI6ImphdmFzY3JpcHRzL2FwcGxpY2F0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgYjVkNDcxYjMiLCIvKlxyXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYtMjAxOCBNYXJ0aW4gRG9uYXRoIDxtYXJ0aW4uZG9uYXRoQHNxdWlkZnVuay5jb20+XHJcbiAqXHJcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcclxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG9cclxuICogZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGVcclxuICogcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yXHJcbiAqIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXHJcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XHJcbiAqXHJcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXHJcbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxyXG4gKlxyXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXHJcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxyXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OLUlORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXHJcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcclxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkdcclxuICogRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HU1xyXG4gKiBJTiBUSEUgU09GVFdBUkUuXHJcbiAqL1xyXG5cclxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiBNb2R1bGVcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG5cclxuLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZXJzY29yZS1kYW5nbGUgKi9cclxuZXhwb3J0IGRlZmF1bHQgLyogSlNYICovIHtcclxuXHJcbiAgLyoqXHJcbiAgICogQ3JlYXRlIGEgbmF0aXZlIERPTSBub2RlIGZyb20gSlNYJ3MgaW50ZXJtZWRpYXRlIHJlcHJlc2VudGF0aW9uXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gdGFnIC0gVGFnIG5hbWVcclxuICAgKiBAcGFyYW0gez9PYmplY3R9IHByb3BlcnRpZXMgLSBQcm9wZXJ0aWVzXHJcbiAgICogQHBhcmFtIHtBcnJheTxzdHJpbmcgfCBudW1iZXIgfCB7IF9faHRtbDogc3RyaW5nIH0gfCBBcnJheTxIVE1MRWxlbWVudD4+fVxyXG4gICAqICAgY2hpbGRyZW4gLSBDaGlsZCBub2Rlc1xyXG4gICAqIEByZXR1cm4ge0hUTUxFbGVtZW50fSBOYXRpdmUgRE9NIG5vZGVcclxuICAgKi9cclxuICBjcmVhdGVFbGVtZW50KHRhZywgcHJvcGVydGllcywgLi4uY2hpbGRyZW4pIHtcclxuICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpXHJcblxyXG4gICAgLyogU2V0IGFsbCBwcm9wZXJ0aWVzICovXHJcbiAgICBpZiAocHJvcGVydGllcylcclxuICAgICAgQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChPYmplY3Qua2V5cyhwcm9wZXJ0aWVzKSwgYXR0ciA9PiB7XHJcbiAgICAgICAgZWwuc2V0QXR0cmlidXRlKGF0dHIsIHByb3BlcnRpZXNbYXR0cl0pXHJcbiAgICAgIH0pXHJcblxyXG4gICAgLyogSXRlcmF0ZSBjaGlsZCBub2RlcyAqL1xyXG4gICAgY29uc3QgaXRlcmF0ZUNoaWxkTm9kZXMgPSBub2RlcyA9PiB7XHJcbiAgICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwobm9kZXMsIG5vZGUgPT4ge1xyXG5cclxuICAgICAgICAvKiBEaXJlY3RseSBhcHBlbmQgdGV4dCBjb250ZW50ICovXHJcbiAgICAgICAgaWYgKHR5cGVvZiBub2RlID09PSBcInN0cmluZ1wiIHx8XHJcbiAgICAgICAgICAgIHR5cGVvZiBub2RlID09PSBcIm51bWJlclwiKSB7XHJcbiAgICAgICAgICBlbC50ZXh0Q29udGVudCArPSBub2RlXHJcblxyXG4gICAgICAgIC8qIFJlY3Vyc2UsIGlmIHdlIGdvdCBhbiBhcnJheSAqL1xyXG4gICAgICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShub2RlKSkge1xyXG4gICAgICAgICAgaXRlcmF0ZUNoaWxkTm9kZXMobm9kZSlcclxuXHJcbiAgICAgICAgLyogQXBwZW5kIHJhdyBIVE1MICovXHJcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2Ygbm9kZS5fX2h0bWwgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgIGVsLmlubmVySFRNTCArPSBub2RlLl9faHRtbFxyXG5cclxuICAgICAgICAvKiBBcHBlbmQgcmVndWxhciBub2RlcyAqL1xyXG4gICAgICAgIH0gZWxzZSBpZiAobm9kZSBpbnN0YW5jZW9mIE5vZGUpIHtcclxuICAgICAgICAgIGVsLmFwcGVuZENoaWxkKG5vZGUpXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIC8qIEl0ZXJhdGUgY2hpbGQgbm9kZXMgYW5kIHJldHVybiBlbGVtZW50ICovXHJcbiAgICBpdGVyYXRlQ2hpbGROb2RlcyhjaGlsZHJlbilcclxuICAgIHJldHVybiBlbFxyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXNzZXRzL2phdmFzY3JpcHRzL3Byb3ZpZGVycy9qc3guanMiLCJ2YXIgZztcclxuXHJcbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXHJcbmcgPSAoZnVuY3Rpb24oKSB7XHJcblx0cmV0dXJuIHRoaXM7XHJcbn0pKCk7XHJcblxyXG50cnkge1xyXG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxyXG5cdGcgPSBnIHx8IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKSB8fCAoMSxldmFsKShcInRoaXNcIik7XHJcbn0gY2F0Y2goZSkge1xyXG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXHJcblx0aWYodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIilcclxuXHRcdGcgPSB3aW5kb3c7XHJcbn1cclxuXHJcbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cclxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3NcclxuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBnO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwidmFyIGluZGV4ID0gdHlwZW9mIGZldGNoPT0nZnVuY3Rpb24nID8gZmV0Y2guYmluZCgpIDogZnVuY3Rpb24odXJsLCBvcHRpb25zKSB7XG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXHRyZXR1cm4gbmV3IFByb21pc2UoIGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcblx0XHR2YXIgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuXG5cdFx0cmVxdWVzdC5vcGVuKG9wdGlvbnMubWV0aG9kIHx8ICdnZXQnLCB1cmwsIHRydWUpO1xuXG5cdFx0Zm9yICh2YXIgaSBpbiBvcHRpb25zLmhlYWRlcnMpIHtcblx0XHRcdHJlcXVlc3Quc2V0UmVxdWVzdEhlYWRlcihpLCBvcHRpb25zLmhlYWRlcnNbaV0pO1xuXHRcdH1cblxuXHRcdHJlcXVlc3Qud2l0aENyZWRlbnRpYWxzID0gb3B0aW9ucy5jcmVkZW50aWFscz09J2luY2x1ZGUnO1xuXG5cdFx0cmVxdWVzdC5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXNvbHZlKHJlc3BvbnNlKCkpO1xuXHRcdH07XG5cblx0XHRyZXF1ZXN0Lm9uZXJyb3IgPSByZWplY3Q7XG5cblx0XHRyZXF1ZXN0LnNlbmQob3B0aW9ucy5ib2R5IHx8IG51bGwpO1xuXG5cdFx0ZnVuY3Rpb24gcmVzcG9uc2UoKSB7XG5cdFx0XHR2YXIga2V5cyA9IFtdLFxuXHRcdFx0XHRhbGwgPSBbXSxcblx0XHRcdFx0aGVhZGVycyA9IHt9LFxuXHRcdFx0XHRoZWFkZXI7XG5cblx0XHRcdHJlcXVlc3QuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKCkucmVwbGFjZSgvXiguKj8pOlteXFxTXFxuXSooW1xcc1xcU10qPykkL2dtLCBmdW5jdGlvbiAobSwga2V5LCB2YWx1ZSkge1xuXHRcdFx0XHRrZXlzLnB1c2goa2V5ID0ga2V5LnRvTG93ZXJDYXNlKCkpO1xuXHRcdFx0XHRhbGwucHVzaChba2V5LCB2YWx1ZV0pO1xuXHRcdFx0XHRoZWFkZXIgPSBoZWFkZXJzW2tleV07XG5cdFx0XHRcdGhlYWRlcnNba2V5XSA9IGhlYWRlciA/IChoZWFkZXIgKyBcIixcIiArIHZhbHVlKSA6IHZhbHVlO1xuXHRcdFx0fSk7XG5cblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdG9rOiAocmVxdWVzdC5zdGF0dXMvMTAwfDApID09IDIsXHRcdC8vIDIwMC0yOTlcblx0XHRcdFx0c3RhdHVzOiByZXF1ZXN0LnN0YXR1cyxcblx0XHRcdFx0c3RhdHVzVGV4dDogcmVxdWVzdC5zdGF0dXNUZXh0LFxuXHRcdFx0XHR1cmw6IHJlcXVlc3QucmVzcG9uc2VVUkwsXG5cdFx0XHRcdGNsb25lOiByZXNwb25zZSxcblx0XHRcdFx0dGV4dDogZnVuY3Rpb24gKCkgeyByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHJlcXVlc3QucmVzcG9uc2VUZXh0KTsgfSxcblx0XHRcdFx0anNvbjogZnVuY3Rpb24gKCkgeyByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHJlcXVlc3QucmVzcG9uc2VUZXh0KS50aGVuKEpTT04ucGFyc2UpOyB9LFxuXHRcdFx0XHRibG9iOiBmdW5jdGlvbiAoKSB7IHJldHVybiBQcm9taXNlLnJlc29sdmUobmV3IEJsb2IoW3JlcXVlc3QucmVzcG9uc2VdKSk7IH0sXG5cdFx0XHRcdGhlYWRlcnM6IHtcblx0XHRcdFx0XHRrZXlzOiBmdW5jdGlvbiAoKSB7IHJldHVybiBrZXlzOyB9LFxuXHRcdFx0XHRcdGVudHJpZXM6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGFsbDsgfSxcblx0XHRcdFx0XHRnZXQ6IGZ1bmN0aW9uIChuKSB7IHJldHVybiBoZWFkZXJzW24udG9Mb3dlckNhc2UoKV07IH0sXG5cdFx0XHRcdFx0aGFzOiBmdW5jdGlvbiAobikgeyByZXR1cm4gbi50b0xvd2VyQ2FzZSgpIGluIGhlYWRlcnM7IH1cblx0XHRcdFx0fVxuXHRcdFx0fTtcblx0XHR9XG5cdH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgaW5kZXg7XG4vLyMgc291cmNlTWFwcGluZ1VSTD11bmZldGNoLmVzLmpzLm1hcFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3VuZmV0Y2gvZGlzdC91bmZldGNoLmVzLmpzIiwiLyogZ2xvYmFscyBfX3dlYnBhY2tfYW1kX29wdGlvbnNfXyAqL1xyXG5tb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19hbWRfb3B0aW9uc19fO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAod2VicGFjaykvYnVpbGRpbi9hbWQtb3B0aW9ucy5qc1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxyXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYtMjAxOCBNYXJ0aW4gRG9uYXRoIDxtYXJ0aW4uZG9uYXRoQHNxdWlkZnVuay5jb20+XHJcbiAqXHJcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcclxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG9cclxuICogZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGVcclxuICogcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yXHJcbiAqIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXHJcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XHJcbiAqXHJcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXHJcbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxyXG4gKlxyXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXHJcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxyXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OLUlORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXHJcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcclxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkdcclxuICogRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HU1xyXG4gKiBJTiBUSEUgU09GVFdBUkUuXHJcbiAqL1xyXG5cclxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiBDbGFzc1xyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaXN0ZW5lciB7XHJcblxyXG4gIC8qKlxyXG4gICAqIEdlbmVyaWMgZXZlbnQgbGlzdGVuZXJcclxuICAgKlxyXG4gICAqIEBjb25zdHJ1Y3RvclxyXG4gICAqXHJcbiAgICogQHByb3BlcnR5IHsoQXJyYXk8RXZlbnRUYXJnZXQ+KX0gZWxzXyAtIEV2ZW50IHRhcmdldHNcclxuICAgKiBAcHJvcGVydHkge09iamVjdH0gaGFuZGxlcl8tIEV2ZW50IGhhbmRsZXJzXHJcbiAgICogQHByb3BlcnR5IHtBcnJheTxzdHJpbmc+fSBldmVudHNfIC0gRXZlbnQgbmFtZXNcclxuICAgKiBAcHJvcGVydHkge0Z1bmN0aW9ufSB1cGRhdGVfIC0gVXBkYXRlIGhhbmRsZXJcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7PyhzdHJpbmd8RXZlbnRUYXJnZXR8Tm9kZUxpc3Q8RXZlbnRUYXJnZXQ+KX0gZWxzIC1cclxuICAgKiAgIFNlbGVjdG9yIG9yIEV2ZW50IHRhcmdldHNcclxuICAgKiBAcGFyYW0geyhzdHJpbmd8QXJyYXk8c3RyaW5nPil9IGV2ZW50cyAtIEV2ZW50IG5hbWVzXHJcbiAgICogQHBhcmFtIHsoT2JqZWN0fEZ1bmN0aW9uKX0gaGFuZGxlciAtIEhhbmRsZXIgdG8gYmUgaW52b2tlZFxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKGVscywgZXZlbnRzLCBoYW5kbGVyKSB7XHJcbiAgICB0aGlzLmVsc18gPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChcclxuICAgICAgKHR5cGVvZiBlbHMgPT09IFwic3RyaW5nXCIpXHJcbiAgICAgICAgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGVscylcclxuICAgICAgICA6IFtdLmNvbmNhdChlbHMpKVxyXG5cclxuICAgIC8qIFNldCBoYW5kbGVyIGFzIGZ1bmN0aW9uIG9yIGRpcmVjdGx5IGFzIG9iamVjdCAqL1xyXG4gICAgdGhpcy5oYW5kbGVyXyA9IHR5cGVvZiBoYW5kbGVyID09PSBcImZ1bmN0aW9uXCJcclxuICAgICAgPyB7IHVwZGF0ZTogaGFuZGxlciB9XHJcbiAgICAgIDogaGFuZGxlclxyXG5cclxuICAgIC8qIEluaXRpYWxpemUgZXZlbnQgbmFtZXMgYW5kIHVwZGF0ZSBoYW5kbGVyICovXHJcbiAgICB0aGlzLmV2ZW50c18gPSBbXS5jb25jYXQoZXZlbnRzKVxyXG4gICAgdGhpcy51cGRhdGVfID0gZXYgPT4gdGhpcy5oYW5kbGVyXy51cGRhdGUoZXYpXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZWdpc3RlciBsaXN0ZW5lciBmb3IgYWxsIHJlbGV2YW50IGV2ZW50c1xyXG4gICAqL1xyXG4gIGxpc3RlbigpIHtcclxuICAgIHRoaXMuZWxzXy5mb3JFYWNoKGVsID0+IHtcclxuICAgICAgdGhpcy5ldmVudHNfLmZvckVhY2goZXZlbnQgPT4ge1xyXG4gICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIHRoaXMudXBkYXRlXywgZmFsc2UpXHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG5cclxuICAgIC8qIEV4ZWN1dGUgc2V0dXAgaGFuZGxlciwgaWYgaW1wbGVtZW50ZWQgKi9cclxuICAgIGlmICh0eXBlb2YgdGhpcy5oYW5kbGVyXy5zZXR1cCA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICB0aGlzLmhhbmRsZXJfLnNldHVwKClcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFVucmVnaXN0ZXIgbGlzdGVuZXIgZm9yIGFsbCByZWxldmFudCBldmVudHNcclxuICAgKi9cclxuICB1bmxpc3RlbigpIHtcclxuICAgIHRoaXMuZWxzXy5mb3JFYWNoKGVsID0+IHtcclxuICAgICAgdGhpcy5ldmVudHNfLmZvckVhY2goZXZlbnQgPT4ge1xyXG4gICAgICAgIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIHRoaXMudXBkYXRlXylcclxuICAgICAgfSlcclxuICAgIH0pXHJcblxyXG4gICAgLyogRXhlY3V0ZSByZXNldCBoYW5kbGVyLCBpZiBpbXBsZW1lbnRlZCAqL1xyXG4gICAgaWYgKHR5cGVvZiB0aGlzLmhhbmRsZXJfLnJlc2V0ID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgIHRoaXMuaGFuZGxlcl8ucmVzZXQoKVxyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXNzZXRzL2phdmFzY3JpcHRzL2NvbXBvbmVudHMvTWF0ZXJpYWwvRXZlbnQvTGlzdGVuZXIuanMiLCIvKlxyXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYtMjAxOCBNYXJ0aW4gRG9uYXRoIDxtYXJ0aW4uZG9uYXRoQHNxdWlkZnVuay5jb20+XHJcbiAqXHJcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcclxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG9cclxuICogZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGVcclxuICogcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yXHJcbiAqIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXHJcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XHJcbiAqXHJcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXHJcbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxyXG4gKlxyXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXHJcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxyXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OLUlORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXHJcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcclxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkdcclxuICogRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HU1xyXG4gKiBJTiBUSEUgU09GVFdBUkUuXHJcbiAqL1xyXG5cclxuaW1wb3J0IFwiLi4vaW1hZ2VzL2ljb25zL2JpdGJ1Y2tldC5zdmdcIlxyXG5pbXBvcnQgXCIuLi9pbWFnZXMvaWNvbnMvZ2l0aHViLnN2Z1wiXHJcbmltcG9ydCBcIi4uL2ltYWdlcy9pY29ucy9naXRsYWIuc3ZnXCJcclxuXHJcbmltcG9ydCBcIi4uL3N0eWxlc2hlZXRzL2FwcGxpY2F0aW9uLnNjc3NcIlxyXG5pbXBvcnQgXCIuLi9zdHlsZXNoZWV0cy9hcHBsaWNhdGlvbi1wYWxldHRlLnNjc3NcIlxyXG5cclxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiBQb2x5ZmlsbHNcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG5cclxuaW1wb3J0IFwiY3VzdG9tLWV2ZW50LXBvbHlmaWxsXCJcclxuaW1wb3J0IFwidW5mZXRjaC9wb2x5ZmlsbFwiXHJcblxyXG5pbXBvcnQgUHJvbWlzZSBmcm9tIFwicHJvbWlzZS1wb2x5ZmlsbFwiXHJcbndpbmRvdy5Qcm9taXNlID0gd2luZG93LlByb21pc2UgfHwgUHJvbWlzZVxyXG5cclxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiBEZXBlbmRlbmNpZXNcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG5cclxuaW1wb3J0IENsaXBib2FyZCBmcm9tIFwiY2xpcGJvYXJkXCJcclxuaW1wb3J0IEZhc3RDbGljayBmcm9tIFwiZmFzdGNsaWNrXCJcclxuXHJcbmltcG9ydCBNYXRlcmlhbCBmcm9tIFwiLi9jb21wb25lbnRzL01hdGVyaWFsXCJcclxuXHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogRnVuY3Rpb25zXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm4gdGhlIG1ldGEgdGFnIHZhbHVlIGZvciB0aGUgZ2l2ZW4ga2V5XHJcbiAqXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgLSBNZXRhIG5hbWVcclxuICpcclxuICogQHJldHVybiB7c3RyaW5nfSBNZXRhIGNvbnRlbnQgdmFsdWVcclxuICovXHJcbmNvbnN0IHRyYW5zbGF0ZSA9IGtleSA9PiB7XHJcbiAgY29uc3QgbWV0YSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGBsYW5nOiR7a2V5fWApWzBdXHJcbiAgaWYgKCEobWV0YSBpbnN0YW5jZW9mIEhUTUxNZXRhRWxlbWVudCkpXHJcbiAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3JcclxuICByZXR1cm4gbWV0YS5jb250ZW50XHJcbn1cclxuXHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogQXBwbGljYXRpb25cclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG5cclxuLyoqXHJcbiAqIEluaXRpYWxpemUgTWF0ZXJpYWwgZm9yIE1rRG9jc1xyXG4gKlxyXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIC0gQ29uZmlndXJhdGlvblxyXG4gKi9cclxuZnVuY3Rpb24gaW5pdGlhbGl6ZShjb25maWcpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBmdW5jLXN0eWxlXHJcblxyXG4gIC8qIEluaXRpYWxpemUgTW9kZXJuaXpyIGFuZCBGYXN0Q2xpY2sgKi9cclxuICBuZXcgTWF0ZXJpYWwuRXZlbnQuTGlzdGVuZXIoZG9jdW1lbnQsIFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XHJcbiAgICBpZiAoIShkb2N1bWVudC5ib2R5IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKVxyXG4gICAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3JcclxuXHJcbiAgICAvKiBBdHRhY2ggRmFzdENsaWNrIHRvIG1pdGlnYXRlIDMwMG1zIGRlbGF5IG9uIHRvdWNoIGRldmljZXMgKi9cclxuICAgIEZhc3RDbGljay5hdHRhY2goZG9jdW1lbnQuYm9keSlcclxuXHJcbiAgICAvKiBUZXN0IGZvciBpT1MgKi9cclxuICAgIE1vZGVybml6ci5hZGRUZXN0KFwiaW9zXCIsICgpID0+IHtcclxuICAgICAgcmV0dXJuICEhbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvKGlQYWR8aVBob25lfGlQb2QpL2cpXHJcbiAgICB9KVxyXG5cclxuICAgIC8qIFdyYXAgYWxsIGRhdGEgdGFibGVzIGZvciBiZXR0ZXIgb3ZlcmZsb3cgc2Nyb2xsaW5nICovXHJcbiAgICBjb25zdCB0YWJsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwidGFibGU6bm90KFtjbGFzc10pXCIpICAgICAgICAgICAgICAvLyBUT0RPOiB0aGlzIGlzIEpTWCwgd2Ugc2hvdWxkIHJlbmFtZSB0aGUgZmlsZVxyXG4gICAgQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbCh0YWJsZXMsIHRhYmxlID0+IHtcclxuICAgICAgY29uc3Qgd3JhcCA9IChcclxuICAgICAgICA8ZGl2IGNsYXNzPVwibWQtdHlwZXNldF9fc2Nyb2xsd3JhcFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm1kLXR5cGVzZXRfX3RhYmxlXCI+PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIClcclxuICAgICAgaWYgKHRhYmxlLm5leHRTaWJsaW5nKSB7XHJcbiAgICAgICAgdGFibGUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUod3JhcCwgdGFibGUubmV4dFNpYmxpbmcpXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGFibGUucGFyZW50Tm9kZS5hcHBlbmRDaGlsZCh3cmFwKVxyXG4gICAgICB9XHJcbiAgICAgIHdyYXAuY2hpbGRyZW5bMF0uYXBwZW5kQ2hpbGQodGFibGUpXHJcbiAgICB9KVxyXG5cclxuICAgIC8qIENsaXBib2FyZCBpbnRlZ3JhdGlvbiAqL1xyXG4gICAgaWYgKENsaXBib2FyZC5pc1N1cHBvcnRlZCgpKSB7XHJcbiAgICAgIGNvbnN0IGJsb2NrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY29kZWhpbGl0ZSA+IHByZSwgcHJlID4gY29kZVwiKVxyXG4gICAgICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGJsb2NrcywgKGJsb2NrLCBpbmRleCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGlkID0gYF9fY29kZV8ke2luZGV4fWBcclxuXHJcbiAgICAgICAgLyogQ3JlYXRlIGJ1dHRvbiB3aXRoIG1lc3NhZ2UgY29udGFpbmVyICovXHJcbiAgICAgICAgY29uc3QgYnV0dG9uID0gKFxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIm1kLWNsaXBib2FyZFwiIHRpdGxlPXt0cmFuc2xhdGUoXCJjbGlwYm9hcmQuY29weVwiKX1cclxuICAgICAgICAgICAgZGF0YS1jbGlwYm9hcmQtdGFyZ2V0PXtgIyR7aWR9IHByZSwgIyR7aWR9IGNvZGVgfT5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtZC1jbGlwYm9hcmRfX21lc3NhZ2VcIj48L3NwYW4+XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICApXHJcblxyXG4gICAgICAgIC8qIExpbmsgdG8gYmxvY2sgYW5kIGluc2VydCBidXR0b24gKi9cclxuICAgICAgICBjb25zdCBwYXJlbnQgPSBibG9jay5wYXJlbnROb2RlXHJcbiAgICAgICAgcGFyZW50LmlkID0gaWRcclxuICAgICAgICBwYXJlbnQuaW5zZXJ0QmVmb3JlKGJ1dHRvbiwgYmxvY2spXHJcbiAgICAgIH0pXHJcblxyXG4gICAgICAvKiBJbml0aWFsaXplIENsaXBib2FyZCBsaXN0ZW5lciAqL1xyXG4gICAgICBjb25zdCBjb3B5ID0gbmV3IENsaXBib2FyZChcIi5tZC1jbGlwYm9hcmRcIilcclxuXHJcbiAgICAgIC8qIFN1Y2Nlc3MgaGFuZGxlciAqL1xyXG4gICAgICBjb3B5Lm9uKFwic3VjY2Vzc1wiLCBhY3Rpb24gPT4ge1xyXG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBhY3Rpb24udHJpZ2dlci5xdWVyeVNlbGVjdG9yKFwiLm1kLWNsaXBib2FyZF9fbWVzc2FnZVwiKVxyXG4gICAgICAgIGlmICghKG1lc3NhZ2UgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpXHJcbiAgICAgICAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3JcclxuXHJcbiAgICAgICAgLyogQ2xlYXIgc2VsZWN0aW9uIGFuZCByZXNldCBkZWJvdW5jZSBsb2dpYyAqL1xyXG4gICAgICAgIGFjdGlvbi5jbGVhclNlbGVjdGlvbigpXHJcbiAgICAgICAgaWYgKG1lc3NhZ2UuZGF0YXNldC5tZFRpbWVyKVxyXG4gICAgICAgICAgY2xlYXJUaW1lb3V0KHBhcnNlSW50KG1lc3NhZ2UuZGF0YXNldC5tZFRpbWVyLCAxMCkpXHJcblxyXG4gICAgICAgIC8qIFNldCBtZXNzYWdlIGluZGljYXRpbmcgc3VjY2VzcyBhbmQgc2hvdyBpdCAqL1xyXG4gICAgICAgIG1lc3NhZ2UuY2xhc3NMaXN0LmFkZChcIm1kLWNsaXBib2FyZF9fbWVzc2FnZS0tYWN0aXZlXCIpXHJcbiAgICAgICAgbWVzc2FnZS5pbm5lckhUTUwgPSB0cmFuc2xhdGUoXCJjbGlwYm9hcmQuY29waWVkXCIpXHJcblxyXG4gICAgICAgIC8qIEhpZGUgbWVzc2FnZSBhZnRlciB0d28gc2Vjb25kcyAqL1xyXG4gICAgICAgIG1lc3NhZ2UuZGF0YXNldC5tZFRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICBtZXNzYWdlLmNsYXNzTGlzdC5yZW1vdmUoXCJtZC1jbGlwYm9hcmRfX21lc3NhZ2UtLWFjdGl2ZVwiKVxyXG4gICAgICAgICAgbWVzc2FnZS5kYXRhc2V0Lm1kVGltZXIgPSBcIlwiXHJcbiAgICAgICAgfSwgMjAwMCkudG9TdHJpbmcoKVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIC8qIFBvbHlmaWxsIGRldGFpbHMvc3VtbWFyeSBmdW5jdGlvbmFsaXR5ICovXHJcbiAgICBpZiAoIU1vZGVybml6ci5kZXRhaWxzKSB7XHJcbiAgICAgIGNvbnN0IGJsb2NrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJkZXRhaWxzID4gc3VtbWFyeVwiKVxyXG4gICAgICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGJsb2Nrcywgc3VtbWFyeSA9PiB7XHJcbiAgICAgICAgc3VtbWFyeS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZXYgPT4ge1xyXG4gICAgICAgICAgY29uc3QgZGV0YWlscyA9IGV2LnRhcmdldC5wYXJlbnROb2RlXHJcbiAgICAgICAgICBpZiAoZGV0YWlscy5oYXNBdHRyaWJ1dGUoXCJvcGVuXCIpKSB7XHJcbiAgICAgICAgICAgIGRldGFpbHMucmVtb3ZlQXR0cmlidXRlKFwib3BlblwiKVxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZGV0YWlscy5zZXRBdHRyaWJ1dGUoXCJvcGVuXCIsIFwiXCIpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICAvKiBPcGVuIGRldGFpbHMgYWZ0ZXIgYW5jaG9yIGp1bXAgKi9cclxuICAgIGNvbnN0IGRldGFpbHMgPSAoKSA9PiB7XHJcbiAgICAgIGlmIChkb2N1bWVudC5sb2NhdGlvbi5oYXNoKSB7XHJcbiAgICAgICAgY29uc3QgZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkb2N1bWVudC5sb2NhdGlvbi5oYXNoLnN1YnN0cmluZygxKSlcclxuICAgICAgICBpZiAoIWVsKVxyXG4gICAgICAgICAgcmV0dXJuXHJcblxyXG4gICAgICAgIC8qIFdhbGsgdXAgYXMgbG9uZyBhcyB3ZSdyZSBub3QgaW4gYSBkZXRhaWxzIHRhZyAqL1xyXG4gICAgICAgIGxldCBwYXJlbnQgPSBlbC5wYXJlbnROb2RlXHJcbiAgICAgICAgd2hpbGUgKHBhcmVudCAmJiAhKHBhcmVudCBpbnN0YW5jZW9mIEhUTUxEZXRhaWxzRWxlbWVudCkpXHJcbiAgICAgICAgICBwYXJlbnQgPSBwYXJlbnQucGFyZW50Tm9kZVxyXG5cclxuICAgICAgICAvKiBJZiB0aGVyZSdzIGEgZGV0YWlscyB0YWcsIG9wZW4gaXQgKi9cclxuICAgICAgICBpZiAocGFyZW50ICYmICFwYXJlbnQub3Blbikge1xyXG4gICAgICAgICAgcGFyZW50Lm9wZW4gPSB0cnVlXHJcblxyXG4gICAgICAgICAgLyogRm9yY2UgcmVsb2FkLCBzbyB0aGUgdmlld3BvcnQgcmVwb3NpdGlvbnMgKi9cclxuICAgICAgICAgIGNvbnN0IGxvYyA9IGxvY2F0aW9uLmhhc2hcclxuICAgICAgICAgIGxvY2F0aW9uLmhhc2ggPSBcIiBcIlxyXG4gICAgICAgICAgbG9jYXRpb24uaGFzaCA9IGxvY1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJoYXNoY2hhbmdlXCIsIGRldGFpbHMpXHJcbiAgICBkZXRhaWxzKClcclxuXHJcbiAgICAvKiBGb3JjZSAxcHggc2Nyb2xsIG9mZnNldCB0byB0cmlnZ2VyIG92ZXJmbG93IHNjcm9sbGluZyAqL1xyXG4gICAgaWYgKE1vZGVybml6ci5pb3MpIHtcclxuICAgICAgY29uc3Qgc2Nyb2xsYWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS1tZC1zY3JvbGxmaXhdXCIpXHJcbiAgICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoc2Nyb2xsYWJsZSwgaXRlbSA9PiB7XHJcbiAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCAoKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCB0b3AgPSBpdGVtLnNjcm9sbFRvcFxyXG5cclxuICAgICAgICAgIC8qIFdlJ3JlIGF0IHRoZSB0b3Agb2YgdGhlIGNvbnRhaW5lciAqL1xyXG4gICAgICAgICAgaWYgKHRvcCA9PT0gMCkge1xyXG4gICAgICAgICAgICBpdGVtLnNjcm9sbFRvcCA9IDFcclxuXHJcbiAgICAgICAgICAgIC8qIFdlJ3JlIGF0IHRoZSBib3R0b20gb2YgdGhlIGNvbnRhaW5lciAqL1xyXG4gICAgICAgICAgfSBlbHNlIGlmICh0b3AgKyBpdGVtLm9mZnNldEhlaWdodCA9PT0gaXRlbS5zY3JvbGxIZWlnaHQpIHtcclxuICAgICAgICAgICAgaXRlbS5zY3JvbGxUb3AgPSB0b3AgLSAxXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9KS5saXN0ZW4oKVxyXG5cclxuICAvKiBDb21wb25lbnQ6IGhlYWRlciBzaGFkb3cgdG9nZ2xlICovXHJcbiAgbmV3IE1hdGVyaWFsLkV2ZW50Lkxpc3RlbmVyKHdpbmRvdywgW1xyXG4gICAgXCJzY3JvbGxcIiwgXCJyZXNpemVcIiwgXCJvcmllbnRhdGlvbmNoYW5nZVwiXHJcbiAgXSwgbmV3IE1hdGVyaWFsLkhlYWRlci5TaGFkb3coXHJcbiAgICBcIltkYXRhLW1kLWNvbXBvbmVudD1jb250YWluZXJdXCIsXHJcbiAgICBcIltkYXRhLW1kLWNvbXBvbmVudD1oZWFkZXJdXCIpXHJcbiAgKS5saXN0ZW4oKVxyXG5cclxuICAvKiBDb21wb25lbnQ6IGhlYWRlciB0aXRsZSB0b2dnbGUgKi9cclxuICBuZXcgTWF0ZXJpYWwuRXZlbnQuTGlzdGVuZXIod2luZG93LCBbXHJcbiAgICBcInNjcm9sbFwiLCBcInJlc2l6ZVwiLCBcIm9yaWVudGF0aW9uY2hhbmdlXCJcclxuICBdLCBuZXcgTWF0ZXJpYWwuSGVhZGVyLlRpdGxlKFxyXG4gICAgXCJbZGF0YS1tZC1jb21wb25lbnQ9dGl0bGVdXCIsXHJcbiAgICBcIi5tZC10eXBlc2V0IGgxXCIpXHJcbiAgKS5saXN0ZW4oKVxyXG5cclxuICAvKiBDb21wb25lbnQ6IGhlcm8gdmlzaWJpbGl0eSB0b2dnbGUgKi9cclxuICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLW1kLWNvbXBvbmVudD1oZXJvXVwiKSlcclxuICAgIG5ldyBNYXRlcmlhbC5FdmVudC5MaXN0ZW5lcih3aW5kb3csIFtcclxuICAgICAgXCJzY3JvbGxcIiwgXCJyZXNpemVcIiwgXCJvcmllbnRhdGlvbmNoYW5nZVwiXHJcbiAgICBdLCBuZXcgTWF0ZXJpYWwuVGFicy5Ub2dnbGUoXCJbZGF0YS1tZC1jb21wb25lbnQ9aGVyb11cIikpLmxpc3RlbigpXHJcblxyXG4gIC8qIENvbXBvbmVudDogdGFicyB2aXNpYmlsaXR5IHRvZ2dsZSAqL1xyXG4gIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtbWQtY29tcG9uZW50PXRhYnNdXCIpKVxyXG4gICAgbmV3IE1hdGVyaWFsLkV2ZW50Lkxpc3RlbmVyKHdpbmRvdywgW1xyXG4gICAgICBcInNjcm9sbFwiLCBcInJlc2l6ZVwiLCBcIm9yaWVudGF0aW9uY2hhbmdlXCJcclxuICAgIF0sIG5ldyBNYXRlcmlhbC5UYWJzLlRvZ2dsZShcIltkYXRhLW1kLWNvbXBvbmVudD10YWJzXVwiKSkubGlzdGVuKClcclxuXHJcbiAgLyogQ29tcG9uZW50OiBzaWRlYmFyIHdpdGggbmF2aWdhdGlvbiAqL1xyXG4gIG5ldyBNYXRlcmlhbC5FdmVudC5NYXRjaE1lZGlhKFwiKG1pbi13aWR0aDogMTIyMHB4KVwiLFxyXG4gICAgbmV3IE1hdGVyaWFsLkV2ZW50Lkxpc3RlbmVyKHdpbmRvdywgW1xyXG4gICAgICBcInNjcm9sbFwiLCBcInJlc2l6ZVwiLCBcIm9yaWVudGF0aW9uY2hhbmdlXCJcclxuICAgIF0sIG5ldyBNYXRlcmlhbC5TaWRlYmFyLlBvc2l0aW9uKFxyXG4gICAgICBcIltkYXRhLW1kLWNvbXBvbmVudD1uYXZpZ2F0aW9uXVwiLFxyXG4gICAgICBcIltkYXRhLW1kLWNvbXBvbmVudD1oZWFkZXJdXCIpKSlcclxuXHJcbiAgLyogQ29tcG9uZW50OiBzaWRlYmFyIHdpdGggdGFibGUgb2YgY29udGVudHMgKG1pc3Npbmcgb24gNDA0IHBhZ2UpICovXHJcbiAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1tZC1jb21wb25lbnQ9dG9jXVwiKSlcclxuICAgIG5ldyBNYXRlcmlhbC5FdmVudC5NYXRjaE1lZGlhKFwiKG1pbi13aWR0aDogOTYwcHgpXCIsXHJcbiAgICAgIG5ldyBNYXRlcmlhbC5FdmVudC5MaXN0ZW5lcih3aW5kb3csIFtcclxuICAgICAgICBcInNjcm9sbFwiLCBcInJlc2l6ZVwiLCBcIm9yaWVudGF0aW9uY2hhbmdlXCJcclxuICAgICAgXSwgbmV3IE1hdGVyaWFsLlNpZGViYXIuUG9zaXRpb24oXHJcbiAgICAgICAgXCJbZGF0YS1tZC1jb21wb25lbnQ9dG9jXVwiLFxyXG4gICAgICAgIFwiW2RhdGEtbWQtY29tcG9uZW50PWhlYWRlcl1cIikpKVxyXG5cclxuICAvKiBDb21wb25lbnQ6IGxpbmsgYmx1cnJpbmcgZm9yIHRhYmxlIG9mIGNvbnRlbnRzICovXHJcbiAgbmV3IE1hdGVyaWFsLkV2ZW50Lk1hdGNoTWVkaWEoXCIobWluLXdpZHRoOiA5NjBweClcIixcclxuICAgIG5ldyBNYXRlcmlhbC5FdmVudC5MaXN0ZW5lcih3aW5kb3csIFwic2Nyb2xsXCIsXHJcbiAgICAgIG5ldyBNYXRlcmlhbC5OYXYuQmx1cihcIltkYXRhLW1kLWNvbXBvbmVudD10b2NdIFtocmVmXVwiKSkpXHJcblxyXG4gIC8qIENvbXBvbmVudDogY29sbGFwc2libGUgZWxlbWVudHMgZm9yIG5hdmlnYXRpb24gKi9cclxuICBjb25zdCBjb2xsYXBzaWJsZXMgPVxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLW1kLWNvbXBvbmVudD1jb2xsYXBzaWJsZV1cIilcclxuICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGNvbGxhcHNpYmxlcywgY29sbGFwc2UgPT4ge1xyXG4gICAgbmV3IE1hdGVyaWFsLkV2ZW50Lk1hdGNoTWVkaWEoXCIobWluLXdpZHRoOiAxMjIwcHgpXCIsXHJcbiAgICAgIG5ldyBNYXRlcmlhbC5FdmVudC5MaXN0ZW5lcihjb2xsYXBzZS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLCBcImNsaWNrXCIsXHJcbiAgICAgICAgbmV3IE1hdGVyaWFsLk5hdi5Db2xsYXBzZShjb2xsYXBzZSkpKVxyXG4gIH0pXHJcblxyXG4gIC8qIENvbXBvbmVudDogYWN0aXZlIHBhbmUgbW9uaXRvciBmb3IgaU9TIHNjcm9sbGluZyBmaXhlcyAqL1xyXG4gIG5ldyBNYXRlcmlhbC5FdmVudC5NYXRjaE1lZGlhKFwiKG1heC13aWR0aDogMTIxOXB4KVwiLFxyXG4gICAgbmV3IE1hdGVyaWFsLkV2ZW50Lkxpc3RlbmVyKFxyXG4gICAgICBcIltkYXRhLW1kLWNvbXBvbmVudD1uYXZpZ2F0aW9uXSBbZGF0YS1tZC10b2dnbGVdXCIsIFwiY2hhbmdlXCIsXHJcbiAgICAgIG5ldyBNYXRlcmlhbC5OYXYuU2Nyb2xsaW5nKFwiW2RhdGEtbWQtY29tcG9uZW50PW5hdmlnYXRpb25dIG5hdlwiKSkpXHJcblxyXG4gIC8qIEluaXRpYWxpemUgc2VhcmNoLCBpZiBhdmFpbGFibGUgKi9cclxuICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLW1kLWNvbXBvbmVudD1zZWFyY2hdXCIpKSB7XHJcblxyXG4gICAgLyogQ29tcG9uZW50OiBzZWFyY2ggYm9keSBsb2NrIGZvciBtb2JpbGUgKi9cclxuICAgIG5ldyBNYXRlcmlhbC5FdmVudC5NYXRjaE1lZGlhKFwiKG1heC13aWR0aDogOTU5cHgpXCIsXHJcbiAgICAgIG5ldyBNYXRlcmlhbC5FdmVudC5MaXN0ZW5lcihcIltkYXRhLW1kLXRvZ2dsZT1zZWFyY2hdXCIsIFwiY2hhbmdlXCIsXHJcbiAgICAgICAgbmV3IE1hdGVyaWFsLlNlYXJjaC5Mb2NrKFwiW2RhdGEtbWQtdG9nZ2xlPXNlYXJjaF1cIikpKVxyXG5cclxuICAgIC8qIENvbXBvbmVudDogc2VhcmNoIHJlc3VsdHMgKi9cclxuICAgIG5ldyBNYXRlcmlhbC5FdmVudC5MaXN0ZW5lcihcIltkYXRhLW1kLWNvbXBvbmVudD1xdWVyeV1cIiwgW1xyXG4gICAgICBcImZvY3VzXCIsIFwia2V5dXBcIiwgXCJjaGFuZ2VcIlxyXG4gICAgXSwgbmV3IE1hdGVyaWFsLlNlYXJjaC5SZXN1bHQoXCJbZGF0YS1tZC1jb21wb25lbnQ9cmVzdWx0XVwiLCAoKSA9PiB7XHJcbiAgICAgIHJldHVybiBmZXRjaChgJHtjb25maWcudXJsLmJhc2V9L2luZGV4Lmpzb25gLCB7XHJcbiAgICAgICAgY3JlZGVudGlhbHM6IFwic2FtZS1vcmlnaW5cIlxyXG4gICAgICB9KS50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgIHJldHVybiBkYXRhLm1hcChkb2MgPT4ge1xyXG4gICAgICAgICAgICBkb2MubG9jYXRpb24gPSBgJHtkb2MucGVybWFsaW5rfWBcclxuICAgICAgICAgICAgcmV0dXJuIGRvY1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgfSkpLmxpc3RlbigpXHJcblxyXG4gICAgLyogTGlzdGVuZXI6IGZvY3VzIGlucHV0IGFmdGVyIGZvcm0gcmVzZXQgKi9cclxuICAgIG5ldyBNYXRlcmlhbC5FdmVudC5MaXN0ZW5lcihcIltkYXRhLW1kLWNvbXBvbmVudD1yZXNldF1cIiwgXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHF1ZXJ5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLW1kLWNvbXBvbmVudD1xdWVyeV1cIilcclxuICAgICAgICBpZiAoIShxdWVyeSBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQpKVxyXG4gICAgICAgICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yXHJcbiAgICAgICAgcXVlcnkuZm9jdXMoKVxyXG4gICAgICB9LCAxMClcclxuICAgIH0pLmxpc3RlbigpXHJcblxyXG4gICAgLyogTGlzdGVuZXI6IGZvY3VzIGlucHV0IGFmdGVyIG9wZW5pbmcgc2VhcmNoICovXHJcbiAgICBuZXcgTWF0ZXJpYWwuRXZlbnQuTGlzdGVuZXIoXCJbZGF0YS1tZC10b2dnbGU9c2VhcmNoXVwiLCBcImNoYW5nZVwiLCBldiA9PiB7XHJcbiAgICAgIHNldFRpbWVvdXQodG9nZ2xlID0+IHtcclxuICAgICAgICBpZiAoISh0b2dnbGUgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50KSlcclxuICAgICAgICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvclxyXG4gICAgICAgIGlmICh0b2dnbGUuY2hlY2tlZCkge1xyXG4gICAgICAgICAgY29uc3QgcXVlcnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtbWQtY29tcG9uZW50PXF1ZXJ5XVwiKVxyXG4gICAgICAgICAgaWYgKCEocXVlcnkgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50KSlcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yXHJcbiAgICAgICAgICBxdWVyeS5mb2N1cygpXHJcbiAgICAgICAgfVxyXG4gICAgICB9LCA0MDAsIGV2LnRhcmdldClcclxuICAgIH0pLmxpc3RlbigpXHJcblxyXG4gICAgLyogTGlzdGVuZXI6IG9wZW4gc2VhcmNoIG9uIGZvY3VzICovXHJcbiAgICBuZXcgTWF0ZXJpYWwuRXZlbnQuTWF0Y2hNZWRpYShcIihtaW4td2lkdGg6IDk2MHB4KVwiLFxyXG4gICAgICBuZXcgTWF0ZXJpYWwuRXZlbnQuTGlzdGVuZXIoXCJbZGF0YS1tZC1jb21wb25lbnQ9cXVlcnldXCIsIFwiZm9jdXNcIiwgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRvZ2dsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1tZC10b2dnbGU9c2VhcmNoXVwiKVxyXG4gICAgICAgIGlmICghKHRvZ2dsZSBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQpKVxyXG4gICAgICAgICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yXHJcbiAgICAgICAgaWYgKCF0b2dnbGUuY2hlY2tlZCkge1xyXG4gICAgICAgICAgdG9nZ2xlLmNoZWNrZWQgPSB0cnVlXHJcbiAgICAgICAgICB0b2dnbGUuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoXCJjaGFuZ2VcIikpXHJcbiAgICAgICAgfVxyXG4gICAgICB9KSlcclxuXHJcbiAgICAvKiBMaXN0ZW5lcjoga2V5Ym9hcmQgaGFuZGxlcnMgKi8gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNvbXBsZXhpdHlcclxuICAgIG5ldyBNYXRlcmlhbC5FdmVudC5MaXN0ZW5lcih3aW5kb3csIFwia2V5ZG93blwiLCBldiA9PiB7ICAgICAgICAgICAgICAgICAgICAgICAgLy8gVE9ETzogc3BsaXQgdXAgaW50byBjb21wb25lbnQgdG8gcmVkdWNlIGNvbXBsZXhpdHlcclxuICAgICAgY29uc3QgdG9nZ2xlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLW1kLXRvZ2dsZT1zZWFyY2hdXCIpXHJcbiAgICAgIGlmICghKHRvZ2dsZSBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQpKVxyXG4gICAgICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvclxyXG4gICAgICBjb25zdCBxdWVyeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1tZC1jb21wb25lbnQ9cXVlcnldXCIpXHJcbiAgICAgIGlmICghKHF1ZXJ5IGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCkpXHJcbiAgICAgICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yXHJcblxyXG4gICAgICAvKiBBYm9ydCBpZiBtZXRhIGtleSAobWFjT1MpIG9yIGN0cmwga2V5IChXaW5kb3dzKSBpcyBwcmVzc2VkICovXHJcbiAgICAgIGlmIChldi5tZXRhS2V5IHx8IGV2LmN0cmxLZXkpXHJcbiAgICAgICAgcmV0dXJuXHJcblxyXG4gICAgICAvKiBTZWFyY2ggaXMgb3BlbiAqL1xyXG4gICAgICBpZiAodG9nZ2xlLmNoZWNrZWQpIHtcclxuXHJcbiAgICAgICAgLyogRW50ZXI6IHByZXZlbnQgZm9ybSBzdWJtaXNzaW9uICovXHJcbiAgICAgICAgaWYgKGV2LmtleUNvZGUgPT09IDEzKSB7XHJcbiAgICAgICAgICBpZiAocXVlcnkgPT09IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpIHtcclxuICAgICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKVxyXG5cclxuICAgICAgICAgICAgLyogR28gdG8gY3VycmVudCBhY3RpdmUvZm9jdXNlZCBsaW5rICovXHJcbiAgICAgICAgICAgIGNvbnN0IGZvY3VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgICAgICAgICAgICBcIltkYXRhLW1kLWNvbXBvbmVudD1zZWFyY2hdIFtocmVmXVtkYXRhLW1kLXN0YXRlPWFjdGl2ZV1cIilcclxuICAgICAgICAgICAgaWYgKGZvY3VzIGluc3RhbmNlb2YgSFRNTExpbmtFbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uID0gZm9jdXMuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKVxyXG5cclxuICAgICAgICAgICAgICAvKiBDbG9zZSBzZWFyY2ggKi9cclxuICAgICAgICAgICAgICB0b2dnbGUuY2hlY2tlZCA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgdG9nZ2xlLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwiY2hhbmdlXCIpKVxyXG4gICAgICAgICAgICAgIHF1ZXJ5LmJsdXIoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qIEVzY2FwZSBvciBUYWI6IGNsb3NlIHNlYXJjaCAqL1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZXYua2V5Q29kZSA9PT0gOSB8fCBldi5rZXlDb2RlID09PSAyNykge1xyXG4gICAgICAgICAgdG9nZ2xlLmNoZWNrZWQgPSBmYWxzZVxyXG4gICAgICAgICAgdG9nZ2xlLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwiY2hhbmdlXCIpKVxyXG4gICAgICAgICAgcXVlcnkuYmx1cigpXHJcblxyXG4gICAgICAgIC8qIEhvcml6b250YWwgYXJyb3dzIGFuZCBiYWNrc3BhY2U6IGZvY3VzIGlucHV0ICovXHJcbiAgICAgICAgfSBlbHNlIGlmIChbOCwgMzcsIDM5XS5pbmRleE9mKGV2LmtleUNvZGUpICE9PSAtMSkge1xyXG4gICAgICAgICAgaWYgKHF1ZXJ5ICE9PSBkb2N1bWVudC5hY3RpdmVFbGVtZW50KVxyXG4gICAgICAgICAgICBxdWVyeS5mb2N1cygpXHJcblxyXG4gICAgICAgIC8qIFZlcnRpY2FsIGFycm93czogc2VsZWN0IHByZXZpb3VzIG9yIG5leHQgc2VhcmNoIHJlc3VsdCAqL1xyXG4gICAgICAgIH0gZWxzZSBpZiAoWzM4LCA0MF0uaW5kZXhPZihldi5rZXlDb2RlKSAhPT0gLTEpIHtcclxuICAgICAgICAgIGNvbnN0IGtleSA9IGV2LmtleUNvZGVcclxuXHJcbiAgICAgICAgICAvKiBSZXRyaWV2ZSBhbGwgcmVzdWx0cyAqL1xyXG4gICAgICAgICAgY29uc3QgbGlua3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcclxuICAgICAgICAgICAgICBcIltkYXRhLW1kLWNvbXBvbmVudD1xdWVyeV0sIFtkYXRhLW1kLWNvbXBvbmVudD1zZWFyY2hdIFtocmVmXVwiKSlcclxuXHJcbiAgICAgICAgICAvKiBSZXRyaWV2ZSBjdXJyZW50IGFjdGl2ZS9mb2N1c2VkIHJlc3VsdCAqL1xyXG4gICAgICAgICAgY29uc3QgZm9jdXMgPSBsaW5rcy5maW5kKGxpbmsgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIShsaW5rIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKVxyXG4gICAgICAgICAgICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvclxyXG4gICAgICAgICAgICByZXR1cm4gbGluay5kYXRhc2V0Lm1kU3RhdGUgPT09IFwiYWN0aXZlXCJcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICBpZiAoZm9jdXMpXHJcbiAgICAgICAgICAgIGZvY3VzLmRhdGFzZXQubWRTdGF0ZSA9IFwiXCJcclxuXHJcbiAgICAgICAgICAvKiBDYWxjdWxhdGUgaW5kZXggZGVwZW5kaW5nIG9uIGRpcmVjdGlvbiwgYWRkIGxlbmd0aCB0byBmb3JtIHJpbmcgKi9cclxuICAgICAgICAgIGNvbnN0IGluZGV4ID0gTWF0aC5tYXgoMCwgKFxyXG4gICAgICAgICAgICBsaW5rcy5pbmRleE9mKGZvY3VzKSArIGxpbmtzLmxlbmd0aCArIChrZXkgPT09IDM4ID8gLTEgOiArMSlcclxuICAgICAgICAgICkgJSBsaW5rcy5sZW5ndGgpXHJcblxyXG4gICAgICAgICAgLyogU2V0IGFjdGl2ZSBzdGF0ZSBhbmQgZm9jdXMgKi9cclxuICAgICAgICAgIGlmIChsaW5rc1tpbmRleF0pIHtcclxuICAgICAgICAgICAgbGlua3NbaW5kZXhdLmRhdGFzZXQubWRTdGF0ZSA9IFwiYWN0aXZlXCJcclxuICAgICAgICAgICAgbGlua3NbaW5kZXhdLmZvY3VzKClcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAvKiBQcmV2ZW50IHNjcm9sbGluZyBvZiBwYWdlICovXHJcbiAgICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgICBldi5zdG9wUHJvcGFnYXRpb24oKVxyXG5cclxuICAgICAgICAgIC8qIFJldHVybiBmYWxzZSBwcmV2ZW50cyB0aGUgY3Vyc29yIHBvc2l0aW9uIGZyb20gY2hhbmdpbmcgKi9cclxuICAgICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgIC8qIFNlYXJjaCBpcyBjbG9zZWQgYW5kIHdlJ3JlIG5vdCBpbnNpZGUgYSBmb3JtICovXHJcbiAgICAgIH0gZWxzZSBpZiAoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCAmJiAhZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5mb3JtKSB7XHJcblxyXG4gICAgICAgIC8qIEYvUzogT3BlbiBzZWFyY2ggaWYgbm90IGluIGlucHV0IGZpZWxkICovXHJcbiAgICAgICAgaWYgKGV2LmtleUNvZGUgPT09IDcwIHx8IGV2LmtleUNvZGUgPT09IDgzKSB7XHJcbiAgICAgICAgICBxdWVyeS5mb2N1cygpXHJcbiAgICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KS5saXN0ZW4oKVxyXG5cclxuICAgIC8qIExpc3RlbmVyOiBmb2N1cyBxdWVyeSBpZiBpbiBzZWFyY2ggaXMgb3BlbiBhbmQgY2hhcmFjdGVyIGlzIHR5cGVkICovXHJcbiAgICBuZXcgTWF0ZXJpYWwuRXZlbnQuTGlzdGVuZXIod2luZG93LCBcImtleXByZXNzXCIsICgpID0+IHtcclxuICAgICAgY29uc3QgdG9nZ2xlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLW1kLXRvZ2dsZT1zZWFyY2hdXCIpXHJcbiAgICAgIGlmICghKHRvZ2dsZSBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQpKVxyXG4gICAgICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvclxyXG4gICAgICBpZiAodG9nZ2xlLmNoZWNrZWQpIHtcclxuICAgICAgICBjb25zdCBxdWVyeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1tZC1jb21wb25lbnQ9cXVlcnldXCIpXHJcbiAgICAgICAgaWYgKCEocXVlcnkgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50KSlcclxuICAgICAgICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvclxyXG4gICAgICAgIGlmIChxdWVyeSAhPT0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudClcclxuICAgICAgICAgIHF1ZXJ5LmZvY3VzKClcclxuICAgICAgfVxyXG4gICAgfSkubGlzdGVuKClcclxuICB9XHJcblxyXG4gIC8qIExpc3RlbmVyOiBoYW5kbGUgdGFiYmluZyBjb250ZXh0IGZvciBiZXR0ZXIgYWNjZXNzaWJpbGl0eSAqL1xyXG4gIG5ldyBNYXRlcmlhbC5FdmVudC5MaXN0ZW5lcihkb2N1bWVudC5ib2R5LCBcImtleWRvd25cIiwgZXYgPT4ge1xyXG4gICAgaWYgKGV2LmtleUNvZGUgPT09IDkpIHtcclxuICAgICAgY29uc3QgbGFiZWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcclxuICAgICAgICBcIltkYXRhLW1kLWNvbXBvbmVudD1uYXZpZ2F0aW9uXSAubWQtbmF2X19saW5rW2Zvcl06bm90KFt0YWJpbmRleF0pXCIpXHJcbiAgICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwobGFiZWxzLCBsYWJlbCA9PiB7XHJcbiAgICAgICAgaWYgKGxhYmVsLm9mZnNldEhlaWdodClcclxuICAgICAgICAgIGxhYmVsLnRhYkluZGV4ID0gMFxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH0pLmxpc3RlbigpXHJcblxyXG4gIC8qIExpc3RlbmVyOiByZXNldCB0YWJiaW5nIGJlaGF2aW9yICovXHJcbiAgbmV3IE1hdGVyaWFsLkV2ZW50Lkxpc3RlbmVyKGRvY3VtZW50LmJvZHksIFwibW91c2Vkb3duXCIsICgpID0+IHtcclxuICAgIGNvbnN0IGxhYmVscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXHJcbiAgICAgIFwiW2RhdGEtbWQtY29tcG9uZW50PW5hdmlnYXRpb25dIC5tZC1uYXZfX2xpbmtbdGFiaW5kZXhdXCIpXHJcbiAgICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGxhYmVscywgbGFiZWwgPT4ge1xyXG4gICAgICBsYWJlbC5yZW1vdmVBdHRyaWJ1dGUoXCJ0YWJJbmRleFwiKVxyXG4gICAgfSlcclxuICB9KS5saXN0ZW4oKVxyXG5cclxuICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICBpZiAoZG9jdW1lbnQuYm9keS5kYXRhc2V0Lm1kU3RhdGUgPT09IFwidGFiYmluZ1wiKVxyXG4gICAgICBkb2N1bWVudC5ib2R5LmRhdGFzZXQubWRTdGF0ZSA9IFwiXCJcclxuICB9KVxyXG5cclxuICAvKiBMaXN0ZW5lcjogY2xvc2UgZHJhd2VyIHdoZW4gYW5jaG9yIGxpbmtzIGFyZSBjbGlja2VkICovXHJcbiAgbmV3IE1hdGVyaWFsLkV2ZW50Lk1hdGNoTWVkaWEoXCIobWF4LXdpZHRoOiA5NTlweClcIixcclxuICAgIG5ldyBNYXRlcmlhbC5FdmVudC5MaXN0ZW5lcihcIltkYXRhLW1kLWNvbXBvbmVudD1uYXZpZ2F0aW9uXSBbaHJlZl49JyMnXVwiLFxyXG4gICAgICBcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICBjb25zdCB0b2dnbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtbWQtdG9nZ2xlPWRyYXdlcl1cIilcclxuICAgICAgICBpZiAoISh0b2dnbGUgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50KSlcclxuICAgICAgICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvclxyXG4gICAgICAgIGlmICh0b2dnbGUuY2hlY2tlZCkge1xyXG4gICAgICAgICAgdG9nZ2xlLmNoZWNrZWQgPSBmYWxzZVxyXG4gICAgICAgICAgdG9nZ2xlLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwiY2hhbmdlXCIpKVxyXG4gICAgICAgIH1cclxuICAgICAgfSkpXHJcblxyXG4gIC8qIFJldHJpZXZlIGZhY3RzIGZvciB0aGUgZ2l2ZW4gcmVwb3NpdG9yeSB0eXBlICovXHJcbiAgOygoKSA9PiB7XHJcbiAgICBjb25zdCBlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1tZC1zb3VyY2VdXCIpXHJcbiAgICBpZiAoIWVsKVxyXG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKFtdKVxyXG4gICAgZWxzZSBpZiAoIShlbCBpbnN0YW5jZW9mIEhUTUxBbmNob3JFbGVtZW50KSlcclxuICAgICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yXHJcbiAgICBzd2l0Y2ggKGVsLmRhdGFzZXQubWRTb3VyY2UpIHtcclxuICAgICAgY2FzZSBcImdpdGh1YlwiOiByZXR1cm4gbmV3IE1hdGVyaWFsLlNvdXJjZS5BZGFwdGVyLkdpdEh1YihlbCkuZmV0Y2goKVxyXG4gICAgICBkZWZhdWx0OiByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKFtdKVxyXG4gICAgfVxyXG5cclxuICAvKiBSZW5kZXIgcmVwb3NpdG9yeSBpbmZvcm1hdGlvbiAqL1xyXG4gIH0pKCkudGhlbihmYWN0cyA9PiB7XHJcbiAgICBjb25zdCBzb3VyY2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLW1kLXNvdXJjZV1cIilcclxuICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoc291cmNlcywgc291cmNlID0+IHtcclxuICAgICAgbmV3IE1hdGVyaWFsLlNvdXJjZS5SZXBvc2l0b3J5KHNvdXJjZSlcclxuICAgICAgICAuaW5pdGlhbGl6ZShmYWN0cylcclxuICAgIH0pXHJcbiAgfSlcclxufVxyXG5cclxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiBFeHBvcnRzXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuXHJcbi8qIFByb3ZpZGUgdGhpcyBmb3IgZG93bndhcmQgY29tcGF0aWJpbGl0eSBmb3Igbm93ICovXHJcbmNvbnN0IGFwcCA9IHtcclxuICBpbml0aWFsaXplXHJcbn1cclxuXHJcbmV4cG9ydCB7XHJcbiAgYXBwXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Fzc2V0cy9qYXZhc2NyaXB0cy9hcHBsaWNhdGlvbi5qcyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImFzc2V0cy9pbWFnZXMvaWNvbnMvYml0YnVja2V0LnN2Z1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Fzc2V0cy9pbWFnZXMvaWNvbnMvYml0YnVja2V0LnN2Z1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJhc3NldHMvaW1hZ2VzL2ljb25zL2dpdGh1Yi5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hc3NldHMvaW1hZ2VzL2ljb25zL2dpdGh1Yi5zdmdcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYXNzZXRzL2ltYWdlcy9pY29ucy9naXRsYWIuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXNzZXRzL2ltYWdlcy9pY29ucy9naXRsYWIuc3ZnXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Fzc2V0cy9zdHlsZXNoZWV0cy9hcHBsaWNhdGlvbi5zY3NzXG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Fzc2V0cy9zdHlsZXNoZWV0cy9hcHBsaWNhdGlvbi1wYWxldHRlLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIFBvbHlmaWxsIGZvciBjcmVhdGluZyBDdXN0b21FdmVudHMgb24gSUU5LzEwLzExXG5cbi8vIGNvZGUgcHVsbGVkIGZyb206XG4vLyBodHRwczovL2dpdGh1Yi5jb20vZDR0b2NjaGluaS9jdXN0b21ldmVudC1wb2x5ZmlsbFxuLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0N1c3RvbUV2ZW50I1BvbHlmaWxsXG5cbihmdW5jdGlvbigpIHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdHJ5IHtcbiAgICB2YXIgY2UgPSBuZXcgd2luZG93LkN1c3RvbUV2ZW50KCd0ZXN0JywgeyBjYW5jZWxhYmxlOiB0cnVlIH0pO1xuICAgIGNlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKGNlLmRlZmF1bHRQcmV2ZW50ZWQgIT09IHRydWUpIHtcbiAgICAgIC8vIElFIGhhcyBwcm9ibGVtcyB3aXRoIC5wcmV2ZW50RGVmYXVsdCgpIG9uIGN1c3RvbSBldmVudHNcbiAgICAgIC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMjMzNDkxOTFcbiAgICAgIHRocm93IG5ldyBFcnJvcignQ291bGQgbm90IHByZXZlbnQgZGVmYXVsdCcpO1xuICAgIH1cbiAgfSBjYXRjaCAoZSkge1xuICAgIHZhciBDdXN0b21FdmVudCA9IGZ1bmN0aW9uKGV2ZW50LCBwYXJhbXMpIHtcbiAgICAgIHZhciBldnQsIG9yaWdQcmV2ZW50O1xuICAgICAgcGFyYW1zID0gcGFyYW1zIHx8IHtcbiAgICAgICAgYnViYmxlczogZmFsc2UsXG4gICAgICAgIGNhbmNlbGFibGU6IGZhbHNlLFxuICAgICAgICBkZXRhaWw6IHVuZGVmaW5lZFxuICAgICAgfTtcblxuICAgICAgZXZ0ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0N1c3RvbUV2ZW50Jyk7XG4gICAgICBldnQuaW5pdEN1c3RvbUV2ZW50KFxuICAgICAgICBldmVudCxcbiAgICAgICAgcGFyYW1zLmJ1YmJsZXMsXG4gICAgICAgIHBhcmFtcy5jYW5jZWxhYmxlLFxuICAgICAgICBwYXJhbXMuZGV0YWlsXG4gICAgICApO1xuICAgICAgb3JpZ1ByZXZlbnQgPSBldnQucHJldmVudERlZmF1bHQ7XG4gICAgICBldnQucHJldmVudERlZmF1bHQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgb3JpZ1ByZXZlbnQuY2FsbCh0aGlzKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ2RlZmF1bHRQcmV2ZW50ZWQnLCB7XG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIHRoaXMuZGVmYXVsdFByZXZlbnRlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICByZXR1cm4gZXZ0O1xuICAgIH07XG5cbiAgICBDdXN0b21FdmVudC5wcm90b3R5cGUgPSB3aW5kb3cuRXZlbnQucHJvdG90eXBlO1xuICAgIHdpbmRvdy5DdXN0b21FdmVudCA9IEN1c3RvbUV2ZW50OyAvLyBleHBvc2UgZGVmaW5pdGlvbiB0byB3aW5kb3dcbiAgfVxufSkoKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9jdXN0b20tZXZlbnQtcG9seWZpbGwvcG9seWZpbGwuanMiLCJpZiAoIXdpbmRvdy5mZXRjaCkgd2luZG93LmZldGNoID0gcmVxdWlyZSgnLicpLmRlZmF1bHQgfHwgcmVxdWlyZSgnLicpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3VuZmV0Y2gvcG9seWZpbGwuanMiLCJpbXBvcnQgcHJvbWlzZUZpbmFsbHkgZnJvbSAnLi9maW5hbGx5JztcblxuLy8gU3RvcmUgc2V0VGltZW91dCByZWZlcmVuY2Ugc28gcHJvbWlzZS1wb2x5ZmlsbCB3aWxsIGJlIHVuYWZmZWN0ZWQgYnlcbi8vIG90aGVyIGNvZGUgbW9kaWZ5aW5nIHNldFRpbWVvdXQgKGxpa2Ugc2lub24udXNlRmFrZVRpbWVycygpKVxudmFyIHNldFRpbWVvdXRGdW5jID0gc2V0VGltZW91dDtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbi8vIFBvbHlmaWxsIGZvciBGdW5jdGlvbi5wcm90b3R5cGUuYmluZFxuZnVuY3Rpb24gYmluZChmbiwgdGhpc0FyZykge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgZm4uYXBwbHkodGhpc0FyZywgYXJndW1lbnRzKTtcbiAgfTtcbn1cblxuLyoqXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXG4gKi9cbmZ1bmN0aW9uIFByb21pc2UoZm4pIHtcbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIFByb21pc2UpKVxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1Byb21pc2VzIG11c3QgYmUgY29uc3RydWN0ZWQgdmlhIG5ldycpO1xuICBpZiAodHlwZW9mIGZuICE9PSAnZnVuY3Rpb24nKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdub3QgYSBmdW5jdGlvbicpO1xuICAvKiogQHR5cGUgeyFudW1iZXJ9ICovXG4gIHRoaXMuX3N0YXRlID0gMDtcbiAgLyoqIEB0eXBlIHshYm9vbGVhbn0gKi9cbiAgdGhpcy5faGFuZGxlZCA9IGZhbHNlO1xuICAvKiogQHR5cGUge1Byb21pc2V8dW5kZWZpbmVkfSAqL1xuICB0aGlzLl92YWx1ZSA9IHVuZGVmaW5lZDtcbiAgLyoqIEB0eXBlIHshQXJyYXk8IUZ1bmN0aW9uPn0gKi9cbiAgdGhpcy5fZGVmZXJyZWRzID0gW107XG5cbiAgZG9SZXNvbHZlKGZuLCB0aGlzKTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlKHNlbGYsIGRlZmVycmVkKSB7XG4gIHdoaWxlIChzZWxmLl9zdGF0ZSA9PT0gMykge1xuICAgIHNlbGYgPSBzZWxmLl92YWx1ZTtcbiAgfVxuICBpZiAoc2VsZi5fc3RhdGUgPT09IDApIHtcbiAgICBzZWxmLl9kZWZlcnJlZHMucHVzaChkZWZlcnJlZCk7XG4gICAgcmV0dXJuO1xuICB9XG4gIHNlbGYuX2hhbmRsZWQgPSB0cnVlO1xuICBQcm9taXNlLl9pbW1lZGlhdGVGbihmdW5jdGlvbigpIHtcbiAgICB2YXIgY2IgPSBzZWxmLl9zdGF0ZSA9PT0gMSA/IGRlZmVycmVkLm9uRnVsZmlsbGVkIDogZGVmZXJyZWQub25SZWplY3RlZDtcbiAgICBpZiAoY2IgPT09IG51bGwpIHtcbiAgICAgIChzZWxmLl9zdGF0ZSA9PT0gMSA/IHJlc29sdmUgOiByZWplY3QpKGRlZmVycmVkLnByb21pc2UsIHNlbGYuX3ZhbHVlKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHJldDtcbiAgICB0cnkge1xuICAgICAgcmV0ID0gY2Ioc2VsZi5fdmFsdWUpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJlamVjdChkZWZlcnJlZC5wcm9taXNlLCBlKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgcmVzb2x2ZShkZWZlcnJlZC5wcm9taXNlLCByZXQpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gcmVzb2x2ZShzZWxmLCBuZXdWYWx1ZSkge1xuICB0cnkge1xuICAgIC8vIFByb21pc2UgUmVzb2x1dGlvbiBQcm9jZWR1cmU6IGh0dHBzOi8vZ2l0aHViLmNvbS9wcm9taXNlcy1hcGx1cy9wcm9taXNlcy1zcGVjI3RoZS1wcm9taXNlLXJlc29sdXRpb24tcHJvY2VkdXJlXG4gICAgaWYgKG5ld1ZhbHVlID09PSBzZWxmKVxuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQSBwcm9taXNlIGNhbm5vdCBiZSByZXNvbHZlZCB3aXRoIGl0c2VsZi4nKTtcbiAgICBpZiAoXG4gICAgICBuZXdWYWx1ZSAmJlxuICAgICAgKHR5cGVvZiBuZXdWYWx1ZSA9PT0gJ29iamVjdCcgfHwgdHlwZW9mIG5ld1ZhbHVlID09PSAnZnVuY3Rpb24nKVxuICAgICkge1xuICAgICAgdmFyIHRoZW4gPSBuZXdWYWx1ZS50aGVuO1xuICAgICAgaWYgKG5ld1ZhbHVlIGluc3RhbmNlb2YgUHJvbWlzZSkge1xuICAgICAgICBzZWxmLl9zdGF0ZSA9IDM7XG4gICAgICAgIHNlbGYuX3ZhbHVlID0gbmV3VmFsdWU7XG4gICAgICAgIGZpbmFsZShzZWxmKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgdGhlbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBkb1Jlc29sdmUoYmluZCh0aGVuLCBuZXdWYWx1ZSksIHNlbGYpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuICAgIHNlbGYuX3N0YXRlID0gMTtcbiAgICBzZWxmLl92YWx1ZSA9IG5ld1ZhbHVlO1xuICAgIGZpbmFsZShzZWxmKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJlamVjdChzZWxmLCBlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZWplY3Qoc2VsZiwgbmV3VmFsdWUpIHtcbiAgc2VsZi5fc3RhdGUgPSAyO1xuICBzZWxmLl92YWx1ZSA9IG5ld1ZhbHVlO1xuICBmaW5hbGUoc2VsZik7XG59XG5cbmZ1bmN0aW9uIGZpbmFsZShzZWxmKSB7XG4gIGlmIChzZWxmLl9zdGF0ZSA9PT0gMiAmJiBzZWxmLl9kZWZlcnJlZHMubGVuZ3RoID09PSAwKSB7XG4gICAgUHJvbWlzZS5faW1tZWRpYXRlRm4oZnVuY3Rpb24oKSB7XG4gICAgICBpZiAoIXNlbGYuX2hhbmRsZWQpIHtcbiAgICAgICAgUHJvbWlzZS5fdW5oYW5kbGVkUmVqZWN0aW9uRm4oc2VsZi5fdmFsdWUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHNlbGYuX2RlZmVycmVkcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIGhhbmRsZShzZWxmLCBzZWxmLl9kZWZlcnJlZHNbaV0pO1xuICB9XG4gIHNlbGYuX2RlZmVycmVkcyA9IG51bGw7XG59XG5cbi8qKlxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmZ1bmN0aW9uIEhhbmRsZXIob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQsIHByb21pc2UpIHtcbiAgdGhpcy5vbkZ1bGZpbGxlZCA9IHR5cGVvZiBvbkZ1bGZpbGxlZCA9PT0gJ2Z1bmN0aW9uJyA/IG9uRnVsZmlsbGVkIDogbnVsbDtcbiAgdGhpcy5vblJlamVjdGVkID0gdHlwZW9mIG9uUmVqZWN0ZWQgPT09ICdmdW5jdGlvbicgPyBvblJlamVjdGVkIDogbnVsbDtcbiAgdGhpcy5wcm9taXNlID0gcHJvbWlzZTtcbn1cblxuLyoqXG4gKiBUYWtlIGEgcG90ZW50aWFsbHkgbWlzYmVoYXZpbmcgcmVzb2x2ZXIgZnVuY3Rpb24gYW5kIG1ha2Ugc3VyZVxuICogb25GdWxmaWxsZWQgYW5kIG9uUmVqZWN0ZWQgYXJlIG9ubHkgY2FsbGVkIG9uY2UuXG4gKlxuICogTWFrZXMgbm8gZ3VhcmFudGVlcyBhYm91dCBhc3luY2hyb255LlxuICovXG5mdW5jdGlvbiBkb1Jlc29sdmUoZm4sIHNlbGYpIHtcbiAgdmFyIGRvbmUgPSBmYWxzZTtcbiAgdHJ5IHtcbiAgICBmbihcbiAgICAgIGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgIGlmIChkb25lKSByZXR1cm47XG4gICAgICAgIGRvbmUgPSB0cnVlO1xuICAgICAgICByZXNvbHZlKHNlbGYsIHZhbHVlKTtcbiAgICAgIH0sXG4gICAgICBmdW5jdGlvbihyZWFzb24pIHtcbiAgICAgICAgaWYgKGRvbmUpIHJldHVybjtcbiAgICAgICAgZG9uZSA9IHRydWU7XG4gICAgICAgIHJlamVjdChzZWxmLCByZWFzb24pO1xuICAgICAgfVxuICAgICk7XG4gIH0gY2F0Y2ggKGV4KSB7XG4gICAgaWYgKGRvbmUpIHJldHVybjtcbiAgICBkb25lID0gdHJ1ZTtcbiAgICByZWplY3Qoc2VsZiwgZXgpO1xuICB9XG59XG5cblByb21pc2UucHJvdG90eXBlWydjYXRjaCddID0gZnVuY3Rpb24ob25SZWplY3RlZCkge1xuICByZXR1cm4gdGhpcy50aGVuKG51bGwsIG9uUmVqZWN0ZWQpO1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUudGhlbiA9IGZ1bmN0aW9uKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKSB7XG4gIC8vIEB0cy1pZ25vcmVcbiAgdmFyIHByb20gPSBuZXcgdGhpcy5jb25zdHJ1Y3Rvcihub29wKTtcblxuICBoYW5kbGUodGhpcywgbmV3IEhhbmRsZXIob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQsIHByb20pKTtcbiAgcmV0dXJuIHByb207XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZVsnZmluYWxseSddID0gcHJvbWlzZUZpbmFsbHk7XG5cblByb21pc2UuYWxsID0gZnVuY3Rpb24oYXJyKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICBpZiAoIWFyciB8fCB0eXBlb2YgYXJyLmxlbmd0aCA9PT0gJ3VuZGVmaW5lZCcpXG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdQcm9taXNlLmFsbCBhY2NlcHRzIGFuIGFycmF5Jyk7XG4gICAgdmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcnIpO1xuICAgIGlmIChhcmdzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIHJlc29sdmUoW10pO1xuICAgIHZhciByZW1haW5pbmcgPSBhcmdzLmxlbmd0aDtcblxuICAgIGZ1bmN0aW9uIHJlcyhpLCB2YWwpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmICh2YWwgJiYgKHR5cGVvZiB2YWwgPT09ICdvYmplY3QnIHx8IHR5cGVvZiB2YWwgPT09ICdmdW5jdGlvbicpKSB7XG4gICAgICAgICAgdmFyIHRoZW4gPSB2YWwudGhlbjtcbiAgICAgICAgICBpZiAodHlwZW9mIHRoZW4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHRoZW4uY2FsbChcbiAgICAgICAgICAgICAgdmFsLFxuICAgICAgICAgICAgICBmdW5jdGlvbih2YWwpIHtcbiAgICAgICAgICAgICAgICByZXMoaSwgdmFsKTtcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgcmVqZWN0XG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBhcmdzW2ldID0gdmFsO1xuICAgICAgICBpZiAoLS1yZW1haW5pbmcgPT09IDApIHtcbiAgICAgICAgICByZXNvbHZlKGFyZ3MpO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChleCkge1xuICAgICAgICByZWplY3QoZXgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkrKykge1xuICAgICAgcmVzKGksIGFyZ3NbaV0pO1xuICAgIH1cbiAgfSk7XG59O1xuXG5Qcm9taXNlLnJlc29sdmUgPSBmdW5jdGlvbih2YWx1ZSkge1xuICBpZiAodmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZS5jb25zdHJ1Y3RvciA9PT0gUHJvbWlzZSkge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlKSB7XG4gICAgcmVzb2x2ZSh2YWx1ZSk7XG4gIH0pO1xufTtcblxuUHJvbWlzZS5yZWplY3QgPSBmdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgcmVqZWN0KHZhbHVlKTtcbiAgfSk7XG59O1xuXG5Qcm9taXNlLnJhY2UgPSBmdW5jdGlvbih2YWx1ZXMpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSB2YWx1ZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIHZhbHVlc1tpXS50aGVuKHJlc29sdmUsIHJlamVjdCk7XG4gICAgfVxuICB9KTtcbn07XG5cbi8vIFVzZSBwb2x5ZmlsbCBmb3Igc2V0SW1tZWRpYXRlIGZvciBwZXJmb3JtYW5jZSBnYWluc1xuUHJvbWlzZS5faW1tZWRpYXRlRm4gPVxuICAodHlwZW9mIHNldEltbWVkaWF0ZSA9PT0gJ2Z1bmN0aW9uJyAmJlxuICAgIGZ1bmN0aW9uKGZuKSB7XG4gICAgICBzZXRJbW1lZGlhdGUoZm4pO1xuICAgIH0pIHx8XG4gIGZ1bmN0aW9uKGZuKSB7XG4gICAgc2V0VGltZW91dEZ1bmMoZm4sIDApO1xuICB9O1xuXG5Qcm9taXNlLl91bmhhbmRsZWRSZWplY3Rpb25GbiA9IGZ1bmN0aW9uIF91bmhhbmRsZWRSZWplY3Rpb25GbihlcnIpIHtcbiAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJyAmJiBjb25zb2xlKSB7XG4gICAgY29uc29sZS53YXJuKCdQb3NzaWJsZSBVbmhhbmRsZWQgUHJvbWlzZSBSZWplY3Rpb246JywgZXJyKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByb21pc2U7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvcHJvbWlzZS1wb2x5ZmlsbC9zcmMvaW5kZXguanMiLCJ2YXIgc2NvcGUgPSAodHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBnbG9iYWwpIHx8XG4gICAgICAgICAgICAodHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgJiYgc2VsZikgfHxcbiAgICAgICAgICAgIHdpbmRvdztcbnZhciBhcHBseSA9IEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseTtcblxuLy8gRE9NIEFQSXMsIGZvciBjb21wbGV0ZW5lc3NcblxuZXhwb3J0cy5zZXRUaW1lb3V0ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBuZXcgVGltZW91dChhcHBseS5jYWxsKHNldFRpbWVvdXQsIHNjb3BlLCBhcmd1bWVudHMpLCBjbGVhclRpbWVvdXQpO1xufTtcbmV4cG9ydHMuc2V0SW50ZXJ2YWwgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIG5ldyBUaW1lb3V0KGFwcGx5LmNhbGwoc2V0SW50ZXJ2YWwsIHNjb3BlLCBhcmd1bWVudHMpLCBjbGVhckludGVydmFsKTtcbn07XG5leHBvcnRzLmNsZWFyVGltZW91dCA9XG5leHBvcnRzLmNsZWFySW50ZXJ2YWwgPSBmdW5jdGlvbih0aW1lb3V0KSB7XG4gIGlmICh0aW1lb3V0KSB7XG4gICAgdGltZW91dC5jbG9zZSgpO1xuICB9XG59O1xuXG5mdW5jdGlvbiBUaW1lb3V0KGlkLCBjbGVhckZuKSB7XG4gIHRoaXMuX2lkID0gaWQ7XG4gIHRoaXMuX2NsZWFyRm4gPSBjbGVhckZuO1xufVxuVGltZW91dC5wcm90b3R5cGUudW5yZWYgPSBUaW1lb3V0LnByb3RvdHlwZS5yZWYgPSBmdW5jdGlvbigpIHt9O1xuVGltZW91dC5wcm90b3R5cGUuY2xvc2UgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5fY2xlYXJGbi5jYWxsKHNjb3BlLCB0aGlzLl9pZCk7XG59O1xuXG4vLyBEb2VzIG5vdCBzdGFydCB0aGUgdGltZSwganVzdCBzZXRzIHVwIHRoZSBtZW1iZXJzIG5lZWRlZC5cbmV4cG9ydHMuZW5yb2xsID0gZnVuY3Rpb24oaXRlbSwgbXNlY3MpIHtcbiAgY2xlYXJUaW1lb3V0KGl0ZW0uX2lkbGVUaW1lb3V0SWQpO1xuICBpdGVtLl9pZGxlVGltZW91dCA9IG1zZWNzO1xufTtcblxuZXhwb3J0cy51bmVucm9sbCA9IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgY2xlYXJUaW1lb3V0KGl0ZW0uX2lkbGVUaW1lb3V0SWQpO1xuICBpdGVtLl9pZGxlVGltZW91dCA9IC0xO1xufTtcblxuZXhwb3J0cy5fdW5yZWZBY3RpdmUgPSBleHBvcnRzLmFjdGl2ZSA9IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgY2xlYXJUaW1lb3V0KGl0ZW0uX2lkbGVUaW1lb3V0SWQpO1xuXG4gIHZhciBtc2VjcyA9IGl0ZW0uX2lkbGVUaW1lb3V0O1xuICBpZiAobXNlY3MgPj0gMCkge1xuICAgIGl0ZW0uX2lkbGVUaW1lb3V0SWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uIG9uVGltZW91dCgpIHtcbiAgICAgIGlmIChpdGVtLl9vblRpbWVvdXQpXG4gICAgICAgIGl0ZW0uX29uVGltZW91dCgpO1xuICAgIH0sIG1zZWNzKTtcbiAgfVxufTtcblxuLy8gc2V0aW1tZWRpYXRlIGF0dGFjaGVzIGl0c2VsZiB0byB0aGUgZ2xvYmFsIG9iamVjdFxucmVxdWlyZShcInNldGltbWVkaWF0ZVwiKTtcbi8vIE9uIHNvbWUgZXhvdGljIGVudmlyb25tZW50cywgaXQncyBub3QgY2xlYXIgd2hpY2ggb2JqZWN0IGBzZXRpbW1lZGlhdGVgIHdhc1xuLy8gYWJsZSB0byBpbnN0YWxsIG9udG8uICBTZWFyY2ggZWFjaCBwb3NzaWJpbGl0eSBpbiB0aGUgc2FtZSBvcmRlciBhcyB0aGVcbi8vIGBzZXRpbW1lZGlhdGVgIGxpYnJhcnkuXG5leHBvcnRzLnNldEltbWVkaWF0ZSA9ICh0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiAmJiBzZWxmLnNldEltbWVkaWF0ZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgKHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgJiYgZ2xvYmFsLnNldEltbWVkaWF0ZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMgJiYgdGhpcy5zZXRJbW1lZGlhdGUpO1xuZXhwb3J0cy5jbGVhckltbWVkaWF0ZSA9ICh0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiAmJiBzZWxmLmNsZWFySW1tZWRpYXRlKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICh0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiICYmIGdsb2JhbC5jbGVhckltbWVkaWF0ZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAodGhpcyAmJiB0aGlzLmNsZWFySW1tZWRpYXRlKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90aW1lcnMtYnJvd3NlcmlmeS9tYWluLmpzIiwiKGZ1bmN0aW9uIChnbG9iYWwsIHVuZGVmaW5lZCkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgaWYgKGdsb2JhbC5zZXRJbW1lZGlhdGUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBuZXh0SGFuZGxlID0gMTsgLy8gU3BlYyBzYXlzIGdyZWF0ZXIgdGhhbiB6ZXJvXG4gICAgdmFyIHRhc2tzQnlIYW5kbGUgPSB7fTtcbiAgICB2YXIgY3VycmVudGx5UnVubmluZ0FUYXNrID0gZmFsc2U7XG4gICAgdmFyIGRvYyA9IGdsb2JhbC5kb2N1bWVudDtcbiAgICB2YXIgcmVnaXN0ZXJJbW1lZGlhdGU7XG5cbiAgICBmdW5jdGlvbiBzZXRJbW1lZGlhdGUoY2FsbGJhY2spIHtcbiAgICAgIC8vIENhbGxiYWNrIGNhbiBlaXRoZXIgYmUgYSBmdW5jdGlvbiBvciBhIHN0cmluZ1xuICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIGNhbGxiYWNrID0gbmV3IEZ1bmN0aW9uKFwiXCIgKyBjYWxsYmFjayk7XG4gICAgICB9XG4gICAgICAvLyBDb3B5IGZ1bmN0aW9uIGFyZ3VtZW50c1xuICAgICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgYXJnc1tpXSA9IGFyZ3VtZW50c1tpICsgMV07XG4gICAgICB9XG4gICAgICAvLyBTdG9yZSBhbmQgcmVnaXN0ZXIgdGhlIHRhc2tcbiAgICAgIHZhciB0YXNrID0geyBjYWxsYmFjazogY2FsbGJhY2ssIGFyZ3M6IGFyZ3MgfTtcbiAgICAgIHRhc2tzQnlIYW5kbGVbbmV4dEhhbmRsZV0gPSB0YXNrO1xuICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUobmV4dEhhbmRsZSk7XG4gICAgICByZXR1cm4gbmV4dEhhbmRsZSsrO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNsZWFySW1tZWRpYXRlKGhhbmRsZSkge1xuICAgICAgICBkZWxldGUgdGFza3NCeUhhbmRsZVtoYW5kbGVdO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJ1bih0YXNrKSB7XG4gICAgICAgIHZhciBjYWxsYmFjayA9IHRhc2suY2FsbGJhY2s7XG4gICAgICAgIHZhciBhcmdzID0gdGFzay5hcmdzO1xuICAgICAgICBzd2l0Y2ggKGFyZ3MubGVuZ3RoKSB7XG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgY2FsbGJhY2soYXJnc1swXSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgY2FsbGJhY2soYXJnc1swXSwgYXJnc1sxXSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgY2FsbGJhY2soYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGNhbGxiYWNrLmFwcGx5KHVuZGVmaW5lZCwgYXJncyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJ1bklmUHJlc2VudChoYW5kbGUpIHtcbiAgICAgICAgLy8gRnJvbSB0aGUgc3BlYzogXCJXYWl0IHVudGlsIGFueSBpbnZvY2F0aW9ucyBvZiB0aGlzIGFsZ29yaXRobSBzdGFydGVkIGJlZm9yZSB0aGlzIG9uZSBoYXZlIGNvbXBsZXRlZC5cIlxuICAgICAgICAvLyBTbyBpZiB3ZSdyZSBjdXJyZW50bHkgcnVubmluZyBhIHRhc2ssIHdlJ2xsIG5lZWQgdG8gZGVsYXkgdGhpcyBpbnZvY2F0aW9uLlxuICAgICAgICBpZiAoY3VycmVudGx5UnVubmluZ0FUYXNrKSB7XG4gICAgICAgICAgICAvLyBEZWxheSBieSBkb2luZyBhIHNldFRpbWVvdXQuIHNldEltbWVkaWF0ZSB3YXMgdHJpZWQgaW5zdGVhZCwgYnV0IGluIEZpcmVmb3ggNyBpdCBnZW5lcmF0ZWQgYVxuICAgICAgICAgICAgLy8gXCJ0b28gbXVjaCByZWN1cnNpb25cIiBlcnJvci5cbiAgICAgICAgICAgIHNldFRpbWVvdXQocnVuSWZQcmVzZW50LCAwLCBoYW5kbGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIHRhc2sgPSB0YXNrc0J5SGFuZGxlW2hhbmRsZV07XG4gICAgICAgICAgICBpZiAodGFzaykge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRseVJ1bm5pbmdBVGFzayA9IHRydWU7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgcnVuKHRhc2spO1xuICAgICAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW1tZWRpYXRlKGhhbmRsZSk7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRseVJ1bm5pbmdBVGFzayA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc3RhbGxOZXh0VGlja0ltcGxlbWVudGF0aW9uKCkge1xuICAgICAgICByZWdpc3RlckltbWVkaWF0ZSA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgICAgICAgICAgcHJvY2Vzcy5uZXh0VGljayhmdW5jdGlvbiAoKSB7IHJ1bklmUHJlc2VudChoYW5kbGUpOyB9KTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjYW5Vc2VQb3N0TWVzc2FnZSgpIHtcbiAgICAgICAgLy8gVGhlIHRlc3QgYWdhaW5zdCBgaW1wb3J0U2NyaXB0c2AgcHJldmVudHMgdGhpcyBpbXBsZW1lbnRhdGlvbiBmcm9tIGJlaW5nIGluc3RhbGxlZCBpbnNpZGUgYSB3ZWIgd29ya2VyLFxuICAgICAgICAvLyB3aGVyZSBgZ2xvYmFsLnBvc3RNZXNzYWdlYCBtZWFucyBzb21ldGhpbmcgY29tcGxldGVseSBkaWZmZXJlbnQgYW5kIGNhbid0IGJlIHVzZWQgZm9yIHRoaXMgcHVycG9zZS5cbiAgICAgICAgaWYgKGdsb2JhbC5wb3N0TWVzc2FnZSAmJiAhZ2xvYmFsLmltcG9ydFNjcmlwdHMpIHtcbiAgICAgICAgICAgIHZhciBwb3N0TWVzc2FnZUlzQXN5bmNocm9ub3VzID0gdHJ1ZTtcbiAgICAgICAgICAgIHZhciBvbGRPbk1lc3NhZ2UgPSBnbG9iYWwub25tZXNzYWdlO1xuICAgICAgICAgICAgZ2xvYmFsLm9ubWVzc2FnZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHBvc3RNZXNzYWdlSXNBc3luY2hyb25vdXMgPSBmYWxzZTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBnbG9iYWwucG9zdE1lc3NhZ2UoXCJcIiwgXCIqXCIpO1xuICAgICAgICAgICAgZ2xvYmFsLm9ubWVzc2FnZSA9IG9sZE9uTWVzc2FnZTtcbiAgICAgICAgICAgIHJldHVybiBwb3N0TWVzc2FnZUlzQXN5bmNocm9ub3VzO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zdGFsbFBvc3RNZXNzYWdlSW1wbGVtZW50YXRpb24oKSB7XG4gICAgICAgIC8vIEluc3RhbGxzIGFuIGV2ZW50IGhhbmRsZXIgb24gYGdsb2JhbGAgZm9yIHRoZSBgbWVzc2FnZWAgZXZlbnQ6IHNlZVxuICAgICAgICAvLyAqIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuL0RPTS93aW5kb3cucG9zdE1lc3NhZ2VcbiAgICAgICAgLy8gKiBodHRwOi8vd3d3LndoYXR3Zy5vcmcvc3BlY3Mvd2ViLWFwcHMvY3VycmVudC13b3JrL211bHRpcGFnZS9jb21tcy5odG1sI2Nyb3NzRG9jdW1lbnRNZXNzYWdlc1xuXG4gICAgICAgIHZhciBtZXNzYWdlUHJlZml4ID0gXCJzZXRJbW1lZGlhdGUkXCIgKyBNYXRoLnJhbmRvbSgpICsgXCIkXCI7XG4gICAgICAgIHZhciBvbkdsb2JhbE1lc3NhZ2UgPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgaWYgKGV2ZW50LnNvdXJjZSA9PT0gZ2xvYmFsICYmXG4gICAgICAgICAgICAgICAgdHlwZW9mIGV2ZW50LmRhdGEgPT09IFwic3RyaW5nXCIgJiZcbiAgICAgICAgICAgICAgICBldmVudC5kYXRhLmluZGV4T2YobWVzc2FnZVByZWZpeCkgPT09IDApIHtcbiAgICAgICAgICAgICAgICBydW5JZlByZXNlbnQoK2V2ZW50LmRhdGEuc2xpY2UobWVzc2FnZVByZWZpeC5sZW5ndGgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIpIHtcbiAgICAgICAgICAgIGdsb2JhbC5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLCBvbkdsb2JhbE1lc3NhZ2UsIGZhbHNlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGdsb2JhbC5hdHRhY2hFdmVudChcIm9ubWVzc2FnZVwiLCBvbkdsb2JhbE1lc3NhZ2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUgPSBmdW5jdGlvbihoYW5kbGUpIHtcbiAgICAgICAgICAgIGdsb2JhbC5wb3N0TWVzc2FnZShtZXNzYWdlUHJlZml4ICsgaGFuZGxlLCBcIipcIik7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zdGFsbE1lc3NhZ2VDaGFubmVsSW1wbGVtZW50YXRpb24oKSB7XG4gICAgICAgIHZhciBjaGFubmVsID0gbmV3IE1lc3NhZ2VDaGFubmVsKCk7XG4gICAgICAgIGNoYW5uZWwucG9ydDEub25tZXNzYWdlID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgIHZhciBoYW5kbGUgPSBldmVudC5kYXRhO1xuICAgICAgICAgICAgcnVuSWZQcmVzZW50KGhhbmRsZSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUgPSBmdW5jdGlvbihoYW5kbGUpIHtcbiAgICAgICAgICAgIGNoYW5uZWwucG9ydDIucG9zdE1lc3NhZ2UoaGFuZGxlKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnN0YWxsUmVhZHlTdGF0ZUNoYW5nZUltcGxlbWVudGF0aW9uKCkge1xuICAgICAgICB2YXIgaHRtbCA9IGRvYy5kb2N1bWVudEVsZW1lbnQ7XG4gICAgICAgIHJlZ2lzdGVySW1tZWRpYXRlID0gZnVuY3Rpb24oaGFuZGxlKSB7XG4gICAgICAgICAgICAvLyBDcmVhdGUgYSA8c2NyaXB0PiBlbGVtZW50OyBpdHMgcmVhZHlzdGF0ZWNoYW5nZSBldmVudCB3aWxsIGJlIGZpcmVkIGFzeW5jaHJvbm91c2x5IG9uY2UgaXQgaXMgaW5zZXJ0ZWRcbiAgICAgICAgICAgIC8vIGludG8gdGhlIGRvY3VtZW50LiBEbyBzbywgdGh1cyBxdWV1aW5nIHVwIHRoZSB0YXNrLiBSZW1lbWJlciB0byBjbGVhbiB1cCBvbmNlIGl0J3MgYmVlbiBjYWxsZWQuXG4gICAgICAgICAgICB2YXIgc2NyaXB0ID0gZG9jLmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XG4gICAgICAgICAgICBzY3JpcHQub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJ1bklmUHJlc2VudChoYW5kbGUpO1xuICAgICAgICAgICAgICAgIHNjcmlwdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBudWxsO1xuICAgICAgICAgICAgICAgIGh0bWwucmVtb3ZlQ2hpbGQoc2NyaXB0KTtcbiAgICAgICAgICAgICAgICBzY3JpcHQgPSBudWxsO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGh0bWwuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnN0YWxsU2V0VGltZW91dEltcGxlbWVudGF0aW9uKCkge1xuICAgICAgICByZWdpc3RlckltbWVkaWF0ZSA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgICAgICAgICAgc2V0VGltZW91dChydW5JZlByZXNlbnQsIDAsIGhhbmRsZSk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gSWYgc3VwcG9ydGVkLCB3ZSBzaG91bGQgYXR0YWNoIHRvIHRoZSBwcm90b3R5cGUgb2YgZ2xvYmFsLCBzaW5jZSB0aGF0IGlzIHdoZXJlIHNldFRpbWVvdXQgZXQgYWwuIGxpdmUuXG4gICAgdmFyIGF0dGFjaFRvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mICYmIE9iamVjdC5nZXRQcm90b3R5cGVPZihnbG9iYWwpO1xuICAgIGF0dGFjaFRvID0gYXR0YWNoVG8gJiYgYXR0YWNoVG8uc2V0VGltZW91dCA/IGF0dGFjaFRvIDogZ2xvYmFsO1xuXG4gICAgLy8gRG9uJ3QgZ2V0IGZvb2xlZCBieSBlLmcuIGJyb3dzZXJpZnkgZW52aXJvbm1lbnRzLlxuICAgIGlmICh7fS50b1N0cmluZy5jYWxsKGdsb2JhbC5wcm9jZXNzKSA9PT0gXCJbb2JqZWN0IHByb2Nlc3NdXCIpIHtcbiAgICAgICAgLy8gRm9yIE5vZGUuanMgYmVmb3JlIDAuOVxuICAgICAgICBpbnN0YWxsTmV4dFRpY2tJbXBsZW1lbnRhdGlvbigpO1xuXG4gICAgfSBlbHNlIGlmIChjYW5Vc2VQb3N0TWVzc2FnZSgpKSB7XG4gICAgICAgIC8vIEZvciBub24tSUUxMCBtb2Rlcm4gYnJvd3NlcnNcbiAgICAgICAgaW5zdGFsbFBvc3RNZXNzYWdlSW1wbGVtZW50YXRpb24oKTtcblxuICAgIH0gZWxzZSBpZiAoZ2xvYmFsLk1lc3NhZ2VDaGFubmVsKSB7XG4gICAgICAgIC8vIEZvciB3ZWIgd29ya2Vycywgd2hlcmUgc3VwcG9ydGVkXG4gICAgICAgIGluc3RhbGxNZXNzYWdlQ2hhbm5lbEltcGxlbWVudGF0aW9uKCk7XG5cbiAgICB9IGVsc2UgaWYgKGRvYyAmJiBcIm9ucmVhZHlzdGF0ZWNoYW5nZVwiIGluIGRvYy5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpKSB7XG4gICAgICAgIC8vIEZvciBJRSA24oCTOFxuICAgICAgICBpbnN0YWxsUmVhZHlTdGF0ZUNoYW5nZUltcGxlbWVudGF0aW9uKCk7XG5cbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyBGb3Igb2xkZXIgYnJvd3NlcnNcbiAgICAgICAgaW5zdGFsbFNldFRpbWVvdXRJbXBsZW1lbnRhdGlvbigpO1xuICAgIH1cblxuICAgIGF0dGFjaFRvLnNldEltbWVkaWF0ZSA9IHNldEltbWVkaWF0ZTtcbiAgICBhdHRhY2hUby5jbGVhckltbWVkaWF0ZSA9IGNsZWFySW1tZWRpYXRlO1xufSh0eXBlb2Ygc2VsZiA9PT0gXCJ1bmRlZmluZWRcIiA/IHR5cGVvZiBnbG9iYWwgPT09IFwidW5kZWZpbmVkXCIgPyB0aGlzIDogZ2xvYmFsIDogc2VsZikpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3NldGltbWVkaWF0ZS9zZXRJbW1lZGlhdGUuanMiLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRPbmNlTGlzdGVuZXIgPSBub29wO1xuXG5wcm9jZXNzLmxpc3RlbmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBbXSB9XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIi8qKlxuICogQHRoaXMge1Byb21pc2V9XG4gKi9cbmZ1bmN0aW9uIGZpbmFsbHlDb25zdHJ1Y3RvcihjYWxsYmFjaykge1xuICB2YXIgY29uc3RydWN0b3IgPSB0aGlzLmNvbnN0cnVjdG9yO1xuICByZXR1cm4gdGhpcy50aGVuKFxuICAgIGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICByZXR1cm4gY29uc3RydWN0b3IucmVzb2x2ZShjYWxsYmFjaygpKS50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICB9KTtcbiAgICB9LFxuICAgIGZ1bmN0aW9uKHJlYXNvbikge1xuICAgICAgcmV0dXJuIGNvbnN0cnVjdG9yLnJlc29sdmUoY2FsbGJhY2soKSkudGhlbihmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIGNvbnN0cnVjdG9yLnJlamVjdChyZWFzb24pO1xuICAgICAgfSk7XG4gICAgfVxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmaW5hbGx5Q29uc3RydWN0b3I7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvcHJvbWlzZS1wb2x5ZmlsbC9zcmMvZmluYWxseS5qcyIsIi8qIVxuICogY2xpcGJvYXJkLmpzIHYyLjAuMVxuICogaHR0cHM6Ly96ZW5vcm9jaGEuZ2l0aHViLmlvL2NsaXBib2FyZC5qc1xuICogXG4gKiBMaWNlbnNlZCBNSVQgwqkgWmVubyBSb2NoYVxuICovXG4oZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJDbGlwYm9hcmRKU1wiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJDbGlwYm9hcmRKU1wiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIC8qKioqKiovIChmdW5jdGlvbihtb2R1bGVzKSB7IC8vIHdlYnBhY2tCb290c3RyYXBcbi8qKioqKiovIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbi8qKioqKiovIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbi8qKioqKiovIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuLyoqKioqKi8gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4vKioqKioqLyBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuLyoqKioqKi8gXHRcdFx0aTogbW9kdWxlSWQsXG4vKioqKioqLyBcdFx0XHRsOiBmYWxzZSxcbi8qKioqKiovIFx0XHRcdGV4cG9ydHM6IHt9XG4vKioqKioqLyBcdFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4vKioqKioqLyBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbi8qKioqKiovIFx0XHRtb2R1bGUubCA9IHRydWU7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4vKioqKioqLyBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuLyoqKioqKi8gXHR9XG4vKioqKioqL1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbi8qKioqKiovIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4vKioqKioqLyBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuLyoqKioqKi8gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuLyoqKioqKi8gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuLyoqKioqKi8gXHRcdFx0XHRnZXQ6IGdldHRlclxuLyoqKioqKi8gXHRcdFx0fSk7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4vKioqKioqLyBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4vKioqKioqLyBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuLyoqKioqKi8gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4vKioqKioqLyBcdFx0cmV0dXJuIGdldHRlcjtcbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vKioqKioqLyBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDMpO1xuLyoqKioqKi8gfSlcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqLyAoW1xuLyogMCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG52YXIgX19XRUJQQUNLX0FNRF9ERUZJTkVfRkFDVE9SWV9fLCBfX1dFQlBBQ0tfQU1EX0RFRklORV9BUlJBWV9fLCBfX1dFQlBBQ0tfQU1EX0RFRklORV9SRVNVTFRfXzsoZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICAgIGlmICh0cnVlKSB7XG4gICAgICAgICEoX19XRUJQQUNLX0FNRF9ERUZJTkVfQVJSQVlfXyA9IFttb2R1bGUsIF9fd2VicGFja19yZXF1aXJlX18oNyldLCBfX1dFQlBBQ0tfQU1EX0RFRklORV9GQUNUT1JZX18gPSAoZmFjdG9yeSksXG5cdFx0XHRcdF9fV0VCUEFDS19BTURfREVGSU5FX1JFU1VMVF9fID0gKHR5cGVvZiBfX1dFQlBBQ0tfQU1EX0RFRklORV9GQUNUT1JZX18gPT09ICdmdW5jdGlvbicgP1xuXHRcdFx0XHQoX19XRUJQQUNLX0FNRF9ERUZJTkVfRkFDVE9SWV9fLmFwcGx5KGV4cG9ydHMsIF9fV0VCUEFDS19BTURfREVGSU5FX0FSUkFZX18pKSA6IF9fV0VCUEFDS19BTURfREVGSU5FX0ZBQ1RPUllfXyksXG5cdFx0XHRcdF9fV0VCUEFDS19BTURfREVGSU5FX1JFU1VMVF9fICE9PSB1bmRlZmluZWQgJiYgKG1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0FNRF9ERUZJTkVfUkVTVUxUX18pKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBleHBvcnRzICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGZhY3RvcnkobW9kdWxlLCByZXF1aXJlKCdzZWxlY3QnKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIG1vZCA9IHtcbiAgICAgICAgICAgIGV4cG9ydHM6IHt9XG4gICAgICAgIH07XG4gICAgICAgIGZhY3RvcnkobW9kLCBnbG9iYWwuc2VsZWN0KTtcbiAgICAgICAgZ2xvYmFsLmNsaXBib2FyZEFjdGlvbiA9IG1vZC5leHBvcnRzO1xuICAgIH1cbn0pKHRoaXMsIGZ1bmN0aW9uIChtb2R1bGUsIF9zZWxlY3QpIHtcbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICB2YXIgX3NlbGVjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zZWxlY3QpO1xuXG4gICAgZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgICAgICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG9ialxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7XG4gICAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH0gOiBmdW5jdGlvbiAob2JqKSB7XG4gICAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gICAgICAgIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICAgICAgICAgICAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgICAgICAgICAgICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgICAgICAgICAgIGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gICAgICAgICAgICBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgICAgICAgICAgIHJldHVybiBDb25zdHJ1Y3RvcjtcbiAgICAgICAgfTtcbiAgICB9KCk7XG5cbiAgICB2YXIgQ2xpcGJvYXJkQWN0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIENsaXBib2FyZEFjdGlvbihvcHRpb25zKSB7XG4gICAgICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ2xpcGJvYXJkQWN0aW9uKTtcblxuICAgICAgICAgICAgdGhpcy5yZXNvbHZlT3B0aW9ucyhvcHRpb25zKTtcbiAgICAgICAgICAgIHRoaXMuaW5pdFNlbGVjdGlvbigpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIERlZmluZXMgYmFzZSBwcm9wZXJ0aWVzIHBhc3NlZCBmcm9tIGNvbnN0cnVjdG9yLlxuICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICAgICAgICAgKi9cblxuXG4gICAgICAgIF9jcmVhdGVDbGFzcyhDbGlwYm9hcmRBY3Rpb24sIFt7XG4gICAgICAgICAgICBrZXk6ICdyZXNvbHZlT3B0aW9ucycsXG4gICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVzb2x2ZU9wdGlvbnMoKSB7XG4gICAgICAgICAgICAgICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuXG4gICAgICAgICAgICAgICAgdGhpcy5hY3Rpb24gPSBvcHRpb25zLmFjdGlvbjtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRhaW5lciA9IG9wdGlvbnMuY29udGFpbmVyO1xuICAgICAgICAgICAgICAgIHRoaXMuZW1pdHRlciA9IG9wdGlvbnMuZW1pdHRlcjtcbiAgICAgICAgICAgICAgICB0aGlzLnRhcmdldCA9IG9wdGlvbnMudGFyZ2V0O1xuICAgICAgICAgICAgICAgIHRoaXMudGV4dCA9IG9wdGlvbnMudGV4dDtcbiAgICAgICAgICAgICAgICB0aGlzLnRyaWdnZXIgPSBvcHRpb25zLnRyaWdnZXI7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkVGV4dCA9ICcnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBrZXk6ICdpbml0U2VsZWN0aW9uJyxcbiAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBpbml0U2VsZWN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnRleHQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RGYWtlKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnRhcmdldCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdFRhcmdldCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwge1xuICAgICAgICAgICAga2V5OiAnc2VsZWN0RmFrZScsXG4gICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gc2VsZWN0RmFrZSgpIHtcbiAgICAgICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICAgICAgICAgICAgdmFyIGlzUlRMID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmdldEF0dHJpYnV0ZSgnZGlyJykgPT0gJ3J0bCc7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUZha2UoKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuZmFrZUhhbmRsZXJDYWxsYmFjayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzLnJlbW92ZUZha2UoKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHRoaXMuZmFrZUhhbmRsZXIgPSB0aGlzLmNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuZmFrZUhhbmRsZXJDYWxsYmFjaykgfHwgdHJ1ZTtcblxuICAgICAgICAgICAgICAgIHRoaXMuZmFrZUVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICAgICAgICAgICAgICAgIC8vIFByZXZlbnQgem9vbWluZyBvbiBpT1NcbiAgICAgICAgICAgICAgICB0aGlzLmZha2VFbGVtLnN0eWxlLmZvbnRTaXplID0gJzEycHQnO1xuICAgICAgICAgICAgICAgIC8vIFJlc2V0IGJveCBtb2RlbFxuICAgICAgICAgICAgICAgIHRoaXMuZmFrZUVsZW0uc3R5bGUuYm9yZGVyID0gJzAnO1xuICAgICAgICAgICAgICAgIHRoaXMuZmFrZUVsZW0uc3R5bGUucGFkZGluZyA9ICcwJztcbiAgICAgICAgICAgICAgICB0aGlzLmZha2VFbGVtLnN0eWxlLm1hcmdpbiA9ICcwJztcbiAgICAgICAgICAgICAgICAvLyBNb3ZlIGVsZW1lbnQgb3V0IG9mIHNjcmVlbiBob3Jpem9udGFsbHlcbiAgICAgICAgICAgICAgICB0aGlzLmZha2VFbGVtLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICAgICAgICAgICAgICB0aGlzLmZha2VFbGVtLnN0eWxlW2lzUlRMID8gJ3JpZ2h0JyA6ICdsZWZ0J10gPSAnLTk5OTlweCc7XG4gICAgICAgICAgICAgICAgLy8gTW92ZSBlbGVtZW50IHRvIHRoZSBzYW1lIHBvc2l0aW9uIHZlcnRpY2FsbHlcbiAgICAgICAgICAgICAgICB2YXIgeVBvc2l0aW9uID0gd2luZG93LnBhZ2VZT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3A7XG4gICAgICAgICAgICAgICAgdGhpcy5mYWtlRWxlbS5zdHlsZS50b3AgPSB5UG9zaXRpb24gKyAncHgnO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5mYWtlRWxlbS5zZXRBdHRyaWJ1dGUoJ3JlYWRvbmx5JywgJycpO1xuICAgICAgICAgICAgICAgIHRoaXMuZmFrZUVsZW0udmFsdWUgPSB0aGlzLnRleHQ7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmZha2VFbGVtKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRUZXh0ID0gKDAsIF9zZWxlY3QyLmRlZmF1bHQpKHRoaXMuZmFrZUVsZW0pO1xuICAgICAgICAgICAgICAgIHRoaXMuY29weVRleHQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwge1xuICAgICAgICAgICAga2V5OiAncmVtb3ZlRmFrZScsXG4gICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVtb3ZlRmFrZSgpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5mYWtlSGFuZGxlcikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuZmFrZUhhbmRsZXJDYWxsYmFjayk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmFrZUhhbmRsZXIgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmZha2VIYW5kbGVyQ2FsbGJhY2sgPSBudWxsO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmZha2VFbGVtKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLnJlbW92ZUNoaWxkKHRoaXMuZmFrZUVsZW0pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmZha2VFbGVtID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGtleTogJ3NlbGVjdFRhcmdldCcsXG4gICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gc2VsZWN0VGFyZ2V0KCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRUZXh0ID0gKDAsIF9zZWxlY3QyLmRlZmF1bHQpKHRoaXMudGFyZ2V0KTtcbiAgICAgICAgICAgICAgICB0aGlzLmNvcHlUZXh0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGtleTogJ2NvcHlUZXh0JyxcbiAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBjb3B5VGV4dCgpIHtcbiAgICAgICAgICAgICAgICB2YXIgc3VjY2VlZGVkID0gdm9pZCAwO1xuXG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VlZGVkID0gZG9jdW1lbnQuZXhlY0NvbW1hbmQodGhpcy5hY3Rpb24pO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgICAgICBzdWNjZWVkZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZVJlc3VsdChzdWNjZWVkZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBrZXk6ICdoYW5kbGVSZXN1bHQnLFxuICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGhhbmRsZVJlc3VsdChzdWNjZWVkZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVtaXR0ZXIuZW1pdChzdWNjZWVkZWQgPyAnc3VjY2VzcycgOiAnZXJyb3InLCB7XG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbjogdGhpcy5hY3Rpb24sXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IHRoaXMuc2VsZWN0ZWRUZXh0LFxuICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyOiB0aGlzLnRyaWdnZXIsXG4gICAgICAgICAgICAgICAgICAgIGNsZWFyU2VsZWN0aW9uOiB0aGlzLmNsZWFyU2VsZWN0aW9uLmJpbmQodGhpcylcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwge1xuICAgICAgICAgICAga2V5OiAnY2xlYXJTZWxlY3Rpb24nLFxuICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNsZWFyU2VsZWN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnRyaWdnZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50cmlnZ2VyLmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgd2luZG93LmdldFNlbGVjdGlvbigpLnJlbW92ZUFsbFJhbmdlcygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBrZXk6ICdkZXN0cm95JyxcbiAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlRmFrZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBrZXk6ICdhY3Rpb24nLFxuICAgICAgICAgICAgc2V0OiBmdW5jdGlvbiBzZXQoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGFjdGlvbiA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogJ2NvcHknO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5fYWN0aW9uID0gYWN0aW9uO1xuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2FjdGlvbiAhPT0gJ2NvcHknICYmIHRoaXMuX2FjdGlvbiAhPT0gJ2N1dCcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIFwiYWN0aW9uXCIgdmFsdWUsIHVzZSBlaXRoZXIgXCJjb3B5XCIgb3IgXCJjdXRcIicpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fYWN0aW9uO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBrZXk6ICd0YXJnZXQnLFxuICAgICAgICAgICAgc2V0OiBmdW5jdGlvbiBzZXQodGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgaWYgKHRhcmdldCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0YXJnZXQgJiYgKHR5cGVvZiB0YXJnZXQgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKHRhcmdldCkpID09PSAnb2JqZWN0JyAmJiB0YXJnZXQubm9kZVR5cGUgPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmFjdGlvbiA9PT0gJ2NvcHknICYmIHRhcmdldC5oYXNBdHRyaWJ1dGUoJ2Rpc2FibGVkJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgXCJ0YXJnZXRcIiBhdHRyaWJ1dGUuIFBsZWFzZSB1c2UgXCJyZWFkb25seVwiIGluc3RlYWQgb2YgXCJkaXNhYmxlZFwiIGF0dHJpYnV0ZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5hY3Rpb24gPT09ICdjdXQnICYmICh0YXJnZXQuaGFzQXR0cmlidXRlKCdyZWFkb25seScpIHx8IHRhcmdldC5oYXNBdHRyaWJ1dGUoJ2Rpc2FibGVkJykpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIFwidGFyZ2V0XCIgYXR0cmlidXRlLiBZb3UgY2FuXFwndCBjdXQgdGV4dCBmcm9tIGVsZW1lbnRzIHdpdGggXCJyZWFkb25seVwiIG9yIFwiZGlzYWJsZWRcIiBhdHRyaWJ1dGVzJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3RhcmdldCA9IHRhcmdldDtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBcInRhcmdldFwiIHZhbHVlLCB1c2UgYSB2YWxpZCBFbGVtZW50Jyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3RhcmdldDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfV0pO1xuXG4gICAgICAgIHJldHVybiBDbGlwYm9hcmRBY3Rpb247XG4gICAgfSgpO1xuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBDbGlwYm9hcmRBY3Rpb247XG59KTtcblxuLyoqKi8gfSksXG4vKiAxICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbnZhciBpcyA9IF9fd2VicGFja19yZXF1aXJlX18oNik7XG52YXIgZGVsZWdhdGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDUpO1xuXG4vKipcbiAqIFZhbGlkYXRlcyBhbGwgcGFyYW1zIGFuZCBjYWxscyB0aGUgcmlnaHRcbiAqIGxpc3RlbmVyIGZ1bmN0aW9uIGJhc2VkIG9uIGl0cyB0YXJnZXQgdHlwZS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ3xIVE1MRWxlbWVudHxIVE1MQ29sbGVjdGlvbnxOb2RlTGlzdH0gdGFyZ2V0XG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xuZnVuY3Rpb24gbGlzdGVuKHRhcmdldCwgdHlwZSwgY2FsbGJhY2spIHtcbiAgICBpZiAoIXRhcmdldCAmJiAhdHlwZSAmJiAhY2FsbGJhY2spIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIHJlcXVpcmVkIGFyZ3VtZW50cycpO1xuICAgIH1cblxuICAgIGlmICghaXMuc3RyaW5nKHR5cGUpKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1NlY29uZCBhcmd1bWVudCBtdXN0IGJlIGEgU3RyaW5nJyk7XG4gICAgfVxuXG4gICAgaWYgKCFpcy5mbihjYWxsYmFjaykpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVGhpcmQgYXJndW1lbnQgbXVzdCBiZSBhIEZ1bmN0aW9uJyk7XG4gICAgfVxuXG4gICAgaWYgKGlzLm5vZGUodGFyZ2V0KSkge1xuICAgICAgICByZXR1cm4gbGlzdGVuTm9kZSh0YXJnZXQsIHR5cGUsIGNhbGxiYWNrKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoaXMubm9kZUxpc3QodGFyZ2V0KSkge1xuICAgICAgICByZXR1cm4gbGlzdGVuTm9kZUxpc3QodGFyZ2V0LCB0eXBlLCBjYWxsYmFjayk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGlzLnN0cmluZyh0YXJnZXQpKSB7XG4gICAgICAgIHJldHVybiBsaXN0ZW5TZWxlY3Rvcih0YXJnZXQsIHR5cGUsIGNhbGxiYWNrKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ZpcnN0IGFyZ3VtZW50IG11c3QgYmUgYSBTdHJpbmcsIEhUTUxFbGVtZW50LCBIVE1MQ29sbGVjdGlvbiwgb3IgTm9kZUxpc3QnKTtcbiAgICB9XG59XG5cbi8qKlxuICogQWRkcyBhbiBldmVudCBsaXN0ZW5lciB0byBhIEhUTUwgZWxlbWVudFxuICogYW5kIHJldHVybnMgYSByZW1vdmUgbGlzdGVuZXIgZnVuY3Rpb24uXG4gKlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gbm9kZVxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cbmZ1bmN0aW9uIGxpc3Rlbk5vZGUobm9kZSwgdHlwZSwgY2FsbGJhY2spIHtcbiAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgY2FsbGJhY2spO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZGVzdHJveTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZSwgY2FsbGJhY2spO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vKipcbiAqIEFkZCBhbiBldmVudCBsaXN0ZW5lciB0byBhIGxpc3Qgb2YgSFRNTCBlbGVtZW50c1xuICogYW5kIHJldHVybnMgYSByZW1vdmUgbGlzdGVuZXIgZnVuY3Rpb24uXG4gKlxuICogQHBhcmFtIHtOb2RlTGlzdHxIVE1MQ29sbGVjdGlvbn0gbm9kZUxpc3RcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICogQHJldHVybiB7T2JqZWN0fVxuICovXG5mdW5jdGlvbiBsaXN0ZW5Ob2RlTGlzdChub2RlTGlzdCwgdHlwZSwgY2FsbGJhY2spIHtcbiAgICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKG5vZGVMaXN0LCBmdW5jdGlvbihub2RlKSB7XG4gICAgICAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBjYWxsYmFjayk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBkZXN0cm95OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwobm9kZUxpc3QsIGZ1bmN0aW9uKG5vZGUpIHtcbiAgICAgICAgICAgICAgICBub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZSwgY2FsbGJhY2spO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8qKlxuICogQWRkIGFuIGV2ZW50IGxpc3RlbmVyIHRvIGEgc2VsZWN0b3JcbiAqIGFuZCByZXR1cm5zIGEgcmVtb3ZlIGxpc3RlbmVyIGZ1bmN0aW9uLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzZWxlY3RvclxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cbmZ1bmN0aW9uIGxpc3RlblNlbGVjdG9yKHNlbGVjdG9yLCB0eXBlLCBjYWxsYmFjaykge1xuICAgIHJldHVybiBkZWxlZ2F0ZShkb2N1bWVudC5ib2R5LCBzZWxlY3RvciwgdHlwZSwgY2FsbGJhY2spO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxpc3RlbjtcblxuXG4vKioqLyB9KSxcbi8qIDIgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuZnVuY3Rpb24gRSAoKSB7XG4gIC8vIEtlZXAgdGhpcyBlbXB0eSBzbyBpdCdzIGVhc2llciB0byBpbmhlcml0IGZyb21cbiAgLy8gKHZpYSBodHRwczovL2dpdGh1Yi5jb20vbGlwc21hY2sgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vc2NvdHRjb3JnYW4vdGlueS1lbWl0dGVyL2lzc3Vlcy8zKVxufVxuXG5FLnByb3RvdHlwZSA9IHtcbiAgb246IGZ1bmN0aW9uIChuYW1lLCBjYWxsYmFjaywgY3R4KSB7XG4gICAgdmFyIGUgPSB0aGlzLmUgfHwgKHRoaXMuZSA9IHt9KTtcblxuICAgIChlW25hbWVdIHx8IChlW25hbWVdID0gW10pKS5wdXNoKHtcbiAgICAgIGZuOiBjYWxsYmFjayxcbiAgICAgIGN0eDogY3R4XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfSxcblxuICBvbmNlOiBmdW5jdGlvbiAobmFtZSwgY2FsbGJhY2ssIGN0eCkge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICBmdW5jdGlvbiBsaXN0ZW5lciAoKSB7XG4gICAgICBzZWxmLm9mZihuYW1lLCBsaXN0ZW5lcik7XG4gICAgICBjYWxsYmFjay5hcHBseShjdHgsIGFyZ3VtZW50cyk7XG4gICAgfTtcblxuICAgIGxpc3RlbmVyLl8gPSBjYWxsYmFja1xuICAgIHJldHVybiB0aGlzLm9uKG5hbWUsIGxpc3RlbmVyLCBjdHgpO1xuICB9LFxuXG4gIGVtaXQ6IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdmFyIGRhdGEgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG4gICAgdmFyIGV2dEFyciA9ICgodGhpcy5lIHx8ICh0aGlzLmUgPSB7fSkpW25hbWVdIHx8IFtdKS5zbGljZSgpO1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIgbGVuID0gZXZ0QXJyLmxlbmd0aDtcblxuICAgIGZvciAoaTsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBldnRBcnJbaV0uZm4uYXBwbHkoZXZ0QXJyW2ldLmN0eCwgZGF0YSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH0sXG5cbiAgb2ZmOiBmdW5jdGlvbiAobmFtZSwgY2FsbGJhY2spIHtcbiAgICB2YXIgZSA9IHRoaXMuZSB8fCAodGhpcy5lID0ge30pO1xuICAgIHZhciBldnRzID0gZVtuYW1lXTtcbiAgICB2YXIgbGl2ZUV2ZW50cyA9IFtdO1xuXG4gICAgaWYgKGV2dHMgJiYgY2FsbGJhY2spIHtcbiAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBldnRzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIGlmIChldnRzW2ldLmZuICE9PSBjYWxsYmFjayAmJiBldnRzW2ldLmZuLl8gIT09IGNhbGxiYWNrKVxuICAgICAgICAgIGxpdmVFdmVudHMucHVzaChldnRzW2ldKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZW1vdmUgZXZlbnQgZnJvbSBxdWV1ZSB0byBwcmV2ZW50IG1lbW9yeSBsZWFrXG4gICAgLy8gU3VnZ2VzdGVkIGJ5IGh0dHBzOi8vZ2l0aHViLmNvbS9sYXpkXG4gICAgLy8gUmVmOiBodHRwczovL2dpdGh1Yi5jb20vc2NvdHRjb3JnYW4vdGlueS1lbWl0dGVyL2NvbW1pdC9jNmViZmFhOWJjOTczYjMzZDExMGE4NGEzMDc3NDJiN2NmOTRjOTUzI2NvbW1pdGNvbW1lbnQtNTAyNDkxMFxuXG4gICAgKGxpdmVFdmVudHMubGVuZ3RoKVxuICAgICAgPyBlW25hbWVdID0gbGl2ZUV2ZW50c1xuICAgICAgOiBkZWxldGUgZVtuYW1lXTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEU7XG5cblxuLyoqKi8gfSksXG4vKiAzICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbnZhciBfX1dFQlBBQ0tfQU1EX0RFRklORV9GQUNUT1JZX18sIF9fV0VCUEFDS19BTURfREVGSU5FX0FSUkFZX18sIF9fV0VCUEFDS19BTURfREVGSU5FX1JFU1VMVF9fOyhmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gICAgaWYgKHRydWUpIHtcbiAgICAgICAgIShfX1dFQlBBQ0tfQU1EX0RFRklORV9BUlJBWV9fID0gW21vZHVsZSwgX193ZWJwYWNrX3JlcXVpcmVfXygwKSwgX193ZWJwYWNrX3JlcXVpcmVfXygyKSwgX193ZWJwYWNrX3JlcXVpcmVfXygxKV0sIF9fV0VCUEFDS19BTURfREVGSU5FX0ZBQ1RPUllfXyA9IChmYWN0b3J5KSxcblx0XHRcdFx0X19XRUJQQUNLX0FNRF9ERUZJTkVfUkVTVUxUX18gPSAodHlwZW9mIF9fV0VCUEFDS19BTURfREVGSU5FX0ZBQ1RPUllfXyA9PT0gJ2Z1bmN0aW9uJyA/XG5cdFx0XHRcdChfX1dFQlBBQ0tfQU1EX0RFRklORV9GQUNUT1JZX18uYXBwbHkoZXhwb3J0cywgX19XRUJQQUNLX0FNRF9ERUZJTkVfQVJSQVlfXykpIDogX19XRUJQQUNLX0FNRF9ERUZJTkVfRkFDVE9SWV9fKSxcblx0XHRcdFx0X19XRUJQQUNLX0FNRF9ERUZJTkVfUkVTVUxUX18gIT09IHVuZGVmaW5lZCAmJiAobW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfQU1EX0RFRklORV9SRVNVTFRfXykpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGV4cG9ydHMgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgZmFjdG9yeShtb2R1bGUsIHJlcXVpcmUoJy4vY2xpcGJvYXJkLWFjdGlvbicpLCByZXF1aXJlKCd0aW55LWVtaXR0ZXInKSwgcmVxdWlyZSgnZ29vZC1saXN0ZW5lcicpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgbW9kID0ge1xuICAgICAgICAgICAgZXhwb3J0czoge31cbiAgICAgICAgfTtcbiAgICAgICAgZmFjdG9yeShtb2QsIGdsb2JhbC5jbGlwYm9hcmRBY3Rpb24sIGdsb2JhbC50aW55RW1pdHRlciwgZ2xvYmFsLmdvb2RMaXN0ZW5lcik7XG4gICAgICAgIGdsb2JhbC5jbGlwYm9hcmQgPSBtb2QuZXhwb3J0cztcbiAgICB9XG59KSh0aGlzLCBmdW5jdGlvbiAobW9kdWxlLCBfY2xpcGJvYXJkQWN0aW9uLCBfdGlueUVtaXR0ZXIsIF9nb29kTGlzdGVuZXIpIHtcbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICB2YXIgX2NsaXBib2FyZEFjdGlvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGlwYm9hcmRBY3Rpb24pO1xuXG4gICAgdmFyIF90aW55RW1pdHRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90aW55RW1pdHRlcik7XG5cbiAgICB2YXIgX2dvb2RMaXN0ZW5lcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nb29kTGlzdGVuZXIpO1xuXG4gICAgZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgICAgICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG9ialxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7XG4gICAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH0gOiBmdW5jdGlvbiAob2JqKSB7XG4gICAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gICAgICAgIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICAgICAgICAgICAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgICAgICAgICAgICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgICAgICAgICAgIGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gICAgICAgICAgICBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgICAgICAgICAgIHJldHVybiBDb25zdHJ1Y3RvcjtcbiAgICAgICAgfTtcbiAgICB9KCk7XG5cbiAgICBmdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7XG4gICAgICAgIGlmICghc2VsZikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7XG4gICAgICAgICAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBzdWJDbGFzcyxcbiAgICAgICAgICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzcztcbiAgICB9XG5cbiAgICB2YXIgQ2xpcGJvYXJkID0gZnVuY3Rpb24gKF9FbWl0dGVyKSB7XG4gICAgICAgIF9pbmhlcml0cyhDbGlwYm9hcmQsIF9FbWl0dGVyKTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHtTdHJpbmd8SFRNTEVsZW1lbnR8SFRNTENvbGxlY3Rpb258Tm9kZUxpc3R9IHRyaWdnZXJcbiAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIENsaXBib2FyZCh0cmlnZ2VyLCBvcHRpb25zKSB7XG4gICAgICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ2xpcGJvYXJkKTtcblxuICAgICAgICAgICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKENsaXBib2FyZC5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKENsaXBib2FyZCkpLmNhbGwodGhpcykpO1xuXG4gICAgICAgICAgICBfdGhpcy5yZXNvbHZlT3B0aW9ucyhvcHRpb25zKTtcbiAgICAgICAgICAgIF90aGlzLmxpc3RlbkNsaWNrKHRyaWdnZXIpO1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIERlZmluZXMgaWYgYXR0cmlidXRlcyB3b3VsZCBiZSByZXNvbHZlZCB1c2luZyBpbnRlcm5hbCBzZXR0ZXIgZnVuY3Rpb25zXG4gICAgICAgICAqIG9yIGN1c3RvbSBmdW5jdGlvbnMgdGhhdCB3ZXJlIHBhc3NlZCBpbiB0aGUgY29uc3RydWN0b3IuXG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gICAgICAgICAqL1xuXG5cbiAgICAgICAgX2NyZWF0ZUNsYXNzKENsaXBib2FyZCwgW3tcbiAgICAgICAgICAgIGtleTogJ3Jlc29sdmVPcHRpb25zJyxcbiAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZXNvbHZlT3B0aW9ucygpIHtcbiAgICAgICAgICAgICAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG5cbiAgICAgICAgICAgICAgICB0aGlzLmFjdGlvbiA9IHR5cGVvZiBvcHRpb25zLmFjdGlvbiA9PT0gJ2Z1bmN0aW9uJyA/IG9wdGlvbnMuYWN0aW9uIDogdGhpcy5kZWZhdWx0QWN0aW9uO1xuICAgICAgICAgICAgICAgIHRoaXMudGFyZ2V0ID0gdHlwZW9mIG9wdGlvbnMudGFyZ2V0ID09PSAnZnVuY3Rpb24nID8gb3B0aW9ucy50YXJnZXQgOiB0aGlzLmRlZmF1bHRUYXJnZXQ7XG4gICAgICAgICAgICAgICAgdGhpcy50ZXh0ID0gdHlwZW9mIG9wdGlvbnMudGV4dCA9PT0gJ2Z1bmN0aW9uJyA/IG9wdGlvbnMudGV4dCA6IHRoaXMuZGVmYXVsdFRleHQ7XG4gICAgICAgICAgICAgICAgdGhpcy5jb250YWluZXIgPSBfdHlwZW9mKG9wdGlvbnMuY29udGFpbmVyKSA9PT0gJ29iamVjdCcgPyBvcHRpb25zLmNvbnRhaW5lciA6IGRvY3VtZW50LmJvZHk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGtleTogJ2xpc3RlbkNsaWNrJyxcbiAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBsaXN0ZW5DbGljayh0cmlnZ2VyKSB7XG4gICAgICAgICAgICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmxpc3RlbmVyID0gKDAsIF9nb29kTGlzdGVuZXIyLmRlZmF1bHQpKHRyaWdnZXIsICdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfdGhpczIub25DbGljayhlKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwge1xuICAgICAgICAgICAga2V5OiAnb25DbGljaycsXG4gICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gb25DbGljayhlKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRyaWdnZXIgPSBlLmRlbGVnYXRlVGFyZ2V0IHx8IGUuY3VycmVudFRhcmdldDtcblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNsaXBib2FyZEFjdGlvbikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNsaXBib2FyZEFjdGlvbiA9IG51bGw7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy5jbGlwYm9hcmRBY3Rpb24gPSBuZXcgX2NsaXBib2FyZEFjdGlvbjIuZGVmYXVsdCh7XG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbjogdGhpcy5hY3Rpb24odHJpZ2dlciksXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldDogdGhpcy50YXJnZXQodHJpZ2dlciksXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IHRoaXMudGV4dCh0cmlnZ2VyKSxcbiAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyOiB0aGlzLmNvbnRhaW5lcixcbiAgICAgICAgICAgICAgICAgICAgdHJpZ2dlcjogdHJpZ2dlcixcbiAgICAgICAgICAgICAgICAgICAgZW1pdHRlcjogdGhpc1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBrZXk6ICdkZWZhdWx0QWN0aW9uJyxcbiAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBkZWZhdWx0QWN0aW9uKHRyaWdnZXIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZ2V0QXR0cmlidXRlVmFsdWUoJ2FjdGlvbicsIHRyaWdnZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBrZXk6ICdkZWZhdWx0VGFyZ2V0JyxcbiAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBkZWZhdWx0VGFyZ2V0KHRyaWdnZXIpIHtcbiAgICAgICAgICAgICAgICB2YXIgc2VsZWN0b3IgPSBnZXRBdHRyaWJ1dGVWYWx1ZSgndGFyZ2V0JywgdHJpZ2dlcik7XG5cbiAgICAgICAgICAgICAgICBpZiAoc2VsZWN0b3IpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwge1xuICAgICAgICAgICAga2V5OiAnZGVmYXVsdFRleHQnLFxuICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGRlZmF1bHRUZXh0KHRyaWdnZXIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZ2V0QXR0cmlidXRlVmFsdWUoJ3RleHQnLCB0cmlnZ2VyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwge1xuICAgICAgICAgICAga2V5OiAnZGVzdHJveScsXG4gICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxpc3RlbmVyLmRlc3Ryb3koKTtcblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNsaXBib2FyZEFjdGlvbikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNsaXBib2FyZEFjdGlvbi5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xpcGJvYXJkQWN0aW9uID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1dLCBbe1xuICAgICAgICAgICAga2V5OiAnaXNTdXBwb3J0ZWQnLFxuICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGlzU3VwcG9ydGVkKCkge1xuICAgICAgICAgICAgICAgIHZhciBhY3Rpb24gPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IFsnY29weScsICdjdXQnXTtcblxuICAgICAgICAgICAgICAgIHZhciBhY3Rpb25zID0gdHlwZW9mIGFjdGlvbiA9PT0gJ3N0cmluZycgPyBbYWN0aW9uXSA6IGFjdGlvbjtcbiAgICAgICAgICAgICAgICB2YXIgc3VwcG9ydCA9ICEhZG9jdW1lbnQucXVlcnlDb21tYW5kU3VwcG9ydGVkO1xuXG4gICAgICAgICAgICAgICAgYWN0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChhY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgc3VwcG9ydCA9IHN1cHBvcnQgJiYgISFkb2N1bWVudC5xdWVyeUNvbW1hbmRTdXBwb3J0ZWQoYWN0aW9uKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHJldHVybiBzdXBwb3J0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XSk7XG5cbiAgICAgICAgcmV0dXJuIENsaXBib2FyZDtcbiAgICB9KF90aW55RW1pdHRlcjIuZGVmYXVsdCk7XG5cbiAgICAvKipcbiAgICAgKiBIZWxwZXIgZnVuY3Rpb24gdG8gcmV0cmlldmUgYXR0cmlidXRlIHZhbHVlLlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBzdWZmaXhcbiAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1lbnRcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBnZXRBdHRyaWJ1dGVWYWx1ZShzdWZmaXgsIGVsZW1lbnQpIHtcbiAgICAgICAgdmFyIGF0dHJpYnV0ZSA9ICdkYXRhLWNsaXBib2FyZC0nICsgc3VmZml4O1xuXG4gICAgICAgIGlmICghZWxlbWVudC5oYXNBdHRyaWJ1dGUoYXR0cmlidXRlKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGVsZW1lbnQuZ2V0QXR0cmlidXRlKGF0dHJpYnV0ZSk7XG4gICAgfVxuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBDbGlwYm9hcmQ7XG59KTtcblxuLyoqKi8gfSksXG4vKiA0ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cbnZhciBET0NVTUVOVF9OT0RFX1RZUEUgPSA5O1xuXG4vKipcbiAqIEEgcG9seWZpbGwgZm9yIEVsZW1lbnQubWF0Y2hlcygpXG4gKi9cbmlmICh0eXBlb2YgRWxlbWVudCAhPT0gJ3VuZGVmaW5lZCcgJiYgIUVsZW1lbnQucHJvdG90eXBlLm1hdGNoZXMpIHtcbiAgICB2YXIgcHJvdG8gPSBFbGVtZW50LnByb3RvdHlwZTtcblxuICAgIHByb3RvLm1hdGNoZXMgPSBwcm90by5tYXRjaGVzU2VsZWN0b3IgfHxcbiAgICAgICAgICAgICAgICAgICAgcHJvdG8ubW96TWF0Y2hlc1NlbGVjdG9yIHx8XG4gICAgICAgICAgICAgICAgICAgIHByb3RvLm1zTWF0Y2hlc1NlbGVjdG9yIHx8XG4gICAgICAgICAgICAgICAgICAgIHByb3RvLm9NYXRjaGVzU2VsZWN0b3IgfHxcbiAgICAgICAgICAgICAgICAgICAgcHJvdG8ud2Via2l0TWF0Y2hlc1NlbGVjdG9yO1xufVxuXG4vKipcbiAqIEZpbmRzIHRoZSBjbG9zZXN0IHBhcmVudCB0aGF0IG1hdGNoZXMgYSBzZWxlY3Rvci5cbiAqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBzZWxlY3RvclxuICogQHJldHVybiB7RnVuY3Rpb259XG4gKi9cbmZ1bmN0aW9uIGNsb3Nlc3QgKGVsZW1lbnQsIHNlbGVjdG9yKSB7XG4gICAgd2hpbGUgKGVsZW1lbnQgJiYgZWxlbWVudC5ub2RlVHlwZSAhPT0gRE9DVU1FTlRfTk9ERV9UWVBFKSB7XG4gICAgICAgIGlmICh0eXBlb2YgZWxlbWVudC5tYXRjaGVzID09PSAnZnVuY3Rpb24nICYmXG4gICAgICAgICAgICBlbGVtZW50Lm1hdGNoZXMoc2VsZWN0b3IpKSB7XG4gICAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxlbWVudCA9IGVsZW1lbnQucGFyZW50Tm9kZTtcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2xvc2VzdDtcblxuXG4vKioqLyB9KSxcbi8qIDUgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxudmFyIGNsb3Nlc3QgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQpO1xuXG4vKipcbiAqIERlbGVnYXRlcyBldmVudCB0byBhIHNlbGVjdG9yLlxuICpcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbWVudFxuICogQHBhcmFtIHtTdHJpbmd9IHNlbGVjdG9yXG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gdXNlQ2FwdHVyZVxuICogQHJldHVybiB7T2JqZWN0fVxuICovXG5mdW5jdGlvbiBfZGVsZWdhdGUoZWxlbWVudCwgc2VsZWN0b3IsIHR5cGUsIGNhbGxiYWNrLCB1c2VDYXB0dXJlKSB7XG4gICAgdmFyIGxpc3RlbmVyRm4gPSBsaXN0ZW5lci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyRm4sIHVzZUNhcHR1cmUpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZGVzdHJveTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZSwgbGlzdGVuZXJGbiwgdXNlQ2FwdHVyZSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8qKlxuICogRGVsZWdhdGVzIGV2ZW50IHRvIGEgc2VsZWN0b3IuXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fFN0cmluZ3xBcnJheX0gW2VsZW1lbnRzXVxuICogQHBhcmFtIHtTdHJpbmd9IHNlbGVjdG9yXG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gdXNlQ2FwdHVyZVxuICogQHJldHVybiB7T2JqZWN0fVxuICovXG5mdW5jdGlvbiBkZWxlZ2F0ZShlbGVtZW50cywgc2VsZWN0b3IsIHR5cGUsIGNhbGxiYWNrLCB1c2VDYXB0dXJlKSB7XG4gICAgLy8gSGFuZGxlIHRoZSByZWd1bGFyIEVsZW1lbnQgdXNhZ2VcbiAgICBpZiAodHlwZW9mIGVsZW1lbnRzLmFkZEV2ZW50TGlzdGVuZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIF9kZWxlZ2F0ZS5hcHBseShudWxsLCBhcmd1bWVudHMpO1xuICAgIH1cblxuICAgIC8vIEhhbmRsZSBFbGVtZW50LWxlc3MgdXNhZ2UsIGl0IGRlZmF1bHRzIHRvIGdsb2JhbCBkZWxlZ2F0aW9uXG4gICAgaWYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIC8vIFVzZSBgZG9jdW1lbnRgIGFzIHRoZSBmaXJzdCBwYXJhbWV0ZXIsIHRoZW4gYXBwbHkgYXJndW1lbnRzXG4gICAgICAgIC8vIFRoaXMgaXMgYSBzaG9ydCB3YXkgdG8gLnVuc2hpZnQgYGFyZ3VtZW50c2Agd2l0aG91dCBydW5uaW5nIGludG8gZGVvcHRpbWl6YXRpb25zXG4gICAgICAgIHJldHVybiBfZGVsZWdhdGUuYmluZChudWxsLCBkb2N1bWVudCkuYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcbiAgICB9XG5cbiAgICAvLyBIYW5kbGUgU2VsZWN0b3ItYmFzZWQgdXNhZ2VcbiAgICBpZiAodHlwZW9mIGVsZW1lbnRzID09PSAnc3RyaW5nJykge1xuICAgICAgICBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoZWxlbWVudHMpO1xuICAgIH1cblxuICAgIC8vIEhhbmRsZSBBcnJheS1saWtlIGJhc2VkIHVzYWdlXG4gICAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5tYXAuY2FsbChlbGVtZW50cywgZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIF9kZWxlZ2F0ZShlbGVtZW50LCBzZWxlY3RvciwgdHlwZSwgY2FsbGJhY2ssIHVzZUNhcHR1cmUpO1xuICAgIH0pO1xufVxuXG4vKipcbiAqIEZpbmRzIGNsb3Nlc3QgbWF0Y2ggYW5kIGludm9rZXMgY2FsbGJhY2suXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSBlbGVtZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gc2VsZWN0b3JcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICogQHJldHVybiB7RnVuY3Rpb259XG4gKi9cbmZ1bmN0aW9uIGxpc3RlbmVyKGVsZW1lbnQsIHNlbGVjdG9yLCB0eXBlLCBjYWxsYmFjaykge1xuICAgIHJldHVybiBmdW5jdGlvbihlKSB7XG4gICAgICAgIGUuZGVsZWdhdGVUYXJnZXQgPSBjbG9zZXN0KGUudGFyZ2V0LCBzZWxlY3Rvcik7XG5cbiAgICAgICAgaWYgKGUuZGVsZWdhdGVUYXJnZXQpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwoZWxlbWVudCwgZSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZGVsZWdhdGU7XG5cblxuLyoqKi8gfSksXG4vKiA2ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cbi8qKlxuICogQ2hlY2sgaWYgYXJndW1lbnQgaXMgYSBIVE1MIGVsZW1lbnQuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbHVlXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG5leHBvcnRzLm5vZGUgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSAhPT0gdW5kZWZpbmVkXG4gICAgICAgICYmIHZhbHVlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnRcbiAgICAgICAgJiYgdmFsdWUubm9kZVR5cGUgPT09IDE7XG59O1xuXG4vKipcbiAqIENoZWNrIGlmIGFyZ3VtZW50IGlzIGEgbGlzdCBvZiBIVE1MIGVsZW1lbnRzLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWx1ZVxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuZXhwb3J0cy5ub2RlTGlzdCA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgdmFyIHR5cGUgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpO1xuXG4gICAgcmV0dXJuIHZhbHVlICE9PSB1bmRlZmluZWRcbiAgICAgICAgJiYgKHR5cGUgPT09ICdbb2JqZWN0IE5vZGVMaXN0XScgfHwgdHlwZSA9PT0gJ1tvYmplY3QgSFRNTENvbGxlY3Rpb25dJylcbiAgICAgICAgJiYgKCdsZW5ndGgnIGluIHZhbHVlKVxuICAgICAgICAmJiAodmFsdWUubGVuZ3RoID09PSAwIHx8IGV4cG9ydHMubm9kZSh2YWx1ZVswXSkpO1xufTtcblxuLyoqXG4gKiBDaGVjayBpZiBhcmd1bWVudCBpcyBhIHN0cmluZy5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsdWVcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKi9cbmV4cG9ydHMuc3RyaW5nID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJ1xuICAgICAgICB8fCB2YWx1ZSBpbnN0YW5jZW9mIFN0cmluZztcbn07XG5cbi8qKlxuICogQ2hlY2sgaWYgYXJndW1lbnQgaXMgYSBmdW5jdGlvbi5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsdWVcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKi9cbmV4cG9ydHMuZm4gPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgIHZhciB0eXBlID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKTtcblxuICAgIHJldHVybiB0eXBlID09PSAnW29iamVjdCBGdW5jdGlvbl0nO1xufTtcblxuXG4vKioqLyB9KSxcbi8qIDcgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuZnVuY3Rpb24gc2VsZWN0KGVsZW1lbnQpIHtcbiAgICB2YXIgc2VsZWN0ZWRUZXh0O1xuXG4gICAgaWYgKGVsZW1lbnQubm9kZU5hbWUgPT09ICdTRUxFQ1QnKSB7XG4gICAgICAgIGVsZW1lbnQuZm9jdXMoKTtcblxuICAgICAgICBzZWxlY3RlZFRleHQgPSBlbGVtZW50LnZhbHVlO1xuICAgIH1cbiAgICBlbHNlIGlmIChlbGVtZW50Lm5vZGVOYW1lID09PSAnSU5QVVQnIHx8IGVsZW1lbnQubm9kZU5hbWUgPT09ICdURVhUQVJFQScpIHtcbiAgICAgICAgdmFyIGlzUmVhZE9ubHkgPSBlbGVtZW50Lmhhc0F0dHJpYnV0ZSgncmVhZG9ubHknKTtcblxuICAgICAgICBpZiAoIWlzUmVhZE9ubHkpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdyZWFkb25seScsICcnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGVsZW1lbnQuc2VsZWN0KCk7XG4gICAgICAgIGVsZW1lbnQuc2V0U2VsZWN0aW9uUmFuZ2UoMCwgZWxlbWVudC52YWx1ZS5sZW5ndGgpO1xuXG4gICAgICAgIGlmICghaXNSZWFkT25seSkge1xuICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ3JlYWRvbmx5Jyk7XG4gICAgICAgIH1cblxuICAgICAgICBzZWxlY3RlZFRleHQgPSBlbGVtZW50LnZhbHVlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgaWYgKGVsZW1lbnQuaGFzQXR0cmlidXRlKCdjb250ZW50ZWRpdGFibGUnKSkge1xuICAgICAgICAgICAgZWxlbWVudC5mb2N1cygpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHNlbGVjdGlvbiA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKTtcbiAgICAgICAgdmFyIHJhbmdlID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKTtcblxuICAgICAgICByYW5nZS5zZWxlY3ROb2RlQ29udGVudHMoZWxlbWVudCk7XG4gICAgICAgIHNlbGVjdGlvbi5yZW1vdmVBbGxSYW5nZXMoKTtcbiAgICAgICAgc2VsZWN0aW9uLmFkZFJhbmdlKHJhbmdlKTtcblxuICAgICAgICBzZWxlY3RlZFRleHQgPSBzZWxlY3Rpb24udG9TdHJpbmcoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc2VsZWN0ZWRUZXh0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNlbGVjdDtcblxuXG4vKioqLyB9KVxuLyoqKioqKi8gXSk7XG59KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvY2xpcGJvYXJkL2Rpc3QvY2xpcGJvYXJkLmpzIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihtb2R1bGUpIHtcclxuXHRpZighbW9kdWxlLndlYnBhY2tQb2x5ZmlsbCkge1xyXG5cdFx0bW9kdWxlLmRlcHJlY2F0ZSA9IGZ1bmN0aW9uKCkge307XHJcblx0XHRtb2R1bGUucGF0aHMgPSBbXTtcclxuXHRcdC8vIG1vZHVsZS5wYXJlbnQgPSB1bmRlZmluZWQgYnkgZGVmYXVsdFxyXG5cdFx0aWYoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XHJcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImxvYWRlZFwiLCB7XHJcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXHJcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5sO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwiaWRcIiwge1xyXG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxyXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHJldHVybiBtb2R1bGUuaTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHRtb2R1bGUud2VicGFja1BvbHlmaWxsID0gMTtcclxuXHR9XHJcblx0cmV0dXJuIG1vZHVsZTtcclxufTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vICh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qcyIsIjsoZnVuY3Rpb24gKCkge1xuXHQndXNlIHN0cmljdCc7XG5cblx0LyoqXG5cdCAqIEBwcmVzZXJ2ZSBGYXN0Q2xpY2s6IHBvbHlmaWxsIHRvIHJlbW92ZSBjbGljayBkZWxheXMgb24gYnJvd3NlcnMgd2l0aCB0b3VjaCBVSXMuXG5cdCAqXG5cdCAqIEBjb2RpbmdzdGFuZGFyZCBmdGxhYnMtanN2MlxuXHQgKiBAY29weXJpZ2h0IFRoZSBGaW5hbmNpYWwgVGltZXMgTGltaXRlZCBbQWxsIFJpZ2h0cyBSZXNlcnZlZF1cblx0ICogQGxpY2Vuc2UgTUlUIExpY2Vuc2UgKHNlZSBMSUNFTlNFLnR4dClcblx0ICovXG5cblx0Lypqc2xpbnQgYnJvd3Nlcjp0cnVlLCBub2RlOnRydWUqL1xuXHQvKmdsb2JhbCBkZWZpbmUsIEV2ZW50LCBOb2RlKi9cblxuXG5cdC8qKlxuXHQgKiBJbnN0YW50aWF0ZSBmYXN0LWNsaWNraW5nIGxpc3RlbmVycyBvbiB0aGUgc3BlY2lmaWVkIGxheWVyLlxuXHQgKlxuXHQgKiBAY29uc3RydWN0b3Jcblx0ICogQHBhcmFtIHtFbGVtZW50fSBsYXllciBUaGUgbGF5ZXIgdG8gbGlzdGVuIG9uXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucz17fV0gVGhlIG9wdGlvbnMgdG8gb3ZlcnJpZGUgdGhlIGRlZmF1bHRzXG5cdCAqL1xuXHRmdW5jdGlvbiBGYXN0Q2xpY2sobGF5ZXIsIG9wdGlvbnMpIHtcblx0XHR2YXIgb2xkT25DbGljaztcblxuXHRcdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG5cdFx0LyoqXG5cdFx0ICogV2hldGhlciBhIGNsaWNrIGlzIGN1cnJlbnRseSBiZWluZyB0cmFja2VkLlxuXHRcdCAqXG5cdFx0ICogQHR5cGUgYm9vbGVhblxuXHRcdCAqL1xuXHRcdHRoaXMudHJhY2tpbmdDbGljayA9IGZhbHNlO1xuXG5cblx0XHQvKipcblx0XHQgKiBUaW1lc3RhbXAgZm9yIHdoZW4gY2xpY2sgdHJhY2tpbmcgc3RhcnRlZC5cblx0XHQgKlxuXHRcdCAqIEB0eXBlIG51bWJlclxuXHRcdCAqL1xuXHRcdHRoaXMudHJhY2tpbmdDbGlja1N0YXJ0ID0gMDtcblxuXG5cdFx0LyoqXG5cdFx0ICogVGhlIGVsZW1lbnQgYmVpbmcgdHJhY2tlZCBmb3IgYSBjbGljay5cblx0XHQgKlxuXHRcdCAqIEB0eXBlIEV2ZW50VGFyZ2V0XG5cdFx0ICovXG5cdFx0dGhpcy50YXJnZXRFbGVtZW50ID0gbnVsbDtcblxuXG5cdFx0LyoqXG5cdFx0ICogWC1jb29yZGluYXRlIG9mIHRvdWNoIHN0YXJ0IGV2ZW50LlxuXHRcdCAqXG5cdFx0ICogQHR5cGUgbnVtYmVyXG5cdFx0ICovXG5cdFx0dGhpcy50b3VjaFN0YXJ0WCA9IDA7XG5cblxuXHRcdC8qKlxuXHRcdCAqIFktY29vcmRpbmF0ZSBvZiB0b3VjaCBzdGFydCBldmVudC5cblx0XHQgKlxuXHRcdCAqIEB0eXBlIG51bWJlclxuXHRcdCAqL1xuXHRcdHRoaXMudG91Y2hTdGFydFkgPSAwO1xuXG5cblx0XHQvKipcblx0XHQgKiBJRCBvZiB0aGUgbGFzdCB0b3VjaCwgcmV0cmlldmVkIGZyb20gVG91Y2guaWRlbnRpZmllci5cblx0XHQgKlxuXHRcdCAqIEB0eXBlIG51bWJlclxuXHRcdCAqL1xuXHRcdHRoaXMubGFzdFRvdWNoSWRlbnRpZmllciA9IDA7XG5cblxuXHRcdC8qKlxuXHRcdCAqIFRvdWNobW92ZSBib3VuZGFyeSwgYmV5b25kIHdoaWNoIGEgY2xpY2sgd2lsbCBiZSBjYW5jZWxsZWQuXG5cdFx0ICpcblx0XHQgKiBAdHlwZSBudW1iZXJcblx0XHQgKi9cblx0XHR0aGlzLnRvdWNoQm91bmRhcnkgPSBvcHRpb25zLnRvdWNoQm91bmRhcnkgfHwgMTA7XG5cblxuXHRcdC8qKlxuXHRcdCAqIFRoZSBGYXN0Q2xpY2sgbGF5ZXIuXG5cdFx0ICpcblx0XHQgKiBAdHlwZSBFbGVtZW50XG5cdFx0ICovXG5cdFx0dGhpcy5sYXllciA9IGxheWVyO1xuXG5cdFx0LyoqXG5cdFx0ICogVGhlIG1pbmltdW0gdGltZSBiZXR3ZWVuIHRhcCh0b3VjaHN0YXJ0IGFuZCB0b3VjaGVuZCkgZXZlbnRzXG5cdFx0ICpcblx0XHQgKiBAdHlwZSBudW1iZXJcblx0XHQgKi9cblx0XHR0aGlzLnRhcERlbGF5ID0gb3B0aW9ucy50YXBEZWxheSB8fCAyMDA7XG5cblx0XHQvKipcblx0XHQgKiBUaGUgbWF4aW11bSB0aW1lIGZvciBhIHRhcFxuXHRcdCAqXG5cdFx0ICogQHR5cGUgbnVtYmVyXG5cdFx0ICovXG5cdFx0dGhpcy50YXBUaW1lb3V0ID0gb3B0aW9ucy50YXBUaW1lb3V0IHx8IDcwMDtcblxuXHRcdGlmIChGYXN0Q2xpY2subm90TmVlZGVkKGxheWVyKSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdC8vIFNvbWUgb2xkIHZlcnNpb25zIG9mIEFuZHJvaWQgZG9uJ3QgaGF2ZSBGdW5jdGlvbi5wcm90b3R5cGUuYmluZFxuXHRcdGZ1bmN0aW9uIGJpbmQobWV0aG9kLCBjb250ZXh0KSB7XG5cdFx0XHRyZXR1cm4gZnVuY3Rpb24oKSB7IHJldHVybiBtZXRob2QuYXBwbHkoY29udGV4dCwgYXJndW1lbnRzKTsgfTtcblx0XHR9XG5cblxuXHRcdHZhciBtZXRob2RzID0gWydvbk1vdXNlJywgJ29uQ2xpY2snLCAnb25Ub3VjaFN0YXJ0JywgJ29uVG91Y2hNb3ZlJywgJ29uVG91Y2hFbmQnLCAnb25Ub3VjaENhbmNlbCddO1xuXHRcdHZhciBjb250ZXh0ID0gdGhpcztcblx0XHRmb3IgKHZhciBpID0gMCwgbCA9IG1ldGhvZHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG5cdFx0XHRjb250ZXh0W21ldGhvZHNbaV1dID0gYmluZChjb250ZXh0W21ldGhvZHNbaV1dLCBjb250ZXh0KTtcblx0XHR9XG5cblx0XHQvLyBTZXQgdXAgZXZlbnQgaGFuZGxlcnMgYXMgcmVxdWlyZWRcblx0XHRpZiAoZGV2aWNlSXNBbmRyb2lkKSB7XG5cdFx0XHRsYXllci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCB0aGlzLm9uTW91c2UsIHRydWUpO1xuXHRcdFx0bGF5ZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5vbk1vdXNlLCB0cnVlKTtcblx0XHRcdGxheWVyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLm9uTW91c2UsIHRydWUpO1xuXHRcdH1cblxuXHRcdGxheWVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbkNsaWNrLCB0cnVlKTtcblx0XHRsYXllci5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgdGhpcy5vblRvdWNoU3RhcnQsIGZhbHNlKTtcblx0XHRsYXllci5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCB0aGlzLm9uVG91Y2hNb3ZlLCBmYWxzZSk7XG5cdFx0bGF5ZXIuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB0aGlzLm9uVG91Y2hFbmQsIGZhbHNlKTtcblx0XHRsYXllci5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGNhbmNlbCcsIHRoaXMub25Ub3VjaENhbmNlbCwgZmFsc2UpO1xuXG5cdFx0Ly8gSGFjayBpcyByZXF1aXJlZCBmb3IgYnJvd3NlcnMgdGhhdCBkb24ndCBzdXBwb3J0IEV2ZW50I3N0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbiAoZS5nLiBBbmRyb2lkIDIpXG5cdFx0Ly8gd2hpY2ggaXMgaG93IEZhc3RDbGljayBub3JtYWxseSBzdG9wcyBjbGljayBldmVudHMgYnViYmxpbmcgdG8gY2FsbGJhY2tzIHJlZ2lzdGVyZWQgb24gdGhlIEZhc3RDbGlja1xuXHRcdC8vIGxheWVyIHdoZW4gdGhleSBhcmUgY2FuY2VsbGVkLlxuXHRcdGlmICghRXZlbnQucHJvdG90eXBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbikge1xuXHRcdFx0bGF5ZXIucmVtb3ZlRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uKHR5cGUsIGNhbGxiYWNrLCBjYXB0dXJlKSB7XG5cdFx0XHRcdHZhciBybXYgPSBOb2RlLnByb3RvdHlwZS5yZW1vdmVFdmVudExpc3RlbmVyO1xuXHRcdFx0XHRpZiAodHlwZSA9PT0gJ2NsaWNrJykge1xuXHRcdFx0XHRcdHJtdi5jYWxsKGxheWVyLCB0eXBlLCBjYWxsYmFjay5oaWphY2tlZCB8fCBjYWxsYmFjaywgY2FwdHVyZSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0cm12LmNhbGwobGF5ZXIsIHR5cGUsIGNhbGxiYWNrLCBjYXB0dXJlKTtcblx0XHRcdFx0fVxuXHRcdFx0fTtcblxuXHRcdFx0bGF5ZXIuYWRkRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uKHR5cGUsIGNhbGxiYWNrLCBjYXB0dXJlKSB7XG5cdFx0XHRcdHZhciBhZHYgPSBOb2RlLnByb3RvdHlwZS5hZGRFdmVudExpc3RlbmVyO1xuXHRcdFx0XHRpZiAodHlwZSA9PT0gJ2NsaWNrJykge1xuXHRcdFx0XHRcdGFkdi5jYWxsKGxheWVyLCB0eXBlLCBjYWxsYmFjay5oaWphY2tlZCB8fCAoY2FsbGJhY2suaGlqYWNrZWQgPSBmdW5jdGlvbihldmVudCkge1xuXHRcdFx0XHRcdFx0aWYgKCFldmVudC5wcm9wYWdhdGlvblN0b3BwZWQpIHtcblx0XHRcdFx0XHRcdFx0Y2FsbGJhY2soZXZlbnQpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0pLCBjYXB0dXJlKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRhZHYuY2FsbChsYXllciwgdHlwZSwgY2FsbGJhY2ssIGNhcHR1cmUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXHRcdH1cblxuXHRcdC8vIElmIGEgaGFuZGxlciBpcyBhbHJlYWR5IGRlY2xhcmVkIGluIHRoZSBlbGVtZW50J3Mgb25jbGljayBhdHRyaWJ1dGUsIGl0IHdpbGwgYmUgZmlyZWQgYmVmb3JlXG5cdFx0Ly8gRmFzdENsaWNrJ3Mgb25DbGljayBoYW5kbGVyLiBGaXggdGhpcyBieSBwdWxsaW5nIG91dCB0aGUgdXNlci1kZWZpbmVkIGhhbmRsZXIgZnVuY3Rpb24gYW5kXG5cdFx0Ly8gYWRkaW5nIGl0IGFzIGxpc3RlbmVyLlxuXHRcdGlmICh0eXBlb2YgbGF5ZXIub25jbGljayA9PT0gJ2Z1bmN0aW9uJykge1xuXG5cdFx0XHQvLyBBbmRyb2lkIGJyb3dzZXIgb24gYXQgbGVhc3QgMy4yIHJlcXVpcmVzIGEgbmV3IHJlZmVyZW5jZSB0byB0aGUgZnVuY3Rpb24gaW4gbGF5ZXIub25jbGlja1xuXHRcdFx0Ly8gLSB0aGUgb2xkIG9uZSB3b24ndCB3b3JrIGlmIHBhc3NlZCB0byBhZGRFdmVudExpc3RlbmVyIGRpcmVjdGx5LlxuXHRcdFx0b2xkT25DbGljayA9IGxheWVyLm9uY2xpY2s7XG5cdFx0XHRsYXllci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XG5cdFx0XHRcdG9sZE9uQ2xpY2soZXZlbnQpO1xuXHRcdFx0fSwgZmFsc2UpO1xuXHRcdFx0bGF5ZXIub25jbGljayA9IG51bGw7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCogV2luZG93cyBQaG9uZSA4LjEgZmFrZXMgdXNlciBhZ2VudCBzdHJpbmcgdG8gbG9vayBsaWtlIEFuZHJvaWQgYW5kIGlQaG9uZS5cblx0KlxuXHQqIEB0eXBlIGJvb2xlYW5cblx0Ki9cblx0dmFyIGRldmljZUlzV2luZG93c1Bob25lID0gbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKFwiV2luZG93cyBQaG9uZVwiKSA+PSAwO1xuXG5cdC8qKlxuXHQgKiBBbmRyb2lkIHJlcXVpcmVzIGV4Y2VwdGlvbnMuXG5cdCAqXG5cdCAqIEB0eXBlIGJvb2xlYW5cblx0ICovXG5cdHZhciBkZXZpY2VJc0FuZHJvaWQgPSBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoJ0FuZHJvaWQnKSA+IDAgJiYgIWRldmljZUlzV2luZG93c1Bob25lO1xuXG5cblx0LyoqXG5cdCAqIGlPUyByZXF1aXJlcyBleGNlcHRpb25zLlxuXHQgKlxuXHQgKiBAdHlwZSBib29sZWFuXG5cdCAqL1xuXHR2YXIgZGV2aWNlSXNJT1MgPSAvaVAoYWR8aG9uZXxvZCkvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkgJiYgIWRldmljZUlzV2luZG93c1Bob25lO1xuXG5cblx0LyoqXG5cdCAqIGlPUyA0IHJlcXVpcmVzIGFuIGV4Y2VwdGlvbiBmb3Igc2VsZWN0IGVsZW1lbnRzLlxuXHQgKlxuXHQgKiBAdHlwZSBib29sZWFuXG5cdCAqL1xuXHR2YXIgZGV2aWNlSXNJT1M0ID0gZGV2aWNlSXNJT1MgJiYgKC9PUyA0X1xcZChfXFxkKT8vKS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xuXG5cblx0LyoqXG5cdCAqIGlPUyA2LjAtNy4qIHJlcXVpcmVzIHRoZSB0YXJnZXQgZWxlbWVudCB0byBiZSBtYW51YWxseSBkZXJpdmVkXG5cdCAqXG5cdCAqIEB0eXBlIGJvb2xlYW5cblx0ICovXG5cdHZhciBkZXZpY2VJc0lPU1dpdGhCYWRUYXJnZXQgPSBkZXZpY2VJc0lPUyAmJiAoL09TIFs2LTddX1xcZC8pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XG5cblx0LyoqXG5cdCAqIEJsYWNrQmVycnkgcmVxdWlyZXMgZXhjZXB0aW9ucy5cblx0ICpcblx0ICogQHR5cGUgYm9vbGVhblxuXHQgKi9cblx0dmFyIGRldmljZUlzQmxhY2tCZXJyeTEwID0gbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKCdCQjEwJykgPiAwO1xuXG5cdC8qKlxuXHQgKiBEZXRlcm1pbmUgd2hldGhlciBhIGdpdmVuIGVsZW1lbnQgcmVxdWlyZXMgYSBuYXRpdmUgY2xpY2suXG5cdCAqXG5cdCAqIEBwYXJhbSB7RXZlbnRUYXJnZXR8RWxlbWVudH0gdGFyZ2V0IFRhcmdldCBET00gZWxlbWVudFxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyB0cnVlIGlmIHRoZSBlbGVtZW50IG5lZWRzIGEgbmF0aXZlIGNsaWNrXG5cdCAqL1xuXHRGYXN0Q2xpY2sucHJvdG90eXBlLm5lZWRzQ2xpY2sgPSBmdW5jdGlvbih0YXJnZXQpIHtcblx0XHRzd2l0Y2ggKHRhcmdldC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpKSB7XG5cblx0XHQvLyBEb24ndCBzZW5kIGEgc3ludGhldGljIGNsaWNrIHRvIGRpc2FibGVkIGlucHV0cyAoaXNzdWUgIzYyKVxuXHRcdGNhc2UgJ2J1dHRvbic6XG5cdFx0Y2FzZSAnc2VsZWN0Jzpcblx0XHRjYXNlICd0ZXh0YXJlYSc6XG5cdFx0XHRpZiAodGFyZ2V0LmRpc2FibGVkKSB7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRicmVhaztcblx0XHRjYXNlICdpbnB1dCc6XG5cblx0XHRcdC8vIEZpbGUgaW5wdXRzIG5lZWQgcmVhbCBjbGlja3Mgb24gaU9TIDYgZHVlIHRvIGEgYnJvd3NlciBidWcgKGlzc3VlICM2OClcblx0XHRcdGlmICgoZGV2aWNlSXNJT1MgJiYgdGFyZ2V0LnR5cGUgPT09ICdmaWxlJykgfHwgdGFyZ2V0LmRpc2FibGVkKSB7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRicmVhaztcblx0XHRjYXNlICdsYWJlbCc6XG5cdFx0Y2FzZSAnaWZyYW1lJzogLy8gaU9TOCBob21lc2NyZWVuIGFwcHMgY2FuIHByZXZlbnQgZXZlbnRzIGJ1YmJsaW5nIGludG8gZnJhbWVzXG5cdFx0Y2FzZSAndmlkZW8nOlxuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0cmV0dXJuICgvXFxibmVlZHNjbGlja1xcYi8pLnRlc3QodGFyZ2V0LmNsYXNzTmFtZSk7XG5cdH07XG5cblxuXHQvKipcblx0ICogRGV0ZXJtaW5lIHdoZXRoZXIgYSBnaXZlbiBlbGVtZW50IHJlcXVpcmVzIGEgY2FsbCB0byBmb2N1cyB0byBzaW11bGF0ZSBjbGljayBpbnRvIGVsZW1lbnQuXG5cdCAqXG5cdCAqIEBwYXJhbSB7RXZlbnRUYXJnZXR8RWxlbWVudH0gdGFyZ2V0IFRhcmdldCBET00gZWxlbWVudFxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyB0cnVlIGlmIHRoZSBlbGVtZW50IHJlcXVpcmVzIGEgY2FsbCB0byBmb2N1cyB0byBzaW11bGF0ZSBuYXRpdmUgY2xpY2suXG5cdCAqL1xuXHRGYXN0Q2xpY2sucHJvdG90eXBlLm5lZWRzRm9jdXMgPSBmdW5jdGlvbih0YXJnZXQpIHtcblx0XHRzd2l0Y2ggKHRhcmdldC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpKSB7XG5cdFx0Y2FzZSAndGV4dGFyZWEnOlxuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0Y2FzZSAnc2VsZWN0Jzpcblx0XHRcdHJldHVybiAhZGV2aWNlSXNBbmRyb2lkO1xuXHRcdGNhc2UgJ2lucHV0Jzpcblx0XHRcdHN3aXRjaCAodGFyZ2V0LnR5cGUpIHtcblx0XHRcdGNhc2UgJ2J1dHRvbic6XG5cdFx0XHRjYXNlICdjaGVja2JveCc6XG5cdFx0XHRjYXNlICdmaWxlJzpcblx0XHRcdGNhc2UgJ2ltYWdlJzpcblx0XHRcdGNhc2UgJ3JhZGlvJzpcblx0XHRcdGNhc2UgJ3N1Ym1pdCc6XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gTm8gcG9pbnQgaW4gYXR0ZW1wdGluZyB0byBmb2N1cyBkaXNhYmxlZCBpbnB1dHNcblx0XHRcdHJldHVybiAhdGFyZ2V0LmRpc2FibGVkICYmICF0YXJnZXQucmVhZE9ubHk7XG5cdFx0ZGVmYXVsdDpcblx0XHRcdHJldHVybiAoL1xcYm5lZWRzZm9jdXNcXGIvKS50ZXN0KHRhcmdldC5jbGFzc05hbWUpO1xuXHRcdH1cblx0fTtcblxuXG5cdC8qKlxuXHQgKiBTZW5kIGEgY2xpY2sgZXZlbnQgdG8gdGhlIHNwZWNpZmllZCBlbGVtZW50LlxuXHQgKlxuXHQgKiBAcGFyYW0ge0V2ZW50VGFyZ2V0fEVsZW1lbnR9IHRhcmdldEVsZW1lbnRcblx0ICogQHBhcmFtIHtFdmVudH0gZXZlbnRcblx0ICovXG5cdEZhc3RDbGljay5wcm90b3R5cGUuc2VuZENsaWNrID0gZnVuY3Rpb24odGFyZ2V0RWxlbWVudCwgZXZlbnQpIHtcblx0XHR2YXIgY2xpY2tFdmVudCwgdG91Y2g7XG5cblx0XHQvLyBPbiBzb21lIEFuZHJvaWQgZGV2aWNlcyBhY3RpdmVFbGVtZW50IG5lZWRzIHRvIGJlIGJsdXJyZWQgb3RoZXJ3aXNlIHRoZSBzeW50aGV0aWMgY2xpY2sgd2lsbCBoYXZlIG5vIGVmZmVjdCAoIzI0KVxuXHRcdGlmIChkb2N1bWVudC5hY3RpdmVFbGVtZW50ICYmIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgIT09IHRhcmdldEVsZW1lbnQpIHtcblx0XHRcdGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuYmx1cigpO1xuXHRcdH1cblxuXHRcdHRvdWNoID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF07XG5cblx0XHQvLyBTeW50aGVzaXNlIGEgY2xpY2sgZXZlbnQsIHdpdGggYW4gZXh0cmEgYXR0cmlidXRlIHNvIGl0IGNhbiBiZSB0cmFja2VkXG5cdFx0Y2xpY2tFdmVudCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdNb3VzZUV2ZW50cycpO1xuXHRcdGNsaWNrRXZlbnQuaW5pdE1vdXNlRXZlbnQodGhpcy5kZXRlcm1pbmVFdmVudFR5cGUodGFyZ2V0RWxlbWVudCksIHRydWUsIHRydWUsIHdpbmRvdywgMSwgdG91Y2guc2NyZWVuWCwgdG91Y2guc2NyZWVuWSwgdG91Y2guY2xpZW50WCwgdG91Y2guY2xpZW50WSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIDAsIG51bGwpO1xuXHRcdGNsaWNrRXZlbnQuZm9yd2FyZGVkVG91Y2hFdmVudCA9IHRydWU7XG5cdFx0dGFyZ2V0RWxlbWVudC5kaXNwYXRjaEV2ZW50KGNsaWNrRXZlbnQpO1xuXHR9O1xuXG5cdEZhc3RDbGljay5wcm90b3R5cGUuZGV0ZXJtaW5lRXZlbnRUeXBlID0gZnVuY3Rpb24odGFyZ2V0RWxlbWVudCkge1xuXG5cdFx0Ly9Jc3N1ZSAjMTU5OiBBbmRyb2lkIENocm9tZSBTZWxlY3QgQm94IGRvZXMgbm90IG9wZW4gd2l0aCBhIHN5bnRoZXRpYyBjbGljayBldmVudFxuXHRcdGlmIChkZXZpY2VJc0FuZHJvaWQgJiYgdGFyZ2V0RWxlbWVudC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdzZWxlY3QnKSB7XG5cdFx0XHRyZXR1cm4gJ21vdXNlZG93bic7XG5cdFx0fVxuXG5cdFx0cmV0dXJuICdjbGljayc7XG5cdH07XG5cblxuXHQvKipcblx0ICogQHBhcmFtIHtFdmVudFRhcmdldHxFbGVtZW50fSB0YXJnZXRFbGVtZW50XG5cdCAqL1xuXHRGYXN0Q2xpY2sucHJvdG90eXBlLmZvY3VzID0gZnVuY3Rpb24odGFyZ2V0RWxlbWVudCkge1xuXHRcdHZhciBsZW5ndGg7XG5cblx0XHQvLyBJc3N1ZSAjMTYwOiBvbiBpT1MgNywgc29tZSBpbnB1dCBlbGVtZW50cyAoZS5nLiBkYXRlIGRhdGV0aW1lIG1vbnRoKSB0aHJvdyBhIHZhZ3VlIFR5cGVFcnJvciBvbiBzZXRTZWxlY3Rpb25SYW5nZS4gVGhlc2UgZWxlbWVudHMgZG9uJ3QgaGF2ZSBhbiBpbnRlZ2VyIHZhbHVlIGZvciB0aGUgc2VsZWN0aW9uU3RhcnQgYW5kIHNlbGVjdGlvbkVuZCBwcm9wZXJ0aWVzLCBidXQgdW5mb3J0dW5hdGVseSB0aGF0IGNhbid0IGJlIHVzZWQgZm9yIGRldGVjdGlvbiBiZWNhdXNlIGFjY2Vzc2luZyB0aGUgcHJvcGVydGllcyBhbHNvIHRocm93cyBhIFR5cGVFcnJvci4gSnVzdCBjaGVjayB0aGUgdHlwZSBpbnN0ZWFkLiBGaWxlZCBhcyBBcHBsZSBidWcgIzE1MTIyNzI0LlxuXHRcdGlmIChkZXZpY2VJc0lPUyAmJiB0YXJnZXRFbGVtZW50LnNldFNlbGVjdGlvblJhbmdlICYmIHRhcmdldEVsZW1lbnQudHlwZS5pbmRleE9mKCdkYXRlJykgIT09IDAgJiYgdGFyZ2V0RWxlbWVudC50eXBlICE9PSAndGltZScgJiYgdGFyZ2V0RWxlbWVudC50eXBlICE9PSAnbW9udGgnKSB7XG5cdFx0XHRsZW5ndGggPSB0YXJnZXRFbGVtZW50LnZhbHVlLmxlbmd0aDtcblx0XHRcdHRhcmdldEVsZW1lbnQuc2V0U2VsZWN0aW9uUmFuZ2UobGVuZ3RoLCBsZW5ndGgpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0YXJnZXRFbGVtZW50LmZvY3VzKCk7XG5cdFx0fVxuXHR9O1xuXG5cblx0LyoqXG5cdCAqIENoZWNrIHdoZXRoZXIgdGhlIGdpdmVuIHRhcmdldCBlbGVtZW50IGlzIGEgY2hpbGQgb2YgYSBzY3JvbGxhYmxlIGxheWVyIGFuZCBpZiBzbywgc2V0IGEgZmxhZyBvbiBpdC5cblx0ICpcblx0ICogQHBhcmFtIHtFdmVudFRhcmdldHxFbGVtZW50fSB0YXJnZXRFbGVtZW50XG5cdCAqL1xuXHRGYXN0Q2xpY2sucHJvdG90eXBlLnVwZGF0ZVNjcm9sbFBhcmVudCA9IGZ1bmN0aW9uKHRhcmdldEVsZW1lbnQpIHtcblx0XHR2YXIgc2Nyb2xsUGFyZW50LCBwYXJlbnRFbGVtZW50O1xuXG5cdFx0c2Nyb2xsUGFyZW50ID0gdGFyZ2V0RWxlbWVudC5mYXN0Q2xpY2tTY3JvbGxQYXJlbnQ7XG5cblx0XHQvLyBBdHRlbXB0IHRvIGRpc2NvdmVyIHdoZXRoZXIgdGhlIHRhcmdldCBlbGVtZW50IGlzIGNvbnRhaW5lZCB3aXRoaW4gYSBzY3JvbGxhYmxlIGxheWVyLiBSZS1jaGVjayBpZiB0aGVcblx0XHQvLyB0YXJnZXQgZWxlbWVudCB3YXMgbW92ZWQgdG8gYW5vdGhlciBwYXJlbnQuXG5cdFx0aWYgKCFzY3JvbGxQYXJlbnQgfHwgIXNjcm9sbFBhcmVudC5jb250YWlucyh0YXJnZXRFbGVtZW50KSkge1xuXHRcdFx0cGFyZW50RWxlbWVudCA9IHRhcmdldEVsZW1lbnQ7XG5cdFx0XHRkbyB7XG5cdFx0XHRcdGlmIChwYXJlbnRFbGVtZW50LnNjcm9sbEhlaWdodCA+IHBhcmVudEVsZW1lbnQub2Zmc2V0SGVpZ2h0KSB7XG5cdFx0XHRcdFx0c2Nyb2xsUGFyZW50ID0gcGFyZW50RWxlbWVudDtcblx0XHRcdFx0XHR0YXJnZXRFbGVtZW50LmZhc3RDbGlja1Njcm9sbFBhcmVudCA9IHBhcmVudEVsZW1lbnQ7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRwYXJlbnRFbGVtZW50ID0gcGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50O1xuXHRcdFx0fSB3aGlsZSAocGFyZW50RWxlbWVudCk7XG5cdFx0fVxuXG5cdFx0Ly8gQWx3YXlzIHVwZGF0ZSB0aGUgc2Nyb2xsIHRvcCB0cmFja2VyIGlmIHBvc3NpYmxlLlxuXHRcdGlmIChzY3JvbGxQYXJlbnQpIHtcblx0XHRcdHNjcm9sbFBhcmVudC5mYXN0Q2xpY2tMYXN0U2Nyb2xsVG9wID0gc2Nyb2xsUGFyZW50LnNjcm9sbFRvcDtcblx0XHR9XG5cdH07XG5cblxuXHQvKipcblx0ICogQHBhcmFtIHtFdmVudFRhcmdldH0gdGFyZ2V0RWxlbWVudFxuXHQgKiBAcmV0dXJucyB7RWxlbWVudHxFdmVudFRhcmdldH1cblx0ICovXG5cdEZhc3RDbGljay5wcm90b3R5cGUuZ2V0VGFyZ2V0RWxlbWVudEZyb21FdmVudFRhcmdldCA9IGZ1bmN0aW9uKGV2ZW50VGFyZ2V0KSB7XG5cblx0XHQvLyBPbiBzb21lIG9sZGVyIGJyb3dzZXJzIChub3RhYmx5IFNhZmFyaSBvbiBpT1MgNC4xIC0gc2VlIGlzc3VlICM1NikgdGhlIGV2ZW50IHRhcmdldCBtYXkgYmUgYSB0ZXh0IG5vZGUuXG5cdFx0aWYgKGV2ZW50VGFyZ2V0Lm5vZGVUeXBlID09PSBOb2RlLlRFWFRfTk9ERSkge1xuXHRcdFx0cmV0dXJuIGV2ZW50VGFyZ2V0LnBhcmVudE5vZGU7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGV2ZW50VGFyZ2V0O1xuXHR9O1xuXG5cblx0LyoqXG5cdCAqIE9uIHRvdWNoIHN0YXJ0LCByZWNvcmQgdGhlIHBvc2l0aW9uIGFuZCBzY3JvbGwgb2Zmc2V0LlxuXHQgKlxuXHQgKiBAcGFyYW0ge0V2ZW50fSBldmVudFxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn1cblx0ICovXG5cdEZhc3RDbGljay5wcm90b3R5cGUub25Ub3VjaFN0YXJ0ID0gZnVuY3Rpb24oZXZlbnQpIHtcblx0XHR2YXIgdGFyZ2V0RWxlbWVudCwgdG91Y2gsIHNlbGVjdGlvbjtcblxuXHRcdC8vIElnbm9yZSBtdWx0aXBsZSB0b3VjaGVzLCBvdGhlcndpc2UgcGluY2gtdG8tem9vbSBpcyBwcmV2ZW50ZWQgaWYgYm90aCBmaW5nZXJzIGFyZSBvbiB0aGUgRmFzdENsaWNrIGVsZW1lbnQgKGlzc3VlICMxMTEpLlxuXHRcdGlmIChldmVudC50YXJnZXRUb3VjaGVzLmxlbmd0aCA+IDEpIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdHRhcmdldEVsZW1lbnQgPSB0aGlzLmdldFRhcmdldEVsZW1lbnRGcm9tRXZlbnRUYXJnZXQoZXZlbnQudGFyZ2V0KTtcblx0XHR0b3VjaCA9IGV2ZW50LnRhcmdldFRvdWNoZXNbMF07XG5cblx0XHRpZiAoZGV2aWNlSXNJT1MpIHtcblxuXHRcdFx0Ly8gT25seSB0cnVzdGVkIGV2ZW50cyB3aWxsIGRlc2VsZWN0IHRleHQgb24gaU9TIChpc3N1ZSAjNDkpXG5cdFx0XHRzZWxlY3Rpb24gPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCk7XG5cdFx0XHRpZiAoc2VsZWN0aW9uLnJhbmdlQ291bnQgJiYgIXNlbGVjdGlvbi5pc0NvbGxhcHNlZCkge1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKCFkZXZpY2VJc0lPUzQpIHtcblxuXHRcdFx0XHQvLyBXZWlyZCB0aGluZ3MgaGFwcGVuIG9uIGlPUyB3aGVuIGFuIGFsZXJ0IG9yIGNvbmZpcm0gZGlhbG9nIGlzIG9wZW5lZCBmcm9tIGEgY2xpY2sgZXZlbnQgY2FsbGJhY2sgKGlzc3VlICMyMyk6XG5cdFx0XHRcdC8vIHdoZW4gdGhlIHVzZXIgbmV4dCB0YXBzIGFueXdoZXJlIGVsc2Ugb24gdGhlIHBhZ2UsIG5ldyB0b3VjaHN0YXJ0IGFuZCB0b3VjaGVuZCBldmVudHMgYXJlIGRpc3BhdGNoZWRcblx0XHRcdFx0Ly8gd2l0aCB0aGUgc2FtZSBpZGVudGlmaWVyIGFzIHRoZSB0b3VjaCBldmVudCB0aGF0IHByZXZpb3VzbHkgdHJpZ2dlcmVkIHRoZSBjbGljayB0aGF0IHRyaWdnZXJlZCB0aGUgYWxlcnQuXG5cdFx0XHRcdC8vIFNhZGx5LCB0aGVyZSBpcyBhbiBpc3N1ZSBvbiBpT1MgNCB0aGF0IGNhdXNlcyBzb21lIG5vcm1hbCB0b3VjaCBldmVudHMgdG8gaGF2ZSB0aGUgc2FtZSBpZGVudGlmaWVyIGFzIGFuXG5cdFx0XHRcdC8vIGltbWVkaWF0ZWx5IHByZWNlZWRpbmcgdG91Y2ggZXZlbnQgKGlzc3VlICM1MiksIHNvIHRoaXMgZml4IGlzIHVuYXZhaWxhYmxlIG9uIHRoYXQgcGxhdGZvcm0uXG5cdFx0XHRcdC8vIElzc3VlIDEyMDogdG91Y2guaWRlbnRpZmllciBpcyAwIHdoZW4gQ2hyb21lIGRldiB0b29scyAnRW11bGF0ZSB0b3VjaCBldmVudHMnIGlzIHNldCB3aXRoIGFuIGlPUyBkZXZpY2UgVUEgc3RyaW5nLFxuXHRcdFx0XHQvLyB3aGljaCBjYXVzZXMgYWxsIHRvdWNoIGV2ZW50cyB0byBiZSBpZ25vcmVkLiBBcyB0aGlzIGJsb2NrIG9ubHkgYXBwbGllcyB0byBpT1MsIGFuZCBpT1MgaWRlbnRpZmllcnMgYXJlIGFsd2F5cyBsb25nLFxuXHRcdFx0XHQvLyByYW5kb20gaW50ZWdlcnMsIGl0J3Mgc2FmZSB0byB0byBjb250aW51ZSBpZiB0aGUgaWRlbnRpZmllciBpcyAwIGhlcmUuXG5cdFx0XHRcdGlmICh0b3VjaC5pZGVudGlmaWVyICYmIHRvdWNoLmlkZW50aWZpZXIgPT09IHRoaXMubGFzdFRvdWNoSWRlbnRpZmllcikge1xuXHRcdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy5sYXN0VG91Y2hJZGVudGlmaWVyID0gdG91Y2guaWRlbnRpZmllcjtcblxuXHRcdFx0XHQvLyBJZiB0aGUgdGFyZ2V0IGVsZW1lbnQgaXMgYSBjaGlsZCBvZiBhIHNjcm9sbGFibGUgbGF5ZXIgKHVzaW5nIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaCkgYW5kOlxuXHRcdFx0XHQvLyAxKSB0aGUgdXNlciBkb2VzIGEgZmxpbmcgc2Nyb2xsIG9uIHRoZSBzY3JvbGxhYmxlIGxheWVyXG5cdFx0XHRcdC8vIDIpIHRoZSB1c2VyIHN0b3BzIHRoZSBmbGluZyBzY3JvbGwgd2l0aCBhbm90aGVyIHRhcFxuXHRcdFx0XHQvLyB0aGVuIHRoZSBldmVudC50YXJnZXQgb2YgdGhlIGxhc3QgJ3RvdWNoZW5kJyBldmVudCB3aWxsIGJlIHRoZSBlbGVtZW50IHRoYXQgd2FzIHVuZGVyIHRoZSB1c2VyJ3MgZmluZ2VyXG5cdFx0XHRcdC8vIHdoZW4gdGhlIGZsaW5nIHNjcm9sbCB3YXMgc3RhcnRlZCwgY2F1c2luZyBGYXN0Q2xpY2sgdG8gc2VuZCBhIGNsaWNrIGV2ZW50IHRvIHRoYXQgbGF5ZXIgLSB1bmxlc3MgYSBjaGVja1xuXHRcdFx0XHQvLyBpcyBtYWRlIHRvIGVuc3VyZSB0aGF0IGEgcGFyZW50IGxheWVyIHdhcyBub3Qgc2Nyb2xsZWQgYmVmb3JlIHNlbmRpbmcgYSBzeW50aGV0aWMgY2xpY2sgKGlzc3VlICM0MikuXG5cdFx0XHRcdHRoaXMudXBkYXRlU2Nyb2xsUGFyZW50KHRhcmdldEVsZW1lbnQpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHRoaXMudHJhY2tpbmdDbGljayA9IHRydWU7XG5cdFx0dGhpcy50cmFja2luZ0NsaWNrU3RhcnQgPSBldmVudC50aW1lU3RhbXA7XG5cdFx0dGhpcy50YXJnZXRFbGVtZW50ID0gdGFyZ2V0RWxlbWVudDtcblxuXHRcdHRoaXMudG91Y2hTdGFydFggPSB0b3VjaC5wYWdlWDtcblx0XHR0aGlzLnRvdWNoU3RhcnRZID0gdG91Y2gucGFnZVk7XG5cblx0XHQvLyBQcmV2ZW50IHBoYW50b20gY2xpY2tzIG9uIGZhc3QgZG91YmxlLXRhcCAoaXNzdWUgIzM2KVxuXHRcdGlmICgoZXZlbnQudGltZVN0YW1wIC0gdGhpcy5sYXN0Q2xpY2tUaW1lKSA8IHRoaXMudGFwRGVsYXkpIHtcblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRydWU7XG5cdH07XG5cblxuXHQvKipcblx0ICogQmFzZWQgb24gYSB0b3VjaG1vdmUgZXZlbnQgb2JqZWN0LCBjaGVjayB3aGV0aGVyIHRoZSB0b3VjaCBoYXMgbW92ZWQgcGFzdCBhIGJvdW5kYXJ5IHNpbmNlIGl0IHN0YXJ0ZWQuXG5cdCAqXG5cdCAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50XG5cdCAqIEByZXR1cm5zIHtib29sZWFufVxuXHQgKi9cblx0RmFzdENsaWNrLnByb3RvdHlwZS50b3VjaEhhc01vdmVkID0gZnVuY3Rpb24oZXZlbnQpIHtcblx0XHR2YXIgdG91Y2ggPSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXSwgYm91bmRhcnkgPSB0aGlzLnRvdWNoQm91bmRhcnk7XG5cblx0XHRpZiAoTWF0aC5hYnModG91Y2gucGFnZVggLSB0aGlzLnRvdWNoU3RhcnRYKSA+IGJvdW5kYXJ5IHx8IE1hdGguYWJzKHRvdWNoLnBhZ2VZIC0gdGhpcy50b3VjaFN0YXJ0WSkgPiBib3VuZGFyeSkge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9O1xuXG5cblx0LyoqXG5cdCAqIFVwZGF0ZSB0aGUgbGFzdCBwb3NpdGlvbi5cblx0ICpcblx0ICogQHBhcmFtIHtFdmVudH0gZXZlbnRcblx0ICogQHJldHVybnMge2Jvb2xlYW59XG5cdCAqL1xuXHRGYXN0Q2xpY2sucHJvdG90eXBlLm9uVG91Y2hNb3ZlID0gZnVuY3Rpb24oZXZlbnQpIHtcblx0XHRpZiAoIXRoaXMudHJhY2tpbmdDbGljaykge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0Ly8gSWYgdGhlIHRvdWNoIGhhcyBtb3ZlZCwgY2FuY2VsIHRoZSBjbGljayB0cmFja2luZ1xuXHRcdGlmICh0aGlzLnRhcmdldEVsZW1lbnQgIT09IHRoaXMuZ2V0VGFyZ2V0RWxlbWVudEZyb21FdmVudFRhcmdldChldmVudC50YXJnZXQpIHx8IHRoaXMudG91Y2hIYXNNb3ZlZChldmVudCkpIHtcblx0XHRcdHRoaXMudHJhY2tpbmdDbGljayA9IGZhbHNlO1xuXHRcdFx0dGhpcy50YXJnZXRFbGVtZW50ID0gbnVsbDtcblx0XHR9XG5cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fTtcblxuXG5cdC8qKlxuXHQgKiBBdHRlbXB0IHRvIGZpbmQgdGhlIGxhYmVsbGVkIGNvbnRyb2wgZm9yIHRoZSBnaXZlbiBsYWJlbCBlbGVtZW50LlxuXHQgKlxuXHQgKiBAcGFyYW0ge0V2ZW50VGFyZ2V0fEhUTUxMYWJlbEVsZW1lbnR9IGxhYmVsRWxlbWVudFxuXHQgKiBAcmV0dXJucyB7RWxlbWVudHxudWxsfVxuXHQgKi9cblx0RmFzdENsaWNrLnByb3RvdHlwZS5maW5kQ29udHJvbCA9IGZ1bmN0aW9uKGxhYmVsRWxlbWVudCkge1xuXG5cdFx0Ly8gRmFzdCBwYXRoIGZvciBuZXdlciBicm93c2VycyBzdXBwb3J0aW5nIHRoZSBIVE1MNSBjb250cm9sIGF0dHJpYnV0ZVxuXHRcdGlmIChsYWJlbEVsZW1lbnQuY29udHJvbCAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gbGFiZWxFbGVtZW50LmNvbnRyb2w7XG5cdFx0fVxuXG5cdFx0Ly8gQWxsIGJyb3dzZXJzIHVuZGVyIHRlc3QgdGhhdCBzdXBwb3J0IHRvdWNoIGV2ZW50cyBhbHNvIHN1cHBvcnQgdGhlIEhUTUw1IGh0bWxGb3IgYXR0cmlidXRlXG5cdFx0aWYgKGxhYmVsRWxlbWVudC5odG1sRm9yKSB7XG5cdFx0XHRyZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobGFiZWxFbGVtZW50Lmh0bWxGb3IpO1xuXHRcdH1cblxuXHRcdC8vIElmIG5vIGZvciBhdHRyaWJ1dGUgZXhpc3RzLCBhdHRlbXB0IHRvIHJldHJpZXZlIHRoZSBmaXJzdCBsYWJlbGxhYmxlIGRlc2NlbmRhbnQgZWxlbWVudFxuXHRcdC8vIHRoZSBsaXN0IG9mIHdoaWNoIGlzIGRlZmluZWQgaGVyZTogaHR0cDovL3d3dy53My5vcmcvVFIvaHRtbDUvZm9ybXMuaHRtbCNjYXRlZ29yeS1sYWJlbFxuXHRcdHJldHVybiBsYWJlbEVsZW1lbnQucXVlcnlTZWxlY3RvcignYnV0dG9uLCBpbnB1dDpub3QoW3R5cGU9aGlkZGVuXSksIGtleWdlbiwgbWV0ZXIsIG91dHB1dCwgcHJvZ3Jlc3MsIHNlbGVjdCwgdGV4dGFyZWEnKTtcblx0fTtcblxuXG5cdC8qKlxuXHQgKiBPbiB0b3VjaCBlbmQsIGRldGVybWluZSB3aGV0aGVyIHRvIHNlbmQgYSBjbGljayBldmVudCBhdCBvbmNlLlxuXHQgKlxuXHQgKiBAcGFyYW0ge0V2ZW50fSBldmVudFxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn1cblx0ICovXG5cdEZhc3RDbGljay5wcm90b3R5cGUub25Ub3VjaEVuZCA9IGZ1bmN0aW9uKGV2ZW50KSB7XG5cdFx0dmFyIGZvckVsZW1lbnQsIHRyYWNraW5nQ2xpY2tTdGFydCwgdGFyZ2V0VGFnTmFtZSwgc2Nyb2xsUGFyZW50LCB0b3VjaCwgdGFyZ2V0RWxlbWVudCA9IHRoaXMudGFyZ2V0RWxlbWVudDtcblxuXHRcdGlmICghdGhpcy50cmFja2luZ0NsaWNrKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHQvLyBQcmV2ZW50IHBoYW50b20gY2xpY2tzIG9uIGZhc3QgZG91YmxlLXRhcCAoaXNzdWUgIzM2KVxuXHRcdGlmICgoZXZlbnQudGltZVN0YW1wIC0gdGhpcy5sYXN0Q2xpY2tUaW1lKSA8IHRoaXMudGFwRGVsYXkpIHtcblx0XHRcdHRoaXMuY2FuY2VsTmV4dENsaWNrID0gdHJ1ZTtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdGlmICgoZXZlbnQudGltZVN0YW1wIC0gdGhpcy50cmFja2luZ0NsaWNrU3RhcnQpID4gdGhpcy50YXBUaW1lb3V0KSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHQvLyBSZXNldCB0byBwcmV2ZW50IHdyb25nIGNsaWNrIGNhbmNlbCBvbiBpbnB1dCAoaXNzdWUgIzE1NikuXG5cdFx0dGhpcy5jYW5jZWxOZXh0Q2xpY2sgPSBmYWxzZTtcblxuXHRcdHRoaXMubGFzdENsaWNrVGltZSA9IGV2ZW50LnRpbWVTdGFtcDtcblxuXHRcdHRyYWNraW5nQ2xpY2tTdGFydCA9IHRoaXMudHJhY2tpbmdDbGlja1N0YXJ0O1xuXHRcdHRoaXMudHJhY2tpbmdDbGljayA9IGZhbHNlO1xuXHRcdHRoaXMudHJhY2tpbmdDbGlja1N0YXJ0ID0gMDtcblxuXHRcdC8vIE9uIHNvbWUgaU9TIGRldmljZXMsIHRoZSB0YXJnZXRFbGVtZW50IHN1cHBsaWVkIHdpdGggdGhlIGV2ZW50IGlzIGludmFsaWQgaWYgdGhlIGxheWVyXG5cdFx0Ly8gaXMgcGVyZm9ybWluZyBhIHRyYW5zaXRpb24gb3Igc2Nyb2xsLCBhbmQgaGFzIHRvIGJlIHJlLWRldGVjdGVkIG1hbnVhbGx5LiBOb3RlIHRoYXRcblx0XHQvLyBmb3IgdGhpcyB0byBmdW5jdGlvbiBjb3JyZWN0bHksIGl0IG11c3QgYmUgY2FsbGVkICphZnRlciogdGhlIGV2ZW50IHRhcmdldCBpcyBjaGVja2VkIVxuXHRcdC8vIFNlZSBpc3N1ZSAjNTc7IGFsc28gZmlsZWQgYXMgcmRhcjovLzEzMDQ4NTg5IC5cblx0XHRpZiAoZGV2aWNlSXNJT1NXaXRoQmFkVGFyZ2V0KSB7XG5cdFx0XHR0b3VjaCA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdO1xuXG5cdFx0XHQvLyBJbiBjZXJ0YWluIGNhc2VzIGFyZ3VtZW50cyBvZiBlbGVtZW50RnJvbVBvaW50IGNhbiBiZSBuZWdhdGl2ZSwgc28gcHJldmVudCBzZXR0aW5nIHRhcmdldEVsZW1lbnQgdG8gbnVsbFxuXHRcdFx0dGFyZ2V0RWxlbWVudCA9IGRvY3VtZW50LmVsZW1lbnRGcm9tUG9pbnQodG91Y2gucGFnZVggLSB3aW5kb3cucGFnZVhPZmZzZXQsIHRvdWNoLnBhZ2VZIC0gd2luZG93LnBhZ2VZT2Zmc2V0KSB8fCB0YXJnZXRFbGVtZW50O1xuXHRcdFx0dGFyZ2V0RWxlbWVudC5mYXN0Q2xpY2tTY3JvbGxQYXJlbnQgPSB0aGlzLnRhcmdldEVsZW1lbnQuZmFzdENsaWNrU2Nyb2xsUGFyZW50O1xuXHRcdH1cblxuXHRcdHRhcmdldFRhZ05hbWUgPSB0YXJnZXRFbGVtZW50LnRhZ05hbWUudG9Mb3dlckNhc2UoKTtcblx0XHRpZiAodGFyZ2V0VGFnTmFtZSA9PT0gJ2xhYmVsJykge1xuXHRcdFx0Zm9yRWxlbWVudCA9IHRoaXMuZmluZENvbnRyb2wodGFyZ2V0RWxlbWVudCk7XG5cdFx0XHRpZiAoZm9yRWxlbWVudCkge1xuXHRcdFx0XHR0aGlzLmZvY3VzKHRhcmdldEVsZW1lbnQpO1xuXHRcdFx0XHRpZiAoZGV2aWNlSXNBbmRyb2lkKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGFyZ2V0RWxlbWVudCA9IGZvckVsZW1lbnQ7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIGlmICh0aGlzLm5lZWRzRm9jdXModGFyZ2V0RWxlbWVudCkpIHtcblxuXHRcdFx0Ly8gQ2FzZSAxOiBJZiB0aGUgdG91Y2ggc3RhcnRlZCBhIHdoaWxlIGFnbyAoYmVzdCBndWVzcyBpcyAxMDBtcyBiYXNlZCBvbiB0ZXN0cyBmb3IgaXNzdWUgIzM2KSB0aGVuIGZvY3VzIHdpbGwgYmUgdHJpZ2dlcmVkIGFueXdheS4gUmV0dXJuIGVhcmx5IGFuZCB1bnNldCB0aGUgdGFyZ2V0IGVsZW1lbnQgcmVmZXJlbmNlIHNvIHRoYXQgdGhlIHN1YnNlcXVlbnQgY2xpY2sgd2lsbCBiZSBhbGxvd2VkIHRocm91Z2guXG5cdFx0XHQvLyBDYXNlIDI6IFdpdGhvdXQgdGhpcyBleGNlcHRpb24gZm9yIGlucHV0IGVsZW1lbnRzIHRhcHBlZCB3aGVuIHRoZSBkb2N1bWVudCBpcyBjb250YWluZWQgaW4gYW4gaWZyYW1lLCB0aGVuIGFueSBpbnB1dHRlZCB0ZXh0IHdvbid0IGJlIHZpc2libGUgZXZlbiB0aG91Z2ggdGhlIHZhbHVlIGF0dHJpYnV0ZSBpcyB1cGRhdGVkIGFzIHRoZSB1c2VyIHR5cGVzIChpc3N1ZSAjMzcpLlxuXHRcdFx0aWYgKChldmVudC50aW1lU3RhbXAgLSB0cmFja2luZ0NsaWNrU3RhcnQpID4gMTAwIHx8IChkZXZpY2VJc0lPUyAmJiB3aW5kb3cudG9wICE9PSB3aW5kb3cgJiYgdGFyZ2V0VGFnTmFtZSA9PT0gJ2lucHV0JykpIHtcblx0XHRcdFx0dGhpcy50YXJnZXRFbGVtZW50ID0gbnVsbDtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLmZvY3VzKHRhcmdldEVsZW1lbnQpO1xuXHRcdFx0dGhpcy5zZW5kQ2xpY2sodGFyZ2V0RWxlbWVudCwgZXZlbnQpO1xuXG5cdFx0XHQvLyBTZWxlY3QgZWxlbWVudHMgbmVlZCB0aGUgZXZlbnQgdG8gZ28gdGhyb3VnaCBvbiBpT1MgNCwgb3RoZXJ3aXNlIHRoZSBzZWxlY3RvciBtZW51IHdvbid0IG9wZW4uXG5cdFx0XHQvLyBBbHNvIHRoaXMgYnJlYWtzIG9wZW5pbmcgc2VsZWN0cyB3aGVuIFZvaWNlT3ZlciBpcyBhY3RpdmUgb24gaU9TNiwgaU9TNyAoYW5kIHBvc3NpYmx5IG90aGVycylcblx0XHRcdGlmICghZGV2aWNlSXNJT1MgfHwgdGFyZ2V0VGFnTmFtZSAhPT0gJ3NlbGVjdCcpIHtcblx0XHRcdFx0dGhpcy50YXJnZXRFbGVtZW50ID0gbnVsbDtcblx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdGlmIChkZXZpY2VJc0lPUyAmJiAhZGV2aWNlSXNJT1M0KSB7XG5cblx0XHRcdC8vIERvbid0IHNlbmQgYSBzeW50aGV0aWMgY2xpY2sgZXZlbnQgaWYgdGhlIHRhcmdldCBlbGVtZW50IGlzIGNvbnRhaW5lZCB3aXRoaW4gYSBwYXJlbnQgbGF5ZXIgdGhhdCB3YXMgc2Nyb2xsZWRcblx0XHRcdC8vIGFuZCB0aGlzIHRhcCBpcyBiZWluZyB1c2VkIHRvIHN0b3AgdGhlIHNjcm9sbGluZyAodXN1YWxseSBpbml0aWF0ZWQgYnkgYSBmbGluZyAtIGlzc3VlICM0MikuXG5cdFx0XHRzY3JvbGxQYXJlbnQgPSB0YXJnZXRFbGVtZW50LmZhc3RDbGlja1Njcm9sbFBhcmVudDtcblx0XHRcdGlmIChzY3JvbGxQYXJlbnQgJiYgc2Nyb2xsUGFyZW50LmZhc3RDbGlja0xhc3RTY3JvbGxUb3AgIT09IHNjcm9sbFBhcmVudC5zY3JvbGxUb3ApIHtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gUHJldmVudCB0aGUgYWN0dWFsIGNsaWNrIGZyb20gZ29pbmcgdGhvdWdoIC0gdW5sZXNzIHRoZSB0YXJnZXQgbm9kZSBpcyBtYXJrZWQgYXMgcmVxdWlyaW5nXG5cdFx0Ly8gcmVhbCBjbGlja3Mgb3IgaWYgaXQgaXMgaW4gdGhlIHdoaXRlbGlzdCBpbiB3aGljaCBjYXNlIG9ubHkgbm9uLXByb2dyYW1tYXRpYyBjbGlja3MgYXJlIHBlcm1pdHRlZC5cblx0XHRpZiAoIXRoaXMubmVlZHNDbGljayh0YXJnZXRFbGVtZW50KSkge1xuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdHRoaXMuc2VuZENsaWNrKHRhcmdldEVsZW1lbnQsIGV2ZW50KTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH07XG5cblxuXHQvKipcblx0ICogT24gdG91Y2ggY2FuY2VsLCBzdG9wIHRyYWNraW5nIHRoZSBjbGljay5cblx0ICpcblx0ICogQHJldHVybnMge3ZvaWR9XG5cdCAqL1xuXHRGYXN0Q2xpY2sucHJvdG90eXBlLm9uVG91Y2hDYW5jZWwgPSBmdW5jdGlvbigpIHtcblx0XHR0aGlzLnRyYWNraW5nQ2xpY2sgPSBmYWxzZTtcblx0XHR0aGlzLnRhcmdldEVsZW1lbnQgPSBudWxsO1xuXHR9O1xuXG5cblx0LyoqXG5cdCAqIERldGVybWluZSBtb3VzZSBldmVudHMgd2hpY2ggc2hvdWxkIGJlIHBlcm1pdHRlZC5cblx0ICpcblx0ICogQHBhcmFtIHtFdmVudH0gZXZlbnRcblx0ICogQHJldHVybnMge2Jvb2xlYW59XG5cdCAqL1xuXHRGYXN0Q2xpY2sucHJvdG90eXBlLm9uTW91c2UgPSBmdW5jdGlvbihldmVudCkge1xuXG5cdFx0Ly8gSWYgYSB0YXJnZXQgZWxlbWVudCB3YXMgbmV2ZXIgc2V0IChiZWNhdXNlIGEgdG91Y2ggZXZlbnQgd2FzIG5ldmVyIGZpcmVkKSBhbGxvdyB0aGUgZXZlbnRcblx0XHRpZiAoIXRoaXMudGFyZ2V0RWxlbWVudCkge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0aWYgKGV2ZW50LmZvcndhcmRlZFRvdWNoRXZlbnQpIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdC8vIFByb2dyYW1tYXRpY2FsbHkgZ2VuZXJhdGVkIGV2ZW50cyB0YXJnZXRpbmcgYSBzcGVjaWZpYyBlbGVtZW50IHNob3VsZCBiZSBwZXJtaXR0ZWRcblx0XHRpZiAoIWV2ZW50LmNhbmNlbGFibGUpIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdC8vIERlcml2ZSBhbmQgY2hlY2sgdGhlIHRhcmdldCBlbGVtZW50IHRvIHNlZSB3aGV0aGVyIHRoZSBtb3VzZSBldmVudCBuZWVkcyB0byBiZSBwZXJtaXR0ZWQ7XG5cdFx0Ly8gdW5sZXNzIGV4cGxpY2l0bHkgZW5hYmxlZCwgcHJldmVudCBub24tdG91Y2ggY2xpY2sgZXZlbnRzIGZyb20gdHJpZ2dlcmluZyBhY3Rpb25zLFxuXHRcdC8vIHRvIHByZXZlbnQgZ2hvc3QvZG91YmxlY2xpY2tzLlxuXHRcdGlmICghdGhpcy5uZWVkc0NsaWNrKHRoaXMudGFyZ2V0RWxlbWVudCkgfHwgdGhpcy5jYW5jZWxOZXh0Q2xpY2spIHtcblxuXHRcdFx0Ly8gUHJldmVudCBhbnkgdXNlci1hZGRlZCBsaXN0ZW5lcnMgZGVjbGFyZWQgb24gRmFzdENsaWNrIGVsZW1lbnQgZnJvbSBiZWluZyBmaXJlZC5cblx0XHRcdGlmIChldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24pIHtcblx0XHRcdFx0ZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG5cdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdC8vIFBhcnQgb2YgdGhlIGhhY2sgZm9yIGJyb3dzZXJzIHRoYXQgZG9uJ3Qgc3VwcG9ydCBFdmVudCNzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24gKGUuZy4gQW5kcm9pZCAyKVxuXHRcdFx0XHRldmVudC5wcm9wYWdhdGlvblN0b3BwZWQgPSB0cnVlO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBDYW5jZWwgdGhlIGV2ZW50XG5cdFx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBJZiB0aGUgbW91c2UgZXZlbnQgaXMgcGVybWl0dGVkLCByZXR1cm4gdHJ1ZSBmb3IgdGhlIGFjdGlvbiB0byBnbyB0aHJvdWdoLlxuXHRcdHJldHVybiB0cnVlO1xuXHR9O1xuXG5cblx0LyoqXG5cdCAqIE9uIGFjdHVhbCBjbGlja3MsIGRldGVybWluZSB3aGV0aGVyIHRoaXMgaXMgYSB0b3VjaC1nZW5lcmF0ZWQgY2xpY2ssIGEgY2xpY2sgYWN0aW9uIG9jY3VycmluZ1xuXHQgKiBuYXR1cmFsbHkgYWZ0ZXIgYSBkZWxheSBhZnRlciBhIHRvdWNoICh3aGljaCBuZWVkcyB0byBiZSBjYW5jZWxsZWQgdG8gYXZvaWQgZHVwbGljYXRpb24pLCBvclxuXHQgKiBhbiBhY3R1YWwgY2xpY2sgd2hpY2ggc2hvdWxkIGJlIHBlcm1pdHRlZC5cblx0ICpcblx0ICogQHBhcmFtIHtFdmVudH0gZXZlbnRcblx0ICogQHJldHVybnMge2Jvb2xlYW59XG5cdCAqL1xuXHRGYXN0Q2xpY2sucHJvdG90eXBlLm9uQ2xpY2sgPSBmdW5jdGlvbihldmVudCkge1xuXHRcdHZhciBwZXJtaXR0ZWQ7XG5cblx0XHQvLyBJdCdzIHBvc3NpYmxlIGZvciBhbm90aGVyIEZhc3RDbGljay1saWtlIGxpYnJhcnkgZGVsaXZlcmVkIHdpdGggdGhpcmQtcGFydHkgY29kZSB0byBmaXJlIGEgY2xpY2sgZXZlbnQgYmVmb3JlIEZhc3RDbGljayBkb2VzIChpc3N1ZSAjNDQpLiBJbiB0aGF0IGNhc2UsIHNldCB0aGUgY2xpY2stdHJhY2tpbmcgZmxhZyBiYWNrIHRvIGZhbHNlIGFuZCByZXR1cm4gZWFybHkuIFRoaXMgd2lsbCBjYXVzZSBvblRvdWNoRW5kIHRvIHJldHVybiBlYXJseS5cblx0XHRpZiAodGhpcy50cmFja2luZ0NsaWNrKSB7XG5cdFx0XHR0aGlzLnRhcmdldEVsZW1lbnQgPSBudWxsO1xuXHRcdFx0dGhpcy50cmFja2luZ0NsaWNrID0gZmFsc2U7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHQvLyBWZXJ5IG9kZCBiZWhhdmlvdXIgb24gaU9TIChpc3N1ZSAjMTgpOiBpZiBhIHN1Ym1pdCBlbGVtZW50IGlzIHByZXNlbnQgaW5zaWRlIGEgZm9ybSBhbmQgdGhlIHVzZXIgaGl0cyBlbnRlciBpbiB0aGUgaU9TIHNpbXVsYXRvciBvciBjbGlja3MgdGhlIEdvIGJ1dHRvbiBvbiB0aGUgcG9wLXVwIE9TIGtleWJvYXJkIHRoZSBhIGtpbmQgb2YgJ2Zha2UnIGNsaWNrIGV2ZW50IHdpbGwgYmUgdHJpZ2dlcmVkIHdpdGggdGhlIHN1Ym1pdC10eXBlIGlucHV0IGVsZW1lbnQgYXMgdGhlIHRhcmdldC5cblx0XHRpZiAoZXZlbnQudGFyZ2V0LnR5cGUgPT09ICdzdWJtaXQnICYmIGV2ZW50LmRldGFpbCA9PT0gMCkge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0cGVybWl0dGVkID0gdGhpcy5vbk1vdXNlKGV2ZW50KTtcblxuXHRcdC8vIE9ubHkgdW5zZXQgdGFyZ2V0RWxlbWVudCBpZiB0aGUgY2xpY2sgaXMgbm90IHBlcm1pdHRlZC4gVGhpcyB3aWxsIGVuc3VyZSB0aGF0IHRoZSBjaGVjayBmb3IgIXRhcmdldEVsZW1lbnQgaW4gb25Nb3VzZSBmYWlscyBhbmQgdGhlIGJyb3dzZXIncyBjbGljayBkb2Vzbid0IGdvIHRocm91Z2guXG5cdFx0aWYgKCFwZXJtaXR0ZWQpIHtcblx0XHRcdHRoaXMudGFyZ2V0RWxlbWVudCA9IG51bGw7XG5cdFx0fVxuXG5cdFx0Ly8gSWYgY2xpY2tzIGFyZSBwZXJtaXR0ZWQsIHJldHVybiB0cnVlIGZvciB0aGUgYWN0aW9uIHRvIGdvIHRocm91Z2guXG5cdFx0cmV0dXJuIHBlcm1pdHRlZDtcblx0fTtcblxuXG5cdC8qKlxuXHQgKiBSZW1vdmUgYWxsIEZhc3RDbGljaydzIGV2ZW50IGxpc3RlbmVycy5cblx0ICpcblx0ICogQHJldHVybnMge3ZvaWR9XG5cdCAqL1xuXHRGYXN0Q2xpY2sucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcblx0XHR2YXIgbGF5ZXIgPSB0aGlzLmxheWVyO1xuXG5cdFx0aWYgKGRldmljZUlzQW5kcm9pZCkge1xuXHRcdFx0bGF5ZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgdGhpcy5vbk1vdXNlLCB0cnVlKTtcblx0XHRcdGxheWVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMub25Nb3VzZSwgdHJ1ZSk7XG5cdFx0XHRsYXllci5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5vbk1vdXNlLCB0cnVlKTtcblx0XHR9XG5cblx0XHRsYXllci5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25DbGljaywgdHJ1ZSk7XG5cdFx0bGF5ZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHRoaXMub25Ub3VjaFN0YXJ0LCBmYWxzZSk7XG5cdFx0bGF5ZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgdGhpcy5vblRvdWNoTW92ZSwgZmFsc2UpO1xuXHRcdGxheWVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgdGhpcy5vblRvdWNoRW5kLCBmYWxzZSk7XG5cdFx0bGF5ZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hjYW5jZWwnLCB0aGlzLm9uVG91Y2hDYW5jZWwsIGZhbHNlKTtcblx0fTtcblxuXG5cdC8qKlxuXHQgKiBDaGVjayB3aGV0aGVyIEZhc3RDbGljayBpcyBuZWVkZWQuXG5cdCAqXG5cdCAqIEBwYXJhbSB7RWxlbWVudH0gbGF5ZXIgVGhlIGxheWVyIHRvIGxpc3RlbiBvblxuXHQgKi9cblx0RmFzdENsaWNrLm5vdE5lZWRlZCA9IGZ1bmN0aW9uKGxheWVyKSB7XG5cdFx0dmFyIG1ldGFWaWV3cG9ydDtcblx0XHR2YXIgY2hyb21lVmVyc2lvbjtcblx0XHR2YXIgYmxhY2tiZXJyeVZlcnNpb247XG5cdFx0dmFyIGZpcmVmb3hWZXJzaW9uO1xuXG5cdFx0Ly8gRGV2aWNlcyB0aGF0IGRvbid0IHN1cHBvcnQgdG91Y2ggZG9uJ3QgbmVlZCBGYXN0Q2xpY2tcblx0XHRpZiAodHlwZW9mIHdpbmRvdy5vbnRvdWNoc3RhcnQgPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHQvLyBDaHJvbWUgdmVyc2lvbiAtIHplcm8gZm9yIG90aGVyIGJyb3dzZXJzXG5cdFx0Y2hyb21lVmVyc2lvbiA9ICsoL0Nocm9tZVxcLyhbMC05XSspLy5leGVjKG5hdmlnYXRvci51c2VyQWdlbnQpIHx8IFssMF0pWzFdO1xuXG5cdFx0aWYgKGNocm9tZVZlcnNpb24pIHtcblxuXHRcdFx0aWYgKGRldmljZUlzQW5kcm9pZCkge1xuXHRcdFx0XHRtZXRhVmlld3BvcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtZXRhW25hbWU9dmlld3BvcnRdJyk7XG5cblx0XHRcdFx0aWYgKG1ldGFWaWV3cG9ydCkge1xuXHRcdFx0XHRcdC8vIENocm9tZSBvbiBBbmRyb2lkIHdpdGggdXNlci1zY2FsYWJsZT1cIm5vXCIgZG9lc24ndCBuZWVkIEZhc3RDbGljayAoaXNzdWUgIzg5KVxuXHRcdFx0XHRcdGlmIChtZXRhVmlld3BvcnQuY29udGVudC5pbmRleE9mKCd1c2VyLXNjYWxhYmxlPW5vJykgIT09IC0xKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Ly8gQ2hyb21lIDMyIGFuZCBhYm92ZSB3aXRoIHdpZHRoPWRldmljZS13aWR0aCBvciBsZXNzIGRvbid0IG5lZWQgRmFzdENsaWNrXG5cdFx0XHRcdFx0aWYgKGNocm9tZVZlcnNpb24gPiAzMSAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsV2lkdGggPD0gd2luZG93Lm91dGVyV2lkdGgpIHtcblx0XHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHQvLyBDaHJvbWUgZGVza3RvcCBkb2Vzbid0IG5lZWQgRmFzdENsaWNrIChpc3N1ZSAjMTUpXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoZGV2aWNlSXNCbGFja0JlcnJ5MTApIHtcblx0XHRcdGJsYWNrYmVycnlWZXJzaW9uID0gbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvVmVyc2lvblxcLyhbMC05XSopXFwuKFswLTldKikvKTtcblxuXHRcdFx0Ly8gQmxhY2tCZXJyeSAxMC4zKyBkb2VzIG5vdCByZXF1aXJlIEZhc3RjbGljayBsaWJyYXJ5LlxuXHRcdFx0Ly8gaHR0cHM6Ly9naXRodWIuY29tL2Z0bGFicy9mYXN0Y2xpY2svaXNzdWVzLzI1MVxuXHRcdFx0aWYgKGJsYWNrYmVycnlWZXJzaW9uWzFdID49IDEwICYmIGJsYWNrYmVycnlWZXJzaW9uWzJdID49IDMpIHtcblx0XHRcdFx0bWV0YVZpZXdwb3J0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWV0YVtuYW1lPXZpZXdwb3J0XScpO1xuXG5cdFx0XHRcdGlmIChtZXRhVmlld3BvcnQpIHtcblx0XHRcdFx0XHQvLyB1c2VyLXNjYWxhYmxlPW5vIGVsaW1pbmF0ZXMgY2xpY2sgZGVsYXkuXG5cdFx0XHRcdFx0aWYgKG1ldGFWaWV3cG9ydC5jb250ZW50LmluZGV4T2YoJ3VzZXItc2NhbGFibGU9bm8nKSAhPT0gLTEpIHtcblx0XHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQvLyB3aWR0aD1kZXZpY2Utd2lkdGggKG9yIGxlc3MgdGhhbiBkZXZpY2Utd2lkdGgpIGVsaW1pbmF0ZXMgY2xpY2sgZGVsYXkuXG5cdFx0XHRcdFx0aWYgKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxXaWR0aCA8PSB3aW5kb3cub3V0ZXJXaWR0aCkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gSUUxMCB3aXRoIC1tcy10b3VjaC1hY3Rpb246IG5vbmUgb3IgbWFuaXB1bGF0aW9uLCB3aGljaCBkaXNhYmxlcyBkb3VibGUtdGFwLXRvLXpvb20gKGlzc3VlICM5Nylcblx0XHRpZiAobGF5ZXIuc3R5bGUubXNUb3VjaEFjdGlvbiA9PT0gJ25vbmUnIHx8IGxheWVyLnN0eWxlLnRvdWNoQWN0aW9uID09PSAnbWFuaXB1bGF0aW9uJykge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0Ly8gRmlyZWZveCB2ZXJzaW9uIC0gemVybyBmb3Igb3RoZXIgYnJvd3NlcnNcblx0XHRmaXJlZm94VmVyc2lvbiA9ICsoL0ZpcmVmb3hcXC8oWzAtOV0rKS8uZXhlYyhuYXZpZ2F0b3IudXNlckFnZW50KSB8fCBbLDBdKVsxXTtcblxuXHRcdGlmIChmaXJlZm94VmVyc2lvbiA+PSAyNykge1xuXHRcdFx0Ly8gRmlyZWZveCAyNysgZG9lcyBub3QgaGF2ZSB0YXAgZGVsYXkgaWYgdGhlIGNvbnRlbnQgaXMgbm90IHpvb21hYmxlIC0gaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9OTIyODk2XG5cblx0XHRcdG1ldGFWaWV3cG9ydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21ldGFbbmFtZT12aWV3cG9ydF0nKTtcblx0XHRcdGlmIChtZXRhVmlld3BvcnQgJiYgKG1ldGFWaWV3cG9ydC5jb250ZW50LmluZGV4T2YoJ3VzZXItc2NhbGFibGU9bm8nKSAhPT0gLTEgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFdpZHRoIDw9IHdpbmRvdy5vdXRlcldpZHRoKSkge1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBJRTExOiBwcmVmaXhlZCAtbXMtdG91Y2gtYWN0aW9uIGlzIG5vIGxvbmdlciBzdXBwb3J0ZWQgYW5kIGl0J3MgcmVjb21lbmRlZCB0byB1c2Ugbm9uLXByZWZpeGVkIHZlcnNpb25cblx0XHQvLyBodHRwOi8vbXNkbi5taWNyb3NvZnQuY29tL2VuLXVzL2xpYnJhcnkvd2luZG93cy9hcHBzL0hoNzY3MzEzLmFzcHhcblx0XHRpZiAobGF5ZXIuc3R5bGUudG91Y2hBY3Rpb24gPT09ICdub25lJyB8fCBsYXllci5zdHlsZS50b3VjaEFjdGlvbiA9PT0gJ21hbmlwdWxhdGlvbicpIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdHJldHVybiBmYWxzZTtcblx0fTtcblxuXG5cdC8qKlxuXHQgKiBGYWN0b3J5IG1ldGhvZCBmb3IgY3JlYXRpbmcgYSBGYXN0Q2xpY2sgb2JqZWN0XG5cdCAqXG5cdCAqIEBwYXJhbSB7RWxlbWVudH0gbGF5ZXIgVGhlIGxheWVyIHRvIGxpc3RlbiBvblxuXHQgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnM9e31dIFRoZSBvcHRpb25zIHRvIG92ZXJyaWRlIHRoZSBkZWZhdWx0c1xuXHQgKi9cblx0RmFzdENsaWNrLmF0dGFjaCA9IGZ1bmN0aW9uKGxheWVyLCBvcHRpb25zKSB7XG5cdFx0cmV0dXJuIG5ldyBGYXN0Q2xpY2sobGF5ZXIsIG9wdGlvbnMpO1xuXHR9O1xuXG5cblx0aWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIGRlZmluZS5hbWQgPT09ICdvYmplY3QnICYmIGRlZmluZS5hbWQpIHtcblxuXHRcdC8vIEFNRC4gUmVnaXN0ZXIgYXMgYW4gYW5vbnltb3VzIG1vZHVsZS5cblx0XHRkZWZpbmUoZnVuY3Rpb24oKSB7XG5cdFx0XHRyZXR1cm4gRmFzdENsaWNrO1xuXHRcdH0pO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzKSB7XG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBGYXN0Q2xpY2suYXR0YWNoO1xuXHRcdG1vZHVsZS5leHBvcnRzLkZhc3RDbGljayA9IEZhc3RDbGljaztcblx0fSBlbHNlIHtcblx0XHR3aW5kb3cuRmFzdENsaWNrID0gRmFzdENsaWNrO1xuXHR9XG59KCkpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2Zhc3RjbGljay9saWIvZmFzdGNsaWNrLmpzIiwiLypcclxuICogQ29weXJpZ2h0IChjKSAyMDE2LTIwMTggTWFydGluIERvbmF0aCA8bWFydGluLmRvbmF0aEBzcXVpZGZ1bmsuY29tPlxyXG4gKlxyXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XHJcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvXHJcbiAqIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlXHJcbiAqIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vclxyXG4gKiBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xyXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxyXG4gKlxyXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxyXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cclxuICpcclxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxyXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcclxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTi1JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxyXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXHJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HXHJcbiAqIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1NcclxuICogSU4gVEhFIFNPRlRXQVJFLlxyXG4gKi9cclxuXHJcbmltcG9ydCBFdmVudCBmcm9tIFwiLi9NYXRlcmlhbC9FdmVudFwiXHJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4vTWF0ZXJpYWwvSGVhZGVyXCJcclxuaW1wb3J0IE5hdiBmcm9tIFwiLi9NYXRlcmlhbC9OYXZcIlxyXG5pbXBvcnQgU2VhcmNoIGZyb20gXCIuL01hdGVyaWFsL1NlYXJjaFwiXHJcbmltcG9ydCBTaWRlYmFyIGZyb20gXCIuL01hdGVyaWFsL1NpZGViYXJcIlxyXG5pbXBvcnQgU291cmNlIGZyb20gXCIuL01hdGVyaWFsL1NvdXJjZVwiXHJcbmltcG9ydCBUYWJzIGZyb20gXCIuL01hdGVyaWFsL1RhYnNcIlxyXG5cclxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiBNb2R1bGVcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIEV2ZW50LFxyXG4gIEhlYWRlcixcclxuICBOYXYsXHJcbiAgU2VhcmNoLFxyXG4gIFNpZGViYXIsXHJcbiAgU291cmNlLFxyXG4gIFRhYnNcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXNzZXRzL2phdmFzY3JpcHRzL2NvbXBvbmVudHMvTWF0ZXJpYWwuanMiLCIvKlxyXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYtMjAxOCBNYXJ0aW4gRG9uYXRoIDxtYXJ0aW4uZG9uYXRoQHNxdWlkZnVuay5jb20+XHJcbiAqXHJcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcclxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG9cclxuICogZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGVcclxuICogcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yXHJcbiAqIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXHJcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XHJcbiAqXHJcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXHJcbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxyXG4gKlxyXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXHJcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxyXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OLUlORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXHJcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcclxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkdcclxuICogRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HU1xyXG4gKiBJTiBUSEUgU09GVFdBUkUuXHJcbiAqL1xyXG5cclxuaW1wb3J0IExpc3RlbmVyIGZyb20gXCIuL0V2ZW50L0xpc3RlbmVyXCJcclxuaW1wb3J0IE1hdGNoTWVkaWEgZnJvbSBcIi4vRXZlbnQvTWF0Y2hNZWRpYVwiXHJcblxyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqIE1vZHVsZVxyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgTGlzdGVuZXIsXHJcbiAgTWF0Y2hNZWRpYVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hc3NldHMvamF2YXNjcmlwdHMvY29tcG9uZW50cy9NYXRlcmlhbC9FdmVudC5qcyIsIi8qXHJcbiAqIENvcHlyaWdodCAoYykgMjAxNi0yMDE4IE1hcnRpbiBEb25hdGggPG1hcnRpbi5kb25hdGhAc3F1aWRmdW5rLmNvbT5cclxuICpcclxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxyXG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0b1xyXG4gKiBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZVxyXG4gKiByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3JcclxuICogc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcclxuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcclxuICpcclxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cclxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcbiAqXHJcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcclxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXHJcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT04tSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcclxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxyXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lOR1xyXG4gKiBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTXHJcbiAqIElOIFRIRSBTT0ZUV0FSRS5cclxuICovXHJcblxyXG5pbXBvcnQgTGlzdGVuZXIgZnJvbSBcIi4vTGlzdGVuZXJcIiAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXHJcblxyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqIENsYXNzXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hdGNoTWVkaWEge1xyXG5cclxuICAvKipcclxuICAgKiBNZWRpYSBxdWVyeSBsaXN0ZW5lclxyXG4gICAqXHJcbiAgICogVGhpcyBjbGFzcyBsaXN0ZW5zIGZvciBzdGF0ZSBjaGFuZ2VzIG9mIG1lZGlhIHF1ZXJpZXMgYW5kIGF1dG9tYXRpY2FsbHlcclxuICAgKiBzd2l0Y2hlcyB0aGUgZ2l2ZW4gbGlzdGVuZXJzIG9uIG9yIG9mZi5cclxuICAgKlxyXG4gICAqIEBjb25zdHJ1Y3RvclxyXG4gICAqXHJcbiAgICogQHByb3BlcnR5IHtGdW5jdGlvbn0gaGFuZGxlcl8gLSBNZWRpYSBxdWVyeSBldmVudCBoYW5kbGVyXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gcXVlcnkgLSBNZWRpYSBxdWVyeSB0byB0ZXN0IGZvclxyXG4gICAqIEBwYXJhbSB7TGlzdGVuZXJ9IGxpc3RlbmVyIC0gRXZlbnQgbGlzdGVuZXJcclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcihxdWVyeSwgbGlzdGVuZXIpIHtcclxuICAgIHRoaXMuaGFuZGxlcl8gPSBtcSA9PiB7XHJcbiAgICAgIGlmIChtcS5tYXRjaGVzKVxyXG4gICAgICAgIGxpc3RlbmVyLmxpc3RlbigpXHJcbiAgICAgIGVsc2VcclxuICAgICAgICBsaXN0ZW5lci51bmxpc3RlbigpXHJcbiAgICB9XHJcblxyXG4gICAgLyogSW5pdGlhbGl6ZSBtZWRpYSBxdWVyeSBsaXN0ZW5lciAqL1xyXG4gICAgY29uc3QgbWVkaWEgPSB3aW5kb3cubWF0Y2hNZWRpYShxdWVyeSlcclxuICAgIG1lZGlhLmFkZExpc3RlbmVyKHRoaXMuaGFuZGxlcl8pXHJcblxyXG4gICAgLyogQWx3YXlzIGNoZWNrIGF0IGluaXRpYWxpemF0aW9uICovXHJcbiAgICB0aGlzLmhhbmRsZXJfKG1lZGlhKVxyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXNzZXRzL2phdmFzY3JpcHRzL2NvbXBvbmVudHMvTWF0ZXJpYWwvRXZlbnQvTWF0Y2hNZWRpYS5qcyIsIi8qXHJcbiAqIENvcHlyaWdodCAoYykgMjAxNi0yMDE4IE1hcnRpbiBEb25hdGggPG1hcnRpbi5kb25hdGhAc3F1aWRmdW5rLmNvbT5cclxuICpcclxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxyXG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0b1xyXG4gKiBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZVxyXG4gKiByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3JcclxuICogc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcclxuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcclxuICpcclxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cclxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcbiAqXHJcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcclxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXHJcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT04tSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcclxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxyXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lOR1xyXG4gKiBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTXHJcbiAqIElOIFRIRSBTT0ZUV0FSRS5cclxuICovXHJcblxyXG5pbXBvcnQgU2hhZG93IGZyb20gXCIuL0hlYWRlci9TaGFkb3dcIlxyXG5pbXBvcnQgVGl0bGUgZnJvbSBcIi4vSGVhZGVyL1RpdGxlXCJcclxuXHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogTW9kdWxlXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBTaGFkb3csXHJcbiAgVGl0bGVcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXNzZXRzL2phdmFzY3JpcHRzL2NvbXBvbmVudHMvTWF0ZXJpYWwvSGVhZGVyLmpzIiwiLypcclxuICogQ29weXJpZ2h0IChjKSAyMDE2LTIwMTggTWFydGluIERvbmF0aCA8bWFydGluLmRvbmF0aEBzcXVpZGZ1bmsuY29tPlxyXG4gKlxyXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XHJcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvXHJcbiAqIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlXHJcbiAqIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vclxyXG4gKiBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xyXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxyXG4gKlxyXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxyXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cclxuICpcclxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxyXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcclxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTi1JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxyXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXHJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HXHJcbiAqIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1NcclxuICogSU4gVEhFIFNPRlRXQVJFLlxyXG4gKi9cclxuXHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogQ2xhc3NcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hhZG93IHtcclxuXHJcbiAgLyoqXHJcbiAgICogU2hvdyBvciBoaWRlIGhlYWRlciBzaGFkb3cgZGVwZW5kaW5nIG9uIHBhZ2UgeS1vZmZzZXRcclxuICAgKlxyXG4gICAqIEBjb25zdHJ1Y3RvclxyXG4gICAqXHJcbiAgICogQHByb3BlcnR5IHtIVE1MRWxlbWVudH0gZWxfIC0gQ29udGVudCBjb250YWluZXJcclxuICAgKiBAcHJvcGVydHkge0hUTUxFbGVtZW50fSBoZWFkZXJfIC0gSGVhZGVyXHJcbiAgICogQHByb3BlcnR5IHtudW1iZXJ9IGhlaWdodF8gLSBPZmZzZXQgaGVpZ2h0IG9mIHByZXZpb3VzIG5vZGVzXHJcbiAgICogQHByb3BlcnR5IHtib29sZWFufSBhY3RpdmVfIC0gSGVhZGVyIHNoYWRvdyBzdGF0ZVxyXG4gICAqXHJcbiAgICogQHBhcmFtIHsoc3RyaW5nfEhUTUxFbGVtZW50KX0gZWwgLSBTZWxlY3RvciBvciBIVE1MIGVsZW1lbnRcclxuICAgKiBAcGFyYW0geyhzdHJpbmd8SFRNTEVsZW1lbnQpfSBoZWFkZXIgLSBTZWxlY3RvciBvciBIVE1MIGVsZW1lbnRcclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcihlbCwgaGVhZGVyKSB7XHJcbiAgICBsZXQgcmVmID0gKHR5cGVvZiBlbCA9PT0gXCJzdHJpbmdcIilcclxuICAgICAgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVsKVxyXG4gICAgICA6IGVsXHJcbiAgICBpZiAoIShyZWYgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkgfHxcclxuICAgICAgICAhKHJlZi5wYXJlbnROb2RlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKVxyXG4gICAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3JcclxuICAgIHRoaXMuZWxfID0gcmVmLnBhcmVudE5vZGVcclxuXHJcbiAgICAvKiBSZXRyaWV2ZSBoZWFkZXIgKi9cclxuICAgIHJlZiA9ICh0eXBlb2YgaGVhZGVyID09PSBcInN0cmluZ1wiKVxyXG4gICAgICA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoaGVhZGVyKVxyXG4gICAgICA6IGhlYWRlclxyXG4gICAgaWYgKCEocmVmIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKVxyXG4gICAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3JcclxuICAgIHRoaXMuaGVhZGVyXyA9IHJlZlxyXG5cclxuICAgIC8qIEluaXRpYWxpemUgaGVpZ2h0IGFuZCBzdGF0ZSAqL1xyXG4gICAgdGhpcy5oZWlnaHRfID0gMFxyXG4gICAgdGhpcy5hY3RpdmVfID0gZmFsc2VcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENhbGN1bGF0ZSB0b3RhbCBoZWlnaHQgb2YgcHJldmlvdXMgbm9kZXNcclxuICAgKi9cclxuICBzZXR1cCgpIHtcclxuICAgIGxldCBjdXJyZW50ID0gdGhpcy5lbF9cclxuICAgIHdoaWxlICgoY3VycmVudCA9IGN1cnJlbnQucHJldmlvdXNFbGVtZW50U2libGluZykpIHtcclxuICAgICAgaWYgKCEoY3VycmVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSlcclxuICAgICAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3JcclxuICAgICAgdGhpcy5oZWlnaHRfICs9IGN1cnJlbnQub2Zmc2V0SGVpZ2h0XHJcbiAgICB9XHJcbiAgICB0aGlzLnVwZGF0ZSgpXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBVcGRhdGUgc2hhZG93IHN0YXRlXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge0V2ZW50fSBldiAtIEV2ZW50XHJcbiAgICovXHJcbiAgdXBkYXRlKGV2KSB7XHJcbiAgICBpZiAoZXYgJiYgKGV2LnR5cGUgPT09IFwicmVzaXplXCIgfHwgZXYudHlwZSA9PT0gXCJvcmllbnRhdGlvbmNoYW5nZVwiKSkge1xyXG4gICAgICB0aGlzLmhlaWdodF8gPSAwXHJcbiAgICAgIHRoaXMuc2V0dXAoKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgYWN0aXZlID0gd2luZG93LnBhZ2VZT2Zmc2V0ID49IHRoaXMuaGVpZ2h0X1xyXG4gICAgICBpZiAoYWN0aXZlICE9PSB0aGlzLmFjdGl2ZV8pXHJcbiAgICAgICAgdGhpcy5oZWFkZXJfLmRhdGFzZXQubWRTdGF0ZSA9ICh0aGlzLmFjdGl2ZV8gPSBhY3RpdmUpID8gXCJzaGFkb3dcIiA6IFwiXCJcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlc2V0IHNoYWRvdyBzdGF0ZVxyXG4gICAqL1xyXG4gIHJlc2V0KCkge1xyXG4gICAgdGhpcy5oZWFkZXJfLmRhdGFzZXQubWRTdGF0ZSA9IFwiXCJcclxuICAgIHRoaXMuaGVpZ2h0XyA9IDBcclxuICAgIHRoaXMuYWN0aXZlXyA9IGZhbHNlXHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hc3NldHMvamF2YXNjcmlwdHMvY29tcG9uZW50cy9NYXRlcmlhbC9IZWFkZXIvU2hhZG93LmpzIiwiLypcclxuICogQ29weXJpZ2h0IChjKSAyMDE2LTIwMTggTWFydGluIERvbmF0aCA8bWFydGluLmRvbmF0aEBzcXVpZGZ1bmsuY29tPlxyXG4gKlxyXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XHJcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvXHJcbiAqIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlXHJcbiAqIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vclxyXG4gKiBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xyXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxyXG4gKlxyXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxyXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cclxuICpcclxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxyXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcclxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTi1JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxyXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXHJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HXHJcbiAqIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1NcclxuICogSU4gVEhFIFNPRlRXQVJFLlxyXG4gKi9cclxuXHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogQ2xhc3NcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGl0bGUge1xyXG5cclxuICAvKipcclxuICAgKiBTd2FwIGhlYWRlciB0aXRsZSB0b3BpY3Mgd2hlbiBoZWFkZXIgaXMgc2Nyb2xsZWQgcGFzdFxyXG4gICAqXHJcbiAgICogQGNvbnN0cnVjdG9yXHJcbiAgICpcclxuICAgKiBAcHJvcGVydHkge0hUTUxFbGVtZW50fSBlbF8gLSBFbGVtZW50XHJcbiAgICogQHByb3BlcnR5IHtIVE1MRWxlbWVudH0gaGVhZGVyXyAtIEhlYWRlclxyXG4gICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gYWN0aXZlXyAtIFRpdGxlIHN0YXRlXHJcbiAgICpcclxuICAgKiBAcGFyYW0geyhzdHJpbmd8SFRNTEVsZW1lbnQpfSBlbCAtIFNlbGVjdG9yIG9yIEhUTUwgZWxlbWVudFxyXG4gICAqIEBwYXJhbSB7KHN0cmluZ3xIVE1MSGVhZGluZ0VsZW1lbnQpfSBoZWFkZXIgLSBTZWxlY3RvciBvciBIVE1MIGVsZW1lbnRcclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcihlbCwgaGVhZGVyKSB7XHJcbiAgICBsZXQgcmVmID0gKHR5cGVvZiBlbCA9PT0gXCJzdHJpbmdcIilcclxuICAgICAgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVsKVxyXG4gICAgICA6IGVsXHJcbiAgICBpZiAoIShyZWYgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpXHJcbiAgICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvclxyXG4gICAgdGhpcy5lbF8gPSByZWZcclxuXHJcbiAgICAvKiBSZXRyaWV2ZSBoZWFkZXIgKi9cclxuICAgIHJlZiA9ICh0eXBlb2YgaGVhZGVyID09PSBcInN0cmluZ1wiKVxyXG4gICAgICA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoaGVhZGVyKVxyXG4gICAgICA6IGhlYWRlclxyXG4gICAgaWYgKCEocmVmIGluc3RhbmNlb2YgSFRNTEhlYWRpbmdFbGVtZW50KSlcclxuICAgICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yXHJcbiAgICB0aGlzLmhlYWRlcl8gPSByZWZcclxuXHJcbiAgICAvKiBJbml0aWFsaXplIHN0YXRlICovXHJcbiAgICB0aGlzLmFjdGl2ZV8gPSBmYWxzZVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2V0dXAgdGl0bGUgc3RhdGVcclxuICAgKi9cclxuICBzZXR1cCgpIHtcclxuICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwodGhpcy5lbF8uY2hpbGRyZW4sIG5vZGUgPT4geyAgICAgICAgICAgICAgICAgICAvLyBUT0RPOiB1c2UgY2hpbGROb2RlcyBoZXJlIGZvciBJRT9cclxuICAgICAgbm9kZS5zdHlsZS53aWR0aCA9IGAke3RoaXMuZWxfLm9mZnNldFdpZHRoIC0gMjB9cHhgXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVXBkYXRlIHRpdGxlIHN0YXRlXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge0V2ZW50fSBldiAtIEV2ZW50XHJcbiAgICovXHJcbiAgdXBkYXRlKGV2KSB7XHJcbiAgICBjb25zdCBhY3RpdmUgPSB3aW5kb3cucGFnZVlPZmZzZXQgPj0gdGhpcy5oZWFkZXJfLm9mZnNldFRvcFxyXG4gICAgaWYgKGFjdGl2ZSAhPT0gdGhpcy5hY3RpdmVfKVxyXG4gICAgICB0aGlzLmVsXy5kYXRhc2V0Lm1kU3RhdGUgPSAodGhpcy5hY3RpdmVfID0gYWN0aXZlKSA/IFwiYWN0aXZlXCIgOiBcIlwiXHJcblxyXG4gICAgLyogSGFjazogaW5kdWNlIGVsbGlwc2lzIG9uIHRvcGljcyAqL1xyXG4gICAgaWYgKGV2LnR5cGUgPT09IFwicmVzaXplXCIgfHwgZXYudHlwZSA9PT0gXCJvcmllbnRhdGlvbmNoYW5nZVwiKSB7XHJcbiAgICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwodGhpcy5lbF8uY2hpbGRyZW4sIG5vZGUgPT4ge1xyXG4gICAgICAgIG5vZGUuc3R5bGUud2lkdGggPSBgJHt0aGlzLmVsXy5vZmZzZXRXaWR0aCAtIDIwfXB4YFxyXG4gICAgICB9KVxyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlc2V0IHRpdGxlIHN0YXRlXHJcbiAgICovXHJcbiAgcmVzZXQoKSB7XHJcbiAgICB0aGlzLmVsXy5kYXRhc2V0Lm1kU3RhdGUgPSBcIlwiXHJcbiAgICB0aGlzLmVsXy5zdHlsZS53aWR0aCA9IFwiXCJcclxuICAgIHRoaXMuYWN0aXZlXyA9IGZhbHNlXHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hc3NldHMvamF2YXNjcmlwdHMvY29tcG9uZW50cy9NYXRlcmlhbC9IZWFkZXIvVGl0bGUuanMiLCIvKlxyXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYtMjAxOCBNYXJ0aW4gRG9uYXRoIDxtYXJ0aW4uZG9uYXRoQHNxdWlkZnVuay5jb20+XHJcbiAqXHJcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcclxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG9cclxuICogZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGVcclxuICogcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yXHJcbiAqIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXHJcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XHJcbiAqXHJcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXHJcbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxyXG4gKlxyXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXHJcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxyXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OLUlORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXHJcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcclxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkdcclxuICogRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HU1xyXG4gKiBJTiBUSEUgU09GVFdBUkUuXHJcbiAqL1xyXG5cclxuaW1wb3J0IEJsdXIgZnJvbSBcIi4vTmF2L0JsdXJcIlxyXG5pbXBvcnQgQ29sbGFwc2UgZnJvbSBcIi4vTmF2L0NvbGxhcHNlXCJcclxuaW1wb3J0IFNjcm9sbGluZyBmcm9tIFwiLi9OYXYvU2Nyb2xsaW5nXCJcclxuXHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogTW9kdWxlXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBCbHVyLFxyXG4gIENvbGxhcHNlLFxyXG4gIFNjcm9sbGluZ1xyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hc3NldHMvamF2YXNjcmlwdHMvY29tcG9uZW50cy9NYXRlcmlhbC9OYXYuanMiLCIvKlxyXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYtMjAxOCBNYXJ0aW4gRG9uYXRoIDxtYXJ0aW4uZG9uYXRoQHNxdWlkZnVuay5jb20+XHJcbiAqXHJcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcclxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG9cclxuICogZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGVcclxuICogcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yXHJcbiAqIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXHJcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XHJcbiAqXHJcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXHJcbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxyXG4gKlxyXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXHJcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxyXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OLUlORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXHJcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcclxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkdcclxuICogRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HU1xyXG4gKiBJTiBUSEUgU09GVFdBUkUuXHJcbiAqL1xyXG5cclxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiBDbGFzc1xyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCbHVyIHtcclxuXHJcbiAgLyoqXHJcbiAgICogQmx1ciBsaW5rcyB3aXRoaW4gdGhlIHRhYmxlIG9mIGNvbnRlbnRzIGFib3ZlIGN1cnJlbnQgcGFnZSB5LW9mZnNldFxyXG4gICAqXHJcbiAgICogQGNvbnN0cnVjdG9yXHJcbiAgICpcclxuICAgKiBAcHJvcGVydHkge05vZGVMaXN0PEhUTUxFbGVtZW50Pn0gZWxzXyAtIFRhYmxlIG9mIGNvbnRlbnRzIGxpbmtzXHJcbiAgICogQHByb3BlcnR5IHtBcnJheTxIVE1MRWxlbWVudD59IGFuY2hvcnNfIC0gUmVmZXJlbmNlZCBhbmNob3Igbm9kZXNcclxuICAgKiBAcHJvcGVydHkge251bWJlcn0gaW5kZXhfIC0gQ3VycmVudCBsaW5rIGluZGV4XHJcbiAgICogQHByb3BlcnR5IHtudW1iZXJ9IG9mZnNldF8gLSBDdXJyZW50IHBhZ2UgeS1vZmZzZXRcclxuICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IGRpcl8gLSBTY3JvbGwgZGlyZWN0aW9uIGNoYW5nZVxyXG4gICAqXHJcbiAgICogQHBhcmFtIHsoc3RyaW5nfE5vZGVMaXN0PEhUTUxFbGVtZW50Pil9IGVscyAtIFNlbGVjdG9yIG9yIEhUTUwgZWxlbWVudHNcclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcihlbHMpIHtcclxuICAgIHRoaXMuZWxzXyA9ICh0eXBlb2YgZWxzID09PSBcInN0cmluZ1wiKVxyXG4gICAgICA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoZWxzKVxyXG4gICAgICA6IGVsc1xyXG5cclxuICAgIC8qIEluaXRpYWxpemUgaW5kZXggYW5kIHBhZ2UgeS1vZmZzZXQgKi9cclxuICAgIHRoaXMuaW5kZXhfID0gMFxyXG4gICAgdGhpcy5vZmZzZXRfID0gd2luZG93LnBhZ2VZT2Zmc2V0XHJcblxyXG4gICAgLyogTmVjZXNzYXJ5IHN0YXRlIHRvIGNvcnJlY3RseSByZXNldCB0aGUgaW5kZXggKi9cclxuICAgIHRoaXMuZGlyXyA9IGZhbHNlXHJcblxyXG4gICAgLyogSW5kZXggYW5jaG9yIG5vZGUgb2Zmc2V0cyBmb3IgZmFzdCBsb29rdXAgKi9cclxuICAgIHRoaXMuYW5jaG9yc18gPSBbXS5yZWR1Y2UuY2FsbCh0aGlzLmVsc18sIChhbmNob3JzLCBlbCkgPT4ge1xyXG4gICAgICByZXR1cm4gYW5jaG9ycy5jb25jYXQoXHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWwuaGFzaC5zdWJzdHJpbmcoMSkpIHx8IFtdKVxyXG4gICAgfSwgW10pXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBJbml0aWFsaXplIGJsdXIgc3RhdGVzXHJcbiAgICovXHJcbiAgc2V0dXAoKSB7XHJcbiAgICB0aGlzLnVwZGF0ZSgpXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBVcGRhdGUgYmx1ciBzdGF0ZXNcclxuICAgKlxyXG4gICAqIERlZHVjdCB0aGUgc3RhdGljIG9mZnNldCBvZiB0aGUgaGVhZGVyICg1NnB4KSBhbmQgc2lkZWJhciBvZmZzZXQgKDI0cHgpLFxyXG4gICAqIHNlZSBfcGVybWFsaW5rcy5zY3NzIGZvciBtb3JlIGluZm9ybWF0aW9uLlxyXG4gICAqL1xyXG4gIHVwZGF0ZSgpIHtcclxuICAgIGNvbnN0IG9mZnNldCA9IHdpbmRvdy5wYWdlWU9mZnNldFxyXG4gICAgY29uc3QgZGlyID0gdGhpcy5vZmZzZXRfIC0gb2Zmc2V0IDwgMFxyXG5cclxuICAgIC8qIEhhY2s6IHJlc2V0IGluZGV4IGlmIGRpcmVjdGlvbiBjaGFuZ2VkIHRvIGNhdGNoIHZlcnkgZmFzdCBzY3JvbGxpbmcsXHJcbiAgICAgICBiZWNhdXNlIG90aGVyd2lzZSB3ZSB3b3VsZCBoYXZlIHRvIHJlZ2lzdGVyIGEgdGltZXIgYW5kIHRoYXQgc3Vja3MgKi9cclxuICAgIGlmICh0aGlzLmRpcl8gIT09IGRpcilcclxuICAgICAgdGhpcy5pbmRleF8gPSBkaXJcclxuICAgICAgICA/IHRoaXMuaW5kZXhfID0gMFxyXG4gICAgICAgIDogdGhpcy5pbmRleF8gPSB0aGlzLmVsc18ubGVuZ3RoIC0gMVxyXG5cclxuICAgIC8qIEV4aXQgd2hlbiB0aGVyZSBhcmUgbm8gYW5jaG9ycyAqL1xyXG4gICAgaWYgKHRoaXMuYW5jaG9yc18ubGVuZ3RoID09PSAwKVxyXG4gICAgICByZXR1cm5cclxuXHJcbiAgICAvKiBTY3JvbGwgZGlyZWN0aW9uIGlzIGRvd24gKi9cclxuICAgIGlmICh0aGlzLm9mZnNldF8gPD0gb2Zmc2V0KSB7XHJcbiAgICAgIGZvciAobGV0IGkgPSB0aGlzLmluZGV4XyArIDE7IGkgPCB0aGlzLmVsc18ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAodGhpcy5hbmNob3JzX1tpXS5vZmZzZXRUb3AgLSAoNTYgKyAyNCkgPD0gb2Zmc2V0KSB7XHJcbiAgICAgICAgICBpZiAoaSA+IDApXHJcbiAgICAgICAgICAgIHRoaXMuZWxzX1tpIC0gMV0uZGF0YXNldC5tZFN0YXRlID0gXCJibHVyXCJcclxuICAgICAgICAgIHRoaXMuaW5kZXhfID0gaVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBicmVha1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgIC8qIFNjcm9sbCBkaXJlY3Rpb24gaXMgdXAgKi9cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGZvciAobGV0IGkgPSB0aGlzLmluZGV4XzsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICBpZiAodGhpcy5hbmNob3JzX1tpXS5vZmZzZXRUb3AgLSAoNTYgKyAyNCkgPiBvZmZzZXQpIHtcclxuICAgICAgICAgIGlmIChpID4gMClcclxuICAgICAgICAgICAgdGhpcy5lbHNfW2kgLSAxXS5kYXRhc2V0Lm1kU3RhdGUgPSBcIlwiXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuaW5kZXhfID0gaVxyXG4gICAgICAgICAgYnJlYWtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKiBSZW1lbWJlciBjdXJyZW50IG9mZnNldCBhbmQgZGlyZWN0aW9uIGZvciBuZXh0IGl0ZXJhdGlvbiAqL1xyXG4gICAgdGhpcy5vZmZzZXRfID0gb2Zmc2V0XHJcbiAgICB0aGlzLmRpcl8gPSBkaXJcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlc2V0IGJsdXIgc3RhdGVzXHJcbiAgICovXHJcbiAgcmVzZXQoKSB7XHJcbiAgICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKHRoaXMuZWxzXywgZWwgPT4ge1xyXG4gICAgICBlbC5kYXRhc2V0Lm1kU3RhdGUgPSBcIlwiXHJcbiAgICB9KVxyXG5cclxuICAgIC8qIFJlc2V0IGluZGV4IGFuZCBwYWdlIHktb2Zmc2V0ICovXHJcbiAgICB0aGlzLmluZGV4XyAgPSAwXHJcbiAgICB0aGlzLm9mZnNldF8gPSB3aW5kb3cucGFnZVlPZmZzZXRcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Fzc2V0cy9qYXZhc2NyaXB0cy9jb21wb25lbnRzL01hdGVyaWFsL05hdi9CbHVyLmpzIiwiLypcclxuICogQ29weXJpZ2h0IChjKSAyMDE2LTIwMTggTWFydGluIERvbmF0aCA8bWFydGluLmRvbmF0aEBzcXVpZGZ1bmsuY29tPlxyXG4gKlxyXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XHJcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvXHJcbiAqIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlXHJcbiAqIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vclxyXG4gKiBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xyXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxyXG4gKlxyXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxyXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cclxuICpcclxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxyXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcclxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTi1JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxyXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXHJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HXHJcbiAqIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1NcclxuICogSU4gVEhFIFNPRlRXQVJFLlxyXG4gKi9cclxuXHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogQ2xhc3NcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29sbGFwc2Uge1xyXG5cclxuICAvKipcclxuICAgKiBFeHBhbmQgb3IgY29sbGFwc2UgbmF2aWdhdGlvbiBvbiB0b2dnbGVcclxuICAgKlxyXG4gICAqIEBjb25zdHJ1Y3RvclxyXG4gICAqXHJcbiAgICogQHByb3BlcnR5IHtIVE1MRWxlbWVudH0gZWxfIC0gTmF2aWdhdGlvbiBsaXN0XHJcbiAgICpcclxuICAgKiBAcGFyYW0geyhzdHJpbmd8SFRNTEVsZW1lbnQpfSBlbCAtIFNlbGVjdG9yIG9yIEhUTUwgZWxlbWVudFxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKGVsKSB7XHJcbiAgICBjb25zdCByZWYgPSAodHlwZW9mIGVsID09PSBcInN0cmluZ1wiKVxyXG4gICAgICA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZWwpXHJcbiAgICAgIDogZWxcclxuICAgIGlmICghKHJlZiBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSlcclxuICAgICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yXHJcbiAgICB0aGlzLmVsXyA9IHJlZlxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogSW5pdGlhbGl6ZSBvdmVyZmxvdyBhbmQgZGlzcGxheSBmb3IgYWNjZXNzaWJpbGl0eVxyXG4gICAqL1xyXG4gIHNldHVwKCkge1xyXG4gICAgY29uc3QgY3VycmVudCA9IHRoaXMuZWxfLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodFxyXG5cclxuICAgIC8qIEhpZGRlbiBsaW5rcyBzaG91bGQgbm90IGJlIGZvY3VzYWJsZSwgc28gaGlkZSB0aGVtIHdoZW4gdGhlIG5hdmlnYXRpb25cclxuICAgICAgIGlzIGNvbGxhcHNlZCBhbmQgc2V0IG92ZXJmbG93IHNvIHRoZSBvdXRsaW5lIGlzIG5vdCBjdXQgb2ZmICovXHJcbiAgICB0aGlzLmVsXy5zdHlsZS5kaXNwbGF5ICA9IGN1cnJlbnQgPyBcImJsb2NrXCIgICA6IFwibm9uZVwiXHJcbiAgICB0aGlzLmVsXy5zdHlsZS5vdmVyZmxvdyA9IGN1cnJlbnQgPyBcInZpc2libGVcIiA6IFwiaGlkZGVuXCJcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEFuaW1hdGUgZXhwYW5kIGFuZCBjb2xsYXBzZSBzbW9vdGhseVxyXG4gICAqXHJcbiAgICogSW50ZXJuZXQgRXhwbG9yZXIgMTEgaXMgdmVyeSBzbG93IGF0IHJlY29nbml6aW5nIGNoYW5nZXMgb24gdGhlIGRhdGFzZXRcclxuICAgKiB3aGljaCByZXN1bHRzIGluIHRoZSBtZW51IG5vdCBleHBhbmRpbmcgb3IgY29sbGFwc2luZyBwcm9wZXJseS4gVEhlcmVmb3JlLFxyXG4gICAqIGZvciByZWFzb25zIG9mIGNvbXBhdGliaWxpdHksIHRoZSBhdHRyaWJ1dGUgYWNjZXNzb3JzIGFyZSB1c2VkLlxyXG4gICAqL1xyXG4gIHVwZGF0ZSgpIHtcclxuICAgIGNvbnN0IGN1cnJlbnQgPSB0aGlzLmVsXy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHRcclxuXHJcbiAgICAvKiBSZXNldCBvdmVyZmxvdyB0byBDU1MgZGVmYXVsdHMgKi9cclxuICAgIHRoaXMuZWxfLnN0eWxlLmRpc3BsYXkgID0gXCJibG9ja1wiXHJcbiAgICB0aGlzLmVsXy5zdHlsZS5vdmVyZmxvdyA9IFwiXCJcclxuXHJcbiAgICAvKiBFeHBhbmRlZCwgc28gY29sbGFwc2UgKi9cclxuICAgIGlmIChjdXJyZW50KSB7XHJcbiAgICAgIHRoaXMuZWxfLnN0eWxlLm1heEhlaWdodCA9IGAke2N1cnJlbnR9cHhgXHJcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5lbF8uc2V0QXR0cmlidXRlKFwiZGF0YS1tZC1zdGF0ZVwiLCBcImFuaW1hdGVcIilcclxuICAgICAgICB0aGlzLmVsXy5zdHlsZS5tYXhIZWlnaHQgPSBcIjBweFwiXHJcbiAgICAgIH0pXHJcblxyXG4gICAgLyogQ29sbGFwc2VkLCBzbyBleHBhbmQgKi9cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuZWxfLnNldEF0dHJpYnV0ZShcImRhdGEtbWQtc3RhdGVcIiwgXCJleHBhbmRcIilcclxuICAgICAgdGhpcy5lbF8uc3R5bGUubWF4SGVpZ2h0ID0gXCJcIlxyXG5cclxuICAgICAgLyogUmVhZCBoZWlnaHQgYW5kIHVuc2V0IHBzZXVkby10b2dnbGVkIHN0YXRlICovXHJcbiAgICAgIGNvbnN0IGhlaWdodCA9IHRoaXMuZWxfLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodFxyXG4gICAgICB0aGlzLmVsXy5yZW1vdmVBdHRyaWJ1dGUoXCJkYXRhLW1kLXN0YXRlXCIpXHJcblxyXG4gICAgICAvKiBTZXQgaW5pdGlhbCBzdGF0ZSBhbmQgYW5pbWF0ZSAqL1xyXG4gICAgICB0aGlzLmVsXy5zdHlsZS5tYXhIZWlnaHQgPSBcIjBweFwiXHJcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5lbF8uc2V0QXR0cmlidXRlKFwiZGF0YS1tZC1zdGF0ZVwiLCBcImFuaW1hdGVcIilcclxuICAgICAgICB0aGlzLmVsXy5zdHlsZS5tYXhIZWlnaHQgPSBgJHtoZWlnaHR9cHhgXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLyogUmVtb3ZlIHN0YXRlIG9uIGVuZCBvZiB0cmFuc2l0aW9uICovXHJcbiAgICBjb25zdCBlbmQgPSBldiA9PiB7XHJcbiAgICAgIGNvbnN0IHRhcmdldCA9IGV2LnRhcmdldFxyXG4gICAgICBpZiAoISh0YXJnZXQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpXHJcbiAgICAgICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yXHJcblxyXG4gICAgICAvKiBSZXNldCBoZWlnaHQgYW5kIHN0YXRlICovXHJcbiAgICAgIHRhcmdldC5yZW1vdmVBdHRyaWJ1dGUoXCJkYXRhLW1kLXN0YXRlXCIpXHJcbiAgICAgIHRhcmdldC5zdHlsZS5tYXhIZWlnaHQgPSBcIlwiXHJcblxyXG4gICAgICAvKiBIaWRkZW4gbGlua3Mgc2hvdWxkIG5vdCBiZSBmb2N1c2FibGUsIHNvIGhpZGUgdGhlbSB3aGVuIHRoZSBuYXZpZ2F0aW9uXHJcbiAgICAgICAgIGlzIGNvbGxhcHNlZCBhbmQgc2V0IG92ZXJmbG93IHNvIHRoZSBvdXRsaW5lIGlzIG5vdCBjdXQgb2ZmICovXHJcbiAgICAgIHRhcmdldC5zdHlsZS5kaXNwbGF5ICA9IGN1cnJlbnQgPyBcIm5vbmVcIiAgIDogXCJibG9ja1wiXHJcbiAgICAgIHRhcmdldC5zdHlsZS5vdmVyZmxvdyA9IGN1cnJlbnQgPyBcImhpZGRlblwiIDogXCJ2aXNpYmxlXCJcclxuXHJcbiAgICAgIC8qIE9ubHkgZmlyZSBvbmNlLCBzbyBkaXJlY3RseSByZW1vdmUgZXZlbnQgbGlzdGVuZXIgKi9cclxuICAgICAgdGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0cmFuc2l0aW9uZW5kXCIsIGVuZClcclxuICAgIH1cclxuICAgIHRoaXMuZWxfLmFkZEV2ZW50TGlzdGVuZXIoXCJ0cmFuc2l0aW9uZW5kXCIsIGVuZCwgZmFsc2UpXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXNldCBoZWlnaHQgYW5kIHBzZXVkby10b2dnbGVkIHN0YXRlXHJcbiAgICovXHJcbiAgcmVzZXQoKSB7XHJcbiAgICB0aGlzLmVsXy5kYXRhc2V0Lm1kU3RhdGUgPSBcIlwiXHJcbiAgICB0aGlzLmVsXy5zdHlsZS5tYXhIZWlnaHQgPSBcIlwiXHJcbiAgICB0aGlzLmVsXy5zdHlsZS5kaXNwbGF5ICAgPSBcIlwiXHJcbiAgICB0aGlzLmVsXy5zdHlsZS5vdmVyZmxvdyAgPSBcIlwiXHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hc3NldHMvamF2YXNjcmlwdHMvY29tcG9uZW50cy9NYXRlcmlhbC9OYXYvQ29sbGFwc2UuanMiLCIvKlxyXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYtMjAxOCBNYXJ0aW4gRG9uYXRoIDxtYXJ0aW4uZG9uYXRoQHNxdWlkZnVuay5jb20+XHJcbiAqXHJcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcclxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG9cclxuICogZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGVcclxuICogcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yXHJcbiAqIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXHJcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XHJcbiAqXHJcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXHJcbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxyXG4gKlxyXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXHJcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxyXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OLUlORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXHJcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcclxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkdcclxuICogRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HU1xyXG4gKiBJTiBUSEUgU09GVFdBUkUuXHJcbiAqL1xyXG5cclxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiBDbGFzc1xyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY3JvbGxpbmcge1xyXG5cclxuICAvKipcclxuICAgKiBTZXQgb3ZlcmZsb3cgc2Nyb2xsaW5nIG9uIHRoZSBjdXJyZW50IGFjdGl2ZSBwYW5lIChmb3IgaU9TKVxyXG4gICAqXHJcbiAgICogQGNvbnN0cnVjdG9yXHJcbiAgICpcclxuICAgKiBAcHJvcGVydHkge0hUTUxFbGVtZW50fSBlbF8gLSBQcmltYXJ5IG5hdmlnYXRpb25cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7KHN0cmluZ3xIVE1MRWxlbWVudCl9IGVsIC0gU2VsZWN0b3Igb3IgSFRNTCBlbGVtZW50XHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoZWwpIHtcclxuICAgIGNvbnN0IHJlZiA9ICh0eXBlb2YgZWwgPT09IFwic3RyaW5nXCIpXHJcbiAgICAgID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbClcclxuICAgICAgOiBlbFxyXG4gICAgaWYgKCEocmVmIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKVxyXG4gICAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3JcclxuICAgIHRoaXMuZWxfID0gcmVmXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTZXR1cCBwYW5lc1xyXG4gICAqL1xyXG4gIHNldHVwKCkge1xyXG5cclxuICAgIC8qIEluaXRpYWxseSBzZXQgb3ZlcmZsb3cgc2Nyb2xsaW5nIG9uIG1haW4gcGFuZSAqL1xyXG4gICAgY29uc3QgbWFpbiA9IHRoaXMuZWxfLmNoaWxkcmVuW3RoaXMuZWxfLmNoaWxkcmVuLmxlbmd0aCAtIDFdXHJcbiAgICBtYWluLnN0eWxlLndlYmtpdE92ZXJmbG93U2Nyb2xsaW5nID0gXCJ0b3VjaFwiXHJcblxyXG4gICAgLyogRmluZCBhbGwgdG9nZ2xlcyBhbmQgY2hlY2sgd2hpY2ggb25lIGlzIGFjdGl2ZSAqL1xyXG4gICAgY29uc3QgdG9nZ2xlcyA9IHRoaXMuZWxfLnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS1tZC10b2dnbGVdXCIpXHJcbiAgICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKHRvZ2dsZXMsIHRvZ2dsZSA9PiB7XHJcbiAgICAgIGlmICghKHRvZ2dsZSBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQpKVxyXG4gICAgICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvclxyXG4gICAgICBpZiAodG9nZ2xlLmNoZWNrZWQpIHtcclxuXHJcbiAgICAgICAgLyogRmluZCBjb3JyZXNwb25kaW5nIG5hdmlnYXRpb25hbCBwYW5lICovXHJcbiAgICAgICAgbGV0IHBhbmUgPSB0b2dnbGUubmV4dEVsZW1lbnRTaWJsaW5nXHJcbiAgICAgICAgaWYgKCEocGFuZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSlcclxuICAgICAgICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvclxyXG4gICAgICAgIHdoaWxlIChwYW5lLnRhZ05hbWUgIT09IFwiTkFWXCIgJiYgcGFuZS5uZXh0RWxlbWVudFNpYmxpbmcpXHJcbiAgICAgICAgICBwYW5lID0gcGFuZS5uZXh0RWxlbWVudFNpYmxpbmdcclxuXHJcbiAgICAgICAgLyogQ2hlY2sgcmVmZXJlbmNlcyAqL1xyXG4gICAgICAgIGlmICghKHRvZ2dsZS5wYXJlbnROb2RlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHx8XHJcbiAgICAgICAgICAgICEodG9nZ2xlLnBhcmVudE5vZGUucGFyZW50Tm9kZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSlcclxuICAgICAgICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvclxyXG5cclxuICAgICAgICAvKiBGaW5kIGN1cnJlbnQgYW5kIHBhcmVudCBsaXN0IGVsZW1lbnRzICovXHJcbiAgICAgICAgY29uc3QgcGFyZW50ID0gdG9nZ2xlLnBhcmVudE5vZGUucGFyZW50Tm9kZVxyXG4gICAgICAgIGNvbnN0IHRhcmdldCA9IHBhbmUuY2hpbGRyZW5bcGFuZS5jaGlsZHJlbi5sZW5ndGggLSAxXVxyXG5cclxuICAgICAgICAvKiBBbHdheXMgcmVzZXQgYWxsIGxpc3RzIHdoZW4gdHJhbnNpdGlvbmluZyAqL1xyXG4gICAgICAgIHBhcmVudC5zdHlsZS53ZWJraXRPdmVyZmxvd1Njcm9sbGluZyA9IFwiXCJcclxuICAgICAgICB0YXJnZXQuc3R5bGUud2Via2l0T3ZlcmZsb3dTY3JvbGxpbmcgPSBcInRvdWNoXCJcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFVwZGF0ZSBhY3RpdmUgcGFuZXNcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7RXZlbnR9IGV2IC0gQ2hhbmdlIGV2ZW50XHJcbiAgICovXHJcbiAgdXBkYXRlKGV2KSB7XHJcbiAgICBjb25zdCB0YXJnZXQgPSBldi50YXJnZXRcclxuICAgIGlmICghKHRhcmdldCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSlcclxuICAgICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yXHJcblxyXG4gICAgLyogRmluZCBjb3JyZXNwb25kaW5nIG5hdmlnYXRpb25hbCBwYW5lICovXHJcbiAgICBsZXQgcGFuZSA9IHRhcmdldC5uZXh0RWxlbWVudFNpYmxpbmdcclxuICAgIGlmICghKHBhbmUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpXHJcbiAgICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvclxyXG4gICAgd2hpbGUgKHBhbmUudGFnTmFtZSAhPT0gXCJOQVZcIiAmJiBwYW5lLm5leHRFbGVtZW50U2libGluZylcclxuICAgICAgcGFuZSA9IHBhbmUubmV4dEVsZW1lbnRTaWJsaW5nXHJcblxyXG4gICAgLyogQ2hlY2sgcmVmZXJlbmNlcyAqL1xyXG4gICAgaWYgKCEodGFyZ2V0LnBhcmVudE5vZGUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkgfHxcclxuICAgICAgICAhKHRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpXHJcbiAgICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvclxyXG5cclxuICAgIC8qIEZpbmQgcGFyZW50IGFuZCBhY3RpdmUgcGFuZXMgKi9cclxuICAgIGNvbnN0IHBhcmVudCA9IHRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGVcclxuICAgIGNvbnN0IGFjdGl2ZSA9IHBhbmUuY2hpbGRyZW5bcGFuZS5jaGlsZHJlbi5sZW5ndGggLSAxXVxyXG5cclxuICAgIC8qIEFsd2F5cyByZXNldCBhbGwgbGlzdHMgd2hlbiB0cmFuc2l0aW9uaW5nICovXHJcbiAgICBwYXJlbnQuc3R5bGUud2Via2l0T3ZlcmZsb3dTY3JvbGxpbmcgPSBcIlwiXHJcbiAgICBhY3RpdmUuc3R5bGUud2Via2l0T3ZlcmZsb3dTY3JvbGxpbmcgPSBcIlwiXHJcblxyXG4gICAgLyogU2V0IG92ZXJmbG93IHNjcm9sbGluZyBvbiBwYXJlbnQgcGFuZSAqL1xyXG4gICAgaWYgKCF0YXJnZXQuY2hlY2tlZCkge1xyXG4gICAgICBjb25zdCBlbmQgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHBhbmUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xyXG4gICAgICAgICAgcGFyZW50LnN0eWxlLndlYmtpdE92ZXJmbG93U2Nyb2xsaW5nID0gXCJ0b3VjaFwiXHJcbiAgICAgICAgICBwYW5lLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0cmFuc2l0aW9uZW5kXCIsIGVuZClcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgcGFuZS5hZGRFdmVudExpc3RlbmVyKFwidHJhbnNpdGlvbmVuZFwiLCBlbmQsIGZhbHNlKVxyXG4gICAgfVxyXG5cclxuICAgIC8qIFNldCBvdmVyZmxvdyBzY3JvbGxpbmcgb24gYWN0aXZlIHBhbmUgKi9cclxuICAgIGlmICh0YXJnZXQuY2hlY2tlZCkge1xyXG4gICAgICBjb25zdCBlbmQgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHBhbmUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xyXG4gICAgICAgICAgYWN0aXZlLnN0eWxlLndlYmtpdE92ZXJmbG93U2Nyb2xsaW5nID0gXCJ0b3VjaFwiXHJcbiAgICAgICAgICBwYW5lLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0cmFuc2l0aW9uZW5kXCIsIGVuZClcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgcGFuZS5hZGRFdmVudExpc3RlbmVyKFwidHJhbnNpdGlvbmVuZFwiLCBlbmQsIGZhbHNlKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmVzZXQgcGFuZXNcclxuICAgKi9cclxuICByZXNldCgpIHtcclxuXHJcbiAgICAvKiBSZXNldCBvdmVyZmxvdyBzY3JvbGxpbmcgb24gbWFpbiBwYW5lICovXHJcbiAgICB0aGlzLmVsXy5jaGlsZHJlblsxXS5zdHlsZS53ZWJraXRPdmVyZmxvd1Njcm9sbGluZyA9IFwiXCJcclxuXHJcbiAgICAvKiBGaW5kIGFsbCB0b2dnbGVzIGFuZCBjaGVjayB3aGljaCBvbmUgaXMgYWN0aXZlICovXHJcbiAgICBjb25zdCB0b2dnbGVzID0gdGhpcy5lbF8ucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLW1kLXRvZ2dsZV1cIilcclxuICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwodG9nZ2xlcywgdG9nZ2xlID0+IHtcclxuICAgICAgaWYgKCEodG9nZ2xlIGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCkpXHJcbiAgICAgICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yXHJcbiAgICAgIGlmICh0b2dnbGUuY2hlY2tlZCkge1xyXG5cclxuICAgICAgICAvKiBGaW5kIGNvcnJlc3BvbmRpbmcgbmF2aWdhdGlvbmFsIHBhbmUgKi9cclxuICAgICAgICBsZXQgcGFuZSA9IHRvZ2dsZS5uZXh0RWxlbWVudFNpYmxpbmdcclxuICAgICAgICBpZiAoIShwYW5lIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKVxyXG4gICAgICAgICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yXHJcbiAgICAgICAgd2hpbGUgKHBhbmUudGFnTmFtZSAhPT0gXCJOQVZcIiAmJiBwYW5lLm5leHRFbGVtZW50U2libGluZylcclxuICAgICAgICAgIHBhbmUgPSBwYW5lLm5leHRFbGVtZW50U2libGluZ1xyXG5cclxuICAgICAgICAvKiBDaGVjayByZWZlcmVuY2VzICovXHJcbiAgICAgICAgaWYgKCEodG9nZ2xlLnBhcmVudE5vZGUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkgfHxcclxuICAgICAgICAgICAgISh0b2dnbGUucGFyZW50Tm9kZS5wYXJlbnROb2RlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKVxyXG4gICAgICAgICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yXHJcblxyXG4gICAgICAgIC8qIEZpbmQgcGFyZW50IGFuZCBhY3RpdmUgcGFuZXMgKi9cclxuICAgICAgICBjb25zdCBwYXJlbnQgPSB0b2dnbGUucGFyZW50Tm9kZS5wYXJlbnROb2RlXHJcbiAgICAgICAgY29uc3QgYWN0aXZlID0gcGFuZS5jaGlsZHJlbltwYW5lLmNoaWxkcmVuLmxlbmd0aCAtIDFdXHJcblxyXG4gICAgICAgIC8qIEFsd2F5cyByZXNldCBhbGwgbGlzdHMgd2hlbiB0cmFuc2l0aW9uaW5nICovXHJcbiAgICAgICAgcGFyZW50LnN0eWxlLndlYmtpdE92ZXJmbG93U2Nyb2xsaW5nID0gXCJcIlxyXG4gICAgICAgIGFjdGl2ZS5zdHlsZS53ZWJraXRPdmVyZmxvd1Njcm9sbGluZyA9IFwiXCJcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Fzc2V0cy9qYXZhc2NyaXB0cy9jb21wb25lbnRzL01hdGVyaWFsL05hdi9TY3JvbGxpbmcuanMiLCIvKlxyXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYtMjAxOCBNYXJ0aW4gRG9uYXRoIDxtYXJ0aW4uZG9uYXRoQHNxdWlkZnVuay5jb20+XHJcbiAqXHJcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcclxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG9cclxuICogZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGVcclxuICogcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yXHJcbiAqIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXHJcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XHJcbiAqXHJcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXHJcbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxyXG4gKlxyXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXHJcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxyXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OLUlORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXHJcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcclxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkdcclxuICogRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HU1xyXG4gKiBJTiBUSEUgU09GVFdBUkUuXHJcbiAqL1xyXG5cclxuaW1wb3J0IExvY2sgZnJvbSBcIi4vU2VhcmNoL0xvY2tcIlxyXG5pbXBvcnQgUmVzdWx0IGZyb20gXCIuL1NlYXJjaC9SZXN1bHRcIlxyXG5cclxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiBNb2R1bGVcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIExvY2ssXHJcbiAgUmVzdWx0XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Fzc2V0cy9qYXZhc2NyaXB0cy9jb21wb25lbnRzL01hdGVyaWFsL1NlYXJjaC5qcyIsIi8qXHJcbiAqIENvcHlyaWdodCAoYykgMjAxNi0yMDE4IE1hcnRpbiBEb25hdGggPG1hcnRpbi5kb25hdGhAc3F1aWRmdW5rLmNvbT5cclxuICpcclxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxyXG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0b1xyXG4gKiBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZVxyXG4gKiByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3JcclxuICogc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcclxuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcclxuICpcclxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cclxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcbiAqXHJcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcclxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXHJcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT04tSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcclxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxyXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lOR1xyXG4gKiBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTXHJcbiAqIElOIFRIRSBTT0ZUV0FSRS5cclxuICovXHJcblxyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqIENsYXNzXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvY2sge1xyXG5cclxuICAvKipcclxuICAgKiBMb2NrIGJvZHkgZm9yIGZ1bGwtc2NyZWVuIHNlYXJjaCBtb2RhbFxyXG4gICAqXHJcbiAgICogQGNvbnN0cnVjdG9yXHJcbiAgICpcclxuICAgKiBAcHJvcGVydHkge0hUTUxJbnB1dEVsZW1lbnR9IGVsXyAtIExvY2sgdG9nZ2xlXHJcbiAgICogQHByb3BlcnR5IHtIVE1MRWxlbWVudH0gbG9ja18gLSBFbGVtZW50IHRvIGxvY2sgKGRvY3VtZW50IGJvZHkpXHJcbiAgICogQHByb3BlcnR5IHtudW1iZXJ9IG9mZnNldF8gLSBDdXJyZW50IHBhZ2UgeS1vZmZzZXRcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7KHN0cmluZ3xIVE1MRWxlbWVudCl9IGVsIC0gU2VsZWN0b3Igb3IgSFRNTCBlbGVtZW50XHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoZWwpIHtcclxuICAgIGNvbnN0IHJlZiA9ICh0eXBlb2YgZWwgPT09IFwic3RyaW5nXCIpXHJcbiAgICAgID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbClcclxuICAgICAgOiBlbFxyXG4gICAgaWYgKCEocmVmIGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCkpXHJcbiAgICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvclxyXG4gICAgdGhpcy5lbF8gPSByZWZcclxuXHJcbiAgICAvKiBSZXRyaWV2ZSBlbGVtZW50IHRvIGxvY2sgKD0gYm9keSkgKi9cclxuICAgIGlmICghZG9jdW1lbnQuYm9keSlcclxuICAgICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yXHJcbiAgICB0aGlzLmxvY2tfID0gZG9jdW1lbnQuYm9keVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2V0dXAgbG9ja2VkIHN0YXRlXHJcbiAgICovXHJcbiAgc2V0dXAoKSB7XHJcbiAgICB0aGlzLnVwZGF0ZSgpXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBVcGRhdGUgbG9ja2VkIHN0YXRlXHJcbiAgICovXHJcbiAgdXBkYXRlKCkge1xyXG5cclxuICAgIC8qIEVudGVyaW5nIHNlYXJjaCBtb2RlICovXHJcbiAgICBpZiAodGhpcy5lbF8uY2hlY2tlZCkge1xyXG4gICAgICB0aGlzLm9mZnNldF8gPSB3aW5kb3cucGFnZVlPZmZzZXRcclxuXHJcbiAgICAgIC8qIFNjcm9sbCB0byB0b3AgYWZ0ZXIgdHJhbnNpdGlvbiwgdG8gb21pdCBmbGlja2VyaW5nICovXHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxyXG5cclxuICAgICAgICAvKiBMb2NrIGJvZHkgYWZ0ZXIgZmluaXNoaW5nIHRyYW5zaXRpb24gKi9cclxuICAgICAgICBpZiAodGhpcy5lbF8uY2hlY2tlZCkge1xyXG4gICAgICAgICAgdGhpcy5sb2NrXy5kYXRhc2V0Lm1kU3RhdGUgPSBcImxvY2tcIlxyXG4gICAgICAgIH1cclxuICAgICAgfSwgNDAwKVxyXG5cclxuICAgIC8qIEV4aXRpbmcgc2VhcmNoIG1vZGUgKi9cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMubG9ja18uZGF0YXNldC5tZFN0YXRlID0gXCJcIlxyXG5cclxuICAgICAgLyogU2Nyb2xsIHRvIGZvcm1lciBwb3NpdGlvbiwgYnV0IHdhaXQgZm9yIDEwMG1zIHRvIHByZXZlbnQgZmxhc2hlcyBvblxyXG4gICAgICAgICBpT1MuIEEgc2hvcnQgdGltZW91dCBzZWVtcyB0byBkbyB0aGUgdHJpY2sgKi9cclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLm9mZnNldF8gIT09IFwidW5kZWZpbmVkXCIpXHJcbiAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgdGhpcy5vZmZzZXRfKVxyXG4gICAgICB9LCAxMDApXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXNldCBsb2NrZWQgc3RhdGUgYW5kIHBhZ2UgeS1vZmZzZXRcclxuICAgKi9cclxuICByZXNldCgpIHtcclxuICAgIGlmICh0aGlzLmxvY2tfLmRhdGFzZXQubWRTdGF0ZSA9PT0gXCJsb2NrXCIpXHJcbiAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCB0aGlzLm9mZnNldF8pXHJcbiAgICB0aGlzLmxvY2tfLmRhdGFzZXQubWRTdGF0ZSA9IFwiXCJcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Fzc2V0cy9qYXZhc2NyaXB0cy9jb21wb25lbnRzL01hdGVyaWFsL1NlYXJjaC9Mb2NrLmpzIiwiLypcclxuICogQ29weXJpZ2h0IChjKSAyMDE2LTIwMTggTWFydGluIERvbmF0aCA8bWFydGluLmRvbmF0aEBzcXVpZGZ1bmsuY29tPlxyXG4gKlxyXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XHJcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvXHJcbiAqIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlXHJcbiAqIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vclxyXG4gKiBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xyXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxyXG4gKlxyXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxyXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cclxuICpcclxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxyXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcclxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTi1JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxyXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXHJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HXHJcbiAqIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1NcclxuICogSU4gVEhFIFNPRlRXQVJFLlxyXG4gKi9cclxuXHJcbmltcG9ydCBlc2NhcGUgZnJvbSBcImVzY2FwZS1zdHJpbmctcmVnZXhwXCJcclxuaW1wb3J0IGx1bnIgZnJvbSBcImV4cG9zZS1sb2FkZXI/bHVuciFsdW5yXCJcclxuXHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogRnVuY3Rpb25zXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuXHJcbi8qKlxyXG4gKiBFc2NhcGUgSFRNTCBzdHJpbmdzXHJcbiAqXHJcbiAqIERvY3VtZW50YXRpb24gbWF5IGNvbnRhaW4gY29kZSBKYXZhU2NyaXB0IGNvZGUgc25pcHBldHMgd2hpY2ggd291bGQgZ2V0XHJcbiAqIGV4ZWN1dGVkIHdoZW4gaW5zZXJ0ZWQgaW50byB0aGUgRE9NIGFzIHBsYWluIEhUTUwuXHJcbiAqXHJcbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vc3F1aWRmdW5rL21rZG9jcy1tYXRlcmlhbC9pc3N1ZXMvOTA2XHJcbiAqXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBodG1sIC0gSFRNTCBzdHJpbmdcclxuICpcclxuICogQHJldHVybiB7c3RyaW5nfSBFc2NhcGVkIEhUTUwgc3RyaW5nXHJcbiAqL1xyXG5jb25zdCBlc2NhcGVIVE1MID0gaHRtbCA9PiB7XHJcbiAgdmFyIHRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShodG1sKTtcclxuICB2YXIgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICBwLmFwcGVuZENoaWxkKHRleHQpO1xyXG4gIHJldHVybiBwLmlubmVySFRNTDtcclxufVxyXG5cclxuLyoqXHJcbiAqIFRydW5jYXRlIGEgc3RyaW5nIGFmdGVyIHRoZSBnaXZlbiBudW1iZXIgb2YgY2hhcmFjdGVyXHJcbiAqXHJcbiAqIFRoaXMgaXMgbm90IGEgcmVhc29uYWJsZSBhcHByb2FjaCwgc2luY2UgdGhlIHN1bW1hcmllcyBraW5kIG9mIHN1Y2suIEl0XHJcbiAqIHdvdWxkIGJlIGJldHRlciB0byBjcmVhdGUgc29tZXRoaW5nIG1vcmUgaW50ZWxsaWdlbnQsIGhpZ2hsaWdodGluZyB0aGVcclxuICogc2VhcmNoIG9jY3VycmVuY2VzIGFuZCBtYWtpbmcgYSBiZXR0ZXIgc3VtbWFyeSBvdXQgb2YgaXQuXHJcbiAqXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmcgLSBTdHJpbmcgdG8gYmUgdHJ1bmNhdGVkXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBuIC0gTnVtYmVyIG9mIGNoYXJhY3RlcnNcclxuICogQHJldHVybiB7c3RyaW5nfSBUcnVuY2F0ZWQgc3RyaW5nXHJcbiAqL1xyXG5jb25zdCB0cnVuY2F0ZSA9IChzdHJpbmcsIG4pID0+IHtcclxuICBsZXQgaSA9IG5cclxuICBpZiAoc3RyaW5nLmxlbmd0aCA+IGkpIHtcclxuICAgIHdoaWxlIChzdHJpbmdbaV0gIT09IFwiIFwiICYmIC0taSA+IDApO1xyXG4gICAgcmV0dXJuIGAke3N0cmluZy5zdWJzdHJpbmcoMCwgaSl9Li4uYFxyXG4gIH1cclxuICByZXR1cm4gc3RyaW5nXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm4gdGhlIG1ldGEgdGFnIHZhbHVlIGZvciB0aGUgZ2l2ZW4ga2V5XHJcbiAqXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgLSBNZXRhIG5hbWVcclxuICpcclxuICogQHJldHVybiB7c3RyaW5nfSBNZXRhIGNvbnRlbnQgdmFsdWVcclxuICovXHJcbmNvbnN0IHRyYW5zbGF0ZSA9IGtleSA9PiB7XHJcbiAgY29uc3QgbWV0YSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGBsYW5nOiR7a2V5fWApWzBdXHJcbiAgaWYgKCEobWV0YSBpbnN0YW5jZW9mIEhUTUxNZXRhRWxlbWVudCkpXHJcbiAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3JcclxuICByZXR1cm4gbWV0YS5jb250ZW50XHJcbn1cclxuXHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogQ2xhc3NcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVzdWx0IHtcclxuXHJcbiAgLyoqXHJcbiAgICogUGVyZm9ybSBzZWFyY2ggYW5kIHVwZGF0ZSByZXN1bHRzIG9uIGtleWJvYXJkIGV2ZW50c1xyXG4gICAqXHJcbiAgICogQGNvbnN0cnVjdG9yXHJcbiAgICpcclxuICAgKiBAcHJvcGVydHkge0hUTUxFbGVtZW50fSBlbF8gLSBTZWFyY2ggcmVzdWx0IGNvbnRhaW5lclxyXG4gICAqIEBwcm9wZXJ0eSB7KEFycmF5PE9iamVjdD58RnVuY3Rpb24pfSBkYXRhXyAtIFJhdyBkb2N1bWVudCBkYXRhXHJcbiAgICogQHByb3BlcnR5IHtPYmplY3R9IGRvY3NfIC0gSW5kZXhlZCBkb2N1bWVudHNcclxuICAgKiBAcHJvcGVydHkge0hUTUxFbGVtZW50fSBtZXRhXyAtIFNlYXJjaCBtZXRhIGluZm9ybWF0aW9uXHJcbiAgICogQHByb3BlcnR5IHtIVE1MRWxlbWVudH0gbGlzdF8gLSBTZWFyY2ggcmVzdWx0IGxpc3RcclxuICAgKiBAcHJvcGVydHkge0FycmF5PHN0cmluZz59IGxhbmdfIC0gU2VhcmNoIGxhbmd1YWdlc1xyXG4gICAqIEBwcm9wZXJ0eSB7T2JqZWN0fSBtZXNzYWdlXyAtIFNlYXJjaCByZXN1bHQgbWVzc2FnZXNcclxuICAgKiBAcHJvcGVydHkge09iamVjdH0gaW5kZXhfIC0gU2VhcmNoIGluZGV4XHJcbiAgICogQHByb3BlcnR5IHtBcnJheTxGdW5jdGlvbj59IHN0YWNrXyAtIFNlYXJjaCByZXN1bHQgc3RhY2tcclxuICAgKiBAcHJvcGVydHkge3N0cmluZ30gdmFsdWVfIC0gTGFzdCBpbnB1dCB2YWx1ZVxyXG4gICAqXHJcbiAgICogQHBhcmFtIHsoc3RyaW5nfEhUTUxFbGVtZW50KX0gZWwgLSBTZWxlY3RvciBvciBIVE1MIGVsZW1lbnRcclxuICAgKiBAcGFyYW0geyhBcnJheTxPYmplY3Q+fEZ1bmN0aW9uKX0gZGF0YSAtIEZ1bmN0aW9uIHByb3ZpZGluZyBkYXRhIG9yIGFycmF5XHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoZWwsIGRhdGEpIHtcclxuICAgIGNvbnN0IHJlZiA9ICh0eXBlb2YgZWwgPT09IFwic3RyaW5nXCIpXHJcbiAgICAgID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbClcclxuICAgICAgOiBlbFxyXG4gICAgaWYgKCEocmVmIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKVxyXG4gICAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3JcclxuICAgIHRoaXMuZWxfID0gcmVmXHJcblxyXG4gICAgLyogUmV0cmlldmUgbWV0YWRhdGEgYW5kIGxpc3QgZWxlbWVudCAqL1xyXG4gICAgY29uc3QgW21ldGEsIGxpc3RdID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwodGhpcy5lbF8uY2hpbGRyZW4pXHJcblxyXG4gICAgLyogU2V0IGRhdGEsIG1ldGFkYXRhIGFuZCBsaXN0IGVsZW1lbnRzICovXHJcbiAgICB0aGlzLmRhdGFfID0gZGF0YVxyXG4gICAgdGhpcy5tZXRhXyA9IG1ldGFcclxuICAgIHRoaXMubGlzdF8gPSBsaXN0XHJcblxyXG4gICAgLyogTG9hZCBtZXNzYWdlcyBmb3IgbWV0YWRhdGEgZGlzcGxheSAqL1xyXG4gICAgdGhpcy5tZXNzYWdlXyA9IHtcclxuICAgICAgcGxhY2Vob2xkZXI6IHRoaXMubWV0YV8udGV4dENvbnRlbnQsXHJcbiAgICAgIG5vbmU6IHRyYW5zbGF0ZShcInNlYXJjaC5yZXN1bHQubm9uZVwiKSxcclxuICAgICAgb25lOiB0cmFuc2xhdGUoXCJzZWFyY2gucmVzdWx0Lm9uZVwiKSxcclxuICAgICAgb3RoZXI6IHRyYW5zbGF0ZShcInNlYXJjaC5yZXN1bHQub3RoZXJcIilcclxuICAgIH1cclxuXHJcbiAgICAvKiBPdmVycmlkZSB0b2tlbml6ZXIgc2VwYXJhdG9yLCBpZiBnaXZlbiAqL1xyXG4gICAgY29uc3QgdG9rZW5pemVyID0gdHJhbnNsYXRlKFwic2VhcmNoLnRva2VuaXplclwiKVxyXG4gICAgaWYgKHRva2VuaXplci5sZW5ndGgpXHJcbiAgICAgIGx1bnIudG9rZW5pemVyLnNlcGFyYXRvciA9IHRva2VuaXplclxyXG5cclxuICAgIC8qIExvYWQgc2VhcmNoIGxhbmd1YWdlcyAqL1xyXG4gICAgdGhpcy5sYW5nXyA9IHRyYW5zbGF0ZShcInNlYXJjaC5sYW5ndWFnZVwiKS5zcGxpdChcIixcIilcclxuICAgICAgLmZpbHRlcihCb29sZWFuKVxyXG4gICAgICAubWFwKGxhbmcgPT4gbGFuZy50cmltKCkpXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBVcGRhdGUgc2VhcmNoIHJlc3VsdHNcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7RXZlbnR9IGV2IC0gSW5wdXQgb3IgZm9jdXMgZXZlbnRcclxuICAgKi9cclxuICB1cGRhdGUoZXYpIHtcclxuXHJcbiAgICAvKiBJbml0aWFsaXplIGluZGV4LCBpZiB0aGlzIGhhcyBub3QgYmUgZG9uZSB5ZXQgKi9cclxuICAgIGlmIChldi50eXBlID09PSBcImZvY3VzXCIgJiYgIXRoaXMuaW5kZXhfKSB7XHJcblxyXG4gICAgICAvKiBJbml0aWFsaXplIGluZGV4ICovXHJcbiAgICAgIGNvbnN0IGluaXQgPSBkYXRhID0+IHtcclxuXHJcbiAgICAgICAgLyogUHJlcHJvY2VzcyBhbmQgaW5kZXggc2VjdGlvbnMgYW5kIGRvY3VtZW50cyAqL1xyXG4gICAgICAgIHRoaXMuZG9jc18gPSBkYXRhLnJlZHVjZSgoZG9jcywgZG9jKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBbcGF0aCwgaGFzaF0gPSBkb2MubG9jYXRpb24uc3BsaXQoXCIjXCIpXHJcblxyXG4gICAgICAgICAgLyogRXNjYXBlIEhUTUwgKi9cclxuICAgICAgICAgIGRvYy50aXRsZSA9IGVzY2FwZUhUTUwoZG9jLnRpdGxlKVxyXG4gICAgICAgICAgZG9jLnRleHQgID0gZXNjYXBlSFRNTChkb2MuY29udGVudHMpXHJcblxyXG4gICAgICAgICAgLyogQXNzb2NpYXRlIHNlY3Rpb24gd2l0aCBwYXJlbnQgZG9jdW1lbnQgKi9cclxuICAgICAgICAgIGlmIChoYXNoKSB7XHJcbiAgICAgICAgICAgIGRvYy5wYXJlbnQgPSBkb2NzLmdldChwYXRoKVxyXG5cclxuICAgICAgICAgICAgLyogT3ZlcnJpZGUgcGFnZSB0aXRsZSB3aXRoIGRvY3VtZW50IHRpdGxlIGlmIGZpcnN0IHNlY3Rpb24gKi9cclxuICAgICAgICAgICAgaWYgKGRvYy5wYXJlbnQgJiYgIWRvYy5wYXJlbnQuZG9uZSkge1xyXG4gICAgICAgICAgICAgIGRvYy5wYXJlbnQudGl0bGUgPSBkb2MudGl0bGVcclxuICAgICAgICAgICAgICBkb2MucGFyZW50LnRleHQgID0gZG9jLmNvbnRlbnRzXHJcbiAgICAgICAgICAgICAgZG9jLnBhcmVudC5kb25lICA9IHRydWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC8qIFNvbWUgY2xlYW51cCBvbiB0aGUgdGV4dCAqL1xyXG4gICAgICAgICAgZG9jLnRleHQgPSBkb2MudGV4dFxyXG4gICAgICAgICAgICAucmVwbGFjZSgvXFxuL2csIFwiIFwiKSAgICAgICAgICAgICAgIC8qIFJlbW92ZSBuZXdsaW5lcyAqL1xyXG4gICAgICAgICAgICAucmVwbGFjZSgvXFxzKy9nLCBcIiBcIikgICAgICAgICAgICAgIC8qIENvbXBhY3Qgd2hpdGVzcGFjZSAqL1xyXG4gICAgICAgICAgICAucmVwbGFjZSgvXFxzKyhbLC46OyE/XSkvZywgICAgICAgICAvKiBDb3JyZWN0IHB1bmN0dWF0aW9uICovXHJcbiAgICAgICAgICAgICAgKF8sIGNoYXIpID0+IGNoYXIpXHJcblxyXG4gICAgICAgICAgLyogSW5kZXggc2VjdGlvbnMgYW5kIGRvY3VtZW50cywgYnV0IHNraXAgdG9wLWxldmVsIGhlYWRsaW5lICovXHJcbiAgICAgICAgICBpZiAoIWRvYy5wYXJlbnQgfHwgZG9jLnBhcmVudC50aXRsZSAhPT0gZG9jLnRpdGxlKVxyXG4gICAgICAgICAgICBkb2NzLnNldChkb2MubG9jYXRpb24sIGRvYylcclxuICAgICAgICAgIHJldHVybiBkb2NzXHJcbiAgICAgICAgfSwgbmV3IE1hcClcclxuXHJcbiAgICAgICAgLyogZXNsaW50LWRpc2FibGUgbm8taW52YWxpZC10aGlzICovXHJcbiAgICAgICAgY29uc3QgZG9jcyA9IHRoaXMuZG9jc18sXHJcbiAgICAgICAgICAgICAgbGFuZyA9IHRoaXMubGFuZ19cclxuXHJcbiAgICAgICAgLyogQ3JlYXRlIHN0YWNrIGFuZCBpbmRleCAqL1xyXG4gICAgICAgIHRoaXMuc3RhY2tfID0gW11cclxuICAgICAgICB0aGlzLmluZGV4XyA9IGx1bnIoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICBjb25zdCBmaWx0ZXJzID0ge1xyXG4gICAgICAgICAgICBcInNlYXJjaC5waXBlbGluZS50cmltbWVyXCI6IGx1bnIudHJpbW1lcixcclxuICAgICAgICAgICAgXCJzZWFyY2gucGlwZWxpbmUuc3RvcHdvcmRzXCI6IGx1bnIuc3RvcFdvcmRGaWx0ZXJcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAvKiBEaXNhYmxlIHN0b3Agd29yZHMgZmlsdGVyIGFuZCB0cmltbWVyLCBpZiBkZXNpcmVkICovXHJcbiAgICAgICAgICBjb25zdCBwaXBlbGluZSA9IE9iamVjdC5rZXlzKGZpbHRlcnMpLnJlZHVjZSgocmVzdWx0LCBuYW1lKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghdHJhbnNsYXRlKG5hbWUpLm1hdGNoKC9eZmFsc2UkL2kpKVxyXG4gICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGZpbHRlcnNbbmFtZV0pXHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHRcclxuICAgICAgICAgIH0sIFtdKVxyXG5cclxuICAgICAgICAgIC8qIFJlbW92ZSBzdGVtbWVyLCBhcyBpdCBjcmlwcGxlcyBzZWFyY2ggZXhwZXJpZW5jZSAqL1xyXG4gICAgICAgICAgdGhpcy5waXBlbGluZS5yZXNldCgpXHJcbiAgICAgICAgICBpZiAocGlwZWxpbmUpXHJcbiAgICAgICAgICAgIHRoaXMucGlwZWxpbmUuYWRkKC4uLnBpcGVsaW5lKVxyXG5cclxuICAgICAgICAgIC8qIFNldCB1cCBhbHRlcm5hdGUgc2VhcmNoIGxhbmd1YWdlcyAqL1xyXG4gICAgICAgICAgaWYgKGxhbmcubGVuZ3RoID09PSAxICYmIGxhbmdbMF0gIT09IFwiZW5cIiAmJiBsdW5yW2xhbmdbMF1dKSB7XHJcbiAgICAgICAgICAgIHRoaXMudXNlKGx1bnJbbGFuZ1swXV0pXHJcbiAgICAgICAgICB9IGVsc2UgaWYgKGxhbmcubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgICB0aGlzLnVzZShsdW5yLm11bHRpTGFuZ3VhZ2UoLi4ubGFuZykpXHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLyogSW5kZXggZmllbGRzICovXHJcbiAgICAgICAgICB0aGlzLmZpZWxkKFwidGl0bGVcIiwgeyBib29zdDogMTAgfSlcclxuICAgICAgICAgIHRoaXMuZmllbGQoXCJ0ZXh0XCIpXHJcbiAgICAgICAgICB0aGlzLmZpZWxkKFwidGFnc1wiKVxyXG4gICAgICAgICAgdGhpcy5maWVsZChcImNhdGVnb3JpZXNcIilcclxuICAgICAgICAgIHRoaXMucmVmKFwibG9jYXRpb25cIilcclxuXHJcbiAgICAgICAgICAvKiBJbmRleCBkb2N1bWVudHMgKi9cclxuICAgICAgICAgIGRvY3MuZm9yRWFjaChkb2MgPT4gdGhpcy5hZGQoZG9jKSlcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAvKiBSZWdpc3RlciBldmVudCBoYW5kbGVyIGZvciBsYXp5IHJlbmRlcmluZyAqL1xyXG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IHRoaXMuZWxfLnBhcmVudE5vZGVcclxuICAgICAgICBpZiAoIShjb250YWluZXIgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpXHJcbiAgICAgICAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3JcclxuICAgICAgICBjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCAoKSA9PiB7XHJcbiAgICAgICAgICB3aGlsZSAodGhpcy5zdGFja18ubGVuZ3RoICYmIGNvbnRhaW5lci5zY3JvbGxUb3AgK1xyXG4gICAgICAgICAgICAgIGNvbnRhaW5lci5vZmZzZXRIZWlnaHQgPj0gY29udGFpbmVyLnNjcm9sbEhlaWdodCAtIDE2KVxyXG4gICAgICAgICAgICB0aGlzLnN0YWNrXy5zcGxpY2UoMCwgMTApLmZvckVhY2gocmVuZGVyID0+IHJlbmRlcigpKVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgICAgLyogZXNsaW50LWVuYWJsZSBuby1pbnZhbGlkLXRoaXMgKi9cclxuXHJcbiAgICAgIC8qIEluaXRpYWxpemUgaW5kZXggYWZ0ZXIgc2hvcnQgdGltZW91dCB0byBhY2NvdW50IGZvciB0cmFuc2l0aW9uICovXHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiB0eXBlb2YgdGhpcy5kYXRhXyA9PT0gXCJmdW5jdGlvblwiXHJcbiAgICAgICAgICA/IHRoaXMuZGF0YV8oKS50aGVuKGluaXQpXHJcbiAgICAgICAgICA6IGluaXQodGhpcy5kYXRhXylcclxuICAgICAgfSwgMjUwKVxyXG5cclxuICAgIC8qIEV4ZWN1dGUgc2VhcmNoIG9uIG5ldyBpbnB1dCBldmVudCAqL1xyXG4gICAgfSBlbHNlIGlmIChldi50eXBlID09PSBcImZvY3VzXCIgfHwgZXYudHlwZSA9PT0gXCJrZXl1cFwiKSB7XHJcbiAgICAgIGNvbnN0IHRhcmdldCA9IGV2LnRhcmdldFxyXG4gICAgICBpZiAoISh0YXJnZXQgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50KSlcclxuICAgICAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3JcclxuXHJcbiAgICAgIC8qIEFib3J0IGVhcmx5LCBpZiBpbmRleCBpcyBub3QgYnVpbGQgb3IgaW5wdXQgaGFzbid0IGNoYW5nZWQgKi9cclxuICAgICAgaWYgKCF0aGlzLmluZGV4XyB8fCB0YXJnZXQudmFsdWUgPT09IHRoaXMudmFsdWVfKVxyXG4gICAgICAgIHJldHVyblxyXG5cclxuICAgICAgLyogQ2xlYXIgY3VycmVudCBsaXN0ICovXHJcbiAgICAgIHdoaWxlICh0aGlzLmxpc3RfLmZpcnN0Q2hpbGQpXHJcbiAgICAgICAgdGhpcy5saXN0Xy5yZW1vdmVDaGlsZCh0aGlzLmxpc3RfLmZpcnN0Q2hpbGQpXHJcblxyXG4gICAgICAvKiBBYm9ydCBlYXJseSwgaWYgc2VhcmNoIGlucHV0IGlzIGVtcHR5ICovXHJcbiAgICAgIHRoaXMudmFsdWVfID0gdGFyZ2V0LnZhbHVlXHJcbiAgICAgIGlmICh0aGlzLnZhbHVlXy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICB0aGlzLm1ldGFfLnRleHRDb250ZW50ID0gdGhpcy5tZXNzYWdlXy5wbGFjZWhvbGRlclxyXG4gICAgICAgIHJldHVyblxyXG4gICAgICB9XHJcblxyXG4gICAgICAvKiBQZXJmb3JtIHNlYXJjaCBvbiBpbmRleCBhbmQgZ3JvdXAgc2VjdGlvbnMgYnkgZG9jdW1lbnQgKi9cclxuICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5pbmRleF9cclxuXHJcbiAgICAgICAgLyogQXBwZW5kIHRyYWlsaW5nIHdpbGRjYXJkIHRvIGFsbCB0ZXJtcyBmb3IgcHJlZml4IHF1ZXJ5aW5nICovXHJcbiAgICAgICAgLnF1ZXJ5KHF1ZXJ5ID0+IHtcclxuICAgICAgICAgIHRoaXMudmFsdWVfLnRvTG93ZXJDYXNlKCkuc3BsaXQoXCIgXCIpXHJcbiAgICAgICAgICAgIC5maWx0ZXIoQm9vbGVhbilcclxuICAgICAgICAgICAgLmZvckVhY2godGVybSA9PiB7XHJcbiAgICAgICAgICAgICAgcXVlcnkudGVybSh0ZXJtLCB7IHdpbGRjYXJkOiBsdW5yLlF1ZXJ5LndpbGRjYXJkLlRSQUlMSU5HIH0pXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgLyogUHJvY2VzcyBxdWVyeSByZXN1bHRzICovXHJcbiAgICAgICAgLnJlZHVjZSgoaXRlbXMsIGl0ZW0pID0+IHtcclxuICAgICAgICAgIGNvbnN0IGRvYyA9IHRoaXMuZG9jc18uZ2V0KGl0ZW0ucmVmKVxyXG4gICAgICAgICAgaWYgKGRvYy5wYXJlbnQpIHtcclxuICAgICAgICAgICAgY29uc3QgcmVmID0gZG9jLnBhcmVudC5sb2NhdGlvblxyXG4gICAgICAgICAgICBpdGVtcy5zZXQocmVmLCAoaXRlbXMuZ2V0KHJlZikgfHwgW10pLmNvbmNhdChpdGVtKSlcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlZiA9IGRvYy5sb2NhdGlvblxyXG4gICAgICAgICAgICBpdGVtcy5zZXQocmVmLCAoaXRlbXMuZ2V0KHJlZikgfHwgW10pKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmV0dXJuIGl0ZW1zXHJcbiAgICAgICAgfSwgbmV3IE1hcClcclxuXHJcbiAgICAgIC8qIEFzc2VtYmxlIHJlZ3VsYXIgZXhwcmVzc2lvbnMgZm9yIG1hdGNoaW5nICovXHJcbiAgICAgIGNvbnN0IHF1ZXJ5ID0gZXNjYXBlKHRoaXMudmFsdWVfLnRyaW0oKSkucmVwbGFjZShcclxuICAgICAgICBuZXcgUmVnRXhwKGx1bnIudG9rZW5pemVyLnNlcGFyYXRvciwgXCJpbWdcIiksIFwifFwiKVxyXG4gICAgICBjb25zdCBtYXRjaCA9XHJcbiAgICAgICAgbmV3IFJlZ0V4cChgKF58JHtsdW5yLnRva2VuaXplci5zZXBhcmF0b3J9KSgke3F1ZXJ5fSlgLCBcImltZ1wiKVxyXG4gICAgICBjb25zdCBoaWdobGlnaHQgPSAoXywgc2VwYXJhdG9yLCB0b2tlbikgPT5cclxuICAgICAgICBgJHtzZXBhcmF0b3J9PGVtPiR7dG9rZW59PC9lbT5gXHJcblxyXG4gICAgICAvKiBSZXNldCBzdGFjayBhbmQgcmVuZGVyIHJlc3VsdHMgKi9cclxuICAgICAgdGhpcy5zdGFja18gPSBbXVxyXG4gICAgICByZXN1bHQuZm9yRWFjaCgoaXRlbXMsIHJlZikgPT4ge1xyXG4gICAgICAgIGNvbnN0IGRvYyA9IHRoaXMuZG9jc18uZ2V0KHJlZilcclxuXHJcbiAgICAgICAgLyogUmVuZGVyIGFydGljbGUgKi9cclxuICAgICAgICBjb25zdCBhcnRpY2xlID0gKFxyXG4gICAgICAgICAgPGxpIGNsYXNzPVwibWQtc2VhcmNoLXJlc3VsdF9faXRlbVwiPlxyXG4gICAgICAgICAgICA8YSBocmVmPXtkb2MubG9jYXRpb259IHRpdGxlPXtkb2MudGl0bGV9XHJcbiAgICAgICAgICAgICAgY2xhc3M9XCJtZC1zZWFyY2gtcmVzdWx0X19saW5rXCIgdGFiaW5kZXg9XCItMVwiPlxyXG4gICAgICAgICAgICAgIDxhcnRpY2xlIGNsYXNzPVwibWQtc2VhcmNoLXJlc3VsdF9fYXJ0aWNsZVxyXG4gICAgICAgICAgICAgICAgICAgIG1kLXNlYXJjaC1yZXN1bHRfX2FydGljbGUtLWRvY3VtZW50XCI+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3M9XCJtZC1zZWFyY2gtcmVzdWx0X190aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICB7eyBfX2h0bWw6IGRvYy50aXRsZS5yZXBsYWNlKG1hdGNoLCBoaWdobGlnaHQpIH19XHJcbiAgICAgICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICAgICAge2RvYy50ZXh0Lmxlbmd0aCA/XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwibWQtc2VhcmNoLXJlc3VsdF9fdGVhc2VyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3sgX19odG1sOiBkb2MudGV4dC5yZXBsYWNlKG1hdGNoLCBoaWdobGlnaHQpIH19XHJcbiAgICAgICAgICAgICAgICAgIDwvcD4gOiB7fX1cclxuICAgICAgICAgICAgICA8L2FydGljbGU+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgKVxyXG5cclxuICAgICAgICAvKiBSZW5kZXIgc2VjdGlvbnMgZm9yIGFydGljbGUgKi9cclxuICAgICAgICBjb25zdCBzZWN0aW9ucyA9IGl0ZW1zLm1hcChpdGVtID0+IHtcclxuICAgICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNlY3Rpb24gPSB0aGlzLmRvY3NfLmdldChpdGVtLnJlZilcclxuICAgICAgICAgICAgYXJ0aWNsZS5hcHBlbmRDaGlsZChcclxuICAgICAgICAgICAgICA8YSBocmVmPXtzZWN0aW9uLmxvY2F0aW9ufSB0aXRsZT17c2VjdGlvbi50aXRsZX1cclxuICAgICAgICAgICAgICAgIGNsYXNzPVwibWQtc2VhcmNoLXJlc3VsdF9fbGlua1wiIGRhdGEtbWQtcmVsPVwiYW5jaG9yXCJcclxuICAgICAgICAgICAgICAgIHRhYmluZGV4PVwiLTFcIj5cclxuICAgICAgICAgICAgICAgIDxhcnRpY2xlIGNsYXNzPVwibWQtc2VhcmNoLXJlc3VsdF9fYXJ0aWNsZVwiPlxyXG4gICAgICAgICAgICAgICAgICA8aDEgY2xhc3M9XCJtZC1zZWFyY2gtcmVzdWx0X190aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHt7IF9faHRtbDogc2VjdGlvbi50aXRsZS5yZXBsYWNlKG1hdGNoLCBoaWdobGlnaHQpIH19XHJcbiAgICAgICAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgICAgICAgIHtzZWN0aW9uLnRleHQubGVuZ3RoID9cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cIm1kLXNlYXJjaC1yZXN1bHRfX3RlYXNlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAge3sgX19odG1sOiB0cnVuY2F0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VjdGlvbi50ZXh0LnJlcGxhY2UobWF0Y2gsIGhpZ2hsaWdodCksIDQwMClcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPiA6IHt9fVxyXG4gICAgICAgICAgICAgICAgPC9hcnRpY2xlPlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIC8qIFB1c2ggYXJ0aWNsZXMgYW5kIHNlY3Rpb24gcmVuZGVyZXJzIG9udG8gc3RhY2sgKi9cclxuICAgICAgICB0aGlzLnN0YWNrXy5wdXNoKCgpID0+IHRoaXMubGlzdF8uYXBwZW5kQ2hpbGQoYXJ0aWNsZSksIC4uLnNlY3Rpb25zKVxyXG4gICAgICB9KVxyXG5cclxuICAgICAgLyogR3JhZHVhbGx5IGFkZCByZXN1bHRzIGFzIGxvbmcgYXMgdGhlIGhlaWdodCBvZiB0aGUgY29udGFpbmVyIGdyb3dzICovXHJcbiAgICAgIGNvbnN0IGNvbnRhaW5lciA9IHRoaXMuZWxfLnBhcmVudE5vZGVcclxuICAgICAgaWYgKCEoY29udGFpbmVyIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKVxyXG4gICAgICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvclxyXG4gICAgICB3aGlsZSAodGhpcy5zdGFja18ubGVuZ3RoICYmXHJcbiAgICAgICAgICBjb250YWluZXIub2Zmc2V0SGVpZ2h0ID49IGNvbnRhaW5lci5zY3JvbGxIZWlnaHQgLSAxNilcclxuICAgICAgICAodGhpcy5zdGFja18uc2hpZnQoKSkoKVxyXG5cclxuICAgICAgLyogQmluZCBjbGljayBoYW5kbGVycyBmb3IgYW5jaG9ycyAqL1xyXG4gICAgICBjb25zdCBhbmNob3JzID0gdGhpcy5saXN0Xy5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGEtbWQtcmVsPWFuY2hvcl1cIilcclxuICAgICAgQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChhbmNob3JzLCBhbmNob3IgPT4ge1xyXG4gICAgICAgIFtcImNsaWNrXCIsIFwia2V5ZG93blwiXS5mb3JFYWNoKGFjdGlvbiA9PiB7XHJcbiAgICAgICAgICBhbmNob3IuYWRkRXZlbnRMaXN0ZW5lcihhY3Rpb24sIGV2MiA9PiB7XHJcbiAgICAgICAgICAgIGlmIChhY3Rpb24gPT09IFwia2V5ZG93blwiICYmIGV2Mi5rZXlDb2RlICE9PSAxMylcclxuICAgICAgICAgICAgICByZXR1cm5cclxuXHJcbiAgICAgICAgICAgIC8qIENsb3NlIHNlYXJjaCAqL1xyXG4gICAgICAgICAgICBjb25zdCB0b2dnbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtbWQtdG9nZ2xlPXNlYXJjaF1cIilcclxuICAgICAgICAgICAgaWYgKCEodG9nZ2xlIGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCkpXHJcbiAgICAgICAgICAgICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yXHJcbiAgICAgICAgICAgIGlmICh0b2dnbGUuY2hlY2tlZCkge1xyXG4gICAgICAgICAgICAgIHRvZ2dsZS5jaGVja2VkID0gZmFsc2VcclxuICAgICAgICAgICAgICB0b2dnbGUuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoXCJjaGFuZ2VcIikpXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8qIEhhY2s6IHByZXZlbnQgZGVmYXVsdCwgYXMgdGhlIG5hdmlnYXRpb24gbmVlZHMgdG8gYmUgZGVsYXllZCBkdWVcclxuICAgICAgICAgICAgICAgdG8gdGhlIHNlYXJjaCBib2R5IGxvY2sgb24gbW9iaWxlICovXHJcbiAgICAgICAgICAgIGV2Mi5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgIGRvY3VtZW50LmxvY2F0aW9uLmhyZWYgPSBhbmNob3IuaHJlZlxyXG4gICAgICAgICAgICB9LCAxMDApXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0pXHJcblxyXG4gICAgICAvKiBVcGRhdGUgc2VhcmNoIG1ldGFkYXRhICovXHJcbiAgICAgIHN3aXRjaCAocmVzdWx0LnNpemUpIHtcclxuICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICB0aGlzLm1ldGFfLnRleHRDb250ZW50ID0gdGhpcy5tZXNzYWdlXy5ub25lXHJcbiAgICAgICAgICBicmVha1xyXG4gICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgIHRoaXMubWV0YV8udGV4dENvbnRlbnQgPSB0aGlzLm1lc3NhZ2VfLm9uZVxyXG4gICAgICAgICAgYnJlYWtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgdGhpcy5tZXRhXy50ZXh0Q29udGVudCA9XHJcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZV8ub3RoZXIucmVwbGFjZShcIiNcIiwgcmVzdWx0LnNpemUpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Fzc2V0cy9qYXZhc2NyaXB0cy9jb21wb25lbnRzL01hdGVyaWFsL1NlYXJjaC9SZXN1bHQuanN4IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgbWF0Y2hPcGVyYXRvcnNSZSA9IC9bfFxcXFx7fSgpW1xcXV4kKyo/Ll0vZztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoc3RyKSB7XG5cdGlmICh0eXBlb2Ygc3RyICE9PSAnc3RyaW5nJykge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ0V4cGVjdGVkIGEgc3RyaW5nJyk7XG5cdH1cblxuXHRyZXR1cm4gc3RyLnJlcGxhY2UobWF0Y2hPcGVyYXRvcnNSZSwgJ1xcXFwkJicpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9lc2NhcGUtc3RyaW5nLXJlZ2V4cC9pbmRleC5qcyIsIm1vZHVsZS5leHBvcnRzID0gZ2xvYmFsW1wibHVuclwiXSA9IHJlcXVpcmUoXCItIUQ6XFxcXFNjb3Bpc3RvXFxcXERldmVsb3BtZW50XFxcXGh1Z29cXFxcaHVnby1tYXRlcmlhbC1kb2NzXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzIS5cXFxcbHVuci5qc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9leHBvc2UtbG9hZGVyP2x1bnIhLi9ub2RlX21vZHVsZXMvbHVuci9sdW5yLmpzLWV4cG9zZWRcbi8vIG1vZHVsZSBpZCA9IDM3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogbHVuciAtIGh0dHA6Ly9sdW5yanMuY29tIC0gQSBiaXQgbGlrZSBTb2xyLCBidXQgbXVjaCBzbWFsbGVyIGFuZCBub3QgYXMgYnJpZ2h0IC0gMi4zLjVcbiAqIENvcHlyaWdodCAoQykgMjAxOCBPbGl2ZXIgTmlnaHRpbmdhbGVcbiAqIEBsaWNlbnNlIE1JVFxuICovXG5cbjsoZnVuY3Rpb24oKXtcblxuLyoqXG4gKiBBIGNvbnZlbmllbmNlIGZ1bmN0aW9uIGZvciBjb25maWd1cmluZyBhbmQgY29uc3RydWN0aW5nXG4gKiBhIG5ldyBsdW5yIEluZGV4LlxuICpcbiAqIEEgbHVuci5CdWlsZGVyIGluc3RhbmNlIGlzIGNyZWF0ZWQgYW5kIHRoZSBwaXBlbGluZSBzZXR1cFxuICogd2l0aCBhIHRyaW1tZXIsIHN0b3Agd29yZCBmaWx0ZXIgYW5kIHN0ZW1tZXIuXG4gKlxuICogVGhpcyBidWlsZGVyIG9iamVjdCBpcyB5aWVsZGVkIHRvIHRoZSBjb25maWd1cmF0aW9uIGZ1bmN0aW9uXG4gKiB0aGF0IGlzIHBhc3NlZCBhcyBhIHBhcmFtZXRlciwgYWxsb3dpbmcgdGhlIGxpc3Qgb2YgZmllbGRzXG4gKiBhbmQgb3RoZXIgYnVpbGRlciBwYXJhbWV0ZXJzIHRvIGJlIGN1c3RvbWlzZWQuXG4gKlxuICogQWxsIGRvY3VtZW50cyBfbXVzdF8gYmUgYWRkZWQgd2l0aGluIHRoZSBwYXNzZWQgY29uZmlnIGZ1bmN0aW9uLlxuICpcbiAqIEBleGFtcGxlXG4gKiB2YXIgaWR4ID0gbHVucihmdW5jdGlvbiAoKSB7XG4gKiAgIHRoaXMuZmllbGQoJ3RpdGxlJylcbiAqICAgdGhpcy5maWVsZCgnYm9keScpXG4gKiAgIHRoaXMucmVmKCdpZCcpXG4gKlxuICogICBkb2N1bWVudHMuZm9yRWFjaChmdW5jdGlvbiAoZG9jKSB7XG4gKiAgICAgdGhpcy5hZGQoZG9jKVxuICogICB9LCB0aGlzKVxuICogfSlcbiAqXG4gKiBAc2VlIHtAbGluayBsdW5yLkJ1aWxkZXJ9XG4gKiBAc2VlIHtAbGluayBsdW5yLlBpcGVsaW5lfVxuICogQHNlZSB7QGxpbmsgbHVuci50cmltbWVyfVxuICogQHNlZSB7QGxpbmsgbHVuci5zdG9wV29yZEZpbHRlcn1cbiAqIEBzZWUge0BsaW5rIGx1bnIuc3RlbW1lcn1cbiAqIEBuYW1lc3BhY2Uge2Z1bmN0aW9ufSBsdW5yXG4gKi9cbnZhciBsdW5yID0gZnVuY3Rpb24gKGNvbmZpZykge1xuICB2YXIgYnVpbGRlciA9IG5ldyBsdW5yLkJ1aWxkZXJcblxuICBidWlsZGVyLnBpcGVsaW5lLmFkZChcbiAgICBsdW5yLnRyaW1tZXIsXG4gICAgbHVuci5zdG9wV29yZEZpbHRlcixcbiAgICBsdW5yLnN0ZW1tZXJcbiAgKVxuXG4gIGJ1aWxkZXIuc2VhcmNoUGlwZWxpbmUuYWRkKFxuICAgIGx1bnIuc3RlbW1lclxuICApXG5cbiAgY29uZmlnLmNhbGwoYnVpbGRlciwgYnVpbGRlcilcbiAgcmV0dXJuIGJ1aWxkZXIuYnVpbGQoKVxufVxuXG5sdW5yLnZlcnNpb24gPSBcIjIuMy41XCJcbi8qIVxuICogbHVuci51dGlsc1xuICogQ29weXJpZ2h0IChDKSAyMDE4IE9saXZlciBOaWdodGluZ2FsZVxuICovXG5cbi8qKlxuICogQSBuYW1lc3BhY2UgY29udGFpbmluZyB1dGlscyBmb3IgdGhlIHJlc3Qgb2YgdGhlIGx1bnIgbGlicmFyeVxuICogQG5hbWVzcGFjZSBsdW5yLnV0aWxzXG4gKi9cbmx1bnIudXRpbHMgPSB7fVxuXG4vKipcbiAqIFByaW50IGEgd2FybmluZyBtZXNzYWdlIHRvIHRoZSBjb25zb2xlLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBtZXNzYWdlIFRoZSBtZXNzYWdlIHRvIGJlIHByaW50ZWQuXG4gKiBAbWVtYmVyT2YgbHVuci51dGlsc1xuICogQGZ1bmN0aW9uXG4gKi9cbmx1bnIudXRpbHMud2FybiA9IChmdW5jdGlvbiAoZ2xvYmFsKSB7XG4gIC8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cbiAgcmV0dXJuIGZ1bmN0aW9uIChtZXNzYWdlKSB7XG4gICAgaWYgKGdsb2JhbC5jb25zb2xlICYmIGNvbnNvbGUud2Fybikge1xuICAgICAgY29uc29sZS53YXJuKG1lc3NhZ2UpXG4gICAgfVxuICB9XG4gIC8qIGVzbGludC1lbmFibGUgbm8tY29uc29sZSAqL1xufSkodGhpcylcblxuLyoqXG4gKiBDb252ZXJ0IGFuIG9iamVjdCB0byBhIHN0cmluZy5cbiAqXG4gKiBJbiB0aGUgY2FzZSBvZiBgbnVsbGAgYW5kIGB1bmRlZmluZWRgIHRoZSBmdW5jdGlvbiByZXR1cm5zXG4gKiB0aGUgZW1wdHkgc3RyaW5nLCBpbiBhbGwgb3RoZXIgY2FzZXMgdGhlIHJlc3VsdCBvZiBjYWxsaW5nXG4gKiBgdG9TdHJpbmdgIG9uIHRoZSBwYXNzZWQgb2JqZWN0IGlzIHJldHVybmVkLlxuICpcbiAqIEBwYXJhbSB7QW55fSBvYmogVGhlIG9iamVjdCB0byBjb252ZXJ0IHRvIGEgc3RyaW5nLlxuICogQHJldHVybiB7U3RyaW5nfSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIHBhc3NlZCBvYmplY3QuXG4gKiBAbWVtYmVyT2YgbHVuci51dGlsc1xuICovXG5sdW5yLnV0aWxzLmFzU3RyaW5nID0gZnVuY3Rpb24gKG9iaikge1xuICBpZiAob2JqID09PSB2b2lkIDAgfHwgb2JqID09PSBudWxsKSB7XG4gICAgcmV0dXJuIFwiXCJcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gb2JqLnRvU3RyaW5nKClcbiAgfVxufVxuXG4vKipcbiAqIENsb25lcyBhbiBvYmplY3QuXG4gKlxuICogV2lsbCBjcmVhdGUgYSBjb3B5IG9mIGFuIGV4aXN0aW5nIG9iamVjdCBzdWNoIHRoYXQgYW55IG11dGF0aW9uc1xuICogb24gdGhlIGNvcHkgY2Fubm90IGFmZmVjdCB0aGUgb3JpZ2luYWwuXG4gKlxuICogT25seSBzaGFsbG93IG9iamVjdHMgYXJlIHN1cHBvcnRlZCwgcGFzc2luZyBhIG5lc3RlZCBvYmplY3QgdG8gdGhpc1xuICogZnVuY3Rpb24gd2lsbCBjYXVzZSBhIFR5cGVFcnJvci5cbiAqXG4gKiBPYmplY3RzIHdpdGggcHJpbWl0aXZlcywgYW5kIGFycmF5cyBvZiBwcmltaXRpdmVzIGFyZSBzdXBwb3J0ZWQuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9iaiBUaGUgb2JqZWN0IHRvIGNsb25lLlxuICogQHJldHVybiB7T2JqZWN0fSBhIGNsb25lIG9mIHRoZSBwYXNzZWQgb2JqZWN0LlxuICogQHRocm93cyB7VHlwZUVycm9yfSB3aGVuIGEgbmVzdGVkIG9iamVjdCBpcyBwYXNzZWQuXG4gKiBAbWVtYmVyT2YgVXRpbHNcbiAqL1xubHVuci51dGlscy5jbG9uZSA9IGZ1bmN0aW9uIChvYmopIHtcbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCBvYmogPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBvYmpcbiAgfVxuXG4gIHZhciBjbG9uZSA9IE9iamVjdC5jcmVhdGUobnVsbCksXG4gICAgICBrZXlzID0gT2JqZWN0LmtleXMob2JqKVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBrZXkgPSBrZXlzW2ldLFxuICAgICAgICB2YWwgPSBvYmpba2V5XVxuXG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsKSkge1xuICAgICAgY2xvbmVba2V5XSA9IHZhbC5zbGljZSgpXG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIGlmICh0eXBlb2YgdmFsID09PSAnc3RyaW5nJyB8fFxuICAgICAgICB0eXBlb2YgdmFsID09PSAnbnVtYmVyJyB8fFxuICAgICAgICB0eXBlb2YgdmFsID09PSAnYm9vbGVhbicpIHtcbiAgICAgIGNsb25lW2tleV0gPSB2YWxcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcImNsb25lIGlzIG5vdCBkZWVwIGFuZCBkb2VzIG5vdCBzdXBwb3J0IG5lc3RlZCBvYmplY3RzXCIpXG4gIH1cblxuICByZXR1cm4gY2xvbmVcbn1cbmx1bnIuRmllbGRSZWYgPSBmdW5jdGlvbiAoZG9jUmVmLCBmaWVsZE5hbWUsIHN0cmluZ1ZhbHVlKSB7XG4gIHRoaXMuZG9jUmVmID0gZG9jUmVmXG4gIHRoaXMuZmllbGROYW1lID0gZmllbGROYW1lXG4gIHRoaXMuX3N0cmluZ1ZhbHVlID0gc3RyaW5nVmFsdWVcbn1cblxubHVuci5GaWVsZFJlZi5qb2luZXIgPSBcIi9cIlxuXG5sdW5yLkZpZWxkUmVmLmZyb21TdHJpbmcgPSBmdW5jdGlvbiAocykge1xuICB2YXIgbiA9IHMuaW5kZXhPZihsdW5yLkZpZWxkUmVmLmpvaW5lcilcblxuICBpZiAobiA9PT0gLTEpIHtcbiAgICB0aHJvdyBcIm1hbGZvcm1lZCBmaWVsZCByZWYgc3RyaW5nXCJcbiAgfVxuXG4gIHZhciBmaWVsZFJlZiA9IHMuc2xpY2UoMCwgbiksXG4gICAgICBkb2NSZWYgPSBzLnNsaWNlKG4gKyAxKVxuXG4gIHJldHVybiBuZXcgbHVuci5GaWVsZFJlZiAoZG9jUmVmLCBmaWVsZFJlZiwgcylcbn1cblxubHVuci5GaWVsZFJlZi5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gIGlmICh0aGlzLl9zdHJpbmdWYWx1ZSA9PSB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9zdHJpbmdWYWx1ZSA9IHRoaXMuZmllbGROYW1lICsgbHVuci5GaWVsZFJlZi5qb2luZXIgKyB0aGlzLmRvY1JlZlxuICB9XG5cbiAgcmV0dXJuIHRoaXMuX3N0cmluZ1ZhbHVlXG59XG4vKiFcbiAqIGx1bnIuU2V0XG4gKiBDb3B5cmlnaHQgKEMpIDIwMTggT2xpdmVyIE5pZ2h0aW5nYWxlXG4gKi9cblxuLyoqXG4gKiBBIGx1bnIgc2V0LlxuICpcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5sdW5yLlNldCA9IGZ1bmN0aW9uIChlbGVtZW50cykge1xuICB0aGlzLmVsZW1lbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuXG4gIGlmIChlbGVtZW50cykge1xuICAgIHRoaXMubGVuZ3RoID0gZWxlbWVudHMubGVuZ3RoXG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRoaXMuZWxlbWVudHNbZWxlbWVudHNbaV1dID0gdHJ1ZVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB0aGlzLmxlbmd0aCA9IDBcbiAgfVxufVxuXG4vKipcbiAqIEEgY29tcGxldGUgc2V0IHRoYXQgY29udGFpbnMgYWxsIGVsZW1lbnRzLlxuICpcbiAqIEBzdGF0aWNcbiAqIEByZWFkb25seVxuICogQHR5cGUge2x1bnIuU2V0fVxuICovXG5sdW5yLlNldC5jb21wbGV0ZSA9IHtcbiAgaW50ZXJzZWN0OiBmdW5jdGlvbiAob3RoZXIpIHtcbiAgICByZXR1cm4gb3RoZXJcbiAgfSxcblxuICB1bmlvbjogZnVuY3Rpb24gKG90aGVyKSB7XG4gICAgcmV0dXJuIG90aGVyXG4gIH0sXG5cbiAgY29udGFpbnM6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG59XG5cbi8qKlxuICogQW4gZW1wdHkgc2V0IHRoYXQgY29udGFpbnMgbm8gZWxlbWVudHMuXG4gKlxuICogQHN0YXRpY1xuICogQHJlYWRvbmx5XG4gKiBAdHlwZSB7bHVuci5TZXR9XG4gKi9cbmx1bnIuU2V0LmVtcHR5ID0ge1xuICBpbnRlcnNlY3Q6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpc1xuICB9LFxuXG4gIHVuaW9uOiBmdW5jdGlvbiAob3RoZXIpIHtcbiAgICByZXR1cm4gb3RoZXJcbiAgfSxcblxuICBjb250YWluczogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIHRoaXMgc2V0IGNvbnRhaW5zIHRoZSBzcGVjaWZpZWQgb2JqZWN0LlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmplY3QgLSBPYmplY3Qgd2hvc2UgcHJlc2VuY2UgaW4gdGhpcyBzZXQgaXMgdG8gYmUgdGVzdGVkLlxuICogQHJldHVybnMge2Jvb2xlYW59IC0gVHJ1ZSBpZiB0aGlzIHNldCBjb250YWlucyB0aGUgc3BlY2lmaWVkIG9iamVjdC5cbiAqL1xubHVuci5TZXQucHJvdG90eXBlLmNvbnRhaW5zID0gZnVuY3Rpb24gKG9iamVjdCkge1xuICByZXR1cm4gISF0aGlzLmVsZW1lbnRzW29iamVjdF1cbn1cblxuLyoqXG4gKiBSZXR1cm5zIGEgbmV3IHNldCBjb250YWluaW5nIG9ubHkgdGhlIGVsZW1lbnRzIHRoYXQgYXJlIHByZXNlbnQgaW4gYm90aFxuICogdGhpcyBzZXQgYW5kIHRoZSBzcGVjaWZpZWQgc2V0LlxuICpcbiAqIEBwYXJhbSB7bHVuci5TZXR9IG90aGVyIC0gc2V0IHRvIGludGVyc2VjdCB3aXRoIHRoaXMgc2V0LlxuICogQHJldHVybnMge2x1bnIuU2V0fSBhIG5ldyBzZXQgdGhhdCBpcyB0aGUgaW50ZXJzZWN0aW9uIG9mIHRoaXMgYW5kIHRoZSBzcGVjaWZpZWQgc2V0LlxuICovXG5cbmx1bnIuU2V0LnByb3RvdHlwZS5pbnRlcnNlY3QgPSBmdW5jdGlvbiAob3RoZXIpIHtcbiAgdmFyIGEsIGIsIGVsZW1lbnRzLCBpbnRlcnNlY3Rpb24gPSBbXVxuXG4gIGlmIChvdGhlciA9PT0gbHVuci5TZXQuY29tcGxldGUpIHtcbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgaWYgKG90aGVyID09PSBsdW5yLlNldC5lbXB0eSkge1xuICAgIHJldHVybiBvdGhlclxuICB9XG5cbiAgaWYgKHRoaXMubGVuZ3RoIDwgb3RoZXIubGVuZ3RoKSB7XG4gICAgYSA9IHRoaXNcbiAgICBiID0gb3RoZXJcbiAgfSBlbHNlIHtcbiAgICBhID0gb3RoZXJcbiAgICBiID0gdGhpc1xuICB9XG5cbiAgZWxlbWVudHMgPSBPYmplY3Qua2V5cyhhLmVsZW1lbnRzKVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgZWxlbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZWxlbWVudCA9IGVsZW1lbnRzW2ldXG4gICAgaWYgKGVsZW1lbnQgaW4gYi5lbGVtZW50cykge1xuICAgICAgaW50ZXJzZWN0aW9uLnB1c2goZWxlbWVudClcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbmV3IGx1bnIuU2V0IChpbnRlcnNlY3Rpb24pXG59XG5cbi8qKlxuICogUmV0dXJucyBhIG5ldyBzZXQgY29tYmluaW5nIHRoZSBlbGVtZW50cyBvZiB0aGlzIGFuZCB0aGUgc3BlY2lmaWVkIHNldC5cbiAqXG4gKiBAcGFyYW0ge2x1bnIuU2V0fSBvdGhlciAtIHNldCB0byB1bmlvbiB3aXRoIHRoaXMgc2V0LlxuICogQHJldHVybiB7bHVuci5TZXR9IGEgbmV3IHNldCB0aGF0IGlzIHRoZSB1bmlvbiBvZiB0aGlzIGFuZCB0aGUgc3BlY2lmaWVkIHNldC5cbiAqL1xuXG5sdW5yLlNldC5wcm90b3R5cGUudW5pb24gPSBmdW5jdGlvbiAob3RoZXIpIHtcbiAgaWYgKG90aGVyID09PSBsdW5yLlNldC5jb21wbGV0ZSkge1xuICAgIHJldHVybiBsdW5yLlNldC5jb21wbGV0ZVxuICB9XG5cbiAgaWYgKG90aGVyID09PSBsdW5yLlNldC5lbXB0eSkge1xuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICByZXR1cm4gbmV3IGx1bnIuU2V0KE9iamVjdC5rZXlzKHRoaXMuZWxlbWVudHMpLmNvbmNhdChPYmplY3Qua2V5cyhvdGhlci5lbGVtZW50cykpKVxufVxuLyoqXG4gKiBBIGZ1bmN0aW9uIHRvIGNhbGN1bGF0ZSB0aGUgaW52ZXJzZSBkb2N1bWVudCBmcmVxdWVuY3kgZm9yXG4gKiBhIHBvc3RpbmcuIFRoaXMgaXMgc2hhcmVkIGJldHdlZW4gdGhlIGJ1aWxkZXIgYW5kIHRoZSBpbmRleFxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge29iamVjdH0gcG9zdGluZyAtIFRoZSBwb3N0aW5nIGZvciBhIGdpdmVuIHRlcm1cbiAqIEBwYXJhbSB7bnVtYmVyfSBkb2N1bWVudENvdW50IC0gVGhlIHRvdGFsIG51bWJlciBvZiBkb2N1bWVudHMuXG4gKi9cbmx1bnIuaWRmID0gZnVuY3Rpb24gKHBvc3RpbmcsIGRvY3VtZW50Q291bnQpIHtcbiAgdmFyIGRvY3VtZW50c1dpdGhUZXJtID0gMFxuXG4gIGZvciAodmFyIGZpZWxkTmFtZSBpbiBwb3N0aW5nKSB7XG4gICAgaWYgKGZpZWxkTmFtZSA9PSAnX2luZGV4JykgY29udGludWUgLy8gSWdub3JlIHRoZSB0ZXJtIGluZGV4LCBpdHMgbm90IGEgZmllbGRcbiAgICBkb2N1bWVudHNXaXRoVGVybSArPSBPYmplY3Qua2V5cyhwb3N0aW5nW2ZpZWxkTmFtZV0pLmxlbmd0aFxuICB9XG5cbiAgdmFyIHggPSAoZG9jdW1lbnRDb3VudCAtIGRvY3VtZW50c1dpdGhUZXJtICsgMC41KSAvIChkb2N1bWVudHNXaXRoVGVybSArIDAuNSlcblxuICByZXR1cm4gTWF0aC5sb2coMSArIE1hdGguYWJzKHgpKVxufVxuXG4vKipcbiAqIEEgdG9rZW4gd3JhcHMgYSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgYSB0b2tlblxuICogYXMgaXQgaXMgcGFzc2VkIHRocm91Z2ggdGhlIHRleHQgcHJvY2Vzc2luZyBwaXBlbGluZS5cbiAqXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7c3RyaW5nfSBbc3RyPScnXSAtIFRoZSBzdHJpbmcgdG9rZW4gYmVpbmcgd3JhcHBlZC5cbiAqIEBwYXJhbSB7b2JqZWN0fSBbbWV0YWRhdGE9e31dIC0gTWV0YWRhdGEgYXNzb2NpYXRlZCB3aXRoIHRoaXMgdG9rZW4uXG4gKi9cbmx1bnIuVG9rZW4gPSBmdW5jdGlvbiAoc3RyLCBtZXRhZGF0YSkge1xuICB0aGlzLnN0ciA9IHN0ciB8fCBcIlwiXG4gIHRoaXMubWV0YWRhdGEgPSBtZXRhZGF0YSB8fCB7fVxufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIHRva2VuIHN0cmluZyB0aGF0IGlzIGJlaW5nIHdyYXBwZWQgYnkgdGhpcyBvYmplY3QuXG4gKlxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xubHVuci5Ub2tlbi5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLnN0clxufVxuXG4vKipcbiAqIEEgdG9rZW4gdXBkYXRlIGZ1bmN0aW9uIGlzIHVzZWQgd2hlbiB1cGRhdGluZyBvciBvcHRpb25hbGx5XG4gKiB3aGVuIGNsb25pbmcgYSB0b2tlbi5cbiAqXG4gKiBAY2FsbGJhY2sgbHVuci5Ub2tlbn51cGRhdGVGdW5jdGlvblxuICogQHBhcmFtIHtzdHJpbmd9IHN0ciAtIFRoZSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIHRva2VuLlxuICogQHBhcmFtIHtPYmplY3R9IG1ldGFkYXRhIC0gQWxsIG1ldGFkYXRhIGFzc29jaWF0ZWQgd2l0aCB0aGlzIHRva2VuLlxuICovXG5cbi8qKlxuICogQXBwbGllcyB0aGUgZ2l2ZW4gZnVuY3Rpb24gdG8gdGhlIHdyYXBwZWQgc3RyaW5nIHRva2VuLlxuICpcbiAqIEBleGFtcGxlXG4gKiB0b2tlbi51cGRhdGUoZnVuY3Rpb24gKHN0ciwgbWV0YWRhdGEpIHtcbiAqICAgcmV0dXJuIHN0ci50b1VwcGVyQ2FzZSgpXG4gKiB9KVxuICpcbiAqIEBwYXJhbSB7bHVuci5Ub2tlbn51cGRhdGVGdW5jdGlvbn0gZm4gLSBBIGZ1bmN0aW9uIHRvIGFwcGx5IHRvIHRoZSB0b2tlbiBzdHJpbmcuXG4gKiBAcmV0dXJucyB7bHVuci5Ub2tlbn1cbiAqL1xubHVuci5Ub2tlbi5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gKGZuKSB7XG4gIHRoaXMuc3RyID0gZm4odGhpcy5zdHIsIHRoaXMubWV0YWRhdGEpXG4gIHJldHVybiB0aGlzXG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIGNsb25lIG9mIHRoaXMgdG9rZW4uIE9wdGlvbmFsbHkgYSBmdW5jdGlvbiBjYW4gYmVcbiAqIGFwcGxpZWQgdG8gdGhlIGNsb25lZCB0b2tlbi5cbiAqXG4gKiBAcGFyYW0ge2x1bnIuVG9rZW5+dXBkYXRlRnVuY3Rpb259IFtmbl0gLSBBbiBvcHRpb25hbCBmdW5jdGlvbiB0byBhcHBseSB0byB0aGUgY2xvbmVkIHRva2VuLlxuICogQHJldHVybnMge2x1bnIuVG9rZW59XG4gKi9cbmx1bnIuVG9rZW4ucHJvdG90eXBlLmNsb25lID0gZnVuY3Rpb24gKGZuKSB7XG4gIGZuID0gZm4gfHwgZnVuY3Rpb24gKHMpIHsgcmV0dXJuIHMgfVxuICByZXR1cm4gbmV3IGx1bnIuVG9rZW4gKGZuKHRoaXMuc3RyLCB0aGlzLm1ldGFkYXRhKSwgdGhpcy5tZXRhZGF0YSlcbn1cbi8qIVxuICogbHVuci50b2tlbml6ZXJcbiAqIENvcHlyaWdodCAoQykgMjAxOCBPbGl2ZXIgTmlnaHRpbmdhbGVcbiAqL1xuXG4vKipcbiAqIEEgZnVuY3Rpb24gZm9yIHNwbGl0dGluZyBhIHN0cmluZyBpbnRvIHRva2VucyByZWFkeSB0byBiZSBpbnNlcnRlZCBpbnRvXG4gKiB0aGUgc2VhcmNoIGluZGV4LiBVc2VzIGBsdW5yLnRva2VuaXplci5zZXBhcmF0b3JgIHRvIHNwbGl0IHN0cmluZ3MsIGNoYW5nZVxuICogdGhlIHZhbHVlIG9mIHRoaXMgcHJvcGVydHkgdG8gY2hhbmdlIGhvdyBzdHJpbmdzIGFyZSBzcGxpdCBpbnRvIHRva2Vucy5cbiAqXG4gKiBUaGlzIHRva2VuaXplciB3aWxsIGNvbnZlcnQgaXRzIHBhcmFtZXRlciB0byBhIHN0cmluZyBieSBjYWxsaW5nIGB0b1N0cmluZ2AgYW5kXG4gKiB0aGVuIHdpbGwgc3BsaXQgdGhpcyBzdHJpbmcgb24gdGhlIGNoYXJhY3RlciBpbiBgbHVuci50b2tlbml6ZXIuc2VwYXJhdG9yYC5cbiAqIEFycmF5cyB3aWxsIGhhdmUgdGhlaXIgZWxlbWVudHMgY29udmVydGVkIHRvIHN0cmluZ3MgYW5kIHdyYXBwZWQgaW4gYSBsdW5yLlRva2VuLlxuICpcbiAqIE9wdGlvbmFsIG1ldGFkYXRhIGNhbiBiZSBwYXNzZWQgdG8gdGhlIHRva2VuaXplciwgdGhpcyBtZXRhZGF0YSB3aWxsIGJlIGNsb25lZCBhbmRcbiAqIGFkZGVkIGFzIG1ldGFkYXRhIHRvIGV2ZXJ5IHRva2VuIHRoYXQgaXMgY3JlYXRlZCBmcm9tIHRoZSBvYmplY3QgdG8gYmUgdG9rZW5pemVkLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBwYXJhbSB7PyhzdHJpbmd8b2JqZWN0fG9iamVjdFtdKX0gb2JqIC0gVGhlIG9iamVjdCB0byBjb252ZXJ0IGludG8gdG9rZW5zXG4gKiBAcGFyYW0gez9vYmplY3R9IG1ldGFkYXRhIC0gT3B0aW9uYWwgbWV0YWRhdGEgdG8gYXNzb2NpYXRlIHdpdGggZXZlcnkgdG9rZW5cbiAqIEByZXR1cm5zIHtsdW5yLlRva2VuW119XG4gKiBAc2VlIHtAbGluayBsdW5yLlBpcGVsaW5lfVxuICovXG5sdW5yLnRva2VuaXplciA9IGZ1bmN0aW9uIChvYmosIG1ldGFkYXRhKSB7XG4gIGlmIChvYmogPT0gbnVsbCB8fCBvYmogPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIFtdXG4gIH1cblxuICBpZiAoQXJyYXkuaXNBcnJheShvYmopKSB7XG4gICAgcmV0dXJuIG9iai5tYXAoZnVuY3Rpb24gKHQpIHtcbiAgICAgIHJldHVybiBuZXcgbHVuci5Ub2tlbihcbiAgICAgICAgbHVuci51dGlscy5hc1N0cmluZyh0KS50b0xvd2VyQ2FzZSgpLFxuICAgICAgICBsdW5yLnV0aWxzLmNsb25lKG1ldGFkYXRhKVxuICAgICAgKVxuICAgIH0pXG4gIH1cblxuICB2YXIgc3RyID0gb2JqLnRvU3RyaW5nKCkudHJpbSgpLnRvTG93ZXJDYXNlKCksXG4gICAgICBsZW4gPSBzdHIubGVuZ3RoLFxuICAgICAgdG9rZW5zID0gW11cblxuICBmb3IgKHZhciBzbGljZUVuZCA9IDAsIHNsaWNlU3RhcnQgPSAwOyBzbGljZUVuZCA8PSBsZW47IHNsaWNlRW5kKyspIHtcbiAgICB2YXIgY2hhciA9IHN0ci5jaGFyQXQoc2xpY2VFbmQpLFxuICAgICAgICBzbGljZUxlbmd0aCA9IHNsaWNlRW5kIC0gc2xpY2VTdGFydFxuXG4gICAgaWYgKChjaGFyLm1hdGNoKGx1bnIudG9rZW5pemVyLnNlcGFyYXRvcikgfHwgc2xpY2VFbmQgPT0gbGVuKSkge1xuXG4gICAgICBpZiAoc2xpY2VMZW5ndGggPiAwKSB7XG4gICAgICAgIHZhciB0b2tlbk1ldGFkYXRhID0gbHVuci51dGlscy5jbG9uZShtZXRhZGF0YSkgfHwge31cbiAgICAgICAgdG9rZW5NZXRhZGF0YVtcInBvc2l0aW9uXCJdID0gW3NsaWNlU3RhcnQsIHNsaWNlTGVuZ3RoXVxuICAgICAgICB0b2tlbk1ldGFkYXRhW1wiaW5kZXhcIl0gPSB0b2tlbnMubGVuZ3RoXG5cbiAgICAgICAgdG9rZW5zLnB1c2goXG4gICAgICAgICAgbmV3IGx1bnIuVG9rZW4gKFxuICAgICAgICAgICAgc3RyLnNsaWNlKHNsaWNlU3RhcnQsIHNsaWNlRW5kKSxcbiAgICAgICAgICAgIHRva2VuTWV0YWRhdGFcbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgc2xpY2VTdGFydCA9IHNsaWNlRW5kICsgMVxuICAgIH1cblxuICB9XG5cbiAgcmV0dXJuIHRva2Vuc1xufVxuXG4vKipcbiAqIFRoZSBzZXBhcmF0b3IgdXNlZCB0byBzcGxpdCBhIHN0cmluZyBpbnRvIHRva2Vucy4gT3ZlcnJpZGUgdGhpcyBwcm9wZXJ0eSB0byBjaGFuZ2UgdGhlIGJlaGF2aW91ciBvZlxuICogYGx1bnIudG9rZW5pemVyYCBiZWhhdmlvdXIgd2hlbiB0b2tlbml6aW5nIHN0cmluZ3MuIEJ5IGRlZmF1bHQgdGhpcyBzcGxpdHMgb24gd2hpdGVzcGFjZSBhbmQgaHlwaGVucy5cbiAqXG4gKiBAc3RhdGljXG4gKiBAc2VlIGx1bnIudG9rZW5pemVyXG4gKi9cbmx1bnIudG9rZW5pemVyLnNlcGFyYXRvciA9IC9bXFxzXFwtXSsvXG4vKiFcbiAqIGx1bnIuUGlwZWxpbmVcbiAqIENvcHlyaWdodCAoQykgMjAxOCBPbGl2ZXIgTmlnaHRpbmdhbGVcbiAqL1xuXG4vKipcbiAqIGx1bnIuUGlwZWxpbmVzIG1haW50YWluIGFuIG9yZGVyZWQgbGlzdCBvZiBmdW5jdGlvbnMgdG8gYmUgYXBwbGllZCB0byBhbGxcbiAqIHRva2VucyBpbiBkb2N1bWVudHMgZW50ZXJpbmcgdGhlIHNlYXJjaCBpbmRleCBhbmQgcXVlcmllcyBiZWluZyByYW4gYWdhaW5zdFxuICogdGhlIGluZGV4LlxuICpcbiAqIEFuIGluc3RhbmNlIG9mIGx1bnIuSW5kZXggY3JlYXRlZCB3aXRoIHRoZSBsdW5yIHNob3J0Y3V0IHdpbGwgY29udGFpbiBhXG4gKiBwaXBlbGluZSB3aXRoIGEgc3RvcCB3b3JkIGZpbHRlciBhbmQgYW4gRW5nbGlzaCBsYW5ndWFnZSBzdGVtbWVyLiBFeHRyYVxuICogZnVuY3Rpb25zIGNhbiBiZSBhZGRlZCBiZWZvcmUgb3IgYWZ0ZXIgZWl0aGVyIG9mIHRoZXNlIGZ1bmN0aW9ucyBvciB0aGVzZVxuICogZGVmYXVsdCBmdW5jdGlvbnMgY2FuIGJlIHJlbW92ZWQuXG4gKlxuICogV2hlbiBydW4gdGhlIHBpcGVsaW5lIHdpbGwgY2FsbCBlYWNoIGZ1bmN0aW9uIGluIHR1cm4sIHBhc3NpbmcgYSB0b2tlbiwgdGhlXG4gKiBpbmRleCBvZiB0aGF0IHRva2VuIGluIHRoZSBvcmlnaW5hbCBsaXN0IG9mIGFsbCB0b2tlbnMgYW5kIGZpbmFsbHkgYSBsaXN0IG9mXG4gKiBhbGwgdGhlIG9yaWdpbmFsIHRva2Vucy5cbiAqXG4gKiBUaGUgb3V0cHV0IG9mIGZ1bmN0aW9ucyBpbiB0aGUgcGlwZWxpbmUgd2lsbCBiZSBwYXNzZWQgdG8gdGhlIG5leHQgZnVuY3Rpb25cbiAqIGluIHRoZSBwaXBlbGluZS4gVG8gZXhjbHVkZSBhIHRva2VuIGZyb20gZW50ZXJpbmcgdGhlIGluZGV4IHRoZSBmdW5jdGlvblxuICogc2hvdWxkIHJldHVybiB1bmRlZmluZWQsIHRoZSByZXN0IG9mIHRoZSBwaXBlbGluZSB3aWxsIG5vdCBiZSBjYWxsZWQgd2l0aFxuICogdGhpcyB0b2tlbi5cbiAqXG4gKiBGb3Igc2VyaWFsaXNhdGlvbiBvZiBwaXBlbGluZXMgdG8gd29yaywgYWxsIGZ1bmN0aW9ucyB1c2VkIGluIGFuIGluc3RhbmNlIG9mXG4gKiBhIHBpcGVsaW5lIHNob3VsZCBiZSByZWdpc3RlcmVkIHdpdGggbHVuci5QaXBlbGluZS4gUmVnaXN0ZXJlZCBmdW5jdGlvbnMgY2FuXG4gKiB0aGVuIGJlIGxvYWRlZC4gSWYgdHJ5aW5nIHRvIGxvYWQgYSBzZXJpYWxpc2VkIHBpcGVsaW5lIHRoYXQgdXNlcyBmdW5jdGlvbnNcbiAqIHRoYXQgYXJlIG5vdCByZWdpc3RlcmVkIGFuIGVycm9yIHdpbGwgYmUgdGhyb3duLlxuICpcbiAqIElmIG5vdCBwbGFubmluZyBvbiBzZXJpYWxpc2luZyB0aGUgcGlwZWxpbmUgdGhlbiByZWdpc3RlcmluZyBwaXBlbGluZSBmdW5jdGlvbnNcbiAqIGlzIG5vdCBuZWNlc3NhcnkuXG4gKlxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmx1bnIuUGlwZWxpbmUgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuX3N0YWNrID0gW11cbn1cblxubHVuci5QaXBlbGluZS5yZWdpc3RlcmVkRnVuY3Rpb25zID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuXG4vKipcbiAqIEEgcGlwZWxpbmUgZnVuY3Rpb24gbWFwcyBsdW5yLlRva2VuIHRvIGx1bnIuVG9rZW4uIEEgbHVuci5Ub2tlbiBjb250YWlucyB0aGUgdG9rZW5cbiAqIHN0cmluZyBhcyB3ZWxsIGFzIGFsbCBrbm93biBtZXRhZGF0YS4gQSBwaXBlbGluZSBmdW5jdGlvbiBjYW4gbXV0YXRlIHRoZSB0b2tlbiBzdHJpbmdcbiAqIG9yIG11dGF0ZSAob3IgYWRkKSBtZXRhZGF0YSBmb3IgYSBnaXZlbiB0b2tlbi5cbiAqXG4gKiBBIHBpcGVsaW5lIGZ1bmN0aW9uIGNhbiBpbmRpY2F0ZSB0aGF0IHRoZSBwYXNzZWQgdG9rZW4gc2hvdWxkIGJlIGRpc2NhcmRlZCBieSByZXR1cm5pbmdcbiAqIG51bGwuIFRoaXMgdG9rZW4gd2lsbCBub3QgYmUgcGFzc2VkIHRvIGFueSBkb3duc3RyZWFtIHBpcGVsaW5lIGZ1bmN0aW9ucyBhbmQgd2lsbCBub3QgYmVcbiAqIGFkZGVkIHRvIHRoZSBpbmRleC5cbiAqXG4gKiBNdWx0aXBsZSB0b2tlbnMgY2FuIGJlIHJldHVybmVkIGJ5IHJldHVybmluZyBhbiBhcnJheSBvZiB0b2tlbnMuIEVhY2ggdG9rZW4gd2lsbCBiZSBwYXNzZWRcbiAqIHRvIGFueSBkb3duc3RyZWFtIHBpcGVsaW5lIGZ1bmN0aW9ucyBhbmQgYWxsIHdpbGwgcmV0dXJuZWQgdG9rZW5zIHdpbGwgYmUgYWRkZWQgdG8gdGhlIGluZGV4LlxuICpcbiAqIEFueSBudW1iZXIgb2YgcGlwZWxpbmUgZnVuY3Rpb25zIG1heSBiZSBjaGFpbmVkIHRvZ2V0aGVyIHVzaW5nIGEgbHVuci5QaXBlbGluZS5cbiAqXG4gKiBAaW50ZXJmYWNlIGx1bnIuUGlwZWxpbmVGdW5jdGlvblxuICogQHBhcmFtIHtsdW5yLlRva2VufSB0b2tlbiAtIEEgdG9rZW4gZnJvbSB0aGUgZG9jdW1lbnQgYmVpbmcgcHJvY2Vzc2VkLlxuICogQHBhcmFtIHtudW1iZXJ9IGkgLSBUaGUgaW5kZXggb2YgdGhpcyB0b2tlbiBpbiB0aGUgY29tcGxldGUgbGlzdCBvZiB0b2tlbnMgZm9yIHRoaXMgZG9jdW1lbnQvZmllbGQuXG4gKiBAcGFyYW0ge2x1bnIuVG9rZW5bXX0gdG9rZW5zIC0gQWxsIHRva2VucyBmb3IgdGhpcyBkb2N1bWVudC9maWVsZC5cbiAqIEByZXR1cm5zIHsoP2x1bnIuVG9rZW58bHVuci5Ub2tlbltdKX1cbiAqL1xuXG4vKipcbiAqIFJlZ2lzdGVyIGEgZnVuY3Rpb24gd2l0aCB0aGUgcGlwZWxpbmUuXG4gKlxuICogRnVuY3Rpb25zIHRoYXQgYXJlIHVzZWQgaW4gdGhlIHBpcGVsaW5lIHNob3VsZCBiZSByZWdpc3RlcmVkIGlmIHRoZSBwaXBlbGluZVxuICogbmVlZHMgdG8gYmUgc2VyaWFsaXNlZCwgb3IgYSBzZXJpYWxpc2VkIHBpcGVsaW5lIG5lZWRzIHRvIGJlIGxvYWRlZC5cbiAqXG4gKiBSZWdpc3RlcmluZyBhIGZ1bmN0aW9uIGRvZXMgbm90IGFkZCBpdCB0byBhIHBpcGVsaW5lLCBmdW5jdGlvbnMgbXVzdCBzdGlsbCBiZVxuICogYWRkZWQgdG8gaW5zdGFuY2VzIG9mIHRoZSBwaXBlbGluZSBmb3IgdGhlbSB0byBiZSB1c2VkIHdoZW4gcnVubmluZyBhIHBpcGVsaW5lLlxuICpcbiAqIEBwYXJhbSB7bHVuci5QaXBlbGluZUZ1bmN0aW9ufSBmbiAtIFRoZSBmdW5jdGlvbiB0byBjaGVjayBmb3IuXG4gKiBAcGFyYW0ge1N0cmluZ30gbGFiZWwgLSBUaGUgbGFiZWwgdG8gcmVnaXN0ZXIgdGhpcyBmdW5jdGlvbiB3aXRoXG4gKi9cbmx1bnIuUGlwZWxpbmUucmVnaXN0ZXJGdW5jdGlvbiA9IGZ1bmN0aW9uIChmbiwgbGFiZWwpIHtcbiAgaWYgKGxhYmVsIGluIHRoaXMucmVnaXN0ZXJlZEZ1bmN0aW9ucykge1xuICAgIGx1bnIudXRpbHMud2FybignT3ZlcndyaXRpbmcgZXhpc3RpbmcgcmVnaXN0ZXJlZCBmdW5jdGlvbjogJyArIGxhYmVsKVxuICB9XG5cbiAgZm4ubGFiZWwgPSBsYWJlbFxuICBsdW5yLlBpcGVsaW5lLnJlZ2lzdGVyZWRGdW5jdGlvbnNbZm4ubGFiZWxdID0gZm5cbn1cblxuLyoqXG4gKiBXYXJucyBpZiB0aGUgZnVuY3Rpb24gaXMgbm90IHJlZ2lzdGVyZWQgYXMgYSBQaXBlbGluZSBmdW5jdGlvbi5cbiAqXG4gKiBAcGFyYW0ge2x1bnIuUGlwZWxpbmVGdW5jdGlvbn0gZm4gLSBUaGUgZnVuY3Rpb24gdG8gY2hlY2sgZm9yLlxuICogQHByaXZhdGVcbiAqL1xubHVuci5QaXBlbGluZS53YXJuSWZGdW5jdGlvbk5vdFJlZ2lzdGVyZWQgPSBmdW5jdGlvbiAoZm4pIHtcbiAgdmFyIGlzUmVnaXN0ZXJlZCA9IGZuLmxhYmVsICYmIChmbi5sYWJlbCBpbiB0aGlzLnJlZ2lzdGVyZWRGdW5jdGlvbnMpXG5cbiAgaWYgKCFpc1JlZ2lzdGVyZWQpIHtcbiAgICBsdW5yLnV0aWxzLndhcm4oJ0Z1bmN0aW9uIGlzIG5vdCByZWdpc3RlcmVkIHdpdGggcGlwZWxpbmUuIFRoaXMgbWF5IGNhdXNlIHByb2JsZW1zIHdoZW4gc2VyaWFsaXNpbmcgdGhlIGluZGV4LlxcbicsIGZuKVxuICB9XG59XG5cbi8qKlxuICogTG9hZHMgYSBwcmV2aW91c2x5IHNlcmlhbGlzZWQgcGlwZWxpbmUuXG4gKlxuICogQWxsIGZ1bmN0aW9ucyB0byBiZSBsb2FkZWQgbXVzdCBhbHJlYWR5IGJlIHJlZ2lzdGVyZWQgd2l0aCBsdW5yLlBpcGVsaW5lLlxuICogSWYgYW55IGZ1bmN0aW9uIGZyb20gdGhlIHNlcmlhbGlzZWQgZGF0YSBoYXMgbm90IGJlZW4gcmVnaXN0ZXJlZCB0aGVuIGFuXG4gKiBlcnJvciB3aWxsIGJlIHRocm93bi5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gc2VyaWFsaXNlZCAtIFRoZSBzZXJpYWxpc2VkIHBpcGVsaW5lIHRvIGxvYWQuXG4gKiBAcmV0dXJucyB7bHVuci5QaXBlbGluZX1cbiAqL1xubHVuci5QaXBlbGluZS5sb2FkID0gZnVuY3Rpb24gKHNlcmlhbGlzZWQpIHtcbiAgdmFyIHBpcGVsaW5lID0gbmV3IGx1bnIuUGlwZWxpbmVcblxuICBzZXJpYWxpc2VkLmZvckVhY2goZnVuY3Rpb24gKGZuTmFtZSkge1xuICAgIHZhciBmbiA9IGx1bnIuUGlwZWxpbmUucmVnaXN0ZXJlZEZ1bmN0aW9uc1tmbk5hbWVdXG5cbiAgICBpZiAoZm4pIHtcbiAgICAgIHBpcGVsaW5lLmFkZChmbilcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgbG9hZCB1bnJlZ2lzdGVyZWQgZnVuY3Rpb246ICcgKyBmbk5hbWUpXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiBwaXBlbGluZVxufVxuXG4vKipcbiAqIEFkZHMgbmV3IGZ1bmN0aW9ucyB0byB0aGUgZW5kIG9mIHRoZSBwaXBlbGluZS5cbiAqXG4gKiBMb2dzIGEgd2FybmluZyBpZiB0aGUgZnVuY3Rpb24gaGFzIG5vdCBiZWVuIHJlZ2lzdGVyZWQuXG4gKlxuICogQHBhcmFtIHtsdW5yLlBpcGVsaW5lRnVuY3Rpb25bXX0gZnVuY3Rpb25zIC0gQW55IG51bWJlciBvZiBmdW5jdGlvbnMgdG8gYWRkIHRvIHRoZSBwaXBlbGluZS5cbiAqL1xubHVuci5QaXBlbGluZS5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24gKCkge1xuICB2YXIgZm5zID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKVxuXG4gIGZucy5mb3JFYWNoKGZ1bmN0aW9uIChmbikge1xuICAgIGx1bnIuUGlwZWxpbmUud2FybklmRnVuY3Rpb25Ob3RSZWdpc3RlcmVkKGZuKVxuICAgIHRoaXMuX3N0YWNrLnB1c2goZm4pXG4gIH0sIHRoaXMpXG59XG5cbi8qKlxuICogQWRkcyBhIHNpbmdsZSBmdW5jdGlvbiBhZnRlciBhIGZ1bmN0aW9uIHRoYXQgYWxyZWFkeSBleGlzdHMgaW4gdGhlXG4gKiBwaXBlbGluZS5cbiAqXG4gKiBMb2dzIGEgd2FybmluZyBpZiB0aGUgZnVuY3Rpb24gaGFzIG5vdCBiZWVuIHJlZ2lzdGVyZWQuXG4gKlxuICogQHBhcmFtIHtsdW5yLlBpcGVsaW5lRnVuY3Rpb259IGV4aXN0aW5nRm4gLSBBIGZ1bmN0aW9uIHRoYXQgYWxyZWFkeSBleGlzdHMgaW4gdGhlIHBpcGVsaW5lLlxuICogQHBhcmFtIHtsdW5yLlBpcGVsaW5lRnVuY3Rpb259IG5ld0ZuIC0gVGhlIG5ldyBmdW5jdGlvbiB0byBhZGQgdG8gdGhlIHBpcGVsaW5lLlxuICovXG5sdW5yLlBpcGVsaW5lLnByb3RvdHlwZS5hZnRlciA9IGZ1bmN0aW9uIChleGlzdGluZ0ZuLCBuZXdGbikge1xuICBsdW5yLlBpcGVsaW5lLndhcm5JZkZ1bmN0aW9uTm90UmVnaXN0ZXJlZChuZXdGbilcblxuICB2YXIgcG9zID0gdGhpcy5fc3RhY2suaW5kZXhPZihleGlzdGluZ0ZuKVxuICBpZiAocG9zID09IC0xKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgZmluZCBleGlzdGluZ0ZuJylcbiAgfVxuXG4gIHBvcyA9IHBvcyArIDFcbiAgdGhpcy5fc3RhY2suc3BsaWNlKHBvcywgMCwgbmV3Rm4pXG59XG5cbi8qKlxuICogQWRkcyBhIHNpbmdsZSBmdW5jdGlvbiBiZWZvcmUgYSBmdW5jdGlvbiB0aGF0IGFscmVhZHkgZXhpc3RzIGluIHRoZVxuICogcGlwZWxpbmUuXG4gKlxuICogTG9ncyBhIHdhcm5pbmcgaWYgdGhlIGZ1bmN0aW9uIGhhcyBub3QgYmVlbiByZWdpc3RlcmVkLlxuICpcbiAqIEBwYXJhbSB7bHVuci5QaXBlbGluZUZ1bmN0aW9ufSBleGlzdGluZ0ZuIC0gQSBmdW5jdGlvbiB0aGF0IGFscmVhZHkgZXhpc3RzIGluIHRoZSBwaXBlbGluZS5cbiAqIEBwYXJhbSB7bHVuci5QaXBlbGluZUZ1bmN0aW9ufSBuZXdGbiAtIFRoZSBuZXcgZnVuY3Rpb24gdG8gYWRkIHRvIHRoZSBwaXBlbGluZS5cbiAqL1xubHVuci5QaXBlbGluZS5wcm90b3R5cGUuYmVmb3JlID0gZnVuY3Rpb24gKGV4aXN0aW5nRm4sIG5ld0ZuKSB7XG4gIGx1bnIuUGlwZWxpbmUud2FybklmRnVuY3Rpb25Ob3RSZWdpc3RlcmVkKG5ld0ZuKVxuXG4gIHZhciBwb3MgPSB0aGlzLl9zdGFjay5pbmRleE9mKGV4aXN0aW5nRm4pXG4gIGlmIChwb3MgPT0gLTEpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBmaW5kIGV4aXN0aW5nRm4nKVxuICB9XG5cbiAgdGhpcy5fc3RhY2suc3BsaWNlKHBvcywgMCwgbmV3Rm4pXG59XG5cbi8qKlxuICogUmVtb3ZlcyBhIGZ1bmN0aW9uIGZyb20gdGhlIHBpcGVsaW5lLlxuICpcbiAqIEBwYXJhbSB7bHVuci5QaXBlbGluZUZ1bmN0aW9ufSBmbiBUaGUgZnVuY3Rpb24gdG8gcmVtb3ZlIGZyb20gdGhlIHBpcGVsaW5lLlxuICovXG5sdW5yLlBpcGVsaW5lLnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbiAoZm4pIHtcbiAgdmFyIHBvcyA9IHRoaXMuX3N0YWNrLmluZGV4T2YoZm4pXG4gIGlmIChwb3MgPT0gLTEpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIHRoaXMuX3N0YWNrLnNwbGljZShwb3MsIDEpXG59XG5cbi8qKlxuICogUnVucyB0aGUgY3VycmVudCBsaXN0IG9mIGZ1bmN0aW9ucyB0aGF0IG1ha2UgdXAgdGhlIHBpcGVsaW5lIGFnYWluc3QgdGhlXG4gKiBwYXNzZWQgdG9rZW5zLlxuICpcbiAqIEBwYXJhbSB7QXJyYXl9IHRva2VucyBUaGUgdG9rZW5zIHRvIHJ1biB0aHJvdWdoIHRoZSBwaXBlbGluZS5cbiAqIEByZXR1cm5zIHtBcnJheX1cbiAqL1xubHVuci5QaXBlbGluZS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKHRva2Vucykge1xuICB2YXIgc3RhY2tMZW5ndGggPSB0aGlzLl9zdGFjay5sZW5ndGhcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0YWNrTGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZm4gPSB0aGlzLl9zdGFja1tpXVxuICAgIHZhciBtZW1vID0gW11cblxuICAgIGZvciAodmFyIGogPSAwOyBqIDwgdG9rZW5zLmxlbmd0aDsgaisrKSB7XG4gICAgICB2YXIgcmVzdWx0ID0gZm4odG9rZW5zW2pdLCBqLCB0b2tlbnMpXG5cbiAgICAgIGlmIChyZXN1bHQgPT09IHZvaWQgMCB8fCByZXN1bHQgPT09ICcnKSBjb250aW51ZVxuXG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShyZXN1bHQpKSB7XG4gICAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgcmVzdWx0Lmxlbmd0aDsgaysrKSB7XG4gICAgICAgICAgbWVtby5wdXNoKHJlc3VsdFtrXSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbWVtby5wdXNoKHJlc3VsdClcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0b2tlbnMgPSBtZW1vXG4gIH1cblxuICByZXR1cm4gdG9rZW5zXG59XG5cbi8qKlxuICogQ29udmVuaWVuY2UgbWV0aG9kIGZvciBwYXNzaW5nIGEgc3RyaW5nIHRocm91Z2ggYSBwaXBlbGluZSBhbmQgZ2V0dGluZ1xuICogc3RyaW5ncyBvdXQuIFRoaXMgbWV0aG9kIHRha2VzIGNhcmUgb2Ygd3JhcHBpbmcgdGhlIHBhc3NlZCBzdHJpbmcgaW4gYVxuICogdG9rZW4gYW5kIG1hcHBpbmcgdGhlIHJlc3VsdGluZyB0b2tlbnMgYmFjayB0byBzdHJpbmdzLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHIgLSBUaGUgc3RyaW5nIHRvIHBhc3MgdGhyb3VnaCB0aGUgcGlwZWxpbmUuXG4gKiBAcGFyYW0gez9vYmplY3R9IG1ldGFkYXRhIC0gT3B0aW9uYWwgbWV0YWRhdGEgdG8gYXNzb2NpYXRlIHdpdGggdGhlIHRva2VuXG4gKiBwYXNzZWQgdG8gdGhlIHBpcGVsaW5lLlxuICogQHJldHVybnMge3N0cmluZ1tdfVxuICovXG5sdW5yLlBpcGVsaW5lLnByb3RvdHlwZS5ydW5TdHJpbmcgPSBmdW5jdGlvbiAoc3RyLCBtZXRhZGF0YSkge1xuICB2YXIgdG9rZW4gPSBuZXcgbHVuci5Ub2tlbiAoc3RyLCBtZXRhZGF0YSlcblxuICByZXR1cm4gdGhpcy5ydW4oW3Rva2VuXSkubWFwKGZ1bmN0aW9uICh0KSB7XG4gICAgcmV0dXJuIHQudG9TdHJpbmcoKVxuICB9KVxufVxuXG4vKipcbiAqIFJlc2V0cyB0aGUgcGlwZWxpbmUgYnkgcmVtb3ZpbmcgYW55IGV4aXN0aW5nIHByb2Nlc3NvcnMuXG4gKlxuICovXG5sdW5yLlBpcGVsaW5lLnByb3RvdHlwZS5yZXNldCA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5fc3RhY2sgPSBbXVxufVxuXG4vKipcbiAqIFJldHVybnMgYSByZXByZXNlbnRhdGlvbiBvZiB0aGUgcGlwZWxpbmUgcmVhZHkgZm9yIHNlcmlhbGlzYXRpb24uXG4gKlxuICogTG9ncyBhIHdhcm5pbmcgaWYgdGhlIGZ1bmN0aW9uIGhhcyBub3QgYmVlbiByZWdpc3RlcmVkLlxuICpcbiAqIEByZXR1cm5zIHtBcnJheX1cbiAqL1xubHVuci5QaXBlbGluZS5wcm90b3R5cGUudG9KU09OID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5fc3RhY2subWFwKGZ1bmN0aW9uIChmbikge1xuICAgIGx1bnIuUGlwZWxpbmUud2FybklmRnVuY3Rpb25Ob3RSZWdpc3RlcmVkKGZuKVxuXG4gICAgcmV0dXJuIGZuLmxhYmVsXG4gIH0pXG59XG4vKiFcbiAqIGx1bnIuVmVjdG9yXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTggT2xpdmVyIE5pZ2h0aW5nYWxlXG4gKi9cblxuLyoqXG4gKiBBIHZlY3RvciBpcyB1c2VkIHRvIGNvbnN0cnVjdCB0aGUgdmVjdG9yIHNwYWNlIG9mIGRvY3VtZW50cyBhbmQgcXVlcmllcy4gVGhlc2VcbiAqIHZlY3RvcnMgc3VwcG9ydCBvcGVyYXRpb25zIHRvIGRldGVybWluZSB0aGUgc2ltaWxhcml0eSBiZXR3ZWVuIHR3byBkb2N1bWVudHMgb3JcbiAqIGEgZG9jdW1lbnQgYW5kIGEgcXVlcnkuXG4gKlxuICogTm9ybWFsbHkgbm8gcGFyYW1ldGVycyBhcmUgcmVxdWlyZWQgZm9yIGluaXRpYWxpemluZyBhIHZlY3RvciwgYnV0IGluIHRoZSBjYXNlIG9mXG4gKiBsb2FkaW5nIGEgcHJldmlvdXNseSBkdW1wZWQgdmVjdG9yIHRoZSByYXcgZWxlbWVudHMgY2FuIGJlIHByb3ZpZGVkIHRvIHRoZSBjb25zdHJ1Y3Rvci5cbiAqXG4gKiBGb3IgcGVyZm9ybWFuY2UgcmVhc29ucyB2ZWN0b3JzIGFyZSBpbXBsZW1lbnRlZCB3aXRoIGEgZmxhdCBhcnJheSwgd2hlcmUgYW4gZWxlbWVudHNcbiAqIGluZGV4IGlzIGltbWVkaWF0ZWx5IGZvbGxvd2VkIGJ5IGl0cyB2YWx1ZS4gRS5nLiBbaW5kZXgsIHZhbHVlLCBpbmRleCwgdmFsdWVdLiBUaGlzXG4gKiBhbGxvd3MgdGhlIHVuZGVybHlpbmcgYXJyYXkgdG8gYmUgYXMgc3BhcnNlIGFzIHBvc3NpYmxlIGFuZCBzdGlsbCBvZmZlciBkZWNlbnRcbiAqIHBlcmZvcm1hbmNlIHdoZW4gYmVpbmcgdXNlZCBmb3IgdmVjdG9yIGNhbGN1bGF0aW9ucy5cbiAqXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7TnVtYmVyW119IFtlbGVtZW50c10gLSBUaGUgZmxhdCBsaXN0IG9mIGVsZW1lbnQgaW5kZXggYW5kIGVsZW1lbnQgdmFsdWUgcGFpcnMuXG4gKi9cbmx1bnIuVmVjdG9yID0gZnVuY3Rpb24gKGVsZW1lbnRzKSB7XG4gIHRoaXMuX21hZ25pdHVkZSA9IDBcbiAgdGhpcy5lbGVtZW50cyA9IGVsZW1lbnRzIHx8IFtdXG59XG5cblxuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBwb3NpdGlvbiB3aXRoaW4gdGhlIHZlY3RvciB0byBpbnNlcnQgYSBnaXZlbiBpbmRleC5cbiAqXG4gKiBUaGlzIGlzIHVzZWQgaW50ZXJuYWxseSBieSBpbnNlcnQgYW5kIHVwc2VydC4gSWYgdGhlcmUgYXJlIGR1cGxpY2F0ZSBpbmRleGVzIHRoZW5cbiAqIHRoZSBwb3NpdGlvbiBpcyByZXR1cm5lZCBhcyBpZiB0aGUgdmFsdWUgZm9yIHRoYXQgaW5kZXggd2VyZSB0byBiZSB1cGRhdGVkLCBidXQgaXRcbiAqIGlzIHRoZSBjYWxsZXJzIHJlc3BvbnNpYmlsaXR5IHRvIGNoZWNrIHdoZXRoZXIgdGhlcmUgaXMgYSBkdXBsaWNhdGUgYXQgdGhhdCBpbmRleFxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBpbnNlcnRJZHggLSBUaGUgaW5kZXggYXQgd2hpY2ggdGhlIGVsZW1lbnQgc2hvdWxkIGJlIGluc2VydGVkLlxuICogQHJldHVybnMge051bWJlcn1cbiAqL1xubHVuci5WZWN0b3IucHJvdG90eXBlLnBvc2l0aW9uRm9ySW5kZXggPSBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgLy8gRm9yIGFuIGVtcHR5IHZlY3RvciB0aGUgdHVwbGUgY2FuIGJlIGluc2VydGVkIGF0IHRoZSBiZWdpbm5pbmdcbiAgaWYgKHRoaXMuZWxlbWVudHMubGVuZ3RoID09IDApIHtcbiAgICByZXR1cm4gMFxuICB9XG5cbiAgdmFyIHN0YXJ0ID0gMCxcbiAgICAgIGVuZCA9IHRoaXMuZWxlbWVudHMubGVuZ3RoIC8gMixcbiAgICAgIHNsaWNlTGVuZ3RoID0gZW5kIC0gc3RhcnQsXG4gICAgICBwaXZvdFBvaW50ID0gTWF0aC5mbG9vcihzbGljZUxlbmd0aCAvIDIpLFxuICAgICAgcGl2b3RJbmRleCA9IHRoaXMuZWxlbWVudHNbcGl2b3RQb2ludCAqIDJdXG5cbiAgd2hpbGUgKHNsaWNlTGVuZ3RoID4gMSkge1xuICAgIGlmIChwaXZvdEluZGV4IDwgaW5kZXgpIHtcbiAgICAgIHN0YXJ0ID0gcGl2b3RQb2ludFxuICAgIH1cblxuICAgIGlmIChwaXZvdEluZGV4ID4gaW5kZXgpIHtcbiAgICAgIGVuZCA9IHBpdm90UG9pbnRcbiAgICB9XG5cbiAgICBpZiAocGl2b3RJbmRleCA9PSBpbmRleCkge1xuICAgICAgYnJlYWtcbiAgICB9XG5cbiAgICBzbGljZUxlbmd0aCA9IGVuZCAtIHN0YXJ0XG4gICAgcGl2b3RQb2ludCA9IHN0YXJ0ICsgTWF0aC5mbG9vcihzbGljZUxlbmd0aCAvIDIpXG4gICAgcGl2b3RJbmRleCA9IHRoaXMuZWxlbWVudHNbcGl2b3RQb2ludCAqIDJdXG4gIH1cblxuICBpZiAocGl2b3RJbmRleCA9PSBpbmRleCkge1xuICAgIHJldHVybiBwaXZvdFBvaW50ICogMlxuICB9XG5cbiAgaWYgKHBpdm90SW5kZXggPiBpbmRleCkge1xuICAgIHJldHVybiBwaXZvdFBvaW50ICogMlxuICB9XG5cbiAgaWYgKHBpdm90SW5kZXggPCBpbmRleCkge1xuICAgIHJldHVybiAocGl2b3RQb2ludCArIDEpICogMlxuICB9XG59XG5cbi8qKlxuICogSW5zZXJ0cyBhbiBlbGVtZW50IGF0IGFuIGluZGV4IHdpdGhpbiB0aGUgdmVjdG9yLlxuICpcbiAqIERvZXMgbm90IGFsbG93IGR1cGxpY2F0ZXMsIHdpbGwgdGhyb3cgYW4gZXJyb3IgaWYgdGhlcmUgaXMgYWxyZWFkeSBhbiBlbnRyeVxuICogZm9yIHRoaXMgaW5kZXguXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IGluc2VydElkeCAtIFRoZSBpbmRleCBhdCB3aGljaCB0aGUgZWxlbWVudCBzaG91bGQgYmUgaW5zZXJ0ZWQuXG4gKiBAcGFyYW0ge051bWJlcn0gdmFsIC0gVGhlIHZhbHVlIHRvIGJlIGluc2VydGVkIGludG8gdGhlIHZlY3Rvci5cbiAqL1xubHVuci5WZWN0b3IucHJvdG90eXBlLmluc2VydCA9IGZ1bmN0aW9uIChpbnNlcnRJZHgsIHZhbCkge1xuICB0aGlzLnVwc2VydChpbnNlcnRJZHgsIHZhbCwgZnVuY3Rpb24gKCkge1xuICAgIHRocm93IFwiZHVwbGljYXRlIGluZGV4XCJcbiAgfSlcbn1cblxuLyoqXG4gKiBJbnNlcnRzIG9yIHVwZGF0ZXMgYW4gZXhpc3RpbmcgaW5kZXggd2l0aGluIHRoZSB2ZWN0b3IuXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IGluc2VydElkeCAtIFRoZSBpbmRleCBhdCB3aGljaCB0aGUgZWxlbWVudCBzaG91bGQgYmUgaW5zZXJ0ZWQuXG4gKiBAcGFyYW0ge051bWJlcn0gdmFsIC0gVGhlIHZhbHVlIHRvIGJlIGluc2VydGVkIGludG8gdGhlIHZlY3Rvci5cbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuIC0gQSBmdW5jdGlvbiB0aGF0IGlzIGNhbGxlZCBmb3IgdXBkYXRlcywgdGhlIGV4aXN0aW5nIHZhbHVlIGFuZCB0aGVcbiAqIHJlcXVlc3RlZCB2YWx1ZSBhcmUgcGFzc2VkIGFzIGFyZ3VtZW50c1xuICovXG5sdW5yLlZlY3Rvci5wcm90b3R5cGUudXBzZXJ0ID0gZnVuY3Rpb24gKGluc2VydElkeCwgdmFsLCBmbikge1xuICB0aGlzLl9tYWduaXR1ZGUgPSAwXG4gIHZhciBwb3NpdGlvbiA9IHRoaXMucG9zaXRpb25Gb3JJbmRleChpbnNlcnRJZHgpXG5cbiAgaWYgKHRoaXMuZWxlbWVudHNbcG9zaXRpb25dID09IGluc2VydElkeCkge1xuICAgIHRoaXMuZWxlbWVudHNbcG9zaXRpb24gKyAxXSA9IGZuKHRoaXMuZWxlbWVudHNbcG9zaXRpb24gKyAxXSwgdmFsKVxuICB9IGVsc2Uge1xuICAgIHRoaXMuZWxlbWVudHMuc3BsaWNlKHBvc2l0aW9uLCAwLCBpbnNlcnRJZHgsIHZhbClcbiAgfVxufVxuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIG1hZ25pdHVkZSBvZiB0aGlzIHZlY3Rvci5cbiAqXG4gKiBAcmV0dXJucyB7TnVtYmVyfVxuICovXG5sdW5yLlZlY3Rvci5wcm90b3R5cGUubWFnbml0dWRlID0gZnVuY3Rpb24gKCkge1xuICBpZiAodGhpcy5fbWFnbml0dWRlKSByZXR1cm4gdGhpcy5fbWFnbml0dWRlXG5cbiAgdmFyIHN1bU9mU3F1YXJlcyA9IDAsXG4gICAgICBlbGVtZW50c0xlbmd0aCA9IHRoaXMuZWxlbWVudHMubGVuZ3RoXG5cbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBlbGVtZW50c0xlbmd0aDsgaSArPSAyKSB7XG4gICAgdmFyIHZhbCA9IHRoaXMuZWxlbWVudHNbaV1cbiAgICBzdW1PZlNxdWFyZXMgKz0gdmFsICogdmFsXG4gIH1cblxuICByZXR1cm4gdGhpcy5fbWFnbml0dWRlID0gTWF0aC5zcXJ0KHN1bU9mU3F1YXJlcylcbn1cblxuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBkb3QgcHJvZHVjdCBvZiB0aGlzIHZlY3RvciBhbmQgYW5vdGhlciB2ZWN0b3IuXG4gKlxuICogQHBhcmFtIHtsdW5yLlZlY3Rvcn0gb3RoZXJWZWN0b3IgLSBUaGUgdmVjdG9yIHRvIGNvbXB1dGUgdGhlIGRvdCBwcm9kdWN0IHdpdGguXG4gKiBAcmV0dXJucyB7TnVtYmVyfVxuICovXG5sdW5yLlZlY3Rvci5wcm90b3R5cGUuZG90ID0gZnVuY3Rpb24gKG90aGVyVmVjdG9yKSB7XG4gIHZhciBkb3RQcm9kdWN0ID0gMCxcbiAgICAgIGEgPSB0aGlzLmVsZW1lbnRzLCBiID0gb3RoZXJWZWN0b3IuZWxlbWVudHMsXG4gICAgICBhTGVuID0gYS5sZW5ndGgsIGJMZW4gPSBiLmxlbmd0aCxcbiAgICAgIGFWYWwgPSAwLCBiVmFsID0gMCxcbiAgICAgIGkgPSAwLCBqID0gMFxuXG4gIHdoaWxlIChpIDwgYUxlbiAmJiBqIDwgYkxlbikge1xuICAgIGFWYWwgPSBhW2ldLCBiVmFsID0gYltqXVxuICAgIGlmIChhVmFsIDwgYlZhbCkge1xuICAgICAgaSArPSAyXG4gICAgfSBlbHNlIGlmIChhVmFsID4gYlZhbCkge1xuICAgICAgaiArPSAyXG4gICAgfSBlbHNlIGlmIChhVmFsID09IGJWYWwpIHtcbiAgICAgIGRvdFByb2R1Y3QgKz0gYVtpICsgMV0gKiBiW2ogKyAxXVxuICAgICAgaSArPSAyXG4gICAgICBqICs9IDJcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZG90UHJvZHVjdFxufVxuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIHNpbWlsYXJpdHkgYmV0d2VlbiB0aGlzIHZlY3RvciBhbmQgYW5vdGhlciB2ZWN0b3IuXG4gKlxuICogQHBhcmFtIHtsdW5yLlZlY3Rvcn0gb3RoZXJWZWN0b3IgLSBUaGUgb3RoZXIgdmVjdG9yIHRvIGNhbGN1bGF0ZSB0aGVcbiAqIHNpbWlsYXJpdHkgd2l0aC5cbiAqIEByZXR1cm5zIHtOdW1iZXJ9XG4gKi9cbmx1bnIuVmVjdG9yLnByb3RvdHlwZS5zaW1pbGFyaXR5ID0gZnVuY3Rpb24gKG90aGVyVmVjdG9yKSB7XG4gIHJldHVybiB0aGlzLmRvdChvdGhlclZlY3RvcikgLyB0aGlzLm1hZ25pdHVkZSgpIHx8IDBcbn1cblxuLyoqXG4gKiBDb252ZXJ0cyB0aGUgdmVjdG9yIHRvIGFuIGFycmF5IG9mIHRoZSBlbGVtZW50cyB3aXRoaW4gdGhlIHZlY3Rvci5cbiAqXG4gKiBAcmV0dXJucyB7TnVtYmVyW119XG4gKi9cbmx1bnIuVmVjdG9yLnByb3RvdHlwZS50b0FycmF5ID0gZnVuY3Rpb24gKCkge1xuICB2YXIgb3V0cHV0ID0gbmV3IEFycmF5ICh0aGlzLmVsZW1lbnRzLmxlbmd0aCAvIDIpXG5cbiAgZm9yICh2YXIgaSA9IDEsIGogPSAwOyBpIDwgdGhpcy5lbGVtZW50cy5sZW5ndGg7IGkgKz0gMiwgaisrKSB7XG4gICAgb3V0cHV0W2pdID0gdGhpcy5lbGVtZW50c1tpXVxuICB9XG5cbiAgcmV0dXJuIG91dHB1dFxufVxuXG4vKipcbiAqIEEgSlNPTiBzZXJpYWxpemFibGUgcmVwcmVzZW50YXRpb24gb2YgdGhlIHZlY3Rvci5cbiAqXG4gKiBAcmV0dXJucyB7TnVtYmVyW119XG4gKi9cbmx1bnIuVmVjdG9yLnByb3RvdHlwZS50b0pTT04gPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLmVsZW1lbnRzXG59XG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xuLyohXG4gKiBsdW5yLnN0ZW1tZXJcbiAqIENvcHlyaWdodCAoQykgMjAxOCBPbGl2ZXIgTmlnaHRpbmdhbGVcbiAqIEluY2x1ZGVzIGNvZGUgZnJvbSAtIGh0dHA6Ly90YXJ0YXJ1cy5vcmcvfm1hcnRpbi9Qb3J0ZXJTdGVtbWVyL2pzLnR4dFxuICovXG5cbi8qKlxuICogbHVuci5zdGVtbWVyIGlzIGFuIGVuZ2xpc2ggbGFuZ3VhZ2Ugc3RlbW1lciwgdGhpcyBpcyBhIEphdmFTY3JpcHRcbiAqIGltcGxlbWVudGF0aW9uIG9mIHRoZSBQb3J0ZXJTdGVtbWVyIHRha2VuIGZyb20gaHR0cDovL3RhcnRhcnVzLm9yZy9+bWFydGluXG4gKlxuICogQHN0YXRpY1xuICogQGltcGxlbWVudHMge2x1bnIuUGlwZWxpbmVGdW5jdGlvbn1cbiAqIEBwYXJhbSB7bHVuci5Ub2tlbn0gdG9rZW4gLSBUaGUgc3RyaW5nIHRvIHN0ZW1cbiAqIEByZXR1cm5zIHtsdW5yLlRva2VufVxuICogQHNlZSB7QGxpbmsgbHVuci5QaXBlbGluZX1cbiAqIEBmdW5jdGlvblxuICovXG5sdW5yLnN0ZW1tZXIgPSAoZnVuY3Rpb24oKXtcbiAgdmFyIHN0ZXAybGlzdCA9IHtcbiAgICAgIFwiYXRpb25hbFwiIDogXCJhdGVcIixcbiAgICAgIFwidGlvbmFsXCIgOiBcInRpb25cIixcbiAgICAgIFwiZW5jaVwiIDogXCJlbmNlXCIsXG4gICAgICBcImFuY2lcIiA6IFwiYW5jZVwiLFxuICAgICAgXCJpemVyXCIgOiBcIml6ZVwiLFxuICAgICAgXCJibGlcIiA6IFwiYmxlXCIsXG4gICAgICBcImFsbGlcIiA6IFwiYWxcIixcbiAgICAgIFwiZW50bGlcIiA6IFwiZW50XCIsXG4gICAgICBcImVsaVwiIDogXCJlXCIsXG4gICAgICBcIm91c2xpXCIgOiBcIm91c1wiLFxuICAgICAgXCJpemF0aW9uXCIgOiBcIml6ZVwiLFxuICAgICAgXCJhdGlvblwiIDogXCJhdGVcIixcbiAgICAgIFwiYXRvclwiIDogXCJhdGVcIixcbiAgICAgIFwiYWxpc21cIiA6IFwiYWxcIixcbiAgICAgIFwiaXZlbmVzc1wiIDogXCJpdmVcIixcbiAgICAgIFwiZnVsbmVzc1wiIDogXCJmdWxcIixcbiAgICAgIFwib3VzbmVzc1wiIDogXCJvdXNcIixcbiAgICAgIFwiYWxpdGlcIiA6IFwiYWxcIixcbiAgICAgIFwiaXZpdGlcIiA6IFwiaXZlXCIsXG4gICAgICBcImJpbGl0aVwiIDogXCJibGVcIixcbiAgICAgIFwibG9naVwiIDogXCJsb2dcIlxuICAgIH0sXG5cbiAgICBzdGVwM2xpc3QgPSB7XG4gICAgICBcImljYXRlXCIgOiBcImljXCIsXG4gICAgICBcImF0aXZlXCIgOiBcIlwiLFxuICAgICAgXCJhbGl6ZVwiIDogXCJhbFwiLFxuICAgICAgXCJpY2l0aVwiIDogXCJpY1wiLFxuICAgICAgXCJpY2FsXCIgOiBcImljXCIsXG4gICAgICBcImZ1bFwiIDogXCJcIixcbiAgICAgIFwibmVzc1wiIDogXCJcIlxuICAgIH0sXG5cbiAgICBjID0gXCJbXmFlaW91XVwiLCAgICAgICAgICAvLyBjb25zb25hbnRcbiAgICB2ID0gXCJbYWVpb3V5XVwiLCAgICAgICAgICAvLyB2b3dlbFxuICAgIEMgPSBjICsgXCJbXmFlaW91eV0qXCIsICAgIC8vIGNvbnNvbmFudCBzZXF1ZW5jZVxuICAgIFYgPSB2ICsgXCJbYWVpb3VdKlwiLCAgICAgIC8vIHZvd2VsIHNlcXVlbmNlXG5cbiAgICBtZ3IwID0gXCJeKFwiICsgQyArIFwiKT9cIiArIFYgKyBDLCAgICAgICAgICAgICAgIC8vIFtDXVZDLi4uIGlzIG0+MFxuICAgIG1lcTEgPSBcIl4oXCIgKyBDICsgXCIpP1wiICsgViArIEMgKyBcIihcIiArIFYgKyBcIik/JFwiLCAgLy8gW0NdVkNbVl0gaXMgbT0xXG4gICAgbWdyMSA9IFwiXihcIiArIEMgKyBcIik/XCIgKyBWICsgQyArIFYgKyBDLCAgICAgICAvLyBbQ11WQ1ZDLi4uIGlzIG0+MVxuICAgIHNfdiA9IFwiXihcIiArIEMgKyBcIik/XCIgKyB2OyAgICAgICAgICAgICAgICAgICAvLyB2b3dlbCBpbiBzdGVtXG5cbiAgdmFyIHJlX21ncjAgPSBuZXcgUmVnRXhwKG1ncjApO1xuICB2YXIgcmVfbWdyMSA9IG5ldyBSZWdFeHAobWdyMSk7XG4gIHZhciByZV9tZXExID0gbmV3IFJlZ0V4cChtZXExKTtcbiAgdmFyIHJlX3NfdiA9IG5ldyBSZWdFeHAoc192KTtcblxuICB2YXIgcmVfMWEgPSAvXiguKz8pKHNzfGkpZXMkLztcbiAgdmFyIHJlMl8xYSA9IC9eKC4rPykoW15zXSlzJC87XG4gIHZhciByZV8xYiA9IC9eKC4rPyllZWQkLztcbiAgdmFyIHJlMl8xYiA9IC9eKC4rPykoZWR8aW5nKSQvO1xuICB2YXIgcmVfMWJfMiA9IC8uJC87XG4gIHZhciByZTJfMWJfMiA9IC8oYXR8Ymx8aXopJC87XG4gIHZhciByZTNfMWJfMiA9IG5ldyBSZWdFeHAoXCIoW15hZWlvdXlsc3pdKVxcXFwxJFwiKTtcbiAgdmFyIHJlNF8xYl8yID0gbmV3IFJlZ0V4cChcIl5cIiArIEMgKyB2ICsgXCJbXmFlaW91d3h5XSRcIik7XG5cbiAgdmFyIHJlXzFjID0gL14oLis/W15hZWlvdV0peSQvO1xuICB2YXIgcmVfMiA9IC9eKC4rPykoYXRpb25hbHx0aW9uYWx8ZW5jaXxhbmNpfGl6ZXJ8YmxpfGFsbGl8ZW50bGl8ZWxpfG91c2xpfGl6YXRpb258YXRpb258YXRvcnxhbGlzbXxpdmVuZXNzfGZ1bG5lc3N8b3VzbmVzc3xhbGl0aXxpdml0aXxiaWxpdGl8bG9naSkkLztcblxuICB2YXIgcmVfMyA9IC9eKC4rPykoaWNhdGV8YXRpdmV8YWxpemV8aWNpdGl8aWNhbHxmdWx8bmVzcykkLztcblxuICB2YXIgcmVfNCA9IC9eKC4rPykoYWx8YW5jZXxlbmNlfGVyfGljfGFibGV8aWJsZXxhbnR8ZW1lbnR8bWVudHxlbnR8b3V8aXNtfGF0ZXxpdGl8b3VzfGl2ZXxpemUpJC87XG4gIHZhciByZTJfNCA9IC9eKC4rPykoc3x0KShpb24pJC87XG5cbiAgdmFyIHJlXzUgPSAvXiguKz8pZSQvO1xuICB2YXIgcmVfNV8xID0gL2xsJC87XG4gIHZhciByZTNfNSA9IG5ldyBSZWdFeHAoXCJeXCIgKyBDICsgdiArIFwiW15hZWlvdXd4eV0kXCIpO1xuXG4gIHZhciBwb3J0ZXJTdGVtbWVyID0gZnVuY3Rpb24gcG9ydGVyU3RlbW1lcih3KSB7XG4gICAgdmFyIHN0ZW0sXG4gICAgICBzdWZmaXgsXG4gICAgICBmaXJzdGNoLFxuICAgICAgcmUsXG4gICAgICByZTIsXG4gICAgICByZTMsXG4gICAgICByZTQ7XG5cbiAgICBpZiAody5sZW5ndGggPCAzKSB7IHJldHVybiB3OyB9XG5cbiAgICBmaXJzdGNoID0gdy5zdWJzdHIoMCwxKTtcbiAgICBpZiAoZmlyc3RjaCA9PSBcInlcIikge1xuICAgICAgdyA9IGZpcnN0Y2gudG9VcHBlckNhc2UoKSArIHcuc3Vic3RyKDEpO1xuICAgIH1cblxuICAgIC8vIFN0ZXAgMWFcbiAgICByZSA9IHJlXzFhXG4gICAgcmUyID0gcmUyXzFhO1xuXG4gICAgaWYgKHJlLnRlc3QodykpIHsgdyA9IHcucmVwbGFjZShyZSxcIiQxJDJcIik7IH1cbiAgICBlbHNlIGlmIChyZTIudGVzdCh3KSkgeyB3ID0gdy5yZXBsYWNlKHJlMixcIiQxJDJcIik7IH1cblxuICAgIC8vIFN0ZXAgMWJcbiAgICByZSA9IHJlXzFiO1xuICAgIHJlMiA9IHJlMl8xYjtcbiAgICBpZiAocmUudGVzdCh3KSkge1xuICAgICAgdmFyIGZwID0gcmUuZXhlYyh3KTtcbiAgICAgIHJlID0gcmVfbWdyMDtcbiAgICAgIGlmIChyZS50ZXN0KGZwWzFdKSkge1xuICAgICAgICByZSA9IHJlXzFiXzI7XG4gICAgICAgIHcgPSB3LnJlcGxhY2UocmUsXCJcIik7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChyZTIudGVzdCh3KSkge1xuICAgICAgdmFyIGZwID0gcmUyLmV4ZWModyk7XG4gICAgICBzdGVtID0gZnBbMV07XG4gICAgICByZTIgPSByZV9zX3Y7XG4gICAgICBpZiAocmUyLnRlc3Qoc3RlbSkpIHtcbiAgICAgICAgdyA9IHN0ZW07XG4gICAgICAgIHJlMiA9IHJlMl8xYl8yO1xuICAgICAgICByZTMgPSByZTNfMWJfMjtcbiAgICAgICAgcmU0ID0gcmU0XzFiXzI7XG4gICAgICAgIGlmIChyZTIudGVzdCh3KSkgeyB3ID0gdyArIFwiZVwiOyB9XG4gICAgICAgIGVsc2UgaWYgKHJlMy50ZXN0KHcpKSB7IHJlID0gcmVfMWJfMjsgdyA9IHcucmVwbGFjZShyZSxcIlwiKTsgfVxuICAgICAgICBlbHNlIGlmIChyZTQudGVzdCh3KSkgeyB3ID0gdyArIFwiZVwiOyB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gU3RlcCAxYyAtIHJlcGxhY2Ugc3VmZml4IHkgb3IgWSBieSBpIGlmIHByZWNlZGVkIGJ5IGEgbm9uLXZvd2VsIHdoaWNoIGlzIG5vdCB0aGUgZmlyc3QgbGV0dGVyIG9mIHRoZSB3b3JkIChzbyBjcnkgLT4gY3JpLCBieSAtPiBieSwgc2F5IC0+IHNheSlcbiAgICByZSA9IHJlXzFjO1xuICAgIGlmIChyZS50ZXN0KHcpKSB7XG4gICAgICB2YXIgZnAgPSByZS5leGVjKHcpO1xuICAgICAgc3RlbSA9IGZwWzFdO1xuICAgICAgdyA9IHN0ZW0gKyBcImlcIjtcbiAgICB9XG5cbiAgICAvLyBTdGVwIDJcbiAgICByZSA9IHJlXzI7XG4gICAgaWYgKHJlLnRlc3QodykpIHtcbiAgICAgIHZhciBmcCA9IHJlLmV4ZWModyk7XG4gICAgICBzdGVtID0gZnBbMV07XG4gICAgICBzdWZmaXggPSBmcFsyXTtcbiAgICAgIHJlID0gcmVfbWdyMDtcbiAgICAgIGlmIChyZS50ZXN0KHN0ZW0pKSB7XG4gICAgICAgIHcgPSBzdGVtICsgc3RlcDJsaXN0W3N1ZmZpeF07XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gU3RlcCAzXG4gICAgcmUgPSByZV8zO1xuICAgIGlmIChyZS50ZXN0KHcpKSB7XG4gICAgICB2YXIgZnAgPSByZS5leGVjKHcpO1xuICAgICAgc3RlbSA9IGZwWzFdO1xuICAgICAgc3VmZml4ID0gZnBbMl07XG4gICAgICByZSA9IHJlX21ncjA7XG4gICAgICBpZiAocmUudGVzdChzdGVtKSkge1xuICAgICAgICB3ID0gc3RlbSArIHN0ZXAzbGlzdFtzdWZmaXhdO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFN0ZXAgNFxuICAgIHJlID0gcmVfNDtcbiAgICByZTIgPSByZTJfNDtcbiAgICBpZiAocmUudGVzdCh3KSkge1xuICAgICAgdmFyIGZwID0gcmUuZXhlYyh3KTtcbiAgICAgIHN0ZW0gPSBmcFsxXTtcbiAgICAgIHJlID0gcmVfbWdyMTtcbiAgICAgIGlmIChyZS50ZXN0KHN0ZW0pKSB7XG4gICAgICAgIHcgPSBzdGVtO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAocmUyLnRlc3QodykpIHtcbiAgICAgIHZhciBmcCA9IHJlMi5leGVjKHcpO1xuICAgICAgc3RlbSA9IGZwWzFdICsgZnBbMl07XG4gICAgICByZTIgPSByZV9tZ3IxO1xuICAgICAgaWYgKHJlMi50ZXN0KHN0ZW0pKSB7XG4gICAgICAgIHcgPSBzdGVtO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFN0ZXAgNVxuICAgIHJlID0gcmVfNTtcbiAgICBpZiAocmUudGVzdCh3KSkge1xuICAgICAgdmFyIGZwID0gcmUuZXhlYyh3KTtcbiAgICAgIHN0ZW0gPSBmcFsxXTtcbiAgICAgIHJlID0gcmVfbWdyMTtcbiAgICAgIHJlMiA9IHJlX21lcTE7XG4gICAgICByZTMgPSByZTNfNTtcbiAgICAgIGlmIChyZS50ZXN0KHN0ZW0pIHx8IChyZTIudGVzdChzdGVtKSAmJiAhKHJlMy50ZXN0KHN0ZW0pKSkpIHtcbiAgICAgICAgdyA9IHN0ZW07XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmUgPSByZV81XzE7XG4gICAgcmUyID0gcmVfbWdyMTtcbiAgICBpZiAocmUudGVzdCh3KSAmJiByZTIudGVzdCh3KSkge1xuICAgICAgcmUgPSByZV8xYl8yO1xuICAgICAgdyA9IHcucmVwbGFjZShyZSxcIlwiKTtcbiAgICB9XG5cbiAgICAvLyBhbmQgdHVybiBpbml0aWFsIFkgYmFjayB0byB5XG5cbiAgICBpZiAoZmlyc3RjaCA9PSBcInlcIikge1xuICAgICAgdyA9IGZpcnN0Y2gudG9Mb3dlckNhc2UoKSArIHcuc3Vic3RyKDEpO1xuICAgIH1cblxuICAgIHJldHVybiB3O1xuICB9O1xuXG4gIHJldHVybiBmdW5jdGlvbiAodG9rZW4pIHtcbiAgICByZXR1cm4gdG9rZW4udXBkYXRlKHBvcnRlclN0ZW1tZXIpO1xuICB9XG59KSgpO1xuXG5sdW5yLlBpcGVsaW5lLnJlZ2lzdGVyRnVuY3Rpb24obHVuci5zdGVtbWVyLCAnc3RlbW1lcicpXG4vKiFcbiAqIGx1bnIuc3RvcFdvcmRGaWx0ZXJcbiAqIENvcHlyaWdodCAoQykgMjAxOCBPbGl2ZXIgTmlnaHRpbmdhbGVcbiAqL1xuXG4vKipcbiAqIGx1bnIuZ2VuZXJhdGVTdG9wV29yZEZpbHRlciBidWlsZHMgYSBzdG9wV29yZEZpbHRlciBmdW5jdGlvbiBmcm9tIHRoZSBwcm92aWRlZFxuICogbGlzdCBvZiBzdG9wIHdvcmRzLlxuICpcbiAqIFRoZSBidWlsdCBpbiBsdW5yLnN0b3BXb3JkRmlsdGVyIGlzIGJ1aWx0IHVzaW5nIHRoaXMgZ2VuZXJhdG9yIGFuZCBjYW4gYmUgdXNlZFxuICogdG8gZ2VuZXJhdGUgY3VzdG9tIHN0b3BXb3JkRmlsdGVycyBmb3IgYXBwbGljYXRpb25zIG9yIG5vbiBFbmdsaXNoIGxhbmd1YWdlcy5cbiAqXG4gKiBAZnVuY3Rpb25cbiAqIEBwYXJhbSB7QXJyYXl9IHRva2VuIFRoZSB0b2tlbiB0byBwYXNzIHRocm91Z2ggdGhlIGZpbHRlclxuICogQHJldHVybnMge2x1bnIuUGlwZWxpbmVGdW5jdGlvbn1cbiAqIEBzZWUgbHVuci5QaXBlbGluZVxuICogQHNlZSBsdW5yLnN0b3BXb3JkRmlsdGVyXG4gKi9cbmx1bnIuZ2VuZXJhdGVTdG9wV29yZEZpbHRlciA9IGZ1bmN0aW9uIChzdG9wV29yZHMpIHtcbiAgdmFyIHdvcmRzID0gc3RvcFdvcmRzLnJlZHVjZShmdW5jdGlvbiAobWVtbywgc3RvcFdvcmQpIHtcbiAgICBtZW1vW3N0b3BXb3JkXSA9IHN0b3BXb3JkXG4gICAgcmV0dXJuIG1lbW9cbiAgfSwge30pXG5cbiAgcmV0dXJuIGZ1bmN0aW9uICh0b2tlbikge1xuICAgIGlmICh0b2tlbiAmJiB3b3Jkc1t0b2tlbi50b1N0cmluZygpXSAhPT0gdG9rZW4udG9TdHJpbmcoKSkgcmV0dXJuIHRva2VuXG4gIH1cbn1cblxuLyoqXG4gKiBsdW5yLnN0b3BXb3JkRmlsdGVyIGlzIGFuIEVuZ2xpc2ggbGFuZ3VhZ2Ugc3RvcCB3b3JkIGxpc3QgZmlsdGVyLCBhbnkgd29yZHNcbiAqIGNvbnRhaW5lZCBpbiB0aGUgbGlzdCB3aWxsIG5vdCBiZSBwYXNzZWQgdGhyb3VnaCB0aGUgZmlsdGVyLlxuICpcbiAqIFRoaXMgaXMgaW50ZW5kZWQgdG8gYmUgdXNlZCBpbiB0aGUgUGlwZWxpbmUuIElmIHRoZSB0b2tlbiBkb2VzIG5vdCBwYXNzIHRoZVxuICogZmlsdGVyIHRoZW4gdW5kZWZpbmVkIHdpbGwgYmUgcmV0dXJuZWQuXG4gKlxuICogQGZ1bmN0aW9uXG4gKiBAaW1wbGVtZW50cyB7bHVuci5QaXBlbGluZUZ1bmN0aW9ufVxuICogQHBhcmFtcyB7bHVuci5Ub2tlbn0gdG9rZW4gLSBBIHRva2VuIHRvIGNoZWNrIGZvciBiZWluZyBhIHN0b3Agd29yZC5cbiAqIEByZXR1cm5zIHtsdW5yLlRva2VufVxuICogQHNlZSB7QGxpbmsgbHVuci5QaXBlbGluZX1cbiAqL1xubHVuci5zdG9wV29yZEZpbHRlciA9IGx1bnIuZ2VuZXJhdGVTdG9wV29yZEZpbHRlcihbXG4gICdhJyxcbiAgJ2FibGUnLFxuICAnYWJvdXQnLFxuICAnYWNyb3NzJyxcbiAgJ2FmdGVyJyxcbiAgJ2FsbCcsXG4gICdhbG1vc3QnLFxuICAnYWxzbycsXG4gICdhbScsXG4gICdhbW9uZycsXG4gICdhbicsXG4gICdhbmQnLFxuICAnYW55JyxcbiAgJ2FyZScsXG4gICdhcycsXG4gICdhdCcsXG4gICdiZScsXG4gICdiZWNhdXNlJyxcbiAgJ2JlZW4nLFxuICAnYnV0JyxcbiAgJ2J5JyxcbiAgJ2NhbicsXG4gICdjYW5ub3QnLFxuICAnY291bGQnLFxuICAnZGVhcicsXG4gICdkaWQnLFxuICAnZG8nLFxuICAnZG9lcycsXG4gICdlaXRoZXInLFxuICAnZWxzZScsXG4gICdldmVyJyxcbiAgJ2V2ZXJ5JyxcbiAgJ2ZvcicsXG4gICdmcm9tJyxcbiAgJ2dldCcsXG4gICdnb3QnLFxuICAnaGFkJyxcbiAgJ2hhcycsXG4gICdoYXZlJyxcbiAgJ2hlJyxcbiAgJ2hlcicsXG4gICdoZXJzJyxcbiAgJ2hpbScsXG4gICdoaXMnLFxuICAnaG93JyxcbiAgJ2hvd2V2ZXInLFxuICAnaScsXG4gICdpZicsXG4gICdpbicsXG4gICdpbnRvJyxcbiAgJ2lzJyxcbiAgJ2l0JyxcbiAgJ2l0cycsXG4gICdqdXN0JyxcbiAgJ2xlYXN0JyxcbiAgJ2xldCcsXG4gICdsaWtlJyxcbiAgJ2xpa2VseScsXG4gICdtYXknLFxuICAnbWUnLFxuICAnbWlnaHQnLFxuICAnbW9zdCcsXG4gICdtdXN0JyxcbiAgJ215JyxcbiAgJ25laXRoZXInLFxuICAnbm8nLFxuICAnbm9yJyxcbiAgJ25vdCcsXG4gICdvZicsXG4gICdvZmYnLFxuICAnb2Z0ZW4nLFxuICAnb24nLFxuICAnb25seScsXG4gICdvcicsXG4gICdvdGhlcicsXG4gICdvdXInLFxuICAnb3duJyxcbiAgJ3JhdGhlcicsXG4gICdzYWlkJyxcbiAgJ3NheScsXG4gICdzYXlzJyxcbiAgJ3NoZScsXG4gICdzaG91bGQnLFxuICAnc2luY2UnLFxuICAnc28nLFxuICAnc29tZScsXG4gICd0aGFuJyxcbiAgJ3RoYXQnLFxuICAndGhlJyxcbiAgJ3RoZWlyJyxcbiAgJ3RoZW0nLFxuICAndGhlbicsXG4gICd0aGVyZScsXG4gICd0aGVzZScsXG4gICd0aGV5JyxcbiAgJ3RoaXMnLFxuICAndGlzJyxcbiAgJ3RvJyxcbiAgJ3RvbycsXG4gICd0d2FzJyxcbiAgJ3VzJyxcbiAgJ3dhbnRzJyxcbiAgJ3dhcycsXG4gICd3ZScsXG4gICd3ZXJlJyxcbiAgJ3doYXQnLFxuICAnd2hlbicsXG4gICd3aGVyZScsXG4gICd3aGljaCcsXG4gICd3aGlsZScsXG4gICd3aG8nLFxuICAnd2hvbScsXG4gICd3aHknLFxuICAnd2lsbCcsXG4gICd3aXRoJyxcbiAgJ3dvdWxkJyxcbiAgJ3lldCcsXG4gICd5b3UnLFxuICAneW91cidcbl0pXG5cbmx1bnIuUGlwZWxpbmUucmVnaXN0ZXJGdW5jdGlvbihsdW5yLnN0b3BXb3JkRmlsdGVyLCAnc3RvcFdvcmRGaWx0ZXInKVxuLyohXG4gKiBsdW5yLnRyaW1tZXJcbiAqIENvcHlyaWdodCAoQykgMjAxOCBPbGl2ZXIgTmlnaHRpbmdhbGVcbiAqL1xuXG4vKipcbiAqIGx1bnIudHJpbW1lciBpcyBhIHBpcGVsaW5lIGZ1bmN0aW9uIGZvciB0cmltbWluZyBub24gd29yZFxuICogY2hhcmFjdGVycyBmcm9tIHRoZSBiZWdpbm5pbmcgYW5kIGVuZCBvZiB0b2tlbnMgYmVmb3JlIHRoZXlcbiAqIGVudGVyIHRoZSBpbmRleC5cbiAqXG4gKiBUaGlzIGltcGxlbWVudGF0aW9uIG1heSBub3Qgd29yayBjb3JyZWN0bHkgZm9yIG5vbiBsYXRpblxuICogY2hhcmFjdGVycyBhbmQgc2hvdWxkIGVpdGhlciBiZSByZW1vdmVkIG9yIGFkYXB0ZWQgZm9yIHVzZVxuICogd2l0aCBsYW5ndWFnZXMgd2l0aCBub24tbGF0aW4gY2hhcmFjdGVycy5cbiAqXG4gKiBAc3RhdGljXG4gKiBAaW1wbGVtZW50cyB7bHVuci5QaXBlbGluZUZ1bmN0aW9ufVxuICogQHBhcmFtIHtsdW5yLlRva2VufSB0b2tlbiBUaGUgdG9rZW4gdG8gcGFzcyB0aHJvdWdoIHRoZSBmaWx0ZXJcbiAqIEByZXR1cm5zIHtsdW5yLlRva2VufVxuICogQHNlZSBsdW5yLlBpcGVsaW5lXG4gKi9cbmx1bnIudHJpbW1lciA9IGZ1bmN0aW9uICh0b2tlbikge1xuICByZXR1cm4gdG9rZW4udXBkYXRlKGZ1bmN0aW9uIChzKSB7XG4gICAgcmV0dXJuIHMucmVwbGFjZSgvXlxcVysvLCAnJykucmVwbGFjZSgvXFxXKyQvLCAnJylcbiAgfSlcbn1cblxubHVuci5QaXBlbGluZS5yZWdpc3RlckZ1bmN0aW9uKGx1bnIudHJpbW1lciwgJ3RyaW1tZXInKVxuLyohXG4gKiBsdW5yLlRva2VuU2V0XG4gKiBDb3B5cmlnaHQgKEMpIDIwMTggT2xpdmVyIE5pZ2h0aW5nYWxlXG4gKi9cblxuLyoqXG4gKiBBIHRva2VuIHNldCBpcyB1c2VkIHRvIHN0b3JlIHRoZSB1bmlxdWUgbGlzdCBvZiBhbGwgdG9rZW5zXG4gKiB3aXRoaW4gYW4gaW5kZXguIFRva2VuIHNldHMgYXJlIGFsc28gdXNlZCB0byByZXByZXNlbnQgYW5cbiAqIGluY29taW5nIHF1ZXJ5IHRvIHRoZSBpbmRleCwgdGhpcyBxdWVyeSB0b2tlbiBzZXQgYW5kIGluZGV4XG4gKiB0b2tlbiBzZXQgYXJlIHRoZW4gaW50ZXJzZWN0ZWQgdG8gZmluZCB3aGljaCB0b2tlbnMgdG8gbG9va1xuICogdXAgaW4gdGhlIGludmVydGVkIGluZGV4LlxuICpcbiAqIEEgdG9rZW4gc2V0IGNhbiBob2xkIG11bHRpcGxlIHRva2VucywgYXMgaW4gdGhlIGNhc2Ugb2YgdGhlXG4gKiBpbmRleCB0b2tlbiBzZXQsIG9yIGl0IGNhbiBob2xkIGEgc2luZ2xlIHRva2VuIGFzIGluIHRoZVxuICogY2FzZSBvZiBhIHNpbXBsZSBxdWVyeSB0b2tlbiBzZXQuXG4gKlxuICogQWRkaXRpb25hbGx5IHRva2VuIHNldHMgYXJlIHVzZWQgdG8gcGVyZm9ybSB3aWxkY2FyZCBtYXRjaGluZy5cbiAqIExlYWRpbmcsIGNvbnRhaW5lZCBhbmQgdHJhaWxpbmcgd2lsZGNhcmRzIGFyZSBzdXBwb3J0ZWQsIGFuZFxuICogZnJvbSB0aGlzIGVkaXQgZGlzdGFuY2UgbWF0Y2hpbmcgY2FuIGFsc28gYmUgcHJvdmlkZWQuXG4gKlxuICogVG9rZW4gc2V0cyBhcmUgaW1wbGVtZW50ZWQgYXMgYSBtaW5pbWFsIGZpbml0ZSBzdGF0ZSBhdXRvbWF0YSxcbiAqIHdoZXJlIGJvdGggY29tbW9uIHByZWZpeGVzIGFuZCBzdWZmaXhlcyBhcmUgc2hhcmVkIGJldHdlZW4gdG9rZW5zLlxuICogVGhpcyBoZWxwcyB0byByZWR1Y2UgdGhlIHNwYWNlIHVzZWQgZm9yIHN0b3JpbmcgdGhlIHRva2VuIHNldC5cbiAqXG4gKiBAY29uc3RydWN0b3JcbiAqL1xubHVuci5Ub2tlblNldCA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5maW5hbCA9IGZhbHNlXG4gIHRoaXMuZWRnZXMgPSB7fVxuICB0aGlzLmlkID0gbHVuci5Ub2tlblNldC5fbmV4dElkXG4gIGx1bnIuVG9rZW5TZXQuX25leHRJZCArPSAxXG59XG5cbi8qKlxuICogS2VlcHMgdHJhY2sgb2YgdGhlIG5leHQsIGF1dG8gaW5jcmVtZW50LCBpZGVudGlmaWVyIHRvIGFzc2lnblxuICogdG8gYSBuZXcgdG9rZW5TZXQuXG4gKlxuICogVG9rZW5TZXRzIHJlcXVpcmUgYSB1bmlxdWUgaWRlbnRpZmllciB0byBiZSBjb3JyZWN0bHkgbWluaW1pc2VkLlxuICpcbiAqIEBwcml2YXRlXG4gKi9cbmx1bnIuVG9rZW5TZXQuX25leHRJZCA9IDFcblxuLyoqXG4gKiBDcmVhdGVzIGEgVG9rZW5TZXQgaW5zdGFuY2UgZnJvbSB0aGUgZ2l2ZW4gc29ydGVkIGFycmF5IG9mIHdvcmRzLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nW119IGFyciAtIEEgc29ydGVkIGFycmF5IG9mIHN0cmluZ3MgdG8gY3JlYXRlIHRoZSBzZXQgZnJvbS5cbiAqIEByZXR1cm5zIHtsdW5yLlRva2VuU2V0fVxuICogQHRocm93cyBXaWxsIHRocm93IGFuIGVycm9yIGlmIHRoZSBpbnB1dCBhcnJheSBpcyBub3Qgc29ydGVkLlxuICovXG5sdW5yLlRva2VuU2V0LmZyb21BcnJheSA9IGZ1bmN0aW9uIChhcnIpIHtcbiAgdmFyIGJ1aWxkZXIgPSBuZXcgbHVuci5Ub2tlblNldC5CdWlsZGVyXG5cbiAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGFyci5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIGJ1aWxkZXIuaW5zZXJ0KGFycltpXSlcbiAgfVxuXG4gIGJ1aWxkZXIuZmluaXNoKClcbiAgcmV0dXJuIGJ1aWxkZXIucm9vdFxufVxuXG4vKipcbiAqIENyZWF0ZXMgYSB0b2tlbiBzZXQgZnJvbSBhIHF1ZXJ5IGNsYXVzZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IGNsYXVzZSAtIEEgc2luZ2xlIGNsYXVzZSBmcm9tIGx1bnIuUXVlcnkuXG4gKiBAcGFyYW0ge3N0cmluZ30gY2xhdXNlLnRlcm0gLSBUaGUgcXVlcnkgY2xhdXNlIHRlcm0uXG4gKiBAcGFyYW0ge251bWJlcn0gW2NsYXVzZS5lZGl0RGlzdGFuY2VdIC0gVGhlIG9wdGlvbmFsIGVkaXQgZGlzdGFuY2UgZm9yIHRoZSB0ZXJtLlxuICogQHJldHVybnMge2x1bnIuVG9rZW5TZXR9XG4gKi9cbmx1bnIuVG9rZW5TZXQuZnJvbUNsYXVzZSA9IGZ1bmN0aW9uIChjbGF1c2UpIHtcbiAgaWYgKCdlZGl0RGlzdGFuY2UnIGluIGNsYXVzZSkge1xuICAgIHJldHVybiBsdW5yLlRva2VuU2V0LmZyb21GdXp6eVN0cmluZyhjbGF1c2UudGVybSwgY2xhdXNlLmVkaXREaXN0YW5jZSlcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbHVuci5Ub2tlblNldC5mcm9tU3RyaW5nKGNsYXVzZS50ZXJtKVxuICB9XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIHRva2VuIHNldCByZXByZXNlbnRpbmcgYSBzaW5nbGUgc3RyaW5nIHdpdGggYSBzcGVjaWZpZWRcbiAqIGVkaXQgZGlzdGFuY2UuXG4gKlxuICogSW5zZXJ0aW9ucywgZGVsZXRpb25zLCBzdWJzdGl0dXRpb25zIGFuZCB0cmFuc3Bvc2l0aW9ucyBhcmUgZWFjaFxuICogdHJlYXRlZCBhcyBhbiBlZGl0IGRpc3RhbmNlIG9mIDEuXG4gKlxuICogSW5jcmVhc2luZyB0aGUgYWxsb3dlZCBlZGl0IGRpc3RhbmNlIHdpbGwgaGF2ZSBhIGRyYW1hdGljIGltcGFjdFxuICogb24gdGhlIHBlcmZvcm1hbmNlIG9mIGJvdGggY3JlYXRpbmcgYW5kIGludGVyc2VjdGluZyB0aGVzZSBUb2tlblNldHMuXG4gKiBJdCBpcyBhZHZpc2VkIHRvIGtlZXAgdGhlIGVkaXQgZGlzdGFuY2UgbGVzcyB0aGFuIDMuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHN0ciAtIFRoZSBzdHJpbmcgdG8gY3JlYXRlIHRoZSB0b2tlbiBzZXQgZnJvbS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBlZGl0RGlzdGFuY2UgLSBUaGUgYWxsb3dlZCBlZGl0IGRpc3RhbmNlIHRvIG1hdGNoLlxuICogQHJldHVybnMge2x1bnIuVmVjdG9yfVxuICovXG5sdW5yLlRva2VuU2V0LmZyb21GdXp6eVN0cmluZyA9IGZ1bmN0aW9uIChzdHIsIGVkaXREaXN0YW5jZSkge1xuICB2YXIgcm9vdCA9IG5ldyBsdW5yLlRva2VuU2V0XG5cbiAgdmFyIHN0YWNrID0gW3tcbiAgICBub2RlOiByb290LFxuICAgIGVkaXRzUmVtYWluaW5nOiBlZGl0RGlzdGFuY2UsXG4gICAgc3RyOiBzdHJcbiAgfV1cblxuICB3aGlsZSAoc3RhY2subGVuZ3RoKSB7XG4gICAgdmFyIGZyYW1lID0gc3RhY2sucG9wKClcblxuICAgIC8vIG5vIGVkaXRcbiAgICBpZiAoZnJhbWUuc3RyLmxlbmd0aCA+IDApIHtcbiAgICAgIHZhciBjaGFyID0gZnJhbWUuc3RyLmNoYXJBdCgwKSxcbiAgICAgICAgICBub0VkaXROb2RlXG5cbiAgICAgIGlmIChjaGFyIGluIGZyYW1lLm5vZGUuZWRnZXMpIHtcbiAgICAgICAgbm9FZGl0Tm9kZSA9IGZyYW1lLm5vZGUuZWRnZXNbY2hhcl1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5vRWRpdE5vZGUgPSBuZXcgbHVuci5Ub2tlblNldFxuICAgICAgICBmcmFtZS5ub2RlLmVkZ2VzW2NoYXJdID0gbm9FZGl0Tm9kZVxuICAgICAgfVxuXG4gICAgICBpZiAoZnJhbWUuc3RyLmxlbmd0aCA9PSAxKSB7XG4gICAgICAgIG5vRWRpdE5vZGUuZmluYWwgPSB0cnVlXG4gICAgICB9XG5cbiAgICAgIHN0YWNrLnB1c2goe1xuICAgICAgICBub2RlOiBub0VkaXROb2RlLFxuICAgICAgICBlZGl0c1JlbWFpbmluZzogZnJhbWUuZWRpdHNSZW1haW5pbmcsXG4gICAgICAgIHN0cjogZnJhbWUuc3RyLnNsaWNlKDEpXG4gICAgICB9KVxuICAgIH1cblxuICAgIC8vIGRlbGV0aW9uXG4gICAgLy8gY2FuIG9ubHkgZG8gYSBkZWxldGlvbiBpZiB3ZSBoYXZlIGVub3VnaCBlZGl0cyByZW1haW5pbmdcbiAgICAvLyBhbmQgaWYgdGhlcmUgYXJlIGNoYXJhY3RlcnMgbGVmdCB0byBkZWxldGUgaW4gdGhlIHN0cmluZ1xuICAgIGlmIChmcmFtZS5lZGl0c1JlbWFpbmluZyA+IDAgJiYgZnJhbWUuc3RyLmxlbmd0aCA+IDEpIHtcbiAgICAgIHZhciBjaGFyID0gZnJhbWUuc3RyLmNoYXJBdCgxKSxcbiAgICAgICAgICBkZWxldGlvbk5vZGVcblxuICAgICAgaWYgKGNoYXIgaW4gZnJhbWUubm9kZS5lZGdlcykge1xuICAgICAgICBkZWxldGlvbk5vZGUgPSBmcmFtZS5ub2RlLmVkZ2VzW2NoYXJdXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkZWxldGlvbk5vZGUgPSBuZXcgbHVuci5Ub2tlblNldFxuICAgICAgICBmcmFtZS5ub2RlLmVkZ2VzW2NoYXJdID0gZGVsZXRpb25Ob2RlXG4gICAgICB9XG5cbiAgICAgIGlmIChmcmFtZS5zdHIubGVuZ3RoIDw9IDIpIHtcbiAgICAgICAgZGVsZXRpb25Ob2RlLmZpbmFsID0gdHJ1ZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3RhY2sucHVzaCh7XG4gICAgICAgICAgbm9kZTogZGVsZXRpb25Ob2RlLFxuICAgICAgICAgIGVkaXRzUmVtYWluaW5nOiBmcmFtZS5lZGl0c1JlbWFpbmluZyAtIDEsXG4gICAgICAgICAgc3RyOiBmcmFtZS5zdHIuc2xpY2UoMilcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBkZWxldGlvblxuICAgIC8vIGp1c3QgcmVtb3ZpbmcgdGhlIGxhc3QgY2hhcmFjdGVyIGZyb20gdGhlIHN0clxuICAgIGlmIChmcmFtZS5lZGl0c1JlbWFpbmluZyA+IDAgJiYgZnJhbWUuc3RyLmxlbmd0aCA9PSAxKSB7XG4gICAgICBmcmFtZS5ub2RlLmZpbmFsID0gdHJ1ZVxuICAgIH1cblxuICAgIC8vIHN1YnN0aXR1dGlvblxuICAgIC8vIGNhbiBvbmx5IGRvIGEgc3Vic3RpdHV0aW9uIGlmIHdlIGhhdmUgZW5vdWdoIGVkaXRzIHJlbWFpbmluZ1xuICAgIC8vIGFuZCBpZiB0aGVyZSBhcmUgY2hhcmFjdGVycyBsZWZ0IHRvIHN1YnN0aXR1dGVcbiAgICBpZiAoZnJhbWUuZWRpdHNSZW1haW5pbmcgPiAwICYmIGZyYW1lLnN0ci5sZW5ndGggPj0gMSkge1xuICAgICAgaWYgKFwiKlwiIGluIGZyYW1lLm5vZGUuZWRnZXMpIHtcbiAgICAgICAgdmFyIHN1YnN0aXR1dGlvbk5vZGUgPSBmcmFtZS5ub2RlLmVkZ2VzW1wiKlwiXVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHN1YnN0aXR1dGlvbk5vZGUgPSBuZXcgbHVuci5Ub2tlblNldFxuICAgICAgICBmcmFtZS5ub2RlLmVkZ2VzW1wiKlwiXSA9IHN1YnN0aXR1dGlvbk5vZGVcbiAgICAgIH1cblxuICAgICAgaWYgKGZyYW1lLnN0ci5sZW5ndGggPT0gMSkge1xuICAgICAgICBzdWJzdGl0dXRpb25Ob2RlLmZpbmFsID0gdHJ1ZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3RhY2sucHVzaCh7XG4gICAgICAgICAgbm9kZTogc3Vic3RpdHV0aW9uTm9kZSxcbiAgICAgICAgICBlZGl0c1JlbWFpbmluZzogZnJhbWUuZWRpdHNSZW1haW5pbmcgLSAxLFxuICAgICAgICAgIHN0cjogZnJhbWUuc3RyLnNsaWNlKDEpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gaW5zZXJ0aW9uXG4gICAgLy8gY2FuIG9ubHkgZG8gaW5zZXJ0aW9uIGlmIHRoZXJlIGFyZSBlZGl0cyByZW1haW5pbmdcbiAgICBpZiAoZnJhbWUuZWRpdHNSZW1haW5pbmcgPiAwKSB7XG4gICAgICBpZiAoXCIqXCIgaW4gZnJhbWUubm9kZS5lZGdlcykge1xuICAgICAgICB2YXIgaW5zZXJ0aW9uTm9kZSA9IGZyYW1lLm5vZGUuZWRnZXNbXCIqXCJdXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgaW5zZXJ0aW9uTm9kZSA9IG5ldyBsdW5yLlRva2VuU2V0XG4gICAgICAgIGZyYW1lLm5vZGUuZWRnZXNbXCIqXCJdID0gaW5zZXJ0aW9uTm9kZVxuICAgICAgfVxuXG4gICAgICBpZiAoZnJhbWUuc3RyLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgIGluc2VydGlvbk5vZGUuZmluYWwgPSB0cnVlXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdGFjay5wdXNoKHtcbiAgICAgICAgICBub2RlOiBpbnNlcnRpb25Ob2RlLFxuICAgICAgICAgIGVkaXRzUmVtYWluaW5nOiBmcmFtZS5lZGl0c1JlbWFpbmluZyAtIDEsXG4gICAgICAgICAgc3RyOiBmcmFtZS5zdHJcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyB0cmFuc3Bvc2l0aW9uXG4gICAgLy8gY2FuIG9ubHkgZG8gYSB0cmFuc3Bvc2l0aW9uIGlmIHRoZXJlIGFyZSBlZGl0cyByZW1haW5pbmdcbiAgICAvLyBhbmQgdGhlcmUgYXJlIGVub3VnaCBjaGFyYWN0ZXJzIHRvIHRyYW5zcG9zZVxuICAgIGlmIChmcmFtZS5lZGl0c1JlbWFpbmluZyA+IDAgJiYgZnJhbWUuc3RyLmxlbmd0aCA+IDEpIHtcbiAgICAgIHZhciBjaGFyQSA9IGZyYW1lLnN0ci5jaGFyQXQoMCksXG4gICAgICAgICAgY2hhckIgPSBmcmFtZS5zdHIuY2hhckF0KDEpLFxuICAgICAgICAgIHRyYW5zcG9zZU5vZGVcblxuICAgICAgaWYgKGNoYXJCIGluIGZyYW1lLm5vZGUuZWRnZXMpIHtcbiAgICAgICAgdHJhbnNwb3NlTm9kZSA9IGZyYW1lLm5vZGUuZWRnZXNbY2hhckJdXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0cmFuc3Bvc2VOb2RlID0gbmV3IGx1bnIuVG9rZW5TZXRcbiAgICAgICAgZnJhbWUubm9kZS5lZGdlc1tjaGFyQl0gPSB0cmFuc3Bvc2VOb2RlXG4gICAgICB9XG5cbiAgICAgIGlmIChmcmFtZS5zdHIubGVuZ3RoID09IDEpIHtcbiAgICAgICAgdHJhbnNwb3NlTm9kZS5maW5hbCA9IHRydWVcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN0YWNrLnB1c2goe1xuICAgICAgICAgIG5vZGU6IHRyYW5zcG9zZU5vZGUsXG4gICAgICAgICAgZWRpdHNSZW1haW5pbmc6IGZyYW1lLmVkaXRzUmVtYWluaW5nIC0gMSxcbiAgICAgICAgICBzdHI6IGNoYXJBICsgZnJhbWUuc3RyLnNsaWNlKDIpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJvb3Rcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgVG9rZW5TZXQgZnJvbSBhIHN0cmluZy5cbiAqXG4gKiBUaGUgc3RyaW5nIG1heSBjb250YWluIG9uZSBvciBtb3JlIHdpbGRjYXJkIGNoYXJhY3RlcnMgKCopXG4gKiB0aGF0IHdpbGwgYWxsb3cgd2lsZGNhcmQgbWF0Y2hpbmcgd2hlbiBpbnRlcnNlY3Rpbmcgd2l0aFxuICogYW5vdGhlciBUb2tlblNldC5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyIC0gVGhlIHN0cmluZyB0byBjcmVhdGUgYSBUb2tlblNldCBmcm9tLlxuICogQHJldHVybnMge2x1bnIuVG9rZW5TZXR9XG4gKi9cbmx1bnIuVG9rZW5TZXQuZnJvbVN0cmluZyA9IGZ1bmN0aW9uIChzdHIpIHtcbiAgdmFyIG5vZGUgPSBuZXcgbHVuci5Ub2tlblNldCxcbiAgICAgIHJvb3QgPSBub2RlXG5cbiAgLypcbiAgICogSXRlcmF0ZXMgdGhyb3VnaCBhbGwgY2hhcmFjdGVycyB3aXRoaW4gdGhlIHBhc3NlZCBzdHJpbmdcbiAgICogYXBwZW5kaW5nIGEgbm9kZSBmb3IgZWFjaCBjaGFyYWN0ZXIuXG4gICAqXG4gICAqIFdoZW4gYSB3aWxkY2FyZCBjaGFyYWN0ZXIgaXMgZm91bmQgdGhlbiBhIHNlbGZcbiAgICogcmVmZXJlbmNpbmcgZWRnZSBpcyBpbnRyb2R1Y2VkIHRvIGNvbnRpbnVhbGx5IG1hdGNoXG4gICAqIGFueSBudW1iZXIgb2YgYW55IGNoYXJhY3RlcnMuXG4gICAqL1xuICBmb3IgKHZhciBpID0gMCwgbGVuID0gc3RyLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgdmFyIGNoYXIgPSBzdHJbaV0sXG4gICAgICAgIGZpbmFsID0gKGkgPT0gbGVuIC0gMSlcblxuICAgIGlmIChjaGFyID09IFwiKlwiKSB7XG4gICAgICBub2RlLmVkZ2VzW2NoYXJdID0gbm9kZVxuICAgICAgbm9kZS5maW5hbCA9IGZpbmFsXG5cbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIG5leHQgPSBuZXcgbHVuci5Ub2tlblNldFxuICAgICAgbmV4dC5maW5hbCA9IGZpbmFsXG5cbiAgICAgIG5vZGUuZWRnZXNbY2hhcl0gPSBuZXh0XG4gICAgICBub2RlID0gbmV4dFxuICAgIH1cbiAgfVxuXG4gIHJldHVybiByb290XG59XG5cbi8qKlxuICogQ29udmVydHMgdGhpcyBUb2tlblNldCBpbnRvIGFuIGFycmF5IG9mIHN0cmluZ3NcbiAqIGNvbnRhaW5lZCB3aXRoaW4gdGhlIFRva2VuU2V0LlxuICpcbiAqIEByZXR1cm5zIHtzdHJpbmdbXX1cbiAqL1xubHVuci5Ub2tlblNldC5wcm90b3R5cGUudG9BcnJheSA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIHdvcmRzID0gW11cblxuICB2YXIgc3RhY2sgPSBbe1xuICAgIHByZWZpeDogXCJcIixcbiAgICBub2RlOiB0aGlzXG4gIH1dXG5cbiAgd2hpbGUgKHN0YWNrLmxlbmd0aCkge1xuICAgIHZhciBmcmFtZSA9IHN0YWNrLnBvcCgpLFxuICAgICAgICBlZGdlcyA9IE9iamVjdC5rZXlzKGZyYW1lLm5vZGUuZWRnZXMpLFxuICAgICAgICBsZW4gPSBlZGdlcy5sZW5ndGhcblxuICAgIGlmIChmcmFtZS5ub2RlLmZpbmFsKSB7XG4gICAgICAvKiBJbiBTYWZhcmksIGF0IHRoaXMgcG9pbnQgdGhlIHByZWZpeCBpcyBzb21ldGltZXMgY29ycnVwdGVkLCBzZWU6XG4gICAgICAgKiBodHRwczovL2dpdGh1Yi5jb20vb2xpdmVybm4vbHVuci5qcy9pc3N1ZXMvMjc5IENhbGxpbmcgYW55XG4gICAgICAgKiBTdHJpbmcucHJvdG90eXBlIG1ldGhvZCBmb3JjZXMgU2FmYXJpIHRvIFwiY2FzdFwiIHRoaXMgc3RyaW5nIHRvIHdoYXRcbiAgICAgICAqIGl0J3Mgc3VwcG9zZWQgdG8gYmUsIGZpeGluZyB0aGUgYnVnLiAqL1xuICAgICAgZnJhbWUucHJlZml4LmNoYXJBdCgwKVxuICAgICAgd29yZHMucHVzaChmcmFtZS5wcmVmaXgpXG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgdmFyIGVkZ2UgPSBlZGdlc1tpXVxuXG4gICAgICBzdGFjay5wdXNoKHtcbiAgICAgICAgcHJlZml4OiBmcmFtZS5wcmVmaXguY29uY2F0KGVkZ2UpLFxuICAgICAgICBub2RlOiBmcmFtZS5ub2RlLmVkZ2VzW2VkZ2VdXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB3b3Jkc1xufVxuXG4vKipcbiAqIEdlbmVyYXRlcyBhIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiBhIFRva2VuU2V0LlxuICpcbiAqIFRoaXMgaXMgaW50ZW5kZWQgdG8gYWxsb3cgVG9rZW5TZXRzIHRvIGJlIHVzZWQgYXMga2V5c1xuICogaW4gb2JqZWN0cywgbGFyZ2VseSB0byBhaWQgdGhlIGNvbnN0cnVjdGlvbiBhbmQgbWluaW1pc2F0aW9uXG4gKiBvZiBhIFRva2VuU2V0LiBBcyBzdWNoIGl0IGlzIG5vdCBkZXNpZ25lZCB0byBiZSBhIGh1bWFuXG4gKiBmcmllbmRseSByZXByZXNlbnRhdGlvbiBvZiB0aGUgVG9rZW5TZXQuXG4gKlxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xubHVuci5Ub2tlblNldC5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gIC8vIE5PVEU6IFVzaW5nIE9iamVjdC5rZXlzIGhlcmUgYXMgdGhpcy5lZGdlcyBpcyB2ZXJ5IGxpa2VseVxuICAvLyB0byBlbnRlciAnaGFzaC1tb2RlJyB3aXRoIG1hbnkga2V5cyBiZWluZyBhZGRlZFxuICAvL1xuICAvLyBhdm9pZGluZyBhIGZvci1pbiBsb29wIGhlcmUgYXMgaXQgbGVhZHMgdG8gdGhlIGZ1bmN0aW9uXG4gIC8vIGJlaW5nIGRlLW9wdGltaXNlZCAoYXQgbGVhc3QgaW4gVjgpLiBGcm9tIHNvbWUgc2ltcGxlXG4gIC8vIGJlbmNobWFya3MgdGhlIHBlcmZvcm1hbmNlIGlzIGNvbXBhcmFibGUsIGJ1dCBhbGxvd2luZ1xuICAvLyBWOCB0byBvcHRpbWl6ZSBtYXkgbWVhbiBlYXN5IHBlcmZvcm1hbmNlIHdpbnMgaW4gdGhlIGZ1dHVyZS5cblxuICBpZiAodGhpcy5fc3RyKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N0clxuICB9XG5cbiAgdmFyIHN0ciA9IHRoaXMuZmluYWwgPyAnMScgOiAnMCcsXG4gICAgICBsYWJlbHMgPSBPYmplY3Qua2V5cyh0aGlzLmVkZ2VzKS5zb3J0KCksXG4gICAgICBsZW4gPSBsYWJlbHMubGVuZ3RoXG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgIHZhciBsYWJlbCA9IGxhYmVsc1tpXSxcbiAgICAgICAgbm9kZSA9IHRoaXMuZWRnZXNbbGFiZWxdXG5cbiAgICBzdHIgPSBzdHIgKyBsYWJlbCArIG5vZGUuaWRcbiAgfVxuXG4gIHJldHVybiBzdHJcbn1cblxuLyoqXG4gKiBSZXR1cm5zIGEgbmV3IFRva2VuU2V0IHRoYXQgaXMgdGhlIGludGVyc2VjdGlvbiBvZlxuICogdGhpcyBUb2tlblNldCBhbmQgdGhlIHBhc3NlZCBUb2tlblNldC5cbiAqXG4gKiBUaGlzIGludGVyc2VjdGlvbiB3aWxsIHRha2UgaW50byBhY2NvdW50IGFueSB3aWxkY2FyZHNcbiAqIGNvbnRhaW5lZCB3aXRoaW4gdGhlIFRva2VuU2V0LlxuICpcbiAqIEBwYXJhbSB7bHVuci5Ub2tlblNldH0gYiAtIEFuIG90aGVyIFRva2VuU2V0IHRvIGludGVyc2VjdCB3aXRoLlxuICogQHJldHVybnMge2x1bnIuVG9rZW5TZXR9XG4gKi9cbmx1bnIuVG9rZW5TZXQucHJvdG90eXBlLmludGVyc2VjdCA9IGZ1bmN0aW9uIChiKSB7XG4gIHZhciBvdXRwdXQgPSBuZXcgbHVuci5Ub2tlblNldCxcbiAgICAgIGZyYW1lID0gdW5kZWZpbmVkXG5cbiAgdmFyIHN0YWNrID0gW3tcbiAgICBxTm9kZTogYixcbiAgICBvdXRwdXQ6IG91dHB1dCxcbiAgICBub2RlOiB0aGlzXG4gIH1dXG5cbiAgd2hpbGUgKHN0YWNrLmxlbmd0aCkge1xuICAgIGZyYW1lID0gc3RhY2sucG9wKClcblxuICAgIC8vIE5PVEU6IEFzIHdpdGggdGhlICN0b1N0cmluZyBtZXRob2QsIHdlIGFyZSB1c2luZ1xuICAgIC8vIE9iamVjdC5rZXlzIGFuZCBhIGZvciBsb29wIGluc3RlYWQgb2YgYSBmb3ItaW4gbG9vcFxuICAgIC8vIGFzIGJvdGggb2YgdGhlc2Ugb2JqZWN0cyBlbnRlciAnaGFzaCcgbW9kZSwgY2F1c2luZ1xuICAgIC8vIHRoZSBmdW5jdGlvbiB0byBiZSBkZS1vcHRpbWlzZWQgaW4gVjhcbiAgICB2YXIgcUVkZ2VzID0gT2JqZWN0LmtleXMoZnJhbWUucU5vZGUuZWRnZXMpLFxuICAgICAgICBxTGVuID0gcUVkZ2VzLmxlbmd0aCxcbiAgICAgICAgbkVkZ2VzID0gT2JqZWN0LmtleXMoZnJhbWUubm9kZS5lZGdlcyksXG4gICAgICAgIG5MZW4gPSBuRWRnZXMubGVuZ3RoXG5cbiAgICBmb3IgKHZhciBxID0gMDsgcSA8IHFMZW47IHErKykge1xuICAgICAgdmFyIHFFZGdlID0gcUVkZ2VzW3FdXG5cbiAgICAgIGZvciAodmFyIG4gPSAwOyBuIDwgbkxlbjsgbisrKSB7XG4gICAgICAgIHZhciBuRWRnZSA9IG5FZGdlc1tuXVxuXG4gICAgICAgIGlmIChuRWRnZSA9PSBxRWRnZSB8fCBxRWRnZSA9PSAnKicpIHtcbiAgICAgICAgICB2YXIgbm9kZSA9IGZyYW1lLm5vZGUuZWRnZXNbbkVkZ2VdLFxuICAgICAgICAgICAgICBxTm9kZSA9IGZyYW1lLnFOb2RlLmVkZ2VzW3FFZGdlXSxcbiAgICAgICAgICAgICAgZmluYWwgPSBub2RlLmZpbmFsICYmIHFOb2RlLmZpbmFsLFxuICAgICAgICAgICAgICBuZXh0ID0gdW5kZWZpbmVkXG5cbiAgICAgICAgICBpZiAobkVkZ2UgaW4gZnJhbWUub3V0cHV0LmVkZ2VzKSB7XG4gICAgICAgICAgICAvLyBhbiBlZGdlIGFscmVhZHkgZXhpc3RzIGZvciB0aGlzIGNoYXJhY3RlclxuICAgICAgICAgICAgLy8gbm8gbmVlZCB0byBjcmVhdGUgYSBuZXcgbm9kZSwganVzdCBzZXQgdGhlIGZpbmFsaXR5XG4gICAgICAgICAgICAvLyBiaXQgdW5sZXNzIHRoaXMgbm9kZSBpcyBhbHJlYWR5IGZpbmFsXG4gICAgICAgICAgICBuZXh0ID0gZnJhbWUub3V0cHV0LmVkZ2VzW25FZGdlXVxuICAgICAgICAgICAgbmV4dC5maW5hbCA9IG5leHQuZmluYWwgfHwgZmluYWxcblxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBubyBlZGdlIGV4aXN0cyB5ZXQsIG11c3QgY3JlYXRlIG9uZVxuICAgICAgICAgICAgLy8gc2V0IHRoZSBmaW5hbGl0eSBiaXQgYW5kIGluc2VydCBpdFxuICAgICAgICAgICAgLy8gaW50byB0aGUgb3V0cHV0XG4gICAgICAgICAgICBuZXh0ID0gbmV3IGx1bnIuVG9rZW5TZXRcbiAgICAgICAgICAgIG5leHQuZmluYWwgPSBmaW5hbFxuICAgICAgICAgICAgZnJhbWUub3V0cHV0LmVkZ2VzW25FZGdlXSA9IG5leHRcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBzdGFjay5wdXNoKHtcbiAgICAgICAgICAgIHFOb2RlOiBxTm9kZSxcbiAgICAgICAgICAgIG91dHB1dDogbmV4dCxcbiAgICAgICAgICAgIG5vZGU6IG5vZGVcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG91dHB1dFxufVxubHVuci5Ub2tlblNldC5CdWlsZGVyID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLnByZXZpb3VzV29yZCA9IFwiXCJcbiAgdGhpcy5yb290ID0gbmV3IGx1bnIuVG9rZW5TZXRcbiAgdGhpcy51bmNoZWNrZWROb2RlcyA9IFtdXG4gIHRoaXMubWluaW1pemVkTm9kZXMgPSB7fVxufVxuXG5sdW5yLlRva2VuU2V0LkJ1aWxkZXIucHJvdG90eXBlLmluc2VydCA9IGZ1bmN0aW9uICh3b3JkKSB7XG4gIHZhciBub2RlLFxuICAgICAgY29tbW9uUHJlZml4ID0gMFxuXG4gIGlmICh3b3JkIDwgdGhpcy5wcmV2aW91c1dvcmQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IgKFwiT3V0IG9mIG9yZGVyIHdvcmQgaW5zZXJ0aW9uXCIpXG4gIH1cblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHdvcmQubGVuZ3RoICYmIGkgPCB0aGlzLnByZXZpb3VzV29yZC5sZW5ndGg7IGkrKykge1xuICAgIGlmICh3b3JkW2ldICE9IHRoaXMucHJldmlvdXNXb3JkW2ldKSBicmVha1xuICAgIGNvbW1vblByZWZpeCsrXG4gIH1cblxuICB0aGlzLm1pbmltaXplKGNvbW1vblByZWZpeClcblxuICBpZiAodGhpcy51bmNoZWNrZWROb2Rlcy5sZW5ndGggPT0gMCkge1xuICAgIG5vZGUgPSB0aGlzLnJvb3RcbiAgfSBlbHNlIHtcbiAgICBub2RlID0gdGhpcy51bmNoZWNrZWROb2Rlc1t0aGlzLnVuY2hlY2tlZE5vZGVzLmxlbmd0aCAtIDFdLmNoaWxkXG4gIH1cblxuICBmb3IgKHZhciBpID0gY29tbW9uUHJlZml4OyBpIDwgd29yZC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBuZXh0Tm9kZSA9IG5ldyBsdW5yLlRva2VuU2V0LFxuICAgICAgICBjaGFyID0gd29yZFtpXVxuXG4gICAgbm9kZS5lZGdlc1tjaGFyXSA9IG5leHROb2RlXG5cbiAgICB0aGlzLnVuY2hlY2tlZE5vZGVzLnB1c2goe1xuICAgICAgcGFyZW50OiBub2RlLFxuICAgICAgY2hhcjogY2hhcixcbiAgICAgIGNoaWxkOiBuZXh0Tm9kZVxuICAgIH0pXG5cbiAgICBub2RlID0gbmV4dE5vZGVcbiAgfVxuXG4gIG5vZGUuZmluYWwgPSB0cnVlXG4gIHRoaXMucHJldmlvdXNXb3JkID0gd29yZFxufVxuXG5sdW5yLlRva2VuU2V0LkJ1aWxkZXIucHJvdG90eXBlLmZpbmlzaCA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5taW5pbWl6ZSgwKVxufVxuXG5sdW5yLlRva2VuU2V0LkJ1aWxkZXIucHJvdG90eXBlLm1pbmltaXplID0gZnVuY3Rpb24gKGRvd25Ubykge1xuICBmb3IgKHZhciBpID0gdGhpcy51bmNoZWNrZWROb2Rlcy5sZW5ndGggLSAxOyBpID49IGRvd25UbzsgaS0tKSB7XG4gICAgdmFyIG5vZGUgPSB0aGlzLnVuY2hlY2tlZE5vZGVzW2ldLFxuICAgICAgICBjaGlsZEtleSA9IG5vZGUuY2hpbGQudG9TdHJpbmcoKVxuXG4gICAgaWYgKGNoaWxkS2V5IGluIHRoaXMubWluaW1pemVkTm9kZXMpIHtcbiAgICAgIG5vZGUucGFyZW50LmVkZ2VzW25vZGUuY2hhcl0gPSB0aGlzLm1pbmltaXplZE5vZGVzW2NoaWxkS2V5XVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBDYWNoZSB0aGUga2V5IGZvciB0aGlzIG5vZGUgc2luY2VcbiAgICAgIC8vIHdlIGtub3cgaXQgY2FuJ3QgY2hhbmdlIGFueW1vcmVcbiAgICAgIG5vZGUuY2hpbGQuX3N0ciA9IGNoaWxkS2V5XG5cbiAgICAgIHRoaXMubWluaW1pemVkTm9kZXNbY2hpbGRLZXldID0gbm9kZS5jaGlsZFxuICAgIH1cblxuICAgIHRoaXMudW5jaGVja2VkTm9kZXMucG9wKClcbiAgfVxufVxuLyohXG4gKiBsdW5yLkluZGV4XG4gKiBDb3B5cmlnaHQgKEMpIDIwMTggT2xpdmVyIE5pZ2h0aW5nYWxlXG4gKi9cblxuLyoqXG4gKiBBbiBpbmRleCBjb250YWlucyB0aGUgYnVpbHQgaW5kZXggb2YgYWxsIGRvY3VtZW50cyBhbmQgcHJvdmlkZXMgYSBxdWVyeSBpbnRlcmZhY2VcbiAqIHRvIHRoZSBpbmRleC5cbiAqXG4gKiBVc3VhbGx5IGluc3RhbmNlcyBvZiBsdW5yLkluZGV4IHdpbGwgbm90IGJlIGNyZWF0ZWQgdXNpbmcgdGhpcyBjb25zdHJ1Y3RvciwgaW5zdGVhZFxuICogbHVuci5CdWlsZGVyIHNob3VsZCBiZSB1c2VkIHRvIGNvbnN0cnVjdCBuZXcgaW5kZXhlcywgb3IgbHVuci5JbmRleC5sb2FkIHNob3VsZCBiZVxuICogdXNlZCB0byBsb2FkIHByZXZpb3VzbHkgYnVpbHQgYW5kIHNlcmlhbGl6ZWQgaW5kZXhlcy5cbiAqXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7T2JqZWN0fSBhdHRycyAtIFRoZSBhdHRyaWJ1dGVzIG9mIHRoZSBidWlsdCBzZWFyY2ggaW5kZXguXG4gKiBAcGFyYW0ge09iamVjdH0gYXR0cnMuaW52ZXJ0ZWRJbmRleCAtIEFuIGluZGV4IG9mIHRlcm0vZmllbGQgdG8gZG9jdW1lbnQgcmVmZXJlbmNlLlxuICogQHBhcmFtIHtPYmplY3Q8c3RyaW5nLCBsdW5yLlZlY3Rvcj59IGF0dHJzLmZpZWxkVmVjdG9ycyAtIEZpZWxkIHZlY3RvcnNcbiAqIEBwYXJhbSB7bHVuci5Ub2tlblNldH0gYXR0cnMudG9rZW5TZXQgLSBBbiBzZXQgb2YgYWxsIGNvcnB1cyB0b2tlbnMuXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBhdHRycy5maWVsZHMgLSBUaGUgbmFtZXMgb2YgaW5kZXhlZCBkb2N1bWVudCBmaWVsZHMuXG4gKiBAcGFyYW0ge2x1bnIuUGlwZWxpbmV9IGF0dHJzLnBpcGVsaW5lIC0gVGhlIHBpcGVsaW5lIHRvIHVzZSBmb3Igc2VhcmNoIHRlcm1zLlxuICovXG5sdW5yLkluZGV4ID0gZnVuY3Rpb24gKGF0dHJzKSB7XG4gIHRoaXMuaW52ZXJ0ZWRJbmRleCA9IGF0dHJzLmludmVydGVkSW5kZXhcbiAgdGhpcy5maWVsZFZlY3RvcnMgPSBhdHRycy5maWVsZFZlY3RvcnNcbiAgdGhpcy50b2tlblNldCA9IGF0dHJzLnRva2VuU2V0XG4gIHRoaXMuZmllbGRzID0gYXR0cnMuZmllbGRzXG4gIHRoaXMucGlwZWxpbmUgPSBhdHRycy5waXBlbGluZVxufVxuXG4vKipcbiAqIEEgcmVzdWx0IGNvbnRhaW5zIGRldGFpbHMgb2YgYSBkb2N1bWVudCBtYXRjaGluZyBhIHNlYXJjaCBxdWVyeS5cbiAqIEB0eXBlZGVmIHtPYmplY3R9IGx1bnIuSW5kZXh+UmVzdWx0XG4gKiBAcHJvcGVydHkge3N0cmluZ30gcmVmIC0gVGhlIHJlZmVyZW5jZSBvZiB0aGUgZG9jdW1lbnQgdGhpcyByZXN1bHQgcmVwcmVzZW50cy5cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBzY29yZSAtIEEgbnVtYmVyIGJldHdlZW4gMCBhbmQgMSByZXByZXNlbnRpbmcgaG93IHNpbWlsYXIgdGhpcyBkb2N1bWVudCBpcyB0byB0aGUgcXVlcnkuXG4gKiBAcHJvcGVydHkge2x1bnIuTWF0Y2hEYXRhfSBtYXRjaERhdGEgLSBDb250YWlucyBtZXRhZGF0YSBhYm91dCB0aGlzIG1hdGNoIGluY2x1ZGluZyB3aGljaCB0ZXJtKHMpIGNhdXNlZCB0aGUgbWF0Y2guXG4gKi9cblxuLyoqXG4gKiBBbHRob3VnaCBsdW5yIHByb3ZpZGVzIHRoZSBhYmlsaXR5IHRvIGNyZWF0ZSBxdWVyaWVzIHVzaW5nIGx1bnIuUXVlcnksIGl0IGFsc28gcHJvdmlkZXMgYSBzaW1wbGVcbiAqIHF1ZXJ5IGxhbmd1YWdlIHdoaWNoIGl0c2VsZiBpcyBwYXJzZWQgaW50byBhbiBpbnN0YW5jZSBvZiBsdW5yLlF1ZXJ5LlxuICpcbiAqIEZvciBwcm9ncmFtbWF0aWNhbGx5IGJ1aWxkaW5nIHF1ZXJpZXMgaXQgaXMgYWR2aXNlZCB0byBkaXJlY3RseSB1c2UgbHVuci5RdWVyeSwgdGhlIHF1ZXJ5IGxhbmd1YWdlXG4gKiBpcyBiZXN0IHVzZWQgZm9yIGh1bWFuIGVudGVyZWQgdGV4dCByYXRoZXIgdGhhbiBwcm9ncmFtIGdlbmVyYXRlZCB0ZXh0LlxuICpcbiAqIEF0IGl0cyBzaW1wbGVzdCBxdWVyaWVzIGNhbiBqdXN0IGJlIGEgc2luZ2xlIHRlcm0sIGUuZy4gYGhlbGxvYCwgbXVsdGlwbGUgdGVybXMgYXJlIGFsc28gc3VwcG9ydGVkXG4gKiBhbmQgd2lsbCBiZSBjb21iaW5lZCB3aXRoIE9SLCBlLmcgYGhlbGxvIHdvcmxkYCB3aWxsIG1hdGNoIGRvY3VtZW50cyB0aGF0IGNvbnRhaW4gZWl0aGVyICdoZWxsbydcbiAqIG9yICd3b3JsZCcsIHRob3VnaCB0aG9zZSB0aGF0IGNvbnRhaW4gYm90aCB3aWxsIHJhbmsgaGlnaGVyIGluIHRoZSByZXN1bHRzLlxuICpcbiAqIFdpbGRjYXJkcyBjYW4gYmUgaW5jbHVkZWQgaW4gdGVybXMgdG8gbWF0Y2ggb25lIG9yIG1vcmUgdW5zcGVjaWZpZWQgY2hhcmFjdGVycywgdGhlc2Ugd2lsZGNhcmRzIGNhblxuICogYmUgaW5zZXJ0ZWQgYW55d2hlcmUgd2l0aGluIHRoZSB0ZXJtLCBhbmQgbW9yZSB0aGFuIG9uZSB3aWxkY2FyZCBjYW4gZXhpc3QgaW4gYSBzaW5nbGUgdGVybS4gQWRkaW5nXG4gKiB3aWxkY2FyZHMgd2lsbCBpbmNyZWFzZSB0aGUgbnVtYmVyIG9mIGRvY3VtZW50cyB0aGF0IHdpbGwgYmUgZm91bmQgYnV0IGNhbiBhbHNvIGhhdmUgYSBuZWdhdGl2ZVxuICogaW1wYWN0IG9uIHF1ZXJ5IHBlcmZvcm1hbmNlLCBlc3BlY2lhbGx5IHdpdGggd2lsZGNhcmRzIGF0IHRoZSBiZWdpbm5pbmcgb2YgYSB0ZXJtLlxuICpcbiAqIFRlcm1zIGNhbiBiZSByZXN0cmljdGVkIHRvIHNwZWNpZmljIGZpZWxkcywgZS5nLiBgdGl0bGU6aGVsbG9gLCBvbmx5IGRvY3VtZW50cyB3aXRoIHRoZSB0ZXJtXG4gKiBoZWxsbyBpbiB0aGUgdGl0bGUgZmllbGQgd2lsbCBtYXRjaCB0aGlzIHF1ZXJ5LiBVc2luZyBhIGZpZWxkIG5vdCBwcmVzZW50IGluIHRoZSBpbmRleCB3aWxsIGxlYWRcbiAqIHRvIGFuIGVycm9yIGJlaW5nIHRocm93bi5cbiAqXG4gKiBNb2RpZmllcnMgY2FuIGFsc28gYmUgYWRkZWQgdG8gdGVybXMsIGx1bnIgc3VwcG9ydHMgZWRpdCBkaXN0YW5jZSBhbmQgYm9vc3QgbW9kaWZpZXJzIG9uIHRlcm1zLiBBIHRlcm1cbiAqIGJvb3N0IHdpbGwgbWFrZSBkb2N1bWVudHMgbWF0Y2hpbmcgdGhhdCB0ZXJtIHNjb3JlIGhpZ2hlciwgZS5nLiBgZm9vXjVgLiBFZGl0IGRpc3RhbmNlIGlzIGFsc28gc3VwcG9ydGVkXG4gKiB0byBwcm92aWRlIGZ1enp5IG1hdGNoaW5nLCBlLmcuICdoZWxsb34yJyB3aWxsIG1hdGNoIGRvY3VtZW50cyB3aXRoIGhlbGxvIHdpdGggYW4gZWRpdCBkaXN0YW5jZSBvZiAyLlxuICogQXZvaWQgbGFyZ2UgdmFsdWVzIGZvciBlZGl0IGRpc3RhbmNlIHRvIGltcHJvdmUgcXVlcnkgcGVyZm9ybWFuY2UuXG4gKlxuICogRWFjaCB0ZXJtIGFsc28gc3VwcG9ydHMgYSBwcmVzZW5jZSBtb2RpZmllci4gQnkgZGVmYXVsdCBhIHRlcm0ncyBwcmVzZW5jZSBpbiBkb2N1bWVudCBpcyBvcHRpb25hbCwgaG93ZXZlclxuICogdGhpcyBjYW4gYmUgY2hhbmdlZCB0byBlaXRoZXIgcmVxdWlyZWQgb3IgcHJvaGliaXRlZC4gRm9yIGEgdGVybSdzIHByZXNlbmNlIHRvIGJlIHJlcXVpcmVkIGluIGEgZG9jdW1lbnQgdGhlXG4gKiB0ZXJtIHNob3VsZCBiZSBwcmVmaXhlZCB3aXRoIGEgJysnLCBlLmcuIGArZm9vIGJhcmAgaXMgYSBzZWFyY2ggZm9yIGRvY3VtZW50cyB0aGF0IG11c3QgY29udGFpbiAnZm9vJyBhbmRcbiAqIG9wdGlvbmFsbHkgY29udGFpbiAnYmFyJy4gQ29udmVyc2VseSBhIGxlYWRpbmcgJy0nIHNldHMgdGhlIHRlcm1zIHByZXNlbmNlIHRvIHByb2hpYml0ZWQsIGkuZS4gaXQgbXVzdCBub3RcbiAqIGFwcGVhciBpbiBhIGRvY3VtZW50LCBlLmcuIGAtZm9vIGJhcmAgaXMgYSBzZWFyY2ggZm9yIGRvY3VtZW50cyB0aGF0IGRvIG5vdCBjb250YWluICdmb28nIGJ1dCBtYXkgY29udGFpbiAnYmFyJy5cbiAqXG4gKiBUbyBlc2NhcGUgc3BlY2lhbCBjaGFyYWN0ZXJzIHRoZSBiYWNrc2xhc2ggY2hhcmFjdGVyICdcXCcgY2FuIGJlIHVzZWQsIHRoaXMgYWxsb3dzIHNlYXJjaGVzIHRvIGluY2x1ZGVcbiAqIGNoYXJhY3RlcnMgdGhhdCB3b3VsZCBub3JtYWxseSBiZSBjb25zaWRlcmVkIG1vZGlmaWVycywgZS5nLiBgZm9vXFx+MmAgd2lsbCBzZWFyY2ggZm9yIGEgdGVybSBcImZvb34yXCIgaW5zdGVhZFxuICogb2YgYXR0ZW1wdGluZyB0byBhcHBseSBhIGJvb3N0IG9mIDIgdG8gdGhlIHNlYXJjaCB0ZXJtIFwiZm9vXCIuXG4gKlxuICogQHR5cGVkZWYge3N0cmluZ30gbHVuci5JbmRleH5RdWVyeVN0cmluZ1xuICogQGV4YW1wbGUgPGNhcHRpb24+U2ltcGxlIHNpbmdsZSB0ZXJtIHF1ZXJ5PC9jYXB0aW9uPlxuICogaGVsbG9cbiAqIEBleGFtcGxlIDxjYXB0aW9uPk11bHRpcGxlIHRlcm0gcXVlcnk8L2NhcHRpb24+XG4gKiBoZWxsbyB3b3JsZFxuICogQGV4YW1wbGUgPGNhcHRpb24+dGVybSBzY29wZWQgdG8gYSBmaWVsZDwvY2FwdGlvbj5cbiAqIHRpdGxlOmhlbGxvXG4gKiBAZXhhbXBsZSA8Y2FwdGlvbj50ZXJtIHdpdGggYSBib29zdCBvZiAxMDwvY2FwdGlvbj5cbiAqIGhlbGxvXjEwXG4gKiBAZXhhbXBsZSA8Y2FwdGlvbj50ZXJtIHdpdGggYW4gZWRpdCBkaXN0YW5jZSBvZiAyPC9jYXB0aW9uPlxuICogaGVsbG9+MlxuICogQGV4YW1wbGUgPGNhcHRpb24+dGVybXMgd2l0aCBwcmVzZW5jZSBtb2RpZmllcnM8L2NhcHRpb24+XG4gKiAtZm9vICtiYXIgYmF6XG4gKi9cblxuLyoqXG4gKiBQZXJmb3JtcyBhIHNlYXJjaCBhZ2FpbnN0IHRoZSBpbmRleCB1c2luZyBsdW5yIHF1ZXJ5IHN5bnRheC5cbiAqXG4gKiBSZXN1bHRzIHdpbGwgYmUgcmV0dXJuZWQgc29ydGVkIGJ5IHRoZWlyIHNjb3JlLCB0aGUgbW9zdCByZWxldmFudCByZXN1bHRzXG4gKiB3aWxsIGJlIHJldHVybmVkIGZpcnN0LiAgRm9yIGRldGFpbHMgb24gaG93IHRoZSBzY29yZSBpcyBjYWxjdWxhdGVkLCBwbGVhc2Ugc2VlXG4gKiB0aGUge0BsaW5rIGh0dHBzOi8vbHVucmpzLmNvbS9ndWlkZXMvc2VhcmNoaW5nLmh0bWwjc2NvcmluZ3xndWlkZX0uXG4gKlxuICogRm9yIG1vcmUgcHJvZ3JhbW1hdGljIHF1ZXJ5aW5nIHVzZSBsdW5yLkluZGV4I3F1ZXJ5LlxuICpcbiAqIEBwYXJhbSB7bHVuci5JbmRleH5RdWVyeVN0cmluZ30gcXVlcnlTdHJpbmcgLSBBIHN0cmluZyBjb250YWluaW5nIGEgbHVuciBxdWVyeS5cbiAqIEB0aHJvd3Mge2x1bnIuUXVlcnlQYXJzZUVycm9yfSBJZiB0aGUgcGFzc2VkIHF1ZXJ5IHN0cmluZyBjYW5ub3QgYmUgcGFyc2VkLlxuICogQHJldHVybnMge2x1bnIuSW5kZXh+UmVzdWx0W119XG4gKi9cbmx1bnIuSW5kZXgucHJvdG90eXBlLnNlYXJjaCA9IGZ1bmN0aW9uIChxdWVyeVN0cmluZykge1xuICByZXR1cm4gdGhpcy5xdWVyeShmdW5jdGlvbiAocXVlcnkpIHtcbiAgICB2YXIgcGFyc2VyID0gbmV3IGx1bnIuUXVlcnlQYXJzZXIocXVlcnlTdHJpbmcsIHF1ZXJ5KVxuICAgIHBhcnNlci5wYXJzZSgpXG4gIH0pXG59XG5cbi8qKlxuICogQSBxdWVyeSBidWlsZGVyIGNhbGxiYWNrIHByb3ZpZGVzIGEgcXVlcnkgb2JqZWN0IHRvIGJlIHVzZWQgdG8gZXhwcmVzc1xuICogdGhlIHF1ZXJ5IHRvIHBlcmZvcm0gb24gdGhlIGluZGV4LlxuICpcbiAqIEBjYWxsYmFjayBsdW5yLkluZGV4fnF1ZXJ5QnVpbGRlclxuICogQHBhcmFtIHtsdW5yLlF1ZXJ5fSBxdWVyeSAtIFRoZSBxdWVyeSBvYmplY3QgdG8gYnVpbGQgdXAuXG4gKiBAdGhpcyBsdW5yLlF1ZXJ5XG4gKi9cblxuLyoqXG4gKiBQZXJmb3JtcyBhIHF1ZXJ5IGFnYWluc3QgdGhlIGluZGV4IHVzaW5nIHRoZSB5aWVsZGVkIGx1bnIuUXVlcnkgb2JqZWN0LlxuICpcbiAqIElmIHBlcmZvcm1pbmcgcHJvZ3JhbW1hdGljIHF1ZXJpZXMgYWdhaW5zdCB0aGUgaW5kZXgsIHRoaXMgbWV0aG9kIGlzIHByZWZlcnJlZFxuICogb3ZlciBsdW5yLkluZGV4I3NlYXJjaCBzbyBhcyB0byBhdm9pZCB0aGUgYWRkaXRpb25hbCBxdWVyeSBwYXJzaW5nIG92ZXJoZWFkLlxuICpcbiAqIEEgcXVlcnkgb2JqZWN0IGlzIHlpZWxkZWQgdG8gdGhlIHN1cHBsaWVkIGZ1bmN0aW9uIHdoaWNoIHNob3VsZCBiZSB1c2VkIHRvXG4gKiBleHByZXNzIHRoZSBxdWVyeSB0byBiZSBydW4gYWdhaW5zdCB0aGUgaW5kZXguXG4gKlxuICogTm90ZSB0aGF0IGFsdGhvdWdoIHRoaXMgZnVuY3Rpb24gdGFrZXMgYSBjYWxsYmFjayBwYXJhbWV0ZXIgaXQgaXMgX25vdF8gYW5cbiAqIGFzeW5jaHJvbm91cyBvcGVyYXRpb24sIHRoZSBjYWxsYmFjayBpcyBqdXN0IHlpZWxkZWQgYSBxdWVyeSBvYmplY3QgdG8gYmVcbiAqIGN1c3RvbWl6ZWQuXG4gKlxuICogQHBhcmFtIHtsdW5yLkluZGV4fnF1ZXJ5QnVpbGRlcn0gZm4gLSBBIGZ1bmN0aW9uIHRoYXQgaXMgdXNlZCB0byBidWlsZCB0aGUgcXVlcnkuXG4gKiBAcmV0dXJucyB7bHVuci5JbmRleH5SZXN1bHRbXX1cbiAqL1xubHVuci5JbmRleC5wcm90b3R5cGUucXVlcnkgPSBmdW5jdGlvbiAoZm4pIHtcbiAgLy8gZm9yIGVhY2ggcXVlcnkgY2xhdXNlXG4gIC8vICogcHJvY2VzcyB0ZXJtc1xuICAvLyAqIGV4cGFuZCB0ZXJtcyBmcm9tIHRva2VuIHNldFxuICAvLyAqIGZpbmQgbWF0Y2hpbmcgZG9jdW1lbnRzIGFuZCBtZXRhZGF0YVxuICAvLyAqIGdldCBkb2N1bWVudCB2ZWN0b3JzXG4gIC8vICogc2NvcmUgZG9jdW1lbnRzXG5cbiAgdmFyIHF1ZXJ5ID0gbmV3IGx1bnIuUXVlcnkodGhpcy5maWVsZHMpLFxuICAgICAgbWF0Y2hpbmdGaWVsZHMgPSBPYmplY3QuY3JlYXRlKG51bGwpLFxuICAgICAgcXVlcnlWZWN0b3JzID0gT2JqZWN0LmNyZWF0ZShudWxsKSxcbiAgICAgIHRlcm1GaWVsZENhY2hlID0gT2JqZWN0LmNyZWF0ZShudWxsKSxcbiAgICAgIHJlcXVpcmVkTWF0Y2hlcyA9IE9iamVjdC5jcmVhdGUobnVsbCksXG4gICAgICBwcm9oaWJpdGVkTWF0Y2hlcyA9IE9iamVjdC5jcmVhdGUobnVsbClcblxuICAvKlxuICAgKiBUbyBzdXBwb3J0IGZpZWxkIGxldmVsIGJvb3N0cyBhIHF1ZXJ5IHZlY3RvciBpcyBjcmVhdGVkIHBlclxuICAgKiBmaWVsZC4gQW4gZW1wdHkgdmVjdG9yIGlzIGVhZ2VybHkgY3JlYXRlZCB0byBzdXBwb3J0IG5lZ2F0ZWRcbiAgICogcXVlcmllcy5cbiAgICovXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5maWVsZHMubGVuZ3RoOyBpKyspIHtcbiAgICBxdWVyeVZlY3RvcnNbdGhpcy5maWVsZHNbaV1dID0gbmV3IGx1bnIuVmVjdG9yXG4gIH1cblxuICBmbi5jYWxsKHF1ZXJ5LCBxdWVyeSlcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHF1ZXJ5LmNsYXVzZXMubGVuZ3RoOyBpKyspIHtcbiAgICAvKlxuICAgICAqIFVubGVzcyB0aGUgcGlwZWxpbmUgaGFzIGJlZW4gZGlzYWJsZWQgZm9yIHRoaXMgdGVybSwgd2hpY2ggaXNcbiAgICAgKiB0aGUgY2FzZSBmb3IgdGVybXMgd2l0aCB3aWxkY2FyZHMsIHdlIG5lZWQgdG8gcGFzcyB0aGUgY2xhdXNlXG4gICAgICogdGVybSB0aHJvdWdoIHRoZSBzZWFyY2ggcGlwZWxpbmUuIEEgcGlwZWxpbmUgcmV0dXJucyBhbiBhcnJheVxuICAgICAqIG9mIHByb2Nlc3NlZCB0ZXJtcy4gUGlwZWxpbmUgZnVuY3Rpb25zIG1heSBleHBhbmQgdGhlIHBhc3NlZFxuICAgICAqIHRlcm0sIHdoaWNoIG1lYW5zIHdlIG1heSBlbmQgdXAgcGVyZm9ybWluZyBtdWx0aXBsZSBpbmRleCBsb29rdXBzXG4gICAgICogZm9yIGEgc2luZ2xlIHF1ZXJ5IHRlcm0uXG4gICAgICovXG4gICAgdmFyIGNsYXVzZSA9IHF1ZXJ5LmNsYXVzZXNbaV0sXG4gICAgICAgIHRlcm1zID0gbnVsbCxcbiAgICAgICAgY2xhdXNlTWF0Y2hlcyA9IGx1bnIuU2V0LmNvbXBsZXRlXG5cbiAgICBpZiAoY2xhdXNlLnVzZVBpcGVsaW5lKSB7XG4gICAgICB0ZXJtcyA9IHRoaXMucGlwZWxpbmUucnVuU3RyaW5nKGNsYXVzZS50ZXJtLCB7XG4gICAgICAgIGZpZWxkczogY2xhdXNlLmZpZWxkc1xuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGVybXMgPSBbY2xhdXNlLnRlcm1dXG4gICAgfVxuXG4gICAgZm9yICh2YXIgbSA9IDA7IG0gPCB0ZXJtcy5sZW5ndGg7IG0rKykge1xuICAgICAgdmFyIHRlcm0gPSB0ZXJtc1ttXVxuXG4gICAgICAvKlxuICAgICAgICogRWFjaCB0ZXJtIHJldHVybmVkIGZyb20gdGhlIHBpcGVsaW5lIG5lZWRzIHRvIHVzZSB0aGUgc2FtZSBxdWVyeVxuICAgICAgICogY2xhdXNlIG9iamVjdCwgZS5nLiB0aGUgc2FtZSBib29zdCBhbmQgb3IgZWRpdCBkaXN0YW5jZS4gVGhlXG4gICAgICAgKiBzaW1wbGVzdCB3YXkgdG8gZG8gdGhpcyBpcyB0byByZS11c2UgdGhlIGNsYXVzZSBvYmplY3QgYnV0IG11dGF0ZVxuICAgICAgICogaXRzIHRlcm0gcHJvcGVydHkuXG4gICAgICAgKi9cbiAgICAgIGNsYXVzZS50ZXJtID0gdGVybVxuXG4gICAgICAvKlxuICAgICAgICogRnJvbSB0aGUgdGVybSBpbiB0aGUgY2xhdXNlIHdlIGNyZWF0ZSBhIHRva2VuIHNldCB3aGljaCB3aWxsIHRoZW5cbiAgICAgICAqIGJlIHVzZWQgdG8gaW50ZXJzZWN0IHRoZSBpbmRleGVzIHRva2VuIHNldCB0byBnZXQgYSBsaXN0IG9mIHRlcm1zXG4gICAgICAgKiB0byBsb29rdXAgaW4gdGhlIGludmVydGVkIGluZGV4XG4gICAgICAgKi9cbiAgICAgIHZhciB0ZXJtVG9rZW5TZXQgPSBsdW5yLlRva2VuU2V0LmZyb21DbGF1c2UoY2xhdXNlKSxcbiAgICAgICAgICBleHBhbmRlZFRlcm1zID0gdGhpcy50b2tlblNldC5pbnRlcnNlY3QodGVybVRva2VuU2V0KS50b0FycmF5KClcblxuICAgICAgLypcbiAgICAgICAqIElmIGEgdGVybSBtYXJrZWQgYXMgcmVxdWlyZWQgZG9lcyBub3QgZXhpc3QgaW4gdGhlIHRva2VuU2V0IGl0IGlzXG4gICAgICAgKiBpbXBvc3NpYmxlIGZvciB0aGUgc2VhcmNoIHRvIHJldHVybiBhbnkgbWF0Y2hlcy4gV2Ugc2V0IGFsbCB0aGUgZmllbGRcbiAgICAgICAqIHNjb3BlZCByZXF1aXJlZCBtYXRjaGVzIHNldCB0byBlbXB0eSBhbmQgc3RvcCBleGFtaW5pbmcgYW55IGZ1cnRoZXJcbiAgICAgICAqIGNsYXVzZXMuXG4gICAgICAgKi9cbiAgICAgIGlmIChleHBhbmRlZFRlcm1zLmxlbmd0aCA9PT0gMCAmJiBjbGF1c2UucHJlc2VuY2UgPT09IGx1bnIuUXVlcnkucHJlc2VuY2UuUkVRVUlSRUQpIHtcbiAgICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCBjbGF1c2UuZmllbGRzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgICAgdmFyIGZpZWxkID0gY2xhdXNlLmZpZWxkc1trXVxuICAgICAgICAgIHJlcXVpcmVkTWF0Y2hlc1tmaWVsZF0gPSBsdW5yLlNldC5lbXB0eVxuICAgICAgICB9XG5cbiAgICAgICAgYnJlYWtcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBleHBhbmRlZFRlcm1zLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIC8qXG4gICAgICAgICAqIEZvciBlYWNoIHRlcm0gZ2V0IHRoZSBwb3N0aW5nIGFuZCB0ZXJtSW5kZXgsIHRoaXMgaXMgcmVxdWlyZWQgZm9yXG4gICAgICAgICAqIGJ1aWxkaW5nIHRoZSBxdWVyeSB2ZWN0b3IuXG4gICAgICAgICAqL1xuICAgICAgICB2YXIgZXhwYW5kZWRUZXJtID0gZXhwYW5kZWRUZXJtc1tqXSxcbiAgICAgICAgICAgIHBvc3RpbmcgPSB0aGlzLmludmVydGVkSW5kZXhbZXhwYW5kZWRUZXJtXSxcbiAgICAgICAgICAgIHRlcm1JbmRleCA9IHBvc3RpbmcuX2luZGV4XG5cbiAgICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCBjbGF1c2UuZmllbGRzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgICAgLypcbiAgICAgICAgICAgKiBGb3IgZWFjaCBmaWVsZCB0aGF0IHRoaXMgcXVlcnkgdGVybSBpcyBzY29wZWQgYnkgKGJ5IGRlZmF1bHRcbiAgICAgICAgICAgKiBhbGwgZmllbGRzIGFyZSBpbiBzY29wZSkgd2UgbmVlZCB0byBnZXQgYWxsIHRoZSBkb2N1bWVudCByZWZzXG4gICAgICAgICAgICogdGhhdCBoYXZlIHRoaXMgdGVybSBpbiB0aGF0IGZpZWxkLlxuICAgICAgICAgICAqXG4gICAgICAgICAgICogVGhlIHBvc3RpbmcgaXMgdGhlIGVudHJ5IGluIHRoZSBpbnZlcnRlZEluZGV4IGZvciB0aGUgbWF0Y2hpbmdcbiAgICAgICAgICAgKiB0ZXJtIGZyb20gYWJvdmUuXG4gICAgICAgICAgICovXG4gICAgICAgICAgdmFyIGZpZWxkID0gY2xhdXNlLmZpZWxkc1trXSxcbiAgICAgICAgICAgICAgZmllbGRQb3N0aW5nID0gcG9zdGluZ1tmaWVsZF0sXG4gICAgICAgICAgICAgIG1hdGNoaW5nRG9jdW1lbnRSZWZzID0gT2JqZWN0LmtleXMoZmllbGRQb3N0aW5nKSxcbiAgICAgICAgICAgICAgdGVybUZpZWxkID0gZXhwYW5kZWRUZXJtICsgXCIvXCIgKyBmaWVsZCxcbiAgICAgICAgICAgICAgbWF0Y2hpbmdEb2N1bWVudHNTZXQgPSBuZXcgbHVuci5TZXQobWF0Y2hpbmdEb2N1bWVudFJlZnMpXG5cbiAgICAgICAgICAvKlxuICAgICAgICAgICAqIGlmIHRoZSBwcmVzZW5jZSBvZiB0aGlzIHRlcm0gaXMgcmVxdWlyZWQgZW5zdXJlIHRoYXQgdGhlIG1hdGNoaW5nXG4gICAgICAgICAgICogZG9jdW1lbnRzIGFyZSBhZGRlZCB0byB0aGUgc2V0IG9mIHJlcXVpcmVkIG1hdGNoZXMgZm9yIHRoaXMgY2xhdXNlLlxuICAgICAgICAgICAqXG4gICAgICAgICAgICovXG4gICAgICAgICAgaWYgKGNsYXVzZS5wcmVzZW5jZSA9PSBsdW5yLlF1ZXJ5LnByZXNlbmNlLlJFUVVJUkVEKSB7XG4gICAgICAgICAgICBjbGF1c2VNYXRjaGVzID0gY2xhdXNlTWF0Y2hlcy51bmlvbihtYXRjaGluZ0RvY3VtZW50c1NldClcblxuICAgICAgICAgICAgaWYgKHJlcXVpcmVkTWF0Y2hlc1tmaWVsZF0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICByZXF1aXJlZE1hdGNoZXNbZmllbGRdID0gbHVuci5TZXQuY29tcGxldGVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvKlxuICAgICAgICAgICAqIGlmIHRoZSBwcmVzZW5jZSBvZiB0aGlzIHRlcm0gaXMgcHJvaGliaXRlZCBlbnN1cmUgdGhhdCB0aGUgbWF0Y2hpbmdcbiAgICAgICAgICAgKiBkb2N1bWVudHMgYXJlIGFkZGVkIHRvIHRoZSBzZXQgb2YgcHJvaGliaXRlZCBtYXRjaGVzIGZvciB0aGlzIGZpZWxkLFxuICAgICAgICAgICAqIGNyZWF0aW5nIHRoYXQgc2V0IGlmIGl0IGRvZXMgbm90IHlldCBleGlzdC5cbiAgICAgICAgICAgKi9cbiAgICAgICAgICBpZiAoY2xhdXNlLnByZXNlbmNlID09IGx1bnIuUXVlcnkucHJlc2VuY2UuUFJPSElCSVRFRCkge1xuICAgICAgICAgICAgaWYgKHByb2hpYml0ZWRNYXRjaGVzW2ZpZWxkXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgIHByb2hpYml0ZWRNYXRjaGVzW2ZpZWxkXSA9IGx1bnIuU2V0LmVtcHR5XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHByb2hpYml0ZWRNYXRjaGVzW2ZpZWxkXSA9IHByb2hpYml0ZWRNYXRjaGVzW2ZpZWxkXS51bmlvbihtYXRjaGluZ0RvY3VtZW50c1NldClcblxuICAgICAgICAgICAgLypcbiAgICAgICAgICAgICAqIFByb2hpYml0ZWQgbWF0Y2hlcyBzaG91bGQgbm90IGJlIHBhcnQgb2YgdGhlIHF1ZXJ5IHZlY3RvciB1c2VkIGZvclxuICAgICAgICAgICAgICogc2ltaWxhcml0eSBzY29yaW5nIGFuZCBubyBtZXRhZGF0YSBzaG91bGQgYmUgZXh0cmFjdGVkIHNvIHdlIGNvbnRpbnVlXG4gICAgICAgICAgICAgKiB0byB0aGUgbmV4dCBmaWVsZFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBjb250aW51ZVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC8qXG4gICAgICAgICAgICogVGhlIHF1ZXJ5IGZpZWxkIHZlY3RvciBpcyBwb3B1bGF0ZWQgdXNpbmcgdGhlIHRlcm1JbmRleCBmb3VuZCBmb3JcbiAgICAgICAgICAgKiB0aGUgdGVybSBhbmQgYSB1bml0IHZhbHVlIHdpdGggdGhlIGFwcHJvcHJpYXRlIGJvb3N0IGFwcGxpZWQuXG4gICAgICAgICAgICogVXNpbmcgdXBzZXJ0IGJlY2F1c2UgdGhlcmUgY291bGQgYWxyZWFkeSBiZSBhbiBlbnRyeSBpbiB0aGUgdmVjdG9yXG4gICAgICAgICAgICogZm9yIHRoZSB0ZXJtIHdlIGFyZSB3b3JraW5nIHdpdGguIEluIHRoYXQgY2FzZSB3ZSBqdXN0IGFkZCB0aGUgc2NvcmVzXG4gICAgICAgICAgICogdG9nZXRoZXIuXG4gICAgICAgICAgICovXG4gICAgICAgICAgcXVlcnlWZWN0b3JzW2ZpZWxkXS51cHNlcnQodGVybUluZGV4LCBjbGF1c2UuYm9vc3QsIGZ1bmN0aW9uIChhLCBiKSB7IHJldHVybiBhICsgYiB9KVxuXG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogSWYgd2UndmUgYWxyZWFkeSBzZWVuIHRoaXMgdGVybSwgZmllbGQgY29tYm8gdGhlbiB3ZSd2ZSBhbHJlYWR5IGNvbGxlY3RlZFxuICAgICAgICAgICAqIHRoZSBtYXRjaGluZyBkb2N1bWVudHMgYW5kIG1ldGFkYXRhLCBubyBuZWVkIHRvIGdvIHRocm91Z2ggYWxsIHRoYXQgYWdhaW5cbiAgICAgICAgICAgKi9cbiAgICAgICAgICBpZiAodGVybUZpZWxkQ2FjaGVbdGVybUZpZWxkXSkge1xuICAgICAgICAgICAgY29udGludWVcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBmb3IgKHZhciBsID0gMDsgbCA8IG1hdGNoaW5nRG9jdW1lbnRSZWZzLmxlbmd0aDsgbCsrKSB7XG4gICAgICAgICAgICAvKlxuICAgICAgICAgICAgICogQWxsIG1ldGFkYXRhIGZvciB0aGlzIHRlcm0vZmllbGQvZG9jdW1lbnQgdHJpcGxlXG4gICAgICAgICAgICAgKiBhcmUgdGhlbiBleHRyYWN0ZWQgYW5kIGNvbGxlY3RlZCBpbnRvIGFuIGluc3RhbmNlXG4gICAgICAgICAgICAgKiBvZiBsdW5yLk1hdGNoRGF0YSByZWFkeSB0byBiZSByZXR1cm5lZCBpbiB0aGUgcXVlcnlcbiAgICAgICAgICAgICAqIHJlc3VsdHNcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgdmFyIG1hdGNoaW5nRG9jdW1lbnRSZWYgPSBtYXRjaGluZ0RvY3VtZW50UmVmc1tsXSxcbiAgICAgICAgICAgICAgICBtYXRjaGluZ0ZpZWxkUmVmID0gbmV3IGx1bnIuRmllbGRSZWYgKG1hdGNoaW5nRG9jdW1lbnRSZWYsIGZpZWxkKSxcbiAgICAgICAgICAgICAgICBtZXRhZGF0YSA9IGZpZWxkUG9zdGluZ1ttYXRjaGluZ0RvY3VtZW50UmVmXSxcbiAgICAgICAgICAgICAgICBmaWVsZE1hdGNoXG5cbiAgICAgICAgICAgIGlmICgoZmllbGRNYXRjaCA9IG1hdGNoaW5nRmllbGRzW21hdGNoaW5nRmllbGRSZWZdKSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgIG1hdGNoaW5nRmllbGRzW21hdGNoaW5nRmllbGRSZWZdID0gbmV3IGx1bnIuTWF0Y2hEYXRhIChleHBhbmRlZFRlcm0sIGZpZWxkLCBtZXRhZGF0YSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGZpZWxkTWF0Y2guYWRkKGV4cGFuZGVkVGVybSwgZmllbGQsIG1ldGFkYXRhKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGVybUZpZWxkQ2FjaGVbdGVybUZpZWxkXSA9IHRydWVcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIElmIHRoZSBwcmVzZW5jZSB3YXMgcmVxdWlyZWQgd2UgbmVlZCB0byB1cGRhdGUgdGhlIHJlcXVpcmVkTWF0Y2hlcyBmaWVsZCBzZXRzLlxuICAgICAqIFdlIGRvIHRoaXMgYWZ0ZXIgYWxsIGZpZWxkcyBmb3IgdGhlIHRlcm0gaGF2ZSBjb2xsZWN0ZWQgdGhlaXIgbWF0Y2hlcyBiZWNhdXNlXG4gICAgICogdGhlIGNsYXVzZSB0ZXJtcyBwcmVzZW5jZSBpcyByZXF1aXJlZCBpbiBfYW55XyBvZiB0aGUgZmllbGRzIG5vdCBfYWxsXyBvZiB0aGVcbiAgICAgKiBmaWVsZHMuXG4gICAgICovXG4gICAgaWYgKGNsYXVzZS5wcmVzZW5jZSA9PT0gbHVuci5RdWVyeS5wcmVzZW5jZS5SRVFVSVJFRCkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCBjbGF1c2UuZmllbGRzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBmaWVsZCA9IGNsYXVzZS5maWVsZHNba11cbiAgICAgICAgcmVxdWlyZWRNYXRjaGVzW2ZpZWxkXSA9IHJlcXVpcmVkTWF0Y2hlc1tmaWVsZF0uaW50ZXJzZWN0KGNsYXVzZU1hdGNoZXMpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIE5lZWQgdG8gY29tYmluZSB0aGUgZmllbGQgc2NvcGVkIHJlcXVpcmVkIGFuZCBwcm9oaWJpdGVkXG4gICAqIG1hdGNoaW5nIGRvY3VtZW50cyBpbnRvIGEgZ2xvYmFsIHNldCBvZiByZXF1aXJlZCBhbmQgcHJvaGliaXRlZFxuICAgKiBtYXRjaGVzXG4gICAqL1xuICB2YXIgYWxsUmVxdWlyZWRNYXRjaGVzID0gbHVuci5TZXQuY29tcGxldGUsXG4gICAgICBhbGxQcm9oaWJpdGVkTWF0Y2hlcyA9IGx1bnIuU2V0LmVtcHR5XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmZpZWxkcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBmaWVsZCA9IHRoaXMuZmllbGRzW2ldXG5cbiAgICBpZiAocmVxdWlyZWRNYXRjaGVzW2ZpZWxkXSkge1xuICAgICAgYWxsUmVxdWlyZWRNYXRjaGVzID0gYWxsUmVxdWlyZWRNYXRjaGVzLmludGVyc2VjdChyZXF1aXJlZE1hdGNoZXNbZmllbGRdKVxuICAgIH1cblxuICAgIGlmIChwcm9oaWJpdGVkTWF0Y2hlc1tmaWVsZF0pIHtcbiAgICAgIGFsbFByb2hpYml0ZWRNYXRjaGVzID0gYWxsUHJvaGliaXRlZE1hdGNoZXMudW5pb24ocHJvaGliaXRlZE1hdGNoZXNbZmllbGRdKVxuICAgIH1cbiAgfVxuXG4gIHZhciBtYXRjaGluZ0ZpZWxkUmVmcyA9IE9iamVjdC5rZXlzKG1hdGNoaW5nRmllbGRzKSxcbiAgICAgIHJlc3VsdHMgPSBbXSxcbiAgICAgIG1hdGNoZXMgPSBPYmplY3QuY3JlYXRlKG51bGwpXG5cbiAgLypcbiAgICogSWYgdGhlIHF1ZXJ5IGlzIG5lZ2F0ZWQgKGNvbnRhaW5zIG9ubHkgcHJvaGliaXRlZCB0ZXJtcylcbiAgICogd2UgbmVlZCB0byBnZXQgX2FsbF8gZmllbGRSZWZzIGN1cnJlbnRseSBleGlzdGluZyBpbiB0aGVcbiAgICogaW5kZXguIFRoaXMgaXMgb25seSBkb25lIHdoZW4gd2Uga25vdyB0aGF0IHRoZSBxdWVyeSBpc1xuICAgKiBlbnRpcmVseSBwcm9oaWJpdGVkIHRlcm1zIHRvIGF2b2lkIGFueSBjb3N0IG9mIGdldHRpbmcgYWxsXG4gICAqIGZpZWxkUmVmcyB1bm5lY2Vzc2FyaWx5LlxuICAgKlxuICAgKiBBZGRpdGlvbmFsbHksIGJsYW5rIE1hdGNoRGF0YSBtdXN0IGJlIGNyZWF0ZWQgdG8gY29ycmVjdGx5XG4gICAqIHBvcHVsYXRlIHRoZSByZXN1bHRzLlxuICAgKi9cbiAgaWYgKHF1ZXJ5LmlzTmVnYXRlZCgpKSB7XG4gICAgbWF0Y2hpbmdGaWVsZFJlZnMgPSBPYmplY3Qua2V5cyh0aGlzLmZpZWxkVmVjdG9ycylcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbWF0Y2hpbmdGaWVsZFJlZnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBtYXRjaGluZ0ZpZWxkUmVmID0gbWF0Y2hpbmdGaWVsZFJlZnNbaV1cbiAgICAgIHZhciBmaWVsZFJlZiA9IGx1bnIuRmllbGRSZWYuZnJvbVN0cmluZyhtYXRjaGluZ0ZpZWxkUmVmKVxuICAgICAgbWF0Y2hpbmdGaWVsZHNbbWF0Y2hpbmdGaWVsZFJlZl0gPSBuZXcgbHVuci5NYXRjaERhdGFcbiAgICB9XG4gIH1cblxuICBmb3IgKHZhciBpID0gMDsgaSA8IG1hdGNoaW5nRmllbGRSZWZzLmxlbmd0aDsgaSsrKSB7XG4gICAgLypcbiAgICAgKiBDdXJyZW50bHkgd2UgaGF2ZSBkb2N1bWVudCBmaWVsZHMgdGhhdCBtYXRjaCB0aGUgcXVlcnksIGJ1dCB3ZVxuICAgICAqIG5lZWQgdG8gcmV0dXJuIGRvY3VtZW50cy4gVGhlIG1hdGNoRGF0YSBhbmQgc2NvcmVzIGFyZSBjb21iaW5lZFxuICAgICAqIGZyb20gbXVsdGlwbGUgZmllbGRzIGJlbG9uZ2luZyB0byB0aGUgc2FtZSBkb2N1bWVudC5cbiAgICAgKlxuICAgICAqIFNjb3JlcyBhcmUgY2FsY3VsYXRlZCBieSBmaWVsZCwgdXNpbmcgdGhlIHF1ZXJ5IHZlY3RvcnMgY3JlYXRlZFxuICAgICAqIGFib3ZlLCBhbmQgY29tYmluZWQgaW50byBhIGZpbmFsIGRvY3VtZW50IHNjb3JlIHVzaW5nIGFkZGl0aW9uLlxuICAgICAqL1xuICAgIHZhciBmaWVsZFJlZiA9IGx1bnIuRmllbGRSZWYuZnJvbVN0cmluZyhtYXRjaGluZ0ZpZWxkUmVmc1tpXSksXG4gICAgICAgIGRvY1JlZiA9IGZpZWxkUmVmLmRvY1JlZlxuXG4gICAgaWYgKCFhbGxSZXF1aXJlZE1hdGNoZXMuY29udGFpbnMoZG9jUmVmKSkge1xuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICBpZiAoYWxsUHJvaGliaXRlZE1hdGNoZXMuY29udGFpbnMoZG9jUmVmKSkge1xuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICB2YXIgZmllbGRWZWN0b3IgPSB0aGlzLmZpZWxkVmVjdG9yc1tmaWVsZFJlZl0sXG4gICAgICAgIHNjb3JlID0gcXVlcnlWZWN0b3JzW2ZpZWxkUmVmLmZpZWxkTmFtZV0uc2ltaWxhcml0eShmaWVsZFZlY3RvciksXG4gICAgICAgIGRvY01hdGNoXG5cbiAgICBpZiAoKGRvY01hdGNoID0gbWF0Y2hlc1tkb2NSZWZdKSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBkb2NNYXRjaC5zY29yZSArPSBzY29yZVxuICAgICAgZG9jTWF0Y2gubWF0Y2hEYXRhLmNvbWJpbmUobWF0Y2hpbmdGaWVsZHNbZmllbGRSZWZdKVxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgbWF0Y2ggPSB7XG4gICAgICAgIHJlZjogZG9jUmVmLFxuICAgICAgICBzY29yZTogc2NvcmUsXG4gICAgICAgIG1hdGNoRGF0YTogbWF0Y2hpbmdGaWVsZHNbZmllbGRSZWZdXG4gICAgICB9XG4gICAgICBtYXRjaGVzW2RvY1JlZl0gPSBtYXRjaFxuICAgICAgcmVzdWx0cy5wdXNoKG1hdGNoKVxuICAgIH1cbiAgfVxuXG4gIC8qXG4gICAqIFNvcnQgdGhlIHJlc3VsdHMgb2JqZWN0cyBieSBzY29yZSwgaGlnaGVzdCBmaXJzdC5cbiAgICovXG4gIHJldHVybiByZXN1bHRzLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICByZXR1cm4gYi5zY29yZSAtIGEuc2NvcmVcbiAgfSlcbn1cblxuLyoqXG4gKiBQcmVwYXJlcyB0aGUgaW5kZXggZm9yIEpTT04gc2VyaWFsaXphdGlvbi5cbiAqXG4gKiBUaGUgc2NoZW1hIGZvciB0aGlzIEpTT04gYmxvYiB3aWxsIGJlIGRlc2NyaWJlZCBpbiBhXG4gKiBzZXBhcmF0ZSBKU09OIHNjaGVtYSBmaWxlLlxuICpcbiAqIEByZXR1cm5zIHtPYmplY3R9XG4gKi9cbmx1bnIuSW5kZXgucHJvdG90eXBlLnRvSlNPTiA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGludmVydGVkSW5kZXggPSBPYmplY3Qua2V5cyh0aGlzLmludmVydGVkSW5kZXgpXG4gICAgLnNvcnQoKVxuICAgIC5tYXAoZnVuY3Rpb24gKHRlcm0pIHtcbiAgICAgIHJldHVybiBbdGVybSwgdGhpcy5pbnZlcnRlZEluZGV4W3Rlcm1dXVxuICAgIH0sIHRoaXMpXG5cbiAgdmFyIGZpZWxkVmVjdG9ycyA9IE9iamVjdC5rZXlzKHRoaXMuZmllbGRWZWN0b3JzKVxuICAgIC5tYXAoZnVuY3Rpb24gKHJlZikge1xuICAgICAgcmV0dXJuIFtyZWYsIHRoaXMuZmllbGRWZWN0b3JzW3JlZl0udG9KU09OKCldXG4gICAgfSwgdGhpcylcblxuICByZXR1cm4ge1xuICAgIHZlcnNpb246IGx1bnIudmVyc2lvbixcbiAgICBmaWVsZHM6IHRoaXMuZmllbGRzLFxuICAgIGZpZWxkVmVjdG9yczogZmllbGRWZWN0b3JzLFxuICAgIGludmVydGVkSW5kZXg6IGludmVydGVkSW5kZXgsXG4gICAgcGlwZWxpbmU6IHRoaXMucGlwZWxpbmUudG9KU09OKClcbiAgfVxufVxuXG4vKipcbiAqIExvYWRzIGEgcHJldmlvdXNseSBzZXJpYWxpemVkIGx1bnIuSW5kZXhcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gc2VyaWFsaXplZEluZGV4IC0gQSBwcmV2aW91c2x5IHNlcmlhbGl6ZWQgbHVuci5JbmRleFxuICogQHJldHVybnMge2x1bnIuSW5kZXh9XG4gKi9cbmx1bnIuSW5kZXgubG9hZCA9IGZ1bmN0aW9uIChzZXJpYWxpemVkSW5kZXgpIHtcbiAgdmFyIGF0dHJzID0ge30sXG4gICAgICBmaWVsZFZlY3RvcnMgPSB7fSxcbiAgICAgIHNlcmlhbGl6ZWRWZWN0b3JzID0gc2VyaWFsaXplZEluZGV4LmZpZWxkVmVjdG9ycyxcbiAgICAgIGludmVydGVkSW5kZXggPSBPYmplY3QuY3JlYXRlKG51bGwpLFxuICAgICAgc2VyaWFsaXplZEludmVydGVkSW5kZXggPSBzZXJpYWxpemVkSW5kZXguaW52ZXJ0ZWRJbmRleCxcbiAgICAgIHRva2VuU2V0QnVpbGRlciA9IG5ldyBsdW5yLlRva2VuU2V0LkJ1aWxkZXIsXG4gICAgICBwaXBlbGluZSA9IGx1bnIuUGlwZWxpbmUubG9hZChzZXJpYWxpemVkSW5kZXgucGlwZWxpbmUpXG5cbiAgaWYgKHNlcmlhbGl6ZWRJbmRleC52ZXJzaW9uICE9IGx1bnIudmVyc2lvbikge1xuICAgIGx1bnIudXRpbHMud2FybihcIlZlcnNpb24gbWlzbWF0Y2ggd2hlbiBsb2FkaW5nIHNlcmlhbGlzZWQgaW5kZXguIEN1cnJlbnQgdmVyc2lvbiBvZiBsdW5yICdcIiArIGx1bnIudmVyc2lvbiArIFwiJyBkb2VzIG5vdCBtYXRjaCBzZXJpYWxpemVkIGluZGV4ICdcIiArIHNlcmlhbGl6ZWRJbmRleC52ZXJzaW9uICsgXCInXCIpXG4gIH1cblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHNlcmlhbGl6ZWRWZWN0b3JzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHR1cGxlID0gc2VyaWFsaXplZFZlY3RvcnNbaV0sXG4gICAgICAgIHJlZiA9IHR1cGxlWzBdLFxuICAgICAgICBlbGVtZW50cyA9IHR1cGxlWzFdXG5cbiAgICBmaWVsZFZlY3RvcnNbcmVmXSA9IG5ldyBsdW5yLlZlY3RvcihlbGVtZW50cylcbiAgfVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc2VyaWFsaXplZEludmVydGVkSW5kZXgubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgdHVwbGUgPSBzZXJpYWxpemVkSW52ZXJ0ZWRJbmRleFtpXSxcbiAgICAgICAgdGVybSA9IHR1cGxlWzBdLFxuICAgICAgICBwb3N0aW5nID0gdHVwbGVbMV1cblxuICAgIHRva2VuU2V0QnVpbGRlci5pbnNlcnQodGVybSlcbiAgICBpbnZlcnRlZEluZGV4W3Rlcm1dID0gcG9zdGluZ1xuICB9XG5cbiAgdG9rZW5TZXRCdWlsZGVyLmZpbmlzaCgpXG5cbiAgYXR0cnMuZmllbGRzID0gc2VyaWFsaXplZEluZGV4LmZpZWxkc1xuXG4gIGF0dHJzLmZpZWxkVmVjdG9ycyA9IGZpZWxkVmVjdG9yc1xuICBhdHRycy5pbnZlcnRlZEluZGV4ID0gaW52ZXJ0ZWRJbmRleFxuICBhdHRycy50b2tlblNldCA9IHRva2VuU2V0QnVpbGRlci5yb290XG4gIGF0dHJzLnBpcGVsaW5lID0gcGlwZWxpbmVcblxuICByZXR1cm4gbmV3IGx1bnIuSW5kZXgoYXR0cnMpXG59XG4vKiFcbiAqIGx1bnIuQnVpbGRlclxuICogQ29weXJpZ2h0IChDKSAyMDE4IE9saXZlciBOaWdodGluZ2FsZVxuICovXG5cbi8qKlxuICogbHVuci5CdWlsZGVyIHBlcmZvcm1zIGluZGV4aW5nIG9uIGEgc2V0IG9mIGRvY3VtZW50cyBhbmRcbiAqIHJldHVybnMgaW5zdGFuY2VzIG9mIGx1bnIuSW5kZXggcmVhZHkgZm9yIHF1ZXJ5aW5nLlxuICpcbiAqIEFsbCBjb25maWd1cmF0aW9uIG9mIHRoZSBpbmRleCBpcyBkb25lIHZpYSB0aGUgYnVpbGRlciwgdGhlXG4gKiBmaWVsZHMgdG8gaW5kZXgsIHRoZSBkb2N1bWVudCByZWZlcmVuY2UsIHRoZSB0ZXh0IHByb2Nlc3NpbmdcbiAqIHBpcGVsaW5lIGFuZCBkb2N1bWVudCBzY29yaW5nIHBhcmFtZXRlcnMgYXJlIGFsbCBzZXQgb24gdGhlXG4gKiBidWlsZGVyIGJlZm9yZSBpbmRleGluZy5cbiAqXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBfcmVmIC0gSW50ZXJuYWwgcmVmZXJlbmNlIHRvIHRoZSBkb2N1bWVudCByZWZlcmVuY2UgZmllbGQuXG4gKiBAcHJvcGVydHkge3N0cmluZ1tdfSBfZmllbGRzIC0gSW50ZXJuYWwgcmVmZXJlbmNlIHRvIHRoZSBkb2N1bWVudCBmaWVsZHMgdG8gaW5kZXguXG4gKiBAcHJvcGVydHkge29iamVjdH0gaW52ZXJ0ZWRJbmRleCAtIFRoZSBpbnZlcnRlZCBpbmRleCBtYXBzIHRlcm1zIHRvIGRvY3VtZW50IGZpZWxkcy5cbiAqIEBwcm9wZXJ0eSB7b2JqZWN0fSBkb2N1bWVudFRlcm1GcmVxdWVuY2llcyAtIEtlZXBzIHRyYWNrIG9mIGRvY3VtZW50IHRlcm0gZnJlcXVlbmNpZXMuXG4gKiBAcHJvcGVydHkge29iamVjdH0gZG9jdW1lbnRMZW5ndGhzIC0gS2VlcHMgdHJhY2sgb2YgdGhlIGxlbmd0aCBvZiBkb2N1bWVudHMgYWRkZWQgdG8gdGhlIGluZGV4LlxuICogQHByb3BlcnR5IHtsdW5yLnRva2VuaXplcn0gdG9rZW5pemVyIC0gRnVuY3Rpb24gZm9yIHNwbGl0dGluZyBzdHJpbmdzIGludG8gdG9rZW5zIGZvciBpbmRleGluZy5cbiAqIEBwcm9wZXJ0eSB7bHVuci5QaXBlbGluZX0gcGlwZWxpbmUgLSBUaGUgcGlwZWxpbmUgcGVyZm9ybXMgdGV4dCBwcm9jZXNzaW5nIG9uIHRva2VucyBiZWZvcmUgaW5kZXhpbmcuXG4gKiBAcHJvcGVydHkge2x1bnIuUGlwZWxpbmV9IHNlYXJjaFBpcGVsaW5lIC0gQSBwaXBlbGluZSBmb3IgcHJvY2Vzc2luZyBzZWFyY2ggdGVybXMgYmVmb3JlIHF1ZXJ5aW5nIHRoZSBpbmRleC5cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBkb2N1bWVudENvdW50IC0gS2VlcHMgdHJhY2sgb2YgdGhlIHRvdGFsIG51bWJlciBvZiBkb2N1bWVudHMgaW5kZXhlZC5cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBfYiAtIEEgcGFyYW1ldGVyIHRvIGNvbnRyb2wgZmllbGQgbGVuZ3RoIG5vcm1hbGl6YXRpb24sIHNldHRpbmcgdGhpcyB0byAwIGRpc2FibGVkIG5vcm1hbGl6YXRpb24sIDEgZnVsbHkgbm9ybWFsaXplcyBmaWVsZCBsZW5ndGhzLCB0aGUgZGVmYXVsdCB2YWx1ZSBpcyAwLjc1LlxuICogQHByb3BlcnR5IHtudW1iZXJ9IF9rMSAtIEEgcGFyYW1ldGVyIHRvIGNvbnRyb2wgaG93IHF1aWNrbHkgYW4gaW5jcmVhc2UgaW4gdGVybSBmcmVxdWVuY3kgcmVzdWx0cyBpbiB0ZXJtIGZyZXF1ZW5jeSBzYXR1cmF0aW9uLCB0aGUgZGVmYXVsdCB2YWx1ZSBpcyAxLjIuXG4gKiBAcHJvcGVydHkge251bWJlcn0gdGVybUluZGV4IC0gQSBjb3VudGVyIGluY3JlbWVudGVkIGZvciBlYWNoIHVuaXF1ZSB0ZXJtLCB1c2VkIHRvIGlkZW50aWZ5IGEgdGVybXMgcG9zaXRpb24gaW4gdGhlIHZlY3RvciBzcGFjZS5cbiAqIEBwcm9wZXJ0eSB7YXJyYXl9IG1ldGFkYXRhV2hpdGVsaXN0IC0gQSBsaXN0IG9mIG1ldGFkYXRhIGtleXMgdGhhdCBoYXZlIGJlZW4gd2hpdGVsaXN0ZWQgZm9yIGVudHJ5IGluIHRoZSBpbmRleC5cbiAqL1xubHVuci5CdWlsZGVyID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLl9yZWYgPSBcImlkXCJcbiAgdGhpcy5fZmllbGRzID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuICB0aGlzLl9kb2N1bWVudHMgPSBPYmplY3QuY3JlYXRlKG51bGwpXG4gIHRoaXMuaW52ZXJ0ZWRJbmRleCA9IE9iamVjdC5jcmVhdGUobnVsbClcbiAgdGhpcy5maWVsZFRlcm1GcmVxdWVuY2llcyA9IHt9XG4gIHRoaXMuZmllbGRMZW5ndGhzID0ge31cbiAgdGhpcy50b2tlbml6ZXIgPSBsdW5yLnRva2VuaXplclxuICB0aGlzLnBpcGVsaW5lID0gbmV3IGx1bnIuUGlwZWxpbmVcbiAgdGhpcy5zZWFyY2hQaXBlbGluZSA9IG5ldyBsdW5yLlBpcGVsaW5lXG4gIHRoaXMuZG9jdW1lbnRDb3VudCA9IDBcbiAgdGhpcy5fYiA9IDAuNzVcbiAgdGhpcy5fazEgPSAxLjJcbiAgdGhpcy50ZXJtSW5kZXggPSAwXG4gIHRoaXMubWV0YWRhdGFXaGl0ZWxpc3QgPSBbXVxufVxuXG4vKipcbiAqIFNldHMgdGhlIGRvY3VtZW50IGZpZWxkIHVzZWQgYXMgdGhlIGRvY3VtZW50IHJlZmVyZW5jZS4gRXZlcnkgZG9jdW1lbnQgbXVzdCBoYXZlIHRoaXMgZmllbGQuXG4gKiBUaGUgdHlwZSBvZiB0aGlzIGZpZWxkIGluIHRoZSBkb2N1bWVudCBzaG91bGQgYmUgYSBzdHJpbmcsIGlmIGl0IGlzIG5vdCBhIHN0cmluZyBpdCB3aWxsIGJlXG4gKiBjb2VyY2VkIGludG8gYSBzdHJpbmcgYnkgY2FsbGluZyB0b1N0cmluZy5cbiAqXG4gKiBUaGUgZGVmYXVsdCByZWYgaXMgJ2lkJy5cbiAqXG4gKiBUaGUgcmVmIHNob3VsZCBfbm90XyBiZSBjaGFuZ2VkIGR1cmluZyBpbmRleGluZywgaXQgc2hvdWxkIGJlIHNldCBiZWZvcmUgYW55IGRvY3VtZW50cyBhcmVcbiAqIGFkZGVkIHRvIHRoZSBpbmRleC4gQ2hhbmdpbmcgaXQgZHVyaW5nIGluZGV4aW5nIGNhbiBsZWFkIHRvIGluY29uc2lzdGVudCByZXN1bHRzLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSByZWYgLSBUaGUgbmFtZSBvZiB0aGUgcmVmZXJlbmNlIGZpZWxkIGluIHRoZSBkb2N1bWVudC5cbiAqL1xubHVuci5CdWlsZGVyLnByb3RvdHlwZS5yZWYgPSBmdW5jdGlvbiAocmVmKSB7XG4gIHRoaXMuX3JlZiA9IHJlZlxufVxuXG4vKipcbiAqIEEgZnVuY3Rpb24gdGhhdCBpcyB1c2VkIHRvIGV4dHJhY3QgYSBmaWVsZCBmcm9tIGEgZG9jdW1lbnQuXG4gKlxuICogTHVuciBleHBlY3RzIGEgZmllbGQgdG8gYmUgYXQgdGhlIHRvcCBsZXZlbCBvZiBhIGRvY3VtZW50LCBpZiBob3dldmVyIHRoZSBmaWVsZFxuICogaXMgZGVlcGx5IG5lc3RlZCB3aXRoaW4gYSBkb2N1bWVudCBhbiBleHRyYWN0b3IgZnVuY3Rpb24gY2FuIGJlIHVzZWQgdG8gZXh0cmFjdFxuICogdGhlIHJpZ2h0IGZpZWxkIGZvciBpbmRleGluZy5cbiAqXG4gKiBAY2FsbGJhY2sgZmllbGRFeHRyYWN0b3JcbiAqIEBwYXJhbSB7b2JqZWN0fSBkb2MgLSBUaGUgZG9jdW1lbnQgYmVpbmcgYWRkZWQgdG8gdGhlIGluZGV4LlxuICogQHJldHVybnMgez8oc3RyaW5nfG9iamVjdHxvYmplY3RbXSl9IG9iaiAtIFRoZSBvYmplY3QgdGhhdCB3aWxsIGJlIGluZGV4ZWQgZm9yIHRoaXMgZmllbGQuXG4gKiBAZXhhbXBsZSA8Y2FwdGlvbj5FeHRyYWN0aW5nIGEgbmVzdGVkIGZpZWxkPC9jYXB0aW9uPlxuICogZnVuY3Rpb24gKGRvYykgeyByZXR1cm4gZG9jLm5lc3RlZC5maWVsZCB9XG4gKi9cblxuLyoqXG4gKiBBZGRzIGEgZmllbGQgdG8gdGhlIGxpc3Qgb2YgZG9jdW1lbnQgZmllbGRzIHRoYXQgd2lsbCBiZSBpbmRleGVkLiBFdmVyeSBkb2N1bWVudCBiZWluZ1xuICogaW5kZXhlZCBzaG91bGQgaGF2ZSB0aGlzIGZpZWxkLiBOdWxsIHZhbHVlcyBmb3IgdGhpcyBmaWVsZCBpbiBpbmRleGVkIGRvY3VtZW50cyB3aWxsXG4gKiBub3QgY2F1c2UgZXJyb3JzIGJ1dCB3aWxsIGxpbWl0IHRoZSBjaGFuY2Ugb2YgdGhhdCBkb2N1bWVudCBiZWluZyByZXRyaWV2ZWQgYnkgc2VhcmNoZXMuXG4gKlxuICogQWxsIGZpZWxkcyBzaG91bGQgYmUgYWRkZWQgYmVmb3JlIGFkZGluZyBkb2N1bWVudHMgdG8gdGhlIGluZGV4LiBBZGRpbmcgZmllbGRzIGFmdGVyXG4gKiBhIGRvY3VtZW50IGhhcyBiZWVuIGluZGV4ZWQgd2lsbCBoYXZlIG5vIGVmZmVjdCBvbiBhbHJlYWR5IGluZGV4ZWQgZG9jdW1lbnRzLlxuICpcbiAqIEZpZWxkcyBjYW4gYmUgYm9vc3RlZCBhdCBidWlsZCB0aW1lLiBUaGlzIGFsbG93cyB0ZXJtcyB3aXRoaW4gdGhhdCBmaWVsZCB0byBoYXZlIG1vcmVcbiAqIGltcG9ydGFuY2Ugd2hlbiByYW5raW5nIHNlYXJjaCByZXN1bHRzLiBVc2UgYSBmaWVsZCBib29zdCB0byBzcGVjaWZ5IHRoYXQgbWF0Y2hlcyB3aXRoaW5cbiAqIG9uZSBmaWVsZCBhcmUgbW9yZSBpbXBvcnRhbnQgdGhhbiBvdGhlciBmaWVsZHMuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGZpZWxkTmFtZSAtIFRoZSBuYW1lIG9mIGEgZmllbGQgdG8gaW5kZXggaW4gYWxsIGRvY3VtZW50cy5cbiAqIEBwYXJhbSB7b2JqZWN0fSBhdHRyaWJ1dGVzIC0gT3B0aW9uYWwgYXR0cmlidXRlcyBhc3NvY2lhdGVkIHdpdGggdGhpcyBmaWVsZC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbYXR0cmlidXRlcy5ib29zdD0xXSAtIEJvb3N0IGFwcGxpZWQgdG8gYWxsIHRlcm1zIHdpdGhpbiB0aGlzIGZpZWxkLlxuICogQHBhcmFtIHtmaWVsZEV4dHJhY3Rvcn0gW2F0dHJpYnV0ZXMuZXh0cmFjdG9yXSAtIEZ1bmN0aW9uIHRvIGV4dHJhY3QgYSBmaWVsZCBmcm9tIGEgZG9jdW1lbnQuXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBmaWVsZE5hbWUgY2Fubm90IGNvbnRhaW4gdW5zdXBwb3J0ZWQgY2hhcmFjdGVycyAnLydcbiAqL1xubHVuci5CdWlsZGVyLnByb3RvdHlwZS5maWVsZCA9IGZ1bmN0aW9uIChmaWVsZE5hbWUsIGF0dHJpYnV0ZXMpIHtcbiAgaWYgKC9cXC8vLnRlc3QoZmllbGROYW1lKSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yIChcIkZpZWxkICdcIiArIGZpZWxkTmFtZSArIFwiJyBjb250YWlucyBpbGxlZ2FsIGNoYXJhY3RlciAnLydcIilcbiAgfVxuXG4gIHRoaXMuX2ZpZWxkc1tmaWVsZE5hbWVdID0gYXR0cmlidXRlcyB8fCB7fVxufVxuXG4vKipcbiAqIEEgcGFyYW1ldGVyIHRvIHR1bmUgdGhlIGFtb3VudCBvZiBmaWVsZCBsZW5ndGggbm9ybWFsaXNhdGlvbiB0aGF0IGlzIGFwcGxpZWQgd2hlblxuICogY2FsY3VsYXRpbmcgcmVsZXZhbmNlIHNjb3Jlcy4gQSB2YWx1ZSBvZiAwIHdpbGwgY29tcGxldGVseSBkaXNhYmxlIGFueSBub3JtYWxpc2F0aW9uXG4gKiBhbmQgYSB2YWx1ZSBvZiAxIHdpbGwgZnVsbHkgbm9ybWFsaXNlIGZpZWxkIGxlbmd0aHMuIFRoZSBkZWZhdWx0IGlzIDAuNzUuIFZhbHVlcyBvZiBiXG4gKiB3aWxsIGJlIGNsYW1wZWQgdG8gdGhlIHJhbmdlIDAgLSAxLlxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSBudW1iZXIgLSBUaGUgdmFsdWUgdG8gc2V0IGZvciB0aGlzIHR1bmluZyBwYXJhbWV0ZXIuXG4gKi9cbmx1bnIuQnVpbGRlci5wcm90b3R5cGUuYiA9IGZ1bmN0aW9uIChudW1iZXIpIHtcbiAgaWYgKG51bWJlciA8IDApIHtcbiAgICB0aGlzLl9iID0gMFxuICB9IGVsc2UgaWYgKG51bWJlciA+IDEpIHtcbiAgICB0aGlzLl9iID0gMVxuICB9IGVsc2Uge1xuICAgIHRoaXMuX2IgPSBudW1iZXJcbiAgfVxufVxuXG4vKipcbiAqIEEgcGFyYW1ldGVyIHRoYXQgY29udHJvbHMgdGhlIHNwZWVkIGF0IHdoaWNoIGEgcmlzZSBpbiB0ZXJtIGZyZXF1ZW5jeSByZXN1bHRzIGluIHRlcm1cbiAqIGZyZXF1ZW5jeSBzYXR1cmF0aW9uLiBUaGUgZGVmYXVsdCB2YWx1ZSBpcyAxLjIuIFNldHRpbmcgdGhpcyB0byBhIGhpZ2hlciB2YWx1ZSB3aWxsIGdpdmVcbiAqIHNsb3dlciBzYXR1cmF0aW9uIGxldmVscywgYSBsb3dlciB2YWx1ZSB3aWxsIHJlc3VsdCBpbiBxdWlja2VyIHNhdHVyYXRpb24uXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IG51bWJlciAtIFRoZSB2YWx1ZSB0byBzZXQgZm9yIHRoaXMgdHVuaW5nIHBhcmFtZXRlci5cbiAqL1xubHVuci5CdWlsZGVyLnByb3RvdHlwZS5rMSA9IGZ1bmN0aW9uIChudW1iZXIpIHtcbiAgdGhpcy5fazEgPSBudW1iZXJcbn1cblxuLyoqXG4gKiBBZGRzIGEgZG9jdW1lbnQgdG8gdGhlIGluZGV4LlxuICpcbiAqIEJlZm9yZSBhZGRpbmcgZmllbGRzIHRvIHRoZSBpbmRleCB0aGUgaW5kZXggc2hvdWxkIGhhdmUgYmVlbiBmdWxseSBzZXR1cCwgd2l0aCB0aGUgZG9jdW1lbnRcbiAqIHJlZiBhbmQgYWxsIGZpZWxkcyB0byBpbmRleCBhbHJlYWR5IGhhdmluZyBiZWVuIHNwZWNpZmllZC5cbiAqXG4gKiBUaGUgZG9jdW1lbnQgbXVzdCBoYXZlIGEgZmllbGQgbmFtZSBhcyBzcGVjaWZpZWQgYnkgdGhlIHJlZiAoYnkgZGVmYXVsdCB0aGlzIGlzICdpZCcpIGFuZFxuICogaXQgc2hvdWxkIGhhdmUgYWxsIGZpZWxkcyBkZWZpbmVkIGZvciBpbmRleGluZywgdGhvdWdoIG51bGwgb3IgdW5kZWZpbmVkIHZhbHVlcyB3aWxsIG5vdFxuICogY2F1c2UgZXJyb3JzLlxuICpcbiAqIEVudGlyZSBkb2N1bWVudHMgY2FuIGJlIGJvb3N0ZWQgYXQgYnVpbGQgdGltZS4gQXBwbHlpbmcgYSBib29zdCB0byBhIGRvY3VtZW50IGluZGljYXRlcyB0aGF0XG4gKiB0aGlzIGRvY3VtZW50IHNob3VsZCByYW5rIGhpZ2hlciBpbiBzZWFyY2ggcmVzdWx0cyB0aGFuIG90aGVyIGRvY3VtZW50cy5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gZG9jIC0gVGhlIGRvY3VtZW50IHRvIGFkZCB0byB0aGUgaW5kZXguXG4gKiBAcGFyYW0ge29iamVjdH0gYXR0cmlidXRlcyAtIE9wdGlvbmFsIGF0dHJpYnV0ZXMgYXNzb2NpYXRlZCB3aXRoIHRoaXMgZG9jdW1lbnQuXG4gKiBAcGFyYW0ge251bWJlcn0gW2F0dHJpYnV0ZXMuYm9vc3Q9MV0gLSBCb29zdCBhcHBsaWVkIHRvIGFsbCB0ZXJtcyB3aXRoaW4gdGhpcyBkb2N1bWVudC5cbiAqL1xubHVuci5CdWlsZGVyLnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiAoZG9jLCBhdHRyaWJ1dGVzKSB7XG4gIHZhciBkb2NSZWYgPSBkb2NbdGhpcy5fcmVmXSxcbiAgICAgIGZpZWxkcyA9IE9iamVjdC5rZXlzKHRoaXMuX2ZpZWxkcylcblxuICB0aGlzLl9kb2N1bWVudHNbZG9jUmVmXSA9IGF0dHJpYnV0ZXMgfHwge31cbiAgdGhpcy5kb2N1bWVudENvdW50ICs9IDFcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGZpZWxkcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBmaWVsZE5hbWUgPSBmaWVsZHNbaV0sXG4gICAgICAgIGV4dHJhY3RvciA9IHRoaXMuX2ZpZWxkc1tmaWVsZE5hbWVdLmV4dHJhY3RvcixcbiAgICAgICAgZmllbGQgPSBleHRyYWN0b3IgPyBleHRyYWN0b3IoZG9jKSA6IGRvY1tmaWVsZE5hbWVdLFxuICAgICAgICB0b2tlbnMgPSB0aGlzLnRva2VuaXplcihmaWVsZCwge1xuICAgICAgICAgIGZpZWxkczogW2ZpZWxkTmFtZV1cbiAgICAgICAgfSksXG4gICAgICAgIHRlcm1zID0gdGhpcy5waXBlbGluZS5ydW4odG9rZW5zKSxcbiAgICAgICAgZmllbGRSZWYgPSBuZXcgbHVuci5GaWVsZFJlZiAoZG9jUmVmLCBmaWVsZE5hbWUpLFxuICAgICAgICBmaWVsZFRlcm1zID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuXG4gICAgdGhpcy5maWVsZFRlcm1GcmVxdWVuY2llc1tmaWVsZFJlZl0gPSBmaWVsZFRlcm1zXG4gICAgdGhpcy5maWVsZExlbmd0aHNbZmllbGRSZWZdID0gMFxuXG4gICAgLy8gc3RvcmUgdGhlIGxlbmd0aCBvZiB0aGlzIGZpZWxkIGZvciB0aGlzIGRvY3VtZW50XG4gICAgdGhpcy5maWVsZExlbmd0aHNbZmllbGRSZWZdICs9IHRlcm1zLmxlbmd0aFxuXG4gICAgLy8gY2FsY3VsYXRlIHRlcm0gZnJlcXVlbmNpZXMgZm9yIHRoaXMgZmllbGRcbiAgICBmb3IgKHZhciBqID0gMDsgaiA8IHRlcm1zLmxlbmd0aDsgaisrKSB7XG4gICAgICB2YXIgdGVybSA9IHRlcm1zW2pdXG5cbiAgICAgIGlmIChmaWVsZFRlcm1zW3Rlcm1dID09IHVuZGVmaW5lZCkge1xuICAgICAgICBmaWVsZFRlcm1zW3Rlcm1dID0gMFxuICAgICAgfVxuXG4gICAgICBmaWVsZFRlcm1zW3Rlcm1dICs9IDFcblxuICAgICAgLy8gYWRkIHRvIGludmVydGVkIGluZGV4XG4gICAgICAvLyBjcmVhdGUgYW4gaW5pdGlhbCBwb3N0aW5nIGlmIG9uZSBkb2Vzbid0IGV4aXN0XG4gICAgICBpZiAodGhpcy5pbnZlcnRlZEluZGV4W3Rlcm1dID09IHVuZGVmaW5lZCkge1xuICAgICAgICB2YXIgcG9zdGluZyA9IE9iamVjdC5jcmVhdGUobnVsbClcbiAgICAgICAgcG9zdGluZ1tcIl9pbmRleFwiXSA9IHRoaXMudGVybUluZGV4XG4gICAgICAgIHRoaXMudGVybUluZGV4ICs9IDFcblxuICAgICAgICBmb3IgKHZhciBrID0gMDsgayA8IGZpZWxkcy5sZW5ndGg7IGsrKykge1xuICAgICAgICAgIHBvc3RpbmdbZmllbGRzW2tdXSA9IE9iamVjdC5jcmVhdGUobnVsbClcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaW52ZXJ0ZWRJbmRleFt0ZXJtXSA9IHBvc3RpbmdcbiAgICAgIH1cblxuICAgICAgLy8gYWRkIGFuIGVudHJ5IGZvciB0aGlzIHRlcm0vZmllbGROYW1lL2RvY1JlZiB0byB0aGUgaW52ZXJ0ZWRJbmRleFxuICAgICAgaWYgKHRoaXMuaW52ZXJ0ZWRJbmRleFt0ZXJtXVtmaWVsZE5hbWVdW2RvY1JlZl0gPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuaW52ZXJ0ZWRJbmRleFt0ZXJtXVtmaWVsZE5hbWVdW2RvY1JlZl0gPSBPYmplY3QuY3JlYXRlKG51bGwpXG4gICAgICB9XG5cbiAgICAgIC8vIHN0b3JlIGFsbCB3aGl0ZWxpc3RlZCBtZXRhZGF0YSBhYm91dCB0aGlzIHRva2VuIGluIHRoZVxuICAgICAgLy8gaW52ZXJ0ZWQgaW5kZXhcbiAgICAgIGZvciAodmFyIGwgPSAwOyBsIDwgdGhpcy5tZXRhZGF0YVdoaXRlbGlzdC5sZW5ndGg7IGwrKykge1xuICAgICAgICB2YXIgbWV0YWRhdGFLZXkgPSB0aGlzLm1ldGFkYXRhV2hpdGVsaXN0W2xdLFxuICAgICAgICAgICAgbWV0YWRhdGEgPSB0ZXJtLm1ldGFkYXRhW21ldGFkYXRhS2V5XVxuXG4gICAgICAgIGlmICh0aGlzLmludmVydGVkSW5kZXhbdGVybV1bZmllbGROYW1lXVtkb2NSZWZdW21ldGFkYXRhS2V5XSA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmludmVydGVkSW5kZXhbdGVybV1bZmllbGROYW1lXVtkb2NSZWZdW21ldGFkYXRhS2V5XSA9IFtdXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmludmVydGVkSW5kZXhbdGVybV1bZmllbGROYW1lXVtkb2NSZWZdW21ldGFkYXRhS2V5XS5wdXNoKG1ldGFkYXRhKVxuICAgICAgfVxuICAgIH1cblxuICB9XG59XG5cbi8qKlxuICogQ2FsY3VsYXRlcyB0aGUgYXZlcmFnZSBkb2N1bWVudCBsZW5ndGggZm9yIHRoaXMgaW5kZXhcbiAqXG4gKiBAcHJpdmF0ZVxuICovXG5sdW5yLkJ1aWxkZXIucHJvdG90eXBlLmNhbGN1bGF0ZUF2ZXJhZ2VGaWVsZExlbmd0aHMgPSBmdW5jdGlvbiAoKSB7XG5cbiAgdmFyIGZpZWxkUmVmcyA9IE9iamVjdC5rZXlzKHRoaXMuZmllbGRMZW5ndGhzKSxcbiAgICAgIG51bWJlck9mRmllbGRzID0gZmllbGRSZWZzLmxlbmd0aCxcbiAgICAgIGFjY3VtdWxhdG9yID0ge30sXG4gICAgICBkb2N1bWVudHNXaXRoRmllbGQgPSB7fVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbnVtYmVyT2ZGaWVsZHM7IGkrKykge1xuICAgIHZhciBmaWVsZFJlZiA9IGx1bnIuRmllbGRSZWYuZnJvbVN0cmluZyhmaWVsZFJlZnNbaV0pLFxuICAgICAgICBmaWVsZCA9IGZpZWxkUmVmLmZpZWxkTmFtZVxuXG4gICAgZG9jdW1lbnRzV2l0aEZpZWxkW2ZpZWxkXSB8fCAoZG9jdW1lbnRzV2l0aEZpZWxkW2ZpZWxkXSA9IDApXG4gICAgZG9jdW1lbnRzV2l0aEZpZWxkW2ZpZWxkXSArPSAxXG5cbiAgICBhY2N1bXVsYXRvcltmaWVsZF0gfHwgKGFjY3VtdWxhdG9yW2ZpZWxkXSA9IDApXG4gICAgYWNjdW11bGF0b3JbZmllbGRdICs9IHRoaXMuZmllbGRMZW5ndGhzW2ZpZWxkUmVmXVxuICB9XG5cbiAgdmFyIGZpZWxkcyA9IE9iamVjdC5rZXlzKHRoaXMuX2ZpZWxkcylcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGZpZWxkcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBmaWVsZE5hbWUgPSBmaWVsZHNbaV1cbiAgICBhY2N1bXVsYXRvcltmaWVsZE5hbWVdID0gYWNjdW11bGF0b3JbZmllbGROYW1lXSAvIGRvY3VtZW50c1dpdGhGaWVsZFtmaWVsZE5hbWVdXG4gIH1cblxuICB0aGlzLmF2ZXJhZ2VGaWVsZExlbmd0aCA9IGFjY3VtdWxhdG9yXG59XG5cbi8qKlxuICogQnVpbGRzIGEgdmVjdG9yIHNwYWNlIG1vZGVsIG9mIGV2ZXJ5IGRvY3VtZW50IHVzaW5nIGx1bnIuVmVjdG9yXG4gKlxuICogQHByaXZhdGVcbiAqL1xubHVuci5CdWlsZGVyLnByb3RvdHlwZS5jcmVhdGVGaWVsZFZlY3RvcnMgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBmaWVsZFZlY3RvcnMgPSB7fSxcbiAgICAgIGZpZWxkUmVmcyA9IE9iamVjdC5rZXlzKHRoaXMuZmllbGRUZXJtRnJlcXVlbmNpZXMpLFxuICAgICAgZmllbGRSZWZzTGVuZ3RoID0gZmllbGRSZWZzLmxlbmd0aCxcbiAgICAgIHRlcm1JZGZDYWNoZSA9IE9iamVjdC5jcmVhdGUobnVsbClcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGZpZWxkUmVmc0xlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGZpZWxkUmVmID0gbHVuci5GaWVsZFJlZi5mcm9tU3RyaW5nKGZpZWxkUmVmc1tpXSksXG4gICAgICAgIGZpZWxkTmFtZSA9IGZpZWxkUmVmLmZpZWxkTmFtZSxcbiAgICAgICAgZmllbGRMZW5ndGggPSB0aGlzLmZpZWxkTGVuZ3Roc1tmaWVsZFJlZl0sXG4gICAgICAgIGZpZWxkVmVjdG9yID0gbmV3IGx1bnIuVmVjdG9yLFxuICAgICAgICB0ZXJtRnJlcXVlbmNpZXMgPSB0aGlzLmZpZWxkVGVybUZyZXF1ZW5jaWVzW2ZpZWxkUmVmXSxcbiAgICAgICAgdGVybXMgPSBPYmplY3Qua2V5cyh0ZXJtRnJlcXVlbmNpZXMpLFxuICAgICAgICB0ZXJtc0xlbmd0aCA9IHRlcm1zLmxlbmd0aFxuXG5cbiAgICB2YXIgZmllbGRCb29zdCA9IHRoaXMuX2ZpZWxkc1tmaWVsZE5hbWVdLmJvb3N0IHx8IDEsXG4gICAgICAgIGRvY0Jvb3N0ID0gdGhpcy5fZG9jdW1lbnRzW2ZpZWxkUmVmLmRvY1JlZl0uYm9vc3QgfHwgMVxuXG4gICAgZm9yICh2YXIgaiA9IDA7IGogPCB0ZXJtc0xlbmd0aDsgaisrKSB7XG4gICAgICB2YXIgdGVybSA9IHRlcm1zW2pdLFxuICAgICAgICAgIHRmID0gdGVybUZyZXF1ZW5jaWVzW3Rlcm1dLFxuICAgICAgICAgIHRlcm1JbmRleCA9IHRoaXMuaW52ZXJ0ZWRJbmRleFt0ZXJtXS5faW5kZXgsXG4gICAgICAgICAgaWRmLCBzY29yZSwgc2NvcmVXaXRoUHJlY2lzaW9uXG5cbiAgICAgIGlmICh0ZXJtSWRmQ2FjaGVbdGVybV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBpZGYgPSBsdW5yLmlkZih0aGlzLmludmVydGVkSW5kZXhbdGVybV0sIHRoaXMuZG9jdW1lbnRDb3VudClcbiAgICAgICAgdGVybUlkZkNhY2hlW3Rlcm1dID0gaWRmXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZGYgPSB0ZXJtSWRmQ2FjaGVbdGVybV1cbiAgICAgIH1cblxuICAgICAgc2NvcmUgPSBpZGYgKiAoKHRoaXMuX2sxICsgMSkgKiB0ZikgLyAodGhpcy5fazEgKiAoMSAtIHRoaXMuX2IgKyB0aGlzLl9iICogKGZpZWxkTGVuZ3RoIC8gdGhpcy5hdmVyYWdlRmllbGRMZW5ndGhbZmllbGROYW1lXSkpICsgdGYpXG4gICAgICBzY29yZSAqPSBmaWVsZEJvb3N0XG4gICAgICBzY29yZSAqPSBkb2NCb29zdFxuICAgICAgc2NvcmVXaXRoUHJlY2lzaW9uID0gTWF0aC5yb3VuZChzY29yZSAqIDEwMDApIC8gMTAwMFxuICAgICAgLy8gQ29udmVydHMgMS4yMzQ1Njc4OSB0byAxLjIzNC5cbiAgICAgIC8vIFJlZHVjaW5nIHRoZSBwcmVjaXNpb24gc28gdGhhdCB0aGUgdmVjdG9ycyB0YWtlIHVwIGxlc3NcbiAgICAgIC8vIHNwYWNlIHdoZW4gc2VyaWFsaXNlZC4gRG9pbmcgaXQgbm93IHNvIHRoYXQgdGhleSBiZWhhdmVcbiAgICAgIC8vIHRoZSBzYW1lIGJlZm9yZSBhbmQgYWZ0ZXIgc2VyaWFsaXNhdGlvbi4gQWxzbywgdGhpcyBpc1xuICAgICAgLy8gdGhlIGZhc3Rlc3QgYXBwcm9hY2ggdG8gcmVkdWNpbmcgYSBudW1iZXIncyBwcmVjaXNpb24gaW5cbiAgICAgIC8vIEphdmFTY3JpcHQuXG5cbiAgICAgIGZpZWxkVmVjdG9yLmluc2VydCh0ZXJtSW5kZXgsIHNjb3JlV2l0aFByZWNpc2lvbilcbiAgICB9XG5cbiAgICBmaWVsZFZlY3RvcnNbZmllbGRSZWZdID0gZmllbGRWZWN0b3JcbiAgfVxuXG4gIHRoaXMuZmllbGRWZWN0b3JzID0gZmllbGRWZWN0b3JzXG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIHRva2VuIHNldCBvZiBhbGwgdG9rZW5zIGluIHRoZSBpbmRleCB1c2luZyBsdW5yLlRva2VuU2V0XG4gKlxuICogQHByaXZhdGVcbiAqL1xubHVuci5CdWlsZGVyLnByb3RvdHlwZS5jcmVhdGVUb2tlblNldCA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy50b2tlblNldCA9IGx1bnIuVG9rZW5TZXQuZnJvbUFycmF5KFxuICAgIE9iamVjdC5rZXlzKHRoaXMuaW52ZXJ0ZWRJbmRleCkuc29ydCgpXG4gIClcbn1cblxuLyoqXG4gKiBCdWlsZHMgdGhlIGluZGV4LCBjcmVhdGluZyBhbiBpbnN0YW5jZSBvZiBsdW5yLkluZGV4LlxuICpcbiAqIFRoaXMgY29tcGxldGVzIHRoZSBpbmRleGluZyBwcm9jZXNzIGFuZCBzaG91bGQgb25seSBiZSBjYWxsZWRcbiAqIG9uY2UgYWxsIGRvY3VtZW50cyBoYXZlIGJlZW4gYWRkZWQgdG8gdGhlIGluZGV4LlxuICpcbiAqIEByZXR1cm5zIHtsdW5yLkluZGV4fVxuICovXG5sdW5yLkJ1aWxkZXIucHJvdG90eXBlLmJ1aWxkID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLmNhbGN1bGF0ZUF2ZXJhZ2VGaWVsZExlbmd0aHMoKVxuICB0aGlzLmNyZWF0ZUZpZWxkVmVjdG9ycygpXG4gIHRoaXMuY3JlYXRlVG9rZW5TZXQoKVxuXG4gIHJldHVybiBuZXcgbHVuci5JbmRleCh7XG4gICAgaW52ZXJ0ZWRJbmRleDogdGhpcy5pbnZlcnRlZEluZGV4LFxuICAgIGZpZWxkVmVjdG9yczogdGhpcy5maWVsZFZlY3RvcnMsXG4gICAgdG9rZW5TZXQ6IHRoaXMudG9rZW5TZXQsXG4gICAgZmllbGRzOiBPYmplY3Qua2V5cyh0aGlzLl9maWVsZHMpLFxuICAgIHBpcGVsaW5lOiB0aGlzLnNlYXJjaFBpcGVsaW5lXG4gIH0pXG59XG5cbi8qKlxuICogQXBwbGllcyBhIHBsdWdpbiB0byB0aGUgaW5kZXggYnVpbGRlci5cbiAqXG4gKiBBIHBsdWdpbiBpcyBhIGZ1bmN0aW9uIHRoYXQgaXMgY2FsbGVkIHdpdGggdGhlIGluZGV4IGJ1aWxkZXIgYXMgaXRzIGNvbnRleHQuXG4gKiBQbHVnaW5zIGNhbiBiZSB1c2VkIHRvIGN1c3RvbWlzZSBvciBleHRlbmQgdGhlIGJlaGF2aW91ciBvZiB0aGUgaW5kZXhcbiAqIGluIHNvbWUgd2F5LiBBIHBsdWdpbiBpcyBqdXN0IGEgZnVuY3Rpb24sIHRoYXQgZW5jYXBzdWxhdGVkIHRoZSBjdXN0b21cbiAqIGJlaGF2aW91ciB0aGF0IHNob3VsZCBiZSBhcHBsaWVkIHdoZW4gYnVpbGRpbmcgdGhlIGluZGV4LlxuICpcbiAqIFRoZSBwbHVnaW4gZnVuY3Rpb24gd2lsbCBiZSBjYWxsZWQgd2l0aCB0aGUgaW5kZXggYnVpbGRlciBhcyBpdHMgYXJndW1lbnQsIGFkZGl0aW9uYWxcbiAqIGFyZ3VtZW50cyBjYW4gYWxzbyBiZSBwYXNzZWQgd2hlbiBjYWxsaW5nIHVzZS4gVGhlIGZ1bmN0aW9uIHdpbGwgYmUgY2FsbGVkXG4gKiB3aXRoIHRoZSBpbmRleCBidWlsZGVyIGFzIGl0cyBjb250ZXh0LlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHBsdWdpbiBUaGUgcGx1Z2luIHRvIGFwcGx5LlxuICovXG5sdW5yLkJ1aWxkZXIucHJvdG90eXBlLnVzZSA9IGZ1bmN0aW9uIChmbikge1xuICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSlcbiAgYXJncy51bnNoaWZ0KHRoaXMpXG4gIGZuLmFwcGx5KHRoaXMsIGFyZ3MpXG59XG4vKipcbiAqIENvbnRhaW5zIGFuZCBjb2xsZWN0cyBtZXRhZGF0YSBhYm91dCBhIG1hdGNoaW5nIGRvY3VtZW50LlxuICogQSBzaW5nbGUgaW5zdGFuY2Ugb2YgbHVuci5NYXRjaERhdGEgaXMgcmV0dXJuZWQgYXMgcGFydCBvZiBldmVyeVxuICogbHVuci5JbmRleH5SZXN1bHQuXG4gKlxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge3N0cmluZ30gdGVybSAtIFRoZSB0ZXJtIHRoaXMgbWF0Y2ggZGF0YSBpcyBhc3NvY2lhdGVkIHdpdGhcbiAqIEBwYXJhbSB7c3RyaW5nfSBmaWVsZCAtIFRoZSBmaWVsZCBpbiB3aGljaCB0aGUgdGVybSB3YXMgZm91bmRcbiAqIEBwYXJhbSB7b2JqZWN0fSBtZXRhZGF0YSAtIFRoZSBtZXRhZGF0YSByZWNvcmRlZCBhYm91dCB0aGlzIHRlcm0gaW4gdGhpcyBmaWVsZFxuICogQHByb3BlcnR5IHtvYmplY3R9IG1ldGFkYXRhIC0gQSBjbG9uZWQgY29sbGVjdGlvbiBvZiBtZXRhZGF0YSBhc3NvY2lhdGVkIHdpdGggdGhpcyBkb2N1bWVudC5cbiAqIEBzZWUge0BsaW5rIGx1bnIuSW5kZXh+UmVzdWx0fVxuICovXG5sdW5yLk1hdGNoRGF0YSA9IGZ1bmN0aW9uICh0ZXJtLCBmaWVsZCwgbWV0YWRhdGEpIHtcbiAgdmFyIGNsb25lZE1ldGFkYXRhID0gT2JqZWN0LmNyZWF0ZShudWxsKSxcbiAgICAgIG1ldGFkYXRhS2V5cyA9IE9iamVjdC5rZXlzKG1ldGFkYXRhIHx8IHt9KVxuXG4gIC8vIENsb25pbmcgdGhlIG1ldGFkYXRhIHRvIHByZXZlbnQgdGhlIG9yaWdpbmFsXG4gIC8vIGJlaW5nIG11dGF0ZWQgZHVyaW5nIG1hdGNoIGRhdGEgY29tYmluYXRpb24uXG4gIC8vIE1ldGFkYXRhIGlzIGtlcHQgaW4gYW4gYXJyYXkgd2l0aGluIHRoZSBpbnZlcnRlZFxuICAvLyBpbmRleCBzbyBjbG9uaW5nIHRoZSBkYXRhIGNhbiBiZSBkb25lIHdpdGhcbiAgLy8gQXJyYXkjc2xpY2VcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBtZXRhZGF0YUtleXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIga2V5ID0gbWV0YWRhdGFLZXlzW2ldXG4gICAgY2xvbmVkTWV0YWRhdGFba2V5XSA9IG1ldGFkYXRhW2tleV0uc2xpY2UoKVxuICB9XG5cbiAgdGhpcy5tZXRhZGF0YSA9IE9iamVjdC5jcmVhdGUobnVsbClcblxuICBpZiAodGVybSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5tZXRhZGF0YVt0ZXJtXSA9IE9iamVjdC5jcmVhdGUobnVsbClcbiAgICB0aGlzLm1ldGFkYXRhW3Rlcm1dW2ZpZWxkXSA9IGNsb25lZE1ldGFkYXRhXG4gIH1cbn1cblxuLyoqXG4gKiBBbiBpbnN0YW5jZSBvZiBsdW5yLk1hdGNoRGF0YSB3aWxsIGJlIGNyZWF0ZWQgZm9yIGV2ZXJ5IHRlcm0gdGhhdCBtYXRjaGVzIGFcbiAqIGRvY3VtZW50LiBIb3dldmVyIG9ubHkgb25lIGluc3RhbmNlIGlzIHJlcXVpcmVkIGluIGEgbHVuci5JbmRleH5SZXN1bHQuIFRoaXNcbiAqIG1ldGhvZCBjb21iaW5lcyBtZXRhZGF0YSBmcm9tIGFub3RoZXIgaW5zdGFuY2Ugb2YgbHVuci5NYXRjaERhdGEgd2l0aCB0aGlzXG4gKiBvYmplY3RzIG1ldGFkYXRhLlxuICpcbiAqIEBwYXJhbSB7bHVuci5NYXRjaERhdGF9IG90aGVyTWF0Y2hEYXRhIC0gQW5vdGhlciBpbnN0YW5jZSBvZiBtYXRjaCBkYXRhIHRvIG1lcmdlIHdpdGggdGhpcyBvbmUuXG4gKiBAc2VlIHtAbGluayBsdW5yLkluZGV4flJlc3VsdH1cbiAqL1xubHVuci5NYXRjaERhdGEucHJvdG90eXBlLmNvbWJpbmUgPSBmdW5jdGlvbiAob3RoZXJNYXRjaERhdGEpIHtcbiAgdmFyIHRlcm1zID0gT2JqZWN0LmtleXMob3RoZXJNYXRjaERhdGEubWV0YWRhdGEpXG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB0ZXJtcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciB0ZXJtID0gdGVybXNbaV0sXG4gICAgICAgIGZpZWxkcyA9IE9iamVjdC5rZXlzKG90aGVyTWF0Y2hEYXRhLm1ldGFkYXRhW3Rlcm1dKVxuXG4gICAgaWYgKHRoaXMubWV0YWRhdGFbdGVybV0gPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLm1ldGFkYXRhW3Rlcm1dID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuICAgIH1cblxuICAgIGZvciAodmFyIGogPSAwOyBqIDwgZmllbGRzLmxlbmd0aDsgaisrKSB7XG4gICAgICB2YXIgZmllbGQgPSBmaWVsZHNbal0sXG4gICAgICAgICAga2V5cyA9IE9iamVjdC5rZXlzKG90aGVyTWF0Y2hEYXRhLm1ldGFkYXRhW3Rlcm1dW2ZpZWxkXSlcblxuICAgICAgaWYgKHRoaXMubWV0YWRhdGFbdGVybV1bZmllbGRdID09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLm1ldGFkYXRhW3Rlcm1dW2ZpZWxkXSA9IE9iamVjdC5jcmVhdGUobnVsbClcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCBrZXlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBrZXkgPSBrZXlzW2tdXG5cbiAgICAgICAgaWYgKHRoaXMubWV0YWRhdGFbdGVybV1bZmllbGRdW2tleV0gPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5tZXRhZGF0YVt0ZXJtXVtmaWVsZF1ba2V5XSA9IG90aGVyTWF0Y2hEYXRhLm1ldGFkYXRhW3Rlcm1dW2ZpZWxkXVtrZXldXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5tZXRhZGF0YVt0ZXJtXVtmaWVsZF1ba2V5XSA9IHRoaXMubWV0YWRhdGFbdGVybV1bZmllbGRdW2tleV0uY29uY2F0KG90aGVyTWF0Y2hEYXRhLm1ldGFkYXRhW3Rlcm1dW2ZpZWxkXVtrZXldKVxuICAgICAgICB9XG5cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBBZGQgbWV0YWRhdGEgZm9yIGEgdGVybS9maWVsZCBwYWlyIHRvIHRoaXMgaW5zdGFuY2Ugb2YgbWF0Y2ggZGF0YS5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdGVybSAtIFRoZSB0ZXJtIHRoaXMgbWF0Y2ggZGF0YSBpcyBhc3NvY2lhdGVkIHdpdGhcbiAqIEBwYXJhbSB7c3RyaW5nfSBmaWVsZCAtIFRoZSBmaWVsZCBpbiB3aGljaCB0aGUgdGVybSB3YXMgZm91bmRcbiAqIEBwYXJhbSB7b2JqZWN0fSBtZXRhZGF0YSAtIFRoZSBtZXRhZGF0YSByZWNvcmRlZCBhYm91dCB0aGlzIHRlcm0gaW4gdGhpcyBmaWVsZFxuICovXG5sdW5yLk1hdGNoRGF0YS5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24gKHRlcm0sIGZpZWxkLCBtZXRhZGF0YSkge1xuICBpZiAoISh0ZXJtIGluIHRoaXMubWV0YWRhdGEpKSB7XG4gICAgdGhpcy5tZXRhZGF0YVt0ZXJtXSA9IE9iamVjdC5jcmVhdGUobnVsbClcbiAgICB0aGlzLm1ldGFkYXRhW3Rlcm1dW2ZpZWxkXSA9IG1ldGFkYXRhXG4gICAgcmV0dXJuXG4gIH1cblxuICBpZiAoIShmaWVsZCBpbiB0aGlzLm1ldGFkYXRhW3Rlcm1dKSkge1xuICAgIHRoaXMubWV0YWRhdGFbdGVybV1bZmllbGRdID0gbWV0YWRhdGFcbiAgICByZXR1cm5cbiAgfVxuXG4gIHZhciBtZXRhZGF0YUtleXMgPSBPYmplY3Qua2V5cyhtZXRhZGF0YSlcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IG1ldGFkYXRhS2V5cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBrZXkgPSBtZXRhZGF0YUtleXNbaV1cblxuICAgIGlmIChrZXkgaW4gdGhpcy5tZXRhZGF0YVt0ZXJtXVtmaWVsZF0pIHtcbiAgICAgIHRoaXMubWV0YWRhdGFbdGVybV1bZmllbGRdW2tleV0gPSB0aGlzLm1ldGFkYXRhW3Rlcm1dW2ZpZWxkXVtrZXldLmNvbmNhdChtZXRhZGF0YVtrZXldKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm1ldGFkYXRhW3Rlcm1dW2ZpZWxkXVtrZXldID0gbWV0YWRhdGFba2V5XVxuICAgIH1cbiAgfVxufVxuLyoqXG4gKiBBIGx1bnIuUXVlcnkgcHJvdmlkZXMgYSBwcm9ncmFtbWF0aWMgd2F5IG9mIGRlZmluaW5nIHF1ZXJpZXMgdG8gYmUgcGVyZm9ybWVkXG4gKiBhZ2FpbnN0IGEge0BsaW5rIGx1bnIuSW5kZXh9LlxuICpcbiAqIFByZWZlciBjb25zdHJ1Y3RpbmcgYSBsdW5yLlF1ZXJ5IHVzaW5nIHRoZSB7QGxpbmsgbHVuci5JbmRleCNxdWVyeX0gbWV0aG9kXG4gKiBzbyB0aGUgcXVlcnkgb2JqZWN0IGlzIHByZS1pbml0aWFsaXplZCB3aXRoIHRoZSByaWdodCBpbmRleCBmaWVsZHMuXG4gKlxuICogQGNvbnN0cnVjdG9yXG4gKiBAcHJvcGVydHkge2x1bnIuUXVlcnl+Q2xhdXNlW119IGNsYXVzZXMgLSBBbiBhcnJheSBvZiBxdWVyeSBjbGF1c2VzLlxuICogQHByb3BlcnR5IHtzdHJpbmdbXX0gYWxsRmllbGRzIC0gQW4gYXJyYXkgb2YgYWxsIGF2YWlsYWJsZSBmaWVsZHMgaW4gYSBsdW5yLkluZGV4LlxuICovXG5sdW5yLlF1ZXJ5ID0gZnVuY3Rpb24gKGFsbEZpZWxkcykge1xuICB0aGlzLmNsYXVzZXMgPSBbXVxuICB0aGlzLmFsbEZpZWxkcyA9IGFsbEZpZWxkc1xufVxuXG4vKipcbiAqIENvbnN0YW50cyBmb3IgaW5kaWNhdGluZyB3aGF0IGtpbmQgb2YgYXV0b21hdGljIHdpbGRjYXJkIGluc2VydGlvbiB3aWxsIGJlIHVzZWQgd2hlbiBjb25zdHJ1Y3RpbmcgYSBxdWVyeSBjbGF1c2UuXG4gKlxuICogVGhpcyBhbGxvd3Mgd2lsZGNhcmRzIHRvIGJlIGFkZGVkIHRvIHRoZSBiZWdpbm5pbmcgYW5kIGVuZCBvZiBhIHRlcm0gd2l0aG91dCBoYXZpbmcgdG8gbWFudWFsbHkgZG8gYW55IHN0cmluZ1xuICogY29uY2F0ZW5hdGlvbi5cbiAqXG4gKiBUaGUgd2lsZGNhcmQgY29uc3RhbnRzIGNhbiBiZSBiaXR3aXNlIGNvbWJpbmVkIHRvIHNlbGVjdCBib3RoIGxlYWRpbmcgYW5kIHRyYWlsaW5nIHdpbGRjYXJkcy5cbiAqXG4gKiBAY29uc3RhbnRcbiAqIEBkZWZhdWx0XG4gKiBAcHJvcGVydHkge251bWJlcn0gd2lsZGNhcmQuTk9ORSAtIFRoZSB0ZXJtIHdpbGwgaGF2ZSBubyB3aWxkY2FyZHMgaW5zZXJ0ZWQsIHRoaXMgaXMgdGhlIGRlZmF1bHQgYmVoYXZpb3VyXG4gKiBAcHJvcGVydHkge251bWJlcn0gd2lsZGNhcmQuTEVBRElORyAtIFByZXBlbmQgdGhlIHRlcm0gd2l0aCBhIHdpbGRjYXJkLCB1bmxlc3MgYSBsZWFkaW5nIHdpbGRjYXJkIGFscmVhZHkgZXhpc3RzXG4gKiBAcHJvcGVydHkge251bWJlcn0gd2lsZGNhcmQuVFJBSUxJTkcgLSBBcHBlbmQgYSB3aWxkY2FyZCB0byB0aGUgdGVybSwgdW5sZXNzIGEgdHJhaWxpbmcgd2lsZGNhcmQgYWxyZWFkeSBleGlzdHNcbiAqIEBzZWUgbHVuci5RdWVyeX5DbGF1c2VcbiAqIEBzZWUgbHVuci5RdWVyeSNjbGF1c2VcbiAqIEBzZWUgbHVuci5RdWVyeSN0ZXJtXG4gKiBAZXhhbXBsZSA8Y2FwdGlvbj5xdWVyeSB0ZXJtIHdpdGggdHJhaWxpbmcgd2lsZGNhcmQ8L2NhcHRpb24+XG4gKiBxdWVyeS50ZXJtKCdmb28nLCB7IHdpbGRjYXJkOiBsdW5yLlF1ZXJ5LndpbGRjYXJkLlRSQUlMSU5HIH0pXG4gKiBAZXhhbXBsZSA8Y2FwdGlvbj5xdWVyeSB0ZXJtIHdpdGggbGVhZGluZyBhbmQgdHJhaWxpbmcgd2lsZGNhcmQ8L2NhcHRpb24+XG4gKiBxdWVyeS50ZXJtKCdmb28nLCB7XG4gKiAgIHdpbGRjYXJkOiBsdW5yLlF1ZXJ5LndpbGRjYXJkLkxFQURJTkcgfCBsdW5yLlF1ZXJ5LndpbGRjYXJkLlRSQUlMSU5HXG4gKiB9KVxuICovXG5cbmx1bnIuUXVlcnkud2lsZGNhcmQgPSBuZXcgU3RyaW5nIChcIipcIilcbmx1bnIuUXVlcnkud2lsZGNhcmQuTk9ORSA9IDBcbmx1bnIuUXVlcnkud2lsZGNhcmQuTEVBRElORyA9IDFcbmx1bnIuUXVlcnkud2lsZGNhcmQuVFJBSUxJTkcgPSAyXG5cbi8qKlxuICogQ29uc3RhbnRzIGZvciBpbmRpY2F0aW5nIHdoYXQga2luZCBvZiBwcmVzZW5jZSBhIHRlcm0gbXVzdCBoYXZlIGluIG1hdGNoaW5nIGRvY3VtZW50cy5cbiAqXG4gKiBAY29uc3RhbnRcbiAqIEBlbnVtIHtudW1iZXJ9XG4gKiBAc2VlIGx1bnIuUXVlcnl+Q2xhdXNlXG4gKiBAc2VlIGx1bnIuUXVlcnkjY2xhdXNlXG4gKiBAc2VlIGx1bnIuUXVlcnkjdGVybVxuICogQGV4YW1wbGUgPGNhcHRpb24+cXVlcnkgdGVybSB3aXRoIHJlcXVpcmVkIHByZXNlbmNlPC9jYXB0aW9uPlxuICogcXVlcnkudGVybSgnZm9vJywgeyBwcmVzZW5jZTogbHVuci5RdWVyeS5wcmVzZW5jZS5SRVFVSVJFRCB9KVxuICovXG5sdW5yLlF1ZXJ5LnByZXNlbmNlID0ge1xuICAvKipcbiAgICogVGVybSdzIHByZXNlbmNlIGluIGEgZG9jdW1lbnQgaXMgb3B0aW9uYWwsIHRoaXMgaXMgdGhlIGRlZmF1bHQgdmFsdWUuXG4gICAqL1xuICBPUFRJT05BTDogMSxcblxuICAvKipcbiAgICogVGVybSdzIHByZXNlbmNlIGluIGEgZG9jdW1lbnQgaXMgcmVxdWlyZWQsIGRvY3VtZW50cyB0aGF0IGRvIG5vdCBjb250YWluXG4gICAqIHRoaXMgdGVybSB3aWxsIG5vdCBiZSByZXR1cm5lZC5cbiAgICovXG4gIFJFUVVJUkVEOiAyLFxuXG4gIC8qKlxuICAgKiBUZXJtJ3MgcHJlc2VuY2UgaW4gYSBkb2N1bWVudCBpcyBwcm9oaWJpdGVkLCBkb2N1bWVudHMgdGhhdCBkbyBjb250YWluXG4gICAqIHRoaXMgdGVybSB3aWxsIG5vdCBiZSByZXR1cm5lZC5cbiAgICovXG4gIFBST0hJQklURUQ6IDNcbn1cblxuLyoqXG4gKiBBIHNpbmdsZSBjbGF1c2UgaW4gYSB7QGxpbmsgbHVuci5RdWVyeX0gY29udGFpbnMgYSB0ZXJtIGFuZCBkZXRhaWxzIG9uIGhvdyB0b1xuICogbWF0Y2ggdGhhdCB0ZXJtIGFnYWluc3QgYSB7QGxpbmsgbHVuci5JbmRleH0uXG4gKlxuICogQHR5cGVkZWYge09iamVjdH0gbHVuci5RdWVyeX5DbGF1c2VcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nW119IGZpZWxkcyAtIFRoZSBmaWVsZHMgaW4gYW4gaW5kZXggdGhpcyBjbGF1c2Ugc2hvdWxkIGJlIG1hdGNoZWQgYWdhaW5zdC5cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBbYm9vc3Q9MV0gLSBBbnkgYm9vc3QgdGhhdCBzaG91bGQgYmUgYXBwbGllZCB3aGVuIG1hdGNoaW5nIHRoaXMgY2xhdXNlLlxuICogQHByb3BlcnR5IHtudW1iZXJ9IFtlZGl0RGlzdGFuY2VdIC0gV2hldGhlciB0aGUgdGVybSBzaG91bGQgaGF2ZSBmdXp6eSBtYXRjaGluZyBhcHBsaWVkLCBhbmQgaG93IGZ1enp5IHRoZSBtYXRjaCBzaG91bGQgYmUuXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IFt1c2VQaXBlbGluZV0gLSBXaGV0aGVyIHRoZSB0ZXJtIHNob3VsZCBiZSBwYXNzZWQgdGhyb3VnaCB0aGUgc2VhcmNoIHBpcGVsaW5lLlxuICogQHByb3BlcnR5IHtudW1iZXJ9IFt3aWxkY2FyZD1sdW5yLlF1ZXJ5LndpbGRjYXJkLk5PTkVdIC0gV2hldGhlciB0aGUgdGVybSBzaG91bGQgaGF2ZSB3aWxkY2FyZHMgYXBwZW5kZWQgb3IgcHJlcGVuZGVkLlxuICogQHByb3BlcnR5IHtudW1iZXJ9IFtwcmVzZW5jZT1sdW5yLlF1ZXJ5LnByZXNlbmNlLk9QVElPTkFMXSAtIFRoZSB0ZXJtcyBwcmVzZW5jZSBpbiBhbnkgbWF0Y2hpbmcgZG9jdW1lbnRzLlxuICovXG5cbi8qKlxuICogQWRkcyBhIHtAbGluayBsdW5yLlF1ZXJ5fkNsYXVzZX0gdG8gdGhpcyBxdWVyeS5cbiAqXG4gKiBVbmxlc3MgdGhlIGNsYXVzZSBjb250YWlucyB0aGUgZmllbGRzIHRvIGJlIG1hdGNoZWQgYWxsIGZpZWxkcyB3aWxsIGJlIG1hdGNoZWQuIEluIGFkZGl0aW9uXG4gKiBhIGRlZmF1bHQgYm9vc3Qgb2YgMSBpcyBhcHBsaWVkIHRvIHRoZSBjbGF1c2UuXG4gKlxuICogQHBhcmFtIHtsdW5yLlF1ZXJ5fkNsYXVzZX0gY2xhdXNlIC0gVGhlIGNsYXVzZSB0byBhZGQgdG8gdGhpcyBxdWVyeS5cbiAqIEBzZWUgbHVuci5RdWVyeX5DbGF1c2VcbiAqIEByZXR1cm5zIHtsdW5yLlF1ZXJ5fVxuICovXG5sdW5yLlF1ZXJ5LnByb3RvdHlwZS5jbGF1c2UgPSBmdW5jdGlvbiAoY2xhdXNlKSB7XG4gIGlmICghKCdmaWVsZHMnIGluIGNsYXVzZSkpIHtcbiAgICBjbGF1c2UuZmllbGRzID0gdGhpcy5hbGxGaWVsZHNcbiAgfVxuXG4gIGlmICghKCdib29zdCcgaW4gY2xhdXNlKSkge1xuICAgIGNsYXVzZS5ib29zdCA9IDFcbiAgfVxuXG4gIGlmICghKCd1c2VQaXBlbGluZScgaW4gY2xhdXNlKSkge1xuICAgIGNsYXVzZS51c2VQaXBlbGluZSA9IHRydWVcbiAgfVxuXG4gIGlmICghKCd3aWxkY2FyZCcgaW4gY2xhdXNlKSkge1xuICAgIGNsYXVzZS53aWxkY2FyZCA9IGx1bnIuUXVlcnkud2lsZGNhcmQuTk9ORVxuICB9XG5cbiAgaWYgKChjbGF1c2Uud2lsZGNhcmQgJiBsdW5yLlF1ZXJ5LndpbGRjYXJkLkxFQURJTkcpICYmIChjbGF1c2UudGVybS5jaGFyQXQoMCkgIT0gbHVuci5RdWVyeS53aWxkY2FyZCkpIHtcbiAgICBjbGF1c2UudGVybSA9IFwiKlwiICsgY2xhdXNlLnRlcm1cbiAgfVxuXG4gIGlmICgoY2xhdXNlLndpbGRjYXJkICYgbHVuci5RdWVyeS53aWxkY2FyZC5UUkFJTElORykgJiYgKGNsYXVzZS50ZXJtLnNsaWNlKC0xKSAhPSBsdW5yLlF1ZXJ5LndpbGRjYXJkKSkge1xuICAgIGNsYXVzZS50ZXJtID0gXCJcIiArIGNsYXVzZS50ZXJtICsgXCIqXCJcbiAgfVxuXG4gIGlmICghKCdwcmVzZW5jZScgaW4gY2xhdXNlKSkge1xuICAgIGNsYXVzZS5wcmVzZW5jZSA9IGx1bnIuUXVlcnkucHJlc2VuY2UuT1BUSU9OQUxcbiAgfVxuXG4gIHRoaXMuY2xhdXNlcy5wdXNoKGNsYXVzZSlcblxuICByZXR1cm4gdGhpc1xufVxuXG4vKipcbiAqIEEgbmVnYXRlZCBxdWVyeSBpcyBvbmUgaW4gd2hpY2ggZXZlcnkgY2xhdXNlIGhhcyBhIHByZXNlbmNlIG9mXG4gKiBwcm9oaWJpdGVkLiBUaGVzZSBxdWVyaWVzIHJlcXVpcmUgc29tZSBzcGVjaWFsIHByb2Nlc3NpbmcgdG8gcmV0dXJuXG4gKiB0aGUgZXhwZWN0ZWQgcmVzdWx0cy5cbiAqXG4gKiBAcmV0dXJucyBib29sZWFuXG4gKi9cbmx1bnIuUXVlcnkucHJvdG90eXBlLmlzTmVnYXRlZCA9IGZ1bmN0aW9uICgpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmNsYXVzZXMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAodGhpcy5jbGF1c2VzW2ldLnByZXNlbmNlICE9IGx1bnIuUXVlcnkucHJlc2VuY2UuUFJPSElCSVRFRCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWVcbn1cblxuLyoqXG4gKiBBZGRzIGEgdGVybSB0byB0aGUgY3VycmVudCBxdWVyeSwgdW5kZXIgdGhlIGNvdmVycyB0aGlzIHdpbGwgY3JlYXRlIGEge0BsaW5rIGx1bnIuUXVlcnl+Q2xhdXNlfVxuICogdG8gdGhlIGxpc3Qgb2YgY2xhdXNlcyB0aGF0IG1ha2UgdXAgdGhpcyBxdWVyeS5cbiAqXG4gKiBUaGUgdGVybSBpcyB1c2VkIGFzIGlzLCBpLmUuIG5vIHRva2VuaXphdGlvbiB3aWxsIGJlIHBlcmZvcm1lZCBieSB0aGlzIG1ldGhvZC4gSW5zdGVhZCBjb252ZXJzaW9uXG4gKiB0byBhIHRva2VuIG9yIHRva2VuLWxpa2Ugc3RyaW5nIHNob3VsZCBiZSBkb25lIGJlZm9yZSBjYWxsaW5nIHRoaXMgbWV0aG9kLlxuICpcbiAqIFRoZSB0ZXJtIHdpbGwgYmUgY29udmVydGVkIHRvIGEgc3RyaW5nIGJ5IGNhbGxpbmcgYHRvU3RyaW5nYC4gTXVsdGlwbGUgdGVybXMgY2FuIGJlIHBhc3NlZCBhcyBhblxuICogYXJyYXksIGVhY2ggdGVybSBpbiB0aGUgYXJyYXkgd2lsbCBzaGFyZSB0aGUgc2FtZSBvcHRpb25zLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fG9iamVjdFtdfSB0ZXJtIC0gVGhlIHRlcm0ocykgdG8gYWRkIHRvIHRoZSBxdWVyeS5cbiAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc10gLSBBbnkgYWRkaXRpb25hbCBwcm9wZXJ0aWVzIHRvIGFkZCB0byB0aGUgcXVlcnkgY2xhdXNlLlxuICogQHJldHVybnMge2x1bnIuUXVlcnl9XG4gKiBAc2VlIGx1bnIuUXVlcnkjY2xhdXNlXG4gKiBAc2VlIGx1bnIuUXVlcnl+Q2xhdXNlXG4gKiBAZXhhbXBsZSA8Y2FwdGlvbj5hZGRpbmcgYSBzaW5nbGUgdGVybSB0byBhIHF1ZXJ5PC9jYXB0aW9uPlxuICogcXVlcnkudGVybShcImZvb1wiKVxuICogQGV4YW1wbGUgPGNhcHRpb24+YWRkaW5nIGEgc2luZ2xlIHRlcm0gdG8gYSBxdWVyeSBhbmQgc3BlY2lmeWluZyBzZWFyY2ggZmllbGRzLCB0ZXJtIGJvb3N0IGFuZCBhdXRvbWF0aWMgdHJhaWxpbmcgd2lsZGNhcmQ8L2NhcHRpb24+XG4gKiBxdWVyeS50ZXJtKFwiZm9vXCIsIHtcbiAqICAgZmllbGRzOiBbXCJ0aXRsZVwiXSxcbiAqICAgYm9vc3Q6IDEwLFxuICogICB3aWxkY2FyZDogbHVuci5RdWVyeS53aWxkY2FyZC5UUkFJTElOR1xuICogfSlcbiAqIEBleGFtcGxlIDxjYXB0aW9uPnVzaW5nIGx1bnIudG9rZW5pemVyIHRvIGNvbnZlcnQgYSBzdHJpbmcgdG8gdG9rZW5zIGJlZm9yZSB1c2luZyB0aGVtIGFzIHRlcm1zPC9jYXB0aW9uPlxuICogcXVlcnkudGVybShsdW5yLnRva2VuaXplcihcImZvbyBiYXJcIikpXG4gKi9cbmx1bnIuUXVlcnkucHJvdG90eXBlLnRlcm0gPSBmdW5jdGlvbiAodGVybSwgb3B0aW9ucykge1xuICBpZiAoQXJyYXkuaXNBcnJheSh0ZXJtKSkge1xuICAgIHRlcm0uZm9yRWFjaChmdW5jdGlvbiAodCkgeyB0aGlzLnRlcm0odCwgbHVuci51dGlscy5jbG9uZShvcHRpb25zKSkgfSwgdGhpcylcbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgdmFyIGNsYXVzZSA9IG9wdGlvbnMgfHwge31cbiAgY2xhdXNlLnRlcm0gPSB0ZXJtLnRvU3RyaW5nKClcblxuICB0aGlzLmNsYXVzZShjbGF1c2UpXG5cbiAgcmV0dXJuIHRoaXNcbn1cbmx1bnIuUXVlcnlQYXJzZUVycm9yID0gZnVuY3Rpb24gKG1lc3NhZ2UsIHN0YXJ0LCBlbmQpIHtcbiAgdGhpcy5uYW1lID0gXCJRdWVyeVBhcnNlRXJyb3JcIlxuICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlXG4gIHRoaXMuc3RhcnQgPSBzdGFydFxuICB0aGlzLmVuZCA9IGVuZFxufVxuXG5sdW5yLlF1ZXJ5UGFyc2VFcnJvci5wcm90b3R5cGUgPSBuZXcgRXJyb3Jcbmx1bnIuUXVlcnlMZXhlciA9IGZ1bmN0aW9uIChzdHIpIHtcbiAgdGhpcy5sZXhlbWVzID0gW11cbiAgdGhpcy5zdHIgPSBzdHJcbiAgdGhpcy5sZW5ndGggPSBzdHIubGVuZ3RoXG4gIHRoaXMucG9zID0gMFxuICB0aGlzLnN0YXJ0ID0gMFxuICB0aGlzLmVzY2FwZUNoYXJQb3NpdGlvbnMgPSBbXVxufVxuXG5sdW5yLlF1ZXJ5TGV4ZXIucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIHN0YXRlID0gbHVuci5RdWVyeUxleGVyLmxleFRleHRcblxuICB3aGlsZSAoc3RhdGUpIHtcbiAgICBzdGF0ZSA9IHN0YXRlKHRoaXMpXG4gIH1cbn1cblxubHVuci5RdWVyeUxleGVyLnByb3RvdHlwZS5zbGljZVN0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIHN1YlNsaWNlcyA9IFtdLFxuICAgICAgc2xpY2VTdGFydCA9IHRoaXMuc3RhcnQsXG4gICAgICBzbGljZUVuZCA9IHRoaXMucG9zXG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmVzY2FwZUNoYXJQb3NpdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICBzbGljZUVuZCA9IHRoaXMuZXNjYXBlQ2hhclBvc2l0aW9uc1tpXVxuICAgIHN1YlNsaWNlcy5wdXNoKHRoaXMuc3RyLnNsaWNlKHNsaWNlU3RhcnQsIHNsaWNlRW5kKSlcbiAgICBzbGljZVN0YXJ0ID0gc2xpY2VFbmQgKyAxXG4gIH1cblxuICBzdWJTbGljZXMucHVzaCh0aGlzLnN0ci5zbGljZShzbGljZVN0YXJ0LCB0aGlzLnBvcykpXG4gIHRoaXMuZXNjYXBlQ2hhclBvc2l0aW9ucy5sZW5ndGggPSAwXG5cbiAgcmV0dXJuIHN1YlNsaWNlcy5qb2luKCcnKVxufVxuXG5sdW5yLlF1ZXJ5TGV4ZXIucHJvdG90eXBlLmVtaXQgPSBmdW5jdGlvbiAodHlwZSkge1xuICB0aGlzLmxleGVtZXMucHVzaCh7XG4gICAgdHlwZTogdHlwZSxcbiAgICBzdHI6IHRoaXMuc2xpY2VTdHJpbmcoKSxcbiAgICBzdGFydDogdGhpcy5zdGFydCxcbiAgICBlbmQ6IHRoaXMucG9zXG4gIH0pXG5cbiAgdGhpcy5zdGFydCA9IHRoaXMucG9zXG59XG5cbmx1bnIuUXVlcnlMZXhlci5wcm90b3R5cGUuZXNjYXBlQ2hhcmFjdGVyID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLmVzY2FwZUNoYXJQb3NpdGlvbnMucHVzaCh0aGlzLnBvcyAtIDEpXG4gIHRoaXMucG9zICs9IDFcbn1cblxubHVuci5RdWVyeUxleGVyLnByb3RvdHlwZS5uZXh0ID0gZnVuY3Rpb24gKCkge1xuICBpZiAodGhpcy5wb3MgPj0gdGhpcy5sZW5ndGgpIHtcbiAgICByZXR1cm4gbHVuci5RdWVyeUxleGVyLkVPU1xuICB9XG5cbiAgdmFyIGNoYXIgPSB0aGlzLnN0ci5jaGFyQXQodGhpcy5wb3MpXG4gIHRoaXMucG9zICs9IDFcbiAgcmV0dXJuIGNoYXJcbn1cblxubHVuci5RdWVyeUxleGVyLnByb3RvdHlwZS53aWR0aCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMucG9zIC0gdGhpcy5zdGFydFxufVxuXG5sdW5yLlF1ZXJ5TGV4ZXIucHJvdG90eXBlLmlnbm9yZSA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHRoaXMuc3RhcnQgPT0gdGhpcy5wb3MpIHtcbiAgICB0aGlzLnBvcyArPSAxXG4gIH1cblxuICB0aGlzLnN0YXJ0ID0gdGhpcy5wb3Ncbn1cblxubHVuci5RdWVyeUxleGVyLnByb3RvdHlwZS5iYWNrdXAgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMucG9zIC09IDFcbn1cblxubHVuci5RdWVyeUxleGVyLnByb3RvdHlwZS5hY2NlcHREaWdpdFJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGNoYXIsIGNoYXJDb2RlXG5cbiAgZG8ge1xuICAgIGNoYXIgPSB0aGlzLm5leHQoKVxuICAgIGNoYXJDb2RlID0gY2hhci5jaGFyQ29kZUF0KDApXG4gIH0gd2hpbGUgKGNoYXJDb2RlID4gNDcgJiYgY2hhckNvZGUgPCA1OClcblxuICBpZiAoY2hhciAhPSBsdW5yLlF1ZXJ5TGV4ZXIuRU9TKSB7XG4gICAgdGhpcy5iYWNrdXAoKVxuICB9XG59XG5cbmx1bnIuUXVlcnlMZXhlci5wcm90b3R5cGUubW9yZSA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMucG9zIDwgdGhpcy5sZW5ndGhcbn1cblxubHVuci5RdWVyeUxleGVyLkVPUyA9ICdFT1MnXG5sdW5yLlF1ZXJ5TGV4ZXIuRklFTEQgPSAnRklFTEQnXG5sdW5yLlF1ZXJ5TGV4ZXIuVEVSTSA9ICdURVJNJ1xubHVuci5RdWVyeUxleGVyLkVESVRfRElTVEFOQ0UgPSAnRURJVF9ESVNUQU5DRSdcbmx1bnIuUXVlcnlMZXhlci5CT09TVCA9ICdCT09TVCdcbmx1bnIuUXVlcnlMZXhlci5QUkVTRU5DRSA9ICdQUkVTRU5DRSdcblxubHVuci5RdWVyeUxleGVyLmxleEZpZWxkID0gZnVuY3Rpb24gKGxleGVyKSB7XG4gIGxleGVyLmJhY2t1cCgpXG4gIGxleGVyLmVtaXQobHVuci5RdWVyeUxleGVyLkZJRUxEKVxuICBsZXhlci5pZ25vcmUoKVxuICByZXR1cm4gbHVuci5RdWVyeUxleGVyLmxleFRleHRcbn1cblxubHVuci5RdWVyeUxleGVyLmxleFRlcm0gPSBmdW5jdGlvbiAobGV4ZXIpIHtcbiAgaWYgKGxleGVyLndpZHRoKCkgPiAxKSB7XG4gICAgbGV4ZXIuYmFja3VwKClcbiAgICBsZXhlci5lbWl0KGx1bnIuUXVlcnlMZXhlci5URVJNKVxuICB9XG5cbiAgbGV4ZXIuaWdub3JlKClcblxuICBpZiAobGV4ZXIubW9yZSgpKSB7XG4gICAgcmV0dXJuIGx1bnIuUXVlcnlMZXhlci5sZXhUZXh0XG4gIH1cbn1cblxubHVuci5RdWVyeUxleGVyLmxleEVkaXREaXN0YW5jZSA9IGZ1bmN0aW9uIChsZXhlcikge1xuICBsZXhlci5pZ25vcmUoKVxuICBsZXhlci5hY2NlcHREaWdpdFJ1bigpXG4gIGxleGVyLmVtaXQobHVuci5RdWVyeUxleGVyLkVESVRfRElTVEFOQ0UpXG4gIHJldHVybiBsdW5yLlF1ZXJ5TGV4ZXIubGV4VGV4dFxufVxuXG5sdW5yLlF1ZXJ5TGV4ZXIubGV4Qm9vc3QgPSBmdW5jdGlvbiAobGV4ZXIpIHtcbiAgbGV4ZXIuaWdub3JlKClcbiAgbGV4ZXIuYWNjZXB0RGlnaXRSdW4oKVxuICBsZXhlci5lbWl0KGx1bnIuUXVlcnlMZXhlci5CT09TVClcbiAgcmV0dXJuIGx1bnIuUXVlcnlMZXhlci5sZXhUZXh0XG59XG5cbmx1bnIuUXVlcnlMZXhlci5sZXhFT1MgPSBmdW5jdGlvbiAobGV4ZXIpIHtcbiAgaWYgKGxleGVyLndpZHRoKCkgPiAwKSB7XG4gICAgbGV4ZXIuZW1pdChsdW5yLlF1ZXJ5TGV4ZXIuVEVSTSlcbiAgfVxufVxuXG4vLyBUaGlzIG1hdGNoZXMgdGhlIHNlcGFyYXRvciB1c2VkIHdoZW4gdG9rZW5pc2luZyBmaWVsZHNcbi8vIHdpdGhpbiBhIGRvY3VtZW50LiBUaGVzZSBzaG91bGQgbWF0Y2ggb3RoZXJ3aXNlIGl0IGlzXG4vLyBub3QgcG9zc2libGUgdG8gc2VhcmNoIGZvciBzb21lIHRva2VucyB3aXRoaW4gYSBkb2N1bWVudC5cbi8vXG4vLyBJdCBpcyBwb3NzaWJsZSBmb3IgdGhlIHVzZXIgdG8gY2hhbmdlIHRoZSBzZXBhcmF0b3Igb24gdGhlXG4vLyB0b2tlbml6ZXIgc28gaXQgX21pZ2h0XyBjbGFzaCB3aXRoIGFueSBvdGhlciBvZiB0aGUgc3BlY2lhbFxuLy8gY2hhcmFjdGVycyBhbHJlYWR5IHVzZWQgd2l0aGluIHRoZSBzZWFyY2ggc3RyaW5nLCBlLmcuIDouXG4vL1xuLy8gVGhpcyBtZWFucyB0aGF0IGl0IGlzIHBvc3NpYmxlIHRvIGNoYW5nZSB0aGUgc2VwYXJhdG9yIGluXG4vLyBzdWNoIGEgd2F5IHRoYXQgbWFrZXMgc29tZSB3b3JkcyB1bnNlYXJjaGFibGUgdXNpbmcgYSBzZWFyY2hcbi8vIHN0cmluZy5cbmx1bnIuUXVlcnlMZXhlci50ZXJtU2VwYXJhdG9yID0gbHVuci50b2tlbml6ZXIuc2VwYXJhdG9yXG5cbmx1bnIuUXVlcnlMZXhlci5sZXhUZXh0ID0gZnVuY3Rpb24gKGxleGVyKSB7XG4gIHdoaWxlICh0cnVlKSB7XG4gICAgdmFyIGNoYXIgPSBsZXhlci5uZXh0KClcblxuICAgIGlmIChjaGFyID09IGx1bnIuUXVlcnlMZXhlci5FT1MpIHtcbiAgICAgIHJldHVybiBsdW5yLlF1ZXJ5TGV4ZXIubGV4RU9TXG4gICAgfVxuXG4gICAgLy8gRXNjYXBlIGNoYXJhY3RlciBpcyAnXFwnXG4gICAgaWYgKGNoYXIuY2hhckNvZGVBdCgwKSA9PSA5Mikge1xuICAgICAgbGV4ZXIuZXNjYXBlQ2hhcmFjdGVyKClcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgaWYgKGNoYXIgPT0gXCI6XCIpIHtcbiAgICAgIHJldHVybiBsdW5yLlF1ZXJ5TGV4ZXIubGV4RmllbGRcbiAgICB9XG5cbiAgICBpZiAoY2hhciA9PSBcIn5cIikge1xuICAgICAgbGV4ZXIuYmFja3VwKClcbiAgICAgIGlmIChsZXhlci53aWR0aCgpID4gMCkge1xuICAgICAgICBsZXhlci5lbWl0KGx1bnIuUXVlcnlMZXhlci5URVJNKVxuICAgICAgfVxuICAgICAgcmV0dXJuIGx1bnIuUXVlcnlMZXhlci5sZXhFZGl0RGlzdGFuY2VcbiAgICB9XG5cbiAgICBpZiAoY2hhciA9PSBcIl5cIikge1xuICAgICAgbGV4ZXIuYmFja3VwKClcbiAgICAgIGlmIChsZXhlci53aWR0aCgpID4gMCkge1xuICAgICAgICBsZXhlci5lbWl0KGx1bnIuUXVlcnlMZXhlci5URVJNKVxuICAgICAgfVxuICAgICAgcmV0dXJuIGx1bnIuUXVlcnlMZXhlci5sZXhCb29zdFxuICAgIH1cblxuICAgIC8vIFwiK1wiIGluZGljYXRlcyB0ZXJtIHByZXNlbmNlIGlzIHJlcXVpcmVkXG4gICAgLy8gY2hlY2tpbmcgZm9yIGxlbmd0aCB0byBlbnN1cmUgdGhhdCBvbmx5XG4gICAgLy8gbGVhZGluZyBcIitcIiBhcmUgY29uc2lkZXJlZFxuICAgIGlmIChjaGFyID09IFwiK1wiICYmIGxleGVyLndpZHRoKCkgPT09IDEpIHtcbiAgICAgIGxleGVyLmVtaXQobHVuci5RdWVyeUxleGVyLlBSRVNFTkNFKVxuICAgICAgcmV0dXJuIGx1bnIuUXVlcnlMZXhlci5sZXhUZXh0XG4gICAgfVxuXG4gICAgLy8gXCItXCIgaW5kaWNhdGVzIHRlcm0gcHJlc2VuY2UgaXMgcHJvaGliaXRlZFxuICAgIC8vIGNoZWNraW5nIGZvciBsZW5ndGggdG8gZW5zdXJlIHRoYXQgb25seVxuICAgIC8vIGxlYWRpbmcgXCItXCIgYXJlIGNvbnNpZGVyZWRcbiAgICBpZiAoY2hhciA9PSBcIi1cIiAmJiBsZXhlci53aWR0aCgpID09PSAxKSB7XG4gICAgICBsZXhlci5lbWl0KGx1bnIuUXVlcnlMZXhlci5QUkVTRU5DRSlcbiAgICAgIHJldHVybiBsdW5yLlF1ZXJ5TGV4ZXIubGV4VGV4dFxuICAgIH1cblxuICAgIGlmIChjaGFyLm1hdGNoKGx1bnIuUXVlcnlMZXhlci50ZXJtU2VwYXJhdG9yKSkge1xuICAgICAgcmV0dXJuIGx1bnIuUXVlcnlMZXhlci5sZXhUZXJtXG4gICAgfVxuICB9XG59XG5cbmx1bnIuUXVlcnlQYXJzZXIgPSBmdW5jdGlvbiAoc3RyLCBxdWVyeSkge1xuICB0aGlzLmxleGVyID0gbmV3IGx1bnIuUXVlcnlMZXhlciAoc3RyKVxuICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgdGhpcy5jdXJyZW50Q2xhdXNlID0ge31cbiAgdGhpcy5sZXhlbWVJZHggPSAwXG59XG5cbmx1bnIuUXVlcnlQYXJzZXIucHJvdG90eXBlLnBhcnNlID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLmxleGVyLnJ1bigpXG4gIHRoaXMubGV4ZW1lcyA9IHRoaXMubGV4ZXIubGV4ZW1lc1xuXG4gIHZhciBzdGF0ZSA9IGx1bnIuUXVlcnlQYXJzZXIucGFyc2VDbGF1c2VcblxuICB3aGlsZSAoc3RhdGUpIHtcbiAgICBzdGF0ZSA9IHN0YXRlKHRoaXMpXG4gIH1cblxuICByZXR1cm4gdGhpcy5xdWVyeVxufVxuXG5sdW5yLlF1ZXJ5UGFyc2VyLnByb3RvdHlwZS5wZWVrTGV4ZW1lID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5sZXhlbWVzW3RoaXMubGV4ZW1lSWR4XVxufVxuXG5sdW5yLlF1ZXJ5UGFyc2VyLnByb3RvdHlwZS5jb25zdW1lTGV4ZW1lID0gZnVuY3Rpb24gKCkge1xuICB2YXIgbGV4ZW1lID0gdGhpcy5wZWVrTGV4ZW1lKClcbiAgdGhpcy5sZXhlbWVJZHggKz0gMVxuICByZXR1cm4gbGV4ZW1lXG59XG5cbmx1bnIuUXVlcnlQYXJzZXIucHJvdG90eXBlLm5leHRDbGF1c2UgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBjb21wbGV0ZWRDbGF1c2UgPSB0aGlzLmN1cnJlbnRDbGF1c2VcbiAgdGhpcy5xdWVyeS5jbGF1c2UoY29tcGxldGVkQ2xhdXNlKVxuICB0aGlzLmN1cnJlbnRDbGF1c2UgPSB7fVxufVxuXG5sdW5yLlF1ZXJ5UGFyc2VyLnBhcnNlQ2xhdXNlID0gZnVuY3Rpb24gKHBhcnNlcikge1xuICB2YXIgbGV4ZW1lID0gcGFyc2VyLnBlZWtMZXhlbWUoKVxuXG4gIGlmIChsZXhlbWUgPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBzd2l0Y2ggKGxleGVtZS50eXBlKSB7XG4gICAgY2FzZSBsdW5yLlF1ZXJ5TGV4ZXIuUFJFU0VOQ0U6XG4gICAgICByZXR1cm4gbHVuci5RdWVyeVBhcnNlci5wYXJzZVByZXNlbmNlXG4gICAgY2FzZSBsdW5yLlF1ZXJ5TGV4ZXIuRklFTEQ6XG4gICAgICByZXR1cm4gbHVuci5RdWVyeVBhcnNlci5wYXJzZUZpZWxkXG4gICAgY2FzZSBsdW5yLlF1ZXJ5TGV4ZXIuVEVSTTpcbiAgICAgIHJldHVybiBsdW5yLlF1ZXJ5UGFyc2VyLnBhcnNlVGVybVxuICAgIGRlZmF1bHQ6XG4gICAgICB2YXIgZXJyb3JNZXNzYWdlID0gXCJleHBlY3RlZCBlaXRoZXIgYSBmaWVsZCBvciBhIHRlcm0sIGZvdW5kIFwiICsgbGV4ZW1lLnR5cGVcblxuICAgICAgaWYgKGxleGVtZS5zdHIubGVuZ3RoID49IDEpIHtcbiAgICAgICAgZXJyb3JNZXNzYWdlICs9IFwiIHdpdGggdmFsdWUgJ1wiICsgbGV4ZW1lLnN0ciArIFwiJ1wiXG4gICAgICB9XG5cbiAgICAgIHRocm93IG5ldyBsdW5yLlF1ZXJ5UGFyc2VFcnJvciAoZXJyb3JNZXNzYWdlLCBsZXhlbWUuc3RhcnQsIGxleGVtZS5lbmQpXG4gIH1cbn1cblxubHVuci5RdWVyeVBhcnNlci5wYXJzZVByZXNlbmNlID0gZnVuY3Rpb24gKHBhcnNlcikge1xuICB2YXIgbGV4ZW1lID0gcGFyc2VyLmNvbnN1bWVMZXhlbWUoKVxuXG4gIGlmIChsZXhlbWUgPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBzd2l0Y2ggKGxleGVtZS5zdHIpIHtcbiAgICBjYXNlIFwiLVwiOlxuICAgICAgcGFyc2VyLmN1cnJlbnRDbGF1c2UucHJlc2VuY2UgPSBsdW5yLlF1ZXJ5LnByZXNlbmNlLlBST0hJQklURURcbiAgICAgIGJyZWFrXG4gICAgY2FzZSBcIitcIjpcbiAgICAgIHBhcnNlci5jdXJyZW50Q2xhdXNlLnByZXNlbmNlID0gbHVuci5RdWVyeS5wcmVzZW5jZS5SRVFVSVJFRFxuICAgICAgYnJlYWtcbiAgICBkZWZhdWx0OlxuICAgICAgdmFyIGVycm9yTWVzc2FnZSA9IFwidW5yZWNvZ25pc2VkIHByZXNlbmNlIG9wZXJhdG9yJ1wiICsgbGV4ZW1lLnN0ciArIFwiJ1wiXG4gICAgICB0aHJvdyBuZXcgbHVuci5RdWVyeVBhcnNlRXJyb3IgKGVycm9yTWVzc2FnZSwgbGV4ZW1lLnN0YXJ0LCBsZXhlbWUuZW5kKVxuICB9XG5cbiAgdmFyIG5leHRMZXhlbWUgPSBwYXJzZXIucGVla0xleGVtZSgpXG5cbiAgaWYgKG5leHRMZXhlbWUgPT0gdW5kZWZpbmVkKSB7XG4gICAgdmFyIGVycm9yTWVzc2FnZSA9IFwiZXhwZWN0aW5nIHRlcm0gb3IgZmllbGQsIGZvdW5kIG5vdGhpbmdcIlxuICAgIHRocm93IG5ldyBsdW5yLlF1ZXJ5UGFyc2VFcnJvciAoZXJyb3JNZXNzYWdlLCBsZXhlbWUuc3RhcnQsIGxleGVtZS5lbmQpXG4gIH1cblxuICBzd2l0Y2ggKG5leHRMZXhlbWUudHlwZSkge1xuICAgIGNhc2UgbHVuci5RdWVyeUxleGVyLkZJRUxEOlxuICAgICAgcmV0dXJuIGx1bnIuUXVlcnlQYXJzZXIucGFyc2VGaWVsZFxuICAgIGNhc2UgbHVuci5RdWVyeUxleGVyLlRFUk06XG4gICAgICByZXR1cm4gbHVuci5RdWVyeVBhcnNlci5wYXJzZVRlcm1cbiAgICBkZWZhdWx0OlxuICAgICAgdmFyIGVycm9yTWVzc2FnZSA9IFwiZXhwZWN0aW5nIHRlcm0gb3IgZmllbGQsIGZvdW5kICdcIiArIG5leHRMZXhlbWUudHlwZSArIFwiJ1wiXG4gICAgICB0aHJvdyBuZXcgbHVuci5RdWVyeVBhcnNlRXJyb3IgKGVycm9yTWVzc2FnZSwgbmV4dExleGVtZS5zdGFydCwgbmV4dExleGVtZS5lbmQpXG4gIH1cbn1cblxubHVuci5RdWVyeVBhcnNlci5wYXJzZUZpZWxkID0gZnVuY3Rpb24gKHBhcnNlcikge1xuICB2YXIgbGV4ZW1lID0gcGFyc2VyLmNvbnN1bWVMZXhlbWUoKVxuXG4gIGlmIChsZXhlbWUgPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBpZiAocGFyc2VyLnF1ZXJ5LmFsbEZpZWxkcy5pbmRleE9mKGxleGVtZS5zdHIpID09IC0xKSB7XG4gICAgdmFyIHBvc3NpYmxlRmllbGRzID0gcGFyc2VyLnF1ZXJ5LmFsbEZpZWxkcy5tYXAoZnVuY3Rpb24gKGYpIHsgcmV0dXJuIFwiJ1wiICsgZiArIFwiJ1wiIH0pLmpvaW4oJywgJyksXG4gICAgICAgIGVycm9yTWVzc2FnZSA9IFwidW5yZWNvZ25pc2VkIGZpZWxkICdcIiArIGxleGVtZS5zdHIgKyBcIicsIHBvc3NpYmxlIGZpZWxkczogXCIgKyBwb3NzaWJsZUZpZWxkc1xuXG4gICAgdGhyb3cgbmV3IGx1bnIuUXVlcnlQYXJzZUVycm9yIChlcnJvck1lc3NhZ2UsIGxleGVtZS5zdGFydCwgbGV4ZW1lLmVuZClcbiAgfVxuXG4gIHBhcnNlci5jdXJyZW50Q2xhdXNlLmZpZWxkcyA9IFtsZXhlbWUuc3RyXVxuXG4gIHZhciBuZXh0TGV4ZW1lID0gcGFyc2VyLnBlZWtMZXhlbWUoKVxuXG4gIGlmIChuZXh0TGV4ZW1lID09IHVuZGVmaW5lZCkge1xuICAgIHZhciBlcnJvck1lc3NhZ2UgPSBcImV4cGVjdGluZyB0ZXJtLCBmb3VuZCBub3RoaW5nXCJcbiAgICB0aHJvdyBuZXcgbHVuci5RdWVyeVBhcnNlRXJyb3IgKGVycm9yTWVzc2FnZSwgbGV4ZW1lLnN0YXJ0LCBsZXhlbWUuZW5kKVxuICB9XG5cbiAgc3dpdGNoIChuZXh0TGV4ZW1lLnR5cGUpIHtcbiAgICBjYXNlIGx1bnIuUXVlcnlMZXhlci5URVJNOlxuICAgICAgcmV0dXJuIGx1bnIuUXVlcnlQYXJzZXIucGFyc2VUZXJtXG4gICAgZGVmYXVsdDpcbiAgICAgIHZhciBlcnJvck1lc3NhZ2UgPSBcImV4cGVjdGluZyB0ZXJtLCBmb3VuZCAnXCIgKyBuZXh0TGV4ZW1lLnR5cGUgKyBcIidcIlxuICAgICAgdGhyb3cgbmV3IGx1bnIuUXVlcnlQYXJzZUVycm9yIChlcnJvck1lc3NhZ2UsIG5leHRMZXhlbWUuc3RhcnQsIG5leHRMZXhlbWUuZW5kKVxuICB9XG59XG5cbmx1bnIuUXVlcnlQYXJzZXIucGFyc2VUZXJtID0gZnVuY3Rpb24gKHBhcnNlcikge1xuICB2YXIgbGV4ZW1lID0gcGFyc2VyLmNvbnN1bWVMZXhlbWUoKVxuXG4gIGlmIChsZXhlbWUgPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBwYXJzZXIuY3VycmVudENsYXVzZS50ZXJtID0gbGV4ZW1lLnN0ci50b0xvd2VyQ2FzZSgpXG5cbiAgaWYgKGxleGVtZS5zdHIuaW5kZXhPZihcIipcIikgIT0gLTEpIHtcbiAgICBwYXJzZXIuY3VycmVudENsYXVzZS51c2VQaXBlbGluZSA9IGZhbHNlXG4gIH1cblxuICB2YXIgbmV4dExleGVtZSA9IHBhcnNlci5wZWVrTGV4ZW1lKClcblxuICBpZiAobmV4dExleGVtZSA9PSB1bmRlZmluZWQpIHtcbiAgICBwYXJzZXIubmV4dENsYXVzZSgpXG4gICAgcmV0dXJuXG4gIH1cblxuICBzd2l0Y2ggKG5leHRMZXhlbWUudHlwZSkge1xuICAgIGNhc2UgbHVuci5RdWVyeUxleGVyLlRFUk06XG4gICAgICBwYXJzZXIubmV4dENsYXVzZSgpXG4gICAgICByZXR1cm4gbHVuci5RdWVyeVBhcnNlci5wYXJzZVRlcm1cbiAgICBjYXNlIGx1bnIuUXVlcnlMZXhlci5GSUVMRDpcbiAgICAgIHBhcnNlci5uZXh0Q2xhdXNlKClcbiAgICAgIHJldHVybiBsdW5yLlF1ZXJ5UGFyc2VyLnBhcnNlRmllbGRcbiAgICBjYXNlIGx1bnIuUXVlcnlMZXhlci5FRElUX0RJU1RBTkNFOlxuICAgICAgcmV0dXJuIGx1bnIuUXVlcnlQYXJzZXIucGFyc2VFZGl0RGlzdGFuY2VcbiAgICBjYXNlIGx1bnIuUXVlcnlMZXhlci5CT09TVDpcbiAgICAgIHJldHVybiBsdW5yLlF1ZXJ5UGFyc2VyLnBhcnNlQm9vc3RcbiAgICBjYXNlIGx1bnIuUXVlcnlMZXhlci5QUkVTRU5DRTpcbiAgICAgIHBhcnNlci5uZXh0Q2xhdXNlKClcbiAgICAgIHJldHVybiBsdW5yLlF1ZXJ5UGFyc2VyLnBhcnNlUHJlc2VuY2VcbiAgICBkZWZhdWx0OlxuICAgICAgdmFyIGVycm9yTWVzc2FnZSA9IFwiVW5leHBlY3RlZCBsZXhlbWUgdHlwZSAnXCIgKyBuZXh0TGV4ZW1lLnR5cGUgKyBcIidcIlxuICAgICAgdGhyb3cgbmV3IGx1bnIuUXVlcnlQYXJzZUVycm9yIChlcnJvck1lc3NhZ2UsIG5leHRMZXhlbWUuc3RhcnQsIG5leHRMZXhlbWUuZW5kKVxuICB9XG59XG5cbmx1bnIuUXVlcnlQYXJzZXIucGFyc2VFZGl0RGlzdGFuY2UgPSBmdW5jdGlvbiAocGFyc2VyKSB7XG4gIHZhciBsZXhlbWUgPSBwYXJzZXIuY29uc3VtZUxleGVtZSgpXG5cbiAgaWYgKGxleGVtZSA9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIHZhciBlZGl0RGlzdGFuY2UgPSBwYXJzZUludChsZXhlbWUuc3RyLCAxMClcblxuICBpZiAoaXNOYU4oZWRpdERpc3RhbmNlKSkge1xuICAgIHZhciBlcnJvck1lc3NhZ2UgPSBcImVkaXQgZGlzdGFuY2UgbXVzdCBiZSBudW1lcmljXCJcbiAgICB0aHJvdyBuZXcgbHVuci5RdWVyeVBhcnNlRXJyb3IgKGVycm9yTWVzc2FnZSwgbGV4ZW1lLnN0YXJ0LCBsZXhlbWUuZW5kKVxuICB9XG5cbiAgcGFyc2VyLmN1cnJlbnRDbGF1c2UuZWRpdERpc3RhbmNlID0gZWRpdERpc3RhbmNlXG5cbiAgdmFyIG5leHRMZXhlbWUgPSBwYXJzZXIucGVla0xleGVtZSgpXG5cbiAgaWYgKG5leHRMZXhlbWUgPT0gdW5kZWZpbmVkKSB7XG4gICAgcGFyc2VyLm5leHRDbGF1c2UoKVxuICAgIHJldHVyblxuICB9XG5cbiAgc3dpdGNoIChuZXh0TGV4ZW1lLnR5cGUpIHtcbiAgICBjYXNlIGx1bnIuUXVlcnlMZXhlci5URVJNOlxuICAgICAgcGFyc2VyLm5leHRDbGF1c2UoKVxuICAgICAgcmV0dXJuIGx1bnIuUXVlcnlQYXJzZXIucGFyc2VUZXJtXG4gICAgY2FzZSBsdW5yLlF1ZXJ5TGV4ZXIuRklFTEQ6XG4gICAgICBwYXJzZXIubmV4dENsYXVzZSgpXG4gICAgICByZXR1cm4gbHVuci5RdWVyeVBhcnNlci5wYXJzZUZpZWxkXG4gICAgY2FzZSBsdW5yLlF1ZXJ5TGV4ZXIuRURJVF9ESVNUQU5DRTpcbiAgICAgIHJldHVybiBsdW5yLlF1ZXJ5UGFyc2VyLnBhcnNlRWRpdERpc3RhbmNlXG4gICAgY2FzZSBsdW5yLlF1ZXJ5TGV4ZXIuQk9PU1Q6XG4gICAgICByZXR1cm4gbHVuci5RdWVyeVBhcnNlci5wYXJzZUJvb3N0XG4gICAgY2FzZSBsdW5yLlF1ZXJ5TGV4ZXIuUFJFU0VOQ0U6XG4gICAgICBwYXJzZXIubmV4dENsYXVzZSgpXG4gICAgICByZXR1cm4gbHVuci5RdWVyeVBhcnNlci5wYXJzZVByZXNlbmNlXG4gICAgZGVmYXVsdDpcbiAgICAgIHZhciBlcnJvck1lc3NhZ2UgPSBcIlVuZXhwZWN0ZWQgbGV4ZW1lIHR5cGUgJ1wiICsgbmV4dExleGVtZS50eXBlICsgXCInXCJcbiAgICAgIHRocm93IG5ldyBsdW5yLlF1ZXJ5UGFyc2VFcnJvciAoZXJyb3JNZXNzYWdlLCBuZXh0TGV4ZW1lLnN0YXJ0LCBuZXh0TGV4ZW1lLmVuZClcbiAgfVxufVxuXG5sdW5yLlF1ZXJ5UGFyc2VyLnBhcnNlQm9vc3QgPSBmdW5jdGlvbiAocGFyc2VyKSB7XG4gIHZhciBsZXhlbWUgPSBwYXJzZXIuY29uc3VtZUxleGVtZSgpXG5cbiAgaWYgKGxleGVtZSA9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIHZhciBib29zdCA9IHBhcnNlSW50KGxleGVtZS5zdHIsIDEwKVxuXG4gIGlmIChpc05hTihib29zdCkpIHtcbiAgICB2YXIgZXJyb3JNZXNzYWdlID0gXCJib29zdCBtdXN0IGJlIG51bWVyaWNcIlxuICAgIHRocm93IG5ldyBsdW5yLlF1ZXJ5UGFyc2VFcnJvciAoZXJyb3JNZXNzYWdlLCBsZXhlbWUuc3RhcnQsIGxleGVtZS5lbmQpXG4gIH1cblxuICBwYXJzZXIuY3VycmVudENsYXVzZS5ib29zdCA9IGJvb3N0XG5cbiAgdmFyIG5leHRMZXhlbWUgPSBwYXJzZXIucGVla0xleGVtZSgpXG5cbiAgaWYgKG5leHRMZXhlbWUgPT0gdW5kZWZpbmVkKSB7XG4gICAgcGFyc2VyLm5leHRDbGF1c2UoKVxuICAgIHJldHVyblxuICB9XG5cbiAgc3dpdGNoIChuZXh0TGV4ZW1lLnR5cGUpIHtcbiAgICBjYXNlIGx1bnIuUXVlcnlMZXhlci5URVJNOlxuICAgICAgcGFyc2VyLm5leHRDbGF1c2UoKVxuICAgICAgcmV0dXJuIGx1bnIuUXVlcnlQYXJzZXIucGFyc2VUZXJtXG4gICAgY2FzZSBsdW5yLlF1ZXJ5TGV4ZXIuRklFTEQ6XG4gICAgICBwYXJzZXIubmV4dENsYXVzZSgpXG4gICAgICByZXR1cm4gbHVuci5RdWVyeVBhcnNlci5wYXJzZUZpZWxkXG4gICAgY2FzZSBsdW5yLlF1ZXJ5TGV4ZXIuRURJVF9ESVNUQU5DRTpcbiAgICAgIHJldHVybiBsdW5yLlF1ZXJ5UGFyc2VyLnBhcnNlRWRpdERpc3RhbmNlXG4gICAgY2FzZSBsdW5yLlF1ZXJ5TGV4ZXIuQk9PU1Q6XG4gICAgICByZXR1cm4gbHVuci5RdWVyeVBhcnNlci5wYXJzZUJvb3N0XG4gICAgY2FzZSBsdW5yLlF1ZXJ5TGV4ZXIuUFJFU0VOQ0U6XG4gICAgICBwYXJzZXIubmV4dENsYXVzZSgpXG4gICAgICByZXR1cm4gbHVuci5RdWVyeVBhcnNlci5wYXJzZVByZXNlbmNlXG4gICAgZGVmYXVsdDpcbiAgICAgIHZhciBlcnJvck1lc3NhZ2UgPSBcIlVuZXhwZWN0ZWQgbGV4ZW1lIHR5cGUgJ1wiICsgbmV4dExleGVtZS50eXBlICsgXCInXCJcbiAgICAgIHRocm93IG5ldyBsdW5yLlF1ZXJ5UGFyc2VFcnJvciAoZXJyb3JNZXNzYWdlLCBuZXh0TGV4ZW1lLnN0YXJ0LCBuZXh0TGV4ZW1lLmVuZClcbiAgfVxufVxuXG4gIC8qKlxuICAgKiBleHBvcnQgdGhlIG1vZHVsZSB2aWEgQU1ELCBDb21tb25KUyBvciBhcyBhIGJyb3dzZXIgZ2xvYmFsXG4gICAqIEV4cG9ydCBjb2RlIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL3VtZGpzL3VtZC9ibG9iL21hc3Rlci9yZXR1cm5FeHBvcnRzLmpzXG4gICAqL1xuICA7KGZ1bmN0aW9uIChyb290LCBmYWN0b3J5KSB7XG4gICAgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuICAgICAgLy8gQU1ELiBSZWdpc3RlciBhcyBhbiBhbm9ueW1vdXMgbW9kdWxlLlxuICAgICAgZGVmaW5lKGZhY3RvcnkpXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpIHtcbiAgICAgIC8qKlxuICAgICAgICogTm9kZS4gRG9lcyBub3Qgd29yayB3aXRoIHN0cmljdCBDb21tb25KUywgYnV0XG4gICAgICAgKiBvbmx5IENvbW1vbkpTLWxpa2UgZW52aXJvbWVudHMgdGhhdCBzdXBwb3J0IG1vZHVsZS5leHBvcnRzLFxuICAgICAgICogbGlrZSBOb2RlLlxuICAgICAgICovXG4gICAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBCcm93c2VyIGdsb2JhbHMgKHJvb3QgaXMgd2luZG93KVxuICAgICAgcm9vdC5sdW5yID0gZmFjdG9yeSgpXG4gICAgfVxuICB9KHRoaXMsIGZ1bmN0aW9uICgpIHtcbiAgICAvKipcbiAgICAgKiBKdXN0IHJldHVybiBhIHZhbHVlIHRvIGRlZmluZSB0aGUgbW9kdWxlIGV4cG9ydC5cbiAgICAgKiBUaGlzIGV4YW1wbGUgcmV0dXJucyBhbiBvYmplY3QsIGJ1dCB0aGUgbW9kdWxlXG4gICAgICogY2FuIHJldHVybiBhIGZ1bmN0aW9uIGFzIHRoZSBleHBvcnRlZCB2YWx1ZS5cbiAgICAgKi9cbiAgICByZXR1cm4gbHVuclxuICB9KSlcbn0pKCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvbHVuci9sdW5yLmpzIiwiLypcclxuICogQ29weXJpZ2h0IChjKSAyMDE2LTIwMTggTWFydGluIERvbmF0aCA8bWFydGluLmRvbmF0aEBzcXVpZGZ1bmsuY29tPlxyXG4gKlxyXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XHJcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvXHJcbiAqIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlXHJcbiAqIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vclxyXG4gKiBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xyXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxyXG4gKlxyXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxyXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cclxuICpcclxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxyXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcclxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTi1JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxyXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXHJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HXHJcbiAqIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1NcclxuICogSU4gVEhFIFNPRlRXQVJFLlxyXG4gKi9cclxuXHJcbmltcG9ydCBQb3NpdGlvbiBmcm9tIFwiLi9TaWRlYmFyL1Bvc2l0aW9uXCJcclxuXHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogTW9kdWxlXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBQb3NpdGlvblxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hc3NldHMvamF2YXNjcmlwdHMvY29tcG9uZW50cy9NYXRlcmlhbC9TaWRlYmFyLmpzIiwiLypcclxuICogQ29weXJpZ2h0IChjKSAyMDE2LTIwMTggTWFydGluIERvbmF0aCA8bWFydGluLmRvbmF0aEBzcXVpZGZ1bmsuY29tPlxyXG4gKlxyXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XHJcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvXHJcbiAqIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlXHJcbiAqIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vclxyXG4gKiBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xyXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxyXG4gKlxyXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxyXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cclxuICpcclxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxyXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcclxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTi1JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxyXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXHJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HXHJcbiAqIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1NcclxuICogSU4gVEhFIFNPRlRXQVJFLlxyXG4gKi9cclxuXHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogQ2xhc3NcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9zaXRpb24ge1xyXG5cclxuICAvKipcclxuICAgKiBTZXQgc2lkZWJhcnMgdG8gbG9ja2VkIHN0YXRlIGFuZCBsaW1pdCBoZWlnaHQgdG8gcGFyZW50IG5vZGVcclxuICAgKlxyXG4gICAqIEBjb25zdHJ1Y3RvclxyXG4gICAqXHJcbiAgICogQHByb3BlcnR5IHtIVE1MRWxlbWVudH0gZWxfIC0gU2lkZWJhclxyXG4gICAqIEBwcm9wZXJ0eSB7SFRNTEVsZW1lbnR9IHBhcmVudF8gLSBTaWRlYmFyIGNvbnRhaW5lclxyXG4gICAqIEBwcm9wZXJ0eSB7SFRNTEVsZW1lbnR9IGhlYWRlcl8gLSBIZWFkZXJcclxuICAgKiBAcHJvcGVydHkge251bWJlcn0gaGVpZ2h0XyAtIEN1cnJlbnQgc2lkZWJhciBoZWlnaHRcclxuICAgKiBAcHJvcGVydHkge251bWJlcn0gb2Zmc2V0XyAtIEN1cnJlbnQgcGFnZSB5LW9mZnNldFxyXG4gICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gcGFkXyAtIFBhZCB3aGVuIGhlYWRlciBpcyBmaXhlZFxyXG4gICAqXHJcbiAgICogQHBhcmFtIHsoc3RyaW5nfEhUTUxFbGVtZW50KX0gZWwgLSBTZWxlY3RvciBvciBIVE1MIGVsZW1lbnRcclxuICAgKiBAcGFyYW0geyhzdHJpbmd8SFRNTEVsZW1lbnQpfSBoZWFkZXIgLSBTZWxlY3RvciBvciBIVE1MIGVsZW1lbnRcclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcihlbCwgaGVhZGVyKSB7XHJcbiAgICBsZXQgcmVmID0gKHR5cGVvZiBlbCA9PT0gXCJzdHJpbmdcIilcclxuICAgICAgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVsKVxyXG4gICAgICA6IGVsXHJcbiAgICBpZiAoIShyZWYgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkgfHxcclxuICAgICAgICAhKHJlZi5wYXJlbnROb2RlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKVxyXG4gICAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3JcclxuICAgIHRoaXMuZWxfID0gcmVmXHJcbiAgICB0aGlzLnBhcmVudF8gPSByZWYucGFyZW50Tm9kZVxyXG5cclxuICAgIC8qIFJldHJpZXZlIGhlYWRlciAqL1xyXG4gICAgcmVmID0gKHR5cGVvZiBoZWFkZXIgPT09IFwic3RyaW5nXCIpXHJcbiAgICAgID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihoZWFkZXIpXHJcbiAgICAgIDogaGVhZGVyXHJcbiAgICBpZiAoIShyZWYgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpXHJcbiAgICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvclxyXG4gICAgdGhpcy5oZWFkZXJfID0gcmVmXHJcblxyXG4gICAgLyogSW5pdGlhbGl6ZSBjdXJyZW50IGhlaWdodCBhbmQgdGVzdCB3aGV0aGVyIGhlYWRlciBpcyBmaXhlZCAqL1xyXG4gICAgdGhpcy5oZWlnaHRfID0gMFxyXG4gICAgdGhpcy5wYWRfID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcy5oZWFkZXJfKS5wb3NpdGlvbiA9PT0gXCJmaXhlZFwiXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBJbml0aWFsaXplIHNpZGViYXIgc3RhdGVcclxuICAgKi9cclxuICBzZXR1cCgpIHtcclxuICAgIGNvbnN0IHRvcCA9IEFycmF5LnByb3RvdHlwZS5yZWR1Y2UuY2FsbChcclxuICAgICAgdGhpcy5wYXJlbnRfLmNoaWxkcmVuLCAob2Zmc2V0LCBjaGlsZCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBNYXRoLm1heChvZmZzZXQsIGNoaWxkLm9mZnNldFRvcClcclxuICAgICAgfSwgMClcclxuXHJcbiAgICAvKiBTZXQgbG9jayBvZmZzZXQgZm9yIGVsZW1lbnQgd2l0aCBsYXJnZXN0IHRvcCBvZmZzZXQgKi9cclxuICAgIHRoaXMub2Zmc2V0XyA9IHRvcCAtICh0aGlzLnBhZF8gPyB0aGlzLmhlYWRlcl8ub2Zmc2V0SGVpZ2h0IDogMClcclxuICAgIHRoaXMudXBkYXRlKClcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFVwZGF0ZSBsb2NrZWQgc3RhdGUgYW5kIGhlaWdodFxyXG4gICAqXHJcbiAgICogVGhlIGlubmVyIGhlaWdodCBvZiB0aGUgd2luZG93ICg9IHRoZSB2aXNpYmxlIGFyZWEpIGlzIHRoZSBtYXhpbXVtXHJcbiAgICogcG9zc2libGUgaGVpZ2h0IGZvciB0aGUgc3RyZXRjaGluZyBzaWRlYmFyLiBUaGlzIGhlaWdodCBtdXN0IGJlIGRlZHVjdGVkXHJcbiAgICogYnkgdGhlIGhlaWdodCBvZiB0aGUgZml4ZWQgaGVhZGVyICg1NnB4KS4gRGVwZW5kaW5nIG9uIHRoZSBwYWdlIHktb2Zmc2V0LFxyXG4gICAqIHRoZSB0b3Agb2Zmc2V0IG9mIHRoZSBzaWRlYmFyIG11c3QgYmUgdGFrZW4gaW50byBhY2NvdW50LCBhcyB3ZWxsIGFzIHRoZVxyXG4gICAqIGNhc2Ugd2hlcmUgdGhlIHdpbmRvdyBpcyBzY3JvbGxlZCBiZXlvbmQgdGhlIHNpZGViYXIgY29udGFpbmVyLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtFdmVudD99IGV2IC0gRXZlbnRcclxuICAgKi9cclxuICB1cGRhdGUoZXYpIHtcclxuICAgIGNvbnN0IG9mZnNldCAgPSB3aW5kb3cucGFnZVlPZmZzZXRcclxuICAgIGNvbnN0IHZpc2libGUgPSB3aW5kb3cuaW5uZXJIZWlnaHRcclxuXHJcbiAgICAvKiBVcGRhdGUgb2Zmc2V0LCBpbiBjYXNlIHdpbmRvdyBpcyByZXNpemVkICovXHJcbiAgICBpZiAoZXYgJiYgZXYudHlwZSA9PT0gXCJyZXNpemVcIilcclxuICAgICAgdGhpcy5zZXR1cCgpXHJcblxyXG4gICAgLyogU2V0IGJvdW5kcyBvZiBzaWRlYmFyIGNvbnRhaW5lciAtIG11c3QgYmUgY2FsY3VsYXRlZCBvbiBldmVyeSBydW4sIGFzXHJcbiAgICAgICB0aGUgaGVpZ2h0IG9mIHRoZSBjb250ZW50IG1pZ2h0IGNoYW5nZSBkdWUgdG8gbG9hZGluZyBpbWFnZXMgZXRjLiAqL1xyXG4gICAgY29uc3QgYm91bmRzID0ge1xyXG4gICAgICB0b3A6IHRoaXMucGFkXyA/IHRoaXMuaGVhZGVyXy5vZmZzZXRIZWlnaHQgOiAwLFxyXG4gICAgICBib3R0b206IHRoaXMucGFyZW50Xy5vZmZzZXRUb3AgKyB0aGlzLnBhcmVudF8ub2Zmc2V0SGVpZ2h0XHJcbiAgICB9XHJcblxyXG4gICAgLyogQ2FsY3VsYXRlIG5ldyBvZmZzZXQgYW5kIGhlaWdodCAqL1xyXG4gICAgY29uc3QgaGVpZ2h0ID0gdmlzaWJsZSAtIGJvdW5kcy50b3BcclxuICAgICAgICAgICAgICAgICAtIE1hdGgubWF4KDAsIHRoaXMub2Zmc2V0XyAtIG9mZnNldClcclxuICAgICAgICAgICAgICAgICAtIE1hdGgubWF4KDAsIG9mZnNldCArIHZpc2libGUgLSBib3VuZHMuYm90dG9tKVxyXG5cclxuICAgIC8qIElmIGhlaWdodCBjaGFuZ2VkLCB1cGRhdGUgZWxlbWVudCAqL1xyXG4gICAgaWYgKGhlaWdodCAhPT0gdGhpcy5oZWlnaHRfKVxyXG4gICAgICB0aGlzLmVsXy5zdHlsZS5oZWlnaHQgPSBgJHt0aGlzLmhlaWdodF8gPSBoZWlnaHR9cHhgXHJcblxyXG4gICAgLyogU2lkZWJhciBzaG91bGQgYmUgbG9ja2VkLCBhcyB3ZSdyZSBiZWxvdyBwYXJlbnQgb2Zmc2V0ICovXHJcbiAgICBpZiAob2Zmc2V0ID49IHRoaXMub2Zmc2V0Xykge1xyXG4gICAgICBpZiAodGhpcy5lbF8uZGF0YXNldC5tZFN0YXRlICE9PSBcImxvY2tcIilcclxuICAgICAgICB0aGlzLmVsXy5kYXRhc2V0Lm1kU3RhdGUgPSBcImxvY2tcIlxyXG5cclxuICAgIC8qIFNpZGViYXIgc2hvdWxkIGJlIHVubG9ja2VkLCBpZiBsb2NrZWQgKi9cclxuICAgIH0gZWxzZSBpZiAodGhpcy5lbF8uZGF0YXNldC5tZFN0YXRlID09PSBcImxvY2tcIikge1xyXG4gICAgICB0aGlzLmVsXy5kYXRhc2V0Lm1kU3RhdGUgPSBcIlwiXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXNldCBsb2NrZWQgc3RhdGUgYW5kIGhlaWdodFxyXG4gICAqL1xyXG4gIHJlc2V0KCkge1xyXG4gICAgdGhpcy5lbF8uZGF0YXNldC5tZFN0YXRlID0gXCJcIlxyXG4gICAgdGhpcy5lbF8uc3R5bGUuaGVpZ2h0ID0gXCJcIlxyXG4gICAgdGhpcy5oZWlnaHRfID0gMFxyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXNzZXRzL2phdmFzY3JpcHRzL2NvbXBvbmVudHMvTWF0ZXJpYWwvU2lkZWJhci9Qb3NpdGlvbi5qcyIsIi8qXHJcbiAqIENvcHlyaWdodCAoYykgMjAxNi0yMDE4IE1hcnRpbiBEb25hdGggPG1hcnRpbi5kb25hdGhAc3F1aWRmdW5rLmNvbT5cclxuICpcclxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxyXG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0b1xyXG4gKiBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZVxyXG4gKiByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3JcclxuICogc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcclxuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcclxuICpcclxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cclxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcbiAqXHJcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcclxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXHJcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT04tSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcclxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxyXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lOR1xyXG4gKiBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTXHJcbiAqIElOIFRIRSBTT0ZUV0FSRS5cclxuICovXHJcblxyXG5pbXBvcnQgQWRhcHRlciBmcm9tIFwiLi9Tb3VyY2UvQWRhcHRlclwiXHJcbmltcG9ydCBSZXBvc2l0b3J5IGZyb20gXCIuL1NvdXJjZS9SZXBvc2l0b3J5XCJcclxuXHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogTW9kdWxlXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBBZGFwdGVyLFxyXG4gIFJlcG9zaXRvcnlcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXNzZXRzL2phdmFzY3JpcHRzL2NvbXBvbmVudHMvTWF0ZXJpYWwvU291cmNlLmpzIiwiLypcclxuICogQ29weXJpZ2h0IChjKSAyMDE2LTIwMTggTWFydGluIERvbmF0aCA8bWFydGluLmRvbmF0aEBzcXVpZGZ1bmsuY29tPlxyXG4gKlxyXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XHJcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvXHJcbiAqIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlXHJcbiAqIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vclxyXG4gKiBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xyXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxyXG4gKlxyXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxyXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cclxuICpcclxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxyXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcclxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTi1JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxyXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXHJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HXHJcbiAqIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1NcclxuICogSU4gVEhFIFNPRlRXQVJFLlxyXG4gKi9cclxuXHJcbmltcG9ydCBHaXRIdWIgZnJvbSBcIi4vQWRhcHRlci9HaXRIdWJcIlxyXG5cclxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiBNb2R1bGVcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIEdpdEh1YlxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hc3NldHMvamF2YXNjcmlwdHMvY29tcG9uZW50cy9NYXRlcmlhbC9Tb3VyY2UvQWRhcHRlci5qcyIsIi8qXHJcbiAqIENvcHlyaWdodCAoYykgMjAxNi0yMDE4IE1hcnRpbiBEb25hdGggPG1hcnRpbi5kb25hdGhAc3F1aWRmdW5rLmNvbT5cclxuICpcclxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxyXG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0b1xyXG4gKiBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZVxyXG4gKiByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3JcclxuICogc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcclxuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcclxuICpcclxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cclxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcbiAqXHJcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcclxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXHJcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT04tSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcclxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxyXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lOR1xyXG4gKiBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTXHJcbiAqIElOIFRIRSBTT0ZUV0FSRS5cclxuICovXHJcblxyXG5pbXBvcnQgQWJzdHJhY3QgZnJvbSBcIi4vQWJzdHJhY3RcIlxyXG5cclxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiBDbGFzc1xyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHaXRIdWIgZXh0ZW5kcyBBYnN0cmFjdCB7XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldHJpZXZlIHJlcG9zaXRvcnkgaW5mb3JtYXRpb24gZnJvbSBHaXRIdWJcclxuICAgKlxyXG4gICAqIEBjb25zdHJ1Y3RvclxyXG4gICAqXHJcbiAgICogQHByb3BlcnR5IHtzdHJpbmd9IG5hbWVfIC0gTmFtZSBvZiB0aGUgcmVwb3NpdG9yeVxyXG4gICAqXHJcbiAgICogQHBhcmFtIHsoc3RyaW5nfEhUTUxBbmNob3JFbGVtZW50KX0gZWwgLSBTZWxlY3RvciBvciBIVE1MIGVsZW1lbnRcclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcihlbCkge1xyXG4gICAgc3VwZXIoZWwpXHJcblxyXG4gICAgLyogRXh0cmFjdCB1c2VyIChhbmQgcmVwb3NpdG9yeSBuYW1lKSBmcm9tIFVSTCwgYXMgd2UgaGF2ZSB0byBxdWVyeSBmb3IgYWxsXHJcbiAgICAgICByZXBvc2l0b3JpZXMsIHRvIG9taXQgNDA0IGVycm9ycyBmb3IgcHJpdmF0ZSByZXBvc2l0b3JpZXMgKi9cclxuICAgIGNvbnN0IG1hdGNoZXMgPSAvXi4rZ2l0aHViXFwuY29tXFwvKFteL10rKVxcLz8oW14vXSspPy4qJC9cclxuICAgICAgLmV4ZWModGhpcy5iYXNlXylcclxuICAgIGlmIChtYXRjaGVzICYmIG1hdGNoZXMubGVuZ3RoID09PSAzKSB7XHJcbiAgICAgIGNvbnN0IFssIHVzZXIsIG5hbWVdID0gbWF0Y2hlc1xyXG5cclxuICAgICAgLyogSW5pdGlhbGl6ZSBiYXNlIFVSTCBhbmQgcmVwb3NpdG9yeSBuYW1lICovXHJcbiAgICAgIHRoaXMuYmFzZV8gPSBgaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2Vycy8ke3VzZXJ9L3JlcG9zYFxyXG4gICAgICB0aGlzLm5hbWVfID0gbmFtZVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRmV0Y2ggcmVsZXZhbnQgcmVwb3NpdG9yeSBpbmZvcm1hdGlvbiBmcm9tIEdpdEh1YlxyXG4gICAqXHJcbiAgICogQHJldHVybiB7UHJvbWlzZTxBcnJheTxzdHJpbmc+Pn0gUHJvbWlzZSByZXR1cm5pbmcgYW4gYXJyYXkgb2YgZmFjdHNcclxuICAgKi9cclxuICBmZXRjaF8oKSB7XHJcbiAgICBjb25zdCBwYWdpbmF0ZSA9IChwYWdlID0gMCkgPT4ge1xyXG4gICAgICByZXR1cm4gZmV0Y2goYCR7dGhpcy5iYXNlX30/cGVyX3BhZ2U9MzAmcGFnZT0ke3BhZ2V9YClcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICBpZiAoIShkYXRhIGluc3RhbmNlb2YgQXJyYXkpKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yXHJcblxyXG4gICAgICAgICAgLyogRGlzcGxheSBudW1iZXIgb2Ygc3RhcnMgYW5kIGZvcmtzLCBpZiByZXBvc2l0b3J5IGlzIGdpdmVuICovXHJcbiAgICAgICAgICBpZiAodGhpcy5uYW1lXykge1xyXG4gICAgICAgICAgICBjb25zdCByZXBvID0gZGF0YS5maW5kKGl0ZW0gPT4gaXRlbS5uYW1lID09PSB0aGlzLm5hbWVfKVxyXG4gICAgICAgICAgICBpZiAoIXJlcG8gJiYgZGF0YS5sZW5ndGggPT09IDMwKVxyXG4gICAgICAgICAgICAgIHJldHVybiBwYWdpbmF0ZShwYWdlICsgMSlcclxuXHJcbiAgICAgICAgICAgIC8qIElmIHdlIGZvdW5kIGEgcmVwbywgZXh0cmFjdCB0aGUgZmFjdHMgKi9cclxuICAgICAgICAgICAgcmV0dXJuIHJlcG9cclxuICAgICAgICAgICAgICA/IFtcclxuICAgICAgICAgICAgICAgIGAke3RoaXMuZm9ybWF0XyhyZXBvLnN0YXJnYXplcnNfY291bnQpfSBTdGFyc2AsXHJcbiAgICAgICAgICAgICAgICBgJHt0aGlzLmZvcm1hdF8ocmVwby5mb3Jrc19jb3VudCl9IEZvcmtzYFxyXG4gICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICA6IFtdXHJcblxyXG4gICAgICAgICAgLyogRGlzcGxheSBudW1iZXIgb2YgcmVwb3NpdG9yaWVzLCBvdGhlcndpc2UgKi9cclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgICAgYCR7ZGF0YS5sZW5ndGh9IFJlcG9zaXRvcmllc2BcclxuICAgICAgICAgICAgXVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLyogUGFnaW5hdGUgdGhyb3VnaCByZXBvcyAqL1xyXG4gICAgcmV0dXJuIHBhZ2luYXRlKClcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Fzc2V0cy9qYXZhc2NyaXB0cy9jb21wb25lbnRzL01hdGVyaWFsL1NvdXJjZS9BZGFwdGVyL0dpdEh1Yi5qcyIsIi8qXHJcbiAqIENvcHlyaWdodCAoYykgMjAxNi0yMDE4IE1hcnRpbiBEb25hdGggPG1hcnRpbi5kb25hdGhAc3F1aWRmdW5rLmNvbT5cclxuICpcclxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxyXG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0b1xyXG4gKiBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZVxyXG4gKiByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3JcclxuICogc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcclxuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcclxuICpcclxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cclxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcbiAqXHJcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcclxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXHJcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT04tSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcclxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxyXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lOR1xyXG4gKiBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTXHJcbiAqIElOIFRIRSBTT0ZUV0FSRS5cclxuICovXHJcblxyXG5pbXBvcnQgQ29va2llcyBmcm9tIFwianMtY29va2llXCJcclxuXHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogQ2xhc3NcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWJzdHJhY3Qge1xyXG5cclxuICAvKipcclxuICAgKiBSZXRyaWV2ZSByZXBvc2l0b3J5IGluZm9ybWF0aW9uXHJcbiAgICpcclxuICAgKiBAY29uc3RydWN0b3JcclxuICAgKlxyXG4gICAqIEBwcm9wZXJ0eSB7SFRNTEFuY2hvckVsZW1lbnR9IGVsXyAtIExpbmsgdG8gcmVwb3NpdG9yeVxyXG4gICAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBiYXNlXyAtIEFQSSBiYXNlIFVSTFxyXG4gICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBzYWx0XyAtIFVuaXF1ZSBpZGVudGlmaWVyXHJcbiAgICpcclxuICAgKiBAcGFyYW0geyhzdHJpbmd8SFRNTEFuY2hvckVsZW1lbnQpfSBlbCAtIFNlbGVjdG9yIG9yIEhUTUwgZWxlbWVudFxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKGVsKSB7XHJcbiAgICBjb25zdCByZWYgPSAodHlwZW9mIGVsID09PSBcInN0cmluZ1wiKVxyXG4gICAgICA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZWwpXHJcbiAgICAgIDogZWxcclxuICAgIGlmICghKHJlZiBpbnN0YW5jZW9mIEhUTUxBbmNob3JFbGVtZW50KSlcclxuICAgICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yXHJcbiAgICB0aGlzLmVsXyA9IHJlZlxyXG5cclxuICAgIC8qIFJldHJpZXZlIGJhc2UgVVJMICovXHJcbiAgICB0aGlzLmJhc2VfID0gdGhpcy5lbF8uaHJlZlxyXG4gICAgdGhpcy5zYWx0XyA9IHRoaXMuaGFzaF8odGhpcy5iYXNlXylcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldHJpZXZlIGRhdGEgZnJvbSBDb29raWUgb3IgZmV0Y2ggZnJvbSByZXNwZWN0aXZlIEFQSVxyXG4gICAqXHJcbiAgICogQHJldHVybiB7UHJvbWlzZTxBcnJheTxzdHJpbmc+Pn0gUHJvbWlzZSB0aGF0IHJldHVybnMgYW4gYXJyYXkgb2YgZmFjdHNcclxuICAgKi9cclxuICBmZXRjaCgpIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcclxuICAgICAgY29uc3QgY2FjaGVkID0gQ29va2llcy5nZXRKU09OKGAke3RoaXMuc2FsdF99LmNhY2hlLXNvdXJjZWApXHJcbiAgICAgIGlmICh0eXBlb2YgY2FjaGVkICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgcmVzb2x2ZShjYWNoZWQpXHJcblxyXG4gICAgICAvKiBJZiB0aGUgZGF0YSBpcyBub3QgY2FjaGVkIGluIGEgY29va2llLCBpbnZva2UgZmV0Y2ggYW5kIHNldFxyXG4gICAgICAgICBhIGNvb2tpZSB0aGF0IGF1dG9tYXRpY2FsbHkgZXhwaXJlcyBpbiAxNSBtaW51dGVzICovXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5mZXRjaF8oKS50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgQ29va2llcy5zZXQoYCR7dGhpcy5zYWx0X30uY2FjaGUtc291cmNlYCwgZGF0YSwgeyBleHBpcmVzOiAxIC8gOTYgfSlcclxuICAgICAgICAgIHJlc29sdmUoZGF0YSlcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQWJzdHJhY3QgcHJpdmF0ZSBmdW5jdGlvbiB0aGF0IGZldGNoZXMgcmVsZXZhbnQgcmVwb3NpdG9yeSBpbmZvcm1hdGlvblxyXG4gICAqXHJcbiAgICogQGFic3RyYWN0XHJcbiAgICovXHJcbiAgZmV0Y2hfKCkge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKFwiZmV0Y2hfKCk6IE5vdCBpbXBsZW1lbnRlZFwiKVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRm9ybWF0IGEgbnVtYmVyIHdpdGggc3VmZml4XHJcbiAgICpcclxuICAgKiBAcGFyYW0ge251bWJlcn0gbnVtYmVyIC0gTnVtYmVyIHRvIGZvcm1hdFxyXG4gICAqIEByZXR1cm4ge3N0cmluZ30gRm9ybWF0dGVkIG51bWJlclxyXG4gICAqL1xyXG4gIGZvcm1hdF8obnVtYmVyKSB7XHJcbiAgICBpZiAobnVtYmVyID4gMTAwMDApXHJcbiAgICAgIHJldHVybiBgJHsobnVtYmVyIC8gMTAwMCkudG9GaXhlZCgwKX1rYFxyXG4gICAgZWxzZSBpZiAobnVtYmVyID4gMTAwMClcclxuICAgICAgcmV0dXJuIGAkeyhudW1iZXIgLyAxMDAwKS50b0ZpeGVkKDEpfWtgXHJcbiAgICByZXR1cm4gYCR7bnVtYmVyfWBcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNpbXBsZSBoYXNoIGZ1bmN0aW9uXHJcbiAgICpcclxuICAgKiBUYWtlbiBmcm9tIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzc2MTY0ODQvMTA2NTU4NFxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IHN0ciAtIElucHV0IHN0cmluZ1xyXG4gICAqIEByZXR1cm4ge251bWJlcn0gSGFzaGVkIHN0cmluZ1xyXG4gICAqL1xyXG4gIGhhc2hfKHN0cikge1xyXG4gICAgbGV0IGhhc2ggPSAwXHJcbiAgICBpZiAoc3RyLmxlbmd0aCA9PT0gMCkgcmV0dXJuIGhhc2hcclxuICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSBzdHIubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcclxuICAgICAgaGFzaCAgPSAoKGhhc2ggPDwgNSkgLSBoYXNoKSArIHN0ci5jaGFyQ29kZUF0KGkpXHJcbiAgICAgIGhhc2ggfD0gMCAvLyBDb252ZXJ0IHRvIDMyYml0IGludGVnZXJcclxuICAgIH1cclxuICAgIHJldHVybiBoYXNoXHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hc3NldHMvamF2YXNjcmlwdHMvY29tcG9uZW50cy9NYXRlcmlhbC9Tb3VyY2UvQWRhcHRlci9BYnN0cmFjdC5qcyIsIi8qIVxuICogSmF2YVNjcmlwdCBDb29raWUgdjIuMi4wXG4gKiBodHRwczovL2dpdGh1Yi5jb20vanMtY29va2llL2pzLWNvb2tpZVxuICpcbiAqIENvcHlyaWdodCAyMDA2LCAyMDE1IEtsYXVzIEhhcnRsICYgRmFnbmVyIEJyYWNrXG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2VcbiAqL1xuOyhmdW5jdGlvbiAoZmFjdG9yeSkge1xuXHR2YXIgcmVnaXN0ZXJlZEluTW9kdWxlTG9hZGVyID0gZmFsc2U7XG5cdGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcblx0XHRkZWZpbmUoZmFjdG9yeSk7XG5cdFx0cmVnaXN0ZXJlZEluTW9kdWxlTG9hZGVyID0gdHJ1ZTtcblx0fVxuXHRpZiAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKSB7XG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdFx0cmVnaXN0ZXJlZEluTW9kdWxlTG9hZGVyID0gdHJ1ZTtcblx0fVxuXHRpZiAoIXJlZ2lzdGVyZWRJbk1vZHVsZUxvYWRlcikge1xuXHRcdHZhciBPbGRDb29raWVzID0gd2luZG93LkNvb2tpZXM7XG5cdFx0dmFyIGFwaSA9IHdpbmRvdy5Db29raWVzID0gZmFjdG9yeSgpO1xuXHRcdGFwaS5ub0NvbmZsaWN0ID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0d2luZG93LkNvb2tpZXMgPSBPbGRDb29raWVzO1xuXHRcdFx0cmV0dXJuIGFwaTtcblx0XHR9O1xuXHR9XG59KGZ1bmN0aW9uICgpIHtcblx0ZnVuY3Rpb24gZXh0ZW5kICgpIHtcblx0XHR2YXIgaSA9IDA7XG5cdFx0dmFyIHJlc3VsdCA9IHt9O1xuXHRcdGZvciAoOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgYXR0cmlidXRlcyA9IGFyZ3VtZW50c1sgaSBdO1xuXHRcdFx0Zm9yICh2YXIga2V5IGluIGF0dHJpYnV0ZXMpIHtcblx0XHRcdFx0cmVzdWx0W2tleV0gPSBhdHRyaWJ1dGVzW2tleV07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiByZXN1bHQ7XG5cdH1cblxuXHRmdW5jdGlvbiBpbml0IChjb252ZXJ0ZXIpIHtcblx0XHRmdW5jdGlvbiBhcGkgKGtleSwgdmFsdWUsIGF0dHJpYnV0ZXMpIHtcblx0XHRcdHZhciByZXN1bHQ7XG5cdFx0XHRpZiAodHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJykge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdC8vIFdyaXRlXG5cblx0XHRcdGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuXHRcdFx0XHRhdHRyaWJ1dGVzID0gZXh0ZW5kKHtcblx0XHRcdFx0XHRwYXRoOiAnLydcblx0XHRcdFx0fSwgYXBpLmRlZmF1bHRzLCBhdHRyaWJ1dGVzKTtcblxuXHRcdFx0XHRpZiAodHlwZW9mIGF0dHJpYnV0ZXMuZXhwaXJlcyA9PT0gJ251bWJlcicpIHtcblx0XHRcdFx0XHR2YXIgZXhwaXJlcyA9IG5ldyBEYXRlKCk7XG5cdFx0XHRcdFx0ZXhwaXJlcy5zZXRNaWxsaXNlY29uZHMoZXhwaXJlcy5nZXRNaWxsaXNlY29uZHMoKSArIGF0dHJpYnV0ZXMuZXhwaXJlcyAqIDg2NGUrNSk7XG5cdFx0XHRcdFx0YXR0cmlidXRlcy5leHBpcmVzID0gZXhwaXJlcztcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIFdlJ3JlIHVzaW5nIFwiZXhwaXJlc1wiIGJlY2F1c2UgXCJtYXgtYWdlXCIgaXMgbm90IHN1cHBvcnRlZCBieSBJRVxuXHRcdFx0XHRhdHRyaWJ1dGVzLmV4cGlyZXMgPSBhdHRyaWJ1dGVzLmV4cGlyZXMgPyBhdHRyaWJ1dGVzLmV4cGlyZXMudG9VVENTdHJpbmcoKSA6ICcnO1xuXG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0cmVzdWx0ID0gSlNPTi5zdHJpbmdpZnkodmFsdWUpO1xuXHRcdFx0XHRcdGlmICgvXltcXHtcXFtdLy50ZXN0KHJlc3VsdCkpIHtcblx0XHRcdFx0XHRcdHZhbHVlID0gcmVzdWx0O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBjYXRjaCAoZSkge31cblxuXHRcdFx0XHRpZiAoIWNvbnZlcnRlci53cml0ZSkge1xuXHRcdFx0XHRcdHZhbHVlID0gZW5jb2RlVVJJQ29tcG9uZW50KFN0cmluZyh2YWx1ZSkpXG5cdFx0XHRcdFx0XHQucmVwbGFjZSgvJSgyM3wyNHwyNnwyQnwzQXwzQ3wzRXwzRHwyRnwzRnw0MHw1Qnw1RHw1RXw2MHw3Qnw3RHw3QykvZywgZGVjb2RlVVJJQ29tcG9uZW50KTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR2YWx1ZSA9IGNvbnZlcnRlci53cml0ZSh2YWx1ZSwga2V5KTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGtleSA9IGVuY29kZVVSSUNvbXBvbmVudChTdHJpbmcoa2V5KSk7XG5cdFx0XHRcdGtleSA9IGtleS5yZXBsYWNlKC8lKDIzfDI0fDI2fDJCfDVFfDYwfDdDKS9nLCBkZWNvZGVVUklDb21wb25lbnQpO1xuXHRcdFx0XHRrZXkgPSBrZXkucmVwbGFjZSgvW1xcKFxcKV0vZywgZXNjYXBlKTtcblxuXHRcdFx0XHR2YXIgc3RyaW5naWZpZWRBdHRyaWJ1dGVzID0gJyc7XG5cblx0XHRcdFx0Zm9yICh2YXIgYXR0cmlidXRlTmFtZSBpbiBhdHRyaWJ1dGVzKSB7XG5cdFx0XHRcdFx0aWYgKCFhdHRyaWJ1dGVzW2F0dHJpYnV0ZU5hbWVdKSB7XG5cdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0c3RyaW5naWZpZWRBdHRyaWJ1dGVzICs9ICc7ICcgKyBhdHRyaWJ1dGVOYW1lO1xuXHRcdFx0XHRcdGlmIChhdHRyaWJ1dGVzW2F0dHJpYnV0ZU5hbWVdID09PSB0cnVlKSB7XG5cdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0c3RyaW5naWZpZWRBdHRyaWJ1dGVzICs9ICc9JyArIGF0dHJpYnV0ZXNbYXR0cmlidXRlTmFtZV07XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIChkb2N1bWVudC5jb29raWUgPSBrZXkgKyAnPScgKyB2YWx1ZSArIHN0cmluZ2lmaWVkQXR0cmlidXRlcyk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIFJlYWRcblxuXHRcdFx0aWYgKCFrZXkpIHtcblx0XHRcdFx0cmVzdWx0ID0ge307XG5cdFx0XHR9XG5cblx0XHRcdC8vIFRvIHByZXZlbnQgdGhlIGZvciBsb29wIGluIHRoZSBmaXJzdCBwbGFjZSBhc3NpZ24gYW4gZW1wdHkgYXJyYXlcblx0XHRcdC8vIGluIGNhc2UgdGhlcmUgYXJlIG5vIGNvb2tpZXMgYXQgYWxsLiBBbHNvIHByZXZlbnRzIG9kZCByZXN1bHQgd2hlblxuXHRcdFx0Ly8gY2FsbGluZyBcImdldCgpXCJcblx0XHRcdHZhciBjb29raWVzID0gZG9jdW1lbnQuY29va2llID8gZG9jdW1lbnQuY29va2llLnNwbGl0KCc7ICcpIDogW107XG5cdFx0XHR2YXIgcmRlY29kZSA9IC8oJVswLTlBLVpdezJ9KSsvZztcblx0XHRcdHZhciBpID0gMDtcblxuXHRcdFx0Zm9yICg7IGkgPCBjb29raWVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdHZhciBwYXJ0cyA9IGNvb2tpZXNbaV0uc3BsaXQoJz0nKTtcblx0XHRcdFx0dmFyIGNvb2tpZSA9IHBhcnRzLnNsaWNlKDEpLmpvaW4oJz0nKTtcblxuXHRcdFx0XHRpZiAoIXRoaXMuanNvbiAmJiBjb29raWUuY2hhckF0KDApID09PSAnXCInKSB7XG5cdFx0XHRcdFx0Y29va2llID0gY29va2llLnNsaWNlKDEsIC0xKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0dmFyIG5hbWUgPSBwYXJ0c1swXS5yZXBsYWNlKHJkZWNvZGUsIGRlY29kZVVSSUNvbXBvbmVudCk7XG5cdFx0XHRcdFx0Y29va2llID0gY29udmVydGVyLnJlYWQgP1xuXHRcdFx0XHRcdFx0Y29udmVydGVyLnJlYWQoY29va2llLCBuYW1lKSA6IGNvbnZlcnRlcihjb29raWUsIG5hbWUpIHx8XG5cdFx0XHRcdFx0XHRjb29raWUucmVwbGFjZShyZGVjb2RlLCBkZWNvZGVVUklDb21wb25lbnQpO1xuXG5cdFx0XHRcdFx0aWYgKHRoaXMuanNvbikge1xuXHRcdFx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRcdFx0Y29va2llID0gSlNPTi5wYXJzZShjb29raWUpO1xuXHRcdFx0XHRcdFx0fSBjYXRjaCAoZSkge31cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRpZiAoa2V5ID09PSBuYW1lKSB7XG5cdFx0XHRcdFx0XHRyZXN1bHQgPSBjb29raWU7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRpZiAoIWtleSkge1xuXHRcdFx0XHRcdFx0cmVzdWx0W25hbWVdID0gY29va2llO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBjYXRjaCAoZSkge31cblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHR9XG5cblx0XHRhcGkuc2V0ID0gYXBpO1xuXHRcdGFwaS5nZXQgPSBmdW5jdGlvbiAoa2V5KSB7XG5cdFx0XHRyZXR1cm4gYXBpLmNhbGwoYXBpLCBrZXkpO1xuXHRcdH07XG5cdFx0YXBpLmdldEpTT04gPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXR1cm4gYXBpLmFwcGx5KHtcblx0XHRcdFx0anNvbjogdHJ1ZVxuXHRcdFx0fSwgW10uc2xpY2UuY2FsbChhcmd1bWVudHMpKTtcblx0XHR9O1xuXHRcdGFwaS5kZWZhdWx0cyA9IHt9O1xuXG5cdFx0YXBpLnJlbW92ZSA9IGZ1bmN0aW9uIChrZXksIGF0dHJpYnV0ZXMpIHtcblx0XHRcdGFwaShrZXksICcnLCBleHRlbmQoYXR0cmlidXRlcywge1xuXHRcdFx0XHRleHBpcmVzOiAtMVxuXHRcdFx0fSkpO1xuXHRcdH07XG5cblx0XHRhcGkud2l0aENvbnZlcnRlciA9IGluaXQ7XG5cblx0XHRyZXR1cm4gYXBpO1xuXHR9XG5cblx0cmV0dXJuIGluaXQoZnVuY3Rpb24gKCkge30pO1xufSkpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2pzLWNvb2tpZS9zcmMvanMuY29va2llLmpzIiwiLypcclxuICogQ29weXJpZ2h0IChjKSAyMDE2LTIwMTggTWFydGluIERvbmF0aCA8bWFydGluLmRvbmF0aEBzcXVpZGZ1bmsuY29tPlxyXG4gKlxyXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XHJcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvXHJcbiAqIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlXHJcbiAqIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vclxyXG4gKiBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xyXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxyXG4gKlxyXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxyXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cclxuICpcclxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxyXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcclxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTi1JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxyXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXHJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HXHJcbiAqIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1NcclxuICogSU4gVEhFIFNPRlRXQVJFLlxyXG4gKi9cclxuXHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogQ2xhc3NcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVwb3NpdG9yeSB7XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlbmRlciByZXBvc2l0b3J5IGluZm9ybWF0aW9uXHJcbiAgICpcclxuICAgKiBAY29uc3RydWN0b3JcclxuICAgKlxyXG4gICAqIEBwcm9wZXJ0eSB7SFRNTEVsZW1lbnR9IGVsXyAtIFJlcG9zaXRvcnkgaW5mb3JtYXRpb25cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7KHN0cmluZ3xIVE1MRWxlbWVudCl9IGVsIC0gU2VsZWN0b3Igb3IgSFRNTCBlbGVtZW50XHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoZWwpIHtcclxuICAgIGNvbnN0IHJlZiA9ICh0eXBlb2YgZWwgPT09IFwic3RyaW5nXCIpXHJcbiAgICAgID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbClcclxuICAgICAgOiBlbFxyXG4gICAgaWYgKCEocmVmIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKVxyXG4gICAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3JcclxuICAgIHRoaXMuZWxfID0gcmVmXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBJbml0aWFsaXplIHRoZSByZXBvc2l0b3J5XHJcbiAgICpcclxuICAgKiBAcGFyYW0ge0FycmF5PHN0cmluZz59IGZhY3RzIC0gRmFjdHMgdG8gYmUgcmVuZGVyZWRcclxuICAgKi9cclxuICBpbml0aWFsaXplKGZhY3RzKSB7XHJcbiAgICBpZiAoZmFjdHMubGVuZ3RoICYmIHRoaXMuZWxfLmNoaWxkcmVuLmxlbmd0aClcclxuICAgICAgdGhpcy5lbF8uY2hpbGRyZW5bdGhpcy5lbF8uY2hpbGRyZW4ubGVuZ3RoIC0gMV0uYXBwZW5kQ2hpbGQoXHJcbiAgICAgICAgPHVsIGNsYXNzPVwibWQtc291cmNlX19mYWN0c1wiPlxyXG4gICAgICAgICAge2ZhY3RzLm1hcChmYWN0ID0+IDxsaSBjbGFzcz1cIm1kLXNvdXJjZV9fZmFjdFwiPntmYWN0fTwvbGk+KX1cclxuICAgICAgICA8L3VsPlxyXG4gICAgICApXHJcblxyXG4gICAgLyogRmluaXNoIHJlbmRlcmluZyB3aXRoIGFuaW1hdGlvbiAqL1xyXG4gICAgdGhpcy5lbF8uZGF0YXNldC5tZFN0YXRlID0gXCJkb25lXCJcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Fzc2V0cy9qYXZhc2NyaXB0cy9jb21wb25lbnRzL01hdGVyaWFsL1NvdXJjZS9SZXBvc2l0b3J5LmpzeCIsIi8qXHJcbiAqIENvcHlyaWdodCAoYykgMjAxNi0yMDE4IE1hcnRpbiBEb25hdGggPG1hcnRpbi5kb25hdGhAc3F1aWRmdW5rLmNvbT5cclxuICpcclxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxyXG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0b1xyXG4gKiBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZVxyXG4gKiByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3JcclxuICogc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcclxuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcclxuICpcclxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cclxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcbiAqXHJcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcclxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXHJcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT04tSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcclxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxyXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lOR1xyXG4gKiBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTXHJcbiAqIElOIFRIRSBTT0ZUV0FSRS5cclxuICovXHJcblxyXG5pbXBvcnQgVG9nZ2xlIGZyb20gXCIuL1RhYnMvVG9nZ2xlXCJcclxuXHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogTW9kdWxlXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBUb2dnbGVcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXNzZXRzL2phdmFzY3JpcHRzL2NvbXBvbmVudHMvTWF0ZXJpYWwvVGFicy5qcyIsIi8qXHJcbiAqIENvcHlyaWdodCAoYykgMjAxNi0yMDE4IE1hcnRpbiBEb25hdGggPG1hcnRpbi5kb25hdGhAc3F1aWRmdW5rLmNvbT5cclxuICpcclxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxyXG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0b1xyXG4gKiBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZVxyXG4gKiByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3JcclxuICogc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcclxuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcclxuICpcclxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cclxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcbiAqXHJcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcclxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXHJcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT04tSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcclxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxyXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lOR1xyXG4gKiBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTXHJcbiAqIElOIFRIRSBTT0ZUV0FSRS5cclxuICovXHJcblxyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqIENsYXNzXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvZ2dsZSB7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRvZ2dsZSB0YWJzIHZpc2liaWxpdHkgZGVwZW5kaW5nIG9uIHBhZ2UgeS1vZmZzZXRcclxuICAgKlxyXG4gICAqIEBjb25zdHJ1Y3RvclxyXG4gICAqXHJcbiAgICogQHByb3BlcnR5IHtIVE1MRWxlbWVudH0gZWxfIC0gQ29udGVudCBjb250YWluZXJcclxuICAgKiBAcHJvcGVydHkge251bWJlcn0gb2Zmc2V0XyAtIFRvZ2dsZSBwYWdlLXkgb2Zmc2V0XHJcbiAgICogQHByb3BlcnR5IHtib29sZWFufSBhY3RpdmVfIC0gVGFicyB2aXNpYmlsaXR5XHJcbiAgICpcclxuICAgKiBAcGFyYW0geyhzdHJpbmd8SFRNTEVsZW1lbnQpfSBlbCAtIFNlbGVjdG9yIG9yIEhUTUwgZWxlbWVudFxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKGVsKSB7XHJcbiAgICBjb25zdCByZWYgPSAodHlwZW9mIGVsID09PSBcInN0cmluZ1wiKVxyXG4gICAgICA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZWwpXHJcbiAgICAgIDogZWxcclxuICAgIGlmICghKHJlZiBpbnN0YW5jZW9mIE5vZGUpKVxyXG4gICAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3JcclxuICAgIHRoaXMuZWxfID0gcmVmXHJcblxyXG4gICAgLyogSW5pdGlhbGl6ZSBvZmZzZXQgYW5kIHN0YXRlICovXHJcbiAgICB0aGlzLmFjdGl2ZV8gPSBmYWxzZVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVXBkYXRlIHZpc2liaWxpdHlcclxuICAgKi9cclxuICB1cGRhdGUoKSB7XHJcbiAgICBjb25zdCBhY3RpdmUgPSB3aW5kb3cucGFnZVlPZmZzZXQgPj1cclxuICAgICAgdGhpcy5lbF8uY2hpbGRyZW5bMF0ub2Zmc2V0VG9wICsgKDUgLSA0OCkgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBUT0RPOiBxdWljayBoYWNrIHRvIGVuYWJsZSBzYW1lIGhhbmRsaW5nIGZvciBoZXJvXHJcbiAgICBpZiAoYWN0aXZlICE9PSB0aGlzLmFjdGl2ZV8pXHJcbiAgICAgIHRoaXMuZWxfLmRhdGFzZXQubWRTdGF0ZSA9ICh0aGlzLmFjdGl2ZV8gPSBhY3RpdmUpID8gXCJoaWRkZW5cIiA6IFwiXCJcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlc2V0IHZpc2liaWxpdHlcclxuICAgKi9cclxuICByZXNldCgpIHtcclxuICAgIHRoaXMuZWxfLmRhdGFzZXQubWRTdGF0ZSA9IFwiXCJcclxuICAgIHRoaXMuYWN0aXZlXyA9IGZhbHNlXHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hc3NldHMvamF2YXNjcmlwdHMvY29tcG9uZW50cy9NYXRlcmlhbC9UYWJzL1RvZ2dsZS5qcyJdLCJzb3VyY2VSb290IjoiIn0=