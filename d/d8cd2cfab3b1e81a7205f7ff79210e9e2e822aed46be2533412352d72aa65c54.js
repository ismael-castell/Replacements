/* prebid.js v6.25.0
Updated : 2022-05-19*/
/*! For license information please see prebid-core.js.LICENSE.txt */
!function(){}();
"use strict";(self.pbjsChunk=self.pbjsChunk||[]).push([[1266],{1654:function(n,e,t){var o=t(9853),a=t(8962),r=t(7602),i=t(1879);function c(n){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},c(n)}function s(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,o)}return t}function l(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?s(Object(t),!0).forEach((function(e){d(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function d(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var u,f,p,g,v,m={value:!0,definedInConfig:!1},b=0,C=!1,y={iab:function(n){var e=n.onSuccess,t=n.onError,a=n.width,r=n.height;function c(n,a){(0,o.logInfo)("Received a response from CMP",n),a?!1!==n.gdprApplies&&"tcloaded"!==n.eventStatus&&"useractioncomplete"!==n.eventStatus||D(n,{onSuccess:e,onError:t}):t("CMP unable to register callback function.  Please check CMP setup.")}var s=function(){var n={};function a(){n.getConsentData&&n.getVendorConsents&&((0,o.logInfo)("Received all requested responses from CMP",n),D(n,{onSuccess:e,onError:t}))}return{consentDataCallback:function(e){n.getConsentData=e,a()},vendorConsentsCallback:function(e){n.getVendorConsents=e,a()}}}(),l={},u=function(){for(var n,e,t=window;!n;){try{if("function"==typeof t.__tcfapi||"function"==typeof t.__cmp){"function"==typeof t.__tcfapi?(b=2,e=t.__tcfapi):(b=1,e=t.__cmp),n=t;break}}catch(n){}try{if(t.frames.__tcfapiLocator){b=2,n=t;break}}catch(n){}try{if(t.frames.__cmpLocator){b=1,n=t;break}}catch(n){}if(t===window.top)break;t=t.parent}return{cmpFrame:n,cmpFunction:e}}(),f=u.cmpFrame,p=u.cmpFunction;if(!f)return t("CMP not found.");function g(n,e){window.$sf.ext.register(a,r,(function(t,o){if("cmpReturn"===t){var a="getConsentData"===n?o.vendorConsentData:o.vendorConsents;e(a)}})),window.$sf.ext.cmp(n)}function v(n,e,t){var o=2===b?"__tcfapi":"__cmp",a="".concat(o,"Call");function r(n){var e="".concat(o,"Return"),t="string"==typeof n.data&&(0,i.q9)(n.data,e)?JSON.parse(n.data):n.data;if(t[e]&&t[e].callId){var a=t[e];void 0!==l[a.callId]&&l[a.callId](a.returnValue,a.success)}}2===b?(window[o]=function(n,t,o,r){var i=Math.random()+"",c=d({},a,{command:n,version:t,parameter:r,callId:i});l[i]=o,e.postMessage(c,"*")},window.addEventListener("message",r,!1),window[o](n,b,t)):(window[o]=function(n,t,o){var r=Math.random()+"",i=d({},a,{command:n,parameter:t,callId:r});l[r]=o,e.postMessage(i,"*")},window.addEventListener("message",r,!1),window[o](n,void 0,t))}(0,o.isFn)(p)?((0,o.logInfo)("Detected CMP API is directly accessible, calling it now..."),1===b?(p("getConsentData",null,s.consentDataCallback),p("getVendorConsents",null,s.vendorConsentsCallback)):2===b&&p("addEventListener",b,c)):1===b&&window.$sf&&window.$sf.ext&&"function"==typeof window.$sf.ext.cmp?((0,o.logInfo)("Detected Prebid.js is encased in a SafeFrame and CMP is registered, calling it now..."),g("getConsentData",s.consentDataCallback),g("getVendorConsents",s.vendorConsentsCallback)):((0,o.logInfo)("Detected CMP is outside the current iframe where Prebid.js is located, calling it now..."),1===b?(v("getConsentData",f,s.consentDataCallback),v("getVendorConsents",f,s.vendorConsentsCallback)):2===b&&v("addEventListener",f,c))},static:function(n){var e=n.onSuccess,t=n.onError;D(g,{onSuccess:e,onError:t})}};function w(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,o=!1,a=null;function c(e,t,i){if(null!=a&&clearTimeout(a),o=!0,r.rp.setConsentData(e),null!=n){for(var c=arguments.length,s=new Array(c>3?c-3:0),l=3;l<c;l++)s[l-3]=arguments[l];n.apply(void 0,[t,i].concat(s))}}if((0,i.q9)(Object.keys(y),u)){var s={onSuccess:function(n){return c(n,!1)},onError:function(n){var e=null,t=!0;m.value&&1===b&&(e=P(void 0),t=!1);for(var o=arguments.length,a=new Array(o>1?o-1:0),r=1;r<o;r++)a[r-1]=arguments[r];c.apply(void 0,[e,t,n].concat(a))}};y[u](l({width:e,height:t},s)),o||(0===f?D(void 0,s):a=setTimeout((function(){2===b?c(P(void 0),!1,"No response from CMP, continuing auction..."):s.onError("CMP workflow exceeded timeout threshold.")}),f))}else c(null,!1,"CMP framework (".concat(u,") is not a supported framework.  Aborting consentManagement module and resuming auction."))}function h(n,e){!function(){if(v)return(0,o.logInfo)("User consent information already known.  Pulling internally stored information..."),function(n){n(!1)};var n=e.adUnits||pbjs.adUnits,t=1,a=1;if(Array.isArray(n)&&n.length>0){var r,i,c=(0,o.getAdUnitSizes)(n[0]);t=(null==c||null===(r=c[0])||void 0===r?void 0:r[0])||1,a=(null==c||null===(i=c[0])||void 0===i?void 0:i[1])||1}return function(n){w(n,t,a)}}()((function(t,a){if(a){var r=o.logWarn;1!==b||t?t&&(r=o.logError,a="".concat(a," Canceling auction as per consentManagement config.")):a="".concat(a," 'allowAuctionWithoutConsent' activated.");for(var i=arguments.length,c=new Array(i>2?i-2:0),s=2;s<i;s++)c[s-2]=arguments[s];r.apply(void 0,[a].concat(c))}t?"function"==typeof e.bidsBackHandler?e.bidsBackHandler():(0,o.logError)("Error executing bidsBackHandler"):n.call(this,e)}))}function D(n,e){var t=e.onSuccess,a=e.onError;"static"===u&&2==(b=n.getConsentData?1:n.getTCData?2:0)&&(n=n.getTCData);var r=1===b?function(n){var e=n&&n.getConsentData&&n.getConsentData.gdprApplies;return!("boolean"==typeof e&&(!0!==e||(0,o.isStr)(n.getConsentData.consentData)&&(0,o.isPlainObject)(n.getVendorConsents)&&Object.keys(n.getVendorConsents).length>1))}:2===b?function(){var e=n&&"boolean"==typeof n.gdprApplies?n.gdprApplies:p,t=n&&n.tcString;return!("boolean"==typeof e&&(!0!==e||(0,o.isStr)(t)))}:null;(0,o.isFn)(r)?r(n)?a("CMP returned unexpected value during lookup process.",n):t(P(n)):a("Unable to derive CMP version to process data.  Consent object does not conform to TCF v1 or v2 specs.",n)}function P(n){return 1===b?v={consentString:n?n.getConsentData.consentData:void 0,vendorData:n?n.getVendorConsents:void 0,gdprApplies:n?n.getConsentData.gdprApplies:p}:(v={consentString:n?n.tcString:void 0,vendorData:n||void 0,gdprApplies:n&&"boolean"==typeof n.gdprApplies?n.gdprApplies:p},n&&n.addtlConsent&&(0,o.isStr)(n.addtlConsent)&&(v.addtlConsent=n.addtlConsent)),v.apiVersion=b,v}a.vc.getConfig("consentManagement",(function(n){return function(n){(n=n&&(n.gdpr||n.usp?n.gdpr:n))&&"object"===c(n)?((0,o.isStr)(n.cmpApi)?u=n.cmpApi:(u="iab",(0,o.logInfo)("consentManagement config did not specify cmp.  Using system default setting (".concat("iab",")."))),(0,o.isNumber)(n.timeout)?f=n.timeout:(f=1e4,(0,o.logInfo)("consentManagement config did not specify timeout.  Using system default setting (".concat(1e4,")."))),"boolean"==typeof n.allowAuctionWithoutConsent&&(m.value=n.allowAuctionWithoutConsent,m.definedInConfig=!0),p=!0===n.defaultGdprScope,(0,o.logInfo)("consentManagement module has been activated..."),"static"===u&&((0,o.isPlainObject)(n.consentData)?(g=n.consentData,f=0):(0,o.logError)("consentManagement config with cmpApi: 'static' did not specify consentData. No consents will be available to adapters.")),C||pbjs.requestBids.before(h,50),C=!0,r.rp.enable(),w(),m.definedInConfig&&2===b?(0,o.logWarn)("'allowAuctionWithoutConsent' ignored for TCF 2"):m.definedInConfig||1!==b||(0,o.logInfo)("'allowAuctionWithoutConsent' using system default: (".concat(!0,")."))):(0,o.logWarn)("consentManagement config not defined, exiting consent manager")}(n.consentManagement)})),window.pbjs.installedModules.push("consentManagement")}},function(n){n(n.s=1654)}]);
"use strict";(self.pbjsChunk=self.pbjsChunk||[]).push([[5160],{1366:function(){}