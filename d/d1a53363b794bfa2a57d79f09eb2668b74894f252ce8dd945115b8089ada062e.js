(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{1553:function(e){var t=function(e){"use strict";var t,n=Object.prototype,r=n.hasOwnProperty,i="function"===typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",a=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function u(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(L){u=function(e,t,n){return e[t]=n}}function c(e,t,n,r){var i=t&&t.prototype instanceof m?t:m,o=Object.create(i.prototype),a=new S(r||[]);return o._invoke=function(e,t,n){var r=d;return function(i,o){if(r===f)throw new Error("Generator is already running");if(r===h){if("throw"===i)throw o;return A()}for(n.method=i,n.arg=o;;){var a=n.delegate;if(a){var s=D(a,n);if(s){if(s===v)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===d)throw r=h,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=f;var u=l(e,t,n);if("normal"===u.type){if(r=n.done?h:p,u.arg===v)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r=h,n.method="throw",n.arg=u.arg)}}}(e,n,a),o}function l(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(L){return{type:"throw",arg:L}}}e.wrap=c;var d="suspendedStart",p="suspendedYield",f="executing",h="completed",v={};function m(){}function g(){}function y(){}var b={};u(b,o,(function(){return this}));var _=Object.getPrototypeOf,w=_&&_(_(F([])));w&&w!==n&&r.call(w,o)&&(b=w);var C=y.prototype=m.prototype=Object.create(b);function E(e){["next","throw","return"].forEach((function(t){u(e,t,(function(e){return this._invoke(t,e)}))}))}function x(e,t){function n(i,o,a,s){var u=l(e[i],e,o);if("throw"!==u.type){var c=u.arg,d=c.value;return d&&"object"===typeof d&&r.call(d,"__await")?t.resolve(d.__await).then((function(e){n("next",e,a,s)}),(function(e){n("throw",e,a,s)})):t.resolve(d).then((function(e){c.value=e,a(c)}),(function(e){return n("throw",e,a,s)}))}s(u.arg)}var i;this._invoke=function(e,r){function o(){return new t((function(t,i){n(e,r,t,i)}))}return i=i?i.then(o,o):o()}}function D(e,n){var r=e.iterator[n.method];if(r===t){if(n.delegate=null,"throw"===n.method){if(e.iterator.return&&(n.method="return",n.arg=t,D(e,n),"throw"===n.method))return v;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var i=l(r,e.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,v;var o=i.arg;return o?o.done?(n[e.resultName]=o.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,v):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,v)}function k(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function H(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function S(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(k,this),this.reset(!0)}function F(e){if(e){var n=e[o];if(n)return n.call(e);if("function"===typeof e.next)return e;if(!isNaN(e.length)){var i=-1,a=function n(){for(;++i<e.length;)if(r.call(e,i))return n.value=e[i],n.done=!1,n;return n.value=t,n.done=!0,n};return a.next=a}}return{next:A}}function A(){return{value:t,done:!0}}return g.prototype=y,u(C,"constructor",y),u(y,"constructor",g),g.displayName=u(y,s,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"===typeof e&&e.constructor;return!!t&&(t===g||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,u(e,s,"GeneratorFunction")),e.prototype=Object.create(C),e},e.awrap=function(e){return{__await:e}},E(x.prototype),u(x.prototype,a,(function(){return this})),e.AsyncIterator=x,e.async=function(t,n,r,i,o){void 0===o&&(o=Promise);var a=new x(c(t,n,r,i),o);return e.isGeneratorFunction(n)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},E(C),u(C,s,"Generator"),u(C,o,(function(){return this})),u(C,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=F,S.prototype={constructor:S,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(H),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function i(r,i){return s.type="throw",s.arg=e,n.next=r,i&&(n.method="next",n.arg=t),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var u=r.call(a,"catchLoc"),c=r.call(a,"finallyLoc");if(u&&c){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return i(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=e,a.arg=t,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),v},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),H(n),v}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var i=r.arg;H(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:F(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),v}},e}(e.exports);try{regeneratorRuntime=t}catch(n){"object"===typeof globalThis?globalThis.regeneratorRuntime=t:Function("r","regeneratorRuntime = r")(t)}},7757:function(e,t,n){e.exports=n(1553)},2929:function(e){"undefined"!=typeof self&&self,e.exports=function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/dist/",t(t.s=0)}([function(e,t,n){var r=n(1),i=function(e){var t=e.baseUrl||"",n=e.userId||"",i=e.onChange||function(){},o=e.onError||function(){};if(t&&n){var a=t+"/hal/"+n+"/counter?withPollingTime=true",s=null,u=null,c=!1,l=null,d=function(e){if(isNaN(e))return 120;var t=e/1e3;return t>=30&&t<=120?t:120},p=function(){if(!c){var e=new XMLHttpRequest;e.open("GET",a,!0),e.setRequestHeader("Content-type","application/json"),e.send(),c=!0,e.onreadystatechange=function(){if(4===e.readyState){if(c=!1,200!==e.status)return void o("Error in AJAX call. HTTP code: "+e.status);var t=JSON.parse(e.responseText),n=parseInt(t.unread),a=d(parseInt(t.pollingTime));s!==n&&(i(n),s=n),u!==a&&(l&&l.stop(),u=a,l=r.onEvery(a,p))}}}};return p(),{destroy:function(e){l&&l.stop(),null!=e&&i(e)}}}o("baseUrl and userId are mandatory")};i.VERSION="0.0.0-placeholder",e.exports=i},function(e,t,n){var r;(function(){var i;i=function(){var e,t,n,r,i,o,a,s,u,c,l,d,p;return s={},n=document,c=!1,l="active",o=6e4,i=!1,t=function(){var e,t,n,r,i;return r={},t="__ceGUID",e=function(e,n,i){return e[t]=void 0,e[t]||(e[t]="ifvisible.object.event.identifier"),r[e[t]]||(r[e[t]]={}),r[e[t]][n]||(r[e[t]][n]=[]),r[e[t]][n].push(i)},n=function(e,n,i){var o,a,s,u,c;if(e[t]&&r[e[t]]&&r[e[t]][n]){for(c=[],a=0,s=(u=r[e[t]][n]).length;a<s;a++)o=u[a],c.push(o(i||{}));return c}},i=function(e,n,i){var o,a,s,u,c;if(i){if(e[t]&&r[e[t]]&&r[e[t]][n])for(a=s=0,u=(c=r[e[t]][n]).length;s<u;a=++s)if((o=c[a])===i)return r[e[t]][n].splice(a,1),o}else if(e[t]&&r[e[t]]&&r[e[t]][n])return delete r[e[t]][n]},{add:e,remove:i,fire:n}}(),e=function(){var e;return e=!1,function(t,n,r){return e||(e=t.addEventListener?function(e,t,n){return e.addEventListener(t,n,!1)}:t.attachEvent?function(e,t,n){return e.attachEvent("on"+t,n,!1)}:function(e,t,n){return e["on"+t]=n}),e(t,n,r)}}(),a=function(){var e,t,r,i,o;for(i=void 0,o=3,r=n.createElement("div"),e=r.getElementsByTagName("i"),t=function(){return r.innerHTML="\x3c!--[if gt IE "+ ++o+"]><i></i><![endif]--\x3e",e[0]};t(););return o>4?o:i}(),r=!1,p=void 0,void 0!==n.hidden?(r="hidden",p="visibilitychange"):void 0!==n.mozHidden?(r="mozHidden",p="mozvisibilitychange"):void 0!==n.msHidden?(r="msHidden",p="msvisibilitychange"):void 0!==n.webkitHidden&&(r="webkitHidden",p="webkitvisibilitychange"),d=function(){var t,r;return t=!1,(r=function(){return clearTimeout(t),"active"!==l&&s.wakeup(),i=+new Date,t=setTimeout((function(){if("active"===l)return s.idle()}),o)})(),e(n,"mousemove",r),e(n,"keyup",r),e(n,"touchstart",r),e(window,"scroll",r),s.focus(r),s.wakeup(r)},u=function(){var t;return!!c||(!1===r?(t="blur",a<9&&(t="focusout"),e(window,t,(function(){return s.blur()})),e(window,"focus",(function(){return s.focus()}))):e(n,p,(function(){return n[r]?s.blur():s.focus()}),!1),c=!0,d())},s={setIdleDuration:function(e){return o=1e3*e},getIdleDuration:function(){return o},getIdleInfo:function(){var e,t;return e=+new Date,t={},"idle"===l?(t.isIdle=!0,t.idleFor=e-i,t.timeLeft=0,t.timeLeftPer=100):(t.isIdle=!1,t.idleFor=e-i,t.timeLeft=i+o-e,t.timeLeftPer=(100-100*t.timeLeft/o).toFixed(2)),t},focus:function(e){return"function"==typeof e?this.on("focus",e):(l="active",t.fire(this,"focus"),t.fire(this,"wakeup"),t.fire(this,"statusChanged",{status:l})),this},blur:function(e){return"function"==typeof e?this.on("blur",e):(l="hidden",t.fire(this,"blur"),t.fire(this,"idle"),t.fire(this,"statusChanged",{status:l})),this},idle:function(e){return"function"==typeof e?this.on("idle",e):(l="idle",t.fire(this,"idle"),t.fire(this,"statusChanged",{status:l})),this},wakeup:function(e){return"function"==typeof e?this.on("wakeup",e):(l="active",t.fire(this,"wakeup"),t.fire(this,"statusChanged",{status:l})),this},on:function(e,n){return u(),t.add(this,e,n),this},off:function(e,n){return u(),t.remove(this,e,n),this},onEvery:function(e,t){var n,r;return u(),n=!1,t&&(r=setInterval((function(){if("active"===l&&!1===n)return t()}),1e3*e)),{stop:function(){return clearInterval(r)},pause:function(){return n=!0},resume:function(){return n=!1},code:r,callback:t}},now:function(e){return u(),l===(e||"active")}}},void 0!==(r=function(){return i()}.call(t,n,t,e))&&(e.exports=r)}).call(this)}])},5004:function(e,t,n){"use strict";n.d(t,{xx:function(){return o}});const r=e=>"string"===typeof e&&e.length>0;class i{constructor(e,t,n){this.id=e,this.name=t,this.email=n}}const o=()=>{var e;const t=(e=>{var t;const n=`; ${document.cookie}`.split(`; ${e}=`);return void 0==n||2!=n.length?"":null===(t=n.pop())||void 0===t?void 0:t.split(";").shift()})("user_data");if(void 0===t||""===t)return null;try{const o=JSON.parse(t);if(!r(o.id))throw new Error("Missing or invalid user id");if(!r(o.name))throw new Error("Missing or invalid user name");if(n=o.email,!/[A-Fa-f0-9]{64}/.test(n))throw new Error("Missing or invalid user email hash");return new i(o.id,decodeURIComponent(null!==(e=o.name)&&void 0!==e?e:""),o.email)}catch(o){return console.warn("Unable to parse user data from cookie:",o),null}var n}},3402:function(e,t,n){"use strict";n.d(t,{a:function(){return i}});var r=n(7294);function i(e,t=!1){const[n,i]=(0,r.useState)(t);return(0,r.useEffect)((()=>{if("undefined"===typeof(null===window||void 0===window?void 0:window.matchMedia))return;let t=!0;const n=window.matchMedia(e),r="addEventListener"in n,o=()=>{t&&i(n.matches)};return r?n.addEventListener("change",o):n.addListener(o),i(n.matches),()=>{t=!1,r?n.removeEventListener("change",o):n.removeListener(o)}}),[e]),n}},734:function(e,t,n){"use strict";n.d(t,{R:function(){return r}});const r=(0,n(7294).createContext)({isMobile:!0,isTablet:!1,isDesktop:!1,viewport:"mobile"})},4892:function(e,t,n){"use strict";n.d(t,{S:function(){return o}});var r=n(7294),i=n(734);function o(){return(0,r.useContext)(i.R)}},5012:function(e,t,n){"use strict";n.d(t,{G:function(){return be}});const r=()=>+new Date,i="undefined"!==typeof window&&"function"===typeof window.requestIdleCallback;class o{constructor(e){this.initTime_=e}get didTimeout(){return!1}timeRemaining(){return Math.max(0,50-(r()-this.initTime_))}}const a=i?window.requestIdleCallback.bind(window):e=>{const t=new o(r());return setTimeout((()=>e(t)),0)},s=i?window.cancelIdleCallback.bind(window):e=>{clearTimeout(e)},u="function"===typeof Promise&&Promise.toString().indexOf("[native code]")>-1?e=>{Promise.resolve().then(e)}:(()=>{let e=0,t=[];const n=new MutationObserver((()=>{t.forEach((e=>e())),t=[]})),r=document.createTextNode("");return n.observe(r,{characterData:!0}),n=>{t.push(n),r.data=String(++e%2)}})(),c=!("undefined"===typeof window||"object"!==typeof window.safari||!window.safari.pushNotification);class l{constructor({ensureTasksRun:e=!1,defaultMinTaskTime:t=0}={}){this.idleCallbackHandle_=null,this.taskQueue_=[],this.isProcessing_=!1,this.state_=null,this.defaultMinTaskTime_=t,this.ensureTasksRun_=e,this.runTasksImmediately=this.runTasksImmediately.bind(this),this.runTasks_=this.runTasks_.bind(this),this.onVisibilityChange_=this.onVisibilityChange_.bind(this),"undefined"!==typeof addEventListener&&this.ensureTasksRun_&&(addEventListener("visibilitychange",this.onVisibilityChange_,!0),c&&addEventListener("beforeunload",this.runTasksImmediately,!0))}pushTask(e,t){this.addTask_(Array.prototype.push,e,t)}unshiftTask(e,t){this.addTask_(Array.prototype.unshift,e,t)}runTasksImmediately(){this.runTasks_()}hasPendingTasks(){return this.taskQueue_.length>0}clearPendingTasks(){this.taskQueue_=[],this.cancelScheduledRun_()}getState(){return this.state_}destroy(){this.taskQueue_=[],this.cancelScheduledRun_(),this.ensureTasksRun_&&(removeEventListener("visibilitychange",this.onVisibilityChange_,!0),c&&removeEventListener("beforeunload",this.runTasksImmediately,!0))}addTask_(e,t,{minTaskTime:n=this.defaultMinTaskTime_}={}){const i={time:r(),visibilityState:document.visibilityState};e.call(this.taskQueue_,{state:i,task:t,minTaskTime:n}),this.scheduleTasksToRun_()}scheduleTasksToRun_(){this.ensureTasksRun_&&"hidden"===document.visibilityState?u(this.runTasks_):this.idleCallbackHandle_||(this.idleCallbackHandle_=a(this.runTasks_))}runTasks_(e){if(this.cancelScheduledRun_(),!this.isProcessing_){for(this.isProcessing_=!0;this.hasPendingTasks()&&!d(e,this.taskQueue_[0].minTaskTime);){const{task:e,state:t}=this.taskQueue_.shift();this.state_=t,e(t),this.state_=null}this.isProcessing_=!1,this.hasPendingTasks()&&this.scheduleTasksToRun_()}}cancelScheduledRun_(){null!=this.idleCallbackHandle_&&s(this.idleCallbackHandle_),this.idleCallbackHandle_=null}onVisibilityChange_(){"hidden"===document.visibilityState&&this.runTasksImmediately()}}const d=(e,t)=>!!(e&&e.timeRemaining()<=t);var p=n(5778),f=n(236),h=n.n(f),v=n(2492),m=n.n(v),g=n(296),y=n.n(g),b=n(7037),_=n.n(b),w=n(247),C=n.n(w),E=n(6468),x=n(3754),D=n.n(x);var k="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},H=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var S=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.events={}}return H(e,[{key:"on",value:function(e,t){"object"!==k(this.events[e])&&(this.events[e]=[]),this.events[e].push(t)}},{key:"off",value:function(e,t){this.removeListener(e,t)}},{key:"removeListener",value:function(e,t){if("object"===k(this.events[e])){var n=this.events[e].indexOf(t);-1!==n&&this.events[e].splice(n,1)}}},{key:"removeAllListeners",value:function(){this.events={}}},{key:"emit",value:function(e,t){"object"===k(this.events[e])&&this.events[e].filter((function(e){return null!=e})).forEach((function(e){return e(t)}))}}]),e}();var F="_pulse2data",A="_pulse2test",L="_pulse2env",T=!0;function V(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=Date.now()+1e3*e*60*60*24;return new Date(t)}function I(e){return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*"+encodeURIComponent(e).replace(/[-.+*]/g,"\\$&")+"\\s*\\=\\s*([^;]*).*$)|^.*$"),"$1"))}var O=new S;function P(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,i=V(r).toUTCString(),o="";o=e+"="+encodeURIComponent(t),o+=";path=/",n&&(o+=";domain="+n),r&&(o+=";expires="+i),T&&"https:"===window.location.protocol&&(o+=";SameSite=None;Secure"),document.cookie=o}function M(e,t){P(e,"",t,-1)}function j(){for(var e=(""+window.location.hostname).split("."),t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:16;if(!D()(e))throw new Error("Invalid input '"+e+"', please provide a number");for(var t="";t.length<e;)t+=Math.round(2147483647*Math.random()).toString(36);return t.substr(0,e)}(),n=window.location.hostname,r="",i=0;i<e.length;i+=1)try{if(n=e.slice(-(i+1)).join("."),P(A,t,n,1),r=I(A),M(A,n),r===t)break}catch(o){}return n}function B(e){try{var t="",n={};try{t=I(L)}catch(i){}try{n=t?JSON.parse(t):[]}catch(i){}n[e]=Date.now();var r=Object.keys(n).map((function(e){return{id:e,date:n[e]}})).sort((function(e){return e.date})).slice(0,5).reduce((function(e,t){return m()(e,(n={},r=t.id,i=t.date,r in n?Object.defineProperty(n,r,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[r]=i,n));var n,r,i}),{});P(L,JSON.stringify(r),j(),365)}catch(i){}}function R(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I(F);if(!_()(e))throw new Error("This method expects a cookie *string*");var t=_()(e)?decodeURIComponent(e).split(","):[];10!==t.length&&(t=[]);var n=I(L),r=void 0;if(r)try{r=JSON.parse(n)}catch(i){r=void 0}return{environmentId:t[0],prevUserId:t[2]?t[2]:void 0,validateAfter:t[3]?parseInt(t[3],10):void 0,jwe:t[4],anId:t[5],syncWithAppNexus:void 0,doTracking:t[7]?"true"===t[7]:void 0,pixelInjected:t[8]?"true"===t[8]:void 0,adId:t[9],altEnvIds:r,visitorIdPlaceholder:t[1]}}function N(e){if(_()(e))throw new Error("This method expects a parsed cookie object, not a string");var t=e||{},n=t.environmentId,r=void 0===n?"":n,i=t.prevUserId,o=void 0===i?"":i,a=t.jwe,s=void 0===a?"":a,u=t.anId,c=void 0===u?"":u,l=t.doTracking,d=void 0===l?"":l,p=t.pixelInjected,f=void 0===p?"":p,h=t.adId,v=void 0===h?"":h,m=t.visitorIdPlaceholder,g=void 0===m?"v":m,y=Date.now(),b=[r,g,o,(new Date).setTime(y+9e5),s,c,void 0,d,f,v].join(",");P(F,b,j(),730),O.emit("environmentIdSet",r),O.emit("jweSet",s)}function z(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:I(F),n=R(t),r=Date.now(),i={};return t&&-1===t.indexOf("undefined")&&n.environmentId&&n.jwe?String(e)!==String(n.prevUserId)?(i.syncWithCis=!0,i.waitForCis=Boolean(e)):n.validateAfter&&r>n.validateAfter&&(i.syncWithCis=!0):(i.syncWithCis=!0,i.waitForCis=!0),i}var Z=n(1469),U=n.n(Z);function $(e){if(U()(e)&&e.length>0){var t=e[0];return fetch("https://"+t+"/api/v1/pulse",{method:"GET",credentials:"include"}).then((function(e){return e.json()})).then((function(t){var n=(t||{}).pulse2data;if(n)try{var r=R(n);return r.environmentId?(B(R().environmentId),N(r),Promise.resolve(n)):$(e.slice(1))}catch(i){return $(e.slice(1))}return $(e.slice(1))})).catch((function(){return $(e.slice(1))}))}return Promise.resolve()}var q=function(){window.pulseCisSync=window.pulseCisSync||{};var e=window.pulseCisSync;return e.requestPromise=e.requestPromise||null,{completeFetchRequest:function(){e.requestPromise=null},getPendingFetchRequest:function(){return e.requestPromise},newFetchRequest:function(t){return e.requestPromise=t,t}}},G=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=q(),r=n.newFetchRequest,i=n.getPendingFetchRequest,o=n.completeFetchRequest,a=i()||r(fetch(e,t));return a.catch((function(){return o()})),a.then((function(e){return o(),e.clone()}))},W="https://cis.mpianalytics.com",X="/api/v1/identify";function J(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.resolvedJwe,n=e.userId,r=e.anId,i=e.environmentId,o=e.cisLocation,a=t;return G(o+X,{method:"POST",headers:new Headers({"Content-Type":"application/json"}),body:JSON.stringify({jwe:a,userId:n,anId:r,environmentId:a?void 0:i}),credentials:"include"})}var Y=Promise.resolve(),K={syncWithAppNexus:!1,syncWithCis:!0,waitForCis:!0};var Q=function(e,t,n){var r=void 0!==t?K:z(e),i=r.syncWithCis,o=r.waitForCis,a=i?function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments[2],r=arguments[3];return Y=Y.then((function(){var i=R(),o=i.jwe,a=i.anId,s=i.environmentId,u=r?K:z(e),c=r||o;return u.syncWithCis||t?J({resolvedJwe:c,userId:e,anId:a,environmentId:s,cisLocation:n}).then((function(e){return e.json()})).then((function(t){var n=t.data;return N(m()({},n,{prevUserId:e})),$(n.crossReference),Promise.resolve()})):Promise.resolve()}))}(e,!1,n||W,t).catch((function(){return Promise.resolve()})):Promise.resolve();return o?a.then((function(){return R()})):Promise.resolve(R())},ee=function(e){var t=this;this.value=e,this.promise=new Promise((function(e,n){t.resolve=e,t.reject=n}))},te=function(e,t){for(var n=0,r=t.length,i=e.length;n<r;n++,i++)e[i]=t[n];return e},ne=function(e,t,n,r){return new(n||(n=Promise))((function(i,o){function a(e){try{u(r.next(e))}catch(t){o(t)}}function s(e){try{u(r.throw(e))}catch(t){o(t)}}function u(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}u((r=r.apply(e,t||[])).next())}))},re=function(e,t){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"===typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(i=(i=a.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=t.call(e,a)}catch(s){o=[6,s],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}},ie=function(e,t){for(var n=0,r=t.length,i=e.length;n<r;n++,i++)e[i]=t[n];return e},oe=function(){function e(){this.queuedEvents=[]}return e.prototype.queueEvent=function(e,t){void 0===t&&(t={});var n=new ee(e);return this.queuedEvents.push(n),t.resolveOnQueued&&n.resolve("Event added to queue"),n.promise},e.prototype.sendEvents=function(e,t){!function(e,t){if(void 0===t&&(t="Is not a function"),"function"!==typeof e)throw new Error(t)}(e,"Send handler is not a function");var n=this.getQueuedEvents();if(0===n.length)return Promise.resolve(!0);this._clearQueuedEvents();var r,i,o=(void 0===(r=n)&&(r=[]),void 0===(i=t)&&(i=10),r.length<i||0===i?[te([],r)]:r.reduce((function(e,t,n){var r=Math.floor(n/i);return e[r]=te(te([],e[r]||[]),[t]),e}),[]));return this._sendBatchedEvents(o,e)},e.prototype.getQueuedEvents=function(){return ie([],this.queuedEvents)},e.prototype._clearQueuedEvents=function(){this.queuedEvents=[]},e.prototype._sendBatchedEvents=function(e,t){var n=this,r=e.map((function(e){return ne(n,void 0,void 0,(function(){}