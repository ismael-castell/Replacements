/* Homesite: JS Dev Master - 03-14-2022 */

!function(a){function b(d){if(c[d])return c[d].exports;var e=c[d]={i:d,l:!1,exports:{}};return a[d].call(e.exports,e,e.exports,b),e.l=!0,e.exports}var c={};b.m=a,b.c=c,b.i=function(a){return a},b.d=function(a,c,d){b.o(a,c)||Object.defineProperty(a,c,{configurable:!1,enumerable:!0,get:d})},b.n=function(a){var c=a&&a.__esModule?function(){return a.default}:function(){return a};return b.d(c,"a",c),c},b.o=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)},b.p="",b(b.s=33)}([function(a,b,c){"use strict";var d=jQuery;a.exports={breakpointDetect:function(){var a=document.querySelector("body");return getComputedStyle(a,":before").content.replace(/\"/g,"")},homePage:function(){var a=d("body");return a.hasClass("page-template-homepage")||a.hasClass("home")&&!a.hasClass("emergency-home")},emergencyPage:function(){return d("body").hasClass("page-template-emergency-page")},mobileMenu:function(){}