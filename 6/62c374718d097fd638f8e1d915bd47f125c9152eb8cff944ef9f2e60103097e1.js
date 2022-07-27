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
/******/ 	__webpack_require__.p = "/workspace/public/dist";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 37);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.qq = exports.q = exports.delegateRemove = exports.delegate = exports.ww = void 0;
var DelegateListeners = (function () {
    function DelegateListeners() {
    }
    DelegateListeners.set = function (selector, eventType, eventHandler, elementScopeHandler) {
        if (!DelegateListeners.listeners[selector]) {
            DelegateListeners.listeners[selector] = [];
        }
        if (this.unique(DelegateListeners.listeners[selector], eventType, eventHandler)) {
            var listener = {
                eventType: eventType,
                eventHandler: eventHandler,
                elementScopeHandler: elementScopeHandler,
            };
            DelegateListeners.listeners[selector].push(listener);
            return listener;
        }
        else {
            return this.get(selector, eventType, eventHandler);
        }
    };
    DelegateListeners.get = function (selector, eventType, eventHandler) {
        if (DelegateListeners.listeners[selector]) {
            try {
                return DelegateListeners.listeners[selector].filter(function (listener) {
                    return eventHandler === listener.eventHandler && eventType === listener.eventType;
                })[0];
            }
            catch (err) { }
            ;
        }
        return null;
    };
    DelegateListeners.delete = function (selector, eventType, eventHandler) {
        var deleteListenersID = [];
        if (DelegateListeners.listeners[selector]) {
            DelegateListeners.listeners[selector].forEach(function (listener, index) {
                if (eventType === listener.eventType && eventHandler === listener.eventHandler) {
                    deleteListenersID.unshift(index);
                }
            });
            deleteListenersID.forEach(function (id) {
                DelegateListeners.listeners[selector].splice(id, 1);
            });
            if (0 === DelegateListeners.listeners[selector].length) {
                delete DelegateListeners.listeners[selector];
            }
        }
    };
    DelegateListeners.unique = function (listeners, eventType, eventHandler) {
        try {
            var existing = listeners.filter(function (listener) {
                return eventHandler === listener.eventHandler && eventType === listener.eventType;
            });
            if (0 === existing.length) {
                return true;
            }
            else {
                return false;
            }
        }
        catch (err) {
            return false;
        }
    };
    DelegateListeners.listeners = {};
    return DelegateListeners;
}());
exports.ww = window;
function delegate(selector, eventType, eventHandler, elementScope) {
    if (elementScope === void 0) { elementScope = document; }
    var listener = DelegateListeners.set(selector, eventType, eventHandler, function (event) {
        try {
            var target = event.target;
            while (target && target !== elementScope) {
                if (target.matches(selector)) {
                    eventHandler.call(target, event);
                    break;
                }
                target = target.parentNode;
            }
        }
        catch (err) { }
    });
    if (listener) {
        elementScope.addEventListener(eventType, listener.elementScopeHandler);
    }
}
exports.delegate = delegate;
function delegateRemove(selector, eventType, eventHandler, elementScope) {
    if (elementScope === void 0) { elementScope = document; }
    var listener = DelegateListeners.get(selector, eventType, eventHandler);
    if (listener) {
        elementScope.removeEventListener(eventType, listener.elementScopeHandler);
        DelegateListeners.delete(selector, eventType, eventHandler);
    }
}
exports.delegateRemove = delegateRemove;
function q(selector, parent) {
    if (parent === void 0) { parent = document; }
    var x = parent.querySelector(selector);
    return x ? x : x;
}
exports.q = q;
function qq(selector, parent) {
    if (parent === void 0) { parent = document; }
    return Array.prototype.slice.call(parent.querySelectorAll(selector), 0);
}
exports.qq = qq;


/***/ }),

/***/ 13:
/***/ (function(module, exports) {

Object.defineProperty(Object.prototype, 'getPathValue', {
	value: function(path) {
		return path.split('.').reduce(function(obj, key) {
			if (obj) {
				return obj[key];
			}

			return false;
		}, this);
	},
	writable: true,
	configurable: true,
	enumerable: false
});

/***/ }),

/***/ 14:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.numberNormalizer = void 0;
function numberNormalizer(n) {
    return ('number' === typeof n) ? n : parseInt(n.replace(/[^0-9\-.]+/gi, '').trim());
}
exports.numberNormalizer = numberNormalizer;


/***/ }),

/***/ 37:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var timelineScroll_1 = __webpack_require__(38);
var dom_1 = __webpack_require__(0);
dom_1.ww.Timeline = timelineScroll_1.Timeline;


/***/ }),

/***/ 38:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Timeline = void 0;
__webpack_require__(13);
var helpers_1 = __webpack_require__(14);
var dom_1 = __webpack_require__(0);
var Timeline = (function () {
    function Timeline(options) {
        var _this = this;
        this.stepActiveIndex = 0;
        this.stepAnimationActive = false;
        var stepItemElements = dom_1.qq('.timeline__steps li', options.element);
        var stepListElement = dom_1.q('.timeline__steps', options.element);
        if (stepItemElements && stepListElement) {
            this.stepItemElements = stepItemElements;
            this.stepListElement = stepListElement;
            this.timelineElement = options.element;
            this.scrollZone = this.timelineElement.closest('.about__timeline');
            this.eventHandlerRequestAnimation();
        }
        this.stepItemElements.forEach(function (item, index) {
            item.addEventListener('click', function(){}