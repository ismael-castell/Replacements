(function(n,t){function gt(n){var t=n.length,r=i.type(n);return i.isWindow(n)?!1:1===n.nodeType&&t?!0:"array"===r||"function"!==r&&(0===t||"number"==typeof t&&t>0&&t-1 in n)}function te(n){var t=ni[n]={};return i.each(n.match(s)||[],function(n,i){t[i]=!0}),t}function ur(n,r,u,f){if(i.acceptData(n)){var h,o,c=i.expando,l=n.nodeType,s=l?i.cache:n,e=l?n[c]:n[c]&&c;if(e&&s[e]&&(f||s[e].data)||u!==t||"string"!=typeof r)return e||(e=l?n[c]=b.pop()||i.guid++:c),s[e]||(s[e]=l?{}:{toJSON:i.noop}),("object"==typeof r||"function"==typeof r)&&(f?s[e]=i.extend(s[e],r):s[e].data=i.extend(s[e].data,r)),o=s[e],f||(o.data||(o.data={}),o=o.data),u!==t&&(o[i.camelCase(r)]=u),"string"==typeof r?(h=o[r],null==h&&(h=o[i.camelCase(r)])):h=o,h}}function fr(n,t,r){if(i.acceptData(n)){var e,o,s=n.nodeType,u=s?i.cache:n,f=s?n[i.expando]:i.expando;if(u[f]){if(t&&(e=r?u[f]:u[f].data)){for(i.isArray(t)?t=t.concat(i.map(t,i.camelCase)):(t in e)?t=[t]:(t=i.camelCase(t),t=(t in e)?[t]:t.split(" ")),o=t.length;o--;)delete e[t[o]];if(r?!ti(e):!i.isEmptyObject(e))return}(r||(delete u[f].data,ti(u[f])))&&(s?i.cleanData([n],!0):i.support.deleteExpando||u!=u.window?delete u[f]:u[f]=null)}}}function er(n,r,u){if(u===t&&1===n.nodeType){var f="data-"+r.replace(rr,"-$1").toLowerCase();if(u=n.getAttribute(f),"string"==typeof u){try{u="true"===u?!0:"false"===u?!1:"null"===u?null:+u+""===u?+u:ir.test(u)?i.parseJSON(u):u}catch(e){}i.data(n,r,u)}else u=t}return u}function ti(n){var t;for(t in n)if(("data"!==t||!i.isEmptyObject(n[t]))&&"toJSON"!==t)return!1;return!0}function ct(){return!0}function g(){return!1}function cr(){try{return r.activeElement}catch(n){}}function ar(n,t){do n=n[t];while(n&&1!==n.nodeType);return n}function fi(n,t,r){if(i.isFunction(t))return i.grep(n,function(n,i){return!!t.call(n,i,n)!==r});if(t.nodeType)return i.grep(n,function(n){return n===t!==r});if("string"==typeof t){if(oe.test(t))return i.filter(t,n,r);t=i.filter(t,n)}return i.grep(n,function(n){return i.inArray(n,t)>=0!==r})}function vr(n){var i=yr.split("|"),t=n.createDocumentFragment();if(t.createElement)while(i.length)t.createElement(i.pop());return t}function gr(n,t){return i.nodeName(n,"table")&&i.nodeName(1===t.nodeType?t:t.firstChild,"tr")?n.getElementsByTagName("tbody")[0]||n.appendChild(n.ownerDocument.createElement("tbody")):n}function nu(n){return n.type=(null!==i.find.attr(n,"type"))+"/"+n.type,n}function tu(n){var t=ye.exec(n.type);return t?n.type=t[1]:n.removeAttribute("type"),n}function hi(n,t){for(var u,r=0;null!=(u=n[r]);r++)i._data(u,"globalEval",!t||i._data(t[r],"globalEval"))}function iu(n,t){if(1===t.nodeType&&i.hasData(n)){var u,f,o,s=i._data(n),r=i._data(t,s),e=s.events;if(e){delete r.handle;r.events={};for(u in e)for(f=0,o=e[u].length;o>f;f++)i.event.add(t,u,e[u][f])}r.data&&(r.data=i.extend({},r.data))}}function be(n,t){var r,f,u;if(1===t.nodeType){if(r=t.nodeName.toLowerCase(),!i.support.noCloneEvent&&t[i.expando]){u=i._data(t);for(f in u.events)i.removeEvent(t,f,u.handle);t.removeAttribute(i.expando)}"script"===r&&t.text!==n.text?(nu(t).text=n.text,tu(t)):"object"===r?(t.parentNode&&(t.outerHTML=n.outerHTML),i.support.html5Clone&&n.innerHTML&&!i.trim(t.innerHTML)&&(t.innerHTML=n.innerHTML)):"input"===r&&oi.test(n.type)?(t.defaultChecked=t.checked=n.checked,t.value!==n.value&&(t.value=n.value)):"option"===r?t.defaultSelected=t.selected=n.defaultSelected:("input"===r||"textarea"===r)&&(t.defaultValue=n.defaultValue)}}function u(n,r){var s,e,h=0,f=typeof n.getElementsByTagName!==o?n.getElementsByTagName(r||"*"):typeof n.querySelectorAll!==o?n.querySelectorAll(r||"*"):t;if(!f)for(f=[],s=n.childNodes||n;null!=(e=s[h]);h++)!r||i.nodeName(e,r)?f.push(e):i.merge(f,u(e,r));return r===t||r&&i.nodeName(n,r)?i.merge([n],f):f}function ke(n){oi.test(n.type)&&(n.defaultChecked=n.checked)}function ou(n,t){if(t in n)return t;for(var r=t.charAt(0).toUpperCase()+t.slice(1),u=t,i=eu.length;i--;)if(t=eu[i]+r,t in n)return t;return u}function ut(n,t){return n=t||n,"none"===i.css(n,"display")||!i.contains(n.ownerDocument,n)}function su(n,t){for(var f,r,o,e=[],u=0,s=n.length;s>u;u++)r=n[u],r.style&&(e[u]=i._data(r,"olddisplay"),f=r.style.display,t?(e[u]||"none"!==f||(r.style.display=""),""===r.style.display&&ut(r)&&(e[u]=i._data(r,"olddisplay",au(r.nodeName)))):e[u]||(o=ut(r),(f&&"none"!==f||!o)&&i._data(r,"olddisplay",o?f:i.css(r,"display"))));for(u=0;s>u;u++)r=n[u],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?e[u]||"":"none"));return n}function hu(n,t,i){var r=to.exec(t);return r?Math.max(0,r[1]-(i||0))+(r[2]||"px"):t}function cu(n,t,r,u,f){for(var e=r===(u?"border":"content")?4:"width"===t?1:0,o=0;4>e;e+=2)"margin"===r&&(o+=i.css(n,r+p[e],!0,f)),u?("content"===r&&(o-=i.css(n,"padding"+p[e],!0,f)),"margin"!==r&&(o-=i.css(n,"border"+p[e]+"Width",!0,f))):(o+=i.css(n,"padding"+p[e],!0,f),"padding"!==r&&(o+=i.css(n,"border"+p[e]+"Width",!0,f)));return o}function lu(n,t,r){var e=!0,u="width"===t?n.offsetWidth:n.offsetHeight,f=v(n),o=i.support.boxSizing&&"border-box"===i.css(n,"boxSizing",!1,f);if(0>=u||null==u){if(u=y(n,t,f),(0>u||null==u)&&(u=n.style[t]),lt.test(u))return u;e=o&&(i.support.boxSizingReliable||u===n.style[t]);u=parseFloat(u)||0}return u+cu(n,t,r||(o?"border":"content"),e,f)+"px"}function au(n){var u=r,t=uu[n];return t||(t=vu(n,u),"none"!==t&&t||(rt=(rt||i("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(u.documentElement),u=(rt[0].contentWindow||rt[0].contentDocument).document,u.write("<!doctype html><html><body>"),u.close(),t=vu(n,u),rt.detach()),uu[n]=t),t}function vu(n,t){var r=i(t.createElement(n)).appendTo(t.body),u=i.css(r[0],"display");return r.remove(),u}function li(n,t,r,u){var f;if(i.isArray(t))i.each(t,function(t,i){r||fo.test(n)?u(n,i):li(n+"["+("object"==typeof i?t:"")+"]",i,r,u)});else if(r||"object"!==i.type(t))u(n,t);else for(f in t)li(n+"["+f+"]",t[f],r,u)}function gu(n){return function(t,r){"string"!=typeof t&&(r=t,t="*");var u,f=0,e=t.toLowerCase().match(s)||[];if(i.isFunction(r))while(u=e[f++])"+"===u[0]?(u=u.slice(1)||"*",(n[u]=n[u]||[]).unshift(r)):(n[u]=n[u]||[]).push(r)}}function nf(n,r,u,f){function o(h){var c;return e[h]=!0,i.each(n[h]||[],function(n,i){var h=i(r,u,f);return"string"!=typeof h||s||e[h]?s?!(c=h):t:(r.dataTypes.unshift(h),o(h),!1)}),c}var e={},s=n===yi;return o(r.dataTypes[0])||!e["*"]&&o("*")}function pi(n,r){var f,u,e=i.ajaxSettings.flatOptions||{};for(u in r)r[u]!==t&&((e[u]?n:f||(f={}))[u]=r[u]);return f&&i.extend(!0,n,f),n}function ao(n,i,r){for(var s,o,f,e,h=n.contents,u=n.dataTypes;"*"===u[0];)u.shift(),o===t&&(o=n.mimeType||i.getResponseHeader("Content-Type"));if(o)for(e in h)if(h[e]&&h[e].test(o)){u.unshift(e);break}if(u[0]in r)f=u[0];else{for(e in r){if(!u[0]||n.converters[e+" "+u[0]]){f=e;break}s||(s=e)}f=f||s}return f?(f!==u[0]&&u.unshift(f),r[f]):t}function vo(n,t,i,r){var h,u,f,s,e,o={},c=n.dataTypes.slice();if(c[1])for(f in n.converters)o[f.toLowerCase()]=n.converters[f];for(u=c.shift();u;)if(n.responseFields[u]&&(i[n.responseFields[u]]=t),!e&&r&&n.dataFilter&&(t=n.dataFilter(t,n.dataType)),e=u,u=c.shift())if("*"===u)u=e;else if("*"!==e&&e!==u){if(f=o[e+" "+u]||o["* "+u],!f)for(h in o)if(s=h.split(" "),s[1]===u&&(f=o[e+" "+s[0]]||o["* "+s[0]])){f===!0?f=o[h]:o[h]!==!0&&(u=s[0],c.unshift(s[1]));break}if(f!==!0)if(f&&n.throws)t=f(t);else try{t=f(t)}catch(l){return{state:"parsererror",error:f?l:"No conversion from "+e+" to "+u}}}return{state:"success",data:t}}function rf(){try{return new n.XMLHttpRequest}catch(t){}}function yo(){try{return new n.ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}function ff(){return setTimeout(function(){it=t}),it=i.now()}function ef(n,t,i){for(var u,f=(ft[t]||[]).concat(ft["*"]),r=0,e=f.length;e>r;r++)if(u=f[r].call(i,t,n))return u}function of(n,t,r){var h,e,o=0,l=pt.length,f=i.Deferred().always(function(){delete c.elem}),c=function(){if(e)return!1;for(var s=it||ff(),t=Math.max(0,u.startTime+u.duration-s),h=t/u.duration||0,i=1-h,r=0,o=u.tweens.length;o>r;r++)u.tweens[r].run(i);return f.notifyWith(n,[u,i,t]),1>i&&o?t:(f.resolveWith(n,[u]),!1)},u=f.promise({elem:n,props:i.extend({},t),opts:i.extend(!0,{specialEasing:{}},r),originalProperties:t,originalOptions:r,startTime:it||ff(),duration:r.duration,tweens:[],createTween:function(t,r){var f=i.Tween(n,u.opts,t,r,u.opts.specialEasing[t]||u.opts.easing);return u.tweens.push(f),f},stop:function(t){var i=0,r=t?u.tweens.length:0;if(e)return this;for(e=!0;r>i;i++)u.tweens[i].run(1);return t?f.resolveWith(n,[u,t]):f.rejectWith(n,[u,t]),this}}),s=u.props;for(bo(s,u.opts.specialEasing);l>o;o++)if(h=pt[o].call(u,n,s,u.opts))return h;return i.map(s,ef,u),i.isFunction(u.opts.start)&&u.opts.start.call(n,u),i.fx.timer(i.extend(c,{elem:n,anim:u,queue:u.opts.queue})),u.progress(u.opts.progress).done(u.opts.done,u.opts.complete).fail(u.opts.fail).always(u.opts.always)}function bo(n,t){var r,f,e,u,o;for(r in n)if(f=i.camelCase(r),e=t[f],u=n[r],i.isArray(u)&&(e=u[1],u=n[r]=u[0]),r!==f&&(n[f]=u,delete n[r]),o=i.cssHooks[f],o&&"expand"in o){u=o.expand(u);delete n[f];for(r in u)r in n||(n[r]=u[r],t[r]=e)}else t[f]=e}function ko(n,t,r){var u,a,v,c,e,y,s=this,l={},o=n.style,h=n.nodeType&&ut(n),f=i._data(n,"fxshow");r.queue||(e=i._queueHooks(n,"fx"),null==e.unqueued&&(e.unqueued=0,y=e.empty.fire,e.empty.fire=function(){e.unqueued||y()}),e.unqueued++,s.always(function(){s.always(function(){e.unqueued--;i.queue(n,"fx").length||e.empty.fire()})}));1===n.nodeType&&("height"in t||"width"in t)&&(r.overflow=[o.overflow,o.overflowX,o.overflowY],"inline"===i.css(n,"display")&&"none"===i.css(n,"float")&&(i.support.inlineBlockNeedsLayout&&"inline"!==au(n.nodeName)?o.zoom=1:o.display="inline-block"));r.overflow&&(o.overflow="hidden",i.support.shrinkWrapBlocks||s.always(function(){o.overflow=r.overflow[0];o.overflowX=r.overflow[1];o.overflowY=r.overflow[2]}));for(u in t)if(a=t[u],po.exec(a)){if(delete t[u],v=v||"toggle"===a,a===(h?"hide":"show"))continue;l[u]=f&&f[u]||i.style(n,u)}if(!i.isEmptyObject(l)){f?"hidden"in f&&(h=f.hidden):f=i._data(n,"fxshow",{});v&&(f.hidden=!h);h?i(n).show():s.done(function(){i(n).hide()});s.done(function(){var t;i._removeData(n,"fxshow");for(t in l)i.style(n,t,l[t])});for(u in l)c=ef(h?f[u]:0,u,s),u in f||(f[u]=c.start,h&&(c.end=c.start,c.start="width"===u||"height"===u?1:0))}}function f(n,t,i,r,u){return new f.prototype.init(n,t,i,r,u)}function wt(n,t){var r,i={height:n},u=0;for(t=t?1:0;4>u;u+=2-t)r=p[u],i["margin"+r]=i["padding"+r]=n;return t&&(i.opacity=i.width=n),i}function sf(n){return i.isWindow(n)?n:9===n.nodeType?n.defaultView||n.parentWindow:!1}var et,bi,o=typeof t,hf=n.location,r=n.document,ki=r.documentElement,cf=n.jQuery,lf=n.$,ot={},b=[],bt="1.10.2",di=b.concat,kt=b.push,l=b.slice,gi=b.indexOf,af=ot.toString,k=ot.hasOwnProperty,dt=bt.trim,i=function(n,t){return new i.fn.init(n,t,bi)},st=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,s=/\S+/g,vf=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,yf=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,nr=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,pf=/^[\],:{}\s]*$/,wf=/(?:^|:|,)(?:\s*\[)+/g,bf=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,kf=/"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,df=/^-ms-/,gf=/-([\da-z])/gi,ne=function(n,t){return t.toUpperCase()},h=function(n){(r.addEventListener||"load"===n.type||"complete"===r.readyState)&&(tr(),i.ready())},tr=function(){r.addEventListener?(r.removeEventListener("DOMContentLoaded",h,!1),n.removeEventListener("load",h,!1)):(r.detachEvent("onreadystatechange",h),n.detachEvent("onload",h))},ni,ir,rr,wi,at,nt,tt,tf,vt;i.fn=i.prototype={jquery:bt,constructor:i,init:function(n,u,f){var e,o;if(!n)return this;if("string"==typeof n){if(e="<"===n.charAt(0)&&">"===n.charAt(n.length-1)&&n.length>=3?[null,n,null]:yf.exec(n),!e||!e[1]&&u)return!u||u.jquery?(u||f).find(n):this.constructor(u).find(n);if(e[1]){if(u=u instanceof i?u[0]:u,i.merge(this,i.parseHTML(e[1],u&&u.nodeType?u.ownerDocument||u:r,!0)),nr.test(e[1])&&i.isPlainObject(u))for(e in u)i.isFunction(this[e])?this[e](u[e]):this.attr(e,u[e]);return this}if(o=r.getElementById(e[2]),o&&o.parentNode){if(o.id!==e[2])return f.find(n);this.length=1;this[0]=o}return this.context=r,this.selector=n,this}return n.nodeType?(this.context=this[0]=n,this.length=1,this):i.isFunction(n)?f.ready(n):(n.selector!==t&&(this.selector=n.selector,this.context=n.context),i.makeArray(n,this))},selector:"",length:0,toArray:function(){return l.call(this)},get:function(n){return null==n?this.toArray():0>n?this[this.length+n]:this[n]},pushStack:function(n){var t=i.merge(this.constructor(),n);return t.prevObject=this,t.context=this.context,t},each:function(n,t){return i.each(this,n,t)},ready:function(n){return i.ready.promise().done(n),this},slice:function(){return this.pushStack(l.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(n){var i=this.length,t=+n+(0>n?i:0);return this.pushStack(t>=0&&i>t?[this[t]]:[])},map:function(n){return this.pushStack(i.map(this,function(t,i){return n.call(t,i,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:kt,sort:[].sort,splice:[].splice};i.fn.init.prototype=i.fn;i.extend=i.fn.extend=function(){var u,o,r,e,s,h,n=arguments[0]||{},f=1,l=arguments.length,c=!1;for("boolean"==typeof n&&(c=n,n=arguments[1]||{},f=2),"object"==typeof n||i.isFunction(n)||(n={}),l===f&&(n=this,--f);l>f;f++)if(null!=(s=arguments[f]))for(e in s)u=n[e],r=s[e],n!==r&&(c&&r&&(i.isPlainObject(r)||(o=i.isArray(r)))?(o?(o=!1,h=u&&i.isArray(u)?u:[]):h=u&&i.isPlainObject(u)?u:{},n[e]=i.extend(c,h,r)):r!==t&&(n[e]=r));return n};i.extend({expando:"jQuery"+(bt+Math.random()).replace(/\D/g,""),noConflict:function(t){return n.$===i&&(n.$=lf),t&&n.jQuery===i&&(n.jQuery=cf),i},isReady:!1,readyWait:1,holdReady:function(n){n?i.readyWait++:i.ready(!0)},ready:function(n){if(n===!0?!--i.readyWait:!i.isReady){if(!r.body)return setTimeout(i.ready);i.isReady=!0;n!==!0&&--i.readyWait>0||(et.resolveWith(r,[i]),i.fn.trigger&&i(r).trigger("ready").off("ready"))}},isFunction:function(n){return"function"===i.type(n)},isArray:Array.isArray||function(n){return"array"===i.type(n)},isWindow:function(n){return null!=n&&n==n.window},isNumeric:function(n){return!isNaN(parseFloat(n))&&isFinite(n)},type:function(n){return null==n?n+"":"object"==typeof n||"function"==typeof n?ot[af.call(n)]||"object":typeof n},isPlainObject:function(n){var r;if(!n||"object"!==i.type(n)||n.nodeType||i.isWindow(n))return!1;try{if(n.constructor&&!k.call(n,"constructor")&&!k.call(n.constructor.prototype,"isPrototypeOf"))return!1}catch(u){return!1}if(i.support.ownLast)for(r in n)return k.call(n,r);for(r in n);return r===t||k.call(n,r)},isEmptyObject:function(n){var t;for(t in n)return!1;return!0},error:function(n){throw Error(n);},parseHTML:function(n,t,u){if(!n||"string"!=typeof n)return null;"boolean"==typeof t&&(u=t,t=!1);t=t||r;var f=nr.exec(n),e=!u&&[];return f?[t.createElement(f[1])]:(f=i.buildFragment([n],t,e),e&&i(e).remove(),i.merge([],f.childNodes))},parseJSON:function(r){return n.JSON&&n.JSON.parse?n.JSON.parse(r):null===r?r:"string"==typeof r&&(r=i.trim(r),r&&pf.test(r.replace(bf,"@").replace(kf,"]").replace(wf,"")))?Function("return "+r)():(i.error("Invalid JSON: "+r),t)},parseXML:function(r){var u,f;if(!r||"string"!=typeof r)return null;try{n.DOMParser?(f=new DOMParser,u=f.parseFromString(r,"text/xml")):(u=new ActiveXObject("Microsoft.XMLDOM"),u.async="false",u.loadXML(r))}catch(e){u=t}return u&&u.documentElement&&!u.getElementsByTagName("parsererror").length||i.error("Invalid XML: "+r),u},noop:function(){},globalEval:function(t){t&&i.trim(t)&&(n.execScript||function(t){n.eval.call(n,t)})(t)},camelCase:function(n){return n.replace(df,"ms-").replace(gf,ne)},nodeName:function(n,t){return n.nodeName&&n.nodeName.toLowerCase()===t.toLowerCase()},each:function(n,t,i){var u,r=0,f=n.length,e=gt(n);if(i){if(e){for(;f>r;r++)if(u=t.apply(n[r],i),u===!1)break}else for(r in n)if(u=t.apply(n[r],i),u===!1)break}else if(e){for(;f>r;r++)if(u=t.call(n[r],r,n[r]),u===!1)break}else for(r in n)if(u=t.call(n[r],r,n[r]),u===!1)break;return n},trim:dt&&!dt.call("﻿ ")?function(n){return null==n?"":dt.call(n)}:function(n){return null==n?"":(n+"").replace(vf,"")},makeArray:function(n,t){var r=t||[];return null!=n&&(gt(Object(n))?i.merge(r,"string"==typeof n?[n]:n):kt.call(r,n)),r},inArray:function(n,t,i){var r;if(t){if(gi)return gi.call(t,n,i);for(r=t.length,i=i?0>i?Math.max(0,r+i):i:0;r>i;i++)if(i in t&&t[i]===n)return i}return-1},merge:function(n,i){var f=i.length,u=n.length,r=0;if("number"==typeof f)for(;f>r;r++)n[u++]=i[r];else while(i[r]!==t)n[u++]=i[r++];return n.length=u,n},grep:function(n,t,i){var u,f=[],r=0,e=n.length;for(i=!!i;e>r;r++)u=!!t(n[r],r),i!==u&&f.push(n[r]);return f},map:function(n,t,i){var u,r=0,e=n.length,o=gt(n),f=[];if(o)for(;e>r;r++)u=t(n[r],r,i),null!=u&&(f[f.length]=u);else for(r in n)u=t(n[r],r,i),null!=u&&(f[f.length]=u);return di.apply([],f)},guid:1,proxy:function(n,r){var f,u,e;return"string"==typeof r&&(e=n[r],r=n,n=e),i.isFunction(n)?(f=l.call(arguments,2),u=function(){return n.apply(r||this,f.concat(l.call(arguments)))},u.guid=n.guid=n.guid||i.guid++,u):t},access:function(n,r,u,f,e,o,s){var h=0,l=n.length,c=null==u;if("object"===i.type(u)){e=!0;for(h in u)i.access(n,r,h,u[h],!0,o,s)}else if(f!==t&&(e=!0,i.isFunction(f)||(s=!0),c&&(s?(r.call(n,f),r=null):(c=r,r=function(n,t,r){return c.call(i(n),r)})),r))for(;l>h;h++)r(n[h],u,s?f:f.call(n[h],h,r(n[h],u)));return e?n:c?r.call(n):l?r(n[0],u):o},now:function(){return(new Date).getTime()},swap:function(n,t,i,r){var f,u,e={};for(u in t)e[u]=n.style[u],n.style[u]=t[u];f=i.apply(n,r||[]);for(u in t)n.style[u]=e[u];return f}});i.ready.promise=function(t){if(!et)if(et=i.Deferred(),"complete"===r.readyState)setTimeout(i.ready);else if(r.addEventListener)r.addEventListener("DOMContentLoaded",h,!1),n.addEventListener("load",h,!1);else{r.attachEvent("onreadystatechange",h);n.attachEvent("onload",h);var u=!1;try{u=null==n.frameElement&&r.documentElement}catch(e){}u&&u.doScroll&&function f(){if(!i.isReady){try{u.doScroll("left")}catch(n){return setTimeout(f,50)}tr();i.ready()}}()}return et.promise(t)};i.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(n,t){ot["[object "+t+"]"]=t.toLowerCase()});bi=i(r),function(n,t){function u(n,t,i,r){var p,u,f,l,w,a,k,c,g,d;if((t?t.ownerDocument||t:y)!==s&&nt(t),t=t||s,i=i||[],!n||"string"!=typeof n)return i;if(1!==(l=t.nodeType)&&9!==l)return[];if(v&&!r){if(p=or.exec(n))if(f=p[1]){if(9===l){if(u=t.getElementById(f),!u||!u.parentNode)return i;if(u.id===f)return i.push(u),i}else if(t.ownerDocument&&(u=t.ownerDocument.getElementById(f))&&ot(t,u)&&u.id===f)return i.push(u),i}else{if(p[2])return b.apply(i,t.getElementsByTagName(n)),i;if((f=p[3])&&e.getElementsByClassName&&t.getElementsByClassName)return b.apply(i,t.getElementsByClassName(f)),i}if(e.qsa&&(!h||!h.test(n))){if(c=k=o,g=t,d=9===l&&n,1===l&&"object"!==t.nodeName.toLowerCase()){for(a=pt(n),(k=t.getAttribute("id"))?c=k.replace(cr,"\\$&"):t.setAttribute("id",c),c="[id='"+c+"'] ",w=a.length;w--;)a[w]=c+wt(a[w]);g=ti.test(n)&&t.parentNode||t;d=a.join(",")}if(d)try{return b.apply(i,g.querySelectorAll(d)),i}catch(tt){}finally{k||t.removeAttribute("id")}}}return pr(n.replace(vt,"$1"),t,i,r)}function ri(){function n(i,u){return t.push(i+=" ")>r.cacheLength&&delete n[t.shift()],n[i]=u}var t=[];return n}function c(n){return n[o]=!0,n}function l(n){var t=s.createElement("div");try{return!!n(t)}catch(i){return!1}finally{t.parentNode&&t.parentNode.removeChild(t);t=null}}function ui(n,t){for(var u=n.split("|"),i=n.length;i--;)r.attrHandle[u[i]]=t}function bi(n,t){var i=t&&n,r=i&&1===n.nodeType&&1===t.nodeType&&(~t.sourceIndex||vi)-(~n.sourceIndex||vi);if(r)return r;if(i)while(i=i.nextSibling)if(i===t)return-1;return n?1:-1}function lr(n){return function(t){var i=t.nodeName.toLowerCase();return"input"===i&&t.type===n}}function ar(n){return function(t){var i=t.nodeName.toLowerCase();return("input"===i||"button"===i)&&t.type===n}}function rt(n){return c(function(t){return t=+t,c(function(i,r){for(var u,f=n([],i.length,t),e=f.length;e--;)i[u=f[e]]&&(i[u]=!(r[u]=i[u]))})})}function ki(){}function pt(n,t){var e,f,s,o,i,h,c,l=li[n+" "];if(l)return t?0:l.slice(0);for(i=n,h=[],c=r.preFilter;i;){(!e||(f=ir.exec(i)))&&(f&&(i=i.slice(f[0].length)||i),h.push(s=[]));e=!1;(f=rr.exec(i))&&(e=f.shift(),s.push({value:e,type:f[0].replace(vt," ")}),i=i.slice(e.length));for(o in r.filter)(f=yt[o].exec(i))&&(!c[o]||(f=c[o](f)))&&(e=f.shift(),s.push({value:e,type:o,matches:f}),i=i.slice(e.length));if(!e)break}return t?i.length:i?u.error(n):li(n,h).slice(0)}function wt(n){for(var t=0,r=n.length,i="";r>t;t++)i+=n[t].value;return i}function fi(n,t,i){var r=t.dir,u=i&&"parentNode"===r,f=di++;return t.first?function(t,i,f){while(t=t[r])if(1===t.nodeType||u)return n(t,i,f)}:function(t,i,e){var h,s,c,l=p+" "+f;if(e){while(t=t[r])if((1===t.nodeType||u)&&n(t,i,e))return!0}else while(t=t[r])if(1===t.nodeType||u)if(c=t[o]||(t[o]={}),(s=c[r])&&s[0]===l){if((h=s[1])===!0||h===ht)return h===!0}else if(s=c[r]=[l],s[1]=n(t,i,e)||ht,s[1]===!0)return!0}}function ei(n){return n.length>1?function(t,i,r){for(var u=n.length;u--;)if(!n[u](t,i,r))return!1;return!0}:n[0]}function bt(n,t,i,r,u){for(var e,o=[],f=0,s=n.length,h=null!=t;s>f;f++)(e=n[f])&&(!i||i(e,r,u))&&(o.push(e),h&&t.push(f));return o}function oi(n,t,i,r,u,f){return r&&!r[o]&&(r=oi(r)),u&&!u[o]&&(u=oi(u,f)),c(function(f,e,o,s){var l,c,a,p=[],y=[],w=e.length,k=f||yr(t||"*",o.nodeType?[o]:o,[]),v=!n||!f&&t?k:bt(k,p,n,o,s),h=i?u||(f?n:w||r)?[]:e:v;if(i&&i(v,h,o,s),r)for(l=bt(h,y),r(l,[],o,s),c=l.length;c--;)(a=l[c])&&(h[y[c]]=!(v[y[c]]=a));if(f){if(u||n){if(u){for(l=[],c=h.length;c--;)(a=h[c])&&l.push(v[c]=a);u(null,h=[],l,s)}for(c=h.length;c--;)(a=h[c])&&(l=u?it.call(f,a):p[c])>-1&&(f[l]=!(e[l]=a))}}else h=bt(h===e?h.splice(w,h.length):h),u?u(null,e,h,s):b.apply(e,h)})}function si(n){for(var s,u,i,e=n.length,h=r.relative[n[0].type],c=h||r.relative[" "],t=h?1:0,l=fi(function(n){return n===s},c,!0),a=fi(function(n){return it.call(s,n)>-1},c,!0),f=[function(n,t,i){return!h&&(i||t!==lt)||((s=t).nodeType?l(n,t,i):a(n,t,i))}];e>t;t++)if(u=r.relative[n[t].type])f=[fi(ei(f),u)];else{if(u=r.filter[n[t].type].apply(null,n[t].matches),u[o]){for(i=++t;e>i;i++)if(r.relative[n[i].type])break;return oi(t>1&&ei(f),t>1&&wt(n.slice(0,t-1).concat({value:" "===n[t-2].type?"*":""})).replace(vt,"$1"),u,i>t&&si(n.slice(t,i)),e>i&&si(n=n.slice(i)),e>i&&wt(n))}f.push(u)}return ei(f)}function vr(n,t){var f=0,i=t.length>0,e=n.length>0,o=function(o,h,c,l,a){var y,g,k,w=[],d=0,v="0",nt=o&&[],tt=null!=a,it=lt,ut=o||e&&r.find.TAG("*",a&&h.parentNode||h),rt=p+=null==it?1:Math.random()||.1;for(tt&&(lt=h!==s&&h,ht=f);null!=(y=ut[v]);v++){if(e&&y){for(g=0;k=n[g++];)if(k(y,h,c)){l.push(y);break}tt&&(p=rt,ht=++f)}i&&((y=!k&&y)&&d--,o&&nt.push(y))}if(d+=v,i&&v!==d){for(g=0;k=t[g++];)k(nt,w,h,c);if(o){if(d>0)while(v--)nt[v]||w[v]||(w[v]=nr.call(l));w=bt(w)}b.apply(l,w);tt&&!o&&w.length>0&&d+t.length>1&&u.uniqueSort(l)}return tt&&(p=rt,lt=it),nt};return i?c(o):o}function yr(n,t,i){for(var r=0,f=t.length;f>r;r++)u(n,t[r],i);return i}function pr(n,t,i,u){var s,f,o,c,l,h=pt(n);if(!u&&1===h.length){if(f=h[0]=h[0].slice(0),f.length>2&&"ID"===(o=f[0]).type&&e.getById&&9===t.nodeType&&v&&r.relative[f[1].type]){if(t=(r.find.ID(o.matches[0].replace(k,d),t)||[])[0],!t)return i;n=n.slice(f.shift().value.length)}for(s=yt.needsContext.test(n)?0:f.length;s--;){if(o=f[s],r.relative[c=o.type])break;if((l=r.find[c])&&(u=l(o.matches[0].replace(k,d),ti.test(f[0].type)&&t.parentNode||t))){if(f.splice(s,1),n=u.length&&wt(f),!n)return b.apply(i,u),i;break}}}return kt(n,h)(u,t,!v,i,ti.test(n)),i}var ut,e,ht,r,ct,hi,kt,lt,g,nt,s,a,v,h,tt,at,ot,o="sizzle"+-new Date,y=n.document,p=0,di=0,ci=ri(),li=ri(),ai=ri(),ft=!1,dt=function(n,t){return n===t?(ft=!0,0):0},st=typeof t,vi=-2147483648,gi={}.hasOwnProperty,w=[],nr=w.pop,tr=w.push,b=w.push,yi=w.slice,it=w.indexOf||function(n){for(var t=0,i=this.length;i>t;t++)if(this[t]===n)return t;return-1},gt="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",f="[\\x20\\t\\r\\n\\f]",et="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",pi=et.replace("w","w#"),wi="\\["+f+"*("+et+")"+f+"*(?:([*^$|!~]?=)"+f+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+pi+")|)|)"+f+"*\\]",ni=":("+et+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+wi.replace(3,8)+")*)|.*)\\)|)",vt=RegExp("^"+f+"+|((?:^|[^\\\\])(?:\\\\.)*)"+f+"+$","g"),ir=RegExp("^"+f+"*,"+f+"*"),rr=RegExp("^"+f+"*([>+~]|"+f+")"+f+"*"),ti=RegExp(f+"*[+~]"),ur=RegExp("="+f+"*([^\\]'\"]*)"+f+"*\\]","g"),fr=RegExp(ni),er=RegExp("^"+pi+"$"),yt={ID:RegExp("^#("+et+")"),CLASS:RegExp("^\\.("+et+")"),TAG:RegExp("^("+et.replace("w","w*")+")"),ATTR:RegExp("^"+wi),PSEUDO:RegExp("^"+ni),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+f+"*(even|odd|(([+-]|)(\\d*)n|)"+f+"*(?:([+-]|)"+f+"*(\\d+)|))"+f+"*\\)|)","i"),bool:RegExp("^(?:"+gt+")$","i"),needsContext:RegExp("^"+f+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+f+"*((?:-\\d)?\\d*)"+f+"*\\)|)(?=[^-]|$)","i")},ii=/^[^{]+\{\s*\[native \w/,or=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,sr=/^(?:input|select|textarea|button)$/i,hr=/^h\d$/i,cr=/'|\\/g,k=RegExp("\\\\([\\da-f]{1,6}"+f+"?|("+f+")|.)","ig"),d=function(n,t,i){var r="0x"+t-65536;return r!==r||i?t:0>r?String.fromCharCode(r+65536):String.fromCharCode(55296|r>>10,56320|1023&r)};try{b.apply(w=yi.call(y.childNodes),y.childNodes);w[y.childNodes.length].nodeType}catch(wr){b={apply:w.length?function(n,t){tr.apply(n,yi.call(t))}:function(n,t){for(var i=n.length,r=0;n[i++]=t[r++];);n.length=i-1}}}hi=u.isXML=function(n){var t=n&&(n.ownerDocument||n).documentElement;return t?"HTML"!==t.nodeName:!1};e=u.support={};nt=u.setDocument=function(n){var i=n?n.ownerDocument||n:y,u=i.defaultView;return i!==s&&9===i.nodeType&&i.documentElement?(s=i,a=i.documentElement,v=!hi(i),u&&u.attachEvent&&u!==u.top&&u.attachEvent("onbeforeunload",function(){nt()}),e.attributes=l(function(n){return n.className="i",!n.getAttribute("className")}),e.getElementsByTagName=l(function(n){return n.appendChild(i.createComment("")),!n.getElementsByTagName("*").length}),e.getElementsByClassName=l(function(n){return n.innerHTML="<div class='a'><\/div><div class='a i'><\/div>",n.firstChild.className="i",2===n.getElementsByClassName("i").length}),e.getById=l(function(n){return a.appendChild(n).id=o,!i.getElementsByName||!i.getElementsByName(o).length}),e.getById?(r.find.ID=function(n,t){if(typeof t.getElementById!==st&&v){var i=t.getElementById(n);return i&&i.parentNode?[i]:[]}},r.filter.ID=function(n){var t=n.replace(k,d);return function(n){return n.getAttribute("id")===t}}):(delete r.find.ID,r.filter.ID=function(n){var t=n.replace(k,d);return function(n){var i=typeof n.getAttributeNode!==st&&n.getAttributeNode("id");return i&&i.value===t}}),r.find.TAG=e.getElementsByTagName?function(n,i){return typeof i.getElementsByTagName!==st?i.getElementsByTagName(n):t}:function(n,t){var i,r=[],f=0,u=t.getElementsByTagName(n);if("*"===n){while(i=u[f++])1===i.nodeType&&r.push(i);return r}return u},r.find.CLASS=e.getElementsByClassName&&function(n,i){return typeof i.getElementsByClassName!==st&&v?i.getElementsByClassName(n):t},tt=[],h=[],(e.qsa=ii.test(i.querySelectorAll))&&(l(function(){}),l(function(){}