(self.webpackChunktradingview=self.webpackChunktradingview||[]).push([[24081,20575],{24654:e=>{"use strict";e.exports=function(e){for(var t=[],i=e.length,n=0;n<i;n++){var a=e.charCodeAt(n);if(a>=55296&&a<=56319&&i>n+1){var o=e.charCodeAt(n+1);o>=56320&&o<=57343&&(a=1024*(a-55296)+o-56320+65536,n+=1)}a<128?t.push(a):a<2048?(t.push(a>>6|192),t.push(63&a|128)):a<55296||a>=57344&&a<65536?(t.push(a>>12|224),t.push(a>>6&63|128),t.push(63&a|128)):a>=65536&&a<=1114111?(t.push(a>>18|240),t.push(a>>12&63|128),t.push(a>>6&63|128),t.push(63&a|128)):t.push(239,191,189)}return new Uint8Array(t).buffer}},9995:(e,t,i)=>{var n=i(939340);e.exports=function(e){return e=n(e^=e>>>16,2246822507),e=n(e^=e>>>13,3266489909),(e^=e>>>16)>>>0}},939340:e=>{"use strict";e.exports=Math.imul||function(e,t){var i=65535&e,n=65535&t;return i*n+((e>>>16&65535)*n+i*(t>>>16&65535)<<16>>>0)|0}},855385:(e,t,i)=>{var n=i(939340),a=i(9995),o=i(24654),r=new Uint32Array([3432918353,461845907]);function s(e,t){return e<<t|e>>>32-t}e.exports=function(e,t){if(t=t?0|t:0,"string"==typeof e&&(e=o(e)),!(e instanceof ArrayBuffer))throw new TypeError("Expected key to be ArrayBuffer or string");var i=new Uint32Array([t]);return function(e,t){for(var i=e.byteLength/4|0,a=new Uint32Array(e,0,i),o=0;o<i;o++)a[o]=n(a[o],r[0]),a[o]=s(a[o],15),a[o]=n(a[o],r[1]),t[0]=t[0]^a[o],t[0]=s(t[0],13),t[0]=n(t[0],5)+3864292196}(e,i),function(e,t){var i=e.byteLength/4|0,a=e.byteLength%4,o=0,c=new Uint8Array(e,4*i,a);switch(a){case 3:o^=c[2]<<16;case 2:o^=c[1]<<8;case 1:o^=c[0]<<0,o=s(o=n(o,r[0]),15),o=n(o,r[1]),t[0]=t[0]^o}}(e,i),function(e,t){t[0]=t[0]^e.byteLength,t[0]=a(t[0])}(e,i),i.buffer}},43464:(e,t,i)=>{"use strict";i.r(t),i.d(t,{oldBannerKey:()=>g,bannerPrivacyPreferenceKey:()=>_,cookieBannerDelegate:()=>d,removeOldCookieBannerKey:()=>u,checkCookiePolicy:()=>m,onAccept:()=>h,showCookiesNotification:()=>f,initCookiesNotification:()=>w});var n=i(49437),a=i(314802),o=(i(659863),i(579917)),r=i(588948),s=i(226305),c=i(578960),l=i(261030);const g="cookieBanner",_="cookiePrivacyPreferenceBanner",d=(0,o.createDeferredPromise)();function u(){return n.TVLocalStorage.removeItem(g)}function m(e){return"accepted"===n.TVLocalStorage.getItem(e)||"notApplicable"===n.TVLocalStorage.getItem(e)}function h(){n.TVLocalStorage.setItem(_,"accepted")}let p=!1;async function f(){if(p)return;p=!0;const e=await Promise.all([i.e(48463),i.e(18844),i.e(44408),i.e(36464),i.e(31253),i.e(99626),i.e(67457),i.e(43529),i.e(89042),i.e(50621),i.e(75514),i.e(18954),i.e(87410),i.e(38869)]).then(i.bind(i,458107));await e.showCookiesNotification()&&(h(),(0,c.trackEvent)("click","accept_all")),p=!1}async function w(){var e;const t=document.querySelector(".js-main-page-promo-container");if(!m(_)&&!(0,a.isOnMobileAppPage)("any")){t||d.resolve();if((null===(e=(0,r.getFreshInitData)().currentLocaleInfo)||void 0===e?void 0:e.is_in_european_union)||"ignored"===n.TVLocalStorage.getItem(_))return d.promise.then(()=>f());{const e=await(0,s.userGeoInfo)();if(e.is_in_european_union||(i=e.country_code,
["is","li","no","uk"].includes(i)))return n.TVLocalStorage.setItem(_,"ignored"),d.promise.then(()=>f());n.TVLocalStorage.setItem(_,"notApplicable"),(0,l.setCookieSetting)(l.CookieSettings.Analytics,!0),(0,l.setCookieSetting)(l.CookieSettings.Advertising,!0)}}var i}},578960:(e,t,i)=>{"use strict";i.d(t,{trackEvent:()=>a});var n=i(776734);async function a(e,t){var i;let a;a="/"===window.location.pathname?"index":window.location.pathname.split("/")[1];const o=null!==(i=window.user.pro_plan)&&void 0!==i?i:window.is_authenticated?"free":"visitor",r=await(0,n.getTracker)();r&&r.trackToastDialog("cookies",e,t,a,o)}},97639:(e,t,i)=>{"use strict";e=i.nmd(e);const n=i(911905).getLogger("Common.Delegate");function a(){this._listeners=[]}function o(e){return!e.singleshot}a.prototype.subscribe=function(e,t,i){const n={object:e,member:t,singleshot:!!i,skip:!1};this._listeners.push(n)},a.prototype.unsubscribe=function(e,t){for(let i=0;i<this._listeners.length;++i){const n=this._listeners[i];if(n.object===e&&n.member===t){n.skip=!0,this._listeners.splice(i,1);break}}},a.prototype.unsubscribeAll=function(e){for(let t=this._listeners.length-1;t>=0;--t){const i=this._listeners[t];i.object===e&&(i.skip=!0,this._listeners.splice(t,1))}},a.prototype.destroy=function(){delete this._listeners},a.prototype.fire=function(){const e=this._listeners;this._listeners=this._listeners.filter(o);const t=e.length;for(let i=0;i<t;++i){const t=e[i];if(!t.skip)try{t.member.apply(t.object||null,arguments)}catch(e){n.logError(e.stack||e.message)}}},"undefined"!=typeof window&&(window.Delegate=a),e&&e.exports&&(e.exports=a)},86674:(e,t,i)=>{"use strict";i.d(t,{fetch:()=>a});const n=(0,i(911905).getLogger)("Fetch");function a(e,t,i={}){{t=t||{},function(e){return new URL(e,document.baseURI).origin===location.origin}(e)&&(t.headers?t.headers instanceof Headers||(t.headers=new Headers(t.headers)):t.headers=new Headers,window.locale&&t.headers.set("X-Language",window.locale),t.headers.set("X-Requested-With","XMLHttpRequest")),void 0===t.credentials&&(t.credentials="same-origin");const a=window.fetch(e,t);return a.then(a=>{if(!a.ok){let o="";t.method&&(o+=t.method.toUpperCase()+" "),o+=e,o+=". Status "+a.status,a.statusText&&(o+=". "+a.statusText),a.headers.via&&(o+=". Via: "+a.headers.via),i.logBodyOnError&&"string"==typeof t.body&&(o+=". Body: "+t.body.slice(0,1024)),n.logError(o)}return a},i=>{if(i&&"AbortError"===i.name)return;let a="";t.method&&(a+=t.method.toUpperCase()+" "),a+=e,navigator.onLine?a+=". "+i:a+=". User is offline.",n.logError(a)}),a}}},911905:(e,t,i)=>{"use strict";i.r(t),i.d(t,{LOGLEVEL:()=>o,getLogLevel:()=>m,isHighRateEnabled:()=>h,setLogLevel:()=>p,getRawLogHistory:()=>f,serializeLogHistoryEntry:()=>w,getLogHistory:()=>b,getLogger:()=>k,loggingOn:()=>S,loggingOff:()=>A});const n="undefined"!=typeof window?window:{};let a=!1;try{localStorage.getItem(""),a=!0}catch(e){}var o;!function(e){e[e.ERROR=1]="ERROR",e[e.WARNING=2]="WARNING",e[e.INFO=3]="INFO",e[e.NORMAL=4]="NORMAL",e[e.DEBUG=5]="DEBUG"}(o||(o={}));let r=0;const s=[]
;let c=null,l=null,g=null,_=NaN,d=o.WARNING,u=!1;function m(){return d}function h(){return u}function p(e){e=Math.max(o.ERROR,Math.min(o.DEBUG,e)),d=e,D()}function f(e,t){let i=s.reduce((e,t)=>e.concat(t),[]);return i.sort((e,t)=>e.id-t.id),void 0!==t&&(i=i.filter(e=>e.subSystemId===t)),"number"==typeof e&&(i=i.slice(-e)),i}function w(e){return new Date(e.timestamp).toISOString()+":"+e.subSystemId+":"+e.message.replace(/"/g,"'")}function b(e,t){return function(e,t){let i,n=0,a=0;for(i=e.length-1;i>=1&&(n+=8*(1+encodeURIComponent(e[i]).length),!(i-1>0&&(a=8*(1+encodeURIComponent(e[i-1]).length),n+a>t)));i--);return e.slice(i)}(f(e,t).map(w),75497472)}function v(e,t,i,n){if(t===l&&n.id===g)return;const a=new Date;if(e<=o.NORMAL&&function(e,t,i,n,a){"function"==typeof structuredClone&&(t=structuredClone(t));const o={id:r,message:t,subSystemId:n,timestamp:Number(e)};r+=1,i.push(o),void 0!==a&&i.length>a&&i.splice(0,1)}(a,t,i,n.id,n.maxCount),e<=d&&(!n.highRate||h())&&(!c||n.id.match(c))){const i=a.toISOString()+":"+n.id+":"+t;switch(e){case o.DEBUG:console.debug(i);break;case o.INFO:case o.NORMAL:n.color?console.log("%c"+i,"color: "+n.color):console.log(i);break;case o.WARNING:console.warn(i);break;case o.ERROR:console.error(i)}l=t,g=n.id,_&&clearTimeout(_),_=setTimeout(()=>{l=null,g=null,_=NaN},1e3)}}function k(e,t={}){const i=[];s.push(i);const n=Object.assign(t,{id:e});function a(e){return t=>v(e,String(t),i,n)}return{logDebug:a(o.DEBUG),logError:a(o.ERROR),logInfo:a(o.INFO),logNormal:a(o.NORMAL),logWarn:a(o.WARNING)}}const y=k("logger"),S=n.lon=(e,t)=>{p(o.DEBUG),y.logNormal("Debug logging enabled"),u=Boolean(e),c=t||null,D()},A=n.loff=()=>{p(o.INFO),y.logInfo("Debug logging disabled")};function D(){try{a&&(localStorage.setItem("tv.logger.logHighRate",String(u)),localStorage.setItem("tv.logger.loglevel",String(d)))}catch(e){y.logWarn(`Cannot save logger state (level: ${d}, high-rate: ${u}) to localStorage: ${e.message}`)}}!function(){u=!!a&&"true"===localStorage.getItem("tv.logger.logHighRate");let e=parseInt(a&&localStorage.getItem("tv.logger.loglevel")||"");Number.isNaN(e)&&(e=o.WARNING),p(e),y.logNormal(`Init with settings - level: ${d}, high-rate: ${u}`)}(),n.performance&&n.performance.now?y.logNormal("Sync logger and perf times, now is "+n.performance.now()):y.logWarn("Perf time is not available")},226305:(e,t,i)=>{"use strict";i.d(t,{userGeoInfo:()=>r});var n=i(86674);const a=(0,i(911905).getLogger)("User.GeoInfo");let o;function r(){if(void 0!==o)return o;return o=(0,n.fetch)("/check_language/",{method:"POST"}).then(e=>{if(e.ok)return e.json();throw new Error(e.statusText)}).catch(e=>(a.logWarn(e.message),{})),o}},910288:(e,t,i)=>{"use strict";function n(e,t,i,n,a){let o="";if(n=n?"; path="+n:"",a=a?"; domain="+a:"",i){const e=new Date;e.setTime(e.getTime()+24*i*60*60*1e3),o="; expires="+e.toUTCString()}else o="";document.cookie=e+"="+t+o+a+n}function a(e){const t=e+"=",i=document.cookie.split(";");for(let e=0;e<i.length;e++){let n=i[e];for(;" "===n.charAt(0);)n=n.substring(1,n.length)
;if(0===n.indexOf(t))return n.substring(t.length,n.length)}return null}i.d(t,{set:()=>n,get:()=>a})},778785:(e,t,i)=>{"use strict";i.r(t),i.d(t,{mobiletouch:()=>a,touch:()=>o,setClasses:()=>r});const n="ontouchstart"in window,a=n&&"onorientationchange"in window,o=n||!!navigator.maxTouchPoints;function r(){document.documentElement.classList.add(o?"feature-touch":"feature-no-touch",a?"feature-mobiletouch":"feature-no-mobiletouch")}},261030:(e,t,i)=>{"use strict";i.d(t,{CookieSettings:()=>n,cookieSettingsChangeEvent:()=>s,setCookieSetting:()=>l,getCookieSetting:()=>g});var n,a=i(251954),o=i(49437),r=i(43464);!function(e){e.Analytics="analytics",e.Advertising="advertising"}(n||(n={}));const s="cookie_settings_changed",c={[n.Analytics]:!1,[n.Advertising]:!1};function l(e,t){c[e]=t,o.TVLocalStorage.setItem("cookiesSettings",JSON.stringify(c)),a.emit(s,e,t)}function g(e){return c[e]}!function(){const e=o.TVLocalStorage.getItem("cookiesSettings");if(e)try{const t=JSON.parse(e);c[n.Analytics]=(null==t?void 0:t[n.Analytics])||!1,c[n.Advertising]=(null==t?void 0:t[n.Advertising])||!1}catch(e){}else(0,r.checkCookiePolicy)(r.oldBannerKey)&&(l(n.Analytics,!0),l(n.Advertising,!0),(0,r.onAccept)(),(0,r.removeOldCookieBannerKey)())}()},579917:(e,t,i)=>{"use strict";function(){}