gapi.loaded_2(function(_){var window=this;
/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
_.Wg=function(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);255<e&&(b[c++]=e&255,e>>=8);b[c++]=e}return b};
var Xg,Yg,$g;Xg={};Yg=null;_.Zg=_.dd||_.ed||!_.Vg&&!_.ad&&"function"==typeof _.u.atob;_.ah=function(){};
_.bh=function(a,b){function c(l){for(;d<a.length;){var m=a.charAt(d++),n=Yg[m];if(null!=n)return n;if(!_.hc(m))throw Error("C`"+m);}return l}$g();for(var d=0;;){var e=c(-1),f=c(0),h=c(64),k=c(64);if(64===k&&-1===e)break;b(e<<2|f>>4);64!=h&&(b(f<<4&240|h>>2),64!=k&&b(h<<6&192|k))}};
$g=function(){if(!Yg){Yg={};for(var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),b=["+/=","+/","-_=","-_.","-_"],c=0;5>c;c++){var d=a.concat(b[c].split(""));Xg[c]=d;for(var e=0;e<d.length;e++){var f=d[e];void 0===Yg[f]&&(Yg[f]=e)}}}};

_.yh={};
/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var Ah;_.zh=function(a){this.ub=a||{cookie:""}};_.g=_.zh.prototype;_.g.isEnabled=function(){if(!_.u.navigator.cookieEnabled)return!1;if(!this.isEmpty())return!0;this.set("TESTCOOKIESENABLED","1",{bF:60});if("1"!==this.get("TESTCOOKIESENABLED"))return!1;this.remove("TESTCOOKIESENABLED");return!0};
_.g.set=function(){}