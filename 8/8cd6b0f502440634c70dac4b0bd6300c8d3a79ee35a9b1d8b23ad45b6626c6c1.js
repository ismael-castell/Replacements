!function(t){function e(e){for(var n,o,i=e[0],c=e[1],u=0,s=[];u<i.length;u++)o=i[u],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&s.push(r[o][0]),r[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);for(a&&a(e);s.length;)s.shift()()}var n={},r={0:0};function o(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.e=function(t){var e=[],n=r[t];if(0!==n)if(n)e.push(n[2]);else{var i=new Promise((function(e,o){n=r[t]=[e,o]}));e.push(n[2]=i);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,o.nc&&u.setAttribute("nonce",o.nc),u.src=function(t){return o.p+""+({1:"ui"}[t]||t)+".bundle."+{1:"5b7a"}[t]+".js"}(t);var a=new Error;c=function(e){u.onerror=u.onload=null,clearTimeout(s);var n=r[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;a.message="Loading chunk "+t+" failed.\n("+o+": "+i+")",a.name="ChunkLoadError",a.type=o,a.request=i,n[1](a)}r[t]=void 0}};var s=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(e)},o.m=t,o.c=n,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o.oe=function(t){throw console.error(t),t};var i=window.webpackJsonp=window.webpackJsonp||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var a=c;o(o.s=43)}([function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"d",(function(){return o})),n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return c})),n.d(e,"e",(function(){return u}));var r=function(){return(r=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)};function o(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(n[r[o]]=t[r[o]])}return n}function i(t,e,n,r){return new(n||(n=Promise))((function(o,i){function c(t){try{a(r.next(t))}catch(t){i(t)}}function u(t){try{a(r.throw(t))}catch(t){i(t)}}function a(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(c,u)}a((r=r.apply(t,e||[])).next())}))}function c(t,e){var n,r,o,i,c={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;c;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return c.label++,{value:i[1],done:!1};case 5:c.label++,r=i[1],i=[0];continue;case 7:i=c.ops.pop(),c.trys.pop();continue;default:if(!(o=c.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){c=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){c.label=i[1];break}if(6===i[0]&&c.label<o[1]){c.label=o[1],o=i;break}if(o&&c.label<o[2]){c.label=o[2],c.ops.push(i);break}o[2]&&c.ops.pop(),c.trys.pop();continue}i=e.call(t,c)}catch(t){i=[6,t],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}}function u(){for(var t=0,e=0,n=arguments.length;e<n;e++)t+=arguments[e].length;var r=Array(t),o=0;for(e=0;e<n;e++)for(var i=arguments[e],c=0,u=i.length;c<u;c++,o++)r[o]=i[c];return r}},function(t,e,n){"use strict";var r=n(0);var o=document.getElementById("cookiebanner");if(!o)throw new Error("Cannot find cookie banner script tag");var i=o.src.split("/");e.a=Object(r.a)(Object(r.a)(Object(r.a)({origin:i[0]+"//"+i[2]+"/",blockingMode:"auto"},JSON.parse('{"environments":{"dev":"https://rgw-aix-stage.gfsrv.net/partnersite_int:cookie-banner/sandbox","int":"https://rgw-aix-stage.gfsrv.net/partnersite_int:cookie-banner/live","sandbox":"https://secure-asset-delivery.gameforge.com/partnersite_sandbox_cookie-banner/sandbox","live":"https://secure-asset-delivery.gameforge.com/partnersite_live_cookie-banner/live"},"knownTrackers":[{"matchSrc":"google-analytics.com","regex":true,"categories":["statistics"]},{"matchSrc":"youtube.com","regex":false,"categories":["marketing"]},{"matchSrc":"youtube-nocookie.com","regex":false,"categories":["marketing"]},{"matchSrc":"googleadservices.com","regex":false,"categories":["marketing"]},{"matchSrc":"facebook\\\\..+","regex":true,"categories":["marketing"]},{"matchSrc":"doubleclick.net","regex":false,"categories":["marketing"]},{"matchSrc":"twitter.com","regex":false,"categories":["marketing"]}]}')),o.dataset),{env:o.dataset.env||"live"})},function(t,e,n){"use strict";n.d(e,"c",(function(){return r})),n.d(e,"i",(function(){return o})),n.d(e,"h",(function(){return i})),n.d(e,"d",(function(){return c})),n.d(e,"g",(function(){return u})),n.d(e,"e",(function(){return a})),n.d(e,"a",(function(){return s})),n.d(e,"b",(function(){return f})),n.d(e,"f",(function(){return l}));var r=function(t){return new Promise((function(e,n){var r=new XMLHttpRequest;r.addEventListener("load",(function(){return e(r.responseText)})),r.addEventListener("error",n),r.addEventListener("abort",n),r.open("GET",t),r.send()}))},o=function(t){return Array.prototype.slice.call(t)},i=function(){window.stop?window.stop():document.execCommand("Stop")},c=function(){}