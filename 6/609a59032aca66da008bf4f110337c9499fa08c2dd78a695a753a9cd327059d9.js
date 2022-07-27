var signal=function(){"use strict";var c=Le(function(e,s,u,a){return new(u=u||Promise)(function(n,t){function r(e){try{i(a.next(e))}catch(e){t(e)}}function o(e){try{i(a.throw(e))}catch(e){t(e)}}function i(e){var t;e.done?n(e.value):((t=e.value)instanceof u?t:new u(function(e){e(t)})).then(r,o)}i((a=a.apply(e,s||[])).next())})});var t=setTimeout;function a(e){return Boolean(e&&void 0!==e.length)}function r(){}function i(e){if(!(this instanceof i))throw new TypeError("Promises must be constructed via new");if("function"!=typeof e)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],f(e,this)}function o(n,r){for(;3===n._state;)n=n._value;0!==n._state?(n._handled=!0,i._immediateFn(function(){var e,t=1===n._state?r.onFulfilled:r.onRejected;if(null!==t){try{e=t(n._value)}catch(e){return void u(r.promise,e)}s(r.promise,e)}else(1===n._state?s:u)(r.promise,n._value)})):n._deferreds.push(r)}function s(t,e){try{if(e===t)throw new TypeError("A promise cannot be resolved with itself.");if(e&&("object"==typeof e||"function"==typeof e)){var n=e.then;if(e instanceof i)return t._state=3,t._value=e,void l(t);if("function"==typeof n)return void f((r=n,o=e,function(){r.apply(o,arguments)}),t)}t._state=1,t._value=e,l(t)}catch(e){u(t,e)}var r,o}function u(e,t){e._state=2,e._value=t,l(e)}function l(e){2===e._state&&0===e._deferreds.length&&i._immediateFn(function(){e._handled||i._unhandledRejectionFn(e._value)});for(var t=0,n=e._deferreds.length;t<n;t++)o(e,e._deferreds[t]);e._deferreds=null}function d(e,t,n){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof t?t:null,this.promise=n}function f(e,t){var n=!1;try{e(function(e){n||(n=!0,s(t,e))},function(e){n||(n=!0,u(t,e))})}catch(e){if(n)return;n=!0,u(t,e)}}i.prototype.catch=function(e){return this.then(null,e)},i.prototype.then=function(e,t){var n=new this.constructor(r);return o(this,new d(e,t,n)),n},i.prototype.finally=function(t){var n=this.constructor;return this.then(function(e){return n.resolve(t()).then(function(){return e})},function(e){return n.resolve(t()).then(function(){return n.reject(e)})})},i.all=function(t){return new i(function(o,i){if(!a(t))return i(new TypeError("Promise.all accepts an array"));var s=Array.prototype.slice.call(t);if(0===s.length)return o([]);var u=s.length;for(var e=0;e<s.length;e++)!function t(n,e){try{if(e&&("object"==typeof e||"function"==typeof e)){var r=e.then;if("function"==typeof r)return void r.call(e,function(e){t(n,e)},i)}s[n]=e,0==--u&&o(s)}catch(e){i(e)}}(e,s[e])})},i.allSettled=function(n){return new this(function(o,e){if(!n||void 0===n.length)return e(new TypeError(typeof n+" "+n+" is not iterable(cannot read property Symbol(Symbol.iterator))"));var i=Array.prototype.slice.call(n);if(0===i.length)return o([]);var s=i.length;for(var t=0;t<i.length;t++)!function t(n,e){if(e&&("object"==typeof e||"function"==typeof e)){var r=e.then;if("function"==typeof r)return void r.call(e,function(e){t(n,e)},function(e){i[n]={status:"rejected",reason:e},0==--s&&o(i)})}i[n]={status:"fulfilled",value:e},0==--s&&o(i)}(t,i[t])})},i.resolve=function(t){return t&&"object"==typeof t&&t.constructor===i?t:new i(function(e){e(t)})},i.reject=function(n){return new i(function(e,t){t(n)})},i.race=function(o){return new i(function(e,t){if(!a(o))return t(new TypeError("Promise.race accepts an array"));for(var n=0,r=o.length;n<r;n++)i.resolve(o[n]).then(e,t)})},i._immediateFn="function"==typeof setImmediate?function(e){setImmediate(e)}:function(e){t(e,0)},i._unhandledRejectionFn=function(e){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",e)};var h=i,p=function(e,t){return(p=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)};function e(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}p(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}var y=function(){return(y=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function n(e,t,n,r){var o,i=arguments.length,s=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var u=e.length-1;0<=u;u--)(o=e[u])&&(s=(i<3?o(s):3<i?o(t,n,s):o(t,n))||s);return 3<i&&s&&Object.defineProperty(t,n,s),s}function v(n,r){var o,i,s,u={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]},e={next:t(0),throw:t(1),return:t(2)};return"function"==typeof Symbol&&(e[Symbol.iterator]=function(){return this}),e;function t(t){return function(e){return function(t){if(o)throw new TypeError("Generator is already executing.");for(;u;)try{if(o=1,i&&(s=2&t[0]?i.return:t[0]?i.throw||((s=i.return)&&s.call(i),0):i.next)&&!(s=s.call(i,t[1])).done)return s;switch(i=0,(t=s?[2&t[0],s.value]:t)[0]){case 0:case 1:s=t;break;case 4:return u.label++,{value:t[1],done:!1};case 5:u.label++,i=t[1],t=[0];continue;case 7:t=u.ops.pop(),u.trys.pop();continue;default:if(!(s=0<(s=u.trys).length&&s[s.length-1])&&(6===t[0]||2===t[0])){u=0;continue}if(3===t[0]&&(!s||t[1]>s[0]&&t[1]<s[3])){u.label=t[1];break}if(6===t[0]&&u.label<s[1]){u.label=s[1],s=t;break}if(s&&u.label<s[2]){u.label=s[2],u.ops.push(t);break}s[2]&&u.ops.pop(),u.trys.pop();continue}t=r.call(n,u)}catch(e){t=[6,e],i=0}finally{o=s=0}if(5&t[0])throw t[1];return{value:t[0]?t[1]:void 0,done:!0}}([t,e])}}}var w="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function g(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function b(e){var t={exports:{}};return e(t,t.exports),t.exports}var m=g(b(function(e,t){var n;n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:w,e.exports=function(e){var x,A=e&&e.Promise||n.Promise,O=e&&e.XMLHttpRequest||n.XMLHttpRequest;return x=Object.create(n,{fetch:{value:void 0,writable:!0}}),function(u){var t,n,a=void 0!==x&&x||"undefined"!=typeof self&&self||void 0!==a&&a,r="URLSearchParams"in a,o="Symbol"in a&&"iterator"in Symbol,c="FileReader"in a&&"Blob"in a&&function(){try{return new Blob,!0}catch(e){return!1}}(),i="FormData"in a,l="ArrayBuffer"in a;function s(e){if("string"!=typeof e&&(e=String(e)),/[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(e)||""===e)throw new TypeError("Invalid character in header field name");return e.toLowerCase()}function d(e){return e="string"!=typeof e?String(e):e}function e(t){var e={next:function(){var e=t.shift();return{done:void 0===e,value:e}}};return o&&(e[Symbol.iterator]=function(){return e}),e}function f(t){this.map={},t instanceof f?t.forEach(function(e,t){this.append(t,e)},this):Array.isArray(t)?t.forEach(function(e){this.append(e[0],e[1])},this):t&&Object.getOwnPropertyNames(t).forEach(function(e){this.append(e,t[e])},this)}function h(e){if(e.bodyUsed)return A.reject(new TypeError("Already read"));e.bodyUsed=!0}function p(n){return new A(function(e,t){n.onload=function(){e(n.result)},n.onerror=function(){t(n.error)}})}function y(e){var t=new FileReader,n=p(t);return t.readAsArrayBuffer(e),n}function v(e){if(e.slice)return e.slice(0);var t=new Uint8Array(e.byteLength);return t.set(new Uint8Array(e)),t.buffer}function w(){return this.bodyUsed=!1,this._initBody=function(e){var t;this.bodyUsed=this.bodyUsed,(this._bodyInit=e)?"string"==typeof e?this._bodyText=e:c&&Blob.prototype.isPrototypeOf(e)?this._bodyBlob=e:i&&FormData.prototype.isPrototypeOf(e)?this._bodyFormData=e:r&&URLSearchParams.prototype.isPrototypeOf(e)?this._bodyText=e.toString():l&&c&&((t=e)&&DataView.prototype.isPrototypeOf(t))?(this._bodyArrayBuffer=v(e.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):l&&(ArrayBuffer.prototype.isPrototypeOf(e)||n(e))?this._bodyArrayBuffer=v(e):this._bodyText=e=Object.prototype.toString.call(e):this._bodyText="",this.headers.get("content-type")||("string"==typeof e?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):r&&URLSearchParams.prototype.isPrototypeOf(e)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},c&&(this.blob=function(){var e=h(this);if(e)return e;if(this._bodyBlob)return A.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return A.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return A.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){if(this._bodyArrayBuffer){var e=h(this);return e?e:ArrayBuffer.isView(this._bodyArrayBuffer)?A.resolve(this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset,this._bodyArrayBuffer.byteOffset+this._bodyArrayBuffer.byteLength)):A.resolve(this._bodyArrayBuffer)}return this.blob().then(y)}),this.text=function(){var e,t,n=h(this);if(n)return n;if(this._bodyBlob)return e=this._bodyBlob,t=new FileReader,n=p(t),t.readAsText(e),n;if(this._bodyArrayBuffer)return A.resolve(function(e){for(var t=new Uint8Array(e),n=new Array(t.length),r=0;r<t.length;r++)n[r]=String.fromCharCode(t[r]);return n.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return A.resolve(this._bodyText)},i&&(this.formData=function(){return this.text().then(m)}),this.json=function(){return this.text().then(JSON.parse)},this}l&&(t=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],n=ArrayBuffer.isView||function(e){return e&&-1<t.indexOf(Object.prototype.toString.call(e))}),f.prototype.append=function(e,t){e=s(e),t=d(t);var n=this.map[e];this.map[e]=n?n+", "+t:t},f.prototype.delete=function(e){delete this.map[s(e)]},f.prototype.get=function(e){return e=s(e),this.has(e)?this.map[e]:null},f.prototype.has=function(e){return this.map.hasOwnProperty(s(e))},f.prototype.set=function(e,t){this.map[s(e)]=d(t)},f.prototype.forEach=function(e,t){for(var n in this.map)this.map.hasOwnProperty(n)&&e.call(t,this.map[n],n,this)},f.prototype.keys=function(){var n=[];return this.forEach(function(e,t){n.push(t)}),e(n)},f.prototype.values=function(){var t=[];return this.forEach(function(e){t.push(e)}),e(t)},f.prototype.entries=function(){var n=[];return this.forEach(function(e,t){n.push([t,e])}),e(n)},o&&(f.prototype[Symbol.iterator]=f.prototype.entries);var g=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function b(e,t){if(!(this instanceof b))throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');var n,r=(t=t||{}).body;if(e instanceof b){if(e.bodyUsed)throw new TypeError("Already read");this.url=e.url,this.credentials=e.credentials,t.headers||(this.headers=new f(e.headers)),this.method=e.method,this.mode=e.mode,this.signal=e.signal,r||null==e._bodyInit||(r=e._bodyInit,e.bodyUsed=!0)}else this.url=String(e);if(this.credentials=t.credentials||this.credentials||"same-origin",!t.headers&&this.headers||(this.headers=new f(t.headers)),this.method=(n=t.method||this.method||"GET",e=n.toUpperCase(),-1<g.indexOf(e)?e:n),this.mode=t.mode||this.mode||null,this.signal=t.signal||this.signal,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&r)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(r),"GET"!==this.method&&"HEAD"!==this.method||"no-store"!==t.cache&&"no-cache"!==t.cache||((t=/([?&])_=[^&]*/).test(this.url)?this.url=this.url.replace(t,"$1_="+(new Date).getTime()):this.url+=(/\?/.test(this.url)?"&":"?")+"_="+(new Date).getTime())}function m(e){var n=new FormData;return e.trim().split("&").forEach(function(e){var t;e&&(e=(t=e.split("=")).shift().replace(/\+/g," "),t=t.join("=").replace(/\+/g," "),n.append(decodeURIComponent(e),decodeURIComponent(t)))}),n}function _(e,t){if(!(this instanceof _))throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');t=t||{},this.type="default",this.status=void 0===t.status?200:t.status,this.ok=200<=this.status&&this.status<300,this.statusText="statusText"in t?t.statusText:"",this.headers=new f(t.headers),this.url=t.url||"",this._initBody(e)}b.prototype.clone=function(){return new b(this,{body:this._bodyInit})},w.call(b.prototype),w.call(_.prototype),_.prototype.clone=function(){return new _(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new f(this.headers),url:this.url})},_.error=function(){var e=new _(null,{status:0,statusText:""});return e.type="error",e};var I=[301,302,303,307,308];_.redirect=function(e,t){if(-1===I.indexOf(t))throw new RangeError("Invalid status code");return new _(null,{status:t,headers:{location:e}})},u.DOMException=a.DOMException;try{new u.DOMException}catch(e){u.DOMException=function(e,t){this.message=e,this.name=t;e=Error(e);this.stack=e.stack},u.DOMException.prototype=Object.create(Error.prototype),u.DOMException.prototype.constructor=u.DOMException}function E(r,s){return new A(function(o,e){var t=new b(r,s);if(t.signal&&t.signal.aborted)return e(new u.DOMException("Aborted","AbortError"));var i=new O;function n(){i.abort()}i.onload=function(){var e,n,t={status:i.status,statusText:i.statusText,headers:(e=i.getAllResponseHeaders()||"",n=new f,e.replace(/\r?\n[\t ]+/g," ").split("\r").map(function(e){return 0===e.indexOf("\n")?e.substr(1,e.length):e}).forEach(function(e){var t=e.split(":"),e=t.shift().trim();e&&(t=t.join(":").trim(),n.append(e,t))}),n)};t.url="responseURL"in i?i.responseURL:t.headers.get("X-Request-URL");var r="response"in i?i.response:i.responseText;setTimeout(function(){o(new _(r,t))},0)},i.onerror=function(){setTimeout(function(){e(new TypeError("Network request failed"))},0)},i.ontimeout=function(){setTimeout(function(){e(new TypeError("Network request failed"))},0)},i.onabort=function(){setTimeout(function(){e(new u.DOMException("Aborted","AbortError"))},0)},i.open(t.method,function(t){try{return""===t&&a.location.href?a.location.href:t}catch(e){return t}}(t.url),!0),"include"===t.credentials?i.withCredentials=!0:"omit"===t.credentials&&(i.withCredentials=!1),"responseType"in i&&(c?i.responseType="blob":l&&t.headers.get("Content-Type")&&-1!==t.headers.get("Content-Type").indexOf("application/octet-stream")&&(i.responseType="arraybuffer")),!s||"object"!=typeof s.headers||s.headers instanceof f?t.headers.forEach(function(e,t){i.setRequestHeader(t,e)}):Object.getOwnPropertyNames(s.headers).forEach(function(e){i.setRequestHeader(e,d(s.headers[e]))}),t.signal&&(t.signal.addEventListener("abort",n),i.onreadystatechange=function(){4===i.readyState&&t.signal.removeEventListener("abort",n)}),i.send(void 0===t._bodyInit?null:t._bodyInit)})}E.polyfill=!0,a.fetch||(a.fetch=E,a.Headers=f,a.Request=b,a.Response=_),u.Headers=f,u.Request=b,u.Response=_,u.fetch=E,Object.defineProperty(u,"__esModule",{value:!0})}(t),{fetch:x.fetch,Headers:x.Headers,Request:x.Request,Response:x.Response,DOMException:x.DOMException}}}))({Promise:h}),_=m.fetch;m.Request,m.Response,m.Headers;var I,E=(e(x,I=Error),x);function x(e,t,n){void 0===n&&(n={});e=I.call(this,e)||this;return e.code=t,e.details=n,e.name="SignalError",e}var A=1/0,O="[object Symbol]",S=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,T=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,C="\\ud800-\\udfff",R="\\u2700-\\u27bf",j="a-z\\xdf-\\xf6\\xf8-\\xff",P="A-Z\\xc0-\\xd6\\xd8-\\xde",D="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",B="['’]",U="["+D+"]",k="[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]",q="\\d+",L="["+R+"]",F="["+j+"]",M="[^"+C+D+q+R+j+P+"]",N="(?:\\ud83c[\\udde6-\\uddff]){2}",V="[\\ud800-\\udbff][\\udc00-\\udfff]",G="["+P+"]",m="(?:"+F+"|"+M+")",D="(?:"+G+"|"+M+")",R="(?:['’](?:d|ll|m|re|s|t|ve))?",j="(?:['’](?:D|LL|M|RE|S|T|VE))?",P="(?:[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]|\\ud83c[\\udffb-\\udfff])?",M="[\\ufe0e\\ufe0f]?",P=M+P+("(?:\\u200d(?:"+["[^"+C+"]",N,V].join("|")+")"+M+P+")*"),P="(?:"+[L,N,V].join("|")+")"+P,H=RegExp(B,"g"),z=RegExp(k,"g"),J=RegExp([G+"?"+F+"+"+R+"(?="+[U,G,"$"].join("|")+")",D+"+"+j+"(?="+[U,G+m,"$"].join("|")+")",G+"?"+m+"+"+R,G+"+"+j,q,P].join("|"),"g"),Z=/[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,q="object"==typeof w&&w&&w.Object===Object&&w,P="object"==typeof self&&self&&self.Object===Object&&self,q=q||P||Function("return this")();var K,$=(K={"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"ss"},function(e){return null==K?void 0:K[e]});var Y,W=Object.prototype.toString,P=q.Symbol,q=P?P.prototype:void 0,X=q?q.toString:void 0;function Q(e){if("string"==typeof e)return e;if("symbol"==typeof(t=e)||function(e){return!!e&&"object"==typeof e}(t)&&W.call(t)==O)return X?X.call(e):"";var t=e+"";return"0"==t&&1/e==-A?"-0":t}function ee(e){return null==e?"":Q(e)}function te(e){var t,n={};for(t in e)n[ue(t)]=e[t];return n}function ne(){return Object.keys(ae).filter(function(e){return ae[e]})}function re(e,t){if(!t)return{currency:e,amount:0};var n=-1!==t.indexOf(".");return(t=Number(null===(t=t.match(/\d|\./g))||void 0===t?void 0:t.join(""))||0)%1!=0||n?t=Math.ceil(100*t):n||(t*=100),{currency:e,amount:t}}function oe(e){return void 0!==(e=null!=e?e:void 0)&&"string"!=typeof e}function ie(e){var u=e.baseUrl,a=e.token;return function(i,s){return void 0===i&&(i=""),void 0===s&&(s={}),c(void 0,void 0,void 0,function(){var n,r,o;return v(this,function(e){switch(e.label){case 0:return r=y({credentials:"include",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+a}},s),[4,_(""+("/"===(t=u).charAt(t.length-1)?t:t+"/")+i,r)];case 1:return[4,(o=e.sent()).json()];case 2:if(n=e.sent(),!o.ok)throw r=new E,(o=n.error)&&(r.code=o.code,r.details=o.detail,r.message=o.title),r;return[2,n]}var t})})}}function se(e){console&&console.error&&console.error(e.toString?e.toString():e)}var ue=(Y=function(e,t,n){return e+(n?"_":"")+t.toLowerCase()},function(e){return function(e,t,n,r){var o=-1,i=e?e.length:0;for(r&&i&&(n=e[++o]);++o<i;)n=t(n,e[o],o,e);return n}((e=((e=ee(e=e))&&e.replace(T,$).replace(z,"")).replace(H,""),e=ee(e),void 0!==(t=n?undefined:t)?e.match(t)||[]:(function(e){return Z.test(e)}(e)?function(e){return e.match(J)||[]}:function(e){return e.match(S)||[]})(e)),Y,"");var t,n}),ae={collectionPageView:!0,orderCancelation:!0,orderCompletion:!0,orderRefund:!0,pageView:!0,productSearch:!0,productPageView:!0};function ce(){return function(e,t,n){var r=n.value;return n.value=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];try{return r.apply(this,e)}catch(e){se(e)}},n}}var le,de=(e(fe,le=TypeError),fe);function(){}