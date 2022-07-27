/*
 *  requires jQuery
 */

;(function($) {
    "use strict";

    var MF = window.MF || {};

    var defaultOptions = {};

    MF.requestResult = (function() {

        var options;

        var status = {
            SUCCESS: "SUCCESS",
            FAIL: "FAIL",
            ERROR: "ERROR"
        };

        function withStatus(expectedStatus, result) {
            return result && result.status === expectedStatus;
        }

        function withReason(reasonCode, result) {
            return result && result.data.reason === reasonCode;
        }

        function defineFilter(handler, filterFunc) {
            return function(filterValue) {
                handler.filters.push(_.partial(filterFunc, filterValue));
                return handler;
            };
        }

        function injectFilters(handler) {
            handler.filters = [];
            handler.withStatus = defineFilter(handler, withStatus);
            handler.withReason = defineFilter(handler, withReason);
        }

        function handleResponse(callback) {
            var responseHandler = function handler(result) {
                var canExecuteCallback = _.all(handler.filters, function(filter) {
                    return filter(result);
                });

                if(canExecuteCallback) {
                    return callback(result);
                }

                return result;
            };

            injectFilters(responseHandler);

            return responseHandler;
        }

        function onSuccess(callback) {
            return handleResponse(callback).withStatus(status.SUCCESS);
        }

        function onError(callback) {
            return handleResponse(callback).withStatus(status.ERROR);
        }

        function onFail(callback) {
            return handleResponse(callback).withStatus(status.FAIL);
        }

        function init(opts) {
            options = $.extend({}, defaultOptions, opts);
        }

        return {
            init: init,
            status: status,
            handle: handleResponse,
            onSuccess: onSuccess,
            onError: onError,
            onFail: onFail
        };

    })();

    window.MF = MF;

}(jQuery));

MF.requestResult.init();

/*global window:true */

window.Breakpoints = (function (window, document) {
	'use strict';

	var B = {},
	resizingTimeout = 0,
	breakpoints = [],
	hasFullComputedStyleSupport = null,

	TEST_FULL_GETCOMPUTEDSTYLE_SUPPORT = 'js-breakpoints-getComputedStyleTest',
	TEST_FALLBACK_PROPERTY = 'position',
	TEST_FALLBACK_VALUE = 'absolute',

	// thanks John Resig
	addEvent = function (obj, type, fn) {
	  if (obj.attachEvent) {
	    obj['e'+type+fn] = fn;
	    obj[type+fn] = function () {obj['e'+type+fn]( window.event );};
	    obj.attachEvent('on'+type, obj[type+fn]);
	  } else {
	    obj.addEventListener(type, fn, false);
	  }
	},

	debounce = function (func, wait, immediate) {
		var timeout, result;
		return function() {

			var context = this, args = arguments;
			var later = function() {
				timeout = null;
				if (!immediate) result = func.apply(context, args);
			};

			var callNow = immediate && !timeout;
			clearTimeout(timeout);
			timeout = setTimeout(later, wait);
			if (callNow) result = func.apply(context, args);
			return result;
		};
	},

	injectElementWithClassName = function (parent, className, callback) {
		var div = document.createElement('div');
		div.className = 'js-breakpoints-' + className;
		parent.appendChild(div);
		callback(div);
		div.parentNode.removeChild(div);
	},

	check = function (breakpoint) {
		var match = B.isMatched(breakpoint);

		if (match && !breakpoint.isMatched) {
			breakpoint.matched.call(breakpoint.context);
			breakpoint.isMatched = true;
		} else if (!match && breakpoint.isMatched) {
			breakpoint.exit.call(breakpoint.context);
			breakpoint.isMatched = false;
		}
		return breakpoint;
	},

	onWindowResize = function () {
		for( var i = 0; i < breakpoints.length; i++ ) {
			check(breakpoints[i]);
		}
	},

	getStyle = function (el, pseudo, property) {
		if (window.getComputedStyle) {
			return window.getComputedStyle(el, pseudo).getPropertyValue(property);
		}
		else if (el.currentStyle && pseudo.length === 0) {
			return el.currentStyle[property];
		}
		return '';
	},

	/*
	 * If not already checked:
	 * 1. check if we have getComputedStyle and check if we can read pseudo elements
	 */
	checkComputedStyleSupport = function () {
		if (hasFullComputedStyleSupport !== null) {
			return;
		}

		hasFullComputedStyleSupport = false;
		
		if (window.getComputedStyle) {
			var content = window.getComputedStyle(document.documentElement, ':after').getPropertyValue('content');
			hasFullComputedStyleSupport = content.replace(/\"/g, "") === TEST_FULL_GETCOMPUTEDSTYLE_SUPPORT;
		}
	},

	init = function () {
		var debounceResize = debounce( onWindowResize, resizingTimeout);
		addEvent(window, 'resize', debounceResize);
		addEvent(window, 'orientationchange', debounceResize);
		return B;
	};

	B.isMatched = function(breakpoint) {
		var el = breakpoint.el || document.body,
		    matched = false,
		    value;

		if (hasFullComputedStyleSupport) {
			value = getStyle(el, ':after', 'content');
			matched = value.replace(/\"/g, "") === breakpoint.name;
		}
		else {
			injectElementWithClassName(el, breakpoint.name, function (el) {
				value = getStyle(el, '', TEST_FALLBACK_PROPERTY);
				matched = value === TEST_FALLBACK_VALUE;
			});
		}

		return matched;
	};

	B.on = function(breakpoint) {
		checkComputedStyleSupport();
		breakpoints.push(breakpoint);
		breakpoint.isMatched = false;
		breakpoint.matched = breakpoint.matched || function() {};
		breakpoint.exit = breakpoint.exit || function() {};
		breakpoint.context = breakpoint.context || breakpoint;
		return check(breakpoint);
	};

	B.off = function (breakpoint) {
		var i = breakpoints.indexOf(breakpoint);
		if (i > -1) {
			breakpoints.splice(i, 1);
		}
	};

	return init();

})(window, document);

/*
 *  require jQuery
 */

;(function ($, window, document) {
  'use strict';

  $.fn.exists = function () {
    return this.length > 0;
  };

  $.fn.isOnScreen = function () {
    var win = $(window);

    var viewport = {
      top: win.scrollTop(),
      left: win.scrollLeft()
    };

    var bounds;

    viewport.right = viewport.left + win.width();
    viewport.bottom = viewport.top + win.height();

    bounds = this.offset();
    bounds.right = bounds.left + this.outerWidth();
    bounds.bottom = bounds.top + this.outerHeight();

    return (!(viewport.right < bounds.left || viewport.left >
    bounds.right || viewport.bottom < bounds.top ||
    viewport.top > bounds.bottom));
  };
}(jQuery, this, this.document));
window.MF = window.MF || {};

$(document).ready(function () {
    // IE9 Placeholders
    if (!Modernizr.input.placeholder) {
        //$('input, textarea').placeholder({customClass: 'ie9-placeholder'});
        $('input, textarea').placeholder();
    }
});

/*
* Avoid `console` errors in browsers that lack a console.
* https://github.com/h5bp/html5-boilerplate/blob/master/src/js/plugins.js
*
*/
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Prevent some buttons to trigger errors in case they are clicked before the page load
// These buttons are disabled by default and will be enabled by this code
(function(){
    $(document).ready(function(){
        $('[data-enable-on-load]').removeAttr('disabled');
    });
})();

/*
 *  requires jQuery
 */

;(function($, window) {
    "use strict";

    var MF = window.MF || {};

    var defaultOptions = {};

    MF.ajaxManager = (function() {
        var options;

        var xhrPool = [], ajaxGroups = {};

        var buildRegexMatcher = function(criteria) {
            var urlPattern = new RegExp(criteria.url);

            return function(jqXHR) {
                return urlPattern.test(jqXHR.url);
            };
        };

        function AjaxGroup(matcher) {
            this.matcher = matcher;

            this.activeRequests = 0;

            this.ajaxStart = $.Callbacks("unique stopOnFalse");
            this.ajaxStop = $.Callbacks("unique stopOnFalse");
        }

        AjaxGroup.prototype.notify = function() {
            var prevActiveRequests = this.activeRequests;

            this.activeRequests = _.filter(xhrPool, this.matcher).length;

            // The first time the matched ajax request starts we fire "ajaxStart" callbacks
            if (prevActiveRequests === 0 && this.activeRequests >= 1) {
                this.ajaxStart.fire();
            }

            // When there no more matched ajax requests anymore we fire "ajaxStop" callbacks
            if (prevActiveRequests > 0 && this.activeRequests === 0) {
                this.ajaxStop.fire();
            }
        };

        function createAjaxGroup(name, options) {
            var matcher = options.matcher || buildRegexMatcher(options.criteria);

            var ajaxGroup = new AjaxGroup(matcher);

            if (_.isFunction(options.ajaxStart)) {
                ajaxGroup.ajaxStart.add(options.ajaxStart);
            }

            if (_.isFunction(options.ajaxStop)) {
                ajaxGroup.ajaxStop.add(options.ajaxStop);
            }

            ajaxGroups[name] = ajaxGroup;

            return ajaxGroup;
        }

        function getAjaxGroup(name) {
            return ajaxGroups[name];
        }

        function removeAjaxGroup(name) {
            ajaxGroups[name] = null;
        }

        function notifyHandlers() {
            _.invoke(ajaxGroups, "notify");
        }

        function setRequestHeaders(jqXHR) {
            // force no-cache an all ajax calls
            jqXHR.setRequestHeader("Cache-Control", "no-store");
        };

        function onAjaxBeforeSend(jqXHR, settings) {
            jqXHR.url = settings.url;

            setRequestHeaders(jqXHR);
            xhrPool.push(jqXHR);
            notifyHandlers();
        }

        function onAjaxComplete(jqXHR) {
            var index = xhrPool.indexOf(jqXHR);
            if (index > -1) {
                xhrPool.splice(index, 1);
                notifyHandlers();
            }
        }

        function abortAll() {
            _.invoke(xhrPool, "abort");
        }

        function init(opts) {
            options = $.extend({}, defaultOptions, opts);

            $.ajaxSetup({
                beforeSend: onAjaxBeforeSend,
                complete: onAjaxComplete,
                cache: false
            });
        }

        return {
            init: init,
            abortAll: abortAll,
            createAjaxGroup: createAjaxGroup,
            getAjaxGroup: getAjaxGroup,
            removeAjaxGroup: removeAjaxGroup
        };

    })();

    window.MF = MF;

}(jQuery, this));

MF.ajaxManager.init();

/*
 *  requires
 */

;(function($, window) {
    "use strict";

    var MF = window.MF || {};

    var jqueryDefaults = $.validator.defaults;

    var isMfSelect = function(el) {
        return el.tagName === "SELECT" && $(el).data("mf-select") !== undefined;
    };

    var clearServerSideError = function(element) {
        var $elementContainer = $(element).closest(".control-group.error");

        $elementContainer.removeClass("error");
        $(".error-message", $elementContainer).remove();
    };

    var defaultSettings = {
        onfocusout: function(element) {
            if(isMfSelect(element)) {
                $(element).valid();
            }
        },
        highlight: function (element, errorClass, validClass) {

            clearServerSideError(element);

            if (isMfSelect(element)) {
                $(element).next(".cs__selected")
                    .addClass(errorClass)
                    .removeClass(validClass);
            } else {
                jqueryDefaults.highlight.call(this, element, errorClass, validClass);
            }
        },
        unhighlight: function (element, errorClass, validClass) {
            if (isMfSelect(element)) {
                $(element).next(".cs__selected")
                    .removeClass(errorClass)
                    .addClass(validClass);
            } else {
                jqueryDefaults.unhighlight.call(this, element, errorClass, validClass);
            }
        }
    };

    var extensions = {
        validateFields: function(/* elements */) {
            var validator = this;
            var $form = $(validator.currentForm);
            var elements = Array.prototype.slice.call(arguments, 0);

            return _.all(elements, function(element) {
                return validator.element($form.find(element));
            });
        },
        formWithContext: function(context) {
            var validator = this;

            validator.context = context;
            var result = validator.form();
            validator.context = {};

            return result;
        }
    };

    MF.validator = (function() {

        var validate = function(form, opts) {
            var $form = $(form);

            var settings = $.extend({}, defaultSettings, opts);
            var validator = $form.validate(settings);

            $.extend(validator, extensions);

            return validator;
        };

        return {
            validate: validate
        };
    }());

    window.MF = MF;

}(jQuery, this));

/*
 *  require
 *
 */

;(function ($, Mediator) {
  'use strict';

  var ChannelPrototype = Mediator.Channel.prototype;

  var addSubscriberBase = ChannelPrototype.addSubscriber;
  var publishBase = Mediator.prototype.publish;

  var resultCollector = [];

  function convertToArray(arrayLikeObj) {
    return Array.prototype.slice.call(arrayLikeObj, 0);
  }

  function isPromise(obj) {
    return obj && typeof obj.then === "function";
  }

  function storeSubscribersResult(result) {
    resultCollector.push(result);
  }

  function resetResultCollector() {
    resultCollector = [];
  }

  function getSubscribersCallResults() {
    return resultCollector.slice();
  }

  /*
   Wrapping the original callback function. Storing the result of the function call.
   If result is a deferrable object (e.g. result of an AJAX call) then we return it.
   If the result is not deferrable then we consider it as deferrable which is immediately resolved
   */
  function wrapFunctionCall(fn) {
    return function () {
      var args = convertToArray(arguments);

      var result = fn.apply(this, args);
      var deferredResult = isPromise(result) ? result : $.Deferred().resolve(result).promise();

      storeSubscribersResult(deferredResult);
    };
  }

  /*
   Calling base implementation of the "addSubscriber" method and wrapping 'fn' callback before that
   */
  ChannelPrototype.addSubscriber = function (fn, options, context) {
    addSubscriberBase.call(this, wrapFunctionCall(fn), options, context);
  };

  Mediator.prototype.publishAsync = function () {
    var results;

    resetResultCollector();

    publishBase.apply(this, convertToArray(arguments));

    results = getSubscribersCallResults();

    /*
     Returning a jQuery Deferred (Promise) object which can be utilized
     to wait until all subscriber results are available
     */
    return $.when.apply(null, results);
  };
}(jQuery, Mediator));
/*
 *  No Dependencies 
 *  
 */

;(function ($, window, document){
  'use strict';

  var MF = window.MF || {};

  MF.skiplinks = (function () {

    function bindAll()
	{
		bindLinks();
	}

	function bindLinks()
	{
		$("a[href^='#']").not("a[href='#']").not('.faq__questions a').click(function()
		{
			var target = $(this).attr("href");
			$(target).attr("tabIndex", -1).focus();
		});
	}

    return {
      bindAll: bindAll
    };

  })();

  window.MF = MF;

}(jQuery, this, this.document));


if ($.browser.webkit)
{
	MF.skiplinks.bindAll();
}


/*
 *  This script links CSS media query breakpoints and JS
 */

;(function($, window) {
    "use strict";

    var MF = window.MF || (window.MF = {});
    var Breakpoints = window.Breakpoints;

    var DESKTOP = "desktop";
    var DESKTOP_LARGE = "desktop-large";
    var MOBILE = "mobile";
    var TABLET = "tablet";

    var defaultOptions = {
        names: [ MOBILE, TABLET, DESKTOP, DESKTOP_LARGE ],
        headerName: "x-media-query-breakpoint"
    };

    MF.breakpoint = (function() {

        var options;
        var activeBreakpoint;

        var callbacks = {
            onChange: $.Callbacks("unique stopOnFalse"),
            onExit: $.Callbacks("unique stopOnFalse")
        };

        var changeActiveBreakpoint = function(name) {
            activeBreakpoint = name;
            callbacks.onChange.fire(activeBreakpoint);
        };

        var exitBreakpoint = function(name) {
            callbacks.onExit.fire(name);
        };

        var initBreakpoints = function() {
            _.each(options.names, function(breakpointName) {
                Breakpoints.on({
                    name: breakpointName,
                    matched: _.partial(changeActiveBreakpoint, breakpointName),
                    exit: _.partial(exitBreakpoint, breakpointName)
                });
            });
        };

        var getActiveBreakpoint = function() {
            return activeBreakpoint;
        };

        var isActive = function(breakpointName) {
            return breakpointName === activeBreakpoint;
        };

        var predicates = {
            isMobile: _.partial(isActive, MOBILE),
            isTablet: _.partial(isActive, TABLET),
            isDesktop: _.partial(isActive, DESKTOP),
            isDesktopLarge: _.partial(isActive, DESKTOP_LARGE)
        };

        var init = function(opts) {
            options = $.extend({}, defaultOptions, opts);

            initBreakpoints();
        };

        return {
            init: init,
            callbacks: callbacks,
            isActive: isActive,
            getActive: getActiveBreakpoint,
            DESKTOP: DESKTOP,
            DESKTOP_LARGE: DESKTOP_LARGE,
            MOBILE: MOBILE,
            TABLET: TABLET
        };

    })();

}(jQuery, this));

MF.breakpoint.init();

;(function ($, window, document) {
    'use strict';

    var MF = window.MF || {};

    MF.select = (function () {
        function init(options) {
            var o = options || {};
            var _callback = o.callback || undefined;
            var cid = o.contextId || 'body';

            // TODO: possibly description needs to be updated because of MF.$ removal
            // IMPORTANT NOT TO USE $('[data-mf-select]', cid) approach.
            // This is done to allow contextId to be a jQuery object as well, not only a string.
            //
            // Current method returns the select element wrapped around MF.$ which has the selecter 
            // plugin defined.
            // Using $('[data-mf-select]', cid) method returns the select element wrapped around
            // jQuery (when contextId was created using jQuery) which doesn't have the selecter plugin
            // and an 'undefined is not a function' error will occur.
            return $(cid).find('[data-mf-select]').andSelf().filter('[data-mf-select]').selecter({
                callback: _callback,
                slideDown: o.slideDown || false,
                links: o.links || false,
                customClass: o.customClass || ''
            });
        }

        function updateSelectedValue(context) {
            var newLabel = $('[data-mf-select]', context).find(":selected").html();
            $(context).find(".cs__selected").html(newLabel);
        }

        function refresh(context) {
            $(context).find('[data-mf-select]').selecter('refresh');
            updateSelectedValue(context);
        }

        function disable(context) {
            $(context).find('[data-mf-select]').andSelf().filter('[data-mf-select]').selecter('disable');
        }

        function enable(context) {
            $(context).find('[data-mf-select]').andSelf().filter('[data-mf-select]').selecter('enable');
        }

        return {
            init: init,
            refresh: refresh,
            disable: disable,
            enable: enable
        };
    })();

    window.MF = MF;
}(jQuery, this, this.document));
/*
 *  requires
 */

;(function($, window) {
    'use strict';

    var MF = window.MF || {};

    var defaultOptions = {
        contentClass: ".modal-content",
        confirmationContentClass: ".modal-confirmation-content",
        confirmationCloseClass: ".modal-confirmation-close"
    };

    MF.modal = (function() {

        var options;

        function showConfirmation(modal, confirmCallback) {
            $(modal).find(options.contentClass).hide();
            $(modal).find(options.confirmationContentClass).show();

            $(modal).on("reveal:close", function() {
                if (confirmCallback) {
                    confirmCallback();
                }
            });

            $(modal).find(options.confirmationCloseClass).on("click", function() {
                $(this).trigger("reveal:close");
            });
        }

        function init(opts) {
            options = $.extend({}, defaultOptions, opts);
        }

        return {
            init: init,
            showConfirmation: showConfirmation
        };

    })();

    window.MF = MF;

}(jQuery, this));

MF.modal.init();

/*
 * MF.tooltip
 *
 * Copyright (c) 2019 MatchesFashion
 * Licensed under the MIT license.
 *
 */
(function($) {
    'use strict';

    var MF = window.MF || {};

    MF.tooltip = (function() {
        function bindEvent(tooltips) {
            tooltips.on('click', callback);
        }

        function callback(e) {
            e.preventDefault();
            var modal = $(e.target).next('.js-tooltip-target');

            modal.toggleClass('show');
        }

        function init() {
            var tooltips = $('.js-tooltip-trigger');
            bindEvent(tooltips);
        }

        return {
            init: init
        };

    })();

    window.MF = MF;

}(jQuery));

/*
 * MF.visiblePassword
 *
 * Copyright (c) 2019 MatchesFashion
 * Licensed under the MIT license.
 *
 */
(function($) {
    'use strict';

    var MF = window.MF || {};

    MF.visiblePassword = (function() {
        var defaults = {
            inputSelector: '.js-showhide-password',
            buttonSelector: '.js-showhide-button',
            activeClass: 'show-hide-password-active',
            passwordShowText: ACC.loginPasswordShow || '',
            passwordHideText: ACC.loginPasswordHide || '',
            showHideButton: '<span class="show-hide-password-button js-showhide-button" href="#"></span>'
        };

        function trackEvent(action) {
            $(document).trigger('analytics.interaction', {
                interaction: 'User ' + action + ' password field'
            });
        }

        function toggleFieldType(input, button) {
            var currentType = input.getAttribute('type');
            if (currentType === 'password') {
                input.setAttribute('type', 'text');
                button.text(defaults.passwordHideText);
                trackEvent('SHOW');
            } else {
                input.setAttribute('type', 'password');
                button.text(defaults.passwordShowText);
                trackEvent('HIDE');
            }
        }

        function togglePassword(e) {
            var button = $(e.target);
            var input = button.parent().find(defaults.inputSelector);
            toggleFieldType(input[0], button);
        }

        function bindEvents() {
            $(defaults.buttonSelector).on('click', togglePassword);
            $(defaults.inputSelector).on('keyup', showHideButton);
        }

        function createButton(el) {
            var button = $(defaults.showHideButton);
            button.text(defaults.passwordShowText);
            el.after(button);
        }

        function showButton(el) {
            el.addClass(defaults.activeClass);
            el.nextAll(defaults.buttonSelector).addClass('show');
        }

        function hideButton(el) {
            el.removeClass(defaults.activeClass);
            el.nextAll(defaults.buttonSelector).removeClass('show');
        }

        function showHideButton(e) {
            if (e.target.value.length > 0) {
                showButton($(this));
            } else {
                hideButton($(this));
            }
        }

        function init() {
            $(defaults.inputSelector).each(function() {
                createButton($(this));
            });

            bindEvents();
        }

        return {
            init: init
        };

    })();

window.MF = MF;

}(jQuery));

/*
 * MF.rememberMe
 * just tracking for hybris plugin
 *
 * Copyright (c) 2019 MatchesFashion
 * Licensed under the MIT license.
 *
 */
(function($) {
    'use strict';

    var MF = window.MF || {};

    MF.rememberMe = (function() {
        var defaults = {
            helpSelector: '.rememberme-section__help .js-tooltip-trigger',
            checkboxSelector: '#_spring_security_remember_me'
        };

        function trackHelpTooltipClick() {
            var tooltipState = $(defaults.helpSelector).next().hasClass('show');
            var tooltipAction = tooltipState ? 'SHOW' : 'HIDE';
            $(document).trigger('analytics.interaction', {
                interaction: 'User ' + tooltipAction + ' What is this'
            });
        }

        function trackCheckboxClick() {
            var checkboxState = $(defaults.checkboxSelector).attr('checked');
            var checkboxAction = checkboxState === 'checked' ? 'TICKS' : 'UNTICKS';
            $(document).trigger('analytics.interaction', {
                interaction: 'User ' + checkboxAction + ' Remember Me checkbox'
            });
        }

        function bindEvents() {
            $(defaults.helpSelector).on('click', trackHelpTooltipClick);
            $(defaults.checkboxSelector).on('click', trackCheckboxClick);
        }

        function init() {
            bindEvents();
        }

        return {
            init: init
        };

    })();

window.MF = MF;

}(jQuery));

/*
 *  requires
 */

;(function($, window, formMode) {
    'use strict';

    var MF = window.MF || {};

    var defaultOptions = {
        data: {
            pageUrl: "page-url",
            newPageUrl: "new-page-url"
        }
    };

    MF.page = (function() {

        var options;

        var getPageByDataUrl = function() {
            var url = $(this).data(options.data.pageUrl);
            window.location = url;
        };

        var getNewPageByDataUrl = function() {
            var url = $(this).data(options.data.newPageUrl);
            window.open(url);
        };

        function init(opts) {
            options = $.extend({}, defaultOptions, opts);

            $(function() {
                $("[data-" + options.data.pageUrl + "]").on("click", getPageByDataUrl);
                $("[data-" + options.data.newPageUrl + "]").on("click", getNewPageByDataUrl);
            });

            //this forces firefox to refresh the page (and trigger document.ready and window.onload events) when user uses the history buttons
            $(window).on('unload beforeunload', function(){});
        }

        return {
            init: init
        };

    })();

    window.MF = MF;

}(jQuery, this, MF.formMode));

MF.page.init();

/*
 *  requires
 *  ACC
 */

;(function ($, window, ACC) {
  'use strict';

  var MF = window.MF || {};

  MF.globalData = (function () {
    function getHeaderdata() {
      $.ajax({
        beforeSend: function (request) {
          request.setRequestHeader('Cache-Control', 'no-store');
        },
        url: '/ajax/headerdata',
        type: 'GET',
        cache: false,
        xhrFields: {
          withCredentials: true
        },
        success: function handleHeaderData(data) {
          ACC.headerdata = data;

          window.dispatchEvent(new CustomEvent('headerData', { detail: data }));

          window.mediator.publish('headerDataReceived');
          // legacy spelling error: for listeners outside our codebase
          window.mediator.publish('headerDataRecieved');
        }
      });
    }

    function init() {
      getHeaderdata();
    }

    return {
      init: init
    };

  })();

  window.MF = MF;
}(jQuery, this, window.ACC));

MF.globalData.init();

;(function($){
    "use strict";
    var MF = window.MF = window.MF || {};
    var $spinner, preloader;
    // preload the spinner but delay it late after document ready
    $(function() {
        setTimeout(function(){
            preloader = $('<img class="spinner" src="' + ACC.config.commonResourcePath + '/images/svg/preloader.gif" />');
        }, 300);
    })
    MF.spinnerHandler = (function(){
        function showSpinner(button, css) {
            // show spinner
            // also disable the button
            css = css || {};
            $spinner = $spinner
                || $('<img class="spinner" src="' + ACC.config.commonResourcePath + '/images/svg/preloader.gif" />')
                        .css({
                            width: '18px',
                            height: '18px',
                            'vertical-align': 'middle',
                            'margin-right': '6px',
                            'opacity': '0.9',
                            'margin-left': '-28px'
                        }).css( css );
            $(button).prepend($spinner);
            // disable button to prevent multiple click on it
            // delay the disabling not to affect the submission of the form
            setTimeout(function(){
                $(button).prop('disabled', true);
            }, 1);
            return true; //do not interfere with the validation result
        }
        function hideSpinner(button) {
            // hide spinner
            // also enable the button
            $(button).find('.spinner').remove();
            setTimeout(function(){
                $(button).prop('disabled', false)
            }, 1)
        }
        return {
            showSpinner: showSpinner,
            hideSpinner: hideSpinner
        }
    })()
})(jQuery);

;(function($){
    "use strict";
    var MF = window.MF = window.MF || {};
    var $spinner, $background;

    MF.busyOverlay = (function(){
        function enable() {
            $background = $('<div class="busy-overlay__background"></div>');
            $spinner = $('<img class="busy-overlay__icon" src="' + ACC.config.commonResourcePath + '/images/svg/preloader.gif" />');
            $('body').prepend($background);
            $('body').prepend($spinner);
            return true;
        }
        function disable() {
            $spinner = $('.busy-overlay__icon');
            $background = $('.busy-overlay__background');
            $spinner.remove();
            $background.remove();
        }
        return {
            enable: enable,
            disable: disable
        }
    })()
})(jQuery);


/*
 *  requires
 *
 * TODO: Mediator initialisation should be moved to MF.js once js and jsRWD issue usage issue are resolved
 */

;(function($) {
    'use strict';

    var MF = window.MF || {};

    MF.checkout = (function() {

        var mediator = new Mediator();

        return {
            mediator: mediator
        };

    })();

    window.MF = MF;

}(jQuery));

/*
 *  requires
 */

;(function($, window) {
    'use strict';

    var MF = window.MF || {};

    var defaultOptions = {
        modeData: "mode",
        inputMarkerClass: ".form_input",
        modeClass: ".mode-{MODE}",
        modeAttribute: "mode-{MODE}"
    };

    MF.formMode = (function() {

        var options;

        var switchModeAttributes = function(form, mode) {
            var dataAttributeName = options.modeAttribute.replace("{MODE}", mode);

            form.find("[data-" + dataAttributeName + "]").each(function() {
                var element = $(this);
                var modeAttributes = element.data(dataAttributeName);
                var attributesExpressions = modeAttributes.split(";");

                $(attributesExpressions).each(function() {
                    var attributeParams = this.split(":");
                    element.attr(attributeParams[0], attributeParams[1]);
                });
            });
        };

        function switchMode (form, mode) {
            form.data(options.modeData, mode);

            var modeClass = options.modeClass.replace("{MODE}", mode);
            form.find(options.inputMarkerClass + ":not(" + modeClass + ")").hide();
            form.find(options.inputMarkerClass + modeClass).show();

            switchModeAttributes(form, mode);
        }

        function checkMode (form, mode) {
            var currentMode = form.data(options.modeData);
            return mode === currentMode;
        }

        function init(opts) {
            options = $.extend({}, defaultOptions, opts);
        }

        return {
            init: init,
            switchMode: switchMode,
            checkMode: checkMode
        };

    })();

    window.MF = MF;

}(jQuery, this));

MF.formMode.init();

/*
 *  requires
 */
;(function ($, window) {
  'use strict';

  var MF = window.MF || {};

  var debug = false;

  MF.customValidationMethods = (function () {

    // This is referencing the new phone validation logic; please see MF.intphoneval.js
    function isIntlTelInputEnabled() {
      var isphoneValidationFieldPresent = document.querySelector('.mfIntPhoneVal');
      if (isphoneValidationFieldPresent) {
        return true;
      }
      return false;
    }

    function customValidationMethods(phoneElement) {
      if (ACC.phoneValidation && !isIntlTelInputEnabled()) {
        $.validator.addMethod('phoneValidate', function(value) {
          var country = $('#address\\.country').val();
          if(debug)
          {
            console.log(' *** Phone Validation ***');
            console.log(' *** Pattern: ' + ACC.validationPattern[country].toString());
            console.log(' *** Number: ' + value);
            console.log(' *** ' + (value.match(ACC.validationPattern[country]) === null ? 'NOT ' : '') + 'VALID');
            console.log(' *** *** *** *** *** ***');
          }
          return !country || value.match(ACC.validationPattern[country]) !== null;
        }, 'phone.phoneValidate');
      }

      if (ACC.phoneValidation && isIntlTelInputEnabled() && phoneElement) {
        $.validator.addMethod('phoneValidate', function(value, element) {
          return true;
        }, '');
      } else {
        $.validator.addMethod('phoneValidate', function () {
          return true;
        });
      }
    }

    return {
      custom_validation_methods: customValidationMethods
    };
  })();
  window.MF = MF;
}(jQuery, this));

/*
 *  The modal overlay which pops up when user switches shipping country
 */

;(function ($, window, mediator) {
  'use strict';

  var MF = window.MF || {};

  var debug = false;

  var defaultOptions = {
    url: {
      checkCountryWithinSite: '/ajax/checkout/deliveryAddress/checkCountrySameAsInSession',
      selectCountry: '/_s/country?isoCode={0}&redirectUrl={1}'
    },
    selectors: {
      dialog: '.shipping-country-switcher'
    },
    outEvents: {
      countrySwitching: 'delivery:country:switching'
    }
  };

  var defaultSwitchOptions = {
    redirectUrl: '/shopping-bag/switch',
    handlers: {}
  };

  MF.shippingCountrySwitch = (function () {
    var options;
    var deferredDialogResult;
    var $shippingCountrySwitchDialog;

    function isPromise(obj) {
      return obj && typeof obj.then === 'function';
    }

    function closeDialog() {
      MF.overlay.close();
    }

    function openDialog() {
      MF.overlay.openWithElement({
        element: $shippingCountrySwitchDialog
      });
    }

    function checkCountryIsAssociatedWithCurrentSite(countryCode) {
      var payload = {
        countryCode: countryCode
      };

      return $.post(options.url.checkCountryWithinSite, payload)
        .fail(function () {
          if (debug) {
            console.error('Can not identify if a given country is associated with current site');
          }
        });
    }

    function switchToCountrySpecificSite(isoCode, redirectUrl) {
      // prepend site url prefix (/uk, /us or empty string) to select country url
      // and provide country iso code and redirect url
      var redirectPath = ACC.config.siteUrlPrefix + options.url.selectCountry
        .replace('{0}', isoCode)
        .replace('{1}', redirectUrl);

      window.location.href = redirectPath;
    }

    function callHandler(handler) {
      var result = handler && handler();

      if (isPromise(result)) {
        return result;
      }

      return $.Deferred().resolve();
    }

    function createDeferredModalResult(switchOptions) {
      var countryCode = switchOptions.countryCode;
      var redirectUrl = switchOptions.redirectUrl || '';
      var handlers = switchOptions.handlers;

      var deferredDialogResult = $.Deferred();

      deferredDialogResult.progress(function (action) {
        callHandler(handlers[action]).then(function (result) {
          if (action === 'onContinue') {
            switchToCountrySpecificSite(countryCode, redirectUrl);
          }

          deferredDialogResult.resolve(result);
        });
      });

      return deferredDialogResult;
    }

    function switchCountry(switchOptions) {
      var countryCode;
      var previousCountryCode;

      var allSwitchOptions = $.extend({}, defaultSwitchOptions, switchOptions);

      countryCode = allSwitchOptions.countryCode;
      previousCountryCode = allSwitchOptions.previousCountryCode;

      deferredDialogResult = createDeferredModalResult(allSwitchOptions);

      if (previousCountryCode && previousCountryCode !== countryCode) {
        openDialog();
      } else {
        checkCountryIsAssociatedWithCurrentSite(countryCode).then(function (response) {
          if (response.status === 'SUCCESS' && response.data.result === false) {
            openDialog();
          } else {
            deferredDialogResult.notify('onCountryWithinCurrentSite');
          }
        });
      }

      if (previousCountryCode !== countryCode && $('#giftCardSwitchingMessage').length) {
        $.ajax({
          url: '/settings/currencies',
          data: { billingCountryIsoCode: countryCode },
          cache: true,
          success: function (data) {
            var showPopup = true;
            $(data.billingCurrencies).each(function () {
              if (this.isocode === $('#currentCurrency').val()) {
                showPopup = false;
              }
            });
            if (showPopup) {
              $('#giftCardSwitchingMessage').show();
            } else {
              $('#giftCardSwitchingMessage').hide();
            }
          }
        });
      }

      return deferredDialogResult.promise();
    }

    function onCancelButtonClicked() {
      deferredDialogResult.notify('onClose');
      closeDialog();
    }

    function onContinueButtonClicked() {
      mediator.publishAsync(defaultOptions.outEvents.countrySwitching);

      deferredDialogResult.notify('onContinue');
    }

    function onDialogClose() {
      deferredDialogResult.notify('onClose');
    }

    function bindEvents() {
      $shippingCountrySwitchDialog.on('click', '.cancel-btn', onCancelButtonClicked);
      $shippingCountrySwitchDialog.on('click', '.continue-btn', onContinueButtonClicked);
      $shippingCountrySwitchDialog.on('click', '.mfp-close', onDialogClose);
    }

    function initObjects() {
      $shippingCountrySwitchDialog = $(options.selectors.dialog);
    }

    function init(opts) {
      options = $.extend({}, defaultOptions, opts);

      initObjects();
      bindEvents();
    }

    return {
      init: init,
      switchCountry: switchCountry
    };
  })();
}(jQuery, this, MF.checkout.mediator));

MF.shippingCountrySwitch.init();

/*
 *  requires
 */
;(function ($, window, formMode, validator, customValidationMethods) {
    "use strict";
    var MF = window.MF || {};
    var forceHouseNumberLookup = {
        countries: ["USA"]
    };
    var modes = {
        manualOnly: "manual_only",
        manual: "manual",
        lookup: "lookup"
    };
    MF.addressValidator = (function () {
    // custom validator for latin characters.
    // shares the same flip/regex as elswhere on the site

        $.validator.addMethod('isLatinOnly', function(value) {
            var pattern = new RegExp(MF.latinCharacters.latinCharactersOnly())
            return pattern.test(value);
        });

        var requireInManualMode = function (element) {
            var $addressForm = $(element.form);
            return formMode.checkMode($addressForm, modes.manual) || formMode.checkMode($addressForm, modes.manualOnly);
        };
        var requireInLookupMode = function (element) {
            var $addressForm = $(element.form);
            return formMode.checkMode($addressForm, modes.lookup);
        };
        var requireLookupAddressSelect = function (element) {
            var $addressForm = $(element.form);
            var context = $addressForm.validate().context;
            return requireInLookupMode(element) && context && context.reason !== "lookupAddressBtn";
        };
        var requireForCountry = function (element) {
            var $addressForm = $(element.form);
            var currentCountry = $addressForm.find("[name=countryIso]").val();
            return $.inArray(currentCountry, forceHouseNumberLookup.countries) !== -1;
        };
        var requiredCountyForCountry = function (element) {
            var $addressForm = $(element.form);
            var currentCountry = $addressForm.find("[name=countryIso]").val();
            return $.inArray(currentCountry, ["USA", "CAN"]) !== -1;
        };
        var requiredPostalCodeForCountry = function (element) {
            var $addressForm = $(element.form);
            var currentCountry = $addressForm.find("[name=countryIso]").find(":selected");
            return currentCountry.data("postalcodeoption") === "MANDATORY";
        };
        var countryMaxLengthPostcodeValidation = function (element) {
            var $addressForm = $(element.form);
            var currentCountry = $addressForm.find("[name=countryIso]").find(":selected").val();

            if (currentCountry === 'KOR') {
                return 5;
            }
            return 10;
        };
        var countryMinLengthPostcodeValidation = function (element) {
            var $addressForm = $(element.form);
            var currentCountry = $addressForm.find("[name=countryIso]").find(":selected").val();

            if (currentCountry === 'KHM') {
                return 6;
            }
            return 0;
        };
        var zipCodeValidation = function (element) {
            var $addressForm = $(element.form);
            var currentCountry = $addressForm.find("[name=countryIso]").find(":selected").val();

            if (ACC.USZipCodeAddressValidation.enabled && currentCountry === 'USA') {
                return ACC.USZipCodeAddressValidation.regexFormat;
            }
            return '.*';
        }

        var validationRules = {
            titleCode: {
                maxlength: 255,
                required: requireInManualMode
            },
            firstName: {
                maxlength: 255,
                required: requireInManualMode,
                isLatinOnly: true
            },
            lastName: {
                maxlength: 255,
                required: requireInManualMode,
                isLatinOnly: true
            },
            countryIso: {
                maxlength: 255,
                required: true
            },
            lookupHouse: {
                required: requireForCountry
            },
            lookupAddressesSelect: {
                required: requireLookupAddressSelect
            },
            postalCode: {
                maxlength: countryMaxLengthPostcodeValidation,
                minlength: countryMinLengthPostcodeValidation,
                required: requiredPostalCodeForCountry,
                isLatinOnly: true,
                pattern: zipCodeValidation
            },
            line1: {
                maxlength: 255,
                required: requireInManualMode
            },
            town: {
                maxlength: 30,
                required: requireInManualMode
            },
            countyState: {
                maxlength: 30,
                required: requiredCountyForCountry
            },
            phone: {
                required: function(){
                    if (ACC.phoneValidation) {
                        return true;
                    }
                    else {
                        return requireInManualMode;
                    }
                },
                pattern: "(?=[\\d \\(\\)\\+\\-]+$)\\D*(\\d\\D*){9,}.*",
                phoneValidate: true,
                onkeyup: false
            },
            phone2: {
                required: false,
                pattern: "(?=[\\d \\(\\)\\+\\-]+$)\\D*(\\d\\D*){9,}.*"
            },
            phoneIntl: {
                required: true,
                phoneValidate: true,
                onkeyup: false,
            },
        };
        var errorPlacement = function (error, element) {
            if (element[0].tagName === "SELECT") {
                error.insertBefore(element.parents(".control-label"));
            }
            else if (element[0].id === "address.postcode") {
                error.insertBefore(element.parents(".post-code--input"));
            }
            else if (element[0].className === 'mfIntPhoneVal error') {
                error.insertBefore(element[0].parentNode.parentNode.querySelector('.feedback-hold'));
            }
            else {
                error.insertBefore(element);
            }
        };
        // these should be moved into a data attribute.
        var addressPhoneNumberInvalidMessage = $("#addressPhoneNumberInvalidPattern").text();
        var addressUsaPostcodeRestricted = $("#addressUsaPostcodeRestricted").text();
        var validate = function(context, addressForm) {
            return validator.validate(addressForm, {
                onkeyup: function(element) {
                  var elementId = $(element).attr('id');
                  if ( elementId !== 'address.phone' ){
                    $.validator.defaults.onkeyup.apply(this, arguments);
                  }
                },
                messages: {
                    phone:
                        {
                            required: addressPhoneNumberInvalidMessage,
                            pattern: addressPhoneNumberInvalidMessage,
                            phoneValidate: addressPhoneNumberInvalidMessage

                        },
                    postalCode:
                        {
                            pattern: addressUsaPostcodeRestricted
                        }
                },
                rules: validationRules,
                errorPlacement: errorPlacement,
                errorContainer: ".generic__error__message"
            });
        };

        var custom_validation_methods = function (form) {
            customValidationMethods.custom_validation_methods(form || null);
        };

        return {
            validate: validate,
            custom_validation_methods: custom_validation_methods
        };
    })();
    window.MF = MF;
}(jQuery, this, MF.formMode, MF.validator, MF.customValidationMethods));

/*
 *  requires
 */

;(function ($, window) {
  'use strict';

  var MF = window.MF || {};

  var debug = false;

  var defaultOptions = {
    url: {
      lookupAddress: '/ajax/addresslookup?postcode={POSTCODE}&building={BUILDING}&country={COUNTRY}'
    }
  };

  MF.addressSearch = (function () {
    var options;

    function init(opts) {
      options = $.extend({}, defaultOptions, opts);
    }

    function lookup(postcode, building, country) {
      var lookupUrl = options.url.lookupAddress
        .replace('{POSTCODE}', postcode)
        .replace('{COUNTRY}', country)
        .replace('{BUILDING}', building);

      return $.getJSON(lookupUrl)
          .fail(function(jqxhr, textStatus, error) {
              var lookup_error = textStatus + ", " + error;
              if(debug){
                  console.error("Cannot lookup address data: " + lookup_error);
              }
              $(document).trigger(
                  "addressLookupFailure", {
                      "reason": lookup_error
              });
        });
    }

    return {
      init: init,
      lookup: lookup
    };
  })();

  window.MF = MF;
}(jQuery, this));

MF.addressSearch.init();

;
(function ($, window, document, newAddress) {

    var MF = window.MF || {};

    var debug = false;

    MF.loqateAddressSearch = (function () {
        var loqateConfig = $('.loqate-config');
        var loqateToken = loqateConfig.data('loqate-key') || '';
        var noResultsMessage = loqateConfig.data('loqate-address-not-found') || '';
        var lang = loqateConfig.data('loqate-lang') || 'en_GB';

        var defaultParams = {
            Key: loqateToken,
            IsMiddleware: false,
            Language: lang,
            Limit: 10,
        };

        var TYPE_ENUM = 'Address';
        var BASE_LOQATE_ADDRESS_URL = 'https://api.addressy.com/Capture/Interactive/Find/v1.1/json3.ws?';

        function init(options) {
            var o = options || {};
            var cid = o.contextId || 'body';
            this.container = $('.loqate-address-lookup', cid);
            this.resultsOutput = $('.address-lookup', this.container);
            this.cancelLink = $('.cancel', this.container);
            this.countryInput = $('[name=countryIso]', cid);
            this.manualInputLink = $('.useGIManualLink', cid);
            this.currentCountry = $('[name=countryIso]', cid).val();

            // Get the results from search
            this.updateValue = function(e) {
                var searchTerm = e.target.value;
                // https://www.loqate.com/resources/support/apis/Capture/Interactive/Find/1.1/
                var params = {
                    Text: searchTerm,
                    Origin: this.currentCountry,
                    Countries: this.currentCountry,
                }
                if (!searchTerm) {
                    this.clearResultsOutputAndInput();
                    return;
                }
                this.container.removeClass('isOpen').addClass('pending');
                getInteractiveFind(params)
                    .then(this.updateResultsOutput)
                    .fail(function (e) { this.container.removeClass('pending') });
            }
            this.updateValue = this.updateValue.bind(this);

            this.searchInput = $('[name=address-search-input]', cid);
            this.searchInput.on('input', this.updateValue);
            
            // Clear address inputs
            this.clearAddressFields = function() {
                $('[name=line1]', this.container).val('');
                $('[name=line2]', this.container).val('');
                $('[name=line3]', this.container).val('');
                $('[name=town]', this.container).val('');
                $('[name=countyState]', this.container).val('');
                $('[name=postalCode]', this.container).val('');
            }
            this.clearAddressFields = this.clearAddressFields.bind(this);

            this.onCancel = function(e) {
                e.preventDefault();
                this.clearResultsOutputAndInput();
            }
            this.onCancel = this.onCancel.bind(this);

            this.cancelLink.on('click', this.onCancel);
            this.cancelLink = this.cancelLink.bind(this);

            // Closes results and clear search
            this.clearResultsOutputAndInput = function() {
                this.container.removeClass('isOpen')
                this.resultsOutput.css('display', 'none');
                this.resultsOutput.empty();
                this.searchInput.val('');
            }
            this.clearResultsOutputAndInput = this.clearResultsOutputAndInput.bind(this);

            this.onNoResultsClick = function (e) {
                e.preventDefault();
                this.manualInputLink.trigger('click');
                this.clearResultsOutputAndInput();
            }
            this.onNoResultsClick = this.onNoResultsClick.bind(this);

            this.resultsOutput.on('click', 'a.no-results-link', this.onNoResultsClick);
            
            this.onCountryInputChange = function(e) {
                this.clearResultsOutputAndInput();
                this.clearAddressFields();
                this.currentCountry = e.target.value;
            }
            this.onCountryInputChange = this.onCountryInputChange.bind(this);


            this.countryInput.on('change', this.onCountryInputChange);
            this.countryInput = this.countryInput.bind(this);

            // Populates and show the list of results from find
            this.updateResultsOutput = function(response) {
                this.container.removeClass('pending').addClass('isOpen');

                if (response.Items.length === 0 || response.Error) {
                    this.resultsOutput.css('display', 'block');
                    $('.address-lookup .no-results', this.container).css('display', 'block');
                    this.resultsOutput.empty();
                    this.resultsOutput.append('<li class="no-results">' + noResultsMessage + '</li>')
                    return;
                }

                highlight(response.Items);

                var items = response.Items.map(function (address) {
                    var addressText = address.Description;
                    if (address.Type === TYPE_ENUM) {
                        addressText = address.HighlightedText + ', ' + address.HighlightedDescription;
                    }
                    return '<li><a href="#" class="loqate-item" data-id="' + address.Id + '" data-type="' + address.Type + '">' + addressText + '</a></li>'
                }).join('');

                this.resultsOutput.empty();
                this.resultsOutput.append(items);
                this.resultsOutput.css('display', 'block');
            }
            this.updateResultsOutput = this.updateResultsOutput.bind(this);
    
            this.onResultItemClick = function(e) {
                e.preventDefault();
                var id = $(e.currentTarget).data('id');
                var type = $(e.currentTarget).data('type');
    
                if (type !== TYPE_ENUM) {
                    // If Item is anything other than Type Address. Call /find again with Container to further narrow it down to Address.
                    var options = {
                        Container: id,
                    }
                    getInteractiveFind(options)
                        .then(this.updateResultsOutput)
                        .fail(function (e) {
                            if (debug) {
                                console.error('Cannot find address data: ' + e) 
                            }
                        });
                } else {
                    // Get the full address
                    getInteractiveRetrieve(id)
                        .then(this.populateAddressInputs)
                        .fail(function (e) { 
                            if (debug) {
                                console.error('Cannot retrieve address data: ' + e);
                            }
                        });
                }
            }
            this.onResultItemClick = this.onResultItemClick.bind(this);

            $(document).on('click', cid + ' a.loqate-item', this.onResultItemClick)

            // returns value or code for select if country is USA
            this.populateCountyState = function (address) {
                var provinceValue = address.ProvinceName;
                if (this.currentCountry === 'USA') {
                    provinceValue = address.ProvinceCode;
                }
                return provinceValue;
            }
            this.populateCountyState = this.populateCountyState.bind(this);
            // Put the final address into the form fields
            this.populateAddressInputs = function(result) {
                $('#results', cid).hide();
                var address = result.Items[0] || {};

                this.clearAddressFields();

                $('[name=countryIso]', cid).val(address.CountryIso3).change();
                $('[name=line1]', cid).val(address.Line1);
                $('[name=line2]', cid).val(address.Line2);
                $('[name=line3]', cid).val(address.Line3);
                $('[name=town]', cid).val(address.City);
                $('[name=countyState]', cid).val(this.populateCountyState(address));
                $('[name=postalCode]', cid).val(address.PostalCode);
                $('.useGIManualLink', cid).trigger('click');
                this.clearResultsOutputAndInput();
            }
            this.populateAddressInputs = this.populateAddressInputs.bind(this);
        }

        /**
         * @description Uses a text search to find addresses and places
         * @see https://www.loqate.com/resources/support/apis/Capture/Interactive/Find/1.1/
         * @param {object} params 
         * @returns {object} [Items]
         */
        function getInteractiveFind(params) {
            var queryParams = $.extend({}, defaultParams, params);
            var esc = encodeURIComponent;
            var query = function () {
                var parts = []
                Object.keys(queryParams).forEach(function (k) {
                    parts.push(esc(k) + '=' + esc(queryParams[k]));
                });
                return parts.join('&');
            }
            
            var url = BASE_LOQATE_ADDRESS_URL + query();

            return $.getJSON(url)
                .fail(function (jqxhr, textStatus, error) {
                    var lookup_error = textStatus + ', ' + error;
                    if (debug) {
                        console.error('Cannot retrieve address data: ' + lookup_error);
                    }
                });
        }

        /**
         * @description Returns the full address details based on the Id
         * @see https://www.loqate.com/resources/support/apis/Capture/Interactive/Retrieve/1/
         * @param {string} id 
         * @returns {object} [Items]
         */
        function getInteractiveRetrieve(id) {
            var retrievePath = 'https://api.addressy.com/Capture/Interactive/Retrieve/v1/json3.ws?Key=' + loqateToken+ '&Id={ID}';
            var lookupUrl = retrievePath
                .replace('{ID}', id);

            return $.getJSON(lookupUrl)
                .fail(function (jqxhr, textStatus, error) {
                    var lookup_error = textStatus + ', ' + error;
                    if (debug) {
                        console.error('Cannot retrieve address data: ' + lookup_error);
                    }
                });
        }
        /**
         * 
         * @param {array} suggestions Items from /find results
         * @param {string} prefix html
         * @param {string} suffix html
         */
        function highlight(suggestions, prefix, suffix) {
            prefix = prefix || '<b>';
            suffix = suffix || '</b>';

            function applyHighlights(text, highlights) {
                for (var i = highlights.length - 1; i >= 0; i--) {
                    var indexes = highlights[i].split('-');
                    text = text.substring(0, parseInt(indexes[0])) + prefix + text.substring(parseInt(indexes[0]), parseInt(indexes[1])) + suffix + text.substring(parseInt(indexes[1]), text.length);
                }
                return text;
            }
            for (var s = 0; s < suggestions.length; s++) {
                var suggestion = suggestions[s];

                //initial values are all the same
                suggestion.HighlightedText = suggestion.title = suggestion.tag = suggestion.Text;
                suggestion.HighlightedDescription = suggestion.Description;

                //no highlight indexes
                if (!suggestion.Highlight)
                    continue;

                var highlightParts = suggestion.Highlight.split(';');

                //main text highlights
                if (highlightParts.length > 0)
                    suggestion.HighlightedText = applyHighlights(suggestion.HighlightedText, highlightParts[0].split(','));

                //description text highlights
                if (highlightParts.length > 1)
                    suggestion.HighlightedDescription = applyHighlights(suggestion.HighlightedDescription, highlightParts[1].split(','));
            }
        };

        return {
            init: init,
        };
    })();

    window.MF = MF;

}(jQuery, this, this.document, MF.newAddress));

if ($('.page-addressbook').exists()) {
    new MF.loqateAddressSearch.init({contextId: '#addressBook_newAddress'});
}
if ($('.page-multiStepCheckoutSummaryPage').exists()) {
    new MF.loqateAddressSearch.init({contextId: '#delivery_newAddress'});
    new MF.loqateAddressSearch.init({contextId: '#billing_newAddress'});
}
if ($('.page-confirmorderreturn').exists()) {
    new MF.loqateAddressSearch.init({contextId: '#delivery_newAddress'});
}


/*
 *  requires
 *
 *  MF.addressValidator
 *  MF.addressSearch
 *  MF.formMode
 *  MF.shippingCountrySwitch
 */

;(function (
  $, window, mediator, handlebars, addressValidator,
  addressSearch, edqAddressSearch, formMode,
  shippingCountrySwitch, select
) {
  'use strict';

  var MF = window.MF || {};

  var debug = false;

  var NO_VALUE = null;

  var defaultOptions = {
    url: {
      addAddress: NO_VALUE
    },
    data: {
      root: 'data',
      address: NO_VALUE
    },
    outEvents: {
      addressAdded: NO_VALUE
    },
    switchCountry: true,
    previousCountryCode: null
  };

  var modes = {
    manualOnly: 'manual_only',
    manual: 'manual',
    lookup: 'lookup'
  };

  MF.newAddress = function () {
    var context;
    var options;

    var addressSelectorId;
    var newAddress;
    var addressForm;
    var addressFormValidator;
    var lookupMessageTemplate;
    var cancelAddressBtn;
    var saveAddressBtn;
    var lookupAddressesTemplate;
    var edqLookupAddressesTemplate;
    var lookupAddressesSelect;
    var lookupMessage;
    var lookupAddresses;
    var useManualLink;
    var useGIManualLink;
    var useLookupLink;
    var useGILookupLink;
    var countrySelect;
    var addressLookupHouse;
    var addressPostcode;
    var postCodeInput;
    var addressIdHiddenInput;
    var userTaxCode;
    var oldAddressSerialized;

    var callbacks = {
      onAddressSaved: $.Callbacks('unique stopOnFalse'),
      onAddressCancelled: $.Callbacks('unique stopOnFalse')
    };

    var addressSaved = false;
    var propertyChangeUnbound = false;

      var user_clicks_postcode_search_submit = true;

    function initDropdownSelector(contextID, callbackFn) {
      select.init({
        contextId: contextID,
        callback: callbackFn || $.noop
      });
    }

    function isCountryEnabledForEDQSOAP(country) {
      return addressLookupConfig && addressLookupConfig[country] === 'EDQ_SOAP';
    }

    function hideGIFormData() {
      addressForm.find('.address-house-number').show(); // House Number
      addressForm.find('.address-postcode').show(); // Postcode
      addressForm.find('.address-manual-lookup').show(); // Enter full address manually
      addressForm.find('.useLookupLink').show(); // Use postcode/Zip search
      addressForm.find('.chk__mode__auto').css('margin-bottom', '');
      addressForm.find('.manualAddressGroup').hide();

      addressForm.find('.loqate-address-lookup').hide(); // Loqate address form
      addressForm.find('.gi-address-manual-lookup').hide(); // Enter address lookup
      addressForm.find('.address-gi-lookup-link').hide(); // Enter full address manually GI
    }

    function switchMode(mode) {
      formMode.switchMode(addressForm, mode);
    }

    function onSwitchAddressFormToManualMode(event) {
      if (event) {
        event.preventDefault();
      }
      postCodeInput.addClass('fullWidthPostCode');
      switchMode(modes.manual);
    }

    function updateKoreanElements(country, isEDQSoapEnabled) {
      var houseNumberDataAttribute = 'house-number';
      var addressLookupDataAttribute = 'address-lookup-btn';
      var houseNumberSection;
      var addressLookupAddressBtn;

      if (isEDQSoapEnabled && country === 'KOR') {
        houseNumberDataAttribute = 'korea-house-number';
        addressLookupDataAttribute = 'korea-address-lookup-btn';
      }

      houseNumberSection = addressForm.find('.address-house-number');

      if (houseNumberSection) {
        houseNumberSection.find('.addressHouseNumber').attr('placeholder', houseNumberSection.data(houseNumberDataAttribute));
      }

      addressLookupAddressBtn = addressForm.find('.lookupAddressBtn');

      if (addressLookupAddressBtn) {
        addressLookupAddressBtn.html(addressLookupAddressBtn.data(addressLookupDataAttribute));
      }
    }

    function isCountryEnabledForLoqate(country) {
      return addressLookupConfig && addressLookupConfig[country] === 'LOQATE';
    }

    function showGIFormData() {
      addressForm.find('.address-house-number').hide();
      addressForm.find('.address-postcode').hide();
      addressForm.find('.address-manual-lookup').hide();
      addressForm.find('.chk__mode__auto').css('margin-bottom', '0');
      addressForm.find('.useLookupLink').hide();
      addressForm.find('.manualAddressGroup').hide();

      addressForm.find('.loqate-address-lookup').show();
      addressForm.find('.gi-address-manual-lookup').show();
      addressForm.find('.address-gi-lookup-link').hide();
    }

    function showGIErrorMessages() {
      addressForm.find('.address-postcode').show();
      addressForm.find('.loqate-address-lookup').hide(); // GI address form
      addressForm.find('.address-manual-lookup').hide(); // Enter full address manually
      addressForm.find('.gi-address-manual-lookup').hide(); // Enter full address manually GI
      addressForm.find('.address-gi-lookup-link').show();
    }

    function updatePlaceholderText(required) {
      var houseNum = addressForm.find("[name='lookupHouse']");
      var houseNumPlaceholder = houseNum.attr('placeholder');

      if (required === 'add') {
        if (houseNumPlaceholder.slice(-1) !== '*') {
          houseNum.attr('placeholder', houseNumPlaceholder + '*');
        }
      } else if (houseNumPlaceholder.slice(-1) === '*') {
        houseNum.attr('placeholder', houseNumPlaceholder.replace(/\*$/, ''));
      }
    }

    function isCountryEnabledForPostcodeanywhere(country) {
      return addressLookupConfig && addressLookupConfig[country] === 'POSTCODE_ANYWHERE';
    }

    function changeAddressFormModeBasedOnCountry(preferredMode) {
      var country = countrySelect.val();
      var countryEnabledForEDQSOAP;

      if (isCountryEnabledForLoqate(country)) {
        //  Japan has address lookup functionality disabled
        if ($.cookie('country') !== 'JPN') {
          showGIFormData();
        }
        if (preferredMode && preferredMode !== 'lookup') { // On form save button
          switchMode(preferredMode);
          showGIErrorMessages();
        }
      } else {
        //  Japan has address lookup functionality disabled
        if ($.cookie('country') !== 'JPN') {
          hideGIFormData();
        }
        countryEnabledForEDQSOAP = isCountryEnabledForEDQSOAP(country);

        updateKoreanElements(country, countryEnabledForEDQSOAP);

        if (country === 'GBR' || countryEnabledForEDQSOAP) {
          updatePlaceholderText('remove');
        } else if (country === 'USA') {
          updatePlaceholderText('add');
        } else {
          addressForm.find('.post-code--input').addClass('fullWidthPostCode');
        }

        if (!isCountryEnabledForPostcodeanywhere(country) && !countryEnabledForEDQSOAP
          && !isCountryEnabledForLoqate(country)) {
          switchMode(modes.manualOnly);
        } else if (preferredMode) {
          switchMode(preferredMode);
        } else if (formMode.checkMode(addressForm, modes.manualOnly)) {
          switchMode(modes.manual);
        } else {
          $('.useLookupLink:visible').click();
        }

        if (country === 'FRA') {
          addressForm.find("input[name='countyState']").hide();
        } else if (country !== 'FRA') {
          addressForm.find("input[name='countyState']").show();
        }
      }
    }

    function showAddressFormByCountry(mode) {
      var selectedCountry = countrySelect.val();

      if (isCountryEnabledForEDQSOAP(selectedCountry)) {
        hideGIFormData();
        onSwitchAddressFormToManualMode();

        updateKoreanElements(selectedCountry, true);
      } else {
        changeAddressFormModeBasedOnCountry(mode);
      }
    }

    function savePreviousCountryCode() {
      options.previousCountryCode = countrySelect.val();
    }

    function switchSavedButton() {
      if (!propertyChangeUnbound) {
        addressForm.unbind('propertychange');
        propertyChangeUnbound = true;
      }
      addressForm.find('.save__address').show();
      addressForm.find('.saveAddressBtn').removeAttr('disabled');
      addressForm.find('.address__saved').hide();

      $('#deliveryMethodTable').empty();
      $('#shippingMethodSection').find('.para-info:first').show();
    }

    function showAddressForm(mode) {
      showAddressFormByCountry(mode);
      savePreviousCountryCode();
      newAddress.show();
      updateCountyStateForCountriesWithPopulatedStates();
    }

    function hideAddressForm() {
      newAddress.hide();
    }

    function clearAddressForm() {
      addressForm[0].reset();
      addressForm.find('[name=id]').val('');

      select.refresh('#' + context + 'TitleSelector');
      select.refresh('#' + context + 'CountrySelector');
      select.refresh('#' + context + 'StateSelector');
      select.refresh(addressSelectorId);

      addressFormValidator.resetForm();
    }

    function ensureSelectedTitleIsPresentInTheList(address) {
      var $titleSelect = addressForm.find('[name=titleCode]');
      var optionNotExists = $titleSelect.find("option[value='" + address.titleCode + "']").length === 0;
      var $newTitleOption;

      if (optionNotExists) {
        $newTitleOption = $('<option></option>')
          .val(address.titleCode)
          .text(address.title)
          .attr('label', address.title);

        $titleSelect.append($newTitleOption);

        MF.select.refresh('#' + context + 'TitleSelector');
      }
    }

    function populateAddressForm(address) {
      ensureSelectedTitleIsPresentInTheList(address);

      addressForm.find('[name=id]').val(address.id);
      addressForm.find('[name=titleCode]').val(address.titleCode).change();
      addressForm.find('[name=firstName]').val(address.firstName);
      addressForm.find('[name=lastName]').val(address.lastName);
      addressForm.find('[name=countryIso]').val(address.country.isocode).change();
      addressForm.find('[name=line1]').val(address.line1);
      addressForm.find('[name=line2]').val(address.line2);
      addressForm.find('[name=line3]').val(address.line3);
      addressForm.find('[name=town]').val(address.town);
      addressForm.find('[name=countyState]').val(address.countyState);
      addressForm.find('[name=postalCode]').val(address.postalCode);

      addressForm.find('[name=phone]').val(address.phone);
      addressForm.find('[name=phone2]').val(address.phone2);

      if (document.querySelector('.iti')) {
        addressForm.find('.address_telephone_container .mfIntPhoneVal').val(address.phone);
      }

      addressForm.find('[name=userTaxCode]').val(address.userTaxCode);
      addressForm.find('[name=preferredShippingAddress]').attr('checked', address.preferredShippingAddress);
      addressForm.find('[name=preferredBillingAddress]').attr('checked', address.preferredBillingAddress);
      oldAddressSerialized = addressForm.serialize();
    }

    function publishAddressAddedEvent(response, addressId) {
      mediator.publish(options.outEvents.addressAdded);
      callbacks.onAddressSaved.fire(response, addressId);
    }

    function onSwitchAddressFormSave() {
      postCodeInput.addClass('fullWidthPostCode');
      changeAddressFormModeBasedOnCountry(modes.manual);
    }

    function validateForm() {
      return addressFormValidator.form();
    }

    function showAddressSavedMessage() {
      // change button text, disable?
      addressForm.find('.save__address').hide();
      addressForm.find('.address__saved').show();

      if ($('.address__saved:visible')) {
        addressForm.find('.saveAddressBtn').attr('disabled', 'disabled');
      }

      addressSaved = true;
      addressForm.on('input', function () {
        switchSavedButton();
      });

      addressForm.find('select').on('change', function () {
        switchSavedButton();
      });
    }

    function setAddressId(addressId) {
      addressIdHiddenInput.val(addressId);
    }

    function handleErrors(response) {
      if (response.message === 'text.account.address.alreadyExist') {
        $('#addressAlreadyExists').show();
      } else {
        $('#addressAlreadyExists').hide();
      }

      if (response.message === 'text.address.postcode.restricted.kor') {
        $('#addressKorPostcodeRestricted').show();
      } else {
        $('#addressKorPostcodeRestricted').hide();
      }

      if (response.message === 'text.address.postcode.restricted.khm') {
        $('#addressKhmPostcodeRestricted').show();
      } else {
        $('#addressKhmPostcodeRestricted').hide();
      }

      if (response.message === 'text.address.postcode.restricted.usa') {
        $('#addressUsaPostcodeRestricted').show();
      } else {
        $('#addressUsaPostcodeRestricted').hide();
      }
    }

    function onAddressAdded(response) {
      if (response.status === 'SUCCESS') {
        showAddressSavedMessage();
        setAddressId(response.data.id);
        publishAddressAddedEvent(response, response.data.id);
      } else {
        handleErrors(response);
        if (debug) {
          console.error('address is not valid');
        }
      }
    }

    function saveAddressForm() {
      var newAddressSerialized = addressForm.serialize();
      if (newAddressSerialized !== oldAddressSerialized) {
        return $.post(options.url.addAddress, newAddressSerialized)
          .then(function (response) {
            onAddressAdded(response);
            return response;
          })
          .fail(function () {
            if (debug) {
              console.error('cannot save address');
            }
          });
      } else {
        onAddressFormCancel();
      }
    }

    function switchCountry(previousCountryCode) {
      return shippingCountrySwitch.switchCountry({
        countryCode: countrySelect.val(),
        previousCountryCode: previousCountryCode,
        handlers: {
          onContinue: saveAddressForm,
          onCountryWithinCurrentSite: saveAddressForm
        }
      });
    }

    function onAddressFormSave() {
      if ($('body').hasClass('page-multiStepCheckoutSummaryPage')){
          $(document).trigger("userClicksSaveAddress");
      }
      function asyncValidateForm() {
        var dfd = $.Deferred();
        onSwitchAddressFormSave();

        if (dfd.state() === 'pending') {
          dfd.notify();
        }

        function x() {
          if (validateForm()) {
            dfd.resolve();
          } else {
            dfd.reject();
          }
        }

        setTimeout(function () {
          x();
        }, 100);

        return dfd.promise();
      }

      // Attach a done, fail, and progress handler for the asyncEvent
      $.when(asyncValidateForm()).then(
        function () {
          MF.spinnerHandler.hideSpinner('.saveAddressBtn', { 'margin-left': '' });
          return options.switchCountry ? switchCountry(options.previousCountryCode)
            : saveAddressForm();
        },
        function () {
          MF.spinnerHandler.hideSpinner('.saveAddressBtn', { 'margin-left': '' });
        },
        function () {
          MF.spinnerHandler.showSpinner('.saveAddressBtn', { 'margin-left': '' });
        }
      );
    }

    function onAddressFormCancel() {
      hideAddressForm();
      callbacks.onAddressCancelled.fire();
    }

    function isInLookupMode() {
      return formMode.checkMode(addressForm, 'lookup');
    }

    function showLookupMessage() {
      MF.spinnerHandler.hideSpinner(lookupAddressBtn);
      lookupMessage.html(lookupMessageTemplate());
      $('.chk__mode__feedback').removeClass('hidden');
    }

    function renderEDQLookupAddresses(addresses) {
      lookupAddressesSelect.append(edqLookupAddressesTemplate({
        addresses: lookupAddresses,
        multipleResults: addresses.length > 1
      }));

      select.refresh(addressSelectorId);
    }

    function populateEDQAddressFormWithLookupData(address) {
      addressForm.find('[name=line1]').val(address.address1);
      addressForm.find('[name=line2]').val(address.address2);
      addressForm.find('[name=line3]').val(address.address3);
      addressForm.find('[name=postalCode]').val(address.postcode);
      addressForm.find('[name=town]').val(address.town);
      addressForm.find('[name=countyState]').val(address.region);
    }

    function disableSpinnerAndEnableButtons() {
      $('.spinner').css({
        marginTop: '',
        marginLeft: '',
        position: '',
        zIndex: ''
      });

      MF.spinnerHandler.hideSpinner('.lookupAddressesSelect .selecter');
      $('.lookupAddressesSelect .cs__selected').css('opacity', '');
    }

    function handleEDQLookupAddressSelection(lookupAddress) {
      switchMode(modes.manual);
      populateEDQAddressFormWithLookupData(lookupAddress);
      postCodeInput.addClass('fullWidthPostCode');
      if (ACC.address.soapAddress.formSpinnerAndButtonDisabler) {
        disableSpinnerAndEnableButtons();
      }
    }

    function toggleAddressSelector(numberOfAddresses) {
      if (lookupAddresses.length > 1) {
        $(addressSelectorId).show();
      } else {
        $(addressSelectorId).hide();
      }
    }

    function populateEDQLookupAddressesDropDown(addresses) {
      lookupAddresses = addresses;

      if (lookupAddresses.length > 0) {
        MF.spinnerHandler.hideSpinner(lookupAddressBtn);
        renderEDQLookupAddresses(lookupAddresses);

        if (lookupAddresses.length === 1) {
          edqAddressSearch.getAddress(lookupAddresses[0].moniker)
            .then(handleEDQLookupAddressSelection)
            .fail(showLookupMessage);
        }
      } else {
        showLookupMessage();
      }

      toggleAddressSelector(lookupAddresses.length);

      select.refresh(addressSelectorId);
    }

    function renderLookupAddresses(addresses) {
      lookupAddressesSelect.append(lookupAddressesTemplate({
        addresses: lookupAddresses,
        multipleResults: addresses.length > 1
      }));

      select.refresh(addressSelectorId);
    }

    function populateAddressFormWithLookupData(address) {
      addressForm.find('[name=line1]').val(address.address1);
      addressForm.find('[name=line2]').val(address.address2);
      addressForm.find('[name=postalCode]').val(address.postcode);
      addressForm.find('[name=town]').val(address.town);
      addressForm.find('[name=countyState]').val(address.region);
    }

    function handleLookupAddressSelection(lookupAddress) {
      switchMode(modes.manual);
      populateAddressFormWithLookupData(lookupAddress);
      postCodeInput.addClass('fullWidthPostCode');
    }

    function populateLookupAddressesDropDown(addresses) {
      lookupAddresses = addresses;

      if (lookupAddresses.length > 0) {
        MF.spinnerHandler.hideSpinner(lookupAddressBtn);
        renderLookupAddresses(lookupAddresses);

        if (lookupAddresses.length === 1) {
          handleLookupAddressSelection(lookupAddresses[0]);
        }
      } else {
        showLookupMessage();
      }

      toggleAddressSelector(lookupAddresses.length);

      select.refresh(addressSelectorId);
    }

    function onLookupAddressChange(value) {
      var findElement;
      var country;
      var selectedLookupAddress;

      if (ACC.address.soapAddress.formSpinnerAndButtonDisabler) {
        if (value !== null) {
          findElement = addressForm.find('.lookupAddressesSelect .selecter');
          MF.spinnerHandler.showSpinner(findElement);

          $('.spinner').css({
            marginTop: '1.5%',
            marginLeft: '47%',
            position: 'absolute',
            zIndex: 999
          });
          addressForm.find('.lookupAddressesSelect .cs__selected').css({ opacity: 0.5 });
        }
      }

      country = countrySelect.val();
      if (isCountryEnabledForEDQSOAP(country)) {
        edqAddressSearch.getAddress(value)
          .then(handleEDQLookupAddressSelection);
        // .fail(showLookupMessage);
      } else {
        selectedLookupAddress = lookupAddresses[value];

        if (selectedLookupAddress) {
          handleLookupAddressSelection(selectedLookupAddress);
        }
        if (ACC.address.soapAddress.formSpinnerAndButtonDisabler) {
          disableSpinnerAndEnableButtons();
        }
      }
    }

    function changePostalCodeOption() {
      var pco = countrySelect.find(':selected').data('postalcodeoption');

      if (pco === 'HIDE') {
        addressForm.find('[name=postalCode]').val('');
        postCodeInput.hide();
      } else {
        postCodeInput.show();
      }
    }

    function changeUserTaxCodeField() {
        var pco = countrySelect.find(':selected').data('usertaxcodeoption');

        if (pco === true) {
          userTaxCode.show();
        }
        else {
          userTaxCode.hide();
        }
    }

    function onCountryChange() {
      changePostalCodeOption();
      changeUserTaxCodeField();
      changeAddressFormModeBasedOnCountry();
      showAddressFormByCountry();
      updateCountyStateForCountriesWithPopulatedStates();
    }

    function updateCountyPlaceholder() {
      var countyState = addressForm.find("[name='countyState']");
      var countyStatePlaceholder = countyState.attr('placeholder');
      if (countrySelect.val() === 'USA') {
        if (countyStatePlaceholder.slice(-1) !== '*') {
          countyState.attr('placeholder', countyStatePlaceholder + '*');
        }
      }
    }

    function updateCountyStateForCountriesWithPopulatedStates() {
      updateCountyPlaceholder();
      if(ACC.USStatesSelectorAsDropDown.enabled) {
        var selectedCountryStates = null;
        $.get("/ajax/internationalization/countryStates", {countryIso: countrySelect.val()})
                .done(function (data) {
                  selectedCountryStates = data;
                })
                .always(function () {
                  if (selectedCountryStates && selectedCountryStates.length > 0) {
                    enableStateSelect(selectedCountryStates);
                  } else {
                    disableStateSelect();
                  }
                });
      }
    }

    function disableStateSelect() {
      var stateSelectId = '#' + context + 'StateSelector';

      // disable select / enable input
      $('input[name=countyState]').prop( "disabled", false ).show();
      $(stateSelectId + " select").prop( "disabled", true );
      $(stateSelectId).hide();
    }

    function enableStateSelect(selectedCountryStates) {
      var stateSelectId = '#' + context + 'StateSelector';
      var $countyStateElement = $('input[name=countyState]');
      var $stateSelectorElement =  $(stateSelectId);
      var $stateSelectorSelectElement =  $(stateSelectId + ' select');

      var stateValue = $countyStateElement.val();
      var statesList = selectedCountryStates;

      initDropdownSelector(stateSelectId);

      // Clear Select options
      $stateSelectorSelectElement.find("option").remove();

      // Fill the Select with options
      $stateSelectorSelectElement.append('<option value="">' + $countyStateElement.attr('placeholder') + '</option>');
      $.each(statesList, function (i, state) {
        $stateSelectorSelectElement.append('<option value="' + state.isocode + '" >' + state.name + '</option>');
      });

      //disable input / enable select
      $countyStateElement.prop( "disabled", true ).hide();
      $stateSelectorSelectElement.prop("disabled", false);
      $stateSelectorElement.find(".disabled").removeClass("disabled");
      $stateSelectorElement.show();
      select.refresh(stateSelectId);

      // the line below is just a hack to fix scenarios when you change
      // from one country with states to another country also with states.
      $stateSelectorElement.find(".cs__selected").removeClass("no--arrow");

      // Select the right state if it has something defined into the address
      $stateSelectorSelectElement.val(stateValue).change();
      $stateSelectorSelectElement.on("addressLookupUpdate", updateStatesSelectAccordingInputSetValue);
    }

    function updateStatesSelectAccordingInputSetValue(data) {
      // This function handles the callback of the edq address lookup
      // setting the returned states into the StateSelector
      if(data !== undefined) {
        $(this).val(data.originalEvent.definedState.province).change();
      }
    }

    function onSwitchAddressFormToManualModeGI(event) {
      event.preventDefault();
      postCodeInput.addClass('fullWidthPostCode');
      switchMode(modes.manual);

      addressForm.find('.address-postcode').show();
      addressForm.find('.address-manual-lookup').hide(); // Enter full address manually
      addressForm.find('.loqate-address-lookup').hide();
      addressForm.find('.useLookupLink').hide();
      addressForm.find('.gi-address-manual-lookup').hide();
      addressForm.find('.address-gi-lookup-link').show();
    }

    function onSwitchAddressFormToLookupMode(event) {
      event.preventDefault();
      postCodeInput.removeClass('fullWidthPostCode');
      switchMode(modes.lookup);
    }

    function onSwitchAddressFormToGILookupMode(event) {
      event.preventDefault();
      showGIFormData();
    }

    function compileTemplate(template) {
      return template ? handlebars.compile(template) : null;
    }

    function initAddressObjects() {
      addressSelectorId = '#' + context + 'AddressSelector';

      newAddress = $('#' + context + '_newAddress');
      addressForm = newAddress.find('.addressForm');
      postCodeInput = newAddress.find('.post-code--input');

      useManualLink = addressForm.find('.useManualLink');
      useGIManualLink = addressForm.find('.useGIManualLink');
      useLookupLink = addressForm.find('.useLookupLink');
      useGILookupLink = addressForm.find('.useGILookupLink');
    
      countrySelect = addressForm.find('[name=countryIso]');
      addressLookupHouse = addressForm.find('[name=lookupHouse]');
      addressPostcode = addressForm.find('[name=postalCode]');

      lookupMessage = addressForm.find('.lookupMessage');
      lookupAddressesSelect = addressForm.find('[name=lookupAddressesSelect]');
      saveAddressBtn = addressForm.find('.saveAddressBtn');
      cancelAddressBtn = addressForm.find('.cancelAddressBtn');

      lookupMessageTemplate = compileTemplate(newAddress.find('.lookupMessageTemplate').html());
      lookupAddressesTemplate = compileTemplate(newAddress.find('.lookupAddressesTemplate').html());
      edqLookupAddressesTemplate = compileTemplate(newAddress.find('.edqLookupAddressesTemplate').html());

      addressIdHiddenInput = addressForm.find('[name=id]');

      userTaxCode = addressForm.find('.user-tax-code--input');
    }

    function initAddressFormValidator(addressForm) {
      addressFormValidator = addressValidator.validate(context, addressForm);
      if (!ACC.phoneValidation) {
        addressValidator.custom_validation_methods();
      }
    }

    function init(ctx, opts) {
      context = ctx;
      options = $.extend({}, defaultOptions, opts);

      initAddressObjects();
      initAddressFormValidator(addressForm);

      initDropdownSelector('#' + context + 'TitleSelector');
      initDropdownSelector('#' + context + 'CountrySelector', onCountryChange);
      initDropdownSelector(addressSelectorId, onLookupAddressChange);

      $(function () {
        changePostalCodeOption();
        changeUserTaxCodeField();

        useManualLink.on('click', onSwitchAddressFormToManualMode);
        useGIManualLink.on('click', onSwitchAddressFormToManualModeGI);
        useLookupLink.on('click', onSwitchAddressFormToLookupMode);
        useGILookupLink.on('click', onSwitchAddressFormToGILookupMode);

        // lookupAddressBtn.on('click', onAddressLookup);

        saveAddressBtn.on('click', onAddressFormSave);

        if (cancelAddressBtn.exists()) {
          cancelAddressBtn.on('click', onAddressFormCancel);
        }
      });
    }

    return {
      init: init,
      callbacks: callbacks,
      show: showAddressForm,
      hide: hideAddressForm,
      populate: populateAddressForm,
      clear: clearAddressForm,
      validate: validateForm,
      modes: modes,
      switchMode: switchMode,
      isInLookupMode: isInLookupMode,
      save: saveAddressForm
    };
  };

  window.MF = MF;
}(
  jQuery, this, MF.checkout.mediator, Handlebars, MF.addressValidator,
  MF.addressSearch, MF.edqAddressSearch, MF.formMode,
  MF.shippingCountrySwitch, MF.select
));
/*
 *  requires
 *
 *  MF.shippingCountrySwitch
 */

;(function ($, window, mediator, shippingCountrySwitch) {
  'use strict';

  var MF = window.MF || {};

  var debug = false;

  var NO_VALUE = null;

  var defaultOptions = {
    url: {
      setAddress: NO_VALUE
    },
    switchCountry: true,
    shouldPostAddressChange: function () {
      return true;
    }
  };

  MF.addressDropDown = function () {
    var context;
    var options;

    var callbacks = {
      onAddressChange: $.Callbacks('unique stopOnFalse'),
      onShowAddressForm: $.Callbacks('unique stopOnFalse')
    };

    var addressBook;
    var selectedAddress;
    var selectedAddressId;
    var savedAddressContainer;
    var addressSelect;
    var addressDetails;
    var addressOptionTemplate;
    var addressInfoTemplate;

    function setSelectedAddress(addressId) {
      selectedAddressId = addressId;
      selectedAddress = _.find(addressBook, function (address) {
        return address.id === addressId;
      });
    }

    function getSelectedAddress() {
      return selectedAddress;
    }

    function populateAddressSelect() {
      addressSelect.empty();

      $.each(addressBook, function (count, address) {
        addressSelect.append(addressOptionTemplate({
          selected: selectedAddressId === address.id,
          address: address
        }));
      });

      MF.select.refresh(savedAddressContainer);
    }

    function populateAddressInfo() {
      if (selectedAddress.country && selectedAddress.country.isocode) {
        selectedAddress.isJapanese = selectedAddress.country.isocode === 'JPN';
      }
      mediator.publish(options.outEvents.addressSelected, selectedAddress);
    }

    function rollbackSelectedValue() {
      var previousSelectedValue = addressSelect.data('current');

      setSelectedAddress(previousSelectedValue);

      if (previousSelectedValue) {
        addressSelect.val(previousSelectedValue);
        MF.select.refresh(savedAddressContainer);
        populateAddressInfo();
      }
    }

    function storeSelectedValue(value) {
      addressSelect.data('current', value || addressSelect.val());
    }

    function saveSelectedAddress() {
      return $.post(options.url.setAddress, {
        addressId: selectedAddress.id
      }).then(function(data){
        if (data && data.data && data.data.confirmCvc !== undefined) {
          window.ACC.confirmCvc = data.data.confirmCvc;
        }
      });
    }

    function postAddressChange() {
      if (options.shouldPostAddressChange(selectedAddress)) {
        return saveSelectedAddress();
      }

      return $.Deferred().resolve();
    }

    function setAddressAndPublishEvent() {
      return postAddressChange()
        .then(function () {
          mediator.publish(options.outEvents.addressSet, selectedAddress.id);
          callbacks.onAddressChange.fire(selectedAddress.id);
        })
        .fail(function () {
          if (debug) {
            console.error('cannot set address: ' + selectedAddress.id);
          }
        });
    }

    function switchCountry(previousCountryCode) {
      if (previousCountryCode !== selectedAddress.country.isocode && $('#giftCardSwitchingMessage').length) {
        $.ajax({
          url: '/settings/currencies',
          data: { billingCountryIsoCode: selectedAddress.country.isocode },
          cache: true,
          success: function (data) {
            var showPopup = true;
            $(data.billingCurrencies).each(function () {
              if (this.isocode === $('#currentCurrency').val()) {
                showPopup = false;
              }
            });
            if (showPopup) {
              $('#giftCardSwitchingMessage').show();
            } else {
              $('#giftCardSwitchingMessage').hide();
            }
          },
            fail: function(){
             if (debug)
                 console.error("cannot set address: " + selectedAddress.id);
            }
        });
      }
      return shippingCountrySwitch.switchCountry({
        countryCode: selectedAddress.country.isocode,
        previousCountryCode: previousCountryCode,
        handlers: {
          onClose: function () {
            rollbackSelectedValue();
            callbacks.onShowAddressForm.fire();
          },
          onCountryWithinCurrentSite: function () {
            storeSelectedValue();
            return setAddressAndPublishEvent();
          },
          onContinue: function () {
            return setAddressAndPublishEvent();
          }
        }
      });
    }

    function changeAddress(previousCountryCode) {
      return options.switchCountry ? switchCountry(previousCountryCode)
        : setAddressAndPublishEvent();
    }

    function onAddressSelectChange(value) {
      var previousCountryCode = selectedAddress.country.isocode;

      setSelectedAddress(value);
      populateAddressInfo();
      changeAddress(previousCountryCode);

      $(document).trigger("userOpenedSavedAddressDropdown");
    }

    function populate(_addressBook, _selectedAddressId) {
      addressBook = _addressBook;

      setSelectedAddress(_selectedAddressId);
      populateAddressSelect();
      populateAddressInfo();
      storeSelectedValue();
    }

    function initAddressObjects() {
      var addressSelectorId = '#' + context + '_addressSelector';
      var addressSelector = $(addressSelectorId);

      savedAddressContainer = addressSelectorId + ' .saved-address';

      addressSelect = addressSelector.find('[name=addressSelect]');
      addressDetails = addressSelector.find('.addressDetails');

      addressOptionTemplate = Handlebars.compile(addressSelector.find('.addressOptionTemplate').html());
      addressInfoTemplate = Handlebars.compile(addressSelector.find('.addressInfoTemplate').html());
    }

    function init(ctx, opts) {
      context = ctx;
      options = $.extend({}, defaultOptions, opts);

      initAddressObjects();

      $(function () {
        MF.select.init({
          contextId: addressSelect,
          callback: onAddressSelectChange
        });
      });
    }

    return {
      init: init,
      callbacks: callbacks,
      populate: populate,
      getSelectedAddress: getSelectedAddress,
      saveSelectedAddress: saveSelectedAddress,
      setSelectedAddress: setAddressAndPublishEvent
    };
  };

  window.MF = MF;
}(jQuery, this, MF.checkout.mediator, MF.shippingCountrySwitch));

/*
 *  requires
 *  MF.checkout.mediator
 *  MF.formMode
 */

;(function($, window, mediator, formMode) {
    "use strict";

    var MF = window.MF || {};

    var NO_VALUE = null;

    var defaultOptions = {
        addressForm: {
            mode: "manual"
        },
        inEvents: {
            addressSet: NO_VALUE
        }
    };

    MF.addressInfo = function(editAddressForm) {

        var options, context;

        var addressInfo, addressData, addressSelector, addressDetails, addressInfoTemplate, editAddressLink;

        var onAddressSelectedEvent = function(address) {
            addressData = address;
            addressData.isJapanese = address.country.isocode === 'JPN';
            populateAddressInfo();
        };

        var onEditAddressLinkClick = function(e) {
            e.preventDefault();
            MF.select.init("#callCodeSelector");
            populateEditAddressForm();
        };

        var populateAddressInfo = function() {
            mediator.publish('addressInfo:edit:enterViewMode');
            formMode.switchMode(addressInfo, "view");
            addressDetails.html(addressInfoTemplate(addressData));
        };

        var populateEditAddressForm = function() {
            mediator.publish('addressInfo:edit:enterEditMode');
            formMode.switchMode(addressInfo, "edit");

            editAddressForm.clear();
            editAddressForm.populate(addressData);
            editAddressForm.show(options.addressForm.mode);
            addressInfo.addClass("reviewEditMode");
            addressInfo.parents(".saved-address").addClass("savedAddressEditMode");
            addressInfo.find(".post-code--input").addClass("fullWidthPostCode");
        };

        var initObjects = function(address) {
            addressSelector = $("#" + context + "_addressSelector");

            addressInfo = addressSelector.find(".address-info");

            addressDetails = addressSelector.find(".addressDetails");
            addressInfoTemplate = Handlebars.compile(addressSelector.find('.addressInfoTemplate').html());
        };

        var bindButtons = function() {
            addressSelector.on("click", ".editAddressLink", onEditAddressLinkClick);
        };

        var subscribeToInputEvents = function() {
            mediator.subscribe(options.inEvents.addressSelected, onAddressSelectedEvent);
        };

        var init = function(ctx, opts) {
            options = $.extend({}, defaultOptions, opts);
            context = ctx;

            initObjects();

            $(function() {
                bindButtons();
                subscribeToInputEvents();
            });
        };

        return {
            init: init
        };

    };

    window.MF = MF;

}(jQuery, this, MF.checkout.mediator, MF.formMode));

/*
 *  requires
 *
 *  MF.shippingCountrySwitch
 */

;(function ($, window, mediator, shippingCountrySwitch) {
  'use strict';

  var MF = window.MF || {};

  var debug = false;

  var NO_VALUE = null;

  var defaultOptions = {
    data: {
      root: 'data',
      address: NO_VALUE
    },
    inEvents: {
      checkoutInit: NO_VALUE,
      addressShow: NO_VALUE,
      addressHide: NO_VALUE
    },
    outEvents: {
      addressEdit: 'checkout:address:edit'
    }
  };

  MF.addressSelector = function (addressForm, editAddressForm, addressDropDown) {
    var context;
    var options;

    var addressData;
    var addressBook;
    var selectedAddressId;

    var addressSelectorId;
    var addressSelector;
    var addressType;

    var onBillingAddressTypeChange_trigger1=true, onBillingAddressTypeChange_trigger2=true;
    var onAddressTypeChange_trigger1=true, onAddressTypeChange_trigger2=true;

      function initAddressData(data) {
      addressData = data[options.data.root][options.data.address];
      addressBook = addressData['addressBook'];

      if (addressBook.length > 0 && !selectedAddressId) {
        selectedAddressId = addressData['selectedAddressId'] || addressBook[0].id;
      }
      if (addressBook.length === 0) {
        $('#saved-address').hide();
        $('#alternate-address-option').hide();
      }
    }

    function switchAddressType(addressTypeValue) {
      addressType.filter('[value=' + addressTypeValue + ']').trigger('click');
    }

    function populateAddressRadioButton() {
      var selectedAddressType = addressData['selectedAddressType'];
      switchAddressType(selectedAddressType);
    }

    function onCheckoutInit(data) {
      initAddressData(data);

      addressDropDown.populate(addressBook, selectedAddressId);

      if(MF.editPhoneNumber) {
        new MF.editPhoneNumber.init('#' + context + '_addressSelector');
      }
      
      populateAddressRadioButton();
    }

    function showAddressSelector() {
      addressSelector.show();
    }

    function hideAddressSelector() {
      addressSelector.hide();
    }

    function onAddressDataFetched(data) {
      initAddressData(data);

      addressDropDown.populate(addressBook, selectedAddressId);
      addressDropDown.setSelectedAddress();

      populateAddressRadioButton();
    }

    function updateAddressData() {
      return $.getJSON(options.url.getAddressData)
        .then(onAddressDataFetched)
        .fail(function () {
          if (debug) {
            console.error('cannot get addresses');
          }
        });
    }

    function onAddressAdded() {
      updateAddressData();
    }

    function onAddressSaved(response, addressId) {
      addressForm.clear();

      selectedAddressId = addressId;

      updateAddressData();
    }

    function onAddressUpdated() {
      editAddressForm.hide();

      updateAddressData();
    }

    function onAddressSelectChange(addressId) {
      selectedAddressId = addressId;
      new MF.editPhoneNumber.init('#' + context + '_addressSelector');
    }

    function checkNewAddress() {
      addressType.filter("[value='new']").trigger('click');
    }

    function onShowAddressForm() {
      checkNewAddress();
    }

    function isNewAddress() {
      if (addressType != null) {
        return addressType.filter(':checked').val() === 'new';
      }
    }

    function ensureFormIsValid() {
      if (addressForm.isInLookupMode()) {
        addressForm.switchMode(addressForm.modes.manual);
      }

      if (!addressForm.validate()) {
        throw new Error('Address Form [' + context + '] is invalid');
      }
    }

    function saveAddress() {
      if (isNewAddress()) {
        ensureFormIsValid();

        return addressForm.save();
      }

      return addressDropDown.saveSelectedAddress();
    }

    function switchCountry() {
      var selectedAddress = addressDropDown.getSelectedAddress();

      shippingCountrySwitch.switchCountry({
        countryCode: selectedAddress.country.isocode,
        handlers: {
          onClose: function () {
            // Going back to the 'new' address type
            switchAddressType('new');
          },
          onContinue: function () {
            return saveAddress();
          }
        }
      });
    }

    function publishAddressEditMode(state) {
      mediator.publish(options.outEvents.addressEdit, state);
    }

    /*
     If back-end returns selectedAddressType=new we consider that
     address drop-down does not contain
     country which is the same as selected (session) country.
     In this case we expect new address to be created
     */
    function requiresNewAddress() {
      return addressData['selectedAddressType'] === 'new';
    }


      function onAddressTypeChange(event) {
          var currentTarget = event.currentTarget.id;

          if (isNewAddress()) {
            publishAddressEditMode(true);
            addressForm.show();
            if (onAddressTypeChange_trigger1 && currentTarget === 'delivery_newAddressRadio') {
              $(document).trigger(
                "shippingAddressOption", {
                    "option": 'Enter new shipping address'
                });
              onAddressTypeChange_trigger1 = false;
            }
            if (onBillingAddressTypeChange_trigger1 && currentTarget === 'billing_newAddressRadio') {
              $(document).trigger(
                    "billingAddressOption", {
                        "option": 'Enter new billing address'
                  });
              onBillingAddressTypeChange_trigger1 = false;
            }
      } else if (requiresNewAddress()) {
        publishAddressEditMode(true);
        switchCountry();
      } else {
        publishAddressEditMode(false);
        addressForm.hide();
        if ($(this).closest('#delivery_addressSelector').exists()) {
          $('.purchaseNowBtn').prop('disabled', false).css('opacity', 1);
        }
      }
      if (onAddressTypeChange_trigger2 && currentTarget === 'delivery_existingAddressRadio') {
        $(document).trigger(
          "shippingAddressOption", {
            "option": 'Use saved address'
          });
        onAddressTypeChange_trigger2 = false;
      }
      if (onBillingAddressTypeChange_trigger2 && currentTarget === 'billing_existingAddressRadio') {
        $(document).trigger(
           "billingAddressOption", {
             "option": 'select billing address'
           });
        onBillingAddressTypeChange_trigger2 = false;
      }
    }

    function initAddressObjects() {
      addressSelectorId = '#' + context + '_addressSelector';

      addressSelector = $(addressSelectorId);
      addressType = addressSelector.find('[name=' + context + '_addressType]');
    }

    function init(ctx, opts) {
      context = ctx;
      options = $.extend({}, defaultOptions, opts);

      initAddressObjects();

      $(function () {
        mediator.subscribe(options.inEvents.checkoutInit, onCheckoutInit);
        mediator.subscribe(options.inEvents.addressShow, showAddressSelector);
        mediator.subscribe(options.inEvents.addressHide, hideAddressSelector);

        if (options.inEvents.deliveryAddressAdded) {
          mediator.subscribe(options.inEvents.deliveryAddressAdded, onAddressAdded);
        }

        addressForm.callbacks.onAddressSaved.add(onAddressSaved);
        editAddressForm.callbacks.onAddressSaved.add(onAddressUpdated);

        addressDropDown.callbacks.onAddressChange.add(onAddressSelectChange);
        addressDropDown.callbacks.onShowAddressForm.add(onShowAddressForm);

        addressType.on('change', onAddressTypeChange);
      });
    }

    return {
      init: init,
      saveAddress: saveAddress,
      isNewAddress: isNewAddress,
      isFormValid: ensureFormIsValid
    };
  };

  window.MF = MF;
}(jQuery, this, MF.checkout.mediator, MF.shippingCountrySwitch));

/*
 *  requires
 */

;(function($, window, validator) {
    "use strict";

    var MF = window.MF || {};

    MF.contactUsFormValidator = (function() {
        var enquirySelectId = $("#typeOfEnquiry").find('select').attr("id");

        var countrySelectId = $("div#countrySelect select").attr("id");
        var sizeSelectId = $("div#sizeSelect select").attr("id");

        var contactUsThisFieldIsRequired = document.querySelector('.contactUsThisFieldIsRequired');
        var errorMessage;
        
        if (contactUsThisFieldIsRequired) {
          errorMessage = document.querySelector('.contactUsThisFieldIsRequired').innerHTML.trim();
        }

        var currentLanguage = $.cookie('language');
        var validationRules = {
            name: {
                required: true
            },
            "last-name": {
                required: true
            },
            email: {
                required: true,
                pattern: '\\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}\\b'
            },
            phone: {
                required: {
                depends: function(element) {
                      // if user selects phone then phone is required
                      var selectorsVal = $("#contactByPhone, #contactByPhone_sg").is(":checked");
                      var placeHolderValue = $('#phone').data('placeholder');
                      if (selectorsVal){ $('#phone').attr('placeholder',placeHolderValue + '*');}else{$('#phone').attr('placeholder',placeHolderValue)}
                      return selectorsVal
                    }
                 }
            },
            typeOf: {
                required: true // Type of enquiry
            },
            subject: {
                required: true // Type of enquiry
            },
            description : {
              required: true
            },
            "g-recaptcha-response": {
                required: function() {
                    return document.querySelector('.g-recaptcha');
                }
            },
        };
        validationRules[countrySelectId] = {
            required: true // Country field is required
        };

        validationRules[enquirySelectId] = {
            required: true // Type of enquiry field is required
        };

        validationRules[sizeSelectId] = {
            required: true // Size is required
        };

        var errorPlacement = function(error, element) {
            error.insertBefore(element);
        };

        var messages = {
            "g-recaptcha-response": errorMessage,
        };

        var validateContactUsForm = function(contactUsForm) {
            return validator.validate(contactUsForm, {
                onsubmit: true,
                rules: validationRules,
                messages: messages,
                ignore: '.ignore',
                errorPlacement: errorPlacement
            });
        };

        return {
            validate: validateContactUsForm
        }
    }());

}(jQuery, this, MF.validator));

/*
 *  requires
 */

;(function($, window, contactUsFormValidator) {
    "use strict";

    var MF = window.MF || {};

    var defaultOptions = {
        selectors: {
            form: "#contactSfForm",
            email: "#contactByEmail",
            phone: "#contactByPhone",
            order: "#orderNoContainer",
            firstName: "#name",
            lastName: "#last-name",
            contactName: "[data-contact-name]",
            typeOfEnquiry: "#typeOfEnquiry",
            countrySelect: "#countrySelect",
            sizeSelect: "#sizeSelect",
            subject: "input[type=hidden][name='subject']",
            subjectContainer: ".subjectContainer",
            typeOfEnquiryContainer: "#typeOfEnquiry"
        },
        hideOrderNoField: false,
        hideTypeOfEnquiry: false
    };

    MF.contactUsForm = function () {

        var $form, $emailCheckbox, $phoneCheckbox;
        var $firstName, $lastName, $contactName;
        var $sizeSelect, $subject, $subjectContainer;
        var $typeOfEnquiryContainer;
        var validator, options;

        var radioGroupSetup = function() {
            var onChange = function($elementToUncheck) {
                if(this.checked) {
                    $elementToUncheck.prop("checked", false);
                }
            };

            $emailCheckbox.on("change", _.partial(onChange, $phoneCheckbox));
            $phoneCheckbox.on("change", _.partial(onChange, $emailCheckbox));
        };

        var orderContainerSetup = function() {
            var orderContainer = $form.find(options.selectors.order);

            if (options.hideOrderNoField) {
                orderContainer.html('');
            } else {
                orderContainer.show();
            }
        };

        var getForm = function() {
            return $form;
        };

        var getValidator = function() {
            return validator;
        };

        var setSelectedSizeOption = function(selectedOption) {
            if (selectedOption) {
                var $select = $sizeSelect.find("select");
                $select.val(selectedOption);
                $select.trigger("change");
            }
        };

        var setSubject = function(val) {
            if ($subject) {
                $subject.val(val);
            } else {
                $subjectContainer.html("<input type=hidden name='subject' id='subject' value='" + val + "' />");
            }
        };

        var onNameChange = function() {
            $contactName.val(($firstName.val() + " " + $lastName.val()).trim());
        };

        var firstLastNameSetup = function() {
            $firstName = $form.find(options.selectors.firstName);
            $lastName = $form.find(options.selectors.lastName);
            $contactName = $form.find(options.selectors.contactName);

            $firstName.on("change", onNameChange);
            $lastName.on("change", onNameChange);

            onNameChange(); // initializing contact field
        };

        var initSelectors = function() {
            MF.select.init({contextId: $form.find(options.selectors.typeOfEnquiry)});
            MF.select.init({contextId: $form.find(options.selectors.countrySelect)});
            MF.select.init({contextId: $form.find(options.selectors.sizeSelect)});
        };

        var setGoogleCaptchaValue = function(response, element) {
            if (response === null || response.value.trim() === '') {
                var elems = JSON.parse(document.querySelector(element).value);
                elems.ts = new Date().getTime();
                document.querySelector(element).value = JSON.stringify(elems);
            }
        }
        
        var googleCaptchaSettingsOnContactUsPage = function() {
            var gCaptchaResponse = document.querySelector('#g-recaptcha-response');
            if (gCaptchaResponse) {
              setGoogleCaptchaValue(gCaptchaResponse, '.captcha_settings');
            }
        }
        
        var googleCaptchaSettingsOnPDP = function() {
            var needHelpPDPForm = document.querySelector('#contactSfForm #g-recaptcha-response');
            if (needHelpPDPForm) {
                var response1 = needHelpPDPForm;
                setGoogleCaptchaValue(response1, '.captcha_settings1');
            }
        
            var sizeGuidePDPForm = document.querySelector('#contactSfFormSizeGuide #g-recaptcha-response');
            if (sizeGuidePDPForm) {
                var response2 = sizeGuidePDPForm;
                setGoogleCaptchaValue(response2, '.captcha_settings2');
            }
        }

        var initForm = function(opts) {
            options = $.extend(true, {}, defaultOptions, opts);

            $form = $(options.selectors.form);
            $emailCheckbox = $form.find(options.selectors.email);
            $phoneCheckbox = $form.find(options.selectors.phone);
            $sizeSelect = $form.find(options.selectors.sizeSelect);
            $subject = $form.find(options.selectors.subject);
            $subjectContainer = $form.find(options.selectors.subjectContainer);
            $typeOfEnquiryContainer = $form.find(options.selectors.typeOfEnquiryContainer);

            if (options.hideTypeOfEnquiry) {
                //$typeOfEnquiryContainer.html("");
            }

            if($form.length != 0) validator = contactUsFormValidator.validate($form);
            firstLastNameSetup();
            orderContainerSetup();
            initSelectors();
            radioGroupSetup();

            if (document.querySelector('.page-productDetails')) {
                setInterval(googleCaptchaSettingsOnPDP, 500);
            } else if (document.querySelector('#submenuContainerg-recaptcha-response')) {
                setInterval(googleCaptchaSettingsOnContactUsPage, 500);
            }
        };

        return {
            init: initForm,
            getForm: getForm,
            getValidator: getValidator,
            setSelectedSizeOption: setSelectedSizeOption,
            setSubject: setSubject
        }
    };

}(jQuery, this, MF.contactUsFormValidator));
(function($) {
  'use strict';

  var MF = window.MF || {};

  MF.privateSale = (function() {

    var gender = window.idzCustomData ? window.idzCustomData.gender : 'womens';

    var options = Object.assign({
      ACTIVE: false,
      DEBUG: false,
      APAC_COUNTRIES: [],
      US_COUNTRIES: [],
      LOCALIZED_LINK_NAMES: {
        'en': 'PRIVATE SALE',
        'fr': 'VENTE PRIVÉE',
        'ko': '프라이빗 세일'
      },
      GROUPS: {
        'APAC': [],
        'US': [],
        'ROW': []
      },
      LINK_PER_REGION: {
        'APAC': '/${GENDER}/lists/apac-private-sale',
        'US': '/${GENDER}/lists/us-private-sale',
        'ROW': '/${GENDER}/lists/private-sale'
      }
    }, window.MF.privateSaleOptions || {});
    /**
     * This function return TRUE when a customer is logged in and belongs to a customer group
     * with private sales for the current country.
     * @param region, the current sale region
     * @returns boolean TRUE if the current customer is a private sale customer, FALSE otherwise
     **/
    function isPrivateSaleCustomer(region) {
     var customerGroups = (window.idzCustomData && idzCustomData.cg) ? idzCustomData.cg.split(',') : [];

      for (var i = 0; i < customerGroups.length; i++) {
        if (options.GROUPS[region].indexOf(customerGroups[i]) > -1) {
          if (options.DEBUG) {
            console.log('Customer in private sale group for region ' + region);
          }
          return true;
        }
      }

      return false;
    }
    /**
     * This function retrieves the Private sale link
     * @returns the link in the format
     *   {
     *         localizedLinkName: LINK_NAME,
     *         url: URL
     *    }
     **/
    function getPrivateSaleLink() {

      var country = $.cookie('country');
      var locale = $.cookie('language').substr(0, 2);
      if (locale !== 'en' && locale !== 'fr' && locale !== 'ko') {
        locale = 'en';
      }

      var region = 'ROW';
      if (options.APAC_COUNTRIES.indexOf(country) > -1) {
        region = 'APAC';
      } else if (options.US_COUNTRIES.indexOf(country) > -1) {
        region = 'US';
      }

      if (options.DEBUG) {
        console.log(
          'Private sale init for ' + region + ', ' + locale + ', ' + gender);
      }

      if (isPrivateSaleCustomer(region)) {
        if (options.DEBUG) {
          console.log('Private Sale condition detected');
        }

        return {
          'localizedLinkName': options.LOCALIZED_LINK_NAMES[locale],
          'url': options.LINK_PER_REGION[region]
        };
      }
      return null;
    }

    function waitForMenuAndInsertPrivateSaleLink(privateSale, tries) {
      if ($('#offcanvas .slide-menu__list__wrapper').children().length > 0) {
        $(privateSale).
          insertAfter($('ul.slide-menu__list__wrapper li:nth-child(1)')[0]);
        if (options.DEBUG) {
          console.log('ADDING PRIVATE SALE LINK');
        }
      } else if (tries > 0) {
        setTimeout(function() {
            waitForMenuAndInsertPrivateSaleLink(privateSale, --tries);
          }
          , 50);
      }
    }

    /**
     * This function add the private link when the customer select mens or womens menus
     **/
    function showPrivateLink(privateSaleData) {
      if (privateSaleData) {
        var mobileGender = gender;
        if (window.location.hash) {
          mobileGender = window.location.hash.replace('#', '');
          if (options.DEBUG) console.log('replacing link for ' + mobileGender);
        }
        var privateSale = '<li class="slide-menu__list__item"><span><a class="slide-menu__link" style="color:red" href=' +
          privateSaleData.url.replace('${GENDER}', mobileGender) + '>' +
          privateSaleData.localizedLinkName + '</a></span></li>';

        waitForMenuAndInsertPrivateSaleLink(privateSale, 10);

        var privateSaleDesktop = '<li class="main-menu__item no__submenu salesOn"><span class="main-menu__item__text"><a class="main-menu__link" href=' +
          privateSaleData.url.replace('${GENDER}', gender) + '>' +
          privateSaleData.localizedLinkName + '</a></span></li>';

        $('#nav_main ul.yCmsContentSlot.main-menu__wrapper').
          prepend(privateSaleDesktop);
        window.dispatchEvent(new Event('resize'));
      } else if (options.DEBUG) {
        console.log('NO PRIVATE SALE LINK NEEDED');
      }
    }

    function init() {

      if (options.ACTIVE) {

        if(options.DEBUG) {
          console.log('PRIVATE SALE ENABLED');
        }
        var privateSaleData = getPrivateSaleLink();

        $('#offcanvas').on('click', '.slide-menu__header__item__link', function(event) {
          showPrivateLink(privateSaleData);
        });

        showPrivateLink(privateSaleData);
      }
    }

    return {
      init: init,
      getPrivateSaleLink: getPrivateSaleLink
    };
  })();

  window.MF = MF;

}(jQuery));
/*
 * MF.accordion
 *
 * Copyright (c) 2014 Damola
 * Licensed under the MIT license.
 *
 * MF.Accordion.init(); -  Todo: check for FastClick / Hammer
 *
 */
(function($) {
    'use strict';

    var MF = window.MF || {};

    MF.accordion = (function() {

        var defaults = {
            speed: 350,
            activeClass: 'is-active',
            multipleOpen: false,
            isDesktop: true
        };

        function init(options) {
            var dataAttr = $('[data-mf-accordion]');

            $.each(dataAttr, function() {
                var $this = $(this),
                    dataSetting = _getConfig($this),
                    opt = $.extend({}, defaults, dataSetting),
                    initAcc = $this;
                if ($this.data('mf-accordion-initialized')) {
                    return;
                }

                opt.accordionEls = $this.find("li>span");

                if (opt.isDesktop == true) {
                    opt.accordionEls.find("~ ul").add(opt.accordionEls.find("~ [data-mf-accordion-sub]")).css("display", "none");
                } else if (!opt.isDesktop == false && $(window).width() < 690) {
                    // Review
                    opt.accordionEls.find("~ ul").add(opt.accordionEls.find("~ [data-mf-accordion-sub]")).css("display", "none");
                }
                _openFirstContent(opt);
                _bindEvent(opt);

                $this.data('mf-accordion-initialized', true);

            });
        }

        function _getConfig(dataAttr) {
            if (dataAttr.data("mf-accordion")) {
                /* Todo - Use regex to check the format is right, if not use the default */

                var _dataConfig = dataAttr.data("mf-accordion").split(","),
                    i = 0,
                    length = _dataConfig.length,
                    _dataSetting = {};

                for (; i < length; i++) {
                    _dataSetting[_dataConfig[i].split(":")[0]] = _dataConfig[i].split(":")[1];
                }
                return _dataSetting;
            }
        }

        // Check if any item needs to be opened at first load
        function _openFirstContent(opt) {
            opt.accordionEls.parent("li").each(function(i, el) {
                var $thisEl = $(el);
                if ($thisEl.find(":has(ul)").add($thisEl.find(":has([data-mf-accordion-sub])"))) {
                    if ($thisEl.hasClass(opt.activeClass)) {
                        $thisEl.find("> ul").add($thisEl.find("> [data-mf-accordion-sub]")).css("display", "block");
                        $thisEl.addClass(opt.activeClass);
                    }
                }
            });
        }

        function _bindEvent(opt) {
            opt.accordionEls.on("click", opt, (typeof _ !== 'undefined') ? _.debounce(_callback, 200, true) : _callback)
                .on("doubleclick", function() {
                    return false;
                });
        }

        function _callback(e) {

            // header will behave as an accordion trigger only if href attribute is #, otherwise it will behave as a link
            var link = $(e.target).closest('a').andSelf().filter('a');
            if(link.attr('href') !== '#' && link.attr('href') !== 'javascript:void(0)') {
                return;
            }


            e.preventDefault();
            var opt = e.data;
            var speed = ~~opt.speed; // make sure it is a number!
            var $eventTarget = $(e.target).parent(), // span
                $eventParentLi = $eventTarget.parent("li"),
                $targetUl = $eventTarget.find("~ ul").add($eventTarget.find("~ [data-mf-accordion-sub]")),
                $targetUlGroup = $eventParentLi.parent().find("> li > ul").add($eventParentLi.parent().find("> li > [data-mf-accordion-sub]"));

            if (opt.multipleOpen === "true") {
                if ($eventParentLi.hasClass(opt.activeClass)) {
                    $targetUl.slideUp(speed);
                    $eventParentLi.removeClass(opt.activeClass);
                } else {
                    $targetUl.slideDown(speed);
                    $eventParentLi.addClass(opt.activeClass);
                }
            } else {
                if ($eventParentLi.hasClass(opt.activeClass)) {
                    $targetUl.slideUp(speed);
                    $eventParentLi.removeClass(opt.activeClass);
                } else {
                    $targetUlGroup.each(function(i, el) {
                        var $thisUl = $(el);
                        $thisUl.slideUp(speed);
                        $thisUl.parent("li").removeClass(opt.activeClass);
                    });
                    $targetUl.slideDown(speed, function() {
                        //MF.scrollBars.init();
                        $(".no-touch .sticky").trigger("sticky_kit:recalc");
                    });
                    $targetUl.parent("li").addClass(opt.activeClass);
                }
            }
        }

        return {
            init: init
        };

    })();

    window.MF = MF;

}(jQuery));

(function ($) {
  'use strict';

  var MF = window.MF || {};

  var debug = false;

  var defaults = {
    mywindow: $(window),
    size: 980 // 42.5em tablet Breakpoint
  };

  MF.responsiveTables = (function (window, undefined) {
    var switched = false;
    // TODO: scrollTable is defined below as a function.

    function events(el) {
      var rows = el.find('tr');
      rows.children().hover(
        function () {
          var index;
          rows.children().removeClass('hover');
          index = $(this).prevAll().length;
          rows.find(':nth-child(' + (index + 1) + ')').addClass('hover');
          rows.find('th').css({
            textDecoration: 'underline'
          });
        },
        function () {
          rows.children().removeClass('hover');
        }
      );

      rows.children().click(function () {
        if (debug) {
          console.log($(this).data('base-size-code'));
          console.log($('#WOMDSH850003WHI-variants').text());
        }
      });

      $('.pinned').find('tr').hover(function () {
        el.find('tr:eq(' + ($(this).index()) + ')').toggleClass('hover');
      });
    }

    function splitTable(original) {
      var copy;
      original.wrap('<div class="table-wrapper" />');

      copy = original.clone();
      copy.find('td:not(:first-child), th:not(:first-child)').css('display', 'none');
      copy.removeClass('responsive');

      original.closest('.table-wrapper').append(copy);
      copy.wrap('<div class="pinned" />');
      original.wrap('<div class="scrollable" />');
    }

    function unsplitTable(original) {
      original.closest('.table-wrapper').find('.pinned').remove();
      original.unwrap();
      original.unwrap();
    }

    function updateTables() {
      var myTable = $('.responsive');
      var myTableFull = $('.full');
      events(myTable);

      if ($('table').data('js', 'mf-responsive')) {
        if ((defaults.mywindow.width() < defaults.size) && !switched) {
          switched = true;
          events(myTable);
          myTable.each(function (i, element) {
            splitTable($(element));
            myTableFull.wrap('<div class="table-scroll-wrapper" />');
          });
          return true;
        } else if (switched && (defaults.mywindow.width() > defaults.size)) {
          switched = false;

          myTable.each(function (i, element) {
            unsplitTable($(element));
            myTableFull.unwrap();
          });
        }
      }
    }

    // Events
    defaults.mywindow.on('resize', updateTables);
    defaults.mywindow.load(updateTables);
    defaults.mywindow.on('redraw', function () {
      switched = false;
      // TODO: It seems like we wanted to call a function
      // below instead of simply referring to the variable
      // updateTables;
    });

    function scrollTable(original) {
      original.wrap('<div class="table-scroll-wrapper" />');
      copy.removeClass('responsive');
    }

    function setCellHeights(original, copy) {
      var tr = original.find('tr');
      var trCopy = copy.find('tr');
      var heights = [];

      tr.each(function (index) {
        var self = $(this);
        var tx = self.find('th, td');

        tx.each(function () {
          var height = $(this).outerHeight(true);
          heights[index] = heights[index] || 0;
          if (height > heights[index]) heights[index] = height;
        });
      });

      trCopy.each(function (index) {
        $(this).height(heights[index]);
      });
    }

    return {
      init: updateTables
    };
  })();
  window.MF = MF;
}(jQuery));

/*
 * MF.accordion
 *
 * Copyright (c) 2014 Damola
 * Licensed under the MIT license.
 *
 * MF.expand.init(); -  Todo: check for FastClick / Hammer
 *
 */
(function($, mediator) {
    'use strict';

    var MF = window.MF || {};

    MF.expand = (function() {

        var defaults = {
            speed: 350,
            activeClass: 'open',
            debouceLimit: 150,
            target: null,
            toggle: null,
            close: null,
            animationType: 'slideDown',
            easing: 'easeOutQuad',
            closeOthers: 'close'
        };

        function init(options) {

            var dataAttr = $('[data-mf-expand]');

            $.each(dataAttr, function() {

                var $this = $(this),
                    dataSetting = _getConfig($this),
                    opt = $.extend({}, defaults, dataSetting);

                /* A list of error checks before proceeding 
                 * Target must be defined, and also exsits within the DOM
                 * Todo - what if there are multiple targets defined?
                 */
                // Target Element
                if (!opt.target || !$("[data-mf-extarget=" + opt.target + "]").length) {
                    return;
                }
                // Close Button Element
                opt.animationType = (opt.close && $("[data-mf-close=" + opt.close + "]").length) ? "slideDown" : "slideToggle";

                opt.targetEls = $this;

                if ($("[data-mf-close=" + opt.close + "]").length) {
                    _closeContent(opt);
                }
                _hideTargetContent(opt);
                _bindEvent(opt);

            });
        }

        // this can be converted into resuable _core and use javascript instead of jQuery
        function _getConfig(dataAttr) {
            if (dataAttr.data("mf-expand")) {
                /* Todo - Use regex to check the format is right, if not use the default */

                var _dataConfig = dataAttr.data("mf-expand").split(","),
                    i = 0,
                    length = _dataConfig.length,
                    _dataSetting = {};

                for (; i < length; i++) {
                    _dataSetting[_dataConfig[i].split(":")[0]] = _dataConfig[i].split(":")[1];
                }
                return _dataSetting;
            }
        }

        // Check if any item needs to be opened at first load
        function _hideTargetContent(opt) {
            $("[data-mf-target=" + opt.target + "]").css("display", "none");
        }

        function _bindEvent(opt) {
            opt.targetEls.on("click", opt, (typeof _ !== 'undefined') ? _.debounce(_revealContent, opt.debouceLimit, true) : _revealContent);
        }
        // Remove from reusable
        function _focusInput(){
                    var $input = $('#search');
                    $input.val('');
                    $input.focus();
                }

        function _revealContent(e) {
            e.preventDefault();

            var opt = e.data, // retrieve data options
                $targetEl = $("[data-mf-extarget=" + opt.target + "]");

            if (opt.closeOthers === "close") {
                _closeOthers(opt.target);
            }

            if (opt.animationType === "slideDown") {
                if (MF.breakpoint.getActive() == 'mobile') {
                    $('.header-search__label').css({'display':'none','z-index':'-1'});
                    var timer;
                    clearTimeout(timer);
                    timer = setTimeout(function() {

                            $('.header-search__label').fadeIn(100).css({'z-index':'1'});

                    }, 250);

                    
                } else {
                    $('.header-search__label').css({'display':'block','z-index':'1'})
                }

                $targetEl.slideDown({
                    duration: opt.speed,
                    easing: opt.easing,
                    complete: _focusInput,
                    step: function(time, tween) { if (tween.prop == 'height') { mediator.publish('mf-expand:animation-ended') } }
                 });
            } else {

                $targetEl.slideToggle({
                    duration: opt.speed,
                    easing: opt.easing,
                    complete: _focusInput,
                    step: function(time, tween) { if (tween.prop == 'height') { mediator.publish('mf-expand:animation-ended') } }
                 });
            }

        }

        function _closeContent(opt) {
            $("[data-mf-close=" + opt.close + "]").on("click", function(e) {
                e.preventDefault();
                // Use Mediator instead TODO
                var loginForm = $("#headerLoginForm");
                if(loginForm.length) loginForm.validate().resetForm();

                var $input = $('#search');
                    $input.val('');

                if ($(window).width() < 641) {
                    $('.header-search__label').css({'z-index':'-1','display':'none'});
                }

                $(this).fadeOut(200);

                $("[data-mf-extarget=" + opt.target + "]").slideUp({
                    duration: opt.speed,
                    easing: opt.easing,
                    step: function(time, tween) { if (tween.prop == 'height') { mediator.publish('mf-expand:animation-ended') } },
                    complete: function() { $("[data-mf-close=" + opt.close + "]").show(); }
                });
            });

             _focusInput();
        }

        function _closeOthers(target){     
            $("[data-mf-extarget][data-mf-extarget!=" + target + "]").slideUp({
                    duration: defaults.speed,
                    easing: defaults.easing,
                    step: function(time, tween) { if (tween.prop == 'height') { mediator.publish('mf-expand:animation-ended') } }
                });
        }

        function close(target){
            $("[data-mf-extarget][data-mf-extarget=" + target + "]").slideUp({
                    duration:10,
                    easing: defaults.easing,
                    step: function(time, tween) { if (tween.prop == 'height') { mediator.publish('mf-expand:animation-ended') } }
                });
        }

        return {
            init: init,
            close: close
        };

    })();

    window.MF = MF;

}(jQuery, MF.checkout.mediator));

MF.expand.init();

(function($, mCustomScrollbar) {
  'use strict';

  var MF = window.MF || {};
  var $myWindow = $(window);
  var defaults = {
    horizontalScroll: false,
    autoDraggerLength: true,
    theme: "dark-thick",
    mouseWheel: {
      enable: true
    }
  }
  MF.scrollBars = (function(window, undefined) {

    function init() {

      var dataAttr = $('[data-mf-scrollbar]');

      $.each(dataAttr, function() {
        var $this = $(this),
          dataSetting = _getConfig($this),
          data = $.extend({}, defaults, dataSetting);

        if (!data.target || !$("[data-mf-target=" + data.target + "]").length) {
          return;
        }

        // need to apply setting!
        if (data.horizontalScroll) {
          centerScrollBar(data);
        } else {
          _buildScrollBar(data);
        }

      });
    }

    function destroy(data) {
      var $el = $("." + data);
      $el.mCustomScrollbar("destroy");
    }

    function update(data) {
      var $el = $("." + data);
      $el.mCustomScrollbar("update");
    }

    function centerScrollBar(data) {

      $("[data-mf-target=" + data.target + "]").mCustomScrollbar({
        horizontalScroll: data.horizontalScroll,
        theme: data.theme,
        mouseWheel: {
          enable: false
        }
      });

          var $sliderEl = $("[data-mf-target=" + data.target + "]");
          var $wrapperEl = $('.ph-tpl__slider__wrapper');

          var $elLenght = $wrapperEl.children().length;
          var $elwidth = 325;
          var $fullWrapperEl = (($elwidth + 20) * $elLenght)+20;
          var $scrollBarHandleWidth = $('.mCSB_dragger_bar').width();


            $wrapperEl.width($fullWrapperEl);
            var $thisWindow = $myWindow.innerWidth();
            var $wrapperElSize = $wrapperEl.width();
            var $size = (($wrapperElSize-$thisWindow)+($scrollBarHandleWidth*4))/$elLenght;

          clearTimeout(waitScrollbar);
          var waitScrollbar = setTimeout(function(){

            $("[data-mf-target=" + data.target + "]").mCustomScrollbar("scrollTo", $size, {
              moveDragger: true,
              autoDraggerLength: false
            });

          }, 100);
    }
    function _buildScrollBar(data) {
      $("[data-mf-target=" + data.target + "]").mCustomScrollbar({
          horizontalScroll: data.horizontalScroll,
          autoDraggerLength: data.autoDraggerLength,
          theme: data.theme,
          mouseWheelPixels:4,
          scrollInertia:150,
          mouseWheel:true
      });
    }

    function _getConfig(dataAttr) {
      if (dataAttr.data("mf-scrollbar")) {

        var _dataConfig = dataAttr.data("mf-scrollbar").split(","),
          i = 0,
          length = _dataConfig.length,
          _dataSetting = {};

        for (; i < length; i++) {
          _dataSetting[_dataConfig[i].split(":")[0]] = _dataConfig[i].split(":")[1];
        }
        return _dataSetting;
      }
    }
    return {
      init: init,
      destroy: destroy,
      update: update,
      centerScrollBar:centerScrollBar

    };
  })();

  window.MF = MF;

}(jQuery, $.fn.mCustomScrollbar));
/*
 * Requires:
 *  jquery.magnific-popup.js
 */

// Overlay generator
//
// Usage:
// Lets assume we want to display as an overlay the element with the class "test-overlay"
//
// 1. The way to hide the element is by adding the .mfp-hide class to it (this is magnific-popup implementation)
//
// 2. Call the following JS function (this uses the magnific-popup plugin via MF.overlay)
//
//    MF.overlay.openWithElement({
//        element: $( '.test-overlay' )
//    })
//
//    The element will be wrapped in .mfp (magnific-popup) namespaced element, the topmost
//    element being .mfp-wrap. If you want a custom class added to this element you must
//    pass the mainClass property to the paramter as well.
//
// 3. Now to style it you have to create an overlay depending on how many columns it has
//    to span. Go to the _overlay-definitions.scss file and check if the wanted overlay is
//    already there.
//    If it is then just use it (i.e. jump to step 3)
//    If it isn't then create a new one. The syntax is:
//    
//    @include create-overlay (overlay-name, desktop-columns[ wide], desktop-padding[ wide], tablet-columns[ wide], tablet-padding[ wide]);
//
//    As a convention ideally the overlay name should reflect how many columns it uses on desktop layout
//        (eg: desktop-20-wide)
//
//    Example:
// *  @include create-overlay (desktop-20-wide, 20 wide, 1 wide, 20, 1);
//
// 4. Attach the styling to the element
//
//    .test-overlay {
// *       @include extend-overlay (desktop-20-wide);
//     }
// 
// 5. HTML markup that needs to be used:
//        <div class="test-overlay mf-overlay mfp-hide">
//            <!-- note that the header is wrapped in <class_chosen_by_you>__header -->
//            <div class="test-overlay__header"><h2><span> <!-- Title goes here --> </span></h2></div>
//
//            <!-- Your HTML goes here -->
//        </div>


;(function ($, window, document) {
    "use strict";

    var MF = window.MF = window.MF || {};

    var defaultOptions = {
        closeMarkup: '<a title="%title%" type="button" class="mfp-close"></a>',
        type: "inline",
        callbacks: {
            close: function() {
                // We add a callback which is used for Geo IP popups only
                if (typeof MF.geoip === 'object') {
                    if ($.isFunction(MF.geoip.is_geo_ip_popup_activated)){
                        if (MF.geoip.is_geo_ip_popup_activated()){
                            if ($.isFunction(MF.custom.bindOverlay)){
                                MF.geoip.remove_geo_ip_popup();
                                setTimeout(MF.custom.bindOverlay, 3000);
                                MF.geoip.set_geo_ip_activated_to_false();
                            }
                        }
                    }
                }

                if (typeof MF.custom === 'object') {
                    if ($.isFunction(MF.custom.bindOverlay) && MF.custom.toLaunchSlidein()){
                        MF.custom.signupForUpdates($.cookie('country'));
                    }
                }
            }
        }
    };

    MF.overlay = (function () {

        /*
            A standard way to show overlay with options 'opts' which are accepted by original 'magnificPopup' plugin
         */
        function open(opts) {
            var magnificData = $.extend({}, defaultOptions, opts);

            $.magnificPopup.open(magnificData);
        }

        /*
            Opening overlay with an quick option to specify overlay element directly in data argument
         */
    	function openWithElement(data) {
            $.extend(data, {
                items: {
                    src: $( data.element )
                }
            });

            open(data);
        }


        // To link opening a popup directly to an <a> element
		/*
		$('.open-popup-link').magnificPopup({
		  type:'inline',
		  midClick: true, // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
		  mainClass: 'checkout-overlay-wrap'
		}).click();
		*/

        function close() {
            $.magnificPopup.close();
        }

    	return {
    		openWithElement: openWithElement,
            open: open,
            close: close
    	}
    })()
})(jQuery, this, this.document);


/*
 *  require : jQuery
 *
 */
(function ($, window, mediator) {
    'use strict';

    var MF = window.MF || {};

    MF.stickit = (function(){
        var $window;
        var $body;
        var $targetElement;
        var $topElement;
        var $bottomElement;
        var $wrapperElement;
        var oldTargetElementPosition;
        var oldWindowScroll = 0;
        var oldTotalTopElementHeights;
        var options;
        var oldTopElementTopOffset;
        var defaultOptions = { topOffset: 0, bottomOffset: 0 };
        var initialized = false;
        var oldWidth;
        var oldHeight;

        function computePositions() {
            if (!enabledStickyBehaviour) {
                $targetElement.removeAttr('style');
                $wrapperElement.removeAttr('style');
                return;
            }

            var $relevantTopElement;
            var referenceUpperLimit = -Infinity;
            var totalTopElementHeights = 0;

            $topElement.each(function (){
                var $this = $(this);
                var topElementTopOffset = $this.offset().top;
                var topElementHeight = $this.height();
                var upperLimit = topElementTopOffset + topElementHeight;

                totalTopElementHeights += topElementHeight;

                if (upperLimit > referenceUpperLimit) {
                    referenceUpperLimit = upperLimit;
                    $relevantTopElement = $this;
                }
            });

            var topElementTopOffset = $relevantTopElement.offset().top;
            var topElementHeight = $relevantTopElement.height();
            var bottomElementTopOffset = $bottomElement.offset().top;
            var targetElementTopOffset = $targetElement.offset().top;
            var targetElementHeight = $targetElement.height();
            var windowScroll = $window.scrollTop();
            var windowHeight = $window.height();

            /* Fix bouncy effect on chrome */
            // prevent bouncing effect when scrolling beyond the edge of the document when using touchpad

            // bottom edge
            windowScroll = Math.min (windowScroll, $body.height() + parseInt($body.css('padding-top')) - windowHeight);

            // top edge
            windowScroll = Math.max (windowScroll, 0);
            // actual position of the top elements' bottom, or the top visible area of the window (whichever is lower)
            var upperLimit = Math.max(topElementTopOffset + topElementHeight, windowScroll) + options.topOffset;
            // actual position of the bottom elements' top, or the bottom visible area of the window (whichever is higher)
            var lowerLimit = Math.min(bottomElementTopOffset, windowScroll + windowHeight) - options.bottomOffset;
            // actual position of the bottom element's top
            var elementLowerLimit = bottomElementTopOffset - options.bottomOffset;
            var upperAlignement = upperLimit - windowScroll;
            var lowerAlignement = lowerLimit - targetElementHeight - windowScroll;
            var elementLowerAlignement = elementLowerLimit - targetElementHeight - windowScroll;
            var targetElementPosition;

            oldTargetElementPosition = (oldTargetElementPosition || upperAlignement);
            targetElementPosition = oldTargetElementPosition - windowScroll + oldWindowScroll + totalTopElementHeights - oldTotalTopElementHeights;
            // preferably don't allow space between the lower elements and the target element
            targetElementPosition = Math.max(targetElementPosition, lowerAlignement);
            // never allow the target element to go beneath the bottom elements
            targetElementPosition = Math.min(targetElementPosition, elementLowerAlignement);
            // never allow space between the top elements and the target element
            targetElementPosition = Math.min(targetElementPosition, upperAlignement);

            /* Fix bouncy issue on safari when scrolling upwards beyond the edge of the document */
            // Also prevent the top to be set too early
            if ($window.scrollTop() <= 75) {
                var topOffScreenScrollOffset = $targetElement.offset().top;

                targetElementPosition += topOffScreenScrollOffset;
            }

            /* Fix bouncy issue on safari when scrolling downwards beyond the edge of the document */
            if ($window.scrollTop() + $window.height() > $body.height() + parseInt($body.css('padding-top')) && $window.height() < $body.height() + parseInt($body.css('padding-top'))) {
            if(Math.abs($targetElement.offset().top - (oldTargetElementPosition + $window.scrollTop())) < 1) {
                var bottomOffScreenScrollOffset = $window.scrollTop() + $window.height() - ($body.height() + parseInt($body.css('padding-top')));
                targetElementPosition -= bottomOffScreenScrollOffset;
                }
            }

            // Also keep the sticky static so it does not jump over the header
            if ($window.scrollTop() <= 75) {
                $targetElement.css({
                    position: 'static',
                    top: ''
                });
            } else {
                $targetElement.css({
                    position: 'fixed',
                    top: targetElementPosition + 'px'
                });
            }

            oldTargetElementPosition = targetElementPosition;
            oldWindowScroll = windowScroll;
            oldTotalTopElementHeights = totalTopElementHeights;
            oldTopElementTopOffset = topElementTopOffset;
        }

        function computeSizes() {
            var width = $wrapperElement.width();

            if (!enabledStickyBehaviour) {
                return;
            }

            if (width != oldWidth) {
                $targetElement.width(width);
                oldWidth = width;
            }

            var height = $targetElement.height();

            if (height != oldHeight) {
                $wrapperElement.height(height);
                oldHeight = height;
            }
        }

        var enabledStickyBehaviour = true;

        function disableStickyBehaviour() {
            if (enabledStickyBehaviour) {
                enabledStickyBehaviour = false;
                $(window).trigger('scroll');
            }
        }

        function enableStickyBehaviour() {
            if (!enabledStickyBehaviour && !Modernizr.touch) {
                enabledStickyBehaviour = true;

                $(window).trigger('scroll');
            }
        }

        function registerEvents() {
            $window.on('scroll resize', computePositions);
            $window.on('scroll resize', computeSizes);
            mediator.subscribe('mf-expand:animation-ended', function(){ $(window).trigger('resize') });
        }

        function unRegisterEvent() {
            if (!initialized) {
                // nothing to unregister
                return;
            }

            $window.off('scroll resize', computePositions);
            $window.off('scroll resize', computeSizes);
            $targetElement.find('>*').unwrap();
        }

        function init(pOptions) {
            var currentBreakpoint = MF.breakpoint.getActive();

            if (Modernizr.touch || MF.breakpoint.getActive() == 'mobile' || MF.breakpoint.getActive() == 'tablet') {
                enabledStickyBehaviour = false;
            }

            options = $.extend(defaultOptions, pOptions);

            $wrapperElement = $(options.targetElement);
            $topElement = $(options.topElement);
            $bottomElement = $(options.bottomElement);

            if ($wrapperElement.children('.plp__filter__stickit').length === 0) {
                $wrapperElement.wrapInner('<div class="plp__filter__stickit"></div>');
            }

            $targetElement = $wrapperElement.find('>div');
            $body = $(document.body);
            $window = $(window);

            oldTotalTopElementHeights = 0;

            $topElement.each(function (){
                var $this = $(this);
                var topElementHeight = $this.height();

                oldTotalTopElementHeights += topElementHeight;
            });

            if (currentBreakpoint == 'mobile' || currentBreakpoint == 'tablet') {
                disableStickyBehaviour();
            }

            Breakpoints.on({ name: 'mobile', matched: function() { disableStickyBehaviour(); } });
            Breakpoints.on({ name: 'tablet', matched: function() { disableStickyBehaviour(); } });
            Breakpoints.on({ name: 'desktop', matched: function() { enableStickyBehaviour(); } });
            Breakpoints.on({ name: 'desktop-large', matched: function() { enableStickyBehaviour(); } });

            registerEvents();
            computePositions();
            computeSizes();

            initialized = true;
        }

        return {
            init: init,
            unRegisterEvent: unRegisterEvent
        }
    })();
})(jQuery, window, MF.checkout.mediator);

// Based on meta_prd.js which is hosted on S3

;(function($, window, document) {
    'use strict';

    var MF = window.MF || {};
    // var host = window.location.hostname;
    // var protocol = window.location.protocol;
    // var url = protocol+'//'+host+'/component/json/';
    var url = '/component/json/';
    var number_of_popup_load_events = 0;
    var popup_html

    MF.popup = (function() {

        var defaults = {};

        function init(html) {
            // Bind Init
            popup_html = html;
            bindOverlay();

        }

        function bindOverlay() {
            getOverlayContent();
        }

        function getOverlayContent() {
            popOverlay();
            get_overlay_content_for_updates();
        }

        // // Privacy Popup.
        // will ajax privacy_content_html content slot into overlay.

        function closePopUp() {
            $(".mfp-close").trigger("click");
        }

        function popOverlay() {
            // create overlay
            $('body').append('<div id="genericPopUp" class="generic-popup mf-overlay mfp-hide"><div class="generic-popup__wrapper" id="genericPopUpContent"></div></div>');

            MF.overlay.openWithElement({
                element: $("#genericPopUp")
            });

           // setTimeout(function() { picturefill();}, 1000);
        }

        function popOverlay_for_updates() {
            // create overlay
            $('body').append('<div id="genericPopUp" class="updates-popup generic-popup mf-overlay mfp-hide"><div class="generic-popup__wrapper" id="genericPopUpContent"></div></div>');

            MF.overlay.openWithElement({
                element: $("#genericPopUp")
            });
        }

        function get_overlay_content_for_updates() {
            $('#genericPopUpContent').html(popup_html);
        }

        return {
            init: init,
            closePopUp: closePopUp
        };

    })();

    window.MF = MF;

}(jQuery, this, this.document));


;(function ($, window, document, requestResult, overlay)
{
    "use strict";

    var MF = window.MF || {};

    var defaultOptions = {};

    MF.subscribeEmail = (function ()
    {


        var $subscribeForm, $subscribeWishlistBtn;

        var options;

        var validateSubscribeForm = function ()
        {
            var validator = $subscribeForm.validate({
                onfocusout: function (element)
                {
                    $(element).valid();
                },
                rules: {
                    email: {
                        required: true,
                        pattern: '\\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}\\b'
                    }
                },
                errorPlacement: function (error, element)
                {
                    error.insertBefore(element.parents(".ft__subscribe__input"));
                }
            });
            return validator.form();
        };

        var clearErrorMessages = function ()
        {
            $("#emailPreferencesJoinForm.email").removeClass("error");
        };

        var submitSubScribeForm = function ()
        {
            clearErrorMessages();
            if(validateSubscribeForm())
            {
                window.mediator.publish('trackingEvent', 'emailSubscription');
            }
            $subscribeForm.submit();

        }

        var initObjects = function ()
        {
            $subscribeForm = $("#emailPreferencesJoinForm");
            $subscribeWishlistBtn = $(".subscribeEmail");
        };

        var bindEvents = function ()
        {
            $subscribeWishlistBtn.on("click", submitSubScribeForm);
        };

        var init = function (opts)
        {
            options = $.extend({}, defaultOptions, opts);

            initObjects();

            bindEvents();
        };

        return {
            init: init
        };

    })();

    window.MF = MF;

}(jQuery, this, this.document, MF.requestResult, MF.overlay));

MF.subscribeEmail.init();

/* MF.header */
(function($, window, document) {
  'use strict';
  var MF = window.MF || {};
  var SwipeNav = function (container, wrapper, nextButton, prevButton) {
    var $container = $(container);
    var $wrapper = $(wrapper);
    var next = document.querySelector(nextButton);
    var prev = document.querySelector(prevButton);
    var menuNav = document.querySelector(wrapper);

    function listeners() {
        next.addEventListener('click', function (e) {
            $wrapper.stop().animate({
                scrollLeft: "+=500"
            }, {
                    done: function () {
                        togglePrevButton();
                        toggleNextButton();
                    },
                    easing: 'linear',
                    duration: 1000
                });
        });

        prev.addEventListener('click', function (e) {
            $wrapper.stop().animate({
                scrollLeft: "-=500"
            }, {
                    done: function () {
                        togglePrevButton();
                        toggleNextButton();
                    },
                    easing: 'linear',
                    duration: 1000
                });
        });

        menuNav.addEventListener('wheel', function (e) {
            e.preventDefault();
            $wrapper.stop().animate({
                scrollLeft: '-=' + e.wheelDeltaY
            }, {
                    duration: 1000,
                    done: function () {
                        togglePrevButton();
                        toggleNextButton();
                    },
                    easing: 'linear'
                });
        });

        menuNav.addEventListener('touchend', function (e) {
            togglePrevButton();
            toggleNextButton();
        });

        window.addEventListener('resize', setupMenuNav);

    }

    function togglePrevButton() {
        if (menuNav.scrollLeft > 0) {
            prev.classList.add('active');
        } else {
            prev.classList.remove('active');
        }
    }

    function toggleNextButton() {
      setTimeout(function(){
        if (menuNav.scrollLeft <  menuNav.scrollWidth - menuNav.clientWidth) {
            next.classList.add('active');
        } else {
            next.classList.remove('active');
        }
      }, 100);
    }

    function setupMenuNav() {
      if (menuNav.scrollWidth > Math.ceil($wrapper.outerWidth(true) - ($(menuNav).outerWidth(true) - $(menuNav).outerWidth()))) {
          toggleNavButtons(true);
      } else {
          toggleNavButtons(false);
      }
    }

    function toggleNavButtons(active) {
        if (active) {
            toggleNextButton();
            togglePrevButton();
            $container.addClass('sliderNav');
        } else {
            next.classList.remove('active');
            prev.classList.remove('active');
            $container.removeClass('sliderNav');
        }
    }

    function init() {
      if($wrapper.length > 0 && $container.length > 0) {
        setupMenuNav();
        listeners();
      }
    }

    function refresh() {
      if($container === null || $wrapper === null || next === null || prev === null || menuNav === null) {
        $container = $(container);
        $wrapper = $(wrapper);
        next = document.querySelector(nextButton);
        prev = document.querySelector(prevButton);
        menuNav = document.querySelector(wrapper);
        init();
      }
    }

    return {
      init: init,
      refresh: refresh
    };
  };
  var BurgerMenu = function () {
    var Scrollbar = window.Scrollbar;
    var scrollbarOptions = {
      damping: 0.10
    };
    var mainMenuScroll = null;
    var submenuScroll = null;
    var menu = document.querySelector('#burgerMenu');

    function closeSubmenu() {
      mainMenuScroll.setPosition(0, 0);
      document.querySelector('#submenuContainer').classList.remove('open');
      document.querySelector('#mainMenuContainer').classList.remove('burger_submenu_opened');
      document.querySelector('html').classList.remove('burger_submenu_opened');
    }

    function openSubmenu(event) {
      event.preventDefault();

      Array.from(document.querySelectorAll('.firstLevel .category_item')).forEach(function(element) {
          if(element !== event.currentTarget.parentElement) {
            element.classList.remove('selected');
          } else {
            event.currentTarget.parentElement.classList.add('selected');
          }
      });

      var data = $(event.currentTarget).parent().find('.submenu .secondLevel')[0].outerHTML;
      var title = $(event.currentTarget).parent().find('.submenu .sub_category_title')[0].innerHTML;

      if(data && title && data.length > 0 && title.length > 0) {
        populateSubmenu(title, data);
        document.querySelector('#submenuContainer').classList.add('open');
        document.querySelector('#mainMenuContainer').classList.add('burger_submenu_opened');
        document.querySelector('html').classList.add('burger_submenu_opened');
      }

      submenuScroll.setPosition(0, 0);
    }

    function populateSubmenu(title, data) {
      document.querySelector('#submenuContainer .titleContainer').innerHTML = title;
      document.querySelector('#submenuContainer .scroll-content').innerHTML = data;
    }

    function setupScrollbars() {
      mainMenuScroll = Scrollbar.init(document.querySelector('#mainMenuContainer .scroller'), scrollbarOptions);
      submenuScroll = Scrollbar.init(document.querySelector('#submenuContainer .scroller'), scrollbarOptions);
    }

    function chooseGender(event) {
      event.preventDefault();

      var gender = event.currentTarget.dataset.gender;

      Array.from(document.querySelectorAll('.genderSelectorButton')).forEach(function(element) {
        element.parentElement.classList.remove('selected');
      });

      event.currentTarget.parentElement.classList.add('selected');

      closeSubmenu();

      Array.from(document.querySelectorAll('.firstLevel.switchable')).forEach(function(element) {
        element.classList.remove('visible');
      });

      document.querySelector('#'+gender+'_menu').classList.add('visible');

      if(localStorage.gender) {
        localStorage.lastSelectedGender = gender;
      } else {
        localStorage.setItem('lastSelectedGender', gender);
      }

      mainMenuScroll.setPosition(0, 0);

    }

    function listeners() {
      Array.from(document.querySelectorAll('.category_item .hasSubmenu')).forEach(function(element) {
        element.addEventListener('click', openSubmenu);
      });
      Array.from(document.querySelectorAll('.genderSelectorButton')).forEach(function(element) {
        element.addEventListener('click', chooseGender);
      });
      document.querySelector('#left-menu').addEventListener('click', toggleMenu);
      document.querySelector('#closeSubmenu').addEventListener('click', closeSubmenu);
      Array.from(document.querySelectorAll('.closeBurger')).forEach(function(button) {
        button.addEventListener('click', toggleMenu);
      });
      document.querySelector('#burgerMenu').addEventListener('click', function(event) {
        if(event.target === event.currentTarget) {
          toggleMenu(event);
        }
      });
      window.addEventListener('resize', function(e) {
        if(e.currentTarget.outerWidth > 1100) {
          if (menu.classList.contains('open')) {
            menu.classList.remove('open');
            closeSubmenu();
            document.querySelector('html').classList.remove('burger_opened');
          }
        }
      });
    }

    function setupVisibleMenu() {
      var selectedGender;
      var genderCookie = 'womens';

      if($.cookie('gender')) {
        genderCookie = $.cookie('gender');
      } else {
        genderCookie = 'womens';
      }

      localStorage.setItem('lastSelectedGender', genderCookie);
      selectedGender = localStorage.getItem('lastSelectedGender');

      if (document.querySelector('.'+selectedGender+'.genderSelector') !== null) {
        document.querySelector('.'+selectedGender+'.genderSelector').classList.add('selected');
      }

      if (document.querySelector('#'+selectedGender+'_menu') !== null) {
        document.querySelector('#'+selectedGender+'_menu').classList.add('visible');
      }
    }

    function toggleMenu(event) {
      event.preventDefault();
      mainMenuScroll.setPosition(0, 0);

      if (menu.classList.contains('open')) {
        menu.classList.remove('open');
        closeSubmenu();
        document.querySelector('html').classList.remove('burger_opened');
      } else {
        menu.classList.add('open');
        document.querySelector('html').classList.add('burger_opened');
      }
    }

    function setupAccountLinks() {
      if($.cookie('loggedIn') && $.cookie('loggedIn') === 'true') {
        Array.from(document.querySelectorAll('#burgerMenu .login')).forEach(function(elem) {
          elem.classList.add('hide');
        });
        Array.from(document.querySelectorAll('#burgerMenu .logout')).forEach(function(elem) {
          elem.classList.remove('hide');
        });
      } else if($.cookie('loggedIn') && $.cookie('loggedIn') === 'false') {
        Array.from(document.querySelectorAll('#burgerMenu .login')).forEach(function(elem) {
          elem.classList.remove('hide');
        });
        Array.from(document.querySelectorAll('#burgerMenu .logout')).forEach(function(elem) {
          elem.classList.add('hide');
        });
      }
    }

    function showLoyaltyMenuLinkGivenData() {
        var data = ACC.headerdata;
        var burgerMenuMyAccountLoyaltyLink = document.querySelector('.loyaltyLink');
        var jsToggleAccountLoyaltyLink = document.querySelector('.js-toggle-accountLoyalty-link');
        var languageCookie = $.cookie('language');
        var loyaltyCustomer = data.loyaltyCustomer;
        var loyaltyLevel = data.loyaltyLevel;
        if ($.cookie('loggedIn') === 'false') {
          if(jsToggleAccountLoyaltyLink) {
            jsToggleAccountLoyaltyLink.style.display = 'none';
          }
          return;
        }
        if (loyaltyCustomer && burgerMenuMyAccountLoyaltyLink) {
          burgerMenuMyAccountLoyaltyLink.setAttribute('href', '/account/loyalty');
          document.querySelector('.loyaltyMainMenuLink').setAttribute('href', '/account/loyalty');
          if (languageCookie === 'ko') {
            var levelNumber = parseInt(data.loyaltyLevel[data.loyaltyLevel.length - 1], 10);
            burgerMenuMyAccountLoyaltyLink.innerHTML = '로열티' + '&nbsp' + '-' + '&nbsp' + '레벨' + '&nbsp' + levelNumber;
          } else if (languageCookie === 'ja') {
            burgerMenuMyAccountLoyaltyLink.innerHTML = 'ロイヤルティ' + '&nbsp' + '-' + '&nbsp' + loyaltyLevel;
          } else if (languageCookie === 'fr') {
            burgerMenuMyAccountLoyaltyLink.innerHTML = 'FIDÉLITÉ' + '&nbsp' + '-' + '&nbsp' + loyaltyLevel;
          } else {
            burgerMenuMyAccountLoyaltyLink.innerHTML = 'Loyalty' + '&nbsp' + '-' + '&nbsp' + loyaltyLevel;
          }
        } else if (jsToggleAccountLoyaltyLink) {
          jsToggleAccountLoyaltyLink.style.display = 'none';
        }
    }

    function showFirstAccessLink() {
      var data = ACC.headerdata;
      var firstAccessCustomer = data.firstAccessCustomer;
      if (firstAccessCustomer) {
        var jsToggleFirstAccessLinks = Array.from(document.querySelectorAll('.js-toggle-accountFirstAccess-link'));
        jsToggleFirstAccessLinks.forEach(function(link) {
          link.classList.remove('hide');
        })
      }
    }

    function showJustInLink() {
      var data = ACC.headerdata;
      var firstAccessCustomer = data.firstAccessCustomer;
      if (firstAccessCustomer) {
        var firstAccessLink = document.querySelector('.first-access-justin-link');
        if (firstAccessLink) {
          firstAccessLink.classList.remove('hide-first-access-link');
        }
      }
    }

    function showReferAFriendLink() {
      var data = ACC.headerdata;
      var referAFriendPermitted = data.referAFriendPermitted;
      if (referAFriendPermitted) {
        var jsToggleReferAFriendLinks = Array.from(document.querySelectorAll('.js-toggle-accountReferAFriend-link'));
        jsToggleReferAFriendLinks.forEach(function(link) {
          link.classList.remove('hide');
        })
      }
    }

    function setupPrivateSaleLinks() {
      var privateSaleData = null;
      var privateSaleMenLink = null;
      var privateSaleWomenLink = null;

      if(window.MF && window.MF.privateSale) {
        privateSaleData = window.MF.privateSale.getPrivateSaleLink();
      }

      if(privateSaleData) {
        privateSaleMenLink = privateSaleData.url.replace('/${GENDER}/', document.querySelector('.privatemen a').href);
        privateSaleWomenLink = privateSaleData.url.replace('/${GENDER}/', document.querySelector('.privatewomens a').href);

        document.querySelector('.privatemen').classList.remove('hide');
        document.querySelector('.privatewomens').classList.remove('hide');

        document.querySelector('.privatemen a').href = privateSaleMenLink;
        document.querySelector('.privatewomens a').href = privateSaleWomenLink;
      }
    }

    function setupSalesLinks() {
      if(document.querySelector('.salesOn')) {
        Array.from(document.querySelectorAll('.sales')).forEach(function(elem) {
          elem.classList.add('on');
          elem.parentElement.insertBefore(elem, elem.parentElement.firstChild);
        });
      }
    }

    function initPrivateSale() {
      setupPrivateSaleLinks();
    }

    function init() {
      listeners();
      setupSalesLinks();
      setupAccountLinks();
      setupScrollbars();
      setupVisibleMenu();
      window.mediator.subscribe('headerDataReceived', function () {
        showLoyaltyMenuLinkGivenData();
        showFirstAccessLink();
        showJustInLink();
        showReferAFriendLink();
      });
    }

    return {
      init: init,
      initPrivateSale: initPrivateSale,
    }
  };

  MF.header = (function() {
    var $window = $(window);
    var $body = $('body');
    var genderCookie = $.cookie('gender');
    var breadcrumbItem = $('#breadcrumb ul li a');
    var breadcrumbGender = !breadcrumbItem.length ? undefined : breadcrumbItem.attr('href').substr(1);
    var altLocGender = breadcrumbGender === undefined ? window.location.pathname.split('/')[1] : breadcrumbGender;
    var gender = genderCookie === undefined ? altLocGender : genderCookie;
    var $scroll = $(window);
    var emptyNavRun = 0;
    var headerWrapper = $('.header-wrapper');
    var $navMain = $('#nav_main');
    var cg = window.idzCustomData ? idzCustomData.cg.split(',') : [];
    var swiperNav = new SwipeNav('.main-menu', '.main-menu__wrapper', '.next', '.prev');
    var burgerMenu = new BurgerMenu();

    function webkitDetection() {
      if(/Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor) || /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor)) {
          $body.addClass('webkit');
      } else {
          $body.addClass('not-webkit');
      }
    }

    function initShopCategoryIE() {
      if (!Modernizr.csscolumns && MF.breakpoint.getActive() !== 'mobile') {
        $('.shop__cols__wrapper__womens, .shop__cols__wrapper__mens, .sub_menu__wrapper__xl')
        .parents('.main-menu__item')
        .addClass('is--IE');
      }
    }

    function initCurrency() {
      // Topbar currency
      MF.select.init({
        contextId: '#currency-form',
        slideDown: false,
        callback: function(data) {
          if (window.cartContainsGiftCard && data !== $('#currentCurrency').val()) {
            MF.overlay.openWithElement({
              element: $('#mfGiftCardCurrencyChangePopup')
            });
            $('#mfGiftCardCurrencyChangePopup').data('form-to-submit', '#currency-form');
            $('#mfGiftCardCurrencyChangePopup .mfp-close').click(setCurrentCountry);
          } else {
            $('#currency-form').submit();
          }
        }
      });
    }

    function initLangSelector() {
      // Topbar currency
      MF.select.init({
        contextId: '#lang-form',
        slideDown: false,
        callback: function() {
          $('#lang-form').submit();
        }
      });
    }

    function displayGlobalMessages() {
      var elm;
      var timeOutMessage;

      if ($('#global__messages').exists()) {
        elm = $('#global__messages');
        timeOutMessage = setTimeout(MF.overlay.close, 5000);
        MF.overlay.openWithElement({
          element: elm,
          callbacks: {
            open: function() {
              clearTimeout(timeOutMessage);
            }
          }
        });
      }
    }

    function handleData(data) {

      var $offCanvasMenu = $('#offcanvaslist');
      var currData = data;

      if ((cg.indexOf('SPSUSA') > -1) || (cg.indexOf('SPSAPAC') > -1) || (cg.indexOf('SPSUKROW') > -1)) {
        currData = currData.replace(/slide-menu__list__item cg_pss_menu_item/g, 'slide-menu__list__item cg_pss_menu_item hidden');
        currData = currData.replace(/slide-menu__list__item cg_ps_menu_item hidden/g, 'slide-menu__list__item--ps cg_ps_menu_item');
      }

      if (!$('.slide-menu__list__wrapper').length) {

        $offCanvasMenu.append(currData);

        if ($.cookie('loggedIn') === 'true') {
          $offCanvasMenu.find('[data-href]').queue(function() {
            $(this).attr('href', $(this).data('href'));
            $(this).removeClass('loginOverlay');
          });

          $offCanvasMenu.find('[data-log-in]').queue(function() {
            var logoutText = 'log out';

            if ($.cookie('language') === 'ko') {
              logoutText = '로그아웃';
            }

            $(this).removeClass('loginOverlay').text(logoutText).attr({
              href: '/logout'
            });
          });
        }

        if ($('.slide-menu__list__wrapper li').find('ul').length) {
          MF.accordion.init();
        }
      }
    }

    function initStickyHeader(breakpoint) {
      var $body = $('body');
      var $topbar = $('.topbar');
      var $checkoutHeader = $('.checkout-header').length;
      var animPos = 14;
      var setState = null;
      var scrollTop;

      if (!$('.page-productDetails').length && !$('.page-giftCard').length) {
        if ((breakpoint === 'desktop' || breakpoint === 'desktop-large') && $('html').hasClass('no-touch')) {
          scrollTop = $window.scrollTop();

          if (!$checkoutHeader) {
            if (scrollTop >= animPos && setState !== 1) {
              setState = 1;
              $body.addClass('fixed').css({
                paddingTop: '92px'
              });
              $topbar.addClass('sticky');
            } else if (scrollTop < animPos && setState !== 2) {
              setState = 2;
              $body.removeClass('fixed').css({
                paddingTop: '0'
              });
              $topbar.removeClass('sticky');
            }
          }
        } else {
          $scroll.off('scroll.topBar');
          $body.removeClass('fixed').css({
            paddingTop: '0'
          });
          $topbar.removeClass('sticky');
        }
      }
    }

    function initScrollEvent() {
      $scroll.off('scroll.topBar').on('scroll.topBar', function() {
        initStickyHeader(MF.breakpoint.getActive());
      });
    }

    function updateHeader() {
      initStickyHeader(MF.breakpoint.getActive());
      initScrollEvent();
      if ($('.main-menu__wrapper').length > 0) {
        swiperNav.refresh();
      }
    }

    function windowResize() {
      window.addEventListener('resize', updateHeader);
    }

    function meganavShopGiftcardsEnabled() {
      if ($('.shop__cols__item.gifts').length) {
        $('.shop__cols__wrapper__womens').addClass('shop__cols__wrapper__womens__giftcards-enabled');
        $('.shop__cols__wrapper__mens').addClass('shop__cols__wrapper__mens__giftcards-enabled');
      }
    }

    function handleBlankNav(currGender) {
      var navElem = document.getElementById('nav_main');
      var synthNav = '';

      if (navElem && navElem.children &&
        (navElem.children.length === 0 || navElem.children[0].children.length < 2)) {
        if (currGender === 'mens') {
          synthNav = '<ul class="yCmsContentSlot main-menu__wrapper"><li class="main-menu__item"><span class="main-menu__item__text"><a class="main-menu__link" href="/mens/just-in/just-in-this-month" style="border-bottom-style: none;">JUST IN</a></span></li><li class="main-menu__item"><span class="main-menu__item__text"><a class="main-menu__link" href="/mens/shop">Shop</a></span></li><li class="main-menu__item"><span class="main-menu__item__text"><a class="main-menu__link" href="/designers">DESIGNERS</a></span></li><li class="main-menu__item"><span class="main-menu__item__text"><a class="main-menu__link" href="/mens/the-style-report">The Style Report</a></span></li><li class="main-menu__item"><span class="main-menu__item__text"><a class="main-menu__link" href="#">Studios</a></span></li><li class="main-menu__item"><span class="main-menu__item__text"><a class="main-menu__link" href="/mens/sale">Sale</a></span></li></ul>';
        } else {
          synthNav = '<ul class="yCmsContentSlot main-menu__wrapper"><li class="main-menu__item"><span class="main-menu__item__text"><a class="main-menu__link" href="/womens/just-in/just-in-this-month" style="border-bottom-style: none;">JUST IN</a></span></li><li class="main-menu__item"><span class="main-menu__item__text"><a class="main-menu__link" href="/womens/shop">Shop</a></span></li><li class="main-menu__item"><span class="main-menu__item__text"><a class="main-menu__link" href="/designers">DESIGNERS</a></span></li><li class="main-menu__item"><span class="main-menu__item__text"><a class="main-menu__link" href="/womens/the-style-report">The Style Report</a></span></li><li class="main-menu__item"><span class="main-menu__item__text"><a class="main-menu__link" href="/womens/shop-by">Shop By...</a></span></li><li class="main-menu__item"><span class="main-menu__item__text"><a class="main-menu__link" href="#">Studios</a></span></li><li class="main-menu__item"><span class="main-menu__item__text"><a class="main-menu__link" href="/womens/sale">Sale</a></span></li></ul>';
        }

        $('#nav_main').append(synthNav);
      }

      emptyNavRun = 1;
    }

    function listeners() {
      var delayTimeout;
      var showSubmenu = function(event) {
        var $submenu = $(event.currentTarget).find('.sub_menu');

        if (MF.breakpoint.getActive() === 'desktop' || MF.breakpoint.getActive() === 'desktop-large') {
          delayTimeout = setTimeout(function() {
            $submenu.fadeIn({
              start: function() {
                headerWrapper.addClass('sub__nav--on');
              },
              queue: false,
              duration: 100
            });
          }, 350)
        }
      };

      var hideSubmenu = function(event) {
        var $submenu = $(event.currentTarget).find('.sub_menu');

        if (MF.breakpoint.getActive() === 'desktop' || MF.breakpoint.getActive() === 'desktop-large') {
          clearTimeout(delayTimeout);
          $submenu.fadeOut({
            duration: 100
          });
        }
      };

      $navMain.mouseleave(function(event){
        headerWrapper.removeClass('sub__nav--on');
      });

      $navMain.find('.main-menu__item').hover(showSubmenu, hideSubmenu);
    }

    var stickyHeader = function() {
      var headerElement = document.querySelector('#header');
      var headroom  = new Headroom(headerElement, {
        tolerance: {
          up: 40,
          down: 5
        },
        offset: 200,
      });

      // TPR-41: commented out until outstanding issues fixed.
      // headroom.init();
    };

    //TL-2395
    function setupSailthruHIDCookie() {
      if($.cookie('loggedIn') && $.cookie('loggedIn') === 'true' && !$.cookie('sailthru_hid')) {
        $.get('/sailthru/user', {uid: localStorage.getItem('sessionUserID')}, function(response) {
          if (response && response.content) {
            $.cookie("sailthru_hid", response.content, { expires : 7 });
          }
        });
      }
    };

    function init() {
      webkitDetection();
      initShopCategoryIE();
      initCurrency();
      initLangSelector();
      displayGlobalMessages();
      windowResize();
      updateHeader();
      meganavShopGiftcardsEnabled();
      listeners();
      stickyHeader();
      setupSailthruHIDCookie();

      if (!Modernizr.csstransitions) {
        if ($('body').hasClass('fixed')) $('.logo').width(250);
      }

      swiperNav.init();
      burgerMenu.init();
    }

    function initPrivateSaleBurgerMenu() {
      burgerMenu.initPrivateSale();
    }

    return {
      init: init,
      initPrivateSaleBurgerMenu: initPrivateSaleBurgerMenu,
    };
  })();
  window.MF = MF;
})(jQuery, this, this.document);

if ($('.header-wrapper').length) {
  MF.header.init();
}

/*
 *  requires
 *  MF.track.trackRemoveFromCart
 *  MF.track.trackUpdateCart
 */
;(function ($, window, document) {
  'use strict';

  var MF = window.MF || {};

  MF.footer = (function () {
    function footerAppsSpacing() {
      if ($('.ft__our_apps-tablet_mobile-only').length) {
        if ($('.app_buttons-inner_container > div:nth-child(1)').css('display') === 'none') {
          $('.app_buttons-inner_container > div:nth-child(2)').css('margin', '0');
        } else if ($('.app_buttons-inner_container > div:nth-child(2)').css('display') === 'none') {
          $('.app_buttons-inner_container > div:nth-child(1)').css('margin', '0');
        } else if ($.cookie('language') === 'fr') {
          $('.app_buttons-inner_container > div:nth-child(2)').css({ marginLeft: '6%', width: '40%' });
          $('.app_buttons-inner_container > div:nth-child(1)').css({ width: '40%' });
        } else {
          $('.app_buttons-inner_container > div:nth-child(2)').css('margin-left', '11%');
        }
      }
    }

    // This function removes the t: (for a customer service
    // number in the footer) if there is no number present.
    function footerCustomerServices() {
      var span1 = $('#footer .customer_services_info .tel span:nth-child(1)');
      var span2 = $('#footer .customer_services_info .tel span:nth-child(2)');
      if (span1.html() === '') {
        span1.remove();
      }
      if (span2.html() === '') {
        span2.remove();
      }
    }

    // Korea is a special case for the footer due to the phone numbers and text so we
    // need to adjust it so it doesn't break the footer
    function koreaAdjustment() {
      if ($.cookie('country') === 'KOR') {
        $('.ft__info-links .customer_services_info').addClass('korea');
        $('.ft__info-links .customer_services_info strong').addClass('korea');
        $('.ft__info-links .customer_services_info p.tel').addClass('korea');
        $(' .ft__info-links p.tel br').addClass('korea');
      }
    }

    function footerCurrency() {
      MF.select.init({
        contextId: '#footerCurrency-form',
        callback: function (data) {
          if (window.cartContainsGiftCard && data !== $('#currentCurrency').val()) {
            MF.overlay.openWithElement({
              element: $('#mfGiftCardCurrencyChangePopup')
            });
            $('#mfGiftCardCurrencyChangePopup').data('form-to-submit', '#footerCurrency-form');
            $('#mfGiftCardCurrencyChangePopup .mfp-close').click(setCurrentCountry);
          } else {
            $('#footerCurrency-form').submit();
          }
        }
      });
    }

    function footerLanguage() {
      MF.select.init({
        contextId: '#footerLang-form',
        callback: function () {
          $('#footerLang-form').submit();
        }
      });
    }

    // replacing the return url for footer-> "shipping to", reason :
    // return url was inconsistent due to footer component is cached.
    function footerShippingTo() {
      var shippingCountry = document.getElementById('shipping-country');
      var shippingInfo = document.getElementsByClassName('shipping_info');
      var mobileShippingInfo = document.getElementsByClassName('ft__settings__country');

      if (shippingCountry && shippingInfo.length > 0) {
        shippingInfo[0].getElementsByTagName('a')[0].setAttribute('href', shippingCountry.getAttribute('href'));
      }

      if (shippingCountry && mobileShippingInfo.length > 0) {
        mobileShippingInfo[0].getElementsByTagName('a')[0].setAttribute('href', shippingCountry.getAttribute('href'));
      }
    }

    function socialIcons() {
      // Footer Social Icons
      $('[data-svg]').hover(function () {
        var bg = $(this).data('svg');

        $(this).css({
          'background-color': bg
        });
      }, function () {
        $(this).css({
          'background-color': '#000'
        });
      });
    }

    function backToTop() {
      // Back to Top Menu
      $('#back-top').click(function () {
        $('body,html').animate({
          scrollTop: 0
        }, 800);
        return false;
      });
    }

    function footerAccordion(breakpoint) {
      if (breakpoint === 'mobile') {
        $.each($('.ft__links > li').find('ul'), function () {
          $(this).css({
            display: 'none'
          });
        });
        MF.accordion.init();
      } else {
        $.each($('.ft__links > li').find('ul'), function () {
          $(this).css({
            display: 'block'
          });
        });
        return false;
      }
    }

    function mobileMenu(breakpoint) {
      var gender;
      var revGender;
      var revGenderFr;
      var revGenderKo;
      var revGenderJa;
      var bottomPosition;
      var mobileMenu;
      var menuString;

      if (!$('.page-homepage').length) {
        gender = $.cookie('gender');
        revGender = gender;

        revGender = revGender === 'womens' ? 'mens' : 'womens';
        revGenderFr = revGender === 'womens' ? 'FEMME' : 'HOMME';
        revGenderKo = revGender === 'womens' ? '여성 상품 쇼핑' : '남성 상품 쇼핑';
        revGenderJa = revGender === 'womens' ? 'ウィメンズ' : 'メンズ';

        bottomPosition = $('#footer');
        mobileMenu = $('#footerMenu');

        if ($.cookie('language') === 'fr') {
          menuString = '<ul class="mobile-menu" id="footerMenu">' +
            '<li><a href="/' + gender + '/just-in/just-in-this-month">NOUVEAUTÉS</a></li>' +
            '<li><a href="/' + gender + '/designers">CRÉATEURS</a></li>' +
            '<li><a href="/' + gender + '/shop/clothing">VÊTEMENTS</a></li>' +
            '<li><a href="/' + gender + '/shop/shoes">CHAUSSURES</a></li>' +
            '<li><a href="/' + gender + '/shop/bags">SACS</a></li>' +
            '<li><a href="/' + gender + '/shop/accessories">ACCESSOIRES</a></li>' +
            '<li><a href="/' + gender + '/shop/homeware">MAISON</a></li>' +
            '<li><a href="/' + gender + '/the-style-report">STORIES</a></li>' +
            '<li><a href="/' + gender + '/the-style-social">Notre communauté</a></li>' +
            '<li><a href="/' + gender + '/sale">Outlet</a></li>' +
            '<li><a class="shop" href="/' + revGender + '">BOUTIQUE ' + revGenderFr + '</a></li>' +
            '</ul>';
        } else if ($.cookie('language') === 'ko') {
          menuString = '<ul class="mobile-menu" id="footerMenu">' +
            '<li><a href="/' + gender + '/just-in/just-in-this-month">신상품</a></li>' +
            '<li><a href="/' + gender + '/designers">디자이너 </a></li>' +
            '<li><a href="/' + gender + '/shop/clothing">의류</a></li>' +
            '<li><a href="/' + gender + '/shop/shoes">슈즈</a></li>' +
            '<li><a href="/' + gender + '/shop/bags">백</a></li>' +
            '<li><a href="/' + gender + '/shop/accessories">액세서리</a></li>' +
            '<li><a href="/' + gender + '/shop/homeware">인테리어</a></li>' +
            '<li><a href="/' + gender + '/the-style-report">스토리</a></li>' +
            '<li><a href="/' + gender + '/the-style-social">커뮤니티 이야기</a></li>' +
            '<li><a href="/' + gender + '/apac-sale">세일</a></li>' +
            '<li><a class="shop" href="/' + revGender + '">' + revGenderKo + '</a></li>' +
            '</ul>';
        } else if ($.cookie('language') === 'ja') {
          menuString = '<ul class="mobile-menu" id="footerMenu">' +
            '<li><a href="/' + gender + '/just-in/just-in-this-month">新着</a></li>' +
            '<li><a href="/' + gender + '/designers">ブランド一覧</a></li>' +
            '<li><a href="/' + gender + '/shop/clothing">ウェア</a></li>' +
            '<li><a href="/' + gender + '/shop/shoes">シューズ＆靴</a></li>' +
            '<li><a href="/' + gender + '/shop/bags">バッグ</a></li>' +
            '<li><a href="/' + gender + '/shop/accessories">アクセサリー＆小物</a></li>' +
            '<li><a href="/' + gender + '/shop/homeware">ホーム＆インテリア</a></li>' +
            '<li><a href="/' + gender + '/the-style-report">オンラインマガジン</a></li>' +
            '<li><a href="/' + gender + '/the-style-social">OUR COMMUNITY</a></li>' +
            '<li><a href="/' + gender + '/apac-sale">セール</a></li>' +
            '<li><a class="shop" href="/' + revGender + '">' + revGenderJa + '</a></li>' +
            '</ul>';
        } else {
            menuString = '<ul class="mobile-menu" id="footerMenu">' +
              '<li><a href="/' + gender + '/just-in/just-in-this-month">JUST IN</a></li>' +
              '<li><a href="/' + gender + '/designers">DESIGNERS</a></li>' +
              '<li><a href="/' + gender + '/shop/clothing">CLOTHING</a></li>' +
              '<li><a href="/' + gender + '/shop/shoes">SHOES</a></li>' +
              '<li><a href="/' + gender + '/shop/bags">BAGS</a></li>' +
              '<li><a href="/' + gender + '/shop/accessories">ACCESSORIES</a></li>' +
              '<li><a href="/' + gender + '/shop/homeware">HOME</a></li>' +
              '<li><a href="/' + gender + '/the-style-report">STORIES</a></li>' +
              '<li><a href="/' + gender + '/the-style-social">OUR COMMUNITY</a></li>' +
              '<li><a href="/' + gender + '/sale">SALE</a></li>' +
              '<li><a class="shop" href="/' + revGender + '">SHOP ' + revGender + '</a></li>' +
              '</ul>';
        }

        if (breakpoint === 'mobile') {
          if (!mobileMenu.length) {
            bottomPosition.prepend(menuString);
          }
        } else {
          mobileMenu.remove();
        }
      }
    }

    function setClassesForHeaderLinks(topLinks, $this) {
      switch (true) {
        case /bio/.test(topLinks):
        case /careers/.test(topLinks):
        case /affiliates/.test(topLinks):
        case /tandcs/.test(topLinks):
        case /cookies-policy/.test(topLinks):
          $this.find('a').first().addClass('ft__links__item-list__matchefashion');
          break;
        case /contact-us/.test(topLinks):
        case /faqs/.test(topLinks):
        case /delivery/.test(topLinks):
        case /returns/.test(topLinks):
          $this.find('a').first().addClass('ft__links__item-list__help');
          break;
        case /mystylist/.test(topLinks):
        case /private-shopping/.test(topLinks):
          $this.find('a').first().addClass('ft__links__item-list__services');
          break;
        case /marylebone/.test(topLinks):
        case /notting-hill/.test(topLinks):
        case /richmond/.test(topLinks):
        case /wimbledon/.test(topLinks):
          $this.find('a').first().addClass('ft__links__item-list__stores');
          break;
        case /gift-cards/.test(topLinks):
          $this.find('a').first().addClass('ft__links__item-list__gifts');
          break;
      }
    }

    function setHeaderLinks(breakpoint) {
      var selectorList = $('.ft__links > .ft__links__item-list');

      $.each(selectorList, function () {
        var topLinks = $(this).find('.tap').first('li').find('a')
          .attr('href');
        setClassesForHeaderLinks(topLinks, $(this));
      });
      if (breakpoint === 'mobile') {
        $.each(selectorList, function () {
          // The header link for each column of the footer menus is
          // just the link from the first item in their column
          var topLinks = $(this).find('.tap').first('li').find('a')
            .attr('href');
          if ((topLinks.includes('gift-cards'))) {
            $(this).find('a').first().attr('href', topLinks);
          } else {
            $(this).find('a').first().attr('href', '#');
          }
        });
      } else {
        $.each(selectorList, function () {
          var topLinks = $(this).find('.tap').first('li').find('a')
            .attr('href');
          $(this).find('a').first().attr('href', topLinks);
          var numberOfMenusInColumn = $(this).find('.tap').length;
          if (numberOfMenusInColumn === 2) {
            var secondTopLink = $(this).find('.tap:nth-of-type(2)').find('a').first().attr('href');
            $(this).find('> span:nth-of-type(2) a').first().attr('href', secondTopLink);
          }
        });
      }
    }

    function gitCardsMobileToggle() {
      if (MF.breakpoint.getActive() !== 'mobile') {
        $('.ft__links__item-list__services').parent().parent().find($('.footer_menu_item_gifts-span'))
          .show();
        $('.ft__links__item-list__services').parent().parent().find($('.footer_menu_item__gifts-items'))
          .show();
        $('.ft__links > .footer_menu_item__gifts-items').hide();
      } else {
        $('.ft__links__item-list__services').parent().parent().find($('.footer_menu_item_gifts-span'))
          .hide();
        $('.ft__links__item-list__services').parent().parent().find($('.footer_menu_item__gifts-items'))
          .hide();
        $('.ft__links > .footer_menu_item__gifts-items').show();
      }
    }

    function updateFooter() {
      footerCurrency();
      footerLanguage();
      setHeaderLinks(MF.breakpoint.getActive());
      footerAccordion(MF.breakpoint.getActive());
      mobileMenu(MF.breakpoint.getActive());
      gitCardsMobileToggle();
      footerShippingTo();
    }

    function windowResize() {
      var resizeWin;
      $(window).off('resize.MFFooter').on('resize.MFFooter', function () {
        resizeWin = setTimeout(updateFooter, 100);
        clearTimeout(resizeWin);
      });
    }

    function giftCards() {
      var giftsSpan;
      // Locating Gifts items
      $('#footer a.ft__links__item-list__gifts').parent().parent().addClass('footer_menu_item__gifts-items');
      // Column title work
      giftsSpan = $('#footer a.ft__links__item-list__gifts').parent().parent().find($('span'))
        .addClass('footer_menu_item_gifts-span')
        .clone()
        .detach();
      // Appending the Gifts column in the right place
      $('.ft__links__item-list__services').parent().parent().append(giftsSpan);
      $('.ft__links__item-list__services').parent().parent().find($('.footer_menu_item_gifts-span'))
        .addClass('footer_menu_item_gifts-span-notMobileVersion');
      $('.footer_menu_item__gifts-items ul').clone().appendTo($('.ft__links__item-list__services').parent().parent());
      $('.ft__links__item-list__services').parent().parent().find($('ul.tap:first-of-type'))
        .css({ marginBottom: '25px' });
    }

    function init() {
      backToTop();
      socialIcons();
      windowResize();
      updateFooter();
      if (ACC.footer && !ACC.footer.newRestructuredFooter) {
        giftCards();
      }
      gitCardsMobileToggle();
      footerAppsSpacing();
      footerCustomerServices();
      koreaAdjustment();
    }

    return {
      init: init
    };
  })();

  window.MF = MF;
}(jQuery, this, this.document));

if ($('#footer').length) {
  MF.footer.init();
}

;
(function ($, window, document) {
    'use strict';

    var MF = window.MF || {};
    var ACC = window.ACC || {};
    
    MF.returns = (function () {

        if( ACC.isRefundToCredit !== null && ACC.isRefundToCredit ){
            $('.viewOrder__returns-method input').on('change', function() {
                var creditRefund = $(this).attr('id') === 'credit';
                $('#returnToCredit').val(creditRefund);
            });
        }
        
        $('#removeReturnCost').click(function () {
            var selected;
            var orderCode= $('#orderCode').val();
            var returnItems=$('#returnItemsJson').val();
            if ($(this).is(':checked'))
            {
                selected = true;
            }else{
                selected = false;
            }


            $.ajax({
                type: "POST",
                url: "/account/order/ajax/return/"+ orderCode +"/review",
                data: {returnItemsJson:$('#returnItemsJson').val(),  returnToCredit:$('#returnToCredit').val(), removeShippingCost:selected},
                cache: false,
                success: function(data) {

                    var returnCost;
                    if(data.returnCost.value === 0)
                    {
                        returnCost = 'FREE';
                    }else{
                        returnCost = '- '+ data.returnCost.formattedValue;
                    }
                    $('#returnCost').html(returnCost);
                    $('#refundTotal').html(data.refundTotal.formattedValue);
                }
            });

        });


        var updateReturnsPriceAndPhoneNumber = function () {
            var countryIso = $('#returnsPageCountryDropdown #countryIso').val();
            if ( countryIso === "GBR" ){
                $('.block-title-container_not-uk').css('display', 'none');
                $('.block-title-container_uk').css('display', 'block');
                if ( !($('.block-title-container_uk_not-mobile-container').hasClass('block-title-container_uk_not-mobile_uk-confirmed')) ){
                    $('.block-title-container_uk_not-mobile-container').addClass('block-title-container_uk_not-mobile_uk-confirmed');
                }
                $('.returns-steps-container_returns-step_extra-notes_uk').css('display','block');
                $('.block-title-container_uk').removeClass('block-title-container_uk_hide');
            }
            else{
                $('.block-title-container_not-uk').css('display', 'block');
                $('.block-title-container_uk').css('display', 'none');
                if ( ($('.block-title-container_uk_not-mobile-container').hasClass('block-title-container_uk_not-mobile_uk-confirmed')) ){
                    $('.block-title-container_uk_not-mobile-container').removeClass('block-title-container_uk_not-mobile_uk-confirmed');
                }
                $('.returns-steps-container_returns-step_extra-notes_uk').css('display','none');
            }
            $.ajax({
                beforeSend: function (request) {
                    request.setRequestHeader("Cache-Control", "no-store");
                },
                url: "/ajax/returnsInfo",
                data: {countryIso: countryIso},
                cache: false,
                success: function (data) {
                    var locale = $.cookie('language').substr(0,2);
                    if(data.returnsInformationData.customerCareInfo.localPhoneNo !== '') {
                        $(".return-customerCareInfo-localPhone").html(data.returnsInformationData.customerCareInfo.localPhoneNo);
                        $(".local.phone").show();
                    }
                    else {
                        $(".local.phone").hide();
                    }
                    if(data.returnsInformationData.customerCareInfo.informationText !== '') {
                        $(".return-customerCareInfo-informationText").html(data.returnsInformationData.customerCareInfo.informationText);
                    }

                    if(data.returnsInformationData.customerCareInfo.intlPhoneNo !== '') {
                        $(".return-customerCareInfo-intlPhone").html(data.returnsInformationData.customerCareInfo.intlPhoneNo);
                    }

                    if(data.returnsInformationData.customerCareInfo.email !== '') {
                        $(".return-customerCareInfo-email").attr('href', "mailto:" + data.returnsInformationData.customerCareInfo.email);
                        $(".return-customerCareInfo-email").html(data.returnsInformationData.customerCareInfo.email);
                    }
                    if (data.returnsInformationData.cost === '' || data.returnsInformationData.cost === '0') {
                        $('.return-price').html($('#freeShippingChargeId').text());
                    } else {
                        if(locale == 'fr'){
                            $('.return-price').html(data.returnsInformationData.cost+" "+data.returnsInformationData.currency);
                        }
                        else{
                            $('.return-price').html(data.returnsInformationData.currency + data.returnsInformationData.cost);
                        }
                    }

                    $('.return-phone').html(data.returnsInformationData.phoneNo);
                    $('.return-dhlUrl1').hide();
                    $('.return-ddp').hide();
                    $('.refundable-ddp').hide();
                    $('.non-refundable-ddp').hide();

                   if(data.returnsInformationData.dhlUrl1 !== '')
                   {
                       $('.dhl_language_link1').attr('href', data.returnsInformationData.dhlUrl1);

                       $('.return-dhlUrl1').show();
                       $('.return-dhlUrl1-defaultText').show();
                       $('.return-dhlUrl2').hide();
                       $('.return-dhlUrl1-text').hide();

                       if(data.returnsInformationData.dhlUrl2 !== '')
                       {
                           $('.return-dhlUrl1-text').html(data.returnsInformationData.dhlLanguage1);
                           $('.dhl_language_link2').attr('href', data.returnsInformationData.dhlUrl2);
                           $('.dhl_language_link2').html(data.returnsInformationData.dhlLanguage2);

                           $('.return-dhlUrl2').show();
                           $('.return-dhlUrl1-text').show();
                           $('.return-dhlUrl1-defaultText').hide();
                       }
                   }

                   if( (data.returnsInformationData.dhlUrl1 === '') && (data.returnsInformationData.dhlUrl2 === '') ){
                        $('.returns-steps-container_returns-step_5 picture').remove();
                        $('.returns-steps-container_returns-step_5 > .returns-steps-container_returns-step_image').prepend('<picture> <!--[if IE 9]><video style="display:none"><![endif]--> <source srcset="//assets.matchesfashion.com/images/returns/confirmation_page/05b-desktop.jpg" media="(min-width: 61.25em)"> <source srcset="//assets.matchesfashion.com/images/returns/confirmation_page/05b-tablet.jpg, //assets.matchesfashion.com/images/returns/confirmation_page/05b-tablet_retina.jpg 2x" media="(min-width: 42.5625em)"> <source srcset="//assets.matchesfashion.com/images/returns/confirmation_page/05b-mobile.jpg, //assets.matchesfashion.com/images/returns/confirmation_page/05b-mobile_retina.jpg 2x" media="(min-width: 0)"> <!--[if IE 9]></video><![endif]--> <img srcset="//assets.matchesfashion.com/images/returns/confirmation_page/05b-desktop.jpg" alt=""> </picture>');
                      }
                   else{
                        $('.returns-steps-container_returns-step_5 picture').remove();
                        $('.returns-steps-container_returns-step_5 > .returns-steps-container_returns-step_image').prepend('<picture> <!--[if IE 9]><video style="display:none"><![endif]--> <source srcset="//assets.matchesfashion.com/images/returns/confirmation_page/05a-desktop.jpg" media="(min-width: 61.25em)"> <source srcset="//assets.matchesfashion.com/images/returns/confirmation_page/05a-tablet.jpg, //assets.matchesfashion.com/images/returns/confirmation_page/05a-tablet_retina.jpg 2x" media="(min-width: 42.5625em)"> <source srcset="//assets.matchesfashion.com/images/returns/confirmation_page/05a-mobile.jpg, //assets.matchesfashion.com/images/returns/confirmation_page/05a-mobile_retina.jpg 2x" media="(min-width: 0)"> <!--[if IE 9]></video><![endif]--> <img srcset="//assets.matchesfashion.com/images/returns/confirmation_page/05a-desktop.jpg" alt=""> </picture>');
                   }

                    if(data.returnsInformationData.ddpRefundable == false)
                    {
                        $('.refundable-ddp').show();
                    }
                    else
                    {
                        $('.non-refundable-ddp').show();
                    }

                    if(data.returnsInformationData.ddpApplicable == true)
                    {
                        $('.return-ddp').show();
                    }
                }
            });
        }

        function init() {
            $(function () {
                var countryIso = $('#returnsPageCountryDropdown #countryIso').val()
                if ( countryIso === "GBR" ){
                    $('.block-title-container_not-uk').css('display', 'none');
                    $('.block-title-container_uk').css('display', 'block');
                    $('.block-title-container_uk_not-mobile-container').addClass('block-title-container_uk_not-mobile_uk-confirmed');
                    $('.returns-steps-container_returns-step_extra-notes_uk').css('display','block');
                    $('.block-title-container_uk').removeClass('block-title-container_uk_hide');
                }
                else{
                    $('.block-title-container_not-uk').css('display', 'block');
                    $('.block-title-container_uk').css('display', 'none');
                    $('.returns-steps-container_returns-step_extra-notes_uk').css('display','none');
                }
                $('#returnsPageCountryDropdown #countryIso').on("change", updateReturnsPriceAndPhoneNumber);
            });
        }


        return {
            init: init
        };

    })();

    window.MF = MF;

}(jQuery, this, this.document));

MF.returns.init();

(function ($, window) {
    'use strict';

    var MF = window.MF = window.MF || {};

    MF.footerPage = (function () {
        function initDeliveryPage() {
            MF.select.init({
                contextId: '.ft-page[data-mobile-menu="delivery"] #deliveryModeCountryDropdown'
            })
        }

        function initReturnsPage() {
            MF.select.init({
                contextId: '.ft-page[data-mobile-menu="returns"] #countryIso'
            })
        }

        function initMobileTopNav() {
            populateMobileDropdown();
            if ( $('.footer-page-popup').length == 0 ) {
                // On footer pages the mobile dropdown will behave as links
                MF.select.init({contextId: '.mobile-nav__dropped-menu', links: true});
            } else {
                // On checkout overlay the behaviour will be managed by footerpagesoverlays
                MF.select.init({contextId: '.mobile-nav__dropped-menu'});
            }
        }

        function populateMobileDropdown() {
            var menuItemId = $('.fp-page, .ft-page').data('mobile-menu');
            var link = $('.ft-page__left-nav a[href$="' + menuItemId + '"]');
            var linkGroup = link.closest('li').parent().first();
            var links = linkGroup.find('a');
            var groupIndex = linkGroup.closest('li').index();
            var dropDown = $('.mobile-nav__dropped-menu select');

            // Populate the title in front of the dropbox depending on the current group of links
            // Do not show matchesfashion.com in front of the dropbox
            if (groupIndex === 0) {
                $('.mobile-nav__title-wrapp, .mobile-nav__dropped-menu').addClass('no-title');
            } else {
                $('.mobile-nav__title-wrapp').find('h2').text(
                    linkGroup.find('li.heading').first().text()
                );
            }

            links.each(function(){
                var $this = $(this);
                var option = $('<option></option>');
                option.text( $this.text() );
                var value = $this.attr('href');
                option.attr('value', value );
                if( link.attr('href') == value ) {
                    option.prop('selected', true);
                }
                dropDown.append(option)
            })
        }

        function initFaqsPage() {
            $('.faq__questions').find('a').click(function(event){
                var top = $($(this).attr('href')).offset().top
                  , offsetMap = {
                    'mobile': 0,
                    'tablet': 0,
                    'desktop': 110,
                    'desktop-large': 140
                }
                  , container
                  , topOffset
                  , popup = $(this).closest('.mfp-wrap');

                if ( popup.exists() ) { // if the links is within a popup then scroll the popup
                    topOffset = 0;
                    container = popup;
                } else {
                    topOffset = offsetMap[MF.breakpoint.getActive()];
                    container = $('body,html');
                };
                container.animate({
                    scrollTop: top - topOffset
                }, 400);
                event.preventDefault();
            })
        }

    	function init() {
            if( $('.ft-page__left-nav').length > 0 && $('.ft-page__left-nav').closest('.footer-page-popup').length == 0 && $('.ft-page__left-nav').closest('.returns-page-popup').length !== 1 ) {
                MF.stickit.init({
                    targetElement: '.ft-page__left-nav',
                    topElement: '.header-wrapper',
                    bottomElement: '.mf-footer'
                });
            }
            initMobileTopNav();
            initDeliveryPage();
            initReturnsPage();
            initFaqsPage();
    	}
    	return {
    		init: init
    	}
    })();
})(jQuery, window);

MF.footerPage.init();
/*
 *  requires
 *
 *  MF.deliveryMethod
 */
;(function ($, window, document, mediator, formMode)
{
    'use strict';

    var MF = window.MF || {};

    var defaultOptions = {
        url: {
            getDeliveryMethodData: "/ajax/checkout/deliveryMethod/data",
            setDeliveryMethod: "/ajax/checkout/deliveryMethod/set",
            getAllTimeSlots: "/ajax/checkout/deliveryMethod/getAllTimeSlots",
            updateTimeSlotsForSelectedDay: "/ajax/checkout/deliveryMethod/updateTimeSlotsForSelectedDay",
            changeNominatedDay: "/ajax/checkout/deliveryMethod/changeNominatedDay",
            setTimeSlot: "/ajax/checkout/deliveryMethod/setTimeSlot",
            selectDefaultMethod: "/ajax/checkout/deliveryMethod/selectDefault",
            getCountryDeliveryMethodUrl: "/delivery/ajax/delivery-data",
            clearDeliveryMethod: "/ajax/checkout/deliveryMethod/clear",
            getAdhocDeliveryMessage: "/delivery/ajax/adhoc-delivery-message"
        },
        data: {
            root: "data",
            deliveryMethod: "deliveryMethod"
        },
        inEvents: {
            checkoutInit: "checkout:init",
            deliveryAddressChanged: "checkout:delivery:address:changed",
            countrySwitching: "delivery:country:switching",
            addressEdit: "checkout:address:edit"
        },
        outEvents: {
            deliveryMethodChanged: "checkout:delivery:method:changed"
        }
    };

    var deliveryMethodTable, deliveryMethodTDTemplate, deliveryMethodViewInfoTemplate, deliveryMethods,
        deliveryMethodInfo, deliveryMethodView, deliveryMethod, deliveryContainer, adhocDeliveryMessageDiv,
        adhocDeliveryMessageTemplate, adhocDeliveryMessage, notNavigatedFromShippingPage;

    MF.deliveryMethodSelector = (function ()
    {

        var options;
        var debug = false;

        var onCheckoutInit = function (data)
        {
            var deliveryMethodData = data[options.data.root][options.data.deliveryMethod];
            populateDeliveryMethod(deliveryMethodData);

        };

        var emptyDeliveryMethod = function ()
        {
            deliveryMethodTable.empty();
        };

        var populateDeliveryMethod = function (deliveryMethodData)
        {
            deliveryMethods = deliveryMethodData["modes"];
            deliveryMethodTable.empty();
            deliveryContainer.find("#deliveryMethod").show();
            $(".nominatedDelivery__error-message").hide();
            if(deliveryMethods.length != 0){
                deliveryContainer.find(".para-info").hide();
            }
            $.each(deliveryMethods, function (count, deliveryMethod)
            {
                deliveryMethodTable.append(deliveryMethodTDTemplate({
                    "deliveryMethod": deliveryMethod,
                    "selected": deliveryMethodData.selectedDeliveryMethodCode === deliveryMethod.code
                }));

                if (deliveryMethodData.selectedDeliveryMethodCode === deliveryMethod.code && deliveryMethod.nominatedDayDelivery && notNavigatedFromShippingPage.val() === 'true')
                {
                    formMode.switchMode(deliveryMethodInfo, "edit");
                }

                if (deliveryMethodData.selectedDeliveryMethodCode === deliveryMethod.code)
                {
                    deliveryMethodView.html(deliveryMethodViewInfoTemplate({
                        "deliveryMethod": deliveryMethod
                    }));
                }
                if (deliveryMethod.nominatedDayDelivery)
                {
                    initNominatedDayPopulate(false);
                }
            });
        };

        var populateAdhocDeliveryMessage = function (adhocDeliveryMessage)
        {
            adhocDeliveryMessageDiv.empty();
            adhocDeliveryMessageDiv.append(adhocDeliveryMessageTemplate({
                "adhocDeliveryMessage": adhocDeliveryMessage
            }));
        };

        var updateDeliveryMethod = function ()
        {
            return $.post(options.url.selectDefaultMethod, {})
                    .then(getDeliveryMethodData)
                    .then(publishDeliveryMethodChangeEvent)
                    .fail(MF.reviewAndPayMediator.reportError("Checkout Delivery Method: Failed to select default delivery method!."));
        };

        var getDeliveryMethodData = function ()
        {
            return $.getJSON(options.url.getDeliveryMethodData)
                    .then(function (data)
                    {
                        var deliveryMethodData = data[options.data.root][options.data.deliveryMethod];
                        populateDeliveryMethod(deliveryMethodData);
                    })
                    .fail(function(jqxhr, textStatus, error){
                      MF.reviewAndPayMediator.reportError("Checkout Delivery Method: Failed to retrieve delivery method!.");
                      var getDeliveryMethodData_error = textStatus + ", " + error;
                        if(debug){
                            console.log( "Get delivery method data failed: " + getDeliveryMethodData_error );
                        }
                        $(document).trigger(
                            "shippingMethodFailure", {
                                "reason": getDeliveryMethodData_error
                        });
                    })
        };

        var publishDeliveryMethodChangeEvent = function ()
        {
            mediator.publish(options.outEvents.deliveryMethodChanged);
        };

        var onEditDeliveryMethodLinkClick = function (e)
        {
            e.preventDefault();

            formMode.switchMode(deliveryMethodInfo, "edit");
        };

        var initDeliveryMethodObjects = function ()
        {
            deliveryMethod = $("[name=deliveryMethod]");
            deliveryMethodTable = $("#deliveryMethodTable");
            adhocDeliveryMessageDiv = $("#adhocDeliveryMessageDiv");
            deliveryMethodTDTemplate = Handlebars.compile($('#deliveryMethodInfoTemplate').html());
            var adhocDeliveryMessageHandlebar = $('#adhocDeliveryMessageTemplate');
            if (adhocDeliveryMessageHandlebar.length > 0)
            {
                adhocDeliveryMessageTemplate = Handlebars.compile(adhocDeliveryMessageHandlebar.html());
            }

            deliveryMethodInfo = $(".delivery-method-info");
            deliveryMethodView = $(".deliveryMethodView");
            notNavigatedFromShippingPage = $("#notNavigatedFromShippingPage");

            try
            {
                deliveryMethodViewInfoTemplate = Handlebars.compile($('#deliveryMethodViewInfoTemplate').html());
            }
            catch (e)
            {
            }

            deliveryContainer = $("#shippingMethodSection");
        };

        var checkItIsPostcodeEnabledMethod = function ()
        {
            var countryEnabledList = JSON.parse($("#countriesData").text());
            var selectedOption = $("#deliveryModeCountryDropdown #address\\.country").val();
            if (_.contains(countryEnabledList, selectedOption))
            {
                $("#deliveryPostcodeInput").val('').show();
                emptyDeliveryMethod();
                callAndUpdateAdhocDeliveryMessage();
            }
            else
            {
                $("#deliveryPostcodeInput").val('');
                $('#deliveryPageModeButton').trigger('click');
                $('.delivery-country-submit').hide();
                $("#deliveryPostcodeInput").val('').hide();
            }
            $('.delivery-country-submit').hide();
        };

        var callAndUpdateDeliveryModeMethod = function ()
        {
            var selectedOption = $("#deliveryModeCountryDropdown #address\\.country").val();
            var postcode = $("#deliveryModeCountryDropdown #address\\.postcode").val();
            $.ajax({
                beforeSend: function (request)
                {
                    request.setRequestHeader("Cache-Control", "no-store");
                },
                type: "POST",
                url: options.url.getCountryDeliveryMethodUrl,
                data: {countryIso: selectedOption, postcode: postcode},
                cache: false,
                success: function (data)
                {
                    populateDeliveryMethod(data);
                    $("#deliveryMethod").show();
                    populateAdhocDeliveryMessage(data.adhocDeliveryMessage);
                },
                error: function (jqxhr, textStatus, error){
                  var callAndUpdateDeliveryModeMethod_error = textStatus + ", " + error;
                    if(debug){
                        console.error( "Call and update delivery mode method failed: " + callAndUpdateDeliveryModeMethod_error );
                    }
                    $(document).trigger(
                      "shippingMethodFailure", {
                      "reason": callAndUpdateDeliveryModeMethod_error
                      });
                }
            });
            return false;
        };

        var callAndUpdateAdhocDeliveryMessage = function ()
        {
            var selectedOption = $("#deliveryModeCountryDropdown #address\\.country").val();
            $.ajax({
                beforeSend: function (request)
                {
                    request.setRequestHeader("Cache-Control", "no-store");
                },
                type: "POST",
                url: options.url.getAdhocDeliveryMessage,
                data: {countryIso: selectedOption},
                cache: false,
                success: function (data)
                {
                    populateAdhocDeliveryMessage(data);
                }
            });
            return false;
        };

        var postDeliveryMethodCode = function ()
        {
            var selectedModeCode = $("[name=deliveryMethod]:checked").val();
            var payload = {
                deliveryModeCode: selectedModeCode
            };

            return $.post(options.url.setDeliveryMethod, payload)
                    .then(publishDeliveryMethodChangeEvent)
                    .fail(MF.reviewAndPayMediator.reportError("Checkout Delivery Method: Failed to set delivery method!."));
        };

        var clearDeliveryMethod = function ()
        {
            return $.post(defaultOptions.url.clearDeliveryMethod, {})
                    .fail(MF.reviewAndPayMediator.reportError("Checkout Delivery Method: Failed to clear delivery method on country switching!."));
        };

        var changeContainerVisibility = function (edit)
        {
            if (edit)
            {
                deliveryContainer.hide();
            }
            else
            {
                deliveryContainer.show();
            }
        };

        var removeDeliveryOrUpdateNominatedDayOnError = function (response)
        {
            var otdBookingType = response.data.bookingType;
            var disableDeliveryType = response.data.disableDeliveryType;

            if(disableDeliveryType){
                if(otdBookingType == 'NOMINATEDDAY_CREATE'){
                    $('#nominatedDelivery').parent().remove();
                }
                if(otdBookingType == 'NINETYMINS_CREATE'){
                    $('#immediacyDelivery').parent().remove();
                }
                $('#deliverytypesexpress').attr('checked', true);
                postDeliveryMethodCode();
            } else {
                if(otdBookingType == 'NOMINATEDDAY_CREATE'){
                    initNominatedDayPopulate(true);
                }
            }

            formMode.switchMode(deliveryMethodInfo, "edit");
        };

        var initNominatedDayPopulate = function (showSelect)
        {
            $("#onTheDotDelivery .nominatedDays__container, #onTheDotDelivery .nominatedDayTimeSlots__container").addClass("loading");
            $("#deliverytypesOnTheDotNominatedDayDelivery").attr('disabled', true);
            $.getJSON(options.url.getAllTimeSlots)
                .then(function (data)
                {
                    populateNominatedDaySection(data, 0, true, showSelect);
                    $("#deliverytypesOnTheDotNominatedDayDelivery").attr('disabled', false);
                });
        };

        var updateNominatedDayPopulateBySelectedDay = function ()
        {
            if ($('#deliverytypesOnTheDotNominatedDayDelivery').is(':checked'))
            {
                $(".nominatedDays__container, .nominatedDayTimeSlots__container").addClass("loading");
                $("#deliverytypesOnTheDotNominatedDayDelivery").attr('disabled', true);
                $.getJSON(options.url.updateTimeSlotsForSelectedDay)
                        .then(function (data)
                        {
                            $("#deliverytypesOnTheDotNominatedDayDelivery").attr('disabled', false);

                            if (!data)
                            {
                                $("#onTheDotDelivery .nominatedDays__container, #onTheDotDelivery .nominatedDayTimeSlots__container").removeClass("loading").css({'border':'none'});
                                return;
                            }

                            populateNominatedDaySection(data, $("#nominatedDays option:selected").index(), true, true);

                            if (data.errorMessage)
                            {
                                var errorObject = {"message": data.errorMessage};
                                MF.reviewAndPayMediator.addDeliveryFailureMessage(errorObject);

                                formMode.switchMode(deliveryMethodInfo, "edit");
                            }
                        });
            }
        };

        var populateNominatedDaySection = function (data, timeSlotsIndex, registerNominatedDaysChangeEvent, showSelect)
        {

            if (!data || !data.timeSlotsData || data.timeSlotsData.length == 0)
            {
                if ($('#deliverytypesOnTheDotNominatedDayDelivery').is(':checked'))
                {
                    $('#deliverytypesexpress').attr('checked', true);
                    postDeliveryMethodCode();
                }

                $('#nominatedDelivery').parent().remove();

                Rollbar.error("Empty time slots returned for Nominated delivery", errorVars);

                return;
            }

            var timeslotsObject = data.timeSlotsData;
            $('#nominatedDays').unbind();
            $('#nominatedDays').html("");
            for (var i = 0; i < timeslotsObject.length; i++)
            {
                var selectedValue = "";
                if (data.selectedDay === timeslotsObject[i].day)
                {
                    selectedValue = "selected";
                }

                $('#nominatedDays').append($("<option/>", {
                    value: timeslotsObject[i].day,
                    text: timeslotsObject[i].displayValue,
                    selected: selectedValue
                }));
            }
            $('#nominatedDays').selecter("refresh");

            var timeSlotIndex = timeSlotsIndex;
            var showSelectMessage = showSelect;

            if (data.selectedDay)
            {
                timeSlotIndex = $("#nominatedDays option:selected").index();
            }

            if ($('#deliverytypesOnTheDotNominatedDayDelivery').is(':checked') && !data.selectedTimeSlotId)
            {
                showSelectMessage = true;
            }

            updateTimeSlots(timeSlotIndex, showSelectMessage);

            if (registerNominatedDaysChangeEvent)
            {
                $('#nominatedDays').change(function ()
                {
                    $("#nominatedDays").parent().find(".cs__selected").html($("#nominatedDays").find(":selected").html());
                    var selectedIndex = $("#nominatedDays option:selected").index();
                    updateTimeSlots(selectedIndex, true);
                    var payload = {
                        nominatedDay: $('#nominatedDays').val()
                    };
                    $.post(options.url.changeNominatedDay, payload);

                });
            }

            $('#nominatedDayTimeSlots').change(function (){
                var payload = {
                    timeSlotId: $('#nominatedDayTimeSlots').val()
                };
                $.post(options.url.setTimeSlot, payload);
            });

            function updateTimeSlots(dayIndex, showPleaseSelect){
                $('#nominatedDayTimeSlots').html("");

                $('#nominatedDayTimeSlots').append($("<option/>", {
                    value: 0,
                    text: 'Please select'
                }));

                var setDefaultSelection = true;
                for (var i = 0; i < timeslotsObject[dayIndex].timeSlots.length; i++)
                {
                    var selectedValue = "";
                    if (data.selectedTimeSlotId === timeslotsObject[dayIndex].timeSlots[i].timeSlotId)
                    {
                        setDefaultSelection = false;
                        selectedValue = "selected";
                    }

                    $('#nominatedDayTimeSlots').append($("<option/>", {
                        value: timeslotsObject[dayIndex].timeSlots[i].timeSlotId,
                        text: timeslotsObject[dayIndex].timeSlots[i].timeSlot,
                        selected: selectedValue
                    }));
                }

                if (setDefaultSelection)
                {
                    if(!showPleaseSelect && dayIndex == 0)
                    {
                        $('#nominatedDayTimeSlots option:eq(1)').attr("selected", "selected");
                    }else {
                        $('#nominatedDayTimeSlots option:eq(0)').attr("selected", "selected");
                    }
                }

                $('#nominatedDayTimeSlots').selecter("refresh");
                var newLabel = $("#nominatedDayTimeSlots").find(":selected").html();
                $("#nominatedDayTimeSlots").parent().find(".cs__selected").html(newLabel);


            }

            function selectNominatedDayDeliveryMethod()
            {
                if (!$('#deliverytypesOnTheDotNominatedDayDelivery').is(':checked'))
                {
                    $('#deliverytypesOnTheDotNominatedDayDelivery').attr('checked', true);
                    postDeliveryMethodCode();
                }
            }

            $('#nominatedDays').selecter().show();
            $('#nominatedDayTimeSlots').selecter().show();
            $("#onTheDotDelivery .nominatedDays__container, #onTheDotDelivery .nominatedDayTimeSlots__container").removeClass("loading").css({'border':'none'});

            $('#onTheDotDelivery .selecter').focus(function ()
            {
                selectNominatedDayDeliveryMethod();
            });
        };

        function init(opts)
        {

            options = $.extend({}, defaultOptions, opts);

            $('#deliveryModeCountryDropdown').on("change", checkItIsPostcodeEnabledMethod);
            $('#deliveryPageModeButton').on("click", callAndUpdateDeliveryModeMethod);

            $("#deliveryPostcodeInput #address\\.postcode").on('keyup change blur paste cut click', function ()
            {
                if ($(this).val())
                {
                    $('.delivery-country-submit').show();
                }
                else
                {
                    $('.delivery-country-submit').hide();
                }
            });
            initDeliveryMethodObjects();


            $(function ()
            {

                mediator.subscribe(options.inEvents.checkoutInit, onCheckoutInit);
                mediator.subscribe(options.inEvents.deliveryAddressChanged, updateDeliveryMethod);
                mediator.subscribe(options.inEvents.countrySwitching, clearDeliveryMethod);
                mediator.subscribe(options.inEvents.addressEdit, changeContainerVisibility);


                $(document).on("change", "[name=deliveryMethod]", postDeliveryMethodCode);
                $('#deliveryModeCountryDropdown').trigger('change');

                deliveryMethodView.on("click", ".editDeliveryMethodLink", onEditDeliveryMethodLinkClick);
            });

        }

        return {
            init: init,
            removeDeliveryOrUpdateNominatedDayOnError: removeDeliveryOrUpdateNominatedDayOnError,
            updateNominatedDayPopulateBySelectedDay: updateNominatedDayPopulateBySelectedDay
        };

    })();

    window.MF = MF;

}(jQuery, this, this.document, MF.checkout.mediator, MF.formMode));

if ($('#checkoutShipping, #checkoutReviewAndPay, #deliveryModeCountryDropdown').length !== 0)
{
    MF.deliveryMethodSelector.init();
}

;(function ($, window, document) {
  'use strict';
  var MF = window.MF = window.MF || {};

  MF.footerPageOverlays = (function () {
    var debug = false;

    function bindFaqspopup() {
      $('[data-product-cites]').on('click', function(){}