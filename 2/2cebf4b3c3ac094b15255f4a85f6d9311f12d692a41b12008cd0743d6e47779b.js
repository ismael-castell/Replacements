(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';var n;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ca(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var da=ca(this);function r(a,b){if(b)a:{var c=da;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&ba(c,a,{configurable:!0,writable:!0,value:b})}}
r("Symbol",function(a){function b(f){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(f||"")+"_"+e++,f)}
function c(f,g){this.h=f;ba(this,"description",{configurable:!0,writable:!0,value:g})}
if(a)return a;c.prototype.toString=function(){return this.h};
var d="jscomp_symbol_"+(1E9*Math.random()>>>0)+"_",e=0;return b});
r("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=da[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&ba(d.prototype,a,{configurable:!0,writable:!0,value:function(){return fa(aa(this))}})}return a});
function fa(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function t(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}
function ha(a){if(!(a instanceof Array)){a=t(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}
var ia="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},ja;
if("function"==typeof Object.setPrototypeOf)ja=Object.setPrototypeOf;else{var ka;a:{var ma={a:!0},na={};try{na.__proto__=ma;ka=na.a;break a}catch(a){}ka=!1}ja=ka?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var oa=ja;
function v(a,b){a.prototype=ia(b.prototype);a.prototype.constructor=a;if(oa)oa(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.N=b.prototype}
function pa(){this.u=!1;this.l=null;this.i=void 0;this.h=1;this.m=this.v=0;this.I=this.j=null}
function qa(a){if(a.u)throw new TypeError("Generator is already running");a.u=!0}
pa.prototype.B=function(a){this.i=a};
function ra(a,b){a.j={Na:b,Ra:!0};a.h=a.v||a.m}
pa.prototype.return=function(a){this.j={return:a};this.h=this.m};
function w(a,b,c){a.h=c;return{value:b}}
pa.prototype.o=function(a){this.h=a};
function sa(a,b,c){a.v=b;void 0!=c&&(a.m=c)}
function ta(a,b){a.h=b;a.v=0}
function ua(a){a.v=0;var b=a.j.Na;a.j=null;return b}
function va(a){a.I=[a.j];a.v=0;a.m=0}
function xa(a){var b=a.I.splice(0)[0];(b=a.j=a.j||b)?b.Ra?a.h=a.v||a.m:void 0!=b.o&&a.m<b.o?(a.h=b.o,a.j=null):a.h=a.m:a.h=0}
function ya(a){this.h=new pa;this.i=a}
function za(a,b){qa(a.h);var c=a.h.l;if(c)return Aa(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.h.return);
a.h.return(b);return Ba(a)}
function Aa(a,b,c,d){try{var e=b.call(a.h.l,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.h.u=!1,e;var f=e.value}catch(g){return a.h.l=null,ra(a.h,g),Ba(a)}a.h.l=null;d.call(a.h,f);return Ba(a)}
function Ba(a){for(;a.h.h;)try{var b=a.i(a.h);if(b)return a.h.u=!1,{value:b.value,done:!1}}catch(c){a.h.i=void 0,ra(a.h,c)}a.h.u=!1;if(a.h.j){b=a.h.j;a.h.j=null;if(b.Ra)throw b.Na;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function Ca(a){this.next=function(b){qa(a.h);a.h.l?b=Aa(a,a.h.l.next,b,a.h.B):(a.h.B(b),b=Ba(a));return b};
this.throw=function(b){qa(a.h);a.h.l?b=Aa(a,a.h.l["throw"],b,a.h.B):(ra(a.h,b),b=Ba(a));return b};
this.return=function(b){return za(a,b)};
this[Symbol.iterator]=function(){return this}}
function Da(a){function b(d){return a.next(d)}
function c(d){return a.throw(d)}
return new Promise(function(d,e){function f(g){g.done?d(g.value):Promise.resolve(g.value).then(b,c).then(f,e)}
f(a.next())})}
function z(a){return Da(new Ca(new ya(a)))}
function Ea(){for(var a=Number(this),b=[],c=a;c<arguments.length;c++)b[c-a]=arguments[c];return b}
r("Reflect.setPrototypeOf",function(a){return a?a:oa?function(b,c){try{return oa(b,c),!0}catch(d){return!1}}:null});
r("Promise",function(a){function b(g){this.h=0;this.j=void 0;this.i=[];this.u=!1;var h=this.l();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.h=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.i=function(g){if(null==this.h){this.h=[];var h=this;this.j(function(){h.m()})}this.h.push(g)};
var e=da.setTimeout;c.prototype.j=function(g){e(g,0)};
c.prototype.m=function(){for(;this.h&&this.h.length;){var g=this.h;this.h=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(l){this.l(l)}}}this.h=null};
c.prototype.l=function(g){this.j(function(){throw g;})};
b.prototype.l=function(){function g(l){return function(m){k||(k=!0,l.call(h,m))}}
var h=this,k=!1;return{resolve:g(this.va),reject:g(this.m)}};
b.prototype.va=function(g){if(g===this)this.m(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.eb(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.ka(g):this.v(g)}};
b.prototype.ka=function(g){var h=void 0;try{h=g.then}catch(k){this.m(k);return}"function"==typeof h?this.fb(h,g):this.v(g)};
b.prototype.m=function(g){this.B(2,g)};
b.prototype.v=function(g){this.B(1,g)};
b.prototype.B=function(g,h){if(0!=this.h)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.h);this.h=g;this.j=h;2===this.h&&this.cb();this.I()};
b.prototype.cb=function(){var g=this;e(function(){if(g.O()){var h=da.console;"undefined"!==typeof h&&h.error(g.j)}},1)};
b.prototype.O=function(){if(this.u)return!1;var g=da.CustomEvent,h=da.Event,k=da.dispatchEvent;if("undefined"===typeof k)return!0;"function"===typeof g?g=new g("unhandledrejection",{cancelable:!0}):"function"===typeof h?g=new h("unhandledrejection",{cancelable:!0}):(g=da.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.j;return k(g)};
b.prototype.I=function(){if(null!=this.i){for(var g=0;g<this.i.length;++g)f.i(this.i[g]);this.i=null}};
var f=new c;b.prototype.eb=function(g){var h=this.l();g.ma(h.resolve,h.reject)};
b.prototype.fb=function(g,h){var k=this.l();try{g.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};
b.prototype.then=function(g,h){function k(u,q){return"function"==typeof u?function(x){try{l(u(x))}catch(y){m(y)}}:q}
var l,m,p=new b(function(u,q){l=u;m=q});
this.ma(k(g,l),k(h,m));return p};
b.prototype.catch=function(g){return this.then(void 0,g)};
b.prototype.ma=function(g,h){function k(){switch(l.h){case 1:g(l.j);break;case 2:h(l.j);break;default:throw Error("Unexpected state: "+l.h);}}
var l=this;null==this.i?f.i(k):this.i.push(k);this.u=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var l=t(g),m=l.next();!m.done;m=l.next())d(m.value).ma(h,k)})};
b.all=function(g){var h=t(g),k=h.next();return k.done?d([]):new b(function(l,m){function p(x){return function(y){u[x]=y;q--;0==q&&l(u)}}
var u=[],q=0;do u.push(void 0),q++,d(k.value).ma(p(u.length-1),m),k=h.next();while(!k.done)})};
return b});
function Fa(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
r("WeakMap",function(a){function b(k){this.h=(h+=Math.random()+1).toString();if(k){k=t(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(k){var l=typeof k;return"object"===l&&null!==k||"function"===l}
function e(k){if(!Fa(k,g)){var l=new c;ba(k,g,{value:l})}}
function f(k){var l=Object[k];l&&(Object[k]=function(m){if(m instanceof c)return m;Object.isExtensible(m)&&e(m);return l(m)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),l=Object.seal({}),m=new a([[k,2],[l,3]]);if(2!=m.get(k)||3!=m.get(l))return!1;m.delete(k);m.set(l,4);return!m.has(k)&&4==m.get(l)}catch(p){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,l){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!Fa(k,g))throw Error("WeakMap key fail: "+k);k[g][this.h]=l;return this};
b.prototype.get=function(k){return d(k)&&Fa(k,g)?k[g][this.h]:void 0};
b.prototype.has=function(k){return d(k)&&Fa(k,g)&&Fa(k[g],this.h)};
b.prototype.delete=function(k){return d(k)&&Fa(k,g)&&Fa(k[g],this.h)?delete k[g][this.h]:!1};
return b});
r("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var l=h.h;return fa(function(){if(l){for(;l.head!=h.h;)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}
function d(h,k){var l=k&&typeof k;"object"==l||"function"==l?f.has(k)?l=f.get(k):(l=""+ ++g,f.set(k,l)):l="p_"+k;var m=h.data_[l];if(m&&Fa(h.data_,l))for(h=0;h<m.length;h++){var p=m[h];if(k!==k&&p.key!==p.key||k===p.key)return{id:l,list:m,index:h,entry:p}}return{id:l,list:m,index:-1,entry:void 0}}
function e(h){this.data_={};this.h=b();this.size=0;if(h){h=t(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),k=new a(t([[h,"s"]]));if("s"!=k.get(h)||1!=k.size||k.get({x:4})||k.set({x:4},"t")!=k||2!=k.size)return!1;var l=k.entries(),m=l.next();if(m.done||m.value[0]!=h||"s"!=m.value[1])return!1;m=l.next();return m.done||4!=m.value[0].x||"t"!=m.value[1]||!l.next().done?!1:!0}catch(p){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,k){h=0===h?0:h;var l=d(this,h);l.list||(l.list=this.data_[l.id]=[]);l.entry?l.entry.value=k:(l.entry={next:this.h,previous:this.h.previous,head:this.h,key:h,value:k},l.list.push(l.entry),this.h.previous.next=l.entry,this.h.previous=l.entry,this.size++);return this};
e.prototype.delete=function(h){h=d(this,h);return h.entry&&h.list?(h.list.splice(h.index,1),h.list.length||delete this.data_[h.id],h.entry.previous.next=h.entry.next,h.entry.next.previous=h.entry.previous,h.entry.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.data_={};this.h=this.h.previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).entry};
e.prototype.get=function(h){return(h=d(this,h).entry)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var l=this.entries(),m;!(m=l.next()).done;)m=m.value,h.call(k,m[1],m[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
function Ga(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
r("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=Ga(this,b,"endsWith");b+="";void 0===c&&(c=d.length);c=Math.max(0,Math.min(c|0,d.length));for(var e=b.length;0<e&&0<c;)if(d[--c]!=b[--e])return!1;return 0>=e}});
r("Array.prototype.find",function(a){return a?a:function(b,c){a:{var d=this;d instanceof String&&(d=String(d));for(var e=d.length,f=0;f<e;f++){var g=d[f];if(b.call(c,g,f,d)){b=g;break a}}b=void 0}return b}});
r("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=Ga(this,b,"startsWith");b+="";var e=d.length,f=b.length;c=Math.max(0,Math.min(c|0,d.length));for(var g=0;g<f&&c<e;)if(d[c++]!=b[g++])return!1;return g>=f}});
function Ha(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
r("Array.prototype.entries",function(a){return a?a:function(){return Ha(this,function(b,c){return[b,c]})}});
r("Object.setPrototypeOf",function(a){return a||oa});
var Ia="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)Fa(d,e)&&(a[e]=d[e])}return a};
r("Object.assign",function(a){return a||Ia});
r("Set",function(a){function b(c){this.h=new Map;if(c){c=t(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.h.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(t([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=0===c?0:c;this.h.set(c,c);this.size=this.h.size;return this};
b.prototype.delete=function(c){c=this.h.delete(c);this.size=this.h.size;return c};
b.prototype.clear=function(){this.h.clear();this.size=0};
b.prototype.has=function(c){return this.h.has(c)};
b.prototype.entries=function(){return this.h.entries()};
b.prototype.values=function(){return this.h.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.h.forEach(function(f){return c.call(d,f,f,e)})};
return b});
r("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)Fa(b,d)&&c.push([d,b[d]]);return c}});
r("Array.prototype.keys",function(a){return a?a:function(){return Ha(this,function(b){return b})}});
r("Array.prototype.values",function(a){return a?a:function(){return Ha(this,function(b,c){return c})}});
r("Array.from",function(a){return a?a:function(b,c,d){c=null!=c?c:function(h){return h};
var e=[],f="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];if("function"==typeof f){b=f.call(b);for(var g=0;!(f=b.next()).done;)e.push(c.call(d,f.value,g++))}else for(f=b.length,g=0;g<f;g++)e.push(c.call(d,b[g],g));return e}});
r("Number.isNaN",function(a){return a?a:function(b){return"number"===typeof b&&isNaN(b)}});
r("Number.MAX_SAFE_INTEGER",function(){return 9007199254740991});
r("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
r("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(0>c&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});
r("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==Ga(this,b,"includes").indexOf(b,c||0)}});
var B=this||self;function C(a,b){a=a.split(".");b=b||B;for(var c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b}
function Ja(){}
function Ka(a){var b=typeof a;b="object"!=b?b:a?Array.isArray(a)?"array":b:"null";return"array"==b||"object"==b&&"number"==typeof a.length}
function La(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Ma(a){return Object.prototype.hasOwnProperty.call(a,Na)&&a[Na]||(a[Na]=++Oa)}
var Na="closure_uid_"+(1E9*Math.random()>>>0),Oa=0;function Pa(a,b,c){return a.call.apply(a.bind,arguments)}
function Qa(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function Ra(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Ra=Pa:Ra=Qa;return Ra.apply(null,arguments)}
function D(a,b){a=a.split(".");var c=B;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function E(a,b){function c(){}
c.prototype=b.prototype;a.N=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Mb=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
function Sa(a){return a}
;function Ta(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,Ta);else{var c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));void 0!==b&&(this.hb=b)}
E(Ta,Error);Ta.prototype.name="CustomError";function Ua(a){a=a.url;var b=/[?&]dsh=1(&|$)/.test(a);this.j=!b&&/[?&]ae=1(&|$)/.test(a);this.l=!b&&/[?&]ae=2(&|$)/.test(a);if((this.h=/[?&]adurl=([^&]*)/.exec(a))&&this.h[1]){try{var c=decodeURIComponent(this.h[1])}catch(d){c=null}this.i=c}}
;function Va(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;var Wa=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},F=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},Xa=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
F(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function Ya(a,b){b=Wa(a,b);var c;(c=0<=b)&&Array.prototype.splice.call(a,b,1);return c}
function Za(a){return Array.prototype.concat.apply([],arguments)}
function $a(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function ab(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Ka(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function bb(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function cb(a){var b=db,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function eb(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function fb(a){if(!a||"object"!==typeof a)return a;if("function"===typeof a.clone)return a.clone();if("undefined"!==typeof Map&&a instanceof Map)return new Map(a);if("undefined"!==typeof Set&&a instanceof Set)return new Set(a);var b=Array.isArray(a)?[]:"function"!==typeof ArrayBuffer||"function"!==typeof ArrayBuffer.isView||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=fb(a[c]);return b}
var gb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function hb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<gb.length;f++)c=gb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var ib;function jb(){}
function kb(a){return new jb(lb,a)}
var lb={};kb("");var mb=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]},nb=/&/g,ob=/</g,pb=/>/g,qb=/"/g,rb=/'/g,sb=/\x00/g,tb=/[\x00&<>"']/;function ub(){var a=B.navigator;return a&&(a=a.userAgent)?a:""}
function G(a){return-1!=ub().indexOf(a)}
;function vb(){return(G("Chrome")||G("CriOS"))&&!G("Edge")||G("Silk")}
;var wb={};function xb(a){this.h=wb===wb?a:""}
xb.prototype.toString=function(){return this.h.toString()};var yb=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function zb(a){return a?decodeURI(a):a}
function Ab(a){return zb(a.match(yb)[3]||null)}
function Bb(a){var b=a.match(yb);a=b[1];var c=b[2],d=b[3];b=b[4];var e="";a&&(e+=a+":");d&&(e+="//",c&&(e+=c+"@"),e+=d,b&&(e+=":"+b));return e}
function Cb(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)Cb(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function Db(a){var b=[],c;for(c in a)Cb(c,a[c],b);return b.join("&")}
var Eb=/#|$/;function Fb(a,b){var c=a.search(Eb);a:{var d=0;for(var e=b.length;0<=(d=a.indexOf(b,d))&&d<c;){var f=a.charCodeAt(d-1);if(38==f||63==f)if(f=a.charCodeAt(d+e),!f||61==f||38==f||35==f)break a;d+=e+1}d=-1}if(0>d)return null;e=a.indexOf("&",d);if(0>e||e>c)e=c;d+=b.length+1;return decodeURIComponent(a.substr(d,e-d).replace(/\+/g," "))}
;function Gb(){return G("iPhone")&&!G("iPod")&&!G("iPad")}
;function Hb(a){Hb[" "](a);return a}
Hb[" "]=Ja;var Ib=G("Opera"),Jb=G("Trident")||G("MSIE"),Kb=G("Edge"),Lb=G("Gecko")&&!(-1!=ub().toLowerCase().indexOf("webkit")&&!G("Edge"))&&!(G("Trident")||G("MSIE"))&&!G("Edge"),Nb=-1!=ub().toLowerCase().indexOf("webkit")&&!G("Edge");function Ob(){var a=B.document;return a?a.documentMode:void 0}
var Pb;a:{var Qb="",Rb=function(){}();
Rb&&(Qb=Rb?Rb[1]:"");if(Jb){var Sb=Ob();if(null!=Sb&&Sb>parseFloat(Qb)){Pb=String(Sb);break a}}Pb=Qb}var Tb=Pb,Ub;if(B.document&&Jb){var Vb=Ob();Ub=Vb?Vb:parseInt(Tb,10)||void 0}else Ub=void 0;var Wb=Ub;var Xb=Gb()||G("iPod"),Yb=G("iPad");!G("Android")||vb();vb();var Zb=G("Safari")&&!(vb()||G("Coast")||G("Opera")||G("Edge")||G("Edg/")||G("OPR")||G("Firefox")||G("FxiOS")||G("Silk")||G("Android"))&&!(Gb()||G("iPad")||G("iPod"));var $b={},ac=null;
function bc(a,b){Ka(a);void 0===b&&(b=0);if(!ac){ac={};for(var c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),d=["+/=","+/","-_=","-_.","-_"],e=0;5>e;e++){var f=c.concat(d[e].split(""));$b[e]=f;for(var g=0;g<f.length;g++){var h=f[g];void 0===ac[h]&&(ac[h]=g)}}}b=$b[b];c=Array(Math.floor(a.length/3));d=b[64]||"";for(e=f=0;f<a.length-2;f+=3){var k=a[f],l=a[f+1];h=a[f+2];g=b[k>>2];k=b[(k&3)<<4|l>>4];l=b[(l&15)<<2|h>>6];h=b[h&63];c[e++]=""+g+k+l+h}g=0;h=d;switch(a.length-
f){case 2:g=a[f+1],h=b[(g&15)<<2]||d;case 1:a=a[f],c[e]=""+b[a>>2]+b[(a&3)<<4|g>>4]+h+d}return c.join("")}
;var cc="function"===typeof Uint8Array;var dc="function"===typeof Symbol&&"symbol"===typeof Symbol()?Symbol(void 0):void 0;function ec(a){Object.isFrozen(a)||(dc?a[dc]|=1:void 0!==a.h?a.h|=1:Object.defineProperties(a,{h:{value:1,configurable:!0,writable:!0,enumerable:!1}}));return a}
;function fc(a){return null!==a&&"object"===typeof a&&!Array.isArray(a)&&a.constructor===Object}
var gc;function hc(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "object":if(a&&!Array.isArray(a)&&cc&&null!=a&&a instanceof Uint8Array)return bc(a)}return a}
;function ic(a,b){if(null!=a){if(Array.isArray(a))a=jc(a,b);else if(fc(a)){var c={},d;for(d in a)c[d]=ic(a[d],b);a=c}else a=b(a);return a}}
function jc(a,b){for(var c=a.slice(),d=0;d<c.length;d++)c[d]=ic(c[d],b);if(Array.isArray(a)){var e;dc?e=a[dc]:e=a.h;a=!!((null==e?0:e)&1)}else a=!1;a&&ec(c);return c}
function kc(a){if(a&&"object"==typeof a&&a.toJSON)return a.toJSON();a=hc(a);return Array.isArray(a)?jc(a,kc):a}
function lc(a){return cc&&null!=a&&a instanceof Uint8Array?new Uint8Array(a):a}
;var mc;function H(a,b,c){var d=mc;mc=null;a||(a=d);d=this.constructor.Rb;a||(a=d?[d]:[]);this.j=(d?0:-1)-(this.constructor.Qb||0);this.h=void 0;this.H=a;a:{d=this.H.length;a=d-1;if(d&&(d=this.H[a],fc(d))){this.l=a-this.j;this.i=d;break a}void 0!==b&&-1<b?(this.l=Math.max(b,a+1-this.j),this.i=void 0):this.l=Number.MAX_VALUE}if(c)for(b=0;b<c.length;b++)if(a=c[b],a<this.l)a+=this.j,(d=this.H[a])?Array.isArray(d)&&ec(d):this.H[a]=nc;else{d=this.i||(this.i=this.H[this.l+this.j]={});var e=d[a];e?Array.isArray(e)&&
ec(e):d[a]=nc}}
var nc=Object.freeze(ec([]));function oc(a,b,c){return-1===b?null:b>=a.l?a.i?a.i[b]:void 0:(void 0===c?0:c)&&a.i&&(c=a.i[b],null!=c)?c:a.H[b+a.j]}
function pc(a,b,c){c=void 0===c?!1:c;var d=oc(a,b,c);null==d&&(d=nc);d===nc&&(d=ec(d.slice()),I(a,b,d,c));return d}
function I(a,b,c,d){b<a.l&&(void 0===d||!d)?a.H[b+a.j]=c:(a.i||(a.i=a.H[a.l+a.j]={}))[b]=c;return a}
function qc(a,b){for(var c=0,d=0;d<b.length;d++){var e=b[d];null!=oc(a,e)&&(0!==c&&I(a,c,void 0,!1),c=e)}return c}
function rc(a,b,c,d,e){if(-1===c)return null;a.h||(a.h={});var f=a.h[c];if(f)return f;e=oc(a,c,void 0===e?!1:e);if(null==e&&!d)return f;b=new b(e);return a.h[c]=b}
function sc(a,b,c,d){a.h||(a.h={});var e=a.h[c];if(!e){d=pc(a,c,void 0===d?!1:d);e=[];for(var f=0;f<d.length;f++)e[f]=new b(d[f]);a.h[c]=e}return e}
function tc(a,b,c,d){a.h||(a.h={});var e=c?c.H:c;a.h[b]=c;return I(a,b,e,void 0===d?!1:d)}
function uc(a,b,c,d){var e=sc(a,c,b,void 0===e?!1:e);c=d?d:new c;a=pc(a,b);e.push(c);a.push(c.H)}
H.prototype.toJSON=function(){var a=this.H;return gc?a:jc(a,kc)};
function vc(a,b){return hc(b)}
H.prototype.toString=function(){return this.H.toString()};
H.prototype.clone=function(){var a=this.constructor,b;mc=b=jc(this.H,lc);a=new a(b);mc=null;wc(a,this);return a};
function wc(a,b){b.m&&(a.m=b.m.slice());var c=b.h;if(c){b=b.i;for(var d in c){var e=c[d];if(e){var f=!(!b||!b[d]),g=+d;if(Array.isArray(e)){if(e.length)for(f=sc(a,e[0].constructor,g,f),g=0;g<Math.min(f.length,e.length);g++)wc(f[g],e[g])}else(f=rc(a,e.constructor,g,void 0,f))&&wc(f,e)}}}}
;function xc(a,b){var c=this.h;if(this.isRepeated){var d=!0;d=void 0===d?!1:d;if(b){var e=ec([]);for(var f=0;f<b.length;f++)e[f]=b[f].H;a.h||(a.h={});a.h[c]=b}else a.h&&(a.h[c]=void 0),e=nc;a=I(a,c,e,d)}else a=tc(a,c,b,!0);return a}
;var yc=window;kb("csi.gstatic.com");kb("googleads.g.doubleclick.net");kb("partner.googleadservices.com");kb("pubads.g.doubleclick.net");kb("securepubads.g.doubleclick.net");kb("tpc.googlesyndication.com");/*

 SPDX-License-Identifier: Apache-2.0
*/
function zc(a,b){this.width=a;this.height=b}
n=zc.prototype;n.clone=function(){return new zc(this.width,this.height)};
n.aspectRatio=function(){return this.width/this.height};
n.isEmpty=function(){return!(this.width*this.height)};
n.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
n.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
n.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};
n.scale=function(a,b){this.width*=a;this.height*="number"===typeof b?b:a;return this};function Ac(){var a=document;var b="IFRAME";"application/xhtml+xml"===a.contentType&&(b=b.toLowerCase());return a.createElement(b)}
function Bc(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;function Cc(a){var b=Dc;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a(b[c],c,b)}
function Ec(){var a=[];Cc(function(b){a.push(b)});
return a}
var Dc={ub:"allow-forms",vb:"allow-modals",wb:"allow-orientation-lock",xb:"allow-pointer-lock",yb:"allow-popups",zb:"allow-popups-to-escape-sandbox",Ab:"allow-presentation",Bb:"allow-same-origin",Cb:"allow-scripts",Db:"allow-top-navigation",Eb:"allow-top-navigation-by-user-activation"},Fc=Va(function(){return Ec()});
function Gc(){var a=Hc(),b={};F(Fc(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
function Hc(){var a=void 0===a?document:a;return a.createElement("iframe")}
;var Ic=(new Date).getTime();var Jc=new function(a,b){this.flag=a;this.defaultValue=void 0===b?!1:b}(1959);function Kc(a){if(!a)return"";if(/^about:(?:blank|srcdoc)$/.test(a))return window.origin||"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if("http"!==c&&"https"!==c&&"chrome-extension"!==c&&"moz-extension"!==c&&"file"!==c&&"android-app"!==
c&&"chrome-search"!==c&&"chrome-untrusted"!==c&&"chrome"!==c&&"app"!==c&&"devtools"!==c)throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===c&&"80"!==e||"https"===c&&"443"!==e)a=":"+e}return c+"://"+b+a}
;function Lc(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;m=l=0}
function b(p){for(var u=g,q=0;64>q;q+=4)u[q/4]=p[q]<<24|p[q+1]<<16|p[q+2]<<8|p[q+3];for(q=16;80>q;q++)p=u[q-3]^u[q-8]^u[q-14]^u[q-16],u[q]=(p<<1|p>>>31)&4294967295;p=e[0];var x=e[1],y=e[2],A=e[3],M=e[4];for(q=0;80>q;q++){if(40>q)if(20>q){var O=A^x&(y^A);var P=1518500249}else O=x^y^A,P=1859775393;else 60>q?(O=x&y|A&(x|y),P=2400959708):(O=x^y^A,P=3395469782);O=((p<<5|p>>>27)&4294967295)+O+M+P+u[q]&4294967295;M=A;A=y;y=(x<<30|x>>>2)&4294967295;x=p;p=O}e[0]=e[0]+p&4294967295;e[1]=e[1]+x&4294967295;e[2]=
e[2]+y&4294967295;e[3]=e[3]+A&4294967295;e[4]=e[4]+M&4294967295}
function c(p,u){if("string"===typeof p){p=unescape(encodeURIComponent(p));for(var q=[],x=0,y=p.length;x<y;++x)q.push(p.charCodeAt(x));p=q}u||(u=p.length);q=0;if(0==l)for(;q+64<u;)b(p.slice(q,q+64)),q+=64,m+=64;for(;q<u;)if(f[l++]=p[q++],m++,64==l)for(l=0,b(f);q+64<u;)b(p.slice(q,q+64)),q+=64,m+=64}
function d(){var p=[],u=8*m;56>l?c(h,56-l):c(h,64-(l-56));for(var q=63;56<=q;q--)f[q]=u&255,u>>>=8;b(f);for(q=u=0;5>q;q++)for(var x=24;0<=x;x-=8)p[u++]=e[q]>>x&255;return p}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var l,m;a();return{reset:a,update:c,digest:d,jb:function(){for(var p=d(),u="",q=0;q<p.length;q++)u+="0123456789ABCDEF".charAt(Math.floor(p[q]/16))+"0123456789ABCDEF".charAt(p[q]%16);return u}}}
;function Mc(a,b,c){var d=String(B.location.href);return d&&a&&b?[b,Nc(Kc(d),a,c||null)].join(" "):null}
function Nc(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],F(d,function(h){e.push(h)}),Oc(e.join(" "));
var f=[],g=[];F(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];F(d,function(h){e.push(h)});
a=Oc(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function Oc(a){var b=Lc();b.update(a);return b.jb().toLowerCase()}
;var Pc={};function Qc(a){this.h=a||{cookie:""}}
n=Qc.prototype;n.isEnabled=function(){if(!B.navigator.cookieEnabled)return!1;if(!this.isEmpty())return!0;this.set("TESTCOOKIESENABLED","1",{Ca:60});if("1"!==this.get("TESTCOOKIESENABLED"))return!1;this.remove("TESTCOOKIESENABLED");return!0};
n.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.Ub;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.Ca}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===h&&(h=-1);c=f?";domain="+f:"";g=g?";path="+g:"";d=d?";secure":"";h=0>h?"":0==h?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+1E3*h)).toUTCString();this.h.cookie=a+"="+b+c+g+h+d+(null!=e?";samesite="+
e:"")};
n.get=function(a,b){for(var c=a+"=",d=(this.h.cookie||"").split(";"),e=0,f;e<d.length;e++){f=mb(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
n.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{Ca:0,path:b,domain:c});return d};
n.isEmpty=function(){return!this.h.cookie};
n.clear=function(){for(var a=(this.h.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=mb(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var Rc=new Qc("undefined"==typeof document?null:document);function Sc(a){return!!Pc.FPA_SAMESITE_PHASE2_MOD||!(void 0===a||!a)}
function Tc(a,b,c,d){(a=B[a])||(a=(new Qc(document)).get(b));return a?Mc(a,c,d):null}
function Uc(a){var b=void 0===b?!1:b;var c=Kc(String(B.location.href)),d=[];var e=b;e=void 0===e?!1:e;var f=B.__SAPISID||B.__APISID||B.__3PSAPISID||B.__OVERRIDE_SID;Sc(e)&&(f=f||B.__1PSAPISID);if(f)e=!0;else{var g=new Qc(document);f=g.get("SAPISID")||g.get("APISID")||g.get("__Secure-3PAPISID")||g.get("SID");Sc(e)&&(f=f||g.get("__Secure-1PAPISID"));e=!!f}e&&(e=(c=0==c.indexOf("https:")||0==c.indexOf("chrome-extension:")||0==c.indexOf("moz-extension:"))?B.__SAPISID:B.__APISID,e||(e=new Qc(document),
e=e.get(c?"SAPISID":"APISID")||e.get("__Secure-3PAPISID")),(e=e?Mc(e,c?"SAPISIDHASH":"APISIDHASH",a):null)&&d.push(e),c&&Sc(b)&&((b=Tc("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",a))&&d.push(b),(a=Tc("__3PSAPISID","__Secure-3PAPISID","SAPISID3PHASH",a))&&d.push(a)));return 0==d.length?null:d.join(" ")}
;function Vc(){this.l=this.l;this.v=this.v}
Vc.prototype.l=!1;Vc.prototype.dispose=function(){this.l||(this.l=!0,this.fa())};
Vc.prototype.fa=function(){if(this.v)for(;this.v.length;)this.v.shift()()};function Wc(a,b){this.type=a;this.h=this.target=b;this.defaultPrevented=this.j=!1}
Wc.prototype.stopPropagation=function(){this.j=!0};
Wc.prototype.preventDefault=function(){this.defaultPrevented=!0};function Xc(a){var b=C("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||B.$googDebugFname||b}catch(g){e="Not available",c=!0}b=Yc(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(null==
c){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,Zc[c])c=Zc[c];else{c=String(c);if(!Zc[c]){var f=/function\s+([^\(]+)/m.exec(c);Zc[c]=f?f[1]:"[Anonymous]"}c=Zc[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";"function"===typeof a.toString&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}a.stack=
b;return{message:a.message,name:a.name,lineNumber:a.lineNumber,fileName:a.fileName,stack:a.stack}}
function Yc(a,b){b||(b={});b[$c(a)]=!0;var c=a.stack||"";(a=a.hb)&&!b[$c(a)]&&(c+="\nCaused by: ",a.stack&&0==a.stack.indexOf(a.toString())||(c+="string"===typeof a?a:a.message+"\n"),c+=Yc(a,b));return c}
function $c(a){var b="";"function"===typeof a.toString&&(b=""+a);return b+a.stack}
var Zc={};var ad=function(){if(!B.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{B.addEventListener("test",Ja,b),B.removeEventListener("test",Ja,b)}catch(c){}return a}();function bd(a,b){Wc.call(this,a?a.type:"");this.relatedTarget=this.h=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.i=null;a&&this.init(a,b)}
E(bd,Wc);var cd={2:"touch",3:"pen",4:"mouse"};
bd.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.h=b;if(b=a.relatedTarget){if(Lb){a:{try{Hb(b.nodeName);var e=!0;break a}catch(f){}e=!1}e||(b=null)}}else"mouseover"==c?b=a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||
0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:cd[a.pointerType]||"";this.state=a.state;
this.i=a;a.defaultPrevented&&bd.N.preventDefault.call(this)};
bd.prototype.stopPropagation=function(){bd.N.stopPropagation.call(this);this.i.stopPropagation?this.i.stopPropagation():this.i.cancelBubble=!0};
bd.prototype.preventDefault=function(){bd.N.preventDefault.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var dd="closure_listenable_"+(1E6*Math.random()|0);var ed=0;function fd(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.pa=e;this.key=++ed;this.ha=this.la=!1}
function gd(a){a.ha=!0;a.listener=null;a.proxy=null;a.src=null;a.pa=null}
;function hd(a){this.src=a;this.listeners={};this.h=0}
hd.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.h++);var g=id(a,b,d,e);-1<g?(b=a[g],c||(b.la=!1)):(b=new fd(b,this.src,f,!!d,e),b.la=c,a.push(b));return b};
hd.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=id(e,b,c,d);return-1<b?(gd(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.listeners[a],this.h--),!0):!1};
function jd(a,b){var c=b.type;c in a.listeners&&Ya(a.listeners[c],b)&&(gd(b),0==a.listeners[c].length&&(delete a.listeners[c],a.h--))}
function id(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.ha&&f.listener==b&&f.capture==!!c&&f.pa==d)return e}return-1}
;var kd="closure_lm_"+(1E6*Math.random()|0),ld={},md=0;function nd(a,b,c,d,e){if(d&&d.once)od(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)nd(a,b[f],c,d,e);else c=pd(c),a&&a[dd]?a.Y(b,c,La(d)?!!d.capture:!!d,e):qd(a,b,c,!1,d,e)}
function qd(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=La(e)?!!e.capture:!!e,h=rd(a);h||(a[kd]=h=new hd(a));c=h.add(b,c,d,g,f);if(!c.proxy){d=sd();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)ad||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(td(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");md++}}
function sd(){function a(c){return b.call(a.src,a.listener,c)}
var b=ud;return a}
function od(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)od(a,b[f],c,d,e);else c=pd(c),a&&a[dd]?a.h.add(String(b),c,!0,La(d)?!!d.capture:!!d,e):qd(a,b,c,!0,d,e)}
function vd(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)vd(a,b[f],c,d,e);else(d=La(d)?!!d.capture:!!d,c=pd(c),a&&a[dd])?a.h.remove(String(b),c,d,e):a&&(a=rd(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=id(b,c,d,e)),(c=-1<a?b[a]:null)&&wd(c))}
function wd(a){if("number"!==typeof a&&a&&!a.ha){var b=a.src;if(b&&b[dd])jd(b.h,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(td(c),d):b.addListener&&b.removeListener&&b.removeListener(d);md--;(c=rd(b))?(jd(c,a),0==c.h&&(c.src=null,b[kd]=null)):gd(a)}}}
function td(a){return a in ld?ld[a]:ld[a]="on"+a}
function ud(a,b){if(a.ha)a=!0;else{b=new bd(b,this);var c=a.listener,d=a.pa||a.src;a.la&&wd(a);a=c.call(d,b)}return a}
function rd(a){a=a[kd];return a instanceof hd?a:null}
var xd="__closure_events_fn_"+(1E9*Math.random()>>>0);function pd(a){if("function"===typeof a)return a;a[xd]||(a[xd]=function(b){return a.handleEvent(b)});
return a[xd]}
;function J(){Vc.call(this);this.h=new hd(this);this.va=this;this.I=null}
E(J,Vc);J.prototype[dd]=!0;J.prototype.addEventListener=function(a,b,c,d){nd(this,a,b,c,d)};
J.prototype.removeEventListener=function(a,b,c,d){vd(this,a,b,c,d)};
function yd(a,b){var c=a.I;if(c){var d=[];for(var e=1;c;c=c.I)d.push(c),++e}a=a.va;c=b.type||b;"string"===typeof b?b=new Wc(b,a):b instanceof Wc?b.target=b.target||a:(e=b,b=new Wc(c,a),hb(b,e));e=!0;if(d)for(var f=d.length-1;!b.j&&0<=f;f--){var g=b.h=d[f];e=zd(g,c,!0,b)&&e}b.j||(g=b.h=a,e=zd(g,c,!0,b)&&e,b.j||(e=zd(g,c,!1,b)&&e));if(d)for(f=0;!b.j&&f<d.length;f++)g=b.h=d[f],e=zd(g,c,!1,b)&&e}
J.prototype.fa=function(){}