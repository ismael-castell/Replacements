"use strict";this.default_VerifiedReviewsGcrBootstrapJs=this.default_VerifiedReviewsGcrBootstrapJs||{};(function(_){var window=this;
try{
var l,m=function(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,m);else{var c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));void 0!==b&&(this.cause=b)},p=function(){},q=function(){},u=function(a,b){a.src=b instanceof r&&b.constructor===r?b.g:"type_error:TrustedResourceUrl";var c,d;(c=(b=null==(d=(c=(a.ownerDocument&&a.ownerDocument.defaultView||window).document).querySelector)?void 0:d.call(c,"script[nonce]"))?
b.nonce||b.getAttribute("nonce")||"":"")&&a.setAttribute("nonce",c)},v=function(a){n.setTimeout(function(){throw a;},0)},aa="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a},ba=function(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("a");
},ca=ba(this),da=function(a,b){if(b)a:{var c=ca;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&aa(c,a,{configurable:!0,writable:!0,value:b})}};da("Number.isFinite",function(a){return a?a:function(b){return"number"!==typeof b?!1:!isNaN(b)&&Infinity!==b&&-Infinity!==b}});
/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var n=this||self,w=function(a,b){a=a.split(".");b=b||n;for(var c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b},x=function(a){var b=typeof a;return"object"==b&&null!=a||"function"==b},ea=function(a,b,c){return a.call.apply(a.bind,arguments)},fa=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,
arguments)}},y=function(){},ha=function(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}},z=function(a,b){function c(){}c.prototype=b.prototype;a.H=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.G=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-
2]=arguments[h];return b.prototype[e].apply(d,g)}},A=function(a){return a};
z(m,Error);m.prototype.name="CustomError";
var B=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)};
var C=function(){};
var D;
var F=function(a,b){this.h=a===E&&b||"";this.g=ia},ja=function(a){return a instanceof F&&a.constructor===F&&a.g===ia?a.h:"type_error:Const"},ia={},E={};
var r=function(a,b){this.g=b===ka?a:""};r.prototype.toString=function(){return this.g+""};var ka={},la=function(){}