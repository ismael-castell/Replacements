var nuglif="object"==typeof nuglif?nuglif:{};nuglif.login=function(e){var n={};function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}return t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(o,r,function(n){return e[n]}.bind(null,r));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",Object.defineProperty(t,"p",{get:function(){try{if("string"!=typeof __nuglif__webpack_public_path__)throw new Error("WebpackRequireFrom: '__nuglif__webpack_public_path__' is not a string or not available at runtime. See https://github.com/agoldis/webpack-require-from#troubleshooting");return __nuglif__webpack_public_path__}catch(e){return console.error(e),""}}}),t(t.s=78)}({78:function(e,n){function t(e,n){window.dataLayer.push({reader:{readerId:e,isLoggedIn:n}})}function o(){var e=window,n=e.lpauth,o=e.nuglif;n.init({container:document.getElementById("login-root"),firebase:window.FIREBASE_CONFIG,api:{readerProfile:{baseUrl:window.READER_PROFILE_API}}}),n.onAuthStateChanged((function(e){e&&e.user?function(e){var n=window.nuglif,o=document.querySelectorAll(".userAccountWidget");o&&o.length>0&&o.forEach((function(n){n.classList.add("userAccountWidget--loggedIn"),e.emailVerified||n.classList.add("userAccountWidget--notVerified")}));var r=document.querySelectorAll(".userAccountWidget__email");r&&r.length>0&&r.forEach((function(n){return n.innerHTML=e.email})),n.ngApp.user.loggedInUUID=e.uid,t(e.uid,!0)}(e.user):function(){var e=window.nuglif,n=document.querySelectorAll(".userAccountWidget");n&&n.length>0&&(n.forEach((function(e){e.classList.remove("userAccountWidget--loggedIn"),e.classList.remove("userAccountWidget--notVerified")})),document.querySelectorAll(".mainNav__userAccountItem").forEach((function(e){return e.classList.remove("mainNav__userAccountItem--state-open")})));var o=document.querySelectorAll(".userAccountWidget__email");o&&o.length>0&&o.forEach((function(e){return e.innerHTML=""})),e.ngApp.user.loggedInUUID=null,t(null,!1)}()})),n.onAuthReady((function(){n.currentUser()?(o.ngApp.user.loggedInUUID=n.currentUser().uid,t(n.currentUser().uid,n.isLoggedIn())):t(null,!1),window.dataLayer.push({event:"authReady"})})),n.onLoginSuccess((function(){var e=window.location.href;(e.match(/logout/gi)||e.match(/reinitialiser-mot-de-passe/gi))&&(window.location="/mon-compte")})),n.onLogout((function(){}