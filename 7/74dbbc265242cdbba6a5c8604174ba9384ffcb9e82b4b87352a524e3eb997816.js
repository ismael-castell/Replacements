(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2888],{23347:function(e,t,n){"use strict";n.d(t,{zh:function(){return s},ZP:function(){return i},hz:function(){return u}});var r=n(67294);function o(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{u(r.next(e))}catch(t){i(t)}}function s(e){try{u(r.throw(e))}catch(t){i(t)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}u((r=r.apply(e,t||[])).next())}))}class i{constructor(e){this.features=[],this.baseUrl=e.baseUrl,this.toggleSetting=e.settings}static getFeatureToggle(e,t,n){return o(this,void 0,void 0,(function*(){let r=[];try{const o=new Headers(t),i=yield fetch(`${e}/v3/client_conf/feature_toggles?toggle_names=${null===n||void 0===n?void 0:n.join(",")}`,{method:"GET",headers:o});r=yield i.json()}catch(o){console.error("error",o)}return r}))}getFeatureToggle(e){var t;return o(this,void 0,void 0,(function*(){try{const n=new Headers(e),r=yield fetch(`${this.baseUrl}/v3/client_conf/feature_toggles?toggle_names=${null===(t=this.toggleSetting)||void 0===t?void 0:t.join(",")}`,{method:"GET",headers:n});r.ok?this.features=yield r.json():this.features=[]}catch(n){console.error("error",n)}return this.features}))}getAllFeatures(){return this.features}checkFeature(e){var t;let n=this.features.filter((t=>t.name===e));return"ON"===(null===(t=null===n||void 0===n?void 0:n[0])||void 0===t?void 0:t.status)}}const a=[],s=r.createContext(a),u=()=>{const e=r.useContext(s);return{getAllFeatures:function(){return e},checkFeature:function(t){var n;let r=e.filter((e=>e.name===t));return"ON"===(null===(n=null===r||void 0===r?void 0:r[0])||void 0===n?void 0:n.status)}}}},69093:function(e,t,n){"use strict";n.d(t,{y:function(){return i},$:function(){return s}});var r=n(67294);const o={state:{translations:{},lang:"en",debug:!1}},i=r.createContext(o);function a(e){if(Array.isArray(e))return 0===e.length;if("object"===typeof e){if(e)for(const t in e)return!1;return!0}return!e}const s=()=>{const{state:e}=r.useContext(i);return{t:(t,n,r={})=>{let o="";if(o=e.translations[t]?e.translations[t]:"string"===typeof n?n:t,"string"===typeof n){if(!a(r)){const e=new RegExp("(\\{\\w+\\})","g");let t=o.split(e);for(let n in r){const e=new RegExp("\\{"+n+"\\}");t=t.map((t=>e.test(t)?r[n]:t))}o=t.join("")}}else if(!a(n)){const e=new RegExp("(\\{\\w+\\})","g");let t=o.split(e);for(let r in n){const e=new RegExp("\\{"+r+"\\}");t=t.map((t=>e.test(t)?n[r]:t))}o=t.join("")}return e.debug?`${o} - (${t})`:o},i18n:{language:e.lang}}}},53409:function(e,t,n){"use strict";function r(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{u(r.next(e))}catch(t){i(t)}}function s(e){try{u(r.throw(e))}catch(t){i(t)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}u((r=r.apply(e,t||[])).next())}))}function o(e){const t=document.cookie.split(";");let n="",r={};return t.forEach((e=>{const t=e.split("=");r[t[0].trim()]=t[1]})),n=r[e],n}n.d(t,{Z:function(){return i}});const i={deviceType:10,baseUrl:"undefined"===typeof window?"":/\.italki.com/.test(window.location.hostname)?"https://tracking-api.italki.com/v1/events":/\.italki.cn/.test(window.location.hostname)?"https://tracking-api.italki.cn/v1/events":/moon/.test(window.location.hostname)?"https://moon-tracking.longxins.com/v1/events":/mars/.test(window.location.hostname)?"https://mars-tracking.longxins.com/v1/events":void 0,country:"undefined"!==typeof window?o("kp.country"):"",track(e,t){return r(this,void 0,void 0,(function*(){const n=function(){let e={};return window.location.search.substring(1).split("&").forEach((t=>{const n=t.split("=");e[n[0]]=n[1]})),e}(),{utm_source:r,utm_medium:a,utm_campaign:s,utm_term:u,utm_content:c,internal_source:l,internal_campaign:f,internal_ref:d,internal_medium:p,internal_term:h,internal_content:m,hmcu:v,hmpl:y,hmsr:g,hmkw:b,hmci:w,ref:x}=n,O=[window.screen.width,window.screen.height].sort((function(e,t){return e-t})),j={user:{user_id:Number(o("kp.user_id"))||0,browser_key:""},where:{device_type:i.deviceType,platform:"js",from_route:document.referrer,current_route:window.decodeURIComponent(window.location.href),device_language:navigator.language,site_language:o("hl")||"en-us",user_agent:navigator.userAgent,country:"",screen_size:O,install_source:""}};let k=!1;if(j.user.browser_key=o("kp.browser.key"),j.where.country=i.country.toLowerCase(),!j.user.browser_key){const e="10000000-1000-4000-8000-100000000000".replace(/[018]/g,(e=>(Number(e)^window.crypto.getRandomValues(new Uint8Array(1))[0]&15>>Number(e)/4).toString(16)));!function(e,t,n){let r="localhost";const o=new Date;o.setTime(o.getTime()+24*n*60*60*1e3);const i="; expires="+o.toUTCString(),a=window.location.hostname.split(".");a.length>1&&(r=`${a[a.length-2]}.${a[a.length-1]}`),document.cookie=`${e}=${t}${i}; path=/;domain=${r}`}("kp.browser.key",e,7300),j.user.browser_key=e}try{const n=Object.assign({what:e},Object.assign(Object.assign({},j),{when:{ts:(new Date).getTime()},how:{utm_source:r,utm_medium:a,utm_campaign:s,utm_term:u,utm_content:c,internal_source:l,internal_campaign:f,internal_ref:d,internal_medium:p,internal_term:h,internal_content:m,hmcu:v,hmpl:y,hmsr:g,hmkw:b,hmci:w,ref:x}}),{data:t});r||a||s||u||c||l||f||d||p||h||m||v||y||g||b||w||x||delete n.how;k=!!(yield fetch(i.baseUrl,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(n)})).json()}catch(S){k=!1}return k}))}}},33805:function(){}