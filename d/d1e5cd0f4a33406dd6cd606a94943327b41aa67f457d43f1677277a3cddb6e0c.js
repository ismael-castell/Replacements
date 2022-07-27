/*! For license information please see sparkle.mjs.LICENSE.txt */
var e={560:function(e,t,i){var o;!function(s){function r(e,t){var i=(65535&e)+(65535&t);return(e>>16)+(t>>16)+(i>>16)<<16|65535&i}function n(e,t,i,o,s,n){return r((a=r(r(t,e),r(o,n)))<<(d=s)|a>>>32-d,i);var a,d}function a(e,t,i,o,s,r,a){return n(t&i|~t&o,e,t,s,r,a)}function d(e,t,i,o,s,r,a){return n(t&o|i&~o,e,t,s,r,a)}function l(e,t,i,o,s,r,a){return n(t^i^o,e,t,s,r,a)}function c(e,t,i,o,s,r,a){return n(i^(t|~o),e,t,s,r,a)}function p(e,t){var i,o,s,n,p;e[t>>5]|=128<<t%32,e[14+(t+64>>>9<<4)]=t;var b=1732584193,u=-271733879,_=-1732584194,h=271733878;for(i=0;i<e.length;i+=16)o=b,s=u,n=_,p=h,b=a(b,u,_,h,e[i],7,-680876936),h=a(h,b,u,_,e[i+1],12,-389564586),_=a(_,h,b,u,e[i+2],17,606105819),u=a(u,_,h,b,e[i+3],22,-1044525330),b=a(b,u,_,h,e[i+4],7,-176418897),h=a(h,b,u,_,e[i+5],12,1200080426),_=a(_,h,b,u,e[i+6],17,-1473231341),u=a(u,_,h,b,e[i+7],22,-45705983),b=a(b,u,_,h,e[i+8],7,1770035416),h=a(h,b,u,_,e[i+9],12,-1958414417),_=a(_,h,b,u,e[i+10],17,-42063),u=a(u,_,h,b,e[i+11],22,-1990404162),b=a(b,u,_,h,e[i+12],7,1804603682),h=a(h,b,u,_,e[i+13],12,-40341101),_=a(_,h,b,u,e[i+14],17,-1502002290),b=d(b,u=a(u,_,h,b,e[i+15],22,1236535329),_,h,e[i+1],5,-165796510),h=d(h,b,u,_,e[i+6],9,-1069501632),_=d(_,h,b,u,e[i+11],14,643717713),u=d(u,_,h,b,e[i],20,-373897302),b=d(b,u,_,h,e[i+5],5,-701558691),h=d(h,b,u,_,e[i+10],9,38016083),_=d(_,h,b,u,e[i+15],14,-660478335),u=d(u,_,h,b,e[i+4],20,-405537848),b=d(b,u,_,h,e[i+9],5,568446438),h=d(h,b,u,_,e[i+14],9,-1019803690),_=d(_,h,b,u,e[i+3],14,-187363961),u=d(u,_,h,b,e[i+8],20,1163531501),b=d(b,u,_,h,e[i+13],5,-1444681467),h=d(h,b,u,_,e[i+2],9,-51403784),_=d(_,h,b,u,e[i+7],14,1735328473),b=l(b,u=d(u,_,h,b,e[i+12],20,-1926607734),_,h,e[i+5],4,-378558),h=l(h,b,u,_,e[i+8],11,-2022574463),_=l(_,h,b,u,e[i+11],16,1839030562),u=l(u,_,h,b,e[i+14],23,-35309556),b=l(b,u,_,h,e[i+1],4,-1530992060),h=l(h,b,u,_,e[i+4],11,1272893353),_=l(_,h,b,u,e[i+7],16,-155497632),u=l(u,_,h,b,e[i+10],23,-1094730640),b=l(b,u,_,h,e[i+13],4,681279174),h=l(h,b,u,_,e[i],11,-358537222),_=l(_,h,b,u,e[i+3],16,-722521979),u=l(u,_,h,b,e[i+6],23,76029189),b=l(b,u,_,h,e[i+9],4,-640364487),h=l(h,b,u,_,e[i+12],11,-421815835),_=l(_,h,b,u,e[i+15],16,530742520),b=c(b,u=l(u,_,h,b,e[i+2],23,-995338651),_,h,e[i],6,-198630844),h=c(h,b,u,_,e[i+7],10,1126891415),_=c(_,h,b,u,e[i+14],15,-1416354905),u=c(u,_,h,b,e[i+5],21,-57434055),b=c(b,u,_,h,e[i+12],6,1700485571),h=c(h,b,u,_,e[i+3],10,-1894986606),_=c(_,h,b,u,e[i+10],15,-1051523),u=c(u,_,h,b,e[i+1],21,-2054922799),b=c(b,u,_,h,e[i+8],6,1873313359),h=c(h,b,u,_,e[i+15],10,-30611744),_=c(_,h,b,u,e[i+6],15,-1560198380),u=c(u,_,h,b,e[i+13],21,1309151649),b=c(b,u,_,h,e[i+4],6,-145523070),h=c(h,b,u,_,e[i+11],10,-1120210379),_=c(_,h,b,u,e[i+2],15,718787259),u=c(u,_,h,b,e[i+9],21,-343485551),b=r(b,o),u=r(u,s),_=r(_,n),h=r(h,p);return[b,u,_,h]}function b(e){var t,i="",o=32*e.length;for(t=0;t<o;t+=8)i+=String.fromCharCode(e[t>>5]>>>t%32&255);return i}function u(e){var t,i=[];for(i[(e.length>>2)-1]=void 0,t=0;t<i.length;t+=1)i[t]=0;var o=8*e.length;for(t=0;t<o;t+=8)i[t>>5]|=(255&e.charCodeAt(t/8))<<t%32;return i}function _(e){var t,i,o="0123456789abcdef",s="";for(i=0;i<e.length;i+=1)t=e.charCodeAt(i),s+=o.charAt(t>>>4&15)+o.charAt(15&t);return s}function h(e){return unescape(encodeURIComponent(e))}function m(e){return function(e){return b(p(u(e),8*e.length))}(h(e))}function g(e,t){return function(e,t){var i,o,s=u(e),r=[],n=[];for(r[15]=n[15]=void 0,s.length>16&&(s=p(s,8*e.length)),i=0;i<16;i+=1)r[i]=909522486^s[i],n[i]=1549556828^s[i];return o=p(r.concat(u(t)),512+8*t.length),b(p(n.concat(o),640))}(h(e),h(t))}function v(e,t,i){return t?i?g(t,e):_(g(t,e)):i?m(e):_(m(e))}void 0===(o=function(){return v}.call(t,i,t,e))||(e.exports=o)}()},337:function(){!function(){if("object"==typeof window)if("IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype)"isIntersecting"in window.IntersectionObserverEntry.prototype||Object.defineProperty(window.IntersectionObserverEntry.prototype,"isIntersecting",{get:function(){return this.intersectionRatio>0}});else{var e=function(e){for(var t=window.document,i=s(t);i;)i=s(t=i.ownerDocument);return t}(),t=[],i=null,o=null;n.prototype.THROTTLE_TIMEOUT=100,n.prototype.POLL_INTERVAL=null,n.prototype.USE_MUTATION_OBSERVER=!0,n._setupCrossOriginUpdater=function(){return i||(i=function(e,i){o=e&&i?p(e,i):{top:0,bottom:0,left:0,right:0,width:0,height:0},t.forEach((function(e){e._checkForIntersections()}))}),i},n._resetCrossOriginUpdater=function(){i=null,o=null},n.prototype.observe=function(e){if(!this._observationTargets.some((function(t){return t.element==e}))){if(!e||1!=e.nodeType)throw new Error("target must be an Element");this._registerInstance(),this._observationTargets.push({element:e,entry:null}),this._monitorIntersections(e.ownerDocument),this._checkForIntersections()}},n.prototype.unobserve=function(e){this._observationTargets=this._observationTargets.filter((function(t){return t.element!=e})),this._unmonitorIntersections(e.ownerDocument),0==this._observationTargets.length&&this._unregisterInstance()},n.prototype.disconnect=function(){this._observationTargets=[],this._unmonitorAllIntersections(),this._unregisterInstance()},n.prototype.takeRecords=function(){var e=this._queuedEntries.slice();return this._queuedEntries=[],e},n.prototype._initThresholds=function(e){var t=e||[0];return Array.isArray(t)||(t=[t]),t.sort().filter((function(e,t,i){if("number"!=typeof e||isNaN(e)||e<0||e>1)throw new Error("threshold must be a number between 0 and 1 inclusively");return e!==i[t-1]}))},n.prototype._parseRootMargin=function(e){var t=(e||"0px").split(/\s+/).map((function(e){var t=/^(-?\d*\.?\d+)(px|%)$/.exec(e);if(!t)throw new Error("rootMargin must be specified in pixels or percent");return{value:parseFloat(t[1]),unit:t[2]}}));return t[1]=t[1]||t[0],t[2]=t[2]||t[0],t[3]=t[3]||t[1],t},n.prototype._monitorIntersections=function(t){var i=t.defaultView;if(i&&-1==this._monitoringDocuments.indexOf(t)){var o=this._checkForIntersections,r=null,n=null;this.POLL_INTERVAL?r=i.setInterval(o,this.POLL_INTERVAL):(a(i,"resize",o,!0),a(t,"scroll",o,!0),this.USE_MUTATION_OBSERVER&&"MutationObserver"in i&&(n=new i.MutationObserver(o)).observe(t,{attributes:!0,childList:!0,characterData:!0,subtree:!0})),this._monitoringDocuments.push(t),this._monitoringUnsubscribes.push((function(){var e=t.defaultView;e&&(r&&e.clearInterval(r),d(e,"resize",o,!0)),d(t,"scroll",o,!0),n&&n.disconnect()}));var l=this.root&&(this.root.ownerDocument||this.root)||e;if(t!=l){var c=s(t);c&&this._monitorIntersections(c.ownerDocument)}}},n.prototype._unmonitorIntersections=function(t){var i=this._monitoringDocuments.indexOf(t);if(-1!=i){var o=this.root&&(this.root.ownerDocument||this.root)||e,r=this._observationTargets.some((function(e){var i=e.element.ownerDocument;if(i==t)return!0;for(;i&&i!=o;){var r=s(i);if((i=r&&r.ownerDocument)==t)return!0}return!1}));if(!r){var n=this._monitoringUnsubscribes[i];if(this._monitoringDocuments.splice(i,1),this._monitoringUnsubscribes.splice(i,1),n(),t!=o){var a=s(t);a&&this._unmonitorIntersections(a.ownerDocument)}}}},n.prototype._unmonitorAllIntersections=function(){var e=this._monitoringUnsubscribes.slice(0);this._monitoringDocuments.length=0,this._monitoringUnsubscribes.length=0;for(var t=0;t<e.length;t++)e[t]()},n.prototype._checkForIntersections=function(){if(this.root||!i||o){var e=this._rootIsInDom(),t=e?this._getRootRect():{top:0,bottom:0,left:0,right:0,width:0,height:0};this._observationTargets.forEach((function(o){var s=o.element,n=l(s),a=this._rootContainsTarget(s),d=o.entry,c=e&&a&&this._computeTargetAndRootIntersection(s,n,t),p=null;this._rootContainsTarget(s)?i&&!this.root||(p=t):p={top:0,bottom:0,left:0,right:0,width:0,height:0};var b=o.entry=new r({time:window.performance&&performance.now&&performance.now(),target:s,boundingClientRect:n,rootBounds:p,intersectionRect:c});d?e&&a?this._hasCrossedThreshold(d,b)&&this._queuedEntries.push(b):d&&d.isIntersecting&&this._queuedEntries.push(b):this._queuedEntries.push(b)}),this),this._queuedEntries.length&&this._callback(this.takeRecords(),this)}},n.prototype._computeTargetAndRootIntersection=function(t,s,r){if("none"!=window.getComputedStyle(t).display){for(var n,a,d,c,b,_,h,m,g=s,v=u(t),f=!1;!f&&v;){var y=null,w=1==v.nodeType?window.getComputedStyle(v):{};if("none"==w.display)return null;if(v==this.root||9==v.nodeType)if(f=!0,v==this.root||v==e)i&&!this.root?!o||0==o.width&&0==o.height?(v=null,y=null,g=null):y=o:y=r;else{var x=u(v),k=x&&l(x),E=x&&this._computeTargetAndRootIntersection(x,k,r);k&&E?(v=x,y=p(k,E)):(v=null,g=null)}else{var j=v.ownerDocument;v!=j.body&&v!=j.documentElement&&"visible"!=w.overflow&&(y=l(v))}if(y&&(n=y,a=g,void 0,void 0,void 0,void 0,void 0,void 0,d=Math.max(n.top,a.top),c=Math.min(n.bottom,a.bottom),b=Math.max(n.left,a.left),m=c-d,g=(h=(_=Math.min(n.right,a.right))-b)>=0&&m>=0&&{top:d,bottom:c,left:b,right:_,width:h,height:m}||null),!g)break;v=v&&u(v)}return g}},n.prototype._getRootRect=function(){var t;if(this.root&&!_(this.root))t=l(this.root);else{var i=_(this.root)?this.root:e,o=i.documentElement,s=i.body;t={top:0,left:0,right:o.clientWidth||s.clientWidth,width:o.clientWidth||s.clientWidth,bottom:o.clientHeight||s.clientHeight,height:o.clientHeight||s.clientHeight}}return this._expandRectByRootMargin(t)},n.prototype._expandRectByRootMargin=function(e){var t=this._rootMarginValues.map((function(t,i){return"px"==t.unit?t.value:t.value*(i%2?e.width:e.height)/100})),i={top:e.top-t[0],right:e.right+t[1],bottom:e.bottom+t[2],left:e.left-t[3]};return i.width=i.right-i.left,i.height=i.bottom-i.top,i},n.prototype._hasCrossedThreshold=function(e,t){var i=e&&e.isIntersecting?e.intersectionRatio||0:-1,o=t.isIntersecting?t.intersectionRatio||0:-1;if(i!==o)for(var s=0;s<this.thresholds.length;s++){var r=this.thresholds[s];if(r==i||r==o||r<i!=r<o)return!0}},n.prototype._rootIsInDom=function(){return!this.root||b(e,this.root)},n.prototype._rootContainsTarget=function(t){var i=this.root&&(this.root.ownerDocument||this.root)||e;return b(i,t)&&(!this.root||i==t.ownerDocument)},n.prototype._registerInstance=function(){t.indexOf(this)<0&&t.push(this)},n.prototype._unregisterInstance=function(){var e=t.indexOf(this);-1!=e&&t.splice(e,1)},window.IntersectionObserver=n,window.IntersectionObserverEntry=r}function s(e){try{return e.defaultView&&e.defaultView.frameElement||null}catch(e){return null}}function r(e){this.time=e.time,this.target=e.target,this.rootBounds=c(e.rootBounds),this.boundingClientRect=c(e.boundingClientRect),this.intersectionRect=c(e.intersectionRect||{top:0,bottom:0,left:0,right:0,width:0,height:0}),this.isIntersecting=!!e.intersectionRect;var t=this.boundingClientRect,i=t.width*t.height,o=this.intersectionRect,s=o.width*o.height;this.intersectionRatio=i?Number((s/i).toFixed(4)):this.isIntersecting?1:0}function n(e,t){var i,o,s,r=t||{};if("function"!=typeof e)throw new Error("callback must be a function");if(r.root&&1!=r.root.nodeType&&9!=r.root.nodeType)throw new Error("root must be a Document or Element");this._checkForIntersections=(i=this._checkForIntersections.bind(this),o=this.THROTTLE_TIMEOUT,s=null,function(){s||(s=setTimeout((function(){i(),s=null}),o))}),this._callback=e,this._observationTargets=[],this._queuedEntries=[],this._rootMarginValues=this._parseRootMargin(r.rootMargin),this.thresholds=this._initThresholds(r.threshold),this.root=r.root||null,this.rootMargin=this._rootMarginValues.map((function(e){return e.value+e.unit})).join(" "),this._monitoringDocuments=[],this._monitoringUnsubscribes=[]}function a(e,t,i,o){"function"==typeof e.addEventListener?e.addEventListener(t,i,o||!1):"function"==typeof e.attachEvent&&e.attachEvent("on"+t,i)}function d(e,t,i,o){"function"==typeof e.removeEventListener?e.removeEventListener(t,i,o||!1):"function"==typeof e.detatchEvent&&e.detatchEvent("on"+t,i)}function l(e){var t;try{t=e.getBoundingClientRect()}catch(e){}return t?(t.width&&t.height||(t={top:t.top,right:t.right,bottom:t.bottom,left:t.left,width:t.right-t.left,height:t.bottom-t.top}),t):{top:0,bottom:0,left:0,right:0,width:0,height:0}}function c(e){return!e||"x"in e?e:{top:e.top,y:e.top,bottom:e.bottom,left:e.left,x:e.left,right:e.right,width:e.width,height:e.height}}function p(e,t){var i=t.top-e.top,o=t.left-e.left;return{top:i,left:o,height:t.height,width:t.width,bottom:i+t.height,right:o+t.width}}function b(e,t){for(var i=t;i;){if(i==e)return!0;i=u(i)}return!1}function u(t){var i=t.parentNode;return 9==t.nodeType&&t!=e?s(t):(i&&i.assignedSlot&&(i=i.assignedSlot.parentNode),i&&11==i.nodeType&&i.host?i.host:i)}function _(e){return e&&9===e.nodeType}}()},991:function(e){e.exports=function(e){var t={};function i(o){if(t[o])return t[o].exports;var s=t[o]={i:o,l:!1,exports:{}};return e[o].call(s.exports,s,s.exports,i),s.l=!0,s.exports}return i.m=e,i.c=t,i.d=function(e,t,o){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)i.d(o,s,function(t){return e[t]}.bind(null,s));return o},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=0)}([function(e,t,i){e.exports=i(1)},function(e,t,i){function o(e){var t=document.cookie.match("(^|;) ?".concat(e,"=([^;$]*)"));return t?t[2]:""}function s(e,t){return-1!==e.indexOf(t)}function r(e){window.__tcfapi("removeEventListener",2,(function(t){t||console.warn("[ms.consent] Failed to remove __tcfapi event listener",e)}),e)}function n(){return s(o("bbgconsentstring"),"req1")}function a(){return s(o("bbgconsentstring"),"fun1")}function d(){return s(o("bbgconsentstring"),"pad1")}i.r(t),t.default={waitForUserConsent:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new Promise((function(t,i){if(!window.__tcfapi||!window.__uspapi)return console.error("[ms.consent] Please make sure __tcfapi and __uspapi are setup"),i(new Error("__tcfapi and __uspapi not loaded"));var o=!1,s=setTimeout((function(){console.error("[ms.consent] Timeout in `waitForUserConsent` with options",e),i(new Error("No response from __tcfapi event listener"))}),e.inactiveTimeout||1e4);window.__tcfapi("addEventListener",2,(function(e,n){if(!n)return console.error("[ms.consent] Failed to `addEventListener` with __tcfapi"),i(new Error("Unable to assign event listener"));if(!o)if(void 0!==e.gdprApplies){clearTimeout(s);var a=e.gdprApplies,d=e.eventStatus,l=e.listenerId;a?"tcloaded"!==d&&"useractioncomplete"!==d||(t({tcData:e}),r(l),o=!0):(window.__uspapi("getUSPData",1,(function(e,o){if(!o)return console.error("[ms.consent] Failed to `getUSPData` with __uspapi"),i(new Error("Unable to get US privacy data from __uspapi"));t({uspData:e})})),r(l),o=!0)}else console.warn("[ms.consent] Received `gdprApplies` as undefined")}))}))},gdprAppliesAsync:function(){return window.__tcfapi?new Promise((function(e,t){window.__tcfapi("getTCData",2,(function(i,o){o?e(i.gdprApplies):t(new Error("Failed to `getTCData` from __tcfapi"))}))})):Promise.reject(new Error("Unable to find __tcfapi in global scope"))},iabConsentStringAsync:function(){return window.__tcfapi?new Promise((function(e,t){window.__tcfapi("getTCData",2,(function(i,o){o?e(i.tcString):t(new Error("Failed to `getTCData` from __tcfapi"))}))})):Promise.reject(new Error("Unable to find __tcfapi in global scope"))},getUSPrivacyStringAsync:function(){return window.__uspapi?new Promise((function(e,t){window.__uspapi("getUSPData",1,(function(i,o){o?e(i.uspString):t(new Error("Failed to `getUSPData` from __uspapi"))}))})):Promise.reject(new Error("Unable to find __uspapi in global scope"))},reqAllowed:n,reqAllowedAsync:function(){return Promise.resolve(n())},funAllowed:a,funAllowedAsync:function(){return Promise.resolve(a())},padAllowed:d,padAllowedAsync:function(){return Promise.resolve(d())}}}])},318:function(e,t,i){e.exports=i(991).default},238:function(e,t,i){var o;!function(s,r){var n="function",a="undefined",d="object",l="string",c="model",p="name",b="type",u="vendor",_="version",h="architecture",m="console",g="mobile",v="tablet",f="smarttv",y="wearable",w="embedded",x="Amazon",k="Apple",E="ASUS",j="BlackBerry",I="Google",z="Huawei",S="LG",T="Microsoft",A="Motorola",O="Samsung",C="Sony",R="Xiaomi",P="Zebra",D="Facebook",N=function(e){for(var t={},i=0;i<e.length;i++)t[e[i].toUpperCase()]=e[i];return t},M=function(e,t){return typeof e===l&&-1!==L(t).indexOf(L(e))},L=function(e){return e.toLowerCase()},B=function(e,t){if(typeof e===l)return e=e.replace(/^\s\s*/,"").replace(/\s\s*$/,""),typeof t===a?e:e.substring(0,255)},V=function(e,t){for(var i,o,s,a,l,c,p=0;p<t.length&&!l;){var b=t[p],u=t[p+1];for(i=o=0;i<b.length&&!l;)if(l=b[i++].exec(e))for(s=0;s<u.length;s++)c=l[++o],typeof(a=u[s])===d&&a.length>0?2===a.length?typeof a[1]==n?this[a[0]]=a[1].call(this,c):this[a[0]]=a[1]:3===a.length?typeof a[1]!==n||a[1].exec&&a[1].test?this[a[0]]=c?c.replace(a[1],a[2]):r:this[a[0]]=c?a[1].call(this,c,a[2]):r:4===a.length&&(this[a[0]]=c?a[3].call(this,c.replace(a[1],a[2])):r):this[a]=c||r;p+=2}},q=function(e,t){for(var i in t)if(typeof t[i]===d&&t[i].length>0){for(var o=0;o<t[i].length;o++)if(M(t[i][o],e))return"?"===i?r:i}else if(M(t[i],e))return"?"===i?r:i;return e},U={ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"},F={browser:[[/\b(?:crmo|crios)\/([\w\.]+)/i],[_,[p,"Chrome"]],[/edg(?:e|ios|a)?\/([\w\.]+)/i],[_,[p,"Edge"]],[/(opera mini)\/([-\w\.]+)/i,/(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,/(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],[p,_],[/opios[\/ ]+([\w\.]+)/i],[_,[p,"Opera Mini"]],[/\bopr\/([\w\.]+)/i],[_,[p,"Opera"]],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,/(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i,/(ba?idubrowser)[\/ ]?([\w\.]+)/i,/(?:ms|\()(ie) ([\w\.]+)/i,/(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale|qqbrowserlite|qq)\/([-\w\.]+)/i,/(weibo)__([\d\.]+)/i],[p,_],[/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],[_,[p,"UCBrowser"]],[/\bqbcore\/([\w\.]+)/i],[_,[p,"WeChat(Win) Desktop"]],[/micromessenger\/([\w\.]+)/i],[_,[p,"WeChat"]],[/konqueror\/([\w\.]+)/i],[_,[p,"Konqueror"]],[/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],[_,[p,"IE"]],[/yabrowser\/([\w\.]+)/i],[_,[p,"Yandex"]],[/(avast|avg)\/([\w\.]+)/i],[[p,/(.+)/,"$1 Secure Browser"],_],[/\bfocus\/([\w\.]+)/i],[_,[p,"Firefox Focus"]],[/\bopt\/([\w\.]+)/i],[_,[p,"Opera Touch"]],[/coc_coc\w+\/([\w\.]+)/i],[_,[p,"Coc Coc"]],[/dolfin\/([\w\.]+)/i],[_,[p,"Dolphin"]],[/coast\/([\w\.]+)/i],[_,[p,"Opera Coast"]],[/miuibrowser\/([\w\.]+)/i],[_,[p,"MIUI Browser"]],[/fxios\/([-\w\.]+)/i],[_,[p,"Firefox"]],[/\bqihu|(qi?ho?o?|360)browser/i],[[p,"360 Browser"]],[/(oculus|samsung|sailfish)browser\/([\w\.]+)/i],[[p,/(.+)/,"$1 Browser"],_],[/(comodo_dragon)\/([\w\.]+)/i],[[p,/_/g," "],_],[/(electron)\/([\w\.]+) safari/i,/(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,/m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i],[p,_],[/(metasr)[\/ ]?([\w\.]+)/i,/(lbbrowser)/i],[p],[/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],[[p,D],_],[/safari (line)\/([\w\.]+)/i,/\b(line)\/([\w\.]+)\/iab/i,/(chromium|instagram)[\/ ]([-\w\.]+)/i],[p,_],[/\bgsa\/([\w\.]+) .*safari\//i],[_,[p,"GSA"]],[/headlesschrome(?:\/([\w\.]+)| )/i],[_,[p,"Chrome Headless"]],[/ wv\).+(chrome)\/([\w\.]+)/i],[[p,"Chrome WebView"],_],[/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],[_,[p,"Android Browser"]],[/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],[p,_],[/version\/([\w\.]+) .*mobile\/\w+ (safari)/i],[_,[p,"Mobile Safari"]],[/version\/([\w\.]+) .*(mobile ?safari|safari)/i],[_,p],[/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],[p,[_,q,{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}]],[/(webkit|khtml)\/([\w\.]+)/i],[p,_],[/(navigator|netscape\d?)\/([-\w\.]+)/i],[[p,"Netscape"],_],[/mobile vr; rv:([\w\.]+)\).+firefox/i],[_,[p,"Firefox Reality"]],[/ekiohf.+(flow)\/([\w\.]+)/i,/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,/(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,/(firefox)\/([\w\.]+)/i,/(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,/(links) \(([\w\.]+)/i],[p,_]],cpu:[[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],[[h,"amd64"]],[/(ia32(?=;))/i],[[h,L]],[/((?:i[346]|x)86)[;\)]/i],[[h,"ia32"]],[/\b(aarch64|arm(v?8e?l?|_?64))\b/i],[[h,"arm64"]],[/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],[[h,"armhf"]],[/windows (ce|mobile); ppc;/i],[[h,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],[[h,/ower/,"",L]],[/(sun4\w)[;\)]/i],[[h,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],[[h,L]]],device:[[/\b(sch-i[89]0\d|shw-m380s|sm-[pt]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],[c,[u,O],[b,v]],[/\b((?:s[cgp]h|gt|sm)-\w+|galaxy nexus)/i,/samsung[- ]([-\w]+)/i,/sec-(sgh\w+)/i],[c,[u,O],[b,g]],[/\((ip(?:hone|od)[\w ]*);/i],[c,[u,k],[b,g]],[/\((ipad);[-\w\),; ]+apple/i,/applecoremedia\/[\w\.]+ \((ipad)/i,/\b(ipad)\d\d?,\d\d?[;\]].+ios/i],[c,[u,k],[b,v]],[/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],[c,[u,z],[b,v]],[/(?:huawei|honor)([-\w ]+)[;\)]/i,/\b(nexus 6p|\w{2,4}-[atu]?[ln][01259x][012359][an]?)\b(?!.+d\/s)/i],[c,[u,z],[b,g]],[/\b(poco[\w ]+)(?: bui|\))/i,/\b; (\w+) build\/hm\1/i,/\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,/\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,/\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i],[[c,/_/g," "],[u,R],[b,g]],[/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],[[c,/_/g," "],[u,R],[b,v]],[/; (\w+) bui.+ oppo/i,/\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],[c,[u,"OPPO"],[b,g]],[/vivo (\w+)(?: bui|\))/i,/\b(v[12]\d{3}\w?[at])(?: bui|;)/i],[c,[u,"Vivo"],[b,g]],[/\b(rmx[12]\d{3})(?: bui|;|\))/i],[c,[u,"Realme"],[b,g]],[/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,/\bmot(?:orola)?[- ](\w*)/i,/((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],[c,[u,A],[b,g]],[/\b(mz60\d|xoom[2 ]{0,2}) build\//i],[c,[u,A],[b,v]],[/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],[c,[u,S],[b,v]],[/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,/\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,/\blg-?([\d\w]+) bui/i],[c,[u,S],[b,g]],[/(ideatab[-\w ]+)/i,/lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],[c,[u,"Lenovo"],[b,v]],[/(?:maemo|nokia).*(n900|lumia \d+)/i,/nokia[-_ ]?([-\w\.]*)/i],[[c,/_/g," "],[u,"Nokia"],[b,g]],[/(pixel c)\b/i],[c,[u,I],[b,v]],[/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],[c,[u,I],[b,g]],[/droid.+ ([c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[c,[u,C],[b,g]],[/sony tablet [ps]/i,/\b(?:sony)?sgp\w+(?: bui|\))/i],[[c,"Xperia Tablet"],[u,C],[b,v]],[/ (kb2005|in20[12]5|be20[12][59])\b/i,/(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],[c,[u,"OnePlus"],[b,g]],[/(alexa)webm/i,/(kf[a-z]{2}wi)( bui|\))/i,/(kf[a-z]+)( bui|\)).+silk\//i],[c,[u,x],[b,v]],[/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],[[c,/(.+)/g,"Fire Phone $1"],[u,x],[b,g]],[/(playbook);[-\w\),; ]+(rim)/i],[c,u,[b,v]],[/\b((?:bb[a-f]|st[hv])100-\d)/i,/\(bb10; (\w+)/i],[c,[u,j],[b,g]],[/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],[c,[u,E],[b,v]],[/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],[c,[u,E],[b,g]],[/(nexus 9)/i],[c,[u,"HTC"],[b,v]],[/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,/(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,/(alcatel|geeksphone|nexian|panasonic|sony)[-_ ]?([-\w]*)/i],[u,[c,/_/g," "],[b,g]],[/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],[c,[u,"Acer"],[b,v]],[/droid.+; (m[1-5] note) bui/i,/\bmz-([-\w]{2,})/i],[c,[u,"Meizu"],[b,g]],[/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],[c,[u,"Sharp"],[b,g]],[/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i,/(hp) ([\w ]+\w)/i,/(asus)-?(\w+)/i,/(microsoft); (lumia[\w ]+)/i,/(lenovo)[-_ ]?([-\w]+)/i,/(jolla)/i,/(oppo) ?([\w ]+) bui/i],[u,c,[b,g]],[/(archos) (gamepad2?)/i,/(hp).+(touchpad(?!.+tablet)|tablet)/i,/(kindle)\/([\w\.]+)/i,/(nook)[\w ]+build\/(\w+)/i,/(dell) (strea[kpr\d ]*[\dko])/i,/(le[- ]+pan)[- ]+(\w{1,9}) bui/i,/(trinity)[- ]*(t\d{3}) bui/i,/(gigaset)[- ]+(q\w{1,9}) bui/i,/(vodafone) ([\w ]+)(?:\)| bui)/i],[u,c,[b,v]],[/(surface duo)/i],[c,[u,T],[b,v]],[/droid [\d\.]+; (fp\du?)(?: b|\))/i],[c,[u,"Fairphone"],[b,g]],[/(u304aa)/i],[c,[u,"AT&T"],[b,g]],[/\bsie-(\w*)/i],[c,[u,"Siemens"],[b,g]],[/\b(rct\w+) b/i],[c,[u,"RCA"],[b,v]],[/\b(venue[\d ]{2,7}) b/i],[c,[u,"Dell"],[b,v]],[/\b(q(?:mv|ta)\w+) b/i],[c,[u,"Verizon"],[b,v]],[/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],[c,[u,"Barnes & Noble"],[b,v]],[/\b(tm\d{3}\w+) b/i],[c,[u,"NuVision"],[b,v]],[/\b(k88) b/i],[c,[u,"ZTE"],[b,v]],[/\b(nx\d{3}j) b/i],[c,[u,"ZTE"],[b,g]],[/\b(gen\d{3}) b.+49h/i],[c,[u,"Swiss"],[b,g]],[/\b(zur\d{3}) b/i],[c,[u,"Swiss"],[b,v]],[/\b((zeki)?tb.*\b) b/i],[c,[u,"Zeki"],[b,v]],[/\b([yr]\d{2}) b/i,/\b(dragon[- ]+touch |dt)(\w{5}) b/i],[[u,"Dragon Touch"],c,[b,v]],[/\b(ns-?\w{0,9}) b/i],[c,[u,"Insignia"],[b,v]],[/\b((nxa|next)-?\w{0,9}) b/i],[c,[u,"NextBook"],[b,v]],[/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],[[u,"Voice"],c,[b,g]],[/\b(lvtel\-)?(v1[12]) b/i],[[u,"LvTel"],c,[b,g]],[/\b(ph-1) /i],[c,[u,"Essential"],[b,g]],[/\b(v(100md|700na|7011|917g).*\b) b/i],[c,[u,"Envizen"],[b,v]],[/\b(trio[-\w\. ]+) b/i],[c,[u,"MachSpeed"],[b,v]],[/\btu_(1491) b/i],[c,[u,"Rotor"],[b,v]],[/(shield[\w ]+) b/i],[c,[u,"Nvidia"],[b,v]],[/(sprint) (\w+)/i],[u,c,[b,g]],[/(kin\.[onetw]{3})/i],[[c,/\./g," "],[u,T],[b,g]],[/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],[c,[u,P],[b,v]],[/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],[c,[u,P],[b,g]],[/(ouya)/i,/(nintendo) ([wids3utch]+)/i],[u,c,[b,m]],[/droid.+; (shield) bui/i],[c,[u,"Nvidia"],[b,m]],[/(playstation [345portablevi]+)/i],[c,[u,C],[b,m]],[/\b(xbox(?: one)?(?!; xbox))[\); ]/i],[c,[u,T],[b,m]],[/smart-tv.+(samsung)/i],[u,[b,f]],[/hbbtv.+maple;(\d+)/i],[[c,/^/,"SmartTV"],[u,O],[b,f]],[/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],[[u,S],[b,f]],[/(apple) ?tv/i],[u,[c,"Apple TV"],[b,f]],[/crkey/i],[[c,"Chromecast"],[u,I],[b,f]],[/droid.+aft(\w)( bui|\))/i],[c,[u,x],[b,f]],[/\(dtv[\);].+(aquos)/i],[c,[u,"Sharp"],[b,f]],[/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,/hbbtv\/\d+\.\d+\.\d+ +\([\w ]*; *(\w[^;]*);([^;]*)/i],[[u,B],[c,B],[b,f]],[/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],[[b,f]],[/((pebble))app/i],[u,c,[b,y]],[/droid.+; (glass) \d/i],[c,[u,I],[b,y]],[/droid.+; (wt63?0{2,3})\)/i],[c,[u,P],[b,y]],[/(quest( 2)?)/i],[c,[u,D],[b,y]],[/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],[u,[b,w]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i],[c,[b,g]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],[c,[b,v]],[/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],[[b,v]],[/(phone|mobile(?:[;\/]| safari)|pda(?=.+windows ce))/i],[[b,g]],[/(android[-\w\. ]{0,9});.+buil/i],[c,[u,"Generic"]]],engine:[[/windows.+ edge\/([\w\.]+)/i],[_,[p,"EdgeHTML"]],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[_,[p,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,/ekioh(flow)\/([\w\.]+)/i,/(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,/(icab)[\/ ]([23]\.[\d\.]+)/i],[p,_],[/rv\:([\w\.]{1,9})\b.+(gecko)/i],[_,p]],os:[[/microsoft (windows) (vista|xp)/i],[p,_],[/(windows) nt 6\.2; (arm)/i,/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i,/(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i],[p,[_,q,U]],[/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i],[[p,"Windows"],[_,q,U]],[/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,/cfnetwork\/.+darwin/i],[[_,/_/g,"."],[p,"iOS"]],[/(mac os x) ?([\w\. ]*)/i,/(macintosh|mac_powerpc\b)(?!.+haiku)/i],[[p,"Mac OS"],[_,/_/g,"."]],[/droid ([\w\.]+)\b.+(android[- ]x86)/i],[_,p],[/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,/(blackberry)\w*\/([\w\.]*)/i,/(tizen|kaios)[\/ ]([\w\.]+)/i,/\((series40);/i],[p,_],[/\(bb(10);/i],[_,[p,j]],[/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],[_,[p,"Symbian"]],[/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],[_,[p,"Firefox OS"]],[/web0s;.+rt(tv)/i,/\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],[_,[p,"webOS"]],[/crkey\/([\d\.]+)/i],[_,[p,"Chromecast"]],[/(cros) [\w]+ ([\w\.]+\w)/i],[[p,"Chromium OS"],_],[/(nintendo|playstation) ([wids345portablevuch]+)/i,/(xbox); +xbox ([^\);]+)/i,/\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,/(mint)[\/\(\) ]?(\w*)/i,/(mageia|vectorlinux)[; ]/i,/([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,/(hurd|linux) ?([\w\.]*)/i,/(gnu) ?([\w\.]*)/i,/\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,/(haiku) (\w+)/i],[p,_],[/(sunos) ?([\w\.\d]*)/i],[[p,"Solaris"],_],[/((?:open)?solaris)[-\/ ]?([\w\.]*)/i,/(aix) ((\d)(?=\.|\)| )[\w\.])*/i,/\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux)/i,/(unix) ?([\w\.]*)/i],[p,_]]},H=function(e,t){if(typeof e===d&&(t=e,e=r),!(this instanceof H))return new H(e,t).getResult();var i=e||(typeof s!==a&&s.navigator&&s.navigator.userAgent?s.navigator.userAgent:""),o=t?function(e,t){var i={};for(var o in e)t[o]&&t[o].length%2==0?i[o]=t[o].concat(e[o]):i[o]=e[o];return i}(F,t):F;return this.getBrowser=function(){var e,t={};return t.name=r,t.version=r,V.call(t,i,o.browser),t.major=typeof(e=t.version)===l?e.replace(/[^\d\.]/g,"").split(".")[0]:r,t},this.getCPU=function(){var e={};return e.architecture=r,V.call(e,i,o.cpu),e},this.getDevice=function(){var e={};return e.vendor=r,e.model=r,e.type=r,V.call(e,i,o.device),e},this.getEngine=function(){var e={};return e.name=r,e.version=r,V.call(e,i,o.engine),e},this.getOS=function(){var e={};return e.name=r,e.version=r,V.call(e,i,o.os),e},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return i},this.setUA=function(e){return i=typeof e===l&&e.length>255?B(e,255):e,this},this.setUA(i),this};H.VERSION="0.7.31",H.BROWSER=N([p,_,"major"]),H.CPU=N([h]),H.DEVICE=N([c,u,b,m,g,f,v,y,w]),H.ENGINE=H.OS=N([p,_]),typeof t!==a?(e.exports&&(t=e.exports=H),t.UAParser=H):i.amdO?(o=function(){return H}.call(t,i,t,e))===r||(e.exports=o):typeof s!==a&&(s.UAParser=H);var G=typeof s!==a&&(s.jQuery||s.Zepto);if(G&&!G.ua){var Q=new H;G.ua=Q.getResult(),G.ua.get=function(){return Q.getUA()},G.ua.set=function(e){Q.setUA(e);var t=Q.getResult();for(var i in t)G.ua[i]=t[i]}}}("object"==typeof window?window:this)}},t={};function i(o){var s=t[o];if(void 0!==s)return s.exports;var r=t[o]={exports:{}};return e[o].call(r.exports,r,r.exports,i),r.exports}i.amdO={},i.d=function(e,t){for(var o in t)i.o(t,o)&&!i.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)};var o={};!function(){i.d(o,{J:function(){return ct}}),window.__bloomberg__=window.__bloomberg__||{},window.googletag=window.googletag||{},window.googletag.cmd=window.googletag.cmd||[],window.headertag=window.headertag||{},window.headertag.cmd=window.headertag.cmd||[],window.__iasPET=window.__iasPET||{},window.__iasPET.queue=window.__iasPET.queue||[],window.Spritz=window.Spritz||{},window.Spritz.cmd=window.Spritz.cmd||[];var e=i(318),t=i(238);function s(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var o in i)e[o]=i[o]}return e}var r={read:function(e){return'"'===e[0]&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}},n=function e(t,i){function o(e,o,r){if("undefined"!=typeof document){"number"==typeof(r=s({},i,r)).expires&&(r.expires=new Date(Date.now()+864e5*r.expires)),r.expires&&(r.expires=r.expires.toUTCString()),e=encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var n="";for(var a in r)r[a]&&(n+="; "+a,!0!==r[a]&&(n+="="+r[a].split(";")[0]));return document.cookie=e+"="+t.write(o,e)+n}}return Object.create({set:o,get:function(e){if("undefined"!=typeof document&&(!arguments.length||e)){for(var i=document.cookie?document.cookie.split("; "):[],o={},s=0;s<i.length;s++){var r=i[s].split("="),n=r.slice(1).join("=");try{var a=decodeURIComponent(r[0]);if(o[a]=t.read(n,a),e===a)break}catch(e){}}return e?o[e]:o}},remove:function(e,t){o(e,"",s({},t,{expires:-1}))},withAttributes:function(t){return e(this.converter,s({},this.attributes,t))},withConverter:function(t){return e(s({},this.converter,t),this.attributes)}},{attributes:{value:Object.freeze(i)},converter:{value:Object.freeze(t)}})}(r,{path:"/"}),a=n,d=/\.co\.jp$/i;class l{static getViewportDimensions(){return window&&document?{height:window.innerHeight||document.documentElement.clientHeight,width:window.innerWidth||document.documentElement.clientWidth}:0}static localStorageExists(){try{return window.localStorage}catch(e){return null}}static sessionStorageExists(){try{return window.sessionStorage}catch(e){return null}}static cookiesAreEnabled(){return!(!window||!window.navigator)&&window.navigator.cookieEnabled}static isCOJP(){return d.test(window.location.hostname)}