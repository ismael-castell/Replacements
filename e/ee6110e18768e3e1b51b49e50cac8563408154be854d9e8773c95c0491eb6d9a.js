!function(e){function t(e,t){for(var n=0,i=e.length;n<i;n++)t(e[n])}function n(e,t,n){var i=e.length,o=n;if(!e.length)return n;for(var r=0;r<i;r++)o=t(o,e[r],r,e);return o}function i(){var e=document.createElement("style");e.className=ns,e.setAttribute("type","text/css"),document.querySelector("head").appendChild(e),e.styleSheet?e.styleSheet.cssText=is:e.textContent=is}function o(){t(document.getElementsByClassName(ns),function(e){e.parentNode.removeChild(e)})}function r(e){var t=document.getElementsByClassName(ns);return t&&t[0]&&t[0].sheet?n(t[0].sheet.rules||t[0].sheet.cssRules,function(t,n){return n.selectorText&&n.selectorText.indexOf(e)>-1||n.cssText&&n.cssText.indexOf(e)>-1?n.cssText?t+n.cssText:t+n.style.cssText:t},""):null}function a(e,t){return t={exports:{}},e(t,t.exports),t.exports}function s(e){return function(t,n,i){for(var o in n)o in ss&&(n[ss[o]]=n[o],delete n[o]);return e(t,n,i)}}function l(e){return e===Es||e===Ts}function c(e){return As.test(e)}function u(e){var t=Bs.readyState;if("complete"===t||"interactive"===t)return setTimeout(e,0);Bs.addEventListener("DOMContentLoaded",function(){e()})}function d(){}function p(e,t){Xs[e][0]&&0===Xs[e][2]&&(Xs[e][0](t),Xs[e][2]=1)}function f(e,t){Xs[e][1]&&1===Xs[e][2]&&(Xs[e][1](t),Xs[e][2]=0)}function v(e,t,n){var i=e.target.getAttribute(Qs);if(h(e.oldValue,i))return void(Xs[i]=Xs[e.oldValue]);Xs[e.oldValue]&&n(e.oldValue,e.target),Xs[i]&&t(i,e.target)}function h(e,t){return!(!e||!t)&&Xs[e][3]===Xs[t][3]}function g(e,t){for(var n=Object.keys(Xs),i=0;i<e.length;i++){var o=[e[i]];if(e[i].childNodes.length>0&&e[i].querySelectorAll){var r=e[i].querySelectorAll("["+Qs+"]");o=o.concat(Array.prototype.slice.call(r))}for(var a=0;a<o.length;a++)if(o[a]&&o[a].getAttribute&&o[a].getAttribute(Qs)){var s=o[a].getAttribute(Qs);n.forEach(function(e){s===e&&t(e,o[a])})}}}function m(e,t){var n,i,o,r,a=t.attributes;if(t.nodeType!==il&&e.nodeType!==il){for(var s=a.length-1;s>=0;s--)n=a[s],i=n.name,o=n.namespaceURI,r=n.value,o?(i=n.localName||i,e.getAttributeNS(o,i)!==r&&("xmlns"===n.prefix&&(i=n.name),e.setAttributeNS(o,i,r))):e.getAttribute(i)!==r&&e.setAttribute(i,r);for(var l=e.attributes,c=l.length-1;c>=0;c--)n=l[c],i=n.name,o=n.namespaceURI,o?(i=n.localName||i,t.hasAttributeNS(o,i)||e.removeAttributeNS(o,i)):t.hasAttribute(i)||e.removeAttribute(i)}}function b(e){var t=rl.createElement("template");return t.innerHTML=e,t.content.childNodes[0]}function _(e){return el||(el=rl.createRange(),el.selectNode(rl.body)),el.createContextualFragment(e).childNodes[0]}function y(e){var t=rl.createElement("body");return t.innerHTML=e,t.childNodes[0]}function w(e){return e=e.trim(),al?b(e):sl?_(e):y(e)}function x(e,t){var n,i,o=e.nodeName,r=t.nodeName;return o===r||(n=o.charCodeAt(0),i=r.charCodeAt(0),n<=90&&i>=97?o===r.toUpperCase():i<=90&&n>=97&&r===o.toUpperCase())}function k(e,t){return t&&t!==ol?rl.createElementNS(t,e):rl.createElement(e)}function L(e,t){for(var n=e.firstChild;n;){var i=n.nextSibling;t.appendChild(n),n=i}return t}function O(e,t,n){e[n]!==t[n]&&(e[n]=t[n],e[n]?e.setAttribute(n,""):e.removeAttribute(n))}function E(){}function T(e){if(e)return e.getAttribute&&e.getAttribute("id")||e.id}function S(){for(var e={},t=0;t<arguments.length;t++){var n=arguments[t];for(var i in n)kl.call(n,i)&&(e[i]=n[i])}return e}function z(e,t){function n(){var e=E.splice(0,E.length);for(Ke=0;e.length;)e.shift().call(null,e.shift())}function i(e,t){for(var n=0,i=e.length;n<i;n++)h(e[n],t)}function o(e){for(var t,n=0,i=e.length;n<i;n++)t=e[n],M(t,ie[a(t)])}function r(e){return function(t){je(t)&&(h(t,e),oe.length&&i(t.querySelectorAll(oe),e))}}function a(e){var t=qe.call(e,"is"),n=e.nodeName.toUpperCase(),i=ae.call(ne,t?Z+t.toUpperCase():Q+n);return t&&-1<i&&!s(n,t)?-1:i}function s(e,t){return-1<oe.indexOf(e+'[is="'+t+'"]')}function l(e){var t=e.currentTarget,n=e.attrChange,i=e.attrName,o=e.target,r=e[G]||2,a=e[K]||3;!et||o&&o!==t||!t[U]||"style"===i||e.prevValue===e.newValue&&(""!==e.newValue||n!==r&&n!==a)||t[U](i,n===r?null:e.prevValue,n===a?null:e.newValue)}function c(e){var t=r(e);return function(e){E.push(t,e.target),Ke&&clearTimeout(Ke),Ke=setTimeout(n,1)}}function u(e){Ze&&(Ze=!1,e.currentTarget.removeEventListener(X,u)),oe.length&&i((e.target||k).querySelectorAll(oe),e.detail===P?P:D),Me&&f()}function d(e,t){var n=this;Ve.call(n,e,t),T.call(n,{target:n})}function p(e,t){Ce(e,t),C?C.observe(e,$e):(Qe&&(e.setAttribute=d,e[j]=z(e),e[N](Y,T)),e[N](J,l)),e[W]&&et&&(e.created=!0,e[W](),e.created=!1)}function f(){for(var e,t=0,n=Ne.length;t<n;t++)e=Ne[t],re.contains(e)||(n--,Ne.splice(t--,1),h(e,P))}function v(e){throw new Error("A "+e+" type is already registered")}function h(e,t){var n,i=a(e);-1<i&&(A(e,ie[i]),i=0,t!==D||e[D]?t!==P||e[P]||(e[D]=!1,e[P]=!0,i=1):(e[P]=!1,e[D]=!0,i=1,Me&&ae.call(Ne,e)<0&&Ne.push(e)),i&&(n=e[t+H])&&n.call(e))}function g(){}function m(e,t,n){var i=n&&n[q]||"",o=t.prototype,r=ze(o),a=t.observedAttributes||de,s={prototype:r};Re(r,W,{value:function(){if(Le)Le=!1;else if(!this[be]){this[be]=!0,new t(this),o[W]&&o[W].call(this);var e=Oe[Te.get(t)];(!ye||e.create.length>1)&&y(this)}}}),Re(r,U,{value:function(e){-1<ae.call(a,e)&&o[U].apply(this,arguments)}}),o[V]&&Re(r,B,{value:o[V]}),o[F]&&Re(r,$,{value:o[F]}),i&&(s[q]=i),e=e.toUpperCase(),Oe[e]={constructor:t,create:i?[i,Se(e)]:[e]},Te.set(t,e),k[R](e.toLowerCase(),s),w(e),Ee[e].r()}function b(e){var t=Oe[e.toUpperCase()];return t&&t.constructor}function _(e){return"string"==typeof e?e:e&&e.is||""}function y(e){for(var t,n=e[U],i=n?e.attributes:de,o=i.length;o--;)t=i[o],n.call(e,t.name||t.nodeName,null,t.value||t.nodeValue)}function w(e){return e=e.toUpperCase(),e in Ee||(Ee[e]={},Ee[e].p=new ke(function(t){Ee[e].r=t})),Ee[e].p}function x(){_e&&delete e.customElements,ue(e,"customElements",{configurable:!0,value:new g}),ue(e,"CustomElementRegistry",{configurable:!0,value:g});for(var t=O.get(/^HTML[A-Z]*[a-z]/),n=t.length;n--;function(t){var n=e[t];if("HTMLAllCollection"!==t&&"HTMLCollection"!=t&&"HTMLFormControlsCollection"!=t&&"HTMLOptionsCollection"!=t&&"HTMLAnchorElement"!=t&&"HTMLDocument"!=t&&n){e[t]=function(e){var t,i;return e||(e=this),e[be]||(Le=!0,t=Oe[Te.get(e.constructor)],t?(i=ye&&1===t.create.length,e=i?Reflect.construct(n,de,t.constructor):k.createElement.apply(k,t.create)):e=Reflect.construct(n,de,e.constructor),e[be]=!0,Le=!1,i||y(e)),e},e[t].prototype=n.prototype;try{n.prototype.constructor=e[t]}catch(i){me=!0,ue(n,be,{value:e[t]})}}}(t[n]));k.createElement=function(e,t){var n=_(t);return n?We.call(this,e,Se(n)):We.call(this,e)},Je||(Ye=!0,k[R](""))}var k=e.document,L=e.Object,O=function(e){var t,n,i,o,r=/^[A-Z]+[a-z]/,a=function(e){var t,n=[];for(t in l)e.test(t)&&n.push(t);return n},s=function(e,t){(t=t.toLowerCase())in l||(l[e]=(l[e]||[]).concat(t),l[t]=l[t.toUpperCase()]=e)},l=(L.create||L)(null),c={};for(n in e)for(o in e[n])for(i=e[n][o],l[o]=i,t=0;t<i.length;t++)l[i[t].toLowerCase()]=l[i[t].toUpperCase()]=o;return c.get=function(e){return"string"==typeof e?l[e]||(r.test(e)?[]:""):a(e)},c.set=function(e,t){return r.test(e)?s(e,t):s(t,e),c},c}({collections:{HTMLAllCollection:["all"],HTMLCollection:["forms"],HTMLFormControlsCollection:["elements"],HTMLOptionsCollection:["options"]},elements:{Element:["element"],HTMLAnchorElement:["a"],HTMLAppletElement:["applet"],HTMLAreaElement:["area"],HTMLAttachmentElement:["attachment"],HTMLAudioElement:["audio"],HTMLBRElement:["br"],HTMLBaseElement:["base"],HTMLBodyElement:["body"],HTMLButtonElement:["button"],HTMLCanvasElement:["canvas"],HTMLContentElement:["content"],HTMLDListElement:["dl"],HTMLDataElement:["data"],HTMLDataListElement:["datalist"],HTMLDetailsElement:["details"],HTMLDialogElement:["dialog"],HTMLDirectoryElement:["dir"],HTMLDivElement:["div"],HTMLDocument:["document"],HTMLElement:["element","abbr","address","article","aside","b","bdi","bdo","cite","code","command","dd","dfn","dt","em","figcaption","figure","footer","header","i","kbd","mark","nav","noscript","rp","rt","ruby","s","samp","section","small","strong","sub","summary","sup","u","var","wbr"],HTMLEmbedElement:["embed"],HTMLFieldSetElement:["fieldset"],HTMLFontElement:["font"],HTMLFormElement:["form"],HTMLFrameElement:["frame"],HTMLFrameSetElement:["frameset"],HTMLHRElement:["hr"],HTMLHeadElement:["head"],HTMLHeadingElement:["h1","h2","h3","h4","h5","h6"],HTMLHtmlElement:["html"],HTMLIFrameElement:["iframe"],HTMLImageElement:["img"],HTMLInputElement:["input"],HTMLKeygenElement:["keygen"],HTMLLIElement:["li"],HTMLLabelElement:["label"],HTMLLegendElement:["legend"],HTMLLinkElement:["link"],HTMLMapElement:["map"],HTMLMarqueeElement:["marquee"],HTMLMediaElement:["media"],HTMLMenuElement:["menu"],HTMLMenuItemElement:["menuitem"],HTMLMetaElement:["meta"],HTMLMeterElement:["meter"],HTMLModElement:["del","ins"],HTMLOListElement:["ol"],HTMLObjectElement:["object"],HTMLOptGroupElement:["optgroup"],HTMLOptionElement:["option"],HTMLOutputElement:["output"],HTMLParagraphElement:["p"],HTMLParamElement:["param"],HTMLPictureElement:["picture"],HTMLPreElement:["pre"],HTMLProgressElement:["progress"],HTMLQuoteElement:["blockquote","q","quote"],HTMLScriptElement:["script"],HTMLSelectElement:["select"],HTMLShadowElement:["shadow"],HTMLSlotElement:["slot"],HTMLSourceElement:["source"],HTMLSpanElement:["span"],HTMLStyleElement:["style"],HTMLTableCaptionElement:["caption"],HTMLTableCellElement:["td","th"],HTMLTableColElement:["col","colgroup"],HTMLTableElement:["table"],HTMLTableRowElement:["tr"],HTMLTableSectionElement:["thead","tbody","tfoot"],HTMLTemplateElement:["template"],HTMLTextAreaElement:["textarea"],HTMLTimeElement:["time"],HTMLTitleElement:["title"],HTMLTrackElement:["track"],HTMLUListElement:["ul"],HTMLUnknownElement:["unknown","vhgroupv","vkeygen"],HTMLVideoElement:["video"]},nodes:{Attr:["node"],Audio:["audio"],CDATASection:["node"],CharacterData:["node"],Comment:["#comment"],Document:["#document"],DocumentFragment:["#document-fragment"],DocumentType:["node"],HTMLDocument:["#document"],Image:["img"],Option:["option"],ProcessingInstruction:["node"],ShadowRoot:["#shadow-root"],Text:["#text"],XMLDocument:["xml"]}});t||(t="auto");var E,T,S,z,C,I,A,M,R="registerElement",j="__"+R+(1e5*e.Math.random()>>0),N="addEventListener",D="attached",H="Callback",P="detached",q="extends",U="attributeChanged"+H,B=D+H,V="connected"+H,F="disconnected"+H,W="created"+H,$=P+H,G="ADDITION",K="REMOVAL",J="DOMAttrModified",X="DOMContentLoaded",Y="DOMSubtreeModified",Q="<",Z="=",ee=/^[A-Z][A-Z0-9]*(?:-[A-Z0-9]+)+$/,te=["ANNOTATION-XML","COLOR-PROFILE","FONT-FACE","FONT-FACE-SRC","FONT-FACE-URI","FONT-FACE-FORMAT","FONT-FACE-NAME","MISSING-GLYPH"],ne=[],ie=[],oe="",re=k.documentElement,ae=ne.indexOf||function(e){for(var t=this.length;t--&&this[t]!==e;);return t},se=L.prototype,le=se.hasOwnProperty,ce=se.isPrototypeOf,ue=L.defineProperty,de=[],pe=L.getOwnPropertyDescriptor,fe=L.getOwnPropertyNames,ve=L.getPrototypeOf,he=L.setPrototypeOf,ge=!!L.__proto__,me=!1,be="__dreCEv1",_e=e.customElements,ye="force"!==t&&!!(_e&&_e.define&&_e.get&&_e.whenDefined),we=L.create||L,xe=e.Map||function(){var e,t=[],n=[];return{get:function(e){return n[ae.call(t,e)]},set:function(i,o){e=ae.call(t,i),e<0?n[t.push(i)-1]=o:n[e]=o}}},ke=e.Promise||function(e){function t(e){for(i=!0;n.length;)n.shift()(e)}var n=[],i=!1,o={catch:function(){return o},then:function(e){return n.push(e),i&&setTimeout(t,1),o}};return e(t),o},Le=!1,Oe=we(null),Ee=we(null),Te=new xe,Se=String,ze=L.create||function e(t){return t?(e.prototype=t,new e):this},Ce=he||(ge?function(e,t){return e.__proto__=t,e}:fe&&pe?function(){function e(e,t){for(var n,i=fe(t),o=0,r=i.length;o<r;o++)n=i[o],le.call(e,n)||ue(e,n,pe(t,n))}return function(t,n){do{e(t,n)}while((n=ve(n))&&!ce.call(n,t));return t}}():function(e,t){for(var n in t)e[n]=t[n];return e}),Ie=e.MutationObserver||e.WebKitMutationObserver,Ae=(e.HTMLElement||e.Element||e.Node).prototype,Me=!ce.call(Ae,re),Re=Me?function(e,t,n){return e[t]=n.value,e}:ue,je=Me?function(e){return 1===e.nodeType}:function(e){return ce.call(Ae,e)},Ne=Me&&[],De=Ae.attachShadow,He=Ae.cloneNode,Pe=Ae.dispatchEvent,qe=Ae.getAttribute,Ue=Ae.hasAttribute,Be=Ae.removeAttribute,Ve=Ae.setAttribute,Fe=k.createElement,We=Fe,$e=Ie&&{attributes:!0,characterData:!0,attributeOldValue:!0},Ge=Ie||function(e){Qe=!1,re.removeEventListener(J,Ge)},Ke=0,Je=R in k,Xe=!0,Ye=!1,Qe=!0,Ze=!0,et=!0;if(Je||(he||ge?(A=function(e,t){ce.call(t,e)||p(e,t)},M=p):(A=function(e,t){e[j]||(e[j]=L(!0),p(e,t))},M=A),Me?(Qe=!1,function(){var e=pe(Ae,N),t=e.value,n=function(e){var t=new CustomEvent(J,{bubbles:!0});t.attrName=e,t.prevValue=qe.call(this,e),t.newValue=null,t[K]=t.attrChange=2,Be.call(this,e),Pe.call(this,t)},i=function(e,t){var n=Ue.call(this,e),i=n&&qe.call(this,e),o=new CustomEvent(J,{bubbles:!0});Ve.call(this,e,t),o.attrName=e,o.prevValue=n?i:null,o.newValue=t,n?o.MODIFICATION=o.attrChange=1:o[G]=o.attrChange=0,Pe.call(this,o)},o=function(e){var t,n=e.currentTarget,i=n[j],o=e.propertyName;i.hasOwnProperty(o)&&(i=i[o],t=new CustomEvent(J,{bubbles:!0}),t.attrName=i.name,t.prevValue=i.value||null,t.newValue=i.value=n[o]||null,null==t.prevValue?t[G]=t.attrChange=0:t.MODIFICATION=t.attrChange=1,Pe.call(n,t))};e.value=function(e,r,a){e===J&&this[U]&&this.setAttribute!==i&&(this[j]={className:{name:"class",value:this.className}},this.setAttribute=i,this.removeAttribute=n,t.call(this,"propertychange",o)),t.call(this,e,r,a)},ue(Ae,N,e)}()):Ie||(re[N](J,Ge),re.setAttribute(j,1),re.removeAttribute(j),Qe&&(T=function(e){var t,n,i,o=this;if(o===e.target){t=o[j],o[j]=n=z(o);for(i in n){if(!(i in t))return S(0,o,i,t[i],n[i],G);if(n[i]!==t[i])return S(1,o,i,t[i],n[i],"MODIFICATION")}for(i in t)if(!(i in n))return S(2,o,i,t[i],n[i],K)}},S=function(e,t,n,i,o,r){var a={attrChange:e,currentTarget:t,attrName:n,prevValue:i,newValue:o};a[r]=e,l(a)},z=function(e){for(var t,n,i={},o=e.attributes,r=0,a=o.length;r<a;r++)t=o[r],"setAttribute"!==(n=t.name)&&(i[n]=t.value);return i})),k[R]=function(e,t){if(n=e.toUpperCase(),Xe&&(Xe=!1,Ie?(C=function(e,t){function n(e,t){for(var n=0,i=e.length;n<i;t(e[n++]));}return new Ie(function(i){for(var o,r,a,s=0,l=i.length;s<l;s++)o=i[s],"childList"===o.type?(n(o.addedNodes,e),n(o.removedNodes,t)):(r=o.target,et&&r[U]&&"style"!==o.attributeName&&(a=qe.call(r,o.attributeName))!==o.oldValue&&r[U](o.attributeName,o.oldValue,a))})}(r(D),r(P)),I=function(e){return C.observe(e,{childList:!0,subtree:!0}),e},I(k),De&&(Ae.attachShadow=function(){return I(De.apply(this,arguments))})):(E=[],k[N]("DOMNodeInserted",c(D)),k[N]("DOMNodeRemoved",c(P))),k[N](X,u),k[N]("readystatechange",u),Ae.cloneNode=function(e){var t=He.call(this,!!e),n=a(t);return-1<n&&M(t,ie[n]),e&&oe.length&&o(t.querySelectorAll(oe)),t}),Ye)return Ye=!1;if(-2<ae.call(ne,Z+n)+ae.call(ne,Q+n)&&v(e),!ee.test(n)||-1<ae.call(te,n))throw new Error("The type "+e+" is invalid");var n,s,l=function(){return p?k.createElement(f,n):k.createElement(f)},d=t||se,p=le.call(d,q),f=p?t[q].toUpperCase():n;return p&&-1<ae.call(ne,Q+f)&&v(f),s=ne.push((p?Z:Q)+n)-1,oe=oe.concat(oe.length?",":"",p?f+'[is="'+e.toLowerCase()+'"]':f),l.prototype=ie[s]=le.call(d,"prototype")?d.prototype:ze(Ae),oe.length&&i(k.querySelectorAll(oe),D),l},k.createElement=We=function(e,t){var n=_(t),i=n?Fe.call(k,e,Se(n)):Fe.call(k,e),o=""+e,r=ae.call(ne,(n?Z:Q)+(n||o).toUpperCase()),a=-1<r;return n&&(i.setAttribute("is",n=n.toLowerCase()),a&&(a=s(o.toUpperCase(),n))),et=!k.createElement.innerHTMLHelper,a&&M(i,ie[r]),i}),g.prototype={constructor:g,define:ye?function(e,t,n){if(n)m(e,t,n);else{var i=e.toUpperCase();Oe[i]={constructor:t,create:[i]},Te.set(t,i),_e.define(e,t)}}:m,get:ye?function(e){return _e.get(e)||b(e)}:b,whenDefined:ye?function(e){return ke.race([_e.whenDefined(e),w(e)])}:w},_e&&"force"!==t)try{!function(t,n,i){if(n[q]="a",t.prototype=ze(HTMLAnchorElement.prototype),t.prototype.constructor=t,e.customElements.define(i,t,n),qe.call(k.createElement("a",{is:i}),"is")!==i||ye&&qe.call(new t,"is")!==i)throw n}(function e(){return Reflect.construct(HTMLAnchorElement,[],e)},{},"document-register-element-a")}catch(e){x()}else x();try{Fe.call(k,"a","a")}catch(e){Se=function(e){return{is:e}}}}function C(e,t){for(var n=0,i=e.length;n<i;n++)t(e[n])}function I(e,t){for(var n=0,i=e.length,o=[];n<i;n++)o.push(t(e[n]));return o}function A(e){var t=!1;return function(){t||(t=!0,window.requestAnimationFrame(function(){t=!1,e()}))}}function M(){}function R(e){return e[e.length-1]}function j(e){var t=e.slice();return t.pop(),t}function N(e,t){if(!e||e===t)return null;if(!t)return e;if(0===t.indexOf(e))return null;for(var n=e.split("/"),i=t.split("/"),o=[],r=0;r<n.length;r++)if(n[r]!==i[r]){o=n.slice(r);break}return o.join("/")}function D(e,t){return t=t[H(e)],e=P(e),e?D(e,t.subviews):t}function H(e){return e.split("/")[0]}function P(e){return e.indexOf("/")>-1?e.substring(e.indexOf("/")+1):null}function q(e,t,n){return"singleton"===t?(Ol[n]&&Ol[n]._node||(Ol[n]=F(e())),Ol[n]):F(e())}function U(e){return e._cached?document.body.contains(e._cached)?(e._node=document.createElement("div"),e._node.isSameNode=function(t){return!(t!==e._cached)},e):(e._node=e._cached,e):(e._cached=e._node,e)}function B(e,t,n){Cl||(Cl=!0,Ll(window,"auto"));var i=window.customElements.get(e);if(i)return i;var o=n?I(n,function(e){return"data-"+e}):[],r=function(e){function n(e){cs(this,n);var i=hs(this,(n.__proto__||Object.getPrototypeOf(n)).call(this)),o=xl(i.dataset,e),r=t(o);return r&&(i._elevio=r,i.appendChild(r._node)),i}return fs(n,e),us(n,null,[{key:"observedAttributes",get:function(){return o}}]),us(n,[{key:"attributeChangedCallback",value:function(){if(this._elevio&&this._elevio._destroy)this._elevio._destroy();else for(;this.hasChildNodes();)this.removeChild(this.lastChild);var e=t(this.dataset);e&&(this._elevio=e,this.appendChild(e._node))}},{key:"disconnectedCallback",value:function(){this._elevio._destroy()}}]),n}(window.HTMLElement);return window.customElements.define(e,r),r}function V(e,t){return new(window.customElements.get(e))(t)}function F(e){function t(e){return e||(e=document.body),e.appendChild(y),_}function n(){C(Object.keys(b.models),r),C(Object.keys(_),function(e){_[e]=void 0}),b=void 0,x=void 0,y&&y.parentNode&&y.parentNode.removeChild(y),y=void 0,_={}}function i(){return y.outerHTML}function o(e){var i=e.name;e.effects=xl({},Tl.effects,e.effects,{_append:t,_destroy:n});var o=b.models[i]=xl({},Tl,e);b.state[i]=o.state;var r=Object.keys(b.models[i].subscriptions);o.subscriptionCancels=I(r,function(t){return t===Sl?(o.subscriptionOnloadCancel=e.subscriptions[t](v(i),R(b.state._router._stack)),M):e.subscriptions[t](v(i))})}function r(e){var t=b.models[e];t.subscriptionOnloadCancel&&t.subscriptionOnloadCancel(),C(t.subscriptionCancels,function(e){e&&e()}),delete b.models[e]}function a(e){var t=b.models[e];!0===t.hasRouteParams&&(r(e),o(t))}function s(e,t,n,i){if(e&&t){var o=void 0;if(i){var a=N(e,i);if(!a)return;o=D(e.substring(0,e.indexOf(a))+H(a),t)||t[n],e=a}else o=t[H(e)]||t[n];var l=P(e);r(o.model.name),s(l,o.subviews,n)}}function l(e,t,n,i){if(e&&t){var r=t[H(e)]||t[n],a=P(e);b.models[r.model.name]||o(r.model),l(a,r.subviews,n)}}function c(e,t,n,i){if(e&&t){var o=t[H(e)],r=P(e);a(o.model.name),c(r,o.subviews,n)}}function u(e,t,n){if(!e||!t)return M;var i=t[H(e)]||t[n],o=i.model.name,r=P(e);return function(){return i.view(b.state[o],v(o),u(r,i.subviews,n))}}function d(){if(b){var e=b.state._router,t=R(e._stack);if(t&&t.name){k!==t&&(k&&k.name===t.name?c(t.name,e._routes,e._err.name):(k&&s(k.name,e._routes,e._err.name,t.name),l(t.name,e._routes,e._err.name)),k=t);var n=u(t.name,e._routes,e._err.name)();y=y?zl.update(y,n):n}}}function p(e,t){b.state[e]=xl(b.state[e],t),x(),g("onStateChange",function(e){return e(b)})}function f(e,t,n){window.setTimeout(function(){if(b){var i=e.split(":"),o=i[0],r=i[1],a=b.models[o];if(a)if(a.reducers[r])p(o,a.reducers[r](b.state[o],t)),g("onAction",function(n){return n(e,t,b)}),n();else if(a.effects[r]){var s=0;a.effects[r](b.state[o],t,v(),function(i){if(++s>1)return m("elevio-component; Cannot call done from "+e+" more than once.");g("onAction",function(n){return n(e,t,b)}),n(i)})}else n("elevio-component; Could not find action "+e);else n("elevio-component; Could not find model "+o+" from action "+e)}},0)}function v(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e.length>0&&(e+=":"),function(t,n,i){return i||(i=m),w(""+e+t,n,i)}}function h(e){return function(t){return b.exports[e](t,b.state,v())}}function g(e,t){C(b.plugins,function(n){var i=n[e];i&&t(i)})}function m(e){e&&g("onError",function(t){return t(e,b)})}e=xl({},El,e);var b={name:e.name,state:{},models:{},plugins:e.plugins,exports:e.exports},_={},y=void 0,w=f,x=A(d),k=void 0;return e.name?(g("wrapSend",function(e){w=e(w)}),C(e.models,o),b.models._router||o(W({index:e.view})),g("onStateChange",function(e){return e(b)}),d(),_._node=y,_._append=t,_._destroy=n,_._toString=i,C(Object.keys(b.exports),function(e){_[e]=h(e)}),_):m("elevio-component: opts must have a name property.")}function W(e,t,n){return{name:"_router",state:{_routes:e,_stack:[t||{name:"index"}],_err:n||{name:"index"}},reducers:{go:function(e,t){return{_stack:e._stack.concat([t])}},back:function(e){return{_stack:j(e._stack)}}}}}function $(){return{_node:null,_append:M,_destroy:M,_toString:M}}function G(e){if(!e)return!1;var t=Mc.call(e);return"[object Function]"===t||"function"==typeof e&&"[object RegExp]"!==t||"undefined"!=typeof window&&(e===window.setTimeout||e===window.alert||e===window.confirm||e===window.prompt)}function K(e){for(var t in e)if(e.hasOwnProperty(t))return!1;return!0}function J(e,t,n){var i=e;return Hc(t)?(n=t,"string"==typeof e&&(i={uri:e})):i=qc(t,{uri:e}),i.callback=n,i}function X(e,t,n){return t=J(e,t,n),Y(t)}function Y(e){function t(){4===s.readyState&&o()}function n(){var e=void 0;if(e=s.response?s.response:s.responseText||Q(s),g)try{e=JSON.parse(e)}catch(e){}return e}function i(e){return clearTimeout(u),e instanceof Error||(e=new Error(""+(e||"Unknown XMLHttpRequest Error"))),e.statusCode=0,a(e,m)}function o(){if(!c){var t;clearTimeout(u),t=e.useXDR&&void 0===s.status?200:1223===s.status?204:s.status;var i=m,o=null;return 0!==t?(i={body:n(),statusCode:t,method:p,headers:{},url:d,rawRequest:s},s.getAllResponseHeaders&&(i.headers=Pc(s.getAllResponseHeaders()))):o=new Error("Internal XMLHttpRequest Error"),a(o,i,i.body)}}if(void 0===e.callback)throw new Error("callback argument missing");var r=!1,a=function(t,n,i){r||(r=!0,e.callback(t,n,i))},s=e.xhr||null;s||(s=e.cors||e.useXDR?new X.XDomainRequest:new X.XMLHttpRequest);var l,c,u,d=s.url=e.uri||e.url,p=s.method=e.method||"GET",f=e.body||e.data||null,v=s.headers=e.headers||{},h=!!e.sync,g=!1,m={body:void 0,headers:{},statusCode:0,method:p,url:d,rawRequest:s};if("json"in e&&!1!==e.json&&(g=!0,v.accept||v.Accept||(v.Accept="application/json"),"GET"!==p&&"HEAD"!==p&&(v["content-type"]||v["Content-Type"]||(v["Content-Type"]="application/json"),f=JSON.stringify(!0===e.json?f:e.json))),s.onreadystatechange=t,s.onload=o,s.onerror=i,s.onprogress=function(){},s.onabort=function(){c=!0},s.ontimeout=i,s.open(p,d,!h,e.username,e.password),h||(s.withCredentials=!!e.withCredentials),!h&&e.timeout>0&&(u=setTimeout(function(){if(!c){c=!0,s.abort("timeout");var e=new Error("XMLHttpRequest timeout");e.code="ETIMEDOUT",i(e)}},e.timeout)),s.setRequestHeader)for(l in v)v.hasOwnProperty(l)&&s.setRequestHeader(l,v[l]);else if(e.headers&&!K(e.headers))throw new Error("Headers cannot be set on an XDomainRequest object");return"responseType"in e&&(s.responseType=e.responseType),"beforeSend"in e&&"function"==typeof e.beforeSend&&e.beforeSend(s),s.send(f),s}function Q(e){if("document"===e.responseType)return e.responseXML;var t=204===e.status&&e.responseXML&&"parsererror"===e.responseXML.documentElement.nodeName;return""!==e.responseType||t?null:e.responseXML}function Z(){}function ee(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function te(){Yc=!0;for(var e,t,n=Qc.length;n;){for(t=Qc,Qc=[],e=-1;++e<n;)t[e]();n=Qc.length}Yc=!1}function ne(e){1!==Qc.push(e)||Yc||Bc()}function ie(){}function oe(e){if("function"!=typeof e)throw new TypeError("resolver must be a function");this.state=ou,this.queue=[],this.outcome=void 0,e!==ie&&le(this,e)}function re(e,t,n){this.promise=e,"function"==typeof t&&(this.onFulfilled=t,this.callFulfilled=this.otherCallFulfilled),"function"==typeof n&&(this.onRejected=n,this.callRejected=this.otherCallRejected)}function ae(e,t,n){eu(function(){var i;try{i=t(n)}catch(t){return tu.reject(e,t)}i===e?tu.reject(e,new TypeError("Cannot resolve promise with itself")):tu.resolve(e,i)})}function se(e){var t=e&&e.then;if(e&&"object"===(void 0===e?"undefined":ls(e))&&"function"==typeof t)return function(){t.apply(e,arguments)}}function le(e,t){function n(t){r||(r=!0,tu.reject(e,t))}function i(t){r||(r=!0,tu.resolve(e,t))}function o(){t(i,n)}var r=!1,a=ce(o);"error"===a.status&&n(a.value)}function ce(e,t){var n={};try{n.value=e(t),n.status="success"}catch(e){n.status="error",n.value=e}return n}function ue(e){return e instanceof this?e:tu.resolve(new this(ie),e)}function de(e){var t=new this(ie);return tu.reject(t,e)}function pe(e){var t=this;Object.prototype.toString.call(e);var n=e.length,i=!1;if(!n)return this.resolve([]);for(var o=new Array(n),r=0,a=-1,s=new this(ie);++a<n;)!function(e,a){function l(e){o[a]=e,++r!==n||i||(i=!0,tu.resolve(s,o))}t.resolve(e).then(l,function(e){i||(i=!0,tu.reject(s,e))})}(e[a],a);return s}function fe(e){var t=this;if("[object Array]"!==Object.prototype.toString.call(e))return this.reject(new TypeError("must be an array"));var n=e.length,i=!1;if(!n)return this.resolve([]);for(var o=-1,r=new this(ie);++o<n;)!function(e){t.resolve(e).then(function(e){i||(i=!0,tu.resolve(r,e))},function(e){i||(i=!0,tu.reject(r,e))})}(e[o]);return r}function ve(e,t){try{return window.localStorage.setItem(wc.prefix+e,JSON.stringify(t))}catch(e){return null}}function he(e){try{return JSON.parse(window.localStorage.getItem(wc.prefix+e))}catch(e){return null}}function ge(e){try{return window.localStorage.removeItem(wc.prefix+e)}catch(e){return null}}function me(e,t){try{return window.sessionStorage.setItem(wc.prefix+e,JSON.stringify(t))}catch(e){return null}}function be(e){try{return JSON.parse(window.sessionStorage.getItem(e))}catch(e){return null}}function _e(e){try{var t=0===e.indexOf(wc.prefix)?e:wc.prefix+e;return window.sessionStorage.removeItem(t)}catch(e){return null}}function ye(e){try{for(var t=[],n=Object.keys(window.sessionStorage),i=wc.prefix+e,o=0;o<n.length;o+=1)0===n[o].indexOf(i)&&t.push(be(n[o]));return t}catch(e){return[]}}function we(e){try{for(var t=Object.keys(window.sessionStorage),n=wc.prefix+e,i=0;i<t.length;i+=1)0===t[i].indexOf(n)&&_e(t[i]);return!0}catch(e){return!1}}function xe(e){try{for(var t=Object.keys(window.sessionStorage),n=0;n<t.length;n+=1){var i=t[n];if(0===i.indexOf(wc.prefix)){for(var o=0,r=0;r<e.length;r+=1)-1!==i.indexOf(e[r])&&(o+=1);if(o===e.length)return be(i)}}return null}catch(e){return null}}function ke(e){function t(){d&&window.clearInterval(d),d=void 0}function n(){var e=u.slice(0);return u=[],t(),e.length>0&&c(e),this}function i(){s&&!d&&u.length>0&&(d=window.setInterval(function(){return n()},l))}function o(e){return!1===e?(s=!1,t()):(s=!0,i()),this}function r(e){return u.push(e),i(),this}var a=e||{},s=!1!==a.ready,l=a.interval||5e3,c=a.handler||function(){},u=[],d=void 0;return o(s),{flush:n,isReady:o,push:r}}function Le(e){var t=e.tagName.toLowerCase();return!0!==Sd[t]&&e.childNodes.length>0}function Oe(e,t){Le(e)?e.appendChild(t):e.parentNode.insertBefore(t,e.nextElementSibling)}function Ee(e,t){for(var n=e.length,i=n;i>0;i--)t(e[i-1])}function Te(){Ee(document.getElementsByClassName(zd),function(e){e&&e.parentNode&&e.parentNode.removeChild(e)})}function Se(e){return e?new Date(e).getTime():(new Date).getTime()}function ze(e){return void 0!==e}function Ce(e){return"[object Object]"===Object.prototype.toString.call(e)}function Ie(e){return!!(e instanceof Error)}function Ae(e){return"function"==typeof e}function Me(e){return"string"==typeof e}function Re(e){return e&&e.length?e[0]:null}function je(e){return e[e.length-1]}function Ne(e){return null==e?e:String(e)}function De(e){var t=Object.prototype.hasOwnProperty,n=!{toString:null}.propertyIsEnumerable("toString"),i=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],o=i.length,r=[];for(var a in e)t.call(e,a)&&r.push(a);if(n)for(var s=0;s<o;s+=1)t.call(e,i[s])&&r.push(i[s]);return r}function He(e,t){for(var n=0,i=e.length;n<i;n+=1)t(e[n])}function Pe(e,t){for(var n=0,i=e.length,o=[];n<i;n+=1)o.push(t(e[n],n,e));return o}function qe(e,t){for(var n=0,i=e.length,o=[];n<i;n+=1)t(e[n],n,e)&&o.push(e[n]);return o}function Ue(e,t,n){var i=0,o=e.length,r=n;if(!e.length)return n;for(;i<o;i+=1)r=t(r,e[i],i,e);return r}function Be(e){var t=e.slice();return t.pop(),t}function Ve(e,t){if(e.length!==t.length)return!1;for(var n=!0,i=e.length-1;i>=0;i-=1)if(e[i]!==t[i]){n=!1;break}return n}function Fe(e){return Ue(e,function(e,t){return e[t]=void 0,e},{})}function We(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,n=arguments[2];return Ie(e)?e.toString()+String(e.stack):Ce(e)?function e(n,i,o){return Ie(n)?ds({},i,n.toString()+String(n.stack)):!Ce(n)||o>t?ds({},i,n):Ue(Object.keys(n),function(t,r){var a=i?i+"_"+r:r;return Wc({},t,e(n[r],a,o+1))},{})}(e,n,1):{}}function $e(e,t){return function e(t,n){return n?Ce(t)?Ue(Object.keys(t),function(i,o){return Wc({},i,ds({},o,e(t[o],n[o])))},{}):n:t}(e,t)}function Ge(e){var t=void 0;return function(){return t||(t=e()),t}}function Ke(e,t){var n=-1;return e.some(function(e,i){return!0===t(e)&&(n=i,!0)}),n}function(){}