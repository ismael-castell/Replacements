;/*! bootstrap-accessibility-plugin - v1.0.2 - 2014-07-01
* https://github.com/paypal/bootstrap-accessibility-plugin
* Copyright (c) 2014 PayPal Accessibility Team; Licensed BSD */
!function($){"use strict";var uniqueId=function(prefix){return(prefix||"ui-id")+"-"+Math.floor(1e3*Math.random()+1)},removeMultiValAttributes=function(el,attr,val){var describedby=(el.attr(attr)||"").split(/\s+/),index=$.inArray(val,describedby);-1!==index&&describedby.splice(index,1),describedby=$.trim(describedby.join(" ")),describedby?el.attr(attr,describedby):el.removeAttr(attr)};$(".alert").attr("role","alert"),$(".close").removeAttr("aria-hidden").wrapInner('<span aria-hidden="true"></span>').append('<span class="sr-only">Close Alert</span>');var showTooltip=$.fn.tooltip.Constructor.prototype.show,hideTooltip=$.fn.tooltip.Constructor.prototype.hide;$.fn.tooltip.Constructor.prototype.show=function(){showTooltip.apply(this,arguments);var $tip=this.tip(),tooltipID=$tip.attr("id")||uniqueId("ui-tooltip");$tip.attr({role:"tooltip",id:tooltipID}),this.$element.attr("aria-describedby",tooltipID)},$.fn.tooltip.Constructor.prototype.hide=function(){return hideTooltip.apply(this,arguments),removeMultiValAttributes(this.$element,"aria-describedby",this.tip().attr("id")),this};var showPopover=$.fn.popover.Constructor.prototype.setContent,hidePopover=$.fn.popover.Constructor.prototype.hide;$.fn.popover.Constructor.prototype.setContent=function(){showPopover.apply(this,arguments);var $tip=this.tip(),tooltipID=$tip.attr("id")||uniqueId("ui-tooltip");$tip.attr({role:"alert",id:tooltipID}),this.$element.attr("aria-describedby",tooltipID),this.$element.focus()},$.fn.popover.Constructor.prototype.hide=function(){return hidePopover.apply(this,arguments),removeMultiValAttributes(this.$element,"aria-describedby",this.tip().attr("id")),this},$(".modal-dialog").attr({role:"document"});var modalhide=$.fn.modal.Constructor.prototype.hide;$.fn.modal.Constructor.prototype.hide=function(){var modalOpener=this.$element.parent().find('[data-target="#'+this.$element.attr("id")+'"]');modalhide.apply(this,arguments),console.log("modalOpener",modalOpener),modalOpener.focus()};var $par,firstItem,toggle="[data-toggle=dropdown]",focusDelay=200,menus=$(toggle).parent().find("ul").attr("role","menu"),lis=menus.find("li").attr("role","presentation");lis.find("a").attr({role:"menuitem",tabIndex:"-1"}),$(toggle).attr({"aria-haspopup":"true","aria-expanded":"false"}),$(toggle).parent().on("shown.bs.dropdown",function(){$par=$(this);var $toggle=$par.find(toggle);$toggle.attr("aria-expanded","true"),setTimeout(function(){firstItem=$(".dropdown-menu [role=menuitem]:visible",$par)[0];try{firstItem.focus()}catch(ex){}},focusDelay)}),$(toggle).parent().on("hidden.bs.dropdown",function(){$par=$(this);var $toggle=$par.find(toggle);$toggle.attr("aria-expanded","false")}),$.fn.dropdown.Constructor.prototype.keydown=function(e){var $par;/(32)/.test(e.keyCode)&&($par=$(this).parent(),$(this).trigger("click"),e.preventDefault()&&e.stopPropagation())},$(document).on("focusout.dropdown.data-api",".dropdown-menu",function(){var $this=$(this),that=this;setTimeout(function(){$.contains(that,document.activeElement)||($this.parent().removeClass("open"),$this.parent().find("[data-toggle=dropdown]").attr("aria-expanded","false"))},150)}).on("keydown.bs.dropdown.data-api",toggle+", [role=menu]",$.fn.dropdown.Constructor.prototype.keydown);var $tablist=$(".js-nav-tabs, .js-nav-pills"),$lis=$tablist.children("li"),$tabs=$tablist.find('[data-toggle="tab"], [data-toggle="pill"]');$tablist.attr("role","tablist"),$lis.attr("role","presentation"),$tabs.attr("role","tab"),$tabs.each(function(){var tabpanel=$($(this).attr("href")),tab=$(this),tabid=tab.attr("id")||uniqueId("ui-tab");tab.attr("id",tabid),tab.parent().hasClass("active")?(tab.attr({tabIndex:"0","aria-selected":"true","aria-controls":tab.attr("href").substr(1)}),tabpanel.attr({role:"tabpanel",tabIndex:"0","aria-hidden":"false","aria-labelledby":tabid})):(tab.attr({tabIndex:"-1","aria-selected":"false","aria-controls":tab.attr("href").substr(1)}),tabpanel.attr({role:"tabpanel",tabIndex:"-1","aria-hidden":"true","aria-labelledby":tabid}))}),$.fn.tab.Constructor.prototype.keydown=function(e){var $items,index,$this=$(this),$ul=$this.closest("ul[role=tablist] "),k=e.which||e.keyCode;if($this=$(this),/(37|38|39|40)/.test(k)){$items=$ul.find("[role=tab]:visible"),index=$items.index($items.filter(":focus")),(38==k||37==k)&&index--,(39==k||40==k)&&index++,0>index&&(index=$items.length-1),index==$items.length&&(index=0);var nextTab=$items.eq(index);"tab"===nextTab.attr("role")&&nextTab.tab("show").focus(),e.preventDefault(),e.stopPropagation()}},$(document).on("keydown.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',$.fn.tab.Constructor.prototype.keydown);var tabactivate=$.fn.tab.Constructor.prototype.activate;$.fn.tab.Constructor.prototype.activate=function(element,container){var $active=container.find("> .active");$active.find("[data-toggle=tab], [data-toggle=pill]").attr({tabIndex:"-1","aria-selected":!1}),$active.filter(".tab-pane").attr({"aria-hidden":!0,tabIndex:"-1"}),tabactivate.apply(this,arguments),element.addClass("active"),element.find("[data-toggle=tab], [data-toggle=pill]").attr({tabIndex:"0","aria-selected":!0}),element.filter(".tab-pane").attr({"aria-hidden":!1,tabIndex:"0"})};var $colltabs=$('[data-toggle="collapse"]');$colltabs.attr({role:"tab","aria-selected":"false","aria-expanded":"false"}),$colltabs.each(function(){var colltab=$(this),collpanel=$(colltab.attr("data-target")?colltab.attr("data-target"):colltab.attr("href")),parent=colltab.attr("data-parent"),collparent=parent&&$(parent),collid=colltab.attr("id")||uniqueId("ui-collapse");$(collparent).find("div:not(.collapse,.panel-body), h4").attr("role","presentation"),colltab.attr("id",collid),collparent&&(collparent.attr({role:"tablist","aria-multiselectable":"true"}),collpanel.hasClass("in")?(colltab.attr({"aria-controls":colltab.attr("href").substr(1),"aria-selected":"true","aria-expanded":"true",tabindex:"0"}),collpanel.attr({role:"tabpanel",tabindex:"0","aria-labelledby":collid,"aria-hidden":"false"})):(colltab.attr({"aria-controls":colltab.attr("href").substr(1),tabindex:"-1"}),collpanel.attr({role:"tabpanel",tabindex:"-1","aria-labelledby":collid,"aria-hidden":"true"})))});var collToggle=$.fn.collapse.Constructor.prototype.toggle;$.fn.collapse.Constructor.prototype.toggle=function(){var href,prevTab=this.$parent&&this.$parent.find('[aria-expanded="true"]');if(prevTab){ {var curTab,prevPanel=prevTab.attr("data-target")||(href=prevTab.attr("href"))&&href.replace(/.*(?=#[^\s]+$)/,""),$prevPanel=$(prevPanel),$curPanel=this.$element;this.$parent}this.$parent&&(curTab=this.$parent.find('[data-toggle=collapse][href="#'+this.$element.attr("id")+'"]')),collToggle.apply(this,arguments),$.support.transition&&this.$element.one($.support.transition.end,function(){prevTab.attr({"aria-selected":"false","aria-expanded":"false",tabIndex:"-1"}),$prevPanel.attr({"aria-hidden":"true",tabIndex:"-1"}),curTab.attr({"aria-selected":"true","aria-expanded":"true",tabIndex:"0"}),$curPanel.hasClass("in")?$curPanel.attr({"aria-hidden":"false",tabIndex:"0"}):(curTab.attr({"aria-selected":"false","aria-expanded":"false"}),$curPanel.attr({"aria-hidden":"true",tabIndex:"-1"}))})}else collToggle.apply(this,arguments)},$.fn.collapse.Constructor.prototype.keydown=function(e){var $items,index,$this=$(this),$tablist=$this.closest("div[role=tablist] "),k=e.which||e.keyCode;$this=$(this),/(32|37|38|39|40)/.test(k)&&(32==k&&$this.click(),$items=$tablist.find("[role=tab]"),index=$items.index($items.filter(":focus")),(38==k||37==k)&&index--,(39==k||40==k)&&index++,0>index&&(index=$items.length-1),index==$items.length&&(index=0),$items.eq(index).focus(),e.preventDefault(),e.stopPropagation())},$(document).on("keydown.collapse.data-api",'[data-toggle="collapse"]',$.fn.collapse.Constructor.prototype.keydown),$(".carousel").each(function(){var $this=$(this),prev=$this.find('[data-slide="prev"]'),next=$this.find('[data-slide="next"]'),$options=$this.find(".item"),$listbox=$options.parent();$this.attr({"data-interval":"false","data-wrap":"false"}),$listbox.attr("role","listbox"),$options.attr("role","option");var spanPrev=document.createElement("span");spanPrev.setAttribute("class","sr-only"),spanPrev.innerHTML="Previous";var spanNext=document.createElement("span");spanNext.setAttribute("class","sr-only"),spanNext.innerHTML="Next",prev.attr("role","button"),next.attr("role","button"),prev.append(spanPrev),next.append(spanNext),$options.each(function(){var item=$(this);item.attr(item.hasClass("active")?{"aria-selected":"true",tabindex:"0"}:{"aria-selected":"false",tabindex:"-1"})})});var slideCarousel=$.fn.carousel.Constructor.prototype.slide;$.fn.carousel.Constructor.prototype.slide=function(type,next){var $active=this.$element.find(".item.active"),$next=next||$active[type]();slideCarousel.apply(this,arguments),$active.one($.support.transition.end,function(){$active.attr({"aria-selected":!1,tabIndex:"-1"}),$next.attr({"aria-selected":!0,tabIndex:"0"})})},$.fn.carousel.Constructor.prototype.keydown=function(e){var index,$this=$(this),$ul=$this.closest("div[role=listbox]"),$items=$ul.find("[role=option]"),$parent=$ul.parent(),k=e.which||e.keyCode;/(37|38|39|40)/.test(k)&&(index=$items.index($items.filter(".active")),(37==k||38==k)&&($parent.carousel("prev"),index--,0>index?index=$items.length-1:$this.prev().focus()),(39==k||40==k)&&($parent.carousel("next"),index++,index==$items.length?index=0:$this.one($.support.transition.end,function(){$this.next().focus()})),e.preventDefault(),e.stopPropagation())},$(document).on("keydown.carousel.data-api","div[role=option]",$.fn.carousel.Constructor.prototype.keydown)}(jQuery);;/*!
 * jQuery Cookie Plugin v1.3.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
(function (factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD. Register as anonymous module.
		define(['jquery'], factory);
	} else {
		// Browser globals.
		factory(jQuery);
	}
}(function ($) {

	var pluses = /\+/g;

	function raw(s) {
		return s;
	}

	function decoded(s) {
		return decodeURIComponent(s.replace(pluses, ' '));
	}

	function converted(s) {
		if (s.indexOf('"') === 0) {
			// This is a quoted cookie as according to RFC2068, unescape
			s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
		}
		try {
			return config.json ? JSON.parse(s) : s;
		} catch(er) {}
	}

	var config = $.cookie = function (key, value, options) {

		// write
		if (value !== undefined) {
			options = $.extend({}, config.defaults, options);

			if (typeof options.expires === 'number') {
				var days = options.expires, t = options.expires = new Date();
				t.setDate(t.getDate() + days);
			}

			value = config.json ? JSON.stringify(value) : String(value);

			return (document.cookie = [
				config.raw ? key : encodeURIComponent(key),
				'=',
				config.raw ? value : encodeURIComponent(value),
				options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
				options.path    ? '; path=' + options.path : '',
				options.domain  ? '; domain=' + options.domain : '',
				options.secure  ? '; secure' : ''
			].join(''));
		}

		// read
		var decode = config.raw ? raw : decoded;
		var cookies = document.cookie.split('; ');
		var result = key ? undefined : {};
		for (var i = 0, l = cookies.length; i < l; i++) {
			var parts = cookies[i].split('=');
			var name = decode(parts.shift());
			var cookie = decode(parts.join('='));

			if (key && key === name) {
				result = converted(cookie);
				break;
			}

			if (!key) {
				result[name] = converted(cookie);
			}
		}

		return result;
	};

	config.defaults = {};

	$.removeCookie = function (key, options) {
		if ($.cookie(key) !== undefined) {
			// Must not alter options, thus extending a fresh object...
			$.cookie(key, '', $.extend({}, options, { expires: -1 }));
			return true;
		}
		return false;
	};

}));;/*@preserve
 *
 * Copyright (c) 2014 Chris O'Hara <cohara87@gmail.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

(function (name, definition) {
    if (typeof module !== 'undefined') {
        module.exports = definition();
    } else if (typeof define === 'function' && typeof define.amd === 'object') {
        define(definition);
    } else {
        this[name] = definition();
    }
})('validator', function (validator) {

    'use strict';

    validator = { version: '3.5.0' };

    var email = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i;

    var creditCard = /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/;

    var isbn10Maybe = /^(?:[0-9]{9}X|[0-9]{10})$/
      , isbn13Maybe = /^(?:[0-9]{13})$/;

    var ipv4Maybe = /^(\d?\d?\d)\.(\d?\d?\d)\.(\d?\d?\d)\.(\d?\d?\d)$/
      , ipv6 = /^::|^::1|^([a-fA-F0-9]{1,4}::?){1,7}([a-fA-F0-9]{1,4})$/;

    var uuid = {
        '3': /^[0-9A-F]{8}-[0-9A-F]{4}-3[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i
      , '4': /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i
      , '5': /^[0-9A-F]{8}-[0-9A-F]{4}-5[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i
      , all: /^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i
    };

    var phone = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

    var alpha = /^[a-zA-Z]+$/
      , alphanumeric = /^[a-zA-Z0-9]+$/
      , numeric = /^-?[0-9]+$/
      , int = /^(?:-?(?:0|[1-9][0-9]*))$/
      , float = /^(?:-?(?:[0-9]+))?(?:\.[0-9]*)?(?:[eE][\+\-]?(?:[0-9]+))?$/
      , hexadecimal = /^[0-9a-fA-F]+$/
      , hexcolor = /^#?([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/;

    validator.extend = function (name, fn) {
        validator[name] = function () {
            var args = Array.prototype.slice.call(arguments);
            args[0] = validator.toString(args[0]);
            return fn.apply(validator, args);
        };
    };

    validator.noCoerce = ['toString', 'toDate', 'extend', 'init', 'flatten', 'merge'];

    //Right before exporting the validator object, pass each of the builtins
    //through extend() so that their first argument is coerced to a string
    validator.init = function () {
        for (var name in validator) {
            if (typeof validator[name] !== 'function' || validator.noCoerce.indexOf(name) >= 0) {
                continue;
            }
            validator.extend(name, validator[name]);
        }
    };

    validator.toString = function (input) {
        if (input === null || typeof input === 'undefined' || (isNaN(input) && !input.length)) {
            input = '';
        } else if (typeof input === 'object' && input.toString) {
            input = input.toString();
        } else if (typeof input !== 'string') {
            input += '';
        }
        return input;
    };

    validator.toDate = function (date) {
        if (Object.prototype.toString.call(date) === '[object Date]') {
            return date;
        }
        date = Date.parse(date);
        return !isNaN(date) ? new Date(date) : null;
    };

    validator.toFloat = function (str) {
        return parseFloat(str);
    };

    validator.toInt = function (str, radix) {
        return parseInt(str, radix || 10);
    };

    validator.toBoolean = function (str, strict) {
        if (strict) {
            return str === '1' || str === 'true';
        }
        return str !== '0' && str !== 'false' && str !== '';
    };

    validator.flatten = function (array, separator) {
        if (!array) {
            return '';
        }
        var str = array[0];
        for (var i = 1; i < array.length; i++) {
            str += separator + array[i];
        }
        return str;
    };

    validator.merge = function (obj, defaults) {
        obj = obj || {};
        for (var key in defaults) {
            if (typeof obj[key] === 'undefined') {
                obj[key] = defaults[key];
            }
        }
        return obj;
    };

    validator.equals = function (str, comparison) {
        return str === validator.toString(comparison);
    };

    validator.contains = function (str, elem) {
        return str.indexOf(validator.toString(elem)) >= 0;
    };

    validator.matches = function (str, pattern, modifiers) {
        if (Object.prototype.toString.call(pattern) !== '[object RegExp]') {
            pattern = new RegExp(pattern, modifiers);
        }
        return pattern.test(str);
    };

    validator.isEmail = function (str) {
        return email.test(str);
    };

    validator.isPhone = function (str) {
        return phone.test(str);
    };

    var default_url_options = {
        protocols: [ 'http', 'https', 'ftp' ]
      , require_tld: true
      , require_protocol: false
    };

    validator.isURL = function (str, options) {
        options = validator.merge(options, default_url_options);
        var url = new RegExp('^(?!mailto:)(?:(?:' + validator.flatten(options.protocols, '|') + ')://)' + (options.require_protocol ? '' : '?') + '(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))' + (options.require_tld ? '' : '?') + ')|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$', 'i');
        return str.length < 2083 && url.test(str);
    };

    validator.isIP = function (str, version) {
        version = validator.toString(version);
        if (!version) {
            return validator.isIP(str, 4) || validator.isIP(str, 6);
        } else if (version === '4') {
            if (!ipv4Maybe.test(str)) {
                return false;
            }
            var parts = str.split('.').sort();
            return parts[3] <= 255;
        }
        return version === '6' && ipv6.test(str);
    };

    validator.isAlpha = function (str) {
        return alpha.test(str);
    };

    validator.isAlphanumeric = function (str) {
        return alphanumeric.test(str);
    };

    validator.isNumeric = function (str) {
        return numeric.test(str);
    };

    validator.isHexadecimal = function (str) {
        return hexadecimal.test(str);
    };

    validator.isHexColor = function (str) {
        return hexcolor.test(str);
    };

    validator.isLowercase = function (str) {
        return str === str.toLowerCase();
    };

    validator.isUppercase = function (str) {
        return str === str.toUpperCase();
    };

    validator.isInt = function (str) {
        return int.test(str);
    };

    validator.isFloat = function (str) {
        return str !== '' && float.test(str);
    };

    validator.isDivisibleBy = function (str, num) {
        return validator.toFloat(str) % validator.toInt(num) === 0;
    };

    validator.isNull = function (str) {
        return str.length === 0;
    };

    validator.isLength = function (str, min, max) {
        return str.length >= min && (typeof max === 'undefined' || str.length <= max);
    };

    validator.isUUID = function (str, version) {
        var pattern = uuid[version ? version : 'all'];
        return pattern && pattern.test(str);
    };

    validator.isDate = function(){}