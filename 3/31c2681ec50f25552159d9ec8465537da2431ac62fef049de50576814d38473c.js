/*! For license information please see 7084.ba43dc1e.chunk.js.LICENSE.txt */
(self.webpackChunklite=self.webpackChunklite||[]).push([[7084],{6907:e=>{"use strict";e.exports=function(e){return e=String(e||""),n.test(e)?"rtl":o.test(e)?"ltr":"neutral"};var t="֑-߿יִ-﷽ﹰ-ﻼ",r="A-Za-zÀ-ÖØ-öø-ʸ̀-֐ࠀ-῿‎Ⰰ-﬜︀-﹯﻽-￿",n=new RegExp("^[^"+r+"]*["+t+"]"),o=new RegExp("^[^"+t+"]*["+r+"]")},18156:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});for(var r="undefined"!=typeof window&&/Mac|iPod|iPhone|iPad/.test(window.navigator.platform),n={alt:"altKey",control:"ctrlKey",meta:"metaKey",shift:"shiftKey"},o={add:"+",break:"pause",cmd:"meta",command:"meta",ctl:"control",ctrl:"control",del:"delete",down:"arrowdown",esc:"escape",ins:"insert",left:"arrowleft",mod:r?"meta":"control",opt:"alt",option:"alt",return:"enter",right:"arrowright",space:" ",spacebar:" ",up:"arrowup",win:"meta",windows:"meta"},a={backspace:8,tab:9,enter:13,shift:16,control:17,alt:18,pause:19,capslock:20,escape:27," ":32,pageup:33,pagedown:34,end:35,home:36,arrowleft:37,arrowup:38,arrowright:39,arrowdown:40,insert:45,delete:46,meta:91,numlock:144,scrolllock:145,";":186,"=":187,",":188,"-":189,".":190,"/":191,"`":192,"[":219,"\\":220,"]":221,"'":222},i=1;i<20;i++)a["f"+i]=111+i;function s(e,t,r){t&&!("byKey"in t)&&(r=t,t=null),Array.isArray(e)||(e=[e]);var n=e.map((function(e){return l(e,t)})),o=function(e){return n.some((function(t){return c(t,e)}))};return null==r?o:o(r)}function l(e,t){var r=t&&t.byKey,o={},a=(e=e.replace("++","+add")).split("+"),i=a.length;for(var s in n)o[n[s]]=!1;var l=!0,c=!1,f=void 0;try{for(var p,h=a[Symbol.iterator]();!(l=(p=h.next()).done);l=!0){var v=p.value,g=v.endsWith("?")&&v.length>1;g&&(v=v.slice(0,-1));var m=u(v),w=n[m];1!==i&&w||(r?o.key=m:o.which=d(v)),w&&(o[w]=!g||null)}}catch(e){c=!0,f=e}finally{try{!l&&h.return&&h.return()}finally{if(c)throw f}}return o}function c(e,t){for(var r in e){var n=e[r],o=void 0;if(null!=n&&(null!=(o="key"===r&&null!=t.key?t.key.toLowerCase():"which"===r?91===n&&93===t.which?91:t.which:t[r])||!1!==n)&&o!==n)return!1}return!0}function d(e){return e=u(e),a[e]||e.toUpperCase().charCodeAt(0)}function u(e){return e=e.toLowerCase(),o[e]||e}t.default=s,t.isHotkey=s,t.isCodeHotkey=function(e,t){return s(e,t)},t.isKeyHotkey=function(e,t){return s(e,{byKey:!0},t)},t.parseHotkey=l,t.compareHotkey=c,t.toKeyCode=d,t.toKeyName=u},3675:(e,t,r)=>{"use strict";function n(e){return null!=e&&"object"==typeof e&&1===e.nodeType}function o(e,t){return(!t||"hidden"!==e)&&"visible"!==e&&"clip"!==e}function a(e,t){if(e.clientHeight<e.scrollHeight||e.clientWidth<e.scrollWidth){var r=getComputedStyle(e,null);return o(r.overflowY,t)||o(r.overflowX,t)||function(e){var t=function(e){return e.ownerDocument&&e.ownerDocument.defaultView?e.ownerDocument.defaultView.frameElement:null}(e);return!!t&&(t.clientHeight<e.scrollHeight||t.clientWidth<e.scrollWidth)}(e)}return!1}function i(e,t,r,n,o,a,i,s){return a<e&&i>t||a>e&&i<t?0:a<=e&&s<=r||i>=t&&s>=r?a-e-n:i>t&&s<r||a<e&&s>r?i-t+o:0}r.r(t),r.d(t,{default:()=>c});const s=function(e,t){var r=t.scrollMode,o=t.block,s=t.inline,l=t.boundary,c=t.skipOverflowHiddenElements,d="function"==typeof l?l:function(e){return e!==l};if(!n(e))throw new TypeError("Invalid target");for(var u=document.scrollingElement||document.documentElement,f=[],p=e;n(p)&&d(p);){if((p=p.parentNode)===u){f.push(p);break}p===document.body&&a(p)&&!a(document.documentElement)||a(p,c)&&f.push(p)}for(var h=window.visualViewport?visualViewport.width:innerWidth,v=window.visualViewport?visualViewport.height:innerHeight,g=window.scrollX||pageXOffset,m=window.scrollY||pageYOffset,w=e.getBoundingClientRect(),y=w.height,b=w.width,E=w.top,x=w.right,O=w.bottom,k=w.left,D="start"===o||"nearest"===o?E:"end"===o?O:E+y/2,C="center"===s?k+b/2:"end"===s?x:k,S=[],M=0;M<f.length;M++){var T=f[M],P=T.getBoundingClientRect(),R=P.height,N=P.width,j=P.top,F=P.right,B=P.bottom,A=P.left;if("if-needed"===r&&E>=0&&k>=0&&O<=v&&x<=h&&E>=j&&O<=B&&k>=A&&x<=F)return S;var L=getComputedStyle(T),I=parseInt(L.borderLeftWidth,10),W=parseInt(L.borderTopWidth,10),_=parseInt(L.borderRightWidth,10),U=parseInt(L.borderBottomWidth,10),H=0,V=0,z="offsetWidth"in T?T.offsetWidth-T.clientWidth-I-_:0,K="offsetHeight"in T?T.offsetHeight-T.clientHeight-W-U:0;if(u===T)H="start"===o?D:"end"===o?D-v:"nearest"===o?i(m,m+v,v,W,U,m+D,m+D+y,y):D-v/2,V="start"===s?C:"center"===s?C-h/2:"end"===s?C-h:i(g,g+h,h,I,_,g+C,g+C+b,b),H=Math.max(0,H+m),V=Math.max(0,V+g);else{H="start"===o?D-j-W:"end"===o?D-B+U+K:"nearest"===o?i(j,B,R,W,U+K,D,D+y,y):D-(j+R/2)+K/2,V="start"===s?C-A-I:"center"===s?C-(A+N/2)+z/2:"end"===s?C-F+_+z:i(A,F,N,I,_+z,C,C+b,b);var q=T.scrollLeft,J=T.scrollTop;D+=J-(H=Math.max(0,Math.min(J+H,T.scrollHeight-R+K))),C+=q-(V=Math.max(0,Math.min(q+V,T.scrollWidth-N+z)))}S.push({el:T,top:H,left:V})}return S};function l(e){return e===Object(e)&&0!==Object.keys(e).length}const c=function(e,t){var r=!e.ownerDocument.documentElement.contains(e);if(l(t)&&"function"==typeof t.behavior)return t.behavior(r?[]:s(e,t));if(!r){var n=function(e){return!1===e?{block:"end",inline:"nearest"}:l(e)?e:{block:"start",inline:"nearest"}}(t);return function(e,t){void 0===t&&(t="auto");var r="scrollBehavior"in document.body.style;e.forEach((function(e){var n=e.el,o=e.top,a=e.left;n.scroll&&r?n.scroll({top:o,left:a,behavior:t}):(n.scrollTop=o,n.scrollLeft=a)}))}(s(e,n),n.behavior)}}},86817:(e,t,r)=>{"use strict";var n=r(51525),o=r(84792),a=function(e){return n.isPlainObject(e)&&Array.isArray(e.redos)&&Array.isArray(e.undos)&&(0===e.redos.length||o.Operation.isOperationList(e.redos[0]))&&(0===e.undos.length||o.Operation.isOperationList(e.undos[0]))},i=(new WeakMap,new WeakMap),s=new WeakMap,l={isHistoryEditor:function(e){return a(e.history)&&o.Editor.isEditor(e)},isMerging:function(e){return s.get(e)},isSaving:function(e){return i.get(e)},redo:function(e){e.redo()},undo:function(e){e.undo()},withoutMerging:function(e,t){var r=l.isMerging(e);s.set(e,!1),t(),s.set(e,r)},withoutSaving:function(e,t){var r=l.isSaving(e);i.set(e,!1),t(),i.set(e,r)}};function c(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(e){if("string"==typeof e)return d(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?d(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,s=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return i=e.done,e},e:function(e){s=!0,a=e},f:function(){try{i||null==r.return||r.return()}finally{if(s)throw a}}}}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}t.VC=function(e){var t=e,r=t.apply;return t.history={undos:[],redos:[]},t.redo=function(){var e=t.history,r=e.redos;if(r.length>0){var n=r[r.length-1];l.withoutSaving(t,(function(){o.Editor.withoutNormalizing(t,(function(){var e,r=c(n);try{for(r.s();!(e=r.n()).done;){var o=e.value;t.apply(o)}}catch(e){r.e(e)}finally{r.f()}}))})),e.redos.pop(),e.undos.push(n)}},t.undo=function(){var e=t.history,r=e.undos;if(r.length>0){var n=r[r.length-1];l.withoutSaving(t,(function(){o.Editor.withoutNormalizing(t,(function(){var e,r=c(n.map(o.Operation.inverse).reverse());try{for(r.s();!(e=r.n()).done;){var a=e.value;t.apply(a)}}catch(e){r.e(e)}finally{r.f()}}))})),e.redos.push(n),e.undos.pop()}},t.apply=function(e){var n=t.operations,a=t.history,i=a.undos,s=i[i.length-1],c=s&&s[s.length-1],d=function(e,t){return!(!t||"set_selection"!==e.type||"set_selection"!==t.type)}(e,c),u=l.isSaving(t),f=l.isMerging(t);if(null==u&&(u=function(e,t){return"set_selection"!==e.type||null!=e.properties&&null!=e.newProperties}(e)),u){if(null==f&&(f=null!=s&&(0!==n.length||function(e,t){return"set_selection"===e.type||!(!t||"insert_text"!==e.type||"insert_text"!==t.type||e.offset!==t.offset+t.text.length||!o.Path.equals(e.path,t.path))||!(!t||"remove_text"!==e.type||"remove_text"!==t.type||e.offset+e.text.length!==t.offset||!o.Path.equals(e.path,t.path))}(e,c)||d)),s&&f)d&&s.pop(),s.push(e);else{var p=[e];i.push(p)}for(;i.length>100;)i.shift();(function(e){return"set_selection"!==e.type})(e)&&(a.redos=[])}r(e)},t}},51525:(e,t)=>{"use strict";function r(e){return"[object Object]"===Object.prototype.toString.call(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.isPlainObject=function(e){var t,n;return!1!==r(e)&&(void 0===(t=e.constructor)||!1!==r(n=t.prototype)&&!1!==n.hasOwnProperty("isPrototypeOf"))}},53215:(e,t,r)=>{"use strict";function n(e){return"[object Object]"===Object.prototype.toString.call(e)}function o(e){var t,r;return!1!==n(e)&&(void 0===(t=e.constructor)||!1!==n(r=t.prototype)&&!1!==r.hasOwnProperty("isPrototypeOf"))}r.d(t,{tZ:()=>k});var a=r(84792);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var s=new WeakMap,l=new WeakMap;class c{}class d extends c{constructor(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};super();var{offset:t,path:r}=e;this.offset=t,this.path=r}}class u extends c{constructor(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};super();var{offset:t,path:r}=e;this.offset=t,this.path=r}}var f=e=>l.get(e);function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function h(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var v=new WeakSet,g=e=>{var t=[],r=e=>{if(null!=e){var n=t[t.length-1];if("string"==typeof e){var o={text:e};v.add(o),e=o}if(a.Text.isText(e)){var i=e;a.Text.isText(n)&&v.has(n)&&v.has(i)&&a.Text.equals(n,i,{loose:!0})?n.text+=i.text:t.push(i)}else if(a.Element.isElement(e))t.push(e);else{if(!(e instanceof c))throw new Error("Unexpected hyperscript child object: ".concat(e));var f=t[t.length-1];a.Text.isText(f)||(r(""),f=t[t.length-1]),e instanceof d?((e,t)=>{var r=e.text.length;s.set(e,[r,t])})(f,e):e instanceof u&&((e,t)=>{var r=e.text.length;l.set(e,[r,t])})(f,e)}}};for(var n of e.flat(1/0))r(n);return t};function m(e,t,r){return h(h({},t),{},{children:g(r)})}function w(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?w(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):w(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var b,E={anchor:function(e,t,r){return new d(t)},cursor:function(e,t,r){return[new d(t),new u(t)]},editor:(b=a.createEditor,(e,t,r)=>{var n,o=[];for(var i of r)a.Range.isRange(i)?n=i:o.push(i);var l,c=g(o),d={},u=b();for(var[p,h]of(Object.assign(u,t),u.children=c,a.Node.texts(u))){var v=(l=p,s.get(l)),m=f(p);if(null!=v){var[w]=v;d.anchor={path:h,offset:w}}if(null!=m){var[y]=m;d.focus={path:h,offset:y}}}if(d.anchor&&!d.focus)throw new Error("Slate hyperscript ranges must have both `<anchor />` and `<focus />` defined if one is defined, but you only defined `<anchor />`. For collapsed selections, use `<cursor />` instead.");if(!d.anchor&&d.focus)throw new Error("Slate hyperscript ranges must have both `<anchor />` and `<focus />` defined if one is defined, but you only defined `<focus />`. For collapsed selections, use `<cursor />` instead.");return null!=n?u.selection=n:a.Range.isRange(d)&&(u.selection=d),u}),element:m,focus:function(e,t,r){return new u(t)},fragment:function(e,t,r){return g(r)},selection:function(e,t,r){var n=r.find((e=>e instanceof d)),o=r.find((e=>e instanceof u));if(!n||null==n.offset||null==n.path)throw new Error("The <selection> hyperscript tag must have an <anchor> tag as a child with `path` and `offset` attributes defined.");if(!o||null==o.offset||null==o.path)throw new Error("The <selection> hyperscript tag must have a <focus> tag as a child with `path` and `offset` attributes defined.");return h({anchor:{offset:n.offset,path:n.path},focus:{offset:o.offset,path:o.path}},t)},text:function(e,t,r){var n=g(r);if(n.length>1)throw new Error("The <text> hyperscript tag must only contain a single node's worth of children.");var[o]=n;if(null==o&&(o={text:""}),!a.Text.isText(o))throw new Error("\n    The <text> hyperscript tag can only contain text content as children.");return v.delete(o),Object.assign(o,t),o}},x=e=>function(t,r){for(var n=arguments.length,a=new Array(n>2?n-2:0),i=2;i<n;i++)a[i-2]=arguments[i];var s=e[t];if(!s)throw new Error("No hyperscript creator found for tag: <".concat(t,">"));null==r&&(r={}),o(r)||(a=[r].concat(a),r={});var l=s(t,r,a=a.filter((e=>Boolean(e))).flat());return l},O=e=>{var t={},r=function(r){var n=e[r];if("object"!=typeof n)throw new Error("Properties specified for a hyperscript shorthand should be an object, but for the custom element <".concat(r,">  tag you passed: ").concat(n));t[r]=(e,t,r)=>m(0,y(y({},n),t),r)};for(var n in e)r(n);return t},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{elements:t={}}=e,r=O(t),n=y(y(y({},E),r),e.creators),o=x(n);return o}()},10143:(e,t,r)=>{"use strict";var n=r(67294),o=r(84792),a=r(6907),i=r(23279),s=r(23493),l=r(3675),c=r(18156),d=r(73935);function u(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var f=u(n),p=u(a),h=u(i),v=u(s),g=u(l),m=u(d);function w(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function y(e,t){return e(t={exports:{}},t.exports),t.exports}var b=w(y((function(e){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.default=e.exports,e.exports.__esModule=!0}))),E=y((function(e){e.exports=function(e){if(Array.isArray(e))return e},e.exports.default=e.exports,e.exports.__esModule=!0}));w(E);var x=y((function(e){e.exports=function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a=[],i=!0,s=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);i=!0);}catch(e){s=!0,o=e}finally{try{i||null==r.return||r.return()}finally{if(s)throw o}}return a}},e.exports.default=e.exports,e.exports.__esModule=!0}));w(x);var O=y((function(e){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n},e.exports.default=e.exports,e.exports.__esModule=!0}));w(O);var k=y((function(e){e.exports=function(e,t){if(e){if("string"==typeof e)return O(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?O(e,t):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0}));w(k);var D=y((function(e){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0}));w(D);var C=w(y((function(e){e.exports=function(e,t){return E(e)||x(e,t)||k(e,t)||D()},e.exports.default=e.exports,e.exports.__esModule=!0}))),S=y((function(e){e.exports=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o},e.exports.default=e.exports,e.exports.__esModule=!0}));w(S);var M=w(y((function(e){e.exports=function(e,t){if(null==e)return{};var r,n,o=S(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o},e.exports.default=e.exports,e.exports.__esModule=!0}))),T=function(e){var t=e.isLast,r=e.leaf,n=e.parent,a=e.text,i=me(),s=lt.findPath(i,a),l=o.Path.parent(s);return i.isVoid(n)?f.default.createElement(R,{length:o.Node.string(n).length}):""!==r.text||n.children[n.children.length-1]!==a||i.isInline(n)||""!==o.Editor.string(i,l)?""===r.text?f.default.createElement(R,null):t&&"\n"===r.text.slice(-1)?f.default.createElement(P,{isTrailing:!0,text:r.text}):f.default.createElement(P,{text:r.text}):f.default.createElement(R,{isLineBreak:!0})},P=function(e){var t=e.text,r=e.isTrailing,o=void 0!==r&&r,a=n.useRef(null),i=n.useRef(0);return a.current&&a.current.textContent!==t&&(i.current+=1),f.default.createElement("span",{"data-slate-string":!0,ref:a,key:i.current},t,o?"\n":null)},R=function(e){var t=e.length,r=void 0===t?0:t,n=e.isLineBreak,o=void 0!==n&&n;return f.default.createElement("span",{"data-slate-zero-width":o?"n":"z","data-slate-length":r},"\ufeff",o?f.default.createElement("br",null):null)},N=new WeakMap,j=new WeakMap,F=new WeakMap,B=new WeakMap,A=new WeakMap,L=new WeakMap,I=new WeakMap,W=new WeakMap,_=new WeakMap,U=new WeakMap,H=new WeakMap,V=new WeakMap,z=Symbol("placeholder"),K=function(e){var t=e.leaf,r=e.isLast,o=e.text,a=e.parent,i=e.renderPlaceholder,s=e.renderLeaf,l=void 0===s?function(e){return f.default.createElement(J,Object.assign({},e))}:s,c=n.useRef(null);n.useEffect((function(){var e=null==c?void 0:c.current,t=document.querySelector('[data-slate-editor="true"]');if(e&&t)return t.style.minHeight="".concat(e.clientHeight,"px"),function(){t.style.minHeight="auto"}}),[c,t]);var d=f.default.createElement(T,{isLast:r,leaf:t,parent:a,text:o});if(t[z]){var u={children:t.placeholder,attributes:{"data-slate-placeholder":!0,style:{position:"absolute",pointerEvents:"none",width:"100%",maxWidth:"100%",display:"block",opacity:"0.333",userSelect:"none",textDecoration:"none"},contentEditable:!1,ref:c}};d=f.default.createElement(f.default.Fragment,null,i(u),d)}return l({attributes:{"data-slate-leaf":!0},children:d,leaf:t,text:o})},q=f.default.memo(K,(function(e,t){return t.parent===e.parent&&t.isLast===e.isLast&&t.renderLeaf===e.renderLeaf&&t.renderPlaceholder===e.renderPlaceholder&&t.text===e.text&&o.Text.equals(t.leaf,e.leaf)&&t.leaf[z]===e.leaf[z]})),J=function(e){var t=e.attributes,r=e.children;return f.default.createElement("span",Object.assign({},t),r)},X="undefined"!=typeof navigator&&"undefined"!=typeof window&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream,$="undefined"!=typeof navigator&&/Mac OS X/.test(navigator.userAgent),Y="undefined"!=typeof navigator&&/Android/.test(navigator.userAgent),Q="undefined"!=typeof navigator&&/^(?!.*Seamonkey)(?=.*Firefox).*/i.test(navigator.userAgent),Z="undefined"!=typeof navigator&&/Version\/[\d\.]+.*Safari/.test(navigator.userAgent),G="undefined"!=typeof navigator&&/Edge?\/(?:[0-6][0-9]|[0-7][0-8])/i.test(navigator.userAgent),ee="undefined"!=typeof navigator&&/Chrome/i.test(navigator.userAgent),te="undefined"!=typeof navigator&&/Chrome?\/(?:[0-7][0-5]|[0-6][0-9])/i.test(navigator.userAgent),re="undefined"!=typeof navigator&&/^(?!.*Seamonkey)(?=.*Firefox\/(?:[0-7][0-9]|[0-8][0-6])).*/i.test(navigator.userAgent),ne="undefined"!=typeof navigator&&/.*QQBrowser/.test(navigator.userAgent),oe=!("undefined"==typeof window||void 0===window.document||void 0===window.document.createElement),ae=!te&&!G&&"undefined"!=typeof globalThis&&globalThis.InputEvent&&"function"==typeof globalThis.InputEvent.prototype.getTargetRanges,ie=oe?n.useLayoutEffect:n.useEffect,se=["anchor","focus"],le=["anchor","focus"],ce=function(e,t){return Object.keys(e).length===Object.keys(t).length&&Object.keys(e).every((function(r){return t.hasOwnProperty(r)&&e[r]===t[r]}))},de=function(e,t){if(e.length!==t.length)return!1;for(var r=0;r<e.length;r++){var n=e[r],a=t[r];n.anchor,n.focus;var i=M(n,se);a.anchor,a.focus;var s=M(a,le);if(!o.Range.equals(n,a)||n[z]!==a[z]||!ce(i,s))return!1}return!0},ue=function(e){for(var t=e.decorations,r=e.isLast,a=e.parent,i=e.renderPlaceholder,s=e.renderLeaf,l=e.text,c=me(),d=n.useRef(null),u=o.Text.decorations(l,t),p=lt.findKey(c,l),h=[],v=0;v<u.length;v++){var g=u[v];h.push(f.default.createElement(q,{isLast:r&&v===u.length-1,key:"".concat(p.id,"-").concat(v),renderPlaceholder:i,leaf:g,text:l,parent:a,renderLeaf:s}))}return ie((function(){var e=W.get(c);d.current?(null==e||e.set(p,d.current),L.set(l,d.current),A.set(d.current,l)):(null==e||e.delete(p),L.delete(l))})),f.default.createElement("span",{"data-slate-node":"text",ref:d},h)},fe=f.default.memo(ue,(function(e,t){return t.parent===e.parent&&t.isLast===e.isLast&&t.renderLeaf===e.renderLeaf&&t.text===e.text&&de(t.decorations,e.decorations)})),pe=function(e){var t=e.decorations,r=e.element,a=e.renderElement,i=void 0===a?function(e){return f.default.createElement(ve,Object.assign({},e))}:a,s=e.renderPlaceholder,l=e.renderLeaf,c=e.selection,d=n.useRef(null),u=me(),h=Te(),v=u.isInline(r),g=lt.findKey(u,r),m=xe({decorations:t,node:r,renderElement:i,renderPlaceholder:s,renderLeaf:l,selection:c}),w={"data-slate-node":"element",ref:d};if(v&&(w["data-slate-inline"]=!0),!v&&o.Editor.hasInlines(u,r)){var y=o.Node.string(r),b=p.default(y);"rtl"===b&&(w.dir=b)}if(o.Editor.isVoid(u,r)){w["data-slate-void"]=!0,!h&&v&&(w.contentEditable=!1);var E=v?"span":"div",x=o.Node.texts(r),O=C(x,1),k=C(O[0],1)[0];m=h?null:f.default.createElement(E,{"data-slate-spacer":!0,style:{height:"0",color:"transparent",outline:"none",position:"absolute"}},f.default.createElement(fe,{renderPlaceholder:s,decorations:[],isLast:!1,parent:r,text:k})),N.set(k,0),j.set(k,r)}return ie((function(){var e=W.get(u);d.current?(null==e||e.set(g,d.current),L.set(r,d.current),A.set(d.current,r)):(null==e||e.delete(g),L.delete(r))})),i({attributes:w,children:m,element:r})},he=f.default.memo(pe,(function(e,t){return e.element===t.element&&e.renderElement===t.renderElement&&e.renderLeaf===t.renderLeaf&&de(e.decorations,t.decorations)&&(e.selection===t.selection||!!e.selection&&!!t.selection&&o.Range.equals(e.selection,t.selection))})),ve=function(e){var t=e.attributes,r=e.children,n=e.element,o=me().isInline(n)?"span":"div";return f.default.createElement(o,Object.assign({},t,{style:{position:"relative"}}),r)},ge=n.createContext(null),me=function(){var e=n.useContext(ge);if(!e)throw new Error("The `useSlateStatic` hook must be used inside the <Slate> component's context.");return e},we=n.createContext((function(){return[]})),ye=n.createContext(!1);function be(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(e){if("string"==typeof e)return Ee(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Ee(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,s=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return i=e.done,e},e:function(e){s=!0,a=e},f:function(){try{i||null==r.return||r.return()}finally{if(s)throw a}}}}function Ee(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var xe=function(e){for(var t=e.decorations,r=e.node,a=e.renderElement,i=e.renderPlaceholder,s=e.renderLeaf,l=e.selection,c=n.useContext(we),d=me(),u=lt.findPath(d,r),p=[],h=o.Element.isElement(r)&&!d.isInline(r)&&o.Editor.hasInlines(d,r),v=0;v<r.children.length;v++){var g,m=u.concat(v),w=r.children[v],y=lt.findKey(d,w),b=o.Editor.range(d,m),E=l&&o.Range.intersection(b,l),x=c([w,m]),O=be(t);try{for(O.s();!(g=O.n()).done;){var k=g.value,D=o.Range.intersection(k,b);D&&x.push(D)}}catch(e){O.e(e)}finally{O.f()}o.Element.isElement(w)?p.push(f.default.createElement(ye.Provider,{key:"provider-".concat(y.id),value:!!E},f.default.createElement(he,{decorations:x,element:w,key:y.id,renderElement:a,renderPlaceholder:i,renderLeaf:s,selection:E}))):p.push(f.default.createElement(fe,{decorations:x,key:y.id,isLast:h&&v===r.children.length-1,parent:r,renderPlaceholder:i,renderLeaf:s,text:w})),N.set(w,v),j.set(w,r)}return p},Oe={bold:"mod+b",compose:["down","left","right","up","backspace","enter"],moveBackward:"left",moveForward:"right",moveWordBackward:"ctrl+left",moveWordForward:"ctrl+right",deleteBackward:"shift?+backspace",deleteForward:"shift?+delete",extendBackward:"shift+left",extendForward:"shift+right",italic:"mod+i",splitBlock:"shift?+enter",undo:"mod+z"},ke={moveLineBackward:"opt+up",moveLineForward:"opt+down",moveWordBackward:"opt+left",moveWordForward:"opt+right",deleteBackward:["ctrl+backspace","ctrl+h"],deleteForward:["ctrl+delete","ctrl+d"],deleteLineBackward:"cmd+shift?+backspace",deleteLineForward:["cmd+shift?+delete","ctrl+k"],deleteWordBackward:"opt+shift?+backspace",deleteWordForward:"opt+shift?+delete",extendLineBackward:"opt+shift+up",extendLineForward:"opt+shift+down",redo:"cmd+shift+z",transposeCharacter:"ctrl+t"},De={deleteWordBackward:"ctrl+shift?+backspace",deleteWordForward:"ctrl+shift?+delete",redo:["ctrl+y","ctrl+shift+z"]},Ce=function(e){var t=Oe[e],r=ke[e],n=De[e],o=t&&c.isKeyHotkey(t),a=r&&c.isKeyHotkey(r),i=n&&c.isKeyHotkey(n);return function(e){return!(!o||!o(e))||!!($&&a&&a(e))||!($||!i||!i(e))}},Se={isBold:Ce("bold"),isCompose:Ce("compose"),isMoveBackward:Ce("moveBackward"),isMoveForward:Ce("moveForward"),isDeleteBackward:Ce("deleteBackward"),isDeleteForward:Ce("deleteForward"),isDeleteLineBackward:Ce("deleteLineBackward"),isDeleteLineForward:Ce("deleteLineForward"),isDeleteWordBackward:Ce("deleteWordBackward"),isDeleteWordForward:Ce("deleteWordForward"),isExtendBackward:Ce("extendBackward"),isExtendForward:Ce("extendForward"),isExtendLineBackward:Ce("extendLineBackward"),isExtendLineForward:Ce("extendLineForward"),isItalic:Ce("italic"),isMoveLineBackward:Ce("moveLineBackward"),isMoveLineForward:Ce("moveLineForward"),isMoveWordBackward:Ce("moveWordBackward"),isMoveWordForward:Ce("moveWordForward"),isRedo:Ce("redo"),isSplitBlock:Ce("splitBlock"),isTransposeCharacter:Ce("transposeCharacter"),isUndo:Ce("undo")},Me=n.createContext(!1),Te=function(){return n.useContext(Me)},Pe=n.createContext(null),Re=function(){var e=n.useContext(Pe);if(!e)throw new Error("The `useSlate` hook must be used inside the <Slate> component's context.");return C(e,1)[0]},Ne=function(e){return e&&e.ownerDocument&&e.ownerDocument.defaultView||null},je=function(e){return Fe(e)&&1===e.nodeType},Fe=function(e){var t=Ne(e);return!!t&&e instanceof t.Node},Be=function(e){var t=e&&e.anchorNode&&Ne(e.anchorNode);return!!t&&e instanceof t.Selection},Ae=function(e){return Fe(e)&&3===e.nodeType},Le=function(e,t,r){for(var n,o=e.childNodes,a=o[t],i=t,s=!1,l=!1;(Fe(n=a)&&8===n.nodeType||je(a)&&0===a.childNodes.length||je(a)&&"false"===a.getAttribute("contenteditable"))&&(!s||!l);)i>=o.length?(s=!0,i=t-1,r="backward"):i<0?(l=!0,i=t+1,r="forward"):(a=o[i],t=i,i+="forward"===r?1:-1);return[a,t]},Ie=function(e,t,r){var n=Le(e,t,r);return C(n,1)[0]},We=function e(t){var r="";if(Ae(t)&&t.nodeValue)return t.nodeValue;if(je(t)){for(var n=0,o=Array.from(t.childNodes);n<o.length;n++)r+=e(o[n]);var a=getComputedStyle(t).getPropertyValue("display");"block"!==a&&"list"!==a&&"BR"!==t.tagName||(r+="\n")}return r},_e=/data-slate-fragment="(.+?)"/m,Ue=function(e){var t=e.getData("text/html").match(_e)||[];return C(t,2)[1]},He=["autoFocus","decorate","onDOMBeforeInput","placeholder","readOnly","renderElement","renderLeaf","renderPlaceholder","scrollSelectionIntoView","style","as"];function Ve(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function ze(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Ke(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ze(Object(r),!0).forEach((function(t){b(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ze(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var qe=function(e){return f.default.createElement(f.default.Fragment,null,xe(e))},Je=function(e){var t=e.attributes,r=e.children;return f.default.createElement("span",Object.assign({},t),r)},Xe=function(){return[]},$e=function(e,t){if(!e.selection||e.selection&&o.Range.isCollapsed(e.selection)){var r=t.startContainer.parentElement;r.getBoundingClientRect=t.getBoundingClientRect.bind(t),g.default(r,{scrollMode:"if-needed"}),delete r.getBoundingClientRect}},Ye=function(){}