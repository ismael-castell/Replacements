"use strict";(self.webpackChunktradingview=self.webpackChunktradingview||[]).push([[57701],{97639:(e,t,n)=>{e=n.nmd(e);const i=n(911905).getLogger("Common.Delegate");function r(){this._listeners=[]}function o(e){return!e.singleshot}r.prototype.subscribe=function(e,t,n){const i={object:e,member:t,singleshot:!!n,skip:!1};this._listeners.push(i)},r.prototype.unsubscribe=function(e,t){for(let n=0;n<this._listeners.length;++n){const i=this._listeners[n];if(i.object===e&&i.member===t){i.skip=!0,this._listeners.splice(n,1);break}}},r.prototype.unsubscribeAll=function(e){for(let t=this._listeners.length-1;t>=0;--t){const n=this._listeners[t];n.object===e&&(n.skip=!0,this._listeners.splice(t,1))}},r.prototype.destroy=function(){delete this._listeners},r.prototype.fire=function(){const e=this._listeners;this._listeners=this._listeners.filter(o);const t=e.length;for(let n=0;n<t;++n){const t=e[n];if(!t.skip)try{t.member.apply(t.object||null,arguments)}catch(e){i.logError(e.stack||e.message)}}},"undefined"!=typeof window&&(window.Delegate=r),e&&e.exports&&(e.exports=r)},262325:(e,t,n)=>{e=n.nmd(e);var i=n(911905).getLogger("Common.WatchedValue");function r(){}function o(e){if(!(this instanceof o))return new o(e);arguments.length>0&&(this._value=e),this._listeners=[]}o.prototype.value=function(){return this._owner?this._owner._value:this._value},o.prototype.setValue=function(e,t){var n=this._owner?this._owner:this;if("function"==typeof n.hook&&(e=n.hook(e)),n.writeLock)return n._value;var r=n._value===e||Number.isNaN(n._value)&&Number.isNaN(e);if(!t&&r&&n.hasOwnProperty("_value"))return e;n._value=e;for(var o=n._listeners.slice(),a=0,s=0;s<o.length;s++){o[s].once&&(n._listeners.splice(s-a,1),a++);try{o[s].cb(e)}catch(e){i.logError(e.stack||e.message)}}return e},o.prototype.deleteValue=function(){var e=this._owner?this._owner:this;if(e.hasOwnProperty("_value")){if(e.writeLock)return e._value;delete e._value;for(var t=e._listeners.slice(),n=0,r=0;r<t.length;r++){t[r].once&&(e._listeners.splice(r-n,1),n++);try{t[r].cb()}catch(e){i.logError(e.stack||e.message)}}}},o.prototype.subscribe=function(e,t){if("function"!=typeof e)throw new TypeError("callback must be a function");var n=!!t&&!!t.once,r=!!t&&!!t.callWithLast,o=this._owner?this._owner:this;if(r&&o.hasOwnProperty("_value")){try{e(o._value)}catch(e){i.logError(e.stack||e.message)}if(n)return}o._listeners.push({cb:e,owner:this,once:!!t&&!!t.once})},o.prototype.unsubscribe=function(e){var t=this._owner?this._owner:this;void 0===e&&(e=null);for(var n=t._listeners,i=n.length;i--;)n[i].owner!==this&&t!==this||n[i].cb!==e&&null!==e||n.splice(i,1)},o.prototype.listeners=function(){return(this._owner?this._owner:this)._listeners},o.prototype.readonly=function(){if(this._readonlyInstance)return this._readonlyInstance;var e=this._readonlyInstance=new r;return e.subscribe=this.subscribe.bind(this),e.unsubscribe=this.unsubscribe.bind(this),e.value=this.value.bind(this),e.when=this.when.bind(this),e.spawn=function(){return this.spawn.apply(this,arguments).readonly()}.bind(this),
this.destroy&&(e.destroy=this.destroy.bind(this)),e},o.prototype.spawn=function(e){var t=new o;return delete t._listeners,t._owner=this._owner||this,t.destroy=function(){if("function"==typeof e)try{e()}catch(e){i.logError(e.stack||e.message)}this.unsubscribe(),delete this._owner},t},o.prototype.when=function(e){var t=this;if(this.value())try{e()}catch(e){i.logError(e.stack||e.message)}else{var n=function(i){i&&(t.unsubscribe(n),e())};t.subscribe(n)}},o.prototype.opposite=function(){if(!this._opposite){var e=this,t=new o(!this.value());this.subscribe((function(e){t.setValue(!e)})),t.subscribe((function(t){e.setValue(!t)})),this._opposite=t}return this._opposite},"undefined"!=typeof window&&(window.WatchedValue=o),e&&e.exports&&(e.exports=o)},97128:(e,t,n)=>{n.r(t),n.d(t,{types:()=>i});const i={ECONOMIC:"economic",QUANDL:"quandl"}},86674:(e,t,n)=>{n.d(t,{fetch:()=>r});const i=(0,n(911905).getLogger)("Fetch");function r(e,t,n={}){{t=t||{},function(e){return new URL(e,document.baseURI).origin===location.origin}(e)&&(t.headers?t.headers instanceof Headers||(t.headers=new Headers(t.headers)):t.headers=new Headers,window.locale&&t.headers.set("X-Language",window.locale),t.headers.set("X-Requested-With","XMLHttpRequest")),void 0===t.credentials&&(t.credentials="same-origin");const r=window.fetch(e,t);return r.then(r=>{if(!r.ok){let o="";t.method&&(o+=t.method.toUpperCase()+" "),o+=e,o+=". Status "+r.status,r.statusText&&(o+=". "+r.statusText),r.headers.via&&(o+=". Via: "+r.headers.via),n.logBodyOnError&&"string"==typeof t.body&&(o+=". Body: "+t.body.slice(0,1024)),i.logError(o)}return r},n=>{if(n&&"AbortError"===n.name)return;let r="";t.method&&(r+=t.method.toUpperCase()+" "),r+=e,navigator.onLine?r+=". "+n:r+=". User is offline.",i.logError(r)}),r}}},911905:(e,t,n)=>{n.r(t),n.d(t,{LOGLEVEL:()=>o,getLogLevel:()=>S,isHighRateEnabled:()=>h,setLogLevel:()=>T,getRawLogHistory:()=>m,serializeLogHistoryEntry:()=>E,getLogHistory:()=>f,getLogger:()=>A,loggingOn:()=>I,loggingOff:()=>w});const i="undefined"!=typeof window?window:{};let r=!1;try{localStorage.getItem(""),r=!0}catch(e){}var o;!function(e){e[e.ERROR=1]="ERROR",e[e.WARNING=2]="WARNING",e[e.INFO=3]="INFO",e[e.NORMAL=4]="NORMAL",e[e.DEBUG=5]="DEBUG"}(o||(o={}));let a=0;const s=[];let l=null,_=null,c=null,u=NaN,d=o.WARNING,g=!1;function S(){return d}function h(){return g}function T(e){e=Math.max(o.ERROR,Math.min(o.DEBUG,e)),d=e,b()}function m(e,t){let n=s.reduce((e,t)=>e.concat(t),[]);return n.sort((e,t)=>e.id-t.id),void 0!==t&&(n=n.filter(e=>e.subSystemId===t)),"number"==typeof e&&(n=n.slice(-e)),n}function E(e){return new Date(e.timestamp).toISOString()+":"+e.subSystemId+":"+e.message.replace(/"/g,"'")}function f(e,t){return function(e,t){let n,i=0,r=0;for(n=e.length-1;n>=1&&(i+=8*(1+encodeURIComponent(e[n]).length),!(n-1>0&&(r=8*(1+encodeURIComponent(e[n-1]).length),i+r>t)));n--);return e.slice(n)}(m(e,t).map(E),75497472)}function p(e,t,n,i){if(t===_&&i.id===c)return;const r=new Date;if(e<=o.NORMAL&&function(e,t,n,i,r){
"function"==typeof structuredClone&&(t=structuredClone(t));const o={id:a,message:t,subSystemId:i,timestamp:Number(e)};a+=1,n.push(o),void 0!==r&&n.length>r&&n.splice(0,1)}(r,t,n,i.id,i.maxCount),e<=d&&(!i.highRate||h())&&(!l||i.id.match(l))){const n=r.toISOString()+":"+i.id+":"+t;switch(e){case o.DEBUG:console.debug(n);break;case o.INFO:case o.NORMAL:i.color?console.log("%c"+n,"color: "+i.color):console.log(n);break;case o.WARNING:console.warn(n);break;case o.ERROR:console.error(n)}_=t,c=i.id,u&&clearTimeout(u),u=setTimeout(()=>{_=null,c=null,u=NaN},1e3)}}function A(e,t={}){const n=[];s.push(n);const i=Object.assign(t,{id:e});function r(e){return t=>p(e,String(t),n,i)}return{logDebug:r(o.DEBUG),logError:r(o.ERROR),logInfo:r(o.INFO),logNormal:r(o.NORMAL),logWarn:r(o.WARNING)}}const R=A("logger"),I=i.lon=(e,t)=>{T(o.DEBUG),R.logNormal("Debug logging enabled"),g=Boolean(e),l=t||null,b()},w=i.loff=()=>{T(o.INFO),R.logInfo("Debug logging disabled")};function b(){try{r&&(localStorage.setItem("tv.logger.logHighRate",String(g)),localStorage.setItem("tv.logger.loglevel",String(d)))}catch(e){R.logWarn(`Cannot save logger state (level: ${d}, high-rate: ${g}) to localStorage: ${e.message}`)}}!function(){g=!!r&&"true"===localStorage.getItem("tv.logger.logHighRate");let e=parseInt(r&&localStorage.getItem("tv.logger.loglevel")||"");Number.isNaN(e)&&(e=o.WARNING),T(e),R.logNormal(`Init with settings - level: ${d}, high-rate: ${g}`)}(),i.performance&&i.performance.now?R.logNormal("Sync logger and perf times, now is "+i.performance.now()):R.logWarn("Perf time is not available")},931493:(e,t,n)=>{function i(e){return e.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&")}n.d(t,{regExpEscape:()=>i})},876242:(e,t,n)=>{n.r(t),n.d(t,{CubicBezier:()=>i.CubicBezier,color:()=>i.color,dur:()=>i.dur,easingFunc:()=>i.easingFunc});var i=n(745269)},888035:(e,t,n)=>{var i;n.d(t,{BillingCycle:()=>i}),function(e){e.Monthly="m",e.ThreeMonths="3m",e.OneYear="y",e.TwoYears="2y"}(i||(i={}))},809965:(e,t,n)=>{var i,r,o;n.d(t,{ProPlans:()=>i,BrokerPlans:()=>r,BrokerPlansIds:()=>o}),function(e){e.Free="free",e.Pro="pro",e.ProTrial="pro_trial",e.ProRealtime="pro_realtime",e.ProRealtimeTrial="pro_realtime_trial",e.ProPremium="pro_premium",e.ProPremiumTrial="pro_premium_trial",e.ProMiniAlerts="pro_mini_alerts",e.ProMiniAds="pro_mini_ads",e.ProMiniLayouts="pro_mini_layouts",e.ProEdu="pro_edu"}(i||(i={})),function(e){e.Platinum="platinum",e.Gold="gold",e.Silver="silver",e.Free="free"}(r||(r={})),function(e){e[e.Platinum=3]="Platinum",e[e.Gold=2]="Gold",e[e.Silver=1]="Silver",e[e.Free=0]="Free"}(o||(o={}))},234405:(e,t,n)=>{n.r(t),n.d(t,{TRIAL_SUFFIX:()=>a,EA_SUFFIX:()=>s,CUSTOM_SUFFIX:()=>l,billingCycleToTimeUnit:()=>_,getReadableCycle:()=>c,getReadableNumericCycle:()=>u,billingPeriodText:()=>d,isEarlyAccess:()=>g,isTrialProduct:()=>S,getProductForTrial:()=>h,getDiscountFromEarlyAccess:()=>T,toEarlyAccess:()=>m,humanizeProPlan:()=>E,humanizeCardPlan:()=>f,getAmountOfDaysForBillingCycle:()=>p,countDiscountByBillingCycle:()=>A,billingCycleToMonth:()=>R,round2:()=>I,
round0:()=>w,floor0:()=>b,round2or0:()=>v,round1or0:()=>O,roundMinimal:()=>y,getPlanName:()=>L});n(897116);var i=n(787236),r=n(809965),o=n(888035);const a="_trial",s="_discount",l="_custom";function _(e){return{y:(0,i.t)("year",{plural:"years",count:1}),m:(0,i.t)("month",{plural:"months",count:1}),"3m":(0,i.t)("three months"),"2y":(0,i.t)("two years")}[e]}function c(e){return{m:(0,i.t)("monthly"),y:(0,i.t)("annually"),"3m":(0,i.t)("3 months"),"2y":(0,i.t)("2-year")}[e]||""}function u(e){return{[o.BillingCycle.Monthly]:(0,i.t)("monthly"),[o.BillingCycle.OneYear]:(0,i.t)("1 year"),[o.BillingCycle.ThreeMonths]:(0,i.t)("3 months"),[o.BillingCycle.TwoYears]:(0,i.t)("2 years")}[e]||""}function d(e){var t;return null!==(t={y:(0,i.t)("Billed every year."),m:(0,i.t)("Billed every month."),"2y":(0,i.t)("Billed every two years.")}[e])&&void 0!==t?t:""}function g(e){return/\d{0,2}_discount$/.test(e)}function S(e){return new RegExp(a+"$").test(e)}function h(e){return e.split(a)[0]}function T(e){const t=e.match(new RegExp("^(d{0,2})"+s+"$"));return t?+t[1]||50:0}function m(e,t){return`${e}_${t}${s}`}function E(e,t){let n=e;switch(e){case r.ProPlans.Pro:n="Pro";break;case r.ProPlans.ProRealtime:n="Pro+";break;case r.ProPlans.ProPremium:n="Premium";break;case r.ProPlans.ProMiniAds:case r.ProPlans.ProMiniLayouts:case r.ProPlans.ProMiniAlerts:n=(0,i.t)("1-feature");break;case r.ProPlans.ProEdu:n=(0,i.t)("Rookie")}return t&&(n+=" "+(0,i.t)("trial")),n}function f(e){let t=e;switch(e){case r.ProPlans.Pro:t="Pro";break;case r.ProPlans.ProRealtime:t="Pro+";break;case r.ProPlans.ProPremium:t="Premium";break;case r.ProPlans.Free:t="Basic"}return t}function p(e){switch(e){case o.BillingCycle.TwoYears:return 730;case o.BillingCycle.OneYear:return 365;case o.BillingCycle.ThreeMonths:return 90;case o.BillingCycle.Monthly:return 30;default:return 1}}function A(e,t,n){return Math.round((t-e)*R(n))}function R(e){switch(e){case o.BillingCycle.TwoYears:return 24;case o.BillingCycle.OneYear:return 12;default:return 1}}function I(e){return(Math.round(100*e)/100).toFixed(2)}function w(e){const t=Math.round(100*e)/100;return Math.round(t).toFixed(0)}function b(e){return Math.floor(e).toString()}function v(e){const t=Math.round(100*e)/100,n=Math.round(t);return Math.abs(t-n)>0?t.toFixed(2):n.toFixed(0)}function O(e){return Number.isInteger(e)?e.toFixed(0):(Math.round(10*e)/10).toFixed(1)}function y(e){const t=Math.round(100*e)/100,n=Math.round(10*e)/10,i=Math.round(t);return Math.abs(t-i)>0?Math.abs(t-n)>0?t.toFixed(2):n.toFixed(1):i.toFixed(0)}function L(e){const t=(0,i.t)("{proPlanName} Trial");if(S(e)){const n=E(h(e));return t.format({proPlanName:n})}return E(e)}},95935:(e,t,n)=>{n.r(t),n.d(t,{guid:()=>r,randomHash:()=>o,randomHashN:()=>a});const i="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function r(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,e=>{const t=16*Math.random()|0;return("x"===e?t:3&t|8).toString(16)})}function o(){return a(12)}function a(e){let t="";for(let n=0;n<e;++n){
const e=Math.floor(Math.random()*i.length);t+=i[e]}return t}},977809:(e,t,n)=>{function i(e){return e.reduce((function(e,t,n){return~e.indexOf(t)||e.push(t),e}),[])}n.r(t),n.d(t,{uniq:()=>i})},677748:(e,t,n)=>{function i(e,t=!1){"loading"!==document.readyState?t?setTimeout(()=>e(),1):e():document.addEventListener("DOMContentLoaded",()=>e())}n.d(t,{whenDocumentReady:()=>i,whenDocumentReadyPromise:()=>r});const r=new Promise(e=>{i(e)})},719718:(e,t,n)=>{n.d(t,{createImage:()=>r,marketingAnalyticsEnabled:()=>o,yandexAnalyticsEnabled:()=>a});var i=n(125226);function r(e){const t=document.createElement("img");return t.src=e,t}function o(){return(0,i.isFeatureEnabled)("marketing-analytics")}function a(){return(0,i.isFeatureEnabled)("yandex_metric_enabled")}},665343:(e,t,n)=>{n.d(t,{TwitterEvent:()=>i,trackTwitterEvent:()=>a});var i,r=n(719718),o=n(261030);!function(e){e.SiteVisit="o2eg2",e.TrialSignUp="o1wjo",e.RegistrationCompleted="o1wjq",e.PaidPlanAcquired="o1wjr"}(i||(i={}));function a(e){(0,r.marketingAnalyticsEnabled)()&&(0,o.getCookieSetting)(o.CookieSettings.Analytics)&&(e=>[`https://analytics.twitter.com/i/adsct?txn_id=${e}&p_id=Twitter&tw_sale_amount=0&tw_order_quantity=0`,`https://t.co/i/adsct?txn_id=${e}&p_id=Twitter&tw_sale_amount=0&tw_order_quantity=0"`])(e).map(r.createImage)}},579917:(e,t,n)=>{function(){}