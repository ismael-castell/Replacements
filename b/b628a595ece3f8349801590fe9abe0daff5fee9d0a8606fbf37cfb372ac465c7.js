!function(){}();"use strict";(self.pbjsChunk=self.pbjsChunk||[]).push([[3864],{3231:function(){}},function(e){e(e.s=3231)}]);"use strict";(self.pbjsChunk=self.pbjsChunk||[]).push([[3434],{3444:function(e,r,t){var a=t(9853),n=t(265),i=t(4806),o=t(1609),s=t(8265),d=t(5849),c=t(8962);function u(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,a=new Array(r);t<r;t++)a[t]=e[t];return a}var p="conversant",m=(0,d.df)({gvlid:24,bidderCode:p}),l={code:p,gvlid:24,aliases:["cnvr"],supportedMediaTypes:[s.Mk,s.pX],isBidRequestValid:function(e){if(!e||!e.params)return(0,a.logWarn)("conversant: Missing bid parameters"),!1;if(!(0,a.isStr)(e.params.site_id))return(0,a.logWarn)("conversant: site_id must be specified as a string"),!1;if(f(e)){var r=e.params.mimes||(0,n.Z)(e,"mediaTypes.video.mimes");if(r){if(!(0,a.isArray)(r)||!r.every(function(e){return(0,a.isStr)(e)}))return(0,a.logWarn)("conversant: mimes must be an array of strings"),!1}else(0,a.logWarn)("conversant: mimes should be specified for videos")}return!0},buildRequests:function(e,r){var t,o=r&&r.refererInfo?r.refererInfo.referer:"",s="",d="",u=null,p="_pubcid",l="https://web.hb.ad.cpe.dotomi.com/cvx/client/hb/ortb/25",b=e.map(function(e){var r=function(e){var r=(0,a.getBidIdParameter)("bidfloor",e.params);if(!r&&(0,a.isFn)(e.getFloor)){var t=e.getFloor({currency:"USD",mediaType:"*",size:"*"});(0,a.isPlainObject)(t)&&!isNaN(t.floor)&&"USD"===t.currency&&(r=t.floor)}return r}(e);s=(0,a.getBidIdParameter)("site_id",e.params)||s,p=(0,a.getBidIdParameter)("pubcid_name",e.params)||p,d=e.auctionId;var t={id:e.bidId,secure:1,bidfloor:r||0,
displaymanager:"Prebid.js",displaymanagerver:"6.29.0"};if(e.ortb2Imp&&(0,a.mergeDeep)(t,e.ortb2Imp),v(e.params.tag_id,t,"tagid"),f(e)){var i=(0,n.Z)(e,"mediaTypes.video")||{},o=g(i.playerSize||e.sizes),c={};o&&o[0]&&(v(o[0].w,c,"w"),v(o[0].h,c,"h")),v(e.params.position||i.pos,c,"pos"),v(e.params.mimes||i.mimes,c,"mimes"),v(e.params.maxduration||i.maxduration,c,"maxduration"),v(e.params.protocols||i.protocols,c,"protocols"),v(e.params.api||i.api,c,"api"),t.video=c}else{var m=(0,n.Z)(e,"mediaTypes.banner")||{},b={format:g(m.sizes||e.sizes)};v(e.params.position||m.pos,b,"pos"),t.banner=b}return e.userId&&e.userId.pubcid?u=e.userId.pubcid:e.crumbs&&e.crumbs.pubcid&&(u=e.crumbs.pubcid),e.params.white_label_url&&(l=e.params.white_label_url),t}),y={id:d,imp:b,site:{id:s,mobile:null!==document.querySelector('meta[name="viewport"][content*="width=device-width"]')?1:0,page:o},device:(t=navigator.language?"language":"userLanguage",{h:screen.height,w:screen.width,dnt:"1"===navigator.doNotTrack||"1"===window.doNotTrack||"1"===navigator.msDoNoTrack||"yes"===navigator.doNotTrack?1:0,language:navigator[t].split("-")[0],make:navigator.vendor?navigator.vendor:"",ua:navigator.userAgent}),at:1},h={},w=(0,n.Z)(e,"0.schain");w&&(0,i.Z)(y,"source.ext.schain",w),r&&(r.gdprConsent&&(h.consent=r.gdprConsent.consentString,"boolean"==typeof r.gdprConsent.gdprApplies&&(0,i.Z)(y,"regs.ext.gdpr",r.gdprConsent.gdprApplies?1:0)),r.uspConsent&&(0,i.Z)(y,"regs.ext.us_privacy",r.uspConsent)),u||(u=function(e){var r;try{if(!(r=m.getCookie(e))){var t=m.getDataFromLocalStorage("".concat(e,"_exp"));(""===t||t&&new Date(t).getTime()-Date.now()>0)&&(r=(r=m.getDataFromLocalStorage(e))?decodeURIComponent(r):r)}(0,a.isStr)(r)&&"{"===r.charAt(0)&&(r=JSON.parse(r))}catch(e){(0,a.logError)(e)}return r}(p)),u&&(h.fpc=u);var I=function(e){var r=e[0],t=[];if((0,a.isArray)(r.userIdAsEids)&&r.userIdAsEids.length>0){var n={"epsilon.com":1,"adserver.org":1,"liveramp.com":1,"criteo.com":1,"id5-sync.com":1,"parrable.com":1,"liveintent.com":1};r.userIdAsEids.forEach(function(e){n.hasOwnProperty(e.source)&&t.push(e)})}return t}(e);I.length>0&&(h.eids=I),(0,a.isEmpty)(h)||(y.user={ext:h});var A=c.vc.getConfig("ortb2")||{};return(0,a.mergeDeep)(y,A),{method:"POST",url:l,data:y}},interpretResponse:function(e,r){var t=[],n={};return e=e.body,r&&r.data&&r.data.imp&&(0,a._each)(r.data.imp,function(e){return n[e.id]=e}),e&&(0,a.isArray)(e.seatbid)&&(0,a._each)(e.seatbid,function(r){(0,a._each)(r.bid,function(r){var a=parseFloat(r.price);if(a>0&&r.impid){var i=r.adm||"",o=r.nurl||"",s=n[r.impid],d={requestId:r.impid,currency:e.cur||"USD",cpm:a,creativeId:r.crid||"",ttl:300,netRevenue:!0,meta:{}};r.adomain&&r.adomain.length>0&&(d.meta.advertiserDomains=r.adomain),s.video?("<"===i.charAt(0)?d.vastXml=i:d.vastUrl=i,d.mediaType="video",d.width=s.video.w,d.height=s.video.h):(d.ad=i+'<img src="'+o+'" />',d.width=r.w,d.height=r.h),t.push(d)}})}),t},transformBidParams:function(e,r){return(0,a.convertTypes)({site_id:"string",secure:"number",mobile:"number"},e)},getUserSyncs:function(e,r,t,n){var i,o={},s=[];if(t&&(o.gdpr=t.gdprApplies?1:0,o.gdpr_consent=encodeURIComponent(t.consentString||"")),n&&(o.us_privacy=encodeURIComponent(n)),r&&r.ext){var d=[{urls:r.ext.fsyncs,type:"iframe"},{urls:r.ext.psyncs,type:"image"}].filter(function(r){return r.urls&&("iframe"===r.type&&e.iframeEnabled||"image"===r.type&&e.pixelEnabled)}).map(function(e){return e.urls.map(function(r){var t=(0,a.parseUrl)(r);return(0,a.mergeDeep)(t.search,o),0===Object.keys(t.search).length&&delete t.search,{type:e.type,url:(0,a.buildUrl)(t)}}).reduce(function(e,r){return e.concat(r)},[])}).reduce(function(e,r){return e.concat(r)},[]);s.push.apply(s,function(e){if(Array.isArray(e))return u(e)}(i=d)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(i)||function(e,r){if(e){if("string"==typeof e)return u(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?u(e,r):void 0}}(i)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())}return s}};function g(e){var r;return Array.isArray(e)&&(r=2===e.length&&"number"==typeof e[0]&&"number"==typeof e[1]?[{w:e[0],h:e[1]}]:(0,a._map)(e,function(e){return{w:e[0],h:e[1]}})),r}function f(e){return"video"===e.mediaType||!!(0,n.Z)(e,"mediaTypes.video")}function v(e,r,t){e&&(r[t]=e)}(0,o.dX)(l),window.pbjs.installedModules.push("conversantBidAdapter")}},function(e){e(e.s=3444)}]);"use strict";(self.pbjsChunk=self.pbjsChunk||[]).push([[155],{5189:function(){}},function(e){e(e.s=5189)}]);"use strict";(self.pbjsChunk=self.pbjsChunk||[]).push([[2229],{6476:function(){}},function(e){e(e.s=6476)}]);"use strict";(self.pbjsChunk=self.pbjsChunk||[]).push([[7771],{5841:function(){},2224:function(){}