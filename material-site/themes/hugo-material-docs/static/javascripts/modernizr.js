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
/******/ ({

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(8);

/***/ }),

/***/ 8:
/***/ (function(module, exports) {

;(function(window){
/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-checked-csstransforms3d-dataset-details-fetch-json-svg-target-addtest-setclasses !*/
!function(e,t,n){function r(e,t){return typeof e===t}function o(){var e,t,n,o,i,s,a;for(var l in C)if(C.hasOwnProperty(l)){if(e=[],t=C[l],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(o=r(t.fn,"function")?t.fn():t.fn,i=0;i<e.length;i++)s=e[i],a=s.split("."),1===a.length?Modernizr[a[0]]=o:(!Modernizr[a[0]]||Modernizr[a[0]]instanceof Boolean||(Modernizr[a[0]]=new Boolean(Modernizr[a[0]])),Modernizr[a[0]][a[1]]=o),b.push((o?"":"no-")+a.join("-"))}}function i(e){var t=T.className,n=Modernizr._config.classPrefix||"";if(x&&(t=t.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(r,"$1"+n+"js$2")}Modernizr._config.enableClasses&&(t+=" "+n+e.join(" "+n),x?T.className.baseVal=t:T.className=t)}function s(e,t){if("object"==typeof e)for(var n in e)w(e,n)&&s(n,e[n]);else{e=e.toLowerCase();var r=e.split("."),o=Modernizr[r[0]];if(2==r.length&&(o=o[r[1]]),"undefined"!=typeof o)return Modernizr;t="function"==typeof t?t():t,1==r.length?Modernizr[r[0]]=t:(!Modernizr[r[0]]||Modernizr[r[0]]instanceof Boolean||(Modernizr[r[0]]=new Boolean(Modernizr[r[0]])),Modernizr[r[0]][r[1]]=t),i([(t&&0!=t?"":"no-")+r.join("-")]),Modernizr._trigger(e,t)}return Modernizr}function a(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):x?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function l(){var e=t.body;return e||(e=a(x?"svg":"body"),e.fake=!0),e}function u(e,n,r,o){var i,s,u,f,c="modernizr",d=a("div"),p=l();if(parseInt(r,10))for(;r--;)u=a("div"),u.id=o?o[r]:c+(r+1),d.appendChild(u);return i=a("style"),i.type="text/css",i.id="s"+c,(p.fake?p:d).appendChild(i),p.appendChild(d),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(t.createTextNode(e)),d.id=c,p.fake&&(p.style.background="",p.style.overflow="hidden",f=T.style.overflow,T.style.overflow="hidden",T.appendChild(p)),s=n(d,e),p.fake?(p.parentNode.removeChild(p),T.style.overflow=f,T.offsetHeight):d.parentNode.removeChild(d),!!s}function f(e,t){return!!~(""+e).indexOf(t)}function c(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function d(t,n,r){var o;if("getComputedStyle"in e){o=getComputedStyle.call(e,t,n);var i=e.console;if(null!==o)r&&(o=o.getPropertyValue(r));else if(i){var s=i.error?"error":"log";i[s].call(i,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}}else o=!n&&t.currentStyle&&t.currentStyle[r];return o}function p(t,r){var o=t.length;if("CSS"in e&&"supports"in e.CSS){for(;o--;)if(e.CSS.supports(c(t[o]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var i=[];o--;)i.push("("+c(t[o])+":"+r+")");return i=i.join(" or "),u("@supports ("+i+") { #modernizr { position: absolute; } }",function(e){return"absolute"==d(e,null,"position")})}return n}function m(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function h(e,t,o,i){function s(){u&&(delete E.style,delete E.modElem)}if(i=r(i,"undefined")?!1:i,!r(o,"undefined")){var l=p(e,o);if(!r(l,"undefined"))return l}for(var u,c,d,h,g,y=["modernizr","tspan","samp"];!E.style&&y.length;)u=!0,E.modElem=a(y.shift()),E.style=E.modElem.style;for(d=e.length,c=0;d>c;c++)if(h=e[c],g=E.style[h],f(h,"-")&&(h=m(h)),E.style[h]!==n){if(i||r(o,"undefined"))return s(),"pfx"==t?h:!0;try{E.style[h]=o}catch(v){}if(E.style[h]!=g)return s(),"pfx"==t?h:!0}return s(),!1}function g(e,t){return function(){return e.apply(t,arguments)}}function y(e,t,n){var o;for(var i in e)if(e[i]in t)return n===!1?e[i]:(o=t[e[i]],r(o,"function")?g(o,n||t):o);return!1}function v(e,t,n,o,i){var s=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+k.join(s+" ")+s).split(" ");return r(t,"string")||r(t,"undefined")?h(a,t,o,i):(a=(e+" "+A.join(s+" ")+s).split(" "),y(a,t,n))}function S(e,t,r){return v(e,n,n,t,r)}var C=[],_={_version:"3.6.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){C.push({name:e,fn:t,options:n})},addAsyncTest:function(e){C.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=_,Modernizr=new Modernizr;var w,b=[],T=t.documentElement,x="svg"===T.nodeName.toLowerCase();!function(){var e={}.hasOwnProperty;w=r(e,"undefined")||r(e.call,"undefined")?function(e,t){return t in e&&r(e.constructor.prototype[t],"undefined")}:function(t,n){return e.call(t,n)}}(),_._l={},_.on=function(e,t){this._l[e]||(this._l[e]=[]),this._l[e].push(t),Modernizr.hasOwnProperty(e)&&setTimeout(function(){Modernizr._trigger(e,Modernizr[e])},0)},_._trigger=function(e,t){if(this._l[e]){var n=this._l[e];setTimeout(function(){var e,r;for(e=0;e<n.length;e++)(r=n[e])(t)},0),delete this._l[e]}},Modernizr._q.push(function(){_.addTest=s}),Modernizr.addTest("json","JSON"in e&&"parse"in JSON&&"stringify"in JSON),Modernizr.addTest("svg",!!t.createElementNS&&!!t.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect);var z=_.testStyles=u;Modernizr.addTest("checked",function(){return z("#modernizr {position:absolute} #modernizr input {margin-left:10px} #modernizr :checked {margin-left:20px;display:block}",function(e){var t=a("input");return t.setAttribute("type","checkbox"),t.setAttribute("checked","checked"),e.appendChild(t),20===t.offsetLeft})}),Modernizr.addTest("target",function(){var t=e.document;if(!("querySelectorAll"in t))return!1;try{return t.querySelectorAll(":target"),!0}catch(n){return!1}}),Modernizr.addTest("dataset",function(){var e=a("div");return e.setAttribute("data-a-b","c"),!(!e.dataset||"c"!==e.dataset.aB)}),Modernizr.addTest("details",function(){var e,t=a("details");return"open"in t?(z("#modernizr details{display:block}",function(n){n.appendChild(t),t.innerHTML="<summary>a</summary>b",e=t.offsetHeight,t.open=!0,e=e!=t.offsetHeight}),e):!1}),Modernizr.addTest("fetch","fetch"in e);var N="Moz O ms Webkit",k=_._config.usePrefixes?N.split(" "):[];_._cssomPrefixes=k;var P={elem:a("modernizr")};Modernizr._q.push(function(){delete P.elem});var E={style:P.elem.style};Modernizr._q.unshift(function(){delete E.style});var A=_._config.usePrefixes?N.toLowerCase().split(" "):[];_._domPrefixes=A,_.testAllProps=v,_.testAllProps=S;var j="CSS"in e&&"supports"in e.CSS,O="supportsCSS"in e;Modernizr.addTest("supports",j||O),Modernizr.addTest("csstransforms3d",function(){return!!S("perspective","1px",!0)}),o(),i(b),delete _.addTest,delete _.addAsyncTest;for(var q=0;q<Modernizr._q.length;q++)Modernizr._q[q]();e.Modernizr=Modernizr}(window,document);
module.exports = window.Modernizr;
})(window);

/***/ })

/******/ })));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYjhhZjY2N2YiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qYXZhc2NyaXB0cy9tb2Rlcm5penIuanMiLCJ3ZWJwYWNrOi8vLy4vLm1vZGVybml6ci1hdXRvcmMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7OztBQ3ZDQSx1Qjs7Ozs7OztBQ3RCQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLGlCQUFpQixnQkFBZ0Isb0JBQW9CLGFBQWEsa0JBQWtCLHVDQUF1QyxxSEFBcUgsMkJBQTJCLCtDQUErQyx5Q0FBeUMsV0FBVyx5TkFBeU4sY0FBYyxzREFBc0QscURBQXFELDZDQUE2Qyw2QkFBNkIsZ0dBQWdHLGdCQUFnQix1REFBdUQsS0FBSyxrQkFBa0IscUNBQXFDLG1FQUFtRSxxUEFBcVAsaUJBQWlCLGFBQWEsZ0xBQWdMLGFBQWEsYUFBYSw0Q0FBNEMsb0JBQW9CLDJDQUEyQyx1QkFBdUIsSUFBSSxpREFBaUQsb1pBQW9aLGdCQUFnQiwyQkFBMkIsY0FBYywwQ0FBMEMsMEJBQTBCLHlCQUF5QixrQkFBa0IsTUFBTSwyQkFBMkIsK0JBQStCLGdCQUFnQix5Q0FBeUMsV0FBVyw0QkFBNEIsb0dBQW9HLDZDQUE2QyxTQUFTLGdCQUFnQixlQUFlLGtDQUFrQyxLQUFLLElBQUksdUNBQXVDLFNBQVMsMEJBQTBCLGFBQWEsSUFBSSwrQkFBK0IsOENBQThDLGFBQWEsb0JBQW9CLEVBQUUsRUFBRSxjQUFjLHVDQUF1QyxFQUFFLFNBQVMsY0FBYyxvREFBb0QseUJBQXlCLG1CQUFtQixvQkFBb0IsYUFBYSxxQ0FBcUMsOENBQThDLGFBQWEsOEJBQThCLGlEQUFpRCxtQkFBbUIscURBQXFELG1CQUFtQixJQUFJLDhEQUE4RCxnREFBZ0QsSUFBSSxhQUFhLFVBQVUsMENBQTBDLGNBQWMsZ0JBQWdCLGtCQUFrQiw2QkFBNkIsa0JBQWtCLE1BQU0sc0ZBQXNGLFNBQVMsc0JBQXNCLGdGQUFnRixrR0FBa0csa0JBQWtCLG9CQUFvQixZQUFZLDBCQUEwQixnRUFBZ0Usd0JBQXdCLFdBQVcsc0JBQXNCLFFBQVEsSUFBSSx5QkFBeUIsUUFBUSxzQkFBc0IsRUFBRSwwQkFBMEIsUUFBUSxlQUFlLEdBQUcsd0JBQXdCLDhDQUE4QyxrRUFBa0UsWUFBWSxRQUFRLGdCQUFnQix3REFBd0QseURBQXlELGVBQWUsb0JBQW9CLFVBQVUsb0JBQW9CLGtHQUFrRyxtQ0FBbUMsSUFBSSwwQkFBMEIsZUFBZSxpQkFBaUIsc0JBQXNCLFFBQVEsUUFBUSxXQUFXLGdCQUFnQix1QkFBdUIsOEJBQThCLFlBQVksK0xBQStMLHFCQUFxQix1Q0FBdUMsc0JBQXNCLGtCQUFrQixtQkFBbUIsaUJBQWlCLHNCQUFzQixpQkFBaUIsY0FBYyxjQUFjLGlCQUFpQixnSEFBZ0gsRUFBRSx3Q0FBd0MsaUJBQWlCLHNDQUFzQyxJQUFJLHdDQUF3QyxTQUFTLFVBQVUseUNBQXlDLGVBQWUsd0VBQXdFLHlDQUF5QyxxQkFBcUIsd0NBQXdDLGNBQWMsY0FBYyxvR0FBb0csUUFBUSx5Q0FBeUMsZ0VBQWdFLG1CQUFtQixPQUFPLHFCQUFxQiw2QkFBNkIsY0FBYyxFQUFFLE9BQU8sb0JBQW9CLGdDQUFnQyxlQUFlLEVBQUUsMERBQTBELG1EQUFtRCx3REFBd0Qsa0ZBQWtGLGtDQUFrQyxrREFBa0QsWUFBWSxzQkFBc0Isc0JBQXNCLHNCQUFzQjtBQUNqaE47QUFDQSxDQUFDLFUiLCJmaWxlIjoiamF2YXNjcmlwdHMvbW9kZXJuaXpyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgYjhhZjY2N2YiLCIvKlxyXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYtMjAxOCBNYXJ0aW4gRG9uYXRoIDxtYXJ0aW4uZG9uYXRoQHNxdWlkZnVuay5jb20+XHJcbiAqXHJcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcclxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG9cclxuICogZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGVcclxuICogcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yXHJcbiAqIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXHJcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XHJcbiAqXHJcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXHJcbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxyXG4gKlxyXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXHJcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxyXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OLUlORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXHJcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcclxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkdcclxuICogRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HU1xyXG4gKiBJTiBUSEUgU09GVFdBUkUuXHJcbiAqL1xyXG5cclxuaW1wb3J0IFwiLi4vLi4vLi4vLm1vZGVybml6ci1hdXRvcmNcIlxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXNzZXRzL2phdmFzY3JpcHRzL21vZGVybml6ci5qcyIsIjsoZnVuY3Rpb24od2luZG93KXtcbi8qISBtb2Rlcm5penIgMy42LjAgKEN1c3RvbSBCdWlsZCkgfCBNSVQgKlxuICogaHR0cHM6Ly9tb2Rlcm5penIuY29tL2Rvd25sb2FkLz8tY2hlY2tlZC1jc3N0cmFuc2Zvcm1zM2QtZGF0YXNldC1kZXRhaWxzLWZldGNoLWpzb24tc3ZnLXRhcmdldC1hZGR0ZXN0LXNldGNsYXNzZXMgISovXG4hZnVuY3Rpb24oZSx0LG4pe2Z1bmN0aW9uIHIoZSx0KXtyZXR1cm4gdHlwZW9mIGU9PT10fWZ1bmN0aW9uIG8oKXt2YXIgZSx0LG4sbyxpLHMsYTtmb3IodmFyIGwgaW4gQylpZihDLmhhc093blByb3BlcnR5KGwpKXtpZihlPVtdLHQ9Q1tsXSx0Lm5hbWUmJihlLnB1c2godC5uYW1lLnRvTG93ZXJDYXNlKCkpLHQub3B0aW9ucyYmdC5vcHRpb25zLmFsaWFzZXMmJnQub3B0aW9ucy5hbGlhc2VzLmxlbmd0aCkpZm9yKG49MDtuPHQub3B0aW9ucy5hbGlhc2VzLmxlbmd0aDtuKyspZS5wdXNoKHQub3B0aW9ucy5hbGlhc2VzW25dLnRvTG93ZXJDYXNlKCkpO2ZvcihvPXIodC5mbixcImZ1bmN0aW9uXCIpP3QuZm4oKTp0LmZuLGk9MDtpPGUubGVuZ3RoO2krKylzPWVbaV0sYT1zLnNwbGl0KFwiLlwiKSwxPT09YS5sZW5ndGg/TW9kZXJuaXpyW2FbMF1dPW86KCFNb2Rlcm5penJbYVswXV18fE1vZGVybml6clthWzBdXWluc3RhbmNlb2YgQm9vbGVhbnx8KE1vZGVybml6clthWzBdXT1uZXcgQm9vbGVhbihNb2Rlcm5penJbYVswXV0pKSxNb2Rlcm5penJbYVswXV1bYVsxXV09byksYi5wdXNoKChvP1wiXCI6XCJuby1cIikrYS5qb2luKFwiLVwiKSl9fWZ1bmN0aW9uIGkoZSl7dmFyIHQ9VC5jbGFzc05hbWUsbj1Nb2Rlcm5penIuX2NvbmZpZy5jbGFzc1ByZWZpeHx8XCJcIjtpZih4JiYodD10LmJhc2VWYWwpLE1vZGVybml6ci5fY29uZmlnLmVuYWJsZUpTQ2xhc3Mpe3ZhciByPW5ldyBSZWdFeHAoXCIoXnxcXFxccylcIituK1wibm8tanMoXFxcXHN8JClcIik7dD10LnJlcGxhY2UocixcIiQxXCIrbitcImpzJDJcIil9TW9kZXJuaXpyLl9jb25maWcuZW5hYmxlQ2xhc3NlcyYmKHQrPVwiIFwiK24rZS5qb2luKFwiIFwiK24pLHg/VC5jbGFzc05hbWUuYmFzZVZhbD10OlQuY2xhc3NOYW1lPXQpfWZ1bmN0aW9uIHMoZSx0KXtpZihcIm9iamVjdFwiPT10eXBlb2YgZSlmb3IodmFyIG4gaW4gZSl3KGUsbikmJnMobixlW25dKTtlbHNle2U9ZS50b0xvd2VyQ2FzZSgpO3ZhciByPWUuc3BsaXQoXCIuXCIpLG89TW9kZXJuaXpyW3JbMF1dO2lmKDI9PXIubGVuZ3RoJiYobz1vW3JbMV1dKSxcInVuZGVmaW5lZFwiIT10eXBlb2YgbylyZXR1cm4gTW9kZXJuaXpyO3Q9XCJmdW5jdGlvblwiPT10eXBlb2YgdD90KCk6dCwxPT1yLmxlbmd0aD9Nb2Rlcm5penJbclswXV09dDooIU1vZGVybml6cltyWzBdXXx8TW9kZXJuaXpyW3JbMF1daW5zdGFuY2VvZiBCb29sZWFufHwoTW9kZXJuaXpyW3JbMF1dPW5ldyBCb29sZWFuKE1vZGVybml6cltyWzBdXSkpLE1vZGVybml6cltyWzBdXVtyWzFdXT10KSxpKFsodCYmMCE9dD9cIlwiOlwibm8tXCIpK3Iuam9pbihcIi1cIildKSxNb2Rlcm5penIuX3RyaWdnZXIoZSx0KX1yZXR1cm4gTW9kZXJuaXpyfWZ1bmN0aW9uIGEoKXtyZXR1cm5cImZ1bmN0aW9uXCIhPXR5cGVvZiB0LmNyZWF0ZUVsZW1lbnQ/dC5jcmVhdGVFbGVtZW50KGFyZ3VtZW50c1swXSk6eD90LmNyZWF0ZUVsZW1lbnROUy5jYWxsKHQsXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLGFyZ3VtZW50c1swXSk6dC5jcmVhdGVFbGVtZW50LmFwcGx5KHQsYXJndW1lbnRzKX1mdW5jdGlvbiBsKCl7dmFyIGU9dC5ib2R5O3JldHVybiBlfHwoZT1hKHg/XCJzdmdcIjpcImJvZHlcIiksZS5mYWtlPSEwKSxlfWZ1bmN0aW9uIHUoZSxuLHIsbyl7dmFyIGkscyx1LGYsYz1cIm1vZGVybml6clwiLGQ9YShcImRpdlwiKSxwPWwoKTtpZihwYXJzZUludChyLDEwKSlmb3IoO3ItLTspdT1hKFwiZGl2XCIpLHUuaWQ9bz9vW3JdOmMrKHIrMSksZC5hcHBlbmRDaGlsZCh1KTtyZXR1cm4gaT1hKFwic3R5bGVcIiksaS50eXBlPVwidGV4dC9jc3NcIixpLmlkPVwic1wiK2MsKHAuZmFrZT9wOmQpLmFwcGVuZENoaWxkKGkpLHAuYXBwZW5kQ2hpbGQoZCksaS5zdHlsZVNoZWV0P2kuc3R5bGVTaGVldC5jc3NUZXh0PWU6aS5hcHBlbmRDaGlsZCh0LmNyZWF0ZVRleHROb2RlKGUpKSxkLmlkPWMscC5mYWtlJiYocC5zdHlsZS5iYWNrZ3JvdW5kPVwiXCIscC5zdHlsZS5vdmVyZmxvdz1cImhpZGRlblwiLGY9VC5zdHlsZS5vdmVyZmxvdyxULnN0eWxlLm92ZXJmbG93PVwiaGlkZGVuXCIsVC5hcHBlbmRDaGlsZChwKSkscz1uKGQsZSkscC5mYWtlPyhwLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQocCksVC5zdHlsZS5vdmVyZmxvdz1mLFQub2Zmc2V0SGVpZ2h0KTpkLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZCksISFzfWZ1bmN0aW9uIGYoZSx0KXtyZXR1cm4hIX4oXCJcIitlKS5pbmRleE9mKHQpfWZ1bmN0aW9uIGMoZSl7cmV0dXJuIGUucmVwbGFjZSgvKFtBLVpdKS9nLGZ1bmN0aW9uKGUsdCl7cmV0dXJuXCItXCIrdC50b0xvd2VyQ2FzZSgpfSkucmVwbGFjZSgvXm1zLS8sXCItbXMtXCIpfWZ1bmN0aW9uIGQodCxuLHIpe3ZhciBvO2lmKFwiZ2V0Q29tcHV0ZWRTdHlsZVwiaW4gZSl7bz1nZXRDb21wdXRlZFN0eWxlLmNhbGwoZSx0LG4pO3ZhciBpPWUuY29uc29sZTtpZihudWxsIT09bylyJiYobz1vLmdldFByb3BlcnR5VmFsdWUocikpO2Vsc2UgaWYoaSl7dmFyIHM9aS5lcnJvcj9cImVycm9yXCI6XCJsb2dcIjtpW3NdLmNhbGwoaSxcImdldENvbXB1dGVkU3R5bGUgcmV0dXJuaW5nIG51bGwsIGl0cyBwb3NzaWJsZSBtb2Rlcm5penIgdGVzdCByZXN1bHRzIGFyZSBpbmFjY3VyYXRlXCIpfX1lbHNlIG89IW4mJnQuY3VycmVudFN0eWxlJiZ0LmN1cnJlbnRTdHlsZVtyXTtyZXR1cm4gb31mdW5jdGlvbiBwKHQscil7dmFyIG89dC5sZW5ndGg7aWYoXCJDU1NcImluIGUmJlwic3VwcG9ydHNcImluIGUuQ1NTKXtmb3IoO28tLTspaWYoZS5DU1Muc3VwcG9ydHMoYyh0W29dKSxyKSlyZXR1cm4hMDtyZXR1cm4hMX1pZihcIkNTU1N1cHBvcnRzUnVsZVwiaW4gZSl7Zm9yKHZhciBpPVtdO28tLTspaS5wdXNoKFwiKFwiK2ModFtvXSkrXCI6XCIrcitcIilcIik7cmV0dXJuIGk9aS5qb2luKFwiIG9yIFwiKSx1KFwiQHN1cHBvcnRzIChcIitpK1wiKSB7ICNtb2Rlcm5penIgeyBwb3NpdGlvbjogYWJzb2x1dGU7IH0gfVwiLGZ1bmN0aW9uKGUpe3JldHVyblwiYWJzb2x1dGVcIj09ZChlLG51bGwsXCJwb3NpdGlvblwiKX0pfXJldHVybiBufWZ1bmN0aW9uIG0oZSl7cmV0dXJuIGUucmVwbGFjZSgvKFthLXpdKS0oW2Etel0pL2csZnVuY3Rpb24oZSx0LG4pe3JldHVybiB0K24udG9VcHBlckNhc2UoKX0pLnJlcGxhY2UoL14tLyxcIlwiKX1mdW5jdGlvbiBoKGUsdCxvLGkpe2Z1bmN0aW9uIHMoKXt1JiYoZGVsZXRlIEUuc3R5bGUsZGVsZXRlIEUubW9kRWxlbSl9aWYoaT1yKGksXCJ1bmRlZmluZWRcIik/ITE6aSwhcihvLFwidW5kZWZpbmVkXCIpKXt2YXIgbD1wKGUsbyk7aWYoIXIobCxcInVuZGVmaW5lZFwiKSlyZXR1cm4gbH1mb3IodmFyIHUsYyxkLGgsZyx5PVtcIm1vZGVybml6clwiLFwidHNwYW5cIixcInNhbXBcIl07IUUuc3R5bGUmJnkubGVuZ3RoOyl1PSEwLEUubW9kRWxlbT1hKHkuc2hpZnQoKSksRS5zdHlsZT1FLm1vZEVsZW0uc3R5bGU7Zm9yKGQ9ZS5sZW5ndGgsYz0wO2Q+YztjKyspaWYoaD1lW2NdLGc9RS5zdHlsZVtoXSxmKGgsXCItXCIpJiYoaD1tKGgpKSxFLnN0eWxlW2hdIT09bil7aWYoaXx8cihvLFwidW5kZWZpbmVkXCIpKXJldHVybiBzKCksXCJwZnhcIj09dD9oOiEwO3RyeXtFLnN0eWxlW2hdPW99Y2F0Y2godil7fWlmKEUuc3R5bGVbaF0hPWcpcmV0dXJuIHMoKSxcInBmeFwiPT10P2g6ITB9cmV0dXJuIHMoKSwhMX1mdW5jdGlvbiBnKGUsdCl7cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIGUuYXBwbHkodCxhcmd1bWVudHMpfX1mdW5jdGlvbiB5KGUsdCxuKXt2YXIgbztmb3IodmFyIGkgaW4gZSlpZihlW2ldaW4gdClyZXR1cm4gbj09PSExP2VbaV06KG89dFtlW2ldXSxyKG8sXCJmdW5jdGlvblwiKT9nKG8sbnx8dCk6byk7cmV0dXJuITF9ZnVuY3Rpb24gdihlLHQsbixvLGkpe3ZhciBzPWUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkrZS5zbGljZSgxKSxhPShlK1wiIFwiK2suam9pbihzK1wiIFwiKStzKS5zcGxpdChcIiBcIik7cmV0dXJuIHIodCxcInN0cmluZ1wiKXx8cih0LFwidW5kZWZpbmVkXCIpP2goYSx0LG8saSk6KGE9KGUrXCIgXCIrQS5qb2luKHMrXCIgXCIpK3MpLnNwbGl0KFwiIFwiKSx5KGEsdCxuKSl9ZnVuY3Rpb24gUyhlLHQscil7cmV0dXJuIHYoZSxuLG4sdCxyKX12YXIgQz1bXSxfPXtfdmVyc2lvbjpcIjMuNi4wXCIsX2NvbmZpZzp7Y2xhc3NQcmVmaXg6XCJcIixlbmFibGVDbGFzc2VzOiEwLGVuYWJsZUpTQ2xhc3M6ITAsdXNlUHJlZml4ZXM6ITB9LF9xOltdLG9uOmZ1bmN0aW9uKGUsdCl7dmFyIG49dGhpcztzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7dChuW2VdKX0sMCl9LGFkZFRlc3Q6ZnVuY3Rpb24oZSx0LG4pe0MucHVzaCh7bmFtZTplLGZuOnQsb3B0aW9uczpufSl9LGFkZEFzeW5jVGVzdDpmdW5jdGlvbihlKXtDLnB1c2goe25hbWU6bnVsbCxmbjplfSl9fSxNb2Rlcm5penI9ZnVuY3Rpb24oKXt9O01vZGVybml6ci5wcm90b3R5cGU9XyxNb2Rlcm5penI9bmV3IE1vZGVybml6cjt2YXIgdyxiPVtdLFQ9dC5kb2N1bWVudEVsZW1lbnQseD1cInN2Z1wiPT09VC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpOyFmdW5jdGlvbigpe3ZhciBlPXt9Lmhhc093blByb3BlcnR5O3c9cihlLFwidW5kZWZpbmVkXCIpfHxyKGUuY2FsbCxcInVuZGVmaW5lZFwiKT9mdW5jdGlvbihlLHQpe3JldHVybiB0IGluIGUmJnIoZS5jb25zdHJ1Y3Rvci5wcm90b3R5cGVbdF0sXCJ1bmRlZmluZWRcIil9OmZ1bmN0aW9uKHQsbil7cmV0dXJuIGUuY2FsbCh0LG4pfX0oKSxfLl9sPXt9LF8ub249ZnVuY3Rpb24oZSx0KXt0aGlzLl9sW2VdfHwodGhpcy5fbFtlXT1bXSksdGhpcy5fbFtlXS5wdXNoKHQpLE1vZGVybml6ci5oYXNPd25Qcm9wZXJ0eShlKSYmc2V0VGltZW91dChmdW5jdGlvbigpe01vZGVybml6ci5fdHJpZ2dlcihlLE1vZGVybml6cltlXSl9LDApfSxfLl90cmlnZ2VyPWZ1bmN0aW9uKGUsdCl7aWYodGhpcy5fbFtlXSl7dmFyIG49dGhpcy5fbFtlXTtzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7dmFyIGUscjtmb3IoZT0wO2U8bi5sZW5ndGg7ZSsrKShyPW5bZV0pKHQpfSwwKSxkZWxldGUgdGhpcy5fbFtlXX19LE1vZGVybml6ci5fcS5wdXNoKGZ1bmN0aW9uKCl7Xy5hZGRUZXN0PXN9KSxNb2Rlcm5penIuYWRkVGVzdChcImpzb25cIixcIkpTT05cImluIGUmJlwicGFyc2VcImluIEpTT04mJlwic3RyaW5naWZ5XCJpbiBKU09OKSxNb2Rlcm5penIuYWRkVGVzdChcInN2Z1wiLCEhdC5jcmVhdGVFbGVtZW50TlMmJiEhdC5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLFwic3ZnXCIpLmNyZWF0ZVNWR1JlY3QpO3ZhciB6PV8udGVzdFN0eWxlcz11O01vZGVybml6ci5hZGRUZXN0KFwiY2hlY2tlZFwiLGZ1bmN0aW9uKCl7cmV0dXJuIHooXCIjbW9kZXJuaXpyIHtwb3NpdGlvbjphYnNvbHV0ZX0gI21vZGVybml6ciBpbnB1dCB7bWFyZ2luLWxlZnQ6MTBweH0gI21vZGVybml6ciA6Y2hlY2tlZCB7bWFyZ2luLWxlZnQ6MjBweDtkaXNwbGF5OmJsb2NrfVwiLGZ1bmN0aW9uKGUpe3ZhciB0PWEoXCJpbnB1dFwiKTtyZXR1cm4gdC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsXCJjaGVja2JveFwiKSx0LnNldEF0dHJpYnV0ZShcImNoZWNrZWRcIixcImNoZWNrZWRcIiksZS5hcHBlbmRDaGlsZCh0KSwyMD09PXQub2Zmc2V0TGVmdH0pfSksTW9kZXJuaXpyLmFkZFRlc3QoXCJ0YXJnZXRcIixmdW5jdGlvbigpe3ZhciB0PWUuZG9jdW1lbnQ7aWYoIShcInF1ZXJ5U2VsZWN0b3JBbGxcImluIHQpKXJldHVybiExO3RyeXtyZXR1cm4gdC5xdWVyeVNlbGVjdG9yQWxsKFwiOnRhcmdldFwiKSwhMH1jYXRjaChuKXtyZXR1cm4hMX19KSxNb2Rlcm5penIuYWRkVGVzdChcImRhdGFzZXRcIixmdW5jdGlvbigpe3ZhciBlPWEoXCJkaXZcIik7cmV0dXJuIGUuc2V0QXR0cmlidXRlKFwiZGF0YS1hLWJcIixcImNcIiksISghZS5kYXRhc2V0fHxcImNcIiE9PWUuZGF0YXNldC5hQil9KSxNb2Rlcm5penIuYWRkVGVzdChcImRldGFpbHNcIixmdW5jdGlvbigpe3ZhciBlLHQ9YShcImRldGFpbHNcIik7cmV0dXJuXCJvcGVuXCJpbiB0Pyh6KFwiI21vZGVybml6ciBkZXRhaWxze2Rpc3BsYXk6YmxvY2t9XCIsZnVuY3Rpb24obil7bi5hcHBlbmRDaGlsZCh0KSx0LmlubmVySFRNTD1cIjxzdW1tYXJ5PmE8L3N1bW1hcnk+YlwiLGU9dC5vZmZzZXRIZWlnaHQsdC5vcGVuPSEwLGU9ZSE9dC5vZmZzZXRIZWlnaHR9KSxlKTohMX0pLE1vZGVybml6ci5hZGRUZXN0KFwiZmV0Y2hcIixcImZldGNoXCJpbiBlKTt2YXIgTj1cIk1veiBPIG1zIFdlYmtpdFwiLGs9Xy5fY29uZmlnLnVzZVByZWZpeGVzP04uc3BsaXQoXCIgXCIpOltdO18uX2Nzc29tUHJlZml4ZXM9azt2YXIgUD17ZWxlbTphKFwibW9kZXJuaXpyXCIpfTtNb2Rlcm5penIuX3EucHVzaChmdW5jdGlvbigpe2RlbGV0ZSBQLmVsZW19KTt2YXIgRT17c3R5bGU6UC5lbGVtLnN0eWxlfTtNb2Rlcm5penIuX3EudW5zaGlmdChmdW5jdGlvbigpe2RlbGV0ZSBFLnN0eWxlfSk7dmFyIEE9Xy5fY29uZmlnLnVzZVByZWZpeGVzP04udG9Mb3dlckNhc2UoKS5zcGxpdChcIiBcIik6W107Xy5fZG9tUHJlZml4ZXM9QSxfLnRlc3RBbGxQcm9wcz12LF8udGVzdEFsbFByb3BzPVM7dmFyIGo9XCJDU1NcImluIGUmJlwic3VwcG9ydHNcImluIGUuQ1NTLE89XCJzdXBwb3J0c0NTU1wiaW4gZTtNb2Rlcm5penIuYWRkVGVzdChcInN1cHBvcnRzXCIsanx8TyksTW9kZXJuaXpyLmFkZFRlc3QoXCJjc3N0cmFuc2Zvcm1zM2RcIixmdW5jdGlvbigpe3JldHVybiEhUyhcInBlcnNwZWN0aXZlXCIsXCIxcHhcIiwhMCl9KSxvKCksaShiKSxkZWxldGUgXy5hZGRUZXN0LGRlbGV0ZSBfLmFkZEFzeW5jVGVzdDtmb3IodmFyIHE9MDtxPE1vZGVybml6ci5fcS5sZW5ndGg7cSsrKU1vZGVybml6ci5fcVtxXSgpO2UuTW9kZXJuaXpyPU1vZGVybml6cn0od2luZG93LGRvY3VtZW50KTtcbm1vZHVsZS5leHBvcnRzID0gd2luZG93Lk1vZGVybml6cjtcbn0pKHdpbmRvdyk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi8ubW9kZXJuaXpyLWF1dG9yY1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiXSwic291cmNlUm9vdCI6IiJ9