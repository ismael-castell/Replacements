!function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=26)}([function(e,t,n){var r=n(13);r.Template=n(14).Template,r.template=r.Template,e.exports=r},function(e,t,n){!function(t){var n,r,a=!1;function o(e){if("undefined"!=typeof document&&!a){var t=document.documentElement;r=window.pageYOffset,document.documentElement.scrollHeight>window.innerHeight?t.style.width="calc(100% - "+function(){if(void 0!==n)return n;var e=document.documentElement,t=document.createElement("div");return t.setAttribute("style","width:99px;height:99px;position:absolute;top:-9999px;overflow:scroll;"),e.appendChild(t),n=t.offsetWidth-t.clientWidth,e.removeChild(t),n}()+"px)":t.style.width="100%",t.style.position="fixed",t.style.top=-r+"px",t.style.overflow="hidden",a=!0}}function i(){if("undefined"!=typeof document&&a){var e=document.documentElement;e.style.width="",e.style.position="",e.style.top="",e.style.overflow="",window.scroll(0,r),a=!1}}var s={on:o,off:i,toggle:function(){a?i():o()}};void 0!==e.exports?e.exports=s:t.noScroll=s}(this)},function(e,t,n){"use strict";(function(e,r){var a,o=n(4);a="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==e?e:r;var i=Object(o.a)(a);t.a=i}).call(this,n(5),n(6)(e))},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var a=(i=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),o=r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"});return[n].concat(o).concat([a]).join("\n")}var i;return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},a=0;a<this.length;a++){var o=this[a][0];null!=o&&(r[o]=!0)}for(a=0;a<e.length;a++){var i=e[a];null!=i[0]&&r[i[0]]||(n&&!i[2]?i[2]=n:n&&(i[2]="("+i[2]+") and ("+n+")"),t.push(i))}},t}},function(e,t,n){"use strict";function r(e){var t,n=e.Symbol;return"function"==typeof n?n.observable?t=n.observable:(t=n("observable"),n.observable=t):t="@@observable",t}n.d(t,"a",function(){return r})},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t){e.exports=function(e){if(!e.webpackPolyfill){var t=Object.create(e);t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),Object.defineProperty(t,"exports",{enumerable:!0}),t.webpackPolyfill=1}return t}},function(e,t,n){var r=n(8);"string"==typeof r&&(r=[[e.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};n(9)(r,a);r.locals&&(e.exports=r.locals)},function(e,t,n){(e.exports=n(3)(!1)).push([e.i,"#meu-estadao-menu-lateral-wrapper {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n  background: rgba(0, 0, 0, 0.45);\n  z-index: 99999999999;\n  display: none;\n  overflow-x: hidden;\n  overflow-y: auto;\n  -webkit-overflow-scrolling: touch;\n}\n#meu-estadao-menu-lateral-wrapper > iframe {\n  transform: translateX(264px);\n  transition: transform 0.5s ease;\n  position: absolute;\n  right: 0;\n  width: 100%;\n  max-width: 292px;\n  height: 100%;\n  border: 0;\n  box-shadow: 0 8px 8px 0 rgba(0, 0, 0, 0.24);\n}\n#meu-estadao-menu-lateral-wrapper > iframe.is-game {\n  height: 97%;\n  bottom: 0;\n}\n@media only screen and (max-width: 480px) {\n  #meu-estadao-menu-lateral-wrapper > iframe.is-game {\n    height: 100% !important;\n  }\n}\n#meu-estadao-menu-lateral-wrapper.show > iframe {\n  transform: translateX(0);\n}\n",""])},function(e,t,n){var r,a,o={},i=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===a&&(a=r.apply(this,arguments)),a}),s=function(e){var t={};return function(e,n){if("function"==typeof e)return e();if(void 0===t[e]){var r=function(e,t){return t?t.querySelector(e):document.querySelector(e)}.call(this,e,n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}}(),c=null,u=0,l=[],d=n(10);function p(e,t){for(var n=0;n<e.length;n++){var r=e[n],a=o[r.id];if(a){a.refs++;for(var i=0;i<a.parts.length;i++)a.parts[i](r.parts[i]);for(;i<r.parts.length;i++)a.parts.push(v(r.parts[i],t))}else{var s=[];for(i=0;i<r.parts.length;i++)s.push(v(r.parts[i],t));o[r.id]={id:r.id,refs:1,parts:s}}}}function f(e,t){for(var n=[],r={},a=0;a<e.length;a++){var o=e[a],i=t.base?o[0]+t.base:o[0],s={css:o[1],media:o[2],sourceMap:o[3]};r[i]?r[i].parts.push(s):n.push(r[i]={id:i,parts:[s]})}return n}function h(e,t){var n=s(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=l[l.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),l.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var a=s(e.insertAt.before,n);n.insertBefore(t,a)}}function m(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=l.indexOf(e);t>=0&&l.splice(t,1)}function b(e){var t=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var r=function(){0;return n.nc}();r&&(e.attrs.nonce=r)}return g(t,e.attrs),h(e,t),t}function g(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function v(e,t){var n,r,a,o;if(t.transform&&e.css){if(!(o="function"==typeof t.transform?t.transform(e.css):t.transform.default(e.css)))return function(){};e.css=o}if(t.singleton){var i=u++;n=c||(c=b(t)),r=x.bind(null,n,i,!1),a=x.bind(null,n,i,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",g(t,e.attrs),h(e,t),t}(t),r=function(e,t,n){var r=n.css,a=n.sourceMap,o=void 0===t.convertToAbsoluteUrls&&a;(t.convertToAbsoluteUrls||o)&&(r=d(r));a&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */");var i=new Blob([r],{type:"text/css"}),s=e.href;e.href=URL.createObjectURL(i),s&&URL.revokeObjectURL(s)}.bind(null,n,t),a=function(){m(n),n.href&&URL.revokeObjectURL(n.href)}):(n=b(t),r=function(e,t){var n=t.css,r=t.media;r&&e.setAttribute("media",r);if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,n),a=function(){m(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else a()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=i()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=f(e,t);return p(n,t),function(e){for(var r=[],a=0;a<n.length;a++){var i=n[a];(s=o[i.id]).refs--,r.push(s)}e&&p(f(e,t),t);for(a=0;a<r.length;a++){var s;if(0===(s=r[a]).refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete o[s.id]}}}};var y,w=(y=[],function(e,t){return y[e]=t,y.filter(Boolean).join("\n")});function x(e,t,n,r){var a=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=w(t,a);else{var o=document.createTextNode(a),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(o,i[t]):e.appendChild(o)}}},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,r=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var a,o=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o)?e:(a=0===o.indexOf("//")?o:0===o.indexOf("/")?n+o:r+o.replace(/^\.\//,""),"url("+JSON.stringify(a)+")")})}},function(e,t,n){var r=n(12),a=n(0);e.exports=function(){var e=a.compile(r,{tiny:!0,removeComments:!0});return e.render.apply(e,arguments)}},function(e,t){e.exports='<html lang="pt-BR">\r\n<head>\r\n    <meta charset="UTF-8" />\r\n    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"/>\r\n    <meta http-equiv="X-UA-Compatible" content="ie=edge"/>\r\n    <link href="https://fonts.googleapis.com/css?family=Lato:400,700" rel="stylesheet"/>\r\n    <base target="_parent" />\r\n    <title>Menu Lateral</title>\r\n    <style>{{{ style }}}</style>\r\n</head>\r\n<body>\r\n    {{{content}}}\r\n</body>\r\n</html>'},function(e,t,n){!function(e){var t=/\S/,n=/\"/g,r=/\n/g,a=/\r/g,o=/\\/g,i=/\u2028/,s=/\u2029/;function c(e){"}"===e.n.substr(e.n.length-1)&&(e.n=e.n.substring(0,e.n.length-1))}function u(e){return e.trim?e.trim():e.replace(/^\s*|\s*$/g,"")}function l(e,t,n){if(t.charAt(n)!=e.charAt(0))return!1;for(var r=1,a=e.length;r<a;r++)if(t.charAt(n+r)!=e.charAt(r))return!1;return!0}e.tags={"#":1,"^":2,"<":3,$:4,"/":5,"!":6,">":7,"=":8,_v:9,"{":10,"&":11,_t:12},e.scan=function(n,r){var a=n.length,o=0,i=null,s=null,d="",p=[],f=!1,h=0,m=0,b="{{",g="}}";function v(){d.length>0&&(p.push({tag:"_t",text:new String(d)}),d="")}function y(n,r){if(v(),n&&function(){for(var n=!0,r=m;r<p.length;r++)if(!(n=e.tags[p[r].tag]<e.tags._v||"_t"==p[r].tag&&null===p[r].text.match(t)))return!1;return n}())for(var a,o=m;o<p.length;o++)p[o].text&&((a=p[o+1])&&">"==a.tag&&(a.indent=p[o].text.toString()),p.splice(o,1));else r||p.push({tag:"\n"});f=!1,m=p.length}function w(e,t){var n="="+g,r=e.indexOf(n,t),a=u(e.substring(e.indexOf("=",t)+1,r)).split(" ");return b=a[0],g=a[a.length-1],r+n.length-1}for(r&&(r=r.split(" "),b=r[0],g=r[1]),h=0;h<a;h++)0==o?l(b,n,h)?(--h,v(),o=1):"\n"==n.charAt(h)?y(f):d+=n.charAt(h):1==o?(h+=b.length-1,"="==(i=(s=e.tags[n.charAt(h+1)])?n.charAt(h+1):"_v")?(h=w(n,h),o=0):(s&&h++,o=2),f=h):l(g,n,h)?(p.push({tag:i,n:u(d),otag:b,ctag:g,i:"/"==i?f-b.length:h+g.length}),d="",h+=g.length-1,o=0,"{"==i&&("}}"==g?h++:c(p[p.length-1]))):d+=n.charAt(h);return y(f,!0),p};var d={_t:!0,"\n":!0,$:!0,"/":!0};function p(e,t){for(var n=0,r=t.length;n<r;n++)if(t[n].o==e.n)return e.tag="#",!0}function f(e,t,n){for(var r=0,a=n.length;r<a;r++)if(n[r].c==e&&n[r].o==t)return!0}function h(e){var t=[];for(var n in e.partials)t.push('"'+b(n)+'":{name:"'+b(e.partials[n].name)+'", '+h(e.partials[n])+"}");return"partials: {"+t.join(",")+"}, subs: "+function(e){var t=[];for(var n in e)t.push('"'+b(n)+'": function(c,p,t,i) {'+e[n]+"}");return"{ "+t.join(",")+" }"}(e.subs)}e.stringify=function(t,n,r){return"{code: function (c,p,i) { "+e.wrapMain(t.code)+" },"+h(t)+"}"};var m=0;function b(e){return e.replace(o,"\\\\").replace(n,'\\"').replace(r,"\\n").replace(a,"\\r").replace(i,"\\u2028").replace(s,"\\u2029")}function g(e){return~e.indexOf(".")?"d":"f"}function v(e,t){var n="<"+(t.prefix||"")+e.n+m++;return t.partials[n]={name:e.n,partials:{}},t.code+='t.b(t.rp("'+b(n)+'",c,p,"'+(e.indent||"")+'"));',n}function y(e,t){t.code+="t.b(t.t(t."+g(e.n)+'("'+b(e.n)+'",c,p,0)));'}function w(e){return"t.b("+e+");"}e.generate=function(t,n,r){m=0;var a={code:"",subs:{},partials:{}};return e.walk(t,a),r.asString?this.stringify(a,n,r):this.makeTemplate(a,n,r)},e.wrapMain=function(e){return'var t=this;t.b(i=i||"");'+e+"return t.fl();"},e.template=e.Template,e.makeTemplate=function(e,t,n){var r=this.makePartials(e);return r.code=new Function("c","p","i",this.wrapMain(e.code)),new this.template(r,t,this,n)},e.makePartials=function(e){var t,n={subs:{},partials:e.partials,name:e.name};for(t in n.partials)n.partials[t]=this.makePartials(n.partials[t]);for(t in e.subs)n.subs[t]=new Function("c","p","t","i",e.subs[t]);return n},e.codegen={"#":function(t,n){n.code+="if(t.s(t."+g(t.n)+'("'+b(t.n)+'",c,p,1),c,p,0,'+t.i+","+t.end+',"'+t.otag+" "+t.ctag+'")){t.rs(c,p,function(c,p,t){',e.walk(t.nodes,n),n.code+="});c.pop();}"},"^":function(t,n){n.code+="if(!t.s(t."+g(t.n)+'("'+b(t.n)+'",c,p,1),c,p,1,0,0,"")){',e.walk(t.nodes,n),n.code+="};"},">":v,"<":function(t,n){var r={partials:{},code:"",subs:{},inPartial:!0};e.walk(t.nodes,r);var a=n.partials[v(t,n)];a.subs=r.subs,a.partials=r.partials},$:function(t,n){var r={subs:{},code:"",partials:n.partials,prefix:t.n};e.walk(t.nodes,r),n.subs[t.n]=r.code,n.inPartial||(n.code+='t.sub("'+b(t.n)+'",c,p,i);')},"\n":function(e,t){t.code+=w('"\\n"'+(e.last?"":" + i"))},_v:function(e,t){t.code+="t.b(t.v(t."+g(e.n)+'("'+b(e.n)+'",c,p,0)));'},_t:function(e,t){t.code+=w('"'+b(e.text)+'"')},"{":y,"&":y},e.walk=function(t,n){for(var r,a=0,o=t.length;a<o;a++)(r=e.codegen[t[a].tag])&&r(t[a],n);return n},e.parse=function(t,n,r){return function t(n,r,a,o){var i,s=[],c=null,u=null;for(i=a[a.length-1];n.length>0;){if(u=n.shift(),i&&"<"==i.tag&&!(u.tag in d))throw new Error("Illegal content in < super tag.");if(e.tags[u.tag]<=e.tags.$||p(u,o))a.push(u),u.nodes=t(n,u.tag,a,o);else{if("/"==u.tag){if(0===a.length)throw new Error("Closing tag without opener: /"+u.n);if(c=a.pop(),u.n!=c.n&&!f(u.n,c.n,o))throw new Error("Nesting error: "+c.n+" vs. "+u.n);return c.end=u.i,s}"\n"==u.tag&&(u.last=0==n.length||"\n"==n[0].tag)}s.push(u)}if(a.length>0)throw new Error("missing closing tag: "+a.pop().n);return s}(t,0,[],(r=r||{}).sectionTags||[])},e.cache={},e.cacheKey=function(e,t){return[e,!!t.asString,!!t.disableLambda,t.delimiters,!!t.modelGet].join("||")},e.compile=function(t,n){n=n||{};var r=e.cacheKey(t,n),a=this.cache[r];if(a){var o=a.partials;for(var i in o)delete o[i].instance;return a}return a=this.generate(this.parse(this.scan(t,n.delimiters),t,n),t,n),this.cache[r]=a}}(t)},function(e,t,n){!function(e){function t(e,t,n){var r;return t&&"object"==typeof t&&(void 0!==t[e]?r=t[e]:n&&t.get&&"function"==typeof t.get&&(r=t.get(e))),r}e.Template=function(e,t,n,r){e=e||{},this.r=e.code||this.r,this.c=n,this.options=r||{},this.text=t||"",this.partials=e.partials||{},this.subs=e.subs||{},this.buf=""},e.Template.prototype={r:function(e,t,n){return""},v:function(e){return e=c(e),s.test(e)?e.replace(n,"&amp;").replace(r,"&lt;").replace(a,"&gt;").replace(o,"&#39;").replace(i,"&quot;"):e},t:c,render:function(e,t,n){return this.ri([e],t||{},n)},ri:function(e,t,n){return this.r(e,t,n)},ep:function(e,t){var n=this.partials[e],r=t[n.name];if(n.instance&&n.base==r)return n.instance;if("string"==typeof r){if(!this.c)throw new Error("No compiler available.");r=this.c.compile(r,this.options)}if(!r)return null;if(this.partials[e].base=r,n.subs){for(key in t.stackText||(t.stackText={}),n.subs)t.stackText[key]||(t.stackText[key]=void 0!==this.activeSub&&t.stackText[this.activeSub]?t.stackText[this.activeSub]:this.text);r=function(e,t,n,r,a,o){function i(){}function s(){}var c;i.prototype=e,s.prototype=e.subs;var u=new i;for(c in u.subs=new s,u.subsText={},u.buf="",r=r||{},u.stackSubs=r,u.subsText=o,t)r[c]||(r[c]=t[c]);for(c in r)u.subs[c]=r[c];for(c in a=a||{},u.stackPartials=a,n)a[c]||(a[c]=n[c]);for(c in a)u.partials[c]=a[c];return u}(r,n.subs,n.partials,this.stackSubs,this.stackPartials,t.stackText)}return this.partials[e].instance=r,r},rp:function(e,t,n,r){var a=this.ep(e,n);return a?a.ri(t,n,r):""},rs:function(e,t,n){var r=e[e.length-1];if(u(r))for(var a=0;a<r.length;a++)e.push(r[a]),n(e,t,this),e.pop();else n(e,t,this)},s:function(e,t,n,r,a,o,i){var s;return(!u(e)||0!==e.length)&&("function"==typeof e&&(e=this.ms(e,t,n,r,a,o,i)),s=!!e,!r&&s&&t&&t.push("object"==typeof e?e:t[t.length-1]),s)},d:function(e,n,r,a){var o,i=e.split("."),s=this.f(i[0],n,r,a),c=this.options.modelGet,l=null;if("."===e&&u(n[n.length-2]))s=n[n.length-1];else for(var d=1;d<i.length;d++)void 0!==(o=t(i[d],s,c))?(l=s,s=o):s="";return!(a&&!s)&&(a||"function"!=typeof s||(n.push(l),s=this.mv(s,n,r),n.pop()),s)},f:function(e,n,r,a){for(var o=!1,i=!1,s=this.options.modelGet,c=n.length-1;c>=0;c--)if(void 0!==(o=t(e,n[c],s))){i=!0;break}return i?(a||"function"!=typeof o||(o=this.mv(o,n,r)),o):!a&&""},ls:function(e,t,n,r,a){var o=this.options.delimiters;return this.options.delimiters=a,this.b(this.ct(c(e.call(t,r)),t,n)),this.options.delimiters=o,!1},ct:function(e,t,n){if(this.options.disableLambda)throw new Error("Lambda features disabled.");return this.c.compile(e,this.options).render(t,n)},b:function(e){this.buf+=e},fl:function(){var e=this.buf;return this.buf="",e},ms:function(e,t,n,r,a,o,i){var s,c=t[t.length-1],u=e.call(c);return"function"==typeof u?!!r||(s=this.activeSub&&this.subsText&&this.subsText[this.activeSub]?this.subsText[this.activeSub]:this.text,this.ls(u,c,n,s.substring(a,o),i)):u},mv:function(e,t,n){var r=t[t.length-1],a=e.call(r);return"function"==typeof a?this.ct(c(a.call(r)),r,n):a},sub:function(e,t,n,r){var a=this.subs[e];a&&(this.activeSub=e,a(t,n,this,r),this.activeSub=!1)}};var n=/&/g,r=/</g,a=/>/g,o=/\'/g,i=/\"/g,s=/[&<>\"\']/;function c(e){return String(null==e?"":e)}var u=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)}}(t)},function(e,t,n){(e.exports=n(3)(!1)).push([e.i,'body {\n  margin: 0;\n  padding: 0;\n  background: #f5f5f5;\n  font-family: Lato, Arial, sans-serif;\n}\n@media only screen and (max-height: 850px) {\n  body ::-webkit-scrollbar {\n    width: 0;\n  }\n}\nbody * {\n  box-sizing: border-box;\n}\nbody ul {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\nbody a {\n  text-decoration: none;\n  color: #000000;\n}\n.container {\n  display: block;\n  padding: 0 15px;\n}\nheader {\n  margin-top: 20px;\n  position: relative;\n}\nheader > .close {\n  position: absolute;\n  top: 0;\n  width: 36px;\n  height: 36px;\n}\nheader > .close.game {\n  right: -10px;\n}\nheader > .close:not(.game) {\n  left: -10px;\n}\nheader > .close:before,\nheader > .close:after {\n  position: absolute;\n  left: 18px;\n  top: 9px;\n  content: \' \';\n  height: 18px;\n  width: 2px;\n  background-color: #000000;\n}\nheader > .close:before {\n  transform: rotate(45deg);\n}\nheader > .close:after {\n  transform: rotate(-45deg);\n}\nheader nav.menu {\n  padding-left: 30px;\n}\nheader nav.menu ul {\n  display: table;\n  width: 100%;\n}\nheader nav.menu ul li {\n  display: table-cell;\n  padding: 0 1px;\n}\nheader nav.menu ul li a {\n  display: inline-block;\n  width: 100%;\n  text-align: center;\n  height: 34px;\n  line-height: 34px;\n  -webkit-border-radius: 2px;\n  -moz-border-radius: 2px;\n  border-radius: 2px;\n  font-size: 13px;\n  background: #e8e8e8;\n  color: #808080;\n}\nheader nav.menu ul li a.active {\n  background: #FFFFFF;\n  color: #000000;\n}\n.loading-user-info {\n  display: table;\n  height: calc(100vh - 180px);\n  width: 100%;\n}\n.loading-user-info .center {\n  display: table-cell;\n  vertical-align: middle;\n}\n.loading-user-info .center .load {\n  display: table;\n  margin: 0 auto;\n}\n.wrapper-scroll-content {\n  overflow: auto;\n  margin-top: 15px;\n  max-height: calc(100vh - 70px);\n}\n#minha-conta {\n  margin-top: 15px;\n  padding-bottom: 30px;\n  margin-right: 25px;\n}\n#minha-conta .profile {\n  display: inline-block;\n  width: 100%;\n}\n#minha-conta .profile .col {\n  vertical-align: top;\n}\n#minha-conta .profile .col:first-child {\n  width: 44px;\n  float: left;\n  margin-right: 15px;\n}\n#minha-conta .profile .col .cover {\n  display: inline-block;\n  width: 44px;\n  height: 44px;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  border-radius: 30px;\n  vertical-align: middle;\n}\n#minha-conta .profile .col .icon.user {\n  vertical-align: middle;\n}\n#minha-conta .profile .col .name {\n  font-size: 11px;\n  vertical-align: middle;\n}\n#minha-conta .profile .col .name.game {\n  font-size: 18px;\n  font-weight: bold;\n}\n#minha-conta .profile .col .name.game a {\n  color: #2575e8;\n}\n#minha-conta .profile .col .email {\n  font-size: 12px;\n  color: #808080;\n}\n#minha-conta .profile .col .email.game {\n  font-size: 15px;\n  color: #535353;\n}\n#minha-conta .profile .col .name,\n#minha-conta .profile .col .email {\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  width: 70%;\n  display: inline-block;\n}\n#minha-conta .logout.game {\n  width: 135px;\n  height: 41px;\n  border-radius: 5px;\n  background-color: #2575e8;\n  color: white;\n  font-family: Lato;\n  padding: 3px;\n  text-transform: uppercase;\n  font-weight: bold;\n  letter-spacing: normal;\n}\n#minha-conta .game.sair {\n  margin-top: 40px;\n}\n#minha-conta .assinaturas {\n  margin-top: 15px;\n}\n#minha-conta .assinaturas select {\n  cursor: pointer;\n  width: 100%;\n  height: 34px;\n  display: inline-block;\n  border-radius: 5px;\n  border: 1px solid #9b9b9b;\n  color: #4a4a4a;\n  background: transparent;\n  padding-left: 10px;\n  padding-right: 5px;\n}\n#minha-conta .menu {\n  font-size: 16px;\n  margin-top: 30px;\n}\n#minha-conta .menu.game nav ul li a {\n  font-size: 16px;\n  color: #2575e8;\n  font-weight: bold;\n}\n#minha-conta .menu a > h3,\n#minha-conta .menu h3 {\n  color: #4a4a4a;\n  font-size: 16px;\n  font-weight: bold;\n  margin: 0;\n  margin-bottom: 10px;\n}\n#minha-conta .menu nav ul li {\n  width: 100%;\n}\n#minha-conta .menu nav ul li a {\n  color: #000000;\n  display: inline-block;\n  height: 34px;\n  padding: 0 8px;\n  line-height: 34px;\n  width: 100%;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  border-radius: 5px;\n}\n#minha-conta .menu nav ul li a:not(.lock):hover {\n  background-color: #e8e8e8;\n}\n#minha-conta .menu nav ul li a.lock {\n  cursor: default;\n  color: #9b9b9b;\n}\n#minha-conta .menu nav ul li a i.icon {\n  margin-left: 5px;\n  display: inline-block;\n  vertical-align: middle;\n}\n#minha-conta .menu.middle nav ul li {\n  width: 50%;\n  float: left;\n}\n#minha-conta > .btn {\n  margin-top: 15px;\n}\n#minha-conta > .btn:first-child {\n  margin-top: 30px;\n}\n.btn {\n  display: inline-block;\n  width: 100%;\n  height: 34px;\n  line-height: 32px;\n  border-radius: 5px;\n  font-size: 13px;\n  letter-spacing: -0.4px;\n  transition: 0.2s ease all;\n  text-decoration: none;\n  position: relative;\n  text-align: center;\n  border: 1px solid transparent;\n}\n.btn.green {\n  color: #FFFFFF;\n  background-color: #417505;\n}\n.btn.green:hover,\n.btn.green:focus {\n  background: #FFFFFF;\n  color: #417505;\n  border: 1px solid #417505;\n}\n.btn.gray {\n  color: #FFFFFF;\n  background-color: #9b9b9b;\n}\n.btn.transparent {\n  color: #4a4a4a;\n  border: 1px solid #4a4a4a;\n}\n.btn.transparent.game {\n  border: 0 !important;\n}\n.btn.transparent:hover,\n.btn.transparent:focus {\n  background: #4a4a4a;\n  color: #FFFFFF;\n}\n.icon {\n  display: inline-block;\n  position: relative;\n}\n.icon.lock {\n  width: 12px;\n  height: 15px;\n}\n.icon.lock:before {\n  display: inline-block;\n  content: "";\n  width: 5px;\n  height: 10px;\n  border: 1.5px solid #9b9b9b;\n  border-radius: 10px;\n  position: absolute;\n  top: 0;\n  left: 2px;\n}\n.icon.lock:after {\n  display: inline-block;\n  content: "";\n  width: 12px;\n  height: 9px;\n  background: #9b9b9b;\n  position: absolute;\n  left: 0;\n  top: 6px;\n  border-radius: 2px;\n}\n.icon.user {\n  width: 16px;\n  height: 16px;\n  box-sizing: border-box;\n  border-radius: 16px;\n  border: 2px solid #535353;\n  overflow: hidden;\n}\n.icon.user:before {\n  content: "";\n  width: 6px;\n  height: 6px;\n  border-radius: 12px;\n  border: 1px solid #f5f5f5;\n  position: absolute;\n  top: 1px;\n  left: 2px;\n  background: #535353;\n  z-index: 2;\n}\n.icon.user:after {\n  content: "";\n  width: 12px;\n  height: 12px;\n  border-radius: 12px;\n  position: absolute;\n  bottom: -7px;\n  left: 0;\n  background: #535353;\n  z-index: 1;\n}\n.icon.user.game {\n  width: 44px !important;\n  height: 44px !important;\n  border-radius: 44px !important;\n}\n.icon.user.game:before {\n  width: 20px !important;\n  height: 20px !important;\n  border: 2px solid #f5f5f5 !important;\n  top: 3px !important;\n  left: 8px !important;\n}\n.icon.user.game:after {\n  width: 33px !important;\n  height: 33px !important;\n  bottom: -15px !important;\n  left: 4px !important;\n}\n.icon.load {\n  display: inline-block;\n  width: 64px;\n  height: 64px;\n  vertical-align: middle;\n}\n.icon.load:after {\n  content: " ";\n  display: block;\n  width: 46px;\n  height: 46px;\n  margin: 1px;\n  border-radius: 50%;\n  border: 5px solid #2575E8;\n  border-color: #2575E8 transparent #2575E8 transparent;\n  animation: lds-dual-ring 0.5s linear infinite;\n}\n.icon.load.small {\n  width: 22px;\n  height: 22px;\n}\n.icon.load.small:after {\n  width: 10px;\n  height: 10px;\n  border-width: 3px;\n}\n@keyframes lds-dual-ring {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n',""])},function(e,t,n){var r=n(17),a=n(0);e.exports=function(){var e=a.compile(r,{tiny:!0,removeComments:!0});return e.render.apply(e,arguments)}},function(e,t){e.exports='<div class="container">\r\n    <header>\r\n        <a href="javascript:void(0)" class="close {{is_game}}" onclick="window.ESTADAO_MENU.close();"></a>\r\n        <nav class="menu" {{hidden}}>\r\n            <ul>\r\n                <li>\r\n                    <a href="https://meu.estadao.com.br/" target="_blank" class="active">Minha Conta</a>\r\n                </li>\r\n            </ul>\r\n        </nav>\r\n    </header>\r\n</div>'},function(e,t,n){var r=n(19),a=n(0);e.exports=function(){var e=a.compile(r,{tiny:!0,removeComments:!0});return e.render.apply(e,arguments)}},function(e,t){e.exports='<div class="wrapper-scroll-content container">\r\n    <div class="inner" id="minha-conta">\r\n        <div class="profile">\r\n            <div class="col">\r\n                {{#state.user.foto_url}}\r\n                    <a href="https://meu.estadao.com.br/" target="_blank"><div class="cover" style="background-image: url({{state.user.foto_url}})"></div></a>\r\n                {{/state.user.foto_url}}\r\n\r\n                {{^state.user.foto_url}}\r\n                    <a href="https://meu.estadao.com.br/" target="_blank"><div class="icon user {{is_game}}"></div></a>\r\n                {{/state.user.foto_url}}\r\n            </div>\r\n            <div class="col">\r\n                <div class="name {{is_game}}"><a href="https://meu.estadao.com.br/" target="_blank">{{state.user.nome}} {{state.user.sobrenome}}</a></div>\r\n                <div class="email {{is_game}}"><a href="https://meu.estadao.com.br/" target="_blank">{{state.user.email}}</a></div>\r\n            </div>\r\n        </div>\r\n\r\n        <div {{hidden}} class="menu meu-estadao game">\r\n            <h3>Alterar perfil de assinatura</h3>\r\n        </div>\r\n        {{^state.user.colaborador}}\r\n            {{#state.user.assinante}}\r\n                {{#assinaturas}}\r\n                <div class="assinaturas">\r\n                    <select name="assinatura" onchange="window.ESTADAO_MENU.events.run(\'updateAssinatura\', this)">\r\n                        {{{assinaturas}}\r\n                    </select>\r\n                </div>\r\n                {{/assinaturas}}\r\n\r\n                {{^assinaturas}}\r\n                    <span class="btn transparent"><i class="icon load small"></i>Carregando assinaturas...</span>\r\n                {{/assinaturas}}\r\n            {{/state.user.assinante}}\r\n        {{/state.user.colaborador}}\r\n\r\n        {{^state.user.colaborador}}\r\n            {{^state.user.assinante}}\r\n                <span class="btn gray">Você ainda não é assinante</span>\r\n            {{/state.user.assinante}}\r\n        {{/state.user.colaborador}}\r\n\r\n        {{#state.user.colaborador}}\r\n\r\n            {{#assinaturas}}\r\n            <div class="assinaturas">\r\n                <select name="assinatura" onchange="window.ESTADAO_MENU.events.run(\'updateAssinatura\', this)">\r\n                    {{{assinaturas}}\r\n                </select>\r\n            </div>\r\n            {{/assinaturas}}\r\n            {{^assinaturas}}\r\n                <span class="btn gray">Você está logado como colaborador</span>\r\n            {{/assinaturas}}\r\n        {{/state.user.colaborador}}\r\n        <div class="menu meu-estadao {{is_game}}">\r\n            <a {{url_game_menu}} title="meuEstadão"><h3>{{texto_game_menu}}</h3></a>\r\n            <nav>\r\n                <ul>\r\n                    {{{menuMeuEstadao}}}\r\n                </ul>\r\n            </nav>\r\n        </div>\r\n\r\n        {{#linkListEstadao}}\r\n        <div class="menu editorias middle testaaa" {{hidden_game}}>\r\n            <a href="{{state.config.estadaoUrl}}" title="Estadão"><h3>Estadão</h3></a>\r\n            <nav>\r\n                <ul>\r\n                    {{{linkListEstadao}}}\r\n                </ul>\r\n            </nav>\r\n        </div>\r\n        {{/linkListEstadao}}\r\n\r\n        {{^state.user.assinante}}\r\n            <a href="{{state.config.assineURL}}" target="_blank" class="btn green assine">Conheça novos planos</a>\r\n        {{/state.user.assinante}}\r\n\r\n        <div class="game sair" {{hidden}} style="text-align:center;">\r\n            <a href="{{state.config.logout}}" class="btn transparent logout {{is_game}}">Sair da conta</a>\r\n        </div>\r\n\r\n\r\n        <a style="{{hidden_style}}" href="{{state.config.logout}}" class="btn transparent logout {{is_game}}">Sair da conta</a>\r\n\r\n    </div>\r\n</div>\r\n'},function(e,t,n){var r=n(21),a=n(0);e.exports=function(){var e=a.compile(r,{tiny:!0,removeComments:!0});return e.render.apply(e,arguments)}},function(e,t){e.exports='<div class="wrapper-scroll-content container">\r\n    <div class="inner" id="minha-conta">\r\n        <a href="{{state.config.logout}}" class="btn transparent logout">Sair da conta</a>\r\n    </div>\r\n</div>'},function(e,t){Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(e){var t=this;if(!document.documentElement.contains(t))return null;do{if(t.matches(e))return t;t=t.parentElement}while(null!==t);return null})},function(e,t){[Element.prototype,CharacterData.prototype,DocumentType.prototype].forEach(function(e){e.hasOwnProperty("remove")||Object.defineProperty(e,"remove",{configurable:!0,enumerable:!0,writable:!0,value:function(){this.parentNode.removeChild(this)}})})},function(e,t){function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.keys||(Object.keys=function(){}