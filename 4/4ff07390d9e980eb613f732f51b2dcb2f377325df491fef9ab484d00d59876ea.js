$(function() {
  var main = ".container300right__main";
  var sidebar = ".container300right__sidebar";
  var main_height = $(main).height();
  var sidebar_height = $(sidebar).height();
  if (sidebar_height > main_height) {
    $(main).height(sidebar_height);
  }

  var main = ".container300left__main";
  var sidebar = ".container300left__sidebar";
  var main_height = $(main).height();
  var sidebar_height = $(sidebar).height();
  if (sidebar_height > main_height) {
    $(main).height(sidebar_height);
  }

  // Hide Header on on scroll down
  var didScroll;
  var lastScrollTop = 0;
  var delta = 5;
  var navbarHeight = $('header').outerHeight();

  $(window).on('scroll', function(event) {
    didScroll = true;
  });

  setInterval(function() {
    if (didScroll) {
      hasScrolled();
      didScroll = false;
    }
  }, 250);

  function hasScrolled() {
    var st = $(this).scrollTop();

    // Make sure they scroll more than delta
    if (Math.abs(lastScrollTop - st) <= delta) {
      return;
    }

    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
      // Scroll Down
      $('header').removeClass('nav-down').addClass('nav-up');
    } else {
      // Scroll Up
      if(st + $(window).height() < $(document).height()) {
          $('header').removeClass('nav-up').addClass('nav-down');
      }
    }

    lastScrollTop = st;
  }

  $('.show--subheader').on('click', function(e) {
    if ($('#navigation--subheader').is(":visible")) {
      $('#navigation--subheader').hide();
      $('#siteheader').css("height", "77px");
      $('.main').css("margin-top", "77px");
    } else {
      $('#navigation--subheader').show();
      $('#siteheader').css("height", "105px");
      $('.main').css("margin-top", "105px");
    }
  });

  $(window).on('scroll', function(e) {
    var $el = $('.fixedElement');
    var isPositionFixed = ($el.css('position') == 'fixed');
    if ($(this).scrollTop() > 200 && !isPositionFixed){
      $el.css({'position': 'fixed', 'top': '0px'});
    }
    if ($(this).scrollTop() < 200 && isPositionFixed){
      $el.css({'position': 'static', 'top': '0px'});
    }
  });

  // ----- move cursor to end of input
  $(".ask-prefill").val("What's the best ").focus().val("What are the best ");

  $(".pagefilter__item").on('click', function(){
    var input = "#"+$(this).data("target");
    if ($(this).hasClass("pagefilter__item--selected")) {
      $(this).removeClass("pagefilter__item--selected");
      $(input).val(0);
    } else {
      $(this).addClass("pagefilter__item--selected");
      $(input).val(1);
    }
  });

  $(".boxselect-toggle").on('click', function(){
    var div = "#"+$(this).attr("name");
    if ($(div).is(":visible")) {
      $(div).fadeOut(50);
    } else {
      $(div).fadeIn(50);
    }
  });

  $(".boxselect-chooser").on('click', function(){
    var menu = "#"+$(this).attr("name");
    var label = "#"+$(this).data("label");
    var slug = $(this).data("slug");
    var name = $(this).data("name");
    var input = "#"+$(this).data("input");

    $(label).html(name);
    $(input).val(slug);

  });

  $(".toppromos-searchbox").on('keypress', function(event){
    if (event.which == 13) {
      var term = $(this).val().replace(' ','+');
      var url = BASE_URI + "/promo-codes/search="+term;
      window.location.href = url;
    }
  });

  $(".link-toggle").on('click', function(){
    var input = "#"+$(this).attr("name");

    if ($(input).val() == 0) {
      $(this).addClass("link-toggle-on");
      $(input).val(1);
    } else {
      $(this).removeClass("link-toggle-on");
      $(input).val(0);
    }
  });

  new Clipboard('.clipboard');

  // autocomplete

  $('.lu__categories--fill').autocomplete({
    source: '/lookup-fill/categories/',
    minLength: 1,
    select: function(event, ui) {
      var id = ui.item.id;
      var input = '#'+$(this).data('input');
      $(input).val(id);
    }
  });

  $('.lu__deals--jump').autocomplete({
    source: '/lookup-jump/deals/',
    minLength: 1,
    select: function(event, ui) {
      var id = ui.item.id;
      var url = ui.item.url;
      window.location.href = url;
    }
  });

/*
  $('.lu--yesno--jump').autocomplete({
    source: '/lookup-jump/yesno-criteria/',
    minLength: 1,
    select: function(event, ui) {
      var url = ui.item.url + '&' + $(this).data('criteria-id');
      var id = ui.item.id;
      var url = ui.item.url;
      window.location.href = url;
    }
  });

  $('.lu--yesno--jump').each(function() {
    var $input = $(this);
    $input.autocomplete({
      source: function(request, response) {
        $.get('/lookup-jump/yesno-criteria/' + $input.data('criteria-id') + '/', { term: request.term }, function(data) {
          response(data);
        }, 'json');
      },
      minLength: 1,
      select: function(event, ui) {
        var url = ui.item.url;
        window.location.href = url;
      }
    });
  });
*/

  $('.lu--yesno--jump').each(function() {
    var $input = $(this);
    $input.autocomplete({
      source: '/lookup-jump/yesno-criteria/' + $input.data('criteria-id') + '/',
      minLength: 1,
      select: function(event, ui) {
        var url = ui.item.url;
        window.location.href = url;
      }
    });
  });

  $('.lu__all--jump').autocomplete({
    source: '/lookup-jump/all/',
    minLength: 1,
    select: function(event, ui) {
      var url = ui.item.url;
      if (window.dataLayer) {
        dataLayer.push({
          event: 'GAEvent',
          eventCategory: 'SiteSearch',
          eventAction: 'HomeAndMobile',
          eventLabel: ui.item.label,
          eventValue: undefined,
          eventNI: false,
          eventCallback: function() {
            window.location.href = url;
          }
        });
      } else {
        window.location.href = url;
      }
    }
  });

  $('.lu__merchants--jump').autocomplete({
    source: '/lookup-jump/merchants/',
    minLength: 1,
    select: function(event, ui) {
      var url = ui.item.url;
      var navtype = $(this).data("navtype");
      var first_slug = $(this).data("slug");
      var second_slug = $(this).data("slug2");
      if (navtype == 'rate') {
        var slug = ui.item.slug;
        url = BASE_URI + '/rate/'+slug+'/';
      } else if (navtype == 'ask') {
        var slug = ui.item.slug;
        url = BASE_URI + '/ask/review/brand/'+slug+'/';
      } else if (navtype == 'ask-compare-1') {
        var slug = ui.item.slug;
        url = BASE_URI + '/ask/compare/brand/'+slug+'/';
      } else if (navtype == 'ask-compare-2') {
        var slug = ui.item.slug;
        url = BASE_URI + '/ask/compare/brand/'+first_slug+'/'+slug+'/';
      } else if (navtype == 'ask-compare-3') {
        var slug = ui.item.slug;
        url = BASE_URI + '/ask/compare/brand/'+first_slug+'/'+second_slug+'/'+slug+'/';
      } else if (navtype == 'verify-brand') {
        var slug = ui.item.slug;
        url = BASE_URI + '/verify-brand-affiliation/'+slug+'/';
      } else if (navtype == 'promo-codes') {
        url = url + '/promo-codes/';
      }
      window.location.href = url;
    }
  });

  $('.lu__products--jump').autocomplete({
    source: '/lookup-jump/products/',
    minLength: 1,
    select: function(event, ui) {
      var url = ui.item.url;
      var navtype = $(this).data("navtype");
      var first_slug = $(this).data("slug");
      var second_slug = $(this).data("slug2");
      if (navtype == 'rate') {
        var slug = ui.item.slug;
        url = BASE_URI + '/rate/'+slug+'/';
      } else if (navtype == 'ask') {
        var slug = ui.item.slug;
        url = BASE_URI + '/ask/review/product/'+slug+'/';
      } else if (navtype == 'ask-compare-1') {
        var slug = ui.item.slug;
        url = BASE_URI + '/ask/compare/product/'+slug+'/';
      } else if (navtype == 'ask-compare-2') {
        var slug = ui.item.slug;
        url = BASE_URI + '/ask/compare/product/'+first_slug+'/'+slug+'/';
      } else if (navtype == 'ask-compare-3') {
        var slug = ui.item.slug;
        url = BASE_URI + '/ask/compare/product/'+first_slug+'/'+second_slug+'/'+slug+'/';
      } else if (navtype == 'deals') {
        url = url + 'deals/';
      }
      window.location.href = url;
    }
  });

  $('.lu__categories--jump').autocomplete({
    source: '/lookup-jump/categories/',
    minLength: 1,
    select: function(event, ui) {
      var url = ui.item.url;
      var navtype = $(this).data("navtype");
      if (navtype == 'rate') {
        var slug = ui.item.slug;
        url = BASE_URI + '/rate/'+slug+'/';
      } else if (navtype == 'ask') {
        var slug = ui.item.slug;
        url = BASE_URI + '/ask/category/'+slug+'/';
      } else if (navtype == 'deals') {
        url = url + 'deals/';
      }
      window.location.href = url;
    }
  });

  $('.lu__products--fill').autocomplete({
    source: '/lookup-fill/products/',
    minLength: 1,
    select: function(event, ui) {
      var slug = ui.item.slug;
      var input = '#'+$(this).data('input');
      $(input).val(slug);
    }
  });

  $('.lu__mp--fill').autocomplete({
    source: '/lookup-fill/merchants-products/',
    minLength: 1,
    select: function(event, ui) {
      var slug = ui.item.slug;
      var input = '#'+$(this).data('input');
      $(input).val(slug);
    }
  });

  $('#lu__merchants--fill--custom').autocomplete({
    source: '/lookup-fill/merchants/custom-option/',
    minLength: 1,
    select: function(event, ui) {
      var slug = ui.item.slug;
      var custom = ui.item.custom;
      if (custom.length > 0) {
        $('#lu__merchant--name').val(custom);
      } else {
        $('#lu__merchant--slug').val(slug);
      }
    }
  });

  $('#lu__merchants--fill').autocomplete({
    source: '/lookup-fill/merchants/',
    minLength: 1,
    select: function(event, ui) {
      var slug = ui.item.slug;
      $('#lu__merchant--slug').val(slug);
    }
  });

  $('#lu__rate').autocomplete({
    source: '/lookup-jump/all/rate/',
    minLength: 1,
    select: function(event, ui) {
      var id = ui.item.id;
      var url = ui.item.url;
      window.location.href = url;
    }
  });

  $('#lu__top--main').autocomplete({
    source: '/lookup-jump/all/topnav/',
    minLength: 1,
    select: function(event, ui) {
      var url = ui.item.url;
      if (window.dataLayer) {
        dataLayer.push({
          event: 'GAEvent',
          eventCategory: 'SiteSearch',
          eventAction: 'TopMain',
          eventLabel: ui.item.label,
          eventValue: undefined,
          eventNI: false,
          eventCallback: function() {
            window.location.href = url;
          }
        });
      } else {
        window.location.href = url;
      }
    }
  });

  $('#lu__products--myproducts').autocomplete({
    source: '/lookup-jump/products/my-products/',
    minLength: 1,
    select: function(event, ui) {
      var id = ui.item.id;
      var url = BASE_URI + "/my-products/search/follow="+id+"/";
      window.location.href = url;
    }
  });

  $('#lu__merchants--mybrands').autocomplete({
    source: '/lookup-jump/merchants/my-brands/',
    minLength: 1,
    select: function(event, ui) {
      var id = ui.item.id;
      var url = BASE_URI + "/my-brands/search/follow="+id+"/";
      window.location.href = url;
    }
  });

  $('#lu__criteria--browsequestions').autocomplete({
    source: '/lookup-fill/criteria/browsequestions/',
    minLength: 1,
    select: function(event, ui) {
      var slug = ui.item.id;
      $('#lu__criteria--slug').val(slug);
    }
  });

  $('#features-store-lookup-2').autocomplete({
    source: '/features-store-lookup-2/',
    minLength: 1,
    select: function(event, ui) {
      var slug = ui.item.id;
      $('#features-store-slug').val(slug);
    }
  });

  $('#compare-top-lookup-1').autocomplete({
    source: '/search-lookup-compare/',
    minLength: 1,
    select: function(event, ui) {
      var slug = ui.item.id;
      $('#compare-merchant-1').val(slug);
    }
  });

  $('#compare-top-lookup-2').autocomplete({
    source: '/search-lookup-compare/',
    minLength: 1,
    select: function(event, ui) {
      var slug = ui.item.id;
      $('#compare-merchant-2').val(slug);
    }
  });

  $('#top10-lookup').autocomplete({
    source: '/top10-lookup/',
    minLength: 1,
    select: function(event, ui) {
      var id = ui.item.id;
      window.location.href = id;
    }
  });

  $('#alternatives-lookup').autocomplete({
    source: '/alternatives-lookup/',
    minLength: 1,
    select: function(event, ui) {
      var id = ui.item.id;
      window.location.href = id;
    }
  });

  $('#store-lookup').autocomplete({
    source: '/store-lookup/',
    minLength: 1,
    select: function(event, ui) {
      var id = ui.item.id;
      window.location.href = id;
    }
  });

  $('#merchant-lookup-toppromos').autocomplete({
    source: BASE_URI + '/merchant-lookup-by-slug/',
    minLength: 1,
    select: function(event, ui) {
      var id = BASE_URI + "/promo-codes/store="+ui.item.id;
      window.location.href = id;
    }
  });

  /* clickfilm */

  $(".clickfilm").on('click', function(){
    var id = $(this).data("id");
    var film__default = '#'+$(this).data("f1");
    var film__select = '#'+$(this).data("f2");
    var film__icon = '#'+$(this).data("f3");
    var flag = '#'+$(this).data("flag");
    var mincount = $(this).data("mincount");
    var button = '#'+$(this).data("button");
    var button__enabled = $(this).data("button")+'--enabled';
    var button__disabled = $(this).data("button")+'--disabled';
    var counter = '#'+$(this).data("counter");
    var counter_val = parseInt($(counter).val());
    if ($(film__select).is(":visible")) {
      /* unselect this option */
      $(film__select).hide();
      $(film__icon).hide();
      $(film__default).show();
      $(flag).val(0);
      counter_val--;
      $(counter).val(counter_val);
      if (counter_val < mincount) {
        $(button).removeClass(button__enabled).addClass(button__disabled).addAttr('disabled');
      }
    } else {
      /* select this option */
      $(film__select).show();
      $(film__icon).show();
      $(film__default).hide();
      $(flag).val(1);
      counter_val++;
      $(counter).val(counter_val);
      if (counter_val >= mincount) {
        $(button).addClass(button__enabled).removeClass(button__disabled).removeAttr('disabled');
      }
    }
  });

  /* appearif */

  $(".jsdoif").on('click', function(){
    var type = $(this).data("type");
    var counter = $(this).data("counter");
    var target = $(this).data("target");
    var value = $(this).data("value");
    var action = $(this).data("action");

    if (type == "counter") {
      var val = $(counter).val();
      if (val >= value) {
        if (action == "show") {
          $(target).show();
        }
      } else {
        if (action == "show") {
          $(target).hide();
        }
      }
    }
  });

  // copy sharing link

    $('.copy-url').on('click', function(){
    var copyInput = $("#"+$(this).data("target-input"));
    copyInput.select();
    copyInput.get(0).setSelectionRange(0, copyInput.val().length);
    try {
      document.execCommand('copy');
      $('#copy-url-confirm').fadeIn(100).delay(2000).fadeOut(200);
    } catch (err) {
      if (window.prompt) {
        window.prompt('Copy to clipboard: Ctrl C, Enter', copyInput.val());
      }
    }
    });

  $(".codepill").on('mouseenter', function() {
    var helperdiv = $("#codepill__helper--"+$(this).attr("name"));
    $(helperdiv).css('display','block');
    var helperdiv = $("#codepill__helper2--"+$(this).attr("name"));
    $(helperdiv).css('display','block');
  }).on('mouseleave', function() {
    var helperdiv = $("#codepill__helper--"+$(this).attr("name"));
    $(helperdiv).css('display','none');
    var helperdiv = $("#codepill__helper2--"+$(this).attr("name"));
    $(helperdiv).css('display','none');
  });

  // --- su incr

  $(".su-incr").on('click', function(){

    var type = "increment--su--click";
    var var1 = $(this).data('su-id');
    $.ajax({
      type: "GET",
      url: "/ajax/js-data.php",
      data: {
        type : type,
        var1 : var1,
      },
      datatype: 'html',
      success: function(html){
        var result = html;
      }
    });

  });


  // use code

  $('.use-code').on('click', function(){
    var inputId = $(this).attr("name").replace(/\./g, "__");
    var copyInput = $(`input[id$='${inputId}']`);
    copyInput.select();
    copyInput.get(0).setSelectionRange(0, copyInput.val().length);
    try {
      document.execCommand('copy');
    } catch (err) {
      if (window.prompt) {
        window.prompt('Copy to clipboard: Ctrl C, Enter', copyInput.val());
      }
    }
    var slug = $(this).attr("name");
    var url = BASE_URI + '/use-code/'+slug+'/';
    var stay = $(this).data("navigation") == "stay";
    var copyOnly = $(this).data("copyonly") == true;
    var sticky = $(this).data("sticky") == true;
    if (copyOnly) {
      $(this).addClass("codepill--copied");
      return;
    }
    window.open(url).focus();
    if (!sticky) {
      // handle navigation
      if (window.dataLayer) {
        dataLayer.push({
          event: 'GAEvent',
          eventCategory: 'CTA',
          eventAction: 'PromoButtonCode',
          eventLabel: slug,
          eventValue: undefined,
          eventNI: true,
          eventCallback: function() {
            if (!stay) {
                window.location.href = [location.protocol, '//', location.host, '/promo-codes/', slug, '/'].join('');
             }
          }
        });
      } else {
        if (!stay) {
          window.location.href = [location.protocol, '//', location.host, '/promo-codes/', slug, '/'].join('');
        }
      }
    } else if (window.dataLayer) {
      dataLayer.push({
        event: 'GAEvent',
        eventCategory: 'CTA',
        eventAction: 'PromoButtonStickyCode',
        eventLabel: slug,
        eventValue: undefined,
        eventNI: false,
        eventCallback: function() {
          if (!stay) {
            window.location.href = [location.protocol, '//', location.host, '/promo-codes/', slug, '/'].join('');
          }
        }
      });
    } else if (!stay) {
      window.location.href = [location.protocol, '//', location.host, '/promo-codes/', slug, '/'].join('');
    }
  });

  $('.use-code-product').on('click', function(){
    var inputId = $(this).data("input").replace(/\./g, "__");
    var copyInput = $(`input[id$='${inputId}']`);
    copyInput.select();
    copyInput.get(0).setSelectionRange(0, copyInput.val().length);
    try {
      document.execCommand('copy');
    } catch (err) {
      if (window.prompt) {
        window.prompt('Copy to clipboard: Ctrl C, Enter', copyInput.val());
      }
    }
    var url = $(this).data("url");
    window.open(url).focus();
    if (window.dataLayer) {
      dataLayer.push({
        event: 'GAEvent',
        eventCategory: 'CTA',
        eventAction: 'PromoButtonProductCode',
        eventLabel: url,
        eventValue: undefined,
        eventNI: false
      });
    }
  });

  $('.use-code-special').on('click', function(){
    var inputId = $(this).data("input").replace(/\./g, "__");
    var copyInput = $(`input[id$='${inputId}']`);
    copyInput.select();
    copyInput.get(0).setSelectionRange(0, copyInput.val().length);
    try {
      document.execCommand('copy');
    } catch (err) {
      if (window.prompt) {
        window.prompt('Copy to clipboard: Ctrl C, Enter', copyInput.val());
      }
    }
    var url = $(this).data("url");
    window.open(url).focus();
    if (window.dataLayer) {
      dataLayer.push({
        event: 'GAEvent',
        eventCategory: 'CTA',
        eventAction: 'PromoButtonKsticky',
        eventLabel: url,
        eventValue: undefined,
        eventNI: false
      });
    }
  });

  $('.use-sale').on('click', function(){
    var slug = $(this).attr("name");
    var sticky = $(this).data("sticky") == true;
    var special = $(this).data("special") == true;
    var is_default = $(this).data("is-default");
    var url = slug + "/";
    if (url.indexOf("http://") == 0 || url.indexOf("https://") == 0) {
        window.open(url, '_blank').focus();
    } else if (is_default == 1) {
        var merchant_slug = $(this).data("merchant-slug");
        window.open(BASE_URI + "/coupon-out/"+merchant_slug+"/", '_blank').focus();
    } else {
        window.open(BASE_URI + "/getcoupon/"+url, '_blank').focus();
    }
    if (special) {
      if (window.dataLayer) {
        dataLayer.push({
          event: 'GAEvent',
          eventCategory: 'CTA',
          eventAction: 'PromoButtonSpecial',
          eventLabel: slug,
          eventValue: undefined,
          eventNI: false
        });
      }
    } else if (!sticky) {
      if (window.dataLayer) {
        dataLayer.push({
          event: 'GAEvent',
          eventCategory: 'CTA',
          eventAction: 'PromoButtonSale',
          eventLabel: slug,
          eventValue: undefined,
          eventNI: false
        });
      }
    } else {
      if (window.dataLayer) {
        dataLayer.push({
          event: 'GAEvent',
          eventCategory: 'CTA',
          eventAction: 'PromoButtonSticky',
          eventLabel: slug,
          eventValue: undefined,
          eventNI: false
        });
      }
    }
  });

  $('.use-link').on('click', function(){
    var url = $(this).data("url");
    var flag = $(this).data("url-flag");
    if (flag) {
      window.open(BASE_URI + "/hyperlink/"+url+"/"+flag, '_blank').focus();
    } else {
      window.open(BASE_URI + "/hyperlink/"+url, '_blank').focus();
    }
    if (window.dataLayer) {
      dataLayer.push({
        event: 'GAEvent',
        eventCategory: 'CTA',
        eventAction: 'AffiliateLink',
        eventLabel: url,
        eventValue: undefined,
        eventNI: false
      });
    }
  });

  $('.use-sale-2').on('click', function(){
    var slug = $(this).attr("name");
    var url = slug+"/";
    window.open(url, '_blank').focus();
    if (window.dataLayer) {
      dataLayer.push({
        event: 'GAEvent',
        eventCategory: 'CTA',
        eventAction: 'PromoButtonFiller',
        eventLabel: url,
        eventValue: undefined,
        eventNI: false
      });
    }
  });

  // -- email subscribe
  $('.email--subscribe').on('click', function(){
    var target = "#"+$(this).data("target");
    var email = $(target).val();
    var mid = $(this).data("mid");
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    if (!email || email.length <= 2 || !emailReg.test(email)) {
      $(target).css('border-color', 'red').css('color', 'red');
    } else {
      $.ajax({
        type: "GET",
        url: "/ajax/js-data.php",
        data: {
          type : 'email--subscribe',
          var1 : email,
          var2 : mid
        },
        datatype: 'html',
        success: function(html){
          var result = html;
        }
      });
      $(this).val("Subscribed!");
      $('#email').hide();
    }
  });

  // code button hover

  $(".corner--animate").on('mouseenter', function() {
    var corner = "#"+$(this).data("btn-corner");
    $(corner).css("width", "35px").css("height", "35px").css("border-left-width", "35px").css("border-bottom-width", "35px");
  }).on('mouseleave', function()  {
    var corner = "#"+$(this).data("btn-corner");
    $(corner).css("width", "25px").css("height", "25px").css("border-left-width", "25px").css("border-bottom-width", "25px");
  });

  // flagging

  $(".js-flag").on('click', function(){
    var id = $(this).data('id');
    var button = '#js-flag-button-'+id;
    var label = '#js-flag-label-'+id;
    var icon = '#js-flag-icon-'+id;
    var flagtype = $(this).data('type');

    if ($(button).hasClass('answer__vote--flagged')) {
      $(button).removeClass('answer__vote--flagged');
      $(icon).removeClass('red');
      $(icon).addClass('greyd');
    } else {
      $(button).addClass('answer__vote--flagged');
      $(icon).removeClass('greyd');
      $(icon).addClass('red');
    }
    $.ajax({
      type: "GET",
      url: "/ajax/flag-item.php",
      data: {
        type : flagtype,
        id : id
      },
      datatype: 'html',
      success: function(html){
        var flagcomment_div = "#js-flagcomment-"+id;
        $(flagcomment_div).fadeIn(30);
      }
    });
  });

    // --- ckstate (clickstate)

    $(".ckstate").on('click', function(){
        var type = $(this).data('ckstate-type');
        var subtype = $(this).data('ckstate-subtype');
        var target2 = "#"+$(this).data('ckstate-target2');
        var viztarget = "#"+$(this).data('ckstate-viztarget');
        var viztarget2 = "#"+$(this).data('ckstate-viztarget2');
        var viztarget3 = "#"+$(this).data('ckstate-viztarget3');
        var toshow = "#"+$(this).data('ckstate-toshow');
        if (type == "code-vote") {
            if (subtype == "yes") {
                $(this).addClass("btn--vote--yes--click");          
                $(viztarget).addClass("bg_palegreen");          
                $(viztarget2).addClass("white");            
                $(viztarget3).addClass("bg_palegreen");         
            }
            if (subtype == "no") {
                $(this).addClass("btn--vote--no--click");           
                $(viztarget).addClass("bg_palered");            
                $(viztarget2).addClass("white");
                $(viztarget3).addClass("bg_palered");           
            }
            $(target2).unbind("click");
            $(toshow).show();
        }
    });

  $(".cktrack").on('click', function() {
    var type = $(this).data('cktrack-type');
    var subtype = $(this).data('cktrack-subtype');
    var id = $(this).data('cktrack-id');

    $.ajax({
      type: "GET",
      url: "/ajax/cktrack.php",
      data: {
        type : type,
        subtype : subtype,
        id : id
      },
      datatype: 'html',
      success: function(html){
      }
    });
  });

    // -- copycode
    $('.copycode').on('click', function(e){
        e.stopPropagation();
        var target = "#"+$(this).data("target");
        var viztarget = "#"+$(this).data("viztarget");
        var viztarget2 = "#"+$(this).data("viztarget2");
        var viztarget3 = "#"+$(this).data("viztarget3");
        var viztarget4 = "#"+$(this).data("viztarget4");
        var viztarget5 = "#"+$(this).data("viztarget5");
        var clickclass = $(this).data("clickclass");
        var classtoremove = clickclass;
        var classtoadd = clickclass+"--clicked";
        var clickcolor = $(this).data("clickcolor");
        $(target).removeClass("dnone");
        $(target).select();
        // $(target).setSelectionRange(0, 99999); // -- for mobile
        document.execCommand("copy");
        $(target).addClass("dnone");
        if (classtoremove) {
            $(this).removeClass(classtoremove).addClass(classtoadd);        
        }
        $(this).text("Copied!");
        if (clickcolor == "blue") {
            $(viztarget).addClass("bg_blue-light-4").addClass("blue");
            $(viztarget2).addClass("bg_blue-light-4");          
        } else {
            $(viztarget).addClass("bg_palegreen").addClass("green");
            $(viztarget2).addClass("bg_palegreen");         
        }
        $(viztarget3).show();
        $("#storeurl").addClass("bold");
        $(viztarget4).delay(2000).fadeIn(30);
        $(viztarget5).show();

    });

  // --- js-data

  $(".js-data").on('click', function() {
    var type = $(this).data('type');
    var flag = $(this).data('flag');
    var var1 = $(this).data('var1');
    var var2 = $(this).data('var2');
    var var3 = $(this).data('var3');
    var state = $(this).data('state');
    var merchant_name = $(this).data("merchant-name");
    var product_name = $(this).data("product-name");

    $.ajax({
      type: "GET",
      url: "/ajax/js-data.php",
      data: {
        type : type,
        flag : flag,
        var1 : var1,
        var2 : var2,
        var3 : var3
      },
      datatype: 'html',
      success: function(){}