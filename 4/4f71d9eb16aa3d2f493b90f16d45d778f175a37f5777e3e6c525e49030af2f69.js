!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self).KaChing=t()}(this,(function(){"use strict";function e(e,t,n){return e(n={path:t,exports:{},require:function(e,t){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==t&&n.path)}},n.exports),n.exports}var t=e((function(e){var t=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=t)})),n=e((function(e){var t=e.exports={version:"2.6.5"};"number"==typeof __e&&(__e=t)})),i=(n.version,function(e){return"object"==typeof e?null!==e:"function"==typeof e}),r=function(e){if(!i(e))throw TypeError(e+" is not an object!");return e},o=function(e){try{return!!e()}catch(t){return!0}},a=!o((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})),s=t.document,u=i(s)&&i(s.createElement),d=!a&&!o((function(){return 7!=Object.defineProperty((e="div",u?s.createElement(e):{}),"a",{get:function(){return 7}}).a;var e})),c=Object.defineProperty,l={f:a?Object.defineProperty:function(e,t,n){if(r(e),t=function(e,t){if(!i(e))return e;var n,r;if(t&&"function"==typeof(n=e.toString)&&!i(r=n.call(e)))return r;if("function"==typeof(n=e.valueOf)&&!i(r=n.call(e)))return r;if(!t&&"function"==typeof(n=e.toString)&&!i(r=n.call(e)))return r;throw TypeError("Can't convert object to primitive value")}(t,!0),r(n),d)try{return c(e,t,n)}catch(o){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(e[t]=n.value),e}},f=a?function(e,t,n){return l.f(e,t,function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}(1,n))}:function(e,t,n){return e[t]=n,e},p={}.hasOwnProperty,g=function(e,t){return p.call(e,t)},h=0,m=Math.random(),v=function(e){return"Symbol(".concat(void 0===e?"":e,")_",(++h+m).toString(36))},b=e((function(e){var i=t["__core-js_shared__"]||(t["__core-js_shared__"]={});(e.exports=function(e,t){return i[e]||(i[e]=void 0!==t?t:{})})("versions",[]).push({version:n.version,mode:"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})})),y=b("native-function-to-string",Function.toString),_=e((function(e){var i=v("src"),r=(""+y).split("toString");n.inspectSource=function(e){return y.call(e)},(e.exports=function(e,n,o,a){var s="function"==typeof o;s&&(g(o,"name")||f(o,"name",n)),e[n]!==o&&(s&&(g(o,i)||f(o,i,e[n]?""+e[n]:r.join(String(n)))),e===t?e[n]=o:a?e[n]?e[n]=o:f(e,n,o):(delete e[n],f(e,n,o)))})(Function.prototype,"toString",(function(){return"function"==typeof this&&this[i]||y.call(this)}))})),S=function(e,t,n){if(function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!")}(e),void 0===t)return e;switch(n){case 1:return function(n){return e.call(t,n)};case 2:return function(n,i){return e.call(t,n,i)};case 3:return function(n,i,r){return e.call(t,n,i,r)}}return function(){return e.apply(t,arguments)}},w=function(e,i,r){var o,a,s,u,d=e&w.F,c=e&w.G,l=e&w.S,p=e&w.P,g=e&w.B,h=c?t:l?t[i]||(t[i]={}):(t[i]||{}).prototype,m=c?n:n[i]||(n[i]={}),v=m.prototype||(m.prototype={});for(o in c&&(r=i),r)s=((a=!d&&h&&void 0!==h[o])?h:r)[o],u=g&&a?S(s,t):p&&"function"==typeof s?S(Function.call,s):s,h&&_(h,o,s,e&w.U),m[o]!=s&&f(m,o,u),p&&v[o]!=s&&(v[o]=s)};t.core=n,w.F=1,w.G=2,w.S=4,w.P=8,w.B=16,w.W=32,w.U=64,w.R=128;var P=w,x={}.toString,E=function(e){return x.call(e).slice(8,-1)},k=Object("z").propertyIsEnumerable(0)?Object:function(e){return"String"==E(e)?e.split(""):Object(e)},j=function(e){if(null==e)throw TypeError("Can't call method on  "+e);return e},I=function(e){return Object(j(e))},A=Math.ceil,z=Math.floor,O=function(e){return isNaN(e=+e)?0:(e>0?z:A)(e)},C=Math.min,T=function(e){return e>0?C(O(e),9007199254740991):0},M=Array.isArray||function(e){return"Array"==E(e)},U=e((function(e){var n=b("wks"),i=t.Symbol,r="function"==typeof i;(e.exports=function(e){return n[e]||(n[e]=r&&i[e]||(r?i:v)("Symbol."+e))}).store=n})),F=U("species"),R=function(e,t){return new(function(e){var t;return M(e)&&("function"!=typeof(t=e.constructor)||t!==Array&&!M(t.prototype)||(t=void 0),i(t)&&null===(t=t[F])&&(t=void 0)),void 0===t?Array:t}(e))(t)},q=U("unscopables"),N=Array.prototype;null==N[q]&&f(N,q,{});var B,D,V,L,W,G,K,H,$,J=function(e){N[q][e]=!0},Q=(V=1==(B=5),L=2==B,W=3==B,G=4==B,K=6==B,H=5==B||K,$=D||R,function(e,t,n){for(var i,r,o=I(e),a=k(o),s=S(t,n,3),u=T(a.length),d=0,c=V?$(e,u):L?$(e,0):void 0;u>d;d++)if((H||d in a)&&(r=s(i=a[d],d,o),B))if(V)c[d]=r;else if(r)switch(B){case 3:return!0;case 5:return i;case 6:return d;case 2:c.push(i)}else if(G)return!1;return K?-1:W||G?G:c}),Y=!0;"find"in[]&&Array(1).find((function(){Y=!1})),P(P.P+P.F*Y,"Array",{find:function(e){return Q(this,e,arguments.length>1?arguments[1]:void 0)}}),J("find");var X=Math.max,Z=Math.min,ee=function(e,t){return(e=O(e))<0?X(e+t,0):Z(e,t)};P(P.P,"Array",{fill:function(e){for(var t=I(this),n=T(t.length),i=arguments.length,r=ee(i>1?arguments[1]:void 0,n),o=i>2?arguments[2]:void 0,a=void 0===o?n:ee(o,n);a>r;)t[r++]=e;return t}}),J("fill");var te,ne,ie=function(e){return k(j(e))},re=b("keys"),oe=(te=!1,function(e,t,n){var i,r=ie(e),o=T(r.length),a=ee(n,o);if(te&&t!=t){for(;o>a;)if((i=r[a++])!=i)return!0}else for(;o>a;a++)if((te||a in r)&&r[a]===t)return te||a||0;return!te&&-1}),ae=re[ne="IE_PROTO"]||(re[ne]=v(ne)),se="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(","),ue=Object.keys||function(e){return function(e,t){var n,i=ie(e),r=0,o=[];for(n in i)n!=ae&&g(i,n)&&o.push(n);for(;t.length>r;)g(i,n=t[r++])&&(~oe(o,n)||o.push(n));return o}(e,se)},de={f:Object.getOwnPropertySymbols},ce={f:{}.propertyIsEnumerable},le=Object.assign,fe=!le||o((function(){var e={},t={},n=Symbol(),i="abcdefghijklmnopqrst";return e[n]=7,i.split("").forEach((function(e){t[e]=e})),7!=le({},e)[n]||Object.keys(le({},t)).join("")!=i}))?function(e,t){for(var n=I(e),i=arguments.length,r=1,o=de.f,a=ce.f;i>r;)for(var s,u=k(arguments[r++]),d=o?ue(u).concat(o(u)):ue(u),c=d.length,l=0;c>l;)a.call(u,s=d[l++])&&(n[s]=u[s]);return n}:le;function pe(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function ge(e,t,n){return t&&pe(e.prototype,t),n&&pe(e,n),e}function he(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function me(){return(me=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}function ve(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,be(e,t)}function be(e,t){return(be=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function ye(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}P(P.S+P.F,"Object",{assign:fe});var _e=function(e,t,n,i){return void 0===t&&(t=!1),void 0===n&&(n=[]),void 0===i&&(i=void 0),new Promise((function(r,o){if("undefined"==typeof document)return r();var a=document.createElement("script");return t&&(a.async=!0),n.length&&n.forEach((function(e){a.setAttribute(e.name,e.value)})),a.src=e,a.onload=r,a.onerror=o,i?i.appendChild(a):(i=document.getElementsByTagName("script")[0])&&i.parentNode&&i.parentNode.insertBefore(a,i),null}))},Se=function(e){},we=Se;-1!==window.location.search.indexOf("pbjs_debug=true")&&(Se=Function.prototype.bind.call(console.log,console,"%cKa-Ching","display: inline-block; color: #F2F3EF; background: #E8634E; padding: 1px 4px; border-radius: 3px;"),we=Function.prototype.bind.call(console.warn,console,"%cKa-Ching","display: inline-block; color: #F2F3EF; background: #E8634E; padding: 1px 4px; border-radius: 3px;"));var Pe=Se;function xe(e,t){void 0===t&&(t={bubbles:!1,cancelable:!1,detail:void 0});var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,!!t.bubbles,!!t.cancelable,t.detail),n}xe.prototype=Event.prototype;var Ee="function"!=typeof CustomEvent?xe:CustomEvent;function ke(e,t){var n=new Ee(e,{detail:t});document.dispatchEvent(n)}var je,Ie="render.init",Ae="render.complete",ze=function(e,t){setTimeout((function(){Pe("emitting on channel KaChing."+e,t),je("KaChing."+e,t)}),0)},Oe="preload",Ce="defineSlot",Te="beforePublish",Me="beforeInit",Ue="init",Fe="afterInit",Re="reset",qe=function(){function e(){}return e.run=function(e,t,n){var i=t.find((function(e){return"RequestNonPersonalizedAds"===e.getName()})),r=t.map((function(t){if(!t[e])return null;if(i&&!n.config.get("personalAds")&&t.getName().match(/Cxense|Prebid/))return Pe("[ADAPTER "+t.getName()+" "+e+" skipped because of requestNonPersonalisedAds]"),null;var r=t[e];return Pe("[ADAPTER "+t.getName()+"] "+e),r.call(t,n)}));return Promise.all(r)},e}(),Ne=function(){function e(e){he(this,"_slots",[]),window.googletag=window.googletag||{},window.googletag.cmd=window.googletag.cmd||[],this.googletag=window.googletag,e.blockads||_e("https://securepubads.g.doubleclick.net/tag/js/gpt.js")}var t=e.prototype;return t.defineSlot=function(e){return this._slots.push(e),e},t._registerSlot=function(e,t){var n,i=t.adunit||e.adUnit;if(t.isOutOfPage)n=this.googletag.defineOutOfPageSlot(i,t.elementId);else if(t.interstitial){var r=(n=this.googletag.defineOutOfPageSlot(i,this.googletag.enums.OutOfPageFormat.INTERSTITIAL)).getSlotElementId();t.elementId=r}else{var o=e.get("adFormats");n=this.googletag.defineSlot(i,o[t.format].sizes||o[t.format],t.elementId)}if(n)for(var a in t.sizeMapping&&t.sizeMapping.length&&function(e,t,n){var i=e.sizeMapping();n.forEach((function(e){var t=e[0],n=e[1];i.addSize(t,n)})),t.defineSizeMapping(i.build())}(this.googletag,n,t.sizeMapping),t.isVideoCompanion&&n.addService(this.googletag.companionAds()),n.addService(this.googletag.pubads()),t.targeting)t.targeting[a]&&(Pe("adding "+a+" ("+t.targeting[a]+") to slot "+t+"."),n.setTargeting(a,t.targeting[a]));else Pe("[SLOT]",document.querySelectorAll("#"+t).length+" ad positions found with "+t+" id");return n},t.display=function(e,t){var n=this;Array.isArray(t)||(t=[t]);var i=[];return t.forEach((function(t){if(t&&!t.isDisplayed()){var r=n._registerSlot(e,t);i.push(t),Pe("[SLOT]","displaying "+t),t.displayed=!0,t.setDfpSlot(r),n.googletag.display(t.elementId)}})),i},t.setTargeting=function(e,t){var n=this;this.googletag.cmd.push((function(){Pe("adding "+e+" ("+t+") to DFP request."),n.googletag.pubads().setTargeting(e,t)}))},t.clearTargeting=function(){var e=this;this.googletag.cmd.push((function(){Pe("clearing the key-values from the DFP request."),e.googletag.pubads().clearTargeting()}))},t.sizeMapping=function(){var e=this;return new Promise((function(t){e.googletag.cmd.push((function(){t(e.googletag.sizeMapping())}))}))},t.setRequestNonPersonalizedAds=function(e){var t=this;this.googletag.cmd.push((function(){Pe("adding non personalised ads value ("+e+") to DFP request."),t.googletag.pubads().setRequestNonPersonalizedAds(e)}))},t.beforeFirstPublish=function(e){var t=this;return new Promise((function(n){t.googletag.cmd.push((function(){t.googletag.pubads().addEventListener("slotRenderEnded",(function(n){var i=e.get("features")||{},r=n.slot,o=n.isEmpty,a=n.size,s=r.getResponseInformation()||{},u=t._slots.find((function(e){return e.elementId===r.getSlotElementId()})),d={identifier:u.identifier,format:u.format,slot:u.slot||null,isEmpty:!!o||11725554===s.creativeTemplateId,size:a},c=r.getTargeting("hb_size");if(a&&1===a[0]&&1===a[1]&&c&&c.length)try{d.size=c[0].split("x").map(Number)}catch(l){}u.context=d,ze(Ie,d),o&&!i.blockEventCompleteOnEmpty&&(we("[DEPRECATED] blockEventCompleteOnEmpty is false: we still send render complete messages even when it's empty."),ze(Ae,d))})),t.googletag.pubads().addEventListener("slotOnload",(function(e){var n=e.slot,i=t._slots.find((function(e){return e.elementId===n.getSlotElementId()}));ze(Ae,i.context)})),t.googletag.pubads().collapseEmptyDivs(null),t.googletag.pubads().enableAsyncRendering(),t.googletag.pubads().enableSingleRequest(),t.googletag.pubads().disableInitialLoad(),t.googletag.enableServices()})),n()}))},t.publish=function(e){var t=this;return new Promise((function(n){t.googletag.cmd.push((function(){e.get("video")&&(t.googletag.companionAds().setRefreshUnfilledSlots(!0),t.googletag.pubads().enableVideoAds());var i=e.get("lazyload")||{fetchMarginPercent:25,renderMarginPercent:10,mobileScaling:2,scatterSlots:!1};t.googletag.pubads().enableLazyLoad?t.googletag.pubads().enableLazyLoad({fetchMarginPercent:i.fetchMarginPercent,renderMarginPercent:i.renderMarginPercent,mobileScaling:i.mobileScaling}):Pe("[DFP] Lazyload not available - ad blocker likely active");var r=t.display(e,t._slots),o=function(e,t){return t.reduce((function(t,n){var i=n[e];return t[i]=(t[i]||[]).concat(n),t}),{})}("group",r);return qe.run(Te,e.adapters,{config:e,dfp:t,event:{slots:r}}).then((function(){return Pe("send request"),Object.keys(o).forEach((function(e){if("None"===e&&i.scatterSlots)o[e].forEach((function(e){t.googletag.pubads().refresh([e.dfpSlot])}));else{var n=o[e].reduce((function(e,t){return e.push(t.dfpSlot)&&e}),[]);t.googletag.pubads().refresh(n)}})),n()}))}))}))},t._getPubIdFromAdUnitPath=function(e){var t=null;return e.slot&&e.slot.getAdUnitPath&&(t=e.slot.getAdUnitPath().split("/")[1]),t},t.destroySlots=function(e){var t=this;return void 0===e&&(e=void 0),new Promise((function(n){t.googletag.cmd.push((function(){if(e){var i=[];e.forEach((function(e){var n=t.googletag.pubads().getSlots().find((function(t){return t.getSlotElementId()===e}));n&&i.push(n),t._slots=t._slots.filter((function(t){return t.elementId!==e}))})),t.googletag.destroySlots(i)}else t._slots=[],t.googletag.destroySlots();n()}))}))},e}();var Be=function(){function e(){}var t=e.prototype;return t.init=function(e){var t=e.config,n=(e.dfp,t.get("targeting")),i=t.get("adunit");t.set("targeting",me({},n,{adunit:i}))},t.beforePublish=function(e){var t=e.config,n=e.dfp,i=t.get("targeting");Object.keys(i).forEach((function(e){i[e]&&n.setTargeting(e,i[e])}))},e}(),De=function(){function e(){}return e.prototype.defineSlot=function(e){var t=e.config,n=e.event.slot,i=t.get("adFormats");if(i&&i[n.format]&&i[n.format].sizeMapping){var r=i[n.format].sizeMapping;if(!r)return;var o=[];for(var a in o.push([[0,0],[]]),r){var s=[Number(a),0];o.push([s,r[a]])}n.setSizeMapping(o)}},e}(),Ve="https://pubads.g.doubleclick.net/gampad/ads",Le=function(e){function t(){for(var t,n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return he(ye(t=e.call.apply(e,[this].concat(i))||this),"name","Video"),t}ve(t,e);var n=t.prototype;return n.init=function(t){var n=t.config,i=n.get("targeting");n.set("targeting",me({},i,{vast_type:"video"})),e.prototype.init.call(this,t)},n.getUrl=function(e){if(void 0===e&&(e=null),!this._lastEvent)return null;var t=this._lastEvent.url;if(e&&(t+="&vid="+e),e){var n=encodeURIComponent("videoId="+e+"&");t=t.replace(/(.*cust_params=)(.*)/,"$1"+n+"$2")}return t},n.addVastSize=function(){this._vastUrl+="?sz=620x345"},n.addCompanionSizes=function(e){var t=e.config,n=e.event,i=t.get("adFormats"),r=n.slots.filter((function(e){return e.isVideoCompanion})).map((function(e){return i[e.format].sizes.filter(Array.isArray).map((function(e){return e.join("x")})).join("|")})).join(",");r&&(this._vastUrl+="&ciu_szs="+r)},n.addCMSId=function(){},n.beforePublish=function(t){e.prototype.beforePublish.call(this,t)},n.afterInit=function(t){e.prototype.afterInit.call(this,t)},t}(function(){function e(){he(this,"name","Vast"),he(this,"_lastEvent",null),he(this,"hasPublished",!1),he(this,"_vastUrl",Ve)}var t=e.prototype;return t.init=function(e){var t=e.config;this.hasPublished=!1,this._lastEvent=null;var n=t.get("videoTargeting"),i=t.get("targeting");t.set("videoTargeting",me({},i,n))},t._publish=function(e){var t={format:this.name.toLowerCase(),isEmpty:!1,url:e,size:null,slot:null};this._lastEvent=t,ze(Ie,t),ze(Ae,t)},t.getUrl=function(e){return null},t.appDescriptionUrl=function(){var e=RegExp("^(file://)|^(https://theoplayer)"),t=window.location.href;return e.test(t)?"https://www.independent.ie/video":encodeURIComponent(t)},t.addVastSize=function(){this._vastUrl+="?"},t.addCompanionSizes=function(e){e.config,e.event},t.addCMSId=function(){},t.addTargeting=function(e){var t=e.config.get("videoTargeting");if(t){var n=Object.keys(t).length;this.log("Adding video targeting (count: "+n+") to VAST tag");var i=Object.keys(t).map((function(e){return e+"="+t[e]})).filter(Boolean);if(i.length){var r=encodeURIComponent(i.join("&"));this._vastUrl+="&cust_params="+r}}},t.beforePublish=function(e){var t=e.config;this.hasPublished||(this.addVastSize(),this._vastUrl+="&ad_type="+this.name.toLowerCase()+"&iu="+t.adUnit+"&impl=s&gdfp_req=1&env=vp&output=vast&unviewed_position_start=1&url=[referrer_url]&description_url="+this.appDescriptionUrl()+"&correlator=[timestamp]&ad_rule=1",this.addCompanionSizes(e),this.addCMSId(),this.addTargeting(e),this._publish(this._vastUrl))},t.afterInit=function(e){var t=e.config;this._vastUrl=Ve,t.get("blockads")&&this._publish("")},e}()),We=function(){function e(t,n,i){var r=this;he(this,"_read",(function(){if(window.sessionStorage&&window.sessionStorage.getItem)try{var e=window.sessionStorage.getItem(r._key);if(r._del(),e){var t=JSON.parse(e);if(t.source===r._remote)return Pe("get "+r._key+"="+t.value+" from session storage"),t.value}}catch(n){Pe(n.message)}return!1})),he(this,"_write",(function(){var t={source:r._local,value:e.randomString()};if(window.sessionStorage&&window.sessionStorage.setItem)try{window.sessionStorage.setItem(r._key,JSON.stringify(t)),Pe("set "+r._key+"="+JSON.stringify(t)+" to session storage")}catch(n){Pe(n.message)}return t.value})),he(this,"_del",(function(){if(window.sessionStorage&&window.sessionStorage.removeItem){Pe("delete "+r._key+" from session storage");try{window.sessionStorage.removeItem(r._key)}catch(e){Pe(e.message)}}})),this._key=t,this._local=n,this._remote=i}return ge(e,[{key:"sync",get:function(){return this._read()||this._write()}}]),e}();he(We,"randomString",(function(){for(var e=[],t=16,n="abcdefghijklmnopqrstuvwxyz0123456789";t--;)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}));var Ge=function(){function e(){he(this,"getSegments",(function(e){var t=[];if(window.localStorage&&window.localStorage.getItem){Pe("get segments from storage");try{var n=window.localStorage.getItem(e);if(null===n)throw new Error("Segments not found in storage");t=JSON.parse(n)}catch(i){Pe(i.message)}}else Pe("Storage api not found");return t})),he(this,"getUser",(function(){var t=null;if(window.localStorage&&window.localStorage.getItem){Pe("get userid from storage");try{t=window.localStorage.getItem(e.STORAGE_KEY_USER)}catch(n){Pe(n.message)}}else Pe("Storage api not found");return t}))}return e.prototype.beforeInit=function(e){var t=this,n=e.config,i=n.get("targeting"),r=new We("cxPrnd","ga","cx"),o={};[{name:"CxSegments",storage:"adv_identity"}].forEach((function(){}