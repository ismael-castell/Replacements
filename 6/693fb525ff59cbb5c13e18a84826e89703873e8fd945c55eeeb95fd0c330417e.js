(function() {window.PARSELY = window.PARSELY || {}; window.PARSELY.version = "2.0.0"; window.PARSELY.majorVersion = 2; window.PARSELY.hotfixName = ""; window.PARSELY.flavor = "conversions-engagedtime-slots-spa"; window.PARSELY.__template_track_ips = true; window.PARSELY.__template_heartbeat_should_honor_autotrack = undefined; window.PARSELY.__template_limit_et_sample_len = true; window.PARSELY.__template_apikey = "decrypt.co"; window.PARSELY.__template_is_first_party = true; window.PARSELY.__template_pixelhost = "fpa-events.decrypt.co"; window.PARSELY.__template_customizations = {"customer":"decrypt.co","conversions":[{"type":"Subscription","selector":"form.create_account.mt-12.w-auto.flex.flex-col.items-center.relative","event":"submit","label":"sign_up","poll":true},{"type":"Lead Capture","selector":"button.sc-n7fghg-0.jurZCi.sc-1nxw3v8-0.bHOApM.w-full.rounded-md.mt-4","event":"click","label":"sign_up","poll":true},{"type":"Newsletter Signup","selector":"article.p-5.bg-neutral-50.border-y.border-neutral-200 form.flex.flex-col","event":"submit","label":"newsletter_article_bottom","poll":true},{"type":"Newsletter Signup","selector":"button.sc-n7fghg-0.hvqakF.sc-9whfkl-1.edBEbj","event":"click","label":"newsletter_article_landing_page","poll":true},{"type":"Newsletter Signup","selector":"article.pt-8.pb-10.px-5 form.flex.flex-col","event":"submit","label":"newsletter_article_inline","poll":true},{"type":"Link Click","selector":"div.text-neutral-700 div.SocialMediaShareButton","event":"click","label":"social_share_top","poll":true},{"type":"Link Click","selector":"div.text-neutral-700 a[href*='https://share.flipboard.com/bookmarklet/popout']","event":"click","label":"social_share_top","poll":true},{"type":"Newsletter Signup","selector":"form.w-full","event":"submit","label":"newsletter_homepage_unit","poll":true},{"type":"Link Click","selector":"div.border-decryptGriline.border-b button:nth-of-type(4)","event":"click","label":"side_nav_button_podcast","poll":true},{"type":"Link Click","selector":"div.border-decryptGriline.border-b button:nth-of-type(1)","event":"click","label":"side_nav_button_app","poll":true},{"type":"Link Click","selector":"div.border-decryptGriline.border-b button:nth-of-type(3)","event":"click","label":"side_nav_button_discord","poll":true},{"type":"Link Click","selector":"svg.svg-inline--fa.fa-bookmark.fa-sm.text-neutral-700.cursor-pointer","event":"click","label":"bookmark_article_preview","poll":true},{"type":"Newsletter Signup","selector":"div#headlessui-tabs-panel-3 form","event":"submit","label":"newsletter_user_preferences","poll":true,"allowedUrls":["/user-preferences"]},{"type":"Link Click","selector":"button.course_start_modal_btn","event":"click","label":"course_start_modal_btn","poll":true},{"type":"Link Click","selector":"a.quiz_start_btn","event":"click","label":"quiz_start_btn","poll":true},{"type":"Link Click","selector":"a.claim_course_badge_btn","event":"click","label":"claim_course_badge_btn","poll":true}]}; })();

/*! parsely-js-api - v2.0.0 - 2022-05-31
 * http://www.parsely.com/
 * 2022 Parsely, Inc. */

function _typeof(e){"@babel/helpers - typeof";return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}window.PARSELY=window.PARSELY||{},function(){}(),function(){}(),"object"!==("undefined"==typeof JSON?"undefined":_typeof(JSON))&&(JSON={}),function(){}(),function(){}(),function(){}("undefined"!=typeof window?window:this,function(){}),"undefined"==typeof window.PARSELY&&(window.PARSELY={}),function(e,t){window.PARSELY._lifecycle=t()}(0,function(){}),function(){}(),function(){}(this.PARSELY),function(){}(this.PARSELY),function(){}(),function(){}(),function(){}(),function(){}(),function(){}(this.PARSELY),function(){}(),function(){var e=this.PARSELY;e.spa=e.spa||{};var t=0,n=e.util.getWindow();if(n.history.pushState&&n.addEventListener){var i={"pushState":"parselyPushState","replaceState":"parselyReplaceState"},o=function(e,o){var r=function(){var t;(t=new Event(i[e])).arguments=arguments,n.dispatchEvent(t)};return function(){t++,o.apply(this,arguments),0==--t&&r.apply(this,arguments)}},r=function(e){var t=document.createElement("a");return t.href=e,t.href},a=function(t){var i=e.lastRequest?e.lastRequest.url:"";if(!e.spa.hasOwnProperty("autotrack")||!1!==e.spa.autotrack)if("popstate"===t.type)e.beacon.trackPageView({"url":n.location.href,"urlref":i});else if(3===t.arguments.length){var o=r(t.arguments[2]);e.beacon.trackPageView({"url":o,"urlref":i})}},s={"pushState":o("pushState",n.history.pushState),"replaceState":o("replaceState",n.history.replaceState)},u=function(e){Object.defineProperty(n.history,e,{"get":function(){return s[e]},"set":function(t){return s[e]=o(e,t),s[e]}})};u("pushState"),n.addEventListener("parselyPushState",a),n.addEventListener("popstate",a),e.spa.autotrackReplaceState&&(u("replaceState"),n.addEventListener("parselyReplaceState",a))}}(),function(){}(),function(){}(),function(){}(),function(){}(),function(){}