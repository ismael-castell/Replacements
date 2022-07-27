/*!version: 220603.1018 */

!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.postscribe=t():e.postscribe=t()}(this,function(){return i={},n.m=a=[function(e,t,n){"use strict";var a,i=n(1),r=(a=i)&&a.__esModule?a:{default:a};e.exports=r.default},function(e,t,n){"use strict";t.__esModule=!0;var d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e};t.default=f;var a,i=n(2),s=(a=i)&&a.__esModule?a:{default:a},r=function(e){{if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}}(n(4));function l(){}var o={afterAsync:l,afterDequeue:l,afterStreamStart:l,afterWrite:l,autoFix:!0,beforeEnqueue:l,beforeWriteToken:function(e){return e},beforeWrite:function(e){return e},done:l,error:function(e){throw new Error(e.msg)},releaseAsync:!1},c=0,p=[],m=null;function u(){var e,t=p.shift();t&&((e=r.last(t)).afterDequeue(),t.stream=function(e,t,a){(m=new s.default(e,a)).id=c++,m.name=a.name||m.id,f.streams[m.name]=m;var n=e.ownerDocument,i={close:n.close,open:n.open,write:n.write,writeln:n.writeln};function r(e){e=a.beforeWrite(e),m.write(e),a.afterWrite(e)}d(n,{close:l,open:l,write:function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return r(t.join(""))},writeln:function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return r(t.join("")+"\n")}});var o=m.win.onerror||l;return m.win.onerror=function(e,t,n){a.error({msg:e+" - "+t+": "+n}),o.apply(m.win,[e,t,n])},m.write(t,function(){d(n,i),m.win.onerror=o,a.done(),m=null,u()}),m}.apply(void 0,t),e.afterStreamStart())}function f(e,t,n){if(r.isFunction(n))n={done:n};else if("clear"===n)return p=[],m=null,void(c=0);n=r.defaults(n,o);var a=[e=/^#/.test(e)?window.document.getElementById(e.substr(1)):e.jquery?e[0]:e,t,n];return e.postscribe={cancel:function(){a.stream?a.stream.abort():a[1]=l}},n.beforeEnqueue(a),p.push(a),m||u(),e.postscribe}d(f,{streams:{},queue:p,WriteStream:s.default})},function(e,t,n){"use strict";t.__esModule=!0;var a,d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},i=n(3),r=(a=i)&&a.__esModule?a:{default:a},o=function(e){{if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}}(n(4));var c="data-ps-",p="ps-style",m="ps-script";function s(e,t){var n=c+t,a=e.getAttribute(n);return o.existy(a)?String(a):a}function l(e,t,n){var a=2<arguments.length&&void 0!==n?n:null,i=c+t;o.existy(a)&&""!==a?e.setAttribute(i,a):e.removeAttribute(i)}var u=(f.prototype.write=function(){var e;for((e=this.writeQueue).push.apply(e,arguments);!this.deferredRemote&&this.writeQueue.length;){var t=this.writeQueue.shift();o.isFunction(t)?this._callFunction(t):this._writeImpl(t)}},f.prototype._callFunction=function(e){var t={type:"function",value:e.name||e.toString()};this._onScriptStart(t),e.call(this.win,this.doc),this._onScriptDone(t)},f.prototype._writeImpl=function(e){this.parser.append(e);for(var t=void 0,n=void 0,a=void 0,i=[];(t=this.parser.readToken())&&!(n=o.isScript(t))&&!(a=o.isStyle(t));)(t=this.options.beforeWriteToken(t))&&i.push(t);0<i.length&&this._writeStaticTokens(i),n&&this._handleScriptToken(t),a&&this._handleStyleToken(t)},f.prototype._writeStaticTokens=function(e){var t=this._buildChunk(e);return t.actual?(t.html=this.proxyHistory+t.actual,this.proxyHistory+=t.proxy,this.proxyRoot.innerHTML=t.html,this._walkChunk(),t):null},f.prototype._buildChunk=function(e){for(var t=this.actuals.length,n=[],a=[],i=[],r=e.length,o=0;o<r;o++){var d,s=e[o],l=s.toString();n.push(l),s.attrs?/^noscript$/i.test(s.tagName)||(d=t++,a.push(l.replace(/(\/?>)/," "+c+"id="+d+" $1")),s.attrs.id!==m&&s.attrs.id!==p&&i.push("atomicTag"===s.type?"":"<"+s.tagName+" "+c+"proxyof="+d+(s.unary?" />":">"))):(a.push(l),i.push("endTag"===s.type?l:""))}return{tokens:e,raw:n.join(""),actual:a.join(""),proxy:i.join("")}},f.prototype._walkChunk=function(){for(var e=void 0,t=[this.proxyRoot];o.existy(e=t.shift());){var n,a=1===e.nodeType;a&&s(e,"proxyof")||(a&&l(this.actuals[s(e,"id")]=e,"id"),(n=e.parentNode&&s(e.parentNode,"proxyof"))&&this.actuals[n].appendChild(e)),t.unshift.apply(t,o.toArray(e.childNodes))}},f.prototype._handleScriptToken=function(e){var t=this,n=this.parser.clear();n&&this.writeQueue.unshift(n),e.src=e.attrs.src||e.attrs.SRC,(e=this.options.beforeWriteToken(e))&&(e.src&&this.scriptStack.length?this.deferredRemote=e:this._onScriptStart(e),this._writeScriptToken(e,function(){t._onScriptDone(e)}))},f.prototype._handleStyleToken=function(e){var t=this.parser.clear();t&&this.writeQueue.unshift(t),e.type=e.attrs.type||e.attrs.TYPE||"text/css",(e=this.options.beforeWriteToken(e))&&this._writeStyleToken(e),t&&this.write()},f.prototype._writeStyleToken=function(e){var t=this._buildStyle(e);this._insertCursor(t,p),e.content&&(t.styleSheet&&!t.sheet?t.styleSheet.cssText=e.content:t.appendChild(this.doc.createTextNode(e.content)))},f.prototype._buildStyle=function(e){var n=this.doc.createElement(e.tagName);return n.setAttribute("type",e.type),o.eachKey(e.attrs,function(e,t){n.setAttribute(e,t)}),n},f.prototype._insertCursor=function(e,t){this._writeImpl('<span id="'+t+'"/>');var n=this.doc.getElementById(t);n&&n.parentNode.replaceChild(e,n)},f.prototype._onScriptStart=function(e){e.outerWrites=this.writeQueue,this.writeQueue=[],this.scriptStack.unshift(e)},f.prototype._onScriptDone=function(e){e===this.scriptStack[0]?(this.scriptStack.shift(),this.write.apply(this,e.outerWrites),!this.scriptStack.length&&this.deferredRemote&&(this._onScriptStart(this.deferredRemote),this.deferredRemote=null)):this.options.error({msg:"Bad script nesting or script finished twice"})},f.prototype._writeScriptToken=function(e,t){var n=this._buildScript(e),a=this._shouldRelease(n),i=this.options.afterAsync;e.src&&(n.src=e.src,this._scriptLoadHandler(n,a?i:function(){t(),i()}));try{this._insertCursor(n,m),n.src&&!a||t()}catch(e){this.options.error(e),t()}},f.prototype._buildScript=function(e){var n=this.doc.createElement(e.tagName);return o.eachKey(e.attrs,function(e,t){n.setAttribute(e,t)}),e.content&&(n.text=e.content),n},f.prototype._scriptLoadHandler=function(t,n){function a(){t=t.onload=t.onreadystatechange=t.onerror=null}var i=this.options.error;function e(){a(),null!=n&&n(),n=null}function r(e){a(),i(e),null!=n&&n(),n=null}function o(e,t){var n=e["on"+t];null!=n&&(e["_on"+t]=n)}o(t,"load"),o(t,"error"),d(t,{onload:function(){if(t._onload)try{t._onload.apply(this,Array.prototype.slice.call(arguments,0))}catch(e){r({msg:"onload handler failed "+e+" @ "+t.src})}e()},onerror:function(){if(t._onerror)try{t._onerror.apply(this,Array.prototype.slice.call(arguments,0))}catch(e){return void r({msg:"onerror handler failed "+e+" @ "+t.src})}r({msg:"remote script failed "+t.src})},onreadystatechange:function(){/^(loaded|complete)$/.test(t.readyState)&&e()}})},f.prototype._shouldRelease=function(e){return!/^script$/i.test(e.nodeName)||!!(this.options.releaseAsync&&e.src&&e.hasAttribute("async"))},f);function(){}t.default=u},function(e,t,n){var a;a=function(){return i={},n.m=a=[function(e,t,n){"use strict";var a,i=n(1),r=(a=i)&&a.__esModule?a:{default:a};e.exports=r.default},function(e,t,n){"use strict";t.__esModule=!0;var a,o=l(n(2)),i=l(n(3)),r=n(6),d=(a=r)&&a.__esModule?a:{default:a},s=n(5);function l(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}var c={comment:/^<!--/,endTag:/^<\//,atomicTag:/^<\s*(script|style|noscript|iframe|textarea)[\s\/>]/i,startTag:/^</,chars:/^[^<]/},p=(m.prototype.append=function(e){this.stream+=e},m.prototype.prepend=function(e){this.stream=e+this.stream},m.prototype._readTokenImpl=function(){var e=this._peekTokenImpl();if(e)return this.stream=this.stream.slice(e.length),e},m.prototype._peekTokenImpl=function(){for(var e in c)if(c.hasOwnProperty(e)&&c[e].test(this.stream)){var t=i[e](this.stream);if(t)return"startTag"===t.type&&/script|style/i.test(t.tagName)?null:(t.text=this.stream.substr(0,t.length),t)}},m.prototype.peekToken=function(){return this._peekToken()},m.prototype.readToken=function(){return this._readToken()},m.prototype.readTokens=function(e){for(var t=void 0;t=this.readToken();)if(e[t.type]&&!1===e[t.type](t))return},m.prototype.clear=function(){var e=this.stream;return this.stream="",e},m.prototype.rest=function(){return this.stream},m);function m(){var e=this,t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"",n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,m),this.stream=t;var a=!1,i={};for(var r in o)o.hasOwnProperty(r)&&(n.autoFix&&(i[r+"Fix"]=!0),a=a||i[r+"Fix"]);a?(this._readToken=(0,d.default)(this,i,function(){return e._readTokenImpl()}),this._peekToken=(0,d.default)(this,i,function(){return e._peekTokenImpl()})):(this._readToken=this._readTokenImpl,this._peekToken=this._peekTokenImpl)}for(var u in(t.default=p).tokenToString=function(e){return e.toString()},p.escapeAttributes=function(e){var t={};for(var n in e)e.hasOwnProperty(n)&&(t[n]=(0,s.escapeQuotes)(e[n],null));return t},p.supports=o)o.hasOwnProperty(u)&&(p.browserHasFlaw=p.browserHasFlaw||!o[u]&&u)},function(e,t){"use strict";var n=!(t.__esModule=!0),a=!1,i=window.document.createElement("div");try{var r="<P><I></P></I>";i.innerHTML=r,t.tagSoup=n=i.innerHTML!==r}catch(e){t.tagSoup=n=!1}try{i.innerHTML="<P><i><P></P></i></P>",t.selfClose=a=2===i.childNodes.length}catch(e){t.selfClose=a=!1}i=null,t.tagSoup=n,t.selfClose=a},function(e,t,n){"use strict";t.__esModule=!0;var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.comment=function(e){var t=e.indexOf("--\x3e");if(0<=t)return new d.CommentToken(e.substr(4,t-1),t+3)},t.chars=function(e){var t=e.indexOf("<");return new d.CharsToken(0<=t?t:e.length)},t.startTag=i,t.atomicTag=function(e){var t=i(e);if(t){var n=e.slice(t.length);if(n.match(new RegExp("</\\s*"+t.tagName+"\\s*>","i"))){var a=n.match(new RegExp("([\\s\\S]*?)</\\s*"+t.tagName+"\\s*>","i"));if(a)return new d.AtomicTagToken(t.tagName,a[0].length+t.length,t.attrs,t.booleanAttrs,a[1])}}},t.endTag=function(e){var t=e.match(s.endTag);if(t)return new d.EndTagToken(t[1],t[0].length)};var d=n(4),s={startTag:/^<([\-A-Za-z0-9_]+)((?:\s+[\w\-]+(?:\s*=?\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,endTag:/^<\/([\-A-Za-z0-9_]+)[^>]*>/,attr:/(?:([\-A-Za-z0-9_]+)\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))|(?:([\-A-Za-z0-9_]+)(\s|$)+)/g,fillAttr:/^(checked|compact|declare|defer|disabled|ismap|multiple|nohref|noresize|noshade|nowrap|readonly|selected)$/i};function i(e){var n,a,i;if(-1!==e.indexOf(">")){var t=e.match(s.startTag);if(t){var r=(n={},a={},i=t[2],t[2].replace(s.attr,function(e,t){arguments[2]||arguments[3]||arguments[4]||arguments[5]?arguments[5]?(n[arguments[5]]="",a[arguments[5]]=!0):n[t]=arguments[2]||arguments[3]||arguments[4]||s.fillAttr.test(t)&&t||"":n[t]="",i=i.replace(e,"")}),{v:new d.StartTagToken(t[1],t[0].length,n,a,!!t[3],i.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""))});if("object"===(void 0===r?"undefined":o(r)))return r.v}}}},function(e,t,n){"use strict";t.__esModule=!0,t.EndTagToken=t.AtomicTagToken=t.StartTagToken=t.TagToken=t.CharsToken=t.CommentToken=t.Token=void 0;var o=n(5);function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}t.Token=function e(t,n){d(this,e),this.type=t,this.length=n,this.text=""},t.CommentToken=(a.prototype.toString=function(){return"\x3c!--"+this.content},a);function a(e,t){d(this,a),this.type="comment",this.length=t||(e?e.length:0),this.text="",this.content=e}t.CharsToken=(i.prototype.toString=function(){return this.text},i);function i(e){d(this,i),this.type="chars",this.length=e,this.text=""}var r=t.TagToken=(s.formatTag=function(e,t){var n,a=1<arguments.length&&void 0!==t?t:null,i="<"+e.tagName;for(var r in e.attrs)e.attrs.hasOwnProperty(r)&&(i+=" "+r,n=e.attrs[r],void 0!==e.booleanAttrs&&void 0!==e.booleanAttrs[r]||(i+='="'+(0,o.escapeQuotes)(n)+'"'));return e.rest&&(i+=" "+e.rest),e.unary&&!e.html5Unary?i+="/>":i+=">",null!=a&&(i+=a+"</"+e.tagName+">"),i},s);function s(e,t,n,a,i){d(this,s),this.type=e,this.length=n,this.text="",this.tagName=t,this.attrs=a,this.booleanAttrs=i,this.unary=!1,this.html5Unary=!1}t.StartTagToken=(l.prototype.toString=function(){return r.formatTag(this)},l);function l(e,t,n,a,i,r){d(this,l),this.type="startTag",this.length=t,this.text="",this.tagName=e,this.attrs=n,this.booleanAttrs=a,this.html5Unary=!1,this.unary=i,this.rest=r}t.AtomicTagToken=(c.prototype.toString=function(){return r.formatTag(this,this.content)},c);function c(e,t,n,a,i){d(this,c),this.type="atomicTag",this.length=t,this.text="",this.tagName=e,this.attrs=n,this.booleanAttrs=a,this.unary=!1,this.html5Unary=!1,this.content=i}t.EndTagToken=(p.prototype.toString=function(){return"</"+this.tagName+">"},p);function p(e,t){d(this,p),this.type="endTag",this.length=t,this.text="",this.tagName=e}},function(){},function(e,t){"use strict";t.__esModule=!0,t.default=function(r,n,o){var a=function(){var e=[];return e.last=function(){return this[this.length-1]},e.lastTagNameEq=function(e){var t=this.last();return t&&t.tagName&&t.tagName.toUpperCase()===e.toUpperCase()},e.containsTagName=function(e){for(var t,n=0;t=this[n];n++)if(t.tagName===e)return!0;return!1},e}(),d={startTag:function(e){var t=e.tagName;"TR"===t.toUpperCase()&&a.lastTagNameEq("TABLE")?(r.prepend("<TBODY>"),i()):n.selfCloseFix&&s.test(t)&&a.containsTagName(t)?a.lastTagNameEq(t)?c(r,a):(r.prepend("</"+e.tagName+">"),i()):e.unary||a.push(e)},endTag:function(e){a.last()?n.tagSoupFix&&!a.lastTagNameEq(e.tagName)?c(r,a):a.pop():n.tagSoupFix&&(o(),i())}};function(){}