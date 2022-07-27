/*! ato-gov-au, Copyright (c) 2016 Australian Taxation Office */
String.prototype.startsWith||(String.prototype.startsWith=function(a,b){return b=b||0,this.substr(b,a.length)===a}),window.ato={},function(){function a(b,c){if(0===c.length)return b;var d=c.shift();return"undefined"==typeof b[d]&&(b[d]={}),a(b[d],c)}function b(a){if("string"!=typeof a||0===a.length)throw"The namespace must be a nonempty string.";if(a.startsWith(".")||a.endsWith("."))throw"Namespaces cannot start or end with a period.Instead, start and end it with an actual variable name.";if(a.indexOf("/")>=0||a.indexOf("\\")>=0)throw"Don't use slashes in namespace paths. Use periods for a separator."}window.ato.namespace=function(c){b(c);var d=c.split(".");return a(window.ato,d)}}(),window.ato=window.ato||{},window.ato.utilities=window.ato.utilties||{},window.ato.utilities.keyboard=function(){function a(){return c}function b(a,b){if(9==b.which){var d,e=a.find("*");d=e.filter(c).filter(":visible").filter(function(){return"-1"!=$(this).attr("tabindex")});var f;f=jQuery(":focus");var g;g=d.length;var h;h=d.index(f),b.shiftKey?0==h&&(d.get(g-1).focus(),b.preventDefault()):h==g-1&&(d.get(0).focus(),b.preventDefault())}}var c="a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]";return{getFocusableElementsString:a,trapTabKey:b}}(),function(){function a(){var a=q.pop();q.length=0,d(),a.callback()}function b(){return!!o&&o.hasClass("on")}function c(){o&&o.addClass("on")}function d(){o&&o.removeClass("on")}function e(){var a=String.fromCharCode(97+p.length);return p.push(a),a}function f(a){var b=p.indexOf(a)>=0;if(!b)throw"Unrecognised UI blocker usage token: "+a;return!0}function g(a,b){return{token:a,callback:b}}function h(a){var b=-1;return $.each(q,function(c){if(this.token===a)return b=c,!1}),b}function i(a){var b=h(a);return b>=0?q.splice(b)[0]:null}function j(a){q.push(a)}function k(a,b){f(a);var c=i(a);null===c&&(c=g(a,b)),j(c),m()}function l(a){f(a),i(a),m()}function m(){q.length>0&&!b()?c():0===q.length&&b()&&d()}function n(){var b='<div class="ui-blocker" aria-hidden="true"></div>';o=$(b),$("header").first().prepend(o),o.click(a)}var o=null,p=[],q=[];n(),window.ato.uiBlocker={getUsageToken:e,engage:k,disengage:l}}(),window.ato=window.ato||{},function(){function a(a){a.find(".close").click(function(){e.close(),e._doCallback()}),a.keydown(function(a){window.ato.utilities.keyboard.trapTabKey($(this),a);var b=27;a.which===b&&(e.close(),e._doCallback(),a.preventDefault(),a.stopPropagation())})}var b=window.ato.uiBlocker,c=b.getUsageToken(),d=$(".header-popup-container");$(".header-popup").addClass("original");var e={_callback:null,_current:$(null),create:function(b){var c=$(".header-popup.original").clone();return c.removeClass("original"),a(c),c.find(".popup-content").append(b),d.append(c),c},open:function(a,d){e.close(),e._callback=d,e._current=a,e._current.addClass("on"),b.engage(c,function(){e.close(),e._doCallback()}),e._current.find(".popup-focus").focus()},close:function(){e._current.removeClass("on"),e._current=$(null),b.disengage(c)},_doCallback:function(){null!==e._callback&&(e._callback(),e._callback=null)}},f=$(window).width(),g=767;$(window).resize(function(){var a=$(window).width(),b=f<=g&&a>g,c=f>g&&a<=g,d=b||c;f=a,d&&(e.close(),e._doCallback())}),window.ato.header=window.ato.header||{},window.ato.header.popup=e}(),function(){function a(a){a.find("a").addClass(h.node).attr("aria-atomic","true").attr("tabindex","0").prop("tabindex",0),a.attr("role","application").attr("aria-label","Content side navigation"),a.find("li").addClass(h.nodeContainer).attr("role","treeitem"),a.find("li").filter(function(){return $(this).find("ul").length>=1}).attr("aria-expanded","false"),a.each(function(){$tree=$(this),$tree.find("li").each(function(){var a=$(this).parentsUntil($tree,"li").length;$(this).attr(g.level,a+1)})}),a.find("ul").attr("role","group")}function b(a){a.click(function(a){a.stopPropagation(),a.preventDefault();var b=$(this).parent().parent(),c=b.attr(g.expanded);"true"===c?b.attr(g.expanded,"false"):b.attr(g.expanded,"true")})}function c(a,c){var d=$(c.expanders).html(),e=$(d),f=a.find("li[aria-expanded]");f.each(function(){var a=$(e).clone();b(a),$(this).find("a").first().append(i.clone().text(" Press right to expand, left to close.")).append(i.clone().addClass("location-indicator")).append(a)})}function d(a){var b=[m.enter,m.space,m.arrowLeft,m.arrowRight,m.arrowUp,m.arrowDown,m.home,m.end,m.numpadAsterisk];a.each(function(){var a=$(this);a.keydown(function(c){var d=a.find(":focus"),e=c.which;switch(b.indexOf(e)>=0&&(c.preventDefault(),c.stopPropagation()),e){case m.space:case m.enter:l.activateNode(d);break;case m.arrowLeft:if(k.hasChildren(d)&&k.isNodeOpen(d))l.closeNode(d);else{var f=k.getParentNode(d);l.focus(f)}break;case m.arrowRight:if(!k.hasChildren(d))return;if(k.isNodeOpen(d)){var g=k.getFirstChild(d);l.focus(g)}else l.openNode(d);break;case m.arrowUp:var i=k.getPreviousNode(d);l.focus(i);break;case m.arrowDown:var j=k.getNextNode(d);l.focus(j);break;case m.home:l.focus(k.getAbsoluteFirstNode());break;case m.end:l.focus(k.getAbsoluteLastNode());break;case m.numpadAsterisk:var n=a.find("."+h.node);$(n).each(function(){l.openNode(this)})}})})}function e(b,e){var g=$.extend({},f,e);b=$(b),b.length>0&&(a(b),g.expanders!==!1&&c(b,g),d(b))}var f={expanders:"#template-expander"},g={expanded:"aria-expanded",atomic:"aria-atomic",level:"aria-level"},h={node:"node",nodeContainer:"node-container"},i=$("<span>").addClass("sr-only"),j="."+h.nodeContainer+":visible",k={getNodeContainer:function(a){return $(a).parents("."+h.nodeContainer).first()},isNodeOpen:function(a){return"true"===k.getNodeContainer(a).attr(g.expanded)},hasChildren:function(a){return k.getNodeContainer(a).find("ul").length>=1},getFirstChild:function(a){return k.getNodeContainer(a).find(j).first().find("a").first()},getLastChild:function(a){return k.getNodeContainer(a).find(j).last().find("a").first()},getParentNode:function(a){var b=k.getNodeContainer(a),c=k.getNodeContainer(b);return $(c).find("a").first()},getPreviousNode:function(a){var b=k.getNodeContainer(a).prev().find("a").first();return b.length<=0?k.getParentNode(a):k.isNodeOpen(b)?k.getLastChild(b):b},getNextNode:function(a,b){if(void 0===b&&(b=!0),b&&k.isNodeOpen(a))return k.getFirstChild(a);var c=k.getNodeContainer(a).next().find("a").first();if(c.length>0)return c;var d=k.getParentNode(a);return d.length>0?k.getNextNode(d,!1):null},getAbsoluteFirstNode:function(){$tree.find(j).first().find("a").first()},getAbsoluteLastNode:function(){$tree.find(j).last().find("a").first()}},l={focus:function(a){null===a||$(a).length<=0||$(a).focus()},closeNode:function(a){k.hasChildren(a)&&k.getNodeContainer(a).attr(g.expanded,"false")},openNode:function(a){k.hasChildren(a)&&k.getNodeContainer(a).attr(g.expanded,"true")},activateNode:function(a){var b=$(a).attr("href");void 0!==b&&(window.location=b)}},m={enter:13,space:32,arrowLeft:37,arrowUp:38,arrowRight:39,arrowDown:40,home:36,end:35,numpadAsterisk:106};$.fn.extend({linksTree:function(a){e(this,a)}})}(),window.ato=window.ato||{},function(){function a(a){"undefined"!=typeof ntptEventTag?ntptEventTag(a):console.warn("Analytics unavailable. Asked to ping with argument: "+a)}function b(b){$(b).find(".register").click(function(){a("ev=LoginBox_Register")}),$(b).find(".system-maintenance").click(function(){a("ev=LoginBox_SystemMaintenance")}),$(b).find(".access-manager").click(function(){a("ev=LoginBox_AccessManager")})}function c(a,b){var c=window.location.href,d="";return a.each(function(a,e){if(c.toLowerCase().indexOf(e.toLowerCase())>=0)return void(d=b)}),d}function d(){var a=["individuals","About-ATO","General","Rates","Forms","Calculators-and-Tools","Media-centre","Print-publications"],b=["business","non-profit"],d=["super"],e=["Tax-professionals"],f=c($(a),"Individual");return f?f:(f=c($(b),"Business"))?f:(f=c($(d),"Super clearing house"))?f:(f=c($(e),"Tax Agent"),f?f:"Individual")}function e(){window.ato.setLogin(".login"),window.ato.bindLogin(".login")}window.ato.bindLogin=function(c){$(c).find("button").click(function(){var b=$(this).parent().find("option:selected"),c=b.val();a("ev=LoginBox_"+b.text()),window.location.assign(c)});var d=$(c).find("select");d.on("change keyup",function(){var a=$(this).find("option:selected").attr("class");$(this).removeClass(),$(this).addClass(a)}),d.change(),b(c)},window.ato.setLogin=function(a){var b=d();$(a).find("select option").filter(function(){return $(this).text().trim()==b}).prop("selected",!0).attr("selected","selected")},e()}(),function(){$('[data-toggle="tooltip"]').tooltip(),$(".print-icon").popover({content:function(){return $(".print-icon").next().html()}}),$(".download-pdf-icon").popover({content:function(){return $(".download-pdf-icon").next().html()}}),$(window).resize(function(){$(".print-icon").popover("hide"),$(".download-pdf-icon").popover("hide")});var a="footer-popover-btn";$("body").click(function(b){var c=b.target;$(c).hasClass("print-icon")||$(c).hasClass("download-pdf-icon")||$(c).hasClass(a)||$(c).parents("."+a).length>0||$(c).hasClass("popover")||$(c).parents(".popover").length>0||($('[data-toggle="popover"]').popover("hide"),$("."+a).popover("hide"))});var b='<a class="close" role="button" tabindex="0" style="position: absolute; top: 2px; right: 6px;"><span aria-hidden="true">&times;</span><span class="sr-only">Close related links<span></a>';$("."+a).popover({html:!0,placement:"top",title:b,trigger:"manual",content:function(){return $(this).next(".footer-popover-content").html()}}).on("show.bs.popover",function(a){$(this).addClass("active")}).on("inserted.bs.popover",function(a){var b="Related links for "+$(this).prev("a").text();$(this).next(".popover").attr("aria-label",b)}).on("hide.bs.popover",function(a){$(this).removeClass("active")}).on("shown.bs.popover",function(b){function c(){$("."+a).popover("hide")}$(".popover").find(".close").click(c).keydown(function(a){13===a.which&&c()})}).click(function(b){b.preventDefault();var c=$(this).hasClass("active"),d=this;$("."+a).filter(".active").filter(function(){return this!==d}).popover("hide"),c?$(this).popover("hide"):$(this).popover("show")}).attr("aria-haspopup","true"),$("."+a).each(function(){var a=$(this).prev("a").text();$(this).find(".associated-source").text(a)})}(),function(){function a(){var a=function(){u.closeAllMenus(),$(this).addClass("expanded")},b=function(){var a=$(this).hasClass(q);a||$(this).removeClass("expanded")},c=n.find(".level-1").parent();c.hoverIntent(a,b)}function b(){var a=window.location.pathname,b=null;if("/"===a)b=n.find(".level-1").first();else{var c=a.indexOf("/",1),d=a.slice(1,c);b=n.find(".level-1").filter(function(){var a=$(this).attr("href");return a.toLowerCase().indexOf(d.toLowerCase())>=0})}n.find("."+o).removeClass(o),$(b).addClass(o),$(b).append(t.clone().text(" You are in this area.")),$(b).attr("aria-selected","true")}function c(){var a="ui-touch-open";n.find(".level-1").on("touchstart",function(){var b=$(this).parent().hasClass("expanded");b||($(this).parent().addClass("expanded"),$(this).parent().addClass(q),$(this).addClass(a))}).on("click",function(){var b=$(this).hasClass(a);b&&(event.preventDefault(),$(this).removeClass(a))})}function d(){n.find(".level-1").each(function(){var a=$(this).text(),b=$(this).next(".sublinks");b.length>0&&b.attr("aria-label","Submenu of {0}. Press up to collapse.".replace("{0}",a))})}function e(){var a=$("."+p);if(!(a.length<=0)){var b=n.find("."+o),c=b.clone();c.find(".sr-only").remove();var d=c.text();a.find("h1").first().text(d);var e=b.next(".sublinks"),f=e.find(".row").children().clone();a.find(".row").empty().append(f),f.fadeOut(0),f.fadeIn(500)}}function f(){n.attr("aria-label","Main site navigation. Use left and right or tab to navigate."),n.find("a").attr("aria-atomic","true").attr("tabindex","0").prop("tabindex",0),n.find("a").each(function(a){$(this).attr(s,a)});var a=n.find(".level-1");a.parent("li").attr("role","presentation"),a.attr("role","menuitem link"),a.each(function(){var a=$(this).parent().find(".sublinks").length>0;a&&($(this).attr("aria-haspopup",!0),$(this).append(t.clone().text(" Press down to open, up to collapse.")))});var b=n.find(".sublinks");b.attr("role","menu"),b.find("h3, ul, li").attr("role","presentation"),b.find("a").attr("role","menuitem heading link"),a.attr("aria-level","1"),b.find("h3 a").attr("aria-level","2"),b.find("li a").attr("aria-level","3"),b.find("h3, a").each(function(){$(this).attr("aria-label",$(this).text())})}function g(){var a=function(a){$(a.target).parents("#"+m).length>0||$(a.target).is("#"+m)||u.closeAllMenus()};$("body").focusin(a),$("body").click(a)}function(){}