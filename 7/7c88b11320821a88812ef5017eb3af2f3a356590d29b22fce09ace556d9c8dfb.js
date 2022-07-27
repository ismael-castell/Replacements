/*AGENT_VERSION=3.3.1-saas.2*/"use strict";function _defineProperty(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function _typeof(t){"@babel/helpers - typeof";return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}window.TINGYUN=function(t,e){if(/(MSIE [0-8].\d+)/.test(navigator.userAgent)){return ;}function n(t){return function(e){return"Array"===t&&Array.isArray?Array.isArray(e):Object.prototype.toString.call(e)==="[object "+t+"]"}}function r(t){var e=!!t&&"length"in t&&t.length,n=_typeof(t);return"function"===n?!1:"array"===n||0===e||"number"==typeof e&&e>0&&e-1 in t}function a(t,e,n){var a,i=0;if(t)if(r(t))for(a=t.length;a>i&&e.call(t[i],t[i],i)!==!1;i++);else for(i in t)if((n||Object.prototype.hasOwnProperty.call(t,i))&&e.call(t[i],t[i],i)===!1)break;return t}function i(t){var e=!1;try{/\{\s+\[native code\]/.test(Function.prototype.toString.call(t))&&(e=!0)}catch(n){}return e}function o(t){return JSON.parse(t)}function s(t){return JSON.stringify(t)}function c(t){return new Function("return "+t)()}function u(t){switch(_typeof(t)){case"object":if(!t)return null;if(t instanceof Array){var e=pi.call(t);return a(e,function(t,n){e[n]=u(t)}),"["+e.join(",")+"]"}if(t instanceof Date)return t.getTime().toString();var n="";return a(t,function(t,e){si(t)||(n+=u(e)+":"+u(t)+",")}),n&&(n=n.substr(0,n.length-1)),"{"+n+"}";case"string":return hi+t.replace(mi,"\\$1").replace(vi,"\\n")+hi;case"number":return isNaN(t)?null:t;case"boolean":return t;case"function":return u(t.toString());case"undefined":default:return'"undefined"'}}function l(){var t=gi&&gi.stringify;if(!si(t)||!i(t))return!1;var e=!0;try{var n=[Boolean,Number,String,Object,Array];a(n,function(t){return t.prototype.toJSON?(e=!1,!1):void 0})}catch(r){}return e}function f(){var t=gi&&gi.stringify;return si(t)&&i(t)}function d(){ri=f()?o:c,ai=l()?s:u}function p(t){return t&&ii(t)?ri(t):t}function h(t,e,n,r){return t.addEventListener(e,n,r)}function m(t,e,n){return t.attachEvent("on"+e,n)}function v(t,e){return Function.prototype.apply.apply(t,e)}function g(t,e){return function(){return t.apply(e,arguments)}}function y(t){return _i?_i(t):t}function _(t){var e=arguments.length;if(2>e||!t)return t;var n=pi.call(arguments,1);return a(n,function(e){a(e,function(e,n){t[n]=e})}),t}function x(t,e){return t?e?t.replace(/\{(\w+.?\w+)\}/g,function(t,n){return e[n]||""}).replace(/\{(\d+)\}/g,function(t,n){return e[n]||""}):t:""}function b(t,e,n){var r;if(null==t)return-1;var a=Object(t),i=a.length>>>0;if(0===i)return-1;var o=+n||0;if(Math.abs(o)===1/0&&(o=0),o>=i)return-1;for(r=Math.max(o>=0?o:i-Math.abs(o),0);i>r;){if(r in a&&a[r]===e)return r;r++}return-1}function E(t,e){var n=null==t?0:t.length;if(!n)return-1;for(var r=n;r--;)if(t[r]===e)return r;return r}function S(t){return setTimeout(t,0)}function T(t){return setTimeout(t,0,{__ty_ignore:!0})}function C(){}function A(){var t=window&&window.performance;return t&&t.timing&&t.timing.navigationStart&&t.now?Math.round(t.timing.navigationStart+t.now()):+new Date}function w(t){return function(){if(null!==t){var e=t;t=null,e.apply(this,arguments)}}}function O(t){return t?ii(t)?t.length:e.ArrayBuffer&&t instanceof ArrayBuffer?t.byteLength:e.Blob&&t instanceof Blob?t.size:t.length?t.length:0:0}function k(){this.events={}}function N(t,e){return setTimeout(t,e||0,{__ty_ignore:!0})}function P(t,e){wc[t]=e}function I(t){t=t||{},this._contexts=t.contexts||null,this._name=t.name}function R(){Oc.scope||(Oc.scope=new I({name:"ROOT"}))}function D(){R(),Oc.scope.setContext.apply(Oc.scope,arguments)}function L(){R(),Oc.scope.setExtraContext.apply(Oc.scope,arguments)}function j(t,e,n){if(t&&e){n||(n="scope");var r=e?e.getData():null;return r&&(t[n]=r),t}}function H(t,e,n){return n||(e===ec?n=oc:e===nc&&(n=sc)),"".concat(t,"_").concat(e||Rc,"_").concat(n||Dc)}function q(t){if(t&&ci(t)){var n=t.type,r=t.name,a=t.handler,i=t.options;if(!(null==Ic[n]||r&&b(Ic[n],r)<0||!si(a)||i&&!ci(i))){var o=H(n,r,i&&i.position);Lc[o]||(Lc[o]=[]),Lc[o].push(t),n===Ks&&(r===Zs&&e.TINGYUN&&e.TINGYUN.inited&&Y({type:Ks,name:Zs}),r===tc&&Oc.pageLoadEventEnd&&Y({type:Ks,name:tc}))}}}function M(t,e){q({type:Ks,name:t,handler:e})}function B(t,e,n){q({type:Vs,name:t,handler:e,options:n})}function U(t,e){q({type:Xs,name:t,handler:e})}function F(t){q({type:$s,handler:t})}function Y(t){var e=t.type,n=t.name,r=t.hookPostion,i=t.args,o=H(e,n,r),s={exist:!1,results:[]};if(Lc[o]){s.exist=!0;var c=t.scope;c||(c=new I);try{a(Lc[o],function(t){var e=t.handler,n=t.options;n=n||{};var r=_(i||{},{scope:c}),a=e.call(c,r);s.results.push(a)})}catch(u){}}return s}function G(t,e){return Ic[t]&&b(Ic[t],e)>-1}function z(){return Kc}function J(t){return ii(t)||(t=ai(t)),t}function W(t,e){e=e||C;var n=new Image;yi(n,Oi,function(){("loaded"==n.readyState||4==n.readyState)&&e(null)},!1),yi(n,Ti,function(){e(null)},!1),yi(n,Si,function(){e(Si)},!1),n.src=t}function K(t,e){var n=t.url,r=t.data,a=(t.header,t.callback),i=new XDomainRequest;i[Li]=!0,i.open(Xc,n),i.onload=function(){a(null,i.responseText),e()},i.onerror=function(t){a(t),e()},Vc(function(){i.send(J(r))})}function V(t,e){var n=t.url,r=t.data,a=t.header,i=t.callback,o=w(i),s=new qc;s[Li]=!0,s.overrideMimeType&&s.overrideMimeType("text/html"),s.onreadystatechange=function(){4==s.readyState&&200==s.status&&(o(null,s.responseText),e())},s.onerror=function(){o(),e()};try{s.open(Xc,n,!0);for(var c in a)s.setRequestHeader(c,a[c]);s.send(J(r))}catch(u){e()}}function X(t,e){var n=t.url,r=t.data,a=(t.header,t.callback),i=Bc.sendBeacon(n,J(r));i&&(a&&a(),e())}function $(t){this.size=t||100,this.queue=[],this.running=!1}function Q(){$c=Nc=V,Qc=!1}function Z(t){Pc=new $(t)}function tt(t){Pc.add(t)}function et(t){rt(t,tu)}function nt(t){rt(t,eu)}function rt(t,e){var n="ok";return t?void e.push(t):n=e.length?e.join("\n"):n}function at(){var t=this;t.xhrs={},t.errs=[],k.call(t)}function it(){var t="";try{t=e.location.protocol}catch(n){}return b(du,t)<0&&(t=fu),t}function ot(){var t,e=Gc.pageProtocol;if(e){t=e;var n=e.indexOf(":");n>-1&&(t=e.substring(0,n))}return t}function st(t){try{return p(t)}catch(e){et(e&&e.message)}return null}function ct(t,e,n){if(null==t[e]||oi(t[e]))oi(t[e])?t[e].push(n):t[e]=n;else{var r=t[e];t[e]=[r],t[e].push(n)}}function ut(t){return t.send_protocol?t.send_protocol:Gc.pageProtocol!==lu&&/^https/i.test(t&&t.protocol||Gc.pageProtocol)?"https:":lu}function lt(t){if(!t||!ii(t))return"";var e,n=t.indexOf("?");return n>=0&&(e=t.substring(n+1)),e}function ft(t){var e=lt(t),n=mt(e);return{queryObj:n,queryString:e}}function dt(t){var e=lt(t);return mt(e)}function pt(t){return t&&t.indexOf("?")&&t.lastIndexOf("=")&&t.lastIndexOf("=")>t.indexOf("?")?dt(t):{}}function ht(t){var e={};return t=t||"",ii(t)&&t?e=mt(t):e}function mt(t){var e={};return t&&a(t.split("&"),function(t){var n=t.split("="),r=vt(n[0]),a=vt(n[1]);if(ii(a)){var i=st(a);null!=i&&(a=i)}r&&null!=a&&ct(e,r,a)}),e}function vt(t){try{return decodeURIComponent(t)}catch(e){}return null}function gt(t){var e=[];return a(t,function(t,n){var r=y(n)+"="+y(t);e.push(r)}),e.join("&")}function yt(t,e){var n=gt(e);return t+=(t.indexOf("?")>0?"&":"?")+n}function _t(t,e){return e?ou+"//"+t:t}function xt(t){ou=ut(t)}function bt(){e.TINGYUN_RELEASE&&e.TINGYUN_RELEASE.id&&(Gc.releaseId=e.TINGYUN_RELEASE.id)}function Et(t){t[0]&&(Jc.sid=t[0]),t[1]&&(Jc.__s=+t[1])}function St(){delete Jc.sid,delete Jc.__s}function Tt(){return Gc.sessionMode==yc}function Ct(){var t=su(ls);return t?t.split(ps):null}function At(t){t&&3===t.length&&cu(ls,t.join(ps))}function wt(){var t=Ot();Et(t)}function Ot(){var t=A(),e=[Ei(),t,t];return At(e),e}function kt(){var t=A(),e=Ct();Nt(e)?wt():(e[2]=t,At(e))}function Nt(t){return!t||3!==t.length||A()-+t[2]>ds}function Pt(){var t=su(fs);return t?t:cu(fs,Ei())}function It(){return su(us)}function Rt(t){if(null!=t){var e=It();null!=e&&t!==e&&wt(),cu(us,t)}}function Dt(t){null!=t&&cu(fs,t)}function Lt(){var t={did:Pt()},e=It();return e&&(t.uid=e),t}function jt(t,e){var n=!0;if(t.beacon_config&&ci(t.beacon_config)){var r=ot(),a=r&&t.beacon_config[r];a&&(t.beacon=a,n=!1)}e.relativeBeaconProtocol=n}function Ht(t){var n=Lt(),r=_({url:e.location.href},Jc,n,t||{},Gc.baseInfo,au||{});return bt(),Gc.releaseId&&(r.rid=Gc.releaseId),r}function qt(t){var e=_t(zc.beacon,Gc.relativeBeaconProtocol);return t=Ht(t),{beacon:e,query:t}}function Mt(t){var e=t.beacon,n=t.path,r=t.query;return yt("".concat(e).concat(n),r)}function Bt(t,e){var n=!1;return a(t,function(t){var r=e.call(this,t);return r?(n=!0,!1):!0}),n}function Ut(){return j({type:to,optCustomParam:Oc.opt_custom_param},Oc.scope)}function Ft(t,e){if(t){Tt()&&kt(),e=e||{};var n=e.requestInfo;n||(n=qt()),_(n.query,e.query||{},{ps:e.crossPage||t.type===io?1:0,__r:A()}),n.path="/action";var r=[e.commonActionInfoMessage?e.commonActionInfoMessage:Ut(),t];n.data=r;var i=Y({type:$s,args:n,scope:Oc.scope});if(!i.exist||!Bt(i.results,function(t){return t===!1})){pu&&(pu=!1,d());try{var o=[];a(n.data,function(t){var e=Yt(t);e&&o.push(e+ai(t))});var s=o.join("\n"),c=Mt(n);ru.emit("send",c,s,function(){e.cb&&e.cb.call(null,t)})}catch(u){}}}}function Yt(t){var e="";return e=t.type===to?mo:t.type===eo?uo:t.type===no?lo:t.type===ao?po:t.type===ro?fo:t.type===io?ho:t.type===so?vo:t.type===Sc?Tc:t.type}function Gt(t,e){var n;return t&&(n=!0,a(t,function(){return n=!1},e)),!!n}function zt(){var t={};return a(vu,function(e){t[e]={current:0,children:0}}),t}function Jt(t,e){a(t,function(t){t.cid===e.id&&(t.items=e.items||[])})}function Wt(t,e){a(t,function(t){a(e,function(e){t.cid===e.id&&(t.state||(t.state=e.state),t.items=e.items||[])})}),a(e,function(t){Wt(t.items,t.children)})}function Kt(t){t=t||{},this.id=++Oc.uniqueId,this.parent=t.parent||null,this.children=[],this.name=t.name||"",this.type=t.type||eo,this.subType=this.type===eo?t.subType||"click":t.subType,this.items=[],this.remain=zt(),this.s=t.s||A(),this.e=null,this.data=t.data,this.state=yo,this.crossPage=t.crossPage||!1,this.callback=t.callback||{},this.endLock=t.endLock;var e=this;null==this.parent&&this.type!==io&&(this.i=N(function(){e.timeout()},zc.event_timeout)),this.closed=!1,this.isTimeout=!1,this.cleared=!1,this.stateChanged=!1,this.actionCount={ajax:this.type===no?1:0,iframe:this.type===ao?1:0},this.sent=!1,this.sendOptions={},this.speBinded=!1,this.spe=null,this.waitingSpeEnd=!1,this.waitingSpeTimer=null,null!=this.parent&&this.parent.children.push(this),this.eventData=null,this.resource={handler:{},loaded:{},srcs:{}}}function Vt(t){Et([t.id,t.startTime]),gu=t}function Xt(t,e,n){if(!Tt()){var r={id:t||Ei(),startTime:A()};return ii(e)&&(r.name=e),zc.session_handler&&zc.session_handler.create&&zc.session_handler.create.call(this,r),Vt(r),Zt(xc,n),r}}function $t(t,e){Tt()||(zc.session_handler&&zc.session_handler.end&&(!t&&gu&&(t=gu.id),zc.session_handler.end.call(this,t)),Zt(Ec,e),St(),gu=null)}function Qt(t){Tt()||gu&&ci(t)&&Zt(bc,t)}function Zt(t,e){if(gu){var n=gu,r=n.id,a=n.startTime,i=n.name,o={type:_c,id:r,time:A(),startTime:a};i&&(o.name=i),e&&(o.scope={contexts:e}),Kt.buildImmediateAction(_c,t,o)}}function te(){if(zc.session_handler&&zc.session_handler.init){var t;try{t=zc.session_handler.init.call(null)}catch(e){}t&&Vt(t)}}function ee(t){function e(t,e,r){var a=r||"log",i=n[t]||(n[t]={});i[a]=i[a]||"",i[a]+=e}var n={},r=et();if(e("Status",r,"ok"!==r),e("Debug",nt()),a(_u,function(t,n){e("Timeline",n+": "+t.toString())}),!t&&xu)console.log("[TingYun Agent Diagnosis]\n"),a(n,function(t,e){var n=console[e];a(n,function(t,e){console[e](t)})});else{if(t!==Di)return ai(n);Mc.href=Mc.href+"#"+ai(n)}}function ne(t){bu&&t()}function re(t){return function(){bu&&t.apply(this,arguments)}}function ae(){bu=!1}function ie(t){return t.loadEventEnd||t._end}function oe(n,r){var i=r.performance||{},o=i.timing,s=o&&o.navigationStart?o.navigationStart:t,c=0;if(Ac[cc]&&Ac[cc]>0?(c=Ac[cc],n.__fp=Tu):i.getEntriesByName&&o?(c=o.domLoading,a(Ac.resources,function(t){var e=i.getEntriesByName(t);if(1===e.length){var n=e[0].responseEnd;n>c&&(c=n)}}),c-=s,n.__fp=wu):e.TINGYUN&&e.TINGYUN[ks]&&(c=e.TINGYUN[ks]-s,0>c&&(c=0),n.__fp=Ou),!c||0>=c){if(r.chrome&&r.chrome.loadTimes){var u=r.chrome.loadTimes();u&&u.firstPaintTime&&(c=1e3*u.firstPaintTime-s,n.__fp=Cu)}else o&&o.msFirstPaint&&(c=o.msFirstPaint-s,n.__fp=Au);(!c||0>=c)&&(c=0,n.__fp=Su)}return Math.round(c)}function se(n,r){var i=r.performance||{},o=i.timing||{},s=o.navigationStart||t,c=n.fp||0;if(n.__fs=Du,Ac[uc])c=Ac[uc],n.__fs=Nu;else if(Ac.lcpStopTime)c=Ac.lcpStopTime-s,n.__fs=Pu;else if(ce()){var u=Ac.imageResources||[],l=e.innerHeight,f=e.innerWidth;l||(l=Hc.documentElement.clientHeight),f||(f=Hc.documentElement.clientWidth);var d=[];u.length>0?a(u,function(t){le(t.element,l,f)&&d.push(t)}):si(i.getEntriesByName)&&a(Hc.querySelectorAll("img"),function(t){le(t,l,f)&&d.push({element:t})});var p=(o.loadEventEnd||ru.loadEventEnd)-s;a(d,function(t){if(t.loadTime){var e=t.loadTime-s;e>c&&(c=e,n.__fs=Ru)}else if(t.element&&t.element.src){var r=i.getEntriesByName(t.element.src);if(r.length){var a=r[0],o=a.responseEnd;a.fetchStart<=p&&o>c&&(c=o,n.__fs=Iu)}}})}return c<=n.fp&&(c=n.fp||0,n.__fs=Du,0>=c&&(c=0,n.__fs=ku)),Math.round(c)}function ce(t){var e=!0,n=Hc.createElement("img");return n.getBoundingClientRect||(e=!1),e}function ue(t){if(!t)return!1;if(!zc.fs_resources||0===zc.fs_resources.length)return!0;var e=!1;return a(zc.fs_resources,function(n){return t.indexOf(n)>-1?(e=!0,!1):void 0}),e}function le(t,e,n){return t.src&&ue(t.src)&&fe(de(t),e,n)&&!pe(t)}function fe(t,n,r){if(t){var a=e.pageYOffset,i=t.top+(0===a?0:a||Hc.scrollTop||0)-(Hc.clientTop||0);if(i>=n)return!1;var o=t.left;return o>=0&&r>o}return!1}function de(t){if(z())return si(t.getBoundingClientRect)?t.getBoundingClientRect():void 0;var e;try{e=t.getBoundingClientRect?t.getBoundingClientRect():void 0}catch(n){}return e}function pe(t){return mu.reliableHiddenOffsets()?t.offsetWidth<=0&&t.offsetHeight<=0&&!t.getClientRects().length:he(t)}function he(t){for(;t&&1===t.nodeType;){if("none"===me(t)||"hidden"===t.type)return!0;t=t.parentNode}return!1}function me(t){return t.style&&t.style.display}function ve(e,n){var r=n.performance||{},a=r.timing||{},i=a.navigationStart||t,o=0;a&&(o=a[Co]||a.domInteractive||a.domLoading||o),0>=o?(ru.domContentLoadedEventStart?(o=ru.domContentLoadedEventStart,e.__dr=Hu):(o=ru._end,e.__dr=qu),0>=o&&(e.__dr=Lu)):e.__dr=ju;var s=o-i;return 0>s&&(s=0),Math.round(s)}function ge(e,n,r){e.loadEventEnd=e.le;var a=n.performance&&n.performance.timing||{},i=a.navigationStart||t,o=0;if(r&&r.hasChildType(no))o=A()-i;else{var s=(a.loadEventEnd||ru.loadEventEnd)-i,c=[e.fs,e.dr,e.fp,s];o=Math.max.apply(null,c)}return Math.round(o)}function ye(e){function n(t){return o[t]>0?o[t]-s:0}var r={},i=e.performance||{},o=i.timing||{},s=e.TINGYUN&&e.TINGYUN.globalStart||t,c=e.TINGYUN&&e.TINGYUN.currentAgent||ru;if(o){ne(function(){var t=Eu.t={};a(o,function(e,n){si(e)||(t[n]=e)},!0)}),s=o.navigationStart,r={ns:s,f:n(bo),qs:n(Eo),rs:n(So),re:n(To),os:n(Co),oe:n(Ao),oi:n(wo),oc:n(Oo),ls:n(ko),le:n(No),tus:n(Po),tue:n(Io)};var u=n(Ro),l=n(Do),f=n(Lo),d=n(jo),p=n(Ho),h=n(qo);if(r.cs=p,r.ce=h,r.ds=u,r.de=l,(d-f>0||d>0)&&(r.es=f,r.ee=d),0==r.le){var m=ie(c);r.ue=m-s}c&&(c._le=r.ue||r.le),o[Mo]?r.sl=n(Mo):r.sl=0}else r={t:s,le:ie(c)-s};return r.je=c&&c.errs&&c.errs.length||0,r}function _e(t){if(!t)return{};var e=ye(t);return e.fp=oe(e,t),e.dr=ve(e,t),e.fs=se(e,t),e.le=ge(e,t),xe(e)}function xe(t){var e={f:t.f,fp:t.fp,fs:t.fs,dr:t.dr,le:t.le,loadEventEnd:t.loadEventEnd,je:t.je,load:t.load};return _(e,Oc.pageServerData),Oc.iframeMetric=e,e}function be(){Oc.enableLCPObserver=!1;try{a(Oc.performanceObserver,function(t){t&&t.disconnect()})}catch(t){}}function Ee(){Ac.lcpStopTime=A(),Oc.enableLCPObserver=!1;try{var t=Oc.performanceObserver[uc];t&&t.disconnect()}catch(e){}}function Se(t,e,n){t&&t.context&&t.context.parent&&(t.pcid=t.context.parent.id,t.context.parent.updateRemain(1,e),t.context.parent.items.push(t.context.data),n&&t.context.parent.children.push(t.context))}function Te(t){if(!t)return!1;var e=Gc.eventResources.length>0,n=Gc.eventResourcesIgnore.length>0;return e&&n?Ce(t)&&Ae(t):e?Ce(t):n?Ae(t):!0}function Ce(t){var e=!1;return a(Gc.eventResources,function(n){return t.indexOf(n)>-1?(e=!0,!1):void 0}),e}function Ae(t){var e=!0;return a(Gc.eventResourcesIgnore,function(n){return t.indexOf(n)>-1?(e=!1,!1):void 0}),e}function we(t){return t&&(t.type===io||t.type===eo&&t.subType!==$o)}function Oe(t){var e=Mu.indexOf(t.nodeName)>-1&&Te(t.src)&&!pe(t);if(e){var n=Oc.recentFinishedAjaxContext;if(n&&n.data){var r=A()-n.data.end;if(r<=Gc.resourceAssociateThreshold){var i=Kt.getRootContext(n,function(t){return t.type===io||t.type===eo&&!t.subType===$o});i&&i.addResource(t)}}}a(t.childNodes,Oe)}function ke(){if(Gc.spaMetricEnable&&si(window.MutationObserver)){var t=document.getElementsByTagName("body"),e=t&&t[0];if(e){var n={childList:!0,subtree:!0},r=function(t){a(t,function(t){a(t.addedNodes,Oe)})};try{yu=new MutationObserver(r),yu.observe(e,n)}catch(i){}}}}function Ne(){var t=Hc.getElementsByTagName("img");a(t,function(t){t.complete||t[ws]||(t[ws]=!0,yi(t,Ti,function(){Ac.imageResources.push({loadTime:A(),element:t})}))})}function Pe(t){var e=Hc.createElement("script");e.type="text/javascript";try{e.appendChild(Hc.createTextNode(t))}catch(n){e.text=t}Hc.getElementsByTagName("head")[0].appendChild(e)}function Ie(){function t(t){try{var e=t.getEntries();e&&a(e,function(t){t.entryType===uc&&Oc.enableLCPObserver?Ac[uc]=t.renderTime||t.loadTime:t.entryType===cc&&t.name===lc&&(Ac[cc]=t.startTime)})}catch(n){}}if(e.PerformanceObserver){var n=[cc];Gc.lcpEnable&&n.push(uc);var r=[],i=e.PerformanceObserver.supportedEntryTypes||[];if(a(n,function(t){i.indexOf(t)>-1&&r.push(t)}),ne(function(){Eu.et=r}),0!=r.length)try{a(r,function(n){Oc.performanceObserver[n]=new e.PerformanceObserver(t),Oc.performanceObserver[n].observe({type:n,buffered:!0})})}catch(o){}}}function Re(t){Ie(),Uu.on(Ti,w(function(){n();var e=A();ne(function(){Eu.load=e}),t.loadEventEnd=e,clearInterval(Bu)})),a([Ti,Ci,Ai,wi],function(t){yi(e,t,function(e){ne(function(){(Eu.e[t]||(Eu.e[t]=[])).push(A())}),Uu.emit(t,e)})});var n=w(function(){ke();var n=A();if(ne(function(){Eu.end=n}),t.domContentLoadedEventStart=n,z()&&e.performance&&e.performance.getEntriesByName){if(!Hc.querySelectorAll)return;Ac.resources=Ac.resources||[],a(Hc.querySelectorAll("head>link,head>script"),function(t){var e;"LINK"==t.tagName?e=t.href:"SCRIPT"!=t.tagName||t.defer||t.async||(e=t.src),e&&Ac.resources.push(e)})}});if(z()&&yi(Hc,Ni,n),yi(Hc,Oi,function(t){Hc.readyState===ki&&n()}),(!z()||e.performance&&!e.performance.getEntriesByName)&&(Bu=setInterval(Ne,Os)),!z())try{Pe("if(window.TINGYUN) {window.TINGYUN.".concat(ks,"=+new Date();}"))}catch(r){}}function De(t){this.limit=t,this.reset()}function Le(t,e,n,r,a){return String(t)+String(e)+String(n)+String(r)+String(a)}function je(t,e,n,r){return String(t)+String(e)+String(n)+String(r)}function He(t,e,n,r,a,i,o,s){var c=this;c.id=t,c.time=A(),c.msg=e,c.lineno=r,c.colno=a,c.filename=n,c.count=1,c.stack=i&&i.stack||"",c.module=o,c.trigger=s||zu,c.error=i,c.fix();var u=je(e,r,a,o),l=Wu[u];c.ep=l?0:1,Wu[u]=!0,c.fep=0,c.trace={},this.recordFileName()}function qe(e){var n=function(t){var e=[];return a(t,function(t){e.push(t.toObject())}),e}(Ju.c);if(!n||!n.length)return null;var r={fu:Yu?Yu:Yu++,os:parseInt((A()-(Ac.pfStart||t))/1e3)};Cc.ulabel&&(r.ulabel=Cc.ulabel),Kt.buildImmediateAction(so,null,null,{actionOptions:_(r,{items:n})}),Ju.reset()}function Me(t,e,n,r,i,o,s){if(e||!Gc.ignoreNoFilePropError){var c=!1;if(a(Gc.domains,function(t){return c=t.test(e),c?!1:void 0}),!c){var u=i&&i.moduleId,l=Le(e,t,n,r,u),f=Ju.get(l);f?f.increase():(f=new He(l,t,e,n,r,i,u,o),Ju.add(l,f),ru.errs&&ru.errs.push(f));var d=f.initTraceInstance();f.triggerActionHook(d);try{f.trace[d].scope.setContext(s)}catch(p){}}}}function Be(){var t=e.onerror;e.onerror=function(e,n,r,a,i){return Me(e,n,r,a,i),si(t)?t.apply(this,arguments):void 0},e.onerror._ty=!0}function Ue(){var t=e.onerror;t&&t._ty||Be()}function Fe(t,e){if(t){var n=t.message||"",r=t.stack,i="",o=0,s=0;if(r){var c=r.split(/\n/);a(c,function(t,e){if(t&&(t=t.trim()),t&&0===t.indexOf("at ")){var n=t.indexOf("("),r=t.indexOf(")");if(n&&r){var a=n+1;a>r&&(a=r);var c=t.substring(a,r);if(c){var u=c.split(":");u&&u.length>2&&(i=(u.slice(0,u.length-2)||[]).join(":"),o=+u[u.length-2],s=+u[u.length-1])}}}return i&&ui(o)&&o>0&&ui(s)&&s>0?!1:void 0})}Me(n,i,o,s,{stack:r},Gu,e)}}function Ye(){var t=xi();return t?Be():yi(e,Si,function(t){var n,r,a,i,o;(t instanceof e.Event||e.ErrorEvent&&t instanceof e.ErrorEvent)&&(n=t.message||t.error&&(t.error.message||t.error.constructor.name)||"",r=t.lineno||0,a=t.colno||0,i=t.filename||t.error&&t.error.filename||t.target&&t.target.baseURI||"",o=t.error),Me(n,i,r,a,o)}),Uu.on([Ti,Ci,Ai,wi],function(t){qe()}).on(Ti,function(){t&&Vc(Ue)}),setInterval(qe,Fu,!0)}function Ge(t,e,n){if(t&&n&&si(n)){var r=t[e];if(!r||!r._wrapped){var a=n(r,e);return a&&(a._wrapped=!0),t[e]=a,a}}}function ze(t,n){return function(r){if(e[$i].hook&&e[$i].hook.eventCb&&tn(r)){var a={originalCallback:t,eventHandlerType:n};return e[$i].hook.eventCb.call(this,arguments,a)}return t.apply(this,arguments)}}function Je(t,e,n){return n===$u?ze(t,e):(t.handleEvent=ze(t.handleEvent,e),t)}function We(t){return si(t)}function Ke(t){return ci(t)&&si(t.handleEvent)}function Ve(t){var e;return We(t)?e=$u:Ke(t)&&(e=Qu),{isValid:t&&e,listenerType:e}}function Xe(t){return function(){var e=arguments[0],n=arguments[1],r=arguments[2],a=!0;r&&ci(r)&&r[Wo]&&(a=!1);var i=Ve(n),o=i.isValid,s=i.listenerType;if(a&&Xu.indexOf(e)>-1&&o){var c;if(n[Cs]&&n[Cs][this])c=n[Cs][this];else{var u=Je(n,Qo,s);s===$u&&(n[Cs]||(n[Cs]={},n[Cs][As]=0),n[Cs][this]={listener:u,options:arguments[2]},n[Cs][As]++,c=n[Cs][this])}c&&(c.listener&&(arguments[1]=c.listener),c.options&&(arguments[2]=c.options))}return t&&t.apply(this,arguments)}}function $e(t){return function(e,n){var r;try{r=t&&t.apply(this,arguments)}finally{try{if(n&&Xu.indexOf(e)>-1){var a=n[Cs];a&&a[this]&&a[this].listener&&(null!=a[this].options?this.removeEventListener(e,a[this].listener,a[this].options):this.removeEventListener(e,a[this].listener),a[this]=null,a[As]--,a[As]<=0&&(n[Cs]=null,delete n[Cs]))}}catch(i){}}return r}}function Qe(){e.EventTarget&&(Ge(e.EventTarget.prototype,"addEventListener",function(t){return Xe(t)}),Ge(e.EventTarget.prototype,"removeEventListener",function(t){return $e(t)}))}function Ze(){Object.getOwnPropertyDescriptor&&Object.defineProperty&&a(Xu,function(t){var n="on"+t,r=Object.getOwnPropertyDescriptor(e.HTMLElement.prototype,n),a=r.get,i=r.set;Object.defineProperty(e.HTMLElement.prototype,n,{get:function(){return a.apply(this,arguments)},set:function(){var t=arguments[0];t&&(arguments[0]=Je(t,Zo,$u)),i&&i.apply(this,arguments)},configurable:!0,enumerable:!0})})}function tn(t){return t&&t.target instanceof e.HTMLElement&&t.currentTarget instanceof e.HTMLElement}function en(t){return Vu.call(t)}function nn(t){t=t||{},this._capacity=t.capacity||10,this._cache={},this._cacheKeys=[],this._size=0}function(){}