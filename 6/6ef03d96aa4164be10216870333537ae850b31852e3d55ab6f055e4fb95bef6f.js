/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/js/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	__webpack_require__(2);
	
	__webpack_require__(78);
	
	var _chatConstants = __webpack_require__(1);
	
	var _chatApp = __webpack_require__(83);
	
	var _chatApp2 = _interopRequireDefault(_chatApp);
	
	var _notificationHeader = __webpack_require__(205);
	
	var _notificationHeader2 = _interopRequireDefault(_notificationHeader);
	
	var _react = __webpack_require__(84);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(208);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _appConfig = __webpack_require__(213);
	
	var _appConfig2 = _interopRequireDefault(_appConfig);
	
	var _applicationProvider = __webpack_require__(94);
	
	var _chat = __webpack_require__(214);
	
	var _i18n = __webpack_require__(107);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// TODO Josema: plugins/xmedia no se carga en el NPC porque no está adaptado al uso con react. Cuando se reintegre la rama
	// y tengamos disponible siempre el plugins/app/xmedia podríamos cargar directamente ese
	var preRender = function preRender() {
		var _require = window._zaraRequire || window.requirejs;
	
		if (!_require) {
			return Promise.reject('Could not connect to host application');
		}
	
		var loadHostData = new Promise(function (resolve) {
			_require(['plugins/events-manager', 'plugins/app-config', 'plugins/local-storage', 'plugins/analytics-data-layer', 'plugins/constants', 'plugins/url-builder', 'plugins/xmedia'], function (eventsBus, appConfig, storage, analyticsData, hostConstants, urlBuilder, xmedia) {
				resolve({
					eventsBus: eventsBus,
					appConfig: appConfig,
					storage: storage,
					analyticsData: analyticsData,
					hostConstants: hostConstants,
					urlBuilder: urlBuilder,
					xmedia: xmedia
				});
			});
		});
	
		return loadHostData.then(function (data) {
			return Promise.all([(0, _chat.getWorkgroups)(data.appConfig.storeId, data.appConfig.langId), (0, _chat.getVisibilityConfiguration)(data.appConfig.storeId, data.appConfig.langId), (0, _chat.getChatBusinessesMessages)(data.appConfig.storeId, data.appConfig.langId), (0, _i18n.loadTranslations)(data.appConfig.locale)]).then(function (_ref) {
				var _ref2 = _slicedToArray(_ref, 4),
				    workgroups = _ref2[0],
				    visibilityConfig = _ref2[1],
				    businessesMessages = _ref2[2],
				    translations = _ref2[3];
	
				return Object.assign(data, {
					workgroups: workgroups,
					visibilityConfig: visibilityConfig,
					businessesMessages: businessesMessages,
					translations: translations
				});
			});
		});
	};
	
	var renderApp = function renderApp(_ref3) {
		var appConfig = _ref3.appConfig,
		    hostConstants = _ref3.hostConstants,
		    workgroups = _ref3.workgroups,
		    visibilityConfig = _ref3.visibilityConfig,
		    businessesMessages = _ref3.businessesMessages,
		    eventsBus = _ref3.eventsBus,
		    storage = _ref3.storage,
		    analyticsData = _ref3.analyticsData,
		    urlBuilder = _ref3.urlBuilder,
		    xmedia = _ref3.xmedia,
		    translations = _ref3.translations;
	
		var app = _react2.default.createElement(
			_applicationProvider.ApplicationProvider,
			{
				appConfig: appConfig,
				hostConstants: hostConstants,
				workgroups: workgroups,
				visibilityConfig: visibilityConfig,
				businessesMessages: businessesMessages,
				events: eventsBus,
				storage: storage,
				analytics: analyticsData,
				urlBuilder: urlBuilder,
				xmedia: xmedia,
				translations: translations
			},
			_react2.default.createElement(_chatApp2.default, null),
			_react2.default.createElement(
				_react2.default.Fragment,
				null,
				_reactDom2.default.createPortal(_react2.default.createElement(_notificationHeader2.default, null), document.getElementById(_chatConstants.NOTIFICATIONS_HEADER_CONTAINER_ID))
			)
		);
		_reactDom2.default.render(app, document.getElementById(_chatConstants.CHAT_CONTAINER_ID));
	};
	
	var postRender = function postRender() {
		// TODO: Esta llamada a mochat ira en el provider de mochat para que este tras la interfaz
		// set up chat server support libraries
		Mochat.HelpClient.init(_appConfig2.default.chatServerUrl);
	};
	
	var bootstrapApplication = function bootstrapApplication() {
		preRender().then(renderApp).then(postRender);
	};
	
	bootstrapApplication();

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var COOKIE_CHAT_INFO = exports.COOKIE_CHAT_INFO = 'chin';
	var COOKIE_SELECTED_REGION = exports.COOKIE_SELECTED_REGION = 'selectedRegion';
	
	var APP_STATUS_CLOSED = exports.APP_STATUS_CLOSED = 'app-status:closed';
	var APP_STATUS_MINIMIZED = exports.APP_STATUS_MINIMIZED = 'app-status:minimized';
	var APP_STATUS_OPENED = exports.APP_STATUS_OPENED = 'app-status:opened';
	
	// When chat is loaded in a non-main view and there is no conversation ongoing
	var VIEW_NONE = exports.VIEW_NONE = 'view:hidden';
	
	var VIEW_CONVERSATION = exports.VIEW_CONVERSATION = 'view:conversation';
	var VIEW_OUT_OF_HOURS = exports.VIEW_OUT_OF_HOURS = 'view:out-of-hours';
	var VIEW_TRAY = exports.VIEW_TRAY = 'view:tray';
	var VIEW_START = exports.VIEW_START = 'view:start';
	var VIEW_BUTTONS = exports.VIEW_BUTTONS = 'view:buttons';
	
	var TYPING_MODE_ON = exports.TYPING_MODE_ON = 'typing:on';
	var TYPING_MODE_OFF = exports.TYPING_MODE_OFF = 'typing:off';
	
	var MESSAGE_TYPE_USER = exports.MESSAGE_TYPE_USER = 'user';
	var MESSAGE_TYPE_SUPPORT = exports.MESSAGE_TYPE_SUPPORT = 'contact';
	var MESSAGE_TYPE_SYSTEM = exports.MESSAGE_TYPE_SYSTEM = 'system';
	
	var MESSAGE_KIND_TEXT = exports.MESSAGE_KIND_TEXT = 'text';
	var MESSAGE_KIND_IMG = exports.MESSAGE_KIND_IMG = 'image';
	var MESSAGE_KIND_TEXT_HTML = exports.MESSAGE_KIND_TEXT_HTML = 'html';
	var MESSAGE_KIND_SHARE_PRODUCT = exports.MESSAGE_KIND_SHARE_PRODUCT = 'shared-product';
	
	var MESSAGE_METADATA_TYPE_FORM = exports.MESSAGE_METADATA_TYPE_FORM = 'form';
	var MESSAGE_METADATA_TYPE_SUBMIT = exports.MESSAGE_METADATA_TYPE_SUBMIT = 'submit';
	
	var CHAT_STATUS_CONNECTED = exports.CHAT_STATUS_CONNECTED = 'chat-status:connected';
	var CHAT_STATUS_CONNECTING = exports.CHAT_STATUS_CONNECTING = 'chat-status:connecting';
	var CHAT_STATUS_RECONNECTING = exports.CHAT_STATUS_RECONNECTING = 'chat-status:reconnecting';
	var CHAT_STATUS_DISCONNECTED = exports.CHAT_STATUS_DISCONNECTED = 'chat-status:disconnected';
	var CHAT_STATUS_NOT_CONNECTED = exports.CHAT_STATUS_NOT_CONNECTED = 'chat-status:not_connected';
	var CHAT_STATUS_TERMINATED = exports.CHAT_STATUS_TERMINATED = 'chat-status:terminated'; // Support agent ended conversation
	
	// Must be the same values as Workgroups received from REST API
	var WORKGROUP_BUSINESS_ONLINE = exports.WORKGROUP_BUSINESS_ONLINE = 'online';
	var WORKGROUP_BUSINESS_OFFLINE = exports.WORKGROUP_BUSINESS_OFFLINE = 'offline';
	
	var ANALYTICS_OPEN_CHAT = exports.ANALYTICS_OPEN_CHAT = '_OPEN_CHAT'; // chat unfolded (only if user is not connected?)
	var ANALYTICS_START_CHAT = exports.ANALYTICS_START_CHAT = '_START_CHAT'; // start chat button clicked
	var ANALYTICS_ATTEND_CHAT = exports.ANALYTICS_ATTEND_CHAT = '_ATTEND_CHAT'; // client connected to server successfuly
	var ANALYTICS_CLOSE_CHAT = exports.ANALYTICS_CLOSE_CHAT = '_CLOSE_CHAT'; // user clicks on close 'button'
	var ANALYTICS_ERROR_CHAT = exports.ANALYTICS_ERROR_CHAT = 'ERROR_CHAT';
	var ANALYTICS_CONTACT_FORM_LINK_CLICKED = exports.ANALYTICS_CONTACT_FORM_LINK_CLICKED = 'CONTACT_FORM_LINK_CLICKED'; // user clicks on chat button when not available
	
	// Values must be the codes configured in Moca
	var VIEW_TYPE_HOME = exports.VIEW_TYPE_HOME = 'home';
	var VIEW_TYPE_SUBHOME = exports.VIEW_TYPE_SUBHOME = 'subhome';
	var VIEW_TYPE_PRODUCTS_CATEGORY = exports.VIEW_TYPE_PRODUCTS_CATEGORY = 'products_category';
	var VIEW_TYPE_PRODUCT_DETAIL = exports.VIEW_TYPE_PRODUCT_DETAIL = 'product_detail';
	var VIEW_TYPE_SHOP_CART = exports.VIEW_TYPE_SHOP_CART = 'shop_cart';
	var VIEW_TYPE_SHIPPING_SELECTION = exports.VIEW_TYPE_SHIPPING_SELECTION = 'shipping_selection';
	var VIEW_TYPE_PAYMENT_SELECTION = exports.VIEW_TYPE_PAYMENT_SELECTION = 'payment_selection';
	var VIEW_TYPE_PAYMENT_DETAILS = exports.VIEW_TYPE_PAYMENT_DETAILS = 'payment_details';
	var VIEW_TYPE_ORDER_SUMMARY = exports.VIEW_TYPE_ORDER_SUMMARY = 'shop_order_summary';
	var VIEW_TYPE_ORDER_CONFIRMATION = exports.VIEW_TYPE_ORDER_CONFIRMATION = 'order_confirmation';
	var VIEW_TYPE_STORES_LOCATOR = exports.VIEW_TYPE_STORES_LOCATOR = 'stores_locator';
	var VIEW_TYPE_CONTACT = exports.VIEW_TYPE_CONTACT = 'contact';
	var VIEW_TYPE_USER_RETURNS = exports.VIEW_TYPE_USER_RETURNS = 'user_returns';
	var VIEW_TYPE_USER_EXCHANGES = exports.VIEW_TYPE_USER_EXCHANGES = 'user_exchanges';
	var VIEW_TYPE_GIFT_TICKET = exports.VIEW_TYPE_GIFT_TICKET = 'gift_ticket';
	
	// Logout reasons
	var LOGOUT_REASON_EXPLICIT = exports.LOGOUT_REASON_EXPLICIT = 'explicit';
	var LOGOUT_REASON_TIMEOUT = exports.LOGOUT_REASON_TIMEOUT = 'timeout';
	var LOGOUT_REASON_REPLACED = exports.LOGOUT_REASON_REPLACED = 'replaced';
	
	// Actors who initiates actions
	var ACTION_ACTOR_USER = exports.ACTION_ACTOR_USER = 'action-actor:user';
	var ACTION_ACTOR_SYSTEM_AUTO = exports.ACTION_ACTOR_SYSTEM_AUTO = 'action-actor:system_auto';
	var ACTION_ACTOR_SYSTEM_CONFIG = exports.ACTION_ACTOR_SYSTEM_CONFIG = 'action-actor:system_config';
	
	// DOM nodes identifiers
	var CHAT_CONTAINER_ID = exports.CHAT_CONTAINER_ID = 'chat-container';
	var NOTIFICATIONS_HEADER_CONTAINER_ID = exports.NOTIFICATIONS_HEADER_CONTAINER_ID = 'notifications-header-container';
	
	var MEDIA_QUERY_SMALL_BREAKPOINT = exports.MEDIA_QUERY_SMALL_BREAKPOINT = 768;
	var CHANNEL_MOBILE = exports.CHANNEL_MOBILE = 'channel:mobile';
	var CHANNEL_STANDARD = exports.CHANNEL_STANDARD = 'channel:standard';
	
	var LOGIN_RETRIES = exports.LOGIN_RETRIES = 15;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(3);
	
	__webpack_require__(36);
	
	__webpack_require__(48);

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(4);
	module.exports = __webpack_require__(7).Array.find;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
	var $export = __webpack_require__(5)
	  , $find   = __webpack_require__(23)(5)
	  , KEY     = 'find'
	  , forced  = true;
	// Shouldn't skip holes
	if(KEY in [])Array(1)[KEY](function(){ forced = false; });
	$export($export.P + $export.F * forced, 'Array', {
	  find: function find(callbackfn/*, that = undefined */){
	    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});
	__webpack_require__(35)(KEY);

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(6)
	  , core      = __webpack_require__(7)
	  , hide      = __webpack_require__(8)
	  , redefine  = __webpack_require__(18)
	  , ctx       = __webpack_require__(21)
	  , PROTOTYPE = 'prototype';
	
	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE]
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE] || (exports[PROTOTYPE] = {})
	    , key, own, out, exp;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    // export native or passed
	    out = (own ? target : source)[key];
	    // bind timers to global for call from export context
	    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // extend global
	    if(target)redefine(target, key, out, type & $export.U);
	    // export
	    if(exports[key] != out)hide(exports, key, exp);
	    if(IS_PROTO && expProto[key] != out)expProto[key] = out;
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

/***/ },
/* 6 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 7 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(9)
	  , createDesc = __webpack_require__(17);
	module.exports = __webpack_require__(13) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(10)
	  , IE8_DOM_DEFINE = __webpack_require__(12)
	  , toPrimitive    = __webpack_require__(16)
	  , dP             = Object.defineProperty;
	
	exports.f = __webpack_require__(13) ? Object.defineProperty : function defineProperty(O, P, Attributes){
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if(IE8_DOM_DEFINE)try {
	    return dP(O, P, Attributes);
	  } catch(e){ /* empty */ }
	  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	  if('value' in Attributes)O[P] = Attributes.value;
	  return O;
	};

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(11);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(13) && !__webpack_require__(14)(function(){
	  return Object.defineProperty(__webpack_require__(15)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(14)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(11)
	  , document = __webpack_require__(6).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(11);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(6)
	  , hide      = __webpack_require__(8)
	  , has       = __webpack_require__(19)
	  , SRC       = __webpack_require__(20)('src')
	  , TO_STRING = 'toString'
	  , $toString = Function[TO_STRING]
	  , TPL       = ('' + $toString).split(TO_STRING);
	
	__webpack_require__(7).inspectSource = function(it){
	  return $toString.call(it);
	};
	
	(module.exports = function(O, key, val, safe){
	  var isFunction = typeof val == 'function';
	  if(isFunction)has(val, 'name') || hide(val, 'name', key);
	  if(O[key] === val)return;
	  if(isFunction)has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
	  if(O === global){
	    O[key] = val;
	  } else {
	    if(!safe){
	      delete O[key];
	      hide(O, key, val);
	    } else {
	      if(O[key])O[key] = val;
	      else hide(O, key, val);
	    }
	  }
	// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
	})(Function.prototype, TO_STRING, function toString(){
	  return typeof this == 'function' && this[SRC] || $toString.call(this);
	});

/***/ },
/* 19 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 20 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(22);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 22 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	// 0 -> Array#forEach
	// 1 -> Array#map
	// 2 -> Array#filter
	// 3 -> Array#some
	// 4 -> Array#every
	// 5 -> Array#find
	// 6 -> Array#findIndex
	var ctx      = __webpack_require__(21)
	  , IObject  = __webpack_require__(24)
	  , toObject = __webpack_require__(26)
	  , toLength = __webpack_require__(28)
	  , asc      = __webpack_require__(30);
	module.exports = function(TYPE, $create){
	  var IS_MAP        = TYPE == 1
	    , IS_FILTER     = TYPE == 2
	    , IS_SOME       = TYPE == 3
	    , IS_EVERY      = TYPE == 4
	    , IS_FIND_INDEX = TYPE == 6
	    , NO_HOLES      = TYPE == 5 || IS_FIND_INDEX
	    , create        = $create || asc;
	  return function($this, callbackfn, that){
	    var O      = toObject($this)
	      , self   = IObject(O)
	      , f      = ctx(callbackfn, that, 3)
	      , length = toLength(self.length)
	      , index  = 0
	      , result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined
	      , val, res;
	    for(;length > index; index++)if(NO_HOLES || index in self){
	      val = self[index];
	      res = f(val, index, O);
	      if(TYPE){
	        if(IS_MAP)result[index] = res;            // map
	        else if(res)switch(TYPE){
	          case 3: return true;                    // some
	          case 5: return val;                     // find
	          case 6: return index;                   // findIndex
	          case 2: result.push(val);               // filter
	        } else if(IS_EVERY)return false;          // every
	      }
	    }
	    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
	  };
	};

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(25);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 25 */
/***/ function(module, exports) {

	var toString = {}.toString;
	
	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(27);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 27 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(29)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 29 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
	var speciesConstructor = __webpack_require__(31);
	
	module.exports = function(original, length){
	  return new (speciesConstructor(original))(length);
	};

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(11)
	  , isArray  = __webpack_require__(32)
	  , SPECIES  = __webpack_require__(33)('species');
	
	module.exports = function(original){
	  var C;
	  if(isArray(original)){
	    C = original.constructor;
	    // cross-realm fallback
	    if(typeof C == 'function' && (C === Array || isArray(C.prototype)))C = undefined;
	    if(isObject(C)){
	      C = C[SPECIES];
	      if(C === null)C = undefined;
	    }
	  } return C === undefined ? Array : C;
	};

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(25);
	module.exports = Array.isArray || function isArray(arg){
	  return cof(arg) == 'Array';
	};

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	var store      = __webpack_require__(34)('wks')
	  , uid        = __webpack_require__(20)
	  , Symbol     = __webpack_require__(6).Symbol
	  , USE_SYMBOL = typeof Symbol == 'function';
	
	var $exports = module.exports = function(name){
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};
	
	$exports.store = store;

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(6)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.31 Array.prototype[@@unscopables]
	var UNSCOPABLES = __webpack_require__(33)('unscopables')
	  , ArrayProto  = Array.prototype;
	if(ArrayProto[UNSCOPABLES] == undefined)__webpack_require__(8)(ArrayProto, UNSCOPABLES, {});
	module.exports = function(key){
	  ArrayProto[UNSCOPABLES][key] = true;
	};

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(37);
	module.exports = __webpack_require__(7).Object.assign;

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(5);
	
	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(38)});

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.2.1 Object.assign(target, source, ...)
	var getKeys  = __webpack_require__(39)
	  , gOPS     = __webpack_require__(46)
	  , pIE      = __webpack_require__(47)
	  , toObject = __webpack_require__(26)
	  , IObject  = __webpack_require__(24)
	  , $assign  = Object.assign;
	
	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = !$assign || __webpack_require__(14)(function(){
	  var A = {}
	    , B = {}
	    , S = Symbol()
	    , K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function(k){ B[k] = k; });
	  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
	}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
	  var T     = toObject(target)
	    , aLen  = arguments.length
	    , index = 1
	    , getSymbols = gOPS.f
	    , isEnum     = pIE.f;
	  while(aLen > index){
	    var S      = IObject(arguments[index++])
	      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
	  } return T;
	} : $assign;

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(40)
	  , enumBugKeys = __webpack_require__(45);
	
	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(19)
	  , toIObject    = __webpack_require__(41)
	  , arrayIndexOf = __webpack_require__(42)(false)
	  , IE_PROTO     = __webpack_require__(44)('IE_PROTO');
	
	module.exports = function(object, names){
	  var O      = toIObject(object)
	    , i      = 0
	    , result = []
	    , key;
	  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while(names.length > i)if(has(O, key = names[i++])){
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(24)
	  , defined = __webpack_require__(27);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(41)
	  , toLength  = __webpack_require__(28)
	  , toIndex   = __webpack_require__(43);
	module.exports = function(IS_INCLUDES){
	  return function($this, el, fromIndex){
	    var O      = toIObject($this)
	      , length = toLength(O.length)
	      , index  = toIndex(fromIndex, length)
	      , value;
	    // Array#includes uses SameValueZero equality algorithm
	    if(IS_INCLUDES && el != el)while(length > index){
	      value = O[index++];
	      if(value != value)return true;
	    // Array#toIndex ignores holes, Array#includes - not
	    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
	      if(O[index] === el)return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(29)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(34)('keys')
	  , uid    = __webpack_require__(20);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
/* 45 */
/***/ function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ },
/* 46 */
/***/ function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;

/***/ },
/* 47 */
/***/ function(module, exports) {

	exports.f = {}.propertyIsEnumerable;

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(49);
	__webpack_require__(51);
	__webpack_require__(62);
	__webpack_require__(65);
	module.exports = __webpack_require__(7).Promise;

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.3.6 Object.prototype.toString()
	var classof = __webpack_require__(50)
	  , test    = {};
	test[__webpack_require__(33)('toStringTag')] = 'z';
	if(test + '' != '[object z]'){
	  __webpack_require__(18)(Object.prototype, 'toString', function toString(){
	    return '[object ' + classof(this) + ']';
	  }, true);
	}

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(25)
	  , TAG = __webpack_require__(33)('toStringTag')
	  // ES3 wrong here
	  , ARG = cof(function(){ return arguments; }()) == 'Arguments';
	
	// fallback for IE11 Script Access Denied error
	var tryGet = function(it, key){
	  try {
	    return it[key];
	  } catch(e){ /* empty */ }
	};
	
	module.exports = function(it){
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(52)(true);
	
	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(53)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(29)
	  , defined   = __webpack_require__(27);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(54)
	  , $export        = __webpack_require__(5)
	  , redefine       = __webpack_require__(18)
	  , hide           = __webpack_require__(8)
	  , has            = __webpack_require__(19)
	  , Iterators      = __webpack_require__(55)
	  , $iterCreate    = __webpack_require__(56)
	  , setToStringTag = __webpack_require__(60)
	  , getPrototypeOf = __webpack_require__(61)
	  , ITERATOR       = __webpack_require__(33)('iterator')
	  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR    = '@@iterator'
	  , KEYS           = 'keys'
	  , VALUES         = 'values';
	
	var returnThis = function(){ return this; };
	
	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG        = NAME + ' Iterator'
	    , DEF_VALUES = DEFAULT == VALUES
	    , VALUES_BUG = false
	    , proto      = Base.prototype
	    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , $default   = $native || getMethod(DEFAULT)
	    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
	    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
	    , methods, key, IteratorPrototype;
	  // Fix native
	  if($anyNative){
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
	    if(IteratorPrototype !== Object.prototype){
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if(DEF_VALUES && $native && $native.name !== VALUES){
	    VALUES_BUG = true;
	    $default = function values(){ return $native.call(this); };
	  }
	  // Define iterator
	  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEF_VALUES ? $default : getMethod(VALUES),
	      keys:    IS_SET     ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },
/* 54 */
/***/ function(module, exports) {

	module.exports = false;

/***/ },
/* 55 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var create         = __webpack_require__(57)
	  , descriptor     = __webpack_require__(17)
	  , setToStringTag = __webpack_require__(60)
	  , IteratorPrototype = {};
	
	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(8)(IteratorPrototype, __webpack_require__(33)('iterator'), function(){ return this; });
	
	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject    = __webpack_require__(10)
	  , dPs         = __webpack_require__(58)
	  , enumBugKeys = __webpack_require__(45)
	  , IE_PROTO    = __webpack_require__(44)('IE_PROTO')
	  , Empty       = function(){ /* empty */ }
	  , PROTOTYPE   = 'prototype';
	
	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function(){
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(15)('iframe')
	    , i      = enumBugKeys.length
	    , lt     = '<'
	    , gt     = '>'
	    , iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(59).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
	  return createDict();
	};
	
	module.exports = Object.create || function create(O, Properties){
	  var result;
	  if(O !== null){
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty;
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};


/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	var dP       = __webpack_require__(9)
	  , anObject = __webpack_require__(10)
	  , getKeys  = __webpack_require__(39);
	
	module.exports = __webpack_require__(13) ? Object.defineProperties : function defineProperties(O, Properties){
	  anObject(O);
	  var keys   = getKeys(Properties)
	    , length = keys.length
	    , i = 0
	    , P;
	  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(6).document && document.documentElement;

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(9).f
	  , has = __webpack_require__(19)
	  , TAG = __webpack_require__(33)('toStringTag');
	
	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has         = __webpack_require__(19)
	  , toObject    = __webpack_require__(26)
	  , IE_PROTO    = __webpack_require__(44)('IE_PROTO')
	  , ObjectProto = Object.prototype;
	
	module.exports = Object.getPrototypeOf || function(O){
	  O = toObject(O);
	  if(has(O, IE_PROTO))return O[IE_PROTO];
	  if(typeof O.constructor == 'function' && O instanceof O.constructor){
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	var $iterators    = __webpack_require__(63)
	  , redefine      = __webpack_require__(18)
	  , global        = __webpack_require__(6)
	  , hide          = __webpack_require__(8)
	  , Iterators     = __webpack_require__(55)
	  , wks           = __webpack_require__(33)
	  , ITERATOR      = wks('iterator')
	  , TO_STRING_TAG = wks('toStringTag')
	  , ArrayValues   = Iterators.Array;
	
	for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
	  var NAME       = collections[i]
	    , Collection = global[NAME]
	    , proto      = Collection && Collection.prototype
	    , key;
	  if(proto){
	    if(!proto[ITERATOR])hide(proto, ITERATOR, ArrayValues);
	    if(!proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
	    Iterators[NAME] = ArrayValues;
	    for(key in $iterators)if(!proto[key])redefine(proto, key, $iterators[key], true);
	  }
	}

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(35)
	  , step             = __webpack_require__(64)
	  , Iterators        = __webpack_require__(55)
	  , toIObject        = __webpack_require__(41);
	
	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(53)(Array, 'Array', function(iterated, kind){
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , kind  = this._k
	    , index = this._i++;
	  if(!O || index >= O.length){
	    this._t = undefined;
	    return step(1);
	  }
	  if(kind == 'keys'  )return step(0, index);
	  if(kind == 'values')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');
	
	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;
	
	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ },
/* 64 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY            = __webpack_require__(54)
	  , global             = __webpack_require__(6)
	  , ctx                = __webpack_require__(21)
	  , classof            = __webpack_require__(50)
	  , $export            = __webpack_require__(5)
	  , isObject           = __webpack_require__(11)
	  , aFunction          = __webpack_require__(22)
	  , anInstance         = __webpack_require__(66)
	  , forOf              = __webpack_require__(67)
	  , speciesConstructor = __webpack_require__(71)
	  , task               = __webpack_require__(72).set
	  , microtask          = __webpack_require__(74)()
	  , PROMISE            = 'Promise'
	  , TypeError          = global.TypeError
	  , process            = global.process
	  , $Promise           = global[PROMISE]
	  , process            = global.process
	  , isNode             = classof(process) == 'process'
	  , empty              = function(){ /* empty */ }
	  , Internal, GenericPromiseCapability, Wrapper;
	
	var USE_NATIVE = !!function(){
	  try {
	    // correct subclassing with @@species support
	    var promise     = $Promise.resolve(1)
	      , FakePromise = (promise.constructor = {})[__webpack_require__(33)('species')] = function(exec){ exec(empty, empty); };
	    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
	    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
	  } catch(e){ /* empty */ }
	}();
	
	// helpers
	var sameConstructor = function(a, b){
	  // with library wrapper special case
	  return a === b || a === $Promise && b === Wrapper;
	};
	var isThenable = function(it){
	  var then;
	  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
	};
	var newPromiseCapability = function(C){
	  return sameConstructor($Promise, C)
	    ? new PromiseCapability(C)
	    : new GenericPromiseCapability(C);
	};
	var PromiseCapability = GenericPromiseCapability = function(C){
	  var resolve, reject;
	  this.promise = new C(function($$resolve, $$reject){
	    if(resolve !== undefined || reject !== undefined)throw TypeError('Bad Promise constructor');
	    resolve = $$resolve;
	    reject  = $$reject;
	  });
	  this.resolve = aFunction(resolve);
	  this.reject  = aFunction(reject);
	};
	var perform = function(exec){
	  try {
	    exec();
	  } catch(e){
	    return {error: e};
	  }
	};
	var notify = function(promise, isReject){
	  if(promise._n)return;
	  promise._n = true;
	  var chain = promise._c;
	  microtask(function(){
	    var value = promise._v
	      , ok    = promise._s == 1
	      , i     = 0;
	    var run = function(reaction){
	      var handler = ok ? reaction.ok : reaction.fail
	        , resolve = reaction.resolve
	        , reject  = reaction.reject
	        , domain  = reaction.domain
	        , result, then;
	      try {
	        if(handler){
	          if(!ok){
	            if(promise._h == 2)onHandleUnhandled(promise);
	            promise._h = 1;
	          }
	          if(handler === true)result = value;
	          else {
	            if(domain)domain.enter();
	            result = handler(value);
	            if(domain)domain.exit();
	          }
	          if(result === reaction.promise){
	            reject(TypeError('Promise-chain cycle'));
	          } else if(then = isThenable(result)){
	            then.call(result, resolve, reject);
	          } else resolve(result);
	        } else reject(value);
	      } catch(e){
	        reject(e);
	      }
	    };
	    while(chain.length > i)run(chain[i++]); // variable length - can't use forEach
	    promise._c = [];
	    promise._n = false;
	    if(isReject && !promise._h)onUnhandled(promise);
	  });
	};
	var onUnhandled = function(promise){
	  task.call(global, function(){
	    var value = promise._v
	      , abrupt, handler, console;
	    if(isUnhandled(promise)){
	      abrupt = perform(function(){
	        if(isNode){
	          process.emit('unhandledRejection', value, promise);
	        } else if(handler = global.onunhandledrejection){
	          handler({promise: promise, reason: value});
	        } else if((console = global.console) && console.error){
	          console.error('Unhandled promise rejection', value);
	        }
	      });
	      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
	      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
	    } promise._a = undefined;
	    if(abrupt)throw abrupt.error;
	  });
	};
	var isUnhandled = function(promise){
	  if(promise._h == 1)return false;
	  var chain = promise._a || promise._c
	    , i     = 0
	    , reaction;
	  while(chain.length > i){
	    reaction = chain[i++];
	    if(reaction.fail || !isUnhandled(reaction.promise))return false;
	  } return true;
	};
	var onHandleUnhandled = function(promise){
	  task.call(global, function(){
	    var handler;
	    if(isNode){
	      process.emit('rejectionHandled', promise);
	    } else if(handler = global.onrejectionhandled){
	      handler({promise: promise, reason: promise._v});
	    }
	  });
	};
	var $reject = function(value){
	  var promise = this;
	  if(promise._d)return;
	  promise._d = true;
	  promise = promise._w || promise; // unwrap
	  promise._v = value;
	  promise._s = 2;
	  if(!promise._a)promise._a = promise._c.slice();
	  notify(promise, true);
	};
	var $resolve = function(value){
	  var promise = this
	    , then;
	  if(promise._d)return;
	  promise._d = true;
	  promise = promise._w || promise; // unwrap
	  try {
	    if(promise === value)throw TypeError("Promise can't be resolved itself");
	    if(then = isThenable(value)){
	      microtask(function(){
	        var wrapper = {_w: promise, _d: false}; // wrap
	        try {
	          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
	        } catch(e){
	          $reject.call(wrapper, e);
	        }
	      });
	    } else {
	      promise._v = value;
	      promise._s = 1;
	      notify(promise, false);
	    }
	  } catch(e){
	    $reject.call({_w: promise, _d: false}, e); // wrap
	  }
	};
	
	// constructor polyfill
	if(!USE_NATIVE){
	  // 25.4.3.1 Promise(executor)
	  $Promise = function Promise(executor){
	    anInstance(this, $Promise, PROMISE, '_h');
	    aFunction(executor);
	    Internal.call(this);
	    try {
	      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
	    } catch(err){
	      $reject.call(this, err);
	    }
	  };
	  Internal = function Promise(executor){
	    this._c = [];             // <- awaiting reactions
	    this._a = undefined;      // <- checked in isUnhandled reactions
	    this._s = 0;              // <- state
	    this._d = false;          // <- done
	    this._v = undefined;      // <- value
	    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
	    this._n = false;          // <- notify
	  };
	  Internal.prototype = __webpack_require__(75)($Promise.prototype, {
	    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
	    then: function then(onFulfilled, onRejected){
	      var reaction    = newPromiseCapability(speciesConstructor(this, $Promise));
	      reaction.ok     = typeof onFulfilled == 'function' ? onFulfilled : true;
	      reaction.fail   = typeof onRejected == 'function' && onRejected;
	      reaction.domain = isNode ? process.domain : undefined;
	      this._c.push(reaction);
	      if(this._a)this._a.push(reaction);
	      if(this._s)notify(this, false);
	      return reaction.promise;
	    },
	    // 25.4.5.1 Promise.prototype.catch(onRejected)
	    'catch': function(onRejected){
	      return this.then(undefined, onRejected);
	    }
	  });
	  PromiseCapability = function(){
	    var promise  = new Internal;
	    this.promise = promise;
	    this.resolve = ctx($resolve, promise, 1);
	    this.reject  = ctx($reject, promise, 1);
	  };
	}
	
	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Promise: $Promise});
	__webpack_require__(60)($Promise, PROMISE);
	__webpack_require__(76)(PROMISE);
	Wrapper = __webpack_require__(7)[PROMISE];
	
	// statics
	$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
	  // 25.4.4.5 Promise.reject(r)
	  reject: function reject(r){
	    var capability = newPromiseCapability(this)
	      , $$reject   = capability.reject;
	    $$reject(r);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
	  // 25.4.4.6 Promise.resolve(x)
	  resolve: function resolve(x){
	    // instanceof instead of internal slot check because we should fix it without replacement native Promise core
	    if(x instanceof $Promise && sameConstructor(x.constructor, this))return x;
	    var capability = newPromiseCapability(this)
	      , $$resolve  = capability.resolve;
	    $$resolve(x);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(77)(function(iter){
	  $Promise.all(iter)['catch'](empty);
	})), PROMISE, {
	  // 25.4.4.1 Promise.all(iterable)
	  all: function all(iterable){
	    var C          = this
	      , capability = newPromiseCapability(C)
	      , resolve    = capability.resolve
	      , reject     = capability.reject;
	    var abrupt = perform(function(){
	      var values    = []
	        , index     = 0
	        , remaining = 1;
	      forOf(iterable, false, function(promise){
	        var $index        = index++
	          , alreadyCalled = false;
	        values.push(undefined);
	        remaining++;
	        C.resolve(promise).then(function(value){
	          if(alreadyCalled)return;
	          alreadyCalled  = true;
	          values[$index] = value;
	          --remaining || resolve(values);
	        }, reject);
	      });
	      --remaining || resolve(values);
	    });
	    if(abrupt)reject(abrupt.error);
	    return capability.promise;
	  },
	  // 25.4.4.4 Promise.race(iterable)
	  race: function race(iterable){
	    var C          = this
	      , capability = newPromiseCapability(C)
	      , reject     = capability.reject;
	    var abrupt = perform(function(){
	      forOf(iterable, false, function(promise){
	        C.resolve(promise).then(capability.resolve, reject);
	      });
	    });
	    if(abrupt)reject(abrupt.error);
	    return capability.promise;
	  }
	});

/***/ },
/* 66 */
/***/ function(module, exports) {

	module.exports = function(it, Constructor, name, forbiddenField){
	  if(!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)){
	    throw TypeError(name + ': incorrect invocation!');
	  } return it;
	};

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	var ctx         = __webpack_require__(21)
	  , call        = __webpack_require__(68)
	  , isArrayIter = __webpack_require__(69)
	  , anObject    = __webpack_require__(10)
	  , toLength    = __webpack_require__(28)
	  , getIterFn   = __webpack_require__(70)
	  , BREAK       = {}
	  , RETURN      = {};
	var exports = module.exports = function(iterable, entries, fn, that, ITERATOR){
	  var iterFn = ITERATOR ? function(){ return iterable; } : getIterFn(iterable)
	    , f      = ctx(fn, that, entries ? 2 : 1)
	    , index  = 0
	    , length, step, iterator, result;
	  if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
	  // fast case for arrays with default iterator
	  if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){
	    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
	    if(result === BREAK || result === RETURN)return result;
	  } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
	    result = call(iterator, f, step.value, entries);
	    if(result === BREAK || result === RETURN)return result;
	  }
	};
	exports.BREAK  = BREAK;
	exports.RETURN = RETURN;

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(10);
	module.exports = function(iterator, fn, value, entries){
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch(e){
	    var ret = iterator['return'];
	    if(ret !== undefined)anObject(ret.call(iterator));
	    throw e;
	  }
	};

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators  = __webpack_require__(55)
	  , ITERATOR   = __webpack_require__(33)('iterator')
	  , ArrayProto = Array.prototype;
	
	module.exports = function(it){
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(50)
	  , ITERATOR  = __webpack_require__(33)('iterator')
	  , Iterators = __webpack_require__(55);
	module.exports = __webpack_require__(7).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	// 7.3.20 SpeciesConstructor(O, defaultConstructor)
	var anObject  = __webpack_require__(10)
	  , aFunction = __webpack_require__(22)
	  , SPECIES   = __webpack_require__(33)('species');
	module.exports = function(O, D){
	  var C = anObject(O).constructor, S;
	  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
	};

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	var ctx                = __webpack_require__(21)
	  , invoke             = __webpack_require__(73)
	  , html               = __webpack_require__(59)
	  , cel                = __webpack_require__(15)
	  , global             = __webpack_require__(6)
	  , process            = global.process
	  , setTask            = global.setImmediate
	  , clearTask          = global.clearImmediate
	  , MessageChannel     = global.MessageChannel
	  , counter            = 0
	  , queue              = {}
	  , ONREADYSTATECHANGE = 'onreadystatechange'
	  , defer, channel, port;
	var run = function(){
	  var id = +this;
	  if(queue.hasOwnProperty(id)){
	    var fn = queue[id];
	    delete queue[id];
	    fn();
	  }
	};
	var listener = function(event){
	  run.call(event.data);
	};
	// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
	if(!setTask || !clearTask){
	  setTask = function setImmediate(fn){
	    var args = [], i = 1;
	    while(arguments.length > i)args.push(arguments[i++]);
	    queue[++counter] = function(){
	      invoke(typeof fn == 'function' ? fn : Function(fn), args);
	    };
	    defer(counter);
	    return counter;
	  };
	  clearTask = function clearImmediate(id){
	    delete queue[id];
	  };
	  // Node.js 0.8-
	  if(__webpack_require__(25)(process) == 'process'){
	    defer = function(id){
	      process.nextTick(ctx(run, id, 1));
	    };
	  // Browsers with MessageChannel, includes WebWorkers
	  } else if(MessageChannel){
	    channel = new MessageChannel;
	    port    = channel.port2;
	    channel.port1.onmessage = listener;
	    defer = ctx(port.postMessage, port, 1);
	  // Browsers with postMessage, skip WebWorkers
	  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
	  } else if(global.addEventListener && typeof postMessage == 'function' && !global.importScripts){
	    defer = function(id){
	      global.postMessage(id + '', '*');
	    };
	    global.addEventListener('message', listener, false);
	  // IE8-
	  } else if(ONREADYSTATECHANGE in cel('script')){
	    defer = function(id){
	      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function(){
	        html.removeChild(this);
	        run.call(id);
	      };
	    };
	  // Rest old browsers
	  } else {
	    defer = function(id){
	      setTimeout(ctx(run, id, 1), 0);
	    };
	  }
	}
	module.exports = {
	  set:   setTask,
	  clear: clearTask
	};

/***/ },
/* 73 */
/***/ function(module, exports) {

	// fast apply, http://jsperf.lnkit.com/fast-apply/5
	module.exports = function(fn, args, that){
	  var un = that === undefined;
	  switch(args.length){
	    case 0: return un ? fn()
	                      : fn.call(that);
	    case 1: return un ? fn(args[0])
	                      : fn.call(that, args[0]);
	    case 2: return un ? fn(args[0], args[1])
	                      : fn.call(that, args[0], args[1]);
	    case 3: return un ? fn(args[0], args[1], args[2])
	                      : fn.call(that, args[0], args[1], args[2]);
	    case 4: return un ? fn(args[0], args[1], args[2], args[3])
	                      : fn.call(that, args[0], args[1], args[2], args[3]);
	  } return              fn.apply(that, args);
	};

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(6)
	  , macrotask = __webpack_require__(72).set
	  , Observer  = global.MutationObserver || global.WebKitMutationObserver
	  , process   = global.process
	  , Promise   = global.Promise
	  , isNode    = __webpack_require__(25)(process) == 'process';
	
	module.exports = function(){
	  var head, last, notify;
	
	  var flush = function(){
	    var parent, fn;
	    if(isNode && (parent = process.domain))parent.exit();
	    while(head){
	      fn   = head.fn;
	      head = head.next;
	      try {
	        fn();
	      } catch(e){
	        if(head)notify();
	        else last = undefined;
	        throw e;
	      }
	    } last = undefined;
	    if(parent)parent.enter();
	  };
	
	  // Node.js
	  if(isNode){
	    notify = function(){
	      process.nextTick(flush);
	    };
	  // browsers with MutationObserver
	  } else if(Observer){
	    var toggle = true
	      , node   = document.createTextNode('');
	    new Observer(flush).observe(node, {characterData: true}); // eslint-disable-line no-new
	    notify = function(){
	      node.data = toggle = !toggle;
	    };
	  // environments with maybe non-completely correct, but existent Promise
	  } else if(Promise && Promise.resolve){
	    var promise = Promise.resolve();
	    notify = function(){
	      promise.then(flush);
	    };
	  // for other environments - macrotask based on:
	  // - setImmediate
	  // - MessageChannel
	  // - window.postMessag
	  // - onreadystatechange
	  // - setTimeout
	  } else {
	    notify = function(){
	      // strange IE + webpack dev server bug - use .call(global)
	      macrotask.call(global, flush);
	    };
	  }
	
	  return function(fn){
	    var task = {fn: fn, next: undefined};
	    if(last)last.next = task;
	    if(!head){
	      head = task;
	      notify();
	    } last = task;
	  };
	};

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	var redefine = __webpack_require__(18);
	module.exports = function(target, src, safe){
	  for(var key in src)redefine(target, key, src[key], safe);
	  return target;
	};

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global      = __webpack_require__(6)
	  , dP          = __webpack_require__(9)
	  , DESCRIPTORS = __webpack_require__(13)
	  , SPECIES     = __webpack_require__(33)('species');
	
	module.exports = function(KEY){
	  var C = global[KEY];
	  if(DESCRIPTORS && C && !C[SPECIES])dP.f(C, SPECIES, {
	    configurable: true,
	    get: function(){ return this; }
	  });
	};

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	var ITERATOR     = __webpack_require__(33)('iterator')
	  , SAFE_CLOSING = false;
	
	try {
	  var riter = [7][ITERATOR]();
	  riter['return'] = function(){ SAFE_CLOSING = true; };
	  Array.from(riter, function(){ throw 2; });
	} catch(e){ /* empty */ }
	
	module.exports = function(exec, skipClosing){
	  if(!skipClosing && !SAFE_CLOSING)return false;
	  var safe = false;
	  try {
	    var arr  = [7]
	      , iter = arr[ITERATOR]();
	    iter.next = function(){ return {done: safe = true}; };
	    arr[ITERATOR] = function(){ return iter; };
	    exec(arr);
	  } catch(e){ /* empty */ }
	  return safe;
	};

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	// Consumers of this library must provide jQuery in the global scope (peer dependency)
	// Exmaple: window.jQuery = window.$ = <jQuery object>;
	__webpack_require__(79);
	__webpack_require__(80);
	__webpack_require__(81);
	__webpack_require__(82);
	


/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_LOCAL_MODULE_0__;var __WEBPACK_LOCAL_MODULE_1__;var __WEBPACK_LOCAL_MODULE_2__;var __WEBPACK_LOCAL_MODULE_3__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_LOCAL_MODULE_4__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_LOCAL_MODULE_5__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_LOCAL_MODULE_6__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_LOCAL_MODULE_7__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_LOCAL_MODULE_8__;/** File: strophe.js
	 *  A JavaScript library for writing XMPP clients.
	 *
	 *  This library uses either Bidirectional-streams Over Synchronous HTTP (BOSH)
	 *  to emulate a persistent, stateful, two-way connection to an XMPP server or
	 *  alternatively WebSockets.
	 *
	 *  More information on BOSH can be found in XEP 124.
	 *  For more information on XMPP-over WebSocket see this RFC:
	 *  http://tools.ietf.org/html/rfc7395
	 */
	
	/* All of the Strophe globals are defined in this special function below so
	 * that references to the globals become closures.  This will ensure that
	 * on page reload, these references will still be available to callbacks
	 * that are still executing.
	 */
	
	/* jshint ignore:start */
	(function (callback) {
	/* jshint ignore:end */
	
	// This code was written by Tyler Akins and has been placed in the
	// public domain.  It would be nice if you left this header intact.
	// Base64 code from Tyler Akins -- http://rumkin.com
	
	(function (root, factory) {
	    if (true) {
	        !(__WEBPACK_LOCAL_MODULE_0__ = function () {
	            return factory();
	        }.call(exports, __webpack_require__, exports, module));
	    } else {
	        // Browser globals
	        root.Base64 = factory();
	    }
	}(this, function () {
	    var keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
	
	    var obj = {
	        /**
	         * Encodes a string in base64
	         * @param {String} input The string to encode in base64.
	         */
	        encode: function (input) {
	            var output = "";
	            var chr1, chr2, chr3;
	            var enc1, enc2, enc3, enc4;
	            var i = 0;
	
	            do {
	                chr1 = input.charCodeAt(i++);
	                chr2 = input.charCodeAt(i++);
	                chr3 = input.charCodeAt(i++);
	
	                enc1 = chr1 >> 2;
	                enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
	                enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
	                enc4 = chr3 & 63;
	
	                if (isNaN(chr2)) {
	                    enc2 = ((chr1 & 3) << 4);
	                    enc3 = enc4 = 64;
	                } else if (isNaN(chr3)) {
	                    enc4 = 64;
	                }
	
	                output = output + keyStr.charAt(enc1) + keyStr.charAt(enc2) +
	                    keyStr.charAt(enc3) + keyStr.charAt(enc4);
	            } while (i < input.length);
	
	            return output;
	        },
	
	        /**
	         * Decodes a base64 string.
	         * @param {String} input The string to decode.
	         */
	        decode: function (input) {
	            var output = "";
	            var chr1, chr2, chr3;
	            var enc1, enc2, enc3, enc4;
	            var i = 0;
	
	            // remove all characters that are not A-Z, a-z, 0-9, +, /, or =
	            input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
	
	            do {
	                enc1 = keyStr.indexOf(input.charAt(i++));
	                enc2 = keyStr.indexOf(input.charAt(i++));
	                enc3 = keyStr.indexOf(input.charAt(i++));
	                enc4 = keyStr.indexOf(input.charAt(i++));
	
	                chr1 = (enc1 << 2) | (enc2 >> 4);
	                chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
	                chr3 = ((enc3 & 3) << 6) | enc4;
	
	                output = output + String.fromCharCode(chr1);
	
	                if (enc3 != 64) {
	                    output = output + String.fromCharCode(chr2);
	                }
	                if (enc4 != 64) {
	                    output = output + String.fromCharCode(chr3);
	                }
	            } while (i < input.length);
	
	            return output;
	        }
	    };
	    return obj;
	}));
	
	/*
	 * A JavaScript implementation of the Secure Hash Algorithm, SHA-1, as defined
	 * in FIPS PUB 180-1
	 * Version 2.1a Copyright Paul Johnston 2000 - 2002.
	 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
	 * Distributed under the BSD License
	 * See http://pajhome.org.uk/crypt/md5 for details.
	 */
	
	/* jshint undef: true, unused: true:, noarg: true, latedef: false */
	/* global define */
	
	/* Some functions and variables have been stripped for use with Strophe */
	
	(function (root, factory) {
	    if (true) {
	        !(__WEBPACK_LOCAL_MODULE_1__ = function () {
	            return factory();
	        }.call(exports, __webpack_require__, exports, module));
	    } else {
	        // Browser globals
	        root.SHA1 = factory();
	    }
	}(this, function () {
	
	/*
	 * Calculate the SHA-1 of an array of big-endian words, and a bit length
	 */
	function core_sha1(x, len)
	{
	  /* append padding */
	  x[len >> 5] |= 0x80 << (24 - len % 32);
	  x[((len + 64 >> 9) << 4) + 15] = len;
	
	  var w = new Array(80);
	  var a =  1732584193;
	  var b = -271733879;
	  var c = -1732584194;
	  var d =  271733878;
	  var e = -1009589776;
	
	  var i, j, t, olda, oldb, oldc, oldd, olde;
	  for (i = 0; i < x.length; i += 16)
	  {
	    olda = a;
	    oldb = b;
	    oldc = c;
	    oldd = d;
	    olde = e;
	
	    for (j = 0; j < 80; j++)
	    {
	      if (j < 16) { w[j] = x[i + j]; }
	      else { w[j] = rol(w[j-3] ^ w[j-8] ^ w[j-14] ^ w[j-16], 1); }
	      t = safe_add(safe_add(rol(a, 5), sha1_ft(j, b, c, d)),
	                       safe_add(safe_add(e, w[j]), sha1_kt(j)));
	      e = d;
	      d = c;
	      c = rol(b, 30);
	      b = a;
	      a = t;
	    }
	
	    a = safe_add(a, olda);
	    b = safe_add(b, oldb);
	    c = safe_add(c, oldc);
	    d = safe_add(d, oldd);
	    e = safe_add(e, olde);
	  }
	  return [a, b, c, d, e];
	}
	
	/*
	 * Perform the appropriate triplet combination function for the current
	 * iteration
	 */
	function sha1_ft(t, b, c, d)
	{
	  if (t < 20) { return (b & c) | ((~b) & d); }
	  if (t < 40) { return b ^ c ^ d; }
	  if (t < 60) { return (b & c) | (b & d) | (c & d); }
	  return b ^ c ^ d;
	}
	
	/*
	 * Determine the appropriate additive constant for the current iteration
	 */
	function sha1_kt(t)
	{
	  return (t < 20) ?  1518500249 : (t < 40) ?  1859775393 :
	         (t < 60) ? -1894007588 : -899497514;
	}
	
	/*
	 * Calculate the HMAC-SHA1 of a key and some data
	 */
	function core_hmac_sha1(key, data)
	{
	  var bkey = str2binb(key);
	  if (bkey.length > 16) { bkey = core_sha1(bkey, key.length * 8); }
	
	  var ipad = new Array(16), opad = new Array(16);
	  for (var i = 0; i < 16; i++)
	  {
	    ipad[i] = bkey[i] ^ 0x36363636;
	    opad[i] = bkey[i] ^ 0x5C5C5C5C;
	  }
	
	  var hash = core_sha1(ipad.concat(str2binb(data)), 512 + data.length * 8);
	  return core_sha1(opad.concat(hash), 512 + 160);
	}
	
	/*
	 * Add integers, wrapping at 2^32. This uses 16-bit operations internally
	 * to work around bugs in some JS interpreters.
	 */
	function safe_add(x, y)
	{
	  var lsw = (x & 0xFFFF) + (y & 0xFFFF);
	  var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
	  return (msw << 16) | (lsw & 0xFFFF);
	}
	
	/*
	 * Bitwise rotate a 32-bit number to the left.
	 */
	function rol(num, cnt)
	{
	  return (num << cnt) | (num >>> (32 - cnt));
	}
	
	/*
	 * Convert an 8-bit or 16-bit string to an array of big-endian words
	 * In 8-bit function, characters >255 have their hi-byte silently ignored.
	 */
	function str2binb(str)
	{
	  var bin = [];
	  var mask = 255;
	  for (var i = 0; i < str.length * 8; i += 8)
	  {
	    bin[i>>5] |= (str.charCodeAt(i / 8) & mask) << (24 - i%32);
	  }
	  return bin;
	}
	
	/*
	 * Convert an array of big-endian words to a string
	 */
	function binb2str(bin)
	{
	  var str = "";
	  var mask = 255;
	  for (var i = 0; i < bin.length * 32; i += 8)
	  {
	    str += String.fromCharCode((bin[i>>5] >>> (24 - i%32)) & mask);
	  }
	  return str;
	}
	
	/*
	 * Convert an array of big-endian words to a base-64 string
	 */
	function binb2b64(binarray)
	{
	  var tab = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
	  var str = "";
	  var triplet, j;
	  for (var i = 0; i < binarray.length * 4; i += 3)
	  {
	    triplet = (((binarray[i   >> 2] >> 8 * (3 -  i   %4)) & 0xFF) << 16) |
	              (((binarray[i+1 >> 2] >> 8 * (3 - (i+1)%4)) & 0xFF) << 8 ) |
	               ((binarray[i+2 >> 2] >> 8 * (3 - (i+2)%4)) & 0xFF);
	    for (j = 0; j < 4; j++)
	    {
	      if (i * 8 + j * 6 > binarray.length * 32) { str += "="; }
	      else { str += tab.charAt((triplet >> 6*(3-j)) & 0x3F); }
	    }
	  }
	  return str;
	}
	
	/*
	 * These are the functions you'll usually want to call
	 * They take string arguments and return either hex or base-64 encoded strings
	 */
	return {
	    b64_hmac_sha1:  function (key, data){ return binb2b64(core_hmac_sha1(key, data)); },
	    b64_sha1:       function (s) { return binb2b64(core_sha1(str2binb(s),s.length * 8)); },
	    binb2str:       binb2str,
	    core_hmac_sha1: core_hmac_sha1,
	    str_hmac_sha1:  function (key, data){ return binb2str(core_hmac_sha1(key, data)); },
	    str_sha1:       function (s) { return binb2str(core_sha1(str2binb(s),s.length * 8)); },
	};
	}));
	
	/*
	 * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
	 * Digest Algorithm, as defined in RFC 1321.
	 * Version 2.1 Copyright (C) Paul Johnston 1999 - 2002.
	 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
	 * Distributed under the BSD License
	 * See http://pajhome.org.uk/crypt/md5 for more info.
	 */
	
	/*
	 * Everything that isn't used by Strophe has been stripped here!
	 */
	
	(function (root, factory) {
	    if (true) {
	        !(__WEBPACK_LOCAL_MODULE_2__ = function () {
	            return factory();
	        }.call(exports, __webpack_require__, exports, module));
	    } else {
	        // Browser globals
	        root.MD5 = factory();
	    }
	}(this, function (b) {
	    /*
	     * Add integers, wrapping at 2^32. This uses 16-bit operations internally
	     * to work around bugs in some JS interpreters.
	     */
	    var safe_add = function (x, y) {
	        var lsw = (x & 0xFFFF) + (y & 0xFFFF);
	        var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
	        return (msw << 16) | (lsw & 0xFFFF);
	    };
	
	    /*
	     * Bitwise rotate a 32-bit number to the left.
	     */
	    var bit_rol = function (num, cnt) {
	        return (num << cnt) | (num >>> (32 - cnt));
	    };
	
	    /*
	     * Convert a string to an array of little-endian words
	     */
	    var str2binl = function (str) {
	        var bin = [];
	        for(var i = 0; i < str.length * 8; i += 8)
	        {
	            bin[i>>5] |= (str.charCodeAt(i / 8) & 255) << (i%32);
	        }
	        return bin;
	    };
	
	    /*
	     * Convert an array of little-endian words to a string
	     */
	    var binl2str = function (bin) {
	        var str = "";
	        for(var i = 0; i < bin.length * 32; i += 8)
	        {
	            str += String.fromCharCode((bin[i>>5] >>> (i % 32)) & 255);
	        }
	        return str;
	    };
	
	    /*
	     * Convert an array of little-endian words to a hex string.
	     */
	    var binl2hex = function (binarray) {
	        var hex_tab = "0123456789abcdef";
	        var str = "";
	        for(var i = 0; i < binarray.length * 4; i++)
	        {
	            str += hex_tab.charAt((binarray[i>>2] >> ((i%4)*8+4)) & 0xF) +
	                hex_tab.charAt((binarray[i>>2] >> ((i%4)*8  )) & 0xF);
	        }
	        return str;
	    };
	
	    /*
	     * These functions implement the four basic operations the algorithm uses.
	     */
	    var md5_cmn = function (q, a, b, x, s, t) {
	        return safe_add(bit_rol(safe_add(safe_add(a, q),safe_add(x, t)), s),b);
	    };
	
	    var md5_ff = function (a, b, c, d, x, s, t) {
	        return md5_cmn((b & c) | ((~b) & d), a, b, x, s, t);
	    };
	
	    var md5_gg = function (a, b, c, d, x, s, t) {
	        return md5_cmn((b & d) | (c & (~d)), a, b, x, s, t);
	    };
	
	    var md5_hh = function (a, b, c, d, x, s, t) {
	        return md5_cmn(b ^ c ^ d, a, b, x, s, t);
	    };
	
	    var md5_ii = function (a, b, c, d, x, s, t) {
	        return md5_cmn(c ^ (b | (~d)), a, b, x, s, t);
	    };
	
	    /*
	     * Calculate the MD5 of an array of little-endian words, and a bit length
	     */
	    var core_md5 = function (x, len) {
	        /* append padding */
	        x[len >> 5] |= 0x80 << ((len) % 32);
	        x[(((len + 64) >>> 9) << 4) + 14] = len;
	
	        var a =  1732584193;
	        var b = -271733879;
	        var c = -1732584194;
	        var d =  271733878;
	
	        var olda, oldb, oldc, oldd;
	        for (var i = 0; i < x.length; i += 16)
	        {
	            olda = a;
	            oldb = b;
	            oldc = c;
	            oldd = d;
	
	            a = md5_ff(a, b, c, d, x[i+ 0], 7 , -680876936);
	            d = md5_ff(d, a, b, c, x[i+ 1], 12, -389564586);
	            c = md5_ff(c, d, a, b, x[i+ 2], 17,  606105819);
	            b = md5_ff(b, c, d, a, x[i+ 3], 22, -1044525330);
	            a = md5_ff(a, b, c, d, x[i+ 4], 7 , -176418897);
	            d = md5_ff(d, a, b, c, x[i+ 5], 12,  1200080426);
	            c = md5_ff(c, d, a, b, x[i+ 6], 17, -1473231341);
	            b = md5_ff(b, c, d, a, x[i+ 7], 22, -45705983);
	            a = md5_ff(a, b, c, d, x[i+ 8], 7 ,  1770035416);
	            d = md5_ff(d, a, b, c, x[i+ 9], 12, -1958414417);
	            c = md5_ff(c, d, a, b, x[i+10], 17, -42063);
	            b = md5_ff(b, c, d, a, x[i+11], 22, -1990404162);
	            a = md5_ff(a, b, c, d, x[i+12], 7 ,  1804603682);
	            d = md5_ff(d, a, b, c, x[i+13], 12, -40341101);
	            c = md5_ff(c, d, a, b, x[i+14], 17, -1502002290);
	            b = md5_ff(b, c, d, a, x[i+15], 22,  1236535329);
	
	            a = md5_gg(a, b, c, d, x[i+ 1], 5 , -165796510);
	            d = md5_gg(d, a, b, c, x[i+ 6], 9 , -1069501632);
	            c = md5_gg(c, d, a, b, x[i+11], 14,  643717713);
	            b = md5_gg(b, c, d, a, x[i+ 0], 20, -373897302);
	            a = md5_gg(a, b, c, d, x[i+ 5], 5 , -701558691);
	            d = md5_gg(d, a, b, c, x[i+10], 9 ,  38016083);
	            c = md5_gg(c, d, a, b, x[i+15], 14, -660478335);
	            b = md5_gg(b, c, d, a, x[i+ 4], 20, -405537848);
	            a = md5_gg(a, b, c, d, x[i+ 9], 5 ,  568446438);
	            d = md5_gg(d, a, b, c, x[i+14], 9 , -1019803690);
	            c = md5_gg(c, d, a, b, x[i+ 3], 14, -187363961);
	            b = md5_gg(b, c, d, a, x[i+ 8], 20,  1163531501);
	            a = md5_gg(a, b, c, d, x[i+13], 5 , -1444681467);
	            d = md5_gg(d, a, b, c, x[i+ 2], 9 , -51403784);
	            c = md5_gg(c, d, a, b, x[i+ 7], 14,  1735328473);
	            b = md5_gg(b, c, d, a, x[i+12], 20, -1926607734);
	
	            a = md5_hh(a, b, c, d, x[i+ 5], 4 , -378558);
	            d = md5_hh(d, a, b, c, x[i+ 8], 11, -2022574463);
	            c = md5_hh(c, d, a, b, x[i+11], 16,  1839030562);
	            b = md5_hh(b, c, d, a, x[i+14], 23, -35309556);
	            a = md5_hh(a, b, c, d, x[i+ 1], 4 , -1530992060);
	            d = md5_hh(d, a, b, c, x[i+ 4], 11,  1272893353);
	            c = md5_hh(c, d, a, b, x[i+ 7], 16, -155497632);
	            b = md5_hh(b, c, d, a, x[i+10], 23, -1094730640);
	            a = md5_hh(a, b, c, d, x[i+13], 4 ,  681279174);
	            d = md5_hh(d, a, b, c, x[i+ 0], 11, -358537222);
	            c = md5_hh(c, d, a, b, x[i+ 3], 16, -722521979);
	            b = md5_hh(b, c, d, a, x[i+ 6], 23,  76029189);
	            a = md5_hh(a, b, c, d, x[i+ 9], 4 , -640364487);
	            d = md5_hh(d, a, b, c, x[i+12], 11, -421815835);
	            c = md5_hh(c, d, a, b, x[i+15], 16,  530742520);
	            b = md5_hh(b, c, d, a, x[i+ 2], 23, -995338651);
	
	            a = md5_ii(a, b, c, d, x[i+ 0], 6 , -198630844);
	            d = md5_ii(d, a, b, c, x[i+ 7], 10,  1126891415);
	            c = md5_ii(c, d, a, b, x[i+14], 15, -1416354905);
	            b = md5_ii(b, c, d, a, x[i+ 5], 21, -57434055);
	            a = md5_ii(a, b, c, d, x[i+12], 6 ,  1700485571);
	            d = md5_ii(d, a, b, c, x[i+ 3], 10, -1894986606);
	            c = md5_ii(c, d, a, b, x[i+10], 15, -1051523);
	            b = md5_ii(b, c, d, a, x[i+ 1], 21, -2054922799);
	            a = md5_ii(a, b, c, d, x[i+ 8], 6 ,  1873313359);
	            d = md5_ii(d, a, b, c, x[i+15], 10, -30611744);
	            c = md5_ii(c, d, a, b, x[i+ 6], 15, -1560198380);
	            b = md5_ii(b, c, d, a, x[i+13], 21,  1309151649);
	            a = md5_ii(a, b, c, d, x[i+ 4], 6 , -145523070);
	            d = md5_ii(d, a, b, c, x[i+11], 10, -1120210379);
	            c = md5_ii(c, d, a, b, x[i+ 2], 15,  718787259);
	            b = md5_ii(b, c, d, a, x[i+ 9], 21, -343485551);
	
	            a = safe_add(a, olda);
	            b = safe_add(b, oldb);
	            c = safe_add(c, oldc);
	            d = safe_add(d, oldd);
	        }
	        return [a, b, c, d];
	    };
	
	    var obj = {
	        /*
	         * These are the functions you'll usually want to call.
	         * They take string arguments and return either hex or base-64 encoded
	         * strings.
	         */
	        hexdigest: function (s) {
	            return binl2hex(core_md5(str2binl(s), s.length * 8));
	        },
	
	        hash: function (s) {
	            return binl2str(core_md5(str2binl(s), s.length * 8));
	        }
	    };
	    return obj;
	}));
	
	(function (root, factory) {
	    if (true) {
	        !(__WEBPACK_LOCAL_MODULE_3__ = function () {
	            return factory();
	        }.call(exports, __webpack_require__, exports, module));
	    } else {
	        // Browser globals
	        root.stropheUtils = factory();
	    }
	}(this, function () {
	
	    var utils = {
	
	        utf16to8: function (str) {
	            var i, c;
	            var out = "";
	            var len = str.length;
	            for (i = 0; i < len; i++) {
	                c = str.charCodeAt(i);
	                if ((c >= 0x0000) && (c <= 0x007F)) {
	                    out += str.charAt(i);
	                } else if (c > 0x07FF) {
	                    out += String.fromCharCode(0xE0 | ((c >> 12) & 0x0F));
	                    out += String.fromCharCode(0x80 | ((c >>  6) & 0x3F));
	                    out += String.fromCharCode(0x80 | ((c >>  0) & 0x3F));
	                } else {
	                    out += String.fromCharCode(0xC0 | ((c >>  6) & 0x1F));
	                    out += String.fromCharCode(0x80 | ((c >>  0) & 0x3F));
	                }
	            }
	            return out;
	        },
	
	        addCookies: function (cookies) {
	            /* Parameters:
	             *  (Object) cookies - either a map of cookie names
	             *    to string values or to maps of cookie values.
	             *
	             * For example:
	             * { "myCookie": "1234" }
	             *
	             * or:
	             * { "myCookie": {
	             *      "value": "1234",
	             *      "domain": ".example.org",
	             *      "path": "/",
	             *      "expires": expirationDate
	             *      }
	             *  }
	             *
	             *  These values get passed to Strophe.Connection via
	             *   options.cookies
	             */
	            var cookieName, cookieObj, isObj, cookieValue, expires, domain, path;
	            for (cookieName in (cookies || {})) {
	                expires = '';
	                domain = '';
	                path = '';
	                cookieObj = cookies[cookieName];
	                isObj = typeof cookieObj == "object";
	                cookieValue = escape(unescape(isObj ? cookieObj.value : cookieObj));
	                if (isObj) {
	                    expires = cookieObj.expires ? ";expires="+cookieObj.expires : '';
	                    domain = cookieObj.domain ? ";domain="+cookieObj.domain : '';
	                    path = cookieObj.path ? ";path="+cookieObj.path : '';
	                }
	                document.cookie =
	                    cookieName+'='+cookieValue + expires + domain + path;
	            }
	        }
	    };
	    return utils;
	}));
	
	/*
	    This program is distributed under the terms of the MIT license.
	    Please see the LICENSE file for details.
	
	    Copyright 2006-2008, OGG, LLC
	*/
	
	/* jshint undef: true, unused: true:, noarg: true, latedef: true */
	/* global define */
	
	(function (root, factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_LOCAL_MODULE_4__ = (function () {
	            return factory();
	        }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)));
	    } else {
	        // Browser globals
	        return factory();
	    }
	}(this, function () {
	
	/** Function: Function.prototype.bind
	 *  Bind a function to an instance.
	 *
	 *  This Function object extension method creates a bound method similar
	 *  to those in Python.  This means that the 'this' object will point
	 *  to the instance you want.  See <MDC's bind() documentation at https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function/bind>
	 *  and <Bound Functions and Function Imports in JavaScript at http://benjamin.smedbergs.us/blog/2007-01-03/bound-functions-and-function-imports-in-javascript/>
	 *  for a complete explanation.
	 *
	 *  This extension already exists in some browsers (namely, Firefox 3), but
	 *  we provide it to support those that don't.
	 *
	 *  Parameters:
	 *    (Object) obj - The object that will become 'this' in the bound function.
	 *    (Object) argN - An option argument that will be prepended to the
	 *      arguments given for the function call
	 *
	 *  Returns:
	 *    The bound function.
	 */
	if (!Function.prototype.bind) {
	    Function.prototype.bind = function (obj /*, arg1, arg2, ... */) {
	        var func = this;
	        var _slice = Array.prototype.slice;
	        var _concat = Array.prototype.concat;
	        var _args = _slice.call(arguments, 1);
	        return function () {
	            return func.apply(obj ? obj : this, _concat.call(_args, _slice.call(arguments, 0)));
	        };
	    };
	}
	
	/** Function: Array.isArray
	 *  This is a polyfill for the ES5 Array.isArray method.
	 */
	if (!Array.isArray) {
	    Array.isArray = function(arg) {
	        return Object.prototype.toString.call(arg) === '[object Array]';
	    };
	}
	
	/** Function: Array.prototype.indexOf
	 *  Return the index of an object in an array.
	 *
	 *  This function is not supplied by some JavaScript implementations, so
	 *  we provide it if it is missing.  This code is from:
	 *  http://developer.mozilla.org/En/Core_JavaScript_1.5_Reference:Objects:Array:indexOf
	 *
	 *  Parameters:
	 *    (Object) elt - The object to look for.
	 *    (Integer) from - The index from which to start looking. (optional).
	 *
	 *  Returns:
	 *    The index of elt in the array or -1 if not found.
	 */
	if (!Array.prototype.indexOf) {
	        Array.prototype.indexOf = function(elt /*, from*/) {
	            var len = this.length;
	            var from = Number(arguments[1]) || 0;
	            from = (from < 0) ? Math.ceil(from) : Math.floor(from);
	            if (from < 0) {
	                from += len;
	            }
	
	            for (; from < len; from++) {
	                if (from in this && this[from] === elt) {
	                    return from;
	                }
	            }
	            return -1;
	        };
	    }
	}));
	
	
	/** Function: Array.prototype.forEach
	 *
	 *  This function is not available in IE < 9
	 *
	 *  See <forEach on developer.mozilla.org at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach>
	 */
	if (!Array.prototype.forEach) {
	    Array.prototype.forEach = function(callback, thisArg) {
	        var T, k;
	        if (this === null) {
	            throw new TypeError(' this is null or not defined');
	        }
	
	        // 1. Let O be the result of calling toObject() passing the
	        // |this| value as the argument.
	        var O = Object(this);
	        // 2. Let lenValue be the result of calling the Get() internal
	        // method of O with the argument "length".
	        // 3. Let len be toUint32(lenValue).
	        var len = O.length >>> 0;
	        // 4. If isCallable(callback) is false, throw a TypeError exception.
	        // See: http://es5.github.com/#x9.11
	        if (typeof callback !== "function") {
	            throw new TypeError(callback + ' is not a function');
	        }
	        // 5. If thisArg was supplied, let T be thisArg; else let
	        // T be undefined.
	        if (arguments.length > 1) {
	            T = thisArg;
	        }
	        // 6. Let k be 0
	        k = 0;
	        // 7. Repeat, while k < len
	        while (k < len) {
	            var kValue;
	            // a. Let Pk be ToString(k).
	            //        This is implicit for LHS operands of the in operator
	            // b. Let kPresent be the result of calling the HasProperty
	            //        internal method of O with argument Pk.
	            //        This step can be combined with c
	            // c. If kPresent is true, then
	            if (k in O) {
	                // i. Let kValue be the result of calling the Get internal
	                // method of O with argument Pk.
	                kValue = O[k];
	                // ii. Call the Call internal method of callback with T as
	                // the this value and argument list containing kValue, k, and O.
	                callback.call(T, kValue, k, O);
	            }
	            // d. Increase k by 1.
	            k++;
	        }
	        // 8. return undefined
	    };
	}
	
	/*
	    This program is distributed under the terms of the MIT license.
	    Please see the LICENSE file for details.
	
	    Copyright 2006-2008, OGG, LLC
	*/
	
	/* jshint undef: true, unused: true:, noarg: true, latedef: true */
	/*global define, document, window, setTimeout, clearTimeout, ActiveXObject, DOMParser */
	
	(function (root, factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	            __WEBPACK_LOCAL_MODULE_1__,
	            __WEBPACK_LOCAL_MODULE_0__,
	            __WEBPACK_LOCAL_MODULE_2__,
	            __WEBPACK_LOCAL_MODULE_3__,
	            __WEBPACK_LOCAL_MODULE_4__
	        ], __WEBPACK_LOCAL_MODULE_5__ = (function () {
	            return factory.apply(this, arguments);
	        }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)));
	    } else {
	        // Browser globals
	        var o = factory(root.SHA1, root.Base64, root.MD5, root.stropheUtils);
	        window.Strophe =        o.Strophe;
	        window.$build =         o.$build;
	        window.$iq =            o.$iq;
	        window.$msg =           o.$msg;
	        window.$pres =          o.$pres;
	        window.SHA1 =           o.SHA1;
	        window.Base64 =         o.Base64;
	        window.MD5 =            o.MD5;
	        window.b64_hmac_sha1 =  o.SHA1.b64_hmac_sha1;
	        window.b64_sha1 =       o.SHA1.b64_sha1;
	        window.str_hmac_sha1 =  o.SHA1.str_hmac_sha1;
	        window.str_sha1 =       o.SHA1.str_sha1;
	    }
	}(this, function (SHA1, Base64, MD5, utils) {
	
	var Strophe;
	
	/** Function: $build
	 *  Create a Strophe.Builder.
	 *  This is an alias for 'new Strophe.Builder(name, attrs)'.
	 *
	 *  Parameters:
	 *    (String) name - The root element name.
	 *    (Object) attrs - The attributes for the root element in object notation.
	 *
	 *  Returns:
	 *    A new Strophe.Builder object.
	 */
	function $build(name, attrs) { return new Strophe.Builder(name, attrs); }
	
	/** Function: $msg
	 *  Create a Strophe.Builder with a <message/> element as the root.
	 *
	 *  Parameters:
	 *    (Object) attrs - The <message/> element attributes in object notation.
	 *
	 *  Returns:
	 *    A new Strophe.Builder object.
	 */
	function $msg(attrs) { return new Strophe.Builder("message", attrs); }
	
	/** Function: $iq
	 *  Create a Strophe.Builder with an <iq/> element as the root.
	 *
	 *  Parameters:
	 *    (Object) attrs - The <iq/> element attributes in object notation.
	 *
	 *  Returns:
	 *    A new Strophe.Builder object.
	 */
	function $iq(attrs) { return new Strophe.Builder("iq", attrs); }
	
	/** Function: $pres
	 *  Create a Strophe.Builder with a <presence/> element as the root.
	 *
	 *  Parameters:
	 *    (Object) attrs - The <presence/> element attributes in object notation.
	 *
	 *  Returns:
	 *    A new Strophe.Builder object.
	 */
	function $pres(attrs) { return new Strophe.Builder("presence", attrs); }
	
	/** Class: Strophe
	 *  An object container for all Strophe library functions.
	 *
	 *  This class is just a container for all the objects and constants
	 *  used in the library.  It is not meant to be instantiated, but to
	 *  provide a namespace for library objects, constants, and functions.
	 */
	Strophe = {
	    /** Constant: VERSION
	     *  The version of the Strophe library. Unreleased builds will have
	     *  a version of head-HASH where HASH is a partial revision.
	     */
	    VERSION: "1.2.12",
	
	    /** Constants: XMPP Namespace Constants
	     *  Common namespace constants from the XMPP RFCs and XEPs.
	     *
	     *  NS.HTTPBIND - HTTP BIND namespace from XEP 124.
	     *  NS.BOSH - BOSH namespace from XEP 206.
	     *  NS.CLIENT - Main XMPP client namespace.
	     *  NS.AUTH - Legacy authentication namespace.
	     *  NS.ROSTER - Roster operations namespace.
	     *  NS.PROFILE - Profile namespace.
	     *  NS.DISCO_INFO - Service discovery info namespace from XEP 30.
	     *  NS.DISCO_ITEMS - Service discovery items namespace from XEP 30.
	     *  NS.MUC - Multi-User Chat namespace from XEP 45.
	     *  NS.SASL - XMPP SASL namespace from RFC 3920.
	     *  NS.STREAM - XMPP Streams namespace from RFC 3920.
	     *  NS.BIND - XMPP Binding namespace from RFC 3920.
	     *  NS.SESSION - XMPP Session namespace from RFC 3920.
	     *  NS.XHTML_IM - XHTML-IM namespace from XEP 71.
	     *  NS.XHTML - XHTML body namespace from XEP 71.
	     */
	    NS: {
	        HTTPBIND: "http://jabber.org/protocol/httpbind",
	        BOSH: "urn:xmpp:xbosh",
	        CLIENT: "jabber:client",
	        AUTH: "jabber:iq:auth",
	        ROSTER: "jabber:iq:roster",
	        PROFILE: "jabber:iq:profile",
	        DISCO_INFO: "http://jabber.org/protocol/disco#info",
	        DISCO_ITEMS: "http://jabber.org/protocol/disco#items",
	        MUC: "http://jabber.org/protocol/muc",
	        SASL: "urn:ietf:params:xml:ns:xmpp-sasl",
	        STREAM: "http://etherx.jabber.org/streams",
	        FRAMING: "urn:ietf:params:xml:ns:xmpp-framing",
	        BIND: "urn:ietf:params:xml:ns:xmpp-bind",
	        SESSION: "urn:ietf:params:xml:ns:xmpp-session",
	        VERSION: "jabber:iq:version",
	        STANZAS: "urn:ietf:params:xml:ns:xmpp-stanzas",
	        XHTML_IM: "http://jabber.org/protocol/xhtml-im",
	        XHTML: "http://www.w3.org/1999/xhtml"
	    },
	
	    /** Constants: XHTML_IM Namespace
	     *  contains allowed tags, tag attributes, and css properties.
	     *  Used in the createHtml function to filter incoming html into the allowed XHTML-IM subset.
	     *  See http://xmpp.org/extensions/xep-0071.html#profile-summary for the list of recommended
	     *  allowed tags and their attributes.
	     */
	    XHTML: {
	        tags: ['a','blockquote','br','cite','em','img','li','ol','p','span','strong','ul','body'],
	        attributes: {
	            'a':          ['href'],
	            'blockquote': ['style'],
	            'br':         [],
	            'cite':       ['style'],
	            'em':         [],
	            'img':        ['src', 'alt', 'style', 'height', 'width'],
	            'li':         ['style'],
	            'ol':         ['style'],
	            'p':          ['style'],
	            'span':       ['style'],
	            'strong':     [],
	            'ul':         ['style'],
	            'body':       []
	        },
	        css: ['background-color','color','font-family','font-size','font-style','font-weight','margin-left','margin-right','text-align','text-decoration'],
	        /** Function: XHTML.validTag
	         *
	         * Utility method to determine whether a tag is allowed
	         * in the XHTML_IM namespace.
	         *
	         * XHTML tag names are case sensitive and must be lower case.
	         */
	        validTag: function(tag) {
	            for (var i = 0; i < Strophe.XHTML.tags.length; i++) {
	                if (tag == Strophe.XHTML.tags[i]) {
	                    return true;
	                }
	            }
	            return false;
	        },
	        /** Function: XHTML.validAttribute
	         *
	         * Utility method to determine whether an attribute is allowed
	         * as recommended per XEP-0071
	         *
	         * XHTML attribute names are case sensitive and must be lower case.
	         */
	        validAttribute: function(tag, attribute) {
	            if (typeof Strophe.XHTML.attributes[tag] !== 'undefined' && Strophe.XHTML.attributes[tag].length > 0) {
	                for (var i = 0; i < Strophe.XHTML.attributes[tag].length; i++) {
	                    if (attribute == Strophe.XHTML.attributes[tag][i]) {
	                        return true;
	                    }
	                }
	            }
	        return false;
	        },
	        validCSS: function(style) {
	            for (var i = 0; i < Strophe.XHTML.css.length; i++) {
	                if (style == Strophe.XHTML.css[i]) {
	                    return true;
	                }
	            }
	            return false;
	        }
	    },
	
	    /** Constants: Connection Status Constants
	     *  Connection status constants for use by the connection handler
	     *  callback.
	     *
	     *  Status.ERROR - An error has occurred
	     *  Status.CONNECTING - The connection is currently being made
	     *  Status.CONNFAIL - The connection attempt failed
	     *  Status.AUTHENTICATING - The connection is authenticating
	     *  Status.AUTHFAIL - The authentication attempt failed
	     *  Status.CONNECTED - The connection has succeeded
	     *  Status.DISCONNECTED - The connection has been terminated
	     *  Status.DISCONNECTING - The connection is currently being terminated
	     *  Status.ATTACHED - The connection has been attached
	     *  Status.CONNTIMEOUT - The connection has timed out
	     */
	    Status: {
	        ERROR: 0,
	        CONNECTING: 1,
	        CONNFAIL: 2,
	        AUTHENTICATING: 3,
	        AUTHFAIL: 4,
	        CONNECTED: 5,
	        DISCONNECTED: 6,
	        DISCONNECTING: 7,
	        ATTACHED: 8,
	        REDIRECT: 9,
	        CONNTIMEOUT: 10
	    },
	
	    /** Constants: Log Level Constants
	     *  Logging level indicators.
	     *
	     *  LogLevel.DEBUG - Debug output
	     *  LogLevel.INFO - Informational output
	     *  LogLevel.WARN - Warnings
	     *  LogLevel.ERROR - Errors
	     *  LogLevel.FATAL - Fatal errors
	     */
	    LogLevel: {
	        DEBUG: 0,
	        INFO: 1,
	        WARN: 2,
	        ERROR: 3,
	        FATAL: 4
	    },
	
	    /** PrivateConstants: DOM Element Type Constants
	     *  DOM element types.
	     *
	     *  ElementType.NORMAL - Normal element.
	     *  ElementType.TEXT - Text data element.
	     *  ElementType.FRAGMENT - XHTML fragment element.
	     */
	    ElementType: {
	        NORMAL: 1,
	        TEXT: 3,
	        CDATA: 4,
	        FRAGMENT: 11
	    },
	
	    /** PrivateConstants: Timeout Values
	     *  Timeout values for error states.  These values are in seconds.
	     *  These should not be changed unless you know exactly what you are
	     *  doing.
	     *
	     *  TIMEOUT - Timeout multiplier. A waiting request will be considered
	     *      failed after Math.floor(TIMEOUT * wait) seconds have elapsed.
	     *      This defaults to 1.1, and with default wait, 66 seconds.
	     *  SECONDARY_TIMEOUT - Secondary timeout multiplier. In cases where
	     *      Strophe can detect early failure, it will consider the request
	     *      failed if it doesn't return after
	     *      Math.floor(SECONDARY_TIMEOUT * wait) seconds have elapsed.
	     *      This defaults to 0.1, and with default wait, 6 seconds.
	     */
	    TIMEOUT: 1.1,
	    SECONDARY_TIMEOUT: 0.1,
	
	    /** Function: addNamespace
	     *  This function is used to extend the current namespaces in
	     *  Strophe.NS.  It takes a key and a value with the key being the
	     *  name of the new namespace, with its actual value.
	     *  For example:
	     *  Strophe.addNamespace('PUBSUB', "http://jabber.org/protocol/pubsub");
	     *
	     *  Parameters:
	     *    (String) name - The name under which the namespace will be
	     *      referenced under Strophe.NS
	     *    (String) value - The actual namespace.
	     */
	    addNamespace: function (name, value) {
	        Strophe.NS[name] = value;
	    },
	
	    /** Function: forEachChild
	     *  Map a function over some or all child elements of a given element.
	     *
	     *  This is a small convenience function for mapping a function over
	     *  some or all of the children of an element.  If elemName is null, all
	     *  children will be passed to the function, otherwise only children
	     *  whose tag names match elemName will be passed.
	     *
	     *  Parameters:
	     *    (XMLElement) elem - The element to operate on.
	     *    (String) elemName - The child element tag name filter.
	     *    (Function) func - The function to apply to each child.  This
	     *      function should take a single argument, a DOM element.
	     */
	    forEachChild: function (elem, elemName, func) {
	        var i, childNode;
	        for (i = 0; i < elem.childNodes.length; i++) {
	            childNode = elem.childNodes[i];
	            if (childNode.nodeType == Strophe.ElementType.NORMAL &&
	                (!elemName || this.isTagEqual(childNode, elemName))) {
	                func(childNode);
	            }
	        }
	    },
	
	    /** Function: isTagEqual
	     *  Compare an element's tag name with a string.
	     *
	     *  This function is case sensitive.
	     *
	     *  Parameters:
	     *    (XMLElement) el - A DOM element.
	     *    (String) name - The element name.
	     *
	     *  Returns:
	     *    true if the element's tag name matches _el_, and false
	     *    otherwise.
	     */
	    isTagEqual: function (el, name) {
	        return el.tagName == name;
	    },
	
	    /** PrivateVariable: _xmlGenerator
	     *  _Private_ variable that caches a DOM document to
	     *  generate elements.
	     */
	    _xmlGenerator: null,
	
	    /** PrivateFunction: _makeGenerator
	     *  _Private_ function that creates a dummy XML DOM document to serve as
	     *  an element and text node generator.
	     */
	    _makeGenerator: function () {
	        var doc;
	        // IE9 does implement createDocument(); however, using it will cause the browser to leak memory on page unload.
	        // Here, we test for presence of createDocument() plus IE's proprietary documentMode attribute, which would be
	                // less than 10 in the case of IE9 and below.
	        if (document.implementation.createDocument === undefined ||
	                        document.implementation.createDocument && document.documentMode && document.documentMode < 10) {
	            doc = this._getIEXmlDom();
	            doc.appendChild(doc.createElement('strophe'));
	        } else {
	            doc = document.implementation
	                .createDocument('jabber:client', 'strophe', null);
	        }
	        return doc;
	    },
	
	    /** Function: xmlGenerator
	     *  Get the DOM document to generate elements.
	     *
	     *  Returns:
	     *    The currently used DOM document.
	     */
	    xmlGenerator: function () {
	        if (!Strophe._xmlGenerator) {
	            Strophe._xmlGenerator = Strophe._makeGenerator();
	        }
	        return Strophe._xmlGenerator;
	    },
	
	    /** PrivateFunction: _getIEXmlDom
	     *  Gets IE xml doc object
	     *
	     *  Returns:
	     *    A Microsoft XML DOM Object
	     *  See Also:
	     *    http://msdn.microsoft.com/en-us/library/ms757837%28VS.85%29.aspx
	     */
	    _getIEXmlDom : function() {
	        var doc = null;
	        var docStrings = [
	            "Msxml2.DOMDocument.6.0",
	            "Msxml2.DOMDocument.5.0",
	            "Msxml2.DOMDocument.4.0",
	            "MSXML2.DOMDocument.3.0",
	            "MSXML2.DOMDocument",
	            "MSXML.DOMDocument",
	            "Microsoft.XMLDOM"
	        ];
	
	        for (var d = 0; d < docStrings.length; d++) {
	            if (doc === null) {
	                try {
	                    doc = new ActiveXObject(docStrings[d]);
	                } catch (e) {
	                    doc = null;
	                }
	            } else {
	                break;
	            }
	        }
	        return doc;
	    },
	
	    /** Function: xmlElement
	     *  Create an XML DOM element.
	     *
	     *  This function creates an XML DOM element correctly across all
	     *  implementations. Note that these are not HTML DOM elements, which
	     *  aren't appropriate for XMPP stanzas.
	     *
	     *  Parameters:
	     *    (String) name - The name for the element.
	     *    (Array|Object) attrs - An optional array or object containing
	     *      key/value pairs to use as element attributes. The object should
	     *      be in the format {'key': 'value'} or {key: 'value'}. The array
	     *      should have the format [['key1', 'value1'], ['key2', 'value2']].
	     *    (String) text - The text child data for the element.
	     *
	     *  Returns:
	     *    A new XML DOM element.
	     */
	    xmlElement: function (name) {
	        if (!name) { return null; }
	
	        var node = Strophe.xmlGenerator().createElement(name);
	        // FIXME: this should throw errors if args are the wrong type or
	        // there are more than two optional args
	        var a, i, k;
	        for (a = 1; a < arguments.length; a++) {
	            var arg = arguments[a];
	            if (!arg) { continue; }
	            if (typeof(arg) == "string" ||
	                typeof(arg) == "number") {
	                node.appendChild(Strophe.xmlTextNode(arg));
	            } else if (typeof(arg) == "object" &&
	                       typeof(arg.sort) == "function") {
	                for (i = 0; i < arg.length; i++) {
	                    var attr = arg[i];
	                    if (typeof(attr) == "object" &&
	                        typeof(attr.sort) == "function" &&
	                        attr[1] !== undefined &&
	                        attr[1] !== null) {
	                        node.setAttribute(attr[0], attr[1]);
	                    }
	                }
	            } else if (typeof(arg) == "object") {
	                for (k in arg) {
	                    if (arg.hasOwnProperty(k)) {
	                        if (arg[k] !== undefined &&
	                            arg[k] !== null) {
	                            node.setAttribute(k, arg[k]);
	                        }
	                    }
	                }
	            }
	        }
	
	        return node;
	    },
	
	    /*  Function: xmlescape
	     *  Excapes invalid xml characters.
	     *
	     *  Parameters:
	     *     (String) text - text to escape.
	     *
	     *  Returns:
	     *      Escaped text.
	     */
	    xmlescape: function(text) {
	        text = text.replace(/\&/g, "&amp;");
	        text = text.replace(/</g,  "&lt;");
	        text = text.replace(/>/g,  "&gt;");
	        text = text.replace(/'/g,  "&apos;");
	        text = text.replace(/"/g,  "&quot;");
	        return text;
	    },
	
	    /*  Function: xmlunescape
	    *  Unexcapes invalid xml characters.
	    *
	    *  Parameters:
	    *     (String) text - text to unescape.
	    *
	    *  Returns:
	    *      Unescaped text.
	    */
	    xmlunescape: function(text) {
	        text = text.replace(/\&amp;/g, "&");
	        text = text.replace(/&lt;/g,  "<");
	        text = text.replace(/&gt;/g,  ">");
	        text = text.replace(/&apos;/g,  "'");
	        text = text.replace(/&quot;/g,  "\"");
	        return text;
	    },
	
	    /** Function: xmlTextNode
	     *  Creates an XML DOM text node.
	     *
	     *  Provides a cross implementation version of document.createTextNode.
	     *
	     *  Parameters:
	     *    (String) text - The content of the text node.
	     *
	     *  Returns:
	     *    A new XML DOM text node.
	     */
	    xmlTextNode: function (text) {
	        return Strophe.xmlGenerator().createTextNode(text);
	    },
	
	    /** Function: xmlHtmlNode
	     *  Creates an XML DOM html node.
	     *
	     *  Parameters:
	     *    (String) html - The content of the html node.
	     *
	     *  Returns:
	     *    A new XML DOM text node.
	     */
	    xmlHtmlNode: function (html) {
	        var node;
	        //ensure text is escaped
	        if (window.DOMParser) {
	            var parser = new DOMParser();
	            node = parser.parseFromString(html, "text/xml");
	        } else {
	            node = new ActiveXObject("Microsoft.XMLDOM");
	            node.async="false";
	            node.loadXML(html);
	        }
	        return node;
	    },
	
	    /** Function: getText
	     *  Get the concatenation of all text children of an element.
	     *
	     *  Parameters:
	     *    (XMLElement) elem - A DOM element.
	     *
	     *  Returns:
	     *    A String with the concatenated text of all text element children.
	     */
	    getText: function (elem) {
	        if (!elem) { return null; }
	
	        var str = "";
	        if (elem.childNodes.length === 0 && elem.nodeType ==
	            Strophe.ElementType.TEXT) {
	            str += elem.nodeValue;
	        }
	
	        for (var i = 0; i < elem.childNodes.length; i++) {
	            if (elem.childNodes[i].nodeType == Strophe.ElementType.TEXT) {
	                str += elem.childNodes[i].nodeValue;
	            }
	        }
	
	        return Strophe.xmlescape(str);
	    },
	
	    /** Function: copyElement
	     *  Copy an XML DOM element.
	     *
	     *  This function copies a DOM element and all its descendants and returns
	     *  the new copy.
	     *
	     *  Parameters:
	     *    (XMLElement) elem - A DOM element.
	     *
	     *  Returns:
	     *    A new, copied DOM element tree.
	     */
	    copyElement: function (elem) {
	        var i, el;
	        if (elem.nodeType == Strophe.ElementType.NORMAL) {
	            el = Strophe.xmlElement(elem.tagName);
	
	            for (i = 0; i < elem.attributes.length; i++) {
	                el.setAttribute(elem.attributes[i].nodeName,
	                                elem.attributes[i].value);
	            }
	
	            for (i = 0; i < elem.childNodes.length; i++) {
	                el.appendChild(Strophe.copyElement(elem.childNodes[i]));
	            }
	        } else if (elem.nodeType == Strophe.ElementType.TEXT) {
	            el = Strophe.xmlGenerator().createTextNode(elem.nodeValue);
	        }
	        return el;
	    },
	
	
	    /** Function: createHtml
	     *  Copy an HTML DOM element into an XML DOM.
	     *
	     *  This function copies a DOM element and all its descendants and returns
	     *  the new copy.
	     *
	     *  Parameters:
	     *    (HTMLElement) elem - A DOM element.
	     *
	     *  Returns:
	     *    A new, copied DOM element tree.
	     */
	    createHtml: function (elem) {
	        var i, el, j, tag, attribute, value, css, cssAttrs, attr, cssName, cssValue;
	        if (elem.nodeType == Strophe.ElementType.NORMAL) {
	            tag = elem.nodeName.toLowerCase(); // XHTML tags must be lower case.
	            if(Strophe.XHTML.validTag(tag)) {
	                try {
	                    el = Strophe.xmlElement(tag);
	                    for(i = 0; i < Strophe.XHTML.attributes[tag].length; i++) {
	                        attribute = Strophe.XHTML.attributes[tag][i];
	                        value = elem.getAttribute(attribute);
	                        if(typeof value == 'undefined' || value === null || value === '' || value === false || value === 0) {
	                            continue;
	                        }
	                        if(attribute == 'style' && typeof value == 'object') {
	                            if(typeof value.cssText != 'undefined') {
	                                value = value.cssText; // we're dealing with IE, need to get CSS out
	                            }
	                        }
	                        // filter out invalid css styles
	                        if(attribute == 'style') {
	                            css = [];
	                            cssAttrs = value.split(';');
	                            for(j = 0; j < cssAttrs.length; j++) {
	                                attr = cssAttrs[j].split(':');
	                                cssName = attr[0].replace(/^\s*/, "").replace(/\s*$/, "").toLowerCase();
	                                if(Strophe.XHTML.validCSS(cssName)) {
	                                    cssValue = attr[1].replace(/^\s*/, "").replace(/\s*$/, "");
	                                    css.push(cssName + ': ' + cssValue);
	                                }
	                            }
	                            if(css.length > 0) {
	                                value = css.join('; ');
	                                el.setAttribute(attribute, value);
	                            }
	                        } else {
	                            el.setAttribute(attribute, value);
	                        }
	                    }
	
	                    for (i = 0; i < elem.childNodes.length; i++) {
	                        el.appendChild(Strophe.createHtml(elem.childNodes[i]));
	                    }
	                } catch(e) { // invalid elements
	                  el = Strophe.xmlTextNode('');
	                }
	            } else {
	                el = Strophe.xmlGenerator().createDocumentFragment();
	                for (i = 0; i < elem.childNodes.length; i++) {
	                    el.appendChild(Strophe.createHtml(elem.childNodes[i]));
	                }
	            }
	        } else if (elem.nodeType == Strophe.ElementType.FRAGMENT) {
	            el = Strophe.xmlGenerator().createDocumentFragment();
	            for (i = 0; i < elem.childNodes.length; i++) {
	                el.appendChild(Strophe.createHtml(elem.childNodes[i]));
	            }
	        } else if (elem.nodeType == Strophe.ElementType.TEXT) {
	            el = Strophe.xmlTextNode(elem.nodeValue);
	        }
	        return el;
	    },
	
	    /** Function: escapeNode
	     *  Escape the node part (also called local part) of a JID.
	     *
	     *  Parameters:
	     *    (String) node - A node (or local part).
	     *
	     *  Returns:
	     *    An escaped node (or local part).
	     */
	    escapeNode: function (node) {
	        if (typeof node !== "string") { return node; }
	        return node.replace(/^\s+|\s+$/g, '')
	            .replace(/\\/g,  "\\5c")
	            .replace(/ /g,   "\\20")
	            .replace(/\"/g,  "\\22")
	            .replace(/\&/g,  "\\26")
	            .replace(/\'/g,  "\\27")
	            .replace(/\//g,  "\\2f")
	            .replace(/:/g,   "\\3a")
	            .replace(/</g,   "\\3c")
	            .replace(/>/g,   "\\3e")
	            .replace(/@/g,   "\\40");
	    },
	
	    /** Function: unescapeNode
	     *  Unescape a node part (also called local part) of a JID.
	     *
	     *  Parameters:
	     *    (String) node - A node (or local part).
	     *
	     *  Returns:
	     *    An unescaped node (or local part).
	     */
	    unescapeNode: function (node) {
	        if (typeof node !== "string") { return node; }
	        return node.replace(/\\20/g, " ")
	            .replace(/\\22/g, '"')
	            .replace(/\\26/g, "&")
	            .replace(/\\27/g, "'")
	            .replace(/\\2f/g, "/")
	            .replace(/\\3a/g, ":")
	            .replace(/\\3c/g, "<")
	            .replace(/\\3e/g, ">")
	            .replace(/\\40/g, "@")
	            .replace(/\\5c/g, "\\");
	    },
	
	    /** Function: getNodeFromJid
	     *  Get the node portion of a JID String.
	     *
	     *  Parameters:
	     *    (String) jid - A JID.
	     *
	     *  Returns:
	     *    A String containing the node.
	     */
	    getNodeFromJid: function (jid) {
	        if (jid.indexOf("@") < 0) { return null; }
	        return jid.split("@")[0];
	    },
	
	    /** Function: getDomainFromJid
	     *  Get the domain portion of a JID String.
	     *
	     *  Parameters:
	     *    (String) jid - A JID.
	     *
	     *  Returns:
	     *    A String containing the domain.
	     */
	    getDomainFromJid: function (jid) {
	        var bare = Strophe.getBareJidFromJid(jid);
	        if (bare.indexOf("@") < 0) {
	            return bare;
	        } else {
	            var parts = bare.split("@");
	            parts.splice(0, 1);
	            return parts.join('@');
	        }
	    },
	
	    /** Function: getResourceFromJid
	     *  Get the resource portion of a JID String.
	     *
	     *  Parameters:
	     *    (String) jid - A JID.
	     *
	     *  Returns:
	     *    A String containing the resource.
	     */
	    getResourceFromJid: function (jid) {
	        var s = jid.split("/");
	        if (s.length < 2) { return null; }
	        s.splice(0, 1);
	        return s.join('/');
	    },
	
	    /** Function: getBareJidFromJid
	     *  Get the bare JID from a JID String.
	     *
	     *  Parameters:
	     *    (String) jid - A JID.
	     *
	     *  Returns:
	     *    A String containing the bare JID.
	     */
	    getBareJidFromJid: function (jid) {
	        return jid ? jid.split("/")[0] : null;
	    },
	
	    /** PrivateFunction: _handleError
	     *  _Private_ function that properly logs an error to the console
	     */
	    _handleError: function (e) {
	        if (typeof e.stack !== "undefined") {
	            Strophe.fatal(e.stack);
	        }
	        if (e.sourceURL) {
	            Strophe.fatal("error: " + this.handler + " " + e.sourceURL + ":" +
	                          e.line + " - " + e.name + ": " + e.message);
	        } else if (e.fileName) {
	            Strophe.fatal("error: " + this.handler + " " +
	                          e.fileName + ":" + e.lineNumber + " - " +
	                          e.name + ": " + e.message);
	        } else {
	            Strophe.fatal("error: " + e.message);
	        }
	    },
	
	    /** Function: log
	     *  User overrideable logging function.
	     *
	     *  This function is called whenever the Strophe library calls any
	     *  of the logging functions.  The default implementation of this
	     *  function does nothing.  If client code wishes to handle the logging
	     *  messages, it should override this with
	     *  > Strophe.log = function (level, msg) {
	     *  >   (user code here)
	     *  > };
	     *
	     *  Please note that data sent and received over the wire is logged
	     *  via Strophe.Connection.rawInput() and Strophe.Connection.rawOutput().
	     *
	     *  The different levels and their meanings are
	     *
	     *    DEBUG - Messages useful for debugging purposes.
	     *    INFO - Informational messages.  This is mostly information like
	     *      'disconnect was called' or 'SASL auth succeeded'.
	     *    WARN - Warnings about potential problems.  This is mostly used
	     *      to report transient connection errors like request timeouts.
	     *    ERROR - Some error occurred.
	     *    FATAL - A non-recoverable fatal error occurred.
	     *
	     *  Parameters:
	     *    (Integer) level - The log level of the log message.  This will
	     *      be one of the values in Strophe.LogLevel.
	     *    (String) msg - The log message.
	     */
	    /* jshint ignore:start */
	    log: function(){}