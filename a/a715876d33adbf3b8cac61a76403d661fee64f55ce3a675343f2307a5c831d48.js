!function(t,e){"object"===typeof exports&&"object"===typeof module?module.exports=e(require("Vue")):"function"===typeof define&&define.amd?define(["Vue"],e):"object"===typeof exports?exports["base-tools-nph-strategy"]=e(require("Vue")):t.baseToolsNphStrategy=e(t.Vue)}(window,(function(t){return function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="./",n(n.s=7)}([function(t,e,n){t.exports=n(4)},function(e,n){e.exports=t},function(t,e){var n=location.origin+location.pathname,o=function(t){return void 0!=t&&""!=t&&r(document.cookie,t,";","")},r=function(t,e,n,o){if(""==t)return"";e+=o=""==o?"=":o;var r=t.indexOf(e);if(r<0)return"";r+=e.length;var i=t.indexOf(n,r);return i<r&&(i=t.length),t.substring(r,i)};t.exports={collectData:function(){var t=navigator.connection||navigator.mozConnection||navigator.webkitConnection,e="UNKNOW";return t&&(e=t.type||t.effectiveType||e),{connection:t,platform:navigator.platform,urlCutQueryString:n,href:location.href,useragent:navigator.userAgent,ustat:o("ustat")||""}},getCookie:o,handleResponse:function(t){var e=t.ids,n=t.response,o=void 0===n?{}:n,r=t.type,i=[],a={};return e.forEach((function(t){var e=o.hit&&o.hit[t];if(e){var n="gk"===r?e.rs:e;i.push(n),a[t]=n}else i.push(void 0)})),{ary:i,obj:a}},handleResult:function(t,e,n){t.length?e(null,t):e(new Error("".concat(n,"id not matched")))}}},function(t){t.exports=JSON.parse('{"name":"@mfelibs/base-tools-nph-strategy","version":"1.1.29-beta.4","main":"src/index.js","author":"liyan32 <liyan32@staff.sina.com.cn>","scripts":{"build":"marax lib","demo":"marax build","test":"marax test","dev":"marax dev","postpublish":"marax hook postpublish","prepublishOnly":"npm run build"},"dependencies":{"@mfelibs/base-common-tools":"^1.0.8","@mfelibs/base-tools-exposure":"2.0.0","@mfelibs/base-tools-gongbu":"^1.2.3","@mfelibs/snc_console":"^0.2.0","@mfelibs/universal-framework":"^0.3.242","qrcode":"^1.4.4","vue":"^2.6.12","vue-property-decorator":"^8.4.2"},"devDependencies":{"@mara/x":"^2.10.0","vue-template-compiler":"^2.6.12"},"eslintConfig":{"extends":"eslint-config-sinamfe"}}')},function(t,e,n){var o=function(t){"use strict";var e=Object.prototype,n=e.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},r=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",a=o.toStringTag||"@@toStringTag";function s(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(D){s=function(t,e,n){return t[e]=n}}function c(t,e,n,o){var r=e&&e.prototype instanceof d?e:d,i=Object.create(r.prototype),a=new C(o||[]);return i._invoke=function(t,e,n){var o="suspendedStart";return function(r,i){if("executing"===o)throw new Error("Generator is already running");if("completed"===o){if("throw"===r)throw i;return O()}for(n.method=r,n.arg=i;;){var a=n.delegate;if(a){var s=b(a,n);if(s){if(s===u)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===o)throw o="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o="executing";var c=l(t,e,n);if("normal"===c.type){if(o=n.done?"completed":"suspendedYield",c.arg===u)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(o="completed",n.method="throw",n.arg=c.arg)}}}(t,n,a),i}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(D){return{type:"throw",arg:D}}}t.wrap=c;var u={};function d(){}function f(){}function p(){}var h={};h[r]=function(){return this};var g=Object.getPrototypeOf,y=g&&g(g(T([])));y&&y!==e&&n.call(y,r)&&(h=y);var m=p.prototype=d.prototype=Object.create(h);function v(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function w(t,e){var o;this._invoke=function(r,i){function a(){return new e((function(o,a){!function o(r,i,a,s){var c=l(t[r],t,i);if("throw"!==c.type){var u=c.arg,d=u.value;return d&&"object"===typeof d&&n.call(d,"__await")?e.resolve(d.__await).then((function(t){o("next",t,a,s)}),(function(t){o("throw",t,a,s)})):e.resolve(d).then((function(t){u.value=t,a(u)}),(function(t){return o("throw",t,a,s)}))}s(c.arg)}(r,i,o,a)}))}return o=o?o.then(a,a):a()}}function b(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,b(t,e),"throw"===e.method))return u;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var o=l(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,u;var r=o.arg;return r?r.done?(e[t.resultName]=r.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,u):r:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,u)}function _(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function C(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function T(t){if(t){var e=t[r];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function e(){for(;++o<t.length;)if(n.call(t,o))return e.value=t[o],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:O}}function O(){return{value:void 0,done:!0}}return f.prototype=m.constructor=p,p.constructor=f,f.displayName=s(p,a,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===f||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,s(t,a,"GeneratorFunction")),t.prototype=Object.create(m),t},t.awrap=function(t){return{__await:t}},v(w.prototype),w.prototype[i]=function(){return this},t.AsyncIterator=w,t.async=function(e,n,o,r,i){void 0===i&&(i=Promise);var a=new w(c(e,n,o,r),i);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},v(m),s(m,a,"Generator"),m[r]=function(){return this},m.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var o=e.pop();if(o in t)return n.value=o,n.done=!1,n}return n.done=!0,n}},t.values=T,C.prototype={constructor:C,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function o(n,o){return a.type="throw",a.arg=t,e.next=n,o&&(e.method="next",e.arg=void 0),!!o}for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r],a=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var s=n.call(i,"catchLoc"),c=n.call(i,"finallyLoc");if(s&&c){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var o=this.tryEntries.length-1;o>=0;--o){var r=this.tryEntries[o];if(r.tryLoc<=this.prev&&n.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,u):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),u},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),k(n),u}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var o=n.completion;if("throw"===o.type){var r=o.arg;k(n)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:T(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),u}},t}(t.exports);try{regeneratorRuntime=o}catch(r){Function("r","regeneratorRuntime = r")(o)}},function(t,e){!function(){"use strict";if("object"===typeof window)if("IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype)"isIntersecting"in window.IntersectionObserverEntry.prototype||Object.defineProperty(window.IntersectionObserverEntry.prototype,"isIntersecting",{get:function(){return this.intersectionRatio>0}});else{var t=function(t){for(var e=window.document,n=r(e);n;)n=r(e=n.ownerDocument);return e}(),e=[],n=null,o=null;a.prototype.THROTTLE_TIMEOUT=100,a.prototype.POLL_INTERVAL=null,a.prototype.USE_MUTATION_OBSERVER=!0,a._setupCrossOriginUpdater=function(){return n||(n=function(t,n){o=t&&n?f(t,n):{top:0,bottom:0,left:0,right:0,width:0,height:0},e.forEach((function(t){t._checkForIntersections()}))}),n},a._resetCrossOriginUpdater=function(){n=null,o=null},a.prototype.observe=function(t){if(!this._observationTargets.some((function(e){return e.element==t}))){if(!t||1!=t.nodeType)throw new Error("target must be an Element");this._registerInstance(),this._observationTargets.push({element:t,entry:null}),this._monitorIntersections(t.ownerDocument),this._checkForIntersections()}},a.prototype.unobserve=function(t){this._observationTargets=this._observationTargets.filter((function(e){return e.element!=t})),this._unmonitorIntersections(t.ownerDocument),0==this._observationTargets.length&&this._unregisterInstance()},a.prototype.disconnect=function(){this._observationTargets=[],this._unmonitorAllIntersections(),this._unregisterInstance()},a.prototype.takeRecords=function(){var t=this._queuedEntries.slice();return this._queuedEntries=[],t},a.prototype._initThresholds=function(t){var e=t||[0];return Array.isArray(e)||(e=[e]),e.sort().filter((function(t,e,n){if("number"!=typeof t||isNaN(t)||t<0||t>1)throw new Error("threshold must be a number between 0 and 1 inclusively");return t!==n[e-1]}))},a.prototype._parseRootMargin=function(t){var e=(t||"0px").split(/\s+/).map((function(t){var e=/^(-?\d*\.?\d+)(px|%)$/.exec(t);if(!e)throw new Error("rootMargin must be specified in pixels or percent");return{value:parseFloat(e[1]),unit:e[2]}}));return e[1]=e[1]||e[0],e[2]=e[2]||e[0],e[3]=e[3]||e[1],e},a.prototype._monitorIntersections=function(e){var n=e.defaultView;if(n&&-1==this._monitoringDocuments.indexOf(e)){var o=this._checkForIntersections,i=null,a=null;this.POLL_INTERVAL?i=n.setInterval(o,this.POLL_INTERVAL):(s(n,"resize",o,!0),s(e,"scroll",o,!0),this.USE_MUTATION_OBSERVER&&"MutationObserver"in n&&(a=new n.MutationObserver(o)).observe(e,{attributes:!0,childList:!0,characterData:!0,subtree:!0})),this._monitoringDocuments.push(e),this._monitoringUnsubscribes.push((function(){var t=e.defaultView;t&&(i&&t.clearInterval(i),c(t,"resize",o,!0)),c(e,"scroll",o,!0),a&&a.disconnect()}));var l=this.root&&(this.root.ownerDocument||this.root)||t;if(e!=l){var u=r(e);u&&this._monitorIntersections(u.ownerDocument)}}},a.prototype._unmonitorIntersections=function(e){var n=this._monitoringDocuments.indexOf(e);if(-1!=n){var o=this.root&&(this.root.ownerDocument||this.root)||t;if(!this._observationTargets.some((function(t){var n=t.element.ownerDocument;if(n==e)return!0;for(;n&&n!=o;){var i=r(n);if((n=i&&i.ownerDocument)==e)return!0}return!1}))){var i=this._monitoringUnsubscribes[n];if(this._monitoringDocuments.splice(n,1),this._monitoringUnsubscribes.splice(n,1),i(),e!=o){var a=r(e);a&&this._unmonitorIntersections(a.ownerDocument)}}}},a.prototype._unmonitorAllIntersections=function(){var t=this._monitoringUnsubscribes.slice(0);this._monitoringDocuments.length=0,this._monitoringUnsubscribes.length=0;for(var e=0;e<t.length;e++)t[e]()},a.prototype._checkForIntersections=function(){if(this.root||!n||o){var t=this._rootIsInDom(),e=t?this._getRootRect():{top:0,bottom:0,left:0,right:0,width:0,height:0};this._observationTargets.forEach((function(o){var r=o.element,a=u(r),s=this._rootContainsTarget(r),c=o.entry,l=t&&s&&this._computeTargetAndRootIntersection(r,a,e),d=null;this._rootContainsTarget(r)?n&&!this.root||(d=e):d={top:0,bottom:0,left:0,right:0,width:0,height:0};var f=o.entry=new i({time:window.performance&&performance.now&&performance.now(),target:r,boundingClientRect:a,rootBounds:d,intersectionRect:l});c?t&&s?this._hasCrossedThreshold(c,f)&&this._queuedEntries.push(f):c&&c.isIntersecting&&this._queuedEntries.push(f):this._queuedEntries.push(f)}),this),this._queuedEntries.length&&this._callback(this.takeRecords(),this)}},a.prototype._computeTargetAndRootIntersection=function(e,r,i){if("none"!=window.getComputedStyle(e).display){for(var a=r,s=h(e),c=!1;!c&&s;){var d=null,p=1==s.nodeType?window.getComputedStyle(s):{};if("none"==p.display)return null;if(s==this.root||9==s.nodeType)if(c=!0,s==this.root||s==t)n&&!this.root?!o||0==o.width&&0==o.height?(s=null,d=null,a=null):d=o:d=i;else{var g=h(s),y=g&&u(g),m=g&&this._computeTargetAndRootIntersection(g,y,i);y&&m?(s=g,d=f(y,m)):(s=null,a=null)}else{var v=s.ownerDocument;s!=v.body&&s!=v.documentElement&&"visible"!=p.overflow&&(d=u(s))}if(d&&(a=l(d,a)),!a)break;s=s&&h(s)}return a}},a.prototype._getRootRect=function(){var e;if(this.root&&!g(this.root))e=u(this.root);else{var n=g(this.root)?this.root:t,o=n.documentElement,r=n.body;e={top:0,left:0,right:o.clientWidth||r.clientWidth,width:o.clientWidth||r.clientWidth,bottom:o.clientHeight||r.clientHeight,height:o.clientHeight||r.clientHeight}}return this._expandRectByRootMargin(e)},a.prototype._expandRectByRootMargin=function(t){var e=this._rootMarginValues.map((function(e,n){return"px"==e.unit?e.value:e.value*(n%2?t.width:t.height)/100})),n={top:t.top-e[0],right:t.right+e[1],bottom:t.bottom+e[2],left:t.left-e[3]};return n.width=n.right-n.left,n.height=n.bottom-n.top,n},a.prototype._hasCrossedThreshold=function(t,e){var n=t&&t.isIntersecting?t.intersectionRatio||0:-1,o=e.isIntersecting?e.intersectionRatio||0:-1;if(n!==o)for(var r=0;r<this.thresholds.length;r++){var i=this.thresholds[r];if(i==n||i==o||i<n!==i<o)return!0}},a.prototype._rootIsInDom=function(){return!this.root||p(t,this.root)},a.prototype._rootContainsTarget=function(e){var n=this.root&&(this.root.ownerDocument||this.root)||t;return p(n,e)&&(!this.root||n==e.ownerDocument)},a.prototype._registerInstance=function(){e.indexOf(this)<0&&e.push(this)},a.prototype._unregisterInstance=function(){var t=e.indexOf(this);-1!=t&&e.splice(t,1)},window.IntersectionObserver=a,window.IntersectionObserverEntry=i}function r(t){try{return t.defaultView&&t.defaultView.frameElement||null}catch(e){return null}}function i(t){this.time=t.time,this.target=t.target,this.rootBounds=d(t.rootBounds),this.boundingClientRect=d(t.boundingClientRect),this.intersectionRect=d(t.intersectionRect||{top:0,bottom:0,left:0,right:0,width:0,height:0}),this.isIntersecting=!!t.intersectionRect;var e=this.boundingClientRect,n=e.width*e.height,o=this.intersectionRect,r=o.width*o.height;this.intersectionRatio=n?Number((r/n).toFixed(4)):this.isIntersecting?1:0}function a(t,e){var n=e||{};if("function"!=typeof t)throw new Error("callback must be a function");if(n.root&&1!=n.root.nodeType&&9!=n.root.nodeType)throw new Error("root must be a Document or Element");this._checkForIntersections=function(t,e){var n=null;return function(){n||(n=setTimeout((function(){t(),n=null}),e))}}(this._checkForIntersections.bind(this),this.THROTTLE_TIMEOUT),this._callback=t,this._observationTargets=[],this._queuedEntries=[],this._rootMarginValues=this._parseRootMargin(n.rootMargin),this.thresholds=this._initThresholds(n.threshold),this.root=n.root||null,this.rootMargin=this._rootMarginValues.map((function(t){return t.value+t.unit})).join(" "),this._monitoringDocuments=[],this._monitoringUnsubscribes=[]}function s(t,e,n,o){"function"==typeof t.addEventListener?t.addEventListener(e,n,o||!1):"function"==typeof t.attachEvent&&t.attachEvent("on"+e,n)}function c(t,e,n,o){"function"==typeof t.removeEventListener?t.removeEventListener(e,n,o||!1):"function"==typeof t.detatchEvent&&t.detatchEvent("on"+e,n)}function l(t,e){var n=Math.max(t.top,e.top),o=Math.min(t.bottom,e.bottom),r=Math.max(t.left,e.left),i=Math.min(t.right,e.right),a=i-r,s=o-n;return a>=0&&s>=0&&{top:n,bottom:o,left:r,right:i,width:a,height:s}||null}function u(t){var e;try{e=t.getBoundingClientRect()}catch(n){}return e?(e.width&&e.height||(e={top:e.top,right:e.right,bottom:e.bottom,left:e.left,width:e.right-e.left,height:e.bottom-e.top}),e):{top:0,bottom:0,left:0,right:0,width:0,height:0}}function d(t){return!t||"x"in t?t:{top:t.top,y:t.top,bottom:t.bottom,left:t.left,x:t.left,right:t.right,width:t.width,height:t.height}}function f(t,e){var n=e.top-t.top,o=e.left-t.left;return{top:n,left:o,height:e.height,width:e.width,bottom:n+e.height,right:o+e.width}}function p(t,e){for(var n=e;n;){if(n==t)return!0;n=h(n)}return!1}function h(e){var n=e.parentNode;return 9==e.nodeType&&e!=t?r(e):(n&&n.assignedSlot&&(n=n.assignedSlot.parentNode),n&&11==n.nodeType&&n.host?n.host:n)}function g(t){return t&&9===t.nodeType}}()},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var o=n(0),r=n.n(o);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e,n,o,r,i,a){try{var s=t[i](a),c=s.value}catch(l){return void n(l)}s.done?e(c):Promise.resolve(c).then(o,r)}function s(t){return function(){var e=this,n=arguments;return new Promise((function(o,r){var i=t.apply(e,n);function s(t){a(i,o,r,s,c,"next",t)}function c(t){a(i,o,r,s,c,"throw",t)}s(void 0)}))}}var c=n(1),l=n.n(c);function u(t){return(u="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function d(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function f(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function p(){return"undefined"!==typeof Reflect&&Reflect.defineMetadata&&Reflect.getOwnMetadataKeys}function h(t,e){g(t,e),Object.getOwnPropertyNames(e.prototype).forEach((function(n){g(t.prototype,e.prototype,n)})),Object.getOwnPropertyNames(e).forEach((function(n){g(t,e,n)}))}function g(t,e,n){(n?Reflect.getOwnMetadataKeys(e,n):Reflect.getOwnMetadataKeys(e)).forEach((function(o){var r=n?Reflect.getOwnMetadata(o,e,n):Reflect.getOwnMetadata(o,e);n?Reflect.defineMetadata(o,r,t,n):Reflect.defineMetadata(o,r,t)}))}var y={__proto__:[]}instanceof Array;function m(t,e){var n=e.prototype._init;e.prototype._init=function(){var e=this,n=Object.getOwnPropertyNames(t);if(t.$options.props)for(var o in t.$options.props)t.hasOwnProperty(o)||n.push(o);n.forEach((function(n){Object.defineProperty(e,n,{get:function(){return t[n]},set:function(e){t[n]=e},configurable:!0})}))};var o=new e;e.prototype._init=n;var r={};return Object.keys(o).forEach((function(t){void 0!==o[t]&&(r[t]=o[t])})),r}var v=["data","beforeCreate","created","beforeMount","mounted","beforeDestroy","destroyed","beforeUpdate","updated","activated","deactivated","render","errorCaptured","serverPrefetch"];function w(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e.name=e.name||t._componentTag||t.name;var n=t.prototype;Object.getOwnPropertyNames(n).forEach((function(t){if("constructor"!==t)if(v.indexOf(t)>-1)e[t]=n[t];else{var o=Object.getOwnPropertyDescriptor(n,t);void 0!==o.value?"function"===typeof o.value?(e.methods||(e.methods={}))[t]=o.value:(e.mixins||(e.mixins=[])).push({data:function(){return d({},t,o.value)}}):(o.get||o.set)&&((e.computed||(e.computed={}))[t]={get:o.get,set:o.set})}})),(e.mixins||(e.mixins=[])).push({data:function(){return m(this,t)}});var o=t.__decorators__;o&&(o.forEach((function(t){return t(e)})),delete t.__decorators__);var r=Object.getPrototypeOf(t.prototype),i=r instanceof l.a?r.constructor:l.a,a=i.extend(e);return _(a,t,i),p()&&h(a,t),a}var b={prototype:!0,arguments:!0,callee:!0,caller:!0};function _(t,e,n){Object.getOwnPropertyNames(e).forEach((function(o){if(!b[o]){var r=Object.getOwnPropertyDescriptor(t,o);if(!r||r.configurable){var i=Object.getOwnPropertyDescriptor(e,o);if(!y){if("cid"===o)return;var a=Object.getOwnPropertyDescriptor(n,o);if(!function(t){var e=u(t);return null==t||"object"!==e&&"function"!==e}(i.value)&&a&&a.value===i.value)return}0,Object.defineProperty(t,o,i)}}}))}function k(t){return"function"===typeof t?w(t):function(e){return w(e,t)}}k.registerHooks=function(t){v.push.apply(v,f(t))};"undefined"!==typeof Reflect&&Reflect.getMetadata;function C(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function T(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?C(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):C(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function O(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}function D(t,e){if(t){if("string"===typeof t)return O(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?O(t,e):void 0}}function S(t){return function(t){if(Array.isArray(t))return O(t)}(t)||function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||D(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function E(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function x(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function L(t,e,n){return e&&x(t.prototype,e),n&&x(t,n),t}var I=n(2),j=function(){function t(){E(this,t),this.listeners=void 0,this.cache=void 0,this.listeners=[],this.cache=[]}return L(t,[{key:"on",value:function(t,e,n,o,r){e=e.join(","),n=JSON.stringify(n);var i=this.getCache(t,e,n,r);if(i)return o(i.err,i.resAry,i.resObject),!1;var a=this.listeners.findIndex((function(o){return o.type===t&&o.ids===e&&o.data===n&&o.isNative===r}));return this.listeners.push({type:t,ids:e,data:n,cb:o}),-1===a}},{key:"emit",value:function(t,e,n,o,r,i,a){e=e.join(","),n=JSON.stringify(n),this.cache.push({type:t,ids:e,data:n,err:o,resAry:r,resObject:i}),this.listeners.forEach((function(s){s.type===t&&s.ids===e&&s.data===n&&s.isNative===a&&s.cb(o,r,i)}))}},{key:"getCache",value:function(t,e,n,o){var r=this.cache.findIndex((function(r){return r.type===t&&r.ids===e&&r.data===n&&r.isNative===o}));return r>-1?this.cache[r]:null}},{key:"getEmit",value:function(t,e,n,o){var r=this;return function(i,a,s){r.emit(t,e,n,i,a,s,o)}}}]),t}();Array.prototype.findIndex||Object.defineProperty(Array.prototype,"findIndex",{value:function(t){if(null==this)throw new TypeError('"this" is null or not defined');var e=Object(this),n=e.length>>>0;if("function"!==typeof t)throw new TypeError("predicate must be a function");for(var o=arguments[1],r=0;r<n;){var i=e[r];if(t.call(o,i,r,e))return r;r++}return-1},configurable:!0,writable:!0});var N=new j,R=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};E(this,t),this.jsb=e.jsb,this.version=e.version||"v1",this.id_prefix=e.id_prefix||"",this.gkurl=e.gkurl||"https://gk.sina.cn/".concat(this.version,"/gkmatch"),this.qeurl=e.qeurl||"https://gk.sina.cn/".concat(this.version,"/qematch"),this.closeCache=e.closeCache}return L(t,[{key:"getQueueKey",value:function(){}