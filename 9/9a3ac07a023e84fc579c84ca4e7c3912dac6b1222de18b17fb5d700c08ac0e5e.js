if(!Array.prototype.find){Array.prototype.find=function(b){if(this==null){throw new TypeError('"this" is null or not defined')
}var f=Object(this);
var a=f.length>>>0;
if(typeof b!=="function"){throw new TypeError("predicate must be a function")
}var c=arguments[1];
var d=0;
while(d<a){var e=f[d];
if(b.call(c,e,d,f)){return e
}d++
}return undefined
}
}if(!Array.prototype.includes){Array.prototype.includes=function(d,e){if(this==null){throw new TypeError('"this" is null or not defined')
}var f=Object(this);
var a=f.length>>>0;
if(a===0){return false
}var g=e|0;
var c=Math.max(g>=0?g:a-Math.abs(g),0);
function b(h,j){return h===j||(typeof h==="number"&&typeof j==="number"&&isNaN(h)&&isNaN(j))
}while(c<a){if(b(f[c],d)){return true
}c++
}return false
}
}if(!Array.prototype.forEach){Array.prototype.forEach=function(f){var c,b;
if(this==null){throw new TypeError("this is null or not defined")
}var e=Object(this);
var a=e.length>>>0;
if(typeof f!=="function"){throw new TypeError(f+" is not a function")
}if(arguments.length>1){c=arguments[1]
}b=0;
while(b<a){var d;
if(b in e){d=e[b];
f.call(c,d,b,e)
}b++
}}
}if(!Array.prototype.map){Array.prototype.map=function(h){var d,b,c;
if(this==null){throw new TypeError("this is null or not defined")
}var g=Object(this);
var a=g.length>>>0;
if(typeof h!=="function"){throw new TypeError(h+" is not a function")
}if(arguments.length>1){d=arguments[1]
}b=new Array(a);
c=0;
while(c<a){var f,e;
if(c in g){f=g[c];
e=h.call(d,f,c,g);
b[c]=e
}c++
}return b
}
}if(!Array.prototype.filter){Array.prototype.filter=function(c){if(this===void 0||this===null){throw new TypeError()
}var f=Object(this);
var a=f.length>>>0;
if(typeof c!=="function"){throw new TypeError()
}var e=[];
var b=arguments.length>=2?arguments[1]:void 0;
for(var d=0;
d<a;
d++){if(d in f){var g=f[d];
if(c.call(b,g,d,f)){e.push(g)
}}}return e
}
}if(!Element.prototype.matches){Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector
}if(!Element.prototype.closest){Element.prototype.closest=function(b){var a=this;
if(!document.documentElement.contains(a)){return null
}do{if(a.matches(b)){return a
}a=a.parentElement||a.parentNode
}while(a!==null);
return null
}
}if(typeof Object.assign!="function"){Object.assign=function(d,f){if(d==null){throw new TypeError("Cannot convert undefined or null to object")
}var e=Object(d);
for(var c=1;
c<arguments.length;
c++){var b=arguments[c];
if(b!=null){for(var a in b){if(Object.prototype.hasOwnProperty.call(b,a)){e[a]=b[a]
}}}}return e
}
}if(typeof Object.create!=="function"){Object.create=function(c,a){function b(){}b.prototype=c;
if(typeof(a)==="object"){for(prop in a){if(a.hasOwnProperty((prop))){b[prop]=a[prop]
}}}return new b()
}
}(function(l){var v={};
l.respond=v;
v.update=function(){};
var c=[],d=(function(){var w=false;
try{w=new l.XMLHttpRequest()
}catch(B){w=new l.ActiveXObject("Microsoft.XMLHTTP")
}return function(){return w
}
})(),o=function(w,C){var B=d();
if(!B){return
}B.open("GET",w,true);
B.onreadystatechange=function(){if(B.readyState!==4||B.status!==200&&B.status!==304){return
}C(B.responseText)
};
if(B.readyState===4){return
}B.send(null)
},s=function(w){return w.replace(v.regex.minmaxwh,"").match(v.regex.other)
};
v.ajax=o;
v.queue=c;
v.unsupportedmq=s;
v.regex={media:/@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi,keyframes:/@(?:\-(?:o|moz|webkit)\-)?keyframes[^\{]+\{(?:[^\{\}]*\{[^\}\{]*\})+[^\}]*\}/gi,comments:/\/\*[^*]*\*+([^/][^*]*\*+)*\//gi,urls:/(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g,findStyles:/@media *([^\{]+)\{([\S\s]+?)$/,only:/(only\s+)?([a-zA-Z]+)\s?/,minw:/\(\s*min\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/,maxw:/\(\s*max\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/,minmaxwh:/\(\s*m(in|ax)\-(height|width)\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/gi,other:/\([^\)]*\)/g};
v.mediaQueriesSupported=l.matchMedia&&l.matchMedia("only all")!==null&&l.matchMedia("only all").matches;
if(v.mediaQueriesSupported){return
}var A=l.document,u=A.documentElement,h=[],k=[],r=[],p={},g=30,e=A.getElementsByTagName("head")[0]||u,f=A.getElementsByTagName("base")[0],b=e.getElementsByTagName("link"),m,t,q,z=function(){var C,F=A.createElement("div"),w=A.body,E=u.style.fontSize,D=w&&w.style.fontSize,B=false;
F.style.cssText="position:absolute;font-size:1em;width:1em";
if(!w){w=B=A.createElement("body");
w.style.background="none"
}u.style.fontSize="100%";
w.style.fontSize="100%";
w.appendChild(F);
if(B){u.insertBefore(w,u.firstChild)
}C=F.offsetWidth;
if(B){u.removeChild(w)
}else{w.removeChild(F)
}u.style.fontSize=E;
if(D){w.style.fontSize=D
}C=q=parseFloat(C);
return C
},j=function(M){var R="clientWidth",D=u[R],B=A.compatMode==="CSS1Compat"&&D||A.body[R]||D,P={},Q=b[b.length-1],C=(new Date()).getTime();
if(M&&m&&C-m<g){l.clearTimeout(t);
t=l.setTimeout(j,g);
return
}else{m=C
}for(var K in h){if(h.hasOwnProperty(K)){var N=h[K],G=N.minw,J=N.maxw,L=G===null,O=J===null,w="em";
if(!!G){G=parseFloat(G)*(G.indexOf(w)>-1?(q||z()):1)
}if(!!J){J=parseFloat(J)*(J.indexOf(w)>-1?(q||z()):1)
}if(!N.hasquery||(!L||!O)&&(L||B>=G)&&(O||B<=J)){if(!P[N.media]){P[N.media]=[]
}P[N.media].push(k[N.rules])
}}}for(var I in r){if(r.hasOwnProperty(I)){if(r[I]&&r[I].parentNode===e){e.removeChild(r[I])
}}}r.length=0;
for(var H in P){if(P.hasOwnProperty(H)){var F=A.createElement("style"),E=P[H].join("\n");
F.type="text/css";
F.media=H;
e.insertBefore(F,Q.nextSibling);
if(F.styleSheet){F.styleSheet.cssText=E
}else{F.appendChild(A.createTextNode(E))
}r.push(F)
}}},n=function(L,w,C){var J=L.replace(v.regex.comments,"").replace(v.regex.keyframes,"").match(v.regex.media),M=J&&J.length||0;
w=w.substring(0,w.lastIndexOf("/"));
var B=function(N){return N.replace(v.regex.urls,"$1"+w+"$2$3")
},D=!M&&C;
if(w.length){w+="/"
}if(D){M=1
}for(var G=0;
G<M;
G++){var H,I,E,K;
if(D){H=C;
k.push(B(L))
}else{H=J[G].match(v.regex.findStyles)&&RegExp.$1;
k.push(RegExp.$2&&B(RegExp.$2))
}E=H.split(",");
K=E.length;
for(var F=0;
F<K;
F++){I=E[F];
if(s(I)){continue
}h.push({media:I.split("(")[0].match(v.regex.only)&&RegExp.$2||"all",rules:k.length-1,hasquery:I.indexOf("(")>-1,minw:I.match(v.regex.minw)&&parseFloat(RegExp.$1)+(RegExp.$2||""),maxw:I.match(v.regex.maxw)&&parseFloat(RegExp.$1)+(RegExp.$2||"")})
}}j()
},y=function(){if(c.length){var w=c.shift();
o(w.href,function(B){n(B,w.href,w.media);
p[w.href]=true;
l.setTimeout(function(){y()
},0)
})
}},a=function(){for(var D=0;
D<b.length;
D++){var C=b[D],B=C.href,E=C.media,w=C.rel&&C.rel.toLowerCase()==="stylesheet";
if(!!B&&w&&!p[B]){if(C.styleSheet&&C.styleSheet.rawCssText){n(C.styleSheet.rawCssText,B,E);
p[B]=true
}else{if((!/^([a-zA-Z:]*\/\/)/.test(B)&&!f)||B.replace(RegExp.$1,"").split("/")[0]===l.location.host){if(B.substring(0,2)==="//"){B=l.location.protocol+B
}c.push({href:B,media:E})
}}}}y()
};
a();
v.update=a;
v.getEmValue=z;
function x(){j(true)
}if(l.addEventListener){l.addEventListener("resize",x,false)
}else{if(l.attachEvent){l.attachEvent("onresize",x)
}}})(this);
if(typeof String.prototype.trim!=="function"){String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")
}
}if(typeof String.prototype.includes!=="function"){String.prototype.includes=function(a,b){if(typeof b!=="number"){b=0
}if(b+a.length>this.length){return false
}else{return this.indexOf(a,b)!==-1
}}
}if(!String.prototype.startsWith){Object.defineProperty(String.prototype,"startsWith",{value:function(a,b){b=!b||b<0?0:+b;
return this.substring(b,b+a.length)===a
}})
}if(!String.prototype.endsWith){String.prototype.endsWith=function(b,a){if(a===undefined||a>this.length){a=this.length
}return this.substring(a-b.length,a)===b
}
}(function(b,a){typeof exports==="object"&&typeof module!=="undefined"?module.exports=a():typeof define==="function"&&define.amd?define(a):b.moment=a()
}(this,(function(){var cg;
function eK(){return cg.apply(null,arguments)
}function aV(fd){cg=fd
}function X(fd){return fd instanceof Array||Object.prototype.toString.call(fd)==="[object Array]"
}function x(fd){return fd!=null&&Object.prototype.toString.call(fd)==="[object Object]"
}function cn(fe){if(Object.getOwnPropertyNames){return(Object.getOwnPropertyNames(fe).length===0)
}else{var fd;
for(fd in fe){if(fe.hasOwnProperty(fd)){return false
}}return true
}}function H(fd){return fd===void 0
}function s(fd){return typeof fd==="number"||Object.prototype.toString.call(fd)==="[object Number]"
}function eD(fd){return fd instanceof Date||Object.prototype.toString.call(fd)==="[object Date]"
}function bs(fd,fg){var ff=[],fe;
for(fe=0;
fe<fd.length;
++fe){ff.push(fg(fd[fe],fe))
}return ff
}function ds(fe,fd){return Object.prototype.hasOwnProperty.call(fe,fd)
}function e5(fe,fd){for(var ff in fd){if(ds(fd,ff)){fe[ff]=fd[ff]
}}if(ds(fd,"toString")){fe.toString=fd.toString
}if(ds(fd,"valueOf")){fe.valueOf=fd.valueOf
}return fe
}function cB(ff,fg,fd,fe){return af(ff,fg,fd,fe,true).utc()
}function cx(){return{empty:false,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:false,invalidMonth:null,invalidFormat:false,userInvalidated:false,iso:false,parsedDateParts:[],meridiem:null,rfc2822:false,weekdayMismatch:false}
}function bg(fd){if(fd._pf==null){fd._pf=cx()
}return fd._pf
}var dw;
if(Array.prototype.some){dw=Array.prototype.some
}else{dw=function(fe){var fg=Object(this);
var fd=fg.length>>>0;
for(var ff=0;
ff<fd;
ff++){if(ff in fg&&fe.call(this,fg[ff],ff,fg)){return true
}}return false
}
}function ar(fe){if(fe._isValid==null){var ff=bg(fe);
var fg=dw.call(ff.parsedDateParts,function(fh){return fh!=null
});
var fd=!isNaN(fe._d.getTime())&&ff.overflow<0&&!ff.empty&&!ff.invalidMonth&&!ff.invalidWeekday&&!ff.weekdayMismatch&&!ff.nullInput&&!ff.invalidFormat&&!ff.userInvalidated&&(!ff.meridiem||(ff.meridiem&&fg));
if(fe._strict){fd=fd&&ff.charsLeftOver===0&&ff.unusedTokens.length===0&&ff.bigHour===undefined
}if(Object.isFrozen==null||!Object.isFrozen(fe)){fe._isValid=fd
}else{return fd
}}return fe._isValid
}function P(fe){var fd=cB(NaN);
if(fe!=null){e5(bg(fd),fe)
}else{bg(fd).userInvalidated=true
}return fd
}var cZ=eK.momentProperties=[];
function r(fh,fg){var fd,ff,fe;
if(!H(fg._isAMomentObject)){fh._isAMomentObject=fg._isAMomentObject
}if(!H(fg._i)){fh._i=fg._i
}if(!H(fg._f)){fh._f=fg._f
}if(!H(fg._l)){fh._l=fg._l
}if(!H(fg._strict)){fh._strict=fg._strict
}if(!H(fg._tzm)){fh._tzm=fg._tzm
}if(!H(fg._isUTC)){fh._isUTC=fg._isUTC
}if(!H(fg._offset)){fh._offset=fg._offset
}if(!H(fg._pf)){fh._pf=bg(fg)
}if(!H(fg._locale)){fh._locale=fg._locale
}if(cZ.length>0){for(fd=0;
fd<cZ.length;
fd++){ff=cZ[fd];
fe=fg[ff];
if(!H(fe)){fh[ff]=fe
}}}return fh
}var dk=false;
function ey(fd){r(this,fd);
this._d=new Date(fd._d!=null?fd._d.getTime():NaN);
if(!this.isValid()){this._d=new Date(NaN)
}if(dk===false){dk=true;
eK.updateOffset(this);
dk=false
}}function ch(fd){return fd instanceof ey||(fd!=null&&fd._isAMomentObject!=null)
}function dp(fd){if(fd<0){return Math.ceil(fd)||0
}else{return Math.floor(fd)
}}function cW(fd){var ff=+fd,fe=0;
if(ff!==0&&isFinite(ff)){fe=dp(ff)
}return fe
}function b4(fi,fh,fe){var fd=Math.min(fi.length,fh.length),ff=Math.abs(fi.length-fh.length),fj=0,fg;
for(fg=0;
fg<fd;
fg++){if((fe&&fi[fg]!==fh[fg])||(!fe&&cW(fi[fg])!==cW(fh[fg]))){fj++
}}return fj+ff
}function dj(fd){if(eK.suppressDeprecationWarnings===false&&(typeof console!=="undefined")&&console.warn){console.warn("Deprecation warning: "+fd)
}}function em(fe,fd){var ff=true;
return e5(function(){if(eK.deprecationHandler!=null){eK.deprecationHandler(null,fe)
}if(ff){var fh=[];
var fg;
for(var fj=0;
fj<arguments.length;
fj++){fg="";
if(typeof arguments[fj]==="object"){fg+="\n["+fj+"] ";
for(var fi in arguments[0]){fg+=fi+": "+arguments[0][fi]+", "
}fg=fg.slice(0,-2)
}else{fg=arguments[fj]
}fh.push(fg)
}dj(fe+"\nArguments: "+Array.prototype.slice.call(fh).join("")+"\n"+(new Error()).stack);
ff=false
}return fd.apply(this,arguments)
},fd)
}var ad={};
function eX(fd,fe){if(eK.deprecationHandler!=null){eK.deprecationHandler(fd,fe)
}if(!ad[fd]){dj(fe);
ad[fd]=true
}}eK.suppressDeprecationWarnings=false;
eK.deprecationHandler=null;
function bb(fd){return fd instanceof Function||Object.prototype.toString.call(fd)==="[object Function]"
}function du(fd){var ff,fe;
for(fe in fd){ff=fd[fe];
if(bb(ff)){this[fe]=ff
}else{this["_"+fe]=ff
}}this._config=fd;
this._dayOfMonthOrdinalParseLenient=new RegExp((this._dayOfMonthOrdinalParse.source||this._ordinalParse.source)+"|"+(/\d{1,2}/).source)
}function ee(ff,fd){var fe=e5({},ff),fg;
for(fg in fd){if(ds(fd,fg)){if(x(ff[fg])&&x(fd[fg])){fe[fg]={};
e5(fe[fg],ff[fg]);
e5(fe[fg],fd[fg])
}else{if(fd[fg]!=null){fe[fg]=fd[fg]
}else{delete fe[fg]
}}}}for(fg in ff){if(ds(ff,fg)&&!ds(fd,fg)&&x(ff[fg])){fe[fg]=e5({},fe[fg])
}}return fe
}function cI(fd){if(fd!=null){this.set(fd)
}}var b1;
if(Object.keys){b1=Object.keys
}else{b1=function(ff){var fe,fd=[];
for(fe in ff){if(ds(ff,fe)){fd.push(fe)
}}return fd
}
}var cp={sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"};
function e(ff,fg,fe){var fd=this._calendar[ff]||this._calendar.sameElse;
return bb(fd)?fd.call(fg,fe):fd
}var d3={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"};
function cP(fd){var fe=this._longDateFormat[fd],ff=this._longDateFormat[fd.toUpperCase()];
if(fe||!ff){return fe
}this._longDateFormat[fd]=ff.replace(/MMMM|MM|DD|dddd/g,function(fg){return fg.slice(1)
});
return this._longDateFormat[fd]
}var ap="Invalid date";
function ew(){return this._invalidDate
}var cb="%d";
var fa=/\d{1,2}/;
function eI(fd){return this._ordinal.replace("%d",fd)
}var eH={future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};
function V(fg,ff,fe,fh){var fd=this._relativeTime[fe];
return(bb(fd))?fd(fg,ff,fe,fh):fd.replace(/%d/i,fg)
}function d5(ff,fd){var fe=this._relativeTime[ff>0?"future":"past"];
return bb(fe)?fe(fd):fe.replace(/%s/i,fd)
}var cQ={};
function ck(ff,fd){var fe=ff.toLowerCase();
cQ[fe]=cQ[fe+"s"]=cQ[fd]=ff
}function cV(fd){return typeof fd==="string"?cQ[fd]||cQ[fd.toLowerCase()]:undefined
}function dR(ff){var fe={},fd,fg;
for(fg in ff){if(ds(ff,fg)){fd=cV(fg);
if(fd){fe[fd]=ff[fg]
}}}return fe
}var bx={};
function d2(fe,fd){bx[fe]=fd
}function bv(fd){var fe=[];
for(var ff in fd){fe.push({unit:ff,priority:bx[ff]})
}fe.sort(function(fh,fg){return fh.priority-fg.priority
});
return fe
}function cu(fi,fh,fe){var fg=""+Math.abs(fi),ff=fh-fg.length,fd=fi>=0;
return(fd?(fe?"+":""):"-")+Math.pow(10,Math.max(0,ff)).toString().substr(1)+fg
}var bV=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;
var bU=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g;
var bT={};
var be={};
function cD(fe,ff,fd,fh){var fg=fh;
if(typeof fh==="string"){fg=function(){return this[fh]()
}
}if(fe){be[fe]=fg
}if(ff){be[ff[0]]=function(){return cu(fg.apply(this,arguments),ff[1],ff[2])
}
}if(fd){be[fd]=function(){return this.localeData().ordinal(fg.apply(this,arguments),fe)
}
}}function aA(fd){if(fd.match(/\[[\s\S]/)){return fd.replace(/^\[|\]$/g,"")
}return fd.replace(/\\/g,"")
}function bC(ff){var fg=ff.match(bV),fd,fe;
for(fd=0,fe=fg.length;
fd<fe;
fd++){if(be[fg[fd]]){fg[fd]=be[fg[fd]]
}else{fg[fd]=aA(fg[fd])
}}return function(fj){var fh="",fi;
for(fi=0;
fi<fe;
fi++){fh+=bb(fg[fi])?fg[fi].call(fj,ff):fg[fi]
}return fh
}
}function ai(fd,fe){if(!fd.isValid()){return fd.localeData().invalidDate()
}fe=bK(fe,fd.localeData());
bT[fe]=bT[fe]||bC(fe);
return bT[fe](fd)
}function bK(fg,fd){var fe=5;
function ff(fh){return fd.longDateFormat(fh)||fh
}bU.lastIndex=0;
while(fe>=0&&bU.test(fg)){fg=fg.replace(bU,ff);
bU.lastIndex=0;
fe-=1
}return fg
}var aO=/\d/;
var aN=/\d\d/;
var aM=/\d{3}/;
var aL=/\d{4}/;
var aK=/[+-]?\d{6}/;
var av=/\d\d?/;
var cq=/\d\d\d\d?/;
var el=/\d\d\d\d\d\d?/;
var au=/\d{1,3}/;
var at=/\d{1,4}/;
var aq=/[+-]?\d{1,6}/;
var t=/\d+/;
var D=/[+-]?\d+/;
var bM=/Z|[+-]\d\d:?\d\d/gi;
var cK=/Z|[+-]\d\d(?::?\d\d)?/gi;
var eY=/[+-]?\d+(\.\d{1,3})?/;
var bd=/[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i;
var a7={};
function bi(fd,fe,ff){a7[fd]=bb(fe)?fe:function(fh,fg){return(fh&&ff)?ff:fe
}
}function bJ(fe,fd){if(!ds(a7,fe)){return new RegExp(dq(fe))
}return a7[fe](fd._strict,fd._locale)
}function dq(fd){return cm(fd.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(fe,fi,fh,fg,ff){return fi||fh||fg||ff
}))
}function cm(fd){return fd.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")
}var h={};
function bZ(fe,fg){var fd,ff=fg;
if(typeof fe==="string"){fe=[fe]
}if(s(fg)){ff=function(fh,fi){fi[fg]=cW(fh)
}
}for(fd=0;
fd<fe.length;
fd++){h[fe[fd]]=ff
}}function Z(fd,fe){bZ(fd,function(ff,fi,fg,fh){fg._w=fg._w||{};
fe(ff,fg._w,fg,fh)
})
}function w(ff,fd,fe){if(fd!=null&&ds(h,ff)){h[ff](fd,fe._a,fe,ff)
}}var eZ=0;
var k=1;
var eB=2;
var eO=3;
var dO=4;
var am=5;
var bO=6;
var co=7;
var j=8;
cD("Y",0,0,function(){var fd=this.year();
return fd<=9999?""+fd:"+"+fd
});
cD(0,["YY",2],0,function(){return this.year()%100
});
cD(0,["YYYY",4],0,"year");
cD(0,["YYYYY",5],0,"year");
cD(0,["YYYYYY",6,true],0,"year");
ck("year","y");
d2("year",1);
bi("Y",D);
bi("YY",av,aN);
bi("YYYY",at,aL);
bi("YYYYY",aq,aK);
bi("YYYYYY",aq,aK);
bZ(["YYYYY","YYYYYY"],eZ);
bZ("YYYY",function(fd,fe){fe[eZ]=fd.length===2?eK.parseTwoDigitYear(fd):cW(fd)
});
bZ("YY",function(fd,fe){fe[eZ]=eK.parseTwoDigitYear(fd)
});
bZ("Y",function(fd,fe){fe[eZ]=parseInt(fd,10)
});
function dM(fd){return d6(fd)?366:365
}function d6(fd){return(fd%4===0&&fd%100!==0)||fd%400===0
}eK.parseTwoDigitYear=function(fd){return cW(fd)+(cW(fd)>68?1900:2000)
};
var cM=ej("FullYear",true);
function c2(){return d6(this.year())
}function ej(fd,fe){return function(ff){if(ff!=null){aQ(this,fd,ff);
eK.updateOffset(this,fe);
return this
}else{return dH(this,fd)
}}
}function dH(fe,fd){return fe.isValid()?fe._d["get"+(fe._isUTC?"UTC":"")+fd]():NaN
}function aQ(fe,fd,ff){if(fe.isValid()&&!isNaN(ff)){if(fd==="FullYear"&&d6(fe.year())&&fe.month()===1&&fe.date()===29){fe._d["set"+(fe._isUTC?"UTC":"")+fd](ff,fe.month(),bL(ff,fe.month()))
}else{fe._d["set"+(fe._isUTC?"UTC":"")+fd](ff)
}}}function aD(fd){fd=cV(fd);
if(bb(this[fd])){return this[fd]()
}return this
}function ax(fd,fg){if(typeof fd==="object"){fd=dR(fd);
var ff=bv(fd);
for(var fe=0;
fe<ff.length;
fe++){this[ff[fe].unit](fd[ff[fe].unit])
}}else{fd=cV(fd);
if(bb(this[fd])){return this[fd](fg)
}}return this
}function ei(fe,fd){return((fe%fd)+fd)%fd
}var cX;
if(Array.prototype.indexOf){cX=Array.prototype.indexOf
}else{cX=function(fe){var fd;
for(fd=0;
fd<this.length;
++fd){if(this[fd]===fe){return fd
}}return -1
}
}function bL(fe,ff){if(isNaN(fe)||isNaN(ff)){return NaN
}var fd=ei(ff,12);
fe+=(ff-fd)/12;
return fd===1?(d6(fe)?29:28):(31-fd%7%2)
}cD("M",["MM",2],"Mo",function(){return this.month()+1
});
cD("MMM",0,0,function(fd){return this.localeData().monthsShort(this,fd)
});
cD("MMMM",0,0,function(fd){return this.localeData().months(this,fd)
});
ck("month","M");
d2("month",8);
bi("M",av);
bi("MM",av,aN);
bi("MMM",function(fe,fd){return fd.monthsShortRegex(fe)
});
bi("MMMM",function(fe,fd){return fd.monthsRegex(fe)
});
bZ(["M","MM"],function(fd,fe){fe[k]=cW(fd)-1
});
bZ(["MMM","MMMM"],function(fd,fh,fe,ff){var fg=fe._locale.monthsParse(fd,ff,fe._strict);
if(fg!=null){fh[k]=fg
}else{bg(fe).invalidMonth=fd
}});
var b8=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/;
var R="January_February_March_April_May_June_July_August_September_October_November_December".split("_");
function a5(fd,fe){if(!fd){return X(this._months)?this._months:this._months.standalone
}return X(this._months)?this._months[fd.month()]:this._months[(this._months.isFormat||b8).test(fe)?"format":"standalone"][fd.month()]
}var d7="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_");
function bf(fd,fe){if(!fd){return X(this._monthsShort)?this._monthsShort:this._monthsShort.standalone
}return X(this._monthsShort)?this._monthsShort[fd.month()]:this._monthsShort[b8.test(fe)?"format":"standalone"][fd.month()]
}function bH(fe,fj,fd){var fg,fh,fi,ff=fe.toLocaleLowerCase();
if(!this._monthsParse){this._monthsParse=[];
this._longMonthsParse=[];
this._shortMonthsParse=[];
for(fg=0;
fg<12;
++fg){fi=cB([2000,fg]);
this._shortMonthsParse[fg]=this.monthsShort(fi,"").toLocaleLowerCase();
this._longMonthsParse[fg]=this.months(fi,"").toLocaleLowerCase()
}}if(fd){if(fj==="MMM"){fh=cX.call(this._shortMonthsParse,ff);
return fh!==-1?fh:null
}else{fh=cX.call(this._longMonthsParse,ff);
return fh!==-1?fh:null
}}else{if(fj==="MMM"){fh=cX.call(this._shortMonthsParse,ff);
if(fh!==-1){return fh
}fh=cX.call(this._longMonthsParse,ff);
return fh!==-1?fh:null
}else{fh=cX.call(this._longMonthsParse,ff);
if(fh!==-1){return fh
}fh=cX.call(this._shortMonthsParse,ff);
return fh!==-1?fh:null
}}}function dh(fe,fi,fd){var ff,fh,fg;
if(this._monthsParseExact){return bH.call(this,fe,fi,fd)
}if(!this._monthsParse){this._monthsParse=[];
this._longMonthsParse=[];
this._shortMonthsParse=[]
}for(ff=0;
ff<12;
ff++){fh=cB([2000,ff]);
if(fd&&!this._longMonthsParse[ff]){this._longMonthsParse[ff]=new RegExp("^"+this.months(fh,"").replace(".","")+"$","i");
this._shortMonthsParse[ff]=new RegExp("^"+this.monthsShort(fh,"").replace(".","")+"$","i")
}if(!fd&&!this._monthsParse[ff]){fg="^"+this.months(fh,"")+"|^"+this.monthsShort(fh,"");
this._monthsParse[ff]=new RegExp(fg.replace(".",""),"i")
}if(fd&&fi==="MMMM"&&this._longMonthsParse[ff].test(fe)){return ff
}else{if(fd&&fi==="MMM"&&this._shortMonthsParse[ff].test(fe)){return ff
}else{if(!fd&&this._monthsParse[ff].test(fe)){return ff
}}}}}function aZ(fd,fe){var ff;
if(!fd.isValid()){return fd
}if(typeof fe==="string"){if(/^\d+$/.test(fe)){fe=cW(fe)
}else{fe=fd.localeData().monthsParse(fe);
if(!s(fe)){return fd
}}}ff=Math.min(fd.date(),bL(fd.year(),fe));
fd._d["set"+(fd._isUTC?"UTC":"")+"Month"](fe,ff);
return fd
}function eN(fd){if(fd!=null){aZ(this,fd);
eK.updateOffset(this,true);
return this
}else{return dH(this,"Month")
}}function bR(){return bL(this.year(),this.month())
}var dm=bd;
function dr(fd){if(this._monthsParseExact){if(!ds(this,"_monthsRegex")){dt.call(this)
}if(fd){return this._monthsShortStrictRegex
}else{return this._monthsShortRegex
}}else{if(!ds(this,"_monthsShortRegex")){this._monthsShortRegex=dm
}return this._monthsShortStrictRegex&&fd?this._monthsShortStrictRegex:this._monthsShortRegex
}}var eF=bd;
function c5(fd){if(this._monthsParseExact){if(!ds(this,"_monthsRegex")){dt.call(this)
}if(fd){return this._monthsStrictRegex
}else{return this._monthsRegex
}}else{if(!ds(this,"_monthsRegex")){this._monthsRegex=eF
}return this._monthsStrictRegex&&fd?this._monthsStrictRegex:this._monthsRegex
}}function dt(){function fi(fk,fj){return fj.length-fk.length
}var fh=[],fd=[],fg=[],fe,ff;
for(fe=0;
fe<12;
fe++){ff=cB([2000,fe]);
fh.push(this.monthsShort(ff,""));
fd.push(this.months(ff,""));
fg.push(this.months(ff,""));
fg.push(this.monthsShort(ff,""))
}fh.sort(fi);
fd.sort(fi);
fg.sort(fi);
for(fe=0;
fe<12;
fe++){fh[fe]=cm(fh[fe]);
fd[fe]=cm(fd[fe])
}for(fe=0;
fe<24;
fe++){fg[fe]=cm(fg[fe])
}this._monthsRegex=new RegExp("^("+fg.join("|")+")","i");
this._monthsShortRegex=this._monthsRegex;
this._monthsStrictRegex=new RegExp("^("+fd.join("|")+")","i");
this._monthsShortStrictRegex=new RegExp("^("+fh.join("|")+")","i")
}function ef(fk,fd,fi,fh,fj,fg,ff){var fe;
if(fk<100&&fk>=0){fe=new Date(fk+400,fd,fi,fh,fj,fg,ff);
if(isFinite(fe.getFullYear())){fe.setFullYear(fk)
}}else{fe=new Date(fk,fd,fi,fh,fj,fg,ff)
}return fe
}function dB(ff){var fe;
if(ff<100&&ff>=0){var fd=Array.prototype.slice.call(arguments);
fd[0]=ff+400;
fe=new Date(Date.UTC.apply(null,fd));
if(isFinite(fe.getUTCFullYear())){fe.setUTCFullYear(ff)
}}else{fe=new Date(Date.UTC.apply(null,arguments))
}return fe
}function bn(fe,fh,fg){var fd=7+fh-fg,ff=(7+dB(fe,0,fd).getUTCDay()-fh)%7;
return -ff+fd-1
}function bF(fg,fe,ff,fm,fk){var fl=(7+ff-fm)%7,fd=bn(fg,fm,fk),fi=1+7*(fe-1)+fl+fd,fj,fh;
if(fi<=0){fj=fg-1;
fh=dM(fj)+fi
}else{if(fi>dM(fg)){fj=fg+1;
fh=fi-dM(fg)
}else{fj=fg;
fh=fi
}}return{year:fj,dayOfYear:fh}
}function ez(fh,fj,fi){var ff=bn(fh.year(),fj,fi),fg=Math.floor((fh.dayOfYear()-ff-1)/7)+1,fd,fe;
if(fg<1){fe=fh.year()-1;
fd=fg+G(fe,fj,fi)
}else{if(fg>G(fh.year(),fj,fi)){fd=fg-G(fh.year(),fj,fi);
fe=fh.year()+1
}else{fe=fh.year();
fd=fg
}}return{week:fd,year:fe}
}function G(fe,fh,ff){var fd=bn(fe,fh,ff),fg=bn(fe+1,fh,ff);
return(dM(fe)-fd+fg)/7
}cD("w",["ww",2],"wo","week");
cD("W",["WW",2],"Wo","isoWeek");
ck("week","w");
ck("isoWeek","W");
d2("week",5);
d2("isoWeek",5);
bi("w",av);
bi("ww",av,aN);
bi("W",av);
bi("WW",av,aN);
Z(["w","ww","W","WW"],function(fd,fg,fe,ff){fg[ff.substr(0,1)]=cW(fd)
});
function bt(fd){return ez(fd,this._week.dow,this._week.doy).week
}var b7={dow:0,doy:6};
function ak(){return this._week.dow
}function df(){return this._week.doy
}function L(fd){var fe=this.localeData().week(this);
return fd==null?fe:this.add((fd-fe)*7,"d")
}function z(fd){var fe=ez(this,1,4).week;
return fd==null?fe:this.add((fd-fe)*7,"d")
}cD("d",0,"do","day");
cD("dd",0,0,function(fd){return this.localeData().weekdaysMin(this,fd)
});
cD("ddd",0,0,function(fd){return this.localeData().weekdaysShort(this,fd)
});
cD("dddd",0,0,function(fd){return this.localeData().weekdays(this,fd)
});
cD("e",0,0,"weekday");
cD("E",0,0,"isoWeekday");
ck("day","d");
ck("weekday","e");
ck("isoWeekday","E");
d2("day",11);
d2("weekday",11);
d2("isoWeekday",11);
bi("d",av);
bi("e",av);
bi("E",av);
bi("dd",function(fe,fd){return fd.weekdaysMinRegex(fe)
});
bi("ddd",function(fe,fd){return fd.weekdaysShortRegex(fe)
});
bi("dddd",function(fe,fd){return fd.weekdaysRegex(fe)
});
Z(["dd","ddd","dddd"],function(fd,fg,fe,ff){var fh=fe._locale.weekdaysParse(fd,ff,fe._strict);
if(fh!=null){fg.d=fh
}else{bg(fe).invalidWeekday=fd
}});
Z(["d","e","E"],function(fd,fg,fe,ff){fg[ff]=cW(fd)
});
function bm(fe,fd){if(typeof fe!=="string"){return fe
}if(!isNaN(fe)){return parseInt(fe,10)
}fe=fd.weekdaysParse(fe);
if(typeof fe==="number"){return fe
}return null
}function bI(fe,fd){if(typeof fe==="string"){return fd.weekdaysParse(fe)%7||7
}return isNaN(fe)?null:fe
}function ce(fd,fe){return fd.slice(fe,7).concat(fd.slice(0,fe))
}var U="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_");
function aB(fd,ff){var fe=X(this._weekdays)?this._weekdays:this._weekdays[(fd&&fd!==true&&this._weekdays.isFormat.test(ff))?"format":"standalone"];
return(fd===true)?ce(fe,this._week.dow):(fd)?fe[fd.day()]:fe
}var m="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_");
function O(fd){return(fd===true)?ce(this._weekdaysShort,this._week.dow):(fd)?this._weekdaysShort[fd.day()]:this._weekdaysShort
}var by="Su_Mo_Tu_We_Th_Fr_Sa".split("_");
function eL(fd){return(fd===true)?ce(this._weekdaysMin,this._week.dow):(fd)?this._weekdaysMin[fd.day()]:this._weekdaysMin
}function dT(fi,fj,fd){var ff,fg,fh,fe=fi.toLocaleLowerCase();
if(!this._weekdaysParse){this._weekdaysParse=[];
this._shortWeekdaysParse=[];
this._minWeekdaysParse=[];
for(ff=0;
ff<7;
++ff){fh=cB([2000,1]).day(ff);
this._minWeekdaysParse[ff]=this.weekdaysMin(fh,"").toLocaleLowerCase();
this._shortWeekdaysParse[ff]=this.weekdaysShort(fh,"").toLocaleLowerCase();
this._weekdaysParse[ff]=this.weekdays(fh,"").toLocaleLowerCase()
}}if(fd){if(fj==="dddd"){fg=cX.call(this._weekdaysParse,fe);
return fg!==-1?fg:null
}else{if(fj==="ddd"){fg=cX.call(this._shortWeekdaysParse,fe);
return fg!==-1?fg:null
}else{fg=cX.call(this._minWeekdaysParse,fe);
return fg!==-1?fg:null
}}}else{if(fj==="dddd"){fg=cX.call(this._weekdaysParse,fe);
if(fg!==-1){return fg
}fg=cX.call(this._shortWeekdaysParse,fe);
if(fg!==-1){return fg
}fg=cX.call(this._minWeekdaysParse,fe);
return fg!==-1?fg:null
}else{if(fj==="ddd"){fg=cX.call(this._shortWeekdaysParse,fe);
if(fg!==-1){return fg
}fg=cX.call(this._weekdaysParse,fe);
if(fg!==-1){return fg
}fg=cX.call(this._minWeekdaysParse,fe);
return fg!==-1?fg:null
}else{fg=cX.call(this._minWeekdaysParse,fe);
if(fg!==-1){return fg
}fg=cX.call(this._weekdaysParse,fe);
if(fg!==-1){return fg
}fg=cX.call(this._shortWeekdaysParse,fe);
return fg!==-1?fg:null
}}}}function bQ(fh,fi,fd){var fe,fg,ff;
if(this._weekdaysParseExact){return dT.call(this,fh,fi,fd)
}if(!this._weekdaysParse){this._weekdaysParse=[];
this._minWeekdaysParse=[];
this._shortWeekdaysParse=[];
this._fullWeekdaysParse=[]
}for(fe=0;
fe<7;
fe++){fg=cB([2000,1]).day(fe);
if(fd&&!this._fullWeekdaysParse[fe]){this._fullWeekdaysParse[fe]=new RegExp("^"+this.weekdays(fg,"").replace(".","\\.?")+"$","i");
this._shortWeekdaysParse[fe]=new RegExp("^"+this.weekdaysShort(fg,"").replace(".","\\.?")+"$","i");
this._minWeekdaysParse[fe]=new RegExp("^"+this.weekdaysMin(fg,"").replace(".","\\.?")+"$","i")
}if(!this._weekdaysParse[fe]){ff="^"+this.weekdays(fg,"")+"|^"+this.weekdaysShort(fg,"")+"|^"+this.weekdaysMin(fg,"");
this._weekdaysParse[fe]=new RegExp(ff.replace(".",""),"i")
}if(fd&&fi==="dddd"&&this._fullWeekdaysParse[fe].test(fh)){return fe
}else{if(fd&&fi==="ddd"&&this._shortWeekdaysParse[fe].test(fh)){return fe
}else{if(fd&&fi==="dd"&&this._minWeekdaysParse[fe].test(fh)){return fe
}else{if(!fd&&this._weekdaysParse[fe].test(fh)){return fe
}}}}}}function er(fe){if(!this.isValid()){return fe!=null?this:NaN
}var fd=this._isUTC?this._d.getUTCDay():this._d.getDay();
if(fe!=null){fe=bm(fe,this.localeData());
return this.add(fe-fd,"d")
}else{return fd
}}function ag(fd){if(!this.isValid()){return fd!=null?this:NaN
}var fe=(this.day()+7-this.localeData()._week.dow)%7;
return fd==null?fe:this.add(fd-fe,"d")
}function cz(fd){if(!this.isValid()){return fd!=null?this:NaN
}if(fd!=null){var fe=bI(fd,this.localeData());
return this.day(this.day()%7?fe:fe-7)
}else{return this.day()||7
}}var ae=bd;
function e1(fd){if(this._weekdaysParseExact){if(!ds(this,"_weekdaysRegex")){B.call(this)
}if(fd){return this._weekdaysStrictRegex
}else{return this._weekdaysRegex
}}else{if(!ds(this,"_weekdaysRegex")){this._weekdaysRegex=ae
}return this._weekdaysStrictRegex&&fd?this._weekdaysStrictRegex:this._weekdaysRegex
}}var y=bd;
function aJ(fd){if(this._weekdaysParseExact){if(!ds(this,"_weekdaysRegex")){B.call(this)
}if(fd){return this._weekdaysShortStrictRegex
}else{return this._weekdaysShortRegex
}}else{if(!ds(this,"_weekdaysShortRegex")){this._weekdaysShortRegex=y
}return this._weekdaysShortStrictRegex&&fd?this._weekdaysShortStrictRegex:this._weekdaysShortRegex
}}var d0=bd;
function F(fd){if(this._weekdaysParseExact){if(!ds(this,"_weekdaysRegex")){B.call(this)
}if(fd){return this._weekdaysMinStrictRegex
}else{return this._weekdaysMinRegex
}}else{if(!ds(this,"_weekdaysMinRegex")){this._weekdaysMinRegex=d0
}return this._weekdaysMinStrictRegex&&fd?this._weekdaysMinStrictRegex:this._weekdaysMinRegex
}}function B(){function fg(fo,fn){return fn.length-fo.length
}var fi=[],fj=[],fm=[],fd=[],fh,ff,fe,fk,fl;
for(fh=0;
fh<7;
fh++){ff=cB([2000,1]).day(fh);
fe=this.weekdaysMin(ff,"");
fk=this.weekdaysShort(ff,"");
fl=this.weekdays(ff,"");
fi.push(fe);
fj.push(fk);
fm.push(fl);
fd.push(fe);
fd.push(fk);
fd.push(fl)
}fi.sort(fg);
fj.sort(fg);
fm.sort(fg);
fd.sort(fg);
for(fh=0;
fh<7;
fh++){fj[fh]=cm(fj[fh]);
fm[fh]=cm(fm[fh]);
fd[fh]=cm(fd[fh])
}this._weekdaysRegex=new RegExp("^("+fd.join("|")+")","i");
this._weekdaysShortRegex=this._weekdaysRegex;
this._weekdaysMinRegex=this._weekdaysRegex;
this._weekdaysStrictRegex=new RegExp("^("+fm.join("|")+")","i");
this._weekdaysShortStrictRegex=new RegExp("^("+fj.join("|")+")","i");
this._weekdaysMinStrictRegex=new RegExp("^("+fi.join("|")+")","i")
}function dF(){return this.hours()%12||12
}function Q(){return this.hours()||24
}cD("H",["HH",2],0,"hour");
cD("h",["hh",2],0,dF);
cD("k",["kk",2],0,Q);
cD("hmm",0,0,function(){return""+dF.apply(this)+cu(this.minutes(),2)
});
cD("hmmss",0,0,function(){return""+dF.apply(this)+cu(this.minutes(),2)+cu(this.seconds(),2)
});
cD("Hmm",0,0,function(){return""+this.hours()+cu(this.minutes(),2)
});
cD("Hmmss",0,0,function(){return""+this.hours()+cu(this.minutes(),2)+cu(this.seconds(),2)
});
function eu(fd,fe){cD(fd,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),fe)
})
}eu("a",true);
eu("A",false);
ck("hour","h");
d2("hour",13);
function T(fe,fd){return fd._meridiemParse
}bi("a",T);
bi("A",T);
bi("H",av);
bi("h",av);
bi("k",av);
bi("HH",av,aN);
bi("hh",av,aN);
bi("kk",av,aN);
bi("hmm",cq);
bi("hmmss",el);
bi("Hmm",cq);
bi("Hmmss",el);
bZ(["H","HH"],eO);
bZ(["k","kk"],function(fe,fg,ff){var fd=cW(fe);
fg[eO]=fd===24?0:fd
});
bZ(["a","A"],function(fd,ff,fe){fe._isPm=fe._locale.isPM(fd);
fe._meridiem=fd
});
bZ(["h","hh"],function(fd,ff,fe){ff[eO]=cW(fd);
bg(fe).bigHour=true
});
bZ("hmm",function(fd,fg,fe){var ff=fd.length-2;
fg[eO]=cW(fd.substr(0,ff));
fg[dO]=cW(fd.substr(ff));
bg(fe).bigHour=true
});
bZ("hmmss",function(fd,fh,fe){var fg=fd.length-4;
var ff=fd.length-2;
fh[eO]=cW(fd.substr(0,fg));
fh[dO]=cW(fd.substr(fg,2));
fh[am]=cW(fd.substr(ff));
bg(fe).bigHour=true
});
bZ("Hmm",function(fd,fg,fe){var ff=fd.length-2;
fg[eO]=cW(fd.substr(0,ff));
fg[dO]=cW(fd.substr(ff))
});
bZ("Hmmss",function(fd,fh,fe){var fg=fd.length-4;
var ff=fd.length-2;
fh[eO]=cW(fd.substr(0,fg));
fh[dO]=cW(fd.substr(fg,2));
fh[am]=cW(fd.substr(ff))
});
function cj(fd){return((fd+"").toLowerCase().charAt(0)==="p")
}var ca=/[ap]\.?m?\.?/i;
function aX(fd,fe,ff){if(fd>11){return ff?"pm":"PM"
}else{return ff?"am":"AM"
}}var cv=ej("Hours",true);
var b6={calendar:cp,longDateFormat:d3,invalidDate:ap,ordinal:cb,dayOfMonthOrdinalParse:fa,relativeTime:eH,months:R,monthsShort:d7,week:b7,weekdays:U,weekdaysMin:by,weekdaysShort:m,meridiemParse:ca};
var bD={};
var n={};
var c4;
function dv(fd){return fd?fd.toLowerCase().replace("_","-"):fd
}function c3(fi){var fg=0,fe,fh,fd,ff;
while(fg<fi.length){ff=dv(fi[fg]).split("-");
fe=ff.length;
fh=dv(fi[fg+1]);
fh=fh?fh.split("-"):null;
while(fe>0){fd=aF(ff.slice(0,fe).join("-"));
if(fd){return fd
}if(fh&&fh.length>=fe&&b4(ff,fh,true)>=fe-1){break
}fe--
}fg++
}return c4
}function aF(fd){var fg=null;
if(!bD[fd]&&(typeof module!=="undefined")&&module&&module.exports){try{fg=c4._abbr;
var fe=require;
fe("./locale/"+fd);
C(fg)
}catch(ff){}}return bD[fd]
}function C(fe,fd){var ff;
if(fe){if(H(fd)){ff=S(fe)
}else{ff=cG(fe,fd)
}if(ff){c4=ff
}else{if((typeof console!=="undefined")&&console.warn){console.warn("Locale "+fe+" not found. Did you forget to load it?")
}}}return c4._abbr
}function cG(ff,fe){if(fe!==null){var fd,fg=b6;
fe.abbr=ff;
if(bD[ff]!=null){eX("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info.");
fg=bD[ff]._config
}else{if(fe.parentLocale!=null){if(bD[fe.parentLocale]!=null){fg=bD[fe.parentLocale]._config
}else{fd=aF(fe.parentLocale);
if(fd!=null){fg=fd._config
}else{if(!n[fe.parentLocale]){n[fe.parentLocale]=[]
}n[fe.parentLocale].push({name:ff,config:fe});
return null
}}}}bD[ff]=new cI(ee(fg,fe));
if(n[ff]){n[ff].forEach(function(fh){cG(fh.name,fh.config)
})
}C(ff);
return bD[ff]
}else{delete bD[ff];
return null
}}function es(ff,fe){if(fe!=null){var fd,fh,fg=b6;
fh=aF(ff);
if(fh!=null){fg=fh._config
}fe=ee(fg,fe);
fd=new cI(fe);
fd.parentLocale=bD[ff];
bD[ff]=fd;
C(ff)
}else{if(bD[ff]!=null){if(bD[ff].parentLocale!=null){bD[ff]=bD[ff].parentLocale
}else{if(bD[ff]!=null){delete bD[ff]
}}}}return bD[ff]
}function S(fe){var fd;
if(fe&&fe._locale&&fe._locale._abbr){fe=fe._locale._abbr
}if(!fe){return c4
}if(!X(fe)){fd=aF(fe);
if(fd){return fd
}fe=[fe]
}return c3(fe)
}function b9(){return b1(bD)
}function cT(fd){var ff;
var fe=fd._a;
if(fe&&bg(fd).overflow===-2){ff=fe[k]<0||fe[k]>11?k:fe[eB]<1||fe[eB]>bL(fe[eZ],fe[k])?eB:fe[eO]<0||fe[eO]>24||(fe[eO]===24&&(fe[dO]!==0||fe[am]!==0||fe[bO]!==0))?eO:fe[dO]<0||fe[dO]>59?dO:fe[am]<0||fe[am]>59?am:fe[bO]<0||fe[bO]>999?bO:-1;
if(bg(fd)._overflowDayOfYear&&(ff<eZ||ff>eB)){ff=eB
}if(bg(fd)._overflowWeeks&&ff===-1){ff=co
}if(bg(fd)._overflowWeekday&&ff===-1){ff=j
}bg(fd).overflow=ff
}return fd
}function eg(fe,fd,ff){if(fe!=null){return fe
}if(fd!=null){return fd
}return ff
}function a6(fe){var fd=new Date(eK.now());
if(fe._useUTC){return[fd.getUTCFullYear(),fd.getUTCMonth(),fd.getUTCDate()]
}return[fd.getFullYear(),fd.getMonth(),fd.getDate()]
}function f(fh){var fi,fg,ff=[],fe,fj,fd;
if(fh._d){return
}fe=a6(fh);
if(fh._w&&fh._a[eB]==null&&fh._a[k]==null){c8(fh)
}if(fh._dayOfYear!=null){fd=eg(fh._a[eZ],fe[eZ]);
if(fh._dayOfYear>dM(fd)||fh._dayOfYear===0){bg(fh)._overflowDayOfYear=true
}fg=dB(fd,0,fh._dayOfYear);
fh._a[k]=fg.getUTCMonth();
fh._a[eB]=fg.getUTCDate()
}for(fi=0;
fi<3&&fh._a[fi]==null;
++fi){fh._a[fi]=ff[fi]=fe[fi]
}for(;
fi<7;
fi++){fh._a[fi]=ff[fi]=(fh._a[fi]==null)?(fi===2?1:0):fh._a[fi]
}if(fh._a[eO]===24&&fh._a[dO]===0&&fh._a[am]===0&&fh._a[bO]===0){fh._nextDay=true;
fh._a[eO]=0
}fh._d=(fh._useUTC?dB:ef).apply(null,ff);
fj=fh._useUTC?fh._d.getUTCDay():fh._d.getDay();
if(fh._tzm!=null){fh._d.setUTCMinutes(fh._d.getUTCMinutes()-fh._tzm)
}if(fh._nextDay){fh._a[eO]=24
}if(fh._w&&typeof fh._w.d!=="undefined"&&fh._w.d!==fj){bg(fh).weekdayMismatch=true
}}function c8(fg){var fj,fd,fe,fh,fm,fk,fl,fi;
fj=fg._w;
if(fj.GG!=null||fj.W!=null||fj.E!=null){fm=1;
fk=4;
fd=eg(fj.GG,fg._a[eZ],ez(dI(),1,4).year);
fe=eg(fj.W,1);
fh=eg(fj.E,1);
if(fh<1||fh>7){fi=true
}}else{fm=fg._locale._week.dow;
fk=fg._locale._week.doy;
var ff=ez(dI(),fm,fk);
fd=eg(fj.gg,fg._a[eZ],ff.year);
fe=eg(fj.w,ff.week);
if(fj.d!=null){fh=fj.d;
if(fh<0||fh>6){fi=true
}}else{if(fj.e!=null){fh=fj.e+fm;
if(fj.e<0||fj.e>6){fi=true
}}else{fh=fm
}}}if(fe<1||fe>G(fd,fm,fk)){bg(fg)._overflowWeeks=true
}else{if(fi!=null){bg(fg)._overflowWeekday=true
}else{fl=bF(fd,fe,fh,fm,fk);
fg._a[eZ]=fl.year;
fg._dayOfYear=fl.dayOfYear
}}}var l=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;
var aW=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;
var cL=/Z|[+-]\d\d(?::?\d\d)?/;
var cY=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,false],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,false],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,false],["YYYYDDD",/\d{7}/]];
var cw=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]];
var b0=/^\/?Date\((\-?\d+)/i;
function E(fe){var fi,fg,fk=fe._i,fj=l.exec(fk)||aW.exec(fk),fl,fd,fh,ff;
if(fj){bg(fe).iso=true;
for(fi=0,fg=cY.length;
fi<fg;
fi++){if(cY[fi][1].exec(fj[1])){fd=cY[fi][0];
fl=cY[fi][2]!==false;
break
}}if(fd==null){fe._isValid=false;
return
}if(fj[3]){for(fi=0,fg=cw.length;
fi<fg;
fi++){if(cw[fi][1].exec(fj[3])){fh=(fj[2]||" ")+cw[fi][0];
break
}}if(fh==null){fe._isValid=false;
return
}}if(!fl&&fh!=null){fe._isValid=false;
return
}if(fj[4]){if(cL.exec(fj[4])){ff="Z"
}else{fe._isValid=false;
return
}}fe._f=fd+(fh||"")+(ff||"");
b2(fe)
}else{fe._isValid=false
}}var dn=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;
function eA(fh,fg,fi,fe,fj,ff){var fd=[ct(fh),d7.indexOf(fg),parseInt(fi,10),parseInt(fe,10),parseInt(fj,10)];
if(ff){fd.push(parseInt(ff,10))
}return fd
}function ct(fd){var fe=parseInt(fd,10);
if(fe<=49){return 2000+fe
}else{if(fe<=999){return 1900+fe
}}return fe
}function aP(fd){return fd.replace(/\([^)]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").replace(/^\s\s*/,"").replace(/\s\s*$/,"")
}function az(fd,fh,ff){if(fd){var fg=m.indexOf(fd),fe=new Date(fh[0],fh[1],fh[2]).getDay();
if(fg!==fe){bg(ff).weekdayMismatch=true;
ff._isValid=false;
return false
}}return true
}var bz={UT:0,GMT:0,EDT:-4*60,EST:-5*60,CDT:-5*60,CST:-6*60,MDT:-6*60,MST:-7*60,PDT:-7*60,PST:-8*60};
function e8(fi,fe,fg){if(fi){return bz[fi]
}else{if(fe){return 0
}else{var fh=parseInt(fg,10);
var fd=fh%100,ff=(fh-fd)/100;
return ff*60+fd
}}}function bX(fe){var fd=dn.exec(aP(fe._i));
if(fd){var ff=eA(fd[4],fd[3],fd[2],fd[5],fd[6],fd[7]);
if(!az(fd[1],ff,fe)){return
}fe._a=ff;
fe._tzm=e8(fd[8],fd[9],fd[10]);
fe._d=dB.apply(null,fe._a);
fe._d.setUTCMinutes(fe._d.getUTCMinutes()-fe._tzm);
bg(fe).rfc2822=true
}else{fe._isValid=false
}}function bh(fe){var fd=b0.exec(fe._i);
if(fd!==null){fe._d=new Date(+fd[1]);
return
}E(fe);
if(fe._isValid===false){delete fe._isValid
}else{return
}bX(fe);
if(fe._isValid===false){delete fe._isValid
}else{return
}eK.createFromInputFallback(fe)
}eK.createFromInputFallback=em("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",function(fd){fd._d=new Date(fd._i+(fd._useUTC?" UTC":""))
});
eK.ISO_8601=function(){};
eK.RFC_2822=function(){};
function b2(ff){if(ff._f===eK.ISO_8601){E(ff);
return
}if(ff._f===eK.RFC_2822){bX(ff);
return
}ff._a=[];
bg(ff).empty=true;
var fi=""+ff._i,fh,fe,fl,fg,fk,fd=fi.length,fj=0;
fl=bK(ff._f,ff._locale).match(bV)||[];
for(fh=0;
fh<fl.length;
fh++){fg=fl[fh];
fe=(fi.match(bJ(fg,ff))||[])[0];
if(fe){fk=fi.substr(0,fi.indexOf(fe));
if(fk.length>0){bg(ff).unusedInput.push(fk)
}fi=fi.slice(fi.indexOf(fe)+fe.length);
fj+=fe.length
}if(be[fg]){if(fe){bg(ff).empty=false
}else{bg(ff).unusedTokens.push(fg)
}w(fg,fe,ff)
}else{if(ff._strict&&!fe){bg(ff).unusedTokens.push(fg)
}}}bg(ff).charsLeftOver=fd-fj;
if(fi.length>0){bg(ff).unusedInput.push(fi)
}if(ff._a[eO]<=12&&bg(ff).bigHour===true&&ff._a[eO]>0){bg(ff).bigHour=undefined
}bg(ff).parsedDateParts=ff._a.slice(0);
bg(ff).meridiem=ff._meridiem;
ff._a[eO]=en(ff._locale,ff._a[eO],ff._meridiem);
f(ff);
cT(ff)
}function en(fd,ff,fg){var fe;
if(fg==null){return ff
}if(fd.meridiemHour!=null){return fd.meridiemHour(ff,fg)
}else{if(fd.isPM!=null){fe=fd.isPM(fg);
if(fe&&ff<12){ff+=12
}if(!fe&&ff===12){ff=0
}return ff
}else{return ff
}}}function dK(fd){var fh,ff,fg,fe,fi;
if(fd._f.length===0){bg(fd).invalidFormat=true;
fd._d=new Date(NaN);
return
}for(fe=0;
fe<fd._f.length;
fe++){fi=0;
fh=r({},fd);
if(fd._useUTC!=null){fh._useUTC=fd._useUTC
}fh._f=fd._f[fe];
b2(fh);
if(!ar(fh)){continue
}fi+=bg(fh).charsLeftOver;
fi+=bg(fh).unusedTokens.length*10;
bg(fh).score=fi;
if(fg==null||fi<fg){fg=fi;
ff=fh
}}e5(fd,ff||fh)
}function a8(fd){if(fd._d){return
}var fe=dR(fd._i);
fd._a=bs([fe.year,fe.month,fe.day||fe.date,fe.hour,fe.minute,fe.second,fe.millisecond],function(ff){return ff&&parseInt(ff,10)
});
f(fd)
}function ao(fd){var fe=new ey(cT(bw(fd)));
if(fe._nextDay){fe.add(1,"d");
fe._nextDay=undefined
}return fe
}function bw(fe){var fd=fe._i,ff=fe._f;
fe._locale=fe._locale||S(fe._l);
if(fd===null||(ff===undefined&&fd==="")){return P({nullInput:true})
}if(typeof fd==="string"){fe._i=fd=fe._locale.preparse(fd)
}if(ch(fd)){return new ey(cT(fd))
}else{if(eD(fd)){fe._d=fd
}else{if(X(ff)){dK(fe)
}else{if(ff){b2(fe)
}else{cA(fe)
}}}}if(!ar(fe)){fe._d=null
}return fe
}function cA(fe){var fd=fe._i;
if(H(fd)){fe._d=new Date(eK.now())
}else{if(eD(fd)){fe._d=new Date(fd.valueOf())
}else{if(typeof fd==="string"){bh(fe)
}else{if(X(fd)){fe._a=bs(fd.slice(0),function(ff){return parseInt(ff,10)
});
f(fe)
}else{if(x(fd)){a8(fe)
}else{if(s(fd)){fe._d=new Date(fd)
}else{eK.createFromInputFallback(fe)
}}}}}}}function af(fg,fh,fd,ff,fe){var fi={};
if(fd===true||fd===false){ff=fd;
fd=undefined
}if((x(fg)&&cn(fg))||(X(fg)&&fg.length===0)){fg=undefined
}fi._isAMomentObject=true;
fi._useUTC=fi._isUTC=fe;
fi._l=fd;
fi._i=fg;
fi._f=fh;
fi._strict=ff;
return ao(fi)
}function dI(ff,fg,fd,fe){return af(ff,fg,fd,fe,false)
}var cO=em("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var fd=dI.apply(null,arguments);
if(this.isValid()&&fd.isValid()){return fd<this?this:fd
}else{return P()
}});
var ev=em("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var fd=dI.apply(null,arguments);
if(this.isValid()&&fd.isValid()){return fd>this?this:fd
}else{return P()
}});
function e6(ff,fg){var fe,fd;
if(fg.length===1&&X(fg[0])){fg=fg[0]
}if(!fg.length){return dI()
}fe=fg[0];
for(fd=1;
fd<fg.length;
++fd){if(!fg[fd].isValid()||fg[fd][ff](fe)){fe=fg[fd]
}}return fe
}function p(){var fd=[].slice.call(arguments,0);
return e6("isBefore",fd)
}function bq(){var fd=[].slice.call(arguments,0);
return e6("isAfter",fd)
}var cE=function(){return Date.now?Date.now():+(new Date())
};
var e4=["year","quarter","month","week","day","hour","minute","second","millisecond"];
function aw(fe){for(var fg in fe){if(!(cX.call(e4,fg)!==-1&&(fe[fg]==null||!isNaN(fe[fg])))){return false
}}var fd=false;
for(var ff=0;
ff<e4.length;
++ff){if(fe[e4[ff]]){if(fd){return false
}if(parseFloat(fe[e4[ff]])!==cW(fe[e4[ff]])){fd=true
}}}return true
}function u(){return this._isValid
}function a0(){return dl(NaN)
}function dU(fi){var fk=dR(fi),fj=fk.year||0,fe=fk.quarter||0,ff=fk.month||0,fd=fk.week||fk.isoWeek||0,fn=fk.day||0,fl=fk.hour||0,fh=fk.minute||0,fm=fk.second||0,fg=fk.millisecond||0;
this._isValid=aw(fk);
this._milliseconds=+fg+fm*1000+fh*60000+fl*1000*60*60;
this._days=+fn+fd*7;
this._months=+ff+fe*3+fj*12;
this._data={};
this._locale=S();
this._bubble()
}function ah(fd){return fd instanceof dU
}function eq(fd){if(fd<0){return Math.round(-1*fd)*-1
}else{return Math.round(fd)
}}function bB(fd,fe){cD(fd,0,0,function(){var fg=this.utcOffset();
var ff="+";
if(fg<0){fg=-fg;
ff="-"
}return ff+cu(~~(fg/60),2)+fe+cu(~~(fg)%60,2)
})
}bB("Z",":");
bB("ZZ","");
bi("Z",cK);
bi("ZZ",cK);
bZ(["Z","ZZ"],function(fd,ff,fe){fe._useUTC=true;
fe._tzm=o(cK,fd)
});
var eJ=/([\+\-]|\d\d)/gi;
function o(fi,fe){var fg=(fe||"").match(fi);
if(fg===null){return null
}var fd=fg[fg.length-1]||[];
var fh=(fd+"").match(eJ)||["-",0,0];
var ff=+(fh[1]*60)+cW(fh[2]);
return ff===0?0:fh[0]==="+"?ff:-ff
}function aG(fd,fe){var ff,fg;
if(fe._isUTC){ff=fe.clone();
fg=(ch(fd)||eD(fd)?fd.valueOf():dI(fd).valueOf())-ff.valueOf();
ff._d.setTime(ff._d.valueOf()+fg);
eK.updateOffset(ff,false);
return ff
}else{return dI(fd).local()
}}function aS(fd){return -Math.round(fd._d.getTimezoneOffset()/15)*15
}eK.updateOffset=function(){};
function dC(fd,fg,fh){var ff=this._offset||0,fe;
if(!this.isValid()){return fd!=null?this:NaN
}if(fd!=null){if(typeof fd==="string"){fd=o(cK,fd);
if(fd===null){return this
}}else{if(Math.abs(fd)<16&&!fh){fd=fd*60
}}if(!this._isUTC&&fg){fe=aS(this)
}this._offset=fd;
this._isUTC=true;
if(fe!=null){this.add(fe,"m")
}if(ff!==fd){if(!fg||this._changeInProgress){a3(this,dl(fd-ff,"m"),1,false)
}else{if(!this._changeInProgress){this._changeInProgress=true;
eK.updateOffset(this,true);
this._changeInProgress=null
}}}return this
}else{return this._isUTC?ff:aS(this)
}}function dx(fd,fe){if(fd!=null){if(typeof fd!=="string"){fd=-fd
}this.utcOffset(fd,fe);
return this
}else{return -this.utcOffset()
}}function a4(fd){return this.utcOffset(0,fd)
}function dz(fd){if(this._isUTC){this.utcOffset(0,fd);
this._isUTC=false;
if(fd){this.subtract(aS(this),"m")
}}return this
}function cd(){if(this._tzm!=null){this.utcOffset(this._tzm,false,true)
}else{if(typeof this._i==="string"){var fd=o(bM,this._i);
if(fd!=null){this.utcOffset(fd)
}else{this.utcOffset(0,true)
}}}return this
}function aE(fd){if(!this.isValid()){return false
}fd=fd?dI(fd).utcOffset():0;
return(this.utcOffset()-fd)%60===0
}function aR(){return(this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset())
}function c(){if(!H(this._isDSTShifted)){return this._isDSTShifted
}var fe={};
r(fe,this);
fe=bw(fe);
if(fe._a){var fd=fe._isUTC?cB(fe._a):dI(fe._a);
this._isDSTShifted=this.isValid()&&b4(fe._a,fd.toArray())>0
}else{this._isDSTShifted=false
}return this._isDSTShifted
}function dD(){return this.isValid()?!this._isUTC:false
}function bW(){return this.isValid()?this._isUTC:false
}function dJ(){return this.isValid()?this._isUTC&&this._offset===0:false
}var ab=/^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/;
var cC=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
function dl(ff,fi){var fj=ff,fh=null,fe,fg,fd;
if(ah(ff)){fj={ms:ff._milliseconds,d:ff._days,M:ff._months}
}else{if(s(ff)){fj={};
if(fi){fj[fi]=ff
}else{fj.milliseconds=ff
}}else{if(!!(fh=ab.exec(ff))){fe=(fh[1]==="-")?-1:1;
fj={y:0,d:cW(fh[eB])*fe,h:cW(fh[eO])*fe,m:cW(fh[dO])*fe,s:cW(fh[am])*fe,ms:cW(eq(fh[bO]*1000))*fe}
}else{if(!!(fh=cC.exec(ff))){fe=(fh[1]==="-")?-1:1;
fj={y:e0(fh[2],fe),M:e0(fh[3],fe),w:e0(fh[4],fe),d:e0(fh[5],fe),h:e0(fh[6],fe),m:e0(fh[7],fe),s:e0(fh[8],fe)}
}else{if(fj==null){fj={}
}else{if(typeof fj==="object"&&("from" in fj||"to" in fj)){fd=bS(dI(fj.from),dI(fj.to));
fj={};
fj.ms=fd.milliseconds;
fj.M=fd.months
}}}}}}fg=new dU(fj);
if(ah(ff)&&ds(ff,"_locale")){fg._locale=ff._locale
}return fg
}dl.fn=dU.prototype;
dl.invalid=a0;
function e0(ff,fd){var fe=ff&&parseFloat(ff.replace(",","."));
return(isNaN(fe)?0:fe)*fd
}function dG(ff,fd){var fe={};
fe.months=fd.month()-ff.month()+(fd.year()-ff.year())*12;
if(ff.clone().add(fe.months,"M").isAfter(fd)){--fe.months
}fe.milliseconds=+fd-+(ff.clone().add(fe.months,"M"));
return fe
}function bS(ff,fd){var fe;
if(!(ff.isValid()&&fd.isValid())){return{milliseconds:0,months:0}
}fd=aG(fd,ff);
if(ff.isBefore(fd)){fe=dG(ff,fd)
}else{fe=dG(fd,ff);
fe.milliseconds=-fe.milliseconds;
fe.months=-fe.months
}return fe
}function a9(fe,fd){return function(fi,fh){var fg,ff;
if(fh!==null&&!isNaN(+fh)){eX(fd,"moment()."+fd+"(period, number) is deprecated. Please use moment()."+fd+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.");
ff=fi;
fi=fh;
fh=ff
}fi=typeof fi==="string"?+fi:fi;
fg=dl(fi,fh);
a3(this,fg,fe);
return this
}
}function a3(ff,fi,fh,fg){var fe=fi._milliseconds,fj=eq(fi._days),fd=eq(fi._months);
if(!ff.isValid()){return
}fg=fg==null?true:fg;
if(fd){aZ(ff,dH(ff,"Month")+fd*fh)
}if(fj){aQ(ff,"Date",dH(ff,"Date")+fj*fh)
}if(fe){ff._d.setTime(ff._d.valueOf()+fe*fh)
}if(fg){eK.updateOffset(ff,fj||fd)
}}var a2=a9(1,"add");
var aC=a9(-1,"subtract");
function ay(ff,fd){var fe=ff.diff(fd,"days",true);
return fe<-6?"sameElse":fe<-1?"lastWeek":fe<0?"lastDay":fe<1?"sameDay":fe<2?"nextDay":fe<7?"nextWeek":"sameElse"
}function cl(fi,fd){var fg=fi||dI(),ff=aG(fg,this).startOf("day"),fh=eK.calendarFormat(this,ff)||"sameElse";
var fe=fd&&(bb(fd[fh])?fd[fh].call(this,fg):fd[fh]);
return this.format(fe||this.localeData().calendar(fh,this,dI(fg)))
}function dy(){return new ey(this)
}function cJ(fe,fd){var ff=ch(fe)?fe:dI(fe);
if(!(this.isValid()&&ff.isValid())){return false
}fd=cV(fd)||"millisecond";
if(fd==="millisecond"){return this.valueOf()>ff.valueOf()
}else{return ff.valueOf()<this.clone().startOf(fd).valueOf()
}}function eV(fe,fd){var ff=ch(fe)?fe:dI(fe);
if(!(this.isValid()&&ff.isValid())){return false
}fd=cV(fd)||"millisecond";
if(fd==="millisecond"){return this.valueOf()<ff.valueOf()
}else{return this.clone().endOf(fd).valueOf()<ff.valueOf()
}}function ex(fi,fh,fd,fg){var ff=ch(fi)?fi:dI(fi),fe=ch(fh)?fh:dI(fh);
if(!(this.isValid()&&ff.isValid()&&fe.isValid())){return false
}fg=fg||"()";
return(fg[0]==="("?this.isAfter(ff,fd):!this.isBefore(ff,fd))&&(fg[1]===")"?this.isBefore(fe,fd):!this.isAfter(fe,fd))
}function cN(fe,fd){var fg=ch(fe)?fe:dI(fe),ff;
if(!(this.isValid()&&fg.isValid())){return false
}fd=cV(fd)||"millisecond";
if(fd==="millisecond"){return this.valueOf()===fg.valueOf()
}else{ff=fg.valueOf();
return this.clone().startOf(fd).valueOf()<=ff&&ff<=this.clone().endOf(fd).valueOf()
}}function eQ(fe,fd){return this.isSame(fe,fd)||this.isAfter(fe,fd)
}function eT(fe,fd){return this.isSame(fe,fd)||this.isBefore(fe,fd)
}function M(fg,ff,fd){var fi,fh,fe;
if(!this.isValid()){return NaN
}fi=aG(fg,this);
if(!fi.isValid()){return NaN
}fh=(fi.utcOffset()-this.utcOffset())*60000;
ff=cV(ff);
switch(ff){case"year":fe=et(this,fi)/12;
break;
case"month":fe=et(this,fi);
break;
case"quarter":fe=et(this,fi)/3;
break;
case"second":fe=(this-fi)/1000;
break;
case"minute":fe=(this-fi)/60000;
break;
case"hour":fe=(this-fi)/3600000;
break;
case"day":fe=(this-fi-fh)/86400000;
break;
case"week":fe=(this-fi-fh)/604800000;
break;
default:fe=this-fi
}return fd?fe:dp(fe)
}function et(fe,fd){var fi=((fd.year()-fe.year())*12)+(fd.month()-fe.month()),ff=fe.clone().add(fi,"months"),fg,fh;
if(fd-ff<0){fg=fe.clone().add(fi-1,"months");
fh=(fd-ff)/(ff-fg)
}else{fg=fe.clone().add(fi+1,"months");
fh=(fd-ff)/(fg-ff)
}return -(fi+fh)||0
}eK.defaultFormat="YYYY-MM-DDTHH:mm:ssZ";
eK.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";
function d8(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
}function da(ff){if(!this.isValid()){return null
}var fe=ff!==true;
var fd=fe?this.clone().utc():this;
if(fd.year()<0||fd.year()>9999){return ai(fd,fe?"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYYYY-MM-DD[T]HH:mm:ss.SSSZ")
}if(bb(Date.prototype.toISOString)){if(fe){return this.toDate().toISOString()
}else{return new Date(this.valueOf()+this.utcOffset()*60*1000).toISOString().replace("Z",ai(fd,"Z"))
}}return ai(fd,fe?"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYY-MM-DD[T]HH:mm:ss.SSSZ")
}function aU(){if(!this.isValid()){return"moment.invalid(/* "+this._i+" */)"
}var ff="moment";
var fd="";
if(!this.isLocal()){ff=this.utcOffset()===0?"moment.utc":"moment.parseZone";
fd="Z"
}var fg="["+ff+'("]';
var fe=(0<=this.year()&&this.year()<=9999)?"YYYY":"YYYYYY";
var fi="-MM-DD[T]HH:mm:ss.SSS";
var fh=fd+'[")]';
return this.format(fg+fe+fi+fh)
}function dd(fe){if(!fe){fe=this.isUtc()?eK.defaultFormatUtc:eK.defaultFormat
}var fd=ai(this,fe);
return this.localeData().postformat(fd)
}function dX(fe,fd){if(this.isValid()&&((ch(fe)&&fe.isValid())||dI(fe).isValid())){return dl({to:this,from:fe}).locale(this.locale()).humanize(!fd)
}else{return this.localeData().invalidDate()
}}function dS(fd){return this.from(dI(),fd)
}function al(fe,fd){if(this.isValid()&&((ch(fe)&&fe.isValid())||dI(fe).isValid())){return dl({from:this,to:fe}).locale(this.locale()).humanize(!fd)
}else{return this.localeData().invalidDate()
}}function aT(fd){return this.to(dI(),fd)
}function fc(fe){var fd;
if(fe===undefined){return this._locale._abbr
}else{fd=S(fe);
if(fd!=null){this._locale=fd
}return this
}}var A=em("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(fd){if(fd===undefined){return this.localeData()
}else{return this.locale(fd)
}});
function dY(){return this._locale
}var cU=1000;
var ac=60*cU;
var fb=60*ac;
var aj=(365*400+97)*24*fb;
function ba(fd,fe){return(fd%fe+fe)%fe
}function a(ff,fd,fe){if(ff<100&&ff>=0){return new Date(ff+400,fd,fe)-aj
}else{return new Date(ff,fd,fe).valueOf()
}}function ed(ff,fd,fe){if(ff<100&&ff>=0){return Date.UTC(ff+400,fd,fe)-aj
}else{return Date.UTC(ff,fd,fe)
}}function cc(fd){var fe;
fd=cV(fd);
if(fd===undefined||fd==="millisecond"||!this.isValid()){return this
}var ff=this._isUTC?ed:a;
switch(fd){case"year":fe=ff(this.year(),0,1);
break;
case"quarter":fe=ff(this.year(),this.month()-this.month()%3,1);
break;
case"month":fe=ff(this.year(),this.month(),1);
break;
case"week":fe=ff(this.year(),this.month(),this.date()-this.weekday());
break;
case"isoWeek":fe=ff(this.year(),this.month(),this.date()-(this.isoWeekday()-1));
break;
case"day":case"date":fe=ff(this.year(),this.month(),this.date());
break;
case"hour":fe=this._d.valueOf();
fe-=ba(fe+(this._isUTC?0:this.utcOffset()*ac),fb);
break;
case"minute":fe=this._d.valueOf();
fe-=ba(fe,ac);
break;
case"second":fe=this._d.valueOf();
fe-=ba(fe,cU);
break
}this._d.setTime(fe);
eK.updateOffset(this,true);
return this
}function eE(fd){var fe;
fd=cV(fd);
if(fd===undefined||fd==="millisecond"||!this.isValid()){return this
}var ff=this._isUTC?ed:a;
switch(fd){case"year":fe=ff(this.year()+1,0,1)-1;
break;
case"quarter":fe=ff(this.year(),this.month()-this.month()%3+3,1)-1;
break;
case"month":fe=ff(this.year(),this.month()+1,1)-1;
break;
case"week":fe=ff(this.year(),this.month(),this.date()-this.weekday()+7)-1;
break;
case"isoWeek":fe=ff(this.year(),this.month(),this.date()-(this.isoWeekday()-1)+7)-1;
break;
case"day":case"date":fe=ff(this.year(),this.month(),this.date()+1)-1;
break;
case"hour":fe=this._d.valueOf();
fe+=fb-ba(fe+(this._isUTC?0:this.utcOffset()*ac),fb)-1;
break;
case"minute":fe=this._d.valueOf();
fe+=ac-ba(fe,ac)-1;
break;
case"second":fe=this._d.valueOf();
fe+=cU-ba(fe,cU)-1;
break
}this._d.setTime(fe);
eK.updateOffset(this,true);
return this
}function d1(){return this._d.valueOf()-((this._offset||0)*60000)
}function bE(){return Math.floor(this.valueOf()/1000)
}function c7(){return new Date(this.valueOf())
}function dQ(){var fd=this;
return[fd.year(),fd.month(),fd.date(),fd.hour(),fd.minute(),fd.second(),fd.millisecond()]
}function dZ(){var fd=this;
return{years:fd.year(),months:fd.month(),date:fd.date(),hours:fd.hours(),minutes:fd.minutes(),seconds:fd.seconds(),milliseconds:fd.milliseconds()}
}function de(){return this.isValid()?this.toISOString():null
}function q(){return ar(this)
}function dL(){return e5({},bg(this))
}function cF(){return bg(this).overflow
}function eW(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}
}cD(0,["gg",2],0,function(){return this.weekYear()%100
});
cD(0,["GG",2],0,function(){return this.isoWeekYear()%100
});
function Y(fe,fd){cD(0,[fe,fe.length],0,fd)
}Y("gggg","weekYear");
Y("ggggg","weekYear");
Y("GGGG","isoWeekYear");
Y("GGGGG","isoWeekYear");
ck("weekYear","gg");
ck("isoWeekYear","GG");
d2("weekYear",1);
d2("isoWeekYear",1);
bi("G",D);
bi("g",D);
bi("GG",av,aN);
bi("gg",av,aN);
bi("GGGG",at,aL);
bi("gggg",at,aL);
bi("GGGGG",aq,aK);
bi("ggggg",aq,aK);
Z(["gggg","ggggg","GGGG","GGGGG"],function(fd,fg,fe,ff){fg[ff.substr(0,2)]=cW(fd)
});
Z(["gg","GG"],function(fd,fg,fe,ff){fg[ff]=eK.parseTwoDigitYear(fd)
});
function bu(fd){return cy.call(this,fd,this.week(),this.weekday(),this.localeData()._week.dow,this.localeData()._week.doy)
}function d4(fd){return cy.call(this,fd,this.isoWeek(),this.isoWeekday(),1,4)
}function dg(){return G(this.year(),1,4)
}function K(){var fd=this.localeData()._week;
return G(this.year(),fd.dow,fd.doy)
}function cy(fd,fe,fg,fi,fh){var ff;
if(fd==null){return ez(this,fi,fh).year
}else{ff=G(fd,fi,fh);
if(fe>ff){fe=ff
}return bc.call(this,fd,fe,fg,fi,fh)
}}function bc(ff,fe,fh,fj,fi){var fg=bF(ff,fe,fh,fj,fi),fd=dB(fg.year,0,fg.dayOfYear);
this.year(fd.getUTCFullYear());
this.month(fd.getUTCMonth());
this.date(fd.getUTCDate());
return this
}cD("Q",0,"Qo","quarter");
ck("quarter","Q");
d2("quarter",7);
bi("Q",aO);
bZ("Q",function(fd,fe){fe[k]=(cW(fd)-1)*3
});
function b5(fd){return fd==null?Math.ceil((this.month()+1)/3):this.month((fd-1)*3+this.month()%3)
}cD("D",["DD",2],"Do","date");
ck("date","D");
d2("date",9);
bi("D",av);
bi("DD",av,aN);
bi("Do",function(fe,fd){return fe?(fd._dayOfMonthOrdinalParse||fd._ordinalParse):fd._dayOfMonthOrdinalParseLenient
});
bZ(["D","DD"],eB);
bZ("Do",function(fd,fe){fe[eB]=cW(fd.match(av)[0])
});
var cs=ej("Date",true);
cD("DDD",["DDDD",3],"DDDo","dayOfYear");
ck("dayOfYear","DDD");
d2("dayOfYear",4);
bi("DDD",au);
bi("DDDD",aM);
bZ(["DDD","DDDD"],function(fd,ff,fe){fe._dayOfYear=cW(fd)
});
function bk(fd){var fe=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/86400000)+1;
return fd==null?fe:this.add((fd-fe),"d")
}cD("m",["mm",2],0,"minute");
ck("minute","m");
d2("minute",14);
bi("m",av);
bi("mm",av,aN);
bZ(["m","mm"],dO);
var eU=ej("Minutes",false);
cD("s",["ss",2],0,"second");
ck("second","s");
d2("second",15);
bi("s",av);
bi("ss",av,aN);
bZ(["s","ss"],am);
var bA=ej("Seconds",false);
cD("S",0,0,function(){return ~~(this.millisecond()/100)
});
cD(0,["SS",2],0,function(){return ~~(this.millisecond()/10)
});
cD(0,["SSS",3],0,"millisecond");
cD(0,["SSSS",4],0,function(){return this.millisecond()*10
});
cD(0,["SSSSS",5],0,function(){return this.millisecond()*100
});
cD(0,["SSSSSS",6],0,function(){return this.millisecond()*1000
});
cD(0,["SSSSSSS",7],0,function(){return this.millisecond()*10000
});
cD(0,["SSSSSSSS",8],0,function(){return this.millisecond()*100000
});
cD(0,["SSSSSSSSS",9],0,function(){return this.millisecond()*1000000
});
ck("millisecond","ms");
d2("millisecond",16);
bi("S",au,aO);
bi("SS",au,aN);
bi("SSS",au,aM);
var bp;
for(bp="SSSS";
bp.length<=9;
bp+="S"){bi(bp,t)
}function db(fd,fe){fe[bO]=cW(("0."+fd)*1000)
}for(bp="S";
bp.length<=9;
bp+="S"){bZ(bp,db)
}var b3=ej("Milliseconds",false);
cD("z",0,0,"zoneAbbr");
cD("zz",0,0,"zoneName");
function eR(){return this._isUTC?"UTC":""
}function eo(){return this._isUTC?"Coordinated Universal Time":""
}var ci=ey.prototype;
ci.add=a2;
ci.calendar=cl;
ci.clone=dy;
ci.diff=M;
ci.endOf=eE;
ci.format=dd;
ci.from=dX;
ci.fromNow=dS;
ci.to=al;
ci.toNow=aT;
ci.get=aD;
ci.invalidAt=cF;
ci.isAfter=cJ;
ci.isBefore=eV;
ci.isBetween=ex;
ci.isSame=cN;
ci.isSameOrAfter=eQ;
ci.isSameOrBefore=eT;
ci.isValid=q;
ci.lang=A;
ci.locale=fc;
ci.localeData=dY;
ci.max=ev;
ci.min=cO;
ci.parsingFlags=dL;
ci.set=ax;
ci.startOf=cc;
ci.subtract=aC;
ci.toArray=dQ;
ci.toObject=dZ;
ci.toDate=c7;
ci.toISOString=da;
ci.inspect=aU;
ci.toJSON=de;
ci.toString=d8;
ci.unix=bE;
ci.valueOf=d1;
ci.creationData=eW;
ci.year=cM;
ci.isLeapYear=c2;
ci.weekYear=bu;
ci.isoWeekYear=d4;
ci.quarter=ci.quarters=b5;
ci.month=eN;
ci.daysInMonth=bR;
ci.week=ci.weeks=L;
ci.isoWeek=ci.isoWeeks=z;
ci.weeksInYear=K;
ci.isoWeeksInYear=dg;
ci.date=cs;
ci.day=ci.days=er;
ci.weekday=ag;
ci.isoWeekday=cz;
ci.dayOfYear=bk;
ci.hour=ci.hours=cv;
ci.minute=ci.minutes=eU;
ci.second=ci.seconds=bA;
ci.millisecond=ci.milliseconds=b3;
ci.utcOffset=dC;
ci.utc=a4;
ci.local=dz;
ci.parseZone=cd;
ci.hasAlignedHourOffset=aE;
ci.isDST=aR;
ci.isLocal=dD;
ci.isUtcOffset=bW;
ci.isUtc=dJ;
ci.isUTC=dJ;
ci.zoneAbbr=eR;
ci.zoneName=eo;
ci.dates=em("dates accessor is deprecated. Use date instead.",cs);
ci.months=em("months accessor is deprecated. Use month instead",eN);
ci.years=em("years accessor is deprecated. Use year instead",cM);
ci.zone=em("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",dx);
ci.isDSTShifted=em("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",c);
function di(fd){return dI(fd*1000)
}function cS(){return dI.apply(null,arguments).parseZone()
}function dE(fd){return fd
}var ea=cI.prototype;
ea.calendar=e;
ea.longDateFormat=cP;
ea.invalidDate=ew;
ea.ordinal=eI;
ea.preparse=dE;
ea.postformat=dE;
ea.relativeTime=V;
ea.pastFuture=d5;
ea.set=du;
ea.months=a5;
ea.monthsShort=bf;
ea.monthsParse=dh;
ea.monthsRegex=c5;
ea.monthsShortRegex=dr;
ea.week=bt;
ea.firstDayOfYear=df;
ea.firstDayOfWeek=ak;
ea.weekdays=aB;
ea.weekdaysMin=eL;
ea.weekdaysShort=O;
ea.weekdaysParse=bQ;
ea.weekdaysRegex=e1;
ea.weekdaysShortRegex=aJ;
ea.weekdaysMinRegex=F;
ea.isPM=cj;
ea.meridiem=aX;
function J(fh,fe,fg,fi){var fd=S();
var ff=cB().set(fi,fe);
return fd[fg](ff,fh)
}function a1(fh,fe,fg){if(s(fh)){fe=fh;
fh=undefined
}fh=fh||"";
if(fe!=null){return J(fh,fe,fg,"month")
}var ff;
var fd=[];
for(ff=0;
ff<12;
ff++){fd[ff]=J(fh,ff,fg,"month")
}return fd
}function e3(fi,fk,fg,fj){if(typeof fi==="boolean"){if(s(fk)){fg=fk;
fk=undefined
}fk=fk||""
}else{fk=fi;
fg=fk;
fi=false;
if(s(fk)){fg=fk;
fk=undefined
}fk=fk||""
}var fd=S(),fe=fi?fd._week.dow:0;
if(fg!=null){return J(fk,(fg+fe)%7,fj,"day")
}var fh;
var ff=[];
for(fh=0;
fh<7;
fh++){ff[fh]=J(fk,(fh+fe)%7,fj,"day")
}return ff
}function c0(fe,fd){return a1(fe,fd,"months")
}function cH(fe,fd){return a1(fe,fd,"monthsShort")
}function dc(fe,ff,fd){return e3(fe,ff,fd,"weekdays")
}function cR(fe,ff,fd){return e3(fe,ff,fd,"weekdaysShort")
}function aa(fe,ff,fd){return e3(fe,ff,fd,"weekdaysMin")
}C("en",{dayOfMonthOrdinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(ff){var fd=ff%10,fe=(cW(ff%100/10)===1)?"th":(fd===1)?"st":(fd===2)?"nd":(fd===3)?"rd":"th";
return ff+fe
}});
eK.lang=em("moment.lang is deprecated. Use moment.locale instead.",C);
eK.langData=em("moment.langData is deprecated. Use moment.localeData instead.",S);
var eG=Math.abs;
function br(){var fd=this._data;
this._milliseconds=eG(this._milliseconds);
this._days=eG(this._days);
this._months=eG(this._months);
fd.milliseconds=eG(fd.milliseconds);
fd.seconds=eG(fd.seconds);
fd.minutes=eG(fd.minutes);
fd.hours=eG(fd.hours);
fd.months=eG(fd.months);
fd.years=eG(fd.years);
return this
}function aI(fh,fe,ff,fg){var fd=dl(fe,ff);
fh._milliseconds+=fg*fd._milliseconds;
fh._days+=fg*fd._days;
fh._months+=fg*fd._months;
return fh._bubble()
}function bG(fd,fe){return aI(this,fd,fe,1)
}function dV(fd,fe){return aI(this,fd,fe,-1)
}function eM(fd){if(fd<0){return Math.floor(fd)
}else{return Math.ceil(fd)
}}function c1(){var ff=this._milliseconds;
var fl=this._days;
var fd=this._months;
var fh=this._data;
var fk,fg,fj,fi,fe;
if(!((ff>=0&&fl>=0&&fd>=0)||(ff<=0&&fl<=0&&fd<=0))){ff+=eM(e7(fd)+fl)*86400000;
fl=0;
fd=0
}fh.milliseconds=ff%1000;
fk=dp(ff/1000);
fh.seconds=fk%60;
fg=dp(fk/60);
fh.minutes=fg%60;
fj=dp(fg/60);
fh.hours=fj%24;
fl+=dp(fj/24);
fe=dp(g(fl));
fd+=fe;
fl-=eM(e7(fe));
fi=dp(fd/12);
fd%=12;
fh.days=fl;
fh.months=fd;
fh.years=fi;
return this
}function g(fd){return fd*4800/146097
}function e7(fd){return fd*146097/4800
}function eP(fe){if(!this.isValid()){return NaN
}var fg;
var fd;
var ff=this._milliseconds;
fe=cV(fe);
if(fe==="month"||fe==="quarter"||fe==="year"){fg=this._days+ff/86400000;
fd=this._months+g(fg);
switch(fe){case"month":return fd;
case"quarter":return fd/3;
case"year":return fd/12
}}else{fg=this._days+Math.round(e7(this._months));
switch(fe){case"week":return fg/7+ff/604800000;
case"day":return fg+ff/86400000;
case"hour":return fg*24+ff/3600000;
case"minute":return fg*1440+ff/60000;
case"second":return fg*86400+ff/1000;
case"millisecond":return Math.floor(fg*86400000)+ff;
default:throw new Error("Unknown unit "+fe)
}}}function c9(){if(!this.isValid()){return NaN
}return(this._milliseconds+this._days*86400000+(this._months%12)*2592000000+cW(this._months/12)*31536000000)
}function ec(fd){return function(){return this.as(fd)
}
}var e9=ec("ms");
var N=ec("s");
var dA=ec("m");
var v=ec("h");
var eh=ec("d");
var dW=ec("w");
var eb=ec("M");
var ep=ec("Q");
var bo=ec("y");
function e2(){return dl(this)
}function I(fd){fd=cV(fd);
return this.isValid()?this[fd+"s"]():NaN
}function cf(fd){return function(){return this.isValid()?this._data[fd]:NaN
}
}var d=cf("milliseconds");
var bl=cf("seconds");
var aH=cf("minutes");
var W=cf("hours");
var bj=cf("days");
var eS=cf("months");
var bP=cf("years");
function ek(){return dp(this.days()/7)
}var c6=Math.round;
var dN={ss:44,s:45,m:45,h:22,d:26,M:11};
function an(fe,fg,ff,fh,fd){return fd.relativeTime(fg||1,!!ff,fe,fh)
}function dP(fh,fe,fl){var ff=dl(fh).abs();
var fm=c6(ff.as("s"));
var fg=c6(ff.as("m"));
var fk=c6(ff.as("h"));
var fn=c6(ff.as("d"));
var fd=c6(ff.as("M"));
var fi=c6(ff.as("y"));
var fj=fm<=dN.ss&&["s",fm]||fm<dN.s&&["ss",fm]||fg<=1&&["m"]||fg<dN.m&&["mm",fg]||fk<=1&&["h"]||fk<dN.h&&["hh",fk]||fn<=1&&["d"]||fn<dN.d&&["dd",fn]||fd<=1&&["M"]||fd<dN.M&&["MM",fd]||fi<=1&&["y"]||["yy",fi];
fj[2]=fe;
fj[3]=+fh>0;
fj[4]=fl;
return an.apply(null,fj)
}function eC(fd){if(fd===undefined){return c6
}if(typeof(fd)==="function"){c6=fd;
return true
}return false
}function cr(fd,fe){if(dN[fd]===undefined){return false
}if(fe===undefined){return dN[fd]
}dN[fd]=fe;
if(fd==="s"){dN.ss=fe-1
}return true
}function b(ff){if(!this.isValid()){return this.localeData().invalidDate()
}var fd=this.localeData();
var fe=dP(this,!ff,fd);
if(ff){fe=fd.pastFuture(+this,fe)
}return fd.postformat(fe)
}var aY=Math.abs;
function bY(fd){return((fd>0)-(fd<0))||+fd
}function bN(){if(!this.isValid()){return this.localeData().invalidDate()
}var fr=aY(this._milliseconds)/1000;
var fs=aY(this._days);
var fg=aY(this._months);
var fk,fq,fn;
fk=dp(fr/60);
fq=dp(fk/60);
fr%=60;
fk%=60;
fn=dp(fg/12);
fg%=12;
var ff=fn;
var fo=fg;
var fe=fs;
var fm=fq;
var fj=fk;
var ft=fr?fr.toFixed(3).replace(/\.?0+$/,""):"";
var fp=this.asSeconds();
if(!fp){return"P0D"
}var fd=fp<0?"-":"";
var fh=bY(this._months)!==bY(fp)?"-":"";
var fi=bY(this._days)!==bY(fp)?"-":"";
var fl=bY(this._milliseconds)!==bY(fp)?"-":"";
return fd+"P"+(ff?fh+ff+"Y":"")+(fo?fh+fo+"M":"")+(fe?fi+fe+"D":"")+((fm||fj||ft)?"T":"")+(fm?fl+fm+"H":"")+(fj?fl+fj+"M":"")+(ft?fl+ft+"S":"")
}var d9=dU.prototype;
d9.isValid=u;
d9.abs=br;
d9.add=bG;
d9.subtract=dV;
d9.as=eP;
d9.asMilliseconds=e9;
d9.asSeconds=N;
d9.asMinutes=dA;
d9.asHours=v;
d9.asDays=eh;
d9.asWeeks=dW;
d9.asMonths=eb;
d9.asQuarters=ep;
d9.asYears=bo;
d9.valueOf=c9;
d9._bubble=c1;
d9.clone=e2;
d9.get=I;
d9.milliseconds=d;
d9.seconds=bl;
d9.minutes=aH;
d9.hours=W;
d9.days=bj;
d9.weeks=ek;
d9.months=eS;
d9.years=bP;
d9.humanize=b;
d9.toISOString=bN;
d9.toString=bN;
d9.toJSON=bN;
d9.locale=fc;
d9.localeData=dY;
d9.toIsoString=em("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",bN);
d9.lang=A;
cD("X",0,0,"unix");
cD("x",0,0,"valueOf");
bi("x",D);
bi("X",eY);
bZ("X",function(fd,ff,fe){fe._d=new Date(parseFloat(fd,10)*1000)
});
bZ("x",function(fd,ff,fe){fe._d=new Date(cW(fd))
});
eK.version="2.24.0";
aV(dI);
eK.fn=ci;
eK.min=p;
eK.max=bq;
eK.now=cE;
eK.utc=cB;
eK.unix=di;
eK.months=c0;
eK.isDate=eD;
eK.locale=C;
eK.invalid=P;
eK.duration=dl;
eK.isMoment=ch;
eK.weekdays=dc;
eK.parseZone=cS;
eK.localeData=S;
eK.isDuration=ah;
eK.monthsShort=cH;
eK.weekdaysMin=aa;
eK.defineLocale=cG;
eK.updateLocale=es;
eK.locales=b9;
eK.weekdaysShort=cR;
eK.normalizeUnits=cV;
eK.relativeTimeRounding=eC;
eK.relativeTimeThreshold=cr;
eK.calendarFormat=ay;
eK.prototype=ci;
eK.HTML5_FMT={DATETIME_LOCAL:"YYYY-MM-DDTHH:mm",DATETIME_LOCAL_SECONDS:"YYYY-MM-DDTHH:mm:ss",DATETIME_LOCAL_MS:"YYYY-MM-DDTHH:mm:ss.SSS",DATE:"YYYY-MM-DD",TIME:"HH:mm",TIME_SECONDS:"HH:mm:ss",TIME_MS:"HH:mm:ss.SSS",WEEK:"GGGG-[W]WW",MONTH:"YYYY-MM"};
return eK
})));
(function(a,b){if(typeof module==="object"&&module.exports){module.exports=b(require("moment"))
}else{if(typeof define==="function"&&define.amd){define(["moment"],b)
}else{b(a.moment)
}}}(this,function(G){var s="0.5.25",l={},B={},M={},D={},C;
if(!G||typeof G.version!=="string"){e("Moment Timezone requires Moment.js. See https://momentjs.com/timezone/docs/#/use-it/browser/")
}var v=G.version.split("."),n=+v[0],c=+v[1];
if(n<2||(n===2&&c<6)){e("Moment Timezone requires Moment.js >= 2.6.0. You are using Moment.js "+G.version+". See momentjs.com")
}function b(Q){if(Q>96){return Q-87
}else{if(Q>64){return Q-29
}}return Q-48
}function y(W){var U=0,S=W.split("."),X=S[0],R=S[1]||"",Y=1,V,T=0,Q=1;
if(W.charCodeAt(0)===45){U=1;
Q=-1
}for(U;
U<X.length;
U++){V=b(X.charCodeAt(U));
T=60*T+V
}for(U=0;
U<R.length;
U++){Y=Y/60;
V=b(R.charCodeAt(U));
T+=V*Y
}return T*Q
}function q(R){for(var Q=0;
Q<R.length;
Q++){R[Q]=y(R[Q])
}}function o(S,R){for(var Q=0;
Q<R;
Q++){S[Q]=Math.round((S[Q-1]||0)+(S[Q]*60000))
}S[R-1]=Infinity
}function F(S,T){var Q=[],R;
for(R=0;
R<T.length;
R++){Q[R]=S[T[R]]
}return Q
}function z(Q){var S=Q.split("|"),R=S[2].split(" "),U=S[3].split(""),T=S[4].split(" ");
q(R);
q(U);
q(T);
o(T,U.length);
return{name:S[0],abbrs:F(S[1].split(" "),U),offsets:F(R,U),untils:T,population:S[5]|0}
}function d(Q){if(Q){this._set(z(Q))
}}d.prototype={_set:function(Q){this.name=Q.name;
this.abbrs=Q.abbrs;
this.untils=Q.untils;
this.offsets=Q.offsets;
this.population=Q.population
},_index:function(R){var S=+R,T=this.untils,Q;
for(Q=0;
Q<T.length;
Q++){if(S<T[Q]){return Q
}}},parse:function(X){var W=+X,R=this.offsets,Q=this.untils,Y=Q.length-1,T,V,S,U;
for(U=0;
U<Y;
U++){T=R[U];
V=R[U+1];
S=R[U?U-1:U];
if(T<V&&K.moveAmbiguousForward){T=V
}else{if(T>S&&K.moveInvalidForward){T=S
}}if(W<Q[U]-(T*60000)){return R[U]
}}return R[Y]
},abbr:function(Q){return this.abbrs[this._index(Q)]
},offset:function(Q){e("zone.offset has been deprecated in favor of zone.utcOffset");
return this.offsets[this._index(Q)]
},utcOffset:function(Q){return this.offsets[this._index(Q)]
}};
function f(Q){var S=Q.toTimeString();
var R=S.match(/\([a-z ]+\)/i);
if(R&&R[0]){R=R[0].match(/[A-Z]/g);
R=R?R.join(""):undefined
}else{R=S.match(/[A-Z]{3,5}/g);
R=R?R[0]:undefined
}if(R==="GMT"){R=undefined
}this.at=+Q;
this.abbr=R;
this.offset=Q.getTimezoneOffset()
}function k(Q){this.zone=Q;
this.offsetScore=0;
this.abbrScore=0
}k.prototype.scoreOffsetAt=function(Q){this.offsetScore+=Math.abs(this.zone.utcOffset(Q.at)-Q.offset);
if(this.zone.abbr(Q.at).replace(/[^A-Z]/g,"")!==Q.abbr){this.abbrScore++
}};
function m(Q,S){var R,T;
while((T=((S.at-Q.at)/120000|0)*60000)){R=new f(new Date(Q.at+T));
if(R.offset===Q.offset){Q=R
}else{S=R
}}return Q
}function p(){var Q=new Date().getFullYear()-2,U=new f(new Date(Q,0,1)),T=[U],V,S,R;
for(R=1;
R<48;
R++){S=new f(new Date(Q,R,1));
if(S.offset!==U.offset){V=m(U,S);
T.push(V);
T.push(new f(new Date(V.at+60000)))
}U=S
}for(R=0;
R<4;
R++){T.push(new f(new Date(Q+R,0,1)));
T.push(new f(new Date(Q+R,6,1)))
}return T
}function x(R,Q){if(R.offsetScore!==Q.offsetScore){return R.offsetScore-Q.offsetScore
}if(R.abbrScore!==Q.abbrScore){return R.abbrScore-Q.abbrScore
}return Q.zone.population-R.zone.population
}function H(Q,S){var R,T;
q(S);
for(R=0;
R<S.length;
R++){T=S[R];
D[T]=D[T]||{};
D[T][Q]=true
}}function P(W){var Q=W.length,V={},S=[],T,R,U;
for(T=0;
T<Q;
T++){U=D[W[T].offset]||{};
for(R in U){if(U.hasOwnProperty(R)){V[R]=true
}}}for(T in V){if(V.hasOwnProperty(T)){S.push(M[T])
}}return S
}function O(){try{var V=Intl.DateTimeFormat().resolvedOptions().timeZone;
if(V&&V.length>3){var Q=M[J(V)];
if(Q){return Q
}e("Moment Timezone found "+V+" from the Intl api, but did not have that data loaded.")
}}catch(W){}var R=p(),U=R.length,Z=P(R),Y=[],X,T,S;
for(T=0;
T<Z.length;
T++){X=new k(E(Z[T]),U);
for(S=0;
S<U;
S++){X.scoreOffsetAt(R[S])
}Y.push(X)
}Y.sort(x);
return Y.length>0?Y[0].zone.name:undefined
}function t(Q){if(!C||Q){C=O()
}return C
}function J(Q){return(Q||"").toLowerCase().replace(/\//g,"_")
}function A(Q){var T,R,S,U;
if(typeof Q==="string"){Q=[Q]
}for(T=0;
T<Q.length;
T++){S=Q[T].split("|");
R=S[0];
U=J(R);
l[U]=Q[T];
M[U]=R;
H(U,S[2].split(" "))
}}function E(S,R){S=J(S);
var Q=l[S];
var T;
if(Q instanceof d){return Q
}if(typeof Q==="string"){Q=new d(Q);
l[S]=Q;
return Q
}if(B[S]&&R!==E&&(T=E(B[S],E))){Q=l[S]=new d();
Q._set(T);
Q.name=M[S];
return Q
}return null
}function I(){var R,Q=[];
for(R in M){if(M.hasOwnProperty(R)&&(l[R]||l[B[R]])&&M[R]){Q.push(M[R])
}}return Q.sort()
}function u(Q){var S,R,U,T;
if(typeof Q==="string"){Q=[Q]
}for(S=0;
S<Q.length;
S++){R=Q[S].split("|");
U=J(R[0]);
T=J(R[1]);
B[U]=T;
M[U]=R[0];
B[T]=U;
M[T]=R[1]
}}function j(Q){A(Q.zones);
u(Q.links);
K.dataVersion=Q.version
}function N(Q){if(!N.didShowError){N.didShowError=true;
e("moment.tz.zoneExists('"+Q+"') has been deprecated in favor of !moment.tz.zone('"+Q+"')")
}return !!E(Q)
}function r(Q){var R=(Q._f==="X"||Q._f==="x");
return !!(Q._a&&(Q._tzm===undefined)&&!R)
}function e(Q){if(typeof console!=="undefined"&&typeof console.error==="function"){console.error(Q)
}}function K(R){var U=Array.prototype.slice.call(arguments,0,-1),T=arguments[arguments.length-1],Q=E(T),S=G.utc.apply(null,U);
if(Q&&!G.isMoment(R)&&r(S)){S.add(Q.parse(S),"minutes")
}S.tz(T);
return S
}K.version=s;
K.dataVersion="";
K._zones=l;
K._links=B;
K._names=M;
K.add=A;
K.link=u;
K.load=j;
K.zone=E;
K.zoneExists=N;
K.guess=t;
K.names=I;
K.Zone=d;
K.unpack=z;
K.unpackBase60=y;
K.needsOffset=r;
K.moveInvalidForward=true;
K.moveAmbiguousForward=false;
var w=G.fn;
G.tz=K;
G.defaultZone=null;
G.updateOffset=function(R,S){var Q=G.defaultZone,U;
if(R._z===undefined){if(Q&&r(R)&&!R._isUTC){R._d=G.utc(R._a)._d;
R.utc().add(Q.parse(R),"minutes")
}R._z=Q
}if(R._z){U=R._z.utcOffset(R);
if(Math.abs(U)<16){U=U/60
}if(R.utcOffset!==undefined){var T=R._z;
R.utcOffset(-U,S);
R._z=T
}else{R.zone(U,S)
}}};
w.tz=function(Q,R){if(Q){if(typeof Q!=="string"){throw new Error("Time zone name must be a string, got "+Q+" ["+typeof Q+"]")
}this._z=E(Q);
if(this._z){G.updateOffset(this,R)
}else{e("Moment Timezone has no data for "+Q+". See http://momentjs.com/timezone/docs/#/data-loading/.")
}return this
}if(this._z){return this._z.name
}};
function L(Q){return function(){if(this._z){return this._z.abbr(this)
}return Q.call(this)
}
}function a(Q){return function(){this._z=null;
return Q.apply(this,arguments)
}
}function h(Q){return function(){if(arguments.length>0){this._z=null
}return Q.apply(this,arguments)
}
}w.zoneName=L(w.zoneName);
w.zoneAbbr=L(w.zoneAbbr);
w.utc=a(w.utc);
w.local=a(w.local);
w.utcOffset=h(w.utcOffset);
G.tz.setDefault=function(Q){if(n<2||(n===2&&c<9)){e("Moment Timezone setDefault() requires Moment.js >= 2.9.0. You are using Moment.js "+G.version+".")
}G.defaultZone=Q?E(Q):null;
return G
};
var g=G.momentProperties;
if(Object.prototype.toString.call(g)==="[object Array]"){g.push("_z");
g.push("_a")
}else{if(g){g._z=null
}}j({version:"2019a",zones:["Africa/Abidjan|GMT|0|0||48e5","Africa/Nairobi|EAT|-30|0||47e5","Africa/Algiers|CET|-10|0||26e5","Africa/Lagos|WAT|-10|0||17e6","Africa/Maputo|CAT|-20|0||26e5","Africa/Cairo|EET EEST|-20 -30|01010|1M2m0 gL0 e10 mn0|15e6","Africa/Casablanca|+00 +01|0 -10|01010101010101010101010101010101|1LHC0 A00 e00 y00 11A0 uM0 e00 Dc0 11A0 s00 e00 IM0 WM0 mo0 gM0 LA0 WM0 jA0 e00 28M0 e00 2600 e00 28M0 e00 2600 gM0 2600 e00 28M0 e00|32e5","Europe/Paris|CET CEST|-10 -20|01010101010101010101010|1LHB0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00|11e6","Africa/Johannesburg|SAST|-20|0||84e5","Africa/Khartoum|EAT CAT|-30 -20|01|1Usl0|51e5","Africa/Sao_Tome|GMT WAT|0 -10|010|1UQN0 2q00","Africa/Tripoli|EET|-20|0||11e5","Africa/Windhoek|CAT WAT|-20 -10|010101010|1LKo0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0|32e4","America/Adak|HST HDT|a0 90|01010101010101010101010|1Lzo0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|326","America/Anchorage|AKST AKDT|90 80|01010101010101010101010|1Lzn0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|30e4","America/Santo_Domingo|AST|40|0||29e5","America/Fortaleza|-03|30|0||34e5","America/Asuncion|-03 -04|30 40|01010101010101010101010|1LEP0 1ip0 17b0 1ip0 19X0 1fB0 19X0 1fB0 19X0 1ip0 17b0 1ip0 17b0 1ip0 19X0 1fB0 19X0 1fB0 19X0 1fB0 19X0 1ip0|28e5","America/Panama|EST|50|0||15e5","America/Mexico_City|CST CDT|60 50|01010101010101010101010|1LKw0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0|20e6","America/Managua|CST|60|0||22e5","America/La_Paz|-04|40|0||19e5","America/Lima|-05|50|0||11e6","America/Denver|MST MDT|70 60|01010101010101010101010|1Lzl0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|26e5","America/Campo_Grande|-03 -04|30 40|01010101010101010101010|1LqP0 1C10 On0 1zd0 On0 1zd0 On0 1zd0 On0 1HB0 FX0 1HB0 FX0 1HB0 IL0 1HB0 FX0 1HB0 IL0 1EN0 FX0 1HB0|77e4","America/Cancun|CST CDT EST|60 50 50|0102|1LKw0 1lb0 Dd0|63e4","America/Caracas|-0430 -04|4u 40|01|1QMT0|29e5","America/Chicago|CST CDT|60 50|01010101010101010101010|1Lzk0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|92e5","America/Chihuahua|MST MDT|70 60|01010101010101010101010|1LKx0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0|81e4","America/Phoenix|MST|70|0||42e5","America/Los_Angeles|PST PDT|80 70|01010101010101010101010|1Lzm0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|15e6","America/New_York|EST EDT|50 40|01010101010101010101010|1Lzj0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|21e6","America/Fort_Nelson|PST PDT MST|80 70 70|0102|1Lzm0 1zb0 Op0|39e2","America/Halifax|AST ADT|40 30|01010101010101010101010|1Lzi0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|39e4","America/Godthab|-03 -02|30 20|01010101010101010101010|1LHB0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00|17e3","America/Grand_Turk|EST EDT AST|50 40 40|0101210101010101010|1Lzj0 1zb0 Op0 1zb0 5Ip0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|37e2","America/Havana|CST CDT|50 40|01010101010101010101010|1Lzh0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0|21e5","America/Metlakatla|PST AKST AKDT|80 90 80|012121201212121212121|1PAa0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 uM0 jB0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|14e2","America/Miquelon|-03 -02|30 20|01010101010101010101010|1Lzh0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|61e2","America/Montevideo|-02 -03|20 30|0101|1Lzg0 1o10 11z0|17e5","America/Noronha|-02|20|0||30e2","America/Port-au-Prince|EST EDT|50 40|010101010101010101010|1Lzj0 1zb0 Op0 1zb0 3iN0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|23e5","Antarctica/Palmer|-03 -04|30 40|01010|1LSP0 Rd0 46n0 Ap0|40","America/Santiago|-03 -04|30 40|010101010101010101010|1LSP0 Rd0 46n0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1zb0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 11B0|62e5","America/Sao_Paulo|-02 -03|20 30|01010101010101010101010|1LqO0 1C10 On0 1zd0 On0 1zd0 On0 1zd0 On0 1HB0 FX0 1HB0 FX0 1HB0 IL0 1HB0 FX0 1HB0 IL0 1EN0 FX0 1HB0|20e6","Atlantic/Azores|-01 +00|10 0|01010101010101010101010|1LHB0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00|25e4","America/St_Johns|NST NDT|3u 2u|01010101010101010101010|1Lzhu 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|11e4","Antarctica/Casey|+08 +11|-80 -b0|010|1RWg0 3m10|10","Asia/Bangkok|+07|-70|0||15e6","Pacific/Port_Moresby|+10|-a0|0||25e4","Pacific/Guadalcanal|+11|-b0|0||11e4","Asia/Tashkent|+05|-50|0||23e5","Pacific/Auckland|NZDT NZST|-d0 -c0|01010101010101010101010|1LKe0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1io0 1a00|14e5","Asia/Baghdad|+03|-30|0||66e5","Antarctica/Troll|+00 +02|0 -20|01010101010101010101010|1LHB0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00|40","Asia/Dhaka|+06|-60|0||16e6","Asia/Amman|EET EEST|-20 -30|01010101010101010101010|1LGK0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00|25e5","Asia/Kamchatka|+12|-c0|0||18e4","Asia/Baku|+04 +05|-40 -50|01010|1LHA0 1o00 11A0 1o00|27e5","Asia/Barnaul|+07 +06|-70 -60|010|1N7v0 3rd0","Asia/Beirut|EET EEST|-20 -30|01010101010101010101010|1LHy0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0|22e5","Asia/Kuala_Lumpur|+08|-80|0||71e5","Asia/Kolkata|IST|-5u|0||15e6","Asia/Chita|+10 +08 +09|-a0 -80 -90|012|1N7s0 3re0|33e4","Asia/Ulaanbaatar|+08 +09|-80 -90|01010|1O8G0 1cJ0 1cP0 1cJ0|12e5","Asia/Shanghai|CST|-80|0||23e6","Asia/Colombo|+0530|-5u|0||22e5","Asia/Damascus|EET EEST|-20 -30|01010101010101010101010|1LGK0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0|26e5","Asia/Dili|+09|-90|0||19e4","Asia/Dubai|+04|-40|0||39e5","Asia/Famagusta|EET EEST +03|-20 -30 -30|0101012010101010101010|1LHB0 1o00 11A0 1o00 11A0 15U0 2Ks0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00","Asia/Gaza|EET EEST|-20 -30|01010101010101010101010|1LGK0 1nX0 1210 1nz0 1220 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0|18e5","Asia/Hong_Kong|HKT|-80|0||73e5","Asia/Hovd|+07 +08|-70 -80|01010|1O8H0 1cJ0 1cP0 1cJ0|81e3","Asia/Irkutsk|+09 +08|-90 -80|01|1N7t0|60e4","Europe/Istanbul|EET EEST +03|-20 -30 -30|0101012|1LI10 1nA0 11A0 1tA0 U00 15w0|13e6","Asia/Jakarta|WIB|-70|0||31e6","Asia/Jayapura|WIT|-90|0||26e4","Asia/Jerusalem|IST IDT|-20 -30|01010101010101010101010|1LGM0 1oL0 10N0 1oL0 10N0 1rz0 W10 1rz0 W10 1rz0 10N0 1oL0 10N0 1oL0 10N0 1rz0 W10 1rz0 W10 1rz0 10N0 1oL0|81e4","Asia/Kabul|+0430|-4u|0||46e5","Asia/Karachi|PKT|-50|0||24e6","Asia/Kathmandu|+0545|-5J|0||12e5","Asia/Yakutsk|+10 +09|-a0 -90|01|1N7s0|28e4","Asia/Krasnoyarsk|+08 +07|-80 -70|01|1N7u0|10e5","Asia/Magadan|+12 +10 +11|-c0 -a0 -b0|012|1N7q0 3Cq0|95e3","Asia/Makassar|WITA|-80|0||15e5","Asia/Manila|PST|-80|0||24e6","Europe/Athens|EET EEST|-20 -30|01010101010101010101010|1LHB0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00|35e5","Asia/Novosibirsk|+07 +06|-70 -60|010|1N7v0 4eN0|15e5","Asia/Omsk|+07 +06|-70 -60|01|1N7v0|12e5","Asia/Pyongyang|KST KST|-90 -8u|010|1P4D0 6BA0|29e5","Asia/Qyzylorda|+06 +05|-60 -50|01|1Xei0|73e4","Asia/Rangoon|+0630|-6u|0||48e5","Asia/Sakhalin|+11 +10|-b0 -a0|010|1N7r0 3rd0|58e4","Asia/Seoul|KST|-90|0||23e6","Asia/Srednekolymsk|+12 +11|-c0 -b0|01|1N7q0|35e2","Asia/Tehran|+0330 +0430|-3u -4u|01010101010101010101010|1LEku 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0|14e6","Asia/Tokyo|JST|-90|0||38e6","Asia/Tomsk|+07 +06|-70 -60|010|1N7v0 3Qp0|10e5","Asia/Vladivostok|+11 +10|-b0 -a0|01|1N7r0|60e4","Asia/Yekaterinburg|+06 +05|-60 -50|01|1N7w0|14e5","Europe/Lisbon|WET WEST|0 -10|01010101010101010101010|1LHB0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00|27e5","Atlantic/Cape_Verde|-01|10|0||50e4","Australia/Sydney|AEDT AEST|-b0 -a0|01010101010101010101010|1LKg0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0|40e5","Australia/Adelaide|ACDT ACST|-au -9u|01010101010101010101010|1LKgu 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0|11e5","Australia/Brisbane|AEST|-a0|0||20e5","Australia/Darwin|ACST|-9u|0||12e4","Australia/Eucla|+0845|-8J|0||368","Australia/Lord_Howe|+11 +1030|-b0 -au|01010101010101010101010|1LKf0 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1fAu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1fzu 1cMu|347","Australia/Perth|AWST|-80|0||18e5","Pacific/Easter|-05 -06|50 60|010101010101010101010|1LSP0 Rd0 46n0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1zb0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 11B0|30e2","Europe/Dublin|GMT IST|0 -10|01010101010101010101010|1LHB0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00|12e5","Etc/GMT-1|+01|-10|0|","Pacific/Fakaofo|+13|-d0|0||483","Pacific/Kiritimati|+14|-e0|0||51e2","Etc/GMT-2|+02|-20|0|","Pacific/Tahiti|-10|a0|0||18e4","Pacific/Niue|-11|b0|0||12e2","Etc/GMT+12|-12|c0|0|","Pacific/Galapagos|-06|60|0||25e3","Etc/GMT+7|-07|70|0|","Pacific/Pitcairn|-08|80|0||56","Pacific/Gambier|-09|90|0||125","Etc/UTC|UTC|0|0|","Europe/Ulyanovsk|+04 +03|-40 -30|010|1N7y0 3rd0|13e5","Europe/London|GMT BST|0 -10|01010101010101010101010|1LHB0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00|10e6","Europe/Chisinau|EET EEST|-20 -30|01010101010101010101010|1LHA0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00|67e4","Europe/Kaliningrad|+03 EET|-30 -20|01|1N7z0|44e4","Europe/Kirov|+04 +03|-40 -30|01|1N7y0|48e4","Europe/Moscow|MSK MSK|-40 -30|01|1N7y0|16e6","Europe/Saratov|+04 +03|-40 -30|010|1N7y0 5810","Europe/Simferopol|EET MSK MSK|-20 -40 -30|012|1LHA0 1nW0|33e4","Europe/Volgograd|+04 +03|-40 -30|010|1N7y0 9Jd0|10e5","Pacific/Honolulu|HST|a0|0||37e4","MET|MET MEST|-10 -20|01010101010101010101010|1LHB0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00","Pacific/Chatham|+1345 +1245|-dJ -cJ|01010101010101010101010|1LKe0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1io0 1a00|600","Pacific/Apia|+14 +13|-e0 -d0|01010101010101010101010|1LKe0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1io0 1a00|37e3","Pacific/Bougainville|+10 +11|-a0 -b0|01|1NwE0|18e4","Pacific/Fiji|+13 +12|-d0 -c0|01010101010101010101010|1Lfp0 1SN0 uM0 1SM0 uM0 1VA0 s00 1VA0 s00 1VA0 s00 1VA0 uM0 1SM0 uM0 1VA0 s00 1VA0 s00 1VA0 s00 1VA0|88e4","Pacific/Guam|ChST|-a0|0||17e4","Pacific/Marquesas|-0930|9u|0||86e2","Pacific/Pago_Pago|SST|b0|0||37e2","Pacific/Norfolk|+1130 +11|-bu -b0|01|1PoCu|25e4","Pacific/Tongatapu|+13 +14|-d0 -e0|010|1S4d0 s00|75e3"],links:["Africa/Abidjan|Africa/Accra","Africa/Abidjan|Africa/Bamako","Africa/Abidjan|Africa/Banjul","Africa/Abidjan|Africa/Bissau","Africa/Abidjan|Africa/Conakry","Africa/Abidjan|Africa/Dakar","Africa/Abidjan|Africa/Freetown","Africa/Abidjan|Africa/Lome","Africa/Abidjan|Africa/Monrovia","Africa/Abidjan|Africa/Nouakchott","Africa/Abidjan|Africa/Ouagadougou","Africa/Abidjan|Africa/Timbuktu","Africa/Abidjan|America/Danmarkshavn","Africa/Abidjan|Atlantic/Reykjavik","Africa/Abidjan|Atlantic/St_Helena","Africa/Abidjan|Etc/GMT","Africa/Abidjan|Etc/GMT+0","Africa/Abidjan|Etc/GMT-0","Africa/Abidjan|Etc/GMT0","Africa/Abidjan|Etc/Greenwich","Africa/Abidjan|GMT","Africa/Abidjan|GMT+0","Africa/Abidjan|GMT-0","Africa/Abidjan|GMT0","Africa/Abidjan|Greenwich","Africa/Abidjan|Iceland","Africa/Algiers|Africa/Tunis","Africa/Cairo|Egypt","Africa/Casablanca|Africa/El_Aaiun","Africa/Johannesburg|Africa/Maseru","Africa/Johannesburg|Africa/Mbabane","Africa/Lagos|Africa/Bangui","Africa/Lagos|Africa/Brazzaville","Africa/Lagos|Africa/Douala","Africa/Lagos|Africa/Kinshasa","Africa/Lagos|Africa/Libreville","Africa/Lagos|Africa/Luanda","Africa/Lagos|Africa/Malabo","Africa/Lagos|Africa/Ndjamena","Africa/Lagos|Africa/Niamey","Africa/Lagos|Africa/Porto-Novo","Africa/Maputo|Africa/Blantyre","Africa/Maputo|Africa/Bujumbura","Africa/Maputo|Africa/Gaborone","Africa/Maputo|Africa/Harare","Africa/Maputo|Africa/Kigali","Africa/Maputo|Africa/Lubumbashi","Africa/Maputo|Africa/Lusaka","Africa/Nairobi|Africa/Addis_Ababa","Africa/Nairobi|Africa/Asmara","Africa/Nairobi|Africa/Asmera","Africa/Nairobi|Africa/Dar_es_Salaam","Africa/Nairobi|Africa/Djibouti","Africa/Nairobi|Africa/Juba","Africa/Nairobi|Africa/Kampala","Africa/Nairobi|Africa/Mogadishu","Africa/Nairobi|Indian/Antananarivo","Africa/Nairobi|Indian/Comoro","Africa/Nairobi|Indian/Mayotte","Africa/Tripoli|Libya","America/Adak|America/Atka","America/Adak|US/Aleutian","America/Anchorage|America/Juneau","America/Anchorage|America/Nome","America/Anchorage|America/Sitka","America/Anchorage|America/Yakutat","America/Anchorage|US/Alaska","America/Campo_Grande|America/Cuiaba","America/Chicago|America/Indiana/Knox","America/Chicago|America/Indiana/Tell_City","America/Chicago|America/Knox_IN","America/Chicago|America/Matamoros","America/Chicago|America/Menominee","America/Chicago|America/North_Dakota/Beulah","America/Chicago|America/North_Dakota/Center","America/Chicago|America/North_Dakota/New_Salem","America/Chicago|America/Rainy_River","America/Chicago|America/Rankin_Inlet","America/Chicago|America/Resolute","America/Chicago|America/Winnipeg","America/Chicago|CST6CDT","America/Chicago|Canada/Central","America/Chicago|US/Central","America/Chicago|US/Indiana-Starke","America/Chihuahua|America/Mazatlan","America/Chihuahua|Mexico/BajaSur","America/Denver|America/Boise","America/Denver|America/Cambridge_Bay","America/Denver|America/Edmonton","America/Denver|America/Inuvik","America/Denver|America/Ojinaga","America/Denver|America/Shiprock","America/Denver|America/Yellowknife","America/Denver|Canada/Mountain","America/Denver|MST7MDT","America/Denver|Navajo","America/Denver|US/Mountain","America/Fortaleza|America/Araguaina","America/Fortaleza|America/Argentina/Buenos_Aires","America/Fortaleza|America/Argentina/Catamarca","America/Fortaleza|America/Argentina/ComodRivadavia","America/Fortaleza|America/Argentina/Cordoba","America/Fortaleza|America/Argentina/Jujuy","America/Fortaleza|America/Argentina/La_Rioja","America/Fortaleza|America/Argentina/Mendoza","America/Fortaleza|America/Argentina/Rio_Gallegos","America/Fortaleza|America/Argentina/Salta","America/Fortaleza|America/Argentina/San_Juan","America/Fortaleza|America/Argentina/San_Luis","America/Fortaleza|America/Argentina/Tucuman","America/Fortaleza|America/Argentina/Ushuaia","America/Fortaleza|America/Bahia","America/Fortaleza|America/Belem","America/Fortaleza|America/Buenos_Aires","America/Fortaleza|America/Catamarca","America/Fortaleza|America/Cayenne","America/Fortaleza|America/Cordoba","America/Fortaleza|America/Jujuy","America/Fortaleza|America/Maceio","America/Fortaleza|America/Mendoza","America/Fortaleza|America/Paramaribo","America/Fortaleza|America/Recife","America/Fortaleza|America/Rosario","America/Fortaleza|America/Santarem","America/Fortaleza|Antarctica/Rothera","America/Fortaleza|Atlantic/Stanley","America/Fortaleza|Etc/GMT+3","America/Halifax|America/Glace_Bay","America/Halifax|America/Goose_Bay","America/Halifax|America/Moncton","America/Halifax|America/Thule","America/Halifax|Atlantic/Bermuda","America/Halifax|Canada/Atlantic","America/Havana|Cuba","America/La_Paz|America/Boa_Vista","America/La_Paz|America/Guyana","America/La_Paz|America/Manaus","America/La_Paz|America/Porto_Velho","America/La_Paz|Brazil/West","America/La_Paz|Etc/GMT+4","America/Lima|America/Bogota","America/Lima|America/Eirunepe","America/Lima|America/Guayaquil","America/Lima|America/Porto_Acre","America/Lima|America/Rio_Branco","America/Lima|Brazil/Acre","America/Lima|Etc/GMT+5","America/Los_Angeles|America/Dawson","America/Los_Angeles|America/Ensenada","America/Los_Angeles|America/Santa_Isabel","America/Los_Angeles|America/Tijuana","America/Los_Angeles|America/Vancouver","America/Los_Angeles|America/Whitehorse","America/Los_Angeles|Canada/Pacific","America/Los_Angeles|Canada/Yukon","America/Los_Angeles|Mexico/BajaNorte","America/Los_Angeles|PST8PDT","America/Los_Angeles|US/Pacific","America/Los_Angeles|US/Pacific-New","America/Managua|America/Belize","America/Managua|America/Costa_Rica","America/Managua|America/El_Salvador","America/Managua|America/Guatemala","America/Managua|America/Regina","America/Managua|America/Swift_Current","America/Managua|America/Tegucigalpa","America/Managua|Canada/Saskatchewan","America/Mexico_City|America/Bahia_Banderas","America/Mexico_City|America/Merida","America/Mexico_City|America/Monterrey","America/Mexico_City|Mexico/General","America/New_York|America/Detroit","America/New_York|America/Fort_Wayne","America/New_York|America/Indiana/Indianapolis","America/New_York|America/Indiana/Marengo","America/New_York|America/Indiana/Petersburg","America/New_York|America/Indiana/Vevay","America/New_York|America/Indiana/Vincennes","America/New_York|America/Indiana/Winamac","America/New_York|America/Indianapolis","America/New_York|America/Iqaluit","America/New_York|America/Kentucky/Louisville","America/New_York|America/Kentucky/Monticello","America/New_York|America/Louisville","America/New_York|America/Montreal","America/New_York|America/Nassau","America/New_York|America/Nipigon","America/New_York|America/Pangnirtung","America/New_York|America/Thunder_Bay","America/New_York|America/Toronto","America/New_York|Canada/Eastern","America/New_York|EST5EDT","America/New_York|US/East-Indiana","America/New_York|US/Eastern","America/New_York|US/Michigan","America/Noronha|Atlantic/South_Georgia","America/Noronha|Brazil/DeNoronha","America/Noronha|Etc/GMT+2","America/Panama|America/Atikokan","America/Panama|America/Cayman","America/Panama|America/Coral_Harbour","America/Panama|America/Jamaica","America/Panama|EST","America/Panama|Jamaica","America/Phoenix|America/Creston","America/Phoenix|America/Dawson_Creek","America/Phoenix|America/Hermosillo","America/Phoenix|MST","America/Phoenix|US/Arizona","America/Santiago|Chile/Continental","America/Santo_Domingo|America/Anguilla","America/Santo_Domingo|America/Antigua","America/Santo_Domingo|America/Aruba","America/Santo_Domingo|America/Barbados","America/Santo_Domingo|America/Blanc-Sablon","America/Santo_Domingo|America/Curacao","America/Santo_Domingo|America/Dominica","America/Santo_Domingo|America/Grenada","America/Santo_Domingo|America/Guadeloupe","America/Santo_Domingo|America/Kralendijk","America/Santo_Domingo|America/Lower_Princes","America/Santo_Domingo|America/Marigot","America/Santo_Domingo|America/Martinique","America/Santo_Domingo|America/Montserrat","America/Santo_Domingo|America/Port_of_Spain","America/Santo_Domingo|America/Puerto_Rico","America/Santo_Domingo|America/St_Barthelemy","America/Santo_Domingo|America/St_Kitts","America/Santo_Domingo|America/St_Lucia","America/Santo_Domingo|America/St_Thomas","America/Santo_Domingo|America/St_Vincent","America/Santo_Domingo|America/Tortola","America/Santo_Domingo|America/Virgin","America/Sao_Paulo|Brazil/East","America/St_Johns|Canada/Newfoundland","Antarctica/Palmer|America/Punta_Arenas","Asia/Baghdad|Antarctica/Syowa","Asia/Baghdad|Asia/Aden","Asia/Baghdad|Asia/Bahrain","Asia/Baghdad|Asia/Kuwait","Asia/Baghdad|Asia/Qatar","Asia/Baghdad|Asia/Riyadh","Asia/Baghdad|Etc/GMT-3","Asia/Baghdad|Europe/Minsk","Asia/Bangkok|Antarctica/Davis","Asia/Bangkok|Asia/Ho_Chi_Minh","Asia/Bangkok|Asia/Novokuznetsk","Asia/Bangkok|Asia/Phnom_Penh","Asia/Bangkok|Asia/Saigon","Asia/Bangkok|Asia/Vientiane","Asia/Bangkok|Etc/GMT-7","Asia/Bangkok|Indian/Christmas","Asia/Dhaka|Antarctica/Vostok","Asia/Dhaka|Asia/Almaty","Asia/Dhaka|Asia/Bishkek","Asia/Dhaka|Asia/Dacca","Asia/Dhaka|Asia/Kashgar","Asia/Dhaka|Asia/Qostanay","Asia/Dhaka|Asia/Thimbu","Asia/Dhaka|Asia/Thimphu","Asia/Dhaka|Asia/Urumqi","Asia/Dhaka|Etc/GMT-6","Asia/Dhaka|Indian/Chagos","Asia/Dili|Etc/GMT-9","Asia/Dili|Pacific/Palau","Asia/Dubai|Asia/Muscat","Asia/Dubai|Asia/Tbilisi","Asia/Dubai|Asia/Yerevan","Asia/Dubai|Etc/GMT-4","Asia/Dubai|Europe/Samara","Asia/Dubai|Indian/Mahe","Asia/Dubai|Indian/Mauritius","Asia/Dubai|Indian/Reunion","Asia/Gaza|Asia/Hebron","Asia/Hong_Kong|Hongkong","Asia/Jakarta|Asia/Pontianak","Asia/Jerusalem|Asia/Tel_Aviv","Asia/Jerusalem|Israel","Asia/Kamchatka|Asia/Anadyr","Asia/Kamchatka|Etc/GMT-12","Asia/Kamchatka|Kwajalein","Asia/Kamchatka|Pacific/Funafuti","Asia/Kamchatka|Pacific/Kwajalein","Asia/Kamchatka|Pacific/Majuro","Asia/Kamchatka|Pacific/Nauru","Asia/Kamchatka|Pacific/Tarawa","Asia/Kamchatka|Pacific/Wake","Asia/Kamchatka|Pacific/Wallis","Asia/Kathmandu|Asia/Katmandu","Asia/Kolkata|Asia/Calcutta","Asia/Kuala_Lumpur|Asia/Brunei","Asia/Kuala_Lumpur|Asia/Kuching","Asia/Kuala_Lumpur|Asia/Singapore","Asia/Kuala_Lumpur|Etc/GMT-8","Asia/Kuala_Lumpur|Singapore","Asia/Makassar|Asia/Ujung_Pandang","Asia/Rangoon|Asia/Yangon","Asia/Rangoon|Indian/Cocos","Asia/Seoul|ROK","Asia/Shanghai|Asia/Chongqing","Asia/Shanghai|Asia/Chungking","Asia/Shanghai|Asia/Harbin","Asia/Shanghai|Asia/Macao","Asia/Shanghai|Asia/Macau","Asia/Shanghai|Asia/Taipei","Asia/Shanghai|PRC","Asia/Shanghai|ROC","Asia/Tashkent|Antarctica/Mawson","Asia/Tashkent|Asia/Aqtau","Asia/Tashkent|Asia/Aqtobe","Asia/Tashkent|Asia/Ashgabat","Asia/Tashkent|Asia/Ashkhabad","Asia/Tashkent|Asia/Atyrau","Asia/Tashkent|Asia/Dushanbe","Asia/Tashkent|Asia/Oral","Asia/Tashkent|Asia/Samarkand","Asia/Tashkent|Etc/GMT-5","Asia/Tashkent|Indian/Kerguelen","Asia/Tashkent|Indian/Maldives","Asia/Tehran|Iran","Asia/Tokyo|Japan","Asia/Ulaanbaatar|Asia/Choibalsan","Asia/Ulaanbaatar|Asia/Ulan_Bator","Asia/Vladivostok|Asia/Ust-Nera","Asia/Yakutsk|Asia/Khandyga","Atlantic/Azores|America/Scoresbysund","Atlantic/Cape_Verde|Etc/GMT+1","Australia/Adelaide|Australia/Broken_Hill","Australia/Adelaide|Australia/South","Australia/Adelaide|Australia/Yancowinna","Australia/Brisbane|Australia/Lindeman","Australia/Brisbane|Australia/Queensland","Australia/Darwin|Australia/North","Australia/Lord_Howe|Australia/LHI","Australia/Perth|Australia/West","Australia/Sydney|Australia/ACT","Australia/Sydney|Australia/Canberra","Australia/Sydney|Australia/Currie","Australia/Sydney|Australia/Hobart","Australia/Sydney|Australia/Melbourne","Australia/Sydney|Australia/NSW","Australia/Sydney|Australia/Tasmania","Australia/Sydney|Australia/Victoria","Etc/UTC|Etc/UCT","Etc/UTC|Etc/Universal","Etc/UTC|Etc/Zulu","Etc/UTC|UCT","Etc/UTC|UTC","Etc/UTC|Universal","Etc/UTC|Zulu","Europe/Athens|Asia/Nicosia","Europe/Athens|EET","Europe/Athens|Europe/Bucharest","Europe/Athens|Europe/Helsinki","Europe/Athens|Europe/Kiev","Europe/Athens|Europe/Mariehamn","Europe/Athens|Europe/Nicosia","Europe/Athens|Europe/Riga","Europe/Athens|Europe/Sofia","Europe/Athens|Europe/Tallinn","Europe/Athens|Europe/Uzhgorod","Europe/Athens|Europe/Vilnius","Europe/Athens|Europe/Zaporozhye","Europe/Chisinau|Europe/Tiraspol","Europe/Dublin|Eire","Europe/Istanbul|Asia/Istanbul","Europe/Istanbul|Turkey","Europe/Lisbon|Atlantic/Canary","Europe/Lisbon|Atlantic/Faeroe","Europe/Lisbon|Atlantic/Faroe","Europe/Lisbon|Atlantic/Madeira","Europe/Lisbon|Portugal","Europe/Lisbon|WET","Europe/London|Europe/Belfast","Europe/London|Europe/Guernsey","Europe/London|Europe/Isle_of_Man","Europe/London|Europe/Jersey","Europe/London|GB","Europe/London|GB-Eire","Europe/Moscow|W-SU","Europe/Paris|Africa/Ceuta","Europe/Paris|Arctic/Longyearbyen","Europe/Paris|Atlantic/Jan_Mayen","Europe/Paris|CET","Europe/Paris|Europe/Amsterdam","Europe/Paris|Europe/Andorra","Europe/Paris|Europe/Belgrade","Europe/Paris|Europe/Berlin","Europe/Paris|Europe/Bratislava","Europe/Paris|Europe/Brussels","Europe/Paris|Europe/Budapest","Europe/Paris|Europe/Busingen","Europe/Paris|Europe/Copenhagen","Europe/Paris|Europe/Gibraltar","Europe/Paris|Europe/Ljubljana","Europe/Paris|Europe/Luxembourg","Europe/Paris|Europe/Madrid","Europe/Paris|Europe/Malta","Europe/Paris|Europe/Monaco","Europe/Paris|Europe/Oslo","Europe/Paris|Europe/Podgorica","Europe/Paris|Europe/Prague","Europe/Paris|Europe/Rome","Europe/Paris|Europe/San_Marino","Europe/Paris|Europe/Sarajevo","Europe/Paris|Europe/Skopje","Europe/Paris|Europe/Stockholm","Europe/Paris|Europe/Tirane","Europe/Paris|Europe/Vaduz","Europe/Paris|Europe/Vatican","Europe/Paris|Europe/Vienna","Europe/Paris|Europe/Warsaw","Europe/Paris|Europe/Zagreb","Europe/Paris|Europe/Zurich","Europe/Paris|Poland","Europe/Ulyanovsk|Europe/Astrakhan","Pacific/Auckland|Antarctica/McMurdo","Pacific/Auckland|Antarctica/South_Pole","Pacific/Auckland|NZ","Pacific/Chatham|NZ-CHAT","Pacific/Easter|Chile/EasterIsland","Pacific/Fakaofo|Etc/GMT-13","Pacific/Fakaofo|Pacific/Enderbury","Pacific/Galapagos|Etc/GMT+6","Pacific/Gambier|Etc/GMT+9","Pacific/Guadalcanal|Antarctica/Macquarie","Pacific/Guadalcanal|Etc/GMT-11","Pacific/Guadalcanal|Pacific/Efate","Pacific/Guadalcanal|Pacific/Kosrae","Pacific/Guadalcanal|Pacific/Noumea","Pacific/Guadalcanal|Pacific/Pohnpei","Pacific/Guadalcanal|Pacific/Ponape","Pacific/Guam|Pacific/Saipan","Pacific/Honolulu|HST","Pacific/Honolulu|Pacific/Johnston","Pacific/Honolulu|US/Hawaii","Pacific/Kiritimati|Etc/GMT-14","Pacific/Niue|Etc/GMT+11","Pacific/Pago_Pago|Pacific/Midway","Pacific/Pago_Pago|Pacific/Samoa","Pacific/Pago_Pago|US/Samoa","Pacific/Pitcairn|Etc/GMT+8","Pacific/Port_Moresby|Antarctica/DumontDUrville","Pacific/Port_Moresby|Etc/GMT-10","Pacific/Port_Moresby|Pacific/Chuuk","Pacific/Port_Moresby|Pacific/Truk","Pacific/Port_Moresby|Pacific/Yap","Pacific/Tahiti|Etc/GMT+10","Pacific/Tahiti|Pacific/Rarotonga"]});
return G
}));
(function(a){var b={};
function c(e){if(b[e]){return b[e].exports
}var d=b[e]={i:e,l:false,exports:{}};
a[e].call(d.exports,d,d.exports,c);
d.l=true;
return d.exports
}c.m=a;
c.c=b;
c.d=function(e,f,d){if(!c.o(e,f)){Object.defineProperty(e,f,{enumerable:true,get:d})
}};
c.r=function(d){if(typeof Symbol!=="undefined"&&Symbol.toStringTag){Object.defineProperty(d,Symbol.toStringTag,{value:"Module"})
}Object.defineProperty(d,"__esModule",{value:true})
};
c.t=function(f,g){if(g&1){f=c(f)
}if(g&8){return f
}if((g&4)&&typeof f==="object"&&f&&f.__esModule){return f
}var e=Object.create(null);
c.r(e);
Object.defineProperty(e,"default",{enumerable:true,value:f});
if(g&2&&typeof f!="string"){for(var d in f){c.d(e,d,function(h){return f[h]
}.bind(null,d))
}}return e
};
c.n=function(e){var d=e&&e.__esModule?function f(){return e["default"]
}:function g(){return e
};
c.d(d,"a",d);
return d
};
c.o=function(d,e){return Object.prototype.hasOwnProperty.call(d,e)
};
c.p="";
return c(c.s=0)
})([(function(b,a,c){b.exports=c(1)
}),(function(e,g,h){h.r(g);
var d=h(2);
var b=h.n(d);
var f=h(3);
var a=h.n(f);
var c=h(4);
new c.BrowserNotification(".browser-notification")
}),(function(b,a){window.Bootstrap=function(){return{jQuery:jQuery.noConflict()}
}()
}),(function(a,d){function e(k,l){if(!(k instanceof l)){throw new TypeError("Cannot call a class as a function")
}}function j(n,l){for(var k=0;
k<l.length;
k++){var m=l[k];
m.enumerable=m.enumerable||false;
m.configurable=true;
if("value" in m){m.writable=true
}Object.defineProperty(n,m.key,m)
}}function c(m,k,l){if(k){j(m.prototype,k)
}if(l){j(m,l)
}return m
}var f=Bootstrap.jQuery,g={ie:"rv:",ff:"Firefox/",safari:"Safari/",chrome:"Chrome/",edge:"Edg/"},h={android:"Android",iphone:"iPhone OS"};
var b=function(){function k(){e(this,k);
this.setUpUserAgentString();
this.setUpUserAgent();
this.useUserAgent()
}c(k,[{key:"setUpUserAgentString",value:function o(){this.userAgentString=navigator.userAgent
}},{key:"setUpUserAgent",value:function n(){for(var s in g){var q=this.constructor.fetchBrowserVersion(this.userAgentString,g[s]);
if(q){this.userAgent=s+"-"+q
}}for(var p in h){var r=this.constructor.fetchBrowserVersion(this.userAgentString,h[p]);
if(r){this.userAgent+=" "+p+"-"+r
}}}},{key:"useUserAgent",value:function l(){f("html").addClass(this.userAgent)
}}],[{key:"fetchBrowserVersion",value:function m(r,s){var q=r.split(s);
var p;
if(q.length===2){p=parseInt(q[1],10)
}return p
}}]);
return k
}();
new b()
}),(function(c,j,b){b.r(j);
b.d(j,"BrowserNotification",function(){return f
});
var a=b(5);
function g(m,n){if(!(m instanceof n)){throw new TypeError("Cannot call a class as a function")
}}function l(p,n){for(var m=0;
m<n.length;
m++){var o=n[m];
o.enumerable=o.enumerable||false;
o.configurable=true;
if("value" in o){o.writable=true
}Object.defineProperty(p,o.key,o)
}}function e(o,m,n){if(m){l(o.prototype,m)
}if(n){l(o,n)
}return o
}var h=Bootstrap.jQuery,k={browserNotification:".browser-notification",closeButton:".close-browser-notification",visible:":visible"},d={hidden:"hidden"};
var f=function(){function n(r){g(this,n);
this.$el=h(r);
this.$closeButton=this.$el.find(k.closeButton);
this.showBrowserNotification();
this.bindUiEvents()
}e(n,[{key:"bindUiEvents",value:function o(){var r=this;
this.$closeButton.on("click",function(){return r.closeBanner()
})
}},{key:"isIE10",value:function p(){return !!~navigator.userAgent.indexOf("MSIE 10")
}},{key:"showBrowserNotification",value:function m(){if(this.isIE10()){this.$el.removeClass(d.hidden)
}if(!this.$el.is(k.visible)){return
}a.TealiumUtils.trackEvent({event_category:"content",event_action:"popup",event_content:"Browser update banner"})
}},{key:"closeBanner",value:function q(){if(!this.$el.hasClass(d.hidden)){this.$el.addClass(d.hidden);
a.TealiumUtils.trackEvent({event_category:"content",event_action:"onsite",event_content:"Browser update banner close"})
}}}]);
return n
}()
}),(function(d,e,f){f.r(e);
f.d(e,"TealiumUtils",function(){return g
});
var g={trackEvent:function c(h){var j=window.TMS||null;
if(h&&j){j.trackEvent(h)
}},trackView:function b(h){var j=window.TMS||null;
if(h&&j){j.trackView(h)
}},trackEventWithInheritance:function a(j){var h={};
if(HSBC_utils.isTealiumReady){h={site_section:utag_data.site_section?utag_data.site_section:"",page_type:utag_data.page_type?utag_data.page_type:"",page_customer_group:utag_data.page_customer_group?utag_data.page_customer_group:"",page_category:utag_data.page_category?utag_data.page_category:"",page_subcategory:utag_data.page_subcategory?utag_data.page_subcategory:"",page_business_line:utag_data.page_business_line?utag_data.page_business_line:"",page_security_level:utag_data.page_security_level?utag_data.page_security_level:""}
}this.trackEvent(Bootstrap.jQuery.extend(h,j))
}}
})]);
(function(a){var b={};
function c(e){if(b[e]){return b[e].exports
}var d=b[e]={i:e,l:false,exports:{}};
a[e].call(d.exports,d,d.exports,c);
d.l=true;
return d.exports
}c.m=a;
c.c=b;
c.d=function(e,f,d){if(!c.o(e,f)){Object.defineProperty(e,f,{enumerable:true,get:d})
}};
c.r=function(d){if(typeof Symbol!=="undefined"&&Symbol.toStringTag){Object.defineProperty(d,Symbol.toStringTag,{value:"Module"})
}Object.defineProperty(d,"__esModule",{value:true})
};
c.t=function(f,g){if(g&1){f=c(f)
}if(g&8){return f
}if((g&4)&&typeof f==="object"&&f&&f.__esModule){return f
}var e=Object.create(null);
c.r(e);
Object.defineProperty(e,"default",{enumerable:true,value:f});
if(g&2&&typeof f!="string"){for(var d in f){c.d(e,d,function(h){return f[h]
}.bind(null,d))
}}return e
};
c.n=function(e){var d=e&&e.__esModule?function f(){return e["default"]
}:function g(){return e
};
c.d(d,"a",d);
return d
};
c.o=function(d,e){return Object.prototype.hasOwnProperty.call(d,e)
};
c.p="";
return c(c.s=224)
})({14:(function(d,e,h){h.r(e);
h.d(e,"DataKeeper",function(){return a
});
function g(j,k){if(!(j instanceof k)){throw new TypeError("Cannot call a class as a function")
}}function b(m,k){for(var j=0;
j<k.length;
j++){var l=k[j];
l.enumerable=l.enumerable||false;
l.configurable=true;
if("value" in l){l.writable=true
}Object.defineProperty(m,l.key,l)
}}function c(l,j,k){if(j){b(l.prototype,j)
}if(k){b(l,k)
}return l
}var f=Bootstrap.jQuery;
var a=function(){function j(o){g(this,j);
this.lang=j.setUpLang();
this.settings=f.extend({name:"HSBC_"+this.lang+"_"+this.constructor.name,cookieSettings:{path:"/",expires:{days:365}},session:false,forceCookie:false,sessionCookieSettings:{path:"/"}},o);
this.localStorage=window.localStorage;
this.sessionStorage=window.sessionStorage;
this.hasLocalStorage=typeof this.localStorage!=="undefined";
this.hasSessionStorage=typeof this.sessionStorage!=="undefined";
this.setCookie=HSBC_utils.setCookie;
this.getCookie=HSBC_utils.getCookie
}c(j,[{key:"save",value:function m(o){var p=o||{};
if(this.settings.session){if(this.hasSessionStorage&&!this.settings.forceCookie){this.sessionStorage[this.settings.name]=JSON.stringify(p)
}else{this.setCookie(this.settings.name,JSON.stringify(p),this.settings.sessionCookieSettings)
}}else{if(this.hasLocalStorage&&!this.settings.forceCookie){this.localStorage[this.settings.name]=JSON.stringify(p)
}else{this.setCookie(this.settings.name,JSON.stringify(p),this.settings.cookieSettings)
}}}},{key:"read",value:function n(){if(this.settings.session){if(this.hasSessionStorage&&!this.settings.forceCookie){return j.parseData(this.sessionStorage[this.settings.name])
}return j.parseData(this.getCookie(this.settings.name))
}else{if(this.hasLocalStorage&&!this.settings.forceCookie){return j.parseData(this.localStorage[this.settings.name])
}return j.parseData(this.getCookie(this.settings.name))
}}}],[{key:"parseData",value:function l(o){return o?JSON.parse(o):{}
}},{key:"setUpLang",value:function k(){return f("html").attr("lang")
}}]);
return j
}()
}),224:(function(b,a,c){c(225);
c(226);
c(227);
c(228);
c(241);
c(242);
c(243);
c(244);
c(245);
c(246);
c(5);
b.exports=c(247)
}),225:(function(e,b){function h(j,k){if(!(j instanceof k)){throw new TypeError("Cannot call a class as a function")
}}function a(m,k){for(var j=0;
j<k.length;
j++){var l=k[j];
l.enumerable=l.enumerable||false;
l.configurable=true;
if("value" in l){l.writable=true
}Object.defineProperty(m,l.key,l)
}}function d(l,j,k){if(j){a(l.prototype,j)
}if(k){a(l,k)
}return l
}var g=Bootstrap.jQuery,c={fieldsForValidation:"[data-validation-message]"};
var f=function(){function k(){h(this,k)
}d(k,null,[{key:"init",value:function l(){this.bindUIEvents()
}},{key:"bindUIEvents",value:function j(){var m=g(c.fieldsForValidation);
m.on("invalid",function(o){var n=g(o.target).data("validation-message");
if(n!==""){o.target.setCustomValidity(n)
}}).on("input",function(o){var n=g(o.target).data("validation-message");
o.target.setCustomValidity("");
if(o.target.validity.valid!==undefined&&!o.target.validity.valid&&n!==""){o.target.setCustomValidity(n)
}});
g(window).on("load",function(){g.each(m,function(n,o){o.setCustomValidity("")
})
})
}}]);
return k
}();
g(document).ready(function(){return f.init()
})
}),226:(function(b,a){(function(e){var c=["Edit","Design","Developer","Preview"],d=typeof parent.Granite!=="undefined"&&typeof parent.Granite.author!=="undefined"&&typeof parent.Granite.author.layerManager!=="undefined"&&c.indexOf(parent.Granite.author.layerManager.getCurrentLayer())!==-1;
if(e("body").data("exit-intent-confirm")&&!d){if("onbeforeunload" in window){e(window).on("beforeunload",function(){return" "
})
}else{if("onunload" in window){e(window).on("onunload",function(){return" "
})
}else{e(document).on("pagehide",function(){return" "
})
}}}})(Bootstrap.jQuery)
}),227:(function(b,a){(function(){window.GPWS=window.GPWS||{}
})()
}),228:(function(g,k,e){e.r(k);
e.d(k,"HSBC_utils",function(){return a
});
var l=e(229);
var f=e(236);
var c=e(238);
var m=e(239);
var d=e.n(m);
var j=e(240);
var b=e.n(j);
function h(o){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){n=function n(p){return typeof p
}
}else{n=function n(p){return p&&typeof Symbol==="function"&&p.constructor===Symbol&&p!==Symbol.prototype?"symbol":typeof p
}
}return n(o)
}var a=function(Z){var T=[];
var aj=new c["default"]();
var M=new f["default"](T);
var ar=new l["default"](M,aj);
var P={modules:T,configuration:aj,components:M,globalComponents:ar};
var D=[],ak=["a","button","input",'[tabindex="0"]'],t={small:480,medium:960,smallModern:768,mediumModern:1024,largeModern:1366,xlargeModern:1920},U={ENTER:13,SPACE:32,UP:38,DOWN:40,LEFT:37,RIGHT:39,ESC:27,TAB:9,SHIFT:16},am={mobile:7,tablet:9,desktop:10,smallModern:7,mediumModern:9,largeModern:10,xlargeModern:12,xxlargeModern:14},q={globalSettings:"global-settings"},ae={SECOND_MILLISECONDS:1000,MINUTE_MILLISECONDS:60*1000,HOUR_MILLISECONDS:60*60*1000,DAY_MILLISECONDS:24*60*60*1000},aa=navigator.userAgent,o=aa.toLowerCase().indexOf("firefox")>-1,L=aa.includes("MSIE")||navigator.appVersion.indexOf("Trident/")>0,an=aa.includes("Chrome"),v=aa.includes("Safari")&&!an&&!/(CriOS|FxiOS|OPiOS|mercury|UCBrowser|QQBrowser)/i.test(aa),ao=Number(aa.split("OS ").slice(1).join().slice(0,3).replace("_","."))<6,af=/iphone|ipad|ipod/i.test(aa),V=/android/i.test(aa),I=/Windows Phone/i.test(aa),s=Z("body").is('[class*="globalSmart"]'),H=typeof utag_data!=="undefined",K=Q(),y=J(),n=x(),ad=G(),Y=null,C=200,X=/iphone|android|webos|ipad|ipod|blackberry|iemobile|opera mini|Windows Phone/i.test(aa),ag=Z("html").attr("dir")=="rtl",p=Z("body").hasClass("landingPageTemplate");
function F(){var av=Z("a[href^=tel]");
if(!X){av.addClass("no-link").attr("role","presentation").click(function(aw){aw.preventDefault()
})
}}function ab(av){T.push(av);
if(av.reinitIfParent){D.push(av)
}}function W(av){T.splice(av,1)
}function r(av,ax){var ay=ax.querySelectorAll(av.selector);
for(var aw=0;
aw<ay.length;
aw++){if(!ay[aw].gpwsInitialized){R(av,ay[aw])
}}}function z(av,ax){var aw={name:av.name,selector:av.selector,instance:ax};
M.addInstanceToComponentsMap(aw)
}function R(av,aw){aw.gpwsInitialized=true;
var ax=av.init(aw,P);
z(av,ax)
}function al(ay){var ax=ay||document.body;
for(var aw=0;
aw<T.length;
aw++){var av=T[aw];
if(ay&&Z(ax).is(av.selector)){R(av,ax)
}else{r(av,ax)
}}F()
}function B(ax){do{ax=ax.parentNode
}while(ax&&!ax.gpwsInitialized);
if(!ax){return
}for(var aw=0;
aw<D.length;
aw++){var av=D[aw];
if(Z(ax).is(av.selector)){av.reinit(ax);
return
}}}function aq(){return aj.isEditMode()
}function E(){var av=["Preview"];
return typeof parent.Granite!=="undefined"&&typeof parent.Granite.author!=="undefined"&&typeof parent.Granite.author.layerManager!=="undefined"&&av.indexOf(parent.Granite.author.layerManager.getCurrentLayer())!==-1
}function ac(){return aj.isPatternLab()
}function ah(ay){var ax=T.length,aw=null,av=0;
if(ay.prevLayer!==ay.layer){if(ay.layer==="Edit"){aw="switchToEditHandler"
}else{if(ay.layer==="Preview"){aw="switchToPreviewHandler"
}}for(av;
av<ax;
av++){if(T[av][aw]){T[av][aw]()
}}}}function Q(){return{mobile:x()==="mobile",tablet:x()==="tablet",desktop:x()==="desktop"}
}function J(){return{smallModern:G()==="smallModern",mediumModern:G()==="mediumModern",largeModern:G()==="largeModern",xlargeModern:G()==="xlargeModern",xxlargeModern:G()==="xxlargeModern"}
}function x(){var aw="mobile",av=window.innerWidth;
if(av<t.small){aw="mobile"
}else{if(av>=t.medium){aw="desktop"
}else{aw="tablet"
}}return aw
}function G(){var av=window.innerWidth;
if(av<t.smallModern){return"smallModern"
}else{if(av<t.mediumModern){return"mediumModern"
}else{if(av<t.largeModern){return"largeModern"
}else{if(av<t.xlargeModern){return"xlargeModern"
}}}}return"xxlargeModern"
}function ap(){return am[x()]
}function S(){return am[G()]
}function O(){var aw=200,ax=1,av=300;
if(Y){return
}Y=setInterval(ay,av);
function ay(){al();
if(ax===aw){clearInterval(Y);
Y=null
}ax++
}}function N(av,aE,az){var aD=az||{};
if(!aD.domain){var aA=Z(document.body).data(q.globalSettings);
if(aA&&aA.cookieDomain){aD.domain=aA.cookieDomain
}}var aB,aF,aC,aw,ay;
aD=aD||{};
aB=aD?aD.expires:null;
if(h(aB)==="object"){var ax=0;
if(aB.milliseconds){ax=aB.milliseconds
}if(aB.seconds){ax+=aB.seconds*ae.SECOND_MILLISECONDS
}if(aB.minutes){ax+=aB.minutes*ae.MINUTE_MILLISECONDS
}if(aB.hours){ax+=aB.hours*ae.HOUR_MILLISECONDS
}if(aB.days){ax+=aB.days*ae.DAY_MILLISECONDS
}if(aB.months){ax+=aB.months*Math.floor(30.5*ae.DAY_MILLISECONDS)
}if(aB.years){ax+=aB.years*Math.floor(365.25*ae.DAY_MILLISECONDS)
}aB=ax
}if(typeof aB==="number"){if(aB!==0){ay=new Date();
ay.setTime(ay.getTime()+aB);
aD.expires=ay;
aB=aD.expires
}else{aD.expires=false
}}if(aB&&aB.toUTCString){aD.expires=aB.toUTCString()
}aE=encodeURIComponent(aE);
aF=av+"="+aE;
for(aC in aD){if(aD.hasOwnProperty(aC)&&aD[aC]){aw=aD[aC];
if(aw!==false){aF+="; "+aC;
if(aw!==true){aF+="="+aw
}}}}return aF
}function A(av,ax,aw){document.cookie=N(av,ax,aw)
}function ai(av,ax,aw){A(av,"",{domain:aw,path:ax,expires:"Thu, 01 Jan 1970 00:00:00 UTC"})
}function w(av){var ax=new RegExp("(?:^|; )"+av+"=([^;]*)"),aw=document.cookie.match(ax);
return aw?decodeURIComponent(aw[1]):undefined
}function at(aw,av){var az,aB,ay,ax,aA;
av=av||location.href;
aw=aw||"";
aw=aw.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");
az=new RegExp("[\\?&]"+aw+"=([^&#]*)");
aB=az.exec(av);
ay=aB==null?null:aB[1];
ax=ay!=null?decodeURIComponent(ay.replace(/\+/g,"%20")):null;
aA=d.a.sanitize(ax);
aA=Object(j.sanitizeUrl)(aA);
aA=aA==="about:blank"?null:aA;
return aA
}function u(aw){var av=arguments.length>1&&arguments[1]!==undefined?arguments[1]:false;
aw.animate({height:0},C,function(){if(av){aw.remove()
}})
}function au(aw){var ay=Z(":tabbable"),az=ay.length,av=ay.index(aw),ax=av+1;
if(ax<az){ay.get(ax).focus()
}}Z(window).on("resize",function(){var aw=x();
var av=G();
if(aw!==n){n=aw;
window.HSBC_utils.matchMedia=Q()
}if(av!==ad){ad=av;
window.HSBC_utils.matchMediaModern=J()
}});
return{deregisterComponent:W,init:al,initSegmentationFixInterval:O,isEditMode:aq,isPreviewMode:E,isPatternLab:ac,registerComponent:ab,reinitializeParent:B,dispatchLayerSwitchEvent:ah,prepareCookieString:N,setCookie:A,getCookie:w,deleteCookie:ai,keyCodes:U,matchMedia:K,matchMediaModern:y,getMatchMediaUnit:ap,getMatchMediaUnitModern:S,focusables:ak,getUrlParam:at,collapseElement:u,isFirefox:o,isInternetExplorer:L,isChrome:an,isSafari:v,iOSLowerVersion:ao,isMobileiOS:af,isMobileAndroid:V,isMobileWindowsPhone:I,isSmartTemplate:s,isTealiumReady:H,isRTL:ag,isCLP:p,focusOnTheNextTabbableElement:au}
}(jQuery);
window.HSBC_utils=a
}),229:(function(c,j,b){b.r(j);
b.d(j,"default",function(){return l
});
var g=b(230);
var h=b(231);
var d=b(232);
var k=b(233);
var a=b(235);
function f(n,o){if(!(n instanceof o)){throw new TypeError("Cannot call a class as a function")
}}function m(q,o){for(var n=0;
n<o.length;
n++){var p=o[n];
p.enumerable=p.enumerable||false;
p.configurable=true;
if("value" in p){p.writable=true
}Object.defineProperty(q,p.key,p)
}}function e(p,n,o){if(n){m(p.prototype,n)
}if(o){m(p,o)
}return p
}var l=function(){function p(t,u){f(this,p);
this.components=t;
this.configuration=u;
this.hashParser=this.getHashParser();
this.scrollService=this.getScrollService();
this.headerController=this.getHeaderController();
this.anchorScrollController=this.getAnchorScrollController();
if(this.headerController.havePinnedBanner){this.windowScrollMechanism=this.getWindowScrollMechanism()
}}e(p,[{key:"getHeaderController",value:function r(){return new a["default"](this)
}},{key:"getWindowScrollMechanism",value:function q(){return new k["default"](this)
}},{key:"getScrollService",value:function n(){return new g["default"](this)
}},{key:"getHashParser",value:function s(){return new h["default"](this)
}},{key:"getAnchorScrollController",value:function o(){return new d["default"](this)
}}]);
return p
}()
}),230:(function(b,f,a){a.r(f);
a.d(f,"default",function(){return g
});
function d(k,l){if(!(k instanceof l)){throw new TypeError("Cannot call a class as a function")
}}function j(n,l){for(var k=0;
k<l.length;
k++){var m=l[k];
m.enumerable=m.enumerable||false;
m.configurable=true;
if("value" in m){m.writable=true
}Object.defineProperty(n,m.key,m)
}}function c(m,k,l){if(k){j(m.prototype,k)
}if(l){j(m,l)
}return m
}var e=jQuery;
var h={mainContainer:".O-SMARTSPCGEN-DEV",horizontalTabs:{componentSelector:".generic-tabs",tabsContainer:".tabs-container",tabTitlePrefix:"#tab-title-",mobileTitleSuffix:"-mobile-anchor",contentTab:"tab-panel"},smartTabs:{componentSelector:".O-HRZTAB-RW-RBWM",tabContent:".tab-widget-tab-content",tabsWrapper:".tab-wrapper",container:".tabsHorizontal"},accordion:{component:".O-ACCRD-RW-RBWM",contentPanel:".exp-content",expanderContainer:".expander",dropdown:".dropdown",tabPanelPrefixToRemove:"tab-panel-"}};
var g=function(){function p(y){d(this,p);
this.globalComponents=y
}c(p,[{key:"calculateTopOffset",value:function m(z){var y=e(z);
if(y.length){return y.offset().top
}return 0
}},{key:"scrollToHtmlNode",value:function k(z){var y=this.calculateTopOffset(z);
if(y){var A=y-this.globalComponents.headerController.calculateHeaderHeight(z);
if(A>-1){e(document).scrollTop(A)
}}}},{key:"scrollToAccordionOrExpander",value:function x(y,z){var B=y.is(":visible")?y:e("".concat(h.accordion.component," ").concat(z));
var A=B.siblings(h.accordion.expanderContainer);
A=A.length?A:y.siblings().children(h.accordion.expanderContainer);
if(A.length){this.scrollToAccordionScrollLinkInHeader(A)
}else{this.scrollToAccordionScrollLinkInContent(B,y)
}}},{key:"scrollToAccordionScrollLinkInHeader",value:function u(y){var z=y.children(h.accordion.dropdown);
this.openAccordionAndScroll(z)
}},{key:"scrollToAccordionScrollLinkInContent",value:function r(A,z){var B=this;
var y=A.closest(h.accordion.expanderContainer).children(h.accordion.dropdown);
this.openAccordionAndScroll(y);
setTimeout(function(){e("html, body").animate({scrollTop:z.offset().top-B.globalComponents.headerController.calculateHeaderHeight(),easing:"easeOut"},500)
},500)
}},{key:"openAccordionAndScroll",value:function q(y){if(y.attr("aria-expanded")==="false"){y.click()
}else{this.scrollToHtmlNode(y)
}}},{key:"scrollToSmartTabs",value:function n(A,F){var D=A.closest(h.smartTabs.tabsWrapper);
var z=D;
var B;
var E=A.closest(h.smartTabs.tabContent);
if(E){var G=E.get(0).id;
B="#".concat(G);
if(this.isTargetInsideTabContent(E,F)){z=E.find(F)
}}var C=A.closest(h.smartTabs.componentSelector)[0];
var y=this.globalComponents.components.findComponentByHTMLNode(C);
if(y&&y.instance){y.instance.activeTab(B)
}this.scrollToHtmlNode(z)
}},{key:"isTargetInsideTabContent",value:function w(z,y){return z.find(y).length
}},{key:"openMobileTabsHorizontal",value:function l(y){var C;
var B;
if(y.hasClass("tab-title-item")){C=y.children("a");
B=e("#".concat(y.children("a").attr("aria-controls")))
}else{C=e("".concat(h.horizontalTabs.tabTitlePrefix).concat(y.first().attr("id")).concat(h.horizontalTabs.mobileTitleSuffix)).children("a");
B=e("#panel-".concat(y.first().attr("id")).concat(h.horizontalTabs.mobileTitleSuffix))
}var A=C.closest(h.horizontalTabs.componentSelector)[0];
var z=this.globalComponents.components.findComponentByHTMLNode(A);
var D=C.parent();
z.instance.cleanElements();
z.instance.setSelectedElement(D,B);
return C
}},{key:"openTabsHorizontal",value:function t(z){var B=e("".concat(h.horizontalTabs.tabTitlePrefix).concat(z.first().attr("id"))).children("a");
var y=B.closest(h.horizontalTabs.componentSelector)[0];
var A=this.globalComponents.components.findComponentByHTMLNode(y);
if(A){A.instance.togglePanel(B)
}}},{key:"scrollToHorizontalTabs",value:function v(y){var z=this.openMobileTabsHorizontal(y);
this.openTabsHorizontal(y);
this.scrollToHtmlNode(z.closest(h.mainContainer))
}},{key:"isExpanderOrAccordion",value:function s(y){return y.siblings(h.accordion.expanderContainer).length||y.siblings().children(h.accordion.expanderContainer).length
}},{key:"scroll",value:function o(G){var y=e(G);
if(this.globalComponents.headerController.checkMobileHeaderIsExpanded()){this.globalComponents.headerController.closeMobileHeader()
}var H=y.closest(h.smartTabs.tabsWrapper);
var z=H&&H.length;
var B=y.closest(h.horizontalTabs.tabsContainer).length;
var J=y.closest(h.accordion.expanderContainer).length;
var A=this.isExpanderOrAccordion(y);
if(G.indexOf(h.accordion.tabPanelPrefixToRemove)>-1){var I=G.replace(h.accordion.tabPanelPrefixToRemove,"");
var C=I!=="#"&&e(I);
var F=C.length&&this.isExpanderOrAccordion(C);
if(F&&C.is(":visible")){this.scrollToAccordionOrExpander(C,I);
return
}}if(H.length&&!H.is(":visible")){var E=H.siblings(h.accordion.component);
var D=E.length&&E.find(G);
this.scrollToAccordionOrExpander(D);
return
}if(B){this.scrollToHorizontalTabs(y,G)
}else{if(J||A){this.scrollToAccordionOrExpander(y,G)
}else{if(z){this.scrollToSmartTabs(y,G)
}else{this.scrollToHtmlNode(y,G)
}}}}}]);
return p
}()
}),231:(function(c,d,g){g.r(d);
g.d(d,"default",function(){return h
});
function f(j,k){if(!(j instanceof k)){throw new TypeError("Cannot call a class as a function")
}}function a(m,k){for(var j=0;
j<k.length;
j++){var l=k[j];
l.enumerable=l.enumerable||false;
l.configurable=true;
if("value" in l){l.writable=true
}Object.defineProperty(m,l.key,l)
}}function b(l,j,k){if(j){a(l.prototype,j)
}if(k){a(l,k)
}return l
}var e=jQuery;
var h=function(){function n(){f(this,n);
this.anchorHashSymbol="#";
this.urlSeparator="?";
this.parsedParams=this.createEmptyHashObject();
this.hashParser=this.createCallbackHandler()
}b(n,[{key:"createEmptyHashObject",value:function l(){return{anchorString:""}
}},{key:"parseParamsFromString",value:function k(o){return o
}},{key:"parseHashFromLocationHash",value:function j(s){var r=s.substring(s.indexOf(this.anchorHashSymbol),s.length);
var p=r.indexOf(this.urlSeparator);
var o;
var q="";
if(p>=0){o=r.substring(0,r.indexOf(this.urlSeparator));
q=r.substring(r.indexOf(this.urlSeparator),r.length)
}else{o=r
}this.parsedParams.anchorHash=o;
this.parsedParams.paramsString=q;
return{anchorString:o,paramsString:q}
}},{key:"createCallbackHandler",value:function m(){var o=this;
e(window).on("hashchange",function(q){q.preventDefault();
var s=window.location.hash;
var p=o.parseHashFromLocationHash(s),r=p.paramsString;
o.parseParamsFromString(r);
e(window).trigger("HashParser:hash_parsed")
})
}}]);
return n
}()
}),232:(function(c,d,g){g.r(d);
g.d(d,"default",function(){return h
});
function f(j,k){if(!(j instanceof k)){throw new TypeError("Cannot call a class as a function")
}}function a(m,k){for(var j=0;
j<k.length;
j++){var l=k[j];
l.enumerable=l.enumerable||false;
l.configurable=true;
if("value" in l){l.writable=true
}Object.defineProperty(m,l.key,l)
}}function b(l,j,k){if(j){a(l.prototype,j)
}if(k){a(l,k)
}return l
}var e=jQuery;
var h=function(){function m(n){f(this,m);
this.hashParser=n.hashParser;
this.scrollService=n.scrollService;
this.bindScrollToHashChange();
this.bindScroolToPageLoad()
}b(m,[{key:"anchorAction",value:function k(n){this.scrollService.scroll(n);
if(this.hashParser.parsedParams.hash!==n){history.replaceState(null,null,n)
}}},{key:"bindScroolToPageLoad",value:function j(){var n=this;
e(document).on("DOMContentLoaded",function(r){r.preventDefault();
var s=window.location.hash;
var q=n.hashParser.parseHashFromLocationHash(s),o=q.anchorString;
if(o&&o.length){var p=e(".pws-header").length===0;
if(p){n.scrollService.scroll(o)
}else{setTimeout(function(){n.scrollService.scroll(o)
},100)
}}})
}},{key:"bindScrollToHashChange",value:function l(){var n=this;
e(window).on("HashParser:hash_parsed",function(){var o=n.hashParser.parsedParams.anchorHash;
if(o){n.scrollService.scroll(o)
}})
}}]);
return m
}()
}),233:(function(d,j,c){c.r(j);
c.d(j,"APP_SCROLL_DOWN_EVENT",function(){return k
});
c.d(j,"APP_SCROLL_UP_EVENT",function(){return m
});
c.d(j,"default",function(){return n
});
var l=c(234);
function g(p,q){if(!(p instanceof q)){throw new TypeError("Cannot call a class as a function")
}}function o(s,q){for(var p=0;
p<q.length;
p++){var r=q[p];
r.enumerable=r.enumerable||false;
r.configurable=true;
if("value" in r){r.writable=true
}Object.defineProperty(s,r.key,r)
}}function e(r,p,q){if(p){o(r.prototype,p)
}if(q){o(r,q)
}return r
}var h=jQuery;
var b="isScrolledDown";
var a="isScrolledUp";
var k="appScroll.isScrolledDown";
var m="appScroll.isScrolledUp";
var f=2000;
var n=function(){function t(v){var w=this;
g(this,t);
this.headerController=v.headerController;
this.scrollMemoryModel=new l["default"]();
this.$document=h(document);
this.lastEvent="none";
this.dynamicBannerIsActivated=false;
this.bindScrollForBanner();
if(this.headerController.dynamicBannerShouldBeActivated()){this.dynamicBannerIsActivated=true;
setTimeout(function(){w.scrolledUpEvent()
},f)
}}e(t,[{key:"scrolledUpEvent",value:function s(){this.lastEvent=a;
h(document).trigger(m)
}},{key:"scrolledDownEvent",value:function u(){this.lastEvent=b;
h(document).trigger(k)
}},{key:"analyzeScroll",value:function q(){var w=this.scrollMemoryModel.isScrollingDown();
if(this.headerController.dynamicButtonExistOnPage&&this.headerController.pinnedBannerIsDynamicBanner&&!this.dynamicBannerIsActivated){var v=this.headerController.dynamicBannerShouldBeActivated();
if(!v){return
}else{this.dynamicBannerIsActivated=true
}}if(this.lastEvent!==b&&w){if(this.scrollMemoryModel.isScrolledDownSimple()){this.scrolledDownEvent()
}}else{if(this.lastEvent!==a&&!w){if(this.scrollMemoryModel.isScrolledUpSimple()){this.scrolledUpEvent()
}}}}},{key:"isLastScrollScrollingDown",value:function r(){return this.lastEvent===b
}},{key:"bindScrollForBanner",value:function p(){var v=this;
this.$document.scroll(function(){v.scrollMemoryModel.setScrollPosition(window.pageYOffset);
var w=window.pageYOffset>v.headerController.mainContentPadding;
if(w){v.analyzeScroll()
}else{if(v.lastEvent!==a){v.scrolledUpEvent()
}}})
}}]);
return t
}()
}),234:(function(c,d,g){g.r(d);
g.d(d,"default",function(){return e
});
function f(h,j){if(!(h instanceof j)){throw new TypeError("Cannot call a class as a function")
}}function a(l,j){for(var h=0;
h<j.length;
h++){var k=j[h];
k.enumerable=k.enumerable||false;
k.configurable=true;
if("value" in k){k.writable=true
}Object.defineProperty(l,k.key,k)
}}function b(k,h,j){if(h){a(k.prototype,h)
}if(j){a(k,j)
}return k
}var e=function(){function l(){f(this,l);
this.memory=[0];
this.scrollUpLength=15;
this.scrollDownLength=5;
this.maximumMemorySize=99999
}b(l,[{key:"setScrollPosition",value:function h(p){this.memory.push(p);
if(this.memory.length>this.maximumMemorySize){this.cleanMemory()
}}},{key:"getScrollPosition",value:function m(){this.memory(this.memory.length-1)
}},{key:"isScrollingDown",value:function o(){var p=this.memory.length;
return this.memory[p-1]>this.memory[p-2]
}},{key:"isScrolledDownSimple",value:function n(){var p=this.memory.length;
var q=this.memory[p-1]>this.memory[p-2]+1&&this.memory[p-2]>this.memory[p-3]+1&&this.memory[p-3]>this.memory[p-4]+1;
return q
}},{key:"isScrolledUpSimple",value:function k(){var p=this.memory.length;
var q=this.memory[p-1]<this.memory[p-2]-4&&this.memory[p-2]<this.memory[p-3]-4&&this.memory[p-3]<this.memory[p-4]-4&&this.memory[p-4]<this.memory[p-5]-4;
return q
}},{key:"cleanMemory",value:function j(){if(this.memory.length>=this.historiScrollGeterSize){var q=[];
var p=this.memory.length-this.historiScrollGeterSize;
for(i=p;
i<this.memory.length;
i++){q.push(this.memory[iterationStartIndex])
}if(this.memory.length>9999){this.memory=q
}}}}]);
return l
}()
}),235:(function(c,g,b){b.r(g);
b.d(g,"default",function(){return a
});
function e(k,l){if(!(k instanceof l)){throw new TypeError("Cannot call a class as a function")
}}function j(n,l){for(var k=0;
k<l.length;
k++){var m=l[k];
m.enumerable=m.enumerable||false;
m.configurable=true;
if("value" in m){m.writable=true
}Object.defineProperty(n,m.key,m)
}}function d(m,k,l){if(k){j(m.prototype,k)
}if(l){j(m,l)
}return m
}var f=jQuery;
var h={header:".header, .pws-header",pwsHeader:"pws-header",headerMessages:".header-messages",headerNavWrapper:".header-nav-wrapper",headerContainer:"header-container",introSection:".intro-section",productComparator:".product-select-container",headerTopContainer:".header-top-container",headerMainContainer:".header-main-container",mobileHeader:".header-mobile",pinnedBanner:{component:".O-PINBANNER-RW-ALL",dynamicBannerClass:"dynamic",classAddedWhenMenuIsHidden:"active-pinned",buttonForBanner:".button-for-pinned-banner"}};
var a=function(){function n(A){e(this,n);
this.globalComponents=A;
this.$header=this.findHeader();
this.isPwsHeader=this.checkPwsHeader();
this.$headerContainer=this.findHeaderContainer(this.$header);
this.havePinnedBanner=false;
this.$pinnedBanner=f(h.pinnedBanner.component);
this.$hederNavWrapper=this.$header.find(h.headerNavWrapper);
this.headerChangingSize=false;
this.prevWindowWidth=f(window).width();
if(this.$pinnedBanner.length){this.appendPinnedBanner();
this.findDynamicButtonAndBanner()
}this.setHeaderToFixedAndAddPaddingToMainContent();
this.bindUIEvents()
}d(n,[{key:"findHeader",value:function q(){return f(h.header).first()
}},{key:"findMobileHeader",value:function u(){return f(h.mobileHeader)[0]
}},{key:"checkMobileHeaderIsExpanded",value:function x(){return f("#sidebar").hasClass("expanded")
}},{key:"closeMobileHeader",value:function r(){var B=this.findMobileHeader();
var A=this.globalComponents.components.findComponentByHTMLNode(B);
if(A&&A.instance){A.instance.closeSidebar()
}}},{key:"checkPwsHeader",value:function l(){return this.$header.hasClass(h.pwsHeader)
}},{key:"bindUIEvents",value:function k(){var A=this;
f(window).on("load headerMessageChange",function(){A.headerChangingSize=true;
A.setPaddingToMainContent()
});
f(window).on("resize",function(){A.windowWidth=f(window).width();
if(A.prevWindowWidth!==A.windowWidth){A.prevWindowWidth=A.windowWidth;
A.headerChangingSize=true;
A.setPaddingToMainContent()
}})
}},{key:"findHeaderContainer",value:function o(A){return A.parent()
}},{key:"calculatePaddingForMainContent",value:function m(B){var A=B.height();
if(!this.$pinnedBanner.length){return A
}if(!this.headerChangingSize&&A<this.lastHeaderHeight){A=this.lastHeaderHeight
}else{this.headerChangingSize=false;
this.lastHeaderHeight=A
}return A
}},{key:"appendPinnedBanner",value:function t(){if(this.globalComponents.configuration.checkViewTypeIsForClient()&&this.$pinnedBanner.length&&this.$hederNavWrapper){this.havePinnedBanner=true;
this.$pinnedBanner.parent().height(0);
this.$hederNavWrapper.append(this.$pinnedBanner)
}}},{key:"findDynamicButtonAndBanner",value:function p(){this.$dynamicButtonForBanner=f(h.pinnedBanner.buttonForBanner).first();
this.pinnedBannerIsDynamicBanner=this.$pinnedBanner.hasClass(h.pinnedBanner.dynamicBannerClass);
if(this.$dynamicButtonForBanner){this.dynamicButtonExistOnPage=true
}}},{key:"dynamicBannerShouldBeActivated",value:function y(){return this.pinnedBannerIsDynamicBanner&&this.$dynamicButtonForBanner.length&&this.$dynamicButtonForBanner.offset().top+this.$dynamicButtonForBanner.outerHeight()<window.pageYOffset+this.$header.height()
}},{key:"setPaddingToMainContent",value:function w(){if(this.globalComponents.configuration.checkViewTypeIsForClient()){var A=this.$header||this.findHeader();
this.mainContentPadding=this.calculatePaddingForMainContent(A);
this.$headerContainer.css("padding-top",this.mainContentPadding)
}}},{key:"setHeaderToFixedAndAddPaddingToMainContent",value:function z(){if(this.globalComponents.configuration.checkViewTypeIsForClient()){this.$header.css("position","fixed");
this.setPaddingToMainContent()
}}},{key:"addPinnedBannerCalculation",value:function s(B){var A=this.globalComponents.windowScrollMechanism.isLastScrollScrollingDown();
if(A){return B+this.$pinnedBanner.height()
}return B
}},{key:"calculateHeaderHeight",value:function v(){var B=this.$header&&this.$header.height();
if(this.isPwsHeader){var C=this.$header.siblings(h.headerMessages).first();
var E=C&&C.height();
B=E?B+E:B
}var D=f(h.productComparator);
if(D.length>0){var A=D.height()+parseInt(D.css("padding-top"),10)+4;
B+=A
}if(this.havePinnedBanner){B=this.addPinnedBannerCalculation(B)
}return B
}}]);
return n
}()
}),236:(function(e,f,h){h.r(f);
h.d(f,"default",function(){return b
});
var a=h(237);
function g(j,k){if(!(j instanceof k)){throw new TypeError("Cannot call a class as a function")
}}function c(m,k){for(var j=0;
j<k.length;
j++){var l=k[j];
l.enumerable=l.enumerable||false;
l.configurable=true;
if("value" in l){l.writable=true
}Object.defineProperty(m,l.key,l)
}}function d(l,j,k){if(j){c(l.prototype,j)
}if(k){c(l,k)
}return l
}var b=function(){function j(n){g(this,j);
this.modules=n;
this.componentMap=new Map();
this.UrlHelper=a["default"]
}d(j,[{key:"addInstanceToComponentsMap",value:function m(n){var o=n.instance&&n.instance.$el&&n.instance.$el[0];
if(o){this.componentMap.set(o,n)
}}},{key:"getComponentByID",value:function l(n){this.componentMap.get(n)
}},{key:"findComponentByHTMLNode",value:function k(n){return this.componentMap.get(n)
}}]);
return j
}()
}),237:(function(b,k,a){a.r(k);
a.d(k,"default",function(){return c
});
function l(o,p){return f(o)||j(o,p)||n(o,p)||d()
}function d(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
}function n(q,p){if(!q){return
}if(typeof q==="string"){return g(q,p)
}var r=Object.prototype.toString.call(q).slice(8,-1);
if(r==="Object"&&q.constructor){r=q.constructor.name
}if(r==="Map"||r==="Set"){return Array.from(q)
}if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)){return g(q,p)
}}function g(p,o){if(o==null||o>p.length){o=p.length
}for(var r=0,q=new Array(o);
r<o;
r++){q[r]=p[r]
}return q
}function j(s,r){var q=s==null?null:typeof Symbol!=="undefined"&&s[Symbol.iterator]||s["@@iterator"];
if(q==null){return
}var v=[];
var o=true;
var u=false;
var w,t;
try{for(q=q.call(s);
!(o=(w=q.next()).done);
o=true){v.push(w.value);
if(r&&v.length===r){break
}}}catch(p){u=true;
t=p
}finally{try{if(!o&&q["return"]!=null){q["return"]()
}}finally{if(u){throw t
}}}return v
}function f(o){if(Array.isArray(o)){return o
}}function h(o,p){if(!(o instanceof p)){throw new TypeError("Cannot call a class as a function")
}}function m(r,p){for(var o=0;
o<p.length;
o++){var q=p[o];
q.enumerable=q.enumerable||false;
q.configurable=true;
if("value" in q){q.writable=true
}Object.defineProperty(r,q.key,q)
}}function e(q,o,p){if(o){m(q.prototype,o)
}if(p){m(q,p)
}return q
}var c=function(){function s(){h(this,s)
}e(s,null,[{key:"checkDomain",value:function o(t){var u=t;
if(u.indexOf("//")===0){u=window.location.protocol+u
}return u.toLowerCase().replace(/([a-z])?:\/\//,"$1").split("/")[0]
}},{key:"isExternal",value:function r(t){return(t.indexOf(":")>-1||t.indexOf("//")>-1)&&s.checkDomain(window.location.href)!==s.checkDomain(t)
}},{key:"isLinkToCurrentPage",value:function q(t){var y=t.href.split("?")[0];
var x=y.split("#");
var z=l(x,1);
y=z[0];
var v=window.location.pathname.split("?")[0];
var w=v.split("#");
var u=l(w,1);
v=u[0];
return y===v
}},{key:"getAnchorIDFromHTMLNodeHref",value:function p(t){var v=t.getAttribute("href");
if(s.isExternal(v)||!s.isLinkToCurrentPage(t)){return null
}var u=v.substr(v.indexOf("#"));
return u
}}]);
return s
}()
}),238:(function(c,e,h){h.r(e);
h.d(e,"default",function(){return d
});
function g(j,k){if(!(j instanceof k)){throw new TypeError("Cannot call a class as a function")
}}function a(m,k){for(var j=0;
j<k.length;
j++){var l=k[j];
l.enumerable=l.enumerable||false;
l.configurable=true;
if("value" in l){l.writable=true
}Object.defineProperty(m,l.key,l)
}}function b(l,j,k){if(j){a(l.prototype,j)
}if(k){a(l,k)
}return l
}var f=jQuery;
var d=function(){function l(o){g(this,l);
this.globalComponents=o;
this.editModes=["Edit","Design","Developer"];
this.$document=f("document");
this.onStartIsConfigPage=this.isConfigPage();
this.onStartIsEditMode=this.isEditMode();
this.onStartIsPatternLab=this.isPatternLab();
this.onStartIsForClient=this.checkViewTypeIsForClient()
}b(l,[{key:"isConfigPage",value:function n(){return f("body").hasClass(".configPage")
}},{key:"isPatternLab",value:function j(){if(this.$document&&f(this.$document.documentElement).attr("id")==="patternlab-html"){return true
}return false
}},{key:"isEditMode",value:function k(){return typeof parent.Granite!=="undefined"&&typeof parent.Granite.author!=="undefined"&&typeof parent.Granite.author.layerManager!=="undefined"&&this.editModes.indexOf(parent.Granite.author.layerManager.getCurrentLayer())!==-1
}},{key:"checkViewTypeIsForClient",value:function m(){return !this.isConfigPage()&&!this.isEditMode()&&!this.isPatternLab()
}}]);
return l
}()
}),239:(function(b,a,c){
/*! @license DOMPurify | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/2.0.8/LICENSE */
(function(e,d){true?b.exports=d():undefined
}(this,function(){function K(Y){if(Array.isArray(Y)){for(var aa=0,Z=Array(Y.length);
aa<Y.length;
aa++){Z[aa]=Y[aa]
}return Z
}else{return Array.from(Y)
}}var o=Object.hasOwnProperty,I=Object.setPrototypeOf,M=Object.isFrozen;
var u=Object.freeze,J=Object.seal,p=Object.create;
var N=typeof Reflect!=="undefined"&&Reflect,U=N.apply,z=N.construct;
if(!U){U=function U(Z,Y,aa){return Z.apply(Y,aa)
}
}if(!u){u=function u(Y){return Y
}
}if(!J){J=function J(Y){return Y
}
}if(!z){z=function z(Z,Y){return new (Function.prototype.bind.apply(Z,[null].concat(K(Y))))()
}
}var A=X(Array.prototype.forEach);
var n=X(Array.prototype.pop);
var l=X(Array.prototype.push);
var L=X(String.prototype.toLowerCase);
var y=X(String.prototype.match);
var f=X(String.prototype.replace);
var S=X(String.prototype.indexOf);
var V=X(String.prototype.trim);
var r=X(RegExp.prototype.test);
var k=v(TypeError);
function X(Y){return function(aa){for(var Z=arguments.length,ab=Array(Z>1?Z-1:0),ac=1;
ac<Z;
ac++){ab[ac-1]=arguments[ac]
}return U(Y,aa,ab)
}
}function v(Y){return function(){for(var Z=arguments.length,ab=Array(Z),aa=0;
aa<Z;
aa++){ab[aa]=arguments[aa]
}return z(Y,ab)
}
}function q(ac,ab){if(I){I(ac,null)
}var Z=ab.length;
while(Z--){var aa=ab[Z];
if(typeof aa==="string"){var Y=L(aa);
if(Y!==aa){if(!M(ab)){ab[Z]=Y
}aa=Y
}}ac[aa]=true
}return ac
}function x(Y){var Z=p(null);
var aa=void 0;
for(aa in Y){if(U(o,Y,[aa])){Z[aa]=Y[aa]
}}return Z
}var F=u(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]);
var j=u(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","audio","canvas","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","video","view","vkern"]);
var D=u(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]);
var d=u(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover"]);
var E=u(["#text"]);
var T=u(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","xmlns"]);
var O=u(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]);
var e=u(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]);
var w=u(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]);
var t=J(/\{\{[\s\S]*|[\s\S]*\}\}/gm);
var P=J(/<%[\s\S]*|[\s\S]*%>/gm);
var C=J(/^data-[\-\w.\u00B7-\uFFFF]/);
var B=J(/^aria-[\-\w]+$/);
var m=J(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i);
var H=J(/^(?:\w+script|data):/i);
var R=J(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g);
var W=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(Y){return typeof Y
}:function(Y){return Y&&typeof Symbol==="function"&&Y.constructor===Symbol&&Y!==Symbol.prototype?"symbol":typeof Y
};
function s(Y){if(Array.isArray(Y)){for(var aa=0,Z=Array(Y.length);
aa<Y.length;
aa++){Z[aa]=Y[aa]
}return Z
}else{return Array.from(Y)
}}var G=function G(){return typeof window==="undefined"?null:window
};
var h=function h(ab,Y){if((typeof ab==="undefined"?"undefined":W(ab))!=="object"||typeof ab.createPolicy!=="function"){return null
}var ac=null;
var ae="data-tt-policy-suffix";
if(Y.currentScript&&Y.currentScript.hasAttribute(ae)){ac=Y.currentScript.getAttribute(ae)
}var ad="dompurify"+(ac?"#"+ac:"");
try{return ab.createPolicy(ad,{createHTML:function aa(af){return af
}})
}catch(Z){console.warn("TrustedTypes policy "+ad+" could not be created.");
return null
}};
function g(){var a4=arguments.length>0&&arguments[0]!==undefined?arguments[0]:G();
var bd=function bd(bk){return g(bk)
};
bd.version="2.2.2";
bd.removed=[];
if(!a4||!a4.document||a4.document.nodeType!==9){bd.isSupported=false;
return bd
}var aU=a4.document;
var aB=a4.document;
var bb=a4.DocumentFragment,aG=a4.HTMLTemplateElement,aS=a4.Node,am=a4.NodeFilter,af=a4.NamedNodeMap,ab=af===undefined?a4.NamedNodeMap||a4.MozNamedAttrMap:af,ba=a4.Text,bj=a4.Comment,aJ=a4.DOMParser,ac=a4.trustedTypes;
if(typeof aG==="function"){var ax=aB.createElement("template");
if(ax.content&&ax.content.ownerDocument){aB=ax.content.ownerDocument
}}var aa=h(ac,aU);
var aY=aa&&aw?aa.createHTML(""):"";
var bh=aB,a6=bh.implementation,a3=bh.createNodeIterator,a1=bh.getElementsByTagName,be=bh.createDocumentFragment;
var aZ=aU.importNode;
var aV={};
try{aV=x(aB).documentMode?aB.documentMode:{}
}catch(aC){}var a0={};
bd.isSupported=a6&&typeof a6.createHTMLDocument!=="undefined"&&aV!==9;
var aM=t,ad=P,aQ=C,a2=B,ag=H,ar=R;
var ak=m;
var Z=null;
var aj=q({},[].concat(s(F),s(j),s(D),s(d),s(E)));
var aX=null;
var bf=q({},[].concat(s(T),s(O),s(e),s(w)));
var aF=null;
var av=null;
var aK=true;
var ah=true;
var a8=false;
var an=false;
var ae=false;
var aO=false;
var bc=false;
var Y=false;
var aN=false;
var au=true;
var aw=false;
var at=true;
var ai=true;
var aL=false;
var aW={};
var aD=q({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","plaintext","script","style","svg","template","thead","title","video","xmp"]);
var az=null;
var aT=q({},["audio","video","img","source","image","track"]);
var ay=null;
var aP=q({},["alt","class","for","id","label","name","pattern","placeholder","summary","title","value","style","xmlns"]);
var ao=null;
var a9=aB.createElement("form");
var a7=function a7(bk){if(ao&&ao===bk){return
}if(!bk||(typeof bk==="undefined"?"undefined":W(bk))!=="object"){bk={}
}bk=x(bk);
Z="ALLOWED_TAGS" in bk?q({},bk.ALLOWED_TAGS):aj;
aX="ALLOWED_ATTR" in bk?q({},bk.ALLOWED_ATTR):bf;
ay="ADD_URI_SAFE_ATTR" in bk?q(x(aP),bk.ADD_URI_SAFE_ATTR):aP;
az="ADD_DATA_URI_TAGS" in bk?q(x(aT),bk.ADD_DATA_URI_TAGS):aT;
aF="FORBID_TAGS" in bk?q({},bk.FORBID_TAGS):{};
av="FORBID_ATTR" in bk?q({},bk.FORBID_ATTR):{};
aW="USE_PROFILES" in bk?bk.USE_PROFILES:false;
aK=bk.ALLOW_ARIA_ATTR!==false;
ah=bk.ALLOW_DATA_ATTR!==false;
a8=bk.ALLOW_UNKNOWN_PROTOCOLS||false;
an=bk.SAFE_FOR_TEMPLATES||false;
ae=bk.WHOLE_DOCUMENT||false;
Y=bk.RETURN_DOM||false;
aN=bk.RETURN_DOM_FRAGMENT||false;
au=bk.RETURN_DOM_IMPORT!==false;
aw=bk.RETURN_TRUSTED_TYPE||false;
bc=bk.FORCE_BODY||false;
at=bk.SANITIZE_DOM!==false;
ai=bk.KEEP_CONTENT!==false;
aL=bk.IN_PLACE||false;
ak=bk.ALLOWED_URI_REGEXP||ak;
if(an){ah=false
}if(aN){Y=true
}if(aW){Z=q({},[].concat(s(E)));
aX=[];
if(aW.html===true){q(Z,F);
q(aX,T)
}if(aW.svg===true){q(Z,j);
q(aX,O);
q(aX,w)
}if(aW.svgFilters===true){q(Z,D);
q(aX,O);
q(aX,w)
}if(aW.mathMl===true){q(Z,d);
q(aX,e);
q(aX,w)
}}if(bk.ADD_TAGS){if(Z===aj){Z=x(Z)
}q(Z,bk.ADD_TAGS)
}if(bk.ADD_ATTR){if(aX===bf){aX=x(aX)
}q(aX,bk.ADD_ATTR)
}if(bk.ADD_URI_SAFE_ATTR){q(ay,bk.ADD_URI_SAFE_ATTR)
}if(ai){Z["#text"]=true
}if(ae){q(Z,["html","head","body"])
}if(Z.table){q(Z,["tbody"]);
delete aF.tbody
}if(u){u(bk)
}ao=bk
};
var aR=function aR(bl){l(bd.removed,{element:bl});
try{bl.parentNode.removeChild(bl)
}catch(bk){bl.outerHTML=aY
}};
var aH=function aH(bl,bm){try{l(bd.removed,{attribute:bm.getAttributeNode(bl),from:bm})
}catch(bk){l(bd.removed,{attribute:null,from:bm})
}bm.removeAttribute(bl)
};
var ap=function ap(bm){var bp=void 0;
var bo=void 0;
if(bc){bm="<remove></remove>"+bm
}else{var bn=y(bm,/^[\r\n\t ]+/);
bo=bn&&bn[0]
}var br=aa?aa.createHTML(bm):bm;
try{bp=new aJ().parseFromString(br,"text/html")
}catch(bl){}if(!bp||!bp.documentElement){bp=a6.createHTMLDocument("");
var bq=bp,bk=bq.body;
bk.parentNode.removeChild(bk.parentNode.firstElementChild);
bk.outerHTML=br
}if(bm&&bo){bp.body.insertBefore(aB.createTextNode(bo),bp.body.childNodes[0]||null)
}return a1.call(bp,ae?"html":"body")[0]
};
var al=function al(bk){return a3.call(bk.ownerDocument||bk,bk,am.SHOW_ELEMENT|am.SHOW_COMMENT|am.SHOW_TEXT,function(){return am.FILTER_ACCEPT
},false)
};
var bi=function bi(bk){if(bk instanceof ba||bk instanceof bj){return false
}if(typeof bk.nodeName!=="string"||typeof bk.textContent!=="string"||typeof bk.removeChild!=="function"||!(bk.attributes instanceof ab)||typeof bk.removeAttribute!=="function"||typeof bk.setAttribute!=="function"||typeof bk.namespaceURI!=="string"){return true
}return false
};
var aE=function aE(bk){return(typeof aS==="undefined"?"undefined":W(aS))==="object"?bk instanceof aS:bk&&(typeof bk==="undefined"?"undefined":W(bk))==="object"&&typeof bk.nodeType==="number"&&typeof bk.nodeName==="string"
};
var aI=function aI(bm,bk,bl){if(!a0[bm]){return
}A(a0[bm],function(bn){bn.call(bd,bk,bl,ao)
})
};
var aA=function aA(bm){var bo=void 0;
aI("beforeSanitizeElements",bm,null);
if(bi(bm)){aR(bm);
return true
}if(y(bm.nodeName,/[\u0080-\uFFFF]/)){aR(bm);
return true
}var bl=L(bm.nodeName);
aI("uponSanitizeElement",bm,{tagName:bl,allowedTags:Z});
if((bl==="svg"||bl==="math")&&bm.querySelectorAll("p, br, form, table").length!==0){aR(bm);
return true
}if(!aE(bm.firstElementChild)&&(!aE(bm.content)||!aE(bm.content.firstElementChild))&&r(/<[!/\w]/g,bm.innerHTML)&&r(/<[!/\w]/g,bm.textContent)){aR(bm);
return true
}if(!Z[bl]||aF[bl]){if(ai&&!aD[bl]&&typeof bm.insertAdjacentHTML==="function"){try{var bn=bm.innerHTML;
bm.insertAdjacentHTML("AfterEnd",aa?aa.createHTML(bn):bn)
}catch(bk){}}aR(bm);
return true
}if((bl==="noscript"||bl==="noembed")&&r(/<\/no(script|embed)/i,bm.innerHTML)){aR(bm);
return true
}if(an&&bm.nodeType===3){bo=bm.textContent;
bo=f(bo,aM," ");
bo=f(bo,ad," ");
if(bm.textContent!==bo){l(bd.removed,{element:bm.cloneNode()});
bm.textContent=bo
}}aI("afterSanitizeElements",bm,null);
return false
};
var a5=function a5(bl,bk,bm){if(at&&(bk==="id"||bk==="name")&&(bm in aB||bm in a9)){return false
}if(ah&&r(aQ,bk)){}else{if(aK&&r(a2,bk)){}else{if(!aX[bk]||av[bk]){return false
}else{if(ay[bk]){}else{if(r(ak,f(bm,ar,""))){}else{if((bk==="src"||bk==="xlink:href"||bk==="href")&&bl!=="script"&&S(bm,"data:")===0&&az[bl]){}else{if(a8&&!r(ag,f(bm,ar,""))){}else{if(!bm){}else{return false
}}}}}}}}return true
};
var bg=function bg(bl){var bq=void 0;
var bs=void 0;
var bv=void 0;
var bn=void 0;
aI("beforeSanitizeAttributes",bl,null);
var bp=bl.attributes;
if(!bp){return
}var bu={attrName:"",attrValue:"",keepAttr:true,allowedAttributes:aX};
bn=bp.length;
while(bn--){bq=bp[bn];
var bo=bq,bk=bo.name,bm=bo.namespaceURI;
bs=V(bq.value);
bv=L(bk);
bu.attrName=bv;
bu.attrValue=bs;
bu.keepAttr=true;
bu.forceKeepAttr=undefined;
aI("uponSanitizeAttribute",bl,bu);
bs=bu.attrValue;
if(bu.forceKeepAttr){continue
}aH(bk,bl);
if(!bu.keepAttr){continue
}if(r(/\/>/i,bs)){aH(bk,bl);
continue
}if(an){bs=f(bs,aM," ");
bs=f(bs,ad," ")
}var br=bl.nodeName.toLowerCase();
if(!a5(br,bv,bs)){continue
}try{if(bm){bl.setAttributeNS(bm,bk,bs)
}else{bl.setAttribute(bk,bs)
}n(bd.removed)
}catch(bt){}}aI("afterSanitizeAttributes",bl,null)
};
var aq=function aq(bk){var bm=void 0;
var bl=al(bk);
aI("beforeSanitizeShadowDOM",bk,null);
while(bm=bl.nextNode()){aI("uponSanitizeShadowNode",bm,null);
if(aA(bm)){continue
}if(bm.content instanceof bb){aq(bm.content)
}bg(bm)
}aI("afterSanitizeShadowDOM",bk,null)
};
bd.sanitize=function(bk,bq){var bp=void 0;
var bs=void 0;
var bl=void 0;
var bn=void 0;
var bm=void 0;
if(!bk){bk="<!-->"
}if(typeof bk!=="string"&&!aE(bk)){if(typeof bk.toString!=="function"){throw k("toString is not a function")
}else{bk=bk.toString();
if(typeof bk!=="string"){throw k("dirty is not a string, aborting")
}}}if(!bd.isSupported){if(W(a4.toStaticHTML)==="object"||typeof a4.toStaticHTML==="function"){if(typeof bk==="string"){return a4.toStaticHTML(bk)
}if(aE(bk)){return a4.toStaticHTML(bk.outerHTML)
}}return bk
}if(!aO){a7(bq)
}bd.removed=[];
if(typeof bk==="string"){aL=false
}if(aL){}else{if(bk instanceof aS){bp=ap("<!---->");
bs=bp.ownerDocument.importNode(bk,true);
if(bs.nodeType===1&&bs.nodeName==="BODY"){bp=bs
}else{if(bs.nodeName==="HTML"){bp=bs
}else{bp.appendChild(bs)
}}}else{if(!Y&&!an&&!ae&&bk.indexOf("<")===-1){return aa&&aw?aa.createHTML(bk):bk
}bp=ap(bk);
if(!bp){return Y?null:aY
}}}if(bp&&bc){aR(bp.firstChild)
}var bo=al(aL?bk:bp);
while(bl=bo.nextNode()){if(bl.nodeType===3&&bl===bn){continue
}if(aA(bl)){continue
}if(bl.content instanceof bb){aq(bl.content)
}bg(bl);
bn=bl
}bn=null;
if(aL){return bk
}if(Y){if(aN){bm=be.call(bp.ownerDocument);
while(bp.firstChild){bm.appendChild(bp.firstChild)
}}else{bm=bp
}if(au){bm=aZ.call(aU,bm,true)
}return bm
}var br=ae?bp.outerHTML:bp.innerHTML;
if(an){br=f(br,aM," ");
br=f(br,ad," ")
}return aa&&aw?aa.createHTML(br):br
};
bd.setConfig=function(bk){a7(bk);
aO=true
};
bd.clearConfig=function(){ao=null;
aO=false
};
bd.isValidAttribute=function(bl,bk,bo){if(!ao){a7({})
}var bn=L(bl);
var bm=L(bk);
return a5(bn,bm,bo)
};
bd.addHook=function(bl,bk){if(typeof bk!=="function"){return
}a0[bl]=a0[bl]||[];
l(a0[bl],bk)
};
bd.removeHook=function(bk){if(a0[bk]){n(a0[bk])
}};
bd.removeHooks=function(bk){if(a0[bk]){a0[bk]=[]
}};
bd.removeAllHooks=function(){a0={}
};
return bd
}var Q=g();
return Q
}))
}),240:(function(d,f,c){Object.defineProperty(f,"__esModule",{value:true});
f.sanitizeUrl=void 0;
var b=/^(%20|\s)*(javascript|data|vbscript)/im;
var h=/[^\x20-\x7EÀ-ž]/gim;
var j=/^([^:]+):/gm;
var e=[".","/"];
function a(k){return e.indexOf(k[0])>-1
}function g(l){if(!l){return"about:blank"
}var n=l.replace(h,"").trim();
if(a(n)){return n
}var k=n.match(j);
if(!k){return n
}var m=k[0];
if(b.test(m)){return"about:blank"
}return n
}f.sanitizeUrl=g
}),241:(function(b,d){function e(k,l){if(!(k instanceof l)){throw new TypeError("Cannot call a class as a function")
}}function j(n,l){for(var k=0;
k<l.length;
k++){var m=l[k];
m.enumerable=m.enumerable||false;
m.configurable=true;
if("value" in m){m.writable=true
}Object.defineProperty(n,m.key,m)
}}function c(m,k,l){if(k){j(m.prototype,k)
}if(l){j(m,l)
}return m
}var f=Bootstrap.jQuery,h={anchorDataVisuallyHidden:'.text a[title],.text a[target="_blank"],.rich-text a[title],.rich-text a[target="_blank"],table a[title],table a[target="_blank"],[class*="A-PAR"] a[title],[class*="A-PAR"] a[target="_blank"],[class*="A-TYP"] a[title],[class*="A-TYP"] a[target="_blank"],[class*="A-BBS"] a[title],[class*="A-BBS"] a[target="_blank"]',chevronLink:'.text a[class*="A-LNKC"],.rich-text a[class*="A-LNKC"],table a[class*="A-LNKC"]',linkTextWrapper:'[aria-hidden="true"]',visuallyHidden:".visuallyhidden",body:"body",articleMainMrichText:".article-main .M-RICHTEXT-ART-DEV"},a={visuallyHiddenTagString:'<span class="visuallyhidden"></span>',linkTextWrapperTagString:'<span aria-hidden="true"></span>',visuallyHiddenString:"visuallyhidden",title:"title",globalSettingsDataKey:"global-settings",chevronLinkSpanClass:"link",chevronTextWrapper:'<span class="link"></span>',nonBreakingSpace:"&nbsp;"};
var g=function(){function p(){e(this,p)
}c(p,null,[{key:"init",value:function o(){this.addVisuallyHiddenTag();
this.addChevronLinkSpan()
}},{key:"addVisuallyHiddenTag",value:function m(){var q=f(h.anchorDataVisuallyHidden);
var r=this.newWindowLinkText();
f.each(q,function(v,w){var A=f(w);
var x=A.text()||"";
var t=A.find(h.visuallyHidden);
var z=A.find(h.linkTextWrapper);
var y=A.attr("target")==="_blank";
var s=A.attr(a.title)||"";
var u=t.text()||"";
if((s!==""||r.length)&&x.length&&!u.length){t.remove();
x=(A.text()||"").trim();
A.empty();
u=x+" "+s+(y?" "+r:"");
z=f(a.linkTextWrapperTagString);
A.append(z);
z.html(x);
t=f(a.visuallyHiddenTagString);
A.append(t);
t.html(u);
A.removeAttr(a.title);
if(y&&A.closest(h.articleMainMrichText).length){z.after(a.nonBreakingSpace)
}}})
}},{key:"addChevronLinkSpan",value:function n(){var q=f(h.chevronLink);
f.each(q,function(t,w){var v=f(w);
var r=v.find(h.linkTextWrapper);
if(r.length!=0){r.addClass(a.chevronLinkSpanClass)
}else{var u=v.text();
var s=f(a.chevronTextWrapper);
s.html(u);
v.html(s)
}v.append(a.nonBreakingSpace)
})
}},{key:"fetchGlobalSettings",value:function l(){return f(h.body).data(a.globalSettingsDataKey)||{}
}},{key:"newWindowLinkText",value:function k(){return this.fetchGlobalSettings().newWindowLinkText||""
}}]);
return p
}();
f(document).ready(function(){return g.init()
})
}),242:(function(a,d){function f(l,m){if(!(l instanceof m)){throw new TypeError("Cannot call a class as a function")
}}function j(o,m){for(var l=0;
l<m.length;
l++){var n=m[l];
n.enumerable=n.enumerable||false;
n.configurable=true;
if("value" in n){n.writable=true
}Object.defineProperty(o,n.key,n)
}}function b(n,l,m){if(l){j(n.prototype,l)
}if(m){j(n,m)
}return n
}var c="a[target='_blank']",g="noopener",h={childList:true,attributes:true,characterData:true,subtree:true},e=Bootstrap.jQuery;
var k=function(){function o(){f(this,o)
}b(o,null,[{key:"init",value:function p(){this.timer=undefined;
this.bindUIEvents();
this.setNoOpenerAttr()
}},{key:"bindUIEvents",value:function m(){var q=this;
if(window.MutationObserver){new MutationObserver(function(){return q.handleDOMChange()
}).observe(document.body,h)
}else{e("body").on("DOMNodeInserted",c,function(r){return q.setNoOpenerAttr(e(r.target))
})
}}},{key:"setNoOpenerAttr",value:function n(){var q=arguments.length>0&&arguments[0]!==undefined?arguments[0]:e(c);
q.each(function(){var s=e(this),r=s.attr("rel");
if(typeof r==="undefined"){s.attr("rel",g)
}else{if(!r.toLowerCase().includes(g)){s.attr("rel",r+" "+g)
}}})
}},{key:"handleDOMChange",value:function l(){var q=this;
if(typeof this.timer==="undefined"){this.timer=setTimeout(function(){q.setNoOpenerAttr();
q.timer=undefined
},10)
}}}]);
return o
}();
e(document).ready(function(){return k.init()
})
}),243:(function(a,e){function f(k,l){if(!(k instanceof l)){throw new TypeError("Cannot call a class as a function")
}}function j(n,l){for(var k=0;
k<l.length;
k++){var m=l[k];
m.enumerable=m.enumerable||false;
m.configurable=true;
if("value" in m){m.writable=true
}Object.defineProperty(n,m.key,m)
}}function b(m,k,l){if(k){j(m.prototype,k)
}if(l){j(m,l)
}return m
}var g=Bootstrap.jQuery,d=g("body"),c={noOutlines:"no-outlines"};
var h=function(){function k(){f(this,k)
}b(k,null,[{key:"init",value:function l(){d.on("mousedown",function(){return d.addClass(c.noOutlines)
}).on("keydown",function(){return d.removeClass(c.noOutlines)
})
}}]);
return k
}();
h.init()
}),244:(function(e,m,d){d.r(m);
d.d(m,"default",function(){return n
});
var c=d(5);
var b=d(14);
var l=d(228);
function k(r,s){if(!(r instanceof s)){throw new TypeError("Cannot call a class as a function")
}}function p(u,s){for(var r=0;
r<s.length;
r++){var t=s[r];
t.enumerable=t.enumerable||false;
t.configurable=true;
if("value" in t){t.writable=true
}Object.defineProperty(u,t.key,t)
}}function g(t,r,s){if(r){p(t.prototype,r)
}if(s){p(t,s)
}return t
}var j=Bootstrap.jQuery,o={wrapper:".messaging-banner",smartBanner:".smart-banner",trackEvent:".smart-banner-install",closeButton:".smart-banner-close"},f={smartBanner:"smart-banner",isIOS:"has-ios-banner",isAndroid:"has-android-banner"},a={appId:j('meta[name="apple-itunes-app"]').attr("content"),iosAppUrl:j('meta[name="app-itunes"]').attr("content"),androidAppUrl:j('meta[name="app-google-play"]').attr("content"),pageUrl:l.HSBC_utils.isTealiumReady&&utag_data.page_url?utag_data.page_url:document.location.pathname,title:j('meta[name="app-title"]').attr("content"),desc:j('meta[name="app-desc"]').attr("content"),viewBtnTxt:j('meta[name="app-view-label"]').attr("content")||"View",closeLabel:j('meta[name="app-close-label"]').attr("content")||"Close",bannerImg:j('meta[name="app-img"]').attr("content")||""},h=j("body"),q=j(o.wrapper);
var n=function(){function x(){k(this,x)
}g(x,null,[{key:"init",value:function A(){this.dataKeeper=new b.DataKeeper({name:"smartAppBanner",cookieSettings:{expires:{months:6}}});
this.storedData=this.dataKeeper.read();
if(this.storedData!=a.androidAppUrl&&this.storedData!=a.iosAppUrl){this.bindUIEvents();
this.setSmartBanner()
}}},{key:"bindUIEvents",value:function r(){var E=this;
var C=q.find(o.trackEvent),D=q.find(o.closeButton);
C.on("click",function(F){c.TealiumUtils.trackEvent({event_type:"click",page_url:a.pageUrl,event_category:"content",event_action:"button click",event_content:"view smart banner"})
});
D.on("click",function(F){h.removeClass(f.isIOS+" "+f.isAndroid);
q.find(o.smartBanner).remove();
E.triggerChangeMessageEvent();
c.TealiumUtils.trackEvent({event_type:"click",page_url:a.pageUrl,event_category:"content",event_action:"button click",event_content:"close smart banner"});
if(E.isMobileiOSModeToShowBanner()){E.dataKeeper.save(a.iosAppUrl)
}else{if(E.isMobileAndroidModeToShowBanner()){E.dataKeeper.save(a.androidAppUrl)
}}})
}},{key:"triggerChangeMessageEvent",value:function v(){j(window).trigger("headerMessageChange")
}},{key:"tealiumLoadEvent",value:function z(){c.TealiumUtils.trackEvent({event_type:"load",page_url:a.pageUrl,event_category:"content",event_action:"popup",event_content:"smart banner popup"})
}},{key:"setSmartBanner",value:function w(){var C=arguments.length>0&&arguments[0]!==undefined?arguments[0]:j(o.smartBanner);
if(this.isMobileiOSModeToShowBanner()&&!l.HSBC_utils.isSafari){this.iOSBannerLoad();
this.bindUIEvents()
}else{if(this.isMobileAndroidModeToShowBanner()){this.androidBannerLoad();
this.bindUIEvents()
}}this.triggerChangeMessageEvent()
}},{key:"isMobileAndroidModeToShowBanner",value:function s(){return l.HSBC_utils.isMobileAndroid&&a.androidAppUrl
}},{key:"isMobileiOSModeToShowBanner",value:function y(){return l.HSBC_utils.isMobileiOS&&a.iosAppUrl
}},{key:"iOSBannerLoad",value:function B(){var C=this.bannerTemplate("ios");
q.prepend(C);
h.addClass(f.isIOS);
this.tealiumLoadEvent()
}},{key:"androidBannerLoad",value:function t(){var C=this.bannerTemplate("android");
q.prepend(C);
h.addClass(f.isAndroid);
this.tealiumLoadEvent()
}},{key:"bannerTemplate",value:function u(C){if(C=="ios"){return'\n<div class="'.concat(f.smartBanner,'-wrapper"><div id="').concat(f.smartBanner,'"  class="').concat(f.smartBanner,'">\n     <button id="smart-banner-close" class="smart-banner-close" role="button" aria-label=" smartBannerParam.closeLabel}">\n         <span aria-hidden="true">&times;</span>\n     </button>\n     <span class="smart-banner-logo" style="background-image: url(\'').concat(a.bannerImg,'\');"></span>\n     <p class="smart-banner-title">').concat(a.title,"\n         <span>").concat(a.desc,'</span>\n     </p>\n     <p class="smart-banner-install">\n         <a id="smart-banner-install" href="').concat(a.iosAppUrl,'" target="_blank" rel="noopener noreferrer">').concat(a.viewBtnTxt,"</a>\n     </p>\n<br /></div></div>")
}else{if(C=="android"){return'\n<div class="'.concat(f.smartBanner,'-wrapper"><div id="').concat(f.smartBanner,'"  class="').concat(f.smartBanner,'">\n     <span class="smart-banner-logo" style="background-image: url(\'').concat(a.bannerImg,'\');"></span>\n     <button id="smart-banner-close" class="smart-banner-close" role="button" aria-label="').concat(a.closeLabel,'">\n         <span aria-hidden="true">&times;</span>\n     </button>\n     <p class="smart-banner-title">').concat(a.title,"\n         <span>").concat(a.desc,'</span>\n     </p>\n     <p class="smart-banner-install">\n         <a id="smart-banner-install" href="').concat(a.androidAppUrl,'" target="_blank" rel="noopener noreferrer">').concat(a.viewBtnTxt,"</a>\n     </p>\n<br /></div></div>")
}}}}]);
return x
}();
j(window).on("load",function(){return n.init()
})
}),245:(function(a,d){function e(k,l){if(!(k instanceof l)){throw new TypeError("Cannot call a class as a function")
}}function j(n,l){for(var k=0;
k<l.length;
k++){var m=l[k];
m.enumerable=m.enumerable||false;
m.configurable=true;
if("value" in m){m.writable=true
}Object.defineProperty(n,m.key,m)
}}function b(m,k,l){if(k){j(m.prototype,k)
}if(l){j(m,l)
}return m
}var f=Bootstrap.jQuery,c=f("div.cc-wrapper"),g=f("div.O-SMARTSPCGEN-DEV");
var h=function(){function k(){e(this,k)
}b(k,null,[{key:"init",value:function l(){c.attr("role","region");
g.attr("role","region")
}}]);
return k
}();
h.init()
}),246:(function(f,c){function h(j,k){if(!(j instanceof k)){throw new TypeError("Cannot call a class as a function")
}}function b(m,k){for(var j=0;
j<k.length;
j++){var l=k[j];
l.enumerable=l.enumerable||false;
l.configurable=true;
if("value" in l){l.writable=true
}Object.defineProperty(m,l.key,l)
}}function e(l,j,k){if(j){b(l.prototype,j)
}if(k){b(l,k)
}return l
}var g=Bootstrap.jQuery,d={smartTemplate:'[class*="globalSmart"]',buttons:".buttons-vertically"};
var a=function(){function j(){h(this,j)
}e(j,null,[{key:"init",value:function m(){this.$smartTemplate=g(d.smartTemplate);
this.$buttons=this.$smartTemplate.find(d.buttons);
this.setButtonsWidth(this.$buttons);
this.bindUIEvents()
}},{key:"setButtonsWidth",value:function l(n){n.width("auto");
var o=216,p=Math.max.apply(null,n.map(function(r,s){return g(s).width()
}).get()),q=100;
if(p>o&&!HSBC_utils.matchMedia.mobile){n.width(p)
}else{if(HSBC_utils.matchMedia.mobile){n.width("".concat(q,"%"))
}else{n.width(o)
}}}},{key:"bindUIEvents",value:function k(){var n=this;
g(window).on("resize",function(){return n.setButtonsWidth(n.$buttons)
})
}}]);
return j
}();
a.init()
}),247:(function(e,j,c){c.r(j);
c.d(j,"trim",function(){return f
});
c.d(j,"trimElements",function(){return a
});
var h=jQuery,g={oneWord:"one-word"},b=/^\s+/,d=/\s+$/,k=[".link-container .link"],l=[".visuallyhidden"];
function f(n){function o(r){if(r.nodeType===Node.TEXT_NODE){r.data=r.data.replace(b,"");
return r.data.length===0
}else{var p=0;
var q=r.childNodes.length;
while(p<q&&o(r.childNodes[p])){p=p+1
}return p===q
}}function m(r){if(r.nodeType===Node.TEXT_NODE){r.data=r.data.replace(d,"");
return r.data.length===0
}else{var p=1;
var q=r.childNodes.length;
while(p<=q&&m(r.childNodes[q-p])){p=p+1
}return p>q
}}m(n);
o(n)
}function a(){k.map(function(m){return h(m)
}).forEach(function(m){m.each(function(){var n=h(this),p=n.text().trim(),o=p.split(" ").length;
f(n[0]);
if(o===1){n.addClass(g.oneWord)
}})
});
l.map(function(m){return h(m)
}).forEach(function(m){m.each(function(){var n=h(this);
n.html(n.text());
n.text(n.html(n.text()).text())
})
})
}a()
}),5:(function(d,e,f){f.r(e);
f.d(e,"TealiumUtils",function(){return g
});
var g={trackEvent:function c(h){var j=window.TMS||null;
if(h&&j){j.trackEvent(h)
}},trackView:function b(h){var j=window.TMS||null;
if(h&&j){j.trackView(h)
}},trackEventWithInheritance:function a(j){var h={};
if(HSBC_utils.isTealiumReady){h={site_section:utag_data.site_section?utag_data.site_section:"",page_type:utag_data.page_type?utag_data.page_type:"",page_customer_group:utag_data.page_customer_group?utag_data.page_customer_group:"",page_category:utag_data.page_category?utag_data.page_category:"",page_subcategory:utag_data.page_subcategory?utag_data.page_subcategory:"",page_business_line:utag_data.page_business_line?utag_data.page_business_line:"",page_security_level:utag_data.page_security_level?utag_data.page_security_level:""}
}this.trackEvent(Bootstrap.jQuery.extend(h,j))
}}
})});
/*!
 * mustache.js - Logic-less {{mustache}} templates with JavaScript
 * http://github.com/janl/mustache.js
 */
(function defineMustache(b,a){if(typeof exports==="object"&&exports&&typeof exports.nodeName!=="string"){a(exports)
}else{if(typeof define==="function"&&define.amd){define(["exports"],a)
}else{b.Mustache={};
a(b.Mustache)
}}}(this,function mustacheFactory(G){var y=Object.prototype.toString;
var z=Array.isArray||function d(R){return y.call(R)==="[object Array]"
};
function v(R){return typeof R==="function"
}function M(R){return z(R)?"array":typeof R
}function j(R){return R.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")
}function K(S,R){return S!=null&&typeof S==="object"&&(R in S)
}var p=RegExp.prototype.test;
function c(S,R){return p.call(S,R)
}var t=/\S/;
function F(R){return !c(t,R)
}var r={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"};
function A(R){return String(R).replace(/[&<>"'`=\/]/g,function S(T){return r[T]
})
}var u=/\s*/;
var D=/\s+/;
var m=/\s*=/;
var O=/\s*\}/;
var s=/#|\^|\/|>|\{|&|=|!/;
function e(ak,Z){if(!ak){return[]
}var ab=[];
var aa=[];
var W=[];
var al=false;
var ai=false;
function ah(){if(al&&!ai){while(W.length){delete aa[W.pop()]
}}else{W=[]
}al=false;
ai=false
}var ad,Y,aj;
function X(am){if(typeof am==="string"){am=am.split(D,2)
}if(!z(am)||am.length!==2){throw new Error("Invalid tags: "+am)
}ad=new RegExp(j(am[0])+"\\s*");
Y=new RegExp("\\s*"+j(am[1]));
aj=new RegExp("\\s*"+j("}"+am[1]))
}X(Z||G.tags);
var T=new a(ak);
var U,S,ac,af,V,R;
while(!T.eos()){U=T.pos;
ac=T.scanUntil(ad);
if(ac){for(var ag=0,ae=ac.length;
ag<ae;
++ag){af=ac.charAt(ag);
if(F(af)){W.push(aa.length)
}else{ai=true
}aa.push(["text",af,U,U+1]);
U+=1;
if(af==="\n"){ah()
}}}if(!T.scan(ad)){break
}al=true;
S=T.scan(s)||"name";
T.scan(u);
if(S==="="){ac=T.scanUntil(m);
T.scan(m);
T.scanUntil(Y)
}else{if(S==="{"){ac=T.scanUntil(aj);
T.scan(O);
T.scanUntil(Y);
S="&"
}else{ac=T.scanUntil(Y)
}}if(!T.scan(Y)){throw new Error("Unclosed tag at "+T.pos)
}V=[S,ac,U,T.pos];
aa.push(V);
if(S==="#"||S==="^"){ab.push(V)
}else{if(S==="/"){R=ab.pop();
if(!R){throw new Error('Unopened section "'+ac+'" at '+U)
}if(R[1]!==ac){throw new Error('Unclosed section "'+R[1]+'" at '+U)
}}else{if(S==="name"||S==="{"||S==="&"){ai=true
}else{if(S==="="){X(ac)
}}}}}R=ab.pop();
if(R){throw new Error('Unclosed section "'+R[1]+'" at '+T.pos)
}return n(q(aa))
}function q(W){var S=[];
var U,R;
for(var T=0,V=W.length;
T<V;
++T){U=W[T];
if(U){if(U[0]==="text"&&R&&R[0]==="text"){R[1]+=U[1];
R[3]=U[3]
}else{S.push(U);
R=U
}}}return S
}function n(W){var Y=[];
var V=Y;
var X=[];
var S,U;
for(var R=0,T=W.length;
R<T;
++R){S=W[R];
switch(S[0]){case"#":case"^":V.push(S);
X.push(S);
V=S[4]=[];
break;
case"/":U=X.pop();
U[5]=S[2];
V=X.length>0?X[X.length-1][4]:Y;
break;
default:V.push(S)
}}return Y
}function a(R){this.string=R;
this.tail=R;
this.pos=0
}a.prototype.eos=function L(){return this.tail===""
};
a.prototype.scan=function P(T){var S=this.tail.match(T);
if(!S||S.index!==0){return""
}var R=S[0];
this.tail=this.tail.substring(R.length);
this.pos+=R.length;
return R
};
a.prototype.scanUntil=function J(T){var S=this.tail.search(T),R;
switch(S){case -1:R=this.tail;
this.tail="";
break;
case 0:R="";
break;
default:R=this.tail.substring(0,S);
this.tail=this.tail.substring(S)
}this.pos+=R.length;
return R
};
function N(S,R){this.view=S;
this.cache={".":this.view};
this.parent=R
}N.prototype.push=function H(R){return new N(R,this)
};
N.prototype.lookup=function k(U){var S=this.cache;
var W;
if(S.hasOwnProperty(U)){W=S[U]
}else{var V=this,X,T,R=false;
while(V){if(U.indexOf(".")>0){W=V.view;
X=U.split(".");
T=0;
while(W!=null&&T<X.length){if(T===X.length-1){R=K(W,X[T])
}W=W[X[T++]]
}}else{W=V.view[U];
R=K(V.view,U)
}if(R){break
}V=V.parent
}S[U]=W
}if(v(W)){W=W.call(this.view)
}return W
};
function l(){this.cache={}
}l.prototype.clearCache=function B(){this.cache={}
};
l.prototype.parse=function w(T,S){var R=this.cache;
var U=R[T];
if(U==null){U=R[T]=e(T,S)
}return U
};
l.prototype.render=function C(U,R,T){var V=this.parse(U);
var S=(R instanceof N)?R:new N(R);
return this.renderTokens(V,S,T,U)
};
l.prototype.renderTokens=function o(Y,R,W,aa){var U="";
var T,S,Z;
for(var V=0,X=Y.length;
V<X;
++V){Z=undefined;
T=Y[V];
S=T[0];
if(S==="#"){Z=this.renderSection(T,R,W,aa)
}else{if(S==="^"){Z=this.renderInverted(T,R,W,aa)
}else{if(S===">"){Z=this.renderPartial(T,R,W,aa)
}else{if(S==="&"){Z=this.unescapedValue(T,R)
}else{if(S==="name"){Z=this.escapedValue(T,R)
}else{if(S==="text"){Z=this.rawValue(T)
}}}}}}if(Z!==undefined){U+=Z
}}return U
};
l.prototype.renderSection=function x(T,R,W,Z){var aa=this;
var V="";
var X=R.lookup(T[1]);
function S(ab){return aa.render(ab,R,W)
}if(!X){return
}if(z(X)){for(var U=0,Y=X.length;
U<Y;
++U){V+=this.renderTokens(T[4],R.push(X[U]),W,Z)
}}else{if(typeof X==="object"||typeof X==="string"||typeof X==="number"){V+=this.renderTokens(T[4],R.push(X),W,Z)
}else{if(v(X)){if(typeof Z!=="string"){throw new Error("Cannot use higher-order sections without the original template")
}X=X.call(R.view,Z.slice(T[3],T[5]),S);
if(X!=null){V+=X
}}else{V+=this.renderTokens(T[4],R,W,Z)
}}}return V
};
l.prototype.renderInverted=function b(T,S,R,V){var U=S.lookup(T[1]);
if(!U||(z(U)&&U.length===0)){return this.renderTokens(T[4],S,R,V)
}};
l.prototype.renderPartial=function I(T,S,R){if(!R){return
}var U=v(R)?R(T[1]):R[T[1]];
if(U!=null){return this.renderTokens(this.parse(U),S,R,U)
}};
l.prototype.unescapedValue=function g(S,R){var T=R.lookup(S[1]);
if(T!=null){return T
}};
l.prototype.escapedValue=function E(S,R){var T=R.lookup(S[1]);
if(T!=null){return G.escape(T)
}};
l.prototype.rawValue=function f(R){return R[1]
};
G.name="mustache.js";
G.version="2.3.0";
G.tags=["{{","}}"];
var Q=new l();
G.clearCache=function B(){return Q.clearCache()
};
G.parse=function w(S,R){return Q.parse(S,R)
};
G.render=function C(T,R,S){if(typeof T!=="string"){throw new TypeError('Invalid template! Template should be a "string" but "'+M(T)+'" was given as the first argument for mustache#render(template, view, partials)')
}return Q.render(T,R,S)
};
G.to_html=function h(U,S,T,V){var R=G.render(U,S,T);
if(v(V)){V(R)
}else{return R
}};
G.escape=A;
G.Scanner=a;
G.Context=N;
G.Writer=l;
return G
}));
/*! jQuery Mustache - v0.2.8 - 2013-06-23
 * https://github.com/jonnyreeves/jquery-Mustache
 * Copyright (c) 2013 Jonny Reeves; Licensed MIT */
(function(f,h){var b={},m=null,o={warnOnMissingTemplates:false,allowOverwrite:true,domTemplateType:"text/html",externalTemplateDataType:"text"};
function c(){if(m===null){m=h.Mustache;
if(m===void 0){f.error("Failed to locate Mustache instance, are you sure it has been loaded?")
}}return m
}function l(p){return b[p]!==void 0
}function n(p,q){if(!o.allowOverwrite&&l(p)){f.error("TemplateName: "+p+" is already mapped.");
return
}b[p]=f.trim(q)
}function e(){var p;
if(arguments.length===0){p=f('script[type="'+o.domTemplateType+'"]').map(function(){return this.id
})
}else{p=f.makeArray(arguments)
}f.each(p,function(){var q=document.getElementById(this);
if(q===null){f.error("No such elementId: #"+this)
}else{n(this,f(q).html())
}})
}function d(q){var p=b[q];
delete b[q];
return p
}function g(){b={};
c().clearCache()
}function a(p,q){if(!l(p)){if(o.warnOnMissingTemplates){f.error("No template registered for: "+p)
}return""
}return c().to_html(b[p],q,b)
}function k(p,q){return f.ajax({url:p,dataType:o.externalTemplateDataType}).done(function(r){f(r).filter("script").each(function(s,t){n(t.id,f(t).html())
});
if(f.isFunction(q)){q()
}})
}function j(){return f.map(b,function(q,p){return p
})
}f.Mustache={options:o,load:k,has:l,add:n,addFromDom:e,remove:d,clear:g,render:a,templates:j,instance:m};
f.fn.mustache=function(p,t,r){var s=f.extend({method:"append"},r);
var q=function(v,u){f(v)[s.method](a(p,u))
};
return this.each(function(){var u=this;
if(f.isArray(t)){f.each(t,function(){}