;
(self.AMP=self.AMP||[]).push({m:1,v:"2206071918001",n:"amp-carousel",ev:"0.2",l:!1,f:function(t,i){(()=>{var i,{isArray:s}=Array,{hasOwnProperty:e,toString:n}=Object.prototype;function r(t,i,s,e,n,r,o,h,l,a,c){return t}var o,h,l={bubbles:!0,cancelable:!0};function a(t){return function(t,i){r(1===i.length),t.innerHTML=i[0];const s=t.firstElementChild;return r(s),r(!s.nextElementSibling),t.removeChild(s),s}(o,t)}var c=["Webkit","webkit","Moz","moz","ms","O","o"],u={"getPropertyPriority":()=>"","getPropertyValue":()=>""};function d(t){const i=t.replace(/[A-Z]/g,(t=>"-"+t.toLowerCase()));return c.some((t=>i.startsWith(t+"-")))?`-${i}`:i}function p(t,i,s){if(f(i))return i;h||(h=Object.create(null));let e=h[i];if(!e||s){if(e=i,void 0===t[i]){const s=function(t){return t.charAt(0).toUpperCase()+t.slice(1)}(i),n=function(t,i){for(let s=0;s<c.length;s++){const e=c[s]+i;if(void 0!==t[e])return e}return""}(t,s);void 0!==t[n]&&(e=n)}s||(h[i]=e)}return e}function _(t,i){const{style:s}=t;for(const t in i)s.setProperty(d(p(s,t)),String(i[t]),"important")}function m(t,i,s,e,n){const r=p(t.style,i,n);if(!r)return;const o=e?s+e:s;t.style.setProperty(d(r),o)}function A(t,i){return t.getComputedStyle(i)||u}function f(t){return t.startsWith("--")}function P(t,i,s){let e=0,n=0,r=null;function o(){e=0;const h=s-(t.Date.now()-n);var l;h>0?e=t.setTimeout(o,h):(l=r,r=null,i.apply(null,l))}return function(...i){n=t.Date.now(),r=i,e||(e=t.setTimeout(o,s))}}self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var g=self.__AMP_LOG;function b(t){return function(t,i){throw new Error("failed to call initLogConstructor")}()}function I(t,i,s,e,n,r,o,h,l,a,c){return t}function v(t,i){return V(t=function(t){return t.__AMP_TOP||(t.__AMP_TOP=t)}(t),i)}function M(t,i){return V(T(E(t)),i)}function x(t,i){return R(T(t),i)}function E(t){return t.nodeType?(s=t,i=(s.ownerDocument||s).defaultView,v(i,"ampdoc")).getAmpDoc(t):t;var i,s}function T(t){const i=E(t);return i.isSingleDoc()?i.win:i}function V(t,i){I(S(t,i));const s=w(t)[i];return s.obj||(I(s.ctor),I(s.context),s.obj=new s.ctor(s.context),I(s.obj),s.context=null,s.resolve&&s.resolve(s.obj)),s.obj}function R(t,i){const s=w(t)[i];return s?s.promise?s.promise:(V(t,i),s.promise=Promise.resolve(s.obj)):null}function w(t){let i=t.__AMP_SERVICES;return i||(i=t.__AMP_SERVICES={}),i}function S(t,i){const s=t.__AMP_SERVICES&&t.__AMP_SERVICES[i];return!(!s||!s.ctor)}var y,C=t=>function(t,i,s,e){const n=x(t,i);if(n)return n;const r=E(t);return r.whenExtensionsKnown().then((()=>{const t=r.getExtensionVersion(s);return t?v(r.win,"extensions").waitForExtension(s,t):null})).then((s=>s?function(t,i){return function(t,i){const s=R(t,i);if(s)return s;const e=w(t);return e[i]=function(){const t=new class{constructor(){this.promise=new Promise(((t,i)=>{this.resolve=t,this.reject=i}))}},{promise:i,reject:s,resolve:e}=t;return i.catch((()=>{})),{obj:null,promise:i,resolve:e,reject:s,context:null,ctor:null}}(),e[i].promise}(T(t),i)}(t,i):null))}(t,"amp-analytics-instrumentation","amp-analytics"),k=t=>M(t,"owners");function N(t,i,s={},e=!0){C(t).then((n=>{n&&n.triggerEventForTarget(t,i,s,e)}))}function z(t,i,s,e){let n=t,r=s,o=t=>{try{return r(t)}catch(t){var i,s;throw null===(i=(s=self).__AMP_REPORT_ERROR)||void 0===i||i.call(s,t),t}};const h=function(){if(void 0!==y)return y;y=!1;try{const t={get capture(){return y=!0,!1}};self.addEventListener("test-options",null,t),self.removeEventListener("test-options",null,t)}catch(t){}return y}(),l=!(null==e||!e.capture);return n.addEventListener(i,o,h?e:l),()=>{null==n||n.removeEventListener(i,o,h?e:l),r=null,n=null,o=null}}function L(t,i,s,e){const n={detail:s};return Object.assign(n,e),new t.CustomEvent(i,n)}function O(t,i,s,e){return z(t,i,s,e)}function B(t){return t.detail}function j(t,i,s,e){let n=s;const r=z(t,i,(t=>{try{n(t)}finally{n=null,r()}}),e);return r}function U(t,i){return t>0&&i>0?t%i:(t%i+i)%i}function $(t,i,s){return r(i<=s),Math.min(Math.max(t,i),s)}var H="amp-carousel:indexchange",W="amp-carousel:scrollstart",F="amp-carousel:scrollpositionchange",D="start";function q(t,i){const{bottom:s,height:e,left:n,right:r,top:o,width:h}=i.getBoundingClientRect();return{start:0==t?n:o,end:0==t?r:s,length:0==t?h:e}}function Q(t,i){const{end:s,start:e}=q(t,i);return(e+s)/2}function X(t,i){const{start:s}=q(t,i);return s}function Z(t,i,s){return i==D?X(t,s):Q(t,s)}function G(t,i,s){m(i,0==t?"width":"height",`${s}px`)}function J(t,i,s){const{end:e,start:n}=q(t,i);return n<=s&&s<e}function K(t,i,s,e){const n=Z(t,i,e),r=Z(t,i,s),{length:o}=q(t,e);return(n-r)/o}function Y(t,i,s){!function(t,i,s){0==t?i.scrollLeft=s:i.scrollTop=s}(t,i,function(t,i){return 0==t?i.scrollLeft:i.scrollTop}(t,i)+s)}var tt="i-amphtml-carousel-spacer";function it(t,i){const s=function(t,i,s){const e=p(t.style,"scrollBehavior",void 0);if(e)return f(e)?t.style.getPropertyValue(e):t.style[e]}(t);m(t,"scrollBehavior","auto"),i(),m(t,"scrollBehavior",s)}function st(t){return t.reduce(((t,i)=>t+i),0)}var et="__AMP_CAROUSEL_NEAR_VIEWPORT",nt="__AMP_CAROUSEL_IN_VIEWPORT",rt=100,ot=.01,ht=['<div class=i-amphtml-carousel-content><div class=i-amphtml-carousel-scroll></div><div class=i-amphtml-carousel-arrows><div tabindex=0 class="amp-carousel-button amp-carousel-button-prev"></div><div tabindex=0 class="amp-carousel-button amp-carousel-button-next"></div></div></div>'],lt="carousel",at="slides",ct=class extends t.BaseElement{static prerenderAllowed(){return!0}pN(){this.registerAction("goToSlide",(t=>{const{args:i,trust:s}=t,e=Number(i.index||0);var n,r,o;n=!isNaN(e),r=i.index,o=this.element,(g.user||(g.user=b()),void g.user.win?g.userForEmbed||(g.userForEmbed=b()):g.user).assert(n,"Unexpected slide index for goToSlide action: %s. %s",r,o,undefined,undefined,undefined,undefined,undefined,undefined,undefined),this.EN.goToSlide(e,{actionSource:this.sW(s)})}),1),this.registerAction("toggleAutoplay",(t=>{const{args:i}=t,s=i?i.toggleOn:void 0;this.TW(s)}),1),this.Oc.addToAllowlist("AMP-CAROUSEL","goToSlide",["email"])}constructor(t){var i,s;super(t),this.WV=(s=this.win,v(s,"platform")).isIos(),this.EN=null,this.MN=null,this.RN=[],this.MU=null,this.KV="carousel",this.yO=!1,this.Sp=null,this.Vp=null,this.kN=!1,this.Oc=null,this.CN=null,this.VW=!1,this.RW=(i=t,M(i,"viewer")).isEmbedded()}isLayoutSupported(t){return function(t){return"fixed"==t||"fixed-height"==t||"responsive"==t||"fill"==t||"flex-item"==t||"fluid"==t||"intrinsic"==t}(t)}buildCallback(){this.Oc=(t=>function(t,i){const s=T(E(t));return S(s,i)?V(s,i):null}(t,"action"))(this.element);const{element:t,win:i}=this,s=function(t){return function(t,i){const s=[];for(let i=t.firstElementChild;i;i=i.nextElementSibling)!(function(t){let i;var s;return"string"==typeof t?i=t:1==(null==(s=t)?void 0:s.nodeType)&&(i=t.tagName),!!i&&i.toLowerCase().startsWith("i-")}(e=i)||e.nodeType===Node.ELEMENT_NODE&&(e.hasAttribute("placeholder")||e.hasAttribute("fallback")||e.hasAttribute("overflow")))&&s.push(i);var e;return s}(t)}(this.element);t.appendChild(this.JU()),this.MN=this.element.querySelector(".i-amphtml-carousel-scroll"),this.Vp=this.element.querySelector(".amp-carousel-button-prev"),this.Sp=this.element.querySelector(".amp-carousel-button-next"),this.EN=new class{constructor(t){const{element:i,initialIndex:s,runMutate:e,scrollContainer:n,win:r}=t;this.i=r,this.UN=e,this.Kt=i,this.MN=n,this.WN=new class{constructor(t){const{advanceable:i,element:s,scrollContainer:e,win:n}=t;this.i=n,this.MN=e,this.HN=i,this.QN=0,this.WN=!1,this.DN=1,this.ZN=1e3,this.FN=!1,this.qN=!1,this.KN=null,this.XN=Number.POSITIVE_INFINITY,this.Gi=s.getAmpDoc(),this.GN(this.ZN),this.MN.addEventListener("scroll",(()=>this.JN()),!0),O(this.MN,"touchstart",(()=>this.YN()),{capture:!0,passive:!0}),O(s,H,(t=>{this.UB(t)}))}stop(){this.qN=!0}pause(){this.FN=!0}resume(){this.FN=!1,this.QB()}updateAutoAdvance(t){this.WN=t,this.QB()}updateAutoAdvanceCount(t){this.DN=t,this.QB()}updateAutoAdvanceInterval(t){this.ZN=Math.max(t,1e3),this.GN(this.ZN),this.QB()}updateMaxAdvances(t){this.XN=t}GN(t){const i=P(this.i,(()=>{i==this.KN&&this.ZB()}),t);this.KN=i}YN(){this.pause(),j(window,"touchend",(()=>{this.resume()}),{capture:!0,passive:!0})}FB(){return this.WN&&this.Gi.isVisible()&&!this.FN&&!this.qN&&this.QN<this.XN}JN(){this.QB()}UB(t){const i=B(t).actionSource;i&&4!==i&&this.stop()}ZB(){this.FB()&&(this.HN.advance(this.DN,{actionSource:4,allowWrap:!0}),this.QN+=this.DN)}QB(){this.FB()&&this.KN()}}({win:r,element:i,scrollContainer:n,advanceable:this}),this.qB=new class{constructor(t){const{element:i,runMutate:s,scrollContainer:e,stoppable:n,win:r}=t;this.i=r,this.MN=e,this.UN=s,this.RN=[],this.KB=1,this.GB=!1,this.JB=!1,this.He=0,i.addEventListener("focus",(()=>{n.stop()}),!0),i.addEventListener(H,(t=>{this.YB(t)}))}updateMixedLength(t){this.GB=t}updateUi(){this.JB||(this.JB=!0,this.UN((()=>{this.JB=!1,this.tU(),this.sU()})))}updateSlides(t){this.RN=t,this.updateUi()}updateVisibleCount(t){this.KB=t,this.updateUi()}iU(){return this.GB||this.KB>=2}tU(){this.iU()?(this.MN.removeAttribute("aria-live"),this.MN.setAttribute("role","list"),this.RN.forEach((t=>{t.setAttribute("role","listitem")}))):(this.MN.setAttribute("aria-live","polite"),this.MN.removeAttribute("role"),this.RN.forEach((t=>{t.removeAttribute("role")})))}sU(){this.RN.forEach(((t,i)=>{const s=!this.iU()&&i!==this.He;t.setAttribute("aria-hidden",s)}))}YB(t){const i=B(t).index;this.He=i,this.UN((()=>{this.sU()}))}}({win:r,element:i,scrollContainer:n,runMutate:e,stoppable:this.WN}),this.eU=P(r,(()=>this.rU()),200),this.nU=1,this.oU=Number.POSITIVE_INFINITY,this.GB=!1,this.RN=[],this.hU=!0,this.JB=!1,this.aU=[],this.lU=[],this.cU=[],this.uU=[],this.dU=!1,this.pU=!1,this.mU=0,this._U=null,this.AU=NaN,this.fU=!1,this.bU=!1,this.PU=void 0,this.gU=D,this.vU=0,this.IU=!0,this.wU=!0,this.MU=s||0,this.Fd=!1,this.$B=!0,this.xU=1,this.KB=1,this.MN.addEventListener("scroll",(()=>this.JN()),!0),this.MN.addEventListener("scrollend",(()=>this.EU()),!0),O(this.MN,"touchstart",(()=>this.YN()),{capture:!0,passive:!0}),O(this.MN,"wheel",(()=>this.TU()),{capture:!0,passive:!0})}next(t){this.advance(this.nU,{actionSource:t})}prev(t){this.advance(-this.nU,{actionSource:t})}advance(t,i={}){const{MU:s,_U:e,RN:n}=this,{actionSource:r,allowWrap:o=!1}=i,h=null!==e?e:s,l=h+t,a=n.length-1,c=0===h,u=h===a,d=l<0,p=l>a,_=t>0&&this.RU(h)&&this.RU(l);let m;m=this.isLooping()?U(l,a+1):o?_?0:d&&c||p&&!u?a:d&&!c||p&&u?0:l:_?h:$(l,0,a),this.goToSlide(m,{actionSource:r})}pauseLayout(){this.dU=!0,this.WN.pause()}resumeLayout(){this.dU=!1,this.updateUi(),this.WN.resume()}getCurrentIndex(){return this.MU}getVisibleCount(){return this.KB}isLooping(){return this.Fd&&this.RN.length/this.KB>=3}goToSlide(t,i={}){const{actionSource:s,smoothScroll:e=!0}=i;t<0||t>this.RN.length-1||isNaN(t)||t!==this.MU&&(this.fU||this.VU()||(this.pU=!1,this._U=t,this.PU=s,this.SU(this.RN[t],{smoothScroll:e})))}updateAdvanceCount(t){this.nU=t}updateAlignment(t){this.gU="start"===t?D:"center",this.updateUi()}updateAutoAdvance(t){this.WN.updateAutoAdvance(t)}updateAutoAdvanceCount(t){this.WN.updateAutoAdvanceCount(t)}updateAutoAdvanceInterval(t){this.WN.updateAutoAdvanceInterval(t)}updateAutoAdvanceLoops(t){this.oU=t,this.updateUi()}updateForwards(t){this.IU=t,this.updateUi()}updateHideScrollbar(t){this.wU=t,this.updateUi()}updateHorizontal(t){this.vU=t?0:1,this.updateUi()}updateLoop(t){this.Fd=t,this.updateUi()}updateMixedLength(t){this.GB=t,this.qB.updateMixedLength(t),this.updateUi()}updateSlides(t){const{length:i}=t;i?(this.RN=t,this.MU=this.isLooping()?U(this.MU,i):$(this.MU,0,i-1)||0,this.qB.updateSlides(t),this.updateUi()):this.Kt.tagName.toUpperCase()}updateSnap(t){this.$B=t,this.updateUi()}updateSnapBy(t){this.xU=Math.max(1,t),this.updateUi()}updateUserScrollable(t){this.hU=t,this.updateUi()}updateUi(){this.JB||this.dU||(this.JB=!0,this.UN((()=>{this.JB=!1,this.MN.setAttribute("mixed-length",this.GB),this.MN.setAttribute("user-scrollable",this.hU),this.MN.setAttribute("hide-scrollbar",this.wU),this.MN.setAttribute("horizontal",0===this.vU),this.MN.setAttribute("loop",this.isLooping()),this.MN.setAttribute("snap",this.$B),_(this.MN,{"--visible-count":this.KB}),this.RN.length&&(this.WN.updateMaxAdvances(this.oU*this.RN.length-1),this.yU(),this.kU(),this.CU(),this.rU(!0))})))}updateVisibleCount(t){this.KB=Math.max(1,t),this.qB.updateVisibleCount(t),this.updateUi()}LU(t,i){this.AU!==t&&(this.AU=t,this.Kt.dispatchEvent(L(this.i,H,{"index":t,"total":this.RN.length,"actionSource":i,"slides":this.RN},{bubbles:!0})))}zU(t,i){this.MU=t,this.mU=i,this.Kt.dispatchEvent(L(this.i,"amp-carousel:offsetchange",{"index":t,"total":this.RN.length,"offset":this.IU?-i:i,"slides":this.RN},{bubbles:!0}))}notifyScrollStart(){this.Kt.dispatchEvent(L(this.i,W,null))}NU(){this.Kt.dispatchEvent(L(this.i,F,null))}YN(){this.fU=!0,this.PU=3,this._U=null,this.pU=!1,j(window,"touchend",(()=>{this.fU=!1,this.eU()}),{capture:!0,passive:!0})}TU(){this.PU=2,this._U=null,this.pU=!1}JN(){this.pU?this.pU=!1:(this.bU=!0,this.OU(),this.notifyScrollStart(),this.eU())}EU(){null===this._U&&this.rU()}VU(){return this.bU&&(3===this.PU||2===this.PU)}BU(t,i,s){const e=i*s*(this.IU?1:-1);!function(t,i,s){const e=0==t?s:0,n=0==t?0:s;m(i,"transform",`translate(${e}px, ${n}px)`),_(i,{"--content-transform":`translate(${e}px, ${n}px)`})}(this.vU,t,e),t._revolutions=i}$U(t){this.RN.forEach((i=>{this.BU(i,0,t)}))}jU(){return this.RN.map((t=>q(this.vU,t).length))}isAtEnd(){return!this.isLooping()&&this.UU()}isAtStart(){return!this.isLooping()&&this.WU()}UU(){const t=this.MN,i=t.getBoundingClientRect().width*(this.IU?1:-1),s=this.IU?Math.ceil(i):Math.floor(i),e=t.scrollLeft+s,n=t.scrollWidth;return this.IU?e>=n:e<=-n}WU(){const t=this.MN.scrollLeft;return this.IU?t<=0:t>=0}HU(t){const i=[];for(let s=0;s<t;s++){const t=document.createElement("div");t.className=tt,i.push(t)}return i}yU(){const{vU:t,RN:i}=this,s=this.jU(),e=st(s),n=this.isLooping()?i.length:0;this.aU.forEach((t=>{this.MN.removeChild(t)})),this.aU=this.HU(n),this.aU.forEach(((e,n)=>{G(t,e,s[n]),this.MN.insertBefore(e,i[0])})),this.lU.forEach((t=>{this.MN.removeChild(t)})),this.lU=this.HU(n),this.lU.forEach(((i,n)=>{G(t,i,s[n]),this.BU(i,-1,e),this.MN.appendChild(i)})),this.cU.forEach((t=>{this.MN.removeChild(t)})),this.cU=this.HU(n),this.cU.forEach(((i,n)=>{G(t,i,s[n]),this.BU(i,-1,e),this.MN.appendChild(i)})),this.uU=this.aU.concat(this.lU,this.cU)}kU(){const t=this.RN.length,i=this.gU===D,s=1===U(this.KB,2),e=i||s?"0%":"50%";!function(t,i){const{length:s}=t;for(let e=0;e<s;e++)i(t[e],e)}(this.MN.children,((i,s)=>{const n=U(s,t),r=0===U(n,this.xU);!i.classList.contains(tt)&&this.isLooping()||function(t,i){for(const s in i)m(t,s,i[s])}(i,{"scroll-snap-align":r?this.gU:"none","scroll-snap-coordinate":r?e:"none"})}))}CU(){const{cU:t,aU:i,MU:s,RN:e}=this,n=Math.max(0,e.length-s-1),r=Math.max(0,s-1);i.forEach(((t,r)=>{const o=function(t,i,s){const{length:e}=s;return t===i?e:U(t-i,e)}(s,r,i)>e.length-1;t.hidden=o||r<e.length-n})),t.forEach(((i,n)=>{const o=function(t,i,s){const{length:e}=s;return t===i?e:U(i-t,e)}(s,n,t)>e.length-1;i.hidden=o||n>r}))}OU(){const{gU:t,uU:i,vU:s,MU:e,MN:n,RN:r}=this,o=st(this.jU()),h=!!i.length,l=h?i:r,a=function(t,i,s,e,n){const r=Z(t,i,s);if(J(t,e[n],r))return n;for(let i=1;i<=e.length/2;i++){const s=U(n+i,e.length),o=U(n-i,e.length);if(J(t,e[s],r))return s;if(J(t,e[o],r))return o}}(s,t,n,l,h?e+r.length:e);if(void 0===a)return;const c=l[a],u=a%r.length,d=K(s,t,n,c);this.zU(u,d),u!==e&&this.UN((()=>{this.QU(o)}))}rU(t=!1){const{PU:i}=this;if(this.fU)return;if(this.PU=void 0,this.bU=!1,this.UN((()=>{this.NU()})),this.AU===this.MU&&null===this._U&&!t)return;null!==this._U&&(this.MU=this._U,this._U=null,this.mU=0);const s=st(this.jU());this.UN((()=>{this.LU(this.MU,i),this.zU(this.MU,this.mU),this.$U(s),this.CU(),this.QU(s),this.DU()}))}DU(){const{gU:t,vU:i,mU:s,MU:e,MN:n,RN:r}=this,o=r[e],h=K(i,t,n,o)-s,{length:l}=q(i,o),a=h*l;a&&(this.pU=!0,it(n,(()=>{Y(i,n,a)})))}SU(t,i){const{smoothScroll:s}=i;(s?(t,i)=>i():it)(this.MN,(()=>{!function(t,i,s,e,n=0){const r=i==D,{length:o}=q(t,e);Y(t,s,(r?X(t,e):Q(t,e))-(r?X(t,s):Q(t,s))-n*o)}(this.vU,this.gU,this.MN,t)}))}ZU(t,i,s){const{MU:e,AU:n,RN:r}=this,o=r[e]._revolutions||0,h=s?1:-1;for(let l=1;l<=i;l++){const i=U(e+l*h,r.length);if(i===n&&e!==n)break;const a=r[i],c=i>e!==s?o+h:o;this.BU(a,c,t)}}QU(t){if(!this.isLooping())return;const{gU:i,RN:s,KB:e}=this,n=i===D?e-1:0,r=(s.length-1-n)/2,o=(s.length-1+n)/2;this.ZU(t,Math.round(r),!1),this.ZU(t,Math.round(o),!0)}RU(t){const{gU:i,RN:s,KB:e}=this,n=i===D?e:e/2;return t>=s.length-n}}({win:i,element:t,scrollContainer:this.MN,initialIndex:Number(this.element.getAttribute("slide")||"0"),runMutate:t=>this.mutateElement(t)}),this.SW(s),this.pN(),this.element.addEventListener(H,(t=>{this.YB(t)})),this.element.addEventListener(W,(()=>{this.IW()})),this.element.addEventListener(F,(()=>{this.wW()})),this.setupButtonInteraction(this.Sp,(()=>this.interactionNext())),this.setupButtonInteraction(this.Vp,(()=>this.interactionPrev())),this.yW();const e=k(t);return this.CN=new class{constructor(t){const{ampElement:i,intersectionElement:s,intersectionThreshold:e=ot,nearbyMarginInPercent:n=rt,viewportIntersectionThreshold:r=e,viewportIntersectionCallback:o=(()=>{})}=t;this.iW=i,this.vL=k(i.element),this.eW=s,this.rW=e,this.nW=n,this.oW=r,this.hW=o,this.aW=!1,this.lW=[],this.cW=null,this.uW=null,this.Eg=null,this.dW=!1}setQueueChanges(t){this.aW=t}pW(t,i){i?this.vL.scheduleLayout(this.iW.element,t):this.vL.scheduleUnlayout(this.iW.element,t)}mW(t,i){this.hW(t,i)}oh(){if(this.cW&&this.uW&&this.Eg)return;const{win:t}=this.iW;this.cW=new t.IntersectionObserver((t=>this._W(t)),{root:this.eW,rootMargin:`${this.nW}%`,threshold:this.rW}),this.uW=new t.IntersectionObserver((t=>this.AW(t)),{root:this.eW,rootMargin:`${this.nW+10}%`,threshold:this.rW}),this.Eg=new t.IntersectionObserver((t=>this.fW(t)),{root:this.eW,rootMargin:"0%",threshold:this.oW})}_W(t){t.filter((t=>{const{isIntersecting:i}=t;return i})).forEach((t=>{const{target:i}=t;i[et]=0})),this.aW||this.bW()}AW(t){t.filter((t=>{const{isIntersecting:i}=t;return!i})).forEach((t=>{const{target:i}=t;i[et]=1})),this.aW||this.PW()}fW(t){t.forEach((t=>{const{isIntersecting:i,target:s}=t;s[nt]=i?0:1})),this.aW||this.gW()}flushChanges(){this.bW(),this.PW(),this.gW()}bW(){for(let t=0;t<this.lW.length;t++){const i=this.lW[t];0==i[et]&&(this.pW(i,!0),i[et]=null)}}PW(){for(let t=0;t<this.lW.length;t++){const i=this.lW[t];1==i[et]&&(this.pW(i,!1),i[et]=null)}}gW(){for(let t=0;t<this.lW.length;t++){const i=this.lW[t];0==i[nt]?(this.pW(i,!0),this.mW(i,!0)):1==i[nt]&&this.mW(i,!1),i[nt]=null}}vW(t){if("IntersectionObserver"in this.iW.win){if(this.oh(),!t)return this.cW.disconnect(),this.uW.disconnect(),void this.Eg.disconnect();for(let t=0;t<this.lW.length;t++)this.cW.observe(this.lW[t]),this.uW.observe(this.lW[t]),this.Eg.observe(this.lW[t])}}updateChildren(t){if(this.lW=t,"IntersectionObserver"in this.iW.win){for(let t=0;t<this.lW.length;t++)this.vL.setOwner(this.lW[t],this.iW.element);this.vW(!1),this.vW(this.dW)}}wasLaidOut(){this.dW=!0,this.vW(this.dW)}wasUnlaidOut(){this.dW=!1,this.vW(this.dW);for(let t=0;t<this.lW.length;t++)this.pW(this.lW[t],!1),this.mW(this.lW[t],!1)}}({ampElement:this,intersectionElement:this.MN,nearbyMarginInPercent:this.WV?200:100,viewportIntersectionCallback:(t,i)=>{i?e.scheduleResume(this.element,t):e.schedulePause(this.element,t)}}),this.CN.setQueueChanges(this.WV),this.CN.updateChildren(this.RN),this.EN.updateSlides(this.RN),this.EN.goToSlide(Number(this.element.getAttribute("slide")||"0")),this.element.hasAttribute("controls")?this.VW=!0:(t=>v(this.win,"input"))().onMouseDetected((t=>{t&&(this.VW=!0,this.GU())}),!0),this.mutateElement((()=>{}))}setupButtonInteraction(t,i){t.addEventListener("click",i),t.addEventListener("keydown",(t=>{t.defaultPrevented||"Enter"!=t.key&&" "!=t.key||(t.preventDefault(),i())}))}isRelayoutNeeded(){return!0}layoutCallback(){return this.element.closest("[i-amphtml-scale-animation]")||(this.CN.wasLaidOut(),this.EN.updateUi()),i||(i=Promise.resolve(void 0))}unlayoutCallback(){return this.CN.wasUnlaidOut(),!0}pauseCallback(){this.EN.pauseLayout()}resumeCallback(){this.EN.resumeLayout()}mutatedAttributesCallback(t){void 0!==t.slide&&this.EN.goToSlide(Number(t.slide))}goToSlide(t){this.EN.goToSlide(t,{smoothScroll:!1})}interactionNext(){this.KV!=lt?this.EN.next(0):this.kW(!0)}interactionPrev(){this.KV!=lt?this.EN.prev(0):this.kW(!1)}kW(t){const i=I(this.MN),{direction:s}=A(this.win,i),e=t?1:-1,n="rtl"==s?-1:1;i.scrollLeft+=i.offsetWidth*e*n}JU(){return function(t){const i=t.ownerDocument||t;return o&&o.ownerDocument===i||(o=i.createElement("div")),a}(this.element)(ht)}sW(t){return t>=2?0:1}SW(t){const i=this.element.getAttribute("dir")||A(this.win,this.element).direction,s=this.element.hasAttribute("loop"),e=this.element.getAttribute("autoplay"),n=this.element.getAttribute("delay"),r=this.element.getAttribute("type"),o=null!=e,h=e?Number(e):Number.POSITIVE_INFINITY,l=Math.max(Number(n)||5e3,1e3);this.EN.updateForwards("rtl"!=i),this.EN.updateLoop(s||o),this.EN.updateAutoAdvanceLoops(h),this.EN.updateAutoAdvanceInterval(l),this.mutateElement((()=>{this.Vp.setAttribute("dir",i),this.Sp.setAttribute("dir",i)})),this.TW(o),this.NW(r,t),this.GU()}zW(t){return t-1>=0?t-1:this.element.hasAttribute("loop")?this.RN.length-1:null}LW(t){return t+1<this.RN.length?t+1:this.element.hasAttribute("loop")?0:null}OW(){return this.element.getAttribute("data-next-button-aria-label")||"Next item in carousel"}BW(){return this.element.getAttribute("data-prev-button-aria-label")||"Previous item in carousel"}jW(){return this.element.getAttribute("data-button-count-format")||"(%s of %s)"}UW(t){const i=String(t+1),s=String(this.RN.length);return" "+this.jW().replace("%s",i).replace("%s",s)}$W(t){const i=this.zW(t),s=null==i?0:i;return this.BW()+this.UW(s)}HW(t){const i=this.LW(t),s=null==i?this.RN.length-1:i;return this.OW()+this.UW(s)}GU(){const t=this.EN.getCurrentIndex(),i=this.kN&&!this.VW,s=i||this.EN.isAtStart(),e=i||this.EN.isAtEnd();this.Vp.classList.toggle("amp-disabled",s),this.Vp.setAttribute("aria-disabled",s),this.Vp.title=this.$W(t),this.Vp.tabIndex=s?-1:0,this.Sp.classList.toggle("amp-disabled",e),this.Sp.setAttribute("aria-disabled",e),this.Sp.title=this.HW(t),this.Sp.tabIndex=e?-1:0}NW(t,i){const s=t==at;this.KV=s?at:lt,this.EN.updateAlignment(s?"center":"start"),this.EN.updateHideScrollbar(s),this.EN.updateMixedLength(!s),this.EN.updateSnap(s);const e=s?"button":"presentation";this.Vp.setAttribute("role",e),this.Sp.setAttribute("role",e),this.RN=i.map((t=>{if(t.classList.add("amp-carousel-slide"),s){const i=document.createElement("div");return i.classList.add("i-amphtml-carousel-slotted","i-amphtml-carousel-wrapper"),i.appendChild(t),i}return t})),this.RN.forEach((t=>{this.MN.appendChild(t),s?t.classList.add("i-amphtml-carousel-slide-item"):t.classList.add("amp-scrollable-carousel-slide")}))}WW(t,i){const s=this.MU;if(this.MU=t,null==s)return;const e={"index":t},n="slideChange",o=this.EW(i)?3:1,h={"index":t,"actionTrust":o},a=L(this.win,`slidescroll.${n}`,e);this.Oc.trigger(this.element,n,a,o),function(t,i,s,e){const n=s||{};r(t.ownerDocument);const o=t.ownerDocument.createEvent("Event");o.data=n;const{bubbles:h,cancelable:a}=l;o.initEvent("slideChange",h,a),t.dispatchEvent(o)}(this.element,0,h),this.FW(s,t)}DW(t){return null==t?"null":this.RN[t].getAttribute("data-slide-id")||String(t)}FW(t,i){const s=i-t,e=this.RN.length,n=(this.EN.isLooping()?s>0&&s/e<.5||s<0&&s/e<-.5:s>0)?"amp-carousel-next":"amp-carousel-prev",r={"fromSlide":this.DW(t),"toSlide":this.DW(i)};N(this.element,"amp-carousel-change",r),N(this.element,n,r)}EW