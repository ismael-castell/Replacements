Date.now=Date.now||function(){return+new Date};
(function(){var lastTime=0;var vendors=["ms","moz","webkit","o"];for(var x=0;x<vendors.length&&!window.requestAnimationFrame;++x){window.requestAnimationFrame=window[vendors[x]+"RequestAnimationFrame"];window.cancelAnimationFrame=window[vendors[x]+"CancelAnimationFrame"]||window[vendors[x]+"CancelRequestAnimationFrame"]}if(!window.requestAnimationFrame)window.requestAnimationFrame=function(callback,element){var currTime=(new Date).getTime();var timeToCall=Math.max(0,16-(currTime-lastTime));var id=
window.setTimeout(function(){callback(currTime+timeToCall)},timeToCall);lastTime=currTime+timeToCall;return id};if(!window.cancelAnimationFrame)window.cancelAnimationFrame=function(id){clearTimeout(id)}})();window.tcYoutubeApiInitiated=false;window.onYouTubeIframeAPIReady=function(){window.tcYoutubeApiInitiated=true;var event=document.createEvent("HTMLEvents");event.initEvent("TCYoutubeReady",true,false);window.dispatchEvent(event)};
(function() { var h,l=this;
function m(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==
b&&"undefined"==typeof a.call)return"object";return b}function aa(a){var b=m(a);return"array"==b||"object"==b&&"number"==typeof a.length}function n(a){return"string"==typeof a}function p(a){return"number"==typeof a}function ba(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}function ca(a,b,c){return a.call.apply(a.bind,arguments)}
function da(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function q(a,b,c){q=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ca:da;return q.apply(null,arguments)};function r(a,b){this.type=a;this.currentTarget=this.target=b;this.defaultPrevented=this.X=!1}r.prototype.stopPropagation=function(){this.X=!0};r.prototype.preventDefault=function(){this.defaultPrevented=!0};var t;var ea=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")};function u(a,b){return a<b?-1:a>b?1:0};var v=Array.prototype.indexOf?function(a,b,c){return Array.prototype.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(n(a))return n(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},w=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,f=n(a)?a.split(""):a,e=0;e<d;e++)e in f&&b.call(c,f[e],e,a)},fa=Array.prototype.filter?function(a,b,c){return Array.prototype.filter.call(a,
b,c)}:function(a,b,c){for(var d=a.length,f=[],e=0,g=n(a)?a.split(""):a,k=0;k<d;k++)if(k in g){var W=g[k];b.call(c,W,k,a)&&(f[e++]=W)}return f};function ha(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}function ia(a,b){a.sort(b||ja)}function ja(a,b){return a>b?1:a<b?-1:0};var x;a:{var ka=l.navigator;if(ka){var la=ka.userAgent;if(la){x=la;break a}}x=""};function ma(a,b){for(var c in a)if(b.call(void 0,a[c],c,a))return!0;return!1};function y(a){y[" "](a);return a}y[" "]=function(){};function na(a,b){var c=oa;return Object.prototype.hasOwnProperty.call(c,a)?c[a]:c[a]=b(a)};var pa=-1!=x.indexOf("Opera"),z=-1!=x.indexOf("Trident")||-1!=x.indexOf("MSIE"),qa=-1!=x.indexOf("Edge"),A=-1!=x.indexOf("Gecko")&&!(-1!=x.toLowerCase().indexOf("webkit")&&-1==x.indexOf("Edge"))&&!(-1!=x.indexOf("Trident")||-1!=x.indexOf("MSIE"))&&-1==x.indexOf("Edge"),B=-1!=x.toLowerCase().indexOf("webkit")&&-1==x.indexOf("Edge");function ra(){var a=l.document;return a?a.documentMode:void 0}var C;
a:{var D="",E=function(){var a=x;if(A)return/rv\:([^\);]+)(\)|;)/.exec(a);if(qa)return/Edge\/([\d\.]+)/.exec(a);if(z)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(B)return/WebKit\/(\S+)/.exec(a);if(pa)return/(?:Version)[ \/]?(\S+)/.exec(a)}();E&&(D=E?E[1]:"");if(z){var sa=ra();if(null!=sa&&sa>parseFloat(D)){C=String(sa);break a}}C=D}var oa={};
function F(a){return na(a,function(){for(var b=0,c=ea(String(C)).split("."),d=ea(String(a)).split("."),f=Math.max(c.length,d.length),e=0;0==b&&e<f;e++){var g=c[e]||"",k=d[e]||"";do{g=/(\d*)(\D*)(.*)/.exec(g)||["","","",""];k=/(\d*)(\D*)(.*)/.exec(k)||["","","",""];if(0==g[0].length&&0==k[0].length)break;b=u(0==g[1].length?0:parseInt(g[1],10),0==k[1].length?0:parseInt(k[1],10))||u(0==g[2].length,0==k[2].length)||u(g[2],k[2]);g=g[3];k=k[3]}while(0==b)}return 0<=b})}
var ta=l.document,ua=ta&&z?ra()||("CSS1Compat"==ta.compatMode?parseInt(C,10):5):void 0;var va=!z||9<=Number(ua),wa=z&&!F("9");!B||F("528");A&&F("1.9b")||z&&F("8")||pa&&F("9.5")||B&&F("528");A&&!F("8")||z&&F("9");function G(a,b){r.call(this,a?a.type:"");this.relatedTarget=this.currentTarget=this.target=null;this.charCode=this.keyCode=this.button=this.screenY=this.screenX=this.clientY=this.clientX=this.offsetY=this.offsetX=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.v=this.state=null;a&&this.a(a,b)}
(function(){function a(){}a.prototype=r.prototype;G.pa=r.prototype;G.prototype=new a;G.prototype.constructor=G;G.Fa=function(a,c,d){for(var b=Array(arguments.length-2),e=2;e<arguments.length;e++)b[e-2]=arguments[e];return r.prototype[c].apply(a,b)}})();
G.prototype.a=function(a,b){var c=this.type=a.type,d=a.changedTouches?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.currentTarget=b;var f=a.relatedTarget;if(f){if(A){var e;a:{try{y(f.nodeName);e=!0;break a}catch(g){}e=!1}e||(f=null)}}else"mouseover"==c?f=a.fromElement:"mouseout"==c&&(f=a.toElement);this.relatedTarget=f;null===d?(this.offsetX=B||void 0!==a.offsetX?a.offsetX:a.layerX,this.offsetY=B||void 0!==a.offsetY?a.offsetY:a.layerY,this.clientX=void 0!==a.clientX?a.clientX:a.pageX,
this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0):(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.state=a.state;this.v=a;a.defaultPrevented&&this.preventDefault()};
G.prototype.stopPropagation=function(){G.pa.stopPropagation.call(this);this.v.stopPropagation?this.v.stopPropagation():this.v.cancelBubble=!0};G.prototype.preventDefault=function(){G.pa.preventDefault.call(this);var a=this.v;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,wa)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};var xa="closure_listenable_"+(1E6*Math.random()|0),ya=0;function za(a,b,c,d,f){this.listener=a;this.I=null;this.src=b;this.type=c;this.F=!!d;this.P=f;this.key=++ya;this.w=this.M=!1}function Aa(a){a.w=!0;a.listener=null;a.I=null;a.src=null;a.P=null};function H(a){this.src=a;this.b={};this.K=0}H.prototype.add=function(a,b,c,d,f){var e=a.toString();a=this.b[e];a||(a=this.b[e]=[],this.K++);var g=Ba(a,b,d,f);-1<g?(b=a[g],c||(b.M=!1)):(b=new za(b,this.src,e,!!d,f),b.M=c,a.push(b));return b};H.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.b))return!1;var f=this.b[a];b=Ba(f,b,c,d);return-1<b?(Aa(f[b]),Array.prototype.splice.call(f,b,1),0==f.length&&(delete this.b[a],this.K--),!0):!1};
function Ca(a,b){var c=b.type;if(c in a.b){var d=a.b[c],f=v(d,b),e;(e=0<=f)&&Array.prototype.splice.call(d,f,1);e&&(Aa(b),0==a.b[c].length&&(delete a.b[c],a.K--))}}H.prototype.hasListener=function(a,b){var c=void 0!==a,d=c?a.toString():"",f=void 0!==b;return ma(this.b,function(a){for(var e=0;e<a.length;++e)if(!(c&&a[e].type!=d||f&&a[e].F!=b))return!0;return!1})};function Ba(a,b,c,d){for(var f=0;f<a.length;++f){var e=a[f];if(!e.w&&e.listener==b&&e.F==!!c&&e.P==d)return f}return-1};var Da="closure_lm_"+(1E6*Math.random()|0),Ea={},Fa=0;
function I(a,b,c,d,f){if("array"==m(b))for(var e=0;e<b.length;e++)I(a,b[e],c,d,f);else if(c=Ga(c),a&&a[xa])a.ta.add(String(b),c,!1,d,f);else{if(!b)throw Error("Invalid event type");var e=!!d,g=Ha(a);g||(a[Da]=g=new H(a));c=g.add(b,c,!1,d,f);if(!c.I){d=Ia();c.I=d;d.src=a;d.listener=c;if(a.addEventListener)a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(Ja(b.toString()),d);else throw Error("addEventListener and attachEvent are unavailable.");Fa++}}}
function Ia(){var a=Ka,b=va?function(c){return a.call(b.src,b.listener,c)}:function(c){c=a.call(b.src,b.listener,c);if(!c)return c};return b}function Ja(a){return a in Ea?Ea[a]:Ea[a]="on"+a}function La(a,b,c,d){var f=!0;if(a=Ha(a))if(b=a.b[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var e=b[a];e&&e.F==c&&!e.w&&(e=Ma(e,d),f=f&&!1!==e)}return f}
function Ma(a,b){var c=a.listener,d=a.P||a.src;if(a.M&&!p(a)&&a&&!a.w){var f=a.src;if(f&&f[xa])Ca(f.ta,a);else{var e=a.type,g=a.I;f.removeEventListener?f.removeEventListener(e,g,a.F):f.detachEvent&&f.detachEvent(Ja(e),g);Fa--;(e=Ha(f))?(Ca(e,a),0==e.K&&(e.src=null,f[Da]=null)):Aa(a)}}return c.call(d,b)}
function Ka(a,b){if(a.w)return!0;if(!va){var c;if(!(c=b))a:{c=["window","event"];for(var d=l,f;f=c.shift();)if(null!=d[f])d=d[f];else{c=null;break a}c=d}f=c;c=new G(f,this);d=!0;if(!(0>f.keyCode||void 0!=f.returnValue)){a:{var e=!1;if(0==f.keyCode)try{f.keyCode=-1;break a}catch(W){e=!0}if(e||void 0==f.returnValue)f.returnValue=!0}f=[];for(e=c.currentTarget;e;e=e.parentNode)f.push(e);for(var e=a.type,g=f.length-1;!c.X&&0<=g;g--){c.currentTarget=f[g];var k=La(f[g],e,!0,c),d=d&&k}for(g=0;!c.X&&g<f.length;g++)c.currentTarget=
f[g],k=La(f[g],e,!1,c),d=d&&k}return d}return Ma(a,new G(b,this))}function Ha(a){a=a[Da];return a instanceof H?a:null}var Na="__closure_events_fn_"+(1E9*Math.random()>>>0);function Ga(a){if("function"==m(a))return a;a[Na]||(a[Na]=function(b){return a.handleEvent(b)});return a[Na]};function J(a,b,c){if("function"==m(a))c&&(a=q(a,c));else if(a&&"function"==typeof a.handleEvent)a=q(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(b)?-1:l.setTimeout(a,b||0)};!A&&!z||z&&9<=Number(ua)||A&&F("1.9.1");z&&F("9");function K(a,b){this.x=void 0!==a?a:0;this.y=void 0!==b?b:0}h=K.prototype;h.clone=function(){return new K(this.x,this.y)};h.toString=function(){return"("+this.x+", "+this.y+")"};h.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};h.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};h.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};
h.translate=function(a,b){a instanceof K?(this.x+=a.x,this.y+=a.y):(this.x+=Number(a),p(b)&&(this.y+=b));return this};h.scale=function(a,b){var c=p(b)?b:a;this.x*=a;this.y*=c;return this};function L(a,b){this.width=a;this.height=b}h=L.prototype;h.clone=function(){return new L(this.width,this.height)};h.toString=function(){return"("+this.width+" x "+this.height+")"};h.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};h.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};h.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};
h.scale=function(a,b){var c=p(b)?b:a;this.width*=a;this.height*=c;return this};function M(a){var b=document;return b.querySelectorAll&&b.querySelector?b.querySelectorAll("."+a):Oa("*",a,void 0)}function N(a){var b=document;return(b.getElementsByClassName?b.getElementsByClassName(a)[0]:b.querySelectorAll&&b.querySelector?b.querySelector("."+a):Oa("*",a,void 0)[0])||null}
function Oa(a,b,c){var d=document;c=c||d;var f=a&&"*"!=a?a.toUpperCase():"";if(c.querySelectorAll&&c.querySelector&&(f||b))return c.querySelectorAll(f+(b?"."+b:""));if(b&&c.getElementsByClassName){a=c.getElementsByClassName(b);if(f){c={};for(var e=d=0,g;g=a[e];e++)f==g.nodeName&&(c[d++]=g);c.length=d;return c}return a}a=c.getElementsByTagName(f||"*");if(b){c={};for(e=d=0;g=a[e];e++){var f=g.className,k;if(k="function"==typeof f.split)k=0<=v(f.split(/\s+/),b);k&&(c[d++]=g)}c.length=d;return c}return a}
function Pa(){var a=window.document,a="CSS1Compat"==a.compatMode?a.documentElement:a.body;return new L(a.clientWidth,a.clientHeight)}function(){}
function Ra(a,b,c){function d(c){c&&b.appendChild(n(c)?a.createTextNode(c):c)}for(var f=1;f<c.length;f++){var e=c[f];if(!aa(e)||ba(e)&&0<e.nodeType)d(e);else{var g;a:{if(e&&"number"==typeof e.length){if(ba(e)){g="function"==typeof e.item||"string"==typeof e.item;break a}if("function"==m(e)){g="function"==typeof e.item;break a}}g=!1}w(g?ha(e):e,d)}}}function Sa(a){for(var b;b=a.firstChild;)a.removeChild(b)}function O(a){return 9==a.nodeType?a:a.ownerDocument||a.document}
function Ta(a,b){var c=[];return Ua(a,b,c,!0)?c[0]:void 0}function Ua(a,b,c,d){if(null!=a)for(a=a.firstChild;a;){if(b(a)&&(c.push(a),d)||Ua(a,b,c,d))return!0;a=a.nextSibling}return!1}function P(a){this.u=a||l.document||document}h=P.prototype;h.getElementsByTagName=function(a,b){return(b||this.u).getElementsByTagName(a)};h.createElement=function(a){return this.u.createElement(String(a))};h.createTextNode=function(a){return this.u.createTextNode(String(a))};h.appendChild=function(a,b){a.appendChild(b)};
h.append=function(a,b){Ra(O(a),a,arguments)};h.canHaveChildren=function(a){if(1!=a.nodeType)return!1;switch(a.tagName){case "APPLET":case "AREA":case "BASE":case "BR":case "COL":case "COMMAND":case "EMBED":case "FRAME":case "HR":case "IMG":case "INPUT":case "IFRAME":case "ISINDEX":case "KEYGEN":case "LINK":case "NOFRAMES":case "NOSCRIPT":case "META":case "OBJECT":case "PARAM":case "SCRIPT":case "SOURCE":case "STYLE":case "TRACK":case "WBR":return!1}return!0};
h.removeNode=function(a){return a&&a.parentNode?a.parentNode.removeChild(a):null};h.contains=function(a,b){if(!a||!b)return!1;if(a.contains&&1==b.nodeType)return a==b||a.contains(b);if("undefined"!=typeof a.compareDocumentPosition)return a==b||!!(a.compareDocumentPosition(b)&16);for(;b&&a!=b;)b=b.parentNode;return b==a};function Va(a){if(a.classList)return a.classList;a=a.className;return n(a)&&a.match(/\S+/g)||[]}function Wa(a,b){var c;a.classList?c=a.classList.contains(b):(c=Va(a),c=0<=v(c,b));return c}function Q(a,b){a.classList?a.classList.add(b):Wa(a,b)||(a.className+=0<a.className.length?" "+b:b)}function R(a,b){a.classList?a.classList.remove(b):Wa(a,b)&&(a.className=fa(Va(a),function(a){return a!=b}).join(" "))};function Xa(a){var b;try{b=a.getBoundingClientRect()}catch(c){return{left:0,top:0,right:0,bottom:0}}z&&a.ownerDocument.body&&(a=a.ownerDocument,b.left-=a.documentElement.clientLeft+a.body.clientLeft,b.top-=a.documentElement.clientTop+a.body.clientTop);return b}
function Ya(a){var b=Za,c;a:{c=O(a);if(c.defaultView&&c.defaultView.getComputedStyle&&(c=c.defaultView.getComputedStyle(a,null))){c=c.display||c.getPropertyValue("display")||"";break a}c=""}if("none"!=(c||(a.currentStyle?a.currentStyle.display:null)||a.style&&a.style.display))return b(a);c=a.style;var d=c.display,f=c.visibility,e=c.position;c.visibility="hidden";c.position="absolute";c.display="inline";a=b(a);c.display=d;c.position=e;c.visibility=f;return a}
function(){}