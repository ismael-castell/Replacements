(()=>{var e,t,o,r,i={2281:(e,t,o)=>{"use strict";o.d(t,{mW:()=>r,dx:()=>i,zT:()=>n,oJ:()=>a,An:()=>s,bb:()=>l,sn:()=>d});const r="brightcove",i="https://pubads.g.doubleclick.net/gampad/ads?sz=400x300%7C640x340%7C640x480%7C1080x720&iu=/31695825/LeFigaro/lefigaro_fr_Live&impl=s&gdfp_req=1&ad_rule=1&env=vp&output=vast&unviewed_position_start=1&gdpr=__gdpr__&gdpr_consent=__gdpr_consent__&description_url=__page-url__&cust_params=videoid%3D__item-id__%26duration%3D__item-duration__%26tag%3D__item-tags__%26videoname%3D__item-title__%26description%3D__item-description__%26url%3D__page-url__",n='<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.75 14.25v4.076a.3.3 0 0 0 .512.212l6.864-6.864a.6.6 0 0 0 0-.848l-6.864-6.864a.3.3 0 0 0-.512.212V8.25C9.3 8.4 3 9.825 3 18v2.046a.2.2 0 0 0 .372.103l1.053-1.774c1.8-3.075 3.6-4.05 8.325-4.125Z" fill="#fff" fill-rule="evenodd"/></svg>',a="https://js.estat.com/js/mu-7.0.min.js",s=280080213960,l="Widget Boucle",d=616},6577:e=>{e.exports={createPubSub:()=>{let e,t=[];const o=e=>{const o={listener:e};return t.push(o),()=>{t=t.filter((e=>e!==o))}};return{get value(){return e&&e.payload},publish:o=>{e={payload:o},t.forEach((({listener:e})=>e(o)))},subscribe:o,subscribeReplay:t=>{const r=o(t);return e&&t(e.payload),r}}}}},8373:(e,t,o)=>{const{createPubSub:r}=o(6577),i=()=>({videoUnmutedEvent:r(),videoMutedEvent:r(),videoEnteredInViewportForTheFirstTimeEvent:r(),stickedPlayerIdEvent:r(),isStickyEnabledEvent:r(),isStickyDisplayedEvent:r(),detectFlivePlayersCommand:r(),setStickyVisibilityCommand:r(),toggleStickyModeCommand:r(),initPlayerCommand:r(),removeLoopCommand:r(),setStickyFoldingCommand:r(),setVideoMuteStatusCommand:r(),setVideoPlayStatusCommand:r(),newPlayerEvent:r(),playerExclusivityModeEvent:r(),stickyFoldingEvent:r(),videoPlayStatusEvent:r(),videoMuteStatusEvent:r(),stickyLimitEvent:r()}),n="A very unlikly conflicting variable name for flive team";e.exports={MessageBus:i,flive:(()=>{const e=o.g[n]=o.g[n]||{};return e.messageBus=e.messageBus||i(),e})()}},4772:(e,t,o)=>{"use strict";o.d(t,{i:()=>i,Z:()=>n});var r=o(3572);const i=()=>({account:"610043537001",playerId:(0,r.I)("fig_user_info")?"VRD6K1PkpK":"rySktbi0z",embed:"default"}),n=()=>{const{account:e,playerId:t,embed:o}=i();return`//players.brightcove.net/${e}/${t}_${o}/index.min.js`}},3572:(e,t,o)=>{"use strict";o.d(t,{I:()=>i});var r=o(8379);const i=e=>!!+(e=>{var t;return(e=>{if(!e)return{};const[,t]=e.match(/\w+\.(\w+)\.\w+/);try{return JSON.parse(atob(t))||{}}catch(e){return r.Z.error("Data is not a valid JSON encoded in base64 format!"),{}}})((e=>{if(e)return e.split("=")[1]})((t=e,document.cookie.split("; ").filter((e=>0===e.indexOf(`${t}=`)))[0])))})(e).is_premium},8190:(e,t,o)=>{"use strict";o.d(t,{R:()=>r});const r=e=>{let{check:t,src:o,load:r}=e;const i=t();if(i)return Promise.resolve(i);const n=()=>t()||Promise.reject(new Error(`Feature not available after loading source: ${o}`));return r?r().then(n):function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e4;return new Promise(((o,r)=>{let i;const n=document.createElement("script"),a=t=>{switch(n.onerror=null,n.onload=null,clearTimeout(i),t.type){case"timeout":r(new Error(`Script load timeout: "${e}"`));break;case"load":o();break;default:r(new Error(`Script load failed: "${e}"`))}};n.async=!0,n.type="text/javascript",n.charset="utf-8",n.timeout=t,n.src=e,n.onerror=a,n.onload=a,document.head.appendChild(n),i=setTimeout((()=>a({type:"timeout",target:n})),t)}))}(o).then(n)}},8379:(e,t,o)=>{"use strict";o.d(t,{Z:()=>s});const r=()=>localStorage.getItem("debugLoop")||localStorage.getItem("debug")||"false",i=(e,t)=>"false"!==e&&("*"===e||"true"===e||t.includes(e)),n=e=>function(){i(r(),arguments.length<=0?void 0:arguments[0])&&e(...arguments)},a=n((function(){return console.log(...arguments)}));a.error=n((function(){return console.error(...arguments)}));const s=a}},n={};function a(e){var t=n[e];if(void 0!==t)return t.exports;var o=n[e]={id:e,loaded:!1,exports:{}};return i[e].call(o.exports,o,o.exports,a),o.loaded=!0,o.exports}a.m=i,a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,a.t=function(o,r){if(1&r&&(o=this(o)),8&r)return o;if("object"==typeof o&&o){if(4&r&&o.__esModule)return o;if(16&r&&"function"==typeof o.then)return o}var i=Object.create(null);a.r(i);var n={};e=e||[null,t({}),t([]),t(t)];for(var s=2&r&&o;"object"==typeof s&&!~e.indexOf(s);s=t(s))Object.getOwnPropertyNames(s).forEach((e=>n[e]=()=>o[e]));return n.default=()=>o,a.d(i,n),i},a.d=(e,t)=>{for(var o in t)a.o(t,o)&&!a.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},a.f={},a.e=e=>Promise.all(Object.keys(a.f).reduce(((t,o)=>(a.f[o](e,t),t)),[])),a.u=e=>({90:"3ae512dee1628955523e",149:"88870af3e798360ee8d2",216:"77bd0e5562279386eda9",522:"eb08f1a21cffc97ec171"}[e]+".js"),a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o={},r="loop:",a.l=(e,t,i,n)=>{if(o[e])o[e].push(t);else{var s,l;if(void 0!==i)for(var d=document.getElementsByTagName("script"),c=0;c<d.length;c++){var u=d[c];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==r+i){s=u;break}}s||(l=!0,(s=document.createElement("script")).charset="utf-8",s.timeout=120,a.nc&&s.setAttribute("nonce",a.nc),s.setAttribute("data-webpack",r+i),s.src=e),o[e]=[t];var p=(t,r)=>{s.onerror=s.onload=null,clearTimeout(f);var i=o[e];if(delete o[e],s.parentNode&&s.parentNode.removeChild(s),i&&i.forEach((e=>e(r))),t)return t(r)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=p.bind(null,s.onerror),s.onload=p.bind(null,s.onload),l&&document.head.appendChild(s)}},a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),a.p="https://player-video.lefigaro.fr/loop-widget/",(()=>{a.b=document.baseURI||self.location.href;var e={986:0};a.f.j=(t,o)=>{var r=a.o(e,t)?e[t]:void 0;if(0!==r)if(r)o.push(r[2]);else{var i=new Promise(((o,i)=>r=e[t]=[o,i]));o.push(r[2]=i);var n=a.p+a.u(t),s=new Error;a.l(n,(o=>{if(a.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var i=o&&("load"===o.type?"missing":o.type),n=o&&o.target&&o.target.src;s.message="Loading chunk "+t+" failed.\n("+i+": "+n+")",s.name="ChunkLoadError",s.type=i,s.request=n,r[1](s)}}),"chunk-"+t,t)}};var t=(t,o)=>{var r,i,[n,s,l]=o,d=0;if(n.some((t=>0!==e[t]))){for(r in s)a.o(s,r)&&(a.m[r]=s[r]);l&&l(a)}for(t&&t(o);d<n.length;d++)i=n[d],a.o(e,i)&&e[i]&&e[i][0](),e[n[d]]=0},o=globalThis.webpackChunkloop=globalThis.webpackChunkloop||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})(),(()=>{"use strict";var e=a(8373),t=a(8190);const o=e=>t=>t&&t[e];var r=a(8379),i=a(4772),n=a(2281);e.flive.loopBuildId="3.14.3-e302352e1a3137ba7d876f762f902f02d6287301";let s=!1;var l,d;(l="figaro-video-loop",d=()=>class extends HTMLElement{connectedCallback(){if(s)return void r.Z.error("Trying to load flive loop twice... not possible");s=!0,this.classList.add("figaro-live-loop");const l=this.getAttribute("layout");((r,s)=>{let{playerId:l,embed:d}=s;return(e=>{const t=Object.keys(e),o=Object.values(e);return Promise.all(o).then((e=>t.reduce(((t,o,r)=>({...t,[o]:e[r]})),{})))})({bcLib:"jwp"===n.mW&&(0,t.R)({check:()=>window.bc&&window.bc[`${l}_${d}`],src:(0,i.Z)()}),orchestrator:(0,t.R)({check:()=>e.flive.orchestrator,src:"//player-video.lefigaro.fr/orchestrator.js"}),createLoopLogic:a.e(149).then(a.bind(a,2753)).then(o("default")),createUiLogic:Promise.all([a.e(522),a.e(216),a.e(149)]).then(a.bind(a,9689)).then(o("default")),createHubvisorLogic:a.e(522).then(a.bind(a,2931)).then(o("default")),waitConsentDone:a.e(522).then(a.bind(a,326)).then(o("waitConsentDone")),initDOM:Promise.all([a.e(522),a.e(216),a.e(149)]).then(a.bind(a,8333)).then(o("default")),initialState:a.e(149).then(a.bind(a,4118)).then(o("default")),bootstrapLoop:a.e(149).then(a.bind(a,44)).then(o("default"))})})(0,(0,i.i)()).then((t=>{let{initDOM:o,bcLib:r,createUiLogic:i,createLoopLogic:n,createHubvisorLogic:a,waitConsentDone:d,initialState:c,bootstrapLoop:u}=t;d().then((t=>{s&&(this.shutdownLoop=u({provider:"jwp",bcLib:r,DOMNode:this,layout:l,messageBus:e.flive.messageBus,initDOM:o,createUiLogic:i,createLoopLogic:n,initialState:c,consentString:t,createHubvisorLogic:a}))}))}),(e=>r.Z.error("Could not load all dependencies for Flive loop",e)))}disconnectedCallback(){s=!1,this.id="removedPlayer",this.shutdownLoop&&this.shutdownLoop(),Array.from(this.children).forEach((e=>this.removeChild(e)))}},(0,t.R)({check:()=>window.customElements,load:()=>a.e(90).then(a.t.bind(a,1343,23))}).then((()=>{customElements.get(l)||customElements.define(l,d())}))).catch((