/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonp"];
/******/ 	window["webpackJsonp"] = function webpackJsonpCallback(chunkIds, moreModules, executeModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [], result;
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
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules, executeModules);
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/ 		if(executeModules) {
/******/ 			for(i=0; i < executeModules.length; i++) {
/******/ 				result = __webpack_require__(__webpack_require__.s = executeModules[i]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	};
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// objects to store loaded and loading chunks
/******/ 	var installedChunks = {
/******/ 		1: 0
/******/ 	};
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
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData === 0) {
/******/ 			return new Promise(function(resolve) { resolve(); });
/******/ 		}
/******/
/******/ 		// a Promise means "currently loading".
/******/ 		if(installedChunkData) {
/******/ 			return installedChunkData[2];
/******/ 		}
/******/
/******/ 		// setup Promise in chunk cache
/******/ 		var promise = new Promise(function(resolve, reject) {
/******/ 			installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 		});
/******/ 		installedChunkData[2] = promise;
/******/
/******/ 		// start chunk loading
/******/ 		var head = document.getElementsByTagName('head')[0];
/******/ 		var script = document.createElement('script');
/******/ 		script.type = 'text/javascript';
/******/ 		script.charset = 'utf-8';
/******/ 		script.async = true;
/******/ 		script.timeout = 120000;
/******/
/******/ 		if (__webpack_require__.nc) {
/******/ 			script.setAttribute("nonce", __webpack_require__.nc);
/******/ 		}
/******/ 		script.src = __webpack_require__.p + "" + chunkId + ".js";
/******/ 		var timeout = setTimeout(onScriptComplete, 120000);
/******/ 		script.onerror = script.onload = onScriptComplete;
/******/ 		function onScriptComplete() {
/******/ 			// avoid mem leaks in IE.
/******/ 			script.onerror = script.onload = null;
/******/ 			clearTimeout(timeout);
/******/ 			var chunk = installedChunks[chunkId];
/******/ 			if(chunk !== 0) {
/******/ 				if(chunk) {
/******/ 					chunk[1](new Error('Loading chunk ' + chunkId + ' failed.'));
/******/ 				}
/******/ 				installedChunks[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		head.appendChild(script);
/******/
/******/ 		return promise;
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 622);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);
var core = __webpack_require__(30);
var hide = __webpack_require__(17);
var redefine = __webpack_require__(18);
var ctx = __webpack_require__(26);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var require;//! moment.js
//! version : 2.20.1
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com

;(function (global, factory) {
     true ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    global.moment = factory()
}(this, (function () { 'use strict';

var hookCallback;

function hooks () {
    return hookCallback.apply(null, arguments);
}

// This is done to register the method called with moment()
// without creating circular dependencies.
function setHookCallback (callback) {
    hookCallback = callback;
}

function isArray(input) {
    return input instanceof Array || Object.prototype.toString.call(input) === '[object Array]';
}

function isObject(input) {
    // IE8 will treat undefined and null as object if it wasn't for
    // input != null
    return input != null && Object.prototype.toString.call(input) === '[object Object]';
}

function isObjectEmpty(obj) {
    if (Object.getOwnPropertyNames) {
        return (Object.getOwnPropertyNames(obj).length === 0);
    } else {
        var k;
        for (k in obj) {
            if (obj.hasOwnProperty(k)) {
                return false;
            }
        }
        return true;
    }
}

function isUndefined(input) {
    return input === void 0;
}

function isNumber(input) {
    return typeof input === 'number' || Object.prototype.toString.call(input) === '[object Number]';
}

function isDate(input) {
    return input instanceof Date || Object.prototype.toString.call(input) === '[object Date]';
}

function map(arr, fn) {
    var res = [], i;
    for (i = 0; i < arr.length; ++i) {
        res.push(fn(arr[i], i));
    }
    return res;
}

function hasOwnProp(a, b) {
    return Object.prototype.hasOwnProperty.call(a, b);
}

function extend(a, b) {
    for (var i in b) {
        if (hasOwnProp(b, i)) {
            a[i] = b[i];
        }
    }

    if (hasOwnProp(b, 'toString')) {
        a.toString = b.toString;
    }

    if (hasOwnProp(b, 'valueOf')) {
        a.valueOf = b.valueOf;
    }

    return a;
}

function createUTC (input, format, locale, strict) {
    return createLocalOrUTC(input, format, locale, strict, true).utc();
}

function defaultParsingFlags() {
    // We need to deep clone this object.
    return {
        empty           : false,
        unusedTokens    : [],
        unusedInput     : [],
        overflow        : -2,
        charsLeftOver   : 0,
        nullInput       : false,
        invalidMonth    : null,
        invalidFormat   : false,
        userInvalidated : false,
        iso             : false,
        parsedDateParts : [],
        meridiem        : null,
        rfc2822         : false,
        weekdayMismatch : false
    };
}

function getParsingFlags(m) {
    if (m._pf == null) {
        m._pf = defaultParsingFlags();
    }
    return m._pf;
}

var some;
if (Array.prototype.some) {
    some = Array.prototype.some;
} else {
    some = function (fun) {
        var t = Object(this);
        var len = t.length >>> 0;

        for (var i = 0; i < len; i++) {
            if (i in t && fun.call(this, t[i], i, t)) {
                return true;
            }
        }

        return false;
    };
}

function isValid(m) {
    if (m._isValid == null) {
        var flags = getParsingFlags(m);
        var parsedParts = some.call(flags.parsedDateParts, function (i) {
            return i != null;
        });
        var isNowValid = !isNaN(m._d.getTime()) &&
            flags.overflow < 0 &&
            !flags.empty &&
            !flags.invalidMonth &&
            !flags.invalidWeekday &&
            !flags.weekdayMismatch &&
            !flags.nullInput &&
            !flags.invalidFormat &&
            !flags.userInvalidated &&
            (!flags.meridiem || (flags.meridiem && parsedParts));

        if (m._strict) {
            isNowValid = isNowValid &&
                flags.charsLeftOver === 0 &&
                flags.unusedTokens.length === 0 &&
                flags.bigHour === undefined;
        }

        if (Object.isFrozen == null || !Object.isFrozen(m)) {
            m._isValid = isNowValid;
        }
        else {
            return isNowValid;
        }
    }
    return m._isValid;
}

function createInvalid (flags) {
    var m = createUTC(NaN);
    if (flags != null) {
        extend(getParsingFlags(m), flags);
    }
    else {
        getParsingFlags(m).userInvalidated = true;
    }

    return m;
}

// Plugins that add properties should also add the key here (null value),
// so we can properly clone ourselves.
var momentProperties = hooks.momentProperties = [];

function copyConfig(to, from) {
    var i, prop, val;

    if (!isUndefined(from._isAMomentObject)) {
        to._isAMomentObject = from._isAMomentObject;
    }
    if (!isUndefined(from._i)) {
        to._i = from._i;
    }
    if (!isUndefined(from._f)) {
        to._f = from._f;
    }
    if (!isUndefined(from._l)) {
        to._l = from._l;
    }
    if (!isUndefined(from._strict)) {
        to._strict = from._strict;
    }
    if (!isUndefined(from._tzm)) {
        to._tzm = from._tzm;
    }
    if (!isUndefined(from._isUTC)) {
        to._isUTC = from._isUTC;
    }
    if (!isUndefined(from._offset)) {
        to._offset = from._offset;
    }
    if (!isUndefined(from._pf)) {
        to._pf = getParsingFlags(from);
    }
    if (!isUndefined(from._locale)) {
        to._locale = from._locale;
    }

    if (momentProperties.length > 0) {
        for (i = 0; i < momentProperties.length; i++) {
            prop = momentProperties[i];
            val = from[prop];
            if (!isUndefined(val)) {
                to[prop] = val;
            }
        }
    }

    return to;
}

var updateInProgress = false;

// Moment prototype object
function Moment(config) {
    copyConfig(this, config);
    this._d = new Date(config._d != null ? config._d.getTime() : NaN);
    if (!this.isValid()) {
        this._d = new Date(NaN);
    }
    // Prevent infinite loop in case updateOffset creates new moment
    // objects.
    if (updateInProgress === false) {
        updateInProgress = true;
        hooks.updateOffset(this);
        updateInProgress = false;
    }
}

function isMoment (obj) {
    return obj instanceof Moment || (obj != null && obj._isAMomentObject != null);
}

function absFloor (number) {
    if (number < 0) {
        // -0 -> 0
        return Math.ceil(number) || 0;
    } else {
        return Math.floor(number);
    }
}

function toInt(argumentForCoercion) {
    var coercedNumber = +argumentForCoercion,
        value = 0;

    if (coercedNumber !== 0 && isFinite(coercedNumber)) {
        value = absFloor(coercedNumber);
    }

    return value;
}

// compare two arrays, return the number of differences
function compareArrays(array1, array2, dontConvert) {
    var len = Math.min(array1.length, array2.length),
        lengthDiff = Math.abs(array1.length - array2.length),
        diffs = 0,
        i;
    for (i = 0; i < len; i++) {
        if ((dontConvert && array1[i] !== array2[i]) ||
            (!dontConvert && toInt(array1[i]) !== toInt(array2[i]))) {
            diffs++;
        }
    }
    return diffs + lengthDiff;
}

function warn(msg) {
    if (hooks.suppressDeprecationWarnings === false &&
            (typeof console !==  'undefined') && console.warn) {
        console.warn('Deprecation warning: ' + msg);
    }
}

function deprecate(msg, fn) {
    var firstTime = true;

    return extend(function () {
        if (hooks.deprecationHandler != null) {
            hooks.deprecationHandler(null, msg);
        }
        if (firstTime) {
            var args = [];
            var arg;
            for (var i = 0; i < arguments.length; i++) {
                arg = '';
                if (typeof arguments[i] === 'object') {
                    arg += '\n[' + i + '] ';
                    for (var key in arguments[0]) {
                        arg += key + ': ' + arguments[0][key] + ', ';
                    }
                    arg = arg.slice(0, -2); // Remove trailing comma and space
                } else {
                    arg = arguments[i];
                }
                args.push(arg);
            }
            warn(msg + '\nArguments: ' + Array.prototype.slice.call(args).join('') + '\n' + (new Error()).stack);
            firstTime = false;
        }
        return fn.apply(this, arguments);
    }, fn);
}

var deprecations = {};

function deprecateSimple(name, msg) {
    if (hooks.deprecationHandler != null) {
        hooks.deprecationHandler(name, msg);
    }
    if (!deprecations[name]) {
        warn(msg);
        deprecations[name] = true;
    }
}

hooks.suppressDeprecationWarnings = false;
hooks.deprecationHandler = null;

function isFunction(input) {
    return input instanceof Function || Object.prototype.toString.call(input) === '[object Function]';
}

function set (config) {
    var prop, i;
    for (i in config) {
        prop = config[i];
        if (isFunction(prop)) {
            this[i] = prop;
        } else {
            this['_' + i] = prop;
        }
    }
    this._config = config;
    // Lenient ordinal parsing accepts just a number in addition to
    // number + (possibly) stuff coming from _dayOfMonthOrdinalParse.
    // TODO: Remove "ordinalParse" fallback in next major release.
    this._dayOfMonthOrdinalParseLenient = new RegExp(
        (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) +
            '|' + (/\d{1,2}/).source);
}

function mergeConfigs(parentConfig, childConfig) {
    var res = extend({}, parentConfig), prop;
    for (prop in childConfig) {
        if (hasOwnProp(childConfig, prop)) {
            if (isObject(parentConfig[prop]) && isObject(childConfig[prop])) {
                res[prop] = {};
                extend(res[prop], parentConfig[prop]);
                extend(res[prop], childConfig[prop]);
            } else if (childConfig[prop] != null) {
                res[prop] = childConfig[prop];
            } else {
                delete res[prop];
            }
        }
    }
    for (prop in parentConfig) {
        if (hasOwnProp(parentConfig, prop) &&
                !hasOwnProp(childConfig, prop) &&
                isObject(parentConfig[prop])) {
            // make sure changes to properties don't modify parent config
            res[prop] = extend({}, res[prop]);
        }
    }
    return res;
}

function Locale(config) {
    if (config != null) {
        this.set(config);
    }
}

var keys;

if (Object.keys) {
    keys = Object.keys;
} else {
    keys = function (obj) {
        var i, res = [];
        for (i in obj) {
            if (hasOwnProp(obj, i)) {
                res.push(i);
            }
        }
        return res;
    };
}

var defaultCalendar = {
    sameDay : '[Today at] LT',
    nextDay : '[Tomorrow at] LT',
    nextWeek : 'dddd [at] LT',
    lastDay : '[Yesterday at] LT',
    lastWeek : '[Last] dddd [at] LT',
    sameElse : 'L'
};

function calendar (key, mom, now) {
    var output = this._calendar[key] || this._calendar['sameElse'];
    return isFunction(output) ? output.call(mom, now) : output;
}

var defaultLongDateFormat = {
    LTS  : 'h:mm:ss A',
    LT   : 'h:mm A',
    L    : 'MM/DD/YYYY',
    LL   : 'MMMM D, YYYY',
    LLL  : 'MMMM D, YYYY h:mm A',
    LLLL : 'dddd, MMMM D, YYYY h:mm A'
};

function longDateFormat (key) {
    var format = this._longDateFormat[key],
        formatUpper = this._longDateFormat[key.toUpperCase()];

    if (format || !formatUpper) {
        return format;
    }

    this._longDateFormat[key] = formatUpper.replace(/MMMM|MM|DD|dddd/g, function (val) {
        return val.slice(1);
    });

    return this._longDateFormat[key];
}

var defaultInvalidDate = 'Invalid date';

function invalidDate () {
    return this._invalidDate;
}

var defaultOrdinal = '%d';
var defaultDayOfMonthOrdinalParse = /\d{1,2}/;

function ordinal (number) {
    return this._ordinal.replace('%d', number);
}

var defaultRelativeTime = {
    future : 'in %s',
    past   : '%s ago',
    s  : 'a few seconds',
    ss : '%d seconds',
    m  : 'a minute',
    mm : '%d minutes',
    h  : 'an hour',
    hh : '%d hours',
    d  : 'a day',
    dd : '%d days',
    M  : 'a month',
    MM : '%d months',
    y  : 'a year',
    yy : '%d years'
};

function relativeTime (number, withoutSuffix, string, isFuture) {
    var output = this._relativeTime[string];
    return (isFunction(output)) ?
        output(number, withoutSuffix, string, isFuture) :
        output.replace(/%d/i, number);
}

function pastFuture (diff, output) {
    var format = this._relativeTime[diff > 0 ? 'future' : 'past'];
    return isFunction(format) ? format(output) : format.replace(/%s/i, output);
}

var aliases = {};

function addUnitAlias (unit, shorthand) {
    var lowerCase = unit.toLowerCase();
    aliases[lowerCase] = aliases[lowerCase + 's'] = aliases[shorthand] = unit;
}

function normalizeUnits(units) {
    return typeof units === 'string' ? aliases[units] || aliases[units.toLowerCase()] : undefined;
}

function normalizeObjectUnits(inputObject) {
    var normalizedInput = {},
        normalizedProp,
        prop;

    for (prop in inputObject) {
        if (hasOwnProp(inputObject, prop)) {
            normalizedProp = normalizeUnits(prop);
            if (normalizedProp) {
                normalizedInput[normalizedProp] = inputObject[prop];
            }
        }
    }

    return normalizedInput;
}

var priorities = {};

function addUnitPriority(unit, priority) {
    priorities[unit] = priority;
}

function getPrioritizedUnits(unitsObj) {
    var units = [];
    for (var u in unitsObj) {
        units.push({unit: u, priority: priorities[u]});
    }
    units.sort(function (a, b) {
        return a.priority - b.priority;
    });
    return units;
}

function zeroFill(number, targetLength, forceSign) {
    var absNumber = '' + Math.abs(number),
        zerosToFill = targetLength - absNumber.length,
        sign = number >= 0;
    return (sign ? (forceSign ? '+' : '') : '-') +
        Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) + absNumber;
}

var formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;

var localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g;

var formatFunctions = {};

var formatTokenFunctions = {};

// token:    'M'
// padded:   ['MM', 2]
// ordinal:  'Mo'
// callback: function () { this.month() + 1 }
function addFormatToken (token, padded, ordinal, callback) {
    var func = callback;
    if (typeof callback === 'string') {
        func = function () {
            return this[callback]();
        };
    }
    if (token) {
        formatTokenFunctions[token] = func;
    }
    if (padded) {
        formatTokenFunctions[padded[0]] = function () {
            return zeroFill(func.apply(this, arguments), padded[1], padded[2]);
        };
    }
    if (ordinal) {
        formatTokenFunctions[ordinal] = function () {
            return this.localeData().ordinal(func.apply(this, arguments), token);
        };
    }
}

function removeFormattingTokens(input) {
    if (input.match(/\[[\s\S]/)) {
        return input.replace(/^\[|\]$/g, '');
    }
    return input.replace(/\\/g, '');
}

function makeFormatFunction(format) {
    var array = format.match(formattingTokens), i, length;

    for (i = 0, length = array.length; i < length; i++) {
        if (formatTokenFunctions[array[i]]) {
            array[i] = formatTokenFunctions[array[i]];
        } else {
            array[i] = removeFormattingTokens(array[i]);
        }
    }

    return function (mom) {
        var output = '', i;
        for (i = 0; i < length; i++) {
            output += isFunction(array[i]) ? array[i].call(mom, format) : array[i];
        }
        return output;
    };
}

// format date using native date object
function formatMoment(m, format) {
    if (!m.isValid()) {
        return m.localeData().invalidDate();
    }

    format = expandFormat(format, m.localeData());
    formatFunctions[format] = formatFunctions[format] || makeFormatFunction(format);

    return formatFunctions[format](m);
}

function expandFormat(format, locale) {
    var i = 5;

    function replaceLongDateFormatTokens(input) {
        return locale.longDateFormat(input) || input;
    }

    localFormattingTokens.lastIndex = 0;
    while (i >= 0 && localFormattingTokens.test(format)) {
        format = format.replace(localFormattingTokens, replaceLongDateFormatTokens);
        localFormattingTokens.lastIndex = 0;
        i -= 1;
    }

    return format;
}

var match1         = /\d/;            //       0 - 9
var match2         = /\d\d/;          //      00 - 99
var match3         = /\d{3}/;         //     000 - 999
var match4         = /\d{4}/;         //    0000 - 9999
var match6         = /[+-]?\d{6}/;    // -999999 - 999999
var match1to2      = /\d\d?/;         //       0 - 99
var match3to4      = /\d\d\d\d?/;     //     999 - 9999
var match5to6      = /\d\d\d\d\d\d?/; //   99999 - 999999
var match1to3      = /\d{1,3}/;       //       0 - 999
var match1to4      = /\d{1,4}/;       //       0 - 9999
var match1to6      = /[+-]?\d{1,6}/;  // -999999 - 999999

var matchUnsigned  = /\d+/;           //       0 - inf
var matchSigned    = /[+-]?\d+/;      //    -inf - inf

var matchOffset    = /Z|[+-]\d\d:?\d\d/gi; // +00:00 -00:00 +0000 -0000 or Z
var matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi; // +00 -00 +00:00 -00:00 +0000 -0000 or Z

var matchTimestamp = /[+-]?\d+(\.\d{1,3})?/; // 123456789 123456789.123

// any word (or two) characters or numbers including two/three word month in arabic.
// includes scottish gaelic two word and hyphenated months
var matchWord = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i;


var regexes = {};

function addRegexToken (token, regex, strictRegex) {
    regexes[token] = isFunction(regex) ? regex : function (isStrict, localeData) {
        return (isStrict && strictRegex) ? strictRegex : regex;
    };
}

function getParseRegexForToken (token, config) {
    if (!hasOwnProp(regexes, token)) {
        return new RegExp(unescapeFormat(token));
    }

    return regexes[token](config._strict, config._locale);
}

// Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript
function unescapeFormat(s) {
    return regexEscape(s.replace('\\', '').replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (matched, p1, p2, p3, p4) {
        return p1 || p2 || p3 || p4;
    }));
}

function regexEscape(s) {
    return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
}

var tokens = {};

function addParseToken (token, callback) {
    var i, func = callback;
    if (typeof token === 'string') {
        token = [token];
    }
    if (isNumber(callback)) {
        func = function (input, array) {
            array[callback] = toInt(input);
        };
    }
    for (i = 0; i < token.length; i++) {
        tokens[token[i]] = func;
    }
}

function addWeekParseToken (token, callback) {
    addParseToken(token, function (input, array, config, token) {
        config._w = config._w || {};
        callback(input, config._w, config, token);
    });
}

function addTimeToArrayFromToken(token, input, config) {
    if (input != null && hasOwnProp(tokens, token)) {
        tokens[token](input, config._a, config, token);
    }
}

var YEAR = 0;
var MONTH = 1;
var DATE = 2;
var HOUR = 3;
var MINUTE = 4;
var SECOND = 5;
var MILLISECOND = 6;
var WEEK = 7;
var WEEKDAY = 8;

// FORMATTING

addFormatToken('Y', 0, 0, function () {
    var y = this.year();
    return y <= 9999 ? '' + y : '+' + y;
});

addFormatToken(0, ['YY', 2], 0, function () {
    return this.year() % 100;
});

addFormatToken(0, ['YYYY',   4],       0, 'year');
addFormatToken(0, ['YYYYY',  5],       0, 'year');
addFormatToken(0, ['YYYYYY', 6, true], 0, 'year');

// ALIASES

addUnitAlias('year', 'y');

// PRIORITIES

addUnitPriority('year', 1);

// PARSING

addRegexToken('Y',      matchSigned);
addRegexToken('YY',     match1to2, match2);
addRegexToken('YYYY',   match1to4, match4);
addRegexToken('YYYYY',  match1to6, match6);
addRegexToken('YYYYYY', match1to6, match6);

addParseToken(['YYYYY', 'YYYYYY'], YEAR);
addParseToken('YYYY', function (input, array) {
    array[YEAR] = input.length === 2 ? hooks.parseTwoDigitYear(input) : toInt(input);
});
addParseToken('YY', function (input, array) {
    array[YEAR] = hooks.parseTwoDigitYear(input);
});
addParseToken('Y', function (input, array) {
    array[YEAR] = parseInt(input, 10);
});

// HELPERS

function daysInYear(year) {
    return isLeapYear(year) ? 366 : 365;
}

function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

// HOOKS

hooks.parseTwoDigitYear = function (input) {
    return toInt(input) + (toInt(input) > 68 ? 1900 : 2000);
};

// MOMENTS

var getSetYear = makeGetSet('FullYear', true);

function getIsLeapYear () {
    return isLeapYear(this.year());
}

function makeGetSet (unit, keepTime) {
    return function (value) {
        if (value != null) {
            set$1(this, unit, value);
            hooks.updateOffset(this, keepTime);
            return this;
        } else {
            return get(this, unit);
        }
    };
}

function get (mom, unit) {
    return mom.isValid() ?
        mom._d['get' + (mom._isUTC ? 'UTC' : '') + unit]() : NaN;
}

function set$1 (mom, unit, value) {
    if (mom.isValid() && !isNaN(value)) {
        if (unit === 'FullYear' && isLeapYear(mom.year()) && mom.month() === 1 && mom.date() === 29) {
            mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value, mom.month(), daysInMonth(value, mom.month()));
        }
        else {
            mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value);
        }
    }
}

// MOMENTS

function stringGet (units) {
    units = normalizeUnits(units);
    if (isFunction(this[units])) {
        return this[units]();
    }
    return this;
}


function stringSet (units, value) {
    if (typeof units === 'object') {
        units = normalizeObjectUnits(units);
        var prioritized = getPrioritizedUnits(units);
        for (var i = 0; i < prioritized.length; i++) {
            this[prioritized[i].unit](units[prioritized[i].unit]);
        }
    } else {
        units = normalizeUnits(units);
        if (isFunction(this[units])) {
            return this[units](value);
        }
    }
    return this;
}

function mod(n, x) {
    return ((n % x) + x) % x;
}

var indexOf;

if (Array.prototype.indexOf) {
    indexOf = Array.prototype.indexOf;
} else {
    indexOf = function (o) {
        // I know
        var i;
        for (i = 0; i < this.length; ++i) {
            if (this[i] === o) {
                return i;
            }
        }
        return -1;
    };
}

function daysInMonth(year, month) {
    if (isNaN(year) || isNaN(month)) {
        return NaN;
    }
    var modMonth = mod(month, 12);
    year += (month - modMonth) / 12;
    return modMonth === 1 ? (isLeapYear(year) ? 29 : 28) : (31 - modMonth % 7 % 2);
}

// FORMATTING

addFormatToken('M', ['MM', 2], 'Mo', function () {
    return this.month() + 1;
});

addFormatToken('MMM', 0, 0, function (format) {
    return this.localeData().monthsShort(this, format);
});

addFormatToken('MMMM', 0, 0, function (format) {
    return this.localeData().months(this, format);
});

// ALIASES

addUnitAlias('month', 'M');

// PRIORITY

addUnitPriority('month', 8);

// PARSING

addRegexToken('M',    match1to2);
addRegexToken('MM',   match1to2, match2);
addRegexToken('MMM',  function (isStrict, locale) {
    return locale.monthsShortRegex(isStrict);
});
addRegexToken('MMMM', function (isStrict, locale) {
    return locale.monthsRegex(isStrict);
});

addParseToken(['M', 'MM'], function (input, array) {
    array[MONTH] = toInt(input) - 1;
});

addParseToken(['MMM', 'MMMM'], function (input, array, config, token) {
    var month = config._locale.monthsParse(input, token, config._strict);
    // if we didn't find a month name, mark the date as invalid.
    if (month != null) {
        array[MONTH] = month;
    } else {
        getParsingFlags(config).invalidMonth = input;
    }
});

// LOCALES

var MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/;
var defaultLocaleMonths = 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_');
function localeMonths (m, format) {
    if (!m) {
        return isArray(this._months) ? this._months :
            this._months['standalone'];
    }
    return isArray(this._months) ? this._months[m.month()] :
        this._months[(this._months.isFormat || MONTHS_IN_FORMAT).test(format) ? 'format' : 'standalone'][m.month()];
}

var defaultLocaleMonthsShort = 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_');
function localeMonthsShort (m, format) {
    if (!m) {
        return isArray(this._monthsShort) ? this._monthsShort :
            this._monthsShort['standalone'];
    }
    return isArray(this._monthsShort) ? this._monthsShort[m.month()] :
        this._monthsShort[MONTHS_IN_FORMAT.test(format) ? 'format' : 'standalone'][m.month()];
}

function handleStrictParse(monthName, format, strict) {
    var i, ii, mom, llc = monthName.toLocaleLowerCase();
    if (!this._monthsParse) {
        // this is not used
        this._monthsParse = [];
        this._longMonthsParse = [];
        this._shortMonthsParse = [];
        for (i = 0; i < 12; ++i) {
            mom = createUTC([2000, i]);
            this._shortMonthsParse[i] = this.monthsShort(mom, '').toLocaleLowerCase();
            this._longMonthsParse[i] = this.months(mom, '').toLocaleLowerCase();
        }
    }

    if (strict) {
        if (format === 'MMM') {
            ii = indexOf.call(this._shortMonthsParse, llc);
            return ii !== -1 ? ii : null;
        } else {
            ii = indexOf.call(this._longMonthsParse, llc);
            return ii !== -1 ? ii : null;
        }
    } else {
        if (format === 'MMM') {
            ii = indexOf.call(this._shortMonthsParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf.call(this._longMonthsParse, llc);
            return ii !== -1 ? ii : null;
        } else {
            ii = indexOf.call(this._longMonthsParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf.call(this._shortMonthsParse, llc);
            return ii !== -1 ? ii : null;
        }
    }
}

function localeMonthsParse (monthName, format, strict) {
    var i, mom, regex;

    if (this._monthsParseExact) {
        return handleStrictParse.call(this, monthName, format, strict);
    }

    if (!this._monthsParse) {
        this._monthsParse = [];
        this._longMonthsParse = [];
        this._shortMonthsParse = [];
    }

    // TODO: add sorting
    // Sorting makes sure if one month (or abbr) is a prefix of another
    // see sorting in computeMonthsParse
    for (i = 0; i < 12; i++) {
        // make the regex if we don't have it already
        mom = createUTC([2000, i]);
        if (strict && !this._longMonthsParse[i]) {
            this._longMonthsParse[i] = new RegExp('^' + this.months(mom, '').replace('.', '') + '$', 'i');
            this._shortMonthsParse[i] = new RegExp('^' + this.monthsShort(mom, '').replace('.', '') + '$', 'i');
        }
        if (!strict && !this._monthsParse[i]) {
            regex = '^' + this.months(mom, '') + '|^' + this.monthsShort(mom, '');
            this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
        }
        // test the regex
        if (strict && format === 'MMMM' && this._longMonthsParse[i].test(monthName)) {
            return i;
        } else if (strict && format === 'MMM' && this._shortMonthsParse[i].test(monthName)) {
            return i;
        } else if (!strict && this._monthsParse[i].test(monthName)) {
            return i;
        }
    }
}

// MOMENTS

function setMonth (mom, value) {
    var dayOfMonth;

    if (!mom.isValid()) {
        // No op
        return mom;
    }

    if (typeof value === 'string') {
        if (/^\d+$/.test(value)) {
            value = toInt(value);
        } else {
            value = mom.localeData().monthsParse(value);
            // TODO: Another silent failure?
            if (!isNumber(value)) {
                return mom;
            }
        }
    }

    dayOfMonth = Math.min(mom.date(), daysInMonth(mom.year(), value));
    mom._d['set' + (mom._isUTC ? 'UTC' : '') + 'Month'](value, dayOfMonth);
    return mom;
}

function getSetMonth (value) {
    if (value != null) {
        setMonth(this, value);
        hooks.updateOffset(this, true);
        return this;
    } else {
        return get(this, 'Month');
    }
}

function getDaysInMonth () {
    return daysInMonth(this.year(), this.month());
}

var defaultMonthsShortRegex = matchWord;
function monthsShortRegex (isStrict) {
    if (this._monthsParseExact) {
        if (!hasOwnProp(this, '_monthsRegex')) {
            computeMonthsParse.call(this);
        }
        if (isStrict) {
            return this._monthsShortStrictRegex;
        } else {
            return this._monthsShortRegex;
        }
    } else {
        if (!hasOwnProp(this, '_monthsShortRegex')) {
            this._monthsShortRegex = defaultMonthsShortRegex;
        }
        return this._monthsShortStrictRegex && isStrict ?
            this._monthsShortStrictRegex : this._monthsShortRegex;
    }
}

var defaultMonthsRegex = matchWord;
function monthsRegex (isStrict) {
    if (this._monthsParseExact) {
        if (!hasOwnProp(this, '_monthsRegex')) {
            computeMonthsParse.call(this);
        }
        if (isStrict) {
            return this._monthsStrictRegex;
        } else {
            return this._monthsRegex;
        }
    } else {
        if (!hasOwnProp(this, '_monthsRegex')) {
            this._monthsRegex = defaultMonthsRegex;
        }
        return this._monthsStrictRegex && isStrict ?
            this._monthsStrictRegex : this._monthsRegex;
    }
}

function computeMonthsParse () {
    function cmpLenRev(a, b) {
        return b.length - a.length;
    }

    var shortPieces = [], longPieces = [], mixedPieces = [],
        i, mom;
    for (i = 0; i < 12; i++) {
        // make the regex if we don't have it already
        mom = createUTC([2000, i]);
        shortPieces.push(this.monthsShort(mom, ''));
        longPieces.push(this.months(mom, ''));
        mixedPieces.push(this.months(mom, ''));
        mixedPieces.push(this.monthsShort(mom, ''));
    }
    // Sorting makes sure if one month (or abbr) is a prefix of another it
    // will match the longer piece.
    shortPieces.sort(cmpLenRev);
    longPieces.sort(cmpLenRev);
    mixedPieces.sort(cmpLenRev);
    for (i = 0; i < 12; i++) {
        shortPieces[i] = regexEscape(shortPieces[i]);
        longPieces[i] = regexEscape(longPieces[i]);
    }
    for (i = 0; i < 24; i++) {
        mixedPieces[i] = regexEscape(mixedPieces[i]);
    }

    this._monthsRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
    this._monthsShortRegex = this._monthsRegex;
    this._monthsStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
    this._monthsShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
}

function createDate (y, m, d, h, M, s, ms) {
    // can't just apply() to create a date:
    // https://stackoverflow.com/q/181348
    var date = new Date(y, m, d, h, M, s, ms);

    // the date constructor remaps years 0-99 to 1900-1999
    if (y < 100 && y >= 0 && isFinite(date.getFullYear())) {
        date.setFullYear(y);
    }
    return date;
}

function createUTCDate (y) {
    var date = new Date(Date.UTC.apply(null, arguments));

    // the Date.UTC function remaps years 0-99 to 1900-1999
    if (y < 100 && y >= 0 && isFinite(date.getUTCFullYear())) {
        date.setUTCFullYear(y);
    }
    return date;
}

// start-of-first-week - start-of-year
function firstWeekOffset(year, dow, doy) {
    var // first-week day -- which january is always in the first week (4 for iso, 1 for other)
        fwd = 7 + dow - doy,
        // first-week day local weekday -- which local weekday is fwd
        fwdlw = (7 + createUTCDate(year, 0, fwd).getUTCDay() - dow) % 7;

    return -fwdlw + fwd - 1;
}

// https://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday
function dayOfYearFromWeeks(year, week, weekday, dow, doy) {
    var localWeekday = (7 + weekday - dow) % 7,
        weekOffset = firstWeekOffset(year, dow, doy),
        dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset,
        resYear, resDayOfYear;

    if (dayOfYear <= 0) {
        resYear = year - 1;
        resDayOfYear = daysInYear(resYear) + dayOfYear;
    } else if (dayOfYear > daysInYear(year)) {
        resYear = year + 1;
        resDayOfYear = dayOfYear - daysInYear(year);
    } else {
        resYear = year;
        resDayOfYear = dayOfYear;
    }

    return {
        year: resYear,
        dayOfYear: resDayOfYear
    };
}

function weekOfYear(mom, dow, doy) {
    var weekOffset = firstWeekOffset(mom.year(), dow, doy),
        week = Math.floor((mom.dayOfYear() - weekOffset - 1) / 7) + 1,
        resWeek, resYear;

    if (week < 1) {
        resYear = mom.year() - 1;
        resWeek = week + weeksInYear(resYear, dow, doy);
    } else if (week > weeksInYear(mom.year(), dow, doy)) {
        resWeek = week - weeksInYear(mom.year(), dow, doy);
        resYear = mom.year() + 1;
    } else {
        resYear = mom.year();
        resWeek = week;
    }

    return {
        week: resWeek,
        year: resYear
    };
}

function weeksInYear(year, dow, doy) {
    var weekOffset = firstWeekOffset(year, dow, doy),
        weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
    return (daysInYear(year) - weekOffset + weekOffsetNext) / 7;
}

// FORMATTING

addFormatToken('w', ['ww', 2], 'wo', 'week');
addFormatToken('W', ['WW', 2], 'Wo', 'isoWeek');

// ALIASES

addUnitAlias('week', 'w');
addUnitAlias('isoWeek', 'W');

// PRIORITIES

addUnitPriority('week', 5);
addUnitPriority('isoWeek', 5);

// PARSING

addRegexToken('w',  match1to2);
addRegexToken('ww', match1to2, match2);
addRegexToken('W',  match1to2);
addRegexToken('WW', match1to2, match2);

addWeekParseToken(['w', 'ww', 'W', 'WW'], function (input, week, config, token) {
    week[token.substr(0, 1)] = toInt(input);
});

// HELPERS

// LOCALES

function localeWeek (mom) {
    return weekOfYear(mom, this._week.dow, this._week.doy).week;
}

var defaultLocaleWeek = {
    dow : 0, // Sunday is the first day of the week.
    doy : 6  // The week that contains Jan 1st is the first week of the year.
};

function localeFirstDayOfWeek () {
    return this._week.dow;
}

function localeFirstDayOfYear () {
    return this._week.doy;
}

// MOMENTS

function getSetWeek (input) {
    var week = this.localeData().week(this);
    return input == null ? week : this.add((input - week) * 7, 'd');
}

function getSetISOWeek (input) {
    var week = weekOfYear(this, 1, 4).week;
    return input == null ? week : this.add((input - week) * 7, 'd');
}

// FORMATTING

addFormatToken('d', 0, 'do', 'day');

addFormatToken('dd', 0, 0, function (format) {
    return this.localeData().weekdaysMin(this, format);
});

addFormatToken('ddd', 0, 0, function (format) {
    return this.localeData().weekdaysShort(this, format);
});

addFormatToken('dddd', 0, 0, function (format) {
    return this.localeData().weekdays(this, format);
});

addFormatToken('e', 0, 0, 'weekday');
addFormatToken('E', 0, 0, 'isoWeekday');

// ALIASES

addUnitAlias('day', 'd');
addUnitAlias('weekday', 'e');
addUnitAlias('isoWeekday', 'E');

// PRIORITY
addUnitPriority('day', 11);
addUnitPriority('weekday', 11);
addUnitPriority('isoWeekday', 11);

// PARSING

addRegexToken('d',    match1to2);
addRegexToken('e',    match1to2);
addRegexToken('E',    match1to2);
addRegexToken('dd',   function (isStrict, locale) {
    return locale.weekdaysMinRegex(isStrict);
});
addRegexToken('ddd',   function (isStrict, locale) {
    return locale.weekdaysShortRegex(isStrict);
});
addRegexToken('dddd',   function (isStrict, locale) {
    return locale.weekdaysRegex(isStrict);
});

addWeekParseToken(['dd', 'ddd', 'dddd'], function (input, week, config, token) {
    var weekday = config._locale.weekdaysParse(input, token, config._strict);
    // if we didn't get a weekday name, mark the date as invalid
    if (weekday != null) {
        week.d = weekday;
    } else {
        getParsingFlags(config).invalidWeekday = input;
    }
});

addWeekParseToken(['d', 'e', 'E'], function (input, week, config, token) {
    week[token] = toInt(input);
});

// HELPERS

function parseWeekday(input, locale) {
    if (typeof input !== 'string') {
        return input;
    }

    if (!isNaN(input)) {
        return parseInt(input, 10);
    }

    input = locale.weekdaysParse(input);
    if (typeof input === 'number') {
        return input;
    }

    return null;
}

function parseIsoWeekday(input, locale) {
    if (typeof input === 'string') {
        return locale.weekdaysParse(input) % 7 || 7;
    }
    return isNaN(input) ? null : input;
}

// LOCALES

var defaultLocaleWeekdays = 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_');
function localeWeekdays (m, format) {
    if (!m) {
        return isArray(this._weekdays) ? this._weekdays :
            this._weekdays['standalone'];
    }
    return isArray(this._weekdays) ? this._weekdays[m.day()] :
        this._weekdays[this._weekdays.isFormat.test(format) ? 'format' : 'standalone'][m.day()];
}

var defaultLocaleWeekdaysShort = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_');
function localeWeekdaysShort (m) {
    return (m) ? this._weekdaysShort[m.day()] : this._weekdaysShort;
}

var defaultLocaleWeekdaysMin = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_');
function localeWeekdaysMin (m) {
    return (m) ? this._weekdaysMin[m.day()] : this._weekdaysMin;
}

function handleStrictParse$1(weekdayName, format, strict) {
    var i, ii, mom, llc = weekdayName.toLocaleLowerCase();
    if (!this._weekdaysParse) {
        this._weekdaysParse = [];
        this._shortWeekdaysParse = [];
        this._minWeekdaysParse = [];

        for (i = 0; i < 7; ++i) {
            mom = createUTC([2000, 1]).day(i);
            this._minWeekdaysParse[i] = this.weekdaysMin(mom, '').toLocaleLowerCase();
            this._shortWeekdaysParse[i] = this.weekdaysShort(mom, '').toLocaleLowerCase();
            this._weekdaysParse[i] = this.weekdays(mom, '').toLocaleLowerCase();
        }
    }

    if (strict) {
        if (format === 'dddd') {
            ii = indexOf.call(this._weekdaysParse, llc);
            return ii !== -1 ? ii : null;
        } else if (format === 'ddd') {
            ii = indexOf.call(this._shortWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
        } else {
            ii = indexOf.call(this._minWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
        }
    } else {
        if (format === 'dddd') {
            ii = indexOf.call(this._weekdaysParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf.call(this._shortWeekdaysParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf.call(this._minWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
        } else if (format === 'ddd') {
            ii = indexOf.call(this._shortWeekdaysParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf.call(this._weekdaysParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf.call(this._minWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
        } else {
            ii = indexOf.call(this._minWeekdaysParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf.call(this._weekdaysParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf.call(this._shortWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
        }
    }
}

function localeWeekdaysParse (weekdayName, format, strict) {
    var i, mom, regex;

    if (this._weekdaysParseExact) {
        return handleStrictParse$1.call(this, weekdayName, format, strict);
    }

    if (!this._weekdaysParse) {
        this._weekdaysParse = [];
        this._minWeekdaysParse = [];
        this._shortWeekdaysParse = [];
        this._fullWeekdaysParse = [];
    }

    for (i = 0; i < 7; i++) {
        // make the regex if we don't have it already

        mom = createUTC([2000, 1]).day(i);
        if (strict && !this._fullWeekdaysParse[i]) {
            this._fullWeekdaysParse[i] = new RegExp('^' + this.weekdays(mom, '').replace('.', '\.?') + '$', 'i');
            this._shortWeekdaysParse[i] = new RegExp('^' + this.weekdaysShort(mom, '').replace('.', '\.?') + '$', 'i');
            this._minWeekdaysParse[i] = new RegExp('^' + this.weekdaysMin(mom, '').replace('.', '\.?') + '$', 'i');
        }
        if (!this._weekdaysParse[i]) {
            regex = '^' + this.weekdays(mom, '') + '|^' + this.weekdaysShort(mom, '') + '|^' + this.weekdaysMin(mom, '');
            this._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');
        }
        // test the regex
        if (strict && format === 'dddd' && this._fullWeekdaysParse[i].test(weekdayName)) {
            return i;
        } else if (strict && format === 'ddd' && this._shortWeekdaysParse[i].test(weekdayName)) {
            return i;
        } else if (strict && format === 'dd' && this._minWeekdaysParse[i].test(weekdayName)) {
            return i;
        } else if (!strict && this._weekdaysParse[i].test(weekdayName)) {
            return i;
        }
    }
}

// MOMENTS

function getSetDayOfWeek (input) {
    if (!this.isValid()) {
        return input != null ? this : NaN;
    }
    var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
    if (input != null) {
        input = parseWeekday(input, this.localeData());
        return this.add(input - day, 'd');
    } else {
        return day;
    }
}

function getSetLocaleDayOfWeek (input) {
    if (!this.isValid()) {
        return input != null ? this : NaN;
    }
    var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
    return input == null ? weekday : this.add(input - weekday, 'd');
}

function getSetISODayOfWeek (input) {
    if (!this.isValid()) {
        return input != null ? this : NaN;
    }

    // behaves the same as moment#day except
    // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
    // as a setter, sunday should belong to the previous week.

    if (input != null) {
        var weekday = parseIsoWeekday(input, this.localeData());
        return this.day(this.day() % 7 ? weekday : weekday - 7);
    } else {
        return this.day() || 7;
    }
}

var defaultWeekdaysRegex = matchWord;
function weekdaysRegex (isStrict) {
    if (this._weekdaysParseExact) {
        if (!hasOwnProp(this, '_weekdaysRegex')) {
            computeWeekdaysParse.call(this);
        }
        if (isStrict) {
            return this._weekdaysStrictRegex;
        } else {
            return this._weekdaysRegex;
        }
    } else {
        if (!hasOwnProp(this, '_weekdaysRegex')) {
            this._weekdaysRegex = defaultWeekdaysRegex;
        }
        return this._weekdaysStrictRegex && isStrict ?
            this._weekdaysStrictRegex : this._weekdaysRegex;
    }
}

var defaultWeekdaysShortRegex = matchWord;
function weekdaysShortRegex (isStrict) {
    if (this._weekdaysParseExact) {
        if (!hasOwnProp(this, '_weekdaysRegex')) {
            computeWeekdaysParse.call(this);
        }
        if (isStrict) {
            return this._weekdaysShortStrictRegex;
        } else {
            return this._weekdaysShortRegex;
        }
    } else {
        if (!hasOwnProp(this, '_weekdaysShortRegex')) {
            this._weekdaysShortRegex = defaultWeekdaysShortRegex;
        }
        return this._weekdaysShortStrictRegex && isStrict ?
            this._weekdaysShortStrictRegex : this._weekdaysShortRegex;
    }
}

var defaultWeekdaysMinRegex = matchWord;
function weekdaysMinRegex (isStrict) {
    if (this._weekdaysParseExact) {
        if (!hasOwnProp(this, '_weekdaysRegex')) {
            computeWeekdaysParse.call(this);
        }
        if (isStrict) {
            return this._weekdaysMinStrictRegex;
        } else {
            return this._weekdaysMinRegex;
        }
    } else {
        if (!hasOwnProp(this, '_weekdaysMinRegex')) {
            this._weekdaysMinRegex = defaultWeekdaysMinRegex;
        }
        return this._weekdaysMinStrictRegex && isStrict ?
            this._weekdaysMinStrictRegex : this._weekdaysMinRegex;
    }
}


function computeWeekdaysParse () {
    function cmpLenRev(a, b) {
        return b.length - a.length;
    }

    var minPieces = [], shortPieces = [], longPieces = [], mixedPieces = [],
        i, mom, minp, shortp, longp;
    for (i = 0; i < 7; i++) {
        // make the regex if we don't have it already
        mom = createUTC([2000, 1]).day(i);
        minp = this.weekdaysMin(mom, '');
        shortp = this.weekdaysShort(mom, '');
        longp = this.weekdays(mom, '');
        minPieces.push(minp);
        shortPieces.push(shortp);
        longPieces.push(longp);
        mixedPieces.push(minp);
        mixedPieces.push(shortp);
        mixedPieces.push(longp);
    }
    // Sorting makes sure if one weekday (or abbr) is a prefix of another it
    // will match the longer piece.
    minPieces.sort(cmpLenRev);
    shortPieces.sort(cmpLenRev);
    longPieces.sort(cmpLenRev);
    mixedPieces.sort(cmpLenRev);
    for (i = 0; i < 7; i++) {
        shortPieces[i] = regexEscape(shortPieces[i]);
        longPieces[i] = regexEscape(longPieces[i]);
        mixedPieces[i] = regexEscape(mixedPieces[i]);
    }

    this._weekdaysRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
    this._weekdaysShortRegex = this._weekdaysRegex;
    this._weekdaysMinRegex = this._weekdaysRegex;

    this._weekdaysStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
    this._weekdaysShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
    this._weekdaysMinStrictRegex = new RegExp('^(' + minPieces.join('|') + ')', 'i');
}

// FORMATTING

function hFormat() {
    return this.hours() % 12 || 12;
}

function kFormat() {
    return this.hours() || 24;
}

addFormatToken('H', ['HH', 2], 0, 'hour');
addFormatToken('h', ['hh', 2], 0, hFormat);
addFormatToken('k', ['kk', 2], 0, kFormat);

addFormatToken('hmm', 0, 0, function () {
    return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2);
});

addFormatToken('hmmss', 0, 0, function () {
    return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2) +
        zeroFill(this.seconds(), 2);
});

addFormatToken('Hmm', 0, 0, function () {
    return '' + this.hours() + zeroFill(this.minutes(), 2);
});

addFormatToken('Hmmss', 0, 0, function () {
    return '' + this.hours() + zeroFill(this.minutes(), 2) +
        zeroFill(this.seconds(), 2);
});

function meridiem (token, lowercase) {
    addFormatToken(token, 0, 0, function () {
        return this.localeData().meridiem(this.hours(), this.minutes(), lowercase);
    });
}

meridiem('a', true);
meridiem('A', false);

// ALIASES

addUnitAlias('hour', 'h');

// PRIORITY
addUnitPriority('hour', 13);

// PARSING

function matchMeridiem (isStrict, locale) {
    return locale._meridiemParse;
}

addRegexToken('a',  matchMeridiem);
addRegexToken('A',  matchMeridiem);
addRegexToken('H',  match1to2);
addRegexToken('h',  match1to2);
addRegexToken('k',  match1to2);
addRegexToken('HH', match1to2, match2);
addRegexToken('hh', match1to2, match2);
addRegexToken('kk', match1to2, match2);

addRegexToken('hmm', match3to4);
addRegexToken('hmmss', match5to6);
addRegexToken('Hmm', match3to4);
addRegexToken('Hmmss', match5to6);

addParseToken(['H', 'HH'], HOUR);
addParseToken(['k', 'kk'], function (input, array, config) {
    var kInput = toInt(input);
    array[HOUR] = kInput === 24 ? 0 : kInput;
});
addParseToken(['a', 'A'], function (input, array, config) {
    config._isPm = config._locale.isPM(input);
    config._meridiem = input;
});
addParseToken(['h', 'hh'], function (input, array, config) {
    array[HOUR] = toInt(input);
    getParsingFlags(config).bigHour = true;
});
addParseToken('hmm', function (input, array, config) {
    var pos = input.length - 2;
    array[HOUR] = toInt(input.substr(0, pos));
    array[MINUTE] = toInt(input.substr(pos));
    getParsingFlags(config).bigHour = true;
});
addParseToken('hmmss', function (input, array, config) {
    var pos1 = input.length - 4;
    var pos2 = input.length - 2;
    array[HOUR] = toInt(input.substr(0, pos1));
    array[MINUTE] = toInt(input.substr(pos1, 2));
    array[SECOND] = toInt(input.substr(pos2));
    getParsingFlags(config).bigHour = true;
});
addParseToken('Hmm', function (input, array, config) {
    var pos = input.length - 2;
    array[HOUR] = toInt(input.substr(0, pos));
    array[MINUTE] = toInt(input.substr(pos));
});
addParseToken('Hmmss', function (input, array, config) {
    var pos1 = input.length - 4;
    var pos2 = input.length - 2;
    array[HOUR] = toInt(input.substr(0, pos1));
    array[MINUTE] = toInt(input.substr(pos1, 2));
    array[SECOND] = toInt(input.substr(pos2));
});

// LOCALES

function localeIsPM (input) {
    // IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
    // Using charAt should be more compatible.
    return ((input + '').toLowerCase().charAt(0) === 'p');
}

var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i;
function localeMeridiem (hours, minutes, isLower) {
    if (hours > 11) {
        return isLower ? 'pm' : 'PM';
    } else {
        return isLower ? 'am' : 'AM';
    }
}


// MOMENTS

// Setting the hour should keep the time, because the user explicitly
// specified which hour he wants. So trying to maintain the same hour (in
// a new timezone) makes sense. Adding/subtracting hours does not follow
// this rule.
var getSetHour = makeGetSet('Hours', true);

// months
// week
// weekdays
// meridiem
var baseConfig = {
    calendar: defaultCalendar,
    longDateFormat: defaultLongDateFormat,
    invalidDate: defaultInvalidDate,
    ordinal: defaultOrdinal,
    dayOfMonthOrdinalParse: defaultDayOfMonthOrdinalParse,
    relativeTime: defaultRelativeTime,

    months: defaultLocaleMonths,
    monthsShort: defaultLocaleMonthsShort,

    week: defaultLocaleWeek,

    weekdays: defaultLocaleWeekdays,
    weekdaysMin: defaultLocaleWeekdaysMin,
    weekdaysShort: defaultLocaleWeekdaysShort,

    meridiemParse: defaultLocaleMeridiemParse
};

// internal storage for locale config files
var locales = {};
var localeFamilies = {};
var globalLocale;

function normalizeLocale(key) {
    return key ? key.toLowerCase().replace('_', '-') : key;
}

// pick the locale from the array
// try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
// substring from most specific to least, but move to the next array item if it's a more specific variant than the current root
function chooseLocale(names) {
    var i = 0, j, next, locale, split;

    while (i < names.length) {
        split = normalizeLocale(names[i]).split('-');
        j = split.length;
        next = normalizeLocale(names[i + 1]);
        next = next ? next.split('-') : null;
        while (j > 0) {
            locale = loadLocale(split.slice(0, j).join('-'));
            if (locale) {
                return locale;
            }
            if (next && next.length >= j && compareArrays(split, next, true) >= j - 1) {
                //the next array item is better than a shallower substring of this one
                break;
            }
            j--;
        }
        i++;
    }
    return null;
}

function loadLocale(name) {
    var oldLocale = null;
    // TODO: Find a better way to register and load all the locales in Node
    if (!locales[name] && (typeof module !== 'undefined') &&
            module && module.exports) {
        try {
            oldLocale = globalLocale._abbr;
            var aliasedRequire = require;
            __webpack_require__(620)("./" + name);
            getSetGlobalLocale(oldLocale);
        } catch (e) {}
    }
    return locales[name];
}

// This function will load locale and then set the global locale.  If
// no arguments are passed in, it will simply return the current global
// locale key.
function getSetGlobalLocale (key, values) {
    var data;
    if (key) {
        if (isUndefined(values)) {
            data = getLocale(key);
        }
        else {
            data = defineLocale(key, values);
        }

        if (data) {
            // moment.duration._locale = moment._locale = data;
            globalLocale = data;
        }
    }

    return globalLocale._abbr;
}

function defineLocale (name, config) {
    if (config !== null) {
        var parentConfig = baseConfig;
        config.abbr = name;
        if (locales[name] != null) {
            deprecateSimple('defineLocaleOverride',
                    'use moment.updateLocale(localeName, config) to change ' +
                    'an existing locale. moment.defineLocale(localeName, ' +
                    'config) should only be used for creating a new locale ' +
                    'See http://momentjs.com/guides/#/warnings/define-locale/ for more info.');
            parentConfig = locales[name]._config;
        } else if (config.parentLocale != null) {
            if (locales[config.parentLocale] != null) {
                parentConfig = locales[config.parentLocale]._config;
            } else {
                if (!localeFamilies[config.parentLocale]) {
                    localeFamilies[config.parentLocale] = [];
                }
                localeFamilies[config.parentLocale].push({
                    name: name,
                    config: config
                });
                return null;
            }
        }
        locales[name] = new Locale(mergeConfigs(parentConfig, config));

        if (localeFamilies[name]) {
            localeFamilies[name].forEach(function (x) {
                defineLocale(x.name, x.config);
            });
        }

        // backwards compat for now: also set the locale
        // make sure we set the locale AFTER all child locales have been
        // created, so we won't end up with the child locale set.
        getSetGlobalLocale(name);


        return locales[name];
    } else {
        // useful for testing
        delete locales[name];
        return null;
    }
}

function updateLocale(name, config) {
    if (config != null) {
        var locale, tmpLocale, parentConfig = baseConfig;
        // MERGE
        tmpLocale = loadLocale(name);
        if (tmpLocale != null) {
            parentConfig = tmpLocale._config;
        }
        config = mergeConfigs(parentConfig, config);
        locale = new Locale(config);
        locale.parentLocale = locales[name];
        locales[name] = locale;

        // backwards compat for now: also set the locale
        getSetGlobalLocale(name);
    } else {
        // pass null for config to unupdate, useful for tests
        if (locales[name] != null) {
            if (locales[name].parentLocale != null) {
                locales[name] = locales[name].parentLocale;
            } else if (locales[name] != null) {
                delete locales[name];
            }
        }
    }
    return locales[name];
}

// returns locale data
function getLocale (key) {
    var locale;

    if (key && key._locale && key._locale._abbr) {
        key = key._locale._abbr;
    }

    if (!key) {
        return globalLocale;
    }

    if (!isArray(key)) {
        //short-circuit everything else
        locale = loadLocale(key);
        if (locale) {
            return locale;
        }
        key = [key];
    }

    return chooseLocale(key);
}

function listLocales() {
    return keys(locales);
}

function checkOverflow (m) {
    var overflow;
    var a = m._a;

    if (a && getParsingFlags(m).overflow === -2) {
        overflow =
            a[MONTH]       < 0 || a[MONTH]       > 11  ? MONTH :
            a[DATE]        < 1 || a[DATE]        > daysInMonth(a[YEAR], a[MONTH]) ? DATE :
            a[HOUR]        < 0 || a[HOUR]        > 24 || (a[HOUR] === 24 && (a[MINUTE] !== 0 || a[SECOND] !== 0 || a[MILLISECOND] !== 0)) ? HOUR :
            a[MINUTE]      < 0 || a[MINUTE]      > 59  ? MINUTE :
            a[SECOND]      < 0 || a[SECOND]      > 59  ? SECOND :
            a[MILLISECOND] < 0 || a[MILLISECOND] > 999 ? MILLISECOND :
            -1;

        if (getParsingFlags(m)._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) {
            overflow = DATE;
        }
        if (getParsingFlags(m)._overflowWeeks && overflow === -1) {
            overflow = WEEK;
        }
        if (getParsingFlags(m)._overflowWeekday && overflow === -1) {
            overflow = WEEKDAY;
        }

        getParsingFlags(m).overflow = overflow;
    }

    return m;
}

// Pick the first defined of two or three arguments.
function defaults(a, b, c) {
    if (a != null) {
        return a;
    }
    if (b != null) {
        return b;
    }
    return c;
}

function currentDateArray(config) {
    // hooks is actually the exported moment object
    var nowValue = new Date(hooks.now());
    if (config._useUTC) {
        return [nowValue.getUTCFullYear(), nowValue.getUTCMonth(), nowValue.getUTCDate()];
    }
    return [nowValue.getFullYear(), nowValue.getMonth(), nowValue.getDate()];
}

// convert an array to a date.
// the array should mirror the parameters below
// note: all values past the year are optional and will default to the lowest possible value.
// [year, month, day , hour, minute, second, millisecond]
function configFromArray (config) {
    var i, date, input = [], currentDate, expectedWeekday, yearToUse;

    if (config._d) {
        return;
    }

    currentDate = currentDateArray(config);

    //compute day of the year from weeks and weekdays
    if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
        dayOfYearFromWeekInfo(config);
    }

    //if the day of the year is set, figure out what it is
    if (config._dayOfYear != null) {
        yearToUse = defaults(config._a[YEAR], currentDate[YEAR]);

        if (config._dayOfYear > daysInYear(yearToUse) || config._dayOfYear === 0) {
            getParsingFlags(config)._overflowDayOfYear = true;
        }

        date = createUTCDate(yearToUse, 0, config._dayOfYear);
        config._a[MONTH] = date.getUTCMonth();
        config._a[DATE] = date.getUTCDate();
    }

    // Default to current date.
    // * if no year, month, day of month are given, default to today
    // * if day of month is given, default month and year
    // * if month is given, default only year
    // * if year is given, don't default anything
    for (i = 0; i < 3 && config._a[i] == null; ++i) {
        config._a[i] = input[i] = currentDate[i];
    }

    // Zero out whatever was not defaulted, including time
    for (; i < 7; i++) {
        config._a[i] = input[i] = (config._a[i] == null) ? (i === 2 ? 1 : 0) : config._a[i];
    }

    // Check for 24:00:00.000
    if (config._a[HOUR] === 24 &&
            config._a[MINUTE] === 0 &&
            config._a[SECOND] === 0 &&
            config._a[MILLISECOND] === 0) {
        config._nextDay = true;
        config._a[HOUR] = 0;
    }

    config._d = (config._useUTC ? createUTCDate : createDate).apply(null, input);
    expectedWeekday = config._useUTC ? config._d.getUTCDay() : config._d.getDay();

    // Apply timezone offset from input. The actual utcOffset can be changed
    // with parseZone.
    if (config._tzm != null) {
        config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
    }

    if (config._nextDay) {
        config._a[HOUR] = 24;
    }

    // check for mismatching day of week
    if (config._w && typeof config._w.d !== 'undefined' && config._w.d !== expectedWeekday) {
        getParsingFlags(config).weekdayMismatch = true;
    }
}

function dayOfYearFromWeekInfo(config) {
    var w, weekYear, week, weekday, dow, doy, temp, weekdayOverflow;

    w = config._w;
    if (w.GG != null || w.W != null || w.E != null) {
        dow = 1;
        doy = 4;

        // TODO: We need to take the current isoWeekYear, but that depends on
        // how we interpret now (local, utc, fixed offset). So create
        // a now version of current config (take local/utc/offset flags, and
        // create now).
        weekYear = defaults(w.GG, config._a[YEAR], weekOfYear(createLocal(), 1, 4).year);
        week = defaults(w.W, 1);
        weekday = defaults(w.E, 1);
        if (weekday < 1 || weekday > 7) {
            weekdayOverflow = true;
        }
    } else {
        dow = config._locale._week.dow;
        doy = config._locale._week.doy;

        var curWeek = weekOfYear(createLocal(), dow, doy);

        weekYear = defaults(w.gg, config._a[YEAR], curWeek.year);

        // Default to current week.
        week = defaults(w.w, curWeek.week);

        if (w.d != null) {
            // weekday -- low day numbers are considered next week
            weekday = w.d;
            if (weekday < 0 || weekday > 6) {
                weekdayOverflow = true;
            }
        } else if (w.e != null) {
            // local weekday -- counting starts from begining of week
            weekday = w.e + dow;
            if (w.e < 0 || w.e > 6) {
                weekdayOverflow = true;
            }
        } else {
            // default to begining of week
            weekday = dow;
        }
    }
    if (week < 1 || week > weeksInYear(weekYear, dow, doy)) {
        getParsingFlags(config)._overflowWeeks = true;
    } else if (weekdayOverflow != null) {
        getParsingFlags(config)._overflowWeekday = true;
    } else {
        temp = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy);
        config._a[YEAR] = temp.year;
        config._dayOfYear = temp.dayOfYear;
    }
}

// iso 8601 regex
// 0000-00-00 0000-W00 or 0000-W00-0 + T + 00 or 00:00 or 00:00:00 or 00:00:00.000 + +00:00 or +0000 or +00)
var extendedIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;
var basicIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;

var tzRegex = /Z|[+-]\d\d(?::?\d\d)?/;

var isoDates = [
    ['YYYYYY-MM-DD', /[+-]\d{6}-\d\d-\d\d/],
    ['YYYY-MM-DD', /\d{4}-\d\d-\d\d/],
    ['GGGG-[W]WW-E', /\d{4}-W\d\d-\d/],
    ['GGGG-[W]WW', /\d{4}-W\d\d/, false],
    ['YYYY-DDD', /\d{4}-\d{3}/],
    ['YYYY-MM', /\d{4}-\d\d/, false],
    ['YYYYYYMMDD', /[+-]\d{10}/],
    ['YYYYMMDD', /\d{8}/],
    // YYYYMM is NOT allowed by the standard
    ['GGGG[W]WWE', /\d{4}W\d{3}/],
    ['GGGG[W]WW', /\d{4}W\d{2}/, false],
    ['YYYYDDD', /\d{7}/]
];

// iso time formats and regexes
var isoTimes = [
    ['HH:mm:ss.SSSS', /\d\d:\d\d:\d\d\.\d+/],
    ['HH:mm:ss,SSSS', /\d\d:\d\d:\d\d,\d+/],
    ['HH:mm:ss', /\d\d:\d\d:\d\d/],
    ['HH:mm', /\d\d:\d\d/],
    ['HHmmss.SSSS', /\d\d\d\d\d\d\.\d+/],
    ['HHmmss,SSSS', /\d\d\d\d\d\d,\d+/],
    ['HHmmss', /\d\d\d\d\d\d/],
    ['HHmm', /\d\d\d\d/],
    ['HH', /\d\d/]
];

var aspNetJsonRegex = /^\/?Date\((\-?\d+)/i;

// date from iso format
function configFromISO(config) {
    var i, l,
        string = config._i,
        match = extendedIsoRegex.exec(string) || basicIsoRegex.exec(string),
        allowTime, dateFormat, timeFormat, tzFormat;

    if (match) {
        getParsingFlags(config).iso = true;

        for (i = 0, l = isoDates.length; i < l; i++) {
            if (isoDates[i][1].exec(match[1])) {
                dateFormat = isoDates[i][0];
                allowTime = isoDates[i][2] !== false;
                break;
            }
        }
        if (dateFormat == null) {
            config._isValid = false;
            return;
        }
        if (match[3]) {
            for (i = 0, l = isoTimes.length; i < l; i++) {
                if (isoTimes[i][1].exec(match[3])) {
                    // match[2] should be 'T' or space
                    timeFormat = (match[2] || ' ') + isoTimes[i][0];
                    break;
                }
            }
            if (timeFormat == null) {
                config._isValid = false;
                return;
            }
        }
        if (!allowTime && timeFormat != null) {
            config._isValid = false;
            return;
        }
        if (match[4]) {
            if (tzRegex.exec(match[4])) {
                tzFormat = 'Z';
            } else {
                config._isValid = false;
                return;
            }
        }
        config._f = dateFormat + (timeFormat || '') + (tzFormat || '');
        configFromStringAndFormat(config);
    } else {
        config._isValid = false;
    }
}

// RFC 2822 regex: For details see https://tools.ietf.org/html/rfc2822#section-3.3
var rfc2822 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;

function extractFromRFC2822Strings(yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr) {
    var result = [
        untruncateYear(yearStr),
        defaultLocaleMonthsShort.indexOf(monthStr),
        parseInt(dayStr, 10),
        parseInt(hourStr, 10),
        parseInt(minuteStr, 10)
    ];

    if (secondStr) {
        result.push(parseInt(secondStr, 10));
    }

    return result;
}

function untruncateYear(yearStr) {
    var year = parseInt(yearStr, 10);
    if (year <= 49) {
        return 2000 + year;
    } else if (year <= 999) {
        return 1900 + year;
    }
    return year;
}

function preprocessRFC2822(s) {
    // Remove comments and folding whitespace and replace multiple-spaces with a single space
    return s.replace(/\([^)]*\)|[\n\t]/g, ' ').replace(/(\s\s+)/g, ' ').trim();
}

function checkWeekday(weekdayStr, parsedInput, config) {
    if (weekdayStr) {
        // TODO: Replace the vanilla JS Date object with an indepentent day-of-week check.
        var weekdayProvided = defaultLocaleWeekdaysShort.indexOf(weekdayStr),
            weekdayActual = new Date(parsedInput[0], parsedInput[1], parsedInput[2]).getDay();
        if (weekdayProvided !== weekdayActual) {
            getParsingFlags(config).weekdayMismatch = true;
            config._isValid = false;
            return false;
        }
    }
    return true;
}

var obsOffsets = {
    UT: 0,
    GMT: 0,
    EDT: -4 * 60,
    EST: -5 * 60,
    CDT: -5 * 60,
    CST: -6 * 60,
    MDT: -6 * 60,
    MST: -7 * 60,
    PDT: -7 * 60,
    PST: -8 * 60
};

function calculateOffset(obsOffset, militaryOffset, numOffset) {
    if (obsOffset) {
        return obsOffsets[obsOffset];
    } else if (militaryOffset) {
        // the only allowed military tz is Z
        return 0;
    } else {
        var hm = parseInt(numOffset, 10);
        var m = hm % 100, h = (hm - m) / 100;
        return h * 60 + m;
    }
}

// date and time from ref 2822 format
function configFromRFC2822(config) {
    var match = rfc2822.exec(preprocessRFC2822(config._i));
    if (match) {
        var parsedArray = extractFromRFC2822Strings(match[4], match[3], match[2], match[5], match[6], match[7]);
        if (!checkWeekday(match[1], parsedArray, config)) {
            return;
        }

        config._a = parsedArray;
        config._tzm = calculateOffset(match[8], match[9], match[10]);

        config._d = createUTCDate.apply(null, config._a);
        config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);

        getParsingFlags(config).rfc2822 = true;
    } else {
        config._isValid = false;
    }
}

// date from iso format or fallback
function configFromString(config) {
    var matched = aspNetJsonRegex.exec(config._i);

    if (matched !== null) {
        config._d = new Date(+matched[1]);
        return;
    }

    configFromISO(config);
    if (config._isValid === false) {
        delete config._isValid;
    } else {
        return;
    }

    configFromRFC2822(config);
    if (config._isValid === false) {
        delete config._isValid;
    } else {
        return;
    }

    // Final attempt, use Input Fallback
    hooks.createFromInputFallback(config);
}

hooks.createFromInputFallback = deprecate(
    'value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), ' +
    'which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are ' +
    'discouraged and will be removed in an upcoming major release. Please refer to ' +
    'http://momentjs.com/guides/#/warnings/js-date/ for more info.',
    function (config) {
        config._d = new Date(config._i + (config._useUTC ? ' UTC' : ''));
    }
);

// constant that refers to the ISO standard
hooks.ISO_8601 = function () {};

// constant that refers to the RFC 2822 form
hooks.RFC_2822 = function () {};

// date from string and format string
function configFromStringAndFormat(config) {
    // TODO: Move this to another part of the creation flow to prevent circular deps
    if (config._f === hooks.ISO_8601) {
        configFromISO(config);
        return;
    }
    if (config._f === hooks.RFC_2822) {
        configFromRFC2822(config);
        return;
    }
    config._a = [];
    getParsingFlags(config).empty = true;

    // This array is used to make a Date, either with `new Date` or `Date.UTC`
    var string = '' + config._i,
        i, parsedInput, tokens, token, skipped,
        stringLength = string.length,
        totalParsedInputLength = 0;

    tokens = expandFormat(config._f, config._locale).match(formattingTokens) || [];

    for (i = 0; i < tokens.length; i++) {
        token = tokens[i];
        parsedInput = (string.match(getParseRegexForToken(token, config)) || [])[0];
        // console.log('token', token, 'parsedInput', parsedInput,
        //         'regex', getParseRegexForToken(token, config));
        if (parsedInput) {
            skipped = string.substr(0, string.indexOf(parsedInput));
            if (skipped.length > 0) {
                getParsingFlags(config).unusedInput.push(skipped);
            }
            string = string.slice(string.indexOf(parsedInput) + parsedInput.length);
            totalParsedInputLength += parsedInput.length;
        }
        // don't parse if it's not a known token
        if (formatTokenFunctions[token]) {
            if (parsedInput) {
                getParsingFlags(config).empty = false;
            }
            else {
                getParsingFlags(config).unusedTokens.push(token);
            }
            addTimeToArrayFromToken(token, parsedInput, config);
        }
        else if (config._strict && !parsedInput) {
            getParsingFlags(config).unusedTokens.push(token);
        }
    }

    // add remaining unparsed input length to the string
    getParsingFlags(config).charsLeftOver = stringLength - totalParsedInputLength;
    if (string.length > 0) {
        getParsingFlags(config).unusedInput.push(string);
    }

    // clear _12h flag if hour is <= 12
    if (config._a[HOUR] <= 12 &&
        getParsingFlags(config).bigHour === true &&
        config._a[HOUR] > 0) {
        getParsingFlags(config).bigHour = undefined;
    }

    getParsingFlags(config).parsedDateParts = config._a.slice(0);
    getParsingFlags(config).meridiem = config._meridiem;
    // handle meridiem
    config._a[HOUR] = meridiemFixWrap(config._locale, config._a[HOUR], config._meridiem);

    configFromArray(config);
    checkOverflow(config);
}


function meridiemFixWrap (locale, hour, meridiem) {
    var isPm;

    if (meridiem == null) {
        // nothing to do
        return hour;
    }
    if (locale.meridiemHour != null) {
        return locale.meridiemHour(hour, meridiem);
    } else if (locale.isPM != null) {
        // Fallback
        isPm = locale.isPM(meridiem);
        if (isPm && hour < 12) {
            hour += 12;
        }
        if (!isPm && hour === 12) {
            hour = 0;
        }
        return hour;
    } else {
        // this is not supposed to happen
        return hour;
    }
}

// date from string and array of format strings
function configFromStringAndArray(config) {
    var tempConfig,
        bestMoment,

        scoreToBeat,
        i,
        currentScore;

    if (config._f.length === 0) {
        getParsingFlags(config).invalidFormat = true;
        config._d = new Date(NaN);
        return;
    }

    for (i = 0; i < config._f.length; i++) {
        currentScore = 0;
        tempConfig = copyConfig({}, config);
        if (config._useUTC != null) {
            tempConfig._useUTC = config._useUTC;
        }
        tempConfig._f = config._f[i];
        configFromStringAndFormat(tempConfig);

        if (!isValid(tempConfig)) {
            continue;
        }

        // if there is any input that was not parsed add a penalty for that format
        currentScore += getParsingFlags(tempConfig).charsLeftOver;

        //or tokens
        currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;

        getParsingFlags(tempConfig).score = currentScore;

        if (scoreToBeat == null || currentScore < scoreToBeat) {
            scoreToBeat = currentScore;
            bestMoment = tempConfig;
        }
    }

    extend(config, bestMoment || tempConfig);
}

function configFromObject(config) {
    if (config._d) {
        return;
    }

    var i = normalizeObjectUnits(config._i);
    config._a = map([i.year, i.month, i.day || i.date, i.hour, i.minute, i.second, i.millisecond], function (obj) {
        return obj && parseInt(obj, 10);
    });

    configFromArray(config);
}

function createFromConfig (config) {
    var res = new Moment(checkOverflow(prepareConfig(config)));
    if (res._nextDay) {
        // Adding is smart enough around DST
        res.add(1, 'd');
        res._nextDay = undefined;
    }

    return res;
}

function prepareConfig (config) {
    var input = config._i,
        format = config._f;

    config._locale = config._locale || getLocale(config._l);

    if (input === null || (format === undefined && input === '')) {
        return createInvalid({nullInput: true});
    }

    if (typeof input === 'string') {
        config._i = input = config._locale.preparse(input);
    }

    if (isMoment(input)) {
        return new Moment(checkOverflow(input));
    } else if (isDate(input)) {
        config._d = input;
    } else if (isArray(format)) {
        configFromStringAndArray(config);
    } else if (format) {
        configFromStringAndFormat(config);
    }  else {
        configFromInput(config);
    }

    if (!isValid(config)) {
        config._d = null;
    }

    return config;
}

function configFromInput(config) {
    var input = config._i;
    if (isUndefined(input)) {
        config._d = new Date(hooks.now());
    } else if (isDate(input)) {
        config._d = new Date(input.valueOf());
    } else if (typeof input === 'string') {
        configFromString(config);
    } else if (isArray(input)) {
        config._a = map(input.slice(0), function (obj) {
            return parseInt(obj, 10);
        });
        configFromArray(config);
    } else if (isObject(input)) {
        configFromObject(config);
    } else if (isNumber(input)) {
        // from milliseconds
        config._d = new Date(input);
    } else {
        hooks.createFromInputFallback(config);
    }
}

function createLocalOrUTC (input, format, locale, strict, isUTC) {
    var c = {};

    if (locale === true || locale === false) {
        strict = locale;
        locale = undefined;
    }

    if ((isObject(input) && isObjectEmpty(input)) ||
            (isArray(input) && input.length === 0)) {
        input = undefined;
    }
    // object construction must be done this way.
    // https://github.com/moment/moment/issues/1423
    c._isAMomentObject = true;
    c._useUTC = c._isUTC = isUTC;
    c._l = locale;
    c._i = input;
    c._f = format;
    c._strict = strict;

    return createFromConfig(c);
}

function createLocal (input, format, locale, strict) {
    return createLocalOrUTC(input, format, locale, strict, false);
}

var prototypeMin = deprecate(
    'moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/',
    function () {
        var other = createLocal.apply(null, arguments);
        if (this.isValid() && other.isValid()) {
            return other < this ? this : other;
        } else {
            return createInvalid();
        }
    }
);

var prototypeMax = deprecate(
    'moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/',
    function () {
        var other = createLocal.apply(null, arguments);
        if (this.isValid() && other.isValid()) {
            return other > this ? this : other;
        } else {
            return createInvalid();
        }
    }
);

// Pick a moment m from moments so that m[fn](other) is true for all
// other. This relies on the function fn to be transitive.
//
// moments should either be an array of moment objects or an array, whose
// first element is an array of moment objects.
function pickBy(fn, moments) {
    var res, i;
    if (moments.length === 1 && isArray(moments[0])) {
        moments = moments[0];
    }
    if (!moments.length) {
        return createLocal();
    }
    res = moments[0];
    for (i = 1; i < moments.length; ++i) {
        if (!moments[i].isValid() || moments[i][fn](res)) {
            res = moments[i];
        }
    }
    return res;
}

// TODO: Use [].sort instead?
function min () {
    var args = [].slice.call(arguments, 0);

    return pickBy('isBefore', args);
}

function max () {
    var args = [].slice.call(arguments, 0);

    return pickBy('isAfter', args);
}

var now = function () {
    return Date.now ? Date.now() : +(new Date());
};

var ordering = ['year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second', 'millisecond'];

function isDurationValid(m) {
    for (var key in m) {
        if (!(indexOf.call(ordering, key) !== -1 && (m[key] == null || !isNaN(m[key])))) {
            return false;
        }
    }

    var unitHasDecimal = false;
    for (var i = 0; i < ordering.length; ++i) {
        if (m[ordering[i]]) {
            if (unitHasDecimal) {
                return false; // only allow non-integers for smallest unit
            }
            if (parseFloat(m[ordering[i]]) !== toInt(m[ordering[i]])) {
                unitHasDecimal = true;
            }
        }
    }

    return true;
}

function isValid$1() {
    return this._isValid;
}

function createInvalid$1() {
    return createDuration(NaN);
}

function Duration (duration) {
    var normalizedInput = normalizeObjectUnits(duration),
        years = normalizedInput.year || 0,
        quarters = normalizedInput.quarter || 0,
        months = normalizedInput.month || 0,
        weeks = normalizedInput.week || 0,
        days = normalizedInput.day || 0,
        hours = normalizedInput.hour || 0,
        minutes = normalizedInput.minute || 0,
        seconds = normalizedInput.second || 0,
        milliseconds = normalizedInput.millisecond || 0;

    this._isValid = isDurationValid(normalizedInput);

    // representation for dateAddRemove
    this._milliseconds = +milliseconds +
        seconds * 1e3 + // 1000
        minutes * 6e4 + // 1000 * 60
        hours * 1000 * 60 * 60; //using 1000 * 60 * 60 instead of 36e5 to avoid floating point rounding errors https://github.com/moment/moment/issues/2978
    // Because of dateAddRemove treats 24 hours as different from a
    // day when working around DST, we need to store them separately
    this._days = +days +
        weeks * 7;
    // It is impossible to translate months into days without knowing
    // which months you are are talking about, so we have to store
    // it separately.
    this._months = +months +
        quarters * 3 +
        years * 12;

    this._data = {};

    this._locale = getLocale();

    this._bubble();
}

function isDuration (obj) {
    return obj instanceof Duration;
}

function absRound (number) {
    if (number < 0) {
        return Math.round(-1 * number) * -1;
    } else {
        return Math.round(number);
    }
}

// FORMATTING

function offset (token, separator) {
    addFormatToken(token, 0, 0, function () {
        var offset = this.utcOffset();
        var sign = '+';
        if (offset < 0) {
            offset = -offset;
            sign = '-';
        }
        return sign + zeroFill(~~(offset / 60), 2) + separator + zeroFill(~~(offset) % 60, 2);
    });
}

offset('Z', ':');
offset('ZZ', '');

// PARSING

addRegexToken('Z',  matchShortOffset);
addRegexToken('ZZ', matchShortOffset);
addParseToken(['Z', 'ZZ'], function (input, array, config) {
    config._useUTC = true;
    config._tzm = offsetFromString(matchShortOffset, input);
});

// HELPERS

// timezone chunker
// '+10:00' > ['10',  '00']
// '-1530'  > ['-15', '30']
var chunkOffset = /([\+\-]|\d\d)/gi;

function offsetFromString(matcher, string) {
    var matches = (string || '').match(matcher);

    if (matches === null) {
        return null;
    }

    var chunk   = matches[matches.length - 1] || [];
    var parts   = (chunk + '').match(chunkOffset) || ['-', 0, 0];
    var minutes = +(parts[1] * 60) + toInt(parts[2]);

    return minutes === 0 ?
      0 :
      parts[0] === '+' ? minutes : -minutes;
}

// Return a moment from input, that is local/utc/zone equivalent to model.
function cloneWithOffset(input, model) {
    var res, diff;
    if (model._isUTC) {
        res = model.clone();
        diff = (isMoment(input) || isDate(input) ? input.valueOf() : createLocal(input).valueOf()) - res.valueOf();
        // Use low-level api, because this fn is low-level api.
        res._d.setTime(res._d.valueOf() + diff);
        hooks.updateOffset(res, false);
        return res;
    } else {
        return createLocal(input).local();
    }
}

function getDateOffset (m) {
    // On Firefox.24 Date#getTimezoneOffset returns a floating point.
    // https://github.com/moment/moment/pull/1871
    return -Math.round(m._d.getTimezoneOffset() / 15) * 15;
}

// HOOKS

// This function will be called whenever a moment is mutated.
// It is intended to keep the offset in sync with the timezone.
hooks.updateOffset = function () {};

// MOMENTS

// keepLocalTime = true means only change the timezone, without
// affecting the local hour. So 5:31:26 +0300 --[utcOffset(2, true)]-->
// 5:31:26 +0200 It is possible that 5:31:26 doesn't exist with offset
// +0200, so we adjust the time as needed, to be valid.
//
// Keeping the time actually adds/subtracts (one hour)
// from the actual represented time. That is why we call updateOffset
// a second time. In case it wants us to change the offset again
// _changeInProgress == true case, then we have to adjust, because
// there is no such time in the given timezone.
function getSetOffset (input, keepLocalTime, keepMinutes) {
    var offset = this._offset || 0,
        localAdjust;
    if (!this.isValid()) {
        return input != null ? this : NaN;
    }
    if (input != null) {
        if (typeof input === 'string') {
            input = offsetFromString(matchShortOffset, input);
            if (input === null) {
                return this;
            }
        } else if (Math.abs(input) < 16 && !keepMinutes) {
            input = input * 60;
        }
        if (!this._isUTC && keepLocalTime) {
            localAdjust = getDateOffset(this);
        }
        this._offset = input;
        this._isUTC = true;
        if (localAdjust != null) {
            this.add(localAdjust, 'm');
        }
        if (offset !== input) {
            if (!keepLocalTime || this._changeInProgress) {
                addSubtract(this, createDuration(input - offset, 'm'), 1, false);
            } else if (!this._changeInProgress) {
                this._changeInProgress = true;
                hooks.updateOffset(this, true);
                this._changeInProgress = null;
            }
        }
        return this;
    } else {
        return this._isUTC ? offset : getDateOffset(this);
    }
}

function getSetZone (input, keepLocalTime) {
    if (input != null) {
        if (typeof input !== 'string') {
            input = -input;
        }

        this.utcOffset(input, keepLocalTime);

        return this;
    } else {
        return -this.utcOffset();
    }
}

function setOffsetToUTC (keepLocalTime) {
    return this.utcOffset(0, keepLocalTime);
}

function setOffsetToLocal (keepLocalTime) {
    if (this._isUTC) {
        this.utcOffset(0, keepLocalTime);
        this._isUTC = false;

        if (keepLocalTime) {
            this.subtract(getDateOffset(this), 'm');
        }
    }
    return this;
}

function setOffsetToParsedOffset () {
    if (this._tzm != null) {
        this.utcOffset(this._tzm, false, true);
    } else if (typeof this._i === 'string') {
        var tZone = offsetFromString(matchOffset, this._i);
        if (tZone != null) {
            this.utcOffset(tZone);
        }
        else {
            this.utcOffset(0, true);
        }
    }
    return this;
}

function hasAlignedHourOffset (input) {
    if (!this.isValid()) {
        return false;
    }
    input = input ? createLocal(input).utcOffset() : 0;

    return (this.utcOffset() - input) % 60 === 0;
}

function isDaylightSavingTime () {
    return (
        this.utcOffset() > this.clone().month(0).utcOffset() ||
        this.utcOffset() > this.clone().month(5).utcOffset()
    );
}

function isDaylightSavingTimeShifted () {
    if (!isUndefined(this._isDSTShifted)) {
        return this._isDSTShifted;
    }

    var c = {};

    copyConfig(c, this);
    c = prepareConfig(c);

    if (c._a) {
        var other = c._isUTC ? createUTC(c._a) : createLocal(c._a);
        this._isDSTShifted = this.isValid() &&
            compareArrays(c._a, other.toArray()) > 0;
    } else {
        this._isDSTShifted = false;
    }

    return this._isDSTShifted;
}

function isLocal () {
    return this.isValid() ? !this._isUTC : false;
}

function isUtcOffset () {
    return this.isValid() ? this._isUTC : false;
}

function isUtc () {
    return this.isValid() ? this._isUTC && this._offset === 0 : false;
}

// ASP.NET json date format regex
var aspNetRegex = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/;

// from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html
// somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere
// and further modified to allow for strings containing both week and day
var isoRegex = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;

function createDuration (input, key) {
    var duration = input,
        // matching against regexp is expensive, do it on demand
        match = null,
        sign,
        ret,
        diffRes;

    if (isDuration(input)) {
        duration = {
            ms : input._milliseconds,
            d  : input._days,
            M  : input._months
        };
    } else if (isNumber(input)) {
        duration = {};
        if (key) {
            duration[key] = input;
        } else {
            duration.milliseconds = input;
        }
    } else if (!!(match = aspNetRegex.exec(input))) {
        sign = (match[1] === '-') ? -1 : 1;
        duration = {
            y  : 0,
            d  : toInt(match[DATE])                         * sign,
            h  : toInt(match[HOUR])                         * sign,
            m  : toInt(match[MINUTE])                       * sign,
            s  : toInt(match[SECOND])                       * sign,
            ms : toInt(absRound(match[MILLISECOND] * 1000)) * sign // the millisecond decimal point is included in the match
        };
    } else if (!!(match = isoRegex.exec(input))) {
        sign = (match[1] === '-') ? -1 : (match[1] === '+') ? 1 : 1;
        duration = {
            y : parseIso(match[2], sign),
            M : parseIso(match[3], sign),
            w : parseIso(match[4], sign),
            d : parseIso(match[5], sign),
            h : parseIso(match[6], sign),
            m : parseIso(match[7], sign),
            s : parseIso(match[8], sign)
        };
    } else if (duration == null) {// checks for null or undefined
        duration = {};
    } else if (typeof duration === 'object' && ('from' in duration || 'to' in duration)) {
        diffRes = momentsDifference(createLocal(duration.from), createLocal(duration.to));

        duration = {};
        duration.ms = diffRes.milliseconds;
        duration.M = diffRes.months;
    }

    ret = new Duration(duration);

    if (isDuration(input) && hasOwnProp(input, '_locale')) {
        ret._locale = input._locale;
    }

    return ret;
}

createDuration.fn = Duration.prototype;
createDuration.invalid = createInvalid$1;

function parseIso (inp, sign) {
    // We'd normally use ~~inp for this, but unfortunately it also
    // converts floats to ints.
    // inp may be undefined, so careful calling replace on it.
    var res = inp && parseFloat(inp.replace(',', '.'));
    // apply sign while we're at it
    return (isNaN(res) ? 0 : res) * sign;
}

function positiveMomentsDifference(base, other) {
    var res = {milliseconds: 0, months: 0};

    res.months = other.month() - base.month() +
        (other.year() - base.year()) * 12;
    if (base.clone().add(res.months, 'M').isAfter(other)) {
        --res.months;
    }

    res.milliseconds = +other - +(base.clone().add(res.months, 'M'));

    return res;
}

function momentsDifference(base, other) {
    var res;
    if (!(base.isValid() && other.isValid())) {
        return {milliseconds: 0, months: 0};
    }

    other = cloneWithOffset(other, base);
    if (base.isBefore(other)) {
        res = positiveMomentsDifference(base, other);
    } else {
        res = positiveMomentsDifference(other, base);
        res.milliseconds = -res.milliseconds;
        res.months = -res.months;
    }

    return res;
}

// TODO: remove 'name' arg after deprecation is removed
function createAdder(direction, name) {
    return function (val, period) {
        var dur, tmp;
        //invert the arguments, but complain about it
        if (period !== null && !isNaN(+period)) {
            deprecateSimple(name, 'moment().' + name  + '(period, number) is deprecated. Please use moment().' + name + '(number, period). ' +
            'See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.');
            tmp = val; val = period; period = tmp;
        }

        val = typeof val === 'string' ? +val : val;
        dur = createDuration(val, period);
        addSubtract(this, dur, direction);
        return this;
    };
}

function addSubtract (mom, duration, isAdding, updateOffset) {
    var milliseconds = duration._milliseconds,
        days = absRound(duration._days),
        months = absRound(duration._months);

    if (!mom.isValid()) {
        // No op
        return;
    }

    updateOffset = updateOffset == null ? true : updateOffset;

    if (months) {
        setMonth(mom, get(mom, 'Month') + months * isAdding);
    }
    if (days) {
        set$1(mom, 'Date', get(mom, 'Date') + days * isAdding);
    }
    if (milliseconds) {
        mom._d.setTime(mom._d.valueOf() + milliseconds * isAdding);
    }
    if (updateOffset) {
        hooks.updateOffset(mom, days || months);
    }
}

var add      = createAdder(1, 'add');
var subtract = createAdder(-1, 'subtract');

function getCalendarFormat(myMoment, now) {
    var diff = myMoment.diff(now, 'days', true);
    return diff < -6 ? 'sameElse' :
            diff < -1 ? 'lastWeek' :
            diff < 0 ? 'lastDay' :
            diff < 1 ? 'sameDay' :
            diff < 2 ? 'nextDay' :
            diff < 7 ? 'nextWeek' : 'sameElse';
}

function calendar$1 (time, formats) {
    // We want to compare the start of today, vs this.
    // Getting start-of-today depends on whether we're local/utc/offset or not.
    var now = time || createLocal(),
        sod = cloneWithOffset(now, this).startOf('day'),
        format = hooks.calendarFormat(this, sod) || 'sameElse';

    var output = formats && (isFunction(formats[format]) ? formats[format].call(this, now) : formats[format]);

    return this.format(output || this.localeData().calendar(format, this, createLocal(now)));
}

function clone () {
    return new Moment(this);
}

function isAfter (input, units) {
    var localInput = isMoment(input) ? input : createLocal(input);
    if (!(this.isValid() && localInput.isValid())) {
        return false;
    }
    units = normalizeUnits(!isUndefined(units) ? units : 'millisecond');
    if (units === 'millisecond') {
        return this.valueOf() > localInput.valueOf();
    } else {
        return localInput.valueOf() < this.clone().startOf(units).valueOf();
    }
}

function isBefore (input, units) {
    var localInput = isMoment(input) ? input : createLocal(input);
    if (!(this.isValid() && localInput.isValid())) {
        return false;
    }
    units = normalizeUnits(!isUndefined(units) ? units : 'millisecond');
    if (units === 'millisecond') {
        return this.valueOf() < localInput.valueOf();
    } else {
        return this.clone().endOf(units).valueOf() < localInput.valueOf();
    }
}

function isBetween (from, to, units, inclusivity) {
    inclusivity = inclusivity || '()';
    return (inclusivity[0] === '(' ? this.isAfter(from, units) : !this.isBefore(from, units)) &&
        (inclusivity[1] === ')' ? this.isBefore(to, units) : !this.isAfter(to, units));
}

function isSame (input, units) {
    var localInput = isMoment(input) ? input : createLocal(input),
        inputMs;
    if (!(this.isValid() && localInput.isValid())) {
        return false;
    }
    units = normalizeUnits(units || 'millisecond');
    if (units === 'millisecond') {
        return this.valueOf() === localInput.valueOf();
    } else {
        inputMs = localInput.valueOf();
        return this.clone().startOf(units).valueOf() <= inputMs && inputMs <= this.clone().endOf(units).valueOf();
    }
}

function isSameOrAfter (input, units) {
    return this.isSame(input, units) || this.isAfter(input,units);
}

function isSameOrBefore (input, units) {
    return this.isSame(input, units) || this.isBefore(input,units);
}

function diff (input, units, asFloat) {
    var that,
        zoneDelta,
        delta, output;

    if (!this.isValid()) {
        return NaN;
    }

    that = cloneWithOffset(input, this);

    if (!that.isValid()) {
        return NaN;
    }

    zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4;

    units = normalizeUnits(units);

    switch (units) {
        case 'year': output = monthDiff(this, that) / 12; break;
        case 'month': output = monthDiff(this, that); break;
        case 'quarter': output = monthDiff(this, that) / 3; break;
        case 'second': output = (this - that) / 1e3; break; // 1000
        case 'minute': output = (this - that) / 6e4; break; // 1000 * 60
        case 'hour': output = (this - that) / 36e5; break; // 1000 * 60 * 60
        case 'day': output = (this - that - zoneDelta) / 864e5; break; // 1000 * 60 * 60 * 24, negate dst
        case 'week': output = (this - that - zoneDelta) / 6048e5; break; // 1000 * 60 * 60 * 24 * 7, negate dst
        default: output = this - that;
    }

    return asFloat ? output : absFloor(output);
}

function monthDiff (a, b) {
    // difference in months
    var wholeMonthDiff = ((b.year() - a.year()) * 12) + (b.month() - a.month()),
        // b is in (anchor - 1 month, anchor + 1 month)
        anchor = a.clone().add(wholeMonthDiff, 'months'),
        anchor2, adjust;

    if (b - anchor < 0) {
        anchor2 = a.clone().add(wholeMonthDiff - 1, 'months');
        // linear across the month
        adjust = (b - anchor) / (anchor - anchor2);
    } else {
        anchor2 = a.clone().add(wholeMonthDiff + 1, 'months');
        // linear across the month
        adjust = (b - anchor) / (anchor2 - anchor);
    }

    //check for negative zero, return zero if negative zero
    return -(wholeMonthDiff + adjust) || 0;
}

hooks.defaultFormat = 'YYYY-MM-DDTHH:mm:ssZ';
hooks.defaultFormatUtc = 'YYYY-MM-DDTHH:mm:ss[Z]';

function toString () {
    return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
}

function toISOString(keepOffset) {
    if (!this.isValid()) {
        return null;
    }
    var utc = keepOffset !== true;
    var m = utc ? this.clone().utc() : this;
    if (m.year() < 0 || m.year() > 9999) {
        return formatMoment(m, utc ? 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]' : 'YYYYYY-MM-DD[T]HH:mm:ss.SSSZ');
    }
    if (isFunction(Date.prototype.toISOString)) {
        // native implementation is ~50x faster, use it when we can
        if (utc) {
            return this.toDate().toISOString();
        } else {
            return new Date(this._d.valueOf()).toISOString().replace('Z', formatMoment(m, 'Z'));
        }
    }
    return formatMoment(m, utc ? 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]' : 'YYYY-MM-DD[T]HH:mm:ss.SSSZ');
}

/**
 * Return a human readable representation of a moment that can
 * also be evaluated to get a new moment which is the same
 *
 * @link https://nodejs.org/dist/latest/docs/api/util.html#util_custom_inspect_function_on_objects
 */
function inspect () {
    if (!this.isValid()) {
        return 'moment.invalid(/* ' + this._i + ' */)';
    }
    var func = 'moment';
    var zone = '';
    if (!this.isLocal()) {
        func = this.utcOffset() === 0 ? 'moment.utc' : 'moment.parseZone';
        zone = 'Z';
    }
    var prefix = '[' + func + '("]';
    var year = (0 <= this.year() && this.year() <= 9999) ? 'YYYY' : 'YYYYYY';
    var datetime = '-MM-DD[T]HH:mm:ss.SSS';
    var suffix = zone + '[")]';

    return this.format(prefix + year + datetime + suffix);
}

function format (inputString) {
    if (!inputString) {
        inputString = this.isUtc() ? hooks.defaultFormatUtc : hooks.defaultFormat;
    }
    var output = formatMoment(this, inputString);
    return this.localeData().postformat(output);
}

function from (time, withoutSuffix) {
    if (this.isValid() &&
            ((isMoment(time) && time.isValid()) ||
             createLocal(time).isValid())) {
        return createDuration({to: this, from: time}).locale(this.locale()).humanize(!withoutSuffix);
    } else {
        return this.localeData().invalidDate();
    }
}

function fromNow (withoutSuffix) {
    return this.from(createLocal(), withoutSuffix);
}

function to (time, withoutSuffix) {
    if (this.isValid() &&
            ((isMoment(time) && time.isValid()) ||
             createLocal(time).isValid())) {
        return createDuration({from: this, to: time}).locale(this.locale()).humanize(!withoutSuffix);
    } else {
        return this.localeData().invalidDate();
    }
}

function toNow (withoutSuffix) {
    return this.to(createLocal(), withoutSuffix);
}

// If passed a locale key, it will set the locale for this
// instance.  Otherwise, it will return the locale configuration
// variables for this instance.
function locale (key) {
    var newLocaleData;

    if (key === undefined) {
        return this._locale._abbr;
    } else {
        newLocaleData = getLocale(key);
        if (newLocaleData != null) {
            this._locale = newLocaleData;
        }
        return this;
    }
}

var lang = deprecate(
    'moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.',
    function (key) {
        if (key === undefined) {
            return this.localeData();
        } else {
            return this.locale(key);
        }
    }
);

function localeData () {
    return this._locale;
}

function startOf (units) {
    units = normalizeUnits(units);
    // the following switch intentionally omits break keywords
    // to utilize falling through the cases.
    switch (units) {
        case 'year':
            this.month(0);
            /* falls through */
        case 'quarter':
        case 'month':
            this.date(1);
            /* falls through */
        case 'week':
        case 'isoWeek':
        case 'day':
        case 'date':
            this.hours(0);
            /* falls through */
        case 'hour':
            this.minutes(0);
            /* falls through */
        case 'minute':
            this.seconds(0);
            /* falls through */
        case 'second':
            this.milliseconds(0);
    }

    // weeks are a special case
    if (units === 'week') {
        this.weekday(0);
    }
    if (units === 'isoWeek') {
        this.isoWeekday(1);
    }

    // quarters are also special
    if (units === 'quarter') {
        this.month(Math.floor(this.month() / 3) * 3);
    }

    return this;
}

function endOf (units) {
    units = normalizeUnits(units);
    if (units === undefined || units === 'millisecond') {
        return this;
    }

    // 'date' is an alias for 'day', so it should be considered as such.
    if (units === 'date') {
        units = 'day';
    }

    return this.startOf(units).add(1, (units === 'isoWeek' ? 'week' : units)).subtract(1, 'ms');
}

function valueOf () {
    return this._d.valueOf() - ((this._offset || 0) * 60000);
}

function unix () {
    return Math.floor(this.valueOf() / 1000);
}

function toDate () {
    return new Date(this.valueOf());
}

function toArray () {
    var m = this;
    return [m.year(), m.month(), m.date(), m.hour(), m.minute(), m.second(), m.millisecond()];
}

function toObject () {
    var m = this;
    return {
        years: m.year(),
        months: m.month(),
        date: m.date(),
        hours: m.hours(),
        minutes: m.minutes(),
        seconds: m.seconds(),
        milliseconds: m.milliseconds()
    };
}

function toJSON () {
    // new Date(NaN).toJSON() === null
    return this.isValid() ? this.toISOString() : null;
}

function isValid$2 () {
    return isValid(this);
}

function parsingFlags () {
    return extend({}, getParsingFlags(this));
}

function invalidAt () {
    return getParsingFlags(this).overflow;
}

function creationData() {
    return {
        input: this._i,
        format: this._f,
        locale: this._locale,
        isUTC: this._isUTC,
        strict: this._strict
    };
}

// FORMATTING

addFormatToken(0, ['gg', 2], 0, function () {
    return this.weekYear() % 100;
});

addFormatToken(0, ['GG', 2], 0, function () {
    return this.isoWeekYear() % 100;
});

function addWeekYearFormatToken (token, getter) {
    addFormatToken(0, [token, token.length], 0, getter);
}

addWeekYearFormatToken('gggg',     'weekYear');
addWeekYearFormatToken('ggggg',    'weekYear');
addWeekYearFormatToken('GGGG',  'isoWeekYear');
addWeekYearFormatToken('GGGGG', 'isoWeekYear');

// ALIASES

addUnitAlias('weekYear', 'gg');
addUnitAlias('isoWeekYear', 'GG');

// PRIORITY

addUnitPriority('weekYear', 1);
addUnitPriority('isoWeekYear', 1);


// PARSING

addRegexToken('G',      matchSigned);
addRegexToken('g',      matchSigned);
addRegexToken('GG',     match1to2, match2);
addRegexToken('gg',     match1to2, match2);
addRegexToken('GGGG',   match1to4, match4);
addRegexToken('gggg',   match1to4, match4);
addRegexToken('GGGGG',  match1to6, match6);
addRegexToken('ggggg',  match1to6, match6);

addWeekParseToken(['gggg', 'ggggg', 'GGGG', 'GGGGG'], function (input, week, config, token) {
    week[token.substr(0, 2)] = toInt(input);
});

addWeekParseToken(['gg', 'GG'], function (input, week, config, token) {
    week[token] = hooks.parseTwoDigitYear(input);
});

// MOMENTS

function getSetWeekYear (input) {
    return getSetWeekYearHelper.call(this,
            input,
            this.week(),
            this.weekday(),
            this.localeData()._week.dow,
            this.localeData()._week.doy);
}

function getSetISOWeekYear (input) {
    return getSetWeekYearHelper.call(this,
            input, this.isoWeek(), this.isoWeekday(), 1, 4);
}

function getISOWeeksInYear () {
    return weeksInYear(this.year(), 1, 4);
}

function getWeeksInYear () {
    var weekInfo = this.localeData()._week;
    return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
}

function getSetWeekYearHelper(input, week, weekday, dow, doy) {
    var weeksTarget;
    if (input == null) {
        return weekOfYear(this, dow, doy).year;
    } else {
        weeksTarget = weeksInYear(input, dow, doy);
        if (week > weeksTarget) {
            week = weeksTarget;
        }
        return setWeekAll.call(this, input, week, weekday, dow, doy);
    }
}

function setWeekAll(weekYear, week, weekday, dow, doy) {
    var dayOfYearData = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy),
        date = createUTCDate(dayOfYearData.year, 0, dayOfYearData.dayOfYear);

    this.year(date.getUTCFullYear());
    this.month(date.getUTCMonth());
    this.date(date.getUTCDate());
    return this;
}

// FORMATTING

addFormatToken('Q', 0, 'Qo', 'quarter');

// ALIASES

addUnitAlias('quarter', 'Q');

// PRIORITY

addUnitPriority('quarter', 7);

// PARSING

addRegexToken('Q', match1);
addParseToken('Q', function (input, array) {
    array[MONTH] = (toInt(input) - 1) * 3;
});

// MOMENTS

function getSetQuarter (input) {
    return input == null ? Math.ceil((this.month() + 1) / 3) : this.month((input - 1) * 3 + this.month() % 3);
}

// FORMATTING

addFormatToken('D', ['DD', 2], 'Do', 'date');

// ALIASES

addUnitAlias('date', 'D');

// PRIOROITY
addUnitPriority('date', 9);

// PARSING

addRegexToken('D',  match1to2);
addRegexToken('DD', match1to2, match2);
addRegexToken('Do', function (isStrict, locale) {
    // TODO: Remove "ordinalParse" fallback in next major release.
    return isStrict ?
      (locale._dayOfMonthOrdinalParse || locale._ordinalParse) :
      locale._dayOfMonthOrdinalParseLenient;
});

addParseToken(['D', 'DD'], DATE);
addParseToken('Do', function (input, array) {
    array[DATE] = toInt(input.match(match1to2)[0]);
});

// MOMENTS

var getSetDayOfMonth = makeGetSet('Date', true);

// FORMATTING

addFormatToken('DDD', ['DDDD', 3], 'DDDo', 'dayOfYear');

// ALIASES

addUnitAlias('dayOfYear', 'DDD');

// PRIORITY
addUnitPriority('dayOfYear', 4);

// PARSING

addRegexToken('DDD',  match1to3);
addRegexToken('DDDD', match3);
addParseToken(['DDD', 'DDDD'], function (input, array, config) {
    config._dayOfYear = toInt(input);
});

// HELPERS

// MOMENTS

function getSetDayOfYear (input) {
    var dayOfYear = Math.round((this.clone().startOf('day') - this.clone().startOf('year')) / 864e5) + 1;
    return input == null ? dayOfYear : this.add((input - dayOfYear), 'd');
}

// FORMATTING

addFormatToken('m', ['mm', 2], 0, 'minute');

// ALIASES

addUnitAlias('minute', 'm');

// PRIORITY

addUnitPriority('minute', 14);

// PARSING

addRegexToken('m',  match1to2);
addRegexToken('mm', match1to2, match2);
addParseToken(['m', 'mm'], MINUTE);

// MOMENTS

var getSetMinute = makeGetSet('Minutes', false);

// FORMATTING

addFormatToken('s', ['ss', 2], 0, 'second');

// ALIASES

addUnitAlias('second', 's');

// PRIORITY

addUnitPriority('second', 15);

// PARSING

addRegexToken('s',  match1to2);
addRegexToken('ss', match1to2, match2);
addParseToken(['s', 'ss'], SECOND);

// MOMENTS

var getSetSecond = makeGetSet('Seconds', false);

// FORMATTING

addFormatToken('S', 0, 0, function () {
    return ~~(this.millisecond() / 100);
});

addFormatToken(0, ['SS', 2], 0, function () {
    return ~~(this.millisecond() / 10);
});

addFormatToken(0, ['SSS', 3], 0, 'millisecond');
addFormatToken(0, ['SSSS', 4], 0, function () {
    return this.millisecond() * 10;
});
addFormatToken(0, ['SSSSS', 5], 0, function () {
    return this.millisecond() * 100;
});
addFormatToken(0, ['SSSSSS', 6], 0, function () {
    return this.millisecond() * 1000;
});
addFormatToken(0, ['SSSSSSS', 7], 0, function () {
    return this.millisecond() * 10000;
});
addFormatToken(0, ['SSSSSSSS', 8], 0, function () {
    return this.millisecond() * 100000;
});
addFormatToken(0, ['SSSSSSSSS', 9], 0, function () {
    return this.millisecond() * 1000000;
});


// ALIASES

addUnitAlias('millisecond', 'ms');

// PRIORITY

addUnitPriority('millisecond', 16);

// PARSING

addRegexToken('S',    match1to3, match1);
addRegexToken('SS',   match1to3, match2);
addRegexToken('SSS',  match1to3, match3);

var token;
for (token = 'SSSS'; token.length <= 9; token += 'S') {
    addRegexToken(token, matchUnsigned);
}

function parseMs(input, array) {
    array[MILLISECOND] = toInt(('0.' + input) * 1000);
}

for (token = 'S'; token.length <= 9; token += 'S') {
    addParseToken(token, parseMs);
}
// MOMENTS

var getSetMillisecond = makeGetSet('Milliseconds', false);

// FORMATTING

addFormatToken('z',  0, 0, 'zoneAbbr');
addFormatToken('zz', 0, 0, 'zoneName');

// MOMENTS

function getZoneAbbr () {
    return this._isUTC ? 'UTC' : '';
}

function getZoneName () {
    return this._isUTC ? 'Coordinated Universal Time' : '';
}

var proto = Moment.prototype;

proto.add               = add;
proto.calendar          = calendar$1;
proto.clone             = clone;
proto.diff              = diff;
proto.endOf             = endOf;
proto.format            = format;
proto.from              = from;
proto.fromNow           = fromNow;
proto.to                = to;
proto.toNow             = toNow;
proto.get               = stringGet;
proto.invalidAt         = invalidAt;
proto.isAfter           = isAfter;
proto.isBefore          = isBefore;
proto.isBetween         = isBetween;
proto.isSame            = isSame;
proto.isSameOrAfter     = isSameOrAfter;
proto.isSameOrBefore    = isSameOrBefore;
proto.isValid           = isValid$2;
proto.lang              = lang;
proto.locale            = locale;
proto.localeData        = localeData;
proto.max               = prototypeMax;
proto.min               = prototypeMin;
proto.parsingFlags      = parsingFlags;
proto.set               = stringSet;
proto.startOf           = startOf;
proto.subtract          = subtract;
proto.toArray           = toArray;
proto.toObject          = toObject;
proto.toDate            = toDate;
proto.toISOString       = toISOString;
proto.inspect           = inspect;
proto.toJSON            = toJSON;
proto.toString          = toString;
proto.unix              = unix;
proto.valueOf           = valueOf;
proto.creationData      = creationData;

// Year
proto.year       = getSetYear;
proto.isLeapYear = getIsLeapYear;

// Week Year
proto.weekYear    = getSetWeekYear;
proto.isoWeekYear = getSetISOWeekYear;

// Quarter
proto.quarter = proto.quarters = getSetQuarter;

// Month
proto.month       = getSetMonth;
proto.daysInMonth = getDaysInMonth;

// Week
proto.week           = proto.weeks        = getSetWeek;
proto.isoWeek        = proto.isoWeeks     = getSetISOWeek;
proto.weeksInYear    = getWeeksInYear;
proto.isoWeeksInYear = getISOWeeksInYear;

// Day
proto.date       = getSetDayOfMonth;
proto.day        = proto.days             = getSetDayOfWeek;
proto.weekday    = getSetLocaleDayOfWeek;
proto.isoWeekday = getSetISODayOfWeek;
proto.dayOfYear  = getSetDayOfYear;

// Hour
proto.hour = proto.hours = getSetHour;

// Minute
proto.minute = proto.minutes = getSetMinute;

// Second
proto.second = proto.seconds = getSetSecond;

// Millisecond
proto.millisecond = proto.milliseconds = getSetMillisecond;

// Offset
proto.utcOffset            = getSetOffset;
proto.utc                  = setOffsetToUTC;
proto.local                = setOffsetToLocal;
proto.parseZone            = setOffsetToParsedOffset;
proto.hasAlignedHourOffset = hasAlignedHourOffset;
proto.isDST                = isDaylightSavingTime;
proto.isLocal              = isLocal;
proto.isUtcOffset          = isUtcOffset;
proto.isUtc                = isUtc;
proto.isUTC                = isUtc;

// Timezone
proto.zoneAbbr = getZoneAbbr;
proto.zoneName = getZoneName;

// Deprecations
proto.dates  = deprecate('dates accessor is deprecated. Use date instead.', getSetDayOfMonth);
proto.months = deprecate('months accessor is deprecated. Use month instead', getSetMonth);
proto.years  = deprecate('years accessor is deprecated. Use year instead', getSetYear);
proto.zone   = deprecate('moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/', getSetZone);
proto.isDSTShifted = deprecate('isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information', isDaylightSavingTimeShifted);

function createUnix (input) {
    return createLocal(input * 1000);
}

function createInZone () {
    return createLocal.apply(null, arguments).parseZone();
}

function preParsePostFormat (string) {
    return string;
}

var proto$1 = Locale.prototype;

proto$1.calendar        = calendar;
proto$1.longDateFormat  = longDateFormat;
proto$1.invalidDate     = invalidDate;
proto$1.ordinal         = ordinal;
proto$1.preparse        = preParsePostFormat;
proto$1.postformat      = preParsePostFormat;
proto$1.relativeTime    = relativeTime;
proto$1.pastFuture      = pastFuture;
proto$1.set             = set;

// Month
proto$1.months            =        localeMonths;
proto$1.monthsShort       =        localeMonthsShort;
proto$1.monthsParse       =        localeMonthsParse;
proto$1.monthsRegex       = monthsRegex;
proto$1.monthsShortRegex  = monthsShortRegex;

// Week
proto$1.week = localeWeek;
proto$1.firstDayOfYear = localeFirstDayOfYear;
proto$1.firstDayOfWeek = localeFirstDayOfWeek;

// Day of Week
proto$1.weekdays       =        localeWeekdays;
proto$1.weekdaysMin    =        localeWeekdaysMin;
proto$1.weekdaysShort  =        localeWeekdaysShort;
proto$1.weekdaysParse  =        localeWeekdaysParse;

proto$1.weekdaysRegex       =        weekdaysRegex;
proto$1.weekdaysShortRegex  =        weekdaysShortRegex;
proto$1.weekdaysMinRegex    =        weekdaysMinRegex;

// Hours
proto$1.isPM = localeIsPM;
proto$1.meridiem = localeMeridiem;

function get$1 (format, index, field, setter) {
    var locale = getLocale();
    var utc = createUTC().set(setter, index);
    return locale[field](utc, format);
}

function listMonthsImpl (format, index, field) {
    if (isNumber(format)) {
        index = format;
        format = undefined;
    }

    format = format || '';

    if (index != null) {
        return get$1(format, index, field, 'month');
    }

    var i;
    var out = [];
    for (i = 0; i < 12; i++) {
        out[i] = get$1(format, i, field, 'month');
    }
    return out;
}

// ()
// (5)
// (fmt, 5)
// (fmt)
// (true)
// (true, 5)
// (true, fmt, 5)
// (true, fmt)
function listWeekdaysImpl (localeSorted, format, index, field) {
    if (typeof localeSorted === 'boolean') {
        if (isNumber(format)) {
            index = format;
            format = undefined;
        }

        format = format || '';
    } else {
        format = localeSorted;
        index = format;
        localeSorted = false;

        if (isNumber(format)) {
            index = format;
            format = undefined;
        }

        format = format || '';
    }

    var locale = getLocale(),
        shift = localeSorted ? locale._week.dow : 0;

    if (index != null) {
        return get$1(format, (index + shift) % 7, field, 'day');
    }

    var i;
    var out = [];
    for (i = 0; i < 7; i++) {
        out[i] = get$1(format, (i + shift) % 7, field, 'day');
    }
    return out;
}

function listMonths (format, index) {
    return listMonthsImpl(format, index, 'months');
}

function listMonthsShort (format, index) {
    return listMonthsImpl(format, index, 'monthsShort');
}

function listWeekdays (localeSorted, format, index) {
    return listWeekdaysImpl(localeSorted, format, index, 'weekdays');
}

function listWeekdaysShort (localeSorted, format, index) {
    return listWeekdaysImpl(localeSorted, format, index, 'weekdaysShort');
}

function listWeekdaysMin (localeSorted, format, index) {
    return listWeekdaysImpl(localeSorted, format, index, 'weekdaysMin');
}

getSetGlobalLocale('en', {
    dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
    ordinal : function (number) {
        var b = number % 10,
            output = (toInt(number % 100 / 10) === 1) ? 'th' :
            (b === 1) ? 'st' :
            (b === 2) ? 'nd' :
            (b === 3) ? 'rd' : 'th';
        return number + output;
    }
});

// Side effect imports
hooks.lang = deprecate('moment.lang is deprecated. Use moment.locale instead.', getSetGlobalLocale);
hooks.langData = deprecate('moment.langData is deprecated. Use moment.localeData instead.', getLocale);

var mathAbs = Math.abs;

function abs () {
    var data           = this._data;

    this._milliseconds = mathAbs(this._milliseconds);
    this._days         = mathAbs(this._days);
    this._months       = mathAbs(this._months);

    data.milliseconds  = mathAbs(data.milliseconds);
    data.seconds       = mathAbs(data.seconds);
    data.minutes       = mathAbs(data.minutes);
    data.hours         = mathAbs(data.hours);
    data.months        = mathAbs(data.months);
    data.years         = mathAbs(data.years);

    return this;
}

function addSubtract$1 (duration, input, value, direction) {
    var other = createDuration(input, value);

    duration._milliseconds += direction * other._milliseconds;
    duration._days         += direction * other._days;
    duration._months       += direction * other._months;

    return duration._bubble();
}

// supports only 2.0-style add(1, 's') or add(duration)
function add$1 (input, value) {
    return addSubtract$1(this, input, value, 1);
}

// supports only 2.0-style subtract(1, 's') or subtract(duration)
function subtract$1 (input, value) {
    return addSubtract$1(this, input, value, -1);
}

function absCeil (number) {
    if (number < 0) {
        return Math.floor(number);
    } else {
        return Math.ceil(number);
    }
}

function bubble () {
    var milliseconds = this._milliseconds;
    var days         = this._days;
    var months       = this._months;
    var data         = this._data;
    var seconds, minutes, hours, years, monthsFromDays;

    // if we have a mix of positive and negative values, bubble down first
    // check: https://github.com/moment/moment/issues/2166
    if (!((milliseconds >= 0 && days >= 0 && months >= 0) ||
            (milliseconds <= 0 && days <= 0 && months <= 0))) {
        milliseconds += absCeil(monthsToDays(months) + days) * 864e5;
        days = 0;
        months = 0;
    }

    // The following code bubbles up values, see the tests for
    // examples of what that means.
    data.milliseconds = milliseconds % 1000;

    seconds           = absFloor(milliseconds / 1000);
    data.seconds      = seconds % 60;

    minutes           = absFloor(seconds / 60);
    data.minutes      = minutes % 60;

    hours             = absFloor(minutes / 60);
    data.hours        = hours % 24;

    days += absFloor(hours / 24);

    // convert days to months
    monthsFromDays = absFloor(daysToMonths(days));
    months += monthsFromDays;
    days -= absCeil(monthsToDays(monthsFromDays));

    // 12 months -> 1 year
    years = absFloor(months / 12);
    months %= 12;

    data.days   = days;
    data.months = months;
    data.years  = years;

    return this;
}

function daysToMonths (days) {
    // 400 years have 146097 days (taking into account leap year rules)
    // 400 years have 12 months === 4800
    return days * 4800 / 146097;
}

function monthsToDays (months) {
    // the reverse of daysToMonths
    return months * 146097 / 4800;
}

function as (units) {
    if (!this.isValid()) {
        return NaN;
    }
    var days;
    var months;
    var milliseconds = this._milliseconds;

    units = normalizeUnits(units);

    if (units === 'month' || units === 'year') {
        days   = this._days   + milliseconds / 864e5;
        months = this._months + daysToMonths(days);
        return units === 'month' ? months : months / 12;
    } else {
        // handle milliseconds separately because of floating point math errors (issue #1867)
        days = this._days + Math.round(monthsToDays(this._months));
        switch (units) {
            case 'week'   : return days / 7     + milliseconds / 6048e5;
            case 'day'    : return days         + milliseconds / 864e5;
            case 'hour'   : return days * 24    + milliseconds / 36e5;
            case 'minute' : return days * 1440  + milliseconds / 6e4;
            case 'second' : return days * 86400 + milliseconds / 1000;
            // Math.floor prevents floating point math errors here
            case 'millisecond': return Math.floor(days * 864e5) + milliseconds;
            default: throw new Error('Unknown unit ' + units);
        }
    }
}

// TODO: Use this.as('ms')?
function valueOf$1 () {
    if (!this.isValid()) {
        return NaN;
    }
    return (
        this._milliseconds +
        this._days * 864e5 +
        (this._months % 12) * 2592e6 +
        toInt(this._months / 12) * 31536e6
    );
}

function makeAs (alias) {
    return function () {
        return this.as(alias);
    };
}

var asMilliseconds = makeAs('ms');
var asSeconds      = makeAs('s');
var asMinutes      = makeAs('m');
var asHours        = makeAs('h');
var asDays         = makeAs('d');
var asWeeks        = makeAs('w');
var asMonths       = makeAs('M');
var asYears        = makeAs('y');

function clone$1 () {
    return createDuration(this);
}

function get$2 (units) {
    units = normalizeUnits(units);
    return this.isValid() ? this[units + 's']() : NaN;
}

function makeGetter(name) {
    return function () {
        return this.isValid() ? this._data[name] : NaN;
    };
}

var milliseconds = makeGetter('milliseconds');
var seconds      = makeGetter('seconds');
var minutes      = makeGetter('minutes');
var hours        = makeGetter('hours');
var days         = makeGetter('days');
var months       = makeGetter('months');
var years        = makeGetter('years');

function weeks () {
    return absFloor(this.days() / 7);
}

var round = Math.round;
var thresholds = {
    ss: 44,         // a few seconds to seconds
    s : 45,         // seconds to minute
    m : 45,         // minutes to hour
    h : 22,         // hours to day
    d : 26,         // days to month
    M : 11          // months to year
};

// helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize
function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale) {
    return locale.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
}

function relativeTime$1 (posNegDuration, withoutSuffix, locale) {
    var duration = createDuration(posNegDuration).abs();
    var seconds  = round(duration.as('s'));
    var minutes  = round(duration.as('m'));
    var hours    = round(duration.as('h'));
    var days     = round(duration.as('d'));
    var months   = round(duration.as('M'));
    var years    = round(duration.as('y'));

    var a = seconds <= thresholds.ss && ['s', seconds]  ||
            seconds < thresholds.s   && ['ss', seconds] ||
            minutes <= 1             && ['m']           ||
            minutes < thresholds.m   && ['mm', minutes] ||
            hours   <= 1             && ['h']           ||
            hours   < thresholds.h   && ['hh', hours]   ||
            days    <= 1             && ['d']           ||
            days    < thresholds.d   && ['dd', days]    ||
            months  <= 1             && ['M']           ||
            months  < thresholds.M   && ['MM', months]  ||
            years   <= 1             && ['y']           || ['yy', years];

    a[2] = withoutSuffix;
    a[3] = +posNegDuration > 0;
    a[4] = locale;
    return substituteTimeAgo.apply(null, a);
}

// This function allows you to set the rounding function for relative time strings
function getSetRelativeTimeRounding (roundingFunction) {
    if (roundingFunction === undefined) {
        return round;
    }
    if (typeof(roundingFunction) === 'function') {
        round = roundingFunction;
        return true;
    }
    return false;
}

// This function allows you to set a threshold for relative time strings
function getSetRelativeTimeThreshold (threshold, limit) {
    if (thresholds[threshold] === undefined) {
        return false;
    }
    if (limit === undefined) {
        return thresholds[threshold];
    }
    thresholds[threshold] = limit;
    if (threshold === 's') {
        thresholds.ss = limit - 1;
    }
    return true;
}

function humanize (withSuffix) {
    if (!this.isValid()) {
        return this.localeData().invalidDate();
    }

    var locale = this.localeData();
    var output = relativeTime$1(this, !withSuffix, locale);

    if (withSuffix) {
        output = locale.pastFuture(+this, output);
    }

    return locale.postformat(output);
}

var abs$1 = Math.abs;

function sign(x) {
    return ((x > 0) - (x < 0)) || +x;
}

function toISOString$1() {
    // for ISO strings we do not use the normal bubbling rules:
    //  * milliseconds bubble up until they become hours
    //  * days do not bubble at all
    //  * months bubble up until they become years
    // This is because there is no context-free conversion between hours and days
    // (think of clock changes)
    // and also not between days and months (28-31 days per month)
    if (!this.isValid()) {
        return this.localeData().invalidDate();
    }

    var seconds = abs$1(this._milliseconds) / 1000;
    var days         = abs$1(this._days);
    var months       = abs$1(this._months);
    var minutes, hours, years;

    // 3600 seconds -> 60 minutes -> 1 hour
    minutes           = absFloor(seconds / 60);
    hours             = absFloor(minutes / 60);
    seconds %= 60;
    minutes %= 60;

    // 12 months -> 1 year
    years  = absFloor(months / 12);
    months %= 12;


    // inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js
    var Y = years;
    var M = months;
    var D = days;
    var h = hours;
    var m = minutes;
    var s = seconds ? seconds.toFixed(3).replace(/\.?0+$/, '') : '';
    var total = this.asSeconds();

    if (!total) {
        // this is the same as C#'s (Noda) and python (isodate)...
        // but not other JS (goog.date)
        return 'P0D';
    }

    var totalSign = total < 0 ? '-' : '';
    var ymSign = sign(this._months) !== sign(total) ? '-' : '';
    var daysSign = sign(this._days) !== sign(total) ? '-' : '';
    var hmsSign = sign(this._milliseconds) !== sign(total) ? '-' : '';

    return totalSign + 'P' +
        (Y ? ymSign + Y + 'Y' : '') +
        (M ? ymSign + M + 'M' : '') +
        (D ? daysSign + D + 'D' : '') +
        ((h || m || s) ? 'T' : '') +
        (h ? hmsSign + h + 'H' : '') +
        (m ? hmsSign + m + 'M' : '') +
        (s ? hmsSign + s + 'S' : '');
}

var proto$2 = Duration.prototype;

proto$2.isValid        = isValid$1;
proto$2.abs            = abs;
proto$2.add            = add$1;
proto$2.subtract       = subtract$1;
proto$2.as             = as;
proto$2.asMilliseconds = asMilliseconds;
proto$2.asSeconds      = asSeconds;
proto$2.asMinutes      = asMinutes;
proto$2.asHours        = asHours;
proto$2.asDays         = asDays;
proto$2.asWeeks        = asWeeks;
proto$2.asMonths       = asMonths;
proto$2.asYears        = asYears;
proto$2.valueOf        = valueOf$1;
proto$2._bubble        = bubble;
proto$2.clone          = clone$1;
proto$2.get            = get$2;
proto$2.milliseconds   = milliseconds;
proto$2.seconds        = seconds;
proto$2.minutes        = minutes;
proto$2.hours          = hours;
proto$2.days           = days;
proto$2.weeks          = weeks;
proto$2.months         = months;
proto$2.years          = years;
proto$2.humanize       = humanize;
proto$2.toISOString    = toISOString$1;
proto$2.toString       = toISOString$1;
proto$2.toJSON         = toISOString$1;
proto$2.locale         = locale;
proto$2.localeData     = localeData;

// Deprecations
proto$2.toIsoString = deprecate('toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)', toISOString$1);
proto$2.lang = lang;

// Side effect imports

// FORMATTING

addFormatToken('X', 0, 0, 'unix');
addFormatToken('x', 0, 0, 'valueOf');

// PARSING

addRegexToken('x', matchSigned);
addRegexToken('X', matchTimestamp);
addParseToken('X', function (input, array, config) {
    config._d = new Date(parseFloat(input, 10) * 1000);
});
addParseToken('x', function (input, array, config) {
    config._d = new Date(toInt(input));
});

// Side effect imports


hooks.version = '2.20.1';

setHookCallback(createLocal);

hooks.fn                    = proto;
hooks.min                   = min;
hooks.max                   = max;
hooks.now                   = now;
hooks.utc                   = createUTC;
hooks.unix                  = createUnix;
hooks.months                = listMonths;
hooks.isDate                = isDate;
hooks.locale                = getSetGlobalLocale;
hooks.invalid               = createInvalid;
hooks.duration              = createDuration;
hooks.isMoment              = isMoment;
hooks.weekdays              = listWeekdays;
hooks.parseZone             = createInZone;
hooks.localeData            = getLocale;
hooks.isDuration            = isDuration;
hooks.monthsShort           = listMonthsShort;
hooks.weekdaysMin           = listWeekdaysMin;
hooks.defineLocale          = defineLocale;
hooks.updateLocale          = updateLocale;
hooks.locales               = listLocales;
hooks.weekdaysShort         = listWeekdaysShort;
hooks.normalizeUnits        = normalizeUnits;
hooks.relativeTimeRounding  = getSetRelativeTimeRounding;
hooks.relativeTimeThreshold = getSetRelativeTimeThreshold;
hooks.calendarFormat        = getCalendarFormat;
hooks.prototype             = proto;

// currently HTML5 input type only supports 24-hour formats
hooks.HTML5_FMT = {
    DATETIME_LOCAL: 'YYYY-MM-DDTHH:mm',             // <input type="datetime-local" />
    DATETIME_LOCAL_SECONDS: 'YYYY-MM-DDTHH:mm:ss',  // <input type="datetime-local" step="1" />
    DATETIME_LOCAL_MS: 'YYYY-MM-DDTHH:mm:ss.SSS',   // <input type="datetime-local" step="0.001" />
    DATE: 'YYYY-MM-DD',                             // <input type="date" />
    TIME: 'HH:mm',                                  // <input type="time" />
    TIME_SECONDS: 'HH:mm:ss',                       // <input type="time" step="1" />
    TIME_MS: 'HH:mm:ss.SSS',                        // <input type="time" step="0.001" />
    WEEK: 'YYYY-[W]WW',                             // <input type="week" />
    MONTH: 'YYYY-MM'                                // <input type="month" />
};

return hooks;

})));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(317)(module)))

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(6);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 3 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Random utility functions used in the UI-Router code
 *
 * These functions are exported, but are subject to change without notice.
 *
 * @preferred
 * @module common
 */
/** for typedoc */
var predicates_1 = __webpack_require__(7);
var hof_1 = __webpack_require__(9);
var coreservices_1 = __webpack_require__(14);
exports.root = (typeof self === 'object' && self.self === self && self) ||
    (typeof global === 'object' && global.global === global && global) || this;
var angular = exports.root.angular || {};
exports.fromJson = angular.fromJson || JSON.parse.bind(JSON);
exports.toJson = angular.toJson || JSON.stringify.bind(JSON);
exports.forEach = angular.forEach || _forEach;
exports.extend = Object.assign || _extend;
exports.equals = angular.equals || _equals;
function identity(x) { return x; }
exports.identity = identity;
function noop() { }
exports.noop = noop;
/**
 * Builds proxy functions on the `to` object which pass through to the `from` object.
 *
 * For each key in `fnNames`, creates a proxy function on the `to` object.
 * The proxy function calls the real function on the `from` object.
 *
 *
 * #### Example:
 * This example creates an new class instance whose functions are prebound to the new'd object.
 * ```js
 * class Foo {
 *   constructor(data) {
 *     // Binds all functions from Foo.prototype to 'this',
 *     // then copies them to 'this'
 *     bindFunctions(Foo.prototype, this, this);
 *     this.data = data;
 *   }
 *
 *   log() {
 *     console.log(this.data);
 *   }
 * }
 *
 * let myFoo = new Foo([1,2,3]);
 * var logit = myFoo.log;
 * logit(); // logs [1, 2, 3] from the myFoo 'this' instance
 * ```
 *
 * #### Example:
 * This example creates a bound version of a service function, and copies it to another object
 * ```
 *
 * var SomeService = {
 *   this.data = [3, 4, 5];
 *   this.log = function() {
 *     console.log(this.data);
 *   }
 * }
 *
 * // Constructor fn
 * function OtherThing() {
 *   // Binds all functions from SomeService to SomeService,
 *   // then copies them to 'this'
 *   bindFunctions(SomeService, this, SomeService);
 * }
 *
 * let myOtherThing = new OtherThing();
 * myOtherThing.log(); // logs [3, 4, 5] from SomeService's 'this'
 * ```
 *
 * @param source A function that returns the source object which contains the original functions to be bound
 * @param target A function that returns the target object which will receive the bound functions
 * @param bind A function that returns the object which the functions will be bound to
 * @param fnNames The function names which will be bound (Defaults to all the functions found on the 'from' object)
 * @param latebind If true, the binding of the function is delayed until the first time it's invoked
 */
function createProxyFunctions(source, target, bind, fnNames, latebind) {
    if (latebind === void 0) { latebind = false; }
    var bindFunction = function (fnName) {
        return source()[fnName].bind(bind());
    };
    var makeLateRebindFn = function (fnName) { return function lateRebindFunction() {
        target[fnName] = bindFunction(fnName);
        return target[fnName].apply(null, arguments);
    }; };
    fnNames = fnNames || Object.keys(source());
    return fnNames.reduce(function (acc, name) {
        acc[name] = latebind ? makeLateRebindFn(name) : bindFunction(name);
        return acc;
    }, target);
}
exports.createProxyFunctions = createProxyFunctions;
/**
 * prototypal inheritance helper.
 * Creates a new object which has `parent` object as its prototype, and then copies the properties from `extra` onto it
 */
exports.inherit = function (parent, extra) {
    return exports.extend(Object.create(parent), extra);
};
/** Given an array, returns true if the object is found in the array, (using indexOf) */
exports.inArray = hof_1.curry(_inArray);
function _inArray(array, obj) {
    return array.indexOf(obj) !== -1;
}
exports._inArray = _inArray;
/**
 * Given an array, and an item, if the item is found in the array, it removes it (in-place).
 * The same array is returned
 */
exports.removeFrom = hof_1.curry(_removeFrom);
function _removeFrom(array, obj) {
    var idx = array.indexOf(obj);
    if (idx >= 0)
        array.splice(idx, 1);
    return array;
}
exports._removeFrom = _removeFrom;
/** pushes a values to an array and returns the value */
exports.pushTo = hof_1.curry(_pushTo);
function _pushTo(arr, val) {
    return (arr.push(val), val);
}
exports._pushTo = _pushTo;
/** Given an array of (deregistration) functions, calls all functions and removes each one from the source array */
exports.deregAll = function (functions) {
    return functions.slice().forEach(function (fn) {
        typeof fn === 'function' && fn();
        exports.removeFrom(functions, fn);
    });
};
/**
 * Applies a set of defaults to an options object.  The options object is filtered
 * to only those properties of the objects in the defaultsList.
 * Earlier objects in the defaultsList take precedence when applying defaults.
 */
function defaults(opts) {
    var defaultsList = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        defaultsList[_i - 1] = arguments[_i];
    }
    var _defaultsList = defaultsList.concat({}).reverse();
    var defaultVals = exports.extend.apply(null, _defaultsList);
    return exports.extend({}, defaultVals, pick(opts || {}, Object.keys(defaultVals)));
}
exports.defaults = defaults;
/** Reduce function that merges each element of the list into a single object, using extend */
exports.mergeR = function (memo, item) { return exports.extend(memo, item); };
/**
 * Finds the common ancestor path between two states.
 *
 * @param {Object} first The first state.
 * @param {Object} second The second state.
 * @return {Array} Returns an array of state names in descending order, not including the root.
 */
function ancestors(first, second) {
    var path = [];
    for (var n in first.path) {
        if (first.path[n] !== second.path[n])
            break;
        path.push(first.path[n]);
    }
    return path;
}
exports.ancestors = ancestors;
/**
 * Return a copy of the object only containing the whitelisted properties.
 *
 * #### Example:
 * ```
 * var foo = { a: 1, b: 2, c: 3 };
 * var ab = pick(foo, ['a', 'b']); // { a: 1, b: 2 }
 * ```
 * @param obj the source object
 * @param propNames an Array of strings, which are the whitelisted property names
 */
function pick(obj, propNames) {
    var objCopy = {};
    for (var prop_1 in obj) {
        if (propNames.indexOf(prop_1) !== -1) {
            objCopy[prop_1] = obj[prop_1];
        }
    }
    return objCopy;
}
exports.pick = pick;
/**
 * Return a copy of the object omitting the blacklisted properties.
 *
 * @example
 * ```
 *
 * var foo = { a: 1, b: 2, c: 3 };
 * var ab = omit(foo, ['a', 'b']); // { c: 3 }
 * ```
 * @param obj the source object
 * @param propNames an Array of strings, which are the blacklisted property names
 */
function omit(obj, propNames) {
    return Object.keys(obj)
        .filter(hof_1.not(exports.inArray(propNames)))
        .reduce(function (acc, key) { return (acc[key] = obj[key], acc); }, {});
}
exports.omit = omit;
/**
 * Maps an array, or object to a property (by name)
 */
function pluck(collection, propName) {
    return map(collection, hof_1.prop(propName));
}
exports.pluck = pluck;
/** Filters an Array or an Object's properties based on a predicate */
function filter(collection, callback) {
    var arr = predicates_1.isArray(collection), result = arr ? [] : {};
    var accept = arr ? function (x) { return result.push(x); } : function (x, key) { return result[key] = x; };
    exports.forEach(collection, function (item, i) {
        if (callback(item, i))
            accept(item, i);
    });
    return result;
}
exports.filter = filter;
/** Finds an object from an array, or a property of an object, that matches a predicate */
function find(collection, callback) {
    var result;
    exports.forEach(collection, function (item, i) {
        if (result)
            return;
        if (callback(item, i))
            result = item;
    });
    return result;
}
exports.find = find;
/** Given an object, returns a new object, where each property is transformed by the callback function */
exports.mapObj = map;
/** Maps an array or object properties using a callback function */
function map(collection, callback) {
    var result = predicates_1.isArray(collection) ? [] : {};
    exports.forEach(collection, function (item, i) { return result[i] = callback(item, i); });
    return result;
}
exports.map = map;
/**
 * Given an object, return its enumerable property values
 *
 * @example
 * ```
 *
 * let foo = { a: 1, b: 2, c: 3 }
 * let vals = values(foo); // [ 1, 2, 3 ]
 * ```
 */
exports.values = function (obj) {
    return Object.keys(obj).map(function (key) { return obj[key]; });
};
/**
 * Reduce function that returns true if all of the values are truthy.
 *
 * @example
 * ```
 *
 * let vals = [ 1, true, {}, "hello world"];
 * vals.reduce(allTrueR, true); // true
 *
 * vals.push(0);
 * vals.reduce(allTrueR, true); // false
 * ```
 */
exports.allTrueR = function (memo, elem) { return memo && elem; };
/**
 * Reduce function that returns true if any of the values are truthy.
 *
 *  * @example
 * ```
 *
 * let vals = [ 0, null, undefined ];
 * vals.reduce(anyTrueR, true); // false
 *
 * vals.push("hello world");
 * vals.reduce(anyTrueR, true); // true
 * ```
 */
exports.anyTrueR = function (memo, elem) { return memo || elem; };
/**
 * Reduce function which un-nests a single level of arrays
 * @example
 * ```
 *
 * let input = [ [ "a", "b" ], [ "c", "d" ], [ [ "double", "nested" ] ] ];
 * input.reduce(unnestR, []) // [ "a", "b", "c", "d", [ "double, "nested" ] ]
 * ```
 */
exports.unnestR = function (memo, elem) { return memo.concat(elem); };
/**
 * Reduce function which recursively un-nests all arrays
 *
 * @example
 * ```
 *
 * let input = [ [ "a", "b" ], [ "c", "d" ], [ [ "double", "nested" ] ] ];
 * input.reduce(unnestR, []) // [ "a", "b", "c", "d", "double, "nested" ]
 * ```
 */
exports.flattenR = function (memo, elem) {
    return predicates_1.isArray(elem) ? memo.concat(elem.reduce(exports.flattenR, [])) : pushR(memo, elem);
};
/**
 * Reduce function that pushes an object to an array, then returns the array.
 * Mostly just for [[flattenR]] and [[uniqR]]
 */
function pushR(arr, obj) {
    arr.push(obj);
    return arr;
}
exports.pushR = pushR;
/** Reduce function that filters out duplicates */
exports.uniqR = function (acc, token) {
    return exports.inArray(acc, token) ? acc : pushR(acc, token);
};
/**
 * Return a new array with a single level of arrays unnested.
 *
 * @example
 * ```
 *
 * let input = [ [ "a", "b" ], [ "c", "d" ], [ [ "double", "nested" ] ] ];
 * unnest(input) // [ "a", "b", "c", "d", [ "double, "nested" ] ]
 * ```
 */
exports.unnest = function (arr) { return arr.reduce(exports.unnestR, []); };
/**
 * Return a completely flattened version of an array.
 *
 * @example
 * ```
 *
 * let input = [ [ "a", "b" ], [ "c", "d" ], [ [ "double", "nested" ] ] ];
 * flatten(input) // [ "a", "b", "c", "d", "double, "nested" ]
 * ```
 */
exports.flatten = function (arr) { return arr.reduce(exports.flattenR, []); };
/**
 * Given a .filter Predicate, builds a .filter Predicate which throws an error if any elements do not pass.
 * @example
 * ```
 *
 * let isNumber = (obj) => typeof(obj) === 'number';
 * let allNumbers = [ 1, 2, 3, 4, 5 ];
 * allNumbers.filter(assertPredicate(isNumber)); //OK
 *
 * let oneString = [ 1, 2, 3, 4, "5" ];
 * oneString.filter(assertPredicate(isNumber, "Not all numbers")); // throws Error(""Not all numbers"");
 * ```
 */
exports.assertPredicate = assertFn;
/**
 * Given a .map function, builds a .map function which throws an error if any mapped elements do not pass a truthyness test.
 * @example
 * ```
 *
 * var data = { foo: 1, bar: 2 };
 *
 * let keys = [ 'foo', 'bar' ]
 * let values = keys.map(assertMap(key => data[key], "Key not found"));
 * // values is [1, 2]
 *
 * let keys = [ 'foo', 'bar', 'baz' ]
 * let values = keys.map(assertMap(key => data[key], "Key not found"));
 * // throws Error("Key not found")
 * ```
 */
exports.assertMap = assertFn;
function assertFn(predicateOrMap, errMsg) {
    if (errMsg === void 0) { errMsg = "assert failure"; }
    return function (obj) {
        var result = predicateOrMap(obj);
        if (!result) {
            throw new Error(predicates_1.isFunction(errMsg) ? errMsg(obj) : errMsg);
        }
        return result;
    };
}
exports.assertFn = assertFn;
/**
 * Like _.pairs: Given an object, returns an array of key/value pairs
 *
 * @example
 * ```
 *
 * pairs({ foo: "FOO", bar: "BAR }) // [ [ "foo", "FOO" ], [ "bar": "BAR" ] ]
 * ```
 */
exports.pairs = function (obj) {
    return Object.keys(obj).map(function (key) { return [key, obj[key]]; });
};
/**
 * Given two or more parallel arrays, returns an array of tuples where
 * each tuple is composed of [ a[i], b[i], ... z[i] ]
 *
 * @example
 * ```
 *
 * let foo = [ 0, 2, 4, 6 ];
 * let bar = [ 1, 3, 5, 7 ];
 * let baz = [ 10, 30, 50, 70 ];
 * arrayTuples(foo, bar);       // [ [0, 1], [2, 3], [4, 5], [6, 7] ]
 * arrayTuples(foo, bar, baz);  // [ [0, 1, 10], [2, 3, 30], [4, 5, 50], [6, 7, 70] ]
 * ```
 */
function arrayTuples() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    if (args.length === 0)
        return [];
    var maxArrayLen = args.reduce(function (min, arr) { return Math.min(arr.length, min); }, 9007199254740991); // aka 2^53 − 1 aka Number.MAX_SAFE_INTEGER
    var i, result = [];
    for (i = 0; i < maxArrayLen; i++) {
        // This is a hot function
        // Unroll when there are 1-4 arguments
        switch (args.length) {
            case 1:
                result.push([args[0][i]]);
                break;
            case 2:
                result.push([args[0][i], args[1][i]]);
                break;
            case 3:
                result.push([args[0][i], args[1][i], args[2][i]]);
                break;
            case 4:
                result.push([args[0][i], args[1][i], args[2][i], args[3][i]]);
                break;
            default:
                result.push(args.map(function (array) { return array[i]; }));
                break;
        }
    }
    return result;
}
exports.arrayTuples = arrayTuples;
/**
 * Reduce function which builds an object from an array of [key, value] pairs.
 *
 * Each iteration sets the key/val pair on the memo object, then returns the memo for the next iteration.
 *
 * Each keyValueTuple should be an array with values [ key: string, value: any ]
 *
 * @example
 * ```
 *
 * var pairs = [ ["fookey", "fooval"], ["barkey", "barval"] ]
 *
 * var pairsToObj = pairs.reduce((memo, pair) => applyPairs(memo, pair), {})
 * // pairsToObj == { fookey: "fooval", barkey: "barval" }
 *
 * // Or, more simply:
 * var pairsToObj = pairs.reduce(applyPairs, {})
 * // pairsToObj == { fookey: "fooval", barkey: "barval" }
 * ```
 */
function applyPairs(memo, keyValTuple) {
    var key, value;
    if (predicates_1.isArray(keyValTuple))
        key = keyValTuple[0], value = keyValTuple[1];
    if (!predicates_1.isString(key))
        throw new Error("invalid parameters to applyPairs");
    memo[key] = value;
    return memo;
}
exports.applyPairs = applyPairs;
/** Get the last element of an array */
function tail(arr) {
    return arr.length && arr[arr.length - 1] || undefined;
}
exports.tail = tail;
/**
 * shallow copy from src to dest
 */
function copy(src, dest) {
    if (dest)
        Object.keys(dest).forEach(function (key) { return delete dest[key]; });
    if (!dest)
        dest = {};
    return exports.extend(dest, src);
}
exports.copy = copy;
/** Naive forEach implementation works with Objects or Arrays */
function _forEach(obj, cb, _this) {
    if (predicates_1.isArray(obj))
        return obj.forEach(cb, _this);
    Object.keys(obj).forEach(function (key) { return cb(obj[key], key); });
}
function _extend(toObj) {
    for (var i = 1; i < arguments.length; i++) {
        var obj = arguments[i];
        if (!obj)
            continue;
        var keys = Object.keys(obj);
        for (var j = 0; j < keys.length; j++) {
            toObj[keys[j]] = obj[keys[j]];
        }
    }
    return toObj;
}
exports._extend = _extend;
function _equals(o1, o2) {
    if (o1 === o2)
        return true;
    if (o1 === null || o2 === null)
        return false;
    if (o1 !== o1 && o2 !== o2)
        return true; // NaN === NaN
    var t1 = typeof o1, t2 = typeof o2;
    if (t1 !== t2 || t1 !== 'object')
        return false;
    var tup = [o1, o2];
    if (hof_1.all(predicates_1.isArray)(tup))
        return _arraysEq(o1, o2);
    if (hof_1.all(predicates_1.isDate)(tup))
        return o1.getTime() === o2.getTime();
    if (hof_1.all(predicates_1.isRegExp)(tup))
        return o1.toString() === o2.toString();
    if (hof_1.all(predicates_1.isFunction)(tup))
        return true; // meh
    var predicates = [predicates_1.isFunction, predicates_1.isArray, predicates_1.isDate, predicates_1.isRegExp];
    if (predicates.map(hof_1.any).reduce(function (b, fn) { return b || !!fn(tup); }, false))
        return false;
    var key, keys = {};
    for (key in o1) {
        if (!_equals(o1[key], o2[key]))
            return false;
        keys[key] = true;
    }
    for (key in o2) {
        if (!keys[key])
            return false;
    }
    return true;
}
function _arraysEq(a1, a2) {
    if (a1.length !== a2.length)
        return false;
    return arrayTuples(a1, a2).reduce(function (b, t) { return b && _equals(t[0], t[1]); }, true);
}
// issue #2676
exports.silenceUncaughtInPromise = function (promise) {
    return promise.catch(function (e) { return 0; }) && promise;
};
exports.silentRejection = function (error) {
    return exports.silenceUncaughtInPromise(coreservices_1.services.$q.reject(error));
};
//# sourceMappingURL=common.js.map
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(85)))

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/** Predicates
 *
 * These predicates return true/false based on the input.
 * Although these functions are exported, they are subject to change without notice.
 *
 * @module common_predicates
 */
/** */
var hof_1 = __webpack_require__(9);
var stateObject_1 = __webpack_require__(96);
var toStr = Object.prototype.toString;
var tis = function (t) { return function (x) { return typeof (x) === t; }; };
exports.isUndefined = tis('undefined');
exports.isDefined = hof_1.not(exports.isUndefined);
exports.isNull = function (o) { return o === null; };
exports.isNullOrUndefined = hof_1.or(exports.isNull, exports.isUndefined);
exports.isFunction = tis('function');
exports.isNumber = tis('number');
exports.isString = tis('string');
exports.isObject = function (x) { return x !== null && typeof x === 'object'; };
exports.isArray = Array.isArray;
exports.isDate = (function (x) { return toStr.call(x) === '[object Date]'; });
exports.isRegExp = (function (x) { return toStr.call(x) === '[object RegExp]'; });
exports.isState = stateObject_1.StateObject.isState;
/**
 * Predicate which checks if a value is injectable
 *
 * A value is "injectable" if it is a function, or if it is an ng1 array-notation-style array
 * where all the elements in the array are Strings, except the last one, which is a Function
 */
function isInjectable(val) {
    if (exports.isArray(val) && val.length) {
        var head = val.slice(0, -1), tail = val.slice(-1);
        return !(head.filter(hof_1.not(exports.isString)).length || tail.filter(hof_1.not(exports.isFunction)).length);
    }
    return exports.isFunction(val);
}
exports.isInjectable = isInjectable;
/**
 * Predicate which checks if a value looks like a Promise
 *
 * It is probably a Promise if it's an object, and it has a `then` property which is a Function
 */
exports.isPromise = hof_1.and(exports.isObject, hof_1.pipe(hof_1.prop('then'), exports.isFunction));
//# sourceMappingURL=predicates.js.map

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(82)('wks');
var uid = __webpack_require__(50);
var Symbol = __webpack_require__(3).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Higher order functions
 *
 * These utility functions are exported, but are subject to change without notice.
 *
 * @module common_hof
 */ /** */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Returns a new function for [Partial Application](https://en.wikipedia.org/wiki/Partial_application) of the original function.
 *
 * Given a function with N parameters, returns a new function that supports partial application.
 * The new function accepts anywhere from 1 to N parameters.  When that function is called with M parameters,
 * where M is less than N, it returns a new function that accepts the remaining parameters.  It continues to
 * accept more parameters until all N parameters have been supplied.
 *
 *
 * This contrived example uses a partially applied function as an predicate, which returns true
 * if an object is found in both arrays.
 * @example
 * ```
 * // returns true if an object is in both of the two arrays
 * function inBoth(array1, array2, object) {
 *   return array1.indexOf(object) !== -1 &&
 *          array2.indexOf(object) !== 1;
 * }
 * let obj1, obj2, obj3, obj4, obj5, obj6, obj7
 * let foos = [obj1, obj3]
 * let bars = [obj3, obj4, obj5]
 *
 * // A curried "copy" of inBoth
 * let curriedInBoth = curry(inBoth);
 * // Partially apply both the array1 and array2
 * let inFoosAndBars = curriedInBoth(foos, bars);
 *
 * // Supply the final argument; since all arguments are
 * // supplied, the original inBoth function is then called.
 * let obj1InBoth = inFoosAndBars(obj1); // false
 *
 * // Use the inFoosAndBars as a predicate.
 * // Filter, on each iteration, supplies the final argument
 * let allObjs = [ obj1, obj2, obj3, obj4, obj5, obj6, obj7 ];
 * let foundInBoth = allObjs.filter(inFoosAndBars); // [ obj3 ]
 *
 * ```
 *
 * Stolen from: http://stackoverflow.com/questions/4394747/javascript-curry-function
 *
 * @param fn
 * @returns {*|function(): (*|any)}
 */
function curry(fn) {
    var initial_args = [].slice.apply(arguments, [1]);
    var func_args_length = fn.length;
    function curried(args) {
        if (args.length >= func_args_length)
            return fn.apply(null, args);
        return function () {
            return curried(args.concat([].slice.apply(arguments)));
        };
    }
    return curried(initial_args);
}
exports.curry = curry;
/**
 * Given a varargs list of functions, returns a function that composes the argument functions, right-to-left
 * given: f(x), g(x), h(x)
 * let composed = compose(f,g,h)
 * then, composed is: f(g(h(x)))
 */
function compose() {
    var args = arguments;
    var start = args.length - 1;
    return function () {
        var i = start, result = args[start].apply(this, arguments);
        while (i--)
            result = args[i].call(this, result);
        return result;
    };
}
exports.compose = compose;
/**
 * Given a varargs list of functions, returns a function that is composes the argument functions, left-to-right
 * given: f(x), g(x), h(x)
 * let piped = pipe(f,g,h);
 * then, piped is: h(g(f(x)))
 */
function pipe() {
    var funcs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        funcs[_i] = arguments[_i];
    }
    return compose.apply(null, [].slice.call(arguments).reverse());
}
exports.pipe = pipe;
/**
 * Given a property name, returns a function that returns that property from an object
 * let obj = { foo: 1, name: "blarg" };
 * let getName = prop("name");
 * getName(obj) === "blarg"
 */
exports.prop = function (name) {
    return function (obj) { return obj && obj[name]; };
};
/**
 * Given a property name and a value, returns a function that returns a boolean based on whether
 * the passed object has a property that matches the value
 * let obj = { foo: 1, name: "blarg" };
 * let getName = propEq("name", "blarg");
 * getName(obj) === true
 */
exports.propEq = curry(function (name, val, obj) { return obj && obj[name] === val; });
/**
 * Given a dotted property name, returns a function that returns a nested property from an object, or undefined
 * let obj = { id: 1, nestedObj: { foo: 1, name: "blarg" }, };
 * let getName = prop("nestedObj.name");
 * getName(obj) === "blarg"
 * let propNotFound = prop("this.property.doesnt.exist");
 * propNotFound(obj) === undefined
 */
exports.parse = function (name) {
    return pipe.apply(null, name.split(".").map(exports.prop));
};
/**
 * Given a function that returns a truthy or falsey value, returns a
 * function that returns the opposite (falsey or truthy) value given the same inputs
 */
exports.not = function (fn) {
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return !fn.apply(null, args);
    };
};
/**
 * Given two functions that return truthy or falsey values, returns a function that returns truthy
 * if both functions return truthy for the given arguments
 */
function and(fn1, fn2) {
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return fn1.apply(null, args) && fn2.apply(null, args);
    };
}
exports.and = and;
/**
 * Given two functions that return truthy or falsey values, returns a function that returns truthy
 * if at least one of the functions returns truthy for the given arguments
 */
function or(fn1, fn2) {
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return fn1.apply(null, args) || fn2.apply(null, args);
    };
}
exports.or = or;
/**
 * Check if all the elements of an array match a predicate function
 *
 * @param fn1 a predicate function `fn1`
 * @returns a function which takes an array and returns true if `fn1` is true for all elements of the array
 */
exports.all = function (fn1) {
    return function (arr) { return arr.reduce(function (b, x) { return b && !!fn1(x); }, true); };
};
exports.any = function (fn1) {
    return function (arr) { return arr.reduce(function (b, x) { return b || !!fn1(x); }, false); };
};
/** Given a class, returns a Predicate function that returns true if the object is of that class */
exports.is = function (ctor) {
    return function (obj) {
        return (obj != null && obj.constructor === ctor || obj instanceof ctor);
    };
};
/** Given a value, returns a Predicate function that returns true if another value is === equal to the original value */
exports.eq = function (val) { return function (other) {
    return val === other;
}; };
/** Given a value, returns a function which returns the value */
exports.val = function (v) { return function () { return v; }; };
function invoke(fnName, args) {
    return function (obj) {
        return obj[fnName].apply(obj, args);
    };
}
exports.invoke = invoke;
/**
 * Sorta like Pattern Matching (a functional programming conditional construct)
 *
 * See http://c2.com/cgi/wiki?PatternMatching
 *
 * This is a conditional construct which allows a series of predicates and output functions
 * to be checked and then applied.  Each predicate receives the input.  If the predicate
 * returns truthy, then its matching output function (mapping function) is provided with
 * the input and, then the result is returned.
 *
 * Each combination (2-tuple) of predicate + output function should be placed in an array
 * of size 2: [ predicate, mapFn ]
 *
 * These 2-tuples should be put in an outer array.
 *
 * @example
 * ```
 *
 * // Here's a 2-tuple where the first element is the isString predicate
 * // and the second element is a function that returns a description of the input
 * let firstTuple = [ angular.isString, (input) => `Heres your string ${input}` ];
 *
 * // Second tuple: predicate "isNumber", mapfn returns a description
 * let secondTuple = [ angular.isNumber, (input) => `(${input}) That's a number!` ];
 *
 * let third = [ (input) => input === null,  (input) => `Oh, null...` ];
 *
 * let fourth = [ (input) => input === undefined,  (input) => `notdefined` ];
 *
 * let descriptionOf = pattern([ firstTuple, secondTuple, third, fourth ]);
 *
 * console.log(descriptionOf(undefined)); // 'notdefined'
 * console.log(descriptionOf(55)); // '(55) That's a number!'
 * console.log(descriptionOf("foo")); // 'Here's your string foo'
 * ```
 *
 * @param struct A 2D array.  Each element of the array should be an array, a 2-tuple,
 * with a Predicate and a mapping/output function
 * @returns {function(any): *}
 */
function pattern(struct) {
    return function (x) {
        for (var i = 0; i < struct.length; i++) {
            if (struct[i][0](x))
                return struct[i][1](x);
        }
    };
}
exports.pattern = pattern;
//# sourceMappingURL=hof.js.map

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(5)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(2);
var IE8_DOM_DEFINE = __webpack_require__(172);
var toPrimitive = __webpack_require__(34);
var dP = Object.defineProperty;

exports.f = __webpack_require__(10) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(33);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(31);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.notImplemented = function (fnname) { return function () {
    throw new Error(fnname + "(): No coreservices implementation for UI-Router is loaded.");
}; };
var services = {
    $q: undefined,
    $injector: undefined,
};
exports.services = services;
//# sourceMappingURL=coreservices.js.map

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 16 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(11);
var createDesc = __webpack_require__(46);
module.exports = __webpack_require__(10) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);
var hide = __webpack_require__(17);
var has = __webpack_require__(16);
var SRC = __webpack_require__(50)('src');
var TO_STRING = 'toString';
var $toString = Function[TO_STRING];
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__(30).inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(0);
var fails = __webpack_require__(5);
var defined = __webpack_require__(31);
var quot = /"/g;
// B.2.3.2.1 CreateHTML(string, tag, attribute, value)
var createHTML = function (string, tag, attribute, value) {
  var S = String(defined(string));
  var p1 = '<' + tag;
  if (attribute !== '') p1 += ' ' + attribute + '="' + String(value).replace(quot, '&quot;') + '"';
  return p1 + '>' + S + '</' + tag + '>';
};
module.exports = function (NAME, exec) {
  var O = {};
  O[NAME] = exec(createHTML);
  $export($export.P + $export.F * fails(function () {
    var test = ''[NAME]('"');
    return test !== test.toLowerCase() || test.split('"').length > 3;
  }), 'String', O);
};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(162);
var isBuffer = __webpack_require__(619);

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim
};


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(63);
var createDesc = __webpack_require__(46);
var toIObject = __webpack_require__(23);
var toPrimitive = __webpack_require__(34);
var has = __webpack_require__(16);
var IE8_DOM_DEFINE = __webpack_require__(172);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(10) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(16);
var toObject = __webpack_require__(13);
var IE_PROTO = __webpack_require__(118)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(62);
var defined = __webpack_require__(31);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
/** @module common */ /** for typedoc */
__export(__webpack_require__(4));
__export(__webpack_require__(14));
__export(__webpack_require__(65));
__export(__webpack_require__(9));
__export(__webpack_require__(7));
__export(__webpack_require__(93));
__export(__webpack_require__(28));
__export(__webpack_require__(37));
//# sourceMappingURL=index.js.map

/***/ }),
/* 25 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(15);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(5);

module.exports = function (method, arg) {
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call
    arg ? method.call(null, function () { /* empty */ }, 1) : method.call(null);
  });
};


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Functions that manipulate strings
 *
 * Although these functions are exported, they are subject to change without notice.
 *
 * @module common_strings
 */ /** */
Object.defineProperty(exports, "__esModule", { value: true });
var predicates_1 = __webpack_require__(7);
var rejectFactory_1 = __webpack_require__(59);
var common_1 = __webpack_require__(4);
var hof_1 = __webpack_require__(9);
var transition_1 = __webpack_require__(68);
var resolvable_1 = __webpack_require__(58);
/**
 * Returns a string shortened to a maximum length
 *
 * If the string is already less than the `max` length, return the string.
 * Else return the string, shortened to `max - 3` and append three dots ("...").
 *
 * @param max the maximum length of the string to return
 * @param str the input string
 */
function maxLength(max, str) {
    if (str.length <= max)
        return str;
    return str.substr(0, max - 3) + "...";
}
exports.maxLength = maxLength;
/**
 * Returns a string, with spaces added to the end, up to a desired str length
 *
 * If the string is already longer than the desired length, return the string.
 * Else returns the string, with extra spaces on the end, such that it reaches `length` characters.
 *
 * @param length the desired length of the string to return
 * @param str the input string
 */
function padString(length, str) {
    while (str.length < length)
        str += " ";
    return str;
}
exports.padString = padString;
function kebobString(camelCase) {
    return camelCase
        .replace(/^([A-Z])/, function ($1) { return $1.toLowerCase(); }) // replace first char
        .replace(/([A-Z])/g, function ($1) { return "-" + $1.toLowerCase(); }); // replace rest
}
exports.kebobString = kebobString;
function _toJson(obj) {
    return JSON.stringify(obj);
}
function _fromJson(json) {
    return predicates_1.isString(json) ? JSON.parse(json) : json;
}
function promiseToString(p) {
    return "Promise(" + JSON.stringify(p) + ")";
}
function functionToString(fn) {
    var fnStr = fnToString(fn);
    var namedFunctionMatch = fnStr.match(/^(function [^ ]+\([^)]*\))/);
    var toStr = namedFunctionMatch ? namedFunctionMatch[1] : fnStr;
    var fnName = fn['name'] || "";
    if (fnName && toStr.match(/function \(/)) {
        return 'function ' + fnName + toStr.substr(9);
    }
    return toStr;
}
exports.functionToString = functionToString;
function fnToString(fn) {
    var _fn = predicates_1.isArray(fn) ? fn.slice(-1)[0] : fn;
    return _fn && _fn.toString() || "undefined";
}
exports.fnToString = fnToString;
var stringifyPatternFn = null;
var stringifyPattern = function (value) {
    var isRejection = rejectFactory_1.Rejection.isRejectionPromise;
    stringifyPatternFn = stringifyPatternFn || hof_1.pattern([
        [hof_1.not(predicates_1.isDefined), hof_1.val("undefined")],
        [predicates_1.isNull, hof_1.val("null")],
        [predicates_1.isPromise, hof_1.val("[Promise]")],
        [isRejection, function (x) { return x._transitionRejection.toString(); }],
        [hof_1.is(rejectFactory_1.Rejection), hof_1.invoke("toString")],
        [hof_1.is(transition_1.Transition), hof_1.invoke("toString")],
        [hof_1.is(resolvable_1.Resolvable), hof_1.invoke("toString")],
        [predicates_1.isInjectable, functionToString],
        [hof_1.val(true), common_1.identity]
    ]);
    return stringifyPatternFn(value);
};
function stringify(o) {
    var seen = [];
    function format(val) {
        if (predicates_1.isObject(val)) {
            if (seen.indexOf(val) !== -1)
                return '[circular ref]';
            seen.push(val);
        }
        return stringifyPattern(val);
    }
    return JSON.stringify(o, function (key, val) { return format(val); }).replace(/\\"/g, '"');
}
exports.stringify = stringify;
/** Returns a function that splits a string on a character or substring */
exports.beforeAfterSubstr = function (char) { return function (str) {
    if (!str)
        return ["", ""];
    var idx = str.indexOf(char);
    if (idx === -1)
        return [str, ""];
    return [str.substr(0, idx), str.substr(idx + 1)];
}; };
exports.hostRegex = new RegExp('^(?:[a-z]+:)?//[^/]+/');
exports.stripLastPathElement = function (str) { return str.replace(/\/[^/]*$/, ''); };
exports.splitHash = exports.beforeAfterSubstr("#");
exports.splitQuery = exports.beforeAfterSubstr("?");
exports.splitEqual = exports.beforeAfterSubstr("=");
exports.trimHashVal = function (str) { return str ? str.replace(/^#/, "") : ""; };
/**
 * Splits on a delimiter, but returns the delimiters in the array
 *
 * #### Example:
 * ```js
 * var splitOnSlashes = splitOnDelim('/');
 * splitOnSlashes("/foo"); // ["/", "foo"]
 * splitOnSlashes("/foo/"); // ["/", "foo", "/"]
 * ```
 */
function splitOnDelim(delim) {
    var re = new RegExp("(" + delim + ")", "g");
    return function (str) {
        return str.split(re).filter(common_1.identity);
    };
}
exports.splitOnDelim = splitOnDelim;
;
/**
 * Reduce fn that joins neighboring strings
 *
 * Given an array of strings, returns a new array
 * where all neighboring strings have been joined.
 *
 * #### Example:
 * ```js
 * let arr = ["foo", "bar", 1, "baz", "", "qux" ];
 * arr.reduce(joinNeighborsR, []) // ["foobar", 1, "bazqux" ]
 * ```
 */
function joinNeighborsR(acc, x) {
    if (predicates_1.isString(common_1.tail(acc)) && predicates_1.isString(x))
        return acc.slice(0, -1).concat(common_1.tail(acc) + x);
    return common_1.pushR(acc, x);
}
exports.joinNeighborsR = joinNeighborsR;
;
//# sourceMappingURL=strings.js.map

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__(26);
var IObject = __webpack_require__(62);
var toObject = __webpack_require__(13);
var toLength = __webpack_require__(12);
var asc = __webpack_require__(103);
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};


/***/ }),
/* 30 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.3' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 31 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(0);
var core = __webpack_require__(30);
var fails = __webpack_require__(5);
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),
/* 33 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(6);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var Map = __webpack_require__(193);
var $export = __webpack_require__(0);
var shared = __webpack_require__(82)('metadata');
var store = shared.store || (shared.store = new (__webpack_require__(196))());

var getOrCreateMetadataMap = function (target, targetKey, create) {
  var targetMetadata = store.get(target);
  if (!targetMetadata) {
    if (!create) return undefined;
    store.set(target, targetMetadata = new Map());
  }
  var keyMetadata = targetMetadata.get(targetKey);
  if (!keyMetadata) {
    if (!create) return undefined;
    targetMetadata.set(targetKey, keyMetadata = new Map());
  } return keyMetadata;
};
var ordinaryHasOwnMetadata = function (MetadataKey, O, P) {
  var metadataMap = getOrCreateMetadataMap(O, P, false);
  return metadataMap === undefined ? false : metadataMap.has(MetadataKey);
};
var ordinaryGetOwnMetadata = function (MetadataKey, O, P) {
  var metadataMap = getOrCreateMetadataMap(O, P, false);
  return metadataMap === undefined ? undefined : metadataMap.get(MetadataKey);
};
var ordinaryDefineOwnMetadata = function (MetadataKey, MetadataValue, O, P) {
  getOrCreateMetadataMap(O, P, true).set(MetadataKey, MetadataValue);
};
var ordinaryOwnMetadataKeys = function (target, targetKey) {
  var metadataMap = getOrCreateMetadataMap(target, targetKey, false);
  var keys = [];
  if (metadataMap) metadataMap.forEach(function (_, key) { keys.push(key); });
  return keys;
};
var toMetaKey = function (it) {
  return it === undefined || typeof it == 'symbol' ? it : String(it);
};
var exp = function (O) {
  $export($export.S, 'Reflect', O);
};

module.exports = {
  store: store,
  map: getOrCreateMetadataMap,
  has: ordinaryHasOwnMetadata,
  get: ordinaryGetOwnMetadata,
  set: ordinaryDefineOwnMetadata,
  keys: ordinaryOwnMetadataKeys,
  key: toMetaKey,
  exp: exp
};


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

if (__webpack_require__(10)) {
  var LIBRARY = __webpack_require__(42);
  var global = __webpack_require__(3);
  var fails = __webpack_require__(5);
  var $export = __webpack_require__(0);
  var $typed = __webpack_require__(84);
  var $buffer = __webpack_require__(124);
  var ctx = __webpack_require__(26);
  var anInstance = __webpack_require__(40);
  var propertyDesc = __webpack_require__(46);
  var hide = __webpack_require__(17);
  var redefineAll = __webpack_require__(47);
  var toInteger = __webpack_require__(33);
  var toLength = __webpack_require__(12);
  var toIndex = __webpack_require__(191);
  var toAbsoluteIndex = __webpack_require__(49);
  var toPrimitive = __webpack_require__(34);
  var has = __webpack_require__(16);
  var classof = __webpack_require__(61);
  var isObject = __webpack_require__(6);
  var toObject = __webpack_require__(13);
  var isArrayIter = __webpack_require__(110);
  var create = __webpack_require__(43);
  var getPrototypeOf = __webpack_require__(22);
  var gOPN = __webpack_require__(44).f;
  var getIterFn = __webpack_require__(127);
  var uid = __webpack_require__(50);
  var wks = __webpack_require__(8);
  var createArrayMethod = __webpack_require__(29);
  var createArrayIncludes = __webpack_require__(71);
  var speciesConstructor = __webpack_require__(83);
  var ArrayIterators = __webpack_require__(128);
  var Iterators = __webpack_require__(54);
  var $iterDetect = __webpack_require__(77);
  var setSpecies = __webpack_require__(48);
  var arrayFill = __webpack_require__(102);
  var arrayCopyWithin = __webpack_require__(164);
  var $DP = __webpack_require__(11);
  var $GOPD = __webpack_require__(21);
  var dP = $DP.f;
  var gOPD = $GOPD.f;
  var RangeError = global.RangeError;
  var TypeError = global.TypeError;
  var Uint8Array = global.Uint8Array;
  var ARRAY_BUFFER = 'ArrayBuffer';
  var SHARED_BUFFER = 'Shared' + ARRAY_BUFFER;
  var BYTES_PER_ELEMENT = 'BYTES_PER_ELEMENT';
  var PROTOTYPE = 'prototype';
  var ArrayProto = Array[PROTOTYPE];
  var $ArrayBuffer = $buffer.ArrayBuffer;
  var $DataView = $buffer.DataView;
  var arrayForEach = createArrayMethod(0);
  var arrayFilter = createArrayMethod(2);
  var arraySome = createArrayMethod(3);
  var arrayEvery = createArrayMethod(4);
  var arrayFind = createArrayMethod(5);
  var arrayFindIndex = createArrayMethod(6);
  var arrayIncludes = createArrayIncludes(true);
  var arrayIndexOf = createArrayIncludes(false);
  var arrayValues = ArrayIterators.values;
  var arrayKeys = ArrayIterators.keys;
  var arrayEntries = ArrayIterators.entries;
  var arrayLastIndexOf = ArrayProto.lastIndexOf;
  var arrayReduce = ArrayProto.reduce;
  var arrayReduceRight = ArrayProto.reduceRight;
  var arrayJoin = ArrayProto.join;
  var arraySort = ArrayProto.sort;
  var arraySlice = ArrayProto.slice;
  var arrayToString = ArrayProto.toString;
  var arrayToLocaleString = ArrayProto.toLocaleString;
  var ITERATOR = wks('iterator');
  var TAG = wks('toStringTag');
  var TYPED_CONSTRUCTOR = uid('typed_constructor');
  var DEF_CONSTRUCTOR = uid('def_constructor');
  var ALL_CONSTRUCTORS = $typed.CONSTR;
  var TYPED_ARRAY = $typed.TYPED;
  var VIEW = $typed.VIEW;
  var WRONG_LENGTH = 'Wrong length!';

  var $map = createArrayMethod(1, function (O, length) {
    return allocate(speciesConstructor(O, O[DEF_CONSTRUCTOR]), length);
  });

  var LITTLE_ENDIAN = fails(function () {
    // eslint-disable-next-line no-undef
    return new Uint8Array(new Uint16Array([1]).buffer)[0] === 1;
  });

  var FORCED_SET = !!Uint8Array && !!Uint8Array[PROTOTYPE].set && fails(function () {
    new Uint8Array(1).set({});
  });

  var toOffset = function (it, BYTES) {
    var offset = toInteger(it);
    if (offset < 0 || offset % BYTES) throw RangeError('Wrong offset!');
    return offset;
  };

  var validate = function (it) {
    if (isObject(it) && TYPED_ARRAY in it) return it;
    throw TypeError(it + ' is not a typed array!');
  };

  var allocate = function (C, length) {
    if (!(isObject(C) && TYPED_CONSTRUCTOR in C)) {
      throw TypeError('It is not a typed array constructor!');
    } return new C(length);
  };

  var speciesFromList = function (O, list) {
    return fromList(speciesConstructor(O, O[DEF_CONSTRUCTOR]), list);
  };

  var fromList = function (C, list) {
    var index = 0;
    var length = list.length;
    var result = allocate(C, length);
    while (length > index) result[index] = list[index++];
    return result;
  };

  var addGetter = function (it, key, internal) {
    dP(it, key, { get: function () { return this._d[internal]; } });
  };

  var $from = function from(source /* , mapfn, thisArg */) {
    var O = toObject(source);
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var iterFn = getIterFn(O);
    var i, length, values, result, step, iterator;
    if (iterFn != undefined && !isArrayIter(iterFn)) {
      for (iterator = iterFn.call(O), values = [], i = 0; !(step = iterator.next()).done; i++) {
        values.push(step.value);
      } O = values;
    }
    if (mapping && aLen > 2) mapfn = ctx(mapfn, arguments[2], 2);
    for (i = 0, length = toLength(O.length), result = allocate(this, length); length > i; i++) {
      result[i] = mapping ? mapfn(O[i], i) : O[i];
    }
    return result;
  };

  var $of = function of(/* ...items */) {
    var index = 0;
    var length = arguments.length;
    var result = allocate(this, length);
    while (length > index) result[index] = arguments[index++];
    return result;
  };

  // iOS Safari 6.x fails here
  var TO_LOCALE_BUG = !!Uint8Array && fails(function () { arrayToLocaleString.call(new Uint8Array(1)); });

  var $toLocaleString = function toLocaleString() {
    return arrayToLocaleString.apply(TO_LOCALE_BUG ? arraySlice.call(validate(this)) : validate(this), arguments);
  };

  var proto = {
    copyWithin: function copyWithin(target, start /* , end */) {
      return arrayCopyWithin.call(validate(this), target, start, arguments.length > 2 ? arguments[2] : undefined);
    },
    every: function every(callbackfn /* , thisArg */) {
      return arrayEvery(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    fill: function fill(value /* , start, end */) { // eslint-disable-line no-unused-vars
      return arrayFill.apply(validate(this), arguments);
    },
    filter: function filter(callbackfn /* , thisArg */) {
      return speciesFromList(this, arrayFilter(validate(this), callbackfn,
        arguments.length > 1 ? arguments[1] : undefined));
    },
    find: function find(predicate /* , thisArg */) {
      return arrayFind(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
    },
    findIndex: function findIndex(predicate /* , thisArg */) {
      return arrayFindIndex(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
    },
    forEach: function forEach(callbackfn /* , thisArg */) {
      arrayForEach(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    indexOf: function indexOf(searchElement /* , fromIndex */) {
      return arrayIndexOf(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
    },
    includes: function includes(searchElement /* , fromIndex */) {
      return arrayIncludes(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
    },
    join: function join(separator) { // eslint-disable-line no-unused-vars
      return arrayJoin.apply(validate(this), arguments);
    },
    lastIndexOf: function lastIndexOf(searchElement /* , fromIndex */) { // eslint-disable-line no-unused-vars
      return arrayLastIndexOf.apply(validate(this), arguments);
    },
    map: function map(mapfn /* , thisArg */) {
      return $map(validate(this), mapfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    reduce: function reduce(callbackfn /* , initialValue */) { // eslint-disable-line no-unused-vars
      return arrayReduce.apply(validate(this), arguments);
    },
    reduceRight: function reduceRight(callbackfn /* , initialValue */) { // eslint-disable-line no-unused-vars
      return arrayReduceRight.apply(validate(this), arguments);
    },
    reverse: function reverse() {
      var that = this;
      var length = validate(that).length;
      var middle = Math.floor(length / 2);
      var index = 0;
      var value;
      while (index < middle) {
        value = that[index];
        that[index++] = that[--length];
        that[length] = value;
      } return that;
    },
    some: function some(callbackfn /* , thisArg */) {
      return arraySome(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    sort: function sort(comparefn) {
      return arraySort.call(validate(this), comparefn);
    },
    subarray: function subarray(begin, end) {
      var O = validate(this);
      var length = O.length;
      var $begin = toAbsoluteIndex(begin, length);
      return new (speciesConstructor(O, O[DEF_CONSTRUCTOR]))(
        O.buffer,
        O.byteOffset + $begin * O.BYTES_PER_ELEMENT,
        toLength((end === undefined ? length : toAbsoluteIndex(end, length)) - $begin)
      );
    }
  };

  var $slice = function slice(start, end) {
    return speciesFromList(this, arraySlice.call(validate(this), start, end));
  };

  var $set = function set(arrayLike /* , offset */) {
    validate(this);
    var offset = toOffset(arguments[1], 1);
    var length = this.length;
    var src = toObject(arrayLike);
    var len = toLength(src.length);
    var index = 0;
    if (len + offset > length) throw RangeError(WRONG_LENGTH);
    while (index < len) this[offset + index] = src[index++];
  };

  var $iterators = {
    entries: function entries() {
      return arrayEntries.call(validate(this));
    },
    keys: function keys() {
      return arrayKeys.call(validate(this));
    },
    values: function values() {
      return arrayValues.call(validate(this));
    }
  };

  var isTAIndex = function (target, key) {
    return isObject(target)
      && target[TYPED_ARRAY]
      && typeof key != 'symbol'
      && key in target
      && String(+key) == String(key);
  };
  var $getDesc = function getOwnPropertyDescriptor(target, key) {
    return isTAIndex(target, key = toPrimitive(key, true))
      ? propertyDesc(2, target[key])
      : gOPD(target, key);
  };
  var $setDesc = function defineProperty(target, key, desc) {
    if (isTAIndex(target, key = toPrimitive(key, true))
      && isObject(desc)
      && has(desc, 'value')
      && !has(desc, 'get')
      && !has(desc, 'set')
      // TODO: add validation descriptor w/o calling accessors
      && !desc.configurable
      && (!has(desc, 'writable') || desc.writable)
      && (!has(desc, 'enumerable') || desc.enumerable)
    ) {
      target[key] = desc.value;
      return target;
    } return dP(target, key, desc);
  };

  if (!ALL_CONSTRUCTORS) {
    $GOPD.f = $getDesc;
    $DP.f = $setDesc;
  }

  $export($export.S + $export.F * !ALL_CONSTRUCTORS, 'Object', {
    getOwnPropertyDescriptor: $getDesc,
    defineProperty: $setDesc
  });

  if (fails(function () { arrayToString.call({}); })) {
    arrayToString = arrayToLocaleString = function toString() {
      return arrayJoin.call(this);
    };
  }

  var $TypedArrayPrototype$ = redefineAll({}, proto);
  redefineAll($TypedArrayPrototype$, $iterators);
  hide($TypedArrayPrototype$, ITERATOR, $iterators.values);
  redefineAll($TypedArrayPrototype$, {
    slice: $slice,
    set: $set,
    constructor: function () { /* noop */ },
    toString: arrayToString,
    toLocaleString: $toLocaleString
  });
  addGetter($TypedArrayPrototype$, 'buffer', 'b');
  addGetter($TypedArrayPrototype$, 'byteOffset', 'o');
  addGetter($TypedArrayPrototype$, 'byteLength', 'l');
  addGetter($TypedArrayPrototype$, 'length', 'e');
  dP($TypedArrayPrototype$, TAG, {
    get: function () { return this[TYPED_ARRAY]; }
  });

  // eslint-disable-next-line max-statements
  module.exports = function (KEY, BYTES, wrapper, CLAMPED) {
    CLAMPED = !!CLAMPED;
    var NAME = KEY + (CLAMPED ? 'Clamped' : '') + 'Array';
    var GETTER = 'get' + KEY;
    var SETTER = 'set' + KEY;
    var TypedArray = global[NAME];
    var Base = TypedArray || {};
    var TAC = TypedArray && getPrototypeOf(TypedArray);
    var FORCED = !TypedArray || !$typed.ABV;
    var O = {};
    var TypedArrayPrototype = TypedArray && TypedArray[PROTOTYPE];
    var getter = function (that, index) {
      var data = that._d;
      return data.v[GETTER](index * BYTES + data.o, LITTLE_ENDIAN);
    };
    var setter = function (that, index, value) {
      var data = that._d;
      if (CLAMPED) value = (value = Math.round(value)) < 0 ? 0 : value > 0xff ? 0xff : value & 0xff;
      data.v[SETTER](index * BYTES + data.o, value, LITTLE_ENDIAN);
    };
    var addElement = function (that, index) {
      dP(that, index, {
        get: function () {
          return getter(this, index);
        },
        set: function (value) {
          return setter(this, index, value);
        },
        enumerable: true
      });
    };
    if (FORCED) {
      TypedArray = wrapper(function (that, data, $offset, $length) {
        anInstance(that, TypedArray, NAME, '_d');
        var index = 0;
        var offset = 0;
        var buffer, byteLength, length, klass;
        if (!isObject(data)) {
          length = toIndex(data);
          byteLength = length * BYTES;
          buffer = new $ArrayBuffer(byteLength);
        } else if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
          buffer = data;
          offset = toOffset($offset, BYTES);
          var $len = data.byteLength;
          if ($length === undefined) {
            if ($len % BYTES) throw RangeError(WRONG_LENGTH);
            byteLength = $len - offset;
            if (byteLength < 0) throw RangeError(WRONG_LENGTH);
          } else {
            byteLength = toLength($length) * BYTES;
            if (byteLength + offset > $len) throw RangeError(WRONG_LENGTH);
          }
          length = byteLength / BYTES;
        } else if (TYPED_ARRAY in data) {
          return fromList(TypedArray, data);
        } else {
          return $from.call(TypedArray, data);
        }
        hide(that, '_d', {
          b: buffer,
          o: offset,
          l: byteLength,
          e: length,
          v: new $DataView(buffer)
        });
        while (index < length) addElement(that, index++);
      });
      TypedArrayPrototype = TypedArray[PROTOTYPE] = create($TypedArrayPrototype$);
      hide(TypedArrayPrototype, 'constructor', TypedArray);
    } else if (!fails(function () {
      TypedArray(1);
    }) || !fails(function () {
      new TypedArray(-1); // eslint-disable-line no-new
    }) || !$iterDetect(function (iter) {
      new TypedArray(); // eslint-disable-line no-new
      new TypedArray(null); // eslint-disable-line no-new
      new TypedArray(1.5); // eslint-disable-line no-new
      new TypedArray(iter); // eslint-disable-line no-new
    }, true)) {
      TypedArray = wrapper(function (that, data, $offset, $length) {
        anInstance(that, TypedArray, NAME);
        var klass;
        // `ws` module bug, temporarily remove validation length for Uint8Array
        // https://github.com/websockets/ws/pull/645
        if (!isObject(data)) return new Base(toIndex(data));
        if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
          return $length !== undefined
            ? new Base(data, toOffset($offset, BYTES), $length)
            : $offset !== undefined
              ? new Base(data, toOffset($offset, BYTES))
              : new Base(data);
        }
        if (TYPED_ARRAY in data) return fromList(TypedArray, data);
        return $from.call(TypedArray, data);
      });
      arrayForEach(TAC !== Function.prototype ? gOPN(Base).concat(gOPN(TAC)) : gOPN(Base), function (key) {
        if (!(key in TypedArray)) hide(TypedArray, key, Base[key]);
      });
      TypedArray[PROTOTYPE] = TypedArrayPrototype;
      if (!LIBRARY) TypedArrayPrototype.constructor = TypedArray;
    }
    var $nativeIterator = TypedArrayPrototype[ITERATOR];
    var CORRECT_ITER_NAME = !!$nativeIterator
      && ($nativeIterator.name == 'values' || $nativeIterator.name == undefined);
    var $iterator = $iterators.values;
    hide(TypedArray, TYPED_CONSTRUCTOR, true);
    hide(TypedArrayPrototype, TYPED_ARRAY, NAME);
    hide(TypedArrayPrototype, VIEW, true);
    hide(TypedArrayPrototype, DEF_CONSTRUCTOR, TypedArray);

    if (CLAMPED ? new TypedArray(1)[TAG] != NAME : !(TAG in TypedArrayPrototype)) {
      dP(TypedArrayPrototype, TAG, {
        get: function () { return NAME; }
      });
    }

    O[NAME] = TypedArray;

    $export($export.G + $export.W + $export.F * (TypedArray != Base), O);

    $export($export.S, NAME, {
      BYTES_PER_ELEMENT: BYTES
    });

    $export($export.S + $export.F * fails(function () { Base.of.call(TypedArray, 1); }), NAME, {
      from: $from,
      of: $of
    });

    if (!(BYTES_PER_ELEMENT in TypedArrayPrototype)) hide(TypedArrayPrototype, BYTES_PER_ELEMENT, BYTES);

    $export($export.P, NAME, proto);

    setSpecies(NAME);

    $export($export.P + $export.F * FORCED_SET, NAME, { set: $set });

    $export($export.P + $export.F * !CORRECT_ITER_NAME, NAME, $iterators);

    if (!LIBRARY && TypedArrayPrototype.toString != arrayToString) TypedArrayPrototype.toString = arrayToString;

    $export($export.P + $export.F * fails(function () {
      new TypedArray(1).slice();
    }), NAME, { slice: $slice });

    $export($export.P + $export.F * (fails(function () {
      return [1, 2].toLocaleString() != new TypedArray([1, 2]).toLocaleString();
    }) || !fails(function () {
      TypedArrayPrototype.toLocaleString.call([1, 2]);
    })), NAME, { toLocaleString: $toLocaleString });

    Iterators[NAME] = CORRECT_ITER_NAME ? $nativeIterator : $iterator;
    if (!LIBRARY && !CORRECT_ITER_NAME) hide(TypedArrayPrototype, ITERATOR, $iterator);
  };
} else module.exports = function () { /* empty */ };


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * # Transition tracing (debug)
 *
 * Enable transition tracing to print transition information to the console,
 * in order to help debug your application.
 * Tracing logs detailed information about each Transition to your console.
 *
 * To enable tracing, import the [[Trace]] singleton and enable one or more categories.
 *
 * ### ES6
 * ```js
 * import {trace} from "ui-router-ng2"; // or "angular-ui-router"
 * trace.enable(1, 5); // TRANSITION and VIEWCONFIG
 * ```
 *
 * ### CJS
 * ```js
 * let trace = require("angular-ui-router").trace; // or "ui-router-ng2"
 * trace.enable("TRANSITION", "VIEWCONFIG");
 * ```
 *
 * ### Globals
 * ```js
 * let trace = window["angular-ui-router"].trace; // or "ui-router-ng2"
 * trace.enable(); // Trace everything (very verbose)
 * ```
 *
 * ### Angular 1:
 * ```js
 * app.run($trace => $trace.enable());
 * ```
 *
 * @coreapi
 * @module trace
 */ /** for typedoc */
var hof_1 = __webpack_require__(9);
var predicates_1 = __webpack_require__(7);
var strings_1 = __webpack_require__(28);
/** @hidden */
function uiViewString(uiview) {
    if (!uiview)
        return 'ui-view (defunct)';
    var state = uiview.creationContext ? uiview.creationContext.name || '(root)' : '(none)';
    return "[ui-view#" + uiview.id + " " + uiview.$type + ":" + uiview.fqn + " (" + uiview.name + "@" + state + ")]";
}
/** @hidden */
var viewConfigString = function (viewConfig) {
    var view = viewConfig.viewDecl;
    var state = view.$context.name || '(root)';
    return "[View#" + viewConfig.$id + " from '" + state + "' state]: target ui-view: '" + view.$uiViewName + "@" + view.$uiViewContextAnchor + "'";
};
/** @hidden */
function normalizedCat(input) {
    return predicates_1.isNumber(input) ? Category[input] : Category[Category[input]];
}
/** @hidden */
var consoleLog = Function.prototype.bind.call(console.log, console);
/** @hidden */
var consoletable = predicates_1.isFunction(console.table) ? console.table.bind(console) : consoleLog.bind(console);
/**
 * Trace categories Enum
 *
 * Enable or disable a category using [[Trace.enable]] or [[Trace.disable]]
 *
 * `trace.enable(Category.TRANSITION)`
 *
 * These can also be provided using a matching string, or position ordinal
 *
 * `trace.enable("TRANSITION")`
 *
 * `trace.enable(1)`
 */
var Category;
(function (Category) {
    Category[Category["RESOLVE"] = 0] = "RESOLVE";
    Category[Category["TRANSITION"] = 1] = "TRANSITION";
    Category[Category["HOOK"] = 2] = "HOOK";
    Category[Category["UIVIEW"] = 3] = "UIVIEW";
    Category[Category["VIEWCONFIG"] = 4] = "VIEWCONFIG";
})(Category = exports.Category || (exports.Category = {}));
/** @hidden */ var _tid = hof_1.parse("$id");
/** @hidden */ var _rid = hof_1.parse("router.$id");
/** @hidden */ var transLbl = function (trans) { return "Transition #" + _tid(trans) + "-" + _rid(trans); };
/**
 * Prints UI-Router Transition trace information to the console.
 */
var Trace = /** @class */ (function () {
    /** @hidden */
    function Trace() {
        /** @hidden */
        this._enabled = {};
        this.approximateDigests = 0;
    }
    /** @hidden */
    Trace.prototype._set = function (enabled, categories) {
        var _this = this;
        if (!categories.length) {
            categories = Object.keys(Category)
                .map(function (k) { return parseInt(k, 10); })
                .filter(function (k) { return !isNaN(k); })
                .map(function (key) { return Category[key]; });
        }
        categories.map(normalizedCat).forEach(function (category) { return _this._enabled[category] = enabled; });
    };
    Trace.prototype.enable = function () {
        var categories = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            categories[_i] = arguments[_i];
        }
        this._set(true, categories);
    };
    Trace.prototype.disable = function () {
        var categories = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            categories[_i] = arguments[_i];
        }
        this._set(false, categories);
    };
    /**
     * Retrieves the enabled stateus of a [[Category]]
     *
     * ```js
     * trace.enabled("VIEWCONFIG"); // true or false
     * ```
     *
     * @returns boolean true if the category is enabled
     */
    Trace.prototype.enabled = function (category) {
        return !!this._enabled[normalizedCat(category)];
    };
    /** @internalapi called by ui-router code */
    Trace.prototype.traceTransitionStart = function (trans) {
        if (!this.enabled(Category.TRANSITION))
            return;
        console.log(transLbl(trans) + ": Started  -> " + strings_1.stringify(trans));
    };
    /** @internalapi called by ui-router code */
    Trace.prototype.traceTransitionIgnored = function (trans) {
        if (!this.enabled(Category.TRANSITION))
            return;
        console.log(transLbl(trans) + ": Ignored  <> " + strings_1.stringify(trans));
    };
    /** @internalapi called by ui-router code */
    Trace.prototype.traceHookInvocation = function (step, trans, options) {
        if (!this.enabled(Category.HOOK))
            return;
        var event = hof_1.parse("traceData.hookType")(options) || "internal", context = hof_1.parse("traceData.context.state.name")(options) || hof_1.parse("traceData.context")(options) || "unknown", name = strings_1.functionToString(step.registeredHook.callback);
        console.log(transLbl(trans) + ":   Hook -> " + event + " context: " + context + ", " + strings_1.maxLength(200, name));
    };
    /** @internalapi called by ui-router code */
    Trace.prototype.traceHookResult = function (hookResult, trans, transitionOptions) {
        if (!this.enabled(Category.HOOK))
            return;
        console.log(transLbl(trans) + ":   <- Hook returned: " + strings_1.maxLength(200, strings_1.stringify(hookResult)));
    };
    /** @internalapi called by ui-router code */
    Trace.prototype.traceResolvePath = function (path, when, trans) {
        if (!this.enabled(Category.RESOLVE))
            return;
        console.log(transLbl(trans) + ":         Resolving " + path + " (" + when + ")");
    };
    /** @internalapi called by ui-router code */
    Trace.prototype.traceResolvableResolved = function (resolvable, trans) {
        if (!this.enabled(Category.RESOLVE))
            return;
        console.log(transLbl(trans) + ":               <- Resolved  " + resolvable + " to: " + strings_1.maxLength(200, strings_1.stringify(resolvable.data)));
    };
    /** @internalapi called by ui-router code */
    Trace.prototype.traceError = function (reason, trans) {
        if (!this.enabled(Category.TRANSITION))
            return;
        console.log(transLbl(trans) + ": <- Rejected " + strings_1.stringify(trans) + ", reason: " + reason);
    };
    /** @internalapi called by ui-router code */
    Trace.prototype.traceSuccess = function (finalState, trans) {
        if (!this.enabled(Category.TRANSITION))
            return;
        console.log(transLbl(trans) + ": <- Success  " + strings_1.stringify(trans) + ", final state: " + finalState.name);
    };
    /** @internalapi called by ui-router code */
    Trace.prototype.traceUIViewEvent = function (event, viewData, extra) {
        if (extra === void 0) { extra = ""; }
        if (!this.enabled(Category.UIVIEW))
            return;
        console.log("ui-view: " + strings_1.padString(30, event) + " " + uiViewString(viewData) + extra);
    };
    /** @internalapi called by ui-router code */
    Trace.prototype.traceUIViewConfigUpdated = function (viewData, context) {
        if (!this.enabled(Category.UIVIEW))
            return;
        this.traceUIViewEvent("Updating", viewData, " with ViewConfig from context='" + context + "'");
    };
    /** @internalapi called by ui-router code */
    Trace.prototype.traceUIViewFill = function (viewData, html) {
        if (!this.enabled(Category.UIVIEW))
            return;
        this.traceUIViewEvent("Fill", viewData, " with: " + strings_1.maxLength(200, html));
    };
    /** @internalapi called by ui-router code */
    Trace.prototype.traceViewSync = function (pairs) {
        if (!this.enabled(Category.VIEWCONFIG))
            return;
        var mapping = pairs.map(function (_a) {
            var uiView = _a.uiView, viewConfig = _a.viewConfig;
            var uiv = uiView && uiView.fqn;
            var cfg = viewConfig && viewConfig.viewDecl.$context.name + ": " + viewConfig.viewDecl.$name;
            return { 'ui-view fqn': uiv, 'state: view name': cfg };
        }).sort(function (a, b) { return a['ui-view fqn'].localeCompare(b['ui-view fqn']); });
        consoletable(mapping);
    };
    /** @internalapi called by ui-router code */
    Trace.prototype.traceViewServiceEvent = function (event, viewConfig) {
        if (!this.enabled(Category.VIEWCONFIG))
            return;
        console.log("VIEWCONFIG: " + event + " " + viewConfigString(viewConfig));
    };
    /** @internalapi called by ui-router code */
    Trace.prototype.traceViewServiceUIViewEvent = function (event, viewData) {
        if (!this.enabled(Category.VIEWCONFIG))
            return;
        console.log("VIEWCONFIG: " + event + " " + uiViewString(viewData));
    };
    return Trace;
}());
exports.Trace = Trace;
/**
 * The [[Trace]] singleton
 *
 * #### Example:
 * ```js
 * import {trace} from "angular-ui-router";
 * trace.enable(1, 5);
 * ```
 */
var trace = new Trace();
exports.trace = trace;
//# sourceMappingURL=trace.js.map

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__(8)('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__(17)(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(50)('meta');
var isObject = __webpack_require__(6);
var has = __webpack_require__(16);
var setDesc = __webpack_require__(11).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(5)(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(26);
var call = __webpack_require__(175);
var isArrayIter = __webpack_require__(110);
var anObject = __webpack_require__(2);
var toLength = __webpack_require__(12);
var getIterFn = __webpack_require__(127);
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(2);
var dPs = __webpack_require__(181);
var enumBugKeys = __webpack_require__(106);
var IE_PROTO = __webpack_require__(118)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(105)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(108).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(183);
var hiddenKeys = __webpack_require__(106).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(183);
var enumBugKeys = __webpack_require__(106);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__(18);
module.exports = function (target, src, safe) {
  for (var key in src) redefine(target, key, src[key], safe);
  return target;
};


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(3);
var dP = __webpack_require__(11);
var DESCRIPTORS = __webpack_require__(10);
var SPECIES = __webpack_require__(8)('species');

module.exports = function (KEY) {
  var C = global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(33);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 50 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @coreapi
 * @module params
 */ /** for typedoc */
var common_1 = __webpack_require__(4);
var hof_1 = __webpack_require__(9);
var predicates_1 = __webpack_require__(7);
var coreservices_1 = __webpack_require__(14);
var paramType_1 = __webpack_require__(94);
/** @hidden */ var hasOwn = Object.prototype.hasOwnProperty;
/** @hidden */ var isShorthand = function (cfg) {
    return ["value", "type", "squash", "array", "dynamic"].filter(hasOwn.bind(cfg || {})).length === 0;
};
/** @internalapi */
var DefType;
(function (DefType) {
    DefType[DefType["PATH"] = 0] = "PATH";
    DefType[DefType["SEARCH"] = 1] = "SEARCH";
    DefType[DefType["CONFIG"] = 2] = "CONFIG";
})(DefType = exports.DefType || (exports.DefType = {}));
/** @hidden */
function unwrapShorthand(cfg) {
    cfg = isShorthand(cfg) && { value: cfg } || cfg;
    getStaticDefaultValue['__cacheable'] = true;
    function getStaticDefaultValue() {
        return cfg.value;
    }
    return common_1.extend(cfg, {
        $$fn: predicates_1.isInjectable(cfg.value) ? cfg.value : getStaticDefaultValue,
    });
}
/** @hidden */
function getType(cfg, urlType, location, id, paramTypes) {
    if (cfg.type && urlType && urlType.name !== 'string')
        throw new Error("Param '" + id + "' has two type configurations.");
    if (cfg.type && urlType && urlType.name === 'string' && paramTypes.type(cfg.type))
        return paramTypes.type(cfg.type);
    if (urlType)
        return urlType;
    if (!cfg.type) {
        var type = location === DefType.CONFIG ? "any" :
            location === DefType.PATH ? "path" :
                location === DefType.SEARCH ? "query" : "string";
        return paramTypes.type(type);
    }
    return cfg.type instanceof paramType_1.ParamType ? cfg.type : paramTypes.type(cfg.type);
}
/**
 * @internalapi
 * returns false, true, or the squash value to indicate the "default parameter url squash policy".
 */
function getSquashPolicy(config, isOptional, defaultPolicy) {
    var squash = config.squash;
    if (!isOptional || squash === false)
        return false;
    if (!predicates_1.isDefined(squash) || squash == null)
        return defaultPolicy;
    if (squash === true || predicates_1.isString(squash))
        return squash;
    throw new Error("Invalid squash policy: '" + squash + "'. Valid policies: false, true, or arbitrary string");
}
/** @internalapi */
function getReplace(config, arrayMode, isOptional, squash) {
    var replace, configuredKeys, defaultPolicy = [
        { from: "", to: (isOptional || arrayMode ? undefined : "") },
        { from: null, to: (isOptional || arrayMode ? undefined : "") },
    ];
    replace = predicates_1.isArray(config.replace) ? config.replace : [];
    if (predicates_1.isString(squash))
        replace.push({ from: squash, to: undefined });
    configuredKeys = common_1.map(replace, hof_1.prop("from"));
    return common_1.filter(defaultPolicy, function (item) { return configuredKeys.indexOf(item.from) === -1; }).concat(replace);
}
/** @internalapi */
var Param = /** @class */ (function () {
    function Param(id, type, config, location, urlMatcherFactory) {
        config = unwrapShorthand(config);
        type = getType(config, type, location, id, urlMatcherFactory.paramTypes);
        var arrayMode = getArrayMode();
        type = arrayMode ? type.$asArray(arrayMode, location === DefType.SEARCH) : type;
        var isOptional = config.value !== undefined || location === DefType.SEARCH;
        var dynamic = predicates_1.isDefined(config.dynamic) ? !!config.dynamic : !!type.dynamic;
        var raw = predicates_1.isDefined(config.raw) ? !!config.raw : !!type.raw;
        var squash = getSquashPolicy(config, isOptional, urlMatcherFactory.defaultSquashPolicy());
        var replace = getReplace(config, arrayMode, isOptional, squash);
        var inherit = predicates_1.isDefined(config.inherit) ? !!config.inherit : !!type.inherit;
        // array config: param name (param[]) overrides default settings.  explicit config overrides param name.
        function getArrayMode() {
            var arrayDefaults = { array: (location === DefType.SEARCH ? "auto" : false) };
            var arrayParamNomenclature = id.match(/\[\]$/) ? { array: true } : {};
            return common_1.extend(arrayDefaults, arrayParamNomenclature, config).array;
        }
        common_1.extend(this, { id: id, type: type, location: location, isOptional: isOptional, dynamic: dynamic, raw: raw, squash: squash, replace: replace, inherit: inherit, array: arrayMode, config: config });
    }
    Param.prototype.isDefaultValue = function (value) {
        return this.isOptional && this.type.equals(this.value(), value);
    };
    /**
     * [Internal] Gets the decoded representation of a value if the value is defined, otherwise, returns the
     * default value, which may be the result of an injectable function.
     */
    Param.prototype.value = function (value) {
        var _this = this;
        /**
         * [Internal] Get the default value of a parameter, which may be an injectable function.
         */
        var getDefaultValue = function () {
            if (_this._defaultValueCache)
                return _this._defaultValueCache.defaultValue;
            if (!coreservices_1.services.$injector)
                throw new Error("Injectable functions cannot be called at configuration time");
            var defaultValue = coreservices_1.services.$injector.invoke(_this.config.$$fn);
            if (defaultValue !== null && defaultValue !== undefined && !_this.type.is(defaultValue))
                throw new Error("Default value (" + defaultValue + ") for parameter '" + _this.id + "' is not an instance of ParamType (" + _this.type.name + ")");
            if (_this.config.$$fn['__cacheable']) {
                _this._defaultValueCache = { defaultValue: defaultValue };
            }
            return defaultValue;
        };
        var replaceSpecialValues = function (val) {
            for (var _i = 0, _a = _this.replace; _i < _a.length; _i++) {
                var tuple = _a[_i];
                if (tuple.from === val)
                    return tuple.to;
            }
            return val;
        };
        value = replaceSpecialValues(value);
        return predicates_1.isUndefined(value) ? getDefaultValue() : this.type.$normalize(value);
    };
    Param.prototype.isSearch = function () {
        return this.location === DefType.SEARCH;
    };
    Param.prototype.validates = function (value) {
        // There was no parameter value, but the param is optional
        if ((predicates_1.isUndefined(value) || value === null) && this.isOptional)
            return true;
        // The value was not of the correct ParamType, and could not be decoded to the correct ParamType
        var normalized = this.type.$normalize(value);
        if (!this.type.is(normalized))
            return false;
        // The value was of the correct type, but when encoded, did not match the ParamType's regexp
        var encoded = this.type.encode(normalized);
        return !(predicates_1.isString(encoded) && !this.type.pattern.exec(encoded));
    };
    Param.prototype.toString = function () {
        return "{Param:" + this.id + " " + this.type + " squash: '" + this.squash + "' optional: " + this.isOptional + "}";
    };
    Param.values = function (params, values) {
        if (values === void 0) { values = {}; }
        var paramValues = {};
        for (var _i = 0, params_1 = params; _i < params_1.length; _i++) {
            var param = params_1[_i];
            paramValues[param.id] = param.value(values[param.id]);
        }
        return paramValues;
    };
    /**
     * Finds [[Param]] objects which have different param values
     *
     * Filters a list of [[Param]] objects to only those whose parameter values differ in two param value objects
     *
     * @param params: The list of Param objects to filter
     * @param values1: The first set of parameter values
     * @param values2: the second set of parameter values
     *
     * @returns any Param objects whose values were different between values1 and values2
     */
    Param.changed = function (params, values1, values2) {
        if (values1 === void 0) { values1 = {}; }
        if (values2 === void 0) { values2 = {}; }
        return params.filter(function (param) { return !param.type.equals(values1[param.id], values2[param.id]); });
    };
    /**
     * Checks if two param value objects are equal (for a set of [[Param]] objects)
     *
     * @param params The list of [[Param]] objects to check
     * @param values1 The first set of param values
     * @param values2 The second set of param values
     *
     * @returns true if the param values in values1 and values2 are equal
     */
    Param.equals = function (params, values1, values2) {
        if (values1 === void 0) { values1 = {}; }
        if (values2 === void 0) { values2 = {}; }
        return Param.changed(params, values1, values2).length === 0;
    };
    /** Returns true if a the parameter values are valid, according to the Param definitions */
    Param.validates = function (params, values) {
        if (values === void 0) { values = {}; }
        return params.map(function (param) { return param.validates(values[param.id]); }).reduce(common_1.allTrueR, true);
    };
    return Param;
}());
exports.Param = Param;
//# sourceMappingURL=param.js.map

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @coreapi
 * @module state
 */ /** for typedoc */
Object.defineProperty(exports, "__esModule", { value: true });
var predicates_1 = __webpack_require__(7);
var strings_1 = __webpack_require__(28);
var common_1 = __webpack_require__(24);
/**
 * Encapsulate the target (destination) state/params/options of a [[Transition]].
 *
 * This class is frequently used to redirect a transition to a new destination.
 *
 * See:
 *
 * - [[HookResult]]
 * - [[TransitionHookFn]]
 * - [[TransitionService.onStart]]
 *
 * To create a `TargetState`, use [[StateService.target]].
 *
 * ---
 *
 * This class wraps:
 *
 * 1) an identifier for a state
 * 2) a set of parameters
 * 3) and transition options
 * 4) the registered state object (the [[StateDeclaration]])
 *
 * Many UI-Router APIs such as [[StateService.go]] take a [[StateOrName]] argument which can
 * either be a *state object* (a [[StateDeclaration]] or [[StateObject]]) or a *state name* (a string).
 * The `TargetState` class normalizes those options.
 *
 * A `TargetState` may be valid (the state being targeted exists in the registry)
 * or invalid (the state being targeted is not registered).
 */
var TargetState = /** @class */ (function () {
    /**
     * The TargetState constructor
     *
     * Note: Do not construct a `TargetState` manually.
     * To create a `TargetState`, use the [[StateService.target]] factory method.
     *
     * @param _stateRegistry The StateRegistry to use to look up the _definition
     * @param _identifier An identifier for a state.
     *    Either a fully-qualified state name, or the object used to define the state.
     * @param _params Parameters for the target state
     * @param _options Transition options.
     *
     * @internalapi
     */
    function TargetState(_stateRegistry, _identifier, _params, _options) {
        this._stateRegistry = _stateRegistry;
        this._identifier = _identifier;
        this._identifier = _identifier;
        this._params = common_1.extend({}, _params || {});
        this._options = common_1.extend({}, _options || {});
        this._definition = _stateRegistry.matcher.find(_identifier, this._options.relative);
    }
    /** The name of the state this object targets */
    TargetState.prototype.name = function () {
        return this._definition && this._definition.name || this._identifier;
    };
    /** The identifier used when creating this TargetState */
    TargetState.prototype.identifier = function () {
        return this._identifier;
    };
    /** The target parameter values */
    TargetState.prototype.params = function () {
        return this._params;
    };
    /** The internal state object (if it was found) */
    TargetState.prototype.$state = function () {
        return this._definition;
    };
    /** The internal state declaration (if it was found) */
    TargetState.prototype.state = function () {
        return this._definition && this._definition.self;
    };
    /** The target options */
    TargetState.prototype.options = function () {
        return this._options;
    };
    /** True if the target state was found */
    TargetState.prototype.exists = function () {
        return !!(this._definition && this._definition.self);
    };
    /** True if the object is valid */
    TargetState.prototype.valid = function () {
        return !this.error();
    };
    /** If the object is invalid, returns the reason why */
    TargetState.prototype.error = function () {
        var base = this.options().relative;
        if (!this._definition && !!base) {
            var stateName = base.name ? base.name : base;
            return "Could not resolve '" + this.name() + "' from state '" + stateName + "'";
        }
        if (!this._definition)
            return "No such state '" + this.name() + "'";
        if (!this._definition.self)
            return "State '" + this.name() + "' has an invalid definition";
    };
    TargetState.prototype.toString = function () {
        return "'" + this.name() + "'" + strings_1.stringify(this.params());
    };
    /**
     * Returns a copy of this TargetState which targets a different state.
     * The new TargetState has the same parameter values and transition options.
     *
     * @param state The new state that should be targeted
     */
    TargetState.prototype.withState = function (state) {
        return new TargetState(this._stateRegistry, state, this._params, this._options);
    };
    /**
     * Returns a copy of this TargetState, using the specified parameter values.
     *
     * @param params the new parameter values to use
     * @param replace When false (default) the new parameter values will be merged with the current values.
     *                When true the parameter values will be used instead of the current values.
     */
    TargetState.prototype.withParams = function (params, replace) {
        if (replace === void 0) { replace = false; }
        var newParams = replace ? params : common_1.extend({}, this._params, params);
        return new TargetState(this._stateRegistry, this._identifier, newParams, this._options);
    };
    /**
     * Returns a copy of this TargetState, using the specified Transition Options.
     *
     * @param options the new options to use
     * @param replace When false (default) the new options will be merged with the current options.
     *                When true the options will be used instead of the current options.
     */
    TargetState.prototype.withOptions = function (options, replace) {
        if (replace === void 0) { replace = false; }
        var newOpts = replace ? options : common_1.extend({}, this._options, options);
        return new TargetState(this._stateRegistry, this._identifier, this._params, newOpts);
    };
    /** Returns true if the object has a state property that might be a state or state name */
    TargetState.isDef = function (obj) {
        return obj && obj.state && (predicates_1.isString(obj.state) || predicates_1.isString(obj.state.name));
    };
    return TargetState;
}());
exports.TargetState = TargetState;
//# sourceMappingURL=targetState.js.map

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var TransitionHookPhase;
(function (TransitionHookPhase) {
    TransitionHookPhase[TransitionHookPhase["CREATE"] = 0] = "CREATE";
    TransitionHookPhase[TransitionHookPhase["BEFORE"] = 1] = "BEFORE";
    TransitionHookPhase[TransitionHookPhase["RUN"] = 2] = "RUN";
    TransitionHookPhase[TransitionHookPhase["SUCCESS"] = 3] = "SUCCESS";
    TransitionHookPhase[TransitionHookPhase["ERROR"] = 4] = "ERROR";
})(TransitionHookPhase = exports.TransitionHookPhase || (exports.TransitionHookPhase = {}));
var TransitionHookScope;
(function (TransitionHookScope) {
    TransitionHookScope[TransitionHookScope["TRANSITION"] = 0] = "TRANSITION";
    TransitionHookScope[TransitionHookScope["STATE"] = 1] = "STATE";
})(TransitionHookScope = exports.TransitionHookScope || (exports.TransitionHookScope = {}));
//# sourceMappingURL=interface.js.map

/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(11).f;
var has = __webpack_require__(16);
var TAG = __webpack_require__(8)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(0);
var defined = __webpack_require__(31);
var fails = __webpack_require__(5);
var spaces = __webpack_require__(122);
var space = '[' + spaces + ']';
var non = '\u200b\u0085';
var ltrim = RegExp('^' + space + space + '*');
var rtrim = RegExp(space + space + '*$');

var exporter = function (KEY, exec, ALIAS) {
  var exp = {};
  var FORCE = fails(function () {
    return !!spaces[KEY]() || non[KEY]() != non;
  });
  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
  if (ALIAS) exp[ALIAS] = fn;
  $export($export.P + $export.F * FORCE, 'String', exp);
};

// 1 -> String#trimLeft
// 2 -> String#trimRight
// 3 -> String#trim
var trim = exporter.trim = function (string, TYPE) {
  string = String(defined(string));
  if (TYPE & 1) string = string.replace(ltrim, '');
  if (TYPE & 2) string = string.replace(rtrim, '');
  return string;
};

module.exports = exporter;


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(6);
module.exports = function (it, TYPE) {
  if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
  return it;
};


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @coreapi
 * @module resolve
 */ /** for typedoc */
var common_1 = __webpack_require__(4);
var coreservices_1 = __webpack_require__(14);
var trace_1 = __webpack_require__(37);
var strings_1 = __webpack_require__(28);
var predicates_1 = __webpack_require__(7);
var common_2 = __webpack_require__(24);
// TODO: explicitly make this user configurable
exports.defaultResolvePolicy = {
    when: "LAZY",
    async: "WAIT"
};
/**
 * The basic building block for the resolve system.
 *
 * Resolvables encapsulate a state's resolve's resolveFn, the resolveFn's declared dependencies, the wrapped (.promise),
 * and the unwrapped-when-complete (.data) result of the resolveFn.
 *
 * Resolvable.get() either retrieves the Resolvable's existing promise, or else invokes resolve() (which invokes the
 * resolveFn) and returns the resulting promise.
 *
 * Resolvable.get() and Resolvable.resolve() both execute within a context path, which is passed as the first
 * parameter to those fns.
 */
var Resolvable = /** @class */ (function () {
    function Resolvable(arg1, resolveFn, deps, policy, data) {
        this.resolved = false;
        this.promise = undefined;
        if (arg1 instanceof Resolvable) {
            common_1.extend(this, arg1);
        }
        else if (predicates_1.isFunction(resolveFn)) {
            if (common_2.isNullOrUndefined(arg1))
                throw new Error("new Resolvable(): token argument is required");
            if (!predicates_1.isFunction(resolveFn))
                throw new Error("new Resolvable(): resolveFn argument must be a function");
            this.token = arg1;
            this.policy = policy;
            this.resolveFn = resolveFn;
            this.deps = deps || [];
            this.data = data;
            this.resolved = data !== undefined;
            this.promise = this.resolved ? coreservices_1.services.$q.when(this.data) : undefined;
        }
        else if (predicates_1.isObject(arg1) && arg1.token && predicates_1.isFunction(arg1.resolveFn)) {
            var literal = arg1;
            return new Resolvable(literal.token, literal.resolveFn, literal.deps, literal.policy, literal.data);
        }
    }
    Resolvable.prototype.getPolicy = function (state) {
        var thisPolicy = this.policy || {};
        var statePolicy = state && state.resolvePolicy || {};
        return {
            when: thisPolicy.when || statePolicy.when || exports.defaultResolvePolicy.when,
            async: thisPolicy.async || statePolicy.async || exports.defaultResolvePolicy.async,
        };
    };
    /**
     * Asynchronously resolve this Resolvable's data
     *
     * Given a ResolveContext that this Resolvable is found in:
     * Wait for this Resolvable's dependencies, then invoke this Resolvable's function
     * and update the Resolvable's state
     */
    Resolvable.prototype.resolve = function (resolveContext, trans) {
        var _this = this;
        var $q = coreservices_1.services.$q;
        // Gets all dependencies from ResolveContext and wait for them to be resolved
        var getResolvableDependencies = function () {
            return $q.all(resolveContext.getDependencies(_this).map(function (resolvable) {
                return resolvable.get(resolveContext, trans);
            }));
        };
        // Invokes the resolve function passing the resolved dependencies as arguments
        var invokeResolveFn = function (resolvedDeps) {
            return _this.resolveFn.apply(null, resolvedDeps);
        };
        /**
         * For RXWAIT policy:
         *
         * Given an observable returned from a resolve function:
         * - enables .cache() mode (this allows multicast subscribers)
         * - then calls toPromise() (this triggers subscribe() and thus fetches)
         * - Waits for the promise, then return the cached observable (not the first emitted value).
         */
        var waitForRx = function (observable$) {
            var cached = observable$.cache(1);
            return cached.take(1).toPromise().then(function () { return cached; });
        };
        // If the resolve policy is RXWAIT, wait for the observable to emit something. otherwise pass through.
        var node = resolveContext.findNode(this);
        var state = node && node.state;
        var maybeWaitForRx = this.getPolicy(state).async === "RXWAIT" ? waitForRx : common_1.identity;
        // After the final value has been resolved, update the state of the Resolvable
        var applyResolvedValue = function (resolvedValue) {
            _this.data = resolvedValue;
            _this.resolved = true;
            trace_1.trace.traceResolvableResolved(_this, trans);
            return _this.data;
        };
        // Sets the promise property first, then getsResolvableDependencies in the context of the promise chain. Always waits one tick.
        return this.promise = $q.when()
            .then(getResolvableDependencies)
            .then(invokeResolveFn)
            .then(maybeWaitForRx)
            .then(applyResolvedValue);
    };
    /**
     * Gets a promise for this Resolvable's data.
     *
     * Fetches the data and returns a promise.
     * Returns the existing promise if it has already been fetched once.
     */
    Resolvable.prototype.get = function (resolveContext, trans) {
        return this.promise || this.resolve(resolveContext, trans);
    };
    Resolvable.prototype.toString = function () {
        return "Resolvable(token: " + strings_1.stringify(this.token) + ", requires: [" + this.deps.map(strings_1.stringify) + "])";
    };
    Resolvable.prototype.clone = function () {
        return new Resolvable(this);
    };
    Resolvable.fromData = function (token, data) {
        return new Resolvable(token, function () { return data; }, null, null, data);
    };
    return Resolvable;
}());
exports.Resolvable = Resolvable;
//# sourceMappingURL=resolvable.js.map

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @coreapi
 * @module transition
 */ /** for typedoc */

Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = __webpack_require__(4);
var strings_1 = __webpack_require__(28);
var hof_1 = __webpack_require__(9);
var RejectType;
(function (RejectType) {
    RejectType[RejectType["SUPERSEDED"] = 2] = "SUPERSEDED";
    RejectType[RejectType["ABORTED"] = 3] = "ABORTED";
    RejectType[RejectType["INVALID"] = 4] = "INVALID";
    RejectType[RejectType["IGNORED"] = 5] = "IGNORED";
    RejectType[RejectType["ERROR"] = 6] = "ERROR";
})(RejectType = exports.RejectType || (exports.RejectType = {}));
/** @hidden */ var id = 0;
var Rejection = /** @class */ (function () {
    function Rejection(type, message, detail) {
        this.$id = id++;
        this.type = type;
        this.message = message;
        this.detail = detail;
    }
    Rejection.prototype.toString = function () {
        var detailString = function (d) {
            return d && d.toString !== Object.prototype.toString ? d.toString() : strings_1.stringify(d);
        };
        var detail = detailString(this.detail);
        var _a = this, $id = _a.$id, type = _a.type, message = _a.message;
        return "Transition Rejection($id: " + $id + " type: " + type + ", message: " + message + ", detail: " + detail + ")";
    };
    Rejection.prototype.toPromise = function () {
        return common_1.extend(common_1.silentRejection(this), { _transitionRejection: this });
    };
    /** Returns true if the obj is a rejected promise created from the `asPromise` factory */
    Rejection.isRejectionPromise = function (obj) {
        return obj && (typeof obj.then === 'function') && hof_1.is(Rejection)(obj._transitionRejection);
    };
    /** Returns a Rejection due to transition superseded */
    Rejection.superseded = function (detail, options) {
        var message = "The transition has been superseded by a different transition";
        var rejection = new Rejection(RejectType.SUPERSEDED, message, detail);
        if (options && options.redirected) {
            rejection.redirected = true;
        }
        return rejection;
    };
    /** Returns a Rejection due to redirected transition */
    Rejection.redirected = function (detail) {
        return Rejection.superseded(detail, { redirected: true });
    };
    /** Returns a Rejection due to invalid transition */
    Rejection.invalid = function (detail) {
        var message = "This transition is invalid";
        return new Rejection(RejectType.INVALID, message, detail);
    };
    /** Returns a Rejection due to ignored transition */
    Rejection.ignored = function (detail) {
        var message = "The transition was ignored";
        return new Rejection(RejectType.IGNORED, message, detail);
    };
    /** Returns a Rejection due to aborted transition */
    Rejection.aborted = function (detail) {
        var message = "The transition has been aborted";
        return new Rejection(RejectType.ABORTED, message, detail);
    };
    /** Returns a Rejection due to aborted transition */
    Rejection.errored = function (detail) {
        var message = "The transition errored";
        return new Rejection(RejectType.ERROR, message, detail);
    };
    /**
     * Returns a Rejection
     *
     * Normalizes a value as a Rejection.
     * If the value is already a Rejection, returns it.
     * Otherwise, wraps and returns the value as a Rejection (Rejection type: ERROR).
     *
     * @returns `detail` if it is already a `Rejection`, else returns an ERROR Rejection.
     */
    Rejection.normalize = function (detail) {
        return hof_1.is(Rejection)(detail) ? detail : Rejection.errored(detail);
    };
    return Rejection;
}());
exports.Rejection = Rejection;
//# sourceMappingURL=rejectFactory.js.map

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @coreapi
 * @module transition
 */
/** for typedoc */
var interface_1 = __webpack_require__(53);
var common_1 = __webpack_require__(4);
var strings_1 = __webpack_require__(28);
var predicates_1 = __webpack_require__(7);
var hof_1 = __webpack_require__(9);
var trace_1 = __webpack_require__(37);
var coreservices_1 = __webpack_require__(14);
var rejectFactory_1 = __webpack_require__(59);
var targetState_1 = __webpack_require__(52);
var defaultOptions = {
    current: common_1.noop,
    transition: null,
    traceData: {},
    bind: null,
};
/** @hidden */
var TransitionHook = /** @class */ (function () {
    function TransitionHook(transition, stateContext, registeredHook, options) {
        var _this = this;
        this.transition = transition;
        this.stateContext = stateContext;
        this.registeredHook = registeredHook;
        this.options = options;
        this.isSuperseded = function () {
            return _this.type.hookPhase === interface_1.TransitionHookPhase.RUN && !_this.options.transition.isActive();
        };
        this.options = common_1.defaults(options, defaultOptions);
        this.type = registeredHook.eventType;
    }
    TransitionHook.prototype.logError = function (err) {
        this.transition.router.stateService.defaultErrorHandler()(err);
    };
    TransitionHook.prototype.invokeHook = function () {
        var _this = this;
        var hook = this.registeredHook;
        if (hook._deregistered)
            return;
        var notCurrent = this.getNotCurrentRejection();
        if (notCurrent)
            return notCurrent;
        var options = this.options;
        trace_1.trace.traceHookInvocation(this, this.transition, options);
        var invokeCallback = function(){};
        var normalizeErr = function (err) {
            return rejectFactory_1.Rejection.normalize(err).toPromise();
        };
        var handleError = function (err) {
            return hook.eventType.getErrorHandler(_this)(err);
        };
        var handleResult = function (result) {
            return hook.eventType.getResultHandler(_this)(result);
        };
        try {
            var result = invokeCallback();
            if (!this.type.synchronous && predicates_1.isPromise(result)) {
                return result.catch(normalizeErr)
                    .then(handleResult, handleError);
            }
            else {
                return handleResult(result);
            }
        }
        catch (err) {
            // If callback throws (synchronously)
            return handleError(rejectFactory_1.Rejection.normalize(err));
        }
        finally {
            if (hook.invokeLimit && ++hook.invokeCount >= hook.invokeLimit) {
                hook.deregister();
            }
        }
    };
    /**
     * This method handles the return value of a Transition Hook.
     *
     * A hook can return false (cancel), a TargetState (redirect),
     * or a promise (which may later resolve to false or a redirect)
     *
     * This also handles "transition superseded" -- when a new transition
     * was started while the hook was still running
     */
    TransitionHook.prototype.handleHookResult = function (result) {
        var _this = this;
        var notCurrent = this.getNotCurrentRejection();
        if (notCurrent)
            return notCurrent;
        // Hook returned a promise
        if (predicates_1.isPromise(result)) {
            // Wait for the promise, then reprocess with the resulting value
            return result.then(function (val) { return _this.handleHookResult(val); });
        }
        trace_1.trace.traceHookResult(result, this.transition, this.options);
        // Hook returned false
        if (result === false) {
            // Abort this Transition
            return rejectFactory_1.Rejection.aborted("Hook aborted transition").toPromise();
        }
        var isTargetState = hof_1.is(targetState_1.TargetState);
        // hook returned a TargetState
        if (isTargetState(result)) {
            // Halt the current Transition and redirect (a new Transition) to the TargetState.
            return rejectFactory_1.Rejection.redirected(result).toPromise();
        }
    };
    /**
     * Return a Rejection promise if the transition is no longer current due
     * to a stopped router (disposed), or a new transition has started and superseded this one.
     */
    TransitionHook.prototype.getNotCurrentRejection = function () {
        var router = this.transition.router;
        // The router is stopped
        if (router._disposed) {
            return rejectFactory_1.Rejection.aborted("UIRouter instance #" + router.$id + " has been stopped (disposed)").toPromise();
        }
        if (this.transition._aborted) {
            return rejectFactory_1.Rejection.aborted().toPromise();
        }
        // This transition is no longer current.
        // Another transition started while this hook was still running.
        if (this.isSuperseded()) {
            // Abort this transition
            return rejectFactory_1.Rejection.superseded(this.options.current()).toPromise();
        }
    };
    TransitionHook.prototype.toString = function () {
        var _a = this, options = _a.options, registeredHook = _a.registeredHook;
        var event = hof_1.parse("traceData.hookType")(options) || "internal", context = hof_1.parse("traceData.context.state.name")(options) || hof_1.parse("traceData.context")(options) || "unknown", name = strings_1.fnToString(registeredHook.callback);
        return event + " context: " + context + ", " + strings_1.maxLength(200, name);
    };
    /**
     * Chains together an array of TransitionHooks.
     *
     * Given a list of [[TransitionHook]] objects, chains them together.
     * Each hook is invoked after the previous one completes.
     *
     * #### Example:
     * ```js
     * var hooks: TransitionHook[] = getHooks();
     * let promise: Promise<any> = TransitionHook.chain(hooks);
     *
     * promise.then(handleSuccess, handleError);
     * ```
     *
     * @param hooks the list of hooks to chain together
     * @param waitFor if provided, the chain is `.then()`'ed off this promise
     * @returns a `Promise` for sequentially invoking the hooks (in order)
     */
    TransitionHook.chain = function (hooks, waitFor) {
        // Chain the next hook off the previous
        var createHookChainR = function (prev, nextHook) {
            return prev.then(function () { return nextHook.invokeHook(); });
        };
        return hooks.reduce(createHookChainR, waitFor || coreservices_1.services.$q.when());
    };
    /**
     * Invokes all the provided TransitionHooks, in order.
     * Each hook's return value is checked.
     * If any hook returns a promise, then the rest of the hooks are chained off that promise, and the promise is returned.
     * If no hook returns a promise, then all hooks are processed synchronously.
     *
     * @param hooks the list of TransitionHooks to invoke
     * @param doneCallback a callback that is invoked after all the hooks have successfully completed
     *
     * @returns a promise for the async result, or the result of the callback
     */
    TransitionHook.invokeHooks = function (hooks, doneCallback) {
        for (var idx = 0; idx < hooks.length; idx++) {
            var hookResult = hooks[idx].invokeHook();
            if (predicates_1.isPromise(hookResult)) {
                var remainingHooks = hooks.slice(idx + 1);
                return TransitionHook.chain(remainingHooks, hookResult)
                    .then(doneCallback);
            }
        }
        return doneCallback();
    };
    /**
     * Run all TransitionHooks, ignoring their return value.
     */
    TransitionHook.runAllHooks = function (hooks) {
        hooks.forEach(function (hook) { return hook.invokeHook(); });
    };
    /**
     * These GetResultHandler(s) are used by [[invokeHook]] below
     * Each HookType chooses a GetResultHandler (See: [[TransitionService._defineCoreEvents]])
     */
    TransitionHook.HANDLE_RESULT = function (hook) { return function (result) {
        return hook.handleHookResult(result);
    }; };
    /**
     * If the result is a promise rejection, log it.
     * Otherwise, ignore the result.
     */
    TransitionHook.LOG_REJECTED_RESULT = function (hook) { return function (result) {
        predicates_1.isPromise(result) && result.catch(function (err) {
            return hook.logError(rejectFactory_1.Rejection.normalize(err));
        });
        return undefined;
    }; };
    /**
     * These GetErrorHandler(s) are used by [[invokeHook]] below
     * Each HookType chooses a GetErrorHandler (See: [[TransitionService._defineCoreEvents]])
     */
    TransitionHook.LOG_ERROR = function (hook) { return function (error) {
        return hook.logError(error);
    }; };
    TransitionHook.REJECT_ERROR = function (hook) { return function (error) {
        return common_1.silentRejection(error);
    }; };
    TransitionHook.THROW_ERROR = function (hook) { return function (error) {
        throw error;
    }; };
    return TransitionHook;
}());
exports.TransitionHook = TransitionHook;
//# sourceMappingURL=transitionHook.js.map

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(25);
var TAG = __webpack_require__(8)('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(25);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 63 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(375);
module.exports = angular;


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @coreapi
 * @module core
 */
/**
 * Matches state names using glob-like pattern strings.
 *
 * Globs can be used in specific APIs including:
 *
 * - [[StateService.is]]
 * - [[StateService.includes]]
 * - The first argument to Hook Registration functions like [[TransitionService.onStart]]
 *    - [[HookMatchCriteria]] and [[HookMatchCriterion]]
 *
 * A `Glob` string is a pattern which matches state names.
 * Nested state names are split into segments (separated by a dot) when processing.
 * The state named `foo.bar.baz` is split into three segments ['foo', 'bar', 'baz']
 *
 * Globs work according to the following rules:
 *
 * ### Exact match:
 *
 * The glob `'A.B'` matches the state named exactly `'A.B'`.
 *
 * | Glob        |Matches states named|Does not match state named|
 * |:------------|:--------------------|:---------------------|
 * | `'A'`       | `'A'`               | `'B'` , `'A.C'`      |
 * | `'A.B'`     | `'A.B'`             | `'A'` , `'A.B.C'`    |
 * | `'foo'`     | `'foo'`             | `'FOO'` , `'foo.bar'`|
 *
 * ### Single star (`*`)
 *
 * A single star (`*`) is a wildcard that matches exactly one segment.
 *
 * | Glob        |Matches states named  |Does not match state named |
 * |:------------|:---------------------|:--------------------------|
 * | `'*'`       | `'A'` , `'Z'`        | `'A.B'` , `'Z.Y.X'`       |
 * | `'A.*'`     | `'A.B'` , `'A.C'`    | `'A'` , `'A.B.C'`         |
 * | `'A.*.*'`   | `'A.B.C'` , `'A.X.Y'`| `'A'`, `'A.B'` , `'Z.Y.X'`|
 *
 * ### Double star (`**`)
 *
 * A double star (`'**'`) is a wildcard that matches *zero or more segments*
 *
 * | Glob        |Matches states named                           |Does not match state named         |
 * |:------------|:----------------------------------------------|:----------------------------------|
 * | `'**'`      | `'A'` , `'A.B'`, `'Z.Y.X'`                    | (matches all states)              |
 * | `'A.**'`    | `'A'` , `'A.B'` , `'A.C.X'`                   | `'Z.Y.X'`                         |
 * | `'**.X'`    | `'X'` , `'A.X'` , `'Z.Y.X'`                   | `'A'` , `'A.login.Z'`             |
 * | `'A.**.X'`  | `'A.X'` , `'A.B.X'` , `'A.B.C.X'`             | `'A'` , `'A.B.C'`                 |
 *
 */
var Glob = /** @class */ (function () {
    function Glob(text) {
        this.text = text;
        this.glob = text.split('.');
        var regexpString = this.text.split('.')
            .map(function (seg) {
            if (seg === '**')
                return '(?:|(?:\\.[^.]*)*)';
            if (seg === '*')
                return '\\.[^.]*';
            return '\\.' + seg;
        }).join('');
        this.regexp = new RegExp("^" + regexpString + "$");
    }
    Glob.prototype.matches = function (name) {
        return this.regexp.test('.' + name);
    };
    /** Returns true if the string has glob-like characters in it */
    Glob.is = function (text) {
        return !!/[!,*]+/.exec(text);
    };
    /** Returns a glob from the string, or null if the string isn't Glob-like */
    Glob.fromString = function (text) {
        return Glob.is(text) ? new Glob(text) : null;
    };
    return Glob;
}());
exports.Glob = Glob;
//# sourceMappingURL=glob.js.map

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/** @module path */ /** for typedoc */
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = __webpack_require__(4);
var hof_1 = __webpack_require__(9);
var targetState_1 = __webpack_require__(52);
var pathNode_1 = __webpack_require__(95);
/**
 * This class contains functions which convert TargetStates, Nodes and paths from one type to another.
 */
var PathUtils = /** @class */ (function () {
    function PathUtils() {
    }
    /** Given a PathNode[], create an TargetState */
    PathUtils.makeTargetState = function (registry, path) {
        var state = common_1.tail(path).state;
        return new targetState_1.TargetState(registry, state, path.map(hof_1.prop("paramValues")).reduce(common_1.mergeR, {}), {});
    };
    PathUtils.buildPath = function (targetState) {
        var toParams = targetState.params();
        return targetState.$state().path.map(function (state) { return new pathNode_1.PathNode(state).applyRawParams(toParams); });
    };
    /** Given a fromPath: PathNode[] and a TargetState, builds a toPath: PathNode[] */
    PathUtils.buildToPath = function (fromPath, targetState) {
        var toPath = PathUtils.buildPath(targetState);
        if (targetState.options().inherit) {
            return PathUtils.inheritParams(fromPath, toPath, Object.keys(targetState.params()));
        }
        return toPath;
    };
    /**
     * Creates ViewConfig objects and adds to nodes.
     *
     * On each [[PathNode]], creates ViewConfig objects from the views: property of the node's state
     */
    PathUtils.applyViewConfigs = function ($view, path, states) {
        // Only apply the viewConfigs to the nodes for the given states
        path.filter(function (node) { return common_1.inArray(states, node.state); }).forEach(function (node) {
            var viewDecls = common_1.values(node.state.views || {});
            var subPath = PathUtils.subPath(path, function (n) { return n === node; });
            var viewConfigs = viewDecls.map(function (view) { return $view.createViewConfig(subPath, view); });
            node.views = viewConfigs.reduce(common_1.unnestR, []);
        });
    };
    /**
     * Given a fromPath and a toPath, returns a new to path which inherits parameters from the fromPath
     *
     * For a parameter in a node to be inherited from the from path:
     * - The toPath's node must have a matching node in the fromPath (by state).
     * - The parameter name must not be found in the toKeys parameter array.
     *
     * Note: the keys provided in toKeys are intended to be those param keys explicitly specified by some
     * caller, for instance, $state.transitionTo(..., toParams).  If a key was found in toParams,
     * it is not inherited from the fromPath.
     */
    PathUtils.inheritParams = function (fromPath, toPath, toKeys) {
        if (toKeys === void 0) { toKeys = []; }
        function nodeParamVals(path, state) {
            var node = common_1.find(path, hof_1.propEq('state', state));
            return common_1.extend({}, node && node.paramValues);
        }
        var noInherit = fromPath.map(function (node) { return node.paramSchema; })
            .reduce(common_1.unnestR, [])
            .filter(function (param) { return !param.inherit; })
            .map(hof_1.prop('id'));
        /**
         * Given an [[PathNode]] "toNode", return a new [[PathNode]] with param values inherited from the
         * matching node in fromPath.  Only inherit keys that aren't found in "toKeys" from the node in "fromPath""
         */
        function makeInheritedParamsNode(toNode) {
            // All param values for the node (may include default key/vals, when key was not found in toParams)
            var toParamVals = common_1.extend({}, toNode && toNode.paramValues);
            // limited to only those keys found in toParams
            var incomingParamVals = common_1.pick(toParamVals, toKeys);
            toParamVals = common_1.omit(toParamVals, toKeys);
            var fromParamVals = common_1.omit(nodeParamVals(fromPath, toNode.state) || {}, noInherit);
            // extend toParamVals with any fromParamVals, then override any of those those with incomingParamVals
            var ownParamVals = common_1.extend(toParamVals, fromParamVals, incomingParamVals);
            return new pathNode_1.PathNode(toNode.state).applyRawParams(ownParamVals);
        }
        // The param keys specified by the incoming toParams
        return toPath.map(makeInheritedParamsNode);
    };
    /**
     * Computes the tree changes (entering, exiting) between a fromPath and toPath.
     */
    PathUtils.treeChanges = function (fromPath, toPath, reloadState) {
        var keep = 0, max = Math.min(fromPath.length, toPath.length);
        var nodesMatch = function (node1, node2) {
            return node1.equals(node2, PathUtils.nonDynamicParams);
        };
        while (keep < max && fromPath[keep].state !== reloadState && nodesMatch(fromPath[keep], toPath[keep])) {
            keep++;
        }
        /** Given a retained node, return a new node which uses the to node's param values */
        function applyToParams(retainedNode, idx) {
            var cloned = pathNode_1.PathNode.clone(retainedNode);
            cloned.paramValues = toPath[idx].paramValues;
            return cloned;
        }
        var from, retained, exiting, entering, to;
        from = fromPath;
        retained = from.slice(0, keep);
        exiting = from.slice(keep);
        // Create a new retained path (with shallow copies of nodes) which have the params of the toPath mapped
        var retainedWithToParams = retained.map(applyToParams);
        entering = toPath.slice(keep);
        to = (retainedWithToParams).concat(entering);
        return { from: from, to: to, retained: retained, exiting: exiting, entering: entering };
    };
    /**
     * Returns a new path which is: the subpath of the first path which matches the second path.
     *
     * The new path starts from root and contains any nodes that match the nodes in the second path.
     * It stops before the first non-matching node.
     *
     * Nodes are compared using their state property and their parameter values.
     * If a `paramsFn` is provided, only the [[Param]] returned by the function will be considered when comparing nodes.
     *
     * @param pathA the first path
     * @param pathB the second path
     * @param paramsFn a function which returns the parameters to consider when comparing
     *
     * @returns an array of PathNodes from the first path which match the nodes in the second path
     */
    PathUtils.matching = function (pathA, pathB, paramsFn) {
        var done = false;
        var tuples = common_1.arrayTuples(pathA, pathB);
        return tuples.reduce(function (matching, _a) {
            var nodeA = _a[0], nodeB = _a[1];
            done = done || !nodeA.equals(nodeB, paramsFn);
            return done ? matching : matching.concat(nodeA);
        }, []);
    };
    /**
     * Returns true if two paths are identical.
     *
     * @param pathA
     * @param pathB
     * @param paramsFn a function which returns the parameters to consider when comparing
     * @returns true if the the states and parameter values for both paths are identical
     */
    PathUtils.equals = function (pathA, pathB, paramsFn) {
        return pathA.length === pathB.length &&
            PathUtils.matching(pathA, pathB, paramsFn).length === pathA.length;
    };
    /**
     * Return a subpath of a path, which stops at the first matching node
     *
     * Given an array of nodes, returns a subset of the array starting from the first node,
     * stopping when the first node matches the predicate.
     *
     * @param path a path of [[PathNode]]s
     * @param predicate a [[Predicate]] fn that matches [[PathNode]]s
     * @returns a subpath up to the matching node, or undefined if no match is found
     */
    PathUtils.subPath = function (path, predicate) {
        var node = common_1.find(path, predicate);
        var elementIdx = path.indexOf(node);
        return elementIdx === -1 ? undefined : path.slice(0, elementIdx + 1);
    };
    PathUtils.nonDynamicParams = function (node) {
        return node.state.parameters({ inherit: false })
            .filter(function (param) { return !param.dynamic; });
    };
    /** Gets the raw parameter values from a path */
    PathUtils.paramValues = function (path) {
        return path.reduce(function (acc, node) { return common_1.extend(acc, node.paramValues); }, {});
    };
    return PathUtils;
}());
exports.PathUtils = PathUtils;
//# sourceMappingURL=pathFactory.js.map

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/** @module resolve */
/** for typedoc */
var common_1 = __webpack_require__(4);
var hof_1 = __webpack_require__(9);
var trace_1 = __webpack_require__(37);
var coreservices_1 = __webpack_require__(14);
var interface_1 = __webpack_require__(137);
var resolvable_1 = __webpack_require__(58);
var pathFactory_1 = __webpack_require__(66);
var strings_1 = __webpack_require__(28);
var common_2 = __webpack_require__(24);
var whens = interface_1.resolvePolicies.when;
var ALL_WHENS = [whens.EAGER, whens.LAZY];
var EAGER_WHENS = [whens.EAGER];
exports.NATIVE_INJECTOR_TOKEN = "Native Injector";
/**
 * Encapsulates Dependency Injection for a path of nodes
 *
 * UI-Router states are organized as a tree.
 * A nested state has a path of ancestors to the root of the tree.
 * When a state is being activated, each element in the path is wrapped as a [[PathNode]].
 * A `PathNode` is a stateful object that holds things like parameters and resolvables for the state being activated.
 *
 * The ResolveContext closes over the [[PathNode]]s, and provides DI for the last node in the path.
 */
var ResolveContext = /** @class */ (function () {
    function ResolveContext(_path) {
        this._path = _path;
    }
    /** Gets all the tokens found in the resolve context, de-duplicated */
    ResolveContext.prototype.getTokens = function () {
        return this._path.reduce(function (acc, node) { return acc.concat(node.resolvables.map(function (r) { return r.token; })); }, []).reduce(common_1.uniqR, []);
    };
    /**
     * Gets the Resolvable that matches the token
     *
     * Gets the last Resolvable that matches the token in this context, or undefined.
     * Throws an error if it doesn't exist in the ResolveContext
     */
    ResolveContext.prototype.getResolvable = function (token) {
        var matching = this._path.map(function (node) { return node.resolvables; })
            .reduce(common_1.unnestR, [])
            .filter(function (r) { return r.token === token; });
        return common_1.tail(matching);
    };
    /** Returns the [[ResolvePolicy]] for the given [[Resolvable]] */
    ResolveContext.prototype.getPolicy = function (resolvable) {
        var node = this.findNode(resolvable);
        return resolvable.getPolicy(node.state);
    };
    /**
     * Returns a ResolveContext that includes a portion of this one
     *
     * Given a state, this method creates a new ResolveContext from this one.
     * The new context starts at the first node (root) and stops at the node for the `state` parameter.
     *
     * #### Why
     *
     * When a transition is created, the nodes in the "To Path" are injected from a ResolveContext.
     * A ResolveContext closes over a path of [[PathNode]]s and processes the resolvables.
     * The "To State" can inject values from its own resolvables, as well as those from all its ancestor state's (node's).
     * This method is used to create a narrower context when injecting ancestor nodes.
     *
     * @example
     * `let ABCD = new ResolveContext([A, B, C, D]);`
     *
     * Given a path `[A, B, C, D]`, where `A`, `B`, `C` and `D` are nodes for states `a`, `b`, `c`, `d`:
     * When injecting `D`, `D` should have access to all resolvables from `A`, `B`, `C`, `D`.
     * However, `B` should only be able to access resolvables from `A`, `B`.
     *
     * When resolving for the `B` node, first take the full "To Path" Context `[A,B,C,D]` and limit to the subpath `[A,B]`.
     * `let AB = ABCD.subcontext(a)`
     */
    ResolveContext.prototype.subContext = function (state) {
        return new ResolveContext(pathFactory_1.PathUtils.subPath(this._path, function (node) { return node.state === state; }));
    };
    /**
     * Adds Resolvables to the node that matches the state
     *
     * This adds a [[Resolvable]] (generally one created on the fly; not declared on a [[StateDeclaration.resolve]] block).
     * The resolvable is added to the node matching the `state` parameter.
     *
     * These new resolvables are not automatically fetched.
     * The calling code should either fetch them, fetch something that depends on them,
     * or rely on [[resolvePath]] being called when some state is being entered.
     *
     * Note: each resolvable's [[ResolvePolicy]] is merged with the state's policy, and the global default.
     *
     * @param newResolvables the new Resolvables
     * @param state Used to find the node to put the resolvable on
     */
    ResolveContext.prototype.addResolvables = function (newResolvables, state) {
        var node = common_1.find(this._path, hof_1.propEq('state', state));
        var keys = newResolvables.map(function (r) { return r.token; });
        node.resolvables = node.resolvables.filter(function (r) { return keys.indexOf(r.token) === -1; }).concat(newResolvables);
    };
    /**
     * Returns a promise for an array of resolved path Element promises
     *
     * @param when
     * @param trans
     * @returns {Promise<any>|any}
     */
    ResolveContext.prototype.resolvePath = function (when, trans) {
        var _this = this;
        if (when === void 0) { when = "LAZY"; }
        // This option determines which 'when' policy Resolvables we are about to fetch.
        var whenOption = common_1.inArray(ALL_WHENS, when) ? when : "LAZY";
        // If the caller specified EAGER, only the EAGER Resolvables are fetched.
        // if the caller specified LAZY, both EAGER and LAZY Resolvables are fetched.`
        var matchedWhens = whenOption === interface_1.resolvePolicies.when.EAGER ? EAGER_WHENS : ALL_WHENS;
        // get the subpath to the state argument, if provided
        trace_1.trace.traceResolvePath(this._path, when, trans);
        var matchesPolicy = function (acceptedVals, whenOrAsync) {
            return function (resolvable) {
                return common_1.inArray(acceptedVals, _this.getPolicy(resolvable)[whenOrAsync]);
            };
        };
        // Trigger all the (matching) Resolvables in the path
        // Reduce all the "WAIT" Resolvables into an array
        var promises = this._path.reduce(function (acc, node) {
            var nodeResolvables = node.resolvables.filter(matchesPolicy(matchedWhens, 'when'));
            var nowait = nodeResolvables.filter(matchesPolicy(['NOWAIT'], 'async'));
            var wait = nodeResolvables.filter(hof_1.not(matchesPolicy(['NOWAIT'], 'async')));
            // For the matching Resolvables, start their async fetch process.
            var subContext = _this.subContext(node.state);
            var getResult = function (r) { return r.get(subContext, trans)
                .then(function (value) { return ({ token: r.token, value: value }); }); };
            nowait.forEach(getResult);
            return acc.concat(wait.map(getResult));
        }, []);
        // Wait for all the "WAIT" resolvables
        return coreservices_1.services.$q.all(promises);
    };
    ResolveContext.prototype.injector = function () {
        return this._injector || (this._injector = new UIInjectorImpl(this));
    };
    ResolveContext.prototype.findNode = function (resolvable) {
        return common_1.find(this._path, function (node) { return common_1.inArray(node.resolvables, resolvable); });
    };
    /**
     * Gets the async dependencies of a Resolvable
     *
     * Given a Resolvable, returns its dependencies as a Resolvable[]
     */
    ResolveContext.prototype.getDependencies = function (resolvable) {
        var _this = this;
        var node = this.findNode(resolvable);
        // Find which other resolvables are "visible" to the `resolvable` argument
        // subpath stopping at resolvable's node, or the whole path (if the resolvable isn't in the path)
        var subPath = pathFactory_1.PathUtils.subPath(this._path, function (x) { return x === node; }) || this._path;
        var availableResolvables = subPath
            .reduce(function (acc, _node) { return acc.concat(_node.resolvables); }, []) //all of subpath's resolvables
            .filter(function (res) { return res !== resolvable; }); // filter out the `resolvable` argument
        var getDependency = function (token) {
            var matching = availableResolvables.filter(function (r) { return r.token === token; });
            if (matching.length)
                return common_1.tail(matching);
            var fromInjector = _this.injector().getNative(token);
            if (common_2.isUndefined(fromInjector)) {
                throw new Error("Could not find Dependency Injection token: " + strings_1.stringify(token));
            }
            return new resolvable_1.Resolvable(token, function () { return fromInjector; }, [], fromInjector);
        };
        return resolvable.deps.map(getDependency);
    };
    return ResolveContext;
}());
exports.ResolveContext = ResolveContext;
var UIInjectorImpl = /** @class */ (function () {
    function UIInjectorImpl(context) {
        this.context = context;
        this.native = this.get(exports.NATIVE_INJECTOR_TOKEN) || coreservices_1.services.$injector;
    }
    UIInjectorImpl.prototype.get = function (token) {
        var resolvable = this.context.getResolvable(token);
        if (resolvable) {
            if (this.context.getPolicy(resolvable).async === 'NOWAIT') {
                return resolvable.get(this.context);
            }
            if (!resolvable.resolved) {
                throw new Error("Resolvable async .get() not complete:" + strings_1.stringify(resolvable.token));
            }
            return resolvable.data;
        }
        return this.getNative(token);
    };
    UIInjectorImpl.prototype.getAsync = function (token) {
        var resolvable = this.context.getResolvable(token);
        if (resolvable)
            return resolvable.get(this.context);
        return coreservices_1.services.$q.when(this.native.get(token));
    };
    UIInjectorImpl.prototype.getNative = function (token) {
        return this.native && this.native.get(token);
    };
    return UIInjectorImpl;
}());
//# sourceMappingURL=resolveContext.js.map

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @coreapi
 * @module transition
 */
/** for typedoc */
var trace_1 = __webpack_require__(37);
var coreservices_1 = __webpack_require__(14);
var strings_1 = __webpack_require__(28);
var common_1 = __webpack_require__(4);
var predicates_1 = __webpack_require__(7);
var hof_1 = __webpack_require__(9);
var interface_1 = __webpack_require__(53); // has or is using
var transitionHook_1 = __webpack_require__(60);
var hookRegistry_1 = __webpack_require__(97);
var hookBuilder_1 = __webpack_require__(144);
var pathFactory_1 = __webpack_require__(66);
var param_1 = __webpack_require__(51);
var resolvable_1 = __webpack_require__(58);
var resolveContext_1 = __webpack_require__(67);
/** @hidden */
var stateSelf = hof_1.prop("self");
/**
 * Represents a transition between two states.
 *
 * When navigating to a state, we are transitioning **from** the current state **to** the new state.
 *
 * This object contains all contextual information about the to/from states, parameters, resolves.
 * It has information about all states being entered and exited as a result of the transition.
 */
var Transition = /** @class */ (function () {
    /**
     * Creates a new Transition object.
     *
     * If the target state is not valid, an error is thrown.
     *
     * @internalapi
     *
     * @param fromPath The path of [[PathNode]]s from which the transition is leaving.  The last node in the `fromPath`
     *        encapsulates the "from state".
     * @param targetState The target state and parameters being transitioned to (also, the transition options)
     * @param router The [[UIRouter]] instance
     */
    function Transition(fromPath, targetState, router) {
        var _this = this;
        /** @hidden */
        this._deferred = coreservices_1.services.$q.defer();
        /**
         * This promise is resolved or rejected based on the outcome of the Transition.
         *
         * When the transition is successful, the promise is resolved
         * When the transition is unsuccessful, the promise is rejected with the [[Rejection]] or javascript error
         */
        this.promise = this._deferred.promise;
        /** @hidden Holds the hook registration functions such as those passed to Transition.onStart() */
        this._registeredHooks = {};
        /** @hidden */
        this._hookBuilder = new hookBuilder_1.HookBuilder(this);
        /** Checks if this transition is currently active/running. */
        this.isActive = function () {
            return _this.router.globals.transition === _this;
        };
        this.router = router;
        this._targetState = targetState;
        if (!targetState.valid()) {
            throw new Error(targetState.error());
        }
        // current() is assumed to come from targetState.options, but provide a naive implementation otherwise.
        this._options = common_1.extend({ current: hof_1.val(this) }, targetState.options());
        this.$id = router.transitionService._transitionCount++;
        var toPath = pathFactory_1.PathUtils.buildToPath(fromPath, targetState);
        this._treeChanges = pathFactory_1.PathUtils.treeChanges(fromPath, toPath, this._options.reloadState);
        this.createTransitionHookRegFns();
        var onCreateHooks = this._hookBuilder.buildHooksForPhase(interface_1.TransitionHookPhase.CREATE);
        transitionHook_1.TransitionHook.invokeHooks(onCreateHooks, function () { return null; });
        this.applyViewConfigs(router);
    }
    /** @hidden */
    Transition.prototype.onBefore = function (criteria, callback, options) { return; };
    /** @inheritdoc */
    Transition.prototype.onStart = function (criteria, callback, options) { return; };
    /** @inheritdoc */
    Transition.prototype.onExit = function (criteria, callback, options) { return; };
    /** @inheritdoc */
    Transition.prototype.onRetain = function (criteria, callback, options) { return; };
    /** @inheritdoc */
    Transition.prototype.onEnter = function (criteria, callback, options) { return; };
    /** @inheritdoc */
    Transition.prototype.onFinish = function (criteria, callback, options) { return; };
    /** @inheritdoc */
    Transition.prototype.onSuccess = function (criteria, callback, options) { return; };
    /** @inheritdoc */
    Transition.prototype.onError = function (criteria, callback, options) { return; };
    /** @hidden
     * Creates the transition-level hook registration functions
     * (which can then be used to register hooks)
     */
    Transition.prototype.createTransitionHookRegFns = function () {
        var _this = this;
        this.router.transitionService._pluginapi._getEvents()
            .filter(function (type) { return type.hookPhase !== interface_1.TransitionHookPhase.CREATE; })
            .forEach(function (type) { return hookRegistry_1.makeEvent(_this, _this.router.transitionService, type); });
    };
    /** @internalapi */
    Transition.prototype.getHooks = function (hookName) {
        return this._registeredHooks[hookName];
    };
    Transition.prototype.applyViewConfigs = function (router) {
        var enteringStates = this._treeChanges.entering.map(function (node) { return node.state; });
        pathFactory_1.PathUtils.applyViewConfigs(router.transitionService.$view, this._treeChanges.to, enteringStates);
    };
    /**
     * @internalapi
     *
     * @returns the internal from [State] object
     */
    Transition.prototype.$from = function () {
        return common_1.tail(this._treeChanges.from).state;
    };
    /**
     * @internalapi
     *
     * @returns the internal to [State] object
     */
    Transition.prototype.$to = function(){}