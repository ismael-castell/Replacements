/*! For license information please see commons-8df319890bc041622aae.js.LICENSE.txt */
(self.webpackChunkvideojs_com=self.webpackChunkvideojs_com||[]).push([[351],{3509:function(e,t){var n,r,a,o,i,s,l,c,u,d,f,p,m,g,h,b;r="undefined"!=typeof window?window:this,i="0.5.4",s="hasOwnProperty",l=/[\.\/]/,c=/\s*,\s*/,u=function(e,t){return e-t},d={n:{}},f=function(){for(var e=0,t=this.length;e<t;e++)if(void 0!==this[e])return this[e]},p=function(){for(var e=this.length;--e;)if(void 0!==this[e])return this[e]},m=Object.prototype.toString,g=String,h=Array.isArray||function(e){return e instanceof Array||"[object Array]"==m.call(e)},b=function e(t,n){var r,i=o,s=Array.prototype.slice.call(arguments,2),l=e.listeners(t),c=0,d=[],m={},g=[],h=a;g.firstDefined=f,g.lastDefined=p,a=t,o=0;for(var b=0,y=l.length;b<y;b++)"zIndex"in l[b]&&(d.push(l[b].zIndex),l[b].zIndex<0&&(m[l[b].zIndex]=l[b]));for(d.sort(u);d[c]<0;)if(r=m[d[c++]],g.push(r.apply(n,s)),o)return o=i,g;for(b=0;b<y;b++)if("zIndex"in(r=l[b]))if(r.zIndex==d[c]){if(g.push(r.apply(n,s)),o)break;do{if((r=m[d[++c]])&&g.push(r.apply(n,s)),o)break}while(r)}else m[r.zIndex]=r;else if(g.push(r.apply(n,s)),o)break;return o=i,a=h,g},b._events=d,b.listeners=function(e){var t,n,r,a,o,i,s,c,u=h(e)?e:e.split(l),f=d,p=[f],m=[];for(a=0,o=u.length;a<o;a++){for(c=[],i=0,s=p.length;i<s;i++)for(n=[(f=p[i].n)[u[a]],f["*"]],r=2;r--;)(t=n[r])&&(c.push(t),m=m.concat(t.f||[]));p=c}return m},b.separator=function(e){e?(e="["+(e=g(e).replace(/(?=[\.\^\]\[\-])/g,"\\"))+"]",l=new RegExp(e)):l=/[\.\/]/},b.on=function(e,t){if("function"!=typeof t)return function(){};for(var n=h(e)?h(e[0])?e:[e]:g(e).split(c),r=0,a=n.length;r<a;r++)!function(e){for(var n,r=h(e)?e:g(e).split(l),a=d,o=0,i=r.length;o<i;o++)a=(a=a.n).hasOwnProperty(r[o])&&a[r[o]]||(a[r[o]]={n:{}});for(a.f=a.f||[],o=0,i=a.f.length;o<i;o++)if(a.f[o]==t){n=!0;break}!n&&a.f.push(t)}(n[r]);return function(e){+e==+e&&(t.zIndex=+e)}},b.f=function(e){var t=[].slice.call(arguments,1);return function(){b.apply(null,[e,null].concat(t).concat([].slice.call(arguments,0)))}},b.stop=function(){o=1},b.nt=function(e){var t=h(a)?a.join("."):a;return e?new RegExp("(?:\\.|\\/|^)"+e+"(?:\\.|\\/|$)").test(t):t},b.nts=function(){return h(a)?a:a.split(l)},b.off=b.unbind=function(e,t){if(e){var n=h(e)?h(e[0])?e:[e]:g(e).split(c);if(n.length>1)for(var r=0,a=n.length;r<a;r++)b.off(n[r],t);else{n=h(e)?e:g(e).split(l);var o,i,u,f,p,m=[d],y=[];for(r=0,a=n.length;r<a;r++)for(f=0;f<m.length;f+=u.length-2){if(u=[f,1],o=m[f].n,"*"!=n[r])o[n[r]]&&(u.push(o[n[r]]),y.unshift({n:o,name:n[r]}));else for(i in o)o[s](i)&&(u.push(o[i]),y.unshift({n:o,name:i}));m.splice.apply(m,u)}for(r=0,a=m.length;r<a;r++)for(o=m[r];o.n;){if(t){if(o.f){for(f=0,p=o.f.length;f<p;f++)if(o.f[f]==t){o.f.splice(f,1);break}!o.f.length&&delete o.f}for(i in o.n)if(o.n[s](i)&&o.n[i].f){var I=o.n[i].f;for(f=0,p=I.length;f<p;f++)if(I[f]==t){I.splice(f,1);break}!I.length&&delete o.n[i].f}}else for(i in delete o.f,o.n)o.n[s](i)&&o.n[i].f&&delete o.n[i].f;o=o.n}e:for(r=0,a=y.length;r<a;r++){for(i in(o=y[r]).n[o.name].f)continue e;for(i in o.n[o.name].n)continue e;delete o.n[o.name]}}}else b._events=d={n:{}}},b.once=function(e,t){return b.on(e,(function n(){return b.off(e,n),t.apply(this,arguments)}))},b.version=i,b.toString=function(){return"You are running Eve 0.5.4"},r.eve=b,e.exports?e.exports=b:void 0===(n=function(){return b}.apply(t,[]))||(e.exports=n)},1829:function(e,t,n){var r;!function(){"use strict";var a=!("undefined"==typeof window||!window.document||!window.document.createElement),o={canUseDOM:a,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:a&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:a&&!!window.screen};void 0===(r=function(){return o}.call(t,n,t,e))||(e.exports=r)}()},8687:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function o(e){return e&&e.__esModule?e:{default:e}}var i=n(7294),s=o(i),l=o(n(5697)),c=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t,n){for(var r=!0;r;){var a=e,o=t,i=n;r=!1,null===a&&(a=Function.prototype);var s=Object.getOwnPropertyDescriptor(a,o);if(void 0!==s){if("value"in s)return s.value;var l=s.get;if(void 0===l)return;return l.call(i)}var c=Object.getPrototypeOf(a);if(null===c)return;e=c,t=o,n=i,r=!0,s=c=void 0}}(Object.getPrototypeOf(t.prototype),"constructor",this).call(this,e),this.state={hover:!1}}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"getLineStyle",value:function(e){return r({position:"absolute",height:"20%",left:0,right:0,top:2*e*20+"%",opacity:this.state.hover?.6:1},this.state.hover&&this.props.styles.bmBurgerBarsHover)}},{key:"render",value:function(){var e=this,t=void 0;if(this.props.customIcon){var n={className:("bm-icon "+(this.props.customIcon.props.className||"")).trim(),style:r({width:"100%",height:"100%"},this.props.styles.bmIcon)};t=s.default.cloneElement(this.props.customIcon,n)}else t=s.default.createElement("span",null,[0,1,2].map((function(t){return s.default.createElement("span",{key:t,className:("bm-burger-bars "+e.props.barClassName+" "+(e.state.hover?"bm-burger-bars-hover":"")).trim(),style:r({},e.getLineStyle(t),e.props.styles.bmBurgerBars)})})));return s.default.createElement("div",{className:("bm-burger-button "+this.props.className).trim(),style:r({zIndex:1e3},this.props.styles.bmBurgerButton)},t,s.default.createElement("button",{onClick:this.props.onClick,onMouseOver:function(){return e.setState({hover:!0})},onMouseOut:function(){return e.setState({hover:!1})},style:{position:"absolute",left:0,top:0,width:"100%",height:"100%",margin:0,padding:0,border:"none",fontSize:0,background:"transparent",cursor:"pointer"}},"Open Menu"))}}]),t}(i.Component);t.default=c,c.propTypes={barClassName:l.default.string,customIcon:l.default.element,styles:l.default.object},c.defaultProps={barClassName:"",className:"",styles:{}},e.exports=t.default},7194:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={slide:n(2300),stack:n(611),elastic:n(9558),bubble:n(5905),push:n(4208),pushRotate:n(8689),scaleDown:n(4468),scaleRotate:n(8188),fallDown:n(9932),reveal:n(6545)},e.exports=t.default},625:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=function(e,t,n){for(var r=!0;r;){var a=e,o=t,i=n;r=!1,null===a&&(a=Function.prototype);var s=Object.getOwnPropertyDescriptor(a,o);if(void 0!==s){if("value"in s)return s.value;var l=s.get;if(void 0===l)return;return l.call(i)}var c=Object.getPrototypeOf(a);if(null===c)return;e=c,t=o,n=i,r=!0,s=c=void 0}};function i(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var l=n(7294),c=i(l),u=i(n(5697)),d=function(e){function t(){s(this,t),o(Object.getPrototypeOf(t.prototype),"constructor",this).apply(this,arguments)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"getCrossStyle",value:function(e){return{position:"absolute",width:3,height:14,transform:"before"===e?"rotate(45deg)":"rotate(-45deg)"}}},{key:"render",value:function(){var e,t=this;if(this.props.customIcon){var n={className:("bm-cross "+(this.props.customIcon.props.className||"")).trim(),style:r({width:"100%",height:"100%"},this.props.styles.bmCross)};e=c.default.cloneElement(this.props.customIcon,n)}else e=c.default.createElement("span",{style:{position:"absolute",top:"6px",right:"14px"}},["before","after"].map((function(e,n){return c.default.createElement("span",{key:n,className:("bm-cross "+t.props.crossClassName).trim(),style:r({},t.getCrossStyle(e),t.props.styles.bmCross)})})));return c.default.createElement("div",{className:("bm-cross-button "+this.props.className).trim(),style:r({},{position:"absolute",width:24,height:24,right:8,top:8},this.props.styles.bmCrossButton)},e,c.default.createElement("button",{onClick:this.props.onClick,style:{position:"absolute",left:0,top:0,width:"100%",height:"100%",margin:0,padding:0,border:"none",fontSize:0,background:"transparent",cursor:"pointer"},tabIndex:this.props.tabIndex},"Close Menu"))}}]),t}(l.Component);t.default=d,d.propTypes={crossClassName:u.default.string,customIcon:u.default.element,styles:u.default.object,tabIndex:u.default.number},d.defaultProps={crossClassName:"",className:"",styles:{},tabIndex:0},e.exports=t.default},4376:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={overlay:function(e){return{position:"fixed",zIndex:1e3,width:"100%",height:"100%",background:"rgba(0, 0, 0, 0.3)",opacity:e?1:0,MozTransform:e?"":"translate3d(100%, 0, 0)",MsTransform:e?"":"translate3d(100%, 0, 0)",OTransform:e?"":"translate3d(100%, 0, 0)",WebkitTransform:e?"":"translate3d(100%, 0, 0)",transform:e?"":"translate3d(100%, 0, 0)",transition:e?"opacity 0.3s":"opacity 0.3s, transform 0s 0.3s"}},menuWrap:function(e,t,n){return{position:"fixed",right:n?0:"inherit",zIndex:1100,width:t,height:"100%",MozTransform:e?"":n?"translate3d(100%, 0, 0)":"translate3d(-100%, 0, 0)",MsTransform:e?"":n?"translate3d(100%, 0, 0)":"translate3d(-100%, 0, 0)",OTransform:e?"":n?"translate3d(100%, 0, 0)":"translate3d(-100%, 0, 0)",WebkitTransform:e?"":n?"translate3d(100%, 0, 0)":"translate3d(-100%, 0, 0)",transform:e?"":n?"translate3d(100%, 0, 0)":"translate3d(-100%, 0, 0)",transition:"all 0.5s"}},menu:function(){return{height:"100%",boxSizing:"border-box",overflow:"auto"}},itemList:function(){return{height:"100%"}},item:function(){return{display:"block"}}},e.exports=t.default},7486:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function o(e){return e&&e.__esModule?e:{default:e}}var i=n(7294),s=o(i),l=o(n(3935)),c=o(n(5697)),u=o(n(4376)),d=o(n(8687)),f=o(n(625));t.default=function(e){var t=function(t){function n(t){if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),function(e,t,n){for(var r=!0;r;){var a=e,o=t,i=n;r=!1,null===a&&(a=Function.prototype);var s=Object.getOwnPropertyDescriptor(a,o);if(void 0!==s){if("value"in s)return s.value;var l=s.get;if(void 0===l)return;return l.call(i)}var c=Object.getPrototypeOf(a);if(null===c)return;e=c,t=o,n=i,r=!0,s=c=void 0}}(Object.getPrototypeOf(n.prototype),"constructor",this).call(this,t),this.state={isOpen:!1},!e)throw new Error("No styles supplied")}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(n,t),a(n,[{key:"toggleMenu",value:function(){var e=this,t=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],n=t.isOpen,r=t.noStateChange,a={isOpen:void 0!==n?n:!this.state.isOpen};this.applyWrapperStyles(),this.setState(a,(function(){if(!r&&e.props.onStateChange(a),!e.props.disableAutoFocus)if(a.isOpen){var t=document.querySelector(".bm-item");t&&t.focus()}else document.activeElement?document.activeElement.blur():document.body.blur();e.timeoutId&&clearTimeout(e.timeoutId),e.timeoutId=setTimeout((function(){e.timeoutId=null,a.isOpen||e.applyWrapperStyles(!1)}),500)}))}},{key:"applyWrapperStyles",value:function(){var t=arguments.length<=0||void 0===arguments[0]||arguments[0],n=function(e,n){return e.classList[t?"add":"remove"](n)};this.props.htmlClassName&&n(document.querySelector("html"),this.props.htmlClassName),this.props.bodyClassName&&n(document.querySelector("body"),this.props.bodyClassName),e.pageWrap&&this.props.pageWrapId&&this.handleExternalWrapper(this.props.pageWrapId,e.pageWrap,t),e.outerContainer&&this.props.outerContainerId&&this.handleExternalWrapper(this.props.outerContainerId,e.outerContainer,t)}},{key:"handleExternalWrapper",value:function(e,t,n){var r=document.getElementById(e);if(r){var a=this.getStyle(t);for(var o in a)a.hasOwnProperty(o)&&(r.style[o]=n?a[o]:"");var i=function(e){return e.style["overflow-x"]=n?"hidden":""};this.props.htmlClassName||i(document.querySelector("html")),this.props.bodyClassName||i(document.querySelector("body"))}else console.error("Element with ID '"+e+"' not found")}},{key:"getStyles",value:function(t,n,a){var o="bm"+t.replace(t.charAt(0),t.charAt(0).toUpperCase()),i=u.default[t]?this.getStyle(u.default[t]):{};return e[t]&&(i=r({},i,this.getStyle(e[t],n+1))),this.props.styles[o]&&(i=r({},i,this.props.styles[o])),a&&(i=r({},i,a)),this.props.noTransition&&delete i.transition,i}},{key:"getStyle",value:function(e,t){var n=this.props.width,r="string"!=typeof n?n+"px":n;return e(this.state.isOpen,r,this.props.right,t)}},{key:"listenForClose",value:function(e){e=e||window.event,this.props.disableCloseOnEsc||!this.state.isOpen||"Escape"!==e.key&&27!==e.keyCode||this.toggleMenu()}},{key:"shouldDisableOverlayClick",value:function(){return"function"==typeof this.props.disableOverlayClick?this.props.disableOverlayClick():this.props.disableOverlayClick}},{key:"componentDidMount",value:function(){this.props.customOnKeyDown?window.onkeydown=this.props.customOnKeyDown:window.onkeydown=this.listenForClose.bind(this),this.props.isOpen&&this.toggleMenu({isOpen:!0,noStateChange:!0})}},{key:"componentWillUnmount",value:function(){}