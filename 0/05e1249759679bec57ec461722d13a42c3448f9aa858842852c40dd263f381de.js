/*! UIkit 3.2.1 | http://www.getuikit.com | (c) 2014 - 2019 YOOtheme | MIT License */

(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define('uikit', factory) :
    (global = global || self, global.UIkit = factory());
}(this, function () { 'use strict';

    var objPrototype = Object.prototype;
    var hasOwnProperty = objPrototype.hasOwnProperty;

    function hasOwn(obj, key) {
        return hasOwnProperty.call(obj, key);
    }

    var hyphenateCache = {};
    var hyphenateRe = /([a-z\d])([A-Z])/g;

    function hyphenate(str) {

        if (!(str in hyphenateCache)) {
            hyphenateCache[str] = str
                .replace(hyphenateRe, '$1-$2')
                .toLowerCase();
        }

        return hyphenateCache[str];
    }

    var camelizeRe = /-(\w)/g;

    function camelize(str) {
        return str.replace(camelizeRe, toUpper);
    }

    function toUpper(_, c) {
        return c ? c.toUpperCase() : '';
    }

    function ucfirst(str) {
        return str.length ? toUpper(null, str.charAt(0)) + str.slice(1) : '';
    }

    var strPrototype = String.prototype;
    var startsWithFn = strPrototype.startsWith || function (search) { return this.lastIndexOf(search, 0) === 0; };

    function startsWith(str, search) {
        return startsWithFn.call(str, search);
    }

    var endsWithFn = strPrototype.endsWith || function (search) { return this.substr(-search.length) === search; };

    function endsWith(str, search) {
        return endsWithFn.call(str, search);
    }

    var arrPrototype = Array.prototype;

    var includesFn = function (search, i) { return ~this.indexOf(search, i); };
    var includesStr = strPrototype.includes || includesFn;
    var includesArray = arrPrototype.includes || includesFn;

    function includes(obj, search) {
        return obj && (isString(obj) ? includesStr : includesArray).call(obj, search);
    }

    var findIndexFn = arrPrototype.findIndex || function (predicate) {
        var arguments$1 = arguments;

        for (var i = 0; i < this.length; i++) {
            if (predicate.call(arguments$1[1], this[i], i, this)) {
                return i;
            }
        }
        return -1;
    };

    function findIndex(array, predicate) {
        return findIndexFn.call(array, predicate);
    }

    var isArray = Array.isArray;

    function isFunction(obj) {
        return typeof obj === 'function';
    }

    function isObject(obj) {
        return obj !== null && typeof obj === 'object';
    }

    var toString = objPrototype.toString;
    function isPlainObject(obj) {
        return toString.call(obj) === '[object Object]';
    }

    function isWindow(obj) {
        return isObject(obj) && obj === obj.window;
    }

    function isDocument(obj) {
        return isObject(obj) && obj.nodeType === 9;
    }

    function isJQuery(obj) {
        return isObject(obj) && !!obj.jquery;
    }

    function isNode(obj) {
        return obj instanceof Node || isObject(obj) && obj.nodeType >= 1;
    }

    function isNodeCollection(obj) {
        return toString.call(obj).match(/^\[object (NodeList|HTMLCollection)\]$/);
    }

    function isBoolean(value) {
        return typeof value === 'boolean';
    }

    function isString(value) {
        return typeof value === 'string';
    }

    function isNumber(value) {
        return typeof value === 'number';
    }

    function isNumeric(value) {
        return isNumber(value) || isString(value) && !isNaN(value - parseFloat(value));
    }

    function isEmpty(obj) {
        return !(isArray(obj)
            ? obj.length
            : isObject(obj)
                ? Object.keys(obj).length
                : false
        );
    }

    function isUndefined(value) {
        return value === void 0;
    }

    function toBoolean(value) {
        return isBoolean(value)
            ? value
            : value === 'true' || value === '1' || value === ''
                ? true
                : value === 'false' || value === '0'
                    ? false
                    : value;
    }

    function toNumber(value) {
        var number = Number(value);
        return !isNaN(number) ? number : false;
    }

    function toFloat(value) {
        return parseFloat(value) || 0;
    }

    function toNode(element) {
        return isNode(element) || isWindow(element) || isDocument(element)
            ? element
            : isNodeCollection(element) || isJQuery(element)
                ? element[0]
                : isArray(element)
                    ? toNode(element[0])
                    : null;
    }

    function toNodes(element) {
        return isNode(element)
            ? [element]
            : isNodeCollection(element)
                ? arrPrototype.slice.call(element)
                : isArray(element)
                    ? element.map(toNode).filter(Boolean)
                    : isJQuery(element)
                        ? element.toArray()
                        : [];
    }

    function toList(value) {
        return isArray(value)
            ? value
            : isString(value)
                ? value.split(/,(?![^(]*\))/).map(function (value) { return isNumeric(value)
                    ? toNumber(value)
                    : toBoolean(value.trim()); })
                : [value];
    }

    function toMs(time) {
        return !time
            ? 0
            : endsWith(time, 'ms')
                ? toFloat(time)
                : toFloat(time) * 1000;
    }

    function isEqual(value, other) {
        return value === other
            || isObject(value)
            && isObject(other)
            && Object.keys(value).length === Object.keys(other).length
            && each(value, function (val, key) { return val === other[key]; });
    }

    function swap(value, a, b) {
        return value.replace(new RegExp((a + "|" + b), 'mg'), function (match) {
            return match === a ? b : a;
        });
    }

    var assign = Object.assign || function (target) {
        var args = [], len = arguments.length - 1;
        while ( len-- > 0 ) args[ len ] = arguments[ len + 1 ];

        target = Object(target);
        for (var i = 0; i < args.length; i++) {
            var source = args[i];
            if (source !== null) {
                for (var key in source) {
                    if (hasOwn(source, key)) {
                        target[key] = source[key];
                    }
                }
            }
        }
        return target;
    };

    function last(array) {
        return array[array.length - 1];
    }

    function each(obj, cb) {
        for (var key in obj) {
            if (false === cb(obj[key], key)) {
                return false;
            }
        }
        return true;
    }

    function sortBy(array, prop) {
        return array.sort(function (ref, ref$1) {
                var propA = ref[prop]; if ( propA === void 0 ) propA = 0;
                var propB = ref$1[prop]; if ( propB === void 0 ) propB = 0;

                return propA > propB
                ? 1
                : propB > propA
                    ? -1
                    : 0;
        }
        );
    }

    function uniqueBy(array, prop) {
        var seen = new Set();
        return array.filter(function (ref) {
            var check = ref[prop];

            return seen.has(check)
            ? false
            : seen.add(check) || true;
        } // IE 11 does not return the Set object
        );
    }

    function clamp(number, min, max) {
        if ( min === void 0 ) min = 0;
        if ( max === void 0 ) max = 1;

        return Math.min(Math.max(toNumber(number) || 0, min), max);
    }

    function noop() {}

    function intersectRect(r1, r2) {
        return r1.left < r2.right &&
            r1.right > r2.left &&
            r1.top < r2.bottom &&
            r1.bottom > r2.top;
    }

    function pointInRect(point, rect) {
        return point.x <= rect.right &&
            point.x >= rect.left &&
            point.y <= rect.bottom &&
            point.y >= rect.top;
    }

    var Dimensions = {

        ratio: function(dimensions, prop, value) {
            var obj;


            var aProp = prop === 'width' ? 'height' : 'width';

            return ( obj = {}, obj[aProp] = dimensions[prop] ? Math.round(value * dimensions[aProp] / dimensions[prop]) : dimensions[aProp], obj[prop] = value, obj );
        },

        contain: function(dimensions, maxDimensions) {
            var this$1 = this;

            dimensions = assign({}, dimensions);

            each(dimensions, function (_, prop) { return dimensions = dimensions[prop] > maxDimensions[prop]
                ? this$1.ratio(dimensions, prop, maxDimensions[prop])
                : dimensions; }
            );

            return dimensions;
        },

        cover: function(dimensions, maxDimensions) {
            var this$1 = this;

            dimensions = this.contain(dimensions, maxDimensions);

            each(dimensions, function (_, prop) { return dimensions = dimensions[prop] < maxDimensions[prop]
                ? this$1.ratio(dimensions, prop, maxDimensions[prop])
                : dimensions; }
            );

            return dimensions;
        }

    };

    function attr(element, name, value) {

        if (isObject(name)) {
            for (var key in name) {
                attr(element, key, name[key]);
            }
            return;
        }

        if (isUndefined(value)) {
            element = toNode(element);
            return element && element.getAttribute(name);
        } else {
            toNodes(element).forEach(function (element) {

                if (isFunction(value)) {
                    value = value.call(element, attr(element, name));
                }

                if (value === null) {
                    removeAttr(element, name);
                } else {
                    element.setAttribute(name, value);
                }
            });
        }

    }

    function hasAttr(element, name) {
        return toNodes(element).some(function (element) { return element.hasAttribute(name); });
    }

    function removeAttr(element, name) {
        element = toNodes(element);
        name.split(' ').forEach(function (name) { return element.forEach(function (element) { return element.hasAttribute(name) && element.removeAttribute(name); }
            ); }
        );
    }

    function data(element, attribute) {
        for (var i = 0, attrs = [attribute, ("data-" + attribute)]; i < attrs.length; i++) {
            if (hasAttr(element, attrs[i])) {
                return attr(element, attrs[i]);
            }
        }
    }

    /* global DocumentTouch */

    var isIE = /msie|trident/i.test(window.navigator.userAgent);
    var isRtl = attr(document.documentElement, 'dir') === 'rtl';

    var hasTouchEvents = 'ontouchstart' in window;
    var hasPointerEvents = window.PointerEvent;
    var hasTouch = hasTouchEvents
        || window.DocumentTouch && document instanceof DocumentTouch
        || navigator.maxTouchPoints; // IE >=11

    var pointerDown = hasPointerEvents ? 'pointerdown' : hasTouchEvents ? 'touchstart' : 'mousedown';
    var pointerMove = hasPointerEvents ? 'pointermove' : hasTouchEvents ? 'touchmove' : 'mousemove';
    var pointerUp = hasPointerEvents ? 'pointerup' : hasTouchEvents ? 'touchend' : 'mouseup';
    var pointerEnter = hasPointerEvents ? 'pointerenter' : hasTouchEvents ? '' : 'mouseenter';
    var pointerLeave = hasPointerEvents ? 'pointerleave' : hasTouchEvents ? '' : 'mouseleave';
    var pointerCancel = hasPointerEvents ? 'pointercancel' : 'touchcancel';

    function query(selector, context) {
        return toNode(selector) || find(selector, getContext(selector, context));
    }

    function queryAll(selector, context) {
        var nodes = toNodes(selector);
        return nodes.length && nodes || findAll(selector, getContext(selector, context));
    }

    function getContext(selector, context) {
        if ( context === void 0 ) context = document;

        return isContextSelector(selector) || isDocument(context)
            ? context
            : context.ownerDocument;
    }

    function find(selector, context) {
        return toNode(_query(selector, context, 'querySelector'));
    }

    function findAll(selector, context) {
        return toNodes(_query(selector, context, 'querySelectorAll'));
    }

    function _query(selector, context, queryFn) {
        if ( context === void 0 ) context = document;


        if (!selector || !isString(selector)) {
            return null;
        }

        selector = selector.replace(contextSanitizeRe, '$1 *');

        var removes;

        if (isContextSelector(selector)) {

            removes = [];

            selector = splitSelector(selector).map(function (selector, i) {

                var ctx = context;

                if (selector[0] === '!') {

                    var selectors = selector.substr(1).trim().split(' ');
                    ctx = closest(context.parentNode, selectors[0]);
                    selector = selectors.slice(1).join(' ').trim();

                }

                if (selector[0] === '-') {

                    var selectors$1 = selector.substr(1).trim().split(' ');
                    var prev = (ctx || context).previousElementSibling;
                    ctx = matches(prev, selector.substr(1)) ? prev : null;
                    selector = selectors$1.slice(1).join(' ');

                }

                if (!ctx) {
                    return null;
                }

                if (!ctx.id) {
                    ctx.id = "uk-" + (Date.now()) + i;
                    removes.push(function () { return removeAttr(ctx, 'id'); });
                }

                return ("#" + (escape(ctx.id)) + " " + selector);

            }).filter(Boolean).join(',');

            context = document;

        }

        try {

            return context[queryFn](selector);

        } catch (e) {

            return null;

        } finally {

            removes && removes.forEach(function (remove) { return remove(); });

        }

    }

    var contextSelectorRe = /(^|[^\\],)\s*[!>+~-]/;
    var contextSanitizeRe = /([!>+~-])(?=\s+[!>+~-]|\s*$)/g;

    function isContextSelector(selector) {
        return isString(selector) && selector.match(contextSelectorRe);
    }

    var selectorRe = /.*?[^\\](?:,|$)/g;

    function splitSelector(selector) {
        return selector.match(selectorRe).map(function (selector) { return selector.replace(/,$/, '').trim(); });
    }

    var elProto = Element.prototype;
    var matchesFn = elProto.matches || elProto.webkitMatchesSelector || elProto.msMatchesSelector;

    function matches(element, selector) {
        return toNodes(element).some(function (element) { return matchesFn.call(element, selector); });
    }

    var closestFn = elProto.closest || function (selector) {
        var ancestor = this;

        do {

            if (matches(ancestor, selector)) {
                return ancestor;
            }

            ancestor = ancestor.parentNode;

        } while (ancestor && ancestor.nodeType === 1);
    };

    function closest(element, selector) {

        if (startsWith(selector, '>')) {
            selector = selector.slice(1);
        }

        return isNode(element)
            ? closestFn.call(element, selector)
            : toNodes(element).map(function (element) { return closest(element, selector); }).filter(Boolean);
    }

    function parents(element, selector) {
        var elements = [];
        element = toNode(element);

        while ((element = element.parentNode) && element.nodeType === 1) {
            if (matches(element, selector)) {
                elements.push(element);
            }
        }

        return elements;
    }

    var escapeFn = window.CSS && CSS.escape || function (css) { return css.replace(/([^\x7f-\uFFFF\w-])/g, function (match) { return ("\\" + match); }); };
    function escape(css) {
        return isString(css) ? escapeFn.call(null, css) : '';
    }

    var voidElements = {
        area: true,
        base: true,
        br: true,
        col: true,
        embed: true,
        hr: true,
        img: true,
        input: true,
        keygen: true,
        link: true,
        menuitem: true,
        meta: true,
        param: true,
        source: true,
        track: true,
        wbr: true
    };
    function isVoidElement(element) {
        return toNodes(element).some(function (element) { return voidElements[element.tagName.toLowerCase()]; });
    }

    function isVisible(element) {
        return toNodes(element).some(function (element) { return element.offsetWidth || element.offsetHeight || element.getClientRects().length; });
    }

    var selInput = 'input,select,textarea,button';
    function isInput(element) {
        return toNodes(element).some(function (element) { return matches(element, selInput); });
    }

    function filter(element, selector) {
        return toNodes(element).filter(function (element) { return matches(element, selector); });
    }

    function within(element, selector) {
        return !isString(selector)
            ? element === selector || (isDocument(selector)
                ? selector.documentElement
                : toNode(selector)).contains(toNode(element)) // IE 11 document does not implement contains
            : matches(element, selector) || closest(element, selector);
    }

    function on() {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];


        var ref = getArgs(args);
        var targets = ref[0];
        var type = ref[1];
        var selector = ref[2];
        var listener = ref[3];
        var useCapture = ref[4];

        targets = toEventTargets(targets);

        if (listener.length > 1) {
            listener = detail(listener);
        }

        if (selector) {
            listener = delegate(targets, selector, listener);
        }

        if (useCapture && useCapture.self) {
            listener = selfFilter(listener);
        }

        useCapture = useCaptureFilter(useCapture);

        type.split(' ').forEach(function (type) { return targets.forEach(function (target) { return target.addEventListener(type, listener, useCapture); }
            ); }
        );
        return function () { return off(targets, type, listener, useCapture); };
    }

    function off(targets, type, listener, useCapture) {
        if ( useCapture === void 0 ) useCapture = false;

        useCapture = useCaptureFilter(useCapture);
        targets = toEventTargets(targets);
        type.split(' ').forEach(function (type) { return targets.forEach(function (target) { return target.removeEventListener(type, listener, useCapture); }
            ); }
        );
    }

    function once() {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];


        var ref = getArgs(args);
        var element = ref[0];
        var type = ref[1];
        var selector = ref[2];
        var listener = ref[3];
        var useCapture = ref[4];
        var condition = ref[5];
        var off = on(element, type, selector, function (e) {
            var result = !condition || condition(e);
            if (result) {
                off();
                listener(e, result);
            }
        }, useCapture);

        return off;
    }

    function trigger(targets, event, detail) {
        return toEventTargets(targets).reduce(function (notCanceled, target) { return notCanceled && target.dispatchEvent(createEvent(event, true, true, detail)); }
            , true);
    }

    function createEvent(e, bubbles, cancelable, detail) {
        if ( bubbles === void 0 ) bubbles = true;
        if ( cancelable === void 0 ) cancelable = false;

        if (isString(e)) {
            var event = document.createEvent('CustomEvent'); // IE 11
            event.initCustomEvent(e, bubbles, cancelable, detail);
            e = event;
        }

        return e;
    }

    function getArgs(args) {
        if (isFunction(args[2])) {
            args.splice(2, 0, false);
        }
        return args;
    }

    function delegate(delegates, selector, listener) {
        var this$1 = this;

        return function (e) {

            delegates.forEach(function (delegate) {

                var current = selector[0] === '>'
                    ? findAll(selector, delegate).reverse().filter(function (element) { return within(e.target, element); })[0]
                    : closest(e.target, selector);

                if (current) {
                    e.delegate = delegate;
                    e.current = current;

                    listener.call(this$1, e);
                }

            });

        };
    }

    function detail(listener) {
        return function (e) { return isArray(e.detail) ? listener.apply(void 0, [e].concat(e.detail)) : listener(e); };
    }

    function selfFilter(listener) {
        return function (e) {
            if (e.target === e.currentTarget || e.target === e.current) {
                return listener.call(null, e);
            }
        };
    }

    function useCaptureFilter(options) {
        return options && isIE && !isBoolean(options)
            ? !!options.capture
            : options;
    }

    function isEventTarget(target) {
        return target && 'addEventListener' in target;
    }

    function toEventTarget(target) {
        return isEventTarget(target) ? target : toNode(target);
    }

    function toEventTargets(target) {
        return isArray(target)
                ? target.map(toEventTarget).filter(Boolean)
                : isString(target)
                    ? findAll(target)
                    : isEventTarget(target)
                        ? [target]
                        : toNodes(target);
    }

    function isTouch(e) {
        return e.pointerType === 'touch' || !!e.touches;
    }

    function getEventPos(e, prop) {
        if ( prop === void 0 ) prop = 'client';

        var touches = e.touches;
        var changedTouches = e.changedTouches;
        var ref = touches && touches[0] || changedTouches && changedTouches[0] || e;
        var x = ref[(prop + "X")];
        var y = ref[(prop + "Y")];

        return {x: x, y: y};
    }

    /* global setImmediate */

    var Promise = 'Promise' in window ? window.Promise : PromiseFn;

    var Deferred = function(){}