function(){}function(){}function(){}function(){}function htmlUnescape(n){return String(n).replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&")}function(){}function(){}function(){}function(){}function(){}function(){}function(){}function(){}function(){}function(){}function(){}function(){}function(){}function(){}function(){}function(){}function(){}function(){}function(){}function(){}function(){}function(){}function(){}function(){}function(){}function(){}function(){}function(){}function(){}function(){}function(){}function admPlayProgress(n){var r=3,t=$(n),i,u;currentTimingVideo!=t&&currentTimingVideo!=null&&currentTimingVideo.find(".bg-wraper").hide();currentTimingVideo=t;i=t.find('iframe[src*="vcplayer.vcmedia.vn"], iframe[src*="123.31.11.105"], iframe[src*="vcplayer.mediacdn.vn"]');t.find(".bg-wraper").length>0?(t.find(".loading-vid-countdown").fadeIn(1500),t.find(".loading-vid-countdown").addClass("quickspin"),t.find(".bg-wraper").addClass("bgPoster"),detectmob()?setTimeout(function(){$.inArray("#"+i.attr("id"),readyVideoIds)>=0?videoInContent.playVideo(i):waitingVideoIdForReady.push("#"+i.attr("id"));t.find(".bg-wraper").hide()},1e3):(t.find(".lvc-label").show(),t.find(".lvc-number").show(),u=setInterval(function(){r==1&&($.inArray("#"+i.attr("id"),readyVideoIds)>=0?videoInContent.playVideo(i):waitingVideoIdForReady.push("#"+i.attr("id")));r>0?t.find(".lvc-number").html(r):(clearInterval(u),t.find(".bg-wraper").hide());r=r-1},500))):$.inArray("#"+i.attr("id"),readyVideoIds)>=0?videoInContent.playVideo(i):waitingVideoIdForReady.push("#"+i.attr("id"))}function(){}function(){}function(){}function(){}function(){}function(){}function(){}function(){}function(){}var stream,mixedStream,isWhole_re,keyStr,fbClient,VideoNotify,TieuDungNotify,detectmob,videoHD,videoIframe,waitingVideoIdForReady,readyVideoIds,getElementTop,currentTimingVideo,videoInContent,videoInPopup,LoginManager,boxVote,timelineHome;(function(){})();
/*! jQuery v1.12.4 | (c) jQuery Foundation | jquery.org/license */
!function(){}("undefined"!=typeof window?window:this,function(){});jQuery.browser={},function(){}();!function(){}();"undefined"!=typeof module?module.exports=window.Swiper:"function"==typeof define&&define.amd&&define([],function(){});
/*! Copyright (c) 2011 Piotr Rochala (http://rocha.la)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 *
 * Version: 1.3.8
 *
 */
(function(){})(jQuery);
/**
 * Timeago is a jQuery plugin that makes it easy to support automatically
 * updating fuzzy timestamps (e.g. "4 minutes ago" or "about 1 day ago").
 *
 * @name timeago
 * @version 1.4.1
 * @requires jQuery v1.2.3+
 * @author Ryan McGeary
 * @license MIT License - http://www.opensource.org/licenses/mit-license.php
 *
 * For usage and examples, visit:
 * http://timeago.yarp.com/
 *
 * Copyright (c) 2008-2015, Ryan McGeary (ryan -[at]- mcgeary [*dot*] org)
 */
(function(){})(function(){});
/*!
 * jQuery Mousewheel 3.1.12
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
(function(){})(function(){}),function(){}(jQuery);String.prototype.htmlEncode=function(){return $("<div/>").text(this).html()};String.prototype.htmlDecode=function(){};String.prototype.toSubString=function(){};String.prototype.startsWith=function(){};String.prototype.endsWith=function(){};stream=function(){}(jQuery);mixedStream=function(){}(jQuery);jQuery.fn.forceNumeric=function(){};String.format=function(){};String.prototype.replaceAll=function(){};isWhole_re=/^\s*\d+\s*$/;keyStr="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
/**
 * jQuery BASE64 functions
 * 
 * 	<code>
 * 		Encodes the given data with base64. 
 * 		String $.base64Encode ( String str )
 *		<br />
 * 		Decodes a base64 encoded data.
 * 		String $.base64Decode ( String str )
 * 	</code>
 * 
 * Encodes and Decodes the given data in base64.
 * This encoding is designed to make binary data survive transport through transport layers that are not 8-bit clean, such as mail bodies.
 * Base64-encoded data takes about 33% more space than the original data. 
 * This javascript code is used to encode / decode data using base64 (this encoding is designed to make binary data survive transport through transport layers that are not 8-bit clean). Script is fully compatible with UTF-8 encoding. You can use base64 encoded data as simple encryption mechanism.
 * If you plan using UTF-8 encoding in your project don't forget to set the page encoding to UTF-8 (Content-Type meta tag). 
 * This function orginally get from the WebToolkit and rewrite for using as the jQuery plugin.
 * 
 * Example
 * 	Code
 * 		<code>
 * 			$.base64Encode("I'm Persian."); 
 * 		</code>
 * 	Result
 * 		<code>
 * 			"SSdtIFBlcnNpYW4u"
 * 		</code>
 * 	Code
 * 		<code>
 * 			$.base64Decode("SSdtIFBlcnNpYW4u");
 * 		</code>
 * 	Result
 * 		<code>
 * 			"I'm Persian."
 * 		</code>
 * 
 * @alias Muhammad Hussein Fattahizadeh < muhammad [AT] semnanweb [DOT] com >
 * @link http://www.semnanweb.com/jquery-plugin/base64.html
 * @see http://www.webtoolkit.info/
 * @license http://www.gnu.org/licenses/gpl.html [GNU General Public License]
 * @param {jQuery} {base64Encode:function(input))
 * @param {jQuery} {base64Decode:function(input))
 * @return string
 */
(function(){})(jQuery);
/**
* @name        jQuery FullScreen Plugin
* @author      Martin Angelov, Morten Sjøgren
* @version     1.1
* @url         http://tutorialzine.com/2012/02/enhance-your-website-fullscreen-api/
* @license     MIT License
*/
(function(){})(jQuery);JSONscriptRequest.scriptCounter=1;JSONscriptRequest.prototype.buildScriptTag=function(){};JSONscriptRequest.prototype.removeScriptTag=function(){this.headLoc.removeChild(this.scriptObj)};JSONscriptRequest.prototype.addScriptTag=function(){};fbClient={version:"v2.8",appId:"864272056978059",xfbml:!0,status:!0,likeCB:null,loaded:null,init:function(){},fbParse:function(){},fbLoad:function(){},getLikeShareCount:function(){},shareClick:function(){},sendClick:function(){},fanpage:function(){},renderButton:function(){}};var initGopYButton=function(){},initLazyAdm=function(){},getTokenLsv=function(){},initLikeWidget=function(){};if(VideoNotify={timesNotify:6,timeshow:15e3,timehide:15e3,timerequest:3e4,cookieName:"callvidnotify",getData:function(){var n=this;$.ajax({url:appSettings.ajaxDomain+"/handlers/getVideoNotify.ashx",xhrFields:{withCredentials:!0},dataType:"json",error:function(){},success:function(n){console.log("video",n);VideoNotify.callback(n)}})},callback:function(){},timeOutHide:null,init:function(){},close:function(){$("#videonotify").fadeOut(1e3,function(){try{var n=[],t=$("#videonotify .notifyplayer"),i=t.find("video").attr("id").replace("_html5_api","");n.push(i);playerInitScript.remove(n);$("#videonotify .notifyplayer").html("")}catch(r){}})}},TieuDungNotify={timesNotify:6,timeshow:15e3,timehide:15e3,timerequest:3e4,cookieName:"calltieudungnotify",getData:function(){},callback:function(){},timeOutHide:null,init:function(){},close:function(){}},detectmob=function(){},videoHD={typeAppend:1,isMute:!1,isSuggest:!0,isAd:!0,scrollplay:!0,isHideControlbar:!1,originDomain:"*",suggsetDomain:"",divVideoFormat:'<div class="VCSortableInPreviewMode" type="VideoStream"><\/div>',divIfrWrapperFormat:'<div class="iframe-wraper"><\/div>',videoFormat:'<div class="iframe-wraper">{4}<iframe class="inithd" width="{0}" height="{1}" src="{2}" id="ifVideo-{3}" frameborder="0" allowfullscreen="" webkitallowfullscreen="" mozallowfullscreen="" oallowfullscreen="" msallowfullscreen="" oallowfullscreen="" scrolling="no"><\/iframe><\/div>',bgFormat:'<div class="bg-wraper" style="background-image: url({0});"><div class="loading-vid-icon"><div class="lvc-label">Video tự động phát<\/div><div class="lvc-play-icon"><\/div><\/div><div class="loading-vid-countdown" style="display: none"><div class="lvc-label">Video tự động phát<\/div><div class="lvc-circle"><\/div><div class="lvc-line-mask"><div class="lvc-line"><\/div><\/div><span style="display: none;"class="lvc-number">3<\/span><\/div><\/div>',host:appSettings.videoplayer+"/1.1/?_site=vtv&vid=vtv/",bgPauseNotify:'<div class="pause-vd-notify"><span class="clearfix"><svg width="9" height="12"><path d="M0,0V12H3V0ZM6,0V12H9V0Z"><\/path><\/svg>Video tạm dừng<\/span><\/div>',useBg:!0,init:function(){},initnew:function(){},getPlayerToken:function(){},buildEmbedVideo:function(){},videoFunction:function(){},listFocus:function(){},genVideoSource:function(){},playType:{viewable:0,autoplay:1,clickToPlay:2},videoType:{newsDetail:1,stream:2,videoDetail:3,boxVideo:4,newsBottom:5,boxMutex:6,clickToPlay:7,zoneVideo:8,homeVideo:9},getVideoType:function(){}},videoIframe={arrIframe:[],originDomain:"*",rangerPixel:40,fraction:.6,videoDomain:"https://vtv.hosting.vcmedia.vn",timeOut:null,init:function(){},pushArrIframe:function(){},videoFunction:function(){},openPopup:function(){},closePopup:function(){},supportTransition:function(){},tabActive:function(){},clearFocus:function(){}},window.addEventListener?window.addEventListener("message",function(n){listenPlayer(n)},!1):window.attachEvent&&window.attachEvent("onmessage",function(){}),waitingVideoIdForReady=[],readyVideoIds=[],!windowPrototype)var windowPrototype={wdHeight:function(){var n;return"number"==typeof innerWidth?n=window.innerHeight:document.documentElement&&document.documentElement.clientHeight?n=document.documentElement.clientHeight:document.body&&document.body.clientHeight&&(n=document.body.clientHeight),n},wdWidth:function(){}},Browser={Version:function(){}},browserVersion=Browser.Version(),admwdHeight=parseInt(windowPrototype.wdHeight());typeof getElementTop=="undefined"&&(getElementTop=function(){});currentTimingVideo=null;videoInContent={isFullscreen:!1,init:function(){},playVideo:function(n){var e=this,t=$(n),r,u,i,f;e.stopAllVideo();r=isElementVisible(document.getElementById(t.attr("id")));r=="play"&&(u=t.attr("id"),t.parents(".VCSortableInPreviewMode").find(".pause-vd-notify").hide(),i=document.getElementById(u),i&&(t.attr("data-playstatus","playing"),f={action:"request",method:"play"},i.contentWindow&&i.contentWindow.postMessage(f,"*")))},stopVideo:function(){},stopAllVideo:function(){},hideControlBar:function(){},getCurrentTime:function(){},setCurrentTime:function(){},seekCurrentTime:function(){},changeIsFullscreen:function(){}};videoInPopup={isFullscreen:!1,init:function(){},playVideo:function(){},stopVideo:function(){},stopAllVideo:function(){var n=this;$('iframe[src*="vcplayer.vcmedia.vn"], iframe[src*="123.31.11.105"], iframe[src*="vcplayer.mediacdn.vn"]').each(function(){$video=$(this);n.stopVideo("#"+$video.attr("id"));$video.attr("data-playstatus","stopping")})},changeIsFullscreen:function(){var n=this;n.isFullscreen=!n.isFullscreen}};equalheight=function(){};LoginManager={GetUserInfo:function(){},InitLogin:function(){},Logout:function(){},showLoginForm:function(){$("#btnToPopupLogin").length==0&&$("body").append('<button id="btnToPopupLogin" style="width: 1px;height: 1px; display: none"><\/button>');$("#btnToPopupLogin").popupWindow({windowURL:appSettings.ajaxDomain+"/dang-nhap.htm",width:600,height:580,centerScreen:1,windowName:"popupform"})},showRegisterForm:function(){}};menuActive={timeout:null,time:1e3,hr:window.document.location.pathname,init:function(){},focus:function(){},subMenu:function(){}};boxVote=function(){}(jQuery);var timerCountDown={cusDate:null,eleDay:null,eleHours:null,eleMinute:null,eleSecond:null,timerCd:null,init:function(){}},SearchPage={Init:function(){},SearchAll:function(){}},BoxTvVideoHome={InitTimes:1,jScrollPane:undefined,Init:function(){},InitBoxTvVideo:function(){},InitScheduleScroll:function(){},GetDataVideo:function(){},GetDataSchedule:function(){},initVietNamTimeText:function(){}},home={mcSlider:function(){},boxSlideInit:function(){},focusClick:function(){},initVnTimeTop:function(){},fixUI:function(){},videoDaphatSongSlider:function(){},boxGiaoLuuSlider:function(){},boxTapChiTruyenHinhSlider:function(){},boxThethaoInit:function(){},boxBigEventInit:function(){},menuLeftBarInit:function(){},initBoxvideoTimeline:function(){}};timelineHome={pageIndex:1,flag:!0,page_count:0,url:"/timelinehome/trang-{0}.htm",delaySuccess:1200,placeholder:"#timeline",lastItem:null,duplessthan:5,flagSameZone:!0,eleCheckTop:null,init:function(){},getData:function(){},successCallback:function(){},removeDup:function(){},iconList:function(){}};$(document).ready(function(){});$(window).load(function(){home.videoDaphatSongSlider()});$(document).ready(function(){}