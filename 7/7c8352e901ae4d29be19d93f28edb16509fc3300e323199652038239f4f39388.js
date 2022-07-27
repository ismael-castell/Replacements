/******/ (() => { // webpackBootstrap
  /******/ 	var __webpack_modules__ = ({

    /***/ 591:
    /***/ ((module, __unused_webpack_exports, __webpack_require__) => {

      var _typeof = (__webpack_require__(8)["default"]);

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

    /***/ 8:
    /***/ ((module) => {

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

    /***/ 757:
    /***/ ((module, __unused_webpack_exports, __webpack_require__) => {

      module.exports = __webpack_require__(591)();


      /***/ }),

    /***/ 410:
    /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

      "use strict";
// ESM COMPAT FLAG
      __webpack_require__.r(__webpack_exports__);

      ;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
      function _typeof(obj) {
        "@babel/helpers - typeof";

        return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
          return typeof obj;
        } : function (obj) {
          return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
        }, _typeof(obj);
      }
      ;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
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
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
      var asyncToGenerator = __webpack_require__(861);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
      var regenerator = __webpack_require__(757);
      var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);
      ;// CONCATENATED MODULE: ./src/config.js



      var getConfigEndpoint = function getConfigEndpoint(script) {
        var href = script.src;
        var env = "d";
        if (href.includes("sit-account")) env = "s";
        if (href.includes("pt")) env = "pt";
        if (href.includes("sit-r2-account")) env = "pp";
        if (href.includes("accounts")) env = "";
        if (href.includes("bf")) env = "bf";
        return "https://" + env + "api.tatadigital.com/analytics-engine";
      };

      var env = getConfigEndpoint(document.currentScript);

      var getEnvUrlMap = function getEnvUrlMap(script) {
        var href = script.src;
        if (href.includes("sit-account")) return {
          "CROMA": "https://preprod-pwa.croma.com",
          "TATACLIQ": "https://preprod1.tataunistore.com",
          "BIGBASKET": "https://hqa1.bigbasket.com",
          "ONEMG": "https://stag.1mg.com"
        };
        return {
          "CROMA": "https://www.croma.com",
          "TATACLIQ": "https://www.tatacliq.com",
          "BIGBASKET": "https://www.bigbasket.com",
          "ONEMG": "https://www.1mg.com"
        };
      };

      var envUrlMap = getEnvUrlMap(document.currentScript); // If config API fails then pick up default config script; write your own config;
// Load based on env;

      var analyticsConfig = sessionStorage.getItem("analyticsConfig");

      if (!analyticsConfig) {
        var apiFailed = true;
        if (apiFailed) analyticsConfig = {
          urls: ["reqbin", "transaction", "checkout", "orderConfirmation", "order-confirmation", "potential-order", "order"],
          syncTrackingUrls: ["createOrderForTcp", "sandbox.juspay.in/txns", "paymentconfirmation", "payment/status/ui"],
          brand: "default",
          brandsForAnalytics: ['BIGBASKET', 'ONEMG', 'CROMA', 'IHCL', 'TATACLIQ', 'WESTSIDE', 'AIRASIA', 'TATADIGITAL'],
          events: [{
            "tcpBrand": "ALL",
            "urlMatch": "",
            "class": "",
            "innerText": "",
            "id": "",
            "elementType": "",
            "captureEvents": ["onclick"]
          }, {
            "tcpBrand": "CROMA",
            "urlMatch": "",
            "class": "",
            "innerText": "Add to cart",
            "id": "",
            "elementType": "button",
            "captureEvents": ["onclick"]
          }, {
            "tcpBrand": "CROMA",
            "urlMatch": "",
            "class": "buyNowBtn",
            "innerText": "buy now",
            "id": "",
            "elementType": "button",
            "captureEvents": ["onclick"]
          }, {
            "tcpBrand": "CROMA",
            "urlMatch": "https://preprod-pwa.croma.com/cart",
            "class": "checkout-btn",
            "innerText": " CHECKOUT ",
            "id": "",
            "elementType": "button",
            "captureEvents": ["onclick", "onfocus"]
          }, {
            "tcpBrand": "CROMA",
            "urlMatch": "https://preprod-pwa.croma.com/checkout",
            "class": "",
            "innerText": "select payment",
            "id": "",
            "elementType": "button",
            "captureEvents": ["onclick", "onfocus"]
          }, {
            "tcpBrand": "TATACLIQ",
            "urlMatch": "https://preprod1.tataunistore.com/cart",
            "class": "Button__base",
            "innerText": "BUY NOW",
            "id": "",
            "elementType": "div",
            "captureEvents": ["onclick"]
          }, {
            "tcpBrand": "TATACLIQ",
            "urlMatch": "https://preprod1.tataunistore.com/cart",
            "class": "Button__base",
            "innerText": "ADD TO BAG",
            "id": "",
            "elementType": "div",
            "captureEvents": ["onclick"]
          }, {
            "tcpBrand": "TATACLIQ",
            "urlMatch": "https://preprod1.tataunistore.com/checkout",
            "class": "Button__base",
            "innerText": "Continue",
            "id": "",
            "elementType": "div",
            "captureEvents": ["onclick"]
          }, {
            "tcpBrand": "TATACLIQ",
            "urlMatch": "https://preprod1.tataunistore.com/checkout",
            "class": "UpiForm__verifyBtn",
            "innerText": "Verify",
            "id": "",
            "elementType": "button",
            "captureEvents": ["onclick"]
          }, {
            "tcpBrand": "TATACLIQ",
            "urlMatch": "https://preprod1.tataunistore.com/checkout",
            "class": "UpiForm__payNow",
            "innerText": "Pay Now",
            "id": "",
            "elementType": "button",
            "captureEvents": ["onclick"]
          }, {
            "tcpBrand": "BIGBASKET",
            "urlMatch": "https://hqa1.bigbasket.com",
            "class": "btn btn-add col-xs-9",
            "innerText": "Add",
            "id": "",
            "elementType": "button",
            "captureEvents": ["onclick", "ng-click"]
          }, {
            "tcpBrand": "BIGBASKET",
            "urlMatch": "https://hqa1.bigbasket.com/basket/?ver=1",
            "class": "icon icon-increase-qty-search-popup",
            "innerText": "+",
            "id": "",
            "elementType": "button",
            "captureEvents": ["onclick"]
          }, {
            "tcpBrand": "BIGBASKET",
            "urlMatch": "https://hqa1.bigbasket.com",
            "class": "btn btn-default dropdown-toggle form-control",
            "innerText": " - Rs ",
            "id": "",
            "elementType": "button",
            "captureEvents": ["onclick", "ng-click"]
          }, {
            "tcpBrand": "BIGBASKET",
            "urlMatch": "https://hqa1.bigbasket.com/basket/?ver=1",
            "class": "icon icon-decrease-qty-search-popup",
            "innerText": "-",
            "id": "",
            "elementType": "button",
            "captureEvents": ["onclick"]
          }, {
            "tcpBrand": "BIGBASKET",
            "urlMatch": "https://hqa1.bigbasket.com/basket/?ver=1",
            "class": "uiv2-empty-basket",
            "innerText": "EMPTY BASKET",
            "id": "",
            "elementType": "a",
            "captureEvents": ["onclick"]
          }, {
            "tcpBrand": "BIGBASKET",
            "urlMatch": "https://hqa1.bigbasket.com/basket/?ver=1",
            "class": "uiv2-removerow ",
            "innerText": "x",
            "id": "p_10000144_remove",
            "elementType": "a",
            "captureEvents": ["onclick"]
          }, {
            "tcpBrand": "BIGBASKET",
            "urlMatch": "https://hqa1.bigbasket.com/co/checkout/",
            "class": "btn btn-lg btn-primary margin-top-15 margin-bottom-10",
            "innerText": "PROCEED TO PAYMENT",
            "id": "",
            "elementType": "button",
            "captureEvents": ["onclick"]
          }, {
            "tcpBrand": "BIGBASKET",
            "urlMatch": "https://hqa1.bigbasket.com/basket/?ver=1",
            "class": "uiv2-checkout-button",
            "innerText": "CHECKOUT",
            "id": "checkout",
            "elementType": "button",
            "captureEvents": ["onclick"]
          }, {
            "tcpBrand": "BIGBASKET",
            "urlMatch": "https://hqa1.bigbasket.com/basket/?ver=1",
            "class": "uiv2-continue-shopping-button",
            "innerText": "CONTINUE SHOPPING",
            "id": "",
            "elementType": "a",
            "captureEvents": ["onclick"]
          }],
          clientId: "TCP-WEB-APP",
          bufferArrayLength: 20,
          bufferIntervalInSeconds: 30,
          bufferSizeInKb: 50,
          dataPublishEndpoint: "".concat(env, "/events/v1")
        };
        sessionStorage.setItem("analyticsConfig", JSON.stringify(analyticsConfig));
      } else analyticsConfig = JSON.parse(analyticsConfig);

      (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee() {
        var rawResponse, content;
        return regenerator_default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return fetch("".concat(env, "/config/v1"), {
                  method: 'GET',
                  headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                  }
                });

              case 3:
                rawResponse = _context.sent;
                _context.next = 6;
                return rawResponse.json();

              case 6:
                content = _context.sent;

                // console.log('config: ', content);
                if (content.success === "Config fetched") {
                  sessionStorage.setItem("analyticsConfig", JSON.stringify(content.config));
                }

                _context.next = 13;
                break;

              case 10:
                _context.prev = 10;
                _context.t0 = _context["catch"](0);
                console.log(_context.t0);

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 10]]);
      }))();

      var getAnalyticsConfig = function getAnalyticsConfig() {
        return JSON.parse(sessionStorage.getItem('analyticsConfig'));
      };


      ;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js
      function _arrayLikeToArray(arr, len) {
        if (len == null || len > arr.length) len = arr.length;

        for (var i = 0, arr2 = new Array(len); i < len; i++) {
          arr2[i] = arr[i];
        }

        return arr2;
      }
      ;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js

      function _arrayWithoutHoles(arr) {
        if (Array.isArray(arr)) return _arrayLikeToArray(arr);
      }
      ;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js
      function _iterableToArray(iter) {
        if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
      }
      ;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js

      function _unsupportedIterableToArray(o, minLen) {
        if (!o) return;
        if (typeof o === "string") return _arrayLikeToArray(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor) n = o.constructor.name;
        if (n === "Map" || n === "Set") return Array.from(o);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
      }
      ;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js
      function _nonIterableSpread() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      ;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js




      function _toConsumableArray(arr) {
        return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
      }
      ;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      ;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
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
        Object.defineProperty(Constructor, "prototype", {
          writable: false
        });
        return Constructor;
      }
// EXTERNAL MODULE: ./src/utils.js
      var utils = __webpack_require__(648);
      ;// CONCATENATED MODULE: ./src/buffer.js






      function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

      function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }





      var AnalyticsBuffer = /*#__PURE__*/function () {
        function AnalyticsBuffer() {
          _classCallCheck(this, AnalyticsBuffer);

          this.bufferData = [];

          this._restartBufferTimer();
        }

        _createClass(AnalyticsBuffer, [{
          key: "pushEvent",
          value: function pushEvent(event) {
            this.bufferData.push({
              timestamp: Date.now(),
              data: event
            });

            if (new Blob(this.bufferData).size > getAnalyticsConfig().bufferSizeInKb || this.bufferData.length >= getAnalyticsConfig().bufferArrayLength) {
              this._sendAnalyticsData();
            }
          }
        }, {
          key: "sycnTest",
          value: function sycnTest() {
            console.log("Logging sync buffer from send data", this.bufferData);
          } // move to websocket;

        }, {
          key: "_sendAnalyticsData",
          value: function () {
            var _sendAnalyticsData2 = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee() {
              var eventData;
              return regenerator_default().wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this._restartBufferTimer();

                      if (!(this.bufferData.length === 0)) {
                        _context.next = 3;
                        break;
                      }

                      return _context.abrupt("return");

                    case 3:
                      eventData = _toConsumableArray(this.bufferData);
                      this.bufferData = [];
                      _context.next = 7;
                      return this.fireAnalyticsCallWithRetrial(eventData);

                    case 7:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));

            function _sendAnalyticsData() {
              return _sendAnalyticsData2.apply(this, arguments);
            }

            return _sendAnalyticsData;
          }()
        }, {
          key: "fireAnalyticsCallWithRetrial",
          value: function () {
            var _fireAnalyticsCallWithRetrial = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee2(eventData) {
              var ecid, response, retryCount;
              return regenerator_default().wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      ecid = sessionStorage.getItem("ecid");
                      _context2.next = 3;
                      return this._fireAnalyticsEvent(eventData, ecid);

                    case 3:
                      response = _context2.sent;
                      retryCount = 2;

                    case 5:
                      if (!(response && response.status !== 200 && retryCount > 0)) {
                        _context2.next = 12;
                        break;
                      }

                      _context2.next = 8;
                      return this._fireAnalyticsEvent(eventData, ecid);

                    case 8:
                      response = _context2.sent;
                      retryCount -= 1;
                      _context2.next = 5;
                      break;

                    case 12:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));

            function fireAnalyticsCallWithRetrial(_x) {
              return _fireAnalyticsCallWithRetrial.apply(this, arguments);
            }

            return fireAnalyticsCallWithRetrial;
          }()
        }, {
          key: "getQueryFromUrl",
          value: function getQueryFromUrl(url) {
            // const host = new URL(url).host;
            // url = url.replaceAll("?","/?");
            // const endpoint = url.includes("http://")
            // 	? url.replace(`http://${host}/`,"") : url.replace(`https://${host}/`,"");
            // const parameterSuite = endpoint.split("/");
            var query = {};
            var segments = []; // parameterSuite.forEach(parameter => {
            // 	if(parameter.includes("?")) {
            // 		let queryKey = JSON.parse('{"' + decodeURI(parameter.replace("?","")).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}');
            // 		query = {...query, ...queryKey};
            // 	} else parameter != "" ? segments.push(parameter) : {};
            // });

            return {
              query: query,
              segments: segments
            };
          }
        }, {
          key: "_fireAnalyticsEvent",
          value: function () {
            var _fireAnalyticsEvent2 = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee3(event, ecid) {
              var url, _this$getQueryFromUrl, query, segments, eventData;

              return regenerator_default().wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      url = window.location.href;
                      _this$getQueryFromUrl = this.getQueryFromUrl(url), query = _this$getQueryFromUrl.query, segments = _this$getQueryFromUrl.segments;
                      eventData = event.map(function (e) {
                        return _objectSpread(_objectSpread({}, e), {}, {
                          query: query,
                          segments: segments
                        });
                      });
                      _context3.next = 5;
                      return fetch(getAnalyticsConfig().dataPublishEndpoint || 'https://dapi.tatadigital.com/api/v1/search/analytics', {
                        mode: 'cors',
                        method: 'POST',
                        cache: 'no-cache',
                        body: JSON.stringify({
                          isRedirectedFromTCP: sessionStorage.getItem('isRedirectedFromTCP'),
                          url: url,
                          eventData: eventData,
                          customerHash: (0,utils/* tdlSSOGetCustomerHash */.E8)(),
                          // Pickup from api;
                          clientId: (0,utils/* getBrand */.jN)().clientId,
                          sessionId: sessionStorage.getItem("sessionId"),
                          // Pickup from cookie (config API response)
                          brand: (0,utils/* getBrand */.jN)().brand,
                          timestamp: Date.now(),
                          query: query,
                          segments: segments,
                          device: window.navigator.userAgent
                        }),
                        credentials: 'include',
                        headers: {
                          'Content-Type': 'application/json',
                          // same for headers
                          'customer-hash': (0,utils/* tdlSSOGetCustomerHash */.E8)(),
                          'client_id': (0,utils/* getBrand */.jN)().clientId,
                          'Authorization': 'Bearer 3afeaf10-799c-4130-9c20-3a0d63a91ebd',
                          'ecid': ecid,
                          'session': this._getCookie('isTataNue')
                        }
                      })["catch"](function (_) {
                        return null;
                      });

                    case 5:
                      return _context3.abrupt("return", _context3.sent);

                    case 6:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));

            function _fireAnalyticsEvent(_x2, _x3) {
              return _fireAnalyticsEvent2.apply(this, arguments);
            }

            return _fireAnalyticsEvent;
          }()
        }, {
          key: "_restartBufferTimer",
          value: function _restartBufferTimer() {
            var _this = this;

            if (this.analyticsTimeout) {
              clearTimeout(this.analyticsTimeout);
            }

            this.analyticsTimeout = setTimeout(function () {
              return _this._sendAnalyticsData();
            }, getAnalyticsConfig().bufferIntervalInSeconds * 1000);
          }
        }, {
          key: "_getCookie",
          value: function _getCookie(cname) {
            var name = cname + "=";
            var decodedCookie = decodeURIComponent(document.cookie);
            var ca = decodedCookie.split(';');

            for (var i = 0; i < ca.length; i++) {
              var c = ca[i];

              while (c.charAt(0) === ' ') {
                c = c.substring(1);
              }

              if (c.indexOf(name) === 0) {
                return c.substring(name.length, c.length);
              }
            }

            return "";
          }
        }]);

        return AnalyticsBuffer;
      }();

      var analyticsBuffer = new AnalyticsBuffer(); // console.log("Logging buffer data", analyticsBuffer.bufferData);


      ;// CONCATENATED MODULE: ./src/listener.js





      function listener_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

      function listener_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? listener_ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : listener_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }





      function logUrl(url) {
        if (url.includes("/analytics-engine/")) return false;
        return getAnalyticsConfig().urls.find(function (item) {
          return url.toLowerCase().includes(item);
        });
      }

      function syncAnalyticsUrls(url) {
        return getAnalyticsConfig().syncTrackingUrls.find(function (item) {
          return url.toLowerCase().includes(item);
        });
      }

      function generateCookies() {
        var isTCP = sessionStorage.getItem('isRedirectedFromTCP');

        if (isTCP) {
          document.cookie = "isRedirectedFromTCP=".concat(isTCP, "; Path=/;");
          var sessionId = sessionStorage.getItem("sessionId");
          if (sessionId) document.cookie = "tneuSessionId=".concat(sessionId, "; Path=/;");
        }
      }

      try {
        if (getAnalyticsConfig().brandsForAnalytics.includes((0,utils/* getBrand */.jN)().brand)) {
          // Page Load event
          window.addEventListener('load', /*#__PURE__*/function () {
            var _ref = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee(_) {
              var tajData, _JSON$parse;

              return regenerator_default().wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      tajData = undefined;

                      if ((0,utils/* getBrand */.jN)().brand === 'IHCL' && (window.location.href.includes('booking-cart') || window.location.href.includes("booking-confirmation")) && window.location.href.includes('status')) {
                        tajData = JSON.stringify((_JSON$parse = JSON.parse(sessionStorage.getItem('tajData'))) === null || _JSON$parse === void 0 ? void 0 : _JSON$parse.bookingDetailsRequest);
                      }

                      _context.next = 4;
                      return analyticsBuffer.fireAnalyticsCallWithRetrial([{
                        timestamp: Date.now(),
                        data: JSON.stringify({
                          event: "pageLoad",
                          payload: listener_objectSpread({
                            url: location.href
                          }, tajData && {
                            tajData: tajData
                          })
                        })
                      }]);

                    case 4:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee);
            }));

            return function (_x) {
              return _ref.apply(this, arguments);
            };
          }());
          var pushState = history.pushState;

          history.pushState = function () {
            pushState.apply(history, arguments);
            analyticsBuffer.fireAnalyticsCallWithRetrial([{
              timestamp: Date.now(),
              data: JSON.stringify({
                event: "pageLoad",
                payload: {
                  url: "".concat(location.origin).concat(arguments[2])
                }
              })
            }]);
          }; // Page Replaced Event


          var replaceState = history.replaceState;

          history.replaceState = function () {
            replaceState.apply(history, arguments);
            analyticsBuffer.fireAnalyticsCallWithRetrial([{
              timestamp: Date.now(),
              data: JSON.stringify({
                event: "pageLoad",
                payload: {
                  url: "".concat(location.origin).concat(arguments[2])
                }
              })
            }]);
          }; // Window Tab Navigation Handling


          window.realOpen = window.open;

          window.open = function () {
            if (arguments.length !== 0) {
              var url;

              if (_typeof(arguments[0]) === 'object') {
                url = arguments[0];
              } else if (typeof arguments[0] === 'string') {
                if (arguments[0].startsWith('/')) {
                  arguments[0] = location.origin + arguments[0];
                }

                if (arguments[0].startsWith('?')) {
                  arguments[0] = location.origin + location.pathname + arguments[0];
                }

                try {
                  url = new URL(arguments[0]);
                } catch (e) {
                  console.log(e);
                  generateCookies();
                  return this.realOpen.apply(this, arguments);
                }
              } else {
                generateCookies();
                return this.realOpen.apply(this, arguments);
              }

              var swtUrl = url.searchParams.get('swtUrl');
              var swtUrlUpdated = '';

              if (swtUrl && !swtUrl.includes("sessionId")) {
                swtUrlUpdated = "".concat(swtUrl).concat(swtUrl.includes("?") ? '&' : '?', "sessionId=").concat(sessionStorage.getItem('sessionId'));
                url.searchParams.set('swtUrl', 'swtUrlUpdated');
              }

              if (url.protocol === 'http:' || url.protocol === 'https:') {
                if (!url.searchParams.get("sessionId") && !swtUrl) {
                  url.searchParams.set('sessionId', sessionStorage.getItem("sessionId"));
                }
              }

              arguments[0] = url.href.replace('swtUrlUpdated', swtUrlUpdated);
            }

            generateCookies();
            return this.realOpen.apply(this, arguments);
          }; // href target listener


          document.addEventListener('click', function (event) {
            var clickedElement = event.target;
            var closestNewTabLink = clickedElement.closest('a[target=_blank]');

            if (closestNewTabLink) {
              generateCookies();
            }
          }); // XMLHttpRequest logs;

          XMLHttpRequest.prototype.realOpen = XMLHttpRequest.prototype.open;

          XMLHttpRequest.prototype.open = function () {
            // console.log("Logging from open", ...arguments);
            this.requestType = arguments[0];
            this.requestUrl = arguments[1];
            this.realOpen.apply(this, arguments);
          }; // XMLHttpRequest logs;


          XMLHttpRequest.prototype.realSetRequestHeader = XMLHttpRequest.prototype.setRequestHeader;

          XMLHttpRequest.prototype.setRequestHeader = function () {
            if (!this.requestHeaders) this.requestHeaders = {};
            this.requestHeaders[arguments[0]] = arguments[1];
            this.realSetRequestHeader.apply(this, arguments);
          };

          XMLHttpRequest.prototype.realSend = XMLHttpRequest.prototype.send;

          XMLHttpRequest.prototype.send = function () {
            if (this.requestType && this.requestType.toLowerCase() === "post") this.requestBody = arguments[0];
            if (syncAnalyticsUrls(this.requestUrl)) this.addEventListener("readystatechange", /*#__PURE__*/(0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee2() {
              return regenerator_default().wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      if (!(this.readyState === 4)) {
                        _context2.next = 3;
                        break;
                      }

                      _context2.next = 3;
                      return analyticsBuffer.fireAnalyticsCallWithRetrial([{
                        timestamp: Date.now(),
                        data: JSON.stringify({
                          event: "request",
                          payload: {
                            requestHeaders: this.requestHeaders,
                            requestType: this.requestType,
                            requestUrl: this.requestUrl,
                            requestBody: this.requestBody,
                            response: this.response,
                            status: this.status
                          }
                        })
                      }]);

                    case 3:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            })), false);else if (logUrl(this.requestUrl)) this.addEventListener("readystatechange", function () {
              if (this.readyState === 4) {
                analyticsBuffer.pushEvent(JSON.stringify({
                  event: "request",
                  payload: {
                    requestHeaders: this.requestHeaders,
                    requestType: this.requestType,
                    requestUrl: this.requestUrl,
                    requestBody: this.requestBody,
                    response: this.response,
                    status: this.status
                  }
                }));
              }
            }, false);
            this.realSend.apply(this, arguments);
          }; // fetch logs;


          var realFetch = fetch;

          fetch = function fetch() {
            var _arguments = arguments;
            return realFetch.apply(void 0, arguments).then( /*#__PURE__*/function () {
              var _ref3 = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee3(res) {
                var _arguments$, _arguments$2, _arguments$3, clonedResponse, _arguments$4, _arguments$5, _arguments$6, _clonedResponse;

                return regenerator_default().wrap(function _callee3$(_context3) {
                  while (1) {
                    switch (_context3.prev = _context3.next) {
                      case 0:
                        if (!syncAnalyticsUrls("".concat(res.url))) {
                          _context3.next = 21;
                          break;
                        }

                        clonedResponse = res.clone();
                        _context3.t0 = analyticsBuffer;
                        _context3.t1 = Date.now();
                        _context3.t2 = JSON;
                        _context3.t3 = (_arguments$ = _arguments[1]) === null || _arguments$ === void 0 ? void 0 : _arguments$.headers;
                        _context3.t4 = ((_arguments$2 = _arguments[1]) === null || _arguments$2 === void 0 ? void 0 : _arguments$2.method) || "GET";
                        _context3.t5 = clonedResponse.url;
                        _context3.t6 = (_arguments$3 = _arguments[1]) === null || _arguments$3 === void 0 ? void 0 : _arguments$3.body;
                        _context3.next = 11;
                        return clonedResponse.json();

                      case 11:
                        _context3.t7 = _context3.sent;
                        _context3.t8 = clonedResponse === null || clonedResponse === void 0 ? void 0 : clonedResponse.status;
                        _context3.t9 = {
                          requestHeaders: _context3.t3,
                          requestType: _context3.t4,
                          requestUrl: _context3.t5,
                          requestBody: _context3.t6,
                          response: _context3.t7,
                          status: _context3.t8
                        };
                        _context3.t10 = {
                          event: "request",
                          payload: _context3.t9
                        };
                        _context3.t11 = _context3.t2.stringify.call(_context3.t2, _context3.t10);
                        _context3.t12 = {
                          timestamp: _context3.t1,
                          data: _context3.t11
                        };
                        _context3.t13 = [_context3.t12];

                        _context3.t0.fireAnalyticsCallWithRetrial.call(_context3.t0, _context3.t13);

                        _context3.next = 37;
                        break;

                      case 21:
                        if (!(res && logUrl("".concat(res.url)))) {
                          _context3.next = 37;
                          break;
                        }

                        _clonedResponse = res.clone();
                        _context3.t14 = analyticsBuffer;
                        _context3.t15 = JSON;
                        _context3.t16 = (_arguments$4 = _arguments[1]) === null || _arguments$4 === void 0 ? void 0 : _arguments$4.headers;
                        _context3.t17 = ((_arguments$5 = _arguments[1]) === null || _arguments$5 === void 0 ? void 0 : _arguments$5.method) || "GET";
                        _context3.t18 = _clonedResponse.url;
                        _context3.t19 = (_arguments$6 = _arguments[1]) === null || _arguments$6 === void 0 ? void 0 : _arguments$6.body;
                        _context3.next = 31;
                        return _clonedResponse.json();

                      case 31:
                        _context3.t20 = _context3.sent;
                        _context3.t21 = _clonedResponse === null || _clonedResponse === void 0 ? void 0 : _clonedResponse.status;
                        _context3.t22 = {
                          requestHeaders: _context3.t16,
                          requestType: _context3.t17,
                          requestUrl: _context3.t18,
                          requestBody: _context3.t19,
                          response: _context3.t20,
                          status: _context3.t21
                        };
                        _context3.t23 = {
                          event: "request",
                          payload: _context3.t22
                        };
                        _context3.t24 = _context3.t15.stringify.call(_context3.t15, _context3.t23);

                        _context3.t14.pushEvent.call(_context3.t14, _context3.t24);

                      case 37:
                        return _context3.abrupt("return", res);

                      case 38:
                      case "end":
                        return _context3.stop();
                    }
                  }
                }, _callee3);
              }));

              return function (_x2) {
                return _ref3.apply(this, arguments);
              };
            }())["catch"](function (err) {
              console.log(err);
              throw err;
            });
          };
        }
      } catch (err) {
        console.log('Error in logging events');
        console.log(err);
      }

      try {
        //Event listener logs
        var eventsToCapture = [];
        getAnalyticsConfig().events.forEach(function (item) {
          if (window.location.href.includes(item.urlMatch)) {
            item.captureEvents.forEach(function (captureEvent) {
              if (!eventsToCapture.includes(captureEvent)) {
                eventsToCapture.push(captureEvent);
              }
            });
          }
        });
        eventsToCapture.forEach(function (eventName) {
          window.addEventListener(eventName.slice(2), function (event) {
            try {
              getAnalyticsConfig().events.forEach(function (eventInfo) {
                if (eventInfo.tcpBrand === 'ALL' && eventInfo.captureEvents.find(function (item) {
                  return item.slice(2) === event.type;
                })) {
                  // console.log("Logging event", event);
                  analyticsBuffer.pushEvent((0,utils/* serializeEvent */.XO)(event));
                  return;
                }

                if (eventInfo.captureEvents.find(function (item) {
                  return item.slice(2) === event.type;
                }) && eventInfo.urlMatch && window.location.href.includes(eventInfo.urlMatch) && event.target.localName === eventInfo.elementType && (eventInfo["class"] && event.target.className.includes(eventInfo["class"]) || eventInfo.id && event.target.id === eventInfo.id || eventInfo.innerText && event.target.innerText === eventInfo.innerText || eventInfo.path && (0,utils/* matchPath */.LX)(eventInfo.path, event.path))) {
                  // console.log("Logging event", event)
                  analyticsBuffer.pushEvent((0,utils/* serializeEvent */.XO)(event));
                }
              });
            } catch (err) {
              console.log('Some error in logging event');
              console.log(err);
            }
          }, true);
        });
      } catch (e) {
        console.log('Error in capturing events');
        console.log(e);
      }

      /***/ }),

    /***/ 447:
    /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

      "use strict";
// ESM COMPAT FLAG
      __webpack_require__.r(__webpack_exports__);

      ;// CONCATENATED MODULE: ./node_modules/uuid/dist/esm-browser/rng.js
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
      var getRandomValues;
      var rnds8 = new Uint8Array(16);
      function rng() {
        // lazy load so that environments that need to polyfill have a chance to do so
        if (!getRandomValues) {
          // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation. Also,
          // find the complete implementation of crypto (msCrypto) on IE11.
          getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== 'undefined' && typeof msCrypto.getRandomValues === 'function' && msCrypto.getRandomValues.bind(msCrypto);

          if (!getRandomValues) {
            throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
          }
        }

        return getRandomValues(rnds8);
      }
      ;// CONCATENATED MODULE: ./node_modules/uuid/dist/esm-browser/regex.js
      /* harmony default export */ const regex = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);
      ;// CONCATENATED MODULE: ./node_modules/uuid/dist/esm-browser/validate.js


      function(){}