(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"/Lu6":function(){},"65wn":function(){},"6OwD":function(e,t,n){"use strict";var r=n("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(n("QILm")),o=r(n("W8MJ")),l=r(n("lwsE")),a=r(n("7W2i")),u=r(n("a1gu")),d=r(n("Nsbk")),c=r(n("Nz+N")),s=["height","width","embedUrl","contentUrl"];function f(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,d.default)(e);if(t){var i=(0,d.default)(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return(0,u.default)(this,n)}}var v=function(){}(c.default);t.default=v},"6hsm":function(){},"810M":function(){},C2Ll:function(){},"Nz+N":function(){},"R+Gq":function(){},eUG7:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.aspectRatioOuterClass=t.aspectRatioInnerClass=void 0;var r=n("Jqp9"),i=(0,r.css)("height:0;width:100%;position:relative;background-color:transparent;");t.aspectRatioOuterClass=i;var o=(0,r.css)("position:absolute;top:0;left:0;width:100%;height:100%;");t.aspectRatioInnerClass=o},hZ4i:function(){},"nGF/":function(){},nosR:function(e,t,n){"use strict";var r=n("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.preferredMobileRatios=t.preferredDesktopRatios=t.findRenditionsByRatio=t.findRenditionOfBestFitUrl=t.findRenditionOfBestFit=t.findCropsByRatio=t.findCommonPrioritizedVideoRendition=t.filterVideoRenditionsByPreferredRatio=t.commonPrioritizedVideoRenditions=void 0;var i=r(n("RIqP")),o=n("vFws"),l=function(e,t){var n,r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];try{var o=(0,i.default)(e);if((o=o.filter((function(e){return"number"==typeof e.width}))).sort((function(e,t){return e.width-t.width})),r)for(var l=o.filter((function(e){return/_mobile/.test(e.type)})),a=0;a<l.length;a+=1)if(l[a].width>t){n=l[a];break}if(!n)for(var u=0;u<o.length&&!((n=o[u]).width>t);u+=1);}catch(e){return null}return n};t.findRenditionOfBestFit=l;t.findRenditionOfBestFitUrl=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=l(e,t,n);return r?r.url:null};var a=function(e,t){if(null!=e&&e.find){var n=e.find((function(e){return e.name===o.RATIOS[t]}));if(n)return n;var r=e.find((function(e){return"MASTER"===e.name}));if(r)return r}return null};t.findCropsByRatio=a;t.findRenditionsByRatio=function(e,t){var n=a(e,t);return null!=n&&n.renditions?n.renditions:null};var u={smartphone:["hlsfmp4_mobile","hls_mobile","hlsfmp4","hls","video_1080p_mp4_mobile","video_720p_mp4_mobile","video_480p_mp4_mobile","video_360p_mp4_mobile","video_240p_mp4_mobile"],tablet:["hlsfmp4","hls","video_1080p_mp4","video_720p_mp4","video_480p_mp4","video_360p_mp4","video_240p_mp4"],desktop:["hlsfmp4","hls","video_1080p_mp4","video_720p_mp4","video_480p_mp4","video_360p_mp4","video_240p_mp4"]};t.commonPrioritizedVideoRenditions=u;t.findCommonPrioritizedVideoRendition=function(e,t){for(var n,r=0;r<u[t].length&&!n;r+=1)for(var i=0;i<e.length&&!n;i+=1){var o=u[t][r],l=e[i];o===l.type&&(n=l)}return n?[n]:e};var d=["16:9","3:2"];t.preferredDesktopRatios=d;var c=["1:1","2:3","9:16","4:5","16:9","3:2"];t.preferredMobileRatios=c;t.filterVideoRenditionsByPreferredRatio=function(e,t){var n=d;"smartphone"===t&&(n=c);var r=n.reduce((function(t,n){return 0===t.length?t.concat(e.filter((function(e){return e.aspectRatio===n}))):t}),[]);return r.length>0?r:e}},p3S2:function(){},uf0L:function(){},vFws:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.VIDEO_HEADER_LAYOUTS=t.RATIOS=void 0;t.VIDEO_HEADER_LAYOUTS={MOBILE:"mobile",DESKTOP:"desktop"};t.RATIOS={"1:1":"MEDIUM_SQUARE","3:2":"THREE_BY_TWO","2:3":"TWO_BY_THREE","16:9":"SIXTEEN_BY_NINE","15:7":"FIFTEEN_BY_SEVEN"}},vOGy:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.mediaClass=void 0;var r=(0,n("Jqp9").css)("position:absolute;top:0;left:0;width:100%;height:100%;background-color:transparent;object-fit:cover;&::after{content:'';display:block;background-color:transparent;position:absolute;top:0;left:0;width:100%;height:100%;text-align:center;min-height:50px;}");t.mediaClass=r},x9rc:function(){}