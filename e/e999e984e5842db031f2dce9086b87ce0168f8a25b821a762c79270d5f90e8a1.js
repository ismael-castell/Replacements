(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';var n;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ea(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var fa=ea(this);function r(a,b){if(b)a:{var c=fa;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&ba(c,a,{configurable:!0,writable:!0,value:b})}}
r("Symbol",function(a){function b(f){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(f||"")+"_"+e++,f)}
function c(f,g){this.i=f;ba(this,"description",{configurable:!0,writable:!0,value:g})}
if(a)return a;c.prototype.toString=function(){return this.i};
var d="jscomp_symbol_"+(1E9*Math.random()>>>0)+"_",e=0;return b});
r("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=fa[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&ba(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ha(aa(this))}})}return a});
function ha(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function u(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}
function ia(a){if(!(a instanceof Array)){a=u(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}
function ja(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var ka="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)ja(d,e)&&(a[e]=d[e])}return a};
r("Object.assign",function(a){return a||ka});
var la="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},ma;
if("function"==typeof Object.setPrototypeOf)ma=Object.setPrototypeOf;else{var oa;a:{var pa={a:!0},qa={};try{qa.__proto__=pa;oa=qa.a;break a}catch(a){}oa=!1}ma=oa?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var sa=ma;
function v(a,b){a.prototype=la(b.prototype);a.prototype.constructor=a;if(sa)sa(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.O=b.prototype}
function ta(){this.u=!1;this.o=null;this.j=void 0;this.i=1;this.m=this.v=0;this.J=this.l=null}
function ua(a){if(a.u)throw new TypeError("Generator is already running");a.u=!0}
ta.prototype.B=function(a){this.j=a};
function wa(a,b){a.l={Sa:b,Xa:!0};a.i=a.v||a.m}
ta.prototype.return=function(a){this.l={return:a};this.i=this.m};
function w(a,b,c){a.i=c;return{value:b}}
ta.prototype.s=function(a){this.i=a};
function xa(a,b,c){a.v=b;void 0!=c&&(a.m=c)}
function ya(a,b){a.i=b;a.v=0}
function za(a){a.v=0;var b=a.l.Sa;a.l=null;return b}
function Aa(a){a.J=[a.l];a.v=0;a.m=0}
function Ba(a){var b=a.J.splice(0)[0];(b=a.l=a.l||b)?b.Xa?a.i=a.v||a.m:void 0!=b.s&&a.m<b.s?(a.i=b.s,a.l=null):a.i=a.m:a.i=0}
function Ca(a){this.i=new ta;this.j=a}
function Da(a,b){ua(a.i);var c=a.i.o;if(c)return Ea(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.i.return);
a.i.return(b);return Fa(a)}
function Ea(a,b,c,d){try{var e=b.call(a.i.o,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.i.u=!1,e;var f=e.value}catch(g){return a.i.o=null,wa(a.i,g),Fa(a)}a.i.o=null;d.call(a.i,f);return Fa(a)}
function Fa(a){for(;a.i.i;)try{var b=a.j(a.i);if(b)return a.i.u=!1,{value:b.value,done:!1}}catch(c){a.i.j=void 0,wa(a.i,c)}a.i.u=!1;if(a.i.l){b=a.i.l;a.i.l=null;if(b.Xa)throw b.Sa;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function Ga(a){this.next=function(b){ua(a.i);a.i.o?b=Ea(a,a.i.o.next,b,a.i.B):(a.i.B(b),b=Fa(a));return b};
this.throw=function(b){ua(a.i);a.i.o?b=Ea(a,a.i.o["throw"],b,a.i.B):(wa(a.i,b),b=Fa(a));return b};
this.return=function(b){return Da(a,b)};
this[Symbol.iterator]=function(){return this}}
function Ha(a){function b(d){return a.next(d)}
function c(d){return a.throw(d)}
return new Promise(function(d,e){function f(g){g.done?d(g.value):Promise.resolve(g.value).then(b,c).then(f,e)}
f(a.next())})}
function x(a){return Ha(new Ga(new Ca(a)))}
function Ia(){for(var a=Number(this),b=[],c=a;c<arguments.length;c++)b[c-a]=arguments[c];return b}
r("Reflect.setPrototypeOf",function(a){return a?a:sa?function(b,c){try{return sa(b,c),!0}catch(d){return!1}}:null});
r("Promise",function(a){function b(g){this.i=0;this.l=void 0;this.j=[];this.u=!1;var h=this.o();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.i=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.j=function(g){if(null==this.i){this.i=[];var h=this;this.l(function(){h.m()})}this.i.push(g)};
var e=fa.setTimeout;c.prototype.l=function(g){e(g,0)};
c.prototype.m=function(){for(;this.i&&this.i.length;){var g=this.i;this.i=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(l){this.o(l)}}}this.i=null};
c.prototype.o=function(g){this.l(function(){throw g;})};
b.prototype.o=function(){function g(l){return function(m){k||(k=!0,l.call(h,m))}}
var h=this,k=!1;return{resolve:g(this.Aa),reject:g(this.m)}};
b.prototype.Aa=function(g){if(g===this)this.m(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.jb(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.pa(g):this.v(g)}};
b.prototype.pa=function(g){var h=void 0;try{h=g.then}catch(k){this.m(k);return}"function"==typeof h?this.kb(h,g):this.v(g)};
b.prototype.m=function(g){this.B(2,g)};
b.prototype.v=function(g){this.B(1,g)};
b.prototype.B=function(g,h){if(0!=this.i)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.i);this.i=g;this.l=h;2===this.i&&this.ib();this.J()};
b.prototype.ib=function(){var g=this;e(function(){if(g.P()){var h=fa.console;"undefined"!==typeof h&&h.error(g.l)}},1)};
b.prototype.P=function(){if(this.u)return!1;var g=fa.CustomEvent,h=fa.Event,k=fa.dispatchEvent;if("undefined"===typeof k)return!0;"function"===typeof g?g=new g("unhandledrejection",{cancelable:!0}):"function"===typeof h?g=new h("unhandledrejection",{cancelable:!0}):(g=fa.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.l;return k(g)};
b.prototype.J=function(){if(null!=this.j){for(var g=0;g<this.j.length;++g)f.j(this.j[g]);this.j=null}};
var f=new c;b.prototype.jb=function(g){var h=this.o();g.sa(h.resolve,h.reject)};
b.prototype.kb=function(g,h){var k=this.o();try{g.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};
b.prototype.then=function(g,h){function k(t,p){return"function"==typeof t?function(y){try{l(t(y))}catch(z){m(z)}}:p}
var l,m,q=new b(function(t,p){l=t;m=p});
this.sa(k(g,l),k(h,m));return q};
b.prototype.catch=function(g){return this.then(void 0,g)};
b.prototype.sa=function(g,h){function k(){switch(l.i){case 1:g(l.l);break;case 2:h(l.l);break;default:throw Error("Unexpected state: "+l.i);}}
var l=this;null==this.j?f.j(k):this.j.push(k);this.u=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var l=u(g),m=l.next();!m.done;m=l.next())d(m.value).sa(h,k)})};
b.all=function(g){var h=u(g),k=h.next();return k.done?d([]):new b(function(l,m){function q(y){return function(z){t[y]=z;p--;0==p&&l(t)}}
var t=[],p=0;do t.push(void 0),p++,d(k.value).sa(q(t.length-1),m),k=h.next();while(!k.done)})};
return b});
r("WeakMap",function(a){function b(k){this.i=(h+=Math.random()+1).toString();if(k){k=u(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(k){var l=typeof k;return"object"===l&&null!==k||"function"===l}
function e(k){if(!ja(k,g)){var l=new c;ba(k,g,{value:l})}}
function f(k){var l=Object[k];l&&(Object[k]=function(m){if(m instanceof c)return m;Object.isExtensible(m)&&e(m);return l(m)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),l=Object.seal({}),m=new a([[k,2],[l,3]]);if(2!=m.get(k)||3!=m.get(l))return!1;m.delete(k);m.set(l,4);return!m.has(k)&&4==m.get(l)}catch(q){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,l){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!ja(k,g))throw Error("WeakMap key fail: "+k);k[g][this.i]=l;return this};
b.prototype.get=function(k){return d(k)&&ja(k,g)?k[g][this.i]:void 0};
b.prototype.has=function(k){return d(k)&&ja(k,g)&&ja(k[g],this.i)};
b.prototype.delete=function(k){return d(k)&&ja(k,g)&&ja(k[g],this.i)?delete k[g][this.i]:!1};
return b});
r("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var l=h.i;return ha(function(){if(l){for(;l.head!=h.i;)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}
function d(h,k){var l=k&&typeof k;"object"==l||"function"==l?f.has(k)?l=f.get(k):(l=""+ ++g,f.set(k,l)):l="p_"+k;var m=h.data_[l];if(m&&ja(h.data_,l))for(h=0;h<m.length;h++){var q=m[h];if(k!==k&&q.key!==q.key||k===q.key)return{id:l,list:m,index:h,entry:q}}return{id:l,list:m,index:-1,entry:void 0}}
function e(h){this.data_={};this.i=b();this.size=0;if(h){h=u(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),k=new a(u([[h,"s"]]));if("s"!=k.get(h)||1!=k.size||k.get({x:4})||k.set({x:4},"t")!=k||2!=k.size)return!1;var l=k.entries(),m=l.next();if(m.done||m.value[0]!=h||"s"!=m.value[1])return!1;m=l.next();return m.done||4!=m.value[0].x||"t"!=m.value[1]||!l.next().done?!1:!0}catch(q){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,k){h=0===h?0:h;var l=d(this,h);l.list||(l.list=this.data_[l.id]=[]);l.entry?l.entry.value=k:(l.entry={next:this.i,previous:this.i.previous,head:this.i,key:h,value:k},l.list.push(l.entry),this.i.previous.next=l.entry,this.i.previous=l.entry,this.size++);return this};
e.prototype.delete=function(h){h=d(this,h);return h.entry&&h.list?(h.list.splice(h.index,1),h.list.length||delete this.data_[h.id],h.entry.previous.next=h.entry.next,h.entry.next.previous=h.entry.previous,h.entry.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.data_={};this.i=this.i.previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).entry};
e.prototype.get=function(h){return(h=d(this,h).entry)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var l=this.entries(),m;!(m=l.next()).done;)m=m.value,h.call(k,m[1],m[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
function La(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
r("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=La(this,b,"endsWith");b+="";void 0===c&&(c=d.length);c=Math.max(0,Math.min(c|0,d.length));for(var e=b.length;0<e&&0<c;)if(d[--c]!=b[--e])return!1;return 0>=e}});
r("Array.prototype.find",function(a){return a?a:function(b,c){a:{var d=this;d instanceof String&&(d=String(d));for(var e=d.length,f=0;f<e;f++){var g=d[f];if(b.call(c,g,f,d)){b=g;break a}}b=void 0}return b}});
r("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=La(this,b,"startsWith");b+="";var e=d.length,f=b.length;c=Math.max(0,Math.min(c|0,d.length));for(var g=0;g<f&&c<e;)if(d[c++]!=b[g++])return!1;return g>=f}});
r("Number.isFinite",function(a){return a?a:function(b){return"number"!==typeof b?!1:!isNaN(b)&&Infinity!==b&&-Infinity!==b}});
r("Number.isInteger",function(a){return a?a:function(b){return Number.isFinite(b)?b===Math.floor(b):!1}});
r("Number.MAX_SAFE_INTEGER",function(){return 9007199254740991});
function Ma(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
r("Array.prototype.entries",function(a){return a?a:function(){return Ma(this,function(b,c){return[b,c]})}});
r("Number.isNaN",function(a){return a?a:function(b){return"number"===typeof b&&isNaN(b)}});
r("Object.setPrototypeOf",function(a){return a||sa});
r("Set",function(a){function b(c){this.i=new Map;if(c){c=u(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.i.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(u([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=0===c?0:c;this.i.set(c,c);this.size=this.i.size;return this};
b.prototype.delete=function(c){c=this.i.delete(c);this.size=this.i.size;return c};
b.prototype.clear=function(){this.i.clear();this.size=0};
b.prototype.has=function(c){return this.i.has(c)};
b.prototype.entries=function(){return this.i.entries()};
b.prototype.values=function(){return this.i.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.i.forEach(function(f){return c.call(d,f,f,e)})};
return b});
r("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)ja(b,d)&&c.push([d,b[d]]);return c}});
r("Array.prototype.keys",function(a){return a?a:function(){return Ma(this,function(b){return b})}});
r("Array.prototype.values",function(a){return a?a:function(){return Ma(this,function(b,c){return c})}});
r("Array.from",function(a){return a?a:function(b,c,d){c=null!=c?c:function(h){return h};
var e=[],f="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];if("function"==typeof f){b=f.call(b);for(var g=0;!(f=b.next()).done;)e.push(c.call(d,f.value,g++))}else for(f=b.length,g=0;g<f;g++)e.push(c.call(d,b[g],g));return e}});
r("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
r("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(0>c&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});
r("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==La(this,b,"includes").indexOf(b,c||0)}});
var A=this||self;function B(a,b){a=a.split(".");b=b||A;for(var c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b}
function Na(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"}
function Oa(a){var b=Na(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function Pa(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Qa(a){return Object.prototype.hasOwnProperty.call(a,Ra)&&a[Ra]||(a[Ra]=++Sa)}
var Ra="closure_uid_"+(1E9*Math.random()>>>0),Sa=0;function Ta(a,b,c){return a.call.apply(a.bind,arguments)}
function Ua(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function Va(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Va=Ta:Va=Ua;return Va.apply(null,arguments)}
function C(a,b){a=a.split(".");var c=A;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function Wa(a,b){function c(){}
c.prototype=b.prototype;a.O=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Sb=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
function Xa(a){return a}
;function Ya(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,Ya);else{var c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));void 0!==b&&(this.cause=b)}
Wa(Ya,Error);Ya.prototype.name="CustomError";function Za(a){a=a.url;var b=/[?&]dsh=1(&|$)/.test(a);this.l=!b&&/[?&]ae=1(&|$)/.test(a);this.o=!b&&/[?&]ae=2(&|$)/.test(a);if((this.i=/[?&]adurl=([^&]*)/.exec(a))&&this.i[1]){try{var c=decodeURIComponent(this.i[1])}catch(d){c=null}this.j=c}}
;function ab(){}
function bb(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;var cb=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},D=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},db=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
D(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function eb(a,b){b=cb(a,b);var c;(c=0<=b)&&Array.prototype.splice.call(a,b,1);return c}
function fb(a){return Array.prototype.concat.apply([],arguments)}
function gb(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function hb(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Oa(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function ib(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function jb(a){var b=lb,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function mb(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function nb(a){if(!a||"object"!==typeof a)return a;if("function"===typeof a.clone)return a.clone();if("undefined"!==typeof Map&&a instanceof Map)return new Map(a);if("undefined"!==typeof Set&&a instanceof Set)return new Set(a);var b=Array.isArray(a)?[]:"function"!==typeof ArrayBuffer||"function"!==typeof ArrayBuffer.isView||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=nb(a[c]);return b}
var ob="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ub(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<ob.length;f++)c=ob[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var vb;function wb(){}
function xb(a){return new wb(yb,a)}
var yb={};xb("");var zb=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]},Ab=/&/g,Bb=/</g,Cb=/>/g,Db=/"/g,Eb=/'/g,Fb=/\x00/g,Gb=/[\x00&<>"']/;function Hb(a,b){this.i=b===Ib?a:""}
Hb.prototype.toString=function(){return this.i.toString()};
var Ib={},Jb=new Hb("about:invalid#zClosurez",Ib);function Kb(){var a=A.navigator;return a&&(a=a.userAgent)?a:""}
function E(a){return-1!=Kb().indexOf(a)}
;function Lb(){return(E("Chrome")||E("CriOS"))&&!E("Edge")||E("Silk")}
;var Mb={};function Nb(a){this.i=Mb===Mb?a:""}
Nb.prototype.toString=function(){return this.i.toString()};var Ob=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Pb(a){return a?decodeURI(a):a}
function Qb(a){return Pb(a.match(Ob)[3]||null)}
function Rb(a){var b=a.match(Ob);a=b[1];var c=b[2],d=b[3];b=b[4];var e="";a&&(e+=a+":");d&&(e+="//",c&&(e+=c+"@"),e+=d,b&&(e+=":"+b));return e}
function Sb(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)Sb(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function Tb(a){var b=[],c;for(c in a)Sb(c,a[c],b);return b.join("&")}
var Yb=/#|$/;function Zb(a,b){var c=a.search(Yb);a:{var d=0;for(var e=b.length;0<=(d=a.indexOf(b,d))&&d<c;){var f=a.charCodeAt(d-1);if(38==f||63==f)if(f=a.charCodeAt(d+e),!f||61==f||38==f||35==f)break a;d+=e+1}d=-1}if(0>d)return null;e=a.indexOf("&",d);if(0>e||e>c)e=c;d+=b.length+1;return decodeURIComponent(a.slice(d,-1!==e?e:0).replace(/\+/g," "))}
;var $b={};function ac(a){if(a!==$b)throw Error("requires a valid immutable API token");}
;function bc(){return E("iPhone")&&!E("iPod")&&!E("iPad")}
;function cc(a){cc[" "](a);return a}
cc[" "]=function(){};var dc=E("Opera"),ec=E("Trident")||E("MSIE"),fc=E("Edge"),gc=E("Gecko")&&!(-1!=Kb().toLowerCase().indexOf("webkit")&&!E("Edge"))&&!(E("Trident")||E("MSIE"))&&!E("Edge"),hc=-1!=Kb().toLowerCase().indexOf("webkit")&&!E("Edge");function ic(){var a=A.document;return a?a.documentMode:void 0}
var jc;a:{var kc="",lc=function(){}();
lc&&(kc=lc?lc[1]:"");if(ec){var mc=ic();if(null!=mc&&mc>parseFloat(kc)){jc=String(mc);break a}}jc=kc}var nc=jc,oc;if(A.document&&ec){var pc=ic();oc=pc?pc:parseInt(nc,10)||void 0}else oc=void 0;var qc=oc;var rc=bc()||E("iPod"),sc=E("iPad");!E("Android")||Lb();Lb();var tc=E("Safari")&&!(Lb()||E("Coast")||E("Opera")||E("Edge")||E("Edg/")||E("OPR")||E("Firefox")||E("FxiOS")||E("Silk")||E("Android"))&&!(bc()||E("iPad")||E("iPod"));var vc={},wc=null;
function xc(a,b){Oa(a);void 0===b&&(b=0);if(!wc){wc={};for(var c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),d=["+/=","+/","-_=","-_.","-_"],e=0;5>e;e++){var f=c.concat(d[e].split(""));vc[e]=f;for(var g=0;g<f.length;g++){var h=f[g];void 0===wc[h]&&(wc[h]=g)}}}b=vc[b];c=Array(Math.floor(a.length/3));d=b[64]||"";for(e=f=0;f<a.length-2;f+=3){var k=a[f],l=a[f+1];h=a[f+2];g=b[k>>2];k=b[(k&3)<<4|l>>4];l=b[(l&15)<<2|h>>6];h=b[h&63];c[e++]=""+g+k+l+h}g=0;h=d;switch(a.length-
f){case 2:g=a[f+1],h=b[(g&15)<<2]||d;case 1:a=a[f],c[e]=""+b[a>>2]+b[(a&3)<<4|g>>4]+h+d}return c.join("")}
;var yc="undefined"!==typeof Uint8Array,zc={};var Ac;function Bc(a){if(zc!==zc)throw Error("illegal external caller");this.Ma=a;if(null!=a&&0===a.length)throw Error("ByteString should be constructed with non-empty values");}
Bc.prototype.isEmpty=function(){return null==this.Ma};var Cc="function"===typeof Symbol&&"symbol"===typeof Symbol()?Symbol(void 0):void 0;function Dc(a,b){Object.isFrozen(a)||(Cc?a[Cc]|=b:void 0!==a.ba?a.ba|=b:Object.defineProperties(a,{ba:{value:b,configurable:!0,writable:!0,enumerable:!1}}))}
function Ec(a){var b;Cc?b=a[Cc]:b=a.ba;return null==b?0:b}
function Fc(a){return Array.isArray(a)?!!(Ec(a)&1):!1}
function Gc(a){Dc(a,1);return a}
function Kc(a){return Array.isArray(a)?!!(Ec(a)&2):!1}
function Lc(a){if(!Array.isArray(a))throw Error("cannot mark non-array as immutable");Dc(a,2)}
function Mc(a,b){if(!Array.isArray(a))throw Error("cannot mark non-array as mutable");b?Dc(a,8):Object.isFrozen(a)||(Cc?a[Cc]&=-9:void 0!==a.ba&&(a.ba&=-9))}
;function Nc(a){return Kc(a.D)}
function Oc(a){return null!==a&&"object"===typeof a&&!Array.isArray(a)&&a.constructor===Object}
var Pc,Qc=Object.freeze(Gc([]));function Rc(a){if(Nc(a))throw Error("Cannot mutate an immutable Message");}
var Sc="undefined"!=typeof Symbol&&"undefined"!=typeof Symbol.hasInstance;function Tc(a){return{value:a,configurable:!1,writable:!1,enumerable:!1}}
;function Uc(a){A.setTimeout(function(){throw a;},0)}
;function Vc(a){return a.displayName||a.name||"unknown type name"}
function Wc(a,b){a instanceof b||Uc(Error("Expected instanceof "+Vc(b)+" but got "+(a&&Vc(a.constructor))));return a}
function Xc(a,b,c){c=void 0===c?!1:c;if(Array.isArray(a))return new b(a);if(c)return new b}
;function Yc(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "object":if(a&&!Array.isArray(a)){if(yc&&null!=a&&a instanceof Uint8Array)return xc(a);if(a instanceof Bc){var b=a.Ma;null!=b&&"string"!==typeof b&&(yc&&b instanceof Uint8Array?b=xc(b):(Na(b),b=null));return null==b?"":a.Ma=b}}}return a}
;function Zc(a,b){b=void 0===b?$c:b;return ad(a,b)}
function bd(a,b){if(null!=a){if(Array.isArray(a))a=ad(a,b);else if(Oc(a)){var c={},d;for(d in a)c[d]=bd(a[d],b);a=c}else a=b(a);return a}}
function ad(a,b){for(var c=a.slice(),d=0;d<c.length;d++)c[d]=bd(c[d],b);Fc(a)&&Gc(c);return c}
function cd(a){if(a&&"object"==typeof a&&a.toJSON)return a.toJSON();a=Yc(a);return Array.isArray(a)?Zc(a,cd):a}
function $c(a){return yc&&null!=a&&a instanceof Uint8Array?new Uint8Array(a):a}
;function dd(a){return a.j||(a.j=a.D[a.l+a.Z]={})}
function ed(a,b,c){return-1===b?null:b>=a.l?a.j?a.j[b]:void 0:(void 0===c?0:c)&&a.j&&(c=a.j[b],null!=c)?c:a.D[b+a.Z]}
function F(a,b,c,d,e){d=void 0===d?!1:d;(void 0===e?0:e)||Rc(a);b<a.l&&!d?a.D[b+a.Z]=c:dd(a)[b]=c;return a}
function fd(a,b,c,d){c=void 0===c?!0:c;var e=ed(a,b,d);Array.isArray(e)||(e=Qc);if(Nc(a))c&&(Lc(e),Object.freeze(e));else if(e===Qc||Kc(e))e=Gc(e.slice()),F(a,b,e,d);return e}
function gd(a,b,c,d){Rc(a);(c=hd(a,c))&&c!==b&&null!=d&&(a.i&&c in a.i&&(a.i[c]=void 0),F(a,c));return F(a,b,d)}
function hd(a,b){for(var c=0,d=0;d<b.length;d++){var e=b[d];null!=ed(a,e)&&(0!==c&&F(a,c,void 0,!1,!0),c=e)}return c}
function id(a,b,c,d,e){e=void 0===e?!1:e;var f=e;if(-1===c)d=null;else{a.i||(a.i={});var g=a.i[c];if(g)d=g;else{var h=ed(a,c,f);b=Xc(h,b,d);void 0==b?d=g:(d&&b.D!==h&&F(a,c,b.D,f,!0),a.i[c]=b,Nc(a)&&Lc(b.D),d=b)}}if(null==d)return d;Nc(d)&&!Nc(a)&&(d=d.La($b),F(a,c,d.D,e),a.i[c]=d);return d}
function jd(a,b,c,d,e){e=void 0===e?!0:e;a.i||(a.i={});var f=Nc(a),g=a.i[c];d=fd(a,c,!0,d);var h=f||Kc(d);if(!g){g=[];f=f||h;for(var k=0;k<d.length;k++){var l=d[k];f=f||Kc(l);l=Xc(l,b);void 0!==l&&(g.push(l),h&&Lc(l.D))}a.i[c]=g;Mc(d,!f)}b=h||e;e=Kc(g);b&&!e&&(Object.isFrozen(g)&&(a.i[c]=g=g.slice()),Lc(g),Object.freeze(g));!b&&e&&(a.i[c]=g=g.slice());return g}
function H(a,b,c,d){Rc(a);a.i||(a.i={});b=null!=d?Wc(d,b).D:d;a.i[c]=d;return F(a,c,b)}
function kd(a,b,c,d,e){Rc(a);a.i||(a.i={});b=null!=e?Wc(e,b).D:e;a.i[c]=e;gd(a,c,d,b)}
function ld(a,b,c,d){Rc(a);if(null!=d){var e=Gc([]);for(var f=!1,g=0;g<d.length;g++)e[g]=Wc(d[g],b).D,f=f||Kc(e[g]);a.i||(a.i={});a.i[c]=d;Mc(e,!f)}else a.i&&(a.i[c]=void 0),e=Qc;return F(a,c,e)}
function md(a,b,c,d){Rc(a);var e=jd(a,c,b,void 0,!1);c=null!=d?Wc(d,c):new c;a=fd(a,b);e.push(c);a.push(c.D);ac($b);Nc(c)&&Mc(a,!1)}
function nd(a,b){a=ed(a,b);return null==a?"":a}
;function od(a,b,c){a||(a=pd);pd=null;var d=this.constructor.j;a||(a=d?[d]:[]);this.Z=(d?0:-1)-(this.constructor.i||0);this.i=void 0;this.D=a;a:{d=this.D.length;a=d-1;if(d&&(d=this.D[a],Oc(d))){this.l=a-this.Z;this.j=d;break a}void 0!==b&&-1<b?(this.l=Math.max(b,a+1-this.Z),this.j=void 0):this.l=Number.MAX_VALUE}if(c)for(b=0;b<c.length;b++)if(a=c[b],a<this.l)a+=this.Z,(d=this.D[a])?Array.isArray(d)&&Gc(d):this.D[a]=Qc;else{d=dd(this);var e=d[a];e?Array.isArray(e)&&Gc(e):d[a]=Qc}}
od.prototype.toJSON=function(){var a=this.D;return Pc?a:Zc(a,cd)};
function qd(a){Pc=!0;try{return JSON.stringify(a.toJSON(),rd)}finally{Pc=!1}}
od.prototype.clone=function(){var a=Zc(this.D);pd=a;a=new this.constructor(a);pd=null;sd(a,this);return a};
od.prototype.isMutable=function(a){ac(a);return!Nc(this)};
od.prototype.toString=function(){return this.D.toString()};
function rd(a,b){return Yc(b)}
function sd(a,b){b.ja&&(a.ja=b.ja.slice());var c=b.i;if(c){b=b.j;for(var d in c){var e=c[d];if(e){var f=!(!b||!b[d]),g=+d;if(Array.isArray(e)){if(e.length){var h=a,k=e[0].constructor,l=f;l=void 0===l?!1:l;f=Nc(h);k=jd(h,k,g,l,f);g=fd(h,g,l);if(!(h=f)&&(h=g)){h=g;if(!Array.isArray(h))throw Error("cannot check mutability state of non-array");h=!(Ec(h)&8)}if(h){for(h=0;h<k.length;h++)(l=k[h])&&Nc(l)&&!f&&(k[h]=k[h].La($b),g[h]=k[h].D);Mc(g,!0)}f=k;for(k=0;k<Math.min(f.length,e.length);k++)sd(f[k],e[k])}}else(f=
id(a,e.constructor,g,void 0,f))&&sd(f,e)}}}}
var pd;function td(){od.apply(this,arguments)}
v(td,od);td.prototype.La=function(){return this};
if(Sc){var ud={};Object.defineProperties(td,(ud[Symbol.hasInstance]=Tc(function(){throw Error("Cannot perform instanceof checks for MutableMessage");}),ud))};function vd(a,b,c,d,e,f){(a=a.i&&a.i[c])?Array.isArray(a)?(e=f.Ca?Gc(a.slice()):a,ld(b,0<e.length?e[0].constructor:void 0,c,e)):H(b,a.constructor,c,a):(yc&&d instanceof Uint8Array?e=d.length?new Bc(new Uint8Array(d)):Ac||(Ac=new Bc(null)):(Array.isArray(d)&&(e?Lc(d):Fc(d)&&f.Ca&&(d=d.slice())),e=d),F(b,c,e))}
;function I(){td.apply(this,arguments)}
v(I,td);I.prototype.La=function(a){ac(a);if(Nc(this)){a={Ca:!0};var b=Nc(this);if(b&&!a.Ca)throw Error("copyRepeatedFields must be true for frozen messages");var c=new this.constructor;this.ja&&(c.ja=this.ja.slice());for(var d=this.D,e=0;e<d.length;e++){var f=d[e];if(e===d.length-1&&Oc(f))for(h in f){var g=+h;Number.isNaN(g)?dd(c)[h]=f[h]:vd(this,c,g,f[h],b,a)}else vd(this,c,e-this.Z,f,b,a)}var h=c}else h=this;return h};
if(Sc){var wd={};Object.defineProperties(I,(wd[Symbol.hasInstance]=Tc(Object[Symbol.hasInstance]),wd))};var xd=window;xb("csi.gstatic.com");xb("googleads.g.doubleclick.net");xb("partner.googleadservices.com");xb("pubads.g.doubleclick.net");xb("securepubads.g.doubleclick.net");xb("tpc.googlesyndication.com");/*

 SPDX-License-Identifier: Apache-2.0
*/
function yd(a){this.isValid=a}
function zd(a){return new yd(function(b){return b.substr(0,a.length+1).toLowerCase()===a+":"})}
var Ad=[zd("data"),zd("http"),zd("https"),zd("mailto"),zd("ftp"),new yd(function(a){return/^[^:]*([/?#]|$)/.test(a)})];
function Bd(a,b){b=void 0===b?Ad:b;for(var c=0;c<b.length;++c){var d=b[c];if(d instanceof yd&&d.isValid(a))return new Hb(a,Ib)}}
function Cd(a){var b=void 0===b?Ad:b;return Bd(a,b)||Jb}
;function Dd(a,b){a.removeAttribute("srcdoc");b instanceof Hb&&b.constructor===Hb?b=b.i:(Na(b),b="type_error:SafeUrl");a.src=b;for(b="allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox allow-storage-access-by-user-activation".split(" ");0<a.sandbox.length;)a.sandbox.remove(a.sandbox.item(0));for(var c=0;c<b.length;c++)a.sandbox.supports&&!a.sandbox.supports(b[c])||a.sandbox.add(b[c])}
;function Ed(a,b){this.width=a;this.height=b}
n=Ed.prototype;n.clone=function(){return new Ed(this.width,this.height)};
n.aspectRatio=function(){return this.width/this.height};
n.isEmpty=function(){return!(this.width*this.height)};
n.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
n.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
n.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function Fd(){var a=document;var b="IFRAME";"application/xhtml+xml"===a.contentType&&(b=b.toLowerCase());return a.createElement(b)}
function Gd(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;function Hd(a){var b=Id;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a(b[c],c,b)}
function Jd(){var a=[];Hd(function(b){a.push(b)});
return a}
var Id={Ab:"allow-forms",Bb:"allow-modals",Cb:"allow-orientation-lock",Db:"allow-pointer-lock",Eb:"allow-popups",Fb:"allow-popups-to-escape-sandbox",Gb:"allow-presentation",Hb:"allow-same-origin",Ib:"allow-scripts",Jb:"allow-top-navigation",Kb:"allow-top-navigation-by-user-activation"},Kd=bb(function(){return Jd()});
function Ld(){var a=Od(),b={};D(Kd(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
function Od(){var a=void 0===a?document:a;return a.createElement("iframe")}
;var Pd=(new Date).getTime();function Qd(a){if(!a)return"";if(/^about:(?:blank|srcdoc)$/.test(a))return window.origin||"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if("http"!==c&&"https"!==c&&"chrome-extension"!==c&&"moz-extension"!==c&&"file"!==c&&"android-app"!==
c&&"chrome-search"!==c&&"chrome-untrusted"!==c&&"chrome"!==c&&"app"!==c&&"devtools"!==c)throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===c&&"80"!==e||"https"===c&&"443"!==e)a=":"+e}return c+"://"+b+a}
;var Rd="client_dev_mss_url client_dev_regex_map client_dev_root_url client_rollout_override expflag forcedCapability jsfeat jsmode mods".split(" ");ia(Rd);function Sd(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;m=l=0}
function b(q){for(var t=g,p=0;64>p;p+=4)t[p/4]=q[p]<<24|q[p+1]<<16|q[p+2]<<8|q[p+3];for(p=16;80>p;p++)q=t[p-3]^t[p-8]^t[p-14]^t[p-16],t[p]=(q<<1|q>>>31)&4294967295;q=e[0];var y=e[1],z=e[2],G=e[3],K=e[4];for(p=0;80>p;p++){if(40>p)if(20>p){var M=G^y&(z^G);var P=1518500249}else M=y^z^G,P=1859775393;else 60>p?(M=y&z|G&(y|z),P=2400959708):(M=y^z^G,P=3395469782);M=((q<<5|q>>>27)&4294967295)+M+K+P+t[p]&4294967295;K=G;G=z;z=(y<<30|y>>>2)&4294967295;y=q;q=M}e[0]=e[0]+q&4294967295;e[1]=e[1]+y&4294967295;e[2]=
e[2]+z&4294967295;e[3]=e[3]+G&4294967295;e[4]=e[4]+K&4294967295}
function c(q,t){if("string"===typeof q){q=unescape(encodeURIComponent(q));for(var p=[],y=0,z=q.length;y<z;++y)p.push(q.charCodeAt(y));q=p}t||(t=q.length);p=0;if(0==l)for(;p+64<t;)b(q.slice(p,p+64)),p+=64,m+=64;for(;p<t;)if(f[l++]=q[p++],m++,64==l)for(l=0,b(f);p+64<t;)b(q.slice(p,p+64)),p+=64,m+=64}
function d(){var q=[],t=8*m;56>l?c(h,56-l):c(h,64-(l-56));for(var p=63;56<=p;p--)f[p]=t&255,t>>>=8;b(f);for(p=t=0;5>p;p++)for(var y=24;0<=y;y-=8)q[t++]=e[p]>>y&255;return q}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var l,m;a();return{reset:a,update:c,digest:d,nb:function(){for(var q=d(),t="",p=0;p<q.length;p++)t+="0123456789ABCDEF".charAt(Math.floor(q[p]/16))+"0123456789ABCDEF".charAt(q[p]%16);return t}}}
;function Td(a,b,c){var d=String(A.location.href);return d&&a&&b?[b,Ud(Qd(d),a,c||null)].join(" "):null}
function Ud(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],D(d,function(h){e.push(h)}),Vd(e.join(" "));
var f=[],g=[];D(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];D(d,function(h){e.push(h)});
a=Vd(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function Vd(a){var b=Sd();b.update(a);return b.nb().toLowerCase()}
;var Wd={};function Xd(a){this.i=a||{cookie:""}}
n=Xd.prototype;n.isEnabled=function(){if(!A.navigator.cookieEnabled)return!1;if(!this.isEmpty())return!0;this.set("TESTCOOKIESENABLED","1",{Fa:60});if("1"!==this.get("TESTCOOKIESENABLED"))return!1;this.remove("TESTCOOKIESENABLED");return!0};
n.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.Wb;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.Fa}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===h&&(h=-1);c=f?";domain="+f:"";g=g?";path="+g:"";d=d?";secure":"";h=0>h?"":0==h?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+1E3*h)).toUTCString();this.i.cookie=a+"="+b+c+g+h+d+(null!=e?";samesite="+
e:"")};
n.get=function(a,b){for(var c=a+"=",d=(this.i.cookie||"").split(";"),e=0,f;e<d.length;e++){f=zb(d[e]);if(0==f.lastIndexOf(c,0))return f.slice(c.length);if(f==a)return""}return b};
n.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{Fa:0,path:b,domain:c});return d};
n.isEmpty=function(){return!this.i.cookie};
n.clear=function(){for(var a=(this.i.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=zb(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var Yd=new Xd("undefined"==typeof document?null:document);function Zd(a){return!!Wd.FPA_SAMESITE_PHASE2_MOD||!(void 0===a||!a)}
function $d(a,b,c,d){(a=A[a])||(a=(new Xd(document)).get(b));return a?Td(a,c,d):null}
function ae(a){var b=void 0===b?!1:b;var c=Qd(String(A.location.href)),d=[];var e=b;e=void 0===e?!1:e;var f=A.__SAPISID||A.__APISID||A.__3PSAPISID||A.__OVERRIDE_SID;Zd(e)&&(f=f||A.__1PSAPISID);if(f)e=!0;else{var g=new Xd(document);f=g.get("SAPISID")||g.get("APISID")||g.get("__Secure-3PAPISID")||g.get("SID");Zd(e)&&(f=f||g.get("__Secure-1PAPISID"));e=!!f}e&&(e=(c=0==c.indexOf("https:")||0==c.indexOf("chrome-extension:")||0==c.indexOf("moz-extension:"))?A.__SAPISID:A.__APISID,e||(e=new Xd(document),
e=e.get(c?"SAPISID":"APISID")||e.get("__Secure-3PAPISID")),(e=e?Td(e,c?"SAPISIDHASH":"APISIDHASH",a):null)&&d.push(e),c&&Zd(b)&&((b=$d("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",a))&&d.push(b),(a=$d("__3PSAPISID","__Secure-3PAPISID","SAPISID3PHASH",a))&&d.push(a)));return 0==d.length?null:d.join(" ")}
;function be(){this.o=this.o;this.v=this.v}
be.prototype.o=!1;be.prototype.dispose=function(){this.o||(this.o=!0,this.ia())};
be.prototype.ia=function(){if(this.v)for(;this.v.length;)this.v.shift()()};function ce(a,b){this.type=a;this.i=this.target=b;this.defaultPrevented=this.l=!1}
ce.prototype.stopPropagation=function(){this.l=!0};
ce.prototype.preventDefault=function(){this.defaultPrevented=!0};function de(a){var b=B("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||A.$googDebugFname||b}catch(g){e="Not available",c=!0}b=ee(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(null==
c){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,fe[c])c=fe[c];else{c=String(c);if(!fe[c]){var f=/function\s+([^\(]+)/m.exec(c);fe[c]=f?f[1]:"[Anonymous]"}c=fe[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";"function"===typeof a.toString&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}a.stack=
b;return{message:a.message,name:a.name,lineNumber:a.lineNumber,fileName:a.fileName,stack:a.stack}}
function ee(a,b){b||(b={});b[ge(a)]=!0;var c=a.stack||"";(a=a.cause)&&!b[ge(a)]&&(c+="\nCaused by: ",a.stack&&0==a.stack.indexOf(a.toString())||(c+="string"===typeof a?a:a.message+"\n"),c+=ee(a,b));return c}
function ge(a){var b="";"function"===typeof a.toString&&(b=""+a);return b+a.stack}
var fe={};var he=function(){if(!A.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{A.addEventListener("test",function(){},b),A.removeEventListener("test",function(){},b)}catch(c){}return a}();function ie(a,b){ce.call(this,a?a.type:"");this.relatedTarget=this.i=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.j=null;a&&this.init(a,b)}
Wa(ie,ce);var je={2:"touch",3:"pen",4:"mouse"};
ie.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.i=b;if(b=a.relatedTarget){if(gc){a:{try{cc(b.nodeName);var e=!0;break a}catch(f){}e=!1}e||(b=null)}}else"mouseover"==c?b=a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||
0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:je[a.pointerType]||"";this.state=a.state;
this.j=a;a.defaultPrevented&&ie.O.preventDefault.call(this)};
ie.prototype.stopPropagation=function(){ie.O.stopPropagation.call(this);this.j.stopPropagation?this.j.stopPropagation():this.j.cancelBubble=!0};
ie.prototype.preventDefault=function(){ie.O.preventDefault.call(this);var a=this.j;a.preventDefault?a.preventDefault():a.returnValue=!1};var ke="closure_listenable_"+(1E6*Math.random()|0);var le=0;function me(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.wa=e;this.key=++le;this.la=this.ra=!1}
function ne(a){a.la=!0;a.listener=null;a.proxy=null;a.src=null;a.wa=null}
;function oe(a){this.src=a;this.listeners={};this.i=0}
oe.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.i++);var g=pe(a,b,d,e);-1<g?(b=a[g],c||(b.ra=!1)):(b=new me(b,this.src,f,!!d,e),b.ra=c,a.push(b));return b};
oe.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=pe(e,b,c,d);return-1<b?(ne(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.listeners[a],this.i--),!0):!1};
function qe(a,b){var c=b.type;c in a.listeners&&eb(a.listeners[c],b)&&(ne(b),0==a.listeners[c].length&&(delete a.listeners[c],a.i--))}
function pe(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.la&&f.listener==b&&f.capture==!!c&&f.wa==d)return e}return-1}
;var re="closure_lm_"+(1E6*Math.random()|0),se={},te=0;function ue(a,b,c,d,e){if(d&&d.once)ve(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)ue(a,b[f],c,d,e);else c=we(c),a&&a[ke]?a.S(b,c,Pa(d)?!!d.capture:!!d,e):xe(a,b,c,!1,d,e)}
function xe(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=Pa(e)?!!e.capture:!!e,h=ye(a);h||(a[re]=h=new oe(a));c=h.add(b,c,d,g,f);if(!c.proxy){d=ze();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)he||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(Ae(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");te++}}
function ze(){function a(c){return b.call(a.src,a.listener,c)}
var b=Be;return a}
function ve(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)ve(a,b[f],c,d,e);else c=we(c),a&&a[ke]?a.l.add(String(b),c,!0,Pa(d)?!!d.capture:!!d,e):xe(a,b,c,!0,d,e)}
function Ce(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Ce(a,b[f],c,d,e);else(d=Pa(d)?!!d.capture:!!d,c=we(c),a&&a[ke])?a.l.remove(String(b),c,d,e):a&&(a=ye(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=pe(b,c,d,e)),(c=-1<a?b[a]:null)&&De(c))}
function De(a){if("number"!==typeof a&&a&&!a.la){var b=a.src;if(b&&b[ke])qe(b.l,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(Ae(c),d):b.addListener&&b.removeListener&&b.removeListener(d);te--;(c=ye(b))?(qe(c,a),0==c.i&&(c.src=null,b[re]=null)):ne(a)}}}
function Ae(a){return a in se?se[a]:se[a]="on"+a}
function Be(a,b){if(a.la)a=!0;else{b=new ie(b,this);var c=a.listener,d=a.wa||a.src;a.ra&&De(a);a=c.call(d,b)}return a}
function ye(a){a=a[re];return a instanceof oe?a:null}
var Ee="__closure_events_fn_"+(1E9*Math.random()>>>0);function we(a){if("function"===typeof a)return a;a[Ee]||(a[Ee]=function(b){return a.handleEvent(b)});
return a[Ee]}
;function J(){be.call(this);this.l=new oe(this);this.Aa=this;this.J=null}
Wa(J,be);J.prototype[ke]=!0;J.prototype.addEventListener=function(a,b,c,d){ue(this,a,b,c,d)};
J.prototype.removeEventListener=function(a,b,c,d){Ce(this,a,b,c,d)};
function Fe(a,b){var c=a.J;if(c){var d=[];for(var e=1;c;c=c.J)d.push(c),++e}a=a.Aa;c=b.type||b;"string"===typeof b?b=new ce(b,a):b instanceof ce?b.target=b.target||a:(e=b,b=new ce(c,a),ub(b,e));e=!0;if(d)for(var f=d.length-1;!b.l&&0<=f;f--){var g=b.i=d[f];e=Ge(g,c,!0,b)&&e}b.l||(g=b.i=a,e=Ge(g,c,!0,b)&&e,b.l||(e=Ge(g,c,!1,b)&&e));if(d)for(f=0;!b.l&&f<d.length;f++)g=b.i=d[f],e=Ge(g,c,!1,b)&&e}
J.prototype.ia=function(){}