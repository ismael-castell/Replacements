!function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1517)}({0:function(e,t){var n=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},1:function(e,t){var n=e.exports={version:"2.5.5"};"number"==typeof __e&&(__e=n)},10:function(e,t,n){var o=n(6);e.exports=function(e){if(!o(e))throw TypeError(e+" is not an object!");return e}},100:function(e,t,n){e.exports={default:n(102),__esModule:!0}},101:function(e,t,n){var o=n(27),i=n(13);n(94)("keys",function(){return function(e){return i(o(e))}})},102:function(e,t,n){n(101),e.exports=n(1).Object.keys},104:function(e,t,n){},105:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n(104);t.default=function(e,t){var n=0,o=$(e).children(".showBox"),i=function(e){if(o){e==o.length&&(e=0,n=0),o.hide().eq(e).fadeIn(1e3);var t=o.eq(e).prev().find(".showBox_img").find("img"),i=o.eq(e).next().find(".showBox_img").find("img");t.addClass("lazypreload"),i.addClass("lazypreload")}},a=setInterval(function(){i(++n)},t);$("#showPost .post-button-prev").on("click",function(){n--,clearTimeout(a),-1==n&&(n=o.length-1),i(n)}),$("#showPost .post-button-next").on("click",function(){n++,clearTimeout(a),n==o.length&&(n=0),i(n)}),$(e).on("mouseenter",function(){clearTimeout(a)}).on("mouseleave",function(){clearTimeout(a),a=setInterval(function(){i(++n)},t)})}},107:function(e,t,n){},108:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n(107);t.default=function(e,t){var n=0,o=$(e).children(".gonglue_cont"),i=$(e).prev().find("span").eq(0),a=function(e){if(o){e==o.length&&(e=0,n=0);var t=e+1,a=o.eq(e).prev().find(".gonglue_img_wrap").find("img"),r=o.eq(e).next().find(".gonglue_img_wrap").find("img");if(o.hide().eq(e).fadeIn(800),i.html(t),a.addClass("lazypreload"),r.addClass("lazypreload"),"cate"==o.eq(e).parent().data("type")){var s=$(".gonglue_more").attr("href").split("=")[0],c=o.eq(e).data("id");$(".gonglue_more").attr("href",s+"="+c)}}},r=setInterval(function(){a(++n)},t);$(".box_gonglue .post-button-prev").on("click",function(){n--,clearTimeout(r),-1==n&&(n=o.length-1),a(n)}),$(".box_gonglue .post-button-next").on("click",function(){n++,clearTimeout(r),n==o.length&&(n=0),a(n)}),$(".box_gonglue").on("mouseenter",function(){clearTimeout(r)}).on("mouseleave",function(){clearTimeout(r),r=setInterval(function(){a(++n)},t)})}},11:function(e,t,n){var o=n(0),i=n(1),a=n(28),r=n(7),s=n(4),c=function(e,t,n){var l,u,d,f=e&c.F,m=e&c.G,p=e&c.S,h=e&c.P,v=e&c.B,g=e&c.W,w=m?i:i[t]||(i[t]={}),_=w.prototype,y=m?o:p?o[t]:(o[t]||{}).prototype;for(l in m&&(n=t),n)(u=!f&&y&&void 0!==y[l])&&s(w,l)||(d=u?y[l]:n[l],w[l]=m&&"function"!=typeof y[l]?n[l]:v&&u?a(d,o):g&&y[l]==d?function(e){var t=function(t,n,o){if(this instanceof e){switch(arguments.length){case 0:return new e;case 1:return new e(t);case 2:return new e(t,n)}return new e(t,n,o)}return e.apply(this,arguments)};return t.prototype=e.prototype,t}(d):h&&"function"==typeof d?a(Function.call,d):d,h&&((w.virtual||(w.virtual={}))[l]=d,e&c.R&&_&&!_[l]&&r(_,l,d)))};c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,e.exports=c},110:function(e,t,n){},111:function(e,t,n){"use strict";n(110);var o={init:function(e,t){var n=$(".left_float_icon"),o=$('.new_left_back_top[data-role="gotop"]'),i=$('.left_float_icon [data-role="comment"]'),a=t||".mcomment.dm_comment_wrapper",r=$(window),s=$('[data-role="articleInfo"]:first');if(s.find(".img_wrap").length?s=s.find(".img_wrap"):s.find(".collection-content").length&&(s=s.find(".collection-content")),s.length>0){var c=s.offset();n.css("top",c.top),o.css("top",c.top-40),setTimeout(function(){n.show()},300)}var l=function(){r.scrollTop()>e?o.addClass("show"):o.removeClass("show")},u=function(e){$("html,body").stop(!0,!1).animate({scrollTop:e},500)};$.dmscroll(function(){l()}),o.on("click",function(){u(0)}),i.on("click",function(){var e=0;$(a).is(":visible")?(e=$(a).offset().top,u(e-10)):(e=$('[data-target="show-comment"]').offset().top,u(e-10))}),l()},updateCommentNum:function(e){var t=$('.left_float_icon [data-role="comment"]').find('[data-role="comnum"]');"number"==typeof e&&e>0&&(t.text(e),t.show())}};window.widget=window.widget||{},window.widget.infoLeftfloater=o},113:function(e,t,n){},115:function(e,t,n){},116:function(e,t,n){"use strict";n(115),n(113)},118:function(e,t,n){},119:function(e,t,n){"use strict";n(118),window.widget=window.widget||{},window.widget.rankAction=function(){$(".click_rank .b_list a").on("click",function(e){return $(this).closest("div.b_list").click(),!1}),$(".click_rank .b_list a").one("mouseover",function(){var e=$(this).closest("div.b_list").attr("onclick").match(/javascript:window\.open\('(.+)'\)/)[1];$(this).attr("href",e)})}},12:function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},120:function(e,t,n){"use strict";window.index=window.index||{},index.tongji=function(e,t,n){$(e).on("click",function(){window.ga4&&ga4("send",{hitType:"event",eventCategory:t,eventAction:n,eventLabel:" ",eventValue:1})})}},121:function(e,t,n){"use strict";window.index=window.index||{},index.emojify=function(e){$(e).not(".emojified").emojify({fontSize:14}).addClass("emojified")}},123:function(e,t,n){},125:function(e,t,n){},126:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n(125),n(123),n(121),n(120),n(119),n(116),n(111);var o=a(n(108)),i=a(n(105));function a(e){return e&&e.__esModule?e:{default:e}}$(function(){(0,o.default)(".gonglue_cont_wrap",8e3),index.tongji(".gonglue_cont a","pc_view-homecn","nav_view_guide"),(0,i.default)("#showPost",8e3),index.tongji(".showBox_main a","pc_view-homecn","nav_view_post")}),t.default=window.index},127:function(e,t,n){e.exports={default:n(129),__esModule:!0}},128:function(e,t,n){var o=n(11);o(o.S+o.F*!n(3),"Object",{defineProperty:n(5).f})},129:function(e,t,n){n(128);var o=n(1).Object;e.exports=function(e,t,n){return o.defineProperty(e,t,n)}},13:function(e,t,n){var o=n(33),i=n(21);e.exports=Object.keys||function(e){return o(e,i)}},130:function(e,t,n){var o=n(96),i=n(2)("iterator"),a=n(17);e.exports=n(1).getIteratorMethod=function(e){if(null!=e)return e[i]||e["@@iterator"]||a[o(e)]}},133:function(e,t,n){var o,i,a,r=n(28),s=n(157),c=n(48),l=n(26),u=n(0),d=u.process,f=u.setImmediate,m=u.clearImmediate,p=u.MessageChannel,h=u.Dispatch,v=0,g={},w=function(){var e=+this;if(g.hasOwnProperty(e)){var t=g[e];delete g[e],t()}},_=function(e){w.call(e.data)};f&&m||(f=function(e){for(var t=[],n=1;arguments.length>n;)t.push(arguments[n++]);return g[++v]=function(){s("function"==typeof e?e:Function(e),t)},o(v),v},m=function(e){delete g[e]},"process"==n(18)(d)?o=function(e){d.nextTick(r(w,e,1))}:h&&h.now?o=function(e){h.now(r(w,e,1))}:p?(a=(i=new p).port2,i.port1.onmessage=_,o=r(a.postMessage,a,1)):u.addEventListener&&"function"==typeof postMessage&&!u.importScripts?(o=function(e){u.postMessage(e+"","*")},u.addEventListener("message",_,!1)):o="onreadystatechange"in l("script")?function(e){c.appendChild(l("script")).onreadystatechange=function(){c.removeChild(this),w.call(e)}}:function(e){setTimeout(r(w,e,1),0)}),e.exports={set:f,clear:m}},135:function(e,t,n){var o=n(10),i=n(6),a=n(95);e.exports=function(e,t){if(o(e),i(t)&&t.constructor===e)return t;var n=a.f(e);return(0,n.resolve)(t),n.promise}},136:function(e,t){e.exports=function(e){try{return{e:!1,v:e()}}catch(t){return{e:!0,v:t}}}},137:function(e,t,n){var o=n(10),i=n(30),a=n(2)("species");e.exports=function(e,t){var n,r=o(e).constructor;return void 0===r||null==(n=o(r)[a])?t:i(n)}},14:function(e,t){var n=0,o=Math.random();e.exports=function(e){return"Symbol(".concat(void 0===e?"":e,")_",(++n+o).toString(36))}},140:function(e,t,n){var o=n(2)("iterator"),i=!1;try{var a=[7][o]();a.return=function(){i=!0},Array.from(a,function(){throw 2})}catch(r){}e.exports=function(e,t){if(!t&&!i)return!1;var n=!1;try{var a=[7],s=a[o]();s.next=function(){return{done:n=!0}},a[o]=function(){return s},e(a)}catch(r){}return n}},141:function(e,t,n){var o=n(17),i=n(2)("iterator"),a=Array.prototype;e.exports=function(e){return void 0!==e&&(o.Array===e||a[i]===e)}},142:function(e,t,n){var o=n(10);e.exports=function(e,t,n,i){try{return i?t(o(n)[0],n[1]):t(n)}catch(r){var a=e.return;throw void 0!==a&&o(a.call(e)),r}}},146:function(e,t,n){e.exports={default:n(159),__esModule:!0}},147:function(e,t,n){e.exports={default:n(149),__esModule:!0}},148:function(e,t,n){"use strict";t.__esModule=!0;var o,i=n(66),a=(o=i)&&o.__esModule?o:{default:o};t.default=a.default||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}},149:function(e,t,n){var o=n(1),i=o.JSON||(o.JSON={stringify:JSON.stringify});e.exports=function(e){return i.stringify.apply(i,arguments)}},15:function(e,t){var n=Math.ceil,o=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(e>0?o:n)(e)}},150:function(e,t,n){var o=n(28),i=n(142),a=n(141),r=n(10),s=n(36),c=n(130),l={},u={};(t=e.exports=function(e,t,n,d,f){var m,p,h,v,g=f?function(){return e}:c(e),w=o(n,d,t?2:1),_=0;if("function"!=typeof g)throw TypeError(e+" is not iterable!");if(a(g)){for(m=s(e.length);m>_;_++)if((v=t?w(r(p=e[_])[0],p[1]):w(e[_]))===l||v===u)return v}else for(h=g.call(e);!(p=h.next()).done;)if((v=i(h,w,p.value,t))===l||v===u)return v}).BREAK=l,t.RETURN=u},1508:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,i=n(146),a=(o=i)&&o.__esModule?o:{default:o};var r={ads:{},_promise:null,fetch:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,o=window.geolocation,i={lat:o.lat,lon:o.lon,category:t,lang:window.dmLang,_:Date.now()};return this._promise=new a.default(function(t){$.ajax({type:"POST",url:e,data:i,dataType:"json",success:function(e){var o=e.data.html;for(var i in o){var a=+i+n;r.ads[a]={html:o[i],added:!1}}t()}})})},insert:function(e,t){return this._promise?this._promise.then(function(){var n=[],o=r.ads;for(var i in o){var a=o[i],s=i-20*(t-1);if(!a.added&&s>=20*(e-t)){var c=a.html,l=(c.match(/data-id="([^"]+)"/)||[])[1];if($(".mlist[data-id="+l+"]").length>0){a.added=!0;continue}var u=$(".mlist_box>.mlist:not(.focus-point)").eq(s-1);u.length&&(1!==u.data("ad-deal")&&(u.before(c),n.push(l)),a.added=!0)}}return n}):a.default.resolve([])}};t.default=r},1509:function(e,t,n){"use strict";n(558);var o=document.querySelector(".classify_desc>a");if(o){var i=o.parentNode,a=i.getAttribute("text"),r=o.previousElementSibling;r.shortText=r.innerText,r.displayAll=!1,o.addEventListener("click",function(){r.displayAll?(r.displayAll=!1,r.innerText=r.shortText,i.style.maxHeight="48px",o.innerHTML=o.getAttribute("show")+'<em class="dm-icon dm-icon-zhankaixiangqing"></em>'):(r.displayAll=!0,r.innerText=a,i.style.maxHeight="none",i.style.display="block",o.innerHTML=o.getAttribute("close"))})}},151:function(e,t,n){var o=n(7);e.exports=function(e,t,n){for(var i in t)n&&e[i]?e[i]=t[i]:o(e,i,t[i]);return e}},1511:function(e,t,n){},1512:function(e,t,n){"use strict";n(1511),window.geolocation=window.geolocation||{},window.index=window.index||{},index.getLocation=function(){}},1514:function(e,t,n){},1515:function(e,t,n){"use strict";n(1514),window.index=window.index||{},index.getNumberNew=function(e,t){var n=$.cookie("lastRefreshTime"),o=$(".mlist_new_tips"),i=o.find(".mlist_new_tips_num");o.off("click").on("click",function(){o.hide()});var a,r,s=2e4;function c(){n>0&&$.post("/www/home/number-of-new",{time:n},function(e){if(clearTimeout(a),e){var n="number"==typeof e.data?e.data:e.data.num,c=e.topAdSlotUpdate||e.data.topAdSlotUpdate;if(1==e.status){var l=$(".prompt_num");if(n){n=n<100?n:"99+",a=setTimeout(function(){l.text(n),l.show(),i.text(n),o.show().removeClass("fade")},s);var u=window.index.bubbleTopDealMax;if(0===u)return;if(n>=100&&clearInterval(r),(new Date).getTime()-1e3*t>window.index.bubbleClearTime||c)$.cookie("bubbleTopDealNum",0,{expires:-1,path:"/",secure:!0});else{var d=n<u?n:u;$.cookie("bubbleTopDealNum",d,{path:"/",secure:!0})}}else l.text(""),l.hide(),i.text(0),o.hide()}}},"json")}r=setInterval(c,3e4),1!==e&&setTimeout(c,5e3)}},1516:function(e,t,n){"use strict";var o=s(n(554)),i=s(n(148));n(569),n(1515),n(1512),n(421),n(568),n(1509);var a=s(n(551)),r=s(n(1508));function s(e){return e&&e.__esModule?e:{default:e}}function c(){var e=$("[data-qr-code-id]");e.each(function(t){var n=$(this);n.data("loaded")||(n.qrcode({text:location.origin+"/dmlink?id="+e.data("qr-code-id")+"&type=apponly",foreground:"#DC143C",width:97,height:97,correctLevel:0}),n.data("loaded",1))})}n(99),n(126),n(236),n(565),n(562),n(560),n(420),n(556),c(),window.index=window.index||{},window.index.loadMoreV2=function(e,t,n){var s=t.adUrl,l=t.loadUrl,u=t.pageNum,d=void 0===u?1:u,f=t.pageTotal,m=t.category,p=t.keyword,h=t.storeUrlName,v=t.recipient;window.index.bubbleTopDealNum=+$.cookie("bubbleTopDealNum")||0,$.cookie("bubbleTopDealNum",0,{expires:-1,path:"/",secure:!0});var g=d,w=function(){s&&r.default.fetch(s,m,window.index.bubbleTopDealNum).then(function(){return r.default.insert(d,g)}).then(function(e){e.forEach(function(e){a.default.adjustItemById(e)})}),w=function(){}},_=function(e,t){var n=window.location.search.match(/[?&]sort=(.+?)($|&)/);n=n?n[1]:"time";var o=$(".mlist_box>.mlist").last().attr("t"),a=$(".mlist_box>.mlist").last().attr("ft"),r=window.location.search.replace(/[?&]pageNum=.+?(&|$)/,function(e,t){return""+t}),s=window.location.search.match(/[?&]searchType=(.+?)($|&)/);s=s?s[1]:"relevance";var c=$(".hideExpire:checkbox"),l=c.length&&c.prop("checked")?"y":"n";return"storecn"===e&&(l="y"===l?"n":"y"),(0,i.default)({showType:"list",lang:window.topbar.isCHT?"bg":window.dmLang,sort:n,endTime:o,firstPublishedTime:a,queryString:r,searchType:s,expired:l},t)}(e,{pageNum:d,category:m,keyword:p,storeUrlName:h,recipient:v}),y=["homecn","homeen","categorycn","categoryen","hotcn","hoten","newcn","newen"];y.indexOf(e)>=0&&function(e){var t=0,n=$("#newFooter");$("#todayHot").addClass("only-report").show();var o=$.makeLazy(function(){var e=$(window).scrollTop();n.hasClass("footer_closed")||(e>450&&e-t>0&&(n.addClass("fixed_footer"),n.parent().addClass("fixed_footer_parent"),i($("#todayHot")),$("#apBox").length&&$("#apBox").hasClass("ap-normal")&&$("#apBox").css("transform","translate3d(-800px,0,0)")),t=e)},100,10),i=function(e,t){if(e&&e.length){var o=function(){e.addClass("fix-status1").removeClass("fix-status2")};n.find(".footer_wrap").hasClass("show_more")?e.addClass("fix-status2").removeClass("fix-status1"):t?setTimeout(function(){o()},t):o()}};$.dmscroll(o),$(".web_info").on("click",function(){n.hasClass("fixed_footer")&&(n.find(".footer_wrap").toggleClass("show_more"),$(".footer_height_normal").toggleClass("footer_height_more"),i($("#todayHot"),0))}),$(".close_btn").on("click",function(){n.hasClass("fixed_footer")&&(n.removeClass("fixed_footer").addClass("footer_closed"),n.parent().removeClass("fixed_footer_parent"),n.find(".footer_wrap").removeClass("show_more"),n.find(".bottom_info_wrap").show(),$("#todayHot").removeClass("fix-status1 fix-status2"),$("#apBox").length&&$("#apBox").css("transform","translate3d(0,0,0)"))}),$(window).on("deal-expand",function(){n.addClass("footer_closed_by_deal")}).on("deal-collapse",function(){n.removeClass("footer_closed_by_deal")})}(),new a.default(e,{reqUrl:l,reqData:_,beforeSend:function(t){var n=t.reqData.pageNum;if(y.indexOf(e)<0&&g!=n&&(n%4==0||f<=n))return!1;n%4==1&&w(),t.reqData.endTime=$(".mlist_box>.mlist").last().attr("t"),t.reqData.firstPublishedTime=$(".mlist_box>.mlist").last().attr("ft")},successCallback:function(t,n){var o=t.reqData.pageNum;y.indexOf(e)<0&&o%4==0&&1===n.status&&n.data&&n.data.pager?$(".j-deal-list-pager").html(n.data.pager):null===n.data&&t.setState({reachEnd:!0})},afterSuccess:function(t){var n=t.reqData.pageNum;y.indexOf(e)<0&&n%4==0&&t.setState({reachEnd:!0}),r.default.insert(n,g),function(){for(var e=$(".pic_ad:last").nextAll(".mlist"),t=e.length,n=0;10*(n+1)<t;)e.eq(10*(n+1)).before('<div class="pic_ad no"></div>'),t+=1,n+=1}(),function(){for(var e=$(".pic_ad.no"),t=e.length,n=Math.min(t,window.index.ads.length),o=0;o<n;o++)e.eq(o).html('<textarea class="ad-area hide" data-base64="1">'+window.index.ads.shift()+"</textarea>").removeClass("no");$(".pic_ad.no").remove(),window.common.showTextareaAd()}(),(0,o.default)(function(){$("body").trigger("impression")}),c()}},n)}},1517:function(e,t,n){e.exports=n(1516)},152:function(e,t){e.exports=function(e,t,n,o){if(!(e instanceof t)||void 0!==o&&o in e)throw TypeError(n+": incorrect invocation!");return e}},153:function(e,t,n){"use strict";var o=n(0),i=n(1),a=n(5),r=n(3),s=n(2)("species");e.exports=function(e){var t="function"==typeof i[e]?i[e]:o[e];r&&t&&!t[s]&&a.f(t,s,{configurable:!0,get:function(){return this}})}},154:function(e,t,n){"use strict";var o=n(11),i=n(95),a=n(136);o(o.S,"Promise",{try:function(e){var t=i.f(this),n=a(e);return(n.e?t.reject:t.resolve)(n.v),t.promise}})},155:function(e,t,n){"use strict";var o=n(11),i=n(1),a=n(0),r=n(137),s=n(135);o(o.P+o.R,"Promise",{finally:function(e){var t=r(this,i.Promise||a.Promise),n="function"==typeof e;return this.then(n?function(n){return s(t,e()).then(function(){return n})}:e,n?function(n){return s(t,e()).then(function(){throw n})}:e)}})},156:function(e,t,n){var o=n(0),i=n(133).set,a=o.MutationObserver||o.WebKitMutationObserver,r=o.process,s=o.Promise,c="process"==n(18)(r);e.exports=function(){var e,t,n,l=function(){var o,i;for(c&&(o=r.domain)&&o.exit();e;){i=e.fn,e=e.next;try{i()}catch(a){throw e?n():t=void 0,a}}t=void 0,o&&o.enter()};if(c)n=function(){r.nextTick(l)};else if(!a||o.navigator&&o.navigator.standalone)if(s&&s.resolve){var u=s.resolve();n=function(){u.then(l)}}else n=function(){i.call(o,l)};else{var d=!0,f=document.createTextNode("");new a(l).observe(f,{characterData:!0}),n=function(){f.data=d=!d}}return function(o){var i={fn:o,next:void 0};t&&(t.next=i),e||(e=i,n()),t=i}}},157:function(e,t){e.exports=function(e,t,n){var o=void 0===n;switch(t.length){case 0:return o?e():e.call(n);case 1:return o?e(t[0]):e.call(n,t[0]);case 2:return o?e(t[0],t[1]):e.call(n,t[0],t[1]);case 3:return o?e(t[0],t[1],t[2]):e.call(n,t[0],t[1],t[2]);case 4:return o?e(t[0],t[1],t[2],t[3]):e.call(n,t[0],t[1],t[2],t[3])}return e.apply(n,t)}},158:function(e,t,n){"use strict";var o,i,a,r,s=n(25),c=n(0),l=n(28),u=n(96),d=n(11),f=n(6),m=n(30),p=n(152),h=n(150),v=n(137),g=n(133).set,w=n(156)(),_=n(95),y=n(136),b=n(135),x=c.TypeError,$=c.process,k=c.Promise,C="process"==u($),T=function(){},I=i=_.f,S=!!function(){try{var e=k.resolve(1),t=(e.constructor={})[n(2)("species")]=function(e){e(T,T)};return(C||"function"==typeof PromiseRejectionEvent)&&e.then(T)instanceof t}catch(o){}}(),O=function(e){var t;return!(!f(e)||"function"!=typeof(t=e.then))&&t},j=function(e,t){if(!e._n){e._n=!0;var n=e._c;w(function(){for(var o=e._v,i=1==e._s,a=0,r=function(t){var n,a,r,s=i?t.ok:t.fail,c=t.resolve,l=t.reject,u=t.domain;try{s?(i||(2==e._h&&M(e),e._h=1),!0===s?n=o:(u&&u.enter(),n=s(o),u&&(u.exit(),r=!0)),n===t.promise?l(x("Promise-chain cycle")):(a=O(n))?a.call(n,c,l):c(n)):l(o)}catch(d){u&&!r&&u.exit(),l(d)}};n.length>a;)r(n[a++]);e._c=[],e._n=!1,t&&!e._h&&E(e)})}},E=function(e){g.call(c,function(){var t,n,o,i=e._v,a=P(e);if(a&&(t=y(function(){C?$.emit("unhandledRejection",i,e):(n=c.onunhandledrejection)?n({promise:e,reason:i}):(o=c.console)&&o.error&&o.error("Unhandled promise rejection",i)}),e._h=C||P(e)?2:1),e._a=void 0,a&&t.e)throw t.v})},P=function(e){return 1!==e._h&&0===(e._a||e._c).length},M=function(e){g.call(c,function(){var t;C?$.emit("rejectionHandled",e):(t=c.onrejectionhandled)&&t({promise:e,reason:e._v})})},L=function(e){var t=this;t._d||(t._d=!0,(t=t._w||t)._v=e,t._s=2,t._a||(t._a=t._c.slice()),j(t,!0))},A=function(e){var t,n=this;if(!n._d){n._d=!0,n=n._w||n;try{if(n===e)throw x("Promise can't be resolved itself");(t=O(e))?w(function(){var o={_w:n,_d:!1};try{t.call(e,l(A,o,1),l(L,o,1))}catch(i){L.call(o,i)}}):(n._v=e,n._s=1,j(n,!1))}catch(o){L.call({_w:n,_d:!1},o)}}};S||(k=function(e){p(this,k,"Promise","_h"),m(e),o.call(this);try{e(l(A,this,1),l(L,this,1))}catch(t){L.call(this,t)}},(o=function(e){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1}).prototype=n(151)(k.prototype,{then:function(e,t){var n=I(v(this,k));return n.ok="function"!=typeof e||e,n.fail="function"==typeof t&&t,n.domain=C?$.domain:void 0,this._c.push(n),this._a&&this._a.push(n),this._s&&j(this,!1),n.promise},catch:function(e){return this.then(void 0,e)}}),a=function(){var e=new o;this.promise=e,this.resolve=l(A,e,1),this.reject=l(L,e,1)},_.f=I=function(e){return e===k||e===r?new a(e):i(e)}),d(d.G+d.W+d.F*!S,{Promise:k}),n(24)(k,"Promise"),n(153)("Promise"),r=n(1).Promise,d(d.S+d.F*!S,"Promise",{reject:function(e){var t=I(this);return(0,t.reject)(e),t.promise}}),d(d.S+d.F*(s||!S),"Promise",{resolve:function(e){return b(s&&this===r?k:this,e)}}),d(d.S+d.F*!(S&&n(140)(function(e){k.all(e).catch(T)})),"Promise",{all:function(e){var t=this,n=I(t),o=n.resolve,i=n.reject,a=y(function(){var n=[],a=0,r=1;h(e,!1,function(e){var s=a++,c=!1;n.push(void 0),r++,t.resolve(e).then(function(e){c||(c=!0,n[s]=e,--r||o(n))},i)}),--r||o(n)});return a.e&&i(a.v),n.promise},race:function(e){var t=this,n=I(t),o=n.reject,i=y(function(){h(e,!1,function(e){t.resolve(e).then(n.resolve,o)})});return i.e&&o(i.v),n.promise}})},159:function(e,t,n){n(53),n(45),n(47),n(158),n(155),n(154),e.exports=n(1).Promise},16:function(e,t){e.exports=function(e){if(null==e)throw TypeError("Can't call method on  "+e);return e}},161:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=r(n(148)),i=r(n(79)),a=r(n(78));function r(e){return e&&e.__esModule?e:{default:e}}n(164);var s=function(){function e(){var t=this;return(0,i.default)(this,e),this._getTemplate=function(e){return'\n    <div class="dm-alert-wrapper '+(e.className||"")+'">\n      <div class="dm-alert">\n        <div class="dm-alert-body">\n          '+(e.title?"<h3>"+e.title+"</h3>":"")+"\n          <p>"+e.content+'</p>\n        </div>\n        <div class="dm-alert-btn">\n          '+(e.cancelText?'<span class="dm-alert-btn-cancel">'+e.cancelText+"</span>":"")+'\n          <span class="dm-alert-btn-ok">'+e.okText+"</span>\n        </div>\n      </div>\n    </div>\n  "},this.$ele=null,function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=(0,o.default)({},e.defaultProps,n);return t.$ele=$(t._getTemplate(i)),t._bindEvent(i),t._show(i),t._hide}}return(0,a.default)(e,[{key:"_bindEvent",value:function(e){var t=this;this.$ele.on("click",".dm-alert-btn-cancel",function(){t._hide(),e.onCancel&&e.onCancel()}).on("click",".dm-alert-btn-ok",function(){t._hide(),e.onOk&&e.onOk()})}},{key:"_show",value:function(){var e=this;$(document.body).append(this.$ele),this.$ele.show(),setTimeout(function(){return e.$ele.addClass("show")},50)}},{key:"_hide",value:function(){var e=this;this.$ele.removeClass("show"),setTimeout(function(){e.$ele.remove()},140)}}]),e}();s.defaultProps={content:"",cancelText:"取消",okText:"确定"},t.default=new s},164:function(e,t,n){},165:function(e,t,n){},166:function(e,t,n){},167:function(e,t,n){"use strict";var o=a(n(172)),i=a(n(171));function a(e){return e&&e.__esModule?e:{default:e}}!function(e){window.initPhotoSwipeOptions=function(t,n){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"0_0",i=t,a=n?i.find(n):i.children(),r=[];return a.each(function(){var t=e(this),n=(o||t.data("size")).split("_"),i={src:t.data("src")||t.attr("src"),w:parseInt(n[0]),h:parseInt(n[1]),el:this};r.push(i)}),r},window.initPhotoSwipeOpener=function(t,n,a){var r=new o.default(t,i.default,n,a),s=e("#pswp-download");return r.listen("gettingData",function(t,n){if(void 0===n.html&&void 0===n.onLoading&&(n.w<1||n.h<1)){n.onLoading=!0;var o=new Image;e(o).one("load",function(){n.w=this.width,n.h=this.height,r.invalidateCurrItems(),r.updateSize(!0),s.attr("href",n.src).show()}),o.src=n.src,s.hide()}}),r},window.initPhotoSwipeFromDOM=function(t,n){var a=t,r=n?a.find(n):a.children(),s=e("#pswp")[0],c=[];r.each(function(){var t=e(this),n=t.data("size").split("_"),o={src:t.data("src"),w:parseInt(n[0]),h:parseInt(n[1]),el:this};c.push(o)});r.each(function(t){e(this).data("pswp-uid",t+1).on("click",function(t){return function(t,n,a){var r,l;if((l={galleryUID:n.getAttribute("data-pswp-uid"),getThumbBoundsFn:function(e){var t=c[e].el.children[0],n=window.pageYOffset||document.documentElement.scrollTop,o=t.getBoundingClientRect();return{x:o.left,y:o.top+n,w:o.width}},addCaptionHTMLFn:function(e,t,n){return e.title?(t.children[0].innerHTML=e.title+"<br/><small>Photo: "+e.author+"</small>",!0):(t.children[0].innerText="",!1)}}).index=parseInt(t,10),!isNaN(l.index)){var u=e("#pswp-download");l.mainClass="pswp--minimal--dark",l.barsSize={top:0,bottom:0},l.captionEl=!1,l.fullscreenEl=!1,l.shareEl=!0,l.bgOpacity=.85,l.tapToClose=!0,l.tapToToggleControls=!1,l.shareButtons=[{id:"download",label:"en"==window.dmLang?"Download image":"下载图片",url:"{{raw_image_url}}",download:!0}],a&&(l.showAnimationDuration=0),r=new o.default(s,i.default,c,l);var d,f,m=!1,p=!0;r.listen("beforeResize",function(){var e=window.devicePixelRatio?window.devicePixelRatio:1;e=Math.min(e,2.5),(d=r.viewportSize.x*e)>=1200||!r.likelyTouchDevice&&d>800||screen.width>1200?m||(m=!0,f=!0):m&&(m=!1,f=!0),f&&!p&&r.invalidateCurrItems(),p&&(p=!1),f=!1}),r.listen("gettingData",function(t,n){if(void 0===n.html&&void 0===n.onLoading&&(n.w<1||n.h<1)){n.onLoading=!0;var o=new Image;e(o).one("load",function(){n.w=this.width,n.h=this.height,r.invalidateCurrItems(),r.updateSize(!0),u.attr("href",n.src).show()}),o.src=n.src,u.hide()}}),r.init()}}(e(this).index(),a[0]),!1})})}}(jQuery)},168:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=d(n(147)),i=d(n(146)),a=d(n(148)),r=d(n(79)),s=d(n(78));t.getTranslate=function(e){return p[e][window.dmLang]};var c=d(n(161)),l=d(n(179)),u=n(46);function d(e){return e&&e.__esModule?e:{default:e}}n(167),n(166),n(165),n(181);var f="/comment/delete-comment",m=u.url.getQuery("comment_id"),p={placeholder:{cn:"发表评论...",en:"Post new comment..."},replyPlaceholder:{cn:"回复",en:"Reply To "},submit:{cn:"评论",en:"submit"},uploading:{cn:"正在上传",en:"Uploading"},uploadSuccess:{cn:"上传成功",en:"Success"},uploadImgsMore:{cn:"最多添加四张图片,添加失败",en:"Maximum limit exceeded, up to four!"},ok:{cn:"确定",en:"ok"},cancel:{cn:"取消",en:"Cancel"},emptyWarn:{cn:"回复不能为空!",en:"Your reply cannot be empty"},maxLenth:{cn:"评论内容不能多于1000个字符！",en:"Maximum limit exceeded, up to 1000!"},postSuccess:{cn:"发布成功",en:"Success"},commentFail:{cn:"评论失败",en:"Comment failed"},zan:{cn:"赞",en:"Like"},deleteConfirm:{cn:"确定删除该评论？",en:"Are you sure to delete this comment?"},loading:{cn:"正在加载",en:"loading"},loadMore:{cn:"展开更多最新评论",en:"load more newest comments"},forbidComment:{cn:"评论暂时关闭",en:"Comments are temporarily closed"},see:{cn:"我知道了",en:"I see"}},h=[1160022,1160042,1160001];try{var v=localStorage&&localStorage.getItem("dm_comment_open");v&&(v=JSON.parse(v),localStorage&&localStorage.removeItem("dm_comment_open"))}catch(w){console.log(w)}var g=function(){function e(t){(0,r.default)(this,e);this.configs=(0,a.default)({platform:"pc",type:"deal",lang:window.interfacedata.lan,userId:this._getUserId(),list:!1},t,{page:1})}return(0,s.default)(e,[{key:"init",value:function(e){var t=this;this._renderCommentMain(),("pc"==t.configs.platform||"guide"!=t.configs.type&&"post"!=t.configs.type)&&this._renderReplyComment(),this._handleTextarea(),"pc"==this.configs.platform&&this._onPicListener(),this._onShowReplyBox(),this._onReplyListener(),this._likeComment(),this._deleteComment(),"pc"==this.configs.platform&&this._initImagePreviewPc(),"wap"==this.configs.platform&&this.configs.$main.on("click",".dm-cmt-imgs .li-img",function(e){var t=$(this);return initPhotoSwipeFromDOM(t.parent()),t.trigger("click"),!1}),this._onLoadingMore(),this._onRelationComment(),this._onSort(),window.addEventListener("message",function(e){"LOGIN_SUCCESS"===e.data&&(t.configs.userId=t._getUserId())}),this._getComments(function(n){if(1==n.status&&(t.configs.$main.find(".dm-cmt-group-loading").remove(),t.configs.$main.append(n.data.html),t.configs.commentNum=n.data.commentNum,t.configs.hotCommentNum=n.data.hotCommentNum,t.configs.forbidComment=t.configs.forbidComment||n.data.forbidComment,t.configs.hotCommentMoonShow=t.configs.hotCommentMoonShow||n.data.hotCommentMoonShow,t.configs.hasLotteryComment=n.data.hasLotteryComment,"wap"==t.configs.platform&&(t.configs.commentNum?$(".dm-cmt-header .count").text(t.configs.commentNum):$(".dm-cmt-header").remove(),"post"==t.configs.type||"guide"==t.configs.type))){var o=t.configs.$main.find(".dm-cmt-more"),i=t.configs.$main.find(".dm-cmt-all"),a='<a class="dm-cmt-more'+(t.configs.$main.find(".dm-cmt-group.all-cmt").length?"":" none")+'" data-ga-action="'+t.configs.gaAction+'" data-target="universal-link" data-scheme="'+t.configs.scheme+'" data-term="'+t.configs.term+'" data-adjust='+t.configs.adjust+">"+(t.configs.$main.find(".dm-cmt-group.all-cmt").length?"打开App 查看更多评论 回复评论":"暂无评论，<span>打开app</span>参与讨论")+"</a>";o.remove(),i.remove(),t.configs.$main.append(a),(0,l.default)(t.configs.$main.find('[data-target="universal-link"]')[0])}if("function"==typeof e&&e(t.configs),v&&"pc"==t.configs.platform&&!t.configs.list)if("relate"==v.type){var r=t.configs.$main.find('.dm-cmt-item[data-id="'+v.id+'"]');r.find('[data-target="dm_comment_more_relate"]').trigger("click"),setTimeout(function(){var e=r.closest(".dm-cmt-item").offset().top;e=e||t.configs.$main.offset().top,$("html,body").animate({scrollTop:e-30},500)},100)}else"main"==v.type&&setTimeout(function(){var e=t.configs.$main.offset().top;$("html,body").animate({scrollTop:e-30},500)},100);m&&setTimeout(function(){var e=t.configs.$main.find('.dm-cmt-item[data-id="'+m+'"]').closest(".dm-cmt-item").offset().top;e=e||t.configs.$main.offset().top,"post"==t.configs.type?$(".dm-post-modal").animate({scrollTop:e-30},500):$("html,body").animate({scrollTop:e-30},500)},500)}),$(document).on("click",".dm-cmt-tip",function(){(0,c.default)({className:"pc"==t.configs.platform?" dm-cmt-alert":"dm-cmt-alert-wap",title:"评论官方打赏",content:'\n          <span style="margin-bottom:'+("pc"==t.configs.platform?24:20)+'px">Dealmoon⿎励积极、真实、优质的评论内容，为⿎励优质内容特推出【官⽅打赏】功能。符合以下条件的评论将会获得官⽅随机的⾦币、积分奖励。</span>\n          <span>1.内容真实，具有参考度，为⼤家带来宝贵经验，如产品使⽤⼼得。</span>\n          <span>2.内容有信息有价值，如折扣使⽤、问题解答、有效报错等。</span>\n          <span>3.内容或⻛趣幽默，或带有积极正能量，能引起共鸣。</span>\n        ',okText:"<div>我知道了</div>",cancelText:void 0})})}},{key:"_renderCommentMain",value:function(){if(this.configs.$container?this.configs.$container.append('<div id="'+this._generateUUID()+'" class="dm-cmt'+("wap"==this.configs.platform?" wap":"")+'"></div>'):console.error("Comment:请配置$container"),this.configs.$main=$("#"+this.configs.commentUUID),"wap"==this.configs.platform){this.configs.$main.append('<div class="dm-cmt-header">评论&nbsp;<span class="count">0</span><i class="dm-icon dm-icon-chevron-up"></i></div>')}}},{key:"_renderReplyComment",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,o='<div class="dm-cmt-reply '+(e&&"wap"==this.configs.platform?"inner":"")+'">                  <div class="dm-cmt-reply-textarea">                    <textarea name="content" placeholder="'+(n?""+this._getTranslate("replyPlaceholder")+n:this._getTranslate("placeholder"))+'" class="mc_key"></textarea>                  </div>                  <div class="dm-cmt-reply-pub">                    <a href="javascript:void(0)" data-comment-id="'+t+'" data-action="reply_comment" class="dm-cmt-reply-submit event_statics_comments '+("wap"==this.configs.platform?"disabled":"")+'" statrk="comment-'+(this.configs.resId||"")+"-"+this.configs.type+'--">'+this._getTranslate("submit")+"</a>                    "+("wap"==this.configs.platform?'<a href="javascript:void(0)" class="dm-cmt-reply-cancel">'+this._getTranslate("cancel")+"</a>":'<div class="dm-cmt-reply-add-pic" data-action="show_upload_pic"><i class="icon dm-icon dm-icon-insert_pic_normal"></i></div><div class="dm-cmt-reply-pics"><div class="close" data-action="remove_upload_pic"><i class="icon dm-icon dm-icon-close"></i></div><div class="add block" data-action="upload_pic"></div></div>')+"                  </div>                  "+(e?"":'<div class="dm-cmt-group-loading">loading...</div>')+"                </div>";if(e)return o;this.configs.$main.append(o)}},{key:"_generateUUID",value:function(){return this.configs.commentUUID="comment_"+this.configs.resId+"_"+"xxxxxx".replace(/x/g,function(){}