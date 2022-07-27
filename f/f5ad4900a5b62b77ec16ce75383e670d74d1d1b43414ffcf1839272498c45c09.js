if(!String.prototype.startsWith){String.prototype.startsWith=function(a,b){return this.substr(!b||b<0?0:+b,a.length)===a
}
}if(typeof NodeList!=="undefined"&&NodeList.prototype&&!NodeList.prototype.forEach){NodeList.prototype.forEach=Array.prototype.forEach
}(function(a){a.forEach(function(c){if(c.hasOwnProperty("remove")){return
}Object.defineProperty(c,"remove",{configurable:true,enumerable:true,writable:true,value:function b(){if(this.parentNode===null){return
}this.parentNode.removeChild(this)
}})
})
})([Element.prototype,CharacterData.prototype,DocumentType.prototype]);
if("document" in self){if(!("classList" in document.createElement("_"))||document.createElementNS&&!("classList" in document.createElementNS("http://www.w3.org/2000/svg","g"))){(function(j){if(!("Element" in j)){return
}var a="classList",f="prototype",m=j.Element[f],b=Object,k=String[f].trim||function(){return this.replace(/^\s+|\s+$/g,"")
},c=Array[f].indexOf||function(q){var p=0,o=this.length;
for(;
p<o;
p++){if(p in this&&this[p]===q){return p
}}return -1
},n=function(o,p){this.name=o;
this.code=DOMException[o];
this.message=p
},g=function(p,o){if(o===""){throw new n("SYNTAX_ERR","The token must not be empty.")
}if(/\s/.test(o)){throw new n("INVALID_CHARACTER_ERR","The token must not contain space characters.")
}return c.call(p,o)
},d=function(s){var r=k.call(s.getAttribute("class")||""),q=r?r.split(/\s+/):[],p=0,o=q.length;
for(;
p<o;
p++){this.push(q[p])
}this._updateClassName=function(){s.setAttribute("class",this.toString())
}
},e=d[f]=[],i=function(){return new d(this)
};
n[f]=Error[f];
e.item=function(o){return this[o]||null
};
e.contains=function(o){return ~g(this,o+"")
};
e.add=function(){var s=arguments,r=0,p=s.length,q,o=false;
do{q=s[r]+"";
if(!~g(this,q)){this.push(q);
o=true
}}while(++r<p);
if(o){this._updateClassName()
}};
e.remove=function(){var t=arguments,s=0,p=t.length,r,o=false,q;
do{r=t[s]+"";
q=g(this,r);
while(~q){this.splice(q,1);
o=true;
q=g(this,r)
}}while(++s<p);
if(o){this._updateClassName()
}};
e.toggle=function(p,q){var o=this.contains(p),r=o?q!==true&&"remove":q!==false&&"add";
if(r){this[r](p)
}if(q===true||q===false){return q
}else{return !o
}};
e.replace=function(p,q){var o=g(p+"");
if(~o){this.splice(o,1,q);
this._updateClassName()
}};
e.toString=function(){return this.join(" ")
};
if(b.defineProperty){var l={get:i,enumerable:true,configurable:true};
try{b.defineProperty(m,a,l)
}catch(h){if(h.number===undefined||h.number===-2146823252){l.enumerable=false;
b.defineProperty(m,a,l)
}}}else{if(b[f].__defineGetter__){m.__defineGetter__(a,i)
}}}(self))
}(function(){var b=document.createElement("_");
b.classList.add("c1","c2");
if(!b.classList.contains("c2")){var c=function(e){var d=DOMTokenList.prototype[e];
DOMTokenList.prototype[e]=function(h){var g,f=arguments.length;
for(g=0;
g<f;
g++){h=arguments[g];
d.call(this,h)
}}
};
c("add");
c("remove")
}b.classList.toggle("c3",false);
if(b.classList.contains("c3")){var a=DOMTokenList.prototype.toggle;
DOMTokenList.prototype.toggle=function(d,e){if(1 in arguments&&!this.contains(d)===!e){return e
}else{return a.call(this,d)
}}
}if(!("replace" in document.createElement("_").classList)){DOMTokenList.prototype.replace=function(e,g){var f=this.toString().split(" "),d=f.indexOf(e+"");
if(~d){f=f.slice(d);
this.remove.apply(this,f);
this.add(g);
this.add.apply(this,f.slice(1))
}}
}b=null
}())
}if(!String.prototype.includes){String.prototype.includes=function(a,b){if(a instanceof RegExp){throw TypeError("first argument must not be a RegExp")
}if(b===undefined){b=0
}return this.indexOf(a,b)!==-1
}
}if(!Element.prototype.closest){if(!Element.prototype.matches){Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector
}Element.prototype.closest=function(c){var b=this;
var a=this;
if(!document.documentElement.contains(b)){return null
}do{if(a.matches(c)){return a
}a=a.parentElement
}while(a!==null);
return null
}
}Number.isInteger=Number.isInteger||function(a){return typeof a==="number"&&isFinite(a)&&Math.floor(a)===a
};
(function(a){a.forEach(function(b){if(b.hasOwnProperty("after")){return
}Object.defineProperty(b,"after",{configurable:true,enumerable:true,writable:true,value:function c(){var d=Array.prototype.slice.call(arguments),e=document.createDocumentFragment();
d.forEach(function(f){var g=f instanceof Node;
e.appendChild(g?f:document.createTextNode(String(f)))
});
this.parentNode.insertBefore(e,this.nextSibling)
}})
})
})([Element.prototype,CharacterData.prototype,DocumentType.prototype]);
(function(a){a.forEach(function(b){if(b.hasOwnProperty("before")){return
}Object.defineProperty(b,"before",{configurable:true,enumerable:true,writable:true,value:function c(){var d=Array.prototype.slice.call(arguments),e=document.createDocumentFragment();
d.forEach(function(f){var g=f instanceof Node;
e.appendChild(g?f:document.createTextNode(String(f)))
});
this.parentNode.insertBefore(e,this)
}})
})
})([Element.prototype,CharacterData.prototype,DocumentType.prototype]);
(function(a){a.forEach(function(c){if(c.hasOwnProperty("append")){return
}Object.defineProperty(c,"append",{configurable:true,enumerable:true,writable:true,value:function b(){var d=Array.prototype.slice.call(arguments),e=document.createDocumentFragment();
d.forEach(function(f){var g=f instanceof Node;
e.appendChild(g?f:document.createTextNode(String(f)))
});
this.appendChild(e)
}})
})
})([Element.prototype,Document.prototype,DocumentFragment.prototype]);
(function(b){function c(d){if(!d){return false
}if("Symbol" in b&&"iterator" in b.Symbol&&typeof d[Symbol.iterator]==="function"){return true
}if(Array.isArray(d)){return true
}return false
}function a(d){return("from" in Array)?Array.from(d):Array.prototype.slice.call(d)
}(function(){var n=b.URL;
var f;
try{if(n){f=new b.URL("http://example.com");
if("searchParams" in f){var d=new m("http://example.com");
d.search="a=1&b=2";
if(d.href==="http://example.com/?a=1&b=2"){d.search="";
if(d.href==="http://example.com/"){return
}}}if(!("href" in f)){f=undefined
}f=undefined
}}catch(o){}function h(q){var i="",r=true;
q.forEach(function(u){var s=encodeURIComponent(u.name);
var t=encodeURIComponent(u.value);
if(!r){i+="&"
}i+=s+"="+t;
r=false
});
return i.replace(/%20/g,"+")
}function g(q,t){var s=q.split("&");
if(t&&s[0].indexOf("=")===-1){s[0]="="+s[0]
}var r=[];
s.forEach(function(u){if(u.length===0){return
}var w=u.indexOf("=");
if(w!==-1){var v=u.substring(0,w);
var x=u.substring(w+1)
}else{v=u;
x=""
}v=v.replace(/\+/g," ");
x=x.replace(/\+/g," ");
r.push({name:v,value:x})
});
var i=[];
r.forEach(function(u){i.push({name:decodeURIComponent(u.name),value:decodeURIComponent(u.value)})
});
return i
}function p(q){if(f){return new n(q)
}var i=document.createElement("a");
i.href=q;
return i
}function l(r){var q=this;
this._list=[];
if(r===undefined||r===null){}else{if(r instanceof l){this._list=g(String(r))
}else{if(typeof r==="object"&&c(r)){a(r).forEach(function(t){if(!c(t)){throw TypeError()
}var s=a(t);
if(s.length!==2){throw TypeError()
}q._list.push({name:String(s[0]),value:String(s[1])})
})
}else{if(typeof r==="object"&&r){Object.keys(r).forEach(function(s){q._list.push({name:String(s),value:String(r[s])})
})
}else{r=String(r);
if(r.substring(0,1)==="?"){r=r.substring(1)
}this._list=g(r)
}}}}this._url_object=null;
this._setList=function(s){if(!i){q._list=s
}};
var i=false;
this._update_steps=function(){if(i){return
}i=true;
if(!q._url_object){return
}if(q._url_object.protocol==="about:"&&q._url_object.pathname.indexOf("?")!==-1){q._url_object.pathname=q._url_object.pathname.split("?")[0]
}q._url_object.search=h(q._list);
i=false
}
}Object.defineProperties(l.prototype,{append:{value:function(i,q){this._list.push({name:i,value:q});
this._update_steps()
},writable:true,enumerable:true,configurable:true},"delete":{value:function(q){for(var r=0;
r<this._list.length;
){if(this._list[r].name===q){this._list.splice(r,1)
}else{++r
}}this._update_steps()
},writable:true,enumerable:true,configurable:true},get:{value:function(q){for(var r=0;
r<this._list.length;
++r){if(this._list[r].name===q){return this._list[r].value
}}return null
},writable:true,enumerable:true,configurable:true},getAll:{value:function(r){var q=[];
for(var s=0;
s<this._list.length;
++s){if(this._list[s].name===r){q.push(this._list[s].value)
}}return q
},writable:true,enumerable:true,configurable:true},has:{value:function(q){for(var r=0;
r<this._list.length;
++r){if(this._list[r].name===q){return true
}}return false
},writable:true,enumerable:true,configurable:true},set:{value:function(q,t){var s=false;
for(var r=0;
r<this._list.length;
){if(this._list[r].name===q){if(!s){this._list[r].value=t;
s=true;
++r
}else{this._list.splice(r,1)
}}else{++r
}}if(!s){this._list.push({name:q,value:t})
}this._update_steps()
},writable:true,enumerable:true,configurable:true},entries:{value:function(){return new e(this._list,"key+value")
},writable:true,enumerable:true,configurable:true},keys:{value:function(){return new e(this._list,"key")
},writable:true,enumerable:true,configurable:true},values:{value:function(){return new e(this._list,"value")
},writable:true,enumerable:true,configurable:true},forEach:{value:function(q){var i=(arguments.length>1)?arguments[1]:undefined;
this._list.forEach(function(r){q.call(i,r.value,r.name)
})
},writable:true,enumerable:true,configurable:true},toString:{value:function(){return h(this._list)
},writable:true,enumerable:false,configurable:true},sort:{value:function k(){var q=this.entries();
var w=q.next();
var v=[];
var r={};
while(!w.done){var x=w.value;
var u=x[0];
v.push(u);
if(!(Object.prototype.hasOwnProperty.call(r,u))){r[u]=[]
}r[u].push(x[1]);
w=q.next()
}v.sort();
for(var t=0;
t<v.length;
t++){this["delete"](v[t])
}for(var s=0;
s<v.length;
s++){u=v[s];
this.append(u,r[u].shift())
}}}});
function e(r,q){var i=0;
this.next=function(){if(i>=r.length){return{done:true,value:undefined}
}var s=r[i++];
return{done:false,value:q==="key"?s.name:q==="value"?s.value:[s.name,s.value]}
}
}if("Symbol" in b&&"iterator" in b.Symbol){Object.defineProperty(l.prototype,b.Symbol.iterator,{value:l.prototype.entries,writable:true,enumerable:true,configurable:true});
Object.defineProperty(e.prototype,b.Symbol.iterator,{value:function(){return this
},writable:true,enumerable:true,configurable:true})
}function m(s,v){if(!(this instanceof b.URL)){throw new TypeError("Failed to construct 'URL': Please use the 'new' operator.")
}if(v){s=(function(){if(f){return new n(s,v).href
}var z;
try{var A;
if(Object.prototype.toString.call(window.operamini)==="[object OperaMini]"){z=document.createElement("iframe");
z.style.display="none";
document.documentElement.appendChild(z);
A=z.contentWindow.document
}else{if(document.implementation&&document.implementation.createHTMLDocument){A=document.implementation.createHTMLDocument("")
}else{if(document.implementation&&document.implementation.createDocument){A=document.implementation.createDocument("http://www.w3.org/1999/xhtml","html",null);
A.documentElement.appendChild(A.createElement("head"));
A.documentElement.appendChild(A.createElement("body"))
}else{if(window.ActiveXObject){A=new window.ActiveXObject("htmlfile");
A.write("<head></head><body></body>");
A.close()
}}}}if(!A){throw Error("base not supported")
}var y=A.createElement("base");
y.href=v;
A.getElementsByTagName("head")[0].appendChild(y);
var x=A.createElement("a");
x.href=s;
return x.href
}finally{if(z){z.parentNode.removeChild(z)
}}}())
}var i=p(s||"");
var q=(function(){if(!("defineProperties" in Object)){return false
}try{var y={};
Object.defineProperties(y,{prop:{get:function(){return true
}}});
return y.prop
}catch(x){return false
}}());
var r=q?this:document.createElement("a");
var u=new l(i.search?i.search.substring(1):null);
u._url_object=r;
Object.defineProperties(r,{href:{get:function(){return i.href
},set:function(x){i.href=x;
t();
w()
},enumerable:true,configurable:true},origin:{get:function(){if("origin" in i){return i.origin
}return this.protocol+"//"+this.host
},enumerable:true,configurable:true},protocol:{get:function(){return i.protocol
},set:function(x){i.protocol=x
},enumerable:true,configurable:true},username:{get:function(){return i.username
},set:function(x){i.username=x
},enumerable:true,configurable:true},password:{get:function(){return i.password
},set:function(x){i.password=x
},enumerable:true,configurable:true},host:{get:function(){var x={"http:":/:80$/,"https:":/:443$/,"ftp:":/:21$/}[i.protocol];
return x?i.host.replace(x,""):i.host
},set:function(x){i.host=x
},enumerable:true,configurable:true},hostname:{get:function(){return i.hostname
},set:function(x){i.hostname=x
},enumerable:true,configurable:true},port:{get:function(){return i.port
},set:function(x){i.port=x
},enumerable:true,configurable:true},pathname:{get:function(){if(i.pathname.charAt(0)!=="/"){return"/"+i.pathname
}return i.pathname
},set:function(x){i.pathname=x
},enumerable:true,configurable:true},search:{get:function(){return i.search
},set:function(x){if(i.search===x){return
}i.search=x;
t();
w()
},enumerable:true,configurable:true},searchParams:{get:function(){return u
},enumerable:true,configurable:true},hash:{get:function(){return i.hash
},set:function(x){i.hash=x;
t()
},enumerable:true,configurable:true},toString:{value:function(){return i.toString()
},enumerable:false,configurable:true},valueOf:{value:function(){return i.valueOf()
},enumerable:false,configurable:true}});
function t(){var x=i.href.replace(/#$|\?$|\?(?=#)/g,"");
if(i.href!==x){i.href=x
}}function w(){u._setList(i.search?g(i.search.substring(1)):[]);
u._update_steps()
}return r
}if(n){for(var j in n){if(Object.prototype.hasOwnProperty.call(n,j)&&typeof n[j]==="function"){m[j]=n[j]
}}}b.URL=m;
b.URLSearchParams=l
}());
(function(){if(new b.URLSearchParams([["a",1]]).get("a")==="1"&&new b.URLSearchParams({a:1}).get("a")==="1"){return
}var d=b.URLSearchParams;
b.URLSearchParams=function(f){if(f&&typeof f==="object"&&c(f)){var e=new d();
a(f).forEach(function(h){if(!c(h)){throw TypeError()
}var g=a(h);
if(g.length!==2){throw TypeError()
}e.append(g[0],g[1])
});
return e
}else{if(f&&typeof f==="object"){e=new d();
Object.keys(f).forEach(function(g){e.set(g,f[g])
});
return e
}else{return new d(f)
}}}
}())
}(self));
(function(){if(typeof window.CustomEvent==="function"){return false
}function a(c,d){d=d||{bubbles:false,cancelable:false,detail:null};
var b=document.createEvent("CustomEvent");
b.initCustomEvent(c,d.bubbles,d.cancelable,d.detail);
return b
}window.CustomEvent=a
})();
var ready=function(a){if(typeof a!=="function"){return
}if(document.readyState==="interactive"||document.readyState==="complete"){return a()
}document.addEventListener("DOMContentLoaded",a,false)
};
function GetURLParameter(a){var d=window.location.search.substring(1);
var c=d.split("&");
for(var b=0;
b<c.length;
b++){var e=c[b].split("=");
if(e[0]==a){return decodeURIComponent(e[1])
}}}function sortUL(a){var b=$(a);
b.find("li").sort(function(d,c){var f=$(d).text().toUpperCase();
var e=$(c).text().toUpperCase();
return(f<e)?-1:(f>e)?1:0
}).appendTo(a);
a.parent("section").addClass("initialized")
}function copyToClipboard(b){var a=$("<input>");
$("body").append(a);
a.val(b).select();
document.execCommand("copy");
a.remove()
}function setCookie(b,f,c){var e=new Date();
e.setTime(e.getTime()+(c*24*60*60*1000));
var a="expires="+e.toUTCString();
document.cookie=b+"="+f+";"+a+";path=/"
}function getCookie(d){var b=d+"=";
var f=decodeURIComponent(document.cookie);
var a=f.split(";");
for(var e=0;
e<a.length;
e++){var g=a[e];
while(g.charAt(0)==" "){g=g.substring(1)
}if(g.indexOf(b)==0){return g.substring(b.length,g.length)
}}return""
}var breakWord=function(b){var e=document.querySelectorAll(b);
var f;
var d;
var c;
var a;
if(e){e.forEach(function(g){f=g.textContent;
d=0;
c=f.split(" ");
c.forEach(function(h){a=h.length;
if(a>d){d=a
}});
if(d>20){g.classList.add("break-word")
}return d
})
}};
ready(function(){breakWord("a[href]")
});
function pearsonCookieNotification(){if(document.querySelector(".cookie-notification")){var c=document.querySelector("body");
var g=!c.classList.contains("edit");
var f=document.querySelector(".cookie-notification");
var b=getCookie("cookie-notification");
if(b==="ACCEPTED"){if(g){f.remove()
}}else{f.setAttribute("aria-hidden","true");
var a=f.querySelectorAll("h1, h2, h3, h4, h5, h6")[0];
var h=f.querySelector("p");
var e=f.querySelectorAll("a");
var d=f.querySelector("a:last-of-type");
if(a){a.setAttribute("id","cnTitle");
f.setAttribute("aria-labelledby","cnTitle")
}if(h){h.setAttribute("id","cnDescription");
f.setAttribute("aria-describedby","cnDescription")
}if(e){e.forEach(function(i){i.classList.add("button","button-secondary--button-only","js--pearson-cookie-policy-accept-continue");
i.addEventListener("click",function(j){setCookie("cookie-notification","ACCEPTED",30);
f.classList.remove("visible");
f.addEventListener("transitionend",function(){if(g){f.remove()
}})
})
})
}if(d){d.classList.remove("button-secondary--button-only");
d.classList.add("button-primary--button-only");
d.setAttribute("id","cookie-notification-policy-accept-continue");
d.setAttribute("href","javascript"+String.fromCharCode(58)+"void(0);")
}if(!(b)||(b!==""&&b!==null&&b!=="ACCEPTED")){f.setAttribute("role","alertdialog");
f.removeAttribute("aria-hidden");
f.classList.add("visible");
f.setAttribute("tabindex","-1");
f.focus()
}}}}ready(function(){pearsonCookieNotification()
});
var backToTop=function(){if(window.top!==window.self){return
}var a=document.querySelector("body");
var f=document.querySelector("body > footer");
var e;
if(!document.querySelector(".back-to-top__container")){var d;
var c;
d='<div class="back-to-top__container is-hidden">';
d+='<a href="#top">';
d+='<img src="/etc/themes/platform/1dc-theme/assets/icons/ic_chevron_white.svg" alt="" role="presentation" />';
d+="<span>TOP</span>";
d+="</a>";
d+="</div>";
c=document.createRange().createContextualFragment(d);
f.appendChild(c);
a.setAttribute("id","top")
}var b=f.querySelector(".back-to-top__container");
window.addEventListener("scroll",function(){e=window.pageYOffset;
if(e>=100){b.classList.remove("is-hidden");
b.classList.add("is-visible")
}else{if(e<100){b.classList.remove("is-visible");
b.classList.add("is-hidden")
}}})
};
ready(function(){backToTop()
});
window.addEventListener("resize",function(){backToTop()
});
function breadcrumb(){var g=$("body > header");
var i=$(".breadcrumb");
var h=$("body");
if(i.length>0){var k=i.find("ul");
var a=k.outerWidth();
var j=i.find("li");
var b=0;
var n=$(".sign-in-menu");
var d='<li class="trigger-crumb"><button data-toggle="tooltip" data-placement="top" title="Expand">&hellip;</button></li>';
i.attr("aria-label","breadcrumb");
if($(".menu-browse").length){var m=g.find(".menu-browse");
i.insertAfter(m)
}else{g.after('<div class="sub-header"><div class="sub-parsys"></div></div>');
var f=$("header .sub-header .sub-parsys");
i.appendTo(f)
}l();
if(n.length>0){var c=n.outerWidth();
a-=c;
k.css("padding-right",c+20)
}j.each(function(){var o=$(this).outerWidth();
b+=o
});
if(a<=b+20){k.removeClass("show-children--all").addClass("show-children--first-last");
l();
if(!$(".trigger-crumb").length){j.eq(0).after(d);
e()
}}else{$(".trigger-crumb").remove();
k.removeClass("ws--normal show-children--first-last").addClass("show-children--all");
l()
}function e(){var o=$(".trigger-crumb");
$(document).on("click",".trigger-crumb > button",function(p){o.remove();
k.removeClass("show-children--first-last").addClass("ws--normal show-children--all");
l()
})
}function l(){if(!(g.hasClass("no-menu"))){var o=i.outerHeight();
i.css("bottom",-o)
}}}else{g.addClass("no-breadcrumb")
}}$(document).ready(function(){breadcrumb()
});
$(window).on("resize",function(){breadcrumb()
});
function smoothScroll(){$(document).on("click",'a:not(.tabs-section a[href^="#"]):not([href="#"]):not([data-toggle="tab"]):not(.search-results-list a):not(.no-scroll):not(.filter-by-tags a)',function(a){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var b=$(this.hash);
b=b.length?b:$("[name="+this.hash.slice(1)+"]");
if(b.length){$("html, body").stop().animate({scrollTop:b.offset().top},500);
b.focus();
if(b.is(":focus")){return false
}else{b.attr("tabindex","-1").focus()
}a.preventDefault()
}}})
}$(document).ready(function(){smoothScroll()
});
(function(a,b){if(typeof module!=="undefined"){module.exports=b()
}else{if(typeof define==="function"&&typeof define.amd==="object"){define(b)
}else{this[a]=b()
}}}("clipboard",function(){if(typeof document==="undefined"||!document.addEventListener){return null
}var a={};
a.copy=(function(){var e=false;
var c=null;
var d=false;
function b(){e=false;
c=null;
if(d){window.getSelection().removeAllRanges()
}d=false
}document.addEventListener("copy",function(h){if(e){for(var g in c){h.clipboardData.setData(g,c[g])
}h.preventDefault()
}});
function f(){var h=document.getSelection();
if(!document.queryCommandEnabled("copy")&&h.isCollapsed){var g=document.createRange();
g.selectNodeContents(document.body);
h.removeAllRanges();
h.addRange(g);
d=true
}}return function(g){return new Promise(function(i,h){e=true;
if(typeof g==="string"){c={"text/plain":g}
}else{if(g instanceof Node){c={"text/html":new XMLSerializer().serializeToString(g)}
}else{c=g
}}function j(k){try{if(document.execCommand("copy")){b();
i()
}else{if(!k){f();
j(true)
}else{b();
throw new Error("Unable to copy. Perhaps it's not available in your browser?")
}}}catch(l){b();
h(l)
}}j(false)
})
}
})();
a.paste=(function(){var d=false;
var c;
var b;
document.addEventListener("paste",function(g){if(d){d=false;
g.preventDefault();
var f=c;
c=null;
f(g.clipboardData.getData(b))
}});
return function(e){return new Promise(function(g,f){d=true;
c=g;
b=e||"text/plain";
try{if(!document.execCommand("paste")){d=false;
f(new Error("Unable to paste. Pasting only works in Internet Explorer at the moment."))
}}catch(h){d=false;
f(new Error(h))
}})
}
})();
if(typeof ClipboardEvent==="undefined"&&typeof window.clipboardData!=="undefined"&&typeof window.clipboardData.setData!=="undefined"){
/*! promise-polyfill 2.0.1 */
(function(v){function u(d,c){return function(){d.apply(c,arguments)
}
}function t(b){if("object"!=typeof this){throw new TypeError("Promises must be constructed via new")
}if("function"!=typeof b){throw new TypeError("not a function")
}this._state=null,this._value=null,this._deferreds=[],n(b,u(r,this),u(q,this))
}function s(d){var c=this;
return null===this._state?void this._deferreds.push(d):void m(function(){var g=c._state?d.onFulfilled:d.onRejected;
if(null===g){return void (c._state?d.resolve:d.reject)(c._value)
}var f;
try{f=g(c._value)
}catch(b){return void d.reject(b)
}d.resolve(f)
})
}function r(b){try{if(b===this){throw new TypeError("A promise cannot be resolved with itself.")
}if(b&&("object"==typeof b||"function"==typeof b)){var f=b.then;
if("function"==typeof f){return void n(u(f,b),u(r,this),u(q,this))
}}this._state=!0,this._value=b,p.call(this)
}catch(e){q.call(this,e)
}}function q(b){this._state=!1,this._value=b,p.call(this)
}function p(){for(var d=0,c=this._deferreds.length;
c>d;
d++){s.call(this,this._deferreds[d])
}this._deferreds=null
}function o(f,e,h,g){this.onFulfilled="function"==typeof f?f:null,this.onRejected="function"==typeof e?e:null,this.resolve=h,this.reject=g
}function n(g,f,j){var i=!1;
try{g(function(b){i||(i=!0,f(b))
},function(b){i||(i=!0,j(b))
})
}catch(h){if(i){return
}i=!0,j(h)
}}var m=t.immediateFn||"function"==typeof setImmediate&&setImmediate||function(b){setTimeout(b,1)
},l=Array.isArray||function(b){return"[object Array]"===Object.prototype.toString.call(b)
};
t.prototype["catch"]=function(b){return this.then(null,b)
},t.prototype.then=function(d,c){var f=this;
return new t(function(e,b){s.call(f,new o(d,c,e,b))
})
},t.all=function(){var b=Array.prototype.slice.call(1===arguments.length&&l(arguments[0])?arguments[0]:arguments);
return new t(function(g,k){function j(w,e){try{if(e&&("object"==typeof e||"function"==typeof e)){var d=e.then;
if("function"==typeof d){return void d.call(e,function(f){j(w,f)
},k)
}}b[w]=e,0===--i&&g(b)
}catch(c){k(c)
}}if(0===b.length){return g([])
}for(var i=b.length,h=0;
h<b.length;
h++){j(h,b[h])
}})
},t.resolve=function(b){return b&&"object"==typeof b&&b.constructor===t?b:new t(function(c){c(b)
})
},t.reject=function(b){return new t(function(d,e){e(b)
})
},t.race=function(b){return new t(function(f,i){for(var h=0,g=b.length;
g>h;
h++){b[h].then(f,i)
}})
},"undefined"!=typeof module&&module.exports?module.exports=t:v.Promise||(v.Promise=t)
})(this);
a.copy=function(b){return new Promise(function(d,c){if(typeof b!=="string"&&!("text/plain" in b)){throw new Error("You must provide a text/plain type.")
}var f=(typeof b==="string"?b:b["text/plain"]);
var e=window.clipboardData.setData("Text",f);
if(e){d()
}else{c(new Error("Copying was rejected."))
}})
};
a.paste=function(){return new Promise(function(c,b){var d=window.clipboardData.getData("Text");
if(d){c(d)
}else{b(new Error("Pasting was rejected."))
}})
}
}return a
}));
function globals(){(function k(){var D=$("html");
D.removeClass("no-js").addClass("js")
})();
var n=!!window.MSInputMethodContext&&!!document.documentMode;
var j='<svg id="book-cover" data-name="book-cover" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1922.72 120.18" focusable="false"><defs><style>.cls{fill:#fff;}</style></defs><title>HP_Hero_Curve_Shape</title><path fill="#fff" class="cls" d="M866.72,0c599.14,0,1056,109.07,1056,109.07l0,11.11H0V77.07S393.1,0,866.72,0"/></svg>';
function d(F,D){var E='<svg id="'+F+'" data-name="'+F+'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1922.72 120.18" focusable="false"><defs><style>.cls{fill:'+D+';}</style></defs><title>HP_Hero_Curve_Shape</title><path fill="'+D+'" class="cls" d="M866.72,0c599.14,0,1056,109.07,1056,109.07l0,11.11H0V77.07S393.1,0,866.72,0"/></svg>';
return E
}(function A(){$("head").prepend('<link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&display=fallback" rel="stylesheet">');
var E="Search";
var D=$(".page-search-box-input, .header-search-box-input");
D.attr("placeholder",E)
})();
(function u(){var D=$(".onedotcom-page-search, .search-box");
D.each(function(){var G=$(this);
var E=G.find(".search-box-input");
var F=G.find("button");
F.on("click",function(H){var I=E.val().trim().length;
if(I==0){H.preventDefault()
}})
})
})();
(function c(){var D=$('a[href="#show-more-link"]');
D.each(function(){var G=$(this);
var F=G.text();
var E=G.parent();
var H=G.closest("div").find('a[href="#show-less-link"]');
var I=H.text();
E.nextAll().hide();
G.on("click",function(J){J.preventDefault();
G.toggleClass("opened");
if(H.length>0&&G.hasClass("opened")){G.text(I)
}else{G.text(F)
}E.nextAll().toggle("blind",100)
})
})
})();
(function g(){var D=$("iframe");
D.each(function(){var E=$(this);
var F=E.attr("src");
if(!(typeof F==="undefined")||F){if(F.indexOf("investis.com")>-1){E.addClass("responsive")
}if(F.indexOf("otp.tools.investis.com")>-1){E.addClass("otp-inventis-iframe")
}if(F.indexOf("irs.tools.investis.com")>-1){E.addClass("irs-inventis-iframe")
}if(F.indexOf("go.pardot")>-1){E.addClass("form-iframe")
}}});
D.attr({frameborder:0,width:"100%"})
})();
(function e(){$(".dropdown-list").each(function(){var E=$(this).find("> div");
var D=E.find("select.form-control");
E.append('<span class="dropdown-list-custom"><i></i></span>');
D.appendTo(E.find(".dropdown-list-custom"))
});
$(".check-box-list label.checkbox, .check-box-list label.checkbox-inline").each(function(){var E=$(this);
var D=E.find("input");
D.after("<span></span>")
})
})();
(function C(){var E=$(".content-tile-homepage-hero");
if(E){var F=E.find("figcaption > .content-tile__title");
var D=F.text();
E.find("figcaption").prepend("<h1>"+D+"</h1>");
F.remove();
if(n){E.append('<img class="brand-curve" role="presentation" aria-hidden="true" src="etc/themes/platform/1dc-theme/assets/design-elements/brand-curve--chalk-white.png" alt="" />')
}else{E.find("figure").append(j)
}}})();
(function m(){if($(".hide-nav").length>0){$("header .sub-header, .header-nav--toggle-mobile").addClass("hide")
}})();
(function y(){var L=$(".column-control-book-title, .column-control-book-title-full-cover, .column-control-book-title-full-cover--no-shadow, .content-tile-hero-curved");
var H=$(".column-control-book-title-full-cover");
var I=$(".column-control-book-title");
var G=$(".column-control-book-title-full-cover--no-shadow");
var D=$(".column-control-book-title-full-cover, .column-control-book-title-full-cover--no-shadow");
var J=$(".content-tile-hero-curved");
if(L.length>0){var K=D.find(">.container >.row >.col-md-6").eq(1).find(".content-tile picture > source").eq(0).attr("srcset");
D.append('<div style="background-image: url('+K+');" class="full-cover-img"></div>');
I.append(d("book-cover","#fff"));
I.find(">.container >.row >.col-md-6").eq(1).append(d("book-cover2","#fff"));
H.append(d("book-cover","#fff"));
G.append(d("book-cover","#f5f5f5"));
if(n){J.append('<img class="brand-curve" role="presentation" aria-hidden="true" src="etc/themes/platform/1dc-theme/assets/design-elements/brand-curve--chalk-white.png" alt="" />')
}else{J.append(d("book-cover","#fff"))
}var F=I.find(">.container >.row >.col-md-6").eq(1).find(".content-tile");
var E=F.length;
if(E==1){F.addClass("center-item")
}}})();
function v(){var E=$("header .par-header");
var G=E.find(".content-tile-secondary-hero, .content-tile-secondary-hero--full-width");
var F=G.find("picture img").height();
var D=$(".secondary-nav");
if(G.length==0){D.addClass("nav-reposition")
}if(F>380){G.addClass("reposition-hero")
}}function p(){var F=$(".content-tile-secondary-hero--full-width");
var E=F.find("figcaption");
var G=E.find("h2");
E.append("<span></span>");
var D=E.find("span");
G.appendTo(D)
}(function b(){$(".accordion-panel h4 a").on("click",function(D){D.preventDefault()
})
})();
(function x(){if(!$("body").hasClass("edit")){$(".text.standfirst-placeholder").html("");
$(".text.standfirst-placeholder").prepend($(".standfirst.column-control .text.standfirst, .standfirst.column-control .text.intro-copy, .column-control.standfirst .standfirst"))
}})();
(function s(){function D(){var E=$(".column-control-hero-product-non-catalog");
if(E.length){var I=E.find(">.container >.row >.col-md-6");
if(I.length){var K=I.eq(0).outerHeight();
var F=I.eq(0).position().top;
var H=I.eq(1).find(".content-tile");
if(H.length){var M=H.find("picture");
var L=H.find("picture img");
if(L.length){var G=L.attr("src")||L.attr("srcset");
var J=I.eq(1).position().top;
E.css("height",F+K);
M.css("height",F+K);
H.css({height:F+K,"margin-top":-J,"background-image":"url("+G+")"})
}}}}}$(document).ready(function(){D()
});
$(window).on("resize",function(){D()
})
})();
(function r(){var E=$(".col-sm-3, .col-md-4, .column .col-12");
var D=E.find(".book-bag-cart-items");
if($("header").css("z-index")==="253"&&E.length>0&&!($("body").hasClass("cq-wcm-edit"))&&!(D.length>0)){function F(){E.each(function(){var H=$(this);
var G=H.html().trim().length;
if(G==0){H.remove()
}})
}setTimeout(F,2000)
}})();
function o(){var D=$(".search-results-list");
if(D.length>0){var E=D.find("time");
E.each(function(){var G=$(this);
var F=G.text().replace(/\s/g,"");
if(F.length==0){G.hide()
}})
}}function t(){var D=$(".event-list");
var E=D.find("a");
E.each(function(){var F=$(this).text().replace(/\s/g,"");
if(F.length==0){$(this).hide()
}})
}(function a(){var D=$("article").not(".blog-list article");
D.each(function(){var E=$(this);
var G=E.find(">header");
var F=G.find("h1");
var I=F.text().trim();
var H=E.find("time");
H.each(function(){var K=$(this);
var J=K.attr("datetime");
if(J==="0-00-00"||J==="00-00"||J==="0-00"){K.hide()
}});
if(I.length===0){G.remove();
E.addClass("no-title")
}})
})();
(function B(){var E=$("footer");
var D=E.find(".footer-legal-notes");
D.find("ul").after('<p class="match-footer-link copyright-data-container">Copyright ©&nbsp;1996&#8211;<span class="current-year"></span>&nbsp;<a href="https://www.pearson.com" aria-label="Pearson" title="Pearson">Pearson</a>&nbsp;All rights reserved.</p>');
$(".current-year").html((new Date).getFullYear())
})();
(function f(){var D=$(".tag-list");
if(D.length>0){var E=D.find("li");
E.each(function(){var G=$(this);
var F=G.find("a").text().trim().length;
if(F==0&&G.hasClass("selected")){G.remove()
}});
sortUL(D.find("ul"))
}})();
(function l(){var D=$(".youtube-video");
if(D.length>0){D.each(function(){var F=$(this);
var E=F.find("button");
if(E.length>0){F.addClass("youtube-video--modal")
}})
}})();
(function w(){setTimeout(function(){$(".rss-feed a").attr("target","_blank");
$(".rss-feed .rss-feed-container").append("<li class='rss-feed-item rss-feed-last-item' />")
},5000);
$(".rss-feed a").on("click",function(){$(this).attr("target","_blank")
})
})();
(function q(){var D=$("main").find("img");
D.each(function(){if(!$(this).attr("alt")){$(this).attr({alt:"",role:"presentation"})
}});
setTimeout(function(){var E=$(".rss-feed").find("img");
E.each(function(){if(!$(this).attr("alt")){$(this).attr({alt:"",role:"presentation"})
}})
},5000)
})();
(function h(){var D=$("[aria-title]");
D.each(function(){var E=$(this).attr("aria-title");
$(this).attr("title",E).removeAttr("aria-title")
})
})();
function i(){var E=navigator.userAgent;
var D,F=E.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i)||[];
if(/trident/i.test(F[1])){D=/\brv[ :]+(\d+)/g.exec(E)||[];
return{name:"IE",version:(D[1]||"")}
}if(F[1]==="Chrome"){D=E.match(/\bOPR|Edge\/(\d+)/);
if(D!=null){return{name:"Opera",version:D[1]}
}}F=F[2]?[F[1],F[2]]:[navigator.appName,navigator.appVersion,"-?"];
if((D=E.match(/version\/(\d+)/i))!=null){F.splice(1,1,D[1])
}return{name:F[0],version:F[1]}
}var z=i();
(function(){var D=$(".content-tile");
if(D.length>0){D.each(function(){var G=$(this);
var F=G.find(".content-tile-text p");
F.each(function(){if(G.text().trim().length===0){$(this).parents("figcaption").addClass("hide")
}});
if(G.hasClass("content-tile-book-box")){if(G.find("figure > a").length==0){G.addClass("no-hover")
}}if(!(G.hasClass("content-tile-expander-show-more"))&&!(G.hasClass("bgcolor--default"))&&!(G.parents().is('[class*="custom-item-renderer"]'))){if(G.find("figure").length>0){var K=G.find("figure").css("backgroundColor");
if(!(K==="rgba(0, 0, 0, 0)")){var I,H,E,J;
if(K.match(/^rgb/)){K=K.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/);
I=K[1];
H=K[2];
E=K[3]
}else{K=+("0x"+K.slice(1).replace(K.length<5&&/./g,"$&$&"));
I=K>>16;
H=K>>8&255;
E=K&255
}J=Math.sqrt(0.299*(I*I)+0.587*(H*H)+0.114*(E*E));
if(J<127.5){G.find("figure").addClass("dark-background")
}}}}})
}})();
(function(){var D=$("main .text");
if(D.length>0){D.each(function(){var F=$(this);
var J=F.css("backgroundColor");
if(!(F.is('[class*="bgcolor--"]'))){F.addClass("bgcolor--default")
}if(!(F.hasClass("bgcolor--default"))&&!(F.parents().is('[class*="custom-item-renderer"]'))){if(!(J==="rgba(0, 0, 0, 0)")){var H,G,E,I;
if(J.match(/^rgb/)){J=J.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/);
H=J[1];
G=J[2];
E=J[3]
}else{J=+("0x"+J.slice(1).replace(J.length<5&&/./g,"$&$&"));
H=J>>16;
G=J>>8&255;
E=J&255
}I=Math.sqrt(0.299*(H*H)+0.587*(G*G)+0.114*(E*E));
if(I<127.5){F.addClass("dark-background")
}}}})
}})();
(function(){var D=$(".pearson-banner > .onedotcom-page-search");
var F=$(".menu-browse .onedotcom-page-search");
function E(G){if(G.length>1){G.eq(1).remove()
}}E(D);
E(F)
})();
(function(){$("form").on("submit",function(E){var D=$(this).find("[required]");
D.each(function(){if($(this).val()==""){$(this).focus();
E.preventDefault();
return false
}});
return true
})
})();
(function(){if(document.querySelector("body").style.objectFit===undefined){var D=$('[class*="content-tile-color-block--"]');
D.each(function(){var E=$(this);
var G=E.find("picture");
var H=G.find("image");
var F=H.attr("src")||H.attr("srcset");
G.addClass("object-fit--false").css({"background-image":"url("+F+")"})
})
}})()
}$(document).ready(function(){globals()
});
function image_expander(){var a=$(".behavior--image-expander, .behavior--show-more__image-expander");
if(a.length>0){a.each(function(d){var f=$(this);
var g=f.find("picture");
var b=g.find("img");
var e=b.attr("src")||b.attr("srcset");
var c=b.attr("alt");
g.append('<a href="'+e+'" class="expander-pic-expand" aria-label="View larger"><i></i></a>');
if(!$("body").hasClass("cq-wcm-edit")){$("body").append('<div class="pop-up-window image-expander__dialog expander-pic-expanded-container"><div class="image-expander__inner-wrap"><img src="'+e+'" alt="'+c+'" tabindex="0" class="view-larger-dialog__image" /></div></div>')
}})
}}$(document).ready(function(){image_expander()
});
function show_more_text(){var a=$(".behavior--show-more, .behavior--show-more__image-expander");
if(a.length>0&&(!$("body").hasClass("cq-wcm-edit"))){a.each(function(e){var g=$(this);
var c=g.find(".content-tile-text");
if(c.text().length>250){var b=c.html().substring(0,250);
var f=c.html().trim();
c.html(b+("&hellip;")).after('<div class="text-toggle__trigger-container"><button type="button" class="text-toggle__trigger" aria-label="Show more">Show more +</button></div>');
c.each(function(){var i="toggle-target-with-truncate--"+e;
$(this).attr({id:i})
});
var d=g.find(".text-toggle__trigger");
var h=0;
d.each(function(){var i="toggle-trigger-with-truncate--"+e;
$(this).attr({id:i,"aria-controls":"toggle-target-with-truncate--"+e})
});
d.on("click",function(i){i.preventDefault();
if(h===0){c.html(f).addClass("active");
d.text("Show less -").attr({"aria-expanded":true,"aria-label":"Show less"});
h=1
}else{c.html(b+("&hellip;")).removeClass("active");
d.text("Show more +").attr({"aria-expanded":false,"aria-label":"Show more"});
h=0
}})
}})
}}$(window).on("load",function(){show_more_text()
});
$(window).on("load",function(){if($(".link-list-dropdown h2").length>0){$(".link-list-dropdown h2").each(function(){var a=$(this).width();
$(this).siblings("ul").width(a+55.32)
})
}$(document).on("click",".link-list-dropdown h2",function(a){$(this).toggleClass("open");
$(this).siblings("ul").toggle()
})
});
function popUp(b,c){if(!(typeof b==="undefined")&&!(typeof c==="undefined")&&!($("body").hasClass("cq-wcm-edit"))){if(b.length>0&&c.length>0){var a=$(".shadowOverlay");
if(a.length===0){$("body").append('<div class="shadowOverlay"> </div>');
a=$(".shadowOverlay")
}c.each(function(d){var e=$(this);
if(e.find(".pop-up-close").length===0){if(e.is(".image-expander__dialog")){e.find(".image-expander__inner-wrap").append('<button class="pop-up-close" aria-label="Close"></button>')
}else{e.append('<button class="pop-up-close" aria-label="Close"></button>')
}}e.appendTo("body").end().addClass("pop-up").attr({role:"dialog","aria-modal":"true"}).not(".blog-flex-social-share, .share-via-email-popup").attr("aria-label","Dialog Window (Press ESC to close)").each(function(){var g=$(this).prop("tagName").toLowerCase();
var f="modal-"+g+"--"+d;
$(this).attr("id",f);
++d
})
});
b.each(function(l,h){var e=$(this);
e.attr("title","Open popup").addClass("popup-btn-"+l);
var f=c.eq(l);
var m=e;
var p=f.find(".pop-up-close");
var n=f.find(".youtube-video-iframe");
var d=[];
var k=f.find(".view-larger-dialog__image");
n.each(function(q){var j=$(this);
var r=j.attr("src");
d.push(r)
});
function g(){$('span:contains("Session Timeout")').parents('[role="dialog"]').add('header[role="banner"]').add("main").add("footer").add(".servicecomponents").add(".pearson-data-layer").attr("aria-hidden","true");
f.addClass("current-dialog").show().attr("aria-hidden",false);
var j=$(".current-dialog");
var r=j.find("a:visible, button:visible, object:visible, :input:not(:hidden):visible, iframe:visible, [tabindex]:visible");
var s=r.first()[0];
var q=r.last()[0];
var i=9;
j.on("keydown",function(t){if(t.key==="Tab"||t.keyCode===i){if(t.shiftKey){if(document.activeElement===s){q.focus();
t.preventDefault()
}}else{if(document.activeElement===q){s.focus();
t.preventDefault()
}}}});
s.focus();
a.show();
n.each(function(u){var t=$(this);
jQuery.each(d,function(v,w){if(u===v){t.attr("src",w)
}})
})
}function o(){$('span:contains("Session Timeout")').parents('[role="dialog"]').add('header[role="banner"]').add("main").add("footer").add(".servicecomponents").add(".pearson-data-layer").removeAttr("aria-hidden");
f.hide().removeClass("current-dialog").attr("aria-hidden",true);
a.hide();
n.attr("src","");
k.removeAttr("tabindex")
}m.on("click",function(i){i.preventDefault();
$(this).addClass("current-dialog-trigger");
g()
});
p.on("click",function(i){i.preventDefault();
o();
$(".current-dialog-trigger").focus().removeClass("current-dialog-trigger")
});
$(window).on("keydown",function(i){if(i.keyCode===27){o();
$(".current-dialog-trigger").focus().removeClass("current-dialog-trigger")
}if((p.is(":focus"))&&i.keyCode===13){o()
}});
a.on("click",function(i){o()
})
})
}}}function popUpVid(){var a=$(".content-tile-panel-video, .content-tile-panel-video-v2");
if(a.length){$("body").append('<div class="shadowOverlay"> </div>');
a.each(function(j){var l=$(this).find("figure > a");
var b=l.attr("href");
var n=$(this).find(".content-tile-text a");
var d=$(this).find(".content-tile__title").text();
var m=d.replace(/\s+/g,"-");
$(this).append('<button title="Play video: '+d+'" class="panel-video-play"></button>');
l.attr("tabindex","-1");
n.each(function(){var r=$(this);
var i=r.text().replace(/\s/g,"");
if(i.length===0){r.remove()
}});
$("body").append('<div class="pop-up-video" role="dialog" aria-modal="true" aria-label="Dialog Window (Press ESC to close)" id="modal-video--'+m+'"><div class="pop-up-video--inner"><iframe id="modal-video-iframe--'+m+'" title="'+d+'" src="//www.youtube.com/embed/'+b+'?rel=0&amp;showinfo=0&amp;color=white" frameborder="0" allowfullscreen></iframe></div><button class="pop-up-close" aria-label="Close"></button></div>');
var e=$(".pop-up-video").eq(j);
var q=e.find(".pop-up-video--inner");
var h=e.find("iframe");
var c=h.attr("src");
var k=$(this).find(".panel-video-play");
var p=e.find(".pop-up-close");
var g=$(".shadowOverlay");
function f(){$('span:contains("Session Timeout")').parents('[role="dialog"]').add('header[role="banner"]').add("main").add("footer").add(".servicecomponents").attr("aria-hidden","true");
e.addClass("current-dialog").show().attr("aria-hidden",false);
q.attr("tabindex","0");
var r=$(".current-dialog");
var t=r.find("a:visible, button:visible, object:visible, :input:not(:hidden):visible, iframe:visible, [tabindex]:visible");
var u=t.first()[0];
var s=t.last()[0];
var i=9;
r.on("keydown",function(v){if(v.key==="Tab"||v.keyCode===i){if(v.shiftKey){if(document.activeElement===u){s.focus();
v.preventDefault()
}}else{if(document.activeElement===s){u.focus();
v.preventDefault()
}}}});
s.focus();
h.attr("src",c+"&amp;autoplay=1");
g.show()
}function o(){$('span:contains("Session Timeout")').parents('[role="dialog"]').add('header[role="banner"]').add("main").add("footer").add(".servicecomponents").removeAttr("aria-hidden");
e.hide().removeClass("current-dialog").attr("aria-hidden",true);
q.removeAttr("tabindex");
g.hide();
h.attr("src","")
}k.click(function(i){i.preventDefault();
$(this).addClass("current-dialog-trigger");
f()
});
p.click(function(i){i.preventDefault();
o();
$(".current-dialog-trigger").focus().removeClass("current-dialog-trigger")
});
$(window).on("keydown",function(i){if(i.keyCode===27){o();
$(".current-dialog-trigger").focus().removeClass("current-dialog-trigger")
}if((p.is(":focus"))&&i.keyCode===13){o()
}});
g.click(function(i){o()
})
})
}}$(document).ready(function(){popUpVid()
});
function panelItemCategory(){var a=$(".content-tile-panel-item-category");
if(a.length>0){a.each(function(){var c=$(this);
var d=c.find(".content-tile-subtitle");
var b=c.find("figure");
d.appendTo(b)
})
}}function contentTileAccordionPanel(){var a=$(".content-tile-accordion-panel");
if(a.length>0){a.each(function(){var b=$(this);
var c=b.find("figcaption > .content-tile__title, figcaption > a > .content-tile__title");
c.attr("tabindex","0");
c.on("click",function(){c.toggleClass("active")
});
c.keypress(function(f){var d=f.which;
if(d==13||d==32){c.toggleClass("active")
}})
})
}}function primaryTiles(){var a=$(".col-md-6 .content-tile-panel-item-info, .col-md-6 .content-tile-panel-item-news-box");
if(a.length>0){a.each(function(){var c=$(this);
var d=c.find("picture");
var b=d.width();
if($("header").css("z-index")==="252"){d.height(b/3)
}})
}}$(document).ready(function(){contentTileAccordionPanel();
panelItemCategory();
primaryTiles()
});
function updatePost(){var a=$('div.blog-post, [class*="blog-list"] > ul > li > article');
if(a.length>0){a.each(function(){var d=$(this);
var z=d.find("header");
var h=z.find("> h1, > h2");
var r=z.find(".blog-post-info, .blog-list-info");
var k=d.find(".blog-post-author-img, .blog-list-author-img");
var j=r.find("> span");
var c=j.text();
var B=c.trim();
var C=r.find("> time:first-of-type");
var m=C.text();
var F=m.trim();
var E=[F];
var v=d.find(".blog-list-readmore");
z.addClass("post-header");
h.addClass("post-title").after('<div class="post-meta"><div class="post-meta--group"></div></div>');
var y=d.find(".post-meta--group");
if(k.length>0){k.attr("class","").addClass("post-meta--avatar").insertBefore(y)
}if(B.length>0){y.append('<span class="post-meta--author" itemprop="author" itemscope itemtype="http://schema.org/Person">'+B+"</span>")
}var A;
var p;
var n;
for(A=0;
A<E.length;
A+=1){p=E[A].split(",");
if(p[1]){n=p[0]+","+p[1]
}else{n=p[0]
}}C.removeAttr("pubdate").addClass("post-meta--timestamp").text(n).appendTo(y);
var D=d.find(".post-meta--timestamp");
v.add(r).remove();
var u;
if(d.parent().is("li")){u=d.find(z).next("div").find("p:first-of-type:not(:empty)")
}else{u=d.find("> p:first-of-type:not(:empty)")
}u.addClass("post-content--summary");
var w=d.find(".post-content--summary");
var o;
var f;
if(d.parent().is("li")){if(d.find("picture").eq(0).length>0){o=d.find("picture").eq(0);
o.addClass("post-media").parent("a").addClass("post-media--container");
f=d.find(".post-media--container");
f.insertBefore(z)
}u.parent("div").addClass("post-content");
var l=d.find(".post-content");
var t=w.text().length;
var b;
if(!a.parents("section").is('[class*="post-list--"]')){if(t>250){b=w.html().substring(0,250);
l.html('<p class="post-content--summary">'+b+("&hellip;")+"</p>")
}else{l.html(w)
}}else{if(t>135){b=w.text().substring(0,135);
l.html('<p class="post-content--summary">'+b+("&hellip;")+"</p>")
}else{l.html('<p class="post-content--summary">'+w.text())
}}if(k.length>0){k.remove()
}D.clone().addClass("is-clone").insertAfter(l);
var x=d.find(".is-clone");
z.add(l).add(x).wrapAll('<div class="post-inner"></div>');
d.parents(".blog-list").addClass("post-list");
var q=$(".post-list");
q.find("nav").addClass("post-list--pagination-container")
}else{o=z.next("picture");
o.addClass("post-media");
w.nextAll().addBack().wrapAll('<div class="post-content"></div>')
}if(document.querySelector("body").style.objectFit===undefined){var e=d.find("picture").eq(0).find("img");
var g=e.attr("src")||e.attr("srcset");
if(d.find(".post-media--container").length>0){f=d.find(".post-media--container")
}else{f=d.find(".post-media")
}f.addClass("object-fit--false").css({"background-image":"url("+g+")"})
}if(!(d.is("article"))){if(!$("body").is(".cq-wcm-edit")){d.replaceWith(function(){return $("<article/>",{html:this.innerHTML,"class":"post-container post-container--loaded"})
});
popUp($(".expander-pic-expand"),$(".expander-pic-expanded-container"))
}else{d.addClass("post-container post-container--loaded")
}}else{d.addClass("post-container post-container--loaded")
}popUp($(".social-share-popup-trigger"),$(".social-share-popup"))
})
}}$(document).ready(function(){updatePost()
});
function socialShareAppend(){var m='<div class="blog-flex-social-share" role="dialog" aria-modal="true" aria-labelledby="dialog__social-share-header" id="dialog__social-share"><ul><li class="blog-flex-share-fb"><a aria-label="Share on Facebook" href="#" target="_blank" rel="noopener noreferrer"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 147 315" focusable="false"><title>Facebook icon</title><path class="cls-1" d="M147 55.2H111.4c-7 0-14.1 7.3-14.1 12.7v36.3h49.7c-2 27.8-6.1 53.2-6.1 53.2H97V315H31.8V157.4H0v-53H31.8V61c0-7.9-1.6-61 66.9-61H147V55.2Z"/></svg></a></li><li class="blog-flex-share-twitter"><a aria-label="Share on Twitter" href="#" target="_blank" rel="noopener noreferrer"><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" focusable="false"><title>Twitter icon</title><path d="M24.253 8.756C24.69 17.08 18.297 24.182 9.97 24.62c-3.122.162-6.22-.646-8.86-2.32 2.702.18 5.375-.648 7.507-2.32-2.072-.248-3.818-1.662-4.49-3.64.802.13 1.62.077 2.4-.154-2.482-.466-4.312-2.586-4.412-5.11.688.276 1.426.408 2.168.387-2.135-1.65-2.73-4.62-1.394-6.965C5.574 7.816 9.54 9.84 13.802 10.07c-.842-2.738.694-5.64 3.434-6.48 2.018-.624 4.212.043 5.546 1.682 1.186-.213 2.318-.662 3.33-1.317-.386 1.256-1.248 2.312-2.4 2.942 1.048-.106 2.07-.394 3.02-.85-.458 1.182-1.343 2.15-2.48 2.71z" /></svg></a></li><li class="blog-flex-share-linkedin"><a aria-label="Share on LinkedIn" href="#" target="_blank" rel="noopener noreferrer"><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" focusable="false"><title>LinkedIn icon</title><path d="M25.424 15.887v8.447h-4.896v-7.882c0-1.98-.71-3.33-2.48-3.33-1.354 0-2.158.91-2.514 1.802-.13.315-.162.753-.162 1.194v8.216h-4.9s.067-13.35 0-14.73h4.9v2.087c-.01.017-.023.033-.033.05h.032v-.05c.65-1.002 1.812-2.435 4.414-2.435 3.222 0 5.638 2.106 5.638 6.632zM5.348 2.5c-1.676 0-2.772 1.093-2.772 2.54 0 1.42 1.066 2.538 2.717 2.546h.032c1.71 0 2.77-1.132 2.77-2.546C8.056 3.593 7.02 2.5 5.344 2.5h.005zm-2.48 21.834h4.896V9.604H2.867v14.73z" /></svg></a></li></ul></div>';
var d=$('.blog-post header, [class*="col-"] > .post-container header');
var i=$(".social-share-container");
var f=$('.column-control-product-catalog-intro >.container >.row > [class*="col-md-"]:first-child');
var c=$('.program-page .column-control-book-title > .container > .row > [class*="col-md-"]:first-child');
var a=d.add(i).add(f).add(c);
a.append(m);
var h=$(".product-page .column-control-book-title .product-details-section").find(".table-responsive > p:first-of-type");
var g=$(".series-page .series-col-control-desc");
var j=h.add(g);
j.after(m);
var b=$(".event-description");
b.before(m);
var e={description:$("head title").text(),emailAddress:undefined,emailBody:undefined,emailSubject:undefined,image:undefined,title:$("head title").text(),url:location.protocol+"//"+location.host+location.pathname};
var k=function(n){if(n!==undefined&&n!==null){if(n.match(/%[0-9a-f]{2}/i)!==null){n=decodeURIComponent(n);
k(n)
}else{return encodeURIComponent(n)
}}};
for(var l in e){if(e.hasOwnProperty(l)&&e[l]!==undefined){e[l]=k(e[l])
}}$(".blog-flex-share-fb a").attr("href","https://www.facebook.com/sharer/sharer.php?u="+e.url);
$(".blog-flex-share-linkedin a").attr("href","http://www.linkedin.com/shareArticle?mini=true&url="+e.url+(e.title!==undefined?"&title="+e.title:"")+(e.description!==undefined?"&summary="+e.description:""));
$(".blog-flex-share-twitter a").attr("href","http://twitter.com/share?url="+e.url+"&amp;text="+(e.description!==undefined?e.description:""))
}function socialShareMobile(){var b=$(".social-share-container");
if(b.length>0){var a=b.clone();
var d=b.closest(".column-control").find(".title").eq(0);
if(b.closest(".col-12").hasClass("col-md-4")||b.closest(".col-12").hasClass("col-md-3")){d.after("<div class='social-share-container-mobile'></div>");
var c=$(".social-share-container-mobile");
a.appendTo(c)
}}}function socialShareEmailPopUp(){var l=$(".share-via-email");
function e(){var m=location.href;
var n=function(){return m
};
return n()
}function c(){var n=$("head > title").text();
var m="mailto:?subject="+encodeURIComponent(n)+"&body=Check out the resources that are available for this Pearson title: \n"+e();
return m
}function a(n,o,m){if(n){if(arguments.length===2){n.text(o)
}else{n.attr("href",m)
}}}if(l.length>0){function g(){var m='<div class="share-via-email-popup" role="dialog" aria-modal="true" aria-labelledby="dialog__email-share-header" id="dialog__email-share"><h4 class="share-popup-title" id="dialog__email-share-header">Share a link</h4><p class="email-share"><a><i class="fa fa-envelope fa-2" aria-hidden="true"></i> Share</a></p></div>';
$(m).appendTo($("body"))
}g();
a($(".share-via-email-popup .email-share a"),e(),c())
}function j(){var m=$("main .blog-flex-social-share");
var o=$("head > title").text();
var n=location.protocol+"//"+location.host+location.pathname;
m.find("li a").attr("target","_blank").end().find("li.blog-flex-share-youtube").remove().end().find("ul").append('<li class="blog-flex-share-email"><a aria-label="Share on email" href="mailto:?subject='+encodeURIComponent(o)+"&body=I thought you'd be interested in this: \n"+n+'"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" focusable="false"><title>Email icon</title><path fill="#fff" d="M28 11.094v12.406c0 1.375-1.125 2.5-2.5 2.5h-23c-1.375 0-2.5-1.125-2.5-2.5v-12.406c0.469 0.516 1 0.969 1.578 1.359 2.594 1.766 5.219 3.531 7.766 5.391 1.313 0.969 2.938 2.156 4.641 2.156h0.031c1.703 0 3.328-1.188 4.641-2.156 2.547-1.844 5.172-3.625 7.781-5.391 0.562-0.391 1.094-0.844 1.563-1.359zM28 6.5c0 1.75-1.297 3.328-2.672 4.281-2.438 1.687-4.891 3.375-7.313 5.078-1.016 0.703-2.734 2.141-4 2.141h-0.031c-1.266 0-2.984-1.437-4-2.141-2.422-1.703-4.875-3.391-7.297-5.078-1.109-0.75-2.688-2.516-2.688-3.938 0-1.531 0.828-2.844 2.5-2.844h23c1.359 0 2.5 1.125 2.5 2.5z"></path></svg></a></li>').end().append('<div class="blog-flex-share-link"><span tabindex="-1">'+n+'</span><button class="button" id="copy-share-link" aria-label="Copy URL to share">Copy</button></div>').after('<div class="social-share-popup-trigger--container"><button class="social-share-popup-trigger button--unstyled" name="share-this-page" id="share-this-page">Share this page</button></div>').addClass("social-share-popup").prepend('<h4 class="share-popup-title" id="dialog__social-share-header">Share</h4>').appendTo($("body"))
}j();
var k=$(".blog-flex-share-link span");
var h=$(".blog-flex-share-link button");
var b=$(".share-via-email-popup .email-share a");
function d(){k.removeClass("highlight")
}function i(){k.addClass("highlight");
setTimeout(d,2000)
}h.on("click",function(n){var m=location.protocol+"//"+location.host+location.pathname;
i();
n.preventDefault();
clipboard.copy(m)
});
function f(){a(b,e(),c())
}$(".tab-panel").on("click",function(){setTimeout(f,500)
})
}$(document).ready(function(){socialShareAppend();
socialShareMobile();
socialShareEmailPopUp()
});
function contentExpand(){var a=$(".content-tile-content-expander-link");
var c=$(".column-control-content-expander");
if(a.length>0){var b=GetURLParameter("expand");
a.each(function(j){var e=$(this);
var m=e.find("figcaption > .content-tile__title, figcaption > a .content-tile__title").text();
var r=m.replace(/\s/g,"");
var k=e.find("figure");
var h=k.find("picture").html();
var o=k.find("figcaption").html();
var n=e.find("figcaption > .content-tile-subtitle, figcaption > a .content-tile-subtitle").text();
var p=e.find("figcaption > .content-tile-text").html();
var l=e.find("figure > a");
var g=l.attr("href");
k.append('<a href="'+g+'" class="expand-link"></a>');
var d=k.find(".expand-link");
d.append("<picture>"+h+"</picture>").append("<figcaption>"+o+"</figcaption>");
d.find("a").attr("tabindex","-1");
k.find(">*").not(".expand-link").remove();
l=e.find("figure > a");
g=l.attr("href");
if(c.length==0){l.attr("href",g+"?expand="+r)
}else{c.addClass("flex-layout-tablet");
e.parent().after('<div class="director-info" aria-expanded="false"><button type="button" aria-label="Close info" class="close-info" tabindex="0"></button><h3>'+m+"</h3><h5>"+n+"</h5>"+p+"</div>");
var f=$(".director-info");
var q=f.find("> button");
l.on("click",function(t){t.preventDefault();
var i=$(".director-info");
var s=i.eq(j);
i.hide();
if(e.hasClass("director-selected")){e.removeClass("director-selected");
a.removeClass("director-selected");
s.hide().attr("aria-expanded","false")
}else{a.removeClass("director-selected");
s.show().attr("aria-expanded","true");
e.addClass("director-selected");
$("html, body").animate({scrollTop:e.offset().top},500)
}});
q.on("click",function(i){i.preventDefault();
f.hide().attr("aria-expanded","false");
e.removeClass("director-selected")
});
if(b==r){l.trigger("click")
}}})
}if(c.length>0){if(c.find(".column-control-expanded-content").length>0&&!($("body").hasClass("cq-wcm-edit"))){c.css({"padding-bottom":0,"padding-top":0});
c.find(">.container >.row >.col-12 >.column-control").not(".column-control-expanded-content").addClass("flex-layout-tablet");
c.each(function(){var e=$(this);
var d=e.find(".column-control-expanded-content");
var f=e.find(".content-tile-book-box, .content-tile-book-box-v2");
d.append('<button type="button" aria-label="Close info" class="close-info" tabindex="0"></button>');
var g=d.find(".close-info");
g.on("click",function(h){h.preventDefault();
d.hide();
f.removeClass("selected")
});
f.each(function(j){var k=$(this);
var h=k.parent();
h.after(d.eq(j));
k.on("click",function(m){m.preventDefault();
var i=e.find(".column-control-expanded-content");
var l=i.eq(j);
i.hide();
l.show();
f.removeClass("selected");
k.addClass("selected");
$("html, body").animate({scrollTop:k.offset().top},500)
})
})
})
}}}$(document).ready(function(){contentExpand()
});
function tagsFilter(){$(".tab-panel-filters .tag-list").addClass("tags-filter posts-filter");
$(".search-facets").addClass("tags-filter posts-filter");
$(".tab-panel-filters .author-list").addClass("tags-filter author-filter");
var s=$(".search-facets");
s.wrap('<div class="search-facets-container"></div>');
var b=$(".tab-panel-filters .text");
b.each(function(){var B=$(this).find("ul");
if(B.length>0){$(this).addClass("tags-filter text-category-filter")
}});
function t(){var B=$(".blog-list-link");
if(B.length>0){var C=B.find("a").attr("href");
return C
}else{return""
}}var k=$(".tags-filter");
var h=$(".tags-filter-container");
var m=window.location.pathname;
var u=$(".tags-filter-container .content-tile");
var y=GetURLParameter("filterBy");
var l=GetURLParameter("archiveDate");
var q=$(".filter-by-first-tag");
var x=$(".filters-to-blog-list");
var A=t();
if(k.length>0){k.each(function(){var D=$(this);
D.append('<select label="Filter by tag" aria-label="Filter by tag"> </select><i></i>');
var B=D.find("select");
var C=D.find("li");
C.each(function(F){var G=$(this);
var I=G.find("a").attr("href");
var H=G.text().replace(/\s/g,"");
var E=G.text().trim();
if(h.length>0){B.append('<option value="'+E+'">'+E+"</option>")
}else{if(I===undefined){B.append('<option value="'+H+'">'+E+"</option>")
}else{B.append('<option value="'+I+'">'+E+"</option>")
}}})
});
k.find("option").eq(0).val("All");
var g=$(".posts-filter select");
var f=$(".text-category-filter select");
var w=$(".author-filter select");
var o=$(".tags-filter").not(".posts-filter, .text-category-filter, .author-filter").find("select");
function z(B){B.parent().parent().append('<a href="#" title="Clear filter"  aria-label="Clear filter" class="clear-filter">Clear filter</a>')
}function c(B){B.on("change",function(){var E=B.val();
var C=E.substr((E.indexOf("?")),E.length);
var D=B.find("option:selected").text().replace(/\s/g,"");
if(B.parent().hasClass("text-category-filter")){window.location.href=E
}else{if(x.length>0&&A.length>0){if(E==="All"||E==="All posts"||E==="All authors"){window.location.href=A
}else{window.location.href=A+C+"&filterBy="+D
}}else{if(E==="All"||E==="All posts"||E==="All authors"){window.location.href=m
}else{window.location.href=E+"&filterBy="+D
}}}})
}function d(B){B.find("option").each(function(){var E=$(this);
var C=E.text().replace(/\s/g,"");
var G=E.val();
if(G===y||C===y){B.val(G);
E.parent().parent().addClass("params-set");
var D=$(".tab-panel");
var I=D.find(".nav >li");
var H=D.find(".tab-pane");
if(D.has(E)){I.removeClass("active");
H.removeClass("active");
E.closest(H).addClass("active");
var F=E.closest(H).index();
I.eq(F).addClass("active")
}}})
}function p(B,C){C.on("change",function(){C.find("option").each(function(){if($(this).is(":selected")){B.removeClass("disabled-btn")
}})
})
}o.parent().append('<a href="#" title="Clear filter"  aria-label="Clear filter" class="clear-content-tags-filter">Clear filter</a>');
var e=$(".tags-filter-btn");
var n=$(".clear-content-tags-filter");
(function j(){var B;
o.on("change",function(){B=this.value
});
e.on("click",function(){if(B==="All"||B==="All posts"){u.removeClass("hide-item");
return
}else{u.addClass("hide-item");
u.each(function(){var C=$(this);
var D=C.find(".content-tile-tags li");
D.each(function(){var E=$(this).find("a").text();
if(E===B){C.removeClass("hide-item")
}})
})
}});
n.on("click",function(C){C.preventDefault();
u.removeClass("hide-item")
})
})();
z(g);
c(g);
d(g);
f.attr("label","Filter by category");
z(f);
c(f);
d(f);
z(w);
c(w);
d(w);
var r=$(".clear-filter");
r.each(function(){var C=$(this);
var B=C.parent().find("select");
var D=B.find("option").eq(0).text().replace(/\s/g,"");
C.on("click",function(E){E.preventDefault();
window.location.href=m+"?filterBy="+D
})
});
if(y===undefined&&l===undefined&&q.length>0){var v=g.find("option").eq(1);
var a=v.val();
var i=v.text().replace(/\s/g,"")
}}}$(document).ready(function(){tagsFilter()
});
function formDateFilter(){$(".tab-panel-filters .form").addClass("form-date-filter");
function m(){var p=$(".blog-list-link");
if(p.length>0){var q=p.find("a").attr("href");
return q
}else{return""
}}var k=$(".form-date-filter");
if(k.length>0){var f=k.find('select[name="filter_by_month"]');
var j=k.find('select[name="filter_by_year"]');
var b=k.find("select");
var i=k.find(".submit-button button");
var l=window.location.pathname;
var g=GetURLParameter("archiveDate");
var d=m();
var h=$(".filters-to-blog-list");
k.append('<a href="#" class="clear-filter clear-date-filter" title="Clear filter">Clear filter</a>');
i.addClass("disabled-btn");
var n=k.find(".clear-date-filter");
n.on("click",function(p){p.preventDefault();
window.location.href=l
});
var o=false;
var e=false;
j.on("change",function(){j.find("option").each(function(){if($(this).is(":selected")){o=$(this).val()
}})
});
f.on("change",function(){f.find("option").each(function(){if($(this).is(":selected")){e=$(this).val()
}})
});
b.on("change",function(){if(o&&e){i.removeClass("disabled-btn")
}else{i.addClass("disabled-btn")
}});
if(!(g===undefined)){var a=g.substr(0,4);
var c=g.substr(5,7);
j.find("option").each(function(){var p=$(this).val();
if(p===a){j.val(a);
o=p
}});
f.find("option").each(function(){var p=$(this).val();
if(p===c){f.val(c);
e=p
}});
b.on("change",function(){if(o||e){i.removeClass("disabled-btn")
}})
}i.on("click",function(p){p.preventDefault();
var q;
if(o&&e){if(h.length>0&&d.length>0){q=d+"?archiveDate="+o+"-"+e
}else{q=l+"?archiveDate="+o+"-"+e
}window.location.href=q
}})
}}$(document).ready(function(){formDateFilter()
});
function tabPanel(){var a=$(".tab-panel");
if(a.length>0){a.each(function(){var b=$(this);
var i=b.find(".dynamic-content-nav");
var g=b.find(".nav-tabs li");
var f=b.find(".tab-pane");
g.each(function(l){var m=$(this);
var p=m.find("a");
var k=p.attr("href");
var n=m.find("a").text();
if(i.length>0){if(l===0){p.trigger("click")
}}f.each(function(r){var t=$(this);
var q=t.find("h2");
q.eq(0).css("margin-top",0);
if(l===r){t.before('<div class="tab-panel-nav-item" id="'+k+'"><a href="#">'+n+"</a></div>")
}var s=t.find(".title h1");
var v=t.find(".title").eq(0).find("h2");
var u=v.text();
if(s.length===0&&v.length>0&&!($("body").hasClass("cq-wcm-edit"))){v.after('<div class="title"><h1>'+u+"</h1></div>");
v.remove()
}});
var o=b.find(".tab-panel-nav-item");
m.on("click",function(){o.each(function(){var r=$(this);
var q=r.attr("id");
if(q===k){r.addClass("active");
setTimeout(function(){r.addClass("active")
},300)
}})
})
});
var d=b.find(".tab-panel-nav-item");
if(d.css("display")==="block"){if(document.location.search.length===0){d.removeClass("active");
f.removeClass("active")
}}f.each(function(k){var l=$(this);
if(l.hasClass("active")){d.removeClass("active");
d.each(function(m){if(k===m){$(this).addClass("active")
}})
}});
d.each(function(k){var l=$(this);
var m=l.find("a");
m.on("click",function(n){n.preventDefault();
if(l.hasClass("active")){d.removeClass("active");
f.removeClass("active");
g.removeClass("active")
}else{d.removeClass("active");
l.addClass("active");
f.removeClass("active");
g.removeClass("active");
f.each(function(o){if(k===o){$(this).addClass("active")
}});
g.each(function(o){if(k===o){$(this).addClass("active")
}})
}})
});
var h=false;
if($("header").css("z-index")==="253"){h=true
}if(b.hasClass("tab-panel-features-blue--show-more")&&!h&&!($("body").hasClass("cq-wcm-edit"))&&g.length>3){b.find(".nav-tabs").append('<li class="show-more"><a href="#">More<i></i></a><ul></ul></li>');
var j=b.find(".show-more ul");
var c=b.find(".show-more");
var e=c.find(">a");
g.each(function(l){var m=$(this);
var k=m.text();
if(l>3&&!(k==="Order")&&!(k==="Order Info")){m.appendTo(j);
m.on("click",function(){$(".before-sub").removeClass("active").attr("aria-selected",false);
c.removeClass("open").addClass("active");
e.text(k);
e.append("<i />")
})
}if(l<4||k==="Order"||k==="Order Info"){m.addClass("before-sub");
m.on("click",function(){j.find("li").removeClass("active").attr("aria-selected",false);
c.removeClass("open").removeClass("active");
e.text("More");
e.append("<i />")
})
}});
e.on("click",function(k){k.preventDefault();
c.toggleClass("open")
})
}})
}}$(document).ready(function(){tabPanel()
});
function contentFilter(){var b=$('select[name="filter_content"]');
if(b.length){b.parent().parent().addClass("dropdown-filter").append('<span class="submit-button submit-filter"><button type="submit" class="filter-btn disabled-btn" title="Filter content" title="Filter content">Go</button></span> <a href="#" title="Clear filter"  aria-label="Clear filter" class="clear-filter clear-content-filter">Clear filter</a>');
var e=$(".content-filter-container");
var c=$(".submit-filter button");
var a=$(".clear-content-filter");
var d=0;
b.on("change",function(){b.find("option").each(function(f){var g=$(this);
if(g.is(":selected")){console.log(f+": "+g.val());
d=f-1;
if(!(f===0)){c.removeClass("disabled-btn")
}}})
});
c.on("click",function(){if(d>-1){console.log(d);
e.each(function(f){var g=$(this);
if(f===d){e.hide();
g.show()
}})
}else{e.show()
}});
a.on("click",function(f){f.preventDefault();
e.show()
})
}}$(document).ready(function(){contentFilter()
});
function embedTwitter(){if($(".embed-twitter-pearsonus").length>0||$(".embed-twitter-pearson").length>0||$(".embed-twitter-pearson_uk").length>0){$(".embed-twitter-pearsonus").append('<a class="twitter-timeline" href="https://twitter.com/PearsonNorthAm">Tweets by PearsonNorthAm</a> <script async src="//platform.twitter.com/widgets.js" charset="utf-8"><\/script>');
$(".embed-twitter-pearson").append('<a class="twitter-timeline" href="https://twitter.com/pearson">Tweets by pearson</a> <script async src="//platform.twitter.com/widgets.js" charset="utf-8"><\/script>');
$(".embed-twitter-pearson_uk").append('<a class="twitter-timeline" href="https://twitter.com/Pearson_UK">Tweets by pearson</a> <script async src="//platform.twitter.com/widgets.js" charset="utf-8"><\/script>');
!function(f,a,g){var e,b=f.getElementsByTagName(a)[0];
var c=/^http:/.test(f.location)?"http":"https";
if(!f.getElementById(g)){e=f.createElement(a);
e.id=g;
e.src=c+"://platform.twitter.com/widgets.js";
b.parentNode.insertBefore(e,b)
}}(document,"script","twitter-wjs");
$(document).ready(function(){var d=$("[class^=twitterembed]").attr("class");
if(typeof d!="undefined"){var b=d.split("-");
var a=b[1];
var c='<a class="twitter-timeline" href="https://twitter.com/'+a+'">Tweets by @'+a+"</a>";
$("."+d).html(c)
}})
}}function embedFacebook(){var g=$("[class^=facebookembed]");
var e=g.attr("class");
if(typeof e!="undefined"){$("body").prepend('<div id="fb-root"></div>');
(function(k,h,l){var j,i=k.getElementsByTagName(h)[0];
if(k.getElementById(l)){return
}j=k.createElement(h);
j.id=l;
j.src="//connect.facebook.net/pl_PL/sdk.js#xfbml=1&version=v2.8&appId=515015685264159";
i.parentNode.insertBefore(j,i)
}(document,"script","facebook-jssdk"));
var d=g.parent().outerWidth();
function f(){if(d<500){return d
}else{return"500"
}}var a=e.split("-");
var b=a[1];
var c='<div class="fb-page" data-href="https://www.facebook.com/'+b+'/" data-tabs="timeline" data-width="'+f()+'" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/'+b+'/" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/'+b+'/">Pearson</a></blockquote></div>';
$("."+e).html(c)
}}$(document).ready(function(){embedTwitter();
embedFacebook()
});
function colorBlocks(){var a=$(".duplicated-color");
if(a.length>0&&!($("body").hasClass("cq-wcm-edit"))){a.each(function(){var f=$(this);
var e=f.find(".content-tile-color-block--half-img--text-right");
var d=f.find(".content-tile-color-block--half-img");
var b=e.find("figcaption").css("background-color");
var g=d.find("figcaption").css("background-color");
f.find("> .container").prepend('<div class="bg-cover-left"></div>');
f.find("> .container").append('<div class="bg-cover-right"></div>');
var h=f.find(".bg-cover-left");
var c=f.find(".bg-cover-right");
h.css("background-color",b);
c.css("background-color",g)
})
}}$(document).ready(function(){colorBlocks()
});
function viewLarger(){var f=$(".view-larger");
var a=$(".view-larger__link");
var h=$(".view-larger, .view-larger__link");
if(h.length>0){$("body").append('<div class="pop-up-window view-larger-dialog"><img src="" class="view-larger-dialog__image" alt="" /></div>');
var g=$(".view-larger__image");
var c=g.attr("alt");
var e=$(".view-larger-dialog");
var d=e.find("img");
d.attr("alt",c);
function b(k,j,i){k.on("click",function(l){l.preventDefault();
j.attr({src:i,tabindex:"0"})
})
}a.each(function(){var j=$(this);
var i=j.parents("figure").find("picture img").attr("src");
b(j,d,i)
});
f.each(function(){var j=$(this);
var i=j.find("picture source").eq(0).attr("srcset");
b(j,d,i)
})
}}$(document).ready(function(){viewLarger()
});
function generateSize(a){fileUrl=$(a).attr("href");
if(fileUrl.substring(0,4)=="http"){return 0
}else{var b;
b=$.ajax({type:"HEAD",url:fileUrl,success:function(){$(".filesize",$(a)).before(" | ");
$(".filesize",$(a)).html(humanize(b.getResponseHeader("Content-Length")))
}})
}}function humanize(c){var b=["bytes","KB","MB","GB","TB","PB"];
var a=Math.floor(Math.log(c)/Math.log(1024));
a=Math.min(Math.max(0,a),b.length-1);
var d=Math.round((c/Math.pow(1024,a))*100)/100;
return d+" "+b[a]
}$(document).ready(function(){if($("main .text").length){$("main .text, main .link-list, main .content-tile-container p").find("a").each(function(){var g="";
var d="";
var a="";
var f=$(this).attr("title");
var b=$(this).attr("href");
if(!(b=="#")&&!(b==undefined)&&!(b==null)&&(b.indexOf("mailto:")<0)&&(b.indexOf("tel:")<0)&&!(b.indexOf("#")==0)&&!(b.length==0)){if(b.indexOf(".pdf")>0||b.indexOf(".doc")>0||b.indexOf(".txt")>0||b.indexOf(".docx")>0||b.indexOf(".PDF")>0||b.indexOf(".DOC")>0||b.indexOf(".TXT")>0||b.indexOf(".DOCX")>0){var c=b.match(/.*\/([^/]+)\.([^?]+)/i);
if(!(c==null)){var a=c[1];
var e=c[2].toUpperCase();
var g=e.substring(0,3);
$extension=$('<span class="extension">'+g+"</span>");
$fileSize=$('<span class="filesize"></span>');
$descriptor=$('<span class="file-type-size">').append($extension).append($fileSize);
$descriptor.append(")").prepend(" (");
$(this).append($descriptor);
size=generateSize(this)
}}}})
}});
function eventDetailFunctions(){function b(){var e=$(".blog-list-link");
if(e.length>0){var f=e.find("a").attr("href");
return f
}else{return""
}}function c(m){var g=new Date($($(m.find("ul > li")[0]).find("time")[0]).attr("datetime"));
var h=new Date($($(m.find("ul > li")[1]).find("time")[0]).attr("datetime"));
var e=(g<=h)?true:false;
var n;
var l;
var f=$($(m.find("ul > li")[0]).find("time")[1]).attr("datetime");
var i=$($(m.find("ul > li")[1]).find("time")[1]).attr("datetime");
var k=$($(m.find("ul > li")[2]).find("time")[0]).attr("display");
var j=$($(m.find("ul > li")[2]).find("time")[0]).attr("zone");
if((h.getFullYear()>g.getFullYear())&&e){n='<time datetime="'+g+'"><span>'+g.toLocaleDateString("en-US",{month:"long",day:"numeric",year:"numeric"})+'&ndash;</span></time><time datetime="'+h+'"><span>'+h.toLocaleDateString("en-US",{month:"long",day:"numeric",year:"numeric"})+"</span></time>"
}else{if((h.getMonth()>g.getMonth())&&e){n='<time datetime="'+g+'"><span>'+g.toLocaleDateString("en-US",{month:"long",day:"numeric"})+'&ndash;</span></time><time datetime="'+h+'"><span>'+h.toLocaleDateString("en-US",{month:"long",day:"numeric",year:"numeric"})+"</span></time>"
}else{if((h.getDate()>g.getDate())&&e){n='<time datetime="'+g+'"><span>'+g.toLocaleDateString("en-US",{month:"long",day:"numeric"})+'&ndash;</span></time><time datetime="'+h+'"><span>'+h.toLocaleDateString("en-US",{day:"numeric"})+", "+h.toLocaleDateString("en-US",{year:"numeric"})+"</span></time>"
}else{n='<time datetime="'+g+'"><span>'+g.toLocaleDateString("en-US",{month:"long",day:"numeric",year:"numeric"})+"</span></time>";
if(k){l='<div class="event-clock"><time><span class="weight--default typecase-lower" >'+f.replace("AM","a.m.").replace("PM","p.m.")+" &#8211; "+i.replace("AM","a.m.").replace("PM","p.m.")+'&nbsp;</span><span class="weight--default">'+j+"</span></time></div>"
}}}}if(!k){m.find("ul").replaceWith(n)
}else{m.find("ul").replaceWith(n);
m.after(l)
}}(function a(){var h=$(".event");
var j=$(".event-external-link");
if(h.length>0){var l=h.find(".event-list-tags");
var k=l.find("li");
var g=h.parent().parent().find("> .col-md-4.col-12");
var e=h.find(".event-description");
g.prepend(l);
l.wrap("<section class='tag-list'></section>");
sortUL(l)
}if($(".recorded-date").length>0){h.find(".event-time ul, .event-address, .event-type").css("display","none")
}else{c(h.find(".event-time"))
}j.detach().insertAfter(".event-description");
h.find(".event-external-link > a").addClass("button button-primary--button-only");
h.find(".event-registration-link > a").addClass("button button-primary--button-only");
if($(".event-registration-link").length>0){var f=$(".event-registration-link");
var i=f.find("a.button");
f.addClass("is-visible")
}$(".event").css({visibility:"visible",opacity:1})
})();
(function d(){var f=$(".event-list");
if(f.length>0){if($(".event-list-live-online").length>0){var g=$(".event-list-live-online").html().trim();
$(".event-list-live-online").html(g)
}if($(".event-list-in-person").length>0){var h=$(".event-list-in-person").html().trim();
$(".event-list-in-person").html(h)
}var e=f.find("ul, ol");
if(e.length===0){f.addClass("empty-list")
}}f.find(".event-list-container").each(function(j,l){var k=$(this);
if($(k).find(".event-list-properties").length>0){$(k).find(".event-list-time").css("display","none");
$(k).find(".event-list-address").css("display","none")
}else{var m=($(this).find(".event-list-time"));
c(m)
}})
})()
}$(document).ready(function(){eventDetailFunctions()
});
function blogDetailFunctions(){var c='<div class="back-to-parent-blog-list"><a href="'+a()+'">View all blogs</a></div>';
(function b(){var g=$(".blog-post, .post-container");
var i=g.find(">header");
if(g.length>0){var h=g.find(".blog-list-tags");
var e=h.find("li");
var d=g.parent().parent().find("> .col-md-4.col-12");
var f=g.find(".post-header");
d.prepend(h);
h.wrap("<section class='tag-list'></section>");
sortUL(h);
if(!$(".back-to-parent-blog-list").length){i.before(c)
}}})();
function a(){var d=$(".blog-list-link");
if(d.length>0){var e=d.find("a").attr("href");
return e
}else{return""
}}}$(window).on("load",function(){blogDetailFunctions()
});
function isbnConverterFunctions(){var l=function(n){return n.replace(/-/g,"")
};
var e=function(n){return n.length===10?true:false
};
var b=function(n){return n.length===13?true:false
};
var k=function(n){return n.length===14?true:false
};
var i=function(q){var o=0,p=0;
q=l(q);
var n=q.split("");
switch(q.length){case 10:p=0;
if(n[9].toUpperCase()==="X"){n[9]="10"
}for(o=0;
o<10;
o++){p+=parseInt(n[o],10)*(10-o)
}return(p%11)===0?true:false;
case 13:p=0;
for(o=0;
o<13;
o+=2){p+=parseInt(n[o],10)
}for(o=1;
o<13;
o+=2){p+=parseInt(n[o],10)*3
}return(p%10)===0?true:false;
case 14:p=0;
n.splice(0,1);
for(o=0;
o<13;
o+=2){p+=parseInt(n[o],10)
}for(o=1;
o<13;
o+=2){p+=parseInt(n[o],10)*3
}return(p%10)===0?true:false;
default:return false
}};
var d=function(p){var n,o,q;
p=l(p);
if(p.length===10){return p
}if(i(p)){if(k(p)){p=p.slice(1)
}if(b(p)){if(p.slice(0,3)!=="978"){return"NO ISBN EQUIVALENT"
}q=0;
n=p.split("");
n.splice(0,3);
n.pop();
for(o=0;
o<n.length;
o++){q+=parseInt(n[o],10)*(10-o)
}q=(11-(q%11))%11;
q=(q===10)?"X":q;
n.push(q);
return n.join("")
}}return false
};
var a=function(p){var n,r,o,q;
p=l(p);
if(p.length===13){return p
}if(p.length===14){return p.substring(1)
}if(i(p)){if(e(p)){q=0;
n=p.split("");
n.splice(0,0,"9","7","8");
n.pop();
for(o=0;
o<n.length;
o+=2){r=parseInt(n[o],10);
q+=r
}for(o=1;
o<n.length;
o+=2){r=parseInt(n[o],10);
q+=r*3
}q=(10-(q%10))%10;
n.push(q);
return n.join("")
}}return false
};
var j=function(p){var n,r,o,q;
p=l(p);
if(p.length===14){return p
}if(p.length===13){return"0"+p
}if(i(p)){if(e(p)){q=0;
n=p.split("");
n.splice(0,0,"9","7","8");
n.pop();
for(o=0;
o<n.length;
o+=2){r=parseInt(n[o],10);
q+=r
}for(o=1;
o<n.length;
o+=2){r=parseInt(n[o],10);
q+=r*3
}q=(10-(q%10))%10;
n.push(q);
n.splice(0,0,"0");
return n.join("")
}}return false
};
var h=function(q){var p=[],n=[],s=[];
var r="INVALID ISBN ENTERED";
var o=q.split("\n");
o.forEach(function(v,u,t){v=v.trim();
if(v){i(v)?p.push(d(v)):p.push(r);
i(v)?n.push(a(v)):n.push(r);
i(v)?s.push(j(v)):s.push(r)
}else{p.push("");
n.push("");
s.push("")
}});
if((p.indexOf(r)>=0)||(n.indexOf(r)>=0)||(s.indexOf(r)>=0)){$(".isbn-error").css("display","block")
}else{$(".isbn-error").css("display","none")
}return[p,n,s]
};
var g=function(p){var q=document.querySelector(".isbn-output-"+p+" > div > textarea");
q.select();
try{var o=document.execCommand("copy")
}catch(n){console.error("Error: "+n)
}document.querySelector(".isbn-copy-"+p+" > p > a").focus()
};
var m=function(){$(".isbn-output, .isbn-error").css("display","none");
$(".isbn-input > div > textarea, .isbn-output-10 > div > textarea, .isbn-output-13 > div > textarea, .isbn-output-14 > div > textarea").val("")
};
var c=function(t,v){var u,o,n=4,q="",r;
var s=t.length;
var p=[t].concat(v);
q="data:text/csv;charset=utf-8,";
q+="Your ISBN(s),ISBN-10,ISBN-13,GTIN-14\n";
for(u=0;
u<s;
u++){for(o=0;
o<n;
o++){q+=p[o][u];
q+=(o===n-1)?"\n":","
}}r=document.createElement("a");
r.setAttribute("href",encodeURI(q));
r.setAttribute("download","ISBNs.csv");
document.body.appendChild(r);
r.trigger("click");
document.body.removeChild(r)
};
var f=function(){var o=[],n=[];
$(".isbn-convert-button > p > a").on("click",function(p){o=$(".isbn-input > div > textarea").val();
n=h(o);
$(".isbn-copy-button, .isbn-output").css("display","block");
$(".isbn-output-10 > div > textarea").val(n[0].join("\n"));
$(".isbn-output-13 > div > textarea").val(n[1].join("\n"));
$(".isbn-output-14 > div > textarea").val(n[2].join("\n"));
p.preventDefault();
return false
});
$(".isbn-copy-10 > p  > a").on("click",function(p){g(10);
p.preventDefault()
});
$(".isbn-copy-13 > p  > a").on("click",function(p){g(13);
p.preventDefault()
});
$(".isbn-copy-14 > p  > a").on("click",function(){}