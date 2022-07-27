/*!
 * @preserve
 * espn-web-player-bundle v3.5.7
 * 2022-01-28T18:51:00.358Z
 */
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.DTCIVideoPlayer = factory());
})(this, (function () { 'use strict';

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	var check = function (it) {
	  return it && it.Math == Math && it;
	};

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global_1 =
	  // eslint-disable-next-line es/no-global-this -- safe
	  check(typeof globalThis == 'object' && globalThis) ||
	  check(typeof window == 'object' && window) ||
	  // eslint-disable-next-line no-restricted-globals -- safe
	  check(typeof self == 'object' && self) ||
	  check(typeof commonjsGlobal == 'object' && commonjsGlobal) ||
	  // eslint-disable-next-line no-new-func -- fallback
	  (function () { return this; })() || Function('return this')();

	var fails = function (exec) {
	  try {
	    return !!exec();
	  } catch (error) {
	    return true;
	  }
	};

	var functionBindNative = !fails(function () {
	  var test = (function () { /* empty */ }).bind();
	  // eslint-disable-next-line no-prototype-builtins -- safe
	  return typeof test != 'function' || test.hasOwnProperty('prototype');
	});

	var FunctionPrototype$3 = Function.prototype;
	var apply = FunctionPrototype$3.apply;
	var call$2 = FunctionPrototype$3.call;

	// eslint-disable-next-line es/no-reflect -- safe
	var functionApply = typeof Reflect == 'object' && Reflect.apply || (functionBindNative ? call$2.bind(apply) : function () {
	  return call$2.apply(apply, arguments);
	});

	var FunctionPrototype$2 = Function.prototype;
	var bind$6 = FunctionPrototype$2.bind;
	var call$1 = FunctionPrototype$2.call;
	var uncurryThis = functionBindNative && bind$6.bind(call$1, call$1);

	var functionUncurryThis = functionBindNative ? function (fn) {
	  return fn && uncurryThis(fn);
	} : function (fn) {
	  return fn && function () {
	    return call$1.apply(fn, arguments);
	  };
	};

	// `IsCallable` abstract operation
	// https://tc39.es/ecma262/#sec-iscallable
	var isCallable = function (argument) {
	  return typeof argument == 'function';
	};

	// Detect IE8's incomplete defineProperty implementation
	var descriptors = !fails(function () {
	  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
	  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
	});

	var call = Function.prototype.call;

	var functionCall = functionBindNative ? call.bind(call) : function () {
	  return call.apply(call, arguments);
	};

	var $propertyIsEnumerable$1 = {}.propertyIsEnumerable;
	// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
	var getOwnPropertyDescriptor$2 = Object.getOwnPropertyDescriptor;

	// Nashorn ~ JDK8 bug
	var NASHORN_BUG = getOwnPropertyDescriptor$2 && !$propertyIsEnumerable$1.call({ 1: 2 }, 1);

	// `Object.prototype.propertyIsEnumerable` method implementation
	// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
	var f$7 = NASHORN_BUG ? function propertyIsEnumerable(V) {
	  var descriptor = getOwnPropertyDescriptor$2(this, V);
	  return !!descriptor && descriptor.enumerable;
	} : $propertyIsEnumerable$1;

	var objectPropertyIsEnumerable = {
		f: f$7
	};

	var createPropertyDescriptor = function (bitmap, value) {
	  return {
	    enumerable: !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable: !(bitmap & 4),
	    value: value
	  };
	};

	var toString$2 = functionUncurryThis({}.toString);
	var stringSlice$1 = functionUncurryThis(''.slice);

	var classofRaw = function (it) {
	  return stringSlice$1(toString$2(it), 8, -1);
	};

	var Object$5 = global_1.Object;
	var split = functionUncurryThis(''.split);

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var indexedObject = fails(function () {
	  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
	  // eslint-disable-next-line no-prototype-builtins -- safe
	  return !Object$5('z').propertyIsEnumerable(0);
	}) ? function (it) {
	  return classofRaw(it) == 'String' ? split(it, '') : Object$5(it);
	} : Object$5;

	var TypeError$f = global_1.TypeError;

	// `RequireObjectCoercible` abstract operation
	// https://tc39.es/ecma262/#sec-requireobjectcoercible
	var requireObjectCoercible = function (it) {
	  if (it == undefined) throw TypeError$f("Can't call method on " + it);
	  return it;
	};

	// toObject with fallback for non-array-like ES3 strings



	var toIndexedObject = function (it) {
	  return indexedObject(requireObjectCoercible(it));
	};

	var isObject = function (it) {
	  return typeof it == 'object' ? it !== null : isCallable(it);
	};

	var path = {};

	var aFunction = function (variable) {
	  return isCallable(variable) ? variable : undefined;
	};

	var getBuiltIn = function (namespace, method) {
	  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global_1[namespace])
	    : path[namespace] && path[namespace][method] || global_1[namespace] && global_1[namespace][method];
	};

	var objectIsPrototypeOf = functionUncurryThis({}.isPrototypeOf);

	var engineUserAgent = getBuiltIn('navigator', 'userAgent') || '';

	var process$3 = global_1.process;
	var Deno = global_1.Deno;
	var versions = process$3 && process$3.versions || Deno && Deno.version;
	var v8 = versions && versions.v8;
	var match, version;

	if (v8) {
	  match = v8.split('.');
	  // in old Chrome, versions of V8 isn't V8 = Chrome / 10
	  // but their correct versions are not interesting for us
	  version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
	}

	// BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
	// so check `userAgent` even if `.v8` exists, but 0
	if (!version && engineUserAgent) {
	  match = engineUserAgent.match(/Edge\/(\d+)/);
	  if (!match || match[1] >= 74) {
	    match = engineUserAgent.match(/Chrome\/(\d+)/);
	    if (match) version = +match[1];
	  }
	}

	var engineV8Version = version;

	/* eslint-disable es/no-symbol -- required for testing */



	// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
	var nativeSymbol = !!Object.getOwnPropertySymbols && !fails(function () {
	  var symbol = Symbol();
	  // Chrome 38 Symbol has incorrect toString conversion
	  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
	  return !String(symbol) || !(Object(symbol) instanceof Symbol) ||
	    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
	    !Symbol.sham && engineV8Version && engineV8Version < 41;
	});

	/* eslint-disable es/no-symbol -- required for testing */


	var useSymbolAsUid = nativeSymbol
	  && !Symbol.sham
	  && typeof Symbol.iterator == 'symbol';

	var Object$4 = global_1.Object;

	var isSymbol$1 = useSymbolAsUid ? function (it) {
	  return typeof it == 'symbol';
	} : function (it) {
	  var $Symbol = getBuiltIn('Symbol');
	  return isCallable($Symbol) && objectIsPrototypeOf($Symbol.prototype, Object$4(it));
	};

	var String$5 = global_1.String;

	var tryToString = function (argument) {
	  try {
	    return String$5(argument);
	  } catch (error) {
	    return 'Object';
	  }
	};

	var TypeError$e = global_1.TypeError;

	// `Assert: IsCallable(argument) is true`
	var aCallable = function (argument) {
	  if (isCallable(argument)) return argument;
	  throw TypeError$e(tryToString(argument) + ' is not a function');
	};

	// `GetMethod` abstract operation
	// https://tc39.es/ecma262/#sec-getmethod
	var getMethod = function (V, P) {
	  var func = V[P];
	  return func == null ? undefined : aCallable(func);
	};

	var TypeError$d = global_1.TypeError;

	// `OrdinaryToPrimitive` abstract operation
	// https://tc39.es/ecma262/#sec-ordinarytoprimitive
	var ordinaryToPrimitive = function (input, pref) {
	  var fn, val;
	  if (pref === 'string' && isCallable(fn = input.toString) && !isObject(val = functionCall(fn, input))) return val;
	  if (isCallable(fn = input.valueOf) && !isObject(val = functionCall(fn, input))) return val;
	  if (pref !== 'string' && isCallable(fn = input.toString) && !isObject(val = functionCall(fn, input))) return val;
	  throw TypeError$d("Can't convert object to primitive value");
	};

	var isPure = true;

	// eslint-disable-next-line es/no-object-defineproperty -- safe
	var defineProperty$1 = Object.defineProperty;

	var setGlobal = function (key, value) {
	  try {
	    defineProperty$1(global_1, key, { value: value, configurable: true, writable: true });
	  } catch (error) {
	    global_1[key] = value;
	  } return value;
	};

	var SHARED = '__core-js_shared__';
	var store$1 = global_1[SHARED] || setGlobal(SHARED, {});

	var sharedStore = store$1;

	var shared = createCommonjsModule(function (module) {
	(module.exports = function (key, value) {
	  return sharedStore[key] || (sharedStore[key] = value !== undefined ? value : {});
	})('versions', []).push({
	  version: '3.20.3',
	  mode: 'pure' ,
	  copyright: '© 2014-2022 Denis Pushkarev (zloirock.ru)',
	  license: 'https://github.com/zloirock/core-js/blob/v3.20.3/LICENSE',
	  source: 'https://github.com/zloirock/core-js'
	});
	});

	var Object$3 = global_1.Object;

	// `ToObject` abstract operation
	// https://tc39.es/ecma262/#sec-toobject
	var toObject = function (argument) {
	  return Object$3(requireObjectCoercible(argument));
	};

	var hasOwnProperty$1 = functionUncurryThis({}.hasOwnProperty);

	// `HasOwnProperty` abstract operation
	// https://tc39.es/ecma262/#sec-hasownproperty
	var hasOwnProperty_1 = Object.hasOwn || function hasOwn(it, key) {
	  return hasOwnProperty$1(toObject(it), key);
	};

	var id$1 = 0;
	var postfix = Math.random();
	var toString$1 = functionUncurryThis(1.0.toString);

	var uid = function (key) {
	  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString$1(++id$1 + postfix, 36);
	};

	var WellKnownSymbolsStore = shared('wks');
	var Symbol$4 = global_1.Symbol;
	var symbolFor = Symbol$4 && Symbol$4['for'];
	var createWellKnownSymbol = useSymbolAsUid ? Symbol$4 : Symbol$4 && Symbol$4.withoutSetter || uid;

	var wellKnownSymbol = function (name) {
	  if (!hasOwnProperty_1(WellKnownSymbolsStore, name) || !(nativeSymbol || typeof WellKnownSymbolsStore[name] == 'string')) {
	    var description = 'Symbol.' + name;
	    if (nativeSymbol && hasOwnProperty_1(Symbol$4, name)) {
	      WellKnownSymbolsStore[name] = Symbol$4[name];
	    } else if (useSymbolAsUid && symbolFor) {
	      WellKnownSymbolsStore[name] = symbolFor(description);
	    } else {
	      WellKnownSymbolsStore[name] = createWellKnownSymbol(description);
	    }
	  } return WellKnownSymbolsStore[name];
	};

	var TypeError$c = global_1.TypeError;
	var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');

	// `ToPrimitive` abstract operation
	// https://tc39.es/ecma262/#sec-toprimitive
	var toPrimitive = function (input, pref) {
	  if (!isObject(input) || isSymbol$1(input)) return input;
	  var exoticToPrim = getMethod(input, TO_PRIMITIVE);
	  var result;
	  if (exoticToPrim) {
	    if (pref === undefined) pref = 'default';
	    result = functionCall(exoticToPrim, input, pref);
	    if (!isObject(result) || isSymbol$1(result)) return result;
	    throw TypeError$c("Can't convert object to primitive value");
	  }
	  if (pref === undefined) pref = 'number';
	  return ordinaryToPrimitive(input, pref);
	};

	// `ToPropertyKey` abstract operation
	// https://tc39.es/ecma262/#sec-topropertykey
	var toPropertyKey = function (argument) {
	  var key = toPrimitive(argument, 'string');
	  return isSymbol$1(key) ? key : key + '';
	};

	var document$3 = global_1.document;
	// typeof document.createElement is 'object' in old IE
	var EXISTS$1 = isObject(document$3) && isObject(document$3.createElement);

	var documentCreateElement = function (it) {
	  return EXISTS$1 ? document$3.createElement(it) : {};
	};

	// Thanks to IE8 for its funny defineProperty
	var ie8DomDefine = !descriptors && !fails(function () {
	  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
	  return Object.defineProperty(documentCreateElement('div'), 'a', {
	    get: function () { return 7; }
	  }).a != 7;
	});

	// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
	var $getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor;

	// `Object.getOwnPropertyDescriptor` method
	// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
	var f$6 = descriptors ? $getOwnPropertyDescriptor$1 : function getOwnPropertyDescriptor(O, P) {
	  O = toIndexedObject(O);
	  P = toPropertyKey(P);
	  if (ie8DomDefine) try {
	    return $getOwnPropertyDescriptor$1(O, P);
	  } catch (error) { /* empty */ }
	  if (hasOwnProperty_1(O, P)) return createPropertyDescriptor(!functionCall(objectPropertyIsEnumerable.f, O, P), O[P]);
	};

	var objectGetOwnPropertyDescriptor = {
		f: f$6
	};

	var replacement = /#|\.prototype\./;

	var isForced = function (feature, detection) {
	  var value = data[normalize(feature)];
	  return value == POLYFILL ? true
	    : value == NATIVE ? false
	    : isCallable(detection) ? fails(detection)
	    : !!detection;
	};

	var normalize = isForced.normalize = function (string) {
	  return String(string).replace(replacement, '.').toLowerCase();
	};

	var data = isForced.data = {};
	var NATIVE = isForced.NATIVE = 'N';
	var POLYFILL = isForced.POLYFILL = 'P';

	var isForced_1 = isForced;

	var bind$5 = functionUncurryThis(functionUncurryThis.bind);

	// optional / simple context binding
	var functionBindContext = function (fn, that) {
	  aCallable(fn);
	  return that === undefined ? fn : functionBindNative ? bind$5(fn, that) : function (/* ...args */) {
	    return fn.apply(that, arguments);
	  };
	};

	// V8 ~ Chrome 36-
	// https://bugs.chromium.org/p/v8/issues/detail?id=3334
	var v8PrototypeDefineBug = descriptors && fails(function () {
	  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
	  return Object.defineProperty(function () { /* empty */ }, 'prototype', {
	    value: 42,
	    writable: false
	  }).prototype != 42;
	});

	var String$4 = global_1.String;
	var TypeError$b = global_1.TypeError;

	// `Assert: Type(argument) is Object`
	var anObject = function (argument) {
	  if (isObject(argument)) return argument;
	  throw TypeError$b(String$4(argument) + ' is not an object');
	};

	var TypeError$a = global_1.TypeError;
	// eslint-disable-next-line es/no-object-defineproperty -- safe
	var $defineProperty = Object.defineProperty;
	// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
	var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
	var ENUMERABLE = 'enumerable';
	var CONFIGURABLE$1 = 'configurable';
	var WRITABLE = 'writable';

	// `Object.defineProperty` method
	// https://tc39.es/ecma262/#sec-object.defineproperty
	var f$5 = descriptors ? v8PrototypeDefineBug ? function defineProperty(O, P, Attributes) {
	  anObject(O);
	  P = toPropertyKey(P);
	  anObject(Attributes);
	  if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
	    var current = $getOwnPropertyDescriptor(O, P);
	    if (current && current[WRITABLE]) {
	      O[P] = Attributes.value;
	      Attributes = {
	        configurable: CONFIGURABLE$1 in Attributes ? Attributes[CONFIGURABLE$1] : current[CONFIGURABLE$1],
	        enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
	        writable: false
	      };
	    }
	  } return $defineProperty(O, P, Attributes);
	} : $defineProperty : function defineProperty(O, P, Attributes) {
	  anObject(O);
	  P = toPropertyKey(P);
	  anObject(Attributes);
	  if (ie8DomDefine) try {
	    return $defineProperty(O, P, Attributes);
	  } catch (error) { /* empty */ }
	  if ('get' in Attributes || 'set' in Attributes) throw TypeError$a('Accessors not supported');
	  if ('value' in Attributes) O[P] = Attributes.value;
	  return O;
	};

	var objectDefineProperty = {
		f: f$5
	};

	var createNonEnumerableProperty = descriptors ? function (object, key, value) {
	  return objectDefineProperty.f(object, key, createPropertyDescriptor(1, value));
	} : function (object, key, value) {
	  object[key] = value;
	  return object;
	};

	var getOwnPropertyDescriptor$1 = objectGetOwnPropertyDescriptor.f;






	var wrapConstructor = function (NativeConstructor) {
	  var Wrapper = function (a, b, c) {
	    if (this instanceof Wrapper) {
	      switch (arguments.length) {
	        case 0: return new NativeConstructor();
	        case 1: return new NativeConstructor(a);
	        case 2: return new NativeConstructor(a, b);
	      } return new NativeConstructor(a, b, c);
	    } return functionApply(NativeConstructor, this, arguments);
	  };
	  Wrapper.prototype = NativeConstructor.prototype;
	  return Wrapper;
	};

	/*
	  options.target      - name of the target object
	  options.global      - target is the global object
	  options.stat        - export as static methods of target
	  options.proto       - export as prototype methods of target
	  options.real        - real prototype method for the `pure` version
	  options.forced      - export even if the native feature is available
	  options.bind        - bind methods to the target, required for the `pure` version
	  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
	  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
	  options.sham        - add a flag to not completely full polyfills
	  options.enumerable  - export as enumerable property
	  options.noTargetGet - prevent calling a getter on target
	  options.name        - the .name of the function if it does not match the key
	*/
	var _export = function (options, source) {
	  var TARGET = options.target;
	  var GLOBAL = options.global;
	  var STATIC = options.stat;
	  var PROTO = options.proto;

	  var nativeSource = GLOBAL ? global_1 : STATIC ? global_1[TARGET] : (global_1[TARGET] || {}).prototype;

	  var target = GLOBAL ? path : path[TARGET] || createNonEnumerableProperty(path, TARGET, {})[TARGET];
	  var targetPrototype = target.prototype;

	  var FORCED, USE_NATIVE, VIRTUAL_PROTOTYPE;
	  var key, sourceProperty, targetProperty, nativeProperty, resultProperty, descriptor;

	  for (key in source) {
	    FORCED = isForced_1(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
	    // contains in native
	    USE_NATIVE = !FORCED && nativeSource && hasOwnProperty_1(nativeSource, key);

	    targetProperty = target[key];

	    if (USE_NATIVE) if (options.noTargetGet) {
	      descriptor = getOwnPropertyDescriptor$1(nativeSource, key);
	      nativeProperty = descriptor && descriptor.value;
	    } else nativeProperty = nativeSource[key];

	    // export native or implementation
	    sourceProperty = (USE_NATIVE && nativeProperty) ? nativeProperty : source[key];

	    if (USE_NATIVE && typeof targetProperty == typeof sourceProperty) continue;

	    // bind timers to global for call from export context
	    if (options.bind && USE_NATIVE) resultProperty = functionBindContext(sourceProperty, global_1);
	    // wrap global constructors for prevent changs in this version
	    else if (options.wrap && USE_NATIVE) resultProperty = wrapConstructor(sourceProperty);
	    // make static versions for prototype methods
	    else if (PROTO && isCallable(sourceProperty)) resultProperty = functionUncurryThis(sourceProperty);
	    // default case
	    else resultProperty = sourceProperty;

	    // add a flag to not completely full polyfills
	    if (options.sham || (sourceProperty && sourceProperty.sham) || (targetProperty && targetProperty.sham)) {
	      createNonEnumerableProperty(resultProperty, 'sham', true);
	    }

	    createNonEnumerableProperty(target, key, resultProperty);

	    if (PROTO) {
	      VIRTUAL_PROTOTYPE = TARGET + 'Prototype';
	      if (!hasOwnProperty_1(path, VIRTUAL_PROTOTYPE)) {
	        createNonEnumerableProperty(path, VIRTUAL_PROTOTYPE, {});
	      }
	      // export virtual prototype methods
	      createNonEnumerableProperty(path[VIRTUAL_PROTOTYPE], key, sourceProperty);
	      // export real prototype methods
	      if (options.real && targetPrototype && !targetPrototype[key]) {
	        createNonEnumerableProperty(targetPrototype, key, sourceProperty);
	      }
	    }
	  }
	};

	var keys$3 = shared('keys');

	var sharedKey = function (key) {
	  return keys$3[key] || (keys$3[key] = uid(key));
	};

	var correctPrototypeGetter = !fails(function () {
	  function F() { /* empty */ }
	  F.prototype.constructor = null;
	  // eslint-disable-next-line es/no-object-getprototypeof -- required for testing
	  return Object.getPrototypeOf(new F()) !== F.prototype;
	});

	var IE_PROTO$1 = sharedKey('IE_PROTO');
	var Object$2 = global_1.Object;
	var ObjectPrototype = Object$2.prototype;

	// `Object.getPrototypeOf` method
	// https://tc39.es/ecma262/#sec-object.getprototypeof
	var objectGetPrototypeOf = correctPrototypeGetter ? Object$2.getPrototypeOf : function (O) {
	  var object = toObject(O);
	  if (hasOwnProperty_1(object, IE_PROTO$1)) return object[IE_PROTO$1];
	  var constructor = object.constructor;
	  if (isCallable(constructor) && object instanceof constructor) {
	    return constructor.prototype;
	  } return object instanceof Object$2 ? ObjectPrototype : null;
	};

	var String$3 = global_1.String;
	var TypeError$9 = global_1.TypeError;

	var aPossiblePrototype = function (argument) {
	  if (typeof argument == 'object' || isCallable(argument)) return argument;
	  throw TypeError$9("Can't set " + String$3(argument) + ' as a prototype');
	};

	/* eslint-disable no-proto -- safe */




	// `Object.setPrototypeOf` method
	// https://tc39.es/ecma262/#sec-object.setprototypeof
	// Works with __proto__ only. Old v8 can't work with null proto objects.
	// eslint-disable-next-line es/no-object-setprototypeof -- safe
	var objectSetPrototypeOf = Object.setPrototypeOf || ('__proto__' in {} ? function () {
	  var CORRECT_SETTER = false;
	  var test = {};
	  var setter;
	  try {
	    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
	    setter = functionUncurryThis(Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set);
	    setter(test, []);
	    CORRECT_SETTER = test instanceof Array;
	  } catch (error) { /* empty */ }
	  return function setPrototypeOf(O, proto) {
	    anObject(O);
	    aPossiblePrototype(proto);
	    if (CORRECT_SETTER) setter(O, proto);
	    else O.__proto__ = proto;
	    return O;
	  };
	}() : undefined);

	var ceil = Math.ceil;
	var floor$1 = Math.floor;

	// `ToIntegerOrInfinity` abstract operation
	// https://tc39.es/ecma262/#sec-tointegerorinfinity
	var toIntegerOrInfinity = function (argument) {
	  var number = +argument;
	  // eslint-disable-next-line no-self-compare -- safe
	  return number !== number || number === 0 ? 0 : (number > 0 ? floor$1 : ceil)(number);
	};

	var max$3 = Math.max;
	var min$2 = Math.min;

	// Helper for a popular repeating case of the spec:
	// Let integer be ? ToInteger(index).
	// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
	var toAbsoluteIndex = function (index, length) {
	  var integer = toIntegerOrInfinity(index);
	  return integer < 0 ? max$3(integer + length, 0) : min$2(integer, length);
	};

	var min$1 = Math.min;

	// `ToLength` abstract operation
	// https://tc39.es/ecma262/#sec-tolength
	var toLength = function (argument) {
	  return argument > 0 ? min$1(toIntegerOrInfinity(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
	};

	// `LengthOfArrayLike` abstract operation
	// https://tc39.es/ecma262/#sec-lengthofarraylike
	var lengthOfArrayLike = function (obj) {
	  return toLength(obj.length);
	};

	// `Array.prototype.{ indexOf, includes }` methods implementation
	var createMethod$4 = function (IS_INCLUDES) {
	  return function ($this, el, fromIndex) {
	    var O = toIndexedObject($this);
	    var length = lengthOfArrayLike(O);
	    var index = toAbsoluteIndex(fromIndex, length);
	    var value;
	    // Array#includes uses SameValueZero equality algorithm
	    // eslint-disable-next-line no-self-compare -- NaN check
	    if (IS_INCLUDES && el != el) while (length > index) {
	      value = O[index++];
	      // eslint-disable-next-line no-self-compare -- NaN check
	      if (value != value) return true;
	    // Array#indexOf ignores holes, Array#includes - not
	    } else for (;length > index; index++) {
	      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

	var arrayIncludes = {
	  // `Array.prototype.includes` method
	  // https://tc39.es/ecma262/#sec-array.prototype.includes
	  includes: createMethod$4(true),
	  // `Array.prototype.indexOf` method
	  // https://tc39.es/ecma262/#sec-array.prototype.indexof
	  indexOf: createMethod$4(false)
	};

	var hiddenKeys$1 = {};

	var indexOf$4 = arrayIncludes.indexOf;


	var push$4 = functionUncurryThis([].push);

	var objectKeysInternal = function (object, names) {
	  var O = toIndexedObject(object);
	  var i = 0;
	  var result = [];
	  var key;
	  for (key in O) !hasOwnProperty_1(hiddenKeys$1, key) && hasOwnProperty_1(O, key) && push$4(result, key);
	  // Don't enum bug & hidden keys
	  while (names.length > i) if (hasOwnProperty_1(O, key = names[i++])) {
	    ~indexOf$4(result, key) || push$4(result, key);
	  }
	  return result;
	};

	// IE8- don't enum bug keys
	var enumBugKeys = [
	  'constructor',
	  'hasOwnProperty',
	  'isPrototypeOf',
	  'propertyIsEnumerable',
	  'toLocaleString',
	  'toString',
	  'valueOf'
	];

	var hiddenKeys = enumBugKeys.concat('length', 'prototype');

	// `Object.getOwnPropertyNames` method
	// https://tc39.es/ecma262/#sec-object.getownpropertynames
	// eslint-disable-next-line es/no-object-getownpropertynames -- safe
	var f$4 = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
	  return objectKeysInternal(O, hiddenKeys);
	};

	var objectGetOwnPropertyNames = {
		f: f$4
	};

	// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
	var f$3 = Object.getOwnPropertySymbols;

	var objectGetOwnPropertySymbols = {
		f: f$3
	};

	var concat$5 = functionUncurryThis([].concat);

	// all object keys, includes non-enumerable and symbols
	var ownKeys = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
	  var keys = objectGetOwnPropertyNames.f(anObject(it));
	  var getOwnPropertySymbols = objectGetOwnPropertySymbols.f;
	  return getOwnPropertySymbols ? concat$5(keys, getOwnPropertySymbols(it)) : keys;
	};

	var copyConstructorProperties = function (target, source, exceptions) {
	  var keys = ownKeys(source);
	  var defineProperty = objectDefineProperty.f;
	  var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;
	  for (var i = 0; i < keys.length; i++) {
	    var key = keys[i];
	    if (!hasOwnProperty_1(target, key) && !(exceptions && hasOwnProperty_1(exceptions, key))) {
	      defineProperty(target, key, getOwnPropertyDescriptor(source, key));
	    }
	  }
	};

	// `Object.keys` method
	// https://tc39.es/ecma262/#sec-object.keys
	// eslint-disable-next-line es/no-object-keys -- safe
	var objectKeys = Object.keys || function keys(O) {
	  return objectKeysInternal(O, enumBugKeys);
	};

	// `Object.defineProperties` method
	// https://tc39.es/ecma262/#sec-object.defineproperties
	// eslint-disable-next-line es/no-object-defineproperties -- safe
	var f$2 = descriptors && !v8PrototypeDefineBug ? Object.defineProperties : function defineProperties(O, Properties) {
	  anObject(O);
	  var props = toIndexedObject(Properties);
	  var keys = objectKeys(Properties);
	  var length = keys.length;
	  var index = 0;
	  var key;
	  while (length > index) objectDefineProperty.f(O, key = keys[index++], props[key]);
	  return O;
	};

	var objectDefineProperties = {
		f: f$2
	};

	var html = getBuiltIn('document', 'documentElement');

	/* global ActiveXObject -- old IE, WSH */








	var GT = '>';
	var LT = '<';
	var PROTOTYPE = 'prototype';
	var SCRIPT = 'script';
	var IE_PROTO = sharedKey('IE_PROTO');

	var EmptyConstructor = function () { /* empty */ };

	var scriptTag = function (content) {
	  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
	};

	// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
	var NullProtoObjectViaActiveX = function (activeXDocument) {
	  activeXDocument.write(scriptTag(''));
	  activeXDocument.close();
	  var temp = activeXDocument.parentWindow.Object;
	  activeXDocument = null; // avoid memory leak
	  return temp;
	};

	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var NullProtoObjectViaIFrame = function () {
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = documentCreateElement('iframe');
	  var JS = 'java' + SCRIPT + ':';
	  var iframeDocument;
	  iframe.style.display = 'none';
	  html.appendChild(iframe);
	  // https://github.com/zloirock/core-js/issues/475
	  iframe.src = String(JS);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(scriptTag('document.F=Object'));
	  iframeDocument.close();
	  return iframeDocument.F;
	};

	// Check for document.domain and active x support
	// No need to use active x approach when document.domain is not set
	// see https://github.com/es-shims/es5-shim/issues/150
	// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
	// avoid IE GC bug
	var activeXDocument;
	var NullProtoObject = function () {
	  try {
	    activeXDocument = new ActiveXObject('htmlfile');
	  } catch (error) { /* ignore */ }
	  NullProtoObject = typeof document != 'undefined'
	    ? document.domain && activeXDocument
	      ? NullProtoObjectViaActiveX(activeXDocument) // old IE
	      : NullProtoObjectViaIFrame()
	    : NullProtoObjectViaActiveX(activeXDocument); // WSH
	  var length = enumBugKeys.length;
	  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
	  return NullProtoObject();
	};

	hiddenKeys$1[IE_PROTO] = true;

	// `Object.create` method
	// https://tc39.es/ecma262/#sec-object.create
	var objectCreate = Object.create || function create(O, Properties) {
	  var result;
	  if (O !== null) {
	    EmptyConstructor[PROTOTYPE] = anObject(O);
	    result = new EmptyConstructor();
	    EmptyConstructor[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = NullProtoObject();
	  return Properties === undefined ? result : objectDefineProperties.f(result, Properties);
	};

	var replace$2 = functionUncurryThis(''.replace);

	var TEST = (function (arg) { return String(Error(arg).stack); })('zxcasd');
	var V8_OR_CHAKRA_STACK_ENTRY = /\n\s*at [^:]*:[^\n]*/;
	var IS_V8_OR_CHAKRA_STACK = V8_OR_CHAKRA_STACK_ENTRY.test(TEST);

	var clearErrorStack = function (stack, dropEntries) {
	  if (IS_V8_OR_CHAKRA_STACK && typeof stack == 'string') {
	    while (dropEntries--) stack = replace$2(stack, V8_OR_CHAKRA_STACK_ENTRY, '');
	  } return stack;
	};

	// `InstallErrorCause` abstract operation
	// https://tc39.es/proposal-error-cause/#sec-errorobjects-install-error-cause
	var installErrorCause = function (O, options) {
	  if (isObject(options) && 'cause' in options) {
	    createNonEnumerableProperty(O, 'cause', options.cause);
	  }
	};

	var iterators = {};

	var ITERATOR$6 = wellKnownSymbol('iterator');
	var ArrayPrototype$8 = Array.prototype;

	// check on default Array iterator
	var isArrayIteratorMethod = function (it) {
	  return it !== undefined && (iterators.Array === it || ArrayPrototype$8[ITERATOR$6] === it);
	};

	var TO_STRING_TAG$4 = wellKnownSymbol('toStringTag');
	var test$1 = {};

	test$1[TO_STRING_TAG$4] = 'z';

	var toStringTagSupport = String(test$1) === '[object z]';

	var TO_STRING_TAG$3 = wellKnownSymbol('toStringTag');
	var Object$1 = global_1.Object;

	// ES3 wrong here
	var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

	// fallback for IE11 Script Access Denied error
	var tryGet = function (it, key) {
	  try {
	    return it[key];
	  } catch (error) { /* empty */ }
	};

	// getting tag from ES6+ `Object.prototype.toString`
	var classof = toStringTagSupport ? classofRaw : function (it) {
	  var O, tag, result;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (tag = tryGet(O = Object$1(it), TO_STRING_TAG$3)) == 'string' ? tag
	    // builtinTag case
	    : CORRECT_ARGUMENTS ? classofRaw(O)
	    // ES3 arguments fallback
	    : (result = classofRaw(O)) == 'Object' && isCallable(O.callee) ? 'Arguments' : result;
	};

	var ITERATOR$5 = wellKnownSymbol('iterator');

	var getIteratorMethod = function (it) {
	  if (it != undefined) return getMethod(it, ITERATOR$5)
	    || getMethod(it, '@@iterator')
	    || iterators[classof(it)];
	};

	var TypeError$8 = global_1.TypeError;

	var getIterator = function (argument, usingIterator) {
	  var iteratorMethod = arguments.length < 2 ? getIteratorMethod(argument) : usingIterator;
	  if (aCallable(iteratorMethod)) return anObject(functionCall(iteratorMethod, argument));
	  throw TypeError$8(tryToString(argument) + ' is not iterable');
	};

	var iteratorClose = function (iterator, kind, value) {
	  var innerResult, innerError;
	  anObject(iterator);
	  try {
	    innerResult = getMethod(iterator, 'return');
	    if (!innerResult) {
	      if (kind === 'throw') throw value;
	      return value;
	    }
	    innerResult = functionCall(innerResult, iterator);
	  } catch (error) {
	    innerError = true;
	    innerResult = error;
	  }
	  if (kind === 'throw') throw value;
	  if (innerError) throw innerResult;
	  anObject(innerResult);
	  return value;
	};

	var TypeError$7 = global_1.TypeError;

	var Result = function (stopped, result) {
	  this.stopped = stopped;
	  this.result = result;
	};

	var ResultPrototype = Result.prototype;

	var iterate = function (iterable, unboundFunction, options) {
	  var that = options && options.that;
	  var AS_ENTRIES = !!(options && options.AS_ENTRIES);
	  var IS_ITERATOR = !!(options && options.IS_ITERATOR);
	  var INTERRUPTED = !!(options && options.INTERRUPTED);
	  var fn = functionBindContext(unboundFunction, that);
	  var iterator, iterFn, index, length, result, next, step;

	  var stop = function (condition) {
	    if (iterator) iteratorClose(iterator, 'normal', condition);
	    return new Result(true, condition);
	  };

	  var callFn = function (value) {
	    if (AS_ENTRIES) {
	      anObject(value);
	      return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
	    } return INTERRUPTED ? fn(value, stop) : fn(value);
	  };

	  if (IS_ITERATOR) {
	    iterator = iterable;
	  } else {
	    iterFn = getIteratorMethod(iterable);
	    if (!iterFn) throw TypeError$7(tryToString(iterable) + ' is not iterable');
	    // optimisation for array iterators
	    if (isArrayIteratorMethod(iterFn)) {
	      for (index = 0, length = lengthOfArrayLike(iterable); length > index; index++) {
	        result = callFn(iterable[index]);
	        if (result && objectIsPrototypeOf(ResultPrototype, result)) return result;
	      } return new Result(false);
	    }
	    iterator = getIterator(iterable, iterFn);
	  }

	  next = iterator.next;
	  while (!(step = functionCall(next, iterator)).done) {
	    try {
	      result = callFn(step.value);
	    } catch (error) {
	      iteratorClose(iterator, 'throw', error);
	    }
	    if (typeof result == 'object' && result && objectIsPrototypeOf(ResultPrototype, result)) return result;
	  } return new Result(false);
	};

	var String$2 = global_1.String;

	var toString_1 = function (argument) {
	  if (classof(argument) === 'Symbol') throw TypeError('Cannot convert a Symbol value to a string');
	  return String$2(argument);
	};

	var normalizeStringArgument = function (argument, $default) {
	  return argument === undefined ? arguments.length < 2 ? '' : $default : toString_1(argument);
	};

	var errorStackInstallable = !fails(function () {
	  var error = Error('a');
	  if (!('stack' in error)) return true;
	  // eslint-disable-next-line es/no-object-defineproperty -- safe
	  Object.defineProperty(error, 'stack', createPropertyDescriptor(1, 7));
	  return error.stack !== 7;
	});

	var TO_STRING_TAG$2 = wellKnownSymbol('toStringTag');
	var Error$1 = global_1.Error;
	var push$3 = [].push;

	var $AggregateError = function AggregateError(errors, message /* , options */) {
	  var options = arguments.length > 2 ? arguments[2] : undefined;
	  var isInstance = objectIsPrototypeOf(AggregateErrorPrototype, this);
	  var that;
	  if (objectSetPrototypeOf) {
	    that = objectSetPrototypeOf(new Error$1(), isInstance ? objectGetPrototypeOf(this) : AggregateErrorPrototype);
	  } else {
	    that = isInstance ? this : objectCreate(AggregateErrorPrototype);
	    createNonEnumerableProperty(that, TO_STRING_TAG$2, 'Error');
	  }
	  if (message !== undefined) createNonEnumerableProperty(that, 'message', normalizeStringArgument(message));
	  if (errorStackInstallable) createNonEnumerableProperty(that, 'stack', clearErrorStack(that.stack, 1));
	  installErrorCause(that, options);
	  var errorsArray = [];
	  iterate(errors, push$3, { that: errorsArray });
	  createNonEnumerableProperty(that, 'errors', errorsArray);
	  return that;
	};

	if (objectSetPrototypeOf) objectSetPrototypeOf($AggregateError, Error$1);
	else copyConstructorProperties($AggregateError, Error$1, { name: true });

	var AggregateErrorPrototype = $AggregateError.prototype = objectCreate(Error$1.prototype, {
	  constructor: createPropertyDescriptor(1, $AggregateError),
	  message: createPropertyDescriptor(1, ''),
	  name: createPropertyDescriptor(1, 'AggregateError')
	});

	// `AggregateError` constructor
	// https://tc39.es/ecma262/#sec-aggregate-error-constructor
	_export({ global: true }, {
	  AggregateError: $AggregateError
	});

	var functionToString = functionUncurryThis(Function.toString);

	// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
	if (!isCallable(sharedStore.inspectSource)) {
	  sharedStore.inspectSource = function (it) {
	    return functionToString(it);
	  };
	}

	var inspectSource = sharedStore.inspectSource;

	var WeakMap$1 = global_1.WeakMap;

	var nativeWeakMap = isCallable(WeakMap$1) && /native code/.test(inspectSource(WeakMap$1));

	var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
	var TypeError$6 = global_1.TypeError;
	var WeakMap = global_1.WeakMap;
	var set$1, get, has;

	var enforce = function (it) {
	  return has(it) ? get(it) : set$1(it, {});
	};

	var getterFor = function (TYPE) {
	  return function (it) {
	    var state;
	    if (!isObject(it) || (state = get(it)).type !== TYPE) {
	      throw TypeError$6('Incompatible receiver, ' + TYPE + ' required');
	    } return state;
	  };
	};

	if (nativeWeakMap || sharedStore.state) {
	  var store = sharedStore.state || (sharedStore.state = new WeakMap());
	  var wmget = functionUncurryThis(store.get);
	  var wmhas = functionUncurryThis(store.has);
	  var wmset = functionUncurryThis(store.set);
	  set$1 = function (it, metadata) {
	    if (wmhas(store, it)) throw new TypeError$6(OBJECT_ALREADY_INITIALIZED);
	    metadata.facade = it;
	    wmset(store, it, metadata);
	    return metadata;
	  };
	  get = function (it) {
	    return wmget(store, it) || {};
	  };
	  has = function (it) {
	    return wmhas(store, it);
	  };
	} else {
	  var STATE = sharedKey('state');
	  hiddenKeys$1[STATE] = true;
	  set$1 = function (it, metadata) {
	    if (hasOwnProperty_1(it, STATE)) throw new TypeError$6(OBJECT_ALREADY_INITIALIZED);
	    metadata.facade = it;
	    createNonEnumerableProperty(it, STATE, metadata);
	    return metadata;
	  };
	  get = function (it) {
	    return hasOwnProperty_1(it, STATE) ? it[STATE] : {};
	  };
	  has = function (it) {
	    return hasOwnProperty_1(it, STATE);
	  };
	}

	var internalState = {
	  set: set$1,
	  get: get,
	  has: has,
	  enforce: enforce,
	  getterFor: getterFor
	};

	var FunctionPrototype$1 = Function.prototype;
	// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
	var getDescriptor = descriptors && Object.getOwnPropertyDescriptor;

	var EXISTS = hasOwnProperty_1(FunctionPrototype$1, 'name');
	// additional protection from minified / mangled / dropped function names
	var PROPER = EXISTS && (function something() { /* empty */ }).name === 'something';
	var CONFIGURABLE = EXISTS && (!descriptors || (descriptors && getDescriptor(FunctionPrototype$1, 'name').configurable));

	var functionName = {
	  EXISTS: EXISTS,
	  PROPER: PROPER,
	  CONFIGURABLE: CONFIGURABLE
	};

	var redefine = function (target, key, value, options) {
	  if (options && options.enumerable) target[key] = value;
	  else createNonEnumerableProperty(target, key, value);
	};

	var ITERATOR$4 = wellKnownSymbol('iterator');
	var BUGGY_SAFARI_ITERATORS$1 = false;

	// `%IteratorPrototype%` object
	// https://tc39.es/ecma262/#sec-%iteratorprototype%-object
	var IteratorPrototype$1, PrototypeOfArrayIteratorPrototype, arrayIterator;

	/* eslint-disable es/no-array-prototype-keys -- safe */
	if ([].keys) {
	  arrayIterator = [].keys();
	  // Safari 8 has buggy iterators w/o `next`
	  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS$1 = true;
	  else {
	    PrototypeOfArrayIteratorPrototype = objectGetPrototypeOf(objectGetPrototypeOf(arrayIterator));
	    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype$1 = PrototypeOfArrayIteratorPrototype;
	  }
	}

	var NEW_ITERATOR_PROTOTYPE = IteratorPrototype$1 == undefined || fails(function () {
	  var test = {};
	  // FF44- legacy iterators case
	  return IteratorPrototype$1[ITERATOR$4].call(test) !== test;
	});

	if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype$1 = {};
	else IteratorPrototype$1 = objectCreate(IteratorPrototype$1);

	// `%IteratorPrototype%[@@iterator]()` method
	// https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator
	if (!isCallable(IteratorPrototype$1[ITERATOR$4])) {
	  redefine(IteratorPrototype$1, ITERATOR$4, function () {
	    return this;
	  });
	}

	var iteratorsCore = {
	  IteratorPrototype: IteratorPrototype$1,
	  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS$1
	};

	// `Object.prototype.toString` method implementation
	// https://tc39.es/ecma262/#sec-object.prototype.tostring
	var objectToString$1 = toStringTagSupport ? {}.toString : function toString() {
	  return '[object ' + classof(this) + ']';
	};

	var defineProperty = objectDefineProperty.f;





	var TO_STRING_TAG$1 = wellKnownSymbol('toStringTag');

	var setToStringTag = function (it, TAG, STATIC, SET_METHOD) {
	  if (it) {
	    var target = STATIC ? it : it.prototype;
	    if (!hasOwnProperty_1(target, TO_STRING_TAG$1)) {
	      defineProperty(target, TO_STRING_TAG$1, { configurable: true, value: TAG });
	    }
	    if (SET_METHOD && !toStringTagSupport) {
	      createNonEnumerableProperty(target, 'toString', objectToString$1);
	    }
	  }
	};

	var IteratorPrototype = iteratorsCore.IteratorPrototype;





	var returnThis$1 = function () { return this; };

	var createIteratorConstructor = function (IteratorConstructor, NAME, next, ENUMERABLE_NEXT) {
	  var TO_STRING_TAG = NAME + ' Iterator';
	  IteratorConstructor.prototype = objectCreate(IteratorPrototype, { next: createPropertyDescriptor(+!ENUMERABLE_NEXT, next) });
	  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
	  iterators[TO_STRING_TAG] = returnThis$1;
	  return IteratorConstructor;
	};

	var PROPER_FUNCTION_NAME$1 = functionName.PROPER;
	var BUGGY_SAFARI_ITERATORS = iteratorsCore.BUGGY_SAFARI_ITERATORS;
	var ITERATOR$3 = wellKnownSymbol('iterator');
	var KEYS = 'keys';
	var VALUES = 'values';
	var ENTRIES = 'entries';

	var returnThis = function () { return this; };

	var defineIterator = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
	  createIteratorConstructor(IteratorConstructor, NAME, next);

	  var getIterationMethod = function (KIND) {
	    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
	    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
	    switch (KIND) {
	      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
	      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
	      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
	    } return function () { return new IteratorConstructor(this); };
	  };

	  var TO_STRING_TAG = NAME + ' Iterator';
	  var INCORRECT_VALUES_NAME = false;
	  var IterablePrototype = Iterable.prototype;
	  var nativeIterator = IterablePrototype[ITERATOR$3]
	    || IterablePrototype['@@iterator']
	    || DEFAULT && IterablePrototype[DEFAULT];
	  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
	  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
	  var CurrentIteratorPrototype, methods, KEY;

	  // fix native
	  if (anyNativeIterator) {
	    CurrentIteratorPrototype = objectGetPrototypeOf(anyNativeIterator.call(new Iterable()));
	    if (CurrentIteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
	      // Set @@toStringTag to native iterators
	      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
	      iterators[TO_STRING_TAG] = returnThis;
	    }
	  }

	  // fix Array.prototype.{ values, @@iterator }.name in V8 / FF
	  if (PROPER_FUNCTION_NAME$1 && DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
	    {
	      INCORRECT_VALUES_NAME = true;
	      defaultIterator = function values() { return functionCall(nativeIterator, this); };
	    }
	  }

	  // export additional methods
	  if (DEFAULT) {
	    methods = {
	      values: getIterationMethod(VALUES),
	      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
	      entries: getIterationMethod(ENTRIES)
	    };
	    if (FORCED) for (KEY in methods) {
	      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
	        redefine(IterablePrototype, KEY, methods[KEY]);
	      }
	    } else _export({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
	  }

	  // define iterator
	  if ((FORCED) && IterablePrototype[ITERATOR$3] !== defaultIterator) {
	    redefine(IterablePrototype, ITERATOR$3, defaultIterator, { name: DEFAULT });
	  }
	  iterators[NAME] = defaultIterator;

	  return methods;
	};

	objectDefineProperty.f;




	var ARRAY_ITERATOR = 'Array Iterator';
	var setInternalState$2 = internalState.set;
	var getInternalState$2 = internalState.getterFor(ARRAY_ITERATOR);

	// `Array.prototype.entries` method
	// https://tc39.es/ecma262/#sec-array.prototype.entries
	// `Array.prototype.keys` method
	// https://tc39.es/ecma262/#sec-array.prototype.keys
	// `Array.prototype.values` method
	// https://tc39.es/ecma262/#sec-array.prototype.values
	// `Array.prototype[@@iterator]` method
	// https://tc39.es/ecma262/#sec-array.prototype-@@iterator
	// `CreateArrayIterator` internal method
	// https://tc39.es/ecma262/#sec-createarrayiterator
	defineIterator(Array, 'Array', function (iterated, kind) {
	  setInternalState$2(this, {
	    type: ARRAY_ITERATOR,
	    target: toIndexedObject(iterated), // target
	    index: 0,                          // next index
	    kind: kind                         // kind
	  });
	// `%ArrayIteratorPrototype%.next` method
	// https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next
	}, function () {
	  var state = getInternalState$2(this);
	  var target = state.target;
	  var kind = state.kind;
	  var index = state.index++;
	  if (!target || index >= target.length) {
	    state.target = undefined;
	    return { value: undefined, done: true };
	  }
	  if (kind == 'keys') return { value: index, done: false };
	  if (kind == 'values') return { value: target[index], done: false };
	  return { value: [index, target[index]], done: false };
	}, 'values');

	// argumentsList[@@iterator] is %ArrayProto_values%
	// https://tc39.es/ecma262/#sec-createunmappedargumentsobject
	// https://tc39.es/ecma262/#sec-createmappedargumentsobject
	iterators.Arguments = iterators.Array;

	var nativePromiseConstructor = global_1.Promise;

	var redefineAll = function (target, src, options) {
	  for (var key in src) {
	    if (options && options.unsafe && target[key]) target[key] = src[key];
	    else redefine(target, key, src[key], options);
	  } return target;
	};

	var SPECIES$5 = wellKnownSymbol('species');

	var setSpecies = function (CONSTRUCTOR_NAME) {
	  var Constructor = getBuiltIn(CONSTRUCTOR_NAME);
	  var defineProperty = objectDefineProperty.f;

	  if (descriptors && Constructor && !Constructor[SPECIES$5]) {
	    defineProperty(Constructor, SPECIES$5, {
	      configurable: true,
	      get: function () { return this; }
	    });
	  }
	};

	var TypeError$5 = global_1.TypeError;

	var anInstance = function (it, Prototype) {
	  if (objectIsPrototypeOf(Prototype, it)) return it;
	  throw TypeError$5('Incorrect invocation');
	};

	var ITERATOR$2 = wellKnownSymbol('iterator');
	var SAFE_CLOSING = false;

	try {
	  var called = 0;
	  var iteratorWithReturn = {
	    next: function () {
	      return { done: !!called++ };
	    },
	    'return': function () {
	      SAFE_CLOSING = true;
	    }
	  };
	  iteratorWithReturn[ITERATOR$2] = function () {
	    return this;
	  };
	  // eslint-disable-next-line es/no-array-from, no-throw-literal -- required for testing
	  Array.from(iteratorWithReturn, function () { throw 2; });
	} catch (error) { /* empty */ }

	var checkCorrectnessOfIteration = function (exec, SKIP_CLOSING) {
	  if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
	  var ITERATION_SUPPORT = false;
	  try {
	    var object = {};
	    object[ITERATOR$2] = function () {
	      return {
	        next: function () {
	          return { done: ITERATION_SUPPORT = true };
	        }
	      };
	    };
	    exec(object);
	  } catch (error) { /* empty */ }
	  return ITERATION_SUPPORT;
	};

	var noop$2 = function () { /* empty */ };
	var empty = [];
	var construct$1 = getBuiltIn('Reflect', 'construct');
	var constructorRegExp = /^\s*(?:class|function)\b/;
	var exec$2 = functionUncurryThis(constructorRegExp.exec);
	var INCORRECT_TO_STRING = !constructorRegExp.exec(noop$2);

	var isConstructorModern = function isConstructor(argument) {
	  if (!isCallable(argument)) return false;
	  try {
	    construct$1(noop$2, empty, argument);
	    return true;
	  } catch (error) {
	    return false;
	  }
	};

	var isConstructorLegacy = function isConstructor(argument) {
	  if (!isCallable(argument)) return false;
	  switch (classof(argument)) {
	    case 'AsyncFunction':
	    case 'GeneratorFunction':
	    case 'AsyncGeneratorFunction': return false;
	  }
	  try {
	    // we can't check .prototype since constructors produced by .bind haven't it
	    // `Function#toString` throws on some built-it function in some legacy engines
	    // (for example, `DOMQuad` and similar in FF41-)
	    return INCORRECT_TO_STRING || !!exec$2(constructorRegExp, inspectSource(argument));
	  } catch (error) {
	    return true;
	  }
	};

	isConstructorLegacy.sham = true;

	// `IsConstructor` abstract operation
	// https://tc39.es/ecma262/#sec-isconstructor
	var isConstructor = !construct$1 || fails(function () {
	  var called;
	  return isConstructorModern(isConstructorModern.call)
	    || !isConstructorModern(Object)
	    || !isConstructorModern(function () { called = true; })
	    || called;
	}) ? isConstructorLegacy : isConstructorModern;

	var TypeError$4 = global_1.TypeError;

	// `Assert: IsConstructor(argument) is true`
	var aConstructor = function (argument) {
	  if (isConstructor(argument)) return argument;
	  throw TypeError$4(tryToString(argument) + ' is not a constructor');
	};

	var SPECIES$4 = wellKnownSymbol('species');

	// `SpeciesConstructor` abstract operation
	// https://tc39.es/ecma262/#sec-speciesconstructor
	var speciesConstructor = function (O, defaultConstructor) {
	  var C = anObject(O).constructor;
	  var S;
	  return C === undefined || (S = anObject(C)[SPECIES$4]) == undefined ? defaultConstructor : aConstructor(S);
	};

	var arraySlice = functionUncurryThis([].slice);

	var engineIsIos = /(?:ipad|iphone|ipod).*applewebkit/i.test(engineUserAgent);

	var engineIsNode = classofRaw(global_1.process) == 'process';

	var set = global_1.setImmediate;
	var clear = global_1.clearImmediate;
	var process$2 = global_1.process;
	var Dispatch = global_1.Dispatch;
	var Function$3 = global_1.Function;
	var MessageChannel = global_1.MessageChannel;
	var String$1 = global_1.String;
	var counter = 0;
	var queue$1 = {};
	var ONREADYSTATECHANGE = 'onreadystatechange';
	var location, defer, channel, port;

	try {
	  // Deno throws a ReferenceError on `location` access without `--location` flag
	  location = global_1.location;
	} catch (error) { /* empty */ }

	var run = function (id) {
	  if (hasOwnProperty_1(queue$1, id)) {
	    var fn = queue$1[id];
	    delete queue$1[id];
	    fn();
	  }
	};

	var runner = function (id) {
	  return function () {
	    run(id);
	  };
	};

	var listener = function (event) {
	  run(event.data);
	};

	var post = function (id) {
	  // old engines have not location.origin
	  global_1.postMessage(String$1(id), location.protocol + '//' + location.host);
	};

	// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
	if (!set || !clear) {
	  set = function setImmediate(fn) {
	    var args = arraySlice(arguments, 1);
	    queue$1[++counter] = function () {
	      functionApply(isCallable(fn) ? fn : Function$3(fn), undefined, args);
	    };
	    defer(counter);
	    return counter;
	  };
	  clear = function clearImmediate(id) {
	    delete queue$1[id];
	  };
	  // Node.js 0.8-
	  if (engineIsNode) {
	    defer = function (id) {
	      process$2.nextTick(runner(id));
	    };
	  // Sphere (JS game engine) Dispatch API
	  } else if (Dispatch && Dispatch.now) {
	    defer = function (id) {
	      Dispatch.now(runner(id));
	    };
	  // Browsers with MessageChannel, includes WebWorkers
	  // except iOS - https://github.com/zloirock/core-js/issues/624
	  } else if (MessageChannel && !engineIsIos) {
	    channel = new MessageChannel();
	    port = channel.port2;
	    channel.port1.onmessage = listener;
	    defer = functionBindContext(port.postMessage, port);
	  // Browsers with postMessage, skip WebWorkers
	  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
	  } else if (
	    global_1.addEventListener &&
	    isCallable(global_1.postMessage) &&
	    !global_1.importScripts &&
	    location && location.protocol !== 'file:' &&
	    !fails(post)
	  ) {
	    defer = post;
	    global_1.addEventListener('message', listener, false);
	  // IE8-
	  } else if (ONREADYSTATECHANGE in documentCreateElement('script')) {
	    defer = function (id) {
	      html.appendChild(documentCreateElement('script'))[ONREADYSTATECHANGE] = function () {
	        html.removeChild(this);
	        run(id);
	      };
	    };
	  // Rest old browsers
	  } else {
	    defer = function (id) {
	      setTimeout(runner(id), 0);
	    };
	  }
	}

	var task$1 = {
	  set: set,
	  clear: clear
	};

	var engineIsIosPebble = /ipad|iphone|ipod/i.test(engineUserAgent) && global_1.Pebble !== undefined;

	var engineIsWebosWebkit = /web0s(?!.*chrome)/i.test(engineUserAgent);

	var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;
	var macrotask = task$1.set;





	var MutationObserver = global_1.MutationObserver || global_1.WebKitMutationObserver;
	var document$2 = global_1.document;
	var process$1 = global_1.process;
	var Promise$1 = global_1.Promise;
	// Node.js 11 shows ExperimentalWarning on getting `queueMicrotask`
	var queueMicrotaskDescriptor = getOwnPropertyDescriptor(global_1, 'queueMicrotask');
	var queueMicrotask = queueMicrotaskDescriptor && queueMicrotaskDescriptor.value;

	var flush, head, last, notify$1, toggle, node, promise$3, then;

	// modern engines have queueMicrotask method
	if (!queueMicrotask) {
	  flush = function () {
	    var parent, fn;
	    if (engineIsNode && (parent = process$1.domain)) parent.exit();
	    while (head) {
	      fn = head.fn;
	      head = head.next;
	      try {
	        fn();
	      } catch (error) {
	        if (head) notify$1();
	        else last = undefined;
	        throw error;
	      }
	    } last = undefined;
	    if (parent) parent.enter();
	  };

	  // browsers with MutationObserver, except iOS - https://github.com/zloirock/core-js/issues/339
	  // also except WebOS Webkit https://github.com/zloirock/core-js/issues/898
	  if (!engineIsIos && !engineIsNode && !engineIsWebosWebkit && MutationObserver && document$2) {
	    toggle = true;
	    node = document$2.createTextNode('');
	    new MutationObserver(flush).observe(node, { characterData: true });
	    notify$1 = function () {
	      node.data = toggle = !toggle;
	    };
	  // environments with maybe non-completely correct, but existent Promise
	  } else if (!engineIsIosPebble && Promise$1 && Promise$1.resolve) {
	    // Promise.resolve without an argument throws an error in LG WebOS 2
	    promise$3 = Promise$1.resolve(undefined);
	    // workaround of WebKit ~ iOS Safari 10.1 bug
	    promise$3.constructor = Promise$1;
	    then = functionBindContext(promise$3.then, promise$3);
	    notify$1 = function () {
	      then(flush);
	    };
	  // Node.js without promises
	  } else if (engineIsNode) {
	    notify$1 = function () {
	      process$1.nextTick(flush);
	    };
	  // for other environments - macrotask based on:
	  // - setImmediate
	  // - MessageChannel
	  // - window.postMessag
	  // - onreadystatechange
	  // - setTimeout
	  } else {
	    // strange IE + webpack dev server bug - use .bind(global)
	    macrotask = functionBindContext(macrotask, global_1);
	    notify$1 = function () {
	      macrotask(flush);
	    };
	  }
	}

	var microtask = queueMicrotask || function (fn) {
	  var task = { fn: fn, next: undefined };
	  if (last) last.next = task;
	  if (!head) {
	    head = task;
	    notify$1();
	  } last = task;
	};

	var PromiseCapability = function (C) {
	  var resolve, reject;
	  this.promise = new C(function ($$resolve, $$reject) {
	    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
	    resolve = $$resolve;
	    reject = $$reject;
	  });
	  this.resolve = aCallable(resolve);
	  this.reject = aCallable(reject);
	};

	// `NewPromiseCapability` abstract operation
	// https://tc39.es/ecma262/#sec-newpromisecapability
	var f$1 = function (C) {
	  return new PromiseCapability(C);
	};

	var newPromiseCapability$1 = {
		f: f$1
	};

	var promiseResolve = function (C, x) {
	  anObject(C);
	  if (isObject(x) && x.constructor === C) return x;
	  var promiseCapability = newPromiseCapability$1.f(C);
	  var resolve = promiseCapability.resolve;
	  resolve(x);
	  return promiseCapability.promise;
	};

	var hostReportErrors = function (a, b) {
	  var console = global_1.console;
	  if (console && console.error) {
	    arguments.length == 1 ? console.error(a) : console.error(a, b);
	  }
	};

	var perform = function (exec) {
	  try {
	    return { error: false, value: exec() };
	  } catch (error) {
	    return { error: true, value: error };
	  }
	};

	var Queue = function () {
	  this.head = null;
	  this.tail = null;
	};

	Queue.prototype = {
	  add: function (item) {
	    var entry = { item: item, next: null };
	    if (this.head) this.tail.next = entry;
	    else this.head = entry;
	    this.tail = entry;
	  },
	  get: function () {
	    var entry = this.head;
	    if (entry) {
	      this.head = entry.next;
	      if (this.tail === entry) this.tail = null;
	      return entry.item;
	    }
	  }
	};

	var queue = Queue;

	var engineIsBrowser = typeof window == 'object';

	var task = task$1.set;













	var SPECIES$3 = wellKnownSymbol('species');
	var PROMISE = 'Promise';

	var getInternalState$1 = internalState.getterFor(PROMISE);
	var setInternalState$1 = internalState.set;
	var getInternalPromiseState = internalState.getterFor(PROMISE);
	var NativePromisePrototype = nativePromiseConstructor && nativePromiseConstructor.prototype;
	var PromiseConstructor = nativePromiseConstructor;
	var PromisePrototype = NativePromisePrototype;
	var TypeError$3 = global_1.TypeError;
	var document$1 = global_1.document;
	var process = global_1.process;
	var newPromiseCapability = newPromiseCapability$1.f;
	var newGenericPromiseCapability = newPromiseCapability;

	var DISPATCH_EVENT = !!(document$1 && document$1.createEvent && global_1.dispatchEvent);
	var NATIVE_REJECTION_EVENT = isCallable(global_1.PromiseRejectionEvent);
	var UNHANDLED_REJECTION = 'unhandledrejection';
	var REJECTION_HANDLED = 'rejectionhandled';
	var PENDING = 0;
	var FULFILLED = 1;
	var REJECTED = 2;
	var HANDLED = 1;
	var UNHANDLED = 2;
	var SUBCLASSING = false;

	var Internal, OwnPromiseCapability, PromiseWrapper;

	var FORCED$5 = isForced_1(PROMISE, function () {
	  var PROMISE_CONSTRUCTOR_SOURCE = inspectSource(PromiseConstructor);
	  var GLOBAL_CORE_JS_PROMISE = PROMISE_CONSTRUCTOR_SOURCE !== String(PromiseConstructor);
	  // V8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
	  // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
	  // We can't detect it synchronously, so just check versions
	  if (!GLOBAL_CORE_JS_PROMISE && engineV8Version === 66) return true;
	  // We need Promise#finally in the pure version for preventing prototype pollution
	  if (!PromisePrototype['finally']) return true;
	  // We can't use @@species feature detection in V8 since it causes
	  // deoptimization and performance degradation
	  // https://github.com/zloirock/core-js/issues/679
	  if (engineV8Version >= 51 && /native code/.test(PROMISE_CONSTRUCTOR_SOURCE)) return false;
	  // Detect correctness of subclassing with @@species support
	  var promise = new PromiseConstructor(function (resolve) { resolve(1); });
	  var FakePromise = function (exec) {
	    exec(function () { /* empty */ }, function () { /* empty */ });
	  };
	  var constructor = promise.constructor = {};
	  constructor[SPECIES$3] = FakePromise;
	  SUBCLASSING = promise.then(function () { /* empty */ }) instanceof FakePromise;
	  if (!SUBCLASSING) return true;
	  // Unhandled rejections tracking support, NodeJS Promise without it fails @@species test
	  return !GLOBAL_CORE_JS_PROMISE && engineIsBrowser && !NATIVE_REJECTION_EVENT;
	});

	var INCORRECT_ITERATION = FORCED$5 || !checkCorrectnessOfIteration(function (iterable) {
	  PromiseConstructor.all(iterable)['catch'](function () { /* empty */ });
	});

	// helpers
	var isThenable = function (it) {
	  var then;
	  return isObject(it) && isCallable(then = it.then) ? then : false;
	};

	var callReaction = function (reaction, state) {
	  var value = state.value;
	  var ok = state.state == FULFILLED;
	  var handler = ok ? reaction.ok : reaction.fail;
	  var resolve = reaction.resolve;
	  var reject = reaction.reject;
	  var domain = reaction.domain;
	  var result, then, exited;
	  try {
	    if (handler) {
	      if (!ok) {
	        if (state.rejection === UNHANDLED) onHandleUnhandled(state);
	        state.rejection = HANDLED;
	      }
	      if (handler === true) result = value;
	      else {
	        if (domain) domain.enter();
	        result = handler(value); // can throw
	        if (domain) {
	          domain.exit();
	          exited = true;
	        }
	      }
	      if (result === reaction.promise) {
	        reject(TypeError$3('Promise-chain cycle'));
	      } else if (then = isThenable(result)) {
	        functionCall(then, result, resolve, reject);
	      } else resolve(result);
	    } else reject(value);
	  } catch (error) {
	    if (domain && !exited) domain.exit();
	    reject(error);
	  }
	};

	var notify = function (state, isReject) {
	  if (state.notified) return;
	  state.notified = true;
	  microtask(function () {
	    var reactions = state.reactions;
	    var reaction;
	    while (reaction = reactions.get()) {
	      callReaction(reaction, state);
	    }
	    state.notified = false;
	    if (isReject && !state.rejection) onUnhandled(state);
	  });
	};

	var dispatchEvent = function (name, promise, reason) {
	  var event, handler;
	  if (DISPATCH_EVENT) {
	    event = document$1.createEvent('Event');
	    event.promise = promise;
	    event.reason = reason;
	    event.initEvent(name, false, true);
	    global_1.dispatchEvent(event);
	  } else event = { promise: promise, reason: reason };
	  if (!NATIVE_REJECTION_EVENT && (handler = global_1['on' + name])) handler(event);
	  else if (name === UNHANDLED_REJECTION) hostReportErrors('Unhandled promise rejection', reason);
	};

	var onUnhandled = function (state) {
	  functionCall(task, global_1, function () {
	    var promise = state.facade;
	    var value = state.value;
	    var IS_UNHANDLED = isUnhandled(state);
	    var result;
	    if (IS_UNHANDLED) {
	      result = perform(function () {
	        if (engineIsNode) {
	          process.emit('unhandledRejection', value, promise);
	        } else dispatchEvent(UNHANDLED_REJECTION, promise, value);
	      });
	      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
	      state.rejection = engineIsNode || isUnhandled(state) ? UNHANDLED : HANDLED;
	      if (result.error) throw result.value;
	    }
	  });
	};

	var isUnhandled = function (state) {
	  return state.rejection !== HANDLED && !state.parent;
	};

	var onHandleUnhandled = function (state) {
	  functionCall(task, global_1, function () {
	    var promise = state.facade;
	    if (engineIsNode) {
	      process.emit('rejectionHandled', promise);
	    } else dispatchEvent(REJECTION_HANDLED, promise, state.value);
	  });
	};

	var bind$4 = function (fn, state, unwrap) {
	  return function (value) {
	    fn(state, value, unwrap);
	  };
	};

	var internalReject = function (state, value, unwrap) {
	  if (state.done) return;
	  state.done = true;
	  if (unwrap) state = unwrap;
	  state.value = value;
	  state.state = REJECTED;
	  notify(state, true);
	};

	var internalResolve = function (state, value, unwrap) {
	  if (state.done) return;
	  state.done = true;
	  if (unwrap) state = unwrap;
	  try {
	    if (state.facade === value) throw TypeError$3("Promise can't be resolved itself");
	    var then = isThenable(value);
	    if (then) {
	      microtask(function () {
	        var wrapper = { done: false };
	        try {
	          functionCall(then, value,
	            bind$4(internalResolve, wrapper, state),
	            bind$4(internalReject, wrapper, state)
	          );
	        } catch (error) {
	          internalReject(wrapper, error, state);
	        }
	      });
	    } else {
	      state.value = value;
	      state.state = FULFILLED;
	      notify(state, false);
	    }
	  } catch (error) {
	    internalReject({ done: false }, error, state);
	  }
	};

	// constructor polyfill
	if (FORCED$5) {
	  // 25.4.3.1 Promise(executor)
	  PromiseConstructor = function Promise(executor) {
	    anInstance(this, PromisePrototype);
	    aCallable(executor);
	    functionCall(Internal, this);
	    var state = getInternalState$1(this);
	    try {
	      executor(bind$4(internalResolve, state), bind$4(internalReject, state));
	    } catch (error) {
	      internalReject(state, error);
	    }
	  };
	  PromisePrototype = PromiseConstructor.prototype;
	  // eslint-disable-next-line no-unused-vars -- required for `.length`
	  Internal = function Promise(executor) {
	    setInternalState$1(this, {
	      type: PROMISE,
	      done: false,
	      notified: false,
	      parent: false,
	      reactions: new queue(),
	      rejection: false,
	      state: PENDING,
	      value: undefined
	    });
	  };
	  Internal.prototype = redefineAll(PromisePrototype, {
	    // `Promise.prototype.then` method
	    // https://tc39.es/ecma262/#sec-promise.prototype.then
	    // eslint-disable-next-line unicorn/no-thenable -- safe
	    then: function then(onFulfilled, onRejected) {
	      var state = getInternalPromiseState(this);
	      var reaction = newPromiseCapability(speciesConstructor(this, PromiseConstructor));
	      state.parent = true;
	      reaction.ok = isCallable(onFulfilled) ? onFulfilled : true;
	      reaction.fail = isCallable(onRejected) && onRejected;
	      reaction.domain = engineIsNode ? process.domain : undefined;
	      if (state.state == PENDING) state.reactions.add(reaction);
	      else microtask(function () {
	        callReaction(reaction, state);
	      });
	      return reaction.promise;
	    },
	    // `Promise.prototype.catch` method
	    // https://tc39.es/ecma262/#sec-promise.prototype.catch
	    'catch': function (onRejected) {
	      return this.then(undefined, onRejected);
	    }
	  });
	  OwnPromiseCapability = function () {
	    var promise = new Internal();
	    var state = getInternalState$1(promise);
	    this.promise = promise;
	    this.resolve = bind$4(internalResolve, state);
	    this.reject = bind$4(internalReject, state);
	  };
	  newPromiseCapability$1.f = newPromiseCapability = function (C) {
	    return C === PromiseConstructor || C === PromiseWrapper
	      ? new OwnPromiseCapability(C)
	      : newGenericPromiseCapability(C);
	  };
	}

	_export({ global: true, wrap: true, forced: FORCED$5 }, {
	  Promise: PromiseConstructor
	});

	setToStringTag(PromiseConstructor, PROMISE, false, true);
	setSpecies(PROMISE);

	PromiseWrapper = getBuiltIn(PROMISE);

	// statics
	_export({ target: PROMISE, stat: true, forced: FORCED$5 }, {
	  // `Promise.reject` method
	  // https://tc39.es/ecma262/#sec-promise.reject
	  reject: function reject(r) {
	    var capability = newPromiseCapability(this);
	    functionCall(capability.reject, undefined, r);
	    return capability.promise;
	  }
	});

	_export({ target: PROMISE, stat: true, forced: isPure  }, {
	  // `Promise.resolve` method
	  // https://tc39.es/ecma262/#sec-promise.resolve
	  resolve: function resolve(x) {
	    return promiseResolve(this === PromiseWrapper ? PromiseConstructor : this, x);
	  }
	});

	_export({ target: PROMISE, stat: true, forced: INCORRECT_ITERATION }, {
	  // `Promise.all` method
	  // https://tc39.es/ecma262/#sec-promise.all
	  all: function all(iterable) {
	    var C = this;
	    var capability = newPromiseCapability(C);
	    var resolve = capability.resolve;
	    var reject = capability.reject;
	    var result = perform(function () {
	      var $promiseResolve = aCallable(C.resolve);
	      var values = [];
	      var counter = 0;
	      var remaining = 1;
	      iterate(iterable, function (promise) {
	        var index = counter++;
	        var alreadyCalled = false;
	        remaining++;
	        functionCall($promiseResolve, C, promise).then(function (value) {
	          if (alreadyCalled) return;
	          alreadyCalled = true;
	          values[index] = value;
	          --remaining || resolve(values);
	        }, reject);
	      });
	      --remaining || resolve(values);
	    });
	    if (result.error) reject(result.value);
	    return capability.promise;
	  },
	  // `Promise.race` method
	  // https://tc39.es/ecma262/#sec-promise.race
	  race: function race(iterable) {
	    var C = this;
	    var capability = newPromiseCapability(C);
	    var reject = capability.reject;
	    var result = perform(function () {
	      var $promiseResolve = aCallable(C.resolve);
	      iterate(iterable, function (promise) {
	        functionCall($promiseResolve, C, promise).then(capability.resolve, reject);
	      });
	    });
	    if (result.error) reject(result.value);
	    return capability.promise;
	  }
	});

	// `Promise.allSettled` method
	// https://tc39.es/ecma262/#sec-promise.allsettled
	_export({ target: 'Promise', stat: true }, {
	  allSettled: function allSettled(iterable) {
	    var C = this;
	    var capability = newPromiseCapability$1.f(C);
	    var resolve = capability.resolve;
	    var reject = capability.reject;
	    var result = perform(function () {
	      var promiseResolve = aCallable(C.resolve);
	      var values = [];
	      var counter = 0;
	      var remaining = 1;
	      iterate(iterable, function (promise) {
	        var index = counter++;
	        var alreadyCalled = false;
	        remaining++;
	        functionCall(promiseResolve, C, promise).then(function (value) {
	          if (alreadyCalled) return;
	          alreadyCalled = true;
	          values[index] = { status: 'fulfilled', value: value };
	          --remaining || resolve(values);
	        }, function (error) {
	          if (alreadyCalled) return;
	          alreadyCalled = true;
	          values[index] = { status: 'rejected', reason: error };
	          --remaining || resolve(values);
	        });
	      });
	      --remaining || resolve(values);
	    });
	    if (result.error) reject(result.value);
	    return capability.promise;
	  }
	});

	var PROMISE_ANY_ERROR = 'No one promise resolved';

	// `Promise.any` method
	// https://tc39.es/ecma262/#sec-promise.any
	_export({ target: 'Promise', stat: true }, {
	  any: function any(iterable) {
	    var C = this;
	    var AggregateError = getBuiltIn('AggregateError');
	    var capability = newPromiseCapability$1.f(C);
	    var resolve = capability.resolve;
	    var reject = capability.reject;
	    var result = perform(function () {
	      var promiseResolve = aCallable(C.resolve);
	      var errors = [];
	      var counter = 0;
	      var remaining = 1;
	      var alreadyResolved = false;
	      iterate(iterable, function (promise) {
	        var index = counter++;
	        var alreadyRejected = false;
	        remaining++;
	        functionCall(promiseResolve, C, promise).then(function (value) {
	          if (alreadyRejected || alreadyResolved) return;
	          alreadyResolved = true;
	          resolve(value);
	        }, function (error) {
	          if (alreadyRejected || alreadyResolved) return;
	          alreadyRejected = true;
	          errors[index] = error;
	          --remaining || reject(new AggregateError(errors, PROMISE_ANY_ERROR));
	        });
	      });
	      --remaining || reject(new AggregateError(errors, PROMISE_ANY_ERROR));
	    });
	    if (result.error) reject(result.value);
	    return capability.promise;
	  }
	});

	// Safari bug https://bugs.webkit.org/show_bug.cgi?id=200829
	var NON_GENERIC = !!nativePromiseConstructor && fails(function () {
	  // eslint-disable-next-line unicorn/no-thenable -- required for testing
	  nativePromiseConstructor.prototype['finally'].call({ then: function () { /* empty */ } }, function () { /* empty */ });
	});

	// `Promise.prototype.finally` method
	// https://tc39.es/ecma262/#sec-promise.prototype.finally
	_export({ target: 'Promise', proto: true, real: true, forced: NON_GENERIC }, {
	  'finally': function (onFinally) {
	    var C = speciesConstructor(this, getBuiltIn('Promise'));
	    var isFunction = isCallable(onFinally);
	    return this.then(
	      isFunction ? function (x) {
	        return promiseResolve(C, onFinally()).then(function () { return x; });
	      } : onFinally,
	      isFunction ? function (e) {
	        return promiseResolve(C, onFinally()).then(function () { throw e; });
	      } : onFinally
	    );
	  }
	});

	var charAt$3 = functionUncurryThis(''.charAt);
	var charCodeAt$1 = functionUncurryThis(''.charCodeAt);
	var stringSlice = functionUncurryThis(''.slice);

	var createMethod$3 = function (CONVERT_TO_STRING) {
	  return function ($this, pos) {
	    var S = toString_1(requireObjectCoercible($this));
	    var position = toIntegerOrInfinity(pos);
	    var size = S.length;
	    var first, second;
	    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
	    first = charCodeAt$1(S, position);
	    return first < 0xD800 || first > 0xDBFF || position + 1 === size
	      || (second = charCodeAt$1(S, position + 1)) < 0xDC00 || second > 0xDFFF
	        ? CONVERT_TO_STRING
	          ? charAt$3(S, position)
	          : first
	        : CONVERT_TO_STRING
	          ? stringSlice(S, position, position + 2)
	          : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
	  };
	};

	var stringMultibyte = {
	  // `String.prototype.codePointAt` method
	  // https://tc39.es/ecma262/#sec-string.prototype.codepointat
	  codeAt: createMethod$3(false),
	  // `String.prototype.at` method
	  // https://github.com/mathiasbynens/String.prototype.at
	  charAt: createMethod$3(true)
	};

	var charAt$2 = stringMultibyte.charAt;




	var STRING_ITERATOR = 'String Iterator';
	var setInternalState = internalState.set;
	var getInternalState = internalState.getterFor(STRING_ITERATOR);

	// `String.prototype[@@iterator]` method
	// https://tc39.es/ecma262/#sec-string.prototype-@@iterator
	defineIterator(String, 'String', function (iterated) {
	  setInternalState(this, {
	    type: STRING_ITERATOR,
	    string: toString_1(iterated),
	    index: 0
	  });
	// `%StringIteratorPrototype%.next` method
	// https://tc39.es/ecma262/#sec-%stringiteratorprototype%.next
	}, function next() {
	  var state = getInternalState(this);
	  var string = state.string;
	  var index = state.index;
	  var point;
	  if (index >= string.length) return { value: undefined, done: true };
	  point = charAt$2(string, index);
	  state.index += point.length;
	  return { value: point, done: false };
	});

	var promise$2 = path.Promise;

	// iterable DOM collections
	// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
	var domIterables = {
	  CSSRuleList: 0,
	  CSSStyleDeclaration: 0,
	  CSSValueList: 0,
	  ClientRectList: 0,
	  DOMRectList: 0,
	  DOMStringList: 0,
	  DOMTokenList: 1,
	  DataTransferItemList: 0,
	  FileList: 0,
	  HTMLAllCollection: 0,
	  HTMLCollection: 0,
	  HTMLFormElement: 0,
	  HTMLSelectElement: 0,
	  MediaList: 0,
	  MimeTypeArray: 0,
	  NamedNodeMap: 0,
	  NodeList: 1,
	  PaintRequestList: 0,
	  Plugin: 0,
	  PluginArray: 0,
	  SVGLengthList: 0,
	  SVGNumberList: 0,
	  SVGPathSegList: 0,
	  SVGPointList: 0,
	  SVGStringList: 0,
	  SVGTransformList: 0,
	  SourceBufferList: 0,
	  StyleSheetList: 0,
	  TextTrackCueList: 0,
	  TextTrackList: 0,
	  TouchList: 0
	};

	var TO_STRING_TAG = wellKnownSymbol('toStringTag');

	for (var COLLECTION_NAME in domIterables) {
	  var Collection = global_1[COLLECTION_NAME];
	  var CollectionPrototype = Collection && Collection.prototype;
	  if (CollectionPrototype && classof(CollectionPrototype) !== TO_STRING_TAG) {
	    createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
	  }
	  iterators[COLLECTION_NAME] = iterators.Array;
	}

	var promise$1 = promise$2;

	var promise = promise$1;

	class EventCoordinator {
	    
	    addEventListener(event, listener) {
	        const listeners = this.listeners[event] || [];
	        listeners.push(listener);
	        this.listeners[event] = listeners;
	        return this;
	    }
	    removeEventListener(event, listener) {
	        this.listeners[event] = (this.listeners[event] || []).filter(l => l !== listener);
	        return this;
	    }
	    addEventInterceptor(event, interceptor) {
	        this.interceptors[event] = interceptor;
	        return this;
	    }
	    removeEventInterceptor(event) {
	        delete this.interceptors[event];
	        return this;
	    }
	    coordinate(event, value) {
	        const interceptor = this.interceptors[event] || (() => Promise.resolve(value));
	        const listeners = this.listeners[event] || [];
	        return Promise.resolve()
	            .then(() => interceptor.call(null, value))
	            .then(result => {
	            listeners.forEach(listener => {
	                listener.call(null, result);
	            });
	            return result;
	        });
	    }
	}

	var Brand;
	(function (Brand) {
	    Brand["abc"] = "abc";
	    Brand["abcNews"] = "abcnews";
	    Brand["abcNewsLive"] = "abcnewslive";
	    Brand["abcOtv"] = "abcotv";
	    Brand["cricinfo"] = "cricinfo";
	    Brand["disney"] = "dch";
	    Brand["disneyJr"] = "djr";
	    Brand["disneyXD"] = "dxd";
	    Brand["disneyNow"] = "dnow";
	    Brand["espn"] = "espn";
	    Brand["espnFantasy"] = "espnFantasy";
	    Brand["fiveThirtyEight"] = "fivethirtyeight";
	    Brand["foxLatam"] = "foxlatam";
	    Brand["freeform"] = "ff";
	    Brand["fxNow"] = "fxnow";
	    Brand["fx"] = "fx";
	    Brand["fxm"] = "fxm";
	    Brand["fxx"] = "fxx";
	    Brand["oscar"] = "oscar";
	    Brand["marvel"] = "marvel";
	    Brand["natGeoTV"] = "ngtv";
	    Brand["natGeo"] = "ngc";
	    Brand["natGeoWild"] = "ngw";
	    Brand["natgeoBrasil"] = "natgeobrasil";
	    Brand["theUndefeated"] = "theundefeated";
	    Brand["fast"] = "fast";
	    Brand["unknown"] = "000";
	})(Brand || (Brand = {}));
	function getBrandNames(brand) {
	    switch (brand) {
	        case Brand.abc:
	            return 'ABC';
	        case Brand.abcNews:
	            return 'ABC News';
	        case Brand.abcNewsLive:
	            return 'ABC News Live';
	        case Brand.abcOtv:
	            return 'ABC OTV';
	        case Brand.cricinfo:
	            return 'ESPNcricinfo';
	        case Brand.disney:
	            return 'Disney';
	        case Brand.disneyJr:
	            return 'Disney Junior';
	        case Brand.disneyXD:
	            return 'Disney XD';
	        case Brand.disneyNow:
	            return 'DisneyNow';
	        case Brand.espn:
	            return 'ESPN';
	        case Brand.espnFantasy:
	            return 'ESPN Fantasy';
	        case Brand.fiveThirtyEight:
	            return 'FiveThirtyEight';
	        case Brand.foxLatam:
	            return 'Fox Latam';
	        case Brand.freeform:
	            return 'Freeform';
	        case Brand.fxNow:
	            return 'FX Now';
	        case Brand.fx:
	            return 'FX Networks';
	        case Brand.fxm:
	            return 'FX Movie Channel';
	        case Brand.fxx:
	            return 'FXX';
	        case Brand.oscar:
	            return 'Oscar';
	        case Brand.marvel:
	            return 'Marvel';
	        case Brand.natGeoTV:
	            return 'National Geographic TV ';
	        case Brand.natGeo:
	            return 'National Geographic Chanel';
	        case Brand.natGeoWild:
	            return 'National Geographic Wild';
	        case Brand.theUndefeated:
	            return 'The Undefeated';
	        case Brand.fast:
	            return 'Fast';
	        case Brand.unknown:
	            return Brand.unknown;
	    }
	}
	function brandLegacyId(brand) {
	    switch (brand) {
	        case Brand.abc:
	            return '001';
	        case Brand.freeform:
	            return '002';
	        case Brand.abcNews:
	            return '003';
	        case Brand.disney:
	            return '004';
	        case Brand.disneyJr:
	            return '008';
	        case Brand.disneyXD:
	            return '009';
	        case Brand.disneyNow:
	            return '011';
	        case Brand.oscar:
	            return '005';
	        case Brand.fxNow:
	            return '025';
	        case Brand.fx:
	            return '020';
	        case Brand.fxm:
	            return '022';
	        case Brand.fxx:
	            return '021';
	        case Brand.natGeoTV:
	            return '026';
	        case Brand.natGeo:
	            return '023';
	        case Brand.natGeoWild:
	            return '024';
	        case Brand.fast:
	            return '200';
	        case Brand.unknown:
	            return Brand.unknown;
	    }
	}
	function brandResourceId(brand) {
	    switch (brand) {
	        case Brand.abc:
	            return 'ABC';
	        case Brand.freeform:
	            return 'ABCFamily';
	        case Brand.abcNews:
	            return 'ABC';
	        case Brand.disney:
	            return 'Disney';
	        case Brand.disneyJr:
	            return 'DisneyJunior';
	        case Brand.disneyXD:
	            return 'DisneyXD';
	        case Brand.disneyNow:
	            return 'DisneyNow';
	        case Brand.oscar:
	            return 'ABC';
	        case Brand.fxNow:
	            return 'fxNow';
	        case Brand.fx:
	            return 'fx';
	        case Brand.fxm:
	            return 'fxm';
	        case Brand.fxx:
	            return 'fxx';
	        case Brand.natGeoTV:
	            return 'ngtv';
	        case Brand.natGeo:
	            return 'ngc';
	        case Brand.natGeoWild:
	            return 'ngw';
	        case Brand.fast:
	            return 'fast';
	        case Brand.unknown:
	            return Brand.unknown;
	    }
	}
	function getBrandFromString(value) {
	    switch (value) {
	        case 'abc':
	        case '001':
	            return Brand.abc;
	        case 'abcf':
	        case '002':
	        case 'abcfamily':
	        case 'ff':
	        case 'ABCFamily':
	            return Brand.freeform;
	        case 'abcn':
	        case '003':
	        case 'abcnews':
	            return Brand.abcNews;
	        case 'dch':
	        case 'dc':
	        case 'dis':
	        case '004':
	        case 'disney':
	            return Brand.disney;
	        case 'djr':
	        case '008':
	        case 'disneyjunior':
	            return Brand.disneyJr;
	        case 'dxd':
	        case '009':
	        case 'disneyxd':
	            return Brand.disneyXD;
	        case '005':
	        case 'oscar':
	            return Brand.oscar;
	        case 'dnow':
	        case '011':
	        case 'disneynow':
	        case 'dnw':
	        case 'Dnow':
	            return Brand.disneyNow;
	        case 'fx':
	        case '020':
	        case 'FX':
	            return Brand.fx;
	        case 'fxm':
	        case '022':
	        case 'FXM':
	            return Brand.fxm;
	        case 'fxx':
	        case '021':
	        case 'FXX':
	            return Brand.fxx;
	        case 'fxnow':
	        case '025':
	        case 'FXnow':
	        case 'FXNow':
	            return Brand.fxNow;
	        case 'natgeo':
	        case '023':
	        case 'NatGeo':
	        case 'ngc':
	            return Brand.natGeo;
	        case 'natgeowild':
	        case '024':
	        case 'NatGeoWild':
	        case 'ngw':
	            return Brand.natGeoWild;
	        case 'natgeotv':
	        case '026':
	        case 'NatGeoTV':
	            return Brand.natGeoTV;
	        case 'fast':
	        case '200':
	            return Brand.fast;
	        default:
	            return Brand.unknown;
	    }
	}

	var StorageType;
	(function (StorageType) {
	    StorageType["localStorage"] = "LOCAL_STORAGE";
	    StorageType["sessionStorage"] = "SESSION_STORAGE";
	})(StorageType || (StorageType = {}));

	class AuthenticatedProvider {
	    constructor(id, name, logoUrl, websiteUrl) {
	        this.id = id;
	        this.name = name;
	        this.logoUrl = logoUrl;
	        this.websiteUrl = websiteUrl;
	    }
	    toString() {
	        return `<AuthenticatedProvider id:${this.id}, name:${this.name}, logoUrl:${this.logoUrl}, websiteUrl:${this.websiteUrl}>`;
	    }
	    static fromObject(json) {
	        return new AuthenticatedProvider(json.id, json.name, json.logoUrl, json.websiteUrl);
	    }
	}

	var CustomDataKey;
	(function (CustomDataKey) {
	    CustomDataKey["token"] = "token";
	    CustomDataKey["tokenType"] = "tokenType";
	    CustomDataKey["resource"] = "resource";
	    CustomDataKey["requestor"] = "requestor";
	    CustomDataKey["fullToken"] = "fullToken";
	    CustomDataKey["zipcode"] = "zipcode";
	    CustomDataKey["mvpd"] = "mvpd";
	})(CustomDataKey || (CustomDataKey = {}));
	class AuthorizationPayload {
	    constructor(authenticationType, authenticatedProvider, authenticatedIdentity, customData = {}) {
	        this.authenticationType = authenticationType;
	        this.authenticatedProvider = authenticatedProvider;
	        this.authenticatedIdentity = authenticatedIdentity;
	        this.customData = customData;
	    }
	}
	AuthorizationPayload.CustomDataKey = CustomDataKey;

	class AuthorizationResult {
	    constructor(success, payload) {
	        this.success = success;
	        this.payload = payload;
	    }
	}

	var AdProvider$1;
	(function (AdProvider) {
	    AdProvider["standard"] = "default";
	    AdProvider["googleAdManager"] = "gam";
	})(AdProvider$1 || (AdProvider$1 = {}));

	var AdEnvironment;
	(function (AdEnvironment) {
	    AdEnvironment["standard"] = "default";
	    AdEnvironment["prod"] = "prod";
	    AdEnvironment["development"] = "dev";
	})(AdEnvironment || (AdEnvironment = {}));

	/*! *****************************************************************************
	Copyright (c) Microsoft Corporation.

	Permission to use, copy, modify, and/or distribute this software for any
	purpose with or without fee is hereby granted.

	THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
	REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
	AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
	INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
	LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
	OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
	PERFORMANCE OF THIS SOFTWARE.
	***************************************************************************** */

	function __awaiter(thisArg, _arguments, P, generator) {
	    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
	    return new (P || (P = Promise))(function (resolve, reject) {
	        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
	        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
	        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
	        step((generator = generator.apply(thisArg, _arguments || [])).next());
	    });
	}

	const EVT_LOAD = 'load';
	const EVT_ERROR = 'error';
	const LOAD_TIMEOUT = 4000;
	function loadScript$1(url, timeout = LOAD_TIMEOUT) {
	    const win = typeof window !== 'undefined' && window;
	    const doc = win && win.document;
	    const docHead = doc && doc.getElementsByTagName && doc.getElementsByTagName('head')[0];
	    const docBody = doc && doc.body;
	    const docTarget = docHead || docBody;
	    if (!(docTarget && url)) {
	        return Promise.reject();
	    }
	    return new Promise(function injectScript(resolve, reject) {
	        const script = document.createElement('script');
	        let disposers = [];
	        let loadTimeout = null;
	        const dispose = () => {
	            disposers.forEach(disposer => disposer());
	            disposers = null;
	            clearTimeout(loadTimeout);
	            loadTimeout = null;
	        };
	        const onLoad = function disposeAndResolve(evt) {
	            dispose();
	            resolve(evt);
	        };
	        const onError = function disposeAndReject(err) {
	            dispose();
	            reject(err);
	        };
	        script.type = 'text/javascript';
	        script.src = url;
	        script.addEventListener(EVT_LOAD, onLoad);
	        disposers.push(() => script.removeEventListener(EVT_LOAD, onLoad));
	        script.addEventListener(EVT_ERROR, onError);
	        disposers.push(() => script.removeEventListener(EVT_ERROR, onError));
	        loadTimeout = setTimeout(() => onError(new Error(`Timeout (${timeout}) while fetching ${url}`)), LOAD_TIMEOUT);
	        docTarget.appendChild(script);
	    });
	}

	const NO_PAL_FALLBACK = Object.freeze({});
	const EMPTY_STR$2 = Object.freeze('');
	const DEFAULT_PLAYER_SIZE = '640x480';
	const PAL_LOADER_SRC = 'https://imasdk.googleapis.com/pal/sdkloader/pal.js';
	const VIDEO_DELIVERY_METHOD_LIVE = 'vod';
	const win = typeof window !== 'undefined' && window;
	const logError = function (err) {
	    win && win.console && win.console.error(err);
	};
	let palSdkInstance;
	let nonceLoader;
	let cachedNonce;
	const loadPalDependencies = function embedPalLoader() {
	    return __awaiter(this, void 0, void 0, function* () {
	        let pal = palSdkInstance || (win.goog && win.goog.pal);
	        const hadBC = win && win.bc;
	        if (!pal) {
	            try {
	                yield loadScript$1(PAL_LOADER_SRC);
	            }
	            catch (err) {
	                logError(err);
	            }
	            pal = win.goog && win.goog.pal;
	            if (pal) {
	                palSdkInstance = pal;
	            }
	            if (!hadBC && win.bc) {
	                win.bc = null;
	            }
	        }
	        return pal || NO_PAL_FALLBACK;
	    });
	};
	function mapAdvertisingInfoToGoogleNonceRequestData(advertisingInfo) {
	    const [videoWidth, videoHeight] = String(advertisingInfo.videoPlayerSize || DEFAULT_PLAYER_SIZE).split('x');
	    return {
	        adWillAutoPlay: advertisingInfo.isAutoplay,
	        adWillPlayMuted: advertisingInfo.isMute,
	        continuousPlayback: advertisingInfo.videoDeliveryMethod === VIDEO_DELIVERY_METHOD_LIVE,
	        descriptionUrl: advertisingInfo.descriptionUrl || EMPTY_STR$2,
	        iconsSupported: advertisingInfo.vastIconsSupported,
	        playerType: advertisingInfo.videoPlayerType || EMPTY_STR$2,
	        playerVersion: advertisingInfo.videoPlayerVersion || EMPTY_STR$2,
	        ppid: advertisingInfo.ppid || advertisingInfo.swid || EMPTY_STR$2,
	        videoHeight: parseInt(videoHeight, 10),
	        videoWidth: parseInt(videoWidth, 10),
	    };
	}
	function generateNonce(advertisingInfo, maxLength = 3000, reinstantiateLoader = false, useSessionNonce = true, dependencyLoader = loadPalDependencies) {
	    return __awaiter(this, void 0, void 0, function* () {
	        let nonce = (useSessionNonce && cachedNonce) || EMPTY_STR$2;
	        if (!nonce) {
	            let NonceLoader, NonceRequest, ConsentSettings;
	            try {
	                const palSdk = yield dependencyLoader();
	                if (palSdk) {
	                    NonceLoader = palSdk.NonceLoader;
	                    NonceRequest = palSdk.NonceRequest;
	                    ConsentSettings = palSdk.ConsentSettings;
	                }
	            }
	            catch (err) {
	                logError(err);
	            }
	            if (!(useSessionNonce && cachedNonce) && NonceLoader && NonceRequest) {
	                let nonceManager;
	                try {
	                    const { storageConsent = false } = advertisingInfo;
	                    const consentSettings = new ConsentSettings();
	                    consentSettings.allowStorage = storageConsent;
	                    nonceLoader = !nonceLoader || reinstantiateLoader ? new NonceLoader(consentSettings) : nonceLoader;
	                    const nonceRequest = Object.assign(new NonceRequest(), mapAdvertisingInfoToGoogleNonceRequestData(advertisingInfo));
	                    nonceManager = yield nonceLoader.loadNonceManager(nonceRequest);
	                }
	                catch (err) {
	                    logError(err);
	                }
	                if (nonceManager) {
	                    nonce = yield nonceManager.getNonce();
	                    if (!nonce || (Number(maxLength) > 0 && String(nonce).length > maxLength)) {
	                        nonce = EMPTY_STR$2;
	                    }
	                    if (nonce) {
	                        cachedNonce = nonce;
	                    }
	                }
	            }
	        }
	        return nonce;
	    });
	}

	const optionalInt = (val) => {
	    if (val === null) {
	        return null;
	    }
	    return val ? '1' : '0';
	};
	const optionalBool = (first, second) => {
	    if (first !== null && first !== undefined) {
	        return first;
	    }
	    return second;
	};
	class AdvertisingInfo {
	    constructor(aff = null, alt = null, accessLevel = null, adRule = null, an = 'espn', beacType = null, collection = null, cbp = null, descriptionUrl = null, edition = null, fcap = null, hashedIp = null, hl = null, isAuth = null, idType = null, impl = null, isLat = false, iu = null, msid = null, npa = false, ltd = false, nlsnPlat = null, output = null, palNonce = null, storageConsent = false, playlist = null, ppid = null, rdid = null, tags = null, transId = null, tfcd = false, url = null, varResolution = null, vpa = null, vpi = null, vadFormat = null, vpmute = null, authenticationProvider = null, bundleId = null, deviceOS = null, deviceType = null, isAutoplay = null, isMute = null, language = null, nielsenAppId = null, nielsenDeviceGroup = null, noAds = null, objectId = null, pageType = null, platform = null, stitchingProvider = null, swid = null, testAdTargeting = null, tag = null, unid = null, vastIconsSupported = false, videoDeliveryMethod = null, videoPlayerSize = null, videoPlayerType = null, videoPlayerVersion = null, userInfo = {}, isDoNotTrackEnabled = null, pp = null, cmsid = null, vid = null, adEnvironment = AdEnvironment.standard, adProvider = AdProvider$1.standard, usPrivacy = null, additionalConsent = null, rdp = null) {
	        this.aff = aff;
	        this.alt = alt;
	        this.accessLevel = accessLevel;
	        this.adRule = adRule;
	        this.an = an;
	        this.beacType = beacType;
	        this.collection = collection;
	        this.cbp = cbp;
	        this.descriptionUrl = descriptionUrl;
	        this.edition = edition;
	        this.fcap = fcap;
	        this.hashedIp = hashedIp;
	        this.hl = hl;
	        this.isAuth = isAuth;
	        this.idType = idType;
	        this.impl = impl;
	        this.isLat = isLat;
	        this.iu = iu;
	        this.msid = msid;
	        this.npa = npa;
	        this.ltd = ltd;
	        this.nlsnPlat = nlsnPlat;
	        this.output = output;
	        this.palNonce = palNonce;
	        this.storageConsent = storageConsent;
	        this.playlist = playlist;
	        this.ppid = ppid;
	        this.rdid = rdid;
	        this.tags = tags;
	        this.transId = transId;
	        this.tfcd = tfcd;
	        this.url = url;
	        this.varResolution = varResolution;
	        this.vpa = vpa;
	        this.vpi = vpi;
	        this.vadFormat = vadFormat;
	        this.vpmute = vpmute;
	        this.authenticationProvider = authenticationProvider;
	        this.bundleId = bundleId;
	        this.deviceOS = deviceOS;
	        this.deviceType = deviceType;
	        this.isAutoplay = isAutoplay;
	        this.isMute = isMute;
	        this.language = language;
	        this.nielsenAppId = nielsenAppId;
	        this.nielsenDeviceGroup = nielsenDeviceGroup;
	        this.noAds = noAds;
	        this.objectId = objectId;
	        this.pageType = pageType;
	        this.platform = platform;
	        this.stitchingProvider = stitchingProvider;
	        this.swid = swid;
	        this.testAdTargeting = testAdTargeting;
	        this.tag = tag;
	        this.unid = unid;
	        this.vastIconsSupported = vastIconsSupported;
	        this.videoDeliveryMethod = videoDeliveryMethod;
	        this.videoPlayerSize = videoPlayerSize;
	        this.videoPlayerType = videoPlayerType;
	        this.videoPlayerVersion = videoPlayerVersion;
	        this.userInfo = userInfo;
	        this.isDoNotTrackEnabled = isDoNotTrackEnabled;
	        this.pp = pp;
	        this.cmsid = cmsid;
	        this.vid = vid;
	        this.adEnvironment = adEnvironment;
	        this.adProvider = adProvider;
	        this.usPrivacy = usPrivacy;
	        this.additionalConsent = additionalConsent;
	        this.rdp = rdp;
	    }
	    merge(other) {
	        if (!other) {
	            return this;
	        }
	        this.adRule = other.adRule || this.adRule;
	        this.an = other.an || this.an;
	        this.descriptionUrl = other.descriptionUrl || this.descriptionUrl;
	        this.fcap = other.fcap || this.fcap;
	        this.hashedIp = other.hashedIp || this.hashedIp;
	        this.hl = other.hl || this.hl;
	        this.idType = other.idType || this.idType;
	        this.isLat = optionalBool(other.isLat, this.isLat);
	        this.iu = other.iu || this.iu;
	        this.msid = other.msid || this.msid;
	        this.npa = optionalBool(other.npa, this.npa);
	        this.ltd = optionalBool(other.ltd, this.ltd);
	        this.output = other.output || this.output;
	        this.ppid = other.ppid || this.ppid;
	        this.rdid = other.rdid || this.rdid;
	        this.rdp = other.rdp || this.rdp;
	        this.tfcd = other.tfcd || this.tfcd;
	        this.url = other.url || this.url;
	        this.vpa = other.vpa || this.vpa;
	        this.vpi = other.vpi || this.vpi;
	        this.vadFormat = other.vadFormat || this.vadFormat;
	        this.vpmute = optionalBool(other.vpmute, this.vpmute);
	        this.authenticationProvider = other.authenticationProvider || this.authenticationProvider;
	        this.bundleId = other.bundleId || this.bundleId;
	        this.deviceOS = other.deviceOS || this.deviceOS;
	        this.deviceType = other.deviceType || this.deviceType;
	        this.isAutoplay = optionalBool(other.isAutoplay, this.isAutoplay);
	        this.isMute = optionalBool(other.isMute, this.isMute);
	        this.language = other.language || this.language;
	        this.palNonce = other.palNonce || this.palNonce;
	        this.storageConsent = other.storageConsent || this.storageConsent;
	        this.nielsenAppId = other.nielsenAppId || this.nielsenAppId;
	        this.nielsenDeviceGroup = other.nielsenDeviceGroup || this.nielsenDeviceGroup;
	        this.noAds = optionalBool(other.noAds, this.noAds);
	        this.objectId = other.objectId || this.objectId;
	        this.platform = other.platform || this.platform;
	        this.stitchingProvider = other.stitchingProvider || this.stitchingProvider;
	        this.swid = other.swid || this.swid;
	        this.tags = other.tags || this.tags;
	        this.testAdTargeting = other.testAdTargeting || this.testAdTargeting;
	        this.unid = other.unid || this.unid;
	        this.alt = other.alt || this.alt;
	        this.beacType = other.beacType || this.beacType;
	        this.transId = other.transId || this.transId;
	        this.accessLevel = other.accessLevel || this.accessLevel;
	        this.varResolution = other.varResolution || this.varResolution;
	        this.nlsnPlat = other.nlsnPlat || this.nlsnPlat;
	        this.tag = other.tag || this.tag;
	        this.aff = other.aff || this.aff;
	        this.playlist = other.playlist || this.playlist;
	        this.cbp = other.cbp || this.cbp;
	        this.collection = other.collection || this.collection;
	        this.impl = other.impl || this.impl;
	        this.isAuth = other.isAuth || this.isAuth;
	        this.pageType = other.pageType || this.pageType;
	        this.vastIconsSupported = optionalBool(other.vastIconsSupported, this.vastIconsSupported);
	        this.videoDeliveryMethod = other.videoDeliveryMethod || this.videoDeliveryMethod;
	        this.videoPlayerSize = other.videoPlayerSize || this.videoPlayerSize;
	        this.videoPlayerType = other.videoPlayerType || this.videoPlayerType;
	        this.videoPlayerVersion = other.videoPlayerVersion || this.videoPlayerVersion;
	        this.isDoNotTrackEnabled = optionalBool(other.isDoNotTrackEnabled, this.isDoNotTrackEnabled);
	        this.pp = other.pp || this.pp;
	        this.cmsid = other.cmsid || this.cmsid;
	        this.usPrivacy = other.usPrivacy || this.usPrivacy;
	        this.additionalConsent = other.additionalConsent || this.additionalConsent;
	        this.vid = other.vid || this.vid;
	        if (!this.userInfo) {
	            this.userInfo = other.userInfo;
	        }
	        else {
	            Object.assign(this.userInfo, other.userInfo);
	        }
	        this.adEnvironment = other.adEnvironment !== AdEnvironment.standard ? other.adEnvironment : this.adEnvironment;
	        this.adProvider = other.adProvider !== AdProvider$1.standard ? other.adProvider : this.adProvider;
	        return this;
	    }
	    dictionaryForStartSession() {
	        const info = {};
	        info['ad.tfcd'] = optionalInt(this.tfcd);
	        info['ad.is_lat'] = optionalInt(this.isLat);
	        info['ad.idtype'] = this.idType;
	        info['ad.rdid'] = this.rdid;
	        info['ad.ppid'] = this.ppid || this.swid;
	        info['ad.description_url'] = this.descriptionUrl;
	        info['ad.hl'] = this.hl;
	        info['ad.paln'] = this.palNonce;
	        info['ad.npa'] = optionalInt(this.npa);
	        info['ad.ltd'] = optionalInt(this.ltd);
	        info['ad.msid'] = this.msid;
	        info['ad.an'] = this.an;
	        info['ad.url'] = this.url;
	        info['ad.us_privacy'] = this.usPrivacy;
	        info['ad.cust_params.d_us_privacy'] = this.usPrivacy;
	        info['ad.rdp'] = this.rdp !== null ? this.rdp : this.usPrivacy === '1YYY' ? '1' : null;
	        info.authp = this.authenticationProvider;
	        info.bundleId = this.bundleId;
	        info.devOS = this.deviceOS;
	        info.devType = this.deviceType;
	        info.fcap = this.fcap;
	        info.isAutoplay = optionalInt(this.isAutoplay);
	        info.isMute = optionalInt(this.isMute);
	        info.nlsnAppID = this.nielsenAppId;
	        info.plt = this.platform;
	        info.swid = this.swid;
	        info.unid = this.unid;
	        info.vps = this.videoPlayerSize;
	        if (this.adEnvironment !== AdEnvironment.standard) {
	            info.adEnv = this.adEnvironment;
	        }
	        if (this.adProvider !== AdProvider$1.standard) {
	            info.adProvider = this.adProvider;
	        }
	        Object.assign(info, this.userInfo);
	        Object.keys(info).forEach(key => info[key] === null && delete info[key]);
	        return info;
	    }
	    dictionaryForBrightcove() {
	        const customParams = {};
	        customParams.bundleId = this.bundleId;
	        customParams.devOS = this.deviceOS;
	        customParams.devType = this.deviceType;
	        customParams.isAutoplay = optionalInt(this.isAutoplay);
	        customParams.isMute = optionalInt(this.isMute);
	        customParams.plt = this.platform;
	        customParams.swid = this.swid;
	        customParams.vps = this.videoPlayerSize;
	        customParams.d_id = this.rdid;
	        customParams.vdm = this.videoDeliveryMethod || 'vod';
	        customParams.stp = this.stitchingProvider || 'brightcove';
	        const customParamsString = Object.keys(customParams)
	            .filter(key => customParams[key] !== null)
	            .map(key => `${key}=${customParams[key]}`)
	            .join('&');
	        const info = {};
	        info.UMADPARAMiu = this.iu;
	        info.UMADPARAMis_lat = optionalInt(this.isLat);
	        info.UMADPARAMidtype = this.idType;
	        info.UMADPARAMrdid = this.rdid;
	        info.UMADPARAMppid = this.ppid || this.swid;
	        info.UMADPARAMdescription_url = this.descriptionUrl;
	        info.UMADPARAMhl = this.hl;
	        info.UMADPARAMnpa = optionalInt(this.npa);
	        info.UMADPARAMltd = optionalInt(this.ltd);
	        info.UMADPARAMmsid = this.msid;
	        info.UMADPARAMan = this.an;
	        info.UMADPARAMurl = this.url;
	        info.UMADPARAMvpa = optionalInt(this.vpa);
	        info.UMADPARAMvpmute = optionalInt(this.vpmute);
	        info.UMPTPARAMcust_params = customParamsString;
	        Object.assign(info, this.userInfo);
	        Object.keys(info).forEach(key => info[key] === null && delete info[key]);
	        return info;
	    }
	    dictionaryForAdEngine() {
	        const info = {};
	        info.sect = this.iu;
	        info.npa = optionalInt(this.npa);
	        info.ltd = optionalInt(this.ltd);
	        info.lat = optionalInt(this.isLat);
	        info.idtype = this.idType;
	        info.devId = this.rdid;
	        info.ppid = this.ppid || this.swid;
	        info.app = this.an;
	        info.tfcd = optionalInt(this.tfcd);
	        info.devOS = this.deviceOS;
	        info.devType = this.deviceType;
	        info.isAutoplay = optionalInt(this.isAutoplay);
	        info.isMute = optionalInt(this.isMute);
	        info.plt = this.platform;
	        info.swid = this.swid;
	        info.unid = this.unid;
	        info.vps = this.videoPlayerSize;
	        info.bundle = this.msid;
	        info.hl = this.hl;
	        info.UID = this.swid;
	        info.vdm = this.videoDeliveryMethod;
	        info.url = this.url;
	        switch (this.adEnvironment) {
	            case AdEnvironment.development:
	                info.env = 'qa';
	                break;
	            case AdEnvironment.prod:
	                info.env = 'prod';
	                break;
	            case AdEnvironment.standard:
	        }
	        switch (this.adProvider) {
	            case AdProvider$1.googleAdManager:
	                info.ads = 'google';
	                break;
	            case AdProvider$1.standard:
	        }
	        Object.assign(info, this.userInfo);
	        Object.keys(info).forEach(key => info[key] === null && delete info[key]);
	        return info;
	    }
	    dictionaryForImaSdk() {
	        const customParams = {};
	        customParams.authp = this.authenticationProvider;
	        customParams.d_us_privacy = this.usPrivacy;
	        customParams.devOS = this.deviceOS;
	        customParams.devType = this.deviceType;
	        customParams.ed = this.edition;
	        customParams.hip = this.hashedIp;
	        customParams.isAutoplay = optionalInt(this.isAutoplay);
	        customParams.isDnt = optionalInt(this.isDoNotTrackEnabled);
	        customParams.isMute = optionalInt(this.isMute);
	        customParams.lang = this.language;
	        customParams.nlsnAppID = this.nielsenAppId;
	        customParams.nlsnDevGrp = this.nielsenDeviceGroup;
	        customParams.noad = this.noAds;
	        customParams.objid = this.objectId;
	        customParams.plt = this.platform;
	        customParams.pgtyp = this.pageType;
	        customParams.swid = this.swid;
	        customParams.tag = this.tags;
	        customParams.tstAdTar = this.testAdTargeting;
	        customParams.unid = this.unid;
	        customParams.vdm = this.videoDeliveryMethod || 'vod';
	        customParams.vps = this.videoPlayerSize;
	        const customParamsString = Object.keys(customParams)
	            .filter(key => customParams[key] !== null)
	            .map(key => `${key}=${customParams[key]}`)
	            .join('&');
	        const info = {};
	        info.ad_rule = this.adRule;
	        info.cmsid = this.cmsid;
	        info.description_url = this.descriptionUrl;
	        info.hl = this.hl;
	        info.iu = this.iu;
	        info.npa = optionalInt(this.npa);
	        info.output = this.output;
	        info.ltd = optionalInt(this.ltd);
	        info.pp = this.pp;
	        info.ppid = this.ppid;
	        info.rdp = this.rdp;
	        info.tfcd = optionalInt(this.tfcd);
	        info.us_privacy = this.usPrivacy;
	        info.addtl_consent = this.additionalConsent;
	        info.vid = this.vid;
	        info.vpa = optionalInt(this.vpa);
	        info.cust_params = customParamsString;
	        info.gdfp_req = '1';
	        info.env = 'vp';
	        info.sz = '640x480';
	        if (this.adEnvironment !== AdEnvironment.standard) {
	            info.adEnv = this.adEnvironment;
	        }
	        Object.keys(info).forEach(key => info[key] === null && delete info[key]);
	        return info;
	    }
	    dictionaryForEntertainment() {
	        const customParams = {};
	        customParams.ed = this.edition;
	        customParams.devOS = this.deviceOS;
	        customParams.devType = this.deviceType;
	        customParams.hip = this.hashedIp;
	        customParams.isAutoplay = optionalInt(this.isAutoplay);
	        customParams.isDnt = optionalInt(this.isDoNotTrackEnabled);
	        customParams.isMute = optionalInt(this.isMute);
	        customParams.lang = this.language;
	        customParams.nlsnAppID = this.nielsenAppId;
	        customParams.nlsnDevGrp = this.nielsenDeviceGroup;
	        customParams.nlsnPlat = this.nlsnPlat;
	        customParams.noad = this.noAds;
	        customParams.objid = this.objectId;
	        customParams.pgtyp = this.pageType;
	        customParams.plt = this.platform;
	        customParams.swid = this.swid || this.ppid;
	        customParams.tag = this.tags;
	        customParams.tstAdTar = this.testAdTargeting;
	        customParams.unid = this.unid;
	        customParams.vdm = this.videoDeliveryMethod || 'vod';
	        customParams.vps = this.videoPlayerSize;
	        customParams.alt = this.alt;
	        customParams.beacType = this.beacType;
	        customParams.transId = this.transId;
	        customParams.accesslevel = this.accessLevel;
	        customParams.isAuth = this.isAuth;
	        customParams.fcap = this.fcap;
	        customParams.var = this.varResolution;
	        customParams.tag = this.tag;
	        customParams.aff = this.aff;
	        customParams.authp = this.authenticationProvider;
	        customParams.playlist = this.playlist;
	        customParams.cbp = this.cbp;
	        customParams.collection = this.collection;
	        customParams.impl = this.impl;
	        const customParamsString = Object.keys(customParams)
	            .filter(key => customParams[key] !== null)
	            .map(key => `${key}=${customParams[key]}`)
	            .join('&');
	        const info = {};
	        info.addtl_consent = this.additionalConsent;
	        info.ad_rule = this.adRule;
	        info.cmsid = this.cmsid;
	        info.description_url = this.descriptionUrl;
	        info.hl = this.hl;
	        info.iu = this.iu;
	        info.npa = optionalInt(this.npa);
	        info.output = this.output;
	        info.ltd = optionalInt(this.ltd);
	        info.pp = this.pp;
	        info.ppid = this.ppid;
	        info.tfcd = optionalInt(this.tfcd);
	        info.vid = this.vid;
	        info.vpa = optionalInt(this.vpa);
	        info.cust_params = customParamsString;
	        info.output = this.output;
	        info.vad_format = this.vadFormat;
	        info.vpi = this.vpi;
	        info.url = this.url;
	        info.us_privacy = this.usPrivacy;
	        info.gdfp_req = '1';
	        info.env = 'vp';
	        info.sz = '640x480';
	        Object.keys(info).forEach(key => info[key] === null && delete info[key]);
	        return info;
	    }
	    static ppidForSwid(swid) {
	        return swid;
	    }
	}
	AdvertisingInfo.getGooglePalNonce = generateNonce;

	// `IsArray` abstract operation
	// https://tc39.es/ecma262/#sec-isarray
	// eslint-disable-next-line es/no-array-isarray -- safe
	var isArray$4 = Array.isArray || function isArray(argument) {
	  return classofRaw(argument) == 'Array';
	};

	var SPECIES$2 = wellKnownSymbol('species');
	var Array$4 = global_1.Array;

	// a part of `ArraySpeciesCreate` abstract operation
	// https://tc39.es/ecma262/#sec-arrayspeciescreate
	var arraySpeciesConstructor = function (originalArray) {
	  var C;
	  if (isArray$4(originalArray)) {
	    C = originalArray.constructor;
	    // cross-realm fallback
	    if (isConstructor(C) && (C === Array$4 || isArray$4(C.prototype))) C = undefined;
	    else if (isObject(C)) {
	      C = C[SPECIES$2];
	      if (C === null) C = undefined;
	    }
	  } return C === undefined ? Array$4 : C;
	};

	// `ArraySpeciesCreate` abstract operation
	// https://tc39.es/ecma262/#sec-arrayspeciescreate
	var arraySpeciesCreate = function (originalArray, length) {
	  return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);
	};

	var push$2 = functionUncurryThis([].push);

	// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterReject }` methods implementation
	var createMethod$2 = function (TYPE) {
	  var IS_MAP = TYPE == 1;
	  var IS_FILTER = TYPE == 2;
	  var IS_SOME = TYPE == 3;
	  var IS_EVERY = TYPE == 4;
	  var IS_FIND_INDEX = TYPE == 6;
	  var IS_FILTER_REJECT = TYPE == 7;
	  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
	  return function ($this, callbackfn, that, specificCreate) {
	    var O = toObject($this);
	    var self = indexedObject(O);
	    var boundFunction = functionBindContext(callbackfn, that);
	    var length = lengthOfArrayLike(self);
	    var index = 0;
	    var create = specificCreate || arraySpeciesCreate;
	    var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_REJECT ? create($this, 0) : undefined;
	    var value, result;
	    for (;length > index; index++) if (NO_HOLES || index in self) {
	      value = self[index];
	      result = boundFunction(value, index, O);
	      if (TYPE) {
	        if (IS_MAP) target[index] = result; // map
	        else if (result) switch (TYPE) {
	          case 3: return true;              // some
	          case 5: return value;             // find
	          case 6: return index;             // findIndex
	          case 2: push$2(target, value);      // filter
	        } else switch (TYPE) {
	          case 4: return false;             // every
	          case 7: push$2(target, value);      // filterReject
	        }
	      }
	    }
	    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
	  };
	};

	var arrayIteration = {
	  // `Array.prototype.forEach` method
	  // https://tc39.es/ecma262/#sec-array.prototype.foreach
	  forEach: createMethod$2(0),
	  // `Array.prototype.map` method
	  // https://tc39.es/ecma262/#sec-array.prototype.map
	  map: createMethod$2(1),
	  // `Array.prototype.filter` method
	  // https://tc39.es/ecma262/#sec-array.prototype.filter
	  filter: createMethod$2(2),
	  // `Array.prototype.some` method
	  // https://tc39.es/ecma262/#sec-array.prototype.some
	  some: createMethod$2(3),
	  // `Array.prototype.every` method
	  // https://tc39.es/ecma262/#sec-array.prototype.every
	  every: createMethod$2(4),
	  // `Array.prototype.find` method
	  // https://tc39.es/ecma262/#sec-array.prototype.find
	  find: createMethod$2(5),
	  // `Array.prototype.findIndex` method
	  // https://tc39.es/ecma262/#sec-array.prototype.findIndex
	  findIndex: createMethod$2(6),
	  // `Array.prototype.filterReject` method
	  // https://github.com/tc39/proposal-array-filtering
	  filterReject: createMethod$2(7)
	};

	var SPECIES$1 = wellKnownSymbol('species');

	var arrayMethodHasSpeciesSupport = function (METHOD_NAME) {
	  // We can't use this feature detection in V8 since it causes
	  // deoptimization and serious performance degradation
	  // https://github.com/zloirock/core-js/issues/677
	  return engineV8Version >= 51 || !fails(function () {
	    var array = [];
	    var constructor = array.constructor = {};
	    constructor[SPECIES$1] = function () {
	      return { foo: 1 };
	    };
	    return array[METHOD_NAME](Boolean).foo !== 1;
	  });
	};

	var $map = arrayIteration.map;


	var HAS_SPECIES_SUPPORT$3 = arrayMethodHasSpeciesSupport('map');

	// `Array.prototype.map` method
	// https://tc39.es/ecma262/#sec-array.prototype.map
	// with adding support of @@species
	_export({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT$3 }, {
	  map: function map(callbackfn /* , thisArg */) {
	    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

	var entryVirtual = function (CONSTRUCTOR) {
	  return path[CONSTRUCTOR + 'Prototype'];
	};

	var map$3 = entryVirtual('Array').map;

	var ArrayPrototype$7 = Array.prototype;

	var map$2 = function (it) {
	  var own = it.map;
	  return it === ArrayPrototype$7 || (objectIsPrototypeOf(ArrayPrototype$7, it) && own === ArrayPrototype$7.map) ? map$3 : own;
	};

	var map$1 = map$2;

	var map = map$1;

	/* jshint strict: false */
	const loadScript = {
	  url: url => {
	    return new promise((resolve, reject) => {
	      const script = document.createElement('script');
	      script.type = 'text/javascript';
	      script.src = url;
	      script.addEventListener('load', () => resolve(script), false);
	      script.addEventListener('error', () => reject(script), false);
	      document.body.appendChild(script);
	    });
	  },
	  urls: urls => {
	    return promise.allSettled(map(urls).call(urls, loadScript.url));
	  }
	};

	var Function$2 = global_1.Function;
	var concat$4 = functionUncurryThis([].concat);
	var join = functionUncurryThis([].join);
	var factories = {};

	var construct = function (C, argsLength, args) {
	  if (!hasOwnProperty_1(factories, argsLength)) {
	    for (var list = [], i = 0; i < argsLength; i++) list[i] = 'a[' + i + ']';
	    factories[argsLength] = Function$2('C,a', 'return new C(' + join(list, ',') + ')');
	  } return factories[argsLength](C, args);
	};

	// `Function.prototype.bind` method implementation
	// https://tc39.es/ecma262/#sec-function.prototype.bind
	var functionBind = functionBindNative ? Function$2.bind : function bind(that /* , ...args */) {
	  var F = aCallable(this);
	  var Prototype = F.prototype;
	  var partArgs = arraySlice(arguments, 1);
	  var boundFunction = function bound(/* args... */) {
	    var args = concat$4(partArgs, arraySlice(arguments));
	    return this instanceof boundFunction ? construct(F, args.length, args) : F.apply(that, args);
	  };
	  if (isObject(Prototype)) boundFunction.prototype = Prototype;
	  return boundFunction;
	};

	// `Function.prototype.bind` method
	// https://tc39.es/ecma262/#sec-function.prototype.bind
	_export({ target: 'Function', proto: true, forced: Function.bind !== functionBind }, {
	  bind: functionBind
	});

	var bind$3 = entryVirtual('Function').bind;

	var FunctionPrototype = Function.prototype;

	var bind$2 = function (it) {
	  var own = it.bind;
	  return it === FunctionPrototype || (objectIsPrototypeOf(FunctionPrototype, it) && own === FunctionPrototype.bind) ? bind$3 : own;
	};

	var bind$1 = bind$2;

	var bind = bind$1;

	// `Array.isArray` method
	// https://tc39.es/ecma262/#sec-array.isarray
	_export({ target: 'Array', stat: true }, {
	  isArray: isArray$4
	});

	var isArray$3 = path.Array.isArray;

	var isArray$2 = isArray$3;

	var isArray$1 = isArray$2;

	var createProperty = function (object, key, value) {
	  var propertyKey = toPropertyKey(key);
	  if (propertyKey in object) objectDefineProperty.f(object, propertyKey, createPropertyDescriptor(0, value));
	  else object[propertyKey] = value;
	};

	var Array$3 = global_1.Array;
	var max$2 = Math.max;

	var arraySliceSimple = function (O, start, end) {
	  var length = lengthOfArrayLike(O);
	  var k = toAbsoluteIndex(start, length);
	  var fin = toAbsoluteIndex(end === undefined ? length : end, length);
	  var result = Array$3(max$2(fin - k, 0));
	  for (var n = 0; k < fin; k++, n++) createProperty(result, n, O[k]);
	  result.length = n;
	  return result;
	};

	var floor = Math.floor;

	var mergeSort = function (array, comparefn) {
	  var length = array.length;
	  var middle = floor(length / 2);
	  return length < 8 ? insertionSort(array, comparefn) : merge(
	    array,
	    mergeSort(arraySliceSimple(array, 0, middle), comparefn),
	    mergeSort(arraySliceSimple(array, middle), comparefn),
	    comparefn
	  );
	};

	var insertionSort = function (array, comparefn) {
	  var length = array.length;
	  var i = 1;
	  var element, j;

	  while (i < length) {
	    j = i;
	    element = array[i];
	    while (j && comparefn(array[j - 1], element) > 0) {
	      array[j] = array[--j];
	    }
	    if (j !== i++) array[j] = element;
	  } return array;
	};

	var merge = function (array, left, right, comparefn) {
	  var llength = left.length;
	  var rlength = right.length;
	  var lindex = 0;
	  var rindex = 0;

	  while (lindex < llength || rindex < rlength) {
	    array[lindex + rindex] = (lindex < llength && rindex < rlength)
	      ? comparefn(left[lindex], right[rindex]) <= 0 ? left[lindex++] : right[rindex++]
	      : lindex < llength ? left[lindex++] : right[rindex++];
	  } return array;
	};

	var arraySort = mergeSort;

	var arrayMethodIsStrict = function (METHOD_NAME, argument) {
	  var method = [][METHOD_NAME];
	  return !!method && fails(function () {
	    // eslint-disable-next-line no-useless-call,no-throw-literal -- required for testing
	    method.call(null, argument || function () { throw 1; }, 1);
	  });
	};

	var firefox = engineUserAgent.match(/firefox\/(\d+)/i);

	var engineFfVersion = !!firefox && +firefox[1];

	var engineIsIeOrEdge = /MSIE|Trident/.test(engineUserAgent);

	var webkit = engineUserAgent.match(/AppleWebKit\/(\d+)\./);

	var engineWebkitVersion = !!webkit && +webkit[1];

	var test = [];
	var un$Sort = functionUncurryThis(test.sort);
	var push$1 = functionUncurryThis(test.push);

	// IE8-
	var FAILS_ON_UNDEFINED = fails(function () {
	  test.sort(undefined);
	});
	// V8 bug
	var FAILS_ON_NULL = fails(function () {
	  test.sort(null);
	});
	// Old WebKit
	var STRICT_METHOD$2 = arrayMethodIsStrict('sort');

	var STABLE_SORT = !fails(function () {
	  // feature detection can be too slow, so check engines versions
	  if (engineV8Version) return engineV8Version < 70;
	  if (engineFfVersion && engineFfVersion > 3) return;
	  if (engineIsIeOrEdge) return true;
	  if (engineWebkitVersion) return engineWebkitVersion < 603;

	  var result = '';
	  var code, chr, value, index;

	  // generate an array with more 512 elements (Chakra and old V8 fails only in this case)
	  for (code = 65; code < 76; code++) {
	    chr = String.fromCharCode(code);

	    switch (code) {
	      case 66: case 69: case 70: case 72: value = 3; break;
	      case 68: case 71: value = 4; break;
	      default: value = 2;
	    }

	    for (index = 0; index < 47; index++) {
	      test.push({ k: chr + index, v: value });
	    }
	  }

	  test.sort(function (a, b) { return b.v - a.v; });

	  for (index = 0; index < test.length; index++) {
	    chr = test[index].k.charAt(0);
	    if (result.charAt(result.length - 1) !== chr) result += chr;
	  }

	  return result !== 'DGBEFHACIJK';
	});

	var FORCED$4 = FAILS_ON_UNDEFINED || !FAILS_ON_NULL || !STRICT_METHOD$2 || !STABLE_SORT;

	var getSortCompare = function (comparefn) {
	  return function (x, y) {
	    if (y === undefined) return -1;
	    if (x === undefined) return 1;
	    if (comparefn !== undefined) return +comparefn(x, y) || 0;
	    return toString_1(x) > toString_1(y) ? 1 : -1;
	  };
	};

	// `Array.prototype.sort` method
	// https://tc39.es/ecma262/#sec-array.prototype.sort
	_export({ target: 'Array', proto: true, forced: FORCED$4 }, {
	  sort: function sort(comparefn) {
	    if (comparefn !== undefined) aCallable(comparefn);

	    var array = toObject(this);

	    if (STABLE_SORT) return comparefn === undefined ? un$Sort(array) : un$Sort(array, comparefn);

	    var items = [];
	    var arrayLength = lengthOfArrayLike(array);
	    var itemsLength, index;

	    for (index = 0; index < arrayLength; index++) {
	      if (index in array) push$1(items, array[index]);
	    }

	    arraySort(items, getSortCompare(comparefn));

	    itemsLength = items.length;
	    index = 0;

	    while (index < itemsLength) array[index] = items[index++];
	    while (index < arrayLength) delete array[index++];

	    return array;
	  }
	});

	var sort$3 = entryVirtual('Array').sort;

	var ArrayPrototype$6 = Array.prototype;

	var sort$2 = function (it) {
	  var own = it.sort;
	  return it === ArrayPrototype$6 || (objectIsPrototypeOf(ArrayPrototype$6, it) && own === ArrayPrototype$6.sort) ? sort$3 : own;
	};

	var sort$1 = sort$2;

	var sort = sort$1;

	// a string of all valid unicode whitespaces
	var whitespaces = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002' +
	  '\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

	var replace$1 = functionUncurryThis(''.replace);
	var whitespace = '[' + whitespaces + ']';
	var ltrim = RegExp('^' + whitespace + whitespace + '*');
	var rtrim = RegExp(whitespace + whitespace + '*$');

	// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
	var createMethod$1 = function (TYPE) {
	  return function ($this) {
	    var string = toString_1(requireObjectCoercible($this));
	    if (TYPE & 1) string = replace$1(string, ltrim, '');
	    if (TYPE & 2) string = replace$1(string, rtrim, '');
	    return string;
	  };
	};

	var stringTrim = {
	  // `String.prototype.{ trimLeft, trimStart }` methods
	  // https://tc39.es/ecma262/#sec-string.prototype.trimstart
	  start: createMethod$1(1),
	  // `String.prototype.{ trimRight, trimEnd }` methods
	  // https://tc39.es/ecma262/#sec-string.prototype.trimend
	  end: createMethod$1(2),
	  // `String.prototype.trim` method
	  // https://tc39.es/ecma262/#sec-string.prototype.trim
	  trim: createMethod$1(3)
	};

	var trim$5 = stringTrim.trim;


	var charAt$1 = functionUncurryThis(''.charAt);
	var n$ParseFloat = global_1.parseFloat;
	var Symbol$3 = global_1.Symbol;
	var ITERATOR$1 = Symbol$3 && Symbol$3.iterator;
	var FORCED$3 = 1 / n$ParseFloat(whitespaces + '-0') !== -Infinity
	  // MS Edge 18- broken with boxed symbols
	  || (ITERATOR$1 && !fails(function () { n$ParseFloat(Object(ITERATOR$1)); }));

	// `parseFloat` method
	// https://tc39.es/ecma262/#sec-parsefloat-string
	var numberParseFloat = FORCED$3 ? function parseFloat(string) {
	  var trimmedString = trim$5(toString_1(string));
	  var result = n$ParseFloat(trimmedString);
	  return result === 0 && charAt$1(trimmedString, 0) == '-' ? -0 : result;
	} : n$ParseFloat;

	// `parseFloat` method
	// https://tc39.es/ecma262/#sec-parsefloat-string
	_export({ global: true, forced: parseFloat != numberParseFloat }, {
	  parseFloat: numberParseFloat
	});

	var _parseFloat$2 = path.parseFloat;

	var _parseFloat$1 = _parseFloat$2;

	var _parseFloat = _parseFloat$1;

	var MSIE = /MSIE .\./.test(engineUserAgent); // <- dirty ie9- check
	var Function$1 = global_1.Function;

	var wrap = function (scheduler) {
	  return function (handler, timeout /* , ...arguments */) {
	    var boundArgs = arguments.length > 2;
	    var args = boundArgs ? arraySlice(arguments, 2) : undefined;
	    return scheduler(boundArgs ? function () {
	      functionApply(isCallable(handler) ? handler : Function$1(handler), this, args);
	    } : handler, timeout);
	  };
	};

	// ie9- setTimeout & setInterval additional parameters fix
	// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers
	_export({ global: true, bind: true, forced: MSIE }, {
	  // `setTimeout` method
	  // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-settimeout
	  setTimeout: wrap(global_1.setTimeout),
	  // `setInterval` method
	  // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-setinterval
	  setInterval: wrap(global_1.setInterval)
	});

	var setTimeout$2 = path.setTimeout;

	var setTimeout$1 = setTimeout$2;

	var Date$1 = global_1.Date;
	var getTime = functionUncurryThis(Date$1.prototype.getTime);

	// `Date.now` method
	// https://tc39.es/ecma262/#sec-date.now
	_export({ target: 'Date', stat: true }, {
	  now: function now() {
	    return getTime(new Date$1());
	  }
	});

	var now$2 = path.Date.now;

	var now$1 = now$2;

	var now = now$1;

	/* eslint-disable es/no-array-prototype-indexof -- required for testing */


	var $IndexOf = arrayIncludes.indexOf;


	var un$IndexOf = functionUncurryThis([].indexOf);

	var NEGATIVE_ZERO = !!un$IndexOf && 1 / un$IndexOf([1], 1, -0) < 0;
	var STRICT_METHOD$1 = arrayMethodIsStrict('indexOf');

	// `Array.prototype.indexOf` method
	// https://tc39.es/ecma262/#sec-array.prototype.indexof
	_export({ target: 'Array', proto: true, forced: NEGATIVE_ZERO || !STRICT_METHOD$1 }, {
	  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
	    var fromIndex = arguments.length > 1 ? arguments[1] : undefined;
	    return NEGATIVE_ZERO
	      // convert -0 to +0
	      ? un$IndexOf(this, searchElement, fromIndex) || 0
	      : $IndexOf(this, searchElement, fromIndex);
	  }
	});

	var indexOf$3 = entryVirtual('Array').indexOf;

	var ArrayPrototype$5 = Array.prototype;

	var indexOf$2 = function (it) {
	  var own = it.indexOf;
	  return it === ArrayPrototype$5 || (objectIsPrototypeOf(ArrayPrototype$5, it) && own === ArrayPrototype$5.indexOf) ? indexOf$3 : own;
	};

	var indexOf$1 = indexOf$2;

	var indexOf = indexOf$1;

	var $forEach = arrayIteration.forEach;


	var STRICT_METHOD = arrayMethodIsStrict('forEach');

	// `Array.prototype.forEach` method implementation
	// https://tc39.es/ecma262/#sec-array.prototype.foreach
	var arrayForEach = !STRICT_METHOD ? function forEach(callbackfn /* , thisArg */) {
	  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	// eslint-disable-next-line es/no-array-prototype-foreach -- safe
	} : [].forEach;

	// `Array.prototype.forEach` method
	// https://tc39.es/ecma262/#sec-array.prototype.foreach
	// eslint-disable-next-line es/no-array-prototype-foreach -- safe
	_export({ target: 'Array', proto: true, forced: [].forEach != arrayForEach }, {
	  forEach: arrayForEach
	});

	var forEach$3 = entryVirtual('Array').forEach;

	var forEach$2 = forEach$3;

	var ArrayPrototype$4 = Array.prototype;

	var DOMIterables = {
	  DOMTokenList: true,
	  NodeList: true
	};

	var forEach$1 = function (it) {
	  var own = it.forEach;
	  return it === ArrayPrototype$4 || (objectIsPrototypeOf(ArrayPrototype$4, it) && own === ArrayPrototype$4.forEach)
	    || hasOwnProperty_1(DOMIterables, classof(it)) ? forEach$2 : own;
	};

	var forEach = forEach$1;

	function debounce$1(fn, delay = 0) {
	  let timeoutId;
	  return (...args) => {
	    clearTimeout(timeoutId);
	    timeoutId = setTimeout$1(() => fn.apply(this, ...args), delay);
	  };
	}

	var HAS_SPECIES_SUPPORT$2 = arrayMethodHasSpeciesSupport('slice');

	var SPECIES = wellKnownSymbol('species');
	var Array$2 = global_1.Array;
	var max$1 = Math.max;

	// `Array.prototype.slice` method
	// https://tc39.es/ecma262/#sec-array.prototype.slice
	// fallback for not array-like ES3 strings and DOM objects
	_export({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT$2 }, {
	  slice: function slice(start, end) {
	    var O = toIndexedObject(this);
	    var length = lengthOfArrayLike(O);
	    var k = toAbsoluteIndex(start, length);
	    var fin = toAbsoluteIndex(end === undefined ? length : end, length);
	    // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible
	    var Constructor, result, n;
	    if (isArray$4(O)) {
	      Constructor = O.constructor;
	      // cross-realm fallback
	      if (isConstructor(Constructor) && (Constructor === Array$2 || isArray$4(Constructor.prototype))) {
	        Constructor = undefined;
	      } else if (isObject(Constructor)) {
	        Constructor = Constructor[SPECIES];
	        if (Constructor === null) Constructor = undefined;
	      }
	      if (Constructor === Array$2 || Constructor === undefined) {
	        return arraySlice(O, k, fin);
	      }
	    }
	    result = new (Constructor === undefined ? Array$2 : Constructor)(max$1(fin - k, 0));
	    for (n = 0; k < fin; k++, n++) if (k in O) createProperty(result, n, O[k]);
	    result.length = n;
	    return result;
	  }
	});

	var slice$3 = entryVirtual('Array').slice;

	var ArrayPrototype$3 = Array.prototype;

	var slice$2 = function (it) {
	  var own = it.slice;
	  return it === ArrayPrototype$3 || (objectIsPrototypeOf(ArrayPrototype$3, it) && own === ArrayPrototype$3.slice) ? slice$3 : own;
	};

	var slice$1 = slice$2;

	var slice = slice$1;

	var MediaItemMediaCommand;
	(function (MediaItemMediaCommand) {
	    MediaItemMediaCommand[MediaItemMediaCommand["all"] = 0] = "all";
	    MediaItemMediaCommand[MediaItemMediaCommand["linearPlayback"] = 1] = "linearPlayback";
	})(MediaItemMediaCommand || (MediaItemMediaCommand = {}));
	var MediaItemMediaCommand$1 = MediaItemMediaCommand;

	var MediaItemNetworkType;
	(function (MediaItemNetworkType) {
	    MediaItemNetworkType["linear"] = "linear";
	    MediaItemNetworkType["event"] = "event";
	})(MediaItemNetworkType || (MediaItemNetworkType = {}));
	var MediaItemNetworkType$1 = MediaItemNetworkType;

	var MediaItemSourceVariant;
	(function (MediaItemSourceVariant) {
	    MediaItemSourceVariant["stitchedPreroll"] = "stitchedPreroll";
	})(MediaItemSourceVariant || (MediaItemSourceVariant = {}));
	var MediaItemSourceVariant$1 = MediaItemSourceVariant;

	var MediaItemStreamType;
	(function (MediaItemStreamType) {
	    MediaItemStreamType["live"] = "live";
	    MediaItemStreamType["onDemand"] = "onDemand";
	})(MediaItemStreamType || (MediaItemStreamType = {}));
	var MediaItemStreamType$1 = MediaItemStreamType;

	var MediaItemTrackingType;
	(function (MediaItemTrackingType) {
	    MediaItemTrackingType["nielsen"] = "nielsen";
	    MediaItemTrackingType["comscore"] = "comscore";
	    MediaItemTrackingType["conviva"] = "conviva";
	    MediaItemTrackingType["heartbeats"] = "heartbeats";
	})(MediaItemTrackingType || (MediaItemTrackingType = {}));
	var MediaItemTrackingType$1 = MediaItemTrackingType;

	var MediaItemEntityType;
	(function (MediaItemEntityType) {
	    MediaItemEntityType["shortform"] = "shortform";
	    MediaItemEntityType["longform"] = "longform";
	})(MediaItemEntityType || (MediaItemEntityType = {}));
	var MediaItemEntityType$1 = MediaItemEntityType;

	var MediaItemType;
	(function (MediaItemType) {
	    MediaItemType["audio"] = "audio";
	    MediaItemType["video"] = "video";
	})(MediaItemType || (MediaItemType = {}));
	var MediaItemType$1 = MediaItemType;

	var ApiSource;
	(function (ApiSource) {
	    ApiSource["pluto"] = "pluto";
	    ApiSource["graphQL"] = "graphQL";
	    ApiSource["cfa"] = "cfa";
	    ApiSource["itemFeed"] = "itemFeed";
	})(ApiSource || (ApiSource = {}));
	var ApiSource$1 = ApiSource;

	var MediaItemAuthenticationType;
	(function (MediaItemAuthenticationType) {
	    MediaItemAuthenticationType["open"] = "OPEN";
	    MediaItemAuthenticationType["direct"] = "DIRECT";
	    MediaItemAuthenticationType["mvpd"] = "MVPD";
	    MediaItemAuthenticationType["isp"] = "ISP";
	    MediaItemAuthenticationType["none"] = "NONE";
	})(MediaItemAuthenticationType || (MediaItemAuthenticationType = {}));
	var MediaItemAuthenticationType$1 = MediaItemAuthenticationType;

	var MediaItemSourceType;
	(function (MediaItemSourceType) {
	    MediaItemSourceType["none"] = "none";
	    MediaItemSourceType["startSession"] = "startSession";
	    MediaItemSourceType["bam"] = "bam";
	    MediaItemSourceType["shield"] = "shield";
	    MediaItemSourceType["entitlement"] = "entitlement";
	})(MediaItemSourceType || (MediaItemSourceType = {}));
	var MediaItemSourceType$1 = MediaItemSourceType;

	class MediaItemSource {
	    constructor(url, type, hasEspnId3Heartbeats, hasNielsenWatermarks, hasPassThroughAds, commercialReplacement, startSessionUrl, variant) {
	        this.url = url;
	        this.type = type;
	        this.hasEspnId3Heartbeats = hasEspnId3Heartbeats;
	        this.hasNielsenWatermarks = hasNielsenWatermarks;
	        this.hasPassThroughAds = hasPassThroughAds;
	        this.commercialReplacement = commercialReplacement;
	        this.startSessionUrl = startSessionUrl;
	        this.variant = variant;
	    }
	    static fromObject(object) {
	        if (!object) {
	            return null;
	        }
	        const { url, type, hasEspnId3Heartbeats, hasNielsenWatermarks, hasPassThroughAds, commercialReplacement, startSessionUrl, variant, } = object;
	        const sourceType = MediaItemSourceType$1[type];
	        return new MediaItemSource(url, sourceType, hasEspnId3Heartbeats, hasNielsenWatermarks, hasPassThroughAds, commercialReplacement, startSessionUrl, variant);
	    }
	}

	class MediaItemNetwork {
	    constructor(id, type, name, resource) {
	        this.id = id;
	        this.type = type;
	        this.name = name;
	        this.resource = resource;
	    }
	    static fromObject(object) {
	        if (!object) {
	            return null;
	        }
	        const type = MediaItemNetworkType$1[object.type];
	        return new MediaItemNetwork(object.id, type, object.name, object.resource);
	    }
	}

	class MediaItemImage {
	    constructor(url) {
	        this.url = url;
	    }
	    static fromObject(object) {
	        if (object && object.url) {
	            return new MediaItemImage(object.url);
	        }
	        return null;
	    }
	}

	class MediaItemPackage {
	    constructor(name) {
	        this.name = name;
	    }
	    get logoUrl() {
	        return `https://secure.espncdn.com/watchespn/images/espnplus/packages/${this.name}.png`;
	    }
	    static fromObject(object) {
	        if (!object) {
	            return null;
	        }
	        return new MediaItemPackage(object.name);
	    }
	}

	class MediaItem {
	    constructor(id, title, duration, language, source) {
	        this.id = id;
	        this.title = title;
	        this.duration = duration;
	        this.language = language || 'en';
	        this.source = source;
	        this.description = null;
	        this.authenticationTypes = [];
	        this.mrss = null;
	        this.seekInSeconds = null;
	        this.tracking = {};
	        this.references = {};
	        this.network = null;
	        this.streamType = null;
	        this.supportedMediaCommands = MediaItemMediaCommand$1.all;
	        this.images = [];
	        this.type = MediaItemType$1.video;
	        this.packages = [];
	        this.tier = null;
	        this.entityType = null;
	        this.isSyndicatable = null;
	        this.brand = null;
	        this.apiSource = null;
	        this.adUnitId = null;
	        this.cues = null;
	        this.adTarget = null;
	        this.show = null;
	    }
	    get isLinear() {
	        return !!this.network && this.network.type === MediaItemNetworkType$1.linear;
	    }
	    get isLive() {
	        return this.streamType === MediaItemStreamType$1.live;
	    }
	    static fromObject(json) {
	        const source = MediaItemSource.fromObject(json.source);
	        const mediaItem = new MediaItem(json.id, json.title, json.duration, json.language, source);
	        mediaItem.airDate = json.airDate;
	        mediaItem.apiSource = json.apiSource;
	        mediaItem.authenticationTypes = json.authenticationTypes;
	        mediaItem.description = json.description;
	        mediaItem.images = (json.images || []).map(img => MediaItemImage.fromObject(img));
	        mediaItem.mrss = json.mrss;
	        mediaItem.network = MediaItemNetwork.fromObject(json.network);
	        mediaItem.seekInSeconds = json.seekInSeconds;
	        mediaItem.streamType = MediaItemStreamType$1[json.streamType];
	        mediaItem.supportedMediaCommands = json.supportedMediaCommands;
	        mediaItem.tracking = json.tracking;
	        mediaItem.references = json.references;
	        mediaItem.packages = (json.packages || []).map(pkg => MediaItemPackage.fromObject(pkg));
	        mediaItem.tier = json.tier;
	        mediaItem.type = MediaItemType$1[json.type];
	        mediaItem.entityType = MediaItemEntityType$1[json.entityType];
	        mediaItem.isSyndicatable = json.isSyndicatable;
	        mediaItem.brand = json.brand;
	        mediaItem.adUnitId = json.adUnitId;
	        mediaItem.cues = json.cues;
	        mediaItem.show = json.show;
	        mediaItem.adTarget = json.adTarget;
	        mediaItem.availableDate = json.availableDate;
	        mediaItem.episodeNumber = json.episodeNumber;
	        mediaItem.locale = json.locale;
	        mediaItem.seasonNumber = json.seasonNumber;
	        mediaItem.tmsid = json.tmsid;
	        mediaItem.videoShowGenre = json.videoShowGenre;
	        return mediaItem;
	    }
	    toString() {
	        return `<MediaItem id:${this.id}, title:${this.title}, streamType:${this.streamType}>`;
	    }
	}

	function QueryStringParser(identifier) {
	    const query = identifier.split('?')[1];
	    const result = {};
	    if (query) {
	        const vars = query.split('&');
	        for (let i = 0; i < vars.length; i += 1) {
	            const pair = vars[i].split('=');
	            result[pair[0]] = pair[1];
	        }
	    }
	    return result;
	}

	class MediaItemIdentifier {
	    constructor(identifier) {
	        const query = QueryStringParser(identifier);
	        this.original = identifier;
	        this.id = (query.videoID || query.playID || query.clip || query.externalId);
	        if (identifier.match('sportscenter')) {
	            this.gameId = query.playGameID;
	            this.channel = query.playChannel;
	            this.simulcastAiringId = query.simulcastAiringId;
	            const resumeTime = parseInt(query.resumeTime, 10);
	            if (!isNaN(resumeTime)) {
	                this.resumeTime = resumeTime;
	            }
	            this.eventId = query.eventId;
	        }
	        else if (identifier.match('abcnews')) {
	            this.channel = query.playChannel;
	            this.id = (query.videoID || query.id);
	        }
	        this.source = query['x-source'];
	        if (query.videoID) {
	            this.entityType = MediaItemEntityType$1.shortform;
	        }
	        else {
	            this.entityType = MediaItemEntityType$1.longform;
	        }
	        this.type = MediaItemType$1.video;
	    }
	    toString(source) {
	        if (source == ApiSource$1.graphQL) {
	            return `<MediaItemIdentifier id:${this.id}, gameId:${this.gameId}, channel:${this.channel}, source:${this.source}>`;
	        }
	        else {
	            return `<MediaItemIdentifier id:${this.id}, source:${this.source}>`;
	        }
	    }
	    static identifierStringForNetwork(id, source) {
	        switch (source) {
	            case ApiSource$1.cfa:
	                return `natgeo://playVideo?videoID=${id}`;
	            case ApiSource$1.itemFeed:
	                return `abcnews://playVideo?playChannel=${id}`;
	            case ApiSource$1.graphQL:
	            default:
	                return `sportscenter://x-callback-url/showWatchStream?playChannel=${id}`;
	        }
	    }
	}

	var loglevel = createCommonjsModule(function (module) {
	/*
	* loglevel - https://github.com/pimterry/loglevel
	*
	* Copyright (c) 2013 Tim Perry
	* Licensed under the MIT license.
	*/
	(function (root, definition) {
	    if (module.exports) {
	        module.exports = definition();
	    } else {
	        root.log = definition();
	    }
	}(commonjsGlobal, function () {

	    // Slightly dubious tricks to cut down minimized file size
	    var noop = function() {};
	    var undefinedType = "undefined";
	    var isIE = (typeof window !== undefinedType) && (typeof window.navigator !== undefinedType) && (
	        /Trident\/|MSIE /.test(window.navigator.userAgent)
	    );

	    var logMethods = [
	        "trace",
	        "debug",
	        "info",
	        "warn",
	        "error"
	    ];

	    // Cross-browser bind equivalent that works at least back to IE6
	    function bindMethod(obj, methodName) {
	        var method = obj[methodName];
	        if (typeof method.bind === 'function') {
	            return method.bind(obj);
	        } else {
	            try {
	                return Function.prototype.bind.call(method, obj);
	            } catch (e) {
	                // Missing bind shim or IE8 + Modernizr, fallback to wrapping
	                return function() {
	                    return Function.prototype.apply.apply(method, [obj, arguments]);
	                };
	            }
	        }
	    }

	    // Trace() doesn't print the message in IE, so for that case we need to wrap it
	    function traceForIE() {
	        if (console.log) {
	            if (console.log.apply) {
	                console.log.apply(console, arguments);
	            } else {
	                // In old IE, native console methods themselves don't have apply().
	                Function.prototype.apply.apply(console.log, [console, arguments]);
	            }
	        }
	        if (console.trace) console.trace();
	    }

	    // Build the best logging method possible for this env
	    // Wherever possible we want to bind, not wrap, to preserve stack traces
	    function realMethod(methodName) {
	        if (methodName === 'debug') {
	            methodName = 'log';
	        }

	        if (typeof console === undefinedType) {
	            return false; // No method possible, for now - fixed later by enableLoggingWhenConsoleArrives
	        } else if (methodName === 'trace' && isIE) {
	            return traceForIE;
	        } else if (console[methodName] !== undefined) {
	            return bindMethod(console, methodName);
	        } else if (console.log !== undefined) {
	            return bindMethod(console, 'log');
	        } else {
	            return noop;
	        }
	    }

	    // These private functions always need `this` to be set properly

	    function replaceLoggingMethods(level, loggerName) {
	        /*jshint validthis:true */
	        for (var i = 0; i < logMethods.length; i++) {
	            var methodName = logMethods[i];
	            this[methodName] = (i < level) ?
	                noop :
	                this.methodFactory(methodName, level, loggerName);
	        }

	        // Define log.log as an alias for log.debug
	        this.log = this.debug;
	    }

	    // In old IE versions, the console isn't present until you first open it.
	    // We build realMethod() replacements here that regenerate logging methods
	    function enableLoggingWhenConsoleArrives(methodName, level, loggerName) {
	        return function () {
	            if (typeof console !== undefinedType) {
	                replaceLoggingMethods.call(this, level, loggerName);
	                this[methodName].apply(this, arguments);
	            }
	        };
	    }

	    // By default, we use closely bound real methods wherever possible, and
	    // otherwise we wait for a console to appear, and then try again.
	    function defaultMethodFactory(methodName, level, loggerName) {
	        /*jshint validthis:true */
	        return realMethod(methodName) ||
	               enableLoggingWhenConsoleArrives.apply(this, arguments);
	    }

	    function Logger(name, defaultLevel, factory) {
	      var self = this;
	      var currentLevel;
	      defaultLevel = defaultLevel == null ? "WARN" : defaultLevel;

	      var storageKey = "loglevel";
	      if (typeof name === "string") {
	        storageKey += ":" + name;
	      } else if (typeof name === "symbol") {
	        storageKey = undefined;
	      }

	      function persistLevelIfPossible(levelNum) {
	          var levelName = (logMethods[levelNum] || 'silent').toUpperCase();

	          if (typeof window === undefinedType || !storageKey) return;

	          // Use localStorage if available
	          try {
	              window.localStorage[storageKey] = levelName;
	              return;
	          } catch (ignore) {}

	          // Use session cookie as fallback
	          try {
	              window.document.cookie =
	                encodeURIComponent(storageKey) + "=" + levelName + ";";
	          } catch (ignore) {}
	      }

	      function getPersistedLevel() {
	          var storedLevel;

	          if (typeof window === undefinedType || !storageKey) return;

	          try {
	              storedLevel = window.localStorage[storageKey];
	          } catch (ignore) {}

	          // Fallback to cookies if local storage gives us nothing
	          if (typeof storedLevel === undefinedType) {
	              try {
	                  var cookie = window.document.cookie;
	                  var location = cookie.indexOf(
	                      encodeURIComponent(storageKey) + "=");
	                  if (location !== -1) {
	                      storedLevel = /^([^;]+)/.exec(cookie.slice(location))[1];
	                  }
	              } catch (ignore) {}
	          }

	          // If the stored level is not valid, treat it as if nothing was stored.
	          if (self.levels[storedLevel] === undefined) {
	              storedLevel = undefined;
	          }

	          return storedLevel;
	      }

	      function clearPersistedLevel() {
	          if (typeof window === undefinedType || !storageKey) return;

	          // Use localStorage if available
	          try {
	              window.localStorage.removeItem(storageKey);
	              return;
	          } catch (ignore) {}

	          // Use session cookie as fallback
	          try {
	              window.document.cookie =
	                encodeURIComponent(storageKey) + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
	          } catch (ignore) {}
	      }

	      /*
	       *
	       * Public logger API - see https://github.com/pimterry/loglevel for details
	       *
	       */

	      self.name = name;

	      self.levels = { "TRACE": 0, "DEBUG": 1, "INFO": 2, "WARN": 3,
	          "ERROR": 4, "SILENT": 5};

	      self.methodFactory = factory || defaultMethodFactory;

	      self.getLevel = function () {
	          return currentLevel;
	      };

	      self.setLevel = function (level, persist) {
	          if (typeof level === "string" && self.levels[level.toUpperCase()] !== undefined) {
	              level = self.levels[level.toUpperCase()];
	          }
	          if (typeof level === "number" && level >= 0 && level <= self.levels.SILENT) {
	              currentLevel = level;
	              if (persist !== false) {  // defaults to true
	                  persistLevelIfPossible(level);
	              }
	              replaceLoggingMethods.call(self, level, name);
	              if (typeof console === undefinedType && level < self.levels.SILENT) {
	                  return "No console available for logging";
	              }
	          } else {
	              throw "log.setLevel() called with invalid level: " + level;
	          }
	      };

	      self.setDefaultLevel = function (level) {
	          defaultLevel = level;
	          if (!getPersistedLevel()) {
	              self.setLevel(level, false);
	          }
	      };

	      self.resetLevel = function () {
	          self.setLevel(defaultLevel, false);
	          clearPersistedLevel();
	      };

	      self.enableAll = function(persist) {
	          self.setLevel(self.levels.TRACE, persist);
	      };

	      self.disableAll = function(persist) {
	          self.setLevel(self.levels.SILENT, persist);
	      };

	      // Initialize with the right level
	      var initialLevel = getPersistedLevel();
	      if (initialLevel == null) {
	          initialLevel = defaultLevel;
	      }
	      self.setLevel(initialLevel, false);
	    }

	    /*
	     *
	     * Top-level API
	     *
	     */

	    var defaultLogger = new Logger();

	    var _loggersByName = {};
	    defaultLogger.getLogger = function getLogger(name) {
	        if ((typeof name !== "symbol" && typeof name !== "string") || name === "") {
	          throw new TypeError("You must supply a name when creating a logger.");
	        }

	        var logger = _loggersByName[name];
	        if (!logger) {
	          logger = _loggersByName[name] = new Logger(
	            name, defaultLogger.getLevel(), defaultLogger.methodFactory);
	        }
	        return logger;
	    };

	    // Grab the current global log variable in case of overwrite
	    var _log = (typeof window !== undefinedType) ? window.log : undefined;
	    defaultLogger.noConflict = function() {
	        if (typeof window !== undefinedType &&
	               window.log === defaultLogger) {
	            window.log = _log;
	        }

	        return defaultLogger;
	    };

	    defaultLogger.getLoggers = function getLoggers() {
	        return _loggersByName;
	    };

	    // ES6 default export, for compatibility
	    defaultLogger['default'] = defaultLogger;

	    return defaultLogger;
	}));
	});

	function buildNielsenMetadata(graphQLResponse, entityType, source) {
	    if (!graphQLResponse) {
	        return {};
	    }
	    const { duration, id, league, name, network, program, sport, startDateTime, tracking } = graphQLResponse;
	    let adLoadType = '1';
	    if (source &&
	        source.hasEspnId3Heartbeats === true &&
	        source.hasPassThroughAds === false &&
	        source.commercialReplacement !== 'SHARED INV') {
	        adLoadType = '2';
	    }
	    const metadata = {};
	    metadata.type = 'content';
	    metadata.assetid = (tracking && tracking.trackingId) || id;
	    metadata.program = name;
	    metadata.title = name;
	    metadata.clientid = 'us-600140';
	    if (entityType === MediaItemEntityType$1.longform) {
	        metadata.length = `${duration}`;
	        metadata.segB = (league && league.name) || 'No League';
	        metadata.segC = `${(program && program.code) || ''}${(sport && sport.code) || ''}`;
	        if (startDateTime) {
	            const airDate = new Date(startDateTime);
	            metadata.airdate = `${airDate.getUTCFullYear().toString() +
                `0${airDate.getUTCMonth()}`.slice(-2) +
                `0${airDate.getUTCDate()}`.slice(-2)} ${`0${airDate.getUTCHours()}`.slice(-2)}:${`0${airDate.getUTCMinutes()}`.slice(-2)}:${`0${airDate.getUTCSeconds()}`.slice(-2)}`;
	        }
	        metadata.isfullepisode = 'y';
	        metadata.crossId1 = (tracking && tracking.nielsenCrossId1) || '';
	        metadata.crossId2 = (network && network.name) || '';
	        metadata.adloadtype = adLoadType;
	        metadata.hasAds = '1';
	        metadata.progen = 'SE';
	        metadata.vcid = 'b01';
	    }
	    if (entityType === MediaItemEntityType$1.shortform) {
	        metadata.accmethod = '1';
	        metadata.length = `${duration}`;
	        metadata.segA = name;
	        metadata.segB = 'No League';
	        metadata.segC = 'VOD';
	        metadata.isfullepisode = 'n';
	        metadata.crossId1 = '';
	        metadata.adloadtype = '1';
	        metadata.vcid = 'c17';
	        metadata.adloadtype = '2';
	    }
	    return metadata;
	}

	function buildComscoreMetadata(graphQLResponse, entityType) {
	    if (!graphQLResponse) {
	        return {};
	    }
	    const { id, duration, name, league, startDateTime, network, sport, status, tracking } = graphQLResponse;
	    const metadata = {};
	    if (entityType === MediaItemEntityType$1.longform) {
	        metadata.ns_st_cl = 0;
	        metadata.ns_st_ct = 'vc';
	        if (status && (status.toLowerCase() === 'live' || status.toLowerCase() === 'over')) {
	            metadata.ns_st_cl = 0;
	            metadata.ns_st_ct = 'vc13';
	            metadata.ns_st_pr = name;
	            metadata.ns_st_ep = '*null';
	        }
	        else {
	            metadata.ns_st_cl = duration;
	            metadata.ns_st_ct = 'vc12';
	            metadata.ns_st_pr = 'VOD';
	            metadata.ns_st_ep = name;
	        }
	        metadata.c3 = 'WATCHESPNLIVE';
	        metadata.c6 = league && league.name ? league || 'No league' : (sport && sport.code) || 'No Sport';
	    }
	    else {
	        metadata.ns_st_cl = duration;
	        metadata.ns_st_ct = 'vc11';
	        metadata.ns_st_pr = 'VOD';
	        metadata.ns_st_ep = name;
	        const { sportName, leagueName } = tracking || {};
	        metadata.c3 = 'vod';
	        metadata.c6 = `${leagueName && leagueName.toLowerCase() !== 'no league' ? leagueName : sportName || 'No Sport'}`;
	    }
	    metadata.ns_st_ti = '*null';
	    metadata.ns_st_ia = '*null';
	    metadata.ns_st_ce = '*null';
	    metadata.ns_st_ci = id;
	    if (startDateTime) {
	        const date = new Date(startDateTime);
	        metadata.ns_st_ddt = date.toDateString();
	        metadata.ns_st_tdt = date.toDateString();
	    }
	    metadata.ns_st_st = network ? network.id : '*null';
	    metadata.ns_st_en = '*null';
	    metadata.ns_st_cn = '1';
	    metadata.ns_st_pn = '1';
	    metadata.ns_st_tp = '1';
	    metadata.ns_st_pu = 'ESPN';
	    metadata.ns_st_cu = 'none';
	    metadata.ns_st_ad = '0';
	    metadata.ns_st_ge = 'Sports';
	    return metadata;
	}

	function buildConvivaMetadata(graphQLResponse, entityType, source) {
	    if (!graphQLResponse) {
	        return {};
	    }
	    const { name, id, airingId, eventId, duration, network, status, sport, league } = graphQLResponse;
	    const custom = {};
	    custom.contentId = id;
	    if (airingId) {
	        custom.airingId = airingId;
	    }
	    if (eventId) {
	        custom.eventId = `${eventId}`;
	        custom.eventName = name;
	    }
	    if (network) {
	        custom.network = network.id;
	    }
	    if (entityType === MediaItemEntityType$1.shortform) {
	        custom.assetType = 'clip';
	    }
	    else if (status && (status.toLowerCase() === 'live' || status.toLowerCase() === 'over')) {
	        custom.assetType = 'live';
	    }
	    else {
	        custom.assetType = 'vod';
	    }
	    let assetName = `${name} - ${id}`;
	    if (network && network.type === MediaItemNetworkType$1.linear && custom.assetType === 'live') {
	        assetName = network.id;
	    }
	    custom.sport = (sport && sport.name) || 'Not Applicable';
	    custom.league = (league && league.name) || 'Not Applicable';
	    custom.appBrand = Brand.espn;
	    return {
	        assetName,
	        duration,
	        streamUrl: source && source.url,
	        custom,
	    };
	}

	function buildHeartbeatMetadata(graphQLResponse, entityType) {
	    if (!graphQLResponse) {
	        return {};
	    }
	    const { duration, airingId, network, status, sport, league, name, program, startDateTime, tracking, originalPublishDate, expirationDate, lastModifiedDate, ad, coverageType, brands, } = graphQLResponse;
	    const info = {};
	    info.ContentDuration = duration;
	    if (entityType === MediaItemEntityType$1.longform) {
	        info.CMSID = (tracking && tracking.name) || name;
	        info.isFullEpisode = 'y';
	        if (airingId) {
	            info.AiringID = airingId;
	        }
	        if (network) {
	            info.NetworkName = network.id;
	            info.Channel = network.id;
	        }
	        if (status) {
	            info.VideoType = status === 'REPLAY' ? 'replay' : 'live';
	        }
	        info.Sport = (sport && sport.name) || 'Not Applicable';
	        info.SportCode = (sport && sport.code) || 'Not Applicable';
	        info.League = (league && league.name) || 'Not Applicable';
	        if (program && program.code && program.categoryCode) {
	            info.ProgramCode = program.categoryCode + program.code;
	        }
	        else {
	            info.ProgramCode = 'Not Applicable';
	        }
	        info.IsStudio = (program && program.isStudio) || 'Not Applicable';
	        if (startDateTime) {
	            const date = new Date(startDateTime);
	            info.AirDate = date.toDateString();
	            info.AirTime = date.toTimeString();
	        }
	        if (Array.isArray(brands) && brands.length) {
	            const { id, name, type } = brands[0];
	            info['a.media.asset'] = id;
	            info['a.media.show'] = name;
	            info['a.media.genre'] = type;
	        }
	    }
	    else if (entityType === MediaItemEntityType$1.shortform) {
	        info.isFullEpisode = 'n';
	        info.VideoType = 'vod';
	        info.Sport = (tracking && tracking.sportName) || 'Not Applicable';
	        info.League = (tracking && tracking.leagueName) || 'Not Applicable';
	        info.ShowCode = (ad && ad.bundle) || 'Not Applicable';
	        if (tracking && tracking.name) {
	            info.CMSID = tracking.name;
	        }
	        if (originalPublishDate) {
	            const date = new Date(originalPublishDate);
	            info.PublishDate = date.toISOString().substring(0, 10);
	            info.PublishTime = date.toISOString().substring(11);
	        }
	        if (expirationDate) {
	            const date = new Date(expirationDate);
	            info.ExpirationDate = date.toISOString();
	        }
	        if (lastModifiedDate) {
	            const date = new Date(lastModifiedDate);
	            info.DateLastModified = date.toISOString();
	        }
	        if (coverageType) {
	            info.VideoTypeDetail = coverageType;
	        }
	    }
	    return info;
	}

	function buildNatGeoHeartbeatMetadata(response) {
	    if (!response) {
	        return {};
	    }
	    const info = {};
	    const { id, title, duration } = response;
	    info.c_video_id_code = id;
	    info.c_a_media_airdate = 'unknown';
	    info.c_a_media_daypart = 'daytime';
	    info.c_a_media_digitaldate = 'unknown';
	    info.c_a_media_episode = 'none';
	    info.c_a_media_feed = 'natgeo live';
	    info.c_a_media_format = 'vod';
	    info.c_a_media_genre = 'none';
	    info.c_a_media_network = 'natgeo';
	    info.c_a_media_originator = 'natgeo';
	    info.c_a_media_pass_auth = 'none';
	    info.c_a_media_pass_mvpd = 'none';
	    info.c_a_media_rating = 'none';
	    info.c_a_media_season = 'none';
	    info.c_a_media_show = title;
	    info.c_a_media_streamtype = MediaItemType.video;
	    info.c_a_media_length = duration;
	    return info;
	}

	function buildMediaItemTracking(brand, response, entityType, source) {
	    if (!response) {
	        return {};
	    }
	    let nielsen, comscore, conviva, heartbeats = null;
	    if (brand === Brand.natGeo) {
	        heartbeats = buildNatGeoHeartbeatMetadata(response);
	    }
	    else {
	        nielsen = buildNielsenMetadata(response, entityType, source);
	        comscore = buildComscoreMetadata(response, entityType);
	        conviva = buildConvivaMetadata(response, entityType, source);
	        heartbeats = buildHeartbeatMetadata(response, entityType);
	    }
	    const tracking = {};
	    tracking[MediaItemTrackingType$1.nielsen] = nielsen;
	    tracking[MediaItemTrackingType$1.comscore] = comscore;
	    tracking[MediaItemTrackingType$1.conviva] = conviva;
	    tracking[MediaItemTrackingType$1.heartbeats] = heartbeats;
	    return tracking;
	}

	function mediaItemFromGraphQL(response, entityType, options) {
	    const { id, name, description, duration, image, eventId, requiresLinearPlayback, authTypes, source: src, prerollSource, packages, language, mrss, seekInSeconds, tracking, simulcastAiringId, network, status, cerebroId, syndicatable, } = response;
	    const isLive = status && (status.toUpperCase() === 'LIVE' || status.toUpperCase() === 'OVER');
	    const streamType = isLive ? MediaItemStreamType$1.live : MediaItemStreamType$1.onDemand;
	    const sourceType = ((authorizationType) => {
	        switch (authorizationType) {
	            case 'NONE':
	                return MediaItemSourceType$1.none;
	            case 'START_SESSION':
	                return MediaItemSourceType$1.startSession;
	            case 'BAM':
	                return MediaItemSourceType$1.bam;
	            case 'SHIELD':
	                return MediaItemSourceType$1.shield;
	        }
	    })(src.authorizationType);
	    let source = new MediaItemSource(src.url, sourceType, src.hasEspnId3Heartbeats, src.hasNielsenWatermarks, src.hasPassThroughAds, src.commercialReplacement, src.startSessionUrl);
	    if (options && options.sourceVariant === MediaItemSourceVariant$1.stitchedPreroll && prerollSource) {
	        source = new MediaItemSource(prerollSource.url, MediaItemSourceType$1.none);
	        source.variant = MediaItemSourceVariant$1.stitchedPreroll;
	    }
	    const supportedMediaCommands = requiresLinearPlayback ? MediaItemMediaCommand$1.linearPlayback : MediaItemMediaCommand$1.all;
	    const trackingId = (tracking && tracking.trackingId) || id;
	    const mediaItem = new MediaItem(id, name, duration, language, source);
	    mediaItem.authenticationTypes = authTypes.map((item) => {
	        switch (item) {
	            case 'DIRECT':
	                return MediaItemAuthenticationType$1.direct;
	            case 'OPEN':
	                return MediaItemAuthenticationType$1.open;
	            case 'MVPD':
	                return MediaItemAuthenticationType$1.mvpd;
	            case 'ISP':
	                return MediaItemAuthenticationType$1.isp;
	            default:
	                return MediaItemAuthenticationType$1.none;
	        }
	    });
	    mediaItem.description = description;
	    mediaItem.isSyndicatable = syndicatable;
	    if (image && image.url) {
	        mediaItem.images.push(new MediaItemImage(image.url));
	    }
	    mediaItem.mrss = mrss;
	    if (network) {
	        const networkType = network.type === 'linear' ? MediaItemNetworkType$1.linear : MediaItemNetworkType$1.event;
	        mediaItem.network = new MediaItemNetwork(network.id, networkType, network.name, network.adobeResource);
	    }
	    mediaItem.seekInSeconds = seekInSeconds;
	    mediaItem.streamType = streamType;
	    mediaItem.supportedMediaCommands = supportedMediaCommands;
	    mediaItem.brand = mediaItem.brand ? mediaItem.brand : 'espn';
	    mediaItem.tracking = buildMediaItemTracking(mediaItem.brand, response, entityType, source);
	    mediaItem.references = {
	        eventId,
	        simulcastAiringId,
	        trackingId,
	        cerebroId,
	    };
	    mediaItem.type = MediaItemType$1.video;
	    mediaItem.entityType = entityType;
	    mediaItem.apiSource = ApiSource$1.graphQL;
	    mediaItem.packages = (packages || []).map(pkg => new MediaItemPackage(pkg.name));
	    return mediaItem;
	}

	function sortMediaItems(mediaItems, networkSortOrder, lang) {
	    return mediaItems
	        .sort((first, second) => {
	        const firstTier = first.tier === 'PRIMARY' ? 0 : first.tier === 'SECONDARY' ? 1 : 2;
	        const secondTier = second.tier === 'PRIMARY' ? 0 : second.tier === 'SECONDARY' ? 1 : 2;
	        if (firstTier < secondTier) {
	            return -1;
	        }
	        if (firstTier > secondTier) {
	            return 1;
	        }
	        return 0;
	    })
	        .sort((first, second) => {
	        const firstNetwork = (first.network && first.network.id.toLowerCase()) || 'unknown';
	        const secondNetwork = (second.network && second.network.id.toLowerCase()) || 'unknown';
	        let firstNetworkIndex = networkSortOrder.indexOf(firstNetwork);
	        let secondNetworkIndex = networkSortOrder.indexOf(secondNetwork);
	        if (firstNetworkIndex === -1) {
	            firstNetworkIndex = 999;
	        }
	        if (secondNetworkIndex === -1) {
	            secondNetworkIndex = 999;
	        }
	        if (firstNetworkIndex < secondNetworkIndex) {
	            return -1;
	        }
	        if (firstNetworkIndex > secondNetworkIndex) {
	            return 1;
	        }
	        return 0;
	    })
	        .sort((first, second) => {
	        const firstLanguage = first.language === lang ? 0 : 1;
	        const secondLanguage = second.language === lang ? 0 : 1;
	        if (firstLanguage < secondLanguage) {
	            return -1;
	        }
	        if (firstLanguage < secondLanguage) {
	            return 1;
	        }
	        return 0;
	    });
	}

	const graphQLAiringProps = '{ ' +
	    'id name description mrss:adobeRSS authTypes ' +
	    'requiresLinearPlayback status:type startDateTime endDateTime duration ' +
	    'source(authorization: SHIELD) { url authorizationType hasEspnId3Heartbeats hasNielsenWatermarks hasPassThroughAds commercialReplacement startSessionUrl } ' +
	    'network { id type name adobeResource } ' +
	    'image { url } ' +
	    'sport { name code uid } ' +
	    'league { name uid } ' +
	    'program { code categoryCode isStudio } ' +
	    'seekInSeconds simulcastAiringId airingId ' +
	    'tracking { nielsenCrossId1 trackingId } ' +
	    'eventId ' +
	    'packages { name } ' +
	    'language tier feedName ' +
	    'brands { id name type } ' +
	    '}';
	const graphQLVODProps = '{' +
	    'id name description authTypes language ' +
	    'duration originalPublishDate expirationDate ' +
	    'requiresLinearPlayback lastModifiedDate ' +
	    'source { url authorizationType } ' +
	    'image { url } ' +
	    'tracking { name sportName leagueName } ' +
	    'coverageType ' +
	    'prerollSource:source(variant:PREROLL) { url authorizationType }' +
	    'ad { sport bundle } ' +
	    'links { web } ' +
	    'cerebroId syndicatable' +
	    '}';
	function identifierToUrl(identifier, serviceUrl, apiKey, countryCode) {
	    let queryType = '';
	    let identifierParams = '';
	    let props = '';
	    const country = countryCode || 'US';
	    if (identifier.entityType === MediaItemEntityType$1.shortform) {
	        queryType = 'VOD';
	        props = graphQLVODProps;
	        identifierParams = `id:"${identifier.id}"`;
	    }
	    else {
	        queryType = 'airing';
	        props = graphQLAiringProps;
	        if (identifier.id) {
	            identifierParams = `id:"${identifier.id}"`;
	        }
	        else if (identifier.channel) {
	            queryType = 'airings';
	            identifierParams = `networks:["${identifier.channel}"],type:LIVE`;
	        }
	        else if (identifier.gameId) {
	            queryType = 'airings';
	            identifierParams = `eventId:"${identifier.eventId || identifier.gameId}"`;
	        }
	    }
	    const query = encodeURIComponent(`{ ${queryType}(${identifierParams},countryCode:"${country}",deviceType:SETTOP,tz:"Z") ${props} }`);
	    return `${serviceUrl}?apiKey=${apiKey}&query=${query}`;
	}

	const defaultGraphQLServiceUrl = 'https://watch.graph.api.espn.com/api';
	const defaultGraphQLApiKey = 'd15c5790-7cb0-4fe1-8782-25f4698d0739';
	const defaultGraphQLNetworkSortOrder = [
	    'espn_ppv',
	    'espn_dtc',
	    'espn1',
	    'espn2',
	    'espn3',
	    'espnu',
	    'sec',
	    'espnews',
	    'espndeportes',
	    'longhorn',
	    'goalline',
	    'buzzerbeater',
	    'secplus',
	    'acc',
	    'accextra',
	    'espn_free',
	    'bam_dtc',
	];
	const defaultCfaServiceUrl = 'https://natgeo.entertainment.client.dtci.technology/v1/playback/video/id/mock';
	const defaultItemFeedServiceUrl = 'https://abcnews.go.com/video/itemfeed';
	class Configuration$2 {
	    constructor(apiSource, serviceUrl, apiKey, networkSortOrder) {
	        if (apiSource == ApiSource$1.graphQL) {
	            this.serviceUrl = serviceUrl || defaultGraphQLServiceUrl;
	            this.apiKey = apiKey || defaultGraphQLApiKey;
	            this.networkSortOrder = networkSortOrder || defaultGraphQLNetworkSortOrder;
	        }
	        else if (apiSource == ApiSource$1.cfa) {
	            this.serviceUrl = serviceUrl || defaultCfaServiceUrl;
	        }
	        else if (apiSource === ApiSource$1.itemFeed) {
	            this.serviceUrl = serviceUrl || defaultItemFeedServiceUrl;
	        }
	    }
	}

	class GraphQLMediaItemAPI {
	    constructor() {
	        this.configuration_ = GraphQLMediaItemAPI.defaultConfiguration;
	    }
	    get configuration() {
	        return this.configuration_;
	    }
	    set configuration(configuration) {
	        this.configuration_ = configuration;
	    }
	    getMediaItems(identifiers, options) {
	        return __awaiter(this, void 0, void 0, function* () {
	            return yield GraphQLMediaItemAPI.fetchMediaItems(identifiers, options, this.configuration);
	        });
	    }
	    static fetchMediaItems(identifiers, options, configuration) {
	        return __awaiter(this, void 0, void 0, function* () {
	            const ids = identifiers.map(string => new MediaItemIdentifier(string));
	            const { serviceUrl, apiKey, networkSortOrder } = configuration;
	            const promiseMediaItems = yield Promise.all(ids.map(id => GraphQLMediaItemAPI.getPromiseMediaItems(id, serviceUrl, apiKey, options)));
	            const mediaItems = promiseMediaItems.filter(result => !(result instanceof Error) && result instanceof MediaItem);
	            if (mediaItems.length) {
	                return sortMediaItems(mediaItems, networkSortOrder, navigator.language);
	            }
	            return null;
	        });
	    }
	    static getPromiseMediaItems(identifier, serviceUrl, apiKey, options) {
	        return __awaiter(this, void 0, void 0, function* () {
	            const url = identifierToUrl(identifier, serviceUrl, apiKey, options.countryCode);
	            try {
	                const response = yield fetch(url);
	                const json = yield response.json();
	                let { airing } = json.data;
	                const { airings } = json.data;
	                if (airings) {
	                    const filter = identifier.simulcastAiringId
	                        ? (airing) => airing.simulcastAiringId === identifier.simulcastAiringId
	                        : () => true;
	                    airing = airings.filter(filter)[0];
	                }
	                const vod = json.data.VOD;
	                const obj = airing || vod;
	                if (!obj) {
	                    throw new Error('No results found.');
	                }
	                const mediaItem = mediaItemFromGraphQL(obj, identifier.entityType, options);
	                if (identifier.resumeTime) {
	                    mediaItem.seekInSeconds = identifier.resumeTime;
	                }
	                if (!mediaItem.source.url) {
	                    const isOver = obj.status.toUpperCase() === 'OVER';
	                    const isLinear = obj.network && obj.network.type === MediaItemNetworkType$1.linear;
	                    const networkId = obj.network && obj.network.id;
	                    if (isOver && isLinear && networkId) {
	                        return GraphQLMediaItemAPI.retryGetMediaItems(networkId, serviceUrl, apiKey, options);
	                    }
	                    throw new Error('No playable url');
	                }
	                return mediaItem;
	            }
	            catch (error) {
	                loglevel.warn(`Failed to retrieve MediaItem from GraphQL: ${error}`);
	                return null;
	            }
	        });
	    }
	    static retryGetMediaItems(networkId, serviceUrl, apiKey, options) {
	        return __awaiter(this, void 0, void 0, function* () {
	            try {
	                const identifierString = MediaItemIdentifier.identifierStringForNetwork(networkId, ApiSource$1.graphQL);
	                const identifier = new MediaItemIdentifier(identifierString);
	                const mediaItem = yield GraphQLMediaItemAPI.getPromiseMediaItems(identifier, serviceUrl, apiKey, options);
	                if (mediaItem && mediaItem instanceof MediaItem === true) {
	                    return mediaItem;
	                }
	                throw new Error(`Retry fetchMediaItems failed with ${networkId}`);
	            }
	            catch (error) {
	                loglevel.warn(`MediaItem is over and retry failed: ${error}`);
	                return null;
	            }
	        });
	    }
	}
	GraphQLMediaItemAPI.defaultConfiguration = new Configuration$2(ApiSource$1.graphQL);

	function mediaItemFromCFA(response) {
	    const { id, title, description, duration, source: src, type, entityType, streamType, authenticationTypes, language, network, brand, images, } = response;
	    const entity = entityType;
	    const sourceType = src.type;
	    const source = new MediaItemSource(src.url, sourceType);
	    const mediaItem = new MediaItem(id, title, duration, language, source);
	    mediaItem.authenticationTypes = authenticationTypes.map((item) => {
	        switch (item) {
	            case 'DIRECT':
	                return MediaItemAuthenticationType$1.direct;
	            case 'OPEN':
	                return MediaItemAuthenticationType$1.open;
	            case 'MVPD':
	                return MediaItemAuthenticationType$1.mvpd;
	            case 'ISP':
	                return MediaItemAuthenticationType$1.isp;
	            default:
	                return MediaItemAuthenticationType$1.none;
	        }
	    });
	    mediaItem.description = description;
	    if (network) {
	        mediaItem.network = new MediaItemNetwork(network.id, network.type, network.name, network.resource);
	    }
	    mediaItem.streamType = streamType;
	    mediaItem.brand = brand;
	    mediaItem.tracking = buildMediaItemTracking(mediaItem.brand, response, entity, source);
	    mediaItem.images = images;
	    mediaItem.type = type;
	    mediaItem.entityType = entity;
	    mediaItem.apiSource = ApiSource$1.cfa;
	    return mediaItem;
	}

	class CFAMediaItemAPI {
	    constructor() {
	        this.configuration_ = CFAMediaItemAPI.defaultConfiguration;
	    }
	    get configuration() {
	        return this.configuration_;
	    }
	    set configuration(configuration) {
	        this.configuration_ = configuration;
	    }
	    getMediaItems(identifiers, options) {
	        return __awaiter(this, void 0, void 0, function* () {
	            return yield CFAMediaItemAPI.fetchMediaItems(identifiers, options, this.configuration);
	        });
	    }
	    static fetchMediaItems(identifiers, options, configuration) {
	        return __awaiter(this, void 0, void 0, function* () {
	            const ids = identifiers.map(string => new MediaItemIdentifier(string));
	            const { serviceUrl } = configuration;
	            const promiseMediaItems = yield Promise.all(ids.map(id => CFAMediaItemAPI.getPromiseMediaItem(id, serviceUrl)));
	            return promiseMediaItems.filter(result => !(result instanceof Error) && result instanceof MediaItem);
	        });
	    }
	    static getPromiseMediaItem(identifier, serviceUrl) {
	        return __awaiter(this, void 0, void 0, function* () {
	            const url = serviceUrl.replace('videoID', identifier.id);
	            try {
	                const response = yield fetch(url);
	                const json = yield response.json();
	                const mediaItem = mediaItemFromCFA(json);
	                return mediaItem;
	            }
	            catch (error) {
	                loglevel.warn(`Failed to retrieve MediaItem from CFA: ${error}`);
	                return null;
	            }
	        });
	    }
	}
	CFAMediaItemAPI.defaultConfiguration = new Configuration$2(ApiSource$1.cfa);

	const EMPTY_OBJ$2 = Object.freeze({});
	const EMPTY_ARY = Object.freeze({});
	const EMPTY_STR$1 = '';
	const NULL = null;
	const API_SOURCE = ApiSource$1.itemFeed;
	const ABCN = 'abcn';
	const NEWS = 'news';
	const NOT_APPLICABLE = 'none';
	const LINEAR_STREAM_TYPE = 'akamai live stream';
	const ABCNEWS_BRAND = 'abcnews';
	const LIVE$u = 'live';
	const ENTITY_TYPE_BY_VIDEO_CONTENT_TYPE = {
	    lf: 'longform',
	    sf: 'shortform',
	    live: 'longform',
	};
	const BRAND_BY_CHANNEL_OR_NETWORK = {
	    'abcn:fivethirtyeight': 'fivethirtyeight',
	    abcn: 'abcnews',
	};
	const DEFAULT_NETWORK = {
	    name: 'abc_news_live',
	    type: 'linear',
	};
	const preferredMediaContentTypes = ['HLS_ALL', 'PDL_MED', 'PDL_LOW'];
	function findPreferredMediaContent(mediaContents) {
	    var _a, _b;
	    const preferredMediaContentTypesLength = preferredMediaContentTypes.length;
	    const mediaContentsLength = mediaContents.length;
	    for (let i = 0; i < preferredMediaContentTypesLength; i++) {
	        const preferredMediaContentType = preferredMediaContentTypes[i];
	        for (let j = 0; j < mediaContentsLength; j++) {
	            const mediaContent = mediaContents[j];
	            if (((_b = (_a = mediaContent === null || mediaContent === void 0 ? void 0 : mediaContent['media-category']) === null || _a === void 0 ? void 0 : _a['@attributes']) === null || _b === void 0 ? void 0 : _b['label']) === preferredMediaContentType) {
	                return mediaContent;
	            }
	        }
	    }
	}
	function mediaItemFromItemFeed(_videoDataJSON) {
	    const videoData = _videoDataJSON || EMPTY_OBJ$2;
	    const channel = videoData.channel || EMPTY_OBJ$2;
	    const videoItem = channel.item || EMPTY_OBJ$2;
	    const mediaGroup = videoItem['media-group'] || EMPTY_OBJ$2;
	    const mediaContents = mediaGroup['media-content'] || EMPTY_ARY;
	    const mediaTitle = mediaGroup['media-title'];
	    const preferredMediaContent = findPreferredMediaContent(mediaContents) || EMPTY_OBJ$2;
	    const preferredMediaContentAttrs = preferredMediaContent['@attributes'] || EMPTY_OBJ$2;
	    const mediaThumbnail = mediaGroup['media-thumbnail'] || EMPTY_OBJ$2;
	    const mediaThumbnailAttrs = mediaThumbnail['@attributes'] || EMPTY_OBJ$2;
	    const { guid, title, temporalType, timestamp, link } = videoItem;
	    const { duration, url: streamURL, medium } = preferredMediaContentAttrs;
	    const omniture = videoItem.omniture || EMPTY_OBJ$2;
	    const omniChannel = omniture.channel || EMPTY_STR$1;
	    const [networkName = ABCN] = String(omniChannel).split(':');
	    const brand = BRAND_BY_CHANNEL_OR_NETWORK[omniChannel] || BRAND_BY_CHANNEL_OR_NETWORK[networkName] || ABCNEWS_BRAND;
	    const isVOD = temporalType === 'vod';
	    const isLive = temporalType === LIVE$u;
	    const entityType = ENTITY_TYPE_BY_VIDEO_CONTENT_TYPE[videoItem.videoContentType] || (isVOD ? 'shortform' : 'longform');
	    const videoTitle = mediaTitle || title;
	    const language = channel.language || 'en';
	    let publishedDate;
	    let publishedTime;
	    try {
	        [publishedDate, publishedTime] = new Date(timestamp).toISOString().split('T');
	    }
	    catch (err) {
	        console.warn(err);
	    }
	    const network = videoItem.mediatype === LINEAR_STREAM_TYPE && !isVOD ? Object.assign(Object.assign({}, DEFAULT_NETWORK), { id: guid }) : {};
	    const mediaItemData = {
	        id: guid,
	        apiSource: API_SOURCE,
	        seasonNumber: NOT_APPLICABLE,
	        eventId: NOT_APPLICABLE,
	        episodeNumber: NOT_APPLICABLE,
	        genre: NEWS,
	        tvrating: NOT_APPLICABLE,
	        network,
	        show: {
	            title: videoTitle,
	        },
	        title: videoTitle,
	        duration,
	        language,
	        source: {
	            url: streamURL,
	            type: NOT_APPLICABLE,
	        },
	        description: videoItem.description || mediaGroup['media-description'],
	        authenticationTypes: ['NONE'],
	        mrss: null,
	        seekInSeconds: null,
	        brand: brand,
	        type: medium === 'video' ? 'video' : 'audio',
	        entityType: entityType,
	        streamType: isLive ? LIVE$u : 'onDemand',
	        images: mediaThumbnailAttrs ? [{ url: mediaThumbnailAttrs.url }] : NULL,
	        airDate: videoItem.timestamp,
	        availableDate: videoItem.pubDate,
	        references: {
	            itemfeed: guid,
	        },
	        tracking: {
	            omniture: videoItem.omniture,
	            nielsen: {
	                type: 'content',
	                assetid: guid,
	                program: videoTitle,
	                title: videoTitle,
	            },
	            conviva: {
	                assetName: title,
	                duration,
	                streamURL,
	                custom: {
	                    contentId: guid,
	                    assetType: isVOD ? 'clip' : LIVE$u,
	                    sport: NOT_APPLICABLE,
	                    league: NOT_APPLICABLE,
	                    appBrand: videoItem.category || 'abcnews',
	                },
	            },
	            heartbeats: {
	                ContentDuration: duration,
	                isFullEpisode: entityType === 'shortform' || isLive ? 'n' : 'y',
	                VideoType: temporalType,
	                CMSID: videoTitle,
	                PublishDate: publishedDate,
	                PublishTime: publishedTime,
	            },
	        },
	        webHref: link,
	    };
	    const mediaItem = MediaItem.fromObject(mediaItemData);
	    return mediaItem;
	}

	var strictUriEncode = str => encodeURIComponent(str).replace(/[!'()*]/g, x => `%${x.charCodeAt(0).toString(16).toUpperCase()}`);

	var token = '%[a-f0-9]{2}';
	var singleMatcher = new RegExp(token, 'gi');
	var multiMatcher = new RegExp('(' + token + ')+', 'gi');

	function decodeComponents(components, split) {
		try {
			// Try to decode the entire string first
			return decodeURIComponent(components.join(''));
		} catch (err) {
			// Do nothing
		}

		if (components.length === 1) {
			return components;
		}

		split = split || 1;

		// Split the array in 2 parts
		var left = components.slice(0, split);
		var right = components.slice(split);

		return Array.prototype.concat.call([], decodeComponents(left), decodeComponents(right));
	}

	function decode$1(input) {
		try {
			return decodeURIComponent(input);
		} catch (err) {
			var tokens = input.match(singleMatcher);

			for (var i = 1; i < tokens.length; i++) {
				input = decodeComponents(tokens, i).join('');

				tokens = input.match(singleMatcher);
			}

			return input;
		}
	}

	function customDecodeURIComponent(input) {
		// Keep track of all the replacements and prefill the map with the `BOM`
		var replaceMap = {
			'%FE%FF': '\uFFFD\uFFFD',
			'%FF%FE': '\uFFFD\uFFFD'
		};

		var match = multiMatcher.exec(input);
		while (match) {
			try {
				// Decode as big chunks as possible
				replaceMap[match[0]] = decodeURIComponent(match[0]);
			} catch (err) {
				var result = decode$1(match[0]);

				if (result !== match[0]) {
					replaceMap[match[0]] = result;
				}
			}

			match = multiMatcher.exec(input);
		}

		// Add `%C2` at the end of the map to make sure it does not replace the combinator before everything else
		replaceMap['%C2'] = '\uFFFD';

		var entries = Object.keys(replaceMap);

		for (var i = 0; i < entries.length; i++) {
			// Replace all decoded components
			var key = entries[i];
			input = input.replace(new RegExp(key, 'g'), replaceMap[key]);
		}

		return input;
	}

	var decodeUriComponent = function (encodedURI) {
		if (typeof encodedURI !== 'string') {
			throw new TypeError('Expected `encodedURI` to be of type `string`, got `' + typeof encodedURI + '`');
		}

		try {
			encodedURI = encodedURI.replace(/\+/g, ' ');

			// Try the built in decoder first
			return decodeURIComponent(encodedURI);
		} catch (err) {
			// Fallback to a more advanced decoder
			return customDecodeURIComponent(encodedURI);
		}
	};

	var splitOnFirst = (string, separator) => {
		if (!(typeof string === 'string' && typeof separator === 'string')) {
			throw new TypeError('Expected the arguments to be of type `string`');
		}

		if (separator === '') {
			return [string];
		}

		const separatorIndex = string.indexOf(separator);

		if (separatorIndex === -1) {
			return [string];
		}

		return [
			string.slice(0, separatorIndex),
			string.slice(separatorIndex + separator.length)
		];
	};

	var filterObj = function (obj, predicate) {
		var ret = {};
		var keys = Object.keys(obj);
		var isArr = Array.isArray(predicate);

		for (var i = 0; i < keys.length; i++) {
			var key = keys[i];
			var val = obj[key];

			if (isArr ? predicate.indexOf(key) !== -1 : predicate(key, val, obj)) {
				ret[key] = val;
			}
		}

		return ret;
	};

	var queryString = createCommonjsModule(function (module, exports) {





	const isNullOrUndefined = value => value === null || value === undefined;

	function encoderForArrayFormat(options) {
		switch (options.arrayFormat) {
			case 'index':
				return key => (result, value) => {
					const index = result.length;

					if (
						value === undefined ||
						(options.skipNull && value === null) ||
						(options.skipEmptyString && value === '')
					) {
						return result;
					}

					if (value === null) {
						return [...result, [encode(key, options), '[', index, ']'].join('')];
					}

					return [
						...result,
						[encode(key, options), '[', encode(index, options), ']=', encode(value, options)].join('')
					];
				};

			case 'bracket':
				return key => (result, value) => {
					if (
						value === undefined ||
						(options.skipNull && value === null) ||
						(options.skipEmptyString && value === '')
					) {
						return result;
					}

					if (value === null) {
						return [...result, [encode(key, options), '[]'].join('')];
					}

					return [...result, [encode(key, options), '[]=', encode(value, options)].join('')];
				};

			case 'comma':
			case 'separator':
				return key => (result, value) => {
					if (value === null || value === undefined || value.length === 0) {
						return result;
					}

					if (result.length === 0) {
						return [[encode(key, options), '=', encode(value, options)].join('')];
					}

					return [[result, encode(value, options)].join(options.arrayFormatSeparator)];
				};

			default:
				return key => (result, value) => {
					if (
						value === undefined ||
						(options.skipNull && value === null) ||
						(options.skipEmptyString && value === '')
					) {
						return result;
					}

					if (value === null) {
						return [...result, encode(key, options)];
					}

					return [...result, [encode(key, options), '=', encode(value, options)].join('')];
				};
		}
	}

	function parserForArrayFormat(options) {
		let result;

		switch (options.arrayFormat) {
			case 'index':
				return (key, value, accumulator) => {
					result = /\[(\d*)\]$/.exec(key);

					key = key.replace(/\[\d*\]$/, '');

					if (!result) {
						accumulator[key] = value;
						return;
					}

					if (accumulator[key] === undefined) {
						accumulator[key] = {};
					}

					accumulator[key][result[1]] = value;
				};

			case 'bracket':
				return (key, value, accumulator) => {
					result = /(\[\])$/.exec(key);
					key = key.replace(/\[\]$/, '');

					if (!result) {
						accumulator[key] = value;
						return;
					}

					if (accumulator[key] === undefined) {
						accumulator[key] = [value];
						return;
					}

					accumulator[key] = [].concat(accumulator[key], value);
				};

			case 'comma':
			case 'separator':
				return (key, value, accumulator) => {
					const isArray = typeof value === 'string' && value.includes(options.arrayFormatSeparator);
					const isEncodedArray = (typeof value === 'string' && !isArray && decode(value, options).includes(options.arrayFormatSeparator));
					value = isEncodedArray ? decode(value, options) : value;
					const newValue = isArray || isEncodedArray ? value.split(options.arrayFormatSeparator).map(item => decode(item, options)) : value === null ? value : decode(value, options);
					accumulator[key] = newValue;
				};

			default:
				return (key, value, accumulator) => {
					if (accumulator[key] === undefined) {
						accumulator[key] = value;
						return;
					}

					accumulator[key] = [].concat(accumulator[key], value);
				};
		}
	}

	function validateArrayFormatSeparator(value) {
		if (typeof value !== 'string' || value.length !== 1) {
			throw new TypeError('arrayFormatSeparator must be single character string');
		}
	}

	function encode(value, options) {
		if (options.encode) {
			return options.strict ? strictUriEncode(value) : encodeURIComponent(value);
		}

		return value;
	}

	function decode(value, options) {
		if (options.decode) {
			return decodeUriComponent(value);
		}

		return value;
	}

	function keysSorter(input) {
		if (Array.isArray(input)) {
			return input.sort();
		}

		if (typeof input === 'object') {
			return keysSorter(Object.keys(input))
				.sort((a, b) => Number(a) - Number(b))
				.map(key => input[key]);
		}

		return input;
	}

	function removeHash(input) {
		const hashStart = input.indexOf('#');
		if (hashStart !== -1) {
			input = input.slice(0, hashStart);
		}

		return input;
	}

	function getHash(url) {
		let hash = '';
		const hashStart = url.indexOf('#');
		if (hashStart !== -1) {
			hash = url.slice(hashStart);
		}

		return hash;
	}

	function extract(input) {
		input = removeHash(input);
		const queryStart = input.indexOf('?');
		if (queryStart === -1) {
			return '';
		}

		return input.slice(queryStart + 1);
	}

	function parseValue(value, options) {
		if (options.parseNumbers && !Number.isNaN(Number(value)) && (typeof value === 'string' && value.trim() !== '')) {
			value = Number(value);
		} else if (options.parseBooleans && value !== null && (value.toLowerCase() === 'true' || value.toLowerCase() === 'false')) {
			value = value.toLowerCase() === 'true';
		}

		return value;
	}

	function parse(query, options) {
		options = Object.assign({
			decode: true,
			sort: true,
			arrayFormat: 'none',
			arrayFormatSeparator: ',',
			parseNumbers: false,
			parseBooleans: false
		}, options);

		validateArrayFormatSeparator(options.arrayFormatSeparator);

		const formatter = parserForArrayFormat(options);

		// Create an object with no prototype
		const ret = Object.create(null);

		if (typeof query !== 'string') {
			return ret;
		}

		query = query.trim().replace(/^[?#&]/, '');

		if (!query) {
			return ret;
		}

		for (const param of query.split('&')) {
			if (param === '') {
				continue;
			}

			let [key, value] = splitOnFirst(options.decode ? param.replace(/\+/g, ' ') : param, '=');

			// Missing `=` should be `null`:
			// http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
			value = value === undefined ? null : ['comma', 'separator'].includes(options.arrayFormat) ? value : decode(value, options);
			formatter(decode(key, options), value, ret);
		}

		for (const key of Object.keys(ret)) {
			const value = ret[key];
			if (typeof value === 'object' && value !== null) {
				for (const k of Object.keys(value)) {
					value[k] = parseValue(value[k], options);
				}
			} else {
				ret[key] = parseValue(value, options);
			}
		}

		if (options.sort === false) {
			return ret;
		}

		return (options.sort === true ? Object.keys(ret).sort() : Object.keys(ret).sort(options.sort)).reduce((result, key) => {
			const value = ret[key];
			if (Boolean(value) && typeof value === 'object' && !Array.isArray(value)) {
				// Sort object keys, not values
				result[key] = keysSorter(value);
			} else {
				result[key] = value;
			}

			return result;
		}, Object.create(null));
	}

	exports.extract = extract;
	exports.parse = parse;

	exports.stringify = (object, options) => {
		if (!object) {
			return '';
		}

		options = Object.assign({
			encode: true,
			strict: true,
			arrayFormat: 'none',
			arrayFormatSeparator: ','
		}, options);

		validateArrayFormatSeparator(options.arrayFormatSeparator);

		const shouldFilter = key => (
			(options.skipNull && isNullOrUndefined(object[key])) ||
			(options.skipEmptyString && object[key] === '')
		);

		const formatter = encoderForArrayFormat(options);

		const objectCopy = {};

		for (const key of Object.keys(object)) {
			if (!shouldFilter(key)) {
				objectCopy[key] = object[key];
			}
		}

		const keys = Object.keys(objectCopy);

		if (options.sort !== false) {
			keys.sort(options.sort);
		}

		return keys.map(key => {
			const value = object[key];

			if (value === undefined) {
				return '';
			}

			if (value === null) {
				return encode(key, options);
			}

			if (Array.isArray(value)) {
				return value
					.reduce(formatter(key), [])
					.join('&');
			}

			return encode(key, options) + '=' + encode(value, options);
		}).filter(x => x.length > 0).join('&');
	};

	exports.parseUrl = (url, options) => {
		options = Object.assign({
			decode: true
		}, options);

		const [url_, hash] = splitOnFirst(url, '#');

		return Object.assign(
			{
				url: url_.split('?')[0] || '',
				query: parse(extract(url), options)
			},
			options && options.parseFragmentIdentifier && hash ? {fragmentIdentifier: decode(hash, options)} : {}
		);
	};

	exports.stringifyUrl = (object, options) => {
		options = Object.assign({
			encode: true,
			strict: true
		}, options);

		const url = removeHash(object.url).split('?')[0] || '';
		const queryFromUrl = exports.extract(object.url);
		const parsedQueryFromUrl = exports.parse(queryFromUrl, {sort: false});

		const query = Object.assign(parsedQueryFromUrl, object.query);
		let queryString = exports.stringify(query, options);
		if (queryString) {
			queryString = `?${queryString}`;
		}

		let hash = getHash(object.url);
		if (object.fragmentIdentifier) {
			hash = `#${encode(object.fragmentIdentifier, options)}`;
		}

		return `${url}${queryString}${hash}`;
	};

	exports.pick = (input, filter, options) => {
		options = Object.assign({
			parseFragmentIdentifier: true
		}, options);

		const {url, query, fragmentIdentifier} = exports.parseUrl(input, options);
		return exports.stringifyUrl({
			url,
			query: filterObj(query, filter),
			fragmentIdentifier
		}, options);
	};

	exports.exclude = (input, filter, options) => {
		const exclusionFilter = Array.isArray(filter) ? key => !filter.includes(key) : (key, value) => !filter(key, value);

		return exports.pick(input, exclusionFilter, options);
	};
	});
	queryString.extract;
	queryString.parse;
	queryString.stringify;
	queryString.parseUrl;
	queryString.stringifyUrl;
	queryString.pick;
	queryString.exclude;

	class ItemFeedMediaItemAPI {
	    constructor() {
	        this.configuration_ = ItemFeedMediaItemAPI.defaultConfiguration;
	    }
	    get configuration() {
	        return this.configuration_;
	    }
	    set configuration(configuration) {
	        this.configuration_ = configuration;
	    }
	    getMediaItems(identifiers, options) {
	        return __awaiter(this, void 0, void 0, function* () {
	            return yield ItemFeedMediaItemAPI.fetchMediaItems(identifiers, options, this.configuration);
	        });
	    }
	    static fetchMediaItems(identifiers, options, configuration) {
	        return __awaiter(this, void 0, void 0, function* () {
	            const ids = identifiers.map(string => new MediaItemIdentifier(string));
	            const { serviceUrl } = configuration;
	            const promiseMediaItems = yield Promise.all(ids.map(id => ItemFeedMediaItemAPI.getPromiseMediaItem(id, serviceUrl)));
	            return promiseMediaItems.filter(result => !(result instanceof Error) && result instanceof MediaItem);
	        });
	    }
	    static getPromiseMediaItem(identifier, serviceUrl) {
	        return __awaiter(this, void 0, void 0, function* () {
	            const params = queryString.stringify({
	                id: identifier.id || identifier.channel,
	            });
	            try {
	                const response = yield fetch(`${serviceUrl}?${params}&requester=guardians`);
	                const json = yield response.json();
	                const mediaItem = mediaItemFromItemFeed(json);
	                return mediaItem;
	            }
	            catch (error) {
	                loglevel.warn(`Failed to retrieve MediaItem from ItemFeed endpoint: ${error}`);
	                return null;
	            }
	        });
	    }
	}
	ItemFeedMediaItemAPI.defaultConfiguration = new Configuration$2(ApiSource$1.itemFeed);

	class UniversalMediaItemAPI {
	    get configuration() {
	        return this.configuration_;
	    }
	    set configuration(configuration) {
	        this.configuration_ = configuration;
	    }
	    getMediaItems(identifiers, options) {
	        return __awaiter(this, void 0, void 0, function* () {
	            const opts = options || { sourceVariant: null };
	            return yield Promise.all(identifiers.map((identifier) => __awaiter(this, void 0, void 0, function* () {
	                let MediaItemAPIClass;
	                let mediaItemForIdentifier;
	                if (identifier.match('natgeo')) {
	                    MediaItemAPIClass = CFAMediaItemAPI;
	                }
	                else if (identifier.match('abcnews')) {
	                    MediaItemAPIClass = ItemFeedMediaItemAPI;
	                }
	                else {
	                    MediaItemAPIClass = GraphQLMediaItemAPI;
	                }
	                const api = new MediaItemAPIClass();
	                api.configuration = this.configuration || api.configuration;
	                try {
	                    const mediaItems = yield api.getMediaItems([identifier], opts);
	                    mediaItemForIdentifier = mediaItems === null || mediaItems === void 0 ? void 0 : mediaItems[0];
	                }
	                catch (err) { }
	                return mediaItemForIdentifier;
	            })));
	        });
	    }
	}

	class Configuration$1 {
	    constructor(serviceUrl, appVersion) {
	        this.serviceUrl = serviceUrl;
	        this.appVersion = appVersion;
	    }
	}
	const defaultServiceUrl$2 = 'https://prod.gatekeeper.us-abc.symphony.edgedatg.com/api/ws/pluto/v1/layout';
	const defaultAppVersion$1 = '1.0.0';
	const defaultConfiguration$1 = new Configuration$1(defaultServiceUrl$2, defaultAppVersion$1);

	class PlutoAPI {
	    constructor(configuration = defaultConfiguration$1) {
	        this.configuration_ = configuration;
	    }
	    getMediaItems(identifiers, options) {
	        return __awaiter(this, void 0, void 0, function* () {
	            return Promise.all(identifiers.map(id => this.getMediaItem(id, options)));
	        });
	    }
	    getMediaItem(identifier, options) {
	        return __awaiter(this, void 0, void 0, function* () {
	            const layoutURL = this.getLayoutURLFromParams(Object.assign(Object.assign({}, options), { identifier: identifier }));
	            const layoutResponse = yield this.getLayout(layoutURL);
	            const videoPlayerModuleResource = layoutResponse.modules.filter(module => {
	                return module.type == 'videoplayer';
	            })[0];
	            if (!videoPlayerModuleResource) {
	                throw new Error('Layout is missing Video Player module');
	            }
	            if (options.type === 'live_player') {
	                videoPlayerModuleResource.resource = videoPlayerModuleResource.resource.replace('{affiliate}', identifier);
	            }
	            const videoPlayer = yield this.getVideoPlayerModule(videoPlayerModuleResource.resource);
	            const mediaItem = this.getMediaItemFromVideoPlayer(videoPlayer);
	            return mediaItem;
	        });
	    }
	    getLayoutURLFromParams(params) {
	        if (!params.brand || !params.device || !params.type) {
	            throw new Error('Cannot create layout url, missing parameters');
	        }
	        const queryParameters = {
	            brand: params.brand,
	            device: params.device,
	        };
	        if (params.type == 'vod_player') {
	            if (!params.identifier) {
	                throw new Error('Cannot create layout url, missing video id');
	            }
	            queryParameters['type'] = 'vod_player';
	            queryParameters['video'] = params.identifier;
	        }
	        if (params.type == 'live_player') {
	            queryParameters['type'] = 'live_player';
	            queryParameters['authlevel'] = '1';
	            queryParameters['affiliate'] = params.identifier || '';
	            params.channel ? (queryParameters['channel'] = params.channel) : null;
	            params.video ? (queryParameters['video'] = params.video) : null;
	        }
	        const query = Object.keys(queryParameters)
	            .map(key => key + '=' + (queryParameters[key] || ''))
	            .join('&');
	        const sep = this.configuration_.serviceUrl.indexOf('?') === -1 ? '?' : '&';
	        return `${this.configuration_.serviceUrl}${sep}${query}`;
	    }
	    getMediaItemFromVideoPlayer(videoPlayerResponse) {
	        if (videoPlayerResponse.video) {
	            return this.getMediaItemForVOD(videoPlayerResponse);
	        }
	        else if (videoPlayerResponse.channels) {
	            return this.getMediaItemForChannel(videoPlayerResponse);
	        }
	    }
	    getMediaItemForChannel(videoPlayerResponse) {
	        var _a;
	        if (videoPlayerResponse.channels.length == 0) {
	            throw new Error('Live video player module has no channels');
	        }
	        const channel = videoPlayerResponse.channels[0];
	        const mediaItem = new MediaItem(channel.id, channel.title, 0, 'en', null);
	        mediaItem.description = channel.description;
	        mediaItem.authenticationTypes =
	            channel.accesslevel == '0' ? [MediaItemAuthenticationType$1.none] : [MediaItemAuthenticationType$1.mvpd];
	        const brand = getBrandFromString(channel.brand);
	        mediaItem.brand = brand;
	        mediaItem.mrss = this.getAdobeMRSS(mediaItem.id, mediaItem.title, brandResourceId(brand), channel.tvrating);
	        mediaItem.streamType = MediaItemStreamType$1.live;
	        mediaItem.type = MediaItemType$1.video;
	        mediaItem.apiSource = ApiSource$1.pluto;
	        mediaItem.availableDate = channel.availdate;
	        mediaItem.network = new MediaItemNetwork(channel.aff, MediaItemNetworkType$1.linear, channel.title, brandResourceId(brand));
	        mediaItem.images = (_a = channel.previews) === null || _a === void 0 ? void 0 : _a.map(image => {
	            return new MediaItemImage(image.value);
	        });
	        return mediaItem;
	    }
	    getMediaItemForVOD(videoPlayerResponse) {
	        const mediaItem = new MediaItem(videoPlayerResponse.video.id, videoPlayerResponse.video.title, videoPlayerResponse.video.duration, videoPlayerResponse.video.show.language, null);
	        mediaItem.description = videoPlayerResponse.video.description;
	        mediaItem.authenticationTypes =
	            videoPlayerResponse.video.accesslevel == '0' ? [MediaItemAuthenticationType$1.none] : [MediaItemAuthenticationType$1.mvpd];
	        const brand = getBrandFromString(videoPlayerResponse.video.brand);
	        mediaItem.brand = brand;
	        mediaItem.mrss = this.getAdobeMRSS(mediaItem.id, mediaItem.title, brandResourceId(brand), videoPlayerResponse.video.rating.value);
	        mediaItem.show = videoPlayerResponse.video.show;
	        mediaItem.cues = videoPlayerResponse.video.cues;
	        mediaItem.adTarget = videoPlayerResponse.video.adTarget;
	        mediaItem.adUnitId = videoPlayerResponse.adUnitId;
	        mediaItem.streamType = MediaItemStreamType$1.onDemand;
	        mediaItem.type = MediaItemType$1.video;
	        mediaItem.apiSource = ApiSource$1.pluto;
	        mediaItem.entityType = videoPlayerResponse.video.type == 'lf' ? MediaItemEntityType$1.longform : MediaItemEntityType$1.shortform;
	        mediaItem.seasonNumber = videoPlayerResponse.video.seasonnumber;
	        mediaItem.episodeNumber = videoPlayerResponse.video.episodenumber;
	        mediaItem.videoShowGenre = videoPlayerResponse.video.show.genre;
	        mediaItem.tmsid = videoPlayerResponse.video.tmsid;
	        mediaItem.availableDate = videoPlayerResponse.video.availableDate;
	        mediaItem.airDate = videoPlayerResponse.video.displayAirtime;
	        mediaItem.images = videoPlayerResponse.images.map(image => {
	            return new MediaItemImage(image.value);
	        });
	        return mediaItem;
	    }
	    getLayout(url) {
	        return __awaiter(this, void 0, void 0, function* () {
	            const headers = {
	                appversion: this.configuration_.appVersion,
	            };
	            const options = {
	                headers,
	            };
	            return fetch(url, options)
	                .then(response => {
	                if (!response.ok) {
	                    throw response;
	                }
	                return response.json();
	            })
	                .then(json => {
	                return json;
	            });
	        });
	    }
	    getVideoPlayerModule(url) {
	        return __awaiter(this, void 0, void 0, function* () {
	            const headers = {
	                appversion: this.configuration_.appVersion,
	            };
	            const options = {
	                headers,
	            };
	            return fetch(url, options)
	                .then(response => {
	                if (!response.ok) {
	                    throw response;
	                }
	                return response.json();
	            })
	                .then(json => {
	                return json;
	            });
	        });
	    }
	    getAdobeMRSS(mediaId, mediaTitle, resourceId, mediaRating) {
	        let urn = 'urn:mpaa';
	        if (!mediaRating || mediaRating.length === 0) {
	            mediaRating = 'TV-Y';
	        }
	        if (mediaRating.indexOf('TV-') === 0) {
	            urn = 'urn:v-chip';
	        }
	        const sanitizedMediaId = this.xmlSanitize(mediaId);
	        const sanitizedMediaTitle = this.xmlSanitize(mediaTitle);
	        const sanitizedResourceId = this.xmlSanitize(resourceId);
	        const sanitizedUrn = this.xmlSanitize(urn);
	        const sanitizedMediaRating = this.xmlSanitize(mediaRating);
	        let resource = '<rss version="2.0" xmlns:media="http://search.yahoo.com/mrss/"><channel>';
	        resource += '<title>' + sanitizedResourceId + '</title>';
	        resource += '<item>';
	        resource += '<title><![CDATA[' + sanitizedMediaTitle + ']]></title>';
	        resource += '<guid>' + sanitizedMediaId + '</guid>';
	        resource += '<media:rating scheme="' + sanitizedUrn + '">' + sanitizedMediaRating + '</media:rating>';
	        resource += '</item></channel></rss>';
	        return resource;
	    }
	    xmlSanitize(string) {
	        let xmlString = string.replace('&', '&amp;');
	        xmlString = xmlString.replace('<', '&lt;');
	        xmlString = xmlString.replace('>', '&gt;');
	        xmlString = xmlString.replace('"', '&quot;');
	        xmlString = xmlString.replace("'", '&apos;');
	        return xmlString;
	    }
	}

	

	class PlaybackSession {
	    constructor(playbackUrl) {
	        this.playbackUrl = playbackUrl;
	        this.textTracks = [];
	    }
	    get convivaContentMetadata() {
	        const custom = {
	            accessType: null,
	            mvpd: null,
	        };
	        if (this.authenticationType) {
	            custom.accessType = (this.authenticationType && this.authenticationType.toLowerCase()) || 'free';
	            if (this.authenticatedProvider && this.authenticationType === MediaItemAuthenticationType$1.mvpd) {
	                custom.mvpd = this.authenticatedProvider.id;
	            }
	        }
	        const mediaItemMetadata = (this.mediaItem && this.mediaItem.tracking[MediaItemTrackingType$1.conviva]) || {};
	        const metadata = {
	            streamUrl: this.playbackUrl,
	            custom: Object.assign(mediaItemMetadata.custom || {}, custom),
	        };
	        return Object.assign(mediaItemMetadata, metadata);
	    }
	    toString() {
	        return (`<PlaybackSession playbackUrl:${this.playbackUrl}, ` +
	            `authenticationType:${this.authenticationType}, ` +
	            `authenticatedProvider:${this.authenticatedProvider}>`);
	    }
	}

	var DRMKeySystem;
	(function (DRMKeySystem) {
	    DRMKeySystem["none"] = "none";
	    DRMKeySystem["fairPlay"] = "fairplay";
	    DRMKeySystem["playReady"] = "playready";
	    DRMKeySystem["widevine"] = "widevine";
	})(DRMKeySystem || (DRMKeySystem = {}));
	var DRMKeySystem$1 = DRMKeySystem;

	var DRMSupport;
	(function (DRMSupport) {
	    DRMSupport["none"] = "HLS";
	    DRMSupport["hlsFairplay"] = "HLS_FAIRPLAY";
	    DRMSupport["dashPlayReady"] = "DASH_PLAYREADY";
	    DRMSupport["dashWidevine"] = "DASH_WIDEVINE";
	})(DRMSupport || (DRMSupport = {}));
	var DRMSupport$1 = DRMSupport;

	const appendKeyValueToUrl = function appendParamToUrl(key, value, url) {
	    const sep = url.indexOf('?') === -1 ? '?' : '&';
	    return `${url + sep + key}=${encodeURIComponent(value)}`;
	};
	class ClipPlaybackSessionFactory {
	    initPlaybackSession(mediaItem, advertisingInfo, authorizationPayload) {
	        let playbackUrl = mediaItem.source.url;
	        if (mediaItem.source.variant === MediaItemSourceVariant$1.stitchedPreroll) {
	            const adInfoDictionary = advertisingInfo.dictionaryForBrightcove();
	            Object.keys(adInfoDictionary).forEach(key => {
	                playbackUrl = appendKeyValueToUrl(key, adInfoDictionary[key].toString(), playbackUrl);
	            });
	        }
	        loglevel.debug(playbackUrl, mediaItem);
	        const session = new PlaybackSession(playbackUrl);
	        session.mediaItem = mediaItem;
	        session.seekToTime = mediaItem.seekInSeconds;
	        session.authenticationType = authorizationPayload.authenticationType;
	        session.authenticatedProvider = authorizationPayload.authenticatedProvider;
	        session.authenticatedIdentity = authorizationPayload.authenticatedIdentity;
	        return Promise.resolve(session);
	    }
	}

	var core = createCommonjsModule(function (module, exports) {
	(function (root, factory) {
		{
			// CommonJS
			module.exports = factory();
		}
	}(commonjsGlobal, function () {

		/**
		 * CryptoJS core components.
		 */
		var CryptoJS = CryptoJS || (function (Math, undefined$1) {
		    /*
		     * Local polyfil of Object.create
		     */
		    var create = Object.create || (function () {
		        function F() {}
		        return function (obj) {
		            var subtype;

		            F.prototype = obj;

		            subtype = new F();

		            F.prototype = null;

		            return subtype;
		        };
		    }());

		    /**
		     * CryptoJS namespace.
		     */
		    var C = {};

		    /**
		     * Library namespace.
		     */
		    var C_lib = C.lib = {};

		    /**
		     * Base object for prototypal inheritance.
		     */
		    var Base = C_lib.Base = (function () {


		        return {
		            /**
		             * Creates a new object that inherits from this object.
		             *
		             * @param {Object} overrides Properties to copy into the new object.
		             *
		             * @return {Object} The new object.
		             *
		             * @static
		             *
		             * @example
		             *
		             *     var MyType = CryptoJS.lib.Base.extend({
		             *         field: 'value',
		             *
		             *         method: function () {
		             *         }
		             *     });
		             */
		            extend: function (overrides) {
		                // Spawn
		                var subtype = create(this);

		                // Augment
		                if (overrides) {
		                    subtype.mixIn(overrides);
		                }

		                // Create default initializer
		                if (!subtype.hasOwnProperty('init') || this.init === subtype.init) {
		                    subtype.init = function () {
		                        subtype.$super.init.apply(this, arguments);
		                    };
		                }

		                // Initializer's prototype is the subtype object
		                subtype.init.prototype = subtype;

		                // Reference supertype
		                subtype.$super = this;

		                return subtype;
		            },

		            /**
		             * Extends this object and runs the init method.
		             * Arguments to create() will be passed to init().
		             *
		             * @return {Object} The new object.
		             *
		             * @static
		             *
		             * @example
		             *
		             *     var instance = MyType.create();
		             */
		            create: function () {
		                var instance = this.extend();
		                instance.init.apply(instance, arguments);

		                return instance;
		            },

		            /**
		             * Initializes a newly created object.
		             * Override this method to add some logic when your objects are created.
		             *
		             * @example
		             *
		             *     var MyType = CryptoJS.lib.Base.extend({
		             *         init: function () {
		             *             // ...
		             *         }
		             *     });
		             */
		            init: function () {
		            },

		            /**
		             * Copies properties into this object.
		             *
		             * @param {Object} properties The properties to mix in.
		             *
		             * @example
		             *
		             *     MyType.mixIn({
		             *         field: 'value'
		             *     });
		             */
		            mixIn: function (properties) {
		                for (var propertyName in properties) {
		                    if (properties.hasOwnProperty(propertyName)) {
		                        this[propertyName] = properties[propertyName];
		                    }
		                }

		                // IE won't copy toString using the loop above
		                if (properties.hasOwnProperty('toString')) {
		                    this.toString = properties.toString;
		                }
		            },

		            /**
		             * Creates a copy of this object.
		             *
		             * @return {Object} The clone.
		             *
		             * @example
		             *
		             *     var clone = instance.clone();
		             */
		            clone: function () {
		                return this.init.prototype.extend(this);
		            }
		        };
		    }());

		    /**
		     * An array of 32-bit words.
		     *
		     * @property {Array} words The array of 32-bit words.
		     * @property {number} sigBytes The number of significant bytes in this word array.
		     */
		    var WordArray = C_lib.WordArray = Base.extend({
		        /**
		         * Initializes a newly created word array.
		         *
		         * @param {Array} words (Optional) An array of 32-bit words.
		         * @param {number} sigBytes (Optional) The number of significant bytes in the words.
		         *
		         * @example
		         *
		         *     var wordArray = CryptoJS.lib.WordArray.create();
		         *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607]);
		         *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607], 6);
		         */
		        init: function (words, sigBytes) {
		            words = this.words = words || [];

		            if (sigBytes != undefined$1) {
		                this.sigBytes = sigBytes;
		            } else {
		                this.sigBytes = words.length * 4;
		            }
		        },

		        /**
		         * Converts this word array to a string.
		         *
		         * @param {Encoder} encoder (Optional) The encoding strategy to use. Default: CryptoJS.enc.Hex
		         *
		         * @return {string} The stringified word array.
		         *
		         * @example
		         *
		         *     var string = wordArray + '';
		         *     var string = wordArray.toString();
		         *     var string = wordArray.toString(CryptoJS.enc.Utf8);
		         */
		        toString: function (encoder) {
		            return (encoder || Hex).stringify(this);
		        },

		        /**
		         * Concatenates a word array to this word array.
		         *
		         * @param {WordArray} wordArray The word array to append.
		         *
		         * @return {WordArray} This word array.
		         *
		         * @example
		         *
		         *     wordArray1.concat(wordArray2);
		         */
		        concat: function (wordArray) {
		            // Shortcuts
		            var thisWords = this.words;
		            var thatWords = wordArray.words;
		            var thisSigBytes = this.sigBytes;
		            var thatSigBytes = wordArray.sigBytes;

		            // Clamp excess bits
		            this.clamp();

		            // Concat
		            if (thisSigBytes % 4) {
		                // Copy one byte at a time
		                for (var i = 0; i < thatSigBytes; i++) {
		                    var thatByte = (thatWords[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
		                    thisWords[(thisSigBytes + i) >>> 2] |= thatByte << (24 - ((thisSigBytes + i) % 4) * 8);
		                }
		            } else {
		                // Copy one word at a time
		                for (var i = 0; i < thatSigBytes; i += 4) {
		                    thisWords[(thisSigBytes + i) >>> 2] = thatWords[i >>> 2];
		                }
		            }
		            this.sigBytes += thatSigBytes;

		            // Chainable
		            return this;
		        },

		        /**
		         * Removes insignificant bits.
		         *
		         * @example
		         *
		         *     wordArray.clamp();
		         */
		        clamp: function () {
		            // Shortcuts
		            var words = this.words;
		            var sigBytes = this.sigBytes;

		            // Clamp
		            words[sigBytes >>> 2] &= 0xffffffff << (32 - (sigBytes % 4) * 8);
		            words.length = Math.ceil(sigBytes / 4);
		        },

		        /**
		         * Creates a copy of this word array.
		         *
		         * @return {WordArray} The clone.
		         *
		         * @example
		         *
		         *     var clone = wordArray.clone();
		         */
		        clone: function () {
		            var clone = Base.clone.call(this);
		            clone.words = this.words.slice(0);

		            return clone;
		        },

		        /**
		         * Creates a word array filled with random bytes.
		         *
		         * @param {number} nBytes The number of random bytes to generate.
		         *
		         * @return {WordArray} The random word array.
		         *
		         * @static
		         *
		         * @example
		         *
		         *     var wordArray = CryptoJS.lib.WordArray.random(16);
		         */
		        random: function (nBytes) {
		            var words = [];

		            var r = (function (m_w) {
		                var m_w = m_w;
		                var m_z = 0x3ade68b1;
		                var mask = 0xffffffff;

		                return function () {
		                    m_z = (0x9069 * (m_z & 0xFFFF) + (m_z >> 0x10)) & mask;
		                    m_w = (0x4650 * (m_w & 0xFFFF) + (m_w >> 0x10)) & mask;
		                    var result = ((m_z << 0x10) + m_w) & mask;
		                    result /= 0x100000000;
		                    result += 0.5;
		                    return result * (Math.random() > .5 ? 1 : -1);
		                }
		            });

		            for (var i = 0, rcache; i < nBytes; i += 4) {
		                var _r = r((rcache || Math.random()) * 0x100000000);

		                rcache = _r() * 0x3ade67b7;
		                words.push((_r() * 0x100000000) | 0);
		            }

		            return new WordArray.init(words, nBytes);
		        }
		    });

		    /**
		     * Encoder namespace.
		     */
		    var C_enc = C.enc = {};

		    /**
		     * Hex encoding strategy.
		     */
		    var Hex = C_enc.Hex = {
		        /**
		         * Converts a word array to a hex string.
		         *
		         * @param {WordArray} wordArray The word array.
		         *
		         * @return {string} The hex string.
		         *
		         * @static
		         *
		         * @example
		         *
		         *     var hexString = CryptoJS.enc.Hex.stringify(wordArray);
		         */
		        stringify: function (wordArray) {
		            // Shortcuts
		            var words = wordArray.words;
		            var sigBytes = wordArray.sigBytes;

		            // Convert
		            var hexChars = [];
		            for (var i = 0; i < sigBytes; i++) {
		                var bite = (words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
		                hexChars.push((bite >>> 4).toString(16));
		                hexChars.push((bite & 0x0f).toString(16));
		            }

		            return hexChars.join('');
		        },

		        /**
		         * Converts a hex string to a word array.
		         *
		         * @param {string} hexStr The hex string.
		         *
		         * @return {WordArray} The word array.
		         *
		         * @static
		         *
		         * @example
		         *
		         *     var wordArray = CryptoJS.enc.Hex.parse(hexString);
		         */
		        parse: function (hexStr) {
		            // Shortcut
		            var hexStrLength = hexStr.length;

		            // Convert
		            var words = [];
		            for (var i = 0; i < hexStrLength; i += 2) {
		                words[i >>> 3] |= parseInt(hexStr.substr(i, 2), 16) << (24 - (i % 8) * 4);
		            }

		            return new WordArray.init(words, hexStrLength / 2);
		        }
		    };

		    /**
		     * Latin1 encoding strategy.
		     */
		    var Latin1 = C_enc.Latin1 = {
		        /**
		         * Converts a word array to a Latin1 string.
		         *
		         * @param {WordArray} wordArray The word array.
		         *
		         * @return {string} The Latin1 string.
		         *
		         * @static
		         *
		         * @example
		         *
		         *     var latin1String = CryptoJS.enc.Latin1.stringify(wordArray);
		         */
		        stringify: function (wordArray) {
		            // Shortcuts
		            var words = wordArray.words;
		            var sigBytes = wordArray.sigBytes;

		            // Convert
		            var latin1Chars = [];
		            for (var i = 0; i < sigBytes; i++) {
		                var bite = (words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
		                latin1Chars.push(String.fromCharCode(bite));
		            }

		            return latin1Chars.join('');
		        },

		        /**
		         * Converts a Latin1 string to a word array.
		         *
		         * @param {string} latin1Str The Latin1 string.
		         *
		         * @return {WordArray} The word array.
		         *
		         * @static
		         *
		         * @example
		         *
		         *     var wordArray = CryptoJS.enc.Latin1.parse(latin1String);
		         */
		        parse: function (latin1Str) {
		            // Shortcut
		            var latin1StrLength = latin1Str.length;

		            // Convert
		            var words = [];
		            for (var i = 0; i < latin1StrLength; i++) {
		                words[i >>> 2] |= (latin1Str.charCodeAt(i) & 0xff) << (24 - (i % 4) * 8);
		            }

		            return new WordArray.init(words, latin1StrLength);
		        }
		    };

		    /**
		     * UTF-8 encoding strategy.
		     */
		    var Utf8 = C_enc.Utf8 = {
		        /**
		         * Converts a word array to a UTF-8 string.
		         *
		         * @param {WordArray} wordArray The word array.
		         *
		         * @return {string} The UTF-8 string.
		         *
		         * @static
		         *
		         * @example
		         *
		         *     var utf8String = CryptoJS.enc.Utf8.stringify(wordArray);
		         */
		        stringify: function (wordArray) {
		            try {
		                return decodeURIComponent(escape(Latin1.stringify(wordArray)));
		            } catch (e) {
		                throw new Error('Malformed UTF-8 data');
		            }
		        },

		        /**
		         * Converts a UTF-8 string to a word array.
		         *
		         * @param {string} utf8Str The UTF-8 string.
		         *
		         * @return {WordArray} The word array.
		         *
		         * @static
		         *
		         * @example
		         *
		         *     var wordArray = CryptoJS.enc.Utf8.parse(utf8String);
		         */
		        parse: function (utf8Str) {
		            return Latin1.parse(unescape(encodeURIComponent(utf8Str)));
		        }
		    };

		    /**
		     * Abstract buffered block algorithm template.
		     *
		     * The property blockSize must be implemented in a concrete subtype.
		     *
		     * @property {number} _minBufferSize The number of blocks that should be kept unprocessed in the buffer. Default: 0
		     */
		    var BufferedBlockAlgorithm = C_lib.BufferedBlockAlgorithm = Base.extend({
		        /**
		         * Resets this block algorithm's data buffer to its initial state.
		         *
		         * @example
		         *
		         *     bufferedBlockAlgorithm.reset();
		         */
		        reset: function () {
		            // Initial values
		            this._data = new WordArray.init();
		            this._nDataBytes = 0;
		        },

		        /**
		         * Adds new data to this block algorithm's buffer.
		         *
		         * @param {WordArray|string} data The data to append. Strings are converted to a WordArray using UTF-8.
		         *
		         * @example
		         *
		         *     bufferedBlockAlgorithm._append('data');
		         *     bufferedBlockAlgorithm._append(wordArray);
		         */
		        _append: function (data) {
		            // Convert string to WordArray, else assume WordArray already
		            if (typeof data == 'string') {
		                data = Utf8.parse(data);
		            }

		            // Append
		            this._data.concat(data);
		            this._nDataBytes += data.sigBytes;
		        },

		        /**
		         * Processes available data blocks.
		         *
		         * This method invokes _doProcessBlock(offset), which must be implemented by a concrete subtype.
		         *
		         * @param {boolean} doFlush Whether all blocks and partial blocks should be processed.
		         *
		         * @return {WordArray} The processed data.
		         *
		         * @example
		         *
		         *     var processedData = bufferedBlockAlgorithm._process();
		         *     var processedData = bufferedBlockAlgorithm._process(!!'flush');
		         */
		        _process: function (doFlush) {
		            // Shortcuts
		            var data = this._data;
		            var dataWords = data.words;
		            var dataSigBytes = data.sigBytes;
		            var blockSize = this.blockSize;
		            var blockSizeBytes = blockSize * 4;

		            // Count blocks ready
		            var nBlocksReady = dataSigBytes / blockSizeBytes;
		            if (doFlush) {
		                // Round up to include partial blocks
		                nBlocksReady = Math.ceil(nBlocksReady);
		            } else {
		                // Round down to include only full blocks,
		                // less the number of blocks that must remain in the buffer
		                nBlocksReady = Math.max((nBlocksReady | 0) - this._minBufferSize, 0);
		            }

		            // Count words ready
		            var nWordsReady = nBlocksReady * blockSize;

		            // Count bytes ready
		            var nBytesReady = Math.min(nWordsReady * 4, dataSigBytes);

		            // Process blocks
		            if (nWordsReady) {
		                for (var offset = 0; offset < nWordsReady; offset += blockSize) {
		                    // Perform concrete-algorithm logic
		                    this._doProcessBlock(dataWords, offset);
		                }

		                // Remove processed words
		                var processedWords = dataWords.splice(0, nWordsReady);
		                data.sigBytes -= nBytesReady;
		            }

		            // Return processed words
		            return new WordArray.init(processedWords, nBytesReady);
		        },

		        /**
		         * Creates a copy of this object.
		         *
		         * @return {Object} The clone.
		         *
		         * @example
		         *
		         *     var clone = bufferedBlockAlgorithm.clone();
		         */
		        clone: function () {
		            var clone = Base.clone.call(this);
		            clone._data = this._data.clone();

		            return clone;
		        },

		        _minBufferSize: 0
		    });

		    /**
		     * Abstract hasher template.
		     *
		     * @property {number} blockSize The number of 32-bit words this hasher operates on. Default: 16 (512 bits)
		     */
		    C_lib.Hasher = BufferedBlockAlgorithm.extend({
		        /**
		         * Configuration options.
		         */
		        cfg: Base.extend(),

		        /**
		         * Initializes a newly created hasher.
		         *
		         * @param {Object} cfg (Optional) The configuration options to use for this hash computation.
		         *
		         * @example
		         *
		         *     var hasher = CryptoJS.algo.SHA256.create();
		         */
		        init: function (cfg) {
		            // Apply config defaults
		            this.cfg = this.cfg.extend(cfg);

		            // Set initial values
		            this.reset();
		        },

		        /**
		         * Resets this hasher to its initial state.
		         *
		         * @example
		         *
		         *     hasher.reset();
		         */
		        reset: function () {
		            // Reset data buffer
		            BufferedBlockAlgorithm.reset.call(this);

		            // Perform concrete-hasher logic
		            this._doReset();
		        },

		        /**
		         * Updates this hasher with a message.
		         *
		         * @param {WordArray|string} messageUpdate The message to append.
		         *
		         * @return {Hasher} This hasher.
		         *
		         * @example
		         *
		         *     hasher.update('message');
		         *     hasher.update(wordArray);
		         */
		        update: function (messageUpdate) {
		            // Append
		            this._append(messageUpdate);

		            // Update the hash
		            this._process();

		            // Chainable
		            return this;
		        },

		        /**
		         * Finalizes the hash computation.
		         * Note that the finalize operation is effectively a destructive, read-once operation.
		         *
		         * @param {WordArray|string} messageUpdate (Optional) A final message update.
		         *
		         * @return {WordArray} The hash.
		         *
		         * @example
		         *
		         *     var hash = hasher.finalize();
		         *     var hash = hasher.finalize('message');
		         *     var hash = hasher.finalize(wordArray);
		         */
		        finalize: function (messageUpdate) {
		            // Final message update
		            if (messageUpdate) {
		                this._append(messageUpdate);
		            }

		            // Perform concrete-hasher logic
		            var hash = this._doFinalize();

		            return hash;
		        },

		        blockSize: 512/32,

		        /**
		         * Creates a shortcut function to a hasher's object interface.
		         *
		         * @param {Hasher} hasher The hasher to create a helper for.
		         *
		         * @return {Function} The shortcut function.
		         *
		         * @static
		         *
		         * @example
		         *
		         *     var SHA256 = CryptoJS.lib.Hasher._createHelper(CryptoJS.algo.SHA256);
		         */
		        _createHelper: function (hasher) {
		            return function (message, cfg) {
		                return new hasher.init(cfg).finalize(message);
		            };
		        },

		        /**
		         * Creates a shortcut function to the HMAC's object interface.
		         *
		         * @param {Hasher} hasher The hasher to use in this HMAC helper.
		         *
		         * @return {Function} The shortcut function.
		         *
		         * @static
		         *
		         * @example
		         *
		         *     var HmacSHA256 = CryptoJS.lib.Hasher._createHmacHelper(CryptoJS.algo.SHA256);
		         */
		        _createHmacHelper: function (hasher) {
		            return function (message, key) {
		                return new C_algo.HMAC.init(hasher, key).finalize(message);
		            };
		        }
		    });

		    /**
		     * Algorithm namespace.
		     */
		    var C_algo = C.algo = {};

		    return C;
		}(Math));


		return CryptoJS;

	}));
	});

	var encBase64 = createCommonjsModule(function (module, exports) {
	(function (root, factory) {
		{
			// CommonJS
			module.exports = factory(core);
		}
	}(commonjsGlobal, function (CryptoJS) {

		(function () {
		    // Shortcuts
		    var C = CryptoJS;
		    var C_lib = C.lib;
		    var WordArray = C_lib.WordArray;
		    var C_enc = C.enc;

		    /**
		     * Base64 encoding strategy.
		     */
		    C_enc.Base64 = {
		        /**
		         * Converts a word array to a Base64 string.
		         *
		         * @param {WordArray} wordArray The word array.
		         *
		         * @return {string} The Base64 string.
		         *
		         * @static
		         *
		         * @example
		         *
		         *     var base64String = CryptoJS.enc.Base64.stringify(wordArray);
		         */
		        stringify: function (wordArray) {
		            // Shortcuts
		            var words = wordArray.words;
		            var sigBytes = wordArray.sigBytes;
		            var map = this._map;

		            // Clamp excess bits
		            wordArray.clamp();

		            // Convert
		            var base64Chars = [];
		            for (var i = 0; i < sigBytes; i += 3) {
		                var byte1 = (words[i >>> 2]       >>> (24 - (i % 4) * 8))       & 0xff;
		                var byte2 = (words[(i + 1) >>> 2] >>> (24 - ((i + 1) % 4) * 8)) & 0xff;
		                var byte3 = (words[(i + 2) >>> 2] >>> (24 - ((i + 2) % 4) * 8)) & 0xff;

		                var triplet = (byte1 << 16) | (byte2 << 8) | byte3;

		                for (var j = 0; (j < 4) && (i + j * 0.75 < sigBytes); j++) {
		                    base64Chars.push(map.charAt((triplet >>> (6 * (3 - j))) & 0x3f));
		                }
		            }

		            // Add padding
		            var paddingChar = map.charAt(64);
		            if (paddingChar) {
		                while (base64Chars.length % 4) {
		                    base64Chars.push(paddingChar);
		                }
		            }

		            return base64Chars.join('');
		        },

		        /**
		         * Converts a Base64 string to a word array.
		         *
		         * @param {string} base64Str The Base64 string.
		         *
		         * @return {WordArray} The word array.
		         *
		         * @static
		         *
		         * @example
		         *
		         *     var wordArray = CryptoJS.enc.Base64.parse(base64String);
		         */
		        parse: function (base64Str) {
		            // Shortcuts
		            var base64StrLength = base64Str.length;
		            var map = this._map;
		            var reverseMap = this._reverseMap;

		            if (!reverseMap) {
		                    reverseMap = this._reverseMap = [];
		                    for (var j = 0; j < map.length; j++) {
		                        reverseMap[map.charCodeAt(j)] = j;
		                    }
		            }

		            // Ignore padding
		            var paddingChar = map.charAt(64);
		            if (paddingChar) {
		                var paddingIndex = base64Str.indexOf(paddingChar);
		                if (paddingIndex !== -1) {
		                    base64StrLength = paddingIndex;
		                }
		            }

		            // Convert
		            return parseLoop(base64Str, base64StrLength, reverseMap);

		        },

		        _map: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='
		    };

		    function parseLoop(base64Str, base64StrLength, reverseMap) {
		      var words = [];
		      var nBytes = 0;
		      for (var i = 0; i < base64StrLength; i++) {
		          if (i % 4) {
		              var bits1 = reverseMap[base64Str.charCodeAt(i - 1)] << ((i % 4) * 2);
		              var bits2 = reverseMap[base64Str.charCodeAt(i)] >>> (6 - (i % 4) * 2);
		              words[nBytes >>> 2] |= (bits1 | bits2) << (24 - (nBytes % 4) * 8);
		              nBytes++;
		          }
		      }
		      return WordArray.create(words, nBytes);
		    }
		}());


		return CryptoJS.enc.Base64;

	}));
	});

	var encUtf8 = createCommonjsModule(function (module, exports) {
	(function (root, factory) {
		{
			// CommonJS
			module.exports = factory(core);
		}
	}(commonjsGlobal, function (CryptoJS) {

		return CryptoJS.enc.Utf8;

	}));
	});

	function buildAuthorizationHeaders(appId) {
	    const credentials = `${appId}:`;
	    const authorizationHeader = `Basic ${encBase64.stringify(encUtf8.parse(credentials))}`;
	    const requestHeaders = {
	        Authorization: authorizationHeader,
	        Accept: 'application/json',
	    };
	    return requestHeaders;
	}

	const CONCURRENCY_MONITOR_METADATA_STORAGE_KEY = 'AdobeCM.metadata';
	const DEFAULT_SERVICE_URL = 'https://streams.adobeprimetime.com/v2';
	const ContentType = {
	    live: 'live',
	    vod: 'vod',
	};
	const MetadataKeys = {
	    accountId: 'accountId',
	    applicationId: 'applicationId',
	    applicationPlatform: 'applicationPlatform',
	    channel: 'channel',
	    contentType: 'contentType',
	    contractType: 'contractType',
	    deviceModel: 'deviceModel',
	    hba: 'hba',
	    mobileDevice: 'mobileDevice',
	    programmerName: 'programmerName',
	    osName: 'osName',
	    ship: 'ship',
	    region: 'region',
	};

	class AdobeConcurrencyMonitor {
	    constructor(programmer, applicationId, identityProvider, subject, metadata) {
	        if (!applicationId || !identityProvider || !subject) {
	            return;
	        }
	        this.programmer = programmer;
	        this.applicationId = applicationId;
	        this.identityProvider = encodeURIComponent(identityProvider);
	        this.subject = encodeURIComponent(subject);
	        this.metadata = metadata || {};
	        this.serviceUrl = DEFAULT_SERVICE_URL;
	        this.requestHeaders = buildAuthorizationHeaders(applicationId);
	        this.heartbeatIntervalId = null;
	        this.messages = {};
	    }
	    static fetchMetadataKeys(applicationId, serviceUrl) {
	        return __awaiter(this, void 0, void 0, function* () {
	            const url = `${serviceUrl}/metadata`;
	            const headers = buildAuthorizationHeaders(applicationId);
	            const options = { method: 'GET', headers };
	            try {
	                const response = yield fetch(url, options);
	                if (response) {
	                    const json = yield response.json();
	                    AdobeConcurrencyMonitor.setLocalStorageByAppID(json, applicationId);
	                    return true;
	                }
	                return false;
	            }
	            catch (err) {
	                console.log(`fetchMetadataKeys error: ${err}`);
	                return false;
	            }
	        });
	    }
	    static setLocalStorageByAppID(json, applicationId) {
	        const key = `${CONCURRENCY_MONITOR_METADATA_STORAGE_KEY}.${applicationId}`;
	        localStorage.setItem(key, JSON.stringify(json));
	    }
	    get metadataKeys() {
	        return this.getMetadataKeysFromLocalStorage_(this.applicationId);
	    }
	    getMetadataKeysFromLocalStorage_(applicationId) {
	        const key = `${CONCURRENCY_MONITOR_METADATA_STORAGE_KEY}.${applicationId}`;
	        let metadataKeys = [];
	        try {
	            metadataKeys = JSON.parse(localStorage.getItem(key)) || [];
	        }
	        catch (err) {
	            console.error(`AdobeCM getMetadataKeys error: ${err}`);
	        }
	        return metadataKeys;
	    }
	    start() {
	        return __awaiter(this, void 0, void 0, function* () {
	            const sessionId = yield this.createSession();
	            if (!sessionId) {
	                return null;
	            }
	            this.scheduleHeartbeat();
	            return sessionId;
	        });
	    }
	    startWithSession(sessionId) {
	        this.sessionId = sessionId;
	        this.scheduleHeartbeat();
	    }
	    stop() {
	        if (this.heartbeatIntervalId) {
	            clearInterval(this.heartbeatIntervalId);
	            this.heartbeatIntervalId = null;
	        }
	        this.terminateSession();
	    }
	    createSession(sessionsToTerminate = []) {
	        return __awaiter(this, void 0, void 0, function* () {
	            loglevel.debug('AdobeConcurrencyMonitorV2.createSession');
	            const requestUrl = `${this.serviceUrl}/sessions/${this.identityProvider}/${this.subject}`;
	            const headers = Object.assign({ 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' }, this.requestHeaders);
	            if (sessionsToTerminate.length > 0) {
	                headers['X-Terminate'] = sessionsToTerminate.join(',');
	            }
	            const parameters = this.getMetadata();
	            const body = Object.keys(parameters)
	                .map(key => `${key}=${encodeURIComponent(parameters[key])}`)
	                .join('&');
	            const options = { method: 'POST', headers, body };
	            try {
	                const res = yield this.fetchRequest(requestUrl, options, true);
	                if (!res) {
	                    throw 'fetchRequest failed';
	                }
	                const { sessionId } = res;
	                if (sessionId) {
	                    this.sessionId = sessionId;
	                    loglevel.debug('AdobeConcurrencyMonitorV2.createSession sessionId:', sessionId);
	                    return sessionId;
	                }
	                const { status, json } = res;
	                throw {
	                    status,
	                    json,
	                };
	            }
	            catch (err) {
	                loglevel.error('AdobeConcurrencyMonitorV2.createSession error: ', err);
	                return yield this.handleError(err, false);
	            }
	        });
	    }
	    heartbeat() {
	        return __awaiter(this, void 0, void 0, function* () {
	            const { sessionId } = this;
	            if (!sessionId) {
	                return;
	            }
	            loglevel.debug('AdobeConcurrencyMonitorV2.heartbeat', sessionId);
	            const requestUrl = `${this.serviceUrl}/sessions/${this.identityProvider}/${this.subject}/${sessionId}`;
	            const options = { method: 'POST', headers: this.requestHeaders };
	            try {
	                const res = yield this.fetchRequest(requestUrl, options, false);
	                if (!res) {
	                    throw 'fetchRequest failed';
	                }
	                if (res.error) {
	                    const { status, json } = res;
	                    throw {
	                        status,
	                        json,
	                    };
	                }
	                this.scheduleHeartbeat();
	            }
	            catch (err) {
	                loglevel.error('AdobeConcurrencyMonitorV2.heartbeat error: ', err);
	                return this.handleError(err, true);
	            }
	        });
	    }
	    scheduleHeartbeat() {
	        loglevel.debug('AdobeConcurrencyMonitorV2.scheduleHeartbeat');
	        clearTimeout(this.heartbeatIntervalId);
	        this.heartbeatIntervalId = window.setTimeout(() => {
	            this.heartbeat();
	        }, 45000);
	    }
	    fetchRequest(requestUrl, options, isSessionRequest) {
	        return __awaiter(this, void 0, void 0, function* () {
	            try {
	                const response = yield fetch(requestUrl, options);
	                const { status } = response;
	                if (!(status >= 200 && status < 300)) {
	                    const json = yield response
	                        .clone()
	                        .json()
	                        .catch(() => !!response.text() || null);
	                    return {
	                        status,
	                        json,
	                        error: true,
	                    };
	                }
	                let sessionId;
	                if (isSessionRequest) {
	                    sessionId = response.headers.get('location').trim();
	                }
	                return {
	                    sessionId,
	                    status,
	                    error: false,
	                };
	            }
	            catch (err) {
	                console.error(`AdobeCM fetchRequest: ${err}`);
	                if (err && err.status === 409 && typeof err.json === 'function') {
	                    const json = yield err.json();
	                    return {
	                        status: 409,
	                        json,
	                        error: true,
	                    };
	                }
	                return err;
	            }
	        });
	    }
	    terminateSession() {
	        return __awaiter(this, void 0, void 0, function* () {
	            const { sessionId } = this;
	            if (!sessionId) {
	                return;
	            }
	            try {
	                const requestUrl = `${this.serviceUrl}/sessions/${this.identityProvider}/${this.subject}/${sessionId}`;
	                const response = yield fetch(requestUrl, { method: 'DELETE', headers: this.requestHeaders });
	                const { status } = response;
	                if (!(status >= 200 && status < 300)) {
	                    throw new Error(`Error - url: ${requestUrl}, status: ${status}`);
	                }
	            }
	            catch (err) {
	                console.error(`AdobeCM TerminateSession ${err}`);
	            }
	        });
	    }
	    handleError(response, shouldShowCustomError) {
	        loglevel.debug('AdobeConcurrencyMonitorV2.handleError', response);
	        const { status, json } = response;
	        switch (status) {
	            case 400:
	                return this.handleError400_(json);
	            case 409:
	                return this.handleError409_(json, shouldShowCustomError);
	            case 410:
	                return this.handleError410_(json, shouldShowCustomError);
	        }
	    }
	    handleError400_(json) {
	        return __awaiter(this, void 0, void 0, function* () {
	            const obligations = (json && json.obligations) || [];
	            const hasRefreshObligation = !!obligations.find((obl) => obl.action === 'logout' || obl.action === 'refresh');
	            if (hasRefreshObligation) {
	                yield AdobeConcurrencyMonitor.fetchMetadataKeys(this.applicationId, this.serviceUrl);
	                const { metadata } = this;
	                if (Object.keys(metadata).length >= this.metadataKeys.length) {
	                    return this.start();
	                }
	            }
	            return null;
	        });
	    }
	    handleError409_(json, shouldShowCustomError) {
	        try {
	            const associatedAdvice = (json && json.associatedAdvice) || [];
	            const advice = associatedAdvice.find((element) => element.type === 'rule-violation');
	            if (advice) {
	                const { message } = advice;
	                const localizedMessage = this.messages[message] || message;
	                const error = new Error(localizedMessage);
	                const obligations = json.obligations || [];
	                const shouldLogout = !!obligations.find((obl) => obl.action === 'logout');
	                loglevel.debug('AdobeConcurrencyMonitorV2.handleError', 409, error, shouldLogout);
	                if (shouldShowCustomError) {
	                    this.onError(error, shouldLogout);
	                }
	                else {
	                    throw error;
	                }
	            }
	        }
	        catch (error) {
	            loglevel.debug(`AdobeConcurrencyMonitorV2.handleError409_: ${error}`);
	            throw error;
	        }
	        return null;
	    }
	    handleError410_(json, shouldShowCustomError) {
	        if (!json) {
	            return this.start();
	        }
	        try {
	            const associatedAdvice = (json && json.associatedAdvice) || [];
	            const advice = associatedAdvice.find((element) => element.type === 'remote-termination');
	            if (advice) {
	                const { message } = advice;
	                const localizedMessage = this.messages[message] || message;
	                const error = new Error(localizedMessage);
	                const shouldLogout = !!json.obligations.find((obl) => obl.action === 'logout');
	                loglevel.debug('AdobeConcurrencyMonitorV2.handleError', 410, error, shouldLogout);
	                if (shouldShowCustomError) {
	                    this.onError(error, shouldLogout);
	                }
	                else {
	                    throw error;
	                }
	            }
	        }
	        catch (error) {
	            loglevel.debug(`AdobeConcurrencyMonitorV2.handleError410_: ${error}`);
	            throw error;
	        }
	        return null;
	    }
	    getMetadata() {
	        const { metadataKeys } = this;
	        const metadata = metadataKeys.reduce((md, key) => {
	            md[key] = this.metadata[key];
	            return md;
	        }, {});
	        return metadata;
	    }
	    onError(error, shouldLogout) {
	        loglevel.debug('AdobeConcurrencyMonitor.onError');
	        loglevel.debug(`error: ${error}`);
	        loglevel.debug(`shouldLogout: ${shouldLogout}`);
	    }
	}

	var sha256 = createCommonjsModule(function (module, exports) {
	(function (root, factory) {
		{
			// CommonJS
			module.exports = factory(core);
		}
	}(commonjsGlobal, function (CryptoJS) {

		(function (Math) {
		    // Shortcuts
		    var C = CryptoJS;
		    var C_lib = C.lib;
		    var WordArray = C_lib.WordArray;
		    var Hasher = C_lib.Hasher;
		    var C_algo = C.algo;

		    // Initialization and round constants tables
		    var H = [];
		    var K = [];

		    // Compute constants
		    (function () {
		        function isPrime(n) {
		            var sqrtN = Math.sqrt(n);
		            for (var factor = 2; factor <= sqrtN; factor++) {
		                if (!(n % factor)) {
		                    return false;
		                }
		            }

		            return true;
		        }

		        function getFractionalBits(n) {
		            return ((n - (n | 0)) * 0x100000000) | 0;
		        }

		        var n = 2;
		        var nPrime = 0;
		        while (nPrime < 64) {
		            if (isPrime(n)) {
		                if (nPrime < 8) {
		                    H[nPrime] = getFractionalBits(Math.pow(n, 1 / 2));
		                }
		                K[nPrime] = getFractionalBits(Math.pow(n, 1 / 3));

		                nPrime++;
		            }

		            n++;
		        }
		    }());

		    // Reusable object
		    var W = [];

		    /**
		     * SHA-256 hash algorithm.
		     */
		    var SHA256 = C_algo.SHA256 = Hasher.extend({
		        _doReset: function () {
		            this._hash = new WordArray.init(H.slice(0));
		        },

		        _doProcessBlock: function (M, offset) {
		            // Shortcut
		            var H = this._hash.words;

		            // Working variables
		            var a = H[0];
		            var b = H[1];
		            var c = H[2];
		            var d = H[3];
		            var e = H[4];
		            var f = H[5];
		            var g = H[6];
		            var h = H[7];

		            // Computation
		            for (var i = 0; i < 64; i++) {
		                if (i < 16) {
		                    W[i] = M[offset + i] | 0;
		                } else {
		                    var gamma0x = W[i - 15];
		                    var gamma0  = ((gamma0x << 25) | (gamma0x >>> 7))  ^
		                                  ((gamma0x << 14) | (gamma0x >>> 18)) ^
		                                   (gamma0x >>> 3);

		                    var gamma1x = W[i - 2];
		                    var gamma1  = ((gamma1x << 15) | (gamma1x >>> 17)) ^
		                                  ((gamma1x << 13) | (gamma1x >>> 19)) ^
		                                   (gamma1x >>> 10);

		                    W[i] = gamma0 + W[i - 7] + gamma1 + W[i - 16];
		                }

		                var ch  = (e & f) ^ (~e & g);
		                var maj = (a & b) ^ (a & c) ^ (b & c);

		                var sigma0 = ((a << 30) | (a >>> 2)) ^ ((a << 19) | (a >>> 13)) ^ ((a << 10) | (a >>> 22));
		                var sigma1 = ((e << 26) | (e >>> 6)) ^ ((e << 21) | (e >>> 11)) ^ ((e << 7)  | (e >>> 25));

		                var t1 = h + sigma1 + ch + K[i] + W[i];
		                var t2 = sigma0 + maj;

		                h = g;
		                g = f;
		                f = e;
		                e = (d + t1) | 0;
		                d = c;
		                c = b;
		                b = a;
		                a = (t1 + t2) | 0;
		            }

		            // Intermediate hash value
		            H[0] = (H[0] + a) | 0;
		            H[1] = (H[1] + b) | 0;
		            H[2] = (H[2] + c) | 0;
		            H[3] = (H[3] + d) | 0;
		            H[4] = (H[4] + e) | 0;
		            H[5] = (H[5] + f) | 0;
		            H[6] = (H[6] + g) | 0;
		            H[7] = (H[7] + h) | 0;
		        },

		        _doFinalize: function () {
		            // Shortcuts
		            var data = this._data;
		            var dataWords = data.words;

		            var nBitsTotal = this._nDataBytes * 8;
		            var nBitsLeft = data.sigBytes * 8;

		            // Add padding
		            dataWords[nBitsLeft >>> 5] |= 0x80 << (24 - nBitsLeft % 32);
		            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 14] = Math.floor(nBitsTotal / 0x100000000);
		            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 15] = nBitsTotal;
		            data.sigBytes = dataWords.length * 4;

		            // Hash final blocks
		            this._process();

		            // Return final computed hash
		            return this._hash;
		        },

		        clone: function () {
		            var clone = Hasher.clone.call(this);
		            clone._hash = this._hash.clone();

		            return clone;
		        }
		    });

		    /**
		     * Shortcut function to the hasher's object interface.
		     *
		     * @param {WordArray|string} message The message to hash.
		     *
		     * @return {WordArray} The hash.
		     *
		     * @static
		     *
		     * @example
		     *
		     *     var hash = CryptoJS.SHA256('message');
		     *     var hash = CryptoJS.SHA256(wordArray);
		     */
		    C.SHA256 = Hasher._createHelper(SHA256);

		    /**
		     * Shortcut function to the HMAC's object interface.
		     *
		     * @param {WordArray|string} message The message to hash.
		     * @param {WordArray|string} key The secret key.
		     *
		     * @return {WordArray} The HMAC.
		     *
		     * @static
		     *
		     * @example
		     *
		     *     var hmac = CryptoJS.HmacSHA256(message, key);
		     */
		    C.HmacSHA256 = Hasher._createHmacHelper(SHA256);
		}(Math));


		return CryptoJS.SHA256;

	}));
	});

	class AdobeConcurrencyMonitorBuilder {
	    constructor(programmer, applicationId, metadata = {}) {
	        this.programmer = programmer;
	        this.applicationId = applicationId;
	        this.metadata = metadata;
	    }
	    withSession(session) {
	        const { authenticationType, authenticatedIdentity, authenticatedProvider, mediaItem } = session;
	        if (authenticationType !== MediaItemAuthenticationType$1.mvpd) {
	            return this;
	        }
	        const subject = authenticatedIdentity;
	        const identityProvider = authenticatedProvider && authenticatedProvider.id;
	        this.metadata[MetadataKeys.accountId] = subject;
	        this.metadata[MetadataKeys.channel] = mediaItem.network && mediaItem.network.id;
	        this.metadata[MetadataKeys.contentType] =
	            mediaItem.streamType === MediaItemStreamType$1.live ? ContentType.live : ContentType.vod;
	        this.metadata[MetadataKeys.contractType] = '';
	        this.metadata[MetadataKeys.hba] = session.authenticatedProvider ? session.authenticatedProvider.isHomeBasedAuth : false;
	        this.subject = subject;
	        this.identityProvider = identityProvider;
	        return this;
	    }
	    withLocationProvider(locationProvider) {
	        const salt = 'm!ck3ym0u$3';
	        const ip = locationProvider.getPublicIPAddress();
	        this.metadata[MetadataKeys.ship] = ip ? sha256(`${salt}${ip}`) : null;
	        this.metadata[MetadataKeys.region] = locationProvider.getRegion() ? locationProvider.getRegion() : null;
	        return this;
	    }
	    withServiceUrl(serviceUrl) {
	        this.serviceUrl = serviceUrl;
	        return this;
	    }
	    withMessages(messages) {
	        this.messages = messages;
	        return this;
	    }
	    build() {
	        if (!this.subject || !this.identityProvider) {
	            return null;
	        }
	        const monitor = new AdobeConcurrencyMonitor(this.programmer, this.applicationId, this.identityProvider, this.subject, this.metadata);
	        if (this.serviceUrl) {
	            monitor.serviceUrl = this.serviceUrl;
	        }
	        if (this.messages) {
	            monitor.messages = this.messages || {};
	        }
	        return monitor;
	    }
	}

	class ESPNAuthButler {
	    constructor(partner, platform) {
	        this.partner = partner;
	        this.platform = platform;
	    }
	    startSession(url, swid, token, tokenType, resource, advertisingInfo) {
	        const { partner, platform } = this;
	        const params = [
	            `partner=${partner}`,
	            `platform=${platform}`,
	            `token=${encodeURIComponent(token)}`,
	            `tokenType=${tokenType}`,
	            'v=2.0.0',
	            'ttl=21600',
	        ];
	        if (resource) {
	            const base64Resource = encBase64.stringify(encUtf8.parse(resource));
	            params.push(`resource=${encodeURIComponent(base64Resource)}`);
	        }
	        if (advertisingInfo) {
	            Object.keys(advertisingInfo).forEach(key => {
	                params.push(`${key}=${encodeURIComponent(advertisingInfo[key])}`);
	            });
	        }
	        const swidRegExp = /swid=*/g;
	        const containsSwid = params.some(e => swidRegExp.test(e));
	        if (!containsSwid) {
	            params.push(`swid=${encodeURIComponent(swid)}`);
	        }
	        const headers = {
	            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
	        };
	        const body = params.join('&');
	        const options = { method: 'POST', headers, credentials: 'include', body };
	        return fetch(url, options)
	            .then(response => response.json())
	            .then(json => {
	            if (!json.session) {
	                throw new Error(json.message || `An unexpected error occurred. [${json.abbreviation}]`);
	            }
	            return json;
	        })
	            .catch(error => {
	            if (error.message) {
	                throw new Error(error.message);
	            }
	            return error.json().then(json => {
	                throw new Error(json.message || `An unexpected error occurred. [${json.abbreviation}]`);
	            });
	        });
	    }
	}

	class BreadcrumbsFactory {
	    constructor() {
	        this.errorReason_ = null;
	        this.breadcrumbs_ = [];
	    }
	    add(crumb) {
	        if (crumb)
	            this.breadcrumbs_.push(crumb);
	    }
	    setErrorReason(reason) {
	        this.errorReason_ = reason;
	    }
	    getErrorReason() {
	        return this.errorReason_;
	    }
	    getCrumbs() {
	        return this.breadcrumbs_;
	    }
	    reset() {
	        this.breadcrumbs_ = [];
	        this.errorReason_ = null;
	    }
	}

	var BREADCRUMBS;
	(function (BREADCRUMBS) {
	    BREADCRUMBS["FINISH"] = "finish";
	    BREADCRUMBS["FMI"] = "FMI";
	    BREADCRUMBS["CAZ"] = "CAZ";
	    BREADCRUMBS["CAN_T"] = "CAN<T>";
	    BREADCRUMBS["CAZ_T"] = "CAZ<T>";
	    BREADCRUMBS["B_FM"] = "B_FM";
	    BREADCRUMBS["B_FMF"] = "B_FMF";
	    BREADCRUMBS["B_RIT"] = "B_RIT";
	    BREADCRUMBS["B_L"] = "B_L";
	    BREADCRUMBS["B_RA"] = "B_RA";
	    BREADCRUMBS["T_FESPN"] = "T_FESPN";
	    BREADCRUMBS["T_FESPNF"] = "T_FESPNF";
	    BREADCRUMBS["T_FSH"] = "T_FSH";
	    BREADCRUMBS["T_FSHF"] = "T_FSHF";
	    BREADCRUMBS["T_FSS"] = "T_FSS";
	    BREADCRUMBS["T_FSSF"] = "T_FSSF";
	    BREADCRUMBS["T_FE"] = "T_FE";
	    BREADCRUMBS["T_FEF"] = "T_FEF";
	    BREADCRUMBS["T_NIT"] = "T_NIT";
	    BREADCRUMBS["T_CHP"] = "T_CHP";
	    BREADCRUMBS["T_PL"] = "T_PL";
	    BREADCRUMBS["T_CMAN"] = "T_CMAN";
	    BREADCRUMBS["T_PJWT"] = "T_PJWT";
	    BREADCRUMBS["T_NJWT"] = "T_NJWT";
	    BREADCRUMBS["T_BJWT"] = "T_BJWT";
	    BREADCRUMBS["MPS"] = "MPS";
	    BREADCRUMBS["CM_I"] = "CM_I";
	    BREADCRUMBS["CM_IF"] = "CM_IF";
	    BREADCRUMBS["B_P"] = "B_P";
	    BREADCRUMBS["MP_I"] = "MP_I";
	    BREADCRUMBS["MP_L"] = "MP_L";
	    BREADCRUMBS["MP_S"] = "MP_S";
	    BREADCRUMBS["MP_C_PA"] = "MP_C_PA";
	    BREADCRUMBS["MP_C_PL"] = "MP_C_PL";
	    BREADCRUMBS["MP_SE"] = "MP_SE";
	    BREADCRUMBS["MP_S_S"] = "MP_S_S";
	    BREADCRUMBS["MP_S_E"] = "MP_S_E";
	    BREADCRUMBS["MP_V_M"] = "MP_V_M";
	    BREADCRUMBS["MP_V_U"] = "MP_V_U";
	    BREADCRUMBS["MP_CC_ON"] = "MP_CC_ON";
	    BREADCRUMBS["MP_CC_OFF"] = "MP_CC_OFF";
	    BREADCRUMBS["MP_C_C"] = "MP_C_C";
	    BREADCRUMBS["MP_D"] = "MP_D";
	})(BREADCRUMBS || (BREADCRUMBS = {}));

	var BreadcrumbsService = new BreadcrumbsFactory();

	const buildPlaybackSession = function buildPlaybackSession(json, token) {
	    const { playbackUrl } = json;
	    const session = new PlaybackSession(playbackUrl);
	    session.token = token;
	    return session;
	};
	class StartSessionPlaybackSessionFactory {
	    constructor(authButler) {
	        this.authButler = authButler;
	    }
	    initPlaybackSession(mediaItem, advertisingInfo, authorizationPayload) {
	        let { url } = mediaItem.source;
	        if (mediaItem.source.startSessionUrl && mediaItem.source.type === MediaItemSourceType$1.shield) {
	            url = mediaItem.source.startSessionUrl;
	        }
	        try {
	            const protocol = window && window.location.protocol;
	            if (protocol && protocol === 'https:') {
	                url = url.replace(/^http(s?):/, protocol);
	            }
	        }
	        catch (e) { }
	        const { customData: { token, tokenType, resource = mediaItem.mrss }, } = authorizationPayload;
	        const swid = advertisingInfo && advertisingInfo.swid;
	        const { authButler } = this;
	        if (!authButler) {
	            BreadcrumbsService.setErrorReason('noAuthButler');
	            throw new Error('startSession support not configured');
	        }
	        return (authButler
	            .startSession(url, swid, token, tokenType, resource, advertisingInfo.dictionaryForStartSession())
	            .then(json => {
	            BreadcrumbsService.add(BREADCRUMBS.T_FSS);
	            const session = buildPlaybackSession(json, token);
	            session.mediaItem = mediaItem;
	            session.seekToTime = mediaItem.seekInSeconds;
	            session.authenticationType = authorizationPayload.authenticationType;
	            session.authenticatedProvider = authorizationPayload.authenticatedProvider;
	            session.authenticatedIdentity = authorizationPayload.authenticatedIdentity;
	            return session;
	        })
	            .catch(err => {
	            BreadcrumbsService.add(BREADCRUMBS.T_FSSF);
	            BreadcrumbsService.setErrorReason('startSessionFetchFailed');
	            throw err;
	        }));
	    }
	}

	class NonePlaybackSessionFactory {
	    initPlaybackSession(mediaItem, advertisingInfo, authorizationPayload) {
	        const playbackSession = new PlaybackSession(mediaItem.source.url);
	        playbackSession.mediaItem = mediaItem;
	        playbackSession.seekToTime = mediaItem.seekInSeconds;
	        playbackSession.authenticationType = authorizationPayload === null || authorizationPayload === void 0 ? void 0 : authorizationPayload.authenticationType;
	        playbackSession.authenticatedProvider = authorizationPayload === null || authorizationPayload === void 0 ? void 0 : authorizationPayload.authenticatedProvider;
	        playbackSession.authenticatedIdentity = authorizationPayload === null || authorizationPayload === void 0 ? void 0 : authorizationPayload.authenticatedIdentity;
	        return Promise.resolve(playbackSession);
	    }
	}

	const TokenType = {
	    adobePass: 'ADOBEPASS',
	    gatekeeper: 'GATEKEEPER',
	    jwt: 'JWT',
	    authToken: 'AUTHTOKEN',
	};
	const handleErrorResponse = function handleErrorResponse(response) {
	    if (response instanceof Error) {
	        throw response;
	    }
	    return (response.json &&
	        response.json().then(json => {
	            let message = json.message || `An unexpected error occurred. [${json.exception}]`;
	            if (json.exception === 'com.espn.watch.api.AccessDeniedException') {
	                message = 'This content is not available for your package or region.';
	            }
	            throw new Error(message);
	        }));
	};
	const defaultServiceUrl$1 = 'https://watch.auth.api.espn.com';
	class ShieldAPI {
	    constructor(apiKey, serviceUrl) {
	        this.drmSupport = DRMSupport$1.none;
	        this.palEnabled = false;
	        this.palMaxLength = 3000;
	        this.serviceUrl = defaultServiceUrl$1;
	        this.apiKey = apiKey;
	        this.serviceUrl = serviceUrl || defaultServiceUrl$1;
	    }
	    getAsset(id, token, tokenType, resource, params) {
	        const url = `${this.serviceUrl}/video/auth/media/${id}/asset`;
	        return this.getAssetForUrl(url, token, tokenType, resource, params);
	    }
	    getAssetForUrl(assetUrl, token, tokenType, resource, params) {
	        const parameters = params || {};
	        const headers = {
	            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
	        };
	        let sep = assetUrl.indexOf('?') === -1 ? '?' : '&';
	        let url = `${assetUrl}${sep}apikey=${this.apiKey}`;
	        if (token) {
	            if (tokenType === TokenType.adobePass) {
	                parameters.adobeToken = token;
	                if (resource) {
	                    const base64Resource = encBase64.stringify(encUtf8.parse(resource));
	                    parameters.adobeResource = base64Resource;
	                }
	            }
	            else if (tokenType == TokenType.jwt) {
	                headers.Authorization = `Bearer ${token}`;
	            }
	            else if (tokenType == TokenType.authToken) {
	                sep = url.indexOf('?') === -1 ? '?' : '&';
	                url = `${url}${sep}authtoken=${token}`;
	            }
	            else {
	                parameters.token = token;
	            }
	        }
	        parameters.drmSupport = this.drmSupport;
	        const body = Object.keys(parameters)
	            .map(key => `${key}=${encodeURIComponent(parameters[key])}`)
	            .join('&');
	        const options = {
	            method: 'POST',
	            headers,
	            credentials: 'include',
	            body,
	        };
	        return fetch(url, options)
	            .then(response => {
	            if (!response.ok) {
	                throw response;
	            }
	            return response.json();
	        })
	            .then(json => {
	            if (!json.stream) {
	                const message = json.message || `An unexpected error occurred.`;
	                throw new Error(message);
	            }
	            return json;
	        })
	            .catch(handleErrorResponse);
	    }
	}
	ShieldAPI.defaultServiceUrl = defaultServiceUrl$1;

	const buildPlaybackConfig = function buildPlaybackConfig(streamInfo) {
	    if (!streamInfo) {
	        return null;
	    }
	    const { streamType, licenseAcquisitionUrl: licenseUrl, certificateUrl } = streamInfo;
	    switch (streamType) {
	        case 'DASH_PLAYREADY':
	            return new PlaybackConfig('application/dash+xml', DRMKeySystem.playReady, licenseUrl);
	        case 'DASH_WIDEVINE':
	            return new PlaybackConfig('application/dash+xml', DRMKeySystem.widevine, licenseUrl);
	        case 'HLS_FAIRPLAY':
	            return new PlaybackConfig('application/x-mpegURL', DRMKeySystem.fairPlay, certificateUrl);
	        case 'HLS':
	            return new PlaybackConfig('application/x-mpegURL', DRMKeySystem.none);
	        default:
	            return null;
	    }
	};
	const buildTextTracks = function buildTextTracks(captions) {
	    if (!captions) {
	        return [];
	    }
	    const track = {
	        source: captions,
	    };
	    if (captions.endsWith('.vtt')) {
	        track.contentType = 'text/vtt';
	    }
	    return [track];
	};
	class ShieldPlaybackSessionFactory {
	    constructor(shieldAPI) {
	        this.shieldAPI = shieldAPI;
	    }
	    initPlaybackSession(mediaItem, advertisingInfo, authorizationPayload) {
	        return __awaiter(this, void 0, void 0, function* () {
	            const { shieldAPI } = this;
	            if (!shieldAPI) {
	                BreadcrumbsService.setErrorReason('noShieldFetchAPI');
	                throw new Error('shield support not configured');
	            }
	            const { palEnabled, palMaxLength } = shieldAPI;
	            const token = authorizationPayload.customData.token;
	            const zipcode = authorizationPayload.customData.zipcode;
	            const { customData: { tokenType, resource = mediaItem.mrss } = {} } = authorizationPayload;
	            if (palEnabled && advertisingInfo.palNonce === null) {
	                try {
	                    advertisingInfo.palNonce = yield AdvertisingInfo.getGooglePalNonce(advertisingInfo, palMaxLength);
	                }
	                catch (err) {
	                    console.warn(err);
	                }
	            }
	            const parameters = advertisingInfo.dictionaryForStartSession();
	            if (zipcode) {
	                parameters.zipcode = zipcode;
	            }
	            const url = mediaItem.source.url;
	            try {
	                const json = yield shieldAPI.getAssetForUrl(url, token, tokenType, resource, parameters);
	                BreadcrumbsService.add(BREADCRUMBS.T_FSH);
	                const { stream, captions, streamInfo, gatekeeperToken } = json;
	                const session = new PlaybackSession(stream);
	                session.mediaItem = mediaItem;
	                session.seekToTime = mediaItem.seekInSeconds;
	                session.authenticationType = authorizationPayload.authenticationType;
	                session.authenticatedProvider = authorizationPayload.authenticatedProvider;
	                session.authenticatedIdentity = authorizationPayload.authenticatedIdentity;
	                session.token = gatekeeperToken;
	                session.playbackConfig = buildPlaybackConfig(streamInfo);
	                session.textTracks = buildTextTracks(captions);
	                return session;
	            }
	            catch (err) {
	                BreadcrumbsService.add(BREADCRUMBS.T_FSHF);
	                BreadcrumbsService.setErrorReason('shieldFetchFailed');
	                throw err;
	            }
	        });
	    }
	}

	const checkAuthorizationWithAuthorizers = function checkAuthorizationWithAuthorizers(mediaItem, advertisingInfo, authorizers, errors = []) {
	    const authorizer = authorizers.shift();
	    return (authorizer
	        .checkAuthorization(mediaItem, advertisingInfo)
	        .then(result => {
	        const { success } = result;
	        if (success) {
	            return result;
	        }
	        if (authorizers.length < 1) {
	            if (errors.length > 0) {
	                return Promise.reject(null);
	            }
	            return result;
	        }
	        return checkAuthorizationWithAuthorizers(mediaItem, advertisingInfo, authorizers, errors);
	    })
	        .catch((error) => {
	        if (authorizers.length > 0) {
	            if (error) {
	                errors.push(error);
	            }
	            return checkAuthorizationWithAuthorizers(mediaItem, advertisingInfo, authorizers, errors);
	        }
	        const throwable = errors[0] || error;
	        if (throwable) {
	            throw throwable;
	        }
	    }));
	};

	class AuthenticationManager {
	    constructor() {
	        this.partner = null;
	        this.platform = null;
	        this.apiKey = null;
	        this.deviceId = null;
	        this.authenticators = {};
	        this.authorizers = {};
	        this.playbackSessionFactories = {};
	        this.playbackSessionFactories[MediaItemSourceType$1.none] = new NonePlaybackSessionFactory();
	    }
	    getAuthenticator(type) {
	        return this.authenticators[type];
	    }
	    setAuthenticator(authenticator, authenticationType) {
	        const array = this.convertToArray(authenticationType);
	        array.forEach((value) => {
	            this.authenticators[value.toString()] = authenticator;
	        });
	    }
	    getAuthorizer(type) {
	        return this.authorizers[type];
	    }
	    setAuthorizer(authorizer, authenticationType) {
	        const array = this.convertToArray(authenticationType);
	        array.forEach((value) => {
	            this.authorizers[value.toString()] = authorizer;
	        });
	    }
	    getPlaybackSessionFactory(type) {
	        return this.playbackSessionFactories[type];
	    }
	    setPlaybackSessionFactory(factory, type) {
	        this.playbackSessionFactories[type] = factory;
	    }
	    checkAuthentication() {
	        const promises = Object.keys(this.authenticators).map(key => {
	            const authenticator = this.authenticators[key];
	            return authenticator
	                .checkAuthentication()
	                .then(result => {
	                loglevel.debug(`${key} authenticator`, `isAuthenticated: ${result}`, `authenticatedProvider: ${authenticator.authenticatedProvider}`);
	                return result;
	            })
	                .catch(() => {
	                return false;
	            });
	        });
	        return Promise.all(promises).then(results => {
	            return results.every(result => result === true);
	        });
	    }
	    isAuthenticatedForMediaItem(mediaItem) {
	        if (mediaItem.authenticationTypes.length < 1 ||
	            mediaItem.authenticationTypes.indexOf(MediaItemAuthenticationType$1.none) !== -1) {
	            return true;
	        }
	        const authenticators = mediaItem.authenticationTypes
	            .map(authType => this.authenticators[authType])
	            .filter(authenticator => authenticator);
	        return authenticators.some(authenticator => authenticator.isAuthenticated);
	    }
	    isAuthenticatedWithAuthType(authenticationType) {
	        const authenticator = this.authenticators[authenticationType];
	        if (!authenticator) {
	            return false;
	        }
	        return authenticator.isAuthenticated;
	    }
	    authenticateWithAuthType(authType, options) {
	        const authenticator = this.authenticators[authType];
	        if (!authenticator) {
	            return;
	        }
	        return authenticator.authenticate(options);
	    }
	    checkAuthorization(mediaItem, advertisingInfo) {
	        BreadcrumbsService.add(BREADCRUMBS.CAZ);
	        if ((mediaItem.authenticationTypes && mediaItem.authenticationTypes.length < 1) ||
	            mediaItem.authenticationTypes.indexOf(MediaItemAuthenticationType$1.none) !== -1) {
	            BreadcrumbsService.add(BREADCRUMBS.CAN_T.replace('T', MediaItemAuthenticationType$1.none));
	            BreadcrumbsService.add(BREADCRUMBS.CAZ_T.replace('T', MediaItemAuthenticationType$1.none));
	            const provider = new AuthenticatedProvider(mediaItem.id, mediaItem.title, mediaItem.images[0].url, mediaItem.source.url);
	            const payload = new AuthorizationPayload(MediaItemAuthenticationType$1.none, provider, mediaItem.id, {});
	            const result = new AuthorizationResult(true, payload);
	            return Promise.resolve(result);
	        }
	        const authTypes = [
	            MediaItemAuthenticationType$1.open,
	            MediaItemAuthenticationType$1.mvpd,
	            MediaItemAuthenticationType$1.direct,
	            MediaItemAuthenticationType$1.isp,
	        ].filter(authType => mediaItem.authenticationTypes.indexOf(authType) !== -1);
	        const authorizers = authTypes
	            .map(authType => this.authorizers[authType])
	            .filter(authorizer => authorizer && authorizer.checkAuthorization);
	        loglevel.debug('mediaItem.authTypes:', authTypes);
	        if (authorizers.length === 0) {
	            return Promise.reject(new Error(`no authorizer configured to support authTypes: ${mediaItem.authenticationTypes}`));
	        }
	        return checkAuthorizationWithAuthorizers(mediaItem, advertisingInfo, authorizers);
	    }
	    initPlaybackSession(mediaItem, advertisingInfo) {
	        if (!mediaItem.source.type && mediaItem.authenticationTypes.length > 0) {
	            BreadcrumbsService.setErrorReason('missingMediaSourceType');
	            return Promise.reject(new Error('This event is not currently available.'));
	        }
	        return this.checkAuthorization(mediaItem, advertisingInfo).then(result => {
	            var _a, _b, _c;
	            loglevel.debug('AuthenticationManager.initPlaybackSession.checkAuthorization result:', result.success);
	            const { success, payload } = result;
	            if (!success) {
	                BreadcrumbsService.setErrorReason('notAuthorized');
	                throw new Error('Not authorized.');
	            }
	            if (!((_a = mediaItem === null || mediaItem === void 0 ? void 0 : mediaItem.source) === null || _a === void 0 ? void 0 : _a.type)) {
	                BreadcrumbsService.setErrorReason('missingMediaSourceType');
	                throw new Error('Media Item source type is missing.');
	            }
	            const playbackSessionFactory = this.playbackSessionFactories[(_b = mediaItem === null || mediaItem === void 0 ? void 0 : mediaItem.source) === null || _b === void 0 ? void 0 : _b.type];
	            if (!playbackSessionFactory) {
	                BreadcrumbsService.setErrorReason('missingMediaSourceType');
	                throw new Error(`SessionFactory for source type \'${(_c = mediaItem === null || mediaItem === void 0 ? void 0 : mediaItem.source) === null || _c === void 0 ? void 0 : _c.type}\' is missing.`);
	            }
	            const adInfo = new AdvertisingInfo();
	            adInfo.authenticationProvider = result.payload.authenticatedProvider && result.payload.authenticatedProvider.id;
	            adInfo.merge(advertisingInfo);
	            BreadcrumbsService.add(BREADCRUMBS.MPS);
	            return playbackSessionFactory.initPlaybackSession(mediaItem, adInfo, payload).then((playbackSession) => {
	                loglevel.debug('AuthenticationManager.initPlaybackSession', playbackSession);
	                const monitor = this.concurrencyMonitorBuilder && this.concurrencyMonitorBuilder.withSession(playbackSession).build();
	                if (!monitor) {
	                    return playbackSession;
	                }
	                return monitor
	                    .createSession()
	                    .then(concurrencySessionId => {
	                    BreadcrumbsService.add(BREADCRUMBS.CM_I);
	                    playbackSession.concurrencyMonitorSessionId = concurrencySessionId;
	                    return playbackSession;
	                })
	                    .catch(err => {
	                    BreadcrumbsService.add(BREADCRUMBS.CM_IF);
	                    BreadcrumbsService.setErrorReason('concurrencyInitializationFailed');
	                    throw err;
	                });
	            });
	        });
	    }
	    get authStates() {
	        const mvpdAuthenticator = this.authenticators[MediaItemAuthenticationType$1.mvpd];
	        const ispAuthenticator = this.authenticators[MediaItemAuthenticationType$1.isp];
	        const states = [];
	        if (ispAuthenticator.isAuthenticated) {
	            states.push('isp');
	        }
	        if (mvpdAuthenticator.isAuthenticated === true) {
	            states.push('mvpd_login');
	        }
	        else if (mvpdAuthenticator.wasPreviouslyAuthenticated === true) {
	            states.push('mvpd_previous');
	        }
	        return states;
	    }
	    get preauthorizedResources() {
	        return Object.keys(this.authenticators)
	            .map(key => this.authenticators[key].preauthorizedResources)
	            .reduce((array, values) => {
	            return array.concat(values);
	        }, [])
	            .filter((value, index, array) => array.indexOf(value) === index);
	    }
	    get primaryAuthenticatedProvider() {
	        return [MediaItemAuthenticationType$1.mvpd, MediaItemAuthenticationType$1.isp]
	            .map(authType => this.getAuthenticator(authType))
	            .filter(authenticator => authenticator.isAuthenticated)
	            .map(authenticator => authenticator.authenticatedProvider)[0];
	    }
	    convertToArray(value) {
	        if (!value)
	            return [];
	        let array = [];
	        if (Array.isArray(value)) {
	            array = value;
	        }
	        else if (typeof value == 'string') {
	            array.push(value);
	        }
	        return array;
	    }
	}
	AuthenticationManager.AuthenticateOptionsKey = {
	    redirectUrl: 'redirectUrl',
	};

	class PayloadAuthenticator {
	    constructor() {
	        this.preauthorizedResources = [];
	        this.isAuthenticated = !!this.authorizationPayload;
	        this.authenticatedIdentity = this.authorizationPayload && this.authorizationPayload.authenticatedIdentity;
	        this.authenticatedProvider = this.authorizationPayload && this.authorizationPayload.authenticatedProvider;
	    }
	    checkAuthentication() {
	        return Promise.resolve(this.isAuthenticated);
	    }
	    authenticate() {
	        return this.checkAuthentication();
	    }
	    deauthenticate() {
	        this.authorizationPayload = null;
	        return Promise.resolve(true);
	    }
	    checkAuthorization(mediaItem) {
	        const result = new AuthorizationResult(true, this.authorizationPayload);
	        BreadcrumbsService.add(BREADCRUMBS.CAN_T.replace('T', this.authorizationPayload.authenticationType));
	        BreadcrumbsService.add(BREADCRUMBS.CAZ_T.replace('T', this.authorizationPayload.authenticationType));
	        if (mediaItem &&
	            (mediaItem.authenticationTypes.length == 0 ||
	                mediaItem.authenticationTypes.indexOf(MediaItemAuthenticationType$1.none) !== -1)) {
	            return Promise.resolve(result);
	        }
	        else if (!this.authorizationPayload ||
	            !this.mediaItem ||
	            this.mediaItem.id !== mediaItem.id ||
	            mediaItem.authenticationTypes.indexOf(this.authorizationPayload.authenticationType) === -1) {
	            return Promise.resolve(new AuthorizationResult(false, this.authorizationPayload));
	        }
	        else {
	            return Promise.resolve(result);
	        }
	    }
	}

	class Configuration {
	    
	}
	const defaultServiceUrl = 'https://prod.gatekeeper.us-abc.symphony.edgedatg.go.com/vp2/ws-secure/entitlement/2020/playmanifest_secure.json';
	const defaultAppVersion = '1.0.0';
	const defaultAppName = '';
	const defaultDeviceID = '001';
	const defaultConfiguration = new Configuration(defaultServiceUrl, defaultAppVersion, defaultAppName, defaultDeviceID);

	class EntitlementPlaybackSessionFactory {
	    constructor(configuration = defaultConfiguration) {
	        this.configuration_ = configuration;
	    }
	    initPlaybackSession(mediaItem, advertisingInfo, authorizationPayload) {
	        var _a;
	        const queryParameters = {
	            brand: brandLegacyId(getBrandFromString(mediaItem.brand)),
	            device: this.configuration_.deviceID,
	        };
	        const videoType = this.videoTypeFromMedia_(mediaItem);
	        queryParameters['app_name'] = this.configuration_.appName;
	        queryParameters['video_type'] = videoType;
	        queryParameters['video_id'] = mediaItem.id;
	        if (mediaItem.brand === 'abc' && videoType == 'live')
	            queryParameters['affiliate'] = mediaItem.network.id;
	        if (authorizationPayload.authenticationType == MediaItemAuthenticationType$1.mvpd) {
	            queryParameters['resource_id'] = mediaItem.mrss;
	            queryParameters['adobe_requestor_id'] =
	                (authorizationPayload === null || authorizationPayload === void 0 ? void 0 : authorizationPayload.customData[AuthorizationPayload.CustomDataKey.requestor]) || ((_a = mediaItem.brand) === null || _a === void 0 ? void 0 : _a.toUpperCase());
	            const tokenType = authorizationPayload === null || authorizationPayload === void 0 ? void 0 : authorizationPayload.customData[AuthorizationPayload.CustomDataKey.tokenType];
	            queryParameters['token_type'] = tokenType == 'ADOBEPASS' ? 'ap' : tokenType;
	            queryParameters['token'] = authorizationPayload === null || authorizationPayload === void 0 ? void 0 : authorizationPayload.customData[AuthorizationPayload.CustomDataKey.token];
	            queryParameters['zipcode'] = authorizationPayload === null || authorizationPayload === void 0 ? void 0 : authorizationPayload.customData[AuthorizationPayload.CustomDataKey.zipcode];
	            queryParameters['mvpd'] =
	                (authorizationPayload === null || authorizationPayload === void 0 ? void 0 : authorizationPayload.authenticatedProvider.id) || (authorizationPayload === null || authorizationPayload === void 0 ? void 0 : authorizationPayload.customData[AuthorizationPayload.CustomDataKey.mvpd]);
	            queryParameters['locale'] = mediaItem.locale;
	        }
	        const headers = {
	            appversion: this.configuration_.appVersion,
	            Accept: 'application/json',
	            'Content-Type': 'application/x-www-form-urlencoded',
	        };
	        const formData = new URLSearchParams();
	        Object.keys(queryParameters).forEach(key => {
	            if (queryParameters[key] != undefined) {
	                formData.append(key, queryParameters[key]);
	            }
	        });
	        const body = String(queryParameters['token_type']).indexOf('offsite') > -1 ? formData.toString().replace(/%2B/g, '+') : formData;
	        const options = {
	            method: 'POST',
	            headers: headers,
	            body: body,
	        };
	        return fetch(this.configuration_.serviceUrl, options)
	            .then(response => {
	            if (!response.ok) {
	                BreadcrumbsService.add(BREADCRUMBS.T_FEF);
	                BreadcrumbsService.setErrorReason('entitlementFetchFailed');
	                throw response;
	            }
	            BreadcrumbsService.add(BREADCRUMBS.T_FE);
	            return response.json();
	        })
	            .then(json => {
	            const playbackSession = this.entitlementPlaybackSessionFromResponse_(json);
	            playbackSession.mediaItem = mediaItem;
	            playbackSession.authenticationType = authorizationPayload === null || authorizationPayload === void 0 ? void 0 : authorizationPayload.authenticationType;
	            playbackSession.authenticatedProvider = authorizationPayload === null || authorizationPayload === void 0 ? void 0 : authorizationPayload.authenticatedProvider;
	            playbackSession.authenticatedIdentity = authorizationPayload === null || authorizationPayload === void 0 ? void 0 : authorizationPayload.authenticatedIdentity;
	            return playbackSession;
	        });
	    }
	    entitlementPlaybackSessionFromResponse_(json) {
	        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
	        const playbackUrl = ((_c = (_b = (_a = json.video) === null || _a === void 0 ? void 0 : _a.assets) === null || _b === void 0 ? void 0 : _b.asset[0]) === null || _c === void 0 ? void 0 : _c.value) || ((_g = (_f = (_e = (_d = json.channels) === null || _d === void 0 ? void 0 : _d.channel[0]) === null || _e === void 0 ? void 0 : _e.assets) === null || _f === void 0 ? void 0 : _f.asset[0]) === null || _g === void 0 ? void 0 : _g.value);
	        const playbackSession = new PlaybackSession(playbackUrl);
	        let playbackConfig;
	        if ((_h = json.entitlement) === null || _h === void 0 ? void 0 : _h.drmData) {
	            const drmData = (_j = json.entitlement) === null || _j === void 0 ? void 0 : _j.drmData;
	            switch (drmData.drmEncoding) {
	                case 'WIDEVINE':
	                    playbackConfig = new PlaybackConfig('application/dash+xml', DRMKeySystem$1.widevine, drmData.licenseUrl);
	                    break;
	                case 'FAIRPLAY':
	                    playbackConfig = new PlaybackConfig('application/x-mpegURL', DRMKeySystem$1.fairPlay, drmData.licenseUrl);
	                    break;
	                case 'PLAY_READY':
	                    playbackConfig = new PlaybackConfig('application/dash+xml', DRMKeySystem$1.playReady, drmData.licenseUrl);
	                    break;
	            }
	        }
	        else {
	            playbackConfig = new PlaybackConfig('application/x-mpegURL', DRMKeySystem$1.none, null);
	        }
	        playbackSession.playbackConfig = playbackConfig;
	        return playbackSession;
	    }
	    videoTypeFromMedia_(mediaItem) {
	        if (mediaItem.streamType == MediaItemStreamType$1.live) {
	            return 'live';
	        }
	        else if (mediaItem.streamType == MediaItemStreamType$1.onDemand && mediaItem.entityType == MediaItemEntityType$1.shortform) {
	            return 'sf';
	        }
	        else if (mediaItem.streamType == MediaItemStreamType$1.onDemand && mediaItem.entityType == MediaItemEntityType$1.longform) {
	            return 'lf';
	        }
	    }
	}

	const DEFAULT_CONFIG$4 = {
	    interval: 60000,
	    watchProp: 'id',
	};
	const UNIVERSAL_API_SOURCES = {
	    [ApiSource$1.cfa]: true,
	    [ApiSource$1.pluto]: true,
	    [ApiSource$1.graphQL]: true,
	    [ApiSource$1.itemFeed]: true,
	};
	const DEFAULT_API_SOURCE = ApiSource$1.graphQL;
	class ProgramChangeMonitor {
	    constructor(mediaItem, mediaItemDataSource, countryCode) {
	        this.mediaItem = mediaItem;
	        this.mediaItemDataSource = mediaItemDataSource;
	        this.countryCode = countryCode;
	        this.configuration_ = DEFAULT_CONFIG$4;
	    }
	    get configuration() {
	        return this.configuration_;
	    }
	    set configuration(configuration) {
	        this.configuration_ = configuration;
	    }
	    start() {
	        if (!(this.mediaItem.isLinear && this.mediaItem.isLive)) {
	            return;
	        }
	        this.intervalId = setInterval(() => {
	            this.checkProgramChange();
	        }, this.configuration_.interval);
	    }
	    stop() {
	        if (this.intervalId) {
	            clearInterval(this.intervalId);
	        }
	    }
	    checkProgramChange() {
	        if (!this.mediaItem || !this.mediaItemDataSource) {
	            return;
	        }
	        const { countryCode, configuration_: { watchProp }, } = this;
	        const { mediaItem, mediaItem: { network, apiSource, references = {} }, } = this;
	        const networkId = network === null || network === void 0 ? void 0 : network.id;
	        if (!networkId) {
	            loglevel.warn(`cannot monitor for program changes on network ${networkId}`);
	            return;
	        }
	        const source = apiSource in UNIVERSAL_API_SOURCES ? apiSource : DEFAULT_API_SOURCE;
	        const identifier = MediaItemIdentifier.identifierStringForNetwork(networkId, source);
	        this.mediaItemDataSource.getMediaItems([identifier], { countryCode }).then((mediaItems) => {
	            var _a;
	            const nextMediaItem = Array.isArray(mediaItems) && mediaItems[0];
	            if (!nextMediaItem) {
	                return;
	            }
	            const programDidChange = mediaItem[watchProp] !== nextMediaItem[watchProp] &&
	                (!(references === null || references === void 0 ? void 0 : references.simulcastAiringId) || references.simulcastAiringId !== ((_a = nextMediaItem.references) === null || _a === void 0 ? void 0 : _a.simulcastAiringId));
	            if (programDidChange) {
	                this.mediaItem = nextMediaItem;
	                this.onProgramChange(nextMediaItem);
	            }
	        });
	    }
	    onProgramChange(mediaItem) { }
	}

	var AtvlPlayerEvent;
	(function (AtvlPlayerEvent) {
	    AtvlPlayerEvent["willStartPlaying"] = "atv.player.willStartPlaying";
	    AtvlPlayerEvent["didStopPlaying"] = "atv.player.didStopPlaying";
	    AtvlPlayerEvent["onTimedMetadataChanged"] = "atv.player.onTimedMetadataChanged";
	    AtvlPlayerEvent["playerStateChanged"] = "atv.player.playerStateChanged";
	    AtvlPlayerEvent["playerTimeDidChange"] = "atv.player.playerTimeDidChange";
	})(AtvlPlayerEvent || (AtvlPlayerEvent = {}));

	var ID3MetadataTag;
	(function (ID3MetadataTag) {
	    ID3MetadataTag["priv"] = "PRIV";
	    ID3MetadataTag["txxx"] = "TXXX";
	})(ID3MetadataTag || (ID3MetadataTag = {}));
	var ID3HeartbeatType;
	(function (ID3HeartbeatType) {
	    ID3HeartbeatType["program"] = "PROGRAM";
	    ID3HeartbeatType["commercial"] = "COMMERCIAL";
	    ID3HeartbeatType["slate"] = "SLATE";
	})(ID3HeartbeatType || (ID3HeartbeatType = {}));

	var PlayerAdaptorEvent;
	(function (PlayerAdaptorEvent) {
	    PlayerAdaptorEvent["start"] = "start";
	    PlayerAdaptorEvent["playing"] = "playing";
	    PlayerAdaptorEvent["pause"] = "pause";
	    PlayerAdaptorEvent["seeking"] = "seeking";
	    PlayerAdaptorEvent["stalled"] = "stalled";
	    PlayerAdaptorEvent["stop"] = "stop";
	    PlayerAdaptorEvent["timedMetadata"] = "timedMetadata";
	    PlayerAdaptorEvent["currentTime"] = "currentTime";
	    PlayerAdaptorEvent["loadedMetadata"] = "loadedMetadata";
	})(PlayerAdaptorEvent || (PlayerAdaptorEvent = {}));
	var PlayerAdaptorEvent$1 = PlayerAdaptorEvent;

	var TrilithiumPlayerEvent;
	(function (TrilithiumPlayerEvent) {
	    TrilithiumPlayerEvent["opened"] = "opened";
	    TrilithiumPlayerEvent["playing"] = "playing";
	    TrilithiumPlayerEvent["ended"] = "ended";
	    TrilithiumPlayerEvent["timedMetadata"] = "timedMetadata";
	    TrilithiumPlayerEvent["error"] = "error";
	    TrilithiumPlayerEvent["timeUpdate"] = "timeUpdate";
	    TrilithiumPlayerEvent["stalled"] = "stalled";
	    TrilithiumPlayerEvent["paused"] = "paused";
	    TrilithiumPlayerEvent["seeking"] = "seeking";
	})(TrilithiumPlayerEvent || (TrilithiumPlayerEvent = {}));

	class WebPlayerBundleAdaptor {
	    constructor(playerBundle) {
	        this.eventHandlers = [];
	        this.playerBundle = playerBundle;
	    }
	    createHandlerForCallback(callback) {
	        const handler = evtData => {
	            let currentTime = evtData && evtData.currentTime;
	            if (!currentTime && !evtData) {
	                currentTime = this.playerBundle.currentTime();
	            }
	            if (typeof currentTime === 'number') {
	                callback(currentTime);
	            }
	            else {
	                callback(evtData);
	            }
	        };
	        this.eventHandlers.push([callback, handler]);
	        return handler;
	    }
	    getIndexOfHandlerForCallback(findCallback) {
	        const { eventHandlers } = this;
	        const len = eventHandlers.length;
	        let index = -1;
	        for (let i = 0; i < len; i += 1) {
	            const [callback] = eventHandlers[i];
	            if (callback === findCallback) {
	                index = i;
	                break;
	            }
	        }
	        return index;
	    }
	    on(evtName, callback) {
	        const mappedEventName = this.getMappedEventName_(evtName);
	        const handler = this.createHandlerForCallback(callback);
	        this.playerBundle.coordinator.addEventListener(mappedEventName, handler);
	    }
	    off(evtName, callback) {
	        const { eventHandlers } = this;
	        const mappedEventName = this.getMappedEventName_(evtName);
	        const handlerIndex = this.getIndexOfHandlerForCallback(callback);
	        if (handlerIndex > -1) {
	            const [, handler] = eventHandlers[handlerIndex];
	            this.playerBundle.coordinator.removeEventListener(mappedEventName, handler);
	            eventHandlers.splice(handlerIndex, 1);
	        }
	    }
	    once(evtName, callback) {
	        const handler = evtData => {
	            callback(evtData);
	            this.off(evtName, handler);
	        };
	        this.on(evtName, handler);
	    }
	    emit(evtName, evtData) {
	        this.playerBundle.coordinator.coordinate(this.getMappedEventName_(evtName), evtData);
	    }
	    getMappedEventName_(evtName) {
	        return WebPlayerBundleAdaptor.EVENT_NAME_MAP[evtName] || evtName;
	    }
	}
	WebPlayerBundleAdaptor.EVENT_NAME_MAP = {
	    start: 'dtci.play',
	    playing: 'dtci.playing',
	    pause: 'dtci.pause',
	    complete: 'dtci.contentEnded',
	    loadedMetadata: 'dtci.loadedMetadata',
	    seeked: 'dtci.seeked',
	    dispose: 'dtci.dispose',
	    currentTime: 'dtci.timeupdate',
	    buffer: 'dtci.buffer',
	    error: 'dtci.error',
	    adBreakStart: 'dtci.ads-ad-started',
	    adBreakEnd: 'dtci.ads-ad-ended',
	};

	const NielsenEnvironment = {
	    production: 'PROD',
	    testing: 'TESTING',
	};
	const serviceUrls = {};
	serviceUrls[NielsenEnvironment.production] = 'https://cloudapi.imrworldwide.com/nmapi/v2';
	serviceUrls[NielsenEnvironment.testing] = 'https://sandbox-cloudapi.imrworldwide.com/nmapi/v2';

	class PlayerPlugin {
	    constructor(delegate, config) {
	        this.delegate = delegate;
	        this.config = config;
	        this.didFirstPlay = false;
	        this.didFirstPlayOfContent = false;
	    }
	    