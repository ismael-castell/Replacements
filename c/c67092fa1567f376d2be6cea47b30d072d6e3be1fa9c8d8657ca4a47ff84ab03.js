/*
 * Copyright 2022 Disney
 * All Rights Reserved
 *
 * Captionator 0.5.1
 * Copyright 2011 Christopher Giffard
 * Simplified BSD License
 */
this.DisneyVideo=this.DisneyVideo||{},function(e){"use strict";var t=e.console,n=e.DisneyVideo,a=e._;n.MessageBus=function(){function r(e,t){for(var n=0;n<t.length;n++){var a=t[n];if(a)try{a.callback(e)}catch(r){u(r)}}}function i(e,t){var n={name:e,body:t},a=(s[e]||[]).slice(0);r(n,a),a=(s["*"]||[]).slice(0),r(n,a)}function o(e,t,n){a.each(c,function(a){if(a!==n)try{a.bus[a.functionName](e,t)}catch(r){}})}var s={},l=this,c={},u=function(n){var a=e.onerror;t&&t.error&&t.error("MessageBus:: "+n.stack||"MessageBus:: "+n.toString()),a&&a("MessageBus:: "+n.toString())};"undefined"==typeof n.MessageBus.Connections&&(n.MessageBus.Connections={}),this.addConnection=function(e,t,a){if(!a){var r=e+"_"+Math.round(1e6*Math.random()),s="DisneyVideo.MessageBus.Connections."+r,u=r+"_primarySendMessage",d=r+"_secondarySendMessage",f=function(e,t){i(e,t),o(e,t,g)},p={id:e,bus:l,"function":f,functionName:u,uniqueId:r,globalId:s};n.MessageBus.Connections[r]={},n.MessageBus.Connections[r][u]=f,l[u]=f;var g={id:e,bus:{sendMessage:t.sendMessage,addMessageListener:t.addMessageListener,removeMessageListener:t.removeMessageListener,addConnection:t.addConnection,removeConnection:t.removeConnection},functionName:d,uniqueId:r,globalId:s};a={primary:p,secondary:g},n.MessageBus.Connections[r].connection=a,c[e]=g;try{t.addConnection(e,l,a)}catch(v){}g.bus=t}},this.removeConnection=function(e){var t=c[e];if(t){var a=n.MessageBus.Connections[t.uniqueId].connection;l[a.primary.functionName]=null,n.MessageBus.Connections[t.uniqueId]=null,c[e]=null,t&&t.bus&&t.bus.removeConnection&&t.bus.removeConnection(e)}},this.sendMessage=function(e,t){i(e,t),o(e,t)},this.addMessageListener=function(e,t){var n={name:e,callback:t};s[e]||(s[e]=[]),s[e].push(n)},this.removeMessageListener=function(e,t){for(var n=s[e]||[],a=0;a<n.length;a++){var r=n[a];r&&r.name===e&&r.callback===t&&(n[a]=null)}},this.destroy=function(){a.each(c,function(e){l.removeConnection(e)}),c=null,a.each(s,function(e){l.removeMessageListener(e.name,e.callback)}),s=null,l=null}}}(this),function(e){"use strict";var t=e.DisneyVideo,n=e.jQuery,a={newrelic:function(){return"undefined"!=typeof e.newrelic?e.newrelic:null},addPageAction:function(e,t){var n=this.newrelic();n&&n.addPageAction(e,t)},addToTrace:function(e){var t=this.newrelic();t&&t.addToTrace(e)},createTraceObj:function(e,t,a,r,i){return t=t||(new Date).getTime(),n.extend({},{name:e,start:t,end:a,origin:r,type:i})},noticeError:function(e){var t=this.newrelic();t&&t.noticeError(e)},setCustomAttribute:function(e,t){var n=this.newrelic();n&&n.setCustomAttribute(e,t)},customAttributes:{bandwidth:"DisneyVideoBandwidth",height:"DisneyVideoHeight",playerName:"DisneyVideoPlayer",playerVersion:"DisneyVideoPlayerVersion",videoId:"DisneyVideoCoreId",width:"DisneyVideoWidth"}},r=function(){return a};t.NewRelic=new r}(this),function(e){"use strict";var t=e.DisneyVideo;t.Capabilities={MIN_FP_VERSION:[9,0],isHTML5Capable:function(){return e.Modernizr.canvas},isMobileBrowser:function(){return e.navigator.userAgent.match(/(ipod|iphone|ipad|android|silk|iemobile)/i)},isiOSBrowser:function(){return e.navigator.userAgent.match(/(ipod|iphone|ipad)/i)},isOnlyFullscreenPlaybackCapable:function(){return e.navigator.userAgent.match(/(ipod|iphone)/i)},isAndroidBrowser:function(){return e.navigator.userAgent.match(/(android)/i)},isKindleBrowser:function(){return e.navigator.userAgent.match(/(kindle|silk)/i)}}}(this),function(e){"use strict";var t=e.DisneyVideo,n=e.jQuery,a=e._;t.Video=function(e,r){var i=this;n.extend(i,e,r),this.getCoreId=function(){return i.core_id||i.core_record_id||i.id},this.hasCountryRestrictions=function(){return i.allowedCountries&&i.allowedCountries.length&&i.allowedCountries.length>0},this.isCountryAllowed=function(e){return!i.allowedCountries||i.allowedCountries.length<=0||a.contains(i.allowedCountries,e)},this.requiresDRM=function(){var e=["progressive"],n=["mp4"],a=1220;t.Capabilities.isiOSBrowser()&&(e.unshift("encrypted_hls"),n.push.apply(n,["applehttp","hls"]));var r=this.getFlavor(e,n,a);return!r},this.getFlavor=function(e,t,r){var o,s=i.flavors,l=[];a.each(t,function(t){var r=a.filter(s,function(e){return e.format===t})||[];r.sort(function(t,n){return a.difference(t.security_profile,n.security_profile).length>0&&a.each(e,function(e){var r=a.contains(t.security_profile,e),i=a.contains(n.security_profile,e);return r!==i?r?-1:1:void 0}),-1}),n.merge(l,r)});var c=a.filter(l,function(t){return!t.security_profile||t.security_profile.length<=0||a.intersection(e,t.security_profile).length>0});if(0!==c.length&&(o=a.min(c,function(e){return Math.abs(e.width-r)})),o&&("applehttp"===o.format||"hls"===o.format)){var u=a.filter(s,function(e){return e.url.indexOf("hls/master")>-1});o=u[0]}return o&&o.url?o:null},this.getCaptions=function(e){if(!i.captions||i.captions.length<=0)return null;var t,n=a.filter(i.captions,function(t){return t.format===e});return t=n[0]},this.hasCaptions=function(){return i&&i.captions&&!!i.captions.length},this.hasFlavors=function(){return i&&i.flavors&&!!i.flavors.length},this.isPlayable=function(e){var n=i.getFlavor(e.profiles,e.formats,t.getIdealWidth());return!i.expired&&i.hasFlavors()&&null!==n},this.getPoster=function(){return i.poster||i.promo||i.preview||i.thumb||""},this.getTitle=function(){return i.title},this.getBadge=function(){return i.badge},this.getDuration=function(){return i.duration},this.isTotalEclips=function(){var e=!1;return this.hasFlavors()?(i.flavors.forEach(function(t){t&&t.url&&-1!==t.url.indexOf("totaleclips")&&(e=!0)}),e):!1},this.getFlavorsBitrateDescending=function(){return i.flavors.sort(function(e,t){return e.bitrate&&t.bitrate?e.bitrate<t.bitrate?1:e.bitrate>t.bitrate?-1:0:0})}}}(this),function(e){"use strict";var t=e.DisneyVideo,n=e.jQuery,a=e.document,r=null;t.BasePlayer=function(){function i(t){var a,r,i;n.when(o("//tredir.go.com/capmon/GetDE/?set=j&param=countryisocode&param=state&param=connection")).done(function(){a=e.countryisocode,r=e.state,i=e.connection||"broadband",t(a,r,i)})}function o(e){return n.ajax({url:e,dataType:"script",cache:!0})}function s(){var e=n.Deferred();return S&&S.dependency?S.dependency(e.resolve):(L=!0,e.resolve()),e}function l(){return L}function c(){var e=n.Deferred();return S&&S.video&&S.video.hasCountryRestrictions()&&S.geo.enabled?S.geo.geoFunc(function(t){r=t,e.resolve()}):e.resolve(),e}function u(){S.config.dependencies=S.config.dependencies||[],S.config.dependencies.push(s()),S.config.dependencies.push(c())}function d(){var e=n("#"+S.id),t=S.video.getPoster(),a=S.video.getTitle(),r=S.video.getBadge(),i=S.video.getDuration(),o=S.video.posterSize?" "+S.video.posterSize:"";a=a.replace(/"/g,"'");var s='<div class="overlay posterClick"><div class="posterControls"><button class="posterPlayButton" aria-label="'+a+' - Play Video"></button></div></div><div class="videoPoster'+o+'" style="background-image: url(\''+t+"')\"></div>";r&&(s+='<div class="badgeImage"><img src="'+r+'" class="badge"></div>'),S.config.showTitle&&(s+='<div class="details"><h3>'+a+"</h3></div>"),S.config.showDuration&&(s+='<div class="duration"><p>'+i+"</p></div>"),e.html(s),e.addClass("disneyVideo"),e.addClass("poster"),_="poster",f(),S.messageBus.sendMessage("finishedEmbedPoster")}function f(){x=n("#"+S.id).children(".posterClick"),x.bind("click",g)}function p(){x&&(x.unbind("click",g),x=null)}function g(e){e.preventDefault(),S.controls.play()}function v(){S.adPattern.init(S);var e=n("#"+S.id);if(e.addClass("disneyVideo"),S.config.embedded&&S.video.notEmbeddable){var t="?cmp=Embed|vid|ExtEmbedRedir||||||||||";S.embedError(S.config.translations.embedding_disabled+'<p><a href="'+S.video.href+t+'" target="_top">'+S.config.translations.watch_now+"</a>"),n("#"+S.id+" .player_error a").bind("click",function(e){var t=n(e.currentTarget).attr("href");S.tracking.trackLink({linkName:"embed/notEmbeddableError/"+S.video.slug+"-"+S.video.getCoreId(),linkPosition:"embed/player_error",href:t})})}else S.video.expired?S.embedError(S.config.translations.video_expired):!S.video.isCountryAllowed(r)&&S.config.geo.enabled?S.embedError(S.config.translations.country_disallowed):(L=!0,S.embed(),S.config.autoPlay&&S.config.autoPlay_mute&&S.controls.mute());S.messageBus.sendMessage("finishedEmbedPlayer")}function y(){S.config.clickToPlay&&"poster"===_&&(S.config.autoPlay=!0,S.config.autoPlay_mute=!1,T(),S.embedPlayer())}function h(){}function m(){S.config.clickToPlay&&"poster"!==_&&(S.cleanupListeners(),S.embedPoster())}function b(){}function k(e){e||(e=a.getElementById(S.id)),e.requestFullscreen?e.requestFullscreen():e.msRequestFullscreen?e.msRequestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.webkitRequestFullscreen&&e.webkitRequestFullscreen()}function P(e){if(e&&t.Capabilities.isiOSBrowser())try{e.webkitExitFullscreen()}catch(n){}else a.exitFullscreen?a.exitFullscreen():a.msExitFullscreen?a.msExitFullscreen():a.mozCancelFullScreen?a.mozCancelFullScreen():a.webkitExitFullscreen&&a.webkitExitFullscreen()}function w(){a.fullScreenElement&&null!==a.fullScreenElement||a.mozFullScreen||a.webkitIsFullScreen||a.msFullscreenElement?S.controls.exitFullscreen():S.controls.enterFullscreen()}function C(){S.messageBus.addMessageListener("play",y),S.messageBus.addMessageListener("pause",h),S.messageBus.addMessageListener("stop",m),S.messageBus.addMessageListener("resume",b)}function E(){S.messageBus.removeMessageListener("play",y),S.messageBus.removeMessageListener("pause",h),S.messageBus.removeMessageListener("stop",m),S.messageBus.removeMessageListener("resume",b)}function T(){_="",n("#"+S.id).removeClass("poster")}function A(t){var n=/(?:\?|^|&)player=([0-9,a-zA-Z]*)/,a=n.exec(e.location.search),r=a?a[1]:null,i=/(?:\?|^|&)kpid=([0-9a-f]+)/,o=i.exec(e.location.search);o&&(t.kPartnerId=o[1]);var s=/(?:\?|^|&)kuiconfid=([0-9a-f]+)/,l=s.exec(e.location.search);l&&(t.kUiconfId=l[1]);var c=new RegExp("[?&]tagId(=([^&#]*)|&|#|$)"),u=c.exec(e.location.search);u&&(t.video.externals[0].data.tags=u[2]);var d=new RegExp("[?&]entryId(=([^&#]*)|&|#|$)"),f=d.exec(e.location.search);f&&(t.video.externals[0].data_id=f[2]),r&&(t.playerType=r)}var x,_="",S=this,L=!1;S.extendUnlessPresent=function(e,t){n.each(t,function(n){void 0===e[n]&&(e[n]=t[n])})},S.embedPoster=function(){var e=n.when.apply(n,S.config.dependencies);return e.done(d),e.promise()},S.embedError=function(e){var t=n("#"+S.id);t.html('<div class="player_error">'+e+"</div>"),S.type="error"},S.embedPlayer=function(){var e=n.when.apply(n,S.config.dependencies);return e.done(v),e.promise()};var O={autoPlay:!1,continuousPlay:!1,clickToPlay:!1,showTitle:!1,addBaseDependencies:u},M={enabled:!0};O.tracking=M;var B={enabled:!0,geoFunc:i};O.geo=B,S.dependenciesDone=l,S.config=O,S.config.translations={no_javascript:"Uh, oh! It seems JavaScript is disabled in your internet browser. Please enable JavaScript if you would like to watch videos on this site.",video_expired:"Sorry, this video is no longer available.",dependencies_not_met:"Uh, oh! It appears your internet browser is out of date. Please upgrade your internet browser or update Adobe Flash Player.",get_flash_player:"Get Adobe Flash Player",embedding_disabled:"Sorry, but this video can only be played on Disney.com",country_disallowed:"We're sorry, this video cannot be played in your region.",device_not_supported:"Sorry, but your device does not support the playback of this video.",video_not_found:"Uh, oh! We can't find this video right now. Please try again later!",advertisement:"Advertisement",skip_ad:"Skip Ad",watermark_text:"Watch on Disney.com"},S.ads={enabled:!0},S.controls={play:function(){S.messageBus.sendMessage("play")},pause:function(){S.messageBus.sendMessage("pause")},togglePlayPause:function(){S.messageBus.sendMessage("togglePlayPause")},replay:function(){S.messageBus.sendMessage("replay")},scrub:function(e){S.messageBus.sendMessage("scrub",e)},stop:function(){S.messageBus.sendMessage("stop")},enterFullscreen:k,exitFullscreen:P,toggleFullscreen:w},S.init=function(e,a){e&&(S.id=e,t.Players[S.id]={},A(a),S.config=n.extend(!0,S.config,a),S.ads=n.extend(S.ads,a.ads),S.tracking=n.extend(S.config.tracking,a.tracking),S.geo=n.extend(S.config.geo,a.geo),C())},S.cleanupListeners=function(){},S.destroy=function(){S.cleanupListeners(),E(),T(),p(),t.Players[S.id]=null;var e=n("#"+S.id);S.messageBus&&(S.messageBus.destroy(),S.messageBus=null),S.config=null,S.controls=null,S.ads=null,S.info=null,S.video=null,S=null,e.empty()}}}(this),function(e){"use strict";var t=e.DisneyVideo,n=e.document,a=e.$,r=e._;t.Accessibility=function(t){function i(e){e.preventDefault(),a("#"+t.id).mousemove()}function o(e){if(d[e.which]=!0,1===r.size(d)&&u.indexOf(e.which)<0)switch(e.which){case c.SPACEBARKEY:t.controls.togglePlayPause(),i(e);break;case c.UPARROWKEY:t.controls.mute(!1),i(e);break;case c.DOWNARROWKEY:t.controls.mute(),i(e);break;case c.LEFTARROWKEY:t.controls.scrub(-5),i(e);break;case c.RIGHTARROWKEY:t.controls.scrub(5),i(e);break;case c.FKEY:t.controls.enterFullscreen(),i(e);break;case c.ESCKEY:t.controls.exitFullscreen(),i(e)}}function s(e){if(d[e.which]&&1===r.size(d)&&u.indexOf(e.which)<0)switch(e.which){case c.SPACEBARKEY:case c.UPARROWKEY:case c.DOWNARROWKEY:case c.LEFTARROWKEY:case c.RIGHTARROWKEY:case c.FKEY:case c.TKEY:case c.ESCKEY:i(e)}delete d[e.which]}function l(){d={}}var c={SPACEBARKEY:32,UPARROWKEY:38,DOWNARROWKEY:40,LEFTARROWKEY:37,RIGHTARROWKEY:39,FKEY:70,TKEY:67,ESCKEY:27,ENTERKEY:13},u=[],d={};this.setupKeyboardControls=function(){return a("#"+t.id).on("keydown",o),a("#"+t.id).on("keyup",s),a(e.window).on("focusout",l),{disable:function(){r.each(arguments,function(e){c.hasOwnProperty(e)?u.push(c[e]):e===parseInt(e,10)&&u.push(e)})}}},this.cleanupKeyboardControls=function(){d={},u=[],a("#"+t.id).off("keydown",o),a("#"+t.id).off("keyup",s),a(e.window).off("focusout",l)},this.using=function(e){function r(){l=a(n.activeElement),l.addClass("hover"),a("#"+t.id).mousemove()}function i(){l&&(l.removeClass("hover"),l=null)}function o(){a("#"+t.id).focus(),i()}function s(e){d[c.ENTERKEY]?a("#"+t.id).mousemove():e.data.handler()}if(e){var l;return{onFocusDoHover:function(){return e.on("focusin",r),e.on("focusout",i),this},cleanupOnFocusDoHover:function(){return e.off("focusin",r),e.off("focusout",i),this},removeFocusOn:function(t){return e.on(t,{handler:o},s),this},cleanupRemoveFocusOn:function(t){return e.off(t,s),this}}}}}}(this),function(e){"use strict";var t=e.DisneyVideo,n=e.Disney;t.language=n.language||function(e){var t=e&&e[0],n=t&&t.replace(/-.*$/,"");return n||"en"}(n.locales)}(this),function(e){"use strict";var t=e.DisneyVideo,n=e.Disney,a=e.jQuery,r=e._,i="https://imasdk.googleapis.com/js/sdkloader/ima3.js",o=6;t.KalturaV2VideoPlayer=function(t){function s(e){var t="https://cdnapisec.kaltura.com/p/"+p()+"/sp/"+p()+"00/embedIframeJs/uiconf_id/"+g()+"/partner_id/"+p();a.when(v(t)).then(function(){d(),e()})}function l(e){a.ajax(i,{dataType:"script",cache:!0,success:function(){c(e)},error:function(){u(e)},timeout:2e3})}function c(e){G||(G=!0,e())}function u(e){G||e()}function d(){var n;switch(t.video.hasFlavors()&&(n=r.contains(t.video.flavors[0].security_profile,"hls_only_android")?"android":r.contains(t.video.flavors[0].security_profile,"hls_only_all")?"all":void 0),n){case"android":e.mw.setConfig("Kaltura.LeadHLSOnAndroid",!0);break;case"all":e.mw.setConfig("LeadWithHLSOnFlash",!0),e.mw.setConfig("Kaltura.LeadHLSOnAndroid",!0);break;default:e.mw.setConfig("Kaltura.LeadWithHTML5",!0)}}function f(){for(var e,n=t.video,a=0;a<n.externals.length;a++)"kaltura"===n.externals[a].source&&(e=n.externals[a]);return e}function p(){return t.config.kPartnerId?t.config.kPartnerId:f().account}function g(){if(t.config.kUiconfId)return t.config.kUiconfId;var e="platform",n=t.config.kaltura.adSystems,a=n.noads[e];return t.video&&t.video.ads&&r.each(n,function(n,i,o){r.isUndefined(t.video.ads[i])||(a=o[i][e])}),a}function v(e){return a.ajax({url:e,dataType:"script",cache:!0})}function y(){if(t.config.kalturaHostedTag)return!0;if(t.config.video){var e=t.config.video.externals[0],n=e.data&&e.data.tags&&e.data.tags.indexOf("kaltura-hosted")>-1,a=e.source&&e.source.indexOf("kaltura")>-1;if(n||a)return!0}return!1}function h(){var e={},a=t.video&&t.video.ads?t.video.ads.dfp:null;if(a){var r=t.video.ads.enabled&&a.adTagUrl?a.adTagUrl:null,i=a.companion||null,o=n.locales||[],s=o[0]||"en";e={localizationCode:s,doubleClick:{disableCompanionAds:!1,htmlCompanions:i,adsManagerLoadedTimeout:5e3,plugin:!0,useExternalImaLib:!0,adTagUrl:r}}}else e={doubleClick:{plugin:!1}};return e}function m(){var r=n.locales||[],i=r[0]||"en",o={externalInterfaceDisabled:!1,loop:t.config.loop?!0:!1,"EmbedPlayer.ForceNativeFullscreenOnClipDone":t.config.loop?!0:!1,metadataProfileId:t.config.kaltura&&t.config.kaltura.metadataProfileId?t.config.kaltura.metadataProfileId:null,autoPlay:t.config.autoPlay||!1,autoMute:t.config.autoPlay_mute||!1,autoPlayFallbackToMute:t.config.autoPlay_mute||!1,"unMuteOverlayButton.plugin":!1,"controlBarContainer.plugin":t.config.hideControlBarContainer?!1:!0,"topBarContainer.plugin":t.config.hideTopBarContainer?!1:!0,"largePlayBtn.plugin":t.config.hideLargePlayBtn?!1:!0,localizationCode:i,strings:{"mwe-embedplayer-share":t.config.translations.share}},s={IframeCustomPluginCss1:t.config.kalturaSkinUrl||void 0,IframeCustomPluginCss2:t.config.kalturaSkinCssOverridesUrl?t.config.kalturaSkinCssOverridesUrl:void 0,IframeCustomPluginJs1:t.config.kalturaSkinJsUrl?t.config.kalturaSkinJsUrl:void 0},l={LeadWithHLSOnJs:!0,hlsjs:{plugin:!0}},c={closedCaptions:{plugin:!0,hideWhenEmpty:!0}},u={"accessibility-plugin":{plugin:!0,iframeHTML5Js:t.config.accessibilityPluginUrl||void 0}},d={titleLabel:{plugin:t.video.hideTitle?!1:!0,align:"left",text:t.video.getTitle()}},v={thumbnailUrl:t.video.getPoster()},m={};if(t.config.spinnerPlugin){var k=t.config.spinnerPlugin;m[k.name]={plugin:k.jsUrl||k.cssUrl?!0:!1,iframeHTML5Js:k.jsUrl||null,iframeHTML5Css:k.cssUrl||null}}var P,w,C={},E={},T=t.video.isTotalEclips();if(Q=y(),Q||T){var A=t.config.sharePluginUrl||void 0,x=t.config.logoPluginUrl||void 0;t.config.embedded&&(t.video.hideShare=!0),t.video.share={id:t.video.getCoreId()||"",href:t.video.href||"",thumb:t.video.thumb||"",title:t.video.title||"",source:t.video.href||"",embedURL:t.video.embedUrl||""},P={name:"videoplayer-skin-share-plugin",cssUrl:t.video.hideShare?!1:s.IframeCustomPluginCss1,jsUrl:t.video.hideShare?!1:A},C[P.name]={plugin:P.jsUrl?!0:!1,iframeHTML5Js:A,iframeHTML5Css:P.cssUrl||null},w={name:"videoplayer-skin-logo-plugin",cssUrl:t.video.hideLogo?!1:s.IframeCustomPluginCss1,jsUrl:t.video.hideLogo?!1:x,alignRight:t.video.hasCaptions()?!1:!0},E[w.name]={plugin:w.jsUrl||w.cssUrl?!0:!1,iframeHTML5Js:x,iframeHTML5Css:w.cssUrl?w.cssUrl:null,alignRight:w.alignRight},a.extend(o,m),a.extend(o,C),a.extend(o,E),a.extend(o,v),a.extend(o,d),a.extend(o,c),a.extend(o,u)}a.extend(o,s),(Z||Q)&&a.extend(o,l);var _=h();if(a.extend(o,_),T){var S=t.video.getFlavorsBitrateDescending(),L=S.map(function(e){return{src:e.url,type:"video/"+e.format}});o.mediaProxy={entry:{thumbnailUrl:t.video.thumb},sources:L}}var O={targetId:t.id+"_playerElement",wid:"_"+p(),uiconf_id:g(),flashvars:o,cache_st:1382978527,readyCallback:b};T||(O.entry_id=f().data_id),e.kWidget.embed(O)}function b(e){W=a("#"+e).get(0),k()}function k(){t.messageBus.addMessageListener("scrub",E),t.messageBus.addMessageListener("replay",x),t.messageBus.addMessageListener("pause",w),t.messageBus.addMessageListener("play",C),W.addJsListener("adStart",L),W.addJsListener("adErrorEvent",O),W.addJsListener("adEnd",M),W.addJsListener("onAdPlay",S),W.addJsListener("changeMedia",I),W.addJsListener("closeFullScreen",B),W.addJsListener("mediaReady",U),W.addJsListener("doPlay",R),W.addJsListener("doPause",F),W.addJsListener("doStop",N),W.addJsListener("openFullScreen",D),W.addJsListener("playerPlayEnd",V),W.addJsListener("playerSeekEnd",K),W.addJsListener("playerSeekStart",H),W.addJsListener("playerUpdatePlayhead",j),W.addJsListener("volumeChanged",J),W.addJsListener("shareVideo",T),W.addJsListener("videoHome",A),Y=!0}function P(){Y&&(t.messageBus.removeMessageListener("scrub",E),t.messageBus.removeMessageListener("replay",x),t.messageBus.removeMessageListener("pause",w),t.messageBus.removeMessageListener("play",C),W.removeJsListener("adStart",L),W.removeJsListener("adErrorEvent",O),W.removeJsListener("adEnd",M),W.removeJsListener("onAdPlay",S),W.removeJsListener("changeMedia",I),W.removeJsListener("closeFullScreen",B),W.removeJsListener("mediaReady",U),W.removeJsListener("doPlay",R),W.removeJsListener("doPause",F),W.removeJsListener("doStop",N),W.removeJsListener("openFullScreen",D),W.removeJsListener("playerPlayEnd",V),W.removeJsListener("playerSeekEnd",K),W.removeJsListener("playerSeekStart",H),W.removeJsListener("playerUpdatePlayhead",j),W.removeJsListener("volumeChanged",J),W.removeJsListener("shareVideo",T),W.removeJsListener("videoHome",A))}function w(){q&&W?W.sendNotification("doStop"):W&&W.sendNotification("doPause")}function C(){W&&W.sendNotification("doPlay")}function E(e){W.sendNotification(t.info.getPosition()+parseInt(e.body,10))}function T(){if(t.video){t.controls.exitFullscreen();var e=t.video.href||t.video.share.href,a=t.video.thumb||t.video.share.thumb,r=t.video.title||t.video.share.title,i=t.video.embedUrl||t.video.share.embedURL;n.AgeGate.triggerSocialAgeGate({href:e||"",thumb:a||"",title:r||"",source:e||"",isSocial:!0,embedURL:i||""})}else t.video=t.config.video||{}}function A(){e.window.location.href="https://video.disney.com"}function x(){ee?t.loadVideo():(W.sendNotification("replayMH"),W.sendNotification("doPlay"))}function _(){return Math.round(t.info.getPosition()/t.info.getDuration()*100)}function S(e,t,n,r,i){if(Q){var s=W.getElementsByTagName("iframe")[0];i>o?(a(s).contents().find(".ad-notice-label").show(),W.setKDPAttribute("controlBarContainer","visible",!0),W.setKDPAttribute("titleLabel","visible",!0)):(a(s).contents().find(".ad-notice-label").hide(),W.setKDPAttribute("controlBarContainer","visible",!1),W.setKDPAttribute("titleLabel","visible",!1))}}function L(){t.messageBus.sendMessage("adStart"),q=!0}function O(){t.messageBus.sendMessage("adOpportunityEnd"),q=!1,Q&&(W.setKDPAttribute("controlBarContainer","visible",!0),W.setKDPAttribute("titleLabel","visible",!0))}function M(){q&&t.messageBus.sendMessage("adEnd"),t.messageBus.sendMessage("adOpportunityEnd"),q=!1,Q&&(W.setKDPAttribute("controlBarContainer","visible",!0),W.setKDPAttribute("titleLabel","visible",!0))}function B(){t.messageBus.sendMessage("exitedFullscreen")}function D(){t.messageBus.sendMessage("enteredFullscreen")}function I(){var e=t.video&&t.video.ads?t.video.ads.dfp:null;e&&t.video.ads.enabled&&t.messageBus.sendMessage("adOpportunityStart"),t.messageBus.sendMessage("loadURI")}function U(){t.messageBus.sendMessage("mediaReady")}function R(){z=!1,t.messageBus.sendMessage("played")}function j(){t.messageBus.sendMessage("progress")}function N(){t.messageBus.sendMessage("doStop")}function F(){_(t)>=100||z||t.messageBus.sendMessage("paused")}function V(){z=!0,t.messageBus.sendMessage("playComplete")}function K(){t.messageBus.sendMessage("seekEnd")}function H(){t.messageBus.sendMessage("seekStart")}function J(){t.messageBus.sendMessage("volumeChange")}function $(){t.controls=te}var W,Y=!1,z=!1,q=!1,G=!1,Q=!1;t.config.geo.enabled=!1,t.geo=a.extend(t.geo,t.config.geo),t.config.tracking.enabled=!0,t.tracking=a.extend(t.tracking,t.config.tracking);var X=new RegExp("[?&]hlsjs(=([^&#]*)|&|#|$)"),Z=t.config.useHls?t.config.useHls:X.exec(e.location.search),ee=e.navigator.userAgent.toLowerCase().indexOf("firefox")>-1;t.embed=function(){t.writeEmbed(),m()},t.writeEmbed=function(){var e=a("#"+t.id);e.html('<div id="'+t.id+'_playerElement" class="player-container"></div>')},t.dependency=function(e){Q=y();var n=a.Deferred(),r=a.Deferred();a.when(n,r).done(e),s(n.resolve),t.ads.enabled&&!G&&Q?l(r.resolve):r.resolve()},t.cleanupListeners=function(){P(),e.kWidget&&e.kWidget.destroy(t.id+"_playerElement"),$()},t.loadVideo=function(){if(q){var e=W.getElementsByTagName("iframe")[0];a(e).contents().find(".mwPlayerContainer").each(function(){a(this).removeClass("adplay-state")}),q=!1}if(Q){W.setKDPAttribute("titleLabel","text",t.video.getTitle());var n=t.video&&t.video.ads&&t.video.ads.dfp&&t.video.ads.dfp.adTagUrl&&t.video.ads.enabled?t.video.ads.dfp.adTagUrl:"";W.setKDPAttribute("doubleClick","adTagUrl",n);var r=t.video.hasCaptions()?!1:!0;W.setKDPAttribute("videoplayer-skin-logo-plugin","alignRight",r),t.video.share||(t.video.share={id:t.video.getCoreId(),href:t.video.url,thumb:t.video.thumbnail_image_fog,title:t.video.title,source:t.video.url,embedURL:t.video.embedUrl}),W.setKDPAttribute("mediaProxy.entry","thumbnailUrl",t.video.getPoster())}W.sendNotification("changeMedia",{entryId:f().data_id})};var te=t.controls;t.controls=a.extend({},t.controls,{getVolume:function(){}