(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("Coveo__temporary", [], factory);
	else if(typeof exports === 'object')
		exports["Coveo__temporary"] = factory();
	else
		root["Coveo__temporary"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonpCoveo__temporary"];
/******/ 	window["webpackJsonpCoveo__temporary"] = function webpackJsonpCallback(chunkIds, moreModules, executeModules) {
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
/******/
/******/ 	};
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// objects to store loaded and loading chunks
/******/ 	var installedChunks = {
/******/ 		76: 0
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
/******/ 		script.type = "text/javascript";
/******/ 		script.charset = 'utf-8';
/******/ 		script.async = true;
/******/ 		script.timeout = 120000;
/******/
/******/ 		if (__webpack_require__.nc) {
/******/ 			script.setAttribute("nonce", __webpack_require__.nc);
/******/ 		}
/******/ 		script.src = __webpack_require__.p + "" + ({"0":"RelevanceInspector","1":"HierarchicalFacet","2":"TimespanFacet","3":"FacetRange","4":"Facet","5":"AdvancedSearch","6":"FacetSlider","7":"OmniboxResultList","8":"Recommendation","9":"Searchbox","10":"ResultList","11":"Omnibox","12":"Tab","13":"ResultsFiltersPreferences","14":"ResultsPreferences","15":"Quickview","16":"Backdrop","17":"SearchAlerts","18":"SimpleFilter","19":"ResultLayoutSelector","20":"FieldTable","21":"DistanceResources","22":"Sort","23":"YouTubeThumbnail","24":"Thumbnail","25":"ResultFolding","26":"PrintableUri","27":"Matrix","28":"FacetValueSuggestions","29":"CardOverlay","30":"FoldingForThread","31":"Badge","32":"FollowItem","33":"Settings","34":"ResultTagging","35":"ResultRating","36":"ResultAttachments","37":"QuerySummary","38":"Pager","39":"HiddenQuery","40":"FieldSuggestions","41":"CardActionBar","42":"Breadcrumb","43":"Querybox","44":"SearchButton","45":"Logo","46":"NumericSpinner","47":"Folding","48":"FieldValue","49":"ChatterPostedBy","50":"ChatterPostAttachment","51":"ChatterLikedBy","52":"AnalyticsSuggestions","53":"DatePicker","54":"RadioButton","55":"MultiSelect","56":"FormGroup","57":"Triggers","58":"Text","59":"ShareQuery","60":"ResultsPerPage","61":"ResultLink","62":"QueryDuration","63":"PreferencesPanel","64":"ExportToExcel","65":"Excerpt","66":"ErrorReport","67":"DidYouMean","68":"AuthenticationProvider","69":"TemplateLoader","70":"PipelineContext","71":"Icon","72":"Dropdown","73":"ChatterTopic","74":"Aggregate"}[chunkId]||chunkId) + "__" + "3666dadfe7be2cf1b66b" + ".js";
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
/******/ 	__webpack_require__.p = "js/";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 440);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;//     Underscore.js 1.8.3
//     http://underscorejs.org
//     (c) 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.

(function() {

  // Baseline setup
  // --------------

  // Establish the root object, `window` in the browser, or `exports` on the server.
  var root = this;

  // Save the previous value of the `_` variable.
  var previousUnderscore = root._;

  // Save bytes in the minified (but not gzipped) version:
  var ArrayProto = Array.prototype, ObjProto = Object.prototype, FuncProto = Function.prototype;

  // Create quick reference variables for speed access to core prototypes.
  var
    push             = ArrayProto.push,
    slice            = ArrayProto.slice,
    toString         = ObjProto.toString,
    hasOwnProperty   = ObjProto.hasOwnProperty;

  // All **ECMAScript 5** native function implementations that we hope to use
  // are declared here.
  var
    nativeIsArray      = Array.isArray,
    nativeKeys         = Object.keys,
    nativeBind         = FuncProto.bind,
    nativeCreate       = Object.create;

  // Naked function reference for surrogate-prototype-swapping.
  var Ctor = function(){};

  // Create a safe reference to the Underscore object for use below.
  var _ = function(obj) {
    if (obj instanceof _) return obj;
    if (!(this instanceof _)) return new _(obj);
    this._wrapped = obj;
  };

  // Export the Underscore object for **Node.js**, with
  // backwards-compatibility for the old `require()` API. If we're in
  // the browser, add `_` as a global object.
  if (true) {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = _;
    }
    exports._ = _;
  } else {
    root._ = _;
  }

  // Current version.
  _.VERSION = '1.8.3';

  // Internal function that returns an efficient (for current engines) version
  // of the passed-in callback, to be repeatedly applied in other Underscore
  // functions.
  var optimizeCb = function(func, context, argCount) {
    if (context === void 0) return func;
    switch (argCount == null ? 3 : argCount) {
      case 1: return function(value) {
        return func.call(context, value);
      };
      case 2: return function(value, other) {
        return func.call(context, value, other);
      };
      case 3: return function(value, index, collection) {
        return func.call(context, value, index, collection);
      };
      case 4: return function(accumulator, value, index, collection) {
        return func.call(context, accumulator, value, index, collection);
      };
    }
    return function() {
      return func.apply(context, arguments);
    };
  };

  // A mostly-internal function to generate callbacks that can be applied
  // to each element in a collection, returning the desired result — either
  // identity, an arbitrary callback, a property matcher, or a property accessor.
  var cb = function(value, context, argCount) {
    if (value == null) return _.identity;
    if (_.isFunction(value)) return optimizeCb(value, context, argCount);
    if (_.isObject(value)) return _.matcher(value);
    return _.property(value);
  };
  _.iteratee = function(value, context) {
    return cb(value, context, Infinity);
  };

  // An internal function for creating assigner functions.
  var createAssigner = function(keysFunc, undefinedOnly) {
    return function(obj) {
      var length = arguments.length;
      if (length < 2 || obj == null) return obj;
      for (var index = 1; index < length; index++) {
        var source = arguments[index],
            keys = keysFunc(source),
            l = keys.length;
        for (var i = 0; i < l; i++) {
          var key = keys[i];
          if (!undefinedOnly || obj[key] === void 0) obj[key] = source[key];
        }
      }
      return obj;
    };
  };

  // An internal function for creating a new object that inherits from another.
  var baseCreate = function(prototype) {
    if (!_.isObject(prototype)) return {};
    if (nativeCreate) return nativeCreate(prototype);
    Ctor.prototype = prototype;
    var result = new Ctor;
    Ctor.prototype = null;
    return result;
  };

  var property = function(key) {
    return function(obj) {
      return obj == null ? void 0 : obj[key];
    };
  };

  // Helper for collection methods to determine whether a collection
  // should be iterated as an array or as an object
  // Related: http://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength
  // Avoids a very nasty iOS 8 JIT bug on ARM-64. #2094
  var MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;
  var getLength = property('length');
  var isArrayLike = function(collection) {
    var length = getLength(collection);
    return typeof length == 'number' && length >= 0 && length <= MAX_ARRAY_INDEX;
  };

  // Collection Functions
  // --------------------

  // The cornerstone, an `each` implementation, aka `forEach`.
  // Handles raw objects in addition to array-likes. Treats all
  // sparse array-likes as if they were dense.
  _.each = _.forEach = function(obj, iteratee, context) {
    iteratee = optimizeCb(iteratee, context);
    var i, length;
    if (isArrayLike(obj)) {
      for (i = 0, length = obj.length; i < length; i++) {
        iteratee(obj[i], i, obj);
      }
    } else {
      var keys = _.keys(obj);
      for (i = 0, length = keys.length; i < length; i++) {
        iteratee(obj[keys[i]], keys[i], obj);
      }
    }
    return obj;
  };

  // Return the results of applying the iteratee to each element.
  _.map = _.collect = function(obj, iteratee, context) {
    iteratee = cb(iteratee, context);
    var keys = !isArrayLike(obj) && _.keys(obj),
        length = (keys || obj).length,
        results = Array(length);
    for (var index = 0; index < length; index++) {
      var currentKey = keys ? keys[index] : index;
      results[index] = iteratee(obj[currentKey], currentKey, obj);
    }
    return results;
  };

  // Create a reducing function iterating left or right.
  function createReduce(dir) {
    // Optimized iterator function as using arguments.length
    // in the main function will deoptimize the, see #1991.
    function iterator(obj, iteratee, memo, keys, index, length) {
      for (; index >= 0 && index < length; index += dir) {
        var currentKey = keys ? keys[index] : index;
        memo = iteratee(memo, obj[currentKey], currentKey, obj);
      }
      return memo;
    }

    return function(obj, iteratee, memo, context) {
      iteratee = optimizeCb(iteratee, context, 4);
      var keys = !isArrayLike(obj) && _.keys(obj),
          length = (keys || obj).length,
          index = dir > 0 ? 0 : length - 1;
      // Determine the initial value if none is provided.
      if (arguments.length < 3) {
        memo = obj[keys ? keys[index] : index];
        index += dir;
      }
      return iterator(obj, iteratee, memo, keys, index, length);
    };
  }

  // **Reduce** builds up a single result from a list of values, aka `inject`,
  // or `foldl`.
  _.reduce = _.foldl = _.inject = createReduce(1);

  // The right-associative version of reduce, also known as `foldr`.
  _.reduceRight = _.foldr = createReduce(-1);

  // Return the first value which passes a truth test. Aliased as `detect`.
  _.find = _.detect = function(obj, predicate, context) {
    var key;
    if (isArrayLike(obj)) {
      key = _.findIndex(obj, predicate, context);
    } else {
      key = _.findKey(obj, predicate, context);
    }
    if (key !== void 0 && key !== -1) return obj[key];
  };

  // Return all the elements that pass a truth test.
  // Aliased as `select`.
  _.filter = _.select = function(obj, predicate, context) {
    var results = [];
    predicate = cb(predicate, context);
    _.each(obj, function(value, index, list) {
      if (predicate(value, index, list)) results.push(value);
    });
    return results;
  };

  // Return all the elements for which a truth test fails.
  _.reject = function(obj, predicate, context) {
    return _.filter(obj, _.negate(cb(predicate)), context);
  };

  // Determine whether all of the elements match a truth test.
  // Aliased as `all`.
  _.every = _.all = function(obj, predicate, context) {
    predicate = cb(predicate, context);
    var keys = !isArrayLike(obj) && _.keys(obj),
        length = (keys || obj).length;
    for (var index = 0; index < length; index++) {
      var currentKey = keys ? keys[index] : index;
      if (!predicate(obj[currentKey], currentKey, obj)) return false;
    }
    return true;
  };

  // Determine if at least one element in the object matches a truth test.
  // Aliased as `any`.
  _.some = _.any = function(obj, predicate, context) {
    predicate = cb(predicate, context);
    var keys = !isArrayLike(obj) && _.keys(obj),
        length = (keys || obj).length;
    for (var index = 0; index < length; index++) {
      var currentKey = keys ? keys[index] : index;
      if (predicate(obj[currentKey], currentKey, obj)) return true;
    }
    return false;
  };

  // Determine if the array or object contains a given item (using `===`).
  // Aliased as `includes` and `include`.
  _.contains = _.includes = _.include = function(obj, item, fromIndex, guard) {
    if (!isArrayLike(obj)) obj = _.values(obj);
    if (typeof fromIndex != 'number' || guard) fromIndex = 0;
    return _.indexOf(obj, item, fromIndex) >= 0;
  };

  // Invoke a method (with arguments) on every item in a collection.
  _.invoke = function(obj, method) {
    var args = slice.call(arguments, 2);
    var isFunc = _.isFunction(method);
    return _.map(obj, function(value) {
      var func = isFunc ? method : value[method];
      return func == null ? func : func.apply(value, args);
    });
  };

  // Convenience version of a common use case of `map`: fetching a property.
  _.pluck = function(obj, key) {
    return _.map(obj, _.property(key));
  };

  // Convenience version of a common use case of `filter`: selecting only objects
  // containing specific `key:value` pairs.
  _.where = function(obj, attrs) {
    return _.filter(obj, _.matcher(attrs));
  };

  // Convenience version of a common use case of `find`: getting the first object
  // containing specific `key:value` pairs.
  _.findWhere = function(obj, attrs) {
    return _.find(obj, _.matcher(attrs));
  };

  // Return the maximum element (or element-based computation).
  _.max = function(obj, iteratee, context) {
    var result = -Infinity, lastComputed = -Infinity,
        value, computed;
    if (iteratee == null && obj != null) {
      obj = isArrayLike(obj) ? obj : _.values(obj);
      for (var i = 0, length = obj.length; i < length; i++) {
        value = obj[i];
        if (value > result) {
          result = value;
        }
      }
    } else {
      iteratee = cb(iteratee, context);
      _.each(obj, function(value, index, list) {
        computed = iteratee(value, index, list);
        if (computed > lastComputed || computed === -Infinity && result === -Infinity) {
          result = value;
          lastComputed = computed;
        }
      });
    }
    return result;
  };

  // Return the minimum element (or element-based computation).
  _.min = function(obj, iteratee, context) {
    var result = Infinity, lastComputed = Infinity,
        value, computed;
    if (iteratee == null && obj != null) {
      obj = isArrayLike(obj) ? obj : _.values(obj);
      for (var i = 0, length = obj.length; i < length; i++) {
        value = obj[i];
        if (value < result) {
          result = value;
        }
      }
    } else {
      iteratee = cb(iteratee, context);
      _.each(obj, function(value, index, list) {
        computed = iteratee(value, index, list);
        if (computed < lastComputed || computed === Infinity && result === Infinity) {
          result = value;
          lastComputed = computed;
        }
      });
    }
    return result;
  };

  // Shuffle a collection, using the modern version of the
  // [Fisher-Yates shuffle](http://en.wikipedia.org/wiki/Fisher–Yates_shuffle).
  _.shuffle = function(obj) {
    var set = isArrayLike(obj) ? obj : _.values(obj);
    var length = set.length;
    var shuffled = Array(length);
    for (var index = 0, rand; index < length; index++) {
      rand = _.random(0, index);
      if (rand !== index) shuffled[index] = shuffled[rand];
      shuffled[rand] = set[index];
    }
    return shuffled;
  };

  // Sample **n** random values from a collection.
  // If **n** is not specified, returns a single random element.
  // The internal `guard` argument allows it to work with `map`.
  _.sample = function(obj, n, guard) {
    if (n == null || guard) {
      if (!isArrayLike(obj)) obj = _.values(obj);
      return obj[_.random(obj.length - 1)];
    }
    return _.shuffle(obj).slice(0, Math.max(0, n));
  };

  // Sort the object's values by a criterion produced by an iteratee.
  _.sortBy = function(obj, iteratee, context) {
    iteratee = cb(iteratee, context);
    return _.pluck(_.map(obj, function(value, index, list) {
      return {
        value: value,
        index: index,
        criteria: iteratee(value, index, list)
      };
    }).sort(function(left, right) {
      var a = left.criteria;
      var b = right.criteria;
      if (a !== b) {
        if (a > b || a === void 0) return 1;
        if (a < b || b === void 0) return -1;
      }
      return left.index - right.index;
    }), 'value');
  };

  // An internal function used for aggregate "group by" operations.
  var group = function(behavior) {
    return function(obj, iteratee, context) {
      var result = {};
      iteratee = cb(iteratee, context);
      _.each(obj, function(value, index) {
        var key = iteratee(value, index, obj);
        behavior(result, value, key);
      });
      return result;
    };
  };

  // Groups the object's values by a criterion. Pass either a string attribute
  // to group by, or a function that returns the criterion.
  _.groupBy = group(function(result, value, key) {
    if (_.has(result, key)) result[key].push(value); else result[key] = [value];
  });

  // Indexes the object's values by a criterion, similar to `groupBy`, but for
  // when you know that your index values will be unique.
  _.indexBy = group(function(result, value, key) {
    result[key] = value;
  });

  // Counts instances of an object that group by a certain criterion. Pass
  // either a string attribute to count by, or a function that returns the
  // criterion.
  _.countBy = group(function(result, value, key) {
    if (_.has(result, key)) result[key]++; else result[key] = 1;
  });

  // Safely create a real, live array from anything iterable.
  _.toArray = function(obj) {
    if (!obj) return [];
    if (_.isArray(obj)) return slice.call(obj);
    if (isArrayLike(obj)) return _.map(obj, _.identity);
    return _.values(obj);
  };

  // Return the number of elements in an object.
  _.size = function(obj) {
    if (obj == null) return 0;
    return isArrayLike(obj) ? obj.length : _.keys(obj).length;
  };

  // Split a collection into two arrays: one whose elements all satisfy the given
  // predicate, and one whose elements all do not satisfy the predicate.
  _.partition = function(obj, predicate, context) {
    predicate = cb(predicate, context);
    var pass = [], fail = [];
    _.each(obj, function(value, key, obj) {
      (predicate(value, key, obj) ? pass : fail).push(value);
    });
    return [pass, fail];
  };

  // Array Functions
  // ---------------

  // Get the first element of an array. Passing **n** will return the first N
  // values in the array. Aliased as `head` and `take`. The **guard** check
  // allows it to work with `_.map`.
  _.first = _.head = _.take = function(array, n, guard) {
    if (array == null) return void 0;
    if (n == null || guard) return array[0];
    return _.initial(array, array.length - n);
  };

  // Returns everything but the last entry of the array. Especially useful on
  // the arguments object. Passing **n** will return all the values in
  // the array, excluding the last N.
  _.initial = function(array, n, guard) {
    return slice.call(array, 0, Math.max(0, array.length - (n == null || guard ? 1 : n)));
  };

  // Get the last element of an array. Passing **n** will return the last N
  // values in the array.
  _.last = function(array, n, guard) {
    if (array == null) return void 0;
    if (n == null || guard) return array[array.length - 1];
    return _.rest(array, Math.max(0, array.length - n));
  };

  // Returns everything but the first entry of the array. Aliased as `tail` and `drop`.
  // Especially useful on the arguments object. Passing an **n** will return
  // the rest N values in the array.
  _.rest = _.tail = _.drop = function(array, n, guard) {
    return slice.call(array, n == null || guard ? 1 : n);
  };

  // Trim out all falsy values from an array.
  _.compact = function(array) {
    return _.filter(array, _.identity);
  };

  // Internal implementation of a recursive `flatten` function.
  var flatten = function(input, shallow, strict, startIndex) {
    var output = [], idx = 0;
    for (var i = startIndex || 0, length = getLength(input); i < length; i++) {
      var value = input[i];
      if (isArrayLike(value) && (_.isArray(value) || _.isArguments(value))) {
        //flatten current level of array or arguments object
        if (!shallow) value = flatten(value, shallow, strict);
        var j = 0, len = value.length;
        output.length += len;
        while (j < len) {
          output[idx++] = value[j++];
        }
      } else if (!strict) {
        output[idx++] = value;
      }
    }
    return output;
  };

  // Flatten out an array, either recursively (by default), or just one level.
  _.flatten = function(array, shallow) {
    return flatten(array, shallow, false);
  };

  // Return a version of the array that does not contain the specified value(s).
  _.without = function(array) {
    return _.difference(array, slice.call(arguments, 1));
  };

  // Produce a duplicate-free version of the array. If the array has already
  // been sorted, you have the option of using a faster algorithm.
  // Aliased as `unique`.
  _.uniq = _.unique = function(array, isSorted, iteratee, context) {
    if (!_.isBoolean(isSorted)) {
      context = iteratee;
      iteratee = isSorted;
      isSorted = false;
    }
    if (iteratee != null) iteratee = cb(iteratee, context);
    var result = [];
    var seen = [];
    for (var i = 0, length = getLength(array); i < length; i++) {
      var value = array[i],
          computed = iteratee ? iteratee(value, i, array) : value;
      if (isSorted) {
        if (!i || seen !== computed) result.push(value);
        seen = computed;
      } else if (iteratee) {
        if (!_.contains(seen, computed)) {
          seen.push(computed);
          result.push(value);
        }
      } else if (!_.contains(result, value)) {
        result.push(value);
      }
    }
    return result;
  };

  // Produce an array that contains the union: each distinct element from all of
  // the passed-in arrays.
  _.union = function() {
    return _.uniq(flatten(arguments, true, true));
  };

  // Produce an array that contains every item shared between all the
  // passed-in arrays.
  _.intersection = function(array) {
    var result = [];
    var argsLength = arguments.length;
    for (var i = 0, length = getLength(array); i < length; i++) {
      var item = array[i];
      if (_.contains(result, item)) continue;
      for (var j = 1; j < argsLength; j++) {
        if (!_.contains(arguments[j], item)) break;
      }
      if (j === argsLength) result.push(item);
    }
    return result;
  };

  // Take the difference between one array and a number of other arrays.
  // Only the elements present in just the first array will remain.
  _.difference = function(array) {
    var rest = flatten(arguments, true, true, 1);
    return _.filter(array, function(value){
      return !_.contains(rest, value);
    });
  };

  // Zip together multiple lists into a single array -- elements that share
  // an index go together.
  _.zip = function() {
    return _.unzip(arguments);
  };

  // Complement of _.zip. Unzip accepts an array of arrays and groups
  // each array's elements on shared indices
  _.unzip = function(array) {
    var length = array && _.max(array, getLength).length || 0;
    var result = Array(length);

    for (var index = 0; index < length; index++) {
      result[index] = _.pluck(array, index);
    }
    return result;
  };

  // Converts lists into objects. Pass either a single array of `[key, value]`
  // pairs, or two parallel arrays of the same length -- one of keys, and one of
  // the corresponding values.
  _.object = function(list, values) {
    var result = {};
    for (var i = 0, length = getLength(list); i < length; i++) {
      if (values) {
        result[list[i]] = values[i];
      } else {
        result[list[i][0]] = list[i][1];
      }
    }
    return result;
  };

  // Generator function to create the findIndex and findLastIndex functions
  function createPredicateIndexFinder(dir) {
    return function(array, predicate, context) {
      predicate = cb(predicate, context);
      var length = getLength(array);
      var index = dir > 0 ? 0 : length - 1;
      for (; index >= 0 && index < length; index += dir) {
        if (predicate(array[index], index, array)) return index;
      }
      return -1;
    };
  }

  // Returns the first index on an array-like that passes a predicate test
  _.findIndex = createPredicateIndexFinder(1);
  _.findLastIndex = createPredicateIndexFinder(-1);

  // Use a comparator function to figure out the smallest index at which
  // an object should be inserted so as to maintain order. Uses binary search.
  _.sortedIndex = function(array, obj, iteratee, context) {
    iteratee = cb(iteratee, context, 1);
    var value = iteratee(obj);
    var low = 0, high = getLength(array);
    while (low < high) {
      var mid = Math.floor((low + high) / 2);
      if (iteratee(array[mid]) < value) low = mid + 1; else high = mid;
    }
    return low;
  };

  // Generator function to create the indexOf and lastIndexOf functions
  function createIndexFinder(dir, predicateFind, sortedIndex) {
    return function(array, item, idx) {
      var i = 0, length = getLength(array);
      if (typeof idx == 'number') {
        if (dir > 0) {
            i = idx >= 0 ? idx : Math.max(idx + length, i);
        } else {
            length = idx >= 0 ? Math.min(idx + 1, length) : idx + length + 1;
        }
      } else if (sortedIndex && idx && length) {
        idx = sortedIndex(array, item);
        return array[idx] === item ? idx : -1;
      }
      if (item !== item) {
        idx = predicateFind(slice.call(array, i, length), _.isNaN);
        return idx >= 0 ? idx + i : -1;
      }
      for (idx = dir > 0 ? i : length - 1; idx >= 0 && idx < length; idx += dir) {
        if (array[idx] === item) return idx;
      }
      return -1;
    };
  }

  // Return the position of the first occurrence of an item in an array,
  // or -1 if the item is not included in the array.
  // If the array is large and already in sort order, pass `true`
  // for **isSorted** to use binary search.
  _.indexOf = createIndexFinder(1, _.findIndex, _.sortedIndex);
  _.lastIndexOf = createIndexFinder(-1, _.findLastIndex);

  // Generate an integer Array containing an arithmetic progression. A port of
  // the native Python `range()` function. See
  // [the Python documentation](http://docs.python.org/library/functions.html#range).
  _.range = function(start, stop, step) {
    if (stop == null) {
      stop = start || 0;
      start = 0;
    }
    step = step || 1;

    var length = Math.max(Math.ceil((stop - start) / step), 0);
    var range = Array(length);

    for (var idx = 0; idx < length; idx++, start += step) {
      range[idx] = start;
    }

    return range;
  };

  // Function (ahem) Functions
  // ------------------

  // Determines whether to execute a function as a constructor
  // or a normal function with the provided arguments
  var executeBound = function(sourceFunc, boundFunc, context, callingContext, args) {
    if (!(callingContext instanceof boundFunc)) return sourceFunc.apply(context, args);
    var self = baseCreate(sourceFunc.prototype);
    var result = sourceFunc.apply(self, args);
    if (_.isObject(result)) return result;
    return self;
  };

  // Create a function bound to a given object (assigning `this`, and arguments,
  // optionally). Delegates to **ECMAScript 5**'s native `Function.bind` if
  // available.
  _.bind = function(func, context) {
    if (nativeBind && func.bind === nativeBind) return nativeBind.apply(func, slice.call(arguments, 1));
    if (!_.isFunction(func)) throw new TypeError('Bind must be called on a function');
    var args = slice.call(arguments, 2);
    var bound = function() {
      return executeBound(func, bound, context, this, args.concat(slice.call(arguments)));
    };
    return bound;
  };

  // Partially apply a function by creating a version that has had some of its
  // arguments pre-filled, without changing its dynamic `this` context. _ acts
  // as a placeholder, allowing any combination of arguments to be pre-filled.
  _.partial = function(func) {
    var boundArgs = slice.call(arguments, 1);
    var bound = function() {
      var position = 0, length = boundArgs.length;
      var args = Array(length);
      for (var i = 0; i < length; i++) {
        args[i] = boundArgs[i] === _ ? arguments[position++] : boundArgs[i];
      }
      while (position < arguments.length) args.push(arguments[position++]);
      return executeBound(func, bound, this, this, args);
    };
    return bound;
  };

  // Bind a number of an object's methods to that object. Remaining arguments
  // are the method names to be bound. Useful for ensuring that all callbacks
  // defined on an object belong to it.
  _.bindAll = function(obj) {
    var i, length = arguments.length, key;
    if (length <= 1) throw new Error('bindAll must be passed function names');
    for (i = 1; i < length; i++) {
      key = arguments[i];
      obj[key] = _.bind(obj[key], obj);
    }
    return obj;
  };

  // Memoize an expensive function by storing its results.
  _.memoize = function(func, hasher) {
    var memoize = function(key) {
      var cache = memoize.cache;
      var address = '' + (hasher ? hasher.apply(this, arguments) : key);
      if (!_.has(cache, address)) cache[address] = func.apply(this, arguments);
      return cache[address];
    };
    memoize.cache = {};
    return memoize;
  };

  // Delays a function for the given number of milliseconds, and then calls
  // it with the arguments supplied.
  _.delay = function(func, wait) {
    var args = slice.call(arguments, 2);
    return setTimeout(function(){
      return func.apply(null, args);
    }, wait);
  };

  // Defers a function, scheduling it to run after the current call stack has
  // cleared.
  _.defer = _.partial(_.delay, _, 1);

  // Returns a function, that, when invoked, will only be triggered at most once
  // during a given window of time. Normally, the throttled function will run
  // as much as it can, without ever going more than once per `wait` duration;
  // but if you'd like to disable the execution on the leading edge, pass
  // `{leading: false}`. To disable execution on the trailing edge, ditto.
  _.throttle = function(func, wait, options) {
    var context, args, result;
    var timeout = null;
    var previous = 0;
    if (!options) options = {};
    var later = function() {
      previous = options.leading === false ? 0 : _.now();
      timeout = null;
      result = func.apply(context, args);
      if (!timeout) context = args = null;
    };
    return function() {
      var now = _.now();
      if (!previous && options.leading === false) previous = now;
      var remaining = wait - (now - previous);
      context = this;
      args = arguments;
      if (remaining <= 0 || remaining > wait) {
        if (timeout) {
          clearTimeout(timeout);
          timeout = null;
        }
        previous = now;
        result = func.apply(context, args);
        if (!timeout) context = args = null;
      } else if (!timeout && options.trailing !== false) {
        timeout = setTimeout(later, remaining);
      }
      return result;
    };
  };

  // Returns a function, that, as long as it continues to be invoked, will not
  // be triggered. The function will be called after it stops being called for
  // N milliseconds. If `immediate` is passed, trigger the function on the
  // leading edge, instead of the trailing.
  _.debounce = function(func, wait, immediate) {
    var timeout, args, context, timestamp, result;

    var later = function() {
      var last = _.now() - timestamp;

      if (last < wait && last >= 0) {
        timeout = setTimeout(later, wait - last);
      } else {
        timeout = null;
        if (!immediate) {
          result = func.apply(context, args);
          if (!timeout) context = args = null;
        }
      }
    };

    return function() {
      context = this;
      args = arguments;
      timestamp = _.now();
      var callNow = immediate && !timeout;
      if (!timeout) timeout = setTimeout(later, wait);
      if (callNow) {
        result = func.apply(context, args);
        context = args = null;
      }

      return result;
    };
  };

  // Returns the first function passed as an argument to the second,
  // allowing you to adjust arguments, run code before and after, and
  // conditionally execute the original function.
  _.wrap = function(func, wrapper) {
    return _.partial(wrapper, func);
  };

  // Returns a negated version of the passed-in predicate.
  _.negate = function(predicate) {
    return function() {
      return !predicate.apply(this, arguments);
    };
  };

  // Returns a function that is the composition of a list of functions, each
  // consuming the return value of the function that follows.
  _.compose = function() {
    var args = arguments;
    var start = args.length - 1;
    return function() {
      var i = start;
      var result = args[start].apply(this, arguments);
      while (i--) result = args[i].call(this, result);
      return result;
    };
  };

  // Returns a function that will only be executed on and after the Nth call.
  _.after = function(times, func) {
    return function() {
      if (--times < 1) {
        return func.apply(this, arguments);
      }
    };
  };

  // Returns a function that will only be executed up to (but not including) the Nth call.
  _.before = function(times, func) {
    var memo;
    return function() {
      if (--times > 0) {
        memo = func.apply(this, arguments);
      }
      if (times <= 1) func = null;
      return memo;
    };
  };

  // Returns a function that will be executed at most one time, no matter how
  // often you call it. Useful for lazy initialization.
  _.once = _.partial(_.before, 2);

  // Object Functions
  // ----------------

  // Keys in IE < 9 that won't be iterated by `for key in ...` and thus missed.
  var hasEnumBug = !{toString: null}.propertyIsEnumerable('toString');
  var nonEnumerableProps = ['valueOf', 'isPrototypeOf', 'toString',
                      'propertyIsEnumerable', 'hasOwnProperty', 'toLocaleString'];

  function collectNonEnumProps(obj, keys) {
    var nonEnumIdx = nonEnumerableProps.length;
    var constructor = obj.constructor;
    var proto = (_.isFunction(constructor) && constructor.prototype) || ObjProto;

    // Constructor is a special case.
    var prop = 'constructor';
    if (_.has(obj, prop) && !_.contains(keys, prop)) keys.push(prop);

    while (nonEnumIdx--) {
      prop = nonEnumerableProps[nonEnumIdx];
      if (prop in obj && obj[prop] !== proto[prop] && !_.contains(keys, prop)) {
        keys.push(prop);
      }
    }
  }

  // Retrieve the names of an object's own properties.
  // Delegates to **ECMAScript 5**'s native `Object.keys`
  _.keys = function(obj) {
    if (!_.isObject(obj)) return [];
    if (nativeKeys) return nativeKeys(obj);
    var keys = [];
    for (var key in obj) if (_.has(obj, key)) keys.push(key);
    // Ahem, IE < 9.
    if (hasEnumBug) collectNonEnumProps(obj, keys);
    return keys;
  };

  // Retrieve all the property names of an object.
  _.allKeys = function(obj) {
    if (!_.isObject(obj)) return [];
    var keys = [];
    for (var key in obj) keys.push(key);
    // Ahem, IE < 9.
    if (hasEnumBug) collectNonEnumProps(obj, keys);
    return keys;
  };

  // Retrieve the values of an object's properties.
  _.values = function(obj) {
    var keys = _.keys(obj);
    var length = keys.length;
    var values = Array(length);
    for (var i = 0; i < length; i++) {
      values[i] = obj[keys[i]];
    }
    return values;
  };

  // Returns the results of applying the iteratee to each element of the object
  // In contrast to _.map it returns an object
  _.mapObject = function(obj, iteratee, context) {
    iteratee = cb(iteratee, context);
    var keys =  _.keys(obj),
          length = keys.length,
          results = {},
          currentKey;
      for (var index = 0; index < length; index++) {
        currentKey = keys[index];
        results[currentKey] = iteratee(obj[currentKey], currentKey, obj);
      }
      return results;
  };

  // Convert an object into a list of `[key, value]` pairs.
  _.pairs = function(obj) {
    var keys = _.keys(obj);
    var length = keys.length;
    var pairs = Array(length);
    for (var i = 0; i < length; i++) {
      pairs[i] = [keys[i], obj[keys[i]]];
    }
    return pairs;
  };

  // Invert the keys and values of an object. The values must be serializable.
  _.invert = function(obj) {
    var result = {};
    var keys = _.keys(obj);
    for (var i = 0, length = keys.length; i < length; i++) {
      result[obj[keys[i]]] = keys[i];
    }
    return result;
  };

  // Return a sorted list of the function names available on the object.
  // Aliased as `methods`
  _.functions = _.methods = function(obj) {
    var names = [];
    for (var key in obj) {
      if (_.isFunction(obj[key])) names.push(key);
    }
    return names.sort();
  };

  // Extend a given object with all the properties in passed-in object(s).
  _.extend = createAssigner(_.allKeys);

  // Assigns a given object with all the own properties in the passed-in object(s)
  // (https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
  _.extendOwn = _.assign = createAssigner(_.keys);

  // Returns the first key on an object that passes a predicate test
  _.findKey = function(obj, predicate, context) {
    predicate = cb(predicate, context);
    var keys = _.keys(obj), key;
    for (var i = 0, length = keys.length; i < length; i++) {
      key = keys[i];
      if (predicate(obj[key], key, obj)) return key;
    }
  };

  // Return a copy of the object only containing the whitelisted properties.
  _.pick = function(object, oiteratee, context) {
    var result = {}, obj = object, iteratee, keys;
    if (obj == null) return result;
    if (_.isFunction(oiteratee)) {
      keys = _.allKeys(obj);
      iteratee = optimizeCb(oiteratee, context);
    } else {
      keys = flatten(arguments, false, false, 1);
      iteratee = function(value, key, obj) { return key in obj; };
      obj = Object(obj);
    }
    for (var i = 0, length = keys.length; i < length; i++) {
      var key = keys[i];
      var value = obj[key];
      if (iteratee(value, key, obj)) result[key] = value;
    }
    return result;
  };

   // Return a copy of the object without the blacklisted properties.
  _.omit = function(obj, iteratee, context) {
    if (_.isFunction(iteratee)) {
      iteratee = _.negate(iteratee);
    } else {
      var keys = _.map(flatten(arguments, false, false, 1), String);
      iteratee = function(value, key) {
        return !_.contains(keys, key);
      };
    }
    return _.pick(obj, iteratee, context);
  };

  // Fill in a given object with default properties.
  _.defaults = createAssigner(_.allKeys, true);

  // Creates an object that inherits from the given prototype object.
  // If additional properties are provided then they will be added to the
  // created object.
  _.create = function(prototype, props) {
    var result = baseCreate(prototype);
    if (props) _.extendOwn(result, props);
    return result;
  };

  // Create a (shallow-cloned) duplicate of an object.
  _.clone = function(obj) {
    if (!_.isObject(obj)) return obj;
    return _.isArray(obj) ? obj.slice() : _.extend({}, obj);
  };

  // Invokes interceptor with the obj, and then returns obj.
  // The primary purpose of this method is to "tap into" a method chain, in
  // order to perform operations on intermediate results within the chain.
  _.tap = function(obj, interceptor) {
    interceptor(obj);
    return obj;
  };

  // Returns whether an object has a given set of `key:value` pairs.
  _.isMatch = function(object, attrs) {
    var keys = _.keys(attrs), length = keys.length;
    if (object == null) return !length;
    var obj = Object(object);
    for (var i = 0; i < length; i++) {
      var key = keys[i];
      if (attrs[key] !== obj[key] || !(key in obj)) return false;
    }
    return true;
  };


  // Internal recursive comparison function for `isEqual`.
  var eq = function(a, b, aStack, bStack) {
    // Identical objects are equal. `0 === -0`, but they aren't identical.
    // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
    if (a === b) return a !== 0 || 1 / a === 1 / b;
    // A strict comparison is necessary because `null == undefined`.
    if (a == null || b == null) return a === b;
    // Unwrap any wrapped objects.
    if (a instanceof _) a = a._wrapped;
    if (b instanceof _) b = b._wrapped;
    // Compare `[[Class]]` names.
    var className = toString.call(a);
    if (className !== toString.call(b)) return false;
    switch (className) {
      // Strings, numbers, regular expressions, dates, and booleans are compared by value.
      case '[object RegExp]':
      // RegExps are coerced to strings for comparison (Note: '' + /a/i === '/a/i')
      case '[object String]':
        // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
        // equivalent to `new String("5")`.
        return '' + a === '' + b;
      case '[object Number]':
        // `NaN`s are equivalent, but non-reflexive.
        // Object(NaN) is equivalent to NaN
        if (+a !== +a) return +b !== +b;
        // An `egal` comparison is performed for other numeric values.
        return +a === 0 ? 1 / +a === 1 / b : +a === +b;
      case '[object Date]':
      case '[object Boolean]':
        // Coerce dates and booleans to numeric primitive values. Dates are compared by their
        // millisecond representations. Note that invalid dates with millisecond representations
        // of `NaN` are not equivalent.
        return +a === +b;
    }

    var areArrays = className === '[object Array]';
    if (!areArrays) {
      if (typeof a != 'object' || typeof b != 'object') return false;

      // Objects with different constructors are not equivalent, but `Object`s or `Array`s
      // from different frames are.
      var aCtor = a.constructor, bCtor = b.constructor;
      if (aCtor !== bCtor && !(_.isFunction(aCtor) && aCtor instanceof aCtor &&
                               _.isFunction(bCtor) && bCtor instanceof bCtor)
                          && ('constructor' in a && 'constructor' in b)) {
        return false;
      }
    }
    // Assume equality for cyclic structures. The algorithm for detecting cyclic
    // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.

    // Initializing stack of traversed objects.
    // It's done here since we only need them for objects and arrays comparison.
    aStack = aStack || [];
    bStack = bStack || [];
    var length = aStack.length;
    while (length--) {
      // Linear search. Performance is inversely proportional to the number of
      // unique nested structures.
      if (aStack[length] === a) return bStack[length] === b;
    }

    // Add the first object to the stack of traversed objects.
    aStack.push(a);
    bStack.push(b);

    // Recursively compare objects and arrays.
    if (areArrays) {
      // Compare array lengths to determine if a deep comparison is necessary.
      length = a.length;
      if (length !== b.length) return false;
      // Deep compare the contents, ignoring non-numeric properties.
      while (length--) {
        if (!eq(a[length], b[length], aStack, bStack)) return false;
      }
    } else {
      // Deep compare objects.
      var keys = _.keys(a), key;
      length = keys.length;
      // Ensure that both objects contain the same number of properties before comparing deep equality.
      if (_.keys(b).length !== length) return false;
      while (length--) {
        // Deep compare each member
        key = keys[length];
        if (!(_.has(b, key) && eq(a[key], b[key], aStack, bStack))) return false;
      }
    }
    // Remove the first object from the stack of traversed objects.
    aStack.pop();
    bStack.pop();
    return true;
  };

  // Perform a deep comparison to check if two objects are equal.
  _.isEqual = function(a, b) {
    return eq(a, b);
  };

  // Is a given array, string, or object empty?
  // An "empty" object has no enumerable own-properties.
  _.isEmpty = function(obj) {
    if (obj == null) return true;
    if (isArrayLike(obj) && (_.isArray(obj) || _.isString(obj) || _.isArguments(obj))) return obj.length === 0;
    return _.keys(obj).length === 0;
  };

  // Is a given value a DOM element?
  _.isElement = function(obj) {
    return !!(obj && obj.nodeType === 1);
  };

  // Is a given value an array?
  // Delegates to ECMA5's native Array.isArray
  _.isArray = nativeIsArray || function(obj) {
    return toString.call(obj) === '[object Array]';
  };

  // Is a given variable an object?
  _.isObject = function(obj) {
    var type = typeof obj;
    return type === 'function' || type === 'object' && !!obj;
  };

  // Add some isType methods: isArguments, isFunction, isString, isNumber, isDate, isRegExp, isError.
  _.each(['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp', 'Error'], function(name) {
    _['is' + name] = function(obj) {
      return toString.call(obj) === '[object ' + name + ']';
    };
  });

  // Define a fallback version of the method in browsers (ahem, IE < 9), where
  // there isn't any inspectable "Arguments" type.
  if (!_.isArguments(arguments)) {
    _.isArguments = function(obj) {
      return _.has(obj, 'callee');
    };
  }

  // Optimize `isFunction` if appropriate. Work around some typeof bugs in old v8,
  // IE 11 (#1621), and in Safari 8 (#1929).
  if (typeof /./ != 'function' && typeof Int8Array != 'object') {
    _.isFunction = function(obj) {
      return typeof obj == 'function' || false;
    };
  }

  // Is a given object a finite number?
  _.isFinite = function(obj) {
    return isFinite(obj) && !isNaN(parseFloat(obj));
  };

  // Is the given value `NaN`? (NaN is the only number which does not equal itself).
  _.isNaN = function(obj) {
    return _.isNumber(obj) && obj !== +obj;
  };

  // Is a given value a boolean?
  _.isBoolean = function(obj) {
    return obj === true || obj === false || toString.call(obj) === '[object Boolean]';
  };

  // Is a given value equal to null?
  _.isNull = function(obj) {
    return obj === null;
  };

  // Is a given variable undefined?
  _.isUndefined = function(obj) {
    return obj === void 0;
  };

  // Shortcut function for checking if an object has a given property directly
  // on itself (in other words, not on a prototype).
  _.has = function(obj, key) {
    return obj != null && hasOwnProperty.call(obj, key);
  };

  // Utility Functions
  // -----------------

  // Run Underscore.js in *noConflict* mode, returning the `_` variable to its
  // previous owner. Returns a reference to the Underscore object.
  _.noConflict = function() {
    root._ = previousUnderscore;
    return this;
  };

  // Keep the identity function around for default iteratees.
  _.identity = function(value) {
    return value;
  };

  // Predicate-generating functions. Often useful outside of Underscore.
  _.constant = function(value) {
    return function() {
      return value;
    };
  };

  _.noop = function(){};

  _.property = property;

  // Generates a function for a given object that returns a given property.
  _.propertyOf = function(obj) {
    return obj == null ? function(){} : function(key) {
      return obj[key];
    };
  };

  // Returns a predicate for checking whether an object has a given set of
  // `key:value` pairs.
  _.matcher = _.matches = function(attrs) {
    attrs = _.extendOwn({}, attrs);
    return function(obj) {
      return _.isMatch(obj, attrs);
    };
  };

  // Run a function **n** times.
  _.times = function(n, iteratee, context) {
    var accum = Array(Math.max(0, n));
    iteratee = optimizeCb(iteratee, context, 1);
    for (var i = 0; i < n; i++) accum[i] = iteratee(i);
    return accum;
  };

  // Return a random integer between min and max (inclusive).
  _.random = function(min, max) {
    if (max == null) {
      max = min;
      min = 0;
    }
    return min + Math.floor(Math.random() * (max - min + 1));
  };

  // A (possibly faster) way to get the current timestamp as an integer.
  _.now = Date.now || function() {
    return new Date().getTime();
  };

   // List of HTML entities for escaping.
  var escapeMap = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#x27;',
    '`': '&#x60;'
  };
  var unescapeMap = _.invert(escapeMap);

  // Functions for escaping and unescaping strings to/from HTML interpolation.
  var createEscaper = function(map) {
    var escaper = function(match) {
      return map[match];
    };
    // Regexes for identifying a key that needs to be escaped
    var source = '(?:' + _.keys(map).join('|') + ')';
    var testRegexp = RegExp(source);
    var replaceRegexp = RegExp(source, 'g');
    return function(string) {
      string = string == null ? '' : '' + string;
      return testRegexp.test(string) ? string.replace(replaceRegexp, escaper) : string;
    };
  };
  _.escape = createEscaper(escapeMap);
  _.unescape = createEscaper(unescapeMap);

  // If the value of the named `property` is a function then invoke it with the
  // `object` as context; otherwise, return it.
  _.result = function(object, property, fallback) {
    var value = object == null ? void 0 : object[property];
    if (value === void 0) {
      value = fallback;
    }
    return _.isFunction(value) ? value.call(object) : value;
  };

  // Generate a unique integer id (unique within the entire client session).
  // Useful for temporary DOM ids.
  var idCounter = 0;
  _.uniqueId = function(prefix) {
    var id = ++idCounter + '';
    return prefix ? prefix + id : id;
  };

  // By default, Underscore uses ERB-style template delimiters, change the
  // following template settings to use alternative delimiters.
  _.templateSettings = {
    evaluate    : /<%([\s\S]+?)%>/g,
    interpolate : /<%=([\s\S]+?)%>/g,
    escape      : /<%-([\s\S]+?)%>/g
  };

  // When customizing `templateSettings`, if you don't want to define an
  // interpolation, evaluation or escaping regex, we need one that is
  // guaranteed not to match.
  var noMatch = /(.)^/;

  // Certain characters need to be escaped so that they can be put into a
  // string literal.
  var escapes = {
    "'":      "'",
    '\\':     '\\',
    '\r':     'r',
    '\n':     'n',
    '\u2028': 'u2028',
    '\u2029': 'u2029'
  };

  var escaper = /\\|'|\r|\n|\u2028|\u2029/g;

  var escapeChar = function(match) {
    return '\\' + escapes[match];
  };

  // JavaScript micro-templating, similar to John Resig's implementation.
  // Underscore templating handles arbitrary delimiters, preserves whitespace,
  // and correctly escapes quotes within interpolated code.
  // NB: `oldSettings` only exists for backwards compatibility.
  _.template = function(text, settings, oldSettings) {
    if (!settings && oldSettings) settings = oldSettings;
    settings = _.defaults({}, settings, _.templateSettings);

    // Combine delimiters into one regular expression via alternation.
    var matcher = RegExp([
      (settings.escape || noMatch).source,
      (settings.interpolate || noMatch).source,
      (settings.evaluate || noMatch).source
    ].join('|') + '|$', 'g');

    // Compile the template source, escaping string literals appropriately.
    var index = 0;
    var source = "__p+='";
    text.replace(matcher, function(match, escape, interpolate, evaluate, offset) {
      source += text.slice(index, offset).replace(escaper, escapeChar);
      index = offset + match.length;

      if (escape) {
        source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
      } else if (interpolate) {
        source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
      } else if (evaluate) {
        source += "';\n" + evaluate + "\n__p+='";
      }

      // Adobe VMs need the match returned to produce the correct offest.
      return match;
    });
    source += "';\n";

    // If a variable is not specified, place data values in local scope.
    if (!settings.variable) source = 'with(obj||{}){\n' + source + '}\n';

    source = "var __t,__p='',__j=Array.prototype.join," +
      "print=function(){__p+=__j.call(arguments,'');};\n" +
      source + 'return __p;\n';

    try {
      var render = new Function(settings.variable || 'obj', '_', source);
    } catch (e) {
      e.source = source;
      throw e;
    }

    var template = function(data) {
      return render.call(this, data, _);
    };

    // Provide the compiled source as a convenience for precompilation.
    var argument = settings.variable || 'obj';
    template.source = 'function(' + argument + '){\n' + source + '}';

    return template;
  };

  // Add a "chain" function. Start chaining a wrapped Underscore object.
  _.chain = function(obj) {
    var instance = _(obj);
    instance._chain = true;
    return instance;
  };

  // OOP
  // ---------------
  // If Underscore is called as a function, it returns a wrapped object that
  // can be used OO-style. This wrapper holds altered versions of all the
  // underscore functions. Wrapped objects may be chained.

  // Helper function to continue chaining intermediate results.
  var result = function(instance, obj) {
    return instance._chain ? _(obj).chain() : obj;
  };

  // Add your own custom functions to the Underscore object.
  _.mixin = function(obj) {
    _.each(_.functions(obj), function(name) {
      var func = _[name] = obj[name];
      _.prototype[name] = function() {
        var args = [this._wrapped];
        push.apply(args, arguments);
        return result(this, func.apply(_, args));
      };
    });
  };

  // Add all of the Underscore functions to the wrapper object.
  _.mixin(_);

  // Add all mutator Array functions to the wrapper.
  _.each(['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'], function(name) {
    var method = ArrayProto[name];
    _.prototype[name] = function() {
      var obj = this._wrapped;
      method.apply(obj, arguments);
      if ((name === 'shift' || name === 'splice') && obj.length === 0) delete obj[0];
      return result(this, obj);
    };
  });

  // Add all accessor Array functions to the wrapper.
  _.each(['concat', 'join', 'slice'], function(name) {
    var method = ArrayProto[name];
    _.prototype[name] = function() {
      return result(this, method.apply(this._wrapped, arguments));
    };
  });

  // Extracts the result from a wrapped and chained object.
  _.prototype.value = function() {
    return this._wrapped;
  };

  // Provide unwrapping proxy for some methods used in engine operations
  // such as arithmetic and JSON stringification.
  _.prototype.valueOf = _.prototype.toJSON = _.prototype.value;

  _.prototype.toString = function() {
    return '' + this._wrapped;
  };

  // AMD registration happens at the end for compatibility with AMD loaders
  // that may not enforce next-turn semantics on modules. Even though general
  // practice for AMD registration is to be anonymous, underscore registers
  // as a named module because, like jQuery, it is a base library that is
  // popular enough to be bundled in a third party lib, but not be part of
  // an AMD load request. Those cases could generate an error when an
  // anonymous define() is called outside of a loader request.
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
      return _;
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  }
}.call(this));


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Logger_1 = __webpack_require__(11);
var Component_1 = __webpack_require__(6);
var Utils_1 = __webpack_require__(4);
var Assert_1 = __webpack_require__(5);
var Dom_1 = __webpack_require__(2);
var InitializationEvents_1 = __webpack_require__(15);
var SearchInterface_1 = __webpack_require__(17);
var QueryController_1 = __webpack_require__(33);
var HashUtils_1 = __webpack_require__(36);
var QueryStateModel_1 = __webpack_require__(12);
var ComponentStateModel_1 = __webpack_require__(59);
var ComponentOptionsModel_1 = __webpack_require__(24);
var AnalyticsActionListMeta_1 = __webpack_require__(9);
var JQueryutils_1 = __webpack_require__(57);
var _ = __webpack_require__(0);
var RegisteredNamedMethods_1 = __webpack_require__(26);
var InitializationHelper_1 = __webpack_require__(288);
/**
 * The main purpose of this class is to initialize the framework (a.k.a the code executed when calling `Coveo.init`).<br/>
 * It's also in charge or registering the available components, as well as the method that we expost to the global Coveo scope.<br/>
 * For example, the `Coveo.executeQuery` function will be registed in this class by the {@link QueryController}.
 */
var Initialization = /** @class */ (function () {
    function Initialization() {
    }
    /**
     * Register a new set of options for a given element.<br/>
     * When the element is eventually initialized as a component, those options will be used / merged to create the final option set to use for this component.<br/>
     * Note that this function should not normally be called directly, but instead using the global `Coveo.options` function
     * @param element
     * @param options
     */
    Initialization.registerDefaultOptions = function (element, options) {
        var existing = element['CoveoDefaultOptions'] || {};
        var updated = Utils_1.Utils.extendDeep(existing, options);
        element['CoveoDefaultOptions'] = updated;
    };
    Initialization.resolveDefaultOptions = function (element, options) {
        var optionsForThisElement = element['CoveoDefaultOptions'];
        var optionsSoFar;
        if (Utils_1.Utils.exists(optionsForThisElement)) {
            optionsSoFar = Utils_1.Utils.extendDeep(optionsForThisElement, options);
        }
        else {
            optionsSoFar = options;
        }
        if (element.parentElement) {
            return Initialization.resolveDefaultOptions(element.parentElement, optionsSoFar);
        }
        else {
            return optionsSoFar;
        }
    };
    /**
     * Register a new Component to be recognized by the framework.
     * This essentially mean that when we call `Coveo.init`, the Initialization class will scan the DOM for known component (which have registed themselves with this call) and create a new component on each element.
     *
     * This is meant to register the component to be loaded "eagerly" (Immediately available when the UI scripts are included)
     * @param componentClass
     */
    Initialization.registerAutoCreateComponent = function (componentClass) {
        Assert_1.Assert.exists(componentClass);
        Assert_1.Assert.exists(componentClass.ID);
        Assert_1.Assert.doesNotExists(Initialization.namedMethods[componentClass.ID]);
        if (!_.contains(Initialization.registeredComponents, componentClass.ID)) {
            Initialization.registeredComponents.push(componentClass.ID);
            if (componentClass.aliases) {
                Initialization.componentAliases[componentClass.ID] = componentClass.aliases;
            }
        }
        if (EagerInitialization.eagerlyLoadedComponents[componentClass.ID] == null) {
            EagerInitialization.eagerlyLoadedComponents[componentClass.ID] = componentClass;
        }
        if (LazyInitialization.lazyLoadedComponents[componentClass.ID] == null) {
            LazyInitialization.lazyLoadedComponents[componentClass.ID] = function () {
                return new Promise(function (resolve, reject) {
                    resolve(componentClass);
                });
            };
        }
    };
    /**
     * Set the fields that the component needs to add to the query.
     *
     * This is used when the {@link ResultList.options.autoSelectFieldsToInclude } is set to `true` (which is `true` by default).
     *
     * The framework tries to only include the needed fields from the index, for performance reasons.
     *
     * @param componentId The id for the component (eg: CoveoFacet)
     * @param fields
     */
    Initialization.registerComponentFields = function (componentId, fields) {
        Initialization.fieldsNeededForQuery = Utils_1.Utils.concatWithoutDuplicate(Initialization.fieldsNeededForQuery, fields);
        // Register with both name (eg : Facet and CoveoFacet) to reduce possible confusion.
        // The id concept for component is fuzzy for a lot of people (include the Coveo prefix or not)
        var registerById = function (id) {
            if (Initialization.fieldsNeededForQueryByComponent[id] == null) {
                Initialization.fieldsNeededForQueryByComponent[id] = fields;
            }
            else {
                Initialization.fieldsNeededForQueryByComponent[id] = Utils_1.Utils.concatWithoutDuplicate(Initialization.fieldsNeededForQueryByComponent[id], fields);
            }
        };
        registerById(componentId);
        registerById(Component_1.Component.computeCssClassNameForType(componentId));
    };
    /**
     * Returns all the fields that the framework currently knows should be added to the query.
     *
     * This is used when the {@link ResultList.options.autoSelectFieldsToInclude } is set to `true` (which is `true` by default).
     *
     * The framework tries to only include the needed fields from the index, for performance reasons.
     * @returns {string[]}
     */
    Initialization.getRegisteredFieldsForQuery = function () {
        return Initialization.fieldsNeededForQuery;
    };
    /**
     * Returns all the fields that the framework currently knows should be added to the query, for a given component.
     *
     * This is used when the {@link ResultList.options.autoSelectFieldsToInclude } is set to `true` (which is `true` by default).
     *
     * The framework tries to only include the needed fields from the index, for performance reasons.
     * @param componentId
     * @returns {string[]|Array}
     */
    Initialization.getRegisteredFieldsComponentForQuery = function (componentId) {
        var basicId = Initialization.fieldsNeededForQueryByComponent[componentId] || [];
        var coveoId = Initialization.fieldsNeededForQueryByComponent[Component_1.Component.computeCssClassNameForType(componentId)] || [];
        return Utils_1.Utils.concatWithoutDuplicate(basicId, coveoId);
    };
    /**
     * Check if a component is already registered, using it's ID (e.g. : 'Facet').
     * @param componentClassId
     * @returns {boolean}
     */
    Initialization.isComponentClassIdRegistered = function (componentClassId) {
        return (_.contains(Initialization.registeredComponents, componentClassId) ||
            _.contains(Initialization.registeredComponents, Component_1.Component.computeCssClassNameForType(componentClassId)));
    };
    /**
     * Return the list of all known components (the list of ID for each component), whether they are actually loaded or not.
     * @returns {string[]}
     */
    Initialization.getListOfRegisteredComponents = function () {
        return Initialization.registeredComponents;
    };
    /**
     * Return the list of all components that are currently eagerly loaded.
     * @returns {string[]}
     */
    Initialization.getListOfLoadedComponents = function () {
        return _.keys(EagerInitialization.eagerlyLoadedComponents);
    };
    /**
     * Return the component class definition, using it's ID (e.g. : 'CoveoFacet').
     *
     * This means the component needs to be eagerly loaded.
     *
     * @param name
     * @returns {IComponentDefinition}
     */
    Initialization.getRegisteredComponent = function (name) {
        return EagerInitialization.eagerlyLoadedComponents[name];
    };
    /**
     * Initialize the framework. Note that this function should not normally be called directly, but instead using a globally registered function (e.g.: Coveo.init), or {@link Initialization.initSearchInterface} or {@link Initialization.initStandaloneSearchInterface} <br/>
     * (e.g. : `Coveo.init` or `Coveo.initSearchbox`).
     * @param element The element on which to initialize the interface.
     * @param options The options for all components (eg: {Searchbox : {enableSearchAsYouType : true}}).
     * @param initSearchInterfaceFunction The function to execute to create the {@link SearchInterface} component. Different init call will create different {@link SearchInterface}.
     */
    Initialization.initializeFramework = function (element, options, initSearchInterfaceFunction) {
        Assert_1.Assert.exists(element);
        var alreadyInitialized = Component_1.Component.get(element, QueryController_1.QueryController, true);
        if (alreadyInitialized) {
            this.logger.error('This DOM element has already been initialized as a search interface, skipping initialization', element);
            return new Promise(function (resolve, reject) {
                resolve({ elem: element });
            });
        }
        options = Initialization.resolveDefaultOptions(element, options);
        Initialization.performInitFunctionsOption(options, InitializationEvents_1.InitializationEvents.beforeInitialization);
        Dom_1.$$(element).trigger(InitializationEvents_1.InitializationEvents.beforeInitialization);
        var toExecuteOnceSearchInterfaceIsInitialized = function () {
            return Initialization.initExternalComponents(element, options).then(function (result) {
                Initialization.performInitFunctionsOption(options, InitializationEvents_1.InitializationEvents.afterComponentsInitialization);
                Dom_1.$$(element).trigger(InitializationEvents_1.InitializationEvents.afterComponentsInitialization);
                Dom_1.$$(element).trigger(InitializationEvents_1.InitializationEvents.restoreHistoryState);
                Initialization.performInitFunctionsOption(options, InitializationEvents_1.InitializationEvents.afterInitialization);
                Dom_1.$$(element).trigger(InitializationEvents_1.InitializationEvents.afterInitialization);
                var searchInterface = Component_1.Component.get(element, SearchInterface_1.SearchInterface);
                if (Initialization.shouldExecuteFirstQueryAutomatically(searchInterface)) {
                    Initialization.logFirstQueryCause(searchInterface);
                    var shouldLogInActionHistory = true;
                    // We should not log an action history if the interface is a standalone recommendation component.
                    if (Coveo['Recommendation']) {
                        shouldLogInActionHistory = !(searchInterface instanceof Coveo['Recommendation']);
                    }
                    Component_1.Component.get(element, QueryController_1.QueryController).executeQuery({
                        logInActionsHistory: shouldLogInActionHistory,
                        isFirstQuery: true
                    });
                }
                return result;
            });
        };
        var resultOfSearchInterfaceInitialization = initSearchInterfaceFunction(element, options);
        // We are executing a "lazy" initialization, which returns a Promise
        // eg : CoveoJsSearch.Lazy.js was included in the page
        // this means that we can only execute the function after the promise has resolved
        if (resultOfSearchInterfaceInitialization.isLazyInit) {
            return resultOfSearchInterfaceInitialization.initResult.then(toExecuteOnceSearchInterfaceIsInitialized).then(function () {
                return {
                    elem: element
                };
            });
        }
        else {
            // Else, we are executing an "eager" initialization, which returns void;
            // eg : CoveoJsSearch.js was included in the page
            // this mean that this function gets executed immediately
            return toExecuteOnceSearchInterfaceIsInitialized().then(function () {
                return {
                    elem: element
                };
            });
        }
    };
    /**
     * Create a new standard search interface. This is the function executed when calling `Coveo.init`.
     * @param element
     * @param options
     * @returns {IInitResult}
     */
    Initialization.initSearchInterface = function (element, options) {
        if (options === void 0) { options = {}; }
        options = Initialization.resolveDefaultOptions(element, options);
        var searchInterface = new SearchInterface_1.SearchInterface(element, options.SearchInterface, options.Analytics);
        searchInterface.options.originalOptionsObject = options;
        var initParameters = { options: options, bindings: searchInterface.getBindings() };
        return Initialization.automaticallyCreateComponentsInside(element, initParameters, ['Recommendation']);
    };
    /**
     * Create a new standalone search interface (standalone search box). This is the function executed when calling `Coveo.initSearchbox`.
     * @param element
     * @param options
     * @returns {IInitResult}
     */
    Initialization.initStandaloneSearchInterface = function (element, options) {
        if (options === void 0) { options = {}; }
        options = Initialization.resolveDefaultOptions(element, options);
        // Set trigger query on clear to false for standalone search interface automatically
        // Take care of not overriding any options that could have been set by external code.
        if (!options.Querybox) {
            options.Querybox = {};
        }
        if (!options.Omnibox) {
            options.Omnibox = {};
        }
        if (!options.Searchbox) {
            options.Searchbox = {};
        }
        if (!options.Querybox.triggerQueryOnClear || !options.Omnibox.triggerQueryOnClear || !options.Searchbox.triggerOnQueryClear) {
            options.Querybox.triggerQueryOnClear = false;
            options.Omnibox.triggerQueryOnClear = false;
            options.Searchbox.triggerQueryOnClear = false;
        }
        var searchInterface = new SearchInterface_1.StandaloneSearchInterface(element, options.StandaloneSearchInterface, options.Analytics);
        searchInterface.options.originalOptionsObject = options;
        var initParameters = { options: options, bindings: searchInterface.getBindings() };
        return Initialization.automaticallyCreateComponentsInside(element, initParameters);
    };
    /**
     * Create a new recommendation search interface. This is the function executed when calling `Coveo.initRecommendation`.
     * @param element
     * @param options
     * @returns {IInitResult}
     */
    Initialization.initRecommendationInterface = function (element, options) {
        if (options === void 0) { options = {}; }
        options = Initialization.resolveDefaultOptions(element, options);
        // Since a recommendation interface inherits from a search interface, we need to merge those if passed on init
        var optionsForRecommendation = _.extend({}, options.SearchInterface, options.Recommendation);
        // If there is a main search interface, modify the loading animation for the recommendation interface to a "noop" element
        // We don't want 2 animation overlapping
        if (optionsForRecommendation.mainSearchInterface) {
            optionsForRecommendation.firstLoadingAnimation = Dom_1.$$('span').el;
        }
        var recommendation = new window['Coveo']['Recommendation'](element, optionsForRecommendation, options.Analytics);
        recommendation.options.originalOptionsObject = options;
        var initParameters = { options: options, bindings: recommendation.getBindings() };
        return Initialization.automaticallyCreateComponentsInside(element, initParameters);
    };
    /**
     * Scan the element and all its children for known components. Initialize every known component found.
     * @param element
     * @param initParameters
     * @param ignore
     * @returns {IInitResult}
     */
    Initialization.automaticallyCreateComponentsInside = function (element, initParameters, ignore) {
        var _this = this;
        if (ignore === void 0) { ignore = []; }
        Assert_1.Assert.exists(element);
        var htmlElementsToIgnore = InitializationHelper_1.InitializationHelper.findDOMElementsToIgnore(element, ignore);
        var htmlElementsToInitialize = InitializationHelper_1.InitializationHelper.findDOMElementsToInitialize(element, htmlElementsToIgnore);
        var isLazyInit;
        var constructorForEachComponentsInstance = _.chain(htmlElementsToInitialize)
            .map(function (htmlElementToInitialize) {
            var resultsOfFactory = _this.componentsFactory(htmlElementToInitialize.htmlElements, htmlElementToInitialize.componentClassId, initParameters);
            isLazyInit = resultsOfFactory.isLazyInit;
            return resultsOfFactory.factory;
        })
            .map(function (codeToExecute) {
            var codeResult = codeToExecute();
            if (codeResult) {
                return Promise.all(codeResult).then(function () { return true; });
            }
            return Promise.resolve(true);
        })
            .value();
        var initResult = Promise.all(constructorForEachComponentsInstance)
            .then(function () { return true; })
            .catch(function (e) {
            // We log the fatal error on init, but then we try to continue the initialization for the rest of the components.
            // In most case, this would be caused by a fatal error in a component constructor.
            // In some cases, it might be for a minor component not essential to basic function of the interface, meaning we could still salvage things here.
            _this.logger.error(e);
            _this.logger.warn("Skipping initialization of previous component in error ... ");
            return true;
        });
        return {
            initResult: initResult,
            isLazyInit: isLazyInit
        };
    };
    /**
     * Register a new globally available method in the Coveo namespace (e.g.: `Coveo.init`).
     * @param methodName The method name to register.
     * @param handler The function to execute when the method is called.
     */
    Initialization.registerNamedMethod = function (methodName, handler) {
        Assert_1.Assert.isNonEmptyString(methodName);
        Assert_1.Assert.doesNotExists(EagerInitialization.eagerlyLoadedComponents[methodName]);
        Assert_1.Assert.doesNotExists(Initialization.namedMethods[methodName]);
        Assert_1.Assert.exists(handler);
        Initialization.namedMethods[methodName] = handler;
    };
    /**
     * Check if the method is already registed.
     * @param methodName
     * @returns {boolean}
     */
    Initialization.isNamedMethodRegistered = function (methodName) {
        return Utils_1.Utils.exists(Initialization.namedMethods[methodName]);
    };
    /**
     * 'Monkey patch' (replace the function with a new one) a given method on a component instance.
     * @param methodName
     * @param element
     * @param handler
     */
    Initialization.monkeyPatchComponentMethod = function (methodName, element, handler) {
        Assert_1.Assert.isNonEmptyString(methodName);
        Assert_1.Assert.exists(handler);
        var componentClass;
        if (methodName.indexOf('.') > 0) {
            var splitArg = methodName.split('.');
            Assert_1.Assert.check(splitArg.length == 2, 'Invalid method name, correct syntax is CoveoComponent.methodName.');
            componentClass = splitArg[0];
            methodName = splitArg[1];
        }
        var boundComponent = Component_1.Component.get(element, componentClass);
        Assert_1.Assert.exists(boundComponent);
        Assert_1.Assert.exists(boundComponent[methodName]);
        var originalMethodName = '__' + methodName;
        if (!Utils_1.Utils.exists(boundComponent[originalMethodName])) {
            boundComponent[originalMethodName] = boundComponent[methodName];
        }
        boundComponent[methodName] = handler;
    };
    Initialization.initBoxInterface = function (element, options, type, injectMarkup) {
        if (options === void 0) { options = {}; }
        if (type === void 0) { type = 'Standard'; }
        if (injectMarkup === void 0) { injectMarkup = true; }
        options = Initialization.resolveDefaultOptions(element, options);
        var fromInitTypeToBoxReference = 'Box';
        if (type != 'Standard') {
            fromInitTypeToBoxReference += 'For' + type;
        }
        var boxRef = Component_1.Component.getComponentRef(fromInitTypeToBoxReference);
        if (boxRef) {
            new Logger_1.Logger(element).info('Initializing box of type ' + fromInitTypeToBoxReference);
            var injectFunction = injectMarkup ? boxRef.getInjection : function () { };
            var box = new boxRef(element, options[fromInitTypeToBoxReference], options.Analytics, injectFunction, options);
            box.options.originalOptionsObject = options;
            var initParameters = { options: options, bindings: box.getBindings() };
            return Initialization.automaticallyCreateComponentsInside(element, initParameters);
        }
        else {
            return {
                initResult: new Promise(function (resolve, reject) {
                    new Logger_1.Logger(element).error('Trying to initialize box of type : ' + fromInitTypeToBoxReference + ' but not found in code (not compiled)!');
                    Assert_1.Assert.fail('Cannot initialize unknown type of box');
                    reject(false);
                }),
                isLazyInit: false
            };
        }
    };
    Initialization.dispatchNamedMethodCall = function (methodName, element, args) {
        Assert_1.Assert.isNonEmptyString(methodName);
        Assert_1.Assert.exists(element);
        var namedMethodHandler = Initialization.namedMethods[methodName];
        Assert_1.Assert.exists(namedMethodHandler);
        Initialization.logger.trace('Dispatching named method call of ' + methodName, element, args);
        if (args.length != 0) {
            return namedMethodHandler.apply(null, [element].concat(args));
        }
        else {
            return namedMethodHandler.apply(null, [element]);
        }
    };
    Initialization.dispatchNamedMethodCallOrComponentCreation = function (token, element, args) {
        Assert_1.Assert.isNonEmptyString(token);
        Assert_1.Assert.exists(element);
        if (Initialization.isNamedMethodRegistered(token)) {
            return Initialization.dispatchNamedMethodCall(token, element, args);
        }
        else if (Initialization.isThereASingleComponentBoundToThisElement(element)) {
            return Initialization.dispatchMethodCallOnBoundComponent(token, element, args);
        }
        else {
            Assert_1.Assert.fail('No method or component named ' + token + ' are registered.');
        }
    };
    Initialization.isSearchFromLink = function (searchInterface) {
        return Utils_1.Utils.isNonEmptyString(searchInterface.getBindings().queryStateModel.get('q'));
    };
    Initialization.isThereASingleComponentBoundToThisElement = function (element) {
        Assert_1.Assert.exists(element);
        return Utils_1.Utils.exists(Component_1.Component.get(element, null, true));
    };
    Initialization.isThereANonSearchInterfaceComponentBoundToThisElement = function (element) {
        // We automatically consider "Recommendation" component to be a special case of search interface
        // and thus do not check those.
        if (Dom_1.$$(element).hasClass('CoveoRecommendation')) {
            return true;
        }
        return (Initialization.isThereASingleComponentBoundToThisElement(element) &&
            !RegisteredNamedMethods_1.get(element, SearchInterface_1.SearchInterface, true) &&
            !Dom_1.$$(element).hasClass('CoveoRecommendation'));
    };
    Initialization.dispatchMethodCallOnBoundComponent = function (methodName, element, args) {
        Assert_1.Assert.isNonEmptyString(methodName);
        Assert_1.Assert.exists(element);
        var boundComponent = Component_1.Component.get(element);
        Assert_1.Assert.exists(boundComponent);
        var method = boundComponent[methodName];
        if (Utils_1.Utils.exists(method)) {
            return method.apply(boundComponent, args);
        }
        else {
            Assert_1.Assert.fail('No method named ' + methodName + ' exist on component ' + boundComponent.type);
        }
    };
    Initialization.logFirstQueryCause = function (searchInterface) {
        var firstQueryCause = HashUtils_1.HashUtils.getValue('firstQueryCause', HashUtils_1.HashUtils.getHash());
        if (firstQueryCause != null) {
            var meta = HashUtils_1.HashUtils.getValue('firstQueryMeta', HashUtils_1.HashUtils.getHash()) || {};
            searchInterface.usageAnalytics.logSearchEvent(AnalyticsActionListMeta_1.analyticsActionCauseList[firstQueryCause], meta);
        }
        else {
            if (Initialization.isSearchFromLink(searchInterface)) {
                searchInterface.usageAnalytics.logSearchEvent(AnalyticsActionListMeta_1.analyticsActionCauseList.searchFromLink, {});
            }
            else {
                searchInterface.usageAnalytics.logSearchEvent(AnalyticsActionListMeta_1.analyticsActionCauseList.interfaceLoad, {});
            }
        }
    };
    Initialization.performInitFunctionsOption = function (options, event) {
        if (Utils_1.Utils.exists(options)) {
            Initialization.performFunctions(options[event]);
        }
    };
    Initialization.performFunctions = function (option) {
        if (Utils_1.Utils.exists(option)) {
            _.each(option, function (func) {
                if (typeof func == 'function') {
                    func();
                }
            });
        }
    };
    Initialization.initExternalComponents = function (element, options) {
        var _this = this;
        if (options && options['externalComponents']) {
            var searchInterface = Component_1.Component.get(element, SearchInterface_1.SearchInterface);
            var queryStateModel = Component_1.Component.get(element, QueryStateModel_1.QueryStateModel);
            var componentStateModel = Component_1.Component.get(element, ComponentStateModel_1.ComponentStateModel);
            var queryController = Component_1.Component.get(element, QueryController_1.QueryController);
            var componentOptionsModel = Component_1.Component.get(element, ComponentOptionsModel_1.ComponentOptionsModel);
            var usageAnalytics = searchInterface.usageAnalytics;
            Assert_1.Assert.exists(searchInterface);
            Assert_1.Assert.exists(queryStateModel);
            Assert_1.Assert.exists(queryController);
            Assert_1.Assert.exists(componentStateModel);
            Assert_1.Assert.exists(usageAnalytics);
            var initParameters_1 = {
                options: options,
                bindings: {
                    searchInterface: searchInterface,
                    queryStateModel: queryStateModel,
                    queryController: queryController,
                    usageAnalytics: usageAnalytics,
                    componentStateModel: componentStateModel,
                    componentOptionsModel: componentOptionsModel,
                    root: element
                }
            };
            var initializationOfExternalComponents = _.map(options['externalComponents'], function (externalComponent) {
                var elementToInstantiate = externalComponent;
                if (Utils_1.Utils.isHtmlElement(elementToInstantiate)) {
                    return Initialization.automaticallyCreateComponentsInside(elementToInstantiate, initParameters_1).initResult;
                }
                else if (JQueryutils_1.JQueryUtils.isInstanceOfJQuery(elementToInstantiate)) {
                    return Initialization.automaticallyCreateComponentsInside(elementToInstantiate.get(0), initParameters_1)
                        .initResult;
                }
            });
            return Promise.all(initializationOfExternalComponents)
                .then(function (results) { return _.first(results); })
                .catch(function (err) {
                _this.logger.error(err);
                return false;
            });
        }
        else {
            return Promise.resolve(false);
        }
    };
    Initialization.shouldExecuteFirstQueryAutomatically = function (searchInterface) {
        var options = searchInterface.options;
        if (!options) {
            return true;
        }
        if (options.autoTriggerQuery === false) {
            return false;
        }
        if (options.allowQueriesWithoutKeywords === true) {
            return true;
        }
        var currentStateOfQuery = RegisteredNamedMethods_1.state(searchInterface.element).get('q');
        return currentStateOfQuery != '';
    };
    Initialization.logger = new Logger_1.Logger('Initialization');
    Initialization.registeredComponents = [];
    Initialization.componentAliases = {};
    Initialization.namedMethods = {};
    // List of every fields that are needed by components when doing a query (the fieldsToInclude property in the query)
    // Since results components are lazy loaded after the first query (when doing the rendering) we need to register the needed fields before their implementation are loaded in the page.
    Initialization.fieldsNeededForQuery = [];
    // List of every fields that are needed by components when doing a query (the fieldsToInclude property in the query), linked to the component that needs them
    // It is a bit different from `fieldsNeededForQuery` because we can, in some scenarios, optimize to only get fields for components that are actually in the page
    Initialization.fieldsNeededForQueryByComponent = {};
    return Initialization;
}());
exports.Initialization = Initialization;
var LazyInitialization = /** @class */ (function () {
    function LazyInitialization() {
    }
    LazyInitialization.getLazyRegisteredComponent = function (name) {
        return LazyInitialization.lazyLoadedComponents[name]();
    };
    LazyInitialization.getLazyRegisteredModule = function (name) {
        return LazyInitialization.lazyLoadedModule[name]();
    };
    LazyInitialization.registerLazyComponent = function (id, load, aliases) {
        if (LazyInitialization.lazyLoadedComponents[id] == null) {
            Assert_1.Assert.exists(load);
            if (!_.contains(Initialization.registeredComponents, id)) {
                Initialization.registeredComponents.push(id);
            }
            LazyInitialization.lazyLoadedComponents[id] = load;
            if (aliases) {
                Initialization.componentAliases[id] = aliases;
            }
        }
        else {
            this.logger.warn('Component being registered twice', id);
        }
    };
    LazyInitialization.buildErrorCallback = function (chunkName, resolve) {
        return function (error) {
            LazyInitialization.logger
                .warn("Cannot load chunk for " + chunkName + ". You may need to add the coveo-script class on the script tag that includes the Coveo framework. More details here https://docs.coveo.com/en/295/javascript-search-framework/lazy-versus-eager-component-loading#fixing-code-chunks-loading-path-issues\n        " + error);
            resolve(function () { });
        };
    };
    LazyInitialization.registerLazyModule = function (id, load) {
        if (LazyInitialization.lazyLoadedModule[id] == null) {
            Assert_1.Assert.exists(load);
            LazyInitialization.lazyLoadedModule[id] = load;
        }
        else {
            this.logger.warn('Module being registered twice', id);
        }
    };
    LazyInitialization.componentsFactory = function (elements, componentClassId, initParameters) {
        var factory = function () {
            var promises = [];
            _.each(elements, function (matchingElement) {
                if (Component_1.Component.get(matchingElement, componentClassId) == null) {
                    // If options were provided, lookup options for this component class and
                    // also for the element id. Merge them and pass those to the factory method.
                    var optionsToUse = undefined;
                    if (Utils_1.Utils.exists(initParameters.options)) {
                        var optionsForComponentClass = initParameters.options[componentClassId];
                        var optionsForElementId = initParameters.options[matchingElement.id];
                        var initOptions = initParameters.options['initOptions'] ? initParameters.options['initOptions'][componentClassId] : {};
                        optionsToUse = Utils_1.Utils.extendDeep(optionsForElementId, initOptions);
                        optionsToUse = Utils_1.Utils.extendDeep(optionsForComponentClass, optionsToUse);
                    }
                    var initParamToUse = _.extend({}, initParameters, { options: optionsToUse });
                    promises.push(LazyInitialization.createComponentOfThisClassOnElement(componentClassId, matchingElement, initParamToUse));
                }
            });
            return promises;
        };
        return {
            factory: factory,
            isLazyInit: true
        };
    };
    LazyInitialization.createComponentOfThisClassOnElement = function (componentClassId, element, initParameters) {
        Assert_1.Assert.isNonEmptyString(componentClassId);
        Assert_1.Assert.exists(element);
        // If another component exist on that element, we do not want to re-initialize again.
        // The exception being the "SearchInterface", since in some case we want end user to initialize directly on the root of the interface
        // For example, when we are initializing a standalone search box, we might want to target the div for the search box directly.
        if (Initialization.isThereANonSearchInterfaceComponentBoundToThisElement(element)) {
            return null;
        }
        return LazyInitialization.getLazyRegisteredComponent(componentClassId).then(function (lazyLoadedComponent) {
            Assert_1.Assert.exists(lazyLoadedComponent);
            if (Initialization.isThereANonSearchInterfaceComponentBoundToThisElement(element)) {
                return null;
            }
            var bindings = {};
            var options = {};
            var result = undefined;
            if (initParameters != undefined) {
                _.each(initParameters.bindings, function (value, key) {
                    bindings[key] = value;
                });
                options = initParameters.options;
                result = initParameters.result;
            }
            LazyInitialization.logger.trace('Creating component of class ' + componentClassId, element, options);
            return new lazyLoadedComponent(element, options, bindings, result);
        });
    };
    LazyInitialization.logger = new Logger_1.Logger('LazyInitialization');
    // Map of every component to a promise that resolve with their implementation (lazily loaded)
    LazyInitialization.lazyLoadedComponents = {};
    LazyInitialization.lazyLoadedModule = {};
    return LazyInitialization;
}());
exports.LazyInitialization = LazyInitialization;
var EagerInitialization = /** @class */ (function () {
    function EagerInitialization() {
    }
    EagerInitialization.componentsFactory = function (elements, componentClassId, initParameters) {
        var factory = function () {
            _.each(elements, function (matchingElement) {
                if (Component_1.Component.get(matchingElement, componentClassId) == null) {
                    // If options were provided, lookup options for this component class and
                    // also for the element id. Merge them and pass those to the factory method.
                    var optionsToUse = undefined;
                    if (Utils_1.Utils.exists(initParameters.options)) {
                        var optionsForComponentClass = initParameters.options[componentClassId];
                        var optionsForElementId = initParameters.options[matchingElement.id];
                        var initOptions = initParameters.options['initOptions'] ? initParameters.options['initOptions'][componentClassId] : {};
                        optionsToUse = Utils_1.Utils.extendDeep(optionsForElementId, initOptions);
                        optionsToUse = Utils_1.Utils.extendDeep(optionsForComponentClass, optionsToUse);
                    }
                    var initParamToUse = _.extend({}, initParameters, { options: optionsToUse });
                    EagerInitialization.createComponentOfThisClassOnElement(componentClassId, matchingElement, initParamToUse);
                }
            });
        };
        return {
            factory: factory,
            isLazyInit: false
        };
    };
    EagerInitialization.createComponentOfThisClassOnElement = function (componentClassId, element, initParameters) {
        Assert_1.Assert.isNonEmptyString(componentClassId);
        Assert_1.Assert.exists(element);
        var eagerlyLoadedComponent = Initialization.getRegisteredComponent(componentClassId);
        var bindings = {};
        var options = {};
        var result = undefined;
        if (initParameters != undefined) {
            _.each(initParameters.bindings, function (value, key) {
                bindings[key] = value;
            });
            options = initParameters.options;
            result = initParameters.result;
        }
        // If another component exist on that element, we do not want to re-initialize again.
        // The exception being the "SearchInterface", since in some case we want end user to initialize directly on the root of the interface
        // For example, when we are initializing a standalone search box, we might want to target the div for the search box directly.
        if (Initialization.isThereANonSearchInterfaceComponentBoundToThisElement(element)) {
            return null;
        }
        EagerInitialization.logger.trace("Creating component of class " + componentClassId, element, options);
        // This is done so that external code that extends a base component does not have to have two code path for lazy vs eager;
        // If we do not find the eager component registered, we can instead try to load the one found in lazy mode.
        // If it still fails there... tough luck. The component simply won't work.
        if (eagerlyLoadedComponent == null) {
            LazyInitialization.getLazyRegisteredComponent(componentClassId)
                .then(function (lazyLoadedComponent) {
                EagerInitialization.logger.warn("Component of class " + componentClassId + " was not found in \"Eager\" mode. Using lazy mode as a fallback.");
                new lazyLoadedComponent(element, options, bindings, result);
            })
                .catch(function () {
                EagerInitialization.logger.error("Component of class " + componentClassId + " was not found in \"Eager\" mode nor \"Lazy\" mode. It will not be initialized properly...");
            });
            return null;
        }
        else {
            return new eagerlyLoadedComponent(element, options, bindings, result);
        }
    };
    EagerInitialization.logger = new Logger_1.Logger('EagerInitialization');
    // Map of every component with their implementation (eagerly loaded)
    EagerInitialization.eagerlyLoadedComponents = {};
    return EagerInitialization;
}());
exports.EagerInitialization = EagerInitialization;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Utils_1 = __webpack_require__(4);
var JQueryutils_1 = __webpack_require__(57);
var Assert_1 = __webpack_require__(5);
var Logger_1 = __webpack_require__(11);
var _ = __webpack_require__(0);
/**
 * This is essentially an helper class for dom manipulation.<br/>
 * This is intended to provide some basic functionality normally offered by jQuery.<br/>
 * To minimize the multiple jQuery conflict we have while integrating in various system, we implemented the very small subset that the framework needs.<br/>
 * See {@link $$}, which is a function that wraps this class constructor, for less verbose code.
 */
var Dom = /** @class */ (function () {
    /**
     * Create a new Dom object with the given HTMLElement
     * @param el The HTMLElement to wrap in a Dom object
     */
    function Dom(el) {
        Assert_1.Assert.exists(el);
        this.el = el;
    }
    /**
     * Helper function to quickly create an HTMLElement
     * @param type The type of the element (e.g. div, span)
     * @param props The props (id, className, attributes) of the element<br/>
     * Can be either specified in dashed-case strings ('my-attribute') or camelCased keys (myAttribute),
     * the latter of which will automatically get replaced to dash-case.
     * @param innerHTML The contents of the new HTMLElement, either in string form or as another HTMLElement
     */
    Dom.createElement = function (type, props) {
        var children = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            children[_i - 2] = arguments[_i];
        }
        var elem = document.createElement(type);
        for (var key in props) {
            if (key === 'className') {
                elem.className = props['className'];
            }
            else {
                var attr = key.indexOf('-') !== -1 ? key : Utils_1.Utils.toDashCase(key);
                elem.setAttribute(attr, props[key]);
            }
        }
        _.each(children, function (child) {
            if (child instanceof HTMLElement) {
                elem.appendChild(child);
            }
            else if (_.isString(child)) {
                elem.innerHTML += child;
            }
            else if (child instanceof Dom) {
                elem.appendChild(child.el);
            }
        });
        return elem;
    };
    /**
     * Adds the element to the children of the current element
     * @param element The element to append
     * @returns {string}
     */
    Dom.prototype.append = function (element) {
        this.el.appendChild(element);
    };
    /**
     * Get the css value of the specified property.<br/>
     * @param property The property
     * @returns {string}
     */
    Dom.prototype.css = function (property) {
        if (this.el.style[property]) {
            return this.el.style[property];
        }
        return window.getComputedStyle(this.el).getPropertyValue(property);
    };
    /**
     * Get or set the text content of the HTMLElement.<br/>
     * @param txt Optional. If given, this will set the text content of the element. If not, will return the text content.
     * @returns {string}
     */
    Dom.prototype.text = function (txt) {
        if (Utils_1.Utils.isUndefined(txt)) {
            return this.el.innerText || this.el.textContent;
        }
        else {
            if (this.el.innerText != undefined) {
                this.el.innerText = txt;
            }
            else if (this.el.textContent != undefined) {
                this.el.textContent = txt;
            }
        }
    };
    /**
     * Performant way to transform a NodeList to an array of HTMLElement, for manipulation<br/>
     * http://jsperf.com/nodelist-to-array/72
     * @param nodeList a {NodeList} to convert to an array
     * @returns {HTMLElement[]}
     */
    Dom.prototype.nodeListToArray = function (nodeList) {
        var i = nodeList.length;
        var arr = new Array(i);
        while (i--) {
            arr[i] = nodeList.item(i);
        }
        return arr;
    };
    /**
     * Empty (remove all child) from the element;
     */
    Dom.prototype.empty = function () {
        while (this.el.firstChild) {
            this.el.removeChild(this.el.firstChild);
        }
    };
    /**
     * Empty the element and all childs from the dom;
     */
    Dom.prototype.remove = function () {
        if (this.el.parentNode) {
            this.el.parentNode.removeChild(this.el);
        }
    };
    /**
     * Show the element;
     */
    Dom.prototype.show = function () {
        this.el.style.display = 'block';
    };
    /**
     * Hide the element;
     */
    Dom.prototype.hide = function () {
        this.el.style.display = 'none';
    };
    /**
     * Toggle the element visibility.<br/>
     * Optional visible parameter, if specified will set the element visibility
     * @param visible Optional parameter to display or hide the element
     */
    Dom.prototype.toggle = function (visible) {
        if (visible === undefined) {
            if (this.el.style.display == 'block') {
                this.hide();
            }
            else {
                this.show();
            }
        }
        else {
            if (visible) {
                this.show();
            }
            else {
                this.hide();
            }
        }
    };
    /**
     * Tries to determine if an element is "visible", in a generic manner.
     *
     * This is not meant to be a "foolproof" method, but only a superficial "best effort" detection is performed.
     */
    Dom.prototype.isVisible = function () {
        if (this.el.style.display == 'none') {
            return false;
        }
        if (this.el.style.visibility == 'hidden') {
            return false;
        }
        if (this.hasClass('coveo-tab-disabled')) {
            return false;
        }
        return true;
    };
    /**
     * Returns the value of the specified attribute.
     * @param name The name of the attribute
     */
    Dom.prototype.getAttribute = function (name) {
        return this.el.getAttribute(name);
    };
    /**
     * Sets the value of the specified attribute.
     * @param name The name of the attribute
     * @param value The value to set
     */
    Dom.prototype.setAttribute = function (name, value) {
        this.el.setAttribute(name, value);
    };
    /**
     * Find a child element, given a CSS selector
     * @param selector A CSS selector, can be a .className or #id
     * @returns {HTMLElement}
     */
    Dom.prototype.find = function (selector) {
        return this.el.querySelector(selector);
    };
    /**
     * Check if the element match the selector.<br/>
     * The selector can be a class, an id or a tag.<br/>
     * Eg : .is('.foo') or .is('#foo') or .is('div').
     */
    Dom.prototype.is = function (selector) {
        if (this.el.tagName.toLowerCase() == selector.toLowerCase()) {
            return true;
        }
        if (selector[0] == '.') {
            if (this.hasClass(selector.substr(1))) {
                return true;
            }
        }
        if (selector[0] == '#') {
            if (this.el.getAttribute('id') == selector.substr(1)) {
                return true;
            }
        }
        return false;
    };
    /**
     * Get the first element that matches the classname by testing the element itself and traversing up through its ancestors in the DOM tree.
     *
     * Stops at the body of the document
     * @param className A CSS classname
     */
    Dom.prototype.closest = function (className) {
        return this.traverseAncestorForClass(this.el, className);
    };
    /**
     * Get the first element that matches the classname by testing the element itself and traversing up through its ancestors in the DOM tree.
     *
     * Stops at the body of the document
     * @returns {any}
     */
    Dom.prototype.parent = function (className) {
        if (this.el.parentElement == undefined) {
            return undefined;
        }
        return this.traverseAncestorForClass(this.el.parentElement, className);
    };
    /**
     *  Get all the ancestors of the current element that match the given className
     *
     *  Return an empty array if none found.
     * @param className
     * @returns {HTMLElement[]}
     */
    Dom.prototype.parents = function (className) {
        var parentsFound = [];
        var parentFound = this.parent(className);
        while (parentFound) {
            parentsFound.push(parentFound);
            parentFound = new Dom(parentFound).parent(className);
        }
        return parentsFound;
    };
    /**
     * Return all children
     * @returns {HTMLElement[]}
     */
    Dom.prototype.children = function () {
        return this.nodeListToArray(this.el.children);
    };
    /**
     * Return all siblings
     * @returns {HTMLElement[]}
     */
    Dom.prototype.siblings = function (selector) {
        var sibs = [];
        var currentElement = this.el.parentNode.firstChild;
        for (; currentElement; currentElement = currentElement.nextSibling) {
            if (currentElement != this.el) {
                if (this.matches(currentElement, selector) || !selector) {
                    sibs.push(currentElement);
                }
            }
        }
        return sibs;
    };
    Dom.prototype.matches = function (element, selector) {
        var all = document.querySelectorAll(selector);
        for (var i = 0; i < all.length; i++) {
            if (all[i] === element) {
                return true;
            }
        }
        return false;
    };
    /**
     * Find all children that match the given CSS selector
     * @param selector A CSS selector, can be a .className
     * @returns {HTMLElement[]}
     */
    Dom.prototype.findAll = function (selector) {
        return this.nodeListToArray(this.el.querySelectorAll(selector));
    };
    /**
     * Find the child elements using a className
     * @param className Class of the childs elements to find
     * @returns {HTMLElement[]}
     */
    Dom.prototype.findClass = function (className) {
        if ('getElementsByClassName' in this.el) {
            return this.nodeListToArray(this.el.getElementsByClassName(className));
        }
    };
    /**
     * Find an element using an ID
     * @param id ID of the element to find
     * @returns {HTMLElement}
     */
    Dom.prototype.findId = function (id) {
        return document.getElementById(id);
    };
    Dom.prototype.addClass = function (className) {
        var _this = this;
        if (_.isArray(className)) {
            _.each(className, function (name) {
                _this.addClass(name);
            });
        }
        else {
            if (!this.hasClass(className)) {
                if (this.el.className) {
                    this.el.className += ' ' + className;
                }
                else {
                    this.el.className = className;
                }
            }
        }
    };
    /**
     * Remove the class on the element. Works even if the element does not possess the class.
     * @param className Classname to remove on the the element
     */
    Dom.prototype.removeClass = function (className) {
        this.el.className = this.el.className.replace(new RegExp("(^|\\s)" + className + "(\\s|$)", 'g'), '$1').trim();
    };
    /**
     * Toggle the class on the element.
     * @param className Classname to toggle
     * @param swtch If true, add the class regardless and if false, remove the class
     */
    Dom.prototype.toggleClass = function (className, swtch) {
        if (Utils_1.Utils.isNullOrUndefined(swtch)) {
            if (this.hasClass(className)) {
                this.removeClass(className);
            }
            else {
                this.addClass(className);
            }
        }
        else {
            if (swtch) {
                this.addClass(className);
            }
            else {
                this.removeClass(className);
            }
        }
    };
    /**
     * Sets the inner html of the element
     * @param html The html to set
     */
    Dom.prototype.setHtml = function (html) {
        this.el.innerHTML = html;
    };
    /**
     * Return an array with all the classname on the element. Empty array if the element has not classname
     * @returns {any|Array}
     */
    Dom.prototype.getClass = function () {
        // SVG elements got a className property, but it's not a string, it's an object
        var className = this.getAttribute('class');
        if (className && className.match) {
            return className.match(Dom.CLASS_NAME_REGEX) || [];
        }
        else {
            return [];
        }
    };
    /**
     * Check if the element has the given class name
     * @param className Classname to verify
     * @returns {boolean}
     */
    Dom.prototype.hasClass = function (className) {
        return _.contains(this.getClass(), className);
    };
    /**
     * Detach the element from the DOM.
     */
    Dom.prototype.detach = function () {
        this.el.parentElement && this.el.parentElement.removeChild(this.el);
    };
    /**
     * Insert the current node after the given reference node
     * @param refNode
     */
    Dom.prototype.insertAfter = function (refNode) {
        refNode.parentNode && refNode.parentNode.insertBefore(this.el, refNode.nextSibling);
    };
    /**
     * Insert the current node before the given reference node
     * @param refNode
     */
    Dom.prototype.insertBefore = function (refNode) {
        refNode.parentNode && refNode.parentNode.insertBefore(this.el, refNode);
    };
    /**
     * Insert the given node as the first child of the current node
     * @param toPrepend
     */
    Dom.prototype.prepend = function (toPrepend) {
        if (this.el.firstChild) {
            new Dom(toPrepend).insertBefore(this.el.firstChild);
        }
        else {
            this.el.appendChild(toPrepend);
        }
    };
    Dom.prototype.on = function (type, eventHandle) {
        var _this = this;
        if (_.isArray(type)) {
            _.each(type, function (t) {
                _this.on(t, eventHandle);
            });
        }
        else {
            var modifiedType = this.processEventTypeToBeJQueryCompatible(type);
            var jq = JQueryutils_1.JQueryUtils.getJQuery();
            if (jq) {
                jq(this.el).on(modifiedType, eventHandle);
            }
            else if (this.el.addEventListener) {
                var fn = function (e) {
                    eventHandle(e, e.detail);
                };
                Dom.handlers.push({
                    eventHandle: eventHandle,
                    fn: fn
                });
                this.el.addEventListener(modifiedType, fn, false);
            }
            else if (this.el['on']) {
                this.el['on']('on' + modifiedType, eventHandle);
            }
        }
    };
    Dom.prototype.one = function (type, eventHandle) {
        var _this = this;
        if (_.isArray(type)) {
            _.each(type, function (t) {
                _this.one(t, eventHandle);
            });
        }
        else {
            var modifiedType_1 = this.processEventTypeToBeJQueryCompatible(type);
            var once_1 = function (e, args) {
                _this.off(modifiedType_1, once_1);
                return eventHandle(e, args);
            };
            this.on(modifiedType_1, once_1);
        }
    };
    Dom.prototype.off = function (type, eventHandle) {
        var _this = this;
        if (_.isArray(type)) {
            _.each(type, function (t) {
                _this.off(t, eventHandle);
            });
        }
        else {
            var modifiedType = this.processEventTypeToBeJQueryCompatible(type);
            var jq = JQueryutils_1.JQueryUtils.getJQuery();
            if (jq) {
                jq(this.el).off(modifiedType, eventHandle);
            }
            else if (this.el.removeEventListener) {
                var idx_1 = 0;
                var found = _.find(Dom.handlers, function (handlerObj, i) {
                    if (handlerObj.eventHandle == eventHandle) {
                        idx_1 = i;
                        return true;
                    }
                });
                if (found) {
                    this.el.removeEventListener(modifiedType, found.fn, false);
                    Dom.handlers.splice(idx_1, 1);
                }
            }
            else if (this.el['off']) {
                this.el['off']('on' + modifiedType, eventHandle);
            }
        }
    };
    /**
     * Trigger an event on the element.
     * @param type The event type to trigger
     * @param data
     */
    Dom.prototype.trigger = function (type, data) {
        var modifiedType = this.processEventTypeToBeJQueryCompatible(type);
        var jq = JQueryutils_1.JQueryUtils.getJQuery();
        if (jq) {
            jq(this.el).trigger(modifiedType, data);
        }
        else if (CustomEvent !== undefined) {
            var event_1 = new CustomEvent(modifiedType, { detail: data, bubbles: true });
            this.el.dispatchEvent(event_1);
        }
        else {
            new Logger_1.Logger(this).error('CANNOT TRIGGER EVENT FOR OLDER BROWSER');
        }
    };
    /**
     * Check if the element is "empty" (has no innerHTML content). Whitespace is considered empty</br>
     * @returns {boolean}
     */
    Dom.prototype.isEmpty = function () {
        return Dom.ONLY_WHITE_SPACE_REGEX.test(this.el.innerHTML);
    };
    /**
     * Check if the element is a descendant of parent
     * @param other
     */
    Dom.prototype.isDescendant = function (parent) {
        var node = this.el.parentNode;
        while (node != null) {
            if (node == parent) {
                return true;
            }
            node = node.parentNode;
        }
        return false;
    };
    /**
     * Replace the current element with the other element, then detach the current element
     * @param otherElem
     */
    Dom.prototype.replaceWith = function (otherElem) {
        var parent = this.el.parentNode;
        if (parent) {
            new Dom(otherElem).insertAfter(this.el);
        }
        this.detach();
    };
    // based on http://api.jquery.com/position/
    /**
     * Return the position relative to the offset parent.
     */
    Dom.prototype.position = function () {
        var offsetParent = this.offsetParent();
        var offset = this.offset();
        var parentOffset = { top: 0, left: 0 };
        if (!$$(offsetParent).is('html')) {
            parentOffset = $$(offsetParent).offset();
        }
        var borderTopWidth = parseInt($$(offsetParent).css('borderTopWidth'));
        var borderLeftWidth = parseInt($$(offsetParent).css('borderLeftWidth'));
        borderTopWidth = isNaN(borderTopWidth) ? 0 : borderTopWidth;
        borderLeftWidth = isNaN(borderLeftWidth) ? 0 : borderLeftWidth;
        parentOffset = {
            top: parentOffset.top + borderTopWidth,
            left: parentOffset.left + borderLeftWidth
        };
        var marginTop = parseInt(this.css('marginTop'));
        var marginLeft = parseInt(this.css('marginLeft'));
        marginTop = isNaN(marginTop) ? 0 : marginTop;
        marginLeft = isNaN(marginLeft) ? 0 : marginLeft;
        return {
            top: offset.top - parentOffset.top - marginTop,
            left: offset.left - parentOffset.left - marginLeft
        };
    };
    // based on https://api.jquery.com/offsetParent/
    /**
     * Returns the offset parent. The offset parent is the closest parent that is positioned.
     * An element is positioned when its position property is not 'static', which is the default.
     */
    Dom.prototype.offsetParent = function () {
        var offsetParent = this.el.offsetParent;
        while (offsetParent instanceof HTMLElement && $$(offsetParent).css('position') === 'static') {
            // Will break out if it stumbles upon an non-HTMLElement and return documentElement
            offsetParent = offsetParent.offsetParent;
        }
        if (!(offsetParent instanceof HTMLElement)) {
            return document.documentElement;
        }
        return offsetParent;
    };
    // based on http://api.jquery.com/offset/
    /**
     * Return the position relative to the document.
     */
    Dom.prototype.offset = function () {
        // In <=IE11, calling getBoundingClientRect on a disconnected node throws an error
        if (!this.el.getClientRects().length) {
            return { top: 0, left: 0 };
        }
        var rect = this.el.getBoundingClientRect();
        if (rect.width || rect.height) {
            var doc = this.el.ownerDocument;
            var docElem = doc.documentElement;
            return {
                top: rect.top + window.pageYOffset - docElem.clientTop,
                left: rect.left + window.pageXOffset - docElem.clientLeft
            };
        }
        return rect;
    };
    /**
     * Returns the offset width of the element
     */
    Dom.prototype.width = function () {
        return this.el.offsetWidth;
    };
    /**
     * Returns the offset height of the element
     */
    Dom.prototype.height = function () {
        return this.el.offsetHeight;
    };
    /**
     * Clone the node
     * @param deep true if the children of the node should also be cloned, or false to clone only the specified node.
     * @returns {Dom}
     */
    Dom.prototype.clone = function (deep) {
        if (deep === void 0) { deep = false; }
        return $$(this.el.cloneNode(deep));
    };
    Dom.prototype.processEventTypeToBeJQueryCompatible = function (event) {
        // From https://api.jquery.com/on/
        // [...]
        // > In addition, the .trigger() method can trigger both standard browser event names and custom event names to call attached handlers. Event names should only contain alphanumerics, underscore, and colon characters.
        if (event) {
            return event.replace(/[^a-zA-Z0-9\:\_]/g, '');
        }
        return event;
    };
    Dom.prototype.traverseAncestorForClass = function (current, className) {
        if (current === void 0) { current = this.el; }
        if (className.indexOf('.') == 0) {
            className = className.substr(1);
        }
        var found = false;
        while (!found) {
            if ($$(current).hasClass(className)) {
                found = true;
            }
            if (current.tagName.toLowerCase() == 'body') {
                break;
            }
            if (current.parentElement == null) {
                break;
            }
            if (!found) {
                current = current.parentElement;
            }
        }
        if (found) {
            return current;
        }
        return undefined;
    };
    Dom.CLASS_NAME_REGEX = /-?[_a-zA-Z]+[_a-zA-Z0-9-]*/g;
    Dom.ONLY_WHITE_SPACE_REGEX = /^\s*$/;
    Dom.handlers = [];
    return Dom;
}());
exports.Dom = Dom;
var Win = /** @class */ (function () {
    function Win(win) {
        this.win = win;
    }
    Win.prototype.height = function () {
        return this.win.innerHeight;
    };
    Win.prototype.width = function () {
        return this.win.innerWidth;
    };
    Win.prototype.scrollY = function () {
        return this.supportPageOffset()
            ? this.win.pageYOffset
            : this.isCSS1Compat() ? this.win.document.documentElement.scrollTop : this.win.document.body.scrollTop;
    };
    Win.prototype.scrollX = function () {
        return this.supportPageOffset()
            ? window.pageXOffset
            : this.isCSS1Compat() ? document.documentElement.scrollLeft : document.body.scrollLeft;
    };
    Win.prototype.isCSS1Compat = function () {
        return (this.win.document.compatMode || '') === 'CSS1Compat';
    };
    Win.prototype.supportPageOffset = function () {
        return this.win.pageXOffset !== undefined;
    };
    return Win;
}());
exports.Win = Win;
var Doc = /** @class */ (function () {
    function Doc(doc) {
        this.doc = doc;
    }
    Doc.prototype.height = function () {
        var body = this.doc.body;
        return Math.max(body.scrollHeight, body.offsetHeight);
    };
    Doc.prototype.width = function () {
        var body = this.doc.body;
        return Math.max(body.scrollWidth, body.offsetWidth);
    };
    return Doc;
}());
exports.Doc = Doc;
function $$() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    if (args.length === 1 && args[0] instanceof Dom) {
        return args[0];
    }
    else if (args.length === 1 && !_.isString(args[0])) {
        return new Dom(args[0]);
    }
    else {
        return new Dom(Dom.createElement.apply(Dom, args));
    }
}
exports.$$ = $$;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _ = __webpack_require__(0);
var Logger_1 = __webpack_require__(11);
var Initialization_1 = __webpack_require__(1);
function exportGlobally(toExportGlobally) {
    if (window['Coveo'] == undefined) {
        window['Coveo'] = {};
    }
    _.each(_.keys(toExportGlobally), function (key) {
        if (window['Coveo'][key] == null) {
            window['Coveo'][key] = toExportGlobally[key];
        }
    });
}
exports.exportGlobally = exportGlobally;
function lazyExport(component, promiseResolve) {
    if (component.doExport) {
        component.doExport();
    }
    else {
        new Logger_1.Logger(this).error("Component " + component + " has no export function !");
    }
    Initialization_1.Initialization.registerAutoCreateComponent(component);
    promiseResolve(component);
}
exports.lazyExport = lazyExport;
function lazyExportModule(mod, promiseResolve) {
    if (mod.doExport) {
        mod.doExport();
    }
    promiseResolve(mod);
}
exports.lazyExportModule = lazyExportModule;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _ = __webpack_require__(0);
var isCoveoFieldRegex = /^@[a-zA-Z0-9_\.]+$/;
var Utils = /** @class */ (function () {
    function Utils() {
    }
    Utils.isUndefined = function (obj) {
        return typeof obj == 'undefined';
    };
    Utils.isNull = function (obj) {
        return obj === null;
    };
    Utils.isNullOrUndefined = function (obj) {
        return Utils.isUndefined(obj) || Utils.isNull(obj);
    };
    Utils.exists = function (obj) {
        return !Utils.isNullOrUndefined(obj);
    };
    Utils.toNotNullString = function (str) {
        return _.isString(str) ? str : '';
    };
    Utils.anyTypeToString = function (value) {
        return value ? value.toString() : '';
    };
    Utils.isNullOrEmptyString = function (str) {
        return Utils.isNullOrUndefined(str) || !Utils.isNonEmptyString(str);
    };
    Utils.isNonEmptyString = function (str) {
        return _.isString(str) && str !== '';
    };
    Utils.isEmptyString = function (str) {
        return !Utils.isNonEmptyString(str);
    };
    Utils.stringStartsWith = function (str, startWith) {
        return str.slice(0, startWith.length) == startWith;
    };
    Utils.isNonEmptyArray = function (obj) {
        return _.isArray(obj) && obj.length > 0;
    };
    Utils.isEmptyArray = function (obj) {
        return !Utils.isNonEmptyArray(obj);
    };
    Utils.isHtmlElement = function (obj) {
        if (window['HTMLElement'] != undefined) {
            return obj instanceof HTMLElement;
        }
        else {
            // IE 8 FIX
            return obj && obj.nodeType && obj.nodeType == 1;
        }
    };
    Utils.parseIntIfNotUndefined = function (str) {
        if (Utils.isNonEmptyString(str)) {
            return parseInt(str, 10);
        }
        else {
            return undefined;
        }
    };
    Utils.parseFloatIfNotUndefined = function (str) {
        var a = 't';
        a instanceof HTMLDocument;
        if (Utils.isNonEmptyString(str)) {
            return parseFloat(str);
        }
        else {
            return undefined;
        }
    };
    Utils.round = function (num, decimals) {
        return Math.round(num * Math.pow(10, decimals)) / Math.pow(10, decimals);
    };
    Utils.parseBooleanIfNotUndefined = function (str) {
        if (Utils.isNonEmptyString(str)) {
            switch (str.toLowerCase()) {
                case 'true':
                case '1':
                case 'yes':
                    return true;
                case 'false':
                case '0':
                case 'no':
                    return false;
                default:
                    return undefined;
            }
        }
        else {
            return undefined;
        }
    };
    Utils.trim = function (value) {
        if (value == null) {
            return null;
        }
        return value.replace(/^\s+|\s+$/g, '');
    };
    Utils.encodeHTMLEntities = function (rawStr) {
        var ret = [];
        for (var i = rawStr.length - 1; i >= 0; i--) {
            if (/^[a-z0-9]/i.test(rawStr[i])) {
                ret.unshift(rawStr[i]);
            }
            else {
                ret.unshift(['&#', rawStr.charCodeAt(i), ';'].join(''));
            }
        }
        return ret.join('');
    };
    Utils.decodeHTMLEntities = function (rawString) {
        return rawString.replace(/&#(\d+);/g, function (match, dec) {
            return String.fromCharCode(dec);
        });
    };
    Utils.safeEncodeURIComponent = function (rawString) {
        // yiiip...
        // Explanation : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent
        // Solution : https://stackoverflow.com/a/17109094
        // Basically some unicode character (low-high surrogate) will throw an "invalid malformed URI" error when being encoded as an URI component, and the pair of character is incomplete.
        // This simply removes those pesky characters
        if (_.isString(rawString)) {
            return encodeURIComponent(rawString
                .replace(/[\uD800-\uDBFF](?![\uDC00-\uDFFF])/g, '')
                .split('')
                .reverse()
                .join('')
                .replace(/[\uDC00-\uDFFF](?![\uD800-\uDBFF])/g, '')
                .split('')
                .reverse()
                .join(''));
        }
        else {
            // If the passed value is not a string, we probably don't want to do anything here...
            // The base browser function should be resilient enough
            return encodeURIComponent(rawString);
        }
    };
    Utils.arrayEqual = function (array1, array2, sameOrder) {
        if (sameOrder === void 0) { sameOrder = true; }
        if (sameOrder) {
            return _.isEqual(array1, array2);
        }
        else {
            var arrays_1 = [array1, array2];
            return _.all(arrays_1, function (array) {
                return array.length == arrays_1[0].length && _.difference(array, arrays_1[0]).length == 0;
            });
        }
    };
    Utils.objectEqual = function (obj1, obj2) {
        return _.isEqual(obj1, obj2);
    };
    Utils.isCoveoField = function (field) {
        return isCoveoFieldRegex.test(field);
    };
    Utils.escapeRegexCharacter = function (str) {
        var ret = str.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
        return ret;
    };
    Utils.getCaseInsensitiveProperty = function (object, name) {
        // First try using a fast case-sensitive lookup
        var value = object[name];
        // Then try a fast case-sensitive lookup with lowercase name
        if (value == null) {
            var lowerCaseName_1 = name.toLowerCase();
            value = object[lowerCaseName_1];
            // Then try a slow scanning of all the properties
            if (value == null) {
                var matchingKey = _.find(_.keys(object), function (key) { return key.toLowerCase() == lowerCaseName_1; });
                if (matchingKey != null) {
                    value = object[matchingKey];
                }
            }
        }
        return value;
    };
    Utils.getFieldValue = function (result, name) {
        // Be as forgiving as possible about the field name, since we expect
        // user provided values.
        if (name == null) {
            return undefined;
        }
        name = Utils.trim(name);
        if (name[0] == '@') {
            name = name.substr(1);
        }
        if (name == '') {
            return undefined;
        }
        // At this point the name should be well formed
        if (!Utils.isCoveoField('@' + name)) {
            throw "Not a valid field : " + name;
        }
        // Handle namespace field values of the form sf.Foo.Bar
        var parts = name.split('.').reverse();
        var obj = result.raw;
        while (parts.length > 1) {
            obj = Utils.getCaseInsensitiveProperty(obj, parts.pop());
            if (Utils.isUndefined(obj)) {
                return undefined;
            }
        }
        var value = Utils.getCaseInsensitiveProperty(obj, parts[0]);
        // If still nothing, look at the root of the result
        if (value == null) {
            value = Utils.getCaseInsensitiveProperty(result, name);
        }
        return value;
    };
    Utils.throttle = function (func, wait, options, context, args) {
        if (options === void 0) { options = {}; }
        var result;
        var timeout = null;
        var previous = 0;
        var later = function () {
            previous = options.leading === false ? 0 : new Date().getTime();
            timeout = null;
            result = func.apply(context, args);
        };
        return function () {
            var now = new Date().getTime();
            if (!previous && options.leading === false) {
                previous = now;
            }
            var remaining = wait - (now - previous);
            context = this;
            args = arguments;
            if (remaining <= 0) {
                clearTimeout(timeout);
                timeout = null;
                previous = now;
                result = func.apply(context, args);
            }
            else if (!timeout && options.trailing !== false) {
                timeout = window.setTimeout(later, remaining);
            }
            return result;
        };
    };
    Utils.extendDeep = function (target, src) {
        if (!target) {
            target = {};
        }
        var isArray = _.isArray(src);
        var toReturn = (isArray && []) || {};
        if (isArray) {
            target = target || [];
            toReturn = toReturn['concat'](target);
            _.each(src, function (e, i, obj) {
                if (typeof target[i] === 'undefined') {
                    toReturn[i] = e;
                }
                else if (typeof e === 'object' && !_.isElement(e)) {
                    toReturn[i] = Utils.extendDeep(target[i], e);
                }
                else {
                    if (target.indexOf(e) === -1) {
                        toReturn['push'](e);
                    }
                }
            });
        }
        else {
            if (target && typeof target === 'object' && !_.isElement(target)) {
                _.each(_.keys(target), function (key) {
                    toReturn[key] = target[key];
                });
            }
            _.each(_.keys(src), function (key) {
                if (typeof src[key] !== 'object' || !src[key]) {
                    toReturn[key] = src[key];
                }
                else {
                    if (!target[key]) {
                        toReturn[key] = src[key];
                    }
                    else {
                        toReturn[key] = Utils.extendDeep(target[key], src[key]);
                    }
                }
            });
        }
        return toReturn;
    };
    Utils.getQueryStringValue = function (key, queryString) {
        if (queryString === void 0) { queryString = window.location.search; }
        return queryString.replace(new RegExp('^(?:.*[&\\?]' + key.replace(/[\.\+\*]/g, '\\$&') + '(?:\\=([^&]*))?)?.*$', 'i'), '$1');
    };
    Utils.isValidUrl = function (str) {
        var regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
        return regexp.test(str);
    };
    Utils.debounce = function (func, wait) {
        var timeout;
        var stackTraceTimeout;
        return function () {
            var _this = this;
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (timeout == null) {
                timeout = window.setTimeout(function () {
                    timeout = null;
                }, wait);
                stackTraceTimeout = setTimeout(function () {
                    func.apply(_this, args);
                    stackTraceTimeout = null;
                });
            }
            else if (stackTraceTimeout == null) {
                clearTimeout(timeout);
                timeout = window.setTimeout(function () {
                    func.apply(_this, args);
                    timeout = null;
                }, wait);
            }
        };
    };
    Utils.readCookie = function (name) {
        var nameEQ = name + '=';
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1, c.length);
            }
            if (c.indexOf(nameEQ) == 0) {
                return c.substring(nameEQ.length, c.length);
            }
        }
        return null;
    };
    Utils.toDashCase = function (camelCased) {
        return camelCased.replace(/([a-z][A-Z])/g, function (g) { return g[0] + '-' + g[1].toLowerCase(); });
    };
    Utils.toCamelCase = function (dashCased) {
        return dashCased.replace(/-([a-z])/g, function (g) { return g[1].toUpperCase(); });
    };
    // Based on http://stackoverflow.com/a/8412989
    Utils.parseXml = function (xml) {
        if (typeof DOMParser != 'undefined') {
            return new DOMParser().parseFromString(xml, 'text/xml');
        }
        else if (typeof ActiveXObject != 'undefined' && new ActiveXObject('Microsoft.XMLDOM')) {
            var xmlDoc = new ActiveXObject('Microsoft.XMLDOM');
            xmlDoc.async = 'false';
            xmlDoc.loadXML(xml);
            return xmlDoc;
        }
        else {
            throw new Error('No XML parser found');
        }
    };
    Utils.copyObject = function (target, src) {
        var _this = this;
        _.each(_.keys(src), function (key) {
            if (typeof src[key] !== 'object' || !src[key]) {
                target[key] = src[key];
            }
            else if (!target[key]) {
                target[key] = src[key];
            }
            else {
                _this.copyObject(target[key], src[key]);
            }
        });
    };
    Utils.copyObjectAttributes = function (target, src, attributes) {
        var _this = this;
        _.each(_.keys(src), function (key) {
            if (_.contains(attributes, key)) {
                if (typeof src[key] !== 'object' || !src[key]) {
                    target[key] = src[key];
                }
                else if (!target[key]) {
                    target[key] = src[key];
                }
                else {
                    _this.copyObject(target[key], src[key]);
                }
            }
        });
    };
    Utils.concatWithoutDuplicate = function (firstArray, secondArray) {
        var diff = _.difference(secondArray, firstArray);
        if (diff && diff.length > 0) {
            firstArray = firstArray.concat(diff);
        }
        return firstArray;
    };
    Utils.differenceBetweenObjects = function (firstObject, secondObject) {
        var difference = {};
        var addDiff = function (first, second) {
            for (var key in first) {
                if (first[key] !== second[key] && difference[key] == null) {
                    difference[key] = first[key];
                }
            }
        };
        addDiff(firstObject, secondObject);
        addDiff(secondObject, firstObject);
        return difference;
    };
    return Utils;
}());
exports.Utils = Utils;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Logger_1 = __webpack_require__(11);
var Utils_1 = __webpack_require__(4);
var _ = __webpack_require__(0);
var Assert = /** @class */ (function () {
    function Assert() {
    }
    Assert.fail = function (message) {
        Assert.failureHandler(message);
    };
    Assert.check = function (condition, message) {
        if (!condition) {
            Assert.fail(message);
        }
    };
    Assert.isUndefined = function (obj) {
        Assert.check(Utils_1.Utils.isUndefined(obj), 'Value should be undefined.');
    };
    Assert.isNotUndefined = function (obj) {
        Assert.check(!Utils_1.Utils.isUndefined(obj), 'Value should not be undefined.');
    };
    Assert.isNull = function (obj) {
        Assert.check(Utils_1.Utils.isNull(obj), 'Value should be null.');
    };
    Assert.isNotNull = function (obj) {
        Assert.check(!Utils_1.Utils.isNull(obj), 'Value should not be null.');
    };
    Assert.exists = function (obj) {
        Assert.check(!Utils_1.Utils.isNullOrUndefined(obj), 'Value should not be null or undefined');
    };
    Assert.doesNotExists = function (obj) {
        Assert.check(Utils_1.Utils.isNullOrUndefined(obj), 'Value should be null or undefined');
    };
    Assert.isString = function (obj) {
        Assert.check(_.isString(obj), 'Value should be a string.');
    };
    Assert.stringStartsWith = function (str, start) {
        Assert.isNonEmptyString(str);
        Assert.isNonEmptyString(start);
        Assert.check(str.indexOf(start) == 0, 'Value should start with ' + start);
    };
    Assert.isNonEmptyString = function (str) {
        Assert.check(Utils_1.Utils.isNonEmptyString(str), 'Value should be a non-empty string.');
    };
    Assert.isNumber = function (obj) {
        Assert.check(_.isNumber(obj), 'Value should be a number.');
    };
    Assert.isLargerThan = function (expected, actual) {
        Assert.check(actual > expected, 'Value ' + actual + ' should be larger than ' + expected);
    };
    Assert.isLargerOrEqualsThan = function (expected, actual) {
        Assert.check(actual >= expected, 'Value ' + actual + ' should be larger or equal than ' + expected);
    };
    Assert.isSmallerThan = function (expected, actual) {
        Assert.check(actual < expected, 'Value ' + actual + ' should be smaller than ' + expected);
    };
    Assert.isSmallerOrEqualsThan = function (expected, actual) {
        Assert.check(actual <= expected, 'Value ' + actual + ' should be smaller or equal than ' + expected);
    };
    Assert.logger = new Logger_1.Logger('Assert');
    Assert.failureHandler = function (message) {
        Assert.logger.error('Assertion Failed!', message);
        if (window['console'] && console.trace) {
            console.trace();
        }
        if (Utils_1.Utils.isNonEmptyString(message)) {
            throw new PreconditionFailedException(message);
        }
        else {
            throw new PreconditionFailedException('Assertion Failed!');
        }
    };
    return Assert;
}());
exports.Assert = Assert;
var PreconditionFailedException = /** @class */ (function (_super) {
    __extends(PreconditionFailedException, _super);
    function PreconditionFailedException(message) {
        var _this = _super.call(this, message) || this;
        _this.message = message;
        return _this;
    }
    PreconditionFailedException.prototype.toString = function () {
        return this.message;
    };
    return PreconditionFailedException;
}(Error));
exports.PreconditionFailedException = PreconditionFailedException;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Assert_1 = __webpack_require__(5);
var Utils_1 = __webpack_require__(4);
var JQueryutils_1 = __webpack_require__(57);
var Dom_1 = __webpack_require__(2);
var QueryStateModel_1 = __webpack_require__(12);
var ComponentStateModel_1 = __webpack_require__(59);
var ComponentOptionsModel_1 = __webpack_require__(24);
var QueryController_1 = __webpack_require__(33);
var SearchInterface_1 = __webpack_require__(17);
var NoopAnalyticsClient_1 = __webpack_require__(72);
var BaseComponent_1 = __webpack_require__(27);
var DebugEvents_1 = __webpack_require__(70);
var _ = __webpack_require__(0);
/**
 * The base class for every component in the framework.
 */
var Component = /** @class */ (function (_super) {
    __extends(Component, _super);
    /**
     * Create a new Component. Resolve all {@link IComponentBindings} if not provided.<br/>
     * Create a new Logger for this component.
     * Attach the component to the {@link SearchInterface}.<br/>
     * @param element The HTMLElement on which to create the component. Used to bind data on the element.
     * @param type The unique identifier for this component. See : {@link IComponentDefinition.ID}. Used to generate the unique Coveo CSS class associated with every component.
     * @param bindings The environment for every component. Optional, but omitting to provide one will impact performance.
     */
    function Component(element, type, bindings) {
        if (bindings === void 0) { bindings = {}; }
        var _this = _super.call(this, element, type) || this;
        _this.element = element;
        _this.type = type;
        /**
         * Allows the component to bind events and execute them only when it is enabled.
         * @type {Coveo.ComponentEvents}
         */
        _this.bind = new ComponentEvents(_this);
        _this.root = bindings.root || _this.resolveRoot();
        _this.queryStateModel = bindings.queryStateModel || _this.resolveQueryStateModel();
        _this.componentStateModel = bindings.componentStateModel || _this.resolveComponentStateModel();
        _this.queryController = bindings.queryController || _this.resolveQueryController();
        _this.searchInterface = bindings.searchInterface || _this.resolveSearchInterface();
        _this.usageAnalytics = bindings.usageAnalytics || _this.resolveUA();
        _this.componentOptionsModel = bindings.componentOptionsModel || _this.resolveComponentOptionsModel();
        _this.ensureDom = _.once(function () { return _this.createDom(); });
        if (_this.searchInterface != null) {
            _this.searchInterface.attachComponent(type, _this);
        }
        _this.initDebugInfo();
        return _this;
    }
    /**
     * Return the bindings, or environment, for the current component.
     * @returns {IComponentBindings}
     */
    Component.prototype.getBindings = function () {
        return {
            root: this.root,
            queryStateModel: this.queryStateModel,
            queryController: this.queryController,
            searchInterface: this.searchInterface,
            componentStateModel: this.componentStateModel,
            componentOptionsModel: this.componentOptionsModel,
            usageAnalytics: this.usageAnalytics
        };
    };
    Component.prototype.createDom = function () {
        // By default we do nothing
    };
    Component.prototype.resolveSearchInterface = function () {
        return Component.resolveBinding(this.element, SearchInterface_1.SearchInterface);
    };
    Component.prototype.resolveRoot = function () {
        var resolvedSearchInterface = Component.resolveBinding(this.element, SearchInterface_1.SearchInterface);
        return resolvedSearchInterface ? resolvedSearchInterface.element : undefined;
    };
    Component.prototype.resolveQueryController = function () {
        return Component.resolveBinding(this.element, QueryController_1.QueryController);
    };
    Component.prototype.resolveComponentStateModel = function () {
        return Component.resolveBinding(this.element, ComponentStateModel_1.ComponentStateModel);
    };
    Component.prototype.resolveQueryStateModel = function () {
        return Component.resolveBinding(this.element, QueryStateModel_1.QueryStateModel);
    };
    Component.prototype.resolveComponentOptionsModel = function () {
        return Component.resolveBinding(this.element, ComponentOptionsModel_1.ComponentOptionsModel);
    };
    Component.prototype.resolveUA = function () {
        var searchInterface = this.resolveSearchInterface();
        return searchInterface && searchInterface.usageAnalytics ? searchInterface.usageAnalytics : new NoopAnalyticsClient_1.NoopAnalyticsClient();
    };
    Component.prototype.resolveResult = function () {
        return Component.getResult(this.element);
    };
    Component.prototype.initDebugInfo = function () {
        var _this = this;
        Dom_1.$$(this.element).on('dblclick', function (e) {
            if (e.altKey) {
                var debugInfo = _this.debugInfo();
                if (debugInfo != null) {
                    Dom_1.$$(_this.root).trigger(DebugEvents_1.DebugEvents.showDebugPanel, _this.debugInfo());
                }
            }
        });
    };
    /**
     * Get the bound component to the given HTMLElement. Throws an assert if the HTMLElement has no component bound, unless using the noThrow argument.<br/>
     * If there is multiple component bound to the current HTMLElement, you must specify the component class.
     * @param element HTMLElement for which to get the bound component.
     * @param componentClass Optional component class. If the HTMLElement has multiple components bound, you must specify which one you are targeting.
     * @param noThrow Boolean option to tell the method to not throw on error.
     * @returns {Component}
     */
    Component.get = function (element, componentClass, noThrow) {
        Assert_1.Assert.exists(element);
        if (_.isString(componentClass)) {
            return element[Component.computeCssClassNameForType(componentClass)];
        }
        else if (Utils_1.Utils.exists(componentClass)) {
            Assert_1.Assert.exists(componentClass.ID);
            return element[Component.computeCssClassNameForType(componentClass.ID)];
        }
        else {
            // No class specified, but we support returning the bound component
            // if there is exactly one.
            var boundComponents = BaseComponent_1.BaseComponent.getBoundComponentsForElement(element);
            if (!noThrow) {
                Assert_1.Assert.check(boundComponents.length <= 1, 'More than one component is bound to this element. You need to specify the component type.');
            }
            return boundComponents[0];
        }
    };
    Component.getResult = function (element, noThrow) {
        if (noThrow === void 0) { noThrow = false; }
        var resultElement = Dom_1.$$(element).closest('.CoveoResult');
        Assert_1.Assert.check(noThrow || resultElement != undefined);
        return resultElement['CoveoResult'];
    };
    Component.bindResultToElement = function (element, result) {
        Assert_1.Assert.exists(element);
        Assert_1.Assert.exists(result);
        Dom_1.$$(element).addClass('CoveoResult');
        element['CoveoResult'] = result;
        var jQuery = JQueryutils_1.JQueryUtils.getJQuery();
        if (jQuery) {
            jQuery(element).data(result);
        }
    };
    Component.resolveBinding = function (element, componentClass) {
        Assert_1.Assert.exists(element);
        Assert_1.Assert.exists(componentClass);
        Assert_1.Assert.exists(componentClass.ID);
        var targetClassName = Component.computeCssClassNameForType(componentClass.ID);
        var found;
        if (Dom_1.$$(element).is('.' + targetClassName)) {
            found = element;
        }
        else {
            // first, look down
            var findDown = Dom_1.$$(element).findClass(targetClassName);
            if (findDown && findDown.length !== 0) {
                found = findDown[0];
            }
            else {
                var findUp = Dom_1.$$(element).closest(targetClassName);
                if (findUp) {
                    found = findUp;
                }
            }
        }
        if (found) {
            return found[targetClassName];
        }
        else {
            return undefined;
        }
    };
    Component.pointElementsToDummyForm = function (element) {
        var inputs = Dom_1.$$(element).is('input') ? [element] : [];
        inputs = inputs.concat(Dom_1.$$(element).findAll('input'));
        _.each(_.compact(inputs), function (input) {
            input.setAttribute('form', 'coveo-dummy-form');
        });
    };
    return Component;
}(BaseComponent_1.BaseComponent));
exports.Component = Component;
/**
 * The `ComponentEvents` class is used by the various Coveo Component to trigger events and bind event handlers. It adds
 * logic to execute handlers or triggers only when a component is "enabled", which serves as a way to avoid executing
 * handlers on components that are invisible and inactive in the query.
 *
 * Typically, a component is disabled when it is not active in the current [`Tab`]{@link Tab}. It can also be disabled
 * by external code, however.
 *
 * To manually enable or disable a component, simply use its [`enable`]{@link Component.enable} or
 * [`disable`]{@link Component.disable} method.
 */
var ComponentEvents = /** @class */ (function () {
    /**
     * Creates a new `ComponentEvents` instance for a [`Component`]{@link Component}.
     * @param owner The [`Component`]{@link Component} that owns the event handlers and triggers.
     */
    function ComponentEvents(owner) {
        this.owner = owner;
        Assert_1.Assert.exists(owner);
    }
    ComponentEvents.prototype.on = function (arg, event, handler) {
        if (!JQueryutils_1.JQueryUtils.getJQuery() || !JQueryutils_1.JQueryUtils.isInstanceOfJQuery(arg)) {
            var htmlEl = arg;
            Dom_1.$$(htmlEl).on(event, this.wrapToCallIfEnabled(handler));
        }
        else {
            var jq = arg;
            jq.on(event, this.wrapToCallIfEnabled(handler));
        }
    };
    ComponentEvents.prototype.one = function (arg, event, handler) {
        if (arg instanceof HTMLElement) {
            var htmlEl = arg;
            Dom_1.$$(htmlEl).one(event, this.wrapToCallIfEnabled(handler));
        }
        else {
            var jq = arg;
            jq.one(event, this.wrapToCallIfEnabled(handler));
        }
    };
    /**
     * Bind on the "root" of the Component. The root is typically the {@link SearchInterface}.<br/>
     * Bind an event using native javascript code.
     * @param event The event for which to register an handler.
     * @param handler The function to execute when the event is triggered.
     */
    ComponentEvents.prototype.onRootElement = function (event, handler) {
        this.on(this.owner.root, event, handler);
    };
    /**
     * Bind on the "root" of the Component. The root is typically the {@link SearchInterface}.<br/>
     * Bind an event using native javascript code.
     * The handler will execute only ONE time.
     * @param event The event for which to register an handler.
     * @param handler The function to execute when the event is triggered.
     */
    ComponentEvents.prototype.oneRootElement = function (event, handler) {
        this.one(this.owner.root, event, handler);
    };
    /**
     * Bind an event related specially to the query state model.<br/>
     * This will build the correct string event and execute the handler only if the component is activated.
     * @param eventType The event type for which to register an event.
     * @param attribute The attribute for which to register an event.
     * @param handler The handler to execute when the query state event is triggered.
     */
    ComponentEvents.prototype.onQueryState = function (eventType, attribute, handler) {
        this.onRootElement(this.getQueryStateEventName(eventType, attribute), handler);
    };
    /**
     * Bind an event related specially to the component option model.
     * This will build the correct string event and execute the handler only if the component is activated.
     * @param eventType The event type for which to register an event.
     * @param attribute The attribute for which to register an event.
     * @param handler The handler to execute when the query state event is triggered.
     */
    ComponentEvents.prototype.onComponentOptions = function (eventType, attribute, handler) {
        this.onRootElement(this.getComponentOptionEventName(eventType, attribute), handler);
    };
    /**
     * Bind an event related specially to the query state model.<br/>
     * This will build the correct string event and execute the handler only if the component is activated.<br/>
     * Will execute only once.
     * @param eventType The event type for which to register an event.
     * @param attribute The attribute for which to register an event.
     * @param handler The handler to execute when the query state event is triggered.
     */
    ComponentEvents.prototype.oneQueryState = function (eventType, attribute, handler) {
        this.oneRootElement(this.getQueryStateEventName(eventType, attribute), handler);
    };
    ComponentEvents.prototype.trigger = function (arg, event, args) {
        this.wrapToCallIfEnabled(function () {
            if (arg instanceof HTMLElement) {
                var htmlEl = arg;
                Dom_1.$$(htmlEl).trigger(event, args);
            }
            else {
                var jq = arg;
                jq.trigger(event, args);
            }
        })(args);
    };
    /**
     * Execute the function only if the component is enabled.
     * @param func The function to execute if the component is enabled.
     * @returns {function(...[any]): *}
     */
    ComponentEvents.prototype.wrapToCallIfEnabled = function (func) {
        var _this = this;
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (!_this.owner.disabled) {
                if (args && args[0] instanceof CustomEvent) {
                    if (args[0].detail) {
                        args = [args[0].detail];
                    }
                }
                else if (args && JQueryutils_1.JQueryUtils.isInstanceOfJqueryEvent(args[0])) {
                    if (args[1] != undefined) {
                        args = [args[1]];
                    }
                    else {
                        args = [];
                    }
                }
                return func.apply(_this.owner, args);
            }
        };
    };
    ComponentEvents.prototype.getQueryStateEventName = function (eventType, attribute) {
        return this.getModelEvent(this.owner.queryStateModel, eventType, attribute);
    };
    ComponentEvents.prototype.getComponentOptionEventName = function (eventType, attribute) {
        return this.getModelEvent(this.owner.componentOptionsModel, eventType, attribute);
    };
    ComponentEvents.prototype.getModelEvent = function (model, eventType, attribute) {
        var evtName;
        if (eventType && attribute) {
            evtName = model.getEventName(eventType + attribute);
        }
        else {
            evtName = model.getEventName(eventType);
        }
        return evtName;
    };
    return ComponentEvents;
}());
exports.ComponentEvents = ComponentEvents;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Assert_1 = __webpack_require__(5);
var Logger_1 = __webpack_require__(11);
var Dom_1 = __webpack_require__(2);
var Utils_1 = __webpack_require__(4);
var Strings_1 = __webpack_require__(8);
var _ = __webpack_require__(0);
var SVGIcons_1 = __webpack_require__(13);
var TemplateComponentOptions_1 = __webpack_require__(51);
var ComponentOptionsType;
(function (ComponentOptionsType) {
    ComponentOptionsType[ComponentOptionsType["BOOLEAN"] = 0] = "BOOLEAN";
    ComponentOptionsType[ComponentOptionsType["NUMBER"] = 1] = "NUMBER";
    ComponentOptionsType[ComponentOptionsType["STRING"] = 2] = "STRING";
    ComponentOptionsType[ComponentOptionsType["LOCALIZED_STRING"] = 3] = "LOCALIZED_STRING";
    ComponentOptionsType[ComponentOptionsType["LIST"] = 4] = "LIST";
    ComponentOptionsType[ComponentOptionsType["SELECTOR"] = 5] = "SELECTOR";
    ComponentOptionsType[ComponentOptionsType["CHILD_HTML_ELEMENT"] = 6] = "CHILD_HTML_ELEMENT";
    ComponentOptionsType[ComponentOptionsType["TEMPLATE"] = 7] = "TEMPLATE";
    ComponentOptionsType[ComponentOptionsType["FIELD"] = 8] = "FIELD";
    ComponentOptionsType[ComponentOptionsType["FIELDS"] = 9] = "FIELDS";
    ComponentOptionsType[ComponentOptionsType["ICON"] = 10] = "ICON";
    ComponentOptionsType[ComponentOptionsType["COLOR"] = 11] = "COLOR";
    ComponentOptionsType[ComponentOptionsType["OBJECT"] = 12] = "OBJECT";
    ComponentOptionsType[ComponentOptionsType["QUERY"] = 13] = "QUERY";
    ComponentOptionsType[ComponentOptionsType["HELPER"] = 14] = "HELPER";
    ComponentOptionsType[ComponentOptionsType["LONG_STRING"] = 15] = "LONG_STRING";
    ComponentOptionsType[ComponentOptionsType["JSON"] = 16] = "JSON";
    ComponentOptionsType[ComponentOptionsType["JAVASCRIPT"] = 17] = "JAVASCRIPT";
    ComponentOptionsType[ComponentOptionsType["NONE"] = 18] = "NONE";
})(ComponentOptionsType = exports.ComponentOptionsType || (exports.ComponentOptionsType = {}));
var camelCaseToHyphenRegex = /([A-Z])|\W+(\w)/g;
var fieldsSeperator = /\s*,\s*/;
var localizer = /([a-zA-Z\-]+)\s*:\s*(([^,]|,\s*(?!([a-zA-Z\-]+)\s*:))+)/g;
/**
 * The `ComponentOptions` static class contains methods allowing the Coveo JavaScript Search Framework to initialize
 * component options.
 *
 * Typically, each [`Component`]{@link Component} that exposes a set of options contains a static `options` property.
 *
 * This property "builds" each option using the `ComponentOptions` method corresponding to its type (e.g.,
 * [`buildBooleanOption`]{@link ComponentOptions.buildBooleanOption},
 * [`buildFieldOption`]{@link ComponentOptions.buildFieldOption},
 * [`buildStringOption`]{@link ComponentOptions.buildStringOption}, etc.)
 */
var ComponentOptions = /** @class */ (function () {
    function ComponentOptions() {
    }
    ComponentOptions.buildTemplateOption = function (optionArgs) {
        return TemplateComponentOptions_1.TemplateComponentOptions.buildTemplateOption(optionArgs);
    };
    /**
     * Builds a boolean option.
     *
     * **Markup Examples:**
     *
     * > `data-foo="true"`
     *
     * > `data-foo="false"`
     *
     * @param optionArgs The arguments to apply when building the option.
     * @returns {boolean} The resulting option value.
     */
    ComponentOptions.buildBooleanOption = function (optionArgs) {
        return ComponentOptions.buildOption(ComponentOptionsType.BOOLEAN, ComponentOptions.loadBooleanOption, optionArgs);
    };
    /**
     * Builds a number option.
     *
     * A number option can be an integer or a float in the markup.
     *
     * **Note:**
     *
     * > To build a float option, you need to set the `float` property in the [`IComponentOptionsNumberOptionArgs`]{@link IComponentOptionsNumberOptionArgs} to `true`.
     *
     * **Markup Examples:**
     *
     * > `data-foo="3"`
     *
     * > `data-foo="1.5"`
     *
     * @param optionArgs The arguments to apply when building the option.
     * @returns {number} The resulting option value.
     */
    ComponentOptions.buildNumberOption = function (optionArgs) {
        return ComponentOptions.buildOption(ComponentOptionsType.NUMBER, ComponentOptions.loadNumberOption, optionArgs);
    };
    /**
     * Builds a string option.
     *
     * A string option can be any arbitrary string in the markup.
     *
     * **Markup Example:**
     *
     * > `data-foo="bar"`
     *
     * @param optionArgs The arguments to apply when building the option.
     * @returns {string} The resulting option value.
     */
    ComponentOptions.buildStringOption = function (optionArgs) {
        return ComponentOptions.buildOption(ComponentOptionsType.STRING, ComponentOptions.loadStringOption, optionArgs);
    };
    /**
     * Builds an icon option.
     *
     * This takes an SVG icon name, validates it and returns the name of the icon.
     * **Markup Examples:**
     *
     * > `data-foo="search"`
     *
     * > `data-foo="facet-expand"`
     *
     * @param optionArgs The arguments to apply when building the option.
     * @returns {string} The resulting option value.
     */
    ComponentOptions.buildIconOption = function (optionArgs) {
        return ComponentOptions.buildOption(ComponentOptionsType.ICON, ComponentOptions.loadIconOption, optionArgs);
    };
    /**
     * Builds a color option.
     *
     * Normally, this simply builds a string that matches a CSS color.
     *
     * **Note:**
     *
     * > In the markup, this offers no advantage over using a plain string. This is mostly useful for the Coveo JavaScript
     * > Interface Editor.
     *
     * **Markup Examples:**
     *
     * > `data-foo="coveo-sprites-user"`
     *
     * > `data-foo="coveo-sprites-database"`
     *
     * @param optionArgs The arguments to apply when building the option.
     * @returns {string} The resulting option value.
     */
    ComponentOptions.buildColorOption = function (optionArgs) {
        return ComponentOptions.buildOption(ComponentOptionsType.COLOR, ComponentOptions.loadStringOption, optionArgs);
    };
    /**
     * Builds a helper option.
     *
     * Normally, this simply builds a string that matches the name of a template helper.
     *
     * **Note:**
     *
     * > In the markup, this offers no advantage over using a plain string. This is mostly useful for the Coveo JavaScript
     * > Interface Editor.
     *
     * **Markup Examples:**
     *
     * > `data-foo="date"`
     *
     * > `data-foo="dateTime"`
     *
     * @param optionArgs The arguments to apply when building the option.
     * @returns {string} The resulting option value.
     */
    ComponentOptions.buildHelperOption = function (optionArgs) {
        return ComponentOptions.buildOption(ComponentOptionsType.HELPER, ComponentOptions.loadStringOption, optionArgs);
    };
    /**
     * Tries to parse a stringified JSON option.
     *
     * If unsuccessful (because of invalid syntax), the JSON option is ignored altogether, and the console displays a warning message.
     *
     * **Markup Example:**
     *
     * > `data-foo='{"bar" : "baz"}'`
     *
     * **Note:**
     *
     * A JSON option can always be set as a property in the `init` call of the framework rather than as a `data-` property in the corresponding HTMLElement markup.
     *
     * **Initialization Example:**
     *
     * ```
     * Coveo.init(root, {
     *   Facet : {
     *     foo : {
     *       "bar" : "baz"
     *     }
     *   }
     * })
     * ```
     * @param optionArgs The arguments to apply when building the option.
     * @returns {T} The resulting option value.
     */
    ComponentOptions.buildJsonOption = function (optionArgs) {
        return ComponentOptions.buildOption(ComponentOptionsType.JSON, ComponentOptions.loadJsonObjectOption, optionArgs);
    };
    /**
     * @deprecated Use buildJsonOption instead
     */
    ComponentOptions.buildJsonObjectOption = function (optionArgs) {
        return ComponentOptions.buildJsonOption(optionArgs);
    };
    /**
     * Builds a localized string option.
     *
     * A localized string option can be any arbitrary string.
     *
     * When parsing the value, the Coveo JavaScript Search Framework tries to load the localization for that string, if it
     * is available.
     *
     * If it is not available, it returns the non-localized value.
     *
     * This should be used for options that will be rendered directly to the end users.
     *
     * **Markup Example:**
     *
     * > `data-foo="bar"`
     *
     * @param optionArgs The arguments to apply when building the option.
     * @returns {string} The resulting option value.
     */
    ComponentOptions.buildLocalizedStringOption = function (optionArgs) {
        return ComponentOptions.buildOption(ComponentOptionsType.LOCALIZED_STRING, ComponentOptions.loadLocalizedStringOption, optionArgs);
    };
    /**
     * Builds a field option.
     *
     * A field option validates whether the field has a valid name. This means that the string must start with the `@`
     * character.
     *
     * **Markup Example:**
     *
     * > `data-foo="@bar"`
     *
     * @param optionArgs The arguments to apply when building the option.
     * @returns {string} The resulting option value.
     */
    ComponentOptions.buildFieldOption = function (optionArgs) {
        return ComponentOptions.buildOption(ComponentOptionsType.FIELD, ComponentOptions.loadFieldOption, optionArgs);
    };
    /**
     * Builds an array of fields option.
     *
     * As with all options that expect an array, you should use commas to delimit the different values.
     *
     * **Markup Example:**
     *
     * > `data-foo="@bar,@baz"`
     *
     * @param optionArgs The arguments to apply when building the option.
     * @returns {string[]} The resulting option value.
     */
    ComponentOptions.buildFieldsOption = function (optionArgs) {
        return ComponentOptions.buildOption(ComponentOptionsType.FIELDS, ComponentOptions.loadFieldsOption, optionArgs);
    };
    /**
     * Builds an array of strings option.
     *
     * As with all options that expect an array, you should use commas to delimit the different values.
     *
     * **Markup Example:**
     *
     * > `data-foo="bar,baz"`
     *
     * @param optionArgs The arguments to apply when building the option.
     * @returns {string[]} The resulting option value.
     */
    ComponentOptions.buildListOption = function (optionArgs) {
        return ComponentOptions.buildOption(ComponentOptionsType.LIST, ComponentOptions.loadListOption, optionArgs);
    };
    /**
     * Builds an option that allow to select an HTMLElement.
     *
     * The option accepts a CSS selector matching the required HTMLElement. This selector can either be a class, or an ID
     * selector.
     *
     * **Markup Examples:**
     *
     * > `data-foo-selector=".bar"`
     *
     * > `data-foo-selector="#bar"`
     *
     * @param optionArgs The arguments to apply when building the option.
     * @returns {HTMLElement} The resulting option value.
     */
    ComponentOptions.buildSelectorOption = function (optionArgs) {
        return ComponentOptions.buildOption(ComponentOptionsType.SELECTOR, ComponentOptions.loadSelectorOption, optionArgs);
    };
    ComponentOptions.buildChildHtmlElementOption = function (optionArgs) {
        return ComponentOptions.buildOption(ComponentOptionsType.CHILD_HTML_ELEMENT, ComponentOptions.loadChildHtmlElementOption, optionArgs);
    };
    ComponentOptions.buildCustomOption = function (converter, optionArgs) {
        var loadOption = function (element, name, option) {
            var stringvalue = ComponentOptions.loadStringOption(element, name, option);
            if (!Utils_1.Utils.isNullOrEmptyString(stringvalue)) {
                return converter(stringvalue);
            }
        };
        return ComponentOptions.buildOption(ComponentOptionsType.STRING, loadOption, optionArgs);
    };
    ComponentOptions.buildCustomListOption = function (converter, optionArgs) {
        var loadOption = function (element, name, option) {
            var stringvalue = ComponentOptions.loadListOption(element, name, option);
            return converter(stringvalue);
        };
        return ComponentOptions.buildOption(ComponentOptionsType.LIST, loadOption, optionArgs);
    };
    ComponentOptions.buildObjectOption = function (optionArgs) {
        var loadOption = function (element, name, option) {
            var keys = _.keys(optionArgs.subOptions);
            var scopedOptions = {};
            var scopedValues = {};
            for (var i = 0; i < keys.length; i++) {
                var key = keys[i];
                var scopedkey = ComponentOptions.mergeCamelCase(name, key);
                scopedOptions[scopedkey] = optionArgs.subOptions[key];
            }
            ComponentOptions.initOptions(element, scopedOptions, scopedValues);
            var resultValues = {};
            var resultFound = false;
            for (var i = 0; i < keys.length; i++) {
                var key = keys[i];
                var scopedkey = ComponentOptions.mergeCamelCase(name, key);
                if (scopedValues[scopedkey] != null) {
                    resultValues[key] = scopedValues[scopedkey];
                    resultFound = true;
                }
            }
            return resultFound ? resultValues : null;
        };
        return ComponentOptions.buildOption(ComponentOptionsType.OBJECT, loadOption, optionArgs);
    };
    ComponentOptions.buildOption = function (type, load, optionArg) {
        if (optionArg === void 0) { optionArg = {}; }
        var option = optionArg;
        option.type = type;
        option.load = load;
        return option;
    };
    ComponentOptions.attrNameFromName = function (name, optionArgs) {
        if (optionArgs && optionArgs.attrName) {
            return optionArgs.attrName;
        }
        if (name) {
            return 'data-' + ComponentOptions.camelCaseToHyphen(name);
        }
        return name;
    };
    ComponentOptions.camelCaseToHyphen = function (name) {
        return name.replace(camelCaseToHyphenRegex, '-$1$2').toLowerCase();
    };
    ComponentOptions.mergeCamelCase = function (parent, name) {
        return parent + name.substr(0, 1).toUpperCase() + name.substr(1);
    };
    /**
     * Loads and parses the options of the current element.
     *
     * Each component calls this method in its constructor.
     *
     * @param element The element whose markup options the method should load and parse.
     * @param component The class of the component whose options the method should load and parse (e.g., `Searchbox`,
     * `Facet`, etc.)
     * @param values The additional options which the method should merge with the specified markup option values.
     */
    ComponentOptions.initComponentOptions = function (element, component, values) {
        return ComponentOptions.initOptions(element, component.options, values, component.ID);
    };
    ComponentOptions.initOptions = function (element, options, values, componentID) {
        var logger = new Logger_1.Logger(this);
        if (values == null) {
            values = {};
        }
        var names = _.keys(options);
        for (var i = 0; i < names.length; i++) {
            var name_1 = names[i];
            var optionDefinition = options[name_1];
            var value = void 0;
            var loadFromAttribute = optionDefinition.load;
            if (loadFromAttribute != null) {
                value = loadFromAttribute(element, name_1, optionDefinition);
                if (value && optionDefinition.deprecated) {
                    logger.warn(componentID + '.' + name_1 + ': ' + optionDefinition.deprecated);
                }
            }
            if (Utils_1.Utils.isNullOrUndefined(value) && values[name_1] != undefined) {
                value = values[name_1];
            }
            if (value == null && values[name_1] == undefined) {
                if (optionDefinition.defaultValue != null) {
                    if (optionDefinition.type == ComponentOptionsType.LIST) {
                        value = _.extend([], optionDefinition.defaultValue);
                    }
                    else if (optionDefinition.type == ComponentOptionsType.OBJECT) {
                        value = _.extend({}, optionDefinition.defaultValue);
                    }
                    else {
                        value = optionDefinition.defaultValue;
                    }
                }
                else if (optionDefinition.defaultFunction != null) {
                    value = optionDefinition.defaultFunction(element);
                }
            }
            if (value != null) {
                if (optionDefinition.validator) {
                    var isValid = optionDefinition.validator(value);
                    if (!isValid) {
                        logger.warn(componentID + " ." + name_1 + " has invalid value: " + value);
                        if (optionDefinition.required) {
                            logger.error(componentID + " ." + name_1 + " is required and has an invalid value: " + value + ". ***THIS COMPONENT WILL NOT WORK***");
                        }
                        delete values[name_1];
                        continue;
                    }
                }
                if (optionDefinition.type == ComponentOptionsType.OBJECT && values[name_1] != null) {
                    values[name_1] = _.extend(values[name_1], value);
                }
                else if (optionDefinition.type == ComponentOptionsType.LOCALIZED_STRING) {
                    values[name_1] = Strings_1.l(value);
                }
                else {
                    values[name_1] = value;
                }
            }
            if (values[name_1] == undefined && optionDefinition.required) {
                logger.warn("Option \"" + name_1 + "\" is *REQUIRED* on the component \"" + componentID + "\". The component or the search page might *NOT WORK PROPERLY*.", element);
            }
        }
        for (var i = 0; i < names.length; i++) {
            var name_2 = names[i];
            var optionDefinition = options[name_2];
            if (optionDefinition.postProcessing) {
                values[name_2] = optionDefinition.postProcessing(values[name_2], values);
            }
        }
        return values;
    };
    ComponentOptions.loadStringOption = function (element, name, option) {
        return element.getAttribute(ComponentOptions.attrNameFromName(name, option)) || ComponentOptions.getAttributeFromAlias(element, option);
    };
    ComponentOptions.loadIconOption = function (element, name, option) {
        var svgIconName = ComponentOptions.loadStringOption(element, name, option);
        if (svgIconName == null) {
            return null;
        }
        // Old card templates icons used these values as the icon option. These names have changed since we moved to SVG.
        // This avoids breaking old default templates that people may still have after moving to 2.0.
        svgIconName = svgIconName.replace('coveo-sprites-replies', 'replies');
        svgIconName = svgIconName.replace('coveo-sprites-main-search-active', 'search');
        if (Utils_1.Utils.isNullOrUndefined(SVGIcons_1.SVGIcons.icons[svgIconName])) {
            new Logger_1.Logger(element).warn("Icon with name " + svgIconName + " not found.");
            return null;
        }
        svgIconName = Utils_1.Utils.toCamelCase(svgIconName);
        return svgIconName;
    };
    ComponentOptions.loadFieldOption = function (element, name, option) {
        var field = ComponentOptions.loadStringOption(element, name, option);
        Assert_1.Assert.check(!Utils_1.Utils.isNonEmptyString(field) || Utils_1.Utils.isCoveoField(field), field + ' is not a valid field');
        return field;
    };
    ComponentOptions.loadFieldsOption = function (element, name, option) {
        var fieldsAttr = ComponentOptions.loadStringOption(element, name, option);
        if (fieldsAttr == null) {
            return null;
        }
        var fields = fieldsAttr.split(fieldsSeperator);
        _.each(fields, function (field) {
            Assert_1.Assert.check(Utils_1.Utils.isCoveoField(field), field + ' is not a valid field');
        });
        return fields;
    };
    ComponentOptions.loadLocalizedStringOption = function (element, name, option) {
        var attributeValue = ComponentOptions.loadStringOption(element, name, option);
        var locale = String['locale'] || String['defaultLocale'];
        if (locale != null && attributeValue != null) {
            var localeParts_1 = locale.toLowerCase().split('-');
            var locales = _.map(localeParts_1, function (part, i) { return localeParts_1.slice(0, i + 1).join('-'); });
            var localizers = attributeValue.match(localizer);
            if (localizers != null) {
                for (var i = 0; i < localizers.length; i++) {
                    var groups = localizer.exec(localizers[i]);
                    if (groups != null) {
                        var lang = groups[1].toLowerCase();
                        if (_.contains(locales, lang)) {
                            return groups[2].replace(/^\s+|\s+$/g, '');
                        }
                    }
                }
            }
            return attributeValue != null ? attributeValue.toLocaleString() : null;
        }
        return attributeValue;
    };
    ComponentOptions.loadNumberOption = function (element, name, option) {
        var attributeValue = ComponentOptions.loadStringOption(element, name, option);
        if (attributeValue == null) {
            return null;
        }
        var numberValue = option.float === true ? Utils_1.Utils.parseFloatIfNotUndefined(attributeValue) : Utils_1.Utils.parseIntIfNotUndefined(attributeValue);
        if (option.min != null && option.min > numberValue) {
            new Logger_1.Logger(element).info("Value for option " + name + " is less than the possible minimum (Value is " + numberValue + ", minimum is " + option.min + "). It has been forced to its minimum value.", option);
            numberValue = option.min;
        }
        if (option.max != null && option.max < numberValue) {
            new Logger_1.Logger(element).info("Value for option " + name + " is higher than the possible maximum (Value is " + numberValue + ", maximum is " + option.max + "). It has been forced to its maximum value.", option);
            numberValue = option.max;
        }
        return numberValue;
    };
    ComponentOptions.loadBooleanOption = function (element, name, option) {
        return Utils_1.Utils.parseBooleanIfNotUndefined(ComponentOptions.loadStringOption(element, name, option));
    };
    ComponentOptions.loadListOption = function (element, name, option) {
        var separator = option.separator || /\s*,\s*/;
        var attributeValue = ComponentOptions.loadStringOption(element, name, option);
        return Utils_1.Utils.isNonEmptyString(attributeValue) ? attributeValue.split(separator) : null;
    };
    ComponentOptions.loadEnumOption = function (element, name, option, _enum) {
        var enumAsString = ComponentOptions.loadStringOption(element, name, option);
        return enumAsString != null ? _enum[enumAsString] : null;
    };
    ComponentOptions.loadJsonObjectOption = function (element, name, option) {
        var jsonAsString = ComponentOptions.loadStringOption(element, name, option);
        if (jsonAsString == null) {
            return null;
        }
        try {
            return JSON.parse(jsonAsString);
        }
        catch (exception) {
            new Logger_1.Logger(element).info("Value for option " + name + " is not a valid JSON string (Value is " + jsonAsString + "). It has been disabled.", exception);
            return null;
        }
    };
    ComponentOptions.loadSelectorOption = function (element, name, option, doc) {
        if (doc === void 0) { doc = document; }
        var attributeValue = ComponentOptions.loadStringOption(element, name, option);
        return Utils_1.Utils.isNonEmptyString(attributeValue) ? doc.querySelector(attributeValue) : null;
    };
    ComponentOptions.loadChildHtmlElementOption = function (element, name, option, doc) {
        if (doc === void 0) { doc = document; }
        var htmlElement;
        // Attribute: selector
        var selectorAttr = option.selectorAttr || ComponentOptions.attrNameFromName(name, option) + '-selector';
        var selector = element.getAttribute(selectorAttr) || ComponentOptions.getAttributeFromAlias(element, option);
        if (selector != null) {
            htmlElement = doc.body.querySelector(selector);
        }
        // Child
        if (htmlElement == null) {
            var childSelector = option.childSelector;
            if (childSelector == null) {
                childSelector = '.' + name;
            }
            htmlElement = ComponentOptions.loadChildHtmlElementFromSelector(element, childSelector);
        }
        return htmlElement;
    };
    ComponentOptions.loadChildHtmlElementFromSelector = function (element, selector) {
        Assert_1.Assert.isNonEmptyString(selector);
        if (Dom_1.$$(element).is(selector)) {
            return element;
        }
        return Dom_1.$$(element).find(selector);
    };
    ComponentOptions.loadChildrenHtmlElementFromSelector = function (element, selector) {
        Assert_1.Assert.isNonEmptyString(selector);
        return Dom_1.$$(element).findAll(selector);
    };
    ComponentOptions.findParentScrolling = function (element, doc) {
        if (doc === void 0) { doc = document; }
        while (element != doc && element != null) {
            if (ComponentOptions.isElementScrollable(element)) {
                if (element.tagName.toLowerCase() !== 'body') {
                    return element;
                }
                return window;
            }
            element = element.parentElement;
        }
        return window;
    };
    ComponentOptions.isElementScrollable = function (element) {
        return Dom_1.$$(element).css('overflow-y') == 'scroll' || element.style.overflowY == 'scroll';
    };
    ComponentOptions.getAttributeFromAlias = function (element, option) {
        if (_.isArray(option.alias)) {
            var attributeFound_1;
            _.each(option.alias, function (alias) {
                var attributeFoundWithThisAlias = element.getAttribute(ComponentOptions.attrNameFromName(alias));
                if (attributeFoundWithThisAlias) {
                    attributeFound_1 = attributeFoundWithThisAlias;
                }
            });
            return attributeFound_1;
        }
        if (option.alias) {
            return element.getAttribute(ComponentOptions.attrNameFromName(option.alias));
        }
        else {
            return undefined;
        }
    };
    return ComponentOptions;
}());
exports.ComponentOptions = ComponentOptions;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var L10N_1 = __webpack_require__(112);
function l() {
    var params = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        params[_i] = arguments[_i];
    }
    return L10N_1.L10N.format.apply(this, arguments);
}
exports.l = l;
;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.analyticsActionCauseList = {
    interfaceLoad: {
        name: 'interfaceLoad',
        type: 'interface'
    },
    interfaceChange: {
        name: 'interfaceChange',
        type: 'interface',
        metaMap: { interfaceChangeTo: 1 }
    },
    contextRemove: {
        name: 'contextRemove',
        type: 'misc',
        metaMap: { contextName: 1 }
    },
    didyoumeanAutomatic: {
        name: 'didyoumeanAutomatic',
        type: 'misc'
    },
    didyoumeanClick: {
        name: 'didyoumeanClick',
        type: 'misc'
    },
    resultsSort: {
        name: 'resultsSort',
        type: 'misc',
        metaMap: { resultsSortBy: 1 }
    },
    searchboxSubmit: {
        name: 'searchboxSubmit',
        type: 'search box'
    },
    searchboxClear: {
        name: 'searchboxClear',
        type: 'search box'
    },
    searchboxAsYouType: {
        name: 'searchboxAsYouType',
        type: 'search box'
    },
    breadcrumbFacet: {
        name: 'breadcrumbFacet',
        type: 'breadcrumb',
        metaMap: { facetId: 1, facetValue: 2, facetTitle: 3 }
    },
    breadcrumbAdvancedSearch: {
        name: 'breadcrumbAdvancedSearch',
        type: 'breadcrumb'
    },
    breadcrumbResetAll: {
        name: 'breadcrumbResetAll',
        type: 'breadcrumb'
    },
    documentTag: {
        name: 'documentTag',
        type: 'document',
        metaMap: { facetId: 1, facetValue: 2, facetTitle: 3 }
    },
    documentField: {
        name: 'documentField',
        type: 'document',
        metaMap: { facetId: 1, facetValue: 2, facetTitle: 3 }
    },
    documentQuickview: {
        name: 'documentQuickview',
        type: 'document',
        metaMap: { documentTitle: 1, documentURL: 2 }
    },
    documentOpen: {
        name: 'documentOpen',
        type: 'document',
        metaMap: { documentTitle: 1, documentURL: 2 }
    },
    omniboxFacetSelect: {
        name: 'omniboxFacetSelect',
        type: 'omnibox',
        metaMap: { facetId: 1, facetValue: 2, facetTitle: 3 }
    },
    omniboxFacetExclude: {
        name: 'omniboxFacetExclude',
        type: 'omnibox',
        metaMap: { facetId: 1, facetValue: 2, facetTitle: 3 }
    },
    omniboxFacetDeselect: {
        name: 'omniboxFacetDeselect',
        type: 'omnibox',
        metaMap: { facetId: 1, facetValue: 2, facetTitle: 3 }
    },
    omniboxFacetUnexclude: {
        name: 'omniboxFacetUnexclude',
        type: 'omnibox',
        metaMap: { faceId: 1, facetValue: 2, facetTitle: 3 }
    },
    omniboxAnalytics: {
        name: 'omniboxAnalytics',
        type: 'omnibox',
        metaMap: {
            partialQuery: 1,
            suggestionRanking: 2,
            partialQueries: 3,
            suggestions: 4
        }
    },
    omniboxFromLink: {
        name: 'omniboxFromLink',
        type: 'omnibox',
        metaMap: {
            partialQuery: 1,
            suggestionRanking: 2,
            partialQueries: 3,
            suggestions: 4
        }
    },
    omniboxField: {
        name: 'omniboxField',
        type: 'omnibox'
    },
    facetClearAll: {
        name: 'facetClearAll',
        type: 'facet',
        metaMap: { facetId: 1 }
    },
    facetSearch: {
        name: 'facetSearch',
        type: 'facet',
        metaMap: { facetId: 1 }
    },
    facetToggle: {
        name: 'facetToggle',
        type: 'facet',
        metaMap: { facetId: 1, facetOperatorBefore: 2, facetOperatorAfter: 3 }
    },
    facetRangeSlider: {
        name: 'facetRangeSlider',
        type: 'facet',
        metaMap: { facetId: 1, facetRangeStart: 2, facetRangeEnd: 3 }
    },
    facetRangeGraph: {
        name: 'facetRangeGraph',
        type: 'facet',
        metaMap: { facetId: 1, facetRangeStart: 2, facetRangeEnd: 3 }
    },
    facetSelect: {
        name: 'facetSelect',
        type: 'facet',
        metaMap: { facetId: 1, facetValue: 2, facetTitle: 3 }
    },
    facetSelectAll: {
        name: 'facetSelectAll',
        type: 'facet',
        metaMap: { facetId: 1, facetValue: 2, facetTitle: 3 }
    },
    facetDeselect: {
        name: 'facetDeselect',
        type: 'facet',
        metaMap: { facetId: 1, facetValue: 2, facetTitle: 3 }
    },
    facetExclude: {
        name: 'facetExclude',
        type: 'facet',
        metaMap: { facetId: 1, facetValue: 2, facetTitle: 3 }
    },
    facetUnexclude: {
        name: 'facetUnexclude',
        type: 'facet',
        metaMap: { facetId: 1, facetValue: 2, facetTitle: 3 }
    },
    errorBack: {
        name: 'errorBack',
        type: 'errors'
    },
    errorClearQuery: {
        name: 'errorClearQuery',
        type: 'errors'
    },
    errorRetry: {
        name: 'errorRetry',
        type: 'errors'
    },
    noResultsBack: {
        name: 'noResultsBack',
        type: 'noResults'
    },
    expandToFullUI: {
        name: 'expandToFullUI',
        type: 'interface'
    },
    caseCreationInputChange: {
        name: 'inputChange',
        type: 'caseCreation'
    },
    caseCreationSubmitButton: {
        name: 'submitButton',
        type: 'caseCreation'
    },
    caseCreationCancelButton: {
        name: 'cancelButton',
        type: 'caseCreation'
    },
    caseCreationUnloadPage: {
        name: 'unloadPage',
        type: 'caseCreation'
    },
    casecontextAdd: {
        name: 'casecontextAdd',
        type: 'casecontext',
        metaMap: { caseID: 5 }
    },
    casecontextRemove: {
        name: 'casecontextRemove',
        type: 'casecontext',
        metaMap: { caseID: 5 }
    },
    preferencesChange: {
        name: 'preferencesChange',
        type: 'preferences',
        metaMap: { preferenceName: 1, preferenceType: 2 }
    },
    getUserHistory: {
        name: 'getUserHistory',
        type: 'userHistory'
    },
    userActionDocumentClick: {
        name: 'userActionDocumentClick',
        type: 'userHistory'
    },
    caseAttach: {
        name: 'caseAttach',
        type: 'case',
        metaMap: { documentTitle: 1, resultUriHash: 3, articleID: 4, caseID: 5 }
    },
    caseDetach: {
        name: 'caseDetach',
        type: 'case',
        metaMap: { documentTitle: 1, resultUriHash: 3, articleID: 4, caseID: 5 }
    },
    customfiltersChange: {
        name: 'customfiltersChange',
        type: 'customfilters',
        metaMap: { customFilterName: 1, customFilterType: 2, customFilterExpression: 3 }
    },
    pagerNumber: {
        name: 'pagerNumber',
        type: 'getMoreResults',
        metaMap: { pagerNumber: 1 }
    },
    pagerNext: {
        name: 'pagerNext',
        type: 'getMoreResults',
        metaMap: { pagerNumber: 1 }
    },
    pagerPrevious: {
        name: 'pagerPrevious',
        type: 'getMoreResults',
        metaMap: { pagerNumber: 1 }
    },
    pagerScrolling: {
        name: 'pagerScrolling',
        type: 'getMoreResults'
    },
    pagerResize: {
        name: 'pagerResize',
        type: 'getMoreResults'
    },
    positionSet: {
        name: 'positionSet',
        type: 'distance'
    },
    searchFromLink: {
        name: 'searchFromLink',
        type: 'interface'
    },
    triggerNotify: {
        name: 'notify',
        type: 'queryPipelineTriggers'
    },
    triggerExecute: {
        name: 'execute',
        type: 'queryPipelineTriggers'
    },
    triggerQuery: {
        name: 'query',
        type: 'queryPipelineTriggers'
    },
    triggerRedirect: {
        name: 'redirect',
        type: 'queryPipelineTriggers'
    },
    queryError: {
        name: 'query',
        type: 'errors',
        metaMap: { query: 1, aq: 2, cq: 3, dq: 4, errorType: 5, errorMessage: 6 }
    },
    exportToExcel: {
        name: 'exportToExcel',
        type: 'misc'
    },
    recommendation: {
        name: 'recommendation',
        type: 'recommendation'
    },
    recommendationInterfaceLoad: {
        name: 'recommendationInterfaceLoad',
        type: 'recommendation'
    },
    recommendationOpen: {
        name: 'recommendationOpen',
        type: 'recommendation'
    },
    advancedSearch: {
        name: 'advancedSearch',
        type: 'advancedSearch'
    },
    searchAlertsFollowDocument: {
        name: 'followDocument',
        type: 'searchAlerts'
    },
    searchAlertsFollowQuery: {
        name: 'followQuery',
        type: 'searchAlerts'
    },
    searchAlertsUpdateSubscription: {
        name: 'updateSubscription',
        type: 'searchAlerts'
    },
    searchAlertsDeleteSubscription: {
        name: 'deleteSubscription',
        type: 'searchAlerts'
    },
    searchAlertsUnfollowDocument: {
        name: 'unfollowDocument',
        type: 'searchAlerts'
    },
    searchAlertsUnfollowQuery: {
        name: 'unfollowQuery',
        type: 'searchAlerts'
    },
    simpleFilterSelectValue: {
        name: 'selectValue',
        type: 'simpleFilter',
        metaMap: { simpleFilterTitle: 1, simpleFilterValue: 2, simpleFilterField: 3 }
    },
    simpleFilterDeselectValue: {
        name: 'selectValue',
        type: 'simpleFilter',
        metaMap: { simpleFilterTitle: 1, simpleFilterValues: 2, simpleFilterField: 3 }
    },
    simpleFilterClearAll: {
        name: 'selectValue',
        type: 'simpleFilter',
        metaMap: { simpleFilterTitle: 1, simpleFilterField: 3 }
    },
    resultsLayoutChange: {
        name: 'changeResultsLayout',
        type: 'resultsLayout'
    },
    foldingShowMore: {
        name: 'showMoreFoldedResults',
        type: 'folding'
    },
    foldingShowLess: {
        name: 'showLessFoldedResults',
        type: 'folding'
    }
};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * This static class is there to contains the different string definition for all the events related to query.
 *
 * Note that these events will only be triggered when the {@link QueryController.executeQuery} method is used, either directly or by using {@link executeQuery}
 */
var QueryEvents = /** @class */ (function () {
    function QueryEvents() {
    }
    /**
     * Triggered when a new query is launched.
     *
     * All bound handlers will receive {@link INewQueryEventArgs} as an argument.
     *
     * The string value is `newQuery`.
     * @type {string}
     */
    QueryEvents.newQuery = 'newQuery';
    /**
     * Triggered when the query is being built.
     *
     * This is typically where all components will contribute their part to the {@link IQuery} using the {@link QueryBuilder}.
     *
     * All bound handlers will receive {@link IBuildingQueryEventArgs} as an argument.
     *
     * The string value is `buildingQuery`.
     * @type {string}
     */
    QueryEvents.buildingQuery = 'buildingQuery';
    /**
     * Triggered when the query is done being built.
     *
     * This is typically where the facet will add it's {@link IGroupByRequest} to the {@link IQuery}.
     *
     * All bound handlers will receive {@link IDoneBuildingQueryEventArgs} as an argument.
     *
     * The string value is `doneBuildingQuery`.
     * @type {string}
     */
    QueryEvents.doneBuildingQuery = 'doneBuildingQuery';
    /**
     * Triggered when the query is being executed on the Search API.
     *
     * All bound handlers will receive {@link IDuringQueryEventArgs} as an argument.
     *
     * The string value is `duringQuery`.
     * @type {string}
     */
    QueryEvents.duringQuery = 'duringQuery';
    /**
     * Triggered when more results are being fetched on the Search API (think : infinite scrolling, or pager).
     *
     * All bound handlers will receive {@link IDuringQueryEventArgs} as an argument.
     *
     * The string value is `duringFetchMoreQuery`.
     * @type {string}
     */
    QueryEvents.duringFetchMoreQuery = 'duringFetchMoreQuery';
    /**
     * Triggered when a query successfully returns from the Search API.
     *
     * All bound handlers will receive {@link IQuerySuccessEventArgs} as an argument.
     *
     * The string value is `querySuccess`.
     * @type {string}
     */
    QueryEvents.querySuccess = 'querySuccess';
    /**
     * Triggered when a more results were successfully returned from the Search API. (think : infinite scrolling, or pager).
     *
     * All bound handlers will receive {@link IFetchMoreSuccessEventArgs} as an argument.
     *
     * The string value is `fetchMoreSuccess`.
     * @type {string}
     */
    QueryEvents.fetchMoreSuccess = 'fetchMoreSuccess';
    /**
     * Triggered after the main query success event has finished executing.
     *
     * This is typically where facets will process the {@link IGroupByResult} and render themselves.
     *
     * All bound handlers will receive {@link IQuerySuccessEventArgs} as an argument.
     *
     * The string value is `deferredQuerySuccess`.
     * @type {string}
     */
    QueryEvents.deferredQuerySuccess = 'deferredQuerySuccess';
    /**
     * Triggered when there was an error executing a query on the Search API.
     *
     * All bound handlers will receive {@link IQueryErrorEventArgs} as an argument.
     *
     * The string value is `queryError`.
     * @type {string}
     */
    QueryEvents.queryError = 'queryError';
    /**
     * Triggered before the {@link QueryEvents.querySuccess} event.
     *
     * This allows external code to modify the results before rendering them.
     *
     * For example, the {@link Folding} component might use this event to construct a coherent parent child relationship between query results.
     *
     * All bound handlers will receive {@link IPreprocessResultsEventArgs} as an argument.
     *
     * The string value is `preprocessResults`.
     * @type {string}
     */
    QueryEvents.preprocessResults = 'preprocessResults';
    /**
     * Triggered before the {@link QueryEvents.fetchMoreSuccess} event.
     *
     * This allows external code to modify the results before rendering them.
     *
     * For example, the {@link Folding} component might use this event to construct a coherent parent child relationship between query results.
     *
     * All bound handlers will receive {@link IPreprocessResultsEventArgs} as an argument.
     *
     * The string value is `preprocessMoreResults`.
     * @type {string}
     */
    QueryEvents.preprocessMoreResults = 'preprocessMoreResults';
    /**
     * Triggered when there is no result for a particular query.
     *
     * All bound handlers will receive {@link INoResultsEventArgs} as an argument.
     *
     * The string value is `noResults`.
     * @type {string}
     */
    QueryEvents.noResults = 'noResults';
    QueryEvents.buildingCallOptions = 'buildingCallOptions';
    return QueryEvents;
}());
exports.QueryEvents = QueryEvents;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Ensure that we're not going to get console is undefined error in IE8-9
Object.defineProperty(exports, "__esModule", { value: true });
/* istanbul ignore next */
if (!window['console']) {
    console = {
        log: function () { },
        debug: function () { },
        info: function () { },
        warn: function () { },
        error: function () { },
        assert: function () { },
        clear: function () { },
        count: function () { },
        dir: function () { },
        dirxml: function () { },
        group: function () { },
        groupCollapsed: function () { },
        groupEnd: function () { },
        msIsIndependentlyComposed: function (element) { },
        profile: function () { },
        profileEnd: function () { },
        select: function () { },
        time: function () { },
        timeEnd: function () { },
        trace: function () { }
    };
}
/* istanbul ignore next */
var Logger = /** @class */ (function () {
    function Logger(owner) {
        this.owner = owner;
    }
    Logger.prototype.trace = function () {
        var stuff = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            stuff[_i] = arguments[_i];
        }
        if (Logger.level <= Logger.TRACE) {
            this.log('TRACE', stuff);
        }
    };
    Logger.prototype.debug = function () {
        var stuff = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            stuff[_i] = arguments[_i];
        }
        if (Logger.level <= Logger.DEBUG) {
            this.log('DEBUG', stuff);
        }
    };
    Logger.prototype.info = function () {
        var stuff = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            stuff[_i] = arguments[_i];
        }
        if (Logger.level <= Logger.INFO) {
            this.log('INFO', stuff);
        }
    };
    Logger.prototype.warn = function () {
        var stuff = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            stuff[_i] = arguments[_i];
        }
        if (Logger.level <= Logger.WARN) {
            this.log('WARN', stuff);
        }
    };
    Logger.prototype.error = function () {
        var stuff = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            stuff[_i] = arguments[_i];
        }
        if (Logger.level <= Logger.ERROR) {
            this.log('ERROR', stuff);
        }
    };
    Logger.prototype.log = function (level, stuff) {
        if (window['console'] && console.log) {
            if (console.error && level == 'ERROR') {
                console.error([level, this.owner].concat(stuff));
            }
            else if (console.info && level == 'INFO') {
                console.info([level, this.owner].concat(stuff));
            }
            else if (console.warn && level == 'WARN') {
                console.warn([level, this.owner].concat(stuff));
            }
            else {
                console.log([level, this.owner].concat(stuff));
            }
            if (Logger.executionTime) {
                console.timeEnd('Execution time');
                console.time('Execution time');
            }
        }
    };
    Logger.enable = function () {
        Logger.level = Logger.TRACE;
    };
    Logger.disable = function () {
        Logger.level = Logger.NOTHING;
    };
    Logger.TRACE = 1;
    Logger.DEBUG = 2;
    Logger.INFO = 3;
    Logger.WARN = 4;
    Logger.ERROR = 5;
    Logger.NOTHING = 6;
    Logger.level = Logger.INFO;
    Logger.executionTime = false;
    return Logger;
}());
exports.Logger = Logger;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Model_1 = __webpack_require__(16);
var Assert_1 = __webpack_require__(5);
var _ = __webpack_require__(0);
var Utils_1 = __webpack_require__(4);
exports.QUERY_STATE_ATTRIBUTES = {
    Q: 'q',
    FIRST: 'first',
    T: 't',
    TG: 'tg',
    SORT: 'sort',
    LAYOUT: 'layout',
    HD: 'hd',
    HQ: 'hq',
    QUICKVIEW: 'quickview',
    DEBUG: 'debug'
};
/**
 * The `QueryStateModel` class is a key-value store which contains the current state of the components that can affect
 * the query (see [State](https://developers.coveo.com/x/RYGfAQ)). This class inherits from the [`Model`]{@link Model}
 * class. Optionally, it is possible to persist the state in the query string in order to enable browser history
 * management (see the [`HistoryController`]{@link HistoryController} class).
 *
 * Components set values in the `QueryStateModel` instance to reflect their current state. The `QueryStateModel`
 * triggers state events (see [`eventTypes`]{@link Model.eventTypes}) whenever one of its values is modified. Components
 * listen to triggered state events to update themselves when appropriate.
 *
 * For instance, when a query is triggered, the [`Searchbox`]{@link Searchbox} component sets the `q` attribute (the
 * basic query expression), while the [`Pager`]{@link Pager} component sets the `first` attribute (the index of the
 * first result to display in the result list), and so on.
 *
 * **Example:**
 *
 * > The user modifies the content of the `Searchbox` and submits a query. This triggers the following state events:
 * > - `state:change:q` (because the value of `q` has changed).
 * > - `state:change` (because at least one value has changed in the `QueryStateModel`).
 * >
 * > Components or external code can attach handlers to those events:
 * > ```javascript
 * > Coveo.$$(document).on('state:change:q', function() {
 * >   [ ... ]
 * > });
 * > ```
 *
 * **Note:**
 * > Normally, you should interact with the `QueryStateModel` instance using the [`Coveo.state`]{@link state} top-level
 * > function.
 */
var QueryStateModel = /** @class */ (function (_super) {
    __extends(QueryStateModel, _super);
    /**
     * Creates a new `QueryStateModel` instance.
     * @param element The HTMLElement on which to instantiate the `QueryStateModel`.
     * @param attributes The state key-value store to instantiate the `QueryStateModel` with.
     */
    function QueryStateModel(element, attributes) {
        var _this = this;
        var merged = __assign({}, QueryStateModel.defaultAttributes, attributes);
        _this = _super.call(this, element, QueryStateModel.ID, merged) || this;
        return _this;
    }
    QueryStateModel.getFacetId = function (id, include) {
        if (include === void 0) { include = true; }
        return 'f:' + id + (include ? '' : ':not');
    };
    QueryStateModel.getFacetOperator = function (id) {
        return 'f:' + id + ':operator';
    };
    QueryStateModel.getFacetLookupValue = function (id) {
        return QueryStateModel.getFacetId(id) + ':lookupvalues';
    };
    /**
     * Validates whether at least one facet is currently active (has selected or excluded values) in the interface.
     *
     * @returns {boolean} `true` if at least one facet is active; `false` otherwise.
     */
    QueryStateModel.prototype.atLeastOneFacetIsActive = function () {
        var _this = this;
        return !_.isUndefined(_.find(this.attributes, function (value, key) {
            return key.indexOf('f:') == 0 && !Utils_1.Utils.arrayEqual(_this.getDefault(key), value);
        }));
    };
    QueryStateModel.prototype.set = function (attribute, value, options) {
        this.validate(attribute, value);
        _super.prototype.set.call(this, attribute, value, options);
    };
    QueryStateModel.prototype.validate = function (attribute, value) {
        if (attribute == QueryStateModel.attributesEnum.first) {
            Assert_1.Assert.isNumber(value);
            Assert_1.Assert.isLargerOrEqualsThan(0, value);
        }
    };
    QueryStateModel.ID = 'state';
    QueryStateModel.defaultAttributes = {
        q: '',
        first: 0,
        fv: '',
        t: '',
        hd: '',
        hq: '',
        sort: '',
        layout: 'list',
        tg: '',
        quickview: '',
        debug: false
    };
    QueryStateModel.attributesEnum = {
        q: 'q',
        first: 'first',
        fv: 'fv',
        t: 't',
        sort: 'sort',
        layout: 'layout',
        hd: 'hd',
        hq: 'hq',
        tg: 'tg',
        quickview: 'quickview',
        debug: 'debug'
    };
    return QueryStateModel;
}(Model_1.Model));
exports.QueryStateModel = QueryStateModel;
function setState(model, args) {
    Assert_1.Assert.exists(model);
    if (args.length == 0 || args[0] == undefined) {
        // No args means return the model
        return model;
    }
    else if (args.length == 1 && Utils_1.Utils.isNonEmptyString(args[0])) {
        // One string arg means retrieve value from model
        return model.get(args[0]);
    }
    else if (_.isObject(args[0])) {
        // One dictionary means set multiple values
        var toSet = args[0];
        var options = _.extend({ customAttribute: true }, args[1]);
        return model.setMultiple(toSet, options);
    }
    else if (args.length > 1) {
        // Otherwise we're setting a value
        var name_1 = args[0];
        var value = args[1];
        var options = _.extend({ customAttribute: true }, args[2]);
        Assert_1.Assert.isNonEmptyString(name_1);
        return model.set(name_1, value, options);
    }
}
exports.setState = setState;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var SVGIcons = /** @class */ (function () {
    function SVGIcons() {
    }
    SVGIcons.icons = {
        search: __webpack_require__(236),
        more: __webpack_require__(237),
        loading: __webpack_require__(238),
        checkboxHookExclusionMore: __webpack_require__(239),
        arrowUp: __webpack_require__(240),
        arrowDown: __webpack_require__(241),
        mainClear: __webpack_require__(242),
        orAnd: __webpack_require__(243),
        sort: __webpack_require__(244),
        ascending: __webpack_require__(245),
        descending: __webpack_require__(246),
        dropdownMore: __webpack_require__(247),
        dropdownLess: __webpack_require__(248),
        facetCollapse: __webpack_require__(249),
        facetExpand: __webpack_require__(250),
        dropdownShareQuery: __webpack_require__(251),
        dropdownPreferences: __webpack_require__(252),
        dropdownAuthenticate: __webpack_require__(253),
        dropdownExport: __webpack_require__(254),
        dropdownFollowQuery: __webpack_require__(255),
        quickview: __webpack_require__(256),
        pagerRightArrow: __webpack_require__(257),
        pagerLeftArrow: __webpack_require__(258),
        replies: __webpack_require__(259),
        video: __webpack_require__(260),
        coveoLogo: __webpack_require__(261),
        coveoPoweredBy: __webpack_require__(262),
        taggingOk: __webpack_require__(263),
        edit: __webpack_require__(264),
        star: __webpack_require__(265),
        listLayout: __webpack_require__(266),
        cardLayout: __webpack_require__(267),
        tableLayout: __webpack_require__(268)
    };
    return SVGIcons;
}());
exports.SVGIcons = SVGIcons;


/***/ }),
/* 14 */,
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * This static class is there to contain the different string definitions for all the events related to initialization.
 *
 * Note that these events will only be triggered when the {@link init} function is called.
 *
 * This means these events are normally called only once when the search interface is initialized.
 */
var InitializationEvents = /** @class */ (function () {
    function InitializationEvents() {
    }
    /**
     * This event is triggered right before each components inside the search interface get initialized (eg: Before the constructor of each component is executed).
     *
     * The string value is `beforeInitialization`.
     * @type {string}
     */
    InitializationEvents.beforeInitialization = 'beforeInitialization';
    /**
     * Triggered after the components are initialized (eg: After the constructor of each component is executed)
     * but before their state is set from the hash portion of the URL (e.g., http://mysearchinterface#q=myQuery ).
     *
     * This is also before the first query is launched (if the {@link SearchInterface.options.autoTriggerQuery} is `true`).
     *
     * The string value is `afterComponentsInitialization`.
     * @type {string}
     */
    InitializationEvents.afterComponentsInitialization = 'afterComponentsInitialization';
    /**
     * Triggered right before the state from the URL (e.g., http://mysearchinterface#q=myQuery ) gets applied in the interface.
     *
     * This will typically only be useful if the {@link SearchInterface.options.enableHistory} is set to `true`.
     *
     * The string value is `restoreHistoryState`.
     * @type {string}
     */
    InitializationEvents.restoreHistoryState = 'restoreHistoryState';
    /**
     * Triggered right after the UI is fully initialized.
     *
     * Concretely this means that the constructor of each component has been executed, and that the state coming for the URL (e.g., http://mysearchinterface#q=myquery) has been applied.
     *
     * It is triggered *before* the first query is launched, and if the {@link SearchInterface.options.autoTriggerQuery} is `true`.
     *
     * The string value is `afterInitialization`.
     * @type {string}
     */
    InitializationEvents.afterInitialization = 'afterInitialization';
    /**
     * This is triggered when the UI needs to be dynamically removed so that components can unbind any internal handlers they might have set globally on the window or the document.
     *
     * After this event has been executed, the search interface can be dynamically removed and all handlers can be considered cleanly removed.
     *
     * The string value is `nuke`.
     * @type {string}
     */
    InitializationEvents.nuke = 'nuke';
    return InitializationEvents;
}());
exports.InitializationEvents = InitializationEvents;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Dom_1 = __webpack_require__(2);
var Assert_1 = __webpack_require__(5);
var Utils_1 = __webpack_require__(4);
var BaseComponent_1 = __webpack_require__(27);
var _ = __webpack_require__(0);
exports.MODEL_EVENTS = {
    PREPROCESS: 'preprocess',
    CHANGE_ONE: 'change:',
    CHANGE: 'change',
    RESET: 'reset',
    ALL: 'all'
};
/**
 * A *model* is a key-value store that triggers various JavaScript events when any value associated to one of its key changes.<br/>
 * This class is meant to be extended, one of the most important extension being the {@link QueryStateModel} class.<br/>
 * Components set values in this key-value store and listen to triggered events in order to update themselves accordingly.<br/>
 */
var Model = /** @class */ (function (_super) {
    __extends(Model, _super);
    function Model(element, id, attributes) {
        var _this = _super.call(this, element, id) || this;
        _this.eventNameSpace = id;
        _this.defaultAttributes = Utils_1.Utils.extendDeep(_this.defaultAttributes, attributes);
        _this.attributes = attributes;
        _this.logger.debug('Creating model');
        return _this;
    }
    /**
     * Sets the value of a single specific attribute.</br>
     * Note: this method calls the `setMultiple` method.
     * @param attribute
     * the specific attribute whose value is to be set.
     * @param value
     * the value to set the attribute to.
     * @param options
     * the options (see {@link setMultiple}).
     */
    Model.prototype.set = function (attribute, value, options) {
        var toSet = {};
        toSet[attribute] = value;
        this.setMultiple(toSet, options);
    };
    /**
     * Gets an object containing all *active* registered attribute key-values.</br>
     * An attribute is considered active when its value is not in its default state.
     * @returns {{object}}
     */
    Model.prototype.getAttributes = function () {
        var _this = this;
        var attributes = {};
        _.each(this.attributes, function (attribute, key) {
            if (_.isObject(attribute)) {
                if (!Utils_1.Utils.objectEqual(attribute, _this.defaultAttributes[key])) {
                    attributes[key] = Utils_1.Utils.extendDeep({}, attribute);
                }
            }
            else if (attribute != _this.defaultAttributes[key]) {
                attributes[key] = attribute;
            }
        });
        return attributes;
    };
    /**
     * Sets the values of one or many attributes.</br>
     * This method may trigger the following events (in order):</br>
     * • `preprocess`</br>
     * • `changeOne`</br>
     * • `change`</br>
     * • `all`
     * @param toSet
     * the key-value list of attributes with their new intended values.
     * @param options
     * if the `customAttribute` option is set to `true`, the method will not validate whether an attribute is registered or not.</br>
     * If the `validateType` option is set to `true`, the method will ensure that each value type is correct.</br>
     * If the `silent` option is set to `true`, then the `changeOne`, `change` and `all` events will not be triggered.
     */
    Model.prototype.setMultiple = function (toSet, options) {
        var _this = this;
        var anythingChanged = false;
        this.preprocessEvent(toSet);
        _.each(toSet, function (value, attribute) {
            if (!options || !options.customAttribute) {
                _this.checkIfAttributeExists(attribute);
            }
            value = _this.parseToCorrectType(attribute, value);
            if (!options || options.validateType) {
                if (!_this.typeIsValid(attribute, value)) {
                    return;
                }
            }
            if (_this.checkIfAttributeChanged(attribute, value)) {
                _this.attributes[attribute] = value;
                anythingChanged = true;
                if (options == null || !options.silent) {
                    _this.attributeHasChangedEvent(attribute);
                }
            }
        });
        if (anythingChanged && (options == null || !options.silent)) {
            this.attributesHasChangedEvent();
            this.anyEvent();
        }
    };
    /**
     * Sets a new default value to a single specific attribute.</br>
     * Note: specifying a new attribute default value does not set the attribute to that value. This can be done using the {@link setDefault} method.
     * @param attribute
     * the specific attribute whose default value is to be changed.
     * @param value
     * the new intended default value.
     * @param options
     * if the `customAttribute` option is set to `true`, the method will not validate whether the attribute is registered or not.
     */
    Model.prototype.setNewDefault = function (attribute, value, options) {
        if (!options || !options.customAttribute) {
            this.checkIfAttributeExists(attribute);
        }
        this.defaultAttributes[attribute] = value;
    };
    /**
     * Sets a single specific attribute to its default value.</br>
     * Note: this method calls the {@link setMultiple} method without specifying any option.
     * @param attribute
     * the specific attribute whose value is to be set to its default value.
     */
    Model.prototype.setDefault = function (attribute) {
        this.set(attribute, this.defaultAttributes[attribute]);
    };
    /**
     * Gets the value of a single specific attribute.</br>
     * If no attribute is specified, the method instead returns an object containing all registered attribute key-values.
     * @param attribute
     * the specific attribute whose value should be returned.
     * @returns {any}
     */
    Model.prototype.get = function (attribute) {
        if (attribute == undefined) {
            return this.attributes;
        }
        else {
            return this.attributes[attribute];
        }
    };
    /**
     * Gets the default value of a single specific attribute.</br>
     * If no attribute is specified, the method instead returns an object containing all registered attribute key-default values.
     * @param attribute
     * the specific attribute whose default value should be returned.
     * @returns {any}
     */
    Model.prototype.getDefault = function (attribute) {
        if (attribute == undefined) {
            return this.defaultAttributes;
        }
        else {
            return this.defaultAttributes[attribute];
        }
    };
    /**
     * Resets each registered attribute to its default value.</br>
     * Note: this method calls the {@link setMultiple} method without specifying any options.</br>
     * After the `setMultiple` call has returned, this method triggers the `reset` event.
     */
    Model.prototype.reset = function () {
        this.setMultiple(this.defaultAttributes);
        this.modelWasResetEvent();
    };
    /**
     * Registers a new attribute key-value.
     * @param attribute
     * the name of the new attribute to register.
     * @param defaultValue
     * the newly registered attribute default value.
     */
    Model.prototype.registerNewAttribute = function (attribute, defaultValue) {
        this.defaultAttributes[attribute] = defaultValue;
        this.attributes[attribute] = defaultValue;
    };
    /**
     * Gets a string displaying the event namespace followed by the specific event name. The returned string is formatted thus:</br>
     * `[eventNameSpace]:[eventName]`
     * @example `getEventName("reset");` could return `"state:reset"`.
     * @param event
     * the event name.
     * @returns {string}
     */
    Model.prototype.getEventName = function (event) {
        return this.eventNameSpace + ':' + event;
    };
    Model.prototype.attributesHasChangedEvent = function () {
        Dom_1.$$(this.element).trigger(this.getEventName(Model.eventTypes.change), this.createAttributesChangedArgument());
    };
    Model.prototype.attributeHasChangedEvent = function (attr) {
        Dom_1.$$(this.element).trigger(this.getEventName(Model.eventTypes.changeOne) + attr, this.createAttributeChangedArgument(attr));
    };
    Model.prototype.preprocessEvent = function (attributes) {
        Dom_1.$$(this.element).trigger(this.getEventName(Model.eventTypes.preprocess), attributes);
    };
    Model.prototype.modelWasResetEvent = function () {
        Dom_1.$$(this.element).trigger(this.getEventName(Model.eventTypes.reset), this.createModelChangedArgument());
    };
    Model.prototype.anyEvent = function () {
        Dom_1.$$(this.element).trigger(this.getEventName(Model.eventTypes.all), this.createModelChangedArgument());
    };
    Model.prototype.createAttributeChangedArgument = function (attribute) {
        return { attribute: attribute, value: this.attributes[attribute] };
    };
    Model.prototype.createAttributesChangedArgument = function () {
        return { attributes: this.attributes };
    };
    Model.prototype.createModelChangedArgument = function () {
        return { model: this };
    };
    Model.prototype.checkIfAttributeExists = function (attribute) {
        Assert_1.Assert.check(_.has(this.attributes, attribute), "The attribute " + attribute + " is not registered.");
    };
    Model.prototype.typeIsValid = function (attribute, value) {
        if (!Utils_1.Utils.isNullOrUndefined(this.attributes[attribute]) && !Utils_1.Utils.isUndefined(value)) {
            if (_.isNumber(this.attributes[attribute])) {
                return this.validateNumber(attribute, value);
            }
            else if (_.isBoolean(this.attributes[attribute])) {
                return this.validateBoolean(attribute, value);
            }
            else {
                return this.validateOther(attribute, value);
            }
        }
        return true;
    };
    Model.prototype.validateNumber = function (attribute, value) {
        if (!_.isNumber(value) || isNaN(value)) {
            this.logger.error("Non-matching type for " + attribute + ". Expected number and got " + value);
            return false;
        }
        return true;
    };
    Model.prototype.validateBoolean = function (attribute, value) {
        if (!_.isBoolean(value) && !Utils_1.Utils.parseBooleanIfNotUndefined(value) !== undefined) {
            this.logger.error("Non matching type for " + attribute + ". Expected boolean and got " + value);
            return false;
        }
        return true;
    };
    Model.prototype.validateOther = function (attribute, value) {
        if (!Utils_1.Utils.isNullOrUndefined(this.defaultAttributes[attribute])) {
            if (typeof value !== typeof this.defaultAttributes[attribute]) {
                this.logger.error("Non-matching type for " + attribute + ". Expected " + typeof this.defaultAttributes[attribute] + " and got " + value);
                return false;
            }
        }
        return true;
    };
    Model.prototype.parseToCorrectType = function (attribute, value) {
        if (_.isNumber(this.attributes[attribute])) {
            return parseInt(value, 10);
        }
        else if (_.isBoolean(this.attributes[attribute])) {
            if (_.isBoolean(value)) {
                return value;
            }
            else {
                return Utils_1.Utils.parseBooleanIfNotUndefined(value);
            }
        }
        return value;
    };
    Model.prototype.checkIfAttributeChanged = function (attribute, newValue) {
        var oldValue = this.attributes[attribute];
        if (_.isNumber(oldValue) || _.isString(oldValue) || _.isBoolean(oldValue)) {
            return oldValue !== newValue;
        }
        if (_.isArray(oldValue)) {
            return !Utils_1.Utils.arrayEqual(oldValue, newValue);
        }
        if (_.isObject(oldValue)) {
            return !Utils_1.Utils.objectEqual(oldValue, newValue);
        }
        return true;
    };
    Model.prototype.debugInfo = function () {
        return null;
    };
    /**
     * The event types that can be triggered:<br/>
     * • `preprocess`: triggered before a value is set on an attribute. This allows the value to be modified before it is set.<br/>
     * • `changeOne`: triggered when a single value changes.</br>
     * • `change`: triggered when one or many values change.</br>
     * • `reset`: triggered when all attributes are reset to their default values. </br>
     * • `all`: triggered after the `change` event.</br>
     * @type {{preprocess: string, changeOne: string, change: string, reset: string, all: string}}
     */
    Model.eventTypes = {
        preprocess: 'preprocess',
        changeOne: 'change:',
        change: 'change',
        reset: 'reset',
        all: 'all'
    };
    return Model;
}(BaseComponent_1.BaseComponent));
exports.Model = Model;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var SearchEndpoint_1 = __webpack_require__(41);
var ComponentOptions_1 = __webpack_require__(7);
var Dom_1 = __webpack_require__(2);
var Assert_1 = __webpack_require__(5);
var QueryStateModel_1 = __webpack_require__(12);
var ComponentStateModel_1 = __webpack_require__(59);
var ComponentOptionsModel_1 = __webpack_require__(24);
var QueryController_1 = __webpack_require__(33);
var Model_1 = __webpack_require__(16);
var QueryEvents_1 = __webpack_require__(10);
var StandaloneSearchInterfaceEvents_1 = __webpack_require__(67);
var HistoryController_1 = __webpack_require__(114);
var LocalStorageHistoryController_1 = __webpack_require__(115);
var InitializationEvents_1 = __webpack_require__(15);
var NoopAnalyticsClient_1 = __webpack_require__(72);
var Utils_1 = __webpack_require__(4);
var RootComponent_1 = __webpack_require__(34);
var BaseComponent_1 = __webpack_require__(27);
var HashUtils_1 = __webpack_require__(36);
var SentryLogger_1 = __webpack_require__(271);
var AnalyticsActionListMeta_1 = __webpack_require__(9);
var ResponsiveComponents_1 = __webpack_require__(40);
var InitializationPlaceholder_1 = __webpack_require__(133);
var Debug_1 = __webpack_require__(118);
var FacetValueStateHandler_1 = __webpack_require__(277);
var fastclick = __webpack_require__(278);
var jstz = __webpack_require__(279);
__webpack_require__(282);
__webpack_require__(283);
__webpack_require__(284);
__webpack_require__(285);
var underscore_1 = __webpack_require__(0);
var FacetColumnAutoLayoutAdjustment_1 = __webpack_require__(286);
/**
 * The SearchInterface component is the root and main component of your Coveo search interface. You should place all
 * other Coveo components inside the SearchInterface component.
 *
 * It is also on the HTMLElement of the SearchInterface component that you call the {@link init} function.
 *
 * It is advisable to specify a unique HTML `id` attribute for the SearchInterface component in order to be able to
 * reference it easily.
 *
 * **Example:**
 *
 * ```html
 * <head>
 *
 * [ ... ]
 *
 * <script>
 *   document.addEventListener('DOMContentLoaded', function() {
 *
 *     [ ... ]
 *     // The init function is called on the SearchInterface element, in this case, the body of the page.
 *     Coveo.init(document.body);
 *
 *     [ ... ]
 *
 *     });
 * </script>
 *
 * [ ... ]
 * </head>
 *
 * <!-- Specifying a unique HTML id attribute for the SearchInterface component is good practice. -->
 * <body id='search' class='CoveoSearchInterface' [ ... other options ... ]>
 *
 *   [ ... ]
 *
 *   <!-- You should place all other Coveo components here, inside the SearchInterface component. -->
 *
 *   [ ... ]
 *
 * </body>
 * ```
 */
var SearchInterface = /** @class */ (function (_super) {
    __extends(SearchInterface, _super);
    /**
     * Creates a new SearchInterface. Initialize various singletons for the interface (e.g., usage analytics, query
     * controller, state model, etc.). Binds events related to the query.
     * @param element The HTMLElement on which to instantiate the component. This cannot be an `HTMLInputElement` for
     * technical reasons.
     * @param options The options for the SearchInterface.
     * @param analyticsOptions The options for the {@link Analytics} component. Since the Analytics component is normally
     * global, it needs to be passed at initialization of the whole interface.
     * @param _window The window object for the search interface. Used for unit tests, which can pass a mock. Default is
     * the global window object.
     */
    function SearchInterface(element, options, analyticsOptions, _window) {
        if (_window === void 0) { _window = window; }
        var _this = _super.call(this, element, SearchInterface.ID) || this;
        _this.element = element;
        _this.options = options;
        _this.analyticsOptions = analyticsOptions;
        _this._window = _window;
        _this.isResultsPerPageModifiedByPipeline = false;
        _this.options = ComponentOptions_1.ComponentOptions.initComponentOptions(element, SearchInterface, options);
        Assert_1.Assert.exists(element);
        Assert_1.Assert.exists(_this.options);
        _this.root = element;
        if (_this.options.allowQueriesWithoutKeywords) {
            _this.initializeEmptyQueryAllowed();
        }
        else {
            _this.initializeEmptyQueryNotAllowed();
        }
        // The definition file for fastclick does not match the way that fast click gets loaded (AMD)
        if (fastclick.attach) {
            fastclick.attach(element);
        }
        _this.queryStateModel = new QueryStateModel_1.QueryStateModel(element);
        _this.componentStateModel = new ComponentStateModel_1.ComponentStateModel(element);
        _this.componentOptionsModel = new ComponentOptionsModel_1.ComponentOptionsModel(element);
        _this.usageAnalytics = _this.initializeAnalytics();
        _this.queryController = new QueryController_1.QueryController(element, _this.options, _this.usageAnalytics, _this);
        _this.facetValueStateHandler = new FacetValueStateHandler_1.FacetValueStateHandler(function (componentId) { return _this.getComponents(componentId); });
        new SentryLogger_1.SentryLogger(_this.queryController);
        var eventName = _this.queryStateModel.getEventName(Model_1.Model.eventTypes.preprocess);
        Dom_1.$$(_this.element).on(eventName, function (e, args) { return _this.handlePreprocessQueryStateModel(args); });
        Dom_1.$$(_this.element).on(QueryEvents_1.QueryEvents.buildingQuery, function (e, args) { return _this.handleBuildingQuery(args); });
        Dom_1.$$(_this.element).on(QueryEvents_1.QueryEvents.querySuccess, function (e, args) { return _this.handleQuerySuccess(args); });
        Dom_1.$$(_this.element).on(QueryEvents_1.QueryEvents.queryError, function (e, args) { return _this.handleQueryError(args); });
        Dom_1.$$(_this.element).on(InitializationEvents_1.InitializationEvents.afterComponentsInitialization, function () { return _this.handleAfterComponentsInitialization(); });
        var debugChanged = _this.queryStateModel.getEventName(Model_1.Model.eventTypes.changeOne + QueryStateModel_1.QueryStateModel.attributesEnum.debug);
        Dom_1.$$(_this.element).on(debugChanged, function (e, args) { return _this.handleDebugModeChange(args); });
        _this.queryStateModel.registerNewAttribute(QueryStateModel_1.QueryStateModel.attributesEnum.fv, {});
        if (_this.options.enableHistory) {
            if (!_this.options.useLocalStorageForHistory) {
                _this.initializeHistoryController();
            }
            else {
                new LocalStorageHistoryController_1.LocalStorageHistoryController(element, _window, _this.queryStateModel, _this.queryController);
            }
        }
        else {
            Dom_1.$$(_this.element).on(InitializationEvents_1.InitializationEvents.restoreHistoryState, function () {
                return _this.queryStateModel.setMultiple(__assign({}, _this.queryStateModel.defaultAttributes));
            });
        }
        var eventNameQuickview = _this.queryStateModel.getEventName(Model_1.Model.eventTypes.changeOne + QueryStateModel_1.QueryStateModel.attributesEnum.quickview);
        Dom_1.$$(_this.element).on(eventNameQuickview, function (e, args) { return _this.handleQuickviewChanged(args); });
        _this.element.style.display = element.style.display || 'block';
        _this.setupDebugInfo();
        _this.responsiveComponents = new ResponsiveComponents_1.ResponsiveComponents();
        return _this;
    }
    Object.defineProperty(SearchInterface.prototype, "resultsPerPage", {
        get: function () {
            if (this.queryPipelineConfigurationForResultsPerPage != null && this.queryPipelineConfigurationForResultsPerPage != 0) {
                return this.queryPipelineConfigurationForResultsPerPage;
            }
            if (this.queryController.options.resultsPerPage != null && this.queryController.options.resultsPerPage != 0) {
                return this.queryController.options.resultsPerPage;
            }
            // Things would get weird if somehow the number of results per page was set to 0 or not available.
            // Specially for the pager component. As such, we try to cover that corner case.
            this.logger.warn('Results per page is incoherent in the search interface.', this);
            return 10;
        },
        set: function (resultsPerPage) {
            this.options.resultsPerPage = this.queryController.options.resultsPerPage = resultsPerPage;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Attaches a component to the search interface. This allows the search interface to easily list and iterate over its
     * components.
     * @param type Normally, the component type is a unique identifier without the `Coveo` prefix (e.g., `CoveoFacet` ->
     * `Facet`, `CoveoPager` -> `Pager`, `CoveoQuerybox` -> `Querybox`, etc.).
     * @param component The component instance to attach.
     */
    SearchInterface.prototype.attachComponent = function (type, component) {
        this.getComponents(type).push(component);
    };
    /**
     * Detaches a component from the search interface.
     * @param type Normally, the component type is a unique identifier without the `Coveo` prefix (e.g., `CoveoFacet` ->
     * `Facet`, `CoveoPager` -> `Pager`, `CoveoQuerybox` -> `Querybox`, etc.).
     * @param component The component instance to detach.
     */
    SearchInterface.prototype.detachComponent = function (type, component) {
        var components = this.getComponents(type);
        var index = underscore_1.indexOf(components, component);
        if (index > -1) {
            components.splice(index, 1);
        }
    };
    /**
     * Returns the bindings, or environment, for the current component.
     * @returns {IComponentBindings}
     */
    SearchInterface.prototype.getBindings = function () {
        return {
            root: this.root,
            queryStateModel: this.queryStateModel,
            queryController: this.queryController,
            searchInterface: this,
            componentStateModel: this.componentStateModel,
            componentOptionsModel: this.componentOptionsModel,
            usageAnalytics: this.usageAnalytics
        };
    };
    /**
     * Gets the query context for the current search interface.
     *
     * If the search interface has performed at least one query, it will try to resolve the context from the last query sent to the Coveo Search API.
     *
     * If the search interface has not performed a query yet, it will try to resolve the context from any avaiable {@link PipelineContext} component.
     *
     * If multiple {@link PipelineContext} components are available, it will merge all context values together.
     *
     * **Note:**
     * Having multiple PipelineContext components in the same search interface is not recommended, especially if some context keys are repeated across those components.
     *
     * If no context is found, returns `undefined`
     */
    SearchInterface.prototype.getQueryContext = function () {
        var ret;
        var lastQuery = this.queryController.getLastQuery();
        if (lastQuery.context) {
            ret = lastQuery.context;
        }
        else {
            var pipelines = this.getComponents('PipelineContext');
            if (pipelines && !underscore_1.isEmpty(pipelines)) {
                var contextMerged = underscore_1.chain(pipelines)
                    .map(function (pipeline) { return pipeline.getContext(); })
                    .reduce(function (memo, context) { return (__assign({}, memo, context)); }, {})
                    .value();
                if (!underscore_1.isEmpty(contextMerged)) {
                    ret = contextMerged;
                }
            }
        }
        return ret;
    };
    /**
     * Gets all the components of a given type.
     * @param type Normally, the component type is a unique identifier without the `Coveo` prefix (e.g., `CoveoFacet` ->
     * `Facet`, `CoveoPager` -> `Pager`, `CoveoQuerybox` -> `Querybox`, etc.).
     */
    SearchInterface.prototype.getComponents = function (type) {
        if (this.attachedComponents == null) {
            this.attachedComponents = {};
        }
        if (!(type in this.attachedComponents)) {
            this.attachedComponents[type] = [];
        }
        return this.attachedComponents[type];
    };
    SearchInterface.prototype.initializeAnalytics = function () {
        var analyticsRef = BaseComponent_1.BaseComponent.getComponentRef('Analytics');
        if (analyticsRef) {
            return analyticsRef.create(this.element, this.analyticsOptions, this.getBindings());
        }
        return new NoopAnalyticsClient_1.NoopAnalyticsClient();
    };
    SearchInterface.prototype.handleDebugModeChange = function (args) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                if (args.value && !this.relevanceInspector && this.options.enableDebugInfo) {
                    __webpack_require__.e/* require.ensure */(0).then((function () {
                        var loadedModule = __webpack_require__(159);
                        var relevanceInspectorCtor = loadedModule.RelevanceInspector;
                        var relevanceInspectorElement = Dom_1.$$('btn');
                        Dom_1.$$(_this.element).prepend(relevanceInspectorElement.el);
                        _this.relevanceInspector = new relevanceInspectorCtor(relevanceInspectorElement.el, _this.getBindings());
                    }).bind(null, __webpack_require__)).catch(null);
                }
                return [2 /*return*/];
            });
        });
    };
    SearchInterface.prototype.initializeHistoryController = function () {
        new HistoryController_1.HistoryController(this.element, window, this.queryStateModel, this.queryController, this.usageAnalytics);
    };
    SearchInterface.prototype.setupDebugInfo = function () {
        var _this = this;
        if (this.options.enableDebugInfo) {
            setTimeout(function () { return new Debug_1.Debug(_this.element, _this.getBindings()); });
        }
    };
    SearchInterface.prototype.handlePreprocessQueryStateModel = function (args) {
        var tgFromModel = this.queryStateModel.get(QueryStateModel_1.QueryStateModel.attributesEnum.tg);
        var tFromModel = this.queryStateModel.get(QueryStateModel_1.QueryStateModel.attributesEnum.t);
        var tg = tgFromModel;
        var t = tFromModel;
        // if you want to set the tab group
        if (args && args.tg !== undefined) {
            args.tg = this.getTabGroupId(args.tg);
            if (tg != args.tg) {
                args.t = args.t || QueryStateModel_1.QueryStateModel.defaultAttributes.t;
                args.sort = args.sort || QueryStateModel_1.QueryStateModel.defaultAttributes.sort;
                tg = args.tg;
            }
        }
        if (args && args.t !== undefined) {
            args.t = this.getTabId(tg, args.t);
            if (t != args.t) {
                args.sort = args.sort || QueryStateModel_1.QueryStateModel.defaultAttributes.sort;
                t = args.t;
            }
        }
        if (args && args.sort !== undefined) {
            args.sort = this.getSort(t, args.sort);
        }
        if (args && args.quickview !== undefined) {
            args.quickview = this.getQuickview(args.quickview);
        }
        // `fv:` states are intended to be redirected and used on a standard Search Interface,
        // else the state gets transformed to `hd` before the redirection.
        if (args && args.fv && !(this instanceof StandaloneSearchInterface)) {
            this.facetValueStateHandler.handleFacetValueState(args);
        }
    };
    SearchInterface.prototype.getTabGroupId = function (tabGroupId) {
        var tabGroupRef = BaseComponent_1.BaseComponent.getComponentRef('TabGroup');
        if (tabGroupRef) {
            var tabGroups = this.getComponents(tabGroupRef.ID);
            // check if the tabgroup is correct
            if (tabGroupId != QueryStateModel_1.QueryStateModel.defaultAttributes.tg &&
                underscore_1.any(tabGroups, function (tabGroup) { return !tabGroup.disabled && tabGroupId == tabGroup.options.id; })) {
                return tabGroupId;
            }
            // select the first tabGroup
            if (tabGroups.length > 0) {
                return tabGroups[0].options.id;
            }
        }
        return QueryStateModel_1.QueryStateModel.defaultAttributes.tg;
    };
    SearchInterface.prototype.getTabId = function (tabGroupId, tabId) {
        var tabRef = BaseComponent_1.BaseComponent.getComponentRef('Tab');
        var tabGroupRef = BaseComponent_1.BaseComponent.getComponentRef('TabGroup');
        if (tabRef) {
            var tabs = this.getComponents(tabRef.ID);
            if (tabGroupRef) {
                // if has a tabGroup
                if (tabGroupId != QueryStateModel_1.QueryStateModel.defaultAttributes.tg) {
                    var tabGroups = this.getComponents(tabGroupRef.ID);
                    var tabGroup_1 = underscore_1.find(tabGroups, function (tabGroup) { return tabGroupId == tabGroup.options.id; });
                    // check if the tabgroup contain this tab
                    if (tabId != QueryStateModel_1.QueryStateModel.defaultAttributes.t &&
                        underscore_1.any(tabs, function (tab) { return tabId == tab.options.id && tabGroup_1.isElementIncludedInTabGroup(tab.element); })) {
                        return tabId;
                    }
                    // select the first tab in the tabGroup
                    var tab = underscore_1.find(tabs, function (tab) { return tabGroup_1.isElementIncludedInTabGroup(tab.element); });
                    if (tab != null) {
                        return tab.options.id;
                    }
                    return QueryStateModel_1.QueryStateModel.defaultAttributes.t;
                }
            }
            // check if the tab is correct
            if (tabId != QueryStateModel_1.QueryStateModel.defaultAttributes.t && underscore_1.any(tabs, function (tab) { return tabId == tab.options.id; })) {
                return tabId;
            }
            // select the first tab
            if (tabs.length > 0) {
                return tabs[0].options.id;
            }
        }
        return QueryStateModel_1.QueryStateModel.defaultAttributes.t;
    };
    SearchInterface.prototype.getSort = function (tabId, sortId) {
        var sortRef = BaseComponent_1.BaseComponent.getComponentRef('Sort');
        if (sortRef) {
            var sorts = this.getComponents(sortRef.ID);
            // if has a selected tab
            var tabRef = BaseComponent_1.BaseComponent.getComponentRef('Tab');
            if (tabRef) {
                if (tabId != QueryStateModel_1.QueryStateModel.defaultAttributes.t) {
                    var tabs = this.getComponents(tabRef.ID);
                    var tab_1 = underscore_1.find(tabs, function (tab) { return tabId == tab.options.id; });
                    var sortCriteria = tab_1.options.sort;
                    // check if the tab contain this sort
                    if (sortId != QueryStateModel_1.QueryStateModel.defaultAttributes.sort &&
                        underscore_1.any(sorts, function (sort) { return tab_1.isElementIncludedInTab(sort.element) && sort.match(sortId); })) {
                        return sortId;
                    }
                    else if (sortCriteria != null) {
                        // if not and tab.options.sort is set apply it
                        return sortCriteria.toString();
                    }
                    // select the first sort in the tab
                    var sort = underscore_1.find(sorts, function (sort) { return tab_1.isElementIncludedInTab(sort.element); });
                    if (sort != null) {
                        return sort.options.sortCriteria[0].toString();
                    }
                    return QueryStateModel_1.QueryStateModel.defaultAttributes.sort;
                }
            }
            // check if the sort is correct
            if (sortId != QueryStateModel_1.QueryStateModel.defaultAttributes.sort && underscore_1.any(sorts, function (sort) { return sort.match(sortId); })) {
                return sortId;
            }
            // select the first sort
            if (sorts.length > 0) {
                return sorts[0].options.sortCriteria[0].toString();
            }
        }
        return QueryStateModel_1.QueryStateModel.defaultAttributes.sort;
    };
    SearchInterface.prototype.getQuickview = function (quickviewId) {
        var quickviewRef = BaseComponent_1.BaseComponent.getComponentRef('Quickview');
        if (quickviewRef) {
            var quickviews = this.getComponents(quickviewRef.ID);
            if (underscore_1.any(quickviews, function (quickview) { return quickview.getHashId() == quickviewId; })) {
                return quickviewId;
            }
        }
        return QueryStateModel_1.QueryStateModel.defaultAttributes.quickview;
    };
    SearchInterface.prototype.handleQuickviewChanged = function (args) {
        var quickviewRef = BaseComponent_1.BaseComponent.getComponentRef('Quickview');
        if (quickviewRef) {
            var quickviews = this.getComponents(quickviewRef.ID);
            if (args.value != '') {
                var quickviewsPartition = underscore_1.partition(quickviews, function (quickview) { return quickview.getHashId() == args.value; });
                if (quickviewsPartition[0].length != 0) {
                    underscore_1.first(quickviewsPartition[0]).open();
                    underscore_1.each(underscore_1.tail(quickviewsPartition[0]), function (quickview) { return quickview.close(); });
                }
                underscore_1.each(quickviewsPartition[1], function (quickview) { return quickview.close(); });
            }
            else {
                underscore_1.each(quickviews, function (quickview) {
                    quickview.close();
                });
            }
        }
    };
    SearchInterface.prototype.handleBuildingQuery = function (data) {
        if (this.options.enableDuplicateFiltering) {
            data.queryBuilder.enableDuplicateFiltering = true;
        }
        if (!Utils_1.Utils.isNullOrUndefined(this.options.pipeline)) {
            data.queryBuilder.pipeline = this.options.pipeline;
        }
        if (!Utils_1.Utils.isNullOrUndefined(this.options.maximumAge)) {
            data.queryBuilder.maximumAge = this.options.maximumAge;
        }
        if (!Utils_1.Utils.isNullOrUndefined(this.options.resultsPerPage)) {
            data.queryBuilder.numberOfResults = this.options.resultsPerPage;
        }
        if (!Utils_1.Utils.isNullOrUndefined(this.options.excerptLength)) {
            data.queryBuilder.excerptLength = this.options.excerptLength;
        }
        if (Utils_1.Utils.isNonEmptyString(this.options.expression)) {
            data.queryBuilder.constantExpression.add(this.options.expression);
        }
        if (Utils_1.Utils.isNonEmptyString(this.options.filterField)) {
            data.queryBuilder.filterField = this.options.filterField;
        }
        if (Utils_1.Utils.isNonEmptyString(this.options.timezone)) {
            data.queryBuilder.timezone = this.options.timezone;
        }
        data.queryBuilder.enableCollaborativeRating = this.options.enableCollaborativeRating;
        data.queryBuilder.enableDuplicateFiltering = this.options.enableDuplicateFiltering;
        data.queryBuilder.allowQueriesWithoutKeywords = this.options.allowQueriesWithoutKeywords;
        var endpoint = this.queryController.getEndpoint();
        if (endpoint != null && endpoint.options) {
            if (this.queryStateModel.get(QueryStateModel_1.QueryStateModel.attributesEnum.debug)) {
                data.queryBuilder.maximumAge = 0;
                data.queryBuilder.enableDebug = true;
                data.queryBuilder.fieldsToExclude = ['allmetadatavalues'];
                data.queryBuilder.fieldsToInclude = null;
            }
        }
    };
    SearchInterface.prototype.handleQuerySuccess = function (data) {
        var noResults = data.results.results.length == 0;
        this.toggleSectionState('coveo-no-results', noResults);
        this.handlePossiblyModifiedNumberOfResultsInQueryPipeline(data);
        var resultsHeader = Dom_1.$$(this.element).find('.coveo-results-header');
        if (resultsHeader) {
            Dom_1.$$(resultsHeader).removeClass('coveo-query-error');
        }
    };
    SearchInterface.prototype.handlePossiblyModifiedNumberOfResultsInQueryPipeline = function (data) {
        if (!data || !data.query || !data.results) {
            return;
        }
        var numberOfRequestedResults = data.query.numberOfResults;
        var numberOfResultsActuallyReturned = data.results.results.length;
        var moreResultsAvailable = data.results.totalCountFiltered > numberOfResultsActuallyReturned;
        if (numberOfRequestedResults != numberOfResultsActuallyReturned && moreResultsAvailable) {
            this.isResultsPerPageModifiedByPipeline = true;
            this.queryPipelineConfigurationForResultsPerPage = numberOfResultsActuallyReturned;
        }
        else {
            this.isResultsPerPageModifiedByPipeline = false;
            this.queryPipelineConfigurationForResultsPerPage = null;
        }
    };
    SearchInterface.prototype.handleQueryError = function (data) {
        this.toggleSectionState('coveo-no-results');
        var resultsHeader = Dom_1.$$(this.element).find('.coveo-results-header');
        if (resultsHeader) {
            Dom_1.$$(resultsHeader).addClass('coveo-query-error');
        }
    };
    SearchInterface.prototype.handleAfterComponentsInitialization = function () {
        var _this = this;
        underscore_1.each(this.attachedComponents, function (components) {
            components.forEach(function (component) {
                if (FacetColumnAutoLayoutAdjustment_1.FacetColumnAutoLayoutAdjustment.isAutoLayoutAdjustable(component)) {
                    FacetColumnAutoLayoutAdjustment_1.FacetColumnAutoLayoutAdjustment.initializeAutoLayoutAdjustment(_this.element, component);
                }
            });
        });
    };
    SearchInterface.prototype.toggleSectionState = function (cssClass, toggle) {
        var _this = this;
        if (toggle === void 0) { toggle = true; }
        var facetSection = Dom_1.$$(this.element).find('.coveo-facet-column');
        var resultsSection = Dom_1.$$(this.element).find('.coveo-results-column');
        var resultsHeader = Dom_1.$$(this.element).find('.coveo-results-header');
        var facetSearchs = Dom_1.$$(this.element).findAll('.coveo-facet-search-results');
        var recommendationSection = Dom_1.$$(this.element).find('.coveo-recommendation-main-section');
        if (facetSection) {
            Dom_1.$$(facetSection).toggleClass(cssClass, toggle && !this.queryStateModel.atLeastOneFacetIsActive());
        }
        if (resultsSection) {
            Dom_1.$$(resultsSection).toggleClass(cssClass, toggle && !this.queryStateModel.atLeastOneFacetIsActive());
        }
        if (resultsHeader) {
            Dom_1.$$(resultsHeader).toggleClass(cssClass, toggle && !this.queryStateModel.atLeastOneFacetIsActive());
        }
        if (recommendationSection) {
            Dom_1.$$(recommendationSection).toggleClass(cssClass, toggle);
        }
        if (facetSearchs && facetSearchs.length > 0) {
            underscore_1.each(facetSearchs, function (facetSearch) {
                Dom_1.$$(facetSearch).toggleClass(cssClass, toggle && !_this.queryStateModel.atLeastOneFacetIsActive());
            });
        }
    };
    SearchInterface.prototype.initializeEmptyQueryAllowed = function () {
        new InitializationPlaceholder_1.InitializationPlaceholder(this.element).withFullInitializationStyling().withAllPlaceholders();
    };
    SearchInterface.prototype.initializeEmptyQueryNotAllowed = function () {
        var _this = this;
        var placeholder = new InitializationPlaceholder_1.InitializationPlaceholder(this.element)
            .withEventToRemovePlaceholder(QueryEvents_1.QueryEvents.newQuery)
            .withFullInitializationStyling()
            .withHiddenRootElement()
            .withPlaceholderForFacets()
            .withPlaceholderForResultList();
        Dom_1.$$(this.root).on(InitializationEvents_1.InitializationEvents.restoreHistoryState, function () {
            placeholder.withVisibleRootElement();
            if (_this.queryStateModel.get('q') == '') {
                placeholder.withWaitingForFirstQueryMode();
            }
        });
        Dom_1.$$(this.element).on(QueryEvents_1.QueryEvents.doneBuildingQuery, function (e, args) {
            if (!args.queryBuilder.containsEndUserKeywords()) {
                _this.logger.info('Query cancelled by the Search Interface', 'Configuration does not allow empty query', _this, _this.options);
                args.cancel = true;
            }
        });
    };
    SearchInterface.ID = 'SearchInterface';
    /**
     * The options for the search interface
     * @componentOptions
     */
    SearchInterface.options = {
        /**
         * Specifies whether to allow the end user to navigate search history using the **Back** and **Forward** buttons
         * of the browser.
         *
         * If this options is `true`, the SearchInterface component saves the state of the current query in the hash portion
         * of the URL when the user submits the query.
         *
         * **Example:**
         * > If the `enableHistory` option is `true` and the current query is `foobar`, the SearchInterface component
         * > saves `q=foobar` in the URL hash when the user submits the query.
         *
         * Default value is `false`.
         */
        enableHistory: ComponentOptions_1.ComponentOptions.buildBooleanOption({ defaultValue: false }),
        /**
         * Specifies whether to enable automatic responsive mode (i.e., automatically placing {@link Facet} and {@link Tab}
         * components in dropdown menus under the search box when the width of the SearchInterface HTML element reaches or
         * falls behind a certain pixel threshold).
         *
         * You might want to set this option to `false` if automatic responsive mode does not suit the specific design needs
         * of your implementation.
         *
         * **Note:**
         *
         * > If this option is `true`, you can also specify whether to enable responsive mode for Facet components (see
         * > {@link Facet.options.enableResponsiveMode}) and for Tab components (see
         * > {@link Tab.options.enableResponsiveMode}).
         * >
         * > In addition, you can specify the label you wish to display on the dropdown buttons (see
         * > {@link Facet.options.dropdownHeaderLabel} and {@link Tab.options.dropdownHeaderLabel}).
         *
         * Default value is `true`.
         */
        enableAutomaticResponsiveMode: ComponentOptions_1.ComponentOptions.buildBooleanOption({ defaultValue: true }),
        /**
         * Specifies whether to save the interface state in the local storage of the browser.
         *
         * You might want to set this option to `true` for reasons specifically important for your implementation.
         *
         * Default value is `false`.
         */
        useLocalStorageForHistory: ComponentOptions_1.ComponentOptions.buildBooleanOption({ defaultValue: false }),
        /**
         * Specifies the number of results to display on each page.
         *
         * For more advanced features, see the {@link ResultsPerPage} component.
         *
         * **Note:**
         *
         * > When the {@link ResultsPerPage} component is present in the page, this option gets overridden and is useless.
         *
         * Default value is `10`. Minimum value is `0`.
         */
        resultsPerPage: ComponentOptions_1.ComponentOptions.buildNumberOption({ defaultValue: 10, min: 0 }),
        /**
         * Specifies the number of characters to get at query time to create an excerpt of the result.
         *
         * This setting is global and cannot be modified on a per-result basis.
         *
         * See also the {@link Excerpt} component.
         *
         * Default value is `200`. Minimum value is `0`.
         */
        excerptLength: ComponentOptions_1.ComponentOptions.buildNumberOption({ defaultValue: 200, min: 0 }),
        /**
         * Specifies an expression to add to each query.
         *
         * You might want to use this options to add a global filter to your entire search interface that applies for all
         * tabs.
         *
         * You should not use this option to address security concerns (it is JavaScript, after all).
         *
         * **Note:**
         *
         * > It also is possible to set this option separately for each {@link Tab} component
         * > (see {@link Tab.options.expression}).
         *
         * Default value is `''`.
         */
        expression: ComponentOptions_1.ComponentOptions.buildStringOption({ defaultValue: '' }),
        /**
         * Specifies the name of a field to use as a custom filter when executing the query (also referred to as
         * "folding").
         *
         * Setting a value for this option causes the index to return only one result having any particular value inside the
         * filter field. Any other matching result is "folded" inside the childResults member of each JSON query result.
         *
         * This feature is typically useful with threaded conversations to include only one top-level result per
         * conversation. Thus, the field you specify for this option will typically be value unique to each thread that is
         * shared by all items (e.g., posts, emails, etc) in the thread.
         *
         * For more advanced features, see the {@link Folding} component.
         *
         * Default value is the empty string (`''`).
         */
        filterField: ComponentOptions_1.ComponentOptions.buildFieldOption({ defaultValue: '' }),
        /**
         * Specifies whether to display a loading animation before the first query successfully returns.
         *
         * **Note:**
         *
         * > If you do not set this options to `false`, the loading animation will still run until the first query
         * > successfully returns even if the [autoTriggerQuery]{@link SearchInterface.options.autoTriggerQuery} option is
         * `false`.
         *
         * See also the [firstLoadingAnimation]{@link SearchInterface.options.firstLoadingAnimation} option.
         *
         * Default value is `true`.
         *
         * @deprecated This option is exposed for legacy reasons. Since the
         * [July 2017 Release (v2.2900.23)](https://developers.coveo.com/x/gSMvAg), the loading animation is composed of
         * placeholders, making this option is obsolete.
         */
        hideUntilFirstQuery: ComponentOptions_1.ComponentOptions.buildBooleanOption({
            deprecated: 'Exposed for legacy reasons. The loading animation is now composed of placeholders, and this option is obsolete.'
        }),
        /**
         * Specifies the animation that you wish to display while your interface is loading.
         *
         * You can either specify the CSS selector of an HTML element that matches the default CSS class
         * (`coveo-first-loading-animation`), or add `-selector` to the markup attribute of this option to specify the CSS
         * selector of an HTML element that matches any CSS class.
         *
         * See also the [hideUntilFirstQuery]{@link SearchInterface.options.hideUntilFirstQuery} option.
         *
         * **Examples:**
         *
         * In this first case, the SearchInterface uses the HTML element whose `id` attribute is `MyAnimation` as the
         * loading animation only if the `class` attribute of this element also matches `coveo-first-loading-animation`.
         * Default loading animation CSS, which you can customize as you see fit, applies to this HTML element.
         * ```html
         * <div class='CoveoSearchInterface' data-first-loading-animation='#MyAnimation'>
         *   <div id='MyAnimation' class='coveo-first-loading-animation'>
         *     <!-- ... -->
         *   </div>
         *   <!-- ... -->
         * </div>
         * ```
         *
         * In this second case, the SearchInterface uses the HTML element whose `id` attribute is `MyAnimation` as the
         * loading animation no matter what CSS class it matches. However, if the `class` attribute of the HTML element does
         * not match `coveo-first-loading-animation`, no default loading animation CSS applies to this HTML element.
         * Normally, you should only use `data-first-loading-animation-selector` if you want to completely override the
         * default loading animation CSS.
         * ```html
         * <div class='CoveoSearchInterface' data-first-loading-animation-selector='#MyAnimation'>
         *   <div id='MyAnimation' class='my-custom-loading-animation-class'>
         *     <!-- ... -->
         *   </div>
         *   <!-- ... -->
         * </div>
         * ```
         *
         * By default, the loading animation is a Coveo CSS animation (which you can customize with CSS).
         *
         * @deprecated This option is exposed for legacy reasons. Since the
         * [July 2017 Release (v2.2900.23)](https://developers.coveo.com/x/gSMvAg), the loading animation is composed of
         * placeholders, making this option is obsolete.
         */
        firstLoadingAnimation: ComponentOptions_1.ComponentOptions.buildChildHtmlElementOption({
            deprecated: 'Exposed for legacy reasons. The loading animation is now composed of placeholder, and this options is obsolete.'
        }),
        /**
         * Specifies whether to trigger the first query automatically when the page finishes loading.
         *
         * Default value is `true`.
         */
        autoTriggerQuery: ComponentOptions_1.ComponentOptions.buildBooleanOption({ defaultValue: true }),
        /**
         * Specifies if the search interface should perform queries when no keywords are entered by the end user.
         *
         * When this option is set to true, the interface will initially only load with the search box, as long as you have a search box component in your interface.
         *
         * Once the user submits a query, the full search interface loads to display the results.
         *
         * When using the Coveo for Salesforce Free edition, this option is automatically set to false, and should not be changed.
         *
         * This option interacts closely with the {@link SearchInterface.options.autoTriggerQuery} option, as the automatic query is not triggered when there are no keywords.
         *
         * It also modifies the {@link IQuery.allowQueriesWithoutKeywords} query parameter.
         *
         * Default value is `true`
         * @notSupportedIn salesforcefree
         */
        allowQueriesWithoutKeywords: ComponentOptions_1.ComponentOptions.buildBooleanOption({ defaultValue: true }),
        endpoint: ComponentOptions_1.ComponentOptions.buildCustomOption(function (endpoint) { return (endpoint != null && endpoint in SearchEndpoint_1.SearchEndpoint.endpoints ? SearchEndpoint_1.SearchEndpoint.endpoints[endpoint] : null); }, { defaultFunction: function () { return SearchEndpoint_1.SearchEndpoint.endpoints['default']; } }),
        /**
         * Specifies the timezone in which the search interface is loaded. This allows the index to recognize some special
         * query syntax.
         *
         * This option must have a valid IANA zone info key (AKA the Olson time zone database) as its value.
         *
         * **Example:** `America/New_York`.
         *
         * By default, the search interface allows a library to try to detect the timezone automatically.
         */
        timezone: ComponentOptions_1.ComponentOptions.buildStringOption({ defaultFunction: function () { return jstz.determine().name(); } }),
        /**
         * Specifies whether to enable the feature that allows the end user to ALT + double click any result to open a debug
         * page with detailed information about all properties and fields for that result.
         *
         * Enabling this feature causes no security concern; the entire debug information is always visible to the end user
         * through the browser developer console or by calling the Coveo API directly.
         *
         * Default value is `true`.
         */
        enableDebugInfo: ComponentOptions_1.ComponentOptions.buildBooleanOption({ defaultValue: true }),
        /**
         * Specifies whether to enable collaborative rating, which you can leverage using the
         * [`ResultRating`]{@link ResultRating} component.
         *
         * Setting this option to `true` has no effect unless collaborative rating is also enabled on your Coveo index.
         *
         * Default value is `false`.
         */
        enableCollaborativeRating: ComponentOptions_1.ComponentOptions.buildBooleanOption({ defaultValue: false }),
        /**
         * Specifies whether to filter duplicates in the search results.
         *
         * Setting this option to `true` forces duplicates to not appear in search results. However, {@link Facet} counts
         * still include the duplicates, which can be confusing for the end user. This is a limitation of the index.
         *
         * **Example:**
         *
         * > The end user narrows a query down to a single item that has a duplicate. If the enableDuplicateFiltering
         * > option is `true`, then only one item appears in the search results while the Facet count is still 2.
         *
         * **Note:**
         *
         * > It also is possible to set this option separately for each {@link Tab} component
         * > (see {@link Tab.options.enableDuplicateFiltering}).
         *
         * Default value is `false`.
         */
        enableDuplicateFiltering: ComponentOptions_1.ComponentOptions.buildBooleanOption({ defaultValue: false }),
        /**
         * Specifies the name of the query pipeline to use for the queries.
         *
         * You can specify a value for this option if your index is in a Coveo Cloud organization in which pipelines have
         * been created (see [Managing Query Pipelines](http://www.coveo.com/go?dest=cloudhelp&lcid=9&context=128)).
         *
         * **Note:**
         *
         * > It also is possible to set this option separately for each {@link Tab} component
         * > (see {@link Tab.options.pipeline}).
         *
         * Default value is `undefined`, which means that the search interface uses the default pipeline.
         */
        pipeline: ComponentOptions_1.ComponentOptions.buildStringOption(),
        /**
         * Specifies the maximum age (in milliseconds) that cached query results can have to still be usable as results
         * instead of performing a new query on the index. The cache is located in the Coveo Search API (which resides
         * between the index and the search interface).
         *
         * If cached results that are older than the age you specify in this option are available, the framework will not
         * use these results; it will rather perform a new query on the index.
         *
         * On high-volume public web sites, specifying a higher value for this option can greatly improve query response
         * time at the cost of result freshness.
         *
         * **Note:**
         *
         * > It also is possible to set this option separately for each {@link Tab} component
         * > (see {@link Tab.options.maximumAge}).
         *
         * Default value is `undefined`, which means that the search interface lets the Coveo Search API determine the
         * maximum cache age. This is typically equivalent to 30 minutes (see
         * [Query Parameters - maximumAge](https://developers.coveo.com/x/iwEv#QueryParameters-maximumAge)).
         */
        maximumAge: ComponentOptions_1.ComponentOptions.buildNumberOption(),
        /**
         * Specifies the search page you wish to navigate to when instantiating a standalone search box interface.
         *
         * Default value is `undefined`, which means that the search interface does not redirect.
         */
        searchPageUri: ComponentOptions_1.ComponentOptions.buildStringOption()
    };
    SearchInterface.SMALL_INTERFACE_CLASS_NAME = 'coveo-small-search-interface';
    return SearchInterface;
}(RootComponent_1.RootComponent));
exports.SearchInterface = SearchInterface;
var StandaloneSearchInterface = /** @class */ (function (_super) {
    __extends(StandaloneSearchInterface, _super);
    function StandaloneSearchInterface(element, options, analyticsOptions, _window) {
        if (_window === void 0) { _window = window; }
        var _this = _super.call(this, element, ComponentOptions_1.ComponentOptions.initComponentOptions(element, StandaloneSearchInterface, options), analyticsOptions, _window) || this;
        _this.element = element;
        _this.options = options;
        _this.analyticsOptions = analyticsOptions;
        _this._window = _window;
        Dom_1.$$(_this.root).on(QueryEvents_1.QueryEvents.newQuery, function (e, args) { return _this.handleRedirect(e, args); });
        return _this;
    }
    StandaloneSearchInterface.prototype.handleRedirect = function (e, data) {
        if (data.shouldRedirectStandaloneSearchbox === false) {
            return;
        }
        var dataToSendOnBeforeRedirect = {
            searchPageUri: this.options.searchPageUri,
            cancel: false
        };
        Dom_1.$$(this.root).trigger(StandaloneSearchInterfaceEvents_1.StandaloneSearchInterfaceEvents.beforeRedirect, dataToSendOnBeforeRedirect);
        if (dataToSendOnBeforeRedirect.cancel) {
            return;
        }
        data.cancel = true;
        if (!this.searchboxIsEmpty() || this.options.redirectIfEmpty) {
            this.redirectToSearchPage(dataToSendOnBeforeRedirect.searchPageUri);
        }
    };
    StandaloneSearchInterface.prototype.redirectToSearchPage = function (searchPage) {
        var _this = this;
        var stateValues = this.queryStateModel.getAttributes();
        var uaCausedBy = this.usageAnalytics.getCurrentEventCause();
        if (uaCausedBy != null) {
            // for legacy reason, searchbox submit were always logged a search from link in an external search box.
            // transform them if that's what we hit.
            if (uaCausedBy == AnalyticsActionListMeta_1.analyticsActionCauseList.searchboxSubmit.name) {
                uaCausedBy = AnalyticsActionListMeta_1.analyticsActionCauseList.searchFromLink.name;
            }
            stateValues['firstQueryCause'] = uaCausedBy;
        }
        var uaMeta = this.usageAnalytics.getCurrentEventMeta();
        if (uaMeta != null && !underscore_1.isEmpty(uaMeta)) {
            stateValues['firstQueryMeta'] = uaMeta;
        }
        var link = document.createElement('a');
        link.href = searchPage;
        link.href = link.href; // IE11 needs this to correctly fill the properties that are used below.
        var pathname = link.pathname.indexOf('/') == 0 ? link.pathname : '/' + link.pathname; // IE11 does not add a leading slash to this property.
        var hash = link.hash ? link.hash + '&' : '#';
        // By using a setTimeout, we allow other possible code related to the search box / magic box time to complete.
        // eg: onblur of the magic box.
        setTimeout(function () {
            _this._window.location.href = link.protocol + "//" + link.host + pathname + link.search + hash + HashUtils_1.HashUtils.encodeValues(stateValues);
        }, 0);
    };
    StandaloneSearchInterface.prototype.searchboxIsEmpty = function () {
        return Utils_1.Utils.isEmptyString(this.queryStateModel.get(QueryStateModel_1.QueryStateModel.attributesEnum.q));
    };
    StandaloneSearchInterface.ID = 'StandaloneSearchInterface';
    StandaloneSearchInterface.options = {
        redirectIfEmpty: ComponentOptions_1.ComponentOptions.buildBooleanOption({ defaultValue: true })
    };
    return StandaloneSearchInterface;
}(SearchInterface));
exports.StandaloneSearchInterface = StandaloneSearchInterface;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Assert_1 = __webpack_require__(5);
var Dom_1 = __webpack_require__(2);
var latinize = __webpack_require__(269);
var _ = __webpack_require__(0);
var StringUtils = /** @class */ (function () {
    function StringUtils() {
    }
    StringUtils.javascriptEncode = function (value) {
        Assert_1.Assert.isString(value);
        value = value.replace(/\\/g, '\\\\');
        value = value.replace(/'/g, "\\'");
        value = value.replace(/"/g, '\\"');
        return value;
    };
    StringUtils.htmlEncode = function (value) {
        Assert_1.Assert.isString(value);
        var div = Dom_1.$$('div');
        div.text(value);
        return div.el.innerHTML;
    };
    StringUtils.splice = function (value, index, remove, toAdd) {
        return value.slice(0, index) + toAdd + value.slice(index + Math.abs(remove));
    };
    StringUtils.removeMiddle = function (value, length, toAdd) {
        if (value.length < length) {
            return value;
        }
        var toRemove = value.length - length;
        var index = Math.floor(length / 2);
        return StringUtils.splice(value, index, toRemove, toAdd);
    };
    StringUtils.regexEncode = function (value) {
        Assert_1.Assert.isString(value);
        return value.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
    };
    StringUtils.stringToRegex = function (value, ignoreAccent) {
        if (ignoreAccent === void 0) { ignoreAccent = false; }
        Assert_1.Assert.isString(value);
        var encoded = StringUtils.regexEncode(value);
        if (ignoreAccent) {
            return _.map(encoded, function (char) {
                var regexp = _.find(StringUtils.accented, function (regexp) { return char.match(regexp) != null; });
                if (regexp) {
                    return regexp.source;
                }
                return char;
            }).join('');
        }
        return encoded;
    };
    StringUtils.wildcardsToRegex = function (value, ignoreAccent) {
        if (ignoreAccent === void 0) { ignoreAccent = false; }
        Assert_1.Assert.isString(value);
        var encoded = StringUtils.stringToRegex(value, ignoreAccent);
        encoded = encoded.replace(/\\\*/, '.*');
        encoded = encoded.replace(/\\\?/, '.');
        return encoded;
    };
    StringUtils.getHighlights = function (strToSearch, regexToFind, dataHighlightGroupTerm) {
        var match, indexes = [];
        while ((match = regexToFind.exec(strToSearch))) {
            var desiredMatch = match[2];
            var undesiredMatch = match[1];
            var offset = match.index + undesiredMatch.length;
            indexes.push({ offset: offset, length: desiredMatch.length, dataHighlightGroupTerm: dataHighlightGroupTerm });
            if (!regexToFind.global) {
                break;
            }
        }
        return _.isEmpty(indexes) ? undefined : indexes;
    };
    StringUtils.encodeCarriageReturn = function (strToEncode) {
        Assert_1.Assert.isString(strToEncode);
        return strToEncode.replace(/\n/g, '<br/>');
    };
    StringUtils.equalsCaseInsensitive = function (str1, str2) {
        return str1.toLowerCase() == str2.toLowerCase();
    };
    StringUtils.match = function (value, regex) {
        var results = [];
        var arr;
        while ((arr = regex.exec(value)) !== null) {
            results.push(arr);
        }
        return results;
    };
    StringUtils.hashCode = function (str) {
        var hash = 0;
        var len = str.length;
        for (var i = 0; i < len; i++) {
            var char = str.charCodeAt(i);
            hash = (hash << 5) - hash + char;
            hash = hash & hash; // Convert to 32bit integer
        }
        return hash.toString(16);
    };
    // http://stackoverflow.com/a/25575009
    StringUtils.latinize = function (str) {
        return latinize(str);
    };
    StringUtils.capitalizeFirstLetter = function (str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };
    StringUtils.accented = {
        A: /[Aa\xaa\xc0-\xc5\xe0-\xe5\u0100-\u0105\u01cd\u01ce\u0200-\u0203\u0226\u0227\u1d2c\u1d43\u1e00\u1e01\u1e9a\u1ea0-\u1ea3\u2090\u2100\u2101\u213b\u249c\u24b6\u24d0\u3371-\u3374\u3380-\u3384\u3388\u3389\u33a9-\u33af\u33c2\u33ca\u33df\u33ff\uff21\uff41]/g,
        B: /[Bb\u1d2e\u1d47\u1e02-\u1e07\u212c\u249d\u24b7\u24d1\u3374\u3385-\u3387\u33c3\u33c8\u33d4\u33dd\uff22\uff42]/g,
        C: /[Cc\xc7\xe7\u0106-\u010d\u1d9c\u2100\u2102\u2103\u2105\u2106\u212d\u216d\u217d\u249e\u24b8\u24d2\u3376\u3388\u3389\u339d\u33a0\u33a4\u33c4-\u33c7\uff23\uff43]/g,
        D: /[Dd\u010e\u010f\u01c4-\u01c6\u01f1-\u01f3\u1d30\u1d48\u1e0a-\u1e13\u2145\u2146\u216e\u217e\u249f\u24b9\u24d3\u32cf\u3372\u3377-\u3379\u3397\u33ad-\u33af\u33c5\u33c8\uff24\uff44]/g,
        E: /[Ee\xc8-\xcb\xe8-\xeb\u0112-\u011b\u0204-\u0207\u0228\u0229\u1d31\u1d49\u1e18-\u1e1b\u1eb8-\u1ebd\u2091\u2121\u212f\u2130\u2147\u24a0\u24ba\u24d4\u3250\u32cd\u32ce\uff25\uff45]/g,
        F: /[Ff\u1da0\u1e1e\u1e1f\u2109\u2131\u213b\u24a1\u24bb\u24d5\u338a-\u338c\u3399\ufb00-\ufb04\uff26\uff46]/g,
        G: /[Gg\u011c-\u0123\u01e6\u01e7\u01f4\u01f5\u1d33\u1d4d\u1e20\u1e21\u210a\u24a2\u24bc\u24d6\u32cc\u32cd\u3387\u338d-\u338f\u3393\u33ac\u33c6\u33c9\u33d2\u33ff\uff27\uff47]/g,
        H: /[Hh\u0124\u0125\u021e\u021f\u02b0\u1d34\u1e22-\u1e2b\u1e96\u210b-\u210e\u24a3\u24bd\u24d7\u32cc\u3371\u3390-\u3394\u33ca\u33cb\u33d7\uff28\uff48]/g,
        I: /[Ii\xcc-\xcf\xec-\xef\u0128-\u0130\u0132\u0133\u01cf\u01d0\u0208-\u020b\u1d35\u1d62\u1e2c\u1e2d\u1ec8-\u1ecb\u2071\u2110\u2111\u2139\u2148\u2160-\u2163\u2165-\u2168\u216a\u216b\u2170-\u2173\u2175-\u2178\u217a\u217b\u24a4\u24be\u24d8\u337a\u33cc\u33d5\ufb01\ufb03\uff29\uff49]/g,
        J: /[Jj\u0132-\u0135\u01c7-\u01cc\u01f0\u02b2\u1d36\u2149\u24a5\u24bf\u24d9\u2c7c\uff2a\uff4a]/g,
        K: /[Kk\u0136\u0137\u01e8\u01e9\u1d37\u1d4f\u1e30-\u1e35\u212a\u24a6\u24c0\u24da\u3384\u3385\u3389\u338f\u3391\u3398\u339e\u33a2\u33a6\u33aa\u33b8\u33be\u33c0\u33c6\u33cd-\u33cf\uff2b\uff4b]/g,
        L: /[Ll\u0139-\u0140\u01c7-\u01c9\u02e1\u1d38\u1e36\u1e37\u1e3a-\u1e3d\u2112\u2113\u2121\u216c\u217c\u24a7\u24c1\u24db\u32cf\u3388\u3389\u33d0-\u33d3\u33d5\u33d6\u33ff\ufb02\ufb04\uff2c\uff4c]/g,
        M: /[Mm\u1d39\u1d50\u1e3e-\u1e43\u2120\u2122\u2133\u216f\u217f\u24a8\u24c2\u24dc\u3377-\u3379\u3383\u3386\u338e\u3392\u3396\u3399-\u33a8\u33ab\u33b3\u33b7\u33b9\u33bd\u33bf\u33c1\u33c2\u33ce\u33d0\u33d4-\u33d6\u33d8\u33d9\u33de\u33df\uff2d\uff4d]/g,
        N: /[Nn\xd1\xf1\u0143-\u0149\u01ca-\u01cc\u01f8\u01f9\u1d3a\u1e44-\u1e4b\u207f\u2115\u2116\u24a9\u24c3\u24dd\u3381\u338b\u339a\u33b1\u33b5\u33bb\u33cc\u33d1\uff2e\uff4e]/g,
        O: /[Oo\xba\xd2-\xd6\xf2-\xf6\u014c-\u0151\u01a0\u01a1\u01d1\u01d2\u01ea\u01eb\u020c-\u020f\u022e\u022f\u1d3c\u1d52\u1ecc-\u1ecf\u2092\u2105\u2116\u2134\u24aa\u24c4\u24de\u3375\u33c7\u33d2\u33d6\uff2f\uff4f]/g,
        P: /[Pp\u1d3e\u1d56\u1e54-\u1e57\u2119\u24ab\u24c5\u24df\u3250\u3371\u3376\u3380\u338a\u33a9-\u33ac\u33b0\u33b4\u33ba\u33cb\u33d7-\u33da\uff30\uff50]/g,
        Q: /[Qq\u211a\u24ac\u24c6\u24e0\u33c3\uff31\uff51]/g,
        R: /[Rr\u0154-\u0159\u0210-\u0213\u02b3\u1d3f\u1d63\u1e58-\u1e5b\u1e5e\u1e5f\u20a8\u211b-\u211d\u24ad\u24c7\u24e1\u32cd\u3374\u33ad-\u33af\u33da\u33db\uff32\uff52]/g,
        S: /[Ss\u015a-\u0161\u017f\u0218\u0219\u02e2\u1e60-\u1e63\u20a8\u2101\u2120\u24ae\u24c8\u24e2\u33a7\u33a8\u33ae-\u33b3\u33db\u33dc\ufb06\uff33\uff53]/g,
        T: /[Tt\u0162-\u0165\u021a\u021b\u1d40\u1d57\u1e6a-\u1e71\u1e97\u2121\u2122\u24af\u24c9\u24e3\u3250\u32cf\u3394\u33cf\ufb05\ufb06\uff34\uff54]/g,
        U: /[Uu\xd9-\xdc\xf9-\xfc\u0168-\u0173\u01af\u01b0\u01d3\u01d4\u0214-\u0217\u1d41\u1d58\u1d64\u1e72-\u1e77\u1ee4-\u1ee7\u2106\u24b0\u24ca\u24e4\u3373\u337a\uff35\uff55]/g,
        V: /[Vv\u1d5b\u1d65\u1e7c-\u1e7f\u2163-\u2167\u2173-\u2177\u24b1\u24cb\u24e5\u2c7d\u32ce\u3375\u33b4-\u33b9\u33dc\u33de\uff36\uff56]/g,
        W: /[Ww\u0174\u0175\u02b7\u1d42\u1e80-\u1e89\u1e98\u24b2\u24cc\u24e6\u33ba-\u33bf\u33dd\uff37\uff57]/g,
        X: /[Xx\u02e3\u1e8a-\u1e8d\u2093\u213b\u2168-\u216b\u2178-\u217b\u24b3\u24cd\u24e7\u33d3\uff38\uff58]/g,
        Y: /[Yy\xdd\xfd\xff\u0176-\u0178\u0232\u0233\u02b8\u1e8e\u1e8f\u1e99\u1ef2-\u1ef9\u24b4\u24ce\u24e8\u33c9\uff39\uff59]/g,
        Z: /[Zz\u0179-\u017e\u01f1-\u01f3\u1dbb\u1e90-\u1e95\u2124\u2128\u24b5\u24cf\u24e9\u3390-\u3394\uff3a\uff5a]/g
    };
    return StringUtils;
}());
exports.StringUtils = StringUtils;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Assert_1 = __webpack_require__(5);
var Utils_1 = __webpack_require__(4);
var _ = __webpack_require__(0);
var QueryUtils = /** @class */ (function () {
    function QueryUtils() {
    }
    QueryUtils.createGuid = function () {
        var guid;
        var success = false;
        if (typeof crypto != 'undefined' && typeof crypto.getRandomValues != 'undefined') {
            try {
                guid = QueryUtils.generateWithCrypto();
                success = true;
            }
            catch (e) {
                success = false;
            }
        }
        if (!success) {
            guid = QueryUtils.generateWithRandom();
        }
        return guid;
    };
    // This method is a fallback as it's generate a lot of collisions in Chrome.
    QueryUtils.generateWithRandom = function () {
        // http://stackoverflow.com/a/2117523
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = (Math.random() * 16) | 0, v = c == 'x' ? r : (r & 0x3) | 0x8;
            return v.toString(16);
        });
    };
    QueryUtils.generateWithCrypto = function () {
        var buf = new Uint16Array(8);
        crypto.getRandomValues(buf);
        var S4 = function (num) {
            var ret = num.toString(16);
            while (ret.length < 4) {
                ret = '0' + ret;
            }
            return ret;
        };
        return S4(buf[0]) + S4(buf[1]) + '-' + S4(buf[2]) + '-' + S4(buf[3]) + '-' + S4(buf[4]) + '-' + S4(buf[5]) + S4(buf[6]) + S4(buf[7]);
    };
    QueryUtils.setStateObjectOnQueryResults = function (state, results) {
        QueryUtils.setPropertyOnResults(results, 'state', state);
    };
    QueryUtils.setStateObjectOnQueryResult = function (state, result) {
        QueryUtils.setPropertyOnResult(result, 'state', state);
    };
    QueryUtils.setSearchInterfaceObjectOnQueryResult = function (searchInterface, result) {
        QueryUtils.setPropertyOnResult(result, 'searchInterface', searchInterface);
    };
    QueryUtils.setIndexAndUidOnQueryResults = function (query, results, queryUid, pipeline, splitTestRun) {
        Assert_1.Assert.exists(query);
        Assert_1.Assert.exists(results);
        var index = query.firstResult;
        QueryUtils.setPropertyOnResults(results, 'queryUid', queryUid);
        QueryUtils.setPropertyOnResults(results, 'pipeline', pipeline);
        QueryUtils.setPropertyOnResults(results, 'splitTestRun', splitTestRun);
        QueryUtils.setPropertyOnResults(results, 'index', index, function () { return ++index; });
    };
    QueryUtils.setTermsToHighlightOnQueryResults = function (query, results) {
        QueryUtils.setPropertyOnResults(results, 'termsToHighlight', results.termsToHighlight);
        QueryUtils.setPropertyOnResults(results, 'phrasesToHighlight', results.phrasesToHighlight);
    };
    QueryUtils.splitFlags = function (flags, delimiter) {
        if (delimiter === void 0) { delimiter = ';'; }
        Assert_1.Assert.exists(flags);
        return flags.split(delimiter);
    };
    QueryUtils.isAttachment = function (result) {
        return _.contains(QueryUtils.splitFlags(result.flags), 'IsAttachment');
    };
    QueryUtils.containsAttachment = function (result) {
        return _.contains(QueryUtils.splitFlags(result.flags), 'ContainsAttachment');
    };
    QueryUtils.hasHTMLVersion = function (result) {
        return _.contains(QueryUtils.splitFlags(result.flags), 'HasHtmlVersion');
    };
    QueryUtils.hasThumbnail = function (result) {
        return _.contains(QueryUtils.splitFlags(result.flags), 'HasThumbnail');
    };
    QueryUtils.hasExcerpt = function (result) {
        return result.excerpt != undefined && result.excerpt != '';
    };
    QueryUtils.getAuthor = function (result) {
        return result.raw['author'];
    };
    QueryUtils.getUriHash = function (result) {
        return result.raw['urihash'];
    };
    QueryUtils.getObjectType = function (result) {
        return result.raw['objecttype'];
    };
    QueryUtils.getCollection = function (result) {
        return result.raw['collection'];
    };
    QueryUtils.getSource = function (result) {
        return result.raw['source'];
    };
    QueryUtils.getLanguage = function (result) {
        return result.raw['language'];
    };
    QueryUtils.getPermanentId = function (result) {
        var fieldValue;
        var fieldUsed;
        var permanentId = Utils_1.Utils.getFieldValue(result, 'permanentid');
        if (permanentId) {
            fieldUsed = 'permanentid';
            fieldValue = permanentId;
        }
        else {
            fieldUsed = 'urihash';
            fieldValue = Utils_1.Utils.getFieldValue(result, 'urihash');
        }
        return {
            fieldValue: fieldValue,
            fieldUsed: fieldUsed
        };
    };
    QueryUtils.quoteAndEscapeIfNeeded = function (str) {
        Assert_1.Assert.isString(str);
        return QueryUtils.isAtomicString(str) || (QueryUtils.isRangeString(str) || QueryUtils.isRangeWithoutOuterBoundsString(str))
            ? str
            : QueryUtils.quoteAndEscape(str);
    };
    QueryUtils.quoteAndEscape = function (str) {
        Assert_1.Assert.isString(str);
        return "\"" + QueryUtils.escapeString(str) + "\"";
    };
    QueryUtils.escapeString = function (str) {
        Assert_1.Assert.isString(str);
        return str.replace(/"/g, ' ');
    };
    QueryUtils.isAtomicString = function (str) {
        Assert_1.Assert.isString(str);
        return /^\d+(\.\d+)?$|^[\d\w]+$/.test(str);
    };
    QueryUtils.isRangeString = function (str) {
        Assert_1.Assert.isString(str);
        return /^\d+(\.\d+)?\.\.\d+(\.\d+)?$|^\d{4}\/\d{2}\/\d{2}@\d{2}:\d{2}:\d{2}\.\.\d{4}\/\d{2}\/\d{2}@\d{2}:\d{2}:\d{2}$/.test(str);
    };
    QueryUtils.isRangeWithoutOuterBoundsString = function (str) {
        Assert_1.Assert.isString(str);
        return /^\d+(\.\d+)?$|^\d{4}\/\d{2}\/\d{2}@\d{2}:\d{2}:\d{2}$/.test(str);
    };
    QueryUtils.buildFieldExpression = function (field, operator, values) {
        Assert_1.Assert.isNonEmptyString(field);
        Assert_1.Assert.stringStartsWith(field, '@');
        Assert_1.Assert.isNonEmptyString(operator);
        Assert_1.Assert.isLargerOrEqualsThan(1, values.length);
        if (values.length == 1) {
            return field + operator + QueryUtils.quoteAndEscapeIfNeeded(values[0]);
        }
        else {
            return field + operator + '(' + _.map(values, function (str) { return QueryUtils.quoteAndEscapeIfNeeded(str); }).join(',') + ')';
        }
    };
    QueryUtils.buildFieldNotEqualExpression = function (field, values) {
        Assert_1.Assert.isNonEmptyString(field);
        Assert_1.Assert.stringStartsWith(field, '@');
        Assert_1.Assert.isLargerOrEqualsThan(1, values.length);
        var filter;
        if (values.length == 1) {
            filter = field + '==' + QueryUtils.quoteAndEscapeIfNeeded(values[0]);
        }
        else {
            filter = field + '==' + '(' + _.map(values, function (str) { return QueryUtils.quoteAndEscapeIfNeeded(str); }).join(',') + ')';
        }
        return '(NOT ' + filter + ')';
    };
    QueryUtils.setPropertyOnResults = function (results, property, value, afterOneLoop) {
        _.each(results.results, function (result) {
            QueryUtils.setPropertyOnResult(result, property, value);
            value = afterOneLoop ? afterOneLoop() : value;
        });
    };
    QueryUtils.setPropertyOnResult = function (result, property, value) {
        result[property] = value;
        _.each(result.childResults, function (child) {
            child[property] = value;
        });
        if (!Utils_1.Utils.isNullOrUndefined(result.parentResult)) {
            result.parentResult[property] = value;
        }
    };
    QueryUtils.isStratusAgnosticField = function (fieldToVerify, fieldToMatch) {
        var checkForSystem = /^(@?)(sys)?(.*)/i;
        var matchFieldToVerify = checkForSystem.exec(fieldToVerify);
        var matchFieldToMatch = checkForSystem.exec(fieldToMatch);
        if (matchFieldToVerify && matchFieldToMatch) {
            return (matchFieldToVerify[1] + matchFieldToVerify[3]).toLowerCase() == (matchFieldToMatch[1] + matchFieldToMatch[3]).toLowerCase();
        }
        return false;
    };
    return QueryUtils;
}());
exports.QueryUtils = QueryUtils;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Utils_1 = __webpack_require__(4);
var _ = __webpack_require__(0);
var KEYBOARD;
(function (KEYBOARD) {
    KEYBOARD[KEYBOARD["BACKSPACE"] = 8] = "BACKSPACE";
    KEYBOARD[KEYBOARD["TAB"] = 9] = "TAB";
    KEYBOARD[KEYBOARD["ENTER"] = 13] = "ENTER";
    KEYBOARD[KEYBOARD["SHIFT"] = 16] = "SHIFT";
    KEYBOARD[KEYBOARD["CTRL"] = 17] = "CTRL";
    KEYBOARD[KEYBOARD["ALT"] = 18] = "ALT";
    KEYBOARD[KEYBOARD["ESCAPE"] = 27] = "ESCAPE";
    KEYBOARD[KEYBOARD["SPACEBAR"] = 32] = "SPACEBAR";
    KEYBOARD[KEYBOARD["PAGE_UP"] = 33] = "PAGE_UP";
    KEYBOARD[KEYBOARD["PAGE_DOWN"] = 34] = "PAGE_DOWN";
    KEYBOARD[KEYBOARD["HOME"] = 36] = "HOME";
    KEYBOARD[KEYBOARD["LEFT_ARROW"] = 37] = "LEFT_ARROW";
    KEYBOARD[KEYBOARD["UP_ARROW"] = 38] = "UP_ARROW";
    KEYBOARD[KEYBOARD["RIGHT_ARROW"] = 39] = "RIGHT_ARROW";
    KEYBOARD[KEYBOARD["DOWN_ARROW"] = 40] = "DOWN_ARROW";
    KEYBOARD[KEYBOARD["INSERT"] = 45] = "INSERT";
    KEYBOARD[KEYBOARD["DELETE"] = 46] = "DELETE";
})(KEYBOARD = exports.KEYBOARD || (exports.KEYBOARD = {}));
var KeyboardUtils = /** @class */ (function () {
    function KeyboardUtils() {
    }
    KeyboardUtils.keysEqual = function (key, code) {
        if (!Utils_1.Utils.isNullOrUndefined(key.keyCode)) {
            return key.keyCode == code;
        }
        else if (!Utils_1.Utils.isNullOrUndefined(key.which)) {
            return key.which == code;
        }
        return false;
    };
    KeyboardUtils.isAllowedKeyForOmnibox = function (e) {
        var keycode = e.keyCode;
        var valid = KeyboardUtils.isNumberKeyPushed(keycode) ||
            (keycode == 32 || keycode == 13) || // spacebar & return key(s)
            KeyboardUtils.isLetterKeyPushed(keycode) ||
            (keycode > 95 && keycode < 112) || // numpad keys
            (keycode > 185 && keycode < 193) || // ;=,-./` (in order)
            (keycode > 218 && keycode < 223) || // [\]' (in order)
            (keycode == KEYBOARD.BACKSPACE || keycode == KEYBOARD.DELETE) ||
            KeyboardUtils.isArrowKeyPushed(keycode);
        return valid;
    };
    KeyboardUtils.isAllowedKeyForSearchAsYouType = function (e) {
        return KeyboardUtils.isAllowedKeyForOmnibox(e) && !KeyboardUtils.isArrowKeyPushed(e.keyCode);
    };
    KeyboardUtils.isDeleteOrBackspace = function (e) {
        return KeyboardUtils.keysEqual(e, KEYBOARD.BACKSPACE) || KeyboardUtils.keysEqual(e, KEYBOARD.DELETE);
    };
    KeyboardUtils.isArrowKeyPushed = function (keycode) {
        return (keycode == KEYBOARD.LEFT_ARROW || keycode == KEYBOARD.UP_ARROW || keycode == KEYBOARD.RIGHT_ARROW || keycode == KEYBOARD.DOWN_ARROW);
    };
    KeyboardUtils.isNumberKeyPushed = function (keycode) {
        return keycode > 47 && keycode < 58;
    };
    KeyboardUtils.isLetterKeyPushed = function (keycode) {
        return keycode > 64 && keycode < 91;
    };
    // Return a keyboard event listener that only executes the function if certain keys are pressed.
    KeyboardUtils.keypressAction = function (keyCode, action) {
        return function (e) {
            var data = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                data[_i - 1] = arguments[_i];
            }
            if (e) {
                var eventCode = e.charCode || e.keyCode;
                if (eventCode) {
                    if (_.isArray(keyCode) && _.contains(keyCode, eventCode)) {
                        action(e);
                    }
                    else if (eventCode === keyCode) {
                        action(e);
                    }
                }
            }
        };
    };
    return KeyboardUtils;
}());
exports.KeyboardUtils = KeyboardUtils;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// Not sure about this : In year 2033 who's to say that this list won't be 50 pages long !
var ResponsiveComponents_1 = __webpack_require__(40);
var mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
var DeviceUtils = /** @class */ (function () {
    function DeviceUtils() {
    }
    DeviceUtils.getDeviceName = function (userAgent) {
        if (userAgent === void 0) { userAgent = navigator.userAgent; }
        if (userAgent.match(/Edge/i)) {
            return 'Edge';
        }
        if (userAgent.match(/Opera Mini/i)) {
            return 'Opera Mini';
        }
        if (userAgent.match(/Android/i)) {
            return 'Android';
        }
        if (userAgent.match(/BlackBerry/i)) {
            return 'BlackBerry';
        }
        if (userAgent.match(/iPhone/i)) {
            return 'iPhone';
        }
        if (userAgent.match(/iPad/i)) {
            return 'iPad';
        }
        if (userAgent.match(/iPod/i)) {
            return 'iPod';
        }
        if (userAgent.match(/Chrome/i)) {
            return 'Chrome';
        }
        if (userAgent.match(/MSIE/i) || userAgent.match(/Trident/i)) {
            return 'IE';
        }
        if (userAgent.match(/Opera/i)) {
            return 'Opera';
        }
        if (userAgent.match(/Firefox/i)) {
            return 'Firefox';
        }
        if (userAgent.match(/Safari/i)) {
            return 'Safari';
        }
        return 'Others';
    };
    DeviceUtils.isAndroid = function () {
        return DeviceUtils.getDeviceName() == 'Android';
    };
    DeviceUtils.isIos = function () {
        var deviceName = DeviceUtils.getDeviceName();
        return deviceName == 'iPhone' || deviceName == 'iPad' || deviceName == 'iPod';
    };
    DeviceUtils.isMobileDevice = function () {
        return mobile;
    };
    /**
     * @deprecated
     *
     * Use ResponsiveComponents.isSmallScreenWidth() instead
     */
    DeviceUtils.isSmallScreenWidth = function () {
        return new ResponsiveComponents_1.ResponsiveComponents().isSmallScreenWidth();
    };
    return DeviceUtils;
}());
exports.DeviceUtils = DeviceUtils;


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Logger_1 = __webpack_require__(11);
var Dom_1 = __webpack_require__(2);
var TemplateConditionEvaluator_1 = __webpack_require__(116);
var TemplateFieldsEvaluator_1 = __webpack_require__(270);
var ResponsiveComponents_1 = __webpack_require__(40);
var _ = __webpack_require__(0);
var Initialization_1 = __webpack_require__(1);
var Utils_1 = __webpack_require__(4);
var DefaultInstantiateTemplateOptions = /** @class */ (function () {
    function DefaultInstantiateTemplateOptions() {
        this.currentLayout = null;
        this.checkCondition = true;
        this.wrapInDiv = true;
        this.responsiveComponents = new ResponsiveComponents_1.ResponsiveComponents();
    }
    DefaultInstantiateTemplateOptions.prototype.get = function () {
        return {
            currentLayout: this.currentLayout,
            checkCondition: this.checkCondition,
            wrapInDiv: this.wrapInDiv,
            responsiveComponents: this.responsiveComponents
        };
    };
    DefaultInstantiateTemplateOptions.prototype.merge = function (other) {
        if (other) {
            return _.extend(this.get(), other);
        }
        return this.get();
    };
    return DefaultInstantiateTemplateOptions;
}());
exports.DefaultInstantiateTemplateOptions = DefaultInstantiateTemplateOptions;
var Template = /** @class */ (function () {
    function Template(dataToString) {
        this.dataToString = dataToString;
        this.logger = new Logger_1.Logger(this);
        this.fields = [];
    }
    Template.prototype.instantiateToString = function (object, instantiateOptions) {
        if (instantiateOptions === void 0) { instantiateOptions = new DefaultInstantiateTemplateOptions(); }
        if (this.dataToString) {
            if (instantiateOptions.checkCondition === false) {
                return this.dataToString(object);
            }
            // Should not happen but...
            // Normally, top level call from sub-class will have already created a
            // DefaultInstantiateTemplateOptions and merged down
            if (instantiateOptions.responsiveComponents == null) {
                instantiateOptions.responsiveComponents = new ResponsiveComponents_1.ResponsiveComponents();
            }
            // Mobile/tablet/desktop checks are only for "hard" set value (triple equal)
            // If it's undefined, we skip those checks, and we assume the template works correctly for any given screen size
            if (this.mobile === true && !instantiateOptions.responsiveComponents.isSmallScreenWidth()) {
                this.logger.trace('Template was skipped because it is optimized for small screen width', this);
                return null;
            }
            else if (this.mobile === false && instantiateOptions.responsiveComponents.isSmallScreenWidth()) {
                this.logger.trace('Template was skipped because it is not optimized for small screen width', this);
                return null;
            }
            if (this.tablet === true && !instantiateOptions.responsiveComponents.isMediumScreenWidth()) {
                this.logger.trace('Template was skipped because it is optimized for medium screen width', this);
                return null;
            }
            else if (this.tablet === false && instantiateOptions.responsiveComponents.isMediumScreenWidth()) {
                this.logger.trace('Template was skipped because it is not optimized for medium screen width', this);
                return null;
            }
            if (this.desktop === true && !instantiateOptions.responsiveComponents.isLargeScreenWidth()) {
                this.logger.trace('Template was skipped because it is optimized for large screen width', this);
                return null;
            }
            else if (this.desktop === false && instantiateOptions.responsiveComponents.isLargeScreenWidth()) {
                this.logger.trace('Template was skipped because it is not optimized for large screen width', this);
                return null;
            }
            if (this.layout != null && instantiateOptions.currentLayout != null && instantiateOptions.currentLayout !== this.layout) {
                this.logger.trace('Template was skipped because layout does not match', this, this.layout);
                return null;
            }
            try {
                this.logger.trace('Evaluating template ...');
                // Condition (as a function) is eval'ed, first
                if (this.condition != null && this.condition(object)) {
                    this.logger.trace('Template was loaded because condition was :', this.condition, object);
                    return this.dataToString(object);
                }
                // Condition (as a string) is parsed, if available.
                if (this.conditionToParse != null &&
                    TemplateConditionEvaluator_1.TemplateConditionEvaluator.evaluateCondition(this.conditionToParse, object, instantiateOptions.responsiveComponents)) {
                    this.logger.trace('Template was loaded because condition was :', this.conditionToParse, object);
                    return this.dataToString(object);
                }
                // fieldsToMatch is yet another fallback that allows to specify if a template should be loaded.
                if (this.fieldsToMatch != null && TemplateFieldsEvaluator_1.TemplateFieldsEvaluator.evaluateFieldsToMatch(this.fieldsToMatch, object)) {
                    this.logger.trace('Template was loaded because condition was :', this.fieldsToMatch, object);
                    return this.dataToString(object);
                }
                // If there is no condition at all, this means "true"
                if (this.condition == null && this.conditionToParse == null && this.fieldsToMatch == null) {
                    this.logger.trace('Template was loaded because there was *NO* condition', this.condition, object);
                    return this.dataToString(object);
                }
            }
            catch (e) {
                new Logger_1.Logger(this).error('Cannot instantiate template', e.message, this.getTemplateInfo());
                new Logger_1.Logger(this).warn('A default template was used');
                return null;
            }
        }
        this.logger.trace('Template was skipped because it did not match any condition', this);
        return null;
    };
    Template.prototype.addField = function (field) {
        if (!_.contains(this.fields, field)) {
            this.fields.push(field);
        }
    };
    Template.prototype.addFields = function (fields) {
        if (Utils_1.Utils.isNonEmptyArray(fields)) {
            this.fields = Utils_1.Utils.concatWithoutDuplicate(this.fields, fields);
        }
    };
    Template.prototype.getComponentsInside = function (tmplString) {
        var allComponentsInsideCurrentTemplate = _.map(Initialization_1.Initialization.getListOfRegisteredComponents(), function (componentId) {
            var regex = new RegExp("Coveo" + componentId, 'g');
            if (regex.exec(tmplString)) {
                return componentId;
            }
            else {
                return null;
            }
        });
        return _.compact(allComponentsInsideCurrentTemplate);
    };
    Template.prototype.instantiateToElement = function (object, instantiateTemplateOptions) {
        var _this = this;
        if (instantiateTemplateOptions === void 0) { instantiateTemplateOptions = {}; }
        var mergedOptions = new DefaultInstantiateTemplateOptions().merge(instantiateTemplateOptions);
        var html = this.instantiateToString(object, mergedOptions);
        if (html == null) {
            return null;
        }
        var allComponentsLazyLoaded = _.map(this.getComponentsInside(html), function (component) {
            return Initialization_1.LazyInitialization.getLazyRegisteredComponent(component).then(function (lazyLoadedComponent) {
                return lazyLoadedComponent;
            });
        });
        return Promise.all(allComponentsLazyLoaded).then(function () {
            var layout = _this.layout || mergedOptions.currentLayout;
            var elemType = layout === 'table' ? 'tr' : 'div';
            var element = Dom_1.$$(elemType, {}, html).el;
            if (!mergedOptions.wrapInDiv && element.children.length === 1) {
                element = element.children.item(0);
            }
            if (layout) {
                Dom_1.$$(element).addClass("coveo-" + layout + "-layout");
            }
            _this.logger.trace('Instantiated result template', object, element);
            element['template'] = _this;
            return element;
        });
    };
    Template.prototype.toHtmlElement = function () {
        return null;
    };
    Template.prototype.getFields = function () {
        return this.fields;
    };
    Template.prototype.getType = function () {
        return 'Template';
    };
    Template.prototype.setConditionWithFallback = function (condition) {
        // In some circumstances (eg: locker service in SF), with strict Content-Security-Policy, eval / new Function are not allowed by the browser.
        // Try to use the eval method, if possible. Otherwise fallback to a mechanism where we will try to parse/evaluate the condition as a simple string.
        try {
            this.condition = new Function('obj', 'with(obj||{}){return ' + condition + '}');
        }
        catch (e) {
            this.conditionToParse = condition;
        }
    };
    Template.prototype.getTemplateInfo = function () {
        // Try to get info on the template by returning the first parameter found that is not undefined.
        return this.conditionToParse != undefined ? this.conditionToParse : this.condition != undefined ? this.condition : this.fieldsToMatch;
    };
    return Template;
}());
exports.Template = Template;


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ModalBox = __webpack_require__(229);
exports.LocaleString = __webpack_require__(230);


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Model_1 = __webpack_require__(16);
var _ = __webpack_require__(0);
exports.COMPONENT_OPTIONS_ATTRIBUTES = {
    RESULT_LINK: 'resultLink',
    SEARCH_HUB: 'searchHub',
    SEARCH_BOX: 'searchBox'
};
var ComponentOptionsModel = /** @class */ (function (_super) {
    __extends(ComponentOptionsModel, _super);
    function ComponentOptionsModel(element, attributes) {
        var _this = this;
        var merged = _.extend({}, ComponentOptionsModel.defaultAttributes, attributes);
        _this = _super.call(this, element, ComponentOptionsModel.ID, merged) || this;
        return _this;
    }
    ComponentOptionsModel.ID = 'ComponentOptions';
    ComponentOptionsModel.defaultAttributes = {
        resultLink: undefined,
        searchHub: undefined,
        searchBox: undefined
    };
    ComponentOptionsModel.attributesEnum = {
        resultLink: 'resultLink',
        searchHub: 'searchHub',
        searchBox: 'searchBox'
    };
    return ComponentOptionsModel;
}(Model_1.Model));
exports.ComponentOptionsModel = ComponentOptionsModel;


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["Globalize"] = __webpack_require__(231);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(104)))

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Initialization_1 = __webpack_require__(1);
var Assert_1 = __webpack_require__(5);
var QueryController_1 = __webpack_require__(33);
var QueryStateModel_1 = __webpack_require__(12);
var InitializationEvents_1 = __webpack_require__(15);
var Dom_1 = __webpack_require__(2);
var Component_1 = __webpack_require__(6);
var _ = __webpack_require__(0);
var PublicPathUtils_1 = __webpack_require__(119);
/**
 * Initialize the framework with a basic search interface. Calls {@link Initialization.initSearchInterface}.
 *
 * If using the jQuery extension, this is called using <code>$('#root').coveo('init');</code>.
 * @param element The root of the interface to initialize.
 * @param options JSON options for the framework (e.g.: <code>{Searchbox : {enableSearchAsYouType : true}}</code>).
 * @returns {Promise<{elem: HTMLElement}>}
 */
function init(element, options) {
    if (options === void 0) { options = {}; }
    return Initialization_1.Initialization.initializeFramework(element, options, function () {
        return Initialization_1.Initialization.initSearchInterface(element, options);
    });
}
exports.init = init;
Initialization_1.Initialization.registerNamedMethod('init', function (element, options) {
    if (options === void 0) { options = {}; }
    return init(element, options);
});
/**
 * Initialize the framework with a standalone search box. Calls {@link Initialize.initStandaloneSearchInterface}.
 *
 * If using the jQuery extension, this is called using <code>$('#root').coveo('initSearchbox');</code>.
 * @param element The root of the interface to initialize.
 * @param searchPageUri The search page on which to redirect when there is a query.
 * @param options JSON options for the framework (e.g.: <code>{Searchbox : {enableSearchAsYouType : true}}</code>).
 * @returns {Promise<{elem: HTMLElement}>}
 */
function initSearchbox(element, searchPageUri, options) {
    if (options === void 0) { options = {}; }
    Assert_1.Assert.isNonEmptyString(searchPageUri);
    var searchInterfaceOptions = {};
    searchInterfaceOptions.searchPageUri = searchPageUri;
    searchInterfaceOptions.autoTriggerQuery = false;
    searchInterfaceOptions.enableHistory = false;
    options = _.extend({}, options, { StandaloneSearchInterface: searchInterfaceOptions });
    return Initialization_1.Initialization.initializeFramework(element, options, function () {
        return Initialization_1.Initialization.initStandaloneSearchInterface(element, options);
    });
}
exports.initSearchbox = initSearchbox;
Initialization_1.Initialization.registerNamedMethod('initSearchbox', function (element, searchPageUri, options) {
    if (options === void 0) { options = {}; }
    initSearchbox(element, searchPageUri, options);
});
/**
 * Initialize the framework with a recommendation interface. Calls {@link Initialization.initRecommendationInterface}.
 *
 * If using the jQuery extension, this is called using <code>$('#root').coveo('initRecommendation');</code>.
 * @param element The root of the interface to initialize.
 * @param mainSearchInterface The search interface to link with the recommendation interface (see {@link Recommendation}).
 * @param userContext The user context to pass with the query generated in the recommendation interface (see {@link Recommendation}).
 * @param options JSON options for the framework (e.g.: <code>{Searchbox : {enableSearchAsYouType: true}}</code>).
 * @returns {Promise<{elem: HTMLElement}>}
 */
function initRecommendation(element, mainSearchInterface, userContext, options) {
    if (options === void 0) { options = {}; }
    var recommendationOptions = {};
    recommendationOptions.mainSearchInterface = mainSearchInterface;
    recommendationOptions.userContext = userContext;
    recommendationOptions.enableHistory = false;
    options = _.extend({}, options, { Recommendation: recommendationOptions });
    // Recommendation component is special : It is not explicitely registered like other "basic" components since it's a full search interface.
    // Since it's not done using the "standard" path, we need to register this manually here
    // This ensure that we can always call `getLazyRegisteredComponent`, no matter if it was loaded from eager or lazy mode.
    if (window['Coveo']['Recommendation'] != null) {
        Initialization_1.LazyInitialization.registerLazyComponent('Recommendation', function () { return Promise.resolve(window['Coveo']['Recommendation']); });
        Initialization_1.EagerInitialization.eagerlyLoadedComponents['Recommendation'] = window['Coveo']['Recommendation'];
    }
    return Initialization_1.LazyInitialization.getLazyRegisteredComponent('Recommendation').then(function () {
        return Initialization_1.Initialization.initializeFramework(element, options, function () {
            return Initialization_1.Initialization.initRecommendationInterface(element, options);
        });
    });
}
exports.initRecommendation = initRecommendation;
Initialization_1.Initialization.registerNamedMethod('initRecommendation', function (element, mainSearchInterface, userContext, options) {
    if (userContext === void 0) { userContext = {}; }
    if (options === void 0) { options = {}; }
    initRecommendation(element, mainSearchInterface, userContext, options);
});
/**
 * Execute a standard query. Active component in the interface will react to events/ push data in the query / handle the query success or failure as needed.
 *
 * It triggers a standard query flow for which the standard component will perform their expected behavior.
 *
 * If you wish to only perform a query on the index to retrieve results (without the component reacting), look into {@link SearchInterface} instead.
 *
 * Calling this method is the same as calling {@link QueryController.executeQuery}.
 *
 * @param element The root of the interface to initialize.
 * @returns {Promise<IQueryResults>}
 */
function executeQuery(element) {
    Assert_1.Assert.exists(element);
    var queryController = Component_1.Component.resolveBinding(element, QueryController_1.QueryController);
    Assert_1.Assert.exists(queryController);
    return queryController.executeQuery();
}
exports.executeQuery = executeQuery;
Initialization_1.Initialization.registerNamedMethod('executeQuery', function (element) {
    return executeQuery(element);
});
/**
 * Performs read and write operations on the [`QueryStateModel`]{@link QueryStateModel} instance of the search
 * interface. See [State](https://developers.coveo.com/x/RYGfAQ).
 *
 * Can perform the following actions:
 *
 * - Get the `QueryStateModel` instance:
 * ```javascript
 * Coveo.state(element);
 * ```
 *
 * - Get the value of a single state attribute from the `QueryStateModel` instance:
 * ```javascript
 * // You can replace `q` with any registered state attribute.
 * Coveo.state(element, "q");
 * ```
 *
 * - Set the value of a single state attribute in the `QueryStateModel` instance:
 * ```javascript
 * // You can replace `q` with any registered state attribute.
 * Coveo.state(element, "q", "my new value");
 * ```
 *
 * - Set multiple state attribute values in the `QueryStateModel` instance:
 * ```javascript
 * // You can replace `q` and `sort` with any registered state attributes.
 * Coveo.state(element, {
 *     "q" : "my new value",
 *     "sort" : "relevancy"
 * });
 * ```
 *
 * **Note:**
 * > When setting one or several state attribute values with this function, you can pass an additional argument to set
 * > the `silent` attribute to `true` in order to prevent the state change from triggering state change events.
 * >
 * > **Example:**
 * > ```javascript
 * > Coveo.state(element, "q", "my new value", { "silent" : true });
 * > ```
 *
 * @param element The root of the interface whose `QueryStateModel` instance the function should interact with.
 * @param args The arguments that determine the action to perform on the `QueryStateModel` instance.
 * @returns {any} Depends on the action performed.
 */
function state(element) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    Assert_1.Assert.exists(element);
    var model = Component_1.Component.resolveBinding(element, QueryStateModel_1.QueryStateModel);
    return QueryStateModel_1.setState(model, args);
}
exports.state = state;
Initialization_1.Initialization.registerNamedMethod('state', function (element) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    if (args.length != 0) {
        return state.apply(undefined, [element].concat(args));
    }
    else {
        return state.apply(undefined, [element]);
    }
});
/**
 * Get the component bound on the given `HTMLElement`.
 * @param element The `HTMLElement` for which to get the component instance.
 * @param componentClass If multiple components are bound to a single `HTMLElement`, you need to specify which components you wish to get.
 * @param noThrow By default, the GET method will throw if there is no component bound, or if there are multiple component and no `componentClass` is specified. This deletes the error if set to true.
 * @returns {Component}
 */
function get(element, componentClass, noThrow) {
    Assert_1.Assert.exists(element);
    return Component_1.Component.get(element, componentClass, noThrow);
}
exports.get = get;
Initialization_1.Initialization.registerNamedMethod('get', function (element, componentClass, noThrow) {
    return get(element, componentClass, noThrow);
});
function result(element, noThrow) {
    Assert_1.Assert.exists(element);
    return Component_1.Component.getResult(element, noThrow);
}
exports.result = result;
Initialization_1.Initialization.registerNamedMethod('result', function (element, noThrow) {
    return result(element, noThrow);
});
function getCoveoAnalyticsClient(element) {
    var analytics = getCoveoAnalytics(element);
    if (analytics) {
        return analytics.client;
    }
    else {
        return undefined;
    }
}
function getCoveoAnalytics(element) {
    var analyticsElement = Dom_1.$$(element).find('.' + Component_1.Component.computeCssClassNameForType("Analytics"));
    if (analyticsElement) {
        return Component_1.Component.get(analyticsElement);
    }
    else {
        return undefined;
    }
}
/**
 * Finds the [`Analytics`]{@link Analytics} component instance, and uses it to log a `Custom` usage analytics event.
 *
 * You can use `Custom` events to create custom reports, or to track events which are neither queries nor item
 * views.
 *
 * @param element The root of the search interface which contains the [`Analytics`]{@link Analytics} component.
 * @param customEventCause The cause of the event.
 * @param metadata The metadata you want to use to create custom dimensions. Metadata can contain as many key-value
 * pairs as you need. Each key must contain only alphanumeric characters and underscores. The Coveo Usage Analytics
 * service automatically converts white spaces to underscores, and uppercase characters to lowercase characters in key
 * names. Each value must be a simple string. If you do not need to log metadata, you can simply pass an empty JSON
 * ( `{}` ).
 */
function logCustomEvent(element, customEventCause, metadata) {
    var client = getCoveoAnalyticsClient(element);
    if (client) {
        client.logCustomEvent(customEventCause, metadata, element);
    }
}
exports.logCustomEvent = logCustomEvent;
Initialization_1.Initialization.registerNamedMethod('logCustomEvent', function (element, customEventCause, metadata) {
    logCustomEvent(element, customEventCause, metadata);
});
/**
 * Finds the [`Analytics`]{@link Analytics} component instance, and uses it to log a `Search` usage analytics event.
 *
 * A `Search` event is actually sent to the Coveo Usage Analytics service only after the query successfully returns (not
 * immediately after calling this method). Therefore, it is important to call this method **before** executing the
 * query. Otherwise, the `Search` event will not be logged, and you will get a warning message in the console. See
 * [Sending Custom Analytics Events](https://developers.coveo.com/x/KoGfAQ).
 *
 * @param element The root of the search interface which contains the [`Analytics`]{@link Analytics} component.
 * @param searchEventCause The cause of the event.
 * @param metadata The metadata you want to use to create custom dimensions. Metadata can contain as many key-value
 * pairs as you need. Each key must contain only alphanumeric characters and underscores. The Coveo Usage Analytics
 * service automatically converts white spaces to underscores, and uppercase characters to lowercase characters in key
 * names. Each value must be a simple string. If you do not need to log metadata, you can simply pass an empty JSON
 * ( `{}` ).
 */
function logSearchEvent(element, searchEventCause, metadata) {
    var client = getCoveoAnalyticsClient(element);
    if (client) {
        client.logSearchEvent(searchEventCause, metadata);
    }
}
exports.logSearchEvent = logSearchEvent;
Initialization_1.Initialization.registerNamedMethod('logSearchEvent', function (element, searchEventCause, metadata) {
    logSearchEvent(element, searchEventCause, metadata);
});
/**
 * Finds the [`Analytics`]{@link Analytics} component instance, and uses it to log a `SearchAsYouType` usage analytics
 * event.
 *
 * This function is very similar to the `logSearchEvent` function, except that `logSearchAsYouTypeEvent` should, by
 * definition, be called more frequently. Consequently, in order to avoid logging every single partial query, the
 * `PendingSearchAsYouTypeEvent` takes care of logging only the "relevant" last event: an event that occurs after 5
 * seconds have elapsed without any event being logged, or an event that occurs after another part of the interface
 * triggers a search event.
 *
 * It is important to call this method **before** executing the query. Otherwise, no `SearchAsYouType` event will be
 * logged, and you will get a warning message in the console. See
 * [Sending Custom Analytics Events](https://developers.coveo.com/x/KoGfAQ).
 *
 * @param element The root of the search interface which contains the [`Analytics`]{@link Analytics} component.
 * @param searchAsYouTypeEventCause The cause of the event.
 * @param metadata The metadata you want to use to create custom dimensions. Metadata can contain as many key-value
 * pairs as you need. Each key must contain only alphanumeric characters and underscores. The Coveo Usage Analytics
 * service automatically converts white spaces to underscores, and uppercase characters to lowercase characters in key
 * names. Each value must be a simple string. If you do not need to log metadata, you can simply pass an empty JSON
 * ( `{}` ).
 */
function logSearchAsYouTypeEvent(element, searchAsYouTypeEventCause, metadata) {
    var client = getCoveoAnalyticsClient(element);
    if (client) {
        client.logSearchAsYouType(searchAsYouTypeEventCause, metadata);
    }
}
exports.logSearchAsYouTypeEvent = logSearchAsYouTypeEvent;
Initialization_1.Initialization.registerNamedMethod('logSearchAsYouTypeEvent', function (element, searchAsYouTypeEventCause, metadata) {
    logSearchAsYouTypeEvent(element, searchAsYouTypeEventCause, metadata);
});
/**
 * Finds the [`Analytics`]{@link Analytics} component instance, and uses it to log a `Click` usage analytics event.
 *
 * A `Click` event corresponds to an item view (e.g., clicking on a {@link ResultLink} or opening a {@link Quickview}).
 *
 * `Click` events are immediately sent to the Coveo Usage Analytics service.
 *
 * @param element The root of the search interface which contains the [`Analytics`]{@link Analytics} component.
 * @param clickEventCause The cause of the event.
 * @param metadata The metadata you want to use to create custom dimensions. Metadata can contain as many key-value
 * pairs as you need. Each key must contain only alphanumeric characters and underscores. The Coveo Usage Analytics
 * service automatically converts white spaces to underscores, and uppercase characters to lowercase characters in key
 * names. Each value must be a simple string. If you do not need to log metadata, you can simply pass an empty JSON
 * ( `{}` ).
 * @param result The result that was clicked.
 */
function logClickEvent(element, clickEventCause, metadata, result) {
    var client = getCoveoAnalyticsClient(element);
    if (client) {
        client.logClickEvent(clickEventCause, metadata, result, element);
    }
}
exports.logClickEvent = logClickEvent;
Initialization_1.Initialization.registerNamedMethod('logClickEvent', function (element, clickEventCause, metadata, result) {
    logClickEvent(element, clickEventCause, metadata, result);
});
/**
 * Pass options to the framework, before it is initialized ({@link init}).<br/>
 * All the options passed with this calls will be merged together on initialization.
 * @param element The root of the interface for which you wish to set options.
 * @param optionsToSet JSON options for the framework (e.g.: <code>{Searchbox : {enableSearchAsYouType: true}}</code>).
 */
function options(element, optionsToSet) {
    if (optionsToSet === void 0) { optionsToSet = {}; }
    Initialization_1.Initialization.registerDefaultOptions(element, optionsToSet);
}
exports.options = options;
Initialization_1.Initialization.registerNamedMethod('options', function (element, optionsToSet) {
    if (optionsToSet === void 0) { optionsToSet = {}; }
    options(element, optionsToSet);
});
/**
 * Patch the given `methodName` on an instance of a component bound to an `HTMLElement` with a new handler.
 * @param element
 * @param methodName
 * @param handler
 */
function patch(element, methodName, handler) {
    Initialization_1.Initialization.monkeyPatchComponentMethod(methodName, element, handler);
}
exports.patch = patch;
Initialization_1.Initialization.registerNamedMethod('patch', function (element, methodName, handler) {
    patch(element, methodName, handler);
});
function initBox(element) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    var type, options = {}, injectMarkup;
    // This means : initBox, no type (no injection) and no options
    if (args.length == 0) {
        type = 'Standard';
        injectMarkup = false;
    }
    else if (args.length == 1) {
        // 1 arg, might be options or type
        // This mean a type (with injection) and no options
        if (typeof args[0] == 'string') {
            type = args[0];
            injectMarkup = true;
        }
        else if (typeof args[0] == 'object') {
            // This means no type(no injection) and with options
            type = 'Standard';
            injectMarkup = false;
            options = args[0];
        }
        else {
            Assert_1.Assert.fail('Invalid parameters to init a box');
        }
    }
    else if (args.length == 2) {
        // 2 args means both options and type (with injection);
        type = args[0];
        options = args[1];
        injectMarkup = true;
    }
    var merged = {};
    merged[type || 'Container'] = _.extend({}, options.SearchInterface, options[type]);
    options = _.extend({}, options, merged);
    Initialization_1.Initialization.initializeFramework(element, options, function () {
        return Initialization_1.Initialization.initBoxInterface(element, options, type, injectMarkup);
    });
}
exports.initBox = initBox;
Initialization_1.Initialization.registerNamedMethod('initBox', function (element) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    initBox(element, args);
});
function nuke(element) {
    Dom_1.$$(element).trigger(InitializationEvents_1.InitializationEvents.nuke);
}
exports.nuke = nuke;
Initialization_1.Initialization.registerNamedMethod('nuke', function (element) {
    nuke(element);
});
/**
 * Sets the path from where the chunks used for lazy loading will be loaded. In some cases, in IE11, we cannot automatically detect it, use this instead.
 * @param path This should be the path of the Coveo script. It should also have a trailing slash.
 */
function configureResourceRoot(path) {
    PublicPathUtils_1.PublicPathUtils.configureResourceRoot(path);
}
exports.configureResourceRoot = configureResourceRoot;
Initialization_1.Initialization.registerNamedMethod('configureResourceRoot', function (path) {
    configureResourceRoot(path);
});
/**
 * Asynchronously loads a module, or chunk.
 *
 * This is especially useful when you want to extend a base component, and make sure the lazy component loading process
 * recognizes it (see [Lazy Versus Eager Component Loading](https://developers.coveo.com/x/YBgvAg)).
 *
 * **Example:**
 *
 * ```typescript
 * export function lazyCustomFacet() {
 *   return Coveo.load<Facet>('Facet').then((Facet) => {
 *     class CustomFacet extends Facet {
 *       [ ... ]
 *     };
 *     Coveo.Initialization.registerAutoCreateComponent(CustomFacet);
 *     return CustomFacet;
 *   });
 * };
 *
 * Coveo.LazyInitialization.registerLazyComponent('CustomFacet', lazyCustomFacet);
 * ```
 *
 * You can also use this function to assert a component is fully loaded in your page before executing any code relating
 * to it.
 *
 * **Example:**
 *
 * > You could do `Coveo.load('Searchbox').then((Searchbox) => {})` to load the [`Searchbox`]{@link Searchbox}
 * > component, if it is not already loaded in your search page.
 *
 * @param id The identifier of the module you wish to load. In the case of components, this identifier is the component
 * name (e.g., `Facet`, `Searchbox`).
 * @returns {Promise} A Promise of the module, or chunk.
 */
function load(id) {
    if (Initialization_1.LazyInitialization.lazyLoadedComponents[id] != null) {
        return Initialization_1.LazyInitialization.getLazyRegisteredComponent(id);
    }
    else if (Initialization_1.LazyInitialization.lazyLoadedModule[id] != null) {
        return Initialization_1.LazyInitialization.getLazyRegisteredModule(id);
    }
    else {
        return Promise.reject("Module " + id + " is not available");
    }
}
exports.load = load;
Initialization_1.Initialization.registerNamedMethod('require', function (modules) {
    return load(modules);
});


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Assert_1 = __webpack_require__(5);
var Dom_1 = __webpack_require__(2);
var Logger_1 = __webpack_require__(11);
/**
 * Every component in the framework ultimately inherits from this base component class.
 */
var BaseComponent = /** @class */ (function () {
    function BaseComponent(element, type) {
        this.element = element;
        this.type = type;
        /**
         * A disabled component will not participate in the query, or listen to {@link ComponentEvents}.
         * @type {boolean}
         */
        this.disabled = false;
        Assert_1.Assert.exists(element);
        Assert_1.Assert.isNonEmptyString(type);
        this.logger = new Logger_1.Logger(this);
        BaseComponent.bindComponentToElement(element, this);
    }
    /**
     * Return the debug info about this component.
     * @returns {any}
     */
    BaseComponent.prototype.debugInfo = function () {
        var info = {};
        info[this['constructor']['ID']] = this;
        return info;
    };
    /**
     * Disable the component.
     * Normally this means that the component will not execute handlers for the framework events (query events, for example).
     * Component are enabled by default on creation.
     */
    BaseComponent.prototype.disable = function () {
        this.disabled = true;
    };
    /**
     * Enable the component.
     * Normally this means that the component will execute handlers for the framework events (query events, for example).
     * Components are enabled by default on creation.
     */
    BaseComponent.prototype.enable = function () {
        this.disabled = false;
    };
    BaseComponent.bindComponentToElement = function (element, component) {
        Assert_1.Assert.exists(element);
        Assert_1.Assert.exists(component);
        Assert_1.Assert.isNonEmptyString(component.type);
        element[BaseComponent.computeCssClassNameForType(component.type)] = component;
        Dom_1.$$(element).addClass(BaseComponent.computeCssClassNameForType(component.type));
        BaseComponent.getBoundComponentsForElement(element).push(component);
    };
    BaseComponent.computeCssClassName = function (componentClass) {
        return BaseComponent.computeCssClassNameForType(componentClass['ID']);
    };
    BaseComponent.computeCssClassNameForType = function (type) {
        Assert_1.Assert.isNonEmptyString(type);
        return 'Coveo' + type;
    };
    BaseComponent.computeSelectorForType = function (type) {
        Assert_1.Assert.isNonEmptyString(type);
        return '.' + BaseComponent.computeCssClassNameForType(type);
    };
    BaseComponent.getBoundComponentsForElement = function (element) {
        Assert_1.Assert.exists(element);
        if (element.CoveoBoundComponents == null) {
            element.CoveoBoundComponents = [];
        }
        return element.CoveoBoundComponents;
    };
    BaseComponent.getComponentRef = function (component) {
        return Coveo[component];
    };
    return BaseComponent;
}());
exports.BaseComponent = BaseComponent;


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _ = __webpack_require__(0);
var Defer = /** @class */ (function () {
    function Defer() {
    }
    Defer.defer = function (code) {
        Defer.functions.push(code);
        Defer.arm();
    };
    Defer.flush = function () {
        while (Defer.popOne()) { }
    };
    Defer.arm = function () {
        _.defer(function () {
            if (Defer.popOne()) {
                Defer.arm();
            }
        });
    };
    Defer.popOne = function () {
        if (Defer.functions.length > 0) {
            var fun = Defer.functions[0];
            Defer.functions = _.rest(Defer.functions);
            fun();
            return Defer.functions.length > 0;
        }
        else {
            return false;
        }
    };
    Defer.functions = [];
    return Defer;
}());
exports.Defer = Defer;


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Options_1 = __webpack_require__(58);
var Utils_1 = __webpack_require__(4);
var Strings_1 = __webpack_require__(8);
var _ = __webpack_require__(0);
var moment = __webpack_require__(98);
var DefaultDateToStringOptions = /** @class */ (function (_super) {
    __extends(DefaultDateToStringOptions, _super);
    function DefaultDateToStringOptions() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.now = moment().toDate();
        _this.useTodayYesterdayAndTomorrow = true;
        _this.useWeekdayIfThisWeek = true;
        _this.omitYearIfCurrentOne = true;
        _this.useLongDateFormat = false;
        _this.includeTimeIfToday = true;
        _this.includeTimeIfThisWeek = true;
        _this.alwaysIncludeTime = false;
        _this.predefinedFormat = undefined;
        return _this;
    }
    return DefaultDateToStringOptions;
}(Options_1.Options));
/**
 * The `DateUtils` class exposes methods to convert strings, numbers and date objects to standard ISO 8601 Date objects,
 * using the correct culture, language and format. It also offers methods to convert date objects to strings.
 */
var DateUtils = /** @class */ (function () {
    function DateUtils() {
    }
    // This function is used to call convertToStandardDate for legacy reasons. convertFromJsonDateIfNeeded was refactored to
    // convertToStandardDate, which would be a breaking change otherwise.
    DateUtils.convertFromJsonDateIfNeeded = function (date) {
        return DateUtils.convertToStandardDate(date);
    };
    /**
     * Tries to parse an argument of any type to a standard Date object.
     * @param date The value to parse. Can be of any type (string, number, Date, etc.).
     * @returns {any} The parsed Date object, or `Invalid Date` if the `date` argument was not recognized as a valid date.
     */
    DateUtils.convertToStandardDate = function (date) {
        if (_.isDate(date)) {
            return moment(date).toDate();
        }
        else if (date !== null && !isNaN(Number(date))) {
            return moment(Number(date)).toDate();
        }
        else if (_.isString(date)) {
            var formats = ['YYYY/MM/DD@HH:mm:ssZ', moment.ISO_8601];
            var dateMoment = moment(date, formats);
            return dateMoment.toDate();
        }
    };
    DateUtils.setLocale = function () {
        var currentLocale = String['locale'];
        // Our cultures.js directory contains 'no' which is the equivalent to 'nn' for momentJS
        if (currentLocale.toLowerCase() == 'no') {
            currentLocale = 'nn';
        }
        else if (currentLocale.toLowerCase() == 'es-es') {
            // Our cultures.js directory contains 'es-es' which is the equivalent to 'es' for momentJS
            currentLocale = 'es';
        }
        moment.locale(currentLocale);
        moment.updateLocale(currentLocale, {
            calendar: {
                lastDay: "[" + Strings_1.l('Yesterday') + "]",
                sameDay: "[" + Strings_1.l('Today') + "]",
                nextDay: "[" + Strings_1.l('Tomorrow') + "]"
            }
        });
    };
    /**
     * Creates a string from a Date object. The resulting string is in the format required for queries.
     * @param date The Date object to create a string from.
     * @returns {string} A string corresponding to the `date` argument value, in the `YYYY/MM/DD` format.
     */
    DateUtils.dateForQuery = function (date) {
        DateUtils.setLocale();
        var dateMoment = moment(date).format('YYYY/MM/DD');
        return dateMoment;
    };
    /**
     * Creates a cropped version of a Date object. The resulting object contains no time information.
     * @param date The original Date object to create a cropped Date object from.
     * @returns {Date} A cropped Date object corresponding to the `date` argument value, excluding its time information.
     */
    DateUtils.keepOnlyDatePart = function (date) {
        DateUtils.setLocale();
        var dateMoment = moment(date);
        return new Date(dateMoment.year(), dateMoment.month(), dateMoment.date());
    };
    /**
     * Creates an offset version of a Date object. The offset is counted in days.
     * @param date The original Date object to create an offset Date object from.
     * @param offset The number of days to add to (or subtract from) the `date` argument.
     * @returns {Date} An offset Date object corresponding to the `date` argument value plus the `offset` value.
     */
    DateUtils.offsetDateByDays = function (date, offset) {
        return moment(date)
            .add(offset, 'days')
            .toDate();
    };
    DateUtils.isTodayYesterdayOrTomorrow = function (d, options) {
        var dateOnly = moment(DateUtils.keepOnlyDatePart(d));
        var today = moment(DateUtils.keepOnlyDatePart(options.now));
        var daysDifference = dateOnly.diff(today, 'days');
        return daysDifference == 0 || daysDifference == 1 || daysDifference == -1;
    };
    /**
     * Creates a string from a Date object. The resulting string is formatted according to a set of options.
     * This method calls [ `keepOnlyDatePart` ]{@link DateUtils.keepOnlyDatePart} to remove time information from the date.
     * If you need to create a timestamp, use the [ `dateTimeToString` ]{@link DateUtils.dateTimeToString} method instead.
     * @param date The Date object to create a string from.
     * @param options The set of options to apply when formatting the resulting string. If you do not specify a value for
     * this parameter, the method uses a default set of options.
     * @returns {string} A date string corresponding to the `date` argument value, formatted according to the specified `options`.
     */
    DateUtils.dateToString = function (date, options) {
        DateUtils.setLocale();
        if (Utils_1.Utils.isNullOrUndefined(date)) {
            return '';
        }
        options = new DefaultDateToStringOptions().merge(options);
        var dateOnly = moment(DateUtils.keepOnlyDatePart(date));
        var today = moment(DateUtils.keepOnlyDatePart(options.now));
        if (options.predefinedFormat) {
            // yyyy was used to format dates before implementing moment.js, which only recognizes YYYY.
            return dateOnly.format(options.predefinedFormat.replace(/yyyy/g, 'YYYY'));
        }
        if (options.useTodayYesterdayAndTomorrow) {
            if (DateUtils.isTodayYesterdayOrTomorrow(date, options)) {
                return moment(dateOnly).calendar(moment(today));
            }
        }
        var isThisWeek = dateOnly.diff(moment(today), 'weeks') == 0;
        if (options.useWeekdayIfThisWeek && isThisWeek) {
            if (dateOnly.valueOf() > today.valueOf()) {
                return Strings_1.l('NextDay', dateOnly.format('dddd'));
            }
            else if (dateOnly.valueOf() < today.valueOf()) {
                return Strings_1.l('LastDay', dateOnly.format('dddd'));
            }
            else {
                return dateOnly.format('dddd');
            }
        }
        if (options.omitYearIfCurrentOne && dateOnly.year() === today.year()) {
            return dateOnly.format('MMMM DD');
        }
        if (options.useLongDateFormat) {
            return dateOnly.format('dddd, MMMM DD, YYYY');
        }
        return dateOnly.format('M/D/YYYY');
    };
    /**
     * Creates a string from a Date object. The string corresponds to the time information of the Date object.
     * @param date The Date object to create a string from.
     * @param options The set of options to apply when formatting the resulting string. If you do not specify a
     * value for this parameter, the method uses a default set of options.
     * @returns {string} A string containing the time information of the `date` argument, and formatted according to the specified `options`.
     */
    DateUtils.timeToString = function (date, options) {
        if (Utils_1.Utils.isNullOrUndefined(date)) {
            return '';
        }
        return moment(date).format('h:mm A');
    };
    /**
     * Creates a string from a Date object. The resulting string is formatted according to a set of options.
     * This method calls [ `timeToString` ]{@link DateUtils.timeToString} to add time information to the date.
     * If you need to create a date string without a timestamp, use the [ `dateToString` ]{@link DateUtils.dateToString} method instead.
     * @param date The date object to create a string from.
     * @param options The set of options to apply when formatting the resulting string. If you do not specify a value for
     * this parameter, the method uses a default set of options.
     * @returns {string} A date string corresponding to the `date` argument value, formatted according to the specified `options`.
     */
    DateUtils.dateTimeToString = function (date, options) {
        DateUtils.setLocale();
        if (Utils_1.Utils.isNullOrUndefined(date)) {
            return '';
        }
        options = new DefaultDateToStringOptions().merge(options);
        var today = DateUtils.keepOnlyDatePart(options.now);
        var isThisWeek = moment(date).diff(moment(today), 'weeks') == 0;
        var datePart = DateUtils.dateToString(date, options);
        var dateWithoutTime = DateUtils.keepOnlyDatePart(date);
        if (moment(date).isValid() &&
            (options.alwaysIncludeTime == true ||
                (options.includeTimeIfThisWeek == true && isThisWeek) ||
                (options.includeTimeIfToday == true && dateWithoutTime.valueOf() == today.valueOf()))) {
            return datePart + ', ' + DateUtils.timeToString(date);
        }
        else {
            return datePart;
        }
    };
    /**
     * Creates a string from a number. The resulting string is the localized name of the month that corresponds
     * to this number (e.g., `0` results in the localized version of `January`).
     * @param month The number to create a string from. Minimum value is `0` (which corresponds to `January`). Maximum
     * value is `11` (which corresponds to `December`).
     * @returns {string} A string whose value is the localized name of the corresponding `month`.
     */
    DateUtils.monthToString = function (month) {
        DateUtils.setLocale();
        var date = moment(new Date(1980, month)).toDate();
        return moment(date).format('MMMM');
    };
    /**
     * Validates whether a value is an instance of Date.
     * @param date The value to verify.
     * @returns {boolean} `true` if the `date` argument is an instance of Date; `false` otherwise.
     */
    DateUtils.isValid = function (date) {
        DateUtils.setLocale();
        if (date instanceof Date) {
            return !isNaN(date.getTime());
        }
        return false;
    };
    /**
     * Creates a string from two Date objects. The resulting string corresponds to the amount of time between those two dates.
     * @param from The Date object which contains the "oldest" value.
     * @param to The Date object which contains the "newest" value.
     * @returns {any} A string whose value corresponds to the amount of time between `from` and `to`,
     * or an empty string if either argument was undefined.
     */
    DateUtils.timeBetween = function (from, to) {
        if (Utils_1.Utils.isNullOrUndefined(from) || Utils_1.Utils.isNullOrUndefined(to)) {
            return '';
        }
        return (('0' + ((moment(to).valueOf() - moment(from).valueOf()) / (1000 * 60 * 60)).toFixed()).slice(-2) +
            ':' +
            ('0' + (((moment(to).valueOf() - moment(from).valueOf()) % (1000 * 60 * 60)) / (1000 * 60)).toFixed()).slice(-2) +
            ':' +
            ('0' + (((moment(to).valueOf() - moment(from).valueOf()) % (1000 * 60)) / 1000).toFixed()).slice(-2));
    };
    return DateUtils;
}());
exports.DateUtils = DateUtils;


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/// <reference path="../../lib/magic-box/index.d.ts" />
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * The `OmniboxEvents` static class contains the string definitions of all events that strongly relate to the
 * [`Omnibox`]{@link Omnibox} component.
 */
var OmniboxEvents = /** @class */ (function () {
    function OmniboxEvents() {
    }
    OmniboxEvents.populateOmnibox = 'populateOmnibox';
    /**
     * Triggered by the [`Omnibox`]{@link Omnibox} component before query completion suggestions are rendered.
     *
     * The out-of-the-box Coveo JavaScript Search Framework query completion suggestion addons (see the
     * [`enableFieldAddon`]{@link Omnibox.options.enableFieldAddon},
     * [`enableQueryExtensionAddon`]{@link Omnibox.options.enableQueryExtensionAddon}, and
     * [`enableQuerySuggestAddon`]{@link Omnibox.options.enableQuerySuggestAddon} options of the `Omnibox`) push their
     * respective suggestions in the argument object which is passed along with this event.
     *
     * All `populateOmniboxSuggestions` event handlers receive a
     * [`PopulateOmniboxSuggestionsEventArgs`]{@link IPopulateOmniboxSuggestionsEventArgs} object as an argument.
     *
     * @type {string} The string value is `populateOmniboxSuggestions`.
     */
    OmniboxEvents.populateOmniboxSuggestions = 'populateOmniboxSuggestions';
    OmniboxEvents.omniboxPreprocessResultForQuery = 'omniboxPreprocessResultForQuery';
    return OmniboxEvents;
}());
exports.OmniboxEvents = OmniboxEvents;


/***/ }),
/* 31 */,
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * The `ResultListEvents` static class contains the string definitions of all events that strongly relate to the result
 * list.
 *
 * See [Events](https://developers.coveo.com/x/bYGfAQ).
 */
var ResultListEvents = /** @class */ (function () {
    function ResultListEvents() {
    }
    /**
     * Triggered when the result list has just finished rendering the current page of results.
     *
     * @type {string} The string value is `newResultsDisplayed`.
     */
    ResultListEvents.newResultsDisplayed = 'newResultsDisplayed';
    /**
     * Triggered each time the result list has just finished rendering a single result.
     *
     * All `newResultDisplayed` event handlers receive a
     * [`DisplayedNewResultEventArgs`]{@link IDisplayedNewResultEventArgs} object as an argument.
     *
     * @type {string} The string value is `newResultDisplayed`.
     */
    ResultListEvents.newResultDisplayed = 'newResultDisplayed';
    /**
     * Triggered by the [`ResultLink`]{@link ResultLink} result template component when its
     * [`openQuickview`]{@link ResultLink.options.openQuickview} option is set to `true` and the end user clicks the
     * result link. The [`Quickview`]{@link Quickview} component listens to this event to be able to open the quickview
     * modal window in reaction.
     *
     * See also the [`openQuickview`]{@link QuickviewEvents.openQuickview} event (which is identical to this one, except
     * that it is triggered by the [`QuickviewDocument`] result template component instead).
     *
     * All `openQuickview` event handlers receive an [`OpenQuickviewEventArgs`]{@link IOpenQuickviewEventArgs} object as
     * an argument
     *
     * @type {string} The string value is `openQuickview`.
     */
    ResultListEvents.openQuickview = 'openQuickview';
    /**
     * Triggered by the [`ResultLayout`]{@link ResultLayout} component whenever the current result layout changes (see
     * [Result Layouts](https://developers.coveo.com/x/yQUvAg)).
     *
     * All `changeLayout` event handlers receive a [`ChangeLayoutEventArgs`]{@link IChangeLayoutEventArgs} object as an
     * argument.
     *
     * @type {string} The string value is `changeLayout`.
     */
    ResultListEvents.changeLayout = 'changeLayout';
    return ResultListEvents;
}());
exports.ResultListEvents = ResultListEvents;


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var RootComponent_1 = __webpack_require__(34);
var QueryBuilder_1 = __webpack_require__(45);
var LocalStorageUtils_1 = __webpack_require__(35);
var Assert_1 = __webpack_require__(5);
var SearchEndpointWithDefaultCallOptions_1 = __webpack_require__(234);
var QueryEvents_1 = __webpack_require__(10);
var QueryUtils_1 = __webpack_require__(19);
var Defer_1 = __webpack_require__(28);
var Dom_1 = __webpack_require__(2);
var Utils_1 = __webpack_require__(4);
var BaseComponent_1 = __webpack_require__(27);
var ExternalModulesShim_1 = __webpack_require__(23);
var coveo_analytics_1 = __webpack_require__(85);
var _ = __webpack_require__(0);
var UrlUtils_1 = __webpack_require__(42);
var DefaultQueryOptions = /** @class */ (function () {
    function DefaultQueryOptions() {
        this.searchAsYouType = false;
        this.closeModalBox = true;
        this.cancel = false;
        this.logInActionsHistory = false;
        this.shouldRedirectStandaloneSearchbox = true;
    }
    return DefaultQueryOptions;
}());
/**
 * This class is automatically instantiated and bound to the root of your search interface when you initialize the framework.<br/>
 * It is essentially a singleton that wraps the access to the {@link SearchEndpoint} endpoint to execute query, and is in charge of triggering the different query events.<br/>
 * This is what every component of the framework uses internally to execute query or access the endpoint.<br/>
 * When calling <code>Coveo.executeQuery</code> this class is used.
 */
var QueryController = /** @class */ (function (_super) {
    __extends(QueryController, _super);
    /**
     * Create a new query controller
     * @param element
     * @param options
     */
    function QueryController(element, options, usageAnalytics, searchInterface) {
        var _this = _super.call(this, element, QueryController.ID) || this;
        _this.options = options;
        _this.usageAnalytics = usageAnalytics;
        _this.searchInterface = searchInterface;
        _this.showingExecutingQueryAnimation = false;
        _this.localStorage = new LocalStorageUtils_1.LocalStorageUtils('lastQueryHash');
        Assert_1.Assert.exists(element);
        Assert_1.Assert.exists(options);
        _this.firstQuery = true;
        _this.historyStore = new coveo_analytics_1.history.HistoryStore();
        return _this;
    }
    /**
     * Set the {@link SearchEndpoint} that the query controller should use to execute query
     * @param endpoint
     */
    QueryController.prototype.setEndpoint = function (endpoint) {
        this.overrideEndpoint = endpoint;
        this.logger.debug('Endpoint set', endpoint);
    };
    /**
     * Get the {@link SearchEndpoint} that is currently used by the query controller to execute query
     * @returns {SearchEndpoint}
     */
    QueryController.prototype.getEndpoint = function () {
        var endpoint = this.overrideEndpoint || this.options.endpoint;
        // We must wrap the endpoint in a decorator that'll add the call options
        // we obtain by firing the proper event. Those are used for authentication
        // providers, and I guess other stuff later on.
        return new SearchEndpointWithDefaultCallOptions_1.SearchEndpointWithDefaultCallOptions(endpoint, this.getCallOptions());
    };
    /**
     * Return the last query that was performed by the query controller
     * @returns {IQuery|Query}
     */
    QueryController.prototype.getLastQuery = function () {
        return this.lastQuery || new QueryBuilder_1.QueryBuilder().build();
    };
    /**
     * Return the last query results set.
     * @returns {IQueryResults}
     */
    QueryController.prototype.getLastResults = function () {
        return this.lastQueryResults;
    };
    /**
     * Execute a query and return a Promise of IQueryResults.<br/>
     * This will execute the normal query flow, triggering all the necessary query events (newQuery <br/>
     * All components present in the interface will act accordingly (modify the query and render results if needed).
     * @param options
     * @returns {Promise<IQueryResults>}
     */
    QueryController.prototype.executeQuery = function (options) {
        var _this = this;
        options = _.extend(new DefaultQueryOptions(), options);
        if (options.closeModalBox) {
            ExternalModulesShim_1.ModalBox.close(true);
        }
        this.logger.debug('Executing new query');
        this.cancelAnyCurrentPendingQuery();
        if (options.beforeExecuteQuery != null) {
            options.beforeExecuteQuery();
        }
        if (!options.ignoreWarningSearchEvent) {
            this.usageAnalytics.warnAboutSearchEvent();
        }
        this.showExecutingQueryAnimation();
        var dataToSendOnNewQuery = {
            searchAsYouType: options.searchAsYouType,
            cancel: options.cancel,
            origin: options.origin,
            shouldRedirectStandaloneSearchbox: options.shouldRedirectStandaloneSearchbox
        };
        this.newQueryEvent(dataToSendOnNewQuery);
        if (dataToSendOnNewQuery.cancel) {
            this.cancelQuery();
            return;
        }
        var queryBuilder = this.createQueryBuilder(options);
        // The query was canceled
        if (!queryBuilder) {
            return;
        }
        var query = queryBuilder.build();
        if (options.logInActionsHistory) {
            this.logQueryInActionsHistory(query, options.isFirstQuery);
        }
        var endpointToUse = this.getEndpoint();
        var promise = (this.currentPendingQuery = endpointToUse.search(query));
        promise
            .then(function (queryResults) {
            Assert_1.Assert.exists(queryResults);
            var firstQuery = _this.firstQuery;
            if (_this.firstQuery) {
                _this.firstQuery = false;
            }
            // If our promise is no longer the current one, then the query
            // has been cancel. We should do nothing here.
            if (promise !== _this.currentPendingQuery) {
                return;
            }
            _this.logger.debug('Query results received', query, queryResults);
            var enableHistory = _this.searchInterface && _this.searchInterface.options && _this.searchInterface.options.enableHistory;
            if ((!firstQuery || enableHistory) && _this.keepLastSearchUid(query, queryResults)) {
                queryResults.searchUid = _this.getLastSearchUid();
                queryResults._reusedSearchUid = true;
                QueryUtils_1.QueryUtils.setPropertyOnResults(queryResults, 'queryUid', _this.getLastSearchUid());
            }
            else {
                _this.lastQueryHash = _this.queryHash(query, queryResults);
                _this.lastSearchUid = queryResults.searchUid;
            }
            _this.lastQuery = query;
            _this.lastQueryResults = queryResults;
            _this.currentError = null;
            var dataToSendOnPreprocessResult = {
                queryBuilder: queryBuilder,
                query: query,
                results: queryResults,
                searchAsYouType: options.searchAsYouType
            };
            _this.preprocessResultsEvent(dataToSendOnPreprocessResult);
            var dataToSendOnNoResult = {
                queryBuilder: queryBuilder,
                query: query,
                results: queryResults,
                searchAsYouType: options.searchAsYouType,
                retryTheQuery: false
            };
            if (queryResults.results.length == 0) {
                _this.noResultEvent(dataToSendOnNoResult);
            }
            if (dataToSendOnNoResult.retryTheQuery) {
                // When retrying the query, we must forward the results to the deferred we
                // initially returned, in case someone is listening on it.
                return _this.executeQuery();
            }
            else {
                _this.lastQueryBuilder = queryBuilder;
                _this.currentPendingQuery = undefined;
                var dataToSendOnSuccess_1 = {
                    queryBuilder: queryBuilder,
                    query: query,
                    results: queryResults,
                    searchAsYouType: options.searchAsYouType
                };
                _this.querySuccessEvent(dataToSendOnSuccess_1);
                Defer_1.Defer.defer(function () {
                    _this.deferredQuerySuccessEvent(dataToSendOnSuccess_1);
                    _this.hideExecutingQueryAnimation();
                });
                return queryResults;
            }
        })
            .catch(function (error) {
            // If our deferred is no longer the current one, then the query
            // has been cancel. We should do nothing here.
            if (promise !== _this.currentPendingQuery) {
                return;
            }
            _this.logger.error('Query triggered an error', query, error);
            // this.currentPendingQuery.reject(error);
            _this.currentPendingQuery = undefined;
            var dataToSendOnError = {
                queryBuilder: queryBuilder,
                endpoint: endpointToUse,
                query: query,
                error: error,
                searchAsYouType: options.searchAsYouType
            };
            _this.lastQuery = query;
            _this.lastQueryResults = null;
            _this.currentError = error;
            _this.queryError(dataToSendOnError);
            _this.hideExecutingQueryAnimation();
        });
        var dataToSendDuringQuery = {
            queryBuilder: queryBuilder,
            query: query,
            searchAsYouType: options.searchAsYouType,
            promise: promise
        };
        this.duringQueryEvent(dataToSendDuringQuery);
        return this.currentPendingQuery;
    };
    /**
     * Using the same parameters as the last successful query, fetch another batch of results. Particularly useful for infinite scrolling, for example.
     * @param count
     * @returns {any}
     */
    QueryController.prototype.fetchMore = function (count) {
        var _this = this;
        if (this.currentPendingQuery != undefined) {
            return undefined;
        }
        // Send all pending events (think : search as you type)
        // This allows us to get the real search id for the results when the query returns
        this.usageAnalytics.sendAllPendingEvents();
        var queryBuilder = new QueryBuilder_1.QueryBuilder();
        this.continueLastQueryBuilder(queryBuilder, count);
        var query = queryBuilder.build();
        var endpointToUse = this.getEndpoint();
        var promise = (this.currentPendingQuery = endpointToUse.search(query));
        var dataToSendDuringQuery = {
            queryBuilder: queryBuilder,
            query: query,
            searchAsYouType: false,
            promise: promise
        };
        Dom_1.$$(this.element).trigger(QueryEvents_1.QueryEvents.duringFetchMoreQuery, dataToSendDuringQuery);
        this.lastQueryBuilder = queryBuilder;
        this.lastQuery = query;
        promise.then(function (results) {
            // We re-use the search id from the initial search here, even though the
            // server provided us with a new one. 'Fetch mores' are considered to be
            // the same query from an analytics point of view.
            _this.currentPendingQuery = undefined;
            if (_this.lastQueryResults == null) {
                _this.lastQueryResults = results;
            }
            else {
                _.forEach(results.results, function (result) {
                    _this.lastQueryResults.results.push(result);
                });
            }
            var dataToSendOnPreprocessResult = {
                queryBuilder: queryBuilder,
                query: query,
                results: results,
                searchAsYouType: false
            };
            _this.preprocessResultsEvent(dataToSendOnPreprocessResult);
            QueryUtils_1.QueryUtils.setIndexAndUidOnQueryResults(query, results, _this.getLastSearchUid(), results.pipeline, results.splitTestRun);
            var dataToSendOnFetchMoreSuccess = {
                query: query,
                results: results,
                queryBuilder: queryBuilder,
                searchAsYouType: false
            };
            _this.fetchMoreSuccessEvent(dataToSendOnFetchMoreSuccess);
        });
        return this.currentPendingQuery;
    };
    /**
     * Cancel any pending query
     */
    QueryController.prototype.cancelQuery = function () {
        this.cancelAnyCurrentPendingQuery();
        this.hideExecutingQueryAnimation();
    };
    QueryController.prototype.deferExecuteQuery = function (options) {
        var _this = this;
        this.showExecutingQueryAnimation();
        Defer_1.Defer.defer(function () { return _this.executeQuery(options); });
    };
    QueryController.prototype.ensureCreatedQueryBuilder = function () {
        if (!this.createdOneQueryBuilder) {
            this.createQueryBuilder(new DefaultQueryOptions());
        }
    };
    QueryController.prototype.createQueryBuilder = function (options) {
        Assert_1.Assert.exists(options);
        this.createdOneQueryBuilder = true;
        var queryBuilder = new QueryBuilder_1.QueryBuilder();
        // Default values, components will probably override them if they exists
        queryBuilder.locale = String['locale'];
        queryBuilder.firstResult = queryBuilder.firstResult || 0;
        // Allow outside code to customize the query builder. We provide two events,
        // to allow someone to have a peep at the query builder after the first phase
        // and add some stuff depending on what was put in there. The facets are using
        // this mechanism to generate query overrides.
        var dataToSendDuringBuildingQuery = {
            queryBuilder: queryBuilder,
            searchAsYouType: options.searchAsYouType,
            cancel: options.cancel
        };
        this.buildingQueryEvent(dataToSendDuringBuildingQuery);
        var dataToSendDuringDoneBuildingQuery = {
            queryBuilder: queryBuilder,
            searchAsYouType: options.searchAsYouType,
            cancel: options.cancel
        };
        this.doneBuildingQueryEvent(dataToSendDuringDoneBuildingQuery);
        if (dataToSendDuringBuildingQuery.cancel || dataToSendDuringDoneBuildingQuery.cancel) {
            this.cancelQuery();
            return;
        }
        var pipeline = this.getPipelineInUrl();
        if (pipeline) {
            queryBuilder.pipeline = pipeline;
        }
        return queryBuilder;
    };
    QueryController.prototype.isStandaloneSearchbox = function () {
        return Utils_1.Utils.isNonEmptyString(this.options.searchPageUri);
    };
    QueryController.prototype.saveLastQuery = function () {
        this.localStorage.save({
            expire: new Date().getTime() + 1000 * 60 * 30,
            hash: this.lastQueryHash,
            uid: this.lastSearchUid
        });
    };
    // This field is exposed for components rendered in the results or on-demand which
    // need access to the entire query. For example, the QuickviewDocument need to pass
    // the entire query to the Search API. For other components, QueryStateModel or
    // listening to events like 'doneBuildingQuery' is the way to go.
    QueryController.prototype.getLastQueryHash = function () {
        if (this.lastQueryHash != null) {
            return this.lastQueryHash;
        }
        this.loadLastQueryHash();
        return this.lastQueryHash || this.queryHash(new QueryBuilder_1.QueryBuilder().build());
    };
    QueryController.prototype.getLastSearchUid = function () {
        if (this.lastSearchUid != null) {
            return this.lastSearchUid;
        }
        this.loadLastQueryHash();
        return this.lastSearchUid;
    };
    QueryController.prototype.loadLastQueryHash = function () {
        var lastQuery = this.localStorage.load();
        if (lastQuery != null && new Date().getTime() <= lastQuery.expire) {
            this.lastQueryHash = lastQuery.hash;
            this.lastSearchUid = lastQuery.uid;
            this.localStorage.remove();
        }
    };
    QueryController.prototype.continueLastQueryBuilder = function (queryBuilder, count) {
        _.extend(queryBuilder, this.lastQueryBuilder);
        queryBuilder.firstResult = queryBuilder.firstResult + queryBuilder.numberOfResults;
        queryBuilder.numberOfResults = count;
    };
    QueryController.prototype.getPipelineInUrl = function () {
        return UrlUtils_1.UrlUtils.getUrlParameter('pipeline');
    };
    QueryController.prototype.cancelAnyCurrentPendingQuery = function () {
        if (Utils_1.Utils.exists(this.currentPendingQuery)) {
            this.logger.debug('Cancelling current pending query');
            Promise.reject('Cancelling current pending query');
            this.currentPendingQuery = undefined;
            return true;
        }
        return false;
    };
    QueryController.prototype.showExecutingQueryAnimation = function () {
        if (!this.showingExecutingQueryAnimation) {
            Dom_1.$$(this.element).addClass('coveo-executing-query');
            this.showingExecutingQueryAnimation = true;
        }
    };
    QueryController.prototype.hideExecutingQueryAnimation = function () {
        if (this.showingExecutingQueryAnimation) {
            Dom_1.$$(this.element).removeClass('coveo-executing-query');
            this.showingExecutingQueryAnimation = false;
        }
    };
    QueryController.prototype.keepLastSearchUid = function (query, queryResults) {
        return this.getLastQueryHash() == this.queryHash(query, queryResults);
    };
    QueryController.prototype.queryHash = function (query, queryResults) {
        var queryHash = JSON.stringify(_.omit(query, 'firstResult', 'groupBy', 'debug'));
        if (queryResults != null) {
            queryHash += queryResults.pipeline;
        }
        return queryHash;
    };
    QueryController.prototype.getCallOptions = function () {
        var args = {
            options: {
                authentication: []
            }
        };
        Dom_1.$$(this.element).trigger(QueryEvents_1.QueryEvents.buildingCallOptions, args);
        return args.options;
    };
    QueryController.prototype.newQueryEvent = function (args) {
        Dom_1.$$(this.element).trigger(QueryEvents_1.QueryEvents.newQuery, args);
    };
    QueryController.prototype.buildingQueryEvent = function (args) {
        Dom_1.$$(this.element).trigger(QueryEvents_1.QueryEvents.buildingQuery, args);
    };
    QueryController.prototype.doneBuildingQueryEvent = function (args) {
        Dom_1.$$(this.element).trigger(QueryEvents_1.QueryEvents.doneBuildingQuery, args);
    };
    QueryController.prototype.duringQueryEvent = function (args) {
        Dom_1.$$(this.element).trigger(QueryEvents_1.QueryEvents.duringQuery, args);
    };
    QueryController.prototype.querySuccessEvent = function (args) {
        Dom_1.$$(this.element).trigger(QueryEvents_1.QueryEvents.querySuccess, args);
    };
    QueryController.prototype.fetchMoreSuccessEvent = function (args) {
        Dom_1.$$(this.element).trigger(QueryEvents_1.QueryEvents.fetchMoreSuccess, args);
    };
    QueryController.prototype.deferredQuerySuccessEvent = function (args) {
        Dom_1.$$(this.element).trigger(QueryEvents_1.QueryEvents.deferredQuerySuccess, args);
    };
    QueryController.prototype.queryError = function (args) {
        Dom_1.$$(this.element).trigger(QueryEvents_1.QueryEvents.queryError, args);
    };
    QueryController.prototype.preprocessResultsEvent = function (args) {
        Dom_1.$$(this.element).trigger(QueryEvents_1.QueryEvents.preprocessResults, args);
    };
    QueryController.prototype.noResultEvent = function (args) {
        Dom_1.$$(this.element).trigger(QueryEvents_1.QueryEvents.noResults, args);
    };
    QueryController.prototype.debugInfo = function () {
        var _this = this;
        var info = {
            query: this.lastQuery
        };
        if (this.lastQueryResults != null) {
            info.queryDuration = function () { return _this.buildQueryDurationSection(_this.lastQueryResults); };
            info.results = function () { return _.omit(_this.lastQueryResults, 'results'); };
        }
        if (this.currentError != null) {
            info.error = function () { return _this.currentError; };
        }
        return info;
    };
    QueryController.prototype.buildQueryDurationSection = function (queryResults) {
        var dom = Dom_1.Dom.createElement('div', { className: 'coveo-debug-queryDuration' });
        var graph = Dom_1.Dom.createElement('div', { className: 'coveo-debug-durations' });
        var debugRef = BaseComponent_1.BaseComponent.getComponentRef('Debug');
        dom.appendChild(graph);
        _.forEach(debugRef.durationKeys, function (key) {
            var duration = queryResults[key];
            if (duration != null) {
                graph.appendChild(Dom_1.Dom.createElement('div', {
                    className: 'coveo-debug-duration',
                    style: "width:" + duration + "px",
                    'data-id': key
                }));
                var legend = Dom_1.Dom.createElement('div', { className: 'coveo-debug-duration-legend', 'data-id': key });
                dom.appendChild(legend);
                var keyDom = Dom_1.Dom.createElement('span', { className: 'coveo-debug-duration-label' });
                keyDom.appendChild(document.createTextNode(key));
                legend.appendChild(keyDom);
                var durationDom = Dom_1.Dom.createElement('span', { className: 'coveo-debug-duration-value' });
                durationDom.appendChild(document.createTextNode(duration));
                legend.appendChild(durationDom);
            }
        });
        return dom;
    };
    QueryController.prototype.logQueryInActionsHistory = function (query, isFirstQuery) {
        var queryElement = {
            name: 'Query',
            value: query.q,
            time: JSON.stringify(new Date())
        };
        this.historyStore.addElement(queryElement);
    };
    QueryController.ID = 'QueryController';
    return QueryController;
}(RootComponent_1.RootComponent));
exports.QueryController = QueryController;


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var BaseComponent_1 = __webpack_require__(27);
var RootComponent = /** @class */ (function (_super) {
    __extends(RootComponent, _super);
    function RootComponent(element, type) {
        var _this = _super.call(this, element, type) || this;
        _this.element = element;
        _this.type = type;
        return _this;
    }
    return RootComponent;
}(BaseComponent_1.BaseComponent));
exports.RootComponent = RootComponent;


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var localStorage = window.localStorage;
var LocalStorageUtils = /** @class */ (function () {
    function LocalStorageUtils(id) {
        this.id = id;
    }
    LocalStorageUtils.prototype.save = function (data) {
        try {
            if (localStorage != null) {
                localStorage.setItem(this.getLocalStorageKey(), JSON.stringify(data));
            }
        }
        catch (error) { }
    };
    LocalStorageUtils.prototype.load = function () {
        try {
            if (localStorage == null) {
                return null;
            }
            var value = localStorage.getItem(this.getLocalStorageKey());
            return value && JSON.parse(value);
        }
        catch (error) {
            return null;
        }
    };
    LocalStorageUtils.prototype.remove = function (key) {
        try {
            if (localStorage != null) {
                if (key == undefined) {
                    localStorage.removeItem(this.getLocalStorageKey());
                }
                else {
                    var oldObj = this.load();
                    delete oldObj[key];
                    this.save(oldObj);
                }
            }
        }
        catch (error) { }
    };
    LocalStorageUtils.prototype.getLocalStorageKey = function () {
        return 'coveo-' + this.id;
    };
    return LocalStorageUtils;
}());
exports.LocalStorageUtils = LocalStorageUtils;


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Assert_1 = __webpack_require__(5);
var Utils_1 = __webpack_require__(4);
var _ = __webpack_require__(0);
var MiscModules_1 = __webpack_require__(52);
var HashUtils = /** @class */ (function () {
    function HashUtils() {
    }
    HashUtils.getHash = function (w) {
        if (w === void 0) { w = window; }
        Assert_1.Assert.exists(w);
        // window.location.hash returns the DECODED hash on Firefox (it's a well known bug),
        // so any & in values will be already unescaped. This breaks our value splitting.
        // The following trick works on all browsers.
        var ret = '#' + (w.location.href.split('#')[1] || '');
        return HashUtils.getAjaxcrawlableHash(ret);
    };
    HashUtils.getValue = function (key, toParse) {
        Assert_1.Assert.isNonEmptyString(key);
        Assert_1.Assert.exists(toParse);
        toParse = HashUtils.getAjaxcrawlableHash(toParse);
        var paramValue = HashUtils.getRawValue(key, toParse);
        if (paramValue != undefined) {
            paramValue = HashUtils.getValueDependingOnType(key, paramValue);
        }
        return paramValue;
    };
    HashUtils.encodeValues = function (values) {
        var hash = [];
        _.each(values, function (valueToEncode, key, obj) {
            var encodedValue = '';
            if (Utils_1.Utils.isNonEmptyArray(valueToEncode)) {
                encodedValue = HashUtils.encodeArray(valueToEncode);
            }
            else if (_.isObject(valueToEncode) && Utils_1.Utils.isNonEmptyArray(_.keys(valueToEncode))) {
                encodedValue = HashUtils.encodeObject(valueToEncode);
            }
            else if (!Utils_1.Utils.isNullOrUndefined(valueToEncode)) {
                encodedValue = Utils_1.Utils.safeEncodeURIComponent(valueToEncode.toString());
            }
            if (encodedValue != '') {
                hash.push(key + '=' + encodedValue);
            }
        });
        return hash.join('&');
    };
    HashUtils.getAjaxcrawlableHash = function (hash) {
        if (hash[1] != undefined && hash[1] == '!') {
            return hash.substring(0, 1) + hash.substring(2);
        }
        else {
            return hash;
        }
    };
    HashUtils.getRawValue = function (key, toParse) {
        Assert_1.Assert.exists(key);
        Assert_1.Assert.exists(toParse);
        Assert_1.Assert.check(toParse.indexOf('#') == 0 || toParse == '');
        var toParseArray = toParse.substr(1).split('&');
        var paramPos = 0;
        var loop = true;
        var paramValue = undefined;
        while (loop) {
            var paramValuePair = toParseArray[paramPos].split('=');
            if (paramValuePair[0] == key) {
                loop = false;
                paramValue = paramValuePair[1];
            }
            else {
                paramPos++;
                if (paramPos >= toParseArray.length) {
                    paramPos = undefined;
                    loop = false;
                }
            }
        }
        return paramValue;
    };
    HashUtils.getValueDependingOnType = function (key, paramValue) {
        var type = HashUtils.getValueType(key, paramValue);
        var returnValue;
        if (type == 'object') {
            returnValue = HashUtils.decodeObject(paramValue);
        }
        else if (type == 'array') {
            returnValue = HashUtils.decodeArray(paramValue);
        }
        else {
            try {
                returnValue = decodeURIComponent(paramValue);
            }
            catch (e) {
                new MiscModules_1.Logger(HashUtils).warn('Error while decoding a value from the URL as a standard value', e, key, paramValue);
            }
        }
        return returnValue;
    };
    HashUtils.getValueType = function (key, paramValue) {
        if (key == 'q') {
            return 'other';
        }
        else if (HashUtils.isObject(paramValue)) {
            return 'object';
        }
        else if (HashUtils.isArray(paramValue)) {
            return 'array';
        }
        else {
            return 'other';
        }
    };
    HashUtils.isArrayStartNotEncoded = function (value) {
        return value.substr(0, 1) == HashUtils.DELIMITER.arrayStart;
    };
    HashUtils.isArrayStartEncoded = function (value) {
        return value.indexOf(Utils_1.Utils.safeEncodeURIComponent(HashUtils.DELIMITER.arrayStart)) == 0;
    };
    HashUtils.isArrayEndNotEncoded = function (value) {
        return value.substr(value.length - 1);
    };
    HashUtils.isArrayEndEncoded = function (value) {
        return (value.indexOf(Utils_1.Utils.safeEncodeURIComponent(HashUtils.DELIMITER.arrayEnd)) ==
            value.length - Utils_1.Utils.safeEncodeURIComponent(HashUtils.DELIMITER.arrayEnd).length);
    };
    HashUtils.isObjectStartNotEncoded = function (value) {
        return value.substr(0, 1) == HashUtils.DELIMITER.objectStart;
    };
    HashUtils.isObjectStartEncoded = function (value) {
        return value.indexOf(Utils_1.Utils.safeEncodeURIComponent(HashUtils.DELIMITER.objectStart)) == 0;
    };
    HashUtils.isObjectEndNotEncoded = function (value) {
        return value.substr(value.length - 1) == HashUtils.DELIMITER.objectEnd;
    };
    HashUtils.isObjectEndEncoded = function (value) {
        return (value.indexOf(Utils_1.Utils.safeEncodeURIComponent(HashUtils.DELIMITER.objectEnd)) ==
            value.length - Utils_1.Utils.safeEncodeURIComponent(HashUtils.DELIMITER.objectEnd).length);
    };
    HashUtils.isObject = function (value) {
        var isObjectStart = HashUtils.isObjectStartNotEncoded(value) || HashUtils.isObjectStartEncoded(value);
        var isObjectEnd = HashUtils.isObjectEndNotEncoded(value) || HashUtils.isObjectEndEncoded(value);
        return isObjectStart && isObjectEnd;
    };
    HashUtils.isArray = function (value) {
        var isArrayStart = HashUtils.isArrayStartNotEncoded(value) || HashUtils.isArrayStartEncoded(value);
        var isArrayEnd = HashUtils.isArrayEndNotEncoded(value) || HashUtils.isArrayEndEncoded(value);
        return isArrayStart && isArrayEnd;
    };
    HashUtils.encodeArray = function (array) {
        var arrayReturn = _.map(array, function (value) {
            return Utils_1.Utils.safeEncodeURIComponent(value);
        });
        return HashUtils.DELIMITER.arrayStart + arrayReturn.join(',') + HashUtils.DELIMITER.arrayEnd;
    };
    HashUtils.encodeObject = function (obj) {
        var _this = this;
        var retArray = _.map(obj, function (val, key, obj) {
            return "\"" + Utils_1.Utils.safeEncodeURIComponent(key) + "\":" + _this.encodeValue(val);
        });
        return HashUtils.DELIMITER.objectStart + retArray.join(' , ') + HashUtils.DELIMITER.objectEnd;
    };
    HashUtils.encodeValue = function (val) {
        var encodedValue = '';
        if (_.isArray(val)) {
            encodedValue = HashUtils.encodeArray(val);
        }
        else if (_.isObject(val)) {
            encodedValue = JSON.stringify(val);
        }
        else if (_.isNumber(val) || _.isBoolean(val)) {
            encodedValue = Utils_1.Utils.safeEncodeURIComponent(val.toString());
        }
        else {
            encodedValue = '"' + Utils_1.Utils.safeEncodeURIComponent(val) + '"';
        }
        return encodedValue;
    };
    HashUtils.decodeObject = function (obj) {
        if (HashUtils.isObjectStartEncoded(obj) && HashUtils.isObjectEndEncoded(obj)) {
            obj = obj.replace(/encodeURIComponent(HashUtils.Delimiter.objectStart)/, HashUtils.DELIMITER.objectStart);
            obj = obj.replace(Utils_1.Utils.safeEncodeURIComponent(HashUtils.DELIMITER.objectEnd), HashUtils.DELIMITER.objectEnd);
        }
        try {
            var containsArray = /(\[.*\])/.exec(obj);
            if (containsArray) {
                obj = obj.replace(/(\[.*\])/, "[" + this.decodeArray(containsArray[1])
                    .map(function (val) { return "\"" + val + "\""; })
                    .join(',') + "]");
            }
            var decoded = decodeURIComponent(obj);
            return JSON.parse(decoded);
        }
        catch (e) {
            new MiscModules_1.Logger(HashUtils).warn('Error while decoding a value from the URL as an object', e, obj);
            return {};
        }
    };
    HashUtils.decodeArray = function (value) {
        if (HashUtils.isArrayStartEncoded(value) && HashUtils.isArrayEndEncoded(value)) {
            value = value.replace(Utils_1.Utils.safeEncodeURIComponent(HashUtils.DELIMITER.arrayStart), HashUtils.DELIMITER.arrayStart);
            value = value.replace(Utils_1.Utils.safeEncodeURIComponent(HashUtils.DELIMITER.arrayEnd), HashUtils.DELIMITER.arrayEnd);
        }
        value = value.substr(1);
        value = value.substr(0, value.length - 1);
        var array = value.split(',');
        return _.chain(array)
            .map(function (val) {
            try {
                return decodeURIComponent(val);
            }
            catch (e) {
                new MiscModules_1.Logger(HashUtils).warn('Error while decoding a value from the URL as an array', e, val, value);
                return null;
            }
        })
            .compact()
            .value();
    };
    HashUtils.DELIMITER = {
        objectStart: '{',
        objectEnd: '}',
        arrayStart: '[',
        arrayEnd: ']',
        objectStartRegExp: '^{',
        objectEndRegExp: '}+$',
        arrayStartRegExp: '^[',
        arrayEndRegExp: ']+$'
    };
    return HashUtils;
}());
exports.HashUtils = HashUtils;


/***/ }),
/* 37 */,
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * This static class is there to contains the different string definition for all the events related to {@link Breadcrumb}.
 */
var BreadcrumbEvents = /** @class */ (function () {
    function BreadcrumbEvents() {
    }
    /**
     * Triggered when the breadcrumb needs to update its content. External code can use this event to provide bits of HTML that should be included in the breadcrumb.
     *
     * All handlers bound to this event will receive a {@link IPopulateBreadcrumbEventArgs} as an argument.
     */
    BreadcrumbEvents.populateBreadcrumb = 'populateBreadcrumb';
    /**
     * Triggered when the user clicks the Clear All button in the breadcrumb. When this event is raised, every filter that is included in the breadcrumb should be removed.
     *
     * This event does not provide custom event data.
     */
    BreadcrumbEvents.clearBreadcrumb = 'clearBreadcrumb';
    BreadcrumbEvents.redrawBreadcrumb = 'redrawBreadcrumb';
    return BreadcrumbEvents;
}());
exports.BreadcrumbEvents = BreadcrumbEvents;


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var SettingsEvents = /** @class */ (function () {
    function SettingsEvents() {
    }
    SettingsEvents.settingsPopulateMenu = 'settingsPopulateMenu';
    return SettingsEvents;
}());
exports.SettingsEvents = SettingsEvents;


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Assert_1 = __webpack_require__(5);
__webpack_require__(219);
exports.MEDIUM_SCREEN_WIDTH = 800;
exports.SMALL_SCREEN_WIDTH = 480;
/**
 * This class serves as a way to get and set the different screen size breakpoints for the interface.
 *
 * By setting those, you can impact, amongst others, the {@link Facet}'s, {@link Tab}'s or the {@link ResultList}'s behaviour.
 *
 * For example, the {@link Facet} components of your interface will switch to a dropdown menu when the screen size reaches 800px or less.
 *
 * You could modify this value using `this` calls
 *
 * Normally, you would interact with this class using the instance bound to {@link SearchInterface.responsiveComponents}
 */
var ResponsiveComponents = /** @class */ (function () {
    function ResponsiveComponents(windoh) {
        if (windoh === void 0) { windoh = window; }
        this.windoh = windoh;
    }
    /**
     * Set the breakpoint for small screen size.
     * @param width
     */
    ResponsiveComponents.prototype.setSmallScreenWidth = function (width) {
        Assert_1.Assert.check(width < this.getMediumScreenWidth(), "Cannot set small screen width (" + width + ") larger or equal to the current medium screen width (" + this.getMediumScreenWidth() + ")");
        this.smallScreenWidth = width;
    };
    /**
     * Set the breakpoint for medium screen size
     * @param width
     */
    ResponsiveComponents.prototype.setMediumScreenWidth = function (width) {
        Assert_1.Assert.check(width > this.getSmallScreenWidth(), "Cannot set medium screen width (" + width + ") smaller or equal to the current small screen width (" + this.getSmallScreenWidth() + ")");
        this.mediumScreenWidth = width;
    };
    /**
     * Get the current breakpoint for small screen size.
     *
     * If it was not explicitly set by {@link ResponsiveComponents.setSmallScreenWidth}, the default value is `480`.
     * @returns {number}
     */
    ResponsiveComponents.prototype.getSmallScreenWidth = function () {
        if (this.smallScreenWidth == null) {
            return exports.SMALL_SCREEN_WIDTH;
        }
        return this.smallScreenWidth;
    };
    /**
     * Get the current breakpoint for medium screen size.
     *
     * If it was not explicitly set by {@link ResponsiveComponents.setMediumScreenWidth}, the default value is `800`.
     * @returns {number}
     */
    ResponsiveComponents.prototype.getMediumScreenWidth = function () {
        if (this.mediumScreenWidth == null) {
            return exports.MEDIUM_SCREEN_WIDTH;
        }
        return this.mediumScreenWidth;
    };
    /**
     * Return true if the current screen size is smaller than the current breakpoint set for small screen width.
     * @returns {boolean}
     */
    ResponsiveComponents.prototype.isSmallScreenWidth = function () {
        if (this.windoh['clientWidth'] != null) {
            return this.windoh['clientWidth'] <= this.getSmallScreenWidth();
        }
        else {
            return document.body.clientWidth <= this.getSmallScreenWidth();
        }
    };
    /**
     * Return true if the current screen size is smaller than the current breakpoint set for medium screen width.
     * @returns {boolean}
     */
    ResponsiveComponents.prototype.isMediumScreenWidth = function () {
        if (this.isSmallScreenWidth()) {
            return false;
        }
        if (this.windoh['clientWidth'] != null) {
            return this.windoh['clientWidth'] <= this.getMediumScreenWidth();
        }
        return document.body.clientWidth <= this.getMediumScreenWidth();
    };
    /**
     * Return true if the current screen size is larger than the current breakpoint set for medium and small.
     * @returns {boolean}
     */
    ResponsiveComponents.prototype.isLargeScreenWidth = function () {
        return !this.isSmallScreenWidth() && !this.isMediumScreenWidth();
    };
    return ResponsiveComponents;
}());
exports.ResponsiveComponents = ResponsiveComponents;


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var EndpointCaller_1 = __webpack_require__(64);
var Logger_1 = __webpack_require__(11);
var Assert_1 = __webpack_require__(5);
var Version_1 = __webpack_require__(69);
var AjaxError_1 = __webpack_require__(221);
var MissingAuthenticationError_1 = __webpack_require__(222);
var QueryUtils_1 = __webpack_require__(19);
var QueryError_1 = __webpack_require__(105);
var Utils_1 = __webpack_require__(4);
var _ = __webpack_require__(0);
var coveo_analytics_1 = __webpack_require__(85);
var CookieUtils_1 = __webpack_require__(66);
var TimeSpanUtils_1 = __webpack_require__(55);
var UrlUtils_1 = __webpack_require__(42);
var AccessToken_1 = __webpack_require__(110);
var DefaultSearchEndpointOptions = /** @class */ (function () {
    function DefaultSearchEndpointOptions() {
        this.version = 'v2';
        this.queryStringArguments = {};
        this.anonymous = false;
        this.isGuestUser = false;
    }
    return DefaultSearchEndpointOptions;
}());
exports.DefaultSearchEndpointOptions = DefaultSearchEndpointOptions;
/**
 * The `SearchEndpoint` class allows you to execute various actions against the Coveo Search API and a Coveo index
 * (e.g., searching, listing field values, getting the quickview content of an item, etc.).
 *
 * This class does trigger any query events directly. Consequently, executing an action with this class does not trigger
 * a full query cycle for the Coveo components.
 *
 * If you wish to have all Coveo components "react" to a query, (and trigger the corresponding query events), use the
 * [`QueryController`]{@link QueryController} class instead.
 */
var SearchEndpoint = /** @class */ (function () {
    /**
     * Creates a new `SearchEndpoint` instance.
     * Uses a set of adequate default options, and merges these with the `options` parameter.
     * Also creates an [`EndpointCaller`]{@link EndpointCaller} instance and uses it to communicate with the endpoint
     * internally.
     * @param options The custom options to apply to the new `SearchEndpoint`.
     */
    function SearchEndpoint(options) {
        var _this = this;
        this.options = options;
        Assert_1.Assert.exists(options);
        Assert_1.Assert.exists(options.restUri);
        // For backward compatibility, we set anonymous to true when an access token
        // is specified on a page loaded through the filesystem. This causes withCredentials
        // to NOT be set, allowing those pages to work with non Windows/Basic/Cookie
        // authentication. If anonymous is explicitly set to false, we'll use withCredentials.
        var defaultOptions = new DefaultSearchEndpointOptions();
        defaultOptions.anonymous = window.location.href.indexOf('file://') == 0 && Utils_1.Utils.isNonEmptyString(options.accessToken);
        this.options = _.extend({}, defaultOptions, options);
        this.accessToken = new AccessToken_1.AccessToken(this.options.accessToken, this.options.renewAccessToken);
        this.accessToken.subscribeToRenewal(function () { return _this.createEndpointCaller(); });
        // Forward any debug=1 query argument to the REST API to ease debugging
        if (SearchEndpoint.isDebugArgumentPresent()) {
            this.options.queryStringArguments['debug'] = 1;
        }
        this.onUnload = function () {
            _this.handleUnload();
        };
        window.addEventListener('beforeunload', this.onUnload);
        this.logger = new Logger_1.Logger(this);
        this.createEndpointCaller();
    }
    /**
     * Configures a sample search endpoint on a Coveo Cloud index containing a set of public sources with no secured
     * content.
     *
     * **Note:**
     * > This method mainly exists for demo purposes and ease of setup.
     *
     * @param otherOptions A set of additional options to use when configuring this endpoint.
     */
    SearchEndpoint.configureSampleEndpoint = function (otherOptions) {
        if (SearchEndpoint.isUseLocalArgumentPresent()) {
            // This is a handy flag to quickly test a local search API and alerts
            SearchEndpoint.endpoints['default'] = new SearchEndpoint(_.extend({
                restUri: 'http://localhost:8100/rest/search',
                searchAlertsUri: 'http://localhost:8088/rest/search/alerts/'
            }, otherOptions));
        }
        else {
            // This OAuth token points to the organization used for samples.
            // It contains a set of harmless content sources.
            SearchEndpoint.endpoints['default'] = new SearchEndpoint(_.extend({
                restUri: 'https://cloudplatform.coveo.com/rest/search',
                accessToken: '52d806a2-0f64-4390-a3f2-e0f41a4a73ec'
            }, otherOptions));
        }
    };
    /**
     * Configures a sample search endpoint on a Coveo Cloud V2 index containing a set of public sources with no secured
     * content.
     *
     * **Note:**
     * > This method mainly exists for demo purposes and ease of setup.
     *
     * @param otherOptions A set of additional options to use when configuring this endpoint.
     */
    SearchEndpoint.configureSampleEndpointV2 = function (optionsOPtions) {
        SearchEndpoint.endpoints['default'] = new SearchEndpoint(_.extend({
            restUri: 'https://platform.cloud.coveo.com/rest/search',
            accessToken: 'xx564559b1-0045-48e1-953c-3addd1ee4457',
            queryStringArguments: {
                organizationId: 'searchuisamples',
                viewAllContent: 1
            }
        }));
    };
    /**
     * Configures a search endpoint on a Coveo Cloud index.
     * @param organization The organization ID of your Coveo Cloud index.
     * @param token The token to use to execute query. If not specified, you will likely need to login when querying.
     * @param uri The URI of the Coveo Cloud REST Search API. By default, this points to the production environment.
     * @param otherOptions A set of additional options to use when configuring this endpoint.
     */
    SearchEndpoint.configureCloudEndpoint = function (organization, token, uri, otherOptions) {
        if (uri === void 0) { uri = 'https://cloudplatform.coveo.com/rest/search'; }
        var options = {
            restUri: uri,
            accessToken: token,
            queryStringArguments: { organizationId: organization }
        };
        var merged = SearchEndpoint.mergeConfigOptions(options, otherOptions);
        SearchEndpoint.endpoints['default'] = new SearchEndpoint(SearchEndpoint.removeUndefinedConfigOption(merged));
    };
    /**
     * Configures a search endpoint on a Coveo Cloud V2 index.
     * @param organization The organization ID of your Coveo Cloud V2 index.
     * @param token The token to use to execute query. If not specified, you will likely need to login when querying.
     * @param uri The URI of the Coveo Cloud REST Search API. By default, this points to the production environment.
     * @param otherOptions A set of additional options to use when configuring this endpoint.
     */
    SearchEndpoint.configureCloudV2Endpoint = function (organization, token, uri, otherOptions) {
        if (uri === void 0) { uri = 'https://platform.cloud.coveo.com/rest/search'; }
        return SearchEndpoint.configureCloudEndpoint(organization, token, uri, otherOptions);
    };
    /**
     * Configures a search endpoint on a Coveo on-premise index.
     * @param uri The URI of your Coveo Search API endpoint (e.g., `http://myserver:8080/rest/search`)
     * @param token The token to use to execute query. If not specified, you will likely need to login when querying
     * (unless your Coveo Search API endpoint is configured using advanced auth options, such as Windows auth or claims).
     * @param otherOptions A set of additional options to use when configuring this endpoint.
     */
    SearchEndpoint.configureOnPremiseEndpoint = function (uri, token, otherOptions) {
        var merged = SearchEndpoint.mergeConfigOptions({
            restUri: uri,
            accessToken: token
        }, otherOptions);
        SearchEndpoint.endpoints['default'] = new SearchEndpoint(SearchEndpoint.removeUndefinedConfigOption(merged));
    };
    SearchEndpoint.removeUndefinedConfigOption = function (config) {
        _.each(_.keys(config), function (key) {
            if (config[key] == undefined) {
                delete config[key];
            }
        });
        return config;
    };
    SearchEndpoint.mergeConfigOptions = function (first, second) {
        first = SearchEndpoint.removeUndefinedConfigOption(first);
        second = SearchEndpoint.removeUndefinedConfigOption(second);
        return _.extend({}, first, second);
    };
    SearchEndpoint.prototype.reset = function () {
        this.createEndpointCaller();
    };
    /**
     * Sets a function which allows external code to modify all endpoint call parameters before the browser sends them.
     *
     * **Note:**
     * > This is useful in very specific scenarios where the network infrastructure requires special request headers to be
     * > added or removed, for example.
     * @param requestModifier The function.
     */
    SearchEndpoint.prototype.setRequestModifier = function (requestModifier) {
        this.caller.options.requestModifier = requestModifier;
    };
    /**
     * Gets the base URI of the Search API endpoint.
     * @returns {string} The base URI of the Search API endpoint.
     */
    SearchEndpoint.prototype.getBaseUri = function () {
        return this.buildBaseUri('');
    };
    /**
     * Gets the base URI of the search alerts endpoint.
     * @returns {string} The base URI of the search alerts endpoint.
     */
    SearchEndpoint.prototype.getBaseAlertsUri = function () {
        return this.buildSearchAlertsUri('');
    };
    /**
     * Gets the URI that can be used to authenticate against the given provider.
     * @param provider The provider name.
     * @param returnUri The URI to return to after the authentication is completed.
     * @param message The authentication message.
     * @param callOptions Additional set of options to use for this call.
     * @param callParams Options injected by the applied decorators.
     * @returns {string} The authentication provider URI.
     */
    SearchEndpoint.prototype.getAuthenticationProviderUri = function (provider, returnUri, message, callOptions, callParams) {
        return UrlUtils_1.UrlUtils.normalizeAsString({
            paths: [callParams.url, provider],
            queryAsString: callParams.queryString,
            query: __assign({ redirectUri: returnUri, message: message }, this.buildBaseQueryString(callOptions))
        });
    };
    /**
     * Indicates whether the search endpoint is using JSONP internally to communicate with the Search API.
     * @returns {boolean} `true` in the search enpoint is using JSONP; `false` otherwise.
     */
    SearchEndpoint.prototype.isJsonp = function () {
        return this.caller.useJsonp;
    };
    /**
     * Performs a search on the index and returns a Promise of [`IQueryResults`]{@link IQueryResults}.
     *
     * This method slightly modifies the query results by adding additional information to each result (id, state object,
     * etc.).
     * @param query The query to execute. Typically, the query object is built using a
     * [`QueryBuilder`]{@link QueryBuilder}.
     * @param callOptions An additional set of options to use for this call.
     * @param callParams The options injected by the applied decorators.
     * @returns {Promise<IQueryResults>} A Promise of query results.
     */
    SearchEndpoint.prototype.search = function (query, callOptions, callParams) {
        var _this = this;
        Assert_1.Assert.exists(query);
        callParams = __assign({}, callParams, { requestData: __assign({}, callParams.requestData, _.omit(query, function (queryParam) { return Utils_1.Utils.isNullOrUndefined(queryParam); })) });
        this.logger.info('Performing REST query', query);
        var start = new Date();
        return this.performOneCall(callParams, callOptions).then(function (results) {
            _this.logger.info('REST query successful', results, query);
            // Version check
            // If the SearchAPI doesn't give us any apiVersion info, we assume version 1 (before apiVersion was implemented)
            if (results.apiVersion == null) {
                results.apiVersion = 1;
            }
            if (results.apiVersion < Version_1.version.supportedApiVersion) {
                _this.logger.error('Please update your REST Search API');
            }
            // Transform the duration compared to what the search API returns
            // We want to have the "duration" to be the time as seen by the browser
            results.searchAPIDuration = results.duration;
            results.duration = TimeSpanUtils_1.TimeSpan.fromDates(start, new Date()).getMilliseconds();
            // If the server specified no search ID generated one using the client-side
            // GUID generator. We prefer server generated guids to allow tracking a query
            // all the way from the analytics to the logs.
            if (Utils_1.Utils.isNullOrEmptyString(results.searchUid)) {
                results.searchUid = QueryUtils_1.QueryUtils.createGuid();
            }
            QueryUtils_1.QueryUtils.setIndexAndUidOnQueryResults(query, results, results.searchUid, results.pipeline, results.splitTestRun);
            QueryUtils_1.QueryUtils.setTermsToHighlightOnQueryResults(query, results);
            return results;
        });
    };
    /**
     * Gets a link / URI to download a query result set to the XLSX format.
     *
     * **Note:**
     * > This method does not automatically download the query result set, but rather provides an URI from which to
     * > download it.
     * @param query The query for which to get the XLSX result set.
     * @param numberOfResults The number of results to download.
     * @param callOptions An additional set of options to use for this call.
     * @param callParams The options injected by the applied decorators.
     * @returns {string} The download URI.
     */
    SearchEndpoint.prototype.getExportToExcelLink = function (query, numberOfResults, callOptions, callParams) {
        return UrlUtils_1.UrlUtils.normalizeAsString({
            paths: callParams.url,
            queryAsString: callParams.queryString,
            query: __assign({ numberOfResults: numberOfResults ? numberOfResults.toString() : null, format: 'xlsx' }, this.buildQueryAsQueryString(null, query), this.buildBaseQueryString(callOptions))
        });
    };
    /**
     * Gets the raw datastream for an item. This is typically used to get a thumbnail for an item.
     *
     * Returns an array buffer.
     *
     * **Example:**
     * ```
     * let rawBinary = String.fromCharCode.apply(null, new Uint8Array(response));
     * img.setAttribute('src', 'data:image/png;base64,' + btoa(rawBinary));
     * ```
     * @param documentUniqueId Typically, the {@link IQueryResult.uniqueId} on each result.
     * @param dataStreamType Normally, `$Thumbnail`.
     * @param callOptions An additional set of options to use for this call.
     * @param callParams The options injected by the applied decorators.
     * @returns {Promise<TResult>|Promise<U>}
     */
    SearchEndpoint.prototype.getRawDataStream = function (documentUniqueId, dataStreamType, callOptions, callParams) {
        var _this = this;
        Assert_1.Assert.exists(documentUniqueId);
        callParams = UrlUtils_1.UrlUtils.merge(callParams, {
            paths: callParams.url,
            query: __assign({ dataStream: dataStreamType }, this.buildViewAsHtmlQueryString(documentUniqueId, callOptions))
        });
        this.logger.info('Performing REST query for datastream ' + dataStreamType + ' on item uniqueID ' + documentUniqueId);
        return this.performOneCall(callParams, callOptions).then(function (results) {
            _this.logger.info('REST query successful', results, documentUniqueId);
            return results;
        });
    };
    /**
     * Gets an URL from which it is possible to see the datastream for an item. This is typically used to get a
     * thumbnail for an item.
     * @param documentUniqueID Typically, the {@link IQueryResult.uniqueId} on each result.
     * @param dataStreamType Normally, `$Thumbnail`.
     * @param callOptions An additional set of options to use for this call.
     * @param callParams The options injected by the applied decorators.
     * @returns {string} The datastream URL.
     */
    SearchEndpoint.prototype.getViewAsDatastreamUri = function (documentUniqueID, dataStreamType, callOptions, callParams) {
        if (callOptions === void 0) { callOptions = {}; }
        return UrlUtils_1.UrlUtils.normalizeAsString({
            paths: callParams.url,
            queryAsString: callParams.queryString,
            query: __assign({ dataStream: dataStreamType }, this.buildViewAsHtmlQueryString(documentUniqueID, callOptions), this.buildQueryAsQueryString(callOptions.query, callOptions.queryObject), this.buildBaseQueryString(callOptions))
        });
    };
    /**
     * Gets a single item, using its `uniqueId`.
     * @param documentUniqueID Typically, the {@link IQueryResult.uniqueId} on each result.
     * @param callOptions An additional set of options to use for this call.
     * @param callParams The options injected by the applied decorators.
     * @returns {Promise<IQueryResult>} A Promise of the item.
     */
    SearchEndpoint.prototype.getDocument = function (documentUniqueID, callOptions, callParams) {
        var _this = this;
        callParams = UrlUtils_1.UrlUtils.merge(callParams, {
            paths: callParams.url,
            queryAsString: callParams.queryString,
            query: __assign({}, this.buildViewAsHtmlQueryString(documentUniqueID, callOptions))
        });
        this.logger.info('Performing REST query to retrieve document', documentUniqueID);
        return this.performOneCall(callParams, callOptions).then(function (result) {
            _this.logger.info('REST query successful', result, documentUniqueID);
            return result;
        });
    };
    /**
     * Gets the content of a single item, as text (think: quickview).
     * @param documentUniqueID Typically, the {@link IQueryResult.uniqueId} on each result.
     * @param callOptions An additional set of options to use for this call.
     * @param callParams The options injected by the applied decorators.
     * @returns {Promise<string>} A Promise of the item content.
     */
    SearchEndpoint.prototype.getDocumentText = function (documentUniqueID, callOptions, callParams) {
        var _this = this;
        callParams = UrlUtils_1.UrlUtils.merge(callParams, {
            paths: callParams.url,
            queryAsString: callParams.queryString,
            query: __assign({}, this.buildViewAsHtmlQueryString(documentUniqueID, callOptions))
        });
        this.logger.info('Performing REST query to retrieve "TEXT" version of document', documentUniqueID);
        return this.performOneCall(callParams, callOptions).then(function (data) {
            _this.logger.info('REST query successful', data, documentUniqueID);
            return data.content;
        });
    };
    /**
     * Gets the content for a single item, as an HTMLDocument (think: quickview).
     * @param documentUniqueID Typically, the {@link IQueryResult.uniqueId} on each result.
     * @param callOptions An additional set of options to use for this call.
     * @param callParams The options injected by the applied decorators.
     * @returns {Promise<HTMLDocument>} A Promise of the item content.
     */
    SearchEndpoint.prototype.getDocumentHtml = function (documentUniqueID, callOptions, callParams) {
        var _this = this;
        callOptions = __assign({}, callOptions);
        callParams = UrlUtils_1.UrlUtils.merge(__assign({}, callParams, { requestData: callOptions.queryObject || { q: callOptions.query } }), {
            paths: callParams.url,
            queryAsString: callParams.queryString,
            query: __assign({}, this.buildViewAsHtmlQueryString(documentUniqueID, callOptions))
        });
        this.logger.info('Performing REST query to retrieve "HTML" version of document', documentUniqueID);
        return this.performOneCall(callParams, callOptions).then(function (result) {
            _this.logger.info('REST query successful', result, documentUniqueID);
            return result;
        });
    };
    /**
     * Gets an URL from which it is possible to see a single item content, as HTML (think: quickview).
     * @param documentUniqueID Typically, the {@link IQueryResult.uniqueId} on each result.
     * @param callOptions An additional set of options to use for this call.
     * @param callParams The options injected by the applied decorators.
     * @returns {string} The URL.
     */
    SearchEndpoint.prototype.getViewAsHtmlUri = function (documentUniqueID, callOptions, callParams) {
        return UrlUtils_1.UrlUtils.normalizeAsString({
            paths: callParams.url,
            queryAsString: callParams.queryString,
            query: __assign({}, this.buildViewAsHtmlQueryString(documentUniqueID, callOptions), this.buildBaseQueryString(callOptions))
        });
    };
    /**
     * Lists the possible field values for a request.
     * @param request The request for which to list the possible field values.
     * @param callOptions An additional set of options to use for this call.
     * @param callParams The options injected by the applied decorators.
     * @returns {Promise<TResult>|Promise<U>} A Promise of the field values.
     */
    SearchEndpoint.prototype.listFieldValues = function (request, callOptions, callParams) {
        var _this = this;
        Assert_1.Assert.exists(request);
        callParams = __assign({}, callParams, { requestData: __assign({}, callParams.requestData, request) });
        this.logger.info('Listing field values', request);
        return this.performOneCall(callParams, callOptions).then(function (data) {
            _this.logger.info('REST list field values successful', data.values, request);
            return data.values;
        });
    };
    /**
     * Lists the possible field values for a request.
     * @param request The request for which to list the possible field values.
     * @param callOptions An additional set of options to use for this call.
     * @param callParams The options injected by the applied decorators.
     * @returns {Promise<TResult>|Promise<U>} A Promise of the field values.
     */
    SearchEndpoint.prototype.listFieldValuesBatch = function (request, callOptions, callParams) {
        var _this = this;
        Assert_1.Assert.exists(request);
        callParams = __assign({}, callParams, { requestData: __assign({}, callParams.requestData, request) });
        this.logger.info('Listing field batch values', request);
        return this.performOneCall(callParams, callOptions).then(function (data) {
            _this.logger.info('REST list field batch values successful', data.batch, request);
            return data.batch;
        });
    };
    /**
     * Lists all fields for the index, and returns an array of their descriptions.
     * @param callOptions An additional set of options to use for this call.
     * @param callParams The options injected by the applied decorators.
     * @returns {Promise<TResult>|Promise<U>} A Promise of the index fields and descriptions.
     */
    SearchEndpoint.prototype.listFields = function (callOptions, callParams) {
        var _this = this;
        this.logger.info('Listing fields');
        return this.performOneCall(callParams, callOptions).then(function (data) {
            _this.logger.info('REST list fields successful', data.fields);
            return data.fields;
        });
    };
    /**
     * Lists all available query extensions for the search endpoint.
     * @param callOptions An additional set of options to use for this call.
     * @param callParams The options injected by the applied decorators.
     * @returns {Promise<IExtension[]>} A Promise of the extensions.
     */
    SearchEndpoint.prototype.extensions = function (callOptions, callParams) {
        var _this = this;
        this.logger.info('Performing REST query to list extensions');
        return this.performOneCall(callParams, callOptions).then(function (extensions) {
            _this.logger.info('REST query successful', extensions);
            return extensions;
        });
    };
    /**
     * Rates a single item in the index (granted that collaborative rating is enabled on your index)
     * @param ratingRequest The item id, and the rating to add.
     * @param callOptions An additional set of options to use for this call.
     * @param callParams The options injected by the applied decorators.
     * @returns {Promise<boolean>|Promise<T>}
     */
    SearchEndpoint.prototype.rateDocument = function (ratingRequest, callOptions, callParams) {
        var _this = this;
        this.logger.info('Performing REST query to rate a document', ratingRequest);
        callParams = __assign({}, callParams, { requestData: __assign({}, callParams.requestData, ratingRequest) });
        return this.performOneCall(callParams, callOptions).then(function () {
            _this.logger.info('REST query successful', ratingRequest);
            return true;
        });
    };
    /**
     * Tags a single item.
     * @param taggingRequest The item id, and the tag action to perform.
     * @param callOptions An additional set of options to use for this call.
     * @param callParams The options injected by the applied decorators.
     * @returns {Promise<boolean>|Promise<T>}
     */
    SearchEndpoint.prototype.tagDocument = function (taggingRequest, callOptions, callParams) {
        var _this = this;
        this.logger.info('Performing REST query to tag an item', taggingRequest);
        callParams = __assign({}, callParams, { requestData: __assign({}, callParams.requestData, taggingRequest) });
        return this.performOneCall(callParams, callOptions).then(function () {
            _this.logger.info('REST query successful', taggingRequest);
            return true;
        });
    };
    /**
     * Gets a list of query suggestions for a request.
     * @param request The query, and the number of suggestions to return.
     * @param callOptions An additional set of options to use for this call.
     * @param callParams The options injected by the applied decorators.
     * @returns {Promise<IQuerySuggestResponse>} A Promise of query suggestions.
     */
    SearchEndpoint.prototype.getQuerySuggest = function (request, callOptions, callParams) {
        var _this = this;
        callParams = __assign({}, callParams, { requestData: __assign({}, callParams.requestData, _.omit(request, function (parameter) { return Utils_1.Utils.isNullOrUndefined(parameter); })) });
        this.logger.info('Performing REST query to get query suggest', request);
        return this.performOneCall(callParams, callOptions).then(function (response) {
            _this.logger.info('REST query successful', response);
            return response;
        });
    };
    // This is a non documented method to ensure backward compatibility for the old query suggest call.
    // It simply calls the "real" official and documented method.
    SearchEndpoint.prototype.getRevealQuerySuggest = function (request, callOptions, callParams) {
        return this.getQuerySuggest(request, callOptions, callParams);
    };
    /**
     * Follows an item, or a query result, using the search alerts service.
     * @param request The subscription details.
     * @param callOptions An additional set of options to use for this call.
     * @param callParams The options injected by the applied decorators.
     * @returns {Promise<ISubscription>}
     */
    SearchEndpoint.prototype.follow = function (request, callOptions, callParams) {
        var _this = this;
        callParams.requestData = request;
        this.logger.info('Performing REST query to follow an item or a query', request);
        return this.performOneCall(callParams, callOptions).then(function (subscription) {
            _this.logger.info('REST query successful', subscription);
            return subscription;
        });
    };
    /**
     * Gets a Promise of an array of the current subscriptions.
     * @param page The page of the subscriptions.
     * @param callOptions An additional set of options to use for this call.
     * @param callParams The options injected by the applied decorators.
     * @returns {any}
     */
    SearchEndpoint.prototype.listSubscriptions = function (page, callOptions, callParams) {
        var _this = this;
        if (this.options.isGuestUser) {
            return new Promise(function (resolve, reject) {
                reject();
            });
        }
        if (this.currentListSubscriptions == null) {
            callParams = UrlUtils_1.UrlUtils.merge(callParams, {
                paths: callParams.url,
                query: {
                    page: page || 0
                }
            });
            this.logger.info('Performing REST query to list subscriptions');
            this.currentListSubscriptions = this.performOneCall(callParams, callOptions);
            this.currentListSubscriptions
                .then(function (data) {
                _this.currentListSubscriptions = null;
                _this.logger.info('REST query successful', data);
                return data;
            })
                .catch(function (e) {
                // Trap 403 error, as the listSubscription call is called on every page initialization
                // to check for current subscriptions. By default, the search alert service is not enabled for most organization
                // Don't want to pollute the console with un-needed noise and confusion
                if (e.status != 403) {
                    throw e;
                }
            });
        }
        return this.currentListSubscriptions;
    };
    /**
     * Updates a subscription with new parameters.
     * @param subscription The subscription to update with new parameters.
     * @param callOptions An additional set of options to use for this call.
     * @param callParams The options injected by the applied decorators.
     * @returns {Promise<ISubscription>}
     */
    SearchEndpoint.prototype.updateSubscription = function (subscription, callOptions, callParams) {
        var _this = this;
        callParams = UrlUtils_1.UrlUtils.merge(__assign({}, callParams, { requestData: __assign({}, callParams.requestData, subscription) }), {
            paths: [callParams.url, subscription.id]
        });
        this.logger.info('Performing REST query to update a subscription', subscription);
        return this.performOneCall(callParams, callOptions).then(function (subscription) {
            _this.logger.info('REST query successful', subscription);
            return subscription;
        });
    };
    /**
     * Deletes a subscription.
     * @param subscription The subscription to delete.
     * @param callOptions An additional set of options to use for this call.
     * @param callParams The options injected by the applied decorators.
     * @returns {Promise<ISubscription>}
     */
    SearchEndpoint.prototype.deleteSubscription = function (subscription, callOptions, callParams) {
        var _this = this;
        callParams = UrlUtils_1.UrlUtils.merge(callParams, {
            paths: [callParams.url, subscription.id]
        });
        this.logger.info('Performing REST query to delete a subscription', subscription);
        return this.performOneCall(callParams, callOptions).then(function (subscription) {
            _this.logger.info('REST query successful', subscription);
            return subscription;
        });
    };
    SearchEndpoint.prototype.logError = function (sentryLog, callOptions, callParams) {
        callParams = __assign({}, callParams, { requestData: __assign({}, callParams.requestData, sentryLog) });
        return this.performOneCall(callParams, callOptions)
            .then(function () {
            return true;
        })
            .catch(function () {
            return false;
        });
    };
    SearchEndpoint.prototype.nuke = function () {
        window.removeEventListener('beforeunload', this.onUnload);
    };
    SearchEndpoint.prototype.createEndpointCaller = function () {
        this.caller = new EndpointCaller_1.EndpointCaller(__assign({}, this.options, { accessToken: this.accessToken.token }));
    };
    SearchEndpoint.isDebugArgumentPresent = function () {
        return /[?&]debug=1([&]|$)/.test(window.location.search);
    };
    SearchEndpoint.isUseLocalArgumentPresent = function () {
        return /[?&]useLocal=1([&]|$)/.test(window.location.search);
    };
    SearchEndpoint.prototype.handleUnload = function () {
        this.isRedirecting = true;
    };
    SearchEndpoint.prototype.buildBaseUri = function (path) {
        Assert_1.Assert.isString(path);
        return UrlUtils_1.UrlUtils.normalizeAsString({
            paths: [this.options.restUri, this.options.version, path]
        });
    };
    SearchEndpoint.prototype.buildSearchAlertsUri = function (path) {
        Assert_1.Assert.isString(path);
        var baseUrl = this.options.searchAlertsUri ||
            UrlUtils_1.UrlUtils.normalizeAsString({
                paths: [this.options.restUri, '/alerts']
            });
        var url = UrlUtils_1.UrlUtils.normalizeAsString({
            paths: [baseUrl, path]
        });
        return url;
    };
    SearchEndpoint.prototype.buildBaseQueryString = function (callOptions) {
        callOptions = __assign({}, callOptions);
        return __assign({}, this.options.queryStringArguments, { authentication: _.isArray(callOptions.authentication) ? callOptions.authentication.join(',') : null });
    };
    SearchEndpoint.prototype.buildQueryAsQueryString = function (query, queryObject) {
        queryObject = __assign({}, queryObject);
        // In an ideal parallel reality, the entire query used in the 'search' call is used here.
        // In this reality however, we must support GET calls (ex: GET /html) for CORS/JSONP/IE reasons.
        // Therefore, we cherry-pick parts of the query to include in a 'query string' instead of a body payload.
        var queryParameters = {};
        ['q', 'aq', 'cq', 'dq', 'searchHub', 'tab', 'locale', 'pipeline', 'lowercaseOperators'].forEach(function (key) {
            queryParameters[key] = queryObject[key];
        });
        var context = {};
        _.pairs(queryObject.context).forEach(function (pair) {
            var key = pair[0], value = pair[1];
            context["context[" + Utils_1.Utils.safeEncodeURIComponent(key) + "]"] = value;
        });
        if (queryObject.fieldsToInclude) {
            var fieldsToInclude = queryObject.fieldsToInclude.map(function (field) {
                var uri = Utils_1.Utils.safeEncodeURIComponent(field.replace('@', ''));
                return "\"" + uri + "\"";
            });
            queryParameters.fieldsToInclude = "[" + fieldsToInclude.join(',') + "]";
        }
        return __assign({ q: query }, context, queryParameters);
    };
    SearchEndpoint.prototype.buildViewAsHtmlQueryString = function (uniqueId, callOptions) {
        callOptions = _.extend({}, callOptions);
        return {
            uniqueId: uniqueId,
            enableNavigation: 'true',
            requestedOutputSize: callOptions.requestedOutputSize ? callOptions.requestedOutputSize.toString() : null,
            contentType: callOptions.contentType
        };
    };
    SearchEndpoint.prototype.performOneCall = function (params, callOptions, autoRenewToken) {
        if (autoRenewToken === void 0) { autoRenewToken = true; }
        return __awaiter(this, void 0, void 0, function () {
            var response, error_1, renewSuccess;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = UrlUtils_1.UrlUtils.merge(params, {
                            paths: params.url,
                            queryAsString: params.queryString,
                            query: __assign({}, this.buildBaseQueryString(callOptions))
                        });
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 7]);
                        return [4 /*yield*/, this.caller.call(params)];
                    case 2:
                        response = _a.sent();
                        return [2 /*return*/, response.data];
                    case 3:
                        error_1 = _a.sent();
                        if (!(autoRenewToken && this.accessToken.isExpired(error_1))) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.accessToken.doRenew()];
                    case 4:
                        renewSuccess = _a.sent();
                        if (renewSuccess) {
                            return [2 /*return*/, this.performOneCall(params, callOptions, autoRenewToken)];
                        }
                        return [3 /*break*/, 6];
                    case 5:
                        if (error_1.statusCode == 0 && this.isRedirecting) {
                            // The page is getting redirected
                            // Set timeout on return with empty string, since it does not really matter
                            _.defer(function () {
                                return '';
                            });
                        }
                        _a.label = 6;
                    case 6: throw this.handleErrorResponse(error_1);
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    SearchEndpoint.prototype.handleErrorResponse = function (errorResponse) {
        if (this.isMissingAuthenticationProviderStatus(errorResponse.statusCode)) {
            return new MissingAuthenticationError_1.MissingAuthenticationError(errorResponse.data['provider']);
        }
        else if (errorResponse.data && errorResponse.data.message && errorResponse.data.type) {
            return new QueryError_1.QueryError(errorResponse);
        }
        else if (errorResponse.data && errorResponse.data.message) {
            return new AjaxError_1.AjaxError("Request Error : " + errorResponse.data.message, errorResponse.statusCode);
        }
        else {
            return new AjaxError_1.AjaxError('Request Error', errorResponse.statusCode);
        }
    };
    SearchEndpoint.prototype.isMissingAuthenticationProviderStatus = function (status) {
        return status == 402;
    };
    /**
     * Contains a map of all initialized `SearchEndpoint` instances.
     *
     * **Example:**
     * > `Coveo.SearchEndpoint.endpoints['default']` returns the default endpoint that was created at initialization.
     * @type {{}}
     */
    SearchEndpoint.endpoints = {};
    __decorate([
        path('/login/'),
        accessTokenInUrl()
    ], SearchEndpoint.prototype, "getAuthenticationProviderUri", null);
    __decorate([
        path('/'),
        method('POST'),
        responseType('text'),
        includeActionsHistory(),
        includeReferrer(),
        includeVisitorId(),
        includeIsGuestUser()
    ], SearchEndpoint.prototype, "search", null);
    __decorate([
        path('/'),
        accessTokenInUrl()
    ], SearchEndpoint.prototype, "getExportToExcelLink", null);
    __decorate([
        path('/datastream'),
        accessTokenInUrl(),
        method('GET'),
        responseType('arraybuffer')
    ], SearchEndpoint.prototype, "getRawDataStream", null);
    __decorate([
        path('/datastream'),
        accessTokenInUrl()
    ], SearchEndpoint.prototype, "getViewAsDatastreamUri", null);
    __decorate([
        path('/document'),
        method('GET'),
        responseType('text')
    ], SearchEndpoint.prototype, "getDocument", null);
    __decorate([
        path('/text'),
        method('GET'),
        responseType('text')
    ], SearchEndpoint.prototype, "getDocumentText", null);
    __decorate([
        path('/html'),
        method('POST'),
        responseType('document')
    ], SearchEndpoint.prototype, "getDocumentHtml", null);
    __decorate([
        path('/html'),
        accessTokenInUrl()
    ], SearchEndpoint.prototype, "getViewAsHtmlUri", null);
    __decorate([
        path('/values'),
        method('POST'),
        responseType('text')
    ], SearchEndpoint.prototype, "listFieldValues", null);
    __decorate([
        path('/values/batch'),
        method('POST'),
        responseType('text')
    ], SearchEndpoint.prototype, "listFieldValuesBatch", null);
    __decorate([
        path('/fields'),
        method('GET'),
        responseType('text')
    ], SearchEndpoint.prototype, "listFields", null);
    __decorate([
        path('/extensions'),
        method('GET'),
        responseType('text')
    ], SearchEndpoint.prototype, "extensions", null);
    __decorate([
        path('/rating'),
        method('POST'),
        responseType('text')
    ], SearchEndpoint.prototype, "rateDocument", null);
    __decorate([
        path('/tag'),
        method('POST'),
        responseType('text')
    ], SearchEndpoint.prototype, "tagDocument", null);
    __decorate([
        path('/querySuggest'),
        method('POST'),
        responseType('text'),
        includeActionsHistory(),
        includeReferrer(),
        includeVisitorId(),
        includeIsGuestUser()
    ], SearchEndpoint.prototype, "getQuerySuggest", null);
    __decorate([
        alertsPath('/subscriptions'),
        accessTokenInUrl('accessToken'),
        method('POST'),
        requestDataType('application/json'),
        responseType('text')
    ], SearchEndpoint.prototype, "follow", null);
    __decorate([
        alertsPath('/subscriptions'),
        accessTokenInUrl('accessToken'),
        method('GET'),
        requestDataType('application/json'),
        responseType('text')
    ], SearchEndpoint.prototype, "listSubscriptions", null);
    __decorate([
        alertsPath('/subscriptions/'),
        accessTokenInUrl('accessToken'),
        method('PUT'),
        requestDataType('application/json'),
        responseType('text')
    ], SearchEndpoint.prototype, "updateSubscription", null);
    __decorate([
        alertsPath('/subscriptions/'),
        accessTokenInUrl('accessToken'),
        method('DELETE'),
        requestDataType('application/json'),
        responseType('text')
    ], SearchEndpoint.prototype, "deleteSubscription", null);
    __decorate([
        path('/log'),
        method('POST')
    ], SearchEndpoint.prototype, "logError", null);
    return SearchEndpoint;
}());
exports.SearchEndpoint = SearchEndpoint;
// It's taken for granted that methods using decorators have :
// IEndpointCallOptions as their second to last parameter
// IEndpointCallParameters as their last parameter
// The default parameters for each member of the injected {@link IEndpointCallParameters} are the following:
// url: '',
// queryString: [],
// requestData: {},
// requestDataType: undefined,
// method: '',
// responseType: '',
// errorsAsSuccess: false
function decoratorSetup(target, key, descriptor) {
    return {
        originalMethod: descriptor.value,
        nbParams: target[key].prototype.constructor.length
    };
}
function defaultDecoratorEndpointCallParameters() {
    var params = {
        url: '',
        queryString: [],
        requestData: {},
        method: '',
        responseType: '',
        errorsAsSuccess: false
    };
    return params;
}
function path(path) {
    return function (target, key, descriptor) {
        var _a = decoratorSetup(target, key, descriptor), originalMethod = _a.originalMethod, nbParams = _a.nbParams;
        descriptor.value = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var url = this.buildBaseUri(path);
            if (args[nbParams - 1]) {
                args[nbParams - 1].url = url;
            }
            else {
                var endpointCallParams = _.extend(defaultDecoratorEndpointCallParameters(), { url: url });
                args[nbParams - 1] = endpointCallParams;
            }
            return originalMethod.apply(this, args);
        };
        return descriptor;
    };
}
function alertsPath(path) {
    return function (target, key, descriptor) {
        var _a = decoratorSetup(target, key, descriptor), originalMethod = _a.originalMethod, nbParams = _a.nbParams;
        descriptor.value = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var url = this.buildSearchAlertsUri(path);
            if (args[nbParams - 1]) {
                args[nbParams - 1].url = url;
            }
            else {
                var endpointCallParams = _.extend(defaultDecoratorEndpointCallParameters(), { url: url });
                args[nbParams - 1] = endpointCallParams;
            }
            return originalMethod.apply(this, args);
        };
        return descriptor;
    };
}
function requestDataType(type) {
    return function (target, key, descriptor) {
        var _a = decoratorSetup(target, key, descriptor), originalMethod = _a.originalMethod, nbParams = _a.nbParams;
        descriptor.value = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (args[nbParams - 1]) {
                args[nbParams - 1].requestDataType = type;
            }
            else {
                var endpointCallParams = _.extend(defaultDecoratorEndpointCallParameters(), { requestDataType: type });
                args[nbParams - 1] = endpointCallParams;
            }
            return originalMethod.apply(this, args);
        };
        return descriptor;
    };
}
function method(met) {
    return function (target, key, descriptor) {
        var _a = decoratorSetup(target, key, descriptor), originalMethod = _a.originalMethod, nbParams = _a.nbParams;
        descriptor.value = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (args[nbParams - 1]) {
                args[nbParams - 1].method = met;
            }
            else {
                var endpointCallParams = _.extend(defaultDecoratorEndpointCallParameters(), { method: met });
                args[nbParams - 1] = endpointCallParams;
            }
            return originalMethod.apply(this, args);
        };
        return descriptor;
    };
}
function responseType(resp) {
    return function (target, key, descriptor) {
        var _a = decoratorSetup(target, key, descriptor), originalMethod = _a.originalMethod, nbParams = _a.nbParams;
        descriptor.value = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (args[nbParams - 1]) {
                args[nbParams - 1].responseType = resp;
            }
            else {
                var endpointCallParams = _.extend(defaultDecoratorEndpointCallParameters(), { responseType: resp });
                args[nbParams - 1] = endpointCallParams;
            }
            return originalMethod.apply(this, args);
        };
        return descriptor;
    };
}
function accessTokenInUrl(tokenKey) {
    if (tokenKey === void 0) { tokenKey = 'access_token'; }
    return function (target, key, descriptor) {
        var _a = decoratorSetup(target, key, descriptor), originalMethod = _a.originalMethod, nbParams = _a.nbParams;
        var buildAccessToken = function (tokenKey, endpointInstance) {
            var queryString = [];
            if (Utils_1.Utils.isNonEmptyString(endpointInstance.accessToken.token)) {
                queryString.push(tokenKey + '=' + Utils_1.Utils.safeEncodeURIComponent(endpointInstance.accessToken.token));
            }
            return queryString;
        };
        descriptor.value = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var queryString = buildAccessToken(tokenKey, this);
            if (args[nbParams - 1]) {
                args[nbParams - 1].queryString = args[nbParams - 1].queryString.concat(queryString);
            }
            else {
                var endpointCallParams = _.extend(defaultDecoratorEndpointCallParameters(), { queryString: queryString });
                args[nbParams - 1] = endpointCallParams;
            }
            return originalMethod.apply(this, args);
        };
        return descriptor;
    };
}
function includeActionsHistory(historyStore) {
    if (historyStore === void 0) { historyStore = new coveo_analytics_1.history.HistoryStore(); }
    return function (target, key, descriptor) {
        var _a = decoratorSetup(target, key, descriptor), originalMethod = _a.originalMethod, nbParams = _a.nbParams;
        descriptor.value = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var historyFromStore = historyStore.getHistory();
            if (historyFromStore == null) {
                historyFromStore = [];
            }
            if (args[nbParams - 1]) {
                args[nbParams - 1].requestData.actionsHistory = historyFromStore;
            }
            else {
                var endpointCallParams = _.extend(defaultDecoratorEndpointCallParameters(), {
                    requestData: { actionsHistory: historyFromStore }
                });
                args[nbParams - 1] = endpointCallParams;
            }
            return originalMethod.apply(this, args);
        };
        return descriptor;
    };
}
function includeReferrer() {
    return function (target, key, descriptor) {
        var _a = decoratorSetup(target, key, descriptor), originalMethod = _a.originalMethod, nbParams = _a.nbParams;
        descriptor.value = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var referrer = document.referrer;
            if (referrer == null) {
                referrer = '';
            }
            if (args[nbParams - 1]) {
                args[nbParams - 1].requestData.referrer = referrer;
            }
            else {
                var endpointCallParams = _.extend(defaultDecoratorEndpointCallParameters(), {
                    requestData: { referrer: referrer }
                });
                args[nbParams - 1] = endpointCallParams;
            }
            return originalMethod.apply(this, args);
        };
        return descriptor;
    };
}
function includeVisitorId() {
    return function (target, key, descriptor) {
        var _a = decoratorSetup(target, key, descriptor), originalMethod = _a.originalMethod, nbParams = _a.nbParams;
        descriptor.value = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var visitorId = CookieUtils_1.Cookie.get('visitorId');
            if (visitorId == null) {
                visitorId = '';
            }
            if (args[nbParams - 1]) {
                args[nbParams - 1].requestData.visitorId = visitorId;
            }
            else {
                var endpointCallParams = _.extend(defaultDecoratorEndpointCallParameters(), {
                    requestData: { visitorId: visitorId }
                });
                args[nbParams - 1] = endpointCallParams;
            }
            return originalMethod.apply(this, args);
        };
        return descriptor;
    };
}
function includeIsGuestUser() {
    return function (target, key, descriptor) {
        var _a = decoratorSetup(target, key, descriptor), originalMethod = _a.originalMethod, nbParams = _a.nbParams;
        descriptor.value = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var isGuestUser = this.options.isGuestUser;
            if (args[nbParams - 1]) {
                args[nbParams - 1].requestData.isGuestUser = isGuestUser;
            }
            else {
                var endpointCallParams = _.extend(defaultDecoratorEndpointCallParameters(), {
                    requestData: { isGuestUser: isGuestUser }
                });
                args[nbParams - 1] = endpointCallParams;
            }
            return originalMethod.apply(this, args);
        };
        return descriptor;
    };
}


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var underscore_1 = __webpack_require__(0);
var Utils_1 = __webpack_require__(4);
var UrlUtils = /** @class */ (function () {
    function UrlUtils() {
    }
    UrlUtils.getUrlParameter = function (name) {
        return (decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [, ''])[1].replace(/\+/g, '%20')) || null);
    };
    UrlUtils.merge = function (endpointParameters) {
        var parts = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            parts[_i - 1] = arguments[_i];
        }
        parts.forEach(function (part) {
            var _a = UrlUtils.normalizeAsParts(part), path = _a.path, queryNormalized = _a.queryNormalized;
            if (Utils_1.Utils.isNonEmptyString(path)) {
                endpointParameters = __assign({}, endpointParameters, { url: path });
            }
            if (Utils_1.Utils.isNonEmptyArray(queryNormalized)) {
                var queryStringExists = Utils_1.Utils.isNonEmptyArray(endpointParameters.queryString);
                var queryString = queryStringExists
                    ? Utils_1.Utils.concatWithoutDuplicate(endpointParameters.queryString, queryNormalized)
                    : queryNormalized;
                endpointParameters = __assign({}, endpointParameters, { queryString: queryString });
            }
        });
        return endpointParameters;
    };
    UrlUtils.normalizeAsString = function (toNormalize) {
        var _a = this.normalizeAsParts(toNormalize), queryNormalized = _a.queryNormalized, path = _a.path;
        return "" + path + this.addToUrlIfNotEmpty(queryNormalized, '&', '?');
    };
    UrlUtils.normalizeAsParts = function (toNormalize) {
        var pathsNormalized = this.normalizePaths(toNormalize);
        var queryNormalized = this.normalizeQueryString(toNormalize);
        return {
            pathsNormalized: pathsNormalized,
            queryNormalized: queryNormalized,
            path: this.addToUrlIfNotEmpty(pathsNormalized, '/', UrlUtils.getRelativePathLeadingCharacters(toNormalize))
        };
    };
    UrlUtils.getRelativePathLeadingCharacters = function (toNormalize) {
        var leadingRelativeUrlCharacters = '';
        var relativeUrlLeadingCharactersRegex = /^(([\/])+)/;
        var firstPath = underscore_1.first(this.toArray(toNormalize.paths));
        if (firstPath) {
            var match = relativeUrlLeadingCharactersRegex.exec(firstPath);
            if (match) {
                leadingRelativeUrlCharacters = match[0];
            }
        }
        return leadingRelativeUrlCharacters;
    };
    UrlUtils.normalizePaths = function (toNormalize) {
        var _this = this;
        return this.toArray(toNormalize.paths).map(function (path) {
            if (Utils_1.Utils.isNonEmptyString(path)) {
                return _this.removeProblematicChars(path);
            }
            return '';
        });
    };
    UrlUtils.normalizeQueryString = function (toNormalize) {
        var _this = this;
        var queryNormalized = [];
        if (toNormalize.queryAsString) {
            var cleanedUp = this.toArray(toNormalize.queryAsString).map(function (query) {
                query = _this.removeProblematicChars(query);
                query = _this.encodeKeyValuePair(query);
                return query;
            });
            queryNormalized = queryNormalized.concat(cleanedUp);
        }
        if (toNormalize.query) {
            var paired = underscore_1.pairs(toNormalize.query);
            var mapped = paired.map(function (pair) {
                var key = pair[0], value = pair[1];
                if (Utils_1.Utils.isNullOrUndefined(value) || Utils_1.Utils.isNullOrUndefined(key)) {
                    return '';
                }
                if (!_this.isEncoded(value)) {
                    return [_this.removeProblematicChars(key), Utils_1.Utils.safeEncodeURIComponent(value)].join('=');
                }
                else {
                    return [_this.removeProblematicChars(key), value].join('=');
                }
            });
            queryNormalized = queryNormalized.concat(mapped);
        }
        return underscore_1.uniq(queryNormalized);
    };
    UrlUtils.addToUrlIfNotEmpty = function (toAdd, joinWith, leadWith) {
        if (Utils_1.Utils.isNonEmptyArray(toAdd)) {
            return "" + leadWith + underscore_1.compact(toAdd).join(joinWith);
        }
        return '';
    };
    UrlUtils.startsWith = function (searchString, targetString) {
        return targetString.substr(0, searchString.length) === searchString;
    };
    UrlUtils.endsWith = function (searchString, targetString) {
        return targetString.substring(targetString.length - searchString.length, targetString.length) === searchString;
    };
    UrlUtils.removeAtEnd = function (searchString, targetString) {
        while (this.endsWith(searchString, targetString)) {
            targetString = targetString.slice(0, targetString.length - searchString.length);
        }
        return targetString;
    };
    UrlUtils.removeAtStart = function (searchString, targetString) {
        while (this.startsWith(searchString, targetString)) {
            targetString = targetString.slice(searchString.length);
        }
        return targetString;
    };
    UrlUtils.toArray = function (parameter) {
        return underscore_1.isArray(parameter) ? parameter : [parameter];
    };
    UrlUtils.encodeKeyValuePair = function (pair) {
        var split = pair.split('=');
        if (split.length == 0) {
            return pair;
        }
        var key = split[0];
        var value = underscore_1.rest(split, 1).join('');
        if (!key) {
            return pair;
        }
        if (!value) {
            return pair;
        }
        key = this.removeProblematicChars(key);
        if (!this.isEncoded(value)) {
            value = Utils_1.Utils.safeEncodeURIComponent(value);
        }
        return key + "=" + value;
    };
    UrlUtils.removeProblematicChars = function (value) {
        var _this = this;
        ['?', '/', '#', '='].forEach(function (problematicChar) {
            value = _this.removeAtStart(problematicChar, value);
            value = _this.removeAtEnd(problematicChar, value);
        });
        return value;
    };
    UrlUtils.isEncoded = function (value) {
        return value != decodeURIComponent(value);
    };
    return UrlUtils;
}());
exports.UrlUtils = UrlUtils;


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Template_1 = __webpack_require__(22);
var Assert_1 = __webpack_require__(5);
var Utils_1 = __webpack_require__(4);
var Logger_1 = __webpack_require__(11);
var TemplateFromAScriptTag_1 = __webpack_require__(117);
var DefaultResultTemplate_1 = __webpack_require__(83);
var _ = __webpack_require__(0);
var Dom_1 = __webpack_require__(2);
var UnderscoreTemplate = /** @class */ (function (_super) {
    __extends(UnderscoreTemplate, _super);
    function UnderscoreTemplate(element) {
        var _this = _super.call(this) || this;
        _this.element = element;
        Assert_1.Assert.exists(element);
        var templateString = element.innerHTML;
        try {
            _this.template = _.template(templateString);
        }
        catch (e) {
            new Logger_1.Logger(_this).error('Cannot instantiate underscore template. Might be caused by strict Content-Security-Policy. Will fallback on a default template...', e);
        }
        _this.templateFromAScriptTag = new TemplateFromAScriptTag_1.TemplateFromAScriptTag(_this, _this.element);
        _this.dataToString = function (object) {
            var extended = _.extend({}, object, UnderscoreTemplate.templateHelpers);
            if (_this.template) {
                try {
                    return _this.template(extended);
                }
                catch (e) {
                    new Logger_1.Logger(_this).error('Cannot instantiate template', e.message, _this.getTemplateInfo());
                    new Logger_1.Logger(_this).warn('A default template was used');
                    return new DefaultResultTemplate_1.DefaultResultTemplate().getFallbackTemplate();
                }
            }
            else {
                return new DefaultResultTemplate_1.DefaultResultTemplate().getFallbackTemplate();
            }
        };
        return _this;
    }
    UnderscoreTemplate.prototype.toHtmlElement = function () {
        var script = this.templateFromAScriptTag.toHtmlElement(Dom_1.$$('script'));
        script.setAttribute('type', _.first(UnderscoreTemplate.mimeTypes));
        return script;
    };
    UnderscoreTemplate.prototype.getType = function () {
        return 'UnderscoreTemplate';
    };
    UnderscoreTemplate.prototype.getTemplateInfo = function () {
        return this.element;
    };
    UnderscoreTemplate.registerTemplateHelper = function (helperName, helper) {
        UnderscoreTemplate.templateHelpers[helperName] = helper;
    };
    UnderscoreTemplate.isLibraryAvailable = function () {
        return Utils_1.Utils.exists(window['_']);
    };
    UnderscoreTemplate.fromString = function (template, properties) {
        var script = TemplateFromAScriptTag_1.TemplateFromAScriptTag.fromString(template, properties, document.createElement('script'));
        script.setAttribute('type', UnderscoreTemplate.mimeTypes[0]);
        return new UnderscoreTemplate(script);
    };
    UnderscoreTemplate.create = function (element) {
        Assert_1.Assert.exists(element);
        return new UnderscoreTemplate(element);
    };
    UnderscoreTemplate.templateHelpers = {};
    UnderscoreTemplate.mimeTypes = ['text/underscore', 'text/underscore-template', 'text/x-underscore', 'text/x-underscore-template'];
    return UnderscoreTemplate;
}(Template_1.Template));
exports.UnderscoreTemplate = UnderscoreTemplate;


/***/ }),
/* 44 */,
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ExpressionBuilder_1 = __webpack_require__(53);
var QueryBuilderExpression_1 = __webpack_require__(126);
var _ = __webpack_require__(0);
var Utils_1 = __webpack_require__(4);
/**
 * The QueryBuilder is used to build a {@link IQuery} that will be able to be executed using the Search API.
 *
 * The class exposes several members and methods that help components and external code to build up the final query that is sent to the Search API.
 *
 */
var QueryBuilder = /** @class */ (function () {
    function QueryBuilder() {
        /**
         * Used to build the basic part of the query expression.
         *
         * This part typically consists of user-entered content such as query keywords, etc.
         * @type {Coveo.ExpressionBuilder}
         */
        this.expression = new ExpressionBuilder_1.ExpressionBuilder();
        /**
         * Used to build the advanced part of the query expression.
         *
         * This part is typically formed of filter expressions generated by components such as facets, external code, etc.
         * @type {Coveo.ExpressionBuilder}
         */
        this.advancedExpression = new ExpressionBuilder_1.ExpressionBuilder();
        /**
         * Used to build the advanced part of the query expression.
         *
         * This part is similar to `advancedExpression`, but its content is interpreted as a constant expression by the index and it takes advantage of special caching features.
         * @type {Coveo.ExpressionBuilder}
         */
        this.constantExpression = new ExpressionBuilder_1.ExpressionBuilder();
        /**
         * The contextual text.
         *
         * This is the contextual text part of the query. It uses the Coveo Machine Learning service to pick key keywords from the text and add them to the basic expression.
         * This field is mainly used to pass context such a case description, long textual query or any other form of text that might help in
         * refining the query.
         */
        this.longQueryExpression = new ExpressionBuilder_1.ExpressionBuilder();
        /**
         * Used to build the disjunctive part of the query expression.
         *
         * When present, this part is evaluated separately from the other expressions and the matching results are merged to those matching expressions, `advancedExpression` and `constantExpression`.
         *
         * The final boolean expression for the query is thus (basic advanced constant) OR (disjunction).
         * @type {Coveo.ExpressionBuilder}
         */
        this.disjunctionExpression = new ExpressionBuilder_1.ExpressionBuilder();
        /**
         * Whether to interpret special query syntax (e.g., `@objecttype=message`) in the basic
         * [`expression`]{@link QueryBuilder.expression} (see
         * [Coveo Query Syntax Reference](http://www.coveo.com/go?dest=adminhelp70&lcid=9&context=10005)).
         *
         * See also [`enableLowercaseOperators`]{@link QueryBuilder.enableLowercaseOperators}.
         *
         * **Note:**
         * > Normally, the [`enableQuerySyntax`]{@link Querybox.options.enableQuerySyntax} option of the
         * > [`Querybox`]{@link Querybox} component determines the value of this attribute during the initialization of the
         * search page. End user preferences can also modify the value of this attribute.
         *
         * Default value is `false`
         */
        this.enableQuerySyntax = false;
        /**
         * This is the 0-based index of the first result to return.
         *
         * If not specified, this parameter defaults to 0.
         */
        this.firstResult = 0;
        /**
         * This is the number of results to return, starting from {@link IQuery.firstResult}.
         *
         * If not specified, this parameter defaults to 10.
         */
        this.numberOfResults = 10;
        this.requiredFields = [];
        this.includeRequiredFields = false;
        /**
         * Whether to enable query corrections on this query (see {@link DidYouMean}).
         */
        this.enableDidYouMean = false;
        /**
         * Whether to enable debug info on the query.
         *
         * This will return additional information on the resulting JSON response from the Search API.
         *
         * Mostly: execution report (a detailed breakdown of the parsed and executed query).
         */
        this.enableDebug = false;
        /**
         * This specifies the sort criterion(s) to use to sort results. If not specified, this parameter defaults to relevancy.
         *
         * Possible values are : <br/>
         * -- relevancy :  This uses all the configured ranking weights as well as any specified ranking expressions to rank results.<br/>
         * -- dateascending / datedescending Sort using the value of the `@date` field, which is typically the last modification date of an item in the index.<br/>
         * -- qre : Sort using only the weights applied through ranking expressions. This is much like using `relevancy` except that automatic weights based on keyword proximity etc, are not computed.<br/>
         * -- nosort : Do not sort the results. The order in which items are returned is essentially random.<br/>
         * -- @field ascending / @field descending Sort using the value of a custom field.
         */
        this.sortCriteria = 'relevancy';
        this.retrieveFirstSentences = true;
        /**
         * This specifies an array of Query Function operation that will be executed on the results.
         */
        this.queryFunctions = [];
        /**
         * This specifies an array of Ranking Function operations that will be executed on the results.
         */
        this.rankingFunctions = [];
        /**
         * This specifies an array of Group By operations that can be performed on the query results to extract facets.
         */
        this.groupByRequests = [];
        this.enableDuplicateFiltering = false;
    }
    /**
     * Build the current content or state of the query builder and return a {@link IQuery}.
     *
     * build can be called multiple times on the same QueryBuilder.
     * @returns {IQuery}
     */
    QueryBuilder.prototype.build = function () {
        var query = {
            q: this.expression.build(),
            aq: this.advancedExpression.build(),
            cq: this.constantExpression.build(),
            lq: this.longQueryExpression.build(),
            dq: this.disjunctionExpression.build(),
            searchHub: this.searchHub,
            tab: this.tab,
            locale: this.locale,
            pipeline: this.pipeline,
            maximumAge: this.maximumAge,
            wildcards: this.enableWildcards,
            questionMark: this.enableQuestionMarks,
            lowercaseOperators: this.enableLowercaseOperators,
            partialMatch: this.enablePartialMatch,
            partialMatchKeywords: this.partialMatchKeywords,
            partialMatchThreshold: this.partialMatchThreshold,
            firstResult: this.firstResult,
            numberOfResults: this.numberOfResults,
            excerptLength: this.excerptLength,
            filterField: this.filterField,
            filterFieldRange: this.filterFieldRange,
            parentField: this.parentField,
            childField: this.childField,
            fieldsToInclude: this.computeFieldsToInclude(),
            fieldsToExclude: this.fieldsToExclude,
            enableDidYouMean: this.enableDidYouMean,
            sortCriteria: this.sortCriteria,
            sortField: this.sortField,
            queryFunctions: this.queryFunctions,
            rankingFunctions: this.rankingFunctions,
            groupBy: this.groupByRequests,
            retrieveFirstSentences: this.retrieveFirstSentences,
            timezone: this.timezone,
            enableQuerySyntax: this.enableQuerySyntax,
            enableDuplicateFiltering: this.enableDuplicateFiltering,
            enableCollaborativeRating: this.enableCollaborativeRating,
            debug: this.enableDebug,
            context: this.context,
            actionsHistory: this.actionsHistory,
            recommendation: this.recommendation,
            allowQueriesWithoutKeywords: this.allowQueriesWithoutKeywords
        };
        return query;
    };
    /**
     * Return only the expression(s) part(s) of the query, as a string.
     *
     * This means the basic, advanced and constant part in a complete expression {@link IQuery.q}, {@link IQuery.aq}, {@link IQuery.cq}.
     * @returns {string}
     */
    QueryBuilder.prototype.computeCompleteExpression = function () {
        return this.computeCompleteExpressionParts().full;
    };
    /**
     * Return only the expression(s) part(s) of the query, as an object.
     * @returns {{full: string, withoutConstant: string, constant: string}}
     */
    QueryBuilder.prototype.computeCompleteExpressionParts = function () {
        return new QueryBuilderExpression_1.QueryBuilderExpression(this.expression.build(), this.advancedExpression.build(), this.constantExpression.build(), this.disjunctionExpression.build());
    };
    /**
     * Return only the expression(s) part(s) of the query, as a string, except the given expression.
     *
     * This is used by {@link Facet}, to build their group by request with query override.
     * @param except
     * @returns {string}
     */
    QueryBuilder.prototype.computeCompleteExpressionExcept = function (except) {
        return this.computeCompleteExpressionPartsExcept(except).full;
    };
    /**
     * Return only the expression(s) part(s) of the query, as an object, except the given expression.
     *
     * This is used by {@link Facet}, to build their group by request with query override.
     * @param except
     * @returns {{full: string, withoutConstant: string, constant: string}}
     */
    QueryBuilder.prototype.computeCompleteExpressionPartsExcept = function (except) {
        var withoutConstantAndExcept = ExpressionBuilder_1.ExpressionBuilder.merge(this.expression, this.advancedExpression);
        withoutConstantAndExcept.remove(except);
        var basicWithoutException = new ExpressionBuilder_1.ExpressionBuilder();
        basicWithoutException.fromExpressionBuilder(this.expression);
        basicWithoutException.remove(except);
        var advancedWithoutException = new ExpressionBuilder_1.ExpressionBuilder();
        advancedWithoutException.fromExpressionBuilder(this.advancedExpression);
        advancedWithoutException.remove(except);
        var constantWithoutException = new ExpressionBuilder_1.ExpressionBuilder();
        constantWithoutException.fromExpressionBuilder(this.constantExpression);
        constantWithoutException.remove(except);
        var disjunctionWithoutException = new ExpressionBuilder_1.ExpressionBuilder();
        disjunctionWithoutException.fromExpressionBuilder(this.disjunctionExpression);
        disjunctionWithoutException.remove(except);
        return new QueryBuilderExpression_1.QueryBuilderExpression(basicWithoutException.build(), advancedWithoutException.build(), constantWithoutException.build(), disjunctionWithoutException.build());
    };
    /**
     * Add fields to specifically include when the results return.
     *
     * This can be used to accelerate the execution time of every query, as there is much less data to process if you whitelist specific fields.
     * @param fields
     */
    QueryBuilder.prototype.addFieldsToInclude = function (fields) {
        this.fieldsToInclude = _.uniq((this.fieldsToInclude || []).concat(fields));
    };
    QueryBuilder.prototype.addRequiredFields = function (fields) {
        this.requiredFields = _.uniq(this.requiredFields.concat(fields));
    };
    /**
     * Add fields to specifically exclude when the results return.
     *
     * This can be used to accelerate the execution time of every query, as there is much less data to process if you blacklist specific fields.
     * @param fields
     */
    QueryBuilder.prototype.addFieldsToExclude = function (fields) {
        this.fieldsToExclude = _.uniq((this.fieldsToInclude || []).concat(fields));
    };
    QueryBuilder.prototype.computeFieldsToInclude = function () {
        if (this.includeRequiredFields || this.fieldsToInclude != null) {
            return this.requiredFields.concat(this.fieldsToInclude || []);
        }
        else {
            return null;
        }
    };
    /**
     * Adds or updates a single context key-value pair in the `context` object.
     *
     * @param key The context key. If this key is already present in the `context` object, its value is updated.
     * @param value The context value. This should be a string or an array of strings.
     */
    QueryBuilder.prototype.addContextValue = function (key, value) {
        if (this.context == null) {
            this.context = {};
        }
        this.context[key] = value;
    };
    /**
     * Merges the specified `values` into the `context` object.
     *
     * @param values The object to merge into the `context` object. Can contain multiple key-value pairs, where each value should be a string or an array of strings. If some keys are already present in the `context` object, their values are updated.
     */
    QueryBuilder.prototype.addContext = function (values) {
        if (this.context == null) {
            this.context = {};
        }
        _.extend(this.context, values);
    };
    /**
     * Returns true if the current query contains any expression that are considered "end user input".
     *
     * This usually means anything entered in the basic (see [q]{@link IQuery.options.q}) or long (see [lq]{@link IQuery.options.lq}) part of the query.
     */
    QueryBuilder.prototype.containsEndUserKeywords = function () {
        var query = this.build();
        return Utils_1.Utils.isNonEmptyString(query.q) || Utils_1.Utils.isNonEmptyString(query.lq);
    };
    return QueryBuilder;
}());
exports.QueryBuilder = QueryBuilder;


/***/ }),
/* 46 */,
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Dom_1 = __webpack_require__(2);
var KeyboardUtils_1 = __webpack_require__(20);
var GlobalExports_1 = __webpack_require__(3);
/**
 * A text input widget with standard styling.
 */
var TextInput = /** @class */ (function () {
    /**
     * Creates a new `TextInput`.
     * @param onChange The function to call when the value entered in the text input changes. This function takes the
     * current `TextInput` instance as an argument.
     * @param name The text to display in the text input label.
     */
    function TextInput(onChange, name) {
        if (onChange === void 0) { onChange = function (textInput) { }; }
        this.onChange = onChange;
        this.name = name;
        this.lastQueryText = '';
        this.buildContent();
    }
    TextInput.doExport = function () {
        GlobalExports_1.exportGlobally({
            TextInput: TextInput
        });
    };
    /**
     * Gets the element on which the text input is bound.
     * @returns {HTMLElement} The text input element.
     */
    TextInput.prototype.getElement = function () {
        return this.element;
    };
    /**
     * Gets the value currently entered in the text input.
     * @returns {string} The text input current value.
     */
    TextInput.prototype.getValue = function () {
        return Dom_1.$$(this.element).find('input').value;
    };
    /**
     * Sets the value in the text input.
     * @param value The value to set the text input to.
     */
    TextInput.prototype.setValue = function (value) {
        var currentValue = this.getValue();
        Dom_1.$$(this.element).find('input').value = value;
        if (currentValue != value) {
            this.onChange(this);
        }
    };
    /**
     * Resets the text input.
     */
    TextInput.prototype.reset = function () {
        var currentValue = this.getValue();
        Dom_1.$$(this.element).find('input').value = '';
        if (currentValue != '') {
            this.onChange(this);
        }
    };
    /**
     * Gets the element on which the text input is bound.
     * @returns {HTMLElement} The text input element.
     */
    TextInput.prototype.build = function () {
        return this.element;
    };
    /**
     * Gets the `input` element (the text input itself).
     * @returns {HTMLElement} The `input` element.
     */
    TextInput.prototype.getInput = function () {
        return Dom_1.$$(this.element).find('input');
    };
    TextInput.prototype.buildContent = function () {
        var _this = this;
        var container = Dom_1.$$('div', { className: 'coveo-input' });
        var input = Dom_1.$$('input', { type: 'text' });
        input.on(['keydown', 'blur'], function (e) {
            if (e.type == 'blur' || e.keyCode == KeyboardUtils_1.KEYBOARD.ENTER) {
                _this.triggerChange();
            }
        });
        input.el.required = true;
        container.append(input.el);
        if (this.name) {
            var label = Dom_1.$$('label');
            label.text(this.name);
            container.append(label.el);
        }
        this.element = container.el;
    };
    TextInput.prototype.triggerChange = function () {
        if (this.lastQueryText != this.getInput().value) {
            this.onChange(this);
            this.lastQueryText = this.getInput().value;
        }
    };
    return TextInput;
}());
exports.TextInput = TextInput;


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Dom_1 = __webpack_require__(2);
var PopupVerticalAlignment;
(function (PopupVerticalAlignment) {
    PopupVerticalAlignment[PopupVerticalAlignment["TOP"] = 0] = "TOP";
    PopupVerticalAlignment[PopupVerticalAlignment["MIDDLE"] = 1] = "MIDDLE";
    PopupVerticalAlignment[PopupVerticalAlignment["BOTTOM"] = 2] = "BOTTOM";
    PopupVerticalAlignment[PopupVerticalAlignment["INNERTOP"] = 3] = "INNERTOP";
    PopupVerticalAlignment[PopupVerticalAlignment["INNERBOTTOM"] = 4] = "INNERBOTTOM";
})(PopupVerticalAlignment = exports.PopupVerticalAlignment || (exports.PopupVerticalAlignment = {}));
var PopupHorizontalAlignment;
(function (PopupHorizontalAlignment) {
    PopupHorizontalAlignment[PopupHorizontalAlignment["LEFT"] = 0] = "LEFT";
    PopupHorizontalAlignment[PopupHorizontalAlignment["CENTER"] = 1] = "CENTER";
    PopupHorizontalAlignment[PopupHorizontalAlignment["RIGHT"] = 2] = "RIGHT";
    PopupHorizontalAlignment[PopupHorizontalAlignment["INNERLEFT"] = 3] = "INNERLEFT";
    PopupHorizontalAlignment[PopupHorizontalAlignment["INNERRIGHT"] = 4] = "INNERRIGHT";
})(PopupHorizontalAlignment = exports.PopupHorizontalAlignment || (exports.PopupHorizontalAlignment = {}));
var PopupUtils = /** @class */ (function () {
    function PopupUtils() {
    }
    PopupUtils.positionPopup = function (popUp, nextTo, boundary, desiredPosition, appendTo, checkForBoundary) {
        if (checkForBoundary === void 0) { checkForBoundary = 0; }
        popUp.style.position = 'absolute';
        if (appendTo) {
            Dom_1.$$(appendTo).append(popUp);
        }
        desiredPosition.verticalOffset = desiredPosition.verticalOffset ? desiredPosition.verticalOffset : 0;
        desiredPosition.horizontalOffset = desiredPosition.horizontalOffset ? desiredPosition.horizontalOffset : 0;
        var popUpPosition = Dom_1.$$(nextTo).offset();
        PopupUtils.basicVerticalAlignment(popUpPosition, popUp, nextTo, desiredPosition);
        PopupUtils.basicHorizontalAlignment(popUpPosition, popUp, nextTo, desiredPosition);
        PopupUtils.finalAdjustement(Dom_1.$$(popUp).offset(), popUpPosition, popUp, desiredPosition);
        var popUpBoundary = PopupUtils.getBoundary(popUp);
        var boundaryPosition = PopupUtils.getBoundary(boundary);
        if (checkForBoundary < 2) {
            var checkBoundary = PopupUtils.checkForOutOfBoundary(popUpBoundary, boundaryPosition);
            if (checkBoundary.horizontal != 'ok' && desiredPosition.horizontalClip === true) {
                var width = popUp.offsetWidth;
                if (popUpBoundary.left < boundaryPosition.left) {
                    width -= boundaryPosition.left - popUpBoundary.left;
                }
                if (popUpBoundary.right > boundaryPosition.right) {
                    width -= popUpBoundary.right - boundaryPosition.right;
                }
                popUp.style.width = width + 'px';
                checkBoundary.horizontal = 'ok';
            }
            if (checkBoundary.vertical != 'ok' || checkBoundary.horizontal != 'ok') {
                var newDesiredPosition = PopupUtils.alignInsideBoundary(desiredPosition, checkBoundary);
                PopupUtils.positionPopup(popUp, nextTo, boundary, newDesiredPosition, appendTo, checkForBoundary + 1);
            }
        }
    };
    PopupUtils.finalAdjustement = function (popUpOffSet, popUpPosition, popUp, desiredPosition) {
        var position = Dom_1.$$(popUp).position();
        popUp.style.top = position.top + desiredPosition.verticalOffset - (popUpOffSet.top - popUpPosition.top) + 'px';
        popUp.style.left = position.left + desiredPosition.horizontalOffset - (popUpOffSet.left - popUpPosition.left) + 'px';
    };
    PopupUtils.basicVerticalAlignment = function (popUpPosition, popUp, nextTo, desiredPosition) {
        switch (desiredPosition.vertical) {
            case PopupVerticalAlignment.TOP:
                popUpPosition.top -= popUp.offsetHeight;
                break;
            case PopupVerticalAlignment.BOTTOM:
                popUpPosition.top += nextTo.offsetHeight;
                break;
            case PopupVerticalAlignment.MIDDLE:
                popUpPosition.top -= popUp.offsetHeight / 3;
            case PopupVerticalAlignment.INNERTOP:
                break; // Nothing to do, it's the default alignment normally
            case PopupVerticalAlignment.INNERBOTTOM:
                popUpPosition.top -= popUp.offsetHeight - nextTo.offsetHeight;
                break;
            default:
                break;
        }
    };
    PopupUtils.basicHorizontalAlignment = function (popUpPosition, popUp, nextTo, desiredPosition) {
        switch (desiredPosition.horizontal) {
            case PopupHorizontalAlignment.LEFT:
                popUpPosition.left -= popUp.offsetWidth;
                break;
            case PopupHorizontalAlignment.RIGHT:
                popUpPosition.left += nextTo.offsetWidth;
                break;
            case PopupHorizontalAlignment.CENTER:
                popUpPosition.left += PopupUtils.offSetToAlignCenter(popUp, nextTo);
                break;
            case PopupHorizontalAlignment.INNERLEFT:
                break; // Nothing to do, it's the default alignment normally
            case PopupHorizontalAlignment.INNERRIGHT:
                popUpPosition.left -= popUp.offsetWidth - nextTo.offsetWidth;
                break;
            default:
                break;
        }
    };
    PopupUtils.alignInsideBoundary = function (oldPosition, checkBoundary) {
        var newDesiredPosition = oldPosition;
        if (checkBoundary.horizontal == 'left') {
            newDesiredPosition.horizontal = PopupHorizontalAlignment.RIGHT;
        }
        if (checkBoundary.horizontal == 'right') {
            newDesiredPosition.horizontal = PopupHorizontalAlignment.LEFT;
        }
        if (checkBoundary.vertical == 'top') {
            newDesiredPosition.vertical = PopupVerticalAlignment.BOTTOM;
        }
        if (checkBoundary.vertical == 'bottom') {
            newDesiredPosition.vertical = PopupVerticalAlignment.TOP;
        }
        return newDesiredPosition;
    };
    PopupUtils.offSetToAlignCenter = function (popUp, nextTo) {
        return (nextTo.offsetWidth - popUp.offsetWidth) / 2;
    };
    PopupUtils.getBoundary = function (element) {
        var boundaryOffset = Dom_1.$$(element).offset();
        var toAddVertically;
        if (element.tagName.toLowerCase() == 'body') {
            toAddVertically = Math.max(element.scrollHeight, element.offsetHeight);
        }
        else if (element.tagName.toLowerCase() == 'html') {
            toAddVertically = Math.max(element.clientHeight, element.scrollHeight, element.offsetHeight);
        }
        else {
            toAddVertically = element.offsetHeight;
        }
        return {
            top: boundaryOffset.top,
            left: boundaryOffset.left,
            right: boundaryOffset.left + element.offsetWidth,
            bottom: boundaryOffset.top + toAddVertically
        };
    };
    PopupUtils.checkForOutOfBoundary = function (popUpBoundary, boundary) {
        var ret = {
            vertical: 'ok',
            horizontal: 'ok'
        };
        if (popUpBoundary.top < boundary.top) {
            ret.vertical = 'top';
        }
        if (popUpBoundary.bottom > boundary.bottom) {
            ret.vertical = 'bottom';
        }
        if (popUpBoundary.left < boundary.left) {
            ret.horizontal = 'left';
        }
        if (popUpBoundary.right > boundary.right) {
            ret.horizontal = 'right';
        }
        return ret;
    };
    return PopupUtils;
}());
exports.PopupUtils = PopupUtils;


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Utils_1 = __webpack_require__(4);
var Assert_1 = __webpack_require__(5);
var _ = __webpack_require__(0);
var StringAndHoles = /** @class */ (function () {
    function StringAndHoles() {
    }
    StringAndHoles.replace = function (str, find, replace) {
        var strAndHoles = new StringAndHoles();
        if (Utils_1.Utils.isNullOrEmptyString(str)) {
            return strAndHoles;
        }
        var index = str.lastIndexOf(find);
        if (index == -1) {
            strAndHoles.value = str;
            return strAndHoles;
        }
        var holes = [];
        while (index >= 0) {
            var hole = {
                begin: index,
                size: find.length,
                replacementSize: replace.length
            };
            holes.push(hole);
            str = str.slice(0, index) + replace + str.slice(index + find.length);
            index = str.lastIndexOf(find);
        }
        strAndHoles.holes = holes;
        strAndHoles.value = str;
        return strAndHoles;
    };
    /**
     * Shorten the passed path intelligently (path-aware).
     * Works with *local paths* and *network paths*
     * @param uriOrig The path to shorten
     * @param length The length to which the path will be shortened.
     */
    StringAndHoles.shortenPath = function (uriOrig, length) {
        var strAndHoles = new StringAndHoles();
        var uri = uriOrig;
        if (Utils_1.Utils.isNullOrEmptyString(uri) || uri.length <= length) {
            strAndHoles.value = uri;
            return strAndHoles;
        }
        var holes = [];
        var first = -1;
        if (Utils_1.Utils.stringStartsWith(uri, '\\\\')) {
            first = uri.indexOf('\\', first + 2);
        }
        else {
            first = uri.indexOf('\\');
        }
        if (first !== -1) {
            var removed = 0;
            var next = uri.indexOf('\\', first + 1);
            while (next !== -1 && uri.length - removed + StringAndHoles.SHORTEN_END.length > length) {
                removed = next - first - 1;
                next = uri.indexOf('\\', next + 1);
            }
            if (removed > 0) {
                uri = uri.slice(0, first + 1) + StringAndHoles.SHORTEN_END + uri.slice(removed);
                var hole = {
                    begin: first + 1,
                    size: removed - StringAndHoles.SHORTEN_END.length,
                    replacementSize: StringAndHoles.SHORTEN_END.length
                };
                holes.push(hole);
            }
        }
        if (uri.length > length) {
            var over = uri.length - length + StringAndHoles.SHORTEN_END.length;
            var start = uri.length - over;
            uri = uri.slice(0, start) + StringAndHoles.SHORTEN_END;
            var hole = {
                begin: start,
                size: over,
                replacementSize: StringAndHoles.SHORTEN_END.length
            };
            holes.push(hole);
        }
        strAndHoles.holes = holes;
        strAndHoles.value = uri;
        return strAndHoles;
    };
    /**
     * Shorten the passed string.
     * @param toShortenOrig The string to shorten
     * @param length The length to which the string will be shortened.
     * @param toAppend The string to append at the end (usually, it is set to '...')
     */
    StringAndHoles.shortenString = function (toShortenOrig, length, toAppend) {
        if (length === void 0) { length = 200; }
        var toShorten = toShortenOrig;
        toAppend = Utils_1.Utils.toNotNullString(toAppend);
        var strAndHoles = new StringAndHoles();
        if (Utils_1.Utils.isNullOrEmptyString(toShorten) || length <= toAppend.length) {
            strAndHoles.value = toShorten;
            return strAndHoles;
        }
        if (toShorten.length <= length) {
            strAndHoles.value = toShorten;
            return strAndHoles;
        }
        var str = toShorten;
        length = length - toAppend.length;
        str = str.slice(0, length);
        if (toShorten.charAt(str.length) !== ' ') {
            var pos = str.lastIndexOf(' ');
            if (pos !== -1 && str.length - pos < StringAndHoles.WORD_SHORTER) {
                str = str.slice(0, pos);
            }
        }
        var holes = [];
        holes[0] = {
            begin: str.length,
            size: toShorten.length - str.length,
            replacementSize: toAppend.length
        };
        str += toAppend;
        strAndHoles.value = str;
        strAndHoles.holes = holes;
        return strAndHoles;
    };
    /**
     * Shorten the passed URI intelligently (path-aware).
     * @param toShortenOrig The URI to shorten
     * @param length The length to which the URI will be shortened.
     */
    StringAndHoles.shortenUri = function (uri, length) {
        var strAndHoles = new StringAndHoles();
        if (Utils_1.Utils.isNullOrEmptyString(uri) || uri.length <= length) {
            strAndHoles.value = uri;
            return strAndHoles;
        }
        var holes = [];
        var first = uri.indexOf('//');
        if (first !== -1) {
            first = uri.indexOf('/', first + 2);
        }
        if (first !== -1) {
            var removed = 0;
            var next = uri.indexOf('/', first + 1);
            while (next !== -1 && uri.length - removed + StringAndHoles.SHORTEN_END.length > length) {
                removed = next - first - 1;
                next = uri.indexOf('/', next + 1);
            }
            if (removed > 0) {
                uri = uri.slice(0, first + 1) + StringAndHoles.SHORTEN_END + uri.slice(first + 1 + removed);
                var hole = {
                    begin: first + 1,
                    size: removed,
                    replacementSize: StringAndHoles.SHORTEN_END.length
                };
                holes.push(hole);
            }
        }
        if (uri.length > length) {
            var over = uri.length - length + StringAndHoles.SHORTEN_END.length;
            var start = uri.length - over;
            uri = uri.slice(0, start) + StringAndHoles.SHORTEN_END;
            var hole = {
                begin: start,
                size: over,
                replacementSize: StringAndHoles.SHORTEN_END.length
            };
            holes.push(hole);
        }
        strAndHoles.holes = holes;
        strAndHoles.value = uri;
        return strAndHoles;
    };
    StringAndHoles.SHORTEN_END = '...';
    StringAndHoles.WORD_SHORTER = 10;
    return StringAndHoles;
}());
exports.StringAndHoles = StringAndHoles;
var HighlightUtils = /** @class */ (function () {
    function HighlightUtils() {
    }
    /**
     * Highlight the passed string using specified highlights and holes.
     * @param content The string to highlight items in.
     * @param highlights The highlighted positions to highlight in the string.
     * @param holes Possible holes which are used to skip highlighting.
     * @param cssClass The css class to use on the highlighting `span`.
     */
    HighlightUtils.highlightString = function (content, highlights, holes, cssClass) {
        Assert_1.Assert.isNotUndefined(highlights);
        Assert_1.Assert.isNotNull(highlights);
        Assert_1.Assert.isNonEmptyString(cssClass);
        if (Utils_1.Utils.isNullOrEmptyString(content)) {
            return content;
        }
        var maxIndex = content.length;
        var highlighted = '';
        var last = 0;
        for (var i = 0; i < highlights.length; i++) {
            var highlight = highlights[i];
            var start = highlight.offset;
            var end = start + highlight.length;
            if (holes !== null) {
                var skip = false;
                for (var j = 0; j < holes.length; j++) {
                    var hole = holes[j];
                    var holeBegin = hole.begin;
                    var holeEnd = holeBegin + hole.size;
                    if (start < holeBegin && end >= holeBegin && end < holeEnd) {
                        end = holeBegin;
                    }
                    else if (start >= holeBegin && end < holeEnd) {
                        skip = true;
                        break;
                    }
                    else if (start >= holeBegin && start < holeEnd && end >= holeEnd) {
                        start = holeBegin + hole.replacementSize;
                        end -= hole.size - hole.replacementSize;
                    }
                    else if (start < holeBegin && end >= holeEnd) {
                        end -= hole.size - hole.replacementSize;
                    }
                    else if (start >= holeEnd) {
                        var offset = hole.size - hole.replacementSize;
                        start -= offset;
                        end -= offset;
                    }
                }
                if (skip || start === end) {
                    continue;
                }
            }
            if (end > maxIndex) {
                break;
            }
            highlighted += _.escape(content.slice(last, start));
            highlighted += "<span class=\"" + cssClass + "\"";
            if (highlight.dataHighlightGroup) {
                highlighted += " data-highlight-group=\"" + highlight.dataHighlightGroup.toString() + "\"";
            }
            if (highlight.dataHighlightGroupTerm) {
                highlighted += " data-highlight-group-term=\"" + highlight.dataHighlightGroupTerm + "\"";
            }
            highlighted += '>';
            highlighted += _.escape(content.slice(start, end));
            highlighted += '</span>';
            last = end;
        }
        if (last != maxIndex) {
            highlighted += _.escape(content.slice(last));
        }
        return highlighted;
    };
    return HighlightUtils;
}());
exports.HighlightUtils = HighlightUtils;


/***/ }),
/* 50 */,
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var TemplateCache_1 = __webpack_require__(54);
var TemplateList_1 = __webpack_require__(95);
var UnderscoreTemplate_1 = __webpack_require__(43);
var HtmlTemplate_1 = __webpack_require__(71);
var ComponentOptions_1 = __webpack_require__(7);
var Assert_1 = __webpack_require__(5);
var Utils_1 = __webpack_require__(4);
var underscore_1 = __webpack_require__(0);
var TemplateComponentOptions = /** @class */ (function () {
    function TemplateComponentOptions() {
    }
    /**
     * Builds a template option.
     *
     * The option accepts a CSS selector matching a valid template. This selector can either be a class, or an ID
     * selector.
     *
     * When building a template option using an ID selector, the matching template must be registered in the
     * [`TemplateCache`]{@link TemplateCache}, however.
     *
     * **Markup Examples:**
     *
     * > `data-foo-id="#bar"`
     *
     * > `data-foo-selector=".bar"`
     *
     * @param optionArgs The arguments to apply when building the option.
     * @returns {Template} The resulting option value.
     */
    TemplateComponentOptions.buildTemplateOption = function (optionArgs) {
        return ComponentOptions_1.ComponentOptions.buildOption(ComponentOptions_1.ComponentOptionsType.TEMPLATE, TemplateComponentOptions.loadTemplateOption, optionArgs);
    };
    TemplateComponentOptions.loadTemplateOption = function (element, name, option, doc) {
        if (doc === void 0) { doc = document; }
        var template;
        // Attribute: template selector
        var selectorAttr = option.selectorAttr || ComponentOptions_1.ComponentOptions.attrNameFromName(name, option) + '-selector';
        var selector = element.getAttribute(selectorAttr) || ComponentOptions_1.ComponentOptions.getAttributeFromAlias(element, option);
        if (selector != null) {
            var templateElement = doc.querySelector(selector);
            if (templateElement != null) {
                template = TemplateComponentOptions.createResultTemplateFromElement(templateElement);
            }
        }
        // Attribute: template id
        if (template == null) {
            var idAttr = option.idAttr || ComponentOptions_1.ComponentOptions.attrNameFromName(name, option) + '-id';
            var id = element.getAttribute(idAttr) || ComponentOptions_1.ComponentOptions.getAttributeFromAlias(element, option);
            if (id != null) {
                template = TemplateComponentOptions.loadResultTemplateFromId(id);
            }
        }
        // Child
        if (template == null) {
            var childSelector = option.childSelector;
            if (childSelector == null) {
                childSelector = '.' + name.replace(/([A-Z])/g, '-$1').toLowerCase();
            }
            template = TemplateComponentOptions.loadChildrenResultTemplateFromSelector(element, childSelector);
        }
        return template;
    };
    TemplateComponentOptions.createResultTemplateFromElement = function (element) {
        Assert_1.Assert.exists(element);
        var type = element.getAttribute('type');
        var mimeTypes = 'You must specify the type of template. Valid values are:' +
            ' ' +
            UnderscoreTemplate_1.UnderscoreTemplate.mimeTypes.toString() +
            ' ' +
            HtmlTemplate_1.HtmlTemplate.mimeTypes.toString();
        Assert_1.Assert.check(Utils_1.Utils.isNonEmptyString(type), mimeTypes);
        if (underscore_1.indexOf(UnderscoreTemplate_1.UnderscoreTemplate.mimeTypes, type.toLowerCase()) != -1) {
            return UnderscoreTemplate_1.UnderscoreTemplate.create(element);
        }
        else if (underscore_1.indexOf(HtmlTemplate_1.HtmlTemplate.mimeTypes, type.toLowerCase()) != -1) {
            return new HtmlTemplate_1.HtmlTemplate(element);
        }
        else {
            Assert_1.Assert.fail('Cannot guess template type from attribute: ' + type + '. Valid values are ' + mimeTypes);
            return undefined;
        }
    };
    TemplateComponentOptions.loadResultTemplateFromId = function (templateId) {
        return Utils_1.Utils.isNonEmptyString(templateId) ? TemplateCache_1.TemplateCache.getTemplate(templateId) : null;
    };
    TemplateComponentOptions.loadChildrenResultTemplateFromSelector = function (element, selector) {
        var foundElements = ComponentOptions_1.ComponentOptions.loadChildrenHtmlElementFromSelector(element, selector);
        if (foundElements.length > 0) {
            return new TemplateList_1.TemplateList(underscore_1.compact(foundElements.map(function (element) { return TemplateComponentOptions.createResultTemplateFromElement(element); })));
        }
        return null;
    };
    return TemplateComponentOptions;
}());
exports.TemplateComponentOptions = TemplateComponentOptions;


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Assert_1 = __webpack_require__(5);
exports.Assert = Assert_1.Assert;
var Defer_1 = __webpack_require__(28);
exports.Defer = Defer_1.Defer;
var L10N_1 = __webpack_require__(112);
exports.L10N = L10N_1.L10N;
var Logger_1 = __webpack_require__(11);
exports.Logger = Logger_1.Logger;
var Options_1 = __webpack_require__(58);
exports.Options = Options_1.Options;
var Strings_1 = __webpack_require__(8);
exports.l = Strings_1.l;
var Logger_2 = __webpack_require__(11);
if (false) {
    Logger_2.Logger.disable();
}


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Assert_1 = __webpack_require__(5);
var QueryUtils_1 = __webpack_require__(19);
var _ = __webpack_require__(0);
/**
 * An `ExpressionBuilder` that is mostly used by the {@link QueryBuilder}.<br/>
 * It is used to build a single query expression.<br/>
 * It allows combining multiple expression parts into a single string and provides utilities to generate common expression parts.
 */
var ExpressionBuilder = /** @class */ (function () {
    function ExpressionBuilder() {
        this.parts = []; // he he he
        this.wrapParts = true;
    }
    /**
     * Add a new part to the expression.
     * @param expression
     */
    ExpressionBuilder.prototype.add = function (expression) {
        Assert_1.Assert.isNonEmptyString(expression);
        this.parts.push(expression);
    };
    /**
     * Take another `ExpressionBuilder`, and copy it.
     * @param expression
     */
    ExpressionBuilder.prototype.fromExpressionBuilder = function (expression) {
        this.parts = this.parts.concat(expression.parts);
    };
    /**
     * Add a new part to the expression, but specific for field values<br/>
     * eg @field=(value1,value2,value3).
     * @param field The field for which to create an expression (e.g.: @foo).
     * @param operator The operator to use e.g.: = (equal) == (strict equal) <> (not equal).
     * @param values The values to put in the expression.
     */
    ExpressionBuilder.prototype.addFieldExpression = function (field, operator, values) {
        Assert_1.Assert.isNonEmptyString(field);
        Assert_1.Assert.stringStartsWith(field, '@');
        Assert_1.Assert.isNonEmptyString(operator);
        Assert_1.Assert.isLargerOrEqualsThan(1, values.length);
        this.add(QueryUtils_1.QueryUtils.buildFieldExpression(field, operator, values));
    };
    /**
     * Add a new part to the expression, but specific for field values<br/>
     * eg : NOT @field==(value1, value2, value3).
     * @param field The field for which to create an expression (e.g.: @foo)
     * @param values The values to put in the expression.
     */
    ExpressionBuilder.prototype.addFieldNotEqualExpression = function (field, values) {
        Assert_1.Assert.isNonEmptyString(field);
        Assert_1.Assert.stringStartsWith(field, '@');
        Assert_1.Assert.isLargerOrEqualsThan(1, values.length);
        this.add(QueryUtils_1.QueryUtils.buildFieldNotEqualExpression(field, values));
    };
    /**
     * Removes an expression from the builder.
     * @param expression
     */
    ExpressionBuilder.prototype.remove = function (expression) {
        Assert_1.Assert.isNonEmptyString(expression);
        var index = _.indexOf(this.parts, expression);
        if (index != -1) {
            this.parts.splice(_.indexOf(this.parts, expression), 1);
        }
    };
    /**
     * Checks if the builder is currently empty.
     * @returns {boolean}
     */
    ExpressionBuilder.prototype.isEmpty = function () {
        return this.parts.length == 0;
    };
    /**
     * Builds the expression string by combining all the parts together.<br/>
     * @param exp expression to join the different parts, default to a space.
     * @returns {any}
     */
    ExpressionBuilder.prototype.build = function (exp) {
        if (exp === void 0) { exp = ' '; }
        if (this.parts.length == 0) {
            return undefined;
        }
        else if (this.parts.length == 1) {
            return this.parts[0];
        }
        else if (this.wrapParts) {
            return '(' + this.parts.join(')' + exp + '(') + ')';
        }
        else {
            return this.parts.join(exp);
        }
    };
    /**
     * @returns array containing the differents parts of the expression
     */
    ExpressionBuilder.prototype.getParts = function () {
        return this.parts;
    };
    /**
     * Merges several `ExpressionBuilder` together.
     * @param builders Builders that should be merged.
     * @returns {Coveo.ExpressionBuilder}
     */
    ExpressionBuilder.merge = function () {
        var builders = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            builders[_i] = arguments[_i];
        }
        var merged = new ExpressionBuilder();
        _.each(builders, function (builder) {
            merged.parts = merged.parts.concat(builder.parts);
        });
        return merged;
    };
    /**
     * Merges several `ExpressionBuilder` together, using the OR operator.
     * @param builders Builders that should be merged.
     * @returns {Coveo.ExpressionBuilder}
     */
    ExpressionBuilder.mergeUsingOr = function () {
        var builders = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            builders[_i] = arguments[_i];
        }
        var nonEmpty = _.filter(builders, function (b) { return !b.isEmpty(); });
        var merged = new ExpressionBuilder();
        if (nonEmpty.length == 1) {
            merged.parts = [].concat(nonEmpty[0].parts);
        }
        else if (nonEmpty.length > 1) {
            var parts = _.map(nonEmpty, function (b) { return b.build(); });
            merged.add('(' + parts.join(') OR (') + ')');
        }
        return merged;
    };
    return ExpressionBuilder;
}());
exports.ExpressionBuilder = ExpressionBuilder;


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Template_1 = __webpack_require__(22);
var Assert_1 = __webpack_require__(5);
var UnderscoreTemplate_1 = __webpack_require__(43);
var HtmlTemplate_1 = __webpack_require__(71);
var _ = __webpack_require__(0);
/**
 * Holds a reference to all template available in the framework
 */
var TemplateCache = /** @class */ (function () {
    function TemplateCache() {
    }
    /**
     * Register a new template in the framework, which will be available to render any results.
     * @param name
     * @param template
     * @param publicTemplate
     * @param defaultTemplate
     * @param pageTemplate
     */
    TemplateCache.registerTemplate = function (name, template, publicTemplate, defaultTemplate, resultListTemplate) {
        if (publicTemplate === void 0) { publicTemplate = true; }
        if (defaultTemplate === void 0) { defaultTemplate = false; }
        if (resultListTemplate === void 0) { resultListTemplate = false; }
        Assert_1.Assert.isNonEmptyString(name);
        Assert_1.Assert.exists(template);
        if (!(template instanceof Template_1.Template)) {
            template = new Template_1.Template(template);
        }
        if (template.name == null) {
            template.name = name;
        }
        TemplateCache.templates[name] = template;
        if (publicTemplate && !_.contains(TemplateCache.templateNames, name)) {
            TemplateCache.templateNames.push(name);
        }
        if (resultListTemplate && !_.contains(TemplateCache.resultListTemplateNames, name)) {
            TemplateCache.resultListTemplateNames.push(name);
        }
        if (defaultTemplate) {
            TemplateCache.defaultTemplates[name] = template;
        }
    };
    /**
     * Remove the given template from the cache.
     * @param name
     * @param string
     */
    TemplateCache.unregisterTemplate = function (name) {
        Assert_1.Assert.isNonEmptyString(name);
        if (TemplateCache.templates[name] != undefined) {
            delete TemplateCache.templates[name];
        }
        if (TemplateCache.defaultTemplates[name] != undefined) {
            delete TemplateCache.defaultTemplates[name];
        }
    };
    /**
     * Return a template by its name/FacID.
     * @param name
     * @returns {Template}
     */
    TemplateCache.getTemplate = function (name) {
        // In some scenarios, the template we're trying to load might be somewhere in the page
        // but we could not load it "normally" on page load (eg : UI was loaded with require js)
        // Try a last ditch effort to scan the needed templates.
        if (!TemplateCache.templates[name]) {
            TemplateCache.scanAndRegisterTemplates();
        }
        Assert_1.Assert.exists(TemplateCache.templates[name]);
        return TemplateCache.templates[name];
    };
    /**
     * Get all templates currently registered in the framework.
     * @returns {{}}
     */
    TemplateCache.getTemplates = function () {
        return TemplateCache.templates;
    };
    /**
     * Get all templates name currently registered in the framework.
     * @returns {string[]}
     */
    TemplateCache.getTemplateNames = function () {
        return TemplateCache.templateNames;
    };
    /**
     * Get all page templates name currently registered in the framework.
     * @returns {string[]}
     */
    TemplateCache.getResultListTemplateNames = function () {
        return TemplateCache.resultListTemplateNames;
    };
    /**
     * Get all the "default" templates in the framework.
     * @returns {string[]}
     */
    TemplateCache.getDefaultTemplates = function () {
        return _.keys(TemplateCache.defaultTemplates);
    };
    /**
     * Get a default template by name.
     * @param name The name of the queried template
     */
    TemplateCache.getDefaultTemplate = function (name) {
        Assert_1.Assert.exists(TemplateCache.defaultTemplates[name]);
        return TemplateCache.defaultTemplates[name];
    };
    TemplateCache.scanAndRegisterTemplates = function () {
        // Here we take care not to scan for templates for which the base library
        // is not available. Case in point: someone was using the JS UI on a page
        // that was also using Handlebars, but our code was initialized before
        // the Handlebars library (loaded through AMD).
        if (UnderscoreTemplate_1.UnderscoreTemplate.isLibraryAvailable()) {
            TemplateCache.scanAndRegisterUnderscoreTemplates();
        }
        TemplateCache.scanAndRegisterHtmlTemplates();
    };
    TemplateCache.scanAndRegisterUnderscoreTemplates = function () {
        _.each(UnderscoreTemplate_1.UnderscoreTemplate.mimeTypes, function (type) {
            var scriptList = document.querySelectorAll("script[id][type='" + type + "']");
            var i = scriptList.length;
            var arr = new Array(i);
            while (i--) {
                arr[i] = scriptList.item(i);
            }
            _.each(arr, function (elem) {
                var template = new UnderscoreTemplate_1.UnderscoreTemplate(elem);
                TemplateCache.registerTemplate(elem.getAttribute('id'), template);
            });
        });
    };
    TemplateCache.scanAndRegisterHtmlTemplates = function () {
        _.each(HtmlTemplate_1.HtmlTemplate.mimeTypes, function (type) {
            var scriptList = document.querySelectorAll("script[id][type='" + type + "']");
            var i = scriptList.length;
            var arr = new Array(i);
            while (i--) {
                arr[i] = scriptList.item(i);
            }
            _.each(arr, function (elem) {
                var template = new HtmlTemplate_1.HtmlTemplate(elem);
                TemplateCache.registerTemplate(elem.getAttribute('id'), template);
            });
        });
    };
    TemplateCache.templates = {};
    TemplateCache.templateNames = [];
    TemplateCache.resultListTemplateNames = [];
    TemplateCache.defaultTemplates = {};
    return TemplateCache;
}());
exports.TemplateCache = TemplateCache;
document.addEventListener('DOMContentLoaded', function () {
    TemplateCache.scanAndRegisterTemplates();
});


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Assert_1 = __webpack_require__(5);
var TimeSpan = /** @class */ (function () {
    function TimeSpan(time, isMilliseconds) {
        if (isMilliseconds === void 0) { isMilliseconds = true; }
        if (isMilliseconds) {
            this.milliseconds = time;
        }
        else {
            this.milliseconds = time * 1000;
        }
    }
    TimeSpan.prototype.getMilliseconds = function () {
        return this.milliseconds;
    };
    TimeSpan.prototype.getSeconds = function () {
        return this.getMilliseconds() / 1000;
    };
    TimeSpan.prototype.getMinutes = function () {
        return this.getSeconds() / 60;
    };
    TimeSpan.prototype.getHours = function () {
        return this.getMinutes() / 60;
    };
    TimeSpan.prototype.getDays = function () {
        return this.getHours() / 24;
    };
    TimeSpan.prototype.getWeeks = function () {
        return this.getDays() / 7;
    };
    TimeSpan.prototype.getHHMMSS = function () {
        var hours = Math.floor(this.getHours());
        var minutes = Math.floor(this.getMinutes()) % 60;
        var seconds = Math.floor(this.getSeconds()) % 60;
        var hoursString, minutesString, secondsString;
        if (hours == 0) {
            hoursString = '';
        }
        else {
            hoursString = hours < 10 ? '0' + hours.toString() : hours.toString();
        }
        minutesString = minutes < 10 ? '0' + minutes.toString() : minutes.toString();
        secondsString = seconds < 10 ? '0' + seconds.toString() : seconds.toString();
        var hhmmss = (hoursString != '' ? hoursString + ':' : '') + minutesString + ':' + secondsString;
        return hhmmss;
    };
    TimeSpan.fromDates = function (from, to) {
        Assert_1.Assert.exists(from);
        Assert_1.Assert.exists(to);
        return new TimeSpan(to.valueOf() - from.valueOf());
    };
    return TimeSpan;
}());
exports.TimeSpan = TimeSpan;


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Dom_1 = __webpack_require__(2);
__webpack_require__(275);
var GlobalExports_1 = __webpack_require__(3);
/**
 * A checkbox widget with standard styling.
 */
var Checkbox = /** @class */ (function () {
    /**
     * Creates a new `Checkbox`.
     * @param onChange The function to call when the checkbox state changes. This function takes the current `Checkbox`
     * instance as an argument.
     * @param label The label to display next to the checkbox.
     */
    function Checkbox(onChange, label) {
        if (onChange === void 0) { onChange = function (checkbox) { }; }
        this.onChange = onChange;
        this.label = label;
        this.buildContent();
    }
    /**
     * Toggles the checkbox state.
     */
    Checkbox.prototype.toggle = function () {
        this.checkbox.checked = !this.isSelected();
        Dom_1.$$(this.checkbox).trigger('change');
    };
    /**
     * Gets the element on which the checkbox is bound.
     * @returns {HTMLElement} The checkbox element.
     */
    Checkbox.prototype.getElement = function () {
        return this.element;
    };
    /**
     * Gets the element on which the checkbox is bound.
     * @returns {HTMLElement} The checkbox element.
     */
    Checkbox.prototype.build = function () {
        return this.element;
    };
    /**
     * Gets the checkbox [`label`]{@link Checkbox.label} value.
     * @returns {string} The checkbox label value.
     */
    Checkbox.prototype.getValue = function () {
        return this.label;
    };
    /**
     * Resets the checkbox.
     */
    Checkbox.prototype.reset = function () {
        var currentlyChecked = this.isSelected();
        this.checkbox.checked = false;
        if (currentlyChecked) {
            Dom_1.$$(this.checkbox).trigger('change');
        }
    };
    /**
     * Select the checkbox
     * @param triggerChange will trigger change even if specified and not already selected
     */
    Checkbox.prototype.select = function (triggerChange) {
        if (triggerChange === void 0) { triggerChange = true; }
        var currentlyChecked = this.isSelected();
        this.checkbox.checked = true;
        if (!currentlyChecked && triggerChange) {
            Dom_1.$$(this.checkbox).trigger('change');
        }
    };
    /**
     * Indicates whether the checkbox is checked.
     * @returns {boolean} `true` if the checkbox is checked, `false` otherwise.
     */
    Checkbox.prototype.isSelected = function () {
        return this.checkbox.checked;
    };
    /**
     * Gets the element on which the checkbox [`label`]{@link Checkbox.label} is bound.
     * @returns {HTMLElement} The `label` element.
     */
    Checkbox.prototype.getLabel = function () {
        return this.element;
    };
    Checkbox.prototype.buildContent = function () {
        var _this = this;
        var label = Dom_1.$$('label', {
            className: 'coveo-checkbox-label'
        });
        this.checkbox = Dom_1.$$('input', {
            type: 'checkbox',
            className: 'coveo-checkbox',
            value: this.label
        }).el;
        var button = Dom_1.$$('button', { type: 'button', className: 'coveo-checkbox-button' });
        var labelSpan = Dom_1.$$('span', { className: 'coveo-checkbox-span-label' }, this.label);
        label.append(this.checkbox);
        label.append(button.el);
        label.append(labelSpan.el);
        button.on('click', function (e) {
            e.preventDefault();
            _this.toggle();
        });
        Dom_1.$$(this.checkbox).on('change', function () { return _this.onChange(_this); });
        this.element = label.el;
    };
    Checkbox.doExport = function () {
        GlobalExports_1.exportGlobally({
            Checkbox: Checkbox
        });
    };
    return Checkbox;
}());
exports.Checkbox = Checkbox;


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var JQueryUtils = /** @class */ (function () {
    function JQueryUtils() {
    }
    JQueryUtils.getJQuery = function () {
        if (window && window['Coveo'] && window['Coveo']['$']) {
            return window['Coveo']['$'];
        }
        return false;
    };
    JQueryUtils.isInstanceOfJQuery = function (obj) {
        var jq = this.getJQuery();
        if (jq) {
            return obj instanceof jq;
        }
        return false;
    };
    JQueryUtils.isInstanceOfJqueryEvent = function (obj) {
        var jq = this.getJQuery();
        if (jq) {
            return obj instanceof jq.Event;
        }
        return false;
    };
    return JQueryUtils;
}());
exports.JQueryUtils = JQueryUtils;


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Utils_1 = __webpack_require__(4);
var _ = __webpack_require__(0);
var Options = /** @class */ (function () {
    function Options() {
    }
    Options.prototype.merge = function (provided) {
        return _.extend({}, this, provided);
    };
    Options.prototype.mergeDeep = function (provided) {
        return _.extend({}, Utils_1.Utils.extendDeep(this, provided));
    };
    return Options;
}());
exports.Options = Options;


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Model_1 = __webpack_require__(16);
var ComponentStateModel = /** @class */ (function (_super) {
    __extends(ComponentStateModel, _super);
    function ComponentStateModel(element) {
        return _super.call(this, element, ComponentStateModel.ID, {}) || this;
    }
    ComponentStateModel.prototype.registerComponent = function (componentId, component) {
        var currentAttribute = this.attributes[componentId];
        if (currentAttribute == undefined) {
            this.attributes[componentId] = [component];
        }
        else {
            this.attributes[componentId].push(component);
        }
    };
    ComponentStateModel.ID = 'ComponentState';
    return ComponentStateModel;
}(Model_1.Model));
exports.ComponentStateModel = ComponentStateModel;


/***/ }),
/* 60 */,
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var SearchAlertsEvents = /** @class */ (function () {
    function SearchAlertsEvents() {
    }
    SearchAlertsEvents.searchAlertsCreated = 'searchAlertsCreated';
    SearchAlertsEvents.searchAlertsDeleted = 'searchAlertsDeleted';
    SearchAlertsEvents.searchAlertsFail = 'searchAlertsFail';
    SearchAlertsEvents.searchAlertsPopulateMessage = 'searchAlertsPopulateMessage';
    return SearchAlertsEvents;
}());
exports.SearchAlertsEvents = SearchAlertsEvents;


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Dom_1 = __webpack_require__(2);
var DateUtils_1 = __webpack_require__(29);
var FileTypes_1 = __webpack_require__(89);
var Utils_1 = __webpack_require__(4);
var StringUtils_1 = __webpack_require__(18);
var SVGIcons_1 = __webpack_require__(13);
var RegisteredNamedMethods_1 = __webpack_require__(26);
var Logger_1 = __webpack_require__(11);
var DomUtils = /** @class */ (function () {
    function DomUtils() {
    }
    DomUtils.getPopUpCloseButton = function (captionForClose, captionForReminder) {
        var container = document.createElement('span');
        var closeButton = document.createElement('span');
        Dom_1.$$(closeButton).addClass('coveo-close-button');
        container.appendChild(closeButton);
        var iconClose = document.createElement('span');
        Dom_1.$$(iconClose).addClass('coveo-icon');
        Dom_1.$$(iconClose).addClass('coveo-sprites-quickview-close');
        closeButton.appendChild(iconClose);
        Dom_1.$$(closeButton).text(captionForClose);
        var closeReminder = document.createElement('span');
        Dom_1.$$(closeReminder).addClass('coveo-pop-up-reminder');
        Dom_1.$$(closeReminder).text(captionForReminder);
        container.appendChild(closeReminder);
        return container.outerHTML;
    };
    DomUtils.getBasicLoadingAnimation = function () {
        var loadDotClass = 'coveo-loading-dot';
        var dom = document.createElement('div');
        dom.className = 'coveo-first-loading-animation';
        dom.innerHTML = "<div class='coveo-logo'>" + SVGIcons_1.SVGIcons.icons.coveoLogo + "</div>\n    <div class='coveo-loading-container'>\n      <div class='" + loadDotClass + "'></div>\n      <div class='" + loadDotClass + "'></div>\n      <div class='" + loadDotClass + "'></div>\n      <div class='" + loadDotClass + "'></div>\n    </div>";
        return dom;
    };
    DomUtils.highlightElement = function (initialString, valueToSearch, classToApply) {
        if (classToApply === void 0) { classToApply = 'coveo-highlight'; }
        var regex = new RegExp(Utils_1.Utils.escapeRegexCharacter(StringUtils_1.StringUtils.latinize(valueToSearch)), 'i');
        var firstChar = StringUtils_1.StringUtils.latinize(initialString).search(regex);
        if (firstChar >= 0) {
            var lastChar = firstChar + valueToSearch.length;
            return StringUtils_1.StringUtils.htmlEncode(initialString.slice(0, firstChar)) + "<span class='" + classToApply + "'>" + StringUtils_1.StringUtils.htmlEncode(initialString.slice(firstChar, lastChar)) + "</span>" + StringUtils_1.StringUtils.htmlEncode(initialString.slice(lastChar));
        }
        else {
            return initialString;
        }
    };
    DomUtils.getLoadingSpinner = function () {
        var loading = Dom_1.$$('div', {
            className: 'coveo-loading-spinner'
        });
        return loading.el;
    };
    DomUtils.getModalBoxHeader = function (title) {
        var header = Dom_1.$$('div');
        header.el.innerHTML = "<div class='coveo-modalbox-right-header'>\n        <span class='coveo-modalbox-close-button'>\n          <span class='coveo-icon coveo-sprites-common-clear'></span>\n        </span>\n      </div>\n      <div class='coveo-modalbox-left-header'>\n        <span class='coveo-modalbox-pop-up-reminder'> " + (title || '') + "</span>\n      </div>";
        return header;
    };
    DomUtils.getQuickviewHeader = function (result, options, bindings) {
        var _this = this;
        var date = '';
        if (options.showDate) {
            var dateValueFromResult = Utils_1.Utils.getFieldValue(result, 'date');
            if (dateValueFromResult) {
                date = DateUtils_1.DateUtils.dateTimeToString(new Date(dateValueFromResult));
            }
        }
        var fileType = FileTypes_1.FileTypes.get(result);
        var header = Dom_1.$$('div');
        header.el.innerHTML = "<div class='coveo-quickview-right-header'>\n        <span class='coveo-quickview-time'>" + date + "</span>\n        <span class='coveo-quickview-close-button'>\n          <span class='coveo-icon coveo-sprites-common-clear'></span>\n        </span>\n      </div>\n      <div class='coveo-quickview-left-header'>\n        <span class='coveo-quickview-icon coveo-small " + fileType.icon + "'></span>\n      </div>";
        var clickableLinkElement = Dom_1.$$('a', { className: 'coveo-quickview-pop-up-reminder' });
        var toLoad = Coveo['Salesforce'] ? 'SalesforceResultLink' : 'ResultLink';
        var resultForResultLink = __assign({}, result);
        if (options.title) {
            resultForResultLink.title = options.title;
        }
        RegisteredNamedMethods_1.load(toLoad)
            .then(function () {
            new Coveo[toLoad](clickableLinkElement.el, undefined, bindings, resultForResultLink);
        })
            .catch(function (err) {
            var logger = new Logger_1.Logger(_this);
            logger.error("Failed to load module " + toLoad + " : " + err);
            logger.info("Fallback on displaying a non clickable header");
            clickableLinkElement.text(options.title);
        })
            .finally(function () {
            Dom_1.$$(header.find('.coveo-quickview-left-header')).append(clickableLinkElement.el);
        });
        return header;
    };
    return DomUtils;
}());
exports.DomUtils = DomUtils;


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * This static class is there to contains the different string definition for all the events related to the {@link AdvancedSearch} component.
 */
var AdvancedSearchEvents = /** @class */ (function () {
    function AdvancedSearchEvents() {
    }
    /**
     * Triggered when the {@link AdvancedSearch} component is being built.
     *
     * Allows external code to add new sections in the **Advanced Search** panel.
     *
     * All bound handlers receive {@link IBuildingAdvancedSearchEventArgs} as an argument
     *
     * @type {string}
     */
    AdvancedSearchEvents.buildingAdvancedSearch = 'buildingAdvancedSearch';
    AdvancedSearchEvents.executeAdvancedSearch = 'executeAdvancedSearch';
    return AdvancedSearchEvents;
}());
exports.AdvancedSearchEvents = AdvancedSearchEvents;


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Logger_1 = __webpack_require__(11);
var Assert_1 = __webpack_require__(5);
var TimeSpanUtils_1 = __webpack_require__(55);
var DeviceUtils_1 = __webpack_require__(21);
var Utils_1 = __webpack_require__(4);
var JQueryutils_1 = __webpack_require__(57);
var _ = __webpack_require__(0);
var UrlUtils_1 = __webpack_require__(42);
// In ie8, XMLHttpRequest has no status property, so let's use this enum instead
var XMLHttpRequestStatus;
(function (XMLHttpRequestStatus) {
    XMLHttpRequestStatus[XMLHttpRequestStatus["OPENED"] = XMLHttpRequest.OPENED || 1] = "OPENED";
    XMLHttpRequestStatus[XMLHttpRequestStatus["HEADERS_RECEIVED"] = XMLHttpRequest.HEADERS_RECEIVED || 2] = "HEADERS_RECEIVED";
    XMLHttpRequestStatus[XMLHttpRequestStatus["DONE"] = XMLHttpRequest.DONE || 4] = "DONE";
})(XMLHttpRequestStatus || (XMLHttpRequestStatus = {}));
/**
 * This class is in charge of calling an endpoint (eg: a {@link SearchEndpoint}).
 *
 * This means it's only uses to execute an XMLHttpRequest (for example), massage the response and check if there are errors.
 *
 * Will execute the call and return a Promise.
 *
 * Call using one of those options :
 *
 * * XMLHttpRequest for recent browser that support CORS, or if the endpoint is on the same origin.
 * * XDomainRequest for older IE browser that do not support CORS.
 * * Jsonp if all else fails, or is explicitly enabled.
 */
var EndpointCaller = /** @class */ (function () {
    /**
     * Create a new EndpointCaller.
     * @param options Specify the authentication that will be used for this endpoint. Not needed if the endpoint is public and has no authentication
     */
    function EndpointCaller(options) {
        if (options === void 0) { options = {}; }
        this.options = options;
        /**
         * Set this property to true to enable Jsonp call to the endpoint.<br/>
         * Be aware that jsonp is "easier" to setup endpoint wise, but has a lot of drawback and limitation for the client code.<br/>
         * Default to false.
         * @type {boolean}
         */
        this.useJsonp = false;
        this.logger = new Logger_1.Logger(this);
    }
    /**
     * Generic call to the endpoint using the provided {@link IEndpointCallParameters}.<br/>
     * Internally, will decide which method to use to call the endpoint :<br/>
     * -- XMLHttpRequest for recent browser that support CORS, or if the endpoint is on the same origin.<br/>
     * -- XDomainRequest for older IE browser that do not support CORS.<br/>
     * -- Jsonp if all else fails, or is explicitly enabled.
     * @param params The parameters to use for the call
     * @returns {any} A promise of the given type
     */
    EndpointCaller.prototype.call = function (params) {
        var requestInfo = {
            url: params.url,
            queryString: params.errorsAsSuccess ? params.queryString.concat(['errorsAsSuccess=1']) : params.queryString,
            requestData: params.requestData,
            requestDataType: params.requestDataType || 'application/x-www-form-urlencoded; charset="UTF-8"',
            begun: new Date(),
            method: params.method
        };
        requestInfo.headers = this.buildRequestHeaders(requestInfo);
        if (_.isFunction(this.options.requestModifier)) {
            requestInfo = this.options.requestModifier(requestInfo);
        }
        this.logger.trace('Performing REST request', requestInfo);
        var urlObject = this.parseURL(requestInfo.url);
        // In IE8, hostname and port return "" when we are on the same domain.
        var isLocalHost = window.location.hostname === urlObject.hostname || urlObject.hostname === '';
        var currentPort = window.location.port != '' ? window.location.port : window.location.protocol == 'https:' ? '443' : '80';
        var isSamePort = currentPort == urlObject.port;
        var isCrossOrigin = !(isLocalHost && isSamePort);
        if (!this.useJsonp) {
            if (this.isCORSSupported() || !isCrossOrigin) {
                return this.callUsingXMLHttpRequest(requestInfo, params.responseType);
            }
            else if (this.isXDomainRequestSupported()) {
                return this.callUsingXDomainRequest(requestInfo);
            }
            else {
                return this.callUsingAjaxJsonP(requestInfo);
            }
        }
        else {
            return this.callUsingAjaxJsonP(requestInfo);
        }
    };
    /**
     * Call the endpoint using XMLHttpRequest. Used internally by {@link EndpointCaller.call}.<br/>
     * Will try internally to handle error if it can.<br/>
     * Promise will otherwise fail with the error type.
     * @param requestInfo The info about the request
     * @param responseType The responseType. Default to text. https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/responseType
     * @returns {Promise<T>|Promise}
     */
    EndpointCaller.prototype.callUsingXMLHttpRequest = function (requestInfo, responseType) {
        var _this = this;
        if (responseType === void 0) { responseType = 'text'; }
        return new Promise(function (resolve, reject) {
            var xmlHttpRequest = _this.getXmlHttpRequest();
            // Beware, most stuff must be set on the event that says the request is OPENED.
            // Otherwise it'll bork on some browsers. Gotta love standards.
            // This sent variable allowed to remove the second call of onreadystatechange with the state OPENED in IE11
            var sent = false;
            xmlHttpRequest.onreadystatechange = function (ev) {
                if (xmlHttpRequest.readyState == XMLHttpRequestStatus.OPENED && !sent) {
                    sent = true;
                    xmlHttpRequest.withCredentials = true;
                    _.each(requestInfo.headers, function (headerValue, headerKey) {
                        xmlHttpRequest.setRequestHeader(headerKey, headerValue);
                    });
                    if (requestInfo.method == 'GET') {
                        xmlHttpRequest.send();
                    }
                    else if (requestInfo.requestDataType.indexOf('application/json') === 0) {
                        xmlHttpRequest.send(JSON.stringify(requestInfo.requestData));
                    }
                    else {
                        xmlHttpRequest.send(_this.convertJsonToFormBody(requestInfo.requestData));
                    }
                    // The "responseType" varies if the request is a success or not.
                    // Therefore we postpone setting "responseType" until we know if the
                    // request is a success or not. Doing so, we avoid this potential
                    // error in Chrome:
                    //
                    //   Uncaught InvalidStateError: Failed to read the 'responseText'
                    //   property from 'XMLHttpRequest': The value is only accessible if
                    //   the object's 'responseType' is '' or 'text' (was 'document').
                    //
                }
                else if (xmlHttpRequest.readyState == XMLHttpRequestStatus.HEADERS_RECEIVED) {
                    var status_1 = xmlHttpRequest.status;
                    if (_this.isSuccessHttpStatus(status_1)) {
                        xmlHttpRequest.responseType = responseType;
                    }
                    else {
                        xmlHttpRequest.responseType = 'text';
                    }
                }
                else if (xmlHttpRequest.readyState == XMLHttpRequestStatus.DONE) {
                    var status_2 = xmlHttpRequest.status;
                    var data = void 0;
                    switch (responseType) {
                        case 'json':
                            data = xmlHttpRequest.response;
                            // Work around a bug in IE11 where responseType jsonis not supported : the response comes back as a plain string
                            // Force the json parse manually
                            if (responseType == 'json' && DeviceUtils_1.DeviceUtils.getDeviceName() == 'IE') {
                                try {
                                    data = JSON.parse(data);
                                }
                                catch (e) {
                                    // Do nothing, it probably means the data was JSON already
                                }
                            }
                            break;
                        case 'text':
                            data = _this.tryParseResponseText(xmlHttpRequest.responseText, xmlHttpRequest.getResponseHeader('Content-Type'));
                            break;
                        default:
                            data = xmlHttpRequest.response;
                            break;
                    }
                    if (data == undefined) {
                        data = _this.tryParseResponseText(xmlHttpRequest.responseText, xmlHttpRequest.getResponseHeader('Content-Type'));
                    }
                    if (_this.isSuccessHttpStatus(status_2)) {
                        _this.handleSuccessfulResponseThatMightBeAnError(requestInfo, data, resolve, reject);
                    }
                    else {
                        _this.handleError(requestInfo, xmlHttpRequest.status, data, reject);
                    }
                }
            };
            var queryString = requestInfo.queryString;
            if (requestInfo.method == 'GET') {
                queryString = queryString.concat(_this.convertJsonToQueryString(requestInfo.requestData));
            }
            xmlHttpRequest.open(requestInfo.method, _this.combineUrlAndQueryString(requestInfo.url, queryString));
        });
    };
    /**
     * Call the endpoint using XDomainRequest https://msdn.microsoft.com/en-us/library/cc288060(v=vs.85).aspx<br/>
     * Used for IE8/9
     * @param requestInfo The info about the request
     * @returns {Promise<T>|Promise}
     */
    EndpointCaller.prototype.callUsingXDomainRequest = function (requestInfo) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var queryString = requestInfo.queryString.concat([]);
            // XDomainRequest don't support including stuff in the header, so we must
            // put the access token in the query string if we have one.
            if (_this.options.accessToken) {
                queryString.push('access_token=' + Utils_1.Utils.safeEncodeURIComponent(_this.options.accessToken));
            }
            var xDomainRequest = new XDomainRequest();
            if (requestInfo.method == 'GET') {
                queryString = queryString.concat(_this.convertJsonToQueryString(requestInfo.requestData));
            }
            xDomainRequest.open(requestInfo.method, _this.combineUrlAndQueryString(requestInfo.url, queryString));
            xDomainRequest.onload = function () {
                var data = _this.tryParseResponseText(xDomainRequest.responseText, xDomainRequest.contentType);
                _this.handleSuccessfulResponseThatMightBeAnError(requestInfo, data, resolve, reject);
            };
            xDomainRequest.onerror = function () {
                var data = _this.tryParseResponseText(xDomainRequest.responseText, xDomainRequest.contentType);
                _this.handleError(requestInfo, 0, data, reject);
            };
            // We must set those functions otherwise it will sometime fail in IE
            xDomainRequest.ontimeout = function () { return _this.logger.error('Request timeout', xDomainRequest, requestInfo.requestData); };
            xDomainRequest.onprogress = function () { return _this.logger.trace('Request progress', xDomainRequest, requestInfo.requestData); };
            // We must open the request in a separate thread, for obscure reasons
            _.defer(function () {
                if (requestInfo.method == 'GET') {
                    xDomainRequest.send();
                }
                else {
                    xDomainRequest.send(_this.convertJsonToFormBody(requestInfo.requestData));
                }
            });
        });
    };
    /**
     * Call the endpoint using Jsonp https://en.wikipedia.org/wiki/JSONP<br/>
     * Should be used for dev only, or for very special setup as using jsonp has a lot of drawbacks.
     * @param requestInfo The info about the request
     * @returns {Promise<T>|Promise}
     */
    EndpointCaller.prototype.callUsingAjaxJsonP = function (requestInfo) {
        var _this = this;
        var jQuery = JQueryutils_1.JQueryUtils.getJQuery();
        Assert_1.Assert.check(jQuery, 'Using jsonp without having included jQuery is not supported.');
        return new Promise(function (resolve, reject) {
            var queryString = requestInfo.queryString.concat(_this.convertJsonToQueryString(requestInfo.requestData));
            // JSONP don't support including stuff in the header, so we must
            // put the access token in the query string if we have one.
            if (_this.options.accessToken) {
                queryString.push('access_token=' + Utils_1.Utils.safeEncodeURIComponent(_this.options.accessToken));
            }
            queryString.push('callback=?');
            jQuery.ajax({
                url: _this.combineUrlAndQueryString(requestInfo.url, queryString),
                dataType: 'jsonp',
                success: function (data) { return _this.handleSuccessfulResponseThatMightBeAnError(requestInfo, data, resolve, reject); },
                timeout: EndpointCaller.JSONP_ERROR_TIMEOUT,
                error: function () { return _this.handleError(requestInfo, 0, undefined, reject); }
            });
        });
    };
    EndpointCaller.prototype.parseURL = function (url) {
        var urlObject = document.createElement('a');
        urlObject.href = url;
        return urlObject;
    };
    EndpointCaller.prototype.getXmlHttpRequest = function () {
        var newXmlHttpRequest = this.options.xmlHttpRequest || XMLHttpRequest;
        return new newXmlHttpRequest();
    };
    EndpointCaller.prototype.convertJsonToQueryString = function (json) {
        Assert_1.Assert.exists(json);
        var result = [];
        _.each(json, function (value, key) {
            if (value != null) {
                if (_.isObject(value)) {
                    result.push(key + '=' + Utils_1.Utils.safeEncodeURIComponent(JSON.stringify(value)));
                }
                else {
                    result.push(key + '=' + Utils_1.Utils.safeEncodeURIComponent(value.toString()));
                }
            }
        });
        return result;
    };
    EndpointCaller.prototype.convertJsonToFormBody = function (json) {
        return this.convertJsonToQueryString(json).join('&');
    };
    EndpointCaller.prototype.handleSuccessfulResponseThatMightBeAnError = function (requestInfo, data, success, error) {
        if (this.isErrorResponseBody(data)) {
            this.handleError(requestInfo, data.statusCode, data, error);
        }
        else {
            this.handleSuccess(requestInfo, data, success);
        }
    };
    EndpointCaller.prototype.handleSuccess = function (requestInfo, data, success) {
        var querySuccess = {
            duration: TimeSpanUtils_1.TimeSpan.fromDates(requestInfo.begun, new Date()).getMilliseconds(),
            data: data
        };
        this.logger.trace('REST request successful', data, requestInfo);
        success(querySuccess);
    };
    EndpointCaller.prototype.handleError = function (requestInfo, status, data, error) {
        var queryError = {
            statusCode: status,
            data: data
        };
        this.logger.error('REST request failed', status, data, requestInfo);
        error(queryError);
    };
    EndpointCaller.prototype.combineUrlAndQueryString = function (url, queryString) {
        return UrlUtils_1.UrlUtils.normalizeAsString({
            paths: [url],
            queryAsString: queryString
        });
    };
    EndpointCaller.prototype.isXDomainRequestSupported = function () {
        return 'XDomainRequest' in window;
    };
    EndpointCaller.prototype.isCORSSupported = function () {
        return 'withCredentials' in this.getXmlHttpRequest();
    };
    EndpointCaller.prototype.isSuccessHttpStatus = function (status) {
        return (status >= 200 && status < 300) || status === 304;
    };
    EndpointCaller.prototype.tryParseResponseText = function (json, contentType) {
        if (contentType != null && contentType.indexOf('application/json') != -1) {
            if (Utils_1.Utils.isNonEmptyString(json)) {
                try {
                    return JSON.parse(json);
                }
                catch (ex) {
                    return undefined;
                }
            }
            else {
                return undefined;
            }
        }
        else {
            return json;
        }
    };
    EndpointCaller.prototype.isErrorResponseBody = function (data) {
        if (data && data.statusCode) {
            return !this.isSuccessHttpStatus(data.statusCode);
        }
        else {
            return false;
        }
    };
    EndpointCaller.prototype.buildRequestHeaders = function (requestInfo) {
        var headers = {};
        if (this.options.accessToken) {
            headers['Authorization'] = "Bearer " + this.options.accessToken;
        }
        else if (this.options.username && this.options.password) {
            headers['Authorization'] = "Basic " + btoa(this.options.username + ':' + this.options.password);
        }
        if (requestInfo.method == 'GET') {
            return headers;
        }
        if (requestInfo.requestDataType.indexOf('application/json') === 0) {
            headers['Content-Type'] = 'application/json; charset="UTF-8"';
        }
        else {
            headers['Content-Type'] = 'application/x-www-form-urlencoded; charset="UTF-8"';
        }
        return headers;
    };
    EndpointCaller.JSONP_ERROR_TIMEOUT = 10000;
    return EndpointCaller;
}());
exports.EndpointCaller = EndpointCaller;


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * The `AnalyticsEvents` static class contains the string definitions of all events that strongly relate to usage
 * analytics.
 *
 * See [Events](https://developers.coveo.com/x/bYGfAQ).
 */
var AnalyticsEvents = /** @class */ (function () {
    function AnalyticsEvents() {
    }
    AnalyticsEvents.searchEvent = 'analyticsSearchEvent';
    /**
     * Triggered when a `click` analytics event is logged (e.g., when the end user clicks a
     * [`ResultLink`]{@link ResultLink} or [`Quickview`]{@link Quickview} to open a query result item).
     *
     * All `documentViewEvent` event handlers receive an
     * [`AnalyticsDocumentViewEventArgs`]{@link IAnalyticsDocumentViewEventArgs} object as an argument.
     *
     * @type {string} The string value is `documentViewEvent`.
     */
    AnalyticsEvents.documentViewEvent = 'analyticsDocumentViewEvent';
    AnalyticsEvents.customEvent = 'analyticsCustomEvent';
    /**
     * Triggered whenever an analytics event is about to be logged.
     *
     * This event allows external code to modify the analytics data before it is sent to the Coveo Usage Analytics REST
     * service.
     *
     * All `changeAnalyticsCustomData` event handlers receive a
     * [`ChangeAnalyticsCustomDataEventArgs`]{@link IChangeAnalyticsCustomDataEventArgs} object as an argument.
     *
     * @type {string} The string value is `changeAnalyticsCustomData`.
     */
    AnalyticsEvents.changeAnalyticsCustomData = 'changeAnalyticsCustomData';
    return AnalyticsEvents;
}());
exports.AnalyticsEvents = AnalyticsEvents;


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// Code originally taken from : https://developers.livechatinc.com/blog/setting-cookies-to-subdomains-in-javascript/
var Cookie = /** @class */ (function () {
    function Cookie() {
    }
    Cookie.set = function (name, value, expiration) {
        var domain, domainParts, date, expires, host;
        if (expiration) {
            date = new Date();
            date.setTime(date.getTime() + expiration);
            expires = '; expires=' + date.toGMTString();
        }
        else {
            expires = '';
        }
        host = location.hostname;
        if (host.split('.').length === 1) {
            // no '.' in a domain - it's localhost or something similar
            document.cookie = this.prefix + name + '=' + value + expires + '; path=/';
        }
        else {
            // Remember the cookie on all subdomains.
            //
            // Start with trying to set cookie to the top domain.
            // (example: if user is on foo.com, try to set
            //  cookie to domain '.com')
            //
            // If the cookie will not be set, it means '.com'
            // is a top level domain and we need to
            // set the cookie to '.foo.com'
            domainParts = host.split('.');
            domainParts.shift();
            domain = '.' + domainParts.join('.');
            document.cookie = this.prefix + name + '=' + value + expires + '; path=/; domain=' + domain;
            // check if cookie was successfuly set to the given domain
            // (otherwise it was a Top-Level Domain)
            if (Cookie.get(name) == null || Cookie.get(name) != value) {
                // append '.' to current domain
                domain = '.' + host;
                document.cookie = this.prefix + name + '=' + value + expires + '; path=/; domain=' + domain;
            }
        }
    };
    Cookie.get = function (name) {
        var nameEQ = this.prefix + name + '=';
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1, c.length);
            }
            if (c.indexOf(nameEQ) == 0) {
                return c.substring(nameEQ.length, c.length);
            }
        }
        return null;
    };
    Cookie.erase = function (name) {
        Cookie.set(name, '', -1);
    };
    Cookie.prefix = 'coveo_';
    return Cookie;
}());
exports.Cookie = Cookie;


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var StandaloneSearchInterfaceEvents = /** @class */ (function () {
    function StandaloneSearchInterfaceEvents() {
    }
    StandaloneSearchInterfaceEvents.beforeRedirect = 'beforeRedirect';
    return StandaloneSearchInterfaceEvents;
}());
exports.StandaloneSearchInterfaceEvents = StandaloneSearchInterfaceEvents;


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var PreferencesPanelEvents = /** @class */ (function () {
    function PreferencesPanelEvents() {
    }
    PreferencesPanelEvents.savePreferences = 'savePreferences';
    PreferencesPanelEvents.exitPreferencesWithoutSave = 'exitPreferencesWithoutSave';
    return PreferencesPanelEvents;
}());
exports.PreferencesPanelEvents = PreferencesPanelEvents;


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.version = {
    lib: '2.4094.8',
    product: '2.4094.8',
    supportedApiVersion: 2
};


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var DebugEvents = /** @class */ (function () {
    function DebugEvents() {
    }
    DebugEvents.showDebugPanel = 'showDebugPanel';
    return DebugEvents;
}());
exports.DebugEvents = DebugEvents;


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Template_1 = __webpack_require__(22);
var Assert_1 = __webpack_require__(5);
var TemplateFromAScriptTag_1 = __webpack_require__(117);
var HtmlTemplate = /** @class */ (function (_super) {
    __extends(HtmlTemplate, _super);
    function HtmlTemplate(element) {
        var _this = _super.call(this, function () { return element.innerHTML; }) || this;
        _this.element = element;
        _this.templateFromAScriptTag = new TemplateFromAScriptTag_1.TemplateFromAScriptTag(_this, _this.element);
        return _this;
    }
    HtmlTemplate.prototype.toHtmlElement = function () {
        var script = this.templateFromAScriptTag.toHtmlElement();
        // We don't set the type attribute for 2 reasons:
        // 1) LockerService doesn't like when we set it.
        // 2) The HTML Template is the default one.
        return script;
    };
    HtmlTemplate.prototype.getType = function () {
        return 'HtmlTemplate';
    };
    HtmlTemplate.create = function (element) {
        Assert_1.Assert.exists(element);
        return new HtmlTemplate(element);
    };
    HtmlTemplate.fromString = function (template, properties) {
        var script = TemplateFromAScriptTag_1.TemplateFromAScriptTag.fromString(template, properties);
        // We don't set the type attribute for 2 reasons:
        // 1) LockerService doesn't like when we set it.
        // 2) The HTML Template is the default one.
        return new HtmlTemplate(script);
    };
    HtmlTemplate.prototype.getTemplateInfo = function () {
        return this.element;
    };
    HtmlTemplate.mimeTypes = ['text/html', 'text/HTML'];
    return HtmlTemplate;
}(Template_1.Template));
exports.HtmlTemplate = HtmlTemplate;


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var NoopAnalyticsClient = /** @class */ (function () {
    function NoopAnalyticsClient() {
        this.isContextual = false;
        this.endpoint = null;
    }
    NoopAnalyticsClient.prototype.isActivated = function () {
        return false;
    };
    NoopAnalyticsClient.prototype.getCurrentEventCause = function () {
        return this.currentEventCause;
    };
    NoopAnalyticsClient.prototype.getCurrentEventMeta = function () {
        return this.currentEventMeta;
    };
    NoopAnalyticsClient.prototype.logSearchEvent = function (actionCause, meta) {
        this.setNoopCauseAndMeta(actionCause.name, meta);
    };
    NoopAnalyticsClient.prototype.logSearchAsYouType = function (actionCause, meta) {
        this.setNoopCauseAndMeta(actionCause.name, meta);
    };
    NoopAnalyticsClient.prototype.logClickEvent = function (actionCause, meta, result, element) {
        this.setNoopCauseAndMeta(actionCause.name, meta);
        return Promise.resolve(null);
    };
    NoopAnalyticsClient.prototype.logCustomEvent = function (actionCause, meta, element) {
        this.setNoopCauseAndMeta(actionCause.name, meta);
        return Promise.resolve(null);
    };
    NoopAnalyticsClient.prototype.getTopQueries = function (params) {
        return new Promise(function (resolve, reject) {
            resolve([]);
        });
    };
    NoopAnalyticsClient.prototype.getCurrentVisitIdPromise = function () {
        return new Promise(function (resolve, reject) {
            resolve(null);
        });
    };
    NoopAnalyticsClient.prototype.getCurrentVisitId = function () {
        return null;
    };
    NoopAnalyticsClient.prototype.sendAllPendingEvents = function () { };
    NoopAnalyticsClient.prototype.cancelAllPendingEvents = function () { };
    NoopAnalyticsClient.prototype.warnAboutSearchEvent = function () { };
    NoopAnalyticsClient.prototype.getPendingSearchEvent = function () {
        return null;
    };
    NoopAnalyticsClient.prototype.setOriginContext = function (originContext) { };
    NoopAnalyticsClient.prototype.setNoopCauseAndMeta = function (cause, meta) {
        this.currentEventCause = cause;
        this.currentEventMeta = meta;
    };
    return NoopAnalyticsClient;
}());
exports.NoopAnalyticsClient = NoopAnalyticsClient;


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var QueryEvents_1 = __webpack_require__(10);
var Assert_1 = __webpack_require__(5);
var Dom_1 = __webpack_require__(2);
var SearchInterface_1 = __webpack_require__(17);
var Component_1 = __webpack_require__(6);
var QueryController_1 = __webpack_require__(33);
var Defer_1 = __webpack_require__(28);
var APIAnalyticsBuilder_1 = __webpack_require__(121);
var AnalyticsEvents_1 = __webpack_require__(65);
var AnalyticsActionListMeta_1 = __webpack_require__(9);
var QueryStateModel_1 = __webpack_require__(12);
var _ = __webpack_require__(0);
var PendingSearchEvent = /** @class */ (function () {
    function PendingSearchEvent(root, endpoint, templateSearchEvent, sendToCloud) {
        var _this = this;
        this.root = root;
        this.endpoint = endpoint;
        this.templateSearchEvent = templateSearchEvent;
        this.sendToCloud = sendToCloud;
        this.searchPromises = [];
        this.results = [];
        this.cancelled = false;
        this.finished = false;
        this.searchEvents = [];
        Assert_1.Assert.exists(root);
        Assert_1.Assert.exists(endpoint);
        Assert_1.Assert.exists(templateSearchEvent);
        this.handler = function (evt, arg) {
            _this.handleDuringQuery(evt, arg);
        };
        Dom_1.$$(root).on(QueryEvents_1.QueryEvents.duringQuery, this.handler);
    }
    PendingSearchEvent.prototype.getEventCause = function () {
        return this.templateSearchEvent.actionCause;
    };
    PendingSearchEvent.prototype.getEventMeta = function () {
        return this.templateSearchEvent.customData;
    };
    PendingSearchEvent.prototype.cancel = function () {
        this.stopRecording();
        this.cancelled = true;
    };
    PendingSearchEvent.prototype.handleDuringQuery = function (evt, args, queryBoxContentToUse) {
        var _this = this;
        Assert_1.Assert.check(!this.finished);
        Assert_1.Assert.check(!this.cancelled);
        // When synchronizing multiple search interfaces under a single search event
        // (think Salesforce boxes), we need to collect all search events and send them
        // in one single batch. So we gather all events until we idle out and then we
        // monitor those before sending the data.
        this.searchPromises.push(args.promise);
        var eventTarget = evt.target;
        var searchInterface = Component_1.Component.get(eventTarget, SearchInterface_1.SearchInterface);
        Assert_1.Assert.exists(searchInterface);
        // We try to grab ahead of time the content of the search box before the query returns
        // This is because it's possible that the content of the search box gets modified when the query returns (for example : DidYouMean)
        if (!queryBoxContentToUse) {
            queryBoxContentToUse = searchInterface.queryStateModel.get(QueryStateModel_1.QueryStateModel.attributesEnum.q);
        }
        var queryController = Component_1.Component.get(eventTarget, QueryController_1.QueryController);
        Assert_1.Assert.exists(queryController);
        args.promise
            .then(function (queryResults) {
            Assert_1.Assert.exists(queryResults);
            Assert_1.Assert.check(!_this.finished);
            if (queryResults._reusedSearchUid !== true ||
                _this.templateSearchEvent.actionCause == AnalyticsActionListMeta_1.analyticsActionCauseList.recommendation.name) {
                var searchEvent = _.extend({}, _this.templateSearchEvent);
                _this.fillSearchEvent(searchEvent, searchInterface, args.query, queryResults, queryBoxContentToUse);
                _this.searchEvents.push(searchEvent);
                _this.results.push(queryResults);
                return queryResults;
            }
        })
            .finally(function () {
            var index = _.indexOf(_this.searchPromises, args.promise);
            _this.searchPromises.splice(index, 1);
            if (_this.searchPromises.length == 0) {
                _this.flush();
            }
        });
    };
    PendingSearchEvent.prototype.stopRecording = function () {
        if (this.handler) {
            Dom_1.$$(this.root).off(QueryEvents_1.QueryEvents.duringQuery, this.handler);
            Dom_1.$$(this.root).off(QueryEvents_1.QueryEvents.duringFetchMoreQuery, this.handler);
            this.handler = null;
        }
    };
    PendingSearchEvent.prototype.flush = function () {
        var _this = this;
        if (!this.cancelled) {
            this.stopRecording();
            this.finished = true;
            Assert_1.Assert.check(this.searchEvents.length == this.results.length);
            Defer_1.Defer.defer(function () {
                if (_this.sendToCloud) {
                    _this.endpoint.sendSearchEvents(_this.searchEvents);
                }
                var apiSearchEvents = _.map(_this.searchEvents, function (searchEvent) {
                    return APIAnalyticsBuilder_1.APIAnalyticsBuilder.convertSearchEventToAPI(searchEvent);
                });
                Dom_1.$$(_this.root).trigger(AnalyticsEvents_1.AnalyticsEvents.searchEvent, {
                    searchEvents: apiSearchEvents
                });
            });
        }
    };
    PendingSearchEvent.prototype.fillSearchEvent = function (searchEvent, searchInterface, query, queryResults, queryBoxContentToUse) {
        Assert_1.Assert.exists(searchEvent);
        Assert_1.Assert.exists(searchInterface);
        Assert_1.Assert.exists(query);
        Assert_1.Assert.exists(queryResults);
        var currentQuery = searchInterface.queryStateModel.get(QueryStateModel_1.QueryStateModel.attributesEnum.q);
        searchEvent.queryPipeline = queryResults.pipeline;
        searchEvent.splitTestRunName = searchEvent.splitTestRunName || queryResults.splitTestRun;
        searchEvent.splitTestRunVersion =
            searchEvent.splitTestRunVersion || (queryResults.splitTestRun != undefined ? queryResults.pipeline : undefined);
        searchEvent.originLevel2 = searchEvent.originLevel2 || searchInterface.queryStateModel.get('t') || 'default';
        searchEvent.queryText = queryBoxContentToUse || currentQuery || query.q || ''; // do not log the query sent to the server if possible; it may contain added syntax depending on options
        searchEvent.advancedQuery = query.aq || '';
        searchEvent.didYouMean = query.enableDidYouMean;
        searchEvent.numberOfResults = queryResults.totalCount;
        searchEvent.responseTime = queryResults.duration;
        searchEvent.pageNumber = query.firstResult / query.numberOfResults;
        searchEvent.resultsPerPage = query.numberOfResults;
        searchEvent.searchQueryUid = queryResults.searchUid;
        searchEvent.queryPipeline = queryResults.pipeline;
        // The context_${key} format is important for the Analytics backend
        // This is what they use to recognize a custom data that will be used internally by other coveo's service.
        // In this case, Coveo Machine Learning will be the consumer of this information.
        if (query.context != undefined) {
            _.each(query.context, function (value, key) {
                searchEvent.customData["context_" + key] = value;
            });
        }
        // The refinedKeywords field is important for Coveo Machine Learning in order to learn properly on query
        // made based on the long query.
        if (queryResults.refinedKeywords != undefined && queryResults.refinedKeywords.length != 0) {
            searchEvent.customData['refinedKeywords'] = queryResults.refinedKeywords;
        }
    };
    return PendingSearchEvent;
}());
exports.PendingSearchEvent = PendingSearchEvent;


/***/ }),
/* 74 */,
/* 75 */,
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Options_1 = __webpack_require__(58);
var HighlightUtils_1 = __webpack_require__(49);
var StringUtils_1 = __webpack_require__(18);
var Utils_1 = __webpack_require__(4);
var Dom_1 = __webpack_require__(2);
var _ = __webpack_require__(0);
// \u2011: http://graphemica.com/%E2%80%91
// Used to split terms and phrases. Should match characters that can separate words.
var wordBoundary = "[\\.\\-\\u2011\\s~=,.\\|\\/:'`’;_()!?&+]";
var regexStart = '(' + wordBoundary + '|^)(';
var DefaultStreamHighlightOptions = /** @class */ (function (_super) {
    __extends(DefaultStreamHighlightOptions, _super);
    function DefaultStreamHighlightOptions(cssClass, shorten, regexFlags) {
        if (cssClass === void 0) { cssClass = 'coveo-highlight'; }
        if (shorten === void 0) { shorten = 0; }
        if (regexFlags === void 0) { regexFlags = 'gi'; }
        var _this = _super.call(this) || this;
        _this.cssClass = cssClass;
        _this.shorten = shorten;
        _this.regexFlags = regexFlags;
        return _this;
    }
    return DefaultStreamHighlightOptions;
}(Options_1.Options));
exports.DefaultStreamHighlightOptions = DefaultStreamHighlightOptions;
var StreamHighlightUtils = /** @class */ (function () {
    function StreamHighlightUtils() {
    }
    StreamHighlightUtils.highlightStreamHTML = function (stream, termsToHighlight, phrasesToHighlight, options) {
        var opts = new DefaultStreamHighlightOptions().merge(options);
        var container = createStreamHTMLContainer(stream);
        var allElements = Dom_1.$$(container).findAll('*');
        if (allElements.length > 0) {
            _.each(allElements, function (elem, i) {
                var text = Dom_1.$$(elem).text();
                elem.innerHTML = HighlightUtils_1.HighlightUtils.highlightString(text, getRestHighlightsForAllTerms(text, termsToHighlight, phrasesToHighlight, opts), [], opts.cssClass);
            });
        }
        else {
            return StreamHighlightUtils.highlightStreamText(stream, termsToHighlight, phrasesToHighlight, options);
        }
        return container.innerHTML;
    };
    StreamHighlightUtils.highlightStreamText = function (stream, termsToHighlight, phrasesToHighlight, options) {
        var opts = new DefaultStreamHighlightOptions().merge(options);
        return HighlightUtils_1.HighlightUtils.highlightString(stream, getRestHighlightsForAllTerms(stream, termsToHighlight, phrasesToHighlight, opts), [], opts.cssClass);
    };
    return StreamHighlightUtils;
}());
exports.StreamHighlightUtils = StreamHighlightUtils;
function getRestHighlightsForAllTerms(toHighlight, termsToHighlight, phrasesToHighlight, opts) {
    var indexes = [];
    var sortedTerms = _.keys(termsToHighlight).sort(termsSorting);
    _.each(sortedTerms, function (term) {
        var termsToIterate = _.compact([term].concat(termsToHighlight[term]).sort(termsSorting));
        termsToIterate = _.map(termsToIterate, function (term) { return Utils_1.Utils.escapeRegexCharacter(term); });
        var regex = regexStart;
        regex += termsToIterate.join('|') + ')(?=(?:' + wordBoundary + '|$)+)';
        var indexesFound = StringUtils_1.StringUtils.getHighlights(toHighlight, new RegExp(regex, opts.regexFlags), term);
        if (indexesFound != undefined && Utils_1.Utils.isNonEmptyArray(indexesFound)) {
            indexes.push(indexesFound);
        }
    });
    _.each(phrasesToHighlight, function (phrase, origPhrase) {
        var split = origPhrase.split(' ');
        var regex = regexStart;
        _.each(split, function (origWord, i) {
            regex += '(?:' + [origWord].concat(phrase[origWord]).join('|') + ')';
            if (i == split.length - 1) {
                regex += '(?=';
            }
            regex += wordBoundary;
            if (i == split.length - 1) {
                regex += '|$)';
            }
            if (i != split.length - 1) {
                regex += '+';
            }
        });
        regex += ')';
        var indexesFound = StringUtils_1.StringUtils.getHighlights(toHighlight, new RegExp(regex, opts.regexFlags), origPhrase);
        if (indexesFound != undefined && Utils_1.Utils.isNonEmptyArray(indexesFound)) {
            indexes.push(indexesFound);
        }
    });
    return _.chain(indexes)
        .flatten()
        .compact()
        .uniq(function (highlight) {
        return highlight.offset;
    })
        .sortBy(function (highlight) {
        return highlight.offset;
    })
        .map(function (highlight) {
        var keysFromTerms = _.keys(termsToHighlight);
        var keysFromPhrases = _.keys(phrasesToHighlight);
        var keys = keysFromTerms.concat(keysFromPhrases);
        var group = _.indexOf(keys, highlight.dataHighlightGroupTerm) + 1;
        return _.extend(highlight, { dataHighlightGroup: group });
    })
        .value();
}
exports.getRestHighlightsForAllTerms = getRestHighlightsForAllTerms;
function termsSorting(first, second) {
    return first.length - second.length;
}
function createStreamHTMLContainer(stream) {
    var container = Dom_1.$$('div').el;
    container.innerHTML = stream;
    return container;
}


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Assert_1 = __webpack_require__(5);
var UnderscoreTemplate_1 = __webpack_require__(43);
var Utils_1 = __webpack_require__(4);
/**
 * Allow to register and return template helpers (essentially: Utility functions that can be executed in the context of a template to render complex elements).
 */
var TemplateHelpers = /** @class */ (function () {
    function TemplateHelpers() {
    }
    TemplateHelpers.registerFieldHelper = function (name, helper) {
        TemplateHelpers.fieldHelpers.push(name);
        TemplateHelpers.registerTemplateHelper(name, helper);
    };
    /**
     * Register a new helper in the framework, that will be available inside all templates execution context.
     * @param name
     * @param helper
     */
    TemplateHelpers.registerTemplateHelper = function (name, helper) {
        Assert_1.Assert.isNonEmptyString(name);
        Assert_1.Assert.exists(helper);
        TemplateHelpers.registerTemplateHelperInUnderscore(name, helper);
        TemplateHelpers.helpers[name] = helper;
    };
    /**
     * Return a template helper function
     * @param name
     * @returns {ITemplateHelperFunction}
     */
    TemplateHelpers.getHelper = function (name) {
        return Utils_1.Utils.getCaseInsensitiveProperty(TemplateHelpers.helpers, name);
    };
    /**
     * Get all available helpers
     */
    TemplateHelpers.getHelpers = function () {
        return TemplateHelpers.helpers;
    };
    TemplateHelpers.registerTemplateHelperInUnderscore = function (name, helper) {
        Assert_1.Assert.isNonEmptyString(name);
        Assert_1.Assert.exists(helper);
        UnderscoreTemplate_1.UnderscoreTemplate.registerTemplateHelper(name, helper);
    };
    TemplateHelpers.helpers = {};
    TemplateHelpers.fieldHelpers = [];
    return TemplateHelpers;
}());
exports.TemplateHelpers = TemplateHelpers;


/***/ }),
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var AnalyticsActionListMeta_1 = __webpack_require__(9);
function logSearchBoxSubmitEvent(client) {
    client.logSearchEvent(AnalyticsActionListMeta_1.analyticsActionCauseList.searchboxSubmit, {});
}
exports.logSearchBoxSubmitEvent = logSearchBoxSubmitEvent;
function logSortEvent(client, resultsSortBy) {
    client.logSearchEvent(AnalyticsActionListMeta_1.analyticsActionCauseList.resultsSort, {
        resultsSortBy: resultsSortBy
    });
}
exports.logSortEvent = logSortEvent;


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ColorUtils_1 = __webpack_require__(103);
exports.ColorUtils = ColorUtils_1.ColorUtils;
var CookieUtils_1 = __webpack_require__(66);
exports.Cookie = CookieUtils_1.Cookie;
var CurrencyUtils_1 = __webpack_require__(102);
exports.CurrencyUtils = CurrencyUtils_1.CurrencyUtils;
var DateUtils_1 = __webpack_require__(29);
exports.DateUtils = DateUtils_1.DateUtils;
var DeviceUtils_1 = __webpack_require__(21);
exports.DeviceUtils = DeviceUtils_1.DeviceUtils;
var Dom_1 = __webpack_require__(2);
exports.Dom = Dom_1.Dom;
exports.$$ = Dom_1.$$;
var DomUtils_1 = __webpack_require__(62);
exports.DomUtils = DomUtils_1.DomUtils;
var EmailUtils_1 = __webpack_require__(134);
exports.EmailUtils = EmailUtils_1.EmailUtils;
var HashUtils_1 = __webpack_require__(36);
exports.HashUtils = HashUtils_1.HashUtils;
var HighlightUtils_1 = __webpack_require__(49);
exports.HighlightUtils = HighlightUtils_1.HighlightUtils;
exports.StringAndHoles = HighlightUtils_1.StringAndHoles;
var HtmlUtils_1 = __webpack_require__(135);
exports.HTMLUtils = HtmlUtils_1.HTMLUtils;
var KeyboardUtils_1 = __webpack_require__(20);
exports.KEYBOARD = KeyboardUtils_1.KEYBOARD;
exports.KeyboardUtils = KeyboardUtils_1.KeyboardUtils;
var LocalStorageUtils_1 = __webpack_require__(35);
exports.LocalStorageUtils = LocalStorageUtils_1.LocalStorageUtils;
var OSUtils_1 = __webpack_require__(123);
exports.OSUtils = OSUtils_1.OSUtils;
exports.OS_NAME = OSUtils_1.OS_NAME;
var PopupUtils_1 = __webpack_require__(48);
exports.PopupUtils = PopupUtils_1.PopupUtils;
var QueryUtils_1 = __webpack_require__(19);
exports.QueryUtils = QueryUtils_1.QueryUtils;
var StreamHighlightUtils_1 = __webpack_require__(76);
exports.StreamHighlightUtils = StreamHighlightUtils_1.StreamHighlightUtils;
var StringUtils_1 = __webpack_require__(18);
exports.StringUtils = StringUtils_1.StringUtils;
var TimeSpanUtils_1 = __webpack_require__(55);
exports.TimeSpan = TimeSpanUtils_1.TimeSpan;
var Utils_1 = __webpack_require__(4);
exports.Utils = Utils_1.Utils;
var UrlUtils_1 = __webpack_require__(42);
exports.UrlUtils = UrlUtils_1.UrlUtils;


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Template_1 = __webpack_require__(22);
var UnderscoreTemplate_1 = __webpack_require__(43);
var TemplateCache_1 = __webpack_require__(54);
var Assert_1 = __webpack_require__(5);
var Dom_1 = __webpack_require__(2);
var _ = __webpack_require__(0);
var Initialization_1 = __webpack_require__(1);
/*
 * This renders the appropriate result template, found in TemplateCache,
 * according to its condition.
 *
 * For example, a result with a filetype of `YoutubeVideo` will get rendered
 * with the `YoutubeVideo` template, because the latter is registered with a
 * `condition` of `raw.filetype == 'YoutubeVideo'`.
 */
var DefaultResultTemplate = /** @class */ (function (_super) {
    __extends(DefaultResultTemplate, _super);
    function DefaultResultTemplate() {
        var _this = _super.call(this) || this;
        // For default result template, register everything since it's not possible to "scan" them before they are rendered.
        _this.addFields(Initialization_1.Initialization.getRegisteredFieldsForQuery());
        return _this;
    }
    DefaultResultTemplate.prototype.instantiateToString = function (object, instantiateOptions) {
        if (instantiateOptions === void 0) { instantiateOptions = {}; }
        Assert_1.Assert.exists(object);
        var mergedOptions = new Template_1.DefaultInstantiateTemplateOptions().merge(instantiateOptions);
        object = _.extend({}, object, UnderscoreTemplate_1.UnderscoreTemplate.templateHelpers);
        var templates = _.chain(TemplateCache_1.TemplateCache.getDefaultTemplates())
            .map(function (name) { return TemplateCache_1.TemplateCache.getTemplate(name); })
            .value();
        // Put templates with conditions first
        var sortedTemplates = _.chain(templates)
            .sortBy(function (template) { return template.condition == null; })
            .sortBy(function (template) { return template.fieldsToMatch == null; })
            .value();
        for (var i = 0; i < sortedTemplates.length; i++) {
            var result = sortedTemplates[i].instantiateToString(object, mergedOptions);
            if (result != null) {
                return result;
            }
        }
        return this.getFallbackTemplate();
    };
    DefaultResultTemplate.prototype.getFields = function () {
        var defaultTemplates = _.map(TemplateCache_1.TemplateCache.getDefaultTemplates(), function (name) { return TemplateCache_1.TemplateCache.getTemplate(name); });
        return _.flatten(_.map(defaultTemplates, function (template) { return template.getFields(); }));
    };
    DefaultResultTemplate.prototype.getType = function () {
        return 'DefaultResultTemplate';
    };
    DefaultResultTemplate.prototype.getFallbackTemplate = function () {
        var titleContainer = Dom_1.$$('div', {
            className: 'coveo-title'
        });
        var resultLink = Dom_1.$$('a', {
            className: 'CoveoResultLink'
        });
        titleContainer.append(resultLink.el);
        var excerpt = Dom_1.$$('div', {
            className: 'CoveoExcerpt'
        });
        var resultContainer = Dom_1.$$('div');
        resultContainer.append(titleContainer.el);
        resultContainer.append(excerpt.el);
        return resultContainer.el.outerHTML;
    };
    return DefaultResultTemplate;
}(Template_1.Template));
exports.DefaultResultTemplate = DefaultResultTemplate;


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var PendingSearchEvent_1 = __webpack_require__(73);
var Dom_1 = __webpack_require__(2);
var InitializationEvents_1 = __webpack_require__(15);
var SearchInterface_1 = __webpack_require__(17);
var Component_1 = __webpack_require__(6);
var QueryStateModel_1 = __webpack_require__(12);
var _ = __webpack_require__(0);
var PendingSearchAsYouTypeSearchEvent = /** @class */ (function (_super) {
    __extends(PendingSearchAsYouTypeSearchEvent, _super);
    function PendingSearchAsYouTypeSearchEvent(root, endpoint, templateSearchEvent, sendToCloud) {
        var _this = _super.call(this, root, endpoint, templateSearchEvent, sendToCloud) || this;
        _this.root = root;
        _this.endpoint = endpoint;
        _this.templateSearchEvent = templateSearchEvent;
        _this.sendToCloud = sendToCloud;
        _this.delayBeforeSending = 5000;
        _this.queryContent = '';
        _this.beforeUnloadHandler = function () {
            _this.onWindowUnload();
        };
        window.addEventListener('beforeunload', _this.beforeUnloadHandler);
        Dom_1.$$(root).on(InitializationEvents_1.InitializationEvents.nuke, function () { return _this.handleNuke(); });
        return _this;
    }
    PendingSearchAsYouTypeSearchEvent.prototype.handleDuringQuery = function (e, args) {
        var _this = this;
        var event = _.clone(e);
        // We need to "snapshot" the current query before the delay is applied
        // Otherwise, this means that after 5 second, the original query is possibly modified
        // For example, DidYouMean would be wrong in that case.
        var eventTarget = e.target;
        var searchInterface = Component_1.Component.get(eventTarget, SearchInterface_1.SearchInterface);
        this.modifyQueryContent(searchInterface.queryStateModel.get(QueryStateModel_1.QueryStateModel.attributesEnum.q));
        this.beforeResolve = new Promise(function (resolve) {
            _this.toSendRightNow = function () {
                if (!_this.isCancelledOrFinished()) {
                    resolve(_this);
                    _super.prototype.handleDuringQuery.call(_this, event, args, _this.queryContent);
                }
            };
            _.delay(function () {
                _this.toSendRightNow();
            }, _this.delayBeforeSending);
        });
    };
    PendingSearchAsYouTypeSearchEvent.prototype.sendRightNow = function () {
        if (this.toSendRightNow) {
            this.toSendRightNow();
        }
    };
    PendingSearchAsYouTypeSearchEvent.prototype.modifyCustomData = function (key, newData) {
        _.each(this.searchEvents, function (searchEvent) {
            searchEvent.customData[key] = newData;
        });
        if (!this.templateSearchEvent.customData) {
            this.templateSearchEvent.customData = {};
        }
        this.templateSearchEvent.customData[key] = newData;
    };
    PendingSearchAsYouTypeSearchEvent.prototype.modifyEventCause = function (newCause) {
        _.each(this.searchEvents, function (searchEvent) {
            searchEvent.actionCause = newCause.name;
            searchEvent.actionType = newCause.type;
        });
        this.templateSearchEvent.actionCause = newCause.name;
        this.templateSearchEvent.actionType = newCause.type;
    };
    PendingSearchAsYouTypeSearchEvent.prototype.modifyQueryContent = function (query) {
        this.queryContent = query;
    };
    PendingSearchAsYouTypeSearchEvent.prototype.stopRecording = function () {
        _super.prototype.stopRecording.call(this);
        if (this.beforeUnloadHandler) {
            window.removeEventListener('beforeunload', this.beforeUnloadHandler);
            this.beforeUnloadHandler = undefined;
        }
    };
    PendingSearchAsYouTypeSearchEvent.prototype.handleNuke = function () {
        window.removeEventListener('beforeunload', this.beforeUnloadHandler);
    };
    PendingSearchAsYouTypeSearchEvent.prototype.onWindowUnload = function () {
        if (!this.isCancelledOrFinished()) {
            this.sendRightNow();
        }
    };
    PendingSearchAsYouTypeSearchEvent.prototype.isCancelledOrFinished = function () {
        if (!this.cancelled) {
            if (this.finished) {
                this.cancel();
                return true;
            }
            else {
                return false;
            }
        }
        else {
            return true;
        }
    };
    return PendingSearchAsYouTypeSearchEvent;
}(PendingSearchEvent_1.PendingSearchEvent));
exports.PendingSearchAsYouTypeSearchEvent = PendingSearchAsYouTypeSearchEvent;


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var analytics = __webpack_require__(106);
exports.analytics = analytics;
var SimpleAnalytics = __webpack_require__(225);
exports.SimpleAnalytics = SimpleAnalytics;
var history = __webpack_require__(107);
exports.history = history;
var donottrack = __webpack_require__(228);
exports.donottrack = donottrack;
var storage = __webpack_require__(108);
exports.storage = storage;


/***/ }),
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Utils_1 = __webpack_require__(4);
var Strings_1 = __webpack_require__(8);
var Assert_1 = __webpack_require__(5);
var _ = __webpack_require__(0);
// On-demand mapping of file types to captions. Used by facets, but I don't
// really like this. Maybe a dedicated filetype facet would be better? Hmm...
var fileTypeCaptions;
var FileTypes = /** @class */ (function () {
    function FileTypes() {
    }
    FileTypes.get = function (result) {
        var objecttype = Utils_1.Utils.getFieldValue(result, 'objecttype');
        var filetype = Utils_1.Utils.getFieldValue(result, 'filetype');
        // When @objecttype is File, Item, Document, or ContentVersion we fallback on @filetype for icons and such
        if (Utils_1.Utils.isNonEmptyString(objecttype) && !objecttype.match(/^(file|document|contentversion|item)$/i)) {
            return FileTypes.getObjectType(objecttype);
        }
        else if (Utils_1.Utils.isNonEmptyString(filetype)) {
            return FileTypes.getFileType(filetype);
        }
        else {
            return {
                // This will render a default icon. Really it should not happen.
                icon: 'coveo-icon filetype',
                caption: Strings_1.l('Unknown')
            };
        }
    };
    FileTypes.getObjectType = function (objecttype) {
        // We must use lowercase filetypes because that's how the CSS classes
        // are generated (they are case sensitive, alas).
        var loweredCaseObjecttype = objecttype.toLowerCase();
        var variableValue = "objecttype_" + loweredCaseObjecttype;
        // Most object types have a set of localized strings in the main dictionary
        var localizedString = Strings_1.l(variableValue);
        // Some strings are sent as `objecttype_[...]` to specify a dictionary to use. If there's no match, try using
        // the main dictionary by using the original value.
        if (localizedString.toLowerCase() == variableValue.toLowerCase()) {
            localizedString = Strings_1.l(objecttype);
        }
        return {
            icon: 'coveo-icon objecttype ' + loweredCaseObjecttype.replace(' ', '-'),
            caption: localizedString
        };
    };
    FileTypes.getFileType = function (filetype) {
        // We must use lowercase filetypes because that's how the CSS classes
        // are generated (they are case sensitive, alas).
        var loweredCaseFiletype = filetype.toLowerCase();
        // Sometimes, filetype begins with a period (typically means the index has
        // no idea and uses the file extension as a filetype).
        if (loweredCaseFiletype[0] == '.') {
            loweredCaseFiletype = loweredCaseFiletype.substring(1);
        }
        var variableValue = "filetype_" + loweredCaseFiletype;
        // Most filetypes have a set of localized strings in the main dictionary
        var localizedString = Strings_1.l(variableValue);
        if (localizedString.toLowerCase() == variableValue.toLowerCase()) {
            // Some strings are sent as `filetype_[...]` to specify a dictionary to use. If there's no match, try using
            // The main dictionary by using the original value.
            localizedString = Strings_1.l(filetype);
        }
        return {
            icon: 'coveo-icon filetype ' + loweredCaseFiletype.replace(' ', '-'),
            caption: localizedString
        };
    };
    FileTypes.getFileTypeCaptions = function () {
        if (fileTypeCaptions == undefined) {
            fileTypeCaptions = {};
            var strings = String['locales'][String['locale'].toLowerCase()];
            Assert_1.Assert.isNotUndefined(strings);
            _.each(_.keys(strings), function (key) {
                if (key.indexOf('filetype_') == 0) {
                    fileTypeCaptions[key.substr('filetype_'.length)] = key.toLocaleString();
                }
                else if (key.indexOf('objecttype_') == 0) {
                    fileTypeCaptions[key.substr('objecttype_'.length)] = key.toLocaleString();
                }
            });
        }
        return fileTypeCaptions;
    };
    return FileTypes;
}());
exports.FileTypes = FileTypes;


/***/ }),
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Template_1 = __webpack_require__(22);
var DefaultResultTemplate_1 = __webpack_require__(83);
var Assert_1 = __webpack_require__(5);
var _ = __webpack_require__(0);
var TemplateList = /** @class */ (function (_super) {
    __extends(TemplateList, _super);
    function TemplateList(templates) {
        var _this = _super.call(this) || this;
        _this.templates = templates;
        Assert_1.Assert.exists(templates);
        return _this;
    }
    TemplateList.prototype.instantiateToString = function (object, instantiateOptions) {
        if (instantiateOptions === void 0) { instantiateOptions = {}; }
        var merged = new Template_1.DefaultInstantiateTemplateOptions().merge(instantiateOptions);
        var filteredTemplates = _.reject(this.templates, function (t) { return t.role != null; });
        for (var i = 0; i < filteredTemplates.length; i++) {
            var result = filteredTemplates[i].instantiateToString(object, merged);
            if (result != null) {
                return result;
            }
        }
        return this.getFallbackTemplate().instantiateToString(object, instantiateOptions);
    };
    TemplateList.prototype.instantiateToElement = function (object, instantiateOptions) {
        if (instantiateOptions === void 0) { instantiateOptions = {}; }
        var merged = new Template_1.DefaultInstantiateTemplateOptions().merge(instantiateOptions);
        var filteredTemplates = _.reject(this.templates, function (t) { return t.role != null; });
        for (var i = 0; i < filteredTemplates.length; i++) {
            var promiseOfHTMLElement = filteredTemplates[i].instantiateToElement(object, merged);
            if (promiseOfHTMLElement != null) {
                return promiseOfHTMLElement;
            }
        }
        return this.getFallbackTemplate().instantiateToElement(object, merged);
    };
    TemplateList.prototype.getFields = function () {
        return _.reduce(this.templates, function (fields, template) { return fields.concat(template.getFields()); }, []);
    };
    TemplateList.prototype.getType = function () {
        return 'TemplateList';
    };
    TemplateList.prototype.getFallbackTemplate = function () {
        return new DefaultResultTemplate_1.DefaultResultTemplate();
    };
    return TemplateList;
}(Template_1.Template));
exports.TemplateList = TemplateList;


/***/ }),
/* 96 */,
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ResultLayoutEvents = /** @class */ (function () {
    function ResultLayoutEvents() {
    }
    ResultLayoutEvents.populateResultLayout = 'populateResultLayout';
    return ResultLayoutEvents;
}());
exports.ResultLayoutEvents = ResultLayoutEvents;


/***/ }),
/* 98 */
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
            !(function webpackMissingModule() { var e = new Error("Cannot find module \"./locale\""); e.code = 'MODULE_NOT_FOUND'; throw e; }());
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(287)(module)))

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
// We need a custom trigger function for our Promise polyfill
// because the default one can cause issues in other frameworks that relies on
// their own Promise polyfill like the Salesforce Aura framework.
var promise = window['Promise'];
if (!(promise instanceof Function)) {
    __webpack_require__(213);
}
var CoveoUnderscore_1 = __webpack_require__(143);
exports._ = CoveoUnderscore_1.underscoreInstance;
__export(__webpack_require__(216));
__export(__webpack_require__(52));
__export(__webpack_require__(232));
__export(__webpack_require__(100));
__export(__webpack_require__(233));
__export(__webpack_require__(141));
__export(__webpack_require__(235));
__export(__webpack_require__(289));
__export(__webpack_require__(82));


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var AdvancedSearchEvents_1 = __webpack_require__(63);
exports.AdvancedSearchEvents = AdvancedSearchEvents_1.AdvancedSearchEvents;
var AnalyticsEvents_1 = __webpack_require__(65);
exports.AnalyticsEvents = AnalyticsEvents_1.AnalyticsEvents;
var BreadcrumbEvents_1 = __webpack_require__(38);
exports.BreadcrumbEvents = BreadcrumbEvents_1.BreadcrumbEvents;
var DebugEvents_1 = __webpack_require__(70);
exports.DebugEvents = DebugEvents_1.DebugEvents;
var DistanceEvents_1 = __webpack_require__(140);
exports.DistanceEvents = DistanceEvents_1.DistanceEvents;
var InitializationEvents_1 = __webpack_require__(15);
exports.InitializationEvents = InitializationEvents_1.InitializationEvents;
var OmniboxEvents_1 = __webpack_require__(30);
exports.OmniboxEvents = OmniboxEvents_1.OmniboxEvents;
var PreferencesPanelEvents_1 = __webpack_require__(68);
exports.PreferencesPanelEvents = PreferencesPanelEvents_1.PreferencesPanelEvents;
var QueryEvents_1 = __webpack_require__(10);
exports.QueryEvents = QueryEvents_1.QueryEvents;
var ResultListEvents_1 = __webpack_require__(32);
exports.ResultListEvents = ResultListEvents_1.ResultListEvents;
var ResultLayoutEvents_1 = __webpack_require__(97);
exports.ResultLayoutEvents = ResultLayoutEvents_1.ResultLayoutEvents;
var SearchAlertEvents_1 = __webpack_require__(61);
exports.SearchAlertsEvents = SearchAlertEvents_1.SearchAlertsEvents;
var SettingsEvents_1 = __webpack_require__(39);
exports.SettingsEvents = SettingsEvents_1.SettingsEvents;
var SliderEvents_1 = __webpack_require__(101);
exports.SliderEvents = SliderEvents_1.SliderEvents;
var StandaloneSearchInterfaceEvents_1 = __webpack_require__(67);
exports.StandaloneSearchInterfaceEvents = StandaloneSearchInterfaceEvents_1.StandaloneSearchInterfaceEvents;


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var SliderEvents = /** @class */ (function () {
    function SliderEvents() {
    }
    SliderEvents.startSlide = 'startSlide';
    SliderEvents.duringSlide = 'duringSlide';
    SliderEvents.endSlide = 'endSlide';
    SliderEvents.graphValueSelected = 'graphValueSelected';
    return SliderEvents;
}());
exports.SliderEvents = SliderEvents;


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Assert_1 = __webpack_require__(5);
var Options_1 = __webpack_require__(58);
var Utils_1 = __webpack_require__(4);
var Globalize = __webpack_require__(25);
var DefaultCurrencyToStringOptions = /** @class */ (function (_super) {
    __extends(DefaultCurrencyToStringOptions, _super);
    function DefaultCurrencyToStringOptions() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.decimals = 0;
        return _this;
    }
    return DefaultCurrencyToStringOptions;
}(Options_1.Options));
var CurrencyUtils = /** @class */ (function () {
    function CurrencyUtils() {
    }
    CurrencyUtils.currencyToString = function (value, options) {
        if (Utils_1.Utils.isNullOrUndefined(value)) {
            return '';
        }
        value = Number(value);
        Assert_1.Assert.isNumber(value);
        options = new DefaultCurrencyToStringOptions().merge(options);
        var currency = Globalize.culture().numberFormat.currency;
        var backup = currency.symbol;
        if (Utils_1.Utils.isNonEmptyString(options.symbol)) {
            currency.symbol = options.symbol;
        }
        var str = Globalize.format(value, 'c' + options.decimals.toString());
        currency.symbol = backup;
        return str;
    };
    return CurrencyUtils;
}());
exports.CurrencyUtils = CurrencyUtils;


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ColorUtils = /** @class */ (function () {
    function ColorUtils() {
    }
    ColorUtils.hsvToRgb = function (h, s, v) {
        var r, g, b;
        var i = Math.floor(h * 6);
        var f = h * 6 - i;
        var p = v * (1 - s);
        var q = v * (1 - f * s);
        var t = v * (1 - (1 - f) * s);
        switch (i % 6) {
            case 0:
                (r = v), (g = t), (b = p);
                break;
            case 1:
                (r = q), (g = v), (b = p);
                break;
            case 2:
                (r = p), (g = v), (b = t);
                break;
            case 3:
                (r = p), (g = q), (b = v);
                break;
            case 4:
                (r = t), (g = p), (b = v);
                break;
            case 5:
                (r = v), (g = p), (b = q);
                break;
        }
        return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
    };
    ColorUtils.rgbToHsv = function (r, g, b) {
        (r = r / 255), (g = g / 255), (b = b / 255);
        var max = Math.max(r, g, b), min = Math.min(r, g, b);
        var h, s, v = max;
        var d = max - min;
        s = max == 0 ? 0 : d / max;
        if (max == min) {
            h = 0; // achromatic
        }
        else {
            switch (max) {
                case r:
                    h = (g - b) / d + (g < b ? 6 : 0);
                    break;
                case g:
                    h = (b - r) / d + 2;
                    break;
                case b:
                    h = (r - g) / d + 4;
                    break;
            }
            h /= 6;
        }
        return [h, s, v];
    };
    return ColorUtils;
}());
exports.ColorUtils = ColorUtils;


/***/ }),
/* 104 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Assert_1 = __webpack_require__(5);
var QueryError = /** @class */ (function () {
    function QueryError(errorResponse) {
        this.status = errorResponse.statusCode;
        this.message = errorResponse.data.message;
        this.name = this.type = errorResponse.data.type;
        this.queryExecutionReport = errorResponse.data.executionReport;
        Assert_1.Assert.isNumber(this.status);
        Assert_1.Assert.isNonEmptyString(this.message);
        Assert_1.Assert.isNonEmptyString(this.type);
    }
    return QueryError;
}());
exports.QueryError = QueryError;


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var history_1 = __webpack_require__(107);
__webpack_require__(224);
exports.Version = 'v15';
exports.Endpoints = {
    default: 'https://usageanalytics.coveo.com',
    production: 'https://usageanalytics.coveo.com',
    dev: 'https://usageanalyticsdev.coveo.com',
    staging: 'https://usageanalyticsstaging.coveo.com'
};
;
function defaultResponseTransformer(response) {
    return response.json().then(function (data) {
        data.raw = response;
        return data;
    });
}
var Client = (function () {
    function Client(opts) {
        if (typeof opts === 'undefined') {
            throw new Error('You have to pass options to this constructor');
        }
        this.endpoint = opts.endpoint || exports.Endpoints.default;
        this.token = opts.token;
        this.version = opts.version || exports.Version;
    }
    Client.prototype.sendEvent = function (eventType, request) {
        return fetch(this.getRestEndpoint() + "/analytics/" + eventType, {
            method: 'POST',
            headers: this.getHeaders(),
            mode: 'cors',
            body: JSON.stringify(request),
            credentials: 'include'
        });
    };
    Client.prototype.sendSearchEvent = function (request) {
        return this.sendEvent('search', request).then(defaultResponseTransformer);
    };
    Client.prototype.sendClickEvent = function (request) {
        return this.sendEvent('click', request).then(defaultResponseTransformer);
    };
    Client.prototype.sendCustomEvent = function (request) {
        return this.sendEvent('custom', request).then(defaultResponseTransformer);
    };
    Client.prototype.sendViewEvent = function (request) {
        if (request.referrer === '') {
            delete request.referrer;
        }
        var store = new history_1.HistoryStore();
        var historyElement = {
            name: 'PageView',
            value: request.contentIdValue,
            time: JSON.stringify(new Date()),
        };
        store.addElement(historyElement);
        return this.sendEvent('view', request).then(defaultResponseTransformer);
    };
    Client.prototype.getVisit = function () {
        return fetch(this.getRestEndpoint() + "/analytics/visit")
            .then(defaultResponseTransformer);
    };
    Client.prototype.getHealth = function () {
        return fetch(this.getRestEndpoint() + "/analytics/monitoring/health")
            .then(defaultResponseTransformer);
    };
    Client.prototype.getRestEndpoint = function () {
        return this.endpoint + "/rest/" + this.version;
    };
    Client.prototype.getHeaders = function () {
        var headers = {
            'Content-Type': "application/json"
        };
        if (this.token) {
            headers['Authorization'] = "Bearer " + this.token;
        }
        return headers;
    };
    return Client;
}());
exports.Client = Client;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Client;


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var storage_1 = __webpack_require__(108);
var detector = __webpack_require__(109);
exports.STORE_KEY = '__coveo.analytics.history';
exports.MAX_NUMBER_OF_HISTORY_ELEMENTS = 20;
exports.MIN_THRESHOLD_FOR_DUPLICATE_VALUE = 1000 * 60;
exports.MAX_VALUE_SIZE = 75;
var HistoryStore = (function () {
    function HistoryStore(store) {
        this.store = store || storage_1.getAvailableStorage();
        if (!(this.store instanceof storage_1.CookieStorage) && detector.hasCookieStorage()) {
            new storage_1.CookieStorage().removeItem(exports.STORE_KEY);
        }
    }
    ;
    HistoryStore.prototype.addElement = function (elem) {
        elem.internalTime = new Date().getTime();
        this.cropQueryElement(elem);
        var currentHistory = this.getHistoryWithInternalTime();
        if (currentHistory != null) {
            if (this.isValidEntry(elem)) {
                this.setHistory([elem].concat(currentHistory));
            }
        }
        else {
            this.setHistory([elem]);
        }
    };
    HistoryStore.prototype.getHistory = function () {
        var history = this.getHistoryWithInternalTime();
        return this.stripInternalTime(history);
    };
    HistoryStore.prototype.getHistoryWithInternalTime = function () {
        try {
            return JSON.parse(this.store.getItem(exports.STORE_KEY));
        }
        catch (e) {
            return [];
        }
    };
    HistoryStore.prototype.setHistory = function (history) {
        try {
            this.store.setItem(exports.STORE_KEY, JSON.stringify(history.slice(0, exports.MAX_NUMBER_OF_HISTORY_ELEMENTS)));
        }
        catch (e) { }
    };
    HistoryStore.prototype.clear = function () {
        try {
            this.store.removeItem(exports.STORE_KEY);
        }
        catch (e) { }
    };
    HistoryStore.prototype.getMostRecentElement = function () {
        var currentHistory = this.getHistoryWithInternalTime();
        if (currentHistory != null) {
            var sorted = currentHistory.sort(function (first, second) {
                if (first.internalTime == null && second.internalTime == null) {
                    return 0;
                }
                if (first.internalTime == null && second.internalTime != null) {
                    return 1;
                }
                if (first.internalTime != null && second.internalTime == null) {
                    return -1;
                }
                return second.internalTime - first.internalTime;
            });
            return sorted[0];
        }
        return null;
    };
    HistoryStore.prototype.cropQueryElement = function (elem) {
        if (elem.name && elem.name.toLowerCase() == 'query' && elem.value != null) {
            elem.value = elem.value.slice(0, exports.MAX_VALUE_SIZE);
        }
    };
    HistoryStore.prototype.isValidEntry = function (elem) {
        var lastEntry = this.getMostRecentElement();
        if (lastEntry && lastEntry.value == elem.value) {
            return elem.internalTime - lastEntry.internalTime > exports.MIN_THRESHOLD_FOR_DUPLICATE_VALUE;
        }
        return true;
    };
    HistoryStore.prototype.stripInternalTime = function (history) {
        if (history) {
            history.forEach(function (part, index, array) {
                delete part.internalTime;
            });
        }
        return history;
    };
    return HistoryStore;
}());
exports.HistoryStore = HistoryStore;
;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = HistoryStore;


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var detector = __webpack_require__(109);
var cookieutils_1 = __webpack_require__(223);
exports.preferredStorage = null;
function getAvailableStorage() {
    if (exports.preferredStorage) {
        return exports.preferredStorage;
    }
    if (detector.hasLocalStorage()) {
        return localStorage;
    }
    if (detector.hasCookieStorage()) {
        return new CookieStorage();
    }
    if (detector.hasSessionStorage()) {
        return sessionStorage;
    }
    return new NullStorage();
}
exports.getAvailableStorage = getAvailableStorage;
var CookieStorage = (function () {
    function CookieStorage() {
    }
    CookieStorage.prototype.getItem = function (key) {
        return cookieutils_1.Cookie.get(key);
    };
    CookieStorage.prototype.removeItem = function (key) {
        cookieutils_1.Cookie.erase(key);
    };
    CookieStorage.prototype.setItem = function (key, data) {
        cookieutils_1.Cookie.set(key, data);
    };
    return CookieStorage;
}());
exports.CookieStorage = CookieStorage;
var NullStorage = (function () {
    function NullStorage() {
    }
    NullStorage.prototype.getItem = function (key) { return null; };
    NullStorage.prototype.removeItem = function (key) { };
    NullStorage.prototype.setItem = function (key, data) { };
    return NullStorage;
}());
exports.NullStorage = NullStorage;


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function hasLocalStorage() {
    try {
        return 'localStorage' in window && window['localStorage'] !== null;
    }
    catch (e) {
        return false;
    }
}
exports.hasLocalStorage = hasLocalStorage;
;
function hasSessionStorage() {
    try {
        return 'sessionStorage' in window && window['sessionStorage'] !== null;
    }
    catch (e) {
        return false;
    }
}
exports.hasSessionStorage = hasSessionStorage;
;
function hasCookieStorage() {
    return navigator.cookieEnabled;
}
exports.hasCookieStorage = hasCookieStorage;
;
function hasDocument() {
    return document !== null;
}
exports.hasDocument = hasDocument;
;
function hasDocumentLocation() {
    return hasDocument() && document.location !== null;
}
exports.hasDocumentLocation = hasDocumentLocation;
;


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var Logger_1 = __webpack_require__(11);
var underscore_1 = __webpack_require__(0);
var ACCESS_TOKEN_ERRORS;
(function (ACCESS_TOKEN_ERRORS) {
    ACCESS_TOKEN_ERRORS["NO_RENEW_FUNCTION"] = "NO_RENEW_FUNCTION";
    ACCESS_TOKEN_ERRORS["REPEATED_FAILURES"] = "REPEATED_FAILURES";
})(ACCESS_TOKEN_ERRORS = exports.ACCESS_TOKEN_ERRORS || (exports.ACCESS_TOKEN_ERRORS = {}));
var AccessToken = /** @class */ (function () {
    function AccessToken(token, renew) {
        var _this = this;
        this.token = token;
        this.renew = renew;
        this.subscribers = [];
        this.logger = new Logger_1.Logger(this);
        this.triedRenewals = 0;
        this.resetRenewalTriesAfterDelay = underscore_1.debounce(function () {
            _this.triedRenewals = 0;
        }, 500, false);
    }
    AccessToken.prototype.isExpired = function (error) {
        return error != null && error.statusCode === 419;
    };
    AccessToken.prototype.doRenew = function (onError) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var _a, err_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.triedRenewals++;
                        this.resetRenewalTriesAfterDelay();
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        this.verifyRenewSetup();
                        this.logger.info('Renewing expired access token');
                        _a = this;
                        return [4 /*yield*/, this.renew()];
                    case 2:
                        _a.token = _b.sent();
                        this.logger.info('Access token renewed', this.token);
                        this.subscribers.forEach(function (subscriber) { return subscriber(_this.token); });
                        return [2 /*return*/, true];
                    case 3:
                        err_1 = _b.sent();
                        switch (err_1.message) {
                            case ACCESS_TOKEN_ERRORS.REPEATED_FAILURES:
                                this.logger.error('AccessToken tried to renew itself extremely fast in a short period of time');
                                this.logger.error('There is most probably an authentication error, or a bad implementation of the custom renew function');
                                this.logger.error('Inspect the developer console of your browser to find out the root cause');
                                break;
                            case ACCESS_TOKEN_ERRORS.NO_RENEW_FUNCTION:
                                this.logger.error("AccessToken tried to renew, but no function is configured on initialization to provide acess token renewal");
                                this.logger.error('The option name is renewAccessToken on the SearchEndpoint class');
                                break;
                        }
                        this.logger.error('Failed to renew access token', err_1);
                        if (onError) {
                            onError(err_1);
                        }
                        return [2 /*return*/, false];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    AccessToken.prototype.subscribeToRenewal = function (onTokenRefreshed) {
        this.subscribers.push(onTokenRefreshed);
    };
    AccessToken.prototype.verifyRenewSetup = function () {
        if (this.renew == null) {
            throw new Error(ACCESS_TOKEN_ERRORS.NO_RENEW_FUNCTION);
        }
        if (this.triedRenewals >= 5) {
            throw new Error(ACCESS_TOKEN_ERRORS.REPEATED_FAILURES);
        }
    };
    return AccessToken;
}());
exports.AccessToken = AccessToken;


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Globalize = __webpack_require__(25);
var merge = function (obj1, obj2) {
    var obj3 = {};
    for (var attrname in obj1) {
        obj3[attrname] = obj1[attrname];
    }
    for (var attrname in obj2) {
        obj3[attrname] = obj2[attrname];
    }
    return obj3;
};
var dict = {
    "people": "User",
    "objecttype_people": "User",
    "message": "Message",
    "objecttype_message": "Message",
    "feed": "RSS Feed",
    "objecttype_feed": "RSS Feed",
    "thread": "Thread",
    "objecttype_thread": "Thread",
    "file": "File",
    "objecttype_file": "File",
    "board": "Board",
    "objecttype_board": "Board",
    "category": "Category",
    "objecttype_category": "Category",
    "account": "Account",
    "objecttype_account": "Account",
    "annotation": "Note",
    "objecttype_annotation": "Note",
    "campaign": "Campaign",
    "objecttype_campaign": "Campaign",
    "case": "Case",
    "objecttype_case": "Case",
    "contact": "Contact",
    "objecttype_contact": "Contact",
    "contract": "Contract",
    "objecttype_contract": "Contract",
    "event": "Event",
    "objecttype_event": "Event",
    "email": "Email",
    "objecttype_email": "Email",
    "goal": "Goal",
    "objecttype_goal": "Goal",
    "incident": "Case",
    "objecttype_incident": "Case",
    "invoice": "Invoice",
    "objecttype_invoice": "Invoice",
    "lead": "Lead",
    "objecttype_lead": "Lead",
    "list": "List",
    "objecttype_list": "Marketing List",
    "solution": "Solution",
    "objecttype_solution": "Solution",
    "report": "Report",
    "objecttype_report": "Report",
    "task": "Task",
    "objecttype_task": "Task",
    "user": "User",
    "objecttype_user": "User",
    "attachment": "Attachment",
    "objecttype_attachment": "Attachment",
    "casecomment": "Case Comment",
    "objecttype_casecomment": "Case Comment",
    "opportunity": "Opportunity",
    "objecttype_opportunity": "Opportunity",
    "opportunityproduct": "Opportunity Product",
    "objecttype_opportunityproduct": "Opportunity Product",
    "feeditem": "Chatter",
    "objecttype_feeditem": "Chatter",
    "feedcomment": "Comment",
    "objecttype_feedcomment": "Comment",
    "note": "Note",
    "objecttype_note": "Note",
    "product": "Product",
    "objecttype_product": "Product",
    "partner": "Partner",
    "objecttype_partner": "Partner",
    "queueitem": "Queue Item",
    "objecttype_queueitem": "Queue Item",
    "quote": "Quote",
    "objecttype_quote": "Quote",
    "salesliterature": "Sales Literature",
    "objecttype_salesliterature": "Sales Literature",
    "salesorder": "Sales Order",
    "objecttype_salesorder": "Sales Order",
    "service": "Service",
    "objecttype_service": "Service",
    "socialprofile": "Social Profile",
    "objecttype_socialprofile": "Social Profile",
    "kbdocumentation": "Knowledge Document",
    "objecttype_kbdocumentation": "Knowledge Document",
    "kbtechnicalarticle": "Technical Documentation",
    "objecttype_kbtechnicalarticle": "Technical Documentation",
    "kbsolution": "Solution",
    "objecttype_kbsolution": "Solution",
    "kbknowledgearticle": "Knowledge Article",
    "objecttype_kbknowledgearticle": "Knowledge Article",
    "kbattachment": "Attachment",
    "objecttype_kbattachment": "Attachment",
    "kbarticle": "Article",
    "objecttype_kbarticle": "Article",
    "kbarticlecomment": "Article Comment",
    "objecttype_kbarticlecomment": "Article Comment",
    "knowledgearticle": "Knowledge Article",
    "objecttype_knowledgearticle": "Knowledge Article",
    "topic": "Topic",
    "objecttype_topic": "Topic",
    "dashboard": "Dashboard",
    "objecttype_dashboard": "Dashboard",
    "contentversion": "Document",
    "objecttype_contentversion": "Document",
    "collaborationgroup": "Collaboration group",
    "objecttype_collaborationgroup": "Collaboration group",
    "phonecall": "Phone call",
    "objecttype_phonecall": "Phone call",
    "appointment": "Appointment",
    "objecttype_appointment": "Appointment",
    "box user": "User",
    "filetype_box user": "User",
    "html": "HTML File",
    "filetype_html": "HTML File",
    "wiki": "Wiki",
    "filetype_wiki": "Wiki",
    "webscraperwebpage": "Web Page",
    "filetype_webscraperwebpage": "Web Page",
    "image": "Image",
    "filetype_image": "Image",
    "folder": "Folder",
    "filetype_folder": "Folder",
    "txt": "Text",
    "filetype_txt": "Text",
    "zip": "Zip File",
    "filetype_zip": "Zip File",
    "olefile": "OLE file",
    "filetype_olefile": "OLE file",
    "gmailmessage": "Gmail Message",
    "filetype_gmailmessage": "Gmail Message",
    "pdf": "PDF File",
    "filetype_pdf": "PDF File",
    "swf": "Flash File",
    "filetype_swf": "Flash File",
    "xml": "XML File",
    "filetype_xml": "XML File",
    "vsd": "Visio",
    "filetype_vsd": "Visio",
    "svg": "SVG",
    "filetype_svg": "SVG",
    "svm": "Open Office",
    "filetype_svm": "Open Office",
    "rssitem": "RSS feed",
    "filetype_rssitem": "RSS feed",
    "doc": "Document",
    "filetype_doc": "Document",
    "docx": "Microsoft Word Document",
    "filetype_docx": "Microsoft Word Document",
    "xls": "Spreadsheet Document",
    "filetype_xls": "Spreadsheet Document",
    "ppt": "Presentation Document",
    "filetype_ppt": "Presentation Document",
    "video": "Video",
    "filetype_video": "Video",
    "youtube": "YouTube video",
    "filetype_youtube": "YouTube video",
    "saleforceitem": "Salesforce",
    "filetype_saleforceitem": "Salesforce",
    "dynamicscrmitem": "Dynamics CRM",
    "filetype_dynamicscrmitem": "Dynamics CRM",
    "salesforceitem": "Salesforce",
    "filetype_salesforceitem": "Salesforce",
    "odt": "Open Text Document",
    "filetype_odt": "Open Text Document",
    "box": "User",
    "filetype_box": "User",
    "jiraissue": "Jira Issue",
    "filetype_jiraissue": "Jira Issue",
    "cfpage": "Confluence Page",
    "filetype_cfpage": "Confluence Page",
    "cfcomment": "Confluence Comment",
    "filetype_cfcomment": "Confluence Comment",
    "cfspace": "Confluence Space",
    "filetype_cfspace": "Confluence Space",
    "cfblogentry": "Confluence Blog Entry",
    "filetype_cfblogentry": "Confluence Blog Entry",
    "confluencespace": "Confluence Space",
    "filetype_confluencespace": "Confluence Space",
    "exchangemessage": "Message",
    "filetype_exchangemessage": "Message",
    "exchangeappointment": "Appointment",
    "filetype_exchangeappointment": "Appointment",
    "exchangenote": "Note",
    "filetype_exchangenote": "Note",
    "exchangetask": "Task",
    "filetype_exchangetask": "Task",
    "exchangeperson": "Exchange User",
    "filetype_exchangeperson": "Exchange User",
    "activedirperson": "Active Directory User",
    "filetype_activedirperson": "Active Directory User",
    "exchangeactivity": "Activity",
    "filetype_exchangeactivity": "Activity",
    "exchangecalendarmessage": "Calendar Message",
    "filetype_exchangecalendarmessage": "Calendar Message",
    "exchangedocument": "Exchange Document",
    "filetype_exchangedocument": "Exchange Document",
    "exchangedsn": "DSN",
    "filetype_exchangedsn": "DSN",
    "exchangefreebusy": "Free/Busy",
    "filetype_exchangefreebusy": "Free/Busy",
    "exchangegroup": "Group",
    "filetype_exchangegroup": "Group",
    "exchangerssfeed": "RSS Feed",
    "filetype_exchangerssfeed": "RSS Feed",
    "exchangejunkmessage": "Junk Email",
    "filetype_exchangejunkmessage": "Junk Email",
    "exchangeofficecom": "Communications",
    "filetype_exchangeofficecom": "Communications",
    "lithiummessage": "Lithium Message",
    "filetype_lithiummessage": "Lithium Message",
    "lithiumthread": "Lithium Thread",
    "filetype_lithiumthread": "Lithium Thread",
    "lithiumboard": "Lithium Board",
    "filetype_lithiumboard": "Lithium Board",
    "lithiumcategory": "Lithium Category",
    "filetype_lithiumcategory": "Lithium Category",
    "lithiumcommunity": "Lithium Community",
    "filetype_lithiumcommunity": "Lithium Community",
    "spportal": "Portal",
    "filetype_spportal": "Portal",
    "spsite": "SharePoint Site",
    "filetype_spsite": "SharePoint Site",
    "spuserprofile": "SharePoint User",
    "filetype_spuserprofile": "SharePoint User",
    "sparea": "Area",
    "filetype_sparea": "Area",
    "spannouncement": "Announcement",
    "filetype_spannouncement": "Announcement",
    "spannouncementlist": "Announcements",
    "filetype_spannouncementlist": "Announcements",
    "spcontact": "Contact",
    "filetype_spcontact": "Contact",
    "spcontactlist": "Contacts",
    "filetype_spcontactlist": "Contacts",
    "spcustomlist": "Custom Lists",
    "filetype_spcustomlist": "Custom Lists",
    "spdiscussionboard": "Discussion Board",
    "filetype_spdiscussionboard": "Discussion Board",
    "spdiscussionboardlist": "Discussion Boards",
    "filetype_spdiscussionboardlist": "Discussion Boards",
    "spdocumentlibrarylist": "Document Library",
    "filetype_spdocumentlibrarylist": "Document Library",
    "spevent": "Event",
    "filetype_spevent": "Event",
    "speventlist": "Events",
    "filetype_speventlist": "Events",
    "spformlibrarylist": "Form Library",
    "filetype_spformlibrarylist": "Form Library",
    "spissue": "Issue",
    "filetype_spissue": "Issue",
    "spissuelist": "Issues",
    "filetype_spissuelist": "Issues",
    "splink": "Link",
    "filetype_splink": "Link",
    "splinklist": "Links",
    "filetype_splinklist": "Links",
    "sppicturelibrarylist": "Picture Library",
    "filetype_sppicturelibrarylist": "Picture Library",
    "spsurvey": "Survey",
    "filetype_spsurvey": "Survey",
    "spsurveylist": "Surveys",
    "filetype_spsurveylist": "Surveys",
    "sptask": "Task",
    "filetype_sptask": "Task",
    "sptasklist": "Tasks",
    "filetype_sptasklist": "Tasks",
    "spagenda": "Agenda",
    "filetype_spagenda": "Agenda",
    "spagendalist": "Agendas",
    "filetype_spagendalist": "Agendas",
    "spattendee": "Attendee",
    "filetype_spattendee": "Attendee",
    "spattendeelist": "Attendees",
    "filetype_spattendeelist": "Attendees",
    "spcustomgridlist": "Custom Grids",
    "filetype_spcustomgridlist": "Custom Grids",
    "spdecision": "Decision",
    "filetype_spdecision": "Decision",
    "spdecisionlist": "Decisions",
    "filetype_spdecisionlist": "Decisions",
    "spobjective": "Objective",
    "filetype_spobjective": "Objective",
    "spobjectivelist": "Objectives",
    "filetype_spobjectivelist": "Objectives",
    "sptextbox": "Textbox",
    "filetype_sptextbox": "Textbox",
    "sptextboxlist": "Textbox list",
    "filetype_sptextboxlist": "Textbox list",
    "spthingstobring": "Thing To Bring",
    "filetype_spthingstobring": "Thing To Bring",
    "spthingstobringlist": "Things To Bring",
    "filetype_spthingstobringlist": "Things To Bring",
    "sparealisting": "Area Listing",
    "filetype_sparealisting": "Area Listing",
    "spmeetingserie": "Meeting series",
    "filetype_spmeetingserie": "Meeting series",
    "spmeetingserielist": "Meeting Series List",
    "filetype_spmeetingserielist": "Meeting Series List",
    "spsitedirectory": "Site Directory Item",
    "filetype_spsitedirectory": "Site Directory Item",
    "spsitedirectorylist": "Site Directory",
    "filetype_spsitedirectorylist": "Site Directory",
    "spdatasource": "Data Source",
    "filetype_spdatasource": "Data Source",
    "spdatasourcelist": "Data Source List",
    "filetype_spdatasourcelist": "Data Source List",
    "splisttemplatecataloglist": "List Template Gallery",
    "filetype_splisttemplatecataloglist": "List Template Gallery",
    "spwebpartcataloglist": "WebPart Gallery",
    "filetype_spwebpartcataloglist": "WebPart Gallery",
    "spwebtemplatecataloglist": "Site Template Gallery",
    "filetype_spwebtemplatecataloglist": "Site Template Gallery",
    "spworkspacepagelist": "Workspace Pages",
    "filetype_spworkspacepagelist": "Workspace Pages",
    "spunknownlist": "Custom List",
    "filetype_spunknownlist": "Custom List",
    "spadministratortask": "Administrator Task",
    "filetype_spadministratortask": "Administrator Task",
    "spadministratortasklist": "Administrator Tasks",
    "filetype_spadministratortasklist": "Administrator Tasks",
    "spareadocumentlibrarylist": "Area Document Library",
    "filetype_spareadocumentlibrarylist": "Area Document Library",
    "spblogcategory": "Blog Category",
    "filetype_spblogcategory": "Blog Category",
    "spblogcategorylist": "Blog Categories",
    "filetype_spblogcategorylist": "Blog Categories",
    "spblogcomment": "Blog Comment",
    "filetype_spblogcomment": "Blog Comment",
    "spblogcommentlist": "Blog Comments",
    "filetype_spblogcommentlist": "Blog Comments",
    "spblogpost": "Blog Post",
    "filetype_spblogpost": "Blog Post",
    "spblogpostlist": "Blog Posts",
    "filetype_spblogpostlist": "Blog Posts",
    "spdataconnectionlibrarylist": "Data Connection Library",
    "filetype_spdataconnectionlibrarylist": "Data Connection Library",
    "spdistributiongroup": "Distribution Group",
    "filetype_spdistributiongroup": "Distribution Group",
    "spdistributiongrouplist": "Distribution Groups",
    "filetype_spdistributiongrouplist": "Distribution Groups",
    "spipfslist": "InfoPath Forms Servers",
    "filetype_spipfslist": "InfoPath Forms Servers",
    "spkeyperformanceindicator": "Key Performance Indicator",
    "filetype_spkeyperformanceindicator": "Key Performance Indicator",
    "spkeyperformanceindicatorlist": "Key Performance Indicators",
    "filetype_spkeyperformanceindicatorlist": "Key Performance Indicators",
    "splanguagesandtranslator": "Languages and Translator",
    "filetype_splanguagesandtranslator": "Languages and Translator",
    "splanguagesandtranslatorlist": "Languages and Translators",
    "filetype_splanguagesandtranslatorlist": "Languages and Translators",
    "spmasterpagescataloglist": "Master Page Gallery",
    "filetype_spmasterpagescataloglist": "Master Page Gallery",
    "spnocodeworkflowlibrarylist": "No-code Workflow Libraries",
    "filetype_spnocodeworkflowlibrarylist": "No-code Workflow Libraries",
    "spprojecttask": "Project Task",
    "filetype_spprojecttask": "Project Task",
    "spprojecttasklist": "Project Tasks",
    "filetype_spprojecttasklist": "Project Tasks",
    "sppublishingpageslibrarylist": "Page Library",
    "filetype_sppublishingpageslibrarylist": "Page Library",
    "spreportdocumentlibrarylist": "Report Document Library",
    "filetype_spreportdocumentlibrarylist": "Report Document Library",
    "spreportlibrarylist": "Report Library",
    "filetype_spreportlibrarylist": "Report Library",
    "spslidelibrarylist": "Slide Library",
    "filetype_spslidelibrarylist": "Slide Library",
    "sptab": "Tabs",
    "filetype_sptab": "Tabs",
    "sptablist": "Tabs List",
    "filetype_sptablist": "Tabs List",
    "sptranslationmanagementlibrarylist": "Translation Management Library",
    "filetype_sptranslationmanagementlibrarylist": "Translation Management Library",
    "spuserinformation": "User Information",
    "filetype_spuserinformation": "User Information",
    "spuserinformationlist": "User Information List",
    "filetype_spuserinformationlist": "User Information List",
    "spwikipagelibrarylist": "Wiki Page Library",
    "filetype_spwikipagelibrarylist": "Wiki Page Library",
    "spworkflowhistory": "Workflow History",
    "filetype_spworkflowhistory": "Workflow History",
    "spworkflowhistorylist": "Workflow History List",
    "filetype_spworkflowhistorylist": "Workflow History List",
    "spworkflowprocess": "Custom Workflow Process",
    "filetype_spworkflowprocess": "Custom Workflow Process",
    "spworkflowprocesslist": "Custom Workflow Processes",
    "filetype_spworkflowprocesslist": "Custom Workflow Processes",
    "sppublishingimageslibrarylist": "Publishing Image Library",
    "filetype_sppublishingimageslibrarylist": "Publishing Image Library",
    "spcirculation": "Circulation",
    "filetype_spcirculation": "Circulation",
    "spcirculationlist": "Circulations",
    "filetype_spcirculationlist": "Circulations",
    "spdashboardslibrarylist": "Dashboards Library",
    "filetype_spdashboardslibrarylist": "Dashboards Library",
    "spdataconnectionforperformancepointlibrarylist": "PerformancePoint Data Connection Library",
    "filetype_spdataconnectionforperformancepointlibrarylist": "PerformancePoint Data Connection Library",
    "sphealthreport": "Health Report",
    "filetype_sphealthreport": "Health Report",
    "sphealthreportlist": "Health Reports",
    "filetype_sphealthreportlist": "Health Reports",
    "sphealthrule": "Health Rule",
    "filetype_sphealthrule": "Health Rule",
    "sphealthrulelist": "Health Rules",
    "filetype_sphealthrulelist": "Health Rules",
    "spimedictionary": "IME Dictionary",
    "filetype_spimedictionary": "IME Dictionary",
    "spimedictionarylist": "IME Dictionaries",
    "filetype_spimedictionarylist": "IME Dictionaries",
    "spperformancepointcontent": "PerformancePoint Content",
    "filetype_spperformancepointcontent": "PerformancePoint Content",
    "spperformancepointcontentlist": "PerformancePoint Contents",
    "filetype_spperformancepointcontentlist": "PerformancePoint Contents",
    "spphonecallmemo": "Phone Call Memo",
    "filetype_spphonecallmemo": "Phone Call Memo",
    "spphonecallmemolist": "Phone Call Memos",
    "filetype_spphonecallmemolist": "Phone Call Memos",
    "sprecordlibrarylist": "Record Library",
    "filetype_sprecordlibrarylist": "Record Library",
    "spresource": "Resource",
    "filetype_spresource": "Resource",
    "spresourcelist": "Resources",
    "filetype_spresourcelist": "Resources",
    "spprocessdiagramslibrarylist": "Process Diagram Library",
    "filetype_spprocessdiagramslibrarylist": "Process Diagram Library",
    "spsitethemeslibrarylist": "Site Theme Library",
    "filetype_spsitethemeslibrarylist": "Site Theme Library",
    "spsolutionslibrarylist": "Solution Library",
    "filetype_spsolutionslibrarylist": "Solution Library",
    "spwfpublibrarylist": "WFPUB Library",
    "filetype_spwfpublibrarylist": "WFPUB Library",
    "spwhereabout": "Whereabout",
    "filetype_spwhereabout": "Whereabout",
    "spwhereaboutlist": "Whereabouts",
    "filetype_spwhereaboutlist": "Whereabouts",
    "spdocumentlink": "Link to a Document",
    "filetype_spdocumentlink": "Link to a Document",
    "spdocumentset": "Document Set",
    "filetype_spdocumentset": "Document Set",
    "spmicrofeedpost": "Microfeed Post",
    "filetype_spmicrofeedpost": "Microfeed Post",
    "spmicrofeedlist": "Microfeed",
    "filetype_spmicrofeedlist": "Microfeed",
    "splistfolder": "List Folder",
    "filetype_splistfolder": "List Folder",
    "youtubevideo": "YouTube video",
    "filetype_youtubevideo": "YouTube video",
    "youtubeplaylistitem": "YouTube playlist item",
    "filetype_youtubeplaylistitem": "YouTube playlist item",
    "youtubeplaylist": "YouTube playlist",
    "filetype_youtubeplaylist": "YouTube playlist",
    "Unknown": "Unknown",
    "And": "AND",
    "Authenticating": "Authenticating {0}...",
    "Clear": "Clear {0}",
    "CompleteQuery": "Complete query",
    "Exclude": "Exclude {0}",
    "EnterTag": "Add Tag",
    "Next": "Next",
    "Last": "Last",
    "Link": "Link",
    "Or": "OR",
    "Previous": "Previous",
    "QueryDidntMatchAnyDocuments": "Your query did not match any documents.",
    "QueryException": "Your query has an error: {0}.",
    "Me": "Me",
    "Remove": "Remove",
    "Search": "Search",
    "SearchFor": "Search for {0}",
    "ShareQuery": "Share Query",
    "Preferences": "Preferences",
    "LinkOpeningSettings": "Link opening settings",
    "Reauthenticate": "Reauthenticate {0}",
    "ResultsFilteringExpression": "Results filtering expressions",
    "FiltersInYourPreferences": "Filters in your preferences",
    "Create": "Create",
    "SearchIn": "Search in {0}",
    "Seconds": "in {0} second<pl>s</pl>",
    "ShowingResultsOf": "Result<pl>s</pl> {0}<pl>-{1}</pl> of {2}",
    "ShowingResultsOfWithQuery": "Result<pl>s</pl> {0}<pl>-{1}</pl> of {2} for {3}",
    "SwitchTo": "Switch to {0}",
    "Unexclude": "Unexclude {0}",
    "ClearAllFilters": "Clear All Filters",
    "SkipLogin": "Skip login",
    "LoginInProgress": "Login in progress, please wait ...",
    "Login": "Log In",
    "GetStarted": "Get Started",
    "More": "More",
    "NMore": "{0} more...",
    "Less": "Fewer",
    "Settings": "Settings",
    "Score": "Score",
    "ScoreDescription": "The score is computed from the number of occurrences as well as from the position in the result set.",
    "Occurrences": "Occurrences",
    "OccurrencesDescription": "Sort by number of occurrences, with values having the highest number appearing first.",
    "Label": "Label",
    "Of": "of",
    "LabelDescription": "Sort alphabetically on the field values.",
    "Value": "Value",
    "ValueDescription": "Sort on the values of the first computed field",
    "AlphaAscending": "Value Ascending",
    "AlphaDescending": "Value Descending",
    "ChiSquare": "Chi Square",
    "Nosort": "No Sort",
    "NosortDescription": "Do not sort the values. The values will be returned in a random order.",
    "RelativeFrequency": "Relative Frequency",
    "RelativeFrequencyDescription": "Sort based on the relative frequency of values. Less common values will appear higher.",
    "DateDistribution": "Date distribution",
    "Custom": "Custom",
    "CustomDescription": "Sort based on a custom order",
    "ComputedField": "Computed Field",
    "Ascending": "Ascending",
    "Descending": "Descending",
    "noResultFor": "No results for {0}",
    "autoCorrectedQueryTo": "Query was automatically corrected to {0}",
    "didYouMean": "Did you mean: {0}",
    "SuggestedResults": "Suggested Results",
    "SuggestedQueries": "Suggested Queries",
    "MostRelevantItems": "Most relevant items:",
    "AllItems": "All items:",
    "ShowLess": "Show less",
    "ShowMore": "Show more",
    "HideFacet": "Hide Facet",
    "ShowFacet": "Show Facet",
    "AndOthers": "and {0} other<pl>s</pl>",
    "Others": "{0} other<pl>s</pl>",
    "MostRelevantPosts": "Most Relevant Posts:",
    "CompleteThread": "Complete Thread:",
    "ShowCompleteThread": "Show Complete Thread",
    "ShowOnlyTopMatchingPosts": "Show Only Top Matching Posts",
    "MostRelevantReplies": "Most Relevant Replies:",
    "AllConversation": "All Conversation:",
    "ShowAllConversation": "Show All Conversation",
    "ShowAllReplies": "Show All Replies",
    "ShowOnlyMostRelevantReplies": "Show Only Most Relevant Replies",
    "Close": "Close",
    "Open": "Open",
    "OpenInOutlookWhenPossible": "Open in Outlook (when possible)",
    "AlwaysOpenInNewWindow": "Always open results in new window",
    "Quickview": "Quick View",
    "NoQuickview": "The Quick View for this document is unavailable",
    "ErrorReport": "Error Report",
    "OopsError": "Something went wrong.",
    "ProblemPersists": "If the problem persists contact the administrator.",
    "GoBack": "Go Back",
    "Reset": "Reset",
    "Retry": "Retry",
    "MoreInfo": "More Information",
    "Username": "Username",
    "Password": "Password",
    "PostedBy": "Posted by",
    "CannotConnect": "Cannot connect to the server address.",
    "BadUserPass": "Password does not match with username.",
    "PleaseEnterYourCredentials": "Please enter your credentials for {0}.",
    "PleaseEnterYourSearchPage": "Please enter your search page URL",
    "Collapse": "Collapse",
    "Collapsable": "Collapsible",
    "Expand": "Expand",
    "Today": "Today",
    "Yesterday": "Yesterday",
    "Tomorrow": "Tomorrow",
    "Duration": "Duration: {0}",
    "IndexDuration": "Index Duration: {0}",
    "ProxyDuration": "Proxy Duration: {0}",
    "ClientDuration": "Client Duration: {0}",
    "Unavailable": "Unavailable",
    "Reply": "Reply",
    "ReplyAll": "Reply All",
    "Forward": "Forward",
    "From": "From",
    "Caption": "Caption",
    "Expression": "Expression",
    "Tab": "Tab",
    "Tabs": "Tabs",
    "EnterExpressionName": "Enter expression name",
    "EnterExpressionToFilterWith": "Enter expression to filter results with",
    "SelectTab": "Select Tab",
    "SelectAll": "Select All",
    "PageUrl": "Search page URL",
    "ErrorSavingToDevice": "Error while saving the information to your device",
    "ErrorReadingFromDevice": "Error while reading the information from your device",
    "AppIntro": "Speak with a product specialist who can answer your questions about Coveo and help you decide which Coveo solution is right for you. Or, try a live demo !",
    "TryDemo": "Try the demo",
    "ContactUs": "Contact us",
    "NewToCoveo": "New to Coveo?",
    "LetUsHelpGetStarted": "Let us help you get started",
    "LikesThis": "{0} like<sn>s</sn> this.",
    "CannotConnectSearchPage": "Cannot connect to your search page",
    "AreYouSureDeleteFilter": "Are you sure you want to delete the filter {0} with the expression {1}",
    "OnlineHelp": "Online Help",
    "Done": "Done",
    "SaveFacetState": "Save this facet state",
    "ClearFacetState": "Clear facet state",
    "DisplayingTheOnlyMessage": "Displaying the only message in this conversation",
    "NoNetworkConnection": "No network connection",
    "UnknownConnection": "Unknown connection",
    "EthernetConnection": "Ethernet connection",
    "WiFi": "WiFi connection",
    "CELL": "Cellular connection",
    "CELL_2G": "Cellular 2G connection",
    "CELL_3G": "Cellular 3G connection",
    "CELL_4G": "Cellular 4G connection",
    "Relevance": "Relevance",
    "Date": "Date",
    "Amount": "Amount",
    "QueryExceptionNoException": "No exception",
    "QueryExceptionInvalidSyntax": "Invalid syntax",
    "QueryExceptionInvalidCustomField": "Invalid custom field",
    "QueryExceptionInvalidDate": "Invalid date",
    "QueryExceptionInvalidExactPhrase": "Invalid exact phrase",
    "QueryExceptionInvalidDateOp": "Invalid date operator",
    "QueryExceptionInvalidNear": "Invalid NEAR operator",
    "QueryExceptionInvalidWeightedNear": "Invalid weighted NEAR",
    "QueryExceptionInvalidTerm": "Invalid term",
    "QueryExceptionTooManyTerms": "Too many terms",
    "QueryExceptionWildcardTooGeneral": "Wildcard too general",
    "QueryExceptionInvalidSortField": "Invalid sort field",
    "QueryExceptionInvalidSmallStringOp": "Invalid small string operator",
    "QueryExceptionRequestedResultsMax": "Requested results maximum",
    "QueryExceptionAggregatedMirrorDead": "Aggregated mirror is offline",
    "QueryExceptionAggregatedMirrorQueryTimeOut": "Aggregated mirror query timeout",
    "QueryExceptionAggregatedMirrorInvalidBuildNumber": "Aggregated mirror invalid build number",
    "QueryExceptionAggregatedMirrorCannotConnect": "Aggregated mirror cannot connect",
    "QueryExceptionNotEnoughLeadingCharsWildcard": "Not enough leading character wildcard",
    "QueryExceptionSecurityInverterNotFound": "Security inverter not found",
    "QueryExceptionSecurityInverterAccessDenied": "Security inverter access denied",
    "QueryExceptionAggregatedMirrorCannotImpersonate": "Aggregated mirror cannot impersonate",
    "QueryExceptionUnexpected": "Unexpected",
    "QueryExceptionAccessDenied": "Access denied",
    "QueryExceptionSuperUserTokenInvalid": "Super user token invalid",
    "QueryExceptionSuperUserTokenExpired": "Super user token is expired",
    "QueryExceptionLicenseQueriesExpired": "Queries license expired",
    "QueryExceptionLicenseSuperUserTokenNotSupported": "License super user token not supported",
    "QueryExceptionInvalidSession": "Invalid session",
    "QueryExceptionInvalidDocument": "Invalid document",
    "QueryExceptionSearchDisabled": "Search disabled",
    "FileType": "File type",
    "ShowAttachment": "Show attachment",
    "OnFeed": "on {0}'s feed.",
    "Author": "Author",
    "NoTitle": "No title",
    "CurrentSelections": "Current selections",
    "AllContent": "All content",
    "CancelLastAction": "Cancel last action",
    "SearchTips": "Search tips",
    "CheckSpelling": "Check the spelling of your keywords.",
    "TryUsingFewerKeywords": "Try using fewer, different or more general keywords.",
    "SelectFewerFilters": "Select fewer filters to broaden your search.",
    "Document": "Document",
    "Time": "Time",
    "StartDate": "Start Date",
    "StartTime": "Start Time",
    "DurationTitle": "Duration",
    "UserQuery": "User query",
    "ShowUserActions": "Show User Actions",
    "NoData": "No data available",
    "EventType": "Event type",
    "GoToFullSearch": "Full search",
    "GoToEdition": "Customize Panel",
    "RemoveContext": "Remove context",
    "BoxAttachToCase": "Attach to case",
    "AttachToCase": "Attach to case",
    "Attach": "Attach",
    "Attached": "Attached",
    "Detach": "Detach",
    "Details": "Details",
    "AdditionalFilters": "Additional filters",
    "SelectNonContextualSearch": "Remove the context from the current record to broaden your search",
    "CopyPasteToSupport": "Copy paste this message to the Coveo Support team for more information.",
    "FollowQueryDescription": "Alert me for changes to the search results of this query.",
    "SearchAlerts_Panel": "Manage Alerts",
    "SearchAlerts_PanelDescription": "View and manage your search alerts.",
    "SearchAlerts_PanelNoSearchAlerts": "You have no subscriptions.",
    "SearchAlerts_Fail": "The Search Alerts service is currently unavailable.",
    "SearchAlerts_Type": "Type",
    "SearchAlerts_Content": "Content",
    "SearchAlerts_Actions": "Action",
    "EmptyQuery": "<empty>",
    "SearchAlerts_Type_followQuery": "Query",
    "SearchAlerts_Type_followDocument": "Item",
    "SearchAlerts_unFollowing": "Stop Following",
    "SearchAlerts_follow": "Follow",
    "SearchAlerts_followed": "Followed",
    "SearchAlerts_followQuery": "Follow Query",
    "Subscription_StopFollowingQuery": "Stop Following Query",
    "SearchAlerts_Frequency": "When",
    "SubscriptionsManageSubscriptions": "Manage Alerts",
    "SubscriptionsMessageFollowQuery": "You will receive alerts when the query <b>{0}</b> returns new or updated items.",
    "SubscriptionsMessageFollow": "You will receive alerts for changes to the item <b>{0}</b>.",
    "Expiration": "Expiration",
    "Monthly": "Monthly",
    "Daily": "Daily",
    "Monday": "Monday",
    "Tuesday": "Tuesday",
    "Wednesday": "Wednesday",
    "Thursday": "Thursday",
    "Friday": "Friday",
    "Saturday": "Saturday",
    "Sunday": "Sunday",
    "NextDay": "Next {0}",
    "LastDay": "Last {0}",
    "StartTypingCaseForSuggestions": "Describe your problem to see possible solutions",
    "ExportToExcel": "Export to Excel",
    "ExportToExcelDescription": "Export search results to Excel",
    "CaseCreationNoResults": "No recommended solutions were found",
    "SortBy": "Sort by",
    "BoxCreateArticle": "Create Article",
    "Facets": "Facets",
    "AdvancedSearch": "Advanced Search",
    "Keywords": "Keywords",
    "AllTheseWords": "All these words",
    "ExactPhrase": "This exact phrase",
    "AnyOfTheseWords": "Any of these words",
    "NoneOfTheseWords": "None of these words",
    "Anytime": "Anytime",
    "InTheLast": "In the last",
    "Days": "days",
    "Months": "months",
    "Month": "Month",
    "Year": "Year",
    "Between": "Between",
    "Language": "Language",
    "Size": "Size",
    "AtLeast": "at least",
    "AtMost": "at most",
    "Contains": "contains",
    "DoesNotContain": "does not contain",
    "Matches": "matches",
    "Bytes": "bytes",
    "card": "Card",
    "table": "Table",
    "ResultLinks": "Result links",
    "EnableQuerySyntax": "Enable query syntax",
    "On": "On",
    "Off": "Off",
    "Automatic": "Automatic",
    "ResultsPerPage": "Results per page",
    "PreviousMonth": "Previous month",
    "NextMonth": "Next month",
    "Title": "Title",
    "FiltersInAdvancedSearch": "Filters in Advanced Search",
    "NoEndpoints": "{0} has no registered endpoints.",
    "InvalidToken": "The token used is invalid.",
    "AddSources": "You will need to add sources in your index, or wait for the created sources to finish indexing.",
    "TryAgain": "Please try again.",
    "CoveoOnlineHelp": "Coveo Online Help",
    "CannotAccess": "{0} cannot be accessed.",
    "CoveoOrganization": "Coveo Organization",
    "SearchAPIDuration": "Search API Duration: {0}",
    "LastUpdated": "Last updated",
    "AllDates": "All dates",
    "WithinLastDay": "Within last day",
    "WithinLastWeek": "Within last week",
    "WithinLastMonth": "Within last month",
    "WithinLastYear": "Within last year",
    "RelevanceInspector": "Relevance Inspector",
    "KeywordInCategory": "{0} in {1}",
    "ResultCount": "{0} results",
};
function defaultLanguage() {
    var locales = String["locales"] || (String["locales"] = {});
    locales["en"] = merge(locales["en"], dict);
    String["toLocaleString"].call(this, { "en": dict });
    String["locale"] = "en";
    String["defaultLocale"] = "en";
    Globalize.culture("en");
}
exports.defaultLanguage = defaultLanguage;
function setLanguageAfterPageLoaded() {
    var locales = String["locales"] || (String["locales"] = {});
    locales["en"] = merge(locales["en"], dict);
    String["toLocaleString"].call(this, { "en": dict });
    String["locale"] = "en";
    String["defaultLocale"] = "en";
    Globalize.culture("en");
}
exports.setLanguageAfterPageLoaded = setLanguageAfterPageLoaded;


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ExternalModulesShim_1 = __webpack_require__(23);
var _ = __webpack_require__(0);
String.toLocaleString = ExternalModulesShim_1.LocaleString;
var pluralRegex = /<pl>(((?!<\/pl>).)*)<\/pl>/g;
var singularRegex = /<sn>(((?!<\/sn>).)*)<\/sn>/g;
exports.L10N = {
    format: function (key) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var value = key.toLocaleString();
        // Try to find a soft match
        // These conditions check if there was a change in the string (meaning toLocaleString found a match). If there was no
        // match, try another format.
        if (value == key) {
            var tryTranslationInUpperCase = key.toUpperCase().toLocaleString();
            var tryTranslationInLowerCase = key.toLowerCase().toLocaleString();
            var tryTranslationAfterCapitalization = (key.charAt(0).toUpperCase() + key.toLowerCase().slice(1)).toLocaleString();
            if (tryTranslationInUpperCase != key.toUpperCase().toLocaleString()) {
                value = tryTranslationInUpperCase;
            }
            else if (tryTranslationInLowerCase != key.toLowerCase().toLocaleString()) {
                value = tryTranslationInLowerCase;
            }
            else if (tryTranslationAfterCapitalization != key.charAt(0).toUpperCase() + key.toLowerCase().slice(1)) {
                value = tryTranslationAfterCapitalization;
            }
        }
        if (args.length > 0) {
            var last = _.last(args);
            // Last argument is either the count or a boolean forcing plural (true) or singular (false)
            if (_.isBoolean(last) || _.isNumber(last)) {
                args.pop();
                value = exports.L10N.formatPlSn(value, last);
            }
            _.each(args, function (arg, i) { return (value = value.replace("{" + i + "}", arg)); });
        }
        else {
            // If there was no parameters passed, we try to cleanup the possible parameters in the translated string.
            value = value.replace(/{[0-9]}|<pl>[a-zA-Z]+<\/pl>|<sn>|<\/sn>/g, '').trim();
        }
        return value;
    },
    formatPlSn: function (value, count) {
        var isPlural = _.isBoolean(count) ? count : count > 1;
        if (isPlural) {
            value = value.replace(pluralRegex, '$1').replace(singularRegex, '');
        }
        else {
            value = value.replace(pluralRegex, '').replace(singularRegex, '$1');
        }
        return value;
    }
};


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var Logger_1 = __webpack_require__(11);
var EndpointCaller_1 = __webpack_require__(64);
var Assert_1 = __webpack_require__(5);
var CookieUtils_1 = __webpack_require__(66);
var _ = __webpack_require__(0);
var Utils_1 = __webpack_require__(4);
var UrlUtils_1 = __webpack_require__(42);
var AnalyticsEndpoint = /** @class */ (function () {
    function AnalyticsEndpoint(options) {
        this.options = options;
        this.logger = new Logger_1.Logger(this);
        var endpointCallerOptions = {
            accessToken: this.options.accessToken.token
        };
        this.endpointCaller = new EndpointCaller_1.EndpointCaller(endpointCallerOptions);
        this.organization = options.organization;
    }
    AnalyticsEndpoint.prototype.getCurrentVisitId = function () {
        return this.visitId;
    };
    AnalyticsEndpoint.prototype.getCurrentVisitIdPromise = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this.getCurrentVisitId()) {
                resolve(_this.getCurrentVisitId());
            }
            else {
                var url = _this.buildAnalyticsUrl('/analytics/visit');
                _this.getFromService(url, {})
                    .then(function (response) {
                    _this.visitId = response.id;
                    resolve(_this.visitId);
                })
                    .catch(function (response) {
                    reject(response);
                });
            }
        });
    };
    AnalyticsEndpoint.prototype.sendSearchEvents = function (searchEvents) {
        if (searchEvents.length > 0) {
            this.logger.info('Logging analytics search events', searchEvents);
            return this.sendToService(searchEvents, 'searches', 'searchEvents');
        }
    };
    AnalyticsEndpoint.prototype.sendDocumentViewEvent = function (documentViewEvent) {
        Assert_1.Assert.exists(documentViewEvent);
        this.logger.info('Logging analytics document view', documentViewEvent);
        return this.sendToService(documentViewEvent, 'click', 'clickEvent');
    };
    AnalyticsEndpoint.prototype.sendCustomEvent = function (customEvent) {
        Assert_1.Assert.exists(customEvent);
        this.logger.info('Logging analytics custom event', customEvent);
        return this.sendToService(customEvent, 'custom', 'customEvent');
    };
    AnalyticsEndpoint.prototype.getTopQueries = function (params) {
        var url = this.buildAnalyticsUrl('/stats/topQueries');
        return this.getFromService(url, params);
    };
    AnalyticsEndpoint.prototype.sendToService = function (data, path, paramName) {
        return __awaiter(this, void 0, void 0, function () {
            var versionToCall, urlNormalized, request, results, error_1, successfullyRenewed;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        versionToCall = AnalyticsEndpoint.CUSTOM_ANALYTICS_VERSION || AnalyticsEndpoint.DEFAULT_ANALYTICS_VERSION;
                        urlNormalized = UrlUtils_1.UrlUtils.normalizeAsParts({
                            paths: [this.options.serviceUrl, '/rest/', versionToCall, '/analytics/', path],
                            query: {
                                org: this.organization,
                                visitorId: CookieUtils_1.Cookie.get('visitorId')
                            }
                        });
                        if (!(AnalyticsEndpoint.pendingRequest != null)) return [3 /*break*/, 4];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, , 3, 4]);
                        return [4 /*yield*/, AnalyticsEndpoint.pendingRequest];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3: return [2 /*return*/, this.sendToService(data, path, paramName)];
                    case 4:
                        request = (AnalyticsEndpoint.pendingRequest = this.endpointCaller.call({
                            errorsAsSuccess: false,
                            method: 'POST',
                            queryString: urlNormalized.queryNormalized,
                            requestData: data,
                            url: urlNormalized.path,
                            responseType: 'text',
                            requestDataType: 'application/json'
                        }));
                        _a.label = 5;
                    case 5:
                        _a.trys.push([5, 7, , 10]);
                        return [4 /*yield*/, request];
                    case 6:
                        results = _a.sent();
                        AnalyticsEndpoint.pendingRequest = null;
                        this.handleAnalyticsEventResponse(results.data);
                        return [2 /*return*/, results.data];
                    case 7:
                        error_1 = _a.sent();
                        AnalyticsEndpoint.pendingRequest = null;
                        if (!this.options.accessToken.isExpired(error_1)) return [3 /*break*/, 9];
                        return [4 /*yield*/, this.options.accessToken.doRenew()];
                    case 8:
                        successfullyRenewed = _a.sent();
                        if (successfullyRenewed) {
                            return [2 /*return*/, this.sendToService(data, path, paramName)];
                        }
                        _a.label = 9;
                    case 9: throw error_1;
                    case 10: return [2 /*return*/];
                }
            });
        });
    };
    AnalyticsEndpoint.prototype.getFromService = function (url, params) {
        var paramsToSend = __assign({}, params, { access_token: this.options.accessToken.token });
        return this.endpointCaller
            .call({
            errorsAsSuccess: false,
            method: 'GET',
            queryString: this.options.organization ? ['org=' + Utils_1.Utils.safeEncodeURIComponent(this.options.organization)] : [],
            requestData: paramsToSend,
            responseType: 'json',
            url: url
        })
            .then(function (res) {
            return res.data;
        });
    };
    AnalyticsEndpoint.prototype.handleAnalyticsEventResponse = function (response) {
        var visitId;
        var visitorId;
        if (response['visitId']) {
            visitId = response['visitId'];
            visitorId = response['visitorId'];
        }
        else if (response['searchEventResponses']) {
            visitId = _.first(response['searchEventResponses']).visitId;
            visitorId = _.first(response['searchEventResponses']).visitorId;
        }
        if (visitId) {
            this.visitId = visitId;
        }
        if (visitorId) {
            CookieUtils_1.Cookie.set('visitorId', visitorId, AnalyticsEndpoint.VISITOR_COOKIE_TIME);
        }
        return response;
    };
    AnalyticsEndpoint.prototype.buildAnalyticsUrl = function (path) {
        return UrlUtils_1.UrlUtils.normalizeAsString({
            paths: [
                this.options.serviceUrl,
                '/rest/',
                AnalyticsEndpoint.CUSTOM_ANALYTICS_VERSION || AnalyticsEndpoint.DEFAULT_ANALYTICS_VERSION,
                path
            ]
        });
    };
    AnalyticsEndpoint.DEFAULT_ANALYTICS_URI = 'https://usageanalytics.coveo.com';
    AnalyticsEndpoint.DEFAULT_ANALYTICS_VERSION = 'v15';
    AnalyticsEndpoint.CUSTOM_ANALYTICS_VERSION = undefined;
    AnalyticsEndpoint.VISITOR_COOKIE_TIME = 10000 * 24 * 60 * 60 * 1000;
    return AnalyticsEndpoint;
}());
exports.AnalyticsEndpoint = AnalyticsEndpoint;


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Assert_1 = __webpack_require__(5);
var InitializationEvents_1 = __webpack_require__(15);
var Dom_1 = __webpack_require__(2);
var HashUtils_1 = __webpack_require__(36);
var Defer_1 = __webpack_require__(28);
var RootComponent_1 = __webpack_require__(34);
var Utils_1 = __webpack_require__(4);
var _ = __webpack_require__(0);
var QueryStateModel_1 = __webpack_require__(12);
var AnalyticsActionListMeta_1 = __webpack_require__(9);
var SharedAnalyticsCalls_1 = __webpack_require__(81);
var Model_1 = __webpack_require__(16);
/**
 * This component is instantiated automatically by the framework on the root if the {@link SearchInterface}.<br/>
 * When the {@link SearchInterface.options.enableHistory} option is set to true, this component is instantiated.<br/>
 * It's only job is to apply changes in the {@link QueryStateModel} to the hash in the URL, and vice versa.<br/>
 * This component does *not* hold the state of the interface, it only represent it in the URL.
 */
var HistoryController = /** @class */ (function (_super) {
    __extends(HistoryController, _super);
    /**
     * Create a new HistoryController
     * @param element
     * @param window
     * @param queryStateModel
     * @param queryController
     * @param usageAnalytics
     */
    function HistoryController(element, window, queryStateModel, queryController, usageAnalytics) {
        var _this = _super.call(this, element, HistoryController.ID) || this;
        _this.window = window;
        _this.queryStateModel = queryStateModel;
        _this.queryController = queryController;
        _this.usageAnalytics = usageAnalytics;
        _this.ignoreNextHashChange = false;
        _this.initialHashChange = false;
        _this.willUpdateHash = false;
        Assert_1.Assert.exists(_this.queryStateModel);
        Assert_1.Assert.exists(_this.queryController);
        Dom_1.$$(_this.element).on(InitializationEvents_1.InitializationEvents.restoreHistoryState, function () {
            _this.logger.trace('Restore history state. Update model');
            _this.updateModelFromHash();
            _this.lastState = _this.queryStateModel.getAttributes();
        });
        Dom_1.$$(_this.element).on(_this.queryStateModel.getEventName(Model_1.Model.eventTypes.all), function () {
            _this.logger.trace('Query model changed. Update hash');
            _this.updateHashFromModel();
        });
        _this.hashchange = function () {
            _this.handleHashChange();
            _this.lastState = _this.queryStateModel.getAttributes();
        };
        _this.window.addEventListener('hashchange', _this.hashchange);
        Dom_1.$$(_this.element).on(InitializationEvents_1.InitializationEvents.nuke, function () { return _this.handleNuke(); });
        return _this;
    }
    Object.defineProperty(HistoryController.prototype, "hashUtils", {
        get: function(){}