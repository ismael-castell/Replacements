window.dataLayer = window.dataLayer || [];

/**
 * Function for adding events to menu and submenu elements (using closures).
 * @param string id of menu element
 * @param string id submenu element
 */
function mouseFactory_click(activator, element, preactivate, postopen)
{
    if(!activator) {return;}
    if(!element) {return;}

    $(activator).click(function(event) {

      if(preactivate) preactivate(activator, element, element.style.display == 'block');

      if(element.style.display == 'block') {
        element.style.display = 'none';
      } else {
        element.style.display = 'block';
        if(postopen) postopen(activator, element)
      }
      event.stopImmediatePropagation();
      return false;
    });
}

function mouseFactory_click_autohide(activator, element, preactivate)
{
    if(!activator) {return;}
    if(!element) {return;}

    mouseFactory_click(activator, element, preactivate);

    var navTimer;

    activator.onmouseout = function() {
      if(!navTimer) navTimer = setTimeout(function () {element.style.display = 'none';}, 500);
    }

    element.onmouseover = function() {
      element.style.display = 'block';
      if(navTimer) {clearTimeout(navTimer);navTimer = null;}
    }

    element.onmouse = function() {
      element.style.display = 'block';
      if(navTimer) {clearTimeout(navTimer);navTimer = null;}
    }

    element.onmouseout = function() {
      element.style.display = 'none';
    }
}

function setDynamicPosition(button, element)
{
  if(jQuery.support.cssFloat) {
    element.style.cssFloat = 'left';
  } else {
    element.style.styleFloat = 'left'; // For IE 8-
  }
  var $button  = $(button);
  var $element = $(element);
  var p_width = $element.parent().width();

  var max  =  p_width - $element.width();
  var left = $button.position().left - ($element.parent().innerWidth() - p_width)/2;
  if (left > max) left = max;
  element.style.left = left + 'px';
}

function addScrollsIfNeeded(element)
{
  var $element = $(element);
  var $window  = $(window);
  var windowHeight = $window.height();
  var pos = $element.offset();
  var height = $element.outerHeight();
  var height_i = $element.height();
  var width = $element.width();
  var available = windowHeight - pos.top + $window.scrollTop();
  var maxw = $window.width();

  if(height > available) {
    element.style.height = (available - 10 - (height - height_i)) + 'px';
    element.style.overflow = 'auto';
    if(maxw < width) width = maxw - 20;
      element.style.minWidth = width + 20 + 'px'; // 20 = scrollbar
      $element.find('.close_tab').each(function() {
      this.style.marginRight = '0px';
      this.style.marginTop = '2px';
    });
  } else {
    if(maxw < width) {
      width = maxw - 20;
      element.style.minWidth = width + 'px';
    }
  }
}

function popoverLeftOrRight(pop, el, pos, abs)
{
  var windowWidth = $(window).width();
  var $el  = $(el);
  var $pop = $(pop);
  var el_w  = $el.width();
  var pop_w = $pop.width();

  pop.style.top = (pos.top + $el.height() / 2 - $pop.height() / 2) + 'px';

  var try_right = pos.left + el_w + 20;
  if(try_right < windowWidth - pop_w - (abs ? abs.left : 0)) {
    $pop.removeClass('left').addClass('right');
    pop.style.left = try_right + 'px';
  } else {
    $pop.removeClass('right').addClass('left');
    pop.style.left = (pos.left - pop_w) + 'px';
  }
}

function addFormElementOneValue(data, key, value)
{
  if(m = key.match(/^(.*)\[\]$/)) {
    if(!data[m[1]]) data[m[1]] = new Array();
    data[m[1]].push(value);
  } else {
    data[key] = value;
  }
}

function addFormElementValues(data, list)
{
  var len = list.length;
  for(var i = 0; i < len ; i++) {
    if(list[i].disabled) continue;
    if(list[i].nodeName == 'SELECT') {
      addFormElementOneValue(data, list[i].name, $(list[i]).val());
      continue;
    }
    if(list[i].nodeName != 'INPUT') continue;
    if(list[i].type.match(/^submit$/i)) continue;
    if(list[i].type.match(/^(?:checkbox|radio)$/i) && !list[i].checked) continue;
    addFormElementOneValue(data, list[i].name, list[i].value);
  }
  return(data);
}

/**
 * Code executed when whole document is loaded.
 */
$(document).ready(function()
{
    /**
     * Attaching the null console in case browser does not support one
     * so it won't throw errors while debugging.
     */
    if( !window.console )
    {
        window.console =
        {
            error: function() {},
            group: function() {},
            groupEnd: function() {},
            info: function() {},
            log: function() {},
            warn: function() {}
        };
    }

    $('.dropdown-menu.nojs').removeClass('nojs');

    $('.article_details a').popover({trigger: 'click manual', placement: 'bottom'});

    $('.conditional_back').each(function() {
      var back;
      try {
        back = history.previous;
        if(!back) {
          back = document.referrer;
        }
      } catch(e) {
        back = document.referrer;
      }
      if(back && back.match(/https?:\/\/([^\/]+)\.(einnews|newsfeedmaker|einpresswire|inboxrobot|yicha|ipdgroup)\.com/)) {
        this.style.display = 'inline';
        this.style.opacity = 1;
        this.href = back;
      } else {
        $(this).click(false);
      }
    });

    $('.masthead-container .questions, .question-line .questions').each(function() {
      var a = $(this).find("> a").get(0);
      $('#submenu_questions').detach().prependTo(this);
      $('#submenu_questions').each(function(){}