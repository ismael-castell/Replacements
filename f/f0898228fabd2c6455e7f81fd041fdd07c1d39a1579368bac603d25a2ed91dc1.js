gapi.loaded_1(function(_){var window=this;
_.He=_.He||{};_.He.Hs=function(a,b,c){for(var d=[],e=2,f=arguments.length;e<f;++e)d.push(arguments[e]);return function(){for(var h=d.slice(),k=0,l=arguments.length;k<l;++k)h.push(arguments[k]);return b.apply(a,h)}};_.He.Rx=function(a){var b,c,d={};for(b=0;c=a[b];++b)d[c]=c;return d};

_.He=_.He||{};_.He.nV=function(a){var b=window;"undefined"!=typeof b.addEventListener?b.addEventListener("mousemove",a,!1):"undefined"!=typeof b.attachEvent?b.attachEvent("onmousemove",a):_.Ie("cannot attachBrowserEvent: mousemove")};_.He.j2=function(a){var b=window;b.removeEventListener?b.removeEventListener("mousemove",a,!1):b.detachEvent?b.detachEvent("onmousemove",a):_.Ie("cannot removeBrowserEvent: mousemove")};

_.He=_.He||{};
(function(){function a(c,d){return String.fromCharCode(d)}var b={0:!1,10:!0,13:!0,34:!0,39:!0,60:!0,62:!0,92:!0,8232:!0,8233:!0,65282:!0,65287:!0,65308:!0,65310:!0,65340:!0};_.He.escape=function(c,d){if(c){if("string"===typeof c)return _.He.YB(c);if("Array"===typeof c){var e=0;for(d=c.length;e<d;++e)c[e]=_.He.escape(c[e])}else if("object"===typeof c&&d){d={};for(e in c)c.hasOwnProperty(e)&&(d[_.He.YB(e)]=_.He.escape(c[e],!0));return d}}return c};_.He.YB=function(c){if(!c)return c;for(var d=[],e,f,
h=0,k=c.length;h<k;++h)e=c.charCodeAt(h),f=b[e],!0===f?d.push("&#",e,";"):!1!==f&&d.push(c.charAt(h));return d.join("")};_.He.Jfa=function(c){return c?c.replace(/&#([0-9]+);/g,a):c}})();

_.qg=function(){function a(m){var n=new _.og;n.mu(m);return n.Qh()}var b=window.crypto;if(b&&"function"==typeof b.getRandomValues)return function(){var m=new window.Uint32Array(1);b.getRandomValues(m);return Number("0."+m[0])};var c=_.Ee("random/maxObserveMousemove");null==c&&(c=-1);var d=0,e=Math.random(),f=1,h=1E6*(screen.width*screen.width+screen.height),k=function(m){m=m||window.event;var n=m.screenX+m.clientX<<16;n+=m.screenY+m.clientY;n*=(new Date).getTime()%1E6;f=f*n%h;0<c&&++d==c&&_.He.j2(k)};
0!=c&&_.He.nV(k);var l=a(document.cookie+"|"+document.location+"|"+(new Date).getTime()+"|"+e);return function(){var m=f;m+=parseInt(l.substr(0,20),16);l=a(l);return m/(h+Math.pow(16,20))}}();
_.D("shindig.random",_.qg);

_.Wa.Ja={};_.Wa.Ja.Lh={};_.Wa.Ja.Lh.EV=function(a){try{return!!a.document}catch(b){}return!1};_.Wa.Ja.Lh.OM=function(a){var b=a.parent;return a!=b&&_.Wa.Ja.Lh.EV(b)?_.Wa.Ja.Lh.OM(b):a};_.Wa.Ja.Lh.Pda=function(a){var b=a.userAgent||"";a=a.product||"";return 0!=b.indexOf("Opera")&&-1==b.indexOf("WebKit")&&"Gecko"==a&&0<b.indexOf("rv:1.")};
_.Wa.Ja.Lh.Hs=function(a,b,c){for(var d=[],e=2,f=arguments.length;e<f;++e)d.push(arguments[e]);return function(){for(var h=d.slice(),k=0,l=arguments.length;k<l;++k)h.push(arguments[k]);return b.apply(a,h)}};

var Mp,Np,Op,Pp,Sp,Tp,Up,Vp,Wp,Xp,Yp;Mp=function(){_.Bf.register("_noop_echo",function(){this.callback(_.Wa.jY(_.Wa.Kk[this.f]))})};Np=function(){window.setTimeout(function(){_.Bf.call("..","_noop_echo",_.Wa.E1)},0)};Op=function(a,b,c){var d=function(e){var f=Array.prototype.slice.call(arguments,0),h=f[f.length-1];if("function"===typeof h){var k=h;f.pop()}f.unshift(b,a,k,c);_.Bf.call.apply(_.Bf,f)};d._iframe_wrapped_rpc_=!0;return d};
Pp=function(a){_.Wa.Ai[a]||(_.Wa.Ai[a]={},_.Bf.register(a,function(b,c){var d=this.f;if(!("string"!=typeof b||b in{}||d in{})){var e=this.callback,f=_.Wa.Ai[a][d],h;f&&Object.hasOwnProperty.call(f,b)?h=f[b]:Object.hasOwnProperty.call(_.Wa.Mo,a)&&(h=_.Wa.Mo[a]);if(h)return d=Array.prototype.slice.call(arguments,1),h._iframe_wrapped_rpc_&&e&&d.push(e),h.apply({},d)}_.wf.error(['Unregistered call in window "',window.name,'" for method "',a,'", via proxyId "',b,'" from frame "',d,'".'].join(""));return null}));
return _.Wa.Ai[a]};_.Qp=function(){var a={};var b=window.location.href;var c=b.indexOf("?"),d=b.indexOf("#");b=(-1===d?b.substr(c+1):[b.substr(c+1,d-c-1),"&",b.substr(d+1)].join("")).split("&");c=window.decodeURIComponent?decodeURIComponent:unescape;d=0;for(var e=b.length;d<e;++d){var f=b[d].indexOf("=");if(-1!==f){var h=b[d].substring(0,f);f=b[d].substring(f+1);f=f.replace(/\+/g," ");try{a[h]=c(f)}catch(k){}}}return a};_.Rp=function(){return _.fe.location.origin||_.fe.location.protocol+"//"+_.fe.location.host};
Sp=function(a){_.ve.h=a};Tp=function(a){_.ve.bsh=a};Up=function(a){var b=window.___jsl=window.___jsl||{};b[a]=b[a]||[];return b[a]};Vp=function(a){return"object"===typeof a&&/\[native code\]/.test(a.push)};
Wp=function(a,b,c){if(b&&"object"===typeof b)for(var d in b)!Object.prototype.hasOwnProperty.call(b,d)||c&&"___goc"===d&&"undefined"===typeof b[d]||(a[d]&&b[d]&&"object"===typeof a[d]&&"object"===typeof b[d]&&!Vp(a[d])&&!Vp(b[d])?Wp(a[d],b[d]):b[d]&&"object"===typeof b[d]?(a[d]=Vp(b[d])?[]:{},Wp(a[d],b[d])):a[d]=b[d])};
Xp=function(a){if(a&&!/^\s+$/.test(a)){for(;0==a.charCodeAt(a.length-1);)a=a.substring(0,a.length-1);try{var b=window.JSON.parse(a)}catch(c){}if("object"===typeof b)return b;try{b=(new Function("return ("+a+"\n)"))()}catch(c){}if("object"===typeof b)return b;try{b=(new Function("return ({"+a+"\n})"))()}catch(c){}return"object"===typeof b?b:{}}};
Yp=function(a,b){var c={___goc:void 0};a.length&&a[a.length-1]&&Object.hasOwnProperty.call(a[a.length-1],"___goc")&&"undefined"===typeof a[a.length-1].___goc&&(c=a.pop());Wp(c,b);a.push(c)};
_.Zp=function(a,b){var c;if("string"===typeof a){var d=c={};a=a.split("/");for(var e=0,f=a.length;e<f-1;++e){var h={};d=d[a[e]]=h}d[a[e]]=b}else c=a;_.vh(!0);d=window.___gcfg;b=Up("cu");a=window.___gu;d&&d!==a&&(Yp(b,d),window.___gu=d);d=Up("cu");e=document.scripts||document.getElementsByTagName("script")||[];a=[];f=[];f.push.apply(f,Up("us"));for(h=0;h<e.length;++h)for(var k=e[h],l=0;l<f.length;++l)k.src&&0==k.src.indexOf(f[l])&&a.push(k);0==a.length&&0<e.length&&e[e.length-1].src&&a.push(e[e.length-
1]);for(e=0;e<a.length;++e)a[e].getAttribute("gapi_processed")||(a[e].setAttribute("gapi_processed",!0),(f=a[e])?(h=f.nodeType,f=3==h||4==h?f.nodeValue:f.textContent||""):f=void 0,(f=Xp(f))&&d.push(f));c&&Yp(b,c);a=Up("cd");c=0;for(d=a.length;c<d;++c)Wp(_.vh(),a[c],!0);a=Up("ci");c=0;for(d=a.length;c<d;++c)Wp(_.vh(),a[c],!0);c=0;for(d=b.length;c<d;++c)Wp(_.vh(),b[c],!0)};var $p,aq=window.location.href,bq=aq.indexOf("?"),cq=aq.indexOf("#");
$p=(-1===cq?aq.substr(bq+1):[aq.substr(bq+1,cq-bq-1),"&",aq.substr(cq+1)].join("")).split("&");for(var dq=window.decodeURIComponent?decodeURIComponent:unescape,eq=0,fq=$p.length;eq<fq;++eq){var gq=$p[eq].indexOf("=");if(-1!==gq){var hq=$p[eq].substring(gq+1);hq=hq.replace(/\+/g," ");try{dq(hq)}catch(a){}}}
;if(window.ToolbarApi)iq=window.ToolbarApi,iq.Pa=window.ToolbarApi.getInstance,iq.prototype=window.ToolbarApi.prototype,_.g=iq.prototype,_.g.openWindow=iq.prototype.openWindow,_.g.AK=iq.prototype.closeWindow,_.g.$Q=iq.prototype.setOnCloseHandler,_.g.lK=iq.prototype.canClosePopup,_.g.mQ=iq.prototype.resizeWindow;else{var iq=function(){};iq.Pa=function(){!jq&&window.external&&window.external.GTB_IsToolbar&&(jq=new iq);return jq};_.g=iq.prototype;_.g.openWindow=function(a){return window.external.GTB_OpenPopup&&
window.external.GTB_OpenPopup(a)};_.g.AK=function(a){window.external.GTB_ClosePopupWindow&&window.external.GTB_ClosePopupWindow(a)};_.g.$Q=function(a,b){window.external.GTB_SetOnCloseHandler&&window.external.GTB_SetOnCloseHandler(a,b)};_.g.lK=function(a){return window.external.GTB_CanClosePopup&&window.external.GTB_CanClosePopup(a)};_.g.mQ=function(a,b){return window.external.GTB_ResizeWindow&&window.external.GTB_ResizeWindow(a,b)};var jq=null;window.ToolbarApi=iq;window.ToolbarApi.getInstance=iq.Pa}
;var kq=/^[-_.0-9A-Za-z]+$/,lq={open:"open",onready:"ready",close:"close",onresize:"resize",onOpen:"open",onReady:"ready",onClose:"close",onResize:"resize",onRenderStart:"renderstart"},mq={onBeforeParentOpen:"beforeparentopen"},nq={onOpen:function(a){var b=a.kc();a.yg(b.container||b.element);return a},onClose:function(a){a.remove()}},oq=function(){_.Wa.GN++;return["I",_.Wa.GN,"_",(new Date).getTime()].join("")},pq,qq,rq,uq,vq,wq,xq,zq,yq;_.Wa.om=function(a){var b=_.ke();_.me(_.rl,b);_.me(a,b);return b};
pq=function(a){return a instanceof Array?a.join(","):a instanceof Object?_.sf(a):a};qq=function(a){var b=_.wh("googleapis.config/elog");if(b)try{b(a)}catch(c){}};rq=function(a){a&&a.match(kq)&&_.Zp("googleapis.config/gcv",a)};_.sq=function(a,b){b=b||{};for(var c in a)a.hasOwnProperty(c)&&(b[c]=a[c]);return b};
_.tq=function(a,b,c,d,e){var f=[],h;for(h in a)if(a.hasOwnProperty(h)){var k=b,l=c,m=a[h],n=d,t=Pp(h);t[k]=t[k]||{};n=_.Wa.Ja.Lh.Hs(n,m);m._iframe_wrapped_rpc_&&(n._iframe_wrapped_rpc_=!0);t[k][l]=n;f.push(h)}if(e)for(h in _.Wa.Mo)_.Wa.Mo.hasOwnProperty(h)&&f.push(h);return f.join(",")};uq=function(a,b,c){var d={};if(a&&a._methods){a=a._methods.split(",");for(var e=0;e<a.length;e++){var f=a[e];d[f]=Op(f,b,c)}}return d};
vq=function(a){if(a&&a.disableMultiLevelParentRelay)a=!1;else{var b;if(b=_.yn&&_.yn._open&&"inline"!=a.style&&!0!==a.inline)a=a.container,b=!(a&&("string"==typeof a&&document.getElementById(a)||document==(a.ownerDocument||a.document)));a=b}return a};wq=function(a,b){var c={};b=b.params||{};for(var d in a)"#"==d.charAt(0)&&(c[d.substring(1)]=a[d]),0==d.indexOf("fr-")&&(c[d.substring(3)]=a[d]),"#"==b[d]&&(c[d]=a[d]);for(var e in c)delete a["fr-"+e],delete a["#"+e],delete a[e];return c};
xq=function(a){if(":"==a.charAt(0)){var b=_.wh("iframes/"+a.substring(1));a={};_.me(b,a);(b=a.url)&&(a.url=_.Dl(b));a.params||(a.params={});return a}return{url:_.Dl(a)}};zq=function(a){function b(){}b.prototype=yq.prototype;a.prototype=new b};
yq=function(a,b,c,d,e,f,h,k){this.config=xq(a);this.openParams=this.oy=b||{};this.params=c||{};this.methods=d;this.Uz=!1;Aq(this,b.style);this.callbacks={};Bq(this,function(){var l;(l=this.oy.style)&&_.Wa.St[l]?l=_.Wa.St[l]:l?(_.wf.warn(['Missing handler for style "',l,'". Continuing with default handler.'].join("")),l=null):l=nq;if(l){if("function"===typeof l)var m=l(this);else{var n={};for(m in l){var t=l[m];n[m]="function"===typeof t?_.Wa.Ja.Lh.Hs(l,t,this):t}m=n}for(var p in e)l=m[p],"function"===
typeof l&&Cq(this,e[p],_.Wa.Ja.Lh.Hs(m,l))}f&&Cq(this,"close",f)});this.xj=this.ac=h;this.bF=(k||[]).slice();h&&this.bF.unshift(h.getId())};yq.prototype.kc=function(){return this.oy};yq.prototype.QC=function(){return this.params};yq.prototype.ww=function(){return this.methods};yq.prototype.Mc=function(){return this.xj};
var Aq=function(a,b){a.Uz||((b=b&&!_.Wa.St[b]&&_.Wa.KB[b])?(a.JB=[],b(function(){a.Uz=!0;for(var c=0,d=a.JB.length;c<d;++c)a.JB[c].call(a)})):a.Uz=!0)},Bq=function(a,b){a.Uz?b.call(a):a.JB.push(b)};yq.prototype.Dd=function(a,b){Bq(this,function(){Cq(this,a,b)})};var Cq=function(a,b,c){a.callbacks[b]=a.callbacks[b]||[];a.callbacks[b].push(c)};yq.prototype.jn=function(a,b){Bq(this,function(){var c=this.callbacks[a];if(c)for(var d=0,e=c.length;d<e;++d)if(c[d]===b){c.splice(d,1);break}})};
yq.prototype.jh=function(a,b){var c=this.callbacks[a];if(c)for(var d=Array.prototype.slice.call(arguments,1),e=0,f=c.length;e<f;++e)try{var h=c[e].apply({},d)}catch(k){_.wf.error(['Exception when calling callback "',a,'" with exception "',k.name,": ",k.message,'".'].join("")),qq(k)}return h};var Dq=function(a){return"number"==typeof a?{value:a,rC:a+"px"}:"100%"==a?{value:100,rC:"100%",iO:!0}:null};yq.prototype.send=function(a,b,c){_.Wa.zQ(this,a,b,c)};
yq.prototype.register=function(a,b){var c=this;c.Dd(a,function(d){b.call(c,d)})};var Eq=function(a,b,c,d,e,f,h){var k=this;yq.call(this,a,b,c,d,lq,e,f,h);this.id=b.id||oq();this.mt=b.rpctoken&&String(b.rpctoken)||Math.round(1E9*_.Xh());this.XZ=wq(this.params,this.config);this.eC={};Bq(this,function(){k.jh("open");_.sq(k.eC,k)})};zq(Eq);_.g=Eq.prototype;
_.g.yg=function(a,b){if(!this.config.url)return _.wf.error("Cannot open iframe, empty URL."),this;var c=this.id;_.Wa.Kk[c]=this;var d=_.sq(this.methods);d._ready=this.ny;d._close=this.close;d._open=this.yP;d._resizeMe=this.nQ;d._renderstart=this.qP;var e=this.XZ;this.mt&&(e.rpctoken=this.mt);e._methods=_.tq(d,c,"",this,!0);this.el=a="string"===typeof a?document.getElementById(a):a;d={id:c};if(b){d.attributes=b;var f=b.style;if("string"===typeof f){if(f){var h=[];f=f.split(";");for(var k=0,l=f.length;k<
l;++k){var m=f[k];if(0!=m.length||k+1!=l)m=m.split(":"),2==m.length&&m[0].match(/^[ a-zA-Z_-]+$/)&&m[1].match(/^[ +.%0-9a-zA-Z_-]+$/)?h.push(m.join(":")):_.wf.error(['Iframe style "',f[k],'" not allowed.'].join(""))}h=h.join(";")}else h="";b.style=h}}this.kc().allowPost&&(d.allowPost=!0);this.kc().forcePost&&(d.forcePost=!0);d.queryParams=this.params;d.fragmentParams=e;d.paramsSerializer=pq;this.lh=_.Fl(this.config.url,a,d);a=this.lh.getAttribute("data-postorigin")||this.lh.src;_.Wa.Kk[c]=this;_.Bf.rz(this.id,
this.mt);_.Bf.Ii(this.id,a);return this};_.g.Wg=function(a,b){this.eC[a]=b};_.g.getId=function(){return this.id};_.g.getIframeEl=function(){return this.lh};_.g.getSiteEl=function(){return this.el};_.g.setSiteEl=function(a){this.el=a};_.g.ny=function(a){var b=uq(a,this.id,"");this.xj&&"function"==typeof this.methods._ready&&(a._methods=_.tq(b,this.xj.getId(),this.id,this,!1),this.methods._ready(a));_.sq(a,this);_.sq(b,this);this.jh("ready",a)};_.g.qP=function(a){this.jh("renderstart",a)};
_.g.close=function(a){a=this.jh("close",a);delete _.Wa.Kk[this.id];return a};_.g.remove=function(){var a=document.getElementById(this.id);a&&a.parentNode&&a.parentNode.removeChild(a)};
_.g.yP=function(a){var b=uq(a.params,this.id,a.proxyId);delete a.params._methods;"_parent"==a.openParams.anchor&&(a.openParams.anchor=this.el);if(vq(a.openParams))new Fq(a.url,a.openParams,a.params,b,b._onclose,this,a.openedByProxyChain);else{var c=new Eq(a.url,a.openParams,a.params,b,b._onclose,this,a.openedByProxyChain),d=this;Bq(c,function(){var e={childId:c.getId()},f=c.eC;f._toclose=c.close;e._methods=_.tq(f,d.id,c.id,c,!1);b._onopen(e)})}};
_.g.nQ=function(a){if(void 0===this.jh("resize",a)&&this.lh){var b=Dq(a.width);null!=b&&(this.lh.style.width=b.rC);a=Dq(a.height);null!=a&&(this.lh.style.height=a.rC);this.lh.parentElement&&(null!=b&&b.iO||null!=a&&a.iO)&&(this.lh.parentElement.style.display="block")}};
var Fq=function(a,b,c,d,e,f,h){var k=this;yq.call(this,a,b,c,d,mq,e,f,h);this.url=a;this.Fn=null;this.vF=oq();Bq(this,function(){k.jh("beforeparentopen");var l=_.sq(k.methods);l._onopen=k.u1;l._ready=k.ny;l._onclose=k.s1;k.params._methods=_.tq(l,"..",k.vF,k,!0);l={};for(var m in k.params)l[m]=pq(k.params[m]);_.yn._open({url:k.config.url,openParams:k.oy,params:l,proxyId:k.vF,openedByProxyChain:k.bF})})};zq(Fq);Fq.prototype.uY=function(){return this.Fn};
Fq.prototype.u1=function(a){this.Fn=a.childId;var b=uq(a,"..",this.Fn);_.sq(b,this);this.close=b._toclose;_.Wa.Kk[this.Fn]=this;this.xj&&this.methods._onopen&&(a._methods=_.tq(b,this.xj.getId(),this.Fn,this,!1),this.methods._onopen(a))};Fq.prototype.ny=function(a){var b=String(this.Fn),c=uq(a,"..",b);_.sq(a,this);_.sq(c,this);this.jh("ready",a);this.xj&&this.methods._ready&&(a._methods=_.tq(c,this.xj.getId(),b,this,!1),this.methods._ready(a))};
Fq.prototype.s1=function(a){if(this.xj&&this.methods._onclose)this.methods._onclose(a);else return a=this.jh("close",a),delete _.Wa.Kk[this.Fn],a};
var Gq=function(a,b,c,d,e,f,h){yq.call(this,a,b,c,d,mq,f,h);this.id=b.id||oq();this.V4=e;d._close=this.close;this.onClosed=this.jP;this.sS=0;Bq(this,function(){this.jh("beforeparentopen");var k=_.sq(this.methods);this.params._methods=_.tq(k,"..",this.vF,this,!0);k={};k.queryParams=this.params;a=_.wl(_.ge,this.config.url,this.id,k);var l=e.openWindow(a);this.canAutoClose=function(m){m(e.lK(l))};e.$Q(l,this);this.sS=l})};zq(Gq);
Gq.prototype.close=function(a){a=this.jh("close",a);this.V4.AK(this.sS);return a};Gq.prototype.jP=function(){this.jh("close")};_.yn.send=function(a,b,c){_.Wa.zQ(_.yn,a,b,c)};
(function(){function a(h){return _.Wa.St[h]}function b(h,k){_.Wa.St[h]=k}function c(h){h=h||{};"auto"===h.height&&(h.height=_.Tk());var k=window&&iq&&iq.Pa();k?k.mQ(h.width||0,h.height||0):_.yn&&_.yn._resizeMe&&_.yn._resizeMe(h)}function d(h){rq(h)}_.Wa.Kk={};_.Wa.St={};_.Wa.KB={};_.Wa.GN=0;_.Wa.Ai={};_.Wa.Mo={};_.Wa.zy=null;_.Wa.yy=[];_.Wa.E1=function(h){var k=!1;try{if(null!=h){var l=window.parent.frames[h.id];k=l.iframer.id==h.id&&l.iframes.openedId_(_.yn.id)}}catch(m){}try{_.Wa.zy={origin:this.origin,
referer:this.referer,claimedOpenerId:h&&h.id,claimedOpenerProxyChain:h&&h.proxyChain||[],sameOrigin:k};for(h=0;h<_.Wa.yy.length;++h)_.Wa.yy[h](_.Wa.zy);_.Wa.yy=[]}catch(m){qq(m)}};_.Wa.jY=function(h){var k=h&&h.xj,l=null;k&&(l={},l.id=k.getId(),l.proxyChain=h.bF);return l};Mp();if(window.parent!=window){var e=_.Qp();e.gcv&&rq(e.gcv);var f=e.jsh;f&&Sp(f);_.sq(uq(e,"..",""),_.yn);_.sq(e,_.yn);Np()}_.Wa.lb=a;_.Wa.vc=b;_.Wa.P3=d;_.Wa.resize=c;_.Wa.DX=function(h){return _.Wa.KB[h]};_.Wa.nG=function(h,
k){_.Wa.KB[h]=k};_.Wa.lQ=c;_.Wa.l4=d;_.Wa.Uw={};_.Wa.Uw.get=a;_.Wa.Uw.set=b;_.Wa.allow=function(h,k){Pp(h);_.Wa.Mo[h]=k||window[h]};_.Wa.Sca=function(h){delete _.Wa.Mo[h]};_.Wa.open=function(h,k,l,m,n,t){3==arguments.length?m={}:4==arguments.length&&"function"===typeof m&&(n=m,m={});var p="bubble"===k.style&&iq?iq.Pa():null;return p?new Gq(h,k,l,m,p,n,t):vq(k)?new Fq(h,k,l,m,n,t):new Eq(h,k,l,m,n,t)};_.Wa.close=function(h,k){_.yn&&_.yn._close&&_.yn._close(h,k)};_.Wa.ready=function(h,k,l){2==arguments.length&&
"function"===typeof k&&(l=k,k={});var m=h||{};"height"in m||(m.height=_.Tk());m._methods=_.tq(k||{},"..","",_.yn,!0);_.yn&&_.yn._ready&&_.yn._ready(m,l)};_.Wa.CM=function(h){_.Wa.zy?h(_.Wa.zy):_.Wa.yy.push(h)};_.Wa.w1=function(h){return!!_.Wa.Kk[h]};_.Wa.OX=function(){return["https://ssl.gstatic.com/gb/js/",_.wh("googleapis.config/gcv")].join("")};_.Wa.SP=function(h){var k={mouseover:1,mouseout:1};if(_.yn._event)for(var l=0;l<h.length;l++){var m=h[l];m in k&&document.addEventListener(m,function(n){_.yn._event({event:n.type,
timestamp:(new Date).getTime()})},!0)}};_.Wa.zQ=function(h,k,l,m){var n=this,t=[];void 0!==l&&t.push(l);m&&t.push(function(p){m.call(n,[p])});h[k]&&h[k].apply(h,t)};_.Wa.CROSS_ORIGIN_IFRAMES_FILTER=function(){return!0};_.Wa.BV=function(h,k,l){var m=Array.prototype.slice.call(arguments);_.Wa.CM(function(n){n.sameOrigin&&(m.unshift("/"+n.claimedOpenerId+"|"+window.location.protocol+"//"+window.location.host),_.Bf.call.apply(_.Bf,m))})};_.Wa.e2=function(h,k){_.Bf.register(h,k)};_.Wa.V3=Sp;_.Wa.EQ=Tp;
_.Wa.EO=qq;_.Wa.HN=_.yn})();
_.D("iframes.allow",_.Wa.allow);_.D("iframes.callSiblingOpener",_.Wa.BV);_.D("iframes.registerForOpenedSibling",_.Wa.e2);_.D("iframes.close",_.Wa.close);_.D("iframes.getGoogleConnectJsUri",_.Wa.OX);_.D("iframes.getHandler",_.Wa.lb);_.D("iframes.getDeferredHandler",_.Wa.DX);_.D("iframes.getParentInfo",_.Wa.CM);_.D("iframes.iframer",_.Wa.HN);_.D("iframes.open",_.Wa.open);_.D("iframes.openedId_",_.Wa.w1);_.D("iframes.propagate",_.Wa.SP);_.D("iframes.ready",_.Wa.ready);_.D("iframes.resize",_.Wa.resize);
_.D("iframes.setGoogleConnectJsVersion",_.Wa.P3);_.D("iframes.setBootstrapHint",_.Wa.EQ);_.D("iframes.setJsHint",_.Wa.V3);_.D("iframes.setHandler",_.Wa.vc);_.D("iframes.setDeferredHandler",_.Wa.nG);_.D("IframeBase",yq);_.D("IframeBase.prototype.addCallback",yq.prototype.Dd);_.D("IframeBase.prototype.getMethods",yq.prototype.ww);_.D("IframeBase.prototype.getOpenerIframe",yq.prototype.Mc);_.D("IframeBase.prototype.getOpenParams",yq.prototype.kc);_.D("IframeBase.prototype.getParams",yq.prototype.QC);
_.D("IframeBase.prototype.removeCallback",yq.prototype.jn);_.D("Iframe",Eq);_.D("Iframe.prototype.close",Eq.prototype.close);_.D("Iframe.prototype.exposeMethod",Eq.prototype.Wg);_.D("Iframe.prototype.getId",Eq.prototype.getId);_.D("Iframe.prototype.getIframeEl",Eq.prototype.getIframeEl);_.D("Iframe.prototype.getSiteEl",Eq.prototype.getSiteEl);_.D("Iframe.prototype.openInto",Eq.prototype.yg);_.D("Iframe.prototype.remove",Eq.prototype.remove);_.D("Iframe.prototype.setSiteEl",Eq.prototype.setSiteEl);
_.D("Iframe.prototype.addCallback",Eq.prototype.Dd);_.D("Iframe.prototype.getMethods",Eq.prototype.ww);_.D("Iframe.prototype.getOpenerIframe",Eq.prototype.Mc);_.D("Iframe.prototype.getOpenParams",Eq.prototype.kc);_.D("Iframe.prototype.getParams",Eq.prototype.QC);_.D("Iframe.prototype.removeCallback",Eq.prototype.jn);_.D("IframeProxy",Fq);_.D("IframeProxy.prototype.getTargetIframeId",Fq.prototype.uY);_.D("IframeProxy.prototype.addCallback",Fq.prototype.Dd);_.D("IframeProxy.prototype.getMethods",Fq.prototype.ww);
_.D("IframeProxy.prototype.getOpenerIframe",Fq.prototype.Mc);_.D("IframeProxy.prototype.getOpenParams",Fq.prototype.kc);_.D("IframeProxy.prototype.getParams",Fq.prototype.QC);_.D("IframeProxy.prototype.removeCallback",Fq.prototype.jn);_.D("IframeWindow",Gq);_.D("IframeWindow.prototype.close",Gq.prototype.close);_.D("IframeWindow.prototype.onClosed",Gq.prototype.jP);_.D("iframes.util.getTopMostAccessibleWindow",_.Wa.Ja.Lh.OM);_.D("iframes.handlers.get",_.Wa.Uw.get);_.D("iframes.handlers.set",_.Wa.Uw.set);
_.D("iframes.resizeMe",_.Wa.lQ);_.D("iframes.setVersionOverride",_.Wa.l4);_.D("iframes.CROSS_ORIGIN_IFRAMES_FILTER",_.Wa.CROSS_ORIGIN_IFRAMES_FILTER);_.D("IframeBase.prototype.send",yq.prototype.send);_.D("IframeBase.prototype.register",yq.prototype.register);_.D("Iframe.prototype.send",Eq.prototype.send);_.D("Iframe.prototype.register",Eq.prototype.register);_.D("IframeProxy.prototype.send",Fq.prototype.send);_.D("IframeProxy.prototype.register",Fq.prototype.register);
_.D("IframeWindow.prototype.send",Gq.prototype.send);_.D("IframeWindow.prototype.register",Gq.prototype.register);_.D("iframes.iframer.send",_.Wa.HN.send);

var gt=_.Wa.vc,ht={open:function(a){var b=_.sn(a.kc());return a.yg(b,{style:_.tn(b)})},attach:function(a,b){var c=_.sn(a.kc()),d=b.id,e=b.getAttribute("data-postorigin")||b.src,f=/#(?:.*&)?rpctoken=(\d+)/.exec(e);f=f&&f[1];a.id=d;a.mt=f;a.el=c;a.lh=b;_.Wa.Kk[d]=a;b=_.sq(a.methods);b._ready=a.ny;b._close=a.close;b._open=a.yP;b._resizeMe=a.nQ;b._renderstart=a.qP;_.tq(b,d,"",a,!0);_.Bf.rz(a.id,a.mt);_.Bf.Ii(a.id,e);c=_.Wa.om({style:_.tn(c)});for(var h in c)Object.prototype.hasOwnProperty.call(c,h)&&
("style"==h?a.lh.style.cssText=c[h]:a.lh.setAttribute(h,c[h]))}};ht.onready=_.un;ht.onRenderStart=_.un;ht.close=_.vn;gt("inline",ht);

/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
_.Zg=function(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);255<e&&(b[c++]=e&255,e>>=8);b[c++]=e}return b};
var $g,ah,ch;$g={};ah=null;_.bh=_.gd||_.hd||!_.Yg&&!_.dd&&"function"==typeof _.u.atob;_.dh=function(){};
_.eh=function(a,b){function c(l){for(;d<a.length;){var m=a.charAt(d++),n=ah[m];if(null!=n)return n;if(!_.ic(m))throw Error("C`"+m);}return l}ch();for(var d=0;;){var e=c(-1),f=c(0),h=c(64),k=c(64);if(64===k&&-1===e)break;b(e<<2|f>>4);64!=h&&(b(f<<4&240|h>>2),64!=k&&b(h<<6&192|k))}};
ch=function(){if(!ah){ah={};for(var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),b=["+/=","+/","-_=","-_.","-_"],c=0;5>c;c++){var d=a.concat(b[c].split(""));$g[c]=d;for(var e=0;e<d.length;e++){var f=d[e];void 0===ah[f]&&(ah[f]=e)}}}};

_.Bh={};
/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var Dh;_.Ch=function(a){this.ob=a||{cookie:""}};_.g=_.Ch.prototype;_.g.isEnabled=function(){if(!_.u.navigator.cookieEnabled)return!1;if(!this.isEmpty())return!0;this.set("TESTCOOKIESENABLED","1",{wE:60});if("1"!==this.get("TESTCOOKIESENABLED"))return!1;this.remove("TESTCOOKIESENABLED");return!0};
_.g.set=function(){}