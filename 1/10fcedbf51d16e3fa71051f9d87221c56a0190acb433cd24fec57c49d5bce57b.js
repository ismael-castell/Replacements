(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';var l;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var da="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ea(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var fa=ea(this);function n(a,b){if(b)a:{var c=fa;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&da(c,a,{configurable:!0,writable:!0,value:b})}}
n("Symbol",function(a){function b(f){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(f||"")+"_"+e++,f)}
function c(f,g){this.i=f;da(this,"description",{configurable:!0,writable:!0,value:g})}
if(a)return a;c.prototype.toString=function(){return this.i};
var d="jscomp_symbol_"+(1E9*Math.random()>>>0)+"_",e=0;return b});
n("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=fa[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&da(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ha(aa(this))}})}return a});
function ha(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function p(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}
function ia(a){if(!(a instanceof Array)){a=p(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}
function ja(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var ka="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)ja(d,e)&&(a[e]=d[e])}return a};
n("Object.assign",function(a){return a||ka});
var la="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},ma=function(){function a(){function c(){}
new c;Reflect.construct(c,[],function(){});
return new c instanceof c}
if("undefined"!=typeof Reflect&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(c,d,e){c=b(c,d);e&&Reflect.setPrototypeOf(c,e.prototype);return c}}return function(c,d,e){void 0===e&&(e=c);
e=la(e.prototype||Object.prototype);return Function.prototype.apply.call(c,e,d)||e}}(),na;
if("function"==typeof Object.setPrototypeOf)na=Object.setPrototypeOf;else{var oa;a:{var pa={a:!0},qa={};try{qa.__proto__=pa;oa=qa.a;break a}catch(a){}oa=!1}na=oa?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var ra=na;
function r(a,b){a.prototype=la(b.prototype);a.prototype.constructor=a;if(ra)ra(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.Z=b.prototype}
function sa(){this.C=!1;this.o=null;this.j=void 0;this.i=1;this.m=this.s=0;this.v=this.l=null}
function ta(a){if(a.C)throw new TypeError("Generator is already running");a.C=!0}
sa.prototype.N=function(a){this.j=a};
function ua(a,b){a.l={Rb:b,Xb:!0};a.i=a.s||a.m}
sa.prototype.return=function(a){this.l={return:a};this.i=this.m};
function v(a,b,c){a.i=c;return{value:b}}
sa.prototype.u=function(a){this.i=a};
function va(a,b,c){a.s=b;void 0!=c&&(a.m=c)}
function wa(a,b){a.i=b;a.s=0}
function xa(a){a.s=0;var b=a.l.Rb;a.l=null;return b}
function Aa(a){a.v=[a.l];a.s=0;a.m=0}
function Ba(a){var b=a.v.splice(0)[0];(b=a.l=a.l||b)?b.Xb?a.i=a.s||a.m:void 0!=b.u&&a.m<b.u?(a.i=b.u,a.l=null):a.i=a.m:a.i=0}
function Ca(a){this.i=new sa;this.j=a}
function Da(a,b){ta(a.i);var c=a.i.o;if(c)return Ea(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.i.return);
a.i.return(b);return Ga(a)}
function Ea(a,b,c,d){try{var e=b.call(a.i.o,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.i.C=!1,e;var f=e.value}catch(g){return a.i.o=null,ua(a.i,g),Ga(a)}a.i.o=null;d.call(a.i,f);return Ga(a)}
function Ga(a){for(;a.i.i;)try{var b=a.j(a.i);if(b)return a.i.C=!1,{value:b.value,done:!1}}catch(c){a.i.j=void 0,ua(a.i,c)}a.i.C=!1;if(a.i.l){b=a.i.l;a.i.l=null;if(b.Xb)throw b.Rb;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function Ha(a){this.next=function(b){ta(a.i);a.i.o?b=Ea(a,a.i.o.next,b,a.i.N):(a.i.N(b),b=Ga(a));return b};
this.throw=function(b){ta(a.i);a.i.o?b=Ea(a,a.i.o["throw"],b,a.i.N):(ua(a.i,b),b=Ga(a));return b};
this.return=function(b){return Da(a,b)};
this[Symbol.iterator]=function(){return this}}
function Ia(a){function b(d){return a.next(d)}
function c(d){return a.throw(d)}
return new Promise(function(d,e){function f(g){g.done?d(g.value):Promise.resolve(g.value).then(b,c).then(f,e)}
f(a.next())})}
function w(a){return Ia(new Ha(new Ca(a)))}
function Ja(){for(var a=Number(this),b=[],c=a;c<arguments.length;c++)b[c-a]=arguments[c];return b}
n("Reflect",function(a){return a?a:{}});
n("Reflect.construct",function(){return ma});
n("Reflect.setPrototypeOf",function(a){return a?a:ra?function(b,c){try{return ra(b,c),!0}catch(d){return!1}}:null});
n("Promise",function(a){function b(g){this.i=0;this.l=void 0;this.j=[];this.C=!1;var h=this.o();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.i=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.j=function(g){if(null==this.i){this.i=[];var h=this;this.l(function(){h.m()})}this.i.push(g)};
var e=fa.setTimeout;c.prototype.l=function(g){e(g,0)};
c.prototype.m=function(){for(;this.i&&this.i.length;){var g=this.i;this.i=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(m){this.o(m)}}}this.i=null};
c.prototype.o=function(g){this.l(function(){throw g;})};
b.prototype.o=function(){function g(m){return function(q){k||(k=!0,m.call(h,q))}}
var h=this,k=!1;return{resolve:g(this.K),reject:g(this.m)}};
b.prototype.K=function(g){if(g===this)this.m(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.R(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.G(g):this.s(g)}};
b.prototype.G=function(g){var h=void 0;try{h=g.then}catch(k){this.m(k);return}"function"==typeof h?this.T(h,g):this.s(g)};
b.prototype.m=function(g){this.N(2,g)};
b.prototype.s=function(g){this.N(1,g)};
b.prototype.N=function(g,h){if(0!=this.i)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.i);this.i=g;this.l=h;2===this.i&&this.P();this.v()};
b.prototype.P=function(){var g=this;e(function(){if(g.B()){var h=fa.console;"undefined"!==typeof h&&h.error(g.l)}},1)};
b.prototype.B=function(){if(this.C)return!1;var g=fa.CustomEvent,h=fa.Event,k=fa.dispatchEvent;if("undefined"===typeof k)return!0;"function"===typeof g?g=new g("unhandledrejection",{cancelable:!0}):"function"===typeof h?g=new h("unhandledrejection",{cancelable:!0}):(g=fa.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.l;return k(g)};
b.prototype.v=function(){if(null!=this.j){for(var g=0;g<this.j.length;++g)f.j(this.j[g]);this.j=null}};
var f=new c;b.prototype.R=function(g){var h=this.o();g.Ua(h.resolve,h.reject)};
b.prototype.T=function(g,h){var k=this.o();try{g.call(h,k.resolve,k.reject)}catch(m){k.reject(m)}};
b.prototype.then=function(g,h){function k(x,u){return"function"==typeof x?function(A){try{m(x(A))}catch(D){q(D)}}:u}
var m,q,t=new b(function(x,u){m=x;q=u});
this.Ua(k(g,m),k(h,q));return t};
b.prototype.catch=function(g){return this.then(void 0,g)};
b.prototype.Ua=function(g,h){function k(){switch(m.i){case 1:g(m.l);break;case 2:h(m.l);break;default:throw Error("Unexpected state: "+m.i);}}
var m=this;null==this.j?f.j(k):this.j.push(k);this.C=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var m=p(g),q=m.next();!q.done;q=m.next())d(q.value).Ua(h,k)})};
b.all=function(g){var h=p(g),k=h.next();return k.done?d([]):new b(function(m,q){function t(A){return function(D){x[A]=D;u--;0==u&&m(x)}}
var x=[],u=0;do x.push(void 0),u++,d(k.value).Ua(t(x.length-1),q),k=h.next();while(!k.done)})};
return b});
n("WeakMap",function(a){function b(k){this.i=(h+=Math.random()+1).toString();if(k){k=p(k);for(var m;!(m=k.next()).done;)m=m.value,this.set(m[0],m[1])}}
function c(){}
function d(k){var m=typeof k;return"object"===m&&null!==k||"function"===m}
function e(k){if(!ja(k,g)){var m=new c;da(k,g,{value:m})}}
function f(k){var m=Object[k];m&&(Object[k]=function(q){if(q instanceof c)return q;Object.isExtensible(q)&&e(q);return m(q)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),m=Object.seal({}),q=new a([[k,2],[m,3]]);if(2!=q.get(k)||3!=q.get(m))return!1;q.delete(k);q.set(m,4);return!q.has(k)&&4==q.get(m)}catch(t){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,m){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!ja(k,g))throw Error("WeakMap key fail: "+k);k[g][this.i]=m;return this};
b.prototype.get=function(k){return d(k)&&ja(k,g)?k[g][this.i]:void 0};
b.prototype.has=function(k){return d(k)&&ja(k,g)&&ja(k[g],this.i)};
b.prototype.delete=function(k){return d(k)&&ja(k,g)&&ja(k[g],this.i)?delete k[g][this.i]:!1};
return b});
n("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var m=h.i;return ha(function(){if(m){for(;m.head!=h.i;)m=m.previous;for(;m.next!=m.head;)return m=m.next,{done:!1,value:k(m)};m=null}return{done:!0,value:void 0}})}
function d(h,k){var m=k&&typeof k;"object"==m||"function"==m?f.has(k)?m=f.get(k):(m=""+ ++g,f.set(k,m)):m="p_"+k;var q=h.data_[m];if(q&&ja(h.data_,m))for(h=0;h<q.length;h++){var t=q[h];if(k!==k&&t.key!==t.key||k===t.key)return{id:m,list:q,index:h,entry:t}}return{id:m,list:q,index:-1,entry:void 0}}
function e(h){this.data_={};this.i=b();this.size=0;if(h){h=p(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),k=new a(p([[h,"s"]]));if("s"!=k.get(h)||1!=k.size||k.get({x:4})||k.set({x:4},"t")!=k||2!=k.size)return!1;var m=k.entries(),q=m.next();if(q.done||q.value[0]!=h||"s"!=q.value[1])return!1;q=m.next();return q.done||4!=q.value[0].x||"t"!=q.value[1]||!m.next().done?!1:!0}catch(t){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,k){h=0===h?0:h;var m=d(this,h);m.list||(m.list=this.data_[m.id]=[]);m.entry?m.entry.value=k:(m.entry={next:this.i,previous:this.i.previous,head:this.i,key:h,value:k},m.list.push(m.entry),this.i.previous.next=m.entry,this.i.previous=m.entry,this.size++);return this};
e.prototype.delete=function(h){h=d(this,h);return h.entry&&h.list?(h.list.splice(h.index,1),h.list.length||delete this.data_[h.id],h.entry.previous.next=h.entry.next,h.entry.next.previous=h.entry.previous,h.entry.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.data_={};this.i=this.i.previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).entry};
e.prototype.get=function(h){return(h=d(this,h).entry)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var m=this.entries(),q;!(q=m.next()).done;)q=q.value,h.call(k,q[1],q[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
function Ka(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
n("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=Ka(this,b,"endsWith");b+="";void 0===c&&(c=d.length);c=Math.max(0,Math.min(c|0,d.length));for(var e=b.length;0<e&&0<c;)if(d[--c]!=b[--e])return!1;return 0>=e}});
n("Array.prototype.find",function(a){return a?a:function(b,c){a:{var d=this;d instanceof String&&(d=String(d));for(var e=d.length,f=0;f<e;f++){var g=d[f];if(b.call(c,g,f,d)){b=g;break a}}b=void 0}return b}});
n("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=Ka(this,b,"startsWith");b+="";var e=d.length,f=b.length;c=Math.max(0,Math.min(c|0,d.length));for(var g=0;g<f&&c<e;)if(d[c++]!=b[g++])return!1;return g>=f}});
n("Number.isFinite",function(a){return a?a:function(b){return"number"!==typeof b?!1:!isNaN(b)&&Infinity!==b&&-Infinity!==b}});
n("Number.isInteger",function(a){return a?a:function(b){return Number.isFinite(b)?b===Math.floor(b):!1}});
n("Number.MAX_SAFE_INTEGER",function(){return 9007199254740991});
function La(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
n("Array.prototype.entries",function(a){return a?a:function(){return La(this,function(b,c){return[b,c]})}});
n("Number.isNaN",function(a){return a?a:function(b){return"number"===typeof b&&isNaN(b)}});
n("Array.prototype.keys",function(a){return a?a:function(){return La(this,function(b){return b})}});
n("Set",function(a){function b(c){this.i=new Map;if(c){c=p(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.i.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(p([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=0===c?0:c;this.i.set(c,c);this.size=this.i.size;return this};
b.prototype.delete=function(c){c=this.i.delete(c);this.size=this.i.size;return c};
b.prototype.clear=function(){this.i.clear();this.size=0};
b.prototype.has=function(c){return this.i.has(c)};
b.prototype.entries=function(){return this.i.entries()};
b.prototype.values=function(){return this.i.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.i.forEach(function(f){return c.call(d,f,f,e)})};
return b});
n("Array.prototype.values",function(a){return a?a:function(){return La(this,function(b,c){return c})}});
n("Array.from",function(a){return a?a:function(b,c,d){c=null!=c?c:function(h){return h};
var e=[],f="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];if("function"==typeof f){b=f.call(b);for(var g=0;!(f=b.next()).done;)e.push(c.call(d,f.value,g++))}else for(f=b.length,g=0;g<f;g++)e.push(c.call(d,b[g],g));return e}});
n("Object.setPrototypeOf",function(a){return a||ra});
n("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
n("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(0>c&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});
n("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==Ka(this,b,"includes").indexOf(b,c||0)}});
n("globalThis",function(a){return a||fa});
n("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)ja(b,d)&&c.push([d,b[d]]);return c}});
n("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)ja(b,d)&&c.push(b[d]);return c}});
var Ma=Ma||{},y=this||self;function z(a,b,c){a=a.split(".");c=c||y;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function B(a,b){a=a.split(".");b=b||y;for(var c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b}
function Na(a){a.tb=void 0;a.getInstance=function(){return a.tb?a.tb:a.tb=new a}}
function Oa(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"}
function Pa(a){var b=Oa(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function Qa(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Ra(a){return Object.prototype.hasOwnProperty.call(a,Sa)&&a[Sa]||(a[Sa]=++Ta)}
var Sa="closure_uid_"+(1E9*Math.random()>>>0),Ta=0;function Va(a,b,c){return a.call.apply(a.bind,arguments)}
function Wa(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function Xa(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Xa=Va:Xa=Wa;return Xa.apply(null,arguments)}
function Ya(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}
function Za(a,b){function c(){}
c.prototype=b.prototype;a.Z=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.fq=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
function $a(a){return a}
;function ab(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,ab);else{var c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));void 0!==b&&(this.cause=b)}
Za(ab,Error);ab.prototype.name="CustomError";function bb(a){a=a.url;var b=/[?&]dsh=1(&|$)/.test(a);this.l=!b&&/[?&]ae=1(&|$)/.test(a);this.o=!b&&/[?&]ae=2(&|$)/.test(a);if((this.i=/[?&]adurl=([^&]*)/.exec(a))&&this.i[1]){try{var c=decodeURIComponent(this.i[1])}catch(d){c=null}this.j=c}}
;function cb(){}
function db(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;var eb=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},fb=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},gb=Array.prototype.filter?function(a,b){return Array.prototype.filter.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=[],e=0,f="string"===typeof a?a.split(""):a,g=0;g<c;g++)if(g in f){var h=f[g];
b.call(void 0,h,g,a)&&(d[e++]=h)}return d},hb=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e="string"===typeof a?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));
return d},ib=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
fb(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function jb(a,b){a:{for(var c=a.length,d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return 0>b?null:"string"===typeof a?a.charAt(b):a[b]}
function kb(a,b){b=eb(a,b);var c;(c=0<=b)&&Array.prototype.splice.call(a,b,1);return c}
function lb(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Pa(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function mb(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function nb(a){var b=ob,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function pb(a){for(var b in a)return!1;return!0}
function qb(a,b){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function rb(a){return null!==a&&"privembed"in a?a.privembed:!1}
function sb(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function tb(a){var b={},c;for(c in a)b[c]=a[c];return b}
function ub(a){if(!a||"object"!==typeof a)return a;if("function"===typeof a.clone)return a.clone();if("undefined"!==typeof Map&&a instanceof Map)return new Map(a);if("undefined"!==typeof Set&&a instanceof Set)return new Set(a);var b=Array.isArray(a)?[]:"function"!==typeof ArrayBuffer||"function"!==typeof ArrayBuffer.isView||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=ub(a[c]);return b}
var vb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function wb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<vb.length;f++)c=vb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var xb;function yb(){if(void 0===xb){var a=null,b=y.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:$a,createScript:$a,createScriptURL:$a})}catch(c){y.console&&y.console.error(c.message)}xb=a}else xb=a}return xb}
;function Bb(a,b){this.l=a===Cb&&b||""}
Bb.prototype.j=!0;Bb.prototype.i=function(){return this.l};
function Db(a){return new Bb(Cb,a)}
var Cb={};Db("");var Eb={};function Fb(a){this.l=Eb===Eb?a:"";this.j=!0}
Fb.prototype.toString=function(){return this.l.toString()};
Fb.prototype.i=function(){return this.l.toString()};function Gb(a,b){this.l=b===Hb?a:""}
Gb.prototype.toString=function(){return this.l+""};
Gb.prototype.j=!0;Gb.prototype.i=function(){return this.l.toString()};
function Ib(a){if(a instanceof Gb&&a.constructor===Gb)return a.l;Oa(a);return"type_error:TrustedResourceUrl"}
var Hb={};function Jb(a){var b=yb();a=b?b.createScriptURL(a):a;return new Gb(a,Hb)}
;var Kb=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};
function Lb(a,b){return a<b?-1:a>b?1:0}
;function Mb(a,b){this.l=b===Nb?a:""}
Mb.prototype.toString=function(){return this.l.toString()};
Mb.prototype.j=!0;Mb.prototype.i=function(){return this.l.toString()};
function Ob(a){if(a instanceof Mb&&a.constructor===Mb)return a.l;Oa(a);return"type_error:SafeUrl"}
var Pb=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,Nb={},Qb=new Mb("about:invalid#zClosurez",Nb);function Rb(){var a=y.navigator;return a&&(a=a.userAgent)?a:""}
function C(a){return-1!=Rb().indexOf(a)}
;function Sb(){return C("Trident")||C("MSIE")}
function Tb(){return C("Firefox")||C("FxiOS")}
function Ub(){return C("Safari")&&!(Vb()||C("Coast")||C("Opera")||C("Edge")||C("Edg/")||C("OPR")||Tb()||C("Silk")||C("Android"))}
function Vb(){return(C("Chrome")||C("CriOS"))&&!C("Edge")||C("Silk")}
function Yb(){return C("Android")&&!(Vb()||Tb()||C("Opera")||C("Silk"))}
function Zb(a){var b={};a.forEach(function(c){b[c[0]]=c[1]});
return function(c){return b[c.find(function(d){return d in b})]||""}}
function $b(a){var b=Rb();if("Internet Explorer"===a){if(Sb())if((a=/rv: *([\d\.]*)/.exec(b))&&a[1])b=a[1];else{a="";var c=/MSIE +([\d\.]+)/.exec(b);if(c&&c[1])if(b=/Trident\/(\d.\d)/.exec(b),"7.0"==c[1])if(b&&b[1])switch(b[1]){case "4.0":a="8.0";break;case "5.0":a="9.0";break;case "6.0":a="10.0";break;case "7.0":a="11.0"}else a="7.0";else a=c[1];b=a}else b="";return b}var d=RegExp("([A-Z][\\w ]+)/([^\\s]+)\\s*(?:\\((.*?)\\))?","g");c=[];for(var e;e=d.exec(b);)c.push([e[1],e[2],e[3]||void 0]);b=Zb(c);
switch(a){case "Opera":if(C("Opera"))return b(["Version","Opera"]);if(C("OPR"))return b(["OPR"]);break;case "Microsoft Edge":if(C("Edge"))return b(["Edge"]);if(C("Edg/"))return b(["Edg"]);break;case "Chromium":if(Vb())return b(["Chrome","CriOS","HeadlessChrome"])}return"Firefox"===a&&Tb()||"Safari"===a&&Ub()||"Android Browser"===a&&Yb()||"Silk"===a&&C("Silk")?(b=c[2])&&b[1]||"":""}
function ac(a){a=$b(a);if(""===a)return NaN;a=a.split(".");return 0===a.length?NaN:Number(a[0])}
;var bc={};function cc(a){this.l=bc===bc?a:"";this.j=!0}
cc.prototype.i=function(){return this.l.toString()};
cc.prototype.toString=function(){return this.l.toString()};function dc(a,b){b instanceof Mb||b instanceof Mb||(b="object"==typeof b&&b.j?b.i():String(b),Pb.test(b)||(b="about:invalid#zClosurez"),b=new Mb(b,Nb));a.href=Ob(b)}
function ec(a,b){a.rel="stylesheet";a.href=Ib(b).toString();(b=fc('style[nonce],link[rel="stylesheet"][nonce]',a.ownerDocument&&a.ownerDocument.defaultView))&&a.setAttribute("nonce",b)}
function gc(){return fc("script[nonce]")}
var hc=/^[\w+/_-]+[=]{0,2}$/;function fc(a,b){b=(b||y).document;return b.querySelector?(a=b.querySelector(a))&&(a=a.nonce||a.getAttribute("nonce"))&&hc.test(a)?a:"":""}
;function ic(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;var jc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function kc(a){return a?decodeURI(a):a}
function lc(a,b){return b.match(jc)[a]||null}
function mc(a){return kc(lc(3,a))}
function nc(a){var b=a.match(jc);a=b[5];var c=b[6];b=b[7];var d="";a&&(d+=a);c&&(d+="?"+c);b&&(d+="#"+b);return d}
function oc(a,b){if(!b)return a;var c=a.indexOf("#");0>c&&(c=a.length);var d=a.indexOf("?");if(0>d||d>c){d=c;var e=""}else e=a.substring(d+1,c);a=[a.slice(0,d),e,a.slice(c)];c=a[1];a[1]=b?c?c+"&"+b:b:c;return a[0]+(a[1]?"?"+a[1]:"")+a[2]}
function pc(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)pc(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function qc(a,b){var c=[];for(b=b||0;b<a.length;b+=2)pc(a[b],a[b+1],c);return c.join("&")}
function rc(a){var b=[],c;for(c in a)pc(c,a[c],b);return b.join("&")}
function sc(a,b){var c=2==arguments.length?qc(arguments[1],0):qc(arguments,1);return oc(a,c)}
function wc(a,b){b=rc(b);return oc(a,b)}
function xc(a,b,c){c=null!=c?"="+encodeURIComponent(String(c)):"";return oc(a,b+c)}
function yc(a,b,c,d){for(var e=c.length;0<=(b=a.indexOf(c,b))&&b<d;){var f=a.charCodeAt(b-1);if(38==f||63==f)if(f=a.charCodeAt(b+e),!f||61==f||38==f||35==f)return b;b+=e+1}return-1}
var zc=/#|$/,Ac=/[?&]($|#)/;function Bc(a,b){for(var c=a.search(zc),d=0,e,f=[];0<=(e=yc(a,d,b,c));)f.push(a.substring(d,e)),d=Math.min(a.indexOf("&",e)+1||c,c);f.push(a.slice(d));return f.join("").replace(Ac,"$1")}
;var Cc={};function Dc(a){if(a!==Cc)throw Error("requires a valid immutable API token");}
;function Ec(){return C("iPhone")&&!C("iPod")&&!C("iPad")}
function Fc(){var a=Rb();if(C("Windows")){var b=/Windows (?:NT|Phone) ([0-9.]+)/;b.exec(a)}else Ec()||C("iPad")||C("iPod")?(b=/(?:iPhone|iPod|iPad|CPU)\s+OS\s+(\S+)/,(a=b.exec(a))&&a[1].replace(/_/g,".")):C("Macintosh")?(b=/Mac OS X ([0-9_.]+)/,(a=b.exec(a))&&a[1].replace(/_/g,".")):-1!=Rb().toLowerCase().indexOf("kaios")?(b=/(?:KaiOS)\/(\S+)/i,b.exec(a)):C("Android")?(b=/Android\s+([^\);]+)(\)|;)/,b.exec(a)):C("CrOS")&&(b=/(?:CrOS\s+(?:i686|x86_64)\s+([0-9.]+))/,b.exec(a))}
;function Gc(a){Gc[" "](a);return a}
Gc[" "]=function(){};
function Hc(a){var b=Ic;return Object.prototype.hasOwnProperty.call(b,9)?b[9]:b[9]=a(9)}
;var Jc=C("Opera"),Kc=Sb(),Lc=C("Edge"),Mc=C("Gecko")&&!(-1!=Rb().toLowerCase().indexOf("webkit")&&!C("Edge"))&&!(C("Trident")||C("MSIE"))&&!C("Edge"),Nc=-1!=Rb().toLowerCase().indexOf("webkit")&&!C("Edge"),Oc=C("Android");function Pc(){var a=y.document;return a?a.documentMode:void 0}
var Qc;a:{var Rc="",Sc=function(){}();
Sc&&(Rc=Sc?Sc[1]:"");if(Kc){var Tc=Pc();if(null!=Tc&&Tc>parseFloat(Rc)){Qc=String(Tc);break a}}Qc=Rc}var Uc=Qc,Ic={};
function Vc(){return Hc(function(){})}
var Wc;if(y.document&&Kc){var Xc=Pc();Wc=Xc?Xc:parseInt(Uc,10)||void 0}else Wc=void 0;var Yc=Wc;var Zc=Ec()||C("iPod"),$c=C("iPad");Yb();Vb();var ad=Ub()&&!(Ec()||C("iPad")||C("iPod"));var bd={},cd=null;
function dd(a,b){Pa(a);void 0===b&&(b=0);if(!cd){cd={};for(var c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),d=["+/=","+/","-_=","-_.","-_"],e=0;5>e;e++){var f=c.concat(d[e].split(""));bd[e]=f;for(var g=0;g<f.length;g++){var h=f[g];void 0===cd[h]&&(cd[h]=g)}}}b=bd[b];c=Array(Math.floor(a.length/3));d=b[64]||"";for(e=f=0;f<a.length-2;f+=3){var k=a[f],m=a[f+1];h=a[f+2];g=b[k>>2];k=b[(k&3)<<4|m>>4];m=b[(m&15)<<2|h>>6];h=b[h&63];c[e++]=""+g+k+m+h}g=0;h=d;switch(a.length-
f){case 2:g=a[f+1],h=b[(g&15)<<2]||d;case 1:a=a[f],c[e]=""+b[a>>2]+b[(a&3)<<4|g>>4]+h+d}return c.join("")}
;var ed="undefined"!==typeof Uint8Array,fd={};var gd;function hd(a){if(fd!==fd)throw Error("illegal external caller");this.ka=a;if(null!=a&&0===a.length)throw Error("ByteString should be constructed with non-empty values");}
hd.prototype.isEmpty=function(){return null==this.ka};var id="function"===typeof Symbol&&"symbol"===typeof Symbol()?Symbol(void 0):void 0;function jd(a,b){Object.isFrozen(a)||(id?a[id]|=b:void 0!==a.va?a.va|=b:Object.defineProperties(a,{va:{value:b,configurable:!0,writable:!0,enumerable:!1}}))}
function kd(a){var b;id?b=a[id]:b=a.va;return null==b?0:b}
function ld(a){return Array.isArray(a)?!!(kd(a)&1):!1}
function md(a){jd(a,1);return a}
function nd(a){return Array.isArray(a)?!!(kd(a)&2):!1}
function rd(a){if(!Array.isArray(a))throw Error("cannot mark non-array as immutable");jd(a,2)}
function sd(a,b){if(!Array.isArray(a))throw Error("cannot mark non-array as mutable");b?jd(a,8):Object.isFrozen(a)||(id?a[id]&=-9:void 0!==a.va&&(a.va&=-9))}
;function td(a){return nd(a.J)}
function ud(a){return null!==a&&"object"===typeof a&&!Array.isArray(a)&&a.constructor===Object}
var vd,wd=Object.freeze(md([]));function xd(a){if(td(a))throw Error("Cannot mutate an immutable Message");}
var yd="undefined"!=typeof Symbol&&"undefined"!=typeof Symbol.hasInstance;function zd(a){return{value:a,configurable:!1,writable:!1,enumerable:!1}}
;function Ad(a){y.setTimeout(function(){throw a;},0)}
;function Bd(a){return a.displayName||a.name||"unknown type name"}
function Cd(a,b){a instanceof b||Ad(Error("Expected instanceof "+Bd(b)+" but got "+(a&&Bd(a.constructor))));return a}
function Dd(a,b,c){c=void 0===c?!1:c;if(Array.isArray(a))return new b(a);if(c)return new b}
;function Ed(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "object":if(a&&!Array.isArray(a)){if(ed&&null!=a&&a instanceof Uint8Array)return dd(a);if(a instanceof hd){var b=a.ka;null!=b&&"string"!==typeof b&&(ed&&b instanceof Uint8Array?b=dd(b):(Oa(b),b=null));return null==b?"":a.ka=b}}}return a}
;function Fd(a,b){b=void 0===b?Gd:b;return Hd(a,b)}
function Id(a,b){if(null!=a){if(Array.isArray(a))a=Hd(a,b);else if(ud(a)){var c={},d;for(d in a)c[d]=Id(a[d],b);a=c}else a=b(a);return a}}
function Hd(a,b){for(var c=a.slice(),d=0;d<c.length;d++)c[d]=Id(c[d],b);ld(a)&&md(c);return c}
function Jd(a){if(a&&"object"==typeof a&&a.toJSON)return a.toJSON();a=Ed(a);return Array.isArray(a)?Fd(a,Jd):a}
function Gd(a){return ed&&null!=a&&a instanceof Uint8Array?new Uint8Array(a):a}
;function Kd(a){return a.j||(a.j=a.J[a.l+a.sa]={})}
function Ld(a,b,c){return-1===b?null:b>=a.l?a.j?a.j[b]:void 0:(void 0===c?0:c)&&a.j&&(c=a.j[b],null!=c)?c:a.J[b+a.sa]}
function E(a,b,c,d,e){d=void 0===d?!1:d;(void 0===e?0:e)||xd(a);b<a.l&&!d?a.J[b+a.sa]=c:Kd(a)[b]=c;return a}
function Md(a,b,c,d){c=void 0===c?!0:c;var e=Ld(a,b,d);Array.isArray(e)||(e=wd);if(td(a))c&&(rd(e),Object.freeze(e));else if(e===wd||nd(e))e=md(e.slice()),E(a,b,e,d);return e}
function Nd(a,b,c){a=Ld(a,b);return null==a?c:a}
function Od(a,b,c){null==c?c=wd:md(c);return E(a,b,c)}
function Pd(a,b,c,d){xd(a);(c=Qd(a,c))&&c!==b&&null!=d&&(a.i&&c in a.i&&(a.i[c]=void 0),E(a,c));return E(a,b,d)}
function Qd(a,b){for(var c=0,d=0;d<b.length;d++){var e=b[d];null!=Ld(a,e)&&(0!==c&&E(a,c,void 0,!1,!0),c=e)}return c}
function Rd(a,b,c,d,e){e=void 0===e?!1:e;var f=e;if(-1===c)d=null;else{a.i||(a.i={});var g=a.i[c];if(g)d=g;else{var h=Ld(a,c,f);b=Dd(h,b,d);void 0==b?d=g:(d&&b.J!==h&&E(a,c,b.J,f,!0),a.i[c]=b,td(a)&&rd(b.J),d=b)}}if(null==d)return d;td(d)&&!td(a)&&(d=d.Bb(Cc),E(a,c,d.J,e),a.i[c]=d);return d}
function Sd(a,b,c,d,e){e=void 0===e?!0:e;a.i||(a.i={});var f=td(a),g=a.i[c];d=Md(a,c,!0,d);var h=f||nd(d);if(!g){g=[];f=f||h;for(var k=0;k<d.length;k++){var m=d[k];f=f||nd(m);m=Dd(m,b);void 0!==m&&(g.push(m),h&&rd(m.J))}a.i[c]=g;sd(d,!f)}b=h||e;e=nd(g);b&&!e&&(Object.isFrozen(g)&&(a.i[c]=g=g.slice()),rd(g),Object.freeze(g));!b&&e&&(a.i[c]=g=g.slice());return g}
function Td(a,b,c,d){d=void 0===d?!1:d;var e=td(a);b=Sd(a,b,c,d,e);a=Md(a,c,d);if(!(c=e)&&(c=a)){if(!Array.isArray(a))throw Error("cannot check mutability state of non-array");c=!(kd(a)&8)}if(c){for(c=0;c<b.length;c++)(d=b[c])&&td(d)&&!e&&(b[c]=b[c].Bb(Cc),a[c]=b[c].J);sd(a,!0)}return b}
function G(a,b,c,d){xd(a);a.i||(a.i={});b=null!=d?Cd(d,b).J:d;a.i[c]=d;return E(a,c,b)}
function Ud(a,b,c,d,e){xd(a);a.i||(a.i={});b=null!=e?Cd(e,b).J:e;a.i[c]=e;Pd(a,c,d,b)}
function Vd(a,b,c,d){xd(a);if(null!=d){var e=md([]);for(var f=!1,g=0;g<d.length;g++)e[g]=Cd(d[g],b).J,f=f||nd(e[g]);a.i||(a.i={});a.i[c]=d;sd(e,!f)}else a.i&&(a.i[c]=void 0),e=wd;return E(a,c,e)}
function Wd(a,b,c,d){xd(a);var e=Sd(a,c,b,void 0,!1);c=null!=d?Cd(d,c):new c;a=Md(a,b);e.push(c);a.push(c.J);Dc(Cc);td(c)&&sd(a,!1)}
;function Xd(a,b,c){a||(a=Yd);Yd=null;var d=this.constructor.j;a||(a=d?[d]:[]);this.sa=(d?0:-1)-(this.constructor.i||0);this.i=void 0;this.J=a;a:{d=this.J.length;a=d-1;if(d&&(d=this.J[a],ud(d))){this.l=a-this.sa;this.j=d;break a}void 0!==b&&-1<b?(this.l=Math.max(b,a+1-this.sa),this.j=void 0):this.l=Number.MAX_VALUE}if(c)for(b=0;b<c.length;b++)if(a=c[b],a<this.l)a+=this.sa,(d=this.J[a])?Array.isArray(d)&&md(d):this.J[a]=wd;else{d=Kd(this);var e=d[a];e?Array.isArray(e)&&md(e):d[a]=wd}}
Xd.prototype.toJSON=function(){var a=this.J;return vd?a:Fd(a,Jd)};
function Zd(a){vd=!0;try{return JSON.stringify(a.toJSON(),$d)}finally{vd=!1}}
Xd.prototype.clone=function(){var a=Fd(this.J);Yd=a;a=new this.constructor(a);Yd=null;ae(a,this);return a};
Xd.prototype.isMutable=function(a){Dc(a);return!td(this)};
Xd.prototype.toString=function(){return this.J.toString()};
function $d(a,b){return Ed(b)}
function ae(a,b){b.Ia&&(a.Ia=b.Ia.slice());var c=b.i;if(c){b=b.j;for(var d in c){var e=c[d];if(e){var f=!(!b||!b[d]),g=+d;if(Array.isArray(e)){if(e.length)for(f=Td(a,e[0].constructor,g,f),g=0;g<Math.min(f.length,e.length);g++)ae(f[g],e[g])}else(f=Rd(a,e.constructor,g,void 0,f))&&ae(f,e)}}}}
var Yd;function be(){Xd.apply(this,arguments)}
r(be,Xd);be.prototype.Bb=function(){return this};
if(yd){var ce={};Object.defineProperties(be,(ce[Symbol.hasInstance]=zd(function(){throw Error("Cannot perform instanceof checks for MutableMessage");}),ce))};function de(a){var b=this.i,c=this.j;return this.isRepeated?Td(a,b,c,!0):Rd(a,b,c,void 0,!0)}
;function ee(a,b,c,d,e,f){(a=a.i&&a.i[c])?Array.isArray(a)?(e=f.kb?md(a.slice()):a,Vd(b,0<e.length?e[0].constructor:void 0,c,e)):G(b,a.constructor,c,a):(ed&&d instanceof Uint8Array?e=d.length?new hd(new Uint8Array(d)):gd||(gd=new hd(null)):(Array.isArray(d)&&(e?rd(d):ld(d)&&f.kb&&(d=d.slice())),e=d),E(b,c,e))}
;function I(){be.apply(this,arguments)}
r(I,be);I.prototype.Bb=function(a){Dc(a);if(td(this)){a={kb:!0};var b=td(this);if(b&&!a.kb)throw Error("copyRepeatedFields must be true for frozen messages");var c=new this.constructor;this.Ia&&(c.Ia=this.Ia.slice());for(var d=this.J,e=0;e<d.length;e++){var f=d[e];if(e===d.length-1&&ud(f))for(h in f){var g=+h;Number.isNaN(g)?Kd(c)[h]=f[h]:ee(this,c,g,f[h],b,a)}else ee(this,c,e-this.sa,f,b,a)}var h=c}else h=this;return h};
if(yd){var fe={};Object.defineProperties(I,(fe[Symbol.hasInstance]=zd(Object[Symbol.hasInstance]),fe))};function ge(a){this.Kb=a}
;function he(a,b,c){this.j=a;this.o=b;this.i=c||[];this.ya=new Map}
l=he.prototype;l.wc=function(a){var b=Ja.apply(1,arguments),c=this.nb(b);c?c.push(new ge(a)):this.lc(a,b)};
l.lc=function(a){this.ya.set(this.Sb(Ja.apply(1,arguments)),[new ge(a)])};
l.nb=function(){var a=this.Sb(Ja.apply(0,arguments));return this.ya.has(a)?this.ya.get(a):void 0};
l.Ic=function(){var a=this.nb(Ja.apply(0,arguments));return a&&a.length?a[0]:void 0};
l.clear=function(){this.ya.clear()};
l.Sb=function(){var a=Ja.apply(0,arguments);return a?a.join(","):"key"};function ie(a,b){he.call(this,a,3,b)}
r(ie,he);ie.prototype.l=function(a){var b=Ja.apply(1,arguments),c=0,d=this.Ic(b);d&&(c=d.Kb);this.lc(c+a,b)};function je(a,b){he.call(this,a,2,b)}
r(je,he);je.prototype.l=function(a){this.wc(a,Ja.apply(1,arguments))};function ke(a){a&&"function"==typeof a.dispose&&a.dispose()}
;function le(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];Pa(d)?le.apply(null,d):ke(d)}}
;function J(){this.N=this.N;this.C=this.C}
J.prototype.N=!1;J.prototype.i=function(){return this.N};
J.prototype.dispose=function(){this.N||(this.N=!0,this.D())};
function me(a,b){ne(a,Ya(ke,b))}
function ne(a,b){a.N?b():(a.C||(a.C=[]),a.C.push(b))}
J.prototype.D=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function oe(a,b){this.type=a;this.i=this.target=b;this.defaultPrevented=this.l=!1}
oe.prototype.stopPropagation=function(){this.l=!0};
oe.prototype.preventDefault=function(){this.defaultPrevented=!0};function pe(a){var b=B("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||y.$googDebugFname||b}catch(g){e="Not available",c=!0}b=qe(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(null==
c){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,re[c])c=re[c];else{c=String(c);if(!re[c]){var f=/function\s+([^\(]+)/m.exec(c);re[c]=f?f[1]:"[Anonymous]"}c=re[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";"function"===typeof a.toString&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}a.stack=
b;return{message:a.message,name:a.name,lineNumber:a.lineNumber,fileName:a.fileName,stack:a.stack}}
function qe(a,b){b||(b={});b[se(a)]=!0;var c=a.stack||"";(a=a.cause)&&!b[se(a)]&&(c+="\nCaused by: ",a.stack&&0==a.stack.indexOf(a.toString())||(c+="string"===typeof a?a:a.message+"\n"),c+=qe(a,b));return c}
function se(a){var b="";"function"===typeof a.toString&&(b=""+a);return b+a.stack}
var re={};var te=function(){if(!y.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{y.addEventListener("test",function(){},b),y.removeEventListener("test",function(){},b)}catch(c){}return a}();function xe(a,b){oe.call(this,a?a.type:"");this.relatedTarget=this.i=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.j=null;a&&this.init(a,b)}
Za(xe,oe);var ye={2:"touch",3:"pen",4:"mouse"};
xe.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.i=b;if(b=a.relatedTarget){if(Mc){a:{try{Gc(b.nodeName);var e=!0;break a}catch(f){}e=!1}e||(b=null)}}else"mouseover"==c?b=a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||
0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:ye[a.pointerType]||"";this.state=a.state;
this.j=a;a.defaultPrevented&&xe.Z.preventDefault.call(this)};
xe.prototype.stopPropagation=function(){xe.Z.stopPropagation.call(this);this.j.stopPropagation?this.j.stopPropagation():this.j.cancelBubble=!0};
xe.prototype.preventDefault=function(){xe.Z.preventDefault.call(this);var a=this.j;a.preventDefault?a.preventDefault():a.returnValue=!1};var ze="closure_listenable_"+(1E6*Math.random()|0);var Ae=0;function Be(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.Ya=e;this.key=++Ae;this.Ka=this.Ta=!1}
function Ce(a){a.Ka=!0;a.listener=null;a.proxy=null;a.src=null;a.Ya=null}
;function De(a){this.src=a;this.listeners={};this.i=0}
De.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.i++);var g=Ee(a,b,d,e);-1<g?(b=a[g],c||(b.Ta=!1)):(b=new Be(b,this.src,f,!!d,e),b.Ta=c,a.push(b));return b};
De.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=Ee(e,b,c,d);return-1<b?(Ce(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.listeners[a],this.i--),!0):!1};
function Fe(a,b){var c=b.type;c in a.listeners&&kb(a.listeners[c],b)&&(Ce(b),0==a.listeners[c].length&&(delete a.listeners[c],a.i--))}
function Ee(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.Ka&&f.listener==b&&f.capture==!!c&&f.Ya==d)return e}return-1}
;var Ge="closure_lm_"+(1E6*Math.random()|0),He={},Ie=0;function Je(a,b,c,d,e){if(d&&d.once)Ke(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)Je(a,b[f],c,d,e);else c=Le(c),a&&a[ze]?a.W(b,c,Qa(d)?!!d.capture:!!d,e):Me(a,b,c,!1,d,e)}
function Me(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=Qa(e)?!!e.capture:!!e,h=Ne(a);h||(a[Ge]=h=new De(a));c=h.add(b,c,d,g,f);if(!c.proxy){d=Oe();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)te||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(Pe(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");Ie++}}
function Oe(){function a(c){return b.call(a.src,a.listener,c)}
var b=Qe;return a}
function Ke(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Ke(a,b[f],c,d,e);else c=Le(c),a&&a[ze]?a.o.add(String(b),c,!0,Qa(d)?!!d.capture:!!d,e):Me(a,b,c,!0,d,e)}
function Re(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Re(a,b[f],c,d,e);else(d=Qa(d)?!!d.capture:!!d,c=Le(c),a&&a[ze])?a.o.remove(String(b),c,d,e):a&&(a=Ne(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=Ee(b,c,d,e)),(c=-1<a?b[a]:null)&&Se(c))}
function Se(a){if("number"!==typeof a&&a&&!a.Ka){var b=a.src;if(b&&b[ze])Fe(b.o,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(Pe(c),d):b.addListener&&b.removeListener&&b.removeListener(d);Ie--;(c=Ne(b))?(Fe(c,a),0==c.i&&(c.src=null,b[Ge]=null)):Ce(a)}}}
function Pe(a){return a in He?He[a]:He[a]="on"+a}
function Qe(a,b){if(a.Ka)a=!0;else{b=new xe(b,this);var c=a.listener,d=a.Ya||a.src;a.Ta&&Se(a);a=c.call(d,b)}return a}
function Ne(a){a=a[Ge];return a instanceof De?a:null}
var Te="__closure_events_fn_"+(1E9*Math.random()>>>0);function Le(a){if("function"===typeof a)return a;a[Te]||(a[Te]=function(b){return a.handleEvent(b)});
return a[Te]}
;function Ue(){J.call(this);this.o=new De(this);this.tc=this;this.la=null}
Za(Ue,J);Ue.prototype[ze]=!0;Ue.prototype.addEventListener=function(a,b,c,d){Je(this,a,b,c,d)};
Ue.prototype.removeEventListener=function(a,b,c,d){Re(this,a,b,c,d)};
function Ve(a,b){var c=a.la;if(c){var d=[];for(var e=1;c;c=c.la)d.push(c),++e}a=a.tc;c=b.type||b;"string"===typeof b?b=new oe(b,a):b instanceof oe?b.target=b.target||a:(e=b,b=new oe(c,a),wb(b,e));e=!0;if(d)for(var f=d.length-1;!b.l&&0<=f;f--){var g=b.i=d[f];e=We(g,c,!0,b)&&e}b.l||(g=b.i=a,e=We(g,c,!0,b)&&e,b.l||(e=We(g,c,!1,b)&&e));if(d)for(f=0;!b.l&&f<d.length;f++)g=b.i=d[f],e=We(g,c,!1,b)&&e}
Ue.prototype.D=function(){}