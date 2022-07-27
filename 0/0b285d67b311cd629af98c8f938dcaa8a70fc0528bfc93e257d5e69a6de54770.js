if(!function(n,t){"object"==typeof module&&"object"==typeof module.exports?module.exports=n.document?t(n,!0):function(n){if(!n.document)throw new Error("jQuery requires a window with a document");return t(n)}:t(n)}("undefined"!=typeof window?window:this,function(n,t){function ri(n){var t="length"in n&&n.length,r=i.type(n);return"function"===r||i.isWindow(n)?!1:1===n.nodeType&&t?!0:"array"===r||0===t||"number"==typeof t&&t>0&&t-1 in n}function ui(n,t,r){if(i.isFunction(t))return i.grep(n,function(n,i){return!!t.call(n,i,n)!==r});if(t.nodeType)return i.grep(n,function(n){return n===t!==r});if("string"==typeof t){if(re.test(t))return i.filter(t,n,r);t=i.filter(t,n)}return i.grep(n,function(n){return i.inArray(n,t)>=0!==r})}function hr(n,t){do n=n[t];while(n&&1!==n.nodeType);return n}function ee(n){var t=fi[n]={};return i.each(n.match(h)||[],function(n,i){t[i]=!0}),t}function cr(){u.addEventListener?(u.removeEventListener("DOMContentLoaded",a,!1),n.removeEventListener("load",a,!1)):(u.detachEvent("onreadystatechange",a),n.detachEvent("onload",a))}function a(){(u.addEventListener||"load"===event.type||"complete"===u.readyState)&&(cr(),i.ready())}function yr(n,t,r){if(void 0===r&&1===n.nodeType){var u="data-"+t.replace(vr,"-$1").toLowerCase();if(r=n.getAttribute(u),"string"==typeof r){try{r="true"===r?!0:"false"===r?!1:"null"===r?null:+r+""===r?+r:ar.test(r)?i.parseJSON(r):r}catch(f){}i.data(n,t,r)}else r=void 0}return r}function ei(n){var t;for(t in n)if(("data"!==t||!i.isEmptyObject(n[t]))&&"toJSON"!==t)return!1;return!0}function pr(n,t,r,u){if(i.acceptData(n)){var s,e,h=i.expando,l=n.nodeType,o=l?i.cache:n,f=l?n[h]:n[h]&&h;if(f&&o[f]&&(u||o[f].data)||void 0!==r||"string"!=typeof t)return f||(f=l?n[h]=c.pop()||i.guid++:h),o[f]||(o[f]=l?{}:{toJSON:i.noop}),("object"==typeof t||"function"==typeof t)&&(u?o[f]=i.extend(o[f],t):o[f].data=i.extend(o[f].data,t)),e=o[f],u||(e.data||(e.data={}),e=e.data),void 0!==r&&(e[i.camelCase(t)]=r),"string"==typeof t?(s=e[t],null==s&&(s=e[i.camelCase(t)])):s=e,s}}function wr(n,t,u){if(i.acceptData(n)){var o,s,h=n.nodeType,f=h?i.cache:n,e=h?n[i.expando]:i.expando;if(f[e]){if(t&&(o=u?f[e]:f[e].data)){for(i.isArray(t)?t=t.concat(i.map(t,i.camelCase)):(t in o)?t=[t]:(t=i.camelCase(t),t=(t in o)?[t]:t.split(" ")),s=t.length;s--;)delete o[t[s]];if(u?!ei(o):!i.isEmptyObject(o))return}(u||(delete f[e].data,ei(f[e])))&&(h?i.cleanData([n],!0):r.deleteExpando||f!=f.window?delete f[e]:f[e]=null)}}}function vt(){return!0}function it(){return!1}function dr(){try{return u.activeElement}catch(n){}}function gr(n){var i=nu.split("|"),t=n.createDocumentFragment();if(t.createElement)while(i.length)t.createElement(i.pop());return t}function f(n,t){var e,u,s=0,r=typeof n.getElementsByTagName!==o?n.getElementsByTagName(t||"*"):typeof n.querySelectorAll!==o?n.querySelectorAll(t||"*"):void 0;if(!r)for(r=[],e=n.childNodes||n;null!=(u=e[s]);s++)!t||i.nodeName(u,t)?r.push(u):i.merge(r,f(u,t));return void 0===t||t&&i.nodeName(n,t)?i.merge([n],r):r}function we(n){oi.test(n.type)&&(n.defaultChecked=n.checked)}function eu(n,t){return i.nodeName(n,"table")&&i.nodeName(11!==t.nodeType?t:t.firstChild,"tr")?n.getElementsByTagName("tbody")[0]||n.appendChild(n.ownerDocument.createElement("tbody")):n}function ou(n){return n.type=(null!==i.find.attr(n,"type"))+"/"+n.type,n}function su(n){var t=ve.exec(n.type);return t?n.type=t[1]:n.removeAttribute("type"),n}function li(n,t){for(var u,r=0;null!=(u=n[r]);r++)i._data(u,"globalEval",!t||i._data(t[r],"globalEval"))}function hu(n,t){if(1===t.nodeType&&i.hasData(n)){var u,f,o,s=i._data(n),r=i._data(t,s),e=s.events;if(e){delete r.handle;r.events={};for(u in e)for(f=0,o=e[u].length;o>f;f++)i.event.add(t,u,e[u][f])}r.data&&(r.data=i.extend({},r.data))}}function be(n,t){var u,e,f;if(1===t.nodeType){if(u=t.nodeName.toLowerCase(),!r.noCloneEvent&&t[i.expando]){f=i._data(t);for(e in f.events)i.removeEvent(t,e,f.handle);t.removeAttribute(i.expando)}"script"===u&&t.text!==n.text?(ou(t).text=n.text,su(t)):"object"===u?(t.parentNode&&(t.outerHTML=n.outerHTML),r.html5Clone&&n.innerHTML&&!i.trim(t.innerHTML)&&(t.innerHTML=n.innerHTML)):"input"===u&&oi.test(n.type)?(t.defaultChecked=t.checked=n.checked,t.value!==n.value&&(t.value=n.value)):"option"===u?t.defaultSelected=t.selected=n.defaultSelected:("input"===u||"textarea"===u)&&(t.defaultValue=n.defaultValue)}}function cu(t,r){var f,u=i(r.createElement(t)).appendTo(r.body),e=n.getDefaultComputedStyle&&(f=n.getDefaultComputedStyle(u[0]))?f.display:i.css(u[0],"display");return u.detach(),e}function yt(n){var r=u,t=ai[n];return t||(t=cu(n,r),"none"!==t&&t||(ot=(ot||i("<iframe frameborder='0' width='0' height='0'/>")).appendTo(r.documentElement),r=(ot[0].contentWindow||ot[0].contentDocument).document,r.write(),r.close(),t=cu(n,r),ot.detach()),ai[n]=t),t}function au(n,t){return{get:function(){var i=n();if(null!=i)return i?void delete this.get:(this.get=t).apply(this,arguments)}}}function pu(n,t){if(t in n)return t;for(var r=t.charAt(0).toUpperCase()+t.slice(1),u=t,i=yu.length;i--;)if(t=yu[i]+r,t in n)return t;return u}function wu(n,t){for(var f,r,o,e=[],u=0,s=n.length;s>u;u++)r=n[u],r.style&&(e[u]=i._data(r,"olddisplay"),f=r.style.display,t?(e[u]||"none"!==f||(r.style.display=""),""===r.style.display&&et(r)&&(e[u]=i._data(r,"olddisplay",yt(r.nodeName)))):(o=et(r),(f&&"none"!==f||!o)&&i._data(r,"olddisplay",o?f:i.css(r,"display"))));for(u=0;s>u;u++)r=n[u],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?e[u]||"":"none"));return n}function bu(n,t,i){var r=no.exec(t);return r?Math.max(0,r[1]-(i||0))+(r[2]||"px"):t}function ku(n,t,r,u,f){for(var e=r===(u?"border":"content")?4:"width"===t?1:0,o=0;4>e;e+=2)"margin"===r&&(o+=i.css(n,r+w[e],!0,f)),u?("content"===r&&(o-=i.css(n,"padding"+w[e],!0,f)),"margin"!==r&&(o-=i.css(n,"border"+w[e]+"Width",!0,f))):(o+=i.css(n,"padding"+w[e],!0,f),"padding"!==r&&(o+=i.css(n,"border"+w[e]+"Width",!0,f)));return o}function du(n,t,u){var o=!0,f="width"===t?n.offsetWidth:n.offsetHeight,e=k(n),s=r.boxSizing&&"border-box"===i.css(n,"boxSizing",!1,e);if(0>=f||null==f){if(f=d(n,t,e),(0>f||null==f)&&(f=n.style[t]),pt.test(f))return f;o=s&&(r.boxSizingReliable()||f===n.style[t]);f=parseFloat(f)||0}return f+ku(n,t,u||(s?"border":"content"),o,e)+"px"}function e(n,t,i,r,u){return new e.prototype.init(n,t,i,r,u)}function nf(){return setTimeout(function(){rt=void 0}),rt=i.now()}function kt(n,t){var r,i={height:n},u=0;for(t=t?1:0;4>u;u+=2-t)r=w[u],i["margin"+r]=i["padding"+r]=n;return t&&(i.opacity=i.width=n),i}function tf(n,t,i){for(var u,f=(st[t]||[]).concat(st["*"]),r=0,e=f.length;e>r;r++)if(u=f[r].call(i,t,n))return u}function fo(n,t,u){var f,a,p,v,s,w,h,b,l=this,y={},o=n.style,c=n.nodeType&&et(n),e=i._data(n,"fxshow");u.queue||(s=i._queueHooks(n,"fx"),null==s.unqueued&&(s.unqueued=0,w=s.empty.fire,s.empty.fire=function(){s.unqueued||w()}),s.unqueued++,l.always(function(){l.always(function(){s.unqueued--;i.queue(n,"fx").length||s.empty.fire()})}));1===n.nodeType&&("height"in t||"width"in t)&&(u.overflow=[o.overflow,o.overflowX,o.overflowY],h=i.css(n,"display"),b="none"===h?i._data(n,"olddisplay")||yt(n.nodeName):h,"inline"===b&&"none"===i.css(n,"float")&&(r.inlineBlockNeedsLayout&&"inline"!==yt(n.nodeName)?o.zoom=1:o.display="inline-block"));u.overflow&&(o.overflow="hidden",r.shrinkWrapBlocks()||l.always(function(){o.overflow=u.overflow[0];o.overflowX=u.overflow[1];o.overflowY=u.overflow[2]}));for(f in t)if(a=t[f],ro.exec(a)){if(delete t[f],p=p||"toggle"===a,a===(c?"hide":"show")){if("show"!==a||!e||void 0===e[f])continue;c=!0}y[f]=e&&e[f]||i.style(n,f)}else h=void 0;if(i.isEmptyObject(y))"inline"===("none"===h?yt(n.nodeName):h)&&(o.display=h);else{e?"hidden"in e&&(c=e.hidden):e=i._data(n,"fxshow",{});p&&(e.hidden=!c);c?i(n).show():l.done(function(){i(n).hide()});l.done(function(){var t;i._removeData(n,"fxshow");for(t in y)i.style(n,t,y[t])});for(f in y)v=tf(c?e[f]:0,f,l),f in e||(e[f]=v.start,c&&(v.end=v.start,v.start="width"===f||"height"===f?1:0))}}function eo(n,t){var r,f,e,u,o;for(r in n)if(f=i.camelCase(r),e=t[f],u=n[r],i.isArray(u)&&(e=u[1],u=n[r]=u[0]),r!==f&&(n[f]=u,delete n[r]),o=i.cssHooks[f],o&&"expand"in o){u=o.expand(u);delete n[f];for(r in u)r in n||(n[r]=u[r],t[r]=e)}else t[f]=e}function rf(n,t,r){var h,e,o=0,l=bt.length,f=i.Deferred().always(function(){delete c.elem}),c=function(){if(e)return!1;for(var s=rt||nf(),t=Math.max(0,u.startTime+u.duration-s),h=t/u.duration||0,i=1-h,r=0,o=u.tweens.length;o>r;r++)u.tweens[r].run(i);return f.notifyWith(n,[u,i,t]),1>i&&o?t:(f.resolveWith(n,[u]),!1)},u=f.promise({elem:n,props:i.extend({},t),opts:i.extend(!0,{specialEasing:{}},r),originalProperties:t,originalOptions:r,startTime:rt||nf(),duration:r.duration,tweens:[],createTween:function(t,r){var f=i.Tween(n,u.opts,t,r,u.opts.specialEasing[t]||u.opts.easing);return u.tweens.push(f),f},stop:function(t){var i=0,r=t?u.tweens.length:0;if(e)return this;for(e=!0;r>i;i++)u.tweens[i].run(1);return t?f.resolveWith(n,[u,t]):f.rejectWith(n,[u,t]),this}}),s=u.props;for(eo(s,u.opts.specialEasing);l>o;o++)if(h=bt[o].call(u,n,s,u.opts))return h;return i.map(s,tf,u),i.isFunction(u.opts.start)&&u.opts.start.call(n,u),i.fx.timer(i.extend(c,{elem:n,anim:u,queue:u.opts.queue})),u.progress(u.opts.progress).done(u.opts.done,u.opts.complete).fail(u.opts.fail).always(u.opts.always)}function af(n){return function(t,r){"string"!=typeof t&&(r=t,t="*");var u,f=0,e=t.toLowerCase().match(h)||[];if(i.isFunction(r))while(u=e[f++])"+"===u.charAt(0)?(u=u.slice(1)||"*",(n[u]=n[u]||[]).unshift(r)):(n[u]=n[u]||[]).push(r)}}function vf(n,t,r,u){function e(s){var h;return f[s]=!0,i.each(n[s]||[],function(n,i){var s=i(t,r,u);return"string"!=typeof s||o||f[s]?o?!(h=s):void 0:(t.dataTypes.unshift(s),e(s),!1)}),h}var f={},o=n===bi;return e(t.dataTypes[0])||!f["*"]&&e("*")}function ki(n,t){var u,r,f=i.ajaxSettings.flatOptions||{};for(r in t)void 0!==t[r]&&((f[r]?n:u||(u={}))[r]=t[r]);return u&&i.extend(!0,n,u),n}function ao(n,t,i){for(var o,e,u,f,s=n.contents,r=n.dataTypes;"*"===r[0];)r.shift(),void 0===e&&(e=n.mimeType||t.getResponseHeader("Content-Type"));if(e)for(f in s)if(s[f]&&s[f].test(e)){r.unshift(f);break}if(r[0]in i)u=r[0];else{for(f in i){if(!r[0]||n.converters[f+" "+r[0]]){u=f;break}o||(o=f)}u=u||o}if(u)return(u!==r[0]&&r.unshift(u),i[u])}function vo(n,t,i,r){var h,u,f,s,e,o={},c=n.dataTypes.slice();if(c[1])for(f in n.converters)o[f.toLowerCase()]=n.converters[f];for(u=c.shift();u;)if(n.responseFields[u]&&(i[n.responseFields[u]]=t),!e&&r&&n.dataFilter&&(t=n.dataFilter(t,n.dataType)),e=u,u=c.shift())if("*"===u)u=e;else if("*"!==e&&e!==u){if(f=o[e+" "+u]||o["* "+u],!f)for(h in o)if(s=h.split(" "),s[1]===u&&(f=o[e+" "+s[0]]||o["* "+s[0]])){f===!0?f=o[h]:o[h]!==!0&&(u=s[0],c.unshift(s[1]));break}if(f!==!0)if(f&&n.throws)t=f(t);else try{t=f(t)}catch(l){return{state:"parsererror",error:f?l:"No conversion from "+e+" to "+u}}}return{state:"success",data:t}}function di(n,t,r,u){var f;if(i.isArray(t))i.each(t,function(t,i){r||po.test(n)?u(n,i):di(n+"["+("object"==typeof i?t:"")+"]",i,r,u)});else if(r||"object"!==i.type(t))u(n,t);else for(f in t)di(n+"["+f+"]",t[f],r,u)}function pf(){try{return new n.XMLHttpRequest}catch(t){}}function go(){try{return new n.ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}function wf(n){return i.isWindow(n)?n:9===n.nodeType?n.defaultView||n.parentWindow:!1}var c=[],l=c.slice,ir=c.concat,ii=c.push,rr=c.indexOf,ct={},df=ct.toString,tt=ct.hasOwnProperty,r={},ur="1.11.3",i=function(n,t){return new i.fn.init(n,t)},gf=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,ne=/^-ms-/,te=/-([\da-z])/gi,ie=function(n,t){return t.toUpperCase()},p,or,sr,h,fi,lt,o,lr,ar,vr,ot,ai,uf,ef,of,gt,gi,ti,nr,tr,bf,kf;i.fn=i.prototype={jquery:ur,constructor:i,selector:"",length:0,toArray:function(){return l.call(this)},get:function(n){return null!=n?0>n?this[n+this.length]:this[n]:l.call(this)},pushStack:function(n){var t=i.merge(this.constructor(),n);return t.prevObject=this,t.context=this.context,t},each:function(n,t){return i.each(this,n,t)},map:function(n){return this.pushStack(i.map(this,function(t,i){return n.call(t,i,t)}))},slice:function(){return this.pushStack(l.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(n){var i=this.length,t=+n+(0>n?i:0);return this.pushStack(t>=0&&i>t?[this[t]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:ii,sort:c.sort,splice:c.splice};i.extend=i.fn.extend=function(){var r,e,t,f,o,s,n=arguments[0]||{},u=1,c=arguments.length,h=!1;for("boolean"==typeof n&&(h=n,n=arguments[u]||{},u++),"object"==typeof n||i.isFunction(n)||(n={}),u===c&&(n=this,u--);c>u;u++)if(null!=(o=arguments[u]))for(f in o)r=n[f],t=o[f],n!==t&&(h&&t&&(i.isPlainObject(t)||(e=i.isArray(t)))?(e?(e=!1,s=r&&i.isArray(r)?r:[]):s=r&&i.isPlainObject(r)?r:{},n[f]=i.extend(h,s,t)):void 0!==t&&(n[f]=t));return n};i.extend({expando:"jQuery"+(ur+Math.random()).replace(/\D/g,""),isReady:!0,error:function(n){throw new Error(n);},noop:function(){},isFunction:function(n){return"function"===i.type(n)},isArray:Array.isArray||function(n){return"array"===i.type(n)},isWindow:function(n){return null!=n&&n==n.window},isNumeric:function(n){return!i.isArray(n)&&n-parseFloat(n)+1>=0},isEmptyObject:function(n){var t;for(t in n)return!1;return!0},isPlainObject:function(n){var t;if(!n||"object"!==i.type(n)||n.nodeType||i.isWindow(n))return!1;try{if(n.constructor&&!tt.call(n,"constructor")&&!tt.call(n.constructor.prototype,"isPrototypeOf"))return!1}catch(u){return!1}if(r.ownLast)for(t in n)return tt.call(n,t);for(t in n);return void 0===t||tt.call(n,t)},type:function(n){return null==n?n+"":"object"==typeof n||"function"==typeof n?ct[df.call(n)]||"object":typeof n},globalEval:function(t){t&&i.trim(t)&&(n.execScript||function(t){n.eval.call(n,t)})(t)},camelCase:function(n){return n.replace(ne,"ms-").replace(te,ie)},nodeName:function(n,t){return n.nodeName&&n.nodeName.toLowerCase()===t.toLowerCase()},each:function(n,t,i){var u,r=0,f=n.length,e=ri(n);if(i){if(e){for(;f>r;r++)if(u=t.apply(n[r],i),u===!1)break}else for(r in n)if(u=t.apply(n[r],i),u===!1)break}else if(e){for(;f>r;r++)if(u=t.call(n[r],r,n[r]),u===!1)break}else for(r in n)if(u=t.call(n[r],r,n[r]),u===!1)break;return n},trim:function(n){return null==n?"":(n+"").replace(gf,"")},makeArray:function(n,t){var r=t||[];return null!=n&&(ri(Object(n))?i.merge(r,"string"==typeof n?[n]:n):ii.call(r,n)),r},inArray:function(n,t,i){var r;if(t){if(rr)return rr.call(t,n,i);for(r=t.length,i=i?0>i?Math.max(0,r+i):i:0;r>i;i++)if(i in t&&t[i]===n)return i}return-1},merge:function(n,t){for(var r=+t.length,i=0,u=n.length;r>i;)n[u++]=t[i++];if(r!==r)while(void 0!==t[i])n[u++]=t[i++];return n.length=u,n},grep:function(n,t,i){for(var u,f=[],r=0,e=n.length,o=!i;e>r;r++)u=!t(n[r],r),u!==o&&f.push(n[r]);return f},map:function(n,t,i){var u,r=0,e=n.length,o=ri(n),f=[];if(o)for(;e>r;r++)u=t(n[r],r,i),null!=u&&f.push(u);else for(r in n)u=t(n[r],r,i),null!=u&&f.push(u);return ir.apply([],f)},guid:1,proxy:function(n,t){var u,r,f;return"string"==typeof t&&(f=n[t],t=n,n=f),i.isFunction(n)?(u=l.call(arguments,2),r=function(){return n.apply(t||this,u.concat(l.call(arguments)))},r.guid=n.guid=n.guid||i.guid++,r):void 0},now:function(){return+new Date},support:r});i.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(n,t){ct["[object "+t+"]"]=t.toLowerCase()});p=function(n){function r(n,t,i,r){var p,s,a,c,w,y,d,v,nt,g;if((t?t.ownerDocument||t:h)!==o&&k(t),t=t||o,i=i||[],c=t.nodeType,"string"!=typeof n||!n||1!==c&&9!==c&&11!==c)return i;if(!r&&l){if(11!==c&&(p=hr.exec(n)))if(a=p[1]){if(9===c){if(s=t.getElementById(a),!s||!s.parentNode)return i;if(s.id===a)return i.push(s),i}else if(t.ownerDocument&&(s=t.ownerDocument.getElementById(a))&&et(t,s)&&s.id===a)return i.push(s),i}else{if(p[2])return b.apply(i,t.getElementsByTagName(n)),i;if((a=p[3])&&u.getElementsByClassName)return b.apply(i,t.getElementsByClassName(a)),i}if(u.qsa&&(!e||!e.test(n))){if(v=d=f,nt=t,g=1!==c&&n,1===c&&"object"!==t.nodeName.toLowerCase()){for(y=ft(n),(d=t.getAttribute("id"))?v=d.replace(cr,"\\$&"):t.setAttribute("id",v),v="[id='"+v+"'] ",w=y.length;w--;)y[w]=v+vt(y[w]);nt=dt.test(n)&&ti(t.parentNode)||t;g=y.join(",")}if(g)try{return b.apply(i,nt.querySelectorAll(g)),i}catch(tt){}finally{d||t.removeAttribute("id")}}}return oi(n.replace(lt,"$1"),t,i,r)}function gt(){function n(r,u){return i.push(r+" ")>t.cacheLength&&delete n[i.shift()],n[r+" "]=u}var i=[];return n}function c(n){return n[f]=!0,n}function v(n){var t=o.createElement("div");try{return!!n(t)}catch(i){return!1}finally{t.parentNode&&t.parentNode.removeChild(t);t=null}}function ni(n,i){for(var u=n.split("|"),r=n.length;r--;)t.attrHandle[u[r]]=i}function wi(n,t){var i=t&&n,r=i&&1===n.nodeType&&1===t.nodeType&&(~t.sourceIndex||li)-(~n.sourceIndex||li);if(r)return r;if(i)while(i=i.nextSibling)if(i===t)return-1;return n?1:-1}function lr(n){return function(t){var i=t.nodeName.toLowerCase();return"input"===i&&t.type===n}}function ar(n){return function(t){var i=t.nodeName.toLowerCase();return("input"===i||"button"===i)&&t.type===n}}function tt(n){return c(function(t){return t=+t,c(function(i,r){for(var u,f=n([],i.length,t),e=f.length;e--;)i[u=f[e]]&&(i[u]=!(r[u]=i[u]))})})}function ti(n){return n&&"undefined"!=typeof n.getElementsByTagName&&n}function bi(){}function vt(n){for(var t=0,r=n.length,i="";r>t;t++)i+=n[t].value;return i}function ii(n,t,i){var r=t.dir,u=i&&"parentNode"===r,e=ki++;return t.first?function(t,i,f){while(t=t[r])if(1===t.nodeType||u)return n(t,i,f)}:function(t,i,o){var s,h,c=[a,e];if(o){while(t=t[r])if((1===t.nodeType||u)&&n(t,i,o))return!0}else while(t=t[r])if(1===t.nodeType||u){if(h=t[f]||(t[f]={}),(s=h[r])&&s[0]===a&&s[1]===e)return c[2]=s[2];if(h[r]=c,c[2]=n(t,i,o))return!0}}}function ri(n){return n.length>1?function(t,i,r){for(var u=n.length;u--;)if(!n[u](t,i,r))return!1;return!0}:n[0]}function vr(n,t,i){for(var u=0,f=t.length;f>u;u++)r(n,t[u],i);return i}function yt(n,t,i,r,u){for(var e,o=[],f=0,s=n.length,h=null!=t;s>f;f++)(e=n[f])&&(!i||i(e,r,u))&&(o.push(e),h&&t.push(f));return o}function ui(n,t,i,r,u,e){return r&&!r[f]&&(r=ui(r)),u&&!u[f]&&(u=ui(u,e)),c(function(f,e,o,s){var l,c,a,p=[],y=[],w=e.length,k=f||vr(t||"*",o.nodeType?[o]:o,[]),v=!n||!f&&t?k:yt(k,p,n,o,s),h=i?u||(f?n:w||r)?[]:e:v;if(i&&i(v,h,o,s),r)for(l=yt(h,y),r(l,[],o,s),c=l.length;c--;)(a=l[c])&&(h[y[c]]=!(v[y[c]]=a));if(f){if(u||n){if(u){for(l=[],c=h.length;c--;)(a=h[c])&&l.push(v[c]=a);u(null,h=[],l,s)}for(c=h.length;c--;)(a=h[c])&&(l=u?nt(f,a):p[c])>-1&&(f[l]=!(e[l]=a))}}else h=yt(h===e?h.splice(w,h.length):h),u?u(null,e,h,s):b.apply(e,h)})}function fi(n){for(var o,u,r,s=n.length,h=t.relative[n[0].type],c=h||t.relative[" "],i=h?1:0,l=ii(function(n){return n===o},c,!0),a=ii(function(n){return nt(o,n)>-1},c,!0),e=[function(n,t,i){var r=!h&&(i||t!==ht)||((o=t).nodeType?l(n,t,i):a(n,t,i));return o=null,r}];s>i;i++)if(u=t.relative[n[i].type])e=[ii(ri(e),u)];else{if(u=t.filter[n[i].type].apply(null,n[i].matches),u[f]){for(r=++i;s>r;r++)if(t.relative[n[r].type])break;return ui(i>1&&ri(e),i>1&&vt(n.slice(0,i-1).concat({value:" "===n[i-2].type?"*":""})).replace(lt,"$1"),u,r>i&&fi(n.slice(i,r)),s>r&&fi(n=n.slice(r)),s>r&&vt(n))}e.push(u)}return ri(e)}function yr(n,i){var u=i.length>0,f=n.length>0,e=function(e,s,h,c,l){var y,d,w,k=0,v="0",g=e&&[],p=[],nt=ht,tt=e||f&&t.find.TAG("*",l),it=a+=null==nt?1:Math.random()||.1,rt=tt.length;for(l&&(ht=s!==o&&s);v!==rt&&null!=(y=tt[v]);v++){if(f&&y){for(d=0;w=n[d++];)if(w(y,s,h)){c.push(y);break}l&&(a=it)}u&&((y=!w&&y)&&k--,e&&g.push(y))}if(k+=v,u&&v!==k){for(d=0;w=i[d++];)w(g,p,s,h);if(e){if(k>0)while(v--)g[v]||p[v]||(p[v]=gi.call(c));p=yt(p)}b.apply(c,p);l&&!e&&p.length>0&&k+i.length>1&&r.uniqueSort(c)}return l&&(a=it,ht=nt),g};return u?c(e):e}var it,u,t,st,ei,ft,pt,oi,ht,w,rt,k,o,s,l,e,d,ct,et,f="sizzle"+1*new Date,h=n.document,a=0,ki=0,si=gt(),hi=gt(),ci=gt(),wt=function(n,t){return n===t&&(rt=!0),0},li=-2147483648,di={}.hasOwnProperty,g=[],gi=g.pop,nr=g.push,b=g.push,ai=g.slice,nt=function(n,t){for(var i=0,r=n.length;r>i;i++)if(n[i]===t)return i;return-1},bt="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",i="[\\x20\\t\\r\\n\\f]",ut="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",vi=ut.replace("w","w#"),yi="\\["+i+"*("+ut+")(?:"+i+"*([*^$|!~]?=)"+i+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+vi+"))|)"+i+"*\\]",kt=":("+ut+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+yi+")*)|.*)\\)|)",tr=new RegExp(i+"+","g"),lt=new RegExp("^"+i+"+|((?:^|[^\\\\])(?:\\\\.)*)"+i+"+$","g"),ir=new RegExp("^"+i+"*,"+i+"*"),rr=new RegExp("^"+i+"*([>+~]|"+i+")"+i+"*"),ur=new RegExp("="+i+"*([^\\]'\"]*?)"+i+"*\\]","g"),fr=new RegExp(kt),er=new RegExp("^"+vi+"$"),at={ID:new RegExp("^#("+ut+")"),CLASS:new RegExp("^\\.("+ut+")"),TAG:new RegExp("^("+ut.replace("w","w*")+")"),ATTR:new RegExp("^"+yi),PSEUDO:new RegExp("^"+kt),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+i+"*(even|odd|(([+-]|)(\\d*)n|)"+i+"*(?:([+-]|)"+i+"*(\\d+)|))"+i+"*\\)|)","i"),bool:new RegExp("^(?:"+bt+")$","i"),needsContext:new RegExp("^"+i+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+i+"*((?:-\\d)?\\d*)"+i+"*\\)|)(?=[^-]|$)","i")},or=/^(?:input|select|textarea|button)$/i,sr=/^h\d$/i,ot=/^[^{]+\{\s*\[native \w/,hr=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,dt=/[+~]/,cr=/'|\\/g,y=new RegExp("\\\\([\\da-f]{1,6}"+i+"?|("+i+")|.)","ig"),p=function(n,t,i){var r="0x"+t-65536;return r!==r||i?t:0>r?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)},pi=function(){k()};try{b.apply(g=ai.call(h.childNodes),h.childNodes);g[h.childNodes.length].nodeType}catch(pr){b={apply:g.length?function(n,t){nr.apply(n,ai.call(t))}:function(n,t){for(var i=n.length,r=0;n[i++]=t[r++];);n.length=i-1}}}u=r.support={};ei=r.isXML=function(n){var t=n&&(n.ownerDocument||n).documentElement;return t?"HTML"!==t.nodeName:!1};k=r.setDocument=function(n){var a,c,r=n?n.ownerDocument||n:h;return r!==o&&9===r.nodeType&&r.documentElement?(o=r,s=r.documentElement,c=r.defaultView,c&&c!==c.top&&(c.addEventListener?c.addEventListener("unload",pi,!1):c.attachEvent&&c.attachEvent("onunload",pi)),l=!ei(r),u.attributes=v(function(n){return n.className="i",!n.getAttribute("className")}),u.getElementsByTagName=v(function(n){return n.appendChild(r.createComment("")),!n.getElementsByTagName("*").length}),u.getElementsByClassName=ot.test(r.getElementsByClassName),u.getById=v(function(n){return s.appendChild(n).id=f,!r.getElementsByName||!r.getElementsByName(f).length}),u.getById?(t.find.ID=function(n,t){if("undefined"!=typeof t.getElementById&&l){var i=t.getElementById(n);return i&&i.parentNode?[i]:[]}},t.filter.ID=function(n){var t=n.replace(y,p);return function(n){return n.getAttribute("id")===t}}):(delete t.find.ID,t.filter.ID=function(n){var t=n.replace(y,p);return function(n){var i="undefined"!=typeof n.getAttributeNode&&n.getAttributeNode("id");return i&&i.value===t}}),t.find.TAG=u.getElementsByTagName?function(n,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(n):u.qsa?t.querySelectorAll(n):void 0}:function(n,t){var i,r=[],f=0,u=t.getElementsByTagName(n);if("*"===n){while(i=u[f++])1===i.nodeType&&r.push(i);return r}return u},t.find.CLASS=u.getElementsByClassName&&function(n,t){if(l)return t.getElementsByClassName(n)},d=[],e=[],(u.qsa=ot.test(r.querySelectorAll))&&(v(function(n){s.appendChild(n).innerHTML="<a id='"+f+"'><\/a><select id='"+f+"-\f]' msallowcapture=''><option selected=''><\/option><\/select>";n.querySelectorAll("[msallowcapture^='']").length&&e.push("[*^$]="+i+"*(?:''|\"\")");n.querySelectorAll("[selected]").length||e.push("\\["+i+"*(?:value|"+bt+")");n.querySelectorAll("[id~="+f+"-]").length||e.push("~=");n.querySelectorAll(":checked").length||e.push(":checked");n.querySelectorAll("a#"+f+"+*").length||e.push(".#.+[+~]")}),v(function(){}