/*! For license information please see 4.9631f51f.chunk.js.LICENSE.txt */
(this.webpackJsonpmidgard=this.webpackJsonpmidgard||[]).push([[4],[function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return i})),n.d(t,"e",(function(){return a})),n.d(t,"c",(function(){return u})),n.d(t,"d",(function(){return s}));var r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)};function o(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}var i=function(){return(i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function a(e){var t="function"===typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"===typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function u(e,t){var n="function"===typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,i=n.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(r=i.next()).done;)a.push(r.value)}catch(u){o={error:u}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return a}function s(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(u(arguments[t]));return e}},function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r="NOT_FOUND";var o=function(e,t){return e===t};function i(e,t){var n="object"===typeof t?t:{equalityCheck:t},i=n.equalityCheck,a=void 0===i?o:i,u=n.maxSize,s=void 0===u?1:u,c=n.resultEqualityCheck,l=function(e){return function(t,n){if(null===t||null===n||t.length!==n.length)return!1;for(var r=t.length,o=0;o<r;o++)if(!e(t[o],n[o]))return!1;return!0}}(a),f=1===s?function(e){var t;return{get:function(n){return t&&e(t.key,n)?t.value:r},put:function(e,n){t={key:e,value:n}},getEntries:function(){return t?[t]:[]},clear:function(){t=void 0}}}(l):function(e,t){var n=[];function o(e){var o=n.findIndex((function(n){return t(e,n.key)}));if(o>-1){var i=n[o];return o>0&&(n.splice(o,1),n.unshift(i)),i.value}return r}return{get:o,put:function(t,i){o(t)===r&&(n.unshift({key:t,value:i}),n.length>e&&n.pop())},getEntries:function(){return n},clear:function(){n=[]}}}(s,l);function d(){var t=f.get(arguments);if(t===r){if(t=e.apply(null,arguments),c){var n=f.getEntries(),o=n.find((function(e){return c(e.value,t)}));o&&(t=o.value)}f.put(arguments,t)}return t}return d.clearCache=function(){return f.clear()},d}function a(e){var t=Array.isArray(e[0])?e[0]:e;if(!t.every((function(e){return"function"===typeof e}))){var n=t.map((function(e){return"function"===typeof e?"function "+(e.name||"unnamed")+"()":typeof e})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+n+"]")}return t}function u(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=function(){for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];var i,u=0,s={memoizeOptions:void 0},c=r.pop();if("object"===typeof c&&(s=c,c=r.pop()),"function"!==typeof c)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof c+"]");var l=s,f=l.memoizeOptions,d=void 0===f?n:f,p=Array.isArray(d)?d:[d],h=a(r),y=e.apply(void 0,[function(){return u++,c.apply(null,arguments)}].concat(p)),v=e((function(){for(var e=[],t=h.length,n=0;n<t;n++)e.push(h[n].apply(null,arguments));return i=y.apply(null,e)}));return Object.assign(v,{resultFunc:c,memoizedResultFunc:y,dependencies:h,lastResult:function(){return i},recomputations:function(){return u},resetRecomputations:function(){return u=0}}),v};return o}var s=u(i)},function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(10);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}},function(e,t,n){"use strict";e.exports=n(140)},function(e,t,n){"use strict";e.exports=n(202)},,,,,function(e,t,n){"use strict";n.d(t,"d",(function(){return o})),n.d(t,"e",(function(){return a})),n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return s})),n.d(t,"l",(function(){return c})),n.d(t,"j",(function(){return l})),n.d(t,"i",(function(){return f})),n.d(t,"f",(function(){return d})),n.d(t,"c",(function(){return p})),n.d(t,"k",(function(){return h})),n.d(t,"n",(function(){return y})),n.d(t,"m",(function(){return v})),n.d(t,"h",(function(){return m})),n.d(t,"g",(function(){return g}));var r=Object.prototype.toString;function o(e){switch(r.call(e)){case"[object Error]":case"[object Exception]":case"[object DOMException]":return!0;default:return g(e,Error)}}function i(e,t){return r.call(e)==="[object "+t+"]"}function a(e){return i(e,"ErrorEvent")}function u(e){return i(e,"DOMError")}function s(e){return i(e,"DOMException")}function c(e){return i(e,"String")}function l(e){return null===e||"object"!==typeof e&&"function"!==typeof e}function f(e){return i(e,"Object")}function d(e){return"undefined"!==typeof Event&&g(e,Event)}function p(e){return"undefined"!==typeof Element&&g(e,Element)}function h(e){return i(e,"RegExp")}function y(e){return Boolean(e&&e.then&&"function"===typeof e.then)}function v(e){return f(e)&&"nativeEvent"in e&&"preventDefault"in e&&"stopPropagation"in e}function m(e){return"number"===typeof e&&e!==e}function g(e,t){try{return e instanceof t}catch(n){return!1}}},function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))},function(e,t,n){e.exports=n(200)()},function(e,t,n){"use strict";n.d(t,"a",(function(){return g})),n.d(t,"b",(function(){return w})),n.d(t,"c",(function(){return b})),n.d(t,"d",(function(){return _})),n.d(t,"e",(function(){return E})),n.d(t,"f",(function(){return v})),n.d(t,"g",(function(){return O})),n.d(t,"h",(function(){return m}));var r=n(3),o=n.n(r);n(69);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function d(e,t){if(t&&("object"===typeof t||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function p(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=l(e);if(t){var o=l(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return d(this,n)}}Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_ENV:"production",REACT_APP_COMMIT_HASH:"eee0ed3ba51edb29446b05c1c68bb10ebc0cf235",REACT_APP_BYRGIT_URL:"https://byrgit.pressekompass.net",REACT_APP_API_URL:"https://api.opinary.com",REACT_APP_CDN_URL:"https://cdn.opinary.com",REACT_APP_EVENTS_API_URL:"https://event-acceptor-dot-production-eu-292711.ey.r.appspot.com"}).REACT_APP_API;var h={isGdprApplies:/\$\{GDPR(\}|_APPLIES\})/,gdprConsent:/\$\{GDPR_CONSENT_([0-9]{1,}|STRING)\}/},y={},v=function(e,t){if(!e||!t)return y;y=a(a({},y),{},c({},e,t))},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:y,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:h;return e&&t?Object.keys(t).reduce((function(e,r){var o=n[r],i=t[r].toString();return i?e.replace(o,i):e}),e):e},g=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&f(e,t)}(a,e);var t,n,r,i=p(a);function a(){return u(this,a),i.apply(this,arguments)}return t=a,(n=[{key:"componentDidMount",value:function(){this.setState({rendered:!0})}},{key:"shouldComponentUpdate",value:function(e,t){return!t.rendered}},{key:"render",value:function(){var e=this.props.rawHtml,t={timestamp:Date.now(),TIMESTAMP:Date.now()},n=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(t).reduce((function(e,n){return e.replace("[".concat(n,"]"),t[n])}),e)}(m(e),t);return o.a.createElement("span",{style:{display:"none"},dangerouslySetInnerHTML:{__html:n}})}}])&&s(t.prototype,n),r&&s(t,r),Object.defineProperty(t,"prototype",{writable:!1}),a}(o.a.Component),b=function(e){return e},w=function(e){return e},_=function(e){return e},O=function(e){if(e){var t=new Image;return t.src=m(e),t}},E=function(){var e=Math.floor((new Date).getTime()/1e3).toString(16);return"v1-".concat(e).concat("-xxxxxxxxxxxxxxxx".replace(/[x]/g,(function(){}