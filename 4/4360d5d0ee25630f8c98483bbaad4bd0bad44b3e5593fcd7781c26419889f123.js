(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([["npm.firebaseui"],{"./node_modules/firebaseui/dist/esm.js":function(e,t,i){"use strict";i.r(t),function(e){i.d(t,"auth",(function(){return s}));var n=i("./node_modules/firebase/app/dist/index.cjs.js"),a=i.n(n),r=(i("./node_modules/firebase/auth/dist/index.esm.js"),i("./node_modules/dialog-polyfill/dialog-polyfill.js")),o=i.n(r);i("./node_modules/material-design-lite/src/mdlComponentHandler.js"),i("./node_modules/material-design-lite/src/button/button.js"),i("./node_modules/material-design-lite/src/progress/progress.js"),i("./node_modules/material-design-lite/src/spinner/spinner.js"),i("./node_modules/material-design-lite/src/textfield/textfield.js");(function(){(function(){var t,i,n="function"==typeof Object.create?Object.create:function(e){function t(){}return t.prototype=e,new t};if("function"==typeof Object.setPrototypeOf)i=Object.setPrototypeOf;else{var r;e:{var o={};try{o.__proto__={xb:!0},r=o.xb;break e}catch($e){}r=!1}i=r?function(e,t){if(e.__proto__=t,e.__proto__!==t)throw new TypeError(e+" is not extensible");return e}:null}var s=i;function u(e,t){if(e.prototype=n(t.prototype),e.prototype.constructor=e,s)s(e,t);else for(var i in t)if("prototype"!=i)if(Object.defineProperties){var a=Object.getOwnPropertyDescriptor(t,i);a&&Object.defineProperty(e,i,a)}else e[i]=t[i];e.K=t.prototype}var c="function"==typeof Object.defineProperties?Object.defineProperty:function(e,t,i){e!=Array.prototype&&e!=Object.prototype&&(e[t]=i.value)},l="undefined"!=typeof window&&window===this?this:void 0!==e&&null!=e?e:this;function f(e,t){if(t){var i=l;e=e.split(".");for(var n=0;n<e.length-1;n++){var a=e[n];a in i||(i[a]={}),i=i[a]}(t=t(n=i[e=e[e.length-1]]))!=n&&null!=t&&c(i,e,{configurable:!0,writable:!0,value:t})}}f("Object.is",(function(e){return e||function(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}})),f("Array.prototype.includes",(function(e){return e||function(e,t){var i=this;i instanceof String&&(i=String(i));var n=i.length;for(0>(t=t||0)&&(t=Math.max(t+n,0));t<n;t++){var a=i[t];if(a===e||Object.is(a,e))return!0}return!1}}));var h=this;function d(e){return void 0!==e}function p(e){return"string"==typeof e}var v=/^[\w+/_-]+[=]{0,2}$/,b=null;function g(){}function m(e){e.W=void 0,e.Xa=function(){return e.W?e.W:e.W=new e}}function y(e){var t=typeof e;if("object"==t){if(!e)return"null";if(e instanceof Array)return"array";if(e instanceof Object)return t;var i=Object.prototype.toString.call(e);if("[object Window]"==i)return"object";if("[object Array]"==i||"number"==typeof e.length&&void 0!==e.splice&&void 0!==e.propertyIsEnumerable&&!e.propertyIsEnumerable("splice"))return"array";if("[object Function]"==i||void 0!==e.call&&void 0!==e.propertyIsEnumerable&&!e.propertyIsEnumerable("call"))return"function"}else if("function"==t&&void 0===e.call)return"object";return t}function w(e){return"array"==y(e)}function S(e){var t=y(e);return"array"==t||"object"==t&&"number"==typeof e.length}function I(e){return"function"==y(e)}function k(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}var E="closure_uid_"+(1e9*Math.random()>>>0),C=0;function A(e,t,i){return e.call.apply(e.bind,arguments)}function x(e,t,i){if(!e)throw Error();if(2<arguments.length){var n=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,n),e.apply(t,i)}}return function(){return e.apply(t,arguments)}}function P(e,t,i){return(P=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?A:x).apply(null,arguments)}function R(e,t){var i=Array.prototype.slice.call(arguments,1);return function(){var t=i.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function T(e,t){for(var i in t)e[i]=t[i]}var M,O=Date.now||function(){return+new Date};function j(e,t){e=e.split(".");var i,n=h;e[0]in n||void 0===n.execScript||n.execScript("var "+e[0]);for(;e.length&&(i=e.shift());)!e.length&&d(t)?n[i]=t:n=n[i]&&n[i]!==Object.prototype[i]?n[i]:n[i]={}}function U(e,t){function i(){}i.prototype=t.prototype,e.K=t.prototype,e.prototype=new i,e.prototype.constructor=e,e.wc=function(e,i,n){for(var a=Array(arguments.length-2),r=2;r<arguments.length;r++)a[r-2]=arguments[r];return t.prototype[i].apply(e,a)}}function D(e){if(Error.captureStackTrace)Error.captureStackTrace(this,D);else{var t=Error().stack;t&&(this.stack=t)}e&&(this.message=String(e))}function L(e,t){for(var i="",n=(e=e.split("%s")).length-1,a=0;a<n;a++)i+=e[a]+(a<t.length?t[a]:"%s");D.call(this,i+e[n])}function N(e,t){throw new L("Failure"+(e?": "+e:""),Array.prototype.slice.call(arguments,1))}U(D,Error),D.prototype.name="CustomError",U(L,D),L.prototype.name="AssertionError";var F=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(p(e))return p(t)&&1==t.length?e.indexOf(t,0):-1;for(var i=0;i<e.length;i++)if(i in e&&e[i]===t)return i;return-1},_=Array.prototype.forEach?function(e,t,i){Array.prototype.forEach.call(e,t,i)}:function(e,t,i){for(var n=e.length,a=p(e)?e.split(""):e,r=0;r<n;r++)r in a&&t.call(i,a[r],r,e)};var B=Array.prototype.filter?function(e,t){return Array.prototype.filter.call(e,t,void 0)}:function(e,t){for(var i=e.length,n=[],a=0,r=p(e)?e.split(""):e,o=0;o<i;o++)if(o in r){var s=r[o];t.call(void 0,s,o,e)&&(n[a++]=s)}return n},G=Array.prototype.map?function(e,t){return Array.prototype.map.call(e,t,void 0)}:function(e,t){for(var i=e.length,n=Array(i),a=p(e)?e.split(""):e,r=0;r<i;r++)r in a&&(n[r]=t.call(void 0,a[r],r,e));return n},K=Array.prototype.some?function(e,t){return Array.prototype.some.call(e,t,void 0)}:function(e,t){for(var i=e.length,n=p(e)?e.split(""):e,a=0;a<i;a++)if(a in n&&t.call(void 0,n[a],a,e))return!0;return!1};function V(e,t){return 0<=F(e,t)}function H(e,t){var i;return(i=0<=(t=F(e,t)))&&W(e,t),i}function W(e,t){return 1==Array.prototype.splice.call(e,t,1).length}function Y(e,t){!function(e,t){for(var i=p(e)?e.split(""):e,n=e.length-1;0<=n;--n)n in i&&t.call(void 0,i[n],n,e)}(e,(function(i,n){t.call(void 0,i,n,e)&&W(e,n)&&0}))}function z(e){return Array.prototype.concat.apply([],arguments)}function q(e){var t=e.length;if(0<t){for(var i=Array(t),n=0;n<t;n++)i[n]=e[n];return i}return[]}function J(e,t,i){return 2>=arguments.length?Array.prototype.slice.call(e,t):Array.prototype.slice.call(e,t,i)}var Z=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]},X=/&/g,$=/</g,Q=/>/g,ee=/"/g,te=/'/g,ie=/\x00/g,ne=/[\x00&<>"']/;function ae(e,t){return e<t?-1:e>t?1:0}function re(e){return ne.test(e)&&(-1!=e.indexOf("&")&&(e=e.replace(X,"&amp;")),-1!=e.indexOf("<")&&(e=e.replace($,"&lt;")),-1!=e.indexOf(">")&&(e=e.replace(Q,"&gt;")),-1!=e.indexOf('"')&&(e=e.replace(ee,"&quot;")),-1!=e.indexOf("'")&&(e=e.replace(te,"&#39;")),-1!=e.indexOf("\0")&&(e=e.replace(ie,"&#0;"))),e}function oe(e,t,i){for(var n in e)t.call(i,e[n],n,e)}function se(e){var t,i={};for(t in e)i[t]=e[t];return i}var ue="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ce(e,t){for(var i,n,a=1;a<arguments.length;a++){for(i in n=arguments[a])e[i]=n[i];for(var r=0;r<ue.length;r++)i=ue[r],Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}}var le="StopIteration"in h?h.StopIteration:{message:"StopIteration",stack:""};function fe(){}function he(e){if(e instanceof fe)return e;if("function"==typeof e.ha)return e.ha(!1);if(S(e)){var t=0,i=new fe;return i.next=function(){for(;;){if(t>=e.length)throw le;if(t in e)return e[t++];t++}},i}throw Error("Not implemented")}function de(e){if(S(e))return q(e);e=he(e);var t=[];return function(e,t){if(S(e))try{_(e,t,void 0)}catch(Dt){if(Dt!==le)throw Dt}else{e=he(e);try{for(;;)t.call(void 0,e.next(),void 0,e)}catch(i){if(i!==le)throw i}}}(e,(function(e){t.push(e)})),t}function pe(e,t){this.g={},this.a=[],this.j=this.h=0;var i=arguments.length;if(1<i){if(i%2)throw Error("Uneven number of arguments");for(var n=0;n<i;n+=2)this.set(arguments[n],arguments[n+1])}else if(e)if(e instanceof pe)for(i=e.ja(),n=0;n<i.length;n++)this.set(i[n],e.get(i[n]));else for(n in e)this.set(n,e[n])}function ve(e){if(e.h!=e.a.length){for(var t=0,i=0;t<e.a.length;){var n=e.a[t];be(e.g,n)&&(e.a[i++]=n),t++}e.a.length=i}if(e.h!=e.a.length){var a={};for(i=t=0;t<e.a.length;)be(a,n=e.a[t])||(e.a[i++]=n,a[n]=1),t++;e.a.length=i}}function be(e,t){return Object.prototype.hasOwnProperty.call(e,t)}fe.prototype.next=function(){throw le},fe.prototype.ha=function(){return this},(t=pe.prototype).la=function(){ve(this);for(var e=[],t=0;t<this.a.length;t++)e.push(this.g[this.a[t]]);return e},t.ja=function(){return ve(this),this.a.concat()},t.clear=function(){this.g={},this.j=this.h=this.a.length=0},t.get=function(e,t){return be(this.g,e)?this.g[e]:t},t.set=function(e,t){be(this.g,e)||(this.h++,this.a.push(e),this.j++),this.g[e]=t},t.forEach=function(e,t){for(var i=this.ja(),n=0;n<i.length;n++){var a=i[n],r=this.get(a);e.call(t,r,a,this)}},t.ha=function(e){ve(this);var t=0,i=this.j,n=this,a=new fe;return a.next=function(){if(i!=n.j)throw Error("The map has changed since the iterator was created");if(t>=n.a.length)throw le;var a=n.a[t++];return e?a:n.g[a]},a};var ge=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function me(e,t,i,n){for(var a=i.length;0<=(t=e.indexOf(i,t))&&t<n;){var r=e.charCodeAt(t-1);if((38==r||63==r)&&(!(r=e.charCodeAt(t+a))||61==r||38==r||35==r))return t;t+=a+1}return-1}var ye=/#|$/;function we(e,t){var i=e.search(ye),n=me(e,0,t,i);if(0>n)return null;var a=e.indexOf("&",n);return(0>a||a>i)&&(a=i),n+=t.length+1,decodeURIComponent(e.substr(n,a-n).replace(/\+/g," "))}var Se=/[?&]($|#)/;function Ie(e,t){var i;this.h=this.A=this.j="",this.C=null,this.s=this.g="",this.i=!1,e instanceof Ie?(this.i=d(t)?t:e.i,ke(this,e.j),this.A=e.A,this.h=e.h,Ee(this,e.C),this.g=e.g,Ce(this,_e(e.a)),this.s=e.s):e&&(i=String(e).match(ge))?(this.i=!!t,ke(this,i[1]||"",!0),this.A=xe(i[2]||""),this.h=xe(i[3]||"",!0),Ee(this,i[4]),this.g=xe(i[5]||"",!0),Ce(this,i[6]||"",!0),this.s=xe(i[7]||"")):(this.i=!!t,this.a=new De(null,this.i))}function ke(e,t,i){e.j=i?xe(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Ee(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.C=t}else e.C=null}function Ce(e,t,i){t instanceof De?(e.a=t,function(e,t){t&&!e.j&&(Le(e),e.h=null,e.a.forEach((function(){}