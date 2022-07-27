// https://raw.github.com/halilim/bits-and-pieces/master/javascript/getClassValNum.js
function getClassVal(a,c){var d=RegExp((c||"[^\\s]+")+"_([^\\s]+)"),b=null;0<$(a).length&&$(a).attr("class")&&(b=d.exec($(a).attr("class")))&&2==b.length&&(b=b[1]);return b}function getClassNum(a,c){return parseFloat(getClassVal(a,c))};

// enable_smooth_scroll()
function enable_smooth_scroll(e){function b(a){return a.replace(/^\//,"").replace(/(index|default).[a-zA-Z]{3,4}$/,"").replace(/\/$/,"")}var c=b(location.pathname),d="html, body";$("html, body").each(function(){var a=$(this).attr("scrollTop");$(this).attr("scrollTop",a+1);if($(this).attr("scrollTop")==a+1)return d=this.nodeName.toLowerCase(),$(this).attr("scrollTop",a),!1});$("a[href*=\\#]").not(e||null).each(function(){var a=b(this.pathname)||c;c==a&&(location.hostname==this.hostname||!this.hostname)&&
this.hash.replace(/#/,"")&&$(this.hash).length&&$(this).click(function(a){var b=$(this.hash).offset().top,c=this.hash;a.preventDefault();$(d).animate({scrollTop:b},500,function(){location.hash=c})})})};

// https://github.com/brandonaaron/jquery-overlabel
(function(a){a.fn.overlabel=function(){this.each(function(){var b=a(this),c=a("#"+b.attr("for"));b.addClass("overlabel").bind("click",function(d){c.focus()});c.bind("focus blur",function(d){b.css("display",(d.type=="blur"&&!c.val()?"":"none"))}).trigger("blur")})}})(jQuery);

// https://github.com/cowboy/jquery-throttle-debounce
(function(b,c){var $=b.jQuery||b.Cowboy||(b.Cowboy={}),a;$.throttle=a=function(e,f,j,i){var h,d=0;if(typeof f!=="boolean"){i=j;j=f;f=c}function g(){var o=this,m=+new Date()-d,n=arguments;function l(){d=+new Date();j.apply(o,n)}function k(){h=c}if(i&&!h){l()}h&&clearTimeout(h);if(i===c&&m>e){l()}else{if(f!==true){h=setTimeout(i?k:l,i===c?e-m:e)}}}if($.guid){g.guid=j.guid=j.guid||$.guid++}return g};$.debounce=function(d,e,f){return f===c?a(d,e,false):a(d,f,e!==false)}})(this);

// 3.0.6 https://github.com/brandonaaron/jquery-mousewheel
(function(a){function d(b){var c=b||window.event,d=[].slice.call(arguments,1),e=0,f=!0,g=0,h=0;return b=a.event.fix(c),b.type="mousewheel",c.wheelDelta&&(e=c.wheelDelta/120),c.detail&&(e=-c.detail/3),h=e,c.axis!==undefined&&c.axis===c.HORIZONTAL_AXIS&&(h=0,g=-1*e),c.wheelDeltaY!==undefined&&(h=c.wheelDeltaY/120),c.wheelDeltaX!==undefined&&(g=-1*c.wheelDeltaX/120),d.unshift(b,e,g,h),(a.event.dispatch||a.event.handle).apply(this,d)}var b=["DOMMouseScroll","mousewheel"];if(a.event.fixHooks)for(var c=b.length;c;)a.event.fixHooks[b[--c]]=a.event.mouseHooks;a.event.special.mousewheel={setup:function(){if(this.addEventListener)for(var a=b.length;a;)this.addEventListener(b[--a],d,!1);else this.onmousewheel=d},teardown:function(){if(this.removeEventListener)for(var a=b.length;a;)this.removeEventListener(b[--a],d,!1);else this.onmousewheel=null}},a.fn.extend({mousewheel:function(a){return a?this.bind("mousewheel",a):this.trigger("mousewheel")},unmousewheel:function(a){return this.unbind("mousewheel",a)}})})(jQuery);

/*! jQuery jCarouselLite - v1.8.1 - 2012-12-16
* http://kswedberg.github.com/jquery-carousel-lite/
* Copyright (c) 2012 Karl Swedberg; Licensed MIT, GPL */
(function(e) {
    function t(e, t) {
        return t.autoStop && (t.circular ? t.autoStop : Math.min(e, t.autoStop))
    }

    function n(e) {
        this.id && (this.id += e)
    }
    e.jCarouselLite = {
        version: "1.8.1",
        curr: 0
    }, e.fn.jCarouselLite = function(r) {
        var i = e.extend(!0, {}, e.fn.jCarouselLite.defaults, r),
            s = Math.ceil,
            o = Math.abs;
        return this.each(function() {
            function J() {
                return j.slice(I).slice(0, N)
            }

            function K(t, n) {
                if (v) return !1;
                n = n || {};
                var r = I,
                    s = t > I,
                    o = n.speed || i.speed,
                    u = n.offset || 0;
                return i.beforeStart && i.beforeStart.call(w, J(), s), j.removeClass(i.activeClass), i.circular ? (t > I && t > F - N ? (I %= x, t -= x, E.css(m, -I * p.liSize - u)) : t < I && t < 0 && (I += x, t += x, E.css(m, -I * p.liSize - u)), I = t + t % 1) : (t < 0 ? t = 0 : t > F - C && (t = F - C), I = t, I === 0 && i.first && i.first.call(this, J(), s), I === F - C && i.last && i.last.call(this, J(), s), i.btnPrev && i.$btnPrev.toggleClass(i.btnDisabledClass, I === 0), i.btnNext && i.$btnNext.toggleClass(i.btnDisabledClass, I === F - C)), B(I, O), e.jCarouselLite.curr = I, r === I && !n.force ? (i.afterEnd && i.afterEnd.call(w, J(), s), I) : (v = !0, g[m] = -(I * p.liSize), E.animate(g, o, i.easing, function() {
                    i.afterEnd && i.afterEnd.call(w, J(), s), v = !1
                }), j.eq(I).addClass(i.activeClass), I)
            }
            var r, u, a, f, l, c, h, p = {
                    div: {},
                    ul: {},
                    li: {}
                },
                d = !0,
                v = !1,
                m = i.vertical ? "top" : "left",
                g = {},
                y = i.vertical ? "height" : "width",
                b = this,
                w = e(this),
                E = w.find("ul").eq(0),
                S = E.children("li"),
                x = S.length,
                T = i.visible,
                N = s(T),
                C = Math.floor(T),
                k = Math.min(i.start, x - 1),
                L = 1,
                A = 0,
                O = {},
                M = {},
                _ = {},
                D = i.vertical ? "y" : "x",
                P = i.vertical ? "x" : "y",
                H = i.init.call(this, i, S);
            if (H === !1) return;
            w.data("dirjc", L), w.data(m + "jc", w.css(m)), i.circular && (r = S.slice(x - N).clone(!0).each(n), u = S.slice(0, N).clone(!0).each(n), E.prepend(r).append(u), k += N, A = N);
            var B = function(t, n) {
                    t = s(t);
                    var r, o = (t - A) % x,
                        u = o + C;
                    return n.go && (r = e(i.btnGo), r.removeClass(i.activeClass).removeClass(i.visibleClass), r.eq(o).addClass(i.activeClass), r.slice(o, o + C).addClass(i.visibleClass), u > r.length && r.slice(0, u - r.length).addClass(i.visibleClass)), n.pager && (a.removeClass(i.activeClass), a.eq(s(o / T)).addClass(i.activeClass)), o
                },
                j = E.children("li"),
                F = j.length,
                I = k;
            e.jCarouselLite.curr = I;
            var q = function(e) {
                    var t, n, r;
                    console.log(j)
                    return e ? (p.div[y] = "", p.li = {
                        width: "",
                        height: ""
                    }, p) : (t = i.vertical ? max_height(j) : j.outerWidth(!0), n = t * F, r = t * T, p.div[y] = r + "px", p.ul[y] = n + "px", p.ul[m] = -(I * t) + "px", p.li = {
                        width: j.width(),
                        height: max_height(j)//j.height()
                    }, p.liSize = t, p)
                    //console.log(j)

                },
                R = function(t) {
                    var n, r = {
                        div: {
                            visibility: "visible",
                            position: "relative",
                            zIndex: 2,
                            left: "0"
                        },
                        ul: {
                            margin: "0",
                            padding: "0",
                            position: "relative",
                            listStyleType: "none",
                            zIndex: 1
                        },
                        li: {
                            overflow: i.vertical ? "hidden" : "visible",
                            "float": i.vertical ? "none" : "left"
                        }
                    };
                    t && (n = q(!0), w.css(n.div), E.css(n.ul), j.css(n.li)), n = q(), i.autoCSS && (d && (e.extend(!0, n, r), d = !1), j.css(n.li), E.css(n.ul), w.css(n.div))
                };
            R();
            var U = 0,
                z = t(x, i),
                W = typeof i.auto == "number" ? i.auto : i.scroll,
                X = function() {
                    b.setAutoAdvance = setTimeout(function() {
                        if (!z || z > U) L = w.data("dirjc"), K(I + L * W), U++, X()
                    }, i.timeout)
                };
            e.each(["btnPrev", "btnNext"], function(t, n) {
                i[n] && (i["$" + n] = e.isFunction(i[n]) ? i[n].call(w[0]) : e(i[n]), i["$" + n].bind("click.jc", function(e) {
                    e.preventDefault();
                    var n = t === 0 ? I - i.scroll : I + i.scroll;
                    return i.directional && w.data("dirjc", t ? 1 : -1), K(n)
                }))
            }), i.circular || (i.btnPrev && k === 0 && i.$btnPrev.addClass(i.btnDisabledClass), i.btnNext && k + C >= F && i.$btnNext.addClass(i.btnDisabledClass)), i.btnGo && (e.each(i.btnGo, function(t, n) {
                e(n).bind("click.jc", function(e) {
                    return e.preventDefault(), K(i.circular ? T + t : t)
                })
            }), O.go = 1);
            if (i.autoPager) {
                f = s(x / T), a = [];
                for (var V = 0; V < f; V++) a.push('<li><a href="#">' + (V + 1) + "</a></li>");
                a.length > 1 && (a = e("<ul>" + a.join("") + "</ul>").appendTo(i.autoPager).find("li")), a.find("a").each(function(t) {
                    e(this).bind("click.jc", function(e) {
                        e.preventDefault();
                        var n = t * T;
                        return i.circular && (n += T), K(n)
                    })
                }), O.pager = 1
            }
            B(k, O), i.mouseWheel && w.mousewheel && w.bind("mousewheel.jc", function(e, t) {
                return t > 0 ? K(I - i.scroll) : K(I + i.scroll)
            }), i.pause && i.auto && w.bind("mouseenter.jc", function() {
                w.trigger("pauseCarousel.jc")
            }).bind("mouseleave.jc", function() {
                w.trigger("resumeCarousel.jc")
            }), i.auto && X(), e.jCarouselLite.vis = J, w.bind("go.jc", function(e, t, n) {
                typeof t == "undefined" && (t = "+=1");
                var r = typeof t == "string" && /(\+=|-=)(\d+)/.exec(t);
                r ? t = r[1] == "-=" ? I - r[2] * 1 : I + r[2] * 1 : t += k, K(t, n)
            }).bind("startCarousel.jc", function(e) {
                clearTimeout(b.setAutoAdvance), b.setAutoAdvance = undefined, w.trigger("go", "+=" + i.scroll), X(), w.removeData("pausedjc").removeData("stoppedjc")
            }).bind("resumeCarousel.jc", function(e, t) {
                if (b.setAutoAdvance) return;
                clearTimeout(b.setAutoAdvance), b.setAutoAdvance = undefined;
                var n = w.data("stoppedjc");
                if (t || !n) X(), w.removeData("pausedjc"), n && w.removeData("stoppedjc")
            }).bind("pauseCarousel.jc", function(e) {
                clearTimeout(b.setAutoAdvance), b.setAutoAdvance = undefined, w.data("pausedjc", !0)
            }).bind("stopCarousel.jc", function(e) {
                clearTimeout(b.setAutoAdvance), b.setAutoAdvance = undefined, w.data("stoppedjc", !0)
            }).bind("refreshCarousel.jc", function(e) {
                R(i.autoCSS)
            }).bind("endCarousel.jc", function() {
                b.setAutoAdvance && (clearTimeout(b.setAutoAdvance), b.setAutoAdvance = undefined), i.btnPrev && i.$btnPrev.addClass(i.btnDisabledClass).unbind(".jc"), i.btnNext && i.$btnNext.addClass(i.btnDisabledClass).unbind(".jc"), i.btnGo && e.each(i.btnGo, function(t, n) {
                    e(n).unbind(".jc")
                }), i.circular && (j.slice(0, N).remove(), j.slice(-N).remove()), e.each([m + "jc", "pausedjc", "stoppedjc", "dirjc"], function(e, t) {
                    w.removeData(t)
                }), w.unbind(".jc")
            }), h = {
                touchstart: function(e) {
                    M.x = e.targetTouches[0].pageX, M.y = e.targetTouches[0].pageY, M[m] = parseFloat(E.css(m)), M.time = +(new Date)
                },
                touchmove: function(e) {
                    var t = e.targetTouches.length;
                    t === 1 ? (e.preventDefault(), _.x = e.targetTouches[0].pageX, _.y = e.targetTouches[0].pageY, g[m] = M[m] + (_[D] - M[D]), E.css(g)) : _ = M
                },
                touchend: function(e) {
                    if (!_.x) return;
                    var t = M[D] - _[D],
                        n = o(t),
                        r = n > i.swipeThresholds[D],
                        s = o(M[P] - _[P]) < i.swipeThresholds[P],
                        u = +(new Date) - M.time,
                        a = u < i.swipeThresholds.time,
                        f = t > 0 ? "+=" : "-=",
                        l = f + i.scroll,
                        c = {
                            force: !0
                        };
                    a && r && s ? c.speed = i.speed / 2 : !a && n < p.liSize / 2 || !r || a && !s ? l = "+=0" : !a && n > p.liSize / 2 && (l = Math.round(n / p.liSize), l = f + (l > i.visible ? i.visible : l), c.offset = t), w.trigger("go.jc", [l, c]), _ = {}
                }
            }, "ontouchend" in document && i.swipe && w.bind("touchstart touchmove touchend", function(e) {
                e = e.originalEvent, h[e.type](e)
            }), i.responsive && (c = i.autoCSS, e(window).bind("resize", function(e) {
                c && (E.width(E.width() * 2), c = !1), clearTimeout(l), l = setTimeout(function() {
                    w.trigger("refreshCarousel"), c = i.autoCSS
                }, 100)
            }))
        }), this
    }, e.fn.jCarouselLite.defaults = {
        autoCSS: !0,
        btnPrev: null,
        btnNext: null,
        btnGo: null,
        autoPager: null,
        btnDisabledClass: "disabled",
        activeClass: "active",
        visibleClass: "vis",
        mouseWheel: !1,
        speed: 200,
        easing: null,
        timeout: 4e3,
        auto: !1,
        directional: !1,
        autoStop: !1,
        pause: !0,
        vertical: !1,
        circular: !0,
        visible: 3,
        start: 0,
        scroll: 1,
        responsive: !1,
        swipe: !0,
        swipeThresholds: {
            x: 80,
            y: 120,
            time: 150
        },
        init: function() {},
        first: null,
        last: null,
        beforeStart: null,
        afterEnd: null
    }
})(jQuery);

/*!
 * Lazy Load - JavaScript plugin for lazy loading images
 *
 * Copyright (c) 2007-2019 Mika Tuupola
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * Project home:
 *   https://appelsiini.net/projects/lazyload
 *
 * Version: 2.0.0-rc.2
 *
 */
!function(t,e){"object"==typeof exports?module.exports=e(t):"function"==typeof define&&define.amd?define([],e):t.LazyLoad=e(t)}("undefined"!=typeof global?global:this.window||this.global,function(e){"use strict";"function"==typeof define&&define.amd&&(e=window);var r={src:"data-src",srcset:"data-srcset",selector:".lazyload",root:null,rootMargin:"0px",threshold:0};const o=function(){let r={},s=!1,t=0;var e=arguments.length;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(s=arguments[0],t++);for(;t<e;t++)!function(t){for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&(s&&"[object Object]"===Object.prototype.toString.call(t[e])?r[e]=o(!0,r[e],t[e]):r[e]=t[e])}(arguments[t]);return r};function s(t,e){this.settings=o(r,e||{}),this.images=t||document.querySelectorAll(this.settings.selector),this.observer=null,this.init()}if(s.prototype={init:function(){var s,t;e.IntersectionObserver?(t={root:(s=this).settings.root,rootMargin:this.settings.rootMargin,threshold:[this.settings.threshold]},this.observer=new IntersectionObserver(function(t){Array.prototype.forEach.call(t,function(t){var e,r;t.isIntersecting&&(s.observer.unobserve(t.target),e=t.target.getAttribute(s.settings.src),r=t.target.getAttribute(s.settings.srcset),"img"===t.target.tagName.toLowerCase()?(e&&(t.target.src=e),r&&(t.target.srcset=r)):t.target.style.backgroundImage="url("+e+")")})},t),Array.prototype.forEach.call(this.images,function(t){s.observer.observe(t)})):this.loadImages()},loadAndDestroy:function(){this.settings&&(this.loadImages(),this.destroy())},loadImages:function(){var s;this.settings&&(s=this,Array.prototype.forEach.call(this.images,function(t){var e=t.getAttribute(s.settings.src),r=t.getAttribute(s.settings.srcset);"img"===t.tagName.toLowerCase()?(e&&(t.src=e),r&&(t.srcset=r)):t.style.backgroundImage="url('"+e+"')"}))},destroy:function(){this.settings&&(this.observer.disconnect(),this.settings=null)}},e.lazyload=function(t,e){return new s(t,e)},e.jQuery){const n=e.jQuery;n.fn.lazyload=function(t){return(t=t||{}).attribute=t.attribute||"data-src",new s(n.makeArray(this),t),this}}return s});

/*jQuery Roundabout - v2.4.2 */(function(a){"use strict";var b,c,d;a.extend({roundaboutShapes:{def:"lazySusan",lazySusan:function(a,b,c){return{x:Math.sin(a+b),y:Math.sin(a+3*Math.PI/2+b)/8*c,z:(Math.cos(a+b)+1)/2,scale:Math.sin(a+Math.PI/2+b)/2+.5}}}});b={bearing:0,tilt:0,minZ:100,maxZ:280,minOpacity:.4,maxOpacity:1,minScale:.4,maxScale:1,duration:600,btnNext:null,btnNextCallback:function(){},btnPrev:null,btnPrevCallback:function(){},btnToggleAutoplay:null,btnStartAutoplay:null,btnStopAutoplay:null,easing:"swing",clickToFocus:true,clickToFocusCallback:function(){},focusBearing:0,shape:"lazySusan",debug:false,childSelector:"li",startingChild:null,reflect:false,floatComparisonThreshold:.001,autoplay:false,autoplayDuration:1e3,autoplayPauseOnHover:false,autoplayCallback:function(){},autoplayInitialDelay:0,enableDrag:false,dropDuration:600,dropEasing:"swing",dropAnimateTo:"nearest",dropCallback:function(){},dragAxis:"x",dragFactor:4,triggerFocusEvents:true,triggerBlurEvents:true,responsive:false};c={autoplayInterval:null,autoplayIsRunning:false,autoplayStartTimeout:null,animating:false,childInFocus:-1,touchMoveStartPosition:null,stopAnimation:false,lastAnimationStep:false};d={init:function(e,f,g){var h,i=(new Date).getTime();e=typeof e==="object"?e:{};f=a.isFunction(f)?f:function(){};f=a.isFunction(e)?e:f;h=a.extend({},b,e,c);return this.each(function(){var b=a(this),c=b.children(h.childSelector).length,e=360/c,i=h.startingChild&&h.startingChild>c-1?c-1:h.startingChild,j=h.startingChild===null?h.bearing:360-i*e,k=b.css("position")!=="static"?b.css("position"):"relative";b.css({padding:0,position:k}).addClass("roundabout-holder").data("roundabout",a.extend({},h,{startingChild:i,bearing:j,oppositeOfFocusBearing:d.normalize.apply(null,[h.focusBearing-180]),dragBearing:j,period:e}));if(g){b.unbind(".roundabout").children(h.childSelector).unbind(".roundabout")}else{if(h.responsive){a(window).bind("resize",function(){d.stopAutoplay.apply(b);d.relayoutChildren.apply(b)})}}if(h.clickToFocus){b.children(h.childSelector).each(function(c){a(this).bind("click.roundabout",function(){var e=d.getPlacement.apply(b,[c]);if(!d.isInFocus.apply(b,[e])){d.stopAnimation.apply(a(this));if(!b.data("roundabout").animating){d.animateBearingToFocus.apply(b,[e,b.data("roundabout").clickToFocusCallback])}return false}})})}if(h.btnNext){a(h.btnNext).bind("click.roundabout",function(){if(!b.data("roundabout").animating){d.animateToNextChild.apply(b,[b.data("roundabout").btnNextCallback])}return false})}if(h.btnPrev){a(h.btnPrev).bind("click.roundabout",function(){d.animateToPreviousChild.apply(b,[b.data("roundabout").btnPrevCallback]);return false})}if(h.btnToggleAutoplay){a(h.btnToggleAutoplay).bind("click.roundabout",function(){d.toggleAutoplay.apply(b);return false})}if(h.btnStartAutoplay){a(h.btnStartAutoplay).bind("click.roundabout",function(){d.startAutoplay.apply(b);return false})}if(h.btnStopAutoplay){a(h.btnStopAutoplay).bind("click.roundabout",function(){d.stopAutoplay.apply(b);return false})}if(h.autoplayPauseOnHover){b.bind("mouseenter.roundabout.autoplay",function(){d.stopAutoplay.apply(b,[true])}).bind("mouseleave.roundabout.autoplay",function(){d.startAutoplay.apply(b)})}if(h.enableDrag){if(!a.isFunction(b.drag)){if(h.debug){alert("You do not have the drag plugin loaded.")}}else if(!a.isFunction(b.drop)){if(h.debug){alert("You do not have the drop plugin loaded.")}}else{b.drag(function(a,c){var e=b.data("roundabout"),f=e.dragAxis.toLowerCase()==="x"?"deltaX":"deltaY";d.stopAnimation.apply(b);d.setBearing.apply(b,[e.dragBearing+c[f]/e.dragFactor])}).drop(function(a){var c=b.data("roundabout"),e=d.getAnimateToMethod(c.dropAnimateTo);d.allowAnimation.apply(b);d[e].apply(b,[c.dropDuration,c.dropEasing,c.dropCallback]);c.dragBearing=c.period*d.getNearestChild.apply(b)})}b.each(function(){var b=a(this).get(0),c=a(this).data("roundabout"),e=c.dragAxis.toLowerCase()==="x"?"pageX":"pageY",f=d.getAnimateToMethod(c.dropAnimateTo);if(b.addEventListener){b.addEventListener("touchstart",function(a){c.touchMoveStartPosition=a.touches[0][e]},false);b.addEventListener("touchmove",function(b){var f=(b.touches[0][e]-c.touchMoveStartPosition)/c.dragFactor;b.preventDefault();d.stopAnimation.apply(a(this));d.setBearing.apply(a(this),[c.dragBearing+f])},false);b.addEventListener("touchend",function(b){b.preventDefault();d.allowAnimation.apply(a(this));f=d.getAnimateToMethod(c.dropAnimateTo);d[f].apply(a(this),[c.dropDuration,c.dropEasing,c.dropCallback]);c.dragBearing=c.period*d.getNearestChild.apply(a(this))},false)}})}d.initChildren.apply(b,[f,g])})},initChildren:function(b,c){var e=a(this),f=e.data("roundabout");b=b||function(){};e.children(f.childSelector).each(function(b){var f,g,h,i=d.getPlacement.apply(e,[b]);if(c&&a(this).data("roundabout")){f=a(this).data("roundabout").startWidth;g=a(this).data("roundabout").startHeight;h=a(this).data("roundabout").startFontSize}a(this).addClass("roundabout-moveable-item").css("position","absolute");a(this).data("roundabout",{startWidth:f||a(this).width(),startHeight:g||a(this).height(),startFontSize:h||parseInt(a(this).css("font-size"),10),degrees:i,backDegrees:d.normalize.apply(null,[i-180]),childNumber:b,currentScale:1,parent:e})});d.updateChildren.apply(e);if(f.autoplay){f.autoplayStartTimeout=setTimeout(function(){d.startAutoplay.apply(e)},f.autoplayInitialDelay)}e.trigger("ready");b.apply(e);return e},updateChildren:function(){return this.each(function(){var b=a(this),c=b.data("roundabout"),e=-1,f={bearing:c.bearing,tilt:c.tilt,stage:{width:Math.floor(a(this).width()*.9),height:Math.floor(a(this).height()*.9)},animating:c.animating,inFocus:c.childInFocus,focusBearingRadian:d.degToRad.apply(null,[c.focusBearing]),shape:a.roundaboutShapes[c.shape]||a.roundaboutShapes[a.roundaboutShapes.def]};f.midStage={width:f.stage.width/2,height:f.stage.height/2};f.nudge={width:f.midStage.width+f.stage.width*.05,height:f.midStage.height+f.stage.height*.05};f.zValues={min:c.minZ,max:c.maxZ,diff:c.maxZ-c.minZ};f.opacity={min:c.minOpacity,max:c.maxOpacity,diff:c.maxOpacity-c.minOpacity};f.scale={min:c.minScale,max:c.maxScale,diff:c.maxScale-c.minScale};b.children(c.childSelector).each(function(g){if(d.updateChild.apply(b,[a(this),f,g,function(){a(this).trigger("ready")}])&&(!f.animating||c.lastAnimationStep)){e=g;a(this).addClass("roundabout-in-focus")}else{a(this).removeClass("roundabout-in-focus")}});if(e!==f.inFocus){if(c.triggerBlurEvents){b.children(c.childSelector).eq(f.inFocus).trigger("blur")}c.childInFocus=e;if(c.triggerFocusEvents&&e!==-1){b.children(c.childSelector).eq(e).trigger("focus")}}b.trigger("childrenUpdated")})},updateChild:function(b,c,e,f){var g,h=this,i=a(b),j=i.data("roundabout"),k=[],l=d.degToRad.apply(null,[360-j.degrees+c.bearing]);f=f||function(){};l=d.normalizeRad.apply(null,[l]);g=c.shape(l,c.focusBearingRadian,c.tilt);g.scale=g.scale>1?1:g.scale;g.adjustedScale=(c.scale.min+c.scale.diff*g.scale).toFixed(4);g.width=(g.adjustedScale*j.startWidth).toFixed(4);g.height=(g.adjustedScale*j.startHeight).toFixed(4);i.css({left:(g.x*c.midStage.width+c.nudge.width-g.width/2).toFixed(0)+"px",top:(g.y*c.midStage.height+c.nudge.height-g.height/2).toFixed(0)+"px",width:g.width+"px",height:g.height+"px",opacity:(c.opacity.min+c.opacity.diff*g.scale).toFixed(2),zIndex:Math.round(c.zValues.min+c.zValues.diff*g.z),fontSize:(g.adjustedScale*j.startFontSize).toFixed(1)+"px"});j.currentScale=g.adjustedScale;if(h.data("roundabout").debug){k.push('<div style="font-weight: normal; font-size: 10px; padding: 2px; width: '+i.css("width")+'; background-color: #ffc;">');k.push('<strong style="font-size: 12px; white-space: nowrap;">Child '+e+"</strong><br />");k.push("<strong>left:</strong> "+i.css("left")+"<br />");k.push("<strong>top:</strong> "+i.css("top")+"<br />");k.push("<strong>width:</strong> "+i.css("width")+"<br />");k.push("<strong>opacity:</strong> "+i.css("opacity")+"<br />");k.push("<strong>height:</strong> "+i.css("height")+"<br />");k.push("<strong>z-index:</strong> "+i.css("z-index")+"<br />");k.push("<strong>font-size:</strong> "+i.css("font-size")+"<br />");k.push("<strong>scale:</strong> "+i.data("roundabout").currentScale);k.push("</div>");i.html(k.join(""))}i.trigger("reposition");f.apply(h);return d.isInFocus.apply(h,[j.degrees])},setBearing:function(b,c){c=c||function(){};b=d.normalize.apply(null,[b]);this.each(function(){var c,e,f,g=a(this),h=g.data("roundabout"),i=h.bearing;h.bearing=b;g.trigger("bearingSet");d.updateChildren.apply(g);c=Math.abs(i-b);if(!h.animating||c>180){return}c=Math.abs(i-b);g.children(h.childSelector).each(function(c){var e;if(d.isChildBackDegreesBetween.apply(a(this),[b,i])){e=i>b?"Clockwise":"Counterclockwise";a(this).trigger("move"+e+"ThroughBack")}})});c.apply(this);return this},adjustBearing:function(b,c){c=c||function(){};if(b===0){return this}this.each(function(){d.setBearing.apply(a(this),[a(this).data("roundabout").bearing+b])});c.apply(this);return this},setTilt:function(b,c){c=c||function(){};this.each(function(){a(this).data("roundabout").tilt=b;d.updateChildren.apply(a(this))});c.apply(this);return this},adjustTilt:function(b,c){c=c||function(){};this.each(function(){d.setTilt.apply(a(this),[a(this).data("roundabout").tilt+b])});c.apply(this);return this},animateToBearing:function(b,c,e,f,g){var h=(new Date).getTime();g=g||function(){};if(a.isFunction(f)){g=f;f=null}else if(a.isFunction(e)){g=e;e=null}else if(a.isFunction(c)){g=c;c=null}this.each(function(){var i,j,k,l=a(this),m=l.data("roundabout"),n=!c?m.duration:c,o=e?e:m.easing||"swing";if(!f){f={timerStart:h,start:m.bearing,totalTime:n}}i=h-f.timerStart;if(m.stopAnimation){d.allowAnimation.apply(l);m.animating=false;return}if(i<n){if(!m.animating){l.trigger("animationStart")}m.animating=true;if(typeof a.easing.def==="string"){j=a.easing[o]||a.easing[a.easing.def];k=j(null,i,f.start,b-f.start,f.totalTime)}else{k=a.easing[o](i/f.totalTime,i,f.start,b-f.start,f.totalTime)}if(d.compareVersions.apply(null,[a().jquery,"1.7.2"])>=0&&!a.easing["easeOutBack"]){k=f.start+(b-f.start)*k}k=d.normalize.apply(null,[k]);m.dragBearing=k;d.setBearing.apply(l,[k,function(){setTimeout(function(){d.animateToBearing.apply(l,[b,n,o,f,g])},0)}])}else{m.lastAnimationStep=true;b=d.normalize.apply(null,[b]);d.setBearing.apply(l,[b,function(){l.trigger("animationEnd")}]);m.animating=false;m.lastAnimationStep=false;m.dragBearing=b;g.apply(l)}});return this},animateToNearbyChild:function(b,c){var e=b[0],f=b[1],g=b[2]||function(){};if(a.isFunction(f)){g=f;f=null}else if(a.isFunction(e)){g=e;e=null}return this.each(function(){var b,h,i=a(this),j=i.data("roundabout"),k=!j.reflect?j.bearing%360:j.bearing,l=i.children(j.childSelector).length;if(!j.animating){if(j.reflect&&c==="previous"||!j.reflect&&c==="next"){k=Math.abs(k)<j.floatComparisonThreshold?360:k;for(b=0;b<l;b+=1){h={lower:j.period*b,upper:j.period*(b+1)};h.upper=b===l-1?360:h.upper;if(k<=Math.ceil(h.upper)&&k>=Math.floor(h.lower)){if(l===2&&k===360){d.animateToDelta.apply(i,[-180,e,f,g])}else{d.animateBearingToFocus.apply(i,[h.lower,e,f,g])}break}}}else{k=Math.abs(k)<j.floatComparisonThreshold||360-Math.abs(k)<j.floatComparisonThreshold?0:k;for(b=l-1;b>=0;b-=1){h={lower:j.period*b,upper:j.period*(b+1)};h.upper=b===l-1?360:h.upper;if(k>=Math.floor(h.lower)&&k<Math.ceil(h.upper)){if(l===2&&k===360){d.animateToDelta.apply(i,[180,e,f,g])}else{d.animateBearingToFocus.apply(i,[h.upper,e,f,g])}break}}}}})},animateToNearestChild:function(b,c,e){e=e||function(){};if(a.isFunction(c)){e=c;c=null}else if(a.isFunction(b)){e=b;b=null}return this.each(function(){var f=d.getNearestChild.apply(a(this));d.animateToChild.apply(a(this),[f,b,c,e])})},animateToChild:function(b,c,e,f){f=f||function(){};if(a.isFunction(e)){f=e;e=null}else if(a.isFunction(c)){f=c;c=null}return this.each(function(){var g,h=a(this),i=h.data("roundabout");if(i.childInFocus!==b&&!i.animating){g=h.children(i.childSelector).eq(b);d.animateBearingToFocus.apply(h,[g.data("roundabout").degrees,c,e,f])}})},animateToNextChild:function(a,b,c){return d.animateToNearbyChild.apply(this,[arguments,"next"])},animateToPreviousChild:function(a,b,c){return d.animateToNearbyChild.apply(this,[arguments,"previous"])},animateToDelta:function(b,c,e,f){f=f||function(){};if(a.isFunction(e)){f=e;e=null}else if(a.isFunction(c)){f=c;c=null}return this.each(function(){var g=a(this).data("roundabout").bearing+b;d.animateToBearing.apply(a(this),[g,c,e,f])})},animateBearingToFocus:function(b,c,e,f){f=f||function(){};if(a.isFunction(e)){f=e;e=null}else if(a.isFunction(c)){f=c;c=null}return this.each(function(){var g=a(this).data("roundabout").bearing-b;g=Math.abs(360-g)<Math.abs(g)?360-g:-g;g=g>180?-(360-g):g;if(g!==0){d.animateToDelta.apply(a(this),[g,c,e,f])}})},stopAnimation:function(){return this.each(function(){a(this).data("roundabout").stopAnimation=true})},allowAnimation:function(){return this.each(function(){a(this).data("roundabout").stopAnimation=false})},startAutoplay:function(b){return this.each(function(){var c=a(this),e=c.data("roundabout");b=b||e.autoplayCallback||function(){};clearInterval(e.autoplayInterval);e.autoplayInterval=setInterval(function(){d.animateToNextChild.apply(c,[b])},e.autoplayDuration);e.autoplayIsRunning=true;c.trigger("autoplayStart")})},stopAutoplay:function(b){return this.each(function(){clearInterval(a(this).data("roundabout").autoplayInterval);a(this).data("roundabout").autoplayInterval=null;a(this).data("roundabout").autoplayIsRunning=false;if(!b){a(this).unbind(".autoplay")}a(this).trigger("autoplayStop")})},toggleAutoplay:function(b){return this.each(function(){var c=a(this),e=c.data("roundabout");b=b||e.autoplayCallback||function(){};if(!d.isAutoplaying.apply(a(this))){d.startAutoplay.apply(a(this),[b])}else{d.stopAutoplay.apply(a(this),[b])}})},isAutoplaying:function(){return this.data("roundabout").autoplayIsRunning},changeAutoplayDuration:function(b){return this.each(function(){var c=a(this),e=c.data("roundabout");e.autoplayDuration=b;if(d.isAutoplaying.apply(c)){d.stopAutoplay.apply(c);setTimeout(function(){d.startAutoplay.apply(c)},10)}})},normalize:function(a){var b=a%360;return b<0?360+b:b},normalizeRad:function(a){while(a<0){a+=Math.PI*2}while(a>Math.PI*2){a-=Math.PI*2}return a},isChildBackDegreesBetween:function(b,c){var d=a(this).data("roundabout").backDegrees;if(b>c){return d>=c&&d<b}else{return d<c&&d>=b}},getAnimateToMethod:function(a){a=a.toLowerCase();if(a==="next"){return"animateToNextChild"}else if(a==="previous"){return"animateToPreviousChild"}return"animateToNearestChild"},relayoutChildren:function(){return this.each(function(){var b=a(this),c=a.extend({},b.data("roundabout"));c.startingChild=b.data("roundabout").childInFocus;d.init.apply(b,[c,null,true])})},getNearestChild:function(){var b=a(this),c=b.data("roundabout"),d=b.children(c.childSelector).length;if(!c.reflect){return(d-Math.round(c.bearing/c.period)%d)%d}else{return Math.round(c.bearing/c.period)%d}},degToRad:function(a){return d.normalize.apply(null,[a])*Math.PI/180},getPlacement:function(a){var b=this.data("roundabout");return!b.reflect?360-b.period*a:b.period*a},isInFocus:function(a){var b,c=this,e=c.data("roundabout"),f=d.normalize.apply(null,[e.bearing]);a=d.normalize.apply(null,[a]);b=Math.abs(f-a);return b<=e.floatComparisonThreshold||b>=360-e.floatComparisonThreshold},getChildInFocus:function(){var b=a(this).data("roundabout");return b.childInFocus>-1?b.childInFocus:false},compareVersions:function(a,b){var c,d=a.split(/\./i),e=b.split(/\./i),f=d.length>e.length?d.length:e.length;for(c=0;c<=f;c++){if(d[c]&&!e[c]&&parseInt(d[c],10)!==0){return 1}else if(e[c]&&!d[c]&&parseInt(e[c],10)!==0){return-1}else if(d[c]===e[c]){continue}if(d[c]&&e[c]){if(parseInt(d[c],10)>parseInt(e[c],10)){return 1}else{return-1}}}return 0}};a.fn.roundabout=function(b){if(d[b]){return d[b].apply(this,Array.prototype.slice.call(arguments,1))}else if(typeof b==="object"||a.isFunction(b)||!b){return d.init.apply(this,arguments)}else{a.error("Method "+b+" does not exist for jQuery.roundabout.")}}})(jQuery);

/*JQUERY SCROLL TO JOEL */(function($){eval(function(p,a,c,k,e,d){e=function(c){return(c<a?"":e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('3.R=6(e){7 l=0;7 t=0;7 w=3.a(3.X(e,\'1e\'));7 h=3.a(3.X(e,\'1f\'));7 m=e.L;7 B=e.F;1a(e.S){l+=e.T+(e.8?3.a(e.8.W):0);t+=e.V+(e.8?3.a(e.8.10):0);e=e.S}l+=e.T+(e.8?3.a(e.8.W):0);t+=e.V+(e.8?3.a(e.8.10):0);c{x:l,y:t,w:w,h:h,m:m,B:B}};3.1d=6(e){b(e){w=e.k;h=e.C}f{w=(d.Y)?d.Y:(1.4&&1.4.k)?1.4.k:1.9.L;h=(d.H)?d.H:(1.4&&1.4.C)?1.4.C:1.9.F}c{w:w,h:h}};3.U=6(e){b(e){t=e.i;l=e.A;w=e.r;h=e.D}f{b(1.4&&1.4.i){t=1.4.i;l=1.4.A;w=1.4.r;h=1.4.D}f b(1.9){t=1.9.i;l=1.9.A;w=1.9.r;h=1.9.D}}c{t:t,l:l,w:w,h:h}};3.a=6(v){v=12(v);c 14(v)?0:v};3.16.E=6(s){o=3.17(s);c u.18(6(){n 3.P.E(u,o)})};3.P.E=6(e,o){7 z=u;z.o=o;z.e=e;z.p=3.R(e);z.s=3.U();z.J=6(){1b(z.j);z.j=1c};z.t=(n N).Z();z.M=6(){7 t=(n N).Z();7 p=(t-z.t)/z.o.I;b(t>=z.o.I+z.t){z.J();11(6(){z.q(z.p.y,z.p.x)},13)}f{G=((-g.O(p*g.Q)/2)+0.5)*(z.p.y-z.s.t)+z.s.t;K=((-g.O(p*g.Q)/2)+0.5)*(z.p.x-z.s.l)+z.s.l;z.q(G,K)}};z.q=6(t,l){d.19(l,t)};z.j=15(6(){z.M()},13)};',62,78,'|document||jQuery|documentElement||function|var|currentStyle|body|intval|if|return|window||else|Math||scrollTop|timer|clientWidth||wb|new|||scroll|scrollWidth|||this||||||scrollLeft|hb|clientHeight|scrollHeight|ScrollTo|offsetHeight|st|innerHeight|duration|clear|sl|offsetWidth|step|Date|cos|fx|PI|getPos|offsetParent|offsetLeft|getScroll|offsetTop|borderLeftWidth|css|innerWidth|getTime|borderTopWidth|setTimeout|parseInt||isNaN|setInterval|fn|speed|each|scrollTo|while|clearInterval|null|getClient|width|height'.split('|'),0,{}));})(jQuery);

/* COOKIES */
function setCookie(c_name,value,expiredays){var exdate=new Date();exdate.setDate(exdate.getDate()+expiredays);document.cookie=c_name+ "=" +escape(value)+((expiredays==null) ? "" : ";expires="+exdate.toGMTString()+';')+'path=/;';}
function setCookieTime(c_name,value,minutes){var exdate=new Date();exdate.setTime( exdate.getTime() );var exdate = new Date( exdate.getTime() + (minutes * 1000 * 60) );document.cookie=c_name+ "=" +escape(value)+((minutes==null) ? "" : ";expires="+exdate.toGMTString());}
function getCookie(c_name){if(document.cookie.length>0){c_start=document.cookie.indexOf(c_name + "=");if (c_start!=-1){c_start=c_start + c_name.length+1;c_end=document.cookie.indexOf(";",c_start);if (c_end==-1) c_end=document.cookie.length;return unescape(document.cookie.substring(c_start,c_end));}}return "";}


/*Left and Right function*/
function Left(a,b){if(b<=0)return"";else if(b>String(a).length)return a;else return String(a).substring(0,b)}function Right(a,b){if(b<=0)return"";else if(b>String(a).length)return a;else{var c=String(a).length;return String(a).substring(c,c-b)}}
function addCommas(nStr){nStr += '';x = nStr.split('.');x1 = x[0];x2 = x.length > 1 ? '.' + x[1] : '';var rgx = /(\d+)(\d{3})/;while (rgx.test(x1)) {x1 = x1.replace(rgx, '$1' + ',' + '$2');}return x1 + x2;}
function replaceChars(entry,toBeReplaced,replaceChar){out = toBeReplaced;add = replaceChar;temp = "" + entry;while (temp.indexOf(out)>-1) { pos= temp.indexOf(out); temp = "" + (temp.substring(0, pos) + add + temp.substring((pos + out.length), temp.length));}return temp;}
function(){}