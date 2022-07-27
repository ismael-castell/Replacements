(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';var m;function ca(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var da="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ha(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var ia=ha(this);function r(a,b){if(b)a:{var c=ia;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&da(c,a,{configurable:!0,writable:!0,value:b})}}
r("Symbol",function(a){function b(f){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(f||"")+"_"+e++,f)}
function c(f,g){this.i=f;da(this,"description",{configurable:!0,writable:!0,value:g})}
if(a)return a;c.prototype.toString=function(){return this.i};
var d="jscomp_symbol_"+(1E9*Math.random()>>>0)+"_",e=0;return b});
r("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=ia[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&da(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ja(ca(this))}})}return a});
function ja(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function u(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:ca(a)}}
function ka(a){if(!(a instanceof Array)){a=u(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}
function la(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var ma="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)la(d,e)&&(a[e]=d[e])}return a};
r("Object.assign",function(a){return a||ma});
var na="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},oa;
if("function"==typeof Object.setPrototypeOf)oa=Object.setPrototypeOf;else{var pa;a:{var ra={a:!0},sa={};try{sa.__proto__=ra;pa=sa.a;break a}catch(a){}pa=!1}oa=pa?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var ta=oa;
function v(a,b){a.prototype=na(b.prototype);a.prototype.constructor=a;if(ta)ta(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.V=b.prototype}
function va(){this.s=!1;this.o=null;this.j=void 0;this.i=1;this.m=this.v=0;this.H=this.l=null}
function wa(a){if(a.s)throw new TypeError("Generator is already running");a.s=!0}
va.prototype.A=function(a){this.j=a};
function xa(a,b){a.l={ib:b,nb:!0};a.i=a.v||a.m}
va.prototype.return=function(a){this.l={return:a};this.i=this.m};
function w(a,b,c){a.i=c;return{value:b}}
va.prototype.u=function(a){this.i=a};
function ya(a,b,c){a.v=b;void 0!=c&&(a.m=c)}
function Aa(a,b){a.i=b;a.v=0}
function Ba(a){a.v=0;var b=a.l.ib;a.l=null;return b}
function Ca(a){a.H=[a.l];a.v=0;a.m=0}
function Da(a){var b=a.H.splice(0)[0];(b=a.l=a.l||b)?b.nb?a.i=a.v||a.m:void 0!=b.u&&a.m<b.u?(a.i=b.u,a.l=null):a.i=a.m:a.i=0}
function Ea(a){this.i=new va;this.j=a}
function Fa(a,b){wa(a.i);var c=a.i.o;if(c)return Ga(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.i.return);
a.i.return(b);return Ha(a)}
function Ga(a,b,c,d){try{var e=b.call(a.i.o,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.i.s=!1,e;var f=e.value}catch(g){return a.i.o=null,xa(a.i,g),Ha(a)}a.i.o=null;d.call(a.i,f);return Ha(a)}
function Ha(a){for(;a.i.i;)try{var b=a.j(a.i);if(b)return a.i.s=!1,{value:b.value,done:!1}}catch(c){a.i.j=void 0,xa(a.i,c)}a.i.s=!1;if(a.i.l){b=a.i.l;a.i.l=null;if(b.nb)throw b.ib;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function Ia(a){this.next=function(b){wa(a.i);a.i.o?b=Ga(a,a.i.o.next,b,a.i.A):(a.i.A(b),b=Ha(a));return b};
this.throw=function(b){wa(a.i);a.i.o?b=Ga(a,a.i.o["throw"],b,a.i.A):(xa(a.i,b),b=Ha(a));return b};
this.return=function(b){return Fa(a,b)};
this[Symbol.iterator]=function(){return this}}
function Ja(a){function b(d){return a.next(d)}
function c(d){return a.throw(d)}
return new Promise(function(d,e){function f(g){g.done?d(g.value):Promise.resolve(g.value).then(b,c).then(f,e)}
f(a.next())})}
function x(a){return Ja(new Ia(new Ea(a)))}
function Ka(){for(var a=Number(this),b=[],c=a;c<arguments.length;c++)b[c-a]=arguments[c];return b}
r("Reflect.setPrototypeOf",function(a){return a?a:ta?function(b,c){try{return ta(b,c),!0}catch(d){return!1}}:null});
r("Promise",function(a){function b(g){this.i=0;this.l=void 0;this.j=[];this.s=!1;var h=this.o();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.i=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.j=function(g){if(null==this.i){this.i=[];var h=this;this.l(function(){h.m()})}this.i.push(g)};
var e=ia.setTimeout;c.prototype.l=function(g){e(g,0)};
c.prototype.m=function(){for(;this.i&&this.i.length;){var g=this.i;this.i=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(l){this.o(l)}}}this.i=null};
c.prototype.o=function(g){this.l(function(){throw g;})};
b.prototype.o=function(){function g(l){return function(n){k||(k=!0,l.call(h,n))}}
var h=this,k=!1;return{resolve:g(this.fa),reject:g(this.m)}};
b.prototype.fa=function(g){if(g===this)this.m(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.ra(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.W(g):this.v(g)}};
b.prototype.W=function(g){var h=void 0;try{h=g.then}catch(k){this.m(k);return}"function"==typeof h?this.sa(h,g):this.v(g)};
b.prototype.m=function(g){this.A(2,g)};
b.prototype.v=function(g){this.A(1,g)};
b.prototype.A=function(g,h){if(0!=this.i)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.i);this.i=g;this.l=h;2===this.i&&this.qa();this.H()};
b.prototype.qa=function(){var g=this;e(function(){if(g.M()){var h=ia.console;"undefined"!==typeof h&&h.error(g.l)}},1)};
b.prototype.M=function(){if(this.s)return!1;var g=ia.CustomEvent,h=ia.Event,k=ia.dispatchEvent;if("undefined"===typeof k)return!0;"function"===typeof g?g=new g("unhandledrejection",{cancelable:!0}):"function"===typeof h?g=new h("unhandledrejection",{cancelable:!0}):(g=ia.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.l;return k(g)};
b.prototype.H=function(){if(null!=this.j){for(var g=0;g<this.j.length;++g)f.j(this.j[g]);this.j=null}};
var f=new c;b.prototype.ra=function(g){var h=this.o();g.Ea(h.resolve,h.reject)};
b.prototype.sa=function(g,h){var k=this.o();try{g.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};
b.prototype.then=function(g,h){function k(t,p){return"function"==typeof t?function(y){try{l(t(y))}catch(z){n(z)}}:p}
var l,n,q=new b(function(t,p){l=t;n=p});
this.Ea(k(g,l),k(h,n));return q};
b.prototype.catch=function(g){return this.then(void 0,g)};
b.prototype.Ea=function(g,h){function k(){switch(l.i){case 1:g(l.l);break;case 2:h(l.l);break;default:throw Error("Unexpected state: "+l.i);}}
var l=this;null==this.j?f.j(k):this.j.push(k);this.s=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var l=u(g),n=l.next();!n.done;n=l.next())d(n.value).Ea(h,k)})};
b.all=function(g){var h=u(g),k=h.next();return k.done?d([]):new b(function(l,n){function q(y){return function(z){t[y]=z;p--;0==p&&l(t)}}
var t=[],p=0;do t.push(void 0),p++,d(k.value).Ea(q(t.length-1),n),k=h.next();while(!k.done)})};
return b});
r("WeakMap",function(a){function b(k){this.i=(h+=Math.random()+1).toString();if(k){k=u(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(k){var l=typeof k;return"object"===l&&null!==k||"function"===l}
function e(k){if(!la(k,g)){var l=new c;da(k,g,{value:l})}}
function f(k){var l=Object[k];l&&(Object[k]=function(n){if(n instanceof c)return n;Object.isExtensible(n)&&e(n);return l(n)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),l=Object.seal({}),n=new a([[k,2],[l,3]]);if(2!=n.get(k)||3!=n.get(l))return!1;n.delete(k);n.set(l,4);return!n.has(k)&&4==n.get(l)}catch(q){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,l){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!la(k,g))throw Error("WeakMap key fail: "+k);k[g][this.i]=l;return this};
b.prototype.get=function(k){return d(k)&&la(k,g)?k[g][this.i]:void 0};
b.prototype.has=function(k){return d(k)&&la(k,g)&&la(k[g],this.i)};
b.prototype.delete=function(k){return d(k)&&la(k,g)&&la(k[g],this.i)?delete k[g][this.i]:!1};
return b});
r("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var l=h.i;return ja(function(){if(l){for(;l.head!=h.i;)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}
function d(h,k){var l=k&&typeof k;"object"==l||"function"==l?f.has(k)?l=f.get(k):(l=""+ ++g,f.set(k,l)):l="p_"+k;var n=h.data_[l];if(n&&la(h.data_,l))for(h=0;h<n.length;h++){var q=n[h];if(k!==k&&q.key!==q.key||k===q.key)return{id:l,list:n,index:h,entry:q}}return{id:l,list:n,index:-1,entry:void 0}}
function e(h){this.data_={};this.i=b();this.size=0;if(h){h=u(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),k=new a(u([[h,"s"]]));if("s"!=k.get(h)||1!=k.size||k.get({x:4})||k.set({x:4},"t")!=k||2!=k.size)return!1;var l=k.entries(),n=l.next();if(n.done||n.value[0]!=h||"s"!=n.value[1])return!1;n=l.next();return n.done||4!=n.value[0].x||"t"!=n.value[1]||!l.next().done?!1:!0}catch(q){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,k){h=0===h?0:h;var l=d(this,h);l.list||(l.list=this.data_[l.id]=[]);l.entry?l.entry.value=k:(l.entry={next:this.i,previous:this.i.previous,head:this.i,key:h,value:k},l.list.push(l.entry),this.i.previous.next=l.entry,this.i.previous=l.entry,this.size++);return this};
e.prototype.delete=function(h){h=d(this,h);return h.entry&&h.list?(h.list.splice(h.index,1),h.list.length||delete this.data_[h.id],h.entry.previous.next=h.entry.next,h.entry.next.previous=h.entry.previous,h.entry.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.data_={};this.i=this.i.previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).entry};
e.prototype.get=function(h){return(h=d(this,h).entry)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var l=this.entries(),n;!(n=l.next()).done;)n=n.value,h.call(k,n[1],n[0],this)};
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
r("Object.setPrototypeOf",function(a){return a||ta});
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
r("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)la(b,d)&&c.push([d,b[d]]);return c}});
r("Array.prototype.keys",function(a){return a?a:function(){return Ma(this,function(b){return b})}});
r("Array.prototype.values",function(a){return a?a:function(){return Ma(this,function(b,c){return c})}});
r("Array.from",function(a){return a?a:function(b,c,d){c=null!=c?c:function(h){return h};
var e=[],f="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];if("function"==typeof f){b=f.call(b);for(var g=0;!(f=b.next()).done;)e.push(c.call(d,f.value,g++))}else for(f=b.length,g=0;g<f;g++)e.push(c.call(d,b[g],g));return e}});
r("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
r("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(0>c&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});
r("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==La(this,b,"includes").indexOf(b,c||0)}});
var A=this||self;function B(a,b){a=a.split(".");b=b||A;for(var c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b}
function Pa(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"}
function Qa(a){var b=Pa(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function C(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Ra(a){return Object.prototype.hasOwnProperty.call(a,Sa)&&a[Sa]||(a[Sa]=++Ta)}
var Sa="closure_uid_"+(1E9*Math.random()>>>0),Ta=0;function Ua(a,b,c){return a.call.apply(a.bind,arguments)}
function Va(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function Wa(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Wa=Ua:Wa=Va;return Wa.apply(null,arguments)}
function D(a,b){a=a.split(".");var c=A;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function E(a,b){function c(){}
c.prototype=b.prototype;a.V=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.xc=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
function Xa(a){return a}
;function Ya(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,Ya);else{var c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));void 0!==b&&(this.cause=b)}
E(Ya,Error);Ya.prototype.name="CustomError";var Za;function $a(a,b){a=a.split("%s");for(var c="",d=a.length-1,e=0;e<d;e++)c+=a[e]+(e<b.length?b[e]:"%s");Ya.call(this,c+a[d])}
E($a,Ya);$a.prototype.name="AssertionError";function ab(a){a=a.url;var b=/[?&]dsh=1(&|$)/.test(a);this.l=!b&&/[?&]ae=1(&|$)/.test(a);this.o=!b&&/[?&]ae=2(&|$)/.test(a);if((this.i=/[?&]adurl=([^&]*)/.exec(a))&&this.i[1]){try{var c=decodeURIComponent(this.i[1])}catch(d){c=null}this.j=c}}
;function bb(){}
function cb(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;var db=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},F=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},eb=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
F(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d},gb=Array.prototype.some?function(a,b){Array.prototype.some.call(a,b,void 0)}:function(a,b){for(var c=a.length,d="string"===typeof a?a.split(""):a,e=0;e<c&&!(e in d&&b.call(void 0,d[e],e,a));e++);
};
function hb(a,b){b=db(a,b);var c;(c=0<=b)&&Array.prototype.splice.call(a,b,1);return c}
function ib(a){return Array.prototype.concat.apply([],arguments)}
function jb(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function kb(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Qa(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function lb(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function mb(a){var b=nb,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function ob(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function pb(a){if(!a||"object"!==typeof a)return a;if("function"===typeof a.clone)return a.clone();if("undefined"!==typeof Map&&a instanceof Map)return new Map(a);if("undefined"!==typeof Set&&a instanceof Set)return new Set(a);var b=Array.isArray(a)?[]:"function"!==typeof ArrayBuffer||"function"!==typeof ArrayBuffer.isView||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=pb(a[c]);return b}
var qb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function rb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<qb.length;f++)c=qb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var sb;function ub(a,b){this.i=a===vb&&b||"";this.j=wb}
ub.prototype.oa=!0;ub.prototype.ja=function(){return this.i};
function xb(a){return new ub(vb,a)}
var wb={},vb={};xb("");var Db=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]},Eb=/&/g,Fb=/</g,Gb=/>/g,Hb=/"/g,Ib=/'/g,Jb=/\x00/g,Kb=/[\x00&<>"']/;function Lb(a,b){this.i=b===Mb?a:""}
Lb.prototype.toString=function(){return this.i.toString()};
Lb.prototype.oa=!0;Lb.prototype.ja=function(){return this.i.toString()};
function Nb(a){if(a instanceof Lb&&a.constructor===Lb)return a.i;Pa(a);return"type_error:SafeUrl"}
var Ob=/^data:(.*);base64,[a-z0-9+\/]+=*$/i,Pb=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;function Qb(a){if(a instanceof Lb)return a;a="object"==typeof a&&a.oa?a.ja():String(a);Pb.test(a)?a=new Lb(a,Mb):(a=String(a).replace(/(%0A|%0D)/g,""),a=a.match(Ob)?new Lb(a,Mb):null);return a}
var Mb={},Rb=new Lb("about:invalid#zClosurez",Mb);var Sb={};function Tb(a,b){this.i=b===Sb?a:"";this.oa=!0}
Tb.prototype.ja=function(){return this.i};
Tb.prototype.toString=function(){return this.i.toString()};
var Ub=new Tb("",Sb);
function Vb(a){if(a instanceof Lb)return'url("'+Nb(a).replace(/</g,"%3c").replace(/[\\"]/g,"\\$&")+'")';if(a instanceof ub)a=a instanceof ub&&a.constructor===ub&&a.j===wb?a.i:"type_error:Const";else{a=String(a);var b=a.replace(Wb,"$1").replace(Wb,"$1").replace(Xb,"url");if(Yb.test(b)){if(b=!Zb.test(a)){for(var c=b=!0,d=0;d<a.length;d++){var e=a.charAt(d);"'"==e&&c?b=!b:'"'==e&&b&&(c=!c)}b=b&&c&&$b(a)}a=b?ac(a):"zClosurez"}else a="zClosurez"}if(/[{;}]/.test(a))throw new $a("Value does not allow [{;}], got: %s.",[a]);
return a}
function $b(a){for(var b=!0,c=/^[-_a-zA-Z0-9]$/,d=0;d<a.length;d++){var e=a.charAt(d);if("]"==e){if(b)return!1;b=!0}else if("["==e){if(!b)return!1;b=!1}else if(!b&&!c.test(e))return!1}return b}
var Yb=RegExp("^[-,.\"'%_!#/ a-zA-Z0-9\\[\\]]+$"),Xb=RegExp("\\b(url\\([ \t\n]*)('[ -&(-\\[\\]-~]*'|\"[ !#-\\[\\]-~]*\"|[!#-&*-\\[\\]-~]*)([ \t\n]*\\))","g"),Wb=RegExp("\\b(calc|cubic-bezier|fit-content|hsl|hsla|linear-gradient|matrix|minmax|radial-gradient|repeat|rgb|rgba|(rotate|scale|translate)(X|Y|Z|3d)?|var)\\([-+*/0-9a-zA-Z.%#\\[\\], ]+\\)","g"),Zb=/\/\*/;function ac(a){return a.replace(Xb,function(b,c,d,e){var f="";d=d.replace(/^(['"])(.*)\1$/,function(g,h,k){f=h;return k});
b=(Qb(d)||Rb).ja();return c+f+b+f+e})}
;var bc={};function cc(a,b){this.i=b===bc?a:"";this.oa=!0}
cc.prototype.toString=function(){return this.i.toString()};
cc.prototype.ja=function(){return this.i};function dc(){var a=A.navigator;return a&&(a=a.userAgent)?a:""}
function H(a){return-1!=dc().indexOf(a)}
;function ec(){return(H("Chrome")||H("CriOS"))&&!H("Edge")||H("Silk")}
;var fc={};function gc(a){this.i=fc===fc?a:"";this.oa=!0}
gc.prototype.ja=function(){return this.i.toString()};
gc.prototype.toString=function(){return this.i.toString()};var lc=/^[\w+/_-]+[=]{0,2}$/;function mc(){var a=A.document;return a.querySelector?(a=a.querySelector('style[nonce],link[rel="stylesheet"][nonce]'))&&(a=a.nonce||a.getAttribute("nonce"))&&lc.test(a)?a:"":""}
;function nc(){return"cssText".replace(/\-([a-z])/g,function(a,b){return b.toUpperCase()})}
function oc(a){return a.replace(RegExp("(^|[\\s]+)([a-z])","g"),function(b,c,d){return c+d.toUpperCase()})}
;var pc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function qc(a){return a?decodeURI(a):a}
function rc(a){return qc(a.match(pc)[3]||null)}
function sc(a){var b=a.match(pc);a=b[1];var c=b[2],d=b[3];b=b[4];var e="";a&&(e+=a+":");d&&(e+="//",c&&(e+=c+"@"),e+=d,b&&(e+=":"+b));return e}
function tc(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)tc(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function uc(a){var b=[],c;for(c in a)tc(c,a[c],b);return b.join("&")}
var vc=/#|$/;function wc(a,b){var c=a.search(vc);a:{var d=0;for(var e=b.length;0<=(d=a.indexOf(b,d))&&d<c;){var f=a.charCodeAt(d-1);if(38==f||63==f)if(f=a.charCodeAt(d+e),!f||61==f||38==f||35==f)break a;d+=e+1}d=-1}if(0>d)return null;e=a.indexOf("&",d);if(0>e||e>c)e=c;d+=b.length+1;return decodeURIComponent(a.slice(d,-1!==e?e:0).replace(/\+/g," "))}
;var xc={};function yc(a){if(a!==xc)throw Error("requires a valid immutable API token");}
;function zc(){return H("iPhone")&&!H("iPod")&&!H("iPad")}
;function Ac(a){Ac[" "](a);return a}
Ac[" "]=function(){};var Bc=H("Opera"),Cc=H("Trident")||H("MSIE"),Dc=H("Edge"),Ec=Dc||Cc,Fc=H("Gecko")&&!(-1!=dc().toLowerCase().indexOf("webkit")&&!H("Edge"))&&!(H("Trident")||H("MSIE"))&&!H("Edge"),Gc=-1!=dc().toLowerCase().indexOf("webkit")&&!H("Edge");function Hc(){var a=A.document;return a?a.documentMode:void 0}
var Ic;a:{var Jc="",Lc=function(){}();
Lc&&(Jc=Lc?Lc[1]:"");if(Cc){var Mc=Hc();if(null!=Mc&&Mc>parseFloat(Jc)){Ic=String(Mc);break a}}Ic=Jc}var Nc=Ic,Oc;if(A.document&&Cc){var Pc=Hc();Oc=Pc?Pc:parseInt(Nc,10)||void 0}else Oc=void 0;var Qc=Oc;var Rc=zc()||H("iPod"),Sc=H("iPad");!H("Android")||ec();ec();var Tc=H("Safari")&&!(ec()||H("Coast")||H("Opera")||H("Edge")||H("Edg/")||H("OPR")||H("Firefox")||H("FxiOS")||H("Silk")||H("Android"))&&!(zc()||H("iPad")||H("iPod"));var Uc={},Vc=null;
function Zc(a,b){Qa(a);void 0===b&&(b=0);if(!Vc){Vc={};for(var c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),d=["+/=","+/","-_=","-_.","-_"],e=0;5>e;e++){var f=c.concat(d[e].split(""));Uc[e]=f;for(var g=0;g<f.length;g++){var h=f[g];void 0===Vc[h]&&(Vc[h]=g)}}}b=Uc[b];c=Array(Math.floor(a.length/3));d=b[64]||"";for(e=f=0;f<a.length-2;f+=3){var k=a[f],l=a[f+1];h=a[f+2];g=b[k>>2];k=b[(k&3)<<4|l>>4];l=b[(l&15)<<2|h>>6];h=b[h&63];c[e++]=""+g+k+l+h}g=0;h=d;switch(a.length-
f){case 2:g=a[f+1],h=b[(g&15)<<2]||d;case 1:a=a[f],c[e]=""+b[a>>2]+b[(a&3)<<4|g>>4]+h+d}return c.join("")}
;var $c="undefined"!==typeof Uint8Array,ad={};var bd;function cd(a){if(ad!==ad)throw Error("illegal external caller");this.Ya=a;if(null!=a&&0===a.length)throw Error("ByteString should be constructed with non-empty values");}
cd.prototype.isEmpty=function(){return null==this.Ya};var dd="function"===typeof Symbol&&"symbol"===typeof Symbol()?Symbol(void 0):void 0;function ed(a,b){Object.isFrozen(a)||(dd?a[dd]|=b:void 0!==a.ka?a.ka|=b:Object.defineProperties(a,{ka:{value:b,configurable:!0,writable:!0,enumerable:!1}}))}
function fd(a){var b;dd?b=a[dd]:b=a.ka;return null==b?0:b}
function gd(a){return Array.isArray(a)?!!(fd(a)&1):!1}
function hd(a){ed(a,1);return a}
function id(a){return Array.isArray(a)?!!(fd(a)&2):!1}
function jd(a){if(!Array.isArray(a))throw Error("cannot mark non-array as immutable");ed(a,2)}
function kd(a,b){if(!Array.isArray(a))throw Error("cannot mark non-array as mutable");b?ed(a,8):Object.isFrozen(a)||(dd?a[dd]&=-9:void 0!==a.ka&&(a.ka&=-9))}
;function ld(a){return id(a.F)}
function md(a){return null!==a&&"object"===typeof a&&!Array.isArray(a)&&a.constructor===Object}
var nd,od=Object.freeze(hd([]));function pd(a){if(ld(a))throw Error("Cannot mutate an immutable Message");}
var qd="undefined"!=typeof Symbol&&"undefined"!=typeof Symbol.hasInstance;function rd(a){return{value:a,configurable:!1,writable:!1,enumerable:!1}}
;function sd(a){A.setTimeout(function(){throw a;},0)}
;function td(a){return a.displayName||a.name||"unknown type name"}
function ud(a,b){a instanceof b||sd(Error("Expected instanceof "+td(b)+" but got "+(a&&td(a.constructor))));return a}
function vd(a,b,c){c=void 0===c?!1:c;if(Array.isArray(a))return new b(a);if(c)return new b}
;function wd(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "object":if(a&&!Array.isArray(a)){if($c&&null!=a&&a instanceof Uint8Array)return Zc(a);if(a instanceof cd){var b=a.Ya;null!=b&&"string"!==typeof b&&($c&&b instanceof Uint8Array?b=Zc(b):(Pa(b),b=null));return null==b?"":a.Ya=b}}}return a}
;function xd(a,b){b=void 0===b?yd:b;return zd(a,b)}
function Ad(a,b){if(null!=a){if(Array.isArray(a))a=zd(a,b);else if(md(a)){var c={},d;for(d in a)c[d]=Ad(a[d],b);a=c}else a=b(a);return a}}
function zd(a,b){for(var c=a.slice(),d=0;d<c.length;d++)c[d]=Ad(c[d],b);gd(a)&&hd(c);return c}
function Bd(a){if(a&&"object"==typeof a&&a.toJSON)return a.toJSON();a=wd(a);return Array.isArray(a)?xd(a,Bd):a}
function yd(a){return $c&&null!=a&&a instanceof Uint8Array?new Uint8Array(a):a}
;function Cd(a){return a.j||(a.j=a.F[a.l+a.ga]={})}
function Dd(a,b,c){return-1===b?null:b>=a.l?a.j?a.j[b]:void 0:(void 0===c?0:c)&&a.j&&(c=a.j[b],null!=c)?c:a.F[b+a.ga]}
function I(a,b,c,d,e){d=void 0===d?!1:d;(void 0===e?0:e)||pd(a);b<a.l&&!d?a.F[b+a.ga]=c:Cd(a)[b]=c;return a}
function Ed(a,b,c,d){c=void 0===c?!0:c;var e=Dd(a,b,d);Array.isArray(e)||(e=od);if(ld(a))c&&(jd(e),Object.freeze(e));else if(e===od||id(e))e=hd(e.slice()),I(a,b,e,d);return e}
function Fd(a,b,c,d){pd(a);(c=Gd(a,c))&&c!==b&&null!=d&&(a.i&&c in a.i&&(a.i[c]=void 0),I(a,c));return I(a,b,d)}
function Gd(a,b){for(var c=0,d=0;d<b.length;d++){var e=b[d];null!=Dd(a,e)&&(0!==c&&I(a,c,void 0,!1,!0),c=e)}return c}
function Hd(a,b,c,d,e){e=void 0===e?!1:e;var f=e;if(-1===c)d=null;else{a.i||(a.i={});var g=a.i[c];if(g)d=g;else{var h=Dd(a,c,f);b=vd(h,b,d);void 0==b?d=g:(d&&b.F!==h&&I(a,c,b.F,f,!0),a.i[c]=b,ld(a)&&jd(b.F),d=b)}}if(null==d)return d;ld(d)&&!ld(a)&&(d=d.Xa(xc),I(a,c,d.F,e),a.i[c]=d);return d}
function Id(a,b,c,d,e){e=void 0===e?!0:e;a.i||(a.i={});var f=ld(a),g=a.i[c];d=Ed(a,c,!0,d);var h=f||id(d);if(!g){g=[];f=f||h;for(var k=0;k<d.length;k++){var l=d[k];f=f||id(l);l=vd(l,b);void 0!==l&&(g.push(l),h&&jd(l.F))}a.i[c]=g;kd(d,!f)}b=h||e;e=id(g);b&&!e&&(Object.isFrozen(g)&&(a.i[c]=g=g.slice()),jd(g),Object.freeze(g));!b&&e&&(a.i[c]=g=g.slice());return g}
function J(a,b,c,d){pd(a);a.i||(a.i={});b=null!=d?ud(d,b).F:d;a.i[c]=d;return I(a,c,b)}
function Jd(a,b,c,d,e){pd(a);a.i||(a.i={});b=null!=e?ud(e,b).F:e;a.i[c]=e;Fd(a,c,d,b)}
function Kd(a,b,c,d){pd(a);if(null!=d){var e=hd([]);for(var f=!1,g=0;g<d.length;g++)e[g]=ud(d[g],b).F,f=f||id(e[g]);a.i||(a.i={});a.i[c]=d;kd(e,!f)}else a.i&&(a.i[c]=void 0),e=od;return I(a,c,e)}
function Ld(a,b,c,d){pd(a);var e=Id(a,c,b,void 0,!1);c=null!=d?ud(d,c):new c;a=Ed(a,b);e.push(c);a.push(c.F);yc(xc);ld(c)&&kd(a,!1)}
function Md(a,b){a=Dd(a,b);return null==a?"":a}
;function Nd(a,b,c){a||(a=Od);Od=null;var d=this.constructor.j;a||(a=d?[d]:[]);this.ga=(d?0:-1)-(this.constructor.i||0);this.i=void 0;this.F=a;a:{d=this.F.length;a=d-1;if(d&&(d=this.F[a],md(d))){this.l=a-this.ga;this.j=d;break a}void 0!==b&&-1<b?(this.l=Math.max(b,a+1-this.ga),this.j=void 0):this.l=Number.MAX_VALUE}if(c)for(b=0;b<c.length;b++)if(a=c[b],a<this.l)a+=this.ga,(d=this.F[a])?Array.isArray(d)&&hd(d):this.F[a]=od;else{d=Cd(this);var e=d[a];e?Array.isArray(e)&&hd(e):d[a]=od}}
Nd.prototype.toJSON=function(){var a=this.F;return nd?a:xd(a,Bd)};
function Pd(a){nd=!0;try{return JSON.stringify(a.toJSON(),Qd)}finally{nd=!1}}
Nd.prototype.clone=function(){var a=xd(this.F);Od=a;a=new this.constructor(a);Od=null;Rd(a,this);return a};
Nd.prototype.isMutable=function(a){yc(a);return!ld(this)};
Nd.prototype.toString=function(){return this.F.toString()};
function Qd(a,b){return wd(b)}
function Rd(a,b){b.wa&&(a.wa=b.wa.slice());var c=b.i;if(c){b=b.j;for(var d in c){var e=c[d];if(e){var f=!(!b||!b[d]),g=+d;if(Array.isArray(e)){if(e.length){var h=a,k=e[0].constructor,l=f;l=void 0===l?!1:l;f=ld(h);k=Id(h,k,g,l,f);g=Ed(h,g,l);if(!(h=f)&&(h=g)){h=g;if(!Array.isArray(h))throw Error("cannot check mutability state of non-array");h=!(fd(h)&8)}if(h){for(h=0;h<k.length;h++)(l=k[h])&&ld(l)&&!f&&(k[h]=k[h].Xa(xc),g[h]=k[h].F);kd(g,!0)}f=k;for(k=0;k<Math.min(f.length,e.length);k++)Rd(f[k],e[k])}}else(f=
Hd(a,e.constructor,g,void 0,f))&&Rd(f,e)}}}}
var Od;function Sd(){Nd.apply(this,arguments)}
v(Sd,Nd);Sd.prototype.Xa=function(){return this};
if(qd){var Td={};Object.defineProperties(Sd,(Td[Symbol.hasInstance]=rd(function(){throw Error("Cannot perform instanceof checks for MutableMessage");}),Td))};function Ud(a,b,c,d,e,f){(a=a.i&&a.i[c])?Array.isArray(a)?(e=f.Na?hd(a.slice()):a,Kd(b,0<e.length?e[0].constructor:void 0,c,e)):J(b,a.constructor,c,a):($c&&d instanceof Uint8Array?e=d.length?new cd(new Uint8Array(d)):bd||(bd=new cd(null)):(Array.isArray(d)&&(e?jd(d):gd(d)&&f.Na&&(d=d.slice())),e=d),I(b,c,e))}
;function L(){Sd.apply(this,arguments)}
v(L,Sd);L.prototype.Xa=function(a){yc(a);if(ld(this)){a={Na:!0};var b=ld(this);if(b&&!a.Na)throw Error("copyRepeatedFields must be true for frozen messages");var c=new this.constructor;this.wa&&(c.wa=this.wa.slice());for(var d=this.F,e=0;e<d.length;e++){var f=d[e];if(e===d.length-1&&md(f))for(h in f){var g=+h;Number.isNaN(g)?Cd(c)[h]=f[h]:Ud(this,c,g,f[h],b,a)}else Ud(this,c,e-this.ga,f,b,a)}var h=c}else h=this;return h};
if(qd){var Vd={};Object.defineProperties(L,(Vd[Symbol.hasInstance]=rd(Object[Symbol.hasInstance]),Vd))};var Wd=window;xb("csi.gstatic.com");xb("googleads.g.doubleclick.net");xb("partner.googleadservices.com");xb("pubads.g.doubleclick.net");xb("securepubads.g.doubleclick.net");xb("tpc.googlesyndication.com");/*

 SPDX-License-Identifier: Apache-2.0
*/
function Xd(a){this.isValid=a}
function Yd(a){return new Xd(function(b){return b.substr(0,a.length+1).toLowerCase()===a+":"})}
var Zd=[Yd("data"),Yd("http"),Yd("https"),Yd("mailto"),Yd("ftp"),new Xd(function(a){return/^[^:]*([/?#]|$)/.test(a)})];
function $d(a,b){b=void 0===b?Zd:b;for(var c=0;c<b.length;++c){var d=b[c];if(d instanceof Xd&&d.isValid(a))return new Lb(a,Mb)}}
function ae(a){var b=void 0===b?Zd:b;return $d(a,b)||Rb}
;function be(a,b){a.removeAttribute("srcdoc");a.src=Nb(b);for(b="allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox allow-storage-access-by-user-activation".split(" ");0<a.sandbox.length;)a.sandbox.remove(a.sandbox.item(0));for(var c=0;c<b.length;c++)a.sandbox.supports&&!a.sandbox.supports(b[c])||a.sandbox.add(b[c])}
;function ce(a,b){this.width=a;this.height=b}
m=ce.prototype;m.clone=function(){return new ce(this.width,this.height)};
m.aspectRatio=function(){return this.width/this.height};
m.isEmpty=function(){return!(this.width*this.height)};
m.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
m.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
m.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function de(a){var b=document;return"string"===typeof a?b.getElementById(a):a}
function ge(a,b,c,d){a=d||a;var e=b&&"*"!=b?String(b).toUpperCase():"";if(a.querySelectorAll&&a.querySelector&&(e||c))return a.querySelectorAll(e+(c?"."+c:""));if(c&&a.getElementsByClassName){b=a.getElementsByClassName(c);if(e){a={};for(var f=d=0,g;g=b[f];f++)e==g.nodeName&&(a[d++]=g);a.length=d;return a}return b}b=a.getElementsByTagName(e||"*");if(c){a={};for(f=d=0;g=b[f];f++){e=g.className;var h;if(h="function"==typeof e.split)h=0<=db(e.split(/\s+/),c);h&&(a[d++]=g)}a.length=d;return a}return b}
function he(a,b){lb(b,function(c,d){c&&"object"==typeof c&&c.oa&&(c=c.ja());"style"==d?a.style.cssText=c:"class"==d?a.className=c:"for"==d?a.htmlFor=c:ie.hasOwnProperty(d)?a.setAttribute(ie[d],c):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,c):a[d]=c})}
var ie={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};function je(a,b,c){function d(h){h&&b.appendChild("string"===typeof h?a.createTextNode(h):h)}
for(var e=2;e<c.length;e++){var f=c[e];if(!Qa(f)||C(f)&&0<f.nodeType)d(f);else{a:{if(f&&"number"==typeof f.length){if(C(f)){var g="function"==typeof f.item||"string"==typeof f.item;break a}if("function"===typeof f){g="function"==typeof f.item;break a}}g=!1}F(g?jb(f):f,d)}}}
function ke(a,b){b=String(b);"application/xhtml+xml"===a.contentType&&(b=b.toLowerCase());return a.createElement(b)}
function le(a){for(var b;b=a.firstChild;)a.removeChild(b)}
function me(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
function ne(){this.i=A.document||document}
m=ne.prototype;m.getElementsByTagName=function(a,b){return(b||this.i).getElementsByTagName(String(a))};
m.fb=function(){};
m.createElement=function(a){return ke(this.i,a)};
m.yb=function(a,b){a.appendChild(b)};
m.isElement=function(){};function oe(a){var b=pe;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a(b[c],c,b)}
function qe(){var a=[];oe(function(b){a.push(b)});
return a}
var pe={dc:"allow-forms",ec:"allow-modals",fc:"allow-orientation-lock",hc:"allow-pointer-lock",ic:"allow-popups",jc:"allow-popups-to-escape-sandbox",kc:"allow-presentation",lc:"allow-same-origin",mc:"allow-scripts",nc:"allow-top-navigation",oc:"allow-top-navigation-by-user-activation"},re=cb(function(){return qe()});
function se(){var a=te(),b={};F(re(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
function te(){var a=void 0===a?document:a;return a.createElement("iframe")}
;var ue={};function ve(a,b){b instanceof cc&&b.constructor===cc?b=b.i:(Pa(b),b="type_error:SafeStyleSheet");if(Cc&&void 0!==a.cssText)a.cssText=b;else if(A.trustedTypes)if("textContent"in a)a.textContent=b;else if(3==a.nodeType)a.data=String(b);else if(a.firstChild&&3==a.firstChild.nodeType){for(;a.lastChild!=a.firstChild;)a.removeChild(a.lastChild);a.firstChild.data=String(b)}else le(a),a.appendChild((9==a.nodeType?a:a.ownerDocument||a.document).createTextNode(String(b)));else a.innerHTML=b}
;var we=(new Date).getTime();function xe(a){if(!a)return"";if(/^about:(?:blank|srcdoc)$/.test(a))return window.origin||"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if("http"!==c&&"https"!==c&&"chrome-extension"!==c&&"moz-extension"!==c&&"file"!==c&&"android-app"!==
c&&"chrome-search"!==c&&"chrome-untrusted"!==c&&"chrome"!==c&&"app"!==c&&"devtools"!==c)throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===c&&"80"!==e||"https"===c&&"443"!==e)a=":"+e}return c+"://"+b+a}
;var ye="client_dev_mss_url client_dev_regex_map client_dev_root_url client_rollout_override expflag forcedCapability jsfeat jsmode mods".split(" ");ka(ye);function ze(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;n=l=0}
function b(q){for(var t=g,p=0;64>p;p+=4)t[p/4]=q[p]<<24|q[p+1]<<16|q[p+2]<<8|q[p+3];for(p=16;80>p;p++)q=t[p-3]^t[p-8]^t[p-14]^t[p-16],t[p]=(q<<1|q>>>31)&4294967295;q=e[0];var y=e[1],z=e[2],G=e[3],K=e[4];for(p=0;80>p;p++){if(40>p)if(20>p){var M=G^y&(z^G);var P=1518500249}else M=y^z^G,P=1859775393;else 60>p?(M=y&z|G&(y|z),P=2400959708):(M=y^z^G,P=3395469782);M=((q<<5|q>>>27)&4294967295)+M+K+P+t[p]&4294967295;K=G;G=z;z=(y<<30|y>>>2)&4294967295;y=q;q=M}e[0]=e[0]+q&4294967295;e[1]=e[1]+y&4294967295;e[2]=
e[2]+z&4294967295;e[3]=e[3]+G&4294967295;e[4]=e[4]+K&4294967295}
function c(q,t){if("string"===typeof q){q=unescape(encodeURIComponent(q));for(var p=[],y=0,z=q.length;y<z;++y)p.push(q.charCodeAt(y));q=p}t||(t=q.length);p=0;if(0==l)for(;p+64<t;)b(q.slice(p,p+64)),p+=64,n+=64;for(;p<t;)if(f[l++]=q[p++],n++,64==l)for(l=0,b(f);p+64<t;)b(q.slice(p,p+64)),p+=64,n+=64}
function d(){var q=[],t=8*n;56>l?c(h,56-l):c(h,64-(l-56));for(var p=63;56<=p;p--)f[p]=t&255,t>>>=8;b(f);for(p=t=0;5>p;p++)for(var y=24;0<=y;y-=8)q[t++]=e[p]>>y&255;return q}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var l,n;a();return{reset:a,update:c,digest:d,Cb:function(){for(var q=d(),t="",p=0;p<q.length;p++)t+="0123456789ABCDEF".charAt(Math.floor(q[p]/16))+"0123456789ABCDEF".charAt(q[p]%16);return t}}}
;function Ae(a,b,c){var d=String(A.location.href);return d&&a&&b?[b,Be(xe(d),a,c||null)].join(" "):null}
function Be(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],F(d,function(h){e.push(h)}),Ce(e.join(" "));
var f=[],g=[];F(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];F(d,function(h){e.push(h)});
a=Ce(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function Ce(a){var b=ze();b.update(a);return b.Cb().toLowerCase()}
;var De={};function Ee(a){this.i=a||{cookie:""}}
m=Ee.prototype;m.isEnabled=function(){if(!A.navigator.cookieEnabled)return!1;if(!this.isEmpty())return!0;this.set("TESTCOOKIESENABLED","1",{Qa:60});if("1"!==this.get("TESTCOOKIESENABLED"))return!1;this.remove("TESTCOOKIESENABLED");return!0};
m.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.Bc;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.Qa}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===h&&(h=-1);c=f?";domain="+f:"";g=g?";path="+g:"";d=d?";secure":"";h=0>h?"":0==h?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+1E3*h)).toUTCString();this.i.cookie=a+"="+b+c+g+h+d+(null!=e?";samesite="+
e:"")};
m.get=function(a,b){for(var c=a+"=",d=(this.i.cookie||"").split(";"),e=0,f;e<d.length;e++){f=Db(d[e]);if(0==f.lastIndexOf(c,0))return f.slice(c.length);if(f==a)return""}return b};
m.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{Qa:0,path:b,domain:c});return d};
m.isEmpty=function(){return!this.i.cookie};
m.clear=function(){for(var a=(this.i.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=Db(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var Fe=new Ee("undefined"==typeof document?null:document);function Ge(a){return!!De.FPA_SAMESITE_PHASE2_MOD||!(void 0===a||!a)}
function He(a,b,c,d){(a=A[a])||(a=(new Ee(document)).get(b));return a?Ae(a,c,d):null}
function Ie(a){var b=void 0===b?!1:b;var c=xe(String(A.location.href)),d=[];var e=b;e=void 0===e?!1:e;var f=A.__SAPISID||A.__APISID||A.__3PSAPISID||A.__OVERRIDE_SID;Ge(e)&&(f=f||A.__1PSAPISID);if(f)e=!0;else{var g=new Ee(document);f=g.get("SAPISID")||g.get("APISID")||g.get("__Secure-3PAPISID")||g.get("SID");Ge(e)&&(f=f||g.get("__Secure-1PAPISID"));e=!!f}e&&(e=(c=0==c.indexOf("https:")||0==c.indexOf("chrome-extension:")||0==c.indexOf("moz-extension:"))?A.__SAPISID:A.__APISID,e||(e=new Ee(document),
e=e.get(c?"SAPISID":"APISID")||e.get("__Secure-3PAPISID")),(e=e?Ae(e,c?"SAPISIDHASH":"APISIDHASH",a):null)&&d.push(e),c&&Ge(b)&&((b=He("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",a))&&d.push(b),(a=He("__3PSAPISID","__Secure-3PAPISID","SAPISID3PHASH",a))&&d.push(a)));return 0==d.length?null:d.join(" ")}
;function Je(){this.o=this.o;this.v=this.v}
Je.prototype.o=!1;Je.prototype.dispose=function(){this.o||(this.o=!0,this.ia())};
Je.prototype.ia=function(){if(this.v)for(;this.v.length;)this.v.shift()()};function Ke(a,b){this.type=a;this.currentTarget=this.target=b;this.defaultPrevented=this.j=!1}
Ke.prototype.stopPropagation=function(){this.j=!0};
Ke.prototype.preventDefault=function(){this.defaultPrevented=!0};function Le(a){var b=B("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||A.$googDebugFname||b}catch(g){e="Not available",c=!0}b=Me(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(null==
c){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,Ne[c])c=Ne[c];else{c=String(c);if(!Ne[c]){var f=/function\s+([^\(]+)/m.exec(c);Ne[c]=f?f[1]:"[Anonymous]"}c=Ne[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";"function"===typeof a.toString&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}a.stack=
b;return{message:a.message,name:a.name,lineNumber:a.lineNumber,fileName:a.fileName,stack:a.stack}}
function Me(a,b){b||(b={});b[Oe(a)]=!0;var c=a.stack||"";(a=a.cause)&&!b[Oe(a)]&&(c+="\nCaused by: ",a.stack&&0==a.stack.indexOf(a.toString())||(c+="string"===typeof a?a:a.message+"\n"),c+=Me(a,b));return c}
function Oe(a){var b="";"function"===typeof a.toString&&(b=""+a);return b+a.stack}
var Ne={};var Pe=function(){if(!A.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{A.addEventListener("test",function(){},b),A.removeEventListener("test",function(){},b)}catch(c){}return a}();function Qe(a,b){Ke.call(this,a?a.type:"");this.relatedTarget=this.currentTarget=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.i=null;a&&this.init(a,b)}
E(Qe,Ke);var Re={2:"touch",3:"pen",4:"mouse"};
Qe.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.currentTarget=b;if(b=a.relatedTarget){if(Fc){a:{try{Ac(b.nodeName);var e=!0;break a}catch(f){}e=!1}e||(b=null)}}else"mouseover"==c?b=a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=
d.screenY||0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:Re[a.pointerType]||"";this.state=
a.state;this.i=a;a.defaultPrevented&&Qe.V.preventDefault.call(this)};
Qe.prototype.stopPropagation=function(){Qe.V.stopPropagation.call(this);this.i.stopPropagation?this.i.stopPropagation():this.i.cancelBubble=!0};
Qe.prototype.preventDefault=function(){Qe.V.preventDefault.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Se="closure_listenable_"+(1E6*Math.random()|0);var Te=0;function Ue(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.Ha=e;this.key=++Te;this.ya=this.Da=!1}
function Ve(a){a.ya=!0;a.listener=null;a.proxy=null;a.src=null;a.Ha=null}
;function We(a){this.src=a;this.listeners={};this.i=0}
We.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.i++);var g=Xe(a,b,d,e);-1<g?(b=a[g],c||(b.Da=!1)):(b=new Ue(b,this.src,f,!!d,e),b.Da=c,a.push(b));return b};
We.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=Xe(e,b,c,d);return-1<b?(Ve(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.listeners[a],this.i--),!0):!1};
function Ye(a,b){var c=b.type;c in a.listeners&&hb(a.listeners[c],b)&&(Ve(b),0==a.listeners[c].length&&(delete a.listeners[c],a.i--))}
function Xe(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.ya&&f.listener==b&&f.capture==!!c&&f.Ha==d)return e}return-1}
;var Ze="closure_lm_"+(1E6*Math.random()|0),$e={},af=0;function bf(a,b,c,d,e){if(d&&d.once)cf(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)bf(a,b[f],c,d,e);else c=df(c),a&&a[Se]?a.Y(b,c,C(d)?!!d.capture:!!d,e):ef(a,b,c,!1,d,e)}
function ef(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=C(e)?!!e.capture:!!e,h=ff(a);h||(a[Ze]=h=new We(a));c=h.add(b,c,d,g,f);if(!c.proxy){d=gf();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)Pe||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(hf(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");af++}}
function gf(){function a(c){return b.call(a.src,a.listener,c)}
var b=jf;return a}
function cf(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)cf(a,b[f],c,d,e);else c=df(c),a&&a[Se]?a.l.add(String(b),c,!0,C(d)?!!d.capture:!!d,e):ef(a,b,c,!0,d,e)}
function kf(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)kf(a,b[f],c,d,e);else(d=C(d)?!!d.capture:!!d,c=df(c),a&&a[Se])?a.l.remove(String(b),c,d,e):a&&(a=ff(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=Xe(b,c,d,e)),(c=-1<a?b[a]:null)&&lf(c))}
function lf(a){if("number"!==typeof a&&a&&!a.ya){var b=a.src;if(b&&b[Se])Ye(b.l,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(hf(c),d):b.addListener&&b.removeListener&&b.removeListener(d);af--;(c=ff(b))?(Ye(c,a),0==c.i&&(c.src=null,b[Ze]=null)):Ve(a)}}}
function hf(a){return a in $e?$e[a]:$e[a]="on"+a}
function jf(a,b){if(a.ya)a=!0;else{b=new Qe(b,this);var c=a.listener,d=a.Ha||a.src;a.Da&&lf(a);a=c.call(d,b)}return a}
function ff(a){a=a[Ze];return a instanceof We?a:null}
var mf="__closure_events_fn_"+(1E9*Math.random()>>>0);function df(a){if("function"===typeof a)return a;a[mf]||(a[mf]=function(b){return a.handleEvent(b)});
return a[mf]}
;function N(){Je.call(this);this.l=new We(this);this.fa=this;this.H=null}
E(N,Je);N.prototype[Se]=!0;N.prototype.addEventListener=function(a,b,c,d){bf(this,a,b,c,d)};
N.prototype.removeEventListener=function(a,b,c,d){kf(this,a,b,c,d)};
function nf(a,b){var c=a.H;if(c){var d=[];for(var e=1;c;c=c.H)d.push(c),++e}a=a.fa;c=b.type||b;"string"===typeof b?b=new Ke(b,a):b instanceof Ke?b.target=b.target||a:(e=b,b=new Ke(c,a),rb(b,e));e=!0;if(d)for(var f=d.length-1;!b.j&&0<=f;f--){var g=b.currentTarget=d[f];e=of(g,c,!0,b)&&e}b.j||(g=b.currentTarget=a,e=of(g,c,!0,b)&&e,b.j||(e=of(g,c,!1,b)&&e));if(d)for(f=0;!b.j&&f<d.length;f++)g=b.currentTarget=d[f],e=of(g,c,!1,b)&&e}
N.prototype.ia=function(){}