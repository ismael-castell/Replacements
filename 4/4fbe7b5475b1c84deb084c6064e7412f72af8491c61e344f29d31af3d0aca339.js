(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[2888],{

/***/ 59591:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var _typeof = (__webpack_require__(50008)["default"]);

function _regeneratorRuntime() {
  "use strict";
  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */

  module.exports = _regeneratorRuntime = function _regeneratorRuntime() {
    return exports;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  var exports = {},
      Op = Object.prototype,
      hasOwn = Op.hasOwnProperty,
      $Symbol = "function" == typeof Symbol ? Symbol : {},
      iteratorSymbol = $Symbol.iterator || "@@iterator",
      asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",
      toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    return Object.defineProperty(obj, key, {
      value: value,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), obj[key];
  }

  try {
    define({}, "");
  } catch (err) {
    define = function define(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,
        generator = Object.create(protoGenerator.prototype),
        context = new Context(tryLocsList || []);
    return generator._invoke = function (innerFn, self, context) {
      var state = "suspendedStart";
      return function (method, arg) {
        if ("executing" === state) throw new Error("Generator is already running");

        if ("completed" === state) {
          if ("throw" === method) throw arg;
          return doneResult();
        }

        for (context.method = method, context.arg = arg;;) {
          var delegate = context.delegate;

          if (delegate) {
            var delegateResult = maybeInvokeDelegate(delegate, context);

            if (delegateResult) {
              if (delegateResult === ContinueSentinel) continue;
              return delegateResult;
            }
          }

          if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) {
            if ("suspendedStart" === state) throw state = "completed", context.arg;
            context.dispatchException(context.arg);
          } else "return" === context.method && context.abrupt("return", context.arg);
          state = "executing";
          var record = tryCatch(innerFn, self, context);

          if ("normal" === record.type) {
            if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;
            return {
              value: record.arg,
              done: context.done
            };
          }

          "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
        }
      };
    }(innerFn, self, context), generator;
  }

  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }

  exports.wrap = wrap;
  var ContinueSentinel = {};

  function Generator() {}

  function GeneratorFunction() {}

  function GeneratorFunctionPrototype() {}

  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });
  var getProto = Object.getPrototypeOf,
      NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);

  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      define(prototype, method, function (arg) {
        return this._invoke(method, arg);
      });
    });
  }

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);

      if ("throw" !== record.type) {
        var result = record.arg,
            value = result.value;
        return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) {
          invoke("next", value, resolve, reject);
        }, function (err) {
          invoke("throw", err, resolve, reject);
        }) : PromiseImpl.resolve(value).then(function (unwrapped) {
          result.value = unwrapped, resolve(result);
        }, function (error) {
          return invoke("throw", error, resolve, reject);
        });
      }

      reject(record.arg);
    }

    var previousPromise;

    this._invoke = function (method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function (resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
    };
  }

  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];

    if (undefined === method) {
      if (context.delegate = null, "throw" === context.method) {
        if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel;
        context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);
    if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
    var info = record.arg;
    return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
  }

  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };
    1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal", delete record.arg, entry.completion = record;
  }

  function Context(tryLocsList) {
    this.tryEntries = [{
      tryLoc: "root"
    }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);
  }

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) return iteratorMethod.call(iterable);
      if ("function" == typeof iterable.next) return iterable;

      if (!isNaN(iterable.length)) {
        var i = -1,
            next = function next() {
          for (; ++i < iterable.length;) {
            if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;
          }

          return next.value = undefined, next.done = !0, next;
        };

        return next.next = next;
      }
    }

    return {
      next: doneResult
    };
  }

  function doneResult() {
    return {
      value: undefined,
      done: !0
    };
  }

  return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) {
    var ctor = "function" == typeof genFun && genFun.constructor;
    return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
  }, exports.mark = function (genFun) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
  }, exports.awrap = function (arg) {
    return {
      __await: arg
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    void 0 === PromiseImpl && (PromiseImpl = Promise);
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
    return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () {
    return this;
  }), define(Gp, "toString", function () {
    return "[object Generator]";
  }), exports.keys = function (object) {
    var keys = [];

    for (var key in object) {
      keys.push(key);
    }

    return keys.reverse(), function next() {
      for (; keys.length;) {
        var key = keys.pop();
        if (key in object) return next.value = key, next.done = !1, next;
      }

      return next.done = !0, next;
    };
  }, exports.values = values, Context.prototype = {
    constructor: Context,
    reset: function reset(skipTempReset) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) {
        "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);
      }
    },
    stop: function stop() {
      this.done = !0;
      var rootRecord = this.tryEntries[0].completion;
      if ("throw" === rootRecord.type) throw rootRecord.arg;
      return this.rval;
    },
    dispatchException: function dispatchException(exception) {
      if (this.done) throw exception;
      var context = this;

      function handle(loc, caught) {
        return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i],
            record = entry.completion;
        if ("root" === entry.tryLoc) return handle("end");

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc"),
              hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
          } else {
            if (!hasFinally) throw new Error("try statement without catch or finally");
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          }
        }
      }
    },
    abrupt: function abrupt(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
      var record = finallyEntry ? finallyEntry.completion : {};
      return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
    },
    complete: function complete(record, afterLoc) {
      if ("throw" === record.type) throw record.arg;
      return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
    },
    finish: function finish(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
      }
    },
    "catch": function _catch(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;

          if ("throw" === record.type) {
            var thrown = record.arg;
            resetTryEntry(entry);
          }

          return thrown;
        }
      }

      throw new Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
      return this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      }, "next" === this.method && (this.arg = undefined), ContinueSentinel;
    }
  }, exports;
}

module.exports = _regeneratorRuntime, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 50008:
/***/ (function(module) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(obj);
}

module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 87757:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// TODO(Babel 8): Remove this file.

var runtime = __webpack_require__(59591)();
module.exports = runtime;

// Copied from https://github.com/facebook/regenerator/blob/main/packages/runtime/runtime.js#L736=
try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}


/***/ }),

/***/ 6918:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ layouts_Layout; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@elastic/react-search-ui-views/lib/esm/view-helpers/appendClassName.js
var appendClassName = __webpack_require__(82654);
;// CONCATENATED MODULE: ./node_modules/@elastic/react-search-ui-views/lib/esm/layouts/LayoutSidebar.js


class LayoutSidebar extends react.Component {
    constructor(props) {
        super(props);
        this.toggleSidebar = () => {
            this.setState(({ isSidebarToggled }) => ({
                isSidebarToggled: !isSidebarToggled
            }));
        };
        this.renderToggleButton = (label) => {
            if (!this.props.children)
                return null;
            return (react.createElement("button", { hidden: true, type: "button", className: "sui-layout-sidebar-toggle", onClick: this.toggleSidebar }, label));
        };
        this.state = { isSidebarToggled: false };
    }
    render() {
        const { className, children } = this.props;
        const { isSidebarToggled } = this.state;
        const classes = (0,appendClassName/* default */.Z)(className, isSidebarToggled ? `${className}--toggled` : null);
        return (react.createElement(react.Fragment, null,
            this.renderToggleButton("Show Filters"),
            react.createElement("div", { className: classes },
                this.renderToggleButton("Save Filters"),
                children)));
    }
}
/* harmony default export */ var layouts_LayoutSidebar = (LayoutSidebar);

;// CONCATENATED MODULE: ./node_modules/@elastic/react-search-ui-views/lib/esm/layouts/Layout.js



function Layout({ className, children, header, bodyContent, bodyFooter, bodyHeader, sideContent }) {
    return (react.createElement("div", { className: (0,appendClassName/* default */.Z)("sui-layout", className) },
        react.createElement("div", { className: "sui-layout-header" },
            react.createElement("div", { className: "sui-layout-header__inner" }, header)),
        react.createElement("div", { className: "sui-layout-body" },
            react.createElement("div", { className: "sui-layout-body__inner" },
                react.createElement(layouts_LayoutSidebar, { className: "sui-layout-sidebar" }, sideContent),
                react.createElement("div", { className: "sui-layout-main" },
                    react.createElement("div", { className: "sui-layout-main-header" },
                        react.createElement("div", { className: "sui-layout-main-header__inner" }, bodyHeader)),
                    react.createElement("div", { className: "sui-layout-main-body" }, children || bodyContent),
                    react.createElement("div", { className: "sui-layout-main-footer" }, bodyFooter))))));
}
/* harmony default export */ var layouts_Layout = (Layout);


/***/ }),

/***/ 82654:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ appendClassName; }
/* harmony export */ });
function getNewClassName(newClassName) {
    if (!Array.isArray(newClassName))
        return newClassName;
    return newClassName.filter((name) => name).join(" ");
}
function appendClassName(baseClassName, newClassName) {
    if (!newClassName)
        return ((Array.isArray(baseClassName)
            ? baseClassName.join(" ")
            : baseClassName) || "");
    if (!baseClassName)
        return getNewClassName(newClassName) || "";
    return `${baseClassName} ${getNewClassName(newClassName)}`;
}


/***/ }),

/***/ 33877:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);

const SearchContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);
/* harmony default export */ __webpack_exports__["Z"] = (SearchContext);


/***/ }),

/***/ 14293:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ esm_SearchProvider; }
});

// NAMESPACE OBJECT: ./node_modules/@elastic/search-ui/lib/esm/actions/index.js
var actions_namespaceObject = {};
__webpack_require__.r(actions_namespaceObject);
__webpack_require__.d(actions_namespaceObject, {
  "a11yNotify": function() { return a11yNotify; },
  "addFilter": function() { return addFilter; },
  "clearFilters": function() { return clearFilters; },
  "removeFilter": function() { return removeFilter; },
  "reset": function() { return reset_reset; },
  "setCurrent": function() { return setCurrent; },
  "setFilter": function() { return setFilter; },
  "setResultsPerPage": function() { return setResultsPerPage; },
  "setSearchTerm": function() { return setSearchTerm; },
  "setSort": function() { return setSort; },
  "trackAutocompleteClickThrough": function() { return trackAutocompleteClickThrough; },
  "trackClickThrough": function() { return trackClickThrough; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(87462);
;// CONCATENATED MODULE: ./node_modules/resolve-pathname/esm/resolve-pathname.js
function isAbsolute(pathname) {
  return pathname.charAt(0) === '/';
}

// About 1.5x faster than the two-arg version of Array#splice()
function spliceOne(list, index) {
  for (var i = index, k = i + 1, n = list.length; k < n; i += 1, k += 1) {
    list[i] = list[k];
  }

  list.pop();
}

// This implementation is based heavily on node's url.parse
function resolvePathname(to, from) {
  if (from === undefined) from = '';

  var toParts = (to && to.split('/')) || [];
  var fromParts = (from && from.split('/')) || [];

  var isToAbs = to && isAbsolute(to);
  var isFromAbs = from && isAbsolute(from);
  var mustEndAbs = isToAbs || isFromAbs;

  if (to && isAbsolute(to)) {
    // to is absolute
    fromParts = toParts;
  } else if (toParts.length) {
    // to is relative, drop the filename
    fromParts.pop();
    fromParts = fromParts.concat(toParts);
  }

  if (!fromParts.length) return '/';

  var hasTrailingSlash;
  if (fromParts.length) {
    var last = fromParts[fromParts.length - 1];
    hasTrailingSlash = last === '.' || last === '..' || last === '';
  } else {
    hasTrailingSlash = false;
  }

  var up = 0;
  for (var i = fromParts.length; i >= 0; i--) {
    var part = fromParts[i];

    if (part === '.') {
      spliceOne(fromParts, i);
    } else if (part === '..') {
      spliceOne(fromParts, i);
      up++;
    } else if (up) {
      spliceOne(fromParts, i);
      up--;
    }
  }

  if (!mustEndAbs) for (; up--; up) fromParts.unshift('..');

  if (
    mustEndAbs &&
    fromParts[0] !== '' &&
    (!fromParts[0] || !isAbsolute(fromParts[0]))
  )
    fromParts.unshift('');

  var result = fromParts.join('/');

  if (hasTrailingSlash && result.substr(-1) !== '/') result += '/';

  return result;
}

/* harmony default export */ var resolve_pathname = (resolvePathname);

;// CONCATENATED MODULE: ./node_modules/tiny-invariant/dist/tiny-invariant.esm.js
var isProduction = "production" === 'production';
var prefix = 'Invariant failed';
function tiny_invariant_esm_invariant(condition, message) {
    if (condition) {
        return;
    }
    if (isProduction) {
        throw new Error(prefix);
    }
    var provided = typeof message === 'function' ? message() : message;
    var value = provided ? prefix + ": " + provided : prefix;
    throw new Error(value);
}



;// CONCATENATED MODULE: ./node_modules/history/esm/history.js






function addLeadingSlash(path) {
  return path.charAt(0) === '/' ? path : '/' + path;
}
function stripLeadingSlash(path) {
  return path.charAt(0) === '/' ? path.substr(1) : path;
}
function hasBasename(path, prefix) {
  return path.toLowerCase().indexOf(prefix.toLowerCase()) === 0 && '/?#'.indexOf(path.charAt(prefix.length)) !== -1;
}
function stripBasename(path, prefix) {
  return hasBasename(path, prefix) ? path.substr(prefix.length) : path;
}
function stripTrailingSlash(path) {
  return path.charAt(path.length - 1) === '/' ? path.slice(0, -1) : path;
}
function parsePath(path) {
  var pathname = path || '/';
  var search = '';
  var hash = '';
  var hashIndex = pathname.indexOf('#');

  if (hashIndex !== -1) {
    hash = pathname.substr(hashIndex);
    pathname = pathname.substr(0, hashIndex);
  }

  var searchIndex = pathname.indexOf('?');

  if (searchIndex !== -1) {
    search = pathname.substr(searchIndex);
    pathname = pathname.substr(0, searchIndex);
  }

  return {
    pathname: pathname,
    search: search === '?' ? '' : search,
    hash: hash === '#' ? '' : hash
  };
}
function createPath(location) {
  var pathname = location.pathname,
      search = location.search,
      hash = location.hash;
  var path = pathname || '/';
  if (search && search !== '?') path += search.charAt(0) === '?' ? search : "?" + search;
  if (hash && hash !== '#') path += hash.charAt(0) === '#' ? hash : "#" + hash;
  return path;
}

function createLocation(path, state, key, currentLocation) {
  var location;

  if (typeof path === 'string') {
    // Two-arg form: push(path, state)
    location = parsePath(path);
    location.state = state;
  } else {
    // One-arg form: push(location)
    location = (0,esm_extends/* default */.Z)({}, path);
    if (location.pathname === undefined) location.pathname = '';

    if (location.search) {
      if (location.search.charAt(0) !== '?') location.search = '?' + location.search;
    } else {
      location.search = '';
    }

    if (location.hash) {
      if (location.hash.charAt(0) !== '#') location.hash = '#' + location.hash;
    } else {
      location.hash = '';
    }

    if (state !== undefined && location.state === undefined) location.state = state;
  }

  try {
    location.pathname = decodeURI(location.pathname);
  } catch (e) {
    if (e instanceof URIError) {
      throw new URIError('Pathname "' + location.pathname + '" could not be decoded. ' + 'This is likely caused by an invalid percent-encoding.');
    } else {
      throw e;
    }
  }

  if (key) location.key = key;

  if (currentLocation) {
    // Resolve incomplete/relative pathname relative to current location.
    if (!location.pathname) {
      location.pathname = currentLocation.pathname;
    } else if (location.pathname.charAt(0) !== '/') {
      location.pathname = resolve_pathname(location.pathname, currentLocation.pathname);
    }
  } else {
    // When there is no prior location and pathname is empty, set it to /
    if (!location.pathname) {
      location.pathname = '/';
    }
  }

  return location;
}
function locationsAreEqual(a, b) {
  return a.pathname === b.pathname && a.search === b.search && a.hash === b.hash && a.key === b.key && valueEqual(a.state, b.state);
}

function createTransitionManager() {
  var prompt = null;

  function setPrompt(nextPrompt) {
     false ? 0 : void 0;
    prompt = nextPrompt;
    return function () {
      if (prompt === nextPrompt) prompt = null;
    };
  }

  function confirmTransitionTo(location, action, getUserConfirmation, callback) {
    // TODO: If another transition starts while we're still confirming
    // the previous one, we may end up in a weird state. Figure out the
    // best way to handle this.
    if (prompt != null) {
      var result = typeof prompt === 'function' ? prompt(location, action) : prompt;

      if (typeof result === 'string') {
        if (typeof getUserConfirmation === 'function') {
          getUserConfirmation(result, callback);
        } else {
           false ? 0 : void 0;
          callback(true);
        }
      } else {
        // Return false from a transition hook to cancel the transition.
        callback(result !== false);
      }
    } else {
      callback(true);
    }
  }

  var listeners = [];

  function appendListener(fn) {
    var isActive = true;

    function listener() {
      if (isActive) fn.apply(void 0, arguments);
    }

    listeners.push(listener);
    return function () {
      isActive = false;
      listeners = listeners.filter(function (item) {
        return item !== listener;
      });
    };
  }

  function notifyListeners() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    listeners.forEach(function (listener) {
      return listener.apply(void 0, args);
    });
  }

  return {
    setPrompt: setPrompt,
    confirmTransitionTo: confirmTransitionTo,
    appendListener: appendListener,
    notifyListeners: notifyListeners
  };
}

var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
function getConfirmation(message, callback) {
  callback(window.confirm(message)); // eslint-disable-line no-alert
}
/**
 * Returns true if the HTML5 history API is supported. Taken from Modernizr.
 *
 * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
 * changed to avoid false negatives for Windows Phones: https://github.com/reactjs/react-router/issues/586
 */

function supportsHistory() {
  var ua = window.navigator.userAgent;
  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) return false;
  return window.history && 'pushState' in window.history;
}
/**
 * Returns true if browser fires popstate on hash change.
 * IE10 and IE11 do not.
 */

function supportsPopStateOnHashChange() {
  return window.navigator.userAgent.indexOf('Trident') === -1;
}
/**
 * Returns false if using go(n) with hash history causes a full page reload.
 */

function supportsGoWithoutReloadUsingHash() {
  return window.navigator.userAgent.indexOf('Firefox') === -1;
}
/**
 * Returns true if a given popstate event is an extraneous WebKit event.
 * Accounts for the fact that Chrome on iOS fires real popstate events
 * containing undefined state when pressing the back button.
 */

function isExtraneousPopstateEvent(event) {
  return event.state === undefined && navigator.userAgent.indexOf('CriOS') === -1;
}

var PopStateEvent = 'popstate';
var HashChangeEvent = 'hashchange';

function getHistoryState() {
  try {
    return window.history.state || {};
  } catch (e) {
    // IE 11 sometimes throws when accessing window.history.state
    // See https://github.com/ReactTraining/history/pull/289
    return {};
  }
}
/**
 * Creates a history object that uses the HTML5 history API including
 * pushState, replaceState, and the popstate event.
 */


function createBrowserHistory(props) {
  if (props === void 0) {
    props = {};
  }

  !canUseDOM ?  false ? 0 : tiny_invariant_esm_invariant(false) : void 0;
  var globalHistory = window.history;
  var canUseHistory = supportsHistory();
  var needsHashChangeListener = !supportsPopStateOnHashChange();
  var _props = props,
      _props$forceRefresh = _props.forceRefresh,
      forceRefresh = _props$forceRefresh === void 0 ? false : _props$forceRefresh,
      _props$getUserConfirm = _props.getUserConfirmation,
      getUserConfirmation = _props$getUserConfirm === void 0 ? getConfirmation : _props$getUserConfirm,
      _props$keyLength = _props.keyLength,
      keyLength = _props$keyLength === void 0 ? 6 : _props$keyLength;
  var basename = props.basename ? stripTrailingSlash(addLeadingSlash(props.basename)) : '';

  function getDOMLocation(historyState) {
    var _ref = historyState || {},
        key = _ref.key,
        state = _ref.state;

    var _window$location = window.location,
        pathname = _window$location.pathname,
        search = _window$location.search,
        hash = _window$location.hash;
    var path = pathname + search + hash;
     false ? 0 : void 0;
    if (basename) path = stripBasename(path, basename);
    return createLocation(path, state, key);
  }

  function createKey() {
    return Math.random().toString(36).substr(2, keyLength);
  }

  var transitionManager = createTransitionManager();

  function setState(nextState) {
    (0,esm_extends/* default */.Z)(history, nextState);

    history.length = globalHistory.length;
    transitionManager.notifyListeners(history.location, history.action);
  }

  function handlePopState(event) {
    // Ignore extraneous popstate events in WebKit.
    if (isExtraneousPopstateEvent(event)) return;
    handlePop(getDOMLocation(event.state));
  }

  function handleHashChange() {
    handlePop(getDOMLocation(getHistoryState()));
  }

  var forceNextPop = false;

  function handlePop(location) {
    if (forceNextPop) {
      forceNextPop = false;
      setState();
    } else {
      var action = 'POP';
      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (ok) {
          setState({
            action: action,
            location: location
          });
        } else {
          revertPop(location);
        }
      });
    }
  }

  function revertPop(fromLocation) {
    var toLocation = history.location; // TODO: We could probably make this more reliable by
    // keeping a list of keys we've seen in sessionStorage.
    // Instead, we just default to 0 for keys we don't know.

    var toIndex = allKeys.indexOf(toLocation.key);
    if (toIndex === -1) toIndex = 0;
    var fromIndex = allKeys.indexOf(fromLocation.key);
    if (fromIndex === -1) fromIndex = 0;
    var delta = toIndex - fromIndex;

    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  }

  var initialLocation = getDOMLocation(getHistoryState());
  var allKeys = [initialLocation.key]; // Public interface

  function createHref(location) {
    return basename + createPath(location);
  }

  function push(path, state) {
     false ? 0 : void 0;
    var action = 'PUSH';
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var href = createHref(location);
      var key = location.key,
          state = location.state;

      if (canUseHistory) {
        globalHistory.pushState({
          key: key,
          state: state
        }, null, href);

        if (forceRefresh) {
          window.location.href = href;
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);
          var nextKeys = allKeys.slice(0, prevIndex + 1);
          nextKeys.push(location.key);
          allKeys = nextKeys;
          setState({
            action: action,
            location: location
          });
        }
      } else {
         false ? 0 : void 0;
        window.location.href = href;
      }
    });
  }

  function replace(path, state) {
     false ? 0 : void 0;
    var action = 'REPLACE';
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var href = createHref(location);
      var key = location.key,
          state = location.state;

      if (canUseHistory) {
        globalHistory.replaceState({
          key: key,
          state: state
        }, null, href);

        if (forceRefresh) {
          window.location.replace(href);
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);
          if (prevIndex !== -1) allKeys[prevIndex] = location.key;
          setState({
            action: action,
            location: location
          });
        }
      } else {
         false ? 0 : void 0;
        window.location.replace(href);
      }
    });
  }

  function go(n) {
    globalHistory.go(n);
  }

  function goBack() {
    go(-1);
  }

  function goForward() {
    go(1);
  }

  var listenerCount = 0;

  function checkDOMListeners(delta) {
    listenerCount += delta;

    if (listenerCount === 1 && delta === 1) {
      window.addEventListener(PopStateEvent, handlePopState);
      if (needsHashChangeListener) window.addEventListener(HashChangeEvent, handleHashChange);
    } else if (listenerCount === 0) {
      window.removeEventListener(PopStateEvent, handlePopState);
      if (needsHashChangeListener) window.removeEventListener(HashChangeEvent, handleHashChange);
    }
  }

  var isBlocked = false;

  function block(prompt) {
    if (prompt === void 0) {
      prompt = false;
    }

    var unblock = transitionManager.setPrompt(prompt);

    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }

    return function () {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }

      return unblock();
    };
  }

  function listen(listener) {
    var unlisten = transitionManager.appendListener(listener);
    checkDOMListeners(1);
    return function () {
      checkDOMListeners(-1);
      unlisten();
    };
  }

  var history = {
    length: globalHistory.length,
    action: 'POP',
    location: initialLocation,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    block: block,
    listen: listen
  };
  return history;
}

var HashChangeEvent$1 = 'hashchange';
var HashPathCoders = {
  hashbang: {
    encodePath: function encodePath(path) {
      return path.charAt(0) === '!' ? path : '!/' + stripLeadingSlash(path);
    },
    decodePath: function decodePath(path) {
      return path.charAt(0) === '!' ? path.substr(1) : path;
    }
  },
  noslash: {
    encodePath: stripLeadingSlash,
    decodePath: addLeadingSlash
  },
  slash: {
    encodePath: addLeadingSlash,
    decodePath: addLeadingSlash
  }
};

function stripHash(url) {
  var hashIndex = url.indexOf('#');
  return hashIndex === -1 ? url : url.slice(0, hashIndex);
}

function getHashPath() {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  var href = window.location.href;
  var hashIndex = href.indexOf('#');
  return hashIndex === -1 ? '' : href.substring(hashIndex + 1);
}

function pushHashPath(path) {
  window.location.hash = path;
}

function replaceHashPath(path) {
  window.location.replace(stripHash(window.location.href) + '#' + path);
}

function createHashHistory(props) {
  if (props === void 0) {
    props = {};
  }

  !canUseDOM ?  false ? 0 : invariant(false) : void 0;
  var globalHistory = window.history;
  var canGoWithoutReload = supportsGoWithoutReloadUsingHash();
  var _props = props,
      _props$getUserConfirm = _props.getUserConfirmation,
      getUserConfirmation = _props$getUserConfirm === void 0 ? getConfirmation : _props$getUserConfirm,
      _props$hashType = _props.hashType,
      hashType = _props$hashType === void 0 ? 'slash' : _props$hashType;
  var basename = props.basename ? stripTrailingSlash(addLeadingSlash(props.basename)) : '';
  var _HashPathCoders$hashT = HashPathCoders[hashType],
      encodePath = _HashPathCoders$hashT.encodePath,
      decodePath = _HashPathCoders$hashT.decodePath;

  function getDOMLocation() {
    var path = decodePath(getHashPath());
     false ? 0 : void 0;
    if (basename) path = stripBasename(path, basename);
    return createLocation(path);
  }

  var transitionManager = createTransitionManager();

  function setState(nextState) {
    _extends(history, nextState);

    history.length = globalHistory.length;
    transitionManager.notifyListeners(history.location, history.action);
  }

  var forceNextPop = false;
  var ignorePath = null;

  function locationsAreEqual$$1(a, b) {
    return a.pathname === b.pathname && a.search === b.search && a.hash === b.hash;
  }

  function handleHashChange() {
    var path = getHashPath();
    var encodedPath = encodePath(path);

    if (path !== encodedPath) {
      // Ensure we always have a properly-encoded hash.
      replaceHashPath(encodedPath);
    } else {
      var location = getDOMLocation();
      var prevLocation = history.location;
      if (!forceNextPop && locationsAreEqual$$1(prevLocation, location)) return; // A hashchange doesn't always == location change.

      if (ignorePath === createPath(location)) return; // Ignore this change; we already setState in push/replace.

      ignorePath = null;
      handlePop(location);
    }
  }

  function handlePop(location) {
    if (forceNextPop) {
      forceNextPop = false;
      setState();
    } else {
      var action = 'POP';
      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (ok) {
          setState({
            action: action,
            location: location
          });
        } else {
          revertPop(location);
        }
      });
    }
  }

  function revertPop(fromLocation) {
    var toLocation = history.location; // TODO: We could probably make this more reliable by
    // keeping a list of paths we've seen in sessionStorage.
    // Instead, we just default to 0 for paths we don't know.

    var toIndex = allPaths.lastIndexOf(createPath(toLocation));
    if (toIndex === -1) toIndex = 0;
    var fromIndex = allPaths.lastIndexOf(createPath(fromLocation));
    if (fromIndex === -1) fromIndex = 0;
    var delta = toIndex - fromIndex;

    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  } // Ensure the hash is encoded properly before doing anything else.


  var path = getHashPath();
  var encodedPath = encodePath(path);
  if (path !== encodedPath) replaceHashPath(encodedPath);
  var initialLocation = getDOMLocation();
  var allPaths = [createPath(initialLocation)]; // Public interface

  function createHref(location) {
    var baseTag = document.querySelector('base');
    var href = '';

    if (baseTag && baseTag.getAttribute('href')) {
      href = stripHash(window.location.href);
    }

    return href + '#' + encodePath(basename + createPath(location));
  }

  function push(path, state) {
     false ? 0 : void 0;
    var action = 'PUSH';
    var location = createLocation(path, undefined, undefined, history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var path = createPath(location);
      var encodedPath = encodePath(basename + path);
      var hashChanged = getHashPath() !== encodedPath;

      if (hashChanged) {
        // We cannot tell if a hashchange was caused by a PUSH, so we'd
        // rather setState here and ignore the hashchange. The caveat here
        // is that other hash histories in the page will consider it a POP.
        ignorePath = path;
        pushHashPath(encodedPath);
        var prevIndex = allPaths.lastIndexOf(createPath(history.location));
        var nextPaths = allPaths.slice(0, prevIndex + 1);
        nextPaths.push(path);
        allPaths = nextPaths;
        setState({
          action: action,
          location: location
        });
      } else {
         false ? 0 : void 0;
        setState();
      }
    });
  }

  function replace(path, state) {
     false ? 0 : void 0;
    var action = 'REPLACE';
    var location = createLocation(path, undefined, undefined, history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var path = createPath(location);
      var encodedPath = encodePath(basename + path);
      var hashChanged = getHashPath() !== encodedPath;

      if (hashChanged) {
        // We cannot tell if a hashchange was caused by a REPLACE, so we'd
        // rather setState here and ignore the hashchange. The caveat here
        // is that other hash histories in the page will consider it a POP.
        ignorePath = path;
        replaceHashPath(encodedPath);
      }

      var prevIndex = allPaths.indexOf(createPath(history.location));
      if (prevIndex !== -1) allPaths[prevIndex] = path;
      setState({
        action: action,
        location: location
      });
    });
  }

  function go(n) {
     false ? 0 : void 0;
    globalHistory.go(n);
  }

  function goBack() {
    go(-1);
  }

  function goForward() {
    go(1);
  }

  var listenerCount = 0;

  function checkDOMListeners(delta) {
    listenerCount += delta;

    if (listenerCount === 1 && delta === 1) {
      window.addEventListener(HashChangeEvent$1, handleHashChange);
    } else if (listenerCount === 0) {
      window.removeEventListener(HashChangeEvent$1, handleHashChange);
    }
  }

  var isBlocked = false;

  function block(prompt) {
    if (prompt === void 0) {
      prompt = false;
    }

    var unblock = transitionManager.setPrompt(prompt);

    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }

    return function () {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }

      return unblock();
    };
  }

  function listen(listener) {
    var unlisten = transitionManager.appendListener(listener);
    checkDOMListeners(1);
    return function () {
      checkDOMListeners(-1);
      unlisten();
    };
  }

  var history = {
    length: globalHistory.length,
    action: 'POP',
    location: initialLocation,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    block: block,
    listen: listen
  };
  return history;
}

function clamp(n, lowerBound, upperBound) {
  return Math.min(Math.max(n, lowerBound), upperBound);
}
/**
 * Creates a history object that stores locations in memory.
 */


function createMemoryHistory(props) {
  if (props === void 0) {
    props = {};
  }

  var _props = props,
      getUserConfirmation = _props.getUserConfirmation,
      _props$initialEntries = _props.initialEntries,
      initialEntries = _props$initialEntries === void 0 ? ['/'] : _props$initialEntries,
      _props$initialIndex = _props.initialIndex,
      initialIndex = _props$initialIndex === void 0 ? 0 : _props$initialIndex,
      _props$keyLength = _props.keyLength,
      keyLength = _props$keyLength === void 0 ? 6 : _props$keyLength;
  var transitionManager = createTransitionManager();

  function setState(nextState) {
    (0,esm_extends/* default */.Z)(history, nextState);

    history.length = history.entries.length;
    transitionManager.notifyListeners(history.location, history.action);
  }

  function createKey() {
    return Math.random().toString(36).substr(2, keyLength);
  }

  var index = clamp(initialIndex, 0, initialEntries.length - 1);
  var entries = initialEntries.map(function (entry) {
    return typeof entry === 'string' ? createLocation(entry, undefined, createKey()) : createLocation(entry, undefined, entry.key || createKey());
  }); // Public interface

  var createHref = createPath;

  function push(path, state) {
     false ? 0 : void 0;
    var action = 'PUSH';
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var prevIndex = history.index;
      var nextIndex = prevIndex + 1;
      var nextEntries = history.entries.slice(0);

      if (nextEntries.length > nextIndex) {
        nextEntries.splice(nextIndex, nextEntries.length - nextIndex, location);
      } else {
        nextEntries.push(location);
      }

      setState({
        action: action,
        location: location,
        index: nextIndex,
        entries: nextEntries
      });
    });
  }

  function replace(path, state) {
     false ? 0 : void 0;
    var action = 'REPLACE';
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      history.entries[history.index] = location;
      setState({
        action: action,
        location: location
      });
    });
  }

  function go(n) {
    var nextIndex = clamp(history.index + n, 0, history.entries.length - 1);
    var action = 'POP';
    var location = history.entries[nextIndex];
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (ok) {
        setState({
          action: action,
          location: location,
          index: nextIndex
        });
      } else {
        // Mimic the behavior of DOM histories by
        // causing a render after a cancelled POP.
        setState();
      }
    });
  }

  function goBack() {
    go(-1);
  }

  function goForward() {
    go(1);
  }

  function canGo(n) {
    var nextIndex = history.index + n;
    return nextIndex >= 0 && nextIndex < history.entries.length;
  }

  function block(prompt) {
    if (prompt === void 0) {
      prompt = false;
    }

    return transitionManager.setPrompt(prompt);
  }

  function listen(listener) {
    return transitionManager.appendListener(listener);
  }

  var history = {
    length: entries.length,
    action: 'POP',
    location: entries[index],
    index: index,
    entries: entries,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    canGo: canGo,
    block: block,
    listen: listen
  };
  return history;
}



// EXTERNAL MODULE: ./node_modules/qs/lib/index.js
var lib = __webpack_require__(80129);
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);
;// CONCATENATED MODULE: ./node_modules/@elastic/search-ui/lib/esm/preserveTypesEncoder.js
function isTypeNumber(value) {
    return value !== undefined && value !== null && typeof value === "number";
}
function isTypeBoolean(value) {
    return value && typeof value === "boolean";
}
function toBoolean(value) {
    if (value === "true")
        return true;
    if (value === "false")
        return false;
    throw "Invalid type parsed as Boolean value";
}
/* Encoder for qs library which preserve number types on the URL. Numbers
are padded with "n_{number}_n", and booleans with "b_{boolean}_b"*/
/* harmony default export */ var preserveTypesEncoder = ({
    encode(value, encode) {
        if (isTypeNumber(value)) {
            return `n_${value}_n`;
        }
        if (isTypeBoolean(value)) {
            return `b_${value}_b`;
        }
        return encode(value);
    },
    decode(value, decode) {
        //eslint-disable-next-line
        if (/n_-?[\d\.]*_n/.test(value)) {
            const numericValueString = value.substring(2, value.length - 2);
            return Number(numericValueString);
        }
        if (/^b_(true|false)*_b$/.test(value)) {
            const booleanValueString = value.substring(2, value.length - 2);
            return toBoolean(booleanValueString);
        }
        return decode(value);
    }
});

;// CONCATENATED MODULE: ./node_modules/@elastic/search-ui/lib/esm/queryString.js


/* harmony default export */ var queryString = ({
    parse(string) {
        return lib_default().parse(string, {
            ignoreQueryPrefix: true,
            decoder: preserveTypesEncoder.decode,
            arrayLimit: 1000
        });
    },
    stringify(object) {
        return lib_default().stringify(object, {
            encoder: preserveTypesEncoder.encode
        });
    }
});

;// CONCATENATED MODULE: ./node_modules/@elastic/search-ui/lib/esm/URLManager.js


function isNumericString(num) {
    return !isNaN(num);
}
function toSingleValue(val) {
    return Array.isArray(val) ? val[val.length - 1] : val;
}
function toSingleValueInteger(num) {
    return toInteger(toSingleValue(num));
}
function toInteger(num) {
    if (!isNumericString(num))
        return;
    return parseInt(num, 10);
}
function parseFiltersFromQueryParams(queryParams) {
    return queryParams.filters;
}
function parseCurrentFromQueryParams(queryParams) {
    return toSingleValueInteger(queryParams.current);
}
function parseSearchTermFromQueryParams(queryParams) {
    return toSingleValue(queryParams.q);
}
function parseOldSortFromQueryParams(queryParams) {
    const sortField = toSingleValue(queryParams["sort-field"]);
    const sortDirection = toSingleValue(queryParams["sort-direction"]);
    if (sortField)
        return [sortField, sortDirection];
    return [];
}
function parseSizeFromQueryParams(queryParams) {
    return toSingleValueInteger(queryParams.size);
}
function parseSortFromQueryParams(queryParams) {
    return queryParams["sort"];
}
function paramsToState(queryParams) {
    const state = {
        current: parseCurrentFromQueryParams(queryParams),
        filters: parseFiltersFromQueryParams(queryParams),
        searchTerm: parseSearchTermFromQueryParams(queryParams),
        resultsPerPage: parseSizeFromQueryParams(queryParams),
        sortField: parseOldSortFromQueryParams(queryParams)[0],
        sortDirection: parseOldSortFromQueryParams(queryParams)[1],
        sortList: parseSortFromQueryParams(queryParams)
    };
    return Object.keys(state).reduce((acc, key) => {
        const value = state[key];
        if (value)
            acc[key] = value;
        return acc;
    }, {});
}
function stateToParams({ searchTerm, current, filters, resultsPerPage, sortDirection, sortField, sortList }) {
    const params = {};
    if (current > 1)
        params.current = current;
    if (searchTerm)
        params.q = searchTerm;
    if (resultsPerPage)
        params.size = resultsPerPage;
    if (filters && filters.length > 0) {
        params["filters"] = filters;
    }
    if (sortList && sortList.length > 0) {
        params["sort"] = sortList;
    }
    else if (sortField) {
        params["sort-field"] = sortField;
        params["sort-direction"] = sortDirection;
    }
    return params;
}
function stateToQueryString(state) {
    return queryString.stringify(stateToParams(state));
}
/**
 * The URL Manager is responsible for synchronizing state between
 * SearchDriver and the URL. There are 3 main cases we handle when
 * synchronizing:
 *
 * 1. When the app loads, SearchDriver will need to
 * read the current state from the URL, in order to perform the search
 * expressed by the query string. `getStateFromURL` is used for this case.
 *
 * 2. When the URL changes as a result of `pushState` or `replaceState`,
 * SearchDriver will need to be notified and given the updated state, so that
 * it can re-run the current search. `onURLStateChange` is used for this case.
 *
 * 3. When state changes internally in the SearchDriver, as a result of an
 * Action, it will need to notify the URLManager of the change. `pushStateToURL`
 * is used for this case.
 */
class URLManager {
    constructor() {
        this.history =
            typeof window !== "undefined" ? createBrowserHistory() : createMemoryHistory();
        this.lastPushSearchString = "";
    }
    /**
     * Parse the current URL into application state
     *
     * @return {Object} - The parsed state object
     */
    getStateFromURL() {
        const searchString = this.history ? this.history.location.search : "";
        return paramsToState(queryString.parse(searchString));
    }
    /**
     * Push the current state of the application to the URL
     *
     * @param {Object} state - The entire current state from the SearchDriver
     * @param {boolean} options
     * @param {boolean} options.replaceUrl - When pushing state to the URL, use history 'replace'
     * rather than 'push' to avoid adding a new history entry
     */
    pushStateToURL(state, { replaceUrl = false } = {}) {
        const searchString = stateToQueryString(state);
        this.lastPushSearchString = searchString;
        const navigationFunction = replaceUrl
            ? this.history.replace
            : this.history.push;
        navigationFunction({
            search: `?${searchString}`
        });
    }
    /**
     * Add an event handler to be executed whenever state is pushed to the URL
     *
     * @callback requestCallback
     * @param {Object} state - Updated application state parsed from the new URL
     *
     * @param {requestCallback} callback
     */
    onURLStateChange(callback) {
        this.unlisten = this.history.listen((location) => {
            // If this URL is updated as a result of a pushState request, we don't
            // want to notify that the URL changed.
            if (`?${this.lastPushSearchString}` === location.search)
                return;
            // Once we've decided to return based on lastPushSearchString, reset
            // it so that we don't break back / forward button.
            this.lastPushSearchString = "";
            callback(paramsToState(queryString.parse(location.search)));
        });
    }
    tearDown() {
        this.unlisten();
    }
}

;// CONCATENATED MODULE: ./node_modules/@elastic/search-ui/lib/esm/RequestSequencer.js
class RequestSequencer {
    constructor() {
        this.requestSequence = 0;
        this.lastCompleted = 0;
    }
    next() {
        return ++this.requestSequence;
    }
    isOldRequest(request) {
        return request < this.lastCompleted;
    }
    completed(request) {
        this.lastCompleted = request;
    }
}

;// CONCATENATED MODULE: ./node_modules/@elastic/search-ui/lib/esm/DebounceManager.js
/**
 * minimal debounce function
 *
 * mostly for not spamming the server with requests when
 * searching with type ahead
 */
function debounce(func, wait) {
    let timeout;
    const debouncedFn = function () {
        const args = arguments; //eslint-disable-line
        const later = () => {
            func.apply(null, args); //eslint-disable-line
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
    debouncedFn.cancel = () => {
        if (timeout) {
            clearTimeout(timeout);
            timeout = null;
        }
    };
    return debouncedFn;
}
class DebounceManager {
    constructor() {
        this.debounceCache = {};
    }
    /**
     * Dynamically debounce and cache a debounced version of a function at the time of calling that function. This avoids
     * managing debounced version of functions locally.
     *
     * In other words, debounce usually works by debouncing based on
     * referential identity of a function. This works by comparing provided function names.
     *
     * This also has the ability to short-circuit a debounce all-together, if no wait
     * time is provided.
     *
     * Assumption:
     * Functions are debounced on a combination of unique function name and wait times. So debouncing won't work on
     * subsequent calls with different wait times or different functions. That also means that the debounce manager
     * can be used for different functions in parallel, and keep the two functions debounced separately.
     *
     * @param {number} wait Milliseconds to debounce. Executes immediately if falsey.
     * @param {function} fn Function to debounce
     * @param {function} functionName Name of function to debounce, used to create a unique key
     * @param {...any} parameters Parameters to pass to function
     */
    // eslint-disable-next-line  @typescript-eslint/no-explicit-any
    runWithDebounce(wait, functionName, fn, ...parameters) {
        if (!wait) {
            return fn(...parameters);
        }
        const key = `${functionName}|${wait.toString()}`;
        let debounced = this.debounceCache[key];
        if (!debounced) {
            this.debounceCache[key] = debounce(fn, wait);
            debounced = this.debounceCache[key];
        }
        debounced(...parameters);
    }
    /**
     * Cancels existing debounced function calls.
     *
     * This will cancel any debounced function call, regardless of the debounce length that was provided.
     *
     * For example, making the following series of calls will create multiple debounced functions, because
     * they are cached by a combination of unique name and debounce length.
     *
     * runWithDebounce(1000, "_updateSearchResults", this._updateSearchResults)
     * runWithDebounce(500, "_updateSearchResults", this._updateSearchResults)
     * runWithDebounce(1000, "_updateSearchResults", this._updateSearchResults)
     *
     * Calling the following will cancel all of those, if they have not yet executed:
     *
     * cancelByName("_updateSearchResults")
     *
     * @param {string} functionName The name of the function that was debounced. This needs to match exactly what was provided
     * when runWithDebounce was called originally.
     */
    cancelByName(functionName) {
        Object.entries(this.debounceCache)
            .filter(([cachedKey]) => cachedKey.startsWith(`${functionName}|`))
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            .forEach(([_, cachedValue]) => cachedValue.cancel());
    }
}
/**
 * Perform a standard debounce
 *
 * @param {number} wait Milliseconds to debounce. Executes immediately if falsey.
 * @param {function} fn Function to debounce
 */
DebounceManager.debounce = (wait, fn) => {
    return debounce(fn, wait);
};
/* harmony default export */ var esm_DebounceManager = (DebounceManager);

// EXTERNAL MODULE: ./node_modules/@elastic/search-ui/lib/esm/helpers.js
var helpers = __webpack_require__(70008);
;// CONCATENATED MODULE: ./node_modules/@elastic/search-ui/lib/esm/actions/addFilter.js

/**
 * Filter results - Adds to current filter value
 *
 * Will trigger new search
 *
 * @param name String field name to filter on
 * @param value String field value to filter on
 * @param type String (Optional) type of filter to apply
 */
function addFilter(name, value, type = "all") {
    // eslint-disable-next-line no-console
    if (this.debug)
        console.log("Search UI: Action", "addFilter", ...arguments);
    const { filters } = this.state;
    const existingFilter = filters.find((f) => f.field === name && f.type === type) || {};
    const allOtherFilters = filters.filter((f) => f.field !== name || f.type !== type) || [];
    const existingFilterValues = existingFilter.values || [];
    const newFilterValues = existingFilterValues.find((existing) => (0,helpers.doFilterValuesMatch)(existing, value))
        ? existingFilterValues
        : existingFilterValues.concat(value);
    this._updateSearchResults({
        current: 1,
        filters: [
            ...allOtherFilters,
            { field: name, values: newFilterValues, type }
        ]
    });
}

;// CONCATENATED MODULE: ./node_modules/@elastic/search-ui/lib/esm/actions/trackAutocompleteClickThrough.js
/**
 * Report a click through event. A click through event is when a user
 * clicks on a result within an autocomplete Dropdown.
 *
 * @param documentId String The document ID associated with result that was
 * clicked
 * @param tag Array[String] Optional Tags which can be used to categorize
 * this click event
 */
function trackAutocompleteClickThrough(documentId, tags = []) {
    if (this.debug) {
        // eslint-disable-next-line no-console
        console.log("Search UI: Action", "trackAutocompleteClickThrough", ...arguments);
    }
    const { autocompletedResultsRequestId, searchTerm, autocompletedResults } = this.state;
    const resultIndex = autocompletedResults.findIndex((result) => result._meta.id === documentId);
    const result = autocompletedResults[resultIndex];
    this.events.autocompleteResultClick({
        query: searchTerm,
        documentId,
        requestId: autocompletedResultsRequestId,
        tags,
        result,
        resultIndex
    });
}

;// CONCATENATED MODULE: ./node_modules/@elastic/search-ui/lib/esm/actions/clearFilters.js
/**
 * Remove all filters
 *
 * Will trigger new search
 *
 * @param except Array[String] field name of any filters that should remain
 */
function clearFilters(except = []) {
    if (this.debug)
        // eslint-disable-next-line no-console
        console.log("Search UI: Action", "clearFilters", ...arguments);
    const { filters } = this.state;
    const updatedFilters = filters.filter((filter) => {
        const filterField = filter.field;
        return except.includes(filterField);
    });
    this._updateSearchResults({
        current: 1,
        filters: updatedFilters
    });
}

;// CONCATENATED MODULE: ./node_modules/@elastic/search-ui/lib/esm/actions/removeFilter.js

/**
 * Remove filter from results
 *
 * Will trigger new search
 *
 * @param name String field name for filter to remove
 * @param value String (Optional) field value for filter to remove
 * @param type String (Optional) type of filter to remove
 */
function removeFilter(name, value, type) {
    if (this.debug)
        // eslint-disable-next-line no-console
        console.log("Search UI: Action", "removeFilter", ...arguments);
    const { filters } = this.state;
    let updatedFilters = filters;
    if (!value && type) {
        updatedFilters = filters.filter((filter) => !(filter.field === name && filter.type === type));
    }
    else if (value) {
        updatedFilters = (0,helpers.removeSingleFilterValue)(filters, name, value, type);
    }
    else {
        updatedFilters = filters.filter((filter) => filter.field !== name);
    }
    this._updateSearchResults({
        current: 1,
        filters: updatedFilters
    });
}

;// CONCATENATED MODULE: ./node_modules/@elastic/search-ui/lib/esm/actions/reset.js
/**
 * Reset search experience to initial state
 *
 */
function reset_reset() {
    // eslint-disable-next-line no-console
    if (this.debug)
        console.log("Search UI: Action", "reset", ...arguments);
    this._setState(this.startingState);
    if (this.trackUrlState) {
        this.URLManager.pushStateToURL(this.state);
    }
}

;// CONCATENATED MODULE: ./node_modules/@elastic/search-ui/lib/esm/actions/setCurrent.js
/**
 * Set the current page
 *
 * Will trigger new search
 *
 * @param current Integer
 */
function setCurrent(current) {
    // eslint-disable-next-line no-console
    if (this.debug)
        console.log("Search UI: Action", "setCurrent", ...arguments);
    this._updateSearchResults({
        current
    });
}

;// CONCATENATED MODULE: ./node_modules/@elastic/search-ui/lib/esm/actions/setFilter.js
/**
 * Filter results - Replaces current filter value
 *
 * Will trigger new search
 *
 * @param name String field name to filter on
 * @param value FilterValue to apply
 * @param type String (Optional) type of filter to apply
 */
function setFilter(name, value, type = "all") {
    // eslint-disable-next-line no-console
    if (this.debug)
        console.log("Search UI: Action", "setFilter", ...arguments);
    let { filters } = this.state;
    filters = filters.filter((filter) => filter.field !== name || filter.type !== type);
    this._updateSearchResults({
        current: 1,
        filters: [
            ...filters,
            {
                field: name,
                values: [value],
                type
            }
        ]
    });
}

;// CONCATENATED MODULE: ./node_modules/@elastic/search-ui/lib/esm/actions/setResultsPerPage.js
/**
 * Set the number of results to show
 *
 * Will trigger new search
 *
 * @param resultsPerPage Integer
 */
function setResultsPerPage(resultsPerPage) {
    if (this.debug)
        // eslint-disable-next-line no-console
        console.log("Search UI: Action", "setResultsPerPage", ...arguments);
    this._updateSearchResults({
        current: 1,
        resultsPerPage
    });
}

;// CONCATENATED MODULE: ./node_modules/@elastic/search-ui/lib/esm/actions/setSearchTerm.js
/**
 * Set the current search term
 *
 * Will trigger new search
 *
 * @param searchTerm String
 * @param options Object Additional objects
 * @param autocompleteMinimumCharacters Number Only trigger autocomplete if
 * searchTerm has at least this number of characters
 * @param options.autocompleteResults Boolean Fetch autocomplete
 * results?
 * @param options.refresh Boolean Refresh search results?
 * @param options.debounce Length to debounce API calls
 */
function setSearchTerm(searchTerm, { autocompleteMinimumCharacters = 0, autocompleteResults = false, autocompleteSuggestions = false, shouldClearFilters = true, refresh = true, debounce = 0 } = {}) {
    if (this.debug)
        // eslint-disable-next-line no-console
        console.log("Search UI: Action", "setSearchTerm", ...arguments);
    this._setState({ searchTerm });
    if (refresh) {
        this.debounceManager.runWithDebounce(debounce, "_updateSearchResults", this._updateSearchResults, Object.assign({ current: 1 }, (shouldClearFilters && { filters: [] })));
    }
    if ((autocompleteResults || autocompleteSuggestions) &&
        searchTerm.length >= autocompleteMinimumCharacters) {
        this.debounceManager.runWithDebounce(debounce, "_updateAutocomplete", this._updateAutocomplete, searchTerm, {
            autocompleteResults,
            autocompleteSuggestions
        });
    }
}

;// CONCATENATED MODULE: ./node_modules/@elastic/search-ui/lib/esm/actions/setSort.js
/**
 * Set the current sort
 *
 * Will trigger new search
 *
 * @param sort SortList | string
 * @param sortDirection String ["asc"|"desc"]
 */
function setSort(sort, sortDirection) {
    // eslint-disable-next-line no-console
    if (this.debug)
        console.log("Search UI: Action", "setSort", ...arguments);
    const update = {
        current: 1,
        sortList: null,
        sortField: null,
        sortDirection: null
    };
    if (Array.isArray(sort)) {
        update.sortList = sort;
    }
    else {
        update.sortField = sort;
        update.sortDirection = sortDirection;
    }
    this._updateSearchResults(update);
}

;// CONCATENATED MODULE: ./node_modules/@elastic/search-ui/lib/esm/actions/trackClickThrough.js
/**
 * Report a click through event. A click through event is when a user
 * clicks on a result link.
 *
 * @param documentId String The document ID associated with result that was
 * clicked
 * @param tag Array[String] Optional Tags which can be used to categorize
 * this click event
 */
function trackClickThrough(documentId, tags = []) {
    if (this.debug)
        // eslint-disable-next-line no-console
        console.log("Search UI: Action", "trackClickThrough", ...arguments);
    const { requestId, searchTerm, results, current, resultsPerPage } = this.state;
    const resultIndexOnPage = results.findIndex((result) => result._meta.id === documentId);
    const result = results[resultIndexOnPage];
    this.events.resultClick({
        query: searchTerm,
        documentId,
        requestId,
        tags,
        result,
        page: current,
        resultsPerPage,
        resultIndexOnPage
    });
}

;// CONCATENATED MODULE: ./node_modules/@elastic/search-ui/lib/esm/A11yNotifications.js
/**
 * This helper creates a live region that announces the results of certain
 * actions (e.g. searching, paging, etc.), that are otherwise invisible
 * to screen reader users.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions
 */
const regionId = "search-ui-screen-reader-notifications";
const hasDOM = typeof document !== "undefined"; // Prevent errors in SSR apps
const getLiveRegion = () => {
    if (!hasDOM)
        return null;
    let region = document.getElementById(regionId);
    if (region)
        return region;
    region = document.createElement("div");
    region.id = regionId;
    region.setAttribute("role", "status");
    region.setAttribute("aria-live", "polite");
    /**
     * Visually-hidden CSS that's still available to screen readers.
     * We're avoiding putting this in a stylesheet to ensure that this
     * still works for users that opt for custom views & CSS. We're
     * also opting to use CSSOM instead of inline styles to avoid
     * Content Security Policy warnings.
     *
     * @see https://accessibility.18f.gov/hidden-content/
     */
    region.style.position = "absolute";
    region.style.width = "1px";
    region.style.height = "1px";
    region.style.margin = "-1px";
    region.style.padding = "0";
    region.style.border = "0";
    region.style.overflow = "hidden";
    region.style.clip = "rect(0 0 0 0)";
    document.body.appendChild(region);
    return region;
};
const announceToScreenReader = (announcement) => {
    const region = getLiveRegion();
    if (!region)
        return;
    region.textContent = announcement;
};
const defaultMessages = {
    searchResults: ({ start, end, totalResults, searchTerm }) => {
        let message = `Showing ${start} to ${end} results out of ${totalResults}`;
        if (searchTerm)
            message += `, searching for "${searchTerm}".`;
        return message;
    }
};


;// CONCATENATED MODULE: ./node_modules/@elastic/search-ui/lib/esm/actions/a11yNotify.js

/**
 * Announces a specific message in `a11yNotificationMessages`
 * to Search UI's screen reader live region.
 *
 * @param {string} messageFunc - key of a message function in `a11yNotificationMessages`
 * @param {object} [messageArgs] - arguments to pass to the message function, if any
 */
function a11yNotify(messageFunc, messageArgs) {
    if (!this.hasA11yNotifications)
        return;
    const getMessage = this.a11yNotificationMessages[messageFunc];
    if (!getMessage) {
        const errorMessage = `Could not find corresponding message function in a11yNotificationMessages: "${messageFunc}"`;
        console.warn("Action", "a11yNotify", errorMessage);
        return;
    }
    const message = getMessage(messageArgs);
    announceToScreenReader(message);
    if (this.debug) {
        // eslint-disable-next-line no-console
        console.log("Search UI: Action", "a11yNotify", {
            messageFunc,
            messageArgs,
            message
        });
    }
}

;// CONCATENATED MODULE: ./node_modules/@elastic/search-ui/lib/esm/actions/index.js













;// CONCATENATED MODULE: ./node_modules/@elastic/search-ui/lib/esm/Events.js
function wireUpEventHandler(handlerName, apiConnector, handlerParam) {
    if (handlerParam) {
        // Passes a 'next' parameter which allows a handler to work as
        // middleware for a connector
        if (apiConnector) {
            const next = apiConnector[handlerName].bind(apiConnector);
            return (...params) => {
                return handlerParam(...params, next);
            };
        }
        return handlerParam;
    }
    if (apiConnector && apiConnector[handlerName])
        return apiConnector[handlerName].bind(apiConnector);
    return () => {
        throw `No ${handlerName} handler provided and no Connector provided. You must configure one or the other.`;
    };
}
class Events {
    constructor({ apiConnector, onSearch, onAutocomplete, onResultClick, onAutocompleteResultClick } = {}) {
        this.search = wireUpEventHandler("onSearch", apiConnector, onSearch);
        this.autocomplete = wireUpEventHandler("onAutocomplete", apiConnector, onAutocomplete);
        this.resultClick = wireUpEventHandler("onResultClick", apiConnector, onResultClick);
        this.autocompleteResultClick = wireUpEventHandler("onAutocompleteResultClick", apiConnector, onAutocompleteResultClick);
    }
}
/* harmony default export */ var esm_Events = (Events);

;// CONCATENATED MODULE: ./node_modules/@elastic/search-ui/lib/esm/constants.js
const INVALID_CREDENTIALS = "Invalid credentials";

;// CONCATENATED MODULE: ./node_modules/@elastic/search-ui/lib/esm/SearchDriver.js
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};








function filterSearchParameters({ current, filters, resultsPerPage, searchTerm, sortDirection, sortField, sortList }) {
    return {
        current,
        filters,
        resultsPerPage,
        searchTerm,
        sortDirection,
        sortField,
        sortList
    };
}
const DEFAULT_STATE = {
    // Search Parameters -- This is state that represents the input state.
    current: 1,
    filters: [],
    resultsPerPage: 20,
    searchTerm: "",
    sortDirection: "",
    sortField: "",
    sortList: [],
    // Result State -- This state represents state that is updated automatically
    // as the result of changing input state.
    autocompletedResults: [],
    autocompletedResultsRequestId: "",
    autocompletedSuggestions: {},
    autocompletedSuggestionsRequestId: "",
    error: "",
    isLoading: false,
    facets: {},
    requestId: "",
    results: [],
    resultSearchTerm: "",
    totalPages: 0,
    totalResults: 0,
    pagingStart: 0,
    pagingEnd: 0,
    wasSearched: false,
    rawResponse: {}
};
function removeConditionalFacets(facets = {}, conditionalFacets = {}, filters = []) {
    return Object.entries(facets).reduce((acc, [facetKey, facet]) => {
        if (conditionalFacets[facetKey] &&
            typeof conditionalFacets[facetKey] === "function" &&
            !conditionalFacets[facetKey]({ filters })) {
            return acc;
        }
        acc[facetKey] = facet;
        return acc;
    }, {});
}
/*
 * The Driver is a framework agnostic search state manager that is capable
 * syncing state to the url.
 */
class SearchDriver {
    constructor({ apiConnector, autocompleteQuery = {}, debug, initialState, onSearch, onAutocomplete, onResultClick, onAutocompleteResultClick, searchQuery = {}, trackUrlState = true, urlPushDebounceLength = 500, hasA11yNotifications = false, a11yNotificationMessages = {}, alwaysSearchOnInitialLoad = false }) {
        this.state = DEFAULT_STATE;
        /**
         * This method is used to update state and trigger a new autocomplete search.
         *
         * @param {string} searchTerm
         * @param {Object=} Object
         * @param {boolean|Object} options.autocompleteResults - Should autocomplete results
         * @param {boolean|Object} options.autocompleteSuggestions - Should autocomplete suggestions
         */
        this._updateAutocomplete = (searchTerm, 
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        { autocompleteResults, autocompleteSuggestions } = {}) => {
            const requestId = this.autocompleteRequestSequencer.next();
            const queryConfig = Object.assign(Object.assign({}, (autocompleteResults && {
                results: this.autocompleteQuery.results || {}
            })), (autocompleteSuggestions && {
                suggestions: this.autocompleteQuery.suggestions || {}
            }));
            return this.events
                .autocomplete({ searchTerm }, queryConfig)
                .then((autocompleted) => {
                if (this.autocompleteRequestSequencer.isOldRequest(requestId))
                    return;
                this.autocompleteRequestSequencer.completed(requestId);
                this._setState(autocompleted);
            });
        };
        /**
         * This method is used to update state and trigger a new search.
         *
         * @typedef {Object} RequestState
         * @property {number} current
         * @property {number} resultsPerPage
         * @property {string} searchTerm
         * @property {string} sortDirection
         * @property {string} sortField
         * @property {Array} sortList
         *
         * @param {RequestState} searchParameters - RequestState
         * @param {Object=} Object
         * @param {boolean} options.skipPushToUrl - Skip pushing the updated to the URL
         * @param {boolean} options.replaceUrl - When pushing state to the URL, use history 'replace'
         * rather than 'push' to avoid adding a new history entry
         */
        this._updateSearchResults = (searchParameters, { skipPushToUrl = false, replaceUrl = false } = {}) => {
            const { current, filters, resultsPerPage, searchTerm, sortDirection, sortField, sortList } = Object.assign(Object.assign({}, this.state), searchParameters);
            // State updates should always be applied in the order that they are made. This function, _updateSearchResults,
            // makes state updates.
            // In the case where a call to "_updateSearchResults" was made and delayed for X amount of time using
            // `debounceManager.runWithDebounce`, and a subsequent call is made _updateSearchResults before that delay ends, we
            // want to make sure that outstanding call to "_updateSearchResults" is cancelled, as it would apply state updates
            // out of order.
            this.debounceManager.cancelByName("_updateSearchResults");
            this._setState({
                current,
                error: "",
                filters,
                resultsPerPage,
                searchTerm,
                sortDirection,
                sortField,
                sortList
            });
            this._makeSearchRequest({
                skipPushToUrl,
                replaceUrl
            });
        };
        /**
         * This method is separated out from _updateSearchResults so that it
         * can be debounced.
         *
         * By debouncing our API calls, we can effectively allow action chaining.
         *
         * For Ex:
         *
         * If a user needs to make multiple filter updates at once, they could
         * do so by calling an action 3 times in a row:
         *
         *   addFilter("states", "California");
         *   addFilter("states", "Nebraska");
         *   addFilter("states", "Pennsylvania");
         *
         * We don't want to make 3 separate API calls like that in quick succession,
         * so we debounce the API calls.
         *
         * Application state updates are performed in _updateSearchResults, but we
         * wait to make the actual API calls until all actions have been called.
         *
         * @param {Object} options
         * @param {boolean} options.skipPushToUrl - Skip pushing the updated to the URL
         * @param {boolean} options.replaceUrl - When pushing state to the URL, use history 'replace'
         * rather than 'push' to avoid adding a new history entry
         */
        this._makeSearchRequest = esm_DebounceManager.debounce(0, ({ skipPushToUrl, replaceUrl }) => {
            const { current, filters, resultsPerPage, searchTerm, sortDirection, sortField, sortList } = this.state;
            this._setState({
                isLoading: true
            });
            const requestId = this.searchRequestSequencer.next();
            const _a = this.searchQuery, { 
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            filters: searchQueryFilters, conditionalFacets: conditionalFacets } = _a, restOfSearchQuery = __rest(_a, ["filters", "conditionalFacets"]);
            const queryConfig = Object.assign(Object.assign({}, restOfSearchQuery), { facets: removeConditionalFacets(this.searchQuery.facets, conditionalFacets, filters) });
            const requestState = Object.assign(Object.assign({}, filterSearchParameters(this.state)), { filters: (0,helpers.mergeFilters)(filters, this.searchQuery.filters) });
            return this.events.search(requestState, queryConfig).then((resultState) => {
                if (this.searchRequestSequencer.isOldRequest(requestId))
                    return;
                this.searchRequestSequencer.completed(requestId);
                // Results paging start & end
                const { totalResults } = resultState;
                const start = totalResults === 0 ? 0 : (current - 1) * resultsPerPage + 1;
                const end = totalResults < start + resultsPerPage
                    ? totalResults
                    : start + resultsPerPage - 1;
                this._setState(Object.assign(Object.assign({ isLoading: false, resultSearchTerm: searchTerm, pagingStart: start, pagingEnd: end }, resultState), { wasSearched: true }));
                if (this.hasA11yNotifications) {
                    const messageArgs = { start, end, totalResults, searchTerm };
                    this.actions.a11yNotify("searchResults", messageArgs);
                }
                if (!skipPushToUrl && this.trackUrlState) {
                    // We debounce here so that we don't get a lot of intermediary
                    // URL state if someone is updating a UI really fast, like typing
                    // in a live search box for instance.
                    this.debounceManager.runWithDebounce(this.urlPushDebounceLength, "pushStateToURL", this.URLManager.pushStateToURL.bind(this.URLManager), {
                        current,
                        filters,
                        resultsPerPage,
                        searchTerm,
                        sortDirection,
                        sortField,
                        sortList
                    }, { replaceUrl });
                }
            }, (error) => {
                var _a;
                if (error.message === INVALID_CREDENTIALS) {
                    // The connector should have invalidated the credentials in its state by now
                    // Getting the latest state from the connector
                    this._setState(Object.assign({}, (((_a = this.apiConnector) === null || _a === void 0 ? void 0 : _a.state) && Object.assign({}, this.apiConnector.state))));
                    // Stop execution of request
                    // and let the consuming application handle the missing credentials
                    return;
                }
                this._setState({
                    error: `An unexpected error occurred: ${error.message}`
                });
            });
        });
        this.actions = Object.entries(actions_namespaceObject).reduce((acc, [actionName, action]) => {
            return Object.assign(Object.assign({}, acc), { [actionName]: action.bind(this) });
        }, {});
        this.actions = Object.assign(Object.assign({}, this.actions), ((apiConnector === null || apiConnector === void 0 ? void 0 : apiConnector.actions) && Object.assign({}, apiConnector.actions)));
        Object.assign(this, this.actions);
        this.events = new esm_Events({
            apiConnector,
            onSearch,
            onAutocomplete,
            onResultClick,
            onAutocompleteResultClick
        });
        this.debug = debug;
        if (this.debug) {
            console.warn("Search UI Debugging is enabled. This should be turned off in production deployments.");
            if (typeof window !== "undefined")
                window["searchUI"] = this;
        }
        this.autocompleteRequestSequencer = new RequestSequencer();
        this.searchRequestSequencer = new RequestSequencer();
        this.debounceManager = new esm_DebounceManager();
        this.autocompleteQuery = autocompleteQuery;
        this.searchQuery = searchQuery;
        this.subscriptions = [];
        this.trackUrlState = trackUrlState;
        this.urlPushDebounceLength = urlPushDebounceLength;
        this.alwaysSearchOnInitialLoad = alwaysSearchOnInitialLoad;
        this.apiConnector = apiConnector;
        let urlState;
        if (trackUrlState) {
            this.URLManager = new URLManager();
            urlState = this.URLManager.getStateFromURL();
            this.URLManager.onURLStateChange((urlState) => {
                this._updateSearchResults(Object.assign(Object.assign({}, DEFAULT_STATE), urlState), { skipPushToUrl: true });
            });
        }
        else {
            urlState = {};
        }
        // Manage screen reader accessible notifications
        this.hasA11yNotifications = hasA11yNotifications;
        if (this.hasA11yNotifications)
            getLiveRegion();
        this.a11yNotificationMessages = Object.assign(Object.assign({}, defaultMessages), a11yNotificationMessages);
        // Remember the state this application is initialized into, so that we can
        // reset to it later.
        this.startingState = Object.assign(Object.assign({}, this.state), initialState);
        // We filter these here to disallow anything other than valid search
        // parameters to be passed in initial state, or url state. `results`, etc,
        // should not be allowed to be passed in, that should be generated based on
        // the results of the query
        const searchParameters = filterSearchParameters(Object.assign(Object.assign({}, this.startingState), urlState));
        // Initialize the state without calling _setState, because we don't
        // want to trigger an update callback, we're just initializing the state
        // to the correct default values for the initial UI render
        this.state = Object.assign(Object.assign(Object.assign({}, this.state), ((apiConnector === null || apiConnector === void 0 ? void 0 : apiConnector.state) && Object.assign({}, apiConnector.state))), searchParameters);
        // We'll trigger an initial search if initial parameters contain
        // a search term or filters, or if alwaysSearchOnInitialLoad is set.
        // Otherwise, we'll just save their selections in state as initial values.
        if (searchParameters.searchTerm ||
            searchParameters.filters.length > 0 ||
            this.alwaysSearchOnInitialLoad) {
            this._updateSearchResults(searchParameters, { replaceUrl: true });
        }
    }
    _setState(newState) {
        const state = Object.assign(Object.assign({}, this.state), newState);
        // eslint-disable-next-line no-console
        if (this.debug)
            console.log("Search UI: State Update", newState, state);
        this.state = state;
        this.subscriptions.forEach((subscription) => subscription(state));
    }
    /**
     * Dynamically update the searchQuery configuration in this driver.
     * This will issue a new query after being updated.
     *
     * @param Object searchQuery
     */
    setSearchQuery(searchQuery) {
        this.searchQuery = searchQuery;
        this._updateSearchResults({});
    }
    /**
     * @param Object autocompleteQuery
     */
    setAutocompleteQuery(autocompleteQuery) {
        this.autocompleteQuery = autocompleteQuery;
    }
    /**
     * Any time state is updated in this Driver, the provided callback
     * will be executed with the updated state.
     *
     * @param onStateChange Function
     */
    subscribeToStateChanges(onStateChange) {
        this.subscriptions.push(onStateChange);
    }
    /**
     * @param onStateChange Function
     */
    unsubscribeToStateChanges(onStateChange) {
        this.subscriptions = this.subscriptions.filter((sub) => sub !== onStateChange);
    }
    /**
     * Remove all listeners
     */
    tearDown() {
        this.subscriptions = [];
        this.URLManager && this.URLManager.tearDown();
    }
    /**
     * Retrieves all available actions
     *
     * @returns Object All actions
     */
    getActions() {
        return this.actions;
    }
    /**
     * Retrieve current state. Typically used on app initialization. Subsequent
     * state updates should come through subscription.
     *
     * @returns Object Current state
     */
    getState() {
        // We return a copy of state here, because we want to ensure the state
        // inside of this object remains immutable.
        return Object.assign({}, this.state);
    }
}
/* harmony default export */ var esm_SearchDriver = (SearchDriver);

// EXTERNAL MODULE: ./node_modules/@elastic/react-search-ui/lib/esm/SearchContext.js
var SearchContext = __webpack_require__(33877);
;// CONCATENATED MODULE: ./node_modules/@elastic/react-search-ui/lib/esm/A11yNotifications.js
/**
 * Accessibility notifications
 * @see packages/search-ui/src/A11yNotifications.js
 */
const A11yNotifications_defaultMessages = {
    moreFilters: ({ visibleOptionsCount, showingAll }) => {
        let message = showingAll ? "All " : "";
        message += `${visibleOptionsCount} options shown.`;
        return message;
    }
};
/* harmony default export */ var A11yNotifications = (A11yNotifications_defaultMessages);

;// CONCATENATED MODULE: ./node_modules/@elastic/react-search-ui/lib/esm/SearchProvider.js




/**
 * The SearchProvider primarily holds a reference to the SearchDriver and
 * exposes it to the rest of the application in a Context.
 */
const SearchProvider = ({ children, config, driver }) => {
    const [driverInstance, setDriverInstance] = (0,react.useState)(null);
    (0,react.useEffect)(() => {
        // This initialization is done inside of useEffect, because initializing the SearchDriver server side
        // will error out, since the driver depends on window. Placing the initialization inside of useEffect
        // assures that it won't attempt to initialize server side.
        const currentDriver = driver ||
            new esm_SearchDriver(Object.assign(Object.assign({}, config), { a11yNotificationMessages: Object.assign(Object.assign({}, A11yNotifications), config.a11yNotificationMessages) }));
        setDriverInstance(currentDriver);
        return () => {
            currentDriver.tearDown();
        };
    }, []);
    // This effect allows users to dynamically update their searchQuery without re-mounting a SearchProvider,
    // which would be destructive. An example of why this is useful is dynamically updating facets.
    (0,react.useEffect)(() => {
        if (driverInstance) {
            driverInstance.setSearchQuery(config.searchQuery);
        }
    }, [config.searchQuery]);
    (0,react.useEffect)(() => {
        if (driverInstance) {
            driverInstance.setAutocompleteQuery(config.autocompleteQuery);
        }
    }, [config.autocompleteQuery]);
    // Since driver is initialized in useEffect above, we are waiting
    // to render until the driver is available.
    if (!driverInstance)
        return null;
    // Passing the entire "this.state" to the Context is significant. Because
    // Context determines when to re-render based on referential identity
    // something like this could cause unnecessary renders:
    //
    // <SearchContext.Provider value={{driver: this.state.driver}}>
    //
    // By passing the entire state, we ensure that re-renders only occur when
    // state is actually updated.
    const contextValue = {
        driver: driverInstance
    };
    return (react.createElement(SearchContext/* default.Provider */.Z.Provider, { value: contextValue }, children));
};
/* harmony default export */ var esm_SearchProvider = (SearchProvider);


/***/ }),

/***/ 21788:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _withSearch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7433);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45697);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);



function WithSearch({ mapContextToProps, children }) {
    const Search = (0,_withSearch__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(mapContextToProps)((props) => {
        return children(props);
    });
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Search, null);
}
WithSearch.propTypes = {
    mapContextToProps: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func),
    children: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func.isRequired)
};
/* harmony default export */ __webpack_exports__["Z"] = (WithSearch);


/***/ }),

/***/ 18297:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ containers_SearchBox; }
});

// UNUSED EXPORTS: SearchBoxContainer

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(63366);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(87462);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__(97326);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
var inheritsLoose = __webpack_require__(94578);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(45697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/react-is/index.js
var react_is = __webpack_require__(59864);
;// CONCATENATED MODULE: ./node_modules/compute-scroll-into-view/dist/index.module.js
function t(t){return"object"==typeof t&&null!=t&&1===t.nodeType}function e(t,e){return(!e||"hidden"!==t)&&"visible"!==t&&"clip"!==t}function n(t,n){if(t.clientHeight<t.scrollHeight||t.clientWidth<t.scrollWidth){var r=getComputedStyle(t,null);return e(r.overflowY,n)||e(r.overflowX,n)||function(t){var e=function(t){if(!t.ownerDocument||!t.ownerDocument.defaultView)return null;try{return t.ownerDocument.defaultView.frameElement}catch(t){return null}}(t);return!!e&&(e.clientHeight<t.scrollHeight||e.clientWidth<t.scrollWidth)}(t)}return!1}function r(t,e,n,r,i,o,l,d){return o<t&&l>e||o>t&&l<e?0:o<=t&&d<=n||l>=e&&d>=n?o-t-r:l>e&&d<n||o<t&&d>n?l-e+i:0}/* harmony default export */ function index_module(e,i){var o=window,l=i.scrollMode,d=i.block,u=i.inline,h=i.boundary,a=i.skipOverflowHiddenElements,c="function"==typeof h?h:function(t){return t!==h};if(!t(e))throw new TypeError("Invalid target");for(var f=document.scrollingElement||document.documentElement,s=[],p=e;t(p)&&c(p);){if((p=p.parentElement)===f){s.push(p);break}null!=p&&p===document.body&&n(p)&&!n(document.documentElement)||null!=p&&n(p,a)&&s.push(p)}for(var m=o.visualViewport?o.visualViewport.width:innerWidth,g=o.visualViewport?o.visualViewport.height:innerHeight,w=window.scrollX||pageXOffset,v=window.scrollY||pageYOffset,W=e.getBoundingClientRect(),b=W.height,H=W.width,y=W.top,E=W.right,M=W.bottom,V=W.left,x="start"===d||"nearest"===d?y:"end"===d?M:y+b/2,I="center"===u?V+H/2:"end"===u?E:V,C=[],T=0;T<s.length;T++){var k=s[T],B=k.getBoundingClientRect(),D=B.height,O=B.width,R=B.top,X=B.right,Y=B.bottom,L=B.left;if("if-needed"===l&&y>=0&&V>=0&&M<=g&&E<=m&&y>=R&&M<=Y&&V>=L&&E<=X)return C;var S=getComputedStyle(k),j=parseInt(S.borderLeftWidth,10),q=parseInt(S.borderTopWidth,10),z=parseInt(S.borderRightWidth,10),A=parseInt(S.borderBottomWidth,10),F=0,G=0,J="offsetWidth"in k?k.offsetWidth-k.clientWidth-j-z:0,K="offsetHeight"in k?k.offsetHeight-k.clientHeight-q-A:0;if(f===k)F="start"===d?x:"end"===d?x-g:"nearest"===d?r(v,v+g,g,q,A,v+x,v+x+b,b):x-g/2,G="start"===u?I:"center"===u?I-m/2:"end"===u?I-m:r(w,w+m,m,j,z,w+I,w+I+H,H),F=Math.max(0,F+v),G=Math.max(0,G+w);else{F="start"===d?x-R-q:"end"===d?x-Y+A+K:"nearest"===d?r(R,Y,D,q,A+K,x,x+b,b):x-(R+D/2)+K/2,G="start"===u?I-L-j:"center"===u?I-(L+O/2)+J/2:"end"===u?I-X+z+J:r(L,X,O,j,z+J,I,I+H,H);var N=k.scrollLeft,P=k.scrollTop;x+=P-(F=Math.max(0,Math.min(P+F,k.scrollHeight-D+K))),I+=N-(G=Math.max(0,Math.min(N+G,k.scrollWidth-O+J)))}C.push({el:k,top:F,left:G})}return C}
//# sourceMappingURL=index.module.js.map

;// CONCATENATED MODULE: ./node_modules/downshift/dist/downshift.esm.js









var idCounter = 0;
/**
 * Accepts a parameter and returns it if it's a function
 * or a noop function if it's not. This allows us to
 * accept a callback, but not worry about it if it's not
 * passed.
 * @param {Function} cb the callback
 * @return {Function} a function
 */

function cbToCb(cb) {
  return typeof cb === 'function' ? cb : noop;
}

function noop() {}
/**
 * Scroll node into view if necessary
 * @param {HTMLElement} node the element that should scroll into view
 * @param {HTMLElement} menuNode the menu element of the component
 */


function scrollIntoView(node, menuNode) {
  if (node === null) {
    return;
  }

  var actions = index_module(node, {
    boundary: menuNode,
    block: 'nearest',
    scrollMode: 'if-needed'
  });
  actions.forEach(function (_ref) {
    var el = _ref.el,
        top = _ref.top,
        left = _ref.left;
    el.scrollTop = top;
    el.scrollLeft = left;
  });
}
/**
 * @param {HTMLElement} parent the parent node
 * @param {HTMLElement} child the child node
 * @return {Boolean} whether the parent is the child or the child is in the parent
 */


function isOrContainsNode(parent, child) {
  return parent === child || parent.contains && parent.contains(child);
}
/**
 * Simple debounce implementation. Will call the given
 * function once after the time given has passed since
 * it was last called.
 * @param {Function} fn the function to call after the time
 * @param {Number} time the time to wait
 * @return {Function} the debounced function
 */


function debounce(fn, time) {
  var timeoutId;

  function cancel() {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
  }

  function wrapper() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    cancel();
    timeoutId = setTimeout(function () {
      timeoutId = null;
      fn.apply(void 0, args);
    }, time);
  }

  wrapper.cancel = cancel;
  return wrapper;
}
/**
 * This is intended to be used to compose event handlers.
 * They are executed in order until one of them sets
 * `event.preventDownshiftDefault = true`.
 * @param {...Function} fns the event handler functions
 * @return {Function} the event handler to add to an element
 */


function callAllEventHandlers() {
  for (var _len2 = arguments.length, fns = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    fns[_key2] = arguments[_key2];
  }

  return function (event) {
    for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
      args[_key3 - 1] = arguments[_key3];
    }

    return fns.some(function (fn) {
      if (fn) {
        fn.apply(void 0, [event].concat(args));
      }

      return event.preventDownshiftDefault || event.hasOwnProperty('nativeEvent') && event.nativeEvent.preventDownshiftDefault;
    });
  };
}

function handleRefs() {
  for (var _len4 = arguments.length, refs = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    refs[_key4] = arguments[_key4];
  }

  return function (node) {
    refs.forEach(function (ref) {
      if (typeof ref === 'function') {
        ref(node);
      } else if (ref) {
        ref.current = node;
      }
    });
  };
}
/**
 * This generates a unique ID for an instance of Downshift
 * @return {String} the unique ID
 */


function generateId() {
  return String(idCounter++);
}
/**
 * Resets idCounter to 0. Used for SSR.
 */


function resetIdCounter() {
  idCounter = 0;
}
/**
 * @param {Object} param the downshift state and other relevant properties
 * @return {String} the a11y status message
 */


function getA11yStatusMessage(_ref2) {
  var isOpen = _ref2.isOpen,
      selectedItem = _ref2.selectedItem,
      resultCount = _ref2.resultCount,
      previousResultCount = _ref2.previousResultCount,
      itemToString = _ref2.itemToString;

  if (!isOpen) {
    return selectedItem ? itemToString(selectedItem) : '';
  }

  if (!resultCount) {
    return 'No results are available.';
  }

  if (resultCount !== previousResultCount) {
    return resultCount + " result" + (resultCount === 1 ? ' is' : 's are') + " available, use up and down arrow keys to navigate. Press Enter key to select.";
  }

  return '';
}
/**
 * Takes an argument and if it's an array, returns the first item in the array
 * otherwise returns the argument
 * @param {*} arg the maybe-array
 * @param {*} defaultValue the value if arg is falsey not defined
 * @return {*} the arg or it's first item
 */


function unwrapArray(arg, defaultValue) {
  arg = Array.isArray(arg) ?
  /* istanbul ignore next (preact) */
  arg[0] : arg;

  if (!arg && defaultValue) {
    return defaultValue;
  } else {
    return arg;
  }
}
/**
 * @param {Object} element (P)react element
 * @return {Boolean} whether it's a DOM element
 */


function isDOMElement(element) {
  // then we assume this is react
  return typeof element.type === 'string';
}
/**
 * @param {Object} element (P)react element
 * @return {Object} the props
 */


function getElementProps(element) {
  return element.props;
}
/**
 * Throws a helpful error message for required properties. Useful
 * to be used as a default in destructuring or object params.
 * @param {String} fnName the function name
 * @param {String} propName the prop name
 */


function requiredProp(fnName, propName) {
  // eslint-disable-next-line no-console
  console.error("The property \"" + propName + "\" is required in \"" + fnName + "\"");
}

var stateKeys = ['highlightedIndex', 'inputValue', 'isOpen', 'selectedItem', 'type'];
/**
 * @param {Object} state the state object
 * @return {Object} state that is relevant to downshift
 */

function pickState(state) {
  if (state === void 0) {
    state = {};
  }

  var result = {};
  stateKeys.forEach(function (k) {
    if (state.hasOwnProperty(k)) {
      result[k] = state[k];
    }
  });
  return result;
}
/**
 * Normalizes the 'key' property of a KeyboardEvent in IE/Edge
 * @param {Object} event a keyboardEvent object
 * @return {String} keyboard key
 */


function normalizeArrowKey(event) {
  var key = event.key,
      keyCode = event.keyCode;
  /* istanbul ignore next (ie) */

  if (keyCode >= 37 && keyCode <= 40 && key.indexOf('Arrow') !== 0) {
    return "Arrow" + key;
  }

  return key;
}
/**
 * Simple check if the value passed is object literal
 * @param {*} obj any things
 * @return {Boolean} whether it's object literal
 */


function isPlainObject(obj) {
  return Object.prototype.toString.call(obj) === '[object Object]';
}
/**
 * Returns the new index in the list, in a circular way. If next value is out of bonds from the total,
 * it will wrap to either 0 or itemCount - 1.
 *
 * @param {number} moveAmount Number of positions to move. Negative to move backwards, positive forwards.
 * @param {number} baseIndex The initial position to move from.
 * @param {number} itemCount The total number of items.
 * @returns {number} The new index after the move.
 */


function getNextWrappingIndex(moveAmount, baseIndex, itemCount) {
  var itemsLastIndex = itemCount - 1;

  if (typeof baseIndex !== 'number' || baseIndex < 0 || baseIndex >= itemCount) {
    baseIndex = moveAmount > 0 ? -1 : itemsLastIndex + 1;
  }

  var newIndex = baseIndex + moveAmount;

  if (newIndex < 0) {
    newIndex = itemsLastIndex;
  } else if (newIndex > itemsLastIndex) {
    newIndex = 0;
  }

  return newIndex;
}

var cleanupStatus = debounce(function () {
  getStatusDiv().textContent = '';
}, 500);
/**
 * @param {String} status the status message
 * @param {Object} documentProp document passed by the user.
 */

function setStatus(status, documentProp) {
  var div = getStatusDiv(documentProp);

  if (!status) {
    return;
  }

  div.textContent = status;
  cleanupStatus();
}
/**
 * Get the status node or create it if it does not already exist.
 * @param {Object} documentProp document passed by the user.
 * @return {HTMLElement} the status node.
 */


function getStatusDiv(documentProp) {
  if (documentProp === void 0) {
    documentProp = document;
  }

  var statusDiv = documentProp.getElementById('a11y-status-message');

  if (statusDiv) {
    return statusDiv;
  }

  statusDiv = documentProp.createElement('div');
  statusDiv.setAttribute('id', 'a11y-status-message');
  statusDiv.setAttribute('role', 'status');
  statusDiv.setAttribute('aria-live', 'polite');
  statusDiv.setAttribute('aria-relevant', 'additions text');
  Object.assign(statusDiv.style, {
    border: '0',
    clip: 'rect(0 0 0 0)',
    height: '1px',
    margin: '-1px',
    overflow: 'hidden',
    padding: '0',
    position: 'absolute',
    width: '1px'
  });
  documentProp.body.appendChild(statusDiv);
  return statusDiv;
}

var unknown =  false ? 0 : 0;
var mouseUp =  false ? 0 : 1;
var itemMouseEnter =  false ? 0 : 2;
var keyDownArrowUp =  false ? 0 : 3;
var keyDownArrowDown =  false ? 0 : 4;
var keyDownEscape =  false ? 0 : 5;
var keyDownEnter =  false ? 0 : 6;
var keyDownHome =  false ? 0 : 7;
var keyDownEnd =  false ? 0 : 8;
var clickItem =  false ? 0 : 9;
var blurInput =  false ? 0 : 10;
var changeInput =  false ? 0 : 11;
var keyDownSpaceButton =  false ? 0 : 12;
var clickButton =  false ? 0 : 13;
var blurButton =  false ? 0 : 14;
var controlledPropUpdatedSelectedItem =  false ? 0 : 15;
var touchEnd =  false ? 0 : 16;

var stateChangeTypes = /*#__PURE__*/Object.freeze({
  __proto__: null,
  unknown: unknown,
  mouseUp: mouseUp,
  itemMouseEnter: itemMouseEnter,
  keyDownArrowUp: keyDownArrowUp,
  keyDownArrowDown: keyDownArrowDown,
  keyDownEscape: keyDownEscape,
  keyDownEnter: keyDownEnter,
  keyDownHome: keyDownHome,
  keyDownEnd: keyDownEnd,
  clickItem: clickItem,
  blurInput: blurInput,
  changeInput: changeInput,
  keyDownSpaceButton: keyDownSpaceButton,
  clickButton: clickButton,
  blurButton: blurButton,
  controlledPropUpdatedSelectedItem: controlledPropUpdatedSelectedItem,
  touchEnd: touchEnd
});

var Downshift =
/*#__PURE__*/
function () {
  var Downshift =
  /*#__PURE__*/
  function (_Component) {
    (0,inheritsLoose/* default */.Z)(Downshift, _Component);

    function Downshift(_props) {
      var _this = _Component.call(this, _props) || this;

      _this.id = _this.props.id || "downshift-" + generateId();
      _this.menuId = _this.props.menuId || _this.id + "-menu";
      _this.labelId = _this.props.labelId || _this.id + "-label";
      _this.inputId = _this.props.inputId || _this.id + "-input";

      _this.getItemId = _this.props.getItemId || function (index) {
        return _this.id + "-item-" + index;
      };

      _this.input = null;
      _this.items = [];
      _this.itemCount = null;
      _this.previousResultCount = 0;
      _this.timeoutIds = [];

      _this.internalSetTimeout = function (fn, time) {
        var id = setTimeout(function () {
          _this.timeoutIds = _this.timeoutIds.filter(function (i) {
            return i !== id;
          });
          fn();
        }, time);

        _this.timeoutIds.push(id);
      };

      _this.setItemCount = function (count) {
        _this.itemCount = count;
      };

      _this.unsetItemCount = function () {
        _this.itemCount = null;
      };

      _this.setHighlightedIndex = function (highlightedIndex, otherStateToSet) {
        if (highlightedIndex === void 0) {
          highlightedIndex = _this.props.defaultHighlightedIndex;
        }

        if (otherStateToSet === void 0) {
          otherStateToSet = {};
        }

        otherStateToSet = pickState(otherStateToSet);

        _this.internalSetState((0,esm_extends/* default */.Z)({
          highlightedIndex: highlightedIndex
        }, otherStateToSet));
      };

      _this.clearSelection = function (cb) {
        _this.internalSetState({
          selectedItem: null,
          inputValue: '',
          highlightedIndex: _this.props.defaultHighlightedIndex,
          isOpen: _this.props.defaultIsOpen
        }, cb);
      };

      _this.selectItem = function (item, otherStateToSet, cb) {
        otherStateToSet = pickState(otherStateToSet);

        _this.internalSetState((0,esm_extends/* default */.Z)({
          isOpen: _this.props.defaultIsOpen,
          highlightedIndex: _this.props.defaultHighlightedIndex,
          selectedItem: item,
          inputValue: _this.props.itemToString(item)
        }, otherStateToSet), cb);
      };

      _this.selectItemAtIndex = function (itemIndex, otherStateToSet, cb) {
        var item = _this.items[itemIndex];

        if (item == null) {
          return;
        }

        _this.selectItem(item, otherStateToSet, cb);
      };

      _this.selectHighlightedItem = function (otherStateToSet, cb) {
        return _this.selectItemAtIndex(_this.getState().highlightedIndex, otherStateToSet, cb);
      };

      _this.internalSetState = function (stateToSet, cb) {
        var isItemSelected, onChangeArg;
        var onStateChangeArg = {};
        var isStateToSetFunction = typeof stateToSet === 'function'; // we want to call `onInputValueChange` before the `setState` call
        // so someone controlling the `inputValue` state gets notified of
        // the input change as soon as possible. This avoids issues with
        // preserving the cursor position.
        // See https://github.com/downshift-js/downshift/issues/217 for more info.

        if (!isStateToSetFunction && stateToSet.hasOwnProperty('inputValue')) {
          _this.props.onInputValueChange(stateToSet.inputValue, (0,esm_extends/* default */.Z)({}, _this.getStateAndHelpers(), {}, stateToSet));
        }

        return _this.setState(function (state) {
          state = _this.getState(state);
          var newStateToSet = isStateToSetFunction ? stateToSet(state) : stateToSet; // Your own function that could modify the state that will be set.

          newStateToSet = _this.props.stateReducer(state, newStateToSet); // checks if an item is selected, regardless of if it's different from
          // what was selected before
          // used to determine if onSelect and onChange callbacks should be called

          isItemSelected = newStateToSet.hasOwnProperty('selectedItem'); // this keeps track of the object we want to call with setState

          var nextState = {}; // this is just used to tell whether the state changed

          var nextFullState = {}; // we need to call on change if the outside world is controlling any of our state
          // and we're trying to update that state. OR if the selection has changed and we're
          // trying to update the selection

          if (isItemSelected && newStateToSet.selectedItem !== state.selectedItem) {
            onChangeArg = newStateToSet.selectedItem;
          }

          newStateToSet.type = newStateToSet.type || unknown;
          Object.keys(newStateToSet).forEach(function (key) {
            // onStateChangeArg should only have the state that is
            // actually changing
            if (state[key] !== newStateToSet[key]) {
              onStateChangeArg[key] = newStateToSet[key];
            } // the type is useful for the onStateChangeArg
            // but we don't actually want to set it in internal state.
            // this is an undocumented feature for now... Not all internalSetState
            // calls support it and I'm not certain we want them to yet.
            // But it enables users controlling the isOpen state to know when
            // the isOpen state changes due to mouseup events which is quite handy.


            if (key === 'type') {
              return;
            }

            nextFullState[key] = newStateToSet[key]; // if it's coming from props, then we don't care to set it internally

            if (!_this.isControlledProp(key)) {
              nextState[key] = newStateToSet[key];
            }
          }); // if stateToSet is a function, then we weren't able to call onInputValueChange
          // earlier, so we'll call it now that we know what the inputValue state will be.

          if (isStateToSetFunction && newStateToSet.hasOwnProperty('inputValue')) {
            _this.props.onInputValueChange(newStateToSet.inputValue, (0,esm_extends/* default */.Z)({}, _this.getStateAndHelpers(), {}, newStateToSet));
          }

          return nextState;
        }, function () {
          // call the provided callback if it's a function
          cbToCb(cb)(); // only call the onStateChange and onChange callbacks if
          // we have relevant information to pass them.

          var hasMoreStateThanType = Object.keys(onStateChangeArg).length > 1;

          if (hasMoreStateThanType) {
            _this.props.onStateChange(onStateChangeArg, _this.getStateAndHelpers());
          }

          if (isItemSelected) {
            _this.props.onSelect(stateToSet.selectedItem, _this.getStateAndHelpers());
          }

          if (onChangeArg !== undefined) {
            _this.props.onChange(onChangeArg, _this.getStateAndHelpers());
          } // this is currently undocumented and therefore subject to change
          // We'll try to not break it, but just be warned.


          _this.props.onUserAction(onStateChangeArg, _this.getStateAndHelpers());
        });
      };

      _this.rootRef = function (node) {
        return _this._rootNode = node;
      };

      _this.getRootProps = function (_temp, _temp2) {
        var _extends2;

        var _ref = _temp === void 0 ? {} : _temp,
            _ref$refKey = _ref.refKey,
            refKey = _ref$refKey === void 0 ? 'ref' : _ref$refKey,
            ref = _ref.ref,
            rest = (0,objectWithoutPropertiesLoose/* default */.Z)(_ref, ["refKey", "ref"]);

        var _ref2 = _temp2 === void 0 ? {} : _temp2,
            _ref2$suppressRefErro = _ref2.suppressRefError,
            suppressRefError = _ref2$suppressRefErro === void 0 ? false : _ref2$suppressRefErro;

        // this is used in the render to know whether the user has called getRootProps.
        // It uses that to know whether to apply the props automatically
        _this.getRootProps.called = true;
        _this.getRootProps.refKey = refKey;
        _this.getRootProps.suppressRefError = suppressRefError;

        var _this$getState = _this.getState(),
            isOpen = _this$getState.isOpen;

        return (0,esm_extends/* default */.Z)((_extends2 = {}, _extends2[refKey] = handleRefs(ref, _this.rootRef), _extends2.role = 'combobox', _extends2['aria-expanded'] = isOpen, _extends2['aria-haspopup'] = 'listbox', _extends2['aria-owns'] = isOpen ? _this.menuId : null, _extends2['aria-labelledby'] = _this.labelId, _extends2), rest);
      };

      _this.keyDownHandlers = {
        ArrowDown: function ArrowDown(event) {
          var _this2 = this;

          event.preventDefault();

          if (this.getState().isOpen) {
            var amount = event.shiftKey ? 5 : 1;
            this.moveHighlightedIndex(amount, {
              type: keyDownArrowDown
            });
          } else {
            this.internalSetState({
              isOpen: true,
              type: keyDownArrowDown
            }, function () {
              var itemCount = _this2.getItemCount();

              if (itemCount > 0) {
                _this2.setHighlightedIndex(getNextWrappingIndex(1, _this2.getState().highlightedIndex, itemCount), {
                  type: keyDownArrowDown
                });
              }
            });
          }
        },
        ArrowUp: function ArrowUp(event) {
          var _this3 = this;

          event.preventDefault();

          if (this.getState().isOpen) {
            var amount = event.shiftKey ? -5 : -1;
            this.moveHighlightedIndex(amount, {
              type: keyDownArrowUp
            });
          } else {
            this.internalSetState({
              isOpen: true,
              type: keyDownArrowUp
            }, function () {
              var itemCount = _this3.getItemCount();

              if (itemCount > 0) {
                _this3.setHighlightedIndex(getNextWrappingIndex(-1, _this3.getState().highlightedIndex, itemCount), {
                  type: keyDownArrowDown
                });
              }
            });
          }
        },
        Enter: function Enter(event) {
          var _this$getState2 = this.getState(),
              isOpen = _this$getState2.isOpen,
              highlightedIndex = _this$getState2.highlightedIndex;

          if (isOpen && highlightedIndex != null) {
            event.preventDefault();
            var item = this.items[highlightedIndex];
            var itemNode = this.getItemNodeFromIndex(highlightedIndex);

            if (item == null || itemNode && itemNode.hasAttribute('disabled')) {
              return;
            }

            this.selectHighlightedItem({
              type: keyDownEnter
            });
          }
        },
        Escape: function Escape(event) {
          event.preventDefault();
          this.reset({
            type: keyDownEscape,
            selectedItem: null,
            inputValue: ''
          });
        }
      };
      _this.buttonKeyDownHandlers = (0,esm_extends/* default */.Z)({}, _this.keyDownHandlers, {
        ' ': function _(event) {
          event.preventDefault();
          this.toggleMenu({
            type: keyDownSpaceButton
          });
        }
      });
      _this.inputKeyDownHandlers = (0,esm_extends/* default */.Z)({}, _this.keyDownHandlers, {
        Home: function Home(event) {
          this.highlightFirstOrLastIndex(event, true, {
            type: keyDownHome
          });
        },
        End: function End(event) {
          this.highlightFirstOrLastIndex(event, false, {
            type: keyDownEnd
          });
        }
      });

      _this.getToggleButtonProps = function (_temp3) {
        var _ref3 = _temp3 === void 0 ? {} : _temp3,
            onClick = _ref3.onClick,
            onPress = _ref3.onPress,
            onKeyDown = _ref3.onKeyDown,
            onKeyUp = _ref3.onKeyUp,
            onBlur = _ref3.onBlur,
            rest = (0,objectWithoutPropertiesLoose/* default */.Z)(_ref3, ["onClick", "onPress", "onKeyDown", "onKeyUp", "onBlur"]);

        var _this$getState3 = _this.getState(),
            isOpen = _this$getState3.isOpen;

        var enabledEventHandlers = {
          onClick: callAllEventHandlers(onClick, _this.buttonHandleClick),
          onKeyDown: callAllEventHandlers(onKeyDown, _this.buttonHandleKeyDown),
          onKeyUp: callAllEventHandlers(onKeyUp, _this.buttonHandleKeyUp),
          onBlur: callAllEventHandlers(onBlur, _this.buttonHandleBlur)
        };
        var eventHandlers = rest.disabled ? {} : enabledEventHandlers;
        return (0,esm_extends/* default */.Z)({
          type: 'button',
          role: 'button',
          'aria-label': isOpen ? 'close menu' : 'open menu',
          'aria-haspopup': true,
          'data-toggle': true
        }, eventHandlers, {}, rest);
      };

      _this.buttonHandleKeyUp = function (event) {
        // Prevent click event from emitting in Firefox
        event.preventDefault();
      };

      _this.buttonHandleKeyDown = function (event) {
        var key = normalizeArrowKey(event);

        if (_this.buttonKeyDownHandlers[key]) {
          _this.buttonKeyDownHandlers[key].call((0,assertThisInitialized/* default */.Z)(_this), event);
        }
      };

      _this.buttonHandleClick = function (event) {
        event.preventDefault(); // handle odd case for Safari and Firefox which
        // don't give the button the focus properly.

        /* istanbul ignore if (can't reasonably test this) */

        if ( _this.props.environment.document.activeElement === _this.props.environment.document.body) {
          event.target.focus();
        } // to simplify testing components that use downshift, we'll not wrap this in a setTimeout
        // if the NODE_ENV is test. With the proper build system, this should be dead code eliminated
        // when building for production and should therefore have no impact on production code.


        if (false) {} else {
          // Ensure that toggle of menu occurs after the potential blur event in iOS
          _this.internalSetTimeout(function () {
            return _this.toggleMenu({
              type: clickButton
            });
          });
        }
      };

      _this.buttonHandleBlur = function (event) {
        var blurTarget = event.target; // Save blur target for comparison with activeElement later
        // Need setTimeout, so that when the user presses Tab, the activeElement is the next focused element, not body element

        _this.internalSetTimeout(function () {
          if (!_this.isMouseDown && (_this.props.environment.document.activeElement == null || _this.props.environment.document.activeElement.id !== _this.inputId) && _this.props.environment.document.activeElement !== blurTarget // Do nothing if we refocus the same element again (to solve issue in Safari on iOS)
          ) {
              _this.reset({
                type: blurButton
              });
            }
        });
      };

      _this.getLabelProps = function (props) {
        return (0,esm_extends/* default */.Z)({
          htmlFor: _this.inputId,
          id: _this.labelId
        }, props);
      };

      _this.getInputProps = function (_temp4) {
        var _ref4 = _temp4 === void 0 ? {} : _temp4,
            onKeyDown = _ref4.onKeyDown,
            onBlur = _ref4.onBlur,
            onChange = _ref4.onChange,
            onInput = _ref4.onInput,
            onChangeText = _ref4.onChangeText,
            rest = (0,objectWithoutPropertiesLoose/* default */.Z)(_ref4, ["onKeyDown", "onBlur", "onChange", "onInput", "onChangeText"]);

        var onChangeKey;
        var eventHandlers = {};
        /* istanbul ignore next (preact) */

        onChangeKey = 'onChange';

        var _this$getState4 = _this.getState(),
            inputValue = _this$getState4.inputValue,
            isOpen = _this$getState4.isOpen,
            highlightedIndex = _this$getState4.highlightedIndex;

        if (!rest.disabled) {
          var _eventHandlers;

          eventHandlers = (_eventHandlers = {}, _eventHandlers[onChangeKey] = callAllEventHandlers(onChange, onInput, _this.inputHandleChange), _eventHandlers.onKeyDown = callAllEventHandlers(onKeyDown, _this.inputHandleKeyDown), _eventHandlers.onBlur = callAllEventHandlers(onBlur, _this.inputHandleBlur), _eventHandlers);
        }
        /* istanbul ignore if (react-native) */


        return (0,esm_extends/* default */.Z)({
          'aria-autocomplete': 'list',
          'aria-activedescendant': isOpen && typeof highlightedIndex === 'number' && highlightedIndex >= 0 ? _this.getItemId(highlightedIndex) : null,
          'aria-controls': isOpen ? _this.menuId : null,
          'aria-labelledby': _this.labelId,
          // https://developer.mozilla.org/en-US/docs/Web/Security/Securing_your_site/Turning_off_form_autocompletion
          // revert back since autocomplete="nope" is ignored on latest Chrome and Opera
          autoComplete: 'off',
          value: inputValue,
          id: _this.inputId
        }, eventHandlers, {}, rest);
      };

      _this.inputHandleKeyDown = function (event) {
        var key = normalizeArrowKey(event);

        if (key && _this.inputKeyDownHandlers[key]) {
          _this.inputKeyDownHandlers[key].call((0,assertThisInitialized/* default */.Z)(_this), event);
        }
      };

      _this.inputHandleChange = function (event) {
        _this.internalSetState({
          type: changeInput,
          isOpen: true,
          inputValue: event.target.value,
          highlightedIndex: _this.props.defaultHighlightedIndex
        });
      };

      _this.inputHandleBlur = function () {
        // Need setTimeout, so that when the user presses Tab, the activeElement is the next focused element, not the body element
        _this.internalSetTimeout(function () {
          var downshiftButtonIsActive = _this.props.environment.document && !!_this.props.environment.document.activeElement && !!_this.props.environment.document.activeElement.dataset && _this.props.environment.document.activeElement.dataset.toggle && _this._rootNode && _this._rootNode.contains(_this.props.environment.document.activeElement);

          if (!_this.isMouseDown && !downshiftButtonIsActive) {
            _this.reset({
              type: blurInput
            });
          }
        });
      };

      _this.menuRef = function (node) {
        _this._menuNode = node;
      };

      _this.getMenuProps = function (_temp5, _temp6) {
        var _extends3;

        var _ref5 = _temp5 === void 0 ? {} : _temp5,
            _ref5$refKey = _ref5.refKey,
            refKey = _ref5$refKey === void 0 ? 'ref' : _ref5$refKey,
            ref = _ref5.ref,
            props = (0,objectWithoutPropertiesLoose/* default */.Z)(_ref5, ["refKey", "ref"]);

        var _ref6 = _temp6 === void 0 ? {} : _temp6,
            _ref6$suppressRefErro = _ref6.suppressRefError,
            suppressRefError = _ref6$suppressRefErro === void 0 ? false : _ref6$suppressRefErro;

        _this.getMenuProps.called = true;
        _this.getMenuProps.refKey = refKey;
        _this.getMenuProps.suppressRefError = suppressRefError;
        return (0,esm_extends/* default */.Z)((_extends3 = {}, _extends3[refKey] = handleRefs(ref, _this.menuRef), _extends3.role = 'listbox', _extends3['aria-labelledby'] = props && props['aria-label'] ? null : _this.labelId, _extends3.id = _this.menuId, _extends3), props);
      };

      _this.getItemProps = function (_temp7) {
        var _enabledEventHandlers;

        var _ref7 = _temp7 === void 0 ? {} : _temp7,
            onMouseMove = _ref7.onMouseMove,
            onMouseDown = _ref7.onMouseDown,
            onClick = _ref7.onClick,
            onPress = _ref7.onPress,
            index = _ref7.index,
            _ref7$item = _ref7.item,
            item = _ref7$item === void 0 ?  true ?
        /* istanbul ignore next */
        undefined : 0 : _ref7$item,
            rest = (0,objectWithoutPropertiesLoose/* default */.Z)(_ref7, ["onMouseMove", "onMouseDown", "onClick", "onPress", "index", "item"]);

        if (index === undefined) {
          _this.items.push(item);

          index = _this.items.indexOf(item);
        } else {
          _this.items[index] = item;
        }

        var onSelectKey = 'onClick';
        var customClickHandler = onClick;
        var enabledEventHandlers = (_enabledEventHandlers = {
          // onMouseMove is used over onMouseEnter here. onMouseMove
          // is only triggered on actual mouse movement while onMouseEnter
          // can fire on DOM changes, interrupting keyboard navigation
          onMouseMove: callAllEventHandlers(onMouseMove, function () {
            if (index === _this.getState().highlightedIndex) {
              return;
            }

            _this.setHighlightedIndex(index, {
              type: itemMouseEnter
            }); // We never want to manually scroll when changing state based
            // on `onMouseMove` because we will be moving the element out
            // from under the user which is currently scrolling/moving the
            // cursor


            _this.avoidScrolling = true;

            _this.internalSetTimeout(function () {
              return _this.avoidScrolling = false;
            }, 250);
          }),
          onMouseDown: callAllEventHandlers(onMouseDown, function (event) {
            // This prevents the activeElement from being changed
            // to the item so it can remain with the current activeElement
            // which is a more common use case.
            event.preventDefault();
          })
        }, _enabledEventHandlers[onSelectKey] = callAllEventHandlers(customClickHandler, function () {
          _this.selectItemAtIndex(index, {
            type: clickItem
          });
        }), _enabledEventHandlers); // Passing down the onMouseDown handler to prevent redirect
        // of the activeElement if clicking on disabled items

        var eventHandlers = rest.disabled ? {
          onMouseDown: enabledEventHandlers.onMouseDown
        } : enabledEventHandlers;
        return (0,esm_extends/* default */.Z)({
          id: _this.getItemId(index),
          role: 'option',
          'aria-selected': _this.getState().highlightedIndex === index
        }, eventHandlers, {}, rest);
      };

      _this.clearItems = function () {
        _this.items = [];
      };

      _this.reset = function (otherStateToSet, cb) {
        if (otherStateToSet === void 0) {
          otherStateToSet = {};
        }

        otherStateToSet = pickState(otherStateToSet);

        _this.internalSetState(function (_ref8) {
          var selectedItem = _ref8.selectedItem;
          return (0,esm_extends/* default */.Z)({
            isOpen: _this.props.defaultIsOpen,
            highlightedIndex: _this.props.defaultHighlightedIndex,
            inputValue: _this.props.itemToString(selectedItem)
          }, otherStateToSet);
        }, cb);
      };

      _this.toggleMenu = function (otherStateToSet, cb) {
        if (otherStateToSet === void 0) {
          otherStateToSet = {};
        }

        otherStateToSet = pickState(otherStateToSet);

        _this.internalSetState(function (_ref9) {
          var isOpen = _ref9.isOpen;
          return (0,esm_extends/* default */.Z)({
            isOpen: !isOpen
          }, isOpen && {
            highlightedIndex: _this.props.defaultHighlightedIndex
          }, {}, otherStateToSet);
        }, function () {
          var _this$getState5 = _this.getState(),
              isOpen = _this$getState5.isOpen,
              highlightedIndex = _this$getState5.highlightedIndex;

          if (isOpen) {
            if (_this.getItemCount() > 0 && typeof highlightedIndex === 'number') {
              _this.setHighlightedIndex(highlightedIndex, otherStateToSet);
            }
          }

          cbToCb(cb)();
        });
      };

      _this.openMenu = function (cb) {
        _this.internalSetState({
          isOpen: true
        }, cb);
      };

      _this.closeMenu = function (cb) {
        _this.internalSetState({
          isOpen: false
        }, cb);
      };

      _this.updateStatus = debounce(function () {
        var state = _this.getState();

        var item = _this.items[state.highlightedIndex];

        var resultCount = _this.getItemCount();

        var status = _this.props.getA11yStatusMessage((0,esm_extends/* default */.Z)({
          itemToString: _this.props.itemToString,
          previousResultCount: _this.previousResultCount,
          resultCount: resultCount,
          highlightedItem: item
        }, state));

        _this.previousResultCount = resultCount;
        setStatus(status, _this.props.environment.document);
      }, 200);

      // fancy destructuring + defaults + aliases
      // this basically says each value of state should either be set to
      // the initial value or the default value if the initial value is not provided
      var _this$props = _this.props,
          defaultHighlightedIndex = _this$props.defaultHighlightedIndex,
          _this$props$initialHi = _this$props.initialHighlightedIndex,
          _highlightedIndex = _this$props$initialHi === void 0 ? defaultHighlightedIndex : _this$props$initialHi,
          defaultIsOpen = _this$props.defaultIsOpen,
          _this$props$initialIs = _this$props.initialIsOpen,
          _isOpen = _this$props$initialIs === void 0 ? defaultIsOpen : _this$props$initialIs,
          _this$props$initialIn = _this$props.initialInputValue,
          _inputValue = _this$props$initialIn === void 0 ? '' : _this$props$initialIn,
          _this$props$initialSe = _this$props.initialSelectedItem,
          _selectedItem = _this$props$initialSe === void 0 ? null : _this$props$initialSe;

      var _state = _this.getState({
        highlightedIndex: _highlightedIndex,
        isOpen: _isOpen,
        inputValue: _inputValue,
        selectedItem: _selectedItem
      });

      if (_state.selectedItem != null && _this.props.initialInputValue === undefined) {
        _state.inputValue = _this.props.itemToString(_state.selectedItem);
      }

      _this.state = _state;
      return _this;
    }

    var _proto = Downshift.prototype;

    /**
     * Clear all running timeouts
     */
    _proto.internalClearTimeouts = function internalClearTimeouts() {
      this.timeoutIds.forEach(function (id) {
        clearTimeout(id);
      });
      this.timeoutIds = [];
    }
    /**
     * Gets the state based on internal state or props
     * If a state value is passed via props, then that
     * is the value given, otherwise it's retrieved from
     * stateToMerge
     *
     * This will perform a shallow merge of the given state object
     * with the state coming from props
     * (for the controlled component scenario)
     * This is used in state updater functions so they're referencing
     * the right state regardless of where it comes from.
     *
     * @param {Object} stateToMerge defaults to this.state
     * @return {Object} the state
     */
    ;

    _proto.getState = function getState(stateToMerge) {
      var _this4 = this;

      if (stateToMerge === void 0) {
        stateToMerge = this.state;
      }

      return Object.keys(stateToMerge).reduce(function (state, key) {
        state[key] = _this4.isControlledProp(key) ? _this4.props[key] : stateToMerge[key];
        return state;
      }, {});
    }
    /**
     * This determines whether a prop is a "controlled prop" meaning it is
     * state which is controlled by the outside of this component rather
     * than within this component.
     * @param {String} key the key to check
     * @return {Boolean} whether it is a controlled controlled prop
     */
    ;

    _proto.isControlledProp = function isControlledProp(key) {
      return this.props[key] !== undefined;
    };

    _proto.getItemCount = function getItemCount() {
      // things read better this way. They're in priority order:
      // 1. `this.itemCount`
      // 2. `this.props.itemCount`
      // 3. `this.items.length`
      var itemCount = this.items.length;

      if (this.itemCount != null) {
        itemCount = this.itemCount;
      } else if (this.props.itemCount !== undefined) {
        itemCount = this.props.itemCount;
      }

      return itemCount;
    };

    _proto.getItemNodeFromIndex = function getItemNodeFromIndex(index) {
      return this.props.environment.document.getElementById(this.getItemId(index));
    };

    _proto.scrollHighlightedItemIntoView = function scrollHighlightedItemIntoView() {
      /* istanbul ignore else (react-native) */
      {
        var node = this.getItemNodeFromIndex(this.getState().highlightedIndex);
        this.props.scrollIntoView(node, this._menuNode);
      }
    };

    _proto.moveHighlightedIndex = function moveHighlightedIndex(amount, otherStateToSet) {
      var itemCount = this.getItemCount();

      if (itemCount > 0) {
        var nextHighlightedIndex = getNextWrappingIndex(amount, this.getState().highlightedIndex, itemCount);
        this.setHighlightedIndex(nextHighlightedIndex, otherStateToSet);
      }
    };

    _proto.highlightFirstOrLastIndex = function highlightFirstOrLastIndex(event, first, otherStateToSet) {
      var itemsLastIndex = this.getItemCount() - 1;

      if (itemsLastIndex < 0 || !this.getState().isOpen) {
        return;
      }

      event.preventDefault();
      this.setHighlightedIndex(first ? 0 : itemsLastIndex, otherStateToSet);
    };

    _proto.getStateAndHelpers = function getStateAndHelpers() {
      var _this$getState6 = this.getState(),
          highlightedIndex = _this$getState6.highlightedIndex,
          inputValue = _this$getState6.inputValue,
          selectedItem = _this$getState6.selectedItem,
          isOpen = _this$getState6.isOpen;

      var itemToString = this.props.itemToString;
      var id = this.id;
      var getRootProps = this.getRootProps,
          getToggleButtonProps = this.getToggleButtonProps,
          getLabelProps = this.getLabelProps,
          getMenuProps = this.getMenuProps,
          getInputProps = this.getInputProps,
          getItemProps = this.getItemProps,
          openMenu = this.openMenu,
          closeMenu = this.closeMenu,
          toggleMenu = this.toggleMenu,
          selectItem = this.selectItem,
          selectItemAtIndex = this.selectItemAtIndex,
          selectHighlightedItem = this.selectHighlightedItem,
          setHighlightedIndex = this.setHighlightedIndex,
          clearSelection = this.clearSelection,
          clearItems = this.clearItems,
          reset = this.reset,
          setItemCount = this.setItemCount,
          unsetItemCount = this.unsetItemCount,
          setState = this.internalSetState;
      return {
        // prop getters
        getRootProps: getRootProps,
        getToggleButtonProps: getToggleButtonProps,
        getLabelProps: getLabelProps,
        getMenuProps: getMenuProps,
        getInputProps: getInputProps,
        getItemProps: getItemProps,
        // actions
        reset: reset,
        openMenu: openMenu,
        closeMenu: closeMenu,
        toggleMenu: toggleMenu,
        selectItem: selectItem,
        selectItemAtIndex: selectItemAtIndex,
        selectHighlightedItem: selectHighlightedItem,
        setHighlightedIndex: setHighlightedIndex,
        clearSelection: clearSelection,
        clearItems: clearItems,
        setItemCount: setItemCount,
        unsetItemCount: unsetItemCount,
        setState: setState,
        // props
        itemToString: itemToString,
        // derived
        id: id,
        // state
        highlightedIndex: highlightedIndex,
        inputValue: inputValue,
        isOpen: isOpen,
        selectedItem: selectedItem
      };
    } //////////////////////////// ROOT
    ;

    _proto.componentDidMount = function componentDidMount() {
      var _this5 = this;

      /* istanbul ignore if (react-native) */
      if (false) {}
      /* istanbul ignore if (react-native) */


      {
        var targetWithinDownshift = function (target, checkActiveElement) {
          if (checkActiveElement === void 0) {
            checkActiveElement = true;
          }

          var document = _this5.props.environment.document;
          return [_this5._rootNode, _this5._menuNode].some(function (contextNode) {
            return contextNode && (isOrContainsNode(contextNode, target) || checkActiveElement && isOrContainsNode(contextNode, document.activeElement));
          });
        }; // this.isMouseDown helps us track whether the mouse is currently held down.
        // This is useful when the user clicks on an item in the list, but holds the mouse
        // down long enough for the list to disappear (because the blur event fires on the input)
        // this.isMouseDown is used in the blur handler on the input to determine whether the blur event should
        // trigger hiding the menu.


        var onMouseDown = function () {
          _this5.isMouseDown = true;
        };

        var onMouseUp = function (event) {
          _this5.isMouseDown = false; // if the target element or the activeElement is within a downshift node
          // then we don't want to reset downshift

          var contextWithinDownshift = targetWithinDownshift(event.target);

          if (!contextWithinDownshift && _this5.getState().isOpen) {
            _this5.reset({
              type: mouseUp
            }, function () {
              return _this5.props.onOuterClick(_this5.getStateAndHelpers());
            });
          }
        }; // Touching an element in iOS gives focus and hover states, but touching out of
        // the element will remove hover, and persist the focus state, resulting in the
        // blur event not being triggered.
        // this.isTouchMove helps us track whether the user is tapping or swiping on a touch screen.
        // If the user taps outside of Downshift, the component should be reset,
        // but not if the user is swiping


        var onTouchStart = function () {
          _this5.isTouchMove = false;
        };

        var onTouchMove = function () {
          _this5.isTouchMove = true;
        };

        var onTouchEnd = function (event) {
          var contextWithinDownshift = targetWithinDownshift(event.target, false);

          if (!_this5.isTouchMove && !contextWithinDownshift && _this5.getState().isOpen) {
            _this5.reset({
              type: touchEnd
            }, function () {
              return _this5.props.onOuterClick(_this5.getStateAndHelpers());
            });
          }
        };

        var environment = this.props.environment;
        environment.addEventListener('mousedown', onMouseDown);
        environment.addEventListener('mouseup', onMouseUp);
        environment.addEventListener('touchstart', onTouchStart);
        environment.addEventListener('touchmove', onTouchMove);
        environment.addEventListener('touchend', onTouchEnd);

        this.cleanup = function () {
          _this5.internalClearTimeouts();

          _this5.updateStatus.cancel();

          environment.removeEventListener('mousedown', onMouseDown);
          environment.removeEventListener('mouseup', onMouseUp);
          environment.removeEventListener('touchstart', onTouchStart);
          environment.removeEventListener('touchmove', onTouchMove);
          environment.removeEventListener('touchend', onTouchEnd);
        };
      }
    };

    _proto.shouldScroll = function shouldScroll(prevState, prevProps) {
      var _ref10 = this.props.highlightedIndex === undefined ? this.getState() : this.props,
          currentHighlightedIndex = _ref10.highlightedIndex;

      var _ref11 = prevProps.highlightedIndex === undefined ? prevState : prevProps,
          prevHighlightedIndex = _ref11.highlightedIndex;

      var scrollWhenOpen = currentHighlightedIndex && this.getState().isOpen && !prevState.isOpen;
      return scrollWhenOpen || currentHighlightedIndex !== prevHighlightedIndex;
    };

    _proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
      if (false) {}

      if (this.isControlledProp('selectedItem') && this.props.selectedItemChanged(prevProps.selectedItem, this.props.selectedItem)) {
        this.internalSetState({
          type: controlledPropUpdatedSelectedItem,
          inputValue: this.props.itemToString(this.props.selectedItem)
        });
      }

      if (!this.avoidScrolling && this.shouldScroll(prevState, prevProps)) {
        this.scrollHighlightedItemIntoView();
      }
      /* istanbul ignore else (react-native) */


      this.updateStatus();
    };

    _proto.componentWillUnmount = function componentWillUnmount() {
      this.cleanup(); // avoids memory leak
    };

    _proto.render = function render() {
      var children = unwrapArray(this.props.children, noop); // because the items are rerendered every time we call the children
      // we clear this out each render and it will be populated again as
      // getItemProps is called.

      this.clearItems(); // we reset this so we know whether the user calls getRootProps during
      // this render. If they do then we don't need to do anything,
      // if they don't then we need to clone the element they return and
      // apply the props for them.

      this.getRootProps.called = false;
      this.getRootProps.refKey = undefined;
      this.getRootProps.suppressRefError = undefined; // we do something similar for getMenuProps

      this.getMenuProps.called = false;
      this.getMenuProps.refKey = undefined;
      this.getMenuProps.suppressRefError = undefined; // we do something similar for getLabelProps

      this.getLabelProps.called = false; // and something similar for getInputProps

      this.getInputProps.called = false;
      var element = unwrapArray(children(this.getStateAndHelpers()));

      if (!element) {
        return null;
      }

      if (this.getRootProps.called || this.props.suppressRefError) {
        if (false) {}

        return element;
      } else if (isDOMElement(element)) {
        // they didn't apply the root props, but we can clone
        // this and apply the props ourselves
        return (0,react.cloneElement)(element, this.getRootProps(getElementProps(element)));
      }
      /* istanbul ignore else */


      if (false) {}
      /* istanbul ignore next */


      return undefined;
    };

    return Downshift;
  }(react.Component);

  Downshift.defaultProps = {
    defaultHighlightedIndex: null,
    defaultIsOpen: false,
    getA11yStatusMessage: getA11yStatusMessage,
    itemToString: function itemToString(i) {
      if (i == null) {
        return '';
      }

      if (false) {}

      return String(i);
    },
    onStateChange: noop,
    onInputValueChange: noop,
    onUserAction: noop,
    onChange: noop,
    onSelect: noop,
    onOuterClick: noop,
    selectedItemChanged: function selectedItemChanged(prevItem, item) {
      return prevItem !== item;
    },
    environment: typeof window === 'undefined'
    /* istanbul ignore next (ssr) */
    ? {} : window,
    stateReducer: function stateReducer(state, stateToSet) {
      return stateToSet;
    },
    suppressRefError: false,
    scrollIntoView: scrollIntoView
  };
  Downshift.stateChangeTypes = stateChangeTypes;
  return Downshift;
}();

 false ? 0 : void 0;

function validateGetMenuPropsCalledCorrectly(node, _ref12) {
  var refKey = _ref12.refKey;

  if (!node) {
    // eslint-disable-next-line no-console
    console.error("downshift: The ref prop \"" + refKey + "\" from getMenuProps was not applied correctly on your menu element.");
  }
}

function validateGetRootPropsCalledCorrectly(element, _ref13) {
  var refKey = _ref13.refKey;
  var refKeySpecified = refKey !== 'ref';
  var isComposite = !isDOMElement(element);

  if (isComposite && !refKeySpecified && !isForwardRef(element)) {
    // eslint-disable-next-line no-console
    console.error('downshift: You returned a non-DOM element. You must specify a refKey in getRootProps');
  } else if (!isComposite && refKeySpecified) {
    // eslint-disable-next-line no-console
    console.error("downshift: You returned a DOM element. You should not specify a refKey in getRootProps. You specified \"" + refKey + "\"");
  }

  if (!isForwardRef(element) && !getElementProps(element)[refKey]) {
    // eslint-disable-next-line no-console
    console.error("downshift: You must apply the ref prop \"" + refKey + "\" from getRootProps onto your root element.");
  }
}

function validateControlledUnchanged(prevProps, nextProps) {
  var warningDescription = "This prop should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled Downshift element for the lifetime of the component. More info: https://github.com/downshift-js/downshift#control-props";
  ['selectedItem', 'isOpen', 'inputValue', 'highlightedIndex'].forEach(function (propKey) {
    if (prevProps[propKey] !== undefined && nextProps[propKey] === undefined) {
      // eslint-disable-next-line no-console
      console.error("downshift: A component has changed the controlled prop \"" + propKey + "\" to be uncontrolled. " + warningDescription);
    } else if (prevProps[propKey] === undefined && nextProps[propKey] !== undefined) {
      // eslint-disable-next-line no-console
      console.error("downshift: A component has changed the uncontrolled prop \"" + propKey + "\" to be controlled. " + warningDescription);
    }
  });
}

function getElementIds(generateDefaultId, _temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      id = _ref.id,
      labelId = _ref.labelId,
      menuId = _ref.menuId,
      getItemId = _ref.getItemId,
      toggleButtonId = _ref.toggleButtonId;

  var uniqueId = id === undefined ? "downshift-" + generateDefaultId() : id;
  return {
    labelId: labelId || uniqueId + "-label",
    menuId: menuId || uniqueId + "-menu",
    getItemId: getItemId || function (index) {
      return uniqueId + "-item-" + index;
    },
    toggleButtonId: toggleButtonId || uniqueId + "-toggle-button"
  };
}

function getNextWrappingIndex$1(moveAmount, baseIndex, itemsLength, circular) {
  if (baseIndex === -1) {
    return moveAmount > 0 ? 0 : itemsLength - 1;
  }

  var nextIndex = baseIndex + moveAmount;

  if (nextIndex < 0) {
    return circular ? itemsLength - 1 : 0;
  }

  if (nextIndex >= itemsLength) {
    return circular ? 0 : itemsLength - 1;
  }

  return nextIndex;
}

function getItemIndexByCharacterKey(keysSoFar, highlightedIndex, items, itemToStringParam) {
  var newHighlightedIndex = -1;
  var itemStrings = items.map(function (item) {
    return itemToStringParam(item).toLowerCase();
  });
  var startPosition = highlightedIndex + 1;
  newHighlightedIndex = itemStrings.slice(startPosition).findIndex(function (itemString) {
    return itemString.startsWith(keysSoFar);
  });

  if (newHighlightedIndex > -1) {
    return newHighlightedIndex + startPosition;
  } else {
    return itemStrings.slice(0, startPosition).findIndex(function (itemString) {
      return itemString.startsWith(keysSoFar);
    });
  }
}

function getState(state, props) {
  return Object.keys(state).reduce(function (prevState, key) {
    // eslint-disable-next-line no-param-reassign
    prevState[key] = key in props ? props[key] : state[key];
    return prevState;
  }, {});
}

function getItemIndex(index, item, items) {
  if (index !== undefined) {
    return index;
  }

  if (items.length === 0) {
    return -1;
  }

  return items.indexOf(item);
}

function itemToString(item) {
  return item ? String(item) : '';
}

function getPropTypesValidator(caller, propTypes) {
  // istanbul ignore next
  return function (options) {
    if (options === void 0) {
      options = {};
    }

    Object.entries(propTypes).forEach(function (_ref2) {
      var key = _ref2[0];
      PropTypes.checkPropTypes(propTypes, options, key, caller.name);
    });
  };
}

function isAcceptedCharacterKey(key) {
  return /^\S{1}$/.test(key);
}

function capitalizeString(string) {
  return "" + string.slice(0, 1).toUpperCase() + string.slice(1);
}

function invokeOnChangeHandler(propKey, props, state, changes) {
  var handler = "on" + capitalizeString(propKey) + "Change";

  if (props[handler] && changes[propKey] !== undefined && changes[propKey] !== state[propKey]) {
    props[handler](changes);
  }
}

function callOnChangeProps(props, state, changes) {
  Object.keys(state).forEach(function (stateKey) {
    invokeOnChangeHandler(stateKey, props, state, changes);
  });

  if (props.onStateChange && changes !== undefined) {
    props.onStateChange(changes);
  }
}

function useEnhancedReducer(reducer, initialState, props) {
  var enhancedReducer = (0,react.useCallback)(function (state, action) {
    state = getState(state, action.props);
    var stateReducer = action.props.stateReducer;
    var changes = reducer(state, action);
    var newState = stateReducer(state, (0,esm_extends/* default */.Z)({}, action, {
      changes: changes
    }));
    callOnChangeProps(action.props, state, newState);
    return newState;
  }, [reducer]);

  var _useReducer = (0,react.useReducer)(enhancedReducer, initialState),
      state = _useReducer[0],
      dispatch = _useReducer[1];

  return [getState(state, props), dispatch];
}

var lastId = 0; // istanbul ignore next

var genId = function () {
  return ++lastId;
};
/**
 * Autogenerate IDs to facilitate WAI-ARIA and server rendering.
 * Taken from @reach/auto-id
 * @see https://github.com/reach/reach-ui/blob/6e9dbcf716d5c9a3420e062e5bac1ac4671d01cb/packages/auto-id/src/index.js
 */
// istanbul ignore next


function useId() {
  var _useState = (0,react.useState)(null),
      id = _useState[0],
      setId = _useState[1];

  (0,react.useEffect)(function () {
    return setId(genId());
  }, []);
  return id;
}
/**
 * Checks if nextElement receives focus after the blur event.
 *
 * @param {FocusEvent} event The blur event.
 * @param {Element} nextElement The element to check that receive focus next.
 * @returns {boolean} If the focus lands on nextElement.
 */


function focusLandsOnElement(event, nextElement) {
  return event.relatedTarget === nextElement || // https://github.com/downshift-js/downshift/issues/832 - workaround for Firefox.
  event.nativeEvent && (nextElement === event.nativeEvent.explicitOriginalTarget || nextElement.contains(event.nativeEvent.explicitOriginalTarget));
}

var defaultStateValues = {
  highlightedIndex: -1,
  isOpen: false,
  selectedItem: null
};

function getA11yStatusMessage$1(_ref) {
  var isOpen = _ref.isOpen,
      items = _ref.items;

  if (!items) {
    return '';
  }

  var resultCount = items.length;

  if (isOpen) {
    if (resultCount === 0) {
      return 'No results are available';
    }

    return resultCount + " result" + (resultCount === 1 ? ' is' : 's are') + " available, use up and down arrow keys to navigate. Press Enter key to select.";
  }

  return '';
}

function getA11ySelectionMessage(_ref2) {
  var selectedItem = _ref2.selectedItem,
      itemToString = _ref2.itemToString;
  return itemToString(selectedItem) + " has been selected.";
}

function getHighlightedIndexOnOpen(props, state, offset) {
  var items = props.items,
      initialHighlightedIndex = props.initialHighlightedIndex,
      defaultHighlightedIndex = props.defaultHighlightedIndex;
  var selectedItem = state.selectedItem,
      highlightedIndex = state.highlightedIndex; // initialHighlightedIndex will give value to highlightedIndex on initial state only.

  if (initialHighlightedIndex !== undefined && highlightedIndex > -1) {
    return initialHighlightedIndex;
  }

  if (defaultHighlightedIndex !== undefined) {
    return defaultHighlightedIndex;
  }

  if (selectedItem) {
    if (offset === 0) {
      return items.indexOf(selectedItem);
    }

    return getNextWrappingIndex$1(offset, items.indexOf(selectedItem), items.length, false);
  }

  if (offset === 0) {
    return -1;
  }

  return offset < 0 ? items.length - 1 : 0;
}

function getDefaultValue(props, propKey) {
  var defaultPropKey = "default" + capitalizeString(propKey);

  if (defaultPropKey in props) {
    return props[defaultPropKey];
  }

  return defaultStateValues[propKey];
}

function getInitialValue(props, propKey) {
  if (propKey in props) {
    return props[propKey];
  }

  var initialPropKey = "initial" + capitalizeString(propKey);

  if (initialPropKey in props) {
    return props[initialPropKey];
  }

  return getDefaultValue(props, propKey);
}

function getInitialState(props) {
  var selectedItem = getInitialValue(props, 'selectedItem');
  var highlightedIndex = getInitialValue(props, 'highlightedIndex');
  var isOpen = getInitialValue(props, 'isOpen');
  return {
    highlightedIndex: highlightedIndex < 0 && selectedItem ? props.items.indexOf(selectedItem) : highlightedIndex,
    isOpen: isOpen,
    selectedItem: selectedItem,
    keysSoFar: ''
  };
}

var propTypes = {
  items: (prop_types_default()).array.isRequired,
  itemToString: (prop_types_default()).func,
  getA11yStatusMessage: (prop_types_default()).func,
  getA11ySelectionMessage: (prop_types_default()).func,
  circularNavigation: (prop_types_default()).bool,
  highlightedIndex: (prop_types_default()).number,
  defaultHighlightedIndex: (prop_types_default()).number,
  initialHighlightedIndex: (prop_types_default()).number,
  isOpen: (prop_types_default()).bool,
  defaultIsOpen: (prop_types_default()).bool,
  initialIsOpen: (prop_types_default()).bool,
  selectedItem: (prop_types_default()).any,
  initialSelectedItem: (prop_types_default()).any,
  defaultSelectedItem: (prop_types_default()).any,
  id: (prop_types_default()).string,
  labelId: (prop_types_default()).string,
  menuId: (prop_types_default()).string,
  getItemId: (prop_types_default()).func,
  toggleButtonId: (prop_types_default()).string,
  stateReducer: (prop_types_default()).func,
  onSelectedItemChange: (prop_types_default()).func,
  onHighlightedIndexChange: (prop_types_default()).func,
  onStateChange: (prop_types_default()).func,
  onIsOpenChange: (prop_types_default()).func,
  environment: prop_types_default().shape({
    addEventListener: (prop_types_default()).func,
    removeEventListener: (prop_types_default()).func,
    document: prop_types_default().shape({
      getElementById: (prop_types_default()).func,
      activeElement: (prop_types_default()).any,
      body: (prop_types_default()).any
    })
  })
};

var MenuKeyDownArrowDown =  false ? 0 : 0;
var MenuKeyDownArrowUp =  false ? 0 : 1;
var MenuKeyDownEscape =  false ? 0 : 2;
var MenuKeyDownHome =  false ? 0 : 3;
var MenuKeyDownEnd =  false ? 0 : 4;
var MenuKeyDownEnter =  false ? 0 : 5;
var MenuKeyDownCharacter =  false ? 0 : 6;
var MenuBlur =  false ? 0 : 7;
var MenuMouseLeave =  false ? 0 : 8;
var ItemMouseMove =  false ? 0 : 9;
var ItemClick =  false ? 0 : 10;
var ToggleButtonKeyDownCharacter =  false ? 0 : 11;
var ToggleButtonKeyDownArrowDown =  false ? 0 : 12;
var ToggleButtonKeyDownArrowUp =  false ? 0 : 13;
var ToggleButtonClick =  false ? 0 : 14;
var FunctionToggleMenu =  false ? 0 : 15;
var FunctionOpenMenu =  false ? 0 : 16;
var FunctionCloseMenu =  false ? 0 : 17;
var FunctionSetHighlightedIndex =  false ? 0 : 18;
var FunctionSelectItem =  false ? 0 : 19;
var FunctionClearKeysSoFar =  false ? 0 : 20;
var FunctionReset =  false ? 0 : 21;

var stateChangeTypes$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  MenuKeyDownArrowDown: MenuKeyDownArrowDown,
  MenuKeyDownArrowUp: MenuKeyDownArrowUp,
  MenuKeyDownEscape: MenuKeyDownEscape,
  MenuKeyDownHome: MenuKeyDownHome,
  MenuKeyDownEnd: MenuKeyDownEnd,
  MenuKeyDownEnter: MenuKeyDownEnter,
  MenuKeyDownCharacter: MenuKeyDownCharacter,
  MenuBlur: MenuBlur,
  MenuMouseLeave: MenuMouseLeave,
  ItemMouseMove: ItemMouseMove,
  ItemClick: ItemClick,
  ToggleButtonKeyDownCharacter: ToggleButtonKeyDownCharacter,
  ToggleButtonKeyDownArrowDown: ToggleButtonKeyDownArrowDown,
  ToggleButtonKeyDownArrowUp: ToggleButtonKeyDownArrowUp,
  ToggleButtonClick: ToggleButtonClick,
  FunctionToggleMenu: FunctionToggleMenu,
  FunctionOpenMenu: FunctionOpenMenu,
  FunctionCloseMenu: FunctionCloseMenu,
  FunctionSetHighlightedIndex: FunctionSetHighlightedIndex,
  FunctionSelectItem: FunctionSelectItem,
  FunctionClearKeysSoFar: FunctionClearKeysSoFar,
  FunctionReset: FunctionReset
});

/* eslint-disable complexity */

function downshiftSelectReducer(state, action) {
  var type = action.type,
      props = action.props,
      shiftKey = action.shiftKey;
  var changes;

  switch (type) {
    case ItemMouseMove:
      changes = {
        highlightedIndex: action.index
      };
      break;

    case ItemClick:
      changes = {
        isOpen: getDefaultValue(props, 'isOpen'),
        highlightedIndex: getDefaultValue(props, 'highlightedIndex'),
        selectedItem: props.items[action.index]
      };
      break;

    case MenuBlur:
      changes = {
        isOpen: false,
        highlightedIndex: -1
      };
      break;

    case MenuKeyDownArrowDown:
      changes = {
        highlightedIndex: getNextWrappingIndex$1(shiftKey ? 5 : 1, state.highlightedIndex, props.items.length, props.circularNavigation)
      };
      break;

    case MenuKeyDownArrowUp:
      changes = {
        highlightedIndex: getNextWrappingIndex$1(shiftKey ? -5 : -1, state.highlightedIndex, props.items.length, props.circularNavigation)
      };
      break;

    case MenuKeyDownHome:
      changes = {
        highlightedIndex: 0
      };
      break;

    case MenuKeyDownEnd:
      changes = {
        highlightedIndex: props.items.length - 1
      };
      break;

    case MenuKeyDownEscape:
      changes = {
        isOpen: false,
        highlightedIndex: -1
      };
      break;

    case MenuKeyDownEnter:
      changes = (0,esm_extends/* default */.Z)({
        isOpen: getDefaultValue(props, 'isOpen'),
        highlightedIndex: getDefaultValue(props, 'highlightedIndex')
      }, state.highlightedIndex >= 0 && {
        selectedItem: props.items[state.highlightedIndex]
      });
      break;

    case MenuKeyDownCharacter:
      {
        var lowercasedKey = action.key;
        var keysSoFar = "" + state.keysSoFar + lowercasedKey;
        var highlightedIndex = getItemIndexByCharacterKey(keysSoFar, state.highlightedIndex, props.items, props.itemToString);
        changes = (0,esm_extends/* default */.Z)({
          keysSoFar: keysSoFar
        }, highlightedIndex >= 0 && {
          highlightedIndex: highlightedIndex
        });
      }
      break;

    case MenuMouseLeave:
      changes = {
        highlightedIndex: -1
      };
      break;

    case ToggleButtonKeyDownCharacter:
      {
        var _lowercasedKey = action.key;

        var _keysSoFar = "" + state.keysSoFar + _lowercasedKey;

        var itemIndex = getItemIndexByCharacterKey(_keysSoFar, state.selectedItem ? props.items.indexOf(state.selectedItem) : -1, props.items, props.itemToString);
        changes = (0,esm_extends/* default */.Z)({
          keysSoFar: _keysSoFar
        }, itemIndex >= 0 && {
          selectedItem: props.items[itemIndex]
        });
      }
      break;

    case ToggleButtonKeyDownArrowDown:
      {
        changes = {
          isOpen: true,
          highlightedIndex: getHighlightedIndexOnOpen(props, state, 1)
        };
        break;
      }

    case ToggleButtonKeyDownArrowUp:
      changes = {
        isOpen: true,
        highlightedIndex: getHighlightedIndexOnOpen(props, state, -1)
      };
      break;

    case ToggleButtonClick:
    case FunctionToggleMenu:
      changes = {
        isOpen: !state.isOpen,
        highlightedIndex: state.isOpen ? -1 : getHighlightedIndexOnOpen(props, state, 0)
      };
      break;

    case FunctionOpenMenu:
      changes = {
        isOpen: true,
        highlightedIndex: getHighlightedIndexOnOpen(props, state, 0)
      };
      break;

    case FunctionCloseMenu:
      changes = {
        isOpen: false
      };
      break;

    case FunctionSetHighlightedIndex:
      changes = {
        highlightedIndex: action.highlightedIndex
      };
      break;

    case FunctionSelectItem:
      changes = {
        selectedItem: action.selectedItem
      };
      break;

    case FunctionClearKeysSoFar:
      changes = {
        keysSoFar: ''
      };
      break;

    case FunctionReset:
      changes = {
        highlightedIndex: getDefaultValue(props, 'highlightedIndex'),
        isOpen: getDefaultValue(props, 'isOpen'),
        selectedItem: getDefaultValue(props, 'selectedItem')
      };
      break;

    default:
      throw new Error('Reducer called without proper action type.');
  }

  return (0,esm_extends/* default */.Z)({}, state, {}, changes);
}
/* eslint-enable complexity */

var validatePropTypes =  true ?
/* istanbul ignore next */
null : 0;
var defaultProps = {
  itemToString: itemToString,
  stateReducer: function stateReducer(s, a) {
    return a.changes;
  },
  getA11yStatusMessage: getA11yStatusMessage$1,
  getA11ySelectionMessage: getA11ySelectionMessage,
  scrollIntoView: scrollIntoView,
  environment: typeof window === 'undefined'
  /* istanbul ignore next (ssr) */
  ? {} : window
};
useSelect.stateChangeTypes = stateChangeTypes$1;

function useSelect(userProps) {
  if (userProps === void 0) {
    userProps = {};
  }

  /* istanbul ignore else */
  if (false) {} // Props defaults and destructuring.


  var props = (0,esm_extends/* default */.Z)({}, defaultProps, {}, userProps);

  var items = props.items,
      itemToString = props.itemToString,
      getA11yStatusMessage = props.getA11yStatusMessage,
      getA11ySelectionMessage = props.getA11ySelectionMessage,
      initialIsOpen = props.initialIsOpen,
      defaultIsOpen = props.defaultIsOpen,
      scrollIntoView = props.scrollIntoView,
      environment = props.environment; // Initial state depending on controlled props.

  var initialState = getInitialState(props); // Reducer init.

  var _useEnhancedReducer = useEnhancedReducer(downshiftSelectReducer, initialState, props),
      _useEnhancedReducer$ = _useEnhancedReducer[0],
      isOpen = _useEnhancedReducer$.isOpen,
      highlightedIndex = _useEnhancedReducer$.highlightedIndex,
      selectedItem = _useEnhancedReducer$.selectedItem,
      keysSoFar = _useEnhancedReducer$.keysSoFar,
      dispatchWithoutProps = _useEnhancedReducer[1];

  var dispatch = function (action) {
    return dispatchWithoutProps((0,esm_extends/* default */.Z)({
      props: props
    }, action));
  }; // IDs generation.


  var _getElementIds = getElementIds(useId, props),
      labelId = _getElementIds.labelId,
      getItemId = _getElementIds.getItemId,
      menuId = _getElementIds.menuId,
      toggleButtonId = _getElementIds.toggleButtonId;
  /* Refs */


  var toggleButtonRef = (0,react.useRef)(null);
  var menuRef = (0,react.useRef)(null);
  var itemRefs = (0,react.useRef)();
  itemRefs.current = [];
  var isInitialMount = (0,react.useRef)(true);
  var shouldScroll = (0,react.useRef)(true);
  var clearTimeout = (0,react.useRef)(null);
  /* Effects */

  /* Sets a11y status message on changes in isOpen. */

  (0,react.useEffect)(function () {
    if (isInitialMount.current) {
      return;
    }

    setStatus(getA11yStatusMessage({
      isOpen: isOpen,
      items: items,
      selectedItem: selectedItem,
      itemToString: itemToString
    }), environment.document); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);
  /* Sets a11y status message on changes in selectedItem. */

  (0,react.useEffect)(function () {
    if (isInitialMount.current) {
      return;
    }

    setStatus(getA11ySelectionMessage({
      isOpen: isOpen,
      items: items,
      selectedItem: selectedItem,
      itemToString: itemToString
    }), environment.document); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedItem]);
  /* Sets cleanup for the keysSoFar after 500ms. */

  (0,react.useEffect)(function () {
    // init the clean function here as we need access to dispatch.
    if (isInitialMount.current) {
      clearTimeout.current = debounce(function () {
        dispatch({
          type: FunctionClearKeysSoFar
        });
      }, 500);
    }

    if (!keysSoFar) {
      return;
    }

    clearTimeout.current(); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [keysSoFar]);
  /* Controls the focus on the menu or the toggle button. */

  (0,react.useEffect)(function () {
    // Don't focus menu on first render.
    if (isInitialMount.current) {
      // Unless it was initialised as open.
      if (initialIsOpen || defaultIsOpen || isOpen) {
        menuRef.current.focus();
      }

      return;
    } // Focus menu on open.
    // istanbul ignore next


    if (isOpen) {
      menuRef.current.focus(); // Focus toggleButton on close.
    } else if (environment.document.activeElement === menuRef.current) {
      toggleButtonRef.current.focus();
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [isOpen]);
  /* Scroll on highlighted item if change comes from keyboard. */

  (0,react.useEffect)(function () {
    if (highlightedIndex < 0 || !isOpen || !itemRefs.current.length) {
      return;
    }

    if (shouldScroll.current === false) {
      shouldScroll.current = true;
    } else {
      scrollIntoView(itemRefs.current[highlightedIndex], menuRef.current);
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [highlightedIndex]);
  /* Make initial ref false. */

  (0,react.useEffect)(function () {
    isInitialMount.current = false;
  }, []);
  /* Event handler functions */

  var menuKeyDownHandlers = {
    ArrowDown: function ArrowDown(event) {
      event.preventDefault();
      dispatch({
        type: MenuKeyDownArrowDown,
        shiftKey: event.shiftKey
      });
    },
    ArrowUp: function ArrowUp(event) {
      event.preventDefault();
      dispatch({
        type: MenuKeyDownArrowUp,
        shiftKey: event.shiftKey
      });
    },
    Home: function Home(event) {
      event.preventDefault();
      dispatch({
        type: MenuKeyDownHome
      });
    },
    End: function End(event) {
      event.preventDefault();
      dispatch({
        type: MenuKeyDownEnd
      });
    },
    Escape: function Escape() {
      dispatch({
        type: MenuKeyDownEscape
      });
    },
    Enter: function Enter(event) {
      event.preventDefault();
      dispatch({
        type: MenuKeyDownEnter
      });
    },
    Tab: function Tab(event) {
      // The exception that calls MenuBlur.
      // istanbul ignore next
      if (event.shiftKey) {
        dispatch({
          type: MenuBlur
        });
      }
    }
  };
  var toggleButtonKeyDownHandlers = {
    ArrowDown: function ArrowDown(event) {
      event.preventDefault();
      dispatch({
        type: ToggleButtonKeyDownArrowDown
      });
    },
    ArrowUp: function ArrowUp(event) {
      event.preventDefault();
      dispatch({
        type: ToggleButtonKeyDownArrowUp
      });
    }
  }; // Event handlers.

  var menuHandleKeyDown = function (event) {
    var key = normalizeArrowKey(event);

    if (key && menuKeyDownHandlers[key]) {
      menuKeyDownHandlers[key](event);
    } else if (isAcceptedCharacterKey(key)) {
      dispatch({
        type: MenuKeyDownCharacter,
        key: key
      });
    }
  }; // Focus going back to the toggleButton is something we control (Escape, Enter, Click).
  // We are toggleing special actions for these cases in reducer, not MenuBlur.
  // Since Shift-Tab also lands focus on toggleButton, we will handle it as exception and call MenuBlur.


  var menuHandleBlur = function (event) {
    if (!focusLandsOnElement(event, toggleButtonRef.current)) {
      dispatch({
        type: MenuBlur
      });
    }
  };

  var menuHandleMouseLeave = function () {
    dispatch({
      type: MenuMouseLeave
    });
  };

  var toggleButtonHandleClick = function () {
    dispatch({
      type: ToggleButtonClick
    });
  };

  var toggleButtonHandleKeyDown = function (event) {
    var key = normalizeArrowKey(event);

    if (key && toggleButtonKeyDownHandlers[key]) {
      toggleButtonKeyDownHandlers[key](event);
    } else if (isAcceptedCharacterKey(key)) {
      dispatch({
        type: ToggleButtonKeyDownCharacter,
        key: key
      });
    }
  };

  var itemHandleMouseMove = function (index) {
    if (index === highlightedIndex) {
      return;
    }

    shouldScroll.current = false;
    dispatch({
      type: ItemMouseMove,
      index: index
    });
  };

  var itemHandleClick = function (index) {
    dispatch({
      type: ItemClick,
      index: index
    });
  }; // returns


  return {
    // prop getters.
    getToggleButtonProps: function getToggleButtonProps(_temp2) {
      var _extends3;

      var _ref2 = _temp2 === void 0 ? {} : _temp2,
          onClick = _ref2.onClick,
          onKeyDown = _ref2.onKeyDown,
          _ref2$refKey = _ref2.refKey,
          refKey = _ref2$refKey === void 0 ? 'ref' : _ref2$refKey,
          ref = _ref2.ref,
          rest = (0,objectWithoutPropertiesLoose/* default */.Z)(_ref2, ["onClick", "onKeyDown", "refKey", "ref"]);

      var toggleProps = (0,esm_extends/* default */.Z)((_extends3 = {}, _extends3[refKey] = handleRefs(ref, function (toggleButtonNode) {
        toggleButtonRef.current = toggleButtonNode;
      }), _extends3.id = toggleButtonId, _extends3['aria-haspopup'] = 'listbox', _extends3['aria-expanded'] = isOpen, _extends3['aria-labelledby'] = labelId + " " + toggleButtonId, _extends3), rest);

      if (!rest.disabled) {
        toggleProps.onClick = callAllEventHandlers(onClick, toggleButtonHandleClick);
        toggleProps.onKeyDown = callAllEventHandlers(onKeyDown, toggleButtonHandleKeyDown);
      }

      return toggleProps;
    },
    getLabelProps: function getLabelProps(labelProps) {
      return (0,esm_extends/* default */.Z)({
        id: labelId,
        htmlFor: toggleButtonId
      }, labelProps);
    },
    getMenuProps: function getMenuProps(_temp) {
      var _extends2;

      var _ref = _temp === void 0 ? {} : _temp,
          onKeyDown = _ref.onKeyDown,
          onBlur = _ref.onBlur,
          onMouseLeave = _ref.onMouseLeave,
          _ref$refKey = _ref.refKey,
          refKey = _ref$refKey === void 0 ? 'ref' : _ref$refKey,
          ref = _ref.ref,
          rest = (0,objectWithoutPropertiesLoose/* default */.Z)(_ref, ["onKeyDown", "onBlur", "onMouseLeave", "refKey", "ref"]);

      return (0,esm_extends/* default */.Z)((_extends2 = {}, _extends2[refKey] = handleRefs(ref, function (menuNode) {
        menuRef.current = menuNode;
      }), _extends2.id = menuId, _extends2.role = 'listbox', _extends2['aria-labelledby'] = labelId, _extends2.tabIndex = -1, _extends2), highlightedIndex > -1 && {
        'aria-activedescendant': getItemId(highlightedIndex)
      }, {
        onKeyDown: callAllEventHandlers(onKeyDown, menuHandleKeyDown),
        onBlur: callAllEventHandlers(onBlur, menuHandleBlur),
        onMouseLeave: callAllEventHandlers(onMouseLeave, menuHandleMouseLeave)
      }, rest);
    },
    getItemProps: function getItemProps(_temp3) {
      var _extends4;

      var _ref3 = _temp3 === void 0 ? {} : _temp3,
          item = _ref3.item,
          index = _ref3.index,
          _ref3$refKey = _ref3.refKey,
          refKey = _ref3$refKey === void 0 ? 'ref' : _ref3$refKey,
          ref = _ref3.ref,
          onMouseMove = _ref3.onMouseMove,
          onClick = _ref3.onClick,
          rest = (0,objectWithoutPropertiesLoose/* default */.Z)(_ref3, ["item", "index", "refKey", "ref", "onMouseMove", "onClick"]);

      var itemIndex = getItemIndex(index, item, items);

      if (itemIndex < 0) {
        throw new Error('Pass either item or item index in getItemProps!');
      }

      var itemProps = (0,esm_extends/* default */.Z)((_extends4 = {}, _extends4[refKey] = handleRefs(ref, function (itemNode) {
        if (itemNode) {
          itemRefs.current.push(itemNode);
        }
      }), _extends4.role = 'option', _extends4), itemIndex === highlightedIndex && {
        'aria-selected': true
      }, {
        id: getItemId(itemIndex)
      }, rest);

      if (!rest.disabled) {
        itemProps.onMouseMove = callAllEventHandlers(onMouseMove, function () {
          return itemHandleMouseMove(itemIndex);
        });
        itemProps.onClick = callAllEventHandlers(onClick, function () {
          return itemHandleClick(itemIndex);
        });
      }

      return itemProps;
    },
    // actions.
    toggleMenu: function toggleMenu() {
      dispatch({
        type: FunctionToggleMenu
      });
    },
    openMenu: function openMenu() {
      dispatch({
        type: FunctionOpenMenu
      });
    },
    closeMenu: function closeMenu() {
      dispatch({
        type: FunctionCloseMenu
      });
    },
    setHighlightedIndex: function setHighlightedIndex(newHighlightedIndex) {
      dispatch({
        type: FunctionSetHighlightedIndex,
        highlightedIndex: newHighlightedIndex
      });
    },
    selectItem: function selectItem(newSelectedItem) {
      dispatch({
        type: FunctionSelectItem,
        selectedItem: newSelectedItem
      });
    },
    reset: function reset() {
      dispatch({
        type: FunctionReset
      });
    },
    // state.
    highlightedIndex: highlightedIndex,
    isOpen: isOpen,
    selectedItem: selectedItem
  };
}

/* harmony default export */ var downshift_esm = (Downshift);


// EXTERNAL MODULE: ./node_modules/@elastic/react-search-ui-views/lib/esm/view-helpers/appendClassName.js
var appendClassName = __webpack_require__(82654);
;// CONCATENATED MODULE: ./node_modules/@elastic/react-search-ui-views/lib/esm/Autocomplete.js


function getRaw(result, value) {
    if (!result[value] || !result[value].raw)
        return;
    return result[value].raw;
}
function getSnippet(result, value) {
    if (!result[value] || !result[value].snippet)
        return;
    return result[value].snippet;
}
function getSuggestionTitle(suggestionType, autocompleteSuggestions) {
    if (autocompleteSuggestions.sectionTitle) {
        return autocompleteSuggestions.sectionTitle;
    }
    if (autocompleteSuggestions[suggestionType] &&
        autocompleteSuggestions[suggestionType].sectionTitle) {
        return autocompleteSuggestions[suggestionType].sectionTitle;
    }
}
function Autocomplete({ autocompleteResults, autocompletedResults, autocompleteSuggestions, autocompletedSuggestions, className, getItemProps, getMenuProps }) {
    let index = 0;
    return (react.createElement("div", Object.assign({}, getMenuProps({
        className: (0,appendClassName/* default */.Z)("sui-search-box__autocomplete-container", className)
    })),
        react.createElement("div", null,
            !!autocompleteSuggestions &&
                Object.entries(autocompletedSuggestions).map(([suggestionType, suggestions]) => {
                    return (react.createElement(react.Fragment, { key: suggestionType },
                        getSuggestionTitle(suggestionType, autocompleteSuggestions) &&
                            suggestions.length > 0 && (react.createElement("div", { className: "sui-search-box__section-title" }, getSuggestionTitle(suggestionType, autocompleteSuggestions))),
                        suggestions.length > 0 && (react.createElement("ul", { className: "sui-search-box__suggestion-list" }, suggestions.map((suggestion) => {
                            index++;
                            return (react.createElement("li", Object.assign({}, getItemProps({
                                key: suggestion.suggestion || suggestion.highlight,
                                index: index - 1,
                                item: suggestion
                            })), suggestion.highlight ? (react.createElement("span", { dangerouslySetInnerHTML: {
                                    __html: suggestion.highlight
                                } })) : (react.createElement("span", null, suggestion.suggestion))));
                        })))));
                }),
            !!autocompleteResults &&
                !!autocompletedResults &&
                typeof autocompleteResults !== "boolean" &&
                autocompletedResults.length > 0 &&
                autocompleteResults.sectionTitle && (react.createElement("div", { className: "sui-search-box__section-title" }, autocompleteResults.sectionTitle)),
            !!autocompleteResults &&
                !!autocompletedResults &&
                autocompletedResults.length > 0 && (react.createElement("ul", { className: "sui-search-box__results-list" }, autocompletedResults.map((result) => {
                index++;
                const titleField = typeof autocompleteResults === "boolean"
                    ? null
                    : autocompleteResults.titleField;
                const titleSnippet = getSnippet(result, titleField);
                const titleRaw = getRaw(result, titleField);
                return (react.createElement("li", Object.assign({}, getItemProps({
                    key: result.id.raw,
                    index: index - 1,
                    item: result
                })), titleSnippet ? (react.createElement("span", { dangerouslySetInnerHTML: {
                        __html: titleSnippet
                    } })) : (react.createElement("span", null, titleRaw))));
            }))))));
}
/* harmony default export */ var esm_Autocomplete = (Autocomplete);

;// CONCATENATED MODULE: ./node_modules/@elastic/react-search-ui-views/lib/esm/SearchInput.js

function SearchInput({ getAutocomplete, getButtonProps, getInputProps }) {
    return (react.createElement(react.Fragment, null,
        react.createElement("div", { className: "sui-search-box__wrapper" },
            react.createElement("input", Object.assign({}, getInputProps())),
            getAutocomplete()),
        react.createElement("input", Object.assign({}, getButtonProps()))));
}
/* harmony default export */ var esm_SearchInput = (SearchInput);

;// CONCATENATED MODULE: ./node_modules/@elastic/react-search-ui-views/lib/esm/SearchBox.js
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};





function SearchBox(props) {
    const { className, allAutocompletedItemsCount, autocompleteView, isFocused, inputProps = { className: "" }, inputView, onChange, onSelectAutocomplete, onSubmit, useAutocomplete, value, 
    // NOTE: These are explicitly de-structured but not used so that they are
    // not passed through to the input with the 'rest' parameter
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    autocompletedResults, 
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    autocompletedSuggestions, 
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    autocompletedSuggestionsCount, 
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    completeSuggestion, 
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    notifyAutocompleteSelected } = props, rest = __rest(props, ["className", "allAutocompletedItemsCount", "autocompleteView", "isFocused", "inputProps", "inputView", "onChange", "onSelectAutocomplete", "onSubmit", "useAutocomplete", "value", "autocompletedResults", "autocompletedSuggestions", "autocompletedSuggestionsCount", "completeSuggestion", "notifyAutocompleteSelected"]);
    const focusedClass = isFocused ? "focus" : "";
    const AutocompleteView = autocompleteView || esm_Autocomplete;
    const InputView = inputView || esm_SearchInput;
    return (react.createElement(downshift_esm, Object.assign({ inputValue: value, onChange: onSelectAutocomplete, onInputValueChange: (newValue) => {
            // To avoid over dispatching
            if (value === newValue)
                return;
            onChange(newValue);
        }, 
        // Because when a selection is made, we don't really want to change
        // the inputValue. This is supposed to be a "controlled" value, and when
        // this happens we lose control of it.
        itemToString: () => value }, rest), (downshiftProps) => {
        const { closeMenu, getInputProps, isOpen } = downshiftProps;
        const autocompleteClass = isOpen === true ? " autocomplete" : "";
        return (react.createElement("form", { onSubmit: (e) => {
                closeMenu();
                onSubmit(e);
            } },
            react.createElement("div", { className: (0,appendClassName/* default */.Z)("sui-search-box", className) + autocompleteClass },
                react.createElement(InputView, Object.assign({}, downshiftProps, { getInputProps: (additionalProps) => {
                        const _a = additionalProps || {}, { className } = _a, rest = __rest(_a, ["className"]);
                        return getInputProps(Object.assign(Object.assign(Object.assign({ placeholder: "Search" }, inputProps), { className: (0,appendClassName/* default */.Z)("sui-search-box__text-input", [
                                inputProps.className,
                                className,
                                focusedClass
                            ]) }), rest));
                    }, getButtonProps: (additionalProps) => {
                        const _a = additionalProps || {}, { className } = _a, rest = __rest(_a, ["className"]);
                        return Object.assign({ type: "submit", value: "Search", className: (0,appendClassName/* default */.Z)("button sui-search-box__submit", className) }, rest);
                    }, getAutocomplete: () => {
                        if (useAutocomplete &&
                            isOpen &&
                            allAutocompletedItemsCount > 0) {
                            return react.createElement(AutocompleteView, Object.assign({}, props, downshiftProps));
                        }
                        else {
                            return null;
                        }
                    } })))));
    }));
}
/* harmony default export */ var esm_SearchBox = (SearchBox);

// EXTERNAL MODULE: ./node_modules/@elastic/react-search-ui/lib/esm/withSearch.js
var withSearch = __webpack_require__(7433);
;// CONCATENATED MODULE: ./node_modules/@elastic/react-search-ui/lib/esm/containers/SearchBox.js
var SearchBox_rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};



class SearchBoxContainer extends react.Component {
    constructor() {
        super(...arguments);
        this.state = {
            isFocused: false
        };
        this.handleFocus = () => {
            this.setState({
                isFocused: true
            });
        };
        this.handleBlur = () => {
            this.setState({
                isFocused: false
            });
        };
        this.completeSuggestion = (searchTerm) => {
            const { shouldClearFilters, setSearchTerm } = this.props;
            setSearchTerm(searchTerm, {
                shouldClearFilters
            });
        };
        this.handleSubmit = (e) => {
            const { shouldClearFilters, searchTerm, setSearchTerm } = this.props;
            e.preventDefault();
            setSearchTerm(searchTerm, {
                shouldClearFilters
            });
        };
        this.handleChange = (value) => {
            const { autocompleteMinimumCharacters, autocompleteResults, autocompleteSuggestions, shouldClearFilters, searchAsYouType, setSearchTerm, debounceLength } = this.props;
            const options = Object.assign(Object.assign({ autocompleteMinimumCharacters }, ((autocompleteResults ||
                autocompleteSuggestions ||
                searchAsYouType) && {
                debounce: debounceLength || 200
            })), { shouldClearFilters, refresh: !!searchAsYouType, autocompleteResults: !!autocompleteResults, autocompleteSuggestions: !!autocompleteSuggestions });
            setSearchTerm(value, options);
        };
        this.handleNotifyAutocompleteSelected = (selection) => {
            var _a;
            const { autocompleteResults, trackAutocompleteClickThrough } = this.props;
            // Because suggestions don't count as clickthroughs, only
            // results
            if (autocompleteResults) {
                const autocompleteResultsConfig = autocompleteResults === true
                    ? { clickThroughTags: [], shouldTrackClickThrough: true }
                    : autocompleteResults;
                if (!selection.suggestion &&
                    autocompleteResultsConfig.shouldTrackClickThrough !== false) {
                    const { clickThroughTags = [] } = autocompleteResultsConfig;
                    const id = (_a = selection.id) === null || _a === void 0 ? void 0 : _a.raw;
                    trackAutocompleteClickThrough(id, clickThroughTags);
                }
            }
        };
        this.defaultOnSelectAutocomplete = (selection) => {
            if (!selection)
                return;
            const { autocompleteResults } = this.props;
            this.handleNotifyAutocompleteSelected(selection);
            if (!selection.suggestion && typeof autocompleteResults !== "boolean") {
                const url = selection[autocompleteResults.urlField]
                    ? selection[autocompleteResults.urlField].raw
                    : "";
                if (url) {
                    const target = (typeof autocompleteResults !== "boolean" &&
                        autocompleteResults.linkTarget) ||
                        "_self";
                    window.open(url, target);
                }
            }
            else {
                this.completeSuggestion(selection.suggestion);
            }
        };
    }
    render() {
        const { isFocused } = this.state;
        const _a = this.props, { autocompleteMinimumCharacters, autocompleteResults, autocompleteSuggestions, autocompletedResults, autocompletedSuggestions, className, autocompleteView, inputProps, inputView, onSelectAutocomplete, onSubmit, searchTerm, view } = _a, rest = SearchBox_rest(_a, ["autocompleteMinimumCharacters", "autocompleteResults", "autocompleteSuggestions", "autocompletedResults", "autocompletedSuggestions", "className", "autocompleteView", "inputProps", "inputView", "onSelectAutocomplete", "onSubmit", "searchTerm", "view"]);
        const View = view || esm_SearchBox;
        const useAutocomplete = (!!autocompleteResults || !!autocompleteSuggestions) &&
            searchTerm.length >= autocompleteMinimumCharacters;
        const autocompletedSuggestionsCount = Object.entries(autocompletedSuggestions
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        ).reduce((acc, [_, value]) => acc + value.length, 0);
        const allAutocompletedItemsCount = autocompletedSuggestionsCount + autocompletedResults.length;
        let handleOnSelectAutocomplete;
        if (onSelectAutocomplete) {
            handleOnSelectAutocomplete = (selection) => {
                onSelectAutocomplete(selection, {
                    notifyAutocompleteSelected: this.handleNotifyAutocompleteSelected,
                    completeSuggestion: this.completeSuggestion,
                    autocompleteResults: this.props.autocompleteResults
                }, this.defaultOnSelectAutocomplete);
            };
        }
        const viewProps = Object.assign({ allAutocompletedItemsCount: allAutocompletedItemsCount, autocompleteView, autocompleteResults: autocompleteResults, autocompleteSuggestions: autocompleteSuggestions, autocompletedResults: autocompletedResults, autocompletedSuggestions: autocompletedSuggestions, className, autocompletedSuggestionsCount: autocompletedSuggestionsCount, completeSuggestion: this.completeSuggestion, isFocused: isFocused, notifyAutocompleteSelected: this.handleNotifyAutocompleteSelected, onChange: (value) => this.handleChange(value), onSelectAutocomplete: handleOnSelectAutocomplete || this.defaultOnSelectAutocomplete, onSubmit: onSubmit
                ? (e) => {
                    e.preventDefault();
                    onSubmit(searchTerm);
                }
                : this.handleSubmit, useAutocomplete: useAutocomplete, value: searchTerm, inputProps: Object.assign({ onFocus: this.handleFocus, onBlur: this.handleBlur }, inputProps), inputView }, rest);
        return react.createElement(View, Object.assign({}, viewProps));
    }
}
SearchBoxContainer.defaultProps = {
    autocompleteMinimumCharacters: 0,
    shouldClearFilters: true
};
/* harmony default export */ var containers_SearchBox = ((0,withSearch/* default */.Z)(({ autocompletedResults, autocompletedSuggestions, searchTerm, setSearchTerm, trackAutocompleteClickThrough }) => ({
    autocompletedResults,
    autocompletedSuggestions,
    searchTerm,
    setSearchTerm,
    trackAutocompleteClickThrough
}))(SearchBoxContainer));


/***/ }),

/***/ 7433:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _SearchContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(33877);
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};


function buildContextForProps(context) {
    return Object.assign(Object.assign({}, context.driver.getState()), context.driver.getActions());
}
/* For a given object execute mapContextToProps to pluck out the relevant
properties */
function giveMeJustWhatINeeded(stateOrContext, mapContextToProps, props) {
    const mapContextToPropsToUse = props.mapContextToProps || mapContextToProps;
    return mapContextToPropsToUse(stateOrContext, props) || {};
}
function withSearch(mapContextToProps) {
    if (!mapContextToProps) {
        throw "withSearch requires a function to be provided which returns an object with at least one value.";
    }
    return function (Component) {
        class WithSearch extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
            constructor(props, context) {
                super(props);
                this.subscription = (state) => {
                    if (!this.mounted)
                        return;
                    this.setState((prevState) => giveMeJustWhatINeeded(Object.assign(Object.assign({}, prevState), state), mapContextToProps, this.props));
                };
                this.mounted = false;
                this.state = Object.assign({}, giveMeJustWhatINeeded(buildContextForProps(context), mapContextToProps, props));
            }
            componentDidMount() {
                this.mounted = true;
                // Note that we subscribe to changes at the component level, rather than
                // at the top level Provider, so that we are re-rendering the entire
                // subtree when state changes in the Provider.
                this.context.driver.subscribeToStateChanges(this.subscription);
            }
            componentWillUnmount() {
                this.mounted = false;
                this.context.driver.unsubscribeToStateChanges(this.subscription);
            }
            render() {
                const rest = __rest(this.props, []);
                return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, Object.assign({}, this.state, rest));
            }
        }
        WithSearch.contextType = _SearchContext__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z;
        return WithSearch;
    };
}
/* harmony default export */ __webpack_exports__["Z"] = (withSearch);


/***/ }),

/***/ 72811:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ esm_AppSearchAPIConnector; }
});

// EXTERNAL MODULE: ./node_modules/@elastic/search-ui-app-search-connector/node_modules/@elastic/app-search-javascript/dist/elastic_app_search.umd.js
var elastic_app_search_umd = __webpack_require__(77423);
;// CONCATENATED MODULE: ./node_modules/@elastic/search-ui-app-search-connector/lib/esm/responseAdapter.js
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
function adaptation1AdaptFacetValue(facetValue, additionalFacetValueFieldsForField = {}) {
    const hasValue = Object.prototype.hasOwnProperty.call(facetValue, "value");
    const { count, value } = facetValue, rest = __rest(facetValue, ["count", "value"]);
    return {
        count,
        // TODO: Looks like a bug.
        // "value" type is
        // FilterValue | { selected: boolean; }
        // Doesn't look like { selected: boolean; } is the correct return type
        // Also, when testing locally, the "selected" property never appears
        value: hasValue
            ? value
            : Object.assign(Object.assign({}, rest), additionalFacetValueFieldsForField)
    };
}
// Should be facet: Facet, but this results in a type error, see description above
function adaptation2AddLabelToFacet(fieldName, facet) {
    return Object.assign({ field: fieldName }, facet);
}
function adaptFacets(facets, { additionalFacetValueFields = {} }) {
    if (!facets || Object.keys(facets).length === 0)
        return facets;
    return Object.entries(facets).reduce((acc, [fieldName, facet]) => {
        const adaptedFacet = facet.map((v) => {
            const { type, data } = v, rest = __rest(v, ["type", "data"]);
            return adaptation2AddLabelToFacet(fieldName, Object.assign({ type, data: data.map((f) => adaptation1AdaptFacetValue(f, additionalFacetValueFields[fieldName])) }, rest));
        });
        return Object.assign(Object.assign({}, acc), { [fieldName]: adaptedFacet });
    }, {});
}
function limitTo100pages(totalPages) {
    // We limit this to 100 pages since App Search currently cannot page past 100 pages
    return Math.min(totalPages, 100);
}
function adaptResponse(response, options = {}) {
    const facets = response.info.facets;
    const requestId = response.info.meta.request_id;
    const totalPages = response.info.meta.page &&
        typeof response.info.meta.page.total_pages !== "undefined"
        ? limitTo100pages(response.info.meta.page.total_pages)
        : undefined;
    const totalResults = response.info.meta.page
        ? response.info.meta.page.total_results
        : undefined;
    return Object.assign(Object.assign(Object.assign(Object.assign({}, (facets && { facets: adaptFacets(facets, options) })), { rawResponse: response, requestId, results: response.rawResults }), (totalPages !== undefined && { totalPages })), (totalResults !== undefined && { totalResults }));
}

// EXTERNAL MODULE: ./node_modules/@elastic/search-ui/lib/esm/index.js
var esm = __webpack_require__(1639);
;// CONCATENATED MODULE: ./node_modules/@elastic/search-ui-app-search-connector/lib/esm/requestAdapters.js
var requestAdapters_rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};

function removeName(v) {
    if (esm/* helpers.isFilterValueRange */.BM.isFilterValueRange(v)) {
        // eslint-disable-next-line
        const { name } = v, rest = requestAdapters_rest(v, ["name"]);
        return Object.assign({}, rest);
    }
    return v;
}
function rollup(f) {
    const values = f.values.map(removeName).map((v) => ({
        [f.field]: v
    }));
    return {
        [f.type || "any"]: values
    };
}
function adaptFilters(filters) {
    if (!filters || filters.length === 0)
        return {};
    const all = filters.map(rollup);
    return {
        all
    };
}
function getSort(sortDirection, sortField, sortList) {
    if (sortList && sortList.length) {
        return sortList.map((sortItem) => ({
            [sortItem.field]: sortItem.direction
        }));
    }
    else if (sortField && sortDirection) {
        return {
            [sortField]: sortDirection
        };
    }
    else {
        return undefined;
    }
}
function adaptRequest(request) {
    const { current, resultsPerPage, searchTerm, sortDirection, sortField, sortList } = request;
    const sort = getSort(sortDirection, sortField, sortList);
    return Object.assign(Object.assign({ query: searchTerm }, (sort !== undefined && { sort })), { page: Object.assign(Object.assign({}, (resultsPerPage !== undefined && { size: resultsPerPage })), (current !== undefined && { current })), filters: adaptFilters(request.filters) });
}

;// CONCATENATED MODULE: ./node_modules/@elastic/search-ui-app-search-connector/lib/esm/buildResponseAdapterOptions.js
function buildResponseAdapterOptions(config = {}) {
    const additionalFacetValueFields = Object.entries(config.facets || {}).reduce((acc, [fieldName, facetConfig]) => {
        if (facetConfig.unit && facetConfig.center) {
            return Object.assign(Object.assign({}, (acc || {})), { [fieldName]: Object.assign(Object.assign({}, (facetConfig.unit && { unit: facetConfig.unit })), (facetConfig.center && { center: facetConfig.center })) });
        }
        return acc;
    }, null);
    return Object.assign({}, (additionalFacetValueFields && { additionalFacetValueFields }));
}

;// CONCATENATED MODULE: ./node_modules/@elastic/search-ui-app-search-connector/lib/esm/AppSearchAPIConnector.js
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var AppSearchAPIConnector_rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};




// The API will error out if empty facets or filters objects
// are sent.
function removeEmptyFacetsAndFilters(options) {
    const { facets, filters } = options, rest = AppSearchAPIConnector_rest(options, ["facets", "filters"]);
    return Object.assign(Object.assign(Object.assign({}, (facets && Object.entries(facets).length > 0 && { facets })), (filters && Object.entries(filters).length > 0 && { filters })), rest);
}
class AppSearchAPIConnector {
    /**
     * @param {Options} options
     */
    constructor(_a) {
        var { searchKey, engineName, beforeSearchCall = (queryOptions, next) => next(queryOptions), beforeAutocompleteResultsCall = (queryOptions, next) => next(queryOptions), beforeAutocompleteSuggestionsCall = (queryOptions, next) => next(queryOptions) } = _a, rest = AppSearchAPIConnector_rest(_a, ["searchKey", "engineName", "beforeSearchCall", "beforeAutocompleteResultsCall", "beforeAutocompleteSuggestionsCall"]);
        if (!engineName || !("hostIdentifier" in rest || "endpointBase" in rest)) {
            throw Error("hostIdentifier or endpointBase, and engineName are required");
        }
        this.client = elastic_app_search_umd.createClient(Object.assign(Object.assign(Object.assign(Object.assign({}, ("endpointBase" in rest && { endpointBase: rest.endpointBase })), ("hostIdentifier" in rest && { hostIdentifier: rest.hostIdentifier })), { apiKey: searchKey, engineName: engineName }), rest));
        this.beforeSearchCall = beforeSearchCall;
        this.beforeAutocompleteResultsCall = beforeAutocompleteResultsCall;
        this.beforeAutocompleteSuggestionsCall = beforeAutocompleteSuggestionsCall;
    }
    onResultClick({ query, documentId, requestId, tags = [] }) {
        tags = tags.concat("results");
        return this.client.click({ query, documentId, requestId, tags });
    }
    onAutocompleteResultClick({ query, documentId, requestId, tags = [] }) {
        tags = tags.concat("autocomplete");
        return this.client.click({ query, documentId, requestId, tags });
    }
    onSearch(state, queryConfig) {
        return __awaiter(this, void 0, void 0, function* () {
            const { current, filters, resultsPerPage, sortDirection, sortField, sortList } = queryConfig, restOfQueryConfig = AppSearchAPIConnector_rest(queryConfig, ["current", "filters", "resultsPerPage", "sortDirection", "sortField", "sortList"]);
            const _a = adaptRequest(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, state), (current !== undefined && { current })), (filters !== undefined && { filters })), (resultsPerPage !== undefined && { resultsPerPage })), (sortDirection !== undefined && { sortDirection })), (sortField !== undefined && { sortField })), (sortList !== undefined && { sortList }))), { query } = _a, optionsFromState = AppSearchAPIConnector_rest(_a, ["query"]);
            const withQueryConfigOptions = Object.assign(Object.assign({}, restOfQueryConfig), optionsFromState);
            const options = Object.assign({}, removeEmptyFacetsAndFilters(withQueryConfigOptions));
            return this.beforeSearchCall(options, (newOptions) => __awaiter(this, void 0, void 0, function* () {
                const response = yield this.client.search(query, newOptions);
                return adaptResponse(response, buildResponseAdapterOptions(queryConfig));
            }));
        });
    }
    onAutocomplete({ searchTerm }, queryConfig) {
        return __awaiter(this, void 0, void 0, function* () {
            const autocompletedState = {};
            const promises = [];
            if (queryConfig.results) {
                const _a = queryConfig.results, { current, filters, resultsPerPage, sortDirection, sortField, sortList } = _a, restOfQueryConfig = AppSearchAPIConnector_rest(_a, ["current", "filters", "resultsPerPage", "sortDirection", "sortField", "sortList"]);
                const _b = adaptRequest({
                    current,
                    searchTerm,
                    filters,
                    resultsPerPage,
                    sortDirection,
                    sortField,
                    sortList
                }), { query } = _b, optionsFromState = AppSearchAPIConnector_rest(_b, ["query"]);
                const withQueryConfigOptions = Object.assign(Object.assign({}, restOfQueryConfig), optionsFromState);
                const options = removeEmptyFacetsAndFilters(withQueryConfigOptions);
                promises.push(this.beforeAutocompleteResultsCall(options, (newOptions) => {
                    return this.client
                        .search(query, Object.assign(Object.assign({}, newOptions), { record_analytics: false }))
                        .then((response) => {
                        autocompletedState.autocompletedResults =
                            adaptResponse(response).results;
                        autocompletedState.autocompletedResultsRequestId =
                            response.info.meta.request_id;
                    });
                }));
            }
            if (queryConfig.suggestions) {
                const options = queryConfig.suggestions;
                promises.push(this.beforeAutocompleteSuggestionsCall(options, (newOptions) => this.client
                    .querySuggestion(searchTerm, newOptions)
                    .then((response) => {
                    autocompletedState.autocompletedSuggestions = response.results;
                    autocompletedState.autocompletedSuggestionsRequestId =
                        response.meta.request_id;
                })));
            }
            yield Promise.all(promises);
            return autocompletedState;
        });
    }
}
/* harmony default export */ var esm_AppSearchAPIConnector = (AppSearchAPIConnector);


/***/ }),

/***/ 77423:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

/* provided dependency */ var process = __webpack_require__(83454);
(function (global, factory) {
   true ? factory(exports) :
  0;
}(this, (function (exports) { 'use strict';

  var classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var createClass = function () {
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

  var defineProperty = function (obj, key, value) {
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
  };

  var _extends = Object.assign || function (target) {
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

  var objectWithoutProperties = function (obj, keys) {
    var target = {};

    for (var i in obj) {
      if (keys.indexOf(i) >= 0) continue;
      if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
      target[i] = obj[i];
    }

    return target;
  };

  var slicedToArray = function () {
    function sliceIterator(arr, i) {
      var _arr = [];
      var _n = true;
      var _d = false;
      var _e = undefined;

      try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);

          if (i && _arr.length === i) break;
        }
      } catch (err) {
        _d = true;
        _e = err;
      } finally {
        try {
          if (!_n && _i["return"]) _i["return"]();
        } finally {
          if (_d) throw _e;
        }
      }

      return _arr;
    }

    return function (arr, i) {
      if (Array.isArray(arr)) {
        return arr;
      } else if (Symbol.iterator in Object(arr)) {
        return sliceIterator(arr, i);
      } else {
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      }
    };
  }();

  var toArray = function (arr) {
    return Array.isArray(arr) ? arr : Array.from(arr);
  };

  var toConsumableArray = function (arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

      return arr2;
    } else {
      return Array.from(arr);
    }
  };

  /**
   * An individual search result
   */

  var ResultItem = function () {
    function ResultItem(data) {
      classCallCheck(this, ResultItem);

      if (data._group && data._group.length > 0) {
        data = _extends({}, data, {
          _group: data._group.map(function (nestedData) {
            return new ResultItem(nestedData);
          })
        });
      }
      this.data = data;
    }

    /**
     * Return the HTML-unsafe raw value for a field, if it exists
     *
     * @param {String} key - name of the field
     *
     * @returns {any} the raw value of the field
     */


    createClass(ResultItem, [{
      key: "getRaw",
      value: function getRaw(key) {
        return (this.data[key] || {}).raw;
      }

      /**
       * Return the HTML-safe snippet value for a field, if it exists
       *
       * @param {String} key - name of the field
       *
       * @returns {any} the snippet value of the field
       */

    }, {
      key: "getSnippet",
      value: function getSnippet(key) {
        return (this.data[key] || {}).snippet;
      }
    }]);
    return ResultItem;
  }();

  /**
   * A list of ResultItems and additional information returned by a search request
   */

  var ResultList = function ResultList(rawResults, rawInfo) {
    classCallCheck(this, ResultList);

    this.rawResults = rawResults;
    this.rawInfo = rawInfo;

    var results = new Array();
    rawResults.forEach(function (data) {
      results.push(new ResultItem(data));
    });

    this.results = results;
    this.info = rawInfo;
  };

  /**
   * A helper for working with the JSON structure which represent
   * filters in API requests.
   */
  var Filters = function () {
    function Filters() {
      var filtersJSON = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      classCallCheck(this, Filters);

      this.filtersJSON = filtersJSON;
    }

    createClass(Filters, [{
      key: "removeFilter",
      value: function removeFilter(filterKey) {
        var filtersMap = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.filtersJSON;

        function go(filterKey, filtersMap) {
          var filtered = Object.entries(filtersMap).reduce(function (acc, _ref) {
            var _ref2 = slicedToArray(_ref, 2),
                filterName = _ref2[0],
                filterValue = _ref2[1];

            if (filterName === filterKey) {
              return acc;
            }

            if (["all", "any", "none"].includes(filterName)) {
              var nestedFiltersArray = filterValue;
              filterValue = nestedFiltersArray.reduce(function (acc, nestedFiltersMap) {
                var updatedNestedFiltersMap = go(filterKey, nestedFiltersMap);
                if (updatedNestedFiltersMap) {
                  return acc.concat(updatedNestedFiltersMap);
                } else {
                  return acc;
                }
              }, []);
            }

            return _extends({}, acc, defineProperty({}, filterName, filterValue));
          }, {});

          if (Object.keys(filtered).length === 0) {
            return;
          }
          return filtered;
        }

        var filtered = go(filterKey, filtersMap);
        return new Filters(filtered);
      }
    }, {
      key: "getListOfAppliedFilters",
      value: function getListOfAppliedFilters() {
        var _this = this;

        var filters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.filtersJSON;

        var set$$1 = Object.entries(filters).reduce(function (acc, _ref3) {
          var _ref4 = slicedToArray(_ref3, 2),
              key = _ref4[0],
              value = _ref4[1];

          if (!["all", "any", "none"].includes(key)) {
            acc.add(key);
          } else {
            value.forEach(function (nestedValue) {
              Object.keys(nestedValue).forEach(function (nestedKey) {
                if (!["all", "any", "none"].includes(nestedKey)) {
                  acc.add(nestedKey);
                } else {
                  acc = new Set([].concat(toConsumableArray(acc), toConsumableArray(_this.getListOfAppliedFilters(nestedValue))));
                }
              });
            });
          }
          return acc;
        }, new Set());

        return Array.from(set$$1.values());
      }
    }]);
    return Filters;
  }();

  var version = "8.2.0";

  var QueryCache = function () {
    function QueryCache() {
      classCallCheck(this, QueryCache);

      this.cache = {};
    }

    createClass(QueryCache, [{
      key: "getKey",
      value: function getKey(method, url, params) {
        return method + url + JSON.stringify(params);
      }
    }, {
      key: "store",
      value: function store(key, response) {
        this.cache[key] = response;
      }
    }, {
      key: "retrieve",
      value: function retrieve(key) {
        return this.cache[key];
      }
    }]);
    return QueryCache;
  }();

  var cache = new QueryCache();

  function request(searchKey, apiEndpoint, path, params, cacheResponses) {
    var _ref = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {},
        additionalHeaders = _ref.additionalHeaders;

    var method = "POST";
    var key = cache.getKey(method, apiEndpoint + path, params);
    if (cacheResponses) {
      var cachedResult = cache.retrieve(key);
      if (cachedResult) {
        return Promise.resolve(cachedResult);
      }
    }

    return _request(method, searchKey, apiEndpoint, path, params, {
      additionalHeaders: additionalHeaders
    }).then(function (response) {
      return response.json().then(function (json) {
        var result = { response: response, json: json };
        if (cacheResponses) cache.store(key, result);
        return result;
      }).catch(function () {
        return { response: response, json: {} };
      });
    });
  }

  function _request(method, searchKey, apiEndpoint, path, params) {
    var _ref2 = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {},
        additionalHeaders = _ref2.additionalHeaders;

    var jsVersion = typeof window !== "undefined" ? "browser" : process.version;
    var metaHeader = "ent=" + version + "-legacy,js=" + jsVersion + ",t=" + version + "-legacy,ft=universal";
    var headers = new Headers(_extends({}, searchKey && { Authorization: "Bearer " + searchKey }, {
      "Content-Type": "application/json",
      "X-Swiftype-Client": "elastic-app-search-javascript",
      "X-Swiftype-Client-Version": version,
      "x-elastic-client-meta": metaHeader
    }, additionalHeaders));

    return fetch("" + apiEndpoint + path, {
      method: method,
      headers: headers,
      body: JSON.stringify(params),
      credentials: "include"
    });
  }

  var SEARCH_TYPES = {
    SEARCH: "SEARCH",
    MULTI_SEARCH: "MULTI_SEARCH"
  };

  /**
   * Omit a single key from an object
   */
  function omit(obj, keyToOmit) {
    if (!obj) return;
    var _ = obj[keyToOmit],
        rest = objectWithoutProperties(obj, [keyToOmit]);

    return rest;
  }

  function flatten(arrayOfArrays) {
    return [].concat.apply([], arrayOfArrays);
  }

  function formatResultsJSON(json) {
    return new ResultList(json.results, omit(json, "results"));
  }

  function handleErrorResponse(_ref) {
    var response = _ref.response,
        json = _ref.json;

    if (!response.ok) {
      var message = Array.isArray(json) ? " " + flatten(json.map(function (response) {
        return response.errors;
      })).join(", ") : "" + (json.errors ? " " + json.errors : "");
      throw new Error("[" + response.status + "]" + message);
    }
    return json;
  }

  var Client = function () {
    function Client(hostIdentifier, searchKey, engineName) {
      var _ref2 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {},
          _ref2$endpointBase = _ref2.endpointBase,
          endpointBase = _ref2$endpointBase === undefined ? "" : _ref2$endpointBase,
          _ref2$cacheResponses = _ref2.cacheResponses,
          cacheResponses = _ref2$cacheResponses === undefined ? true : _ref2$cacheResponses,
          additionalHeaders = _ref2.additionalHeaders;

      classCallCheck(this, Client);

      this.additionalHeaders = additionalHeaders;
      this.searchKey = searchKey;
      this.cacheResponses = cacheResponses;
      this.engineName = engineName;
      this.apiEndpoint = endpointBase ? endpointBase + "/api/as/v1/" : "https://" + hostIdentifier + ".api.swiftype.com/api/as/v1/";
      this.searchPath = "engines/" + this.engineName + "/search";
      this.multiSearchPath = "engines/" + this.engineName + "/multi_search";
      this.querySuggestionPath = "engines/" + this.engineName + "/query_suggestion";
      this.clickPath = "engines/" + this.engineName + "/click";
    }

    /**
     * Sends a query suggestion request to the Elastic App Search Api
     *
     * @param {String} query String that is used to perform a query suggest.
     * @param {Object} options Object used for configuring the query suggest, like 'types' or 'size'
     * @returns {Promise<ResultList>} a Promise that returns results, otherwise throws an Error.
     */


    createClass(Client, [{
      key: "querySuggestion",
      value: function querySuggestion(query) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        var params = Object.assign({ query: query }, options);

        return request(this.searchKey, this.apiEndpoint, this.querySuggestionPath, params, this.cacheResponses, { additionalHeaders: this.additionalHeaders }).then(handleErrorResponse);
      }

      /**
       * Sends a search request to the Elastic App Search Api
       *
       * @param {String} query String, Query, or Object that is used to perform a search request.
       * @param {Object} options Object used for configuring the search like search_fields and result_fields
       * @returns {Promise<ResultList>} a Promise that returns a {ResultList} when resolved, otherwise throws an Error.
       */

    }, {
      key: "search",
      value: function search(query) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var disjunctiveFacets = options.disjunctiveFacets,
            disjunctiveFacetsAnalyticsTags = options.disjunctiveFacetsAnalyticsTags,
            validOptions = objectWithoutProperties(options, ["disjunctiveFacets", "disjunctiveFacetsAnalyticsTags"]);


        var params = Object.assign({ query: query }, validOptions);

        if (disjunctiveFacets && disjunctiveFacets.length > 0) {
          return this._performDisjunctiveSearch(params, disjunctiveFacets, disjunctiveFacetsAnalyticsTags).then(formatResultsJSON);
        }
        return this._performSearch(params).then(formatResultsJSON);
      }

      /**
       * Sends multiple search requests to the Elastic App Search Api, using the
       * "multi_search" endpoint
       *
       * @param {Array[Object]} searches searches to send, valid keys are:
       * - query: String
       * - options: Object (optional)
       * @returns {Promise<[ResultList]>} a Promise that returns an array of {ResultList} when resolved, otherwise throws an Error.
       */

    }, {
      key: "multiSearch",
      value: function multiSearch(searches) {
        var params = searches.map(function (search) {
          return _extends({
            query: search.query
          }, search.options || {});
        });

        return this._performSearch({ queries: params }, SEARCH_TYPES.MULTI_SEARCH).then(function (responses) {
          return responses.map(formatResultsJSON);
        });
      }

      /*
       * A disjunctive search, as opposed to a regular search is used any time
       * a `disjunctiveFacet` option is provided to the `search` method. A
       * a disjunctive facet requires multiple API calls.
       *
       * Typically:
       *
       * 1 API call to get the base results
       * 1 additional API call to get the "disjunctive" facet counts for each
       * facet configured as "disjunctive".
       *
       * The additional API calls are required, because a "disjunctive" facet
       * is one where we want the counts for a facet as if there is no filter applied
       * to a particular field.
       *
       * After all queries are performed, we merge the facet values on the
       * additional requests into the facet values of the original request, thus
       * creating a single response with the disjunctive facet values.
       */

    }, {
      key: "_performDisjunctiveSearch",
      value: function _performDisjunctiveSearch(params, disjunctiveFacets) {
        var _this = this;

        var disjunctiveFacetsAnalyticsTags = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ["Facet-Only"];

        var baseQueryPromise = this._performSearch(params);

        var filters = new Filters(params.filters);
        var appliedFilers = filters.getListOfAppliedFilters();
        var listOfAppliedDisjunctiveFilters = appliedFilers.filter(function (filter) {
          return disjunctiveFacets.includes(filter);
        });

        if (!listOfAppliedDisjunctiveFilters.length) {
          return baseQueryPromise;
        }

        var page = params.page || {};

        // We intentionally drop passed analytics tags here so that we don't get
        // double counted search analytics in the dashboard from disjunctive
        // calls
        var analytics = params.analytics || {};
        analytics.tags = disjunctiveFacetsAnalyticsTags;

        var disjunctiveQueriesPromises = listOfAppliedDisjunctiveFilters.map(function (appliedDisjunctiveFilter) {
          return _this._performSearch(_extends({}, params, {
            filters: filters.removeFilter(appliedDisjunctiveFilter).filtersJSON,
            record_analytics: false,
            page: _extends({}, page, {
              // Set this to 0 for performance, since disjunctive queries
              // don't need results
              size: 0
            }),
            analytics: analytics,
            facets: defineProperty({}, appliedDisjunctiveFilter, params.facets[appliedDisjunctiveFilter])
          }));
        });

        return Promise.all([baseQueryPromise].concat(toConsumableArray(disjunctiveQueriesPromises))).then(function (_ref3) {
          var _ref4 = toArray(_ref3),
              baseQueryResults = _ref4[0],
              disjunctiveQueries = _ref4.slice(1);

          disjunctiveQueries.forEach(function (disjunctiveQueryResults) {
            var _Object$entries$ = slicedToArray(Object.entries(disjunctiveQueryResults.facets)[0], 2),
                facetName = _Object$entries$[0],
                facetValue = _Object$entries$[1];

            baseQueryResults.facets[facetName] = facetValue;
          });
          return baseQueryResults;
        });
      }
    }, {
      key: "_performSearch",
      value: function _performSearch(params) {
        var searchType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : SEARCH_TYPES.SEARCH;

        var searchPath = searchType === SEARCH_TYPES.MULTI_SEARCH ? this.multiSearchPath : this.searchPath;
        return request(this.searchKey, this.apiEndpoint, searchPath + ".json", params, this.cacheResponses, { additionalHeaders: this.additionalHeaders }).then(handleErrorResponse);
      }

      /**
       * Sends a click event to the Elastic App Search Api, to track a click-through event
       *
       * @param {String} query Query that was used to perform the search request
       * @param {String} documentId ID of the document that was clicked
       * @param {String} requestId Request_id from search response
       * @param {String[]} tags Tags to categorize this request in the Dashboard
       * @returns {Promise} An empty Promise, otherwise throws an Error.
       */

    }, {
      key: "click",
      value: function click(_ref5) {
        var query = _ref5.query,
            documentId = _ref5.documentId,
            requestId = _ref5.requestId,
            _ref5$tags = _ref5.tags,
            tags = _ref5$tags === undefined ? [] : _ref5$tags;

        var params = {
          query: query,
          document_id: documentId,
          request_id: requestId,
          tags: tags
        };

        return request(this.searchKey, this.apiEndpoint, this.clickPath + ".json", params, this.cacheResponses, { additionalHeaders: this.additionalHeaders }).then(handleErrorResponse);
      }
    }]);
    return Client;
  }();

  function createClient(_ref) {
    var hostIdentifier = _ref.hostIdentifier,
        accountHostKey = _ref.accountHostKey,
        apiKey = _ref.apiKey,
        searchKey = _ref.searchKey,
        engineName = _ref.engineName,
        endpointBase = _ref.endpointBase,
        cacheResponses = _ref.cacheResponses,
        additionalHeaders = _ref.additionalHeaders;

    hostIdentifier = hostIdentifier || accountHostKey; // accountHostKey is deprecated
    searchKey = searchKey || apiKey; //apiKey is deprecated
    return new Client(hostIdentifier, searchKey, engineName, {
      endpointBase: endpointBase,
      cacheResponses: cacheResponses,
      additionalHeaders: additionalHeaders
    });
  }

  exports.createClient = createClient;

  Object.defineProperty(exports, '__esModule', { value: true });

})));


/***/ }),

/***/ 70008:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "doFilterValuesMatch": function() { return /* binding */ doFilterValuesMatch; },
/* harmony export */   "findFilterValues": function() { return /* binding */ findFilterValues; },
/* harmony export */   "isFilterValueRange": function() { return /* binding */ isFilterValueRange; },
/* harmony export */   "markSelectedFacetValuesFromFilters": function() { return /* binding */ markSelectedFacetValuesFromFilters; },
/* harmony export */   "mergeFilters": function() { return /* binding */ mergeFilters; },
/* harmony export */   "removeSingleFilterValue": function() { return /* binding */ removeSingleFilterValue; }
/* harmony export */ });
/* harmony import */ var deep_equal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10251);
/* harmony import */ var deep_equal__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(deep_equal__WEBPACK_IMPORTED_MODULE_0__);
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};

/**
 * Given a list of applied Filters, find FilterValues based on
 * "fieldName" and "filterType".
 *
 * @param {*} filters
 * @param {*} name
 * @param {*} filterType
 */
function findFilterValues(filters, name, filterType) {
    const filter = filters.find((f) => f.field === name && f.type === filterType);
    if (!filter)
        return [];
    return filter.values;
}
/**
 * Given a list of applied Filters, remove a single FilterValue based on
 * "fieldName" and "filterType".
 *
 * @param {Filter[]} filters
 * @param {String} fieldName
 * @param {FilterValue} value
 * @param {FilterType} filterType
 */
function removeSingleFilterValue(filters, fieldName, value, filterType) {
    return filters.reduce((acc, filter) => {
        const { field, values, type } = filter, rest = __rest(filter, ["field", "values", "type"]);
        if (field === fieldName && (!filterType || type === filterType)) {
            const updatedFilterValues = values.filter((filterValue) => !doFilterValuesMatch(filterValue, value));
            if (updatedFilterValues.length > 0) {
                return acc.concat(Object.assign({ field, values: updatedFilterValues, type }, rest));
            }
            else {
                return acc;
            }
        }
        return acc.concat(filter);
    }, []);
}
/**
 * Given a Facet and a list of applied Filters, mark the Facet Values
 * for that Facet as "selected" based on "fieldName" and "filterType".
 *
 * @param {Facet} facet
 * @param {String} fieldName
 * @param {Filter[]} filters
 * @param {FilterType} filterType
 */
function markSelectedFacetValuesFromFilters(facet, filters, fieldName, filterType) {
    const facetValues = facet.data;
    const filterValuesForField = findFilterValues(filters, fieldName, filterType) || [];
    return Object.assign(Object.assign({}, facet), { data: facetValues.map((facetValue) => {
            return Object.assign(Object.assign({}, facetValue), { selected: filterValuesForField.some((filterValue) => {
                    return doFilterValuesMatch(filterValue, facetValue.value);
                }) });
        }) });
}
/**
 * Useful for determining when filter values match. This could be used
 * when matching applied filters back to facet options, or for determining
 * whether or not a filter already exists in a list of applied filters.
 *
 * @param {FilterValue} filterValue1
 * @param {FilterValue} filterValue2
 */
function doFilterValuesMatch(filterValue1, filterValue2) {
    if (filterValue1 &&
        filterValue1.name &&
        filterValue2 &&
        filterValue2.name &&
        filterValue1.name === filterValue2.name)
        // If two filters have matching names, then they are the same filter, there
        // is no need to do a more expensive deep equal comparison.
        //
        // This is also important because certain filters and facets will have
        // differing values than their corresponding facet options. For instance,
        // consider a time-based facet like "Last 10 Minutes". The value of the
        // filter will be different depending on when it was selected, but the name
        // will always match.
        return true;
    // We use 'strict = true' to do a '===' of leaves, rather than '=='
    return deep_equal__WEBPACK_IMPORTED_MODULE_0___default()(filterValue1, filterValue2, { strict: true });
}
// Mix unique filter type from one array into the other
function mergeFilters(filters1, filters2) {
    if (!filters2)
        return filters1;
    return filters2.reduce((acc, next) => {
        if (acc.find((f) => f.type === next.type && f.field === next.field)) {
            return acc;
        }
        return [...acc, next];
    }, filters1);
}
// Check if filterValue is of type FilterValueRange
// Using type predicates https://www.typescriptlang.org/docs/handbook/2/narrowing.html#using-type-predicates
function isFilterValueRange(filterValue) {
    return filterValue.name !== undefined;
}


/***/ }),

/***/ 1639:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BM": function() { return /* binding */ helpers; }
/* harmony export */ });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70008);


const helpers = Object.assign({}, _helpers__WEBPACK_IMPORTED_MODULE_0__);




/***/ }),

/***/ 79742:
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  var i
  for (i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}


/***/ }),

/***/ 48764:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(79742)
var ieee754 = __webpack_require__(80645)

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

var K_MAX_LENGTH = 0x7fffffff
exports.kMaxLength = K_MAX_LENGTH

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Print warning and recommend using `buffer` v4.x which has an Object
 *               implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * We report that the browser does not support typed arrays if the are not subclassable
 * using __proto__. Firefox 4-29 lacks support for adding new properties to `Uint8Array`
 * (See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438). IE 10 lacks support
 * for __proto__ and has a buggy typed array implementation.
 */
Buffer.TYPED_ARRAY_SUPPORT = typedArraySupport()

if (!Buffer.TYPED_ARRAY_SUPPORT && typeof console !== 'undefined' &&
    typeof console.error === 'function') {
  console.error(
    'This browser lacks typed array (Uint8Array) support which is required by ' +
    '`buffer` v5.x. Use `buffer` v4.x if you require old browser support.'
  )
}

function typedArraySupport () {
  // Can typed array instances can be augmented?
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42
  } catch (e) {
    return false
  }
}

function createBuffer (length) {
  if (length > K_MAX_LENGTH) {
    throw new RangeError('Invalid typed array length')
  }
  // Return an augmented `Uint8Array` instance
  var buf = new Uint8Array(length)
  buf.__proto__ = Buffer.prototype
  return buf
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(arg)
  }
  return from(arg, encodingOrOffset, length)
}

// Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
if (typeof Symbol !== 'undefined' && Symbol.species &&
    Buffer[Symbol.species] === Buffer) {
  Object.defineProperty(Buffer, Symbol.species, {
    value: null,
    configurable: true,
    enumerable: false,
    writable: false
  })
}

Buffer.poolSize = 8192 // not used by this implementation

function from (value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (isArrayBuffer(value)) {
    return fromArrayBuffer(value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(value, encodingOrOffset)
  }

  return fromObject(value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(value, encodingOrOffset, length)
}

// Note: Change prototype *after* Buffer.from is defined to workaround Chrome bug:
// https://github.com/feross/buffer/pull/148
Buffer.prototype.__proto__ = Uint8Array.prototype
Buffer.__proto__ = Uint8Array

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(size).fill(fill, encoding)
      : createBuffer(size).fill(fill)
  }
  return createBuffer(size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(size, fill, encoding)
}

function allocUnsafe (size) {
  assertSize(size)
  return createBuffer(size < 0 ? 0 : checked(size) | 0)
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(size)
}

function fromString (string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  var buf = createBuffer(length)

  var actual = buf.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    buf = buf.slice(0, actual)
  }

  return buf
}

function fromArrayLike (array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  var buf = createBuffer(length)
  for (var i = 0; i < length; i += 1) {
    buf[i] = array[i] & 255
  }
  return buf
}

function fromArrayBuffer (array, byteOffset, length) {
  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  var buf
  if (byteOffset === undefined && length === undefined) {
    buf = new Uint8Array(array)
  } else if (length === undefined) {
    buf = new Uint8Array(array, byteOffset)
  } else {
    buf = new Uint8Array(array, byteOffset, length)
  }

  // Return an augmented `Uint8Array` instance
  buf.__proto__ = Buffer.prototype
  return buf
}

function fromObject (obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    var buf = createBuffer(len)

    if (buf.length === 0) {
      return buf
    }

    obj.copy(buf, 0, 0, len)
    return buf
  }

  if (obj) {
    if (isArrayBufferView(obj) || 'length' in obj) {
      if (typeof obj.length !== 'number' || numberIsNaN(obj.length)) {
        return createBuffer(0)
      }
      return fromArrayLike(obj)
    }

    if (obj.type === 'Buffer' && Array.isArray(obj.data)) {
      return fromArrayLike(obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < K_MAX_LENGTH` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= K_MAX_LENGTH) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + K_MAX_LENGTH.toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return b != null && b._isBuffer === true
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!Array.isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (isArrayBufferView(string) || isArrayBuffer(string)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// This property is used by `Buffer.isBuffer` (and the `is-buffer` npm package)
// to detect a Buffer instance. It's not possible to use `instanceof Buffer`
// reliably in a browserify context because there could be multiple different
// copies of the 'buffer' package in use. This method works even for Buffer
// instances that were created from another copy of the `buffer` package.
// See: https://github.com/feross/buffer/issues/154
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (numberIsNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (numberIsNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset >>> 0
    if (isFinite(length)) {
      length = length >>> 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + (bytes[i + 1] * 256))
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf = this.subarray(start, end)
  // Return an augmented `Uint8Array` instance
  newBuf.__proto__ = Buffer.prototype
  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  this[offset] = (value & 0xff)
  this[offset + 1] = (value >>> 8)
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  this[offset] = (value >>> 8)
  this[offset + 1] = (value & 0xff)
  return offset + 2
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  this[offset + 3] = (value >>> 24)
  this[offset + 2] = (value >>> 16)
  this[offset + 1] = (value >>> 8)
  this[offset] = (value & 0xff)
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  this[offset] = (value >>> 24)
  this[offset + 1] = (value >>> 16)
  this[offset + 2] = (value >>> 8)
  this[offset + 3] = (value & 0xff)
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    var limit = Math.pow(2, (8 * byteLength) - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    var limit = Math.pow(2, (8 * byteLength) - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  this[offset] = (value & 0xff)
  this[offset + 1] = (value >>> 8)
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  this[offset] = (value >>> 8)
  this[offset + 1] = (value & 0xff)
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  this[offset] = (value & 0xff)
  this[offset + 1] = (value >>> 8)
  this[offset + 2] = (value >>> 16)
  this[offset + 3] = (value >>> 24)
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  this[offset] = (value >>> 24)
  this[offset + 1] = (value >>> 16)
  this[offset + 2] = (value >>> 8)
  this[offset + 3] = (value & 0xff)
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : new Buffer(val, encoding)
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = str.trim().replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

// ArrayBuffers from another context (i.e. an iframe) do not pass the `instanceof` check
// but they should be treated as valid. See: https://github.com/feross/buffer/issues/166
function isArrayBuffer (obj) {
  return obj instanceof ArrayBuffer ||
    (obj != null && obj.constructor != null && obj.constructor.name === 'ArrayBuffer' &&
      typeof obj.byteLength === 'number')
}

// Node 0.10 supports `ArrayBuffer` but lacks `ArrayBuffer.isView`
function isArrayBufferView (obj) {
  return (typeof ArrayBuffer.isView === 'function') && ArrayBuffer.isView(obj)
}

function numberIsNaN (obj) {
  return obj !== obj // eslint-disable-line no-self-compare
}


/***/ }),

/***/ 21924:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__(40210);

var callBind = __webpack_require__(55559);

var $indexOf = callBind(GetIntrinsic('String.prototype.indexOf'));

module.exports = function callBoundIntrinsic(name, allowMissing) {
	var intrinsic = GetIntrinsic(name, !!allowMissing);
	if (typeof intrinsic === 'function' && $indexOf(name, '.prototype.') > -1) {
		return callBind(intrinsic);
	}
	return intrinsic;
};


/***/ }),

/***/ 55559:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(58612);
var GetIntrinsic = __webpack_require__(40210);

var $apply = GetIntrinsic('%Function.prototype.apply%');
var $call = GetIntrinsic('%Function.prototype.call%');
var $reflectApply = GetIntrinsic('%Reflect.apply%', true) || bind.call($call, $apply);

var $gOPD = GetIntrinsic('%Object.getOwnPropertyDescriptor%', true);
var $defineProperty = GetIntrinsic('%Object.defineProperty%', true);
var $max = GetIntrinsic('%Math.max%');

if ($defineProperty) {
	try {
		$defineProperty({}, 'a', { value: 1 });
	} catch (e) {
		// IE 8 has a broken defineProperty
		$defineProperty = null;
	}
}

module.exports = function callBind(originalFunction) {
	var func = $reflectApply(bind, $call, arguments);
	if ($gOPD && $defineProperty) {
		var desc = $gOPD(func, 'length');
		if (desc.configurable) {
			// original length, plus the receiver, minus any additional arguments (after the receiver)
			$defineProperty(
				func,
				'length',
				{ value: 1 + $max(0, originalFunction.length - (arguments.length - 1)) }
			);
		}
	}
	return func;
};

var applyBind = function applyBind() {
	return $reflectApply(bind, $apply, arguments);
};

if ($defineProperty) {
	$defineProperty(module.exports, 'apply', { value: applyBind });
} else {
	module.exports.apply = applyBind;
}


/***/ }),

/***/ 94184:
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString === Object.prototype.toString) {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				} else {
					classes.push(arg.toString());
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

/***/ 76489:
/***/ (function(__unused_webpack_module, exports) {

"use strict";
/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */



/**
 * Module exports.
 * @public
 */

exports.parse = parse;
exports.serialize = serialize;

/**
 * Module variables.
 * @private
 */

var decode = decodeURIComponent;
var encode = encodeURIComponent;
var pairSplitRegExp = /; */;

/**
 * RegExp to match field-content in RFC 7230 sec 3.2
 *
 * field-content = field-vchar [ 1*( SP / HTAB ) field-vchar ]
 * field-vchar   = VCHAR / obs-text
 * obs-text      = %x80-FF
 */

var fieldContentRegExp = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;

/**
 * Parse a cookie header.
 *
 * Parse the given cookie header string into an object
 * The object has the various cookies as keys(names) => values
 *
 * @param {string} str
 * @param {object} [options]
 * @return {object}
 * @public
 */

function parse(str, options) {
  if (typeof str !== 'string') {
    throw new TypeError('argument str must be a string');
  }

  var obj = {}
  var opt = options || {};
  var pairs = str.split(pairSplitRegExp);
  var dec = opt.decode || decode;

  for (var i = 0; i < pairs.length; i++) {
    var pair = pairs[i];
    var eq_idx = pair.indexOf('=');

    // skip things that don't look like key=value
    if (eq_idx < 0) {
      continue;
    }

    var key = pair.substr(0, eq_idx).trim()
    var val = pair.substr(++eq_idx, pair.length).trim();

    // quoted values
    if ('"' == val[0]) {
      val = val.slice(1, -1);
    }

    // only assign once
    if (undefined == obj[key]) {
      obj[key] = tryDecode(val, dec);
    }
  }

  return obj;
}

/**
 * Serialize data into a cookie header.
 *
 * Serialize the a name value pair into a cookie string suitable for
 * http headers. An optional options object specified cookie parameters.
 *
 * serialize('foo', 'bar', { httpOnly: true })
 *   => "foo=bar; httpOnly"
 *
 * @param {string} name
 * @param {string} val
 * @param {object} [options]
 * @return {string}
 * @public
 */

function serialize(name, val, options) {
  var opt = options || {};
  var enc = opt.encode || encode;

  if (typeof enc !== 'function') {
    throw new TypeError('option encode is invalid');
  }

  if (!fieldContentRegExp.test(name)) {
    throw new TypeError('argument name is invalid');
  }

  var value = enc(val);

  if (value && !fieldContentRegExp.test(value)) {
    throw new TypeError('argument val is invalid');
  }

  var str = name + '=' + value;

  if (null != opt.maxAge) {
    var maxAge = opt.maxAge - 0;

    if (isNaN(maxAge) || !isFinite(maxAge)) {
      throw new TypeError('option maxAge is invalid')
    }

    str += '; Max-Age=' + Math.floor(maxAge);
  }

  if (opt.domain) {
    if (!fieldContentRegExp.test(opt.domain)) {
      throw new TypeError('option domain is invalid');
    }

    str += '; Domain=' + opt.domain;
  }

  if (opt.path) {
    if (!fieldContentRegExp.test(opt.path)) {
      throw new TypeError('option path is invalid');
    }

    str += '; Path=' + opt.path;
  }

  if (opt.expires) {
    if (typeof opt.expires.toUTCString !== 'function') {
      throw new TypeError('option expires is invalid');
    }

    str += '; Expires=' + opt.expires.toUTCString();
  }

  if (opt.httpOnly) {
    str += '; HttpOnly';
  }

  if (opt.secure) {
    str += '; Secure';
  }

  if (opt.sameSite) {
    var sameSite = typeof opt.sameSite === 'string'
      ? opt.sameSite.toLowerCase() : opt.sameSite;

    switch (sameSite) {
      case true:
        str += '; SameSite=Strict';
        break;
      case 'lax':
        str += '; SameSite=Lax';
        break;
      case 'strict':
        str += '; SameSite=Strict';
        break;
      case 'none':
        str += '; SameSite=None';
        break;
      default:
        throw new TypeError('option sameSite is invalid');
    }
  }

  return str;
}

/**
 * Try decoding a string using a decoding function.
 *
 * @param {string} str
 * @param {function} decode
 * @private
 */

function tryDecode(str, decode) {
  try {
    return decode(str);
  } catch (e) {
    return str;
  }
}


/***/ }),

/***/ 10251:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var objectKeys = __webpack_require__(82215);
var isArguments = __webpack_require__(82584);
var is = __webpack_require__(20609);
var isRegex = __webpack_require__(98420);
var flags = __webpack_require__(2847);
var isDate = __webpack_require__(18923);

var getTime = Date.prototype.getTime;

function deepEqual(actual, expected, options) {
  var opts = options || {};

  // 7.1. All identical values are equivalent, as determined by ===.
  if (opts.strict ? is(actual, expected) : actual === expected) {
    return true;
  }

  // 7.3. Other pairs that do not both pass typeof value == 'object', equivalence is determined by ==.
  if (!actual || !expected || (typeof actual !== 'object' && typeof expected !== 'object')) {
    return opts.strict ? is(actual, expected) : actual == expected;
  }

  /*
   * 7.4. For all other Object pairs, including Array objects, equivalence is
   * determined by having the same number of owned properties (as verified
   * with Object.prototype.hasOwnProperty.call), the same set of keys
   * (although not necessarily the same order), equivalent values for every
   * corresponding key, and an identical 'prototype' property. Note: this
   * accounts for both named and indexed properties on Arrays.
   */
  // eslint-disable-next-line no-use-before-define
  return objEquiv(actual, expected, opts);
}

function isUndefinedOrNull(value) {
  return value === null || value === undefined;
}

function isBuffer(x) {
  if (!x || typeof x !== 'object' || typeof x.length !== 'number') {
    return false;
  }
  if (typeof x.copy !== 'function' || typeof x.slice !== 'function') {
    return false;
  }
  if (x.length > 0 && typeof x[0] !== 'number') {
    return false;
  }
  return true;
}

function objEquiv(a, b, opts) {
  /* eslint max-statements: [2, 50] */
  var i, key;
  if (typeof a !== typeof b) { return false; }
  if (isUndefinedOrNull(a) || isUndefinedOrNull(b)) { return false; }

  // an identical 'prototype' property.
  if (a.prototype !== b.prototype) { return false; }

  if (isArguments(a) !== isArguments(b)) { return false; }

  var aIsRegex = isRegex(a);
  var bIsRegex = isRegex(b);
  if (aIsRegex !== bIsRegex) { return false; }
  if (aIsRegex || bIsRegex) {
    return a.source === b.source && flags(a) === flags(b);
  }

  if (isDate(a) && isDate(b)) {
    return getTime.call(a) === getTime.call(b);
  }

  var aIsBuffer = isBuffer(a);
  var bIsBuffer = isBuffer(b);
  if (aIsBuffer !== bIsBuffer) { return false; }
  if (aIsBuffer || bIsBuffer) { // && would work too, because both are true or both false here
    if (a.length !== b.length) { return false; }
    for (i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) { return false; }
    }
    return true;
  }

  if (typeof a !== typeof b) { return false; }

  try {
    var ka = objectKeys(a);
    var kb = objectKeys(b);
  } catch (e) { // happens when one is a string literal and the other isn't
    return false;
  }
  // having the same number of owned properties (keys incorporates hasOwnProperty)
  if (ka.length !== kb.length) { return false; }

  // the same set of keys (although not necessarily the same order),
  ka.sort();
  kb.sort();
  // ~~~cheap key test
  for (i = ka.length - 1; i >= 0; i--) {
    if (ka[i] != kb[i]) { return false; }
  }
  // equivalent values for every corresponding key, and ~~~possibly expensive deep test
  for (i = ka.length - 1; i >= 0; i--) {
    key = ka[i];
    if (!deepEqual(a[key], b[key], opts)) { return false; }
  }

  return true;
}

module.exports = deepEqual;


/***/ }),

/***/ 4289:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var keys = __webpack_require__(82215);
var hasSymbols = typeof Symbol === 'function' && typeof Symbol('foo') === 'symbol';

var toStr = Object.prototype.toString;
var concat = Array.prototype.concat;
var origDefineProperty = Object.defineProperty;

var isFunction = function (fn) {
	return typeof fn === 'function' && toStr.call(fn) === '[object Function]';
};

var hasPropertyDescriptors = __webpack_require__(31044)();

var supportsDescriptors = origDefineProperty && hasPropertyDescriptors;

var defineProperty = function (object, name, value, predicate) {
	if (name in object && (!isFunction(predicate) || !predicate())) {
		return;
	}
	if (supportsDescriptors) {
		origDefineProperty(object, name, {
			configurable: true,
			enumerable: false,
			value: value,
			writable: true
		});
	} else {
		object[name] = value; // eslint-disable-line no-param-reassign
	}
};

var defineProperties = function (object, map) {
	var predicates = arguments.length > 2 ? arguments[2] : {};
	var props = keys(map);
	if (hasSymbols) {
		props = concat.call(props, Object.getOwnPropertySymbols(map));
	}
	for (var i = 0; i < props.length; i += 1) {
		defineProperty(object, props[i], map[props[i]], predicates[props[i]]);
	}
};

defineProperties.supportsDescriptors = !!supportsDescriptors;

module.exports = defineProperties;


/***/ }),

/***/ 79180:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(root, factory) {
    'use strict';
    // Universal Module Definition (UMD) to support AMD, CommonJS/Node.js, Rhino, and browsers.

    /* istanbul ignore next */
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(59829)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
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