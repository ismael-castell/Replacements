/*
 modernizr v3.6.0
 Build https://modernizr.com/download?-applicationcache-audio-backgroundsize-borderimage-borderradius-boxshadow-boxsizing-canvas-canvastext-cssall-cssanimations-csscalc-csscolumns-cssgradients-cssreflections-csstransforms-csstransforms3d-csstransitions-flexbox-flexboxlegacy-fontface-forcetouch-formattribute-generatedcontent-geolocation-hashchange-history-hsla-localstorage-multiplebgs-opacity-postmessage-rgba-sessionstorage-smil-svg-svgasimg-svgclippaths-textshadow-touchevents-video-webgl-websockets-webworkers-setclasses-dontmin

 Copyright (c)
  Faruk Ates
  Paul Irish
  Alex Sexton
  Ryan Seddon
  Patrick Kettner
  Stu Cox
  Richard Herrera

 MIT License
 {
      "name": "Application Cache",
      "property": "applicationcache",
      "caniuse": "offline-apps",
      "tags": ["storage", "offline"],
      "notes": [{
        "name": "MDN documentation",
        "href": "https://developer.mozilla.org/en/docs/HTML/Using_the_application_cache"
      }],
      "polyfills": ["html5gears"]
    }
    ! {
      "name": "Geolocation API",
      "property": "geolocation",
      "caniuse": "geolocation",
      "tags": ["media"],
      "notes": [{
        "name": "MDN documentation",
        "href": "https://developer.mozilla.org/en-US/docs/WebAPI/Using_geolocation"
      }],
      "polyfills": [
        "joshuabell-polyfill",
        "webshims",
        "geo-location-javascript",
        "geolocation-api-polyfill"
      ]
    }
    ! {
      "name": "History API",
      "property": "history",
      "caniuse": "history",
      "tags": ["history"],
      "authors": ["Hay Kranen", "Alexander Farkas"],
      "notes": [{
        "name": "W3C Spec",
        "href": "https://www.w3.org/TR/html51/browsers.html#the-history-interface"
      }, {
        "name": "MDN documentation",
        "href": "https://developer.mozilla.org/en-US/docs/Web/API/window.history"
      }],
      "polyfills": ["historyjs", "html5historyapi"]
    }
    ! {
      "name": "postMessage",
      "property": "postmessage",
      "caniuse": "x-doc-messaging",
      "notes": [{
        "name": "W3C Spec",
        "href": "http://www.w3.org/TR/html5/comms.html#posting-messages"
      }],
      "polyfills": ["easyxdm", "postmessage-jquery"]
    }
    ! {
      "name": "SVG",
      "property": "svg",
      "caniuse": "svg",
      "tags": ["svg"],
      "authors": ["Erik Dahlstrom"],
      "polyfills": [
        "svgweb",
        "raphael",
        "amplesdk",
        "canvg",
        "svg-boilerplate",
        "sie",
        "dojogfx",
        "fabricjs"
      ]
    }
    ! {
      "name": "WebSockets Support",
      "property": "websockets",
      "authors": ["Phread [fearphage]", "Mike Sherov [mikesherov]", "Burak Yigit Kaya [BYK]"],
      "caniuse": "websockets",
      "tags": ["html5"],
      "warnings": [
        "This test will reject any old version of WebSockets even if it is not prefixed such as in Safari 5.1"
      ],
      "notes": [{
        "name": "CLOSING State and Spec",
        "href": "https://www.w3.org/TR/websockets/#the-websocket-interface"
      }],
      "polyfills": [
        "sockjs",
        "socketio",
        "kaazing-websocket-gateway",
        "websocketjs",
        "atmosphere",
        "graceful-websocket",
        "portal",
        "datachannel"
      ]
    }
    ! {
      "name": "Local Storage",
      "property": "localstorage",
      "caniuse": "namevalue-storage",
      "tags": ["storage"],
      "knownBugs": [],
      "notes": [],
      "warnings": [],
      "polyfills": [
        "joshuabell-polyfill",
        "cupcake",
        "storagepolyfill",
        "amplifyjs",
        "yui-cacheoffline"
      ]
    }
    ! {
      "name": "Session Storage",
      "property": "sessionstorage",
      "tags": ["storage"],
      "polyfills": ["joshuabell-polyfill", "cupcake", "sessionstorage"]
    }
    ! {
      "name": "Web Workers",
      "property": "webworkers",
      "caniuse" : "webworkers",
      "tags": ["performance", "workers"],
      "notes": [{
        "name": "W3C Reference",
        "href": "https://www.w3.org/TR/workers/"
      }, {
        "name": "HTML5 Rocks article",
        "href": "http://www.html5rocks.com/en/tutorials/workers/basics/"
      }, {
        "name": "MDN documentation",
        "href": "https://developer.mozilla.org/en-US/docs/Web/Guide/Performance/Using_web_workers"
      }],
      "polyfills": ["fakeworker", "html5shims"]
    }
    ! {
      "name": "cssall",
      "property": "cssall",
      "notes": [{
        "name": "Spec",
        "href": "https://drafts.csswg.org/css-cascade/#all-shorthand"
      }]
    }
    ! {
      "name" : "HTML5 Audio Element",
      "property": "audio",
      "tags" : ["html5", "audio", "media"]
    }
    ! {
      "name": "Canvas",
      "property": "canvas",
      "caniuse": "canvas",
      "tags": ["canvas", "graphics"],
      "polyfills": ["flashcanvas", "excanvas", "slcanvas", "fxcanvas"]
    }
    ! {
      "name": "Canvas text",
      "property": "canvastext",
      "caniuse": "canvas-text",
      "tags": ["canvas", "graphics"],
      "polyfills": ["canvastext"]
    }
    ! {
      "name": "HTML5 Video",
      "property": "video",
      "caniuse": "video",
      "tags": ["html5"],
      "knownBugs": [
        "Without QuickTime, `Modernizr.video.h264` will be `undefined`; https://github.com/Modernizr/Modernizr/issues/546"
      ],
      "polyfills": [
        "html5media",
        "mediaelementjs",
        "sublimevideo",
        "videojs",
        "leanbackplayer",
        "videoforeverybody"
      ]
    }
    ! {
      "name": "WebGL",
      "property": "webgl",
      "caniuse": "webgl",
      "tags": ["webgl", "graphics"],
      "polyfills": ["jebgl", "cwebgl", "iewebgl"]
    }
    ! {
      "name": "CSS Multiple Backgrounds",
      "caniuse": "multibackgrounds",
      "property": "multiplebgs",
      "tags": ["css"]
    }
    ! {
      "name": "CSS rgba",
      "caniuse": "css3-colors",
      "property": "rgba",
      "tags": ["css"],
      "notes": [{
        "name": "CSSTricks Tutorial",
        "href": "https://css-tricks.com/rgba-browser-support/"
      }]
    }
    ! {
      "name": "input[form] Attribute",
      "property": "formattribute",
      "tags": ["attribute", "forms", "input"],
      "builderAliases": ["forms_formattribute"]
    }
    ! {
      "name": "Hashchange event",
      "property": "hashchange",
      "caniuse": "hashchange",
      "tags": ["history"],
      "notes": [{
        "name": "MDN documentation",
        "href": "https://developer.mozilla.org/en-US/docs/Web/API/window.onhashchange"
      }],
      "polyfills": [
        "jquery-hashchange",
        "moo-historymanager",
        "jquery-ajaxy",
        "hasher",
        "shistory"
      ]
    }
    ! {
      "name": "CSS Calc",
      "property": "csscalc",
      "caniuse": "calc",
      "tags": ["css"],
      "builderAliases": ["css_calc"],
      "authors": ["@calvein"]
    }
    ! {
      "name": "CSS Gradients",
      "caniuse": "css-gradients",
      "property": "cssgradients",
      "tags": ["css"],
      "knownBugs": ["False-positives on webOS (https://github.com/Modernizr/Modernizr/issues/202)"],
      "notes": [{
        "name": "Webkit Gradient Syntax",
        "href": "https://webkit.org/blog/175/introducing-css-gradients/"
      },{
        "name": "Linear Gradient Syntax",
        "href": "https://developer.mozilla.org/en-US/docs/Web/CSS/linear-gradient"
      },{
        "name": "W3C Gradient Spec",
        "href": "https://drafts.csswg.org/css-images-3/#gradients"
      }]
    }
    ! {
      "name": "CSS Opacity",
      "caniuse": "css-opacity",
      "property": "opacity",
      "tags": ["css"]
    }
    ! {
      "name": "CSS HSLA Colors",
      "caniuse": "css3-colors",
      "property": "hsla",
      "tags": ["css"]
    }
    ! {
      "name": "CSS Supports",
      "property": "supports",
      "caniuse": "css-featurequeries",
      "tags": ["css"],
      "builderAliases": ["css_supports"],
      "notes": [{
        "name": "W3 Spec",
        "href": "http://dev.w3.org/csswg/css3-conditional/#at-supports"
      },{
        "name": "Related Github Issue",
        "href": "https://github.com/Modernizr/Modernizr/issues/648"
      },{
        "name": "W3 Info",
        "href": "http://dev.w3.org/csswg/css3-conditional/#the-csssupportsrule-interface"
      }]
    }
    ! {
      "name": "SVG clip paths",
      "property": "svgclippaths",
      "tags": ["svg"],
      "notes": [{
        "name": "Demo",
        "href": "http://srufaculty.sru.edu/david.dailey/svg/newstuff/clipPath4.svg"
      }]
    }
    ! {
      "name": "SVG SMIL animation",
      "property": "smil",
      "caniuse": "svg-smil",
      "tags": ["svg"],
      "notes": [{
      "name": "W3C Synchronised Multimedia spec",
      "href": "https://www.w3.org/AudioVideo/"
      }]
    }
    ! {
      "name": "SVG as an <img> tag source",
      "property": "svgasimg",
      "caniuse" : "svg-img",
      "tags": ["svg"],
      "aliases": ["svgincss"],
      "authors": ["Chris Coyier"],
      "notes": [{
        "name": "HTML5 Spec",
        "href": "http://www.w3.org/TR/html5/embedded-content-0.html#the-img-element"
      }]
    }
    ! {
      "name": "Touch Events",
      "property": "touchevents",
      "caniuse" : "touch",
      "tags": ["media", "attribute"],
      "notes": [{
        "name": "Touch Events spec",
        "href": "https://www.w3.org/TR/2013/WD-touch-events-20130124/"
      }],
      "warnings": [
        "Indicates if the browser supports the Touch Events spec, and does not necessarily reflect a touchscreen device"
      ],
      "knownBugs": [
        "False-positive on some configurations of Nokia N900",
        "False-positive on some BlackBerry 6.0 builds – https://github.com/Modernizr/Modernizr/issues/372#issuecomment-3112695"
      ]
    }
    ! {
      "name": "@font-face",
      "property": "fontface",
      "authors": ["Diego Perini", "Mat Marquis"],
      "tags": ["css"],
      "knownBugs": [
        "False Positive: WebOS https://github.com/Modernizr/Modernizr/issues/342",
        "False Postive: WP7 https://github.com/Modernizr/Modernizr/issues/538"
      ],
      "notes": [{
        "name": "@font-face detection routine by Diego Perini",
        "href": "http://javascript.nwbox.com/CSSSupport/"
      },{
        "name": "Filament Group @font-face compatibility research",
        "href": "https://docs.google.com/presentation/d/1n4NyG4uPRjAA8zn_pSQ_Ket0RhcWC6QlZ6LMjKeECo0/edit#slide=id.p"
      },{
        "name": "Filament Grunticon/@font-face device testing results",
        "href": "https://docs.google.com/spreadsheet/ccc?key=0Ag5_yGvxpINRdHFYeUJPNnZMWUZKR2ItMEpRTXZPdUE#gid=0"
      },{
        "name": "CSS fonts on Android",
        "href": "https://stackoverflow.com/questions/3200069/css-fonts-on-android"
      },{
        "name": "@font-face and Android",
        "href": "http://archivist.incutio.com/viewlist/css-discuss/115960"
      }]
    }
    ! {
      "name": "CSS Generated Content",
      "property": "generatedcontent",
      "tags": ["css"],
      "warnings": ["Android won't return correct height for anything below 7px #738"],
      "notes": [{
        "name": "W3C CSS Selectors Level 3 spec",
        "href": "https://www.w3.org/TR/css3-selectors/#gen-content"
      },{
        "name": "MDN article on :before",
        "href": "https://developer.mozilla.org/en-US/docs/Web/CSS/::before"
      },{
        "name": "MDN article on :after",
        "href": "https://developer.mozilla.org/en-US/docs/Web/CSS/::before"
      }]
    }
    ! {
      "name": "CSS textshadow",
      "property": "textshadow",
      "caniuse": "css-textshadow",
      "tags": ["css"],
      "knownBugs": ["FF3.0 will false positive on this test"]
    }
    ! {
      "name": "Force Touch Events",
      "property": "forcetouch",
      "authors": ["Kraig Walker"],
      "notes": [{
        "name": "Responding to Force Touch Events from JavaScript",
        "href": "https://developer.apple.com/library/prerelease/mac/documentation/AppleApplications/Conceptual/SafariJSProgTopics/Articles/RespondingtoForceTouchEventsfromJavaScript.html"
      }]
    }
    ! {
      "name": "CSS Animations",
      "property": "cssanimations",
      "caniuse": "css-animation",
      "polyfills": ["transformie", "csssandpaper"],
      "tags": ["css"],
      "warnings": ["Android < 4 will pass this test, but can only animate a single property at a time"],
      "notes": [{
        "name" : "Article: 'Dispelling the Android CSS animation myths'",
        "href": "https://goo.gl/OGw5Gm"
      }]
    }
    ! {
      "name": "Background Size",
      "property": "backgroundsize",
      "tags": ["css"],
      "knownBugs": ["This will false positive in Opera Mini - https://github.com/Modernizr/Modernizr/issues/396"],
      "notes": [{
        "name": "Related Issue",
        "href": "https://github.com/Modernizr/Modernizr/issues/396"
      }]
    }
    ! {
      "name": "Border Image",
      "property": "borderimage",
      "caniuse": "border-image",
      "polyfills": ["css3pie"],
       "knownBugs": ["Android < 2.0 is true, but has a broken implementation"],
      "tags": ["css"]
    }
    ! {
      "name": "Border Radius",
      "property": "borderradius",
      "caniuse": "border-radius",
      "polyfills": ["css3pie"],
      "tags": ["css"],
      "notes": [{
        "name": "Comprehensive Compat Chart",
        "href": "https://muddledramblings.com/table-of-css3-border-radius-compliance"
      }]
    }
    ! {
      "name": "Box Shadow",
      "property": "boxshadow",
      "caniuse": "css-boxshadow",
      "tags": ["css"],
      "knownBugs": [
        "WebOS false positives on this test.",
        "The Kindle Silk browser false positives"
      ]
    }
    ! {
      "name": "Box Sizing",
      "property": "boxsizing",
      "caniuse": "css3-boxsizing",
      "polyfills": ["borderboxmodel", "boxsizingpolyfill", "borderbox"],
      "tags": ["css"],
      "builderAliases": ["css_boxsizing"],
      "notes": [{
        "name": "MDN Docs",
        "href": "https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing"
      },{
        "name": "Related Github Issue",
        "href": "https://github.com/Modernizr/Modernizr/issues/248"
      }]
    }
    ! {
      "name": "CSS Columns",
      "property": "csscolumns",
      "caniuse": "multicolumn",
      "polyfills": ["css3multicolumnjs"],
      "tags": ["css"]
    }
    ! {
      "name": "Flexbox",
      "property": "flexbox",
      "caniuse": "flexbox",
      "tags": ["css"],
      "notes": [{
        "name": "The _new_ flexbox",
        "href": "http://dev.w3.org/csswg/css3-flexbox"
      }],
      "warnings": [
        "A `true` result for this detect does not imply that the `flex-wrap` property is supported; see the `flexwrap` detect."
      ]
    }
    ! {
      "name": "Flexbox (legacy)",
      "property": "flexboxlegacy",
      "tags": ["css"],
      "polyfills": ["flexie"],
      "notes": [{
        "name": "The _old_ flexbox",
        "href": "https://www.w3.org/TR/2009/WD-css3-flexbox-20090723/"
      }]
    }
    ! {
      "name": "CSS Reflections",
      "caniuse": "css-reflections",
      "property": "cssreflections",
      "tags": ["css"]
    }
    ! {
      "name": "CSS Transforms",
      "property": "csstransforms",
      "caniuse": "transforms2d",
      "tags": ["css"]
    }
    ! {
      "name": "CSS Transforms 3D",
      "property": "csstransforms3d",
      "caniuse": "transforms3d",
      "tags": ["css"],
      "warnings": [
        "Chrome may occassionally fail this test on some systems; more info: https://code.google.com/p/chromium/issues/detail?id=129004"
      ]
    }
    ! {
      "name": "CSS Transitions",
      "property": "csstransitions",
      "caniuse": "css-transitions",
      "tags": ["css"]
    }
    ! Colorbox 1.6.4
 license: MIT
 http://www.jacklmoore.com/colorbox
 JavaScript Cookie v2.2.0
 https://github.com/js-cookie/js-cookie

 Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 Released under the MIT license
 jQuery UI - v1.12.1 - 2016-09-14
 http://jqueryui.com
 Includes: widget.js, position.js, data.js, disable-selection.js, effect.js, effects/effect-blind.js, effects/effect-bounce.js, effects/effect-clip.js, effects/effect-drop.js, effects/effect-explode.js, effects/effect-fade.js, effects/effect-fold.js, effects/effect-highlight.js, effects/effect-puff.js, effects/effect-pulsate.js, effects/effect-scale.js, effects/effect-shake.js, effects/effect-size.js, effects/effect-slide.js, effects/effect-transfer.js, focusable.js, form-reset-mixin.js, jquery-1-7.js, keycode.js, labels.js, scroll-parent.js, tabbable.js, unique-id.js, widgets/accordion.js, widgets/autocomplete.js, widgets/button.js, widgets/checkboxradio.js, widgets/controlgroup.js, widgets/datepicker.js, widgets/dialog.js, widgets/draggable.js, widgets/droppable.js, widgets/menu.js, widgets/mouse.js, widgets/progressbar.js, widgets/resizable.js, widgets/selectable.js, widgets/selectmenu.js, widgets/slider.js, widgets/sortable.js, widgets/spinner.js, widgets/tabs.js, widgets/tooltip.js
 Copyright jQuery Foundation and other contributors; Licensed MIT  jQuery UI Widget 1.12.1
 http://jqueryui.com

 Copyright jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 jQuery UI Position 1.12.1
 http://jqueryui.com

 Copyright jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license

 http://api.jqueryui.com/position/
 jQuery UI :data 1.12.1
 http://jqueryui.com

 Copyright jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 jQuery UI Disable Selection 1.12.1
 http://jqueryui.com

 Copyright jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 jQuery UI Effects 1.12.1
 http://jqueryui.com

 Copyright jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 jQuery Color Animations v2.1.2
 https://github.com/jquery/jquery-color

 Copyright 2014 jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license

 Date: Wed Jan 16 08:47:09 2013 -0600
 jQuery UI Effects Blind 1.12.1
 http://jqueryui.com

 Copyright jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 jQuery UI Effects Bounce 1.12.1
 http://jqueryui.com

 Copyright jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 jQuery UI Effects Clip 1.12.1
 http://jqueryui.com

 Copyright jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 jQuery UI Effects Drop 1.12.1
 http://jqueryui.com

 Copyright jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 jQuery UI Effects Explode 1.12.1
 http://jqueryui.com

 Copyright jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 jQuery UI Effects Fade 1.12.1
 http://jqueryui.com

 Copyright jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 jQuery UI Effects Fold 1.12.1
 http://jqueryui.com

 Copyright jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 jQuery UI Effects Highlight 1.12.1
 http://jqueryui.com

 Copyright jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 jQuery UI Effects Size 1.12.1
 http://jqueryui.com

 Copyright jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 jQuery UI Effects Scale 1.12.1
 http://jqueryui.com

 Copyright jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 jQuery UI Effects Puff 1.12.1
 http://jqueryui.com

 Copyright jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 jQuery UI Effects Pulsate 1.12.1
 http://jqueryui.com

 Copyright jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 jQuery UI Effects Shake 1.12.1
 http://jqueryui.com

 Copyright jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 jQuery UI Effects Slide 1.12.1
 http://jqueryui.com

 Copyright jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 jQuery UI Effects Transfer 1.12.1
 http://jqueryui.com

 Copyright jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 jQuery UI Focusable 1.12.1
 http://jqueryui.com

 Copyright jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 jQuery UI Form Reset Mixin 1.12.1
 http://jqueryui.com

 Copyright jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 jQuery UI Support for jQuery core 1.7.x 1.12.1
 http://jqueryui.com

 Copyright jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license

 jQuery UI Keycode 1.12.1
 http://jqueryui.com

 Copyright jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 jQuery UI Labels 1.12.1
 http://jqueryui.com

 Copyright jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 jQuery UI Scroll Parent 1.12.1
 http://jqueryui.com

 Copyright jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 jQuery UI Tabbable 1.12.1
 http://jqueryui.com

 Copyright jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 jQuery UI Unique ID 1.12.1
 http://jqueryui.com

 Copyright jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 jQuery UI Accordion 1.12.1
 http://jqueryui.com

 Copyright jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 jQuery UI Menu 1.12.1
 http://jqueryui.com

 Copyright jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 jQuery UI Autocomplete 1.12.1
 http://jqueryui.com

 Copyright jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 jQuery UI Controlgroup 1.12.1
 http://jqueryui.com

 Copyright jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 jQuery UI Checkboxradio 1.12.1
 http://jqueryui.com

 Copyright jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 jQuery UI Button 1.12.1
 http://jqueryui.com

 Copyright jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 jQuery UI Datepicker 1.12.1
 http://jqueryui.com

 Copyright jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 jQuery UI Mouse 1.12.1
 http://jqueryui.com

 Copyright jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 jQuery UI Draggable 1.12.1
 http://jqueryui.com

 Copyright jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 jQuery UI Resizable 1.12.1
 http://jqueryui.com

 Copyright jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 jQuery UI Dialog 1.12.1
 http://jqueryui.com

 Copyright jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 jQuery UI Droppable 1.12.1
 http://jqueryui.com

 Copyright jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 jQuery UI Progressbar 1.12.1
 http://jqueryui.com

 Copyright jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 jQuery UI Selectable 1.12.1
 http://jqueryui.com

 Copyright jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 jQuery UI Selectmenu 1.12.1
 http://jqueryui.com

 Copyright jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 jQuery UI Slider 1.12.1
 http://jqueryui.com

 Copyright jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 jQuery UI Sortable 1.12.1
 http://jqueryui.com

 Copyright jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 jQuery UI Spinner 1.12.1
 http://jqueryui.com

 Copyright jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 jQuery UI Tabs 1.12.1
 http://jqueryui.com

 Copyright jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 jQuery UI Tooltip 1.12.1
 http://jqueryui.com

 Copyright jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
*/
