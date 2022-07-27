/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + ({}[chunkId]||chunkId) + "." + {"4":"7210a38fee63d7c09d82"}[chunkId] + ".js"
/******/ 	}
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var head = document.getElementsByTagName('head')[0];
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							var error = new Error('Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')');
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 84);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(17);

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(6);

var assertThisInitialized = __webpack_require__(32);

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var getPrototypeOf = __webpack_require__(0);

var setPrototypeOf = __webpack_require__(17);

var isNativeFunction = __webpack_require__(33);

var construct = __webpack_require__(34);

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  module.exports = _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return construct(Class, arguments, getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return setPrototypeOf(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

module.exports = _wrapNativeSuper;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(20);

var iterableToArray = __webpack_require__(21);

var unsupportedIterableToArray = __webpack_require__(22);

var nonIterableSpread = __webpack_require__(23);

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*Copyright (c) 2019 Jason Zissman
Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

(function () {
	(function (root, factory) {
		if ( true && module.exports) {
			// CommonJS
			return module.exports = factory();
		} else if (true) {
			// AMD
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
				return (root.TimeMe = factory());
			}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {}
	})(this, function () {

		var TimeMe = {

			startStopTimes: {},
			idleTimeoutMs: 30 * 1000,
			currentIdleTimeMs: 0,
			checkStateRateMs: 250,
			active: false, // state if we are actively recording time
			idle: false, // state if user on page but not interacting
			currentPageName: "default-page-name",
			timeElapsedCallbacks: [],
			userLeftCallbacks: [],
			userReturnCallbacks: [],

			trackTimeOnElement: function (elementId) {
				var element = document.getElementById(elementId);
				if (element) {
					element.addEventListener("mouseover", function () {
						TimeMe.startTimer(elementId);
					});
					element.addEventListener("mousemove", function () {
						TimeMe.startTimer(elementId);
					});					
					element.addEventListener("mouseleave", function () {
						TimeMe.stopTimer(elementId);
					});
					element.addEventListener("keypress", function () {
						TimeMe.startTimer(elementId);
					});
					element.addEventListener("focus", function () {
						TimeMe.startTimer(elementId);
					});
				}
			},

			getTimeOnElementInSeconds: function (elementId) {
				var time = TimeMe.getTimeOnPageInSeconds(elementId);
				if (time) {
					return time;
				} else {
					return 0;
				}
			},

			// startTime is optional. If provided, must be of type Date(). By providing
			// startTime, you are overriding the internal timing mechanism and manually
			// indicating the start time.
			startTimer: function (pageName, startTime) {
				if (!pageName) {
					pageName = TimeMe.currentPageName;
				}

				if (TimeMe.startStopTimes[pageName] === undefined) {
					TimeMe.startStopTimes[pageName] = [];
				} else {
					var arrayOfTimes = TimeMe.startStopTimes[pageName];
					var latestStartStopEntry = arrayOfTimes[arrayOfTimes.length - 1];
					if (latestStartStopEntry !== undefined && latestStartStopEntry.stopTime === undefined) {
						// Can't start new timer until previous finishes.
						return;
					}
				}
				TimeMe.startStopTimes[pageName].push({
					"startTime": startTime || new Date(),
					"stopTime": undefined
				});
				TimeMe.active = true;
				TimeMe.idle = false;
			},

			stopAllTimers: function () {
				var pageNames = Object.keys(TimeMe.startStopTimes);
				for (var i = 0; i < pageNames.length; i++) {
					TimeMe.stopTimer(pageNames[i]);
				}
			},

			// stopTime is optional. If provided, must be of type Date(). By providing
			// stopTime, you are overriding the internal timing mechanism and manually
			// indicating the stop time.
			stopTimer: function (pageName, stopTime) {
				if (!pageName) {
					pageName = TimeMe.currentPageName;
				}
				var arrayOfTimes = TimeMe.startStopTimes[pageName];
				if (arrayOfTimes === undefined || arrayOfTimes.length === 0) {
					// Can't stop timer before you've started it.
					return;
				}
				if (arrayOfTimes[arrayOfTimes.length - 1].stopTime === undefined) {
					arrayOfTimes[arrayOfTimes.length - 1].stopTime = stopTime || new Date();
				}
				TimeMe.active = false;
			},

			getTimeOnCurrentPageInSeconds: function () {
				return TimeMe.getTimeOnPageInSeconds(TimeMe.currentPageName);
			},

			getTimeOnPageInSeconds: function (pageName) {
				var timeInMs = TimeMe.getTimeOnPageInMilliseconds(pageName);
				if (timeInMs === undefined) {
					return undefined;
				} else {
					return timeInMs / 1000;
				}
			},

			getTimeOnCurrentPageInMilliseconds: function () {
				return TimeMe.getTimeOnPageInMilliseconds(TimeMe.currentPageName);
			},

			getTimeOnPageInMilliseconds: function (pageName) {

				var totalTimeOnPage = 0;

				var arrayOfTimes = TimeMe.startStopTimes[pageName];
				if (arrayOfTimes === undefined) {
					// Can't get time on page before you've started the timer.
					return;
				}

				var timeSpentOnPageInSeconds = 0;
				for (var i = 0; i < arrayOfTimes.length; i++) {
					var startTime = arrayOfTimes[i].startTime;
					var stopTime = arrayOfTimes[i].stopTime;
					if (stopTime === undefined) {
						stopTime = new Date();
					}
					var difference = stopTime - startTime;
					timeSpentOnPageInSeconds += (difference);
				}

				totalTimeOnPage = Number(timeSpentOnPageInSeconds);
				return totalTimeOnPage;
			},

			getTimeOnAllPagesInSeconds: function () {
				var allTimes = [];
				var pageNames = Object.keys(TimeMe.startStopTimes);
				for (var i = 0; i < pageNames.length; i++) {
					var pageName = pageNames[i];
					var timeOnPage = TimeMe.getTimeOnPageInSeconds(pageName);
					allTimes.push({
						"pageName": pageName,
						"timeOnPage": timeOnPage
					});
				}
				return allTimes;
			},

			setIdleDurationInSeconds: function (duration) {
				var durationFloat = parseFloat(duration);
				if (isNaN(durationFloat) === false) {
					TimeMe.idleTimeoutMs = duration * 1000;
				} else {
					throw {
						name: "InvalidDurationException",
						message: "An invalid duration time (" + duration + ") was provided."
					};
				}
				return this;
			},

			setCurrentPageName: function (pageName) {
				TimeMe.currentPageName = pageName;
				return this;
			},

			resetRecordedPageTime: function (pageName) {
				delete TimeMe.startStopTimes[pageName];
			},

			resetAllRecordedPageTimes: function () {
				var pageNames = Object.keys(TimeMe.startStopTimes);
				for (var i = 0; i < pageNames.length; i++) {
					TimeMe.resetRecordedPageTime(pageNames[i]);
				}
			},

			resetIdleCountdown: function () {
				if (TimeMe.idle) {
					TimeMe.triggerUserHasReturned();
				}
				TimeMe.idle = false;
				TimeMe.currentIdleTimeMs = 0;
			},

			callWhenUserLeaves: function (callback, numberOfTimesToInvoke) {
				this.userLeftCallbacks.push({
					callback: callback,
					numberOfTimesToInvoke: numberOfTimesToInvoke
				})
			},

			callWhenUserReturns: function (callback, numberOfTimesToInvoke) {
				this.userReturnCallbacks.push({
					callback: callback,
					numberOfTimesToInvoke: numberOfTimesToInvoke
				})
			},

			triggerUserHasReturned: function () {
				if (!TimeMe.active) {
					for (var i = 0; i < this.userReturnCallbacks.length; i++) {
						var userReturnedCallback = this.userReturnCallbacks[i];
						var numberTimes = userReturnedCallback.numberOfTimesToInvoke;
						if (isNaN(numberTimes) || (numberTimes === undefined) || numberTimes > 0) {
							userReturnedCallback.numberOfTimesToInvoke -= 1;
							userReturnedCallback.callback();
						}
					}
				}
				TimeMe.startTimer();
			},

			triggerUserHasLeftPage: function () {
				if (TimeMe.active) {
					for (var i = 0; i < this.userLeftCallbacks.length; i++) {
						var userHasLeftCallback = this.userLeftCallbacks[i];
						var numberTimes = userHasLeftCallback.numberOfTimesToInvoke;
						if (isNaN(numberTimes) || (numberTimes === undefined) || numberTimes > 0) {
							userHasLeftCallback.numberOfTimesToInvoke -= 1;
							userHasLeftCallback.callback();
						}
					}
				}
				TimeMe.stopAllTimers();
			},

			callAfterTimeElapsedInSeconds: function (timeInSeconds, callback) {
				TimeMe.timeElapsedCallbacks.push({
					timeInSeconds: timeInSeconds,
					callback: callback,
					pending: true
				});
			},

			checkState: function () {
				for (var i = 0; i < TimeMe.timeElapsedCallbacks.length; i++) {
					if (TimeMe.timeElapsedCallbacks[i].pending && TimeMe.getTimeOnCurrentPageInSeconds() > TimeMe.timeElapsedCallbacks[i].timeInSeconds) {
						TimeMe.timeElapsedCallbacks[i].callback();
						TimeMe.timeElapsedCallbacks[i].pending = false;
					}
				}
				if (TimeMe.idle === false && TimeMe.currentIdleTimeMs > TimeMe.idleTimeoutMs) {
					TimeMe.idle = true;
					TimeMe.triggerUserHasLeftPage();
				} else {
					TimeMe.currentIdleTimeMs += TimeMe.checkStateRateMs;
				}
			},

			visibilityChangeEventName: undefined,
			hiddenPropName: undefined,

			listenForVisibilityEvents: function () {

				if (typeof document.hidden !== "undefined") {
					TimeMe.hiddenPropName = "hidden";
					TimeMe.visibilityChangeEventName = "visibilitychange";
				} else if (typeof document.mozHidden !== "undefined") {
					TimeMe.hiddenPropName = "mozHidden";
					TimeMe.visibilityChangeEventName = "mozvisibilitychange";
				} else if (typeof document.msHidden !== "undefined") {
					TimeMe.hiddenPropName = "msHidden";
					TimeMe.visibilityChangeEventName = "msvisibilitychange";
				} else if (typeof document.webkitHidden !== "undefined") {
					TimeMe.hiddenPropName = "webkitHidden";
					TimeMe.visibilityChangeEventName = "webkitvisibilitychange";
				}

				document.addEventListener(TimeMe.visibilityChangeEventName, function () {
					if (document[TimeMe.hiddenPropName]) {
						TimeMe.triggerUserHasLeftPage();
					} else {
						TimeMe.triggerUserHasReturned();						
					}
				}, false);

				window.addEventListener('blur', function () {
					TimeMe.triggerUserHasLeftPage();
				});

				window.addEventListener('focus', function () {
					TimeMe.triggerUserHasReturned();
				});

				document.addEventListener("mousemove", function () { TimeMe.resetIdleCountdown(); });
				document.addEventListener("keyup", function () { TimeMe.resetIdleCountdown(); });
				document.addEventListener("touchstart", function () { TimeMe.resetIdleCountdown(); });
				window.addEventListener("scroll", function () { TimeMe.resetIdleCountdown(); });

				setInterval(function () {
					TimeMe.checkState();
				}, TimeMe.checkStateRateMs);
			},

			websocket: undefined,

			websocketHost: undefined,

			setUpWebsocket: function (websocketOptions) {
				if (window.WebSocket && websocketOptions) {
					var websocketHost = websocketOptions.websocketHost; // "ws://hostname:port"
					try {
						TimeMe.websocket = new WebSocket(websocketHost);
						window.onbeforeunload = function (event) {
							TimeMe.sendCurrentTime(websocketOptions.appId);
						};
						TimeMe.websocket.onopen = function () {
							TimeMe.sendInitWsRequest(websocketOptions.appId);
						}
						TimeMe.websocket.onerror = function (error) {
							if (console) {
								console.log("Error occurred in websocket connection: " + error);
							}
						}
						TimeMe.websocket.onmessage = function (event) {
							if (console) {
								console.log(event.data);
							}
						}
					} catch (error) {
						if (console) {
							console.error("Failed to connect to websocket host.  Error:" + error);
						}
					}
				}
				return this;
			},

			websocketSend: function (data) {
				TimeMe.websocket.send(JSON.stringify(data));
			},

			sendCurrentTime: function (appId) {
				var timeSpentOnPage = TimeMe.getTimeOnCurrentPageInMilliseconds();
				var data = {
					type: "INSERT_TIME",
					appId: appId,
					timeOnPageMs: timeSpentOnPage,
					pageName: TimeMe.currentPageName
				};
				TimeMe.websocketSend(data);
			},
			sendInitWsRequest: function (appId) {
				var data = {
					type: "INIT",
					appId: appId
				};
				TimeMe.websocketSend(data);
			},

			initialize: function (options) {

				var idleTimeoutInSeconds = TimeMe.idleTimeoutMs || 30;
				var currentPageName = TimeMe.currentPageName || "default-page-name";
				var websocketOptions = undefined;
				var initialStartTime = undefined;

				if (options) {
					idleTimeoutInSeconds = options.idleTimeoutInSeconds || idleTimeoutInSeconds;
					currentPageName = options.currentPageName || currentPageName;
					websocketOptions = options.websocketOptions;
					initialStartTime = options.initialStartTime;
				}

				TimeMe.setIdleDurationInSeconds(idleTimeoutInSeconds)
					.setCurrentPageName(currentPageName)
					.setUpWebsocket(websocketOptions)
					.listenForVisibilityEvents();

				// TODO - only do this if page currently visible.

				TimeMe.startTimer(undefined, initialStartTime);
			}
		};
		return TimeMe;
	});
}).call(this);


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Tracking; });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var timeme_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9);
/* harmony import */ var timeme_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(timeme_js__WEBPACK_IMPORTED_MODULE_4__);





function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


var url = '/_track';
var TRACKING_PARAM = {
  CHANNEL: 'ch',
  PAGE_VIEW: 'pv',
  REFFERER: 'r',
  TIME_ON_PAGE: 't',
  UNIQUE_VISIT: 'uv',
  VISIT: 'v'
};

var getNow = function getNow() {
  return +new Date();
};

var setItem = function setItem(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch (e) {// Ignore quota errors.
  }
};

var Tracking = /*#__PURE__*/function () {
  function Tracking() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, Tracking);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(Tracking, null, [{
    key: "clearTimeout",
    value: function (_clearTimeout) {
      function clearTimeout() {
        return _clearTimeout.apply(this, arguments);
      }

      clearTimeout.toString = function () {
        return _clearTimeout.toString();
      };

      return clearTimeout;
    }(function () {
      var TIMEOUT_ID_KEY = "bsp.analytics.timeout.id".concat(this.siteSuffix);
      var timeoutId = localStorage.getItem(TIMEOUT_ID_KEY);

      if (timeoutId) {
        clearTimeout(timeoutId);
        localStorage.removeItem(TIMEOUT_ID_KEY);
      }
    })
  }, {
    key: "post",
    value: function post(data, callback) {
      var commonData = _objectSpread({
        s: this.siteId,
        p: this.pageViewIds,
        u: window.location.href
      }, this.extraData);

      var req = new XMLHttpRequest();
      var body = JSON.stringify(_objectSpread(_objectSpread({}, commonData), data));

      if (callback) {
        req.open('POST', url, false);

        req.onreadystatechange = function () {
          if (req.readyState === XMLHttpRequest.DONE && req.status === 200) {
            callback();
          }
        };
      } else {
        req.open('POST', url, true);
      }

      req.send(body);
    }
  }, {
    key: "trackVisits",
    value: function trackVisits() {
      var uniqueVisit = false;
      var visit = false;
      var UNIQUE_VISIT_KEY = "bsp.analytics.uniqueVisit".concat(this.siteSuffix);
      var VISIT_STARTED_KEY = "bsp.analytics.visitStarted".concat(this.siteSuffix);
      var LAST_ACTIVITY_KEY = "bsp.analytics.lastActivity".concat(this.siteSuffix);

      if (!localStorage.getItem(UNIQUE_VISIT_KEY)) {
        setItem(UNIQUE_VISIT_KEY, true);
        uniqueVisit = true;
      }

      var visitStarted = localStorage.getItem(VISIT_STARTED_KEY);
      var lastActivity = localStorage.getItem(LAST_ACTIVITY_KEY);
      var now = getNow();
      setItem(LAST_ACTIVITY_KEY, now);

      if (!visitStarted || parseInt(visitStarted) + 12 * 60 * 60 * 1000 < now) {
        setItem(VISIT_STARTED_KEY, now);
        visit = true;
      } else if (!lastActivity || parseInt(lastActivity) + 30 * 60 * 1000 < now) {
        visit = true;
      }

      var event = [];

      if (uniqueVisit) {
        event.push(TRACKING_PARAM.UNIQUE_VISIT);
      }

      if (visit) {
        event.push(TRACKING_PARAM.VISIT);
      }

      if (this.pageViewIds) {
        event.push(TRACKING_PARAM.PAGE_VIEW);
      }

      if (this.referrer) {
        event.push(TRACKING_PARAM.CHANNEL);
      }

      this.post({
        r: this.referrer,
        ci: this.contentId,
        e: event
      });
    }
  }, {
    key: "trackTimeOnPage",
    value: function trackTimeOnPage() {
      var _this = this;

      // Track time on page.
      timeme_js__WEBPACK_IMPORTED_MODULE_4__["resetAllRecordedPageTimes"]();
      timeme_js__WEBPACK_IMPORTED_MODULE_4__["initialize"]({
        idleTimeoutInSeconds: 30
      });
      var timeOnPage = 0;
      var interval = 10000;
      var maxInterval = interval * 32;
      var TIMEOUT_ID_KEY = "bsp.analytics.timeout.id".concat(this.siteSuffix);

      var postTimeOnPage = function postTimeOnPage() {
        if (interval < maxInterval) {
          interval = interval * 2;
        }

        _this.clearTimeout();

        setItem(TIMEOUT_ID_KEY, setTimeout(postTimeOnPage, interval));
        var newTimeOnPage = timeme_js__WEBPACK_IMPORTED_MODULE_4__["getTimeOnCurrentPageInSeconds"]();
        var diff = newTimeOnPage - timeOnPage;

        if (diff > 0) {
          timeOnPage = newTimeOnPage; // Guard against abnormal time, typically caused by the machine
          // sleeping.

          var event = [];
          event.push(TRACKING_PARAM.TIME_ON_PAGE);

          _this.post({
            e: event,
            t: diff > maxInterval ? maxInterval : diff
          });
        }
      };

      this.clearTimeout();
      setItem(TIMEOUT_ID_KEY, setTimeout(postTimeOnPage, interval));
      window.addEventListener('beforeunload', function () {
        var diff = timeme_js__WEBPACK_IMPORTED_MODULE_4__["getTimeOnCurrentPageInSeconds"]() - timeOnPage;

        if (diff <= 0) {
          return;
        }

        var event = [];
        event.push(TRACKING_PARAM.TIME_ON_PAGE);
        var data = {
          e: event,
          t: diff
        };

        if (navigator.sendBeacon) {
          navigator.sendBeacon(url, JSON.stringify(data));
        } else {
          var complete;
          var end = getNow() + 200;

          _this.post(data, function () {
            complete = true;
          }); // eslint-disable-next-line no-unmodified-loop-condition


          while (!complete) {
            if (getNow() > end) {
              break;
            }
          }
        }
      });
    }
  }, {
    key: "bspTrackingScript",
    get: function get() {
      return document.querySelector('[data-bsp-site]');
    }
  }, {
    key: "contentId",
    get: function get() {
      var contentElement = document.querySelector('[data-bsp-contentid]');

      if (contentElement) {
        return contentElement.getAttribute('data-bsp-contentid');
      }
    }
  }, {
    key: "extraData",
    get: function get() {
      var extraDataElement = document.querySelector('[data-bsp-analytics-data]');

      if (extraDataElement) {
        return JSON.parse(extraDataElement.dataset.bspAnalyticsData);
      }
    },
    set: function set(data) {
      var extraDataElement = document.querySelector('[data-bsp-analytics-data]');

      if (extraDataElement) {
        extraDataElement.dataset.bspAnalyticsData = data;
      }
    }
  }, {
    key: "pageViewIds",
    get: function get() {
      return _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(document.querySelectorAll('[data-bsp-pv]')).map(function (pageViewEl) {
        return pageViewEl.getAttribute('data-bsp-pv');
      });
    }
  }, {
    key: "referrer",
    get: function get() {
      return document.referrer ? document.referrer : '';
    }
  }, {
    key: "siteId",
    get: function get() {
      if (this.bspTrackingScript) {
        return this.bspTrackingScript.getAttribute('data-bsp-site');
      }
    }
  }, {
    key: "siteSuffix",
    get: function get() {
      return this.siteId ? ".".concat(this.siteId) : '';
    }
  }, {
    key: "trackingEnabled",
    get: function get() {
      return !!this.bspTrackingScript;
    }
  }]);

  return Tracking;
}();

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(1);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__(4);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/inherits.js
var inherits = __webpack_require__(2);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__(3);
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(0);
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/wrapNativeSuper.js
var wrapNativeSuper = __webpack_require__(5);
var wrapNativeSuper_default = /*#__PURE__*/__webpack_require__.n(wrapNativeSuper);

// CONCATENATED MODULE: ./styleguide/core/form/input/Input.js







function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Input_Input = /*#__PURE__*/function (_HTMLElement) {
  inherits_default()(Input, _HTMLElement);

  var _super = _createSuper(Input);

  function Input() {
    classCallCheck_default()(this, Input);

    return _super.apply(this, arguments);
  }

  createClass_default()(Input, [{
    key: "bindEvents",
    value: function bindEvents() {
      this.addEventListener('focusout', this);
      this.addEventListener('change', this);
    }
  }, {
    key: "connectedCallback",
    value: function connectedCallback() {
      this.bindEvents();
    }
  }, {
    key: "handleEvent",
    value: function handleEvent(event) {
      if (['focusout', 'change'].includes(event.type)) {
        this.validate();
      }
    }
  }, {
    key: "validate",
    value: function validate() {
      var validity = this.input.validity;

      if (validity.valid) {
        this.errorMessage = '';
        this.error = false;
        return;
      }

      for (var key in validity) {
        if (validity[key]) {
          this.errorMessage = this.dataset[key];
          this.error = true;
          return;
        }
      }
    }
  }, {
    key: "error",
    set: function set(bool) {
      bool ? this.setAttribute('has-error', '') : this.removeAttribute('has-error');
    }
  }, {
    key: "errorMessage",
    set: function set(message) {
      var errorsElement = this.querySelector('[class*="-errors"]');

      if (errorsElement) {
        errorsElement.innerText = message;
      }
    }
  }, {
    key: "input",
    get: function get() {
      return this.querySelector('input');
    }
  }]);

  return Input;
}( /*#__PURE__*/wrapNativeSuper_default()(HTMLElement));
// CONCATENATED MODULE: ./styleguide/core/form/input/CaptchaInput.js






function CaptchaInput_createSuper(Derived) { var hasNativeReflectConstruct = CaptchaInput_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function CaptchaInput_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }


var CaptchaInput_CaptchaInput = /*#__PURE__*/function (_Input) {
  inherits_default()(CaptchaInput, _Input);

  var _super = CaptchaInput_createSuper(CaptchaInput);

  function CaptchaInput() {
    classCallCheck_default()(this, CaptchaInput);

    return _super.apply(this, arguments);
  }

  createClass_default()(CaptchaInput, [{
    key: "validate",
    value: function validate() {
      this.error = !this.valid;
    }
  }, {
    key: "input",
    get: function get() {}
  }, {
    key: "captcha",
    get: function get() {
      return this.querySelector('ps-google-captcha');
    }
  }, {
    key: "valid",
    get: function get() {
      return this.captcha.valid;
    }
  }]);

  return CaptchaInput;
}(Input_Input);
// CONCATENATED MODULE: ./styleguide/core/form/input/EmailInput.js





function EmailInput_createSuper(Derived) { var hasNativeReflectConstruct = EmailInput_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function EmailInput_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }


var EmailInput_EmailInput = /*#__PURE__*/function (_Input) {
  inherits_default()(EmailInput, _Input);

  var _super = EmailInput_createSuper(EmailInput);

  function EmailInput() {
    classCallCheck_default()(this, EmailInput);

    return _super.apply(this, arguments);
  }

  return EmailInput;
}(Input_Input);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/get.js
var get = __webpack_require__(12);
var get_default = /*#__PURE__*/__webpack_require__.n(get);

// CONCATENATED MODULE: ./styleguide/core/form/input/FileInput.js







function FileInput_createSuper(Derived) { var hasNativeReflectConstruct = FileInput_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function FileInput_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }


var FileInput_FileInput = /*#__PURE__*/function (_Input) {
  inherits_default()(FileInput, _Input);

  var _super = FileInput_createSuper(FileInput);

  function FileInput() {
    classCallCheck_default()(this, FileInput);

    return _super.apply(this, arguments);
  }

  createClass_default()(FileInput, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      var _this = this;

      get_default()(getPrototypeOf_default()(FileInput.prototype), "connectedCallback", this).call(this);

      this.button.addEventListener('click', function () {
        _this.input.click();
      });
      this.addEventListener('change', function () {
        _this.files = _this.input.files;

        var fileList = _this.files.map(function (file) {
          return "".concat(file.name);
        }).join(', ');

        var fileListEl = _this.querySelector('.FileInput-fileList');

        if (fileList) {
          fileListEl.innerText = fileList;
        } else {
          fileListEl.innerText = _this.dataset['noFileChosen'];
        }
      });
    }
  }, {
    key: "files",
    set: function set(fileList) {
      this._files = Array.from(fileList);
      this.hasFiles = !!this._files;
    },
    get: function get() {
      return this._files;
    }
  }, {
    key: "hasFiles",
    set: function set(bool) {
      bool ? this.setAttribute('has-files', '') : this.removeAttribute('has-files');
    }
  }, {
    key: "button",
    get: function get() {
      return this.querySelector('button');
    }
  }]);

  return FileInput;
}(Input_Input);
// EXTERNAL MODULE: ./styleguide/core/form/Form.js
var Form = __webpack_require__(14);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__(7);
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);

// CONCATENATED MODULE: ./styleguide/core/form/input/GoogleCaptcha.js








function GoogleCaptcha_createSuper(Derived) { var hasNativeReflectConstruct = GoogleCaptcha_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function GoogleCaptcha_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var RECAPTCHA_LIBRARY = 'https://www.google.com/recaptcha/api.js?onload=onGrecaptchaLoadCallback&render=explicit';
var READY_EVENT = 'grecaptcha:ready';

window.onGrecaptchaLoadCallback = function () {
  document.body.dispatchEvent(new Event(READY_EVENT));
};

var GoogleCaptcha_GoogleCaptcha = /*#__PURE__*/function (_HTMLElement) {
  inherits_default()(GoogleCaptcha, _HTMLElement);

  var _super = GoogleCaptcha_createSuper(GoogleCaptcha);

  function GoogleCaptcha() {
    classCallCheck_default()(this, GoogleCaptcha);

    return _super.apply(this, arguments);
  }

  createClass_default()(GoogleCaptcha, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.load();
    }
  }, {
    key: "load",
    value: function load() {
      var _this = this;

      var script = toConsumableArray_default()(document.querySelectorAll('script')).find(function (script) {
        return script.src === RECAPTCHA_LIBRARY;
      });

      if (!script) {
        var scriptTag = document.createElement('script');
        scriptTag.setAttribute('src', RECAPTCHA_LIBRARY);
        document.querySelector('head').appendChild(scriptTag);
      }

      if (window.grecaptcha) {
        this.render();
      } else {
        document.body.addEventListener(READY_EVENT, function () {
          return _this.render();
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var container = document.createElement('div');
      this.appendChild(container);
      window.grecaptcha.render(container, {
        sitekey: this.sitekey
      });
    }
  }, {
    key: "sitekey",
    get: function get() {
      return this.dataset.sitekey;
    }
  }, {
    key: "valid",
    get: function get() {
      if (window.grecaptcha) {
        return !!window.grecaptcha.getResponse();
      }

      return false;
    }
  }]);

  return GoogleCaptcha;
}( /*#__PURE__*/wrapNativeSuper_default()(HTMLElement));
// CONCATENATED MODULE: ./styleguide/core/form/input/PasswordInput.js





function PasswordInput_createSuper(Derived) { var hasNativeReflectConstruct = PasswordInput_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function PasswordInput_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }


var PasswordInput_PasswordInput = /*#__PURE__*/function (_Input) {
  inherits_default()(PasswordInput, _Input);

  var _super = PasswordInput_createSuper(PasswordInput);

  function PasswordInput() {
    classCallCheck_default()(this, PasswordInput);

    return _super.apply(this, arguments);
  }

  return PasswordInput;
}(Input_Input);
// CONCATENATED MODULE: ./styleguide/core/form/input/PhoneNumberInput.js





function PhoneNumberInput_createSuper(Derived) { var hasNativeReflectConstruct = PhoneNumberInput_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function PhoneNumberInput_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }


var PhoneNumberInput_PhoneNumberInput = /*#__PURE__*/function (_Input) {
  inherits_default()(PhoneNumberInput, _Input);

  var _super = PhoneNumberInput_createSuper(PhoneNumberInput);

  function PhoneNumberInput() {
    classCallCheck_default()(this, PhoneNumberInput);

    return _super.apply(this, arguments);
  }

  return PhoneNumberInput;
}(Input_Input);
// CONCATENATED MODULE: ./styleguide/core/form/select/Select.js






function Select_createSuper(Derived) { var hasNativeReflectConstruct = Select_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function Select_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }


var Select_Select = /*#__PURE__*/function (_Input) {
  inherits_default()(Select, _Input);

  var _super = Select_createSuper(Select);

  function Select() {
    classCallCheck_default()(this, Select);

    return _super.apply(this, arguments);
  }

  createClass_default()(Select, [{
    key: "input",
    get: function get() {
      return this.querySelector('select');
    }
  }]);

  return Select;
}(Input_Input);
// CONCATENATED MODULE: ./styleguide/core/form/input/TextInput.js





function TextInput_createSuper(Derived) { var hasNativeReflectConstruct = TextInput_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function TextInput_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }


var TextInput_TextInput = /*#__PURE__*/function (_Input) {
  inherits_default()(TextInput, _Input);

  var _super = TextInput_createSuper(TextInput);

  function TextInput() {
    classCallCheck_default()(this, TextInput);

    return _super.apply(this, arguments);
  }

  return TextInput;
}(Input_Input);
// CONCATENATED MODULE: ./styleguide/core/form/input/TextArea.js






function TextArea_createSuper(Derived) { var hasNativeReflectConstruct = TextArea_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function TextArea_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }


var TextArea_TextArea = /*#__PURE__*/function (_Input) {
  inherits_default()(TextArea, _Input);

  var _super = TextArea_createSuper(TextArea);

  function TextArea() {
    classCallCheck_default()(this, TextArea);

    return _super.apply(this, arguments);
  }

  createClass_default()(TextArea, [{
    key: "input",
    get: function get() {
      return this.querySelector('textarea');
    }
  }]);

  return TextArea;
}(Input_Input);
// CONCATENATED MODULE: ./styleguide/core/form/All.js
/* concated harmony reexport CaptchaInput */__webpack_require__.d(__webpack_exports__, "a", function() { return CaptchaInput_CaptchaInput; });
/* concated harmony reexport EmailInput */__webpack_require__.d(__webpack_exports__, "b", function() { return EmailInput_EmailInput; });
/* concated harmony reexport FileInput */__webpack_require__.d(__webpack_exports__, "c", function() { return FileInput_FileInput; });
/* concated harmony reexport Form */__webpack_require__.d(__webpack_exports__, "d", function() { return Form["a" /* Form */]; });
/* concated harmony reexport GoogleCaptcha */__webpack_require__.d(__webpack_exports__, "e", function() { return GoogleCaptcha_GoogleCaptcha; });
/* concated harmony reexport PasswordInput */__webpack_require__.d(__webpack_exports__, "f", function() { return PasswordInput_PasswordInput; });
/* concated harmony reexport PhoneNumberInput */__webpack_require__.d(__webpack_exports__, "g", function() { return PhoneNumberInput_PhoneNumberInput; });
/* concated harmony reexport Select */__webpack_require__.d(__webpack_exports__, "h", function() { return Select_Select; });
/* concated harmony reexport TextArea */__webpack_require__.d(__webpack_exports__, "i", function() { return TextArea_TextArea; });
/* concated harmony reexport TextInput */__webpack_require__.d(__webpack_exports__, "j", function() { return TextInput_TextInput; });












/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var superPropBase = __webpack_require__(36);

function _get(target, property, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    module.exports = _get = Reflect.get;
  } else {
    module.exports = _get = function _get(target, property, receiver) {
      var base = superPropBase(target, property);
      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);

      if (desc.get) {
        return desc.get.call(receiver);
      }

      return desc.value;
    };
  }

  return _get(target, property, receiver || target);
}

module.exports = _get;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Fizzy UI utils v2.0.7
 * MIT license
 */

/*jshint browser: true, undef: true, unused: true, strict: true */

( function( window, factory ) {
  // universal module definition
  /*jshint strict: false */ /*globals define, module, require */

  if ( true ) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
      __webpack_require__(47)
    ], __WEBPACK_AMD_DEFINE_RESULT__ = (function( matchesSelector ) {
      return factory( window, matchesSelector );
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}

}( window, function factory( window, matchesSelector ) {

'use strict';

var utils = {};

// ----- extend ----- //

// extends objects
utils.extend = function( a, b ) {
  for ( var prop in b ) {
    a[ prop ] = b[ prop ];
  }
  return a;
};

// ----- modulo ----- //

utils.modulo = function( num, div ) {
  return ( ( num % div ) + div ) % div;
};

// ----- makeArray ----- //

var arraySlice = Array.prototype.slice;

// turn element or nodeList into an array
utils.makeArray = function( obj ) {
  if ( Array.isArray( obj ) ) {
    // use object if already an array
    return obj;
  }
  // return empty array if undefined or null. #6
  if ( obj === null || obj === undefined ) {
    return [];
  }

  var isArrayLike = typeof obj == 'object' && typeof obj.length == 'number';
  if ( isArrayLike ) {
    // convert nodeList to array
    return arraySlice.call( obj );
  }

  // array of single index
  return [ obj ];
};

// ----- removeFrom ----- //

utils.removeFrom = function( ary, obj ) {
  var index = ary.indexOf( obj );
  if ( index != -1 ) {
    ary.splice( index, 1 );
  }
};

// ----- getParent ----- //

utils.getParent = function( elem, selector ) {
  while ( elem.parentNode && elem != document.body ) {
    elem = elem.parentNode;
    if ( matchesSelector( elem, selector ) ) {
      return elem;
    }
  }
};

// ----- getQueryElement ----- //

// use element as selector string
utils.getQueryElement = function( elem ) {
  if ( typeof elem == 'string' ) {
    return document.querySelector( elem );
  }
  return elem;
};

// ----- handleEvent ----- //

// enable .ontype to trigger from .addEventListener( elem, 'type' )
utils.handleEvent = function( event ) {
  var method = 'on' + event.type;
  if ( this[ method ] ) {
    this[ method ]( event );
  }
};

// ----- filterFindElements ----- //

utils.filterFindElements = function( elems, selector ) {
  // make array of elems
  elems = utils.makeArray( elems );
  var ffElems = [];

  elems.forEach( function( elem ) {
    // check that elem is an actual element
    if ( !( elem instanceof HTMLElement ) ) {
      return;
    }
    // add elem if no selector
    if ( !selector ) {
      ffElems.push( elem );
      return;
    }
    // filter & find items if we have a selector
    // filter
    if ( matchesSelector( elem, selector ) ) {
      ffElems.push( elem );
    }
    // find children
    var childElems = elem.querySelectorAll( selector );
    // concat childElems to filterFound array
    for ( var i=0; i < childElems.length; i++ ) {
      ffElems.push( childElems[i] );
    }
  });

  return ffElems;
};

// ----- debounceMethod ----- //

utils.debounceMethod = function( _class, methodName, threshold ) {
  threshold = threshold || 100;
  // original method
  var method = _class.prototype[ methodName ];
  var timeoutName = methodName + 'Timeout';

  _class.prototype[ methodName ] = function() {
    var timeout = this[ timeoutName ];
    clearTimeout( timeout );

    var args = arguments;
    var _this = this;
    this[ timeoutName ] = setTimeout( function() {
      method.apply( _this, args );
      delete _this[ timeoutName ];
    }, threshold );
  };
};

// ----- docReady ----- //

utils.docReady = function( callback ) {
  var readyState = document.readyState;
  if ( readyState == 'complete' || readyState == 'interactive' ) {
    // do async to allow for other scripts to run. metafizzy/flickity#441
    setTimeout( callback );
  } else {
    document.addEventListener( 'DOMContentLoaded', callback );
  }
};

// ----- htmlInit ----- //

// http://jamesroberts.name/blog/2010/02/22/string-functions-for-javascript-trim-to-camel-case-to-dashed-and-to-underscore/
utils.toDashed = function( str ) {
  return str.replace( /(.)([A-Z])/g, function( match, $1, $2 ) {
    return $1 + '-' + $2;
  }).toLowerCase();
};

var console = window.console;
/**
 * allow user to initialize classes via [data-namespace] or .js-namespace class
 * htmlInit( Widget, 'widgetName' )
 * options are parsed from data-namespace-options
 */
utils.htmlInit = function( WidgetClass, namespace ) {
  utils.docReady( function() {
    var dashedNamespace = utils.toDashed( namespace );
    var dataAttr = 'data-' + dashedNamespace;
    var dataAttrElems = document.querySelectorAll( '[' + dataAttr + ']' );
    var jsDashElems = document.querySelectorAll( '.js-' + dashedNamespace );
    var elems = utils.makeArray( dataAttrElems )
      .concat( utils.makeArray( jsDashElems ) );
    var dataOptionsAttr = dataAttr + '-options';
    var jQuery = window.jQuery;

    elems.forEach( function( elem ) {
      var attr = elem.getAttribute( dataAttr ) ||
        elem.getAttribute( dataOptionsAttr );
      var options;
      try {
        options = attr && JSON.parse( attr );
      } catch ( error ) {
        // log error, do not initialize
        if ( console ) {
          console.error( 'Error parsing ' + dataAttr + ' on ' + elem.className +
          ': ' + error );
        }
        return;
      }
      // initialize
      var instance = new WidgetClass( elem, options );
      // make available via $().data('namespace')
      if ( jQuery ) {
        jQuery.data( elem, namespace, instance );
      }
    });

  });
};

// -----  ----- //

return utils;

}));


/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Form; });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_6__);








function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Form = /*#__PURE__*/function (_HTMLElement) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(Form, _HTMLElement);

  var _super = _createSuper(Form);

  function Form() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Form);

    return _super.apply(this, arguments);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Form, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.addEventListener('submit', this);
      this.form.setAttribute('novalidate', '');
    }
  }, {
    key: "handleEvent",
    value: function handleEvent(event) {
      if (event.type === 'submit') {
        event.preventDefault();

        if (this.submitting) {
          return;
        }

        if (!this.isValid()) {
          return;
        }

        this.submitForm();
      }
    }
  }, {
    key: "isValid",
    value: function isValid() {
      var invalidInput = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(this.form.elements).find(function (input) {
        return !input.validity.valid;
      });

      if (invalidInput) {
        return false;
      }

      if (this.captcha && !this.captcha.valid) {
        return false;
      }

      return true;
    }
  }, {
    key: "submitForm",
    value: function submitForm() {
      this.submitting = true;

      if (this.submitsInline) {
        this.submitInline();
      } else {
        this.form.submit();
      }
    }
  }, {
    key: "submitInline",
    value: function submitInline() {
      var _this = this;

      var apiUrl = this.form.getAttribute('action') || '';
      var method = this.form.getAttribute('method') || 'POST';
      var data = new FormData(this.form);
      fetch(apiUrl, {
        credentials: 'include',
        method: method,
        body: data
      }).then(function (response) {
        return response.text();
      }).then(function (response) {
        return _this.handleSubmitResponse(response);
      }).catch(function (error) {
        console.log('Form Error: ' + error);
      }).finally(function () {
        _this.submitting = false;
      });
    }
  }, {
    key: "handleSubmitResponse",
    value: function handleSubmitResponse(text) {
      var parser = new DOMParser();
      var newDocument = parser.parseFromString(text, 'text/html');
      var responseForm = newDocument.documentElement.querySelector("[data-form-id=\"".concat(this.formId, "\"]"));
      this.parentElement.replaceChild(responseForm, this);
    }
  }, {
    key: "formId",
    get: function get() {
      return this.getAttribute('data-form-id');
    }
  }, {
    key: "form",
    get: function get() {
      return this.querySelector('form');
    }
  }, {
    key: "captcha",
    get: function get() {
      return this.querySelector('ps-captcha-input');
    }
  }, {
    key: "submitsInline",
    get: function get() {
      return this.hasAttribute('submits-inline');
    }
  }, {
    key: "submitting",
    set: function set(bool) {
      bool ? this.setAttribute('submitting', '') : this.removeAttribute('submitting');
    },
    get: function get() {
      return this.hasAttribute('submitting');
    }
  }]);

  return Form;
}( /*#__PURE__*/_babel_runtime_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_6___default()(HTMLElement));

/***/ }),
/* 15 */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;

/***/ }),
/* 16 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 17 */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// Flickity main
( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */
  if ( true ) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
      __webpack_require__(24),
      __webpack_require__(25),
      __webpack_require__(13),
      __webpack_require__(48),
      __webpack_require__(49),
      __webpack_require__(50)
    ], __WEBPACK_AMD_DEFINE_RESULT__ = (function( EvEmitter, getSize, utils, Cell, Slide, animatePrototype ) {
      return factory( window, EvEmitter, getSize, utils, Cell, Slide, animatePrototype );
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var _Flickity; }

}( window, function factory( window, EvEmitter, getSize,
  utils, Cell, Slide, animatePrototype ) {

'use strict';

// vars
var jQuery = window.jQuery;
var getComputedStyle = window.getComputedStyle;
var console = window.console;

function moveElements( elems, toElem ) {
  elems = utils.makeArray( elems );
  while ( elems.length ) {
    toElem.appendChild( elems.shift() );
  }
}

// -------------------------- Flickity -------------------------- //

// globally unique identifiers
var GUID = 0;
// internal store of all Flickity intances
var instances = {};

function Flickity( element, options ) {
  var queryElement = utils.getQueryElement( element );
  if ( !queryElement ) {
    if ( console ) {
      console.error( 'Bad element for Flickity: ' + ( queryElement || element ) );
    }
    return;
  }
  this.element = queryElement;
  // do not initialize twice on same element
  if ( this.element.flickityGUID ) {
    var instance = instances[ this.element.flickityGUID ];
    instance.option( options );
    return instance;
  }

  // add jQuery
  if ( jQuery ) {
    this.$element = jQuery( this.element );
  }
  // options
  this.options = utils.extend( {}, this.constructor.defaults );
  this.option( options );

  // kick things off
  this._create();
}

Flickity.defaults = {
  accessibility: true,
  // adaptiveHeight: false,
  cellAlign: 'center',
  // cellSelector: undefined,
  // contain: false,
  freeScrollFriction: 0.075, // friction when free-scrolling
  friction: 0.28, // friction when selecting
  namespaceJQueryEvents: true,
  // initialIndex: 0,
  percentPosition: true,
  resize: true,
  selectedAttraction: 0.025,
  setGallerySize: true
  // watchCSS: false,
  // wrapAround: false
};

// hash of methods triggered on _create()
Flickity.createMethods = [];

var proto = Flickity.prototype;
// inherit EventEmitter
utils.extend( proto, EvEmitter.prototype );

proto._create = function() {
  // add id for Flickity.data
  var id = this.guid = ++GUID;
  this.element.flickityGUID = id; // expando
  instances[ id ] = this; // associate via id
  // initial properties
  this.selectedIndex = 0;
  // how many frames slider has been in same position
  this.restingFrames = 0;
  // initial physics properties
  this.x = 0;
  this.velocity = 0;
  this.originSide = this.options.rightToLeft ? 'right' : 'left';
  // create viewport & slider
  this.viewport = document.createElement('div');
  this.viewport.className = 'flickity-viewport';
  this._createSlider();

  if ( this.options.resize || this.options.watchCSS ) {
    window.addEventListener( 'resize', this );
  }

  // add listeners from on option
  for ( var eventName in this.options.on ) {
    var listener = this.options.on[ eventName ];
    this.on( eventName, listener );
  }

  Flickity.createMethods.forEach( function( method ) {
    this[ method ]();
  }, this );

  if ( this.options.watchCSS ) {
    this.watchCSS();
  } else {
    this.activate();
  }

};

/**
 * set options
 * @param {Object} opts
 */
proto.option = function( opts ) {
  utils.extend( this.options, opts );
};

proto.activate = function() {
  if ( this.isActive ) {
    return;
  }
  this.isActive = true;
  this.element.classList.add('flickity-enabled');
  if ( this.options.rightToLeft ) {
    this.element.classList.add('flickity-rtl');
  }

  this.getSize();
  // move initial cell elements so they can be loaded as cells
  var cellElems = this._filterFindCellElements( this.element.children );
  moveElements( cellElems, this.slider );
  this.viewport.appendChild( this.slider );
  this.element.appendChild( this.viewport );
  // get cells from children
  this.reloadCells();

  if ( this.options.accessibility ) {
    // allow element to focusable
    this.element.tabIndex = 0;
    // listen for key presses
    this.element.addEventListener( 'keydown', this );
  }

  this.emitEvent('activate');
  this.selectInitialIndex();
  // flag for initial activation, for using initialIndex
  this.isInitActivated = true;
  // ready event. #493
  this.dispatchEvent('ready');
};

// slider positions the cells
proto._createSlider = function() {
  // slider element does all the positioning
  var slider = document.createElement('div');
  slider.className = 'flickity-slider';
  slider.style[ this.originSide ] = 0;
  this.slider = slider;
};

proto._filterFindCellElements = function( elems ) {
  return utils.filterFindElements( elems, this.options.cellSelector );
};

// goes through all children
proto.reloadCells = function() {
  // collection of item elements
  this.cells = this._makeCells( this.slider.children );
  this.positionCells();
  this._getWrapShiftCells();
  this.setGallerySize();
};

/**
 * turn elements into Flickity.Cells
 * @param {Array or NodeList or HTMLElement} elems
 * @returns {Array} items - collection of new Flickity Cells
 */
proto._makeCells = function( elems ) {
  var cellElems = this._filterFindCellElements( elems );

  // create new Flickity for collection
  var cells = cellElems.map( function( cellElem ) {
    return new Cell( cellElem, this );
  }, this );

  return cells;
};

proto.getLastCell = function() {
  return this.cells[ this.cells.length - 1 ];
};

proto.getLastSlide = function() {
  return this.slides[ this.slides.length - 1 ];
};

// positions all cells
proto.positionCells = function() {
  // size all cells
  this._sizeCells( this.cells );
  // position all cells
  this._positionCells( 0 );
};

/**
 * position certain cells
 * @param {Integer} index - which cell to start with
 */
proto._positionCells = function( index ) {
  index = index || 0;
  // also measure maxCellHeight
  // start 0 if positioning all cells
  this.maxCellHeight = index ? this.maxCellHeight || 0 : 0;
  var cellX = 0;
  // get cellX
  if ( index > 0 ) {
    var startCell = this.cells[ index - 1 ];
    cellX = startCell.x + startCell.size.outerWidth;
  }
  var len = this.cells.length;
  for ( var i=index; i < len; i++ ) {
    var cell = this.cells[i];
    cell.setPosition( cellX );
    cellX += cell.size.outerWidth;
    this.maxCellHeight = Math.max( cell.size.outerHeight, this.maxCellHeight );
  }
  // keep track of cellX for wrap-around
  this.slideableWidth = cellX;
  // slides
  this.updateSlides();
  // contain slides target
  this._containSlides();
  // update slidesWidth
  this.slidesWidth = len ? this.getLastSlide().target - this.slides[0].target : 0;
};

/**
 * cell.getSize() on multiple cells
 * @param {Array} cells
 */
proto._sizeCells = function( cells ) {
  cells.forEach( function( cell ) {
    cell.getSize();
  });
};

// --------------------------  -------------------------- //

proto.updateSlides = function() {
  this.slides = [];
  if ( !this.cells.length ) {
    return;
  }

  var slide = new Slide( this );
  this.slides.push( slide );
  var isOriginLeft = this.originSide == 'left';
  var nextMargin = isOriginLeft ? 'marginRight' : 'marginLeft';

  var canCellFit = this._getCanCellFit();

  this.cells.forEach( function( cell, i ) {
    // just add cell if first cell in slide
    if ( !slide.cells.length ) {
      slide.addCell( cell );
      return;
    }

    var slideWidth = ( slide.outerWidth - slide.firstMargin ) +
      ( cell.size.outerWidth - cell.size[ nextMargin ] );

    if ( canCellFit.call( this, i, slideWidth ) ) {
      slide.addCell( cell );
    } else {
      // doesn't fit, new slide
      slide.updateTarget();

      slide = new Slide( this );
      this.slides.push( slide );
      slide.addCell( cell );
    }
  }, this );
  // last slide
  slide.updateTarget();
  // update .selectedSlide
  this.updateSelectedSlide();
};

proto._getCanCellFit = function() {
  var groupCells = this.options.groupCells;
  if ( !groupCells ) {
    return function() {
      return false;
    };
  } else if ( typeof groupCells == 'number' ) {
    // group by number. 3 -> [0,1,2], [3,4,5], ...
    var number = parseInt( groupCells, 10 );
    return function( i ) {
      return ( i % number ) !== 0;
    };
  }
  // default, group by width of slide
  // parse '75%
  var percentMatch = typeof groupCells == 'string' &&
    groupCells.match(/^(\d+)%$/);
  var percent = percentMatch ? parseInt( percentMatch[1], 10 ) / 100 : 1;
  return function( i, slideWidth ) {
    return slideWidth <= ( this.size.innerWidth + 1 ) * percent;
  };
};

// alias _init for jQuery plugin .flickity()
proto._init =
proto.reposition = function() {
  this.positionCells();
  this.positionSliderAtSelected();
};

proto.getSize = function() {
  this.size = getSize( this.element );
  this.setCellAlign();
  this.cursorPosition = this.size.innerWidth * this.cellAlign;
};

var cellAlignShorthands = {
  // cell align, then based on origin side
  center: {
    left: 0.5,
    right: 0.5
  },
  left: {
    left: 0,
    right: 1
  },
  right: {
    right: 0,
    left: 1
  }
};

proto.setCellAlign = function() {
  var shorthand = cellAlignShorthands[ this.options.cellAlign ];
  this.cellAlign = shorthand ? shorthand[ this.originSide ] : this.options.cellAlign;
};

proto.setGallerySize = function() {
  if ( this.options.setGallerySize ) {
    var height = this.options.adaptiveHeight && this.selectedSlide ?
      this.selectedSlide.height : this.maxCellHeight;
    this.viewport.style.height = height + 'px';
  }
};

proto._getWrapShiftCells = function() {
  // only for wrap-around
  if ( !this.options.wrapAround ) {
    return;
  }
  // unshift previous cells
  this._unshiftCells( this.beforeShiftCells );
  this._unshiftCells( this.afterShiftCells );
  // get before cells
  // initial gap
  var gapX = this.cursorPosition;
  var cellIndex = this.cells.length - 1;
  this.beforeShiftCells = this._getGapCells( gapX, cellIndex, -1 );
  // get after cells
  // ending gap between last cell and end of gallery viewport
  gapX = this.size.innerWidth - this.cursorPosition;
  // start cloning at first cell, working forwards
  this.afterShiftCells = this._getGapCells( gapX, 0, 1 );
};

proto._getGapCells = function( gapX, cellIndex, increment ) {
  // keep adding cells until the cover the initial gap
  var cells = [];
  while ( gapX > 0 ) {
    var cell = this.cells[ cellIndex ];
    if ( !cell ) {
      break;
    }
    cells.push( cell );
    cellIndex += increment;
    gapX -= cell.size.outerWidth;
  }
  return cells;
};

// ----- contain ----- //

// contain cell targets so no excess sliding
proto._containSlides = function() {
  if ( !this.options.contain || this.options.wrapAround || !this.cells.length ) {
    return;
  }
  var isRightToLeft = this.options.rightToLeft;
  var beginMargin = isRightToLeft ? 'marginRight' : 'marginLeft';
  var endMargin = isRightToLeft ? 'marginLeft' : 'marginRight';
  var contentWidth = this.slideableWidth - this.getLastCell().size[ endMargin ];
  // content is less than gallery size
  var isContentSmaller = contentWidth < this.size.innerWidth;
  // bounds
  var beginBound = this.cursorPosition + this.cells[0].size[ beginMargin ];
  var endBound = contentWidth - this.size.innerWidth * ( 1 - this.cellAlign );
  // contain each cell target
  this.slides.forEach( function( slide ) {
    if ( isContentSmaller ) {
      // all cells fit inside gallery
      slide.target = contentWidth * this.cellAlign;
    } else {
      // contain to bounds
      slide.target = Math.max( slide.target, beginBound );
      slide.target = Math.min( slide.target, endBound );
    }
  }, this );
};

// -----  ----- //

/**
 * emits events via eventEmitter and jQuery events
 * @param {String} type - name of event
 * @param {Event} event - original event
 * @param {Array} args - extra arguments
 */
proto.dispatchEvent = function( type, event, args ) {
  var emitArgs = event ? [ event ].concat( args ) : args;
  this.emitEvent( type, emitArgs );

  if ( jQuery && this.$element ) {
    // default trigger with type if no event
    type += this.options.namespaceJQueryEvents ? '.flickity' : '';
    var $event = type;
    if ( event ) {
      // create jQuery event
      var jQEvent = jQuery.Event( event );
      jQEvent.type = type;
      $event = jQEvent;
    }
    this.$element.trigger( $event, args );
  }
};

// -------------------------- select -------------------------- //

/**
 * @param {Integer} index - index of the slide
 * @param {Boolean} isWrap - will wrap-around to last/first if at the end
 * @param {Boolean} isInstant - will immediately set position at selected cell
 */
proto.select = function( index, isWrap, isInstant ) {
  if ( !this.isActive ) {
    return;
  }
  index = parseInt( index, 10 );
  this._wrapSelect( index );

  if ( this.options.wrapAround || isWrap ) {
    index = utils.modulo( index, this.slides.length );
  }
  // bail if invalid index
  if ( !this.slides[ index ] ) {
    return;
  }
  var prevIndex = this.selectedIndex;
  this.selectedIndex = index;
  this.updateSelectedSlide();
  if ( isInstant ) {
    this.positionSliderAtSelected();
  } else {
    this.startAnimation();
  }
  if ( this.options.adaptiveHeight ) {
    this.setGallerySize();
  }
  // events
  this.dispatchEvent( 'select', null, [ index ] );
  // change event if new index
  if ( index != prevIndex ) {
    this.dispatchEvent( 'change', null, [ index ] );
  }
  // old v1 event name, remove in v3
  this.dispatchEvent('cellSelect');
};

// wraps position for wrapAround, to move to closest slide. #113
proto._wrapSelect = function( index ) {
  var len = this.slides.length;
  var isWrapping = this.options.wrapAround && len > 1;
  if ( !isWrapping ) {
    return index;
  }
  var wrapIndex = utils.modulo( index, len );
  // go to shortest
  var delta = Math.abs( wrapIndex - this.selectedIndex );
  var backWrapDelta = Math.abs( ( wrapIndex + len ) - this.selectedIndex );
  var forewardWrapDelta = Math.abs( ( wrapIndex - len ) - this.selectedIndex );
  if ( !this.isDragSelect && backWrapDelta < delta ) {
    index += len;
  } else if ( !this.isDragSelect && forewardWrapDelta < delta ) {
    index -= len;
  }
  // wrap position so slider is within normal area
  if ( index < 0 ) {
    this.x -= this.slideableWidth;
  } else if ( index >= len ) {
    this.x += this.slideableWidth;
  }
};

proto.previous = function( isWrap, isInstant ) {
  this.select( this.selectedIndex - 1, isWrap, isInstant );
};

proto.next = function( isWrap, isInstant ) {
  this.select( this.selectedIndex + 1, isWrap, isInstant );
};

proto.updateSelectedSlide = function() {
  var slide = this.slides[ this.selectedIndex ];
  // selectedIndex could be outside of slides, if triggered before resize()
  if ( !slide ) {
    return;
  }
  // unselect previous selected slide
  this.unselectSelectedSlide();
  // update new selected slide
  this.selectedSlide = slide;
  slide.select();
  this.selectedCells = slide.cells;
  this.selectedElements = slide.getCellElements();
  // HACK: selectedCell & selectedElement is first cell in slide, backwards compatibility
  // Remove in v3?
  this.selectedCell = slide.cells[0];
  this.selectedElement = this.selectedElements[0];
};

proto.unselectSelectedSlide = function() {
  if ( this.selectedSlide ) {
    this.selectedSlide.unselect();
  }
};

proto.selectInitialIndex = function() {
  var initialIndex = this.options.initialIndex;
  // already activated, select previous selectedIndex
  if ( this.isInitActivated ) {
    this.select( this.selectedIndex, false, true );
    return;
  }
  // select with selector string
  if ( initialIndex && typeof initialIndex == 'string' ) {
    var cell = this.queryCell( initialIndex );
    if ( cell ) {
      this.selectCell( initialIndex, false, true );
      return;
    }
  }

  var index = 0;
  // select with number
  if ( initialIndex && this.slides[ initialIndex ] ) {
    index = initialIndex;
  }
  // select instantly
  this.select( index, false, true );
};

/**
 * select slide from number or cell element
 * @param {Element or Number} elem
 */
proto.selectCell = function( value, isWrap, isInstant ) {
  // get cell
  var cell = this.queryCell( value );
  if ( !cell ) {
    return;
  }

  var index = this.getCellSlideIndex( cell );
  this.select( index, isWrap, isInstant );
};

proto.getCellSlideIndex = function( cell ) {
  // get index of slides that has cell
  for ( var i=0; i < this.slides.length; i++ ) {
    var slide = this.slides[i];
    var index = slide.cells.indexOf( cell );
    if ( index != -1 ) {
      return i;
    }
  }
};

// -------------------------- get cells -------------------------- //

/**
 * get Flickity.Cell, given an Element
 * @param {Element} elem
 * @returns {Flickity.Cell} item
 */
proto.getCell = function( elem ) {
  // loop through cells to get the one that matches
  for ( var i=0; i < this.cells.length; i++ ) {
    var cell = this.cells[i];
    if ( cell.element == elem ) {
      return cell;
    }
  }
};

/**
 * get collection of Flickity.Cells, given Elements
 * @param {Element, Array, NodeList} elems
 * @returns {Array} cells - Flickity.Cells
 */
proto.getCells = function( elems ) {
  elems = utils.makeArray( elems );
  var cells = [];
  elems.forEach( function( elem ) {
    var cell = this.getCell( elem );
    if ( cell ) {
      cells.push( cell );
    }
  }, this );
  return cells;
};

/**
 * get cell elements
 * @returns {Array} cellElems
 */
proto.getCellElements = function() {
  return this.cells.map( function( cell ) {
    return cell.element;
  });
};

/**
 * get parent cell from an element
 * @param {Element} elem
 * @returns {Flickit.Cell} cell
 */
proto.getParentCell = function( elem ) {
  // first check if elem is cell
  var cell = this.getCell( elem );
  if ( cell ) {
    return cell;
  }
  // try to get parent cell elem
  elem = utils.getParent( elem, '.flickity-slider > *' );
  return this.getCell( elem );
};

/**
 * get cells adjacent to a slide
 * @param {Integer} adjCount - number of adjacent slides
 * @param {Integer} index - index of slide to start
 * @returns {Array} cells - array of Flickity.Cells
 */
proto.getAdjacentCellElements = function( adjCount, index ) {
  if ( !adjCount ) {
    return this.selectedSlide.getCellElements();
  }
  index = index === undefined ? this.selectedIndex : index;

  var len = this.slides.length;
  if ( 1 + ( adjCount * 2 ) >= len ) {
    return this.getCellElements();
  }

  var cellElems = [];
  for ( var i = index - adjCount; i <= index + adjCount ; i++ ) {
    var slideIndex = this.options.wrapAround ? utils.modulo( i, len ) : i;
    var slide = this.slides[ slideIndex ];
    if ( slide ) {
      cellElems = cellElems.concat( slide.getCellElements() );
    }
  }
  return cellElems;
};

/**
 * select slide from number or cell element
 * @param {Element, Selector String, or Number} selector
 */
proto.queryCell = function( selector ) {
  if ( typeof selector == 'number' ) {
    // use number as index
    return this.cells[ selector ];
  }
  if ( typeof selector == 'string' ) {
    // do not select invalid selectors from hash: #123, #/. #791
    if ( selector.match(/^[#\.]?[\d\/]/) ) {
      return;
    }
    // use string as selector, get element
    selector = this.element.querySelector( selector );
  }
  // get cell from element
  return this.getCell( selector );
};

// -------------------------- events -------------------------- //

proto.uiChange = function() {
  this.emitEvent('uiChange');
};

// keep focus on element when child UI elements are clicked
proto.childUIPointerDown = function( event ) {
  // HACK iOS does not allow touch events to bubble up?!
  if ( event.type != 'touchstart' ) {
    event.preventDefault();
  }
  this.focus();
};

// ----- resize ----- //

proto.onresize = function() {
  this.watchCSS();
  this.resize();
};

utils.debounceMethod( Flickity, 'onresize', 150 );

proto.resize = function() {
  if ( !this.isActive ) {
    return;
  }
  this.getSize();
  // wrap values
  if ( this.options.wrapAround ) {
    this.x = utils.modulo( this.x, this.slideableWidth );
  }
  this.positionCells();
  this._getWrapShiftCells();
  this.setGallerySize();
  this.emitEvent('resize');
  // update selected index for group slides, instant
  // TODO: position can be lost between groups of various numbers
  var selectedElement = this.selectedElements && this.selectedElements[0];
  this.selectCell( selectedElement, false, true );
};

// watches the :after property, activates/deactivates
proto.watchCSS = function() {
  var watchOption = this.options.watchCSS;
  if ( !watchOption ) {
    return;
  }

  var afterContent = getComputedStyle( this.element, ':after' ).content;
  // activate if :after { content: 'flickity' }
  if ( afterContent.indexOf('flickity') != -1 ) {
    this.activate();
  } else {
    this.deactivate();
  }
};

// ----- keydown ----- //

// go previous/next if left/right keys pressed
proto.onkeydown = function( event ) {
  // only work if element is in focus
  var isNotFocused = document.activeElement && document.activeElement != this.element;
  if ( !this.options.accessibility ||isNotFocused ) {
    return;
  }

  var handler = Flickity.keyboardHandlers[ event.keyCode ];
  if ( handler ) {
    handler.call( this );
  }
};

Flickity.keyboardHandlers = {
  // left arrow
  37: function() {
    var leftMethod = this.options.rightToLeft ? 'next' : 'previous';
    this.uiChange();
    this[ leftMethod ]();
  },
  // right arrow
  39: function() {
    var rightMethod = this.options.rightToLeft ? 'previous' : 'next';
    this.uiChange();
    this[ rightMethod ]();
  },
};

// ----- focus ----- //

proto.focus = function() {
  // TODO remove scrollTo once focus options gets more support
  // https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/focus#Browser_compatibility
  var prevScrollY = window.pageYOffset;
  this.element.focus({ preventScroll: true });
  // hack to fix scroll jump after focus, #76
  if ( window.pageYOffset != prevScrollY ) {
    window.scrollTo( window.pageXOffset, prevScrollY );
  }
};

// -------------------------- destroy -------------------------- //

// deactivate all Flickity functionality, but keep stuff available
proto.deactivate = function() {
  if ( !this.isActive ) {
    return;
  }
  this.element.classList.remove('flickity-enabled');
  this.element.classList.remove('flickity-rtl');
  this.unselectSelectedSlide();
  // destroy cells
  this.cells.forEach( function( cell ) {
    cell.destroy();
  });
  this.element.removeChild( this.viewport );
  // move child elements back into element
  moveElements( this.slider.children, this.element );
  if ( this.options.accessibility ) {
    this.element.removeAttribute('tabIndex');
    this.element.removeEventListener( 'keydown', this );
  }
  // set flags
  this.isActive = false;
  this.emitEvent('deactivate');
};

proto.destroy = function() {
  this.deactivate();
  window.removeEventListener( 'resize', this );
  this.allOff();
  this.emitEvent('destroy');
  if ( jQuery && this.$element ) {
    jQuery.removeData( this.element, 'flickity' );
  }
  delete this.element.flickityGUID;
  delete instances[ this.guid ];
};

// -------------------------- prototype -------------------------- //

utils.extend( proto, animatePrototype );

// -------------------------- extras -------------------------- //

/**
 * get Flickity instance from element
 * @param {Element} elem
 * @returns {Flickity}
 */
Flickity.data = function( elem ) {
  elem = utils.getQueryElement( elem );
  var id = elem && elem.flickityGUID;
  return id && instances[ id ];
};

utils.htmlInit( Flickity, 'flickity' );

if ( jQuery && jQuery.bridget ) {
  jQuery.bridget( 'flickity', Flickity );
}

// set internal jQuery, for Webpack + jQuery v3, #478
Flickity.setJQuery = function( jq ) {
  jQuery = jq;
};

Flickity.Cell = Cell;
Flickity.Slide = Slide;

return Flickity;

}));


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(45);


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(15);

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles;

/***/ }),
/* 21 */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(15);

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;

/***/ }),
/* 23 */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * EvEmitter v1.1.0
 * Lil' event emitter
 * MIT License
 */

/* jshint unused: true, undef: true, strict: true */

( function( global, factory ) {
  // universal module definition
  /* jshint strict: false */ /* globals define, module, window */
  if ( true ) {
    // AMD - RequireJS
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}

}( typeof window != 'undefined' ? window : this, function() {

"use strict";

function EvEmitter() {}

var proto = EvEmitter.prototype;

proto.on = function( eventName, listener ) {
  if ( !eventName || !listener ) {
    return;
  }
  // set events hash
  var events = this._events = this._events || {};
  // set listeners array
  var listeners = events[ eventName ] = events[ eventName ] || [];
  // only add once
  if ( listeners.indexOf( listener ) == -1 ) {
    listeners.push( listener );
  }

  return this;
};

proto.once = function( eventName, listener ) {
  if ( !eventName || !listener ) {
    return;
  }
  // add event
  this.on( eventName, listener );
  // set once flag
  // set onceEvents hash
  var onceEvents = this._onceEvents = this._onceEvents || {};
  // set onceListeners object
  var onceListeners = onceEvents[ eventName ] = onceEvents[ eventName ] || {};
  // set flag
  onceListeners[ listener ] = true;

  return this;
};

proto.off = function( eventName, listener ) {
  var listeners = this._events && this._events[ eventName ];
  if ( !listeners || !listeners.length ) {
    return;
  }
  var index = listeners.indexOf( listener );
  if ( index != -1 ) {
    listeners.splice( index, 1 );
  }

  return this;
};

proto.emitEvent = function( eventName, args ) {
  var listeners = this._events && this._events[ eventName ];
  if ( !listeners || !listeners.length ) {
    return;
  }
  // copy over to avoid interference if .off() in listener
  listeners = listeners.slice(0);
  args = args || [];
  // once stuff
  var onceListeners = this._onceEvents && this._onceEvents[ eventName ];

  for ( var i=0; i < listeners.length; i++ ) {
    var listener = listeners[i]
    var isOnce = onceListeners && onceListeners[ listener ];
    if ( isOnce ) {
      // remove listener
      // remove before trigger to prevent recursion
      this.off( eventName, listener );
      // unset once flag
      delete onceListeners[ listener ];
    }
    // trigger listener
    listener.apply( this, args );
  }

  return this;
};

proto.allOff = function() {
  delete this._events;
  delete this._onceEvents;
};

return EvEmitter;

}));


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * getSize v2.0.3
 * measure size of elements
 * MIT license
 */

/* jshint browser: true, strict: true, undef: true, unused: true */
/* globals console: false */

( function( window, factory ) {
  /* jshint strict: false */ /* globals define, module */
  if ( true ) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}

})( window, function factory() {
'use strict';

// -------------------------- helpers -------------------------- //

// get a number from a string, not a percentage
function getStyleSize( value ) {
  var num = parseFloat( value );
  // not a percent like '100%', and a number
  var isValid = value.indexOf('%') == -1 && !isNaN( num );
  return isValid && num;
}

function noop() {}

var logError = typeof console == 'undefined' ? noop :
  function( message ) {
    console.error( message );
  };

// -------------------------- measurements -------------------------- //

var measurements = [
  'paddingLeft',
  'paddingRight',
  'paddingTop',
  'paddingBottom',
  'marginLeft',
  'marginRight',
  'marginTop',
  'marginBottom',
  'borderLeftWidth',
  'borderRightWidth',
  'borderTopWidth',
  'borderBottomWidth'
];

var measurementsLength = measurements.length;

function getZeroSize() {
  var size = {
    width: 0,
    height: 0,
    innerWidth: 0,
    innerHeight: 0,
    outerWidth: 0,
    outerHeight: 0
  };
  for ( var i=0; i < measurementsLength; i++ ) {
    var measurement = measurements[i];
    size[ measurement ] = 0;
  }
  return size;
}

// -------------------------- getStyle -------------------------- //

/**
 * getStyle, get style of element, check for Firefox bug
 * https://bugzilla.mozilla.org/show_bug.cgi?id=548397
 */
function getStyle( elem ) {
  var style = getComputedStyle( elem );
  if ( !style ) {
    logError( 'Style returned ' + style +
      '. Are you running this code in a hidden iframe on Firefox? ' +
      'See https://bit.ly/getsizebug1' );
  }
  return style;
}

// -------------------------- setup -------------------------- //

var isSetup = false;

var isBoxSizeOuter;

/**
 * setup
 * check isBoxSizerOuter
 * do on first getSize() rather than on page load for Firefox bug
 */
function setup() {
  // setup once
  if ( isSetup ) {
    return;
  }
  isSetup = true;

  // -------------------------- box sizing -------------------------- //

  /**
   * Chrome & Safari measure the outer-width on style.width on border-box elems
   * IE11 & Firefox<29 measures the inner-width
   */
  var div = document.createElement('div');
  div.style.width = '200px';
  div.style.padding = '1px 2px 3px 4px';
  div.style.borderStyle = 'solid';
  div.style.borderWidth = '1px 2px 3px 4px';
  div.style.boxSizing = 'border-box';

  var body = document.body || document.documentElement;
  body.appendChild( div );
  var style = getStyle( div );
  // round value for browser zoom. desandro/masonry#928
  isBoxSizeOuter = Math.round( getStyleSize( style.width ) ) == 200;
  getSize.isBoxSizeOuter = isBoxSizeOuter;

  body.removeChild( div );
}

// -------------------------- getSize -------------------------- //

function getSize( elem ) {
  setup();

  // use querySeletor if elem is string
  if ( typeof elem == 'string' ) {
    elem = document.querySelector( elem );
  }

  // do not proceed on non-objects
  if ( !elem || typeof elem != 'object' || !elem.nodeType ) {
    return;
  }

  var style = getStyle( elem );

  // if hidden, everything is 0
  if ( style.display == 'none' ) {
    return getZeroSize();
  }

  var size = {};
  size.width = elem.offsetWidth;
  size.height = elem.offsetHeight;

  var isBorderBox = size.isBorderBox = style.boxSizing == 'border-box';

  // get all measurements
  for ( var i=0; i < measurementsLength; i++ ) {
    var measurement = measurements[i];
    var value = style[ measurement ];
    var num = parseFloat( value );
    // any 'auto', 'medium' value will be 0
    size[ measurement ] = !isNaN( num ) ? num : 0;
  }

  var paddingWidth = size.paddingLeft + size.paddingRight;
  var paddingHeight = size.paddingTop + size.paddingBottom;
  var marginWidth = size.marginLeft + size.marginRight;
  var marginHeight = size.marginTop + size.marginBottom;
  var borderWidth = size.borderLeftWidth + size.borderRightWidth;
  var borderHeight = size.borderTopWidth + size.borderBottomWidth;

  var isBorderBoxSizeOuter = isBorderBox && isBoxSizeOuter;

  // overwrite width and height if we can get it from style
  var styleWidth = getStyleSize( style.width );
  if ( styleWidth !== false ) {
    size.width = styleWidth +
      // add padding and border unless it's already including it
      ( isBorderBoxSizeOuter ? 0 : paddingWidth + borderWidth );
  }

  var styleHeight = getStyleSize( style.height );
  if ( styleHeight !== false ) {
    size.height = styleHeight +
      // add padding and border unless it's already including it
      ( isBorderBoxSizeOuter ? 0 : paddingHeight + borderHeight );
  }

  size.innerWidth = size.width - ( paddingWidth + borderWidth );
  size.innerHeight = size.height - ( paddingHeight + borderHeight );

  size.outerWidth = size.width + marginWidth;
  size.outerHeight = size.height + marginHeight;

  return size;
}

return getSize;

});


/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Banner; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_5__);







function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Banner = /*#__PURE__*/function (_HTMLElement) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(Banner, _HTMLElement);

  var _super = _createSuper(Banner);

  function Banner() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Banner);

    return _super.apply(this, arguments);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Banner, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.closeButton = this.querySelector('[data-toggle-trigger]');
      this.checkSessionStorage();
    }
  }, {
    key: "checkSessionStorage",
    value: function checkSessionStorage() {
      var _this = this;

      if (sessionStorage.getItem('bannerStatus') !== 'noShow') {
        this.setAttribute('data-show', '');
        this.closeButton.addEventListener('click', function () {
          _this.removeAttribute('data-show');

          sessionStorage.setItem('bannerStatus', 'noShow');
        });
      }
    }
  }]);

  return Banner;
}( /*#__PURE__*/_babel_runtime_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_5___default()(HTMLElement));

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LazyLoadImages; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);



/**
 * Whenever we AJAX something, we should call an event on document.body that this class picks up
 *
 * let customEvent = new CustomEvent('Ajax:Rendered', {
 *   bubbles: true
 * })
 *
 * document.body.dispatchEvent(customEvent)
 */
var LazyLoadImages = /*#__PURE__*/function () {
  // with our All.js instantiation, this does not get called until DOM ready, so no check
  function LazyLoadImages() {
    var _this = this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, LazyLoadImages);

    if ('IntersectionObserver' in window) {
      this.modernBrowsers();
      document.body.addEventListener('Ajax:Rendered', function () {
        _this.modernBrowsers();
      });
      return;
    }

    this.oldskool();
    document.body.addEventListener('Ajax:Rendered', function () {
      _this.oldskool();
    });
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(LazyLoadImages, [{
    key: "applySrc",
    value: function applySrc(element) {
      if (element.dataset.src) {
        element.src = element.dataset.src;
        element.removeAttribute('data-src');
      }

      if (element.dataset.srcset) {
        element.srcset = element.dataset.srcset;
        element.removeAttribute('data-srcset');
      }

      element.removeAttribute('data-lazy-load');
    }
  }, {
    key: "loadImage",
    value: function loadImage(image) {
      var _this2 = this;

      var picture = image.closest('picture');

      if (picture) {
        var lazyElements = picture.querySelectorAll('[data-src], [data-srcset]');
        lazyElements.forEach(function (element) {
          return _this2.applySrc(element);
        });
      }

      if (!picture) {
        this.applySrc(image);
      }
    }
  }, {
    key: "modernBrowsers",
    value: function modernBrowsers() {
      var _this3 = this;

      var lazyImages = [].slice.call(document.querySelectorAll('img[data-lazy-load]'));
      var intersectionObserverOptions = {
        rootMargin: "".concat(window.innerWidth, "px ").concat(window.innerHeight, "px")
      };
      var lazyImageObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            var lazyImage = entry.target;

            _this3.loadImage(lazyImage);

            lazyImageObserver.unobserve(lazyImage);
          }
        });
      }, intersectionObserverOptions);
      lazyImages.forEach(function (image) {
        lazyImageObserver.observe(image);
      });
    }
  }, {
    key: "oldskool",
    value: function oldskool() {
      var _this4 = this;

      var active = false;
      var lazyImages = [].slice.call(document.querySelectorAll('img[data-lazy-load]'));

      var lazyLoad = function lazyLoad() {
        if (active === false) {
          active = true;
          setTimeout(function () {
            lazyImages.forEach(function (lazyImage) {
              var imageBounds = lazyImage.getBoundingClientRect();

              if (imageBounds.top <= window.innerHeight * 2 && imageBounds.bottom >= -window.innerHeight && window.getComputedStyle(lazyImage).display !== 'none') {
                _this4.loadImage(lazyImage);

                lazyImages = lazyImages.filter(function (image) {
                  return image !== lazyImage;
                });

                if (lazyImages.length === 0) {
                  document.removeEventListener('scroll', lazyLoad);
                  window.removeEventListener('resize', lazyLoad);
                  window.removeEventListener('orientationchange', lazyLoad);
                }
              }
            });
            active = false;
          }, 200);
        }
      };

      document.addEventListener('scroll', lazyLoad, true);
      window.addEventListener('resize', lazyLoad);
      window.addEventListener('orientationchange', lazyLoad);
      lazyLoad();
    }
  }]);

  return LazyLoadImages;
}();

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PsToggler; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_5__);







function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * Element that handles toggling state for another element on the page.
 * Note: Styling can be handled on an individual need basis by adding a class
 * to the element.
 */
var PsToggler = /*#__PURE__*/function (_HTMLElement) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(PsToggler, _HTMLElement);

  var _super = _createSuper(PsToggler);

  function PsToggler() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, PsToggler);

    return _super.apply(this, arguments);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(PsToggler, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      var _this = this;

      var myToggleName = this.getAttribute('data-toggle');
      var allMyToggles = this.querySelectorAll('[data-toggle-trigger="' + myToggleName + '"]');
      var self = this;
      /**
       * Handles toggling behavior. This is here so we can use a closure to pass self in
       *
       * Note: We set a data attribute on ourselves as well as the body.
       * It has the name of the toggle in it, so we can have multiple toggles at once on the page,
       * as well as toggles within toggles.
       */

      this.handleToggle = function (event) {
        event.preventDefault();
        var toggleName = this.getAttribute('data-toggle-trigger');
        var toggleDataAttribute = 'data-toggle-in';

        if (toggleName) {
          if (self.getAttribute(toggleDataAttribute) === toggleName) {
            document.body.removeAttribute(toggleDataAttribute);
            self.removeAttribute(toggleDataAttribute, toggleName);
          } else {
            document.body.setAttribute(toggleDataAttribute, toggleName);
            self.setAttribute(toggleDataAttribute, toggleName);
          }
        }
      };

      allMyToggles.forEach(function (item) {
        return item.addEventListener('click', _this.handleToggle, true);
      });
    }
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      var _this2 = this;

      var allToggles = this.querySelectorAll('[data-toggle-trigger]');
      allToggles.forEach(function (item) {
        return item.removeEventListener('click', _this2.handleToggle, true);
      });
    }
  }]);

  return PsToggler;
}( /*#__PURE__*/_babel_runtime_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_5___default()(HTMLElement));

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerticalBookSearchModule; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _form_Form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(14);







function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }


var VerticalBookSearchModule = /*#__PURE__*/function (_Form) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(VerticalBookSearchModule, _Form);

  var _super = _createSuper(VerticalBookSearchModule);

  function VerticalBookSearchModule() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, VerticalBookSearchModule);

    return _super.apply(this, arguments);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(VerticalBookSearchModule, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.dateFrom = this.querySelector('[name=yrl]');
      this.dateTo = this.querySelector('[name=yrh]');
      this.validationErrors = this.querySelector(".".concat(this.dateFrom.parentElement.dataset.errorsElement));
      this.testRangeValidity = this.isValid.bind(this);
      this.dateFrom.addEventListener('focusout', this.testRangeValidity);
      this.dateTo.addEventListener('focusout', this.testRangeValidity);

      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(VerticalBookSearchModule.prototype), "connectedCallback", this).call(this);
    }
  }, {
    key: "handleEvent",
    value: function handleEvent(event) {
      if (event.type === 'submit') {
        this.hideDateRangeValidationError();
        event.preventDefault();

        if (!this.isValid()) {
          return;
        }

        this.form.submit();
      }
    }
  }, {
    key: "isValid",
    value: function isValid() {
      // test against pattern first
      var datesValidType = this.dateFrom.validity.valid && this.dateTo.validity.valid;
      var numFrom = Number(this.dateFrom.value);
      var numTo = Number(this.dateTo.value);
      var datesValidRange = numTo > numFrom || numTo === numFrom;

      if (!datesValidType || !datesValidRange) {
        this.showDateRangeValidationError();
        return false;
      }

      this.hideDateRangeValidationError();
      return true;
    }
  }, {
    key: "showDateRangeValidationError",
    value: function showDateRangeValidationError() {
      if (this.validationErrors.classList.contains('hidden')) {
        this.validationErrors.classList.remove('hidden');
      }
    }
  }, {
    key: "hideDateRangeValidationError",
    value: function hideDateRangeValidationError() {
      if (!this.validationErrors.classList.contains('hidden')) {
        this.validationErrors.classList.add('hidden');
      }
    }
  }]);

  return VerticalBookSearchModule;
}(_form_Form__WEBPACK_IMPORTED_MODULE_6__[/* Form */ "a"]);

/***/ }),
/* 30 */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

;(function(global) {
'use strict';

var extend = __webpack_require__(46);

var hoverintent = function(el, over, out) {
  var x, y, pX, pY;
  var h = {},
    state = 0,
    timer = 0;

  var options = {
    sensitivity: 7,
    interval: 100,
    timeout: 0
  };

  function delay(el, outEvent, e) {
    if (timer) timer = clearTimeout(timer);
    state = 0;
    return outEvent.call(el, e);
  }

  function dispatch(e, event, over) {
    var tracker = function(e) {
      x = e.clientX;
      y = e.clientY;
    };

    if (timer) timer = clearTimeout(timer);
    if (over) {
      pX = e.clientX;
      pY = e.clientY;
      el.addEventListener('mousemove', tracker, false);

      if (state !== 1) {
        timer = setTimeout(function() {
          compare(el, event, e);
        }, options.interval);
      }
    } else {
      el.removeEventListener('mousemove', tracker, false);

      if (state === 1) {
        timer = setTimeout(function() {
          delay(el, event, e);
        }, options.timeout);
      }
    }
    return this;
  }

  function compare(el, overEvent, e) {
    if (timer) timer = clearTimeout(timer);
    if ((Math.abs(pX - x) + Math.abs(pY - y)) < options.sensitivity) {
      state = 1;
      return overEvent.call(el, e);
    } else {
      pX = x;
      pY = y;
      timer = setTimeout(function() {
        compare(el, overEvent, e);
      }, options.interval);
    }
  }

  // Public methods
  h.options = function(opt) {
    options = extend({}, options, opt);
  };

  function dispatchOver(e) {
    dispatch(e, over, true);
  }

  function dispatchOut(e) {
    dispatch(e, out);
  }

  h.remove = function() {
    if (!el) return;
    el.removeEventListener('mouseover', dispatchOver, false);
    el.removeEventListener('mouseout', dispatchOut, false);
  };

  if (el) {
    el.addEventListener('mouseover', dispatchOver, false);
    el.addEventListener('mouseout', dispatchOut, false);
  }

  return h;
};

global.hoverintent = hoverintent;
if ( true && module.exports) module.exports = hoverintent;
})(this);


/***/ }),
/* 32 */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),
/* 33 */
/***/ (function(module, exports) {

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

module.exports = _isNativeFunction;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(17);

var isNativeReflectConstruct = __webpack_require__(35);

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    module.exports = _construct = Reflect.construct;
  } else {
    module.exports = _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

module.exports = _construct;

/***/ }),
/* 35 */
/***/ (function(module, exports) {

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

module.exports = _isNativeReflectConstruct;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var getPrototypeOf = __webpack_require__(0);

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = getPrototypeOf(object);
    if (object === null) break;
  }

  return object;
}

module.exports = _superPropBase;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * Flickity v2.2.1
 * Touch, responsive, flickable carousels
 *
 * Licensed GPLv3 for open source use
 * or Flickity Commercial License for commercial use
 *
 * https://flickity.metafizzy.co
 * Copyright 2015-2019 Metafizzy
 */

( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */
  if ( true ) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
      __webpack_require__(18),
      __webpack_require__(51),
      __webpack_require__(53),
      __webpack_require__(54),
      __webpack_require__(55),
      __webpack_require__(56),
      __webpack_require__(57)
    ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}

})( window, function factory( Flickity ) {
  /*jshint strict: false*/
  return Flickity;
});


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * Unipointer v2.3.0
 * base class for doing one thing with pointer event
 * MIT license
 */

/*jshint browser: true, undef: true, unused: true, strict: true */

( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */ /*global define, module, require */
  if ( true ) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
      __webpack_require__(24)
    ], __WEBPACK_AMD_DEFINE_RESULT__ = (function( EvEmitter ) {
      return factory( window, EvEmitter );
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}

}( window, function factory( window, EvEmitter ) {

'use strict';

function noop() {}

function Unipointer() {}

// inherit EvEmitter
var proto = Unipointer.prototype = Object.create( EvEmitter.prototype );

proto.bindStartEvent = function( elem ) {
  this._bindStartEvent( elem, true );
};

proto.unbindStartEvent = function( elem ) {
  this._bindStartEvent( elem, false );
};

/**
 * Add or remove start event
 * @param {Boolean} isAdd - remove if falsey
 */
proto._bindStartEvent = function( elem, isAdd ) {
  // munge isAdd, default to true
  isAdd = isAdd === undefined ? true : isAdd;
  var bindMethod = isAdd ? 'addEventListener' : 'removeEventListener';

  // default to mouse events
  var startEvent = 'mousedown';
  if ( window.PointerEvent ) {
    // Pointer Events
    startEvent = 'pointerdown';
  } else if ( 'ontouchstart' in window ) {
    // Touch Events. iOS Safari
    startEvent = 'touchstart';
  }
  elem[ bindMethod ]( startEvent, this );
};

// trigger handler methods for events
proto.handleEvent = function( event ) {
  var method = 'on' + event.type;
  if ( this[ method ] ) {
    this[ method ]( event );
  }
};

// returns the touch that we're keeping track of
proto.getTouch = function( touches ) {
  for ( var i=0; i < touches.length; i++ ) {
    var touch = touches[i];
    if ( touch.identifier == this.pointerIdentifier ) {
      return touch;
    }
  }
};

// ----- start event ----- //

proto.onmousedown = function( event ) {
  // dismiss clicks from right or middle buttons
  var button = event.button;
  if ( button && ( button !== 0 && button !== 1 ) ) {
    return;
  }
  this._pointerDown( event, event );
};

proto.ontouchstart = function( event ) {
  this._pointerDown( event, event.changedTouches[0] );
};

proto.onpointerdown = function( event ) {
  this._pointerDown( event, event );
};

/**
 * pointer start
 * @param {Event} event
 * @param {Event or Touch} pointer
 */
proto._pointerDown = function( event, pointer ) {
  // dismiss right click and other pointers
  // button = 0 is okay, 1-4 not
  if ( event.button || this.isPointerDown ) {
    return;
  }

  this.isPointerDown = true;
  // save pointer identifier to match up touch events
  this.pointerIdentifier = pointer.pointerId !== undefined ?
    // pointerId for pointer events, touch.indentifier for touch events
    pointer.pointerId : pointer.identifier;

  this.pointerDown( event, pointer );
};

proto.pointerDown = function( event, pointer ) {
  this._bindPostStartEvents( event );
  this.emitEvent( 'pointerDown', [ event, pointer ] );
};

// hash of events to be bound after start event
var postStartEvents = {
  mousedown: [ 'mousemove', 'mouseup' ],
  touchstart: [ 'touchmove', 'touchend', 'touchcancel' ],
  pointerdown: [ 'pointermove', 'pointerup', 'pointercancel' ],
};

proto._bindPostStartEvents = function( event ) {
  if ( !event ) {
    return;
  }
  // get proper events to match start event
  var events = postStartEvents[ event.type ];
  // bind events to node
  events.forEach( function( eventName ) {
    window.addEventListener( eventName, this );
  }, this );
  // save these arguments
  this._boundPointerEvents = events;
};

proto._unbindPostStartEvents = function() {
  // check for _boundEvents, in case dragEnd triggered twice (old IE8 bug)
  if ( !this._boundPointerEvents ) {
    return;
  }
  this._boundPointerEvents.forEach( function( eventName ) {
    window.removeEventListener( eventName, this );
  }, this );

  delete this._boundPointerEvents;
};

// ----- move event ----- //

proto.onmousemove = function( event ) {
  this._pointerMove( event, event );
};

proto.onpointermove = function( event ) {
  if ( event.pointerId == this.pointerIdentifier ) {
    this._pointerMove( event, event );
  }
};

proto.ontouchmove = function( event ) {
  var touch = this.getTouch( event.changedTouches );
  if ( touch ) {
    this._pointerMove( event, touch );
  }
};

/**
 * pointer move
 * @param {Event} event
 * @param {Event or Touch} pointer
 * @private
 */
proto._pointerMove = function( event, pointer ) {
  this.pointerMove( event, pointer );
};

// public
proto.pointerMove = function( event, pointer ) {
  this.emitEvent( 'pointerMove', [ event, pointer ] );
};

// ----- end event ----- //


proto.onmouseup = function( event ) {
  this._pointerUp( event, event );
};

proto.onpointerup = function( event ) {
  if ( event.pointerId == this.pointerIdentifier ) {
    this._pointerUp( event, event );
  }
};

proto.ontouchend = function( event ) {
  var touch = this.getTouch( event.changedTouches );
  if ( touch ) {
    this._pointerUp( event, touch );
  }
};

/**
 * pointer up
 * @param {Event} event
 * @param {Event or Touch} pointer
 * @private
 */
proto._pointerUp = function( event, pointer ) {
  this._pointerDone();
  this.pointerUp( event, pointer );
};

// public
proto.pointerUp = function( event, pointer ) {
  this.emitEvent( 'pointerUp', [ event, pointer ] );
};

// ----- pointer done ----- //

// triggered on pointer up & pointer cancel
proto._pointerDone = function() {
  this._pointerReset();
  this._unbindPostStartEvents();
  this.pointerDone();
};

proto._pointerReset = function() {
  // reset properties
  this.isPointerDown = false;
  delete this.pointerIdentifier;
};

proto.pointerDone = noop;

// ----- pointer cancel ----- //

proto.onpointercancel = function( event ) {
  if ( event.pointerId == this.pointerIdentifier ) {
    this._pointerCancel( event, event );
  }
};

proto.ontouchcancel = function( event ) {
  var touch = this.getTouch( event.changedTouches );
  if ( touch ) {
    this._pointerCancel( event, touch );
  }
};

/**
 * pointer cancel
 * @param {Event} event
 * @param {Event or Touch} pointer
 * @private
 */
proto._pointerCancel = function( event, pointer ) {
  this._pointerDone();
  this.pointerCancel( event, pointer );
};

// public
proto.pointerCancel = function( event, pointer ) {
  this.emitEvent( 'pointerCancel', [ event, pointer ] );
};

// -----  ----- //

// utility function for getting x/y coords from event
Unipointer.getPointerPoint = function( pointer ) {
  return {
    x: pointer.pageX,
    y: pointer.pageY
  };
};

// -----  ----- //

return Unipointer;

}));


/***/ }),
/* 39 */,
/* 40 */,
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * Flickity hash v1.0.3
 * Enable hash navigation for Flickity
 */

/*jshint browser: true, undef: true, unused: true, strict: true*/

( function( window, factory ) {
  // universal module definition
  /*jshint strict: false */ /*globals define, module, require */
  if ( true ) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
      __webpack_require__(37),
    ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}

}( window, function factory( Flickity ) {

'use strict';

Flickity.createMethods.push('_createHash');

var proto = Flickity.prototype;

proto._createHash = function() {
  if ( !this.options.hash ) {
    return;
  }
  this.connectedHashLinks = [];
  // hash link listener
  // use HTML5 history pushState to prevent page scroll jump
  this.onHashLinkClick = function( event ) {
    event.preventDefault();
    this.selectCell( event.currentTarget.hash );
    history.replaceState( null, '', event.currentTarget.hash );
  }.bind( this );

  // events
  this.on( 'activate', this.activateHash );
  this.on( 'deactivate', this.deactivateHash );
};

proto.activateHash = function() {
  this.on( 'change', this.onChangeHash );

  // overwrite initialIndex
  if ( this.options.initialIndex === undefined && location.hash ) {
    var cell = this.queryCell( location.hash );
    if ( cell ) {
      this.options.initialIndex = this.getCellSlideIndex( cell );
    }
  }

  this.connectHashLinks();
};


proto.deactivateHash = function() {
  this.off( 'change', this.onChangeHash );
  this.disconnectHashLinks();
};

proto.onChangeHash = function() {
  var id = this.selectedElement.id;
  if ( id ) {
    var url = '#' + id;
    history.replaceState( null, '', url );
  }
};


proto.connectHashLinks = function() {
  var links = document.querySelectorAll('a');
  for ( var i=0; i < links.length; i++ ) {
    this.connectHashLink( links[i] );
  }
};

// used to test if link is on same page
var proxyLink = document.createElement('a');

proto.connectHashLink = function( link ) {
  if ( !link.hash ) {
    return;
  }
  // check that link is for the same page
  proxyLink.href = link.href;
  if ( proxyLink.pathname != location.pathname ) {
    return;
  }
  var cell = this.queryCell( link.hash );
  if ( !cell ) {
    return;
  }
  link.addEventListener( 'click', this.onHashLinkClick );
  this.connectedHashLinks.push( link );
};

proto.disconnectHashLinks = function() {
  this.connectedHashLinks.forEach( function( link ) {
    link.removeEventListener( 'click', this.onHashLinkClick );
  }, this );
  this.connectedHashLinks = [];
};

// -----  ----- //

return Flickity;

}));


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {"object"==typeof navigator&&function(e,t){ true?module.exports=t():undefined}(this,(function(){"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function i(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function s(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function r(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)i=s[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)i=s[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var i=[],n=!0,a=!1,s=void 0;try{for(var r,o=e[Symbol.iterator]();!(n=(r=o.next()).done)&&(i.push(r.value),!t||i.length!==t);n=!0);}catch(e){a=!0,s=e}finally{try{n||null==o.return||o.return()}finally{if(a)throw s}}return i}(e,t)||c(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e){return function(e){if(Array.isArray(e))return u(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||c(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,t){if(e){if("string"==typeof e)return u(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?u(e,t):void 0}}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=new Array(t);i<t;i++)n[i]=e[i];return n}function d(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function h(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function p(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function m(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?p(Object(i),!0).forEach((function(t){h(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):p(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}var f={addCSS:!0,thumbWidth:15,watch:!0};function g(e,t){return function(){return Array.from(document.querySelectorAll(t)).includes(this)}.call(e,t)}var y=function(e){return null!=e?e.constructor:null},v=function(e,t){return!!(e&&t&&e instanceof t)},b=function(e){return null==e},w=function(e){return y(e)===Object},k=function(e){return y(e)===String},T=function(e){return Array.isArray(e)},C=function(e){return v(e,NodeList)},A=k,S=T,P=C,E=function(e){return v(e,Element)},N=function(e){return v(e,Event)},M=function(e){return b(e)||(k(e)||T(e)||C(e))&&!e.length||w(e)&&!Object.keys(e).length};function x(e,t){if(1>t){var i=function(e){var t="".concat(e).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);return t?Math.max(0,(t[1]?t[1].length:0)-(t[2]?+t[2]:0)):0}(t);return parseFloat(e.toFixed(i))}return Math.round(e/t)*t}var I,L,O,_=function(){function e(t,i){(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")})(this,e),E(t)?this.element=t:A(t)&&(this.element=document.querySelector(t)),E(this.element)&&M(this.element.rangeTouch)&&(this.config=m({},f,{},i),this.init())}return function(e,t,i){t&&d(e.prototype,t),i&&d(e,i)}(e,[{key:"init",value:function(){e.enabled&&(this.config.addCSS&&(this.element.style.userSelect="none",this.element.style.webKitUserSelect="none",this.element.style.touchAction="manipulation"),this.listeners(!0),this.element.rangeTouch=this)}},{key:"destroy",value:function(){e.enabled&&(this.config.addCSS&&(this.element.style.userSelect="",this.element.style.webKitUserSelect="",this.element.style.touchAction=""),this.listeners(!1),this.element.rangeTouch=null)}},{key:"listeners",value:function(e){var t=this,i=e?"addEventListener":"removeEventListener";["touchstart","touchmove","touchend"].forEach((function(e){t.element[i](e,(function(e){return t.set(e)}),!1)}))}},{key:"get",value:function(t){if(!e.enabled||!N(t))return null;var i,n=t.target,a=t.changedTouches[0],s=parseFloat(n.getAttribute("min"))||0,r=parseFloat(n.getAttribute("max"))||100,o=parseFloat(n.getAttribute("step"))||1,l=n.getBoundingClientRect(),c=100/l.width*(this.config.thumbWidth/2)/100;return 0>(i=100/l.width*(a.clientX-l.left))?i=0:100<i&&(i=100),50>i?i-=(100-2*i)*c:50<i&&(i+=2*(i-50)*c),s+x(i/100*(r-s),o)}},{key:"set",value:function(t){e.enabled&&N(t)&&!t.target.disabled&&(t.preventDefault(),t.target.value=this.get(t),function(e,t){if(e&&t){var i=new Event(t,{bubbles:!0});e.dispatchEvent(i)}}(t.target,"touchend"===t.type?"change":"input"))}}],[{key:"setup",value:function(t){var i=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},n=null;if(M(t)||A(t)?n=Array.from(document.querySelectorAll(A(t)?t:'input[type="range"]')):E(t)?n=[t]:P(t)?n=Array.from(t):S(t)&&(n=t.filter(E)),M(n))return null;var a=m({},f,{},i);if(A(t)&&a.watch){var s=new MutationObserver((function(i){Array.from(i).forEach((function(i){Array.from(i.addedNodes).forEach((function(i){E(i)&&g(i,t)&&new e(i,a)}))}))}));s.observe(document.body,{childList:!0,subtree:!0})}return n.map((function(t){return new e(t,i)}))}},{key:"enabled",get:function(){return"ontouchstart"in document.documentElement}}]),e}(),j=function(e){return null!=e?e.constructor:null},q=function(e,t){return Boolean(e&&t&&e instanceof t)},D=function(e){return null==e},H=function(e){return j(e)===Object},F=function(e){return j(e)===String},R=function(e){return j(e)===Function},V=function(e){return Array.isArray(e)},B=function(e){return q(e,NodeList)},U=function(e){return D(e)||(F(e)||V(e)||B(e))&&!e.length||H(e)&&!Object.keys(e).length},W=D,z=H,K=function(e){return j(e)===Number&&!Number.isNaN(e)},Y=F,Q=function(e){return j(e)===Boolean},X=R,$=V,J=B,G=function(e){return q(e,Element)},Z=function(e){return q(e,Event)},ee=function(e){return q(e,KeyboardEvent)},te=function(e){return q(e,TextTrack)||!D(e)&&F(e.kind)},ie=function(e){return q(e,Promise)&&R(e.then)},ne=function(e){if(q(e,window.URL))return!0;if(!F(e))return!1;var t=e;e.startsWith("http://")&&e.startsWith("https://")||(t="http://".concat(e));try{return!U(new URL(t).hostname)}catch(e){return!1}},ae=U,se=(I=document.createElement("span"),L={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"},O=Object.keys(L).find((function(e){return void 0!==I.style[e]})),!!Y(O)&&L[O]);function re(e,t){setTimeout((function(){try{e.hidden=!0,e.offsetHeight,e.hidden=!1}catch(e){}}),t)}var oe={isIE:
/* @cc_on!@ */
!!document.documentMode,isEdge:window.navigator.userAgent.includes("Edge"),isWebkit:"WebkitAppearance"in document.documentElement.style&&!/Edge/.test(navigator.userAgent),isIPhone:/(iPhone|iPod)/gi.test(navigator.platform),isIos:/(iPad|iPhone|iPod)/gi.test(navigator.platform)};function le(e,t){return t.split(".").reduce((function(e,t){return e&&e[t]}),e)}function ce(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length,i=new Array(t>1?t-1:0),a=1;a<t;a++)i[a-1]=arguments[a];if(!i.length)return e;var s=i.shift();return z(s)?(Object.keys(s).forEach((function(t){z(s[t])?(Object.keys(e).includes(t)||Object.assign(e,n({},t,{})),ce(e[t],s[t])):Object.assign(e,n({},t,s[t]))})),ce.apply(void 0,[e].concat(i))):e}function ue(e,t){var i=e.length?e:[e];Array.from(i).reverse().forEach((function(e,i){var n=i>0?t.cloneNode(!0):t,a=e.parentNode,s=e.nextSibling;n.appendChild(e),s?a.insertBefore(n,s):a.appendChild(n)}))}function de(e,t){G(e)&&!ae(t)&&Object.entries(t).filter((function(e){var t=o(e,2)[1];return!W(t)})).forEach((function(t){var i=o(t,2),n=i[0],a=i[1];return e.setAttribute(n,a)}))}function he(e,t,i){var n=document.createElement(e);return z(t)&&de(n,t),Y(i)&&(n.innerText=i),n}function pe(e,t,i,n){G(t)&&t.appendChild(he(e,i,n))}function me(e){J(e)||$(e)?Array.from(e).forEach(me):G(e)&&G(e.parentNode)&&e.parentNode.removeChild(e)}function fe(e){if(G(e))for(var t=e.childNodes.length;t>0;)e.removeChild(e.lastChild),t-=1}function ge(e,t){return G(t)&&G(t.parentNode)&&G(e)?(t.parentNode.replaceChild(e,t),e):null}function ye(e,t){if(!Y(e)||ae(e))return{};var i={},n=ce({},t);return e.split(",").forEach((function(e){var t=e.trim(),a=t.replace(".",""),s=t.replace(/[[\]]/g,"").split("="),r=o(s,1)[0],l=s.length>1?s[1].replace(/["']/g,""):"";switch(t.charAt(0)){case".":Y(n.class)?i.class="".concat(n.class," ").concat(a):i.class=a;break;case"#":i.id=t.replace("#","");break;case"[":i[r]=l}})),ce(n,i)}function ve(e,t){if(G(e)){var i=t;Q(i)||(i=!e.hidden),e.hidden=i}}function be(e,t,i){if(J(e))return Array.from(e).map((function(e){return be(e,t,i)}));if(G(e)){var n="toggle";return void 0!==i&&(n=i?"add":"remove"),e.classList[n](t),e.classList.contains(t)}return!1}function we(e,t){return G(e)&&e.classList.contains(t)}function ke(e,t){var i=Element.prototype;return(i.matches||i.webkitMatchesSelector||i.mozMatchesSelector||i.msMatchesSelector||function(){return Array.from(document.querySelectorAll(t)).includes(this)}).call(e,t)}function Te(e){return this.elements.container.querySelectorAll(e)}function Ce(e){return this.elements.container.querySelector(e)}function Ae(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];G(e)&&(e.focus({preventScroll:!0}),t&&be(e,this.config.classNames.tabFocus))}var Se,Pe={"audio/ogg":"vorbis","audio/wav":"1","video/webm":"vp8, vorbis","video/mp4":"avc1.42E01E, mp4a.40.2","video/ogg":"theora"},Ee={audio:"canPlayType"in document.createElement("audio"),video:"canPlayType"in document.createElement("video"),check:function(e,t,i){var n=oe.isIPhone&&i&&Ee.playsinline,a=Ee[e]||"html5"!==t;return{api:a,ui:a&&Ee.rangeInput&&("video"!==e||!oe.isIPhone||n)}},pip:!(oe.isIPhone||!X(he("video").webkitSetPresentationMode)&&(!document.pictureInPictureEnabled||he("video").disablePictureInPicture)),airplay:X(window.WebKitPlaybackTargetAvailabilityEvent),playsinline:"playsInline"in document.createElement("video"),mime:function(e){if(ae(e))return!1;var t=o(e.split("/"),1)[0],i=e;if(!this.isHTML5||t!==this.type)return!1;Object.keys(Pe).includes(i)&&(i+='; codecs="'.concat(Pe[e],'"'));try{return Boolean(i&&this.media.canPlayType(i).replace(/no/,""))}catch(e){return!1}},textTracks:"textTracks"in document.createElement("video"),rangeInput:(Se=document.createElement("input"),Se.type="range","range"===Se.type),touch:"ontouchstart"in document.documentElement,transitions:!1!==se,reducedMotion:"matchMedia"in window&&window.matchMedia("(prefers-reduced-motion)").matches},Ne=function(){var e=!1;try{var t=Object.defineProperty({},"passive",{get:function(){return e=!0,null}});window.addEventListener("test",null,t),window.removeEventListener("test",null,t)}catch(e){}return e}();function Me(e,t,i){var n=this,a=arguments.length>3&&void 0!==arguments[3]&&arguments[3],s=!(arguments.length>4&&void 0!==arguments[4])||arguments[4],r=arguments.length>5&&void 0!==arguments[5]&&arguments[5];if(e&&"addEventListener"in e&&!ae(t)&&X(i)){var o=t.split(" "),l=r;Ne&&(l={passive:s,capture:r}),o.forEach((function(t){n&&n.eventListeners&&a&&n.eventListeners.push({element:e,type:t,callback:i,options:l}),e[a?"addEventListener":"removeEventListener"](t,i,l)}))}}function xe(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",i=arguments.length>2?arguments[2]:void 0,n=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],a=arguments.length>4&&void 0!==arguments[4]&&arguments[4];Me.call(this,e,t,i,!0,n,a)}function Ie(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",i=arguments.length>2?arguments[2]:void 0,n=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],a=arguments.length>4&&void 0!==arguments[4]&&arguments[4];Me.call(this,e,t,i,!1,n,a)}function Le(e){var t=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2?arguments[2]:void 0,a=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],s=arguments.length>4&&void 0!==arguments[4]&&arguments[4],r=function r(){Ie(e,i,r,a,s);for(var o=arguments.length,l=new Array(o),c=0;c<o;c++)l[c]=arguments[c];n.apply(t,l)};Me.call(this,e,i,r,!0,a,s)}function Oe(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",i=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};if(G(e)&&!ae(t)){var a=new CustomEvent(t,{bubbles:i,detail:s(s({},n),{},{plyr:this})});e.dispatchEvent(a)}}function _e(){this&&this.eventListeners&&(this.eventListeners.forEach((function(e){var t=e.element,i=e.type,n=e.callback,a=e.options;t.removeEventListener(i,n,a)})),this.eventListeners=[])}function je(){var e=this;return new Promise((function(t){return e.ready?setTimeout(t,0):xe.call(e,e.elements.container,"ready",t)})).then((function(){}))}function qe(e){ie(e)&&e.then(null,(function(){}))}function De(e){return!!($(e)||Y(e)&&e.includes(":"))&&($(e)?e:e.split(":")).map(Number).every(K)}function He(e){if(!$(e)||!e.every(K))return null;var t=o(e,2),i=t[0],n=t[1],a=function e(t,i){return 0===i?t:e(i,t%i)}(i,n);return[i/a,n/a]}function Fe(e){var t=function(e){return De(e)?e.split(":").map(Number):null},i=t(e);if(null===i&&(i=t(this.config.ratio)),null===i&&!ae(this.embed)&&$(this.embed.ratio)&&(i=this.embed.ratio),null===i&&this.isHTML5){var n=this.media;i=He([n.videoWidth,n.videoHeight])}return i}function Re(e){if(!this.isVideo)return{};var t=this.elements.wrapper,i=Fe.call(this,e),n=o($(i)?i:[0,0],2),a=100/n[0]*n[1];if(t.style.paddingBottom="".concat(a,"%"),this.isVimeo&&!this.config.vimeo.premium&&this.supported.ui){var s=100/this.media.offsetWidth*parseInt(window.getComputedStyle(this.media).paddingBottom,10),r=(s-a)/(s/50);this.media.style.transform="translateY(-".concat(r,"%)")}else this.isHTML5&&t.classList.toggle(this.config.classNames.videoFixedRatio,null!==i);return{padding:a,ratio:i}}var Ve={getSources:function(){var e=this;return this.isHTML5?Array.from(this.media.querySelectorAll("source")).filter((function(t){var i=t.getAttribute("type");return!!ae(i)||Ee.mime.call(e,i)})):[]},getQualityOptions:function(){return this.config.quality.forced?this.config.quality.options:Ve.getSources.call(this).map((function(e){return Number(e.getAttribute("size"))})).filter(Boolean)},setup:function(){if(this.isHTML5){var e=this;e.options.speed=e.config.speed.options,ae(this.config.ratio)||Re.call(e),Object.defineProperty(e.media,"quality",{get:function(){var t=Ve.getSources.call(e).find((function(t){return t.getAttribute("src")===e.source}));return t&&Number(t.getAttribute("size"))},set:function(t){if(e.quality!==t){if(e.config.quality.forced&&X(e.config.quality.onChange))e.config.quality.onChange(t);else{var i=Ve.getSources.call(e).find((function(e){return Number(e.getAttribute("size"))===t}));if(!i)return;var n=e.media,a=n.currentTime,s=n.paused,r=n.preload,o=n.readyState,l=n.playbackRate;e.media.src=i.getAttribute("src"),("none"!==r||o)&&(e.once("loadedmetadata",(function(){e.speed=l,e.currentTime=a,s||qe(e.play())})),e.media.load())}Oe.call(e,e.media,"qualitychange",!1,{quality:t})}}})}},cancelRequests:function(){this.isHTML5&&(me(Ve.getSources.call(this)),this.media.setAttribute("src",this.config.blankVideo),this.media.load(),this.debug.log("Cancelled network requests"))}};function Be(e){return $(e)?e.filter((function(t,i){return e.indexOf(t)===i})):e}function Ue(e){for(var t=arguments.length,i=new Array(t>1?t-1:0),n=1;n<t;n++)i[n-1]=arguments[n];return ae(e)?e:e.toString().replace(/{(\d+)}/g,(function(e,t){return i[t].toString()}))}var We=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return e.replace(new RegExp(t.toString().replace(/([.*+?^=!:${}()|[\]/\\])/g,"\\$1"),"g"),i.toString())},ze=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e.toString().replace(/\w\S*/g,(function(e){return e.charAt(0).toUpperCase()+e.substr(1).toLowerCase()}))};function Ke(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=e.toString();return t=We(t,"-"," "),t=We(t,"_"," "),t=ze(t),We(t," ","")}function Ye(e){var t=document.createElement("div");return t.appendChild(e),t.innerHTML}var Qe={pip:"PIP",airplay:"AirPlay",html5:"HTML5",vimeo:"Vimeo",youtube:"YouTube"},Xe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(ae(e)||ae(t))return"";var i=le(t.i18n,e);if(ae(i))return Object.keys(Qe).includes(e)?Qe[e]:"";var n={"{seektime}":t.seekTime,"{title}":t.title};return Object.entries(n).forEach((function(e){var t=o(e,2),n=t[0],a=t[1];i=We(i,n,a)})),i},$e=function(){function t(i){e(this,t),this.enabled=i.config.storage.enabled,this.key=i.config.storage.key}return i(t,[{key:"get",value:function(e){if(!t.supported||!this.enabled)return null;var i=window.localStorage.getItem(this.key);if(ae(i))return null;var n=JSON.parse(i);return Y(e)&&e.length?n[e]:n}},{key:"set",value:function(e){if(t.supported&&this.enabled&&z(e)){var i=this.get();ae(i)&&(i={}),ce(i,e),window.localStorage.setItem(this.key,JSON.stringify(i))}}}],[{key:"supported",get:function(){try{if(!("localStorage"in window))return!1;return window.localStorage.setItem("___test","___test"),window.localStorage.removeItem("___test"),!0}catch(e){return!1}}}]),t}();function Je(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"text";return new Promise((function(i,n){try{var a=new XMLHttpRequest;if(!("withCredentials"in a))return;a.addEventListener("load",(function(){if("text"===t)try{i(JSON.parse(a.responseText))}catch(e){i(a.responseText)}else i(a.response)})),a.addEventListener("error",(function(){throw new Error(a.status)})),a.open("GET",e,!0),a.responseType=t,a.send()}catch(e){n(e)}}))}function Ge(e,t){if(Y(e)){var i=Y(t),n=function(){return null!==document.getElementById(t)},a=function(e,t){e.innerHTML=t,i&&n()||document.body.insertAdjacentElement("afterbegin",e)};if(!i||!n()){var s=$e.supported,r=document.createElement("div");if(r.setAttribute("hidden",""),i&&r.setAttribute("id",t),s){var o=window.localStorage.getItem("".concat("cache","-").concat(t));if(null!==o){var l=JSON.parse(o);a(r,l.content)}}Je(e).then((function(e){ae(e)||(s&&window.localStorage.setItem("".concat("cache","-").concat(t),JSON.stringify({content:e})),a(r,e))})).catch((function(){}))}}}var Ze=function(e){return Math.trunc(e/60/60%60,10)},et=function(e){return Math.trunc(e/60%60,10)},tt=function(e){return Math.trunc(e%60,10)};function it(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(!K(e))return it(void 0,t,i);var n=function(e){return"0".concat(e).slice(-2)},a=Ze(e),s=et(e),r=tt(e);return a=t||a>0?"".concat(a,":"):"","".concat(i&&e>0?"-":"").concat(a).concat(n(s),":").concat(n(r))}var nt={getIconUrl:function(){var e=new URL(this.config.iconUrl,window.location).host!==window.location.host||oe.isIE&&!window.svg4everybody;return{url:this.config.iconUrl,cors:e}},findElements:function(){try{return this.elements.controls=Ce.call(this,this.config.selectors.controls.wrapper),this.elements.buttons={play:Te.call(this,this.config.selectors.buttons.play),pause:Ce.call(this,this.config.selectors.buttons.pause),restart:Ce.call(this,this.config.selectors.buttons.restart),rewind:Ce.call(this,this.config.selectors.buttons.rewind),fastForward:Ce.call(this,this.config.selectors.buttons.fastForward),mute:Ce.call(this,this.config.selectors.buttons.mute),pip:Ce.call(this,this.config.selectors.buttons.pip),airplay:Ce.call(this,this.config.selectors.buttons.airplay),settings:Ce.call(this,this.config.selectors.buttons.settings),captions:Ce.call(this,this.config.selectors.buttons.captions),fullscreen:Ce.call(this,this.config.selectors.buttons.fullscreen)},this.elements.progress=Ce.call(this,this.config.selectors.progress),this.elements.inputs={seek:Ce.call(this,this.config.selectors.inputs.seek),volume:Ce.call(this,this.config.selectors.inputs.volume)},this.elements.display={buffer:Ce.call(this,this.config.selectors.display.buffer),currentTime:Ce.call(this,this.config.selectors.display.currentTime),duration:Ce.call(this,this.config.selectors.display.duration)},G(this.elements.progress)&&(this.elements.display.seekTooltip=this.elements.progress.querySelector(".".concat(this.config.classNames.tooltip))),!0}catch(e){return this.debug.warn("It looks like there is a problem with your custom controls HTML",e),this.toggleNativeControls(!0),!1}},createIcon:function(e,t){var i=nt.getIconUrl.call(this),n="".concat(i.cors?"":i.url,"#").concat(this.config.iconPrefix),a=document.createElementNS("http://www.w3.org/2000/svg","svg");de(a,ce(t,{"aria-hidden":"true",focusable:"false"}));var s=document.createElementNS("http://www.w3.org/2000/svg","use"),r="".concat(n,"-").concat(e);return"href"in s&&s.setAttributeNS("http://www.w3.org/1999/xlink","href",r),s.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",r),a.appendChild(s),a},createLabel:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=Xe(e,this.config),n=s(s({},t),{},{class:[t.class,this.config.classNames.hidden].filter(Boolean).join(" ")});return he("span",n,i)},createBadge:function(e){if(ae(e))return null;var t=he("span",{class:this.config.classNames.menu.value});return t.appendChild(he("span",{class:this.config.classNames.menu.badge},e)),t},createButton:function(e,t){var i=this,n=ce({},t),a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=e.toString();return(t=Ke(t)).charAt(0).toLowerCase()+t.slice(1)}(e),s={element:"button",toggle:!1,label:null,icon:null,labelPressed:null,iconPressed:null};switch(["element","icon","label"].forEach((function(e){Object.keys(n).includes(e)&&(s[e]=n[e],delete n[e])})),"button"!==s.element||Object.keys(n).includes("type")||(n.type="button"),Object.keys(n).includes("class")?n.class.split(" ").some((function(e){return e===i.config.classNames.control}))||ce(n,{class:"".concat(n.class," ").concat(this.config.classNames.control)}):n.class=this.config.classNames.control,e){case"play":s.toggle=!0,s.label="play",s.labelPressed="pause",s.icon="play",s.iconPressed="pause";break;case"mute":s.toggle=!0,s.label="mute",s.labelPressed="unmute",s.icon="volume",s.iconPressed="muted";break;case"captions":s.toggle=!0,s.label="enableCaptions",s.labelPressed="disableCaptions",s.icon="captions-off",s.iconPressed="captions-on";break;case"fullscreen":s.toggle=!0,s.label="enterFullscreen",s.labelPressed="exitFullscreen",s.icon="enter-fullscreen",s.iconPressed="exit-fullscreen";break;case"play-large":n.class+=" ".concat(this.config.classNames.control,"--overlaid"),a="play",s.label="play",s.icon="play";break;default:ae(s.label)&&(s.label=a),ae(s.icon)&&(s.icon=e)}var r=he(s.element);return s.toggle?(r.appendChild(nt.createIcon.call(this,s.iconPressed,{class:"icon--pressed"})),r.appendChild(nt.createIcon.call(this,s.icon,{class:"icon--not-pressed"})),r.appendChild(nt.createLabel.call(this,s.labelPressed,{class:"label--pressed"})),r.appendChild(nt.createLabel.call(this,s.label,{class:"label--not-pressed"}))):(r.appendChild(nt.createIcon.call(this,s.icon)),r.appendChild(nt.createLabel.call(this,s.label))),ce(n,ye(this.config.selectors.buttons[a],n)),de(r,n),"play"===a?($(this.elements.buttons[a])||(this.elements.buttons[a]=[]),this.elements.buttons[a].push(r)):this.elements.buttons[a]=r,r},createRange:function(e,t){var i=he("input",ce(ye(this.config.selectors.inputs[e]),{type:"range",min:0,max:100,step:.01,value:0,autocomplete:"off",role:"slider","aria-label":Xe(e,this.config),"aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":0},t));return this.elements.inputs[e]=i,nt.updateRangeFill.call(this,i),_.setup(i),i},createProgress:function(e,t){var i=he("progress",ce(ye(this.config.selectors.display[e]),{min:0,max:100,value:0,role:"progressbar","aria-hidden":!0},t));if("volume"!==e){i.appendChild(he("span",null,"0"));var n={played:"played",buffer:"buffered"}[e],a=n?Xe(n,this.config):"";i.innerText="% ".concat(a.toLowerCase())}return this.elements.display[e]=i,i},createTime:function(e,t){var i=ye(this.config.selectors.display[e],t),n=he("div",ce(i,{class:"".concat(i.class?i.class:""," ").concat(this.config.classNames.display.time," ").trim(),"aria-label":Xe(e,this.config)}),"00:00");return this.elements.display[e]=n,n},bindMenuItemShortcuts:function(e,t){var i=this;xe.call(this,e,"keydown keyup",(function(n){if([32,38,39,40].includes(n.which)&&(n.preventDefault(),n.stopPropagation(),"keydown"!==n.type)){var a,s=ke(e,'[role="menuitemradio"]');if(!s&&[32,39].includes(n.which))nt.showMenuPanel.call(i,t,!0);else 32!==n.which&&(40===n.which||s&&39===n.which?(a=e.nextElementSibling,G(a)||(a=e.parentNode.firstElementChild)):(a=e.previousElementSibling,G(a)||(a=e.parentNode.lastElementChild)),Ae.call(i,a,!0))}}),!1),xe.call(this,e,"keyup",(function(e){13===e.which&&nt.focusFirstMenuItem.call(i,null,!0)}))},createMenuItem:function(e){var t=this,i=e.value,n=e.list,a=e.type,s=e.title,r=e.badge,o=void 0===r?null:r,l=e.checked,c=void 0!==l&&l,u=ye(this.config.selectors.inputs[a]),d=he("button",ce(u,{type:"button",role:"menuitemradio",class:"".concat(this.config.classNames.control," ").concat(u.class?u.class:"").trim(),"aria-checked":c,value:i})),h=he("span");h.innerHTML=s,G(o)&&h.appendChild(o),d.appendChild(h),Object.defineProperty(d,"checked",{enumerable:!0,get:function(){return"true"===d.getAttribute("aria-checked")},set:function(e){e&&Array.from(d.parentNode.children).filter((function(e){return ke(e,'[role="menuitemradio"]')})).forEach((function(e){return e.setAttribute("aria-checked","false")})),d.setAttribute("aria-checked",e?"true":"false")}}),this.listeners.bind(d,"click keyup",(function(e){if(!ee(e)||32===e.which){switch(e.preventDefault(),e.stopPropagation(),d.checked=!0,a){case"language":t.currentTrack=Number(i);break;case"quality":t.quality=i;break;case"speed":t.speed=parseFloat(i)}nt.showMenuPanel.call(t,"home",ee(e))}}),a,!1),nt.bindMenuItemShortcuts.call(this,d,a),n.appendChild(d)},formatTime:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(!K(e))return e;var i=Ze(this.duration)>0;return it(e,i,t)},updateTimeDisplay:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];G(e)&&K(t)&&(e.innerText=nt.formatTime(t,i))},updateVolume:function(){this.supported.ui&&(G(this.elements.inputs.volume)&&nt.setRange.call(this,this.elements.inputs.volume,this.muted?0:this.volume),G(this.elements.buttons.mute)&&(this.elements.buttons.mute.pressed=this.muted||0===this.volume))},setRange:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;G(e)&&(e.value=t,nt.updateRangeFill.call(this,e))},updateProgress:function(e){var t=this;if(this.supported.ui&&Z(e)){var i,n,a=0;if(e)switch(e.type){case"timeupdate":case"seeking":case"seeked":i=this.currentTime,n=this.duration,a=0===i||0===n||Number.isNaN(i)||Number.isNaN(n)?0:(i/n*100).toFixed(2),"timeupdate"===e.type&&nt.setRange.call(this,this.elements.inputs.seek,a);break;case"playing":case"progress":!function(e,i){var n=K(i)?i:0,a=G(e)?e:t.elements.display.buffer;if(G(a)){a.value=n;var s=a.getElementsByTagName("span")[0];G(s)&&(s.childNodes[0].nodeValue=n)}}(this.elements.display.buffer,100*this.buffered)}}},updateRangeFill:function(e){var t=Z(e)?e.target:e;if(G(t)&&"range"===t.getAttribute("type")){if(ke(t,this.config.selectors.inputs.seek)){t.setAttribute("aria-valuenow",this.currentTime);var i=nt.formatTime(this.currentTime),n=nt.formatTime(this.duration),a=Xe("seekLabel",this.config);t.setAttribute("aria-valuetext",a.replace("{currentTime}",i).replace("{duration}",n))}else if(ke(t,this.config.selectors.inputs.volume)){var s=100*t.value;t.setAttribute("aria-valuenow",s),t.setAttribute("aria-valuetext","".concat(s.toFixed(1),"%"))}else t.setAttribute("aria-valuenow",t.value);oe.isWebkit&&t.style.setProperty("--value","".concat(t.value/t.max*100,"%"))}},updateSeekTooltip:function(e){var t=this;if(this.config.tooltips.seek&&G(this.elements.inputs.seek)&&G(this.elements.display.seekTooltip)&&0!==this.duration){var i="".concat(this.config.classNames.tooltip,"--visible"),n=function(e){return be(t.elements.display.seekTooltip,i,e)};if(this.touch)n(!1);else{var a=0,s=this.elements.progress.getBoundingClientRect();if(Z(e))a=100/s.width*(e.pageX-s.left);else{if(!we(this.elements.display.seekTooltip,i))return;a=parseFloat(this.elements.display.seekTooltip.style.left,10)}a<0?a=0:a>100&&(a=100),nt.updateTimeDisplay.call(this,this.elements.display.seekTooltip,this.duration/100*a),this.elements.display.seekTooltip.style.left="".concat(a,"%"),Z(e)&&["mouseenter","mouseleave"].includes(e.type)&&n("mouseenter"===e.type)}}},timeUpdate:function(e){var t=!G(this.elements.display.duration)&&this.config.invertTime;nt.updateTimeDisplay.call(this,this.elements.display.currentTime,t?this.duration-this.currentTime:this.currentTime,t),e&&"timeupdate"===e.type&&this.media.seeking||nt.updateProgress.call(this,e)},durationUpdate:function(){if(this.supported.ui&&(this.config.invertTime||!this.currentTime)){if(this.duration>=Math.pow(2,32))return ve(this.elements.display.currentTime,!0),void ve(this.elements.progress,!0);G(this.elements.inputs.seek)&&this.elements.inputs.seek.setAttribute("aria-valuemax",this.duration);var e=G(this.elements.display.duration);!e&&this.config.displayDuration&&this.paused&&nt.updateTimeDisplay.call(this,this.elements.display.currentTime,this.duration),e&&nt.updateTimeDisplay.call(this,this.elements.display.duration,this.duration),nt.updateSeekTooltip.call(this)}},toggleMenuButton:function(e,t){ve(this.elements.settings.buttons[e],!t)},updateSetting:function(e,t,i){var n=this.elements.settings.panels[e],a=null,s=t;if("captions"===e)a=this.currentTrack;else{if(a=ae(i)?this[e]:i,ae(a)&&(a=this.config[e].default),!ae(this.options[e])&&!this.options[e].includes(a))return void this.debug.warn("Unsupported value of '".concat(a,"' for ").concat(e));if(!this.config[e].options.includes(a))return void this.debug.warn("Disabled value of '".concat(a,"' for ").concat(e))}if(G(s)||(s=n&&n.querySelector('[role="menu"]')),G(s)){this.elements.settings.buttons[e].querySelector(".".concat(this.config.classNames.menu.value)).innerHTML=nt.getLabel.call(this,e,a);var r=s&&s.querySelector('[value="'.concat(a,'"]'));G(r)&&(r.checked=!0)}},getLabel:function(e,t){switch(e){case"speed":return 1===t?Xe("normal",this.config):"".concat(t,"&times;");case"quality":if(K(t)){var i=Xe("qualityLabel.".concat(t),this.config);return i.length?i:"".concat(t,"p")}return ze(t);case"captions":return rt.getLabel.call(this);default:return null}},setQualityMenu:function(e){var t=this;if(G(this.elements.settings.panels.quality)){var i=this.elements.settings.panels.quality.querySelector('[role="menu"]');$(e)&&(this.options.quality=Be(e).filter((function(e){return t.config.quality.options.includes(e)})));var n=!ae(this.options.quality)&&this.options.quality.length>1;if(nt.toggleMenuButton.call(this,"quality",n),fe(i),nt.checkMenu.call(this),n){var a=function(e){var i=Xe("qualityBadge.".concat(e),t.config);return i.length?nt.createBadge.call(t,i):null};this.options.quality.sort((function(e,i){var n=t.config.quality.options;return n.indexOf(e)>n.indexOf(i)?1:-1})).forEach((function(e){nt.createMenuItem.call(t,{value:e,list:i,type:"quality",title:nt.getLabel.call(t,"quality",e),badge:a(e)})})),nt.updateSetting.call(this,"quality",i)}}},setCaptionsMenu:function(){var e=this;if(G(this.elements.settings.panels.captions)){var t=this.elements.settings.panels.captions.querySelector('[role="menu"]'),i=rt.getTracks.call(this),n=Boolean(i.length);if(nt.toggleMenuButton.call(this,"captions",n),fe(t),nt.checkMenu.call(this),n){var a=i.map((function(i,n){return{value:n,checked:e.captions.toggled&&e.currentTrack===n,title:rt.getLabel.call(e,i),badge:i.language&&nt.createBadge.call(e,i.language.toUpperCase()),list:t,type:"language"}}));a.unshift({value:-1,checked:!this.captions.toggled,title:Xe("disabled",this.config),list:t,type:"language"}),a.forEach(nt.createMenuItem.bind(this)),nt.updateSetting.call(this,"captions",t)}}},setSpeedMenu:function(){var e=this;if(G(this.elements.settings.panels.speed)){var t=this.elements.settings.panels.speed.querySelector('[role="menu"]');this.options.speed=this.options.speed.filter((function(t){return t>=e.minimumSpeed&&t<=e.maximumSpeed}));var i=!ae(this.options.speed)&&this.options.speed.length>1;nt.toggleMenuButton.call(this,"speed",i),fe(t),nt.checkMenu.call(this),i&&(this.options.speed.forEach((function(i){nt.createMenuItem.call(e,{value:i,list:t,type:"speed",title:nt.getLabel.call(e,"speed",i)})})),nt.updateSetting.call(this,"speed",t))}},checkMenu:function(){var e=this.elements.settings.buttons,t=!ae(e)&&Object.values(e).some((function(e){return!e.hidden}));ve(this.elements.settings.menu,!t)},focusFirstMenuItem:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(!this.elements.settings.popup.hidden){var i=e;G(i)||(i=Object.values(this.elements.settings.panels).find((function(e){return!e.hidden})));var n=i.querySelector('[role^="menuitem"]');Ae.call(this,n,t)}},toggleMenu:function(e){var t=this.elements.settings.popup,i=this.elements.buttons.settings;if(G(t)&&G(i)){var n=t.hidden,a=n;if(Q(e))a=e;else if(ee(e)&&27===e.which)a=!1;else if(Z(e)){var s=X(e.composedPath)?e.composedPath()[0]:e.target,r=t.contains(s);if(r||!r&&e.target!==i&&a)return}i.setAttribute("aria-expanded",a),ve(t,!a),be(this.elements.container,this.config.classNames.menu.open,a),a&&ee(e)?nt.focusFirstMenuItem.call(this,null,!0):a||n||Ae.call(this,i,ee(e))}},getMenuSize:function(e){var t=e.cloneNode(!0);t.style.position="absolute",t.style.opacity=0,t.removeAttribute("hidden"),e.parentNode.appendChild(t);var i=t.scrollWidth,n=t.scrollHeight;return me(t),{width:i,height:n}},showMenuPanel:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",i=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this.elements.container.querySelector("#plyr-settings-".concat(this.id,"-").concat(t));if(G(n)){var a=n.parentNode,s=Array.from(a.children).find((function(e){return!e.hidden}));if(Ee.transitions&&!Ee.reducedMotion){a.style.width="".concat(s.scrollWidth,"px"),a.style.height="".concat(s.scrollHeight,"px");var r=nt.getMenuSize.call(this,n),o=function t(i){i.target===a&&["width","height"].includes(i.propertyName)&&(a.style.width="",a.style.height="",Ie.call(e,a,se,t))};xe.call(this,a,se,o),a.style.width="".concat(r.width,"px"),a.style.height="".concat(r.height,"px")}ve(s,!0),ve(n,!1),nt.focusFirstMenuItem.call(this,n,i)}},setDownloadUrl:function(){var e=this.elements.buttons.download;G(e)&&e.setAttribute("href",this.download)},create:function(e){var t=this,i=nt.bindMenuItemShortcuts,n=nt.createButton,a=nt.createProgress,s=nt.createRange,r=nt.createTime,o=nt.setQualityMenu,l=nt.setSpeedMenu,c=nt.showMenuPanel;this.elements.controls=null,$(this.config.controls)&&this.config.controls.includes("play-large")&&this.elements.container.appendChild(n.call(this,"play-large"));var u=he("div",ye(this.config.selectors.controls.wrapper));this.elements.controls=u;var d={class:"plyr__controls__item"};return Be($(this.config.controls)?this.config.controls:[]).forEach((function(o){if("restart"===o&&u.appendChild(n.call(t,"restart",d)),"rewind"===o&&u.appendChild(n.call(t,"rewind",d)),"play"===o&&u.appendChild(n.call(t,"play",d)),"fast-forward"===o&&u.appendChild(n.call(t,"fast-forward",d)),"progress"===o){var l=he("div",{class:"".concat(d.class," plyr__progress__container")}),h=he("div",ye(t.config.selectors.progress));if(h.appendChild(s.call(t,"seek",{id:"plyr-seek-".concat(e.id)})),h.appendChild(a.call(t,"buffer")),t.config.tooltips.seek){var p=he("span",{class:t.config.classNames.tooltip},"00:00");h.appendChild(p),t.elements.display.seekTooltip=p}t.elements.progress=h,l.appendChild(t.elements.progress),u.appendChild(l)}if("current-time"===o&&u.appendChild(r.call(t,"currentTime",d)),"duration"===o&&u.appendChild(r.call(t,"duration",d)),"mute"===o||"volume"===o){var m=t.elements.volume;if(G(m)&&u.contains(m)||(m=he("div",ce({},d,{class:"".concat(d.class," plyr__volume").trim()})),t.elements.volume=m,u.appendChild(m)),"mute"===o&&m.appendChild(n.call(t,"mute")),"volume"===o&&!oe.isIos){var f={max:1,step:.05,value:t.config.volume};m.appendChild(s.call(t,"volume",ce(f,{id:"plyr-volume-".concat(e.id)})))}}if("captions"===o&&u.appendChild(n.call(t,"captions",d)),"settings"===o&&!ae(t.config.settings)){var g=he("div",ce({},d,{class:"".concat(d.class," plyr__menu").trim(),hidden:""}));g.appendChild(n.call(t,"settings",{"aria-haspopup":!0,"aria-controls":"plyr-settings-".concat(e.id),"aria-expanded":!1}));var y=he("div",{class:"plyr__menu__container",id:"plyr-settings-".concat(e.id),hidden:""}),v=he("div"),b=he("div",{id:"plyr-settings-".concat(e.id,"-home")}),w=he("div",{role:"menu"});b.appendChild(w),v.appendChild(b),t.elements.settings.panels.home=b,t.config.settings.forEach((function(n){var a=he("button",ce(ye(t.config.selectors.buttons.settings),{type:"button",class:"".concat(t.config.classNames.control," ").concat(t.config.classNames.control,"--forward"),role:"menuitem","aria-haspopup":!0,hidden:""}));i.call(t,a,n),xe.call(t,a,"click",(function(){c.call(t,n,!1)}));var s=he("span",null,Xe(n,t.config)),r=he("span",{class:t.config.classNames.menu.value});r.innerHTML=e[n],s.appendChild(r),a.appendChild(s),w.appendChild(a);var o=he("div",{id:"plyr-settings-".concat(e.id,"-").concat(n),hidden:""}),l=he("button",{type:"button",class:"".concat(t.config.classNames.control," ").concat(t.config.classNames.control,"--back")});l.appendChild(he("span",{"aria-hidden":!0},Xe(n,t.config))),l.appendChild(he("span",{class:t.config.classNames.hidden},Xe("menuBack",t.config))),xe.call(t,o,"keydown",(function(e){37===e.which&&(e.preventDefault(),e.stopPropagation(),c.call(t,"home",!0))}),!1),xe.call(t,l,"click",(function(){}