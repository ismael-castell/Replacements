;
(self.AMP=self.AMP||[]).push({m:0,v:"2206071918001",n:"amp-carousel",ev:"0.2",l:!1,f:function(t,i){!function(){var i,n=function(){var t=this;this.promise=new Promise((function(i,n){t.resolve=i,t.reject=n}))};function s(t,i){return(s=Object.setPrototypeOf||function(t,i){return t.__proto__=i,t})(t,i)}function r(t){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function e(t,i){if(i&&("object"===o(i)||"function"==typeof i))return i;if(void 0!==i)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}Array.isArray;var h=Object.prototype;function u(t,i,n,s,r,o,e,h,u,a,l){return t}h.hasOwnProperty,h.toString;var a,l,c=!0,f=!0;function m(t){return function(t,i){u(1===i.length),t.innerHTML=i[0];var n=t.firstElementChild;return u(n),u(!n.nextElementSibling),t.removeChild(n),n}(a,t)}var p=["Webkit","webkit","Moz","moz","ms","O","o"],v={"getPropertyPriority":function(){return""},"getPropertyValue":function(){return""}};function d(t){var i=t.replace(/[A-Z]/g,(function(t){return"-"+t.toLowerCase()}));return p.some((function(t){return i.startsWith(t+"-")}))?"-".concat(i):i}function b(t,i,n){if(y(i))return i;var s;l||(s=Object.create(null),l=s);var r=l[i];if(!r||n){if(r=i,void 0===t[i]){var o=function(t){return t.charAt(0).toUpperCase()+t.slice(1)}(i),e=function(t,i){for(var n=0;n<p.length;n++){var s=p[n]+i;if(void 0!==t[s])return s}return""}(t,o);void 0!==t[e]&&(r=e)}n||(l[i]=r)}return r}function g(t,i){var n=t.style;for(var s in i)n.setProperty(d(b(n,s)),String(i[s]),"important")}function x(t,i,n,s,r){var o=b(t.style,i,r);if(o){var e=s?n+s:n;t.style.setProperty(d(o),e)}}function w(t,i){return t.getComputedStyle(i)||v}function y(t){return t.startsWith("--")}function S(t,i,n){var s=0,r=0,o=null;function e(){s=0;var h,u=n-(t.Date.now()-r);u>0?s=t.setTimeout(e,u):(h=o,o=null,i.apply(null,h))}return function(){r=t.Date.now();for(var i=arguments.length,h=new Array(i),u=0;u<i;u++)h[u]=arguments[u];o=h,s||(s=t.setTimeout(e,n))}}self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var z=self.__AMP_LOG;function M(t,i){throw new Error("failed to call initLogConstructor")}function k(t){return M()}function N(t,i,n,s,r,o,e,h,u,a,l){return t}function j(t,i){return A(t=function(t){return t.__AMP_TOP||(t.__AMP_TOP=t)}(t),i)}function E(t,i){return A(R(P(t)),i)}function O(t,i){return C(R(t),i)}function P(t){return t.nodeType?(n=t,i=(n.ownerDocument||n).defaultView,j(i,"ampdoc")).getAmpDoc(t):t;var i,n}function R(t){var i=P(t);return i.isSingleDoc()?i.win:i}function A(t,i){N(I(t,i));var n=_(t)[i];return n.obj||(N(n.ctor),N(n.context),n.obj=new n.ctor(n.context),N(n.obj),n.context=null,n.resolve&&n.resolve(n.obj)),n.obj}function C(t,i){var n=_(t)[i];return n?n.promise?n.promise:(A(t,i),n.promise=Promise.resolve(n.obj)):null}function _(t){var i=t.__AMP_SERVICES;return i||(i=t.__AMP_SERVICES={}),i}function I(t,i){var n=t.__AMP_SERVICES&&t.__AMP_SERVICES[i];return!(!n||!n.ctor)}var T,L=function(t){return function(t,i,s,r){var o=O(t,i);if(o)return o;var e=P(t);return e.whenExtensionsKnown().then((function(){var t=e.getExtensionVersion(s);return t?j(e.win,"extensions").waitForExtension(s,t):null})).then((function(s){return s?function(t,i){return function(t,i){var s=C(t,i);if(s)return s;var r,o,e,h,u=_(t);return u[i]=(o=(r=new n).promise,e=r.reject,h=r.resolve,o.catch((function(){})),{obj:null,promise:o,resolve:h,reject:e,context:null,ctor:null}),u[i].promise}(R(t),i)}(t,i):null}))}(t,"amp-analytics-instrumentation","amp-analytics")},B=function(t){return E(t,"owners")};function U(t,i){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},s=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];L(t).then((function(r){r&&r.triggerEventForTarget(t,i,n,s)}))}function W(t,i,n,s){var r=t,o=n,e=function(t){try{return o(t)}catch(t){var i,n;throw null===(i=(n=self).__AMP_REPORT_ERROR)||void 0===i||i.call(n,t),t}},h=function(){if(void 0!==T)return T;T=!1;try{var t={get capture(){return T=!0,!1}};self.addEventListener("test-options",null,t),self.removeEventListener("test-options",null,t)}catch(t){}return T}(),u=!(null==s||!s.capture);return r.addEventListener(i,e,h?s:u),function(){null==r||r.removeEventListener(i,e,h?s:u),o=null,r=null,e=null}}function H(t,i,n,s){var r={detail:n};if(Object.assign(r,s),"function"==typeof t.CustomEvent)return new t.CustomEvent(i,r);var o=t.document.createEvent("CustomEvent");return o.initCustomEvent(i,!!r.bubbles,!!r.cancelable,n),o}function V(t,i,n,s){return W(t,i,n,s)}function D(t){return t.detail}function F(t,i,n,s){var r=n,o=W(t,i,(function(t){try{r(t)}finally{r=null,o()}}),s);return o}function X(t,i){return t>0&&i>0?t%i:(t%i+i)%i}function Z(t,i,n){return u(i<=n),Math.min(Math.max(t,i),n)}var q="amp-carousel:indexchange",G="amp-carousel:scrollstart",J="amp-carousel:scrollpositionchange",K=function(){function t(t){var i=this,n=t.advanceable,s=t.element,r=t.scrollContainer,o=t.win;this.t=o,this.mW=r,this.pW=n,this.vW=0,this.dW=!1,this.bW=1,this.gW=1e3,this.xW=!1,this.wW=!1,this.yW=null,this.SW=Number.POSITIVE_INFINITY,this.xi=s.getAmpDoc(),this.zW(this.gW),this.mW.addEventListener("scroll",(function(){return i.MW()}),!0),V(this.mW,"touchstart",(function(){return i.kW()}),{capture:!0,passive:!0}),V(s,q,(function(t){i.NW(t)}))}var i=t.prototype;return i.stop=function(){this.wW=!0},i.pause=function(){this.xW=!0},i.resume=function(){this.xW=!1,this.jW()},i.updateAutoAdvance=function(t){this.dW=t,this.jW()},i.updateAutoAdvanceCount=function(t){this.bW=t,this.jW()},i.updateAutoAdvanceInterval=function(t){this.gW=Math.max(t,1e3),this.zW(this.gW),this.jW()},i.updateMaxAdvances=function(t){this.SW=t},i.zW=function(t){var i=this,n=S(this.t,(function(){n==i.yW&&i.EW()}),t);this.yW=n},i.kW=function(){var t=this;this.pause(),F(window,"touchend",(function(){t.resume()}),{capture:!0,passive:!0})},i.OW=function(){return this.dW&&this.xi.isVisible()&&!this.xW&&!this.wW&&this.vW<this.SW},i.MW=function(){this.jW()},i.NW=function(t){var i=D(t).actionSource;i&&4!==i&&this.stop()},i.EW=function(){this.OW()&&(this.pW.advance(this.bW,{actionSource:4,allowWrap:!0}),this.vW+=this.bW)},i.jW=function(){this.OW()&&this.yW()},t}(),Q=function(){function t(t){var i=this,n=t.element,s=t.runMutate,r=t.scrollContainer,o=t.stoppable,e=t.win;this.t=e,this.mW=r,this.PW=s,this.RW=[],this.AW=1,this._W=!1,this.IW=!1,this.Yr=0,n.addEventListener("focus",(function(){o.stop()}),!0),n.addEventListener(q,(function(t){i.TW(t)}))}var i=t.prototype;return i.updateMixedLength=function(t){this._W=t},i.updateUi=function(){var t=this;this.IW||(this.IW=!0,this.PW((function(){t.IW=!1,t.LW(),t.BW()})))},i.updateSlides=function(t){this.RW=t,this.updateUi()},i.updateVisibleCount=function(t){this.AW=t,this.updateUi()},i.UW=function(){return this._W||this.AW>=2},i.LW=function(){this.UW()?(this.mW.removeAttribute("aria-live"),this.mW.setAttribute("role","list"),this.RW.forEach((function(t){t.setAttribute("role","listitem")}))):(this.mW.setAttribute("aria-live","polite"),this.mW.removeAttribute("role"),this.RW.forEach((function(t){t.removeAttribute("role")})))},i.BW=function(){var t=this;this.RW.forEach((function(i,n){var s=!t.UW()&&n!==t.Yr;i.setAttribute("aria-hidden",s)}))},i.TW=function(t){var i=this,n=D(t).index;this.Yr=n,this.PW((function(){i.BW()}))},t}(),Y="start";function $(t,i){var n=i.getBoundingClientRect(),s=n.bottom,r=n.height,o=n.left,e=n.right,h=n.top,u=n.width;return{start:0==t?o:h,end:0==t?e:s,length:0==t?u:r}}function tt(t,i){var n=$(t,i),s=n.end;return(n.start+s)/2}function it(t,i){return $(t,i).start}function nt(t,i,n){return i==Y?it(t,n):tt(t,n)}function st(t,i,n){x(i,0==t?"width":"height","".concat(n,"px"))}function rt(t,i,n){var s=$(t,i),r=s.end;return s.start<=n&&n<r}function ot(t,i,n,s){return(nt(t,i,s)-nt(t,i,n))/$(t,s).length}function et(t,i,n){!function(t,i,n){0==t?i.scrollLeft=n:i.scrollTop=n}(t,i,function(t,i){return 0==t?i.scrollLeft:i.scrollTop}(t,i)+n)}var ht="i-amphtml-carousel-spacer";function ut(t,i){var n=function(t,i,n){var s=b(t.style,"scrollBehavior",void 0);if(s)return y(s)?t.style.getPropertyValue(s):t.style[s]}(t);x(t,"scrollBehavior","auto"),i(),x(t,"scrollBehavior",n)}function at(t){return t.reduce((function(t,i){return t+i}),0)}var lt=function(){function t(t){var i=this,n=t.element,s=t.initialIndex,r=t.runMutate,o=t.scrollContainer,e=t.win;this.t=e,this.PW=r,this.yl=n,this.mW=o,this.dW=new K({win:e,element:n,scrollContainer:o,advanceable:this}),this.WW=new Q({win:e,element:n,scrollContainer:o,runMutate:r,stoppable:this.dW}),this.HW=S(e,(function(){return i.VW()}),200),this.DW=1,this.FW=Number.POSITIVE_INFINITY,this._W=!1,this.RW=[],this.XW=!0,this.IW=!1,this.ZW=[],this.qW=[],this.GW=[],this.JW=[],this.KW=!1,this.QW=!1,this.YW=0,this.$W=null,this.WV=NaN,this.HV=!1,this.VV=!1,this.XV=void 0,this.ZV=Y,this.JV=0,this.KV=!0,this.QV=!0,this.XA=s||0,this.kd=!1,this.$V=!0,this.tZ=1,this.AW=1,this.mW.addEventListener("scroll",(function(){return i.MW()}),!0),this.mW.addEventListener("scrollend",(function(){return i.iZ()}),!0),V(this.mW,"touchstart",(function(){return i.kW()}),{capture:!0,passive:!0}),V(this.mW,"wheel",(function(){return i.nZ()}),{capture:!0,passive:!0})}var i=t.prototype;return i.next=function(t){this.advance(this.DW,{actionSource:t})},i.prev=function(t){this.advance(-this.DW,{actionSource:t})},i.advance=function(t){var i,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},s=this.XA,r=this.$W,o=this.RW,e=n.actionSource,h=n.allowWrap,u=void 0!==h&&h,a=null!==r?r:s,l=a+t,c=o.length-1,f=0===a,m=a===c,p=l<0,v=l>c,d=t>0&&this.sZ(a)&&this.sZ(l);i=this.isLooping()?X(l,c+1):u?d?0:p&&f||v&&!m?c:p&&!f||v&&m?0:l:d?a:Z(l,0,c),this.goToSlide(i,{actionSource:e})},i.pauseLayout=function(){this.KW=!0,this.dW.pause()},i.resumeLayout=function(){this.KW=!1,this.updateUi(),this.dW.resume()},i.getCurrentIndex=function(){return this.XA},i.getVisibleCount=function(){return this.AW},i.isLooping=function(){return this.kd&&this.RW.length/this.AW>=3},i.goToSlide=function(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=i.actionSource,s=i.smoothScroll,r=void 0===s||s;t<0||t>this.RW.length-1||isNaN(t)||t!==this.XA&&(this.HV||this.rZ()||(this.QW=!1,this.$W=t,this.XV=n,this.oZ(this.RW[t],{smoothScroll:r})))},i.updateAdvanceCount=function(t){this.DW=t},i.updateAlignment=function(t){this.ZV="start"===t?Y:"center",this.updateUi()},i.updateAutoAdvance=function(t){this.dW.updateAutoAdvance(t)},i.updateAutoAdvanceCount=function(t){this.dW.updateAutoAdvanceCount(t)},i.updateAutoAdvanceInterval=function(t){this.dW.updateAutoAdvanceInterval(t)},i.updateAutoAdvanceLoops=function(t){this.FW=t,this.updateUi()},i.updateForwards=function(t){this.KV=t,this.updateUi()},i.updateHideScrollbar=function(t){this.QV=t,this.updateUi()},i.updateHorizontal=function(t){this.JV=t?0:1,this.updateUi()},i.updateLoop=function(t){this.kd=t,this.updateUi()},i.updateMixedLength=function(t){this._W=t,this.WW.updateMixedLength(t),this.updateUi()},i.updateSlides=function(t){var i=t.length;if(i)this.RW=t,this.XA=this.isLooping()?X(this.XA,i):Z(this.XA,0,i-1)||0,this.WW.updateSlides(t),this.updateUi();else{var n=this.yl.tagName.toUpperCase();(z.dev||(z.dev=M())).warn(n,"No slides were found.")}},i.updateSnap=function(t){this.$V=t,this.updateUi()},i.updateSnapBy=function(t){this.tZ=Math.max(1,t),this.updateUi()},i.updateUserScrollable=function(t){this.XW=t,this.updateUi()},i.updateUi=function(){var t=this;this.IW||this.KW||(this.IW=!0,this.PW((function(){t.IW=!1,t.mW.setAttribute("mixed-length",t._W),t.mW.setAttribute("user-scrollable",t.XW),t.mW.setAttribute("hide-scrollbar",t.QV),t.mW.setAttribute("horizontal",0===t.JV),t.mW.setAttribute("loop",t.isLooping()),t.mW.setAttribute("snap",t.$V),g(t.mW,{"--visible-count":t.AW}),t.RW.length&&(t.dW.updateMaxAdvances(t.FW*t.RW.length-1),t.eZ(),t.hZ(),t.uZ(),t.VW(!0))})))},i.updateVisibleCount=function(t){this.AW=Math.max(1,t),this.WW.updateVisibleCount(t),this.updateUi()},i.aZ=function(t,i){this.WV!==t&&(this.WV=t,this.yl.dispatchEvent(H(this.t,q,{"index":t,"total":this.RW.length,"actionSource":i,"slides":this.RW},{bubbles:!0})))},i.lZ=function(t,i){this.XA=t,this.YW=i,this.yl.dispatchEvent(H(this.t,"amp-carousel:offsetchange",{"index":t,"total":this.RW.length,"offset":this.KV?-i:i,"slides":this.RW},{bubbles:!0}))},i.notifyScrollStart=function(){this.yl.dispatchEvent(H(this.t,G,null))},i.cZ=function(){this.yl.dispatchEvent(H(this.t,J,null))},i.kW=function(){var t=this;this.HV=!0,this.XV=3,this.$W=null,this.QW=!1,F(window,"touchend",(function(){t.HV=!1,t.HW()}),{capture:!0,passive:!0})},i.nZ=function(){this.XV=2,this.$W=null,this.QW=!1},i.MW=function(){this.QW?this.QW=!1:(this.VV=!0,this.fZ(),this.notifyScrollStart(),this.HW())},i.iZ=function(){null===this.$W&&this.VW()},i.rZ=function(){return this.VV&&(3===this.XV||2===this.XV)},i.mZ=function(t,i,n){var s=i*n*(this.KV?1:-1);!function(t,i,n){var s=0==t?n:0,r=0==t?0:n;x(i,"transform","translate(".concat(s,"px, ").concat(r,"px)")),g(i,{"--content-transform":"translate(".concat(s,"px, ").concat(r,"px)")})}(this.JV,t,s),t._revolutions=i},i.pZ=function(t){var i=this;this.RW.forEach((function(n){i.mZ(n,0,t)}))},i.vZ=function(){var t=this;return this.RW.map((function(i){return $(t.JV,i).length}))},i.isAtEnd=function(){return!this.isLooping()&&this.dZ()},i.isAtStart=function(){return!this.isLooping()&&this.bZ()},i.dZ=function(){var t=this.mW,i=t.getBoundingClientRect().width*(this.KV?1:-1),n=this.KV?Math.ceil(i):Math.floor(i),s=t.scrollLeft+n,r=t.scrollWidth;return this.KV?s>=r:s<=-r},i.bZ=function(){var t=this.mW.scrollLeft;return this.KV?t<=0:t>=0},i.gZ=function(t){for(var i=[],n=0;n<t;n++){var s=document.createElement("div");s.className=ht,i.push(s)}return i},i.eZ=function(){var t=this,i=this.JV,n=this.RW,s=this.vZ(),r=at(s),o=this.isLooping()?n.length:0;this.ZW.forEach((function(i){t.mW.removeChild(i)})),this.ZW=this.gZ(o),this.ZW.forEach((function(r,o){st(i,r,s[o]),t.mW.insertBefore(r,n[0])})),this.qW.forEach((function(i){t.mW.removeChild(i)})),this.qW=this.gZ(o),this.qW.forEach((function(n,o){st(i,n,s[o]),t.mZ(n,-1,r),t.mW.appendChild(n)})),this.GW.forEach((function(i){t.mW.removeChild(i)})),this.GW=this.gZ(o),this.GW.forEach((function(n,o){st(i,n,s[o]),t.mZ(n,-1,r),t.mW.appendChild(n)})),this.JW=this.ZW.concat(this.qW,this.GW)},i.hZ=function(){var t=this,i=this.RW.length,n=this.ZV===Y,s=1===X(this.AW,2),r=n||s?"0%":"50%";!function(n,s){for(var o=n.length,e=0;e<o;e++)h=n[e],void 0,void 0,u=X(e,i),a=0===X(u,t.tZ),!h.classList.contains(ht)&&t.isLooping()||function(t,i){for(var n in i)x(t,n,i[n])}(h,{"scroll-snap-align":a?t.ZV:"none","scroll-snap-coordinate":a?r:"none"});var h,u,a}(this.mW.children)},i.uZ=function(){var t=this.GW,i=this.ZW,n=this.XA,s=this.RW,r=Math.max(0,s.length-n-1),o=Math.max(0,n-1);i.forEach((function(t,o){var e,h,u,a=(e=n,h=o,u=i.length,(e===h?u:X(e-h,u))>s.length-1);t.hidden=a||o<s.length-r})),t.forEach((function(i,r){var e,h,u,a=(e=n,h=r,u=t.length,(e===h?u:X(h-e,u))>s.length-1);i.hidden=a||r>o}))},i.fZ=function(){var t=this,i=this.ZV,n=this.JW,s=this.JV,r=this.XA,o=this.mW,e=this.RW,h=at(this.vZ()),u=!!n.length,a=u?n:e,l=function(t,i,n,s,r){var o=nt(t,i,n);if(rt(t,s[r],o))return r;for(var e=1;e<=s.length/2;e++){var h=X(r+e,s.length),u=X(r-e,s.length);if(rt(t,s[h],o))return h;if(rt(t,s[u],o))return u}}(s,i,o,a,u?r+e.length:r);if(void 0!==l){var c=a[l],f=l%e.length,m=ot(s,i,o,c);this.lZ(f,m),f!==r&&this.PW((function(){t.xZ(h)}))}},i.VW=function(){var t=this,i=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=this.XV;if(!this.HV&&(this.XV=void 0,this.VV=!1,this.PW((function(){t.cZ()})),this.WV!==this.XA||null!==this.$W||i)){null!==this.$W&&(this.XA=this.$W,this.$W=null,this.YW=0);var s=at(this.vZ());this.PW((function(){t.aZ(t.XA,n),t.lZ(t.XA,t.YW),t.pZ(s),t.uZ(),t.xZ(s),t.wZ()}))}},i.wZ=function(){var t=this.ZV,i=this.JV,n=this.YW,s=this.XA,r=this.mW,o=this.RW[s],e=(ot(i,t,r,o)-n)*$(i,o).length;e&&(this.QW=!0,ut(r,(function(){et(i,r,e)})))},i.oZ=function(t,i){var n=this;(i.smoothScroll?function(t,i){return i()}:ut)(this.mW,(function(){!function(t,i,n,s){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,o=i==Y,e=$(t,s).length,h=o?it(t,s):tt(t,s),u=o?it(t,n):tt(t,n);et(t,n,h-u-r*e)}(n.JV,n.ZV,n.mW,t)}))},i.yZ=function(t,i,n){for(var s=this.XA,r=this.WV,o=this.RW,e=o[s]._revolutions||0,h=n?1:-1,u=1;u<=i;u++){var a=X(s+u*h,o.length);if(a===r&&s!==r)break;var l=o[a],c=a>s!==n?e+h:e;this.mZ(l,c,t)}},i.xZ=function(t){if(this.isLooping()){var i=this.ZV,n=this.RW,s=this.AW,r=i===Y?s-1:0,o=(n.length-1-r)/2,e=(n.length-1+r)/2;this.yZ(t,Math.round(o),!1),this.yZ(t,Math.round(e),!0)}},i.sZ=function(t){var i=this.ZV,n=this.RW,s=this.AW,r=i===Y?s:s/2;return t>=n.length-r},t}(),ct="__AMP_CAROUSEL_NEAR_VIEWPORT",ft="__AMP_CAROUSEL_IN_VIEWPORT",mt=function(){function t(t){var i=t.ampElement,n=t.intersectionElement,s=t.intersectionThreshold,r=void 0===s?.01:s,o=t.nearbyMarginInPercent,e=void 0===o?100:o,h=t.viewportIntersectionThreshold,u=void 0===h?r:h,a=t.viewportIntersectionCallback,l=void 0===a?function(){}:a;this.SZ=i,this.DT=B(i.element),this.zZ=n,this.MZ=r,this.kZ=e,this.NZ=u,this.jZ=l,this.EZ=!1,this.xz=[],this.OZ=null,this.PZ=null,this.Wd=null,this.RZ=!1}var i=t.prototype;return i.setQueueChanges=function(t){this.EZ=t},i.AZ=function(t,i){i?this.DT.scheduleLayout(this.SZ.element,t):this.DT.scheduleUnlayout(this.SZ.element,t)},i.CZ=function(t,i){this.jZ(t,i)},i.Ca=function(){var t=this;if(!(this.OZ&&this.PZ&&this.Wd)){var i=this.SZ.win;this.OZ=new i.IntersectionObserver((function(i){return t._Z(i)}),{root:this.zZ,rootMargin:"".concat(this.kZ,"%"),threshold:this.MZ}),this.PZ=new i.IntersectionObserver((function(i){return t.IZ(i)}),{root:this.zZ,rootMargin:"".concat(this.kZ+10,"%"),threshold:this.MZ}),this.Wd=new i.IntersectionObserver((function(i){return t.TZ(i)}),{root:this.zZ,rootMargin:"0%",threshold:this.NZ})}},i._Z=function(t){t.filter((function(t){return t.isIntersecting})).forEach((function(t){t.target[ct]=0})),this.EZ||this.LZ()},i.IZ=function(t){t.filter((function(t){return!t.isIntersecting})).forEach((function(t){t.target[ct]=1})),this.EZ||this.BZ()},i.TZ=function(t){t.forEach((function(t){var i=t.isIntersecting;t.target[ft]=i?0:1})),this.EZ||this.UZ()},i.flushChanges=function(){this.LZ(),this.BZ(),this.UZ()},i.LZ=function(){for(var t=0;t<this.xz.length;t++){var i=this.xz[t];0==i[ct]&&(this.AZ(i,!0),i[ct]=null)}},i.BZ=function(){for(var t=0;t<this.xz.length;t++){var i=this.xz[t];1==i[ct]&&(this.AZ(i,!1),i[ct]=null)}},i.UZ=function(){for(var t=0;t<this.xz.length;t++){var i=this.xz[t];0==i[ft]?(this.AZ(i,!0),this.CZ(i,!0)):1==i[ft]&&this.CZ(i,!1),i[ft]=null}},i.WZ=function(t){if("IntersectionObserver"in this.SZ.win){if(this.Ca(),!t)return this.OZ.disconnect(),this.PZ.disconnect(),void this.Wd.disconnect();for(var i=0;i<this.xz.length;i++)this.OZ.observe(this.xz[i]),this.PZ.observe(this.xz[i]),this.Wd.observe(this.xz[i])}},i.updateChildren=function(t){if(this.xz=t,"IntersectionObserver"in this.SZ.win){for(var i=0;i<this.xz.length;i++)this.DT.setOwner(this.xz[i],this.SZ.element);this.WZ(!1),this.WZ(this.RZ)}},i.wasLaidOut=function(){this.RZ=!0,this.WZ(this.RZ)},i.wasUnlaidOut=function(){this.RZ=!1,this.WZ(this.RZ);for(var t=0;t<this.xz.length;t++)this.AZ(this.xz[t],!1),this.CZ(this.xz[t],!1)},t}(),pt=['<div class=i-amphtml-carousel-content><div class=i-amphtml-carousel-scroll></div><div class=i-amphtml-carousel-arrows><div tabindex=0 class="amp-carousel-button amp-carousel-button-prev"></div><div tabindex=0 class="amp-carousel-button amp-carousel-button-next"></div></div></div>'],vt="carousel",dt="slides",bt=function(t){!function(t,i){if("function"!=typeof i&&null!==i)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(i&&i.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),i&&s(t,i)}(p,t);var n,o,h=(n=p,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,i=r(n);if(o){var s=r(this).constructor;t=Reflect.construct(i,arguments,s)}else t=i.apply(this,arguments);return e(this,t)});p.prerenderAllowed=function(){return!0};var l=p.prototype;function p(t){var i,n,s;return(i=h.call(this,t)).ND=(s=i.win,j(s,"platform")).isIos(),i.fB=null,i.mW=null,i.RW=[],i.XA=null,i.wM="carousel",i.BO=!1,i.Ip=null,i.Tp=null,i.HZ=!1,i.Gr=null,i.VZ=null,i.DZ=!1,i.FZ=(n=t,E(n,"viewer")).isEmbedded(),i}return l.iJ=function(){var t=this;this.registerAction("goToSlide",(function(i){var n,s,r,o=i.args,e=i.trust,h=Number(o.index||0);n=!isNaN(h),s=o.index,r=t.element,(z.user||(z.user=k()),void z.user.win?z.userForEmbed||(z.userForEmbed=k()):z.user).assert(n,"Unexpected slide index for goToSlide action: %s. %s",s,r,undefined,undefined,undefined,undefined,undefined,undefined,undefined),t.fB.goToSlide(h,{actionSource:t.XZ(e)})}),1),this.registerAction("toggleAutoplay",(function(i){var n=i.args,s=n?n.toggleOn:void 0;t.ZZ(s)}),1),this.Gr.addToAllowlist("AMP-CAROUSEL","goToSlide",["email"])},l.isLayoutSupported=function(t){return function(t){return"fixed"==t||"fixed-height"==t||"responsive"==t||"fill"==t||"flex-item"==t||"fluid"==t||"intrinsic"==t}(t)},l.buildCallback=function(){var t=this;this.Gr=function(t){return i="action",I(n=R(P(t)),i)?A(n,i):null;var i,n}(this.element);var i=this.element,n=this.win,s=function(t){return function(t,i){for(var n=[],s=t.firstElementChild;s;s=s.nextElementSibling)void 0,e=void 0,h=void 0,"string"==typeof(o=r=s)?e=o:1==(null==(h=o)?void 0:h.nodeType)&&(e=o.tagName),!(e&&e.toLowerCase().startsWith("i-")||r.nodeType===Node.ELEMENT_NODE&&(r.hasAttribute("placeholder")||r.hasAttribute("fallback")||r.hasAttribute("overflow")))&&n.push(s);var r,o,e,h;return n}(t)}(this.element);i.appendChild(this.qZ()),this.mW=this.element.querySelector(".i-amphtml-carousel-scroll"),this.Tp=this.element.querySelector(".amp-carousel-button-prev"),this.Ip=this.element.querySelector(".amp-carousel-button-next"),this.fB=new lt({win:n,element:i,scrollContainer:this.mW,initialIndex:Number(this.element.getAttribute("slide")||"0"),runMutate:function(i){return t.mutateElement(i)}}),this.GZ(s),this.iJ(),this.element.addEventListener(q,(function(i){t.TW(i)})),this.element.addEventListener(G,(function(){t.JZ()})),this.element.addEventListener(J,(function(){t.KZ()})),this.setupButtonInteraction(this.Ip,(function(){return t.interactionNext()})),this.setupButtonInteraction(this.Tp,(function(){return t.interactionPrev()})),this.QZ();var r=B(i);return this.VZ=new mt({ampElement:this,intersectionElement:this.mW,nearbyMarginInPercent:this.ND?200:100,viewportIntersectionCallback:function(i,n){n?r.scheduleResume(t.element,i):r.schedulePause(t.element,i)}}),this.VZ.setQueueChanges(this.ND),this.VZ.updateChildren(this.RW),this.fB.updateSlides(this.RW),this.fB.goToSlide(Number(this.element.getAttribute("slide")||"0")),this.element.hasAttribute("controls")?this.DZ=!0:function(t){return j(t,"input")}(this.win).onMouseDetected((function(i){i&&(t.DZ=!0,t.YZ())}),!0),this.mutateElement((function(){}))},l.setupButtonInteraction=function(t,i){t.addEventListener("click",i),t.addEventListener("keydown",(function(t){t.defaultPrevented||"Enter"!=t.key&&" "!=t.key||(t.preventDefault(),i())}))},l.isRelayoutNeeded=function(){return!0},l.layoutCallback=function(){var t;return"[i-amphtml-scale-animation]",((t=this.element).closest?t.closest("[i-amphtml-scale-animation]"):function(t,i,n){var s;for(s=t;s&&void 0!==s;s=s.parentElement)if(i(s))return s;return null}(t,(function(t){return function(t,i){var n=t.matches||t.webkitMatchesSelector||t.mozMatchesSelector||t.msMatchesSelector||t.oMatchesSelector;return!!n&&n.call(t,"[i-amphtml-scale-animation]")}(t)})))||(this.VZ.wasLaidOut(),this.fB.updateUi()),i||(i=Promise.resolve(void 0))},l.unlayoutCallback=function(){return this.VZ.wasUnlaidOut(),!0},l.pauseCallback=function(){this.fB.pauseLayout()},l.resumeCallback=function(){this.fB.resumeLayout()},l.mutatedAttributesCallback=function(t){void 0!==t.slide&&this.fB.goToSlide(Number(t.slide))},l.goToSlide=function(t){this.fB.goToSlide(t,{smoothScroll:!1})},l.interactionNext=function(){this.wM!=vt?this.fB.next(0):this.$Z(!0)},l.interactionPrev=function(){this.wM!=vt?this.fB.prev(0):this.$Z(!1)},l.$Z=function(t){var i=N(this.mW),n=t?1:-1,s="rtl"==w(this.win,i).direction?-1:1;i.scrollLeft+=i.offsetWidth*n*s},l.qZ=function(){var t,i;return(i=(t=this.element).ownerDocument||t,a&&a.ownerDocument===i||(a=i.createElement("div")),m)(pt)},l.XZ=function(t){return t>=2?0:1},l.GZ=function(t){var i=this,n=this.element.getAttribute("dir")||w(this.win,this.element).direction,s=this.element.hasAttribute("loop"),r=this.element.getAttribute("autoplay"),o=this.element.getAttribute("delay"),e=this.element.getAttribute("type"),h=null!=r,u=r?Number(r):Number.POSITIVE_INFINITY,a=Math.max(Number(o)||5e3,1e3);this.fB.updateForwards("rtl"!=n),this.fB.updateLoop(s||h),this.fB.updateAutoAdvanceLoops(u),this.fB.updateAutoAdvanceInterval(a),this.mutateElement((function(){i.Tp.setAttribute("dir",n),i.Ip.setAttribute("dir",n)})),this.ZZ(h),this.hJ(e,t),this.YZ()},l.vJ=function(t){return t-1>=0?t-1:this.element.hasAttribute("loop")?this.RW.length-1:null},l.dJ=function(t){return t+1<this.RW.length?t+1:this.element.hasAttribute("loop")?0:null},l.bJ=function(){return this.element.getAttribute("data-next-button-aria-label")||"Next item in carousel"},l.gJ=function(){return this.element.getAttribute("data-prev-button-aria-label")||"Previous item in carousel"},l.xJ=function(){return this.element.getAttribute("data-button-count-format")||"(%s of %s)"},l.wJ=function(t){var i=String(t+1),n=String(this.RW.length);return" "+this.xJ().replace("%s",i).replace("%s",n)},l.yJ=function(t){var i=this.vJ(t),n=null==i?0:i;return this.gJ()+this.wJ(n)},l.SJ=function(t){var i=this.dJ(t),n=null==i?this.RW.length-1:i;return this.bJ()+this.wJ(n)},l.YZ=function(){var t=this.fB.getCurrentIndex(),i=this.HZ&&!this.DZ,n=i||this.fB.isAtStart(),s=i||this.fB.isAtEnd();this.Tp.classList.toggle("amp-disabled",n),this.Tp.setAttribute("aria-disabled",n),this.Tp.title=this.yJ(t),this.Tp.tabIndex=n?-1:0,this.Ip.classList.toggle("amp-disabled",s),this.Ip.setAttribute("aria-disabled",s),this.Ip.title=this.SJ(t),this.Ip.tabIndex=s?-1:0},l.hJ=function(t,i){var n=this,s=t==dt;this.wM=s?dt:vt,this.fB.updateAlignment(s?"center":"start"),this.fB.updateHideScrollbar(s),this.fB.updateMixedLength(!s),this.fB.updateSnap(s);var r=s?"button":"presentation";this.Tp.setAttribute("role",r),this.Ip.setAttribute("role",r),this.RW=i.map((function(t){if(t.classList.add("amp-carousel-slide"),s){var i=document.createElement("div");return i.classList.add("i-amphtml-carousel-slotted","i-amphtml-carousel-wrapper"),i.appendChild(t),i}return t})),this.RW.forEach((function(t){n.mW.appendChild(t),s?t.classList.add("i-amphtml-carousel-slide-item"):t.classList.add("amp-scrollable-carousel-slide")}))},l.zJ=function(t,i){var n=this.XA;if(this.XA=t,null!=n){var s={"index":t},r="slideChange",o=this.MJ(i)?3:1,e={"index":t,"actionTrust":o},h=H(this.win,"slidescroll.".concat(r),s);this.Gr.trigger(this.element,r,h,o),function(t,i,n,s){var r=n||{};u(t.ownerDocument);var o=t.ownerDocument.createEvent("Event");o.data=r;var e=c,h=f;o.initEvent("slideChange",e,h),t.dispatchEvent(o)}(this.element,0,e),this.kJ(n,t)}},l.NJ=function(t){return null==t?"null":this.RW[t].getAttribute("data-slide-id")||String(t)},l.kJ=function(t,i){var n=i-t,s=this.RW.length,r=(this.fB.isLooping()?n>0&&n/s<.5||n<0&&n/s<-.5:n>0)?"amp-carousel-next":"amp-carousel-prev",o={"fromSlide":this.NJ(t),"toSlide":this.NJ(i)};U(this.element,"amp-carousel-change",o),U(this.element,r,o)},l.MJ=function(){}