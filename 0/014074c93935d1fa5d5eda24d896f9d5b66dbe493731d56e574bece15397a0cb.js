(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"+LD/":function(e,t,n){"use strict";n.d(t,"h",(function(){return d})),n.d(t,"d",(function(){return u})),n.d(t,"b",(function(){return f})),n.d(t,"f",(function(){return b})),n.d(t,"g",(function(){return p})),n.d(t,"c",(function(){return m})),n.d(t,"e",(function(){return h})),n.d(t,"a",(function(){return v}));var a=n("dSFn"),o=n("SgV1"),r=n("IYDZ"),i=n("vJtL"),c=n("IX5b"),s=n("LrWZ"),l={close:o.a.env.baseHomepageUrl,home:o.a.env.baseHomepageUrl,subscribe:r.a.URLS.SUBSCRIBE.DIGITAL,img:{main:"".concat(o.a.env.baseRootAbsoluteUrl,"/files/cem/gufunnel/gu-header.png"),logo:"".concat(o.a.env.svgSpritePath,"#tgam-logo-boxed")}},d={hardPaywall:{headline:"This content is available to <span>globeandmail.com</span> subscribers.",intcmp:"redwall"},meteredPaywall:{headline:"You've reached your free article limit. To keep reading, subscribe to <span>globeandmail.com</span>",intcmp:"threshwall"}};function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=Object(a.h)("pb-root");t&&(document.body.classList.add(c.b),t.style.minHeight=window.getComputedStyle(t).height,Object(a.H)(t.children).filter((function(t){var n=t.id;return-1===e.indexOf(n)})).forEach(a.E))}function f(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=Object(a.h)("pb-root");t&&e.forEach((function(e){Object(a.A)(e,t).forEach((function(e){return e.classList.add("u-hidden")}))}))}function b(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=Object(a.z)(".c-keytar-container--modal");return Object(s.a)(t)?null:(e.forEach((function(e){t.classList.add("c-keytar-container--modal--".concat(e))})),t.removeAttribute("hidden"),t.style.display="block",t)}function p(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=Object(a.z)(".c-keytar-container__main");return t.id="skip-link-target",t.classList.add("c-keytar-container__main--active"),e.forEach((function(e){t.classList.add("c-keytar-container__main--".concat(e))})),t}function m(e){var t=e.headline,n=void 0===t?"":t,a=e.intcmp,i=void 0===a?"":a,c=i.length?"?intcmp=".concat(i):"";return'\n    <div class="c-keytar-header">\n      <p class="c-keytar-header__text">'.concat(n,'</p>\n      <a aria-label="Close paywall message"\n        class="c-button c-button--no-border c-button--icon-only c-button--transparent-default js-keytar-sub-btn-close"\n        href="').concat(l.close,'">\n        <svg\n          class="c-button__icon"\n          role="img"\n          pointer-events="none"\n          focusable="false"\n          aria-hidden="true">\n          <use xlink:href="').concat(o.a.env.svgSpritePath,'#close-x"></use>\n        </svg>\n      </a>\n    </div>\n    <div class="c-keytar-content">\n      <h2 class="arc-keytar-wall__main-title font__pratt">\n        Join a national community of curious and ambitious Canadians\n      </h2>\n      <div class="arc-keytar-wall__content">\n        <div class="arc-keytar-wall__offer">\n          <p class="arc-keytar-wall__offer-title font__pratt">\n            Subscribe to globeandmail.com for unlimited access to Canada’s leading independent journalism.\n          </p>\n          <p class="arc-keytar-wall__offer-cost">\n            <span class="arc-keytar-wall__offer-cost-inner">\n              <span class="arc-keytar-wall__offer-price font__pratt">Just</span>\n              <span class="arc-keytar-wall__offer-price font__pratt">$1.99</span>\n            </span>\n            <span class="arc-keytar-wall__offer-per font__gmsanc-regular">per week for first 24 weeks</span>\n          </p>\n          <a href="').concat(l.subscribe).concat(c,'"\n            class="arc-keytar-wall__btn c-keytar-action__btn c-button c-button--utility-yellow-secondary c-button--no-border js-keytar-algt">\n            <span class="c-button__text">Subscribe Now</span>\n          </a>\n          <span class="arc-keytar-wall__cancel-label" class="font__gmsanc-regular">Cancel anytime</span>\n        </div>\n        <div class="arc-keytar-wall__image"></div>\n        <img class="arc-keytar-wall__logo" src="https://www.theglobeandmail.com/files/cem/logos/pti_logo.png" alt="Power To The Informed" />\n      </div>\n    </div>\n    <div class="c-keytar-footer">\n      <div class="c-keytar-footer__content">\n        <p>\n          Already a print newspaper subscriber?\n          <a href="').concat(r.a.URLS.LINK_PRINT_ACCOUNT,'" class="js-keytar-algt">\n            Get full access to globeandmail.com\n          </a>\n        </p>\n        <p>\n          Already subscribed to globeandmail.com?\n          <a href="').concat(r.a.URLS.LOGIN,'" class="js-keytar-algt">\n            Log in to keep reading\n          </a>\n        </p>\n      </div>\n    </div>\n  ')}function h(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:[],r=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"",i=g(e,t,r),c=p(n);c.innerHTML=i,u(a),b(o)}function g(e,t,n){if(["registerWall","promotionWall","hpdcWall","crosswordsWall"].includes(e)){var a=v({url:n,wallName:e});return'<iframe id="keytar-iframe" name="keytar-iframe"\n      class="js-keytar-iframe js-keytar-'.concat(e,'"\n      title="Paywall" scrolling="yes" frameborder="0" allowtransparency="true"\n      src="').concat(a,'"></iframe>')}var o=Object(i.a)(t)?t():null;return Object(s.a)(o)?m("hardPaywall"===e?d.hardPaywall:d.meteredPaywall):o}function v(e){var t=e.url,n=e.wallName;if(!Object(s.a)(t)&&t.length)return t;var i=Object(a.j)(o.a,"datalayer.article.seoKeywords","").includes("coronayellow");return"registerwall"===n.toLowerCase()&&i?r.a.URLS.REGISTER.CORONA:r.a.URLS.REGISTER.REGWALL}},"/VyM":function(e,t,n){"use strict";t.a={foreseeInit:function(){!function(e){var t=e.tgam.env.isProdOrStage?"production":"staging",n=document,a=n.createElement("script"),o=n.head||n.getElementsByTagName("head")[0],r="fsReady",i={src:"https://gateway.foresee.com/sites/globeandmail/"+t+"/gateway.min.js",type:"text/javascript",async:"true","data-vendor":"fs","data-role":"gateway"};for(var c in i)a.setAttribute(c,i[c]);o.appendChild(a),e[r]=function(){var t="__"+r+"_stk__";e[t]=e[t]||[],e[t].push(arguments)}}(window)},comScoreInit:function(){var e=window._comscore=e||[],t=window.document.getElementsByTagName("script")[0],n=window.document.createElement("script");t||(t=window.document.getElementsByTagName("head")[0]),e.push({c1:"2",c2:"10251187"}),n.type="text/javascript",n.src="https://sb.scorecardresearch.com/beacon.js",n.async=!0,t.parentNode.insertBefore(n,t)},kruxInit:function(){window.Krux||((window.Krux=function(){window.Krux.q.push(arguments)}).q=[]),function(){var e=/kct=2/.test(window.location.search)?"u5q9yugfg":"I3G0xgk0",t=document.createElement("script");t.type="text/javascript",t.async=!0;var n,a=(n=location.href.match(/\bkxsrc=([^&]+)/))&&decodeURIComponent(n[1]);t.src=/^https?:\/\/([a-z0-9_\-\.]+\.)?krxd\.net(:\d{1,5})?\/controltag\//i.test(a)?a:"disable"===a?"":("https:"===location.protocol?"https:":"http:")+"//cdn.krxd.net/controltag?confid="+e;var o=document.getElementsByTagName("script")[0];o.parentNode.insertBefore(t,o)}(),function(){function e(e){var t,n="kxglobe_"+e,a=function(){try{return window.localStorage}catch(e){return null}}();return a?a[n]||"":navigator.cookieEnabled&&(t=document.cookie.match(n+"=([^;]*)"))&&unescape(t[1])||""}window.Krux.user=e("kuid"),window.Krux.segments=e("segs")?e("segs").split(","):[]}()}}},"1qjW":function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return i}));var a=n("SgV1"),o=n("C11E");function r(e){if(a.a.meta.isFinancialPage||!a.a.meta.isTemplatePbLayout&&!a.a.meta.isStoryPage)return e;var t="js-f-ad-"+(Object(o.j)()?"xs":"sm"),n=e.filter((function(e){var n=e.classList.contains("js-f-ad"),a=e.classList.contains(t),o=!n||n&&a;if(!o){var r=e.closest(".j-f-wrap");r.parentNode.removeChild(r)}return o}));return i(n),n}function i(e){var t={};e.forEach((function(e){if(e.classList.contains("js-f-ad")){var n=t[e.dataset.type]?t[e.dataset.type]:1;e.id=e.dataset.type+"-gpt-"+n,e.dataset.target=JSON.stringify({pos:"flex"+(n>1?n:""),ptf:"gpt"}),e.parentNode.parentNode.id="c-ad--"+e.id,t[e.dataset.type]=n+1}}))}},"3QQy":function(e,t,n){"use strict";n.d(t,"b",(function(){return ja})),n.d(t,"a",(function(){return Sa}));var a=n("SgV1"),o=n("E42y"),r=n("S5EV"),i=n("z2J4"),c=n("dSFn"),s=n("QGZC");function l(e,t){if("device"===e)return"mobile"===t&&window.matchMedia("(max-width: 1024px)").matches||"desktop"===t&&!window.matchMedia("(max-width: 1024px)").matches;try{var n=Object(c.j)(window,"tgam.datalayer.".concat(e));return null!==n&&n===t}catch(t){if(window.console&&window.console.error)throw new Error("Error accessing '".concat(e,"' from datalayer in Darwin"));return!1}}function d(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=n.template,o=void 0===a?function(){}:a,r=n.paragraphs,i=void 0===r?0:r;Object(c.F)(window,"tgam.darwin.keytar[".concat(e,"]"),{viewType:t,template:o,paragraphs:i}),s.a.info("[KEYTAR] setKeytarWall called with key: ".concat(e,", viewType: ").concat(t,", template: ").concat(o," and paragraphs: ").concat(i))}function u(){return Object(i.a)("localStorage")&&i.b.get("tgam.darwin_tests")||{}}function f(e,t,n){var a=u();a[e]||(a[e]={}),a[e][t]=n,Object(i.a)("localStorage")&&i.b.set("tgam.darwin_tests",a)}function b(e,t){Object(i.a)("localStorage")&&i.b.set("Dw__".concat(e,"|global"),t,!1)}function p(e,t){var n=u(),a=1;n.hasOwnProperty(e)&&void 0!==n[e].hasSeenUnit&&(a+=n[e].hasSeenUnit),1===a&&f(e,"variant",t),f(e,"hasSeenUnit",a)}var m=n("Uu/N"),h=n("Pp5d"),g=Object(h.b)();function v(){return!window._dw||!1===g.darwin||0===parseInt(g.darwin)||Object(o.u)("enterprise")}function y(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0;w("before",e)}function w(e,t){if(!v()){var n="runDarwinTests".concat(Object(m.a)(e));Object(r.b)("".concat(n,"_started"));var a=Object(c.j)(window,"tgam.darwin.tests.".concat(e),[]);s.a.info("".concat("[DARWIN]"," ").concat(n,":"),a),a.forEach((function(e){try{e(t)}catch(e){s.a.error("".concat("[DARWIN]"," ").concat(n," error:"),e)}})),Object(r.b)("".concat(n,"_done")),Object(r.c)(n)}}var j=n("Eezo"),O=n("oaNE"),_=n("bUo5");var E=n("Vfgr");function A(e){return e&&e.replace(/&#(\d+);/g,(function(e,t){return String.fromCharCode(t)}))}var k=a.a.meta;function S(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e.split("-").map((function(e){return"".concat(e.charAt(0).toUpperCase()).concat(e.substr(1))})).join(" ")}var T=n("wID2");function L(){var e,t;window.tgam=window.tgam||{},window.tgam.datalayer=window.tgam.datalayer||{},window.tgam.datalayer.page=Object(O.a)(window.tgam.datalayer.page||{},{appview:!0===a.a.env.inAppView,referrer:(t=Object(h.b)(),t.ref?Object(_.a)(decodeURI(t.ref)):Object(_.a)()),topics:(e=document.querySelector("[data-page-topics]"),e?e.dataset.pageTopics.split(","):null)}),window.tgam.datalayer.section={},window.tgam.datalayer.article=a.a.meta.isStoryPage||a.a.meta.isVideoPage?{title:A(Object(E.a)(k.title.replace(/(- *The Globe And Mail)$/gi,""))),keywords:A(k.keywords),seoKeywords:A(k.seoKeywords),byline:A(k.byline.toUpperCase()),creditline:A(k.creditline||""),contentId:k.contentId,label:k.label,topics:A(k.topics||""),pagesubtype:k.pagesubtype,paywallStatus:k.paywallStatus,slug:S(k.slug),printArticleFlag:k.printArticleFlag,isInPrint:k.isInPrint,advContent:k.advContent}:{}}function R(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};Object.keys(e).forEach((function(t){window.tgam.datalayer.hasOwnProperty(t)||(window.tgam.datalayer[t]=e[t])}))}var I=n("NH3R"),P=n("LrWZ"),C=n("Muja"),D={adEvent:{video:["type","feature","contentId","action","milestone","elapsed","duration","autoplay"]},ageGateEvent:["action"],clickEvent:{link:["feature","type","label","position","hierarchy","linkType","page"],socialshare:["feature","type","label","position","hierarchy","linkType"],button:["feature","type","action","label","linkType"]},engagementEvent:{comment:["feature","type","contentId","action"],video:["feature","type","contentId","action","milestone","elapsed","duration","autoplay"],gallery:["feature","type","position","totalImages","viewMode","contentId","milestone"]},errorEvent:{api:["component","description","affected_event"]},error:{info:["info","origin","message"]},message:["origin","feature","label"],wallEvent:["name","type","adsVisible","countVisibleParagraphs","meterCount","meterLimit"],searchEvent:["type","mode","page","query","isLiveSuggest","isDidYouMean","grouping","total","shown","securities","shownSecurities"],newsletterEvent:{simple:["action","name","type","frequency"],modal:["action","name","type","frequency"]},page:{sec:["name","type","url","contentType"]},media_interaction:["type","action","feature","timeElapsed","totalTime","playbackRate","voiceOption","language","viewMode","isAutoplay"]};var N=n("c8Bs"),x=n("nIB9");function M(e){var t=".c-package",n=".c-card",a=e.closest(t);if(Object(P.a)(a))return null;var o={label:".c-card__label",storyPhoto:".c-image[data-photo='story']",authorPhoto:".c-image[data-photo='author']",videoIcon:".c-card__video-duration",authorName:".c-card__author",deck:".c-card__dek"},r={};Object.keys(o).forEach((function(t){r[t]=e.querySelector(o[t])}));var i,l,d,u=(l=G((i=r).storyPhoto)?"photo":null,d=G(i.authorPhoto)?"author-photo":null,l||d||null),f=[Y(r),Object(x.c)(r.deck)?"deck":null,u,Object(x.c)(r.videoIcon)?"video-icon":null,Object(x.c)(r.authorName)?"author-name":null,H(r,u)].filter((function(e){return e})),b=Object(c.H)(a.querySelectorAll(n)).map(x.c),p={presentation:f.join(","),variantName:b.filter((function(e){return e})).length};return s.a.info("".concat("[GTM-PACKAGES]"),p,f,b),p}function Y(e){var t=null;if(Object(x.c)(e.label)){t="label:".concat(e.label.textContent);var n=window.getComputedStyle(e.label).backgroundColor;"rgba(0, 0, 0, 0)"!==n&&"transparent"!==n&&(t="".concat(t,":reversed"))}return t}function G(e){return!Object(x.b)(e)&&[e.closest(".c-image-container"),e.closest(".c-card__media")].filter((function(e){return e})).every(x.c)}function H(e,t){return Object(N.a)([e.label,e.authorName,e.deck],x.b)&&!t?"headline-only":null}var U=n("vJtL");function z(e){var t=e.data,n=e.event,a=e.eventCallback;s.a.groupCollapsed("".concat("[GTM-MANAGER]"," | ").concat(t.type||"custom"));var o=Object(P.a)(n)?"clickEvent":n,r={};!function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;s.a.groupCollapsed("".concat("[EVENT-REGISTER]")),s.a.info("".concat("[EVENT-REGISTER]"," verifyEvent() | data:"),e),s.a.info("".concat("[EVENT-REGISTER]"," verifyEvent() | eventType:"),t),s.a.info("".concat("[EVENT-REGISTER]"," verifyEvent() | eventSubType:"),n);var a=n?D[t][n]:D[t];a?Object(C.a)(e,a)?s.a.groupEnd("".concat("[EVENT-REGISTER]")):(s.a.warn("".concat("[EVENT-REGISTER]"," GTM Warning: eventType=").concat(t," eventSubType=").concat(n||null," should contain the following keys: ").concat(a)),s.a.groupEnd("".concat("[EVENT-REGISTER]"))):(s.a.error("".concat("[EVENT-REGISTER]"," GTM Error: unknown event ").concat(t)),s.a.groupEnd("".concat("[EVENT-REGISTER]")))}(Object.keys(t),o,t.type?t.type:null),"clickEvent"===o&&t.linkType&&("internal"===t.linkType&&(o="nextPageClickEvent"),delete t.linkType),r.event=o,r[o]=Object(c.v)(t),s.a.table(t),Object(U.a)(a)&&(r.eventCallback=a),window.analyticsLayer&&window.analyticsLayer.push(r),s.a.groupEnd("".concat("[GTM-MANAGER]"," | ").concat(t.type))}function W(){s.a.info("".concat("[DATA-COLLECTION]"," bootstrapClickTracking()")),document.addEventListener("click",(function(e){!function(e){if(window.gtm){var t,n,a,o=(t=e.target,n=t.closest("[data-analyticsclick]"),a=e.ctrlKey||e.shiftKey||e.metaKey||e.button&&(1==e.button||2==e.button)||e.which&&(2==e.which||3==e.which),{data:function(){if(a)return null;var e,t=n&&n.dataset&&n.dataset.analyticsclick,o=n&&n.getAttribute("rel");if(!t)return null;try{e=JSON.parse(t)}catch(e){return null}e.linkType=o&&-1!==o.indexOf("external")?"external":"internal",Object(P.a)(e.contentId)&&!Object(P.a)(n.dataset.sophi)&&(e.contentId=n.dataset.sophi),Object(P.a)(e.page)&&!Object(P.a)(n.dataset.ltPos)&&(e.page=n.dataset.ltPos);var r=n.closest("[data-analyticsclick-container]");if(r){var i=Object(c.H)(r.querySelectorAll("[data-analyticsclick]"));Object(P.a)(e.position)&&i.forEach((function(t,a){t===n&&(e.position=a+1)}))}var s=M(n);Object(P.a)(s)||(e.presentation=s.presentation,e.variantName=s.variantName);var l=n.closest(".c-package--top");if(l){var d=l.dataset.package||1;e.feature="package ".concat(d),e.page&&(e.page+=":package ".concat(d))}return e}(),src:t,href:n&&n.hasAttribute("href")?n.getAttribute("href"):void 0,target:n&&n.hasAttribute("target")?n.getAttribute("target"):void 0});if(o.data){e.preventDefault();var r=!1;j.a.trigger("analytics.trackGTMEvent",[o.data,"clickEvent",i]),Object(h.b)().nofollowtimeout||setTimeout((function(){r||i()}),300)}}function i(){if(s.a.info("".concat("[GTM-MANAGER]"," follow() called")),o.target){var e=window.open(o.href,o.target);Object(c.F)(e,"opener",null)}else o.href&&(window.location=o.href);r=!0}}(e)}))}function F(){s.a.info("".concat("[DATA-COLLECTION]"," collectAllTheThings()"));try{a.a.datalayer.identity.visid=Object(o.p)(),W(),(a.a.meta.isStoryPage||a.a.meta.isVideoPage)&&function(){if("gallery"===a.a.datalayer.article.pagesubtype){var e,t,n,o,r=0,i=0,l=null,d=!1,u="[GALLERY]";e=document.querySelectorAll(".js-c-article-body img"),n=(t=e).length,o=parseInt(t.length/2,10),l={getMilestone:function(){return++i===o?"Half-way photo gallery view":i===n?"Completed photo gallery":"Photo gallery view"}},window.addEventListener("load",(function(){for(var e=0,t=document.querySelectorAll(".js-c-article-body .js-lazyimage--loaded").length-i;e<t;e++)b()})),document.addEventListener("lazybeforeunveil",(function(e){e.target.closest(".js-c-article-body")&&b()})),j.a.addListener("tgam-photo-slider:selected",(function(e){var t=e.getSlideType(),n=e.getIndex()+1-e.getNumberOfAdSlidesBeforeCurrent()>i;if(!d&&"ad"!==t&&n){s.a.info("".concat(u," Gallery opened for the first time, but photo hasn't been viewed in scroll mode")),d=!0;var a=l.getMilestone();f({_custom:{position:i,viewMode:"gallery mode"},milestone:a})}else if(!d&&"ad"!==t){d=!0,s.a.info("".concat(u," Gallery opened for the first time, but photo has already been viewed in scroll mode"));f({_custom:{viewMode:"gallery mode"}})}if(n&&"ad"!==t){s.a.info("".concat(u," Image viewed for the first time in gallery but never in scroll mode"));var o=l.getMilestone();f({_custom:{position:i,viewMode:"gallery mode"},milestone:o})}}))}function f(t){if(!Object(P.a)(t)){var n={feature:"photo gallery",type:"gallery",position:Object(P.a)(t._custom.position)?void 0:t._custom.position,totalImages:Object(P.a)(e)?void 0:e.length,viewMode:Object(P.a)(t._custom.viewMode)?void 0:t._custom.viewMode,contentId:Object(c.j)(a.a,"datalayer.article.contentId",void 0),milestone:t.milestone};j.a.trigger("analytics.trackGTMEvent",[n,"engagementEvent"])}}function b(){if(++r>i){var e=l.getMilestone();f({_custom:{position:i,viewMode:"scroll mode"},milestone:e})}}}()}catch(e){s.a.error("".concat("[DATA-COLLECTION]"," data-collection exception: ").concat(e))}}function B(){var e=Array.prototype.slice.call(arguments),t=e[0],n=e[1],a=e[2];setTimeout((function(){}