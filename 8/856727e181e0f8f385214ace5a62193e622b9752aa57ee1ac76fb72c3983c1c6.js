/* KindEditor 4.1.10 (2013-11-23), Copyright (C) kindsoft.net, Licence: http://www.kindsoft.net/license.php */(function(w,i){function Z(a){if(!a)return!1;return Object.prototype.toString.call(a)==="[object Array]"}function wa(a){if(!a)return!1;return Object.prototype.toString.call(a)==="[object Function]"}function J(a,b){for(var c=0,d=b.length;c<d;c++)if(a===b[c])return c;return-1}function m(a,b){if(Z(a))for(var c=0,d=a.length;c<d;c++){if(b.call(a[c],c,a[c])===!1)break}else for(c in a)if(a.hasOwnProperty(c)&&b.call(a[c],c,a[c])===!1)break}function B(a){return a.replace(/(?:^[ \t\n\r]+)|(?:[ \t\n\r]+$)/g,
"")}function xa(a,b,c){c=c===i?",":c;return(c+b+c).indexOf(c+a+c)>=0}function s(a,b){b=b||"px";return a&&/^\d+$/.test(a)?a+b:a}function t(a){var b;return a&&(b=/(\d+)/.exec(a))?parseInt(b[1],10):0}function C(a){return a.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function fa(a){return a.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&amp;/g,"&")}function ga(a){var b=a.split("-"),a="";m(b,function(b,d){a+=b>0?d.charAt(0).toUpperCase()+
d.substr(1):d});return a}function ya(a){function b(a){a=parseInt(a,10).toString(16).toUpperCase();return a.length>1?a:"0"+a}return a.replace(/rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/ig,function(a,d,e,g){return"#"+b(d)+b(e)+b(g)})}function u(a,b){var b=b===i?",":b,c={},d=Z(a)?a:a.split(b),e;m(d,function(a,b){if(e=/^(\d+)\.\.(\d+)$/.exec(b))for(var d=parseInt(e[1],10);d<=parseInt(e[2],10);d++)c[d.toString()]=!0;else c[b]=!0});return c}function Ja(a,b){return Array.prototype.slice.call(a,b||0)}
function l(a,b){return a===i?b:a}function E(a,b,c){c||(c=b,b=null);var d;if(b){var e=function(){};e.prototype=b.prototype;d=new e;m(c,function(a,b){d[a]=b})}else d=c;d.constructor=a;a.prototype=d;a.parent=b?b.prototype:null}function eb(a){var b;if(b=/\{[\s\S]*\}|\[[\s\S]*\]/.exec(a))a=b[0];b=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;b.lastIndex=0;b.test(a)&&(a=a.replace(b,function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)}));
if(/^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return eval("("+a+")");throw"JSON parse error";}function Rb(a,b,c){a.addEventListener?a.addEventListener(b,c,fb):a.attachEvent&&a.attachEvent("on"+b,c)}function za(a,b,c){a.removeEventListener?a.removeEventListener(b,c,fb):a.detachEvent&&a.detachEvent("on"+b,c)}function gb(a,b){this.init(a,b)}function hb(a){try{delete a[$]}catch(b){a.removeAttribute&&
a.removeAttribute($)}}function aa(a,b,c){if(b.indexOf(",")>=0)m(b.split(","),function(){aa(a,this,c)});else{var d=a[$]||null;d||(a[$]=++ib,d=ib);v[d]===i&&(v[d]={});var e=v[d][b];e&&e.length>0?za(a,b,e[0]):(v[d][b]=[],v[d].el=a);e=v[d][b];e.length===0&&(e[0]=function(b){var c=b?new gb(a,b):i;m(e,function(b,d){b>0&&d&&d.call(a,c)})});J(c,e)<0&&e.push(c);Rb(a,b,e[0])}}function ha(a,b,c){if(b&&b.indexOf(",")>=0)m(b.split(","),function(){ha(a,this,c)});else{var d=a[$]||null;if(d)if(b===i)d in v&&(m(v[d],
function(b,c){b!="el"&&c.length>0&&za(a,b,c[0])}),delete v[d],hb(a));else if(v[d]){var e=v[d][b];if(e&&e.length>0){c===i?(za(a,b,e[0]),delete v[d][b]):(m(e,function(a,b){a>0&&b===c&&e.splice(a,1)}),e.length==1&&(za(a,b,e[0]),delete v[d][b]));var g=0;m(v[d],function(){g++});g<2&&(delete v[d],hb(a))}}}}function jb(a,b){if(b.indexOf(",")>=0)m(b.split(","),function(){}