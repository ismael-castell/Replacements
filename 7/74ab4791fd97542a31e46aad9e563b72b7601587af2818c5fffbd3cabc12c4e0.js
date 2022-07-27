/*!

 =========================================================
 * Now UI Kit Pro - v1.2.2
 =========================================================

 * Product Page: https://www.creative-tim.com/product/now-ui-kit-pro
 * Copyright 2018 Creative Tim (http://www.creative-tim.com)

 * Designed by www.invisionapp.com Coded by www.creative-tim.com

 =========================================================

 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

 */


var transparent = true;
var big_image;

var transparentDemo = true;
var fixedTop = false;

var navbar_initialized,
  backgroundOrange = false,
  toggle_initialized = false;

var nowuiKit,
  $navbar,
  scroll_distance,
  oVal;

$(document).ready(function() {
  //  Activate the Tooltips
  $('[data-toggle="tooltip"], [rel="tooltip"]').tooltip();

  //    Activate bootstrap-select
  if ($(".selectpicker").length != 0) {
    $(".selectpicker").selectpicker({
      iconBase: "now-ui-icons",
      tickIcon: "ui-1_check"
    });
  };

  if ($(window).width() >= 768) {
    big_image = $('.header[data-parallax="true"]');
    if (big_image.length != 0) {
      $(window).on('scroll', nowuiKit.checkScrollForParallax);
    }
  }

  // Activate Popovers and set color for popovers
  $('[data-toggle="popover"]').each(function() {
    color_class = $(this).data('color');
    $(this).popover({
      template: '<div class="popover popover-' + color_class + '" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
    });
  });

  //Activate tags
  // we style the badges with our colors
  var tagClass = $('.tagsinput').data('color');

  if ($(".tagsinput").length != 0) {
    $('.tagsinput').tagsinput();
  }

  $('.bootstrap-tagsinput').addClass('badge-' + tagClass + '');

  // Activate the image for the navbar-collapse
  nowuiKit.initNavbarImage();

  // Adding class show on the navbar-collapse for animation working properly
  $('.navbar-collapse').addClass('show');

  $navbar = $('.navbar[color-on-scroll]');
  scroll_distance = $navbar.attr('color-on-scroll') || 500;

  // Check if we have the class "navbar-color-on-scroll" then add the function to remove the class "navbar-transparent" so it will transform to a plain color.
  if ($('.navbar[color-on-scroll]').length != 0) {
    nowuiKit.checkScrollForTransparentNavbar();
    $(window).on('scroll', nowuiKit.checkScrollForTransparentNavbar)
  }

  $('.form-control').on("focus", function() {
    $(this).parent('.input-group').addClass("input-group-focus");
  }).on("blur", function() {
    $(this).parent(".input-group").removeClass("input-group-focus");
  });

  // Activate bootstrapSwitch
  $('.bootstrap-switch').each(function() {
    $this = $(this);
    data_on_label = $this.data('on-label') || '';
    data_off_label = $this.data('off-label') || '';

    $this.bootstrapSwitch({
      onText: data_on_label,
      offText: data_off_label
    });
  });

  if ($(window).width() >= 992) {
    big_image = $('.page-header-image[data-parallax="true"]');

    $(window).on('scroll', nowuiKit.checkScrollForParallax);
  }

  // Activate Carousel
  $('.carousel').carousel({
    interval: 11000
  });
  $(document).ready(function() {      
   $('.carousel').carousel('pause');
});

  if ($(".datetimepicker").length != 0) {
    $('.datetimepicker').datetimepicker({
      icons: {
        time: "now-ui-icons tech_watch-time",
        date: "now-ui-icons ui-1_calendar-60",
        up: "fa fa-chevron-up",
        down: "fa fa-chevron-down",
        previous: 'now-ui-icons arrows-1_minimal-left',
        next: 'now-ui-icons arrows-1_minimal-right',
        today: 'fa fa-screenshot',
        clear: 'fa fa-trash',
        close: 'fa fa-remove'
      }
    });
  }

  if ($(".datepicker").length != 0) {
    $('.datepicker').datetimepicker({
      format: 'MM/DD/YYYY',
      icons: {
        time: "now-ui-icons tech_watch-time",
        date: "now-ui-icons ui-1_calendar-60",
        up: "fa fa-chevron-up",
        down: "fa fa-chevron-down",
        previous: 'now-ui-icons arrows-1_minimal-left',
        next: 'now-ui-icons arrows-1_minimal-right',
        today: 'fa fa-screenshot',
        clear: 'fa fa-trash',
        close: 'fa fa-remove'
      }
    });
  }

  if ($(".timepicker").length != 0) {
    $('.timepicker').datetimepicker({
      //          format: 'H:mm',    // use this format if you want the 24hours timepicker
      format: 'h:mm A', //use this format if you want the 12hours timpiecker with AM/PM toggle
      icons: {
        time: "now-ui-icons tech_watch-time",
        date: "now-ui-icons ui-1_calendar-60",
        up: "fa fa-chevron-up",
        down: "fa fa-chevron-down",
        previous: 'now-ui-icons arrows-1_minimal-left',
        next: 'now-ui-icons arrows-1_minimal-right',
        today: 'fa fa-screenshot',
        clear: 'fa fa-trash',
        close: 'fa fa-remove'
      }
    });
  }
});

$(window).on('resize', function() {
  nowuiKit.initNavbarImage();
});

$(document).on('click', '.navbar-toggler', function() {
  $toggle = $(this);

  if (nowuiKit.misc.navbar_menu_visible == 1) {
    $('html').removeClass('nav-open');
    nowuiKit.misc.navbar_menu_visible = 0;
    $('#bodyClick').remove();
    setTimeout(function() {
      $toggle.removeClass('toggled');
    }, 550);
  } else {
    setTimeout(function() {
      $toggle.addClass('toggled');
    }, 580);
    div = '<div id="bodyClick"></div>';
    $(div).appendTo('body').click(function() {
      $('html').removeClass('nav-open');
      nowuiKit.misc.navbar_menu_visible = 0;
      setTimeout(function() {
        $toggle.removeClass('toggled');
        $('#bodyClick').remove();
      }, 550);
    });

    $('html').addClass('nav-open');
    nowuiKit.misc.navbar_menu_visible = 1;
  }
});


nowuiKit = {
  misc: {
    navbar_menu_visible: 0
  },

  checkScrollForTransparentNavbar: debounce(function() {
    if ($(document).scrollTop() > scroll_distance) {
      if (transparent) {
        transparent = false;
        $('.navbar[color-on-scroll]').removeClass('navbar-transparent');
      }
    } else {
      if (!transparent) {
        transparent = true;
        $('.navbar[color-on-scroll]').addClass('navbar-transparent');
      }
    }
  }, 17),

  initNavbarImage: function() {
    var $navbar = $('.navbar').find('.navbar-translate').siblings('.navbar-collapse');
    var background_image = $navbar.data('nav-image');

    if (background_image != undefined) {
      if ($(window).width() < 991 || $('body').hasClass('burger-menu')) {
        $navbar.css('background', "url('" + background_image + "')")
          .removeAttr('data-nav-image')
          .css('background-size', "cover")
          .addClass('has-image');
      } else {
        $navbar.css('background', "")
          .attr('data-nav-image', '' + background_image + '')
          .css('background-size', "")
          .removeClass('has-image');
      }
    }
  },

  initSliders: function() {
    // Sliders for demo purpose in refine cards section
    var slider = document.getElementById('sliderRegular');

    noUiSlider.create(slider, {
      start: 40,
      connect: [true, false],
      range: {
        min: 0,
        max: 100
      }
    });

    var slider2 = document.getElementById('sliderDouble');

    noUiSlider.create(slider2, {
      start: [20, 60],
      connect: true,
      range: {
        min: 0,
        max: 100
      }
    });
  },

  checkScrollForParallax: debounce(function() {

    oVal = ($(window).scrollTop() / 3);
    big_image.css({
      'transform': 'translate3d(0,' + oVal + 'px,0)',
      '-webkit-transform': 'translate3d(0,' + oVal + 'px,0)',
      '-ms-transform': 'translate3d(0,' + oVal + 'px,0)',
      '-o-transform': 'translate3d(0,' + oVal + 'px,0)'
    });

  }, 6),

  initContactUsMap: function() {
    var myLatlng = new google.maps.LatLng(40.748817, -73.985428);
    var mapOptions = {
      zoom: 13,
      center: myLatlng,
      scrollwheel: false, //we disable de scroll over the map, it is a really annoing when you scroll through page
      styles: [{
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [{
          "color": "#e9e9e9"
        }, {
          "lightness": 17
        }]
      }, {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [{
          "color": "#f5f5f5"
        }, {
          "lightness": 20
        }]
      }, {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [{
          "color": "#ffffff"
        }, {
          "lightness": 17
        }]
      }, {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [{
          "color": "#ffffff"
        }, {
          "lightness": 29
        }, {
          "weight": 0.2
        }]
      }, {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [{
          "color": "#ffffff"
        }, {
          "lightness": 18
        }]
      }, {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [{
          "color": "#ffffff"
        }, {
          "lightness": 16
        }]
      }, {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [{
          "color": "#f5f5f5"
        }, {
          "lightness": 21
        }]
      }, {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [{
          "color": "#dedede"
        }, {
          "lightness": 21
        }]
      }, {
        "elementType": "labels.text.stroke",
        "stylers": [{
          "visibility": "on"
        }, {
          "color": "#ffffff"
        }, {
          "lightness": 16
        }]
      }, {
        "elementType": "labels.text.fill",
        "stylers": [{
          "saturation": 36
        }, {
          "color": "#333333"
        }, {
          "lightness": 40
        }]
      }, {
        "elementType": "labels.icon",
        "stylers": [{
          "visibility": "off"
        }]
      }, {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [{
          "color": "#f2f2f2"
        }, {
          "lightness": 19
        }]
      }, {
        "featureType": "administrative",
        "elementType": "geometry.fill",
        "stylers": [{
          "color": "#fefefe"
        }, {
          "lightness": 20
        }]
      }, {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [{
          "color": "#fefefe"
        }, {
          "lightness": 17
        }, {
          "weight": 1.2
        }]
      }]
    };

    var map = new google.maps.Map(document.getElementById("contactUsMap"), mapOptions);

    var marker = new google.maps.Marker({
      position: myLatlng,
      title: "Hello World!"
    });

    // To add the marker to the map, call setMap();
    marker.setMap(map);
  },


  initContactUs2Map: function() {
    var myLatlng = new google.maps.LatLng(40.748817, -73.985428);
    var mapOptions = {
      zoom: 13,
      center: myLatlng,
      scrollwheel: false, //we disable de scroll over the map, it is a really annoing when you scroll through page
      styles: [{
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [{
          "color": "#e9e9e9"
        }, {
          "lightness": 17
        }]
      }, {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [{
          "color": "#f5f5f5"
        }, {
          "lightness": 20
        }]
      }, {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [{
          "color": "#ffffff"
        }, {
          "lightness": 17
        }]
      }, {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [{
          "color": "#ffffff"
        }, {
          "lightness": 29
        }, {
          "weight": 0.2
        }]
      }, {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [{
          "color": "#ffffff"
        }, {
          "lightness": 18
        }]
      }, {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [{
          "color": "#ffffff"
        }, {
          "lightness": 16
        }]
      }, {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [{
          "color": "#f5f5f5"
        }, {
          "lightness": 21
        }]
      }, {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [{
          "color": "#dedede"
        }, {
          "lightness": 21
        }]
      }, {
        "elementType": "labels.text.stroke",
        "stylers": [{
          "visibility": "on"
        }, {
          "color": "#ffffff"
        }, {
          "lightness": 16
        }]
      }, {
        "elementType": "labels.text.fill",
        "stylers": [{
          "saturation": 36
        }, {
          "color": "#333333"
        }, {
          "lightness": 40
        }]
      }, {
        "elementType": "labels.icon",
        "stylers": [{
          "visibility": "off"
        }]
      }, {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [{
          "color": "#f2f2f2"
        }, {
          "lightness": 19
        }]
      }, {
        "featureType": "administrative",
        "elementType": "geometry.fill",
        "stylers": [{
          "color": "#fefefe"
        }, {
          "lightness": 20
        }]
      }, {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [{
          "color": "#fefefe"
        }, {
          "lightness": 17
        }, {
          "weight": 1.2
        }]
      }]
    };

    var map = new google.maps.Map(document.getElementById("contactUs2Map"), mapOptions);

    var marker = new google.maps.Marker({
      position: myLatlng,
      title: "Hello World!"
    });

    // To add the marker to the map, call setMap();
    marker.setMap(map);
  }
}

// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.

function debounce(func, wait, immediate) {
  var timeout;
  return function() {
    var context = this,
      args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    }, wait);
    if (immediate && !timeout) func.apply(context, args);
  };
};

;
/*!
  * Stickyfill – `position: sticky` polyfill
  * v. 2.1.0 | https://github.com/wilddeer/stickyfill
  * MIT License
  */
!function(a,b){"use strict";function c(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function d(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])}function e(a){return parseFloat(a)||0}function f(a){for(var b=0;a;)b+=a.offsetTop,a=a.offsetParent;return b}function g(){function c(){a.pageXOffset!=m.left?(m.top=a.pageYOffset,m.left=a.pageXOffset,p.refreshAll()):a.pageYOffset!=m.top&&(m.top=a.pageYOffset,m.left=a.pageXOffset,n.forEach(function(a){return a._recalcPosition()}))}function d(){f=setInterval(function(){n.forEach(function(a){return a._fastCheck()})},500)}function e(){clearInterval(f)}if(!k){k=!0,c(),a.addEventListener("scroll",c),a.addEventListener("resize",p.refreshAll),a.addEventListener("orientationchange",p.refreshAll);var f=void 0,g=void 0,h=void 0;"hidden"in b?(g="hidden",h="visibilitychange"):"webkitHidden"in b&&(g="webkitHidden",h="webkitvisibilitychange"),h?(b[g]||d(),b.addEventListener(h,function(){b[g]?e():d()})):d()}}var h=function(){function a(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),i=!1,j="undefined"!=typeof a;j&&a.getComputedStyle?!function(){var a=b.createElement("div");["","-webkit-","-moz-","-ms-"].some(function(b){try{a.style.position=b+"sticky"}catch(a){}return""!=a.style.position})&&(i=!0)}():i=!0;var k=!1,l="undefined"!=typeof ShadowRoot,m={top:null,left:null},n=[],o=function(){function g(a){if(c(this,g),!(a instanceof HTMLElement))throw new Error("First argument must be HTMLElement");if(n.some(function(b){return b._node===a}))throw new Error("Stickyfill is already applied to this node");this._node=a,this._stickyMode=null,this._active=!1,n.push(this),this.refresh()}return h(g,[{key:"refresh",value:function(){if(!i&&!this._removed){this._active&&this._deactivate();var c=this._node,g=getComputedStyle(c),h={position:g.position,top:g.top,display:g.display,marginTop:g.marginTop,marginBottom:g.marginBottom,marginLeft:g.marginLeft,marginRight:g.marginRight,cssFloat:g.cssFloat};if(!isNaN(parseFloat(h.top))&&"table-cell"!=h.display&&"none"!=h.display){this._active=!0;var j=c.style.position;"sticky"!=g.position&&"-webkit-sticky"!=g.position||(c.style.position="static");var k=c.parentNode,m=l&&k instanceof ShadowRoot?k.host:k,n=c.getBoundingClientRect(),o=m.getBoundingClientRect(),p=getComputedStyle(m);this._parent={node:m,styles:{position:m.style.position},offsetHeight:m.offsetHeight},this._offsetToWindow={left:n.left,right:b.documentElement.clientWidth-n.right},this._offsetToParent={top:n.top-o.top-e(p.borderTopWidth),left:n.left-o.left-e(p.borderLeftWidth),right:-n.right+o.right-e(p.borderRightWidth)},this._styles={position:j,top:c.style.top,bottom:c.style.bottom,left:c.style.left,right:c.style.right,width:c.style.width,marginTop:c.style.marginTop,marginLeft:c.style.marginLeft,marginRight:c.style.marginRight};var q=e(h.top);this._limits={start:n.top+a.pageYOffset-q,end:o.top+a.pageYOffset+m.offsetHeight-e(p.borderBottomWidth)-c.offsetHeight-q-e(h.marginBottom)};var r=p.position;"absolute"!=r&&"relative"!=r&&(m.style.position="relative"),this._recalcPosition();var s=this._clone={};s.node=b.createElement("div"),d(s.node.style,{width:n.right-n.left+"px",height:n.bottom-n.top+"px",marginTop:h.marginTop,marginBottom:h.marginBottom,marginLeft:h.marginLeft,marginRight:h.marginRight,cssFloat:h.cssFloat,padding:0,border:0,borderSpacing:0,fontSize:"1em",position:"static"}),k.insertBefore(s.node,c),s.docOffsetTop=f(s.node)}}}},{key:"_recalcPosition",value:function(){if(this._active&&!this._removed){var a=m.top<=this._limits.start?"start":m.top>=this._limits.end?"end":"middle";if(this._stickyMode!=a){switch(a){case"start":d(this._node.style,{position:"absolute",left:this._offsetToParent.left+"px",right:this._offsetToParent.right+"px",top:this._offsetToParent.top+"px",bottom:"auto",width:"auto",marginLeft:0,marginRight:0,marginTop:0});break;case"middle":d(this._node.style,{position:"fixed",left:this._offsetToWindow.left+"px",right:this._offsetToWindow.right+"px",top:this._styles.top,bottom:"auto",width:"auto",marginLeft:0,marginRight:0,marginTop:0});break;case"end":d(this._node.style,{position:"absolute",left:this._offsetToParent.left+"px",right:this._offsetToParent.right+"px",top:"auto",bottom:0,width:"auto",marginLeft:0,marginRight:0})}this._stickyMode=a}}}},{key:"_fastCheck",value:function(){this._active&&!this._removed&&(Math.abs(f(this._clone.node)-this._clone.docOffsetTop)>1||Math.abs(this._parent.node.offsetHeight-this._parent.offsetHeight)>1)&&this.refresh()}},{key:"_deactivate",value:function(){var a=this;this._active&&!this._removed&&(this._clone.node.parentNode.removeChild(this._clone.node),delete this._clone,d(this._node.style,this._styles),delete this._styles,n.some(function(b){return b!==a&&b._parent&&b._parent.node===a._parent.node})||d(this._parent.node.style,this._parent.styles),delete this._parent,this._stickyMode=null,this._active=!1,delete this._offsetToWindow,delete this._offsetToParent,delete this._limits)}},{key:"remove",value:function(){var a=this;this._deactivate(),n.some(function(b,c){if(b._node===a._node)return n.splice(c,1),!0}),this._removed=!0}}]),g}(),p={stickies:n,Sticky:o,forceSticky:function(){i=!1,g(),this.refreshAll()},addOne:function(a){if(!(a instanceof HTMLElement)){if(!a.length||!a[0])return;a=a[0]}for(var b=0;b<n.length;b++)if(n[b]._node===a)return n[b];return new o(a)},add:function(a){if(a instanceof HTMLElement&&(a=[a]),a.length){for(var b=[],c=function(c){var d=a[c];return d instanceof HTMLElement?n.some(function(a){if(a._node===d)return b.push(a),!0})?"continue":void b.push(new o(d)):(b.push(void 0),"continue")},d=0;d<a.length;d++){c(d)}return b}},refreshAll:function(){n.forEach(function(a){return a.refresh()})},removeOne:function(a){if(!(a instanceof HTMLElement)){if(!a.length||!a[0])return;a=a[0]}n.some(function(b){if(b._node===a)return b.remove(),!0})},remove:function(a){if(a instanceof HTMLElement&&(a=[a]),a.length)for(var b=function(b){var c=a[b];n.some(function(a){if(a._node===c)return a.remove(),!0})},c=0;c<a.length;c++)b(c)},removeAll:function(){for(;n.length;)n[0].remove()}};i||g(),"undefined"!=typeof module&&module.exports?module.exports=p:j&&(a.Stickyfill=p)}(window,document);;
/* ========================================================================
 * bootstrap-switch - v3.3.4
 * http://www.bootstrap-switch.org
 * ========================================================================
 * Copyright 2012-2013 Mattia Larentis
 *
 * ========================================================================
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================================
 */

class BootstrapSwitch {
  constructor(element, options = {}) {
    this.$element = $(element)
    this.options = $.extend({},
      $.fn.bootstrapSwitch.defaults,
      this._getElementOptions(),
      options
    )
    this.prevOptions = {}
    this.$wrapper = $('<div>', {
      class: () => {
        const classes = []
        classes.push(this.options.state ? 'on' : 'off')
        if (this.options.size) {
          classes.push(this.options.size)
        }
        if (this.options.disabled) {
          classes.push('disabled')
        }
        if (this.options.readonly) {
          classes.push('readonly')
        }
        if (this.options.indeterminate) {
          classes.push('indeterminate')
        }
        if (this.options.inverse) {
          classes.push('inverse')
        }
        if (this.$element.attr('id')) {
          classes.push(`id-${this.$element.attr('id')}`)
        }
        return classes
          .map(this._getClass.bind(this))
          .concat([this.options.baseClass], this._getClasses(this.options.wrapperClass))
          .join(' ')
      }
    })
    this.$container = $('<div>', {
      class: this._getClass('container')
    })
    this.$on = $('<span>', {
      html: this.options.onText,
      class: `${this._getClass('handle-on')} ${this._getClass(this.options.onColor)}`
    })
    this.$off = $('<span>', {
      html: this.options.offText,
      class: `${this._getClass('handle-off')} ${this._getClass(this.options.offColor)}`
    })
    this.$label = $('<span>', {
      html: this.options.labelText,
      class: this._getClass('label')
    })

    this.$element.on('init.bootstrapSwitch', this.options.onInit.bind(this, element))
    this.$element.on('switchChange.bootstrapSwitch', (...args) => {
      if (this.options.onSwitchChange.apply(element, args) === false) {
        if (this.$element.is(':radio')) {
          $(`[name="${this.$element.attr('name')}"]`).trigger('previousState.bootstrapSwitch', true)
        } else {
          this.$element.trigger('previousState.bootstrapSwitch', true)
        }
      }
    })

    this.$container = this.$element.wrap(this.$container).parent()
    this.$wrapper = this.$container.wrap(this.$wrapper).parent()
    this.$element
      .before(this.options.inverse ? this.$off : this.$on)
      .before(this.$label)
      .before(this.options.inverse ? this.$on : this.$off)

    if (this.options.indeterminate) {
      this.$element.prop('indeterminate', true)
    }

    this._init()
    this._elementHandlers()
    this._handleHandlers()
    this._labelHandlers()
    this._formHandler()
    this._externalLabelHandler()
    this.$element.trigger('init.bootstrapSwitch', this.options.state)
  }

  setPrevOptions() {
    this.prevOptions = { ...this.options
    }
  }

  state(value, skip) {
    if (typeof value === 'undefined') {
      return this.options.state
    }
    if (
      (this.options.disabled || this.options.readonly) ||
      (this.options.state && !this.options.radioAllOff && this.$element.is(':radio'))
    ) {
      return this.$element
    }
    if (this.$element.is(':radio')) {
      $(`[name="${this.$element.attr('name')}"]`).trigger('setPreviousOptions.bootstrapSwitch')
    } else {
      this.$element.trigger('setPreviousOptions.bootstrapSwitch')
    }
    if (this.options.indeterminate) {
      this.indeterminate(false)
    }
    this.$element
      .prop('checked', Boolean(value))
      .trigger('change.bootstrapSwitch', skip)
    return this.$element
  }

  toggleState(skip) {
    if (this.options.disabled || this.options.readonly) {
      return this.$element
    }
    if (this.options.indeterminate) {
      this.indeterminate(false)
      return this.state(true)
    } else {
      return this.$element.prop('checked', !this.options.state).trigger('change.bootstrapSwitch', skip)
    }
  }

  size(value) {
    if (typeof value === 'undefined') {
      return this.options.size
    }
    if (this.options.size != null) {
      this.$wrapper.removeClass(this._getClass(this.options.size))
    }
    if (value) {
      this.$wrapper.addClass(this._getClass(value))
    }
    this._width()
    this._containerPosition()
    this.options.size = value
    return this.$element
  }

  animate(value) {
    if (typeof value === 'undefined') {
      return this.options.animate
    }
    if (this.options.animate === Boolean(value)) {
      return this.$element
    }
    return this.toggleAnimate()
  }

  toggleAnimate() {
    this.options.animate = !this.options.animate
    this.$wrapper.toggleClass(this._getClass('animate'))
    return this.$element
  }

  disabled(value) {
    if (typeof value === 'undefined') {
      return this.options.disabled
    }
    if (this.options.disabled === Boolean(value)) {
      return this.$element
    }
    return this.toggleDisabled()
  }

  toggleDisabled() {
    this.options.disabled = !this.options.disabled
    this.$element.prop('disabled', this.options.disabled)
    this.$wrapper.toggleClass(this._getClass('disabled'))
    return this.$element
  }

  readonly(value) {
    if (typeof value === 'undefined') {
      return this.options.readonly
    }
    if (this.options.readonly === Boolean(value)) {
      return this.$element
    }
    return this.toggleReadonly()
  }

  toggleReadonly() {
    this.options.readonly = !this.options.readonly
    this.$element.prop('readonly', this.options.readonly)
    this.$wrapper.toggleClass(this._getClass('readonly'))
    return this.$element
  }

  indeterminate(value) {
    if (typeof value === 'undefined') {
      return this.options.indeterminate
    }
    if (this.options.indeterminate === Boolean(value)) {
      return this.$element
    }
    return this.toggleIndeterminate()
  }

  toggleIndeterminate() {
    this.options.indeterminate = !this.options.indeterminate
    this.$element.prop('indeterminate', this.options.indeterminate)
    this.$wrapper.toggleClass(this._getClass('indeterminate'))
    this._containerPosition()
    return this.$element
  }

  inverse(value) {
    if (typeof value === 'undefined') {
      return this.options.inverse
    }
    if (this.options.inverse === Boolean(value)) {
      return this.$element
    }
    return this.toggleInverse()
  }

  toggleInverse() {
    this.$wrapper.toggleClass(this._getClass('inverse'))
    const $on = this.$on.clone(true)
    const $off = this.$off.clone(true)
    this.$on.replaceWith($off)
    this.$off.replaceWith($on)
    this.$on = $off
    this.$off = $on
    this.options.inverse = !this.options.inverse
    return this.$element
  }

  onColor(value) {
    if (typeof value === 'undefined') {
      return this.options.onColor
    }
    if (this.options.onColor) {
      this.$on.removeClass(this._getClass(this.options.onColor))
    }
    this.$on.addClass(this._getClass(value))
    this.options.onColor = value
    return this.$element
  }

  offColor(value) {
    if (typeof value === 'undefined') {
      return this.options.offColor
    }
    if (this.options.offColor) {
      this.$off.removeClass(this._getClass(this.options.offColor))
    }
    this.$off.addClass(this._getClass(value))
    this.options.offColor = value
    return this.$element
  }

  onText(value) {
    if (typeof value === 'undefined') {
      return this.options.onText
    }
    this.$on.html(value)
    this._width()
    this._containerPosition()
    this.options.onText = value
    return this.$element
  }

  offText(value) {
    if (typeof value === 'undefined') {
      return this.options.offText
    }
    this.$off.html(value)
    this._width()
    this._containerPosition()
    this.options.offText = value
    return this.$element
  }

  labelText(value) {
    if (typeof value === 'undefined') {
      return this.options.labelText
    }
    this.$label.html(value)
    this._width()
    this.options.labelText = value
    return this.$element
  }

  handleWidth(value) {
    if (typeof value === 'undefined') {
      return this.options.handleWidth
    }
    this.options.handleWidth = value
    this._width()
    this._containerPosition()
    return this.$element
  }

  labelWidth(value) {
    if (typeof value === 'undefined') {
      return this.options.labelWidth
    }
    this.options.labelWidth = value
    this._width()
    this._containerPosition()
    return this.$element
  }

  baseClass(value) {
    return this.options.baseClass
  }

  wrapperClass(value) {
    if (typeof value === 'undefined') {
      return this.options.wrapperClass
    }
    if (!value) {
      value = $.fn.bootstrapSwitch.defaults.wrapperClass
    }
    this.$wrapper.removeClass(this._getClasses(this.options.wrapperClass).join(' '))
    this.$wrapper.addClass(this._getClasses(value).join(' '))
    this.options.wrapperClass = value
    return this.$element
  }

  radioAllOff(value) {
    if (typeof value === 'undefined') {
      return this.options.radioAllOff
    }
    const val = Boolean(value)
    if (this.options.radioAllOff === val) {
      return this.$element
    }
    this.options.radioAllOff = val
    return this.$element
  }

  onInit(value) {
    if (typeof value === 'undefined') {
      return this.options.onInit
    }
    if (!value) {
      value = $.fn.bootstrapSwitch.defaults.onInit
    }
    this.options.onInit = value
    return this.$element
  }

  onSwitchChange(value) {
    if (typeof value === 'undefined') {
      return this.options.onSwitchChange
    }
    if (!value) {
      value = $.fn.bootstrapSwitch.defaults.onSwitchChange
    }
    this.options.onSwitchChange = value
    return this.$element
  }

  destroy() {
    const $form = this.$element.closest('form')
    if ($form.length) {
      $form.off('reset.bootstrapSwitch').removeData('bootstrap-switch')
    }
    this.$container
      .children()
      .not(this.$element)
      .remove()
    this.$element
      .unwrap()
      .unwrap()
      .off('.bootstrapSwitch')
      .removeData('bootstrap-switch')
    return this.$element
  }

  _getElementOptions() {
    return {
      state: this.$element.is(':checked'),
      size: this.$element.data('size'),
      animate: this.$element.data('animate'),
      disabled: this.$element.is(':disabled'),
      readonly: this.$element.is('[readonly]'),
      indeterminate: this.$element.data('indeterminate'),
      inverse: this.$element.data('inverse'),
      radioAllOff: this.$element.data('radio-all-off'),
      onColor: this.$element.data('on-color'),
      offColor: this.$element.data('off-color'),
      onText: this.$element.data('on-text'),
      offText: this.$element.data('off-text'),
      labelText: this.$element.data('label-text'),
      handleWidth: this.$element.data('handle-width'),
      labelWidth: this.$element.data('label-width'),
      baseClass: this.$element.data('base-class'),
      wrapperClass: this.$element.data('wrapper-class')
    }
  }

  _width() {
    const $handles = this.$on
      .add(this.$off)
      .add(this.$label)
      .css('width', '')
    const handleWidth = this.options.handleWidth === 'auto' ?
      Math.round(Math.max(this.$on.width(), this.$off.width())) :
      this.options.handleWidth
    $handles.width(handleWidth)
    this.$label.width((index, width) => {
      if (this.options.labelWidth !== 'auto') {
        return this.options.labelWidth
      }
      if (width < handleWidth) {
        return handleWidth
      }
      return width
    })
    this._handleWidth = this.$on.outerWidth()
    this._labelWidth = this.$label.outerWidth()
    this.$container.width((this._handleWidth * 2) + this._labelWidth)
    return this.$wrapper.width(this._handleWidth + this._labelWidth)
  }

  _containerPosition(state = this.options.state, callback) {
    this.$container.css('margin-left', () => {
      const values = [0, `-${this._handleWidth}px`]
      if (this.options.indeterminate) {
        return `-${this._handleWidth / 2}px`
      }
      if (state) {
        if (this.options.inverse) {
          return values[1]
        } else {
          return values[0]
        }
      } else {
        if (this.options.inverse) {
          return values[0]
        } else {
          return values[1]
        }
      }
    })
  }

  _init() {
    const init = () => {
      this.setPrevOptions()
      this._width()
      this._containerPosition()
      setTimeout(() => {
        if (this.options.animate) {
          return this.$wrapper.addClass(this._getClass('animate'))
        }
      }, 50)
    }
    if (this.$wrapper.is(':visible')) {
      init()
      return
    }
    const initInterval = window.setInterval(() => {
      if (this.$wrapper.is(':visible')) {
        init()
        return window.clearInterval(initInterval)
      }
    }, 50)
  }

  _elementHandlers() {
    return this.$element.on({
      'setPreviousOptions.bootstrapSwitch': this.setPrevOptions.bind(this),

      'previousState.bootstrapSwitch': () => {
        this.options = this.prevOptions
        if (this.options.indeterminate) {
          this.$wrapper.addClass(this._getClass('indeterminate'))
        }
        this.$element
          .prop('checked', this.options.state)
          .trigger('change.bootstrapSwitch', true)
      },

      'change.bootstrapSwitch': (event, skip) => {
        event.preventDefault()
        event.stopImmediatePropagation()
        const state = this.$element.is(':checked')
        this._containerPosition(state)
        if (state === this.options.state) {
          return
        }
        this.options.state = state
        this.$wrapper
          .toggleClass(this._getClass('off'))
          .toggleClass(this._getClass('on'))
        if (!skip) {
          if (this.$element.is(':radio')) {
            $(`[name="${this.$element.attr('name')}"]`)
              .not(this.$element)
              .prop('checked', false)
              .trigger('change.bootstrapSwitch', true)
          }
          this.$element.trigger('switchChange.bootstrapSwitch', [state])
        }
      },

      'focus.bootstrapSwitch': event => {
        event.preventDefault()
        this.$wrapper.addClass(this._getClass('focused'))
      },

      'blur.bootstrapSwitch': event => {
        event.preventDefault()
        this.$wrapper.removeClass(this._getClass('focused'))
      },

      'keydown.bootstrapSwitch': event => {
        if (!event.which || this.options.disabled || this.options.readonly) {
          return
        }
        if (event.which === 37 || event.which === 39) {
          event.preventDefault()
          event.stopImmediatePropagation()
          this.state(event.which === 39)
        }
      }
    })
  }

  _handleHandlers() {
    this.$on.on('click.bootstrapSwitch', event => {
      event.preventDefault()
      event.stopPropagation()
      this.state(false)
      return this.$element.trigger('focus.bootstrapSwitch')
    })
    return this.$off.on('click.bootstrapSwitch', event => {
      event.preventDefault()
      event.stopPropagation()
      this.state(true)
      return this.$element.trigger('focus.bootstrapSwitch')
    })
  }

  _labelHandlers() {
    const handlers = {
      click(event) {
        event.stopPropagation()
      },

      'mousedown.bootstrapSwitch touchstart.bootstrapSwitch': event => {
        if (this._dragStart || this.options.disabled || this.options.readonly) {
          return
        }
        event.preventDefault()
        event.stopPropagation()
        this._dragStart = (event.pageX || event.originalEvent.touches[0].pageX) - parseInt(this.$container.css('margin-left'), 10)
        if (this.options.animate) {
          this.$wrapper.removeClass(this._getClass('animate'))
        }
        this.$element.trigger('focus.bootstrapSwitch')
      },

      'mousemove.bootstrapSwitch touchmove.bootstrapSwitch': event => {
        if (this._dragStart == null) {
          return
        }
        const difference = (event.pageX || event.originalEvent.touches[0].pageX) - this._dragStart
        event.preventDefault()
        if (difference < -this._handleWidth || difference > 0) {
          return
        }
        this._dragEnd = difference
        this.$container.css('margin-left', `${this._dragEnd}px`)
      },

      'mouseup.bootstrapSwitch touchend.bootstrapSwitch': event => {
        if (!this._dragStart) {
          return
        }
        event.preventDefault()
        if (this.options.animate) {
          this.$wrapper.addClass(this._getClass('animate'))
        }
        if (this._dragEnd) {
          const state = this._dragEnd > -(this._handleWidth / 2)
          this._dragEnd = false
          this.state(this.options.inverse ? !state : state)
        } else {
          this.state(!this.options.state)
        }
        this._dragStart = false
      },

      'mouseleave.bootstrapSwitch': () => {
        this.$label.trigger('mouseup.bootstrapSwitch')
      }
    }
    this.$label.on(handlers)
  }

  _externalLabelHandler() {
    const $externalLabel = this.$element.closest('label')
    $externalLabel.on('click', event => {
      event.preventDefault()
      event.stopImmediatePropagation()
      if (event.target === $externalLabel[0]) {
        this.toggleState()
      }
    })
  }

  _formHandler() {
    const $form = this.$element.closest('form')
    if ($form.data('bootstrap-switch')) {
      return
    }
    $form
      .on('reset.bootstrapSwitch', () => {
        window.setTimeout(() => {
          $form.find('input')
            .filter(function() {
              return $(this).data('bootstrap-switch')
            })
            .each(function() {
              return $(this).bootstrapSwitch('state', this.checked)
            })
        }, 1)
      })
      .data('bootstrap-switch', true)
  }

  