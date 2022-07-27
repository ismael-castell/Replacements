gapi.loaded_1(function(_){var window=this;
/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
_.Zg=function(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);255<e&&(b[c++]=e&255,e>>=8);b[c++]=e}return b};
var $g,ah,ch;$g={};ah=null;_.bh=_.gd||_.hd||!_.Yg&&!_.dd&&"function"==typeof _.u.atob;_.dh=function(){};
_.eh=function(a,b){function c(l){for(;d<a.length;){var m=a.charAt(d++),n=ah[m];if(null!=n)return n;if(!_.ic(m))throw Error("C`"+m);}return l}ch();for(var d=0;;){var e=c(-1),f=c(0),h=c(64),k=c(64);if(64===k&&-1===e)break;b(e<<2|f>>4);64!=h&&(b(f<<4&240|h>>2),64!=k&&b(h<<6&192|k))}};
ch=function(){if(!ah){ah={};for(var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),b=["+/=","+/","-_=","-_.","-_"],c=0;5>c;c++){var d=a.concat(b[c].split(""));$g[c]=d;for(var e=0;e<d.length;e++){var f=d[e];void 0===ah[f]&&(ah[f]=e)}}}};

_.Bh={};
/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var Dh;_.Ch=function(a){this.ob=a||{cookie:""}};_.g=_.Ch.prototype;_.g.isEnabled=function(){if(!_.u.navigator.cookieEnabled)return!1;if(!this.isEmpty())return!0;this.set("TESTCOOKIESENABLED","1",{wE:60});if("1"!==this.get("TESTCOOKIESENABLED"))return!1;this.remove("TESTCOOKIESENABLED");return!0};
_.g.set=function(){}