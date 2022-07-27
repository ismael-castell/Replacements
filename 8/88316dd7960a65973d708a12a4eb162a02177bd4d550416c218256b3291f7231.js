/*
* jquery-match-height 0.7.0 by @liabru
* http://brm.io/jquery-match-height/
* License MIT
*/
!function(t){"use strict";"function"==typeof define&&define.amd?define(["jquery"],t):"undefined"!=typeof module&&module.exports?module.exports=t(require("jquery")):t(jQuery)}(function(t){var e=-1,o=-1,i=function(t){return parseFloat(t)||0},a=function(e){var o=1,a=t(e),n=null,r=[];return a.each(function(){var e=t(this),a=e.offset().top-i(e.css("margin-top")),s=r.length>0?r[r.length-1]:null;null===s?r.push(e):Math.floor(Math.abs(n-a))<=o?r[r.length-1]=s.add(e):r.push(e),n=a}),r},n=function(e){var o={
byRow:!0,property:"height",target:null,remove:!1};return"object"==typeof e?t.extend(o,e):("boolean"==typeof e?o.byRow=e:"remove"===e&&(o.remove=!0),o)},r=t.fn.matchHeight=function(e){var o=n(e);if(o.remove){var i=this;return this.css(o.property,""),t.each(r._groups,function(t,e){e.elements=e.elements.not(i)}),this}return this.length<=1&&!o.target?this:(r._groups.push({elements:this,options:o}),r._apply(this,o),this)};r.version="0.7.0",r._groups=[],r._throttle=80,r._maintainScroll=!1,r._beforeUpdate=null,
r._afterUpdate=null,r._rows=a,r._parse=i,r._parseOptions=n,r._apply=function(e,o){var s=n(o),h=t(e),l=[h],c=t(window).scrollTop(),p=t("html").outerHeight(!0),d=h.parents().filter(":hidden");return d.each(function(){var e=t(this);e.data("style-cache",e.attr("style"))}),d.css("display","block"),s.byRow&&!s.target&&(h.each(function(){var e=t(this),o=e.css("display");"inline-block"!==o&&"flex"!==o&&"inline-flex"!==o&&(o="block"),e.data("style-cache",e.attr("style")),e.css({display:o,"padding-top":"0",
"padding-bottom":"0","margin-top":"0","margin-bottom":"0","border-top-width":"0","border-bottom-width":"0",height:"100px",overflow:"hidden"})}),l=a(h),h.each(function(){var e=t(this);e.attr("style",e.data("style-cache")||"")})),t.each(l,function(e,o){var a=t(o),n=0;if(s.target)n=s.target.outerHeight(!1);else{if(s.byRow&&a.length<=1)return void a.css(s.property,"");a.each(function(){var e=t(this),o=e.attr("style"),i=e.css("display");"inline-block"!==i&&"flex"!==i&&"inline-flex"!==i&&(i="block");var a={
display:i};a[s.property]="",e.css(a),e.outerHeight(!1)>n&&(n=e.outerHeight(!1)),o?e.attr("style",o):e.css("display","")})}a.each(function(){var e=t(this),o=0;s.target&&e.is(s.target)||("border-box"!==e.css("box-sizing")&&(o+=i(e.css("border-top-width"))+i(e.css("border-bottom-width")),o+=i(e.css("padding-top"))+i(e.css("padding-bottom"))),e.css(s.property,n-o+"px"))})}),d.each(function(){var e=t(this);e.attr("style",e.data("style-cache")||null)}),r._maintainScroll&&t(window).scrollTop(c/p*t("html").outerHeight(!0)),
this},r._applyDataApi=function(){var e={};t("[data-match-height], [data-mh]").each(function(){var o=t(this),i=o.attr("data-mh")||o.attr("data-match-height");i in e?e[i]=e[i].add(o):e[i]=o}),t.each(e,function(){this.matchHeight(!0)})};var s=function(e){r._beforeUpdate&&r._beforeUpdate(e,r._groups),t.each(r._groups,function(){r._apply(this.elements,this.options)}),r._afterUpdate&&r._afterUpdate(e,r._groups)};r._update=function(i,a){if(a&&"resize"===a.type){var n=t(window).width();if(n===e)return;e=n;
}i?-1===o&&(o=setTimeout(function(){s(a),o=-1},r._throttle)):s(a)},t(r._applyDataApi),t(window).bind("load",function(t){r._update(!1,t)}),t(window).bind("resize orientationchange",function(t){r._update(!0,t)})});

var windowWidth = $(window).width();
var mobileBreakpoint = 765;
var tabletBreakpoint = 1280;
var mobileMenuOpen = false;
var mobileSearchOpen = false;
var isMobile = false;
var mobilMenuOffset = 0;
var	expandedMenuOffset = 0;

/*change viewpart if mobile*/
if (screen.width < mobileBreakpoint) {
    //var mvp = document.getElementById('viewport');
    //mvp.setAttribute('content','width=750, user-scalable=no');
	
}
/*check if mobile*/
if(windowWidth<=mobileBreakpoint){
	isMobile = true;
}else{
	isMobile = false;
}

(function(){
  "use strict";
	(function ($) {
	  var mobileScreen = $(window).width() < 768;
	  var navBackBtn, navCloseBtn, navLevelPrimary, navLevelChild;

	  $(function () {
		navLevelPrimary = $('#main-menu li.parent.primary-level');
		navLevelChild = $('#main-menu li.parent.child');
		navBackBtn = $('#main-menu .back-button');
		navCloseBtn = $('.close-nav-section');
		var timer;

		// Disable input focus on mobile devices
		$('input').blur();

		$(window).on("resize", function () {
		  clearTimeout(timer);
		  //call the function after half second
		  timer = setTimeout(function () {
			navComponents.default();
		  }, 200);

		  mobileScreen = $(window).width() < 768;
		  // Adjust dropdown height
		  if (mobileScreen) {
			$('.primary-level > .nav-section').css("height", "inherit");
		  } else {
			var desktopNavHeight = $('.parent.active > .nav-section').last().outerHeight();
			$('.primary-level > .nav-section').css("height",desktopNavHeight);
		  }

		  // Set desktop menu to fixed if user scrolled down on page
		  if ($(document).scrollTop() > 0 && !mobileScreen) {
			$(".main-menu-contain").addClass('active');
		  }
		});

		// Close menu if you click anywhere
		$(document).on('click', function (event) {
		  if (!mobileScreen) {
			if ($(event.target).closest('.nav-section').length === 0) {
			  $('#main-menu > ul > li.active').removeClass('active');
			}
		  }
		});

		// Enable default navigation components
		navComponents.default();
		$('.search').on('click', function (e) {
			navComponents.mobileSearch();
		});
		// First level navigation links
		navLevelPrimary.off('click');
		navLevelPrimary.on('click', '> a', function (e) {
		  if(!$(this).parent('li').hasClass("active")){
		  e.preventDefault();
		  }
		  e.stopPropagation();

		  var navHeight = $(this).parent('li').find('> .nav-section').outerHeight();
		  navComponents.adjustHeight($(this), navHeight);

		  $(this).parent('li').siblings().removeClass('active');
		  $(this).parent('li').toggleClass('active');

		  // Set classes for mobile screen
		  if (!mobileScreen) {
			if ($(this).parent('li').hasClass('active')) {
			  $('html').addClass('no-scroll');
			  $('nav#main-menu').addClass('active');
			} else {
			  $('html').removeClass('no-scroll');
			  $('nav#main-menu').removeClass('active');
			}
		  }
		  
		  var navHeight = $(this).parent('li').find('.active > .nav-section').last().outerHeight();
		  navComponents.adjustHeight($(this).parent('li').find('> .nav-section'), navHeight);
		});

		// Close mega menu
		navCloseBtn.on('click', function (e) {
		  $(this).parents('li').toggleClass('active');
		});

		// Desktop Search
		$('.search-submit').on('click', function (e) {
		  console.log('submit');
		  $(this).parent('.search-contain').find('.search-input').toggleClass('active');
		});
	  });

	  // Navigation Components
	  var navComponents = {
		default: function _default(e) {
		  // Mobile Functionlity
		  if (mobileScreen) {

			// Unbind From Desktop
			navLevelChild.unbind('click');
			$('.menuToggle').unbind('click');

			navLevelChild.on('click', function (e) {

			  e.stopPropagation();
			  var target = $(e.target);
			  if ($(this).hasClass('sub-list')) {
				e.offsetX = e.offsetX + 40;
			  }
			  var noLink = false;
			  if ( target.is( "a" ) && target.attr('href') == "#" ) {
				noLink = true;
			  }
			  
			  // Check to see if '+' or '-' is clicked
			  if (e.offsetX > target.outerWidth() || noLink) {
				e.preventDefault();
				$(this).toggleClass('active');

				var navSection = $('.parent.active > .nav-section');
				var navHeight = $(this).find('> .nav-section').outerHeight();
				
				navComponents.adjustHeight($(this), navHeight);

				// Check to see user outside the first level of menus
				if (navSection.length > 1) {

				  $('.primary-level.active .nav-section .back-button span').addClass('active');

				  // Remove any deeper opened nav sections
				  if ($(this).find('.parent.active').length > 0) {
					$(this).find('.parent.active').removeClass('active');
				  }

				  // Remove arrow from back button
				  if (navSection.length == 2) {
					$('.primary-level.active .nav-section .back-button span').addClass('active');
				  }
				}
			  }
			});

			// Mobile Menu Toggle
			$('.menuToggle').on('click', function (e) {
			  $('.mobile-search').removeClass('active');
			  navComponents.disableScroll();
			  navComponents.mobileActive();
			});

			// Mobile Search
			$('.search').on('click', function (e) {
			  $('nav#main-menu').removeClass('active');
			  $('html').removeClass('no-scroll');
			  //navComponents.mobileSearch();
			});
		  }
		  // Desktop Functionality
		  else {
			  // Unbind From Mobile Functions
			  navLevelChild.unbind('click');
			  navBackBtn.unbind('click');
			  
			  navLevelChild.on('click', '> a', function (e) {
				if(!($(this).parent('li')).is(".sub-list"))
				{
					var navHeight = $(this).parent('li').find('> .nav-section').outerHeight();
					
					navComponents.activate($(this), e, navHeight);
					navComponents.adjustHeight($(this), navHeight);
					$(this).parents('.nav-section').find('.back-button span').addClass('active');
				}
			  });

			  // Navigation child section back button
			  navBackBtn.on('click', 'span', function (e) {
				var navSectionFirst = $('.parent.active > .nav-section');
				$('.parent.active > .nav-section').last().parent('.parent.active').removeClass('active');
				navComponents.adjustHeight($(this), "auto");
				var navSectionSecond = $('.parent.active > .nav-section');
				console.log(navSectionSecond[navSectionSecond.length - 1]);
				var navHeight = navSectionSecond.last().outerHeight();
				
				navComponents.adjustHeight($(this), navHeight);

				// Check to see user outside the first level of menus
				if (navSectionFirst.length > 1) {

				  // Remove arrow from back button
				  if (navSectionFirst.length == 2) {
					$(this).removeClass('active');
				  }
				}
			  });
			}
		},
		activate: function activate($this, e, navHeight) {
		  e.preventDefault();
		  e.stopPropagation();
		  $this.parent('li').addClass('active');
		},
		adjustHeight: function adjustHeight($this, navHeight) {
		  if (!mobileScreen) {
			//$this.parents('.primary-level > .nav-section').css("height", navHeight);
			$this.parents('.primary-level').find('.nav-section').first().css("height", navHeight);
		  }
		},
		disableScroll: function disableScroll() {
		  $('html').toggleClass('no-scroll');
		},
		mobileActive: function mobileActive() {
		  $('nav#main-menu').toggleClass('active');

		  // Setup mobile scroll to parent menu when use opens navigation
		  if ($('.primary-level.active').length > 0) {
			var activeMenu = $('.primary-level.active');
			var activeMenuTop = activeMenu.position().top;
			localStorage.setItem('menuTopPosition', activeMenuTop);

			$('#main-menu').animate({
			  scrollTop: localStorage.getItem('menuTopPosition')
			}, '200');
		  }
		},
		mobileSearch: function mobileSearch() {
		  $('.mobile-search').toggleClass('active');
		}
	  };
	})(jQuery);
  // Define your library strictly...
})();

window.addEventListener("resize", function(e) {
	windowWidth = $(window).width();
	mobilMenuOffset = $('.header').outerHeight();
	// console.log("height: "+mobilMenuOffset);
	$(".main-menu-contain .logo-bar").hide();
	if(windowWidth<=mobileBreakpoint){
		isMobile = true;
		menufixed = false;
		$(".main-menu-contain").removeClass('active');
	}else{
		isMobile = false;
		if(menufixed && windowWidth > (tabletBreakpoint-150)){
			$(".main-menu-contain .logo-bar").show();
		}
	}
});

var menufixed = false;
window.addEventListener("scroll", function(e) {
	if(windowWidth>mobileBreakpoint){
		var headerheight = $(".header").outerHeight();
		var top  = window.pageYOffset || document.documentElement.scrollTop;
		if(menufixed && top < headerheight){
			menufixed = false;
			$(".main-menu-contain").removeClass('active');
			$(".main-menu-contain .logo-bar").fadeOut(300);
		}else if(!menufixed && top > headerheight){
			menufixed = true;
			$(".main-menu-contain").addClass('active');
			if(windowWidth > (tabletBreakpoint-150)){
				$(".main-menu-contain .logo-bar").fadeIn(800);
			}
		}
	}
});

window.addEventListener("orientationchange", function() {
	var mvp = document.getElementById('viewport');
    if((window.orientation == 0 || window.orientation == 180) && screen.width < mobileBreakpoint){
		//mvp.setAttribute('content','width=750, user-scalable=no');
	}else{
		//mvp.setAttribute('width=device-width, minimum-scale=1.0, user-scalable=no');
	}
}, false);



/*************** 
	FUNCTIONS
***************/
function isMobileDevice() {
	"use strict";
	try {
		if(/Android|webOS|iPhone|iPad|iPod|pocket|psp|kindle|avantgo|blazer|midori|Tablet|Palm|maemo|plucker|phone|BlackBerry|symbian|IEMobile|mobile|ZuneWP7|Windows Phone|Opera Mini/i.test(navigator.userAgent)) {
			return true;
		}
		return false;
	}
	catch(e){ console.log("Error in isMobile"); 
		return false; 
	}
}

function getUrlParameter(sParam){
	"use strict";
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++)
    {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] === sParam)
        {
            return sParameterName[1];
        }
    }
}
/* Image Picker
 by Rodrigo Vera

 Version 0.3.1
 Full source at https://github.com/rvera/image-picker
 MIT License, https://github.com/rvera/image-picker/blob/master/LICENSE
 Image Picker
 by Rodrigo Vera

 Version 0.3.0
 Full source at https://github.com/rvera/image-picker
 MIT License, https://github.com/rvera/image-picker/blob/master/LICENSE
*/
(function(){var ImagePicker,ImagePickerOption,both_array_are_equal,sanitized_options,bind=function(fn,me){return function(){return fn.apply(me,arguments)}},indexOf=[].indexOf||function(item){for(var i=0,l=this.length;i<l;i++){if(i in this&&this[i]===item)return i}return-1};jQuery.fn.extend({imagepicker:function(opts){if(opts==null){opts={}}return this.each(function(){var select;select=jQuery(this);if(select.data("picker")){select.data("picker").destroy()}select.data("picker",new ImagePicker(this,sanitized_options(opts)));if(opts.initialized!=null){return opts.initialized.call(select.data("picker"))}})}});sanitized_options=function(opts){var default_options;default_options={hide_select:true,show_label:false,initialized:void 0,changed:void 0,clicked:void 0,selected:void 0,limit:void 0,limit_reached:void 0,font_awesome:false};return jQuery.extend(default_options,opts)};both_array_are_equal=function(a,b){var i,j,len,x;if(!a||!b||a.length!==b.length){return false}a=a.slice(0);b=b.slice(0);a.sort();b.sort();for(i=j=0,len=a.length;j<len;i=++j){x=a[i];if(b[i]!==x){return false}}return true};ImagePicker=function(){function ImagePicker(select_element,opts1){this.opts=opts1!=null?opts1:{};this.sync_picker_with_select=bind(this.sync_picker_with_select,this);this.select=jQuery(select_element);this.multiple=this.select.attr("multiple")==="multiple";if(this.select.data("limit")!=null){this.opts.limit=parseInt(this.select.data("limit"))}this.build_and_append_picker()}ImagePicker.prototype.destroy=function(){var j,len,option,ref;ref=this.picker_options;for(j=0,len=ref.length;j<len;j++){option=ref[j];option.destroy()}this.picker.remove();this.select.off("change",this.sync_picker_with_select);this.select.removeData("picker");return this.select.show()};ImagePicker.prototype.build_and_append_picker=function(){if(this.opts.hide_select){this.select.hide()}this.select.on("change",this.sync_picker_with_select);if(this.picker!=null){this.picker.remove()}this.create_picker();this.select.after(this.picker);return this.sync_picker_with_select()};ImagePicker.prototype.sync_picker_with_select=function(){var j,len,option,ref,results;ref=this.picker_options;results=[];for(j=0,len=ref.length;j<len;j++){option=ref[j];if(option.is_selected()){results.push(option.mark_as_selected())}else{results.push(option.unmark_as_selected())}}return results};ImagePicker.prototype.create_picker=function(){this.picker=jQuery("<ul class='thumbnails image_picker_selector'></ul>");this.picker_options=[];this.recursively_parse_option_groups(this.select,this.picker);return this.picker};ImagePicker.prototype.recursively_parse_option_groups=function(scoped_dom,target_container){var container,j,k,len,len1,option,option_group,ref,ref1,results;ref=scoped_dom.children("optgroup");for(j=0,len=ref.length;j<len;j++){option_group=ref[j];option_group=jQuery(option_group);container=jQuery("<ul></ul>");container.append(jQuery("<li class='group_title'>"+option_group.attr("label")+"</li>"));target_container.append(jQuery("<li class='group'>").append(container));this.recursively_parse_option_groups(option_group,container)}ref1=function(){var l,len1,ref1,results1;ref1=scoped_dom.children("option");results1=[];for(l=0,len1=ref1.length;l<len1;l++){option=ref1[l];results1.push(new ImagePickerOption(option,this,this.opts))}return results1}.call(this);results=[];for(k=0,len1=ref1.length;k<len1;k++){option=ref1[k];this.picker_options.push(option);if(!option.has_image()){continue}results.push(target_container.append(option.node))}return results};ImagePicker.prototype.has_implicit_blanks=function(){var option;return function(){var j,len,ref,results;ref=this.picker_options;results=[];for(j=0,len=ref.length;j<len;j++){option=ref[j];if(option.is_blank()&&!option.has_image()){results.push(option)}}return results}.call(this).length>0};ImagePicker.prototype.selected_values=function(){if(this.multiple){return this.select.val()||[]}else{return[this.select.val()]}};ImagePicker.prototype.toggle=function(imagepicker_option,original_event){var new_values,old_values,selected_value;old_values=this.selected_values();selected_value=imagepicker_option.value().toString();if(this.multiple){if(indexOf.call(this.selected_values(),selected_value)>=0){new_values=this.selected_values();new_values.splice(jQuery.inArray(selected_value,old_values),1);this.select.val([]);this.select.val(new_values)}else{if(this.opts.limit!=null&&this.selected_values().length>=this.opts.limit){if(this.opts.limit_reached!=null){this.opts.limit_reached.call(this.select)}}else{this.select.val(this.selected_values().concat(selected_value))}}}else{if(this.has_implicit_blanks()&&imagepicker_option.is_selected()){this.select.val("")}else{this.select.val(selected_value)}}if(!both_array_are_equal(old_values,this.selected_values())){this.select.change();if(this.opts.changed!=null){return this.opts.changed.call(this.select,old_values,this.selected_values(),original_event)}}};return ImagePicker}();ImagePickerOption=function(){function ImagePickerOption(option_element,picker,opts1){this.picker=picker;this.opts=opts1!=null?opts1:{};this.clicked=bind(this.clicked,this);this.option=jQuery(option_element);this.create_node()}ImagePickerOption.prototype.destroy=function(){return this.node.find(".thumbnail").off("click",this.clicked)};ImagePickerOption.prototype.has_image=function(){return this.option.data("img-src")!=null};ImagePickerOption.prototype.is_blank=function(){return!(this.value()!=null&&this.value()!=="")};ImagePickerOption.prototype.is_selected=function(){var select_value;select_value=this.picker.select.val();if(this.picker.multiple){return jQuery.inArray(this.value(),select_value)>=0}else{return this.value()===select_value}};ImagePickerOption.prototype.mark_as_selected=function(){return this.node.find(".thumbnail").addClass("selected")};ImagePickerOption.prototype.unmark_as_selected=function(){return this.node.find(".thumbnail").removeClass("selected")};ImagePickerOption.prototype.value=function(){return this.option.val()};ImagePickerOption.prototype.label=function(){if(this.option.data("img-label")){return this.option.data("img-label")}else{return this.option.text()}};ImagePickerOption.prototype.clicked=function(event){this.picker.toggle(this,event);if(this.opts.clicked!=null){this.opts.clicked.call(this.picker.select,this,event)}if(this.opts.selected!=null&&this.is_selected()){return this.opts.selected.call(this.picker.select,this,event)}};ImagePickerOption.prototype.create_node=function(){var image,imgAlt,imgClass,thumbnail;this.node=jQuery("<li/>");if(this.option.data("font_awesome")){image=jQuery("<i>");image.attr("class","fa-fw "+this.option.data("img-src"))}else{image=jQuery("<img class='image_picker_image'/>");image.attr("src",this.option.data("img-src"))}thumbnail=jQuery("<div class='thumbnail'>");imgClass=this.option.data("img-class");if(imgClass){this.node.addClass(imgClass);image.addClass(imgClass);thumbnail.addClass(imgClass)}imgAlt=this.option.data("img-alt");if(imgAlt){image.attr("alt",imgAlt)}thumbnail.on("click",this.clicked);thumbnail.append(image);if(this.opts.show_label){thumbnail.append(jQuery("<p/>").html(this.label()))}this.node.append(thumbnail);return this.node};return ImagePickerOption}()}).call(this);
/*--rotators--*/
    /*
     _ _      _       _
 ___| (_) ___| | __  (_)___
/ __| | |/ __| |/ /  | / __|
\__ \ | | (__|   < _ | \__ \
|___/_|_|\___|_|\_(_)/ |___/
                   |__/

 Version: 1.5.9
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues

 */
/* global window, document, define, jQuery, setInterval, clearInterval */
(function(factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else if (typeof exports !== 'undefined') {
        module.exports = factory(require('jquery'));
    } else {
        factory(jQuery);
    }

}(function($) {
    'use strict';
    var Slick = window.Slick || {};

    Slick = (function() {

        var instanceUid = 0;

        function Slick(element, settings) {

            var _ = this, dataSettings;

            _.defaults = {
                accessibility: true,
                adaptiveHeight: false,
                appendArrows: $(element),
                appendDots: $(element),
                arrows: true,
                asNavFor: null,
                prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
                nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
                autoplay: false,
                autoplaySpeed: 3000,
                centerMode: false,
                centerPadding: '50px',
                cssEase: 'ease',
                customPaging: function(slider, i) {
                    return '<button type="button" data-role="none" role="button" aria-required="false" tabindex="0">' + (i + 1) + '</button>';
                },
                dots: false,
                dotsClass: 'slick-dots',
                draggable: true,
                easing: 'linear',
                edgeFriction: 0.35,
                fade: false,
                focusOnSelect: false,
                infinite: true,
                initialSlide: 0,
                lazyLoad: 'ondemand',
                mobileFirst: false,
                pauseOnHover: true,
                pauseOnDotsHover: false,
                respondTo: 'window',
                responsive: null,
                rows: 1,
                rtl: false,
                slide: '',
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: true,
                swipeToSlide: false,
                touchMove: true,
                touchThreshold: 5,
                useCSS: true,
                useTransform: false,
                variableWidth: false,
                vertical: false,
                verticalSwiping: false,
                waitForAnimate: true,
                zIndex: 1000
            };

            _.initials = {
                animating: false,
                dragging: false,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: false,
                slideOffset: 0,
                swipeLeft: null,
                $list: null,
                touchObject: {},
                transformsEnabled: false,
                unslicked: false
            };

            $.extend(_, _.initials);

            _.activeBreakpoint = null;
            _.animType = null;
            _.animProp = null;
            _.breakpoints = [];
            _.breakpointSettings = [];
            _.cssTransitions = false;
            _.hidden = 'hidden';
            _.paused = false;
            _.positionProp = null;
            _.respondTo = null;
            _.rowCount = 1;
            _.shouldClick = true;
            _.$slider = $(element);
            _.$slidesCache = null;
            _.transformType = null;
            _.transitionType = null;
            _.visibilityChange = 'visibilitychange';
            _.windowWidth = 0;
            _.windowTimer = null;

            dataSettings = $(element).data('slick') || {};

            _.options = $.extend({}, _.defaults, dataSettings, settings);

            _.currentSlide = _.options.initialSlide;

            _.originalSettings = _.options;

            if (typeof document.mozHidden !== 'undefined') {
                _.hidden = 'mozHidden';
                _.visibilityChange = 'mozvisibilitychange';
            } else if (typeof document.webkitHidden !== 'undefined') {
                _.hidden = 'webkitHidden';
                _.visibilityChange = 'webkitvisibilitychange';
            }

            _.autoPlay = $.proxy(_.autoPlay, _);
            _.autoPlayClear = $.proxy(_.autoPlayClear, _);
            _.changeSlide = $.proxy(_.changeSlide, _);
            _.clickHandler = $.proxy(_.clickHandler, _);
            _.selectHandler = $.proxy(_.selectHandler, _);
            _.setPosition = $.proxy(_.setPosition, _);
            _.swipeHandler = $.proxy(_.swipeHandler, _);
            _.dragHandler = $.proxy(_.dragHandler, _);
            _.keyHandler = $.proxy(_.keyHandler, _);
            _.autoPlayIterator = $.proxy(_.autoPlayIterator, _);

            _.instanceUid = instanceUid++;

            // A simple way to check for HTML strings
            // Strict HTML recognition (must start with <)
            // Extracted from jQuery v1.11 source
            _.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/;


            _.registerBreakpoints();
            _.init(true);
            _.checkResponsive(true);

        }

        return Slick;

    }());

    Slick.prototype.addSlide = Slick.prototype.slickAdd = function(markup, index, addBefore) {

        var _ = this;

        if (typeof(index) === 'boolean') {
            addBefore = index;
            index = null;
        } else if (index < 0 || (index >= _.slideCount)) {
            return false;
        }

        _.unload();

        if (typeof(index) === 'number') {
            if (index === 0 && _.$slides.length === 0) {
                $(markup).appendTo(_.$slideTrack);
            } else if (addBefore) {
                $(markup).insertBefore(_.$slides.eq(index));
            } else {
                $(markup).insertAfter(_.$slides.eq(index));
            }
        } else {
            if (addBefore === true) {
                $(markup).prependTo(_.$slideTrack);
            } else {
                $(markup).appendTo(_.$slideTrack);
            }
        }

        _.$slides = _.$slideTrack.children(this.options.slide);

        _.$slideTrack.children(this.options.slide).detach();

        _.$slideTrack.append(_.$slides);

        _.$slides.each(function(index, element) {
            $(element).attr('data-slick-index', index);
        });

        _.$slidesCache = _.$slides;

        _.reinit();

    };

    Slick.prototype.animateHeight = function() {
        var _ = this;
        if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
            var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
            _.$list.animate({
                height: targetHeight
            }, _.options.speed);
        }
    };

    Slick.prototype.animateSlide = function(targetLeft, callback) {

        var animProps = {},
            _ = this;

        _.animateHeight();

        if (_.options.rtl === true && _.options.vertical === false) {
            targetLeft = -targetLeft;
        }
        if (_.transformsEnabled === false) {
            if (_.options.vertical === false) {
                _.$slideTrack.animate({
                    left: targetLeft
                }, _.options.speed, _.options.easing, callback);
            } else {
                _.$slideTrack.animate({
                    top: targetLeft
                }, _.options.speed, _.options.easing, callback);
            }

        } else {

            if (_.cssTransitions === false) {
                if (_.options.rtl === true) {
                    _.currentLeft = -(_.currentLeft);
                }
                $({
                    animStart: _.currentLeft
                }).animate({
                    animStart: targetLeft
                }, {
                    duration: _.options.speed,
                    easing: _.options.easing,
                    step: function(now) {
                        now = Math.ceil(now);
                        if (_.options.vertical === false) {
                            animProps[_.animType] = 'translate(' +
                                now + 'px, 0px)';
                            _.$slideTrack.css(animProps);
                        } else {
                            animProps[_.animType] = 'translate(0px,' +
                                now + 'px)';
                            _.$slideTrack.css(animProps);
                        }
                    },
                    complete: function() {
                        if (callback) {
                            callback.call();
                        }
                    }
                });

            } else {

                _.applyTransition();
                targetLeft = Math.ceil(targetLeft);

                if (_.options.vertical === false) {
                    animProps[_.animType] = 'translate3d(' + targetLeft + 'px, 0px, 0px)';
                } else {
                    animProps[_.animType] = 'translate3d(0px,' + targetLeft + 'px, 0px)';
                }
                _.$slideTrack.css(animProps);

                if (callback) {
                    setTimeout(function() {

                        _.disableTransition();

                        callback.call();
                    }, _.options.speed);
                }

            }

        }

    };

    Slick.prototype.asNavFor = function(index) {

        var _ = this,
            asNavFor = _.options.asNavFor;

        if ( asNavFor && asNavFor !== null ) {
            asNavFor = $(asNavFor).not(_.$slider);
        }

        if ( asNavFor !== null && typeof asNavFor === 'object' ) {
            asNavFor.each(function() {
                var target = $(this).slick('getSlick');
                if(!target.unslicked) {
                    target.slideHandler(index, true);
                }
            });
        }

    };

    Slick.prototype.applyTransition = function(slide) {

        var _ = this,
            transition = {};

        if (_.options.fade === false) {
            transition[_.transitionType] = _.transformType + ' ' + _.options.speed + 'ms ' + _.options.cssEase;
        } else {
            transition[_.transitionType] = 'opacity ' + _.options.speed + 'ms ' + _.options.cssEase;
        }

        if (_.options.fade === false) {
            _.$slideTrack.css(transition);
        } else {
            _.$slides.eq(slide).css(transition);
        }

    };

    Slick.prototype.autoPlay = function() {

        var _ = this;

        if (_.autoPlayTimer) {
            clearInterval(_.autoPlayTimer);
        }

        if (_.slideCount > _.options.slidesToShow && _.paused !== true) {
            _.autoPlayTimer = setInterval(_.autoPlayIterator,
                _.options.autoplaySpeed);
        }

    };

    Slick.prototype.autoPlayClear = function() {

        var _ = this;
        if (_.autoPlayTimer) {
            clearInterval(_.autoPlayTimer);
        }

    };

    Slick.prototype.autoPlayIterator = function() {

        var _ = this;

        if (_.options.infinite === false) {

            if (_.direction === 1) {

                if ((_.currentSlide + 1) === _.slideCount -
                    1) {
                    _.direction = 0;
                }

                _.slideHandler(_.currentSlide + _.options.slidesToScroll);

            } else {

                if ((_.currentSlide - 1 === 0)) {

                    _.direction = 1;

                }

                _.slideHandler(_.currentSlide - _.options.slidesToScroll);

            }

        } else {

            _.slideHandler(_.currentSlide + _.options.slidesToScroll);

        }

    };

    Slick.prototype.buildArrows = function() {

        var _ = this;

        if (_.options.arrows === true ) {

            _.$prevArrow = $(_.options.prevArrow).addClass('slick-arrow');
            _.$nextArrow = $(_.options.nextArrow).addClass('slick-arrow');

            if( _.slideCount > _.options.slidesToShow ) {

                _.$prevArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');
                _.$nextArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');

                if (_.htmlExpr.test(_.options.prevArrow)) {
                    _.$prevArrow.prependTo(_.options.appendArrows);
                }

                if (_.htmlExpr.test(_.options.nextArrow)) {
                    _.$nextArrow.appendTo(_.options.appendArrows);
                }

                if (_.options.infinite !== true) {
                    _.$prevArrow
                        .addClass('slick-disabled')
                        .attr('aria-disabled', 'true');
                }

            } else {

                _.$prevArrow.add( _.$nextArrow )

                    .addClass('slick-hidden')
                    .attr({
                        'aria-disabled': 'true',
                        'tabindex': '-1'
                    });

            }

        }

    };

    Slick.prototype.buildDots = function() {

        var _ = this,
            i, dotString;

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            dotString = '<ul class="' + _.options.dotsClass + '">';

            for (i = 0; i <= _.getDotCount(); i += 1) {
                dotString += '<li>' + _.options.customPaging.call(this, _, i) + '</li>';
            }

            dotString += '</ul>';

            _.$dots = $(dotString).appendTo(
                _.options.appendDots);

            _.$dots.find('li').first().addClass('slick-active').attr('aria-hidden', 'false');

        }

    };

    Slick.prototype.buildOut = function() {

        var _ = this;

        _.$slides =
            _.$slider
                .children( _.options.slide + ':not(.slick-cloned)')
                .addClass('slick-slide');

        _.slideCount = _.$slides.length;

        _.$slides.each(function(index, element) {
            $(element)
                .attr('data-slick-index', index)
                .data('originalStyling', $(element).attr('style') || '');
        });

        _.$slider.addClass('slick-slider');

        _.$slideTrack = (_.slideCount === 0) ?
            $('<div class="slick-track"/>').appendTo(_.$slider) :
            _.$slides.wrapAll('<div class="slick-track"/>').parent();

        _.$list = _.$slideTrack.wrap(
            '<div aria-live="polite" class="slick-list"/>').parent();
        _.$slideTrack.css('opacity', 0);

        if (_.options.centerMode === true || _.options.swipeToSlide === true) {
            _.options.slidesToScroll = 1;
        }

        $('img[data-lazy]', _.$slider).not('[src]').addClass('slick-loading');

        _.setupInfinite();

        _.buildArrows();

        _.buildDots();

        _.updateDots();


        _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);

        if (_.options.draggable === true) {
            _.$list.addClass('draggable');
        }

    };

    Slick.prototype.buildRows = function() {

        var _ = this, a, b, c, newSlides, numOfSlides, originalSlides,slidesPerSection;

        newSlides = document.createDocumentFragment();
        originalSlides = _.$slider.children();

        if(_.options.rows > 1) {

            slidesPerSection = _.options.slidesPerRow * _.options.rows;
            numOfSlides = Math.ceil(
                originalSlides.length / slidesPerSection
            );

            for(a = 0; a < numOfSlides; a++){
                var slide = document.createElement('div');
                for(b = 0; b < _.options.rows; b++) {
                    var row = document.createElement('div');
                    for(c = 0; c < _.options.slidesPerRow; c++) {
                        var target = (a * slidesPerSection + ((b * _.options.slidesPerRow) + c));
                        if (originalSlides.get(target)) {
                            row.appendChild(originalSlides.get(target));
                        }
                    }
                    slide.appendChild(row);
                }
                newSlides.appendChild(slide);
            }

            _.$slider.html(newSlides);
            _.$slider.children().children().children()
                .css({
                    'width':(100 / _.options.slidesPerRow) + '%',
                    'display': 'inline-block'
                });

        }

    };

    Slick.prototype.checkResponsive = function(initial, forceUpdate) {

        var _ = this,
            breakpoint, targetBreakpoint, respondToWidth, triggerBreakpoint = false;
        var sliderWidth = _.$slider.width();
        var windowWidth = window.innerWidth || $(window).width();

        if (_.respondTo === 'window') {
            respondToWidth = windowWidth;
        } else if (_.respondTo === 'slider') {
            respondToWidth = sliderWidth;
        } else if (_.respondTo === 'min') {
            respondToWidth = Math.min(windowWidth, sliderWidth);
        }

        if ( _.options.responsive &&
            _.options.responsive.length &&
            _.options.responsive !== null) {

            targetBreakpoint = null;

            for (breakpoint in _.breakpoints) {
                if (_.breakpoints.hasOwnProperty(breakpoint)) {
                    if (_.originalSettings.mobileFirst === false) {
                        if (respondToWidth < _.breakpoints[breakpoint]) {
                            targetBreakpoint = _.breakpoints[breakpoint];
                        }
                    } else {
                        if (respondToWidth > _.breakpoints[breakpoint]) {
                            targetBreakpoint = _.breakpoints[breakpoint];
                        }
                    }
                }
            }

            if (targetBreakpoint !== null) {
                if (_.activeBreakpoint !== null) {
                    if (targetBreakpoint !== _.activeBreakpoint || forceUpdate) {
                        _.activeBreakpoint =
                            targetBreakpoint;
                        if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
                            _.unslick(targetBreakpoint);
                        } else {
                            _.options = $.extend({}, _.originalSettings,
                                _.breakpointSettings[
                                    targetBreakpoint]);
                            if (initial === true) {
                                _.currentSlide = _.options.initialSlide;
                            }
                            _.refresh(initial);
                        }
                        triggerBreakpoint = targetBreakpoint;
                    }
                } else {
                    _.activeBreakpoint = targetBreakpoint;
                    if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
                        _.unslick(targetBreakpoint);
                    } else {
                        _.options = $.extend({}, _.originalSettings,
                            _.breakpointSettings[
                                targetBreakpoint]);
                        if (initial === true) {
                            _.currentSlide = _.options.initialSlide;
                        }
                        _.refresh(initial);
                    }
                    triggerBreakpoint = targetBreakpoint;
                }
            } else {
                if (_.activeBreakpoint !== null) {
                    _.activeBreakpoint = null;
                    _.options = _.originalSettings;
                    if (initial === true) {
                        _.currentSlide = _.options.initialSlide;
                    }
                    _.refresh(initial);
                    triggerBreakpoint = targetBreakpoint;
                }
            }

            // only trigger breakpoints during an actual break. not on initialize.
            if( !initial && triggerBreakpoint !== false ) {
                _.$slider.trigger('breakpoint', [_, triggerBreakpoint]);
            }
        }

    };

    Slick.prototype.changeSlide = function(event, dontAnimate) {

        var _ = this,
            $target = $(event.target),
            indexOffset, slideOffset, unevenOffset;

        // If target is a link, prevent default action.
        if($target.is('a')) {
            event.preventDefault();
        }

        // If target is not the <li> element (ie: a child), find the <li>.
        if(!$target.is('li')) {
            $target = $target.closest('li');
        }

        unevenOffset = (_.slideCount % _.options.slidesToScroll !== 0);
        indexOffset = unevenOffset ? 0 : (_.slideCount - _.currentSlide) % _.options.slidesToScroll;

        switch (event.data.message) {

            case 'previous':
                slideOffset = indexOffset === 0 ? _.options.slidesToScroll : _.options.slidesToShow - indexOffset;
                if (_.slideCount > _.options.slidesToShow) {
                    _.slideHandler(_.currentSlide - slideOffset, false, dontAnimate);
                }
                break;

            case 'next':
                slideOffset = indexOffset === 0 ? _.options.slidesToScroll : indexOffset;
                if (_.slideCount > _.options.slidesToShow) {
                    _.slideHandler(_.currentSlide + slideOffset, false, dontAnimate);
                }
                break;

            case 'index':
                var index = event.data.index === 0 ? 0 :
                    event.data.index || $target.index() * _.options.slidesToScroll;

                _.slideHandler(_.checkNavigable(index), false, dontAnimate);
                $target.children().trigger('focus');
                break;

            default:
                return;
        }

    };

    Slick.prototype.checkNavigable = function(index) {

        var _ = this,
            navigables, prevNavigable;

        navigables = _.getNavigableIndexes();
        prevNavigable = 0;
        if (index > navigables[navigables.length - 1]) {
            index = navigables[navigables.length - 1];
        } else {
            for (var n in navigables) {
                if (index < navigables[n]) {
                    index = prevNavigable;
                    break;
                }
                prevNavigable = navigables[n];
            }
        }

        return index;
    };

    Slick.prototype.cleanUpEvents = function() {

        var _ = this;

        if (_.options.dots && _.$dots !== null) {

            $('li', _.$dots).off('click.slick', _.changeSlide);

            if (_.options.pauseOnDotsHover === true && _.options.autoplay === true) {

                $('li', _.$dots)
                    .off('mouseenter.slick', $.proxy(_.setPaused, _, true))
                    .off('mouseleave.slick', $.proxy(_.setPaused, _, false));

            }

        }

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
            _.$prevArrow && _.$prevArrow.off('click.slick', _.changeSlide);
            _.$nextArrow && _.$nextArrow.off('click.slick', _.changeSlide);
        }

        _.$list.off('touchstart.slick mousedown.slick', _.swipeHandler);
        _.$list.off('touchmove.slick mousemove.slick', _.swipeHandler);
        _.$list.off('touchend.slick mouseup.slick', _.swipeHandler);
        _.$list.off('touchcancel.slick mouseleave.slick', _.swipeHandler);

        _.$list.off('click.slick', _.clickHandler);

        $(document).off(_.visibilityChange, _.visibility);

        _.$list.off('mouseenter.slick', $.proxy(_.setPaused, _, true));
        _.$list.off('mouseleave.slick', $.proxy(_.setPaused, _, false));

        if (_.options.accessibility === true) {
            _.$list.off('keydown.slick', _.keyHandler);
        }

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().off('click.slick', _.selectHandler);
        }

        $(window).off('orientationchange.slick.slick-' + _.instanceUid, _.orientationChange);

        $(window).off('resize.slick.slick-' + _.instanceUid, _.resize);

        $('[draggable!=true]', _.$slideTrack).off('dragstart', _.preventDefault);

        $(window).off('load.slick.slick-' + _.instanceUid, _.setPosition);
        $(document).off('ready.slick.slick-' + _.instanceUid, _.setPosition);
    };

    Slick.prototype.cleanUpRows = function() {

        var _ = this, originalSlides;

        if(_.options.rows > 1) {
            originalSlides = _.$slides.children().children();
            originalSlides.removeAttr('style');
            _.$slider.html(originalSlides);
        }

    };

    Slick.prototype.clickHandler = function(event) {

        var _ = this;

        if (_.shouldClick === false) {
            event.stopImmediatePropagation();
            event.stopPropagation();
            event.preventDefault();
        }

    };

    Slick.prototype.destroy = function(refresh) {

        var _ = this;

        _.autoPlayClear();

        _.touchObject = {};

        _.cleanUpEvents();

        $('.slick-cloned', _.$slider).detach();

        if (_.$dots) {
            _.$dots.remove();
        }


        if ( _.$prevArrow && _.$prevArrow.length ) {

            _.$prevArrow
                .removeClass('slick-disabled slick-arrow slick-hidden')
                .removeAttr('aria-hidden aria-disabled tabindex')
                .css("display","");

            if ( _.htmlExpr.test( _.options.prevArrow )) {
                _.$prevArrow.remove();
            }
        }

        if ( _.$nextArrow && _.$nextArrow.length ) {

            _.$nextArrow
                .removeClass('slick-disabled slick-arrow slick-hidden')
                .removeAttr('aria-hidden aria-disabled tabindex')
                .css("display","");

            if ( _.htmlExpr.test( _.options.nextArrow )) {
                _.$nextArrow.remove();
            }

        }


        if (_.$slides) {

            _.$slides
                .removeClass('slick-slide slick-active slick-center slick-visible slick-current')
                .removeAttr('aria-hidden')
                .removeAttr('data-slick-index')
                .each(function(){
                    $(this).attr('style', $(this).data('originalStyling'));
                });

            _.$slideTrack.children(this.options.slide).detach();

            _.$slideTrack.detach();

            _.$list.detach();

            _.$slider.append(_.$slides);
        }

        _.cleanUpRows();

        _.$slider.removeClass('slick-slider');
        _.$slider.removeClass('slick-initialized');

        _.unslicked = true;

        if(!refresh) {
            _.$slider.trigger('destroy', [_]);
        }

    };

    Slick.prototype.disableTransition = function(slide) {

        var _ = this,
            transition = {};

        transition[_.transitionType] = '';

        if (_.options.fade === false) {
            _.$slideTrack.css(transition);
        } else {
            _.$slides.eq(slide).css(transition);
        }

    };

    Slick.prototype.fadeSlide = function(slideIndex, callback) {

        var _ = this;

        if (_.cssTransitions === false) {

            _.$slides.eq(slideIndex).css({
                zIndex: _.options.zIndex
            });

            _.$slides.eq(slideIndex).animate({
                opacity: 1
            }, _.options.speed, _.options.easing, callback);

        } else {

            _.applyTransition(slideIndex);

            _.$slides.eq(slideIndex).css({
                opacity: 1,
                zIndex: _.options.zIndex
            });

            if (callback) {
                setTimeout(function() {

                    _.disableTransition(slideIndex);

                    callback.call();
                }, _.options.speed);
            }

        }

    };

    Slick.prototype.fadeSlideOut = function(slideIndex) {

        var _ = this;

        if (_.cssTransitions === false) {

            _.$slides.eq(slideIndex).animate({
                opacity: 0,
                zIndex: _.options.zIndex - 2
            }, _.options.speed, _.options.easing);

        } else {

            _.applyTransition(slideIndex);

            _.$slides.eq(slideIndex).css({
                opacity: 0,
                zIndex: _.options.zIndex - 2
            });

        }

    };

    Slick.prototype.filterSlides = Slick.prototype.slickFilter = function(filter) {

        var _ = this;

        if (filter !== null) {

            _.$slidesCache = _.$slides;

            _.unload();

            _.$slideTrack.children(this.options.slide).detach();

            _.$slidesCache.filter(filter).appendTo(_.$slideTrack);

            _.reinit();

        }

    };

    Slick.prototype.getCurrent = Slick.prototype.slickCurrentSlide = function() {

        var _ = this;
        return _.currentSlide;

    };

    Slick.prototype.getDotCount = function() {

        var _ = this;

        var breakPoint = 0;
        var counter = 0;
        var pagerQty = 0;

        if (_.options.infinite === true) {
            while (breakPoint < _.slideCount) {
                ++pagerQty;
                breakPoint = counter + _.options.slidesToScroll;
                counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
            }
        } else if (_.options.centerMode === true) {
            pagerQty = _.slideCount;
        } else {
            while (breakPoint < _.slideCount) {
                ++pagerQty;
                breakPoint = counter + _.options.slidesToScroll;
                counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
            }
        }

        return pagerQty - 1;

    };

    Slick.prototype.getLeft = function(slideIndex) {

        var _ = this,
            targetLeft,
            verticalHeight,
            verticalOffset = 0,
            targetSlide;

        _.slideOffset = 0;
        verticalHeight = _.$slides.first().outerHeight(true);

        if (_.options.infinite === true) {
            if (_.slideCount > _.options.slidesToShow) {
                _.slideOffset = (_.slideWidth * _.options.slidesToShow) * -1;
                verticalOffset = (verticalHeight * _.options.slidesToShow) * -1;
            }
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                if (slideIndex + _.options.slidesToScroll > _.slideCount && _.slideCount > _.options.slidesToShow) {
                    if (slideIndex > _.slideCount) {
                        _.slideOffset = ((_.options.slidesToShow - (slideIndex - _.slideCount)) * _.slideWidth) * -1;
                        verticalOffset = ((_.options.slidesToShow - (slideIndex - _.slideCount)) * verticalHeight) * -1;
                    } else {
                        _.slideOffset = ((_.slideCount % _.options.slidesToScroll) * _.slideWidth) * -1;
                        verticalOffset = ((_.slideCount % _.options.slidesToScroll) * verticalHeight) * -1;
                    }
                }
            }
        } else {
            if (slideIndex + _.options.slidesToShow > _.slideCount) {
                _.slideOffset = ((slideIndex + _.options.slidesToShow) - _.slideCount) * _.slideWidth;
                verticalOffset = ((slideIndex + _.options.slidesToShow) - _.slideCount) * verticalHeight;
            }
        }

        if (_.slideCount <= _.options.slidesToShow) {
            _.slideOffset = 0;
            verticalOffset = 0;
        }

        if (_.options.centerMode === true && _.options.infinite === true) {
            _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2) - _.slideWidth;
        } else if (_.options.centerMode === true) {
            _.slideOffset = 0;
            _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2);
        }

        if (_.options.vertical === false) {
            targetLeft = ((slideIndex * _.slideWidth) * -1) + _.slideOffset;
        } else {
            targetLeft = ((slideIndex * verticalHeight) * -1) + verticalOffset;
        }

        if (_.options.variableWidth === true) {

            if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
                targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
            } else {
                targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow);
            }

            if (_.options.rtl === true) {
                if (targetSlide[0]) {
                    targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
                } else {
                    targetLeft =  0;
                }
            } else {
                targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
            }

            if (_.options.centerMode === true) {
                if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
                    targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
                } else {
                    targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow + 1);
                }

                if (_.options.rtl === true) {
                    if (targetSlide[0]) {
                        targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
                    } else {
                        targetLeft =  0;
                    }
                } else {
                    targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
                }

                targetLeft += (_.$list.width() - targetSlide.outerWidth()) / 2;
            }
        }

        return targetLeft;

    };

    Slick.prototype.getOption = Slick.prototype.slickGetOption = function(option) {

        var _ = this;

        return _.options[option];

    };

    Slick.prototype.getNavigableIndexes = function() {

        var _ = this,
            breakPoint = 0,
            counter = 0,
            indexes = [],
            max;

        if (_.options.infinite === false) {
            max = _.slideCount;
        } else {
            breakPoint = _.options.slidesToScroll * -1;
            counter = _.options.slidesToScroll * -1;
            max = _.slideCount * 2;
        }

        while (breakPoint < max) {
            indexes.push(breakPoint);
            breakPoint = counter + _.options.slidesToScroll;
            counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
        }

        return indexes;

    };

    Slick.prototype.getSlick = function() {

        return this;

    };

    Slick.prototype.getSlideCount = function() {

        var _ = this,
            slidesTraversed, swipedSlide, centerOffset;

        centerOffset = _.options.centerMode === true ? _.slideWidth * Math.floor(_.options.slidesToShow / 2) : 0;

        if (_.options.swipeToSlide === true) {
            _.$slideTrack.find('.slick-slide').each(function(index, slide) {
                if (slide.offsetLeft - centerOffset + ($(slide).outerWidth() / 2) > (_.swipeLeft * -1)) {
                    swipedSlide = slide;
                    return false;
                }
            });

            slidesTraversed = Math.abs($(swipedSlide).attr('data-slick-index') - _.currentSlide) || 1;

            return slidesTraversed;

        } else {
            return _.options.slidesToScroll;
        }

    };

    Slick.prototype.goTo = Slick.prototype.slickGoTo = function(slide, dontAnimate) {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'index',
                index: parseInt(slide)
            }
        }, dontAnimate);

    };

    Slick.prototype.init = function(creation) {

        var _ = this;

        if (!$(_.$slider).hasClass('slick-initialized')) {

            $(_.$slider).addClass('slick-initialized');

            _.buildRows();
            _.buildOut(); 
            _.setProps();
            _.startLoad();
            _.loadSlider();
            _.initializeEvents();
            _.updateArrows();
            _.updateDots();

        }

        if (creation) {
            _.$slider.trigger('init', [_]);
        }

        if (_.options.accessibility === true) {
            _.initADA();
        }

    };

    Slick.prototype.initArrowEvents = function() {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
            _.$prevArrow.on('click.slick', {
                message: 'previous'
            }, _.changeSlide);
            _.$nextArrow.on('click.slick', {
                message: 'next'
            }, _.changeSlide);
        }

    };

    Slick.prototype.initDotEvents = function() {

        var _ = this;

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
            $('li', _.$dots).on('click.slick', {
                message: 'index'
            }, _.changeSlide);
        }

        if (_.options.dots === true && _.options.pauseOnDotsHover === true && _.options.autoplay === true) {
            $('li', _.$dots)
                .on('mouseenter.slick', $.proxy(_.setPaused, _, true))
                .on('mouseleave.slick', $.proxy(_.setPaused, _, false));
        }

    };

    Slick.prototype.initializeEvents = function() {

        var _ = this;

        _.initArrowEvents();

        _.initDotEvents();

        _.$list.on('touchstart.slick mousedown.slick', {
            action: 'start'
        }, _.swipeHandler);
        _.$list.on('touchmove.slick mousemove.slick', {
            action: 'move'
        }, _.swipeHandler);
        _.$list.on('touchend.slick mouseup.slick', {
            action: 'end'
        }, _.swipeHandler);
        _.$list.on('touchcancel.slick mouseleave.slick', {
            action: 'end'
        }, _.swipeHandler);

        _.$list.on('click.slick', _.clickHandler);

        $(document).on(_.visibilityChange, $.proxy(_.visibility, _));

        _.$list.on('mouseenter.slick', $.proxy(_.setPaused, _, true));
        _.$list.on('mouseleave.slick', $.proxy(_.setPaused, _, false));

        if (_.options.accessibility === true) {
            _.$list.on('keydown.slick', _.keyHandler);
        }

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().on('click.slick', _.selectHandler);
        }

        $(window).on('orientationchange.slick.slick-' + _.instanceUid, $.proxy(_.orientationChange, _));

        $(window).on('resize.slick.slick-' + _.instanceUid, $.proxy(_.resize, _));

        $('[draggable!=true]', _.$slideTrack).on('dragstart', _.preventDefault);

        $(window).on('load.slick.slick-' + _.instanceUid, _.setPosition);
        $(document).on('ready.slick.slick-' + _.instanceUid, _.setPosition);

    };

    Slick.prototype.initUI = function() {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {

            _.$prevArrow.show();
            _.$nextArrow.show();

        }

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$dots.show();

        }

        if (_.options.autoplay === true) {

            _.autoPlay();

        }

    };

    Slick.prototype.keyHandler = function(event) {

        var _ = this;
         //Dont slide if the cursor is inside the form fields and arrow keys are pressed
        if(!event.target.tagName.match('TEXTAREA|INPUT|SELECT')) {
            if (event.keyCode === 37 && _.options.accessibility === true) {
                _.changeSlide({
                    data: {
                        message: 'previous'
                    }
                });
            } else if (event.keyCode === 39 && _.options.accessibility === true) {
                _.changeSlide({
                    data: {
                        message: 'next'
                    }
                });
            }
        }

    };

    Slick.prototype.lazyLoad = function() {

        var _ = this,
            loadRange, cloneRange, rangeStart, rangeEnd;

        function loadImages(imagesScope) {
            $('img[data-lazy]', imagesScope).each(function() {

                var image = $(this),
                    imageSource = $(this).attr('data-lazy'),
                    imageToLoad = document.createElement('img');

                imageToLoad.onload = function() {
                    image
                        .animate({ opacity: 0 }, 100, function() {
                            image
                                .attr('src', imageSource)
                                .animate({ opacity: 1 }, 200, function() {
                                    image
                                        .removeAttr('data-lazy')
                                        .removeClass('slick-loading');
                                });
                        });
                };

                imageToLoad.src = imageSource;

            });
        }

        if (_.options.centerMode === true) {
            if (_.options.infinite === true) {
                rangeStart = _.currentSlide + (_.options.slidesToShow / 2 + 1);
                rangeEnd = rangeStart + _.options.slidesToShow + 2;
            } else {
                rangeStart = Math.max(0, _.currentSlide - (_.options.slidesToShow / 2 + 1));
                rangeEnd = 2 + (_.options.slidesToShow / 2 + 1) + _.currentSlide;
            }
        } else {
            rangeStart = _.options.infinite ? _.options.slidesToShow + _.currentSlide : _.currentSlide;
            rangeEnd = rangeStart + _.options.slidesToShow;
            if (_.options.fade === true) {
                if (rangeStart > 0) rangeStart--;
                if (rangeEnd <= _.slideCount) rangeEnd++;
            }
        }

        loadRange = _.$slider.find('.slick-slide').slice(rangeStart, rangeEnd);
        loadImages(loadRange);

        if (_.slideCount <= _.options.slidesToShow) {
            cloneRange = _.$slider.find('.slick-slide');
            loadImages(cloneRange);
        } else
        if (_.currentSlide >= _.slideCount - _.options.slidesToShow) {
            cloneRange = _.$slider.find('.slick-cloned').slice(0, _.options.slidesToShow);
            loadImages(cloneRange);
        } else if (_.currentSlide === 0) {
            cloneRange = _.$slider.find('.slick-cloned').slice(_.options.slidesToShow * -1);
            loadImages(cloneRange);
        }

    };

    Slick.prototype.loadSlider = function() {

        var _ = this;

        _.setPosition();

        _.$slideTrack.css({
            opacity: 1
        });

        _.$slider.removeClass('slick-loading');

        _.initUI();

        if (_.options.lazyLoad === 'progressive') {
            _.progressiveLazyLoad();
        }

    };

    Slick.prototype.next = Slick.prototype.slickNext = function() {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'next'
            }
        });

    };

    Slick.prototype.orientationChange = function() {

        var _ = this;

        _.checkResponsive();
        _.setPosition();

    };

    Slick.prototype.pause = Slick.prototype.slickPause = function() {

        var _ = this;

        _.autoPlayClear();
        _.paused = true;

    };

    Slick.prototype.play = Slick.prototype.slickPlay = function() {

        var _ = this;

        _.paused = false;
        _.autoPlay();

    };

    Slick.prototype.postSlide = function(index) {

        var _ = this;

        _.$slider.trigger('afterChange', [_, index]);

        _.animating = false;

        _.setPosition();

        _.swipeLeft = null;

        if (_.options.autoplay === true && _.paused === false) {
            _.autoPlay();
        }
        if (_.options.accessibility === true) {
            _.initADA();
        }

    };

    Slick.prototype.prev = Slick.prototype.slickPrev = function() {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'previous'
            }
        });

    };

    Slick.prototype.preventDefault = function(event) {
        event.preventDefault();
    };

    Slick.prototype.progressiveLazyLoad = function() {

        var _ = this,
            imgCount, targetImage;

        imgCount = $('img[data-lazy]', _.$slider).length;

        if (imgCount > 0) {
            targetImage = $('img[data-lazy]', _.$slider).first();
            targetImage.attr('src', null);
            targetImage.attr('src', targetImage.attr('data-lazy')).removeClass('slick-loading').load(function() {
                    targetImage.removeAttr('data-lazy');
                    _.progressiveLazyLoad();

                    if (_.options.adaptiveHeight === true) {
                        _.setPosition();
                    }
                })
                .error(function() {
                    targetImage.removeAttr('data-lazy');
                    _.progressiveLazyLoad();
                });
        }

    };

    Slick.prototype.refresh = function( initializing ) {

        var _ = this, currentSlide, firstVisible;

        firstVisible = _.slideCount - _.options.slidesToShow;

        // check that the new breakpoint can actually accept the
        // "current slide" as the current slide, otherwise we need
        // to set it to the closest possible value.
        if ( !_.options.infinite ) {
            if ( _.slideCount <= _.options.slidesToShow ) {
                _.currentSlide = 0;
            } else if ( _.currentSlide > firstVisible ) {
                _.currentSlide = firstVisible;
            }
        }

         currentSlide = _.currentSlide;

        _.destroy(true);

        $.extend(_, _.initials, { currentSlide: currentSlide });

        _.init();

        if( !initializing ) {

            _.changeSlide({
                data: {
                    message: 'index',
                    index: currentSlide
                }
            }, false);

        }

    };

    Slick.prototype.registerBreakpoints = function() {

        var _ = this, breakpoint, currentBreakpoint, l,
            responsiveSettings = _.options.responsive || null;

        if ( $.type(responsiveSettings) === "array" && responsiveSettings.length ) {

            _.respondTo = _.options.respondTo || 'window';

            for ( breakpoint in responsiveSettings ) {

                l = _.breakpoints.length-1;
                currentBreakpoint = responsiveSettings[breakpoint].breakpoint;

                if (responsiveSettings.hasOwnProperty(breakpoint)) {

                    // loop through the breakpoints and cut out any existing
                    // ones with the same breakpoint number, we don't want dupes.
                    while( l >= 0 ) {
                        if( _.breakpoints[l] && _.breakpoints[l] === currentBreakpoint ) {
                            _.breakpoints.splice(l,1);
                        }
                        l--;
                    }

                    _.breakpoints.push(currentBreakpoint);
                    _.breakpointSettings[currentBreakpoint] = responsiveSettings[breakpoint].settings;

                }

            }

            _.breakpoints.sort(function(a, b) {
                return ( _.options.mobileFirst ) ? a-b : b-a;
            });

        }

    };

    Slick.prototype.reinit = function() {

        var _ = this;

        _.$slides =
            _.$slideTrack
                .children(_.options.slide)
                .addClass('slick-slide');

        _.slideCount = _.$slides.length;

        if (_.currentSlide >= _.slideCount && _.currentSlide !== 0) {
            _.currentSlide = _.currentSlide - _.options.slidesToScroll;
        }

        if (_.slideCount <= _.options.slidesToShow) {
            _.currentSlide = 0;
        }

        _.registerBreakpoints();

        _.setProps();
        _.setupInfinite();
        _.buildArrows();
        _.updateArrows();
        _.initArrowEvents();
        _.buildDots();
        _.updateDots();
        _.initDotEvents();

        _.checkResponsive(false, true);

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().on('click.slick', _.selectHandler);
        }

        _.setSlideClasses(0);

        _.setPosition();

        _.$slider.trigger('reInit', [_]);

        if (_.options.autoplay === true) {
            _.focusHandler();
        }

    };

    Slick.prototype.resize = function() {

        var _ = this;

        if ($(window).width() !== _.windowWidth) {
            clearTimeout(_.windowDelay);
            _.windowDelay = window.setTimeout(function() {
                _.windowWidth = $(window).width();
                _.checkResponsive();
                if( !_.unslicked ) { _.setPosition(); }
            }, 50);
        }
    };

    Slick.prototype.removeSlide = Slick.prototype.slickRemove = function(index, removeBefore, removeAll) {

        var _ = this;

        if (typeof(index) === 'boolean') {
            removeBefore = index;
            index = removeBefore === true ? 0 : _.slideCount - 1;
        } else {
            index = removeBefore === true ? --index : index;
        }

        if (_.slideCount < 1 || index < 0 || index > _.slideCount - 1) {
            return false;
        }

        _.unload();

        if (removeAll === true) {
            _.$slideTrack.children().remove();
        } else {
            _.$slideTrack.children(this.options.slide).eq(index).remove();
        }

        _.$slides = _.$slideTrack.children(this.options.slide);

        _.$slideTrack.children(this.options.slide).detach();

        _.$slideTrack.append(_.$slides);

        _.$slidesCache = _.$slides;

        _.reinit();

    };

    Slick.prototype.setCSS = function(position) {

        var _ = this,
            positionProps = {},
            x, y;

        if (_.options.rtl === true) {
            position = -position;
        }
        x = _.positionProp == 'left' ? Math.ceil(position) + 'px' : '0px';
        y = _.positionProp == 'top' ? Math.ceil(position) + 'px' : '0px';

        positionProps[_.positionProp] = position;

        if (_.transformsEnabled === false) {
            _.$slideTrack.css(positionProps);
        } else {
            positionProps = {};
            if (_.cssTransitions === false) {
                positionProps[_.animType] = 'translate(' + x + ', ' + y + ')';
                _.$slideTrack.css(positionProps);
            } else {
                positionProps[_.animType] = 'translate3d(' + x + ', ' + y + ', 0px)';
                _.$slideTrack.css(positionProps);
            }
        }

    };

    Slick.prototype.setDimensions = function() {

        var _ = this;

        if (_.options.vertical === false) {
            if (_.options.centerMode === true) {
                _.$list.css({
                    padding: ('0px ' + _.options.centerPadding)
                });
            }
        } else {
            _.$list.height(_.$slides.first().outerHeight(true) * _.options.slidesToShow);
            if (_.options.centerMode === true) {
                _.$list.css({
                    padding: (_.options.centerPadding + ' 0px')
                });
            }
        }

        _.listWidth = _.$list.width();
        _.listHeight = _.$list.height();


        if (_.options.vertical === false && _.options.variableWidth === false) {
            _.slideWidth = Math.ceil(_.listWidth / _.options.slidesToShow);
            _.$slideTrack.width(Math.ceil((_.slideWidth * _.$slideTrack.children('.slick-slide').length)));

        } else if (_.options.variableWidth === true) {
            _.$slideTrack.width(5000 * _.slideCount);
        } else {
            _.slideWidth = Math.ceil(_.listWidth);
            _.$slideTrack.height(Math.ceil((_.$slides.first().outerHeight(true) * _.$slideTrack.children('.slick-slide').length)));
        }

        var offset = _.$slides.first().outerWidth(true) - _.$slides.first().width();
        if (_.options.variableWidth === false) _.$slideTrack.children('.slick-slide').width(_.slideWidth - offset);

    };

    Slick.prototype.setFade = function() {

        var _ = this,
            targetLeft;

        _.$slides.each(function(index, element) {
            targetLeft = (_.slideWidth * index) * -1;
            if (_.options.rtl === true) {
                $(element).css({
                    position: 'relative',
                    right: targetLeft,
                    top: 0,
                    zIndex: _.options.zIndex - 2,
                    opacity: 0
                });
            } else {
                $(element).css({
                    position: 'relative',
                    left: targetLeft,
                    top: 0,
                    zIndex: _.options.zIndex - 2,
                    opacity: 0
                });
            }
        });

        _.$slides.eq(_.currentSlide).css({
            zIndex: _.options.zIndex - 1,
            opacity: 1
        });

    };

    Slick.prototype.setHeight = function() {

        var _ = this;

        if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
            var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
            _.$list.css('height', targetHeight);
        }

    };

    Slick.prototype.setOption = Slick.prototype.slickSetOption = function(option, value, refresh) {

        var _ = this, l, item;

        if( option === "responsive" && $.type(value) === "array" ) {
            for ( item in value ) {
                if( $.type( _.options.responsive ) !== "array" ) {
                    _.options.responsive = [ value[item] ];
                } else {
                    l = _.options.responsive.length-1;
                    // loop through the responsive object and splice out duplicates.
                    while( l >= 0 ) {
                        if( _.options.responsive[l].breakpoint === value[item].breakpoint ) {
                            _.options.responsive.splice(l,1);
                        }
                        l--;
                    }
                    _.options.responsive.push( value[item] );
                }
            }
        } else {
            _.options[option] = value;
        }

        if (refresh === true) {
            _.unload();
            _.reinit();
        }

    };

    Slick.prototype.setPosition = function() {

        var _ = this;

        _.setDimensions();

        _.setHeight();

        if (_.options.fade === false) {
            _.setCSS(_.getLeft(_.currentSlide));
        } else {
            _.setFade();
        }

        _.$slider.trigger('setPosition', [_]);

    };

    Slick.prototype.setProps = function() {

        var _ = this,
            bodyStyle = document.body.style;

        _.positionProp = _.options.vertical === true ? 'top' : 'left';

        if (_.positionProp === 'top') {
            _.$slider.addClass('slick-vertical');
        } else {
            _.$slider.removeClass('slick-vertical');
        }

        if (bodyStyle.WebkitTransition !== undefined ||
            bodyStyle.MozTransition !== undefined ||
            bodyStyle.msTransition !== undefined) {
            if (_.options.useCSS === true) {
                _.cssTransitions = true;
            }
        }

        if ( _.options.fade ) {
            if ( typeof _.options.zIndex === 'number' ) {
                if( _.options.zIndex < 3 ) {
                    _.options.zIndex = 3;
                }
            } else {
                _.options.zIndex = _.defaults.zIndex;
            }
        }

        if (bodyStyle.OTransform !== undefined) {
            _.animType = 'OTransform';
            _.transformType = '-o-transform';
            _.transitionType = 'OTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.MozTransform !== undefined) {
            _.animType = 'MozTransform';
            _.transformType = '-moz-transform';
            _.transitionType = 'MozTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.MozPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.webkitTransform !== undefined) {
            _.animType = 'webkitTransform';
            _.transformType = '-webkit-transform';
            _.transitionType = 'webkitTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.msTransform !== undefined) {
            _.animType = 'msTransform';
            _.transformType = '-ms-transform';
            _.transitionType = 'msTransition';
            if (bodyStyle.msTransform === undefined) _.animType = false;
        }
        if (bodyStyle.transform !== undefined && _.animType !== false) {
            _.animType = 'transform';
            _.transformType = 'transform';
            _.transitionType = 'transition';
        }
        _.transformsEnabled = _.options.useTransform && (_.animType !== null && _.animType !== false);
    };


    Slick.prototype.setSlideClasses = function(index) {

        var _ = this,
            centerOffset, allSlides, indexOffset, remainder;

        allSlides = _.$slider
            .find('.slick-slide')
            .removeClass('slick-active slick-center slick-current')
            .attr('aria-hidden', 'true');

        _.$slides
            .eq(index)
            .addClass('slick-current');

        if (_.options.centerMode === true) {

            centerOffset = Math.floor(_.options.slidesToShow / 2);

            if (_.options.infinite === true) {

                if (index >= centerOffset && index <= (_.slideCount - 1) - centerOffset) {

                    _.$slides
                        .slice(index - centerOffset, index + centerOffset + 1)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                } else {

                    indexOffset = _.options.slidesToShow + index;
                    allSlides
                        .slice(indexOffset - centerOffset + 1, indexOffset + centerOffset + 2)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                }

                if (index === 0) {

                    allSlides
                        .eq(allSlides.length - 1 - _.options.slidesToShow)
                        .addClass('slick-center');

                } else if (index === _.slideCount - 1) {

                    allSlides
                        .eq(_.options.slidesToShow)
                        .addClass('slick-center');

                }

            }

            _.$slides
                .eq(index)
                .addClass('slick-center');

        } else {

            if (index >= 0 && index <= (_.slideCount - _.options.slidesToShow)) {

                _.$slides
                    .slice(index, index + _.options.slidesToShow)
                    .addClass('slick-active')
                    .attr('aria-hidden', 'false');

            } else if (allSlides.length <= _.options.slidesToShow) {

                allSlides
                    .addClass('slick-active')
                    .attr('aria-hidden', 'false');

            } else {

                remainder = _.slideCount % _.options.slidesToShow;
                indexOffset = _.options.infinite === true ? _.options.slidesToShow + index : index;

                if (_.options.slidesToShow == _.options.slidesToScroll && (_.slideCount - index) < _.options.slidesToShow) {

                    allSlides
                        .slice(indexOffset - (_.options.slidesToShow - remainder), indexOffset + remainder)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                } else {

                    allSlides
                        .slice(indexOffset, indexOffset + _.options.slidesToShow)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                }

            }

        }

        if (_.options.lazyLoad === 'ondemand') {
            _.lazyLoad();
        }

    };

    Slick.prototype.setupInfinite = function() {

        var _ = this,
            i, slideIndex, infiniteCount;

        if (_.options.fade === true) {
            _.options.centerMode = false;
        }

        if (_.options.infinite === true && _.options.fade === false) {

            slideIndex = null;

            if (_.slideCount > _.options.slidesToShow) {

                if (_.options.centerMode === true) {
                    infiniteCount = _.options.slidesToShow + 1;
                } else {
                    infiniteCount = _.options.slidesToShow;
                }

                for (i = _.slideCount; i > (_.slideCount -
                        infiniteCount); i -= 1) {
                    slideIndex = i - 1;
                    $(_.$slides[slideIndex]).clone(true).attr('id', '')
                        .attr('data-slick-index', slideIndex - _.slideCount)
                        .prependTo(_.$slideTrack).addClass('slick-cloned');
                }
                for (i = 0; i < infiniteCount; i += 1) {
                    slideIndex = i;
                    $(_.$slides[slideIndex]).clone(true).attr('id', '')
                        .attr('data-slick-index', slideIndex + _.slideCount)
                        .appendTo(_.$slideTrack).addClass('slick-cloned');
                }
                _.$slideTrack.find('.slick-cloned').find('[id]').each(function() {
                    $(this).attr('id', '');
                });

            }

        }

    };

    Slick.prototype.setPaused = function(paused) {

        var _ = this;

        if (_.options.autoplay === true && _.options.pauseOnHover === true) {
            _.paused = paused;
            if (!paused) {
                _.autoPlay();
            } else {
                _.autoPlayClear();
            }
        }
    };

    Slick.prototype.selectHandler = function(event) {

        var _ = this;

        var targetElement =
            $(event.target).is('.slick-slide') ?
                $(event.target) :
                $(event.target).parents('.slick-slide');

        var index = parseInt(targetElement.attr('data-slick-index'));

        if (!index) index = 0;

        if (_.slideCount <= _.options.slidesToShow) {

            _.setSlideClasses(index);
            _.asNavFor(index);
            return;

        }

        _.slideHandler(index);

    };

    Slick.prototype.slideHandler = function(index, sync, dontAnimate) {

        var targetSlide, animSlide, oldSlide, slideLeft, targetLeft = null,
            _ = this;

        sync = sync || false;

        if (_.animating === true && _.options.waitForAnimate === true) {
            return;
        }

        if (_.options.fade === true && _.currentSlide === index) {
            return;
        }

        if (_.slideCount <= _.options.slidesToShow) {
            return;
        }

        if (sync === false) {
            _.asNavFor(index);
        }

        targetSlide = index;
        targetLeft = _.getLeft(targetSlide);
        slideLeft = _.getLeft(_.currentSlide);

        _.currentLeft = _.swipeLeft === null ? slideLeft : _.swipeLeft;

        if (_.options.infinite === false && _.options.centerMode === false && (index < 0 || index > _.getDotCount() * _.options.slidesToScroll)) {
            if (_.options.fade === false) {
                targetSlide = _.currentSlide;
                if (dontAnimate !== true) {
                    _.animateSlide(slideLeft, function() {
                        _.postSlide(targetSlide);
                    });
                } else {
                    _.postSlide(targetSlide);
                }
            }
            return;
        } else if (_.options.infinite === false && _.options.centerMode === true && (index < 0 || index > (_.slideCount - _.options.slidesToScroll))) {
            if (_.options.fade === false) {
                targetSlide = _.currentSlide;
                if (dontAnimate !== true) {
                    _.animateSlide(slideLeft, function() {
                        _.postSlide(targetSlide);
                    });
                } else {
                    _.postSlide(targetSlide);
                }
            }
            return;
        }

        if (_.options.autoplay === true) {
            clearInterval(_.autoPlayTimer);
        }

        if (targetSlide < 0) {
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                animSlide = _.slideCount - (_.slideCount % _.options.slidesToScroll);
            } else {
                animSlide = _.slideCount + targetSlide;
            }
        } else if (targetSlide >= _.slideCount) {
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                animSlide = 0;
            } else {
                animSlide = targetSlide - _.slideCount;
            }
        } else {
            animSlide = targetSlide;
        }

        _.animating = true;

        _.$slider.trigger('beforeChange', [_, _.currentSlide, animSlide]);

        oldSlide = _.currentSlide;
        _.currentSlide = animSlide;

        _.setSlideClasses(_.currentSlide);

        _.updateDots();
        _.updateArrows();

        if (_.options.fade === true) {
            if (dontAnimate !== true) {

                _.fadeSlideOut(oldSlide);

                _.fadeSlide(animSlide, function() {
                    _.postSlide(animSlide);
                });

            } else {
                _.postSlide(animSlide);
            }
            _.animateHeight();
            return;
        }

        if (dontAnimate !== true) {
            _.animateSlide(targetLeft, function() {
                _.postSlide(animSlide);
            });
        } else {
            _.postSlide(animSlide);
        }

    };

    Slick.prototype.startLoad = function() {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {

            _.$prevArrow.hide();
            _.$nextArrow.hide();

        }

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$dots.hide();

        }

        _.$slider.addClass('slick-loading');

    };

    Slick.prototype.swipeDirection = function() {

        var xDist, yDist, r, swipeAngle, _ = this;

        xDist = _.touchObject.startX - _.touchObject.curX;
        yDist = _.touchObject.startY - _.touchObject.curY;
        r = Math.atan2(yDist, xDist);

        swipeAngle = Math.round(r * 180 / Math.PI);
        if (swipeAngle < 0) {
            swipeAngle = 360 - Math.abs(swipeAngle);
        }

        if ((swipeAngle <= 45) && (swipeAngle >= 0)) {
            return (_.options.rtl === false ? 'left' : 'right');
        }
        if ((swipeAngle <= 360) && (swipeAngle >= 315)) {
            return (_.options.rtl === false ? 'left' : 'right');
        }
        if ((swipeAngle >= 135) && (swipeAngle <= 225)) {
            return (_.options.rtl === false ? 'right' : 'left');
        }
        if (_.options.verticalSwiping === true) {
            if ((swipeAngle >= 35) && (swipeAngle <= 135)) {
                return 'left';
            } else {
                return 'right';
            }
        }

        return 'vertical';

    };

    Slick.prototype.swipeEnd = function(event) {

        var _ = this,
            slideCount;

        _.dragging = false;

        _.shouldClick = (_.touchObject.swipeLength > 10) ? false : true;

        if (_.touchObject.curX === undefined) {
            return false;
        }

        if (_.touchObject.edgeHit === true) {
            _.$slider.trigger('edge', [_, _.swipeDirection()]);
        }

        if (_.touchObject.swipeLength >= _.touchObject.minSwipe) {

            switch (_.swipeDirection()) {
                case 'left':
                    slideCount = _.options.swipeToSlide ? _.checkNavigable(_.currentSlide + _.getSlideCount()) : _.currentSlide + _.getSlideCount();
                    _.slideHandler(slideCount);
                    _.currentDirection = 0;
                    _.touchObject = {};
                    _.$slider.trigger('swipe', [_, 'left']);
                    break;

                case 'right':
                    slideCount = _.options.swipeToSlide ? _.checkNavigable(_.currentSlide - _.getSlideCount()) : _.currentSlide - _.getSlideCount();
                    _.slideHandler(slideCount);
                    _.currentDirection = 1;
                    _.touchObject = {};
                    _.$slider.trigger('swipe', [_, 'right']);
                    break;
            }
        } else {
            if (_.touchObject.startX !== _.touchObject.curX) {
                _.slideHandler(_.currentSlide);
                _.touchObject = {};
            }
        }

    };

    Slick.prototype.swipeHandler = function(event) {

        var _ = this;

        if ((_.options.swipe === false) || ('ontouchend' in document && _.options.swipe === false)) {
            return;
        } else if (_.options.draggable === false && event.type.indexOf('mouse') !== -1) {
            return;
        }

        _.touchObject.fingerCount = event.originalEvent && event.originalEvent.touches !== undefined ?
            event.originalEvent.touches.length : 1;

        _.touchObject.minSwipe = _.listWidth / _.options
            .touchThreshold;

        if (_.options.verticalSwiping === true) {
            _.touchObject.minSwipe = _.listHeight / _.options
                .touchThreshold;
        }

        switch (event.data.action) {

            case 'start':
                _.swipeStart(event);
                break;

            case 'move':
                _.swipeMove(event);
                break;

            case 'end':
                _.swipeEnd(event);
                break;

        }

    };

    Slick.prototype.swipeMove = function(event) {

        var _ = this,
            edgeWasHit = false,
            curLeft, swipeDirection, swipeLength, positionOffset, touches;

        touches = event.originalEvent !== undefined ? event.originalEvent.touches : null;

        if (!_.dragging || touches && touches.length !== 1) {
            return false;
        }

        curLeft = _.getLeft(_.currentSlide);

        _.touchObject.curX = touches !== undefined ? touches[0].pageX : event.clientX;
        _.touchObject.curY = touches !== undefined ? touches[0].pageY : event.clientY;

        _.touchObject.swipeLength = Math.round(Math.sqrt(
            Math.pow(_.touchObject.curX - _.touchObject.startX, 2)));

        if (_.options.verticalSwiping === true) {
            _.touchObject.swipeLength = Math.round(Math.sqrt(
                Math.pow(_.touchObject.curY - _.touchObject.startY, 2)));
        }

        swipeDirection = _.swipeDirection();

        if (swipeDirection === 'vertical') {
            return;
        }

        if (event.originalEvent !== undefined && _.touchObject.swipeLength > 4) {
            event.preventDefault();
        }

        positionOffset = (_.options.rtl === false ? 1 : -1) * (_.touchObject.curX > _.touchObject.startX ? 1 : -1);
        if (_.options.verticalSwiping === true) {
            positionOffset = _.touchObject.curY > _.touchObject.startY ? 1 : -1;
        }


        swipeLength = _.touchObject.swipeLength;

        _.touchObject.edgeHit = false;

        if (_.options.infinite === false) {
            if ((_.currentSlide === 0 && swipeDirection === 'right') || (_.currentSlide >= _.getDotCount() && swipeDirection === 'left')) {
                swipeLength = _.touchObject.swipeLength * _.options.edgeFriction;
                _.touchObject.edgeHit = true;
            }
        }

        if (_.options.vertical === false) {
            _.swipeLeft = curLeft + swipeLength * positionOffset;
        } else {
            _.swipeLeft = curLeft + (swipeLength * (_.$list.height() / _.listWidth)) * positionOffset;
        }
        if (_.options.verticalSwiping === true) {
            _.swipeLeft = curLeft + swipeLength * positionOffset;
        }

        if (_.options.fade === true || _.options.touchMove === false) {
            return false;
        }

        if (_.animating === true) {
            _.swipeLeft = null;
            return false;
        }

        _.setCSS(_.swipeLeft);

    };

    Slick.prototype.swipeStart = function(event) {

        var _ = this,
            touches;

        if (_.touchObject.fingerCount !== 1 || _.slideCount <= _.options.slidesToShow) {
            _.touchObject = {};
            return false;
        }

        if (event.originalEvent !== undefined && event.originalEvent.touches !== undefined) {
            touches = event.originalEvent.touches[0];
        }

        _.touchObject.startX = _.touchObject.curX = touches !== undefined ? touches.pageX : event.clientX;
        _.touchObject.startY = _.touchObject.curY = touches !== undefined ? touches.pageY : event.clientY;

        _.dragging = true;

    };

    Slick.prototype.unfilterSlides = Slick.prototype.slickUnfilter = function() {

        var _ = this;

        if (_.$slidesCache !== null) {

            _.unload();

            _.$slideTrack.children(this.options.slide).detach();

            _.$slidesCache.appendTo(_.$slideTrack);

            _.reinit();

        }

    };

    Slick.prototype.unload = function() {

        var _ = this;

        $('.slick-cloned', _.$slider).remove();

        if (_.$dots) {
            _.$dots.remove();
        }

        if (_.$prevArrow && _.htmlExpr.test(_.options.prevArrow)) {
            _.$prevArrow.remove();
        }

        if (_.$nextArrow && _.htmlExpr.test(_.options.nextArrow)) {
            _.$nextArrow.remove();
        }

        _.$slides
            .removeClass('slick-slide slick-active slick-visible slick-current')
            .attr('aria-hidden', 'true')
            .css('width', '');

    };

    Slick.prototype.unslick = function(fromBreakpoint) {

        var _ = this;
        _.$slider.trigger('unslick', [_, fromBreakpoint]);
        _.destroy();

    };

    Slick.prototype.updateArrows = function() {

        var _ = this,
            centerOffset;

        centerOffset = Math.floor(_.options.slidesToShow / 2);

        if ( _.options.arrows === true &&
            _.slideCount > _.options.slidesToShow &&
            !_.options.infinite ) {

            _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
            _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            if (_.currentSlide === 0) {

                _.$prevArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            } else if (_.currentSlide >= _.slideCount - _.options.slidesToShow && _.options.centerMode === false) {

                _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            } else if (_.currentSlide >= _.slideCount - 1 && _.options.centerMode === true) {

                _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            }

        }

    };

    Slick.prototype.updateDots = function() {

        var _ = this;

        if (_.$dots !== null) {

            _.$dots
                .find('li')
                .removeClass('slick-active')
                .attr('aria-hidden', 'true');

            _.$dots
                .find('li')
                .eq(Math.floor(_.currentSlide / _.options.slidesToScroll))
                .addClass('slick-active')
                .attr('aria-hidden', 'false');

        }

    };

    Slick.prototype.visibility = function() {

        var _ = this;

        if (document[_.hidden]) {
            _.paused = true;
            _.autoPlayClear();
        } else {
            if (_.options.autoplay === true) {
                _.paused = false;
                _.autoPlay();
            }
        }

    };
    Slick.prototype.initADA = function() {
        var _ = this;
        _.$slides.add(_.$slideTrack.find('.slick-cloned')).attr({
            'aria-hidden': 'true',
            'tabindex': '-1'
        }).find('a, input, button, select').attr({
            'tabindex': '-1'
        });

        _.$slideTrack.attr('role', 'listbox');

        _.$slides.not(_.$slideTrack.find('.slick-cloned')).each(function(i) {
            $(this).attr({
                'role': 'option',
                'aria-describedby': 'slick-slide' + _.instanceUid + i + ''
            });
        });

        if (_.$dots !== null) {
            _.$dots.attr('role', 'tablist').find('li').each(function(i) {
                $(this).attr({
                    'role': 'presentation',
                    'aria-selected': 'false',
                    'aria-controls': 'navigation' + _.instanceUid + i + '',
                    'id': 'slick-slide' + _.instanceUid + i + ''
                });
            })
                .first().attr('aria-selected', 'true').end()
                .find('button').attr('role', 'button').end()
                .closest('div').attr('role', 'toolbar');
        }
        _.activateADA();

    };

    Slick.prototype.activateADA = function() {
        var _ = this;

        _.$slideTrack.find('.slick-active').attr({
            'aria-hidden': 'false'
        }).find('a, input, button, select').attr({
            'tabindex': '0'
        });

    };

    Slick.prototype.focusHandler = function() {
        var _ = this;
        _.$slider.on('focus.slick blur.slick', '*', function(event) {
            event.stopImmediatePropagation();
            var sf = $(this);
            setTimeout(function() {
                if (_.isPlay) {
                    if (sf.is(':focus')) {
                        _.autoPlayClear();
                        _.paused = true;
                    } else {
                        _.paused = false;
                        _.autoPlay();
                    }
                }
            }, 0);
        });
    };

    $.fn.slick = function() {
        var _ = this,
            opt = arguments[0],
            args = Array.prototype.slice.call(arguments, 1),
            l = _.length,
            i,
            ret;
        for (i = 0; i < l; i++) {
            if (typeof opt == 'object' || typeof opt == 'undefined')
                _[i].slick = new Slick(_[i], opt);
            else
                ret = _[i].slick[opt].apply(_[i].slick, args);
            if (typeof ret != 'undefined') return ret;
        }
        return _;
    };

}));

/*--end rotators--*/
	
/*--mod-heroslider--*/
$(document).ready(function(){
	/****************
	 MODULE - Hero Slider
	*****************/
	var slider = $('.mod-heroslider .slider').slick({
		accessibility:false,
		adaptiveHeight: true,
		arrows: true,
		autoplay: false,
		dots: true,
 	 	fade: true,
 	 	swipe: true,
		responsive: [
			{
			  breakpoint: 990,
			  settings: {
				dots: true,
				arrows: false
			  }
			}
		]
	}).on('swipe', function(event, slick, direction){
		$(window).scroll();
	});
	
	
	// needed for IE, flexbox
	/*$('.mod-heroslider').each(function(){
		var sliderHeight = $(this).find(".slider").height();
		var tempheight = sliderHeight;
		$(this).find('.slick-slide').each(function(){
			tempheight = $(this).outerHeight();
			if(sliderHeight > tempheight){ tempheight = sliderHeight;}
			$(this).find(".slider-image, .hero-video").css("height",tempheight);
		});
	});
	window.addEventListener("resize", function(e) {
		$(".slider-image, .hero-video").css("height","");
		if(!isMobile){
			$('.mod-heroslider').each(function(){
				var sliderHeight = $(this).find(".slider").height();
				var tempheight = sliderHeight;
				$(this).find('.slick-slide').each(function(){
					tempheight = $(this).outerHeight();
					if(sliderHeight > tempheight){ tempheight = sliderHeight;}
					if(isMobile){ tempheight = tempheight-180;}
					$(this).find(".slider-image, .hero-video").css("height",tempheight);
				});
			});
		}
	});*/
	
	/*paralax videos*/
	/*window.addEventListener("scroll", function(e) {
		$(".hero-video iframe").css("top",$(window).scrollTop()-0);
	});
	*/
	
	$(document.documentElement).on('keyup',function(event) {
		var tempSliderSelector  = $('.mod-heroslider .slider:hover').first();
		if(tempSliderSelector.length){
			if (event.keyCode == 37) {
				tempSliderSelector.slick("slickPrev");
			} else if (event.keyCode == 39) {
				tempSliderSelector.slick("slickNext");
			}
		}
	});
	
	
});
/*end document.ready*/
/*--end mod-heroslider--*/

/*--mod-tabs--*/
 $(document).ready(function(){
	
	$(window).resize(function(e){
		updateUI();
	});
	updateUI();
	 
});
/*end document.ready*/

// event handler for window resize
function updateUI(){
	if(isMobile){
		tabsToAccordions();
	} else {
		accordionsToTabs();
	}
}
 
// changes tabs to accordions (jquery ui)
function tabsToAccordions(){
	$('.mod-tabs .tabs').each(function(){
		var a = $('<div class="accordion">');
		var b = new Array();
		$(this).find('>ul>li').each(function(){
			var linktext = $(this).html();
			linktext = linktext.replace("<a","<span class='showhide-header'");
			linktext = linktext.replace("/a>","/span>");
			b.push('<h3>'+linktext+'</h3>');
		});
		var c = new Array();
		$(this).find('>div').each(function(){
			c.push('<div>'+$(this).html()+'</div>');
		});
		for(var i = 0; i < b.length; i++){
			a.append(b[i]).append(c[i]);
		}
		$(this).before(a);
		$(this).remove();
	})
	$('.mod-tabs .accordion').accordion({
		heightStyle: "content", 
		collapsible: true,
		active:false
	});
	$('.mod-tabs .accordion h3.ui-accordion-header').off('click').click(function(){
        $(this).next().stop(true, false).slideToggle(500);
		$(this).toggleClass("open");
    });
}

// changes accordions to tabs (jquery ui)
function accordionsToTabs(){
	$('.mod-tabs .accordion').each(function(){
		var a = $('<div class="tabs">');
		var count = 0;
		var b = $('<ul>');
		$(this).find('>h3').each(function(){
			count++;
			var linktext = $(this).text();
			b.append('<li><a href="#tabs-'+count+'">'+linktext+'</a></li>');
		});
		var count = 0;
		var c = $('');
		$(this).find('>div').each(function(){
			count++;
			c=c.add('<div id="tabs-'+count+'">'+$(this).html()+'</div>');
		});
		a.append(b).append(c);
		$(this).before(a);
		$(this).remove();
	});
	$('.mod-tabs .tabs').tabs();
}
/*--end mod-tabs--*/
	
/*--mod-contentpreview--*/


$(document).ready(function(){
	/****************
	 MODULE - contentpreview
	*****************/
	var isSlider = false;
	var previewLimitMobile = 2;
		
	//toggle
    $('.mod-contentpreview .load-more').click(function () {
		var loadCount = $(this).parents(".mod-contentpreview").attr("data-load-count")?$(this).parents(".mod-contentpreview").attr("data-load-count"):1;
		loadCount++;
		$(this).parents(".mod-contentpreview").attr("data-load-count",parseInt(loadCount));
		var slideritems = $(this).parents(".mod-contentpreview").find(".slider > div");
		var slideritemscount = slideritems.length;
		$(this).parents(".mod-contentpreview").find(".slider > div:lt("+(previewLimitMobile*loadCount)+")").show();
		if(previewLimitMobile*loadCount >= slideritemscount){
			//$(this).css("opacity",0);
			$(this).hide();
			$(this).next().show();
		}
		//$(this).next().show();  //disabling "view less" for now
    });
    $('.mod-contentpreview .show-less').click(function () {
		$(this).hide();
		$(this).prev().show();
		$(this).parents(".mod-contentpreview").attr("data-load-count","");
		 setPreviewRows();
		 $("body").animate({'scrollTop':$(this).parents(".mod-contentpreview").offset().top-$(".header").outerHeight()},500);
    });


	var videoDivSetTimeout = null;
	function videoDivSet(isReset){
		clearTimeout(videoDivSetTimeout);
		videoDivSetTimeout = setTimeout(function(){
			$('.mod-contentpreview .videoContain').stop(true,false);
			$(".mod-contentpreview .slick-slide").stop(true,false).height("");
			$(".mod-contentpreview .slider-item-content").stop(true,false).css("min-height","");
			$(".mod-contentpreview .slick-track").each(function(){
				var maxhalf = 0;
				$(this).find(".slider-item").each(function(){
					var thisHeight = $(this).height();
					if(!$(this).hasClass("half-height")){
						thisHeight = thisHeight*0.5;
					}
					if(maxhalf<thisHeight){
						maxhalf=thisHeight;
					}
				});
				$(this).find(".slick-slide").height(maxhalf*2);
				$(this).find(".pos-bottom .slider-item-content").css("min-height",maxhalf);
			});
			
			if(isReset){
				$('.mod-contentpreview .videoContain').css('height',"");
				$('.mod-contentpreview .videoContain').css('width',"");
			}else{
				$('.mod-contentpreview .videoContain:visible').each(function(){
					var parentObj = $(this).parent();
					if(parentObj.hasClass("half-height")){
						var parentWidth = parentObj.width();
						var contentWidth = $(this).next().outerWidth();
						if(parentWidth-contentWidth){
							$(this).width(1+parentWidth-contentWidth);
						}else{
							$(this).width("100%");
						}
					}else{
						var parentHeight = parentObj.height();
						var contentHeight = $(this).next().outerHeight();
						if(parentHeight-contentHeight){
							$(this).height(parentHeight-contentHeight);
						}else{
							$(this).height("auto");
						}
					}
				});
			}
		},100);
	}
	
	
	function setPreviewRows(){
		
		$('.mod-contentpreview').each(function(){
			$(this).find(".show-less").hide();
			$(this).find('.slider > div').hide();
			$(this).find('.slider > div:lt('+previewLimitMobile+')').show();
			$(this).each(function(){			
				if($(this).find(".slider > div").length>previewLimitMobile){ 
					$(this).find(".load-more").show();
				}else{
					$(this).find(".load-more").hide();
				}
			});
		});
		
	}
	
	
	function slickify(){
		$(".slider > div").show();
		$('.mod-contentpreview').each(function(){
			if($(this).parents(".narrow").length){
				$(this).find('.slider').not('.slick-initialized').slick({
					accessibility:false,
					arrows: true,
					dots: true,
					slidesToShow: 2,
					slidesToScroll: 2,
					touchThreshold:30,
					infinite: false,
					responsive: [
						{
						  breakpoint: 1280,
						  settings: {
							slidesToShow: 1,
							slidesToScroll: 1,
							dots: true,
							arrows: true
						  }
						},
						{
						  breakpoint: 990,
						  settings: {
							slidesToShow: 1,
							slidesToScroll: 1,
							dots: true,
							arrows: false
						  }
						}
					]
				});
			}else{
				$(this).find('.slider').not('.slick-initialized').slick({
					accessibility:false,
					arrows: true,
					dots: true,
					slidesToShow: 2,
					slidesToScroll: 2,
					touchThreshold:30,
					infinite: false,
					responsive: [
						{
						  breakpoint: 990,
						  settings: {
							slidesToShow: 1,
							slidesToScroll: 1,
							dots: true,
							arrows: false
						  }
						}
					]
				});
			}
		});
		
		$('.mod-contentpreview .slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
			videoDivSet();
		});
		$('.mod-contentpreview .slider').addClass("slickOn");
	}
	
	
	if (!isMobile) {
		isSlider = true;
		slickify();   
		videoDivSet();
	}else if (isMobile) {
		setPreviewRows();
		videoDivSet('reset');
	}
	
	
	window.addEventListener("resize", function(e) {
		//$(".mod-contentpreview").find(".show-less").hide();
		//$(".mod-contentpreview").find(".load-more").hide();
			
		if (!isSlider && !isMobile) {
			$(".mod-contentpreview").find(".show-less").hide();
			$(".mod-contentpreview").find(".load-more").hide();
			isSlider = true;
			slickify();   
		}
		else if (isSlider && isMobile) {
			isSlider = false;
			$('.mod-contentpreview .slider').each(function(){
				if($(this).hasClass("slickOn")){
					$(this).slick("unslick");
					$(this).removeClass("slickOn");
					//console.log("unslick");
				}
			});
			setPreviewRows();
		}else{
			videoDivSet();
		}
		
	});
	
	
	$(document.documentElement).on('keyup',function(event) {
		var tempSliderSelector = $('.mod-contentpreview .slider:hover').first();
		if(tempSliderSelector.length){
			if (event.keyCode == 37) {
				if(!tempSliderSelector.find(".slick-prev.slick-disabled").length){
					tempSliderSelector.slick("slickPrev");
				}
			} else if (event.keyCode == 39) {
				if(!tempSliderSelector.find(".slick-next.slick-disabled").length){
					tempSliderSelector.slick("slickNext");
				}
			}
		}
	});
	
	
});
/*end document.ready*/
/*--end mod-contentpreview--*/	

/*--mod-testimonialslider--*/


$(document).ready(function(){
	/****************
	 MODULE - contentpreview
	*****************/
	var isSlider = false;
	var previewLimitMobile = 2;
		
	function slickifyPList(){
		$(".sliderplist > div").show();
		$('.mod-testimonialslider').each(function(){
			var colNum = 1;
			if($('.sliderplist').parent().parent().attr('class').match(/mod-testimonial-\d+/)!=null){
				colNum = $('.sliderplist').parent().parent().attr('class').match(/mod-testimonial-\d+/)[0];
				colNum = parseInt(colNum.replace("mod-testimonial-",""));
			}
			if($(this).parents(".narrow").length){
				$(this).find('.sliderplist').not('.slick-initialized').slick({
					accessibility:false,
					arrows: true,
					adaptiveHeight: true,
					autoplay: false,
					dots: true,
					slidesToShow: colNum,
					slidesToScroll: colNum,
					touchThreshold:30,
					infinite: false,
					responsive: [
						{
						  breakpoint: 765,
						  settings: {
							slidesToShow: 1,
							slidesToScroll: 1,
							dots: true,
							arrows: true
						  }
						}
					]
				});
			}else{
				$(this).find('.sliderplist').not('.slick-initialized').slick({
					accessibility:false,
					arrows: true,
					adaptiveHeight: true,
					autoplay: false,
					dots: true,
					slidesToShow: colNum,
					slidesToScroll: colNum,
					touchThreshold:30,
					infinite: false,
					responsive: [
						{
						  breakpoint: 765,
						  settings: {
							slidesToShow: 1,
							slidesToScroll: 1,
							dots: true,
							arrows: true
						  }
						}
					]
				});
			}
		});
		$('.mod-testimonialslider .slick-slide').children('.testimonial-item').children('.testimonial').matchHeight({
			byRow: false
		});
		$('.mod-testimonialslider .sliderplist').on('beforeChange', function(event, slick, currentSlide, nextSlide){
			//videoDivSet();
		});
		$('.mod-testimonialslider .sliderplist').on('afterChange', function(event, slick, currentSlide, nextSlide){
			//videoDivSet();
			/* $('.mod-testimonialslider .slick-slide.slick-active').children('.testimonial-item').children('.testimonial').matchHeight({
					                          byRow: false
			});*/
		});
		$('.mod-testimonialslider .sliderplist').addClass("slickOn");
	}
	
	
	if (!isMobile) {
		isSlider = true;
		slickifyPList();   
		//videoDivSet();
	}else if (isMobile) {
		/*setPreviewRows();*/
		slickifyPList();
		//videoDivSet('reset');
	}
	
	
	window.addEventListener("resize", function(e) {
		//$(".mod-testimonialslider").find(".show-less").hide();
		//$(".mod-testimonialslider").find(".load-more").hide();
			
		if (!isSlider && !isMobile) {
			$(".mod-testimonialslider").find(".show-less").hide();
			$(".mod-testimonialslider").find(".load-more").hide();
			isSlider = true;
			slickifyPList();   
		}
		/*else if (isSlider && isMobile) {
			isSlider = false;
			$('.mod-testimonialslider .sliderplist').each(function(){
				if($(this).hasClass("slickOn")){
					$(this).slick("unslick");
					$(this).removeClass("slickOn");
					//console.log("unslick");
				}
			});
			//setPreviewRows();
		}else{
			//videoDivSet();
		}*/
		
	});
	
	
	$(document.documentElement).on('keyup',function(event) {
		var tempSliderSelector = $('.mod-testimonialslider .sliderplist:hover').first();
		if(tempSliderSelector.length){
			if (event.keyCode == 37) {
				if(!tempSliderSelector.find(".slick-prev.slick-disabled").length){
					tempSliderSelector.slick("slickPrev");
				}
			} else if (event.keyCode == 39) {
				if(!tempSliderSelector.find(".slick-next.slick-disabled").length){
					tempSliderSelector.slick("slickNext");
				}
			}
		}
	});
	
	
});
/*end document.ready*/
/*--end mod-testimonialslider--*/

/*--mod-results--*/
/*var resultsIsMobile = false;
var resultsLimitDesktop = 8;
var resultsLimitMobile = 4;
var resultsLimit = resultsLimitDesktop;*/

$(document).ready(function(){
	
	/*
	function setResultRows(){
		if(isMobile){
			resultsLimit = resultsLimitMobile;
			resultsIsMobile = true; 
		}else{
			resultsLimit = resultsLimitDesktop;
			resultsIsMobile = false; 
		}
		$('.mod-results').each(function(){
			$(this).find('.result').hide();
			$(this).find('.result:lt('+resultsLimit+')').show();
			$(this).each(function(){
				$(this).find(".showLess").hide();
				if($(this).find(".result").length>resultsLimit){ 
					$(this).find(".load-more").show();
				}else{
					$(this).find(".load-more").show();
				}
			});
		});
	}
	
	$(window).resize(function(e){
		var tempResultLimit = resultsLimit;
		if(!isMobile){
			resultsLimit = resultsLimitDesktop;
		}else{
			resultsLimit = resultsLimitMobile;
		}
		if(tempResultLimit !== resultsLimit){
			setResultRows();
		}else{
			if (resultsIsMobile && !isMobile) {
				setResultRows();
			}if (!resultsIsMobile && isMobile) {
				setResultRows();
			}
		}
	});
	setResultRows();
	
	
	//toggle
    $('.mod-results .load-more').click(function () {
		var loadCount = $(this).parents(".mod-results").attr("data-load-count")?$(this).parents(".mod-results").attr("data-load-count"):1;
		loadCount++;
		$(this).parents(".mod-results").attr("data-load-count",parseInt(loadCount));
		
		var resultitems = $(this).parents(".mod-results").find(".result");
		var resultitemscount = resultitems.length;
		$(this).parents(".mod-results").find(".result:lt("+(resultsLimit*loadCount)+")").show();
		if(resultsLimit*loadCount >= resultitemscount){
			//$(this).css("opacity",0);
			$(this).hide();
			$(this).next().show();
		}
    });
    $('.mod-results .show-less').click(function () {
		$(this).parents(".mod-results").attr("data-load-count","");
		$(this).hide();
		$(this).prev().show();
		setResultRows();
		$("body").animate({'scrollTop':$(this).parents(".mod-results").offset().top-$(".header").outerHeight()},500);
    });
	*/
});
/*end document.ready*/
/*--end mod-results--*/	

/*--mod-sectionlisting--*/
    
/*--end mod-sectionlisting--*/	

/*--mod-testimonial--*/
$(document).ready(function(){

	
	if(windowWidth > mobileBreakpoint ){

		var testimonialHeight = $('.testimonial').height();
		var rolloverHeight = $('.rollover-content').height();
		if (testimonialHeight<rolloverHeight){
			$('.testimonial').height(rolloverHeight+60);
		}

		var rollover = null;
		var testimoialtimeout = null;
		$(".testimonial-content").on("mouseenter",function(){
			clearTimeout(testimoialtimeout);
			$(this).parents('.mod-testimonial').find(".rollover").animate({"opacity":"0","top":'220px'},50);
			$(this).find(".rollover").css("top",0);
			$(this).find(".rollover").stop(true,false).animate({"opacity":"1","top":0},100);
		}).on("mouseleave",function(){
			$(this).find(".rollover").stop(true,false).animate({"opacity":"0"},100);
			rollover = $(this).find(".rollover");
			testimoialtimeout = setTimeout(function(){
				rollover.css("top",'220px');
			},100);
		});
	}
	
});
/*end document.ready*/
/*--end mod-testimonial--*/	

/*--mod-showhide--*/
$(document).ready(function(){
	$('.mod-showhide .accordion').accordion({
		heightStyle: "content", 
		collapsible: true,
		active:false
	});
	$('.mod-showhide .accordion h3.ui-accordion-header').off('click').click(function(){
        $(this).next().stop(true, false).slideToggle(500);
		if( $(this).hasClass("open") ){
			$(this).removeClass("open");
		} else {
			$(this).addClass("open");
		}
    });
});
/*end document.ready*/
/*--end mod-showhide--*/	

/*--mod-morestories--*/
   
/*--end mod-morestories--*/	

/*--mod-cta--*/

/*--end mod-cta--*/	

/*--mod-callout--*/
    
/*--end mod-callout--*/	

/*--mod-filter--*/
$(document).ready(function(){
	$('.form-accordian').accordion({
		heightStyle: "content", 
		collapsible: true,
		active:true
	});
	
	/*accordians only on mobile*/
	$('.mod-filter .form-accordian .form-header').off('click').click(function(){
		if($(window).width() <= mobileBreakpoint){
			$(this).next().stop(true, false).slideToggle(500);
			$(this).toggleClass("open");
		}
    });
	
});
/*end document.ready*/
/*--end mod-filter--*/

/*--mod-form--*/
    $(document).ready(function(){

		// $(".mod-form label").click(function(){
		// 	$(this).find("input[type='checkbox']").click();
		// });

	// checkboxes
	$("input[type='checkbox']").change(function(){
		var labelId = $(this).parent();
		if ( labelId.attr("class")==="checkbox-off" ) {
			labelId.addClass("checkbox-on");
			labelId.removeClass("checkbox-off");
		} else {
			labelId.removeClass("checkbox-on");
			labelId.addClass("checkbox-off");
		}
	}); // end checkbox.each

	//form validation
	$(".mod-form form").submit(function(event){
		event.preventDefault();
		event.stopPropagation();
		
		if($(this).valid()){		
			$('.top-error-msg').stop(true,false).slideUp();	
			$(this).find(".formFields").fadeOut(function(){
				$('.mod-form .form-confirm').fadeIn();			
			});			
		} else {
			$('.pagecontain .content-header p').hide();
			$('.top-error-msg').slideDown();
			//$('html, body').animate({
//				scrollTop: $("input.error").first().offset().top-100
//			}, 1000);
		}
		return false;
		
	});
	
	$(".mod-form form").validate({
		wrapper: 'span',
		rules: {
			firstName: {
				required: true
			},
			lastName: {
				required: true
			},
			company: {
				required: true
			},
			country: {
				required: true
			},
			state: {
				required: true
			},
			email: {
				required: true,
				email: true
			}
		}
	});
	$.extend($.validator.messages, {
		required: "<b>ERROR:</b> Error specific message to go here"		
//		remote: "Please fix this field.",
//		email: "Please enter a valid email address.",
//		url: "Please enter a valid URL.",
//		date: "Please enter a valid date.",
//		dateISO: "Please enter a valid date (ISO).",
//		number: "Please enter a valid number.",
//		digits: "Please enter only digits.",
//		creditcard: "Please enter a valid credit card number.",
//		equalTo: "Please enter the same value again.",
//		accept: "Please enter a value with a valid extension.",
//		maxlength: jQuery.validator.format("Please enter no more than {0} characters."),
//		minlength: jQuery.validator.format("Please enter at least {0} characters."),
//		rangelength: jQuery.validator.format("Please enter a value between {0} and {1} characters long."),
//		range: jQuery.validator.format("Please enter a value between {0} and {1}."),
//		max: jQuery.validator.format("Please enter a value less than or equal to {0}."),
//		min: jQuery.validator.format("Please enter a value greater than or equal to {0}.")
	});
	


	
}); /*end document.ready*/
/*--end mod-form--*/	

/*--mod-content blocks--*/
/**********************
	MODULE - CONTENT BLOCKS
**********************/


var blocksLimitDesktop = 6;
var blocksLimitMobile = 3;
var blocksIsMobile = false;

var blocksLimit = blocksLimitDesktop;

$(document).ready(function(){

	/*if(!isMobileDevice()){
		$('.mod-contentblocks .block-item .block-image').on('mouseenter',function(){	
			$(this).find('.block-content').stop().fadeOut(300);
			$(this).find('.block-hover').stop().css("opacity",1).fadeIn(300);
		}).on('mouseleave',function(){	
			$(this).find('.block-hover').stop().fadeOut(300);;
			$(this).find('.block-content').stop().fadeIn(300);
		})
	}*/
	if(!isMobile){
		blocksLimit = blocksLimitDesktop;
	}else{
		blocksLimit = blocksLimitMobile;
	}
	
	//toggle
	$('.mod-contentblocks .load-more').click(function () {
		var loadCount = $(this).parents(".mod-contentblocks").attr("data-load-count")?$(this).parents(".mod-contentblocks").attr("data-load-count"):1;
		loadCount++;
		$(this).parents(".mod-contentblocks").attr("data-load-count",parseInt(loadCount));
		var slideritems = $(this).parents(".mod-contentblocks").find(".block-item");
		var slideritemscount = slideritems.length;
		$(this).parents(".mod-contentblocks").find(".block-item:lt("+(blocksLimit*loadCount)+")").show();
		if(blocksLimit*loadCount >= slideritemscount){
			$(this).hide();
			$(this).next().show();
		}
	});
	$('.mod-contentblocks .show-less').click(function () {
		$(this).parents(".mod-contentblocks").attr("data-load-count","");
		$(this).hide();
		$(this).prev().show();
		setBlockRows();
		$("body").animate({'scrollTop':$(this).parents(".mod-contentblocks").offset().top-$(".header").outerHeight()},500);
	});
		
	window.addEventListener("resize", function(e) {
		var tempLimit = blocksLimit;
		if(!isMobile){
			blocksLimit = blocksLimitDesktop;
		}else{
			blocksLimit = blocksLimitMobile;
		}
		if(tempLimit !== blocksLimit){
			setBlockRows();
		}
	});
		
	function setBlockRows(){
		$('.mod-contentblocks').each(function(){
			$(this).find(".show-less").hide();
			$(this).find('.block-item').hide();
			$(this).find('.block-item:lt('+blocksLimit+')').show();
			$(this).each(function(){			
				if($(this).find(".block-item").length>blocksLimit){ 
					$(this).find(".load-more").show();
				}else{
					$(this).find(".load-more").hide();
				}
			});
		});
	}
	
	setBlockRows();

}); /*end document.ready*/
/*--end mod-content blocks--*/	

/*Components for Modal*/
/*! formstone v1.2.1 [core.js] 2016-08-02 | GPL-3.0 License | formstone.it */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a(jQuery)}(function(a){"use strict";function b(a){m.Plugins[a].initialized||(m.Plugins[a].methods._setup.call(document),m.Plugins[a].initialized=!0)}function c(a,b,c,d){var e,f={raw:{}};d=d||{};for(e in d)d.hasOwnProperty(e)&&("classes"===a?(f.raw[d[e]]=b+"-"+d[e],f[d[e]]="."+b+"-"+d[e]):(f.raw[e]=d[e],f[e]=d[e]+"."+b));for(e in c)c.hasOwnProperty(e)&&("classes"===a?(f.raw[e]=c[e].replace(/{ns}/g,b),f[e]=c[e].replace(/{ns}/g,"."+b)):(f.raw[e]=c[e].replace(/.{ns}/g,""),f[e]=c[e].replace(/{ns}/g,b)));return f}function d(){var a,b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"otransitionend",transition:"transitionend"},c=["transition","-webkit-transition"],d={transform:"transform",MozTransform:"-moz-transform",OTransform:"-o-transform",msTransform:"-ms-transform",webkitTransform:"-webkit-transform"},e="transitionend",f="",g="",h=document.createElement("div");for(a in b)if(b.hasOwnProperty(a)&&a in h.style){e=b[a],m.support.transition=!0;break}p.transitionEnd=e+".{ns}";for(a in c)if(c.hasOwnProperty(a)&&c[a]in h.style){f=c[a];break}m.transition=f;for(a in d)if(d.hasOwnProperty(a)&&d[a]in h.style){m.support.transform=!0,g=d[a];break}m.transform=g}function e(){m.windowWidth=m.$window.width(),m.windowHeight=m.$window.height(),q=l.startTimer(q,r,f)}function f(){for(var a in m.ResizeHandlers)m.ResizeHandlers.hasOwnProperty(a)&&m.ResizeHandlers[a].callback.call(window,m.windowWidth,m.windowHeight)}function g(){if(m.support.raf){m.window.requestAnimationFrame(g);for(var a in m.RAFHandlers)m.RAFHandlers.hasOwnProperty(a)&&m.RAFHandlers[a].callback.call(window)}}function h(a,b){return parseInt(a.priority)-parseInt(b.priority)}var i="undefined"!=typeof window?window:this,j=i.document,k=function(){this.Version="1.2.1",this.Plugins={},this.DontConflict=!1,this.Conflicts={fn:{}},this.ResizeHandlers=[],this.RAFHandlers=[],this.window=i,this.$window=a(i),this.document=j,this.$document=a(j),this.$body=null,this.windowWidth=0,this.windowHeight=0,this.fallbackWidth=1024,this.fallbackHeight=768,this.userAgent=window.navigator.userAgent||window.navigator.vendor||window.opera,this.isFirefox=/Firefox/i.test(this.userAgent),this.isChrome=/Chrome/i.test(this.userAgent),this.isSafari=/Safari/i.test(this.userAgent)&&!this.isChrome,this.isMobile=/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(this.userAgent),this.isIEMobile=/IEMobile/i.test(this.userAgent),this.isFirefoxMobile=this.isFirefox&&this.isMobile,this.transform=null,this.transition=null,this.support={file:!!(window.File&&window.FileList&&window.FileReader),history:!!(window.history&&window.history.pushState&&window.history.replaceState),matchMedia:!(!window.matchMedia&&!window.msMatchMedia),pointer:!!window.PointerEvent,raf:!(!window.requestAnimationFrame||!window.cancelAnimationFrame),touch:!!("ontouchstart"in window||window.DocumentTouch&&document instanceof window.DocumentTouch),transition:!1,transform:!1}},l={killEvent:function(a,b){try{a.preventDefault(),a.stopPropagation(),b&&a.stopImmediatePropagation()}catch(c){}},startTimer:function(a,b,c,d){return l.clearTimer(a),d?setInterval(c,b):setTimeout(c,b)},clearTimer:function(a,b){a&&(b?clearInterval(a):clearTimeout(a),a=null)},sortAsc:function(a,b){return parseInt(a,10)-parseInt(b,10)},sortDesc:function(a,b){return parseInt(b,10)-parseInt(a,10)},decodeEntities:function(){}