var swiperLoader = (function () {
    'use strict';

    var vrtSliders = [];

    function init() {
        var swipers = document.querySelectorAll('.swiper-container');

        for (var i = 0, element; element = swipers[i]; i++) {
            loadSwiper(element);
        }

        var toggles = document.querySelectorAll('.js-slider-toggle');

        for (var i = 0, toggle; toggle = toggles[i]; i++) {
            toggle.addEventListener('click', toggleSwiper);
        }

        window.addEventListener('resize', resizeHandler);

        resizeHandler();
    }

    function loadSwiper(element) {
        var prevBtn = document.querySelector('#' + element.dataset.id + ' .vrtswiper__prev');
        var nextBtn = document.querySelector('#' + element.dataset.id + ' .vrtswiper__next');
        var pauseBtn = document.querySelector('#' + element.dataset.id + ' .vrtswiper__pause');

        var breakpoints = {
            1024: {
                slidesPerView: 3,
                slidesPerGroup: element.dataset.centeredslide === 'true' ? 1 : 3
            },
            768: {
                slidesPerView: 2,
                slidesPerGroup: element.dataset.centeredslide === 'true' ? 1 : 2
            }
        };

        var pauseHandler = function(e) {
            e.preventDefault();

            if(this.autoplaying) {
                this.stopAutoplay();
                e.target.setAttribute('aria-pressed', 'false');
                e.target.setAttribute('aria-label', 'play');
                e.target.setAttribute('title', 'start de slideshow');
            } else {
                this.startAutoplay();
                e.target.setAttribute('aria-pressed', 'true');
                e.target.setAttribute('aria-label', 'pause');
                e.target.setAttribute('title', 'pauzeer de slideshow');
            }

            return false;
        };

        vrtSliders[element.dataset.id] = new Swiper('#' + element.dataset.id, {
            paginationClickable: true,
            initialSlide: 0,

            loop: element.dataset.loop === 'true',
            autoplay: element.dataset.autoplay === 'true' ? 10000 : 0,
            slidesPerView: element.dataset.slidesperview || 1,
            slidesPerGroup: element.dataset.centeredslide === 'true' ? 1 : element.dataset.slidesperview || 1,
            centeredSlides: element.dataset.centeredslide === 'true',
            breakpoints: element.classList.contains('vrtlist__list--carousel') ? {} : breakpoints,

            pagination: '#' + element.dataset.id + ' .swiper-pagination',
            prevButton: '.vrtswiper__prev',
            nextButton: '.vrtswiper__next',

            onInit: function(swiper) {
                var highlight = document.querySelector('#' + element.dataset.id + ' .vrtlist__item--highlighted');
                if (highlight) {
                    swiper.slideTo(highlight.dataset.initslide);
                }
                if (!swiper.isBeginning) prevBtn.classList.remove('hide');
                if (!swiper.isEnd) nextBtn.classList.remove('hide');
                pauseBtn.addEventListener('click', pauseHandler.bind(swiper));
            },

            onSlideChangeStart: function(swiper) {
                if (document.querySelector('#' + element.dataset.id).dataset.togglenav === 'true') {
                    if (!swiper.isBeginning) prevBtn.classList.remove('hide');
                    if (!swiper.isEnd) nextBtn.classList.remove('hide');
                }
            },
            onReachBeginning: function (swiper) {
                if (document.querySelector('#' + element.dataset.id).dataset.togglenav === 'true') prevBtn.classList.add('hide');
            },
            onReachEnd: function (swiper) {
                if (document.querySelector('#' + element.dataset.id).dataset.togglenav === 'true') nextBtn.classList.add('hide');
            },
            onDestroy: function (swiper) {
                pauseBtn.removeEventListener('click', pauseHandler);
                delete vrtSliders[element.dataset.id];
            }
        });
    }

    function toggleSwiper() {
        var target = this.dataset.target;
        var container = document.getElementById(target);

        if (container.classList.contains('grid')) {
            loadSwiper(container);
            container.classList.remove('grid');
            this.classList.remove('active');
        } else {
            vrtSliders[target].destroy(true, true);
            container.classList.add('grid');
            this.classList.add('active');
        }
    }

    function resizeHandler(event) {

        var browserWidth = window.innerWidth || document.body.clientWidth;
        var toggles = document.querySelectorAll('.js-slider-toggle');

        for (var i = 0, toggle; toggle = toggles[i]; i++) {

            var target = toggle.dataset.target;
            var container = document.getElementById(target);
            var slides = document.querySelectorAll('#' + target + ' .swiper-slide').length;

            if((browserWidth >= 0   && browserWidth < 768  && slides > 2) ||
               (browserWidth >= 768 && browserWidth < 1024 && slides > 3) ||
               (slides > 4)){

                if(toggle.classList.contains('hide')){

                    toggle.classList.remove('hide');
                }
            }else{

                if(!toggle.classList.contains('hide')){

                    toggle.classList.add('hide');
                }
            }

            if(vrtSliders[target]){

                vrtSliders[target].update();
            }
        }
    }

    return {
        init: init
    };
}());

(function () {
    'use strict';

    swiperLoader.init();
})();

parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"TQZU":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.init=e;var t=t||{};function e(){(new t.Accessibility).bootstrap()}t.Accessibility=function(){function t(){}t.prototype.bootstrap=function(){document.addEventListener("keyup",e),document.addEventListener("click",i)};var e=function(t){9===t.keyCode&&document.body.classList.add("accessibility")},i=function(t){t.detail>0&&document.body.classList.remove("accessibility")};return t}();
},{}],"FZI7":[function(require,module,exports) {
"use strict";function e(){if(document.querySelector(".article-overview"))for(var e=document.querySelectorAll(".show-more-articles"),t=0;t<e.length;t++){e.item(t).addEventListener("click",function(){this.classList.add("hidden");for(var e=this.parentNode;!e.classList.contains("article-overview")&&e.parentNode;)e=e.parentNode;var t=e.querySelector(".article-overview__list-more");t&&t.classList.remove("hidden")})}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.init=e;
},{}],"QDJw":[function(require,module,exports) {
"use strict";function e(){if(window.vrtGlobals){var e="https://profiel.vrt.be";Array.from(document.querySelectorAll('[href^="'.concat(e,'"]'))).map(function(r){return r.href=r.href.replace(e,window.vrtGlobals.profile_gateway_url)})}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.init=e;
},{}],"d64B":[function(require,module,exports) {
"use strict";function e(e){throw new Error('"'+e+'" is read-only')}function a(){var a=["big-square","rectangle"],r=["small-square","small-square","small-square","rectangle","rectangle"],s=["small-square","small-square","small-square","small-square","big-square"],t=["small-square","small-square","small-square","rectangle","big-square"],o=0,l=0,n=0;document.querySelectorAll("[data-unwrap-parent]").forEach(function(i){var c=i.parentNode;if(c.parentNode.insertBefore(i,c.nextSibling),c.parentNode.removeChild(c),i.classList.contains("random-size")){var u=t;o>0?(e("pool"),u=r,o=0):l>1?(e("pool"),u=s,l=0):n>2&&(e("pool"),u=a,n=0);var d=u.length-1,m=u[Math.round(Math.random()*d)];"rectangle"===m&&l++,"big-square"===m&&o++,"small-square"===m&&n++,i.classList.add(m)}i.style.visibility="visible"})}Object.defineProperty(exports,"__esModule",{value:!0}),exports.init=a,window.addEventListener("resize",function(e){window.innerWidth>768&&(document.querySelector("body").classList.remove("page--navigation-open"),document.querySelector("body").classList.remove("page--search-bar-open"))}),"function"!=typeof NodeList.prototype.forEach&&(NodeList.prototype.forEach=function(e){for(var a=0;a<this.length;a++){e(this.item(a))}}),document.querySelectorAll("[data-match-class]").forEach(function(e){for(var a=e.parentNode,r=0;r<e.classList.length;r++)a.classList.add(e.classList.item(r))});
},{}],"fNuo":[function(require,module,exports) {
"use strict";function e(e){var t=document.createElement("div");return t.innerHTML=e,t.textContent}function t(){document.body.setAttribute("data-guess-browser",["trident","safari","chrome","firefox"].filter(function(e){return navigator.userAgent.toLowerCase().indexOf(e)>=0}).join(","));var t=localStorage.getItem("subscribed.newsletter.corporate"),r=Array.prototype.slice.call(document.querySelectorAll(".nui-newsletter-signup"));r.forEach(function(n){if(t)n.style.display="none";else{var s=n.querySelector("form"),a=s.querySelector('input[name="email"]'),o=s.querySelector('input[name="name"]');s.querySelector('input[type="submit"]');[a,o].forEach(function(e){e.addEventListener("keydown",i),e.addEventListener("keyup",i)}),s.addEventListener("submit",function(t){t.preventDefault(),n.setAttribute("data-loading","Inschrijven...");var s=new XMLHttpRequest;s.addEventListener("readystatechange",function(){if(4===s.readyState&&200==s.status)try{"ok"===(e=JSON.parse(s.responseText)).result?(n.removeAttribute("data-loading"),localStorage.setItem("subscribed.newsletter.corporate",1),r.forEach(function(e){n.classList.add("subscribed")}),[a,o].forEach(function(e){e.value=""})):u(new Error('The service returned the status "'+e.result+'".'))}catch(t){u(new Error(t))}else 4===s.readyState&&u(new Error("Request responded with status "+s.status));var e}),s.open("POST","https://crm.profiel.vrt.be/api/v2/public/optins"),s.setRequestHeader("Content-Type","application/json"),s.send(JSON.stringify({source:"website",email:a.value,firstname:e(o.value),optins:["90"]}))})}function i(e){"Tab"===e.key&&e.stopImmediatePropagation(),e.target.value.length>0?e.target.classList.add("has-content"):e.target.classList.remove("has-content")}function u(e){console.error(e),n.style.cursor="pointer",n.setAttribute("data-loading","Er liep iets mis. Klik om opnieuw te proberen."),n.addEventListener("click",function e(){n.style.cursor="",n.removeAttribute("data-loading"),n.removeEventListener("click",e)})}})}Object.defineProperty(exports,"__esModule",{value:!0}),exports.init=t;
},{}],"WY5Z":[function(require,module,exports) {
"use strict";function e(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function n(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function t(e,t,a){return t&&n(e.prototype,t),a&&n(e,a),e}Object.defineProperty(exports,"__esModule",{value:!0}),exports.init=o;var a=function(){function n(){e(this,n),document.getElementById("show-navigation").addEventListener("click",this.showMenuClickHandler),"en"===document.documentElement.lang?document.getElementById("show-search").style.display="none":document.getElementById("show-search").addEventListener("click",this.showSearchClickHandler)}return t(n,[{key:"showMenuClickHandler",value:function(e){return e.preventDefault(),document.body.classList.contains("page--navigation-open")?n.closeMenu():n.openMenu(),!1}},{key:"showSearchClickHandler",value:function(e){return e.preventDefault(),document.body.classList.contains("page--search-bar-open")?n.closeSearch():n.openSearch(),!1}},{key:"mainClickHandler",value:function(e){e.target===document.body&&n.closeMenu()}}],[{key:"openMenu",value:function(){document.body.classList.add("page--navigation-open"),document.body.addEventListener("click",this.mainClickHandler),document.getElementById("show-navigation").setAttribute("aria-expanded","true")}},{key:"closeMenu",value:function(){document.body.classList.remove("page--navigation-open"),document.body.removeEventListener("click",this.mainClickHandler),document.getElementById("show-navigation").setAttribute("aria-expanded","false")}},{key:"closeSearch",value:function(){document.body.classList.add("page--search-bar-close"),document.body.classList.remove("page--search-bar-open"),document.getElementById("show-search").setAttribute("aria-expanded","false"),setTimeout(function(){document.body.classList.remove("page--search-bar-close")},300)}},{key:"openSearch",value:function(){document.body.classList.remove("page--search-bar-close"),document.body.classList.add("page--search-bar-open"),document.getElementById("show-search").setAttribute("aria-expanded","true"),document.querySelector("#js-search-bar-field").focus()}}]),n}();function o(){VRT.Page=new a}
},{}],"CF1y":[function(require,module,exports) {
"use strict";function e(){if(!("objectFit"in document.body.style))for(var e=document.querySelectorAll("picture, .image-wrapper"),t=0;t<e.length;t++){var o=e.item(t),r=o.dataset.focalPoint,c=o.querySelector("img");o.style.backgroundPosition=r||"center",o.style.backgroundRepeat="no-repeat",o.style.backgroundSize="cover";var a=c.currentSrc||c.src;o.style.backgroundImage='url("'+a+'")',c.style.opacity=0}document.querySelectorAll("[data-focal-point]").forEach(function(e){var t=e.dataset.focalPoint;e.querySelector("img").style.objectPosition=t})}Object.defineProperty(exports,"__esModule",{value:!0}),exports.init=e;
},{}],"eDCa":[function(require,module,exports) {
"use strict";function e(e){e.forEach(function(e){e.scrollWidth-e.clientWidth>0?e.parentNode.querySelector(".show-more-tags").classList.remove("hidden"):e.parentNode.querySelector(".show-more-tags").classList.add("hidden"),e.querySelectorAll(".sub-tags__tag").forEach(function(t){t.offsetLeft>e.clientWidth&&(t.tabIndex=-1)})})}function t(e,t){e.classList.contains("expanded")?(e.classList.remove("expanded"),t.innerText="Meer tags",t.dataset.moreTags=!0):(e.classList.add("expanded"),t.innerText="Minder tags",t.dataset.moreTags=!1,e.querySelectorAll(".sub-tags__tag").forEach(function(e){e.href&&(e.tabIndex=0)}))}function s(){if(document.querySelector(".sub-tag-list")){var s=document.querySelectorAll(".sub-tags__list");s.forEach(function(e){var s=e.scrollWidth-e.clientWidth;e.parentNode.querySelector(".show-more-tags").onclick=function(){}