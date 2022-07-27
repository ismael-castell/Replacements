jQuery(document).ready(function ($) {

  var macsCookies = new function () {

    var self = this

    self.config = {
      'consentLifeDays': 90,
      'cookieGroups': [
        'necessary',
        'functional',
        'statistics',
        'targeting'
      ]
    }

    // Hide overlay
    $('body').click( function() {
      $('.cookieConsent__overlay.overlay-on').hide();
    } );

    // Local variable cache for user preferences
    self.allowedCookies = [];

    /**
     * Kicks it off
     */
    self.init = function () {

      /**
       * If popup is initialized, we setup GTM scripts only after user's action.
       * Otherwise we can do it based on current cookie preferences.
       */
      if ( ! self.popupInit() ){
        self.setupGTMscripts()
      }

      // PREFERENCES PAGE
      self.bindPreferencesActions()
      self.checkAllowedBoxes()

      // Block embeds
      self.blockEmbeds() // Block  embeds function

      self.trackUserConsent() // track user consent
    }

    /**
     * Cookie helpers
     */
    self.getCookie = function (name) {
      var re = new RegExp(name + '=([^;]+)')
      var value = re.exec(document.cookie)
      return (value != null) ? unescape(value[1]) : null
    }

    self.setCookie = function (name, value, days) {
      var t = new Date()
      t.setTime(t.getTime() + 24 * days * 60 * 60 * 1e3)
      var expires = 'expires=' + t.toUTCString()
      document.cookie = name + '=' + value + ';' + expires + ';path=/'
    }

    self.deleteCookie = function(name) {
      document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    }

    self.cookieExists = function(name) {
      return self.getCookie(name) !== null
    }

    /**
     * Clears local variable cache
     */
    self.resetAllowedCookies = function() {
      self.allowedCookies = []
    }

    /**
     * Rebuilds local variable cache for user preferences based on saved cookies
     */
    self.getAllowedCookies = function() {

      self.resetAllowedCookies()

      $( self.config.cookieGroups ).each( function(i,val) {
        var cookieName = 'macs_cookies_' + val + '_' + MACS_COOKIES.ID

        if ( self.cookieExists(cookieName) ) {
          self.allowedCookies.push( val )
        }

      } )
    }

    /**
     * Recreates GTM scripts based on plain text templates
     */
    self.setupGTMscripts = function() {
      self.getAllowedCookies()

      window.dataLayer = window.dataLayer || [];

      $( self.allowedCookies ).map(function(val){
        var gtmTemplate = $( '.macs_cookies_gtm_' + self.allowedCookies[val] )

        gtmTemplate.each( function(){
          if ( $(this).length && $(this).text() != '' ) {
            self.insertScriptElement( $(this).text() )
          }
        } )
      })
    }

    /**
     * Insets script element into DOM
     */
    self.insertScriptElement = function( scriptText ) {
      $el = $( '<script>', { 'text' : scriptText } )
      $el.appendTo($('body'))
    }

    /**
     * Refreshes general consent data by setting it up to current date and current policy version
     */
    self.refreshConsentData = function() {
      self.deleteCookie('macs_cookies_consent_' + MACS_COOKIES.ID);
      self.deleteCookie('macs_cookies_policy_v_' + MACS_COOKIES.ID);
      self.setCookie( 'macs_cookies_consent_' + MACS_COOKIES.ID, 1, self.config.consentLifeDays );
      self.setCookie( 'macs_cookies_policy_v_' + MACS_COOKIES.ID, MACS_COOKIES.coookiePolicyVersion, self.config.consentLifeDays );
    }

    // USER PREFERENCES METHODS

    /**
     * Binds actions to save button
     */
    self.bindPreferencesActions = function(){
      $('#macs_cookies_save_preferences').click(function(e){
        /**
         * @todo The closing of the cookie popup need to be extracted
         * into a callable function which can be called from other
         * parts of the code
         */
        e.preventDefault()
        self.resetUserSettings();
        self.saveUserSettings();
        $('#popup-cookieConsent').hide();
        $('.cookieConsent__overlay.overlay-on').hide();
        $('.macs_cookies_saved').fadeIn(200, function(){
          setTimeout( function(){ $('.macs_cookies_saved').fadeOut(200) }, 2000 )
        })
      })
    }

    /**
     * Checks checkboxes on settings page based on existing cookies
     */
    self.checkAllowedBoxes = function() {
      self.getAllowedCookies();
      $( self.allowedCookies ).map(function(val){
        $('#accept_cookie_' + self.allowedCookies[val]).prop('checked', true)
      })
    }

    /**
     * Resets all user preferences (not the concent itself)
     */
    self.resetUserSettings = function() {
      $( self.config.cookieGroups ).each( function(i,val) {
        var cookieName = 'macs_cookies_' + val + '_' + MACS_COOKIES.ID
        self.deleteCookie(cookieName);
      })
    }

    /**
     * Saves user settings as cookies
     */
    self.saveUserSettings = function () {
      $('input[name="accept_cookies[]"]:checked').each(function(){
          self.setCookie( 'macs_cookies_' + $(this).val() + '_' + MACS_COOKIES.ID, 1, self.config.consentLifeDays )
      })

      // always set necessary when settings are saved (since the checkbox is required)
      self.setCookie( 'macs_cookies_necessary_' + MACS_COOKIES.ID, 1, self.config.consentLifeDays )

      // Set general consent cookies
      self.refreshConsentData()

      // Hide the popup
      $('#popup-cookieConsent').hide();
      $('.cookieConsent__overlay.overlay-on').hide();
      // Do the GTM switcheroo from plaintext to script.
      self.setupGTMscripts()
    }

    // POPUP

    /**
     * Initializes popup in following scenarios
     * - User did not accept cookies yet
     * - Cookie Policy version is changed since the user accepted policy
     *
     * NOTE: will also reset existing user settings in the cases described above.
     */
    self.popupInit = function() {
      if (
        self.cookieExists( 'macs_cookies_consent_' + MACS_COOKIES.ID ) &&
        self.cookieExists( 'macs_cookies_policy_v_' + MACS_COOKIES.ID ) &&
        self.getCookie( 'macs_cookies_policy_v_' + MACS_COOKIES.ID ) === MACS_COOKIES.coookiePolicyVersion )
      {
        return false;
      }

      // Reset user preferences, they're outdated anyway
      self.resetUserSettings()

      // Show popup
      $('#popup-cookieConsent').show();
      $('.cookieConsent__overlay.overlay-on').show();
      self.bindPopupActions()

      return true;
    }

    /**
     * Binds actions to user clicks
     */
    self.bindPopupActions = function() {
      $('.macs_cookies_accept_necessary').click(function(e) {
        e.preventDefault()

        // 1. Reset previous consent cookies if exist
        self.resetUserSettings()
        // 2. Set only necessary consent cookie
        self.setCookie( 'macs_cookies_necessary_' + MACS_COOKIES.ID, 1, self.config.consentLifeDays )
        // 3. Refresh consent date and cookie policy version to renew the consent lifespan
        self.refreshConsentData()
        // 4. Hide the popup
        $('#popup-cookieConsent').hide();
        $('.cookieConsent__overlay.overlay-on').hide()
        // 5. Do the GTM switcheroo from plaintext to script.
        self.setupGTMscripts()
      })

      $('.macs_cookies_accept_all').click(function(e) {
        e.preventDefault()

        // 1. Reset previous consent cookies if exist
        self.resetUserSettings()
        // 2. Set all consent cookies
        $( self.config.cookieGroups ).each( function(i,val) {
          var cookieName = 'macs_cookies_' + val + '_' + MACS_COOKIES.ID
          self.setCookie( cookieName, 1, self.config.consentLifeDays )
        })
        // 3. Refresh consent date and cookie policy version to renew the consent lifespan
        self.refreshConsentData()
        // 4. Hide the popup
        $('#popup-cookieConsent').hide();
        $('.cookieConsent__overlay.overlay-on').hide();
        // 5. Do the GTM switcheroo from plaintext to script.
        self.setupGTMscripts()
        // 6. Reflect data on settings page if it's currently viewed
        self.checkAllowedBoxes()
        // 7. Print embeds
        self.printEmbeds() // Print embeds function
      })

      // Hide overlay if cookie settings page
      var isCookieSettingsPage = document.getElementsByClassName('cookie_section--settings');
      if (isCookieSettingsPage.length > 0) {
        $('.cookieConsent__overlay.overlay-on').hide();
      }
    }


    // If cookies non exist, hide the iframe embeds
    self.blockEmbeds = function() {

      // If cookies non exist, hide the embeds
      if ( self.cookieExists( 'macs_cookies_statistics_' + MACS_COOKIES.ID ) ) {
        return true;
      }

      var frames = document.getElementsByTagName('iframe');

      if ( ! frames.length ) {
        return
      }

      //  check if are iframes
      $(frames).each(function() {
        $(this).addClass('iframe_withoutcookies')
      });

      $('.iframe_withoutcookies').each(function() {
       var src = $(this).attr('src');

       // Soundcloud iframe
      var exp = new RegExp(/(snd\.sc|soundcloud\.com)/);

        if ( exp.test(src) == true ){

          var sndbUrl = src;
          var sndbH = $(this).attr('height');
          var sndbW = $(this).attr('width');

          var fieldIdInput = $('<div />', {
            'class': 'embed_placeholder_soundcloud embed_placeholder',
            'data-url': sndbUrl,
            'data-height': sndbH,
            'data-width':sndbW,
          })

          fieldIdInput.html(MACS_COOKIES.embedCookiesSnd)
          $(this).replaceWith(fieldIdInput)

        }
      });

      $('.iframe_withoutcookies').each(function() {
        var src = $(this).attr('src');

        // Youtube iframe
        var exp = new RegExp(/(youtu\.be|youtube\.com)/);

        if( exp.test(src) ) {

          $(this).addClass('youtube')

            var ytbUrl = src;
            var ytbH = $(this).height();
            var ytbW = $(this).width();

            var fieldIdInput = $('<div />', {
              'class': 'embed_placeholder_youtube embed_placeholder',
              'data-url': ytbUrl,
              'data-height': ytbH,
              'data-width':ytbW,
            })

            fieldIdInput.html(MACS_COOKIES.embedCookiesYtb)
            $(this).replaceWith(fieldIdInput)

        }
      });

    }

    self.printEmbeds = function() {

      $('.embed_placeholder_youtube').each(function() {

        var url = $(this).attr('data-url');
            iframeH = $(this).attr('data-height');
            iframeW = $(this).attr('data-width');

        var fieldIdInput = $('<iframe />', {
          'class': 'embed_new_youtube',
          'src': url,
          'height': iframeH,
          'width':iframeW,
        })

        $(this).replaceWith(fieldIdInput)

      });

      $('.embed_placeholder_soundcloud').each(function() {

        var url = $(this).attr('data-url');
            iframeH = $(this).attr('data-height');
            iframeW = $(this).attr('data-width');

        var fieldIdInput = $('<iframe />', {
          'class': 'embed_new_soundcloud',
          'src': url,
          'height': iframeH,
          'width': iframeW,
        })

        $(this).replaceWith(fieldIdInput)

      });

    }

    self.trackUserConsent = function() {

      $('#macs_cookies_accept_all').click(function(e) {
        e.preventDefault()
        // add GTM to track user consent- user accepted all cookies
        if (typeof dataLayer !== 'undefined') {
          dataLayer.push({ 'event' : 'user_consent', 'consent_type': 'accept_all' })
        }
      })

      $('#macs_cookies_save_preferences').click(function(e) {
        e.preventDefault()

        $('.cookieConsent__checkbox_container').each(function() {
          if($(this).find('input').is(':checked')){
            var input = $(this).find('input').attr('id');

            if( input === 'accept_cookie_statistics' ){
              // add GTM to track user consent- user accepted statistics cookies
              if (typeof dataLayer !== 'undefined') {
                dataLayer.push({ 'event' : 'user_consent', 'consent_type': 'accept_statistics' })
              }
            }
          }
        })
      })

    }

  }
    macsCookies.init()
})
;
var runtime=function(a){"use strict";var u,t=Object.prototype,h=t.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},n=r.iterator||"@@iterator",e=r.asyncIterator||"@@asyncIterator",o=r.toStringTag||"@@toStringTag";function i(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{i({},"")}catch(t){i=function(t,r,e){return t[r]=e}}function c(t,r,e,n){var o,i,a,c,r=r&&r.prototype instanceof d?r:d,r=Object.create(r.prototype),n=new j(n||[]);return r._invoke=(o=t,i=e,a=n,c=l,function(t,r){if(c===p)throw new Error("Generator is already running");if(c===y){if("throw"===t)throw r;return k()}for(a.method=t,a.arg=r;;){var e=a.delegate;if(e){var n=function t(r,e){var n=r.iterator[e.method];if(n===u){if(e.delegate=null,"throw"===e.method){if(r.iterator.return&&(e.method="return",e.arg=u,t(r,e),"throw"===e.method))return v;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var n=f(n,r.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,v;n=n.arg;if(!n)return e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v;{if(!n.done)return n;e[r.resultName]=n.value,e.next=r.nextLoc,"return"!==e.method&&(e.method="next",e.arg=u)}e.delegate=null;return v}(e,a);if(n){if(n===v)continue;return n}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if(c===l)throw c=y,a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);c=p;n=f(o,i,a);if("normal"===n.type){if(c=a.done?y:s,n.arg!==v)return{value:n.arg,done:a.done}}else"throw"===n.type&&(c=y,a.method="throw",a.arg=n.arg)}}),r}function f(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}a.wrap=c;var l="suspendedStart",s="suspendedYield",p="executing",y="completed",v={};function d(){}function g(){}function m(){}var w={};w[n]=function(){return this};r=Object.getPrototypeOf,r=r&&r(r(O([])));r&&r!==t&&h.call(r,n)&&(w=r);var L=m.prototype=d.prototype=Object.create(w);function x(t){["next","throw","return"].forEach(function(r){i(t,r,function(t){return this._invoke(r,t)})})}function b(a,c){var r;this._invoke=function(e,n){function t(){return new c(function(t,r){!function r(t,e,n,o){t=f(a[t],a,e);if("throw"!==t.type){var i=t.arg;return(e=i.value)&&"object"==typeof e&&h.call(e,"__await")?c.resolve(e.__await).then(function(t){r("next",t,n,o)},function(t){r("throw",t,n,o)}):c.resolve(e).then(function(t){i.value=t,n(i)},function(t){return r("throw",t,n,o)})}o(t.arg)}(e,n,t,r)})}return r=r?r.then(t,t):t()}}function E(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function _(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function O(r){if(r){var t=r[n];if(t)return t.call(r);if("function"==typeof r.next)return r;if(!isNaN(r.length)){var e=-1,t=function t(){for(;++e<r.length;)if(h.call(r,e))return t.value=r[e],t.done=!1,t;return t.value=u,t.done=!0,t};return t.next=t}}return{next:k}}function k(){return{value:u,done:!0}}return((g.prototype=L.constructor=m).constructor=g).displayName=i(m,o,"GeneratorFunction"),a.isGeneratorFunction=function(t){t="function"==typeof t&&t.constructor;return!!t&&(t===g||"GeneratorFunction"===(t.displayName||t.name))},a.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,i(t,o,"GeneratorFunction")),t.prototype=Object.create(L),t},a.awrap=function(t){return{__await:t}},x(b.prototype),b.prototype[e]=function(){return this},a.AsyncIterator=b,a.async=function(t,r,e,n,o){void 0===o&&(o=Promise);var i=new b(c(t,r,e,n),o);return a.isGeneratorFunction(r)?i:i.next().then(function(t){return t.done?t.value:i.next()})},x(L),i(L,o,"Generator"),L[n]=function(){return this},L.toString=function(){return"[object Generator]"},a.keys=function(e){var t,n=[];for(t in e)n.push(t);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},a.values=O,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=u,this.done=!1,this.delegate=null,this.method="next",this.arg=u,this.tryEntries.forEach(_),!t)for(var r in this)"t"===r.charAt(0)&&h.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=u)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function t(t,r){return i.type="throw",i.arg=e,n.next=t,r&&(n.method="next",n.arg=u),!!r}for(var r=this.tryEntries.length-1;0<=r;--r){var o=this.tryEntries[r],i=o.completion;if("root"===o.tryLoc)return t("end");if(o.tryLoc<=this.prev){var a=h.call(o,"catchLoc"),c=h.call(o,"finallyLoc");if(a&&c){if(this.prev<o.catchLoc)return t(o.catchLoc,!0);if(this.prev<o.finallyLoc)return t(o.finallyLoc)}else if(a){if(this.prev<o.catchLoc)return t(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return t(o.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;0<=e;--e){var n=this.tryEntries[e];if(n.tryLoc<=this.prev&&h.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}var i=(o=o&&("break"===t||"continue"===t)&&o.tryLoc<=r&&r<=o.finallyLoc?null:o)?o.completion:{};return i.type=t,i.arg=r,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(i)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),v},finish:function(t){for(var r=this.tryEntries.length-1;0<=r;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),_(e),v}},catch:function(t){for(var r=this.tryEntries.length-1;0<=r;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n,o=e.completion;return"throw"===o.type&&(n=o.arg,_(e)),n}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,e){return this.delegate={iterator:O(t),resultName:r,nextLoc:e},"next"===this.method&&(this.arg=u),v}},a}("object"==typeof module?module.exports:{});try{regeneratorRuntime=runtime}catch(t){Function("r","regeneratorRuntime = r")(runtime)};
/**
 * core-js 3.11.0
 * https://github.com/zloirock/core-js
 * License: http://rock.mit-license.org
 * © 2021 Denis Pushkarev (zloirock.ru)
 */
!function(S){"use strict";var r,e,o;e={},(o=function(t){if(e[t])return e[t].exports;var n=e[t]={i:t,l:!1,exports:{}};return r[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}).m=r=[function(t,n,r){r(1),r(69),r(71),t.exports=r(75)},function(t,n,r){var e=r(2),o=r(46),i=r(48),c=r(50),u=r(19),f=r(8),a=r(54),s=function(t,n){var r=this;if(!(r instanceof s))return new s(t,n);i&&(r=i(new Error(S),o(r))),n!==S&&u(r,"message",String(n));n=[];return a(t,n.push,{that:n}),u(r,"errors",n),r};s.prototype=c(Error.prototype,{constructor:f(5,s),message:f(5,""),name:f(5,"AggregateError")}),e({global:!0},{AggregateError:s})},function(t,n,r){var a=r(3),s=r(4).f,p=r(19),l=r(22),g=r(23),v=r(33),y=r(45);t.exports=function(t,n){var r,e,o,i=t.target,c=t.global,u=t.stat,f=c?a:u?a[i]||g(i,{}):(a[i]||{}).prototype;if(f)for(r in n){if(e=n[r],o=t.noTargetGet?(o=s(f,r))&&o.value:f[r],!y(c?r:i+(u?".":"#")+r,t.forced)&&o!==S){if(typeof e==typeof o)continue;v(e,o)}(t.sham||o&&o.sham)&&p(e,"sham",!0),l(f,r,e,t)}}},function(t,n){function r(t){return t&&t.Math==Math&&t}t.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof global&&global)||function(){return this}()||Function("return this")()},function(t,n,r){var e=r(5),o=r(7),i=r(8),c=r(9),u=r(13),f=r(15),a=r(17),s=Object.getOwnPropertyDescriptor;n.f=e?s:function(t,n){if(t=c(t),n=u(n,!0),a)try{return s(t,n)}catch(t){}if(f(t,n))return i(!o.f.call(t,n),t[n])}},function(t,n,r){r=r(6);t.exports=!r(function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n,r){var e={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!e.call({1:2},1);n.f=i?function(t){t=o(this,t);return!!t&&t.enumerable}:e},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n,r){var e=r(10),o=r(12);t.exports=function(t){return e(o(t))}},function(t,n,r){var e=r(6),o=r(11),i="".split;t.exports=e(function(){return!Object("z").propertyIsEnumerable(0)})?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},function(t,n){var r={}.toString;t.exports=function(t){return r.call(t).slice(8,-1)}},function(t,n){t.exports=function(t){if(t==S)throw TypeError("Can't call method on "+t);return t}},function(t,n,r){var o=r(14);t.exports=function(t,n){if(!o(t))return t;var r,e;if(n&&"function"==typeof(r=t.toString)&&!o(e=r.call(t)))return e;if("function"==typeof(r=t.valueOf)&&!o(e=r.call(t)))return e;if(!n&&"function"==typeof(r=t.toString)&&!o(e=r.call(t)))return e;throw TypeError("Can't convert object to primitive value")}},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n,r){var e=r(16),o={}.hasOwnProperty;t.exports=function(t,n){return o.call(e(t),n)}},function(t,n,r){var e=r(12);t.exports=function(t){return Object(e(t))}},function(t,n,r){var e=r(5),o=r(6),i=r(18);t.exports=!e&&!o(function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a})},function(t,n,r){var e=r(3),r=r(14),o=e.document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,n,r){var e=r(5),o=r(20),i=r(8);t.exports=e?function(t,n,r){return o.f(t,n,i(1,r))}:function(t,n,r){return t[n]=r,t}},function(t,n,r){var e=r(5),o=r(17),i=r(21),c=r(13),u=Object.defineProperty;n.f=e?u:function(t,n,r){if(i(t),n=c(n,!0),i(r),o)try{return u(t,n,r)}catch(t){}if("get"in r||"set"in r)throw TypeError("Accessors not supported");return"value"in r&&(t[n]=r.value),t}},function(t,n,r){var e=r(14);t.exports=function(t){if(!e(t))throw TypeError(String(t)+" is not an object");return t}},function(t,n,r){var u=r(3),f=r(19),a=r(15),s=r(23),e=r(24),r=r(26),o=r.get,p=r.enforce,l=String(String).split("String");(t.exports=function(t,n,r,e){var o=!!e&&!!e.unsafe,i=!!e&&!!e.enumerable,c=!!e&&!!e.noTargetGet;"function"==typeof r&&("string"!=typeof n||a(r,"name")||f(r,"name",n),(e=p(r)).source||(e.source=l.join("string"==typeof n?n:""))),t!==u?(o?!c&&t[n]&&(i=!0):delete t[n],i?t[n]=r:f(t,n,r)):i?t[n]=r:s(n,r)})(Function.prototype,"toString",function(){return"function"==typeof this&&o(this).source||e(this)})},function(t,n,r){var e=r(3),o=r(19);t.exports=function(n,r){try{o(e,n,r)}catch(t){e[n]=r}return r}},function(t,n,r){var r=r(25),e=Function.toString;"function"!=typeof r.inspectSource&&(r.inspectSource=function(t){return e.call(t)}),t.exports=r.inspectSource},function(t,n,r){var e=r(3),o=r(23),r="__core-js_shared__",r=e[r]||o(r,{});t.exports=r},function(t,n,r){var e,o,i,c,u,f,a,s,p=r(27),l=r(3),g=r(14),v=r(19),y=r(15),h=r(25),d=r(28),r=r(32),b="Object already initialized",l=l.WeakMap;a=p?(e=h.state||(h.state=new l),o=e.get,i=e.has,c=e.set,u=function(t,n){if(i.call(e,t))throw new TypeError(b);return n.facade=t,c.call(e,t,n),n},f=function(t){return o.call(e,t)||{}},function(t){return i.call(e,t)}):(r[s=d("state")]=!0,u=function(t,n){if(y(t,s))throw new TypeError(b);return n.facade=t,v(t,s,n),n},f=function(t){return y(t,s)?t[s]:{}},function(t){return y(t,s)}),t.exports={set:u,get:f,has:a,enforce:function(t){return a(t)?f(t):u(t,{})},getterFor:function(r){return function(t){var n;if(!g(t)||(n=f(t)).type!==r)throw TypeError("Incompatible receiver, "+r+" required");return n}}}},function(t,n,r){var e=r(3),r=r(24),e=e.WeakMap;t.exports="function"==typeof e&&/native code/.test(r(e))},function(t,n,r){var e=r(29),o=r(31),i=e("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},function(t,n,r){var e=r(30),o=r(25);(t.exports=function(t,n){return o[t]||(o[t]=n!==S?n:{})})("versions",[]).push({version:"3.11.0",mode:e?"pure":"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})},function(t,n){t.exports=!1},function(t,n){var r=0,e=Math.random();t.exports=function(t){return"Symbol("+String(t===S?"":t)+")_"+(++r+e).toString(36)}},function(t,n){t.exports={}},function(t,n,r){var u=r(15),f=r(34),a=r(4),s=r(20);t.exports=function(t,n){for(var r=f(n),e=s.f,o=a.f,i=0;i<r.length;i++){var c=r[i];u(t,c)||e(t,c,o(n,c))}}},function(t,n,r){var e=r(35),o=r(37),i=r(44),c=r(21);t.exports=e("Reflect","ownKeys")||function(t){var n=o.f(c(t)),r=i.f;return r?n.concat(r(t)):n}},function(t,n,r){function e(t){return"function"==typeof t?t:S}var o=r(36),i=r(3);t.exports=function(t,n){return arguments.length<2?e(o[t])||e(i[t]):o[t]&&o[t][n]||i[t]&&i[t][n]}},function(t,n,r){r=r(3);t.exports=r},function(t,n,r){var e=r(38),o=r(43).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return e(t,o)}},function(t,n,r){var c=r(15),u=r(9),f=r(39).indexOf,a=r(32);t.exports=function(t,n){var r,e=u(t),o=0,i=[];for(r in e)!c(a,r)&&c(e,r)&&i.push(r);for(;n.length>o;)c(e,r=n[o++])&&(~f(i,r)||i.push(r));return i}},function(t,n,r){var f=r(9),a=r(40),s=r(42),r=function(u){return function(t,n,r){var e,o=f(t),i=a(o.length),c=s(r,i);if(u&&n!=n){for(;c<i;)if((e=o[c++])!=e)return!0}else for(;c<i;c++)if((u||c in o)&&o[c]===n)return u||c||0;return!u&&-1}};t.exports={includes:r(!0),indexOf:r(!1)}},function(t,n,r){var e=r(41),o=Math.min;t.exports=function(t){return 0<t?o(e(t),9007199254740991):0}},function(t,n){var r=Math.ceil,e=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(0<t?e:r)(t)}},function(t,n,r){var e=r(41),o=Math.max,i=Math.min;t.exports=function(t,n){t=e(t);return t<0?o(t+n,0):i(t,n)}},function(t,n){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(t,n){n.f=Object.getOwnPropertySymbols},function(t,n,r){var e=r(6),o=/#|\.prototype\./,r=function(){}