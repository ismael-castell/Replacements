/**
 * This script is to detect the current Drupal environment and pass back the url for the gateway
 *
 * Author: Charles Schwab
 *
 * v1.0
 *
 */

 /**
   * Function to make call to retrieve schwab_genesys settings in drupalSettings.
   *
   * Init.js must be available to classic, therefore could not be wrapped in IIFE with Drupal.
   *
   */
(function (Drupal, drupalSettings, window) {
  Drupal.schwab_genesys = {};
  Drupal.schwab_genesys = {
    config: drupalSettings.schwab_genesys
  };
})(Drupal, drupalSettings, window);
;
/**
 * This script is the global handler for the chat experience.
 *
 * Author: Charles Schwab
 *
 * v2.0.1
 *
 */

var _globalChatHandler = {
  /**
   * A function to check if proactive page in Drupal.
   *
   * @returns {boolen}
   * Returns true or false depending on presence of property in drupalSettings object.
   */
  isProactive: function () {
    return typeof drupalSettings !== 'undefined' ? drupalSettings.isProactive : false;
  },

  /**
   * A function to check if proactive page in Classic.
   *
   * @returns {boolen}
   * Returns true or false depending if global flag is set.
   */
  isLegacyProactive: function () {
    return typeof _proactiveChatLoc !== 'undefined' ? _proactiveChatLoc : false;
  },

  /**
   * Check if proactive page in Drupal.
   *
   * @returns {boolen}
   * Returns true or false depending on presence of chat cookie.
   */
  isChatConfigStored: function () {
    return this.getChatCookie() ? true : false;
  },

  /**
   * A function to return the stored chat cookie that contains the encoded object.
   *
   * @returns {object|boolen}
   * Returns stored config object if cookie exists, or returns false if not.
   */
  getChatCookie: function () {
    var matched = document.cookie.match(RegExp("chatConf=.[^\;]*"));
    if (matched) {
      var cookie = matched[0].split('=');
      return JSON.parse(decodeURIComponent(cookie[1]));
    }
    return false;
  },

  /**
   * A function to return the stored chat cookie that contains the encoded object.
   *
   * @param {Object} value object that contains config.
   *
   * @param {Number} date number to be applied to date calc.
   *
   * @returns {cookie}
   * Returns the setting of config stored in a document cookie.
   */
  setChatCookie: function (value, date) {
    var expireDate = '';
    var d = new Date;
    if (date) {
      d.setTime(d.getTime() + 24 * 60 * 60 * 1000 * date);
      expireDate = d.toGMTString();
    }
    return document.cookie = 'chatConf=' + encodeURIComponent(JSON.stringify(value)) + '; path=/; expires=' + expireDate;
  },

  /**
   * A function to delete chat cookie.
   */
  deleteChatCookie: function () {
    return this.setChatCookie('', -1);
  },

  /**
   * Object containing 2 properties:
   *
   * 1. pluginsLoaded: A boolean set depending on if plugins have been loaded. This check is to ensure that we don't call the loadPlugin function more than once.
   *
   * 2. setStamp: A function to return a current Time stamp.
   */
  refreshMeta: {
    pluginsLoaded: false,
    setStamp: function () {
      return new Date().getTime();;
    }
  },

  /**
   * Function to return the time difference in minutes of the current time the widget is being opened and when the config was set.
   *
   * Description: The reason for this is to ensure no hiccups in experience if the GUID expires. If expired and not refreshed the chat service would error.
   *
   * @param {time} future current timestamp
   * @param {past} past timestamp from when GUID was stored
   *
   * @returns {number}
   * Returns the difference in minutes between the two params.
   */
  timeDiff: function (future, past) {
    var diff = (future - past) / 1000;
    diff /= 60;
    return Math.abs(Math.round(diff));
  },

  /**
   * Function to return proper snippet depending on 2 conditions
   *
   * 1. This is a proactive page
   *
   * 2. The chat config is already stored.
   *
   * @returns {string}
   * Returns the snippet to be written to the document.
   */
  getSnippet: function () {
    var snippetOnload = "javascript:CXBus.configure({pluginsPath:'" + this.paths.snippet.onload.plugins + "'});CXBus.loadFile('" + this.paths.snippet.onload.config + "').done(function(){CXBus.loadFile('" + this.paths.snippet.onload.main + "')})";
    var snippetCoreCommand = ".done(function(){CXBus.loadPlugin('widgets-core').done(function(){_globalChatHandler.refreshMeta.pluginsLoaded = true;});});";
    if (this.isChatConfigStored() === true || (this.isProactive() === true || this.isLegacyProactive() === true)) {
      snippetOnload = snippetOnload + snippetCoreCommand;
    }
    return snippetOnload;
  },

  /**
   * Function to write custom chat snippet to document.
   */
  loadSnippet: function () {
    var j = document.createElement('script');
    j.async = true;
    j.src = _globalChatHandler.paths.snippet.src;
    j.setAttribute("onload", this.getSnippet());
    document.body.appendChild(j);
  },

  /**
   * Function to write custom styles to document.
   */
  loadStyles: function () {
    var _linkRef = document.createElement('link');
    _linkRef.setAttribute("rel", "preload");
    _linkRef.setAttribute("type", "text/css");
    _linkRef.setAttribute("as", "style");
    _linkRef.setAttribute("href", this.paths.styles.src);
    _linkRef.setAttribute("onload", "this.rel='stylesheet'");
    document.body.appendChild(_linkRef);
  },

  /**
   * Validation for Genesys chat form.
   *
   * @param {object} event
   * @param {object} form
   * @param {object} input
   * @param {object} label
   * @param {object} $
   * @param {object} CXBus
   * @param {object} Common
   * @param {string} fieldType
   *
   * @returns {bool}
   */
  formValidate: function (event, form, input, label, $, CXBus, Common, fieldType) {
    var mailFormat = this.getMailFormat();
    if (input) {
      input[0].onfocus = function () {
        input[0].classList.remove('cx-error');
      };
      if (
        input[0].value === '' ||
        (fieldType === 'email' && !input[0].value.match(mailFormat)) ||
        (fieldType === 'subject' && input[0].value.length < 3)
      ) {
        input[0].classList += " cx-error";
        input[0].setAttribute("aria-invalid", "true");
        return false;
      }
      input[0].classList.remove("cx-error");
      input[0].setAttribute("aria-invalid", "false");
      return true;
    }
  },

  /**
   * Builds required form inputs.
   *
   * @returns {object}
   *   Returns an object of Genesys form widget
   *   input field data.
   */
  buildFormInputs: function () {
    var inputObjectArray = [];
    const inputFieldTypes = ['FirstName', 'LastName', 'Email', 'Subject'];
    for (let i = 0; i < inputFieldTypes.length; i++) {
      let inputFieldTypeMachineName = inputFieldTypes[i].toLowerCase();
      let inputFieldType = inputFieldTypes[i];
      let obj = {
        id: 'cx_webchat_form_' + inputFieldTypeMachineName,
        name: inputFieldTypeMachineName,
        maxlength: "100",
        label: "@i18n:webchat.ChatForm" + inputFieldType,
        wrapper: "<tr><th>{label}</th><td class='cx-required'><span>*Required</span>{input}</td></tr>",
        required: 'required="required"',
        validateWhileTyping: true,
        validate: function (event, form, input, label, $, CXBus, Common) {
          return _globalChatHandler.formValidate(event, form, input, label, $, CXBus, Common, inputFieldTypeMachineName);
        }
      };
      inputObjectArray.push(obj);
    }
    return inputObjectArray;
  },

  /**
   * Object containing array of input fields and their attributes.
   *
   * Each input takes the following attributes and properties:
   * atts: id, name, max length, placeholder, label
   * props: wrapper - wrapping html for input, validate - function for validation
   */
  form: {
    wrapper: '<table id="genForm"></table>',
    inputs: {}
  },

  /**
   * Object containing strings of snippet paths and gateway environments.
   */
  paths: {
    snippet: {
      src: '/modules/custom/schwab_genesys/wd_js/cxbus.min.js',
      onload: {
        plugins: '/modules/custom/schwab_genesys/wd_js/plugins',
        config: '/modules/custom/schwab_genesys/wd_js/widgets.config.js',
        main: '/modules/custom/schwab_genesys/wd_js/widgets_main.js'
      }
    },
    environments: {
      devEnv: 'https://client-test1.schwab.com',
      testEnv: 'https://client-uat.schwab.com',
      pceEnv: 'https://client-pce.schwab.com',
      prodEnv: 'https://client.schwab.com',
    },
    styles: {
      src: '/modules/custom/schwab_genesys/wd_js/sch_genesys.css'
    },
  },

  /**
   * Object containing strings of messaging.
   */
  messaging: {
    overlay: '<div class="intro-message" id="introOverlay" role=”dialog” aria-label=”Schwab Chat Window” tabindex="-1"> <main> <p>Thanks for getting in touch with us.</p> <p><strong class="pre-message-title">Already a client?</strong> Please <a tabindex="0" href="https://client.schwab.com/Service/ContactUs/EmailSchwab.aspx">log in</a>. Select “Contact Us” to begin our chat.</p> <p>If you <strong class="pre-message-title">forgot your password</strong>, <a tabindex="0" href="https://client.schwab.com/Areas/Login/ForgotPassword/FYPIdentification.aspx" aria-label="Click if you forgot your password">reset it</a> or call us at 800-654-2593. For security reasons, we cannot do this via chat.</p><p><strong class="pre-message-title">Not yet a client?</strong> Tell us a little bit about yourself.</p> <p>By submitting your contact information, you consent to receive marketing or other communications from Schwab. Read more about <a tabindex="0" href="/privacy" target="_blank">privacy</a> at Schwab.</p></main> <footer><button class="cx-btn cx-btn-default i18n" tabindex="0" id="sch_chatCloseOverlay" aria-label="Continue to Schwab Chat Window">Next</button> </footer></div>',
    genericError: 'We apologize, our Chat feature is currently unavailable at this time. If you need immediate assistance, please call us at 800-654-2593. Or if you prefer to use our Chat feature, please try again later.'
  },

  /**
   * A function to return the gateway URL.
   *
   * Description: The gateway URL returns the config for chat. Depending on CMS and environment returns a lower environment gateway.
   *
   * @returns {string}
   * Returns the gateway URL string.
   *
   */
  getGatewayUrl: function () {
    var gatewayUrl = this.paths.environments.devEnv;
    if (typeof Drupal !== 'undefined' && Drupal) {
      gatewayUrl = Drupal.schwab_genesys.config.url;
    } else {
      if (window.location.href.indexOf('www-pce.schwab.com') > -1) {
        gatewayUrl = this.paths.environments.pceEnv;
      } else if (window.location.href.indexOf('www-uat.schwab.com') > -1) {
        gatewayUrl = this.paths.environments.testEnv;
      } else if (window.location.href.indexOf('www.schwab.com') > -1) {
        gatewayUrl = this.paths.environments.prodEnv;
      }
      gatewayUrl = gatewayUrl + '/Service/ContactUs/SchwabChat';
    }
    return gatewayUrl;
  },

  /**
   * Determines whether the chat link was clicked or not.
   */
  chatLinkClicked: false,

  /**
   * Error function for gateway errors
   */
  gatewayError: function () {
    if (this.chatLinkClicked) {
      alert(_globalChatHandler.messaging.genericError);
    } else if (this.isProactive() || this.isLegacyProactive()) {
      this.loadSnippet();
    }
  },

  /**
   * A function to call gateway and retrieve the config for chat
   *
   * @param {Function} callback callback function for call success.
   */
  getChatConfig: function (callback) {
    // Check if config is already stored.
    var chatConfig = this.isChatConfigStored() ? this.getChatCookie() : null;
    // If not stored, call gateway and retrieve config. Else just invoke call function.
    if (chatConfig === null) {
      var cxhr = new XMLHttpRequest();
      cxhr.open('POST', this.getGatewayUrl(), true);
      cxhr.onreadystatechange = function () {
        if (cxhr.readyState == 4 && cxhr.status == 200) {
          var res = JSON.parse(JSON.parse(cxhr.response));
          // Parse data object and pass to Genesys webchat config
          chatConfig = {
            storeConfig: true,
            timeSetStamp: _globalChatHandler.refreshMeta.setStamp(),
            ajaxTimeout: 6000,
            userData: {
              GUID: res.exodusResponse.GUID,
              browserURL: window.location.href.split('?')[0]
            },
            transport: res.exodusResponse.Transport,
            markdown: true
          };
          // Store config in cookie for nav reuse and set config to global config object
          _globalChatHandler.setChatCookie(chatConfig, '');
          _globalChatHandler.configObj = chatConfig;

          if (callback && {}.toString.call(callback) === '[object Function]') {
            callback(chatConfig);
          }
        }

      };
      cxhr.timeout = 10000;
      cxhr.ontimeout = function () {
        _globalChatHandler.gatewayError()
      }
      cxhr.onerror = function () {
        _globalChatHandler.gatewayError()
      }
      cxhr.send();
    } else {
      callback(chatConfig);
    }
  },

  /**
   * A function to call gateway and retrieve the updated GUID.
   *
   * @param {Function} callback callback function for call success.
   */
  refreshGUID: function (callback) {
    var rxhr = new XMLHttpRequest();
    rxhr.open('POST', this.getGatewayUrl(), true);
    rxhr.onreadystatechange = function () {
      if (rxhr.readyState == 4 && rxhr.status == 200) {
        var res = JSON.parse(JSON.parse(rxhr.response));
        var newGUID = res.exodusResponse.GUID;
        window._genesys.widgets.webchat.timeSetStamp = _globalChatHandler.refreshMeta.setStamp();
        if (callback && {}.toString.call(callback) === '[object Function]') {
          callback(newGUID);
        }
      }
    };
    rxhr.timeout = 10000;
    rxhr.ontimeout = function () {
      _globalChatHandler.gatewayError()
    }
    rxhr.onerror = function () {
      _globalChatHandler.gatewayError()
    }
    rxhr.send();
  },

  /**
   * A function to verify if browser is IE11.
   */
  isIE11: function () {
    var _browserType = window.navigator.userAgent.indexOf('Trident/');
    return (_browserType > 0)? true : false;
  },
  /**
   * Add and show Genesys Alert.
   */
  genesysWindowAlert: function(label){
    window._genesys.widgets.common.showAlert( document.querySelector('.cx-widget.cx-webchat'), {text: label, buttonText: 'Ok'} );
  },

  /**
   * Simple function to get mail format
   */
  getMailFormat: function(){
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  },

  /**
   * Default config object.
   */
  configObj: {
    IsOfac: false
  }
};

_globalChatHandler.form.inputs = _globalChatHandler.buildFormInputs();

/**
 * Makes gateway call for config based on chat type.
 */
if (_globalChatHandler.isProactive() || _globalChatHandler.isLegacyProactive() || _globalChatHandler.isChatConfigStored()) {
  _globalChatHandler.getChatConfig(function (config) {
    _globalChatHandler.configObj = config;
    _globalChatHandler.loadSnippet();
  });
} else {
  _globalChatHandler.loadSnippet();
}
_globalChatHandler.loadStyles();
;
(function (Drupal, $, document, window) {
  Drupal.behaviors.schwabEditorLinkBehaviors = {
    attach: function (context) {

      $(document.body, context).once('schwabEditorLinkBehaviorsHandler').each(function() {
        var stockInformationUrl = 'https://client.schwab.com/public/QuickQuote/SymbolRouting.aspx?Symbol=';

        /**
         * Opens a popup window, modified by options passed in.
         *
         * @param href - URL to load in the popup window.
         * @param options
         */
        var openPopup = function openPopup(href, options) {
          var popupOptions = {
            toolbar: 'no',
            scrollbars: 'no',
            resizable: 'yes',
            width: 500,
            height: 600
          };
      
          // Overwrite defaults.
          $.extend(popupOptions, options);
      
          if (href) {
            window.open(href, '_blank', [
              'toolbar=' + popupOptions.toolbar,
              'scrollbars=' + popupOptions.scrollbars,
              'resizable=' + popupOptions.resizable,
              'width=' + popupOptions.width,
              'height=' + popupOptions.height
            ].join(','));
          }
        };

        // Popup links.
        $('a[target="_popup"]').on('click', function(event) {
          event.preventDefault();

          var href = $(this).attr('href'),
              width = $(this).data('popup-width') || 500,
              height = $(this).data('popup-height') || 600;

          openPopup(href, { width: width, height: height });
        });

        // Stock information links.
        $('a[target="_stock"]').on('click', function(event) {
          event.preventDefault();
          event.stopImmediatePropagation();

          var stockSymbol = $(this).data('stock-symbol');

          if (stockSymbol) {
            openPopup(stockInformationUrl + stockSymbol, { width: 700 });
          }
        });        
      });
    }
  };
})(Drupal, jQuery, document, this);
;
(function ($) {
  var state = 'desktop'; // default markup state

  var accordionAnimation = function () {
    var button = $(this).find('button');
    $(this).find('.footmn-menu-child').slideToggle('fast');
    if (button.hasClass('sch-minus-large')) {
      button.removeClass('sch-minus-large').addClass('sch-plus-large');
    }
    else {
      button.removeClass('sch-plus-large').addClass('sch-minus-large');
    }
  };

  var configContent = function () {
    if ($(window).width() >= 768 && state === 'mobile') {
      $.selectorCache('.footmn-menu-main li').unbind('click', accordionAnimation);
      $.selectorCache('.footmn-menu-child').show();
    }
    else if ($(window).width() < 768 && state === 'desktop') {
      $.selectorCache('.footmn-menu-main li').bind('click', accordionAnimation);
    }
    state = ($(window).width() >= 768) ? 'desktop' : 'mobile';
  };

  var setFooterInfoLinksTarget = function () {
    $link = $('.menu--footer-information-links .sch-external-link-right a').prop('target', '_blank');
  };

  configContent();
  $(window).resize(configContent);
  
  $(document).ready(function () {
    setFooterInfoLinksTarget();
  });

}(jQuery));;
(function (window) {
  'use strict';

  if (window.schwab && window.schwab.utilities) {
    /**
     * General Browser Storage functions.
     */
    window.schwab.utilities.browserStorage = {

      /**
       * Gets a specific cookie.
       * 
       * @param {string} cookieName The name of the cookie.
       * 
       * @returns {string|null}
       * Returns requested cookie if it exists. If it
       * doesn't, function returns null.
       */
      getCookie: function (cookieName) {
        var name = cookieName + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for(var i = 0; i < ca.length; i++) {
          var c = ca[i];
          while (c.charAt(0) == ' ') {
            c = c.substring(1);
          }
          if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
          }
        }
        return null;
      },

      /**
       * Sets a cookie.
       * 
       * @param {string} cookieName The name of the cookie.
       * @param {string} cookieValue The value for the cookie.
       * @param {int} expirationDays The number of days until the cookie expires.
       * @param {string} path The path for the cookie.
       * @param {string} domain The domain for the cookie.
       * @param {string} sameSaite The SameSite value for the cookie.
       * @param {boolean} secure Determines whether the cookie should be secure.
       */
      setCookie: function setCookie(cookieName, cookieValue, expirationDays, path, domain, sameSite, secure) {
        var documentCookie = cookieName + "=" + cookieValue;
        if (expirationDays) {
          var date = new Date();
          date.setTime(date.getTime() + (expirationDays*24*60*60*1000));
          documentCookie += ";expires=" + date.toUTCString();
        }
        documentCookie += path ? ";path=" + path : '';
        documentCookie += domain ? ";domain=" + domain : '';
        documentCookie += (sameSite == 'none' || sameSite == 'lax' || sameSite == 'strict') ? ";samesite=" + sameSite : '';
        documentCookie += secure ? ";secure" : '';
        document.cookie = documentCookie;
      }
    };
  }
})(window);;
(function (window) {
  'use strict';

  if (window.schwab && window.schwab.utilities) {
    /**
     * Gets a specific query parameter from the URL.
     * 
     * @param {string} param The query parameter
     * @param {string} customUrl A custom URL string. If it isn't
     * provided, the browser's current location will be used.
     * 
     * @returns {string|null}
     * Returns the string value for the specific query
     * parameter provided if it exists. If it doesn't,
     * function returns null.
     */
    window.schwab.utilities.urlHelpers = {
  
      /**
       * Gets a specific query parameter from the URL.
       * 
       * @param {string} param The query parameter
       * @param {string} customUrl A custom URL string. If it isn't
       * provided, the browser's current location will be used.
       * 
       * @returns {string|null}
       * Returns the string value for the specific query
       * parameter provided if it exists. If it doesn't,
       * function returns null.
       */
      getUrlQueryParam: function (param, customUrl) {
        param = param.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        var paramTest = new RegExp('[\\?&]' + param + '=([^&#]*)');
        var url = customUrl ? customUrl : location.search;
        var results = paramTest.exec(url);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
      }
    };
  }
})(window);;
(function (window) {
  'use strict';

  if (window.schwab && window.schwab.utilities) {
    /** Depencies */
    var BrowserStorage = window.schwab.utilities.browserStorage;
    var UrlHelpers = window.schwab.utilities.urlHelpers;
  
    /**
     * Object to handle Referral functionality.
     */
    window.schwab.referrals = {
  
      /** Custom Promo code property. */
      promoCode: null,
  
      /** Custom Mac code property. */
      macCode: null,
  
      /** The name of the cookie being stored. */
      referralCookieName: 'oacct-ref',
  
      /**
       * Get the current user's Referral Promo code.
       * 
       * @returns {string}
       * Returns string value of Referral Promo code. If
       * no Promo code exists, function returns null.
       */
      getPromoCode: function () {
        return  this.getCode('promoCode', 'refrid');
      },
  
      /**
       * Get the current user's Referral Mac code.
       * 
       * @returns {string}
       * Returns string value of Referral Mac code. If
       * no Mac code exists, function returns null.
       */
      getMacCode: function () {
        return this.getCode('macCode', 'src');
      },
  
      /**
       * Get a Referral Promo or Mac code.
       * 
       * This function first checks the URL for the 'refrid'
       * or 'src' parameters. If it doesn't find those in
       * the URL, it will check whether this object's
       * 'this.promoCode' or 'this.macCode' values have been
       * set manually. If not set manually, it finally checks for
       * the values in the 'oacct-ref' cookie.
       *  
       * @param {string} codeType The type of code.
       * @param {string} queryParam The query param for the code.
       * 
       * @returns {string|null}
       * Returns the string value for the 'codeType' being requested.
       * If no code is found, function returns null.
       */
      getCode: function (codeType, queryParam) {
        var code = UrlHelpers.getUrlQueryParam(queryParam) || this[codeType];
        if (!code) {
          var codesFromCookie = this.getCodesFromReferralCookie();
          code = codesFromCookie && codesFromCookie[codeType] ? codesFromCookie[codeType] : null;
        }
        return code;
      },
  
      /**
       * Get Referral codes from the stored 'oacct-ref' cookie.
       * 
       * @returns {object}
       * Returns object of string values for Promo and Mac codes.
       * If no cookie exists, function returns null.
       * If either the Promo or Mac code values don't exist,
       * function returns null.
       */
      getCodesFromReferralCookie: function () {
        var codes = null;
        var cookie = BrowserStorage.getCookie(this.referralCookieName);
        if (cookie) {
          cookie = cookie.split("|");
          if (cookie[0] && cookie[1]) {
            codes = {
              promoCode: cookie[0],
              macCode: cookie[1]
            }
          }
        }
        return codes;
      },
  
      /**
       * Check whether the current user is a Referral user.
       * 
       * @returns {boolean}
       * Returns true if both conditions are met. Returns
       * false if either condition fails.
       */
      isReferral: function () {
        if (this.getPromoCode() && this.getMacCode()) {
          return true;
        }
        return false;
      },
  
      /**
       * Checks whether the current user is a new Referral user.
       * 
       * New Referral users are identified by the existence of the
       * 'refrid' and 'src' query parameters in the URL.
       * 
       * @returns {boolean}
       * Returns true if both conditions are met. Returns false
       * if either condition fails.
       */
      isNewReferral: function () {
        var hasPromoCode = UrlHelpers.getUrlQueryParam('refrid') || this.promoCode;
        var hasMacCode = UrlHelpers.getUrlQueryParam('src') || this.macCode;
        if (hasPromoCode && hasMacCode) {
          return true;
        }
        return false;
      },
  
      /**
       * Debug method to help with troubleshooting this object.
       * 
       * This method leverages the global Utilities library to render
       * internal messages for debugging purposes. It will validate
       * the following:
       * 
       * 1. The existence of the Promo code query parameter ('refrid').
       * 2. The existence of the Mac code query parameter ('src').
       * 3. The existence of the 'oacct-ref' cookie value.
       * 4. The value of the 'oacct-ref' cookie if one exists.
       * 5. The value of the Promo code within the cookie if the cookie exists.
       * 6. The value of the Mac code within the cookie if the cookie exists.
       */
      debug: function () {
        var errorHandler = window.schwab.utilities.errorHandler
          , errorSettings = { 'component': 'schwab-referrals', 'type': 'warning' }
          , promoCodeQueryParam = UrlHelpers.getUrlQueryParam('refrid')
          , macCodeQueryParam = UrlHelpers.getUrlQueryParam('src')
          , referralCookie = BrowserStorage.getCookie(this.referralCookieName)
          , referralCookieCodes = referralCookie && referralCookie !== 'None' ? this.getCodesFromReferralCookie() : null
          , promoCodeFromCookie = 'None'
          , macCodeFromCookie = 'None';
  
        if (referralCookieCodes) {
          promoCodeFromCookie = referralCookieCodes.promoCode;
          macCodeFromCookie = referralCookieCodes.macCode;
        }
  
        errorHandler.log('Promo Code Query Parameter (refrid): ' + (promoCodeQueryParam || 'None'), errorSettings);
        errorHandler.log('Mac Code Query Parameter (src): ' + (macCodeQueryParam || 'None'), errorSettings);
        errorHandler.log('Referral Cookie Value (oacct-ref): ' + (referralCookie || 'None'), errorSettings);
        errorHandler.log('Promo Code From Referral Cookie: ' + promoCodeFromCookie, errorSettings);
        errorHandler.log('Mac Code From Referral Cookie: ' + macCodeFromCookie, errorSettings);
      }
    };
  }
})(window);;
(function (document, window) {
  'use strict';

  if (window.schwab && window.schwab.referrals && window.schwab.utilities) {

    /** Dependencies */
    var ReferralManager = window.schwab.referrals;
    var UrlHelpers = window.schwab.utilities.urlHelpers;
  
    /** Only run this logic if the current browser session is a referral */
    if (typeof ReferralManager.isReferral === "function" && ReferralManager.isReferral()) {
  
      /**
       * Handle OAA URL logic
       */
      var oaaUrlHandler = {
  
        /**
         * Get the updated version of the URL.
         *
         * @param {string} url The URL value from the link that was clicked.
         * 
         * @returns {string}
         * Returns a string version of the updated URL.
         */
        getUpdatedUrl: function (url) {
          var refridParam = this.getUpdatedParam('refrid', url, 'promoCode');
          var srcParam = this.getUpdatedParam('src', url, 'macCode');
          var cleanUrl = this.removeExistingQueryParams(url);
          var queryAppendType = this.urlHasQueryParams(url) ? '&' : '?';
          var finalUrl = cleanUrl + queryAppendType + refridParam + '&' + srcParam;
          return finalUrl;
        },
  
        /**
         * Determine whether the URL has query parameters.
         *
         * @param {string} url The URL value.
         *
         * @returns {boolean}
         * Returns a boolean of true if the URL has query parameters.
         * Returns false if the URL has no '&' AND is either 'src' or 'refrid'.
         */
        urlHasQueryParams: function (url) {
          if (url.indexOf('&') === -1 && (url.indexOf('?src=') !== -1 || url.indexOf('?refrid=') !== -1)) {
            return false;
          }
          return url.indexOf('?') !== -1;
        },
  
        /**
         * Removes query parameter from a URL.
         * 
         * @param {string} url The URL value.
         *
         * @returns {string}
         * Returns a string version of the URL without any query parameters.
         */
        removeExistingQueryParams: function (url) {
          return url.replace(/(src|refrid)\=([^&]*)&?/gi, '').replace(/(\?|&)$/g, '');
        },
  
        /**
         * Get the updated version of a given query parameter.
         *
         * @param {string} param The query parameter we're looking for.
         * @param {string} url The URL we're searching in.
         * @param {string} code type of the parameter (promoCode|macCode)
         *
         * @returns {string}
         * Returns a string of the latest query parameter value.
         * If the query parameter already exists, we append our cookie
         * value to the existing value.
         */
        getUpdatedParam: function (param, url, codeType) {
          var cookieCodes = ReferralManager.getCodesFromReferralCookie();
          var existingQueryParam = UrlHelpers.getUrlQueryParam(param, url);
          var updatedParam = param + '=';

          if (existingQueryParam) {
            updatedParam += encodeURIComponent(existingQueryParam + ',');
          }
          updatedParam += cookieCodes[codeType];

          return updatedParam;
        }
      };
  
      /**
       * Append required query parameters to all 'Open An Account' links.
       *
       * This functionality will search a document for any links that has a
       * 'type' attribute whose value is '_open_an_account'. For all links that
       * meet this criteria, an event will be bound that will append querybcn-link-icon__text
       * parameters based on the values from the pipe dilimited 'oacct-ref' cookie.
       * 
       * The 'refrid' query string value will come from the first portion of the
       * cookie. The 'src' query string value will come from the second portion
       * of the cookie.
       * 
       * Example: PROMO|MAC === ?refrid=PROMO&src=MAC
       */
      var openAccountLinks = document.querySelectorAll('[type="_open_an_account"], .referral-oaa, .bcn-button--open-an-account');
      for (var i = 0; i < openAccountLinks.length; i++) {
        openAccountLinks[i].addEventListener('click', function (event) {
          var element = event.target || event.srcElement;

          if (element.tagName !== 'A') {
            element = element.parentNode;
          }

          var url = element.getAttribute('href');
          var updatedUrl = oaaUrlHandler.getUpdatedUrl(url);
          element.setAttribute('href', updatedUrl);
        });
      }
  
    }
  }
})(document, window);
;
(function (window) {
  'use strict';

  if (window.schwab && window.schwab.utilities) {
    /**
     * Object to handle Referral functionality.
     */
    window.schwab.generalReferrals = {
  
      /** Custom localStorage referral key from the set referral block. */
      localStorageSetBlockReferralKey: '',


      /** Custom localStorage time to live (in days) property. */
      localStorageSetTTL: 0,

      /** Custom localStorage referral program ID from the set referral block. */
      localStorageSetBlockProgramID: '',


      /** Custom localStorage referral key on the OAA update block. */
      localStorageOAABlockReferralKey: '',

      /**
       * Get the localStorage Set Block Referral Key.
       *
       * @returns {string}
       * Returns the set block referral key.
       */
      getLocalStorageSetBlockReferralKey: function () {
        return this.localStorageSetBlockReferralKey;
      },

      /**
       * Set the localStorage set block Referral Key.
       *
       * @param {string} key The referral key.
       */
      setLocalStorageSetBlockReferralKey: function (key) {
        this.localStorageSetBlockReferralKey = key;
      },

      /**
       * Get the localStorage set block time to live.
       *
       * @returns {number}
       * Returns the set block time to live (in days).
       */
      getLocalStorageSetTTL: function () {
        return this.localStorageSetTTL;
      },

      /**
       * Set the localStorage key time to live.
       *
       * @param {number} time The time to live in days.
       */
      setLocalStorageSetTTL: function (time) {
        this.localStorageSetTTL = time;
      },


      /**
       * Get the localStorage set block referral program ID.
       *
       * @returns {number}
       * Returns the set block referral program ID.
       */
      getLocalStorageSetBlockProgramID: function () {
        return this.localStorageSetBlockProgramID;
      },

      /**
       * Set the localStorage id of the referral program.
       *
       * @param {string} id The id of the referral program in the set block.
       */
      setLocalStorageSetBlockProgramID: function (id) {
        this.localStorageSetBlockProgramID = id;
      },

      /**
       * Get the localStorage OAA block referral key.
       *
       * @returns {number}
       * Returns the oaa block referral key.
       */
      getLocalStorageOAABlockReferralKey: function () {
        return this.localStorageOAABlockReferralKey;
      },

      /**
       * Set the localStorage OAA Block Referral Key.
       *
       * @param {string} key The referral key.
       */
      setLocalStorageOAABlockReferralKey: function (key) {
        this.localStorageOAABlockReferralKey = key;
      },

      /**
       * Sets the local variables from the block data.
       */
      setupVariablesFromBlockData: function () {

        if (drupalSettings.schwab_general_referrals.setReferralKey) {
          this.setLocalStorageSetBlockReferralKey(drupalSettings.schwab_general_referrals.setReferralKey);
        }

        if (drupalSettings.schwab_general_referrals.setReferralTTL) {
          this.setLocalStorageSetTTL(drupalSettings.schwab_general_referrals.setReferralTTL);
        }

        if (drupalSettings.schwab_general_referrals.referralProgramID) {
          this.setLocalStorageSetBlockProgramID(drupalSettings.schwab_general_referrals.referralProgramID);
        }

        if (drupalSettings.schwab_general_referrals.oaaReferralKey) {
          this.setLocalStorageOAABlockReferralKey(drupalSettings.schwab_general_referrals.oaaReferralKey);
        }
      }
    };
  }
})(window);;
(function (document, window) {
  'use strict';

  if (window.schwab && window.schwab.generalReferrals && window.schwab.utilities) {

    var SetReferralOAALinks= function () {
      var ReferralManager;
      var UrlHelpers;
      var oaaReferralKey;
      var localStorageReferralKey;
      var referralString;
      var referralObject;
      var openAccountLinks;

      /**
       * Helper function that converts the query object into a query string.
       *
       * @param {object} queryObj The query object that contains all the referral key/value pairs.
       *
       * @returns {string}
       * Returns the query object converted into a string to be used in the URL.
       */
      var getQueryString = function (queryObj) {
        var returnString = "";
        var queryKeysArray = Object.keys(queryObj);

        queryKeysArray.forEach(function(key, index) {
          returnString+= key + '=' + queryObj[key];
          if(index < queryKeysArray.length - 1) {
            returnString += '&';
          }
        });

        return returnString;
      };

      /**
       * Helper function that converts the parameter query string into a query object for easier manipulation.
       *
       * @param {string} queryString The query string from the URL.
       *
       * @returns {object}
       * Returns the query string converted into an object.
       */
      var getQueryObjectFromString = function(queryString) {
        var queryObject = {};

        if (queryString) {
          var keyValue;
          var parameterArray = queryString.split('&');

          parameterArray.forEach(function(parameter){
            keyValue = parameter.split('=');
            queryObject[keyValue[0]] = keyValue[1];
          });
        }

        return queryObject;
      };


      /**
       * Takes href and updates it with the current value.
       *
       * @param {string} href The href of the link.
       * @param {string} value The value to be added to the href parameters.
       *
       * @returns {string}
       * Returns the updated query string parameters.
       */
      var getUpdateQueryParameters = function(href, value) {
        var parts = href.split('?');
        var queryObject = getQueryObjectFromString(parts[1]);
        if(queryObject[oaaReferralKey]) {
          var referralValues = queryObject[oaaReferralKey];

          if(referralValues.indexOf(value) === -1) {
            queryObject[oaaReferralKey] = queryObject[oaaReferralKey] + encodeURIComponent(',') + value;
          }
        }
        else {
          queryObject[oaaReferralKey] = value;
        }

        return parts[0] + '?' + getQueryString(queryObject);
      };


      /**
       * Updates all the OAA links with the updated refrid value.
       *
       * @param {string} refrid The new referral value to add to the query string.
       */
      var updateOAALinks = function(refrid) {

        for(var i = 0; i < openAccountLinks.length; i++) {
          var href = openAccountLinks[i].getAttribute('href');
          if (href.indexOf('?') > -1) {
            href = getUpdateQueryParameters(href, refrid);
          }
          else {
            href = href + '?' + oaaReferralKey + '=' + refrid;
          }

          openAccountLinks[i].setAttribute('href',href);
        }
      };

      /**
       * Updates all the OAA links with the referral key/values from the internal storage.
       */
      var updateOAALinksFromInternalStorage = function updateOAALinksFromInternalStorage() {
        var referralProgramsArray = Object.keys(referralObject[oaaReferralKey]);
        var referralValue = "";
        var timeToLive = 0;
        var timestamp = 0;
        var currentTime = Date.now();

        referralProgramsArray.forEach(function(program) {
          referralValue = referralObject[oaaReferralKey][program]['value'];
          timeToLive = 86400000 * referralObject[oaaReferralKey][program]['TTL']; // convert days to milliseconds
          timestamp = referralObject[oaaReferralKey][program]['timestamp'];

          if ((currentTime-timestamp) <= timeToLive) {
            updateOAALinks(referralValue);
          }
          else {
            delete referralObject[oaaReferralKey][program];
            localStorage.setItem(localStorageReferralKey, JSON.stringify(referralObject));
          }
        });

      };

      /**
       * Initilizes all the variables and sets up the object to be saved to local storage.
       */
      var init = function init() {
        ReferralManager = window.schwab.generalReferrals;
        UrlHelpers = window.schwab.utilities.urlHelpers;
        ReferralManager.setupVariablesFromBlockData();

        oaaReferralKey = ReferralManager.getLocalStorageOAABlockReferralKey();
        localStorageReferralKey = 'schwab_referral_' + oaaReferralKey;
        referralString = localStorage.getItem(localStorageReferralKey);
        referralObject = JSON.parse(referralString) || {};
        openAccountLinks = document.querySelectorAll('[type="_open_an_account"], .general-referral-oaa, .bcn-button--open-an-account');

        var referralValue = UrlHelpers.getUrlQueryParam(oaaReferralKey);

        if(oaaReferralKey && referralObject[oaaReferralKey]) {
          updateOAALinksFromInternalStorage();
        }

        if(referralValue) {
          updateOAALinks(referralValue);
        }
      };

      return {
        init:init
      };
    }();

    document.addEventListener('DOMContentLoaded', function(event) {
      SetReferralOAALinks.init();
    })
  }

})(document, window);
;

/*! jQuery Migrate v1.3.0 | (c) jQuery Foundation and other contributors | jquery.org/license */
"undefined" == typeof jQuery.migrateMute && (jQuery.migrateMute = !0),
  (function (a, b, c) {
    function d(c) {
      var d = b.console;
      f[c] ||
        ((f[c] = !0),
        a.migrateWarnings.push(c),
        d &&
          d.warn &&
          !a.migrateMute &&
          (d.warn("JQMIGRATE: " + c), a.migrateTrace && d.trace && d.trace()));
    }
    function e(b, c, e, f) {
      if (Object.defineProperty)
        try {
          return void Object.defineProperty(b, c, {
            configurable: !0,
            enumerable: !0,
            get: function () {
              return d(f), e;
            },
            set: function (a) {
              d(f), (e = a);
            },
          });
        } catch (g) {}
      (a._definePropertyBroken = !0), (b[c] = e);
    }
    a.migrateVersion = "1.3.0";
    var f = {};
    (a.migrateWarnings = []),
      !a.migrateMute &&
        b.console &&
        b.console.log &&
        b.console.log("JQMIGRATE: Logging is active"),
      a.migrateTrace === c && (a.migrateTrace = !0),
      (a.migrateReset = function () {
        (f = {}), (a.migrateWarnings.length = 0);
      }),
      "BackCompat" === document.compatMode &&
        d("jQuery is not compatible with Quirks Mode");
    var g = a("<input/>", { size: 1 }).attr("size") && a.attrFn,
      h = a.attr,
      i =
        (a.attrHooks.value && a.attrHooks.value.get) ||
        function () {
          return null;
        },
      j =
        (a.attrHooks.value && a.attrHooks.value.set) ||
        function () {
          return c;
        },
      k = /^(?:input|button)jQuery/i,
      l = /^[238]jQuery/,
      m = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)jQuery/i,
      n = /^(?:checked|selected)jQuery/i;
    e(a, "attrFn", g || {}, "jQuery.attrFn is deprecated"),
      (a.attr = function (b, e, f, i) {
        var j = e.toLowerCase(),
          o = b && b.nodeType;
        return i &&
          (h.length < 4 && d("jQuery.fn.attr( props, pass ) is deprecated"),
          b && !l.test(o) && (g ? e in g : a.isFunction(a.fn[e])))
          ? a(b)[e](f)
          : ("type" === e &&
              f !== c &&
              k.test(b.nodeName) &&
              b.parentNode &&
              d("Can't change the 'type' of an input or button in IE 6/7/8"),
            !a.attrHooks[j] &&
              m.test(j) &&
              ((a.attrHooks[j] = {
                get: function (b, d) {
                  var e,
                    f = a.prop(b, d);
                  return f === !0 ||
                    ("boolean" != typeof f &&
                      (e = b.getAttributeNode(d)) &&
                      e.nodeValue !== !1)
                    ? d.toLowerCase()
                    : c;
                },
                set: function (b, c, d) {
                  var e;
                  return (
                    c === !1
                      ? a.removeAttr(b, d)
                      : ((e = a.propFix[d] || d),
                        e in b && (b[e] = !0),
                        b.setAttribute(d, d.toLowerCase())),
                    d
                  );
                },
              }),
              n.test(j) &&
                d(
                  "jQuery.fn.attr('" +
                    j +
                    "') might use property instead of attribute"
                )),
            h.call(a, b, e, f));
      }),
      (a.attrHooks.value = {
        get: function (a, b) {
          var c = (a.nodeName || "").toLowerCase();
          return "button" === c
            ? i.apply(this, arguments)
            : ("input" !== c &&
                "option" !== c &&
                d("jQuery.fn.attr('value') no longer gets properties"),
              b in a ? a.value : null);
        },
        set: function (a, b) {
          var c = (a.nodeName || "").toLowerCase();
          return "button" === c
            ? j.apply(this, arguments)
            : ("input" !== c &&
                "option" !== c &&
                d("jQuery.fn.attr('value', val) no longer sets properties"),
              void (a.value = b));
        },
      });
    var o,
      p,
      q = a.fn.init,
      r = a.parseJSON,
      s = /^\s*</,
      t = /^([^<]*)(<[\w\W]+>)([^>]*)jQuery/;
    (a.fn.init = function (b, e, f) {
      var g, h;
      return b &&
        "string" == typeof b &&
        !a.isPlainObject(e) &&
        (g = t.exec(a.trim(b))) &&
        g[0] &&
        (s.test(b) || d("jQuery(html) HTML strings must start with '<' character"),
        g[3] && d("jQuery(html) HTML text after last tag is ignored"),
        "#" === g[0].charAt(0) &&
          (d("HTML string cannot start with a '#' character"),
          a.error("JQMIGRATE: Invalid selector string (XSS)")),
        e && e.context && (e = e.context),
        a.parseHTML)
        ? q.call(
            this,
            a.parseHTML(g[2], (e && e.ownerDocument) || e || document, !0),
            e,
            f
          )
        : ("#" === b && (d("jQuery( '#' ) is not a valid selector"), (b = [])),
          (h = q.apply(this, arguments)),
          b && b.selector !== c
            ? ((h.selector = b.selector), (h.context = b.context))
            : ((h.selector = "string" == typeof b ? b : ""),
              b && (h.context = b.nodeType ? b : e || document)),
          h);
    }),
      (a.fn.init.prototype = a.fn),
      (a.parseJSON = function (a) {
        return a
          ? r.apply(this, arguments)
          : (d("jQuery.parseJSON requires a valid JSON string"), null);
      }),
      (a.uaMatch = function (a) {
        a = a.toLowerCase();
        var b =
          /(chrome)[ \/]([\w.]+)/.exec(a) ||
          /(webkit)[ \/]([\w.]+)/.exec(a) ||
          /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a) ||
          /(msie) ([\w.]+)/.exec(a) ||
          (a.indexOf("compatible") < 0 &&
            /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a)) ||
          [];
        return { browser: b[1] || "", version: b[2] || "0" };
      }),
      a.browser ||
        ((o = a.uaMatch(navigator.userAgent)),
        (p = {}),
        o.browser && ((p[o.browser] = !0), (p.version = o.version)),
        p.chrome ? (p.webkit = !0) : p.webkit && (p.safari = !0),
        (a.browser = p)),
      e(a, "browser", a.browser, "jQuery.browser is deprecated"),
      (a.boxModel = a.support.boxModel = "CSS1Compat" === document.compatMode),
      e(a, "boxModel", a.boxModel, "jQuery.boxModel is deprecated"),
      e(
        a.support,
        "boxModel",
        a.support.boxModel,
        "jQuery.support.boxModel is deprecated"
      ),
      (a.sub = function () {
        function b(a, c) {
          return new b.fn.init(a, c);
        }
        a.extend(!0, b, this),
          (b.superclass = this),
          (b.fn = b.prototype = this()),
          (b.fn.constructor = b),
          (b.sub = this.sub),
          (b.fn.init = function (d, e) {
            var f = a.fn.init.call(this, d, e, c);
            return f instanceof b ? f : b(f);
          }),
          (b.fn.init.prototype = b.fn);
        var c = b(document);
        return d("jQuery.sub() is deprecated"), b;
      }),
      (a.fn.size = function () {
        return (
          d("jQuery.fn.size() is deprecated; use the .length property"),
          this.length
        );
      });
    var u = !1;
    a.swap &&
      a.each(["height", "width", "reliableMarginRight"], function (b, c) {
        var d = a.cssHooks[c] && a.cssHooks[c].get;
        d &&
          (a.cssHooks[c].get = function () {
            var a;
            return (u = !0), (a = d.apply(this, arguments)), (u = !1), a;
          });
      }),
      (a.swap = function (a, b, c, e) {
        var f,
          g,
          h = {};
        u || d("jQuery.swap() is undocumented and deprecated");
        for (g in b) (h[g] = a.style[g]), (a.style[g] = b[g]);
        f = c.apply(a, e || []);
        for (g in b) a.style[g] = h[g];
        return f;
      }),
      a.ajaxSetup({ converters: { "text json": a.parseJSON } });
    var v = a.fn.data;
    a.fn.data = function (b) {
      var e,
        f,
        g = this[0];
      return !g ||
        "events" !== b ||
        1 !== arguments.length ||
        ((e = a.data(g, b)),
        (f = a._data(g, b)),
        (e !== c && e !== f) || f === c)
        ? v.apply(this, arguments)
        : (d("Use of jQuery.fn.data('events') is deprecated"), f);
    };
    var w = /\/(java|ecma)script/i;
    a.clean ||
      (a.clean = function (b, c, e, f) {
        (c = c || document),
          (c = (!c.nodeType && c[0]) || c),
          (c = c.ownerDocument || c),
          d("jQuery.clean() is deprecated");
        var g,
          h,
          i,
          j,
          k = [];
        if ((a.merge(k, a.buildFragment(b, c).childNodes), e))
          for (
            i = function (a) {
              return !a.type || w.test(a.type)
                ? f
                  ? f.push(a.parentNode ? a.parentNode.removeChild(a) : a)
                  : e.appendChild(a)
                : void 0;
            },
              g = 0;
            null != (h = k[g]);
            g++
          )
            (a.nodeName(h, "script") && i(h)) ||
              (e.appendChild(h),
              "undefined" != typeof h.getElementsByTagName &&
                ((j = a.grep(a.merge([], h.getElementsByTagName("script")), i)),
                k.splice.apply(k, [g + 1, 0].concat(j)),
                (g += j.length)));
        return k;
      });
    var x = a.event.add,
      y = a.event.remove,
      z = a.event.trigger,
      A = a.fn.toggle,
      B = a.fn.live,
      C = a.fn.die,
      D = a.fn.load,
      E = "ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",
      F = new RegExp("\\b(?:" + E + ")\\b"),
      G = /(?:^|\s)hover(\.\S+|)\b/,
      H = function (b) {
        return "string" != typeof b || a.event.special.hover
          ? b
          : (G.test(b) &&
              d(
                "'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"
              ),
            b && b.replace(G, "mouseenter$1 mouseleave$1"));
      };
    a.event.props &&
      "attrChange" !== a.event.props[0] &&
      a.event.props.unshift(
        "attrChange",
        "attrName",
        "relatedNode",
        "srcElement"
      ),
      a.event.dispatch &&
        e(
          a.event,
          "handle",
          a.event.dispatch,
          "jQuery.event.handle is undocumented and deprecated"
        ),
      (a.event.add = function (a, b, c, e, f) {
        a !== document &&
          F.test(b) &&
          d("AJAX events should be attached to document: " + b),
          x.call(this, a, H(b || ""), c, e, f);
      }),
      (a.event.remove = function (a, b, c, d, e) {
        y.call(this, a, H(b) || "", c, d, e);
      }),
      a.each(["load", "unload", "error"], function (b, c) {
        a.fn[c] = function () {
          var a = Array.prototype.slice.call(arguments, 0);
          return (
            d("jQuery.fn." + c + "() is deprecated"),
            "load" === c && "string" == typeof arguments[0]
              ? D.apply(this, arguments)
              : (a.splice(0, 0, c),
                arguments.length
                  ? this.bind.apply(this, a)
                  : (this.triggerHandler.apply(this, a), this))
          );
        };
      }),
      (a.fn.toggle = function (b, c) {
        if (!a.isFunction(b) || !a.isFunction(c))
          return A.apply(this, arguments);
        d("jQuery.fn.toggle(handler, handler...) is deprecated");
        var e = arguments,
          f = b.guid || a.guid++,
          g = 0,
          h = function (c) {
            var d = (a._data(this, "lastToggle" + b.guid) || 0) % g;
            return (
              a._data(this, "lastToggle" + b.guid, d + 1),
              c.preventDefault(),
              e[d].apply(this, arguments) || !1
            );
          };
        for (h.guid = f; g < e.length; ) e[g++].guid = f;
        return this.click(h);
      }),
      (a.fn.live = function (b, c, e) {
        return (
          d("jQuery.fn.live() is deprecated"),
          B
            ? B.apply(this, arguments)
            : (a(this.context).on(b, this.selector, c, e), this)
        );
      }),
      (a.fn.die = function (b, c) {
        return (
          d("jQuery.fn.die() is deprecated"),
          C
            ? C.apply(this, arguments)
            : (a(this.context).off(b, this.selector || "**", c), this)
        );
      }),
      (a.event.trigger = function (a, b, c, e) {
        return (
          c || F.test(a) || d("Global events are undocumented and deprecated"),
          z.call(this, a, b, c || document, e)
        );
      }),
      a.each(E.split("|"), function (b, c) {
        a.event.special[c] = {
          setup: function () {
            var b = this;
            return (
              b !== document &&
                (a.event.add(document, c + "." + a.guid, function () {
                  a.event.trigger(
                    c,
                    Array.prototype.slice.call(arguments, 1),
                    b,
                    !0
                  );
                }),
                a._data(this, c, a.guid++)),
              !1
            );
          },
          teardown: function () {
            return (
              this !== document &&
                a.event.remove(document, c + "." + a._data(this, c)),
              !1
            );
          },
        };
      }),
      (a.event.special.ready = {
        setup: function () {
          d("'ready' event is deprecated");
        },
      });
    var I = a.fn.andSelf || a.fn.addBack,
      J = a.fn.find;
    if (
      ((a.fn.andSelf = function () {
        return (
          d("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"),
          I.apply(this, arguments)
        );
      }),
      (a.fn.find = function (a) {
        var b = J.apply(this, arguments);
        return (
          (b.context = this.context),
          (b.selector = this.selector ? this.selector + " " + a : a),
          b
        );
      }),
      a.Callbacks)
    ) {
      var K = a.Deferred,
        L = [
          [
            "resolve",
            "done",
            a.Callbacks("once memory"),
            a.Callbacks("once memory"),
            "resolved",
          ],
          [
            "reject",
            "fail",
            a.Callbacks("once memory"),
            a.Callbacks("once memory"),
            "rejected",
          ],
          ["notify", "progress", a.Callbacks("memory"), a.Callbacks("memory")],
        ];
      a.Deferred = function (b) {
        var c = K(),
          e = c.promise();
        return (
          (c.pipe = e.pipe = function () {
            var b = arguments;
            return (
              d("deferred.pipe() is deprecated"),
              a
                .Deferred(function (d) {
                  a.each(L, function (f, g) {
                    var h = a.isFunction(b[f]) && b[f];
                    c[g[1]](function () {
                      var b = h && h.apply(this, arguments);
                      b && a.isFunction(b.promise)
                        ? b
                            .promise()
                            .done(d.resolve)
                            .fail(d.reject)
                            .progress(d.notify)
                        : d[g[0] + "With"](
                            this === e ? d.promise() : this,
                            h ? [b] : arguments
                          );
                    });
                  }),
                    (b = null);
                })
                .promise()
            );
          }),
          (c.isResolved = function () {
            return (
              d("deferred.isResolved is deprecated"), "resolved" === c.state()
            );
          }),
          (c.isRejected = function () {
            return (
              d("deferred.isRejected is deprecated"), "rejected" === c.state()
            );
          }),
          b && b.call(c, c),
          c
        );
      };
    }
  })(jQuery, window);





// https://client.schwab.com/scripts/jQuery.SuggestionBox.min.js

Date.prototype.formatTime = function () {
  var n = this.getHours(),
    t = this.getMinutes(),
    i = this.getSeconds(),
    r = n >= 12 ? "PM" : "AM";
  return (
    n > 12 && (n = n - 12),
    n +
      ":" +
      t.toString().replace(/^(\d)$/, "0$1") +
      ":" +
      i.toString().replace(/^(\d)$/, "0$1") +
      " " +
      r
  );
};
String.prototype.fixDate = function () {
  return this.toString().replace(/\b([1-9])\b/g, "0$1");
};
String.prototype.trim = function () {
  return this.replace(/^\s\s*/, "").replace(/\s\s*$/, "");
};
String.prototype.trimZeros = function () {
  return this.toString().replace(
    /\b0+([1-9][0-91]{0,})(\.{0,}[0-9]{0,2}[1-9]{0,1})0{0,}\b/g,
    "$1$2"
  );
};
Number.prototype.formatDecimal = function (n, t) {
  var i, r;
  return t
    ? ((i = new RegExp("0{" + (t - n) + "}$", "i")),
      this.toFixed(t).replace(i, ""))
    : ((i = /\.(\d+)/), (r = i.exec(this.toString())), !r || r[1].length < n)
    ? this.toFixed(n)
    : this.toString();
};
String.prototype.toNumericFormat = function () {
  for (
    var t = this.split("."),
      n = t[0],
      r = t.length > 1 ? "." + t[1] : "",
      i = /(\d+)(\d{3})/;
    i.test(n);

  )
    n = n.replace(i, "$1,$2");
  return n + r;
};
window.SuggestionBox =
  window.SuggestionBox ||
  (function () {
    function d(t) {
      var u = this,
        f = /([\,\(\)\[\]\*\+\?\^\#\@\-\+\~\!\=\:\\\.\$\%])/g,
        e = 0,
        i = r
          ? {
              chains: {
                toolTip: "點擊以檢視這支股票可選擇的期權代號。",
                link: "期權代號搜尋 >",
              },
              lookup: {
                header: "選定一支股票以查閱其可選擇的期權",
                link: "搜尋代號",
                linkTitle: "請押右箭頭鍵來開啟搜尋代號功能",
              },
              searchbox: {
                statusText:
                  "請用上下箭頭鍵來瀏覽所取得的結果，如果適用可以按代號的右鍵頭開啟期權系列",
              },
            }
          : {
              chains: {
                toolTip:
                  "Click to see available Option Symbols for this security.",
                link: "Option Symbols >",
              },
              lookup: {
                header: "Select a security to view its available Options.",
                link: "Symbol Lookup",
                linkTitle: "Press right arrow key to open Symbol Lookup",
              },
              searchbox: {
                statusText:
                  "results are available, use up and down arrow keys to navigate, press right arrow on symbol to open option chain if applicable",
              },
            };
      this.getResultsPanel = function () {
        var t, n;
        return (
          this.divResults ||
            ((t = jQuery("#divResults")),
            t.length === 0 &&
              ((n = []),
              n.push("<!--[if lt IE 9]>"),
              n.push('<div class="c3"></div>'),
              n.push('<div class="c2"></div>'),
              n.push('<div class="c1"></div>'),
              n.push("<![endif]-->"),
              n.push("<div id='divResults2'>"),
              n.push("<div class='header'></div>"),
              n.push("<div id='resultsTable'></div>"),
              n.push("</div>"),
              (t = jQuery(
                "<div id='divResults' style='z-index:99999'/>",
                window.document
              )),
              n.push("<!--[if lt IE 9]>"),
              n.push('<div class="c1"></div>'),
              n.push('<div class="c2"></div>'),
              n.push('<div class="c3"></div>'),
              n.push("<![endif]-->"),
              t.html(n.join("")),
              jQuery(window.document.body).append(t)),
            t.hide().click(function (n) {
              return n.preventDefault(), !1;
            }),
            (this.divResults = t)),
          this.divResults
        );
      };
      this.addBlurHandler = function (n) {
        jQuery(this).blur(n);
      };
      this.addChainsClickHandler = function (n) {
        jQuery(this).bind("chainsClick", n);
      };
      this.addKeyDownHandler = function (n) {
        jQuery(this).keydown(n);
      };
      this.addKeyPressHandler = function (n) {
        jQuery(this).keypress(n);
      };
      this.addKeyUpHandler = function (n) {
        jQuery(this).keyup(n);
      };
      this.addSymbolLookupClickHandler = function (n) {
        jQuery(this).bind("symbolLookupClick", n);
      };
      this.addSymbolSelectedHandler = function (n) {
        jQuery(this).bind("symbolSelected", n);
      };
      this.displayResults = function () {
        var h = jQuery("#" + t.activeTextFieldId),
          e = t.filteredData,
          g = h.data(n),
          nt = g.MiniChains.Mode.toLowerCase(),
          c,
          y,
          b,
          o,
          a,
          s,
          d,
          v,
          rt;
        if (
          (e === null && (e = t.data.Symbols), e === null || e.length === 0)
        ) {
          this.hide();
          return;
        }
        c = this.getResultsPanel();
        b = 250;
        nt === "optionsonly"
          ? c.find(".header").html(i.lookup.header).show()
          : c.find(".header").hide();
        g.SymbolLookup.Mode.toLowerCase() == "disabled"
          ? c.find(".footer").hide()
          : c.find(".footer").show();
        c.find("div.footer > a").html(i.lookup.link);
        y = jQuery("#resultsTable").empty();
        var ut = function () {
            this.className = "";
            t.selectedIndex = -1;
          },
          ft = function (n) {
            return function () {
              t.selectedIndex = n;
              u.repaintResults();
            };
          },
          et = function () {
            u.setSymbol(t.filteredData[t.selectedIndex][0]);
            u.hide();
          },
          ot = function (n) {
            return function (t) {
              h.attr("value", e[n][0]);
              jQuery(u).triggerHandler("chainsClick", [this, e[n][0]]);
              t.stopPropagation();
              t.preventDefault();
            };
          };
        for (o = 0; o < e.length; ++o) {
          if (o == t.pageSize) break;
          var l = jQuery('<div class="sym-row"/>'),
            p = h.attr("value").split(" "),
            k = "",
            tt = !1;
          for (l.hover(ft(o), ut).bind("click", et), a = 0; a < p.length; a++)
            (k += p[a]), a != p.length - 1 && (k += "|");
          for (s = 0; s < 2; ++s) {
            var st = jQuery("<div class='section-inline'/>").addClass("Column" + s),
              w = e[o][s],
              ht = e[o][s],
              it = jQuery("<div/>"),
              ct = "\\b(" + k.replace(f, "\\$1") + ")";
            s == 1 &&
              it.css("width", "172px").addClass("ellipsis").attr("title", ht);
            d = new RegExp(ct, "ig");
            w.match(d) &&
              !tt &&
              (p.length === 1 || s !== 0) &&
              ((tt = !0), (w = w.replace(d, "<b>$1</b>")));
            l.append(st.append(it.html(w)));
          }
          nt == "mixed" &&
            (e[o][2]
              ? ((b = 335),
                (v = jQuery('<a target="_top" href="javascript:void(0)"/>')
                  .click(ot(o))
                  .html(i.chains.link)),
                (jQuery.browser.msie || SuggestionBox.IsChrome) && r
                  ? v.toolTip != null && v.toolTip(i.chains.toolTip)
                  : v.attr("title", i.chains.toolTip),
                l.append(
                  jQuery("<div class='section-inline'/>")
                    .addClass("link")
                    .attr("nowrap", "nowrap")
                    .append(v)
                ))
              : l.append(jQuery("<div class='section-inline' class='link'/>")));
          y.append(l);
        }
        jQuery("#liteSiteHeaderCntr").length == 0 &&
          (y.append('<div class="footer"><div class="lookup"></div></div>'),
          (rt = jQuery("<a/>")
            .html(i.lookup.link)
            .attr({ href: "javascript:void(0)", title: i.lookup.linkTitle })
            .click(function () {
              jQuery(u).trigger("symbolLookupClick", [this]);
            })),
          y.find(".footer .lookup").append(rt));
        var lt = jQuery("body").offset(),
          at = h.offset(),
          vt = at.left - lt.left,
          yt = function (n, t) {
            for (var r, u, i = 0; i < 5; ++i)
              if (t.scrollWidth - 1 > t.clientWidth)
                (r = t.clientWidth / t.scrollWidth),
                  (u = Math.round(n.length * r)),
                  (n = n.substr(0, u)),
                  jQuery(t).html(n.substr(0, n.length - 3) + "...");
              else break;
          };
        h.hasClass("txtsrhZoom") ||
          h.attr("id") == "QueryString1" ||
          h.attr("id") == "SRCHY_searchbox" ||
          (c.width(b).show(), this.show());
      };
      this.show = function () {
        var r = this.getResultsPanel(),
          c = jQuery("body").offset(),
          p = jQuery("#resultsTable"),
          u = jQuery("#" + t.activeTextFieldId),
          ot = t.filteredData,
          ut = u.data(n),
          f = u.offset(),
          l = f.left - c.left,
          a,
          o,
          w,
          v,
          it,
          y,
          rt;
        if (
          (document.body.clientWidth < f.left + r.outerWidth() &&
            (l = f.left - (r.outerWidth() - u.outerWidth()) - c.left),
          (a = "absolute"),
          (w = u.offset()),
          ut.AutoComplete.Position === "fixed-bottom")
        ) {
          if (((o = w.top - r.outerHeight()), h)) {
            a = "fixed";
            var b = jQuery(document.body).parent(),
              k = jQuery(document.body),
              d = b.scrollTop(),
              g = k.scrollTop(),
              ft = d > g ? d : g,
              nt = b.scrollLeft(),
              tt = k.scrollLeft(),
              et = nt > tt ? nt : tt;
            o = o - ft;
            l = f.left - et;
          }
          r.removeClass("page-curl");
        } else
          (o = e + f.top + u.outerHeight() - c.top), r.addClass("page-curl");
        r.css("position", a).css("top", o + "px");
        r.css("left", l + "px").css("height", "");
        r.width() < p.outerWidth()
          ? r.css("width", p.outerWidth() + 5 + "px").css("max-width", "none")
          : r.css("max-width", "");
        s(r, "ac");
        v = jQuery("#resultsTable>div");
        jQuery("#resultsTable").attr("role", "listbox");
        it = v.length - 1;
        it > 0 &&
          ((y = jQuery("#resultsTextSpan")),
          (rt = y.length),
          rt
            ? y.text(i.searchbox.statusText)
            : jQuery("body").append(
                '<span id="resultsTextSpan" role="application" aria-live="polite" class="sr-only">' +
                  i.searchbox.statusText +
                  "</span>"
              ));
        v.each(function (n, t) {
          var i = jQuery(t),
            r,
            u;
          i.hasClass("footer")
            ? i.attr({
                role: "option",
                id: "sym-row" + n,
                "aria-label": i.find("a").text(),
              })
            : ((r = i.find(".Column0").text()),
              (u = i.find(".Column1").text()),
              i.attr({
                role: "option",
                id: "sym-row" + n,
                "aria-label": r + " " + u,
              }));
        });
      };
      this.hide = function () {
        var n = this.getResultsPanel();
        n.hide();
        p("ac");
      };
      this.isVisible = function () {
        return jQuery("#divResults").is(":visible");
      };
      this.setSymbol = function (n, i) {
        n = n.split("&")[0];
        var r = jQuery("#" + t.activeTextFieldId);
        r.attr("value", n);
        i !== !1 && jQuery(this).trigger("symbolSelected", [this, n]);
      };
      this.repaintResults = function () {
        var n = jQuery("#resultsTable").children("div"),
          r = jQuery("#" + t.activeTextFieldId),
          i = jQuery(n.get(t.selectedIndex));
        n.removeClass("HoverRow");
        i.addClass("HoverRow");
        r.attr("aria-activedescendant", i.attr("id"));
      };
      jQuery(window).bind("unload", function () {
        u.hide();
      });
    }
    function g(t, i) {
      var r = function (n) {
        return n == 255 ||
          n == 9 ||
          n == 13 ||
          n == 16 ||
          n == 17 ||
          (n >= 18 && n <= 20) ||
          n == 27 ||
          (n >= 33 && n <= 35) ||
          (n >= 36 && n <= 40) ||
          (n >= 44 && n <= 45)
          ? !0
          : !1;
      };
      i.addDataFetchedHandler(function () {
        var n = jQuery("#" + this.activeTextFieldId),
          i = n.attr("value");
        this.filterCurrentData(i);
        t.displayResults(this.activeTextFieldId);
      });
      i.addDataFetchErrorHandler(function (n, i, r) {
        r.Symbol.length > 3 && (this.isRequestNeeded(r.Symbol) || r.AutoRequest)
          ? this.makeRequest(r.Symbol.substring(0, 3))
          : t.hide();
      });
      t.addBlurHandler(function () {
        setTimeout(function () {
          t.hide();
        }, 400);
      });
      t.addChainsClickHandler(function () {
        this.hide();
      });
      t.addKeyDownHandler(function (n, t, u) {
        if (t.value.length > 0 && r(u))
          switch (u) {
            case 38:
              if (this.isVisible()) {
                if (i.selectedIndex < 0) {
                  var f =
                    i.pageSize < i.filteredData.length
                      ? i.pageSize
                      : i.filteredData.length;
                  i.selectedIndex = f - 1;
                } else i.selectedIndex !== 0 && i.selectedIndex--;
                this.repaintResults();
              } else {
                i.makeRequest(t.value, !0);
                return;
              }
              break;
            case 40:
              if (this.isVisible() && i.selectedIndex < i.filteredData.length)
                i.selectedIndex <= i.pageSize - 1 && i.selectedIndex++;
              else if (!this.isVisible()) {
                i.makeRequest(t.value, !0);
                return;
              }
              this.repaintResults();
          }
        if (t.value.length === 0) {
          this.hide();
          return;
        }
      });
      t.addKeyPressHandler(function (n, t, i) {
        i == 13 && (t.value = t.value.toUpperCase());
      });
      t.addKeyUpHandler(function (u, f, e) {
        var c = jQuery(f).data(n),
          o = jQuery(f),
          s = o.attr("value") || "",
          h;
        if (s.trim().length === 0) {
          t.hide();
          return;
        }
        r(e)
          ? e === 39 && this.isVisible()
            ? (c.MiniChains.Mode.toLowerCase() == "mixed" &&
                ((h = i.filteredData[i.selectedIndex]),
                h &&
                  h[2] &&
                  (o.attr("value", h[0]),
                  jQuery(this).triggerHandler("chainsClick", [this, h[0]]))),
              jQuery(".footer").hasClass("HoverRow") &&
                jQuery(this).triggerHandler("symbolLookupClick", [this]))
            : e === 13 &&
              (u.stopPropagation(),
              this.isVisible() &&
              i.selectedIndex > -1 &&
              i.filteredData &&
              i.filteredData.length > i.selectedIndex
                ? t.setSymbol(i.filteredData[i.selectedIndex][0], !0)
                : c.MiniChains.Mode.toLowerCase() === "optionsonly"
                ? (o.attr("value", s.toUpperCase()),
                  jQuery(this).triggerHandler("chainsClick", [
                    this,
                    o.attr("value").trim(),
                  ]))
                : t.setSymbol(jQuery(f).attr("value").toUpperCase(), !0),
              t.isVisible() && this.hide())
          : ((i.selectedIndex = -1),
            (!u.ctrlKey &&
              e != 8 &&
              e != 46 &&
              !i.data &&
              s.trim().length > 4 &&
              this.isVisible()) ||
            s.length === 0
              ? this.hide()
              : (i.filterCurrentData(s),
                e == 8 || e == 46 || s.length < 5
                  ? i.isRequestNeeded(o.attr("value"))
                    ? i.makeRequest(s)
                    : t.displayResults(o.attr("id"))
                  : i.searchCriteria.length >= 3 &&
                    i.filteredData &&
                    i.filteredData.length === 0
                  ? t.hide()
                  : t.displayResults(o.attr("id"))));
      });
      t.addSymbolSelectedHandler(function () {
        var t = jQuery("#" + i.activeTextFieldId),
          u = t.data(n),
          r;
        u.MiniChains.Mode.toLowerCase() === "optionsonly"
          ? jQuery(this).trigger("chainsClick", [this, t.attr("value")])
          : ((r = u.AutoComplete.CallBack),
            typeof r == "function" && r.call(t.get(0)));
      });
    }
    function nt() {
      var t = this;
      this.activeTextFieldId = "";
      this.filteredData = [];
      this.pageSize = 8;
      this.searchCriteria = "";
      this.selectedIndex = -1;
      this.filterCurrentData = function (n) {
        var o, u, c, r, s, f, e;
        n = n.replace(/\s+/, " ");
        var h = /([\,\(\)\[\]\*\+\?\^\#\@\-\+\~\!\=\:\\\.\$\%])/g,
          t = [],
          i = -1;
        if (this.data)
          if (n.length === 0) t = this.data.Symbols;
          else {
            for (
              o = n.replace(h, "\\$1").split(" "),
                u = "",
                o.length > 1
                  ? (u = "(" + o.join(").*(") + ")")
                  : ((u = "(" + n.replace(h, "\\$1") + ")"),
                    n.search(h) !== 0 && (u = "\\b" + u)),
                c = new RegExp(u, "ig"),
                r = 0,
                r = 0;
              r < this.data.Symbols.length;
              ++r
            ) {
              for (
                i == -1 &&
                  (i =
                    this.data.Symbols[r][0] == n.toUpperCase() ? t.length : -1),
                  s = 0;
                s < 2;
                ++s
              )
                if (this.data.Symbols[r][s].match(c)) {
                  t[t.length] = this.data.Symbols[r];
                  break;
                }
              if (t.length == this.pageSize && i > -1) break;
            }
            if (o.length == 1 && i > 0) {
              for (f = [], f[0] = t[i], e = 0; e < t.length; e++)
                if (e != i) f[f.length] = t[e];
                else if (this.pageSize == f.length) break;
              this.filteredData = f;
              i = 0;
            }
          }
        return (this.filteredData = t), i;
      };
      this.isRequestNeeded = function (n) {
        var t = n.trim().toUpperCase(),
          i = t.substring(0, 3);
        return this.data &&
          this.data.Criteria == i &&
          this.data.NextChars.indexOf(t.charAt(3)) === -1
          ? !1
          : !0;
      };
      this.makeRequest = function (i, r) {
        var f, e, s, u, o;
        if (((i = i.toLowerCase().trim()), i.length !== 0)) {
          f = i;
          e = jQuery("#" + this.activeTextFieldId).data(n).AutoComplete;
          f.length > 3 && (f = f.substring(0, 4));
          this.searchCriteria = i;
          u = e.DataUrl.replace(/\/jQuery/, "");
          switch (e.SecurityType.toUpperCase()) {
            case "Bond":
              u += "/jsonCwpBond";
              break;
            case "EQUITY":
              u += "/jsonCwpEquities";
              break;
            case "ETF":
              u += "/jsonCwpEtf";
              break;
            case "STOCK":
              u += "/jsonCwpStk";
              break;
            case "MUTUALFUND":
              u += "/jsonCwpMF";
              break;
            case "OPTION":
              u += "/jsonCwpOpt";
              break;
            default:
              u += "/jsonCwpAll";
          }
          o = new Date();
          o.setHours(0, 0, 0, 0);
          s = u + "/" + v(f) + ".txt?_=" + o.getTime();
          jQuery.ajax({
            type: "GET",
            url: s,
            dataType: "script",
            cache: "true",
            timeout: 2e3,
            success: function () {
              t.response && !t.response.Status && t.response.Status != 404
                ? ((t.data = t.response), jQuery(t).trigger("dataFetched", [this]))
                : jQuery(t).trigger("dataFetchError", [
                    this,
                    { Symbol: i, AutoRequest: r },
                  ]);
            },
            error: function (n, t) {
              t === "timeout" && console.log("SymbolLookUp-DataFetchError");
            },
          });
        }
      };
      this.setResponse = function (n) {
        this.response = n;
      };
      this.addDataFetchedHandler = function (n) {
        jQuery(this).bind("dataFetched", n);
      };
      this.addDataFetchErrorHandler = function (n) {
        jQuery(this).bind("dataFetchError", n);
      };
    }
    function tt(n) {
      var t = /([\$A-Z\/0-9]{1,6})\s{1,}(\d{1,2}\/{0,1}\d{0,2}\/?\d{0,4}){1}\s{0,}\${0,}(\d{0,}.{0,1}\d{0,}){0,1}\s{0,}([\.\,\''\;\:'\"'\[\]\{\}\|\!\@\#\$\%\^\&\*\(\)\-\_\=\+\<\>\?\/\~\¬\¦\`a-z0-9A-Z]){0,1}/i.exec(
        n.trim().toUpperCase()
      );
      this.Text = n;
      this.ExpIndex = -1;
      this.StrikeIndex = -1;
      this.CP = "";
      this.Matches = [];
      this.Values = t;
      this.RootIndex = -1;
      this.IsMismatch = function () {
        return this.Values &&
          ((this.Values[2] && this.ExpIndex === -1) ||
            (this.Values[3] && this.StrikeIndex === -1) ||
            (this.Values[4] && !this.Values[4].match(/[CP]/i)))
          ? !0
          : !1;
      };
      this.IsGoodMatch = function () {
        var n, t, i;
        if (!this.Values) return !1;
        for (n = 2; n < this.Values.length; ++n)
          if (!this.Values[n] || this.Values[n] != this.Matches[n]) {
            if (
              n == 3 &&
              ((t = parseFloat(this.Values[n])),
              (i = parseFloat(this.Matches[n])),
              t == i)
            )
              continue;
            return !1;
          }
        return !0;
      };
    }
    function it() {
      var i = this;
      this.chainData = {};
      this.strikeIndex = -1;
      this.cpIndex = null;
      this.quoteData = null;
      this.activeTextFieldId = "";
      this.rootIndex = 0;
      this.expIndex = 0;
      this.addDataFetchedHandler = function (n) {
        jQuery(this).bind("dataFetched", n);
      };
      this.addDataFetchErrorHandler = function (n) {
        jQuery(this).bind("dataFetchError", n);
      };
      this.addQuoteFetchErrorHandler = function (n) {
        jQuery(this).bind("quoteFetchError", n);
      };
      this.addQuoteFetchedHandler = function (n) {
        jQuery(this).bind("quoteFetched", n);
      };
      this.createMiniChainData = function (n) {
        var i = {
            GenAt: "",
            IsAdjusted: !1,
            DataVersion: 0,
            Underlying: "",
            SecName: "",
            Roots: [],
          },
          t,
          r,
          s,
          h,
          c,
          l,
          a,
          u,
          e,
          f,
          o;
        if (
          n != null &&
          ((i.GenAt = n.GenAt != null ? n.GenAt : null),
          (i.DataVersion = n.DataVersion != null ? n.DataVersion : 0),
          (i.Underlying = n.Underlying != null ? n.Underlying : ""),
          (i.SecName = n.SecName != null ? n.SecName : ""),
          (i.IsAdjusted = n.IsAdjusted != null ? n.IsAdjusted : !1),
          n.Roots != null && n.Roots.length > 0)
        ) {
          for (
            s = !1, h = i.Underlying.replace(/[^a-zA-Z 0-9]+/g, ""), t = 0;
            t < n.Roots.length;
            t++
          )
            h != null && h === n.Roots[t] && (s = !0),
              (r = {}),
              (r.Symbol = n.Roots[t]),
              (r.Expirations = []),
              (r.IsAdjusted =
                n.Roots[t] != null && n.Roots[t].match(/\djQuery/) != null
                  ? !0
                  : !1),
              n.ContractDetails != null &&
                n.ContractDetails[t] != null &&
                (r.Contract = n.ContractDetails[t]),
              i.Roots.push(r);
          for (
            l = new Date(), l.setHours(0, 0, 0, 0), t = 0;
            t < n.Expirations.length;
            t++
          )
            if (
              ((a = new Date(n.Expirations[t].Date)),
              a >= l && n.Expirations[t] && n.Expirations[t].Strikes != null)
            )
              for (u = 0; u < n.Expirations[t].Strikes.length; u++)
                if (((f = n.Expirations[t].Strikes[u].Root), !isNaN(f))) {
                  for (c = !1, e = 0; e < i.Roots[f].Expirations.length; e++)
                    i.Roots[f].Expirations[e].Date === n.Expirations[t].Date &&
                      (i.Roots[f].Expirations[e].Strikes.push(
                        n.Expirations[t].Strikes[u].Price
                      ),
                      (c = !0));
                  c ||
                    ((o = {}),
                    (o.Date = n.Expirations[t].Date),
                    (o.Type = n.Expirations[t].Type),
                    (o.Strikes = [n.Expirations[t].Strikes[u].Price]),
                    i.Roots[f].Expirations.push(o));
                }
          i.IsAdjusted &&
            !s &&
            ((r = {}),
            (r.Symbol = i.Underlying),
            (r.Contract = null),
            (r.Expirations = []),
            (r.IsAdjusted = !1),
            i.Roots.unshift(r));
        }
        return i;
      };
      this.getMoneyMatch = function () {
        var i = { index: -1, isTradeDateOld: !1, isExactMatch: !1 },
          n,
          u,
          e,
          t;
        if (
          this.quoteData &&
          ((n = this.quoteData.DetailedQuotes), n.length > 0)
        ) {
          var o =
              n[0].SecurityType === "INDEX"
                ? n[0].LastPriceDate
                : n[0].LastTradeDate,
            s = new Date(),
            r = new Date(),
            f = o.match(/(\d{4})(\d{2})(\d{2})/);
          if (
            (r.setDate(parseInt(f[3], 10)),
            r.setMonth(parseInt(f[2], 10) - 1),
            r.setFullYear(parseInt(f[1], 10)),
            s.getTime() - r.getTime() > 3456e5)
          )
            return (i.isTradeDateOld = !0), i;
          if (
            ((e =
              n[0].SecurityType === "INDEX"
                ? n[0].LastPrice
                : n[0].LastTradePrice),
            this.chainData.Roots[this.rootIndex] &&
              this.chainData.Roots[this.rootIndex].Expirations &&
              this.chainData.Roots[this.rootIndex].Expirations[this.expIndex] &&
              this.chainData.Roots[this.rootIndex].Expirations[this.expIndex]
                .Strikes)
          )
            for (
              u = this.chainData.Roots[this.rootIndex].Expirations[
                this.expIndex
              ].Strikes,
                t = 0;
              t < u.length;
              t++
            )
              if (u[t] <= e) (i.index = t), u[t] == e && (i.isExactMatch = !0);
              else break;
        }
        return i;
      };
      this.getMatchInfo = function (n, t) {
        var f, o, s, e, h, l, r, a;
        t || (t = this.chainData);
        var i = new tt(n),
          u = i.Values,
          c = t.Underlying != null ? t.Underlying : "";
        if (u) {
          if (((i.RootIndex = -1), u[1] && t.Roots))
            for (
              u[1] =
                c.match(/[$\/]/g) &&
                u[1].match(/^[$]\w+\s{0,}$|^[\w]+[\/]\w+\s{0,}$/)
                  ? u[1].replace(/[$\/]/g, "")
                  : u[1],
                r = 0;
              r < t.Roots.length;
              r++
            )
              if (t.Roots[r].Symbol === u[1]) {
                i.Matches[1] = t.Roots[r].Symbol;
                i.RootIndex = r;
                break;
              }
          if (
            (u[4] && ((i.CP = u[4]), (i.Matches[4] = u[4])),
            (i.ExpIndex = -1),
            (u[2] || u[2] === 0) && i.RootIndex > -1)
          )
            for (
              f = u[2]
                .replace(/^([2-9])\b/, "0$1")
                .replace(/^(\d{2}\/)([2-9])\//, "$1/0$2/"),
                i.Values[2] = f,
                r = 0;
              r < t.Roots[i.RootIndex].Expirations.length;
              ++r
            )
              if (
                ((o = t.Roots[i.RootIndex].Expirations[r].Date.fixDate()),
                o.indexOf(f) === 0 || (f == "1" && o.indexOf(f) === 1))
              ) {
                i.ExpIndex = r;
                i.Matches[2] = o;
                break;
              }
          if (u[3] && i.RootIndex > -1 && i.ExpIndex > -1)
            for (
              s = t.Roots[i.RootIndex].Expirations[i.ExpIndex].Strikes, e = 0;
              e < s.length;
              ++e
            )
              if (
                ((h = s[e].formatDecimal(2, 3)),
                h.indexOf(u[3].trim().trimZeros()) === 0)
              ) {
                i.StrikeIndex = e;
                i.Matches[3] = h;
                break;
              }
        } else if (((i.RootIndex = -1), n))
          for (
            l =
              c.match(/[$\/]/g) &&
              n.match(/^[$]\w+\s{0,}$|^[\w]+[\/]\w+\s{0,}$/)
                ? n.toUpperCase().replace(/[$\/]/g, "")
                : n.toUpperCase(),
              r = 0;
            r < t.Roots.length;
            r++
          )
            if (((a = t.Roots[r].Symbol), a === l.trim())) {
              i.Matches[1] = t.Roots[r].Symbol;
              i.RootIndex = r;
              break;
            }
        return i;
      };
      this.makeQuoteRequest = function (t) {
        var r = jQuery("#" + this.activeTextFieldId).data(n).MiniChains,
          u =
            r.QuoteUrl +
            "?locationid=906&symbol=" +
            this.chainData.Underlying +
            "&callback=?";
        jQuery.ajax({
          type: "GET",
          url: u,
          dataType: "json",
          cache: "true",
          timeout: 5e3,
          success: function (n) {
            n.Status
              ? jQuery(i).trigger("quoteFetchError", [
                  this,
                  { Type: "Quote", Symbol: t, Status: n.Status },
                ])
              : ((i.quoteData = n), jQuery(i).trigger("quoteFetched", [this, t]));
          },
          error: function () {
            jQuery(i).trigger("quoteFetchError", [
              this,
              { Type: "Quote", Symbol: t, Status: 503 },
            ]);
          },
        });
      };
      this.makeChainRequest = function (r, u, f) {
        var e = new Date();
        e.setHours(0, 0, 0, 0);
        var o =
            this.activeTextFieldId && jQuery("#" + this.activeTextFieldId).data(n)
              ? jQuery("#" + this.activeTextFieldId).data(n).MiniChains
              : t.MiniChains,
          s = o.DataUrl + "/" + u,
          h = s + "/" + v(r.toLowerCase()) + ".txt?_=" + e.getTime();
        f ||
          (f = function () {
            i.response && !i.response.Status && i.response.Status != "error"
              ? ((i.chainData = i.createMiniChainData(i.response)),
                (i.rootIndex = 0),
                (i.expIndex = 0),
                (i.strikeIndex = -1),
                (i.cpIndex = null),
                (i.quoteData = null),
                jQuery(i).trigger("dataFetched", [this]))
              : jQuery(i).trigger("dataFetchError", [this, { Type: u, Symbol: r }]);
          });
        jQuery.ajax({
          type: "GET",
          url: h,
          dataType: "script",
          cache: "true",
          timeout: 2e3,
          success: f,
          error: f,
        });
      };
      this.setResponse = function (n) {
        this.response = n;
      };
      this.isPresentationSymbol = function (n) {
        return /^[A-Z\/0-9]{1,6}\s+\d{1,2}\/\d{1,2}\/\d{4}\s+\${0,}\d{1,5}\.*\d{0,3}\s+[CP]$/i.test(
          n
        );
      };
      this.translate = function (n) {
        for (
          var i,
            u,
            f,
            r = [
              "^([A-Z0-9]{1,6})\\s*(\\d{2})(\\d{2})(\\d{2})([CP])(\\d{5})(\\d{3})$",
            ],
            e = ["$1 $3/$4/$2 $6.$7 $5"],
            t = 0;
          t < r.length;
          ++t
        )
          if (((i = new RegExp(r[t])), (i.ignoreCase = !0), i.test(n)))
            return (
              (u = n.replace(i, e[t])),
              (f = new Date().getFullYear().toString().substr(0, 2)),
              u
                .replace(/\b\d\//, "0$0")
                .replace(/\b(\d{1,2}\/\d{1,2})\/(\d{2})\b/, "$1/" + f + "$2")
            );
        return n;
      };
      this.logHitBox = function (n) {
        typeof _hbLink == "function" && _hbLink(n);
      };
      this.rootExists = function (n) {
        var i, t;
        if (
          n &&
          n.trim().length > 0 &&
          ((i = n.trim().split(" ")[0].toUpperCase().replace(/[$\/]/g, "")),
          this.chainData.Roots)
        )
          for (t = 0; t < this.chainData.Roots.length; ++t)
            if (
              this.chainData.Roots[t] &&
              this.chainData.Roots[t].Symbol &&
              this.chainData.Roots[t].Symbol === i
            )
              return !0;
        return !1;
      };
    }
    function rt(t) {
      var u = r
          ? {
              months: [
                "1月",
                "2月",
                "3月",
                "4月",
                "5月",
                "6月",
                "7月",
                "8月",
                "9月",
                "10月",
                "11月",
                "12月",
              ],
              quote: {
                lst: "最後價格",
                chg: "變動",
                bid: "買方出價",
                ask: "賣方要價",
                high: "最高",
                low: "最低",
                vol: "成交量",
                time: "成交時間",
                atclose: "上次收盤時間",
                error: "即時報價目前無法取得。",
                loading: "資料讀取中…",
                NA: "無資料",
                invalidSymbol: "請輸入一個有效代號。",
              },
              header: {
                call: "買入期權 (Calls)",
                put: "賣出期權 (Puts)",
                strike: "執行價",
                title: "期權: ",
                close: "關閉",
              },
              inTheMoney: "價內",
              link: "前往期權系列 ",
              legend: " = 價內",
              expToday: "今日到期",
              expInDays: "在 <insert #> 日內到期",
              expType: { WKY: "每週期權", QTR: "每季期權" },
              messages: [
                "目前這個目標證券僅有經調整期權。",
                "請點選上方標籤取得這些期權。",
              ],
              help: [
                "經調整期權由於該期權的目標證券的重大公司活動造成交付條件更改。",
                "瞭解更多",
              ],
              adjOption: "經調整期權",
              multiplier: "乘數",
              deliverable: "可交付",
              cash: "現金",
              refreshSymbolTableText: "按輸入來更新期權代號表格",
              SymbolSelectionText: "對此按輸入來選擇",
              quoteCaption: "報價",
              overlayClosed: "Minichains Overlay Closed",
              overlayOpened:
                "Minichains Overlay Opened. Press Escape to return to the symbol entry field.",
              symbolCaption: "期權",
              adjustedCaption: "調整式期權輔助圖標",
            }
          : {
              months: [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
              ],
              quote: {
                lst: "Last",
                chg: "Change",
                bid: "Bid",
                ask: "Ask",
                high: "High",
                low: "Low",
                vol: "Volume",
                time: "Time (ET)",
                atclose: "At Close",
                error:
                  "Real-time quote information is not currently available.",
                loading: "Loading Quote...",
                NA: "N/A",
                invalidSymbol: "Please enter a valid symbol.",
              },
              header: {
                call: "Calls",
                put: "Puts",
                strike: "Strike",
                title: "Options for: ",
                close: "Close",
              },
              inTheMoney: "In the money",
              link: "Go To Option Chains",
              legend: " = In the money",
              expToday: "Expires today",
              expInDays: "Expires in <insert #> days",
              expType: { WKY: "WEEKLY option", QTR: "QUARTERLY option" },
              messages: [
                'There are only Adjusted Options for this underlying security <span style="white-space:nowrap;">at this time.<span>',
                "To access them, click on the tab(s) above.",
              ],
              help: [
                "Adjusted Options have altered terms of delivery as a result of a significant corporate event on the option’s underlying security.",
                "More",
              ],
              adjOption: "Adjusted Options",
              multiplier: "Multiplier",
              deliverable: "Deliverable",
              cash: "Cash",
              refreshSymbolTableText: "Enter to refresh option symbol table",
              SymbolSelectionText: "Enter this to select",
              quoteCaption: "Quote",
              overlayClosed: "Minichains Overlay Closed",
              overlayOpened:
                "Minichains Overlay Opened. Press Escape to return to the symbol entry field.",
              symbolCaption: "Options",
              adjustedCaption: "Adjusted Options help icon",
            },
        f = this,
        e = !1,
        l = function () {
          var r = [],
            e,
            h,
            o,
            s;
          return (
            r.push("<!--[if lt IE 9]>"),
            r.push('<div class="c3 title"></div>'),
            r.push('<div class="c2 title"></div>'),
            r.push('<div class="c1 title"></div>'),
            r.push("<![endif]-->"),
            r.push('<span class="sr-only">' + u.overlayOpened + "</span>"),
            r.push(
              "<div class='Title' ><h4 class='Desc'></h4><a role='link' class='link-close'><span class='closeLabel'>" +
                u.header.close +
                "</span><span class='icon-close'></span></a></div>"
            ),
            r.push(
              '<div class="Quote" style="min-height:32px;"><table width="100%" tabindex="2" cellpadding="0" cellspacing="0" ><caption class="sr-only" style="display:block !important"> ' +
                u.quoteCaption +
                "</caption><thead><tr><td>Loading Quote...</td></tr></thead><tbody><tr><td>&nbsp;</td></tr></tbody></table></div>"
            ),
            r.push('<div class="section-results">'),
            r.push('<div class="rootTabsRow"></div>'),
            r.push(
              '<div class="contractRow warning-adjusted" style="clear: both;display: block;" class="warning-adjusted"><span></span></div>'
            ),
            r.push(
              '<div class="resultsRow" style="display: table; vertical-align: top;">'
            ),
            r.push(
              '<div style="display: table-cell; vertical-align:top"><span class="ExpBtns" style="display:table-cell"></span></div>'
            ),
            r.push(
              '<div style="display: table-cell; width: 100%"><table cellpadding="0" cellspacing="0" border="0" style="border-collapse:separate;width:100%"><tbody>'
            ),
            r.push('<tr><td colspan="2" style="height: 1px;"></td></tr>'),
            r.push(
              '<tr><td class="Data"><div class="Fixed"><table class="Data" cellpadding="0" cellspacing="0" border="0" width="100%"><caption class="sr-only" style="display:block !important">' +
                u.symbolCaption +
                '</caption><thead><tr><th width="50%" class="CallCell" scope="col"></th><th class="StrikeCell" scope="col" ></th><th width="50%" class="PutCell" scope="col" ></th></tr></thead><tbody><tr><td width="50%" class="CallCell"><div style="min-height:15px;">&nbsp;</div></td><td class="StrikeCell"></td><td width="50%" class="PutCell"></td></tr></tbody></table></div></td></tr></tbody></table></div></div>'
            ),
            r.push(
              '<div class="footerRow"><div style="display: table-cell;width: 50%;vertical-align: top;"><div class="Legend"><div class="Box">&nbsp;</div><span aria-hidden="true"></span></div></div><div class="Link"></div></div>'
            ),
            r.push(
              '<span id="closedText" role="alert" aria-live="rude" class="sr-only" aria-hidden="true"></span>'
            ),
            r.push("<!--[if lt IE 9]>"),
            r.push('<div class="c1"></div>'),
            r.push('<div class="c2"></div>'),
            r.push('<div class="c3"></div>'),
            r.push("<![endif]-->"),
            (e = jQuery('<div id="MiniChain" style="z-index:99999">')
              .html(r.join(""))
              .click(function (n) {
                t.cancelBlur = !0;
                n.stopPropagation();
              })
              .bind("touchstart", function (n) {
                t.cancelBlur = !0;
                n.stopPropagation();
              })),
            (h = jQuery("#" + t.activeTextFieldId).data(n)),
            e.find("div.Legend span").html(u.legend),
            e.find("th.CallCell").html(u.header.call),
            e
              .find("th.StrikeCell")
              .attr("nowrap", "nowrap")
              .append(
                jQuery('<div style="white-space:nowrap;"/>').html(u.header.strike)
              ),
            e.find("th.PutCell").html(u.header.put),
            e.find(".link-close").click(function () {
              f.hide();
              f.announceClose();
              jQuery("#" + t.activeTextFieldId).focus();
            }),
            jQuery("#liteSiteHeaderCntr").length == 0 &&
              e
                .find("div.Link")
                .append(jQuery("<a/>").html(u.link).attr("href", "#"))
                .click(function () {
                  var n, r;
                  if (
                    ((symbol = t.chainData.Underlying), t.chainData.IsAdjusted)
                  )
                    for (var i = 0; i < jQuery(".rootTab").length; i++)
                      jQuery(".rootTab")[i].className == "rootTab rootSelected" &&
                        (symbol = jQuery(".rootTab")[i].lastChild.lastChild.lastChild
                          .nodeValue);
                  if (
                    ((n = h.MiniChains.ChainsUrl + "#symbol/" + escape(symbol)),
                    window.location.href.indexOf("client_home") > -1 &&
                      (n = "https://client.schwab.com" + n),
                    window.opener)
                  )
                    try {
                      r =
                        window.opener != window.opener.top
                          ? window.opener.top
                          : window.opener;
                      r.location = n;
                      r.focus();
                    } catch (u) {
                      window.opener.location = n;
                      window.opener.focus();
                    }
                  else return (window.top.location.href = n), !1;
                }),
            (o = e.find("td.Data > div.Fixed")),
            (s = o.clone().removeClass("Fixed").addClass("Scroll")),
            e.find("td.Data").append(s),
            o.attr("aria-hidden", "true"),
            (jQuery.browser.msie || jQuery.browser.safari) &&
              s.bind("mousedown", function () {
                t.cancelBlur = !0;
              }),
            o.css("position", "absolute").find("tbody").html(""),
            jQuery(window.document.body)
              .append(e)
              .click(function (n) {
                n.originalEvent && f.hide();
              }),
            e
          );
        },
        o,
        c;
      this.getResultsPanel = function () {
        var n = jQuery("#MiniChain");
        return n.length === 0 ? l() : n;
      };
      this.selectTextRange = function (n, t, i) {
        if (document.createRange) n.setSelectionRange(t, i);
        else if (document.selection && document.body.createTextRange) {
          var r = n.createTextRange();
          r.moveStart("character", t);
          r.moveEnd("character", i);
          r.select();
        }
      };
      this.addBlurHandler = function (n) {
        jQuery(this).blur(n);
      };
      this.addCellHoverHandler = function (n) {
        jQuery(this).bind("cellHover", n);
      };
      this.addExpChangedHandler = function (n) {
        jQuery(this).bind("expChange", n);
      };
      this.addFocusHandler = function (n) {
        jQuery(this).focus(n);
      };
      this.addKeyDownHandler = function (n) {
        jQuery(this).keydown(n);
      };
      this.addKeyUpHandler = function (n) {
        jQuery(this).keyup(n);
      };
      this.addSymbolSelectedHandler = function (n) {
        jQuery(this).bind("symbolSelected", n);
      };
      this.addRootChangedHandler = function (n) {
        jQuery(this).bind("rootChange", n);
      };
      this.isVisible = function () {
        return jQuery("#MiniChain").is(":visible");
      };
      o = function () {
        var i = [],
          e = jQuery("#" + t.activeTextFieldId),
          r = e.data(n);
        i.push(
          '<div class="Caret">&nbsp;</div><div class="HelpCnt">',
          u.help[0]
        );
        i.push(
          '&nbsp;<a href="#" class="HelpPopup" >',
          u.help[1],
          '<i class="sch sch-popup" style="margin: 0;padding: 0;height: 16px;" aria-describedby="adjustedOptionsId"></i></a></div>'
        );
        f.getResultsPanel()
          .find("div.adjOpt")
          .append(i.join(""))
          .find("a.HelpPopup")
          .click(function (n) {
            jQuery(this).attr("href", r.MiniChains.HelpUrl);
            t.cancelBlur = !0;
            n.stopPropagation();
            var i = window.open(
              r.MiniChains.HelpUrl,
              "Help",
              "width=682,height=520,status=yes,toolbar=no,menubar=no,location=no,scrollbars=yes,resizable=yes,left=50,top=50"
            );
            return (
              i && i.focus(),
              f.hideHelp(),
              t.logHitBox("MiniChainsMoreAdjHelp"),
              !1
            );
          });
      };
      this.showHelp = function () {
        var n = this.getResultsPanel().find("div.adjOpt"),
          t = n.find("div.HelpCnt");
        t.length === 0 && (o(), (t = n.find("div.HelpCnt")));
        var i = n.position(),
          r = i.left + n.width(),
          u = i.top;
        n.find("div.Caret")
          .css({ left: r + "px", top: u + "px" })
          .show();
        t.css({ left: r + "px", top: u - t.height() / 2 - 7 + "px" }).show();
      };
      this.hideHelp = function () {
        jQuery("#MiniChain").find(".HelpCnt").hide().end().find(".Caret").hide();
      };
      c = function () {
        var t = f.getResultsPanel().find(".contractRow"),
          n,
          i;
        return (
          jQuery("#adjDetails").length === 0 &&
            ((n = []),
            n.push('<div style="float: left; margin-right: 8px;">'),
            n.push(
              '<span id="helptext" class="sr-only" role="status" aria-live="assertive" ></span>'
            ),
            n.push(
              '<div class="adjOpt" style="font-weight: bold; border-bottom: 1px dotted; color: #336699;cursor: pointer;">',
              u.adjOption
            ),
            n.push(
              '<span class="HelpIcon sch sch-info-small" aria-label="Adjusted Options tool tip help popup" aria-haspopup="true"></span></div></div>'
            ),
            n.push('<div id="adjDetails">'),
            n.push(
              '<div id="adjMult" style="display:inline;padding-right:10px"></div>'
            ),
            n.push(
              '<div id="adjDlv" style="display:inline;padding-right:10px"></div>'
            ),
            n.push(
              '<div id="adjCash" style="display:inline;white-space: nowrap;"></div>'
            ),
            n.push("</div>"),
            t.find("span").html(n.join("")),
            (i = 0),
            jQuery("div.adjOpt").length > 0 &&
              (i = f
                .getResultsPanel()
                .find(".rootTabsRow")
                .find("li:last-child > a")
                .attr("tabindex")),
            jQuery("div.adjOpt").attr("tabindex", ++i),
            t.find("div.adjOpt").focus(function () {
              t.find("#helptext").text(u.help[0]);
              f.showHelp();
            }),
            t.find("div.adjOpt").blur(function () {
              f.hideHelp();
            }),
            t.find("div.adjOpt").hover(
              function () {
                var helpFlag = !0;
                setTimeout(function () {
                  helpFlag && (f.showHelp(), t.find("div.HelpCnt").focus());
                }, 700);
              },
              function () {
                helpFlag = !1;
                f.hideHelp();
              }
            )),
          t
        );
      };
      this.showContractDetails = function () {
        var i, r, s;
        if (
          t.chainData.Roots[t.rootIndex] != null &&
          t.chainData.Roots[t.rootIndex].IsAdjusted
        ) {
          var h = c(),
            n = t.chainData.Roots[t.rootIndex].Contract,
            f = u.multiplier + ": ",
            e = u.cash + ": ",
            o = u.deliverable + ": ",
            l = t.chainData.Underlying.match(/^[jQuery]\w+/);
          if (n) {
            if (
              ((f +=
                n.Multiplier != null
                  ? "<b>" + n.Multiplier + ";</b> "
                  : "---- "),
              (e +=
                n.Cash != null
                  ? "<b>jQuery" +
                    n.Cash.formatDecimal(2, 2).toNumericFormat() +
                    "</b> "
                  : "---- "),
              (i = []),
              n.Deliverables)
            )
              for (r = 0; r < n.Deliverables.length; r++)
                l
                  ? ((s = n.Deliverables[r].trim()),
                    i.push(s.replace(/(\s+[jQuery]?)/g, " jQuery") + " (" + u.cash + ")"))
                  : i.push(n.Deliverables[r].trim());
            o += i.length > 0 ? "<b>" + i.join(", ") + ";</b> " : "---- ";
          } else (f += "---- "), (e += "---- "), (o += "---- ");
          jQuery("#adjMult").html(f);
          jQuery("#adjDlv").html(o);
          jQuery("#adjCash").html(e);
          h.show();
          jQuery("#adjDetails").css(
            "margin-left",
            jQuery("#adjDetails").prev().outerWidth(!0)
          );
          this.hideLegend();
        } else this.hideContractDetails();
      };
      this.hideContractDetails = function () {
        this.getResultsPanel().find(".contractRow").hide();
        this.showLegend();
      };
      this.showLegend = function () {
        this.getResultsPanel().find("div.Legend").show();
      };
      this.hideLegend = function () {
        this.getResultsPanel().find("div.Legend").hide();
      };
      this.paintRootTabs = function () {
        var i,
          e,
          o = this.getResultsPanel(),
          r = o.find(".rootTabsRow"),
          l = r.empty(),
          n;
        if (t.chainData.Roots && t.chainData.Roots.length > 1) {
          e = jQuery(
            '<ul id="rootTabs" aria-label="Adjusted options list" style="float:left;clear:both;margin-left:-40px;margin-bottom: 0px;margin-top: 0px;list-style-type:none !important ;margin:0 !important;padding: 0 !important; ">'
          );
          var s = function (n) {
              return function () {
                jQuery(f).trigger("rootChange", [this, n]);
                jQuery("#MiniChain").removeClass("page-curl");
                jQuery("#MiniChain").css("background", "white");
                f.setMiniChainTabbing();
              };
            },
            h = function (n) {
              return function (t) {
                t.keyCode == 13 &&
                  (t.preventDefault(),
                  t.stopPropagation(),
                  jQuery(f).trigger("rootChange", [this, n]));
                jQuery("#MiniChain").removeClass("page-curl");
                jQuery("#MiniChain").css("background", "white");
                f.setMiniChainTabbing();
              };
            },
            c = 2;
          for (n = 0; n < t.chainData.Roots.length; n++)
            (i = jQuery(
              '<li class="rootTab"  id="rootTab' +
                n +
                '"><b class="rb1"></b><b class="rb2"></b><a herf="#" aria-label="' +
                u.SymbolSelectionText +
                " " +
                t.chainData.Roots[n].Symbol +
                ' " role="tab" class="rootLbl" tabindex=' +
                ++c +
                '><span aria-hidden="true">' +
                t.chainData.Roots[n].Symbol +
                "</span></a></li></ul>"
            )),
              i.click(s(n)),
              e.append(i),
              i.bind("keypress", h(n));
          r.append(e);
          r.show();
        } else r.hide();
        f.highlightRoot();
      };
      this.highlightRoot = function () {
        var n = this.getResultsPanel().find(".rootTabsRow").find("li.rootTab");
        n.removeClass("rootSelected").eq(t.rootIndex).addClass("rootSelected");
      };
      this.repaintExpButtons = function () {
        var n = this.getResultsPanel().find("ul#ExpBtns").find("li.ExpBtn");
        n.removeClass("Selected");
        n.eq(t.expIndex).addClass("Selected");
        f.scrollExpButtons();
      };
      this.scrollExpButtons = function () {
        if (
          t.chainData.Roots[t.rootIndex] != null &&
          t.chainData.Roots[t.rootIndex].Expirations != null &&
          t.chainData.Roots[t.rootIndex].Expirations.length > 10
        ) {
          var n = this.getResultsPanel().find("ul#ExpBtns"),
            f = n.find("li.Selected"),
            u = n.offset().top,
            e = n.height() + u,
            i = f.offset().top,
            r = 0;
          u >= i
            ? ((r = i - u), n.scrollTop(n.scrollTop() + r))
            : i >= e &&
              ((r = i - e + f.outerHeight(!0)), n.scrollTop(n.scrollTop() + r));
        }
      };
      this.paintExpButtons = function () {
        var d = new Date(),
          s = this.getResultsPanel(),
          a = s.find(".ExpBtns"),
          h = s.find("table > tbody > tr > td.Data > div.Scroll"),
          n,
          p,
          v,
          r,
          k,
          y,
          l;
        if (
          (s
            .find("div.Title > h4.Desc")
            .html(
              "<span class='header-intro'>" +
                u.header.title +
                "</span> " +
                t.chainData.Underlying +
                " - " +
                t.chainData.SecName
            ),
          a.empty(),
          (n = jQuery(
            '<ul id="ExpBtns" aria-label="Expiration Dates list" style="border:none;overflow:hidden;text-align:center;width:90px;margin-left:-40px;list-style-type: none;margin-top:0px;margin: 0 !important;padding: 0 !important;"/>'
          )),
          (p = function (n) {
            return function (t) {
              t.preventDefault();
              t.stopPropagation();
              h.find("table.Data")
                .bind("keydown", function (n) {
                  if (n.keyCode === 9) {
                    if (n.shiftKey) a.find("li:last-child>a").focus();
                    else {
                      var t = s.find("div.Link > a");
                      t.length > 0 ? t.focus() : s.find(".link-close").focus();
                    }
                    return !1;
                  }
                })
                .focus();
              jQuery(f).trigger("expChange", [this, n]);
            };
          }),
          t.chainData.Roots[t.rootIndex].Expirations &&
            t.chainData.Roots[t.rootIndex].Expirations.length > 0)
        )
          for (
            v = 2,
              v +=
                (t.chainData.Roots.length > 1 ? t.chainData.Roots.length : 0) +
                (t.chainData.IsAdjusted ? 1 : 0),
              r = 0;
            r < t.chainData.Roots[t.rootIndex].Expirations.length;
            r++
          ) {
            var e = new Date(
                t.chainData.Roots[t.rootIndex].Expirations[r].Date
              ),
              w = t.chainData.Roots[t.rootIndex].Expirations[r].Type,
              o = jQuery(
                '<li class="ExpBtn" id="btnExp' +
                  r +
                  '"><a href="javascript:void(0)" role="tab" class="rootLbl" tabindex= "' +
                  ++v +
                  '"><span aria-hidden="true">' +
                  u.months[e.getMonth()] +
                  " " +
                  e.getDate() +
                  ", " +
                  e.getFullYear() +
                  "</span></a></li></ul>"
              ).click(p(r)),
              b =
                u.months[e.getMonth()] +
                " " +
                e.getDate() +
                ", " +
                e.getFullYear(),
              i = [],
              c = Math.ceil((e - d) / 864e5);
            if (
              (c > 1
                ? i.push(u.expInDays.replace("<insert #>", c))
                : c === 0
                ? i.push(u.expToday)
                : c === 1 &&
                  i.push(
                    u.expInDays.replace("<insert #>", c).replace("days", "day")
                  ),
              w)
            )
              switch (w.toUpperCase()) {
                case "WKY":
                  i.push(" - ");
                  i.push(u.expType.WKY);
                  break;
                case "QTR":
                  i.push(" - ");
                  i.push(u.expType.QTR);
              }
            o.toolTip != null && o.toolTip(i.join(""));
            o.is("[title]")
              ? ((k = o.attr("title")),
                o
                  .find("a")
                  .attr(
                    "aria-label",
                    u.refreshSymbolTableText + " " + b + " " + k + " "
                  ))
              : o
                  .find("a")
                  .attr(
                    "aria-label",
                    u.refreshSymbolTableText + " " + b + " " + i + " "
                  );
            n.append(o);
          }
        a.append(n).css("vertical-align", "top");
        n.css("height", "220px");
        t.chainData.Roots[t.rootIndex].Expirations &&
          t.chainData.Roots[t.rootIndex].Expirations.length > 10 &&
          ((y = function (t) {
            return function () {
              var r = n.scrollTop(),
                i = n.find("li.ExpBtn").outerHeight(!0),
                u = r + (t === "UP" ? i * -1 : i);
              n.scrollTop(u);
            };
          }),
          jQuery('<span class="UpArw" style="width: 100%;"></span>')
            .insertBefore(n)
            .click(y("UP")),
          jQuery('<span class="DwnArw " style="width: 100%;"></span>')
            .insertAfter(n)
            .click(y("DOWN")),
          n.css("height", "198px"),
          a.css("vertical-align", "middle"));
        h.css({ "max-height": "", height: "" });
        l = h.parent().height();
        l > 0 && l > h.height() && h.css("max-height", l + "px").height(l);
        f.repaintExpButtons();
      };
      this.highLightRow = function (n, t) {
        var u,
          c = jQuery("#MiniChain"),
          i = c.find("td.Data > div.Scroll"),
          s = i.find("table > tbody > tr"),
          l,
          r;
        if ((s.attr("class", ""), n != -1)) {
          switch (t) {
            case "C":
              u = 0;
              break;
            case "P":
              u = 2;
              break;
            default:
              u = 1;
          }
          if (
            n !== null &&
            n <= s.length - 1 &&
            ((l = s.eq(n)),
            u == null && (u = 1),
            (r = l
              .children("td")
              .removeClass("highlight")
              .removeClass("Hover")
              .removeClass("Outline")
              .get(u)),
            r)
          ) {
            t
              ? jQuery(r).addClass("highlight").parent().addClass("highlight")
              : jQuery(r).parent().addClass("Outline");
            var a = i.offset().top + c.find("div.Fixed").outerHeight(!0),
              h = i.height() + i.offset().top,
              f = jQuery(r).offset().top,
              o = 0;
            a >= f
              ? ((o = f - a), i.scrollTop(i.scrollTop() + o))
              : (f >= h || f + jQuery(r).outerHeight(!0) >= h) &&
                ((o = f - h + jQuery(r).outerHeight(!0)),
                i.scrollTop(i.scrollTop() + o));
            e = !0;
          }
        }
      };
      this.highlightITM = function () {
        var i, e, o, c, p, h, y;
        if (t.quoteData) {
          if (
            t.chainData &&
            t.chainData.Roots[t.rootIndex] &&
            t.chainData.Roots[t.rootIndex].IsAdjusted
          ) {
            jQuery("#MiniChain").find("td.Data > div.Scroll").scrollTop(0);
            return;
          }
        } else return;
        var w = t.quoteData.DetailedQuotes,
          f = t.getMoneyMatch(),
          r = f.index,
          s = jQuery("#MiniChain").find("td.Data > div.Scroll"),
          n = s.find("table > tbody > tr");
        if (
          !f.isTradeDateOld &&
          t.quoteData.DetailedQuotes &&
          t.quoteData.DetailedQuotes.length !== 0
        ) {
          if (f.index > -1) {
            if (w.length > 0)
              for (i = 0; i < n.length; i++)
                (e = jQuery(n[i]).children("td.CallCell")),
                  (o = jQuery(n[i]).children("td.PutCell")),
                  i <= r && !f.isExactMatch
                    ? (e.addClass("ITM").attr("aria-label", u.inTheMoney),
                      o.removeClass("ITM").removeAttr("aria-label"))
                    : i == r && f.isExactMatch
                    ? (e.removeClass("ITM").removeAttr("aria-label"),
                      o.removeClass("ITM").removeAttr("aria-label"))
                    : i < r
                    ? (e.addClass("ITM").attr("aria-label", u.inTheMoney),
                      o.removeClass("ITM").removeAttr("aria-label"))
                    : (o.addClass("ITM").attr("aria-label", u.inTheMoney),
                      e.removeClass("ITM").removeAttr("aria-label"));
          } else
            (c = jQuery("#MiniChain").find(
              "td.Data > div.Scroll > table > tbody > tr"
            )),
              c
                .children("td.PutCell")
                .addClass("ITM")
                .attr("aria-label", u.inTheMoney),
              c
                .children("td.CallCell")
                .removeClass("ITM")
                .removeAttr("aria-label");
          var l = Math.floor(s.height() / jQuery(n[0]).height()) - 1,
            a = Math.round(l / 2),
            v = n.length > l ? a - (n.length - (r + 1)) : l - n.length;
          if (
            t.chainData &&
            t.chainData.Roots[t.rootIndex] &&
            t.chainData.Roots[t.rootIndex].Expirations &&
            t.chainData.Roots[t.rootIndex].Expirations.length > 0 &&
            v > 0 &&
            v != Infinity
          )
            for (p = s.find("table > tbody"), h = 0; h < v; ++h)
              (y = jQuery(
                '<td colspan="3" style="background-color:#FFFFFF;padding:1px 0px;"/>'
              ).html("&nbsp;")),
                h === 0 && y.addClass("blankCell").css("padding-top", "0px"),
                p.append(jQuery("<tr/>").append(y));
          s.scrollTop(r >= a ? n.height() * (r + 1 - a) : 0);
        }
      };
      this.displayQuoteStatus = function (n, t) {
        var r = this.getResultsPanel().find("div.Quote"),
          i = "",
          f = t ? "AjaxLoader sch sch-spinner sch-spin-stepped" : "";
        switch (n) {
          case "error":
            i = u.quote.error;
            break;
          case "loading":
            i = u.quote.loading;
            break;
          case "not_found":
            i = u.quote.invalidSymbol;
        }
        r.find("> table > tbody > tr").empty().append("<td>&nbsp;</td>");
        r.find("> table > thead > tr")
          .empty()
          .append(
            "<th align='left'><div class='" + f + "'>" + i + "</div></th>"
          );
      };
      this.replaceRoot = function (n, i) {
        var u = typeof n == "string" ? jQuery("#" + n) : jQuery(n),
          e = u.attr("value").split(" ")[0],
          r,
          f;
        i.Status ||
          i.Underlying != e.toUpperCase() ||
          ((r = t.getMatchInfo(u.attr("value"), i)),
          r.Values &&
            r.Matches[1] &&
            r.Values[1] != r.Matches[1] &&
            ((f = u
              .attr("value")
              .replace(/^([\$A-Z\/0-9]{1,6})\b/i, r.Matches[1])),
            u.attr("value", f.toUpperCase())));
      };
      this.showQuote = function () {
        var c = this.getResultsPanel().find("div.Quote").show(),
          s = t.quoteData.DetailedQuotes,
          r,
          h,
          e,
          o;
        if (s.length > 0) {
          if (s[0]) {
            var n = s[0],
              l = n.LastTradeDate,
              a = n.LastTradeTime,
              v = n.LastTradePrice;
            n.SecurityType === "INDEX" &&
              ((l = n.LastPriceDate), (a = n.LastPriceTime), (v = n.LastPrice));
            var i = new Date(),
              p = "--",
              y = "--",
              w = s[0].TradedTodayCd == "T",
              f = function (n, t) {
                return n > 0
                  ? t
                    ? n.toString().toNumericFormat()
                    : n.formatDecimal(2)
                  : u.quote.NA;
              };
            l &&
              ((r = l.match(/(\d{4})(\d{2})(\d{2})/)),
              i.setDate(parseInt(r[3], 10)),
              i.setMonth(parseInt(r[2], 10) - 1),
              i.setFullYear(parseInt(r[1], 10)),
              (p = w ? u.quote.time : "<b>" + u.quote.atclose + "</b>"),
              a &&
                ((h = a.match(/(\d{2})(\d{2})(\d{2})/)),
                i.setHours(parseInt(h[1], 10)),
                i.setMinutes(parseInt(h[2], 10)),
                i.setSeconds(parseInt(h[3], 10)),
                (y = w ? i.formatTime() : r[2] + "/" + r[3] + "/" + r[1])));
            e = "";
            o = n.NetChange === 0 ? 0 : n.NetChange.formatDecimal(2);
            n.NetChange > 0
              ? ((e = "green"), (o = "+" + o))
              : n.NetChange < 0 && (e = "red");
            c.find("table > thead > tr")
              .empty()
              .append(
                jQuery(
                  "<th align='left' style='font-weight:normal;'>" +
                    u.quote.lst +
                    "</th>"
                )
              )
              .append(
                jQuery(
                  "<th align='left'style='font-weight:normal;'>" +
                    u.quote.chg +
                    "</th>"
                )
              )
              .append(
                jQuery(
                  "<th align='left'style='font-weight:normal;'>" +
                    u.quote.bid +
                    "</th>"
                )
              )
              .append(
                jQuery(
                  "<th align='left'style='font-weight:normal;'>" +
                    u.quote.ask +
                    "</th>"
                )
              )
              .append(
                jQuery(
                  "<th align='left' style='font-weight:normal;'>" +
                    u.quote.high +
                    "</th>"
                )
              )
              .append(
                jQuery(
                  "<th align='left' style='font-weight:normal;'>" +
                    u.quote.low +
                    "</th>"
                )
              )
              .append(
                jQuery(
                  "<th align='left' style='font-weight:normal;'>" +
                    u.quote.vol +
                    "</th>"
                )
              )
              .append(
                jQuery("<th align='left' style='font-weight:normal;'>" + p + "</th>")
              );
            n.SecurityType === "INDEX"
              ? c
                  .find("table > tbody > tr")
                  .empty()
                  .append(jQuery("<td/>").html(v.formatDecimal(2)))
                  .append(jQuery("<td/>").css("color", e).html(o))
                  .append(jQuery("<td/>").html(f(n.BidPrice)))
                  .append(jQuery("<td/>").html(f(n.AskPrice)))
                  .append(jQuery("<td/>").html(n.DailyHighPrice.formatDecimal(2)))
                  .append(jQuery("<td/>").html(n.DailyLowPrice.formatDecimal(2)))
                  .append(jQuery("<td/>").html(u.quote.NA))
                  .append(jQuery("<td/>").html(y))
              : c
                  .find("table > tbody > tr")
                  .empty()
                  .append(jQuery("<td/>").html(v.formatDecimal(2)))
                  .append(jQuery("<td/>").css("color", e).html(o))
                  .append(jQuery("<td/>").html(f(n.BidPrice)))
                  .append(jQuery("<td/>").html(f(n.AskPrice)))
                  .append(jQuery("<td/>").html(n.DailyHighPrice.formatDecimal(2)))
                  .append(jQuery("<td/>").html(n.DailyLowPrice.formatDecimal(2)))
                  .append(jQuery("<td/>").html(f(n.DailyVolume, !0)))
                  .append(jQuery("<td/>").html(y));
          }
        } else this.displayQuoteStatus("not_found");
      };
      this.showQuoteError = function () {};
      this.paintRows = function () {
        var o = this.getResultsPanel(),
          i = o.find("td.Data > div.Scroll").css("width", ""),
          b = o.find("td.Data > div.Fixed"),
          c = i.children("table").css("width", ""),
          h = c.children("tbody"),
          n = [],
          k = function (n, t, i) {
            var r = i == "C" ? "CallCell" : "PutCell",
              u = '<td class="' + r + '">';
            return (
              u +
              ('<div style="min-height:15px;">' + (n + " " + i) + "</div></td>")
            );
          },
          a = function (n, i, r, u) {
            return function (o) {
              (o.originalEvent && t.cancelHover) ||
                (n == "leave"
                  ? jQuery(this).removeClass(i).parent().removeClass(i)
                  : (e &&
                      (jQuery(this)
                        .parent()
                        .parent()
                        .children("tr")
                        .removeAttr("class")
                        .children("td")
                        .removeClass(i)
                        .removeClass("highlight"),
                      (e = !1)),
                    jQuery(this).addClass(i).parent().addClass(i),
                    jQuery(f).trigger("cellHover", [this, r, u])));
            };
          },
          l,
          v,
          r,
          y,
          g,
          nt,
          p,
          w,
          tt,
          it,
          rt;
        if (
          t.chainData.Roots[t.rootIndex].Expirations &&
          t.chainData.Roots[t.rootIndex].Expirations.length > 0
        ) {
          if (
            ((l = t.chainData.Roots[t.rootIndex].Expirations[t.expIndex]),
            l && l.Strikes)
          )
            for (v = l.Strikes, r = 0; r < v.length; r++)
              (y =
                t.chainData.Roots[t.rootIndex].Symbol +
                " " +
                l.Date.fixDate() +
                " " +
                v[r].formatDecimal(2, 3)),
                n.push("<tr>"),
                n.push(k(y, r, "C")),
                n.push('<td class="StrikeCell">'),
                n.push(v[r].formatDecimal(2, 3)),
                n.push("</td>"),
                n.push(k(y, r, "P")),
                n.push("</tr>");
          if (
            (h.html(n.join("")),
            h.find("tr").each(function (n) {
              jQuery(this)
                .children(":not(td.StrikeCell)")
                .mousemove(function () {
                  t.cancelHover = !1;
                })
                .each(function (t) {
                  var i = jQuery(this),
                    u = i.children(),
                    r = t === 0 ? "C" : "P";
                  i.hover(a("enter", "Hover", n, r), a("leave", "Hover", n, r));
                  i.children().length === 1 &&
                    i.click(function () {
                      jQuery(f).trigger("symbolSelected", [this, u.html()]);
                    });
                });
              jQuery(this)
                .children("td.StrikeCell")
                .hover(a("enter", "Outline", n), a("leave", "Outline", n));
            }),
            t.chainData.Roots[t.rootIndex].IsAdjusted)
          ) {
            var d = h.find("tr"),
              ut = Math.floor(i.height() / d.eq(0).height()),
              ft = ut - d.length;
            ft > 0 &&
              ((g = jQuery(
                '<tr><td class="blankCell" style="height:1px;" colspan="3">&nbsp;</td></tr>'
              )),
              h.append(g));
          }
        } else
          n.push(
            '<tr><td style="background-color:#FFFFFF;padding:1px 0px;" colspan="3"><div style="min-height:15px;">&nbsp;</div></td></tr>'
          ),
            t.chainData.Roots[t.rootIndex].Symbol === t.chainData.Underlying &&
              ((nt = i.height() / 2 - 45),
              n.push(
                '<tr style="background-color:#FFF;color:#000;"><td colSpan="3" style="background-color:#FFFFFF;color:#000000;text-align: center;padding-top:',
                nt,
                'px">'
              ),
              n.push(
                '<div style="font-weight: bold;">',
                u.messages[0],
                "</div>"
              ),
              n.push("<div>", u.messages[1], "</div></td></tr>")),
            h.html(n.join(""));
        c.append(h);
        i.css("width", "100%");
        p = i.parent().outerWidth();
        w = o.find(".ExpBtns").outerWidth();
        o.width() < p + w && o.width(p + w);
        c.css("width", i[0].clientWidth - 1 + "px");
        tt = i.position();
        b.css("width", c.outerWidth() + "px").css("left", tt.left + "px");
        it = b.find("thead > tr > th.StrikeCell");
        rt = c.find("thead > tr > th.StrikeCell");
        it.css("padding", "0px")
          .children("div")
          .width(rt.outerWidth() - 2 + "px");
        s(o, "mc");
      };
      this.show = function () {
        var r = jQuery("#" + t.activeTextFieldId),
          v = r.data(n),
          u = r.offset(),
          i = this.getResultsPanel(),
          it = this.isVisible(),
          l,
          a,
          o,
          y;
        i.show();
        i.css("width", "512px");
        jQuery("#adjDetails").css(
          "margin-left",
          jQuery("#adjDetails").prev().outerWidth(!0)
        );
        var f = i.find("td.Data"),
          rt = f.find("table.Data").find("tbody").find("tr").height(),
          c =
            rt * v.MiniChains.StrikeCount +
            f.find("div.Fixed").find("tr").height();
        f.height() < c &&
          f
            .height(c)
            .find("div.Scroll")
            .css({ height: c + "px", "max-height": c + "px" });
        i.find(".ExpBtns").height(f.outerHeight());
        var p = "absolute",
          w = jQuery("body").offset(),
          e,
          l = u.left - w.left,
          ut = r.offset();
        if (v.AutoComplete.Position === "fixed-bottom") {
          if (((e = ut.top - i.outerHeight()), h)) {
            p = "fixed";
            var b = jQuery(document.body).parent(),
              k = jQuery(document.body),
              d = b.scrollTop(),
              g = k.scrollTop(),
              ft = d > g ? d : g,
              nt = b.scrollLeft(),
              tt = k.scrollLeft(),
              et = nt > tt ? nt : tt;
            e = e - ft;
            l = u.left - et;
          }
          i.removeClass("page-curl");
        } else
          (e = u.top + r.outerHeight() - w.top), i.css("background", "white");
        i.css("position", p).css({ top: e + "px", left: l + "px" });
        document.body.clientWidth < u.left + i.outerWidth() &&
          ((l = u.left - (i.outerWidth() - r.outerWidth())), i.css("left", l));
        a = i.find("div.Scroll");
        o = a.parent().height();
        o > 0 && o > a.height() && a.css("max-height", o + "px").height(o);
        s(i, "mc");
        it ||
          ((y = v.MiniChains.OnShow),
          typeof y == "function" && y.call(this, { selector: r }));
      };
      this.hide = function () {
        var f = this.isVisible(),
          r,
          i,
          u;
        this.getResultsPanel().hide();
        p("mc");
        f &&
          ((r = jQuery("#" + t.activeTextFieldId)),
          (i = r.data(n)),
          i &&
            i.MiniChains &&
            ((u = i.MiniChains.OnClose),
            typeof u == "function" && u.call(this, { selector: r })));
      };
      this.completeDate = function (n) {
        var f = !1,
          i,
          u,
          r;
        n.Values &&
          ((i = n.Text.match(/^[^\s]*\s+/)[0].toUpperCase()),
          n.Matches[2] &&
            n.Matches[2] != n.Values[2] &&
            ((u = i.length + n.Values[2].length),
            (i += n.Matches[2]),
            (r = jQuery("#" + t.activeTextFieldId)),
            r.attr("value", i),
            this.selectTextRange(r[0], u, i.length),
            (f = !0)));
      };
      this.prefillDate = function () {
        var n;
        t.chainData.Roots[t.rootIndex] &&
          (t.chainData.Roots[t.rootIndex].Expirations &&
          t.chainData.Roots[t.rootIndex].Expirations.length > 0 &&
          t.chainData.Roots[t.rootIndex].Expirations[t.expIndex] &&
          t.chainData.Roots[t.rootIndex].Expirations[t.expIndex].Date
            ? ((n = jQuery("#" + t.activeTextFieldId)),
              n.attr(
                "value",
                t.chainData.Roots[t.rootIndex].Symbol +
                  " " +
                  t.chainData.Roots[t.rootIndex].Expirations[
                    t.expIndex
                  ].Date.fixDate()
              ))
            : ((n = jQuery("#" + t.activeTextFieldId)),
              n.attr("value", t.chainData.Roots[t.rootIndex].Symbol)));
      };
      this.setMiniChainFocus = function () {
        var n = this.getResultsPanel();
        n.attr("tabindex", 1).focus();
        n.find("#closedText").attr("aria-hidden", "true");
      };
      this.setMiniChainTabbing = function () {
        var u = this.getResultsPanel(),
          n = 2,
          i,
          r;
        t.chainData.Roots &&
          ((n +=
            (t.chainData.Roots.length > 1 ? t.chainData.Roots.length : 0) +
            (t.chainData.IsAdjusted ? 1 : 0)),
          t.chainData.Roots[t.rootIndex] &&
            t.chainData.Roots[t.rootIndex].Expirations &&
            (n += t.chainData.Roots[t.rootIndex].Expirations.length));
        i = u.find("div.Link > a");
        r = u.find(".link-close");
        i.length > 0 && i.attr("tabindex", ++n);
        r.length > 0 && r.attr("tabindex", ++n);
      };
      this.announceClose = function () {
        this.getResultsPanel()
          .find("#closedText")
          .text(u.overlayClosed)
          .attr("aria-hidden", "false");
      };
    }
    function ut(t, i) {
      i.addDataFetchedHandler(function () {
        if (this.chainData != null) {
          var n = this.getMatchInfo(
            this.translate(jQuery("#" + this.activeTextFieldId).attr("value"))
          );
          this.rootIndex = n.RootIndex > -1 ? n.RootIndex : 0;
          this.expIndex = n.ExpIndex > -1 ? n.ExpIndex : 0;
          this.strikeIndex = n.StrikeIndex;
          this.cpIndex = n.CP;
          t.paintRootTabs();
          t.showContractDetails();
          t.paintExpButtons();
          t.show();
          t.paintRows();
          t.completeDate(n);
          t.highLightRow(n.StrikeIndex, n.CP);
          t.scrollExpButtons();
          t.displayQuoteStatus("loading", !0);
          this.makeQuoteRequest(this.chainData.Underlying);
          t.setMiniChainFocus();
          t.setMiniChainTabbing();
        }
      });
      i.addQuoteFetchedHandler(function () {
        t.showQuote();
        t.highlightITM();
        this.strikeIndex > -1 &&
          this.cpIndex != undefined &&
          this.cpIndex !== "" &&
          t.highLightRow(this.strikeIndex, this.cpIndex);
      });
      i.addQuoteFetchErrorHandler(function (n, i, r) {
        if (r.Status == 403.8) {
          var u = "/logout.aspx";
          window.location.href =
            CHANCONF && CHANCONF.NETServer ? CHANCONF.NETServer + u : u;
        } else t.displayQuoteStatus("error");
      });
      i.addDataFetchErrorHandler(function (n, t, i) {
        i.Type == "Underlying" && this.makeChainRequest(i.Symbol, "Root");
      });
      t.addBlurHandler(function (n, t) {
        setTimeout(function () {
          var n, r;
          i.cancelBlur ||
            (i.chainData &&
              ((n = i.getMatchInfo(t.value)),
              n.Values &&
                n.Matches[1] &&
                n.Values[1].toUpperCase() == i.chainData.Underlying &&
                n.Values[1] != n.Matches[1] &&
                ((r = jQuery(t)
                  .attr("value")
                  .replace(/^([\$A-Z\/0-9]{1,6})\b/i, n.Matches[1])),
                jQuery(t).attr("value", r))));
          i.cancelBlur = !1;
        }, 400);
      });
      t.addFocusHandler(function () {
        i.cancelBlur = !1;
      });
      t.addCellHoverHandler(function (n, t, r, u) {
        i.strikeIndex = r;
        i.cpIndex = u;
      });
      t.addExpChangedHandler(function (n, t, r) {
        i.expIndex = r;
        i.strikeIndex = -1;
        i.cpIndex = null;
        this.prefillDate();
        this.repaintExpButtons();
        this.paintRows();
        this.highlightITM();
      });
      t.addRootChangedHandler(function (n, t, r) {
        i.rootIndex = r;
        i.expIndex = 0;
        i.strikeIndex = -1;
        i.cpIndex = null;
        this.prefillDate();
        i.chainData &&
          i.chainData.Roots[i.rootIndex] &&
          i.chainData.Roots[i.rootIndex].IsAdjusted &&
          i.logHitBox("MiniChainsAdjTab");
        this.showContractDetails();
        this.paintExpButtons();
        this.highlightRoot();
        this.show();
        this.paintRows();
        this.highlightITM();
      });
      t.addSymbolSelectedHandler(function (t, r, u) {
        var e = jQuery("#" + i.activeTextFieldId),
          o,
          s,
          h;
        e.attr("value", u);
        e.get(0).createTextRange && f(e)
          ? ((o = e.get(0).createTextRange()),
            o.move("character", u.length),
            o.select())
          : e.get(0).focus();
        this.hide();
        s = e.data(n);
        s &&
          ((h = s.MiniChains.CallBack),
          typeof h == "function" && h.call(e.get(0)));
      });
      t.addKeyDownHandler(function (n, t, r) {
        var o, u, e;
        if (this.isVisible()) {
          if (
            ((o = document.selection
              ? document.selection.createRange().text
              : f(t)
              ? t.value.substring(t.selectionStart, t.selectionEnd)
              : ""),
            (u = !1),
            o.length === 0)
          )
            switch (r) {
              case 9:
                return !1;
              case 37:
                this.scrollExpButtons();
                i.cpIndex == "C"
                  ? ((i.cpIndex = null), (i.strikeIndex = -1))
                  : i.cpIndex == "P" && (i.cpIndex = "C");
                break;
              case 39:
                jQuery(document.activeElement).blur();
                this.scrollExpButtons();
                i.cpIndex == "C"
                  ? (i.cpIndex = "P")
                  : i.cpIndex ||
                    ((e = i.getMoneyMatch().index),
                    (i.cpIndex = "C"),
                    i.strikeIndex == -1 &&
                      (i.strikeIndex =
                        e > 0
                          ? i.chainData &&
                            i.chainData.Roots[i.rootIndex] &&
                            i.chainData.Roots[i.rootIndex].IsAdjusted
                            ? 0
                            : e
                          : 0));
            }
          switch (r) {
            case 38:
              this.scrollExpButtons();
              i.cpIndex && i.strikeIndex > 0
                ? --i.strikeIndex
                : i.strikeIndex < 0 &&
                  i.expIndex > 0 &&
                  (--i.expIndex, (u = !0));
              i.cancelHover = !0;
              i.cancelBlur = !0;
              t.blur();
              break;
            case 40:
              this.scrollExpButtons();
              i.strikeIndex < 0 &&
              i.expIndex < i.chainData.Roots[i.rootIndex].Expirations.length - 1
                ? (++i.expIndex, (u = !0))
                : i.cpIndex &&
                  i.chainData.Roots[i.rootIndex].Expirations[i.expIndex] &&
                  i.chainData.Roots[i.rootIndex].Expirations[i.expIndex]
                    .Strikes &&
                  i.strikeIndex <
                    i.chainData.Roots[i.rootIndex].Expirations[i.expIndex]
                      .Strikes.length -
                      1 &&
                  ++i.strikeIndex;
              i.cancelHover = !0;
              i.cancelBlur = !0;
              t.blur();
              break;
            case 9:
            case 17:
            case 13:
              return;
          }
          u && jQuery(this).trigger("expChange", [this, i.expIndex]);
          this.highLightRow(i.strikeIndex, i.cpIndex);
        }
      });
      t.addKeyUpHandler(function (n, r, u) {
        var e = r.value.split(" ")[0].toUpperCase(),
          h,
          c,
          s,
          l,
          o,
          f;
        switch (u) {
          case 9:
          case 17:
          case 16:
          case 144:
          case 37:
          case 39:
            return;
          case 38:
          case 40:
            if (this.isVisible()) {
              n.preventDefault();
              return;
            }
            break;
          case 13:
            if (
              this.isVisible() &&
              i.chainData.Roots[i.rootIndex].Expirations.length > i.expIndex &&
              i.strikeIndex > -1
            ) {
              i.cpIndex &&
                ((h =
                  i.chainData.Roots[i.rootIndex].Expirations[i.expIndex]
                    .Strikes[i.strikeIndex]),
                "CP".indexOf(i.cpIndex) > -1 &&
                  ((c =
                    i.chainData.Roots[i.rootIndex].Symbol +
                    " " +
                    i.chainData.Roots[i.rootIndex].Expirations[
                      i.expIndex
                    ].Date.fixDate() +
                    " " +
                    h.formatDecimal(2, 3) +
                    " " +
                    i.cpIndex),
                  jQuery(this).triggerHandler("symbolSelected", [this, c])));
              return;
            }
            i.isPresentationSymbol(r.value.trim()) &&
              i.makeChainRequest(e, "underlying", function () {
                t.replaceRoot(r, i.response);
              });
            break;
          case 32:
            if (!this.isVisible() && i.isPresentationSymbol(r.value.trim()))
              return;
        }
        if (
          ((s = i.chainData && i.chainData.Underlying == e),
          !s && i.chainData.Roots)
        )
          for (
            l = this.isVisible() ? e.replace(/[$\/]/g, "") : e, o = 0;
            o < i.chainData.Roots.length;
            ++o
          )
            if (
              i.chainData.Roots[o] &&
              i.chainData.Roots[o].Symbol &&
              i.chainData.Roots[o].Symbol.indexOf(l) == 0
            ) {
              s = !0;
              break;
            }
        if (s) {
          if (
            ((f = i.getMatchInfo(i.translate(r.value))),
            f.IsMismatch() || f.RootIndex < 0)
          ) {
            this.hide();
            return;
          }
          if (f.RootIndex > -1) {
            if (
              f.ExpIndex > -1 &&
              f.StrikeIndex > -1 &&
              this.isVisible() &&
              f.IsGoodMatch()
            ) {
              r.value = r.value.toUpperCase();
              this.hide();
              return;
            }
            (i.rootIndex != f.RootIndex || i.expIndex != f.ExpIndex) &&
              ((i.rootIndex = f.RootIndex),
              (i.expIndex = f.ExpIndex > -1 ? f.ExpIndex : 0),
              this.highlightRoot(),
              this.showContractDetails(),
              this.paintExpButtons(),
              this.show(),
              this.paintRows(),
              this.highlightITM());
            this.highLightRow(f.StrikeIndex, f.CP);
            i.strikeIndex = f.StrikeIndex;
            i.cpIndex = f.CP;
          }
          f.IsGoodMatch() ||
            this.isVisible() ||
            ((i.rootIndex = f.RootIndex > -1 ? f.RootIndex : 0),
            (i.expIndex = f.ExpIndex > -1 ? f.ExpIndex : 0),
            (i.strikeIndex = f.StrikeIndex),
            (i.cpIndex = f.CP),
            this.highlightRoot(),
            this.showContractDetails(),
            this.paintExpButtons(),
            this.show(),
            this.paintRows(),
            this.highlightITM(),
            this.highLightRow(f.StrikeIndex, f.CP));
          u != 8 && u != 46 && t.completeDate(f);
        } else i.isPresentationSymbol(e) || (t.hide(), i.makeChainRequest(e, "Underlying"));
      });
    }
    function ft() {
      var l = new nt(),
        h = new d(l),
        p = new g(h, l),
        i = new it(),
        s = new rt(i),
        tt = new ut(s, i),
        a = this,
        o = h,
        v = function (n) {
          return n == 255 ||
            n === 9 ||
            n === 16 ||
            n === 17 ||
            (n >= 18 && n <= 20) ||
            n === 27 ||
            (n >= 33 && n <= 36) ||
            (n >= 44 && n <= 45)
            ? !0
            : !1;
        },
        y;
      this.AttachLink = function (n, t) {
        var i = typeof t == "string" ? jQuery("#" + t) : jQuery(t),
          r = this;
        i.attr("href", "javascript:void(0)").click(function () {
          r.ShowAdvancedSearch(n);
        });
      };
      this.getController = function (n) {
        return n.toLowerCase() === "minichain" ? tt : p;
      };
      this.getModel = function (n) {
        return n.toLowerCase() === "minichain" ? i : l;
      };
      this.getView = function (n) {
        return n.toLowerCase() === "minichain" ? s : h;
      };
      this.AttachTextField = function (r, e) {
        var l, c, y, p;
        u();
        l = typeof r == "string" ? jQuery("#" + r) : jQuery(r);
        c = l.data(n);
        c ||
          ((c = t),
          (y = function (t) {
            return function (i) {
              var r = jQuery(this).data(n);
              (o !== h || r.AutoComplete.Mode.toLowerCase() != "disabled") &&
                (o !== s || r.MiniChains.Mode.toLowerCase() != "disabled") &&
                (i.originalEvent && i.stopPropagation(),
                a.setActiveID(this.id),
                v(i.keyCode) ||
                  ((i.keyCode === 40 ||
                    i.keyCode === 38 ||
                    (i.keyCode === 13 && o.isVisible())) &&
                    i.preventDefault(),
                  jQuery(o).trigger(t, [this, i.keyCode])));
            };
          }),
          l
            .attr("autocomplete", "off")
            .keypress(y("keypress"))
            .keydown(y("keydown"))
            .keyup(function (t) {
              if (v(t.keyCode)) t.keyCode === 27 && o.hide();
              else {
                a.setActiveID(this.id);
                t.originalEvent && t.stopPropagation();
                var u = jQuery(this),
                  r = u.data(n),
                  e = t.keyCode <= 40 && t.keyCode >= 37;
                if (r)
                  switch (r.MiniChains.Mode.toLowerCase()) {
                    case "optionsonly":
                      o =
                        a.isPossibleOptionSymbol(this.value) ||
                        (s.isVisible() && i.rootExists(this.value))
                          ? s
                          : h;
                      break;
                    case "mixed":
                      o =
                        s.isVisible() &&
                        (t.keyCode === 13 ||
                          e ||
                          a.isPossibleOptionSymbol(this.value) ||
                          i.rootExists(this.value))
                          ? s
                          : h;
                      break;
                    default:
                      o = h;
                  }
                if (o == h) {
                  if (r.AutoComplete.Mode.toLowerCase() === "disabled") return;
                  s.hide();
                } else h.hide();
                f(u) && jQuery(o).triggerHandler("keyup", [this, t.keyCode]);
              }
            })
            .blur(function (t) {
              var i = jQuery(this).data(n);
              t.originalEvent && t.stopPropagation();
              o.isVisible() && jQuery(o).triggerHandler("blur", [this]);
              s.isVisible() &&
                i.MiniChains.Mode.toLowerCase() == "optionsonly" &&
                (o = s);
            })
            .change(function () {
              if (
                !o.isVisible() &&
                c.MiniChains.Mode.toLowerCase() != "disabled" &&
                i.isPresentationSymbol(this.value)
              ) {
                var n = this,
                  t = this.value.split(" ")[0];
                a.requestMiniChain(t, function (t) {
                  s.replaceRoot(n, t);
                });
              }
            })
            .click(function (t) {
              this.id == i.activeTextFieldId && s.isVisible()
                ? t.stopPropagation()
                : s.isVisible() ||
                  (jQuery(s).trigger("fieldClick"), jQuery(window.document.body).click());
              var u = jQuery(this).data(n),
                r = jQuery(this).attr("id"),
                f = jQuery(this).attr("value").trim();
              u.MiniChains.Mode.toLowerCase() != "disabled" &&
                u.MiniChains.ShowOnClick &&
                ((i.activeTextFieldId == r && !s.isVisible()) ||
                  i.activeTextFieldId != r) &&
                i.isPresentationSymbol(f) &&
                (a.setActiveID(r),
                i.makeChainRequest(f.split(" ")[0], "Underlying"),
                (o = s),
                t.stopPropagation());
            }));
        e || (e = {});
        p = jQuery.extend(!0, {}, c, e);
        l.data(n, p);
      };
      this.requestMiniChain = function (n, t) {
        u();
        var r = t
          ? function () {
              !i.response || (i.response.Status && i.response.Status == 404)
                ? i.makeChainRequest(n, "Root", function () {
                    t(i.response);
                  })
                : t(i.response);
            }
          : null;
        i.makeChainRequest(n, "Underlying", r);
      };
      this.convertToRootSymbol = function (n, t) {
        for (
          var e, u = i.getMatchInfo(n, t), f = "", r = 1;
          r < u.Matches.length;
          ++r
        ) {
          if (!u.Values[r]) break;
          e = u.Matches[r] ? u.Matches[r] : u.Values[r];
          f += e + " ";
        }
        return f.trim();
      };
      this.Initialize = function () {
        var n, t;
        u();
        n = k(window.name).split("|");
        n.length == 3 &&
          (jQuery("#" + n[0]).attr("value", n[1]),
          (window.name = n[2]),
          jQuery(h).trigger("symbolSelected", [this, n[1]]));
        t = function (n) {
          return function (t) {
            if (o.isVisible()) {
              var r = t.keyCode;
              switch (r) {
                case 27:
                  o.hide();
                  s.announceClose();
                  setTimeout(function () {
                    jQuery("#" + i.activeTextFieldId).focus();
                  }, 10);
                  return;
                case 32:
                case 37:
                case 38:
                case 39:
                case 40:
                  t.stopImmediatePropagation();
                  t.preventDefault();
              }
              r === 32 && (r = 13);
              jQuery(o).triggerHandler(n, [jQuery("#" + i.activeTextFieldId).get(0), r]);
            }
          };
        };
        jQuery(window.document)
          .keydown(t("keydown"))
          .keyup(t("keyup"))
          .blur(function () {
            o === h &&
              l.cancelBlur !== !0 &&
              o === s &&
              i.cancelBlur !== !0 &&
              o.hide();
          });
        jQuery(window).resize(function () {
          setTimeout(function () {
            o.isVisible() && o.show();
          }, 0);
        });
        e &&
          jQuery(window).scroll(function () {
            o.isVisible() && o.show();
          });
      };
      this.JsonpCallback = function (n, t) {
        switch (n) {
          case "option":
            i.setResponse(t);
            break;
          case "nonoption":
            l.setResponse(t);
            break;
          default:
            l.setResponse(t);
            i.setResponse(t);
        }
      };
      this.setActiveID = function (n) {
        l.activeTextFieldId = n;
        i.activeTextFieldId = n;
      };
      this.SetAsDefault = function (n) {
        t = jQuery.extend(!0, {}, t, n);
      };
      this.IsChinese = r;
      this.IsChrome = b;
      this.isPossibleOptionSymbol = function (n) {
        var t = n.match(/^[\$A-Z0-9\/]{1,6}\s+([^\d]{0,})/i);
        return t ? (t[1] ? !1 : !0) : !1;
      };
      this.ShowAdvancedSearch = function (n) {
        var t = typeof n == "string" ? jQuery("#" + n) : jQuery(n);
        this.setActiveID(t.attr("id"));
        jQuery(h).trigger("symbolLookupClick", [this]);
      };
      this.SetSymbol = function (t, i) {
        var r = typeof i == "string" ? jQuery("#" + i) : jQuery(i),
          u,
          f;
        r.attr("value", t);
        u = r.data(n);
        u &&
          u.SymbolLookup &&
          ((f = r.data(n).SymbolLookup.CallBack),
          typeof f == "function" && f.call(r.get(0)));
      };
      h.addChainsClickHandler(function (n, t, r) {
        o = s;
        i.makeChainRequest(r, "Underlying");
      });
      y = function () {
        var f = jQuery("#" + l.activeTextFieldId),
          v = f
            .attr("value")
            .replace(/\+/g, "%2B")
            .replace("#", "%23")
            .replace(/\//g, "%2F")
            .replace(/\s/g, "+"),
          i = f.data(n),
          o,
          s;
        i ||
          ((o = { AutoComplete: {}, SymbolLookup: {} }),
          f.attr("directory") && (o.AutoComplete.DataUrl = f.attr("directory")),
          SuggestionBox.ResourceKey &&
            (o.SymbolLookup.ResourceKey = SuggestionBox.ResourceKey),
          (i = jQuery.extend(!0, {}, t, o)));
        var e = i.SymbolLookup.DataUrl + "?criteria=" + v,
          h = i.AutoComplete.DataUrl.toUpperCase(),
          u = "STK,MFD,ETF,BND,PFD,IDX",
          y = h.indexOf("/") > -1 ? h.substring(h.lastIndexOf("/") + 1) : "ALL";
        switch (y) {
          case "STK":
            u = "STK,ETF,PFD";
            break;
          case "ETF":
            u = "ETF";
            break;
          case "MF":
            u = "MFD";
            break;
          case "BND":
            u = "BND";
            break;
          case "EUK":
            u = "STK,BND,PFD";
            break;
          case "STK_PFD":
            u = "STK,PFD";
        }
        e +=
          "&filter=" +
          u +
          "&newsite=y&callbackDomains=" +
          i.SymbolLookup.CallbackDomains +
          "&ResourceKey=" +
          i.SymbolLookup.ResourceKey;
        i.SymbolLookup.Site == "useDefault"
          ? ((s = c("AcctInfo")),
            (e += r
              ? "&site=CWT"
              : s == "0*LN" || s == "0*N5" || s == "0*N7"
              ? "&site=EUK"
              : "&site=DWT"))
          : (e += "&site=" + i.Site);
        e += "&fieldId=" + f.attr("id");
        e += "&invoker=" + w(window.location.href);
        var p = f.attr("id") + "|" + window.location,
          b = w(p),
          a = window.open(
            e,
            b,
            "width=" +
              i.SymbolLookup.Width +
              ",height=" +
              i.SymbolLookup.Height +
              ",status=no,toolbar=no,menubar=no,location=no,scrollbars=no,resizable=yes"
          );
        a && a.focus();
      };
      h.addSymbolLookupClickHandler(y);
    }
    var f = function (n) {
        var n = n instanceof jQuery ? n : jQuery(n);
        return n.is("input:text") || n.is("textarea");
      },
      e = (function () {
        if (jQuery.browser.msie) {
          var n = parseInt(jQuery.browser.version, 10);
          return n < 9;
        }
        return !1;
      })(),
      h = (function () {
        var n = parseInt(jQuery.browser.version, 10);
        return jQuery.browser.msie && n < 7
          ? !1
          : navigator.userAgent.match(/ipad|iphone|itouch/i) && n < 534
          ? !1
          : !0;
      })(),
      n = "SuggestionBox.Settings",
      o = {},
      c = function (n) {
        for (var t, r = document.cookie.split(";"), i = 0; i < r.length; i++)
          if (((t = r[i].trim()), t.indexOf(n + "=") === 0))
            return t.substring(n.length + 1, t.length);
        return null;
      },
      b = navigator.userAgent.toLowerCase().indexOf("chrome") > -1,
      r =
        c("lang") === "zh-TW" ||
        (window.CHANCONF && window.CHANCONF.Locale === "zh-TW"),
      t = {
        SuggestionBox: { BlankSrc: "/images/N.gif" },
        AutoComplete: {
          Position: "",
          SecurityType: "All",
          Mode: "",
          DataUrl: "https://client.schwab.com/symlup",
          CallBack: function () {},
        },
        MiniChains: {
          ShowOnClick: !1,
          Position: "",
          Mode: "mixed",
          DataUrl: "https://client.schwab.com/symlup/OptionsCwp",
          QuoteUrl: "/InfoDetailedQuoteJson.ashx",
          ChainsUrl: "/Areas/Trade/Options/Chains/Index.aspx",
          HelpUrl:
            "https://client.schwab.com/secure/cc/help/trade/options/non_standard_expirations?cmsid=P-3902899&lvl1=help&lvl2=trade#FAQ4",
          CallBack: function () {},
          OnShow: null,
          OnClose: null,
          StrikeCount: 12,
        },
        SymbolLookup: {
          DataUrl:
            document.domain == "schwab.com"
              ? "/symluphtmfiles/dor/SymbolLookup.html"
              : "/symluphtmfiles/SymbolLookup.html",
          CallbackDomains: "",
          ResourceKey: "",
          Site: "useDefault",
          Mode: "Enabled",
          Height: 760,
          Width: 630,
          CallBack: function () {},
        },
      },
      l = !1,
      a = function (n) {
        for (
          var i = n.split("//")[1].split("."), r = "", t = 0;
          t < i.length - 2;
          ++t
        )
          (r += i[t]), t != i.length - 3 && (r += ".");
        return r;
      },
      u = function () {
        window.CHANCONF &&
          CHANCONF.CMSServer &&
          CHANCONF.NETServer &&
          !l &&
          ((t.SuggestionBox.BlankSrc = CHANCONF.CMSServer + "/images/N.gif"),
          (t.SymbolLookup.CallbackDomains =
            a(CHANCONF.NETServer) + ",y|" + a(CHANCONF.CMSServer) + ",y"),
          (t.AutoComplete.DataUrl = CHANCONF.CMSServer + "/symlup"),
          (t.MiniChains.DataUrl = CHANCONF.CMSServer + "/symlup/OptionsCwp"),
          (t.MiniChains.QuoteUrl =
            CHANCONF.NETServer + "/InfoDetailedQuoteJson.ashx"),
          (t.MiniChains.ChainsUrl =
            CHANCONF.NETServer + "/Areas/Trade/Options/Chains/Index.aspx"),
          (t.MiniChains.HelpUrl =
            CHANCONF.CMSServer +
            "/secure/cc/help/trade/options/non_standard_expirations?cmsid=P-3902899&lvl1=help&lvl2=trade#FAQ4"),
          (l = !0));
      },
      v = function (n) {
        var t = n;
        switch (n) {
          case "aux":
          case "prn":
          case "con":
          case "nul":
          case "com2":
            t = n + "__";
            break;
          default:
            t = n
              .replace("*", "_2a_")
              .replace(":", "_3a_")
              .replace(".", "_2e_")
              .replace("&", "_26_")
              .replace("/", "_2f_")
              .replace("\\", "_5c_");
        }
        return t;
      },
      y = function (n) {
        if (!o[n]) {
          var i = "matt_" + n,
            t = jQuery(window.document.body).find("#" + i);
          t.length === 0 &&
            ((t = jQuery('<div id="' + i + '" class="overlay-shadow"></div>')),
            jQuery(window.document.body).append(t));
          o[n] = t;
        }
        return o[n];
      },
      p = function (n) {
        e && y(n).hide();
      },
      s = function (n, t) {
        if (e) {
          var i = y(t),
            r = function(){}