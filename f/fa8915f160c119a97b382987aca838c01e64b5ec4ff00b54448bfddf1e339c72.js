(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~main"],[
/* 0 */,
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H", function() { return SCHEDULE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return INVOKE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADD_EVENT_LISTENER_STR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return REMOVE_EVENT_LISTENER_STR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F", function() { return RESOURCE_INITIATOR_TYPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "G", function() { return REUSABILITY_THRESHOLD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return MAX_SPAN_DURATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return PAGE_LOAD; });
/* unused harmony export ROUTE_CHANGE */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return NAME_UNKNOWN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "P", function() { return TYPE_CUSTOM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "R", function() { return USER_TIMING_THRESHOLD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "M", function() { return TRANSACTION_START; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "L", function() { return TRANSACTION_END; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return CONFIG_CHANGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return XMLHTTPREQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return FETCH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return HISTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return EVENT_TARGET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return BEFORE_EVENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AFTER_EVENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return LOCAL_CONFIG_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return HTTP_REQUEST_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return LONG_TASK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return PAINT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return MEASURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return NAVIGATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return RESOURCE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return FIRST_CONTENTFUL_PAINT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return LARGEST_CONTENTFUL_PAINT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return KEYWORD_LIMIT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "J", function() { return TEMPORARY_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Q", function() { return USER_INTERACTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "N", function() { return TRANSACTION_TYPE_ORDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return ERRORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "K", function() { return TRANSACTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return CONFIG_SERVICE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return LOGGING_SERVICE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return APM_SERVER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "O", function() { return TRUNCATED_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return FIRST_INPUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return LAYOUT_SHIFT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return OUTCOME_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return OUTCOME_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I", function() { return SESSION_TIMEOUT; });
var SCHEDULE = 'schedule';
var INVOKE = 'invoke';
var ADD_EVENT_LISTENER_STR = 'addEventListener';
var REMOVE_EVENT_LISTENER_STR = 'removeEventListener';
var RESOURCE_INITIATOR_TYPES = ['link', 'css', 'script', 'img', 'xmlhttprequest', 'fetch', 'beacon', 'iframe'];
var REUSABILITY_THRESHOLD = 5000;
var MAX_SPAN_DURATION = 5 * 60 * 1000;
var PAGE_LOAD = 'page-load';
var ROUTE_CHANGE = 'route-change';
var TYPE_CUSTOM = 'custom';
var USER_INTERACTION = 'user-interaction';
var HTTP_REQUEST_TYPE = 'http-request';
var TEMPORARY_TYPE = 'temporary';
var NAME_UNKNOWN = 'Unknown';
var TRANSACTION_TYPE_ORDER = [PAGE_LOAD, ROUTE_CHANGE, USER_INTERACTION, HTTP_REQUEST_TYPE, TYPE_CUSTOM, TEMPORARY_TYPE];
var OUTCOME_SUCCESS = 'success';
var OUTCOME_FAILURE = 'failure';
var USER_TIMING_THRESHOLD = 60;
var TRANSACTION_START = 'transaction:start';
var TRANSACTION_END = 'transaction:end';
var CONFIG_CHANGE = 'config:change';
var XMLHTTPREQUEST = 'xmlhttprequest';
var FETCH = 'fetch';
var HISTORY = 'history';
var EVENT_TARGET = 'eventtarget';
var ERROR = 'error';
var BEFORE_EVENT = ':before';
var AFTER_EVENT = ':after';
var LOCAL_CONFIG_KEY = 'elastic_apm_config';
var LONG_TASK = 'longtask';
var PAINT = 'paint';
var MEASURE = 'measure';
var NAVIGATION = 'navigation';
var RESOURCE = 'resource';
var FIRST_CONTENTFUL_PAINT = 'first-contentful-paint';
var LARGEST_CONTENTFUL_PAINT = 'largest-contentful-paint';
var FIRST_INPUT = 'first-input';
var LAYOUT_SHIFT = 'layout-shift';
var ERRORS = 'errors';
var TRANSACTIONS = 'transactions';
var CONFIG_SERVICE = 'ConfigService';
var LOGGING_SERVICE = 'LoggingService';
var APM_SERVER = 'ApmServer';
var TRUNCATED_TYPE = '.truncated';
var KEYWORD_LIMIT = 1024;
var SESSION_TIMEOUT = 30 * 60000;


/***/ }),
/* 2 */,
/* 3 */,
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return extend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return merge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return isUndefined; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return noop; });
/* unused harmony export baseExtend */
/* unused harmony export bytesToHex */
/* unused harmony export isCORSSupported */
/* unused harmony export isObject */
/* unused harmony export isFunction */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return isPlatformSupported; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return isDtHeaderValid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return parseDtHeaderValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return getServerTimingInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return getDtHeaderValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return getTSHeaderValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getCurrentScript; });
/* unused harmony export getElasticScript */
/* unused harmony export getTimeOrigin */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return generateRandomId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return getEarliestSpan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return getLatestNonXHRSpan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getDuration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return getTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return now; });
/* unused harmony export rng */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return checkSameOrigin; });
/* unused harmony export scheduleMacroTask */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return scheduleMicroTask; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return setLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return setRequestHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return stripQueryStringFromUrl; });
/* unused harmony export find */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return removeInvalidChars; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PERF; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return isPerfTimelineSupported; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return isBrowser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return isPerfTypeSupported; });
/* harmony import */ var _polyfills__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19);

var slice = [].slice;
var isBrowser = typeof window !== 'undefined';
var PERF = isBrowser && typeof performance !== 'undefined' ? performance : {};

function isCORSSupported() {
  var xhr = new window.XMLHttpRequest();
  return 'withCredentials' in xhr;
}

var byteToHex = [];

for (var i = 0; i < 256; ++i) {
  byteToHex[i] = (i + 0x100).toString(16).substr(1);
}

function bytesToHex(buffer) {
  var hexOctets = [];

  for (var _i = 0; _i < buffer.length; _i++) {
    hexOctets.push(byteToHex[buffer[_i]]);
  }

  return hexOctets.join('');
}

var destination = new Uint8Array(16);

function rng() {
  if (typeof crypto != 'undefined' && typeof crypto.getRandomValues == 'function') {
    return crypto.getRandomValues(destination);
  } else if (typeof msCrypto != 'undefined' && typeof msCrypto.getRandomValues == 'function') {
    return msCrypto.getRandomValues(destination);
  }

  return destination;
}

function generateRandomId(length) {
  var id = bytesToHex(rng());
  return id.substr(0, length);
}

function getDtHeaderValue(span) {
  var dtVersion = '00';
  var dtUnSampledFlags = '00';
  var dtSampledFlags = '01';

  if (span && span.traceId && span.id && span.parentId) {
    var flags = span.sampled ? dtSampledFlags : dtUnSampledFlags;
    var id = span.sampled ? span.id : span.parentId;
    return dtVersion + '-' + span.traceId + '-' + id + '-' + flags;
  }
}

function parseDtHeaderValue(value) {
  var parsed = /^([\da-f]{2})-([\da-f]{32})-([\da-f]{16})-([\da-f]{2})$/.exec(value);

  if (parsed) {
    var flags = parsed[4];
    var sampled = flags !== '00';
    return {
      traceId: parsed[2],
      id: parsed[3],
      sampled: sampled
    };
  }
}

function isDtHeaderValid(header) {
  return /^[\da-f]{2}-[\da-f]{32}-[\da-f]{16}-[\da-f]{2}$/.test(header) && header.slice(3, 35) !== '00000000000000000000000000000000' && header.slice(36, 52) !== '0000000000000000';
}

function getTSHeaderValue(_ref) {
  var sampleRate = _ref.sampleRate;

  if (typeof sampleRate !== 'number' || String(sampleRate).length > 256) {
    return;
  }

  var NAMESPACE = 'es';
  var SEPARATOR = '=';
  return "" + NAMESPACE + SEPARATOR + "s:" + sampleRate;
}

function setRequestHeader(target, name, value) {
  if (typeof target.setRequestHeader === 'function') {
    target.setRequestHeader(name, value);
  } else if (target.headers && typeof target.headers.append === 'function') {
    target.headers.append(name, value);
  } else {
    target[name] = value;
  }
}

function checkSameOrigin(source, target) {
  var isSame = false;

  if (typeof target === 'string') {
    isSame = source === target;
  } else if (target && typeof target.test === 'function') {
    isSame = target.test(source);
  } else if (Array.isArray(target)) {
    target.forEach(function (t) {
      if (!isSame) {
        isSame = checkSameOrigin(source, t);
      }
    });
  }

  return isSame;
}

function isPlatformSupported() {
  return isBrowser && typeof Set === 'function' && typeof JSON.stringify === 'function' && PERF && typeof PERF.now === 'function' && isCORSSupported();
}

function setLabel(key, value, obj) {
  if (!obj || !key) return;
  var skey = removeInvalidChars(key);
  var valueType = typeof value;

  if (value != undefined && valueType !== 'boolean' && valueType !== 'number') {
    value = String(value);
  }

  obj[skey] = value;
  return obj;
}

function getServerTimingInfo(serverTimingEntries) {
  if (serverTimingEntries === void 0) {
    serverTimingEntries = [];
  }

  var serverTimingInfo = [];
  var entrySeparator = ', ';
  var valueSeparator = ';';

  for (var _i2 = 0; _i2 < serverTimingEntries.length; _i2++) {
    var _serverTimingEntries$ = serverTimingEntries[_i2],
        name = _serverTimingEntries$.name,
        duration = _serverTimingEntries$.duration,
        description = _serverTimingEntries$.description;
    var timingValue = name;

    if (description) {
      timingValue += valueSeparator + 'desc=' + description;
    }

    if (duration) {
      timingValue += valueSeparator + 'dur=' + duration;
    }

    serverTimingInfo.push(timingValue);
  }

  return serverTimingInfo.join(entrySeparator);
}

function getTimeOrigin() {
  return PERF.timing.fetchStart;
}

function stripQueryStringFromUrl(url) {
  return url && url.split('?')[0];
}

function isObject(value) {
  return value !== null && typeof value === 'object';
}

function isFunction(value) {
  return typeof value === 'function';
}

function baseExtend(dst, objs, deep) {
  for (var i = 0, ii = objs.length; i < ii; ++i) {
    var obj = objs[i];
    if (!isObject(obj) && !isFunction(obj)) continue;
    var keys = Object.keys(obj);

    for (var j = 0, jj = keys.length; j < jj; j++) {
      var key = keys[j];
      var src = obj[key];

      if (deep && isObject(src)) {
        if (!isObject(dst[key])) dst[key] = Array.isArray(src) ? [] : {};
        baseExtend(dst[key], [src], false);
      } else {
        dst[key] = src;
      }
    }
  }

  return dst;
}

function getElasticScript() {
  if (typeof document !== 'undefined') {
    var scripts = document.getElementsByTagName('script');

    for (var i = 0, l = scripts.length; i < l; i++) {
      var sc = scripts[i];

      if (sc.src.indexOf('elastic') > 0) {
        return sc;
      }
    }
  }
}

function getCurrentScript() {
  if (typeof document !== 'undefined') {
    var currentScript = document.currentScript;

    if (!currentScript) {
      return getElasticScript();
    }

    return currentScript;
  }
}

function extend(dst) {
  return baseExtend(dst, slice.call(arguments, 1), false);
}

function merge(dst) {
  return baseExtend(dst, slice.call(arguments, 1), true);
}

function isUndefined(obj) {
  return typeof obj === 'undefined';
}

function noop() {}

function find(array, predicate, thisArg) {
  if (array == null) {
    throw new TypeError('array is null or not defined');
  }

  var o = Object(array);
  var len = o.length >>> 0;

  if (typeof predicate !== 'function') {
    throw new TypeError('predicate must be a function');
  }

  var k = 0;

  while (k < len) {
    var kValue = o[k];

    if (predicate.call(thisArg, kValue, k, o)) {
      return kValue;
    }

    k++;
  }

  return undefined;
}

function removeInvalidChars(key) {
  return key.replace(/[.*"]/g, '_');
}

function getLatestNonXHRSpan(spans) {
  var latestSpan = null;

  for (var _i3 = 0; _i3 < spans.length; _i3++) {
    var span = spans[_i3];

    if (String(span.type).indexOf('external') === -1 && (!latestSpan || latestSpan._end < span._end)) {
      latestSpan = span;
    }
  }

  return latestSpan;
}

function getEarliestSpan(spans) {
  var earliestSpan = spans[0];

  for (var _i4 = 1; _i4 < spans.length; _i4++) {
    var span = spans[_i4];

    if (earliestSpan._start > span._start) {
      earliestSpan = span;
    }
  }

  return earliestSpan;
}

function now() {
  return PERF.now();
}

function getTime(time) {
  return typeof time === 'number' && time >= 0 ? time : now();
}

function getDuration(start, end) {
  if (isUndefined(end) || isUndefined(start)) {
    return null;
  }

  return parseInt(end - start);
}

function scheduleMacroTask(callback) {
  setTimeout(callback, 0);
}

function scheduleMicroTask(callback) {
  _polyfills__WEBPACK_IMPORTED_MODULE_0__[/* Promise */ "a"].resolve().then(callback);
}

function isPerfTimelineSupported() {
  return typeof PERF.getEntriesByType === 'function';
}

function isPerfTypeSupported(type) {
  return typeof PerformanceObserver !== 'undefined' && PerformanceObserver.supportedEntryTypes && PerformanceObserver.supportedEntryTypes.indexOf(type) >= 0;
}



/***/ }),
/* 5 */,
/* 6 */,
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __DEV__; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return state; });
var __DEV__ = "production" !== 'production';

var state = {
  bootstrapTime: null,
  lastHiddenStart: Number.MIN_SAFE_INTEGER
};


/***/ }),
/* 8 */,
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),
/* 10 */,
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Consumer = exports.Provider = exports.provideContext = exports.default = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(3));

var _react = _interopRequireWildcard(__webpack_require__(0));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const RenderContext = /*#__PURE__*/(0, _react.createContext)({});
var _default = RenderContext;
exports.default = _default;

const provideContext = WrappedComponent => {
  const ComponentName = WrappedComponent.displayName || WrappedComponent.name || 'WrappedComponent';

  class WithContext extends _react.PureComponent {
    constructor(props) {
      super(props);
    }

    render() {
      return /*#__PURE__*/_react.default.createElement(RenderContext.Consumer, null, context => {
        const props = {};

        if (this.props.includeState) {
          this.props.includeState.map(({
            path,
            propKey
          }) => {
            if (path === 'breakpoint') {
              props.breakpoint = this.props.breakpoint;
            } else if (propKey) {
              props[propKey] = context.store.getStateValue(path);
            } else {
              Object.assign(props, context.store.getStateValue(path));
            }
          });
        }

        WrappedComponent.contextType = RenderContext;
        return /*#__PURE__*/_react.default.createElement(WrappedComponent, _extends({}, props, this.props));
      });
    }

  }

  WithContext.propTypes = {
    includeState: _propTypes.default.array,
    breakpoint: _propTypes.default.string
  };
  WithContext.contextType = RenderContext;
  WithContext.displayName = `${ComponentName}Container`;
  return WithContext;
};

exports.provideContext = provideContext;
const Provider = RenderContext.Provider;
exports.Provider = Provider;
const Consumer = RenderContext.Consumer;
exports.Consumer = Consumer;

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return globalState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return apmSymbol; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return patchMethod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return XHR_IGNORE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return XHR_SYNC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return XHR_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return XHR_METHOD; });
var globalState = {
  fetchInProgress: false
};
function apmSymbol(name) {
  return '__apm_symbol__' + name;
}

function isPropertyWritable(propertyDesc) {
  if (!propertyDesc) {
    return true;
  }

  if (propertyDesc.writable === false) {
    return false;
  }

  return !(typeof propertyDesc.get === 'function' && typeof propertyDesc.set === 'undefined');
}

function attachOriginToPatched(patched, original) {
  patched[apmSymbol('OriginalDelegate')] = original;
}

function patchMethod(target, name, patchFn) {
  var proto = target;

  while (proto && !proto.hasOwnProperty(name)) {
    proto = Object.getPrototypeOf(proto);
  }

  if (!proto && target[name]) {
    proto = target;
  }

  var delegateName = apmSymbol(name);
  var delegate;

  if (proto && !(delegate = proto[delegateName])) {
    delegate = proto[delegateName] = proto[name];
    var desc = proto && Object.getOwnPropertyDescriptor(proto, name);

    if (isPropertyWritable(desc)) {
      var patchDelegate = patchFn(delegate, delegateName, name);

      proto[name] = function () {
        return patchDelegate(this, arguments);
      };

      attachOriginToPatched(proto[name], delegate);
    }
  }

  return delegate;
}
var XHR_IGNORE = apmSymbol('xhrIgnore');
var XHR_SYNC = apmSymbol('xhrSync');
var XHR_URL = apmSymbol('xhrURL');
var XHR_METHOD = apmSymbol('xhrMethod');

/***/ }),
/* 13 */
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
/* 14 */,
/* 15 */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),
/* 16 */,
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports.currency = __webpack_require__(93);
module.exports.date = __webpack_require__(52);
module.exports.emailProducts = __webpack_require__(98);
module.exports.enums = __webpack_require__(53);
module.exports.promotions = __webpack_require__(109);
module.exports.string = __webpack_require__(45);
module.exports.tld = __webpack_require__(113);
module.exports.util = __webpack_require__(114);
module.exports.validation = __webpack_require__(115);

/***/ }),
/* 18 */,
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Promise; });
/* harmony import */ var promise_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);


var local = {};

if (_utils__WEBPACK_IMPORTED_MODULE_1__[/* isBrowser */ "m"]) {
  local = window;
} else if (typeof self !== 'undefined') {
  local = self;
}

var Promise = 'Promise' in local ? local.Promise : promise_polyfill__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"];


/***/ }),
/* 20 */,
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var __DEV__ = "production" !== 'production';

var warning = function() {};

if (__DEV__) {
  var printWarning = function printWarning(format, args) {
    var len = arguments.length;
    args = new Array(len > 1 ? len - 1 : 0);
    for (var key = 1; key < len; key++) {
      args[key - 1] = arguments[key];
    }
    var argIndex = 0;
    var message = 'Warning: ' +
      format.replace(/%s/g, function() {
        return args[argIndex++];
      });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  }

  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
          '`warning(condition, format, ...args)` requires a warning ' +
          'message argument'
      );
    }
    if (!condition) {
      printWarning.apply(null, [format].concat(args));
    }
  };
}

module.exports = warning;


/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ patchAll; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ patchEventHandler; });

// EXTERNAL MODULE: ./node_modules/@elastic/apm-rum-core/dist/es/common/patching/patch-utils.js
var patch_utils = __webpack_require__(12);

// EXTERNAL MODULE: ./node_modules/@elastic/apm-rum-core/dist/es/common/constants.js
var constants = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/@elastic/apm-rum-core/dist/es/common/patching/xhr-patch.js


function patchXMLHttpRequest(callback) {
  var XMLHttpRequestPrototype = XMLHttpRequest.prototype;

  if (!XMLHttpRequestPrototype || !XMLHttpRequestPrototype[constants["a" /* ADD_EVENT_LISTENER_STR */]]) {
    return;
  }

  var READY_STATE_CHANGE = 'readystatechange';
  var LOAD = 'load';
  var ERROR = 'error';
  var TIMEOUT = 'timeout';
  var ABORT = 'abort';

  function invokeTask(task, status) {
    if (task.state !== constants["o" /* INVOKE */]) {
      task.state = constants["o" /* INVOKE */];
      task.data.status = status;
      callback(constants["o" /* INVOKE */], task);
    }
  }

  function scheduleTask(task) {
    if (task.state === constants["H" /* SCHEDULE */]) {
      return;
    }

    task.state = constants["H" /* SCHEDULE */];
    callback(constants["H" /* SCHEDULE */], task);
    var target = task.data.target;

    function addListener(name) {
      target[constants["a" /* ADD_EVENT_LISTENER_STR */]](name, function (_ref) {
        var type = _ref.type;

        if (type === READY_STATE_CHANGE) {
          if (target.readyState === 4 && target.status !== 0) {
            invokeTask(task, 'success');
          }
        } else {
          var status = type === LOAD ? 'success' : type;
          invokeTask(task, status);
        }
      });
    }

    addListener(READY_STATE_CHANGE);
    addListener(LOAD);
    addListener(TIMEOUT);
    addListener(ERROR);
    addListener(ABORT);
  }

  var openNative = Object(patch_utils["g" /* patchMethod */])(XMLHttpRequestPrototype, 'open', function () {
    return function (self, args) {
      if (!self[patch_utils["a" /* XHR_IGNORE */]]) {
        self[patch_utils["b" /* XHR_METHOD */]] = args[0];
        self[patch_utils["d" /* XHR_URL */]] = args[1];
        self[patch_utils["c" /* XHR_SYNC */]] = args[2] === false;
      }

      return openNative.apply(self, args);
    };
  });
  var sendNative = Object(patch_utils["g" /* patchMethod */])(XMLHttpRequestPrototype, 'send', function () {
    return function (self, args) {
      if (self[patch_utils["a" /* XHR_IGNORE */]]) {
        return sendNative.apply(self, args);
      }

      var task = {
        source: constants["S" /* XMLHTTPREQUEST */],
        state: '',
        type: 'macroTask',
        data: {
          target: self,
          method: self[patch_utils["b" /* XHR_METHOD */]],
          sync: self[patch_utils["c" /* XHR_SYNC */]],
          url: self[patch_utils["d" /* XHR_URL */]],
          status: ''
        }
      };

      try {
        scheduleTask(task);
        return sendNative.apply(self, args);
      } catch (e) {
        invokeTask(task, ERROR);
        throw e;
      }
    };
  });
}
// EXTERNAL MODULE: ./node_modules/@elastic/apm-rum-core/dist/es/common/polyfills.js
var polyfills = __webpack_require__(19);

// EXTERNAL MODULE: ./node_modules/@elastic/apm-rum-core/dist/es/common/utils.js
var utils = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/@elastic/apm-rum-core/dist/es/common/patching/fetch-patch.js




function patchFetch(callback) {
  if (!window.fetch || !window.Request) {
    return;
  }

  function scheduleTask(task) {
    task.state = constants["H" /* SCHEDULE */];
    callback(constants["H" /* SCHEDULE */], task);
  }

  function invokeTask(task) {
    task.state = constants["o" /* INVOKE */];
    callback(constants["o" /* INVOKE */], task);
  }

  var nativeFetch = window.fetch;

  window.fetch = function (input, init) {
    var fetchSelf = this;
    var args = arguments;
    var request, url;

    if (typeof input === 'string') {
      request = new Request(input, init);
      url = input;
    } else if (input) {
      request = input;
      url = request.url;
    } else {
      return nativeFetch.apply(fetchSelf, args);
    }

    var task = {
      source: constants["j" /* FETCH */],
      state: '',
      type: 'macroTask',
      data: {
        target: request,
        method: request.method,
        url: url,
        aborted: false
      }
    };
    return new polyfills["a" /* Promise */](function (resolve, reject) {
      patch_utils["f" /* globalState */].fetchInProgress = true;
      scheduleTask(task);
      var promise;

      try {
        promise = nativeFetch.apply(fetchSelf, [request]);
      } catch (error) {
        reject(error);
        task.data.error = error;
        invokeTask(task);
        patch_utils["f" /* globalState */].fetchInProgress = false;
        return;
      }

      promise.then(function (response) {
        resolve(response);
        Object(utils["x" /* scheduleMicroTask */])(function () {
          task.data.response = response;
          invokeTask(task);
        });
      }, function (error) {
        reject(error);
        Object(utils["x" /* scheduleMicroTask */])(function () {
          task.data.error = error;
          invokeTask(task);
        });
      });
      patch_utils["f" /* globalState */].fetchInProgress = false;
    });
  };
}
// CONCATENATED MODULE: ./node_modules/@elastic/apm-rum-core/dist/es/common/patching/history-patch.js

function patchHistory(callback) {
  if (!window.history) {
    return;
  }

  var nativePushState = history.pushState;

  if (typeof nativePushState === 'function') {
    history.pushState = function (state, title, url) {
      var task = {
        source: constants["m" /* HISTORY */],
        data: {
          state: state,
          title: title,
          url: url
        }
      };
      callback(constants["o" /* INVOKE */], task);
      nativePushState.apply(this, arguments);
    };
  }
}
// CONCATENATED MODULE: ./node_modules/@elastic/apm-rum-core/dist/es/common/patching/event-target-patch.js


var eventTypes = ['click'];
var eventTypeSymbols = {};

for (var i = 0; i < eventTypes.length; i++) {
  var et = eventTypes[i];
  eventTypeSymbols[et] = Object(patch_utils["e" /* apmSymbol */])(et);
}

function shouldInstrumentEvent(target, eventType, listenerFn) {
  return target instanceof Element && eventTypes.indexOf(eventType) >= 0 && typeof listenerFn === 'function';
}

function patchEventTarget(callback) {
  if (!window.EventTarget) {
    return;
  }

  var proto = window.EventTarget.prototype;
  var nativeAddEventListener = proto[constants["a" /* ADD_EVENT_LISTENER_STR */]];
  var nativeRemoveEventListener = proto[constants["D" /* REMOVE_EVENT_LISTENER_STR */]];

  function findTaskIndex(existingTasks, eventType, listenerFn, capture) {
    for (var _i = 0; _i < existingTasks.length; _i++) {
      var task = existingTasks[_i];

      if (task.eventType === eventType && task.listenerFn === listenerFn && task.capture === capture) {
        return _i;
      }
    }

    return -1;
  }

  function isCapture(options) {
    var capture;

    if (typeof options === 'boolean') {
      capture = options;
    } else {
      capture = options ? !!options.capture : false;
    }

    return capture;
  }

  function createListenerWrapper(target, eventType, listenerFn, options) {
    var eventSymbol = eventTypeSymbols[eventType];
    if (!eventSymbol) return listenerFn;
    var existingTasks = target[eventSymbol];
    var capture = isCapture(options);

    if (existingTasks) {
      var taskIndex = findTaskIndex(existingTasks, eventType, listenerFn, capture);

      if (taskIndex !== -1) {
        var _task = existingTasks[taskIndex];
        return _task.wrappingFn;
      }
    } else {
      existingTasks = target[eventSymbol] = [];
    }

    var task = {
      source: constants["i" /* EVENT_TARGET */],
      target: target,
      eventType: eventType,
      listenerFn: listenerFn,
      capture: capture,
      wrappingFn: wrappingFn
    };
    existingTasks.push(task);

    function wrappingFn() {
      callback(constants["H" /* SCHEDULE */], task);
      var result;

      try {
        result = listenerFn.apply(this, arguments);
      } finally {
        callback(constants["o" /* INVOKE */], task);
      }

      return result;
    }

    return wrappingFn;
  }

  function getWrappingFn(target, eventType, listenerFn, options) {
    var eventSymbol = eventTypeSymbols[eventType];
    var existingTasks = target[eventSymbol];

    if (existingTasks) {
      var capture = isCapture(options);
      var taskIndex = findTaskIndex(existingTasks, eventType, listenerFn, capture);

      if (taskIndex !== -1) {
        var task = existingTasks[taskIndex];
        existingTasks.splice(taskIndex, 1);

        if (existingTasks.length === 0) {
          target[eventSymbol] = undefined;
        }

        return task.wrappingFn;
      }
    }

    return listenerFn;
  }

  proto[constants["a" /* ADD_EVENT_LISTENER_STR */]] = function (eventType, listenerFn, optionsOrCapture) {
    var target = this;

    if (!shouldInstrumentEvent(target, eventType, listenerFn)) {
      return nativeAddEventListener.apply(target, arguments);
    }

    var wrappingListenerFn = createListenerWrapper(target, eventType, listenerFn, optionsOrCapture);
    var args = Array.prototype.slice.call(arguments);
    args[1] = wrappingListenerFn;
    return nativeAddEventListener.apply(target, args);
  };

  proto[constants["D" /* REMOVE_EVENT_LISTENER_STR */]] = function (eventType, listenerFn, optionsOrCapture) {
    var target = this;

    if (!shouldInstrumentEvent(target, eventType, listenerFn)) {
      return nativeRemoveEventListener.apply(target, arguments);
    }

    var wrappingFn = getWrappingFn(target, eventType, listenerFn, optionsOrCapture);
    var args = Array.prototype.slice.call(arguments);
    args[1] = wrappingFn;
    return nativeRemoveEventListener.apply(target, args);
  };
}
// EXTERNAL MODULE: ./node_modules/@elastic/apm-rum-core/dist/es/common/event-handler.js
var event_handler = __webpack_require__(43);

// CONCATENATED MODULE: ./node_modules/@elastic/apm-rum-core/dist/es/common/patching/index.js






var patchEventHandler = new event_handler["a" /* default */]();
var alreadyPatched = false;

function patchAll() {
  if (!alreadyPatched) {
    alreadyPatched = true;
    patchXMLHttpRequest(function (event, task) {
      patchEventHandler.send(constants["S" /* XMLHTTPREQUEST */], [event, task]);
    });
    patchFetch(function (event, task) {
      patchEventHandler.send(constants["j" /* FETCH */], [event, task]);
    });
    patchHistory(function (event, task) {
      patchEventHandler.send(constants["m" /* HISTORY */], [event, task]);
    });
    patchEventTarget(function (event, task) {
      patchEventHandler.send(constants["i" /* EVENT_TARGET */], [event, task]);
    });
  }

  return patchEventHandler;
}



/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(15);

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Breakpoints", {
  enumerable: true,
  get: function () {
    return _breakpointsHoc.default;
  }
});
Object.defineProperty(exports, "ClickOutside", {
  enumerable: true,
  get: function () {
    return _useClickOutsideHoc.default;
  }
});
Object.defineProperty(exports, "breakpoints", {
  enumerable: true,
  get: function () {
    return _breakpoints.default;
  }
});
Object.defineProperty(exports, "classNames", {
  enumerable: true,
  get: function () {
    return _classNames.default;
  }
});
Object.defineProperty(exports, "id", {
  enumerable: true,
  get: function () {
    return _id.default;
  }
});
Object.defineProperty(exports, "isBrowser", {
  enumerable: true,
  get: function () {
    return _isBrowser.default;
  }
});
Object.defineProperty(exports, "isMobile", {
  enumerable: true,
  get: function () {
    return _isMobile.default;
  }
});
Object.defineProperty(exports, "offset", {
  enumerable: true,
  get: function () {
    return _offset.default;
  }
});
Object.defineProperty(exports, "offsetRelative", {
  enumerable: true,
  get: function () {
    return _offsetRelative.default;
  }
});
Object.defineProperty(exports, "scrollIntoViewIfNeeded", {
  enumerable: true,
  get: function () {
    return _scrollIntoView.default;
  }
});
Object.defineProperty(exports, "useBreakpoints", {
  enumerable: true,
  get: function () {
    return _useBreakpoints.default;
  }
});
Object.defineProperty(exports, "useEventListener", {
  enumerable: true,
  get: function () {
    return _useEventListener.default;
  }
});
Object.defineProperty(exports, "useOnClickOutside", {
  enumerable: true,
  get: function () {
    return _useClickOutside.default;
  }
});

var _breakpoints = _interopRequireDefault(__webpack_require__(56));

var _classNames = _interopRequireDefault(__webpack_require__(119));

var _id = _interopRequireDefault(__webpack_require__(120));

var _isBrowser = _interopRequireDefault(__webpack_require__(57));

var _isMobile = _interopRequireDefault(__webpack_require__(122));

var _offset = _interopRequireDefault(__webpack_require__(123));

var _offsetRelative = _interopRequireDefault(__webpack_require__(125));

var _scrollIntoView = _interopRequireDefault(__webpack_require__(126));

var _useBreakpoints = _interopRequireDefault(__webpack_require__(58));

var _useClickOutside = _interopRequireDefault(__webpack_require__(59));

var _useEventListener = _interopRequireDefault(__webpack_require__(131));

var _breakpointsHoc = _interopRequireDefault(__webpack_require__(132));

var _useClickOutsideHoc = _interopRequireDefault(__webpack_require__(133));

/***/ }),
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.getInstancePathKey = exports.convertToAddonQtyInstancePath = exports.convertToQuantityInstancePath = exports.getUpdatedMergedStateObjects = void 0;

const getUpdatedMergedStateObjects = (_old, _new) => {
  return Object.keys(_new).reduce((acc, cur) => {
    var a = _old[cur];
    var b = _new[cur];

    if (a && typeof a === 'object') {
      acc[cur] = Object.assign({}, a, b);
    } else {
      acc[cur] = b;
    }

    return acc;
  }, {});
};

exports.getUpdatedMergedStateObjects = getUpdatedMergedStateObjects;

const convertToQuantityInstancePath = path => {
  return path.replace(/\.[^.]+$/, '.quantity');
};

exports.convertToQuantityInstancePath = convertToQuantityInstancePath;

const convertToAddonQtyInstancePath = path => {
  return path.replace(/(?:\.[^.]+){2}$/, '.pkgQty.quantity');
};

exports.convertToAddonQtyInstancePath = convertToAddonQtyInstancePath;

const getInstancePathKey = (key, propertytype = '') => {
  /*
    Key should be constant if the iteration is the same, to allow reselecting
    focus and avoid unnecessary rerendering.
     Keys built using instancePath allow this except when changing plans.
    Without this function an example of keys changing from plan tier3 to tier1
     keys with tier3 selected:
     - teir3.get-started.options.tier1
     - teir3.get-started.options.tier2
     - teir3.get-started.options.tier3 (selected)
    keys with tier1 selected:
     - teir1.get-started.options.tier1 (selected)
     - teir1.get-started.options.tier2
     - teir1.get-started.options.tier3
     With this function:
     - get-started.options.tier1
     - get-started.options.tier2
     - get-started.options.tier3
  */
  if (propertytype === 'swap') {
    return `${key.split('.').slice(1).join('.')}`;
  }

  return key;
};
/* eslint-disable */

/* polyfill from  https://developer.mozilla.org  */

/* istanbul ignore next */


exports.getInstancePathKey = getInstancePathKey;
Object.values = Object.values ? Object.values : o => Object.keys(o).map(k => o[k]);
/* istanbul ignore next */

if (!String.prototype.includes) {
  String.prototype.includes = function (search, start) {
    'use strict';

    if (typeof start !== 'number') {
      start = 0;
    }

    if (start + search.length > this.length) {
      return false;
    }

    return this.indexOf(search, start) !== -1;
  };
}
/* istanbul ignore next */


if (!Array.prototype.includes) {
  Object.defineProperty(Array.prototype, 'includes', {
    value: function (valueToFind, fromIndex) {
      if (this == null) {
        throw new TypeError('"this" is null or not defined');
      } // 1. Let O be ? ToObject(this value).


      var o = Object(this); // 2. Let len be ? ToLength(? Get(O, "length")).

      var len = o.length >>> 0; // 3. If len is 0, return false.

      if (len === 0) {
        return false;
      } // 4. Let n be ? ToInteger(fromIndex).
      //    (If fromIndex is undefined, this step produces the value 0.)


      var n = fromIndex | 0; // 5. If n ≥ 0, then
      //  a. Let k be n.
      // 6. Else n < 0,
      //  a. Let k be len + n.
      //  b. If k < 0, let k be 0.

      var k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);

      function sameValueZero(x, y) {
        return x === y || typeof x === 'number' && typeof y === 'number' && isNaN(x) && isNaN(y);
      } // 7. Repeat, while k < len


      while (k < len) {
        // a. Let elementK be the result of ? Get(O, ! ToString(k)).
        // b. If SameValueZero(valueToFind, elementK) is true, return true.
        if (sameValueZero(o[k], valueToFind)) {
          return true;
        } // c. Increase k by 1.


        k++;
      } // 8. Return false


      return false;
    }
  });
}
/* istanbul ignore next */


if (typeof Object.assign !== 'function') {
  // Must be writable: true, enumerable: false, configurable: true
  Object.defineProperty(Object, 'assign', {
    value: function assign(target, varArgs) {
      // .length of function is 2
      'use strict';

      if (target == null) {
        // TypeError if undefined or null
        throw new TypeError('Cannot convert undefined or null to object');
      }

      var to = Object(target);

      for (var index = 1; index < arguments.length; index++) {
        var nextSource = arguments[index];

        if (nextSource != null) {
          // Skip over if undefined or null
          for (var nextKey in nextSource) {
            // Avoid bugs when hasOwnProperty is shadowed
            if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
              to[nextKey] = nextSource[nextKey];
            }
          }
        }
      }

      return to;
    },
    writable: true,
    configurable: true
  });
}
/* eslint-enable */


var _default = {
  getUpdatedMergedStateObjects,
  convertToQuantityInstancePath,
  getInstancePathKey,
  convertToAddonQtyInstancePath
};
exports.default = _default;

/***/ }),
/* 29 */,
/* 30 */,
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Formik; });
/* unused harmony export yupToFormErrors */
/* unused harmony export validateYupSchema */
/* unused harmony export Field */
/* unused harmony export Form */
/* unused harmony export withFormik */
/* unused harmony export move */
/* unused harmony export swap */
/* unused harmony export insert */
/* unused harmony export FieldArray */
/* unused harmony export getIn */
/* unused harmony export setIn */
/* unused harmony export setNestedObjectValues */
/* unused harmony export isReactNative */
/* unused harmony export isFunction */
/* unused harmony export isObject */
/* unused harmony export isInteger */
/* unused harmony export isEmptyChildren */
/* unused harmony export isPromise */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = Object.setPrototypeOf ||
    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
    function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
}

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};





function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

var emptyFunction_1 = emptyFunction;

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

if (false) {}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

var invariant_1 = invariant;

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = emptyFunction_1;

if (false) { var printWarning; }

var warning_1 = warning;

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/

/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

var index = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

var ReactPropTypesSecret_1 = ReactPropTypesSecret;

if (false) { var loggedTypeFailures, ReactPropTypesSecret$2, warning$1, invariant$2; }

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (false) { var stack, error, typeSpecName; }
}

var checkPropTypes_1 = checkPropTypes;

var factoryWithTypeCheckers = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (false) { var manualPropTypeWarningCount, manualPropTypeCallCache; }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret_1) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          invariant_1(
            false,
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
        } else if (false) { var cacheKey; }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunction_1.thatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret_1);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
       false ? undefined : void 0;
      return emptyFunction_1.thatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues);
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (propValue.hasOwnProperty(key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       false ? undefined : void 0;
      return emptyFunction_1.thatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        warning_1(
          false,
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received %s at index %s.',
          getPostfixForTypeWarning(checker),
          i
        );
        return emptyFunction_1.thatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret_1) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = index({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes_1;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

var factoryWithThrowingShims = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret_1) {
      // It is still safe when called from React.
      return;
    }
    invariant_1(
      false,
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
  }
  shim.isRequired = shim;
  function getShim() {
    return shim;
  }
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction_1;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

var index$2 = createCommonjsModule(function (module) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) { var throwOnDirectAccess, isValidElement, REACT_ELEMENT_TYPE; } else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = factoryWithThrowingShims();
}
});

var index_1 = index$2.object;
var index_2 = index$2.oneOfType;
var index_3 = index$2.string;
var index_4 = index$2.node;
var index_5 = index$2.func;
var index_6 = index$2.bool;
var index_7 = index$2.element;

var index$4 = createCommonjsModule(function (module, exports) {
/**
 * Lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright JS Foundation and other contributors <https://js.foundation/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    asyncTag = '[object AsyncFunction]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    nullTag = '[object Null]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    proxyTag = '[object Proxy]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    undefinedTag = '[object Undefined]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

/** Used for built-in method references. */
var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    Symbol = root.Symbol,
    Uint8Array = root.Uint8Array,
    propertyIsEnumerable = objectProto.propertyIsEnumerable,
    splice = arrayProto.splice,
    symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols,
    nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
    nativeKeys = overArg(Object.keys, Object);

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView'),
    Map = getNative(root, 'Map'),
    Promise = getNative(root, 'Promise'),
    Set = getNative(root, 'Set'),
    WeakMap = getNative(root, 'WeakMap'),
    nativeCreate = getNative(Object, 'create');

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
  this.size = 0;
}

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = objIsArr ? arrayTag : getTag(object),
      othTag = othIsArr ? arrayTag : getTag(other);

  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;

  var objIsObj = objTag == objectTag,
      othIsObj = othTag == objectTag,
      isSameTag = objTag == othTag;

  if (isSameTag && isBuffer(object)) {
    if (!isBuffer(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack);
    return (objIsArr || isTypedArray(object))
      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new Stack);
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack);
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(array);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var index = -1,
      result = true,
      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!arraySome(other, function(othValue, othIndex) {
            if (!cacheHas(seen, othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, bitmask, customizer, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if ((object.byteLength != other.byteLength) ||
          (object.byteOffset != other.byteOffset)) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag:
      if ((object.byteLength != other.byteLength) ||
          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }
      return true;

    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '');

    case mapTag:
      var convert = mapToArray;

    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
      convert || (convert = setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      objProps = getAllKeys(object),
      objLength = objProps.length,
      othProps = getAllKeys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(object);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

/**
 * Performs a deep comparison between two values to determine if they are
 * equivalent.
 *
 * **Note:** This method supports comparing arrays, array buffers, booleans,
 * date objects, error objects, maps, numbers, `Object` objects, regexes,
 * sets, strings, symbols, and typed arrays. `Object` objects are compared
 * by their own, not inherited, enumerable properties. Functions and DOM
 * nodes are compared by strict equality, i.e. `===`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.isEqual(object, other);
 * // => true
 *
 * object === other;
 * // => false
 */
function isEqual(value, other) {
  return baseIsEqual(value, other);
}

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = isEqual;
});

/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var __DEV__ = "production" !== 'production';

var warning$2 = function() {};

if (__DEV__) {
  warning$2 = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
        '`warning(condition, format, ...args)` requires a warning ' +
        'message argument'
      );
    }

    if (format.length < 10 || (/^[s\W]*$/).test(format)) {
      throw new Error(
        'The warning format should be able to uniquely identify this ' +
        'warning. Please, use a more descriptive format than: ' + format
      );
    }

    if (!condition) {
      var argIndex = 0;
      var message = 'Warning: ' +
        format.replace(/%s/g, function() {
          return args[argIndex++];
        });
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch(x) {}
    }
  };
}

var warning_1$2 = warning$2;

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** `Object#toString` result references. */
var funcTag = '[object Function]';
var genTag = '[object GeneratorFunction]';
var symbolTag = '[object Symbol]';

/** Used to match property names within property paths. */
var reLeadingDot = /^\./;
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array ? array.length : 0,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}

/** Used for built-in method references. */
var arrayProto = Array.prototype;
var funcProto = Function.prototype;
var objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty$1 = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty$1).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var Symbol$1 = root.Symbol;
var splice = arrayProto.splice;

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');
var nativeCreate = getNative(Object, 'create');

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol$1 ? Symbol$1.prototype : undefined;
var symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  return this.has(key) && delete this.__data__[key];
}

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty$1.call(data, key) ? data[key] : undefined;
}

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty$1.call(data, key);
}

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
}

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  return getMapData(this, key)['delete'](key);
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  getMapData(this, key).set(key, value);
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoize(function(string) {
  string = toString(string);

  var result = [];
  if (reLeadingDot.test(string)) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, string) {
    result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result);
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Assign cache to `_.memoize`.
memoize.Cache = MapCache;

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

/**
 * Converts `value` to a property path array.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Util
 * @param {*} value The value to convert.
 * @returns {Array} Returns the new property path array.
 * @example
 *
 * _.toPath('a.b.c');
 * // => ['a', 'b', 'c']
 *
 * _.toPath('a[0].b.c');
 * // => ['a', '0', 'b', 'c']
 */
function toPath(value) {
  if (isArray(value)) {
    return arrayMap(value, toKey);
  }
  return isSymbol(value) ? [value] : copyArray(stringToPath(value));
}

var index$5 = toPath;

var index$6 = createCommonjsModule(function (module, exports) {
/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to match `RegExp` flags from their coerced string values. */
var reFlags = /\w*$/;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/** Used to identify `toStringTag` values supported by `_.clone`. */
var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] =
cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
cloneableTags[boolTag] = cloneableTags[dateTag] =
cloneableTags[float32Tag] = cloneableTags[float64Tag] =
cloneableTags[int8Tag] = cloneableTags[int16Tag] =
cloneableTags[int32Tag] = cloneableTags[mapTag] =
cloneableTags[numberTag] = cloneableTags[objectTag] =
cloneableTags[regexpTag] = cloneableTags[setTag] =
cloneableTags[stringTag] = cloneableTags[symbolTag] =
cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] =
cloneableTags[weakMapTag] = false;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/**
 * Adds the key-value `pair` to `map`.
 *
 * @private
 * @param {Object} map The map to modify.
 * @param {Array} pair The key-value pair to add.
 * @returns {Object} Returns `map`.
 */
function addMapEntry(map, pair) {
  // Don't return `map.set` because it's not chainable in IE 11.
  map.set(pair[0], pair[1]);
  return map;
}

/**
 * Adds `value` to `set`.
 *
 * @private
 * @param {Object} set The set to modify.
 * @param {*} value The value to add.
 * @returns {Object} Returns `set`.
 */
function addSetEntry(set, value) {
  // Don't return `set.add` because it's not chainable in IE 11.
  set.add(value);
  return set;
}

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array ? array.length : 0;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

/**
 * A specialized version of `_.reduce` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @param {boolean} [initAccum] Specify using the first element of `array` as
 *  the initial value.
 * @returns {*} Returns the accumulated value.
 */
function arrayReduce(array, iteratee, accumulator, initAccum) {
  var index = -1,
      length = array ? array.length : 0;

  if (initAccum && length) {
    accumulator = array[++index];
  }
  while (++index < length) {
    accumulator = iteratee(accumulator, array[index], index, array);
  }
  return accumulator;
}

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

/** Used for built-in method references. */
var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    Symbol = root.Symbol,
    Uint8Array = root.Uint8Array,
    getPrototype = overArg(Object.getPrototypeOf, Object),
    objectCreate = Object.create,
    propertyIsEnumerable = objectProto.propertyIsEnumerable,
    splice = arrayProto.splice;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols,
    nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
    nativeKeys = overArg(Object.keys, Object);

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView'),
    Map = getNative(root, 'Map'),
    Promise = getNative(root, 'Promise'),
    Set = getNative(root, 'Set'),
    WeakMap = getNative(root, 'WeakMap'),
    nativeCreate = getNative(Object, 'create');

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  return this.has(key) && delete this.__data__[key];
}

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
}

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  return getMapData(this, key)['delete'](key);
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  getMapData(this, key).set(key, value);
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  this.__data__ = new ListCache(entries);
}

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
}

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  return this.__data__['delete'](key);
}

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var cache = this.__data__;
  if (cache instanceof ListCache) {
    var pairs = cache.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      return this;
    }
    cache = this.__data__ = new MapCache(pairs);
  }
  cache.set(key, value);
  return this;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  // Safari 9 makes `arguments.length` enumerable in strict mode.
  var result = (isArray(value) || isArguments(value))
    ? baseTimes(value.length, String)
    : [];

  var length = result.length,
      skipIndexes = !!length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (key == 'length' || isIndex(key, length)))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    object[key] = value;
  }
}

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssign(object, source) {
  return object && copyObject(source, keys(source), object);
}

/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @param {boolean} [isFull] Specify a clone including symbols.
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */
function baseClone(value, isDeep, isFull, customizer, key, object, stack) {
  var result;
  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }
  if (result !== undefined) {
    return result;
  }
  if (!isObject(value)) {
    return value;
  }
  var isArr = isArray(value);
  if (isArr) {
    result = initCloneArray(value);
    if (!isDeep) {
      return copyArray(value, result);
    }
  } else {
    var tag = getTag(value),
        isFunc = tag == funcTag || tag == genTag;

    if (isBuffer(value)) {
      return cloneBuffer(value, isDeep);
    }
    if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
      if (isHostObject(value)) {
        return object ? value : {};
      }
      result = initCloneObject(isFunc ? {} : value);
      if (!isDeep) {
        return copySymbols(value, baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = initCloneByTag(value, tag, baseClone, isDeep);
    }
  }
  // Check for circular references and return its corresponding clone.
  stack || (stack = new Stack);
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);

  if (!isArr) {
    var props = isFull ? getAllKeys(value) : keys(value);
  }
  arrayEach(props || value, function(subValue, key) {
    if (props) {
      key = subValue;
      subValue = value[key];
    }
    // Recursively populate clone (susceptible to call stack limits).
    assignValue(result, key, baseClone(subValue, isDeep, isFull, customizer, key, value, stack));
  });
  return result;
}

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} prototype The object to inherit from.
 * @returns {Object} Returns the new object.
 */
function baseCreate(proto) {
  return isObject(proto) ? objectCreate(proto) : {};
}

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

/**
 * The base implementation of `getTag`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  return objectToString.call(value);
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var result = new buffer.constructor(buffer.length);
  buffer.copy(result);
  return result;
}

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}

/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned data view.
 */
function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}

/**
 * Creates a clone of `map`.
 *
 * @private
 * @param {Object} map The map to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned map.
 */
function cloneMap(map, isDeep, cloneFunc) {
  var array = isDeep ? cloneFunc(mapToArray(map), true) : mapToArray(map);
  return arrayReduce(array, addMapEntry, new map.constructor);
}

/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */
function cloneRegExp(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}

/**
 * Creates a clone of `set`.
 *
 * @private
 * @param {Object} set The set to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned set.
 */
function cloneSet(set, isDeep, cloneFunc) {
  var array = isDeep ? cloneFunc(setToArray(set), true) : setToArray(set);
  return arrayReduce(array, addSetEntry, new set.constructor);
}

/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */
function cloneSymbol(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}

/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    assignValue(object, key, newValue === undefined ? source[key] : newValue);
  }
  return object;
}

/**
 * Copies own symbol properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbols(source, object) {
  return copyObject(source, getSymbols(source), object);
}

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * Creates an array of the own enumerable symbol properties of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = nativeGetSymbols ? overArg(nativeGetSymbols, Object) : stubArray;

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11,
// for data views in Edge < 14, and promises in Node.js.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = objectToString.call(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : undefined;

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */
function initCloneArray(array) {
  var length = array.length,
      result = array.constructor(length);

  // Add properties assigned by `RegExp#exec`.
  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return (typeof object.constructor == 'function' && !isPrototype(object))
    ? baseCreate(getPrototype(object))
    : {};
}

/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The `toStringTag` of the object to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneByTag(object, tag, cloneFunc, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag:
      return cloneArrayBuffer(object);

    case boolTag:
    case dateTag:
      return new Ctor(+object);

    case dataViewTag:
      return cloneDataView(object, isDeep);

    case float32Tag: case float64Tag:
    case int8Tag: case int16Tag: case int32Tag:
    case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
      return cloneTypedArray(object, isDeep);

    case mapTag:
      return cloneMap(object, isDeep, cloneFunc);

    case numberTag:
    case stringTag:
      return new Ctor(object);

    case regexpTag:
      return cloneRegExp(object);

    case setTag:
      return cloneSet(object, isDeep, cloneFunc);

    case symbolTag:
      return cloneSymbol(object);
  }
}

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * This method is like `_.clone` except that it recursively clones `value`.
 *
 * @static
 * @memberOf _
 * @since 1.0.0
 * @category Lang
 * @param {*} value The value to recursively clone.
 * @returns {*} Returns the deep cloned value.
 * @see _.clone
 * @example
 *
 * var objects = [{ 'a': 1 }, { 'b': 2 }];
 *
 * var deep = _.cloneDeep(objects);
 * console.log(deep[0] === objects[0]);
 * // => false
 */
function cloneDeep(value) {
  return baseClone(value, true, true);
}

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
function isArguments(value) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = cloneDeep;
});

function getIn(obj, key, def, p) {
    if (p === void 0) { p = 0; }
    var path = index$5(key);
    while (obj && p < path.length) {
        obj = obj[path[p++]];
    }
    return obj === undefined ? def : obj;
}
function setIn(obj, path, value) {
    var res = {};
    var resVal = res;
    var i = 0;
    var pathArray = index$5(path);
    for (; i < pathArray.length - 1; i++) {
        var currentPath = pathArray[i];
        var currentObj = obj[currentPath];
        if (resVal[currentPath]) {
            resVal = resVal[currentPath];
        }
        else if (currentObj) {
            resVal = resVal[currentPath] = index$6(currentObj);
        }
        else {
            var nextPath = pathArray[i + 1];
            resVal = resVal[currentPath] =
                isInteger(nextPath) && Number(nextPath) >= 0 ? [] : {};
        }
    }
    resVal[pathArray[i]] = value;
    return __assign({}, obj, res);
}
function setNestedObjectValues(object, value, visited, response) {
    if (visited === void 0) { visited = new WeakMap(); }
    if (response === void 0) { response = {}; }
    for (var _i = 0, _a = Object.keys(object); _i < _a.length; _i++) {
        var k = _a[_i];
        var val = object[k];
        if (isObject$1(val)) {
            if (!visited.get(val)) {
                visited.set(val, true);
                response[k] = Array.isArray(val) ? [] : {};
                setNestedObjectValues(val, value, visited, response[k]);
            }
        }
        else {
            response[k] = value;
        }
    }
    return response;
}
var isReactNative = typeof window !== 'undefined' &&
    window.navigator &&
    window.navigator.product &&
    window.navigator.product === 'ReactNative';
var isFunction$1 = function (obj) { return 'function' === typeof obj; };
var isObject$1 = function (obj) { return obj !== null && typeof obj === 'object'; };
var isInteger = function (obj) { return String(Math.floor(Number(obj))) === obj; };
var isEmptyChildren = function (children) {
    return react__WEBPACK_IMPORTED_MODULE_0__["Children"].count(children) === 0;
};
function isPromise(value) {
    if (value !== null && typeof value === 'object') {
        return value && typeof value.then === 'function';
    }
    return false;
}

var Field = (function (_super) {
    __extends(Field, _super);
    function Field() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleChange = function (e) {
            var _a = _this.context.formik, handleChange = _a.handleChange, validateOnChange = _a.validateOnChange;
            handleChange(e);
            if (!!validateOnChange && !!_this.props.validate) {
                _this.runFieldValidations(e.target.value);
            }
        };
        _this.handleBlur = function (e) {
            var _a = _this.context.formik, handleBlur = _a.handleBlur, validateOnBlur = _a.validateOnBlur;
            handleBlur(e);
            if (validateOnBlur && _this.props.validate) {
                _this.runFieldValidations(e.target.value);
            }
        };
        _this.runFieldValidations = function (value) {
            var setFieldError = _this.context.formik.setFieldError;
            var _a = _this.props, name = _a.name, validate = _a.validate;
            var maybePromise = validate(value);
            if (isPromise(maybePromise)) {
                maybePromise.then(function () { return setFieldError(name, undefined); }, function (error) { return setFieldError(name, error); });
            }
            else {
                setFieldError(name, maybePromise);
            }
        };
        return _this;
    }
    Field.prototype.componentWillMount = function () {
        var _a = this.props, render = _a.render, children = _a.children, component = _a.component;
        warning_1$2(!(component && render), 'You should not use <Field component> and <Field render> in the same <Field> component; <Field component> will be ignored');
        warning_1$2(!(this.props.component && children && isFunction$1(children)), 'You should not use <Field component> and <Field children> as a function in the same <Field> component; <Field component> will be ignored.');
        warning_1$2(!(render && children && !isEmptyChildren(children)), 'You should not use <Field render> and <Field children> in the same <Field> component; <Field children> will be ignored');
    };
    Field.prototype.render = function () {
        var _a = this.props, validate = _a.validate, name = _a.name, render = _a.render, children = _a.children, _b = _a.component, component = _b === void 0 ? 'input' : _b, props = __rest(_a, ["validate", "name", "render", "children", "component"]);
        var formik = this.context.formik;
        var field = {
            value: props.type === 'radio' || props.type === 'checkbox'
                ? props.value
                : getIn(formik.values, name),
            name: name,
            onChange: validate ? this.handleChange : formik.handleChange,
            onBlur: validate ? this.handleBlur : formik.handleBlur,
        };
        var bag = { field: field, form: formik };
        if (render) {
            return render(bag);
        }
        if (isFunction$1(children)) {
            return children(bag);
        }
        if (typeof component === 'string') {
            return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(component, __assign({}, field, props, { children: children }));
        }
        return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(component, __assign({}, bag, props, { children: children }));
    };
    Field.contextTypes = {
        formik: index_1,
    };
    Field.propTypes = {
        name: index_3.isRequired,
        component: index_2([index_3, index_5]),
        render: index_5,
        children: index_2([index_5, index_4]),
        validate: index_5,
    };
    return Field;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));

var Form = function (props, context) { return (Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("form", __assign({ onSubmit: context.formik.handleSubmit }, props))); };
Form.contextTypes = {
    formik: index_1,
};

var REACT_STATICS = {
    childContextTypes: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    mixins: true,
    propTypes: true,
    type: true,
};
var KNOWN_STATICS = {
    name: true,
    length: true,
    prototype: true,
    caller: true,
    callee: true,
    arguments: true,
    arity: true,
};
var getOwnPropertySymbols$1 = Object.getOwnPropertySymbols;
var propIsEnumerable$1 = Object.prototype.propertyIsEnumerable;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = getPrototypeOf && getPrototypeOf(Object);
var getOwnPropertyNames = Object.getOwnPropertyNames;
function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
    if (typeof sourceComponent !== 'string') {
        if (objectPrototype) {
            var inheritedComponent = getPrototypeOf(sourceComponent);
            if (inheritedComponent && inheritedComponent !== objectPrototype) {
                hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
            }
        }
        var keys = getOwnPropertyNames(sourceComponent);
        if (getOwnPropertySymbols$1) {
            keys = keys.concat(getOwnPropertySymbols$1(sourceComponent));
        }
        for (var i = 0; i < keys.length; ++i) {
            var key = keys[i];
            if (!REACT_STATICS[key] &&
                !KNOWN_STATICS[key] &&
                (!blacklist || !blacklist[key])) {
                if (propIsEnumerable$1.call(sourceComponent, key) ||
                    typeof sourceComponent[key] === 'function') {
                    try {
                        targetComponent[key] = sourceComponent[key];
                    }
                    catch (e) { }
                }
            }
        }
        return targetComponent;
    }
    return targetComponent;
}

function withFormik(_a) {
    var _b = _a.mapPropsToValues, mapPropsToValues = _b === void 0 ? function (vanillaProps) {
        var val = {};
        for (var k in vanillaProps) {
            if (vanillaProps.hasOwnProperty(k) &&
                typeof vanillaProps[k] !== 'function') {
                val[k] = vanillaProps[k];
            }
        }
        return val;
    } : _b, config = __rest(_a, ["mapPropsToValues"]);
    return function createFormik(Component$$1) {
        var C = (function (_super) {
            __extends(C, _super);
            function C() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.validate = function (values) {
                    return config.validate(values, _this.props);
                };
                _this.validationSchema = function () {
                    return isFunction$1(config.validationSchema)
                        ? config.validationSchema(_this.props)
                        : config.validationSchema;
                };
                _this.handleSubmit = function (values, actions) {
                    return config.handleSubmit(values, __assign({}, actions, { props: _this.props }));
                };
                _this.renderFormComponent = function (formikProps) {
                    return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Component$$1, __assign({}, _this.props, formikProps));
                };
                return _this;
            }
            C.prototype.render = function () {
                return (Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Formik, __assign({}, this.props, config, { validate: config.validate && this.validate, validationSchema: config.validationSchema && this.validationSchema, initialValues: mapPropsToValues(this.props), onSubmit: this.handleSubmit, render: this.renderFormComponent })));
            };
            return C;
        }(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
        return hoistNonReactStatics(C, Component$$1);
    };
}

var move = function (array, from, to) {
    var copy = (array || []).slice();
    var value = copy[from];
    copy.splice(from, 1);
    copy.splice(to, 0, value);
    return copy;
};
var swap = function (array, indexA, indexB) {
    var copy = (array || []).slice();
    var a = copy[indexA];
    copy[indexA] = copy[indexB];
    copy[indexB] = a;
    return copy;
};
var insert = function (array, index, value) {
    var copy = (array || []).slice();
    copy.splice(index, 0, value);
    return copy;
};
var FieldArray = (function (_super) {
    __extends(FieldArray, _super);
    function FieldArray(props) {
        var _this = _super.call(this, props) || this;
        _this.updateArrayField = function (fn, alterTouched, alterErrors) {
            var _a = _this.context.formik, setFormikState = _a.setFormikState, validateForm = _a.validateForm, values = _a.values, touched = _a.touched, errors = _a.errors;
            var _b = _this.props, name = _b.name, validateOnChange = _b.validateOnChange;
            setFormikState(function (prevState) { return (__assign({}, prevState, { values: setIn(prevState.values, name, fn(getIn(values, name))), errors: alterErrors
                    ? setIn(prevState.errors, name, fn(getIn(errors, name)))
                    : prevState.errors, touched: alterTouched
                    ? setIn(prevState.touched, name, fn(getIn(touched, name)))
                    : prevState.touched })); }, function () {
                if (validateOnChange) {
                    validateForm();
                }
            });
        };
        _this.push = function (value) {
            return _this.updateArrayField(function (array) { return (array || []).concat([value]); }, false, false);
        };
        _this.swap = function (indexA, indexB) {
            return _this.updateArrayField(function (array) { return swap(array, indexA, indexB); }, false, false);
        };
        _this.move = function (from, to) {
            return _this.updateArrayField(function (array) { return move(array, from, to); }, false, false);
        };
        _this.insert = function (index, value) {
            return _this.updateArrayField(function (array) { return insert(array, index, value); }, false, false);
        };
        _this.unshift = function (value) {
            var arr = [];
            _this.updateArrayField(function (array) {
                arr = array ? [value].concat(array) : [value];
                return arr;
            }, false, false);
            return arr.length;
        };
        _this.remove = _this.remove.bind(_this);
        _this.pop = _this.pop.bind(_this);
        return _this;
    }
    FieldArray.prototype.remove = function (index) {
        var result;
        this.updateArrayField(function (array) {
            var copy = array ? array.slice() : [];
            if (!result) {
                result = copy[index];
            }
            if (isFunction$1(copy.splice)) {
                copy.splice(index, 1);
            }
            return copy;
        }, true, true);
        return result;
    };
    FieldArray.prototype.pop = function () {
        var result;
        this.updateArrayField(function (array) {
            var tmp = array;
            if (!result) {
                result = tmp && tmp.pop && tmp.pop();
            }
            return tmp;
        }, true, true);
        return result;
    };
    FieldArray.prototype.render = function () {
        var arrayHelpers = {
            push: this.push,
            pop: this.pop,
            swap: this.swap,
            move: this.move,
            insert: this.insert,
            unshift: this.unshift,
            remove: this.remove,
        };
        var _a = this.props, component = _a.component, render = _a.render, children = _a.children, name = _a.name;
        var props = __assign({}, arrayHelpers, { form: this.context.formik, name: name });
        return component
            ? Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(component, props)
            : render
                ? render(props)
                : children
                    ? typeof children === 'function'
                        ? children(props)
                        : !isEmptyChildren(children) ? react__WEBPACK_IMPORTED_MODULE_0__["Children"].only(children) : null
                    : null;
    };
    FieldArray.defaultProps = {
        validateOnChange: true,
    };
    FieldArray.contextTypes = {
        formik: index_1,
    };
    return FieldArray;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));

var Formik = (function (_super) {
    __extends(Formik, _super);
    function Formik(props) {
        var _this = _super.call(this, props) || this;
        _this.setErrors = function (errors) {
            _this.setState({ errors: errors });
        };
        _this.setTouched = function (touched) {
            _this.setState({ touched: touched }, function () {
                if (_this.props.validateOnBlur) {
                    _this.runValidations(_this.state.values);
                }
            });
        };
        _this.setValues = function (values) {
            _this.setState({ values: values }, function () {
                if (_this.props.validateOnChange) {
                    _this.runValidations(values);
                }
            });
        };
        _this.setStatus = function (status) {
            _this.setState({ status: status });
        };
        _this.setError = function (error) {
            if (false) {}
            _this.setState({ error: error });
        };
        _this.setSubmitting = function (isSubmitting) {
            _this.setState({ isSubmitting: isSubmitting });
        };
        _this.runValidationSchema = function (values, onSuccess) {
            var validationSchema = _this.props.validationSchema;
            var schema = isFunction$1(validationSchema)
                ? validationSchema()
                : validationSchema;
            validateYupSchema(values, schema).then(function () {
                _this.setState({ errors: {} });
                if (onSuccess) {
                    onSuccess();
                }
            }, function (err) {
                return _this.setState({ errors: yupToFormErrors(err), isSubmitting: false });
            });
        };
        _this.runValidations = function (values) {
            if (values === void 0) { values = _this.state.values; }
            if (_this.props.validationSchema) {
                _this.runValidationSchema(values);
            }
            if (_this.props.validate) {
                var maybePromisedErrors = _this.props.validate(values);
                if (isPromise(maybePromisedErrors)) {
                    maybePromisedErrors.then(function () {
                        _this.setState({ errors: {} });
                    }, function (errors) { return _this.setState({ errors: errors, isSubmitting: false }); });
                }
                else {
                    _this.setErrors(maybePromisedErrors);
                }
            }
        };
        _this.handleChange = function (e) {
            if (isReactNative) {
                if (false) {}
                return;
            }
            e.persist();
            var _a = e.target, type = _a.type, name = _a.name, id = _a.id, value = _a.value, checked = _a.checked, outerHTML = _a.outerHTML;
            var field = name ? name : id;
            var parsed;
            var val = /number|range/.test(type)
                ? (parsed = parseFloat(value), Number.isNaN(parsed) ? '' : parsed)
                : /checkbox/.test(type) ? checked : value;
            if (!field && "production" !== 'production') {
                warnAboutMissingIdentifier({
                    htmlContent: outerHTML,
                    documentationAnchorLink: 'handlechange-e-reactchangeeventany--void',
                    handlerName: 'handleChange',
                });
            }
            _this.setState(function (prevState) { return (__assign({}, prevState, { values: setIn(prevState.values, field, val) })); });
            if (_this.props.validateOnChange) {
                _this.runValidations(setIn(_this.state.values, field, val));
            }
        };
        _this.setFieldValue = function (field, value, shouldValidate) {
            if (shouldValidate === void 0) { shouldValidate = true; }
            _this.setState(function (prevState) { return (__assign({}, prevState, { values: setIn(prevState.values, field, value) })); }, function () {
                if (_this.props.validateOnChange && shouldValidate) {
                    _this.runValidations(_this.state.values);
                }
            });
        };
        _this.handleSubmit = function (e) {
            e.preventDefault();
            _this.submitForm();
        };
        _this.submitForm = function () {
            _this.setState({
                touched: setNestedObjectValues(_this.state.values, true),
                isSubmitting: true,
            });
            if (_this.props.validate) {
                var maybePromisedErrors = _this.props.validate(_this.state.values) || {};
                if (isPromise(maybePromisedErrors)) {
                    maybePromisedErrors.then(function () {
                        _this.setState({ errors: {} });
                        _this.executeSubmit();
                    }, function (errors) { return _this.setState({ errors: errors, isSubmitting: false }); });
                    return;
                }
                else {
                    var isValid = Object.keys(maybePromisedErrors).length === 0;
                    _this.setState({
                        errors: maybePromisedErrors,
                        isSubmitting: isValid,
                    });
                    if (isValid) {
                        _this.executeSubmit();
                    }
                }
            }
            else if (_this.props.validationSchema) {
                _this.runValidationSchema(_this.state.values, _this.executeSubmit);
            }
            else {
                _this.executeSubmit();
            }
        };
        _this.executeSubmit = function () {
            _this.props.onSubmit(_this.state.values, _this.getFormikActions());
        };
        _this.handleBlur = function (e) {
            if (isReactNative) {
                if (false) {}
                return;
            }
            e.persist();
            var _a = e.target, name = _a.name, id = _a.id, outerHTML = _a.outerHTML;
            var field = name ? name : id;
            if (!field && "production" !== 'production') {
                warnAboutMissingIdentifier({
                    htmlContent: outerHTML,
                    documentationAnchorLink: 'handleblur-e-any--void',
                    handlerName: 'handleBlur',
                });
            }
            _this.setState(function (prevState) { return ({
                touched: setIn(prevState.touched, field, true),
            }); });
            if (_this.props.validateOnBlur) {
                _this.runValidations(_this.state.values);
            }
        };
        _this.setFieldTouched = function (field, touched, shouldValidate) {
            if (touched === void 0) { touched = true; }
            if (shouldValidate === void 0) { shouldValidate = true; }
            _this.setState(function (prevState) { return (__assign({}, prevState, { touched: setIn(prevState.touched, field, touched) })); }, function () {
                if (_this.props.validateOnBlur && shouldValidate) {
                    _this.runValidations(_this.state.values);
                }
            });
        };
        _this.setFieldError = function (field, message) {
            _this.setState(function (prevState) { return (__assign({}, prevState, { errors: setIn(prevState.errors, field, message) })); });
        };
        _this.resetForm = function (nextValues) {
            var values = nextValues ? nextValues : _this.props.initialValues;
            _this.initialValues = values;
            _this.setState({
                isSubmitting: false,
                errors: {},
                touched: {},
                error: undefined,
                status: undefined,
                values: values,
            });
        };
        _this.handleReset = function () {
            if (_this.props.onReset) {
                var maybePromisedOnReset = _this.props.onReset(_this.state.values, _this.getFormikActions());
                if (isPromise(maybePromisedOnReset)) {
                    maybePromisedOnReset.then(_this.resetForm);
                }
                else {
                    _this.resetForm();
                }
            }
            else {
                _this.resetForm();
            }
        };
        _this.setFormikState = function (s, callback) {
            return _this.setState(s, callback);
        };
        _this.getFormikActions = function () {
            return {
                resetForm: _this.resetForm,
                submitForm: _this.submitForm,
                validateForm: _this.runValidations,
                setError: _this.setError,
                setErrors: _this.setErrors,
                setFieldError: _this.setFieldError,
                setFieldTouched: _this.setFieldTouched,
                setFieldValue: _this.setFieldValue,
                setStatus: _this.setStatus,
                setSubmitting: _this.setSubmitting,
                setTouched: _this.setTouched,
                setValues: _this.setValues,
                setFormikState: _this.setFormikState,
            };
        };
        _this.getFormikComputedProps = function () {
            var isInitialValid = _this.props.isInitialValid;
            var dirty = !index$4(_this.initialValues, _this.state.values);
            return {
                dirty: dirty,
                isValid: dirty
                    ? _this.state.errors && Object.keys(_this.state.errors).length === 0
                    : isInitialValid !== false && isFunction$1(isInitialValid)
                        ? isInitialValid(_this.props)
                        : isInitialValid,
                initialValues: _this.initialValues,
            };
        };
        _this.getFormikBag = function () {
            return __assign({}, _this.state, _this.getFormikActions(), _this.getFormikComputedProps(), { handleBlur: _this.handleBlur, handleChange: _this.handleChange, handleReset: _this.handleReset, handleSubmit: _this.handleSubmit, validateOnChange: _this.props.validateOnChange, validateOnBlur: _this.props.validateOnBlur });
        };
        _this.state = {
            values: props.initialValues || {},
            errors: {},
            touched: {},
            isSubmitting: false,
        };
        _this.initialValues = props.initialValues || {};
        return _this;
    }
    Formik.prototype.getChildContext = function () {
        return {
            formik: this.getFormikBag(),
        };
    };
    Formik.prototype.componentWillReceiveProps = function (nextProps) {
        if (this.props.enableReinitialize &&
            !index$4(nextProps.initialValues, this.props.initialValues)) {
            this.initialValues = nextProps.initialValues;
            this.resetForm(nextProps.initialValues);
        }
    };
    Formik.prototype.componentWillMount = function () {
        warning_1$2(!(this.props.component && this.props.render), 'You should not use <Formik component> and <Formik render> in the same <Formik> component; <Formik render> will be ignored');
        warning_1$2(!(this.props.component &&
            this.props.children &&
            !isEmptyChildren(this.props.children)), 'You should not use <Formik component> and <Formik children> in the same <Formik> component; <Formik children> will be ignored');
        warning_1$2(!(this.props.render &&
            this.props.children &&
            !isEmptyChildren(this.props.children)), 'You should not use <Formik render> and <Formik children> in the same <Formik> component; <Formik children> will be ignored');
    };
    Formik.prototype.render = function () {
        var _a = this.props, component = _a.component, render = _a.render, children = _a.children;
        var props = this.getFormikBag();
        return component
            ? Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(component, props)
            : render
                ? render(props)
                : children
                    ? typeof children === 'function'
                        ? children(props)
                        : !isEmptyChildren(children) ? react__WEBPACK_IMPORTED_MODULE_0__["Children"].only(children) : null
                    : null;
    };
    Formik.defaultProps = {
        validateOnChange: true,
        validateOnBlur: true,
        isInitialValid: false,
        enableReinitialize: false,
    };
    Formik.propTypes = {
        validateOnChange: index_6,
        validateOnBlur: index_6,
        isInitialValid: index_2([index_5, index_6]),
        initialValues: index_1,
        onReset: index_5,
        onSubmit: index_5.isRequired,
        validationSchema: index_2([index_5, index_1]),
        validate: index_5,
        component: index_5,
        render: index_5,
        children: index_2([index_5, index_4]),
        enableReinitialize: index_6,
    };
    Formik.childContextTypes = {
        formik: index_1,
    };
    return Formik;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
function warnAboutMissingIdentifier(_a) {
    var htmlContent = _a.htmlContent, documentationAnchorLink = _a.documentationAnchorLink, handlerName = _a.handlerName;
    console.error("Warning: `" + handlerName + "` has triggered and you forgot to pass an `id` or `name` attribute to your input:\n\n    " + htmlContent + "\n\n    Formik cannot determine which value to update. For more info see https://github.com/jaredpalmer/formik#" + documentationAnchorLink + "\n  ");
}
function yupToFormErrors(yupError) {
    var errors = {};
    for (var _i = 0, _a = yupError.inner; _i < _a.length; _i++) {
        var err = _a[_i];
        if (!errors[err.path]) {
            errors = setIn(errors, err.path, err.message);
        }
    }
    return errors;
}
function validateYupSchema(data, schema, context) {
    if (context === void 0) { context = {}; }
    var validateData = {};
    for (var k in data) {
        if (data.hasOwnProperty(k)) {
            var key = String(k);
            validateData[key] =
                data[key] !== '' ? data[key] : undefined;
        }
    }
    return schema.validate(validateData, { abortEarly: false, context: context });
}


//# sourceMappingURL=formik.es6.js.map

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(13)))

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (false) {}

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;


/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ es_init; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ es_apmBase; });

// UNUSED EXPORTS: apmBase, ApmBase

// EXTERNAL MODULE: ./node_modules/@elastic/apm-rum-core/dist/es/common/utils.js
var utils = __webpack_require__(4);

// EXTERNAL MODULE: ./node_modules/@elastic/apm-rum-core/dist/es/bootstrap.js
var bootstrap = __webpack_require__(72);

// EXTERNAL MODULE: ./node_modules/@elastic/apm-rum-core/dist/es/index.js + 23 modules
var es = __webpack_require__(40);

// EXTERNAL MODULE: ./node_modules/@elastic/apm-rum-core/dist/es/common/constants.js
var constants = __webpack_require__(1);

// EXTERNAL MODULE: ./node_modules/@elastic/apm-rum-core/dist/es/common/instrument.js
var instrument = __webpack_require__(71);

// CONCATENATED MODULE: ./node_modules/@elastic/apm-rum/dist/es/apm-base.js


var apm_base_ApmBase = function () {
  function ApmBase(serviceFactory, disable) {
    this._disable = disable;
    this.serviceFactory = serviceFactory;
    this._initialized = false;
  }

  var _proto = ApmBase.prototype;

  _proto.isEnabled = function isEnabled() {
    return !this._disable;
  };

  _proto.isActive = function isActive() {
    var configService = this.serviceFactory.getService(constants["f" /* CONFIG_SERVICE */]);
    return this.isEnabled() && this._initialized && configService.get('active');
  };

  _proto.init = function init(config) {
    var _this = this;

    if (this.isEnabled() && !this._initialized) {
      this._initialized = true;

      var _this$serviceFactory$ = this.serviceFactory.getService([constants["f" /* CONFIG_SERVICE */], constants["t" /* LOGGING_SERVICE */]]),
          configService = _this$serviceFactory$[0],
          loggingService = _this$serviceFactory$[1];

      configService.setVersion('5.8.0');
      this.config(config);
      var logLevel = configService.get('logLevel');
      loggingService.setLevel(logLevel);
      var isConfigActive = configService.get('active');

      if (isConfigActive) {
        this.serviceFactory.init();
        var flags = Object(instrument["a" /* getInstrumentationFlags */])(configService.get('instrument'), configService.get('disableInstrumentations'));
        var performanceMonitoring = this.serviceFactory.getService('PerformanceMonitoring');
        performanceMonitoring.init(flags);

        if (flags[constants["g" /* ERROR */]]) {
          var errorLogging = this.serviceFactory.getService('ErrorLogging');
          errorLogging.registerListeners();
        }

        if (configService.get('session')) {
          var localConfig = configService.getLocalConfig();

          if (localConfig && localConfig.session) {
            configService.setConfig({
              session: localConfig.session
            });
          }
        }

        var sendPageLoad = function sendPageLoad() {
          return flags[constants["B" /* PAGE_LOAD */]] && _this._sendPageLoadMetrics();
        };

        if (configService.get('centralConfig')) {
          this.fetchCentralConfig().then(sendPageLoad);
        } else {
          sendPageLoad();
        }
      } else {
        this._disable = true;
        loggingService.warn('RUM agent is inactive');
      }
    }

    return this;
  };

  _proto.fetchCentralConfig = function fetchCentralConfig() {
    var _this$serviceFactory$2 = this.serviceFactory.getService([constants["c" /* APM_SERVER */], constants["t" /* LOGGING_SERVICE */], constants["f" /* CONFIG_SERVICE */]]),
        apmServer = _this$serviceFactory$2[0],
        loggingService = _this$serviceFactory$2[1],
        configService = _this$serviceFactory$2[2];

    return apmServer.fetchConfig(configService.get('serviceName'), configService.get('environment')).then(function (config) {
      var transactionSampleRate = config['transaction_sample_rate'];

      if (transactionSampleRate) {
        transactionSampleRate = Number(transactionSampleRate);
        var _config2 = {
          transactionSampleRate: transactionSampleRate
        };

        var _configService$valida = configService.validate(_config2),
            invalid = _configService$valida.invalid;

        if (invalid.length === 0) {
          configService.setConfig(_config2);
        } else {
          var _invalid$ = invalid[0],
              key = _invalid$.key,
              value = _invalid$.value,
              allowed = _invalid$.allowed;
          loggingService.warn("invalid value \"" + value + "\" for " + key + ". Allowed: " + allowed + ".");
        }
      }

      return config;
    }).catch(function (error) {
      loggingService.warn('failed fetching config:', error);
    });
  };

  _proto._sendPageLoadMetrics = function _sendPageLoadMetrics() {
    var tr = this.startTransaction(undefined, constants["B" /* PAGE_LOAD */], {
      managed: true,
      canReuse: true
    });

    if (!tr) {
      return;
    }

    tr.addTask(constants["B" /* PAGE_LOAD */]);

    var sendPageLoadMetrics = function sendPageLoadMetrics() {
      setTimeout(function () {
        return tr.removeTask(constants["B" /* PAGE_LOAD */]);
      });
    };

    if (document.readyState === 'complete') {
      sendPageLoadMetrics();
    } else {
      window.addEventListener('load', sendPageLoadMetrics);
    }
  };

  _proto.observe = function observe(name, fn) {
    var configService = this.serviceFactory.getService(constants["f" /* CONFIG_SERVICE */]);
    configService.events.observe(name, fn);
  };

  _proto.config = function config(_config) {
    var configService = this.serviceFactory.getService(constants["f" /* CONFIG_SERVICE */]);

    var _configService$valida2 = configService.validate(_config),
        missing = _configService$valida2.missing,
        invalid = _configService$valida2.invalid;

    if (missing.length === 0 && invalid.length === 0) {
      configService.setConfig(_config);
    } else {
      var loggingService = this.serviceFactory.getService(constants["t" /* LOGGING_SERVICE */]);
      var separator = ', ';
      var message = "RUM agent isn't correctly configured. ";

      if (missing.length > 0) {
        message += missing.join(separator) + ' is missing';

        if (invalid.length > 0) {
          message += separator;
        }
      }

      invalid.forEach(function (_ref, index) {
        var key = _ref.key,
            value = _ref.value,
            allowed = _ref.allowed;
        message += key + " \"" + value + "\" contains invalid characters! (allowed: " + allowed + ")" + (index !== invalid.length - 1 ? separator : '');
      });
      loggingService.error(message);
      configService.setConfig({
        active: false
      });
    }
  };

  _proto.setUserContext = function setUserContext(userContext) {
    var configService = this.serviceFactory.getService(constants["f" /* CONFIG_SERVICE */]);
    configService.setUserContext(userContext);
  };

  _proto.setCustomContext = function setCustomContext(customContext) {
    var configService = this.serviceFactory.getService(constants["f" /* CONFIG_SERVICE */]);
    configService.setCustomContext(customContext);
  };

  _proto.addLabels = function addLabels(labels) {
    var configService = this.serviceFactory.getService(constants["f" /* CONFIG_SERVICE */]);
    configService.addLabels(labels);
  };

  _proto.setInitialPageLoadName = function setInitialPageLoadName(name) {
    var configService = this.serviceFactory.getService(constants["f" /* CONFIG_SERVICE */]);
    configService.setConfig({
      pageLoadTransactionName: name
    });
  };

  _proto.startTransaction = function startTransaction(name, type, options) {
    if (this.isEnabled()) {
      var transactionService = this.serviceFactory.getService('TransactionService');
      return transactionService.startTransaction(name, type, options);
    }
  };

  _proto.startSpan = function startSpan(name, type, options) {
    if (this.isEnabled()) {
      var transactionService = this.serviceFactory.getService('TransactionService');
      return transactionService.startSpan(name, type, options);
    }
  };

  _proto.getCurrentTransaction = function getCurrentTransaction() {
    if (this.isEnabled()) {
      var transactionService = this.serviceFactory.getService('TransactionService');
      return transactionService.getCurrentTransaction();
    }
  };

  _proto.captureError = function captureError(error) {
    if (this.isEnabled()) {
      var errorLogging = this.serviceFactory.getService('ErrorLogging');
      return errorLogging.logError(error);
    }
  };

  _proto.addFilter = function addFilter(fn) {
    var configService = this.serviceFactory.getService(constants["f" /* CONFIG_SERVICE */]);
    configService.addFilter(fn);
  };

  return ApmBase;
}();


// CONCATENATED MODULE: ./node_modules/@elastic/apm-rum/dist/es/index.js



function getApmBase() {
  if (utils["m" /* isBrowser */] && window.elasticApm) {
    return window.elasticApm;
  }

  var enabled = Object(bootstrap["a" /* bootstrap */])();
  var serviceFactory = Object(es["a" /* createServiceFactory */])();
  var apmBase = new apm_base_ApmBase(serviceFactory, !enabled);

  if (utils["m" /* isBrowser */]) {
    window.elasticApm = apmBase;
  }

  return apmBase;
}

var es_apmBase = getApmBase();
var es_init = es_apmBase.init.bind(es_apmBase);
/* harmony default export */ var dist_es = (es_init);


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (keys) {
  var enumeration = {};

  keys.forEach(function (key) {
    enumeration[key] = key;
  });

  return enumeration;
};

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var _interopRequireDefault = __webpack_require__(15);

var _extends2 = _interopRequireDefault(__webpack_require__(36));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(37));

var _react = _interopRequireWildcard(__webpack_require__(0));

var _svgosm = __webpack_require__(135);

var _propTypes = _interopRequireDefault(__webpack_require__(3));

const _excluded = ["width", "height", "className", "title", "desc", "role"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Detect if we are running in a Node.js environment.
 *
 * @type {Boolean}
 * @private
 */
const isNode = !!(typeof process !== 'undefined' && process.versions && process.versions.node);
/**
 * Generates our dedicated Icon component.
 *
 * @param {String} displayName Name of the Icon.
 * @param {String} deprecated Indication if the icon should be deprecated
 * @returns {React.Component} The React Component.
 * @public
 */

module.exports = function create(displayName, deprecated) {
  const warned = {};
  /**
   * The base component that renders the Icon.
   *
   * @constructor
   * @param {Object} props All the props
   * @param {Number} props.width Width of the icon.
   * @param {Number} props.height Height of the icon.
   * @param {String} props.className Class name of the icon.
   * @param {String} props.title A11y title of the icon.
   * @param {String} props.desc A11y description of the icon.
   * @param {String} props.role A11y role for the icon.
   * @param {Object} props.props The rest of the props that are spread on the <use> tag.
   * @param {React.Ref} ref Forwarding reference
   * @private
   */

  const Fwd = /*#__PURE__*/_react.default.forwardRef(function Icon(_ref, ref) {
    let {
      width,
      height,
      className,
      title,
      desc,
      role
    } = _ref,
        rest = (0, _objectWithoutProperties2.default)(_ref, _excluded);
    const [failed, again] = (0, _react.useState)(null);

    const res = _svgosm.svgosm.get(displayName, function extract() {
      const details = _svgosm.svgosm.extract(`uxp-icon-${displayName}`);

      if (!details) return;
      return Object.assign(details, {
        title: title,
        desc: desc
      });
    }); //
    // Allows us to forcefully trigger a re-render of the Icon in the case
    // where styles would be loaded after the JavaScript is executed. E.g.
    // in the case that CSS in manually injected using React so we can't read
    // it out until an initial render of a component has taken place.
    //
    // This is one time fail safe only per component to prevent too many
    // re-render attempts.
    //


    (0, _react.useEffect)(function retry() {
      if (res || failed) return;
      again(true);
    }, []);

    if (!res) {
      //
      // If we don't have a result from the svg manager it's most likely caused
      // by missing CSS so we're going to advice the user, only dev/test,
      // in the browser (because we don't care bout node.js env) that they need
      // to import the CSS.
      //
      if (false) {}

      return null;
    }

    const props = {};
    const svg = {
      className: ['uxicon-svg-container', className].join(' ').trim(),
      height: height || res.height,
      width: width || res.width,
      role,
      ref
    }; //
    // Extract the `aria-` prefixed props from the supplied props as they
    // need to be applied to the <svg> element, the rest of the props
    // need to be applied to the <use> element, for styling purposes.
    //

    Object.keys(rest).forEach(function propSort(key) {
      if (key.startsWith('aria-') || key.startsWith('data-')) svg[key] = rest[key];else props[key] = rest[key];
    }); //
    // When no `aria-labelledby` is provided to us, but we did receive a title
    // or a desc, we're going to generate the correct aria- role by default.
    //

    if (!svg['aria-labelledby'] && (title || desc)) {
      const unique = res.link.slice(1);
      const labels = [];
      if (title) labels.push(`${unique}-title`);
      if (desc) labels.push(`${unique}-desc`);
      svg['aria-labelledby'] = labels.join(' ');
    }

    return /*#__PURE__*/_react.default.createElement("svg", svg, /*#__PURE__*/_react.default.createElement("use", (0, _extends2.default)({
      fill: "currentColor"
    }, props, {
      xlinkHref: res.link
    })));
  }); //
  // Ease debugging.
  //


  Fwd.displayName = displayName + 'Icon';
  /**
   * PropType validation.
   *
   * @type {Object}
   * @private
   */

  Fwd.propTypes = {
    width: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),
    height: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),
    className: _propTypes.default.string,
    desc: _propTypes.default.string,
    title: _propTypes.default.string,
    role: _propTypes.default.string
  };
  /**
   * Default properties.
   *
   * @type {Object}
   * @private
   */

  Fwd.defaultProps = {
    role: 'img',
    width: '1.5em',
    height: '1.5em'
  }; //
  // Ensure that this is not active in production environments, should be
  // auto deleted by minifiers.
  //

  if (false) {}

  return Fwd;
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(47)))

/***/ }),
/* 36 */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  module.exports["default"] = module.exports, module.exports.__esModule = true;
  return _extends.apply(this, arguments);
}

module.exports = _extends;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var objectWithoutPropertiesLoose = __webpack_require__(134);

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

module.exports = _objectWithoutProperties;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * /!\ /!\ /!\ /!\ /!\ /!\ /!\ /!\ /!\ /!\ /!\ /!\ /!\ /!\ /!\ /!\ /!\ /!\ /!\
 * /!\                                                                     /!\
 * /!\   WARNING THIS FILE IS AUTOMATICALLY GENERATED. DO NOT ALTER IT'S   /!\
 * /!\      CONTENTS MANUALLY. UPDATE THE TEMPLATE FILE INSTEAD.           /!\
 * /!\                                                                     /!\
 * /!\ /!\ /!\ /!\ /!\ /!\ /!\ /!\ /!\ /!\ /!\ /!\ /!\ /!\ /!\ /!\ /!\ /!\ /!\
 */
const create = __webpack_require__(35); //
// @ux/require: './index.css';
//
// Unfortunately, WebPack decided to remove the ability to use labels as require
// indicator as that would be the only way we could make WebPack automatically
// bundle files without them actually being required serverside.
//


module.exports = create('chevron-down', 'false');

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.decode = exports.parse = __webpack_require__(139);
exports.encode = exports.stringify = __webpack_require__(140);


/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ createServiceFactory; });

// UNUSED EXPORTS: ServiceFactory, patchAll, patchEventHandler, isPlatformSupported, isBrowser, getInstrumentationFlags, createTracer, scheduleMicroTask, scheduleMacroTask, afterFrame, ERROR, PAGE_LOAD, CONFIG_SERVICE, LOGGING_SERVICE, APM_SERVER, bootstrap

// EXTERNAL MODULE: ./node_modules/error-stack-parser/error-stack-parser.js
var error_stack_parser = __webpack_require__(83);
var error_stack_parser_default = /*#__PURE__*/__webpack_require__.n(error_stack_parser);

// CONCATENATED MODULE: ./node_modules/@elastic/apm-rum-core/dist/es/error-logging/stack-trace.js


function filePathToFileName(fileUrl) {
  var origin = window.location.origin || window.location.protocol + '//' + window.location.hostname + (window.location.port ? ':' + window.location.port : '');

  if (fileUrl.indexOf(origin) > -1) {
    fileUrl = fileUrl.replace(origin + '/', '');
  }

  return fileUrl;
}

function cleanFilePath(filePath) {
  if (filePath === void 0) {
    filePath = '';
  }

  if (filePath === '<anonymous>') {
    filePath = '';
  }

  return filePath;
}

function isFileInline(fileUrl) {
  if (fileUrl) {
    return window.location.href.indexOf(fileUrl) === 0;
  }

  return false;
}

function normalizeStackFrames(stackFrames) {
  return stackFrames.map(function (frame) {
    if (frame.functionName) {
      frame.functionName = normalizeFunctionName(frame.functionName);
    }

    return frame;
  });
}

function normalizeFunctionName(fnName) {
  var parts = fnName.split('/');

  if (parts.length > 1) {
    fnName = ['Object', parts[parts.length - 1]].join('.');
  } else {
    fnName = parts[0];
  }

  fnName = fnName.replace(/.<$/gi, '.<anonymous>');
  fnName = fnName.replace(/^Anonymous function$/, '<anonymous>');
  parts = fnName.split('.');

  if (parts.length > 1) {
    fnName = parts[parts.length - 1];
  } else {
    fnName = parts[0];
  }

  return fnName;
}

function createStackTraces(errorEvent) {
  var error = errorEvent.error,
      filename = errorEvent.filename,
      lineno = errorEvent.lineno,
      colno = errorEvent.colno;
  var stackTraces = [];

  if (error) {
    try {
      stackTraces = error_stack_parser_default.a.parse(error);
    } catch (e) {}
  }

  if (stackTraces.length === 0) {
    stackTraces = [{
      fileName: filename,
      lineNumber: lineno,
      columnNumber: colno
    }];
  }

  var normalizedStackTraces = normalizeStackFrames(stackTraces);
  return normalizedStackTraces.map(function (stack) {
    var fileName = stack.fileName,
        lineNumber = stack.lineNumber,
        columnNumber = stack.columnNumber,
        _stack$functionName = stack.functionName,
        functionName = _stack$functionName === void 0 ? '<anonymous>' : _stack$functionName;

    if (!fileName && !lineNumber) {
      return {};
    }

    if (!columnNumber && !lineNumber) {
      return {};
    }

    var filePath = cleanFilePath(fileName);
    var cleanedFileName = filePathToFileName(filePath);

    if (isFileInline(filePath)) {
      cleanedFileName = '(inline script)';
    }

    return {
      abs_path: fileName,
      filename: cleanedFileName,
      function: functionName,
      lineno: lineNumber,
      colno: columnNumber
    };
  });
}
function filterInvalidFrames(frames) {
  return frames.filter(function (_ref) {
    var filename = _ref.filename,
        lineno = _ref.lineno;
    return typeof filename !== 'undefined' && typeof lineno !== 'undefined';
  });
}
// EXTERNAL MODULE: ./node_modules/@elastic/apm-rum-core/dist/es/common/utils.js
var utils = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/@elastic/apm-rum-core/dist/es/common/url.js


function isDefaultPort(port, protocol) {
  switch (protocol) {
    case 'http:':
      return port === '80';

    case 'https:':
      return port === '443';
  }

  return true;
}

var RULES = [['#', 'hash'], ['?', 'query'], ['/', 'path'], ['@', 'auth', 1], [NaN, 'host', undefined, 1]];
var PROTOCOL_REGEX = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\S\s]*)/i;
var url_Url = function () {
  function Url(url) {
    var _this$extractProtocol = this.extractProtocol(url || ''),
        protocol = _this$extractProtocol.protocol,
        address = _this$extractProtocol.address,
        slashes = _this$extractProtocol.slashes;

    var relative = !protocol && !slashes;
    var location = this.getLocation();
    var instructions = RULES.slice();
    address = address.replace('\\', '/');

    if (!slashes) {
      instructions[2] = [NaN, 'path'];
    }

    var index;

    for (var i = 0; i < instructions.length; i++) {
      var instruction = instructions[i];
      var parse = instruction[0];
      var key = instruction[1];

      if (typeof parse === 'string') {
        index = address.indexOf(parse);

        if (~index) {
          var instLength = instruction[2];

          if (instLength) {
            var newIndex = address.lastIndexOf(parse);
            index = Math.max(index, newIndex);
            this[key] = address.slice(0, index);
            address = address.slice(index + instLength);
          } else {
            this[key] = address.slice(index);
            address = address.slice(0, index);
          }
        }
      } else {
        this[key] = address;
        address = '';
      }

      this[key] = this[key] || (relative && instruction[3] ? location[key] || '' : '');
      if (instruction[3]) this[key] = this[key].toLowerCase();
    }

    if (relative && this.path.charAt(0) !== '/') {
      this.path = '/' + this.path;
    }

    this.relative = relative;
    this.protocol = protocol || location.protocol;
    this.hostname = this.host;
    this.port = '';

    if (/:\d+$/.test(this.host)) {
      var value = this.host.split(':');
      var port = value.pop();
      var hostname = value.join(':');

      if (isDefaultPort(port, this.protocol)) {
        this.host = hostname;
      } else {
        this.port = port;
      }

      this.hostname = hostname;
    }

    this.origin = this.protocol && this.host && this.protocol !== 'file:' ? this.protocol + '//' + this.host : 'null';
    this.href = this.toString();
  }

  var _proto = Url.prototype;

  _proto.toString = function toString() {
    var result = this.protocol;
    result += '//';

    if (this.auth) {
      var REDACTED = '[REDACTED]';
      var userpass = this.auth.split(':');
      var username = userpass[0] ? REDACTED : '';
      var password = userpass[1] ? ':' + REDACTED : '';
      result += username + password + '@';
    }

    result += this.host;
    result += this.path;
    result += this.query;
    result += this.hash;
    return result;
  };

  _proto.getLocation = function getLocation() {
    var globalVar = {};

    if (utils["m" /* isBrowser */]) {
      globalVar = window;
    }

    return globalVar.location;
  };

  _proto.extractProtocol = function extractProtocol(url) {
    var match = PROTOCOL_REGEX.exec(url);
    return {
      protocol: match[1] ? match[1].toLowerCase() : '',
      slashes: !!match[2],
      address: match[3]
    };
  };

  return Url;
}();
function slugifyUrl(urlStr, depth) {
  if (depth === void 0) {
    depth = 2;
  }

  var parsedUrl = new url_Url(urlStr);
  var query = parsedUrl.query,
      path = parsedUrl.path;
  var pathParts = path.substring(1).split('/');
  var redactString = ':id';
  var wildcard = '*';
  var specialCharsRegex = /\W|_/g;
  var digitsRegex = /[0-9]/g;
  var lowerCaseRegex = /[a-z]/g;
  var upperCaseRegex = /[A-Z]/g;
  var redactedParts = [];
  var redactedBefore = false;

  for (var _index = 0; _index < pathParts.length; _index++) {
    var part = pathParts[_index];

    if (redactedBefore || _index > depth - 1) {
      if (part) {
        redactedParts.push(wildcard);
      }

      break;
    }

    var numberOfSpecialChars = (part.match(specialCharsRegex) || []).length;

    if (numberOfSpecialChars >= 2) {
      redactedParts.push(redactString);
      redactedBefore = true;
      continue;
    }

    var numberOfDigits = (part.match(digitsRegex) || []).length;

    if (numberOfDigits > 3 || part.length > 3 && numberOfDigits / part.length >= 0.3) {
      redactedParts.push(redactString);
      redactedBefore = true;
      continue;
    }

    var numberofUpperCase = (part.match(upperCaseRegex) || []).length;
    var numberofLowerCase = (part.match(lowerCaseRegex) || []).length;
    var lowerCaseRate = numberofLowerCase / part.length;
    var upperCaseRate = numberofUpperCase / part.length;

    if (part.length > 5 && (upperCaseRate > 0.3 && upperCaseRate < 0.6 || lowerCaseRate > 0.3 && lowerCaseRate < 0.6)) {
      redactedParts.push(redactString);
      redactedBefore = true;
      continue;
    }

    part && redactedParts.push(part);
  }

  var redacted = '/' + (redactedParts.length >= 2 ? redactedParts.join('/') : redactedParts.join('')) + (query ? '?{query}' : '');
  return redacted;
}
// EXTERNAL MODULE: ./node_modules/@elastic/apm-rum-core/dist/es/common/constants.js
var constants = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/@elastic/apm-rum-core/dist/es/common/context.js
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




var LEFT_SQUARE_BRACKET = 91;
var RIGHT_SQUARE_BRACKET = 93;
var EXTERNAL = 'external';
var RESOURCE = 'resource';
var HARD_NAVIGATION = 'hard-navigation';

function getPortNumber(port, protocol) {
  if (port === '') {
    port = protocol === 'http:' ? '80' : protocol === 'https:' ? '443' : '';
  }

  return port;
}

function getResponseContext(perfTimingEntry) {
  var transferSize = perfTimingEntry.transferSize,
      encodedBodySize = perfTimingEntry.encodedBodySize,
      decodedBodySize = perfTimingEntry.decodedBodySize,
      serverTiming = perfTimingEntry.serverTiming;
  var respContext = {
    transfer_size: transferSize,
    encoded_body_size: encodedBodySize,
    decoded_body_size: decodedBodySize
  };
  var serverTimingStr = Object(utils["j" /* getServerTimingInfo */])(serverTiming);

  if (serverTimingStr) {
    respContext.headers = {
      'server-timing': serverTimingStr
    };
  }

  return respContext;
}

function getDestination(parsedUrl, type) {
  var port = parsedUrl.port,
      protocol = parsedUrl.protocol,
      hostname = parsedUrl.hostname,
      host = parsedUrl.host;
  var portNumber = getPortNumber(port, protocol);
  var ipv6Hostname = hostname.charCodeAt(0) === LEFT_SQUARE_BRACKET && hostname.charCodeAt(hostname.length - 1) === RIGHT_SQUARE_BRACKET;
  var address = hostname;

  if (ipv6Hostname) {
    address = hostname.slice(1, -1);
  }

  return {
    service: {
      name: protocol + '//' + host,
      resource: hostname + ':' + portNumber,
      type: type
    },
    address: address,
    port: Number(portNumber)
  };
}

function getResourceContext(data) {
  var entry = data.entry,
      url = data.url;
  var parsedUrl = new url_Url(url);
  var destination = getDestination(parsedUrl, RESOURCE);
  return {
    http: {
      url: url,
      response: getResponseContext(entry)
    },
    destination: destination
  };
}

function getExternalContext(data) {
  var url = data.url,
      method = data.method,
      target = data.target,
      response = data.response;
  var parsedUrl = new url_Url(url);
  var destination = getDestination(parsedUrl, EXTERNAL);
  var context = {
    http: {
      method: method,
      url: parsedUrl.href
    },
    destination: destination
  };
  var statusCode;

  if (target && typeof target.status !== 'undefined') {
    statusCode = target.status;
  } else if (response) {
    statusCode = response.status;
  }

  context.http.status_code = statusCode;
  return context;
}

function getNavigationContext(data) {
  var url = data.url;
  var parsedUrl = new url_Url(url);
  var destination = getDestination(parsedUrl, HARD_NAVIGATION);
  return {
    destination: destination
  };
}

function getPageContext() {
  return {
    page: {
      referer: document.referrer,
      url: location.href
    }
  };
}
function addSpanContext(span, data) {
  if (!data) {
    return;
  }

  var type = span.type;
  var context;

  switch (type) {
    case EXTERNAL:
      context = getExternalContext(data);
      break;

    case RESOURCE:
      context = getResourceContext(data);
      break;

    case HARD_NAVIGATION:
      context = getNavigationContext(data);
      break;
  }

  span.addContext(context);
}
function addTransactionContext(transaction, _temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      tags = _ref.tags,
      configContext = _objectWithoutPropertiesLoose(_ref, ["tags"]);

  var pageContext = getPageContext();
  var responseContext = {};

  if (transaction.type === constants["B" /* PAGE_LOAD */] && Object(utils["o" /* isPerfTimelineSupported */])()) {
    var entries = utils["a" /* PERF */].getEntriesByType(constants["y" /* NAVIGATION */]);

    if (entries && entries.length > 0) {
      responseContext = {
        response: getResponseContext(entries[0])
      };
    }
  }

  transaction.addContext(pageContext, responseContext, configContext);
}
// CONCATENATED MODULE: ./node_modules/@elastic/apm-rum-core/dist/es/common/truncate.js

var METADATA_MODEL = {
  service: {
    name: [constants["p" /* KEYWORD_LIMIT */], true],
    version: true,
    agent: {
      version: [constants["p" /* KEYWORD_LIMIT */], true]
    },
    environment: true
  },
  labels: {
    '*': true
  }
};
var RESPONSE_MODEL = {
  '*': true,
  headers: {
    '*': true
  }
};
var DESTINATION_MODEL = {
  address: [constants["p" /* KEYWORD_LIMIT */]],
  service: {
    '*': [constants["p" /* KEYWORD_LIMIT */], true]
  }
};
var CONTEXT_MODEL = {
  user: {
    id: true,
    email: true,
    username: true
  },
  tags: {
    '*': true
  },
  http: {
    response: RESPONSE_MODEL
  },
  destination: DESTINATION_MODEL,
  response: RESPONSE_MODEL
};
var SPAN_MODEL = {
  name: [constants["p" /* KEYWORD_LIMIT */], true],
  type: [constants["p" /* KEYWORD_LIMIT */], true],
  id: [constants["p" /* KEYWORD_LIMIT */], true],
  trace_id: [constants["p" /* KEYWORD_LIMIT */], true],
  parent_id: [constants["p" /* KEYWORD_LIMIT */], true],
  transaction_id: [constants["p" /* KEYWORD_LIMIT */], true],
  subtype: true,
  action: true,
  context: CONTEXT_MODEL
};
var TRANSACTION_MODEL = {
  name: true,
  parent_id: true,
  type: [constants["p" /* KEYWORD_LIMIT */], true],
  id: [constants["p" /* KEYWORD_LIMIT */], true],
  trace_id: [constants["p" /* KEYWORD_LIMIT */], true],
  span_count: {
    started: [constants["p" /* KEYWORD_LIMIT */], true]
  },
  context: CONTEXT_MODEL
};
var ERROR_MODEL = {
  id: [constants["p" /* KEYWORD_LIMIT */], true],
  trace_id: true,
  transaction_id: true,
  parent_id: true,
  culprit: true,
  exception: {
    type: true
  },
  transaction: {
    type: true
  },
  context: CONTEXT_MODEL
};

function truncate(value, limit, required, placeholder) {
  if (limit === void 0) {
    limit = constants["p" /* KEYWORD_LIMIT */];
  }

  if (required === void 0) {
    required = false;
  }

  if (placeholder === void 0) {
    placeholder = 'N/A';
  }

  if (required && isEmpty(value)) {
    value = placeholder;
  }

  if (typeof value === 'string') {
    return value.substring(0, limit);
  }

  return value;
}

function isEmpty(value) {
  return value == null || value === '' || typeof value === 'undefined';
}

function replaceValue(target, key, currModel) {
  var value = truncate(target[key], currModel[0], currModel[1]);

  if (isEmpty(value)) {
    delete target[key];
    return;
  }

  target[key] = value;
}

function truncateModel(model, target, childTarget) {
  if (model === void 0) {
    model = {};
  }

  if (childTarget === void 0) {
    childTarget = target;
  }

  var keys = Object.keys(model);
  var emptyArr = [];

  var _loop = function _loop(i) {
    var currKey = keys[i];
    var currModel = model[currKey] === true ? emptyArr : model[currKey];

    if (!Array.isArray(currModel)) {
      truncateModel(currModel, target, childTarget[currKey]);
    } else {
      if (currKey === '*') {
        Object.keys(childTarget).forEach(function (key) {
          return replaceValue(childTarget, key, currModel);
        });
      } else {
        replaceValue(childTarget, currKey, currModel);
      }
    }
  };

  for (var i = 0; i < keys.length; i++) {
    _loop(i);
  }

  return target;
}


// CONCATENATED MODULE: ./node_modules/@elastic/apm-rum-core/dist/es/error-logging/error-logging.js
function error_logging_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





var IGNORE_KEYS = ['stack', 'message'];

function getErrorProperties(error) {
  var propertyFound = false;
  var properties = {};
  Object.keys(error).forEach(function (key) {
    if (IGNORE_KEYS.indexOf(key) >= 0) {
      return;
    }

    var val = error[key];

    if (val == null || typeof val === 'function') {
      return;
    }

    if (typeof val === 'object') {
      if (typeof val.toISOString !== 'function') return;
      val = val.toISOString();
    }

    properties[key] = val;
    propertyFound = true;
  });

  if (propertyFound) {
    return properties;
  }
}

var error_logging_ErrorLogging = function () {
  function ErrorLogging(apmServer, configService, transactionService) {
    this._apmServer = apmServer;
    this._configService = configService;
    this._transactionService = transactionService;
  }

  var _proto = ErrorLogging.prototype;

  _proto.createErrorDataModel = function createErrorDataModel(errorEvent) {
    var frames = createStackTraces(errorEvent);
    var filteredFrames = filterInvalidFrames(frames);
    var culprit = '(inline script)';
    var lastFrame = filteredFrames[filteredFrames.length - 1];

    if (lastFrame && lastFrame.filename) {
      culprit = lastFrame.filename;
    }

    var message = errorEvent.message,
        error = errorEvent.error;
    var errorMessage = message;
    var errorType = '';
    var errorContext = {};

    if (error && typeof error === 'object') {
      errorMessage = errorMessage || error.message;
      errorType = error.name;
      var customProperties = getErrorProperties(error);

      if (customProperties) {
        errorContext.custom = customProperties;
      }
    }

    if (!errorType) {
      if (errorMessage && errorMessage.indexOf(':') > -1) {
        errorType = errorMessage.split(':')[0];
      }
    }

    var currentTransaction = this._transactionService.getCurrentTransaction();

    var transactionContext = currentTransaction ? currentTransaction.context : {};

    var _this$_configService$ = this._configService.get('context'),
        tags = _this$_configService$.tags,
        configContext = error_logging_objectWithoutPropertiesLoose(_this$_configService$, ["tags"]);

    var pageContext = getPageContext();
    var context = Object(utils["s" /* merge */])({}, pageContext, transactionContext, configContext, errorContext);
    var errorObject = {
      id: Object(utils["d" /* generateRandomId */])(),
      culprit: culprit,
      exception: {
        message: errorMessage,
        stacktrace: filteredFrames,
        type: errorType
      },
      context: context
    };

    if (currentTransaction) {
      errorObject = Object(utils["c" /* extend */])(errorObject, {
        trace_id: currentTransaction.traceId,
        parent_id: currentTransaction.id,
        transaction_id: currentTransaction.id,
        transaction: {
          type: currentTransaction.type,
          sampled: currentTransaction.sampled
        }
      });
    }

    return truncateModel(ERROR_MODEL, errorObject);
  };

  _proto.logErrorEvent = function logErrorEvent(errorEvent) {
    if (typeof errorEvent === 'undefined') {
      return;
    }

    var errorObject = this.createErrorDataModel(errorEvent);

    if (typeof errorObject.exception.message === 'undefined') {
      return;
    }

    this._apmServer.addError(errorObject);
  };

  _proto.registerListeners = function registerListeners() {
    var _this = this;

    window.addEventListener('error', function (errorEvent) {
      return _this.logErrorEvent(errorEvent);
    });
    window.addEventListener('unhandledrejection', function (promiseRejectionEvent) {
      return _this.logPromiseEvent(promiseRejectionEvent);
    });
  };

  _proto.logPromiseEvent = function logPromiseEvent(promiseRejectionEvent) {
    var prefix = 'Unhandled promise rejection: ';
    var reason = promiseRejectionEvent.reason;

    if (reason == null) {
      reason = '<no reason specified>';
    }

    var errorEvent;

    if (typeof reason.message === 'string') {
      var name = reason.name ? reason.name + ': ' : '';
      errorEvent = {
        error: reason,
        message: prefix + name + reason.message
      };
    } else {
      reason = typeof reason === 'object' ? '<object>' : typeof reason === 'function' ? '<function>' : reason;
      errorEvent = {
        message: prefix + reason
      };
    }

    this.logErrorEvent(errorEvent);
  };

  _proto.logError = function logError(messageOrError) {
    var errorEvent = {};

    if (typeof messageOrError === 'string') {
      errorEvent.message = messageOrError;
    } else {
      errorEvent.error = messageOrError;
    }

    return this.logErrorEvent(errorEvent);
  };

  return ErrorLogging;
}();

/* harmony default export */ var error_logging = (error_logging_ErrorLogging);
// CONCATENATED MODULE: ./node_modules/@elastic/apm-rum-core/dist/es/common/queue.js
var Queue = function () {
  function Queue(onFlush, opts) {
    if (opts === void 0) {
      opts = {};
    }

    this.onFlush = onFlush;
    this.items = [];
    this.queueLimit = opts.queueLimit || -1;
    this.flushInterval = opts.flushInterval || 0;
    this.timeoutId = undefined;
  }

  var _proto = Queue.prototype;

  _proto._setTimer = function _setTimer() {
    var _this = this;

    this.timeoutId = setTimeout(function () {
      return _this.flush();
    }, this.flushInterval);
  };

  _proto._clear = function _clear() {
    if (typeof this.timeoutId !== 'undefined') {
      clearTimeout(this.timeoutId);
      this.timeoutId = undefined;
    }

    this.items = [];
  };

  _proto.flush = function flush() {
    this.onFlush(this.items);

    this._clear();
  };

  _proto.add = function add(item) {
    this.items.push(item);

    if (this.queueLimit !== -1 && this.items.length >= this.queueLimit) {
      this.flush();
    } else {
      if (typeof this.timeoutId === 'undefined') {
        this._setTimer();
      }
    }
  };

  return Queue;
}();

/* harmony default export */ var queue = (Queue);
// CONCATENATED MODULE: ./node_modules/@elastic/apm-rum-core/dist/es/common/throttle.js
function throttle(fn, onThrottle, opts) {
  var context = this;
  var limit = opts.limit;
  var interval = opts.interval;
  var counter = 0;
  var timeoutId;
  return function () {
    counter++;

    if (typeof timeoutId === 'undefined') {
      timeoutId = setTimeout(function () {
        counter = 0;
        timeoutId = undefined;
      }, interval);
    }

    if (counter > limit && typeof onThrottle === 'function') {
      return onThrottle.apply(context, arguments);
    } else {
      return fn.apply(context, arguments);
    }
  };
}
// CONCATENATED MODULE: ./node_modules/@elastic/apm-rum-core/dist/es/common/ndjson.js
var NDJSON = function () {
  function NDJSON() {}

  NDJSON.stringify = function stringify(object) {
    return JSON.stringify(object) + '\n';
  };

  return NDJSON;
}();

/* harmony default export */ var common_ndjson = (NDJSON);
// EXTERNAL MODULE: ./node_modules/@elastic/apm-rum-core/dist/es/common/patching/patch-utils.js
var patch_utils = __webpack_require__(12);

// EXTERNAL MODULE: ./node_modules/@elastic/apm-rum-core/dist/es/common/polyfills.js
var polyfills = __webpack_require__(19);

// CONCATENATED MODULE: ./node_modules/@elastic/apm-rum-core/dist/es/performance-monitoring/span-base.js



var span_base_SpanBase = function () {
  function SpanBase(name, type, options) {
    if (options === void 0) {
      options = {};
    }

    if (!name) {
      name = constants["x" /* NAME_UNKNOWN */];
    }

    if (!type) {
      type = constants["P" /* TYPE_CUSTOM */];
    }

    this.name = name;
    this.type = type;
    this.options = options;
    this.id = options.id || Object(utils["d" /* generateRandomId */])(16);
    this.traceId = options.traceId;
    this.sampled = options.sampled;
    this.sampleRate = options.sampleRate;
    this.timestamp = options.timestamp;
    this._start = Object(utils["l" /* getTime */])(options.startTime);
    this._end = undefined;
    this.ended = false;
    this.outcome = undefined;
    this.onEnd = options.onEnd;
  }

  var _proto = SpanBase.prototype;

  _proto.ensureContext = function ensureContext() {
    if (!this.context) {
      this.context = {};
    }
  };

  _proto.addLabels = function addLabels(tags) {
    this.ensureContext();
    var ctx = this.context;

    if (!ctx.tags) {
      ctx.tags = {};
    }

    var keys = Object.keys(tags);
    keys.forEach(function (k) {
      return Object(utils["y" /* setLabel */])(k, tags[k], ctx.tags);
    });
  };

  _proto.addContext = function addContext() {
    for (var _len = arguments.length, context = new Array(_len), _key = 0; _key < _len; _key++) {
      context[_key] = arguments[_key];
    }

    if (context.length === 0) return;
    this.ensureContext();
    utils["s" /* merge */].apply(void 0, [this.context].concat(context));
  };

  _proto.end = function end(endTime) {
    if (this.ended) {
      return;
    }

    this.ended = true;
    this._end = Object(utils["l" /* getTime */])(endTime);
    this.callOnEnd();
  };

  _proto.callOnEnd = function callOnEnd() {
    if (typeof this.onEnd === 'function') {
      this.onEnd(this);
    }
  };

  _proto.duration = function duration() {
    return Object(utils["g" /* getDuration */])(this._start, this._end);
  };

  return SpanBase;
}();

/* harmony default export */ var span_base = (span_base_SpanBase);
// CONCATENATED MODULE: ./node_modules/@elastic/apm-rum-core/dist/es/performance-monitoring/span.js
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }




var span_Span = function (_SpanBase) {
  _inheritsLoose(Span, _SpanBase);

  function Span(name, type, options) {
    var _this;

    _this = _SpanBase.call(this, name, type, options) || this;
    _this.parentId = _this.options.parentId;
    _this.subtype = undefined;
    _this.action = undefined;

    if (_this.type.indexOf('.') !== -1) {
      var fields = _this.type.split('.', 3);

      _this.type = fields[0];
      _this.subtype = fields[1];
      _this.action = fields[2];
    }

    _this.sync = _this.options.sync;
    return _this;
  }

  var _proto = Span.prototype;

  _proto.end = function end(endTime, data) {
    _SpanBase.prototype.end.call(this, endTime);

    addSpanContext(this, data);
  };

  return Span;
}(span_base);

/* harmony default export */ var performance_monitoring_span = (span_Span);
// EXTERNAL MODULE: ./node_modules/@elastic/apm-rum-core/dist/es/state.js
var state = __webpack_require__(7);

// CONCATENATED MODULE: ./node_modules/@elastic/apm-rum-core/dist/es/performance-monitoring/capture-navigation.js




var eventPairs = [['domainLookupStart', 'domainLookupEnd', 'Domain lookup'], ['connectStart', 'connectEnd', 'Making a connection to the server'], ['requestStart', 'responseEnd', 'Requesting and receiving the document'], ['domLoading', 'domInteractive', 'Parsing the document, executing sync. scripts'], ['domContentLoadedEventStart', 'domContentLoadedEventEnd', 'Fire "DOMContentLoaded" event'], ['loadEventStart', 'loadEventEnd', 'Fire "load" event']];

function shouldCreateSpan(start, end, trStart, trEnd, baseTime) {
  if (baseTime === void 0) {
    baseTime = 0;
  }

  return typeof start === 'number' && typeof end === 'number' && start >= baseTime && end > start && start - baseTime >= trStart && end - baseTime <= trEnd && end - start < constants["v" /* MAX_SPAN_DURATION */] && start - baseTime < constants["v" /* MAX_SPAN_DURATION */] && end - baseTime < constants["v" /* MAX_SPAN_DURATION */];
}

function createNavigationTimingSpans(timings, baseTime, trStart, trEnd) {
  var spans = [];

  for (var i = 0; i < eventPairs.length; i++) {
    var start = timings[eventPairs[i][0]];
    var end = timings[eventPairs[i][1]];

    if (!shouldCreateSpan(start, end, trStart, trEnd, baseTime)) {
      continue;
    }

    var span = new performance_monitoring_span(eventPairs[i][2], 'hard-navigation.browser-timing');
    var data = null;

    if (eventPairs[i][0] === 'requestStart') {
      span.pageResponse = true;
      data = {
        url: location.origin
      };
    }

    span._start = start - baseTime;
    span.end(end - baseTime, data);
    spans.push(span);
  }

  return spans;
}

function createResourceTimingSpan(resourceTimingEntry) {
  var name = resourceTimingEntry.name,
      initiatorType = resourceTimingEntry.initiatorType,
      startTime = resourceTimingEntry.startTime,
      responseEnd = resourceTimingEntry.responseEnd;
  var kind = 'resource';

  if (initiatorType) {
    kind += '.' + initiatorType;
  }

  var spanName = Object(utils["A" /* stripQueryStringFromUrl */])(name);
  var span = new performance_monitoring_span(spanName, kind);
  span._start = startTime;
  span.end(responseEnd, {
    url: name,
    entry: resourceTimingEntry
  });
  return span;
}

function isCapturedByPatching(resourceStartTime, requestPatchTime) {
  return requestPatchTime != null && resourceStartTime > requestPatchTime;
}

function isIntakeAPIEndpoint(url) {
  return /intake\/v\d+\/rum\/events/.test(url);
}

function createResourceTimingSpans(entries, requestPatchTime, trStart, trEnd) {
  var spans = [];

  for (var i = 0; i < entries.length; i++) {
    var _entries$i = entries[i],
        initiatorType = _entries$i.initiatorType,
        name = _entries$i.name,
        startTime = _entries$i.startTime,
        responseEnd = _entries$i.responseEnd;

    if (constants["F" /* RESOURCE_INITIATOR_TYPES */].indexOf(initiatorType) === -1 || name == null) {
      continue;
    }

    if ((initiatorType === 'xmlhttprequest' || initiatorType === 'fetch') && (isIntakeAPIEndpoint(name) || isCapturedByPatching(startTime, requestPatchTime))) {
      continue;
    }

    if (shouldCreateSpan(startTime, responseEnd, trStart, trEnd)) {
      spans.push(createResourceTimingSpan(entries[i]));
    }
  }

  return spans;
}

function createUserTimingSpans(entries, trStart, trEnd) {
  var userTimingSpans = [];

  for (var i = 0; i < entries.length; i++) {
    var _entries$i2 = entries[i],
        name = _entries$i2.name,
        startTime = _entries$i2.startTime,
        duration = _entries$i2.duration;
    var end = startTime + duration;

    if (duration <= constants["R" /* USER_TIMING_THRESHOLD */] || !shouldCreateSpan(startTime, end, trStart, trEnd)) {
      continue;
    }

    var kind = 'app';
    var span = new performance_monitoring_span(name, kind);
    span._start = startTime;
    span.end(end);
    userTimingSpans.push(span);
  }

  return userTimingSpans;
}

var NAVIGATION_TIMING_MARKS = ['fetchStart', 'domainLookupStart', 'domainLookupEnd', 'connectStart', 'connectEnd', 'requestStart', 'responseStart', 'responseEnd', 'domLoading', 'domInteractive', 'domContentLoadedEventStart', 'domContentLoadedEventEnd', 'domComplete', 'loadEventStart', 'loadEventEnd'];
var COMPRESSED_NAV_TIMING_MARKS = ['fs', 'ls', 'le', 'cs', 'ce', 'qs', 'rs', 're', 'dl', 'di', 'ds', 'de', 'dc', 'es', 'ee'];

function getNavigationTimingMarks(timing) {
  var fetchStart = timing.fetchStart,
      navigationStart = timing.navigationStart,
      responseStart = timing.responseStart,
      responseEnd = timing.responseEnd;

  if (fetchStart >= navigationStart && responseStart >= fetchStart && responseEnd >= responseStart) {
    var marks = {};
    NAVIGATION_TIMING_MARKS.forEach(function (timingKey) {
      var m = timing[timingKey];

      if (m && m >= fetchStart) {
        marks[timingKey] = parseInt(m - fetchStart);
      }
    });
    return marks;
  }

  return null;
}

function getPageLoadMarks(timing) {
  var marks = getNavigationTimingMarks(timing);

  if (marks == null) {
    return null;
  }

  return {
    navigationTiming: marks,
    agent: {
      timeToFirstByte: marks.responseStart,
      domInteractive: marks.domInteractive,
      domComplete: marks.domComplete
    }
  };
}

function captureNavigation(transaction) {
  if (!transaction.captureTimings) {
    return;
  }

  var trEnd = transaction._end;

  if (transaction.type === constants["B" /* PAGE_LOAD */]) {
    if (transaction.marks && transaction.marks.custom) {
      var customMarks = transaction.marks.custom;
      Object.keys(customMarks).forEach(function (key) {
        customMarks[key] += transaction._start;
      });
    }

    var trStart = 0;
    transaction._start = trStart;
    var timings = utils["a" /* PERF */].timing;
    createNavigationTimingSpans(timings, timings.fetchStart, trStart, trEnd).forEach(function (span) {
      span.traceId = transaction.traceId;
      span.sampled = transaction.sampled;

      if (span.pageResponse && transaction.options.pageLoadSpanId) {
        span.id = transaction.options.pageLoadSpanId;
      }

      transaction.spans.push(span);
    });
    transaction.addMarks(getPageLoadMarks(timings));
  }

  if (Object(utils["o" /* isPerfTimelineSupported */])()) {
    var _trStart = transaction._start;
    var resourceEntries = utils["a" /* PERF */].getEntriesByType(constants["E" /* RESOURCE */]);
    createResourceTimingSpans(resourceEntries, state["b" /* state */].bootstrapTime, _trStart, trEnd).forEach(function (span) {
      return transaction.spans.push(span);
    });
    var userEntries = utils["a" /* PERF */].getEntriesByType(constants["w" /* MEASURE */]);
    createUserTimingSpans(userEntries, _trStart, trEnd).forEach(function (span) {
      return transaction.spans.push(span);
    });
  }
}


// CONCATENATED MODULE: ./node_modules/@elastic/apm-rum-core/dist/es/common/compress.js



function compressStackFrames(frames) {
  return frames.map(function (frame) {
    return {
      ap: frame.abs_path,
      f: frame.filename,
      fn: frame.function,
      li: frame.lineno,
      co: frame.colno
    };
  });
}

function compressResponse(response) {
  return {
    ts: response.transfer_size,
    ebs: response.encoded_body_size,
    dbs: response.decoded_body_size
  };
}

function compressHTTP(http) {
  var compressed = {};
  var method = http.method,
      status_code = http.status_code,
      url = http.url,
      response = http.response;
  compressed.url = url;

  if (method) {
    compressed.mt = method;
  }

  if (status_code) {
    compressed.sc = status_code;
  }

  if (response) {
    compressed.r = compressResponse(response);
  }

  return compressed;
}

function compressContext(context) {
  if (!context) {
    return null;
  }

  var compressed = {};
  var page = context.page,
      http = context.http,
      response = context.response,
      destination = context.destination,
      user = context.user,
      custom = context.custom;

  if (page) {
    compressed.p = {
      rf: page.referer,
      url: page.url
    };
  }

  if (http) {
    compressed.h = compressHTTP(http);
  }

  if (response) {
    compressed.r = compressResponse(response);
  }

  if (destination) {
    var service = destination.service;
    compressed.dt = {
      se: {
        n: service.name,
        t: service.type,
        rc: service.resource
      },
      ad: destination.address,
      po: destination.port
    };
  }

  if (user) {
    compressed.u = {
      id: user.id,
      un: user.username,
      em: user.email
    };
  }

  if (custom) {
    compressed.cu = custom;
  }

  return compressed;
}

function compressMarks(marks) {
  if (!marks) {
    return null;
  }

  var navigationTiming = marks.navigationTiming,
      agent = marks.agent;
  var compressed = {
    nt: {}
  };
  COMPRESSED_NAV_TIMING_MARKS.forEach(function (mark, index) {
    var mapping = NAVIGATION_TIMING_MARKS[index];
    compressed.nt[mark] = navigationTiming[mapping];
  });
  compressed.a = {
    fb: compressed.nt.rs,
    di: compressed.nt.di,
    dc: compressed.nt.dc
  };
  var fp = agent.firstContentfulPaint;
  var lp = agent.largestContentfulPaint;

  if (fp) {
    compressed.a.fp = fp;
  }

  if (lp) {
    compressed.a.lp = lp;
  }

  return compressed;
}

function compressMetadata(metadata) {
  var service = metadata.service,
      labels = metadata.labels;
  var agent = service.agent,
      language = service.language;
  return {
    se: {
      n: service.name,
      ve: service.version,
      a: {
        n: agent.name,
        ve: agent.version
      },
      la: {
        n: language.name
      },
      en: service.environment
    },
    l: labels
  };
}
function compressTransaction(transaction) {
  var spans = transaction.spans.map(function (span) {
    var spanData = {
      id: span.id,
      n: span.name,
      t: span.type,
      s: span.start,
      d: span.duration,
      c: compressContext(span.context),
      o: span.outcome,
      sr: span.sample_rate
    };

    if (span.parent_id !== transaction.id) {
      spanData.pid = span.parent_id;
    }

    if (span.sync === true) {
      spanData.sy = true;
    }

    if (span.subtype) {
      spanData.su = span.subtype;
    }

    if (span.action) {
      spanData.ac = span.action;
    }

    return spanData;
  });
  var tr = {
    id: transaction.id,
    tid: transaction.trace_id,
    n: transaction.name,
    t: transaction.type,
    d: transaction.duration,
    c: compressContext(transaction.context),
    k: compressMarks(transaction.marks),
    me: compressMetricsets(transaction.breakdown),
    y: spans,
    yc: {
      sd: spans.length
    },
    sm: transaction.sampled,
    sr: transaction.sample_rate,
    o: transaction.outcome
  };

  if (transaction.experience) {
    var _transaction$experien = transaction.experience,
        cls = _transaction$experien.cls,
        fid = _transaction$experien.fid,
        tbt = _transaction$experien.tbt,
        longtask = _transaction$experien.longtask;
    tr.exp = {
      cls: cls,
      fid: fid,
      tbt: tbt,
      lt: longtask
    };
  }

  if (transaction.session) {
    var _transaction$session = transaction.session,
        id = _transaction$session.id,
        sequence = _transaction$session.sequence;
    tr.ses = {
      id: id,
      seq: sequence
    };
  }

  return tr;
}
function compressError(error) {
  var exception = error.exception;
  var compressed = {
    id: error.id,
    cl: error.culprit,
    ex: {
      mg: exception.message,
      st: compressStackFrames(exception.stacktrace),
      t: error.type
    },
    c: compressContext(error.context)
  };
  var transaction = error.transaction;

  if (transaction) {
    compressed.tid = error.trace_id;
    compressed.pid = error.parent_id;
    compressed.xid = error.transaction_id;
    compressed.x = {
      t: transaction.type,
      sm: transaction.sampled
    };
  }

  return compressed;
}
function compressMetricsets(breakdowns) {
  return breakdowns.map(function (_ref) {
    var span = _ref.span,
        samples = _ref.samples;
    var isSpan = span != null;

    if (isSpan) {
      return {
        y: {
          t: span.type
        },
        sa: {
          ysc: {
            v: samples['span.self_time.count'].value
          },
          yss: {
            v: samples['span.self_time.sum.us'].value
          }
        }
      };
    }

    return {
      sa: {
        xdc: {
          v: samples['transaction.duration.count'].value
        },
        xds: {
          v: samples['transaction.duration.sum.us'].value
        },
        xbc: {
          v: samples['transaction.breakdown.count'].value
        }
      }
    };
  });
}
function compressPayload(payload, headers, type) {
  if (type === void 0) {
    type = 'gzip';
  }

  var isCompressionStreamSupported = typeof CompressionStream === 'function';
  return new polyfills["a" /* Promise */](function (resolve) {
    if (!isCompressionStreamSupported) {
      return resolve({
        payload: payload,
        headers: headers
      });
    }

    var payloadStream = new Blob([payload]).stream();
    var compressedStream = payloadStream.pipeThrough(new CompressionStream(type));
    return new Response(compressedStream).blob().then(function (payload) {
      headers['Content-Encoding'] = type;
      return resolve({
        payload: payload,
        headers: headers
      });
    });
  });
}
// CONCATENATED MODULE: ./node_modules/@elastic/apm-rum-core/dist/es/common/apm-server.js










var THROTTLE_INTERVAL = 60000;

var apm_server_ApmServer = function () {
  function ApmServer(configService, loggingService) {
    this._configService = configService;
    this._loggingService = loggingService;
    this.queue = undefined;
    this.throttleEvents = utils["t" /* noop */];
  }

  var _proto = ApmServer.prototype;

  _proto.init = function init() {
    var _this = this;

    var queueLimit = this._configService.get('queueLimit');

    var flushInterval = this._configService.get('flushInterval');

    var limit = this._configService.get('eventsLimit');

    var onFlush = function onFlush(events) {
      var promise = _this.sendEvents(events);

      if (promise) {
        promise.catch(function (reason) {
          _this._loggingService.warn('Failed sending events!', _this._constructError(reason));
        });
      }
    };

    this.queue = new queue(onFlush, {
      queueLimit: queueLimit,
      flushInterval: flushInterval
    });
    this.throttleEvents = throttle(this.queue.add.bind(this.queue), function () {
      return _this._loggingService.warn('Dropped events due to throttling!');
    }, {
      limit: limit,
      interval: THROTTLE_INTERVAL
    });
  };

  _proto._postJson = function _postJson(endPoint, payload) {
    var _this2 = this;

    var headers = {
      'Content-Type': 'application/x-ndjson'
    };
    return compressPayload(payload, headers).catch(function (error) {
      if (state["a" /* __DEV__ */]) {
        _this2._loggingService.debug('Compressing the payload using CompressionStream API failed', error.message);
      }

      return {
        payload: payload,
        headers: headers
      };
    }).then(function (result) {
      return _this2._makeHttpRequest('POST', endPoint, result);
    }).then(function (_ref) {
      var responseText = _ref.responseText;
      return responseText;
    });
  };

  _proto._constructError = function _constructError(reason) {
    var url = reason.url,
        status = reason.status,
        responseText = reason.responseText;

    if (typeof status == 'undefined') {
      return reason;
    }

    var message = url + ' HTTP status: ' + status;

    if (state["a" /* __DEV__ */] && responseText) {
      try {
        var serverErrors = [];
        var response = JSON.parse(responseText);

        if (response.errors && response.errors.length > 0) {
          response.errors.forEach(function (err) {
            return serverErrors.push(err.message);
          });
          message += ' ' + serverErrors.join(',');
        }
      } catch (e) {
        this._loggingService.debug('Error parsing response from APM server', e);
      }
    }

    return new Error(message);
  };

  _proto._makeHttpRequest = function _makeHttpRequest(method, url, _temp) {
    var _ref2 = _temp === void 0 ? {} : _temp,
        _ref2$timeout = _ref2.timeout,
        timeout = _ref2$timeout === void 0 ? 10000 : _ref2$timeout,
        payload = _ref2.payload,
        headers = _ref2.headers;

    return new polyfills["a" /* Promise */](function (resolve, reject) {
      var xhr = new window.XMLHttpRequest();
      xhr[patch_utils["a" /* XHR_IGNORE */]] = true;
      xhr.open(method, url, true);
      xhr.timeout = timeout;

      if (headers) {
        for (var header in headers) {
          if (headers.hasOwnProperty(header)) {
            xhr.setRequestHeader(header, headers[header]);
          }
        }
      }

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          var status = xhr.status,
              responseText = xhr.responseText;

          if (status === 0 || status > 399 && status < 600) {
            reject({
              url: url,
              status: status,
              responseText: responseText
            });
          } else {
            resolve(xhr);
          }
        }
      };

      xhr.onerror = function () {
        var status = xhr.status,
            responseText = xhr.responseText;
        reject({
          url: url,
          status: status,
          responseText: responseText
        });
      };

      xhr.send(payload);
    });
  };

  _proto.fetchConfig = function fetchConfig(serviceName, environment) {
    var _this3 = this;

    var serverUrl = this._configService.get('serverUrl');

    var configEndpoint = serverUrl + "/config/v1/rum/agents";

    if (!serviceName) {
      return polyfills["a" /* Promise */].reject('serviceName is required for fetching central config.');
    }

    configEndpoint += "?service.name=" + serviceName;

    if (environment) {
      configEndpoint += "&service.environment=" + environment;
    }

    var localConfig = this._configService.getLocalConfig();

    if (localConfig) {
      configEndpoint += "&ifnonematch=" + localConfig.etag;
    }

    return this._makeHttpRequest('GET', configEndpoint, {
      timeout: 5000
    }).then(function (xhr) {
      var status = xhr.status,
          responseText = xhr.responseText;

      if (status === 304) {
        return localConfig;
      } else {
        var remoteConfig = JSON.parse(responseText);
        var etag = xhr.getResponseHeader('etag');

        if (etag) {
          remoteConfig.etag = etag.replace(/["]/g, '');

          _this3._configService.setLocalConfig(remoteConfig, true);
        }

        return remoteConfig;
      }
    }).catch(function (reason) {
      var error = _this3._constructError(reason);

      return polyfills["a" /* Promise */].reject(error);
    });
  };

  _proto.createMetaData = function createMetaData() {
    var cfg = this._configService;
    var metadata = {
      service: {
        name: cfg.get('serviceName'),
        version: cfg.get('serviceVersion'),
        agent: {
          name: 'rum-js',
          version: cfg.version
        },
        language: {
          name: 'javascript'
        },
        environment: cfg.get('environment')
      },
      labels: cfg.get('context.tags')
    };
    return truncateModel(METADATA_MODEL, metadata);
  };

  _proto.addError = function addError(error) {
    var _this$throttleEvents;

    this.throttleEvents((_this$throttleEvents = {}, _this$throttleEvents[constants["h" /* ERRORS */]] = error, _this$throttleEvents));
  };

  _proto.addTransaction = function addTransaction(transaction) {
    var _this$throttleEvents2;

    this.throttleEvents((_this$throttleEvents2 = {}, _this$throttleEvents2[constants["K" /* TRANSACTIONS */]] = transaction, _this$throttleEvents2));
  };

  _proto.ndjsonErrors = function ndjsonErrors(errors, compress) {
    var key = compress ? 'e' : 'error';
    return errors.map(function (error) {
      var _NDJSON$stringify;

      return common_ndjson.stringify((_NDJSON$stringify = {}, _NDJSON$stringify[key] = compress ? compressError(error) : error, _NDJSON$stringify));
    });
  };

  _proto.ndjsonMetricsets = function ndjsonMetricsets(metricsets) {
    return metricsets.map(function (metricset) {
      return common_ndjson.stringify({
        metricset: metricset
      });
    }).join('');
  };

  _proto.ndjsonTransactions = function ndjsonTransactions(transactions, compress) {
    var _this4 = this;

    var key = compress ? 'x' : 'transaction';
    return transactions.map(function (tr) {
      var _NDJSON$stringify2;

      var spans = '',
          breakdowns = '';

      if (!compress) {
        if (tr.spans) {
          spans = tr.spans.map(function (span) {
            return common_ndjson.stringify({
              span: span
            });
          }).join('');
          delete tr.spans;
        }

        if (tr.breakdown) {
          breakdowns = _this4.ndjsonMetricsets(tr.breakdown);
          delete tr.breakdown;
        }
      }

      return common_ndjson.stringify((_NDJSON$stringify2 = {}, _NDJSON$stringify2[key] = compress ? compressTransaction(tr) : tr, _NDJSON$stringify2)) + spans + breakdowns;
    });
  };

  _proto.sendEvents = function sendEvents(events) {
    var _payload, _NDJSON$stringify3;

    if (events.length === 0) {
      return;
    }

    var transactions = [];
    var errors = [];

    for (var i = 0; i < events.length; i++) {
      var event = events[i];

      if (event[constants["K" /* TRANSACTIONS */]]) {
        transactions.push(event[constants["K" /* TRANSACTIONS */]]);
      }

      if (event[constants["h" /* ERRORS */]]) {
        errors.push(event[constants["h" /* ERRORS */]]);
      }
    }

    if (transactions.length === 0 && errors.length === 0) {
      return;
    }

    var cfg = this._configService;
    var payload = (_payload = {}, _payload[constants["K" /* TRANSACTIONS */]] = transactions, _payload[constants["h" /* ERRORS */]] = errors, _payload);
    var filteredPayload = cfg.applyFilters(payload);

    if (!filteredPayload) {
      this._loggingService.warn('Dropped payload due to filtering!');

      return;
    }

    var apiVersion = cfg.get('apiVersion');
    var compress = apiVersion > 2;
    var ndjson = [];
    var metadata = this.createMetaData();
    var metadataKey = compress ? 'm' : 'metadata';
    ndjson.push(common_ndjson.stringify((_NDJSON$stringify3 = {}, _NDJSON$stringify3[metadataKey] = compress ? compressMetadata(metadata) : metadata, _NDJSON$stringify3)));
    ndjson = ndjson.concat(this.ndjsonErrors(filteredPayload[constants["h" /* ERRORS */]], compress), this.ndjsonTransactions(filteredPayload[constants["K" /* TRANSACTIONS */]], compress));
    var ndjsonPayload = ndjson.join('');
    var endPoint = cfg.get('serverUrl') + ("/intake/v" + apiVersion + "/rum/events");
    return this._postJson(endPoint, ndjsonPayload);
  };

  return ApmServer;
}();

/* harmony default export */ var apm_server = (apm_server_ApmServer);
// EXTERNAL MODULE: ./node_modules/@elastic/apm-rum-core/dist/es/common/event-handler.js
var event_handler = __webpack_require__(43);

// CONCATENATED MODULE: ./node_modules/@elastic/apm-rum-core/dist/es/common/config-service.js
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





function getConfigFromScript() {
  var script = Object(utils["e" /* getCurrentScript */])();
  var config = getDataAttributesFromNode(script);
  return config;
}

function getDataAttributesFromNode(node) {
  if (!node) {
    return {};
  }

  var dataAttrs = {};
  var dataRegex = /^data-([\w-]+)$/;
  var attrs = node.attributes;

  for (var i = 0; i < attrs.length; i++) {
    var attr = attrs[i];

    if (dataRegex.test(attr.nodeName)) {
      var key = attr.nodeName.match(dataRegex)[1];
      var camelCasedkey = key.split('-').map(function (value, index) {
        return index > 0 ? value.charAt(0).toUpperCase() + value.substring(1) : value;
      }).join('');
      dataAttrs[camelCasedkey] = attr.value || attr.nodeValue;
    }
  }

  return dataAttrs;
}

var config_service_Config = function () {
  function Config() {
    this.config = {
      serviceName: '',
      serviceVersion: '',
      environment: '',
      serverUrl: 'http://localhost:8200',
      active: true,
      instrument: true,
      disableInstrumentations: [],
      logLevel: 'warn',
      breakdownMetrics: false,
      ignoreTransactions: [],
      eventsLimit: 80,
      queueLimit: -1,
      flushInterval: 500,
      distributedTracing: true,
      distributedTracingOrigins: [],
      distributedTracingHeaderName: 'traceparent',
      pageLoadTraceId: '',
      pageLoadSpanId: '',
      pageLoadSampled: false,
      pageLoadTransactionName: '',
      propagateTracestate: false,
      transactionSampleRate: 1.0,
      centralConfig: false,
      monitorLongtasks: true,
      apiVersion: 2,
      context: {},
      session: false
    };
    this.events = new event_handler["a" /* default */]();
    this.filters = [];
    this.version = '';
  }

  var _proto = Config.prototype;

  _proto.init = function init() {
    var scriptData = getConfigFromScript();
    this.setConfig(scriptData);
  };

  _proto.setVersion = function setVersion(version) {
    this.version = version;
  };

  _proto.addFilter = function addFilter(cb) {
    if (typeof cb !== 'function') {
      throw new Error('Argument to must be function');
    }

    this.filters.push(cb);
  };

  _proto.applyFilters = function applyFilters(data) {
    for (var i = 0; i < this.filters.length; i++) {
      data = this.filters[i](data);

      if (!data) {
        return;
      }
    }

    return data;
  };

  _proto.get = function get(key) {
    return key.split('.').reduce(function (obj, objKey) {
      return obj && obj[objKey];
    }, this.config);
  };

  _proto.setUserContext = function setUserContext(userContext) {
    if (userContext === void 0) {
      userContext = {};
    }

    var context = {};
    var _userContext = userContext,
        id = _userContext.id,
        username = _userContext.username,
        email = _userContext.email;

    if (typeof id === 'number' || typeof id === 'string') {
      context.id = id;
    }

    if (typeof username === 'string') {
      context.username = username;
    }

    if (typeof email === 'string') {
      context.email = email;
    }

    this.config.context.user = Object(utils["c" /* extend */])(this.config.context.user || {}, context);
  };

  _proto.setCustomContext = function setCustomContext(customContext) {
    if (customContext === void 0) {
      customContext = {};
    }

    this.config.context.custom = Object(utils["c" /* extend */])(this.config.context.custom || {}, customContext);
  };

  _proto.addLabels = function addLabels(tags) {
    var _this = this;

    if (!this.config.context.tags) {
      this.config.context.tags = {};
    }

    var keys = Object.keys(tags);
    keys.forEach(function (k) {
      return Object(utils["y" /* setLabel */])(k, tags[k], _this.config.context.tags);
    });
  };

  _proto.setConfig = function setConfig(properties) {
    if (properties === void 0) {
      properties = {};
    }

    var _properties = properties,
        transactionSampleRate = _properties.transactionSampleRate,
        serverUrl = _properties.serverUrl;

    if (serverUrl) {
      properties.serverUrl = serverUrl.replace(/\/+$/, '');
    }

    if (!Object(utils["r" /* isUndefined */])(transactionSampleRate)) {
      if (transactionSampleRate < 0.0001 && transactionSampleRate > 0) {
        transactionSampleRate = 0.0001;
      }

      properties.transactionSampleRate = Math.round(transactionSampleRate * 10000) / 10000;
    }

    Object(utils["s" /* merge */])(this.config, properties);
    this.events.send(constants["e" /* CONFIG_CHANGE */], [this.config]);
  };

  _proto.validate = function validate(properties) {
    if (properties === void 0) {
      properties = {};
    }

    var requiredKeys = ['serviceName', 'serverUrl'];
    var errors = {
      missing: [],
      invalid: []
    };
    Object.keys(properties).forEach(function (key) {
      if (requiredKeys.indexOf(key) !== -1 && !properties[key]) {
        errors.missing.push(key);
      }
    });

    if (properties.serviceName && !/^[a-zA-Z0-9 _-]+$/.test(properties.serviceName)) {
      errors.invalid.push({
        key: 'serviceName',
        value: properties.serviceName,
        allowed: 'a-z, A-Z, 0-9, _, -, <space>'
      });
    }

    var sampleRate = properties.transactionSampleRate;

    if (typeof sampleRate !== 'undefined' && (typeof sampleRate !== 'number' || isNaN(sampleRate) || sampleRate < 0 || sampleRate > 1)) {
      errors.invalid.push({
        key: 'transactionSampleRate',
        value: sampleRate,
        allowed: 'Number between 0 and 1'
      });
    }

    return errors;
  };

  _proto.getLocalConfig = function getLocalConfig() {
    var storage = sessionStorage;

    if (this.config.session) {
      storage = localStorage;
    }

    var config = storage.getItem(constants["s" /* LOCAL_CONFIG_KEY */]);

    if (config) {
      return JSON.parse(config);
    }
  };

  _proto.setLocalConfig = function setLocalConfig(config, merge) {
    if (config) {
      if (merge) {
        var prevConfig = this.getLocalConfig();
        config = _extends({}, prevConfig, {}, config);
      }

      var storage = sessionStorage;

      if (this.config.session) {
        storage = localStorage;
      }

      storage.setItem(constants["s" /* LOCAL_CONFIG_KEY */], JSON.stringify(config));
    }
  };

  return Config;
}();

/* harmony default export */ var config_service = (config_service_Config);
// CONCATENATED MODULE: ./node_modules/@elastic/apm-rum-core/dist/es/common/logging-service.js


var logging_service_LoggingService = function () {
  function LoggingService(spec) {
    if (spec === void 0) {
      spec = {};
    }

    this.levels = ['trace', 'debug', 'info', 'warn', 'error'];
    this.level = spec.level || 'warn';
    this.prefix = spec.prefix || '';
    this.resetLogMethods();
  }

  var _proto = LoggingService.prototype;

  _proto.shouldLog = function shouldLog(level) {
    return this.levels.indexOf(level) >= this.levels.indexOf(this.level);
  };

  _proto.setLevel = function setLevel(level) {
    if (level === this.level) {
      return;
    }

    this.level = level;
    this.resetLogMethods();
  };

  _proto.resetLogMethods = function resetLogMethods() {
    var _this = this;

    this.levels.forEach(function (level) {
      _this[level] = _this.shouldLog(level) ? log : utils["t" /* noop */];

      function log() {
        var normalizedLevel = level;

        if (level === 'trace' || level === 'debug') {
          normalizedLevel = 'info';
        }

        var args = arguments;
        args[0] = this.prefix + args[0];

        if (console) {
          var realMethod = console[normalizedLevel] || console.log;

          if (typeof realMethod === 'function') {
            realMethod.apply(console, args);
          }
        }
      }
    });
  };

  return LoggingService;
}();

/* harmony default export */ var logging_service = (logging_service_LoggingService);
// CONCATENATED MODULE: ./node_modules/@elastic/apm-rum-core/dist/es/common/service-factory.js
var _serviceCreators;






var serviceCreators = (_serviceCreators = {}, _serviceCreators[constants["f" /* CONFIG_SERVICE */]] = function () {
  return new config_service();
}, _serviceCreators[constants["t" /* LOGGING_SERVICE */]] = function () {
  return new logging_service({
    prefix: '[Elastic APM] '
  });
}, _serviceCreators[constants["c" /* APM_SERVER */]] = function (factory) {
  var _factory$getService = factory.getService([constants["f" /* CONFIG_SERVICE */], constants["t" /* LOGGING_SERVICE */]]),
      configService = _factory$getService[0],
      loggingService = _factory$getService[1];

  return new apm_server(configService, loggingService);
}, _serviceCreators);

var service_factory_ServiceFactory = function () {
  function ServiceFactory() {
    this.instances = {};
    this.initialized = false;
  }

  var _proto = ServiceFactory.prototype;

  _proto.init = function init() {
    if (this.initialized) {
      return;
    }

    this.initialized = true;
    var configService = this.getService(constants["f" /* CONFIG_SERVICE */]);
    configService.init();

    var _this$getService = this.getService([constants["t" /* LOGGING_SERVICE */], constants["c" /* APM_SERVER */]]),
        loggingService = _this$getService[0],
        apmServer = _this$getService[1];

    configService.events.observe(constants["e" /* CONFIG_CHANGE */], function () {
      var logLevel = configService.get('logLevel');
      loggingService.setLevel(logLevel);
    });
    apmServer.init();
  };

  _proto.getService = function getService(name) {
    var _this = this;

    if (typeof name === 'string') {
      if (!this.instances[name]) {
        if (typeof serviceCreators[name] === 'function') {
          this.instances[name] = serviceCreators[name](this);
        } else if (state["a" /* __DEV__ */]) {
          console.log('Cannot get service, No creator for: ' + name);
        }
      }

      return this.instances[name];
    } else if (Array.isArray(name)) {
      return name.map(function (n) {
        return _this.getService(n);
      });
    }
  };

  return ServiceFactory;
}();


// CONCATENATED MODULE: ./node_modules/@elastic/apm-rum-core/dist/es/error-logging/index.js




function registerServices() {
  serviceCreators['ErrorLogging'] = function (serviceFactory) {
    var _serviceFactory$getSe = serviceFactory.getService([constants["c" /* APM_SERVER */], constants["f" /* CONFIG_SERVICE */], 'TransactionService']),
        apmServer = _serviceFactory$getSe[0],
        configService = _serviceFactory$getSe[1],
        transactionService = _serviceFactory$getSe[2];

    return new error_logging(apmServer, configService, transactionService);
  };
}


// EXTERNAL MODULE: ./node_modules/@elastic/apm-rum-core/dist/es/common/patching/index.js + 4 modules
var patching = __webpack_require__(22);

// CONCATENATED MODULE: ./node_modules/@elastic/apm-rum-core/dist/es/performance-monitoring/performance-monitoring.js







var SIMILAR_SPAN_TO_TRANSACTION_RATIO = 0.05;
var TRANSACTION_DURATION_THRESHOLD = 60000;
function groupSmallContinuouslySimilarSpans(originalSpans, transDuration, threshold) {
  originalSpans.sort(function (spanA, spanB) {
    return spanA._start - spanB._start;
  });
  var spans = [];
  var lastCount = 1;
  originalSpans.forEach(function (span, index) {
    if (spans.length === 0) {
      spans.push(span);
    } else {
      var lastSpan = spans[spans.length - 1];
      var isContinuouslySimilar = lastSpan.type === span.type && lastSpan.subtype === span.subtype && lastSpan.action === span.action && lastSpan.name === span.name && span.duration() / transDuration < threshold && (span._start - lastSpan._end) / transDuration < threshold;
      var isLastSpan = originalSpans.length === index + 1;

      if (isContinuouslySimilar) {
        lastCount++;
        lastSpan._end = span._end;
      }

      if (lastCount > 1 && (!isContinuouslySimilar || isLastSpan)) {
        lastSpan.name = lastCount + 'x ' + lastSpan.name;
        lastCount = 1;
      }

      if (!isContinuouslySimilar) {
        spans.push(span);
      }
    }
  });
  return spans;
}
function adjustTransaction(transaction) {
  if (transaction.sampled) {
    var filterdSpans = transaction.spans.filter(function (span) {
      return span.duration() > 0 && span._start >= transaction._start && span._end <= transaction._end;
    });

    if (transaction.isManaged()) {
      var duration = transaction.duration();
      var similarSpans = groupSmallContinuouslySimilarSpans(filterdSpans, duration, SIMILAR_SPAN_TO_TRANSACTION_RATIO);
      transaction.spans = similarSpans;
    } else {
      transaction.spans = filterdSpans;
    }
  } else {
    transaction.resetFields();
  }

  return transaction;
}

var performance_monitoring_PerformanceMonitoring = function () {
  function PerformanceMonitoring(apmServer, configService, loggingService, transactionService) {
    this._apmServer = apmServer;
    this._configService = configService;
    this._logginService = loggingService;
    this._transactionService = transactionService;
  }

  var _proto = PerformanceMonitoring.prototype;

  _proto.init = function init(flags) {
    var _this = this;

    if (flags === void 0) {
      flags = {};
    }

    this._configService.events.observe(constants["L" /* TRANSACTION_END */] + constants["b" /* AFTER_EVENT */], function (tr) {
      var payload = _this.createTransactionPayload(tr);

      if (payload) {
        _this._apmServer.addTransaction(payload);
      }
    });

    if (flags[constants["m" /* HISTORY */]]) {
      patching["b" /* patchEventHandler */].observe(constants["m" /* HISTORY */], this.getHistorySub());
    }

    if (flags[constants["S" /* XMLHTTPREQUEST */]]) {
      patching["b" /* patchEventHandler */].observe(constants["S" /* XMLHTTPREQUEST */], this.getXHRSub());
    }

    if (flags[constants["j" /* FETCH */]]) {
      patching["b" /* patchEventHandler */].observe(constants["j" /* FETCH */], this.getFetchSub());
    }

    if (flags[constants["i" /* EVENT_TARGET */]]) {
      patching["b" /* patchEventHandler */].observe(constants["i" /* EVENT_TARGET */], this.getEventTargetSub());
    }
  };

  _proto.getEventTargetSub = function getEventTargetSub() {
    var transactionService = this._transactionService;
    return function (event, task) {
      if (event === constants["H" /* SCHEDULE */] && task.source === constants["i" /* EVENT_TARGET */] && task.eventType === 'click') {
        var target = task.target;
        var name = target.getAttribute('name');
        var additionalInfo = '';

        if (name) {
          additionalInfo = "[\"" + name + "\"]";
        }

        var tagName = target.tagName.toLowerCase();
        var tr = transactionService.startTransaction("Click - " + tagName + additionalInfo, constants["Q" /* USER_INTERACTION */], {
          managed: true,
          canReuse: true,
          reuseThreshold: 100
        });

        if (tr) {
          var classes = target.getAttribute('class');

          if (classes) {
            tr.addContext({
              custom: {
                classes: classes
              }
            });
          }
        }
      }
    };
  };

  _proto.getHistorySub = function getHistorySub() {
    var transactionService = this._transactionService;
    return function (event, task) {
      if (task.source === constants["m" /* HISTORY */] && event === constants["o" /* INVOKE */]) {
        transactionService.startTransaction(task.data.title, 'route-change', {
          managed: true,
          canReuse: true
        });
      }
    };
  };

  _proto.getXHRSub = function getXHRSub() {
    var _this2 = this;

    return function (event, task) {
      if (task.source === constants["S" /* XMLHTTPREQUEST */] && !patch_utils["f" /* globalState */].fetchInProgress) {
        _this2.processAPICalls(event, task);
      }
    };
  };

  _proto.getFetchSub = function getFetchSub() {
    var _this3 = this;

    return function (event, task) {
      if (task.source === constants["j" /* FETCH */]) {
        _this3.processAPICalls(event, task);
      }
    };
  };

  _proto.processAPICalls = function processAPICalls(event, task) {
    var configService = this._configService;
    var transactionService = this._transactionService;

    if (event === constants["H" /* SCHEDULE */] && task.data) {
      var data = task.data;
      var requestUrl = new url_Url(data.url);
      var spanName = data.method + ' ' + (requestUrl.relative ? requestUrl.path : Object(utils["A" /* stripQueryStringFromUrl */])(requestUrl.href));

      if (!transactionService.getCurrentTransaction()) {
        transactionService.startTransaction(spanName, constants["n" /* HTTP_REQUEST_TYPE */], {
          managed: true
        });
      }

      var span = transactionService.startSpan(spanName, 'external.http', {
        blocking: true
      });

      if (!span) {
        return;
      }

      var isDtEnabled = configService.get('distributedTracing');
      var dtOrigins = configService.get('distributedTracingOrigins');
      var currentUrl = new url_Url(window.location.href);
      var isSameOrigin = Object(utils["b" /* checkSameOrigin */])(requestUrl.origin, currentUrl.origin) || Object(utils["b" /* checkSameOrigin */])(requestUrl.origin, dtOrigins);
      var target = data.target;

      if (isDtEnabled && isSameOrigin && target) {
        this.injectDtHeader(span, target);
        var propagateTracestate = configService.get('propagateTracestate');

        if (propagateTracestate) {
          this.injectTSHeader(span, target);
        }
      } else if (state["a" /* __DEV__ */]) {
        this._logginService.debug("Could not inject distributed tracing header to the request origin ('" + requestUrl.origin + "') from the current origin ('" + currentUrl.origin + "')");
      }

      if (data.sync) {
        span.sync = data.sync;
      }

      data.span = span;
    } else if (event === constants["o" /* INVOKE */]) {
      var _data = task.data;

      if (_data && _data.span) {
        var _span = _data.span,
            response = _data.response,
            _target = _data.target;
        var status;

        if (response) {
          status = response.status;
        } else {
          status = _target.status;
        }

        var outcome;

        if (_data.status != 'abort') {
          if (status >= 400 || status == 0) {
            outcome = constants["z" /* OUTCOME_FAILURE */];
          } else {
            outcome = constants["A" /* OUTCOME_SUCCESS */];
          }
        }

        _span.outcome = outcome;
        var tr = transactionService.getCurrentTransaction();

        if (tr && tr.type === constants["n" /* HTTP_REQUEST_TYPE */]) {
          tr.outcome = outcome;
        }

        transactionService.endSpan(_span, _data);
      }
    }
  };

  _proto.injectDtHeader = function injectDtHeader(span, target) {
    var headerName = this._configService.get('distributedTracingHeaderName');

    var headerValue = Object(utils["f" /* getDtHeaderValue */])(span);
    var isHeaderValid = Object(utils["n" /* isDtHeaderValid */])(headerValue);

    if (isHeaderValid && headerValue && headerName) {
      Object(utils["z" /* setRequestHeader */])(target, headerName, headerValue);
    }
  };

  _proto.injectTSHeader = function injectTSHeader(span, target) {
    var headerValue = Object(utils["k" /* getTSHeaderValue */])(span);

    if (headerValue) {
      Object(utils["z" /* setRequestHeader */])(target, 'tracestate', headerValue);
    }
  };

  _proto.extractDtHeader = function extractDtHeader(target) {
    var configService = this._configService;
    var headerName = configService.get('distributedTracingHeaderName');

    if (target) {
      return Object(utils["v" /* parseDtHeaderValue */])(target[headerName]);
    }
  };

  _proto.filterTransaction = function filterTransaction(tr) {
    var duration = tr.duration();

    if (!duration) {
      if (state["a" /* __DEV__ */]) {
        var message = "transaction(" + tr.id + ", " + tr.name + ") was discarded! ";

        if (duration === 0) {
          message += "Transaction duration is 0";
        } else {
          message += "Transaction wasn't ended";
        }

        this._logginService.debug(message);
      }

      return false;
    }

    if (tr.isManaged()) {
      if (duration > TRANSACTION_DURATION_THRESHOLD) {
        if (state["a" /* __DEV__ */]) {
          this._logginService.debug("transaction(" + tr.id + ", " + tr.name + ") was discarded! Transaction duration (" + duration + ") is greater than managed transaction threshold (" + TRANSACTION_DURATION_THRESHOLD + ")");
        }

        return false;
      }

      if (tr.sampled && tr.spans.length === 0) {
        if (state["a" /* __DEV__ */]) {
          this._logginService.debug("transaction(" + tr.id + ", " + tr.name + ") was discarded! Transaction does not have any spans");
        }

        return false;
      }
    }

    return true;
  };

  _proto.createTransactionDataModel = function createTransactionDataModel(transaction) {
    var transactionStart = transaction._start;
    var spans = transaction.spans.map(function (span) {
      var spanData = {
        id: span.id,
        transaction_id: transaction.id,
        parent_id: span.parentId || transaction.id,
        trace_id: transaction.traceId,
        name: span.name,
        type: span.type,
        subtype: span.subtype,
        action: span.action,
        sync: span.sync,
        start: parseInt(span._start - transactionStart),
        duration: span.duration(),
        context: span.context,
        outcome: span.outcome,
        sample_rate: span.sampleRate
      };
      return truncateModel(SPAN_MODEL, spanData);
    });
    var transactionData = {
      id: transaction.id,
      trace_id: transaction.traceId,
      session: transaction.session,
      name: transaction.name,
      type: transaction.type,
      duration: transaction.duration(),
      spans: spans,
      context: transaction.context,
      marks: transaction.marks,
      breakdown: transaction.breakdownTimings,
      span_count: {
        started: spans.length
      },
      sampled: transaction.sampled,
      sample_rate: transaction.sampleRate,
      experience: transaction.experience,
      outcome: transaction.outcome
    };
    return truncateModel(TRANSACTION_MODEL, transactionData);
  };

  _proto.createTransactionPayload = function createTransactionPayload(transaction) {
    var adjustedTransaction = adjustTransaction(transaction);
    var filtered = this.filterTransaction(adjustedTransaction);

    if (filtered) {
      return this.createTransactionDataModel(transaction);
    }
  };

  return PerformanceMonitoring;
}();


// CONCATENATED MODULE: ./node_modules/@elastic/apm-rum-core/dist/es/performance-monitoring/breakdown.js


var pageLoadBreakdowns = [['domainLookupStart', 'domainLookupEnd', 'DNS'], ['connectStart', 'connectEnd', 'TCP'], ['requestStart', 'responseStart', 'Request'], ['responseStart', 'responseEnd', 'Response'], ['domLoading', 'domComplete', 'Processing'], ['loadEventStart', 'loadEventEnd', 'Load']];

function getValue(value) {
  return {
    value: value
  };
}

function calculateSelfTime(transaction) {
  var spans = transaction.spans,
      _start = transaction._start,
      _end = transaction._end;

  if (spans.length === 0) {
    return transaction.duration();
  }

  spans.sort(function (span1, span2) {
    return span1._start - span2._start;
  });
  var span = spans[0];
  var spanEnd = span._end;
  var spanStart = span._start;
  var lastContinuousEnd = spanEnd;
  var selfTime = spanStart - _start;

  for (var i = 1; i < spans.length; i++) {
    span = spans[i];
    spanStart = span._start;
    spanEnd = span._end;

    if (spanStart > lastContinuousEnd) {
      selfTime += spanStart - lastContinuousEnd;
      lastContinuousEnd = spanEnd;
    } else if (spanEnd > lastContinuousEnd) {
      lastContinuousEnd = spanEnd;
    }
  }

  if (lastContinuousEnd < _end) {
    selfTime += _end - lastContinuousEnd;
  }

  return selfTime;
}

function groupSpans(transaction) {
  var spanMap = {};
  var transactionSelfTime = calculateSelfTime(transaction);
  spanMap['app'] = {
    count: 1,
    duration: transactionSelfTime
  };
  var spans = transaction.spans;

  for (var i = 0; i < spans.length; i++) {
    var span = spans[i];
    var duration = span.duration();

    if (duration === 0 || duration == null) {
      continue;
    }

    var type = span.type,
        subtype = span.subtype;
    var key = type.replace(constants["O" /* TRUNCATED_TYPE */], '');

    if (subtype) {
      key += '.' + subtype;
    }

    if (!spanMap[key]) {
      spanMap[key] = {
        duration: 0,
        count: 0
      };
    }

    spanMap[key].count++;
    spanMap[key].duration += duration;
  }

  return spanMap;
}

function getSpanBreakdown(transactionDetails, _ref) {
  var details = _ref.details,
      _ref$count = _ref.count,
      count = _ref$count === void 0 ? 1 : _ref$count,
      duration = _ref.duration;
  return {
    transaction: transactionDetails,
    span: details,
    samples: {
      'span.self_time.count': getValue(count),
      'span.self_time.sum.us': getValue(duration)
    }
  };
}

function breakdown_captureBreakdown(transaction, timings) {
  if (timings === void 0) {
    timings = utils["a" /* PERF */].timing;
  }

  var breakdowns = [];
  var trDuration = transaction.duration();
  var name = transaction.name,
      type = transaction.type,
      sampled = transaction.sampled;
  var transactionDetails = {
    name: name,
    type: type
  };
  breakdowns.push({
    transaction: transactionDetails,
    samples: {
      'transaction.duration.count': getValue(1),
      'transaction.duration.sum.us': getValue(trDuration),
      'transaction.breakdown.count': getValue(sampled ? 1 : 0)
    }
  });

  if (!sampled) {
    return breakdowns;
  }

  if (type === constants["B" /* PAGE_LOAD */] && timings) {
    for (var i = 0; i < pageLoadBreakdowns.length; i++) {
      var current = pageLoadBreakdowns[i];
      var start = timings[current[0]];
      var end = timings[current[1]];
      var duration = Object(utils["g" /* getDuration */])(start, end);

      if (duration === 0 || duration == null) {
        continue;
      }

      breakdowns.push(getSpanBreakdown(transactionDetails, {
        details: {
          type: current[2]
        },
        duration: duration
      }));
    }
  } else {
    var spanMap = groupSpans(transaction);
    Object.keys(spanMap).forEach(function (key) {
      var _key$split = key.split('.'),
          type = _key$split[0],
          subtype = _key$split[1];

      var _spanMap$key = spanMap[key],
          duration = _spanMap$key.duration,
          count = _spanMap$key.count;
      breakdowns.push(getSpanBreakdown(transactionDetails, {
        details: {
          type: type,
          subtype: subtype
        },
        duration: duration,
        count: count
      }));
    });
  }

  return breakdowns;
}
// CONCATENATED MODULE: ./node_modules/@elastic/apm-rum-core/dist/es/performance-monitoring/transaction.js
function transaction_inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }







var transaction_Transaction = function (_SpanBase) {
  transaction_inheritsLoose(Transaction, _SpanBase);

  function Transaction(name, type, options) {
    var _this;

    _this = _SpanBase.call(this, name, type, options) || this;
    _this.traceId = Object(utils["d" /* generateRandomId */])();
    _this.marks = undefined;
    _this.spans = [];
    _this._activeSpans = {};
    _this._activeTasks = new Set();
    _this.blocked = false;
    _this.captureTimings = false;
    _this.breakdownTimings = [];
    _this.sampleRate = _this.options.transactionSampleRate;
    _this.sampled = Math.random() <= _this.sampleRate;
    return _this;
  }

  var _proto = Transaction.prototype;

  _proto.addMarks = function addMarks(obj) {
    this.marks = Object(utils["s" /* merge */])(this.marks || {}, obj);
  };

  _proto.mark = function mark(key) {
    var skey = Object(utils["w" /* removeInvalidChars */])(key);

    var markTime = Object(utils["u" /* now */])() - this._start;

    var custom = {};
    custom[skey] = markTime;
    this.addMarks({
      custom: custom
    });
  };

  _proto.canReuse = function canReuse() {
    var threshold = this.options.reuseThreshold || constants["G" /* REUSABILITY_THRESHOLD */];
    return !!this.options.canReuse && !this.ended && Object(utils["u" /* now */])() - this._start < threshold;
  };

  _proto.redefine = function redefine(name, type, options) {
    if (name) {
      this.name = name;
    }

    if (type) {
      this.type = type;
    }

    if (options) {
      Object(utils["c" /* extend */])(this.options, options);
    }
  };

  _proto.startSpan = function startSpan(name, type, options) {
    var _this2 = this;

    if (this.ended) {
      return;
    }

    var opts = Object(utils["c" /* extend */])({}, options);

    opts.onEnd = function (trc) {
      _this2._onSpanEnd(trc);
    };

    opts.traceId = this.traceId;
    opts.sampled = this.sampled;
    opts.sampleRate = this.sampleRate;

    if (!opts.parentId) {
      opts.parentId = this.id;
    }

    var span = new performance_monitoring_span(name, type, opts);
    this._activeSpans[span.id] = span;

    if (opts.blocking) {
      this.addTask(span.id);
    }

    return span;
  };

  _proto.isFinished = function isFinished() {
    return !this.blocked && this._activeTasks.size === 0;
  };

  _proto.detectFinish = function detectFinish() {
    if (this.isFinished()) this.end();
  };

  _proto.end = function end(endTime) {
    if (this.ended) {
      return;
    }

    this.ended = true;
    this._end = Object(utils["l" /* getTime */])(endTime);

    for (var sid in this._activeSpans) {
      var span = this._activeSpans[sid];
      span.type = span.type + constants["O" /* TRUNCATED_TYPE */];
      span.end(endTime);
    }

    this.callOnEnd();
  };

  _proto.captureBreakdown = function captureBreakdown() {
    this.breakdownTimings = breakdown_captureBreakdown(this);
  };

  _proto.block = function block(flag) {
    this.blocked = flag;

    if (!this.blocked) {
      this.detectFinish();
    }
  };

  _proto.addTask = function addTask(taskId) {
    if (!taskId) {
      taskId = 'task-' + Object(utils["d" /* generateRandomId */])(16);
    }

    this._activeTasks.add(taskId);

    return taskId;
  };

  _proto.removeTask = function removeTask(taskId) {
    var deleted = this._activeTasks.delete(taskId);

    deleted && this.detectFinish();
  };

  _proto.resetFields = function resetFields() {
    this.spans = [];
    this.sampleRate = 0;
  };

  _proto._onSpanEnd = function _onSpanEnd(span) {
    this.spans.push(span);
    delete this._activeSpans[span.id];
    this.removeTask(span.id);
  };

  _proto.isManaged = function isManaged() {
    return !!this.options.managed;
  };

  return Transaction;
}(span_base);

/* harmony default export */ var performance_monitoring_transaction = (transaction_Transaction);
// CONCATENATED MODULE: ./node_modules/@elastic/apm-rum-core/dist/es/performance-monitoring/metrics.js



var metrics = {
  fid: 0,
  fcp: 0,
  tbt: {
    start: Infinity,
    duration: 0
  },
  cls: 0,
  longtask: {
    count: 0,
    duration: 0,
    max: 0
  }
};
var LONG_TASK_THRESHOLD = 50;
function createLongTaskSpans(longtasks, agg) {
  var spans = [];

  for (var i = 0; i < longtasks.length; i++) {
    var _longtasks$i = longtasks[i],
        name = _longtasks$i.name,
        startTime = _longtasks$i.startTime,
        duration = _longtasks$i.duration,
        attribution = _longtasks$i.attribution;
    var end = startTime + duration;
    var span = new performance_monitoring_span("Longtask(" + name + ")", constants["u" /* LONG_TASK */], {
      startTime: startTime
    });
    agg.count++;
    agg.duration += duration;
    agg.max = Math.max(duration, agg.max);

    if (attribution.length > 0) {
      var _attribution$ = attribution[0],
          _name = _attribution$.name,
          containerType = _attribution$.containerType,
          containerName = _attribution$.containerName,
          containerId = _attribution$.containerId;
      var customContext = {
        attribution: _name,
        type: containerType
      };

      if (containerName) {
        customContext.name = containerName;
      }

      if (containerId) {
        customContext.id = containerId;
      }

      span.addContext({
        custom: customContext
      });
    }

    span.end(end);
    spans.push(span);
  }

  return spans;
}
function createFirstInputDelaySpan(fidEntries) {
  var firstInput = fidEntries[0];

  if (firstInput) {
    var startTime = firstInput.startTime,
        processingStart = firstInput.processingStart;
    var span = new performance_monitoring_span('First Input Delay', constants["l" /* FIRST_INPUT */], {
      startTime: startTime
    });
    span.end(processingStart);
    return span;
  }
}
function createTotalBlockingTimeSpan(tbtObject) {
  var start = tbtObject.start,
      duration = tbtObject.duration;
  var tbtSpan = new performance_monitoring_span('Total Blocking Time', constants["u" /* LONG_TASK */], {
    startTime: start
  });
  tbtSpan.end(start + duration);
  return tbtSpan;
}
function calculateTotalBlockingTime(longtaskEntries) {
  longtaskEntries.forEach(function (entry) {
    var name = entry.name,
        startTime = entry.startTime,
        duration = entry.duration;

    if (startTime < metrics.fcp) {
      return;
    }

    if (name !== 'self' && name.indexOf('same-origin') === -1) {
      return;
    }

    metrics.tbt.start = Math.min(metrics.tbt.start, startTime);
    var blockingTime = duration - LONG_TASK_THRESHOLD;

    if (blockingTime > 0) {
      metrics.tbt.duration += blockingTime;
    }
  });
}
function calculateCumulativeLayoutShift(clsEntries) {
  clsEntries.forEach(function (entry) {
    if (!entry.hadRecentInput && entry.value) {
      metrics.cls += entry.value;
    }
  });
}
function captureObserverEntries(list, _ref) {
  var isHardNavigation = _ref.isHardNavigation,
      trStart = _ref.trStart;
  var longtaskEntries = list.getEntriesByType(constants["u" /* LONG_TASK */]).filter(function (entry) {
    return entry.startTime >= trStart;
  });
  var longTaskSpans = createLongTaskSpans(longtaskEntries, metrics.longtask);
  var result = {
    spans: longTaskSpans,
    marks: {}
  };

  if (!isHardNavigation) {
    return result;
  }

  var lcpEntries = list.getEntriesByType(constants["q" /* LARGEST_CONTENTFUL_PAINT */]);
  var lastLcpEntry = lcpEntries[lcpEntries.length - 1];

  if (lastLcpEntry) {
    var lcp = parseInt(lastLcpEntry.startTime);
    metrics.lcp = lcp;
    result.marks.largestContentfulPaint = lcp;
  }

  var timing = utils["a" /* PERF */].timing;
  var unloadDiff = timing.fetchStart - timing.navigationStart;
  var fcpEntry = list.getEntriesByName(constants["k" /* FIRST_CONTENTFUL_PAINT */])[0];

  if (fcpEntry) {
    var fcp = parseInt(unloadDiff >= 0 ? fcpEntry.startTime - unloadDiff : fcpEntry.startTime);
    metrics.fcp = fcp;
    result.marks.firstContentfulPaint = fcp;
  }

  var fidEntries = list.getEntriesByType(constants["l" /* FIRST_INPUT */]);
  var fidSpan = createFirstInputDelaySpan(fidEntries);

  if (fidSpan) {
    metrics.fid = fidSpan.duration();
    result.spans.push(fidSpan);
  }

  calculateTotalBlockingTime(longtaskEntries);
  var clsEntries = list.getEntriesByType(constants["r" /* LAYOUT_SHIFT */]);
  calculateCumulativeLayoutShift(clsEntries);
  return result;
}
var metrics_PerfEntryRecorder = function () {
  function PerfEntryRecorder(callback) {
    this.po = {
      observe: utils["t" /* noop */],
      disconnect: utils["t" /* noop */]
    };

    if (window.PerformanceObserver) {
      this.po = new PerformanceObserver(callback);
    }
  }

  var _proto = PerfEntryRecorder.prototype;

  _proto.start = function start(type) {
    try {
      this.po.observe({
        type: type,
        buffered: true
      });
    } catch (_) {}
  };

  _proto.stop = function stop() {
    this.po.disconnect();
  };

  return PerfEntryRecorder;
}();
// CONCATENATED MODULE: ./node_modules/@elastic/apm-rum-core/dist/es/performance-monitoring/transaction-service.js










var transaction_service_TransactionService = function () {
  function TransactionService(logger, config) {
    var _this = this;

    this._config = config;
    this._logger = logger;
    this.currentTransaction = undefined;
    this.respIntervalId = undefined;
    this.recorder = new metrics_PerfEntryRecorder(function (list) {
      var tr = _this.getCurrentTransaction();

      if (tr && tr.captureTimings) {
        var _tr$spans;

        var isHardNavigation = tr.type === constants["B" /* PAGE_LOAD */];

        var _captureObserverEntri = captureObserverEntries(list, {
          isHardNavigation: isHardNavigation,
          trStart: isHardNavigation ? 0 : tr._start
        }),
            spans = _captureObserverEntri.spans,
            marks = _captureObserverEntri.marks;

        (_tr$spans = tr.spans).push.apply(_tr$spans, spans);

        tr.addMarks({
          agent: marks
        });
      }
    });
  }

  var _proto = TransactionService.prototype;

  _proto.createCurrentTransaction = function createCurrentTransaction(name, type, options) {
    var tr = new performance_monitoring_transaction(name, type, options);
    this.currentTransaction = tr;
    return tr;
  };

  _proto.getCurrentTransaction = function getCurrentTransaction() {
    if (this.currentTransaction && !this.currentTransaction.ended) {
      return this.currentTransaction;
    }
  };

  _proto.createOptions = function createOptions(options) {
    var config = this._config.config;
    var presetOptions = {
      transactionSampleRate: config.transactionSampleRate
    };
    var perfOptions = Object(utils["c" /* extend */])(presetOptions, options);

    if (perfOptions.managed) {
      perfOptions = Object(utils["c" /* extend */])({
        pageLoadTraceId: config.pageLoadTraceId,
        pageLoadSampled: config.pageLoadSampled,
        pageLoadSpanId: config.pageLoadSpanId,
        pageLoadTransactionName: config.pageLoadTransactionName
      }, perfOptions);
    }

    return perfOptions;
  };

  _proto.startManagedTransaction = function startManagedTransaction(name, type, perfOptions) {
    var tr = this.getCurrentTransaction();
    var isRedefined = false;

    if (!tr) {
      tr = this.createCurrentTransaction(name, type, perfOptions);
    } else if (tr.canReuse() && perfOptions.canReuse) {
      var redefineType = tr.type;
      var currentTypeOrder = constants["N" /* TRANSACTION_TYPE_ORDER */].indexOf(tr.type);
      var redefineTypeOrder = constants["N" /* TRANSACTION_TYPE_ORDER */].indexOf(type);

      if (currentTypeOrder >= 0 && redefineTypeOrder < currentTypeOrder) {
        redefineType = type;
      }

      if (state["a" /* __DEV__ */]) {
        this._logger.debug("redefining transaction(" + tr.id + ", " + tr.name + ", " + tr.type + ")", 'to', "(" + (name || tr.name) + ", " + redefineType + ")", tr);
      }

      tr.redefine(name, redefineType, perfOptions);
      isRedefined = true;
    } else {
      if (state["a" /* __DEV__ */]) {
        this._logger.debug("ending previous transaction(" + tr.id + ", " + tr.name + ")", tr);
      }

      tr.end();
      tr = this.createCurrentTransaction(name, type, perfOptions);
    }

    if (tr.type === constants["B" /* PAGE_LOAD */]) {
      if (!isRedefined) {
        this.recorder.start(constants["q" /* LARGEST_CONTENTFUL_PAINT */]);
        this.recorder.start(constants["C" /* PAINT */]);
        this.recorder.start(constants["l" /* FIRST_INPUT */]);
        this.recorder.start(constants["r" /* LAYOUT_SHIFT */]);
      }

      if (perfOptions.pageLoadTraceId) {
        tr.traceId = perfOptions.pageLoadTraceId;
      }

      if (perfOptions.pageLoadSampled) {
        tr.sampled = perfOptions.pageLoadSampled;
      }

      if (tr.name === constants["x" /* NAME_UNKNOWN */] && perfOptions.pageLoadTransactionName) {
        tr.name = perfOptions.pageLoadTransactionName;
      }
    }

    if (!isRedefined && this._config.get('monitorLongtasks')) {
      this.recorder.start(constants["u" /* LONG_TASK */]);
    }

    if (tr.sampled) {
      tr.captureTimings = true;
    }

    return tr;
  };

  _proto.startTransaction = function startTransaction(name, type, options) {
    var _this2 = this;

    var perfOptions = this.createOptions(options);
    var tr;
    var fireOnstartHook = true;

    if (perfOptions.managed) {
      var current = this.currentTransaction;
      tr = this.startManagedTransaction(name, type, perfOptions);

      if (current === tr) {
        fireOnstartHook = false;
      }
    } else {
      tr = new performance_monitoring_transaction(name, type, perfOptions);
    }

    tr.onEnd = function () {
      return _this2.handleTransactionEnd(tr);
    };

    if (fireOnstartHook) {
      if (state["a" /* __DEV__ */]) {
        this._logger.debug("startTransaction(" + tr.id + ", " + tr.name + ", " + tr.type + ")");
      }

      this._config.events.send(constants["M" /* TRANSACTION_START */], [tr]);
    }

    return tr;
  };

  _proto.handleTransactionEnd = function handleTransactionEnd(tr) {
    var _this3 = this;

    this.recorder.stop();
    var currentUrl = window.location.href;
    return polyfills["a" /* Promise */].resolve().then(function () {
      var name = tr.name,
          type = tr.type;
      var lastHiddenStart = state["b" /* state */].lastHiddenStart;

      if (lastHiddenStart >= tr._start) {
        if (state["a" /* __DEV__ */]) {
          _this3._logger.debug("transaction(" + tr.id + ", " + name + ", " + type + ") was discarded! The page was hidden during the transaction!");
        }

        return;
      }

      if (_this3.shouldIgnoreTransaction(name) || type === constants["J" /* TEMPORARY_TYPE */]) {
        if (state["a" /* __DEV__ */]) {
          _this3._logger.debug("transaction(" + tr.id + ", " + name + ", " + type + ") is ignored");
        }

        return;
      }

      if (type === constants["B" /* PAGE_LOAD */]) {
        var pageLoadTransactionName = _this3._config.get('pageLoadTransactionName');

        if (name === constants["x" /* NAME_UNKNOWN */] && pageLoadTransactionName) {
          tr.name = pageLoadTransactionName;
        }

        if (tr.captureTimings) {
          var cls = metrics.cls,
              fid = metrics.fid,
              tbt = metrics.tbt,
              longtask = metrics.longtask;

          if (tbt.duration > 0) {
            tr.spans.push(createTotalBlockingTimeSpan(tbt));
          }

          tr.experience = {};

          if (Object(utils["p" /* isPerfTypeSupported */])(constants["u" /* LONG_TASK */])) {
            tr.experience.tbt = tbt.duration;
          }

          if (Object(utils["p" /* isPerfTypeSupported */])(constants["r" /* LAYOUT_SHIFT */])) {
            tr.experience.cls = cls;
          }

          if (fid > 0) {
            tr.experience.fid = fid;
          }

          if (longtask.count > 0) {
            tr.experience.longtask = {
              count: longtask.count,
              sum: longtask.duration,
              max: longtask.max
            };
          }
        }

        _this3.setSession(tr);
      }

      if (tr.name === constants["x" /* NAME_UNKNOWN */]) {
        tr.name = slugifyUrl(currentUrl);
      }

      captureNavigation(tr);

      _this3.adjustTransactionTime(tr);

      var breakdownMetrics = _this3._config.get('breakdownMetrics');

      if (breakdownMetrics) {
        tr.captureBreakdown();
      }

      var configContext = _this3._config.get('context');

      addTransactionContext(tr, configContext);

      _this3._config.events.send(constants["L" /* TRANSACTION_END */], [tr]);

      if (state["a" /* __DEV__ */]) {
        _this3._logger.debug("end transaction(" + tr.id + ", " + tr.name + ", " + tr.type + ")", tr);
      }
    }, function (err) {
      if (state["a" /* __DEV__ */]) {
        _this3._logger.debug("error ending transaction(" + tr.id + ", " + tr.name + ")", err);
      }
    });
  };

  _proto.setSession = function setSession(tr) {
    var session = this._config.get('session');

    if (session) {
      if (typeof session == 'boolean') {
        tr.session = {
          id: Object(utils["d" /* generateRandomId */])(16),
          sequence: 1
        };
      } else {
        if (session.timestamp && Date.now() - session.timestamp > constants["I" /* SESSION_TIMEOUT */]) {
          tr.session = {
            id: Object(utils["d" /* generateRandomId */])(16),
            sequence: 1
          };
        } else {
          tr.session = {
            id: session.id,
            sequence: session.sequence ? session.sequence + 1 : 1
          };
        }
      }

      var sessionConfig = {
        session: {
          id: tr.session.id,
          sequence: tr.session.sequence,
          timestamp: Date.now()
        }
      };

      this._config.setConfig(sessionConfig);

      this._config.setLocalConfig(sessionConfig, true);
    }
  };

  _proto.adjustTransactionTime = function adjustTransactionTime(transaction) {
    var spans = transaction.spans;
    var earliestSpan = Object(utils["h" /* getEarliestSpan */])(spans);

    if (earliestSpan && earliestSpan._start < transaction._start) {
      transaction._start = earliestSpan._start;
    }

    var latestSpan = Object(utils["i" /* getLatestNonXHRSpan */])(spans);

    if (latestSpan && latestSpan._end > transaction._end) {
      transaction._end = latestSpan._end;
    }

    var transactionEnd = transaction._end;

    for (var i = 0; i < spans.length; i++) {
      var span = spans[i];

      if (span._end > transactionEnd) {
        span._end = transactionEnd;
        span.type += constants["O" /* TRUNCATED_TYPE */];
      }

      if (span._start > transactionEnd) {
        span._start = transactionEnd;
      }
    }
  };

  _proto.shouldIgnoreTransaction = function shouldIgnoreTransaction(transactionName) {
    var ignoreList = this._config.get('ignoreTransactions');

    if (ignoreList && ignoreList.length) {
      for (var i = 0; i < ignoreList.length; i++) {
        var element = ignoreList[i];

        if (typeof element.test === 'function') {
          if (element.test(transactionName)) {
            return true;
          }
        } else if (element === transactionName) {
          return true;
        }
      }
    }

    return false;
  };

  _proto.startSpan = function startSpan(name, type, options) {
    var tr = this.getCurrentTransaction();

    if (!tr) {
      tr = this.createCurrentTransaction(undefined, constants["J" /* TEMPORARY_TYPE */], this.createOptions({
        canReuse: true,
        managed: true
      }));
    }

    var span = tr.startSpan(name, type, options);

    if (state["a" /* __DEV__ */]) {
      this._logger.debug("startSpan(" + name + ", " + span.type + ")", "on transaction(" + tr.id + ", " + tr.name + ")");
    }

    return span;
  };

  _proto.endSpan = function endSpan(span, context) {
    if (!span) {
      return;
    }

    if (state["a" /* __DEV__ */]) {
      var tr = this.getCurrentTransaction();
      tr && this._logger.debug("endSpan(" + span.name + ", " + span.type + ")", "on transaction(" + tr.id + ", " + tr.name + ")");
    }

    span.end(null, context);
  };

  return TransactionService;
}();

/* harmony default export */ var transaction_service = (transaction_service_TransactionService);
// CONCATENATED MODULE: ./node_modules/@elastic/apm-rum-core/dist/es/performance-monitoring/index.js





function performance_monitoring_registerServices() {
  serviceCreators['TransactionService'] = function (serviceFactory) {
    var _serviceFactory$getSe = serviceFactory.getService([constants["t" /* LOGGING_SERVICE */], constants["f" /* CONFIG_SERVICE */]]),
        loggingService = _serviceFactory$getSe[0],
        configService = _serviceFactory$getSe[1];

    return new transaction_service(loggingService, configService);
  };

  serviceCreators['PerformanceMonitoring'] = function (serviceFactory) {
    var _serviceFactory$getSe2 = serviceFactory.getService([constants["c" /* APM_SERVER */], constants["f" /* CONFIG_SERVICE */], constants["t" /* LOGGING_SERVICE */], 'TransactionService']),
        apmServer = _serviceFactory$getSe2[0],
        configService = _serviceFactory$getSe2[1],
        loggingService = _serviceFactory$getSe2[2],
        transactionService = _serviceFactory$getSe2[3];

    return new performance_monitoring_PerformanceMonitoring(apmServer, configService, loggingService, transactionService);
  };
}


// CONCATENATED MODULE: ./node_modules/@elastic/apm-rum-core/dist/es/index.js











function createServiceFactory() {
  performance_monitoring_registerServices();
  registerServices();
  var serviceFactory = new service_factory_ServiceFactory();
  return serviceFactory;
}



/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "css", function() { return /* reexport */ css; });
__webpack_require__.d(__webpack_exports__, "cx", function() { return /* reexport */ cx; });

// CONCATENATED MODULE: ./node_modules/linaria/esm/core/css.js
function css(_strings, ..._exprs) {
  throw new Error('Using the "css" tag in runtime is not supported. Make sure you have set up the Babel plugin correctly.');
}
//# sourceMappingURL=css.js.map
// CONCATENATED MODULE: ./node_modules/linaria/esm/core/cx.js
function cx(...classNames) {
  return classNames.filter(Boolean).join(' ');
}
//# sourceMappingURL=cx.js.map
// CONCATENATED MODULE: ./node_modules/linaria/esm/index.js


//# sourceMappingURL=index.js.map

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var reactIs = __webpack_require__(195);

/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var REACT_STATICS = {
  childContextTypes: true,
  contextType: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  getDerivedStateFromError: true,
  getDerivedStateFromProps: true,
  mixins: true,
  propTypes: true,
  type: true
};
var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};
var FORWARD_REF_STATICS = {
  '$$typeof': true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  '$$typeof': true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

function getStatics(component) {
  // React v16.11 and below
  if (reactIs.isMemo(component)) {
    return MEMO_STATICS;
  } // React v16.12 and above


  return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
}

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;
function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== 'string') {
    // don't hoist over string (html) components
    if (objectPrototype) {
      var inheritedComponent = getPrototypeOf(sourceComponent);

      if (inheritedComponent && inheritedComponent !== objectPrototype) {
        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
      }
    }

    var keys = getOwnPropertyNames(sourceComponent);

    if (getOwnPropertySymbols) {
      keys = keys.concat(getOwnPropertySymbols(sourceComponent));
    }

    var targetStatics = getStatics(targetComponent);
    var sourceStatics = getStatics(sourceComponent);

    for (var i = 0; i < keys.length; ++i) {
      var key = keys[i];

      if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);

        try {
          // Avoid failures from read-only properties
          defineProperty(targetComponent, key, descriptor);
        } catch (e) {}
      }
    }
  }

  return targetComponent;
}

module.exports = hoistNonReactStatics;


/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);


var EventHandler = function () {
  function EventHandler() {
    this.observers = {};
  }

  var _proto = EventHandler.prototype;

  _proto.observe = function observe(name, fn) {
    var _this = this;

    if (typeof fn === 'function') {
      if (!this.observers[name]) {
        this.observers[name] = [];
      }

      this.observers[name].push(fn);
      return function () {
        var index = _this.observers[name].indexOf(fn);

        if (index > -1) {
          _this.observers[name].splice(index, 1);
        }
      };
    }
  };

  _proto.sendOnly = function sendOnly(name, args) {
    var obs = this.observers[name];

    if (obs) {
      obs.forEach(function (fn) {
        try {
          fn.apply(undefined, args);
        } catch (error) {
          console.log(error, error.stack);
        }
      });
    }
  };

  _proto.send = function send(name, args) {
    this.sendOnly(name + _constants__WEBPACK_IMPORTED_MODULE_0__[/* BEFORE_EVENT */ "d"], args);
    this.sendOnly(name, args);
    this.sendOnly(name + _constants__WEBPACK_IMPORTED_MODULE_0__[/* AFTER_EVENT */ "b"], args);
  };

  return EventHandler;
}();

/* harmony default export */ __webpack_exports__["a"] = (EventHandler);

/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var path_to_regexp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84);
/* harmony import */ var path_to_regexp__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path_to_regexp__WEBPACK_IMPORTED_MODULE_0__);


var patternCache = {};
var cacheLimit = 10000;
var cacheCount = 0;

var compilePath = function compilePath(pattern, options) {
  var cacheKey = "" + options.end + options.strict + options.sensitive;
  var cache = patternCache[cacheKey] || (patternCache[cacheKey] = {});

  if (cache[pattern]) return cache[pattern];

  var keys = [];
  var re = path_to_regexp__WEBPACK_IMPORTED_MODULE_0___default()(pattern, keys, options);
  var compiledPattern = { re: re, keys: keys };

  if (cacheCount < cacheLimit) {
    cache[pattern] = compiledPattern;
    cacheCount++;
  }

  return compiledPattern;
};

/**
 * Public API for matching a URL pathname to a path pattern.
 */
var matchPath = function matchPath(pathname) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var parent = arguments[2];

  if (typeof options === "string") options = { path: options };

  var _options = options,
      path = _options.path,
      _options$exact = _options.exact,
      exact = _options$exact === undefined ? false : _options$exact,
      _options$strict = _options.strict,
      strict = _options$strict === undefined ? false : _options$strict,
      _options$sensitive = _options.sensitive,
      sensitive = _options$sensitive === undefined ? false : _options$sensitive;


  if (path == null) return parent;

  var _compilePath = compilePath(path, { end: exact, strict: strict, sensitive: sensitive }),
      re = _compilePath.re,
      keys = _compilePath.keys;

  var match = re.exec(pathname);

  if (!match) return null;

  var url = match[0],
      values = match.slice(1);

  var isExact = pathname === url;

  if (exact && !isExact) return null;

  return {
    path: path, // the path pattern used to match
    url: path === "/" && url === "" ? "/" : url, // the matched portion of the URL
    isExact: isExact, // whether or not we matched exactly
    params: keys.reduce(function (memo, key, index) {
      memo[key.name] = values[index];
      return memo;
    }, {})
  };
};

/* harmony default export */ __webpack_exports__["a"] = (matchPath);

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

module.exports = {
  pad: function pad(value, width) {
    if (value == null) {
      throw new Error('value is required');
    }

    width = width || 2;

    var padded = new Array(width).join('0') + value;

    return padded.substring(padded.length - width);
  },

  getKey: function getKey(value) {
    if (typeof value !== 'string') {
      throw new Error('value is required string');
    }

    // Replace all non-alphanumerics with hyphens, then replace all instances of
    // multiple hyphens with a single hyphen, then trim hyphens from beginning
    // and end.

    return value.toLowerCase().replace(/[^0-9a-z]/g, '-').replace(/-{2,}/g, '-').replace(/^-?(.+?)-?$/, '$1');
  },

  normalizeUnicodeNull: function normalizeUnicodeNull(value) {
    var _this = this;

    if (value === '\0') {
      return null;
    } else if (!value || (typeof value === 'undefined' ? 'undefined' : _typeof(value)) !== 'object') {
      return value;
    }

    return Object.keys(value).reduce(function (copy, key) {
      copy[key] = _this.normalizeUnicodeNull(value[key]);

      return copy;
    }, {});
  }
};

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createEnum = __webpack_require__(34);

module.exports = createEnum(['INDIA_ONLY', 'NOT_INDIA']);

/***/ }),
/* 47 */
/***/ (function(module, exports) {

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
function defaultClearTimeout () {
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
} ())
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
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
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
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
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
    while(len) {
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

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(0);
var hyphenPatternRegex = /-([a-z])/g;
var CUSTOM_PROPERTY_OR_NO_HYPHEN_REGEX = /^--[a-zA-Z0-9-]+$|^[^-]+$/;

/**
 * Converts a string to camelCase.
 *
 * @param  {String} string - The string.
 * @return {String}
 */
function camelCase(string) {
  if (typeof string !== 'string') {
    throw new TypeError('First argument must be a string');
  }

  // custom property or no hyphen found
  if (CUSTOM_PROPERTY_OR_NO_HYPHEN_REGEX.test(string)) {
    return string;
  }

  // convert to camelCase
  return string
    .toLowerCase()
    .replace(hyphenPatternRegex, function(_, character) {
      return character.toUpperCase();
    });
}

/**
 * Swap key with value in an object.
 *
 * @param  {Object}   obj        - The object.
 * @param  {Function} [override] - The override method.
 * @return {Object}              - The inverted object.
 */
function invertObject(obj, override) {
  if (!obj || typeof obj !== 'object') {
    throw new TypeError('First argument must be an object');
  }

  var key;
  var value;
  var isOverridePresent = typeof override === 'function';
  var overrides = {};
  var result = {};

  for (key in obj) {
    value = obj[key];

    if (isOverridePresent) {
      overrides = override(key, value);
      if (overrides && overrides.length === 2) {
        result[overrides[0]] = overrides[1];
        continue;
      }
    }

    if (typeof value === 'string') {
      result[value] = key;
    }
  }

  return result;
}

/**
 * Check if a given tag is a custom component.
 *
 * @see {@link https://github.com/facebook/react/blob/v16.6.3/packages/react-dom/src/shared/isCustomComponent.js}
 *
 * @param {string} tagName - The name of the html tag.
 * @param {Object} props   - The props being passed to the element.
 * @return {boolean}
 */
function isCustomComponent(tagName, props) {
  if (tagName.indexOf('-') === -1) {
    return props && typeof props.is === 'string';
  }

  switch (tagName) {
    // These are reserved SVG and MathML elements.
    // We don't mind this whitelist too much because we expect it to never grow.
    // The alternative is to track the namespace in a few places which is convoluted.
    // https://w3c.github.io/webcomponents/spec/custom/#custom-elements-core-concepts
    case 'annotation-xml':
    case 'color-profile':
    case 'font-face':
    case 'font-face-src':
    case 'font-face-uri':
    case 'font-face-format':
    case 'font-face-name':
    case 'missing-glyph':
      return false;
    default:
      return true;
  }
}

/**
 * @constant {Boolean}
 * @see {@link https://reactjs.org/blog/2017/09/08/dom-attributes-in-react-16.html}
 */
var PRESERVE_CUSTOM_ATTRIBUTES = React.version.split('.')[0] >= 16;

module.exports = {
  PRESERVE_CUSTOM_ATTRIBUTES: PRESERVE_CUSTOM_ATTRIBUTES,
  camelCase: camelCase,
  invertObject: invertObject,
  isCustomComponent: isCustomComponent
};


/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "styled", function() { return /* reexport */ react_styled; });

// EXTERNAL MODULE: external {"root":"React","commonjs":"react","commonjs2":"react","amd":"react"}
var external_root_React_commonjs_react_commonjs2_react_amd_react_ = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/@emotion/memoize/dist/memoize.browser.esm.js
function memoize(fn) {
  var cache = {};
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}

/* harmony default export */ var memoize_browser_esm = (memoize);

// CONCATENATED MODULE: ./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js


var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/; // https://esbench.com/bench/5bfee68a4cd7e6009ef61d23

var index = memoize_browser_esm(function (prop) {
  return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111
  /* o */
  && prop.charCodeAt(1) === 110
  /* n */
  && prop.charCodeAt(2) < 91;
}
/* Z+1 */
);

/* harmony default export */ var is_prop_valid_browser_esm = (index);

// EXTERNAL MODULE: ./node_modules/linaria/esm/index.js + 2 modules
var esm = __webpack_require__(41);

// CONCATENATED MODULE: ./node_modules/linaria/esm/react/styled.js
/**
 * This file contains an runtime version of `styled` component. Responsibilities of the component are:
 * - returns ReactElement based on HTML tag used with `styled` or custom React Component
 * - injects classNames for the returned component
 * - injects CSS variables used to define dynamic styles based on props
 */
 // eslint-disable-line import/no-extraneous-dependencies




// Workaround for rest operator
const restOp = (obj, keysToExclude) => Object.keys(obj).filter(prop => !keysToExclude.includes(prop)).reduce((acc, curr) => Object.assign(acc, {
  [curr]: obj[curr]
}), {}); // rest operator workaround


const warnIfInvalid = (value, componentName) => {
  if (false) {}
}; // If styled wraps custom component, that component should have className property


function styled(tag) {
  return options => {
    if (false) {}

    const render = (props, ref) => {
      const {
        as: component = tag,
        class: className
      } = props;
      const rest = restOp(props, ['as', 'class']);
      let filteredProps; // Check if it's an HTML tag and not a custom element

      if (typeof component === 'string' && component.indexOf('-') === -1) {
        filteredProps = {}; // eslint-disable-next-line guard-for-in

        for (const key in rest) {
          if (key === 'as' || is_prop_valid_browser_esm(key)) {
            // Don't pass through invalid attributes to HTML elements
            filteredProps[key] = rest[key];
          }
        }
      } else {
        filteredProps = rest;
      }

      filteredProps.ref = ref;
      filteredProps.className = Object(esm["cx"])(filteredProps.className || className, options.class);
      const {
        vars
      } = options;

      if (vars) {
        const style = {}; // eslint-disable-next-line guard-for-in

        for (const name in vars) {
          const variable = vars[name];
          const result = variable[0];
          const unit = variable[1] || '';
          const value = typeof result === 'function' ? result(props) : result;
          warnIfInvalid(value, options.name);
          style[`--${name}`] = `${value}${unit}`;
        }

        filteredProps.style = Object.assign(style, filteredProps.style);
      }

      if (tag.__linaria && tag !== component) {
        // If the underlying tag is a styled component, forward the `as` prop
        // Otherwise the styles from the underlying component will be ignored
        filteredProps.as = component;
        return /*#__PURE__*/external_root_React_commonjs_react_commonjs2_react_amd_react_["createElement"](tag, filteredProps);
      }

      return /*#__PURE__*/external_root_React_commonjs_react_commonjs2_react_amd_react_["createElement"](component, filteredProps);
    };

    const Result = external_root_React_commonjs_react_commonjs2_react_amd_react_["forwardRef"] ? /*#__PURE__*/external_root_React_commonjs_react_commonjs2_react_amd_react_["forwardRef"](render) : // React.forwardRef won't available on older React versions and in Preact
    // Fallback to a innerRef prop in that case
    props => {
      const rest = restOp(props, ['innerRef']);
      return render(rest, props.innerRef);
    };
    Result.displayName = options.name; // These properties will be read by the babel plugin for interpolation

    Result.__linaria = {
      className: options.class,
      extends: tag
    };
    return Result;
  };
}

/* harmony default export */ var react_styled = ( false ? undefined : styled);
//# sourceMappingURL=styled.js.map
// CONCATENATED MODULE: ./node_modules/linaria/esm/react/index.js

//# sourceMappingURL=index.js.map

/***/ }),
/* 50 */,
/* 51 */,
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isDate = __webpack_require__(96),
    stringUtils = __webpack_require__(45),
    pattern = /^(\d{4})-(\d{1,2})-(\d{1,2})/;

module.exports = {
  parse: function parse(value) {
    if (typeof value !== 'string') {
      throw new Error('value is required string');
    }

    var match = pattern.exec(value);

    if (match == null) {
      throw new Error('value is invalid');
    }

    // If overflowing values are passed to Date constructor, it extrapolates them
    // instead of throwing error. (E.g., passing in {2016, 5, 40} will produce
    // 2016 June 9.) We don't won't to allow that, though. So use the constructor,
    // but then compare the resulting Date to the parsed values.

    var year = parseInt(match[1]),
        month = parseInt(match[2]) - 1,
        date = parseInt(match[3]),
        parsed = new Date(year, month, date);

    if (year !== parsed.getFullYear() || month !== parsed.getMonth() || date !== parsed.getDate()) {
      throw new Error('value is invalid');
    }

    return parsed;
  },

  format: function format(value) {
    if (!isDate(value)) {
      throw new Error('value is required date');
    }

    return [value.getFullYear(), stringUtils.pad(value.getMonth() + 1, 2), stringUtils.pad(value.getDate(), 2)].join('-');
  },

  reformat: function reformat(value) {
    return this.format(this.parse(value));
  },

  today: function today() {
    return this.format(new Date());
  }
};

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports.customDomainStatus = __webpack_require__(99);
module.exports.market = __webpack_require__(100);
module.exports.migrationStatus = __webpack_require__(101);
module.exports.migrationM365Options = __webpack_require__(102);
module.exports.plData = __webpack_require__(103);
module.exports.resellerType = __webpack_require__(104);
module.exports.socialMediaType = __webpack_require__(105);
module.exports.supportOption = __webpack_require__(106);
module.exports.taxesAndFees = __webpack_require__(107);
module.exports.tldOffering = __webpack_require__(108);

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createEnum = __webpack_require__(34);

module.exports = createEnum(['AUTOMATIC', 'PL_DATA', 'PROMO_OFFERING', 'ADVANCED_MARKETING', 'ORDER_LEVEL', 'PL_DATA_DATE']);

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  STANDARD: 'standard',
  DOMAINS: 'domains',
  ORDER_LEVEL: 'order-level'
};

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(15);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _breakdancer = _interopRequireDefault(__webpack_require__(116));

/**
 * Our breakpoint specifications. The key represents the name of the breakpoint
 * and the object specifies the specification in order to trigger the break
 * point. These breakpoints follow the design specification from our
 * invisionapp.
 *
 * Please note that the values in the breakdancer represent the minimum values
 * so need to + 1 the design specification in order to get an exact match.
 *
 * @type {Breakdancer}
 * @public
 */
const breakpoints = new _breakdancer.default([{
  name: 'mobile',
  width: 519 + 1
}, {
  name: 'phablet',
  width: 767 + 1
}, {
  name: 'tablet',
  width: 991 + 1
}, {
  name: 'desktop',
  width: 1199 + 1
}, {
  name: 'large',
  width: 1719 + 1
}, //
// Last capture all the things query.
//
{
  name: 'xlarge',
  width: Infinity
}]);
var _default = breakpoints;
exports.default = _default;

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isBrowser;

/**
  * Check if we are running in a TRUE browser (i.e. **NOT** Node.js)
  * environment. This will only return true in REAL browser environments
  * (i.e. not `jsdom`). The navigator object will toString as '[object Navigator]'
  * instead of '[object Object]' if it was a leaked Node.js global.
  *
  * *NOTE:* This will return true in PhantomJS environments and other headless
  * browsers since those are, in fact, REAL browsers in the strict sense.
  *
  * @returns {Boolean} Is this a browser
  * @public
  */
function isBrowser() {
  return typeof navigator !== 'undefined' && Object.prototype.toString.call(navigator) === '[object Navigator]';
}

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(15);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useBreakpoints;

var _breakpoints = _interopRequireDefault(__webpack_require__(56));

var _diagnostics = _interopRequireDefault(__webpack_require__(128));

var _react = __webpack_require__(0);

const currentWindow = typeof window === 'undefined' ? null : window;

if (currentWindow) {
  currentWindow.addEventListener('resize', () => {
    if (!_breakpoints.default.changed()) return;
    currentWindow.dispatchEvent(new CustomEvent('breakpoint:hook:changed', {
      detail: {
        breakpoint: _breakpoints.default.breakpoint
      }
    }));
  });
}
/**
 * @typedef {Object} Breakpoint
 * @prop {string} name The name of the breakpoint
 * @prop {number} width The minimum width of the breakpoint in pixels
 */

/**
 * @typedef {Object} Viewport
 * @prop {number} width The width of the viewport in pixels
 * @prop {number} height The height of the viewport in pixels
 */

/**
 * @typedef {Object} useBreakpointsState
 * @prop {Breakpoint} breakpoint The current breakpoint
 * @prop {Viewport} viewport The current viewport size
 */

/**
 * React hook to setup breakpoint handling with breakdancer
 *
 * @param  {...string} points List of breakpoint names to subscribe to
 * @returns {useBreakpointsState} State variables for current breakpoint and viewport
 */


function useBreakpoints() {
  for (var _len = arguments.length, points = new Array(_len), _key = 0; _key < _len; _key++) {
    points[_key] = arguments[_key];
  }

  const debug = (0, _diagnostics.default)('ux:use-breakpoints');
  const [breakpoint, setBreakpoint] = (0, _react.useState)(() => {
    /** @type {Breakpoint} */
    const currentBreakpoint = _breakpoints.default.breakpoint;
    return currentBreakpoint;
  });
  const [viewport, setViewport] = (0, _react.useState)(() => {
    /** @type {Viewport} */
    const currentViewport = _breakpoints.default.viewport();

    return currentViewport;
  });
  (0, _react.useEffect)(() => {
    const _resize = _ref => {
      let {
        detail: newBreakpoint
      } = _ref;
      if (!points || !points.length) return; //
      // Find the nearest registered point by minimal distance from the actual width.
      //

      if (!points.includes(newBreakpoint)) {
        const distances = points.map(point => Math.abs(_breakpoints.default.compare(point, 'width')));
        newBreakpoint = points[distances.indexOf(Math.min(...distances))];
      } //
      // Check if the breakpoint is actually different Breakpoint might have changed based on nearest algorithm.
      //


      if (breakpoint === newBreakpoint) return;
      debug('updating state as breakpoint changed to %s', newBreakpoint);
      setViewport(_breakpoints.default.viewport());
      setBreakpoint(newBreakpoint);
    };

    _resize({
      detail: _breakpoints.default.currently()
    }); // @ts-ignore


    if (currentWindow) currentWindow.addEventListener('breakpoint:hook:changed', _resize);
    return () => {
      // @ts-ignore
      if (currentWindow) currentWindow.removeEventListener('breakpoint:hook:changed', _resize);
    };
  }, [breakpoint, debug, points]);
  return {
    breakpoint,
    viewport
  };
}

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(15);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useOnClickOutside;

var _react = __webpack_require__(0);

var _isBrowser = _interopRequireDefault(__webpack_require__(57));

/**
 * Assign an new event listener to the body element that only triggers if the
 * event target is outside the provided reference DOM Node.
 * Code is referenced from https://usehooks.com/useOnClickOutside/
 *
 * @param {Node|ReactElement} ref Reference to a DOM Node or React Element.
 * @param {Function} handler Completion callback function.
 * @public
 */
function useOnClickOutside(ref, handler) {
  /**
   * Trigger the listener if the clicked target does not contain the
   * HTML/Component reference.
   * @private
   */
  (0, _react.useEffect)(() => {
    if (!_isBrowser.default) return;

    const listener = event => {
      // Do nothing if clicking ref's element or descendent elements
      const composedPath = typeof event.composedPath === 'function' && !Array.from(event.composedPath()).includes(ref.current);

      if (!composedPath || !ref.current || ref.current.contains(event.target)) {
        return;
      }

      handler(event);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
}

/***/ }),
/* 60 */
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
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** `Object#toString` result references. */
var funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    symbolTag = '[object Symbol]';

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/,
    reLeadingDot = /^\./,
    rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}

/** Used for built-in method references. */
var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var Symbol = root.Symbol,
    splice = arrayProto.splice;

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map'),
    nativeCreate = getNative(Object, 'create');

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  return this.has(key) && delete this.__data__[key];
}

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
}

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  return getMapData(this, key)['delete'](key);
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  getMapData(this, key).set(key, value);
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = isKey(path, object) ? [path] : castPath(path);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value) {
  return isArray(value) ? value : stringToPath(value);
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoize(function(string) {
  string = toString(string);

  var result = [];
  if (reLeadingDot.test(string)) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, string) {
    result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result);
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Assign cache to `_.memoize`.
memoize.Cache = MapCache;

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

module.exports = get;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(13)))

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

const getUnitPriceObject = (attribute, enumVal, iteration) => {
  const key = Array.isArray(attribute.prices) ? iteration : enumVal;

  if (attribute.prices && attribute.prices[key]) {
    return attribute.prices[key];
  }

  return null;
};

var _default = getUnitPriceObject;
exports.default = _default;

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

const getReferrerPathname = url => {
  if (url === '') return '';
  const linkElement = document.createElement('a');
  linkElement.href = url;
  return linkElement.host === global.location.host ? linkElement.pathname : '';
};

const getPageVirtualPath = packageId => {
  const referrerPath = getReferrerPathname(global.document.referrer);
  let pagePath = global.location.pathname;
  const secondaryPathRegex = /(\/..|\/..-..)\/.*/.exec(pagePath);

  if (secondaryPathRegex) {
    pagePath = pagePath.replace(secondaryPathRegex[1], '');
  }

  const virtualPath = `${referrerPath}${pagePath}/${packageId}`;
  const extraSlashRegex = /\/?(\/*).*/.exec(virtualPath);
  const sanitizedPath = virtualPath.replace(extraSlashRegex[1], '');
  return sanitizedPath;
};

const addPageRequest = packageId => {
  global._expDataLayer = global._expDataLayer || [];

  global._expDataLayer.push({
    schema: 'add_page_request',
    version: 'v1',
    data: {
      virtual_path: getPageVirtualPath(packageId)
    }
  });
};

const addEvent = ({
  eid,
  type = 'click'
}) => {
  global._expDataLayer = global._expDataLayer || [];

  global._expDataLayer.push({
    schema: 'add_event',
    version: 'v1',
    data: {
      eid: eid,
      type: type
    }
  });
};

const sendEvent = (eventSchema, eventType, eventData) => {
  global._expDataLayer = global._expDataLayer || [];

  global._expDataLayer.push({
    schema: eventSchema,
    type: eventType,
    version: 'v1',
    data: eventData
  });
};

const sendExperiments = (experimentId, experimentType, variantId, experimentSource) => {
  global._expDataLayer = global._expDataLayer || [];

  global._expDataLayer.push({
    schema: 'add_experiment_assignment',
    type: experimentType,
    version: 'v1',
    data: {
      experiment_id: experimentId,
      variant_id: variantId,
      experiment_source: experimentSource
    }
  });
};

const sendImpressions = eId => {
  global._expDataLayer = global._expDataLayer || [];

  global._expDataLayer.push({
    schema: 'add_impression',
    version: 'v1',
    data: {
      eid: eId
    }
  });
};

const traffic = {
  addPageRequest,
  addEvent,
  sendEvent,
  sendExperiments,
  sendImpressions,
  getPageVirtualPath
};
var _default = traffic;
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(13)))

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var _prodInvariant = __webpack_require__(150);

var invariant = __webpack_require__(151);

function checkMask(value, bitmask) {
  return (value & bitmask) === bitmask;
}

var DOMPropertyInjection = {
  /**
   * Mapping from normalized, camelcased property names to a configuration that
   * specifies how the associated DOM property should be accessed or rendered.
   */
  MUST_USE_PROPERTY: 0x1,
  HAS_BOOLEAN_VALUE: 0x4,
  HAS_NUMERIC_VALUE: 0x8,
  HAS_POSITIVE_NUMERIC_VALUE: 0x10 | 0x8,
  HAS_OVERLOADED_BOOLEAN_VALUE: 0x20,

  /**
   * Inject some specialized knowledge about the DOM. This takes a config object
   * with the following properties:
   *
   * isCustomAttribute: function that given an attribute name will return true
   * if it can be inserted into the DOM verbatim. Useful for data-* or aria-*
   * attributes where it's impossible to enumerate all of the possible
   * attribute names,
   *
   * Properties: object mapping DOM property name to one of the
   * DOMPropertyInjection constants or null. If your attribute isn't in here,
   * it won't get written to the DOM.
   *
   * DOMAttributeNames: object mapping React attribute name to the DOM
   * attribute name. Attribute names not specified use the **lowercase**
   * normalized name.
   *
   * DOMAttributeNamespaces: object mapping React attribute name to the DOM
   * attribute namespace URL. (Attribute names not specified use no namespace.)
   *
   * DOMPropertyNames: similar to DOMAttributeNames but for DOM properties.
   * Property names not specified use the normalized name.
   *
   * DOMMutationMethods: Properties that require special mutation methods. If
   * `value` is undefined, the mutation method should unset the property.
   *
   * @param {object} domPropertyConfig the config as described above.
   */
  injectDOMPropertyConfig: function (domPropertyConfig) {
    var Injection = DOMPropertyInjection;
    var Properties = domPropertyConfig.Properties || {};
    var DOMAttributeNamespaces = domPropertyConfig.DOMAttributeNamespaces || {};
    var DOMAttributeNames = domPropertyConfig.DOMAttributeNames || {};
    var DOMPropertyNames = domPropertyConfig.DOMPropertyNames || {};
    var DOMMutationMethods = domPropertyConfig.DOMMutationMethods || {};

    if (domPropertyConfig.isCustomAttribute) {
      DOMProperty._isCustomAttributeFunctions.push(domPropertyConfig.isCustomAttribute);
    }

    for (var propName in Properties) {
      !!DOMProperty.properties.hasOwnProperty(propName) ?  false ? undefined : _prodInvariant('48', propName) : void 0;

      var lowerCased = propName.toLowerCase();
      var propConfig = Properties[propName];

      var propertyInfo = {
        attributeName: lowerCased,
        attributeNamespace: null,
        propertyName: propName,
        mutationMethod: null,

        mustUseProperty: checkMask(propConfig, Injection.MUST_USE_PROPERTY),
        hasBooleanValue: checkMask(propConfig, Injection.HAS_BOOLEAN_VALUE),
        hasNumericValue: checkMask(propConfig, Injection.HAS_NUMERIC_VALUE),
        hasPositiveNumericValue: checkMask(propConfig, Injection.HAS_POSITIVE_NUMERIC_VALUE),
        hasOverloadedBooleanValue: checkMask(propConfig, Injection.HAS_OVERLOADED_BOOLEAN_VALUE)
      };
      !(propertyInfo.hasBooleanValue + propertyInfo.hasNumericValue + propertyInfo.hasOverloadedBooleanValue <= 1) ?  false ? undefined : _prodInvariant('50', propName) : void 0;

      if (false) {}

      if (DOMAttributeNames.hasOwnProperty(propName)) {
        var attributeName = DOMAttributeNames[propName];
        propertyInfo.attributeName = attributeName;
        if (false) {}
      }

      if (DOMAttributeNamespaces.hasOwnProperty(propName)) {
        propertyInfo.attributeNamespace = DOMAttributeNamespaces[propName];
      }

      if (DOMPropertyNames.hasOwnProperty(propName)) {
        propertyInfo.propertyName = DOMPropertyNames[propName];
      }

      if (DOMMutationMethods.hasOwnProperty(propName)) {
        propertyInfo.mutationMethod = DOMMutationMethods[propName];
      }

      DOMProperty.properties[propName] = propertyInfo;
    }
  }
};

/* eslint-disable max-len */
var ATTRIBUTE_NAME_START_CHAR = ':A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD';
/* eslint-enable max-len */

/**
 * DOMProperty exports lookup objects that can be used like functions:
 *
 *   > DOMProperty.isValid['id']
 *   true
 *   > DOMProperty.isValid['foobar']
 *   undefined
 *
 * Although this may be confusing, it performs better in general.
 *
 * @see http://jsperf.com/key-exists
 * @see http://jsperf.com/key-missing
 */
var DOMProperty = {
  ID_ATTRIBUTE_NAME: 'data-reactid',
  ROOT_ATTRIBUTE_NAME: 'data-reactroot',

  ATTRIBUTE_NAME_START_CHAR: ATTRIBUTE_NAME_START_CHAR,
  ATTRIBUTE_NAME_CHAR: ATTRIBUTE_NAME_START_CHAR + '\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040',

  /**
   * Map from property "standard name" to an object with info about how to set
   * the property in the DOM. Each object contains:
   *
   * attributeName:
   *   Used when rendering markup or with `*Attribute()`.
   * attributeNamespace
   * propertyName:
   *   Used on DOM node instances. (This includes properties that mutate due to
   *   external factors.)
   * mutationMethod:
   *   If non-null, used instead of the property or `setAttribute()` after
   *   initial render.
   * mustUseProperty:
   *   Whether the property must be accessed and mutated as an object property.
   * hasBooleanValue:
   *   Whether the property should be removed when set to a falsey value.
   * hasNumericValue:
   *   Whether the property must be numeric or parse as a numeric and should be
   *   removed when set to a falsey value.
   * hasPositiveNumericValue:
   *   Whether the property must be positive numeric or parse as a positive
   *   numeric and should be removed when set to a falsey value.
   * hasOverloadedBooleanValue:
   *   Whether the property can be used as a flag as well as with a value.
   *   Removed when strictly equal to false; present without a value when
   *   strictly equal to true; present with a value otherwise.
   */
  properties: {},

  /**
   * Mapping from lowercase property names to the properly cased version, used
   * to warn in the case of missing properties. Available only in __DEV__.
   *
   * autofocus is predefined, because adding it to the property whitelist
   * causes unintended side effects.
   *
   * @type {Object}
   */
  getPossibleStandardName:  false ? undefined : null,

  /**
   * All of the isCustomAttribute() functions that have been injected.
   */
  _isCustomAttributeFunctions: [],

  /**
   * Checks whether a property name is a custom attribute.
   * @method
   */
  isCustomAttribute: function (attributeName) {
    for (var i = 0; i < DOMProperty._isCustomAttributeFunctions.length; i++) {
      var isCustomAttributeFn = DOMProperty._isCustomAttributeFunctions[i];
      if (isCustomAttributeFn(attributeName)) {
        return true;
      }
    }
    return false;
  },

  injection: DOMPropertyInjection
};

module.exports = DOMProperty;

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Format DOM attributes to an associative array.
 *
 * @param  {NamedNodeMap} - The list of attributes.
 * @return {Object}       - The object of attributes.
 */
function formatAttributes(attributes) {
    var result = {};
    var attribute;

    // NamedNodeMap is array-like
    for (var i = 0, len = attributes.length; i < len; i++) {
        attribute = attributes[i];
        result[attribute.name] = attribute.value;
    }

    return result;
}

/**
 * Format the browser DOM nodes to mimic the output of `htmlparser2.parseDOM()`.
 *
 * @param  {NodeList} nodes        - The DOM nodes.
 * @param  {Object}   [parentObj]  - The formatted parent node.
 * @param  {String}   [directive]  - The directive.
 * @return {Object}                - The formatted DOM object.
 */
function formatDOM(nodes, parentObj, directive) {
    parentObj = parentObj || null;

    var result = [];
    var node;
    var prevNode;
    var nodeObj;

    // NodeList is array-like
    for (var i = 0, len = nodes.length; i < len; i++) {
        node = nodes[i];
        // reset
        nodeObj = {
            next: null,
            prev: result[i - 1] || null,
            parent: parentObj
        };

        // set the next node for the previous node (if applicable)
        prevNode = result[i - 1];
        if (prevNode) {
            prevNode.next = nodeObj;
        }

        // set the node name if it's not "#text" or "#comment"
        // e.g., "div"
        if (node.nodeName.indexOf('#') !== 0) {
            nodeObj.name = node.nodeName.toLowerCase();

            // also, nodes of type "tag" have "attribs"
            nodeObj.attribs = {}; // default
            if (node.attributes && node.attributes.length) {
                nodeObj.attribs = formatAttributes(node.attributes);
            }
        }

        // set the node type
        // e.g., "tag"
        switch (node.nodeType) {
            // 1 = element
            case 1:
                if (nodeObj.name === 'script' || nodeObj.name === 'style') {
                    nodeObj.type = nodeObj.name;
                } else {
                    nodeObj.type = 'tag';
                }
                // recursively format the children
                nodeObj.children = formatDOM(node.childNodes, nodeObj);
                break;
                // 2 = attribute
                // 3 = text
            case 3:
                nodeObj.type = 'text';
                nodeObj.data = node.nodeValue;
                break;
                // 8 = comment
            case 8:
                nodeObj.type = 'comment';
                nodeObj.data = node.nodeValue;
                break;
            default:
                break;
        }

        result.push(nodeObj);
    }

    if (directive) {
        result.unshift({
            name: directive.substring(0, directive.indexOf(' ')).toLowerCase(),
            data: directive,
            type: 'directive',
            next: result[0] ? result[0] : null,
            prev: null,
            parent: parentObj
        });

        if (result[1]) {
            result[1].prev = result[0];
        }
    }

    return result;
}

/**
 * Detect IE with or without version.
 *
 * @param  {Number} [version] - The IE version to detect.
 * @return {Boolean}          - Whether IE or the version has been detected.
 */
function isIE(version) {
    if (version) {
        return document.documentMode === version;
    }
    return /(MSIE |Trident\/|Edge\/)/.test(navigator.userAgent);
}

/**
 * Export utilities.
 */
module.exports = {
    formatAttributes: formatAttributes,
    formatDOM: formatDOM,
    isIE: isIE
};


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        result = wait - timeSinceLastCall;

    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = debounce;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(13)))

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isMobile = exports.getBreakpoint = exports.breakpoints = void 0;
const breakpoints = {
  mobile: 519,
  phablet: 767,
  tablet: 991,
  desktop: 1199,
  large: 1719,
  xlarge: Infinity
};
exports.breakpoints = breakpoints;

const getBreakpoint = () => {
  if (window && window.innerWidth) {
    const width = window.innerWidth;

    if (width <= breakpoints.mobile) {
      return 'mobile';
    }

    if (width <= breakpoints.phablet) {
      return 'phablet';
    }

    if (width <= breakpoints.tablet) {
      return 'tablet';
    }

    if (width <= breakpoints.desktop) {
      return 'desktop';
    }

    if (width <= breakpoints.large) {
      return 'large';
    }

    return 'xlarge';
  }

  return null;
};

exports.getBreakpoint = getBreakpoint;

const isMobile = () => {
  const breakpoint = getBreakpoint();
  return breakpoint === breakpoints.mobile || breakpoint === breakpoints.phablet;
};

exports.isMobile = isMobile;

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IconBelowTextButton = void 0;

var _react = __webpack_require__(49);

const IconBelowTextButton = /*#__PURE__*/(0, _react.styled)("div")({
  name: "IconBelowTextButton",
  class: "i1s6t193"
});
exports.IconBelowTextButton = IconBelowTextButton;

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StickyContainer = exports.Sticky = undefined;

var _Sticky = __webpack_require__(185);

var _Sticky2 = _interopRequireDefault(_Sticky);

var _Container = __webpack_require__(186);

var _Container2 = _interopRequireDefault(_Container);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Sticky = _Sticky2.default;
exports.StickyContainer = _Container2.default;
exports.default = _Sticky2.default;

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(15);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.asOptions = void 0;
exports.default = textClasses;
exports.emphasisOptions = void 0;

var _classnames = _interopRequireDefault(__webpack_require__(204));

var _feedbackExpressions = _interopRequireDefault(__webpack_require__(205));

// Possible options for as prop
const asOptions = ['title', 'heading', 'paragraph', 'action', 'input', 'label', 'caption'];
exports.asOptions = asOptions;
const emphasisOptions = Object.values(_feedbackExpressions.default).map(v => v.toLowerCase());
exports.emphasisOptions = emphasisOptions;
const UX_TEXT_CLASSNAME = 'ux-text';
/**
 * Creates a collection of classes for text styles
 *
 * @param {Object} props - A props configuration object
 * @param {String} [props.as] - A category of text
 * @param {String} [props.className] - A class name to include
 * @param {String} [props.emphasis] - Includes styles to represent feedback
 * @param {Number} [props.size] - A number representing the font size
 * @returns {String} A collection of class names
 */

function textClasses(props) {
  const {
    as,
    className,
    emphasis,
    size
  } = props || {};
  return (0, _classnames.default)(UX_TEXT_CLASSNAME, className, {
    [`${UX_TEXT_CLASSNAME}-size${size}`]: typeof size === 'number' && size >= -2 && size < 6,
    [`${UX_TEXT_CLASSNAME}-${as}`]: as && asOptions.includes(as),
    [`${UX_TEXT_CLASSNAME}-feedback-${emphasis}`]: emphasis && emphasisOptions.includes(emphasis)
  });
}


/***/ }),
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getInstrumentationFlags; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);

function getInstrumentationFlags(instrument, disabledInstrumentations) {
  var _flags;

  var flags = (_flags = {}, _flags[_constants__WEBPACK_IMPORTED_MODULE_0__[/* XMLHTTPREQUEST */ "S"]] = false, _flags[_constants__WEBPACK_IMPORTED_MODULE_0__[/* FETCH */ "j"]] = false, _flags[_constants__WEBPACK_IMPORTED_MODULE_0__[/* HISTORY */ "m"]] = false, _flags[_constants__WEBPACK_IMPORTED_MODULE_0__[/* PAGE_LOAD */ "B"]] = false, _flags[_constants__WEBPACK_IMPORTED_MODULE_0__[/* ERROR */ "g"]] = false, _flags[_constants__WEBPACK_IMPORTED_MODULE_0__[/* EVENT_TARGET */ "i"]] = false, _flags);

  if (!instrument) {
    return flags;
  }

  Object.keys(flags).forEach(function (key) {
    if (disabledInstrumentations.indexOf(key) === -1) {
      flags[key] = true;
    }
  });
  return flags;
}

/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return bootstrap; });
/* unused harmony export bootstrapPerf */
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _common_patching__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(22);
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);



var enabled = false;
function bootstrap() {
  if (Object(_common_utils__WEBPACK_IMPORTED_MODULE_0__[/* isPlatformSupported */ "q"])()) {
    Object(_common_patching__WEBPACK_IMPORTED_MODULE_1__[/* patchAll */ "a"])();
    bootstrapPerf();
    _state__WEBPACK_IMPORTED_MODULE_2__[/* state */ "b"].bootstrapTime = Object(_common_utils__WEBPACK_IMPORTED_MODULE_0__[/* now */ "u"])();
    enabled = true;
  } else if (_common_utils__WEBPACK_IMPORTED_MODULE_0__[/* isBrowser */ "m"]) {
    console.log('[Elastic APM] platform is not supported!');
  }

  return enabled;
}
function bootstrapPerf() {
  if (document.visibilityState === 'hidden') {
    _state__WEBPACK_IMPORTED_MODULE_2__[/* state */ "b"].lastHiddenStart = 0;
  }

  window.addEventListener('visibilitychange', function () {
    if (document.visibilityState === 'hidden') {
      _state__WEBPACK_IMPORTED_MODULE_2__[/* state */ "b"].lastHiddenStart = performance.now();
    }
  }, {
    capture: true
  });
}

/***/ }),
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return afterFrame; });
var RAF_TIMEOUT = 100;
function afterFrame(callback) {
  var handler = function handler() {
    clearTimeout(timeout);
    cancelAnimationFrame(raf);
    setTimeout(callback);
  };

  var timeout = setTimeout(handler, RAF_TIMEOUT);
  var raf = requestAnimationFrame(handler);
}

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const preserveCamelCase = string => {
  let isLastCharLower = false;
  let isLastCharUpper = false;
  let isLastLastCharUpper = false;

  for (let i = 0; i < string.length; i++) {
    const character = string[i];

    if (isLastCharLower && /[a-zA-Z]/.test(character) && character.toUpperCase() === character) {
      string = string.slice(0, i) + '-' + string.slice(i);
      isLastCharLower = false;
      isLastLastCharUpper = isLastCharUpper;
      isLastCharUpper = true;
      i++;
    } else if (isLastCharUpper && isLastLastCharUpper && /[a-zA-Z]/.test(character) && character.toLowerCase() === character) {
      string = string.slice(0, i - 1) + '-' + string.slice(i - 1);
      isLastLastCharUpper = isLastCharUpper;
      isLastCharUpper = false;
      isLastCharLower = true;
    } else {
      isLastCharLower = character.toLowerCase() === character && character.toUpperCase() !== character;
      isLastLastCharUpper = isLastCharUpper;
      isLastCharUpper = character.toUpperCase() === character && character.toLowerCase() !== character;
    }
  }

  return string;
};

const camelCase = (input, options) => {
  if (!(typeof input === 'string' || Array.isArray(input))) {
    throw new TypeError('Expected the input to be `string | string[]`');
  }

  options = Object.assign({
    pascalCase: false
  }, options);

  const postProcess = x => options.pascalCase ? x.charAt(0).toUpperCase() + x.slice(1) : x;

  if (Array.isArray(input)) {
    input = input.map(x => x.trim()).filter(x => x.length).join('-');
  } else {
    input = input.trim();
  }

  if (input.length === 0) {
    return '';
  }

  if (input.length === 1) {
    return options.pascalCase ? input.toUpperCase() : input.toLowerCase();
  }

  const hasUpperCase = input !== input.toLowerCase();

  if (hasUpperCase) {
    input = preserveCamelCase(input);
  }

  input = input.replace(/^[_.\- ]+/, '').toLowerCase().replace(/[_.\- ]+(\w|$)/g, (_, p1) => p1.toUpperCase()).replace(/\d+(\w|$)/g, m => m.toUpperCase());
  return postProcess(input);
};

module.exports = camelCase; // TODO: Remove this for the next major release

module.exports.default = camelCase;

/***/ }),
/* 75 */,
/* 76 */,
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Config = void 0;

var _react = _interopRequireWildcard(__webpack_require__(0));

var _propTypes = _interopRequireDefault(__webpack_require__(3));

var _stateApi = _interopRequireDefault(__webpack_require__(136));

var _storeProvider = _interopRequireWildcard(__webpack_require__(11));

var _ConfigPage = _interopRequireDefault(__webpack_require__(160));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

class Config extends _react.PureComponent {
  render() {
    const store = new _stateApi.default();
    store.initialize(this.props.initProps);
    return /*#__PURE__*/_react.default.createElement(_ConfigPage.default, {
      store: store
    });
  }

}

exports.Config = Config;
Config.propTypes = {
  initProps: _propTypes.default.shape({
    environment: _propTypes.default.string,
    packageId: _propTypes.default.string,
    plid: _propTypes.default.int,
    xs: _propTypes.default.int,
    src: _propTypes.default.string,
    itc: _propTypes.default.string,
    content: _propTypes.default.object,
    atb: _propTypes.default.string
  })
};
Config.contextType = _storeProvider.default;

var _default = (0, _storeProvider.provideContext)(Config);

exports.default = _default;

/***/ }),
/* 78 */,
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(15);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(60));

var _extends2 = _interopRequireDefault(__webpack_require__(36));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(37));

var _react = _interopRequireWildcard(__webpack_require__(0));

var _propTypes = _interopRequireDefault(__webpack_require__(3));

var _fieldFrame = _interopRequireDefault(__webpack_require__(197));

var _button = _interopRequireDefault(__webpack_require__(6));

var _textEntry = _interopRequireDefault(__webpack_require__(199));

var _delete = _interopRequireDefault(__webpack_require__(206));

const _excluded = ["ariaLabels", "button", "className", "divider"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

/**
 * Creates a search component
 *
 * @param {Object} props - Component properties
 *
 * Search specific params
 * @param {Object} [props.ariaLabels] - Sets aria labels for the internals
 * @param {String} [props.ariaLabels.close] - Label for the clear button
 * @param {Element} [props.button] - Sets a button within the input
 * @param {String} [props.className] - Provides an optional class name to be set on the root
 * @param {Boolean} [props.divider] - Adds an optional divider between the button and input
 *
 * @returns {Component} - Search component
 */
const Search = /*#__PURE__*/_react.default.forwardRef(function search(props, ref) {
  const _ref = props || {},
        {
    ariaLabels,
    button,
    className,
    divider
  } = _ref,
        textEntryProps = (0, _objectWithoutProperties2.default)(_ref, _excluded);

  const {
    invalid,
    disabled,
    onChange,
    value
  } = textEntryProps || {};

  const _onClear = (0, _react.useCallback)(ev => {
    onChange('', {
      event: ev
    });
  }, [onChange]);

  return /*#__PURE__*/_react.default.createElement(_fieldFrame.default, {
    className,
    disabled,
    invalid
  }, /*#__PURE__*/_react.default.createElement(_textEntry.default, (0, _extends2.default)({}, textEntryProps, {
    ref: ref
  })), /*#__PURE__*/_react.default.createElement(_button.default, {
    "aria-label": ariaLabels.clear,
    design: "stateless",
    hidden: !value,
    icon: /*#__PURE__*/_react.default.createElement(_delete.default, null),
    onClick: _onClear,
    value: ""
  }), divider && button && /*#__PURE__*/_react.default.createElement("hr", null), button);
});

Search.propTypes = _objectSpread(_objectSpread(_objectSpread({}, _fieldFrame.default.propTypes), _textEntry.default.propTypes), {}, {
  /** Sets aria labels for the internals */
  ariaLabels: _propTypes.default.shape({
    /** Label for the clear button */
    clear: _propTypes.default.string
  }),

  /** Sets a button within the input */
  button: _propTypes.default.element,

  /** Provides an optional class name to be set on the root */
  className: _propTypes.default.string,

  /** Adds an optional divider between the button and input */
  divider: _propTypes.default.bool
}); //
// Remove inherited children validation, we don't require any children.
//

delete Search.propTypes.children;
Search.defaultProps = {
  ariaLabels: {
    clear: 'Clear search field'
  },
  type: 'search',
  role: 'searchbox',
  spellCheck: false
};
var _default = Search;
exports.default = _default;

/***/ }),
/* 80 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(setImmediate) {/* harmony import */ var _finally__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81);
/* harmony import */ var _allSettled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(82);



// Store setTimeout reference so promise-polyfill will be unaffected by
// other code modifying setTimeout (like sinon.useFakeTimers())
var setTimeoutFunc = setTimeout;

function isArray(x) {
  return Boolean(x && typeof x.length !== 'undefined');
}

function noop() {}

// Polyfill for Function.prototype.bind
function bind(fn, thisArg) {
  return function() {
    fn.apply(thisArg, arguments);
  };
}

/**
 * @constructor
 * @param {Function} fn
 */
function Promise(fn) {
  if (!(this instanceof Promise))
    throw new TypeError('Promises must be constructed via new');
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
  Promise._immediateFn(function() {
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
    if (newValue === self)
      throw new TypeError('A promise cannot be resolved with itself.');
    if (
      newValue &&
      (typeof newValue === 'object' || typeof newValue === 'function')
    ) {
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
    Promise._immediateFn(function() {
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
    fn(
      function(value) {
        if (done) return;
        done = true;
        resolve(self, value);
      },
      function(reason) {
        if (done) return;
        done = true;
        reject(self, reason);
      }
    );
  } catch (ex) {
    if (done) return;
    done = true;
    reject(self, ex);
  }
}

Promise.prototype['catch'] = function(onRejected) {
  return this.then(null, onRejected);
};

Promise.prototype.then = function(onFulfilled, onRejected) {
  // @ts-ignore
  var prom = new this.constructor(noop);

  handle(this, new Handler(onFulfilled, onRejected, prom));
  return prom;
};

Promise.prototype['finally'] = _finally__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"];

Promise.all = function(arr) {
  return new Promise(function(resolve, reject) {
    if (!isArray(arr)) {
      return reject(new TypeError('Promise.all accepts an array'));
    }

    var args = Array.prototype.slice.call(arr);
    if (args.length === 0) return resolve([]);
    var remaining = args.length;

    function res(i, val) {
      try {
        if (val && (typeof val === 'object' || typeof val === 'function')) {
          var then = val.then;
          if (typeof then === 'function') {
            then.call(
              val,
              function(val) {
                res(i, val);
              },
              reject
            );
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

Promise.allSettled = _allSettled__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"];

Promise.resolve = function(value) {
  if (value && typeof value === 'object' && value.constructor === Promise) {
    return value;
  }

  return new Promise(function(resolve) {
    resolve(value);
  });
};

Promise.reject = function(value) {
  return new Promise(function(resolve, reject) {
    reject(value);
  });
};

Promise.race = function(arr) {
  return new Promise(function(resolve, reject) {
    if (!isArray(arr)) {
      return reject(new TypeError('Promise.race accepts an array'));
    }

    for (var i = 0, len = arr.length; i < len; i++) {
      Promise.resolve(arr[i]).then(resolve, reject);
    }
  });
};

// Use polyfill for setImmediate for performance gains
Promise._immediateFn =
  // @ts-ignore
  (typeof setImmediate === 'function' &&
    function(fn) {
      // @ts-ignore
      setImmediate(fn);
    }) ||
  function(fn) {
    setTimeoutFunc(fn, 0);
  };

Promise._unhandledRejectionFn = function _unhandledRejectionFn(err) {
  if (typeof console !== 'undefined' && console) {
    console.warn('Possible Unhandled Promise Rejection:', err); // eslint-disable-line no-console
  }
};

/* harmony default export */ __webpack_exports__["a"] = (Promise);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(207).setImmediate))

/***/ }),
/* 81 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * @this {Promise}
 */
function finallyConstructor(callback) {
  var constructor = this.constructor;
  return this.then(
    function(value) {
      // @ts-ignore
      return constructor.resolve(callback()).then(function() {
        return value;
      });
    },
    function(reason) {
      // @ts-ignore
      return constructor.resolve(callback()).then(function() {
        // @ts-ignore
        return constructor.reject(reason);
      });
    }
  );
}

/* harmony default export */ __webpack_exports__["a"] = (finallyConstructor);


/***/ }),
/* 82 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function allSettled(arr) {
  var P = this;
  return new P(function(resolve, reject) {
    if (!(arr && typeof arr.length !== 'undefined')) {
      return reject(
        new TypeError(
          typeof arr +
            ' ' +
            arr +
            ' is not iterable(cannot read property Symbol(Symbol.iterator))'
        )
      );
    }
    var args = Array.prototype.slice.call(arr);
    if (args.length === 0) return resolve([]);
    var remaining = args.length;

    function res(i, val) {
      if (val && (typeof val === 'object' || typeof val === 'function')) {
        var then = val.then;
        if (typeof then === 'function') {
          then.call(
            val,
            function(val) {
              res(i, val);
            },
            function(e) {
              args[i] = { status: 'rejected', reason: e };
              if (--remaining === 0) {
                resolve(args);
              }
            }
          );
          return;
        }
      }
      args[i] = { status: 'fulfilled', value: val };
      if (--remaining === 0) {
        resolve(args);
      }
    }

    for (var i = 0; i < args.length; i++) {
      res(i, args[i]);
    }
  });
}

/* harmony default export */ __webpack_exports__["a"] = (allSettled);


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(root, factory) {
    'use strict';
    // Universal Module Definition (UMD) to support AMD, CommonJS/Node.js, Rhino, and browsers.

    /* istanbul ignore next */
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(209)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {}
}(this, function ErrorStackParser(StackFrame) {
    'use strict';

    var FIREFOX_SAFARI_STACK_REGEXP = /(^|@)\S+\:\d+/;
    var CHROME_IE_STACK_REGEXP = /^\s*at .*(\S+\:\d+|\(native\))/m;
    var SAFARI_NATIVE_CODE_REGEXP = /^(eval@)?(\[native code\])?$/;

    function(){}

    function(){}

    function _indexOf(array, target) {
        if (typeof Array.prototype.indexOf === 'function') {
            return array.indexOf(target);
        } else {
            for (var i = 0; i < array.length; i++) {
                if (array[i] === target) {
                    return i;
                }
            }
            return -1;
        }
    }

    return {
        /**
         * Given an Error object, extract the most information from it.
         *
         * @param {Error} error object
         * @return {Array} of StackFrames
         */
        parse: function(){},

        // Separate line and column numbers from a string of the form: (URI:Line:Column)
        extractLocation: function ErrorStackParser$$extractLocation(urlLike) {
            // Fail-fast but return locations like "(native)"
            if (urlLike.indexOf(':') === -1) {
                return [urlLike];
            }

            var regExp = /(.+?)(?:\:(\d+))?(?:\:(\d+))?$/;
            var parts = regExp.exec(urlLike.replace(/[\(\)]/g, ''));
            return [parts[1], parts[2] || undefined, parts[3] || undefined];
        },

        parseV8OrIE: function ErrorStackParser$$parseV8OrIE(error) {
            var filtered = _filter(error.stack.split('\n'), function(line) {
                return !!line.match(CHROME_IE_STACK_REGEXP);
            }, this);

            return _map(filtered, function(line) {
                if (line.indexOf('(eval ') > -1) {
                    // Throw away eval information until we implement stacktrace.js/stackframe#8
                    line = line.replace(/eval code/g, 'eval').replace(/(\(eval at [^\()]*)|(\)\,.*$)/g, '');
                }
                var tokens = line.replace(/^\s+/, '').replace(/\(eval code/g, '(').split(/\s+/).slice(1);
                var locationParts = this.extractLocation(tokens.pop());
                var functionName = tokens.join(' ') || undefined;
                var fileName = _indexOf(['eval', '<anonymous>'], locationParts[0]) > -1 ? undefined : locationParts[0];

                return new StackFrame(functionName, undefined, fileName, locationParts[1], locationParts[2], line);
            }, this);
        },

        parseFFOrSafari: function ErrorStackParser$$parseFFOrSafari(error) {
            var filtered = _filter(error.stack.split('\n'), function(line) {
                return !line.match(SAFARI_NATIVE_CODE_REGEXP);
            }, this);

            return _map(filtered, function(line) {
                // Throw away eval information until we implement stacktrace.js/stackframe#8
                if (line.indexOf(' > eval') > -1) {
                    line = line.replace(/ line (\d+)(?: > eval line \d+)* > eval\:\d+\:\d+/g, ':$1');
                }

                if (line.indexOf('@') === -1 && line.indexOf(':') === -1) {
                    // Safari eval frames only have function names and nothing else
                    return new StackFrame(line);
                } else {
                    var tokens = line.split('@');
                    var locationParts = this.extractLocation(tokens.pop());
                    var functionName = tokens.join('@') || undefined;
                    return new StackFrame(functionName,
                        undefined,
                        locationParts[0],
                        locationParts[1],
                        locationParts[2],
                        line);
                }
            }, this);
        },

        parseOpera: function(){}