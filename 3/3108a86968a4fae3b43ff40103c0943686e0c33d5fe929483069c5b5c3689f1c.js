(function(){function a(){var b;
var c=function(){var g=$(window).width();
var f=(g<=600)?".ctx-animated.full":".ctx-animated";
$(f).each(function(){var h=$(this);
if((h.offset().top-$(window).scrollTop())<($(window).height()-100)){h.attr("class",h.attr("data-animation"))
}})
};
var d=function(){$(window).on("debouncedresize",function(){c()
});
$(window).scroll($.throttle(50,function(){c()
}))
};
this.init=function(){d();
c()
}
}$(document).ready(function(){if($(".ctx-animated").length>0&&!$("html").hasClass("aem-author")){var b=new a();
b.init()
}})
})($);
(function(a){a.fn.visible=function(j){var h=a(this),f=a("body"),d=f.scrollTop(),g=d+f.height(),k=h.offset().top,i=k+h.height(),c=j===true?i:k,b=j===true?k:i;
return((b<=g)&&(c>=d))
}
})(jQuery);
(function(d){var b=d.event,a,c;
a=b.special.debouncedresize={setup:function(){d(this).on("resize",a.handler)
},teardown:function(){d(this).off("resize",a.handler)
},handler:function(j,f){var i=this,h=arguments,g=function(){j.type="debouncedresize";
b.dispatch.apply(i,h)
};
if(c){clearTimeout(c)
}f?g():c=setTimeout(g,a.threshold)
},threshold:150}
})($CQ);
/*! VelocityJS.org (1.1.0). (C) 2014 Julian Shapiro. MIT @license: en.wikipedia.org/wiki/MIT_License */
;
/*! VelocityJS.org jQuery Shim (1.0.1). (C) 2014 The jQuery Foundation. MIT @license: en.wikipedia.org/wiki/MIT_License. */
;
!function(h){function k(m){var a=m.length,i=f.type(m);
return"function"===i||f.isWindow(m)?!1:1===m.nodeType&&a?!0:"array"===i||0===a||"number"==typeof a&&a>0&&a-1 in m
}if(!h.jQuery){var f=function(i,a){return new f.fn.init(i,a)
};
f.isWindow=function(a){return null!=a&&a==a.window
},f.type=function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?j[c.call(a)]||"object":typeof a
},f.isArray=Array.isArray||function(a){return"array"===f.type(a)
},f.isPlainObject=function(m){var a;
if(!m||"object"!==f.type(m)||m.nodeType||f.isWindow(m)){return !1
}try{if(m.constructor&&!d.call(m,"constructor")&&!d.call(m.constructor.prototype,"isPrototypeOf")){return !1
}}catch(i){return !1
}for(a in m){}return void 0===a||d.call(m,a)
},f.each=function(u,t,m){var w,v=0,p=u.length,q=k(u);
if(m){if(q){for(;
p>v&&(w=t.apply(u[v],m),w!==!1);
v++){}}else{for(v in u){if(w=t.apply(u[v],m),w===!1){break
}}}}else{if(q){for(;
p>v&&(w=t.call(u[v],v,u[v]),w!==!1);
v++){}}else{for(v in u){if(w=t.call(u[v],v,u[v]),w===!1){break
}}}}return u
},f.data=function(p,m,i){if(void 0===i){var r=p[f.expando],q=r&&b[r];
if(void 0===m){return q
}if(q&&m in q){return q[m]
}}else{if(void 0!==m){var r=p[f.expando]||(p[f.expando]=++f.uuid);
return b[r]=b[r]||{},b[r][m]=i,i
}}},f.removeData=function(o,m){var i=o[f.expando],p=i&&b[i];
p&&f.each(m,function(n,a){delete p[a]
})
},f.extend=function(){var x,A,m,y,q,p,w=arguments[0]||{},B=1,v=arguments.length,z=!1;
for("boolean"==typeof w&&(z=w,w=arguments[B]||{},B++),"object"!=typeof w&&"function"!==f.type(w)&&(w={}),B===v&&(w=this,B--);
v>B;
B++){if(null!=(q=arguments[B])){for(y in q){x=w[y],m=q[y],w!==m&&(z&&m&&(f.isPlainObject(m)||(A=f.isArray(m)))?(A?(A=!1,p=x&&f.isArray(x)?x:[]):p=x&&f.isPlainObject(x)?x:{},w[y]=f.extend(z,p,m)):void 0!==m&&(w[y]=m))
}}}return w
},f.queue=function(p,m,i){function s(t,o){var n=o||[];
return null!=t&&(k(Object(t))?!function(x,v){for(var w=+v.length,u=0,y=x.length;
w>u;
){x[y++]=v[u++]
}if(w!==w){for(;
void 0!==v[u];
){x[y++]=v[u++]
}}return x.length=y,x
}(n,"string"==typeof t?[t]:t):[].push.call(n,t)),n
}if(p){m=(m||"fx")+"queue";
var q=f.data(p,m);
return i?(!q||f.isArray(i)?q=f.data(p,m,s(i)):q.push(i),q):q||[]
}},f.dequeue=function(i,a){f.each(i.nodeType?[i]:i,function(p,o){a=a||"fx";
var m=f.queue(o,a),q=m.shift();
"inprogress"===q&&(q=m.shift()),q&&("fx"===a&&m.unshift("inprogress"),q.call(o,function(){f.dequeue(o,a)
}))
})
},f.fn=f.prototype={init:function(a){if(a.nodeType){return this[0]=a,this
}throw new Error("Not a DOM node.")
},offset:function(){var a=this[0].getBoundingClientRect?this[0].getBoundingClientRect():{top:0,left:0};
return{top:a.top+(h.pageYOffset||document.scrollTop||0)-(document.clientTop||0),left:a.left+(h.pageXOffset||document.scrollLeft||0)-(document.clientLeft||0)}
},position:function(){function o(){for(var a=this.offsetParent||document;
a&&"html"===!a.nodeType.toLowerCase&&"static"===a.style.position;
){a=a.offsetParent
}return a||document
}var m=this[0],o=o.apply(m),n=this.offset(),i=/^(?:body|html)$/i.test(o.nodeName)?{top:0,left:0}:f(o).offset();
return n.top-=parseFloat(m.style.marginTop)||0,n.left-=parseFloat(m.style.marginLeft)||0,o.style&&(i.top+=parseFloat(o.style.borderTopWidth)||0,i.left+=parseFloat(o.style.borderLeftWidth)||0),{top:n.top-i.top,left:n.left-i.left}
}};
var b={};
f.expando="velocity"+(new Date).getTime(),f.uuid=0;
for(var j={},d=j.hasOwnProperty,c=j.toString,g="Boolean Number String Function Array Date RegExp Object Error".split(" "),l=0;
l<g.length;
l++){j["[object "+g[l]+"]"]=g[l].toLowerCase()
}f.fn.init.prototype=f.fn,h.Velocity={Utilities:f}
}}(window),function(a){"object"==typeof module&&"object"==typeof module.exports?module.exports=a():"function"==typeof define&&define.amd?define(a):a()
}(function(){return function(O,C,E,U){function H(f){for(var c=-1,d=f?f.length:0,b=[];
++c<d;
){var g=f[c];
g&&b.push(g)
}return b
}function G(a){return M.isWrapped(a)?a=[].slice.call(a):M.isNode(a)&&(a=[a]),a
}function K(b){var a=k.data(b,"velocity");
return null===a?U:a
}function D(a){return function(b){return Math.round(b*a)*(1/a)
}
}function J(aq,ag,av,aj){function ai(b,a){return 1-3*a+3*b
}function am(b,a){return 3*a-6*b
}function ae(a){return 3*a
}function al(c,a,b){return((ai(a,b)*c+am(a,b))*c+ae(a))*c
}function ad(c,a,b){return 3*ai(a,b)*c*c+2*am(a,b)*c+ae(a)
}function at(b,c){for(var f=0;
ak>f;
++f){var d=ad(c,aq,av);
if(0===d){return c
}var a=al(c,aq,av)-b;
c-=a/d
}return c
}function ah(){for(var a=0;
au>a;
++a){ab[a]=al(a*aa,aq,av)
}}function ap(b,d,g){var f,a,c=0;
do{a=d+(g-d)/2,f=al(a,aq,av)-b,f>0?g=a:d=a
}while(Math.abs(f)>an&&++c<ac);
return a
}function ar(c){for(var f=0,h=1,g=au-1;
h!=g&&ab[h]<=c;
++h){f+=aa
}--h;
var b=(c-ab[h])/(ab[h+1]-ab[h]),d=f+b*aa,a=ad(d,aq,av);
return a>=Z?at(c,d):0==a?d:ap(c,f,f+aa)
}function ao(){t=!0,(aq!=ag||av!=aj)&&ah()
}var ak=4,Z=0.001,an=1e-7,ac=10,au=11,aa=1/(au-1),X="Float32Array" in C;
if(4!==arguments.length){return !1
}for(var Y=0;
4>Y;
++Y){if("number"!=typeof arguments[Y]||isNaN(arguments[Y])||!isFinite(arguments[Y])){return !1
}}aq=Math.min(aq,1),av=Math.min(av,1),aq=Math.max(aq,0),av=Math.max(av,0);
var ab=X?new Float32Array(au):new Array(au),t=!1,af=function(a){return t||ao(),aq===ag&&av===aj?a:0===a?0:1===a?1:al(ar(a),ag,aj)
};
af.getControlPoints=function(){return[{x:aq,y:ag},{x:av,y:aj}]
};
var W="generateBezier("+[aq,ag,av,aj]+")";
return af.toString=function(){return W
},af
}function B(c,a){var b=c;
return M.isString(c)?A.Easings[c]||(b=!1):b=M.isArray(c)&&1===c.length?D.apply(null,c):M.isArray(c)&&2===c.length?T.apply(null,c.concat([a])):M.isArray(c)&&4===c.length?J.apply(null,c):!1,b===!1&&(b=A.Easings[A.defaults.easing]?A.defaults.easing:L),b
}function R(ai){if(ai){for(var W=(new Date).getTime(),Z=0,ac=A.State.calls.length;
ac>Z;
Z++){if(A.State.calls[Z]){var ab=A.State.calls[Z],X=ab[0],ae=ab[2],x=ab[3],ah=!!x;
x||(x=A.State.calls[Z][3]=W-16);
for(var aj=Math.min((W-x)/ae.duration,1),ad=0,i=X.length;
i>ad;
ad++){var ag=X[ad],ak=ag.element;
if(K(ak)){var g=!1;
if(ae.display!==U&&null!==ae.display&&"none"!==ae.display){if("flex"===ae.display){var p=["-webkit-box","-moz-box","-ms-flexbox","-webkit-flex"];
k.each(p,function(d,b){z.setPropertyValue(ak,"display",b)
})
}z.setPropertyValue(ak,"display",ae.display)
}ae.visibility!==U&&"hidden"!==ae.visibility&&z.setPropertyValue(ak,"visibility",ae.visibility);
for(var a in ag){if("element"!==a){var Y=ag[a],c,af=M.isString(Y.easing)?A.Easings[Y.easing]:Y.easing;
if(1===aj){c=Y.endValue
}else{if(c=Y.startValue+(Y.endValue-Y.startValue)*af(aj),!ah&&c===Y.currentValue){continue
}}if(Y.currentValue=c,z.Hooks.registered[a]){var aa=z.Hooks.getRoot(a),v=K(ak).rootPropertyValueCache[aa];
v&&(Y.rootPropertyValue=v)
}var P=z.setPropertyValue(ak,a,Y.currentValue+(0===parseFloat(c)?"":Y.unitType),Y.rootPropertyValue,Y.scrollData);
z.Hooks.registered[a]&&(K(ak).rootPropertyValueCache[aa]=z.Normalizations.registered[aa]?z.Normalizations.registered[aa]("extract",null,P[1]):P[1]),"transform"===P[0]&&(g=!0)
}}ae.mobileHA&&K(ak).transformCache.translate3d===U&&(K(ak).transformCache.translate3d="(0px, 0px, 0px)",g=!0),g&&z.flushTransformCache(ak)
}}ae.display!==U&&"none"!==ae.display&&(A.State.calls[Z][2].display=!1),ae.visibility!==U&&"hidden"!==ae.visibility&&(A.State.calls[Z][2].visibility=!1),ae.progress&&ae.progress.call(ab[1],ab[1],aj,Math.max(0,x+ae.duration-W),x),1===aj&&F(Z)
}}}A.State.isTicking&&q(R)
}function F(S,Y){if(!A.State.calls[S]){return !1
}for(var a=A.State.calls[S][0],i=A.State.calls[S][1],h=A.State.calls[S][2],Z=A.State.calls[S][4],x=!1,X=0,W=a.length;
W>X;
X++){var b=a[X].element;
if(Y||h.loop||("none"===h.display&&z.setPropertyValue(b,"display",h.display),"hidden"===h.visibility&&z.setPropertyValue(b,"visibility",h.visibility)),h.loop!==!0&&(k.queue(b)[1]===U||!/\.velocityQueueEntryFlag/i.test(k.queue(b)[1]))&&K(b)){K(b).isAnimating=!1,K(b).rootPropertyValueCache={};
var P=!1;
k.each(z.Lists.transforms3D,function(f,c){var d=/^scale/.test(c)?1:0,g=K(b).transformCache[c];
K(b).transformCache[c]!==U&&new RegExp("^\\("+d+"[^.]").test(g)&&(P=!0,delete K(b).transformCache[c])
}),h.mobileHA&&(P=!0,delete K(b).transformCache.translate3d),P&&z.flushTransformCache(b),z.Values.removeClass(b,"velocity-animating")
}if(!Y&&h.complete&&!h.loop&&X===W-1){try{h.complete.call(i,i)
}catch(V){setTimeout(function(){throw V
},1)
}}Z&&h.loop!==!0&&Z(i),h.loop!==!0||Y||(k.each(K(b).tweensContainer,function(d,c){/^rotate/.test(d)&&360===parseFloat(c.endValue)&&(c.endValue=0,c.startValue=360)
}),A(b,"reverse",{loop:!0,delay:h.delay})),h.queue!==!1&&k.dequeue(b,h.queue)
}A.State.calls[S]=!1;
for(var y=0,v=A.State.calls.length;
v>y;
y++){if(A.State.calls[y]!==!1){x=!0;
break
}}x===!1&&(A.State.isTicking=!1,delete A.State.calls,A.State.calls=[])
}var N=function(){if(E.documentMode){return E.documentMode
}for(var b=7;
b>4;
b--){var a=E.createElement("div");
if(a.innerHTML="<!--[if IE "+b+"]><span></span><![endif]-->",a.getElementsByTagName("span").length){return a=null,b
}}return U
}(),Q=function(){var a=0;
return C.webkitRequestAnimationFrame||C.mozRequestAnimationFrame||function(c){var d=(new Date).getTime(),b;
return b=Math.max(0,16-(d-a)),a=d+b,setTimeout(function(){c(d+b)
},b)
}
}(),M={isString:function(a){return"string"==typeof a
},isArray:Array.isArray||function(a){return"[object Array]"===Object.prototype.toString.call(a)
},isFunction:function(a){return"[object Function]"===Object.prototype.toString.call(a)
},isNode:function(a){return a&&a.nodeType
},isNodeList:function(a){return"object"==typeof a&&/^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(a))&&a.length!==U&&(0===a.length||"object"==typeof a[0]&&a[0].nodeType>0)
},isWrapped:function(a){return a&&(a.jquery||C.Zepto&&C.Zepto.zepto.isZ(a))
},isSVG:function(a){return C.SVGElement&&a instanceof C.SVGElement
},isEmptyObject:function(b){for(var a in b){return !1
}return !0
}},k,I=!1;
if(O.fn&&O.fn.jquery?(k=O,I=!0):k=C.Velocity.Utilities,8>=N&&!I){throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.")
}if(7>=N){return void (jQuery.fn.velocity=jQuery.fn.animate)
}var w=400,L="swing",A={State:{isMobile:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),isAndroid:/Android/i.test(navigator.userAgent),isGingerbread:/Android 2\.3\.[3-7]/i.test(navigator.userAgent),isChrome:C.chrome,isFirefox:/Firefox/i.test(navigator.userAgent),prefixElement:E.createElement("div"),prefixMatches:{},scrollAnchor:null,scrollPropertyLeft:null,scrollPropertyTop:null,isTicking:!1,calls:[]},CSS:{},Utilities:k,Redirects:{},Easings:{},Promise:C.Promise,defaults:{queue:"",duration:w,easing:L,begin:U,complete:U,progress:U,display:U,visibility:U,loop:!1,delay:!1,mobileHA:!0,_cacheValues:!0},init:function(a){k.data(a,"velocity",{isSVG:M.isSVG(a),isAnimating:!1,computedStyle:null,tweensContainer:null,rootPropertyValueCache:{},transformCache:{}})
},hook:null,mock:!1,version:{major:1,minor:1,patch:0},debug:!1};
C.pageYOffset!==U?(A.State.scrollAnchor=C,A.State.scrollPropertyLeft="pageXOffset",A.State.scrollPropertyTop="pageYOffset"):(A.State.scrollAnchor=E.documentElement||E.body.parentNode||E.body,A.State.scrollPropertyLeft="scrollLeft",A.State.scrollPropertyTop="scrollTop");
var T=function(){function f(a){return -a.tension*a.x-a.friction*a.v
}function c(h,i,g){var l={x:h.x+g.dx*i,v:h.v+g.dv*i,tension:h.tension,friction:h.friction};
return{dx:l.v,dv:f(l)}
}function d(v,h){var y={dx:v.v,dv:f(v)},x=c(v,0.5*h,y),p=c(v,0.5*h,x),t=c(v,h,p),g=1/6*(y.dx+2*(x.dx+p.dx)+t.dx),m=1/6*(y.dv+2*(x.dv+p.dv)+t.dv);
return v.x=v.x+g*h,v.v=v.v+m*h,v
}return function b(x,S,h){var g={x:-1,v:0,tension:null,friction:null},r=[0],V=0,m=0.0001,P=0.016,y,a,v;
for(x=parseFloat(x)||500,S=parseFloat(S)||20,h=h||null,g.tension=x,g.friction=S,y=null!==h,y?(V=b(x,S),a=V/h*P):a=P;
;
){if(v=d(v||g,a),r.push(1+v.x),V+=16,!(Math.abs(v.x)>m&&Math.abs(v.v)>m)){break
}}return y?function(i){return r[i*(r.length-1)|0]
}:V
}
}();
A.Easings={linear:function(a){return a
},swing:function(a){return 0.5-Math.cos(a*Math.PI)/2
},spring:function(a){return 1-Math.cos(4.5*a*Math.PI)*Math.exp(6*-a)
}},k.each([["ease",[0.25,0.1,0.25,1]],["ease-in",[0.42,0,1,1]],["ease-out",[0,0,0.58,1]],["ease-in-out",[0.42,0,0.58,1]],["easeInSine",[0.47,0,0.745,0.715]],["easeOutSine",[0.39,0.575,0.565,1]],["easeInOutSine",[0.445,0.05,0.55,0.95]],["easeInQuad",[0.55,0.085,0.68,0.53]],["easeOutQuad",[0.25,0.46,0.45,0.94]],["easeInOutQuad",[0.455,0.03,0.515,0.955]],["easeInCubic",[0.55,0.055,0.675,0.19]],["easeOutCubic",[0.215,0.61,0.355,1]],["easeInOutCubic",[0.645,0.045,0.355,1]],["easeInQuart",[0.895,0.03,0.685,0.22]],["easeOutQuart",[0.165,0.84,0.44,1]],["easeInOutQuart",[0.77,0,0.175,1]],["easeInQuint",[0.755,0.05,0.855,0.06]],["easeOutQuint",[0.23,1,0.32,1]],["easeInOutQuint",[0.86,0,0.07,1]],["easeInExpo",[0.95,0.05,0.795,0.035]],["easeOutExpo",[0.19,1,0.22,1]],["easeInOutExpo",[1,0,0,1]],["easeInCirc",[0.6,0.04,0.98,0.335]],["easeOutCirc",[0.075,0.82,0.165,1]],["easeInOutCirc",[0.785,0.135,0.15,0.86]]],function(b,a){A.Easings[a[0]]=J.apply(null,a[1])
});
var z=A.CSS={RegEx:{isHex:/^#([A-f\d]{3}){1,2}$/i,valueUnwrap:/^[A-z]+\((.*)\)$/i,wrappedValueAlreadyExtracted:/[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,valueSplit:/([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi},Lists:{colors:["fill","stroke","stopColor","color","backgroundColor","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor","outlineColor"],transformsBase:["translateX","translateY","scale","scaleX","scaleY","skewX","skewY","rotateZ"],transforms3D:["transformPerspective","translateZ","scaleZ","rotateX","rotateY"]},Hooks:{templates:{textShadow:["Color X Y Blur","black 0px 0px 0px"],boxShadow:["Color X Y Blur Spread","black 0px 0px 0px 0px"],clip:["Top Right Bottom Left","0px 0px 0px 0px"],backgroundPosition:["X Y","0% 0%"],transformOrigin:["X Y Z","50% 50% 0px"],perspectiveOrigin:["X Y","50% 50%"]},registered:{},register:function(){for(var h=0;
h<z.Lists.colors.length;
h++){var d="color"===z.Lists.colors[h]?"0 0 0 1":"255 255 255 1";
z.Hooks.templates[z.Lists.colors[h]]=["Red Green Blue Alpha",d]
}var g,b,m;
if(N){for(g in z.Hooks.templates){b=z.Hooks.templates[g],m=b[0].split(" ");
var l=b[1].match(z.RegEx.valueSplit);
"Color"===m[0]&&(m.push(m.shift()),l.push(l.shift()),z.Hooks.templates[g]=[m.join(" "),l.join(" ")])
}}for(g in z.Hooks.templates){b=z.Hooks.templates[g],m=b[0].split(" ");
for(var h in m){var c=g+m[h],f=h;
z.Hooks.registered[c]=[g,f]
}}},getRoot:function(b){var a=z.Hooks.registered[b];
return a?a[0]:b
},cleanRootPropertyValue:function(b,a){return z.RegEx.valueUnwrap.test(a)&&(a=a.match(z.RegEx.valueUnwrap)[1]),z.Values.isCSSNullValue(a)&&(a=z.Hooks.templates[b][1]),a
},extractValue:function(f,c){var d=z.Hooks.registered[f];
if(d){var b=d[0],g=d[1];
return c=z.Hooks.cleanRootPropertyValue(b,c),c.toString().match(z.RegEx.valueSplit)[g]
}return c
},injectValue:function(h,d,g){var b=z.Hooks.registered[h];
if(b){var m=b[0],l=b[1],c,f;
return g=z.Hooks.cleanRootPropertyValue(m,g),c=g.toString().match(z.RegEx.valueSplit),c[l]=d,f=c.join(" ")
}return g
}},Normalizations:{registered:{clip:function(f,c,d){switch(f){case"name":return"clip";
case"extract":var b;
return z.RegEx.wrappedValueAlreadyExtracted.test(d)?b=d:(b=d.toString().match(z.RegEx.valueUnwrap),b=b?b[1].replace(/,(\s+)?/g," "):d),b;
case"inject":return"rect("+d+")"
}},blur:function(f,c,d){switch(f){case"name":return"-webkit-filter";
case"extract":var b=parseFloat(d);
if(!b&&0!==b){var g=d.toString().match(/blur\(([0-9]+[A-z]+)\)/i);
b=g?g[1]:0
}return b;
case"inject":return parseFloat(d)?"blur("+d+")":"none"
}},opacity:function(f,c,d){if(8>=N){switch(f){case"name":return"filter";
case"extract":var b=d.toString().match(/alpha\(opacity=(.*)\)/i);
return d=b?b[1]/100:1;
case"inject":return c.style.zoom=1,parseFloat(d)>=1?"":"alpha(opacity="+parseInt(100*parseFloat(d),10)+")"
}}else{switch(f){case"name":return"opacity";
case"extract":return d;
case"inject":return d
}}}},register:function(){9>=N||A.State.isGingerbread||(z.Lists.transformsBase=z.Lists.transformsBase.concat(z.Lists.transforms3D));
for(var a=0;
a<z.Lists.transformsBase.length;
a++){!function(){var b=z.Lists.transformsBase[a];
z.Normalizations.registered[b]=function(d,c,g){switch(d){case"name":return"transform";
case"extract":return K(c)===U||K(c).transformCache[b]===U?/^scale/i.test(b)?1:0:K(c).transformCache[b].replace(/[()]/g,"");
case"inject":var f=!1;
switch(b.substr(0,b.length-1)){case"translate":f=!/(%|px|em|rem|vw|vh|\d)$/i.test(g);
break;
case"scal":case"scale":A.State.isAndroid&&K(c).transformCache[b]===U&&1>g&&(g=1),f=!/(\d)$/i.test(g);
break;
case"skew":f=!/(deg|\d)$/i.test(g);
break;
case"rotate":f=!/(deg|\d)$/i.test(g)
}return f||(K(c).transformCache[b]="("+g+")"),K(c).transformCache[b]
}}
}()
}for(var a=0;
a<z.Lists.colors.length;
a++){!function(){var b=z.Lists.colors[a];
z.Normalizations.registered[b]=function(g,f,l){switch(g){case"name":return b;
case"extract":var h;
if(z.RegEx.wrappedValueAlreadyExtracted.test(l)){h=l
}else{var c,d={black:"rgb(0, 0, 0)",blue:"rgb(0, 0, 255)",gray:"rgb(128, 128, 128)",green:"rgb(0, 128, 0)",red:"rgb(255, 0, 0)",white:"rgb(255, 255, 255)"};
/^[A-z]+$/i.test(l)?c=d[l]!==U?d[l]:d.black:z.RegEx.isHex.test(l)?c="rgb("+z.Values.hexToRgb(l).join(" ")+")":/^rgba?\(/i.test(l)||(c=d.black),h=(c||l).toString().match(z.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g," ")
}return 8>=N||3!==h.split(" ").length||(h+=" 1"),h;
case"inject":return 8>=N?4===l.split(" ").length&&(l=l.split(/\s+/).slice(0,3).join(" ")):3===l.split(" ").length&&(l+=" 1"),(8>=N?"rgb":"rgba")+"("+l.replace(/\s+/g,",").replace(/\.(\d)+(?=,)/g,"")+")"
}}
}()
}}},Names:{camelCase:function(a){return a.replace(/-(\w)/g,function(c,b){return b.toUpperCase()
})
},SVGAttribute:function(b){var a="width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";
return(N||A.State.isAndroid&&!A.State.isChrome)&&(a+="|transform"),new RegExp("^("+a+")$","i").test(b)
},prefixCheck:function(f){if(A.State.prefixMatches[f]){return[A.State.prefixMatches[f],!0]
}for(var c=["","Webkit","Moz","ms","O"],d=0,b=c.length;
b>d;
d++){var g;
if(g=0===d?f:c[d]+f.replace(/^\w/,function(a){return a.toUpperCase()
}),M.isString(A.State.prefixElement.style[g])){return A.State.prefixMatches[f]=g,[g,!0]
}}return[f,!1]
}},Values:{hexToRgb:function(f){var c=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,d=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i,b;
return f=f.replace(c,function(l,h,i,g){return h+h+i+i+g+g
}),b=d.exec(f),b?[parseInt(b[1],16),parseInt(b[2],16),parseInt(b[3],16)]:[0,0,0]
},isCSSNullValue:function(a){return 0==a||/^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(a)
},getUnitType:function(a){return/^(rotate|skew)/i.test(a)?"deg":/(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(a)?"":"px"
},getDisplayType:function(b){var a=b&&b.tagName.toString().toLowerCase();
return/^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(a)?"inline":/^(li)$/i.test(a)?"list-item":/^(tr)$/i.test(a)?"table-row":"block"
},addClass:function(b,a){b.classList?b.classList.add(a):b.className+=(b.className.length?" ":"")+a
},removeClass:function(b,a){b.classList?b.classList.remove(a):b.className=b.className.toString().replace(new RegExp("(^|\\s)"+a.split(" ").join("|")+"(\\s|$)","gi")," ")
}},getPropertyValue:function(i,a,g,f){function x(V,o){function y(){Y&&z.setPropertyValue(V,"display","none")
}var P=0;
if(8>=N){P=k.css(V,o)
}else{var Y=!1;
if(/^(width|height)$/.test(o)&&0===z.getPropertyValue(V,"display")&&(Y=!0,z.setPropertyValue(V,"display",z.Values.getDisplayType(V))),!f){if("height"===o&&"border-box"!==z.getPropertyValue(V,"boxSizing").toString().toLowerCase()){var X=V.offsetHeight-(parseFloat(z.getPropertyValue(V,"borderTopWidth"))||0)-(parseFloat(z.getPropertyValue(V,"borderBottomWidth"))||0)-(parseFloat(z.getPropertyValue(V,"paddingTop"))||0)-(parseFloat(z.getPropertyValue(V,"paddingBottom"))||0);
return y(),X
}if("width"===o&&"border-box"!==z.getPropertyValue(V,"boxSizing").toString().toLowerCase()){var s=V.offsetWidth-(parseFloat(z.getPropertyValue(V,"borderLeftWidth"))||0)-(parseFloat(z.getPropertyValue(V,"borderRightWidth"))||0)-(parseFloat(z.getPropertyValue(V,"paddingLeft"))||0)-(parseFloat(z.getPropertyValue(V,"paddingRight"))||0);
return y(),s
}}var W;
W=K(V)===U?C.getComputedStyle(V,null):K(V).computedStyle?K(V).computedStyle:K(V).computedStyle=C.getComputedStyle(V,null),(N||A.State.isFirefox)&&"borderColor"===o&&(o="borderTopColor"),P=9===N&&"filter"===o?W.getPropertyValue(o):W[o],(""===P||null===P)&&(P=V.style[o]),y()
}if("auto"===P&&/^(top|right|bottom|left)$/i.test(o)){var S=x(V,"position");
("fixed"===S||"absolute"===S&&/top|left/i.test(o))&&(P=k(V).position()[o]+"px")
}return P
}var h;
if(z.Hooks.registered[a]){var v=a,t=z.Hooks.getRoot(v);
g===U&&(g=z.getPropertyValue(i,z.Names.prefixCheck(t)[0])),z.Normalizations.registered[t]&&(g=z.Normalizations.registered[t]("extract",i,g)),h=z.Hooks.extractValue(v,g)
}else{if(z.Normalizations.registered[a]){var b,m;
b=z.Normalizations.registered[a]("name",i),"transform"!==b&&(m=x(i,z.Names.prefixCheck(b)[0]),z.Values.isCSSNullValue(m)&&z.Hooks.templates[a]&&(m=z.Hooks.templates[a][1])),h=z.Normalizations.registered[a]("extract",i,m)
}}return/^[\d-]/.test(h)||(h=K(i)&&K(i).isSVG&&z.Names.SVGAttribute(a)?/^(height|width)$/i.test(a)?i.getBBox()[a]:i.getAttribute(a):x(i,z.Names.prefixCheck(a)[0])),z.Values.isCSSNullValue(h)&&(h=0),A.debug>=2&&console.log("Get "+a+": "+h),h
},setPropertyValue:function(h,b,m,f,d){var t=b;
if("scroll"===b){d.container?d.container["scroll"+d.direction]=m:"Left"===d.direction?C.scrollTo(m,d.alternateValue):C.scrollTo(d.alternateValue,m)
}else{if(z.Normalizations.registered[b]&&"transform"===z.Normalizations.registered[b]("name",h)){z.Normalizations.registered[b]("inject",h,m),t="transform",m=K(h).transformCache[b]
}else{if(z.Hooks.registered[b]){var g=b,p=z.Hooks.getRoot(b);
f=f||z.getPropertyValue(h,p),m=z.Hooks.injectValue(g,m,f),b=p
}if(z.Normalizations.registered[b]&&(m=z.Normalizations.registered[b]("inject",h,m),b=z.Normalizations.registered[b]("name",h)),t=z.Names.prefixCheck(b)[0],8>=N){try{h.style[t]=m
}catch(i){A.debug&&console.log("Browser does not support ["+m+"] for ["+t+"]")
}}else{K(h)&&K(h).isSVG&&z.Names.SVGAttribute(b)?h.setAttribute(b,m):h.style[t]=m
}A.debug>=2&&console.log("Set "+b+" ("+t+"): "+m)
}}return[t,m]
},flushTransformCache:function(f){function c(a){return parseFloat(z.getPropertyValue(f,a))
}var d="";
if((N||A.State.isAndroid&&!A.State.isChrome)&&K(f).isSVG){var b={translate:[c("translateX"),c("translateY")],skewX:[c("skewX")],skewY:[c("skewY")],scale:1!==c("scale")?[c("scale"),c("scale")]:[c("scaleX"),c("scaleY")],rotate:[c("rotateZ"),0,0]};
k.each(K(f).transformCache,function(a){/^translate/i.test(a)?a="translate":/^scale/i.test(a)?a="scale":/^rotate/i.test(a)&&(a="rotate"),b[a]&&(d+=a+"("+b[a].join(" ")+") ",delete b[a])
})
}else{var h,g;
k.each(K(f).transformCache,function(a){return h=K(f).transformCache[a],"transformPerspective"===a?(g=h,!0):(9===N&&"rotateZ"===a&&(a="rotate"),void (d+=a+h+" "))
}),g&&(d="perspective"+g+" "+d)
}z.setPropertyValue(f,"transform",d)
}};
z.Hooks.register(),z.Normalizations.register(),A.hook=function(c,a,b){var d=U;
return c=G(c),k.each(c,function(g,h){if(K(h)===U&&A.init(h),b===U){d===U&&(d=A.CSS.getPropertyValue(h,a))
}else{var f=A.CSS.setPropertyValue(h,a,b);
"transform"===f[0]&&A.CSS.flushTransformCache(h),d=f
}}),d
};
var j=function(){function ae(){return ad?aa.promise||null:af
}function y(){function h(aB){function aA(aG,aE){var aF=U,aH=U,aD=U;
return M.isArray(aG)?(aF=aG[0],!M.isArray(aG[1])&&/^[\d-]/.test(aG[1])||M.isFunction(aG[1])||z.RegEx.isHex.test(aG[1])?aD=aG[1]:(M.isString(aG[1])&&!z.RegEx.isHex.test(aG[1])||M.isArray(aG[1]))&&(aH=aE?aG[1]:B(aG[1],d.duration),aG[2]!==U&&(aD=aG[2]))):aF=aG,aE||(aH=aH||d.easing),M.isFunction(aF)&&(aF=aF.call(m,a,u)),M.isFunction(aD)&&(aD=aD.call(m,a,u)),[aF||0,aH,aD]
}function aC(aG,aE){var aF,aD;
return aD=(aE||"0").toString().toLowerCase().replace(/[%A-z]+$/,function(aH){return aF=aH,""
}),aF||(aF=z.Values.getUnitType(aG)),[aD,aF]
}function ay(){var aH={myParent:m.parentNode||E.body,position:z.getPropertyValue(m,"position"),fontSize:z.getPropertyValue(m,"fontSize")},aE=aH.position===p.lastPosition&&aH.myParent===p.lastParent,aI=aH.fontSize===p.lastFontSize;
p.lastParent=aH.myParent,p.lastPosition=aH.position,p.lastFontSize=aH.fontSize;
var aG=100,aD={};
if(aI&&aE){aD.emToPx=p.lastEmToPx,aD.percentToPxWidth=p.lastPercentToPxWidth,aD.percentToPxHeight=p.lastPercentToPxHeight
}else{var aF=K(m).isSVG?E.createElementNS("http://www.w3.org/2000/svg","rect"):E.createElement("div");
A.init(aF),aH.myParent.appendChild(aF),k.each(["overflow","overflowX","overflowY"],function(aK,aJ){A.CSS.setPropertyValue(aF,aJ,"hidden")
}),A.CSS.setPropertyValue(aF,"position",aH.position),A.CSS.setPropertyValue(aF,"fontSize",aH.fontSize),A.CSS.setPropertyValue(aF,"boxSizing","content-box"),k.each(["minWidth","maxWidth","width","minHeight","maxHeight","height"],function(aK,aJ){A.CSS.setPropertyValue(aF,aJ,aG+"%")
}),A.CSS.setPropertyValue(aF,"paddingLeft",aG+"em"),aD.percentToPxWidth=p.lastPercentToPxWidth=(parseFloat(z.getPropertyValue(aF,"width",null,!0))||1)/aG,aD.percentToPxHeight=p.lastPercentToPxHeight=(parseFloat(z.getPropertyValue(aF,"height",null,!0))||1)/aG,aD.emToPx=p.lastEmToPx=(parseFloat(z.getPropertyValue(aF,"paddingLeft"))||1)/aG,aH.myParent.removeChild(aF)
}return null===p.remToPx&&(p.remToPx=parseFloat(z.getPropertyValue(E.body,"fontSize"))||16),null===p.vwToPx&&(p.vwToPx=parseFloat(C.innerWidth)/100,p.vhToPx=parseFloat(C.innerHeight)/100),aD.remToPx=p.remToPx,aD.vwToPx=p.vwToPx,aD.vhToPx=p.vhToPx,A.debug>=1&&console.log("Unit ratios: "+JSON.stringify(aD),m),aD
}if(d.begin&&0===a){try{d.begin.call(ac,ac)
}catch(an){setTimeout(function(){throw an
},1)
}}if("scroll"===X){var ah=/^x$/i.test(d.axis)?"Left":"Top",av=parseFloat(d.offset)||0,V,ar,at;
d.container?M.isWrapped(d.container)||M.isNode(d.container)?(d.container=d.container[0]||d.container,V=d.container["scroll"+ah],at=V+k(m).position()[ah.toLowerCase()]+av):d.container=null:(V=A.State.scrollAnchor[A.State["scrollProperty"+ah]],ar=A.State.scrollAnchor[A.State["scrollProperty"+("Left"===ah?"Top":"Left")]],at=k(m).offset()[ah.toLowerCase()]+av),b={scroll:{rootPropertyValue:!1,startValue:V,currentValue:V,endValue:at,unitType:"",easing:d.easing,scrollData:{container:d.container,direction:ah,alternateValue:ar}},element:m},A.debug&&console.log("tweensContainer (scroll): ",b.scroll,m)
}else{if("reverse"===X){if(!K(m).tweensContainer){return void k.dequeue(m,d.queue)
}"none"===K(m).opts.display&&(K(m).opts.display="auto"),"hidden"===K(m).opts.visibility&&(K(m).opts.visibility="visible"),K(m).opts.loop=!1,K(m).opts.begin=null,K(m).opts.complete=null,i.easing||delete d.easing,i.duration||delete d.duration,d=k.extend({},K(m).opts,d);
var az=k.extend(!0,{},K(m).tweensContainer);
for(var ap in az){if("element"!==ap){var ak=az[ap].startValue;
az[ap].startValue=az[ap].currentValue=az[ap].endValue,az[ap].endValue=ak,M.isEmptyObject(i)||(az[ap].easing=d.easing),A.debug&&console.log("reverse tweensContainer ("+ap+"): "+JSON.stringify(az[ap]),m)
}}b=az
}else{if("start"===X){var az;
K(m).tweensContainer&&K(m).isAnimating===!0&&(az=K(m).tweensContainer),k.each(ag,function(aJ,aM){if(RegExp("^"+z.Lists.colors.join("$|^")+"$").test(aJ)){var aD=aA(aM,!0),aG=aD[0],aF=aD[1],aI=aD[2];
if(z.RegEx.isHex.test(aG)){for(var aN=["Red","Green","Blue"],aH=z.Values.hexToRgb(aG),aL=aI?z.Values.hexToRgb(aI):U,aK=0;
aK<aN.length;
aK++){var aE=[aH[aK]];
aF&&aE.push(aF),aL!==U&&aE.push(aL[aK]),ag[aJ+aN[aK]]=aE
}delete ag[aJ]
}}});
for(var aj in ag){var am=aA(ag[aj]),ax=am[0],al=am[1],ao=am[2];
aj=z.Names.camelCase(aj);
var aw=z.Hooks.getRoot(aj),P=!1;
if(K(m).isSVG||z.Names.prefixCheck(aw)[1]!==!1||z.Normalizations.registered[aw]!==U){(d.display!==U&&null!==d.display&&"none"!==d.display||d.visibility!==U&&"hidden"!==d.visibility)&&/opacity|filter/.test(aj)&&!ao&&0!==ax&&(ao=0),d._cacheValues&&az&&az[aj]?(ao===U&&(ao=az[aj].endValue+az[aj].unitType),P=K(m).rootPropertyValueCache[aw]):z.Hooks.registered[aj]?ao===U?(P=z.getPropertyValue(m,aw),ao=z.getPropertyValue(m,aj,P)):P=z.Hooks.templates[aw][1]:ao===U&&(ao=z.getPropertyValue(m,aj));
var aq,au,s,l=!1;
if(aq=aC(aj,ao),ao=aq[0],s=aq[1],aq=aC(aj,ax),ax=aq[0].replace(/^([+-\/*])=/,function(aE,aD){return l=aD,""
}),au=aq[1],ao=parseFloat(ao)||0,ax=parseFloat(ax)||0,"%"===au&&(/^(fontSize|lineHeight)$/.test(aj)?(ax/=100,au="em"):/^scale/.test(aj)?(ax/=100,au=""):/(Red|Green|Blue)$/i.test(aj)&&(ax=ax/100*255,au="")),/[\/*]/.test(l)){au=s
}else{if(s!==au&&0!==ao){if(0===ax){au=s
}else{f=f||ay();
var ai=/margin|padding|left|right|width|text|word|letter/i.test(aj)||/X$/.test(aj)||"x"===aj?"x":"y";
switch(s){case"%":ao*="x"===ai?f.percentToPxWidth:f.percentToPxHeight;
break;
case"px":break;
default:ao*=f[s+"ToPx"]
}switch(au){case"%":ao*=1/("x"===ai?f.percentToPxWidth:f.percentToPxHeight);
break;
case"px":break;
default:ao*=1/f[au+"ToPx"]
}}}}switch(l){case"+":ax=ao+ax;
break;
case"-":ax=ao-ax;
break;
case"*":ax=ao*ax;
break;
case"/":ax=ao/ax
}b[aj]={rootPropertyValue:P,startValue:ao,currentValue:ao,endValue:ax,unitType:au,easing:al},A.debug&&console.log("tweensContainer ("+aj+"): "+JSON.stringify(b[aj]),m)
}else{A.debug&&console.log("Skipping ["+aw+"] due to a lack of browser support.")
}}b.element=m
}}}b.element&&(z.Values.addClass(m,"velocity-animating"),g.push(b),""===d.queue&&(K(m).tweensContainer=b,K(m).opts=d),K(m).isAnimating=!0,a===u-1?(A.State.calls.length>10000&&(A.State.calls=H(A.State.calls)),A.State.calls.push([g,ac,d,null,aa.resolver]),A.State.isTicking===!1&&(A.State.isTicking=!0,R())):a++)
}var m=this,d=k.extend({},A.defaults,i),b={},f;
switch(K(m)===U&&A.init(m),parseFloat(d.delay)&&d.queue!==!1&&k.queue(m,d.queue,function(l){A.velocityQueueEntryFlag=!0,K(m).delayTimer={setTimeout:setTimeout(l,parseFloat(d.delay)),next:l}
}),d.duration.toString().toLowerCase()){case"fast":d.duration=200;
break;
case"normal":d.duration=w;
break;
case"slow":d.duration=600;
break;
default:d.duration=parseFloat(d.duration)||1
}A.mock!==!1&&(A.mock===!0?d.duration=d.delay=1:(d.duration*=parseFloat(A.mock)||1,d.delay*=parseFloat(A.mock)||1)),d.easing=B(d.easing,d.duration),d.begin&&!M.isFunction(d.begin)&&(d.begin=null),d.progress&&!M.isFunction(d.progress)&&(d.progress=null),d.complete&&!M.isFunction(d.complete)&&(d.complete=null),d.display!==U&&null!==d.display&&(d.display=d.display.toString().toLowerCase(),"auto"===d.display&&(d.display=A.CSS.Values.getDisplayType(m))),d.visibility!==U&&null!==d.visibility&&(d.visibility=d.visibility.toString().toLowerCase()),d.mobileHA=d.mobileHA&&A.State.isMobile&&!A.State.isGingerbread,d.queue===!1?d.delay?setTimeout(h,d.delay):h():k.queue(m,d.queue,function(l,s){return s===!0?(aa.promise&&aa.resolver(ac),!0):(A.velocityQueueEntryFlag=!0,void h(l))
}),""!==d.queue&&"fx"!==d.queue||"inprogress"===k.queue(m)[0]||k.dequeue(m)
}var Z=arguments[0]&&(k.isPlainObject(arguments[0].properties)&&!arguments[0].properties.names||M.isString(arguments[0].properties)),ad,af,Y,ac,ag,i;
if(M.isWrapped(this)?(ad=!1,Y=0,ac=this,af=this):(ad=!0,Y=1,ac=Z?arguments[0].elements:arguments[0]),ac=G(ac)){Z?(ag=arguments[0].properties,i=arguments[0].options):(ag=arguments[Y],i=arguments[Y+1]);
var u=ac.length,a=0;
if("stop"!==ag&&!k.isPlainObject(i)){var S=Y+1;
i={};
for(var c=S;
c<arguments.length;
c++){M.isArray(arguments[c])||!/^(fast|normal|slow)$/i.test(arguments[c])&&!/^\d/.test(arguments[c])?M.isString(arguments[c])||M.isArray(arguments[c])?i.easing=arguments[c]:M.isFunction(arguments[c])&&(i.complete=arguments[c]):i.duration=arguments[c]
}}var aa={promise:null,resolver:null,rejecter:null};
ad&&A.Promise&&(aa.promise=new A.Promise(function(d,b){aa.resolver=d,aa.rejecter=b
}));
var X;
switch(ag){case"scroll":X="scroll";
break;
case"reverse":X="reverse";
break;
case"stop":k.each(ac,function(d,b){K(b)&&K(b).delayTimer&&(clearTimeout(K(b).delayTimer.setTimeout),K(b).delayTimer.next&&K(b).delayTimer.next(),delete K(b).delayTimer)
});
var v=[];
return k.each(A.State.calls,function(d,b){b&&k.each(b[1],function(f,l){var h=M.isString(i)?i:"";
return i!==U&&b[2].queue!==h?!0:void k.each(ac,function(m,s){s===l&&(i!==U&&(k.each(k.queue(s,h),function(V,P){M.isFunction(P)&&P(null,!0)
}),k.queue(s,h,[])),K(s)&&""===h&&k.each(K(s).tweensContainer,function(V,P){P.endValue=P.currentValue
}),v.push(d))
})
})
}),k.each(v,function(d,b){F(b,!0)
}),aa.promise&&aa.resolver(ac),ae();
default:if(!k.isPlainObject(ag)||M.isEmptyObject(ag)){if(M.isString(ag)&&A.Redirects[ag]){var x=k.extend({},i),ab=x.duration,t=x.delay||0;
return x.backwards===!0&&(ac=k.extend(!0,[],ac).reverse()),k.each(ac,function(d,b){parseFloat(x.stagger)?x.delay=t+parseFloat(x.stagger)*d:M.isFunction(x.stagger)&&(x.delay=t+x.stagger.call(b,d,u)),x.drag&&(x.duration=parseFloat(ab)||(/^(callout|transition)/.test(ag)?1000:w),x.duration=Math.max(x.duration*(x.backwards?1-d/u:(d+1)/u),0.75*x.duration,200)),A.Redirects[ag].call(b,b,x||{},d,u,ac,aa.promise?aa:U)
}),ae()
}var o="Velocity: First argument ("+ag+") was not a property map, a known action, or a registered redirect. Aborting.";
return aa.promise?aa.rejecter(new Error(o)):console.log(o),ae()
}X="start"
}var p={lastParent:null,lastPosition:null,lastFontSize:null,lastPercentToPxWidth:null,lastPercentToPxHeight:null,lastEmToPx:null,remToPx:null,vwToPx:null,vhToPx:null},g=[];
k.each(ac,function(d,b){M.isNode(b)&&y.call(b)
});
var x=k.extend({},A.defaults,i),n;
if(x.loop=parseInt(x.loop),n=2*x.loop-1,x.loop){for(var r=0;
n>r;
r++){var W={delay:x.delay,progress:x.progress};
r===n-1&&(W.display=x.display,W.visibility=x.visibility,W.complete=x.complete),j(ac,"reverse",W)
}}return ae()
}};
A=k.extend(j,A),A.animate=j;
var q=C.requestAnimationFrame||Q;
return A.State.isMobile||E.hidden===U||E.addEventListener("visibilitychange",function(){E.hidden?(q=function(a){return setTimeout(function(){a(!0)
},16)
},R()):q=C.requestAnimationFrame||Q
}),O.Velocity=A,O!==C&&(O.fn.velocity=j,O.fn.velocity.defaults=A.defaults),k.each(["Down","Up"],function(b,a){A.Redirects["slide"+a]=function(y,d,m,h,v,V){var t=k.extend({},d),S=t.begin,P=t.complete,g={height:"",marginTop:"",marginBottom:"",paddingTop:"",paddingBottom:""},x={};
t.display===U&&(t.display="Down"===a?"inline"===A.CSS.Values.getDisplayType(y)?"inline-block":"block":"none"),t.begin=function(){S&&S.call(v,v);
for(var f in g){x[f]=y.style[f];
var c=A.CSS.getPropertyValue(y,f);
g[f]="Down"===a?[c,0]:[0,c]
}x.overflow=y.style.overflow,y.style.overflow="hidden"
},t.complete=function(){for(var c in x){y.style[c]=x[c]
}P&&P.call(v,v),V&&V.resolver(v)
},A(y,g,t)
}
}),k.each(["In","Out"],function(b,a){A.Redirects["fade"+a]=function(p,d,g,f,m,x){var h=k.extend({},d),v={opacity:"In"===a?1:0},t=h.complete;
h.complete=g!==f-1?h.begin=null:function(){t&&t.call(m,m),x&&x.resolver(m)
},h.display===U&&(h.display="In"===a?"auto":"none"),A(this,v,h)
}
}),A
}(window.jQuery||window.Zepto||window,window,document)
});
/*!
 * jQuery throttle / debounce - v1.1 - 3/7/2010
 * http://benalman.com/projects/jquery-throttle-debounce-plugin/
 * 
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */
(function(b,c){var $=b.jQuery||b.Cowboy||(b.Cowboy={}),a;
$.throttle=a=function(f,g,k,j){var i,d=0;
if(typeof g!=="boolean"){j=k;
k=g;
g=c
}function h(){var p=this,n=+new Date()-d,o=arguments;
function m(){d=+new Date();
k.apply(p,o)
}function l(){i=c
}if(j&&!i){m()
}i&&clearTimeout(i);
if(j===c&&n>f){m()
}else{if(g!==true){i=setTimeout(j?l:m,j===c?f-n:f)
}}}if($.guid){h.guid=k.guid=k.guid||$.guid++
}return h
};
$.debounce=function(d,f,g){return g===c?a(d,f,false):a(d,g,f!==false)
}
})(this);
(function(a){a.fn.ctxLightbox=function(k){var b='<div class="ctx-lightbox-overlay"></div><div class="ctx-lightbox"><div class="ctx-lightbox-content"></div></div>';
k=a.extend({overlay:".ctx-lightbox-overlay",contentBox:".ctx-lightbox-content",lightbox:".ctx-lightbox",elements:".ctx-lightbox-overlay, .ctx-lightbox",x:"",y:"",data:"",closeLightbox:function(l){a(k.contentBox).html("");
a(".ctx-lightbox").removeAttr("role");
a("html").removeAttr("aria-hidden");
a(k.elements).removeClass("active");
setTimeout(function(){a("html").addClass("lb-closed").removeClass("lb-open");
a(k.overlay).removeAttr("style");
a(k.lightbox).removeAttr("style");
a(document).trigger("ctx:lightbox-closed",[l])
},600)
},openLightbox:function(m){a("html").addClass("lb-loading");
a("html").attr("aria-hidden",true);
a(".ctx-lightbox").attr("role","dialog");
setTimeout(function(){if(a(".ctx-lightbox").length){f(a(".ctx-lightbox"))
}},1000);
g(k.data.type);
var n=h(k.x,k.y,a(k.lightbox).height(),a(k.lightbox).width()),l=a(k.overlay).width()/2;
a("html").removeClass("lb-closed");
a(k.elements).addClass("active");
a(k.overlay).css({left:(k.x-l)+"px",top:(k.y-l)+"px",transform:"scale("+(n)+")",visibility:"visible"});
setTimeout(function(){a("html").addClass("lb-open").removeClass("lb-loading")
},400);
a(document).trigger("ctx:lightbox-opened",[m])
},getOverlay:function(){return a(k.overlay)
}},k);
a.fn.ctxLightbox.settings=k;
var h=function(m,r,q,o){var p=(m>o/2)?m:(o-m),n=(r>q/2)?r:(q-r),l=a(k.overlay).width()/2;
return Math.ceil(Math.sqrt(Math.pow(p,2)+Math.pow(n,2))/l)+7
};
var c=function(m){if(m){var l="";
m=m.split(";");
a.each(m,function(o,p){var n=(o>0)?",":"";
l+=n+'"'+p.replace(":",'":"')+'"'
});
return a.parseJSON("{"+l+"}")
}else{return""
}};
var g=function(m){if(m.indexOf("youtube")>=0){var l='<div class="content flex-video-content"><div class="flex-video"><iframe frameborder="0" allowfullscreen="" src="https://www.youtube.com/embed/'+k.data.videoId+'?autoplay=0&amp;rel=0&amp;modestbranding=1&amp;showinfo=1&amp;wmode=transparent&amp;enablejsapi=1" type="text/html" id="'+k.data.videoId+'"></iframe></div></div>';
a(k.contentBox).parent().addClass("ctx-lightbox-video");
a(k.contentBox).html(l)
}else{if(m.indexOf("content")>=0){var l=a(".data",k.data.id).html();
a(k.contentBox).parent().removeClass("ctx-lightbox-video");
a(k.contentBox).html(l)
}}a(k.contentBox).prepend('<div class="ctx-lightbox-close" role="button" aria-label="Close lightbox" tabindex="0"><span class="ico-ctx-close"></span></div><button id="ctx-lightbox-placeholder" ></button>');
d()
};
var i=function(n){var m=(n.pageX!==undefined)?n.pageX:(a(window).width()/2);
var l=(n.pageY!==undefined)?n.pageY:((a(window).height()/2)+a(document).scrollTop());
k.x=m;
k.y=l-a(document).scrollTop();
k.openLightbox(n)
};
var d=function(){a(document).on("click",".ctx-modal-link",function(l){k.data=c(a(this).attr("data-options"));
i(l);
l.preventDefault()
});
a(document).on("click","[href^='#lightbox-']",function(l){k.data=c("type:content;id:"+a(this).attr("href").replace(".html",""));
i(l);
l.preventDefault()
});
a(".ctx-lightbox-close").on("click keypress",function(l){if(l.which==13||l.type==="click"){k.closeLightbox(l)
}});
a(document).click(function(l){if(a("html").hasClass("lb-open")&&(a(window).width()>=960)){if(a(l.target).hasClass("ctx-lightbox-content")||a(l.target).hasClass("ctx-lightbox")){k.closeLightbox(l)
}}});
a(document).keyup(function(l){if(l.keyCode==27){k.closeLightbox(l)
}})
};
var f=function(n){var o=a(n).find('a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])'),m=o[1],p=o[o.length-1],l=9;
if(o.length>0){o[0].focus()
}a(n).keydown(function(r){var q=(r.key==="Tab"||r.keyCode===l);
if(!q){return
}if(q){if(document.activeElement===p||document.activeElement==o[0]){m.focus();
r.preventDefault()
}}})
};
var j=function(){if(a(".ctx-lightbox").length===0){a("body").append(b);
d();
a(document).ready(function(){a(window).on("debouncedresize",function(){if(a("html").hasClass("lb-open")){k.x=a(k.lightbox).width()/2;
k.y=a(k.lightbox).height()/2
}})
})
}};
j();
return a.fn.ctxLightbox.settings
};
a(document).ready(function(){a(document).ctxLightbox()
})
})(jQuery);
(function(a){a.fn.ctxSticky=function(d){d=a.extend({stickyItem:a(".ctx-sticky").parent(),placeholder:"",bp:"",disableSmall:false},d);
a.fn.ctxSticky.settings=d;
var c=function(){var j=d.stickyItem;
d.bp=(a(window).width()<=500)?"small":"";
var i=(d.bp==="small")?d.placeholder.offset().top+a(".ctx-sticky",j).height():d.placeholder.offset().top;
j.data("top",i).data("bottom",i+j.height()).data("height",j.height());
d.placeholder.height(j.height())
};
var f=function(){return a(window).scrollTop()
};
var h=function(){var j=d.stickyItem;
var i=0;
a(window).scroll(a.throttle(50,function(){var k=a(this).scrollTop();
if(k>i){d.scrollDirection="down"
}else{d.scrollDirection="up"
}i=k;
b()
}));
a(window).on("debouncedresize",function(){c()
})
};
var b=function(){var i=d.stickyItem;
if(d.bp==="small"){if(d.scrollDirection=="up"){if(f()>i.data("bottom")){if(!d.disableSmall){k()
}}else{j()
}}else{if(f()>i.data("top")){i.removeClass("init-sticky").removeAttr("style")
}}}else{if(f()>i.data("top")){k()
}else{j()
}}function k(){if(!i.hasClass("init-sticky")){i.css("margin-top","-"+i.data("height")+"px");
var l=(d.bp==="small")?"-"+(d.placeholder.height()-a(".ctx-sticky",i).height())+"px":"0";
var m=(d.bp==="small")?300:0;
i.velocity({marginTop:l},{duration:m,easing:"swing"})
}i.addClass("init-sticky")
}function j(){if(f()<i.data("top")){i.removeClass("init-sticky").removeAttr("style")
}}};
var g=function(){if(d.stickyItem.length>0){d.stickyItem.wrap("<div class='ctx-sticky-placeholder' />");
d.placeholder=a(".ctx-sticky-placeholder");
d.disableSmall=(a(".ctx-sticky").hasClass("disable-sticky-small"))?true:false;
setTimeout(function(){c()
},200);
h()
}};
g();
return a.fn.ctxSticky.settings
};
a(document).ready(function(){a(document).ctxSticky()
})
})(jQuery);
(function(g){function d(){}function w(G){c=[G]
}function p(I,G,H){return I&&I.apply(G.context||G,H)
}function o(G){return/\?/.test(G)?"&":"?"
}var q="async",u="charset",s="",E="error",v="insertBefore",t="_jqjsp",B="on",h=B+"click",l=B+E,r=B+"load",z=B+"readystatechange",b="readyState",D="removeChild",k="<script>",A="success",C="timeout",f=window,a=g.Deferred,i=g("head")[0]||document.documentElement,y={},n=0,c,m={callback:t,url:location.href},x=f.opera,j=!!g("<div>").html("<!--[if IE]><i><![endif]-->").find("i").length;
function F(L){L=g.extend({},m,L);
var J=L.success,Q=L.error,I=L.complete,Z=L.dataFilter,ab=L.callbackParameter,R=L.callback,aa=L.cache,H=L.pageCache,K=L.charset,M=L.url,ad=L.data,T=L.timeout,P,X=0,V=d,S,O,G,ac,N,W;
a&&a(function(ae){ae.done(J).fail(Q);
J=ae.resolve;
Q=ae.reject
}).promise(L);
L.abort=function(){!(X++)&&V()
};
if(p(L.beforeSend,L,[L])===!1||X){return L
}M=M||s;
ad=ad?((typeof ad)=="string"?ad:g.param(ad,L.traditional)):s;
M+=ad?(o(M)+ad):s;
ab&&(M+=o(M)+encodeURIComponent(ab)+"=?");
!aa&&!H&&(M+=o(M)+"_"+(new Date()).getTime()+"=");
M=M.replace(/=\?(&|$)/,"="+R+"$1");
function Y(ae){if(!(X++)){V();
H&&(y[M]={s:[ae]});
Z&&(ae=Z.apply(L,[ae]));
p(J,L,[ae,A,L]);
p(I,L,[L,A])
}}function U(ae){if(!(X++)){V();
H&&ae!=C&&(y[M]=ae);
p(Q,L,[L,ae]);
p(I,L,[L,ae])
}}if(H&&(P=y[M])){P.s?Y(P.s[0]):U(P)
}else{f[R]=w;
ac=g(k)[0];
ac.id=t+n++;
if(K){ac[u]=K
}x&&x.version()<11.6?((N=g(k)[0]).text="document.getElementById('"+ac.id+"')."+l+"()"):(ac[q]=q);
if(j){ac.htmlFor=ac.id;
ac.event=h
}ac[r]=ac[l]=ac[z]=function(ae){if(!ac[b]||!/i/.test(ac[b])){try{ac[h]&&ac[h]()
}catch(af){}ae=c;
c=0;
ae?Y(ae[0]):U(E)
}};
ac.src=M;
V=function(ae){W&&clearTimeout(W);
ac[z]=ac[r]=ac[l]=null;
i[D](ac);
N&&i[D](N)
};
i[v](ac,(G=i.firstChild));
N&&i[v](N,G);
W=T>0&&setTimeout(function(){U(C)
},T)
}return L
}F.setup=function(G){g.extend(m,G)
};
g.jsonp=F
})(jQuery);
/*!
 * Javascript Cookie v1.5.1
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2014 Klaus Hartl
 * Released under the MIT license
 */
(function(a){var f;
if(typeof define==="function"&&define.amd){define(["jquery"],a)
}else{if(typeof exports==="object"){try{f=require("jquery")
}catch(d){}module.exports=a(f)
}else{var c=window.Cookies;
var b=window.Cookies=a(window.jQuery);
b.noConflict=function(){window.Cookies=c;
return b
}
}}}(function(h){var f=/\+/g;
function j(l){return i.raw?l:encodeURIComponent(l)
}function a(l){return i.raw?l:decodeURIComponent(l)
}function g(l){return j(i.json?JSON.stringify(l):String(l))
}function c(l){if(l.indexOf('"')===0){l=l.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\")
}try{l=decodeURIComponent(l.replace(f," "));
return i.json?JSON.parse(l):l
}catch(m){}}function b(m,l){var n=i.raw?m:c(m);
return d(l)?l(n):n
}function k(){var o,m;
var n=0;
var l={};
for(;
n<arguments.length;
n++){m=arguments[n];
for(o in m){l[o]=m[o]
}}return l
}function d(l){return Object.prototype.toString.call(l)==="[object Function]"
}var i=function(s,r,x){if(arguments.length>1&&!d(r)){x=k(i.defaults,x);
if(typeof x.expires==="number"){var u=x.expires,w=x.expires=new Date();
w.setMilliseconds(w.getMilliseconds()+u*86400000)
}return(document.cookie=[j(s),"=",g(r),x.expires?"; expires="+x.expires.toUTCString():"",x.path?"; path="+x.path:"",x.domain?"; domain="+x.domain:"",x.secure?"; secure":""].join(""))
}var y=s?undefined:{},v=document.cookie?document.cookie.split("; "):[],q=0,o=v.length;
for(;
q<o;
q++){var p=v[q].split("="),m=a(p.shift()),n=p.join("=");
if(s===m){y=b(n,r);
break
}if(!s&&(n=b(n))!==undefined){y[m]=n
}}return y
};
i.get=i.set=i;
i.defaults={};
i.remove=function(m,l){i(m,"",k(l,{expires:-1}));
return !i(m)
};
if(h){h.cookie=i;
h.removeCookie=i.remove
}return i
}));
(function(c,b,d,a){b.CTX={cache:{},init:function(){},libs:{},temp:{},utils:{homepagePath:"",currentPagePath:"",isAuthor:null,isEditMode:function(){return c("[data-layer=Edit]").hasClass("is-selected")
},isPreviewMode:function(){return c("[data-layer=Preview]").hasClass("is-selected")
},getRelativePath:function(g){if(b.CTX.utils.isAuthor!="true"){var j=b.CTX.utils.homepagePath.split("/");
var f=j[3];
var i="";
if(f!="en_us"){i="/"+f
}var h=g;
if(g&&g.indexOf(b.CTX.utils.homepagePath)==0){h=i+g.replace(b.CTX.utils.homepagePath,"")
}return h
}return g
},randomString:function(g,f){if(f){return new Array(g).join().replace(/(.|$)/g,function(){return((Math.random()*36)|0).toString(36)[Math.random()<0.5?"toString":"toUpperCase"]()
})
}return new Array(5).join().replace(/(.|$)/g,function(){return((Math.random()*36)|0).toString(36)
})
},hash:function(k){var j=0,g,h,f;
if(k.length==0){return j
}for(g=0,f=k.length;
g<f;
g++){h=k.charCodeAt(g);
j=((j<<5)-j)+h;
j|=0
}return j
},wh:this,globalMsg:{allowedHosts:{},languageMapping:{},confirmedCookie:"",languageCookie:"",popupMsgSelector:"global-lang-msg",isAllowedHost:function(f){return c.inArray(f,b.CTX.utils.globalMsg.allowedHosts)>-1?true:false
},getLanguage:function(){var f=b.CTX.utils.globalMsg;
var i=function(k){if(k!=undefined&&k!=null){if(f.languageMapping.hasOwnProperty(k)){return f.languageMapping[k]
}}return""
};
if(c.cookie(f.languageCookie)){var g=c.cookie(f.languageCookie).toLowerCase();
return i(g)
}var h=navigator.languages;
var j=navigator.language;
if(h!=undefined&&h!=null&&h.length>0){var g=h[0].toLowerCase();
return i(g)
}else{if(j.length>0){if(j==="en"||j==="en-US"){return null
}return j
}}return null
},popupConfirmed:function(){if(c.cookie(b.CTX.utils.globalMsg.confirmedCookie)){return true
}return false
},getMsgRequest:function(h){var g=null;
var f="/products."+b.CTX.utils.globalMsg.popupMsgSelector;
if(h!=null&&h!=undefined){f+="."+h
}else{g={_:Date.now()}
}f+="/";
return c.get(f,g)
}},dialog:{get:function(f){if(f!==undefined){return c(f)
}return c("form.foundation-form")
},getFields:function(f){var g={};
c("[name]",f).each(function(h,i){g[c(i).attr("name").replace("./","")]=c(i)
});
return g
},getValue:function(f,g){var g=g.replace(/(:|\.|\[|\]|,)/g,"\\$1");
return c("[name=\\.\\/"+g+"]",f).val()
},getValues:function(f){var g={};
c("[name]",f).each(function(h,i){g[c(i).attr("name").replace("./","")]=c(i).val()
});
return g
},setValue:function(f,h){var g=c('[name="./'+f+'"]',"form.foundation-form");
g.val(h);
return g
},getMultiValue:function(i,h){var g=[],f={};
c('input[name="./'+i+'"]',"form.foundation-form .coral-Multifield").each(function(k,j){var j=c(j);
g.push({el:j,val:j.val()});
f[j.val()]=""
});
if(!h){return g
}else{return f
}},createMultiField:function(g,h){var f=html=endHtml=output="";
h.forEach(function(j){var l=j,k=g.sectionId(l);
html+='<li class="js-coral-Multifield-input coral-Multifield-input">';
html+='<section class="coral-Form-fieldset" data-name="'+g.itemSeparator+'" data-section-id="'+k+'">';
html+=g.sectionChild(l);
html+="<div>";
g.fields.forEach(function(n,m){var o=g.fields[m].value(l);
html+='<div class="'+g.fields[m]["wrapperClass"]+'">';
html+='<label class="'+g.fields[m]["labelClass"]+'">'+g.fields[m]["fieldLabel"]+"</label>";
html+="<"+g.fields[m]["field"]+' class="'+g.fields[m]["class"]+'" type="'+g.fields[m]["type"]+'" name="'+g.fields[m]["jcrName"]+'" value="'+o+'">';
if((g.fields[m]["invisible"]!=true)&&(g.fields[m]["type"]!="checkbox")){html+="<span data-"+g.fields[m]["type"]+' class="coral-Form-fieldinfo coral-Icon coral-Icon--infoCircle coral-Icon--sizeS" data-init="quicktip" data-quicktip-type="info" data-quicktip-arrow="right" data-quicktip-content="" aria-label="" tabindex="0"></span>'
}if(g.fields[m]["type"]==="checkbox"){html+='<span class="coral-Checkbox-checkmark"></span>';
html+='<span class="coral-Checkbox-description"> </span><input type="hidden" name="'+g.fields[m]["jcrName"]+'@Delete">'
}html+="</div>"
});
html+="</div>";
html+="</section>";
html+='<button type="button" class="js-coral-Multifield-remove coral-Multifield-remove coral-Button coral-Button--square coral-Button--quiet">';
html+='<i class="coral-Icon coral-Icon--sizeS coral-Icon--delete coral-Button-icon"></i></button>';
html+='<button type="button" class="js-coral-Multifield-move coral-Multifield-move coral-Button coral-Button--square coral-Button--quiet">';
html+='<i class="coral-Icon coral-Icon--sizeS coral-Icon--moveUpDown coral-Button-icon"></i></button>';
html+="</li>"
});
return f+html+endHtml
},createHiddenField:function(g,j,f,h,i){var f=f||"",h=h||"hidden",i=i||"",m=c("form.foundation-form"),k=c(h+'[name="./'+g+'"]',m),l='<input type="'+h+'" class="'+i+'" '+f+' name="./'+g+'" value="'+j+'" style="display:none">';
if(k.length===0){m.append(l)
}else{k.replaceWith(l);
console.log("field length greater than 0",k.length)
}return
},getComponentName:function(g){var h=this.getValue(g,"sling:resourceType");
if(h==null){return
}var f=h.lastIndexOf("/");
return h.substr(++f)
},hasField:function(f,g){return c("[name=\\.\\/"+g+"]").length>0
},hasValue:function(f,g){return !!CTX.utils.dialog.getValue(f,g)
},getPath:function(f){self=b.CTX.utils.dialog;
if(f!==undefined){return self.get(f).attr("action")
}return self.get().attr("action")
},getSubmitBtn:function(){return(".cq-dialog-submit")
},getCancelBtn:function(){return".cq-dialog-cancel"
},getBasicEvent:function(k,h,m,l){var i=(typeof k==undefined||k==null)?d:k;
var f=(typeof k==undefined||h==null)?"click":h;
var g=(typeof m==undefined||m==null)?".cq-dialog-submit":m;
var j=(typeof m==undefined||m==null)?null:l;
return{container:i,trigger:f,selector:g,func:j}
},getMultiFieldAddBtn:function(){return c(".js-coral-Multifield-add")
},getMultiFieldRemoveBtn:function(){return c(".js-coral-Multifield-remove")
},getMultiFieldCount:function(){return c(".js-coral-Multifield-input").length
},getMultiFieldList:function(){return c("form.foundation-form .coral-Multifield-list .coral-Multifield-input")
},unbindEvents:function(j){if(j!=null&&j.length>0){for(var h in j){var k=j[h];
var g=!(typeof k.func==undefined||k.func==null);
var f=!(typeof k.selector==undefined||k.selector==null);
if(!g&&!f){c(k.container).off(k.trigger)
}else{if(g&&f){c(k.container).off(k.trigger,k.selector,k.func)
}else{if(g&&!f){c(k.container).off(k.trigger,k.func)
}else{c(k.container).off(k.trigger,k.selector)
}}}}}}},editableToolbar:{appendButton:function(g){var f=d;
b.setTimeout(function(){var h='<button class="coral-Button coral-Button--quiet" title="'+g.text+'" data-action="'+g.text+'"><i class="coral-Icon '+g.icon+' coral-Icon--sizeS" title="'+g.text+'"></i></button>';
c("#EditableToolbar").append(h);
f.off("click",'[data-action="'+g.text+'"]');
f.on("click",'[data-action="'+g.text+'"]',g.handler)
},25)
},hideOverlays:function(f){Granite.author.store.forEach(function(g){if(g.path.match(f)){g.overlay.setVisible(false);
g.getChildren().forEach(function(h){h.overlay.setVisible(false)
})
}})
}},video:{writeVideoLinks:function(k,g){var j=k;
var f=[];
var h=false;
var l=new RegExp("<a(\\s+href=['|\"]http(?:s:|:)//www\\.youtube\\.com/watch\\?v=.*?</a>)","g");
n(j);
function i(p){if(p.match(l)!=null){p.match(l).map(function(D,A,x,w){var y=D;
var s=y.match(/href="(.*?)"/)[0];
var r=s.match(/["|'](.+?)["|']/)[1];
if(CTX.utils.video.isValidVideoUrl(r)){var B=s.match(/v=(.*)"/).slice(1,2)[0];
p=p.replace("<a "+s,'<a class="ctx-modal-link" data-ctx-modal="1" href="'+r+'" data-options="videoId:'+B+';type:youtubes"');
var C=/videoId:([^;]*)(?:[^>]*)>([^<]*)/g;
var v;
var q;
var u;
var z;
var t;
while((v=C.exec(p))!==null){if(v.index===C.lastIndex){C.lastIndex++
}if(x.length>1&&A==0){continue
}z=v[0];
q=v[1];
capturedLinkTxt=v[2];
if(!/<span(.*?)>/.test(z)&&!/data\-ts/.test(z)){t=z.replace(">"+capturedLinkTxt,'data-ts="1"><span class="vi icon-play">&nbsp;</span><span class="vt">'+capturedLinkTxt+"</span> ("+q+")");
p=p.replace(z,t);
f.push(q)
}}}});
m(p)
}else{g(p)
}}function m(p){var q=0;
while(q<f.length){(function(r){CTX.services.getVideoDataAsync(f[r],function(s){var t=s.ytduration;
p=p.replace("("+f[r]+")",'<span class="vd">('+t+")</span>");
if(r==f.length-1){b.setTimeout(function(){g(p)
},500)
}})
})(q);
q++
}}function n(r){if(f.length<1){var q=/www\.youtube\.com\/watch\?v=(.*?)".*?videoId:(.*?);.*?class="vd">\((.*?)\)/g;
var v=0;
if(r.match(q)!=null){v=r.match(q).length
}var t=0;
var u;
var p=r;
var s=0;
r.replace(q,function(x,w,z,y){if(w!=z){s++
}});
r.replace(q,function(x,w,z,y){if(w!=z){(function(B,A,D,C){CTX.services.getVideoDataAsync(A,function(E){++B;
var F=E.ytduration;
u=x.replace(D,A).replace(C,F);
p=p.replace(x,u);
if(B==s){i(p)
}})
})(t,w,z,y)
}});
if(s==0){i(p)
}}}function o(p){}},getVideoLinkData:function(h,g,i){g=g||"";
var f=h.match(/v=(.*)/).slice(1,2)[0];
CTX.services.getVideoDataAsync(f,function(l){var n=l.ytduration,k=l.yttitle,m={vidId:f,vidTitle:k,duration:n};
if(g!==""){var j='data-ctx-modal="1" href="#javascript:void(0);" data-options="videoId:'+f+';type:youtube"';
var o='<span class="vi icon-play">&nbsp;</span><span class="vt">'+g+'</span><span class="vd">('+n+")</span>".replace(/"/g,"&quot;");
j=j.replace(/"/g,"&quot;");
o=o.replace(/"/g,"&quot;");
m.attr=j;
m.text=o
}i(m)
})
},isValidVideoUrl:function(f){if(/youtube\.com/.test(f)){return/http(s:|:)\/\/www\.youtube\.com\/watch\?v=.+/g.test(f)
}return false
},getTransformedLink:function(f){if(CTX.utils.video.isValidVideoUrl(f)){return f
}if(f.indexOf("://")===-1&&f.indexOf("/")===-1&&f.charAt(0)!="#"){return"https://www.youtube.com/watch?v="+f
}return f
}},getDurationFromISO8601:function(r){var n=/PT(\d+H)?(\d+M)?(\d+S)?/;
var h=n.exec(r);
if(h!=null){var q=typeof h[1];
var m=typeof h[2];
var l=typeof h[3];
var o=0;
var g=0;
var p=0;
if((q!="undefined")){var j=h[1].slice(0,-1);
o=parseInt(j)
}if((m!="undefined")){var i=h[2].slice(0,-1);
g=parseInt(i)
}if((l!="undefined")){var k=h[3].slice(0,-1);
p=parseInt(k)
}var f="";
if(o>0){f=o+":"
}if(g>9&&o>0){f=f+g+":"
}else{if(g>0&&o>0){f=f+"0"+g+":"
}else{if(g>0){f=g+":"
}else{if(o>0){f=f+"00:"
}else{f=g+":"
}}}}if(p>9){f=f+p
}else{if(p>0){f=f+"0"+p
}else{f=f+"00"
}}return f
}return r
},text:{formatTables:function(h){var f=c("<div>").append(h);
var g=f.find("table");
g.each(function(){var j=c(this),i=j.parents(".ctx-table-container");
(i.length===0)?j.wrap('<div class="ctx-table-container"></div>'):false;
j.css("max-width",c(this).attr("width"))
});
return f.html()
},handleAnchorLinks:function(){var f="a[href^='#video-'], a[href^='#lightbox-'], a[href^='#tab-']";
var g="a[href^='#']:not("+f+")";
d.on("click",g,function(j){var i=c(this).attr("href").replace("#","");
var h=c("[name='"+i+"'], [id='"+i+"']");
if(h.length>0){j.preventDefault();
var k=c("[name='"+i+"'], [id='"+i+"']").offset().top;
c("html, body").animate({scrollTop:CTX.utils.animate.getScrollOffset(k)},1000)
}})
}},animate:{getScrollOffset:function(g){var i=c(".ctx-sticky"),f=(c(b).width()<=500)?"small":"";
var h=(i.length>0)?(g-(i.parent().height())):g;
return(f==="small")?g:h
}},refreshEditor:function(){console.log("Refreshing editor...");
a.overlayManager.teardown();
a.overlayManager.setup();
a.overlayManager.reposition(true)
}},services:{saveVideoData:function(g,o,j){var p=b.CTX,i=/youtube/.test(g),n=/youtu.be/.test(g),f,m,l=p.services.vars.youTubeApiKey,h=p.services.vars.youTubeApiUrl+"videos";
if(i){f=g.match(/v=(.*)/).slice(1,2)[0]
}else{if(n){f=g.match(/be\/(.*)/).slice(1,2)[0]
}}if(f===""){var m=true;
console.warn("Invalid Youtube URL: "+e)
}if(!m&&o!==undefined){jQuery.jsonp({type:"GET",url:h+"?id="+f+"&part=snippet,contentDetails&key="+l,cache:false,timeout:10000,dataType:"jsonp",callbackParameter:"callback",error:function(q){c(b).adaptTo("foundation-ui").alert("There was a problem","Please ensure that the Youtube video ID or URL is correct.")
},success:function(s){var v=o;
var r=s.items[0];
var u=p.utils.getDurationFromISO8601(r.contentDetails.duration);
var q={ytthumbsrc:r.snippet.thumbnails.high.url,ytduration:u,ytdescription:k(r.snippet.description.replace(/\n/g,"<br/>")+"<br/>"),yttitle:r.snippet.title};
if((j!=undefined)&&/ytthumbsrc|ytduration|ytdescription|yttitle/.test(j)){var t={};
q=t[j]=q[j]
}jQuery.ajax({type:"post",url:v,cache:false,data:q,dataType:"text",success:function(){},fail:function(){c(b).adaptTo("foundation-ui").alert("There was a problem","There was an error while saving the youtube video data.")
}});
return q
}})
}else{return f
}function k(s){var q="For more information";
var t="Learn more at";
var r="Read more at";
if(s.indexOf(q)>0){s=s.replace(s.substr(s.indexOf(q),s.length-1),"")
}if(s.indexOf(t)>0){s=s.replace(s.substr(s.indexOf(t),s.length-1),"")
}if(s.indexOf(r)>0){s=s.replace(s.substr(s.indexOf(r),s.length-1),"")
}return s
}},getVideoDataAsync:function(h,j){var f=b.CTX,i=f.services.vars.youTubeApiKey,g=f.services.vars.youTubeApiUrl+"videos";
if(f.utils.video.isValidVideoUrl(h)){h=h.match(/v=(.*)/).slice(1,2)[0]
}jQuery.jsonp({type:"GET",url:g+"?id="+h+"&part=snippet,contentDetails&key="+i,cache:false,timeout:10000,dataType:"jsonp",callbackParameter:"callback",error:function(k){console.log(k);
c(b).adaptTo("foundation-ui").alert("There was a problem","Please ensure that the Youtube video ID or URL is correct.")
},success:function(m){if(!m.hasOwnProperty("items")){l={error:"Error with youtube video API, possible limit exceeded"};
j(l);
return
}var l=m.items[0],k="https://i.ytimg.com/vi/no/no.jpg";
if(m.items.length>0){var n=f.utils.getDurationFromISO8601(l.contentDetails.duration);
l={ytthumbsrcD:"default" in l.snippet.thumbnails?l.snippet.thumbnails["default"].url:k,ytthumbsrc:"high" in l.snippet.thumbnails?l.snippet.thumbnails.high.url:k,ytthumbsrcH:"high" in l.snippet.thumbnails?l.snippet.thumbnails.high.url:k,ytthumbsrcM:"medium" in l.snippet.thumbnails?l.snippet.thumbnails.medium.url:k,ytthumbsrcS:"standard" in l.snippet.thumbnails?l.snippet.thumbnails.standard.url:k,ytduration:n,ytdescription:l.snippet.description.replace(/\n/g,"<br/>")+"<br/>",yttitle:l.snippet.title};
j(l)
}else{l={error:"Error with video id: "+h};
j(l)
}}})
},getVideoPlaylist:function(j,f){var h=b.CTX,k=h.services.vars.youTubeApiKey,i=h.services.vars.youTubeApiUrl+"playlistItems",g=50;
jQuery.jsonp({type:"GET",url:i+"?maxResults="+g+"&part=snippet&playlistId="+j+"&key="+k,cache:false,timeout:10000,dataType:"jsonp",callbackParameter:"callback",error:function(l){c(b).adaptTo("foundation-ui").alert("There was a problem","Please ensure that the Youtube video ID or URL is correct.")
},success:function(l){b.ytt=l;
console.log(l);
f(l)
}})
},getJcrNode:function(h,g){var f=".json";
h+=f;
var i=(g===undefined)?"":g;
c.ajax(h,{success:function(j){return j[i]
},error:function(){}})
},setJcrNode:function(g,f){jQuery.ajax({type:"post",url:g,cache:false,data:f,dataType:"text",success:function(h){},fail:function(h){}})
},deleteJcrNode:function(g,f){jQuery.ajax({type:"post",url:g.replace("_jcr_content","jcr:content"),cache:false,data:{":operation":"delete"},dataType:"text",success:function(h){console.log("Success deleting: "+g);
f(h)
},fail:function(h){console.log("Error deleting: "+g);
f(h)
}})
},moveJcrNode:function(g,j,h,f){j=j.replace("_jcr_content","jcr:content");
h=h.replace("_jcr_content","jcr:content");
var i=new FormData();
i.append(g+"@MoveFrom",j);
jQuery.ajax({url:h,data:i,cache:false,contentType:false,processData:false,type:"POST",success:function(k){console.log("Successfully moved JCR node");
f(k)
},failure:function(k){console.log("Could not move JCR node");
f(k)
}})
},renameJcrNode:function(i,g,f){var h=i.substr(0,i.lastIndexOf("/"));
CTX.services.moveJcrNode(g,i,h,f)
},vars:{youTubeApiKey:"AIzaSyA0FS1PKY7BIruXW6OPPGJB-3Ho0EW3vXw",youTubeApiUrl:"https://www.googleapis.com/youtube/v3/"}}}
})(jQuery,window,jQuery(document),Granite.author);
(function(a,c,b){c.on("dialog-ready",function(){var g=a(".cq-dialog.foundation-form"),d=b.utils.dialog.getComponentName(g);
if(d==="resource-card"){let coralVideoUrlTextfield=g.find('input[name="./videoUrl"]')[0],coralCardLinkTextField=g.find('foundation-autocomplete[name="./link"]')[0];
let coralCardDefSelect=g.find("coral-select.card-def")[0];
let _toggleVideoAndLinkFields=function(){let isImageSelected=coralCardDefSelect.value==="image";
a(coralVideoUrlTextfield).parents(".coral-Form-fieldwrapper").toggleClass("hide",isImageSelected);
a(coralCardLinkTextField).parents(".coral-Form-fieldwrapper").toggleClass("hide",!isImageSelected)
};
Coral.commons.ready(coralCardDefSelect,function(){}