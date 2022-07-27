/*! jQuery v2.2.4 | (c) jQuery Foundation | jquery.org/license */
;
!function(d,c){"object"==typeof module&&"object"==typeof module.exports?module.exports=d.document?c(d,!0):function(b){if(!b.document){throw new Error("jQuery requires a window with a document")
}return c(b)
}:c(d)
}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=a.document,e=c.slice,f=c.concat,g=c.push,h=c.indexOf,i={},j=i.toString,k=i.hasOwnProperty,l={},m="2.2.4",n=function(a,b){return new n.fn.init(a,b)
},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()
};
n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return e.call(this)
},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:e.call(this)
},pushStack:function(a){var b=n.merge(this.constructor(),a);
return b.prevObject=this,b.context=this.context,b
},each:function(a){return n.each(this,a)
},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)
}))
},slice:function(){return this.pushStack(e.apply(this,arguments))
},first:function(){return this.eq(0)
},last:function(){return this.eq(-1)
},eq:function(a){var b=this.length,c=+a+(0>a?b:0);
return this.pushStack(c>=0&&b>c?[this[c]]:[])
},end:function(){return this.prevObject||this.constructor()
},push:g,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;
for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);
i>h;
h++){if(null!=(a=arguments[h])){for(b in a){c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d))
}}}return g
},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)
},noop:function(){},isFunction:function(a){return"function"===n.type(a)
},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window
},isNumeric:function(a){var b=a&&a.toString();
return !n.isArray(a)&&b-parseFloat(b)+1>=0
},isPlainObject:function(a){var b;
if("object"!==n.type(a)||a.nodeType||n.isWindow(a)){return !1
}if(a.constructor&&!k.call(a,"constructor")&&!k.call(a.constructor.prototype||{},"isPrototypeOf")){return !1
}for(b in a){}return void 0===b||k.call(a,b)
},isEmptyObject:function(a){var b;
for(b in a){return !1
}return !0
},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?i[j.call(a)]||"object":typeof a
},globalEval:function(a){var b,c=eval;
a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=d.createElement("script"),b.text=a,d.head.appendChild(b).parentNode.removeChild(b)):c(a))
},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)
},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()
},each:function(a,b){var c,d=0;
if(s(a)){for(c=a.length;
c>d;
d++){if(b.call(a[d],d,a[d])===!1){break
}}}else{for(d in a){if(b.call(a[d],d,a[d])===!1){break
}}}return a
},trim:function(a){return null==a?"":(a+"").replace(o,"")
},makeArray:function(a,b){var c=b||[];
return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):g.call(c,a)),c
},inArray:function(a,b,c){return null==b?-1:h.call(b,a,c)
},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;
c>d;
d++){a[e++]=b[d]
}return a.length=e,a
},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;
g>f;
f++){d=!b(a[f],f),d!==h&&e.push(a[f])
}return e
},map:function(a,b,c){var d,e,g=0,h=[];
if(s(a)){for(d=a.length;
d>g;
g++){e=b(a[g],g,c),null!=e&&h.push(e)
}}else{for(g in a){e=b(a[g],g,c),null!=e&&h.push(e)
}}return f.apply([],h)
},guid:1,proxy:function(a,b){var c,d,f;
return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(d=e.call(arguments,2),f=function(){return a.apply(b||this,d.concat(e.call(arguments)))
},f.guid=a.guid=a.guid||n.guid++,f):void 0
},now:Date.now,support:l}),"function"==typeof Symbol&&(n.fn[Symbol.iterator]=c[Symbol.iterator]),n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){i["[object "+b+"]"]=b.toLowerCase()
});
function s(a){var b=!!a&&"length" in a&&a.length,c=n.type(a);
return"function"===c||n.isWindow(a)?!1:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a
}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ga(),z=ga(),A=ga(),B=function(a,b){return a===b&&(l=!0),0
},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;
d>c;
c++){if(a[c]===b){return c
}}return -1
},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+M+"))|)"+L+"*\\]",O=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+N+")*)|.*)\\)|)",P=new RegExp(L+"+","g"),Q=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),R=new RegExp("^"+L+"*,"+L+"*"),S=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),T=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),U=new RegExp(O),V=new RegExp("^"+M+"$"),W={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M+"|[*])"),ATTR:new RegExp("^"+N),PSEUDO:new RegExp("^"+O),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},X=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Z=/^[^{]+\{\s*\[native \w/,$=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,_=/[+~]/,aa=/'|\\/g,ba=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),ca=function(a,b,c){var d="0x"+b-65536;
return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)
},da=function(){m()
};
try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType
}catch(ea){H={apply:E.length?function(a,b){G.apply(a,I.call(b))
}:function(a,b){var c=a.length,d=0;
while(a[c++]=b[d++]){}a.length=c-1
}}
}function fa(a,b,d,e){var f,h,j,k,l,o,r,s,w=b&&b.ownerDocument,x=b?b.nodeType:9;
if(d=d||[],"string"!=typeof a||!a||1!==x&&9!==x&&11!==x){return d
}if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==x&&(o=$.exec(a))){if(f=o[1]){if(9===x){if(!(j=b.getElementById(f))){return d
}if(j.id===f){return d.push(j),d
}}else{if(w&&(j=w.getElementById(f))&&t(b,j)&&j.id===f){return d.push(j),d
}}}else{if(o[2]){return H.apply(d,b.getElementsByTagName(a)),d
}if((f=o[3])&&c.getElementsByClassName&&b.getElementsByClassName){return H.apply(d,b.getElementsByClassName(f)),d
}}}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==x){w=b,s=a
}else{if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(aa,"\\$&"):b.setAttribute("id",k=u),r=g(a),h=r.length,l=V.test(k)?"#"+k:"[id='"+k+"']";
while(h--){r[h]=l+" "+qa(r[h])
}s=r.join(","),w=_.test(a)&&oa(b.parentNode)||b
}}if(s){try{return H.apply(d,w.querySelectorAll(s)),d
}catch(y){}finally{k===u&&b.removeAttribute("id")
}}}}return i(a.replace(Q,"$1"),b,d,e)
}function ga(){var a=[];
function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e
}return b
}function ha(a){return a[u]=!0,a
}function ia(a){var b=n.createElement("div");
try{return !!a(b)
}catch(c){return !1
}finally{b.parentNode&&b.parentNode.removeChild(b),b=null
}}function ja(a,b){var c=a.split("|"),e=c.length;
while(e--){d.attrHandle[c[e]]=b
}}function ka(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);
if(d){return d
}if(c){while(c=c.nextSibling){if(c===b){return -1
}}}return a?1:-1
}function la(a){return function(b){var c=b.nodeName.toLowerCase();
return"input"===c&&b.type===a
}
}function ma(a){return function(b){var c=b.nodeName.toLowerCase();
return("input"===c||"button"===c)&&b.type===a
}
}function na(a){return ha(function(b){return b=+b,ha(function(c,d){var e,f=a([],c.length,b),g=f.length;
while(g--){c[e=f[g]]&&(c[e]=!(d[e]=c[e]))
}})
})
}function oa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a
}c=fa.support={},f=fa.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;
return b?"HTML"!==b.nodeName:!1
},m=fa.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;
return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ia(function(a){return a.className="i",!a.getAttribute("className")
}),c.getElementsByTagName=ia(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length
}),c.getElementsByClassName=Z.test(n.getElementsByClassName),c.getById=ia(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length
}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);
return c?[c]:[]
}},d.filter.ID=function(a){var b=a.replace(ba,ca);
return function(a){return a.getAttribute("id")===b
}
}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ba,ca);
return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");
return c&&c.value===b
}
}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0
}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);
if("*"===a){while(c=f[e++]){1===c.nodeType&&d.push(c)
}return d
}return f
},d.find.CLASS=c.getElementsByClassName&&function(a,b){return"undefined"!=typeof b.getElementsByClassName&&p?b.getElementsByClassName(a):void 0
},r=[],q=[],(c.qsa=Z.test(n.querySelectorAll))&&(ia(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")
}),ia(function(a){var b=n.createElement("input");
b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")
})),(c.matchesSelector=Z.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ia(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",O)
}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Z.test(o.compareDocumentPosition),t=b||Z.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;
return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))
}:function(a,b){if(b){while(b=b.parentNode){if(b===a){return !0
}}}return !1
},B=b?function(a,b){if(a===b){return l=!0,0
}var d=!a.compareDocumentPosition-!b.compareDocumentPosition;
return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)
}:function(a,b){if(a===b){return l=!0,0
}var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];
if(!e||!f){return a===n?-1:b===n?1:e?-1:f?1:k?J(k,a)-J(k,b):0
}if(e===f){return ka(a,b)
}c=a;
while(c=c.parentNode){g.unshift(c)
}c=b;
while(c=c.parentNode){h.unshift(c)
}while(g[d]===h[d]){d++
}return d?ka(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0
},n):n
},fa.matches=function(a,b){return fa(a,null,null,b)
},fa.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(T,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b))){try{var d=s.call(a,b);
if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType){return d
}}catch(e){}}return fa(b,n,null,[a]).length>0
},fa.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)
},fa.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);
var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;
return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null
},fa.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)
},fa.uniqueSort=function(a){var b,d=[],e=0,f=0;
if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++]){b===a[f]&&(e=d.push(f))
}while(e--){a.splice(d[e],1)
}}return k=null,a
},e=fa.getText=function(a){var b,c="",d=0,f=a.nodeType;
if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent){return a.textContent
}for(a=a.firstChild;
a;
a=a.nextSibling){c+=e(a)
}}else{if(3===f||4===f){return a.nodeValue
}}}else{while(b=a[d++]){c+=e(b)
}}return c
},d=fa.selectors={cacheLength:50,createPseudo:ha,match:W,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ba,ca),a[3]=(a[3]||a[4]||a[5]||"").replace(ba,ca),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)
},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fa.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fa.error(a[0]),a
},PSEUDO:function(a){var b,c=!a[6]&&a[2];
return W.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&U.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))
}},filter:{TAG:function(a){var b=a.replace(ba,ca).toLowerCase();
return"*"===a?function(){return !0
}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b
}
},CLASS:function(a){var b=y[a+" "];
return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")
})
},ATTR:function(a,b,c){return function(d){var e=fa.attr(d,a);
return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(P," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0
}
},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;
return 1===d&&0===e?function(a){return !!a.parentNode
}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;
if(q){if(f){while(p){m=b;
while(m=m[p]){if(h?m.nodeName.toLowerCase()===r:1===m.nodeType){return !1
}}o=p="only"===a&&!o&&"nextSibling"
}return !0
}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];
while(m=++n&&m&&m[p]||(t=n=0)||o.pop()){if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];
break
}}}else{if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1){while(m=++n&&m&&m[p]||(t=n=0)||o.pop()){if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b)){break
}}}}return t-=e,t===d||t%d===0&&t/d>=0
}}
},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fa.error("unsupported pseudo: "+a);
return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ha(function(a,c){var d,f=e(a,b),g=f.length;
while(g--){d=J(a,f[g]),a[d]=!(c[d]=f[g])
}}):function(a){return e(a,0,c)
}):e
}},pseudos:{not:ha(function(a){var b=[],c=[],d=h(a.replace(Q,"$1"));
return d[u]?ha(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;
while(h--){(f=g[h])&&(a[h]=!(b[h]=f))
}}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()
}
}),has:ha(function(a){return function(b){return fa(a,b).length>0
}
}),contains:ha(function(a){return a=a.replace(ba,ca),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1
}
}),lang:ha(function(a){return V.test(a||"")||fa.error("unsupported lang: "+a),a=a.replace(ba,ca).toLowerCase(),function(b){var c;
do{if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang")){return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-")
}}while((b=b.parentNode)&&1===b.nodeType);
return !1
}
}),target:function(b){var c=a.location&&a.location.hash;
return c&&c.slice(1)===b.id
},root:function(a){return a===o
},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)
},enabled:function(a){return a.disabled===!1
},disabled:function(a){return a.disabled===!0
},checked:function(a){var b=a.nodeName.toLowerCase();
return"input"===b&&!!a.checked||"option"===b&&!!a.selected
},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0
},empty:function(a){for(a=a.firstChild;
a;
a=a.nextSibling){if(a.nodeType<6){return !1
}}return !0
},parent:function(a){return !d.pseudos.empty(a)
},header:function(a){return Y.test(a.nodeName)
},input:function(a){return X.test(a.nodeName)
},button:function(a){var b=a.nodeName.toLowerCase();
return"input"===b&&"button"===a.type||"button"===b
},text:function(a){var b;
return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())
},first:na(function(){return[0]
}),last:na(function(a,b){return[b-1]
}),eq:na(function(a,b,c){return[0>c?c+b:c]
}),even:na(function(a,b){for(var c=0;
b>c;
c+=2){a.push(c)
}return a
}),odd:na(function(a,b){for(var c=1;
b>c;
c+=2){a.push(c)
}return a
}),lt:na(function(a,b,c){for(var d=0>c?c+b:c;
--d>=0;
){a.push(d)
}return a
}),gt:na(function(a,b,c){for(var d=0>c?c+b:c;
++d<b;
){a.push(d)
}return a
})}},d.pseudos.nth=d.pseudos.eq;
for(b in {radio:!0,checkbox:!0,file:!0,password:!0,image:!0}){d.pseudos[b]=la(b)
}for(b in {submit:!0,reset:!0}){d.pseudos[b]=ma(b)
}function pa(){}pa.prototype=d.filters=d.pseudos,d.setFilters=new pa,g=fa.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];
if(k){return b?0:k.slice(0)
}h=a,i=[],j=d.preFilter;
while(h){c&&!(e=R.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=S.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(Q," ")}),h=h.slice(c.length));
for(g in d.filter){!(e=W[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length))
}if(!c){break
}}return b?h.length:h?fa.error(a):z(a,i).slice(0)
};
function qa(a){for(var b=0,c=a.length,d="";
c>b;
b++){d+=a[b].value
}return d
}function ra(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;
return b.first?function(b,c,f){while(b=b[d]){if(1===b.nodeType||e){return a(b,c,f)
}}}:function(b,c,g){var h,i,j,k=[w,f];
if(g){while(b=b[d]){if((1===b.nodeType||e)&&a(b,c,g)){return !0
}}}else{while(b=b[d]){if(1===b.nodeType||e){if(j=b[u]||(b[u]={}),i=j[b.uniqueID]||(j[b.uniqueID]={}),(h=i[d])&&h[0]===w&&h[1]===f){return k[2]=h[2]
}if(i[d]=k,k[2]=a(b,c,g)){return !0
}}}}}
}function sa(a){return a.length>1?function(b,c,d){var e=a.length;
while(e--){if(!a[e](b,c,d)){return !1
}}return !0
}:a[0]
}function ta(a,b,c){for(var d=0,e=b.length;
e>d;
d++){fa(a,b[d],c)
}return c
}function ua(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;
i>h;
h++){(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)))
}return g
}function va(a,b,c,d,e,f){return d&&!d[u]&&(d=va(d)),e&&!e[u]&&(e=va(e,f)),ha(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ta(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ua(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;
if(c&&c(q,r,h,i),d){j=ua(r,n),d(j,[],h,i),k=j.length;
while(k--){(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))
}}if(f){if(e||a){if(e){j=[],k=r.length;
while(k--){(l=r[k])&&j.push(q[k]=l)
}e(null,r=[],j,i)
}k=r.length;
while(k--){(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))
}}}else{r=ua(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)
}})
}function wa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ra(function(a){return a===b
},h,!0),l=ra(function(a){return J(b,a)>-1
},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));
return b=null,e
}];
f>i;
i++){if(c=d.relative[a[i].type]){m=[ra(sa(m),c)]
}else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;
f>e;
e++){if(d.relative[a[e].type]){break
}}return va(i>1&&sa(m),i>1&&qa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(Q,"$1"),c,e>i&&wa(a.slice(i,e)),f>e&&wa(a=a.slice(e)),f>e&&qa(a))
}m.push(c)
}}return sa(m)
}function xa(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||0.1,z=x.length;
for(k&&(j=g===n||g||k);
s!==z&&null!=(l=x[s]);
s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);
while(q=a[o++]){if(q(l,g||n,h)){i.push(l);
break
}}k&&(w=y)
}c&&((l=!q&&l)&&r--,f&&t.push(l))
}if(r+=s,c&&s!==r){o=0;
while(q=b[o++]){q(t,u,g,h)
}if(f){if(r>0){while(s--){t[s]||u[s]||(u[s]=F.call(i))
}}u=ua(u)
}H.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&fa.uniqueSort(i)
}return k&&(w=y,j=v),t
};
return c?ha(f):f
}return h=fa.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];
if(!f){b||(b=g(a)),c=b.length;
while(c--){f=wa(b[c]),f[u]?d.push(f):e.push(f)
}f=A(a,xa(e,d)),f.selector=a
}return f
},i=fa.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);
if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ba,ca),b)||[])[0],!b){return e
}n&&(b=b.parentNode),a=a.slice(j.shift().value.length)
}i=W.needsContext.test(a)?0:j.length;
while(i--){if(k=j[i],d.relative[l=k.type]){break
}if((m=d.find[l])&&(f=m(k.matches[0].replace(ba,ca),_.test(j[0].type)&&oa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qa(j),!a){return H.apply(e,f),e
}break
}}}return(n||h(a,o))(f,b,!p,e,!b||_.test(a)&&oa(b.parentNode)||b),e
},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ia(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))
}),ia(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")
})||ja("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)
}),c.attributes&&ia(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")
})||ja("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue
}),ia(function(a){return null==a.getAttribute("disabled")
})||ja(K,function(a,b,c){var d;
return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null
}),fa
}(a);
n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.uniqueSort=n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;
var u=function(a,b,c){var d=[],e=void 0!==c;
while((a=a[b])&&9!==a.nodeType){if(1===a.nodeType){if(e&&n(a).is(c)){break
}d.push(a)
}}return d
},v=function(a,b){for(var c=[];
a;
a=a.nextSibling){1===a.nodeType&&a!==b&&c.push(a)
}return c
},w=n.expr.match.needsContext,x=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,y=/^.[^:#\[\.,]*$/;
function z(a,b,c){if(n.isFunction(b)){return n.grep(a,function(a,d){return !!b.call(a,d,a)!==c
})
}if(b.nodeType){return n.grep(a,function(a){return a===b!==c
})
}if("string"==typeof b){if(y.test(b)){return n.filter(b,a,c)
}b=n.filter(b,a)
}return n.grep(a,function(a){return h.call(b,a)>-1!==c
})
}n.filter=function(a,b,c){var d=b[0];
return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType
}))
},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;
if("string"!=typeof a){return this.pushStack(n(a).filter(function(){for(b=0;
c>b;
b++){if(n.contains(e[b],this)){return !0
}}}))
}for(b=0;
c>b;
b++){n.find(a,e[b],d)
}return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d
},filter:function(a){return this.pushStack(z(this,a||[],!1))
},not:function(a){return this.pushStack(z(this,a||[],!0))
},is:function(a){return !!z(this,"string"==typeof a&&w.test(a)?n(a):a||[],!1).length
}});
var A,B=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=n.fn.init=function(a,b,c){var e,f;
if(!a){return this
}if(c=c||A,"string"==typeof a){if(e="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:B.exec(a),!e||!e[1]&&b){return !b||b.jquery?(b||c).find(a):this.constructor(b).find(a)
}if(e[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),x.test(e[1])&&n.isPlainObject(b)){for(e in b){n.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e])
}}return this
}return f=d.getElementById(e[2]),f&&f.parentNode&&(this.length=1,this[0]=f),this.context=d,this.selector=a,this
}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?void 0!==c.ready?c.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))
};
C.prototype=n.fn,A=n(d);
var D=/^(?:parents|prev(?:Until|All))/,E={children:!0,contents:!0,next:!0,prev:!0};
n.fn.extend({has:function(a){var b=n(a,this),c=b.length;
return this.filter(function(){for(var a=0;
c>a;
a++){if(n.contains(this,b[a])){return !0
}}})
},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=w.test(a)||"string"!=typeof a?n(a,b||this.context):0;
e>d;
d++){for(c=this[d];
c&&c!==b;
c=c.parentNode){if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);
break
}}}return this.pushStack(f.length>1?n.uniqueSort(f):f)
},index:function(a){return a?"string"==typeof a?h.call(n(a),this[0]):h.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1
},add:function(a,b){return this.pushStack(n.uniqueSort(n.merge(this.get(),n(a,b))))
},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))
}});
function F(a,b){while((a=a[b])&&1!==a.nodeType){}return a
}n.each({parent:function(a){var b=a.parentNode;
return b&&11!==b.nodeType?b:null
},parents:function(a){return u(a,"parentNode")
},parentsUntil:function(a,b,c){return u(a,"parentNode",c)
},next:function(a){return F(a,"nextSibling")
},prev:function(a){return F(a,"previousSibling")
},nextAll:function(a){return u(a,"nextSibling")
},prevAll:function(a){return u(a,"previousSibling")
},nextUntil:function(a,b,c){return u(a,"nextSibling",c)
},prevUntil:function(a,b,c){return u(a,"previousSibling",c)
},siblings:function(a){return v((a.parentNode||{}).firstChild,a)
},children:function(a){return v(a.firstChild)
},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)
}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);
return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(E[a]||n.uniqueSort(e),D.test(a)&&e.reverse()),this.pushStack(e)
}
});
var G=/\S+/g;
function H(a){var b={};
return n.each(a.match(G)||[],function(a,c){b[c]=!0
}),b
}n.Callbacks=function(a){a="string"==typeof a?H(a):n.extend({},a);
var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=a.once,d=b=!0;
g.length;
h=-1){c=g.shift();
while(++h<f.length){f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)
}}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")
},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){n.each(b,function(b,c){n.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==n.type(c)&&d(c)
})
}(arguments),c&&!b&&i()),this
},remove:function(){return n.each(arguments,function(a,b){var c;
while((c=n.inArray(b,f,c))>-1){f.splice(c,1),h>=c&&h--
}}),this
},has:function(a){return a?n.inArray(a,f)>-1:f.length>0
},empty:function(){return f&&(f=[]),this
},disable:function(){return e=g=[],f=c="",this
},disabled:function(){return !f
},lock:function(){return e=g=[],c||(f=c=""),this
},locked:function(){return !!e
},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this
},fire:function(){return j.fireWith(this,arguments),this
},fired:function(){return !!d
}};
return j
},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c
},always:function(){return e.done(arguments).fail(arguments),this
},then:function(){var a=arguments;
return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];
e[f[1]](function(){var a=g&&g.apply(this,arguments);
a&&n.isFunction(a.promise)?a.promise().progress(c.notify).done(c.resolve).fail(c.reject):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)
})
}),a=null
}).promise()
},promise:function(a){return null!=a?n.extend(a,d):d
}},e={};
return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];
d[f[1]]=g.add,h&&g.add(function(){c=h
},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this
},e[f[0]+"With"]=g.fireWith
}),d.promise(e),a&&a.call(e,e),e
},when:function(a){var b=0,c=e.call(arguments),d=c.length,f=1!==d||a&&n.isFunction(a.promise)?d:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(d){b[a]=this,c[a]=arguments.length>1?e.call(arguments):d,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)
}
},i,j,k;
if(d>1){for(i=new Array(d),j=new Array(d),k=new Array(d);
d>b;
b++){c[b]&&n.isFunction(c[b].promise)?c[b].promise().progress(h(b,j,i)).done(h(b,k,c)).fail(g.reject):--f
}}return f||g.resolveWith(k,c),g.promise()
}});
var I;
n.fn.ready=function(a){return n.ready.promise().done(a),this
},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)
},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(I.resolveWith(d,[n]),n.fn.triggerHandler&&(n(d).triggerHandler("ready"),n(d).off("ready"))))
}});
function J(){d.removeEventListener("DOMContentLoaded",J),a.removeEventListener("load",J),n.ready()
}n.ready.promise=function(b){return I||(I=n.Deferred(),"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll?a.setTimeout(n.ready):(d.addEventListener("DOMContentLoaded",J),a.addEventListener("load",J))),I.promise(b)
},n.ready.promise();
var K=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;
if("object"===n.type(c)){e=!0;
for(h in c){K(a,b,h,c[h],!0,f,g)
}}else{if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)
})),b)){for(;
i>h;
h++){b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)))
}}}return e?a:j?b.call(a):i?b(a[0],c):f
},L=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType
};
function M(){this.expando=n.expando+M.uid++
}M.uid=1,M.prototype={register:function(a,b){var c=b||{};
return a.nodeType?a[this.expando]=c:Object.defineProperty(a,this.expando,{value:c,writable:!0,configurable:!0}),a[this.expando]
},cache:function(a){if(!L(a)){return{}
}var b=a[this.expando];
return b||(b={},L(a)&&(a.nodeType?a[this.expando]=b:Object.defineProperty(a,this.expando,{value:b,configurable:!0}))),b
},set:function(a,b,c){var d,e=this.cache(a);
if("string"==typeof b){e[b]=c
}else{for(d in b){e[d]=b[d]
}}return e
},get:function(a,b){return void 0===b?this.cache(a):a[this.expando]&&a[this.expando][b]
},access:function(a,b,c){var d;
return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)
},remove:function(a,b){var c,d,e,f=a[this.expando];
if(void 0!==f){if(void 0===b){this.register(a)
}else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in f?d=[b,e]:(d=e,d=d in f?[d]:d.match(G)||[])),c=d.length;
while(c--){delete f[d[c]]
}}(void 0===b||n.isEmptyObject(f))&&(a.nodeType?a[this.expando]=void 0:delete a[this.expando])
}},hasData:function(a){var b=a[this.expando];
return void 0!==b&&!n.isEmptyObject(b)
}};
var N=new M,O=new M,P=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Q=/[A-Z]/g;
function R(a,b,c){var d;
if(void 0===c&&1===a.nodeType){if(d="data-"+b.replace(Q,"-$&").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:P.test(c)?n.parseJSON(c):c
}catch(e){}O.set(a,b,c)
}else{c=void 0
}}return c
}n.extend({hasData:function(a){return O.hasData(a)||N.hasData(a)
},data:function(a,b,c){return O.access(a,b,c)
},removeData:function(a,b){O.remove(a,b)
},_data:function(a,b,c){return N.access(a,b,c)
},_removeData:function(a,b){N.remove(a,b)
}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;
if(void 0===a){if(this.length&&(e=O.get(f),1===f.nodeType&&!N.get(f,"hasDataAttrs"))){c=g.length;
while(c--){g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),R(f,d,e[d])))
}N.set(f,"hasDataAttrs",!0)
}return e
}return"object"==typeof a?this.each(function(){O.set(this,a)
}):K(this,function(b){var c,d;
if(f&&void 0===b){if(c=O.get(f,a)||O.get(f,a.replace(Q,"-$&").toLowerCase()),void 0!==c){return c
}if(d=n.camelCase(a),c=O.get(f,d),void 0!==c){return c
}if(c=R(f,d,void 0),void 0!==c){return c
}}else{d=n.camelCase(a),this.each(function(){var c=O.get(this,d);
O.set(this,d,b),a.indexOf("-")>-1&&void 0!==c&&O.set(this,a,b)
})
}},null,b,arguments.length>1,null,!0)
},removeData:function(a){return this.each(function(){O.remove(this,a)
})
}}),n.extend({queue:function(a,b,c){var d;
return a?(b=(b||"fx")+"queue",d=N.get(a,b),c&&(!d||n.isArray(c)?d=N.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0
},dequeue:function(a,b){b=b||"fx";
var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)
};
"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()
},_queueHooks:function(a,b){var c=b+"queueHooks";
return N.get(a,c)||N.access(a,c,{empty:n.Callbacks("once memory").add(function(){N.remove(a,[b+"queue",c])
})})
}}),n.fn.extend({queue:function(a,b){var c=2;
return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);
n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)
})
},dequeue:function(a){return this.each(function(){n.dequeue(this,a)
})
},clearQueue:function(a){return this.queue(a||"fx",[])
},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])
};
"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";
while(g--){c=N.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h))
}return h(),e.promise(b)
}});
var S=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=new RegExp("^(?:([+-])=|)("+S+")([a-z%]*)$","i"),U=["Top","Right","Bottom","Left"],V=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)
};
function W(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()
}:function(){return n.css(a,b,"")
},i=h(),j=c&&c[3]||(n.cssNumber[b]?"":"px"),k=(n.cssNumber[b]||"px"!==j&&+i)&&T.exec(n.css(a,b));
if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;
do{f=f||".5",k/=f,n.style(a,b,k+j)
}while(f!==(f=h()/i)&&1!==f&&--g)
}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e
}var X=/^(?:checkbox|radio)$/i,Y=/<([\w:-]+)/,Z=/^$|\/(?:java|ecma)script/i,$={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};
$.optgroup=$.option,$.tbody=$.tfoot=$.colgroup=$.caption=$.thead,$.th=$.td;
function _(a,b){var c="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):[];
return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c
}function aa(a,b){for(var c=0,d=a.length;
d>c;
c++){N.set(a[c],"globalEval",!b||N.get(b[c],"globalEval"))
}}var ba=/<|&#?\w+;/;
function ca(a,b,c,d,e){for(var f,g,h,i,j,k,l=b.createDocumentFragment(),m=[],o=0,p=a.length;
p>o;
o++){if(f=a[o],f||0===f){if("object"===n.type(f)){n.merge(m,f.nodeType?[f]:f)
}else{if(ba.test(f)){g=g||l.appendChild(b.createElement("div")),h=(Y.exec(f)||["",""])[1].toLowerCase(),i=$[h]||$._default,g.innerHTML=i[1]+n.htmlPrefilter(f)+i[2],k=i[0];
while(k--){g=g.lastChild
}n.merge(m,g.childNodes),g=l.firstChild,g.textContent=""
}else{m.push(b.createTextNode(f))
}}}}l.textContent="",o=0;
while(f=m[o++]){if(d&&n.inArray(f,d)>-1){e&&e.push(f)
}else{if(j=n.contains(f.ownerDocument,f),g=_(l.appendChild(f),"script"),j&&aa(g),c){k=0;
while(f=g[k++]){Z.test(f.type||"")&&c.push(f)
}}}}return l
}!function(){var a=d.createDocumentFragment(),b=a.appendChild(d.createElement("div")),c=d.createElement("input");
c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),l.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",l.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue
}();
var da=/^key/,ea=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,fa=/^([^.]*)(?:\.(.+)|)/;
function ga(){return !0
}function ha(){return !1
}function ia(){try{return d.activeElement
}catch(a){}}function ja(a,b,c,d,e,f){var g,h;
if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);
for(h in b){ja(a,h,c,d,b[h],f)
}return a
}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1){e=ha
}else{if(!e){return a
}}return 1===f&&(g=e,e=function(a){return n().off(a),g.apply(this,arguments)
},e.guid=g.guid||(g.guid=n.guid++)),a.each(function(){n.event.add(this,b,e,d,c)
})
}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=N.get(a);
if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return"undefined"!=typeof n&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0
}),b=(b||"").match(G)||[""],j=b.length;
while(j--){h=fa.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)
}}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=N.hasData(a)&&N.get(a);
if(r&&(i=r.events)){b=(b||"").match(G)||[""],j=b.length;
while(j--){if(h=fa.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;
while(f--){k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k))
}g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])
}else{for(o in i){n.event.remove(a,o+b[j],c,d,!0)
}}}n.isEmptyObject(i)&&N.remove(a,"handle events")
}},dispatch:function(a){a=n.event.fix(a);
var b,c,d,f,g,h=[],i=e.call(arguments),j=(N.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};
if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;
while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;
while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped()){a.rnamespace&&!a.rnamespace.test(g.namespace)||(a.handleObj=g,a.data=g.data,d=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==d&&(a.result=d)===!1&&(a.preventDefault(),a.stopPropagation()))
}}return k.postDispatch&&k.postDispatch.call(this,a),a.result
}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;
if(h&&i.nodeType&&("click"!==a.type||isNaN(a.button)||a.button<1)){for(;
i!==this;
i=i.parentNode||this){if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(d=[],c=0;
h>c;
c++){f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>-1:n.find(e,this,null,[i]).length),d[e]&&d.push(f)
}d.length&&g.push({elem:i,handlers:d})
}}}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g
},props:"altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a
}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,e,f,g=b.button;
return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||d,e=c.documentElement,f=c.body,a.pageX=b.clientX+(e&&e.scrollLeft||f&&f.scrollLeft||0)-(e&&e.clientLeft||f&&f.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||f&&f.scrollTop||0)-(e&&e.clientTop||f&&f.clientTop||0)),a.which||void 0===g||(a.which=1&g?1:2&g?3:4&g?2:0),a
}},fix:function(a){if(a[n.expando]){return a
}var b,c,e,f=a.type,g=a,h=this.fixHooks[f];
h||(this.fixHooks[f]=h=ea.test(f)?this.mouseHooks:da.test(f)?this.keyHooks:{}),e=h.props?this.props.concat(h.props):this.props,a=new n.Event(g),b=e.length;
while(b--){c=e[b],a[c]=g[c]
}return a.target||(a.target=d),3===a.target.nodeType&&(a.target=a.target.parentNode),h.filter?h.filter(a,g):a
},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==ia()&&this.focus?(this.focus(),!1):void 0
},delegateType:"focusin"},blur:{trigger:function(){return this===ia()&&this.blur?(this.blur(),!1):void 0
},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0
},_default:function(a){return n.nodeName(a.target,"a")
}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)
}}}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)
},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?ga:ha):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void (this[n.expando]=!0)):new n.Event(a,b)
},n.Event.prototype={constructor:n.Event,isDefaultPrevented:ha,isPropagationStopped:ha,isImmediatePropagationStopped:ha,isSimulated:!1,preventDefault:function(){var a=this.originalEvent;
this.isDefaultPrevented=ga,a&&!this.isSimulated&&a.preventDefault()
},stopPropagation:function(){var a=this.originalEvent;
this.isPropagationStopped=ga,a&&!this.isSimulated&&a.stopPropagation()
},stopImmediatePropagation:function(){var a=this.originalEvent;
this.isImmediatePropagationStopped=ga,a&&!this.isSimulated&&a.stopImmediatePropagation(),this.stopPropagation()
}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;
return e&&(e===d||n.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c
}}
}),n.fn.extend({on:function(a,b,c,d){return ja(this,a,b,c,d)
},one:function(a,b,c,d){return ja(this,a,b,c,d,1)
},off:function(a,b,c){var d,e;
if(a&&a.preventDefault&&a.handleObj){return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this
}if("object"==typeof a){for(e in a){this.off(e,b,a[e])
}return this
}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=ha),this.each(function(){n.event.remove(this,a,c,b)
})
}});
var ka=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,la=/<script|<style|<link/i,ma=/checked\s*(?:[^=]|=\s*.checked.)/i,na=/^true\/(.*)/,oa=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
function pa(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a
}function qa(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a
}function ra(a){var b=na.exec(a.type);
return b?a.type=b[1]:a.removeAttribute("type"),a
}function sa(a,b){var c,d,e,f,g,h,i,j;
if(1===b.nodeType){if(N.hasData(a)&&(f=N.access(a),g=N.set(b,f),j=f.events)){delete g.handle,g.events={};
for(e in j){for(c=0,d=j[e].length;
d>c;
c++){n.event.add(b,e,j[e][c])
}}}O.hasData(a)&&(h=O.access(a),i=n.extend({},h),O.set(b,i))
}}function ta(a,b){var c=b.nodeName.toLowerCase();
"input"===c&&X.test(a.type)?b.checked=a.checked:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)
}function ua(a,b,c,d){b=f.apply([],b);
var e,g,h,i,j,k,m=0,o=a.length,p=o-1,q=b[0],r=n.isFunction(q);
if(r||o>1&&"string"==typeof q&&!l.checkClone&&ma.test(q)){return a.each(function(e){var f=a.eq(e);
r&&(b[0]=q.call(this,e,f.html())),ua(f,b,c,d)
})
}if(o&&(e=ca(b,a[0].ownerDocument,!1,a,d),g=e.firstChild,1===e.childNodes.length&&(e=g),g||d)){for(h=n.map(_(e,"script"),qa),i=h.length;
o>m;
m++){j=e,m!==p&&(j=n.clone(j,!0,!0),i&&n.merge(h,_(j,"script"))),c.call(a[m],j,m)
}if(i){for(k=h[h.length-1].ownerDocument,n.map(h,ra),m=0;
i>m;
m++){j=h[m],Z.test(j.type||"")&&!N.access(j,"globalEval")&&n.contains(k,j)&&(j.src?n._evalUrl&&n._evalUrl(j.src):n.globalEval(j.textContent.replace(oa,"")))
}}}return a
}function va(a,b,c){for(var d,e=b?n.filter(b,a):a,f=0;
null!=(d=e[f]);
f++){c||1!==d.nodeType||n.cleanData(_(d)),d.parentNode&&(c&&n.contains(d.ownerDocument,d)&&aa(_(d,"script")),d.parentNode.removeChild(d))
}return a
}n.extend({htmlPrefilter:function(a){return a.replace(ka,"<$1></$2>")
},clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);
if(!(l.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a))){for(g=_(h),f=_(a),d=0,e=f.length;
e>d;
d++){ta(f[d],g[d])
}}if(b){if(c){for(f=f||_(a),g=g||_(h),d=0,e=f.length;
e>d;
d++){sa(f[d],g[d])
}}else{sa(a,h)
}}return g=_(h,"script"),g.length>0&&aa(g,!i&&_(a,"script")),h
},cleanData:function(a){for(var b,c,d,e=n.event.special,f=0;
void 0!==(c=a[f]);
f++){if(L(c)){if(b=c[N.expando]){if(b.events){for(d in b.events){e[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle)
}}c[N.expando]=void 0
}c[O.expando]&&(c[O.expando]=void 0)
}}}}),n.fn.extend({domManip:ua,detach:function(a){return va(this,a,!0)
},remove:function(a){return va(this,a)
},text:function(a){return K(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=a)
})
},null,a,arguments.length)
},append:function(){return ua(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=pa(this,a);
b.appendChild(a)
}})
},prepend:function(){return ua(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=pa(this,a);
b.insertBefore(a,b.firstChild)
}})
},before:function(){return ua(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)
})
},after:function(){return ua(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)
})
},empty:function(){for(var a,b=0;
null!=(a=this[b]);
b++){1===a.nodeType&&(n.cleanData(_(a,!1)),a.textContent="")
}return this
},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)
})
},html:function(a){return K(this,function(a){var b=this[0]||{},c=0,d=this.length;
if(void 0===a&&1===b.nodeType){return b.innerHTML
}if("string"==typeof a&&!la.test(a)&&!$[(Y.exec(a)||["",""])[1].toLowerCase()]){a=n.htmlPrefilter(a);
try{for(;
d>c;
c++){b=this[c]||{},1===b.nodeType&&(n.cleanData(_(b,!1)),b.innerHTML=a)
}b=0
}catch(e){}}b&&this.empty().append(a)
},null,a,arguments.length)
},replaceWith:function(){var a=[];
return ua(this,arguments,function(b){var c=this.parentNode;
n.inArray(this,a)<0&&(n.cleanData(_(this)),c&&c.replaceChild(b,this))
},a)
}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),f=e.length-1,h=0;
f>=h;
h++){c=h===f?this:this.clone(!0),n(e[h])[b](c),g.apply(d,c.get())
}return this.pushStack(d)
}
});
var wa,xa={HTML:"block",BODY:"block"};
function ya(a,b){var c=n(b.createElement(a)).appendTo(b.body),d=n.css(c[0],"display");
return c.detach(),d
}function za(a){var b=d,c=xa[a];
return c||(c=ya(a,b),"none"!==c&&c||(wa=(wa||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=wa[0].contentDocument,b.write(),b.close(),c=ya(a,b),wa.detach()),xa[a]=c),c
}var Aa=/^margin/,Ba=new RegExp("^("+S+")(?!px)[a-z%]+$","i"),Ca=function(b){var c=b.ownerDocument.defaultView;
return c&&c.opener||(c=a),c.getComputedStyle(b)
},Da=function(a,b,c,d){var e,f,g={};
for(f in b){g[f]=a.style[f],a.style[f]=b[f]
}e=c.apply(a,d||[]);
for(f in b){a.style[f]=g[f]
}return e
},Ea=d.documentElement;
!function(){var b,c,e,f,g=d.createElement("div"),h=d.createElement("div");
if(h.style){h.style.backgroundClip="content-box",h.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===h.style.backgroundClip,g.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",g.appendChild(h);
function i(){h.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",h.innerHTML="",Ea.appendChild(g);
var d=a.getComputedStyle(h);
b="1%"!==d.top,f="2px"===d.marginLeft,c="4px"===d.width,h.style.marginRight="50%",e="4px"===d.marginRight,Ea.removeChild(g)
}n.extend(l,{pixelPosition:function(){return i(),b
},boxSizingReliable:function(){return null==c&&i(),c
},pixelMarginRight:function(){return null==c&&i(),e
},reliableMarginLeft:function(){return null==c&&i(),f
},reliableMarginRight:function(){var b,c=h.appendChild(d.createElement("div"));
return c.style.cssText=h.style.cssText="-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",h.style.width="1px",Ea.appendChild(g),b=!parseFloat(a.getComputedStyle(c).marginRight),Ea.removeChild(g),h.removeChild(c),b
}})
}}();
function Fa(a,b,c){var d,e,f,g,h=a.style;
return c=c||Ca(a),g=c?c.getPropertyValue(b)||c[b]:void 0,""!==g&&void 0!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),c&&!l.pixelMarginRight()&&Ba.test(g)&&Aa.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f),void 0!==g?g+"":g
}function Ga(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)
}}
}var Ha=/^(none|table(?!-c[ea]).+)/,Ia={position:"absolute",visibility:"hidden",display:"block"},Ja={letterSpacing:"0",fontWeight:"400"},Ka=["Webkit","O","Moz","ms"],La=d.createElement("div").style;
function Ma(a){if(a in La){return a
}var b=a[0].toUpperCase()+a.slice(1),c=Ka.length;
while(c--){if(a=Ka[c]+b,a in La){return a
}}}function Na(a,b,c){var d=T.exec(b);
return d?Math.max(0,d[2]-(c||0))+(d[3]||"px"):b
}function Oa(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;
4>f;
f+=2){"margin"===c&&(g+=n.css(a,c+U[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+U[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+U[f]+"Width",!0,e))):(g+=n.css(a,"padding"+U[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+U[f]+"Width",!0,e)))
}return g
}function Pa(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Ca(a),g="border-box"===n.css(a,"boxSizing",!1,f);
if(0>=e||null==e){if(e=Fa(a,b,f),(0>e||null==e)&&(e=a.style[b]),Ba.test(e)){return e
}d=g&&(l.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0
}return e+Oa(a,b,c||(g?"border":"content"),d,f)+"px"
}function Qa(a,b){for(var c,d,e,f=[],g=0,h=a.length;
h>g;
g++){d=a[g],d.style&&(f[g]=N.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&V(d)&&(f[g]=N.access(d,"olddisplay",za(d.nodeName)))):(e=V(d),"none"===c&&e||N.set(d,"olddisplay",e?c:n.css(d,"display"))))
}for(g=0;
h>g;
g++){d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"))
}return a
}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Fa(a,"opacity");
return""===c?"1":c
}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;
return b=n.cssProps[h]||(n.cssProps[h]=Ma(h)||h),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get" in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=T.exec(c))&&e[1]&&(c=W(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(n.cssNumber[h]?"":"px")),l.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set" in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)
}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);
return b=n.cssProps[h]||(n.cssProps[h]=Ma(h)||h),g=n.cssHooks[b]||n.cssHooks[h],g&&"get" in g&&(e=g.get(a,!0,c)),void 0===e&&(e=Fa(a,b,d)),"normal"===e&&b in Ja&&(e=Ja[b]),""===c||c?(f=parseFloat(e),c===!0||isFinite(f)?f||0:e):e
}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?Ha.test(n.css(a,"display"))&&0===a.offsetWidth?Da(a,Ia,function(){return Pa(a,b,d)
}):Pa(a,b,d):void 0
},set:function(a,c,d){var e,f=d&&Ca(a),g=d&&Oa(a,b,d,"border-box"===n.css(a,"boxSizing",!1,f),f);
return g&&(e=T.exec(c))&&"px"!==(e[3]||"px")&&(a.style[b]=c,c=n.css(a,b)),Na(a,c,g)
}}
}),n.cssHooks.marginLeft=Ga(l.reliableMarginLeft,function(a,b){return b?(parseFloat(Fa(a,"marginLeft"))||a.getBoundingClientRect().left-Da(a,{marginLeft:0},function(){return a.getBoundingClientRect().left
}))+"px":void 0
}),n.cssHooks.marginRight=Ga(l.reliableMarginRight,function(a,b){return b?Da(a,{display:"inline-block"},Fa,[a,"marginRight"]):void 0
}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];
4>d;
d++){e[a+U[d]+b]=f[d]||f[d-2]||f[0]
}return e
}},Aa.test(a)||(n.cssHooks[a+b].set=Na)
}),n.fn.extend({css:function(a,b){return K(this,function(a,b,c){var d,e,f={},g=0;
if(n.isArray(b)){for(d=Ca(a),e=b.length;
e>g;
g++){f[b[g]]=n.css(a,b[g],!1,d)
}return f
}return void 0!==c?n.style(a,b,c):n.css(a,b)
},a,b,arguments.length>1)
},show:function(){return Qa(this,!0)
},hide:function(){return Qa(this)
},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){V(this)?n(this).show():n(this).hide()
})
}});
function Ra(a,b,c,d,e){return new Ra.prototype.init(a,b,c,d,e)
}n.Tween=Ra,Ra.prototype={constructor:Ra,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||n.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")
},cur:function(){var a=Ra.propHooks[this.prop];
return a&&a.get?a.get(this):Ra.propHooks._default.get(this)
},run:function(a){var b,c=Ra.propHooks[this.prop];
return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Ra.propHooks._default.set(this),this
}},Ra.prototype.init.prototype=Ra.prototype,Ra.propHooks={_default:{get:function(a){var b;
return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)
},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[n.cssProps[a.prop]]&&!n.cssHooks[a.prop]?a.elem[a.prop]=a.now:n.style(a.elem,a.prop,a.now+a.unit)
}}},Ra.propHooks.scrollTop=Ra.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)
}},n.easing={linear:function(a){return a
},swing:function(a){return 0.5-Math.cos(a*Math.PI)/2
},_default:"swing"},n.fx=Ra.prototype.init,n.fx.step={};
var Sa,Ta,Ua=/^(?:toggle|show|hide)$/,Va=/queueHooks$/;
function Wa(){return a.setTimeout(function(){Sa=void 0
}),Sa=n.now()
}function Xa(a,b){var c,d=0,e={height:a};
for(b=b?1:0;
4>d;
d+=2-b){c=U[d],e["margin"+c]=e["padding"+c]=a
}return b&&(e.opacity=e.width=a),e
}function Ya(a,b,c){for(var d,e=(_a.tweeners[b]||[]).concat(_a.tweeners["*"]),f=0,g=e.length;
g>f;
f++){if(d=e[f].call(c,b,a)){return d
}}}function Za(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&V(a),q=N.get(a,"fxshow");
c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()
}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()
})
})),1===a.nodeType&&("height" in b||"width" in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?N.get(a,"olddisplay")||za(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]
}));
for(d in b){if(e=b[d],Ua.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d]){continue
}p=!0
}m[d]=q&&q[d]||n.style(a,d)
}else{j=void 0
}}if(n.isEmptyObject(m)){"inline"===("none"===j?za(a.nodeName):j)&&(o.display=j)
}else{q?"hidden" in q&&(p=q.hidden):q=N.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()
}),l.done(function(){var b;
N.remove(a,"fxshow");
for(b in m){n.style(a,b,m[b])
}});
for(d in m){g=Ya(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))
}}}function $a(a,b){var c,d,e,f,g;
for(c in a){if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand" in g){f=g.expand(f),delete a[d];
for(c in f){c in a||(a[c]=f[c],b[c]=e)
}}else{b[d]=e
}}}function _a(a,b,c){var d,e,f=0,g=_a.prefilters.length,h=n.Deferred().always(function(){delete i.elem
}),i=function(){if(e){return !1
}for(var b=Sa||Wa(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;
i>g;
g++){j.tweens[g].run(f)
}return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)
},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{},easing:n.easing._default},c),originalProperties:b,originalOptions:c,startTime:Sa||Wa(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);
return j.tweens.push(d),d
},stop:function(b){var c=0,d=b?j.tweens.length:0;
if(e){return this
}for(e=!0;
d>c;
c++){j.tweens[c].run(1)
}return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this
}}),k=j.props;
for($a(k,j.opts.specialEasing);
g>f;
f++){if(d=_a.prefilters[f].call(j,a,k,j.opts)){return n.isFunction(d.stop)&&(n._queueHooks(j.elem,j.opts.queue).stop=n.proxy(d.stop,d)),d
}}return n.map(k,Ya,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)
}n.Animation=n.extend(_a,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);
return W(c.elem,a,T.exec(b),c),c
}]},tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.match(G);
for(var c,d=0,e=a.length;
e>d;
d++){c=a[d],_a.tweeners[c]=_a.tweeners[c]||[],_a.tweeners[c].unshift(b)
}},prefilters:[Za],prefilter:function(a,b){b?_a.prefilters.unshift(a):_a.prefilters.push(a)
}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};
return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,null!=d.queue&&d.queue!==!0||(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)
},d
},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(V).css("opacity",0).show().end().animate({opacity:b},a,c,d)
},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=_a(this,n.extend({},a),f);
(e||N.get(this,"finish"))&&b.stop(!0)
};
return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)
},stop:function(a,b,c){var d=function(a){var b=a.stop;
delete a.stop,b(c)
};
return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=N.get(this);
if(e){g[e]&&g[e].stop&&d(g[e])
}else{for(e in g){g[e]&&g[e].stop&&Va.test(e)&&d(g[e])
}}for(e=f.length;
e--;
){f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1))
}!b&&c||n.dequeue(this,a)
})
},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=N.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;
for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;
b--;
){f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1))
}for(b=0;
g>b;
b++){d[b]&&d[b].finish&&d[b].finish.call(this)
}delete c.finish
})
}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];
n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Xa(b,!0),a,d,e)
}
}),n.each({slideDown:Xa("show"),slideUp:Xa("hide"),slideToggle:Xa("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)
}
}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;
for(Sa=n.now();
b<c.length;
b++){a=c[b],a()||c[b]!==a||c.splice(b--,1)
}c.length||n.fx.stop(),Sa=void 0
},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()
},n.fx.interval=13,n.fx.start=function(){Ta||(Ta=a.setInterval(n.fx.tick,n.fx.interval))
},n.fx.stop=function(){a.clearInterval(Ta),Ta=null
},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(b,c){return b=n.fx?n.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);
d.stop=function(){a.clearTimeout(e)
}
})
},function(){var a=d.createElement("input"),b=d.createElement("select"),c=b.appendChild(d.createElement("option"));
a.type="checkbox",l.checkOn=""!==a.value,l.optSelected=c.selected,b.disabled=!0,l.optDisabled=!c.disabled,a=d.createElement("input"),a.value="t",a.type="radio",l.radioValue="t"===a.value
}();
var ab,bb=n.expr.attrHandle;
n.fn.extend({attr:function(a,b){return K(this,n.attr,a,b,arguments.length>1)
},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)
})
}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;
if(3!==f&&8!==f&&2!==f){return"undefined"==typeof a.getAttribute?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),e=n.attrHooks[b]||(n.expr.match.bool.test(b)?ab:void 0)),void 0!==c?null===c?void n.removeAttr(a,b):e&&"set" in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get" in e&&null!==(d=e.get(a,b))?d:(d=n.find.attr(a,b),null==d?void 0:d))
}},attrHooks:{type:{set:function(a,b){if(!l.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;
return a.setAttribute("type",b),c&&(a.value=c),b
}}}},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(G);
if(f&&1===a.nodeType){while(c=f[e++]){d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)
}}}}),ab={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c
}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=bb[b]||n.find.attr;
bb[b]=function(a,b,d){var e,f;
return d||(f=bb[b],bb[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,bb[b]=f),e
}
});
var cb=/^(?:input|select|textarea|button)$/i,db=/^(?:a|area)$/i;
n.fn.extend({prop:function(a,b){return K(this,n.prop,a,b,arguments.length>1)
},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]
})
}}),n.extend({prop:function(a,b,c){var d,e,f=a.nodeType;
if(3!==f&&8!==f&&2!==f){return 1===f&&n.isXMLDoc(a)||(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set" in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get" in e&&null!==(d=e.get(a,b))?d:a[b]
}},propHooks:{tabIndex:{get:function(a){var b=n.find.attr(a,"tabindex");
return b?parseInt(b,10):cb.test(a.nodeName)||db.test(a.nodeName)&&a.href?0:-1
}}},propFix:{"for":"htmlFor","class":"className"}}),l.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;
return b&&b.parentNode&&b.parentNode.selectedIndex,null
},set:function(a){var b=a.parentNode;
b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)
}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this
});
var eb=/[\t\r\n\f]/g;
function fb(a){return a.getAttribute&&a.getAttribute("class")||""
}n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;
if(n.isFunction(a)){return this.each(function(b){n(this).addClass(a.call(this,b,fb(this)))
})
}if("string"==typeof a&&a){b=a.match(G)||[];
while(c=this[i++]){if(e=fb(c),d=1===c.nodeType&&(" "+e+" ").replace(eb," ")){g=0;
while(f=b[g++]){d.indexOf(" "+f+" ")<0&&(d+=f+" ")
}h=n.trim(d),e!==h&&c.setAttribute("class",h)
}}}return this
},removeClass:function(a){var b,c,d,e,f,g,h,i=0;
if(n.isFunction(a)){return this.each(function(b){n(this).removeClass(a.call(this,b,fb(this)))
})
}if(!arguments.length){return this.attr("class","")
}if("string"==typeof a&&a){b=a.match(G)||[];
while(c=this[i++]){if(e=fb(c),d=1===c.nodeType&&(" "+e+" ").replace(eb," ")){g=0;
while(f=b[g++]){while(d.indexOf(" "+f+" ")>-1){d=d.replace(" "+f+" "," ")
}}h=n.trim(d),e!==h&&c.setAttribute("class",h)
}}}return this
},toggleClass:function(a,b){var c=typeof a;
return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):n.isFunction(a)?this.each(function(c){n(this).toggleClass(a.call(this,c,fb(this),b),b)
}):this.each(function(){var b,d,e,f;
if("string"===c){d=0,e=n(this),f=a.match(G)||[];
while(b=f[d++]){e.hasClass(b)?e.removeClass(b):e.addClass(b)
}}else{void 0!==a&&"boolean"!==c||(b=fb(this),b&&N.set(this,"__className__",b),this.setAttribute&&this.setAttribute("class",b||a===!1?"":N.get(this,"__className__")||""))
}})
},hasClass:function(a){var b,c,d=0;
b=" "+a+" ";
while(c=this[d++]){if(1===c.nodeType&&(" "+fb(c)+" ").replace(eb," ").indexOf(b)>-1){return !0
}}return !1
}});
var gb=/\r/g,hb=/[\x20\t\r\n\f]+/g;
n.fn.extend({val:function(a){var b,c,d,e=this[0];
if(arguments.length){return d=n.isFunction(a),this.each(function(c){var e;
1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""
})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set" in b&&void 0!==b.set(this,e,"value")||(this.value=e))
})
}if(e){return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get" in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(gb,""):null==c?"":c)
}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");
return null!=b?b:n.trim(n.text(a)).replace(hb," ")
}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;
h>i;
i++){if(c=d[i],(c.selected||i===e)&&(l.optDisabled?!c.disabled:null===c.getAttribute("disabled"))&&(!c.parentNode.disabled||!n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f){return b
}g.push(b)
}}return g
},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;
while(g--){d=e[g],(d.selected=n.inArray(n.valHooks.option.get(d),f)>-1)&&(c=!0)
}return c||(a.selectedIndex=-1),f
}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>-1:void 0
}},l.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value
})
});
var ib=/^(?:focusinfocus|focusoutblur)$/;
n.extend(n.event,{trigger:function(b,c,e,f){var g,h,i,j,l,m,o,p=[e||d],q=k.call(b,"type")?b.type:b,r=k.call(b,"namespace")?b.namespace.split("."):[];
if(h=i=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!ib.test(q+n.event.triggered)&&(q.indexOf(".")>-1&&(r=q.split("."),q=r.shift(),r.sort()),l=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=r.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},f||!o.trigger||o.trigger.apply(e,c)!==!1)){if(!f&&!o.noBubble&&!n.isWindow(e)){for(j=o.delegateType||q,ib.test(j+q)||(h=h.parentNode);
h;
h=h.parentNode){p.push(h),i=h
}i===(e.ownerDocument||d)&&p.push(i.defaultView||i.parentWindow||a)
}g=0;
while((h=p[g++])&&!b.isPropagationStopped()){b.type=g>1?j:o.bindType||q,m=(N.get(h,"events")||{})[b.type]&&N.get(h,"handle"),m&&m.apply(h,c),m=l&&h[l],m&&m.apply&&L(h)&&(b.result=m.apply(h,c),b.result===!1&&b.preventDefault())
}return b.type=q,f||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!L(e)||l&&n.isFunction(e[q])&&!n.isWindow(e)&&(i=e[l],i&&(e[l]=null),n.event.triggered=q,e[q](),n.event.triggered=void 0,i&&(e[l]=i)),b.result
}},simulate:function(a,b,c){var d=n.extend(new n.Event,c,{type:a,isSimulated:!0});
n.event.trigger(d,null,b)
}}),n.fn.extend({trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)
})
},triggerHandler:function(a,b){var c=this[0];
return c?n.event.trigger(a,b,c,!0):void 0
}}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)
}
}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)
}}),l.focusin="onfocusin" in a,l.focusin||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a))
};
n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=N.access(d,b);
e||d.addEventListener(a,c,!0),N.access(d,b,(e||0)+1)
},teardown:function(){var d=this.ownerDocument||this,e=N.access(d,b)-1;
e?N.access(d,b,e):(d.removeEventListener(a,c,!0),N.remove(d,b))
}}
});
var jb=a.location,kb=n.now(),lb=/\?/;
n.parseJSON=function(a){return JSON.parse(a+"")
},n.parseXML=function(b){var c;
if(!b||"string"!=typeof b){return null
}try{c=(new a.DOMParser).parseFromString(b,"text/xml")
}catch(d){c=void 0
}return c&&!c.getElementsByTagName("parsererror").length||n.error("Invalid XML: "+b),c
};
var mb=/#.*$/,nb=/([?&])_=[^&]*/,ob=/^(.*?):[ \t]*([^\r\n]*)$/gm,pb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,qb=/^(?:GET|HEAD)$/,rb=/^\/\//,sb={},tb={},ub="*/".concat("*"),vb=d.createElement("a");
vb.href=jb.href;
function wb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");
var d,e=0,f=b.toLowerCase().match(G)||[];
if(n.isFunction(c)){while(d=f[e++]){"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)
}}}
}function xb(a,b,c,d){var e={},f=a===tb;
function g(h){var i;
return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);
return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)
}),i
}return g(b.dataTypes[0])||!e["*"]&&g("*")
}function yb(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};
for(c in b){void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c])
}return d&&n.extend(!0,a,d),a
}function zb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;
while("*"===i[0]){i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"))
}if(d){for(e in h){if(h[e]&&h[e].test(d)){i.unshift(e);
break
}}}if(i[0] in c){f=i[0]
}else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;
break
}g||(g=e)
}f=f||g
}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0
}function Ab(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();
if(k[1]){for(g in a.converters){j[g.toLowerCase()]=a.converters[g]
}}f=k.shift();
while(f){if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift()){if("*"===f){f=i
}else{if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g){for(e in j){if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));
break
}}}if(g!==!0){if(g&&a["throws"]){b=g(b)
}else{try{b=g(b)
}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}
}}}}}}}return{state:"success",data:b}
}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:jb.href,type:"GET",isLocal:pb.test(jb.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":ub,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?yb(yb(a,n.ajaxSettings),b):yb(n.ajaxSettings,a)
},ajaxPrefilter:wb(sb),ajaxTransport:wb(tb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};
var e,f,g,h,i,j,k,l,m=n.ajaxSetup({},c),o=m.context||m,p=m.context&&(o.nodeType||o.jquery)?n(o):n.event,q=n.Deferred(),r=n.Callbacks("once memory"),s=m.statusCode||{},t={},u={},v=0,w="canceled",x={readyState:0,getResponseHeader:function(a){var b;
if(2===v){if(!h){h={};
while(b=ob.exec(g)){h[b[1].toLowerCase()]=b[2]
}}b=h[a.toLowerCase()]
}return null==b?null:b
},getAllResponseHeaders:function(){return 2===v?g:null
},setRequestHeader:function(a,b){var c=a.toLowerCase();
return v||(a=u[c]=u[c]||a,t[a]=b),this
},overrideMimeType:function(a){return v||(m.mimeType=a),this
},statusCode:function(a){var b;
if(a){if(2>v){for(b in a){s[b]=[s[b],a[b]]
}}else{x.always(a[x.status])
}}return this
},abort:function(a){var b=a||w;
return e&&e.abort(b),z(0,b),this
}};
if(q.promise(x).complete=r.add,x.success=x.done,x.error=x.fail,m.url=((b||m.url||jb.href)+"").replace(mb,"").replace(rb,jb.protocol+"//"),m.type=c.method||c.type||m.method||m.type,m.dataTypes=n.trim(m.dataType||"*").toLowerCase().match(G)||[""],null==m.crossDomain){j=d.createElement("a");
try{j.href=m.url,j.href=j.href,m.crossDomain=vb.protocol+"//"+vb.host!=j.protocol+"//"+j.host
}catch(y){m.crossDomain=!0
}}if(m.data&&m.processData&&"string"!=typeof m.data&&(m.data=n.param(m.data,m.traditional)),xb(sb,m,c,x),2===v){return x
}k=n.event&&m.global,k&&0===n.active++&&n.event.trigger("ajaxStart"),m.type=m.type.toUpperCase(),m.hasContent=!qb.test(m.type),f=m.url,m.hasContent||(m.data&&(f=m.url+=(lb.test(f)?"&":"?")+m.data,delete m.data),m.cache===!1&&(m.url=nb.test(f)?f.replace(nb,"$1_="+kb++):f+(lb.test(f)?"&":"?")+"_="+kb++)),m.ifModified&&(n.lastModified[f]&&x.setRequestHeader("If-Modified-Since",n.lastModified[f]),n.etag[f]&&x.setRequestHeader("If-None-Match",n.etag[f])),(m.data&&m.hasContent&&m.contentType!==!1||c.contentType)&&x.setRequestHeader("Content-Type",m.contentType),x.setRequestHeader("Accept",m.dataTypes[0]&&m.accepts[m.dataTypes[0]]?m.accepts[m.dataTypes[0]]+("*"!==m.dataTypes[0]?", "+ub+"; q=0.01":""):m.accepts["*"]);
for(l in m.headers){x.setRequestHeader(l,m.headers[l])
}if(m.beforeSend&&(m.beforeSend.call(o,x,m)===!1||2===v)){return x.abort()
}w="abort";
for(l in {success:1,error:1,complete:1}){x[l](m[l])
}if(e=xb(tb,m,c,x)){if(x.readyState=1,k&&p.trigger("ajaxSend",[x,m]),2===v){return x
}m.async&&m.timeout>0&&(i=a.setTimeout(function(){x.abort("timeout")
},m.timeout));
try{v=1,e.send(t,z)
}catch(y){if(!(2>v)){throw y
}z(-1,y)
}}else{z(-1,"No Transport")
}function z(b,c,d,h){var j,l,t,u,w,y=c;
2!==v&&(v=2,i&&a.clearTimeout(i),e=void 0,g=h||"",x.readyState=b>0?4:0,j=b>=200&&300>b||304===b,d&&(u=zb(m,x,d)),u=Ab(m,u,x,j),j?(m.ifModified&&(w=x.getResponseHeader("Last-Modified"),w&&(n.lastModified[f]=w),w=x.getResponseHeader("etag"),w&&(n.etag[f]=w)),204===b||"HEAD"===m.type?y="nocontent":304===b?y="notmodified":(y=u.state,l=u.data,t=u.error,j=!t)):(t=y,!b&&y||(y="error",0>b&&(b=0))),x.status=b,x.statusText=(c||y)+"",j?q.resolveWith(o,[l,y,x]):q.rejectWith(o,[x,y,t]),x.statusCode(s),s=void 0,k&&p.trigger(j?"ajaxSuccess":"ajaxError",[x,m,j?l:t]),r.fireWith(o,[x,y]),k&&(p.trigger("ajaxComplete",[x,m]),--n.active||n.event.trigger("ajaxStop")))
}return x
},getJSON:function(a,b,c){return n.get(a,b,c,"json")
},getScript:function(a,b){return n.get(a,void 0,b,"script")
}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax(n.extend({url:a,type:b,dataType:e,data:c,success:d},n.isPlainObject(a)&&a))
}
}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})
},n.fn.extend({wrapAll:function(a){var b;
return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))
}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;
while(a.firstElementChild){a=a.firstElementChild
}return a
}).append(this)),this)
},wrapInner:function(a){return n.isFunction(a)?this.each(function(b){n(this).wrapInner(a.call(this,b))
}):this.each(function(){var b=n(this),c=b.contents();
c.length?c.wrapAll(a):b.append(a)
})
},wrap:function(a){var b=n.isFunction(a);
return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)
})
},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)
}).end()
}}),n.expr.filters.hidden=function(a){return !n.expr.filters.visible(a)
},n.expr.filters.visible=function(a){return a.offsetWidth>0||a.offsetHeight>0||a.getClientRects().length>0
};
var Bb=/%20/g,Cb=/\[\]$/,Db=/\r?\n/g,Eb=/^(?:submit|button|image|reset|file)$/i,Fb=/^(?:input|select|textarea|keygen)/i;
function Gb(a,b,c,d){var e;
if(n.isArray(b)){n.each(b,function(b,e){c||Cb.test(a)?d(a,e):Gb(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)
})
}else{if(c||"object"!==n.type(b)){d(a,b)
}else{for(e in b){Gb(a+"["+e+"]",b[e],c,d)
}}}}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)
};
if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a)){n.each(a,function(){e(this.name,this.value)
})
}else{for(c in a){Gb(c,a[c],b,e)
}}return d.join("&").replace(Bb,"+")
},n.fn.extend({serialize:function(){return n.param(this.serializeArray())
},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");
return a?n.makeArray(a):this
}).filter(function(){var a=this.type;
return this.name&&!n(this).is(":disabled")&&Fb.test(this.nodeName)&&!Eb.test(a)&&(this.checked||!X.test(a))
}).map(function(a,b){var c=n(this).val();
return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(Db,"\r\n")}
}):{name:b.name,value:c.replace(Db,"\r\n")}
}).get()
}}),n.ajaxSettings.xhr=function(){try{return new a.XMLHttpRequest
}catch(b){}};
var Hb={0:200,1223:204},Ib=n.ajaxSettings.xhr();
l.cors=!!Ib&&"withCredentials" in Ib,l.ajax=Ib=!!Ib,n.ajaxTransport(function(b){var c,d;
return l.cors||Ib&&!b.crossDomain?{send:function(e,f){var g,h=b.xhr();
if(h.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields){for(g in b.xhrFields){h[g]=b.xhrFields[g]
}}b.mimeType&&h.overrideMimeType&&h.overrideMimeType(b.mimeType),b.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest");
for(g in e){h.setRequestHeader(g,e[g])
}c=function(a){return function(){c&&(c=d=h.onload=h.onerror=h.onabort=h.onreadystatechange=null,"abort"===a?h.abort():"error"===a?"number"!=typeof h.status?f(0,"error"):f(h.status,h.statusText):f(Hb[h.status]||h.status,h.statusText,"text"!==(h.responseType||"text")||"string"!=typeof h.responseText?{binary:h.response}:{text:h.responseText},h.getAllResponseHeaders()))
}
},h.onload=c(),d=h.onerror=c("error"),void 0!==h.onabort?h.onabort=d:h.onreadystatechange=function(){4===h.readyState&&a.setTimeout(function(){c&&d()
})
},c=c("abort");
try{h.send(b.hasContent&&b.data||null)
}catch(i){if(c){throw i
}}},abort:function(){c&&c()
}}:void 0
}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return n.globalEval(a),a
}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")
}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;
return{send:function(e,f){b=n("<script>").prop({charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&f("error"===a.type?404:200,a.type)
}),d.head.appendChild(b[0])
},abort:function(){c&&c()
}}
}});
var Jb=[],Kb=/(=)\?(?=&|$)|\?\?/;
n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Jb.pop()||n.expando+"_"+kb++;
return this[a]=!0,a
}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Kb.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Kb.test(b.data)&&"data");
return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Kb,"$1"+e):b.jsonp!==!1&&(b.url+=(lb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]
},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments
},d.always(function(){void 0===f?n(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Jb.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0
}),"script"):void 0
}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a){return null
}"boolean"==typeof b&&(c=b,b=!1),b=b||d;
var e=x.exec(a),f=!c&&[];
return e?[b.createElement(e[1])]:(e=ca([a],b,f),f&&f.length&&n(f).remove(),n.merge([],e.childNodes))
};
var Lb=n.fn.load;
n.fn.load=function(a,b,c){if("string"!=typeof a&&Lb){return Lb.apply(this,arguments)
}var d,e,f,g=this,h=a.indexOf(" ");
return h>-1&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)
}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])
})
}),this
},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)
}
}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem
}).length
};
function Mb(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView
}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};
"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,n.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using" in b?b.using.call(a,m):l.css(m)
}},n.fn.extend({offset:function(a){if(arguments.length){return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)
})
}var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;
if(f){return b=f.documentElement,n.contains(b,d)?(e=d.getBoundingClientRect(),c=Mb(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e
}},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};
return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}
}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;
while(a&&"static"===n.css(a,"position")){a=a.offsetParent
}return a||Ea
})
}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c="pageYOffset"===b;
n.fn[a]=function(d){return K(this,function(a,d,e){var f=Mb(a);
return void 0===e?f?f[b]:a[d]:void (f?f.scrollTo(c?f.pageXOffset:e,c?e:f.pageYOffset):a[d]=e)
},a,d,arguments.length)
}
}),n.each(["top","left"],function(a,b){n.cssHooks[b]=Ga(l.pixelPosition,function(a,c){return c?(c=Fa(a,b),Ba.test(c)?n(a).position()[b]+"px":c):void 0
})
}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");
return K(this,function(b,c,d){var e;
return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)
},b,f?d:void 0,f,null)
}
})
}),n.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)
},unbind:function(a,b){return this.off(a,null,b)
},delegate:function(a,b,c,d){return this.on(b,a,c,d)
},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)
},size:function(){return this.length
}}),n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n
});
var Nb=a.jQuery,Ob=a.$;
return n.noConflict=function(b){return a.$===n&&(a.$=Ob),b&&a.jQuery===n&&(a.jQuery=Nb),n
},b||(a.jQuery=a.$=n),n
});
+function(d){var c=function(f,e){this.options=d.extend({},c.DEFAULTS,e);
this.$target=d(this.options.target).on("scroll.bs.affix.data-api",d.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",d.proxy(this.checkPositionWithEventLoop,this));
this.$element=d(f);
this.affixed=null;
this.unpin=null;
this.pinnedOffset=null;
this.checkPosition()
};
c.VERSION="3.3.7";
c.RESET="affix affix-top affix-bottom";
c.DEFAULTS={offset:0,target:window};
c.prototype.getState=function(o,n,f,g){var e=this.$target.scrollTop();
var j=this.$element.offset();
var k=this.$target.height();
if(f!=null&&this.affixed=="top"){return e<f?"top":false
}if(this.affixed=="bottom"){if(f!=null){return(e+this.unpin<=j.top)?false:"bottom"
}return(e+k<=o-g)?false:"bottom"
}var h=this.affixed==null;
var m=h?e:j.top;
var l=h?k:n;
if(f!=null&&e<=f){return"top"
}if(g!=null&&(m+l>=o-g)){return"bottom"
}return false
};
c.prototype.getPinnedOffset=function(){if(this.pinnedOffset){return this.pinnedOffset
}this.$element.removeClass(c.RESET).addClass("affix");
var f=this.$target.scrollTop();
var e=this.$element.offset();
return(this.pinnedOffset=e.top-f)
};
c.prototype.checkPositionWithEventLoop=function(){setTimeout(d.proxy(this.checkPosition,this),1)
};
c.prototype.checkPosition=function(){if(!this.$element.is(":visible")){return
}var f=this.$element.height();
var m=this.options.offset;
var k=m.top;
var h=m.bottom;
var j=Math.max(d(document).height(),d(document.body).height());
if(typeof m!="object"){h=k=m
}if(typeof k=="function"){k=m.top(this.$element)
}if(typeof h=="function"){h=m.bottom(this.$element)
}var g=this.getState(j,f,k,h);
if(this.affixed!=g){if(this.unpin!=null){this.$element.css("top","")
}var n="affix"+(g?"-"+g:"");
var l=d.Event(n+".bs.affix");
this.$element.trigger(l);
if(l.isDefaultPrevented()){return
}this.affixed=g;
this.unpin=g=="bottom"?this.getPinnedOffset():null;
this.$element.removeClass(c.RESET).addClass(n).trigger(n.replace("affix","affixed")+".bs.affix")
}if(g=="bottom"){this.$element.offset({top:j-f-h})
}};
function b(e){return this.each(function(){var h=d(this);
var g=h.data("bs.affix");
var f=typeof e=="object"&&e;
if(!g){h.data("bs.affix",(g=new c(this,f)))
}if(typeof e=="string"){g[e]()
}})
}var a=d.fn.affix;
d.fn.affix=b;
d.fn.affix.Constructor=c;
d.fn.affix.noConflict=function(){d.fn.affix=a;
return this
};
d(window).on("load",function(){d('[data-spy="affix"]').each(function(){var f=d(this);
var e=f.data();
e.offset=e.offset||{};
if(e.offsetBottom!=null){e.offset.bottom=e.offsetBottom
}if(e.offsetTop!=null){e.offset.top=e.offsetTop
}b.call(f,e)
})
})
}(jQuery);
+function(d){var e=function(g,f){this.$element=d(g);
this.options=d.extend({},e.DEFAULTS,f);
this.$trigger=d('[data-toggle="collapse"][href="#'+g.id+'"],[data-toggle="collapse"][data-target="#'+g.id+'"]');
this.transitioning=null;
if(this.options.parent){this.$parent=this.getParent()
}else{this.addAriaAndCollapsedClass(this.$element,this.$trigger)
}if(this.options.toggle){this.toggle()
}};
e.VERSION="3.3.7";
e.TRANSITION_DURATION=350;
e.DEFAULTS={toggle:true};
e.prototype.dimension=function(){var f=this.$element.hasClass("width");
return f?"width":"height"
};
e.prototype.show=function(){if(this.transitioning||this.$element.hasClass("in")){return
}var h;
var k=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");
if(k&&k.length){h=k.data("bs.collapse");
if(h&&h.transitioning){return
}}var g=d.Event("show.bs.collapse");
this.$element.trigger(g);
if(g.isDefaultPrevented()){return
}if(k&&k.length){b.call(k,"hide");
h||k.data("bs.collapse",null)
}var l=this.dimension();
this.$element.removeClass("collapse").addClass("collapsing")[l](0).attr("aria-expanded",true);
this.$trigger.removeClass("collapsed").attr("aria-expanded",true);
this.transitioning=1;
var f=function(){this.$element.removeClass("collapsing").addClass("collapse in")[l]("");
this.transitioning=0;
this.$element.trigger("shown.bs.collapse")
};
if(!d.support.transition){return f.call(this)
}var j=d.camelCase(["scroll",l].join("-"));
this.$element.one("bsTransitionEnd",d.proxy(f,this)).emulateTransitionEnd(e.TRANSITION_DURATION)[l](this.$element[0][j])
};
e.prototype.hide=function(){if(this.transitioning||!this.$element.hasClass("in")){return
}var g=d.Event("hide.bs.collapse");
this.$element.trigger(g);
if(g.isDefaultPrevented()){return
}var h=this.dimension();
this.$element[h](this.$element[h]())[0].offsetHeight;
this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",false);
this.$trigger.addClass("collapsed").attr("aria-expanded",false);
this.transitioning=1;
var f=function(){this.transitioning=0;
this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
};
if(!d.support.transition){return f.call(this)
}this.$element[h](0).one("bsTransitionEnd",d.proxy(f,this)).emulateTransitionEnd(e.TRANSITION_DURATION)
};
e.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()
};
e.prototype.getParent=function(){return d(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(d.proxy(function(h,g){var f=d(g);
this.addAriaAndCollapsedClass(c(f),f)
},this)).end()
};
e.prototype.addAriaAndCollapsedClass=function(g,f){var h=g.hasClass("in");
g.attr("aria-expanded",h);
f.toggleClass("collapsed",!h).attr("aria-expanded",h)
};
function c(f){var g;
var h=f.attr("data-target")||(g=f.attr("href"))&&g.replace(/.*(?=#[^\s]+$)/,"");
return d(h)
}function b(f){return this.each(function(){var j=d(this);
var h=j.data("bs.collapse");
var g=d.extend({},e.DEFAULTS,j.data(),typeof f=="object"&&f);
if(!h&&g.toggle&&/show|hide/.test(f)){g.toggle=false
}if(!h){j.data("bs.collapse",(h=new e(this,g)))
}if(typeof f=="string"){h[f]()
}})
}var a=d.fn.collapse;
d.fn.collapse=b;
d.fn.collapse.Constructor=e;
d.fn.collapse.noConflict=function(){d.fn.collapse=a;
return this
};
d(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(k){var j=d(this);
if(!j.attr("data-target")){k.preventDefault()
}var f=c(j);
var h=f.data("bs.collapse");
var g=h?"toggle":j.data();
b.call(f,g)
})
}(jQuery);
+function(h){var e=".dropdown-backdrop";
var b='[data-toggle="dropdown"]';
var a=function(j){h(j).on("click.bs.dropdown",this.toggle)
};
a.VERSION="3.3.7";
function f(l){var j=l.attr("data-target");
if(!j){j=l.attr("href");
j=j&&/#[A-Za-z]/.test(j)&&j.replace(/.*(?=#[^\s]*$)/,"")
}var k=j&&h(j);
return k&&k.length?k:l.parent()
}function d(j){if(j&&j.which===3){return
}h(e).remove();
h(b).each(function(){var m=h(this);
var l=f(m);
var k={relatedTarget:this};
if(!l.hasClass("open")){return
}if(j&&j.type=="click"&&/input|textarea/i.test(j.target.tagName)&&h.contains(l[0],j.target)){return
}l.trigger(j=h.Event("hide.bs.dropdown",k));
if(j.isDefaultPrevented()){return
}m.attr("aria-expanded","false");
l.removeClass("open").trigger(h.Event("hidden.bs.dropdown",k))
})
}a.prototype.toggle=function(n){var m=h(this);
if(m.is(".disabled, :disabled")){return
}var l=f(m);
var k=l.hasClass("open");
d();
if(!k){if("ontouchstart" in document.documentElement&&!l.closest(".navbar-nav").length){h(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(h(this)).on("click",d)
}var j={relatedTarget:this};
l.trigger(n=h.Event("show.bs.dropdown",j));
if(n.isDefaultPrevented()){return
}m.trigger("focus").attr("aria-expanded","true");
l.toggleClass("open").trigger(h.Event("shown.bs.dropdown",j))
}return false
};
a.prototype.keydown=function(n){if(!/(38|40|27|32)/.test(n.which)||/input|textarea/i.test(n.target.tagName)){return
}var m=h(this);
n.preventDefault();
n.stopPropagation();
if(m.is(".disabled, :disabled")){return
}var l=f(m);
var k=l.hasClass("open");
if(!k&&n.which!=27||k&&n.which==27){if(n.which==27){l.find(b).trigger("focus")
}return m.trigger("click")
}var o=" li:not(.disabled):visible a";
var p=l.find(".dropdown-menu"+o);
if(!p.length){return
}var j=p.index(n.target);
if(n.which==38&&j>0){j--
}if(n.which==40&&j<p.length-1){j++
}if(!~j){j=0
}p.eq(j).trigger("focus")
};
function g(j){return this.each(function(){var l=h(this);
var k=l.data("bs.dropdown");
if(!k){l.data("bs.dropdown",(k=new a(this)))
}if(typeof j=="string"){k[j].call(l)
}})
}var c=h.fn.dropdown;
h.fn.dropdown=g;
h.fn.dropdown.Constructor=a;
h.fn.dropdown.noConflict=function(){h.fn.dropdown=c;
return this
};
h(document).on("click.bs.dropdown.data-api",d).on("click.bs.dropdown.data-api",".dropdown form",function(j){j.stopPropagation()
}).on("click.bs.dropdown.data-api",b,a.prototype.toggle).on("keydown.bs.dropdown.data-api",b,a.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",a.prototype.keydown)
}(jQuery);
+function(d){var b=function(f,e){this.options=e;
this.$body=d(document.body);
this.$element=d(f);
this.$dialog=this.$element.find(".modal-dialog");
this.$backdrop=null;
this.isShown=null;
this.originalBodyPad=null;
this.scrollbarWidth=0;
this.ignoreBackdropClick=false;
if(this.options.remote){this.$element.find(".modal-content").load(this.options.remote,d.proxy(function(){this.$element.trigger("loaded.bs.modal")
},this))
}};
b.VERSION="3.3.7";
b.TRANSITION_DURATION=300;
b.BACKDROP_TRANSITION_DURATION=150;
b.DEFAULTS={backdrop:true,keyboard:true,show:true};
b.prototype.toggle=function(e){return this.isShown?this.hide():this.show(e)
};
b.prototype.show=function(h){var f=this;
var g=d.Event("show.bs.modal",{relatedTarget:h});
this.$element.trigger(g);
if(this.isShown||g.isDefaultPrevented()){return
}this.isShown=true;
this.checkScrollbar();
this.setScrollbar();
this.$body.addClass("modal-open");
this.escape();
this.resize();
this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',d.proxy(this.hide,this));
this.$dialog.on("mousedown.dismiss.bs.modal",function(){f.$element.one("mouseup.dismiss.bs.modal",function(j){if(d(j.target).is(f.$element)){f.ignoreBackdropClick=true
}})
});
this.backdrop(function(){var k=d.support.transition&&f.$element.hasClass("fade");
if(!f.$element.parent().length){f.$element.appendTo(f.$body)
}f.$element.show().scrollTop(0);
f.adjustDialog();
if(k){f.$element[0].offsetWidth
}f.$element.addClass("in");
f.enforceFocus();
var j=d.Event("shown.bs.modal",{relatedTarget:h});
k?f.$dialog.one("bsTransitionEnd",function(){f.$element.trigger("focus").trigger(j)
}).emulateTransitionEnd(b.TRANSITION_DURATION):f.$element.trigger("focus").trigger(j)
})
};
b.prototype.hide=function(f){if(f){f.preventDefault()
}f=d.Event("hide.bs.modal");
this.$element.trigger(f);
if(!this.isShown||f.isDefaultPrevented()){return
}this.isShown=false;
this.escape();
this.resize();
d(document).off("focusin.bs.modal");
this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal");
this.$dialog.off("mousedown.dismiss.bs.modal");
d.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",d.proxy(this.hideModal,this)).emulateTransitionEnd(b.TRANSITION_DURATION):this.hideModal()
};
b.prototype.enforceFocus=function(){d(document).off("focusin.bs.modal").on("focusin.bs.modal",d.proxy(function(f){if(document!==f.target&&this.$element[0]!==f.target&&!this.$element.has(f.target).length){this.$element.trigger("focus")
}},this))
};
b.prototype.escape=function(){if(this.isShown&&this.options.keyboard){this.$element.on("keydown.dismiss.bs.modal",d.proxy(function(f){f.which==27&&this.hide()
},this))
}else{if(!this.isShown){this.$element.off("keydown.dismiss.bs.modal")
}}};
b.prototype.resize=function(){if(this.isShown){d(window).on("resize.bs.modal",d.proxy(this.handleUpdate,this))
}else{d(window).off("resize.bs.modal")
}};
b.prototype.hideModal=function(){var e=this;
this.$element.hide();
this.backdrop(function(){e.$body.removeClass("modal-open");
e.resetAdjustments();
e.resetScrollbar();
e.$element.trigger("hidden.bs.modal")
})
};
b.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove();
this.$backdrop=null
};
b.prototype.backdrop=function(j){var h=this;
var f=this.$element.hasClass("fade")?"fade":"";
if(this.isShown&&this.options.backdrop){var e=d.support.transition&&f;
this.$backdrop=d(document.createElement("div")).addClass("modal-backdrop "+f).appendTo(this.$body);
this.$element.on("click.dismiss.bs.modal",d.proxy(function(k){if(this.ignoreBackdropClick){this.ignoreBackdropClick=false;
return
}if(k.target!==k.currentTarget){return
}this.options.backdrop=="static"?this.$element[0].focus():this.hide()
},this));
if(e){this.$backdrop[0].offsetWidth
}this.$backdrop.addClass("in");
if(!j){return
}e?this.$backdrop.one("bsTransitionEnd",j).emulateTransitionEnd(b.BACKDROP_TRANSITION_DURATION):j()
}else{if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");
var g=function(){h.removeBackdrop();
j&&j()
};
d.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",g).emulateTransitionEnd(b.BACKDROP_TRANSITION_DURATION):g()
}else{if(j){j()
}}}};
b.prototype.handleUpdate=function(){this.adjustDialog()
};
b.prototype.adjustDialog=function(){var e=this.$element[0].scrollHeight>document.documentElement.clientHeight;
this.$element.css({paddingLeft:!this.bodyIsOverflowing&&e?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!e?this.scrollbarWidth:""})
};
b.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})
};
b.prototype.checkScrollbar=function(){var f=window.innerWidth;
if(!f){var e=document.documentElement.getBoundingClientRect();
f=e.right-Math.abs(e.left)
}this.bodyIsOverflowing=document.body.clientWidth<f;
this.scrollbarWidth=this.measureScrollbar()
};
b.prototype.setScrollbar=function(){var e=parseInt((this.$body.css("padding-right")||0),10);
this.originalBodyPad=document.body.style.paddingRight||"";
if(this.bodyIsOverflowing){this.$body.css("padding-right",e+this.scrollbarWidth)
}};
b.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad)
};
b.prototype.measureScrollbar=function(){var f=document.createElement("div");
f.className="modal-scrollbar-measure";
this.$body.append(f);
var e=f.offsetWidth-f.clientWidth;
this.$body[0].removeChild(f);
return e
};
function c(e,f){return this.each(function(){var j=d(this);
var h=j.data("bs.modal");
var g=d.extend({},b.DEFAULTS,j.data(),typeof e=="object"&&e);
if(!h){j.data("bs.modal",(h=new b(this,g)))
}if(typeof e=="string"){h[e](f)
}else{if(g.show){h.show(f)
}}})
}var a=d.fn.modal;
d.fn.modal=c;
d.fn.modal.Constructor=b;
d.fn.modal.noConflict=function(){d.fn.modal=a;
return this
};
d(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(k){var j=d(this);
var g=j.attr("href");
var f=d(j.attr("data-target")||(g&&g.replace(/.*(?=#[^\s]+$)/,"")));
var h=f.data("bs.modal")?"toggle":d.extend({remote:!/#/.test(g)&&g},f.data(),j.data());
if(j.is("a")){k.preventDefault()
}f.one("show.bs.modal",function(e){if(e.isDefaultPrevented()){return
}f.one("hidden.bs.modal",function(){j.is(":visible")&&j.trigger("focus")
})
});
c.call(f,h,this)
})
}(jQuery);
+function(d){function c(f,e){this.$body=d(document.body);
this.$scrollElement=d(f).is(document.body)?d(window):d(f);
this.options=d.extend({},c.DEFAULTS,e);
this.selector=(this.options.target||"")+" .nav li > a";
this.offsets=[];
this.targets=[];
this.activeTarget=null;
this.scrollHeight=0;
this.$scrollElement.on("scroll.bs.scrollspy",d.proxy(this.process,this));
this.refresh();
this.process()
}c.VERSION="3.3.7";
c.DEFAULTS={offset:10};
c.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)
};
c.prototype.refresh=function(){var g=this;
var e="offset";
var f=0;
this.offsets=[];
this.targets=[];
this.scrollHeight=this.getScrollHeight();
if(!d.isWindow(this.$scrollElement[0])){e="position";
f=this.$scrollElement.scrollTop()
}this.$body.find(this.selector).map(function(){var j=d(this);
var h=j.data("target")||j.attr("href");
var k=/^#./.test(h)&&d(h);
return(k&&k.length&&k.is(":visible")&&[[k[e]().top+f,h]])||null
}).sort(function(j,h){return j[0]-h[0]
}).each(function(){g.offsets.push(this[0]);
g.targets.push(this[1])
})
};
c.prototype.process=function(){var k=this.$scrollElement.scrollTop()+this.options.offset;
var g=this.getScrollHeight();
var j=this.options.offset+g-this.$scrollElement.height();
var h=this.offsets;
var e=this.targets;
var l=this.activeTarget;
var f;
if(this.scrollHeight!=g){this.refresh()
}if(k>=j){return l!=(f=e[e.length-1])&&this.activate(f)
}if(l&&k<h[0]){this.activeTarget=null;
return this.clear()
}for(f=h.length;
f--;
){l!=e[f]&&k>=h[f]&&(h[f+1]===undefined||k<h[f+1])&&this.activate(e[f])
}};
c.prototype.activate=function(g){this.activeTarget=g;
this.clear();
var e=this.selector+'[data-target="'+g+'"],'+this.selector+'[href="'+g+'"]';
var f=d(e).parents("li").addClass("active");
if(f.parent(".dropdown-menu").length){f=f.closest("li.dropdown").addClass("active")
}f.trigger("activate.bs.scrollspy")
};
c.prototype.clear=function(){d(this.selector).parentsUntil(this.options.target,".active").removeClass("active")
};
function b(e){return this.each(function(){var h=d(this);
var g=h.data("bs.scrollspy");
var f=typeof e=="object"&&e;
if(!g){h.data("bs.scrollspy",(g=new c(this,f)))
}if(typeof e=="string"){g[e]()
}})
}var a=d.fn.scrollspy;
d.fn.scrollspy=b;
d.fn.scrollspy.Constructor=c;
d.fn.scrollspy.noConflict=function(){d.fn.scrollspy=a;
return this
};
d(window).on("load.bs.scrollspy.data-api",function(){d('[data-spy="scroll"]').each(function(){var e=d(this);
b.call(e,e.data())
})
})
}(jQuery);
+function(d){var b=function(f){this.element=d(f)
};
b.VERSION="3.3.7";
b.TRANSITION_DURATION=150;
b.prototype.show=function(){var m=this.element;
var h=m.closest("ul:not(.dropdown-menu)");
var g=m.data("target");
if(!g){g=m.attr("href");
g=g&&g.replace(/.*(?=#[^\s]*$)/,"")
}if(m.parent("li").hasClass("active")){return
}var k=h.find(".active:last a");
var l=d.Event("hide.bs.tab",{relatedTarget:m[0]});
var j=d.Event("show.bs.tab",{relatedTarget:k[0]});
k.trigger(l);
m.trigger(j);
if(j.isDefaultPrevented()||l.isDefaultPrevented()){return
}var f=d(g);
this.activate(m.closest("li"),h);
this.activate(f,f.parent(),function(){k.trigger({type:"hidden.bs.tab",relatedTarget:m[0]});
m.trigger({type:"shown.bs.tab",relatedTarget:k[0]})
})
};
b.prototype.activate=function(h,g,l){var f=g.find("> .active");
var k=l&&d.support.transition&&(f.length&&f.hasClass("fade")||!!g.find("> .fade").length);
function j(){f.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",false);
h.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",true);
if(k){h[0].offsetWidth;
h.addClass("in")
}else{h.removeClass("fade")
}if(h.parent(".dropdown-menu").length){h.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",true)
}l&&l()
}f.length&&k?f.one("bsTransitionEnd",j).emulateTransitionEnd(b.TRANSITION_DURATION):j();
f.removeClass("in")
};
function c(f){return this.each(function(){var h=d(this);
var g=h.data("bs.tab");
if(!g){h.data("bs.tab",(g=new b(this)))
}if(typeof f=="string"){g[f]()
}})
}var a=d.fn.tab;
d.fn.tab=c;
d.fn.tab.Constructor=b;
d.fn.tab.noConflict=function(){d.fn.tab=a;
return this
};
var e=function(f){f.preventDefault();
c.call(d(this),"show")
};
d(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',e).on("click.bs.tab.data-api",'[data-toggle="pill"]',e)
}(jQuery);
+function(b){function a(){var e=document.createElement("bootstrap");
var d={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};
for(var c in d){if(e.style[c]!==undefined){return{end:d[c]}
}}return false
}b.fn.emulateTransitionEnd=function(e){var d=false;
var c=this;
b(this).one("bsTransitionEnd",function(){d=true
});
var f=function(){if(!d){b(c).trigger(b.support.transition.end)
}};
setTimeout(f,e);
return this
};
b(function(){b.support.transition=a();
if(!b.support.transition){return
}b.event.special.bsTransitionEnd={bindType:b.support.transition.end,delegateType:b.support.transition.end,handle:function(c){if(b(c.target).is(this)){return c.handleObj.handler.apply(this,arguments)
}}}
})
}(jQuery);
+function(d){var c=function(f,e){this.type=null;
this.options=null;
this.enabled=null;
this.timeout=null;
this.hoverState=null;
this.$element=null;
this.inState=null;
this.init("tooltip",f,e)
};
c.VERSION="3.3.7";
c.TRANSITION_DURATION=150;
c.DEFAULTS={animation:true,placement:"top",selector:false,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:false,container:false,viewport:{selector:"body",padding:0}};
c.prototype.init=function(l,j,g){this.enabled=true;
this.type=l;
this.$element=d(j);
this.options=this.getOptions(g);
this.$viewport=this.options.viewport&&d(d.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):(this.options.viewport.selector||this.options.viewport));
this.inState={click:false,hover:false,focus:false};
if(this.$element[0] instanceof document.constructor&&!this.options.selector){throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!")
}var k=this.options.trigger.split(" ");
for(var h=k.length;
h--;
){var f=k[h];
if(f=="click"){this.$element.on("click."+this.type,this.options.selector,d.proxy(this.toggle,this))
}else{if(f!="manual"){var m=f=="hover"?"mouseenter":"focusin";
var e=f=="hover"?"mouseleave":"focusout";
this.$element.on(m+"."+this.type,this.options.selector,d.proxy(this.enter,this));
this.$element.on(e+"."+this.type,this.options.selector,d.proxy(this.leave,this))
}}}this.options.selector?(this._options=d.extend({},this.options,{trigger:"manual",selector:""})):this.fixTitle()
};
c.prototype.getDefaults=function(){return c.DEFAULTS
};
c.prototype.getOptions=function(e){e=d.extend({},this.getDefaults(),this.$element.data(),e);
if(e.delay&&typeof e.delay=="number"){e.delay={show:e.delay,hide:e.delay}
}return e
};
c.prototype.getDelegateOptions=function(){var e={};
var f=this.getDefaults();
this._options&&d.each(this._options,function(g,h){if(f[g]!=h){e[g]=h
}});
return e
};
c.prototype.enter=function(f){var e=f instanceof this.constructor?f:d(f.currentTarget).data("bs."+this.type);
if(!e){e=new this.constructor(f.currentTarget,this.getDelegateOptions());
d(f.currentTarget).data("bs."+this.type,e)
}if(f instanceof d.Event){e.inState[f.type=="focusin"?"focus":"hover"]=true
}if(e.tip().hasClass("in")||e.hoverState=="in"){e.hoverState="in";
return
}clearTimeout(e.timeout);
e.hoverState="in";
if(!e.options.delay||!e.options.delay.show){return e.show()
}e.timeout=setTimeout(function(){if(e.hoverState=="in"){e.show()
}},e.options.delay.show)
};
c.prototype.isInStateTrue=function(){for(var e in this.inState){if(this.inState[e]){return true
}}return false
};
c.prototype.leave=function(f){var e=f instanceof this.constructor?f:d(f.currentTarget).data("bs."+this.type);
if(!e){e=new this.constructor(f.currentTarget,this.getDelegateOptions());
d(f.currentTarget).data("bs."+this.type,e)
}if(f instanceof d.Event){e.inState[f.type=="focusout"?"focus":"hover"]=false
}if(e.isInStateTrue()){return
}clearTimeout(e.timeout);
e.hoverState="out";
if(!e.options.delay||!e.options.delay.hide){return e.hide()
}e.timeout=setTimeout(function(){if(e.hoverState=="out"){e.hide()
}},e.options.delay.hide)
};
c.prototype.show=function(){var p=d.Event("show.bs."+this.type);
if(this.hasContent()&&this.enabled){this.$element.trigger(p);
var q=d.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);
if(p.isDefaultPrevented()||!q){return
}var o=this;
var m=this.tip();
var h=this.getUID(this.type);
this.setContent();
m.attr("id",h);
this.$element.attr("aria-describedby",h);
if(this.options.animation){m.addClass("fade")
}var l=typeof this.options.placement=="function"?this.options.placement.call(this,m[0],this.$element[0]):this.options.placement;
var t=/\s?auto?\s?/i;
var u=t.test(l);
if(u){l=l.replace(t,"")||"top"
}m.detach().css({top:0,left:0,display:"block"}).addClass(l).data("bs."+this.type,this);
this.options.container?m.appendTo(this.options.container):m.insertAfter(this.$element);
this.$element.trigger("inserted.bs."+this.type);
var r=this.getPosition();
var f=m[0].offsetWidth;
var n=m[0].offsetHeight;
if(u){var k=l;
var s=this.getPosition(this.$viewport);
l=l=="bottom"&&r.bottom+n>s.bottom?"top":l=="top"&&r.top-n<s.top?"bottom":l=="right"&&r.right+f>s.width?"left":l=="left"&&r.left-f<s.left?"right":l;
m.removeClass(k).addClass(l)
}var j=this.getCalculatedOffset(l,r,f,n);
this.applyPlacement(j,l);
var g=function(){var e=o.hoverState;
o.$element.trigger("shown.bs."+o.type);
o.hoverState=null;
if(e=="out"){o.leave(o)
}};
d.support.transition&&this.$tip.hasClass("fade")?m.one("bsTransitionEnd",g).emulateTransitionEnd(c.TRANSITION_DURATION):g()
}};
c.prototype.applyPlacement=function(k,l){var m=this.tip();
var g=m[0].offsetWidth;
var r=m[0].offsetHeight;
var f=parseInt(m.css("margin-top"),10);
var j=parseInt(m.css("margin-left"),10);
if(isNaN(f)){f=0
}if(isNaN(j)){j=0
}k.top+=f;
k.left+=j;
d.offset.setOffset(m[0],d.extend({using:function(s){m.css({top:Math.round(s.top),left:Math.round(s.left)})
}},k),0);
m.addClass("in");
var e=m[0].offsetWidth;
var n=m[0].offsetHeight;
if(l=="top"&&n!=r){k.top=k.top+r-n
}var q=this.getViewportAdjustedDelta(l,k,e,n);
if(q.left){k.left+=q.left
}else{k.top+=q.top
}var o=/top|bottom/.test(l);
var h=o?q.left*2-g+e:q.top*2-r+n;
var p=o?"offsetWidth":"offsetHeight";
m.offset(k);
this.replaceArrow(h,m[0][p],o)
};
c.prototype.replaceArrow=function(g,e,f){this.arrow().css(f?"left":"top",50*(1-g/e)+"%").css(f?"top":"left","")
};
c.prototype.setContent=function(){var f=this.tip();
var e=this.getTitle();
f.find(".tooltip-inner")[this.options.html?"html":"text"](e);
f.removeClass("fade in top bottom left right")
};
c.prototype.hide=function(k){var g=this;
var j=d(this.$tip);
var h=d.Event("hide.bs."+this.type);
function f(){if(g.hoverState!="in"){j.detach()
}if(g.$element){g.$element.removeAttr("aria-describedby").trigger("hidden.bs."+g.type)
}k&&k()
}this.$element.trigger(h);
if(h.isDefaultPrevented()){return
}j.removeClass("in");
d.support.transition&&j.hasClass("fade")?j.one("bsTransitionEnd",f).emulateTransitionEnd(c.TRANSITION_DURATION):f();
this.hoverState=null;
return this
};
c.prototype.fixTitle=function(){var e=this.$element;
if(e.attr("title")||typeof e.attr("data-original-title")!="string"){e.attr("data-original-title",e.attr("title")||"").attr("title","")
}};
c.prototype.hasContent=function(){return this.getTitle()
};
c.prototype.getPosition=function(g){g=g||this.$element;
var j=g[0];
var f=j.tagName=="BODY";
var h=j.getBoundingClientRect();
if(h.width==null){h=d.extend({},h,{width:h.right-h.left,height:h.bottom-h.top})
}var l=window.SVGElement&&j instanceof window.SVGElement;
var m=f?{top:0,left:0}:(l?null:g.offset());
var e={scroll:f?document.documentElement.scrollTop||document.body.scrollTop:g.scrollTop()};
var k=f?{width:d(window).width(),height:d(window).height()}:null;
return d.extend({},h,e,k,m)
};
c.prototype.getCalculatedOffset=function(e,h,f,g){return e=="bottom"?{top:h.top+h.height,left:h.left+h.width/2-f/2}:e=="top"?{top:h.top-g,left:h.left+h.width/2-f/2}:e=="left"?{top:h.top+h.height/2-g/2,left:h.left-f}:{top:h.top+h.height/2-g/2,left:h.left+h.width}
};
c.prototype.getViewportAdjustedDelta=function(h,l,e,k){var n={top:0,left:0};
if(!this.$viewport){return n
}var g=this.options.viewport&&this.options.viewport.padding||0;
var m=this.getPosition(this.$viewport);
if(/right|left/.test(h)){var o=l.top-g-m.scroll;
var j=l.top+g-m.scroll+k;
if(o<m.top){n.top=m.top-o
}else{if(j>m.top+m.height){n.top=m.top+m.height-j
}}}else{var p=l.left-g;
var f=l.left+g+e;
if(p<m.left){n.left=m.left-p
}else{if(f>m.right){n.left=m.left+m.width-f
}}}return n
};
c.prototype.getTitle=function(){var g;
var e=this.$element;
var f=this.options;
g=e.attr("data-original-title")||(typeof f.title=="function"?f.title.call(e[0]):f.title);
return g
};
c.prototype.getUID=function(e){do{e+=~~(Math.random()*1000000)
}while(document.getElementById(e));
return e
};
c.prototype.tip=function(){if(!this.$tip){this.$tip=d(this.options.template);
if(this.$tip.length!=1){throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!")
}}return this.$tip
};
c.prototype.arrow=function(){return(this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow"))
};
c.prototype.enable=function(){this.enabled=true
};
c.prototype.disable=function(){this.enabled=false
};
c.prototype.toggleEnabled=function(){this.enabled=!this.enabled
};
c.prototype.toggle=function(g){var f=this;
if(g){f=d(g.currentTarget).data("bs."+this.type);
if(!f){f=new this.constructor(g.currentTarget,this.getDelegateOptions());
d(g.currentTarget).data("bs."+this.type,f)
}}if(g){f.inState.click=!f.inState.click;
if(f.isInStateTrue()){f.enter(f)
}else{f.leave(f)
}}else{f.tip().hasClass("in")?f.leave(f):f.enter(f)
}};
c.prototype.destroy=function(){var e=this;
clearTimeout(this.timeout);
this.hide(function(){e.$element.off("."+e.type).removeData("bs."+e.type);
if(e.$tip){e.$tip.detach()
}e.$tip=null;
e.$arrow=null;
e.$viewport=null;
e.$element=null
})
};
function b(e){return this.each(function(){var h=d(this);
var g=h.data("bs.tooltip");
var f=typeof e=="object"&&e;
if(!g&&/destroy|hide/.test(e)){return
}if(!g){h.data("bs.tooltip",(g=new c(this,f)))
}if(typeof e=="string"){g[e]()
}})
}var a=d.fn.tooltip;
d.fn.tooltip=b;
d.fn.tooltip.Constructor=c;
d.fn.tooltip.noConflict=function(){d.fn.tooltip=a;
return this
}
}(jQuery);
+function(d){var c=function(f,e){this.init("popover",f,e)
};
if(!d.fn.tooltip){throw new Error("Popover requires tooltip.js")
}c.VERSION="3.3.7";
c.DEFAULTS=d.extend({},d.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'});
c.prototype=d.extend({},d.fn.tooltip.Constructor.prototype);
c.prototype.constructor=c;
c.prototype.getDefaults=function(){return c.DEFAULTS
};
c.prototype.setContent=function(){var g=this.tip();
var f=this.getTitle();
var e=this.getContent();
g.find(".popover-title")[this.options.html?"html":"text"](f);
g.find(".popover-content").children().detach().end()[this.options.html?(typeof e=="string"?"html":"append"):"text"](e);
g.removeClass("fade top bottom left right in");
if(!g.find(".popover-title").html()){g.find(".popover-title").hide()
}};
c.prototype.hasContent=function(){return this.getTitle()||this.getContent()
};
c.prototype.getContent=function(){var e=this.$element;
var f=this.options;
return e.attr("data-content")||(typeof f.content=="function"?f.content.call(e[0]):f.content)
};
c.prototype.arrow=function(){return(this.$arrow=this.$arrow||this.tip().find(".arrow"))
};
function b(e){return this.each(function(){var h=d(this);
var g=h.data("bs.popover");
var f=typeof e=="object"&&e;
if(!g&&/destroy|hide/.test(e)){return
}if(!g){h.data("bs.popover",(g=new c(this,f)))
}if(typeof e=="string"){g[e]()
}})
}var a=d.fn.popover;
d.fn.popover=b;
d.fn.popover.Constructor=c;
d.fn.popover.noConflict=function(){d.fn.popover=a;
return this
}
}(jQuery);
(function(a){if(typeof define==="function"&&define.amd){define(["jquery"],a)
}else{if(typeof exports!=="undefined"){module.exports=a(require("jquery"))
}else{a(jQuery)
}}}(function(a){var b=window.Slick||{};
b=(function(){var c=0;
function d(g,h){var f=this,e;
f.defaults={accessibility:true,adaptiveHeight:false,appendArrows:a(g),appendDots:a(g),arrows:true,asNavFor:null,prevArrow:'<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',nextArrow:'<button class="slick-next" aria-label="Next" type="button">Next</button>',autoplay:false,autoplaySpeed:3000,centerMode:false,centerPadding:"50px",cssEase:"ease",customPaging:function(k,j){return a('<button type="button" />').text(j+1)
},dots:false,dotsClass:"slick-dots",draggable:true,easing:"linear",edgeFriction:0.35,fade:false,focusOnSelect:false,focusOnChange:false,infinite:true,initialSlide:0,lazyLoad:"ondemand",mobileFirst:false,pauseOnHover:true,pauseOnFocus:true,pauseOnDotsHover:false,respondTo:"window",responsive:null,rows:1,rtl:false,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:true,swipeToSlide:false,touchMove:true,touchThreshold:5,useCSS:true,useTransform:true,variableWidth:false,vertical:false,verticalSwiping:false,waitForAnimate:true,zIndex:1000};
f.initials={animating:false,dragging:false,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,scrolling:false,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:false,slideOffset:0,swipeLeft:null,swiping:false,$list:null,touchObject:{},transformsEnabled:false,unslicked:false};
a.extend(f,f.initials);
f.activeBreakpoint=null;
f.animType=null;
f.animProp=null;
f.breakpoints=[];
f.breakpointSettings=[];
f.cssTransitions=false;
f.focussed=false;
f.interrupted=false;
f.hidden="hidden";
f.paused=true;
f.positionProp=null;
f.respondTo=null;
f.rowCount=1;
f.shouldClick=true;
f.$slider=a(g);
f.$slidesCache=null;
f.transformType=null;
f.transitionType=null;
f.visibilityChange="visibilitychange";
f.windowWidth=0;
f.windowTimer=null;
e=a(g).data("slick")||{};
f.options=a.extend({},f.defaults,h,e);
f.currentSlide=f.options.initialSlide;
f.originalSettings=f.options;
if(typeof document.mozHidden!=="undefined"){f.hidden="mozHidden";
f.visibilityChange="mozvisibilitychange"
}else{if(typeof document.webkitHidden!=="undefined"){f.hidden="webkitHidden";
f.visibilityChange="webkitvisibilitychange"
}}f.autoPlay=a.proxy(f.autoPlay,f);
f.autoPlayClear=a.proxy(f.autoPlayClear,f);
f.autoPlayIterator=a.proxy(f.autoPlayIterator,f);
f.changeSlide=a.proxy(f.changeSlide,f);
f.clickHandler=a.proxy(f.clickHandler,f);
f.selectHandler=a.proxy(f.selectHandler,f);
f.setPosition=a.proxy(f.setPosition,f);
f.swipeHandler=a.proxy(f.swipeHandler,f);
f.dragHandler=a.proxy(f.dragHandler,f);
f.keyHandler=a.proxy(f.keyHandler,f);
f.instanceUid=c++;
f.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/;
f.registerBreakpoints();
f.init(true)
}return d
}());
b.prototype.activateADA=function(){var c=this;
c.$slideTrack.find(".slick-active").attr({"aria-hidden":"false"}).find("a, input, button, select").attr({tabindex:"0"})
};
b.prototype.addSlide=b.prototype.slickAdd=function(c,e,f){var d=this;
if(typeof(e)==="boolean"){f=e;
e=null
}else{if(e<0||(e>=d.slideCount)){return false
}}d.unload();
if(typeof(e)==="number"){if(e===0&&d.$slides.length===0){a(c).appendTo(d.$slideTrack)
}else{if(f){a(c).insertBefore(d.$slides.eq(e))
}else{a(c).insertAfter(d.$slides.eq(e))
}}}else{if(f===true){a(c).prependTo(d.$slideTrack)
}else{a(c).appendTo(d.$slideTrack)
}}d.$slides=d.$slideTrack.children(this.options.slide);
d.$slideTrack.children(this.options.slide).detach();
d.$slideTrack.append(d.$slides);
d.$slides.each(function(g,h){a(h).attr("data-slick-index",g)
});
d.$slidesCache=d.$slides;
d.reinit()
};
b.prototype.animateHeight=function(){var d=this;
if(d.options.slidesToShow===1&&d.options.adaptiveHeight===true&&d.options.vertical===false){var c=d.$slides.eq(d.currentSlide).outerHeight(true);
d.$list.animate({height:c},d.options.speed)
}};
b.prototype.animateSlide=function(f,e){var d={},c=this;
c.animateHeight();
if(c.options.rtl===true&&c.options.vertical===false){f=-f
}if(c.transformsEnabled===false){if(c.options.vertical===false){c.$slideTrack.animate({left:f},c.options.speed,c.options.easing,e)
}else{c.$slideTrack.animate({top:f},c.options.speed,c.options.easing,e)
}}else{if(c.cssTransitions===false){if(c.options.rtl===true){c.currentLeft=-(c.currentLeft)
}a({animStart:c.currentLeft}).animate({animStart:f},{duration:c.options.speed,easing:c.options.easing,step:function(g){g=Math.ceil(g);
if(c.options.vertical===false){d[c.animType]="translate("+g+"px, 0px)";
c.$slideTrack.css(d)
}else{d[c.animType]="translate(0px,"+g+"px)";
c.$slideTrack.css(d)
}},complete:function(){if(e){e.call()
}}})
}else{c.applyTransition();
f=Math.ceil(f);
if(c.options.vertical===false){d[c.animType]="translate3d("+f+"px, 0px, 0px)"
}else{d[c.animType]="translate3d(0px,"+f+"px, 0px)"
}c.$slideTrack.css(d);
if(e){setTimeout(function(){c.disableTransition();
e.call()
},c.options.speed)
}}}};
b.prototype.getNavTarget=function(){var d=this,c=d.options.asNavFor;
if(c&&c!==null){c=a(c).not(d.$slider)
}return c
};
b.prototype.asNavFor=function(e){var d=this,c=d.getNavTarget();
if(c!==null&&typeof c==="object"){c.each(function(){var f=a(this).slick("getSlick");
if(!f.unslicked){f.slideHandler(e,true)
}})
}};
b.prototype.applyTransition=function(c){var d=this,e={};
if(d.options.fade===false){e[d.transitionType]=d.transformType+" "+d.options.speed+"ms "+d.options.cssEase
}else{e[d.transitionType]="opacity "+d.options.speed+"ms "+d.options.cssEase
}if(d.options.fade===false){d.$slideTrack.css(e)
}else{d.$slides.eq(c).css(e)
}};
b.prototype.autoPlay=function(){var c=this;
c.autoPlayClear();
if(c.slideCount>c.options.slidesToShow){c.autoPlayTimer=setInterval(c.autoPlayIterator,c.options.autoplaySpeed)
}};
b.prototype.autoPlayClear=function(){var c=this;
if(c.autoPlayTimer){clearInterval(c.autoPlayTimer)
}};
b.prototype.autoPlayIterator=function(){var c=this,d=c.currentSlide+c.options.slidesToScroll;
if(!c.paused&&!c.interrupted&&!c.focussed){if(c.options.infinite===false){if(c.direction===1&&(c.currentSlide+1)===(c.slideCount-1)){c.direction=0
}else{if(c.direction===0){d=c.currentSlide-c.options.slidesToScroll;
if(c.currentSlide-1===0){c.direction=1
}}}}c.slideHandler(d)
}};
b.prototype.buildArrows=function(){var c=this;
if(c.options.arrows===true){c.$prevArrow=a(c.options.prevArrow).addClass("slick-arrow");
c.$nextArrow=a(c.options.nextArrow).addClass("slick-arrow");
if(c.slideCount>c.options.slidesToShow){c.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex");
c.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex");
if(c.htmlExpr.test(c.options.prevArrow)){c.$prevArrow.prependTo(c.options.appendArrows)
}if(c.htmlExpr.test(c.options.nextArrow)){c.$nextArrow.appendTo(c.options.appendArrows)
}if(c.options.infinite!==true){c.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")
}}else{c.$prevArrow.add(c.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"})
}}};
b.prototype.buildDots=function(){var d=this,e,c;
if(d.options.dots===true&&d.slideCount>d.options.slidesToShow){d.$slider.addClass("slick-dotted");
c=a("<ul />").addClass(d.options.dotsClass);
for(e=0;
e<=d.getDotCount();
e+=1){c.append(a("<li />").append(d.options.customPaging.call(this,d,e)))
}d.$dots=c.appendTo(d.options.appendDots);
d.$dots.find("li").first().addClass("slick-active")
}};
b.prototype.buildOut=function(){var c=this;
c.$slides=c.$slider.children(c.options.slide+":not(.slick-cloned)").addClass("slick-slide");
c.slideCount=c.$slides.length;
c.$slides.each(function(d,e){a(e).attr("data-slick-index",d).data("originalStyling",a(e).attr("style")||"")
});
c.$slider.addClass("slick-slider");
c.$slideTrack=(c.slideCount===0)?a('<div class="slick-track"/>').appendTo(c.$slider):c.$slides.wrapAll('<div class="slick-track"/>').parent();
c.$list=c.$slideTrack.wrap('<div class="slick-list"/>').parent();
c.$slideTrack.css("opacity",0);
if(c.options.centerMode===true||c.options.swipeToSlide===true){c.options.slidesToScroll=1
}a("img[data-lazy]",c.$slider).not("[src]").addClass("slick-loading");
c.setupInfinite();
c.buildArrows();
c.buildDots();
c.updateDots();
c.setSlideClasses(typeof c.currentSlide==="number"?c.currentSlide:0);
if(c.options.draggable===true){c.$list.addClass("draggable")
}};
b.prototype.buildRows=function(){var n=this,m,l,j,d,k,h,e;
d=document.createDocumentFragment();
h=n.$slider.children();
if(n.options.rows>0){e=n.options.slidesPerRow*n.options.rows;
k=Math.ceil(h.length/e);
for(m=0;
m<k;
m++){var f=document.createElement("div");
for(l=0;
l<n.options.rows;
l++){var o=document.createElement("div");
for(j=0;
j<n.options.slidesPerRow;
j++){var g=(m*e+((l*n.options.slidesPerRow)+j));
if(h.get(g)){o.appendChild(h.get(g))
}}f.appendChild(o)
}d.appendChild(f)
}n.$slider.empty().append(d);
n.$slider.children().children().children().css({width:(100/n.options.slidesPerRow)+"%",display:"inline-block"})
}};
b.prototype.checkResponsive=function(h,k){var l=this,j,c,e,f=false;
var g=l.$slider.width();
var d=window.innerWidth||a(window).width();
if(l.respondTo==="window"){e=d
}else{if(l.respondTo==="slider"){e=g
}else{if(l.respondTo==="min"){e=Math.min(d,g)
}}}if(l.options.responsive&&l.options.responsive.length&&l.options.responsive!==null){c=null;
for(j in l.breakpoints){if(l.breakpoints.hasOwnProperty(j)){if(l.originalSettings.mobileFirst===false){if(e<l.breakpoints[j]){c=l.breakpoints[j]
}}else{if(e>l.breakpoints[j]){c=l.breakpoints[j]
}}}}if(c!==null){if(l.activeBreakpoint!==null){if(c!==l.activeBreakpoint||k){l.activeBreakpoint=c;
if(l.breakpointSettings[c]==="unslick"){l.unslick(c)
}else{l.options=a.extend({},l.originalSettings,l.breakpointSettings[c]);
if(h===true){l.currentSlide=l.options.initialSlide
}l.refresh(h)
}f=c
}}else{l.activeBreakpoint=c;
if(l.breakpointSettings[c]==="unslick"){l.unslick(c)
}else{l.options=a.extend({},l.originalSettings,l.breakpointSettings[c]);
if(h===true){l.currentSlide=l.options.initialSlide
}l.refresh(h)
}f=c
}}else{if(l.activeBreakpoint!==null){l.activeBreakpoint=null;
l.options=l.originalSettings;
if(h===true){l.currentSlide=l.options.initialSlide
}l.refresh(h);
f=c
}}if(!h&&f!==false){l.$slider.trigger("breakpoint",[l,f])
}}};
b.prototype.changeSlide=function(g,k){var e=this,c=a(g.currentTarget),j,f,h;
if(c.is("a")){g.preventDefault()
}if(!c.is("li")){c=c.closest("li")
}h=(e.slideCount%e.options.slidesToScroll!==0);
j=h?0:(e.slideCount-e.currentSlide)%e.options.slidesToScroll;
switch(g.data.message){case"previous":f=j===0?e.options.slidesToScroll:e.options.slidesToShow-j;
if(e.slideCount>e.options.slidesToShow){e.slideHandler(e.currentSlide-f,false,k)
}break;
case"next":f=j===0?e.options.slidesToScroll:j;
if(e.slideCount>e.options.slidesToShow){e.slideHandler(e.currentSlide+f,false,k)
}break;
case"index":var d=g.data.index===0?0:g.data.index||c.index()*e.options.slidesToScroll;
e.slideHandler(e.checkNavigable(d),false,k);
c.children().trigger("focus");
break;
default:return
}};
b.prototype.checkNavigable=function(d){var c=this,e,f;
e=c.getNavigableIndexes();
f=0;
if(d>e[e.length-1]){d=e[e.length-1]
}else{for(var g in e){if(d<e[g]){d=f;
break
}f=e[g]
}}return d
};
b.prototype.cleanUpEvents=function(){var c=this;
if(c.options.dots&&c.$dots!==null){a("li",c.$dots).off("click.slick",c.changeSlide).off("mouseenter.slick",a.proxy(c.interrupt,c,true)).off("mouseleave.slick",a.proxy(c.interrupt,c,false));
if(c.options.accessibility===true){c.$dots.off("keydown.slick",c.keyHandler)
}}c.$slider.off("focus.slick blur.slick");
if(c.options.arrows===true&&c.slideCount>c.options.slidesToShow){c.$prevArrow&&c.$prevArrow.off("click.slick",c.changeSlide);
c.$nextArrow&&c.$nextArrow.off("click.slick",c.changeSlide);
if(c.options.accessibility===true){c.$prevArrow&&c.$prevArrow.off("keydown.slick",c.keyHandler);
c.$nextArrow&&c.$nextArrow.off("keydown.slick",c.keyHandler)
}}c.$list.off("touchstart.slick mousedown.slick",c.swipeHandler);
c.$list.off("touchmove.slick mousemove.slick",c.swipeHandler);
c.$list.off("touchend.slick mouseup.slick",c.swipeHandler);
c.$list.off("touchcancel.slick mouseleave.slick",c.swipeHandler);
c.$list.off("click.slick",c.clickHandler);
a(document).off(c.visibilityChange,c.visibility);
c.cleanUpSlideEvents();
if(c.options.accessibility===true){c.$list.off("keydown.slick",c.keyHandler)
}if(c.options.focusOnSelect===true){a(c.$slideTrack).children().off("click.slick",c.selectHandler)
}a(window).off("orientationchange.slick.slick-"+c.instanceUid,c.orientationChange);
a(window).off("resize.slick.slick-"+c.instanceUid,c.resize);
a("[draggable!=true]",c.$slideTrack).off("dragstart",c.preventDefault);
a(window).off("load.slick.slick-"+c.instanceUid,c.setPosition)
};
b.prototype.cleanUpSlideEvents=function(){var c=this;
c.$list.off("mouseenter.slick",a.proxy(c.interrupt,c,true));
c.$list.off("mouseleave.slick",a.proxy(c.interrupt,c,false))
};
b.prototype.cleanUpRows=function(){var d=this,c;
if(d.options.rows>0){c=d.$slides.children().children();
c.removeAttr("style");
d.$slider.empty().append(c)
}};
b.prototype.clickHandler=function(d){var c=this;
if(c.shouldClick===false){d.stopImmediatePropagation();
d.stopPropagation();
d.preventDefault()
}};
b.prototype.destroy=function(d){var c=this;
c.autoPlayClear();
c.touchObject={};
c.cleanUpEvents();
a(".slick-cloned",c.$slider).detach();
if(c.$dots){c.$dots.remove()
}if(c.$prevArrow&&c.$prevArrow.length){c.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display","");
if(c.htmlExpr.test(c.options.prevArrow)){c.$prevArrow.remove()
}}if(c.$nextArrow&&c.$nextArrow.length){c.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display","");
if(c.htmlExpr.test(c.options.nextArrow)){c.$nextArrow.remove()
}}if(c.$slides){c.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){a(this).attr("style",a(this).data("originalStyling"))
});
c.$slideTrack.children(this.options.slide).detach();
c.$slideTrack.detach();
c.$list.detach();
c.$slider.append(c.$slides)
}c.cleanUpRows();
c.$slider.removeClass("slick-slider");
c.$slider.removeClass("slick-initialized");
c.$slider.removeClass("slick-dotted");
c.unslicked=true;
if(!d){c.$slider.trigger("destroy",[c])
}};
b.prototype.disableTransition=function(c){var d=this,e={};
e[d.transitionType]="";
if(d.options.fade===false){d.$slideTrack.css(e)
}else{d.$slides.eq(c).css(e)
}};
b.prototype.fadeSlide=function(d,e){var c=this;
if(c.cssTransitions===false){c.$slides.eq(d).css({zIndex:c.options.zIndex});
c.$slides.eq(d).animate({opacity:1},c.options.speed,c.options.easing,e)
}else{c.applyTransition(d);
c.$slides.eq(d).css({opacity:1,zIndex:c.options.zIndex});
if(e){setTimeout(function(){c.disableTransition(d);
e.call()
},c.options.speed)
}}};
b.prototype.fadeSlideOut=function(d){var c=this;
if(c.cssTransitions===false){c.$slides.eq(d).animate({opacity:0,zIndex:c.options.zIndex-2},c.options.speed,c.options.easing)
}else{c.applyTransition(d);
c.$slides.eq(d).css({opacity:0,zIndex:c.options.zIndex-2})
}};
b.prototype.filterSlides=b.prototype.slickFilter=function(d){var c=this;
if(d!==null){c.$slidesCache=c.$slides;
c.unload();
c.$slideTrack.children(this.options.slide).detach();
c.$slidesCache.filter(d).appendTo(c.$slideTrack);
c.reinit()
}};
b.prototype.focusHandler=function(){var c=this;
c.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick","*",function(e){e.stopImmediatePropagation();
var d=a(this);
setTimeout(function(){if(c.options.pauseOnFocus){c.focussed=d.is(":focus");
c.autoPlay()
}},0)
})
};
b.prototype.getCurrent=b.prototype.slickCurrentSlide=function(){var c=this;
return c.currentSlide
};
b.prototype.getDotCount=function(){var d=this;
var f=0;
var c=0;
var e=0;
if(d.options.infinite===true){if(d.slideCount<=d.options.slidesToShow){++e
}else{while(f<d.slideCount){++e;
f=c+d.options.slidesToScroll;
c+=d.options.slidesToScroll<=d.options.slidesToShow?d.options.slidesToScroll:d.options.slidesToShow
}}}else{if(d.options.centerMode===true){e=d.slideCount
}else{if(!d.options.asNavFor){e=1+Math.ceil((d.slideCount-d.options.slidesToShow)/d.options.slidesToScroll)
}else{while(f<d.slideCount){++e;
f=c+d.options.slidesToScroll;
c+=d.options.slidesToScroll<=d.options.slidesToShow?d.options.slidesToScroll:d.options.slidesToShow
}}}}return e-1
};
b.prototype.getLeft=function(g){var d=this,j,e,c=0,h,f;
d.slideOffset=0;
e=d.$slides.first().outerHeight(true);
if(d.options.infinite===true){if(d.slideCount>d.options.slidesToShow){d.slideOffset=(d.slideWidth*d.options.slidesToShow)*-1;
f=-1;
if(d.options.vertical===true&&d.options.centerMode===true){if(d.options.slidesToShow===2){f=-1.5
}else{if(d.options.slidesToShow===1){f=-2
}}}c=(e*d.options.slidesToShow)*f
}if(d.slideCount%d.options.slidesToScroll!==0){if(g+d.options.slidesToScroll>d.slideCount&&d.slideCount>d.options.slidesToShow){if(g>d.slideCount){d.slideOffset=((d.options.slidesToShow-(g-d.slideCount))*d.slideWidth)*-1;
c=((d.options.slidesToShow-(g-d.slideCount))*e)*-1
}else{d.slideOffset=((d.slideCount%d.options.slidesToScroll)*d.slideWidth)*-1;
c=((d.slideCount%d.options.slidesToScroll)*e)*-1
}}}}else{if(g+d.options.slidesToShow>d.slideCount){d.slideOffset=((g+d.options.slidesToShow)-d.slideCount)*d.slideWidth;
c=((g+d.options.slidesToShow)-d.slideCount)*e
}}if(d.slideCount<=d.options.slidesToShow){d.slideOffset=0;
c=0
}if(d.options.centerMode===true&&d.slideCount<=d.options.slidesToShow){d.slideOffset=((d.slideWidth*Math.floor(d.options.slidesToShow))/2)-((d.slideWidth*d.slideCount)/2)
}else{if(d.options.centerMode===true&&d.options.infinite===true){d.slideOffset+=d.slideWidth*Math.floor(d.options.slidesToShow/2)-d.slideWidth
}else{if(d.options.centerMode===true){d.slideOffset=0;
d.slideOffset+=d.slideWidth*Math.floor(d.options.slidesToShow/2)
}}}if(d.options.vertical===false){j=((g*d.slideWidth)*-1)+d.slideOffset
}else{j=((g*e)*-1)+c
}if(d.options.variableWidth===true){if(d.slideCount<=d.options.slidesToShow||d.options.infinite===false){h=d.$slideTrack.children(".slick-slide").eq(g)
}else{h=d.$slideTrack.children(".slick-slide").eq(g+d.options.slidesToShow)
}if(d.options.rtl===true){if(h[0]){j=(d.$slideTrack.width()-h[0].offsetLeft-h.width())*-1
}else{j=0
}}else{j=h[0]?h[0].offsetLeft*-1:0
}if(d.options.centerMode===true){if(d.slideCount<=d.options.slidesToShow||d.options.infinite===false){h=d.$slideTrack.children(".slick-slide").eq(g)
}else{h=d.$slideTrack.children(".slick-slide").eq(g+d.options.slidesToShow+1)
}if(d.options.rtl===true){if(h[0]){j=(d.$slideTrack.width()-h[0].offsetLeft-h.width())*-1
}else{j=0
}}else{j=h[0]?h[0].offsetLeft*-1:0
}j+=(d.$list.width()-h.outerWidth())/2
}}return j
};
b.prototype.getOption=b.prototype.slickGetOption=function(d){var c=this;
return c.options[d]
};
b.prototype.getNavigableIndexes=function(){var f=this,g=0,d=0,e=[],c;
if(f.options.infinite===false){c=f.slideCount
}else{g=f.options.slidesToScroll*-1;
d=f.options.slidesToScroll*-1;
c=f.slideCount*2
}while(g<c){e.push(g);
g=d+f.options.slidesToScroll;
d+=f.options.slidesToScroll<=f.options.slidesToShow?f.options.slidesToScroll:f.options.slidesToShow
}return e
};
b.prototype.getSlick=function(){return this
};
b.prototype.getSlideCount=function(){var e=this,d,f,c;
c=e.options.centerMode===true?e.slideWidth*Math.floor(e.options.slidesToShow/2):0;
if(e.options.swipeToSlide===true){e.$slideTrack.find(".slick-slide").each(function(h,g){if(g.offsetLeft-c+(a(g).outerWidth()/2)>(e.swipeLeft*-1)){f=g;
return false
}});
d=Math.abs(a(f).attr("data-slick-index")-e.currentSlide)||1;
return d
}else{return e.options.slidesToScroll
}};
b.prototype.goTo=b.prototype.slickGoTo=function(c,e){var d=this;
d.changeSlide({data:{message:"index",index:parseInt(c)}},e)
};
b.prototype.init=function(c){var d=this;
if(!a(d.$slider).hasClass("slick-initialized")){a(d.$slider).addClass("slick-initialized");
d.buildRows();
d.buildOut();
d.setProps();
d.startLoad();
d.loadSlider();
d.initializeEvents();
d.updateArrows();
d.updateDots();
d.checkResponsive(true);
d.focusHandler()
}if(c){d.$slider.trigger("init",[d])
}if(d.options.accessibility===true){d.initADA()
}if(d.options.autoplay){d.paused=false;
d.autoPlay()
}};
b.prototype.initADA=function(){var e=this,d=Math.ceil(e.slideCount/e.options.slidesToShow),g=e.getNavigableIndexes().filter(function(h){return(h>=0)&&(h<e.slideCount)
});
e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"});
if(e.$dots!==null){e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function(h){var k=g.indexOf(h);
a(this).attr({role:"tabpanel",id:"slick-slide"+e.instanceUid+h,tabindex:-1});
if(k!==-1){var j="slick-slide-control"+e.instanceUid+k;
if(a("#"+j).length){a(this).attr({"aria-describedby":j})
}}});
e.$dots.attr("role","tablist").find("li").each(function(h){var j=g[h];
a(this).attr({role:"presentation"});
a(this).find("button").first().attr({role:"tab",id:"slick-slide-control"+e.instanceUid+h,"aria-controls":"slick-slide"+e.instanceUid+j,"aria-label":(h+1)+" of "+d,"aria-selected":null,tabindex:"-1"})
}).eq(e.currentSlide).find("button").attr({"aria-selected":"true",tabindex:"0"}).end()
}for(var f=e.currentSlide,c=f+e.options.slidesToShow;
f<c;
f++){if(e.options.focusOnChange){e.$slides.eq(f).attr({tabindex:"0"})
}else{e.$slides.eq(f).removeAttr("tabindex")
}}e.activateADA()
};
b.prototype.initArrowEvents=function(){var c=this;
if(c.options.arrows===true&&c.slideCount>c.options.slidesToShow){c.$prevArrow.off("click.slick").on("click.slick",{message:"previous"},c.changeSlide);
c.$nextArrow.off("click.slick").on("click.slick",{message:"next"},c.changeSlide);
if(c.options.accessibility===true){c.$prevArrow.on("keydown.slick",c.keyHandler);
c.$nextArrow.on("keydown.slick",c.keyHandler)
}}};
b.prototype.initDotEvents=function(){var c=this;
if(c.options.dots===true&&c.slideCount>c.options.slidesToShow){a("li",c.$dots).on("click.slick",{message:"index"},c.changeSlide);
if(c.options.accessibility===true){c.$dots.on("keydown.slick",c.keyHandler)
}}if(c.options.dots===true&&c.options.pauseOnDotsHover===true&&c.slideCount>c.options.slidesToShow){a("li",c.$dots).on("mouseenter.slick",a.proxy(c.interrupt,c,true)).on("mouseleave.slick",a.proxy(c.interrupt,c,false))
}};
b.prototype.initSlideEvents=function(){var c=this;
if(c.options.pauseOnHover){c.$list.on("mouseenter.slick",a.proxy(c.interrupt,c,true));
c.$list.on("mouseleave.slick",a.proxy(c.interrupt,c,false))
}};
b.prototype.initializeEvents=function(){var c=this;
c.initArrowEvents();
c.initDotEvents();
c.initSlideEvents();
c.$list.on("touchstart.slick mousedown.slick",{action:"start"},c.swipeHandler);
c.$list.on("touchmove.slick mousemove.slick",{action:"move"},c.swipeHandler);
c.$list.on("touchend.slick mouseup.slick",{action:"end"},c.swipeHandler);
c.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},c.swipeHandler);
c.$list.on("click.slick",c.clickHandler);
a(document).on(c.visibilityChange,a.proxy(c.visibility,c));
if(c.options.accessibility===true){c.$list.on("keydown.slick",c.keyHandler)
}if(c.options.focusOnSelect===true){a(c.$slideTrack).children().on("click.slick",c.selectHandler)
}a(window).on("orientationchange.slick.slick-"+c.instanceUid,a.proxy(c.orientationChange,c));
a(window).on("resize.slick.slick-"+c.instanceUid,a.proxy(c.resize,c));
a("[draggable!=true]",c.$slideTrack).on("dragstart",c.preventDefault);
a(window).on("load.slick.slick-"+c.instanceUid,c.setPosition);
a(c.setPosition)
};
b.prototype.initUI=function(){var c=this;
if(c.options.arrows===true&&c.slideCount>c.options.slidesToShow){c.$prevArrow.show();
c.$nextArrow.show()
}if(c.options.dots===true&&c.slideCount>c.options.slidesToShow){c.$dots.show()
}};
b.prototype.keyHandler=function(d){var c=this;
if(!d.target.tagName.match("TEXTAREA|INPUT|SELECT")){if(d.keyCode===37&&c.options.accessibility===true){c.changeSlide({data:{message:c.options.rtl===true?"next":"previous"}})
}else{if(d.keyCode===39&&c.options.accessibility===true){c.changeSlide({data:{message:c.options.rtl===true?"previous":"next"}})
}}}};
b.prototype.lazyLoad=function(){var k=this,f,e,l,c;
function m(n){a("img[data-lazy]",n).each(function(){var r=a(this),s=a(this).attr("data-lazy"),p=a(this).attr("data-srcset"),o=a(this).attr("data-sizes")||k.$slider.attr("data-sizes"),q=document.createElement("img");
q.onload=function(){r.animate({opacity:0},100,function(){if(p){r.attr("srcset",p);
if(o){r.attr("sizes",o)
}}r.attr("src",s).animate({opacity:1},200,function(){r.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")
});
k.$slider.trigger("lazyLoaded",[k,r,s])
})
};
q.onerror=function(){r.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error");
k.$slider.trigger("lazyLoadError",[k,r,s])
};
q.src=s
})
}if(k.options.centerMode===true){if(k.options.infinite===true){l=k.currentSlide+(k.options.slidesToShow/2+1);
c=l+k.options.slidesToShow+2
}else{l=Math.max(0,k.currentSlide-(k.options.slidesToShow/2+1));
c=2+(k.options.slidesToShow/2+1)+k.currentSlide
}}else{l=k.options.infinite?k.options.slidesToShow+k.currentSlide:k.currentSlide;
c=Math.ceil(l+k.options.slidesToShow);
if(k.options.fade===true){if(l>0){l--
}if(c<=k.slideCount){c++
}}}f=k.$slider.find(".slick-slide").slice(l,c);
if(k.options.lazyLoad==="anticipated"){var d=l-1,g=c,j=k.$slider.find(".slick-slide");
for(var h=0;
h<k.options.slidesToScroll;
h++){if(d<0){d=k.slideCount-1
}f=f.add(j.eq(d));
f=f.add(j.eq(g));
d--;
g++
}}m(f);
if(k.slideCount<=k.options.slidesToShow){e=k.$slider.find(".slick-slide");
m(e)
}else{if(k.currentSlide>=k.slideCount-k.options.slidesToShow){e=k.$slider.find(".slick-cloned").slice(0,k.options.slidesToShow);
m(e)
}else{if(k.currentSlide===0){e=k.$slider.find(".slick-cloned").slice(k.options.slidesToShow*-1);
m(e)
}}}};
b.prototype.loadSlider=function(){var c=this;
c.setPosition();
c.$slideTrack.css({opacity:1});
c.$slider.removeClass("slick-loading");
c.initUI();
if(c.options.lazyLoad==="progressive"){c.progressiveLazyLoad()
}};
b.prototype.next=b.prototype.slickNext=function(){var c=this;
c.changeSlide({data:{message:"next"}})
};
b.prototype.orientationChange=function(){var c=this;
c.checkResponsive();
c.setPosition()
};
b.prototype.pause=b.prototype.slickPause=function(){var c=this;
c.autoPlayClear();
c.paused=true
};
b.prototype.play=b.prototype.slickPlay=function(){var c=this;
c.autoPlay();
c.options.autoplay=true;
c.paused=false;
c.focussed=false;
c.interrupted=false
};
b.prototype.postSlide=function(d){var c=this;
if(!c.unslicked){c.$slider.trigger("afterChange",[c,d]);
c.animating=false;
if(c.slideCount>c.options.slidesToShow){c.setPosition()
}c.swipeLeft=null;
if(c.options.autoplay){c.autoPlay()
}if(c.options.accessibility===true){c.initADA();
if(c.options.focusOnChange){var e=a(c.$slides.get(c.currentSlide));
e.attr("tabindex",0).focus()
}}}};
b.prototype.prev=b.prototype.slickPrev=function(){var c=this;
c.changeSlide({data:{message:"previous"}})
};
b.prototype.preventDefault=function(c){c.preventDefault()
};
b.prototype.progressiveLazyLoad=function(f){f=f||1;
var e=this,d=a("img[data-lazy]",e.$slider),j,k,g,c,h;
if(d.length){j=d.first();
k=j.attr("data-lazy");
g=j.attr("data-srcset");
c=j.attr("data-sizes")||e.$slider.attr("data-sizes");
h=document.createElement("img");
h.onload=function(){if(g){j.attr("srcset",g);
if(c){j.attr("sizes",c)
}}j.attr("src",k).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading");
if(e.options.adaptiveHeight===true){e.setPosition()
}e.$slider.trigger("lazyLoaded",[e,j,k]);
e.progressiveLazyLoad()
};
h.onerror=function(){if(f<3){setTimeout(function(){e.progressiveLazyLoad(f+1)
},500)
}else{j.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error");
e.$slider.trigger("lazyLoadError",[e,j,k]);
e.progressiveLazyLoad()
}};
h.src=k
}else{e.$slider.trigger("allImagesLoaded",[e])
}};
b.prototype.refresh=function(d){var e=this,f,c;
c=e.slideCount-e.options.slidesToShow;
if(!e.options.infinite&&(e.currentSlide>c)){e.currentSlide=c
}if(e.slideCount<=e.options.slidesToShow){e.currentSlide=0
}f=e.currentSlide;
e.destroy(true);
a.extend(e,e.initials,{currentSlide:f});
e.init();
if(!d){e.changeSlide({data:{message:"index",index:f}},false)
}};
b.prototype.registerBreakpoints=function(){var e=this,d,f,c,g=e.options.responsive||null;
if(a.type(g)==="array"&&g.length){e.respondTo=e.options.respondTo||"window";
for(d in g){c=e.breakpoints.length-1;
if(g.hasOwnProperty(d)){f=g[d].breakpoint;
while(c>=0){if(e.breakpoints[c]&&e.breakpoints[c]===f){e.breakpoints.splice(c,1)
}c--
}e.breakpoints.push(f);
e.breakpointSettings[f]=g[d].settings
}}e.breakpoints.sort(function(j,h){return(e.options.mobileFirst)?j-h:h-j
})
}};
b.prototype.reinit=function(){var c=this;
c.$slides=c.$slideTrack.children(c.options.slide).addClass("slick-slide");
c.slideCount=c.$slides.length;
if(c.currentSlide>=c.slideCount&&c.currentSlide!==0){c.currentSlide=c.currentSlide-c.options.slidesToScroll
}if(c.slideCount<=c.options.slidesToShow){c.currentSlide=0
}c.registerBreakpoints();
c.setProps();
c.setupInfinite();
c.buildArrows();
c.updateArrows();
c.initArrowEvents();
c.buildDots();
c.updateDots();
c.initDotEvents();
c.cleanUpSlideEvents();
c.initSlideEvents();
c.checkResponsive(false,true);
if(c.options.focusOnSelect===true){a(c.$slideTrack).children().on("click.slick",c.selectHandler)
}c.setSlideClasses(typeof c.currentSlide==="number"?c.currentSlide:0);
c.setPosition();
c.focusHandler();
c.paused=!c.options.autoplay;
c.autoPlay();
c.$slider.trigger("reInit",[c])
};
b.prototype.resize=function(){var c=this;
if(a(window).width()!==c.windowWidth){clearTimeout(c.windowDelay);
c.windowDelay=window.setTimeout(function(){c.windowWidth=a(window).width();
c.checkResponsive();
if(!c.unslicked){c.setPosition()
}},50)
}};
b.prototype.removeSlide=b.prototype.slickRemove=function(d,f,e){var c=this;
if(typeof(d)==="boolean"){f=d;
d=f===true?0:c.slideCount-1
}else{d=f===true?--d:d
}if(c.slideCount<1||d<0||d>c.slideCount-1){return false
}c.unload();
if(e===true){c.$slideTrack.children().remove()
}else{c.$slideTrack.children(this.options.slide).eq(d).remove()
}c.$slides=c.$slideTrack.children(this.options.slide);
c.$slideTrack.children(this.options.slide).detach();
c.$slideTrack.append(c.$slides);
c.$slidesCache=c.$slides;
c.reinit()
};
b.prototype.setCSS=function(d){var e=this,f={},c,g;
if(e.options.rtl===true){d=-d
}c=e.positionProp=="left"?Math.ceil(d)+"px":"0px";
g=e.positionProp=="top"?Math.ceil(d)+"px":"0px";
f[e.positionProp]=d;
if(e.transformsEnabled===false){e.$slideTrack.css(f)
}else{f={};
if(e.cssTransitions===false){f[e.animType]="translate("+c+", "+g+")";
e.$slideTrack.css(f)
}else{f[e.animType]="translate3d("+c+", "+g+", 0px)";
e.$slideTrack.css(f)
}}};
b.prototype.setDimensions=function(){var c=this;
if(c.options.vertical===false){if(c.options.centerMode===true){c.$list.css({padding:("0px "+c.options.centerPadding)})
}}else{c.$list.height(c.$slides.first().outerHeight(true)*c.options.slidesToShow);
if(c.options.centerMode===true){c.$list.css({padding:(c.options.centerPadding+" 0px")})
}}c.listWidth=c.$list.width();
c.listHeight=c.$list.height();
if(c.options.vertical===false&&c.options.variableWidth===false){c.slideWidth=Math.ceil(c.listWidth/c.options.slidesToShow);
c.$slideTrack.width(Math.ceil((c.slideWidth*c.$slideTrack.children(".slick-slide").length)))
}else{if(c.options.variableWidth===true){c.$slideTrack.width(5000*c.slideCount)
}else{c.slideWidth=Math.ceil(c.listWidth);
c.$slideTrack.height(Math.ceil((c.$slides.first().outerHeight(true)*c.$slideTrack.children(".slick-slide").length)))
}}var d=c.$slides.first().outerWidth(true)-c.$slides.first().width();
if(c.options.variableWidth===false){c.$slideTrack.children(".slick-slide").width(c.slideWidth-d)
}};
b.prototype.setFade=function(){var c=this,d;
c.$slides.each(function(e,f){d=(c.slideWidth*e)*-1;
if(c.options.rtl===true){a(f).css({position:"relative",right:d,top:0,zIndex:c.options.zIndex-2,opacity:0})
}else{a(f).css({position:"relative",left:d,top:0,zIndex:c.options.zIndex-2,opacity:0})
}});
c.$slides.eq(c.currentSlide).css({zIndex:c.options.zIndex-1,opacity:1})
};
b.prototype.setHeight=function(){var d=this;
if(d.options.slidesToShow===1&&d.options.adaptiveHeight===true&&d.options.vertical===false){var c=d.$slides.eq(d.currentSlide).outerHeight(true);
d.$list.css("height",c)
}};
b.prototype.setOption=b.prototype.slickSetOption=function(){var d=this,c,h,g,j,f=false,e;
if(a.type(arguments[0])==="object"){g=arguments[0];
f=arguments[1];
e="multiple"
}else{if(a.type(arguments[0])==="string"){g=arguments[0];
j=arguments[1];
f=arguments[2];
if(arguments[0]==="responsive"&&a.type(arguments[1])==="array"){e="responsive"
}else{if(typeof arguments[1]!=="undefined"){e="single"
}}}}if(e==="single"){d.options[g]=j
}else{if(e==="multiple"){a.each(g,function(k,l){d.options[k]=l
})
}else{if(e==="responsive"){for(h in j){if(a.type(d.options.responsive)!=="array"){d.options.responsive=[j[h]]
}else{c=d.options.responsive.length-1;
while(c>=0){if(d.options.responsive[c].breakpoint===j[h].breakpoint){d.options.responsive.splice(c,1)
}c--
}d.options.responsive.push(j[h])
}}}}}if(f){d.unload();
d.reinit()
}};
b.prototype.setPosition=function(){var c=this;
c.setDimensions();
c.setHeight();
if(c.options.fade===false){c.setCSS(c.getLeft(c.currentSlide))
}else{c.setFade()
}c.$slider.trigger("setPosition",[c])
};
b.prototype.setProps=function(){var d=this,c=document.body.style;
d.positionProp=d.options.vertical===true?"top":"left";
if(d.positionProp==="top"){d.$slider.addClass("slick-vertical")
}else{d.$slider.removeClass("slick-vertical")
}if(c.WebkitTransition!==undefined||c.MozTransition!==undefined||c.msTransition!==undefined){if(d.options.useCSS===true){d.cssTransitions=true
}}if(d.options.fade){if(typeof d.options.zIndex==="number"){if(d.options.zIndex<3){d.options.zIndex=3
}}else{d.options.zIndex=d.defaults.zIndex
}}if(c.OTransform!==undefined){d.animType="OTransform";
d.transformType="-o-transform";
d.transitionType="OTransition";
if(c.perspectiveProperty===undefined&&c.webkitPerspective===undefined){d.animType=false
}}if(c.MozTransform!==undefined){d.animType="MozTransform";
d.transformType="-moz-transform";
d.transitionType="MozTransition";
if(c.perspectiveProperty===undefined&&c.MozPerspective===undefined){d.animType=false
}}if(c.webkitTransform!==undefined){d.animType="webkitTransform";
d.transformType="-webkit-transform";
d.transitionType="webkitTransition";
if(c.perspectiveProperty===undefined&&c.webkitPerspective===undefined){d.animType=false
}}if(c.msTransform!==undefined){d.animType="msTransform";
d.transformType="-ms-transform";
d.transitionType="msTransition";
if(c.msTransform===undefined){d.animType=false
}}if(c.transform!==undefined&&d.animType!==false){d.animType="transform";
d.transformType="transform";
d.transitionType="transition"
}d.transformsEnabled=d.options.useTransform&&(d.animType!==null&&d.animType!==false)
};
b.prototype.setSlideClasses=function(g){var f=this,c,e,j,h;
e=f.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true");
f.$slides.eq(g).addClass("slick-current");
if(f.options.centerMode===true){var d=f.options.slidesToShow%2===0?1:0;
c=Math.floor(f.options.slidesToShow/2);
if(f.options.infinite===true){if(g>=c&&g<=(f.slideCount-1)-c){f.$slides.slice(g-c+d,g+c+1).addClass("slick-active").attr("aria-hidden","false")
}else{j=f.options.slidesToShow+g;
e.slice(j-c+1+d,j+c+2).addClass("slick-active").attr("aria-hidden","false")
}if(g===0){e.eq(e.length-1-f.options.slidesToShow).addClass("slick-center")
}else{if(g===f.slideCount-1){e.eq(f.options.slidesToShow).addClass("slick-center")
}}}f.$slides.eq(g).addClass("slick-center")
}else{if(g>=0&&g<=(f.slideCount-f.options.slidesToShow)){f.$slides.slice(g,g+f.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false")
}else{if(e.length<=f.options.slidesToShow){e.addClass("slick-active").attr("aria-hidden","false")
}else{h=f.slideCount%f.options.slidesToShow;
j=f.options.infinite===true?f.options.slidesToShow+g:g;
if(f.options.slidesToShow==f.options.slidesToScroll&&(f.slideCount-g)<f.options.slidesToShow){e.slice(j-(f.options.slidesToShow-h),j+h).addClass("slick-active").attr("aria-hidden","false")
}else{e.slice(j,j+f.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false")
}}}}if(f.options.lazyLoad==="ondemand"||f.options.lazyLoad==="anticipated"){f.lazyLoad()
}};
b.prototype.setupInfinite=function(){var c=this,d,f,e;
if(c.options.fade===true){c.options.centerMode=false
}if(c.options.infinite===true&&c.options.fade===false){f=null;
if(c.slideCount>c.options.slidesToShow){if(c.options.centerMode===true){e=c.options.slidesToShow+1
}else{e=c.options.slidesToShow
}for(d=c.slideCount;
d>(c.slideCount-e);
d-=1){f=d-1;
a(c.$slides[f]).clone(true).attr("id","").attr("data-slick-index",f-c.slideCount).prependTo(c.$slideTrack).addClass("slick-cloned")
}for(d=0;
d<e+c.slideCount;
d+=1){f=d;
a(c.$slides[f]).clone(true).attr("id","").attr("data-slick-index",f+c.slideCount).appendTo(c.$slideTrack).addClass("slick-cloned")
}c.$slideTrack.find(".slick-cloned").find("[id]").each(function(){a(this).attr("id","")
})
}}};
b.prototype.interrupt=function(c){var d=this;
if(!c){d.autoPlay()
}d.interrupted=c
};
b.prototype.selectHandler=function(f){var e=this;
var d=a(f.target).is(".slick-slide")?a(f.target):a(f.target).parents(".slick-slide");
var c=parseInt(d.attr("data-slick-index"));
if(!c){c=0
}if(e.slideCount<=e.options.slidesToShow){e.slideHandler(c,false,true);
return
}e.slideHandler(c)
};
b.prototype.slideHandler=function(f,j,e){var d,m,h,k,g=null,l=this,c;
j=j||false;
if(l.animating===true&&l.options.waitForAnimate===true){return
}if(l.options.fade===true&&l.currentSlide===f){return
}if(j===false){l.asNavFor(f)
}d=f;
g=l.getLeft(d);
k=l.getLeft(l.currentSlide);
l.currentLeft=l.swipeLeft===null?k:l.swipeLeft;
if(l.options.infinite===false&&l.options.centerMode===false&&(f<0||f>l.getDotCount()*l.options.slidesToScroll)){if(l.options.fade===false){d=l.currentSlide;
if(e!==true&&l.slideCount>l.options.slidesToShow){l.animateSlide(k,function(){l.postSlide(d)
})
}else{l.postSlide(d)
}}return
}else{if(l.options.infinite===false&&l.options.centerMode===true&&(f<0||f>(l.slideCount-l.options.slidesToScroll))){if(l.options.fade===false){d=l.currentSlide;
if(e!==true&&l.slideCount>l.options.slidesToShow){l.animateSlide(k,function(){l.postSlide(d)
})
}else{l.postSlide(d)
}}return
}}if(l.options.autoplay){clearInterval(l.autoPlayTimer)
}if(d<0){if(l.slideCount%l.options.slidesToScroll!==0){m=l.slideCount-(l.slideCount%l.options.slidesToScroll)
}else{m=l.slideCount+d
}}else{if(d>=l.slideCount){if(l.slideCount%l.options.slidesToScroll!==0){m=0
}else{m=d-l.slideCount
}}else{m=d
}}l.animating=true;
l.$slider.trigger("beforeChange",[l,l.currentSlide,m]);
h=l.currentSlide;
l.currentSlide=m;
l.setSlideClasses(l.currentSlide);
if(l.options.asNavFor){c=l.getNavTarget();
c=c.slick("getSlick");
if(c.slideCount<=c.options.slidesToShow){c.setSlideClasses(l.currentSlide)
}}l.updateDots();
l.updateArrows();
if(l.options.fade===true){if(e!==true){l.fadeSlideOut(h);
l.fadeSlide(m,function(){l.postSlide(m)
})
}else{l.postSlide(m)
}l.animateHeight();
return
}if(e!==true&&l.slideCount>l.options.slidesToShow){l.animateSlide(g,function(){l.postSlide(m)
})
}else{l.postSlide(m)
}};
b.prototype.startLoad=function(){var c=this;
if(c.options.arrows===true&&c.slideCount>c.options.slidesToShow){c.$prevArrow.hide();
c.$nextArrow.hide()
}if(c.options.dots===true&&c.slideCount>c.options.slidesToShow){c.$dots.hide()
}c.$slider.addClass("slick-loading")
};
b.prototype.swipeDirection=function(){var c,f,e,g,d=this;
c=d.touchObject.startX-d.touchObject.curX;
f=d.touchObject.startY-d.touchObject.curY;
e=Math.atan2(f,c);
g=Math.round(e*180/Math.PI);
if(g<0){g=360-Math.abs(g)
}if((g<=45)&&(g>=0)){return(d.options.rtl===false?"left":"right")
}if((g<=360)&&(g>=315)){return(d.options.rtl===false?"left":"right")
}if((g>=135)&&(g<=225)){return(d.options.rtl===false?"right":"left")
}if(d.options.verticalSwiping===true){if((g>=35)&&(g<=135)){return"down"
}else{return"up"
}}return"vertical"
};
b.prototype.swipeEnd=function(e){var d=this,c,f;
d.dragging=false;
d.swiping=false;
if(d.scrolling){d.scrolling=false;
return false
}d.interrupted=false;
d.shouldClick=(d.touchObject.swipeLength>10)?false:true;
if(d.touchObject.curX===undefined){return false
}if(d.touchObject.edgeHit===true){d.$slider.trigger("edge",[d,d.swipeDirection()])
}if(d.touchObject.swipeLength>=d.touchObject.minSwipe){f=d.swipeDirection();
switch(f){case"left":case"down":c=d.options.swipeToSlide?d.checkNavigable(d.currentSlide+d.getSlideCount()):d.currentSlide+d.getSlideCount();
d.currentDirection=0;
break;
case"right":case"up":c=d.options.swipeToSlide?d.checkNavigable(d.currentSlide-d.getSlideCount()):d.currentSlide-d.getSlideCount();
d.currentDirection=1;
break;
default:}if(f!="vertical"){d.slideHandler(c);
d.touchObject={};
d.$slider.trigger("swipe",[d,f])
}}else{if(d.touchObject.startX!==d.touchObject.curX){d.slideHandler(d.currentSlide);
d.touchObject={}
}}};
b.prototype.swipeHandler=function(d){var c=this;
if((c.options.swipe===false)||("ontouchend" in document&&c.options.swipe===false)){return
}else{if(c.options.draggable===false&&d.type.indexOf("mouse")!==-1){return
}}c.touchObject.fingerCount=d.originalEvent&&d.originalEvent.touches!==undefined?d.originalEvent.touches.length:1;
c.touchObject.minSwipe=c.listWidth/c.options.touchThreshold;
if(c.options.verticalSwiping===true){c.touchObject.minSwipe=c.listHeight/c.options.touchThreshold
}switch(d.data.action){case"start":c.swipeStart(d);
break;
case"move":c.swipeMove(d);
break;
case"end":c.swipeEnd(d);
break
}};
b.prototype.swipeMove=function(c){var l=this,g=false,e,j,f,k,h,d;
h=c.originalEvent!==undefined?c.originalEvent.touches:null;
if(!l.dragging||l.scrolling||h&&h.length!==1){return false
}e=l.getLeft(l.currentSlide);
l.touchObject.curX=h!==undefined?h[0].pageX:c.clientX;
l.touchObject.curY=h!==undefined?h[0].pageY:c.clientY;
l.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(l.touchObject.curX-l.touchObject.startX,2)));
d=Math.round(Math.sqrt(Math.pow(l.touchObject.curY-l.touchObject.startY,2)));
if(!l.options.verticalSwiping&&!l.swiping&&d>4){l.scrolling=true;
return false
}if(l.options.verticalSwiping===true){l.touchObject.swipeLength=d
}j=l.swipeDirection();
if(c.originalEvent!==undefined&&l.touchObject.swipeLength>4){l.swiping=true;
c.preventDefault()
}k=(l.options.rtl===false?1:-1)*(l.touchObject.curX>l.touchObject.startX?1:-1);
if(l.options.verticalSwiping===true){k=l.touchObject.curY>l.touchObject.startY?1:-1
}f=l.touchObject.swipeLength;
l.touchObject.edgeHit=false;
if(l.options.infinite===false){if((l.currentSlide===0&&j==="right")||(l.currentSlide>=l.getDotCount()&&j==="left")){f=l.touchObject.swipeLength*l.options.edgeFriction;
l.touchObject.edgeHit=true
}}if(l.options.vertical===false){l.swipeLeft=e+f*k
}else{l.swipeLeft=e+(f*(l.$list.height()/l.listWidth))*k
}if(l.options.verticalSwiping===true){l.swipeLeft=e+f*k
}if(l.options.fade===true||l.options.touchMove===false){return false
}if(l.animating===true){l.swipeLeft=null;
return false
}l.setCSS(l.swipeLeft)
};
b.prototype.swipeStart=function(d){var c=this,e;
c.interrupted=true;
if(c.touchObject.fingerCount!==1||c.slideCount<=c.options.slidesToShow){c.touchObject={};
return false
}if(d.originalEvent!==undefined&&d.originalEvent.touches!==undefined){e=d.originalEvent.touches[0]
}c.touchObject.startX=c.touchObject.curX=e!==undefined?e.pageX:d.clientX;
c.touchObject.startY=c.touchObject.curY=e!==undefined?e.pageY:d.clientY;
c.dragging=true
};
b.prototype.unfilterSlides=b.prototype.slickUnfilter=function(){var c=this;
if(c.$slidesCache!==null){c.unload();
c.$slideTrack.children(this.options.slide).detach();
c.$slidesCache.appendTo(c.$slideTrack);
c.reinit()
}};
b.prototype.unload=function(){var c=this;
a(".slick-cloned",c.$slider).remove();
if(c.$dots){c.$dots.remove()
}if(c.$prevArrow&&c.htmlExpr.test(c.options.prevArrow)){c.$prevArrow.remove()
}if(c.$nextArrow&&c.htmlExpr.test(c.options.nextArrow)){c.$nextArrow.remove()
}c.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")
};
b.prototype.unslick=function(d){var c=this;
c.$slider.trigger("unslick",[c,d]);
c.destroy()
};
b.prototype.updateArrows=function(){var d=this,c;
c=Math.floor(d.options.slidesToShow/2);
if(d.options.arrows===true&&d.slideCount>d.options.slidesToShow&&!d.options.infinite){d.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false");
d.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false");
if(d.currentSlide===0){d.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true");
d.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")
}else{if(d.currentSlide>=d.slideCount-d.options.slidesToShow&&d.options.centerMode===false){d.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true");
d.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")
}else{if(d.currentSlide>=d.slideCount-1&&d.options.centerMode===true){d.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true");
d.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")
}}}}};
b.prototype.updateDots=function(){var c=this;
if(c.$dots!==null){c.$dots.find("li").removeClass("slick-active").end();
c.$dots.find("li").eq(Math.floor(c.currentSlide/c.options.slidesToScroll)).addClass("slick-active")
}};
b.prototype.visibility=function(){var c=this;
if(c.options.autoplay){if(document[c.hidden]){c.interrupted=true
}else{c.interrupted=false
}}};
a.fn.slick=function(){var f=this,h=arguments[0],e=Array.prototype.slice.call(arguments,1),c=f.length,g,d;
for(g=0;
g<c;
g++){if(typeof h=="object"||typeof h=="undefined"){f[g].slick=new b(f[g],h)
}else{d=f[g].slick[h].apply(f[g].slick,e)
}if(typeof d!="undefined"){return d
}}return f
}
}));
/*! Hammer.JS - v2.0.7 - 2016-04-22
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2016 Jorik Tangelder;
 * Licensed under the MIT license */
(function(bh,am,a2,B){var u=["","webkit","Moz","MS","ms","o"];
var E=am.createElement("div");
var Z="function";
var T=Math.round;
var aj=Math.abs;
var bj=Date.now;
function l(bA,bB,bz){return setTimeout(J(bA,bz),bB)
}function ad(bz,bB,bA){if(Array.isArray(bz)){bw(bz,bA[bB],bA);
return true
}return false
}function bw(bC,bB,bA){var bz;
if(!bC){return
}if(bC.forEach){bC.forEach(bB,bA)
}else{if(bC.length!==B){bz=0;
while(bz<bC.length){bB.call(bA,bC[bz],bz,bC);
bz++
}}else{for(bz in bC){bC.hasOwnProperty(bz)&&bB.call(bA,bC[bz],bz,bC)
}}}}function bs(bC,bz,bB){var bA="DEPRECATED METHOD: "+bz+"\n"+bB+" AT \n";
return function(){var bF=new Error("get-stack-trace");
var bD=bF&&bF.stack?bF.stack.replace(/^[^\(]+?[\n$]/gm,"").replace(/^\s+at\s+/gm,"").replace(/^Object.<anonymous>\s*\(/gm,"{anonymous}()@"):"Unknown Stack Trace";
var bE=bh.console&&(bh.console.warn||bh.console.log);
if(bE){bE.call(bh.console,bA,bD)
}return bC.apply(this,arguments)
}
}var be;
if(typeof Object.assign!=="function"){be=function be(bD){if(bD===B||bD===null){throw new TypeError("Cannot convert undefined or null to object")
}var bA=Object(bD);
for(var bB=1;
bB<arguments.length;
bB++){var bC=arguments[bB];
if(bC!==B&&bC!==null){for(var bz in bC){if(bC.hasOwnProperty(bz)){bA[bz]=bC[bz]
}}}}return bA
}
}else{be=Object.assign
}var aL=bs(function aL(bz,bC,bD){var bB=Object.keys(bC);
var bA=0;
while(bA<bB.length){if(!bD||(bD&&bz[bB[bA]]===B)){bz[bB[bA]]=bC[bB[bA]]
}bA++
}return bz
},"extend","Use `assign`.");
var G=bs(function G(bz,bA){return aL(bz,bA,true)
},"merge","Use `assign`.");
function H(bD,bB,bA){var bz=bB.prototype,bC;
bC=bD.prototype=Object.create(bz);
bC.constructor=bD;
bC._super=bz;
if(bA){be(bC,bA)
}}function J(bB,bz){return function bA(){return bB.apply(bz,arguments)
}
}function ao(bA,bz){if(typeof bA==Z){return bA.apply(bz?bz[0]||B:B,bz)
}return bA
}function aJ(bA,bz){return(bA===B)?bz:bA
}function aK(bB,bz,bA){bw(aX(bz),function(bC){bB.addEventListener(bC,bA,false)
})
}function O(bB,bz,bA){bw(aX(bz),function(bC){bB.removeEventListener(bC,bA,false)
})
}function o(bA,bz){while(bA){if(bA==bz){return true
}bA=bA.parentNode
}return false
}function k(bA,bz){return bA.indexOf(bz)>-1
}function aX(bz){return bz.trim().split(/\s+/g)
}function A(bC,bB,bA){if(bC.indexOf&&!bA){return bC.indexOf(bB)
}else{var bz=0;
while(bz<bC.length){if((bA&&bC[bz][bA]==bB)||(!bA&&bC[bz]===bB)){return bz
}bz++
}return -1
}}function aa(bz){return Array.prototype.slice.call(bz,0)
}function bl(bG,bD,bC){var bB=[];
var bz=[];
var bA=0;
while(bA<bG.length){var bF=bD?bG[bA][bD]:bG[bA];
if(A(bz,bF)<0){bB.push(bG[bA])
}bz[bA]=bF;
bA++
}if(bC){if(!bD){bB=bB.sort()
}else{bB=bB.sort(function bE(bI,bH){return bI[bD]>bH[bD]
})
}}return bB
}function at(bD,bC){var bB,bE;
var bz=bC[0].toUpperCase()+bC.slice(1);
var bA=0;
while(bA<u.length){bB=u[bA];
bE=(bB)?bB+bz:bC;
if(bE in bD){return bE
}bA++
}return B
}var t=1;
function aM(){return t++
}function L(bz){var bA=bz.ownerDocument||bz;
return(bA.defaultView||bA.parentWindow||bh)
}var v=/mobile|tablet|ip(ad|hone|od)|android/i;
var b=("ontouchstart" in bh);
var ai=at(bh,"PointerEvent")!==B;
var aD=b&&v.test(navigator.userAgent);
var aH="touch";
var q="pen";
var Q="mouse";
var U="kinect";
var bq=25;
var ba=1;
var a6=2;
var g=4;
var w=8;
var aC=1;
var m=2;
var C=4;
var ah=8;
var a7=16;
var bm=m|C;
var aB=ah|a7;
var P=bm|aB;
var ak=["x","y"];
var ar=["clientX","clientY"];
function a(bA,bB){var bz=this;
this.manager=bA;
this.callback=bB;
this.element=bA.element;
this.target=bA.options.inputTarget;
this.domHandler=function(bC){if(ao(bA.options.enable,[bA])){bz.handler(bC)
}};
this.init()
}a.prototype={handler:function(){},init:function(){this.evEl&&aK(this.element,this.evEl,this.domHandler);
this.evTarget&&aK(this.target,this.evTarget,this.domHandler);
this.evWin&&aK(L(this.element),this.evWin,this.domHandler)
},destroy:function(){this.evEl&&O(this.element,this.evEl,this.domHandler);
this.evTarget&&O(this.target,this.evTarget,this.domHandler);
this.evWin&&O(L(this.element),this.evWin,this.domHandler)
}};
function y(bB){var bA;
var bz=bB.options.inputClass;
if(bz){bA=bz
}else{if(ai){bA=aS
}else{if(aD){bA=az
}else{if(!b){bA=aA
}else{bA=bo
}}}}return new (bA)(bB,ay)
}function ay(bE,bD,bB){var bA=bB.pointers.length;
var bC=bB.changedPointers.length;
var bz=(bD&ba&&(bA-bC===0));
var bF=(bD&(g|w)&&(bA-bC===0));
bB.isFirst=!!bz;
bB.isFinal=!!bF;
if(bz){bE.session={}
}bB.eventType=bD;
bb(bE,bB);
bE.emit("hammer.input",bB);
bE.recognize(bB);
bE.session.prevInput=bB
}function bb(bD,bI){var bG=bD.session;
var bJ=bI.pointers;
var bH=bJ.length;
if(!bG.firstInput){bG.firstInput=p(bI)
}if(bH>1&&!bG.firstMultiple){bG.firstMultiple=p(bI)
}else{if(bH===1){bG.firstMultiple=false
}}var bB=bG.firstInput;
var bE=bG.firstMultiple;
var bA=bE?bE.center:bB.center;
var bz=bI.center=S(bJ);
bI.timeStamp=bj();
bI.deltaTime=bI.timeStamp-bB.timeStamp;
bI.angle=av(bA,bz);
bI.distance=br(bA,bz);
ax(bG,bI);
bI.offsetDirection=aP(bI.deltaX,bI.deltaY);
var bC=W(bI.deltaTime,bI.deltaX,bI.deltaY);
bI.overallVelocityX=bC.x;
bI.overallVelocityY=bC.y;
bI.overallVelocity=(aj(bC.x)>aj(bC.y))?bC.x:bC.y;
bI.scale=bE?e(bE.pointers,bJ):1;
bI.rotation=bE?bk(bE.pointers,bJ):0;
bI.maxPointers=!bG.prevInput?bI.pointers.length:((bI.pointers.length>bG.prevInput.maxPointers)?bI.pointers.length:bG.prevInput.maxPointers);
ab(bG,bI);
var bF=bD.element;
if(o(bI.srcEvent.target,bF)){bF=bI.srcEvent.target
}bI.target=bF
}function ax(bD,bB){var bA=bB.center;
var bE=bD.offsetDelta||{};
var bz=bD.prevDelta||{};
var bC=bD.prevInput||{};
if(bB.eventType===ba||bC.eventType===g){bz=bD.prevDelta={x:bC.deltaX||0,y:bC.deltaY||0};
bE=bD.offsetDelta={x:bA.x,y:bA.y}
}bB.deltaX=bz.x+(bA.x-bE.x);
bB.deltaY=bz.y+(bA.y-bE.y)
}function ab(bD,bG){var bJ=bD.lastInterval||bG,bC=bG.timeStamp-bJ.timeStamp,bA,bH,bE,bF;
if(bG.eventType!=w&&(bC>bq||bJ.velocity===B)){var bB=bG.deltaX-bJ.deltaX;
var bz=bG.deltaY-bJ.deltaY;
var bI=W(bC,bB,bz);
bH=bI.x;
bE=bI.y;
bA=(aj(bI.x)>aj(bI.y))?bI.x:bI.y;
bF=aP(bB,bz);
bD.lastInterval=bG
}else{bA=bJ.velocity;
bH=bJ.velocityX;
bE=bJ.velocityY;
bF=bJ.direction
}bG.velocity=bA;
bG.velocityX=bH;
bG.velocityY=bE;
bG.direction=bF
}function p(bA){var bz=[];
var bB=0;
while(bB<bA.pointers.length){bz[bB]={clientX:T(bA.pointers[bB].clientX),clientY:T(bA.pointers[bB].clientY)};
bB++
}return{timeStamp:bj(),pointers:bz,center:S(bz),deltaX:bA.deltaX,deltaY:bA.deltaY}
}function S(bB){var bA=bB.length;
if(bA===1){return{x:T(bB[0].clientX),y:T(bB[0].clientY)}
}var bz=0,bD=0,bC=0;
while(bC<bA){bz+=bB[bC].clientX;
bD+=bB[bC].clientY;
bC++
}return{x:T(bz/bA),y:T(bD/bA)}
}function W(bA,bz,bB){return{x:bz/bA||0,y:bB/bA||0}
}function aP(bz,bA){if(bz===bA){return aC
}if(aj(bz)>=aj(bA)){return bz<0?m:C
}return bA<0?ah:a7
}function br(bC,bB,bA){if(!bA){bA=ak
}var bz=bB[bA[0]]-bC[bA[0]],bD=bB[bA[1]]-bC[bA[1]];
return Math.sqrt((bz*bz)+(bD*bD))
}function av(bC,bB,bA){if(!bA){bA=ak
}var bz=bB[bA[0]]-bC[bA[0]],bD=bB[bA[1]]-bC[bA[1]];
return Math.atan2(bD,bz)*180/Math.PI
}function bk(bA,bz){return av(bz[1],bz[0],ar)+av(bA[1],bA[0],ar)
}function e(bA,bz){return br(bz[0],bz[1],ar)/br(bA[0],bA[1],ar)
}var aY={mousedown:ba,mousemove:a6,mouseup:g};
var D="mousedown";
var x="mousemove mouseup";
function aA(){this.evEl=D;
this.evWin=x;
this.pressed=false;
a.apply(this,arguments)
}H(aA,a,{handler:function V(bA){var bz=aY[bA.type];
if(bz&ba&&bA.button===0){this.pressed=true
}if(bz&a6&&bA.which!==1){bz=g
}if(!this.pressed){return
}if(bz&g){this.pressed=false
}this.callback(this.manager,bz,{pointers:[bA],changedPointers:[bA],pointerType:Q,srcEvent:bA})
}});
var aN={pointerdown:ba,pointermove:a6,pointerup:g,pointercancel:w,pointerout:w};
var I={2:aH,3:q,4:Q,5:U};
var bg="pointerdown";
var h="pointermove pointerup pointercancel";
if(bh.MSPointerEvent&&!bh.PointerEvent){bg="MSPointerDown";
h="MSPointerMove MSPointerUp MSPointerCancel"
}function aS(){this.evEl=bg;
this.evWin=h;
a.apply(this,arguments);
this.store=(this.manager.session.pointerEvents=[])
}H(aS,a,{handler:function a9(bE){var bC=this.store;
var bG=false;
var bB=bE.type.toLowerCase().replace("ms","");
var bD=aN[bB];
var bz=I[bE.pointerType]||bE.pointerType;
var bA=(bz==aH);
var bF=A(bC,bE.pointerId,"pointerId");
if(bD&ba&&(bE.button===0||bA)){if(bF<0){bC.push(bE);
bF=bC.length-1
}}else{if(bD&(g|w)){bG=true
}}if(bF<0){return
}bC[bF]=bE;
this.callback(this.manager,bD,{pointers:bC,changedPointers:[bE],pointerType:bz,srcEvent:bE});
if(bG){bC.splice(bF,1)
}}});
var an={touchstart:ba,touchmove:a6,touchend:g,touchcancel:w};
var aQ="touchstart";
var aU="touchstart touchmove touchend touchcancel";
function z(){this.evTarget=aQ;
this.evWin=aU;
this.started=false;
a.apply(this,arguments)
}H(z,a,{handler:function aR(bA){var bz=an[bA.type];
if(bz===ba){this.started=true
}if(!this.started){return
}var bB=c.call(this,bA,bz);
if(bz&(g|w)&&bB[0].length-bB[1].length===0){this.started=false
}this.callback(this.manager,bz,{pointers:bB[0],changedPointers:bB[1],pointerType:aH,srcEvent:bA})
}});
function c(bB,bA){var bz=aa(bB.touches);
var bC=aa(bB.changedTouches);
if(bA&(g|w)){bz=bl(bz.concat(bC),"identifier",true)
}return[bz,bC]
}var aV={touchstart:ba,touchmove:a6,touchend:g,touchcancel:w};
var aF="touchstart touchmove touchend touchcancel";
function az(){this.evTarget=aF;
this.targetIds={};
a.apply(this,arguments)
}H(az,a,{handler:function Y(bA){var bz=aV[bA.type];
var bB=aG.call(this,bA,bz);
if(!bB){return
}this.callback(this.manager,bz,{pointers:bB[0],changedPointers:bB[1],pointerType:aH,srcEvent:bA})
}});
function aG(bF,bE){var bA=aa(bF.touches);
var bz=this.targetIds;
if(bE&(ba|a6)&&bA.length===1){bz[bA[0].identifier]=true;
return[bA,bA]
}var bB,bD,bG=aa(bF.changedTouches),bH=[],bC=this.target;
bD=bA.filter(function(bI){return o(bI.target,bC)
});
if(bE===ba){bB=0;
while(bB<bD.length){bz[bD[bB].identifier]=true;
bB++
}}bB=0;
while(bB<bG.length){if(bz[bG[bB].identifier]){bH.push(bG[bB])
}if(bE&(g|w)){delete bz[bG[bB].identifier]
}bB++
}if(!bH.length){return
}return[bl(bD.concat(bH),"identifier",true),bH]
}var F=2500;
var f=25;
function bo(){a.apply(this,arguments);
var bz=J(this.handler,this);
this.touch=new az(this.manager,bz);
this.mouse=new aA(this.manager,bz);
this.primaryTouch=null;
this.lastTouches=[]
}H(bo,a,{handler:function a8(bA,bD,bC){var bz=(bC.pointerType==aH),bB=(bC.pointerType==Q);
if(bB&&bC.sourceCapabilities&&bC.sourceCapabilities.firesTouchEvents){return
}if(bz){bc.call(this,bD,bC)
}else{if(bB&&X.call(this,bC)){return
}}this.callback(bA,bD,bC)
},destroy:function n(){this.touch.destroy();
this.mouse.destroy()
}});
function bc(bz,bA){if(bz&ba){this.primaryTouch=bA.changedPointers[0].identifier;
by.call(this,bA)
}else{if(bz&(g|w)){by.call(this,bA)
}}}function by(bC){var bD=bC.changedPointers[0];
if(bD.identifier===this.primaryTouch){var bB={x:bD.clientX,y:bD.clientY};
this.lastTouches.push(bB);
var bz=this.lastTouches;
var bA=function(){var bE=bz.indexOf(bB);
if(bE>-1){bz.splice(bE,1)
}};
setTimeout(bA,F)
}}function X(bE){var bz=bE.srcEvent.clientX,bF=bE.srcEvent.clientY;
for(var bD=0;
bD<this.lastTouches.length;
bD++){var bC=this.lastTouches[bD];
var bB=Math.abs(bz-bC.x),bA=Math.abs(bF-bC.y);
if(bB<=f&&bA<=f){return true
}}return false
}var au=at(E.style,"touchAction");
var bu=au!==B;
var bv="compute";
var ap="auto";
var bp="manipulation";
var j="none";
var a4="pan-x";
var a3="pan-y";
var ag=bi();
function bt(bz,bA){this.manager=bz;
this.set(bA)
}bt.prototype={set:function(bz){if(bz==bv){bz=this.compute()
}if(bu&&this.manager.element.style&&ag[bz]){this.manager.element.style[au]=bz
}this.actions=bz.toLowerCase().trim()
},update:function(){this.set(this.manager.options.touchAction)
},compute:function(){var bz=[];
bw(this.manager.recognizers,function(bA){if(ao(bA.options.enable,[bA])){bz=bz.concat(bA.getTouchAction())
}});
return bx(bz.join(" "))
},preventDefaults:function(bI){var bD=bI.srcEvent;
var bH=bI.offsetDirection;
if(this.manager.session.prevented){bD.preventDefault();
return
}var bE=this.actions;
var bB=k(bE,j)&&!ag[j];
var bA=k(bE,a3)&&!ag[a3];
var bC=k(bE,a4)&&!ag[a4];
if(bB){var bz=bI.pointers.length===1;
var bG=bI.distance<2;
var bF=bI.deltaTime<250;
if(bz&&bG&&bF){return
}}if(bC&&bA){return
}if(bB||(bA&&bH&bm)||(bC&&bH&aB)){return this.preventSrc(bD)
}},preventSrc:function(bz){this.manager.session.prevented=true;
bz.preventDefault()
}};
function bx(bB){if(k(bB,j)){return j
}var bA=k(bB,a4);
var bz=k(bB,a3);
if(bA&&bz){return j
}if(bA||bz){return bA?a4:a3
}if(k(bB,bp)){return bp
}return ap
}function bi(){if(!bu){return false
}var bz={};
var bA=bh.CSS&&bh.CSS.supports;
["auto","manipulation","pan-y","pan-x","pan-x pan-y","none"].forEach(function(bB){bz[bB]=bA?bh.CSS.supports("touch-action",bB):true
});
return bz
}var ae=1;
var aq=2;
var al=4;
var aT=8;
var s=aT;
var N=16;
var aO=32;
function M(bz){this.options=be({},this.defaults,bz||{});
this.id=aM();
this.manager=null;
this.options.enable=aJ(this.options.enable,true);
this.state=ae;
this.simultaneous={};
this.requireFail=[]
}M.prototype={defaults:{},set:function(bz){be(this.options,bz);
this.manager&&this.manager.touchAction.update();
return this
},recognizeWith:function(bz){if(ad(bz,"recognizeWith",this)){return this
}var bA=this.simultaneous;
bz=af(bz,this);
if(!bA[bz.id]){bA[bz.id]=bz;
bz.recognizeWith(this)
}return this
},dropRecognizeWith:function(bz){if(ad(bz,"dropRecognizeWith",this)){return this
}bz=af(bz,this);
delete this.simultaneous[bz.id];
return this
},requireFailure:function(bz){if(ad(bz,"requireFailure",this)){return this
}var bA=this.requireFail;
bz=af(bz,this);
if(A(bA,bz)===-1){bA.push(bz);
bz.requireFailure(this)
}return this
},dropRequireFailure:function(bA){if(ad(bA,"dropRequireFailure",this)){return this
}bA=af(bA,this);
var bz=A(this.requireFail,bA);
if(bz>-1){this.requireFail.splice(bz,1)
}return this
},hasRequireFailures:function(){return this.requireFail.length>0
},canRecognizeWith:function(bz){return !!this.simultaneous[bz.id]
},emit:function(bA){var bz=this;
var bC=this.state;
function bB(bD){bz.manager.emit(bD,bA)
}if(bC<aT){bB(bz.options.event+bf(bC))
}bB(bz.options.event);
if(bA.additionalEvent){bB(bA.additionalEvent)
}if(bC>=aT){bB(bz.options.event+bf(bC))
}},tryEmit:function(bz){if(this.canEmit()){return this.emit(bz)
}this.state=aO
},canEmit:function(){var bz=0;
while(bz<this.requireFail.length){if(!(this.requireFail[bz].state&(aO|ae))){return false
}bz++
}return true
},recognize:function(bz){var bA=be({},bz);
if(!ao(this.options.enable,[this,bA])){this.reset();
this.state=aO;
return
}if(this.state&(s|N|aO)){this.state=ae
}this.state=this.process(bA);
if(this.state&(aq|al|aT|N)){this.tryEmit(bA)
}},process:function(bz){},getTouchAction:function(){},reset:function(){}};
function bf(bz){if(bz&N){return"cancel"
}else{if(bz&aT){return"end"
}else{if(bz&al){return"move"
}else{if(bz&aq){return"start"
}}}}return""
}function a5(bz){if(bz==a7){return"down"
}else{if(bz==ah){return"up"
}else{if(bz==m){return"left"
}else{if(bz==C){return"right"
}}}}return""
}function af(bB,bz){var bA=bz.manager;
if(bA){return bA.get(bB)
}return bB
}function aE(){M.apply(this,arguments)
}H(aE,M,{defaults:{pointers:1},attrTest:function(bz){var bA=this.options.pointers;
return bA===0||bz.pointers.length===bA
},process:function(bA){var bC=this.state;
var bB=bA.eventType;
var bz=bC&(aq|al);
var bD=this.attrTest(bA);
if(bz&&(bB&w||!bD)){return bC|N
}else{if(bz||bD){if(bB&g){return bC|aT
}else{if(!(bC&aq)){return aq
}}return bC|al
}}return aO
}});
function r(){aE.apply(this,arguments);
this.pX=null;
this.pY=null
}H(r,aE,{defaults:{event:"pan",threshold:10,pointers:1,direction:P},getTouchAction:function(){var bz=this.options.direction;
var bA=[];
if(bz&bm){bA.push(a3)
}if(bz&aB){bA.push(a4)
}return bA
},directionTest:function(bB){var bC=this.options;
var bA=true;
var bF=bB.distance;
var bD=bB.direction;
var bz=bB.deltaX;
var bE=bB.deltaY;
if(!(bD&bC.direction)){if(bC.direction&bm){bD=(bz===0)?aC:(bz<0)?m:C;
bA=bz!=this.pX;
bF=Math.abs(bB.deltaX)
}else{bD=(bE===0)?aC:(bE<0)?ah:a7;
bA=bE!=this.pY;
bF=Math.abs(bB.deltaY)
}}bB.direction=bD;
return bA&&bF>bC.threshold&&bD&bC.direction
},attrTest:function(bz){return aE.prototype.attrTest.call(this,bz)&&(this.state&aq||(!(this.state&aq)&&this.directionTest(bz)))
},emit:function(bz){this.pX=bz.deltaX;
this.pY=bz.deltaY;
var bA=a5(bz.direction);
if(bA){bz.additionalEvent=this.options.event+bA
}this._super.emit.call(this,bz)
}});
function bd(){aE.apply(this,arguments)
}H(bd,aE,{defaults:{event:"pinch",threshold:0,pointers:2},getTouchAction:function(){return[j]
},attrTest:function(bz){return this._super.attrTest.call(this,bz)&&(Math.abs(bz.scale-1)>this.options.threshold||this.state&aq)
},emit:function(bA){if(bA.scale!==1){var bz=bA.scale<1?"in":"out";
bA.additionalEvent=this.options.event+bz
}this._super.emit.call(this,bA)
}});
function aW(){M.apply(this,arguments);
this._timer=null;
this._input=null
}H(aW,M,{defaults:{event:"press",pointers:1,time:251,threshold:9},getTouchAction:function(){return[ap]
},process:function(bA){var bB=this.options;
var bD=bA.pointers.length===bB.pointers;
var bz=bA.distance<bB.threshold;
var bC=bA.deltaTime>bB.time;
this._input=bA;
if(!bz||!bD||(bA.eventType&(g|w)&&!bC)){this.reset()
}else{if(bA.eventType&ba){this.reset();
this._timer=l(function(){this.state=s;
this.tryEmit()
},bB.time,this)
}else{if(bA.eventType&g){return s
}}}return aO
},reset:function(){clearTimeout(this._timer)
},emit:function(bz){if(this.state!==s){return
}if(bz&&(bz.eventType&g)){this.manager.emit(this.options.event+"up",bz)
}else{this._input.timeStamp=bj();
this.manager.emit(this.options.event,this._input)
}}});
function aI(){aE.apply(this,arguments)
}H(aI,aE,{defaults:{event:"rotate",threshold:0,pointers:2},getTouchAction:function(){return[j]
},attrTest:function(bz){return this._super.attrTest.call(this,bz)&&(Math.abs(bz.rotation)>this.options.threshold||this.state&aq)
}});
function a0(){aE.apply(this,arguments)
}H(a0,aE,{defaults:{event:"swipe",threshold:10,velocity:0.3,direction:bm|aB,pointers:1},getTouchAction:function(){return r.prototype.getTouchAction.call(this)
},attrTest:function(bz){var bB=this.options.direction;
var bA;
if(bB&(bm|aB)){bA=bz.overallVelocity
}else{if(bB&bm){bA=bz.overallVelocityX
}else{if(bB&aB){bA=bz.overallVelocityY
}}}return this._super.attrTest.call(this,bz)&&bB&bz.offsetDirection&&bz.distance>this.options.threshold&&bz.maxPointers==this.options.pointers&&aj(bA)>this.options.velocity&&bz.eventType&g
},emit:function(bz){var bA=a5(bz.offsetDirection);
if(bA){this.manager.emit(this.options.event+bA,bz)
}this.manager.emit(this.options.event,bz)
}});
function aw(){M.apply(this,arguments);
this.pTime=false;
this.pCenter=false;
this._timer=null;
this._input=null;
this.count=0
}H(aw,M,{defaults:{event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:9,posThreshold:10},getTouchAction:function(){return[bp]
},process:function(bB){var bD=this.options;
var bG=bB.pointers.length===bD.pointers;
var bA=bB.distance<bD.threshold;
var bC=bB.deltaTime<bD.time;
this.reset();
if((bB.eventType&ba)&&(this.count===0)){return this.failTimeout()
}if(bA&&bC&&bG){if(bB.eventType!=g){return this.failTimeout()
}var bF=this.pTime?(bB.timeStamp-this.pTime<bD.interval):true;
var bE=!this.pCenter||br(this.pCenter,bB.center)<bD.posThreshold;
this.pTime=bB.timeStamp;
this.pCenter=bB.center;
if(!bE||!bF){this.count=1
}else{this.count+=1
}this._input=bB;
var bz=this.count%bD.taps;
if(bz===0){if(!this.hasRequireFailures()){return s
}else{this._timer=l(function(){this.state=s;
this.tryEmit()
},bD.interval,this);
return aq
}}}return aO
},failTimeout:function(){this._timer=l(function(){this.state=aO
},this.options.interval,this);
return aO
},reset:function(){clearTimeout(this._timer)
},emit:function(){if(this.state==s){this._input.tapCount=this.count;
this.manager.emit(this.options.event,this._input)
}}});
function R(bA,bz){bz=bz||{};
bz.recognizers=aJ(bz.recognizers,R.defaults.preset);
return new bn(bA,bz)
}R.VERSION="2.0.7";
R.defaults={domEvents:false,touchAction:bv,enable:true,inputTarget:null,inputClass:null,preset:[[aI,{enable:false}],[bd,{enable:false},["rotate"]],[a0,{direction:bm}],[r,{direction:bm},["swipe"]],[aw],[aw,{event:"doubletap",taps:2},["tap"]],[aW]],cssProps:{userSelect:"none",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}};
var K=1;
var a1=2;
function bn(bA,bz){this.options=be({},R.defaults,bz||{});
this.options.inputTarget=this.options.inputTarget||bA;
this.handlers={};
this.session={};
this.recognizers=[];
this.oldCssProps={};
this.element=bA;
this.input=y(this);
this.touchAction=new bt(this,this.options.touchAction);
ac(this,true);
bw(this.options.recognizers,function(bC){var bB=this.add(new (bC[0])(bC[1]));
bC[2]&&bB.recognizeWith(bC[2]);
bC[3]&&bB.requireFailure(bC[3])
},this)
}bn.prototype={set:function(bz){be(this.options,bz);
if(bz.touchAction){this.touchAction.update()
}if(bz.inputTarget){this.input.destroy();
this.input.target=bz.inputTarget;
this.input.init()
}return this
},stop:function(bz){this.session.stopped=bz?a1:K
},recognize:function(bD){var bE=this.session;
if(bE.stopped){return
}this.touchAction.preventDefaults(bD);
var bz;
var bA=this.recognizers;
var bC=bE.curRecognizer;
if(!bC||(bC&&bC.state&s)){bC=bE.curRecognizer=null
}var bB=0;
while(bB<bA.length){bz=bA[bB];
if(bE.stopped!==a1&&(!bC||bz==bC||bz.canRecognizeWith(bC))){bz.recognize(bD)
}else{bz.reset()
}if(!bC&&bz.state&(aq|al|aT)){bC=bE.curRecognizer=bz
}bB++
}},get:function(bz){if(bz instanceof M){return bz
}var bA=this.recognizers;
for(var bB=0;
bB<bA.length;
bB++){if(bA[bB].options.event==bz){return bA[bB]
}}return null
},add:function(bz){if(ad(bz,"add",this)){return this
}var bA=this.get(bz.options.event);
if(bA){this.remove(bA)
}this.recognizers.push(bz);
bz.manager=this;
this.touchAction.update();
return bz
},remove:function(bz){if(ad(bz,"remove",this)){return this
}bz=this.get(bz);
if(bz){var bA=this.recognizers;
var bB=A(bA,bz);
if(bB!==-1){bA.splice(bB,1);
this.touchAction.update()
}}return this
},on:function(bA,bB){if(bA===B){return
}if(bB===B){return
}var bz=this.handlers;
bw(aX(bA),function(bC){bz[bC]=bz[bC]||[];
bz[bC].push(bB)
});
return this
},off:function(bA,bB){if(bA===B){return
}var bz=this.handlers;
bw(aX(bA),function(bC){if(!bB){delete bz[bC]
}else{bz[bC]&&bz[bC].splice(A(bz[bC],bB),1)
}});
return this
},emit:function(bB,bC){if(this.options.domEvents){d(bB,bC)
}var bz=this.handlers[bB]&&this.handlers[bB].slice();
if(!bz||!bz.length){return
}bC.type=bB;
bC.preventDefault=function(){bC.srcEvent.preventDefault()
};
var bA=0;
while(bA<bz.length){bz[bA](bC);
bA++
}},destroy:function(){this.element&&ac(this,false);
this.handlers={};
this.session={};
this.input.destroy();
this.element=null
}};
function ac(bA,bB){var bz=bA.element;
if(!bz.style){return
}var bC;
bw(bA.options.cssProps,function(bE,bD){bC=at(bz.style,bD);
if(bB){bA.oldCssProps[bC]=bz.style[bC];
bz.style[bC]=bE
}else{bz.style[bC]=bA.oldCssProps[bC]||""
}});
if(!bB){bA.oldCssProps={}
}}function d(bz,bA){var bB=am.createEvent("Event");
bB.initEvent(bz,true,true);
bB.gesture=bA;
bA.target.dispatchEvent(bB)
}be(R,{INPUT_START:ba,INPUT_MOVE:a6,INPUT_END:g,INPUT_CANCEL:w,STATE_POSSIBLE:ae,STATE_BEGAN:aq,STATE_CHANGED:al,STATE_ENDED:aT,STATE_RECOGNIZED:s,STATE_CANCELLED:N,STATE_FAILED:aO,DIRECTION_NONE:aC,DIRECTION_LEFT:m,DIRECTION_RIGHT:C,DIRECTION_UP:ah,DIRECTION_DOWN:a7,DIRECTION_HORIZONTAL:bm,DIRECTION_VERTICAL:aB,DIRECTION_ALL:P,Manager:bn,Input:a,TouchAction:bt,TouchInput:az,MouseInput:aA,PointerEventInput:aS,TouchMouseInput:bo,SingleTouchInput:z,Recognizer:M,AttrRecognizer:aE,Tap:aw,Pan:r,Swipe:a0,Pinch:bd,Rotate:aI,Press:aW,on:aK,off:O,each:bw,merge:G,extend:aL,assign:be,inherit:H,bindFn:J,prefixed:at});
var aZ=(typeof bh!=="undefined"?bh:(typeof self!=="undefined"?self:{}));
aZ.Hammer=R;
if(typeof define==="function"&&define.amd){define(function(){return R
})
}else{if(typeof module!="undefined"&&module.exports){module.exports=R
}else{bh[a2]=R
}}})(window,document,"Hammer");
(function(a,b){if(typeof define==="function"&&define.amd){define("sifter",b)
}else{if(typeof exports==="object"){module.exports=b()
}else{a.Sifter=b()
}}}(this,function(){var h=function(k,l){this.items=k;
this.settings=l||{diacritics:true}
};
h.prototype.tokenize=function(o){o=b(String(o||"").toLowerCase());
if(!o||!o.length){return[]
}var k,r,m,l;
var p=[];
var q=o.split(/ +/);
for(k=0,r=q.length;
k<r;
k++){m=e(q[k]);
if(this.settings.diacritics){for(l in j){if(j.hasOwnProperty(l)){m=m.replace(new RegExp(l,"g"),j[l])
}}}p.push({string:q[k],regex:new RegExp(m,"i")})
}return p
};
h.prototype.iterator=function(k,m){var l;
if(c(k)){l=Array.prototype.forEach||function(q){for(var o=0,p=this.length;
o<p;
o++){q(this[o],o,this)
}}
}else{l=function(o){for(var n in this){if(this.hasOwnProperty(n)){o(this[n],n,this)
}}}
}l.apply(k,[m])
};
h.prototype.getScoreFunction=function(r,s){var q,m,o,p,l;
q=this;
r=q.prepareSearch(r,s);
o=r.tokens;
m=r.options.fields;
p=o.length;
l=r.options.nesting;
var n=function(u,t){var v,w;
if(!u){return 0
}u=String(u||"");
w=u.search(t.regex);
if(w===-1){return 0
}v=t.string.length/u.length;
if(w===0){v+=0.5
}return v
};
var k=(function(){var t=m.length;
if(!t){return function(){return 0
}
}if(t===1){return function(u,v){return n(a(v,m[0],l),u)
}
}return function(v,x){for(var u=0,w=0;
u<t;
u++){w+=n(a(x,m[u],l),v)
}return w/t
}
})();
if(!p){return function(){return 0
}
}if(p===1){return function(t){return k(o[0],t)
}
}if(r.options.conjunction==="and"){return function(v){var w;
for(var t=0,u=0;
t<p;
t++){w=k(o[t],v);
if(w<=0){return 0
}u+=w
}return u/p
}
}else{return function(v){for(var t=0,u=0;
t<p;
t++){u+=k(o[t],v)
}return u/p
}
}};
h.prototype.getSortFunction=function(w,x){var r,k,v,t,s,m,u,p,l,o,q;
v=this;
w=v.prepareSearch(w,x);
q=(!w.query&&x.sort_empty)||x.sort;
l=function(y,n){if(y==="$score"){return n.score
}return a(v.items[n.id],y,x.nesting)
};
s=[];
if(q){for(r=0,k=q.length;
r<k;
r++){if(w.query||q[r].field!=="$score"){s.push(q[r])
}}}if(w.query){o=true;
for(r=0,k=s.length;
r<k;
r++){if(s[r].field==="$score"){o=false;
break
}}if(o){s.unshift({field:"$score",direction:"desc"})
}}else{for(r=0,k=s.length;
r<k;
r++){if(s[r].field==="$score"){s.splice(r,1);
break
}}}p=[];
for(r=0,k=s.length;
r<k;
r++){p.push(s[r].direction==="desc"?-1:1)
}m=s.length;
if(!m){return null
}else{if(m===1){t=s[0].field;
u=p[0];
return function(y,n){return u*f(l(t,y),l(t,n))
}
}else{return function(A,y){var C,n,z,B,D;
for(C=0;
C<m;
C++){D=s[C].field;
n=p[C]*f(l(D,A),l(D,y));
if(n){return n
}}return 0
}
}}};
h.prototype.prepareSearch=function(n,k){if(typeof n==="object"){return n
}k=d({},k);
var m=k.fields;
var o=k.sort;
var l=k.sort_empty;
if(m&&!c(m)){k.fields=[m]
}if(o&&!c(o)){k.sort=[o]
}if(l&&!c(l)){k.sort_empty=[l]
}return{options:k,query:String(n||"").toLowerCase(),tokens:this.tokenize(n),total:0,items:[]}
};
h.prototype.search=function(n,s){var q=this,p,l,r,m;
var k;
var o;
r=this.prepareSearch(n,s);
s=r.options;
n=r.query;
o=s.score||q.getScoreFunction(r);
if(n.length){q.iterator(q.items,function(t,u){l=o(t);
if(s.filter===false||l>0){r.items.push({score:l,id:u})
}})
}else{q.iterator(q.items,function(t,u){r.items.push({score:1,id:u})
})
}k=q.getSortFunction(r,s);
if(k){r.items.sort(k)
}r.total=r.items.length;
if(typeof s.limit==="number"){r.items=r.items.slice(0,s.limit)
}return r
};
var f=function(l,k){if(typeof l==="number"&&typeof k==="number"){return l>k?1:(l<k?-1:0)
}l=g(String(l||""));
k=g(String(k||""));
if(l>k){return 1
}if(k>l){return -1
}return 0
};
var d=function(m,l){var q,r,o,p;
for(q=1,r=arguments.length;
q<r;
q++){p=arguments[q];
if(!p){continue
}for(o in p){if(p.hasOwnProperty(o)){m[o]=p[o]
}}}return m
};
var a=function(n,k,l){if(!n||!k){return
}if(!l){return n[k]
}var m=k.split(".");
while(m.length&&(n=n[m.shift()])){}return n
};
var b=function(k){return(k+"").replace(/^\s+|\s+$|/g,"")
};
var e=function(k){return(k+"").replace(/([.?*+^$[\]\\(){}|-])/g,"\\$1")
};
var c=Array.isArray||(typeof $!=="undefined"&&$.isArray)||function(k){return Object.prototype.toString.call(k)==="[object Array]"
};
var j={a:"[aḀḁĂăÂâǍǎȺⱥȦȧẠạÄäÀàÁáĀāÃãÅåąĄÃąĄ]",b:"[b␢βΒB฿𐌁ᛒ]",c:"[cĆćĈĉČčĊċC̄c̄ÇçḈḉȻȼƇƈɕᴄＣｃ]",d:"[dĎďḊḋḐḑḌḍḒḓḎḏĐđD̦d̦ƉɖƊɗƋƌᵭᶁᶑȡᴅＤｄð]",e:"[eÉéÈèÊêḘḙĚěĔĕẼẽḚḛẺẻĖėËëĒēȨȩĘęᶒɆɇȄȅẾếỀềỄễỂểḜḝḖḗḔḕȆȇẸẹỆệⱸᴇＥｅɘǝƏƐε]",f:"[fƑƒḞḟ]",g:"[gɢ₲ǤǥĜĝĞğĢģƓɠĠġ]",h:"[hĤĥĦħḨḩẖẖḤḥḢḣɦʰǶƕ]",i:"[iÍíÌìĬĭÎîǏǐÏïḮḯĨĩĮįĪīỈỉȈȉȊȋỊịḬḭƗɨɨ̆ᵻᶖİiIıɪＩｉ]",j:"[jȷĴĵɈɉʝɟʲ]",k:"[kƘƙꝀꝁḰḱǨǩḲḳḴḵκϰ₭]",l:"[lŁłĽľĻļĹĺḶḷḸḹḼḽḺḻĿŀȽƚⱠⱡⱢɫɬᶅɭȴʟＬｌ]",n:"[nŃńǸǹŇňÑñṄṅŅņṆṇṊṋṈṉN̈n̈ƝɲȠƞᵰᶇɳȵɴＮｎŊŋ]",o:"[oØøÖöÓóÒòÔôǑǒŐőŎŏȮȯỌọƟɵƠơỎỏŌōÕõǪǫȌȍՕօ]",p:"[pṔṕṖṗⱣᵽƤƥᵱ]",q:"[qꝖꝗʠɊɋꝘꝙq̃]",r:"[rŔŕɌɍŘřŖŗṘṙȐȑȒȓṚṛⱤɽ]",s:"[sŚśṠṡṢṣꞨꞩŜŝŠšŞşȘșS̈s̈]",t:"[tŤťṪṫŢţṬṭƮʈȚțṰṱṮṯƬƭ]",u:"[uŬŭɄʉỤụÜüÚúÙùÛûǓǔŰűŬŭƯưỦủŪūŨũŲųȔȕ∪]",v:"[vṼṽṾṿƲʋꝞꝟⱱʋ]",w:"[wẂẃẀẁŴŵẄẅẆẇẈẉ]",x:"[xẌẍẊẋχ]",y:"[yÝýỲỳŶŷŸÿỸỹẎẏỴỵɎɏƳƴ]",z:"[zŹźẐẑŽžŻżẒẓẔẕƵƶ]"};
var g=(function(){var p,s,l,o;
var m="";
var r={};
for(l in j){if(j.hasOwnProperty(l)){o=j[l].substring(2,j[l].length-1);
m+=o;
for(p=0,s=o.length;
p<s;
p++){r[o.charAt(p)]=l
}}}var q=new RegExp("["+m+"]","g");
return function(k){return k.replace(q,function(n){return r[n]
}).toLowerCase()
}
})();
return h
}));
(function(a,b){if(typeof define==="function"&&define.amd){define("microplugin",b)
}else{if(typeof exports==="object"){module.exports=b()
}else{a.MicroPlugin=b()
}}}(this,function(){var a={};
a.mixin=function(c){c.plugins={};
c.prototype.initializePlugins=function(e){var h,j,g;
var f=this;
var d=[];
f.plugins={names:[],settings:{},requested:{},loaded:{}};
if(b.isArray(e)){for(h=0,j=e.length;
h<j;
h++){if(typeof e[h]==="string"){d.push(e[h])
}else{f.plugins.settings[e[h].name]=e[h].options;
d.push(e[h].name)
}}}else{if(e){for(g in e){if(e.hasOwnProperty(g)){f.plugins.settings[g]=e[g];
d.push(g)
}}}}while(d.length){f.require(d.shift())
}};
c.prototype.loadPlugin=function(f){var e=this;
var d=e.plugins;
var g=c.plugins[f];
if(!c.plugins.hasOwnProperty(f)){throw new Error('Unable to find "'+f+'" plugin')
}d.requested[f]=true;
d.loaded[f]=g.fn.apply(e,[e.plugins.settings[f]||{}]);
d.names.push(f)
};
c.prototype.require=function(f){var e=this;
var d=e.plugins;
if(!e.plugins.loaded.hasOwnProperty(f)){if(d.requested[f]){throw new Error('Plugin has circular dependency ("'+f+'")')
}e.loadPlugin(f)
}return d.loaded[f]
};
c.define=function(d,e){c.plugins[d]={name:d,fn:e}
}
};
var b={isArray:Array.isArray||function(c){return Object.prototype.toString.call(c)==="[object Array]"
}};
return a
}));
(function(a,b){if(typeof define==="function"&&define.amd){define("selectize",["jquery","sifter","microplugin"],b)
}else{if(typeof exports==="object"){module.exports=b(require("jquery"),require("sifter"),require("microplugin"))
}else{a.Selectize=b(a.jQuery,a.Sifter,a.MicroPlugin)
}}}(this,function(w,n,j){var N=function(Q,T){if(typeof T==="string"&&!T.length){return
}var S=(typeof T==="string")?new RegExp(T,"i"):T;
var R=function(W){var ac=0;
if(W.nodeType===3){var ab=W.data.search(S);
if(ab>=0&&W.data.length>0){var aa=W.data.match(S);
var Z=document.createElement("span");
Z.className="highlight";
var X=W.splitText(ab);
var U=X.splitText(aa[0].length);
var V=X.cloneNode(true);
Z.appendChild(V);
X.parentNode.replaceChild(Z,X);
ac=1
}}else{if(W.nodeType===1&&W.childNodes&&!/(script|style)/i.test(W.tagName)&&(W.className!=="highlight"||W.tagName!=="SPAN")){for(var Y=0;
Y<W.childNodes.length;
++Y){Y+=R(W.childNodes[Y])
}}}return ac
};
return Q.each(function(){R(this)
})
};
w.fn.removeHighlight=function(){return this.find("span.highlight").each(function(){this.parentNode.firstChild.nodeName;
var Q=this.parentNode;
Q.replaceChild(this.firstChild,this);
Q.normalize()
}).end()
};
var H=function(){};
H.prototype={on:function(R,Q){this._events=this._events||{};
this._events[R]=this._events[R]||[];
this._events[R].push(Q)
},off:function(R,Q){var S=arguments.length;
if(S===0){return delete this._events
}if(S===1){return delete this._events[R]
}this._events=this._events||{};
if(R in this._events===false){return
}this._events[R].splice(this._events[R].indexOf(Q),1)
},trigger:function(R){this._events=this._events||{};
if(R in this._events===false){return
}for(var Q=0;
Q<this._events[R].length;
Q++){this._events[R][Q].apply(this,Array.prototype.slice.call(arguments,1))
}}};
H.mixin=function(Q){var S=["on","off","trigger"];
for(var R=0;
R<S.length;
R++){Q.prototype[S[R]]=H.prototype[S[R]]
}};
var b=/Mac/.test(navigator.userAgent);
var J=65;
var O=188;
var A=13;
var x=27;
var q=37;
var I=38;
var y=80;
var u=39;
var v=40;
var C=78;
var p=8;
var r=46;
var k=16;
var K=b?91:17;
var e=b?18:17;
var G=9;
var l=1;
var h=2;
var D=!/android/i.test(window.navigator.userAgent)&&!!document.createElement("input").validity;
var P=function(Q){return typeof Q!=="undefined"
};
var z=function(Q){if(typeof Q==="undefined"||Q===null){return null
}if(typeof Q==="boolean"){return Q?"1":"0"
}return Q+""
};
var E=function(Q){return(Q+"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")
};
var f=function(Q){return(Q+"").replace(/\$/g,"$$$$")
};
var t={};
t.before=function(Q,T,S){var R=Q[T];
Q[T]=function(){S.apply(Q,arguments);
return R.apply(Q,arguments)
}
};
t.after=function(Q,T,S){var R=Q[T];
Q[T]=function(){var U=R.apply(Q,arguments);
S.apply(Q,arguments);
return U
}
};
var s=function(Q){var R=false;
return function(){if(R){return
}R=true;
Q.apply(this,arguments)
}
};
var g=function(R,Q){var S;
return function(){var T=this;
var U=arguments;
window.clearTimeout(S);
S=window.setTimeout(function(){R.apply(T,U)
},Q)
}
};
var a=function(Q,S,U){var T;
var R=Q.trigger;
var V={};
Q.trigger=function(){var W=arguments[0];
if(S.indexOf(W)!==-1){V[W]=arguments
}else{return R.apply(Q,arguments)
}};
U.apply(Q,[]);
Q.trigger=R;
for(T in V){if(V.hasOwnProperty(T)){R.apply(Q,V[T])
}}};
var B=function(T,S,Q,R){T.on(S,Q,function(U){var V=U.target;
while(V&&V.parentNode!==T[0]){V=V.parentNode
}U.currentTarget=V;
return R.apply(this,[U])
})
};
var m=function(S){var R={};
if("selectionStart" in S){R.start=S.selectionStart;
R.length=S.selectionEnd-R.start
}else{if(document.selection){S.focus();
var T=document.selection.createRange();
var Q=document.selection.createRange().text.length;
T.moveStart("character",-S.value.length);
R.start=T.text.length-Q;
R.length=Q
}}return R
};
var o=function(T,U,R){var Q,V,S={};
if(R){for(Q=0,V=R.length;
Q<V;
Q++){S[R[Q]]=T.css(R[Q])
}}else{S=T.css()
}U.css(S)
};
var L=function(R,Q){if(!R){return 0
}if(!c.$testInput){c.$testInput=w("<span />").css({position:"absolute",top:-99999,left:-99999,width:"auto",padding:0,whiteSpace:"pre"}).appendTo("body")
}c.$testInput.text(R);
o(Q,c.$testInput,["letterSpacing","fontSize","fontFamily","fontWeight","textTransform"]);
return c.$testInput.width()
};
var M=function(S){var Q=null;
var R=function(W,ac){var aa,ab,X,Z,T;
var U,V,Y;
W=W||window.event||{};
ac=ac||{};
if(W.metaKey||W.altKey){return
}if(!ac.force&&S.data("grow")===false){return
}aa=S.val();
if(W.type&&W.type.toLowerCase()==="keydown"){ab=W.keyCode;
X=((ab>=48&&ab<=57)||(ab>=65&&ab<=90)||(ab>=96&&ab<=111)||(ab>=186&&ab<=222)||ab===32);
if(ab===r||ab===p){Y=m(S[0]);
if(Y.length){aa=aa.substring(0,Y.start)+aa.substring(Y.start+Y.length)
}else{if(ab===p&&Y.start){aa=aa.substring(0,Y.start-1)+aa.substring(Y.start+1)
}else{if(ab===r&&typeof Y.start!=="undefined"){aa=aa.substring(0,Y.start)+aa.substring(Y.start+1)
}}}}else{if(X){U=W.shiftKey;
V=String.fromCharCode(W.keyCode);
if(U){V=V.toUpperCase()
}else{V=V.toLowerCase()
}aa+=V
}}}Z=S.attr("placeholder");
if(!aa&&Z){aa=Z
}T=L(aa,S)+4;
if(T!==Q){Q=T;
S.width(T);
S.triggerHandler("resize")
}};
S.on("keydown keyup update blur",R);
R()
};
var F=function(R){var Q=document.createElement("div");
Q.appendChild(R.cloneNode(true));
return Q.innerHTML
};
var d=function(S,R){if(!R){R={}
}var Q="Selectize";
console.error(Q+": "+S);
if(R.explanation){if(console.group){console.group()
}console.error(R.explanation);
if(console.group){console.groupEnd()
}}};
var c=function(V,S){var X,T,Q,R,W,Y=this;
W=V[0];
W.selectize=Y;
var U=window.getComputedStyle&&window.getComputedStyle(W,null);
R=U?U.getPropertyValue("direction"):W.currentStyle&&W.currentStyle.direction;
R=R||V.parents("[dir]:first").attr("dir")||"";
w.extend(Y,{order:0,settings:S,$input:V,tabIndex:V.attr("tabindex")||"",tagType:W.tagName.toLowerCase()==="select"?l:h,rtl:/rtl/i.test(R),eventNS:".selectize"+(++c.count),highlightedValue:null,isBlurring:false,isOpen:false,isDisabled:false,isRequired:V.is("[required]"),isInvalid:false,isLocked:false,isFocused:false,isInputHidden:false,isSetup:false,isShiftDown:false,isCmdDown:false,isCtrlDown:false,ignoreFocus:false,ignoreBlur:false,ignoreHover:false,hasOptions:false,currentResults:null,lastValue:"",caretPos:0,loading:0,loadedSearches:{},$activeOption:null,$activeItems:[],optgroups:{},options:{},userOptions:{},items:[],renderCache:{},onSearchChange:S.loadThrottle===null?Y.onSearchChange:g(Y.onSearchChange,S.loadThrottle)});
Y.sifter=new n(this.options,{diacritics:S.diacritics});
if(Y.settings.options){for(T=0,Q=Y.settings.options.length;
T<Q;
T++){Y.registerOption(Y.settings.options[T])
}delete Y.settings.options
}if(Y.settings.optgroups){for(T=0,Q=Y.settings.optgroups.length;
T<Q;
T++){Y.registerOptionGroup(Y.settings.optgroups[T])
}delete Y.settings.optgroups
}Y.settings.mode=Y.settings.mode||(Y.settings.maxItems===1?"single":"multi");
if(typeof Y.settings.hideSelected!=="boolean"){Y.settings.hideSelected=Y.settings.mode==="multi"
}Y.initializePlugins(Y.settings.plugins);
Y.setupCallbacks();
Y.setupTemplates();
Y.setup()
};
H.mixin(c);
if(typeof j!=="undefined"){j.mixin(c)
}else{d("Dependency MicroPlugin is missing",{explanation:'Make sure you either: (1) are using the "standalone" version of Selectize, or (2) require MicroPlugin before you load Selectize.'})
}w.extend(c.prototype,{setup:function(){var W=this;
var ad=W.settings;
var Z=W.eventNS;
var V=w(window);
var ah=w(document);
var S=W.$input;
var ab;
var af;
var R;
var T;
var X;
var ac;
var ai;
var U;
var ag;
var ae;
var Y;
var aa;
ai=W.settings.mode;
ae=S.attr("class")||"";
ab=w("<div>").addClass(ad.wrapperClass).addClass(ae).addClass(ai);
af=w("<div>").addClass(ad.inputClass).addClass("items").appendTo(ab);
R=w('<input type="text" autocomplete="off" />').appendTo(af).attr("tabindex",S.is(":disabled")?"-1":W.tabIndex);
ac=w(ad.dropdownParent||ab);
T=w("<div>").addClass(ad.dropdownClass).addClass(ai).hide().appendTo(ac);
X=w("<div>").addClass(ad.dropdownContentClass).appendTo(T);
if(aa=S.attr("id")){R.attr("id",aa+"-selectized");
w("label[for='"+aa+"']").attr("for",aa+"-selectized")
}if(W.settings.copyClassesToDropdown){T.addClass(ae)
}ab.css({width:S[0].style.width});
if(W.plugins.names.length){Y="plugin-"+W.plugins.names.join(" plugin-");
ab.addClass(Y);
T.addClass(Y)
}if((ad.maxItems===null||ad.maxItems>1)&&W.tagType===l){S.attr("multiple","multiple")
}if(W.settings.placeholder){R.attr("placeholder",ad.placeholder)
}if(!W.settings.splitOn&&W.settings.delimiter){var Q=W.settings.delimiter.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&");
W.settings.splitOn=new RegExp("\\s*"+Q+"+\\s*")
}if(S.attr("autocorrect")){R.attr("autocorrect",S.attr("autocorrect"))
}if(S.attr("autocapitalize")){R.attr("autocapitalize",S.attr("autocapitalize"))
}R[0].type=S[0].type;
W.$wrapper=ab;
W.$control=af;
W.$control_input=R;
W.$dropdown=T;
W.$dropdown_content=X;
T.on("mouseenter mousedown click","[data-disabled]>[data-selectable]",function(aj){aj.stopImmediatePropagation()
});
T.on("mouseenter","[data-selectable]",function(){return W.onOptionHover.apply(W,arguments)
});
T.on("mousedown click","[data-selectable]",function(){return W.onOptionSelect.apply(W,arguments)
});
B(af,"mousedown","*:not(input)",function(){return W.onItemSelect.apply(W,arguments)
});
M(R);
af.on({mousedown:function(){return W.onMouseDown.apply(W,arguments)
},click:function(){return W.onClick.apply(W,arguments)
}});
R.on({mousedown:function(aj){aj.stopPropagation()
},keydown:function(){return W.onKeyDown.apply(W,arguments)
},keyup:function(){return W.onKeyUp.apply(W,arguments)
},keypress:function(){return W.onKeyPress.apply(W,arguments)
},resize:function(){W.positionDropdown.apply(W,[])
},blur:function(){return W.onBlur.apply(W,arguments)
},focus:function(){W.ignoreBlur=false;
return W.onFocus.apply(W,arguments)
},paste:function(){return W.onPaste.apply(W,arguments)
}});
ah.on("keydown"+Z,function(aj){W.isCmdDown=aj[b?"metaKey":"ctrlKey"];
W.isCtrlDown=aj[b?"altKey":"ctrlKey"];
W.isShiftDown=aj.shiftKey
});
ah.on("keyup"+Z,function(aj){if(aj.keyCode===e){W.isCtrlDown=false
}if(aj.keyCode===k){W.isShiftDown=false
}if(aj.keyCode===K){W.isCmdDown=false
}});
ah.on("mousedown"+Z,function(aj){if(W.isFocused){if(aj.target===W.$dropdown[0]||aj.target.parentNode===W.$dropdown[0]){return false
}if(!W.$control.has(aj.target).length&&aj.target!==W.$control[0]){W.blur(aj.target)
}}});
V.on(["scroll"+Z,"resize"+Z].join(" "),function(){if(W.isOpen){W.positionDropdown.apply(W,arguments)
}});
V.on("mousemove"+Z,function(){W.ignoreHover=false
});
this.revertSettings={$children:S.children().detach(),tabindex:S.attr("tabindex")};
S.attr("tabindex",-1).hide().after(W.$wrapper);
if(w.isArray(ad.items)){W.setValue(ad.items);
delete ad.items
}if(D){S.on("invalid"+Z,function(aj){aj.preventDefault();
W.isInvalid=true;
W.refreshState()
})
}W.updateOriginalInput();
W.refreshItems();
W.refreshState();
W.updatePlaceholder();
W.isSetup=true;
if(S.is(":disabled")){W.disable()
}W.on("change",this.onChange);
S.data("selectize",W);
S.addClass("selectized");
W.trigger("initialize");
if(ad.preload===true){W.onSearchChange("")
}},setupTemplates:function(){var R=this;
var Q=R.settings.labelField;
var S=R.settings.optgroupLabelField;
var T={optgroup:function(U){return'<div class="optgroup">'+U.html+"</div>"
},optgroup_header:function(V,U){return'<div class="optgroup-header">'+U(V[S])+"</div>"
},option:function(V,U){return'<div class="option">'+U(V[Q])+"</div>"
},item:function(V,U){return'<div class="item">'+U(V[Q])+"</div>"
},option_create:function(V,U){return'<div class="create">Add <strong>'+U(V.input)+"</strong>&hellip;</div>"
}};
R.settings.render=w.extend({},T,R.settings.render)
},setupCallbacks:function(){var Q,R,S={initialize:"onInitialize",change:"onChange",item_add:"onItemAdd",item_remove:"onItemRemove",clear:"onClear",option_add:"onOptionAdd",option_remove:"onOptionRemove",option_clear:"onOptionClear",optgroup_add:"onOptionGroupAdd",optgroup_remove:"onOptionGroupRemove",optgroup_clear:"onOptionGroupClear",dropdown_open:"onDropdownOpen",dropdown_close:"onDropdownClose",type:"onType",load:"onLoad",focus:"onFocus",blur:"onBlur"};
for(Q in S){if(S.hasOwnProperty(Q)){R=this.settings[S[Q]];
if(R){this.on(Q,R)
}}}},onClick:function(R){var Q=this;
if(!Q.isFocused||!Q.isOpen){Q.focus();
R.preventDefault()
}},onMouseDown:function(T){var R=this;
var S=T.isDefaultPrevented();
var Q=w(T.target);
if(R.isFocused){if(T.target!==R.$control_input[0]){if(R.settings.mode==="single"){R.isOpen?R.close():R.open()
}else{if(!S){R.setActiveItem(null)
}}return false
}}else{if(!S){window.setTimeout(function(){R.focus()
},0)
}}},onChange:function(){this.$input.trigger("change")
},onPaste:function(R){var Q=this;
if(Q.isFull()||Q.isInputHidden||Q.isLocked){R.preventDefault();
return
}if(Q.settings.splitOn){setTimeout(function(){var T=Q.$control_input.val();
if(!T.match(Q.settings.splitOn)){return
}var S=w.trim(T).split(Q.settings.splitOn);
for(var U=0,V=S.length;
U<V;
U++){Q.createItem(S[U])
}},0)
}},onKeyPress:function(R){if(this.isLocked){return R&&R.preventDefault()
}var Q=String.fromCharCode(R.keyCode||R.which);
if(this.settings.create&&this.settings.mode==="multi"&&Q===this.settings.delimiter){this.createItem();
R.preventDefault();
return false
}},onKeyDown:function(U){var T=U.target===this.$control_input[0];
var S=this;
if(S.isLocked){if(U.keyCode!==G){U.preventDefault()
}return
}switch(U.keyCode){case J:if(S.isCmdDown){S.selectAll();
return
}break;
case x:if(S.isOpen){U.preventDefault();
U.stopPropagation();
S.close()
}return;
case C:if(!U.ctrlKey||U.altKey){break
}case v:if(!S.isOpen&&S.hasOptions){S.open()
}else{if(S.$activeOption){S.ignoreHover=true;
var Q=S.getAdjacentOption(S.$activeOption,1);
if(Q.length){S.setActiveOption(Q,true,true)
}}}U.preventDefault();
return;
case y:if(!U.ctrlKey||U.altKey){break
}case I:if(S.$activeOption){S.ignoreHover=true;
var R=S.getAdjacentOption(S.$activeOption,-1);
if(R.length){S.setActiveOption(R,true,true)
}}U.preventDefault();
return;
case A:if(S.isOpen&&S.$activeOption){S.onOptionSelect({currentTarget:S.$activeOption});
U.preventDefault()
}return;
case q:S.advanceSelection(-1,U);
return;
case u:S.advanceSelection(1,U);
return;
case G:if(S.settings.selectOnTab&&S.isOpen&&S.$activeOption){S.onOptionSelect({currentTarget:S.$activeOption});
if(!S.isFull()){U.preventDefault()
}}if(S.settings.create&&S.createItem()){U.preventDefault()
}return;
case p:case r:S.deleteSelection(U);
return
}if((S.isFull()||S.isInputHidden)&&!(b?U.metaKey:U.ctrlKey)){U.preventDefault();
return
}},onKeyUp:function(S){var Q=this;
if(Q.isLocked){return S&&S.preventDefault()
}var R=Q.$control_input.val()||"";
if(Q.lastValue!==R){Q.lastValue=R;
Q.onSearchChange(R);
Q.refreshOptions();
Q.trigger("type",R)
}},onSearchChange:function(S){var Q=this;
var R=Q.settings.load;
if(!R){return
}if(Q.loadedSearches.hasOwnProperty(S)){return
}Q.loadedSearches[S]=true;
Q.load(function(T){R.apply(Q,[S,T])
})
},onFocus:function(S){var Q=this;
var R=Q.isFocused;
if(Q.isDisabled){Q.blur();
S&&S.preventDefault();
return false
}if(Q.ignoreFocus){return
}Q.isFocused=true;
if(Q.settings.preload==="focus"){Q.onSearchChange("")
}if(!R){Q.trigger("focus")
}if(!Q.$activeItems.length){Q.showInput();
Q.setActiveItem(null);
Q.refreshOptions(!!Q.settings.openOnFocus)
}Q.refreshState()
},onBlur:function(T,R){var Q=this;
if(!Q.isFocused){return
}Q.isFocused=false;
if(Q.ignoreFocus){return
}else{if(!Q.ignoreBlur&&document.activeElement===Q.$dropdown_content[0]){Q.ignoreBlur=true;
Q.onFocus(T);
return
}}var S=function(){Q.close();
Q.setTextboxValue("");
Q.setActiveItem(null);
Q.setActiveOption(null);
Q.setCaret(Q.items.length);
Q.refreshState();
R&&R.focus&&R.focus();
Q.isBlurring=false;
Q.ignoreFocus=false;
Q.trigger("blur")
};
Q.isBlurring=true;
Q.ignoreFocus=true;
if(Q.settings.create&&Q.settings.createOnBlur){Q.createItem(null,false,S)
}else{S()
}},onOptionHover:function(Q){if(this.ignoreHover){return
}this.setActiveOption(Q.currentTarget,false)
},onOptionSelect:function(U){var S,Q,T,R=this;
if(U.preventDefault){U.preventDefault();
U.stopPropagation()
}Q=w(U.currentTarget);
if(Q.hasClass("create")){R.createItem(null,function(){if(R.settings.closeAfterSelect){R.close()
}})
}else{S=Q.attr("data-value");
if(typeof S!=="undefined"){R.lastQuery=null;
R.setTextboxValue("");
R.addItem(S);
if(R.settings.closeAfterSelect){R.close()
}else{if(!R.settings.hideSelected&&U.type&&/mouse/.test(U.type)){R.setActiveOption(R.getOption(S))
}}}}},onItemSelect:function(R){var Q=this;
if(Q.isLocked){return
}if(Q.settings.mode==="multi"){R.preventDefault();
Q.setActiveItem(R.currentTarget,R)
}},load:function(R){var Q=this;
var S=Q.$wrapper.addClass(Q.settings.loadingClass);
Q.loading++;
R.apply(Q,[function(T){Q.loading=Math.max(Q.loading-1,0);
if(T&&T.length){Q.addOption(T);
Q.refreshOptions(Q.isFocused&&!Q.isInputHidden)
}if(!Q.loading){S.removeClass(Q.settings.loadingClass)
}Q.trigger("load",T)
}])
},setTextboxValue:function(Q){var S=this.$control_input;
var R=S.val()!==Q;
if(R){S.val(Q).triggerHandler("update");
this.lastValue=Q
}},getValue:function(){if(this.tagType===l&&this.$input.attr("multiple")){return this.items
}else{return this.items.join(this.settings.delimiter)
}},setValue:function(S,Q){var R=Q?[]:["change"];
a(this,R,function(){this.clear(Q);
this.addItems(S,Q)
})
},setActiveItem:function(X,V){var aa=this;
var U;
var T,Y,Q,S,Z,R;
var W;
if(aa.settings.mode==="single"){return
}X=w(X);
if(!X.length){w(aa.$activeItems).removeClass("active");
aa.$activeItems=[];
if(aa.isFocused){aa.showInput()
}return
}U=V&&V.type.toLowerCase();
if(U==="mousedown"&&aa.isShiftDown&&aa.$activeItems.length){W=aa.$control.children(".active:last");
Q=Array.prototype.indexOf.apply(aa.$control[0].childNodes,[W[0]]);
S=Array.prototype.indexOf.apply(aa.$control[0].childNodes,[X[0]]);
if(Q>S){R=Q;
Q=S;
S=R
}for(T=Q;
T<=S;
T++){Z=aa.$control[0].childNodes[T];
if(aa.$activeItems.indexOf(Z)===-1){w(Z).addClass("active");
aa.$activeItems.push(Z)
}}V.preventDefault()
}else{if((U==="mousedown"&&aa.isCtrlDown)||(U==="keydown"&&this.isShiftDown)){if(X.hasClass("active")){Y=aa.$activeItems.indexOf(X[0]);
aa.$activeItems.splice(Y,1);
X.removeClass("active")
}else{aa.$activeItems.push(X.addClass("active")[0])
}}else{w(aa.$activeItems).removeClass("active");
aa.$activeItems=[X.addClass("active")[0]]
}}aa.hideInput();
if(!this.isFocused){aa.focus()
}},setActiveOption:function(Q,W,S){var R,X,V;
var U,T;
var Y=this;
if(Y.$activeOption){Y.$activeOption.removeClass("active")
}Y.$activeOption=null;
Q=w(Q);
if(!Q.length){return
}Y.$activeOption=Q.addClass("active");
if(W||!P(W)){R=Y.$dropdown_content.height();
X=Y.$activeOption.outerHeight(true);
W=Y.$dropdown_content.scrollTop()||0;
V=Y.$activeOption.offset().top-Y.$dropdown_content.offset().top+W;
U=V;
T=V-R+X;
if(V+X>R+W){Y.$dropdown_content.stop().animate({scrollTop:T},S?Y.settings.scrollDuration:0)
}else{if(V<W){Y.$dropdown_content.stop().animate({scrollTop:U},S?Y.settings.scrollDuration:0)
}}}},selectAll:function(){var Q=this;
if(Q.settings.mode==="single"){return
}Q.$activeItems=Array.prototype.slice.apply(Q.$control.children(":not(input)").addClass("active"));
if(Q.$activeItems.length){Q.hideInput();
Q.close()
}Q.focus()
},hideInput:function(){var Q=this;
Q.setTextboxValue("");
Q.$control_input.css({opacity:0,position:"absolute",left:Q.rtl?10000:-10000});
Q.isInputHidden=true
},showInput:function(){this.$control_input.css({opacity:1,position:"relative",left:0});
this.isInputHidden=false
},focus:function(){var Q=this;
if(Q.isDisabled){return
}Q.ignoreFocus=true;
Q.$control_input[0].focus();
window.setTimeout(function(){Q.ignoreFocus=false;
Q.onFocus()
},0)
},blur:function(Q){this.$control_input[0].blur();
this.onBlur(null,Q)
},getScoreFunction:function(Q){return this.sifter.getScoreFunction(Q,this.getSearchOptions())
},getSearchOptions:function(){var R=this.settings;
var Q=R.sortField;
if(typeof Q==="string"){Q=[{field:Q}]
}return{fields:R.searchField,conjunction:R.searchConjunction,sort:Q,nesting:R.nesting}
},search:function(U){var T,V,Q,Y,S;
var W=this;
var R=W.settings;
var X=this.getSearchOptions();
if(R.score){S=W.settings.score.apply(this,[U]);
if(typeof S!=="function"){throw new Error('Selectize "score" setting must be a function that returns a function')
}}if(U!==W.lastQuery){W.lastQuery=U;
Y=W.sifter.search(U,w.extend(X,{score:S}));
W.currentResults=Y
}else{Y=w.extend(true,{},W.currentResults)
}if(R.hideSelected){for(T=Y.items.length-1;
T>=0;
T--){if(W.items.indexOf(z(Y.items[T].id))!==-1){Y.items.splice(T,1)
}}}return Y
},refreshOptions:function(aa){var ah,ag,af,ad,ak,Q,W,ai,S,ae,U,aj,V;
var T,Z,ab;
if(typeof aa==="undefined"){aa=true
}var Y=this;
var R=w.trim(Y.$control_input.val());
var ac=Y.search(R);
var X=Y.$dropdown_content;
var al=Y.$activeOption&&z(Y.$activeOption.attr("data-value"));
ad=ac.items.length;
if(typeof Y.settings.maxOptions==="number"){ad=Math.min(ad,Y.settings.maxOptions)
}ak={};
Q=[];
for(ah=0;
ah<ad;
ah++){W=Y.options[ac.items[ah].id];
ai=Y.render("option",W);
S=W[Y.settings.optgroupField]||"";
ae=w.isArray(S)?S:[S];
for(ag=0,af=ae&&ae.length;
ag<af;
ag++){S=ae[ag];
if(!Y.optgroups.hasOwnProperty(S)){S=""
}if(!ak.hasOwnProperty(S)){ak[S]=document.createDocumentFragment();
Q.push(S)
}ak[S].appendChild(ai)
}}if(this.settings.lockOptgroupOrder){Q.sort(function(an,am){var ao=Y.optgroups[an].$order||0;
var ap=Y.optgroups[am].$order||0;
return ao-ap
})
}U=document.createDocumentFragment();
for(ah=0,ad=Q.length;
ah<ad;
ah++){S=Q[ah];
if(Y.optgroups.hasOwnProperty(S)&&ak[S].childNodes.length){aj=document.createDocumentFragment();
aj.appendChild(Y.render("optgroup_header",Y.optgroups[S]));
aj.appendChild(ak[S]);
U.appendChild(Y.render("optgroup",w.extend({},Y.optgroups[S],{html:F(aj),dom:aj})))
}else{U.appendChild(ak[S])
}}X.html(U);
if(Y.settings.highlight){X.removeHighlight();
if(ac.query.length&&ac.tokens.length){for(ah=0,ad=ac.tokens.length;
ah<ad;
ah++){N(X,ac.tokens[ah].regex)
}}}if(!Y.settings.hideSelected){for(ah=0,ad=Y.items.length;
ah<ad;
ah++){Y.getOption(Y.items[ah]).addClass("selected")
}}V=Y.canCreate(R);
if(V){X.prepend(Y.render("option_create",{input:R}));
ab=w(X[0].childNodes[0])
}Y.hasOptions=ac.items.length>0||V;
if(Y.hasOptions){if(ac.items.length>0){Z=al&&Y.getOption(al);
if(Z&&Z.length){T=Z
}else{if(Y.settings.mode==="single"&&Y.items.length){T=Y.getOption(Y.items[0])
}}if(!T||!T.length){if(ab&&!Y.settings.addPrecedence){T=Y.getAdjacentOption(ab,1)
}else{T=X.find("[data-selectable]:first")
}}}else{T=ab
}Y.setActiveOption(T);
if(aa&&!Y.isOpen){Y.open()
}}else{Y.setActiveOption(null);
if(aa&&Y.isOpen){Y.close()
}}},addOption:function(T){var R,U,S,Q=this;
if(w.isArray(T)){for(R=0,U=T.length;
R<U;
R++){Q.addOption(T[R])
}return
}if(S=Q.registerOption(T)){Q.userOptions[S]=true;
Q.lastQuery=null;
Q.trigger("option_add",S,T)
}},registerOption:function(R){var Q=z(R[this.settings.valueField]);
if(typeof Q==="undefined"||Q===null||this.options.hasOwnProperty(Q)){return false
}R.$order=R.$order||++this.order;
this.options[Q]=R;
return Q
},registerOptionGroup:function(R){var Q=z(R[this.settings.optgroupValueField]);
if(!Q){return false
}R.$order=R.$order||++this.order;
this.optgroups[Q]=R;
return Q
},addOptionGroup:function(R,Q){Q[this.settings.optgroupValueField]=R;
if(R=this.registerOptionGroup(Q)){this.trigger("optgroup_add",R,Q)
}},removeOptionGroup:function(Q){if(this.optgroups.hasOwnProperty(Q)){delete this.optgroups[Q];
this.renderCache={};
this.trigger("optgroup_remove",Q)
}},clearOptionGroups:function(){this.optgroups={};
this.renderCache={};
this.trigger("optgroup_clear")
},updateOption:function(X,V){var Z=this;
var Y,Q;
var S,T,W,R,U;
X=z(X);
S=z(V[Z.settings.valueField]);
if(X===null){return
}if(!Z.options.hasOwnProperty(X)){return
}if(typeof S!=="string"){throw new Error("Value must be set in option data")
}U=Z.options[X].$order;
if(S!==X){delete Z.options[X];
T=Z.items.indexOf(X);
if(T!==-1){Z.items.splice(T,1,S)
}}V.$order=V.$order||U;
Z.options[S]=V;
W=Z.renderCache.item;
R=Z.renderCache.option;
if(W){delete W[X];
delete W[S]
}if(R){delete R[X];
delete R[S]
}if(Z.items.indexOf(S)!==-1){Y=Z.getItem(X);
Q=w(Z.render("item",V));
if(Y.hasClass("active")){Q.addClass("active")
}Y.replaceWith(Q)
}Z.lastQuery=null;
if(Z.isOpen){Z.refreshOptions(false)
}},removeOption:function(U,S){var R=this;
U=z(U);
var Q=R.renderCache.item;
var T=R.renderCache.option;
if(Q){delete Q[U]
}if(T){delete T[U]
}delete R.userOptions[U];
delete R.options[U];
R.lastQuery=null;
R.trigger("option_remove",U);
R.removeItem(U,S)
},clearOptions:function(){var Q=this;
Q.loadedSearches={};
Q.userOptions={};
Q.renderCache={};
var R=Q.options;
w.each(Q.options,function(S,T){if(Q.items.indexOf(S)==-1){delete R[S]
}});
Q.options=Q.sifter.items=R;
Q.lastQuery=null;
Q.trigger("option_clear")
},getOption:function(Q){return this.getElementWithValue(Q,this.$dropdown_content.find("[data-selectable]"))
},getAdjacentOption:function(T,S){var Q=this.$dropdown.find("[data-selectable]");
var R=Q.index(T)+S;
return R>=0&&R<Q.length?Q.eq(R):w()
},getElementWithValue:function(S,R){S=z(S);
if(typeof S!=="undefined"&&S!==null){for(var Q=0,T=R.length;
Q<T;
Q++){if(R[Q].getAttribute("data-value")===S){return w(R[Q])
}}}return w()
},getItem:function(Q){return this.getElementWithValue(Q,this.$control.children())
},addItems:function(S,R){this.buffer=document.createDocumentFragment();
var V=this.$control[0].childNodes;
for(var T=0;
T<V.length;
T++){this.buffer.appendChild(V[T])
}var Q=w.isArray(S)?S:[S];
for(var T=0,W=Q.length;
T<W;
T++){this.isPending=(T<W-1);
this.addItem(Q[T],R)
}var U=this.$control[0];
U.insertBefore(this.buffer,U.firstChild);
this.buffer=null
},addItem:function(S,Q){var R=Q?[]:["change"];
a(this,R,function(){var aa,U,Y;
var ab=this;
var T=ab.settings.mode;
var X,W,Z,V;
S=z(S);
if(ab.items.indexOf(S)!==-1){if(T==="single"){ab.close()
}return
}if(!ab.options.hasOwnProperty(S)){return
}if(T==="single"){ab.clear(Q)
}if(T==="multi"&&ab.isFull()){return
}aa=w(ab.render("item",ab.options[S]));
V=ab.isFull();
ab.items.splice(ab.caretPos,0,S);
ab.insertAtCaret(aa);
if(!ab.isPending||(!V&&ab.isFull())){ab.refreshState()
}if(ab.isSetup){Y=ab.$dropdown_content.find("[data-selectable]");
if(!ab.isPending){U=ab.getOption(S);
Z=ab.getAdjacentOption(U,1).attr("data-value");
ab.refreshOptions(ab.isFocused&&T!=="single");
if(Z){ab.setActiveOption(ab.getOption(Z))
}}if(!Y.length||ab.isFull()){ab.close()
}else{if(!ab.isPending){ab.positionDropdown()
}}ab.updatePlaceholder();
ab.trigger("item_add",S,aa);
if(!ab.isPending){ab.updateOriginalInput({silent:Q})
}}})
},removeItem:function(V,T){var S=this;
var R,U,Q;
R=(V instanceof w)?V:S.getItem(V);
V=z(R.attr("data-value"));
U=S.items.indexOf(V);
if(U!==-1){R.remove();
if(R.hasClass("active")){Q=S.$activeItems.indexOf(R[0]);
S.$activeItems.splice(Q,1)
}S.items.splice(U,1);
S.lastQuery=null;
if(!S.settings.persist&&S.userOptions.hasOwnProperty(V)){S.removeOption(V,T)
}if(U<S.caretPos){S.setCaret(S.caretPos-1)
}S.refreshState();
S.updatePlaceholder();
S.updateOriginalInput({silent:T});
S.positionDropdown();
S.trigger("item_remove",V,R)
}},createItem:function(T,V){var S=this;
var W=S.caretPos;
T=T||w.trim(S.$control_input.val()||"");
var X=arguments[arguments.length-1];
if(typeof X!=="function"){X=function(){}
}if(typeof V!=="boolean"){V=true
}if(!S.canCreate(T)){X();
return false
}S.lock();
var Q=(typeof S.settings.create==="function")?this.settings.create:function(Y){var Z={};
Z[S.settings.labelField]=Y;
Z[S.settings.valueField]=Y;
return Z
};
var U=s(function(Z){S.unlock();
if(!Z||typeof Z!=="object"){return X()
}var Y=z(Z[S.settings.valueField]);
if(typeof Y!=="string"){return X()
}S.setTextboxValue("");
S.addOption(Z);
S.setCaret(W);
S.addItem(Y);
S.refreshOptions(V&&S.settings.mode!=="single");
X(Z)
});
var R=Q.apply(this,[T,U]);
if(typeof R!=="undefined"){U(R)
}return true
},refreshItems:function(){this.lastQuery=null;
if(this.isSetup){this.addItem(this.items)
}this.refreshState();
this.updateOriginalInput()
},refreshState:function(){this.refreshValidityState();
this.refreshClasses()
},refreshValidityState:function(){if(!this.isRequired){return false
}var Q=!this.items.length;
this.isInvalid=Q;
this.$control_input.prop("required",Q);
this.$input.prop("required",!Q)
},refreshClasses:function(){var Q=this;
var R=Q.isFull();
var S=Q.isLocked;
Q.$wrapper.toggleClass("rtl",Q.rtl);
Q.$control.toggleClass("focus",Q.isFocused).toggleClass("disabled",Q.isDisabled).toggleClass("required",Q.isRequired).toggleClass("invalid",Q.isInvalid).toggleClass("locked",S).toggleClass("full",R).toggleClass("not-full",!R).toggleClass("input-active",Q.isFocused&&!Q.isInputHidden).toggleClass("dropdown-active",Q.isOpen).toggleClass("has-options",!w.isEmptyObject(Q.options)).toggleClass("has-items",Q.items.length>0);
Q.$control_input.data("grow",!R&&!S)
},isFull:function(){return this.settings.maxItems!==null&&this.items.length>=this.settings.maxItems
},updateOriginalInput:function(U){var T,V,S,R,Q=this;
U=U||{};
if(Q.tagType===l){S=[];
for(T=0,V=Q.items.length;
T<V;
T++){R=Q.options[Q.items[T]][Q.settings.labelField]||"";
S.push('<option value="'+E(Q.items[T])+'" selected="selected">'+E(R)+"</option>")
}if(!S.length&&!this.$input.attr("multiple")){S.push('<option value="" selected="selected"></option>')
}Q.$input.html(S.join(""))
}else{Q.$input.val(Q.getValue());
Q.$input.attr("value",Q.$input.val())
}if(Q.isSetup){if(!U.silent){Q.trigger("change",Q.$input.val())
}}},updatePlaceholder:function(){if(!this.settings.placeholder){return
}var Q=this.$control_input;
if(this.items.length){Q.removeAttr("placeholder")
}else{Q.attr("placeholder",this.settings.placeholder)
}Q.triggerHandler("update",{force:true})
},open:function(){var Q=this;
if(Q.isLocked||Q.isOpen||(Q.settings.mode==="multi"&&Q.isFull())){return
}Q.focus();
Q.isOpen=true;
Q.refreshState();
Q.$dropdown.css({visibility:"hidden",display:"block"});
Q.positionDropdown();
Q.$dropdown.css({visibility:"visible"});
Q.trigger("dropdown_open",Q.$dropdown)
},close:function(){var Q=this;
var R=Q.isOpen;
if(Q.settings.mode==="single"&&Q.items.length){Q.hideInput();
if(!Q.isBlurring){Q.$control_input.blur()
}}Q.isOpen=false;
Q.$dropdown.hide();
Q.setActiveOption(null);
Q.refreshState();
if(R){Q.trigger("dropdown_close",Q.$dropdown)
}},positionDropdown:function(){var Q=this.$control;
var R=this.settings.dropdownParent==="body"?Q.offset():Q.position();
R.top+=Q.outerHeight(true);
this.$dropdown.css({width:Q[0].getBoundingClientRect().width,top:R.top,left:R.left})
},clear:function(R){var Q=this;
if(!Q.items.length){return
}Q.$control.children(":not(input)").remove();
Q.items=[];
Q.lastQuery=null;
Q.setCaret(0);
Q.setActiveItem(null);
Q.updatePlaceholder();
Q.updateOriginalInput({silent:R});
Q.refreshState();
Q.showInput();
Q.trigger("clear")
},insertAtCaret:function(Q){var T=Math.min(this.caretPos,this.items.length);
var R=Q[0];
var S=this.buffer||this.$control[0];
if(T===0){S.insertBefore(R,S.firstChild)
}else{S.insertBefore(R,S.childNodes[T])
}this.setCaret(T+1)
},deleteSelection:function(T){var R,Q,X,Y,Z,V,U,W,S;
var aa=this;
X=(T&&T.keyCode===p)?-1:1;
Y=m(aa.$control_input[0]);
if(aa.$activeOption&&!aa.settings.hideSelected){U=aa.getAdjacentOption(aa.$activeOption,-1).attr("data-value")
}Z=[];
if(aa.$activeItems.length){S=aa.$control.children(".active:"+(X>0?"last":"first"));
V=aa.$control.children(":not(input)").index(S);
if(X>0){V++
}for(R=0,Q=aa.$activeItems.length;
R<Q;
R++){Z.push(w(aa.$activeItems[R]).attr("data-value"))
}if(T){T.preventDefault();
T.stopPropagation()
}}else{if((aa.isFocused||aa.settings.mode==="single")&&aa.items.length){if(X<0&&Y.start===0&&Y.length===0){Z.push(aa.items[aa.caretPos-1])
}else{if(X>0&&Y.start===aa.$control_input.val().length){Z.push(aa.items[aa.caretPos])
}}}}if(!Z.length||(typeof aa.settings.onDelete==="function"&&aa.settings.onDelete.apply(aa,[Z])===false)){return false
}if(typeof V!=="undefined"){aa.setCaret(V)
}while(Z.length){aa.removeItem(Z.pop())
}aa.showInput();
aa.positionDropdown();
aa.refreshOptions(true);
if(U){W=aa.getOption(U);
if(W.length){aa.setActiveOption(W)
}}return true
},advanceSelection:function(U,R){var S,V,W,X,T,Q;
var Y=this;
if(U===0){return
}if(Y.rtl){U*=-1
}S=U>0?"last":"first";
V=m(Y.$control_input[0]);
if(Y.isFocused&&!Y.isInputHidden){X=Y.$control_input.val().length;
T=U<0?V.start===0&&V.length===0:V.start===X;
if(T&&!X){Y.advanceCaret(U,R)
}}else{Q=Y.$control.children(".active:"+S);
if(Q.length){W=Y.$control.children(":not(input)").index(Q);
Y.setActiveItem(null);
Y.setCaret(U>0?W+1:W)
}}},advanceCaret:function(U,T){var Q=this,S,R;
if(U===0){return
}S=U>0?"next":"prev";
if(Q.isShiftDown){R=Q.$control_input[S]();
if(R.length){Q.hideInput();
Q.setActiveItem(R);
T&&T.preventDefault()
}}else{Q.setCaret(Q.caretPos+U)
}},setCaret:function(T){var R=this;
if(R.settings.mode==="single"){T=R.items.length
}else{T=Math.max(0,Math.min(R.items.length,T))
}if(!R.isPending){var S,W,U,Q,V;
Q=R.$control.children(":not(input)");
for(S=0,W=Q.length;
S<W;
S++){V=w(Q[S]).detach();
if(S<T){R.$control_input.before(V)
}else{R.$control.append(V)
}}}R.caretPos=T
},lock:function(){this.close();
this.isLocked=true;
this.refreshState()
},unlock:function(){this.isLocked=false;
this.refreshState()
},disable:function(){var Q=this;
Q.$input.prop("disabled",true);
Q.$control_input.prop("disabled",true).prop("tabindex",-1);
Q.isDisabled=true;
Q.lock()
},enable:function(){var Q=this;
Q.$input.prop("disabled",false);
Q.$control_input.prop("disabled",false).prop("tabindex",Q.tabIndex);
Q.isDisabled=false;
Q.unlock()
},destroy:function(){var Q=this;
var S=Q.eventNS;
var R=Q.revertSettings;
Q.trigger("destroy");
Q.off();
Q.$wrapper.remove();
Q.$dropdown.remove();
Q.$input.html("").append(R.$children).removeAttr("tabindex").removeClass("selectized").attr({tabindex:R.tabindex}).show();
Q.$control_input.removeData("grow");
Q.$input.removeData("selectize");
if(--c.count==0&&c.$testInput){c.$testInput.remove();
c.$testInput=undefined
}w(window).off(S);
w(document).off(S);
w(document.body).off(S);
delete Q.$input[0].selectize
},render:function(Y,S){var W,R,V;
var T="";
var Q=false;
var X=this;
var U=/^[\t \r\n]*<([a-z][a-z0-9\-_]*(?:\:[a-z][a-z0-9\-_]*)?)/i;
if(Y==="option"||Y==="item"){W=z(S[X.settings.valueField]);
Q=!!W
}if(Q){if(!P(X.renderCache[Y])){X.renderCache[Y]={}
}if(X.renderCache[Y].hasOwnProperty(W)){return X.renderCache[Y][W]
}}T=w(X.settings.render[Y].apply(this,[S,E]));
if(Y==="option"||Y==="option_create"){if(!S[X.settings.disabledField]){T.attr("data-selectable","")
}}else{if(Y==="optgroup"){R=S[X.settings.optgroupValueField]||"";
T.attr("data-group",R);
if(S[X.settings.disabledField]){T.attr("data-disabled","")
}}}if(Y==="option"||Y==="item"){T.attr("data-value",W||"")
}if(Q){X.renderCache[Y][W]=T[0]
}return T[0]
},clearCache:function(Q){var R=this;
if(typeof Q==="undefined"){R.renderCache={}
}else{delete R.renderCache[Q]
}},canCreate:function(R){var Q=this;
if(!Q.settings.create){return false
}var S=Q.settings.createFilter;
return R.length&&(typeof S!=="function"||S.apply(Q,[R]))&&(typeof S!=="string"||new RegExp(S).test(R))&&(!(S instanceof RegExp)||S.test(R))
}});
c.count=0;
c.defaults={options:[],optgroups:[],plugins:[],delimiter:",",splitOn:null,persist:true,diacritics:true,create:false,createOnBlur:false,createFilter:null,highlight:true,openOnFocus:true,maxOptions:1000,maxItems:null,hideSelected:null,addPrecedence:false,selectOnTab:false,preload:false,allowEmptyOption:false,closeAfterSelect:false,scrollDuration:60,loadThrottle:300,loadingClass:"loading",dataAttr:"data-data",optgroupField:"optgroup",valueField:"value",labelField:"text",disabledField:"disabled",optgroupLabelField:"label",optgroupValueField:"value",lockOptgroupOrder:false,sortField:"$order",searchField:["text"],searchConjunction:"and",mode:null,wrapperClass:"selectize-control",inputClass:"selectize-input",dropdownClass:"selectize-dropdown",dropdownContentClass:"selectize-dropdown-content",dropdownParent:null,copyClassesToDropdown:true,render:{}};
w.fn.selectize=function(W){var S=w.fn.selectize.defaults;
var R=w.extend({},S,W);
var T=R.dataAttr;
var aa=R.labelField;
var ab=R.valueField;
var Y=R.disabledField;
var Z=R.optgroupField;
var U=R.optgroupLabelField;
var V=R.optgroupValueField;
var Q=function(aj,ah){var ae,ai,ac,af;
var ad=aj.attr(T);
if(!ad){var ag=w.trim(aj.val()||"");
if(!R.allowEmptyOption&&!ag.length){return
}ac=ag.split(R.delimiter);
for(ae=0,ai=ac.length;
ae<ai;
ae++){af={};
af[aa]=ac[ae];
af[ab]=ac[ae];
ah.options.push(af)
}ah.items=ac
}else{ah.options=JSON.parse(ad);
for(ae=0,ai=ah.options.length;
ae<ai;
ae++){ah.items.push(ah.options[ae][ab])
}}};
var X=function(aj,ah){var ai,ae,af,am,ag=0;
var an=ah.options;
var al={};
var ac=function(ao){var ap=T&&ao.attr(T);
if(typeof ap==="string"&&ap.length){return JSON.parse(ap)
}return null
};
var ak=function(at,ar){at=w(at);
var aq=z(at.val());
if(!aq&&!R.allowEmptyOption){return
}if(al.hasOwnProperty(aq)){if(ar){var ao=al[aq][Z];
if(!ao){al[aq][Z]=ar
}else{if(!w.isArray(ao)){al[aq][Z]=[ao,ar]
}else{ao.push(ar)
}}}return
}var ap=ac(at)||{};
ap[aa]=ap[aa]||at.text();
ap[ab]=ap[ab]||aq;
ap[Y]=ap[Y]||at.prop("disabled");
ap[Z]=ap[Z]||ar;
al[aq]=ap;
an.push(ap);
if(at.is(":selected")){ah.items.push(aq)
}};
var ad=function(ap){var ar,au,at,aq,ao;
ap=w(ap);
at=ap.attr("label");
if(at){aq=ac(ap)||{};
aq[U]=at;
aq[V]=at;
aq[Y]=ap.prop("disabled");
ah.optgroups.push(aq)
}ao=w("option",ap);
for(ar=0,au=ao.length;
ar<au;
ar++){ak(ao[ar],at)
}};
ah.maxItems=aj.attr("multiple")?null:1;
am=aj.children();
for(ai=0,ae=am.length;
ai<ae;
ai++){af=am[ai].tagName.toLowerCase();
if(af==="optgroup"){ad(am[ai])
}else{if(af==="option"){ak(am[ai])
}}}};
return this.each(function(){if(this.selectize){return
}var ac;
var ag=w(this);
var af=this.tagName.toLowerCase();
var ae=ag.attr("placeholder")||ag.attr("data-placeholder");
if(!ae&&!R.allowEmptyOption){ae=ag.children('option[value=""]').text()
}var ad={placeholder:ae,options:[],optgroups:[],items:[]};
if(af==="select"){X(ag,ad)
}else{Q(ag,ad)
}ac=new c(ag,w.extend(true,{},S,ad,W))
})
};
w.fn.selectize.defaults=c.defaults;
w.fn.selectize.support={validity:D};
c.define("drag_drop",function(R){if(!w.fn.sortable){throw new Error('The "drag_drop" plugin requires jQuery UI "sortable".')
}if(this.settings.mode!=="multi"){return
}var Q=this;
Q.lock=(function(){var S=Q.lock;
return function(){var T=Q.$control.data("sortable");
if(T){T.disable()
}return S.apply(Q,arguments)
}
})();
Q.unlock=(function(){var S=Q.unlock;
return function(){var T=Q.$control.data("sortable");
if(T){T.enable()
}return S.apply(Q,arguments)
}
})();
Q.setup=(function(){var S=Q.setup;
return function(){S.apply(this,arguments);
var T=Q.$control.sortable({items:"[data-value]",forcePlaceholderSize:true,disabled:Q.isLocked,start:function(V,U){U.placeholder.css("width",U.helper.css("width"));
T.css({overflow:"visible"})
},stop:function(){T.css({overflow:"hidden"});
var V=Q.$activeItems?Q.$activeItems.slice():null;
var U=[];
T.children("[data-value]").each(function(){U.push(w(this).attr("data-value"))
});
Q.setValue(U);
Q.setActiveItem(V)
}})
}
})()
});
c.define("dropdown_header",function(R){var Q=this;
R=w.extend({title:"Untitled",headerClass:"selectize-dropdown-header",titleRowClass:"selectize-dropdown-header-title",labelClass:"selectize-dropdown-header-label",closeClass:"selectize-dropdown-header-close",html:function(S){return('<div class="'+S.headerClass+'"><div class="'+S.titleRowClass+'"><span class="'+S.labelClass+'">'+S.title+'</span><a href="javascript:void(0)" class="'+S.closeClass+'">&times;</a></div></div>')
}},R);
Q.setup=(function(){var S=Q.setup;
return function(){S.apply(Q,arguments);
Q.$dropdown_header=w(R.html(R));
Q.$dropdown.prepend(Q.$dropdown_header)
}
})()
});
c.define("optgroup_columns",function(S){var R=this;
S=w.extend({equalizeWidth:true,equalizeHeight:true},S);
this.getAdjacentOption=function(X,W){var U=X.closest("[data-group]").find("[data-selectable]");
var V=U.index(X)+W;
return V>=0&&V<U.length?U.eq(V):w()
};
this.onKeyDown=(function(){var U=R.onKeyDown;
return function(Z){var X,Y,V,W;
if(this.isOpen&&(Z.keyCode===q||Z.keyCode===u)){R.ignoreHover=true;
W=this.$activeOption.closest("[data-group]");
X=W.find("[data-selectable]").index(this.$activeOption);
if(Z.keyCode===q){W=W.prev("[data-group]")
}else{W=W.next("[data-group]")
}V=W.find("[data-selectable]");
Y=V.eq(Math.min(V.length-1,X));
if(Y.length){this.setActiveOption(Y)
}return
}return U.apply(this,arguments)
}
})();
var Q=function(){var W;
var U=Q.width;
var V=document;
if(typeof U==="undefined"){W=V.createElement("div");
W.innerHTML='<div style="width:50px;height:50px;position:absolute;left:-50px;top:-50px;overflow:auto;"><div style="width:1px;height:100px;"></div></div>';
W=W.firstChild;
V.body.appendChild(W);
U=Q.width=W.offsetWidth-W.clientWidth;
V.body.removeChild(W)
}return U
};
var T=function(){var V,aa,U,W,Z,Y,X;
X=w("[data-group]",R.$dropdown_content);
aa=X.length;
if(!aa||!R.$dropdown_content.width()){return
}if(S.equalizeHeight){U=0;
for(V=0;
V<aa;
V++){U=Math.max(U,X.eq(V).height())
}X.css({height:U})
}if(S.equalizeWidth){Y=R.$dropdown_content.innerWidth()-Q();
W=Math.round(Y/aa);
X.css({width:W});
if(aa>1){Z=Y-W*(aa-1);
X.eq(aa-1).css({width:Z})
}}};
if(S.equalizeHeight||S.equalizeWidth){t.after(this,"positionDropdown",T);
t.after(this,"refreshOptions",T)
}});
c.define("remove_button",function(Q){Q=w.extend({label:"&times;",title:"Remove",className:"remove",append:true},Q);
var R=function(X,V){V.className="remove-single";
var U=X;
var W='<a href="javascript:void(0)" class="'+V.className+'" tabindex="-1" title="'+E(V.title)+'">'+V.label+"</a>";
var T=function(Y,Z){return w("<span>").append(Y).append(Z)
};
X.setup=(function(){var Y=U.setup;
return function(){if(V.append){var ab=w(U.$input.context).attr("id");
var aa=w("#"+ab);
var Z=U.settings.render.item;
U.settings.render.item=function(ac){return T(Z.apply(X,arguments),W)
}
}Y.apply(X,arguments);
X.$control.on("click","."+V.className,function(ac){ac.preventDefault();
if(U.isLocked){return
}U.clear()
})
}
})()
};
var S=function(X,V){var U=X;
var W='<a href="javascript:void(0)" class="'+V.className+'" tabindex="-1" title="'+E(V.title)+'">'+V.label+"</a>";
var T=function(Y,Z){var aa=Y.search(/(<\/[^>]+>\s*)$/);
return Y.substring(0,aa)+Z+Y.substring(aa)
};
X.setup=(function(){var Y=U.setup;
return function(){if(V.append){var Z=U.settings.render.item;
U.settings.render.item=function(aa){return T(Z.apply(X,arguments),W)
}
}Y.apply(X,arguments);
X.$control.on("click","."+V.className,function(ab){ab.preventDefault();
if(U.isLocked){return
}var aa=w(ab.currentTarget).parent();
U.setActiveItem(aa);
if(U.deleteSelection()){U.setCaret(U.items.length)
}})
}
})()
};
if(this.settings.mode==="single"){R(this,Q);
return
}else{S(this,Q)
}});
c.define("restore_on_backspace",function(R){var Q=this;
R.text=R.text||function(S){return S[this.settings.labelField]
};
this.onKeyDown=(function(){var S=Q.onKeyDown;
return function(V){var T,U;
if(V.keyCode===p&&this.$control_input.val()===""&&!this.$activeItems.length){T=this.caretPos-1;
if(T>=0&&T<this.items.length){U=this.options[this.items[T]];
if(this.deleteSelection(V)){this.setTextboxValue(R.text.apply(this,[U]));
this.refreshOptions(true)
}V.preventDefault();
return
}}return S.apply(this,arguments)
}
})()
});
return c
}));
(function(){function a(f){var e=["Webkit","Moz","O","ms"],d,g=document.createElement("div"),c=f in g.style;
if(!c){f=f.charAt(0).toUpperCase()+f.substr(1);
for(d=0;
d<e.length;
d+=1){c=e[d]+f in g.style;
if(c){break
}}}return c
}var b;
if(!a("fontFeatureSettings")){b={"jp-new-burst":"&#xe92b;","jp-power-up":"&#xe92c;",alert:"&#xe900;",cart:"&#xe901;",download:"&#xe902;",region:"&#xe904;",partners:"&#xe905;",error:"&#xe907;",search:"&#xe908;",check:"&#xe906;",checked:"&#xe906;",facebook:"&#xe90e;",linkedin:"&#xe90f;",twitter:"&#xe910;",rss:"&#xe911;",youtube:"&#xe912;",email:"&#xe913;","trend-micro":"&#xe917;",play:"&#xe919;",close:"&#xe91c;",clear:"&#xe91c;",android:"&#xe91d;",windows:"&#xe920;",ios:"&#xe91e;",mac:"&#xe91f;",login:"&#xe903;",instagram:"&#xe953;","0":0};
delete b["0"];
window.icomoonLiga=function(f){var e,g,d,h,c;
f=f||document.getElementsByTagName("*");
if(!f.length){f=[f]
}for(d=0;
;
d+=1){g=f[d];
if(!g){break
}e=g.className;
if(/icon-/.test(e)){h=g.innerHTML;
if(h&&h.length>1){for(c in b){if(b.hasOwnProperty(c)){h=h.replace(new RegExp(c,"g"),b[c])
}}g.innerHTML=h
}}}};
window.icomoonLiga()
}}());
(function(a){a.fn.visible=function(j){var g=a(this),e=a(window),d=e.scrollTop(),f=d+e.height(),k=g.offset().top,h=k+g.height(),c=j===true?h:k,b=j===true?k:h;
return((b<=f)&&(c>=d))
}
})(jQuery);
(function(n,g){var B="0.7.12",D="",C="?",u="function",j="undefined",e="object",s="string",f="major",w="model",h="name",q="type",m="vendor",y="version",a="architecture",k="console",t="mobile",z="tablet",p="smarttv",A="wearable",v="embedded";
var b={extend:function(E,H){var F={};
for(var G in E){if(H[G]&&H[G].length%2===0){F[G]=H[G].concat(E[G])
}else{F[G]=E[G]
}}return F
},has:function(F,E){if(typeof F==="string"){return E.toLowerCase().indexOf(F.toLowerCase())!==-1
}else{return false
}},lowerize:function(E){return E.toLowerCase()
},major:function(E){return typeof(E)===s?E.replace(/[^\d\.]/g,"").split(".")[0]:g
},trim:function(E){return E.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")
}};
var x={rgx:function(){var O,I=0,H,G,F,E,J,K,L=arguments;
while(I<L.length&&!J){var N=L[I],M=L[I+1];
if(typeof O===j){O={};
for(F in M){if(M.hasOwnProperty(F)){E=M[F];
if(typeof E===e){O[E[0]]=g
}else{O[E]=g
}}}}H=G=0;
while(H<N.length&&!J){J=N[H++].exec(this.getUA());
if(!!J){for(F=0;
F<M.length;
F++){K=J[++G];
E=M[F];
if(typeof E===e&&E.length>0){if(E.length==2){if(typeof E[1]==u){O[E[0]]=E[1].call(this,K)
}else{O[E[0]]=E[1]
}}else{if(E.length==3){if(typeof E[1]===u&&!(E[1].exec&&E[1].test)){O[E[0]]=K?E[1].call(this,K,E[2]):g
}else{O[E[0]]=K?K.replace(E[1],E[2]):g
}}else{if(E.length==4){O[E[0]]=K?E[3].call(this,K.replace(E[1],E[2])):g
}}}}else{O[E]=K?K:g
}}}}I+=2
}return O
},str:function(H,G){for(var F in G){if(typeof G[F]===e&&G[F].length>0){for(var E=0;
E<G[F].length;
E++){if(b.has(G[F][E],H)){return(F===C)?g:F
}}}else{if(b.has(G[F],H)){return(F===C)?g:F
}}}return H
}};
var r={browser:{oldsafari:{version:{"1.0":"/8","1.2":"/1","1.3":"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}}},device:{amazon:{model:{"Fire Phone":["SD","KF"]}},sprint:{model:{"Evo Shift 4G":"7373KT"},vendor:{HTC:"APA",Sprint:"Sprint"}}},os:{windows:{version:{ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0","2000":"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0","7":"NT 6.1","8":"NT 6.2","8.1":"NT 6.3","10":["NT 6.4","NT 10.0"],RT:"ARM"}}}};
var o={browser:[[/(opera\smini)\/([\w\.-]+)/i,/(opera\s[mobiletab]+).+version\/([\w\.-]+)/i,/(opera).+version\/([\w\.]+)/i,/(opera)[\/\s]+([\w\.]+)/i],[h,y],[/(opios)[\/\s]+([\w\.]+)/i],[[h,"Opera Mini"],y],[/\s(opr)\/([\w\.]+)/i],[[h,"Opera"],y],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]+)*/i,/(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i,/(?:ms|\()(ie)\s([\w\.]+)/i,/(rekonq)\/([\w\.]+)*/i,/(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs)\/([\w\.-]+)/i],[h,y],[/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i],[[h,"IE"],y],[/(edge)\/((\d+)?[\w\.]+)/i],[h,y],[/(yabrowser)\/([\w\.]+)/i],[[h,"Yandex"],y],[/(comodo_dragon)\/([\w\.]+)/i],[[h,/_/g," "],y],[/(micromessenger)\/([\w\.]+)/i],[[h,"WeChat"],y],[/xiaomi\/miuibrowser\/([\w\.]+)/i],[y,[h,"MIUI Browser"]],[/\swv\).+(chrome)\/([\w\.]+)/i],[[h,/(.+)/,"$1 WebView"],y],[/android.+samsungbrowser\/([\w\.]+)/i,/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i],[y,[h,"Android Browser"]],[/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i,/(qqbrowser)[\/\s]?([\w\.]+)/i],[h,y],[/(uc\s?browser)[\/\s]?([\w\.]+)/i,/ucweb.+(ucbrowser)[\/\s]?([\w\.]+)/i,/juc.+(ucweb)[\/\s]?([\w\.]+)/i],[[h,"UCBrowser"],y],[/(dolfin)\/([\w\.]+)/i],[[h,"Dolphin"],y],[/((?:android.+)crmo|crios)\/([\w\.]+)/i],[[h,"Chrome"],y],[/;fbav\/([\w\.]+);/i],[y,[h,"Facebook"]],[/fxios\/([\w\.-]+)/i],[y,[h,"Firefox"]],[/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i],[y,[h,"Mobile Safari"]],[/version\/([\w\.]+).+?(mobile\s?safari|safari)/i],[y,h],[/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],[h,[y,x.str,r.browser.oldsafari.version]],[/(konqueror)\/([\w\.]+)/i,/(webkit|khtml)\/([\w\.]+)/i],[h,y],[/(navigator|netscape)\/([\w\.-]+)/i],[[h,"Netscape"],y],[/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,/(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix)\/([\w\.-]+)/i,/(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i,/(links)\s\(([\w\.]+)/i,/(gobrowser)\/?([\w\.]+)*/i,/(ice\s?browser)\/v?([\w\._]+)/i,/(mosaic)[\/\s]([\w\.]+)/i],[h,y]],cpu:[[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],[[a,"amd64"]],[/(ia32(?=;))/i],[[a,b.lowerize]],[/((?:i[346]|x)86)[;\)]/i],[[a,"ia32"]],[/windows\s(ce|mobile);\sppc;/i],[[a,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],[[a,/ower/,"",b.lowerize]],[/(sun4\w)[;\)]/i],[[a,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+;))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i],[[a,b.lowerize]]],device:[[/\((ipad|playbook);[\w\s\);-]+(rim|apple)/i],[w,m,[q,z]],[/applecoremedia\/[\w\.]+ \((ipad)/],[w,[m,"Apple"],[q,z]],[/(apple\s{0,1}tv)/i],[[w,"Apple TV"],[m,"Apple"]],[/(archos)\s(gamepad2?)/i,/(hp).+(touchpad)/i,/(hp).+(tablet)/i,/(kindle)\/([\w\.]+)/i,/\s(nook)[\w\s]+build\/(\w+)/i,/(dell)\s(strea[kpr\s\d]*[\dko])/i],[m,w,[q,z]],[/(kf[A-z]+)\sbuild\/[\w\.]+.*silk\//i],[w,[m,"Amazon"],[q,z]],[/(sd|kf)[0349hijorstuw]+\sbuild\/[\w\.]+.*silk\//i],[[w,x.str,r.device.amazon.model],[m,"Amazon"],[q,t]],[/\((ip[honed|\s\w*]+);.+(apple)/i],[w,m,[q,t]],[/\((ip[honed|\s\w*]+);/i],[w,[m,"Apple"],[q,t]],[/(blackberry)[\s-]?(\w+)/i,/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|huawei|meizu|motorola|polytron)[\s_-]?([\w-]+)*/i,/(hp)\s([\w\s]+\w)/i,/(asus)-?(\w+)/i],[m,w,[q,t]],[/\(bb10;\s(\w+)/i],[w,[m,"BlackBerry"],[q,t]],[/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone)/i],[w,[m,"Asus"],[q,z]],[/(sony)\s(tablet\s[ps])\sbuild\//i,/(sony)?(?:sgp.+)\sbuild\//i],[[m,"Sony"],[w,"Xperia Tablet"],[q,z]],[/(?:sony)?(?:(?:(?:c|d)\d{4})|(?:so[-l].+))\sbuild\//i],[[m,"Sony"],[w,"Xperia Phone"],[q,t]],[/\s(ouya)\s/i,/(nintendo)\s([wids3u]+)/i],[m,w,[q,k]],[/android.+;\s(shield)\sbuild/i],[w,[m,"Nvidia"],[q,k]],[/(playstation\s[34portablevi]+)/i],[w,[m,"Sony"],[q,k]],[/(sprint\s(\w+))/i],[[m,x.str,r.device.sprint.vendor],[w,x.str,r.device.sprint.model],[q,t]],[/(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i],[m,w,[q,z]],[/(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i,/(zte)-(\w+)*/i,/(alcatel|geeksphone|huawei|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]+)*/i],[m,[w,/_/g," "],[q,t]],[/(nexus\s9)/i],[w,[m,"HTC"],[q,z]],[/(nexus\s6p)/i],[w,[m,"Huawei"],[q,t]],[/(microsoft);\s(lumia[\s\w]+)/i],[m,w,[q,t]],[/[\s\(;](xbox(?:\sone)?)[\s\);]/i],[w,[m,"Microsoft"],[q,k]],[/(kin\.[onetw]{3})/i],[[w,/\./g," "],[m,"Microsoft"],[q,t]],[/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?(:?\s4g)?)[\w\s]+build\//i,/mot[\s-]?(\w+)*/i,/(XT\d{3,4}) build\//i,/(nexus\s6)/i],[w,[m,"Motorola"],[q,t]],[/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],[w,[m,"Motorola"],[q,z]],[/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],[[m,b.trim],[w,b.trim],[q,p]],[/hbbtv.+maple;(\d+)/i],[[w,/^/,"SmartTV"],[m,"Samsung"],[q,p]],[/\(dtv[\);].+(aquos)/i],[w,[m,"Sharp"],[q,p]],[/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i,/((SM-T\w+))/i],[[m,"Samsung"],w,[q,z]],[/smart-tv.+(samsung)/i],[m,[q,p],w],[/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i,/(sam[sung]*)[\s-]*(\w+-?[\w-]*)*/i,/sec-((sgh\w+))/i],[[m,"Samsung"],w,[q,t]],[/sie-(\w+)*/i],[w,[m,"Siemens"],[q,t]],[/(maemo|nokia).*(n900|lumia\s\d+)/i,/(nokia)[\s_-]?([\w-]+)*/i],[[m,"Nokia"],w,[q,t]],[/android\s3\.[\s\w;-]{10}(a\d{3})/i],[w,[m,"Acer"],[q,z]],[/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i],[[m,"LG"],w,[q,z]],[/(lg) netcast\.tv/i],[m,w,[q,p]],[/(nexus\s[45])/i,/lg[e;\s\/-]+(\w+)*/i],[w,[m,"LG"],[q,t]],[/android.+(ideatab[a-z0-9\-\s]+)/i],[w,[m,"Lenovo"],[q,z]],[/linux;.+((jolla));/i],[m,w,[q,t]],[/((pebble))app\/[\d\.]+\s/i],[m,w,[q,A]],[/android.+;\s(glass)\s\d/i],[w,[m,"Google"],[q,A]],[/android.+(\w+)\s+build\/hm\1/i,/android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i,/android.+(mi[\s\-_]*(?:one|one[\s_]plus|note lte)?[\s_]*(?:\d\w)?)\s+build/i],[[w,/_/g," "],[m,"Xiaomi"],[q,t]],[/android.+a000(1)\s+build/i],[w,[m,"OnePlus"],[q,t]],[/\s(tablet)[;\/]/i,/\s(mobile)(?:[;\/]|\ssafari)/i],[[q,b.lowerize],m,w]],engine:[[/windows.+\sedge\/([\w\.]+)/i],[y,[h,"EdgeHTML"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i,/(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,/(icab)[\/\s]([23]\.[\d\.]+)/i],[h,y],[/rv\:([\w\.]+).*(gecko)/i],[y,h]],os:[[/microsoft\s(windows)\s(vista|xp)/i],[h,y],[/(windows)\snt\s6\.2;\s(arm)/i,/(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s]+\w)*/i,/(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i],[h,[y,x.str,r.os.windows.version]],[/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],[[h,"Windows"],[y,x.str,r.os.windows.version]],[/\((bb)(10);/i],[[h,"BlackBerry"],y],[/(blackberry)\w*\/?([\w\.]+)*/i,/(tizen)[\/\s]([\w\.]+)/i,/(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]+)*/i,/linux;.+(sailfish);/i],[h,y],[/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]+)*/i],[[h,"Symbian"],y],[/\((series40);/i],[h],[/mozilla.+\(mobile;.+gecko.+firefox/i],[[h,"Firefox OS"],y],[/(nintendo|playstation)\s([wids34portablevu]+)/i,/(mint)[\/\s\(]?(\w+)*/i,/(mageia|vectorlinux)[;\s]/i,/(joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]+)*/i,/(hurd|linux)\s?([\w\.]+)*/i,/(gnu)\s?([\w\.]+)*/i],[h,y],[/(cros)\s[\w]+\s([\w\.]+\w)/i],[[h,"Chromium OS"],y],[/(sunos)\s?([\w\.]+\d)*/i],[[h,"Solaris"],y],[/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]+)*/i],[h,y],[/(haiku)\s(\w+)/i],[h,y],[/(ip[honead]+)(?:.*os\s([\w]+)*\slike\smac|;\sopera)/i],[[h,"iOS"],[y,/_/g,"."]],[/(mac\sos\sx)\s?([\w\s\.]+\w)*/i,/(macintosh|mac(?=_powerpc)\s)/i],[[h,"Mac OS"],[y,/_/g,"."]],[/((?:open)?solaris)[\/\s-]?([\w\.]+)*/i,/(aix)\s((\d)(?=\.|\)|\s)[\w\.]*)*/i,/(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms)/i,/(unix)\s?([\w\.]+)*/i],[h,y]]};
var l=function(F,H){if(!(this instanceof l)){return new l(F,H).getResult()
}var G=F||((n&&n.navigator&&n.navigator.userAgent)?n.navigator.userAgent:D);
var E=H?b.extend(o,H):o;
this.getBrowser=function(){var I=x.rgx.apply(this,E.browser);
I.major=b.major(I.version);
return I
};
this.getCPU=function(){return x.rgx.apply(this,E.cpu)
};
this.getDevice=function(){return x.rgx.apply(this,E.device)
};
this.getEngine=function(){return x.rgx.apply(this,E.engine)
};
this.getOS=function(){return x.rgx.apply(this,E.os)
};
this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}
};
this.getUA=function(){return G
};
this.setUA=function(I){G=I;
return this
};
return this
};
l.VERSION=B;
l.BROWSER={NAME:h,MAJOR:f,VERSION:y};
l.CPU={ARCHITECTURE:a};
l.DEVICE={MODEL:w,VENDOR:m,TYPE:q,CONSOLE:k,MOBILE:t,SMARTTV:p,TABLET:z,WEARABLE:A,EMBEDDED:v};
l.ENGINE={NAME:h,VERSION:y};
l.OS={NAME:h,VERSION:y};
if(typeof(exports)!==j){if(typeof module!==j&&module.exports){exports=module.exports=l
}exports.UAParser=l
}else{if(typeof(define)===u&&define.amd){define(function(){return l
})
}else{n.UAParser=l
}}var d=n.jQuery||n.Zepto;
if(typeof d!==j){var c=new l();
d.ua=c.getResult();
d.ua.get=function(){return c.getUA()
};
d.ua.set=function(F){c.setUA(F);
var E=c.getResult();
for(var G in E){d.ua[G]=E[G]
}}
}})(typeof window==="object"?window:this);
/*!
* Clamp.js 0.5.1
*
* Copyright 2011-2013, Joseph Schmitt http://joe.sh
* Released under the WTFPL license
* http://sam.zoy.org/wtfpl/
*/
(function(){function a(g,h){h=h||{};
var t=this,k=window,e={clamp:h.clamp||2,useNativeClamp:typeof(h.useNativeClamp)!="undefined"?h.useNativeClamp:true,splitOnChars:h.splitOnChars||[".","-","–","—"," "],animate:h.animate||false,truncationChar:h.truncationChar||"…",truncationHTML:h.truncationHTML},r=g.style,z=g.innerHTML,v=typeof(g.style.webkitLineClamp)!="undefined",d=e.clamp,m=d.indexOf&&(d.indexOf("px")>-1||d.indexOf("em")>-1),n;
if(e.truncationHTML){n=document.createElement("span");
n.innerHTML=e.truncationHTML
}function u(A,B){if(!k.getComputedStyle){k.getComputedStyle=function(C,D){this.el=C;
this.getPropertyValue=function(F){var E=/(\-([a-z]){1})/g;
if(F=="float"){F="styleFloat"
}if(E.test(F)){F=F.replace(E,function(){return arguments[2].toUpperCase()
})
}return C.currentStyle&&C.currentStyle[F]?C.currentStyle[F]:null
};
return this
}
}return k.getComputedStyle(A,null).getPropertyValue(B)
}function j(A){var B=A||g.clientHeight,C=o(g);
return Math.max(Math.floor(B/C),0)
}function x(A){var B=o(g);
return B*A
}function o(B){var A=u(B,"line-height");
if(A=="normal"){A=parseInt(u(B,"font-size"))*1.2
}return parseInt(A)
}var c=e.splitOnChars.slice(0),w=c[0],q,y;
function b(A){if(A.lastChild.children&&A.lastChild.children.length>0){return b(Array.prototype.slice.call(A.children).pop())
}else{if(!A.lastChild||!A.lastChild.nodeValue||A.lastChild.nodeValue==""||A.lastChild.nodeValue==e.truncationChar){A.lastChild.parentNode.removeChild(A.lastChild);
return b(g)
}else{return A.lastChild
}}}function f(D,C){if(!C){return
}function B(){c=e.splitOnChars.slice(0);
w=c[0];
q=null;
y=null
}var A=D.nodeValue.replace(e.truncationChar,"");
if(!q){if(c.length>0){w=c.shift()
}else{w=""
}q=A.split(w)
}if(q.length>1){y=q.pop();
l(D,q.join(w))
}else{q=null
}if(n){D.nodeValue=D.nodeValue.replace(e.truncationChar,"");
g.innerHTML=D.nodeValue+" "+n.innerHTML+e.truncationChar
}if(q){if(g.clientHeight<=C){if(c.length>=0&&w!=""){l(D,q.join(w)+w+y);
q=null
}else{return g.innerHTML
}}}else{if(w==""){l(D,"");
D=b(g);
B()
}}if(e.animate){setTimeout(function(){f(D,C)
},e.animate===true?10:e.animate)
}else{return f(D,C)
}}function l(A,B){A.nodeValue=B+e.truncationChar
}if(d=="auto"){d=j()
}else{if(m){d=j(parseInt(d))
}}var p;
if(v&&e.useNativeClamp){r.overflow="hidden";
r.textOverflow="ellipsis";
r.webkitBoxOrient="vertical";
r.display="-webkit-box";
r.webkitLineClamp=d;
if(m){r.height=e.clamp+"px"
}}else{var s=x(d);
if(s<=g.clientHeight){p=f(b(g),s)
}}return{original:z,clamped:p}
}window.$clamp=a
})();
function id(a){return document.getElementById(a)
}function hasClass(b,a){if(b.classList){return b.classList.contains(a)
}else{if(b.className){return !!b.className.match(new RegExp("(\\s|^)"+a+"(\\s|$)"))
}}return false
}function addClass(b,a){if(b.classList){b.classList.add(a)
}else{if(!hasClass(b,a)){b.className+=" "+a
}}}function removeClass(c,b){if(c.classList){c.classList.remove(b)
}else{if(hasClass(c,b)){var a=new RegExp("(\\s|^)"+b+"(\\s|$)");
c.className=c.className.replace(a," ")
}}}function closest(b,a){while(b&&!hasClass(b,a)){b=b.parentNode
}return b
}function debounce(b,d,a){var c;
return function(){var h=this,g=arguments;
var f=function(){c=null;
if(!a){b.apply(h,g)
}};
var e=a&&!c;
clearTimeout(c);
c=setTimeout(f,d);
if(e){b.apply(h,g)
}}
}function getStringDifference(e,d){var g=0;
var f=0;
var c="";
while(f<d.length){if(e[g]!=d[f]||g==e.length){c+=d[f]
}else{g++
}f++
}return c
}function dropDecimal(a){return parseFloat(a)-parseInt(a)>0?parseFloat(a):parseInt(a)
}function getPriceWithCommas(b){var a=b.toString().split(".");
a[0]=a[0].replace(/\B(?=(\d{3})+(?!\d))/g,",");
return a.join(".")
}function allArrayElementsEqual(a){if(a.length){return !!a.reduce(function(d,c){return(d===c)?d:NaN
})
}else{return false
}}function isMobileDevice(){if(window.innerWidth<768){return true
}return false
}function isLandscapeMode(){if(window.innerWidth>window.innerHeight){return true
}return false
}function isIE(){var c=window.navigator.userAgent;
var b=c.indexOf("MSIE ");
if(b>0){return true
}var a=c.indexOf("Trident/");
if(a>0){return true
}var d=c.indexOf("Edge/");
if(d>0){return true
}return false
}function isIE10orOlder(){var b=window.navigator.userAgent;
var a=b.indexOf("MSIE ");
if(a>0){return true
}}function superscriptSpecialSymbols(a){["©","&copy;","&reg;","®"].forEach(function(b){a=a.split(b).join("<sup>"+b+"</sup>")
});
return a
}function matchSectionHeights(a,e){if($(window).width()>767){var f=$(e).has(a);
for(var d=0;
d<f.length;
d++){var l=f[d];
var m=l.querySelectorAll(a);
if(m.length>1){var g=[];
for(var c=0;
c<m.length;
c++){$(m[c]).css("min-height","auto");
g[c]=$(m[c]).outerHeight()
}if(!allArrayElementsEqual(g)){var h=Math.max.apply(Math,g);
if(h>0){for(var b=0;
b<m.length;
b++){$(m[b]).css("min-height",(h+"px"))
}}}}}}}var TrendMicro={};
TrendMicro.ObserverSubject=function(){this.observers=[]
};
TrendMicro.ObserverSubject.prototype.attach=function(a){this.observers.push(a)
};
TrendMicro.ObserverSubject.prototype.notifyAll=function(){for(var a=0;
a<this.observers.length;
a++){this.observers[a].update()
}};
TrendMicro.Observer=function(b,a){this.subject=b;
this.subject.attach(this);
this.parentObject=a
};
TrendMicro.Observer.prototype.update=function(){console.log(this.parentObject.constructor.name+"is calling the default, blank Observer::update()")
};
TrendMicro.AlertsCookie=function(){this.cookieName="trendMicroVisitorViewedAlerts";
this.rawCookie=document.cookie.match("(^|;)\\s*"+this.cookieName+"\\s*=\\s*([^;]+)");
this.dismissedAlertIds=JSON.parse(this.rawCookie?this.rawCookie.pop():"[]")
};
TrendMicro.AlertsCookie.prototype.setCookie=function(){var a=new Date();
a.setFullYear(a.getFullYear()+10);
document.cookie=this.cookieName+"="+JSON.stringify(this.dismissedAlertIds)+"; path=/; expires="+a.toGMTString()
};
TrendMicro.AlertsCookie.prototype.dismissAlert=function(a){if(this.dismissedAlertIds.indexOf(a)<0){this.dismissedAlertIds.push(a)
}this.setCookie()
};
TrendMicro.AlertsCookie.prototype.isDismissed=function(a){return(this.dismissedAlertIds.indexOf(a)>=0)
};
var alertsCookie=new TrendMicro.AlertsCookie();
var win=$(window);
$(document).ready(function(){var b=$(".slide-fade__up");
markAsVisible(b);
var c=$(".animated-image");
var a=$(".animated-image-set");
if(c.length>0){markAsVisible(c)
}var d=0;
win.scroll(function(e){b.each(function(f,g){var h=$(g);
if(h.visible(true)){h.addClass("come-in")
}});
if(d!=1){if(!allImagesVisible(c)){animateImages(a)
}else{d=1
}}})
});
function allImagesVisible(b){var a=0;
b.each(function(c,d){if($(d).hasClass("already-visible")){a++
}});
if(a==b.length){return true
}return false
}function markAsVisible(a){a.each(function(b,c){var d=$(c);
if(d.visible(true)||d.offset().top<window.pageYOffset){d.addClass("already-visible")
}})
}function animateImagesInThisSet(c,a){if(a>=0){var b=$(c[a]);
b.animate({opacity:1},1000,function(){b.addClass("already-visible");
animateImagesInThisSet(c,a-1)
})
}}function animateImages(a){a.each(function(b,c){var d=$(c);
var e=d.find(".animated-image");
if(e.length>0){if(!$(e[0]).hasClass("already-visible")&&d.visible(true)){animateImagesInThisSet(e,e.length-1)
}}})
}TrendMicro.BootStrapModal=function(){this.currentVideoId="";
this.currentSrc="";
this.metadata={};
this.metadata.title="";
this.metadata.description="";
this.metadata.mediaURL="";
this.metadata.link="";
this.dataTargetSuffix="Modal";
this.intervalHandle={}
};
TrendMicro.PlayListVideo=function(){this.source="";
this.image="";
this.title="";
this.description="";
this.captions="";
this.index="";
this.playlistOptions="";
this.onPauseContent="";
this.onCompleteContent=""
};
TrendMicro.BootStrapModal.prototype.init=function(){this.setupElements();
$("a.bs-modal").on("click",{self:this},this.clickHandler);
$("body").on("hidden.bs.modal","#defaultModal",{self:this},this.stopVideo);
$("body").on("hidden.bs.modal","#playlistViewModal",{self:this},this.stopVideo)
};
TrendMicro.BootStrapModal.prototype.getDefaultModalMarkup=function(){markup='<div class="modal fade" id="defaultModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">';
markup+='	<div class="modal-dialog modal-lg" role="document">';
markup+='		<div class="modal-content">';
markup+='			<div class="modal-header">';
markup+='				<h5 class="modal-title" id="exampleModalLabel">'+superscriptSpecialSymbols(this.metadata.title)+"</h5>";
markup+='				<button type="button" class="close" data-dismiss="modal" aria-label="Close">';
markup+='					<span aria-hidden="true">&times;</span>';
markup+="				</button>";
markup+='				<div class="dropdown">';
markup+='					<button type="button" class="modal-share" data-toggle="dropdown" aria-label="Share"	aria-haspopup="true" aria-expanded="false">';
markup+='						<span class="icon-share"></span>';
markup+="					</button>";
markup+='					<div class="dropdown-menu" id="copy-paste">';
markup+='						<input type="text-field" class="copy-to-clipboard-content" />';
markup+='						<button type="button" class="copy-to-clipboard-button button white-to-red">'+Granite.I18n.get("Copy link")+"</button>";
markup+="					</div>";
markup+="				</div>";
markup+="			</div>";
markup+='			<div class="modal-body">';
markup+="			</div>";
markup+="		</div>";
markup+="	</div>";
markup+="</div>";
return markup
};
TrendMicro.BootStrapModal.prototype.getImageViewerModalMarkup=function(){markup='<div class="modal fade" id="imageViewModal" tabindex="-1" role="dialog" aria-labelledby="imageViewModalLabel" aria-hidden="true">';
markup+='	<div class="modal-dialog modal-lg" role="document">';
markup+='		<div class="modal-content">';
markup+='			<div class="modal-header">';
markup+='				<div class="modal-title" id="imageViewModalLabel">';
markup+='					<span class="modal-main-title">'+superscriptSpecialSymbols(this.metadata.title)+"</span>";
markup+='					<span class="modal-sub-title">'+this.metadata.description+"</span>";
markup+="				</div>";
markup+='				<button type="button" class="close" data-dismiss="modal" aria-label="Close">';
markup+='					<span aria-hidden="true">X</span>';
markup+="				</button>";
markup+='				<div class="dropdown">';
markup+='					<a href="'+this.currentSrc+'" class="download-button" download><span class="icon-mcm-download"></span></a>';
markup+='					<button type="button" class="modal-share" data-toggle="dropdown" aria-label="Share"	aria-haspopup="true" aria-expanded="false">';
markup+='						<span class="icon-mcm-share"></span>';
markup+="					</button>";
markup+='					<div class="dropdown-menu">';
markup+='						<div class="addthis_inline_share_toolbox" data-url="'+this.metadata.link+'" data-title="'+this.metadata.title+'" data-description="'+this.metadata.description+'" data-media="'+this.metadata.mediaURL+'" ></div>';
markup+="					</div>";
markup+="				</div>";
markup+="			</div>";
markup+='			<div class="modal-body">';
markup+="			</div>";
markup+="		</div>";
markup+="	</div>";
markup+="</div>";
return markup
};
TrendMicro.BootStrapModal.prototype.getPlaylistViewModalMarkup=function(){markup='<div class="modal fade" id="playlistViewModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">';
markup+='	<div class="modal-dialog modal-lg" role="document">';
markup+='		<div class="modal-content">';
markup+='			<div class="modal-header">';
markup+='				<h5 class="modal-title" id="exampleModalLabel">'+superscriptSpecialSymbols(this.metadata.title)+"</h5>";
markup+='				<button type="button" class="close" data-dismiss="modal" aria-label="Close">';
markup+='					<span aria-hidden="true">&times;</span>';
markup+="				</button>";
markup+='				<div class="dropdown">';
markup+='					<button type="button" class="modal-share" data-toggle="dropdown" aria-label="Share"	aria-haspopup="true" aria-expanded="false">';
markup+='						<span class="icon-share"></span>';
markup+="					</button>";
markup+='					<div class="dropdown-menu" id="copy-paste">';
markup+='						<input type="text-field" class="copy-to-clipboard-content" />';
markup+='						<button type="button" class="copy-to-clipboard-button button white-to-red">'+Granite.I18n.get("Copy link")+"</button>";
markup+="					</div>";
markup+="				</div>";
markup+="			</div>";
markup+='			<div class="modal-body">';
markup+='				<div class="cta-card hidden"><div class="card-container"><div class="overlay"></div></div></div>';
markup+="			</div>";
markup+="		</div>";
markup+="	</div>";
markup+="</div>";
return markup
};
TrendMicro.BootStrapModal.prototype.enableModalsForRTE=function(a){a.each(function(){var c=$(this).attr("title");
var b=$(this).attr("href");
var d=(b.substring(b.length,b.lastIndexOf("/")+1)).replace(/[^a-zA-Z1-9_\-]/g,"");
$(this).attr({"class":"bs-modal",id:d,"data-modal-title":c})
})
};
TrendMicro.BootStrapModal.prototype.setupElements=function(){var a=this;
a.enableModalsForRTE($("span.bs-modal").find("a"));
a.enableModalsForRTE($("span.bs-modal").closest("a"));
$("a.bs-modal").attr("data-toggle","modal");
$("a.bs-modal").each(function(){targetAttribute=$(this).attr("data-modal-behavior");
if(targetAttribute!=null){$(this).attr("data-target","#"+targetAttribute+a.dataTargetSuffix)
}else{$(this).attr("data-target","#defaultModal")
}});
var c=document.querySelectorAll("a.bs-modal");
for(var b=0;
b<c.length;
b++){var d=$(c[b]).attr("data-iframe-src");
if((d===undefined)||(d===null)){c[b].setAttribute("data-iframe-src",c[b].getAttribute("href"));
c[b].setAttribute("href","#")
}}};
TrendMicro.BootStrapModal.prototype.copyHandler=function(a){var b=document.querySelector(".copy-to-clipboard-content");
$(b).select();
var c=document.execCommand("copy")
};
TrendMicro.BootStrapModal.prototype.clickHandler=function(b){var m=b.data.self;
var c=$(this);
var l=c.attr("data-iframe-src");
if(m.isException(l)){var e=window.open(l,"_blank");
b.stopPropagation();
b.preventDefault()
}else{var k=c.attr("id");
var d="";
if(k){d="?modal="+k
}var h="<div class='img-wrap'><img src='"+l+"' class='modal-img'/></div>";
var f="<div class='modal-video' id='modal-video-"+l+"'></div>";
var a='<iframe class="modal-iframe" src="'+l+'">';
a+="	<p>Your browser does not support iframes.</p>";
a+="</iframe>";
m.currentSrc=l;
m.setTitle(c.attr("data-modal-title"));
m.setDescription(c.attr("data-modal-description"));
m.setMediaURL(c.attr("data-modal-resource-url"));
m.setLink(window.location.host+window.location.pathname+d+window.location.hash);
$(".modal-wrap").html(m.getModalMarkup($(this).attr("data-modal-behavior")));
var j=m.checkURL(l);
switch(j){case"img":$(".modal-body").html(h);
break;
case"video":if($(this).attr("data-modal-behavior")=="playlistView"){m.setupPlaylist(c)
}else{$(".modal-body").html(f);
jwplayer.key=$(".jwPlayerString").text().trim();
jwplayer("modal-video-"+l).setup({file:l});
setTimeout(function(){jwplayer("modal-video-"+l).play();
m.currentVideoId="modal-video-"+l
},500)
}break;
default:$(".modal-body").html(a);
if(a.indexOf("www.youtube.com")!==-1){$(".modal-iframe").attr("allowFullScreen","")
}else{$(".modal-content").addClass("light-modal")
}break
}$("#copy-paste .copy-to-clipboard-content").val(window.location.host+window.location.pathname+d+window.location.hash);
var g=document.querySelector(".copy-to-clipboard-button");
if(g!==null){g.addEventListener("click",m.copyHandler)
}m.refreshAddThis()
}};
TrendMicro.BootStrapModal.prototype.setDescription=function(a){if(a!==""){this.metadata.description=a
}};
TrendMicro.BootStrapModal.prototype.setTitle=function(a){if(a==""||a===undefined){this.metadata.title=$(document).find("title")[0].text
}else{this.metadata.title=a
}};
TrendMicro.BootStrapModal.prototype.setLink=function(a){if(a!==""){this.metadata.link="https://"+a
}};
TrendMicro.BootStrapModal.prototype.setMediaURL=function(a){if(a!==""){this.metadata.mediaURL=a
}};
TrendMicro.BootStrapModal.prototype.setupPlaylist=function(h){var k=this;
var c=new TrendMicro.PlayListVideo();
var a=new TrendMicro.PlayListVideo();
c.source=h.attr("data-iframe-src");
c.image=h.attr("data-video-image");
c.title=h.attr("data-video-title");
c.description=h.attr("data-video-description");
c.captions=h.attr("data-video-captions");
c.index=h.attr("data-video-index");
c.playlistOptions=h.attr("data-playlist-opts");
var g=h.closest(".video-trigger").find(".on-pause-overlay-content");
var f=h.closest(".video-trigger").find(".on-complete-overlay-content");
c.onPauseContent=g.length?g.html():"blah";
c.onCompleteContent=f.length?f.html():"blah2";
if(c.title!==""){$("#playlistViewModal .modal-title").text(c.title)
}var b=JSON.parse(c.playlistOptions);
var d=b.playlist;
var e="<div class='modal-video' id='modal-video-"+c.index+"'></div>";
$(".modal-body").append(e);
jwplayer.key=$(".jwPlayerString").text().trim();
jwplayer("modal-video-"+c.index).setup({file:c.source,image:c.image,title:c.title,description:c.description,tracks:[{file:c.captions,label:"English",kind:"captions"}]});
setTimeout(function(){jwplayer("modal-video-"+c.index).play();
k.currentVideoId="modal-video-"+c.index
},500);
if(d.length>1){if(c.index==d.length-1){a.index=0
}else{a.index=parseInt(c.index)+1
}}var j=h.closest(".tm-playlist").find("[data-video-index='"+a.index+"']");
a.source=j.attr("data-iframe-src");
a.image=j.attr("data-video-image");
a.title=j.attr("data-video-title");
a.description=j.attr("data-video-description");
jwplayer("modal-video-"+c.index).on("pause",function(){k.onPauseHandler(k,"modal-video-"+c.index,c)
});
jwplayer("modal-video-"+c.index).on("complete",function(){k.onCompleteHandler(k,"modal-video-"+c.index,c,a)
})
};
TrendMicro.BootStrapModal.prototype.onPauseHandler=function(a,d,c){var b;
b='<div class="on-pause-card">';
b+='		<div class="resume-video-wrap">';
b+='			<button class="resume-video" title="Resume"><span class="icon-triangle-right"></span></button>';
b+="		</div>";
b+='		<div class="on-pause-content">'+c.onPauseContent+"</div>";
b+="</div>";
$("#playlistViewModal .cta-card .card-container").append(b);
$("#playlistViewModal .resume-video").on("click",{self:a,videoID:d},a.resumeVideoHandler);
$("#playlistViewModal .cta-card").removeClass("hidden")
};
TrendMicro.BootStrapModal.prototype.onCompleteHandler=function(b,f,d,c){var e;
e='<div class="on-complete-card">';
e+='		<div class="on-complete-content"><div class="on-complete-inner-wrap">'+d.onCompleteContent+"</div></div>";
e+='		<div class="next-video-wrap">';
e+='			<div class="next-video-inner-wrap">';
e+='				<span class="up-next">'+Granite.I18n.get("Up next in")+'<span class="timer"> 15</span></span>';
e+='				<div class="next-video-image">';
e+='					<div class="image-wrap">';
e+='						<img src="'+c.image+'" alt="'+c.title+'" class="hidden-xs">';
e+='						<span class="icon-triangle-right hidden-xs"></span>';
e+="					</div>";
e+='					<p class="body-subhead-title">'+c.title+"</p>";
e+='					<p class="video-description">'+c.description+"</p>";
e+='					<div class="mobile-play-button"><span class="icon-triangle-right"></span></div>';
e+="				</div>";
e+="			</div>";
e+="		</div>";
e+="</div>";
$("#playlistViewModal .cta-card .card-container").append(e);
$("#playlistViewModal .next-video-image").on("click",{self:b,currentVideoID:f,nextVideo:c},b.nextVideoHandler);
$("#playlistViewModal .cta-card").removeClass("hidden");
var a=14;
b.intervalHandle=setInterval(function(){$("#playlistViewModal .timer").html(" "+a);
a-=1;
if(a<0){clearInterval(b.intervalHandle);
$("#playlistViewModal .next-video-image").trigger("click")
}},1000)
};
TrendMicro.BootStrapModal.prototype.resumeVideoHandler=function(b){var a=b.data.self;
var c=b.data.videoID;
$("#playlistViewModal .cta-card").addClass("hidden");
$("#playlistViewModal .on-pause-card").remove();
jwplayer(c).play()
};
TrendMicro.BootStrapModal.prototype.nextVideoHandler=function(d){var a=d.data.self;
var c=d.data.currentVideoID;
var b=d.data.nextVideo;
clearInterval(a.intervalHandle);
$("#playlistViewModal .cta-card").addClass("hidden");
$("#playlistViewModal .on-complete-card").remove();
if(b.title!==""){$("#playlistViewModal .modal-title").text(b.title)
}jwplayer(c).remove();
a.setupPlaylist($(".jwPlayer [data-video-index='"+b.index+"']"))
};
TrendMicro.BootStrapModal.prototype.stopVideo=function(c){var a=c.data.self;
var b=a.checkURL(a.currentSrc);
if(b=="video"){jwplayer(a.currentVideoId).stop();
clearInterval(a.intervalHandle)
}else{if(b=="iframe"){$(".modal-iframe").remove()
}}};
TrendMicro.BootStrapModal.prototype.checkURL=function(a){if(a!==null){if(a.match(/\.(jpeg|jpg|gif|png)/)){return"img"
}else{if(a.match(/\.(mp4)/)){return"video"
}else{return"iframe"
}}}};
TrendMicro.BootStrapModal.prototype.isException=function(b){if(b!==null){var d=new UAParser();
var a=navigator.userAgent;
d.setUA(a);
var c=d.getOS().name;
if(b.match(/\.(pdf)/)&&(c=="Android"||c=="iOS"||$(window).width()<1024)){return true
}}return false
};
TrendMicro.BootStrapModal.prototype.getModalMarkup=function(a){switch(a){case"imageView":return this.getImageViewerModalMarkup();
case"playlistView":return this.getPlaylistViewModalMarkup();
default:return this.getDefaultModalMarkup()
}};
TrendMicro.BootStrapModal.prototype.refreshAddThis=function(){if("addthis" in window){window.addthis.layers.refresh()
}};
bsModal=new TrendMicro.BootStrapModal();
$(document).ready(function(){bsModal.init()
});
function formatPrice(d,e,b){if(e===""||d===""||b!==""){return d
}else{var a;
if(e.charAt(0)=="T"||parseInt(e.charAt(1))>0){a=parseFloat(d).toFixed(e.charAt(1))
}else{if(e.charAt(0)=="F"&&e.charAt(1)=="0"){a=""+parseInt(d)
}}if(e.charAt(2)==","&&a.indexOf(".")>-1){a=a.replace(".",",")
}if(e.charAt(3)!="F"){var c=a.split(e.charAt(2));
c[0]=c[0].replace(/\B(?=(\d{3})+(?!\d))/g,e.charAt(3));
a=c.join(e.charAt(2))
}return a
}}function addCurrencySymbol(b,a,c){$(b).each(function(){this.innerHTML=a
});
if(c.charAt(4)=="b"){$(b).each(function(){if($(this).hasClass("right__symbol")){$(this).removeClass("hidden")
}else{$(this).addClass("hidden")
}})
}}document.addEventListener("DOMContentLoaded",function(){function a(){var f=this.parentNode.querySelector(".search-bar__clear-button");
if(f){f.disabled=(this.value.length<=0)
}}function c(){var f=this.parentNode.querySelector(".search-bar__search-field");
if(f){f.value="";
a.call(f)
}}var e=document.querySelectorAll(".search-bar .search-bar__search-field");
var d=document.querySelectorAll(".search-bar .search-bar__clear-button");
for(var b=0;
b<e.length;
b++){e[b].addEventListener("input",a)
}for(b=0;
b<d.length;
b++){d[b].addEventListener("click",c)
}});
$(document).ready(function(){$(".child-of-full-width").parent().addClass("full-browser-width-wrap")
});
$(document).ready(function(){var b=["span.rte-red-bullet","span.rte-circle-bullet","span.rte-square-bullet","span.rte-red-checkmark","span.rte-red-chevron"];
var c=["main-default-title","main-body-title","main-subtitle-white","main-subtitle-black","body-subhead-title"];
for(var a=0;
a<b.length;
a++){$(b[a]).parent("li").addClass("rich-text-li");
$("ol>li").addClass("rich-text-li")
}$("h1,h2,h3,h4").each(function(){for(var d=0;
d<c.length;
d++){if($(this).find("span").hasClass(c[d])){$(this).css("margin","0");
break
}}})
});
document.addEventListener("DOMContentLoaded",function(){function g(k){var j=$(k).find(".sly-frame");
var h=j.width();
var m=j.find(".sly-slide");
var l=0;
m.find("li").each(function(){l+=$(this).innerWidth()
});
if(l>h){return true
}else{return false
}}function d(j){var h=$(j).find(".sly-frame");
var m=$(j).find(".forward");
var l=$(j).find(".backward");
var k={horizontal:1,itemNav:"basic",speed:300,mouseDragging:1,touchDragging:1,nextPage:m,prevPage:l};
h.sly(k)
}function e(j){var h=$(j).find(".sly-frame");
var l=$(j).find(".forward");
var k=$(j).find(".backward");
l.css("display","block");
k.css("display","block")
}function c(j){var h=$(j).find(".sly-frame");
var l=$(j).find(".forward");
var k=$(j).find(".backward");
l.css("display","none");
k.css("display","none")
}var f=document.querySelectorAll(".sly-wrap");
for(var b=0;
b<f.length;
b++){if(g(f[b])){d(f[b]);
e(f[b])
}}var a=debounce(function(){for(var h=0;
h<f.length;
h++){if(g(f[h])){d(f[h]);
e(f[h])
}else{c(f[h])
}$(f[h]).find(".sly-frame").sly("reload")
}},250);
window.addEventListener("resize",a)
});
TrendMicro.AccordionDrawers=function(){this.drawerClassSelector=".drawer";
this.defaultAccordionSelector=".openAtPageLoad";
this.drawerContentClassSelector=".drawer-content";
this.drawerOpenClassSelector=".drawer-display-text .triangle";
this.drawerCloseClassSelector=".drawer-display-text .close"
};
TrendMicro.AccordionDrawers.prototype.init=function(){this.drawerHeightSetup();
this.onClick();
this.onResize();
this.openDefaultAccordion()
};
TrendMicro.AccordionDrawers.prototype.onClick=function(){var a=this;
$(a.drawerClassSelector).on("click",function(){var c=$(this).find(a.drawerContentClassSelector);
var d=$(this).find(a.drawerCloseClassSelector).toggleClass("hidden");
var b=$(this).find(a.drawerOpenClassSelector).toggleClass("hidden");
if(c.css("display")=="none"){$(a.drawerContentClassSelector).not(c).slideUp();
$(a.drawerCloseClassSelector).not(d).addClass("hidden");
$(a.drawerOpenClassSelector).not(b).removeClass("hidden")
}c.slideToggle()
})
};
TrendMicro.AccordionDrawers.prototype.onResize=function(){var a=this;
$(window).resize(function(){a.drawerHeightSetup()
})
};
TrendMicro.AccordionDrawers.prototype.drawerHeightSetup=function(){var b=0;
var c=[];
var a=this;
$(".accordion-drawer--container").each(function(){c[b++]=$(this).attr("id");
a.adjustDrawerHeight("#"+this.id+" .drawer-display-text")
})
};
TrendMicro.AccordionDrawers.prototype.adjustDrawerHeight=function(b){var a=0;
$(b).css("height","auto");
$(b).each(function(){if($(this).height()>a){a=$(this).height()
}});
$(b).height(a)
};
TrendMicro.AccordionDrawers.prototype.openDefaultAccordion=function(){$(this.drawerClassSelector+this.defaultAccordionSelector).click()
};
var accordionDrawersObject=new TrendMicro.AccordionDrawers();
$(document).ready(function(){accordionDrawersObject.init()
});
TrendMicro.AutoModal=function(){};
TrendMicro.AutoModal.prototype.activate=function(){var a=this.getModalQueryParameter();
if(a){$("#"+a).trigger("click")
}};
TrendMicro.AutoModal.prototype.getModalQueryParameter=function(){var b=window.location.search.substring(1);
var c=b.split("&");
for(var a=0;
a<c.length;
a++){var d=c[a].split("=");
if(d[0]=="modal"){return d[1]
}}return false
};
var autoModal=new TrendMicro.AutoModal();
$("document").ready(function(){window.autoModal.activate()
});
var ba_href=null;
var ba_parser=new UAParser();
var ba_user_agent=navigator.userAgent;
ba_parser.setUA(ba_user_agent);
var ba_os=ba_parser.getOS().name;
var ba_device=null;
switch(ba_os){case"Android":ba_device="androidDevice";
break;
case"iOS":ba_device="iOSDevice";
break;
case"Windows Mobile":ba_device="windowsPhoneDevice";
break;
case"Mac OS":ba_device="macDevice";
break;
case"Windows":ba_device="windowsDevice";
break;
default:ba_device="undefined"
}$("ul.button-array").each(function(){$(this).children("li").each(function(){if($(this).children("ul").length){if("undefined"!=ba_device){ba_href=$(this).children("ul").children("li#"+ba_device).text();
if(""!==ba_href){$(this).children("a").attr("href",ba_href)
}}}})
});
TrendMicro.CanvasAnimation=function(){this.canvasComponent=document.querySelector(".canvasAnimation")
};
TrendMicro.CanvasAnimation.prototype.init=function(a){this.setupCanvasComponent(a)
};
TrendMicro.CanvasAnimation.prototype.setupCanvasComponent=function(a){this.header=a.querySelector(".animation-header");
this.content=a.querySelector(".animation-content");
this.heading=a.querySelector(".animation-heading");
this.instructions=a.querySelector(".animation-instructions");
this.operations=a.querySelector(".operations");
this.startButton=a.querySelector(".button-start");
this.aboutButton=a.querySelector(".button-about");
this.seeMoreBlock=a.querySelector(".see-more-wrap");
this.readButton=a.querySelector(".see-more__read");
this.exitButton=a.querySelector(".see-more__exit");
this.closeButton=a.querySelector(".btn-close");
this.canvasContainer=a.querySelector("#animation-canvas");
this.jsFiles=a.querySelector(".js-files");
this.setupEventHandlers();
if(isIE()){$(".canvasAnimation .rte-hollow-text").css({color:"#fff"})
}if(isIE10orOlder()){this.enableFallbackSettings()
}};
TrendMicro.CanvasAnimation.prototype.setupEventHandlers=function(){var a=this;
$(a.startButton).on("click",{self:this},a.startButtonClickHandler);
$(a.aboutButton).on("click",{self:this},a.aboutButtonClickHandler);
$(a.readButton).on("click",{self:this},a.anchorClickHandler);
$(a.exitButton).on("click",{self:this},a.anchorClickHandler);
$(a.closeButton).on("click",{self:this},a.closeButtonClickHandler);
$(a.instructions).on("click",{self:this},a.closeInstructions)
};
TrendMicro.CanvasAnimation.prototype.anchorClickHandler=function(c){c.preventDefault();
var a=c.data.self;
if(!isIE10orOlder()){window.canvasArtwork.disableControls();
window.canvasArtwork.disableTap()
}var b=$("a[name='mainContent']");
$("html,body").animate({scrollTop:$(b).offset().top},"slow",function(){if(!isIE10orOlder()){$("#overlay").removeClass("hidden");
$(a.header).removeClass("hidden");
$(a.heading).removeClass("hidden");
$(a.startButton).removeClass("hidden");
$(a.readButton).removeClass("hidden");
if(!$(a.exitButton).hasClass("hidden")){$(a.exitButton).addClass("hidden")
}}})
};
TrendMicro.CanvasAnimation.prototype.startButtonClickHandler=function(b){var a=b.data.self;
window.canvasArtwork.enableControls();
window.canvasArtwork.enableTap();
$("#overlay").addClass("hidden");
$(a.header).addClass("hidden");
$(a.heading).addClass("hidden");
$(a.startButton).addClass("hidden");
$(a.readButton).addClass("hidden");
$(a.exitButton).removeClass("hidden")
};
TrendMicro.CanvasAnimation.prototype.aboutButtonClickHandler=function(b){var a=b.data.self;
$(a.instructions).removeClass("hidden");
$(a.instructions).find(".instructions-content").animate({right:"0"})
};
TrendMicro.CanvasAnimation.prototype.closeButtonClickHandler=function(b){var a=b.data.self;
$(a.instructions).find(".instructions-content").animate({right:"-1000px"},function(){$(a.instructions).addClass("hidden")
})
};
TrendMicro.CanvasAnimation.prototype.closeInstructions=function(c){var b=c.data.self;
var a=$(b.instructions).find(".instructions-content");
if(!a.is(c.target)&&a.has(c.target).length===0){$(a).animate({right:"-1000px"},function(){$(b.instructions).addClass("hidden")
})
}};
TrendMicro.CanvasAnimation.prototype.enableFallbackSettings=function(){$(this.jsFiles).remove();
$(this.startButton).addClass("hidden");
$(this.operations).addClass("hidden")
};
$(document).ready(function(){canvasObj=new TrendMicro.CanvasAnimation();
if(canvasObj.canvasComponent){$(canvasObj.canvasComponent).addClass("full-browser-width-wrap");
canvasObj.init(canvasObj.canvasComponent)
}});
document.addEventListener("DOMContentLoaded",function(){function c(k){var d=k.querySelector(".list-price")?k.querySelector(".list-price").innerHTML.trim():"";
var l=k.querySelectorAll(".sale-price__value");
var h=k.querySelectorAll(".custom-price__value");
var f=k.querySelectorAll(".list-price__value");
var m=k.querySelector(".price__format")?k.querySelector(".price__format").innerHTML.trim():"";
if(d!==""){var e=k.querySelector(".currency")?k.querySelector(".currency").innerHTML.trim():"";
addCurrencySymbol(k.querySelectorAll(".currency__symbol"),e,m)
}for(var g=0;
g<f.length;
g++){if(f[g]){f[g].innerHTML=formatPrice(f[g].innerHTML.trim(),m,h[g].innerHTML.trim())
}if(l[g]){l[g].innerHTML=formatPrice(l[g].innerHTML.trim(),m,h[g].innerHTML.trim())
}}}var b=document.querySelectorAll(".compareTable,.compareTableV2");
for(var a=0;
a<b.length;
a++){c(b[a])
}});
document.addEventListener("DOMContentLoaded",matchConsumerHoverHeight);
function matchConsumerHoverHeight(){if($(window).width()>767){var b=document.querySelectorAll(".consumerHoverContainer");
for(var n=0;
n<b.length;
n++){var r=b[n];
var d=r.querySelectorAll(".inner-block");
for(var f=0;
f<d.length;
f++){var q=$(d[f]).find(".hover-cta").outerHeight();
if(q>0){$(d[f]).find(".blank-space").outerHeight(q)
}}if($(r).find(".primary-block").length==1){var m=$(r).find(".right-block").outerHeight();
var a=$(r).find(".left-block").outerHeight()-$(r).find(".left-block").find(".inner-block").outerHeight();
var c=m-a;
if(c>0){$(r).find(".primary-block").find(".inner-block").outerHeight(c)
}}else{var e=r.querySelectorAll(".inner-block");
var o=[];
for(var h=0;
h<e.length;
h++){o[h]=$(e[h]).outerHeight()
}var p=Math.max.apply(Math,o);
if(p>0){for(var g=0;
g<e.length;
g++){$(e[g]).outerHeight(p)
}}}}}}$(document).ready(function(){function b(){$(".featureTable .align-check").each(function(d,e){var c=$(e).closest(".check-wrap").height();
$(e).height(c)
})
}if($(".featureTable").length>0){b();
var a=debounce(b,250);
window.addEventListener("resize",a)
}});
TrendMicro.FilterList=function(){this.componentCSSClass="filterList";
this.slingSelector=".filter.json";
this.filterListComponent=document.querySelector("div."+this.componentCSSClass);
this.availableTags=[];
this.runQuerySelectors()
};
TrendMicro.FilterList.prototype.makeAjaxCall=function(){if(!this.filterListComponent){return
}var a=this;
var b=window.location.pathname.replace(".html",this.slingSelector)+"?keywords="+this.searchParameters.keywords+"&selections="+encodeURIComponent(this.searchParameters.selections)+"&sortBy="+this.searchParameters.sortBy+"&page="+this.searchParameters.page;
$.ajax({url:b,dataType:"json",success:function(c){a.ajaxSuccess(c)
},error:function(c){a.ajaxError(c)
}})
};
TrendMicro.FilterList.prototype.constructResults=function(e){if(!e||e.items.length===0){return"<li class='no-results-found'>"+Granite.I18n.get("No results found")+"</li>"
}var b=e.openInNewWindow?"_blank":"_self";
var a=e.openInNewWindow?"noopener noreferrer":"";
var g=e.openInModal;
var c=e.liveWebinarLabel;
var j=e.onDemandLabel;
var h=e.featuredArticleLabel;
var f="";
for(var d=0;
d<e.items.length;
d++){f+=this.resultEntryForItem(e.items[d],b,a,g,c,j,h)
}return f
};
TrendMicro.FilterList.prototype.refreshFilteredList=function(){this.searchParameters.keywords=this.searchInputs.keywords.value;
this.searchParameters.sortBy=this.searchInputs.sort.value;
this.searchParameters.page=1;
this.searchParameters.selections="";
for(var a=0;
a<this.searchInputs.filters.length;
a++){var b=this.searchInputs.filters[a].value;
if(b!=="all"){this.searchParameters.selections+=b+","
}}this.results.list.innerHTML="";
addClass(this.results.nav,"hidden");
addClass(this.results.totalCount,"no-results");
this.results.totalCount.innerHTML=0;
this.makeAjaxCall()
};
TrendMicro.FilterList.prototype.restrictCharacterCount=function(c,b){if(c.length>b&&c.indexOf(" ",b)!==-1){var a=c.slice(0,c.indexOf(" ",b))+'<span class="show-more" data-full-text="'+c+'">...</span>';
return a
}return c
};
TrendMicro.FilterList.prototype.resultEntryForItem=function(g,c,b,e,d,h,f){if(e!==""){g.url+="?modal-view=true&wcmmode=disabled"
}var a=g.liveWebinar?d:h;
var j="<li>\n";
if(g.displayDate===true){j+="	<p class='content_date'>"+g.date+"</p>"
}if(g.featuredArticle){j+="	<span class='featured-label'>"+f+"</span>\n"
}j+="	<a href='"+g.url+"'\n";
j+="			class='image-wrapper "+e+"'\n";
j+="			target='"+c+"'\n";
j+="			rel='"+b+"'\n";
j+="			data-modal-title='"+g.title+"'\n";
j+="			id='"+g.name+"' >\n";
j+="		<div class='image-title-wrap'>\n";
j+="			<div class='article-image'>\n";
j+="				<img src='"+g.imagePath+"' alt='"+g.title+"'>\n";
j+="				<span class='webinar-label'>"+a+"</span>\n";
if(g.graphicListRedLabelTag!==""){j+="				<span class='tag-label'>"+g.graphicListRedLabelTag+"</span>\n"
}if(g.featuredArticle){j+="			<span class='featured-label'>"+f+"</span>\n"
}j+="			</div>\n";
j+="			<p class='webinar-title'>"+superscriptSpecialSymbols(this.restrictCharacterCount(g.title,50))+"</p>\n";
j+="		</div>\n";
j+="		<div class='webinar-description'>\n";
j+="			<p>"+this.restrictCharacterCount(g.description,160)+"</p>\n";
j+="			<p class='webinar-cta'>"+Granite.I18n.get(g.liveWebinarCTALabel)+" ></p>\n";
j+="		</div>\n";
j+="	</a>\n";
j+="	<div class='text-wrapper'>\n";
j+="		<span class='story-title'>\n";
j+="			<a class='"+e+"' href='"+g.url+"' target='"+c+"' rel='"+b+"' id='"+g.name+"-story-title' data-modal-title='"+g.title+"'>\n";
j+=superscriptSpecialSymbols(g.title)+"\n";
j+="			</a>\n";
j+="		</span>\n";
j+="		<p>"+g.description+"\n";
j+="			<a class='read-more "+e+"' href='"+g.url+"' target='"+c+"' rel='"+b+"' id='"+g.name+"-read-more' data-modal-title='"+g.title+"'>\n";
j+="				"+Granite.I18n.get("Read More")+"\n";
j+="			</a>\n";
j+="		</p>\n";
j+="	</div>\n";
j+="</li>\n";
return j
};
TrendMicro.FilterList.prototype.runQuerySelectors=function(){if(!this.filterListComponent||this.filterListComponent.classList.contains("filterListForMedia")){this.filterListComponent=null;
return
}this.searchInputs={filters:this.filterListComponent.querySelectorAll("select.filter-category"),sort:this.filterListComponent.querySelector("select.sort"),keywords:this.filterListComponent.querySelector(".search-bar__search-field")};
this.refreshButton=this.filterListComponent.querySelector(".refresh-button");
this.viewModeButtons=this.filterListComponent.querySelectorAll(".view-mode-button");
this.clearButton=this.filterListComponent.querySelector(".search-bar__clear-button");
this.results={totalCount:this.filterListComponent.querySelector(".results-count__indicator"),list:this.filterListComponent.querySelector(".results-list"),nav:this.filterListComponent.querySelector(".results-nav"),previousButton:this.filterListComponent.querySelector(".results-nav .previous-button"),nextButton:this.filterListComponent.querySelector(".results-nav .next-button"),startIndex:this.filterListComponent.querySelector(".results-nav .first-result-index"),endIndex:this.filterListComponent.querySelector(".results-nav .last-result-index")};
this.searchParameters={keywords:"",selections:"",sortBy:"featured",page:1}
};
TrendMicro.FilterList.prototype.setupClickHandlers=function(){if(!this.filterListComponent){return
}$(this.refreshButton).on("click",{self:this},function(b){b.preventDefault();
b.data.self.refreshFilteredList()
});
$(this.results.previousButton).on("click",{self:this},this.resultsNavButtonClickHandler);
$(this.results.nextButton).on("click",{self:this},this.resultsNavButtonClickHandler);
for(var a=0;
a<this.viewModeButtons.length;
a++){$(this.viewModeButtons[a]).on("click",{self:this},this.viewModeButtonClickHandler)
}$(this.searchInputs.filters).on("change",{self:this},function(b){b.data.self.refreshFilteredList()
});
$(this.searchInputs.sort).on("change",{self:this},function(b){b.data.self.refreshFilteredList()
});
$(".selectize-select").selectize();
this.refreshFilteredList()
};
TrendMicro.FilterList.prototype.ajaxSuccess=function(a){this.results.list.innerHTML=this.constructResults(a);
if(a&&a.totalResults>0){this.results.totalCount.innerHTML=a.totalResults;
removeClass(this.results.totalCount,"no-results")
}else{this.results.totalCount.innerHTML=0;
addClass(this.results.totalCount,"no-results")
}if(a&&!(a.isFirstPage&&a.isLastPage)){removeClass(this.results.nav,"hidden");
this.results.previousButton.disabled=a.isFirstPage;
this.results.nextButton.disabled=a.isLastPage;
this.results.startIndex.innerHTML=a.startIndex;
this.results.endIndex.innerHTML=a.endIndex
}else{addClass(this.results.nav,"hidden")
}this.parseTags(a);
if(window.bsModal){window.bsModal.init()
}if(window.autoModal){window.autoModal.activate()
}};
TrendMicro.FilterList.prototype.ajaxError=function(){this.results.list.innerHTML="<li>"+Granite.I18n.get("Something went wrong with the search. Try again later.")+"</li>"
};
TrendMicro.FilterList.prototype.resultsNavButtonClickHandler=function(b){var a=b.data.self;
if(this.getAttribute("data-direction")==="prev"){a.searchParameters.page--
}else{a.searchParameters.page++
}a.results.list.innerHTML="";
addClass(a.results.nav,"hidden");
a.makeAjaxCall()
};
TrendMicro.FilterList.prototype.viewModeButtonClickHandler=function(c){var a=c.data.self;
removeClass(a.results.list,"results-list--article-view");
removeClass(a.results.list,"results-list--list-view");
removeClass(a.results.list,"results-list--gallery-view");
removeClass(a.results.list,"results-list--webinar-view");
removeClass(a.results.list,"results-list--poster-view");
addClass(a.results.list,"results-list--"+this.getAttribute("data-view")+"-view");
for(var b=0;
b<a.viewModeButtons.length;
b++){removeClass(a.viewModeButtons[b],"active")
}addClass(this,"active")
};
TrendMicro.FilterList.prototype.parseTags=function(a){};
TrendMicro.FilterListV2=function(){this.componentCSSClass="filterListV2";
this.slingSelector=".filterV2.json";
this.filterListComponent=document.querySelector("div."+this.componentCSSClass);
this.runQuerySelectors()
};
TrendMicro.FilterListV2.prototype=new TrendMicro.FilterList();
TrendMicro.FilterListV2.prototype.parseTags=function(a){if(!a||a.availableTagIDs.length!==0){for(let i=0;
i<this.searchInputs.filters.length;
i++){this.resetFilter(this.searchInputs.filters[i]);
this.hideFilters(a.availableTagIDs,this.searchInputs.filters[i])
}}else{for(let i=0;
i<this.searchInputs.filters;
i++){this.resetFilter(this.searchInputs.filters[i])
}}};
TrendMicro.FilterListV2.prototype.resetFilter=function(a){let keys=Object.keys(a.selectize.options);
for(let i=0;
i<keys.length;
i++){a.selectize.getOption(keys[i]).show()
}a.selectize.refreshOptions(false)
};
TrendMicro.FilterListV2.prototype.hideFilters=function(b,a){let keys=Object.keys(a.selectize.options);
for(let i=0;
i<keys.length;
i++){if(keys[i]!=="all"&&b.indexOf(keys[i])===-1){a.selectize.getOption(keys[i]).hide()
}}a.selectize.refreshOptions(false)
};
var filterList=new TrendMicro.FilterList();
var filterListV2=new TrendMicro.FilterListV2();
$(document).ready(function(){filterList.setupClickHandlers();
filterListV2.setupClickHandlers()
});
TrendMicro.FilterListForMedia=function(){this.filterlistForMediaComponent=document.querySelector(".filterListForMedia");
if(!this.filterlistForMediaComponent){return
}this.searchInputs={filters:this.filterlistForMediaComponent.querySelectorAll("select.filter-category"),sort:this.filterlistForMediaComponent.querySelector("select.sort"),keywords:this.filterlistForMediaComponent.querySelector(".search-bar__search-field")};
this.refreshButton=this.filterlistForMediaComponent.querySelector(".refresh-button");
this.viewModeButtons=this.filterlistForMediaComponent.querySelectorAll(".view-mode-button");
this.results={totalCount:this.filterlistForMediaComponent.querySelector(".results-count__indicator"),list:this.filterlistForMediaComponent.querySelector(".results-list"),nav:this.filterlistForMediaComponent.querySelector(".results-nav"),previousButton:this.filterlistForMediaComponent.querySelector(".results-nav .previous-button"),nextButton:this.filterlistForMediaComponent.querySelector(".results-nav .next-button"),startIndex:this.filterlistForMediaComponent.querySelector(".results-nav .first-result-index"),endIndex:this.filterlistForMediaComponent.querySelector(".results-nav .last-result-index")};
this.searchParameters={keywords:"",selections:"",sortBy:"featured",page:1}
};
TrendMicro.FilterListForMedia.prototype.makeAjaxCall=function(){var a=this;
$.ajax({url:window.location.pathname.replace(".html",".filterMedia.json"),data:a.searchParameters,dataType:"json",success:function(b){a.ajaxSuccess(b)
},error:function(b){a.ajaxError(b)
}})
};
TrendMicro.FilterListForMedia.prototype.constructResults=function(f){if(!f||f.items.length===0){return"<li>"+Granite.I18n.get("No results found")+"</li>"
}var d=f.openInNewWindow?"_blank":"_self";
var e=f.openInNewWindow?"noopener noreferrer":"";
var g=f.openInModal;
var c=f.featuredArticleLabel;
var b="";
for(var a=0;
a<f.items.length;
a++){b+=this.resultEntryForItem(f.items[a],d,e,g,c)
}return b
};
TrendMicro.FilterListForMedia.prototype.refreshFilteredList=function(){this.searchParameters.keywords=this.searchInputs.keywords?this.searchInputs.keywords.value:"";
this.searchParameters.sortBy=this.searchInputs.sort.value;
this.searchParameters.page=1;
this.searchParameters.selections="";
for(var a=0;
a<this.searchInputs.filters.length;
a++){var b=this.searchInputs.filters[a].value;
if(b!=="all"){this.searchParameters.selections+=b+","
}}this.results.list.innerHTML="";
addClass(this.results.nav,"hidden");
addClass(this.results.totalCount,"no-results");
this.results.totalCount.innerHTML=0;
this.makeAjaxCall()
};
TrendMicro.FilterListForMedia.prototype.resultEntryForItem=function(d,c,e,f,a){if(f!==""){d.url+="?modal-view=true&wcmmode=disabled"
}var b="<li>\n";
if(d.displayDate===true){b+="	<p class='content_date'>"+d.date+"</p>"
}if(d.featuredArticle){b+="	<span class='featured-label'>"+a+"</span>\n"
}b+="	<a href='"+d.url+"'\n";
b+="			class='image-wrapper "+f+"'\n";
b+="			target='"+c+"'\n";
b+="			rel='"+e+"'\n";
b+="			id='"+d.name+"' >\n";
b+="		<div class='image-title-wrap'>\n";
b+="			<div class='article-image'>\n";
b+="				<img src='"+d.imagePath+"' alt='"+d.title+"'>\n";
if(d.featuredArticle){b+="			<span class='featured-label'>"+a+"</span>\n"
}b+="			</div>\n";
b+="		</div>\n";
b+="	</a>\n";
b+="	<div class='text-wrapper'>\n";
b+="		<span class='story-title'>\n";
b+="			<a class='"+f+"' href='"+d.url+"' target='"+c+"' rel='"+e+"'>\n";
b+=superscriptSpecialSymbols(d.title)+"\n";
b+="			</a>\n";
b+="		</span>\n";
b+="		<p>"+d.description+"\n";
b+="			<a class='"+f+"' href='"+d.url+"' target='"+c+"' rel='"+e+"'>\n";
b+="				Read More\n";
b+="			</a>\n";
b+="		</p>\n";
b+="	</div>\n";
b+="</li>\n";
return b
};
TrendMicro.FilterListForMedia.prototype.setupClickHandlers=function(){if(!this.filterlistForMediaComponent){return
}$(this.refreshButton).on("click",{self:this},function(b){b.preventDefault();
b.data.self.refreshFilteredList()
});
$(this.results.previousButton).on("click",{self:this},this.resultsNavButtonClickHandler);
$(this.results.nextButton).on("click",{self:this},this.resultsNavButtonClickHandler);
for(var a=0;
a<this.viewModeButtons.length;
a++){$(this.viewModeButtons[a]).on("click",{self:this},this.viewModeButtonClickHandler)
}$(this.searchInputs.filters).on("change",{self:this},function(b){b.data.self.refreshFilteredList()
});
this.refreshFilteredList()
};
TrendMicro.FilterListForMedia.prototype.ajaxSuccess=function(a){this.results.list.innerHTML=this.constructResults(a);
if(a&&a.totalResults>0){this.results.totalCount.innerHTML=a.totalResults;
removeClass(this.results.totalCount,"no-results")
}else{this.results.totalCount.innerHTML=0;
addClass(this.results.totalCount,"no-results")
}if(a&&!(a.isFirstPage&&a.isLastPage)){removeClass(this.results.nav,"hidden");
this.results.previousButton.disabled=a.isFirstPage;
this.results.nextButton.disabled=a.isLastPage;
this.results.startIndex.innerHTML=a.startIndex;
this.results.endIndex.innerHTML=a.endIndex
}else{addClass(this.results.nav,"hidden")
}if(window.bsModal){window.bsModal.init()
}if(window.autoModal){window.autoModal.activate()
}};
TrendMicro.FilterListForMedia.prototype.ajaxError=function(){this.results.list.innerHTML="<li>"+Granite.I18n.get("Something went wrong with the search. Try again later.")+"</li>"
};
TrendMicro.FilterListForMedia.prototype.resultsNavButtonClickHandler=function(b){var a=b.data.self;
if(this.getAttribute("data-direction")==="prev"){a.searchParameters.page--
}else{a.searchParameters.page++
}a.results.list.innerHTML="";
addClass(a.results.nav,"hidden");
a.makeAjaxCall()
};
TrendMicro.FilterListForMedia.prototype.viewModeButtonClickHandler=function(c){var a=c.data.self;
removeClass(a.results.list,"results-list--article-view");
removeClass(a.results.list,"results-list--list-view");
removeClass(a.results.list,"results-list--gallery-view");
addClass(a.results.list,"results-list--"+this.getAttribute("data-view")+"-view");
for(var b=0;
b<a.viewModeButtons.length;
b++){removeClass(a.viewModeButtons[b],"active")
}addClass(this,"active")
};
var filterlistForMedia=new TrendMicro.FilterListForMedia();
$(document).ready(function(){filterlistForMedia.setupClickHandlers()
});
$(document).ready(function(){if($(".breadcrumb").length){var c=$(".supercrumb");
var d=$(".breadcrumb"),b=d.offset().top,a=d.height();
$(document).scroll(function(){if(c.length&&c.closest(".artOfCyberSecurityHeader").length==0){var f=$(this).scrollTop();
if(f>b+a){var e=0;
if($(".navbar-main-fixed").length){e=$(".navbar-main-fixed").height()
}d.addClass("breadcrumb-fixed");
d.css("top",e+"px")
}else{if(f<=b){d.removeClass("breadcrumb-fixed");
d.css("top","inherit")
}}}})
}});
TrendMicro.DisruptorPanel=function(){this.disruptorPanelClass=".disruptorPanel";
this.disruptorInnerContainerClass=".disruptorPanel .disruptor-panel__alert .inner-container";
this.disruptorInnerContainer=document.querySelector(this.disruptorInnerContainerClass)
};
TrendMicro.DisruptorPanel.prototype.activate=function(a){if(document.querySelector(".disruptorPanel")){this.populateNotifications()
}};
TrendMicro.DisruptorPanel.prototype.populateNotifications=function(){var a=this;
var b=window.location.pathname.replace(".html",".disruptor.html");
$.ajax({url:b,dataType:"html",success:function(c){a.ajaxSuccess(c)
},error:function(e,c,d){console.log("Disruptor call failed...")
}})
};
TrendMicro.DisruptorPanel.prototype.ajaxSuccess=function(b){if(!b){return
}$(this.disruptorInnerContainer).prepend(b);
$(this.disruptorPanelClass).toggle();
var a=this.disruptorInnerContainer.firstChild.dataset.alertType;
if(a=="redAlert"){addClass(this.disruptorInnerContainer.parentNode,"alert--red")
}(new Hammer(this.disruptorInnerContainer)).on("swipe",this.alertSwipeHandler);
$(this.disruptorInnerContainer).find(".sliding-dismiss-button").on("click",{self:this},this.dismissButtonClickHandler)
};
TrendMicro.DisruptorPanel.prototype.dismissButtonClickHandler=function(d){var b=d.data.self;
var c=closest(this,"disruptor-panel__alert");
var a=c.querySelector(".inner-container > span").getAttribute("data-alert-id");
window.alertsCookie.dismissAlert(a);
c.style.height=c.clientHeight+"px";
setTimeout(addClass,0,c,"dismissing");
setTimeout(b.removeAlert,350,c,b)
};
TrendMicro.DisruptorPanel.prototype.removeAlert=function(b,a){b.parentNode.removeChild(b)
};
TrendMicro.DisruptorPanel.prototype.alertSwipeHandler=function(b){var c=closest(b.target,"disruptor-panel__alert");
var a=c.querySelector(".sliding-dismiss-button");
if(b.direction==Hammer.DIRECTION_LEFT){addClass(a,"visible")
}else{if(b.direction==Hammer.DIRECTION_RIGHT){removeClass(a,"visible")
}}};
if(window.location.pathname.indexOf(".html")>-1){var disruptorPanel=new TrendMicro.DisruptorPanel();
$(document).ready(function(){disruptorPanel.activate()
})
}var globalBodyScroll=0;
$("body").attr("data-scroll-y",0);
$(document).ready(function(){if($(".mainNavMenu").length){var b=$(".mainNavMenu");
if($(".nav-sticky-wrapper").length){$navSticky=$(".nav-sticky-wrapper")
}else{$navSticky=$(".mainNavMenu")
}var c=$navSticky.offset().top,g=$navSticky.height();
$(document).scroll(function(){var m=$(this).scrollTop();
$("body").attr("data-scroll-y",m);
if(m>c+g){$(".mainNavMenu .logo").addClass("logo-show");
$navSticky.addClass("navbar-main-fixed").animate({top:"0px"})
}else{if(m<=c){$(".mainNavMenu .logo").removeClass("logo-show");
$navSticky.removeClass("navbar-main-fixed").clearQueue().animate({top:"-28px"},0)
}}});
$(b).on("shown.bs.dropdown",function(){if(!$(".globalHeaderV2").length){var o=$(window).width();
var q=window.innerHeight;
var m=$(".globalHeader").outerHeight();
var n=b.find(".dropdown.open .dropdown-menu");
var p=0;
if($(".disruptorPanel").length>0){p=m-$(".disruptorPanel").outerHeight()
}if(n.length>0){if(n.height()>(q-m)){if(p===0){n.height(q-m-50)
}else{n.height(q-p-50)
}}}}});
var d=b.find(".menu-toggle.search-button");
d.focus(function(){setTimeout(setFocus,200)
});
var f=$(".utility-search-button");
var k=$(".utility-search-target");
f.click(function(m){if(k.length){console.log("**Menus Present**");
if(k.is(":hidden")){k.show();
setFocus();
$(document).on("mouseup.untilitySearchNamespace",hideSearchBar)
}else{if(k.is(":visible")){k.hide()
}}}});
var j=$(".toggle-newnavmenu-mobile");
var l=$(".toggle-search-mobile");
var a=$("#search-mobile-wrapper");
var h=$("#newnavmenu-mobile");
h.on("show.bs.collapse",function(m){if($(m.target).hasClass("nav-wrapper")){globalBodyScroll=$("body").attr("data-scroll-y");
$("body").addClass("active-menu-mobile")
}a.collapse("hide")
});
h.on("hidden.bs.collapse",function(m){if($(m.target).hasClass("nav-wrapper")){$("body").attr("data-scroll-y",globalBodyScroll);
$("body").removeClass("active-menu-mobile");
$("html, body").animate({scrollTop:"+="+globalBodyScroll},10)
}});
a.on("show.bs.collapse",function(){h.collapse("hide")
});
a.on("hidden.bs.collapse",function(){$(".gsc-input").val("")
});
var e=$(".globalHeaderV2 .bottom-bar .mainNavMenu .dropdown .menu-toggle");
e.click(function(){$("body").addClass("open-nav-dropdown");
var m=document.querySelector(".mainNavMenu .search-dropdown .utility-search-target");
if(m.classList.contains("active")){m.classList.remove("active")
}})
}});
function hideSearchBar(a){if($(".utility-search-target").length){if(!$(".utility-search-target").is(a.target)&&$(".utility-search-target").has(a.target).length===0&&$(".utility-search-target").is(":visible")){$(".utility-search-target").hide(10);
$(document).off("mouseup.untilitySearchNamespace")
}}}function setFocus(){if($("input.gsc-input").length){$("input.gsc-input").focus()
}}$(window).on("addAlertsToMobile",function(d,c){window.utilityMenu.copyDesktopToMobileMenu();
var f=$(".utilityMenu-mobile .dropdown");
var b=$(".utilityMenu-mobile .collapse-items-container");
f.each(function(e,g){$(this).find(".menu-button").attr("data-toggle","collapse").attr("data-target","#utility-collapse-"+e).addClass("collapsed");
var j="",h="";
if($(this).hasClass("utilityAlerts")){$(this).find(".menu-button").attr("data-toggle","collapse").attr("data-target","#utility-collapse-alerts").addClass("collapsed");
if(c!==0){j=$(this).find(".alerts-container").html()
}else{j=$(this).find(".no-alerts").html()
}h='<div class="collapse collapse-utilityAlerts" id="utility-collapse-alerts" data-parent="#utilityMenu-mobile-wrapper"><ul>'+j+"</ul></div>"
}else{$(this).find(".menu-button").attr("data-toggle","collapse").attr("data-target","#utility-collapse-"+e).addClass("collapsed");
j=$(this).find(".dropdown-menu:not(.hidden)").html();
h='<div class="collapse" id="utility-collapse-'+e+'" data-parent="#utilityMenu-mobile-wrapper"><ul>'+j+"</ul></div>"
}b.append(h)
});
var a=$(".utilityMenu-mobile .collapse-items-container .collapse");
a.on("show.bs.collapse",function(){var e=$(".utilityMenu-mobile .collapse-items-container .collapse.in");
var g=e.attr("data-target");
e.collapse("hide")
});
window.utilityMenu.setupPricingCookieClickHandlers("mobile")
});
var searchButton=$(".search-dropdown .search-button");
searchButton.on("click",function(){$(".utility-search-target").toggleClass("active");
if(!$(".utility-search-target").hasClass("active")){$(".gsc-input").val("")
}});
$(".dropdown-menu.utility-search-target .close").on("click",function(){$(this).parent().removeClass("active");
$(".gsc-input").val("")
});
$(window).resize(function(){$(".globalHeaderV2 .bottom-bar .mainNavMenu .nav-wrapper .dropdown").removeClass("open").find(".menu-toggle").attr("aria-expanded",false);
$(".globalHeaderV2 .bottom-bar .mainNavMenu .nav-wrapper .dropdown .dropdown-menu").removeClass("collapse in");
$(".mainNavMenu .nav-wrapper .dropdown-menu").removeAttr("style")
});
TrendMicro.TabbedDropdownMenu=function(){};
TrendMicro.TabbedDropdownMenu.prototype.init=function(){this.activateTabbedDropdownMenu()
};
TrendMicro.TabbedDropdownMenu.prototype.activateTabbedDropdownMenu=function(){$(".tabbedDropdownMenu > .columns-container > .device-tab-container > .column > .device-container > .device").on("click",function(b){b.stopPropagation();
$(".tabbedDropdownMenu .device-container .device.active").removeClass("active");
$(this).addClass("active");
var d=$(this).attr("title");
var a=$(this).parent().parent().parent().siblings();
var c="#"+d;
$(".tabbedDropdownMenu .device-content-container div").removeClass("active");
a.find(c).addClass("active")
})
};
var TabbedDropdownMenuObject=new TrendMicro.TabbedDropdownMenu();
$(document).ready(function(){TabbedDropdownMenuObject.init()
});
TrendMicro.ToggleComponent=function(){this.cookieName="trendMicroVisitorContextIsBusiness";
this.contextField="data-businesscontext"
};
TrendMicro.ToggleComponent.prototype.init=function(){var a=this;
$(".toggle .toggle-button a").on("click",function(b){b.preventDefault();
a.setBusinessModeCookie(this);
window.location=this.href
})
};
TrendMicro.ToggleComponent.prototype.setBusinessModeCookie=function(b){var a=new Date();
a.setFullYear(a.getFullYear()+10);
document.cookie=this.cookieName+"="+b.getAttribute(this.contextField)+"; path=/; expires="+a.toGMTString()
};
var toggleComponent=new TrendMicro.ToggleComponent();
$(document).ready(function(){toggleComponent.init()
});
TrendMicro.UtilityAlerts=function(){this.alertCountElementClass=".utilityAlerts .menu-button__alert-count";
this.alertDivClass=".globalHeaderV2 .utility-menu__alert";
this.dismissButtonClass=".sliding-dismiss-button";
this.alertsULClass=".utilityAlerts .dropdown-menu";
this.noAlertsClass=".globalHeaderV2 .no-alerts";
this.visibleClass="visible";
this.individualAlertClass="utility-menu__alert";
this.alertsCount=0
};
TrendMicro.UtilityAlerts.prototype.activate=function(a){if(document.querySelector(".utilityAlerts")){this.populateNotifications()
}var b=$(".dropdown.utilityAlerts").find(".alerts-container");
if(b.hasClass("priority-background")){$(".collapse-items-container").addClass("priority-background")
}};
TrendMicro.UtilityAlerts.prototype.populateNotifications=function(){var a=this;
var b=window.location.pathname.replace(".html",".notifications.html");
$.ajax({url:b,dataType:"html",success:function(c){a.ajaxSuccess(c)
},error:function(e,c,d){console.log("Notifications call failed...")
}})
};
TrendMicro.UtilityAlerts.prototype.ajaxSuccess=function(b){var a=document.querySelector(this.alertsULClass);
a.innerHTML=b;
this.alertsCount=a.children.length;
$(window).trigger("addAlertsToMobile",[this.alertsCount]);
$(this.alertCountElementClass).html(this.alertsCount);
if(this.alertsCount!==0){this.setupPostAjaxClickHandlers();
removeClass(a,"hidden");
$(this.alertCountElementClass).removeClass("hidden");
$(this.noAlertsClass).addClass("hidden")
}setTimeout(function(){$(".no-alerts li:first").clone().addClass("hidden empty-message").appendTo(".collapse-utilityAlerts ul")
},3000)
};
TrendMicro.UtilityAlerts.prototype.setupPostAjaxClickHandlers=function(){var b=document.querySelectorAll(this.alertDivClass);
for(var a=0;
a<b.length;
a++){var c=b[a];
$(c).find(".sliding-dismiss-button").on("click",{self:this},this.dismissButtonClickHandler);
(new Hammer(c)).on("swipe",this.alertSwipeHandler)
}};
TrendMicro.UtilityAlerts.prototype.getNotificationServletURL=function(){return window.location.origin+window.location.pathname.replace(".html","notifications.html")
};
TrendMicro.UtilityAlerts.prototype.dismissAlert=function(d){var a=d.parentElement;
var b=a.getAttribute("data-alert-id");
addClass(a,"hidden");
if(!window.alertsCookie.isDismissed(b)){window.alertsCookie.dismissAlert(b);
this.alertsCount--
}$("ul li.menu-alert.hidden").remove();
if(this.alertsCount>0){$(this.alertCountElementClass).html(this.alertsCount);
$(this.noAlertsClass).addClass("hidden")
}else{var c=document.querySelector(this.alertsULClass);
addClass(c,"hidden");
$(this.alertCountElementClass).addClass("hidden");
$(this.noAlertsClass).removeClass("hidden");
$(".collapse-utilityAlerts ul li:last").removeClass("hidden")
}};
TrendMicro.UtilityAlerts.prototype.alertSwipeHandler=function(b){var c=closest(b.target,"utility-menu__alert");
var a=c.querySelector(".sliding-dismiss-button");
if(b.direction==Hammer.DIRECTION_LEFT){addClass(a,"visible")
}else{if(b.direction==Hammer.DIRECTION_RIGHT){removeClass(a,"visible")
}}};
TrendMicro.UtilityAlerts.prototype.dismissButtonClickHandler=function(c){var a=c.data.self;
c.stopPropagation();
var b=closest(this,a.individualAlertClass);
a.dismissAlert(b)
};
if(window.location.pathname.indexOf(".html")>-1){var utilityAlerts=new TrendMicro.UtilityAlerts();
$(document).ready(function(){utilityAlerts.activate()
})
}TrendMicro.UtilityMenu=function(){this.pricingCookieSelector=".utilityMenu a.country-pricing-cookie";
this.desktopOnlyPricingCookieSelector=".utilityMenu-desktop a.country-pricing-cookie";
this.mobileOnlyPricingCookieSelector=".utilityMenu-mobile a.country-pricing-cookie";
this.pricingCookieID="country-pricing-cookie";
this.pricingCookieCountryAttribute="data-country-pricing-cookie";
this.debouncedSetDropdownWidthFunction=debounce(this.setDropdownWidth,250);
this.debouncedSetTopPositionFunction=debounce(this.setTopPosition,250);
this.debouncedSetMenuColumnsFunction=debounce(this.setMenuColumns,250)
};
TrendMicro.UtilityMenu.prototype.init=function(){if(!$(".utilityMenu").length){return
}this.utilityMenu=$(".utilityMenu__wrapper");
this.stretchedDropdown=$(".utilityMenu__wrapper .stretched-dropdown");
this.stretchedDropdownMenu=$(".utilityMenu__wrapper .stretched-dropdown .dropdown-menu");
this.backupMenuColumn=this.stretchedDropdownMenu.html();
this.stretchedDropdownBoundary="";
if($(window).width()>767){if($(".globalHeaderV2").length){this.stretchedDropdownBoundary=$(".main-header .top-bar > .inner-container")
}else{this.stretchedDropdownBoundary=$(".main-header > .inner-container > .row")
}}this.setupClickHandlers();
if(this.stretchedDropdown.length!==0){this.setTopPosition();
this.setMenuColumns()
}};
TrendMicro.UtilityMenu.prototype.breakMenuColumns=function(a){this.stretchedDropdown.each(function(){var b=$(this).find("."+a);
b.each(function(){var c=$(this).parents(".dropdown-menu");
$(this).removeClass(a);
var e=$(this).prevUntil("."+a).first().nextUntil("."+a).detach();
$(this).addClass(a);
var d=$('<ul class="menu-column col-xs-12 col-sm-4 col-md-3"></ul>');
d.html(e);
c.append(d)
})
})
};
TrendMicro.UtilityMenu.prototype.resetMenuColumns=function(){this.stretchedDropdownMenu.html(this.backupMenuColumn)
};
TrendMicro.UtilityMenu.prototype.setMenuColumns=function(){this.resetMenuColumns();
if($(window).width()>1023){this.breakMenuColumns("break-column-desktop")
}if($(window).width()>767&&$(window).width()<1024){this.breakMenuColumns("break-column-tablet")
}this.setupPricingCookieClickHandlers("desktop")
};
TrendMicro.UtilityMenu.prototype.setDropdownWidth=function(){if($(window).width()<768){if(window.innerHeight<window.innerWidth){this.utilityDropdownMenu.css({width:$(window).width()/2+"px",right:"1px",left:"auto"})
}else{this.utilityDropdownMenu.css({width:$(window).width()-1+"px",right:"1px",left:"auto"})
}}else{this.utilityDropdownMenu.css({width:"100%",right:"auto",left:"0"})
}};
TrendMicro.UtilityMenu.prototype.setPricingCookie=function(a){document.cookie=this.pricingCookieID+"="+a+"; domain=trendmicro.com; path=/"
};
TrendMicro.UtilityMenu.prototype.setTopPosition=function(){if($(window).width()>767){var a=this.stretchedDropdownBoundary.offset().top;
var b=this.utilityMenu.offset().top;
var d=this.utilityMenu.height();
var c=b-a+d+7.5;
this.stretchedDropdownMenu.css("top",c+"px")
}};
TrendMicro.UtilityMenu.prototype.setupPricingCookieClickHandlers=function(c){var b;
c=typeof c!=="undefined"?c:"all";
switch(c){case"desktop":b=$(this.desktopOnlyPricingCookieSelector);
break;
case"mobile":b=$(this.mobileOnlyPricingCookieSelector);
break;
default:b=$(this.pricingCookieSelector);
break
}var a=this;
b.on("click",function(d){d.preventDefault();
a.setPricingCookie($(this).attr(a.pricingCookieCountryAttribute));
window.location=this.href
})
};
TrendMicro.UtilityMenu.prototype.copyDesktopToMobileMenu=function(){var b=$(".utilityMenu-desktop .utilityMenu__wrapper").html();
var a=$(".utilityMenu-mobile .utilityMenu__wrapper");
a.append(b)
};
TrendMicro.UtilityMenu.prototype.setupClickHandlers=function(){var a=this;
if($(window).width()<768){this.utilityDropdownMenu=$(".utilityMenu__wrapper .dropdown-menu");
if(this.utilityDropdownMenu.length){this.setDropdownWidth();
window.addEventListener("resize",function(){a.debouncedSetDropdownWidthFunction()
})
}}this.stretchedDropdown.on("show.bs.dropdown",function(b){if($(window).width()>767){a.stretchedDropdownMenu.parentsUntil(a.stretchedDropdownBoundary).addClass("position-static");
a.stretchedDropdownBoundary.addClass("position-relative")
}});
this.stretchedDropdown.on("hide.bs.dropdown",function(b){if($(window).width()>767){a.stretchedDropdownMenu.parentsUntil(a.stretchedDropdownBoundary).removeClass("position-static");
a.stretchedDropdownBoundary.removeClass("position-relative")
}});
window.addEventListener("resize",function(){a.debouncedSetTopPositionFunction()
});
window.addEventListener("resize",function(){a.debouncedSetMenuColumnsFunction()
});
this.setupPricingCookieClickHandlers("desktop")
};
var utilityMenu=new TrendMicro.UtilityMenu();
document.addEventListener("DOMContentLoaded",function(){utilityMenu.init()
});
$(document).ready(function(){$(".full-width-anchorLinks").parent().addClass("full-browser-width-wrap");
if($(".sticky").length){var g=$(".sticky");
var c=$("body").scrollTop(),b=g.offset().top,a=(b-c),e=Math.round(a);
g.affix({offset:{top:e}});
var d=0;
if($(".globalHeaderV2, .consumerHeaderV2").length){var f=$(".globalHeaderV2, .consumerHeaderV2").height();
d+=f
}if($(".navbar-main-fixed, .nav-container.sticky").length){var j=$(".navbar-main-fixed, .nav-container.sticky").height();
d+=j
}if($(".affix-top, .affix").length){var k=$(".affix-top, .affix").height();
d+=k
}if($(".breadcrumb").length){var h=$(".breadcrumb").height();
d+=h
}$("body").addClass("scroll-main").scrollspy({target:".navbar",offset:d});
$(window).scroll(function(){var m=0;
if($(".navbar-main-fixed").length){var q=$(".navbar-main-fixed").height();
m+=q
}if($(".nav-container.sticky").length){var p=$(".nav-container.sticky").height();
m+=p
}if($(".breadcrumb-fixed").length){var n=$(".breadcrumb-fixed").height();
m+=n
}if($(".sticky-sem-header").length){var o=$(".sticky-sem-header").height();
m+=o
}if($(window).width()>=1024){$(".affix").css("top",m+"px")
}else{if($(window).width()<1024){var l=$(".navbar-main-fixed, .nav-container.sticky").height();
$(".affix").css("top",l+"px")
}}})
}$(".anchorLinks a").on("click",function(p){if(this.hash!==""){p.preventDefault();
var m=0;
var s=this.hash;
var r=window.pageYOffset||document.documentElement.scrollTop;
var l=0;
var o=0;
var n=0;
if($(".globalHeaderV2, .consumerHeaderV2").length){l=$(".globalHeaderV2, .consumerHeaderV2").height()
}if($(".navbar-main-fixed, .nav-container.sticky, .nav-sticky-wrapper").length){o=$(".navbar-main-fixed, .nav-container.sticky, .nav-sticky-wrapper").height()
}var q=$(".affix, .affix-top").height();
if(r===0){if($(window).width()>=1024){if($(".breadcrumb").length&&($(".breadcrumb ul.crumbs").css("display")!="none")){n=$(".breadcrumb").height();
if($(".breadcrumb .crumbs.supercrumb").length&&($(".breadcrumb ul.crumbs").css("display")!="none")){if($(".disruptorPanel").length&&($(".disruptorPanel").css("display")!="none")){disruptorPanel=$(".disruptorPanel").height();
m=$(s).offset().top-(disruptorPanel+l+n)
}else{m=$(s).offset().top-(l+n+106+q)
}}else{m=$(s).offset().top-(o+n+50+q)
}}else{m=$(s).offset().top-(l+q-10)
}}else{if($(window).width()<1024){if($(".disruptorPanel").length&&$(".bottom-bar").length){o=$(".bottom-bar").height();
disruptorPanel=$(".disruptorPanel").height();
m=$(s).offset().top-(l+o+q-disruptorPanel)
}else{if($(".bottom-bar").length){m=$(s).offset().top-(l+o+q)
}}if($(".nav-container").length){m=$(s).offset().top-(l)
}}}}else{if($(".breadcrumb-fixed").length&&($(".breadcrumb ul.crumbs").css("display")!="none")){n=$(".breadcrumb-fixed").height();
m=$(s).offset().top-(o+n+q);
if($(window).width()<1024){m=$(s).offset().top-(o+q)
}}else{m=$(s).offset().top-(o+q)
}}setTimeout(function(){window.location.hash=s
},300);
$("html, body").animate({scrollTop:m},800)
}})
});
$(document).ready(function(){if($(".hc-tile-full-width").length){$(".hc-tile-full-width").closest(".hcLandingResourcesTile").addClass("full-browser-width-wrap")
}});
TrendMicro.HoverTiles=function(){};
TrendMicro.HoverTiles.prototype.init=function(){this.tabComponents=document.querySelectorAll(".hoverTiles");
for(var a=0;
a<this.tabComponents.length;
a++){this.activateTileOnLoad(this.tabComponents[a]);
this.enableHover();
this.onResize()
}};
TrendMicro.HoverTiles.prototype.activateTileOnLoad=function(a){if($(window).width()>=1170){var b=a.querySelectorAll(".tile-wrapper");
for(var h=0;
h<b.length;
h++){b[0].classList.add("active")
}var e=b[0].getAttribute("title");
var k=b[0].getAttribute("subTitle");
var g=a.querySelector(".tile-title");
var c=a.querySelector(".tile-sub-title");
var f=document.createTextNode(e);
var d=document.createTextNode(k);
if(e!=null||e!=undefined){g.appendChild(f)
}if(k!=null||k!=undefined){c.appendChild(d)
}var j=navigator.userAgent.match(/iPad/i)!=null;
if(j){$(".tile-wrapper").unbind("mouseenter mouseleave");
$(".tile-text-container").hide();
$(".tile-wrapper.active img.non-active").css("display","block");
$(".tile-wrapper.active img.active").css("display","none")
}else{if($(".tile-wrapper").hasClass("active")){$(".tile-wrapper.active img.non-active").css("display","none");
$(".tile-wrapper.active img.active").css("display","block")
}$(".tile-text-container").show()
}}};
TrendMicro.HoverTiles.prototype.desktopHoverOn=function(e){var b=$(e).parents().parents().attr("id");
$("#"+b+" .tile-title").html("");
$("#"+b+" .tile-sub-title").html("");
$(e).find("img.non-active").css("display","none");
$(e).find("img.active").css("display","block");
var l=$(e).attr("title");
var f=$(e).attr("subTitle");
var a=document.getElementById(b);
var h=a.querySelector(".tile-title");
var j=a.querySelector(".tile-sub-title");
var d="";
if(l!=null||l!=undefined){d=document.createTextNode(l);
h.appendChild(d)
}else{var g=document.createElement("div");
g.innerHTML=d;
h.appendChild(g)
}var k="";
if(f!=null||f!=undefined){k=document.createTextNode(f);
j.appendChild(k)
}else{var c=document.createElement("div");
c.innerHTML=k;
j.appendChild(c)
}$("#"+b+" .tile-text-container").fadeIn();
$("#"+b+" .tile-container").find(".tile-wrapper").removeClass("active");
$(e).addClass("active");
if(!$("#"+b+" .tile-wrapper").first().hasClass("active")){$("#"+b+" .tile-wrapper").first().find("img.non-active").show();
$("#"+b+" .tile-wrapper").first().find("img.active").hide()
}};
TrendMicro.HoverTiles.prototype.desktopHoverOff=function(b){var a=$(b).parents().parents().attr("id");
$(b).removeClass("active");
$(b).find("img.non-active").show();
$(b).find("img.active").hide();
$("#"+a+" .tile-title").html("");
$("#"+a+" .tile-sub-title").html("");
$("#"+a+" .tile-text-container").hide()
};
TrendMicro.HoverTiles.prototype.enableHover=function(){if($(window).width()>=1170){var a=this;
$(".tile-wrapper").hover(function(){a.desktopHoverOn(this)
},function(){a.desktopHoverOff(this)
})
}else{$(".tile-wrapper").unbind("mouseenter mouseleave")
}};
TrendMicro.HoverTiles.prototype.onResize=function(){var a=this;
$(window).resize(function(){a.enableHover();
var b=navigator.userAgent.match(/iPad/i)!=null;
if(b){$(".tile-wrapper").unbind("mouseenter mouseleave")
}else{if($(".tile-wrapper").hasClass("active")&&$(window).width()>1170){$(".tile-wrapper.active img.non-active").hide();
$(".tile-wrapper.active img.active").show()
}else{$(".tile-wrapper.active img.non-active").show();
$(".tile-wrapper.active img.active").hide()
}}})
};
var hoverTilesObject=new TrendMicro.HoverTiles();
$(document).ready(function(){hoverTilesObject.init()
});
TrendMicro.InfographicTabs=function(){this.tabComponents=document.querySelectorAll(".infographicTabs")
};
TrendMicro.InfographicTabs.prototype.initializeTabs=function(){this.tabComponents=document.querySelectorAll(".infographicTabs");
for(var a=0;
a<this.tabComponents.length;
a++){this.runQuerySelectors(this.tabComponents[a]);
this.arrangeTabElements();
this.setupClickHandler()
}};
TrendMicro.InfographicTabs.prototype.runQuerySelectors=function(a){this.outerCircle=a.querySelector(".outer-circle");
this.tabElements=a.querySelectorAll(".tab-element");
this.sliderButtonLeft=a.querySelectorAll(".slider-buttons > .icon-chevron-left");
this.sliderButtonRight=a.querySelectorAll(".slider-buttons > .icon-chevron-right")
};
TrendMicro.InfographicTabs.prototype.arrangeTabElements=function(){var b=this;
var a=$(b.outerCircle).width()/2;
var e;
var d=Math.floor(360/(b.tabElements.length));
var f;
for(var c=0;
c<this.tabElements.length;
c++){if(c==0){f=-90
}else{f=-90+d*c
}$(this.tabElements[c]).css({transform:"rotate("+f+"deg) translate("+a+"px) rotate("+-(f)+"deg)"})
}};
TrendMicro.InfographicTabs.prototype.setupClickHandler=function(){this.unsetClickHandler();
for(var a=0;
a<this.tabElements.length;
a++){$(this.tabElements[a]).on("click",{self:this},this.tabElementClickHandler)
}$(this.sliderButtonLeft).on("click",{self:this,tabLength:this.tabElements.length},this.sliderButtonClickHandler);
$(this.sliderButtonRight).on("click",{self:this,tabLength:this.tabElements.length},this.sliderButtonClickHandler)
};
TrendMicro.InfographicTabs.prototype.unsetClickHandler=function(){for(var a=0;
a<this.tabElements.length;
a++){$(this.tabElements[a]).off("click")
}$(this.sliderButtonLeft).off("click");
$(this.sliderButtonRight).off("click")
};
TrendMicro.InfographicTabs.prototype.tabElementClickHandler=function(c){c.preventDefault();
var a=c.data.self;
var b=$(this).attr("data-tab-number");
a.updateTabs(b,this)
};
TrendMicro.InfographicTabs.prototype.sliderButtonClickHandler=function(e){var c=e.data.self;
var b=e.data.tabLength;
var f=$(this).hasClass("icon-chevron-left")?"left":"right";
var g=$(this).closest(".it-content-wrap").find(".it-tab-content.active")[0];
var d=$(g).attr("data-tab-number");
var a=c.getNextTabId(d,f,b);
c.updateTabs(a,this)
};
TrendMicro.InfographicTabs.prototype.getNextTabId=function(b,c,a){if(c=="right"){if(parseInt(b)==a){return 1
}else{return parseInt(b)+1
}}else{if(parseInt(b)==1){return a
}else{return parseInt(b)-1
}}};
TrendMicro.InfographicTabs.prototype.updateTabs=function(b,e){var g=$(e).closest(".infographicTabs");
var j=$(g).find(".it-content-wrap");
var h=$(g).find(".infographic-wrap");
var d=$(j).find(".it-tab-content.active");
var a=$(j).find(".it-tab-content[data-tab-number='"+b+"']");
var c=$(a).attr("data-group-number");
$(j).find(".it-tab-content.come-in").removeClass("come-in");
$(d[0]).fadeOut(500,function(){$(d[0]).removeClass("active");
$(a[0]).show();
$(a[0]).addClass("come-in");
$(a[0]).addClass("active")
});
$(h).find(".tab-element.active").removeClass("active");
$(h).find(".tab-element[data-tab-number='"+b+"']").addClass("active");
var f=$(g).find(".group-title[data-group-number='"+c+"']");
if($(f).hasClass("hidden")){$(f).removeClass("hidden");
$(f).siblings(".group-title").each(function(){if(!$(this).hasClass("hidden")){$(this).addClass("hidden")
}})
}};
TrendMicro.InfographicTabs.prototype.initializeMobileTabs=function(){this.mobileTabComponents=document.querySelectorAll(".infographicTabs");
for(var a=0;
a<this.mobileTabComponents.length;
a++){this.runQuerySelectorsMobile(this.mobileTabComponents[a]);
this.setupClickHandlerMobile()
}};
TrendMicro.InfographicTabs.prototype.runQuerySelectorsMobile=function(a){this.accButtons=a.querySelectorAll(".acc-btn")
};
TrendMicro.InfographicTabs.prototype.setupClickHandlerMobile=function(){this.unsetClickClickHandlerMobile();
for(var a=0;
a<this.accButtons.length;
a++){$(this.accButtons[a]).on("click",{self:this},this.accButtonClickHandler)
}};
TrendMicro.InfographicTabs.prototype.unsetClickClickHandlerMobile=function(){for(var a=0;
a<this.accButtons.length;
a++){$(this.accButtons[a]).off("click")
}};
TrendMicro.InfographicTabs.prototype.accButtonClickHandler=function(c){var a=c.data.self;
if($(this).hasClass("active")){$(this).next(".acc-content").slideUp();
$(this).find(".plus-btn").removeClass("hidden");
$(this).find(".minus-btn").addClass("hidden");
$(this).removeClass("active")
}else{var b=$(this).closest(".mobile-group");
$(b).find(".acc-btn").each(function(){$(this).removeClass("active")
});
$(b).find(".acc-content").each(function(){if(!$(this).hasClass("hidden")){$(this).slideUp()
}});
$(b).find(".minus-btn").each(function(){if(!$(this).hasClass("hidden")){$(this).addClass("hidden")
}});
$(b).find(".plus-btn").each(function(){$(this).removeClass("hidden")
});
$(this).addClass("active");
$(this).next(".acc-content").slideDown();
$(this).find(".plus-btn").addClass("hidden");
$(this).find(".minus-btn").removeClass("hidden")
}};
$(document).ready(function(){var a=new TrendMicro.InfographicTabs();
if(window.outerWidth>1023){a.initializeTabs()
}else{a.initializeMobileTabs()
}var b=debounce(reInitializeInfographicTabs,250);
window.addEventListener("resize",b)
});
function reInitializeInfographicTabs(){var a=new TrendMicro.InfographicTabs();
if($(window).width()>1023){a.initializeTabs()
}else{a.initializeMobileTabs()
}}document.addEventListener("DOMContentLoaded",function(){var b=$(".jwPlayerContainer");
if(typeof b!="undefined"){$.each(b,function(c,f){f=$(f);
var e=f.attr("id");
var d=f.data("jwplayeropts");
jwplayer.key=f.data("jwplayerlicense");
jwplayer(e).setup(d);
if(d.repeat==="true"){jwplayer(e).onTime(function(g){if(g.position>=(g.duration-0.4)){jwplayer(e).seek(0)
}})
}})
}if($(".tm-playlist").length&&!isMobileDevice()){matchJWHeight();
var a=debounce(matchJWHeight,250);
window.addEventListener("resize",a)
}});
function matchJWHeight(){matchSectionHeights(".text-wrap",".jwPlayer")
}TrendMicro.ManualPriceWidget=function(){this.widgets=document.querySelectorAll(".manualPriceWidget")
};
TrendMicro.ManualPriceWidget.prototype.init=function(c){var a=this;
for(var b=0;
b<c.length;
b++){a.runQuerySelectors(c[b]);
a.setupClickHandlers();
a.refreshWidget()
}};
TrendMicro.ManualPriceWidget.prototype.runQuerySelectors=function(a){this.widgetWrap=a.querySelector(".widget-content");
this.regularPriceContainer=a.querySelector(".regular-price");
this.salePriceContainer=a.querySelector(".sale-price");
this.regularPriceValue=a.querySelector(".regular-price__value");
this.salePriceValue=a.querySelector(".sale-price__value");
this.discountContainer=a.querySelector(".discount-percentage");
this.discountValue=a.querySelector(".discount-percentage__value");
this.buyNowButton=a.querySelector(".buy-now-button");
this.productName=a.querySelector(".product-name");
this.operationButtons=a.querySelectorAll(".duration__button, .devices__button");
this.referenceNode=a.querySelector(".reference__node")
};
TrendMicro.ManualPriceWidget.prototype.setupClickHandlers=function(){for(var a=0;
a<this.operationButtons.length;
a++){$(this.operationButtons[a]).on("click",{self:this},this.operationButtonClickHandler)
}};
TrendMicro.ManualPriceWidget.prototype.operationButtonClickHandler=function(b){var a=b.data.self;
$(this).parent().find(".active").removeClass("active");
$(this).addClass("active");
a.runQuerySelectors($(this).closest(".manualPriceWidget")[0]);
a.refreshWidget()
};
TrendMicro.ManualPriceWidget.prototype.evaluateDurationOptionButtons=function(b){var a=[];
$(this.referenceNode).find("[data-number-of-devices="+b+"]").each(function(){a.push($(this).find("[data-duration-years]").attr("data-duration-years"))
});
this.disableNotMatchingButtons(a,"data-duration-years")
};
TrendMicro.ManualPriceWidget.prototype.evaluateDeviceOptionButtons=function(b){var a=[];
$(this.referenceNode).find("[data-number-of-devices]").each(function(){if($(this).find("[data-duration-years]").attr("data-duration-years")==b){a.push($(this).attr("data-number-of-devices"))
}});
this.disableNotMatchingButtons(a,"data-number-of-devices")
};
TrendMicro.ManualPriceWidget.prototype.disableNotMatchingButtons=function(a,d){for(var b=0;
b<this.operationButtons.length;
b++){var c=this.operationButtons[b];
if(typeof $(c).attr(d)!=="undefined"){if(a.indexOf($(c).attr(d).toString())==-1){$(c).addClass("disabled-anchor")
}}}};
TrendMicro.ManualPriceWidget.prototype.refreshWidget=function(){var q;
var b;
for(var j=0;
j<this.operationButtons.length;
j++){var e=this.operationButtons[j];
$(e).removeClass("disabled-anchor");
if($(e).hasClass("active")&&$(e).hasClass("duration__button")){q=e
}if($(e).hasClass("active")&&$(e).hasClass("devices__button")){b=e
}}var c=q.getAttribute("data-duration-years");
var m=b.getAttribute("data-number-of-devices");
var f;
var o;
var a;
var p;
var h;
var n=0;
$(this.referenceNode).find("[data-number-of-devices="+m+"]").each(function(){if($(this).find("[data-duration-years="+c+"]").length){f=$(this).find("[data-name-overwrite]").length?$(this).find("[data-name-overwrite]").attr("data-name-overwrite"):"";
o=$(this).find("[data-regular-price]").length?$(this).find("[data-regular-price]").attr("data-regular-price"):"";
a=$(this).find("[data-sale-price]").length?$(this).find("[data-sale-price]").attr("data-sale-price"):"";
h=$(this).find("[data-discount-percentage]").length?$(this).find("[data-discount-percentage]").attr("data-discount-percentage"):"";
p=$(this).find("[data-buy-url]")?$(this).find("[data-buy-url]").attr("data-buy-url"):""
}else{n+=1
}});
if(n==$(this.referenceNode).find("[data-number-of-devices="+m+"]").length){for(var g=0;
g<this.operationButtons.length;
g++){var d=this.operationButtons[g];
$(d).removeClass("disabled-anchor")
}$($(q).next()).trigger("click");
return
}if(f!==""){this.productName.innerHTML=f
}else{this.productName.innerHTML=$(this.referenceNode).find("[data-product-name]").attr("data-product-name")
}if(o!==""){$(this.regularPriceContainer).removeClass("hidden");
this.regularPriceValue.innerHTML=o;
if(h!==""){$(this.discountContainer).removeClass("hidden");
this.discountValue.innerHTML=h
}else{if(!$(this.discountContainer).hasClass("hidden")){$(this.discountContainer).addClass("hidden")
}}}else{if(!$(this.regularPriceContainer).hasClass("hidden")){$(this.regularPriceContainer).addClass("hidden")
}if(!$(this.discountContainer).hasClass("hidden")){$(this.discountContainer).addClass("hidden")
}}this.salePriceValue.innerHTML=a;
this.buyNowButton.setAttribute("href",p);
this.evaluateDurationOptionButtons(m);
this.evaluateDeviceOptionButtons(c);
$(this.widgetWrap).removeClass("loader")
};
$(document).ready(function(){manualPriceWidget=new TrendMicro.ManualPriceWidget();
manualPriceWidget.init(manualPriceWidget.widgets)
});
$(document).ready(function(){var b=document.querySelector(".mcmHero");
if(b&&isIE()){$(".mcmHero .rte-hollow-text").css({color:"#fff"})
}if(b&&isMobileDevice()){var a=b.querySelector(".background-video");
if(a){if(a.getAttribute("data-poster-mobile")!==""){a.setAttribute("poster",a.getAttribute("data-poster-mobile"))
}}}});
TrendMicro.MediaContacts=function(){};
TrendMicro.MediaContacts.prototype.init=function(){this.tabClickEvent()
};
TrendMicro.MediaContacts.prototype.tabClickEvent=function(){$(".mediaContacts .tabs-wrapper .tabs .tab").on("click",function(){$(".mediaContacts .tabs-wrapper .tabs .tab.active").removeClass("active");
$(this).addClass("active");
var c=$(this).attr("title");
var a=$(this).parent().parent().siblings();
var b="#"+c;
$(".mediaContacts .tabs-content-container div").removeClass("active");
a.find(b).addClass("active")
})
};
var mediaContactsObject=new TrendMicro.MediaContacts();
$(document).ready(function(){mediaContactsObject.init()
});
TrendMicro.MicrositeNav=function(){};
TrendMicro.MicrositeNav.prototype.init=function(){this.toggleMobileNavClickEvent()
};
TrendMicro.MicrositeNav.prototype.toggleMobileNavClickEvent=function(){$(".micrositeNav .nav-title span").on("click",function(){$(".micrositeNav .descendant-links-container").slideToggle();
$(this).toggleClass("icon-chevron-down icon-chevron-up")
})
};
var micrositeNavObject=new TrendMicro.MicrositeNav();
$(document).ready(function(){micrositeNavObject.init()
});
$(document).ready(function(){if($(".pageTreeView").length&&!isMobileDevice()){matchPTVHeight();
var a=debounce(matchPTVHeight,250);
window.addEventListener("resize",a)
}});
function matchPTVHeight(){matchSectionHeights(".all-articles .text-wrap",".pageTreeView")
}$(document).ready(function(){if($(".pageTreeViewStatic").length&&!isMobileDevice()){matchPTVHeightStatic()
}var a=debounce(matchPTVHeightStatic,250);
window.addEventListener("resize",a)
});
function matchPTVHeightStatic(){matchSectionHeights(".all-articles-static .text-wrap",".pageTreeViewStatic")
}document.addEventListener("DOMContentLoaded",function(){function c(R){var t=R.querySelector(".regular-price");
var C=R.querySelector(".sale-price");
var am=R.querySelector(".formatted-list-price");
var x=R.querySelector(".regular-price__value");
var H=R.querySelector(".sale-price__value");
var r=R.querySelector(".discount-percentage");
var N=R.querySelector(".discount-percentage__value");
var h=R.querySelector(".buy-now-button");
var G=R.querySelector(".product-name");
var l=R.querySelector(".defined-product-name");
var D=R.querySelector(".quantity__button--increment");
var ah=R.querySelector(".quantity__button--decrement");
var B=R.querySelector(".quantity__value");
var o;
var ab;
var I;
var M=R.querySelector(".final__ID");
var W=R.querySelector(".promo-checkbox");
var n=R.querySelector(".properties__defaultProductVariation").innerHTML.trim();
var aq=R.querySelector(".properties__siteID").innerHTML.trim();
var K=["tmamer","tmapac","tmdrc"];
var af=R.querySelector(".currency")?R.querySelector(".currency").innerHTML.trim():"";
var z=R.querySelector(".price__format")?R.querySelector(".price__format").innerHTML.trim():"";
addCurrencySymbol(R.querySelectorAll(".currency__symbol"),af,z);
if($(R).find(".widget-wrap").hasClass("enable-fixed-width")){addClass(R,"fixed-width")
}var E=R.querySelectorAll(".duration__button");
function Q(){var aw=this.getAttribute("data-regular-price");
var at=this.getAttribute("data-sale-price");
var ay=this.getAttribute("data-discount-percentage");
var ax=this.getAttribute("data-duration-id");
for(var au=0;
au<E.length;
au++){removeClass(E[au],"active")
}addClass(this,"active");
if(!l){var ar=ag();
var av=al();
var j=e(av,ar);
G.innerHTML=j
}if(["nds_tm","tmindia"].indexOf($(R).find(".properties__siteID").text().trim())!==-1){if(p(this)){E=[];
E=R.querySelectorAll(".duration__button")
}}$(R).find(".devices__button").removeClass("disabled-anchor");
if(["nds_tm","tmindia"].indexOf($(R).find(".properties__siteID").text().trim())!==-1){f(this)
}if(B){ac(ax,"","","");
an()
}else{ac(ax,aw,at,ay)
}$(W).attr("checked",false)
}function q(){var j=function(av,au){return av.innerHTML.trim().toLowerCase().localeCompare(au.innerHTML.trim().toLowerCase())
};
var at=$(E);
at.sort(j);
for(var ar=0;
ar<at.length;
ar++){at[ar].parentNode.appendChild(at[ar])
}}function U(){if(x&&H){if(x.innerHTML==H.innerHTML){addClass(t,"hidden");
addClass(r,"hidden")
}else{removeClass(t,"hidden");
removeClass(r,"hidden")
}}}function ak(ar){var j=$(ar).closest(".hide__for-author");
if(j){j.removeClass("hidden")
}}function V(){var ar=[];
var j=[];
for(var au=0;
au<E.length;
au++){var at=E[au].getAttribute("data-duration-years");
if(ar.indexOf(at)==-1){ar.push(at);
j.push(E[au])
}else{$(E[au]).remove()
}}E=[];
E=j;
ak(E[0])
}function f(j){var ar=$(j).attr("data-duration-years");
var at=$(A).nextUntil("button",".other-durations");
$(A).each(function(){var av=this;
var aw=$(av).nextUntil("button",".other-durations");
var au=0;
$(aw).each(function(){if($(this).hasClass(ar)){au=1
}});
if(au===0){$(av).addClass("disabled-anchor")
}})
}function L(){if(!isNaN(parseInt(n))){for(var at=0;
at<E.length;
at++){if(n==E[at].getAttribute("data-duration-id")){for(var ar=0;
ar<E.length;
ar++){removeClass(E[ar],"active")
}addClass(E[at],"active");
E[at].click();
return
}}}addClass(E[0],"active");
E[0].click()
}if(E.length>0&&$(E[0]).hasClass("button__tmecon")){V()
}for(var aj=0;
aj<E.length;
aj++){E[aj].addEventListener("click",Q)
}if(E.length>0){if(K.indexOf(aq)!==-1){L()
}else{addClass(E[0],"active")
}q(E);
if(K.indexOf(aq)!==-1){ac(R.querySelector("button.active").getAttribute("data-duration-id"),R.querySelector("button.active").getAttribute("data-regular-price"),R.querySelector("button.active").getAttribute("data-sale-price"),R.querySelector("button.active").getAttribute("data-discount-percentage"))
}else{ac(R.querySelector("#default__id").innerHTML,R.querySelector("#default__regular-price").innerHTML,R.querySelector("#default__sales-price").innerHTML,R.querySelector("#default__discount").innerHTML)
}if(B){an()
}}U();
function Z(){var j=parseInt(this.getAttribute("data-increment-value"));
$(h).removeClass("disabled-anchor");
$(E).each(function(){$(this).removeClass("disabled-anchor")
});
if(this.getAttribute("data-max-quantity")){if(parseInt(I)<parseInt(ab)){if(j>1){I=parseInt(I)+j
}else{I++
}}}else{if(parseInt(I)>parseInt(o)){if(j>1){I=parseInt(I)-j
}else{I--
}}}if(parseInt(I)==parseInt(o)){ah.disabled=true
}else{ah.disabled=false
}if(parseInt(I)==parseInt(ab)){D.disabled=true
}else{D.disabled=false
}B.value=I;
an();
U()
}function an(){var at=R.querySelector(".path__from-db .sb-xml");
var ar=R.querySelectorAll(".path__from-class .sb-xml");
if(at){$.ajax({url:at.innerText,dataType:"xml",success:Y})
}else{F=0;
for(var j=0;
j<ar.length;
j++){if(F===0){$.ajax({url:ar[j].innerText,dataType:"xml",success:Y})
}}}}function Y(j){$(j).find("entry").each(function(){var au=$(this).find("link").text();
var aw=$(this).find("start").text();
var ar=$(this).find("finish").text();
var at=$(this).find("price").text();
if(au.indexOf(M.innerHTML)!==-1&&(parseInt(B.value)>=parseInt(aw)&&parseInt(B.value)<=parseInt(ar))){x.innerHTML=formatPrice((parseInt(B.value)*at).toFixed(2),z,"");
H.innerHTML=formatPrice((parseInt(B.value)*at).toFixed(2),z,"");
var av=h.getAttribute("data-base-url")+M.innerHTML+"/quantity="+B.value;
h.setAttribute("href",av);
U();
$(R).find(".widget-content").removeClass("loader");
F=1
}})
}function w(j){$(h).removeClass("disabled-anchor");
$(E).each(function(){$(this).removeClass("disabled-anchor")
});
if(parseInt(j)!="NaN"){if(parseInt(j)>=o&&parseInt(j)<=ab){I=parseInt(j);
if(parseInt(j)==o){ah.disabled=true
}else{ah.disabled=false
}if(parseInt(j)==ab){D.disabled=true
}else{D.disabled=false
}an()
}else{m()
}}else{m()
}}function m(){x.innerHTML=0;
H.innerHTML=0;
$(h).addClass("disabled-anchor");
$(E).each(function(){$(this).addClass("disabled-anchor")
})
}if(D){var aa=parseInt(D.getAttribute("data-increment-value"));
if(aa>1){$(B).attr("disabled",true)
}D.addEventListener("click",Z);
ah.addEventListener("click",Z);
o=ah.getAttribute("data-min-quantity");
ab=D.getAttribute("data-max-quantity");
I=o;
B.onkeyup=function(){w(B.value)
};
var F=0
}var A=R.querySelectorAll(".devices__button");
if(A){if($(A[0]).hasClass("button__tmecon")){O();
var d=A[0].parentElement;
var ad=d.querySelectorAll(".other-durations");
for(var ap=0;
ap<A.length;
ap++){for(var ao=0;
ao<ad.length;
ao++){if($(ad[ao]).find(".device__id").text().trim()==$(A[ap]).attr("data-device-id")){$(A[ap]).after(ad[ao]);
break
}}}s()
}for(var ai=0;
ai<A.length;
ai++){A[ai].innerText=A[ai].innerText.trim();
A[ai].addEventListener("click",y)
}if(["nds_tm","tmindia"].indexOf($(R).find(".properties__siteID").text().trim())!==-1){if(p(A[0])){E=[];
E=R.querySelectorAll(".duration__button")
}}if($(A[0]).hasClass("button__tmecon")){A[0].click()
}if(K.indexOf(aq)!==-1){X()
}}function X(){if(!isNaN(parseInt(n))){for(var au=0;
au<A.length;
au++){var av=A[au].getAttribute("data-device-seats");
var ar=$(A[au]).siblings("[device-seats='"+av+"']");
for(var at=0;
at<ar.size();
at++){if(n==$(ar[at]).children("li.device__id").text()){A[au].click();
L();
return
}}}}if(typeof A[0]!=="undefined"){A[0].click()
}if(typeof E[0]!=="undefined"){E[0].click()
}}function O(){var j=function(av,au){if(parseInt(av.innerHTML.trim())<parseInt(au.innerHTML.trim())){return -1
}else{if(parseInt(av.innerHTML.trim())>parseInt(au.innerHTML.trim())){return 1
}else{return 0
}}};
var at=$(A);
at.sort(j);
A=[];
A=at;
for(var ar=0;
ar<at.length;
ar++){at[ar].parentNode.appendChild(at[ar])
}}function s(){var at=[];
var aw=[];
for(var ax=0;
ax<A.length;
ax++){var au=A[ax].getAttribute("data-device-seats");
if(at.indexOf(au)==-1){at.push(au);
aw.push(A[ax])
}else{for(var av=0;
av<A.length;
av++){var ar=A[av].getAttribute("data-device-seats");
if(au==ar){var ay=$(A[ax]).next(".other-durations");
$(A[av]).next(".other-durations").after(ay);
break
}}$(A[ax]).remove()
}}A=[];
A=aw;
ak(A[0])
}function p(j){var au=$(j).nextUntil("button",".other-durations");
var at=$(R).find(".duration__button");
if(au.length>at.length){var ar=S(au,at,1);
$(ar).each(function(){var aw=this;
var ax=$('<button type="button" class="duration__button"></button>');
ax.attr("data-regular-price",$(aw).find(".device__regular-price").text());
ax.attr("data-sale-price",$(aw).find(".device__sales-price").text());
ax.attr("data-discount-percentage",$(aw).find(".device__discount").text());
ax.attr("data-duration-id",$(aw).find(".device__id").text());
ax.attr("data-duration-years",$(aw).find(".device__duration-years").text());
ax.html($(aw).find(".device__duration-years").text().replace("duration_","").replace("YR"," "+Granite.I18n.get("YR")));
$(R).find(".duration__button").parent().append(ax);
ax.on("click",Q)
});
return true
}else{if(au.length<at.length){var av=S(at,au,0);
$(av).each(function(){$(this).addClass("disabled-anchor")
});
return false
}}return false
}function S(av,ar,ay){var au=[];
for(var ax=0;
ax<av.length;
ax++){for(var aw=0;
aw<ar.length;
aw++){if(ay){if($(av[ax]).hasClass(ar[aw].getAttribute("data-duration-years"))){au.push(ax);
ar.splice(aw,1);
break
}}else{if($(ar[aw]).hasClass(av[ax].getAttribute("data-duration-years"))){au.push(ax);
ar.splice(aw,1);
break
}}}}for(var at=au.length-1;
at>=0;
at--){av.splice(au[at],1)
}return av
}function al(){return $(".devices__button.active")
}function ag(){return $(".duration__button.active").attr("data-duration")
}function e(ar,at){var j=$(ar).siblings("[device-seats='"+$(ar).attr("data-device-seats")+"'][device-duration='"+at+"']").children("li.device__display-name").text();
return j
}function y(){for(var av=0;
av<A.length;
av++){removeClass(A[av],"active")
}addClass(this,"active");
$(R).find(".duration__button").removeClass("disabled-anchor");
if(!l){var au=ag();
var at=e(this,au);
G.innerHTML=at
}if(["nds_tm","tmindia"].indexOf($(R).find(".properties__siteID").text().trim())!==-1){if(p(this)){E=[];
E=R.querySelectorAll(".duration__button")
}}$("button.duration__button").addClass("hidden");
otherDurations=$(this).nextUntil("button",".other-durations");
for(var ar=0;
ar<E.length;
ar++){for(var j=0;
j<otherDurations.length;
j++){if($(otherDurations[j]).hasClass(E[ar].getAttribute("data-duration-years"))){E[ar].setAttribute("data-regular-price",$(otherDurations[j]).find(".device__regular-price").text());
E[ar].setAttribute("data-sale-price",$(otherDurations[j]).find(".device__sales-price").text());
E[ar].setAttribute("data-discount-percentage",$(otherDurations[j]).find(".device__discount").text());
E[ar].setAttribute("data-duration-id",$(otherDurations[j]).find(".device__id").text());
E[ar].setAttribute("data-duration-years",$(otherDurations[j]).find(".device__duration-years").text())
}}}ac($(R).find(".duration__button.active").attr("data-duration-id"),$(R).find(".duration__button.active").attr("data-regular-price"),$(R).find(".duration__button.active").attr("data-sale-price"),$(R).find(".duration__button.active").attr("data-discount-percentage"));
k(this);
u(this);
$(W).attr("checked",false)
}function k(j){$(j).siblings("[device-seats='"+$(j).attr("data-device-seats")+"']").each(function(){$("button.duration__button[data-duration='"+$(this).attr("device-duration")+"']").removeClass("hidden")
})
}function u(at){var ar=false;
var j=$("button.duration__button.active").attr("data-duration");
$(at).siblings("[device-seats='"+$(at).attr("data-device-seats")+"']").each(function(){if($(this).attr("device-duration")==j){ar=true
}});
if(!ar){var au=$(at).siblings("[device-seats='"+$(at).attr("data-device-seats")+"']:first").attr("device-duration");
R.querySelector("button.duration__button[data-duration='"+au+"']").click()
}}if(W){var T=R.querySelectorAll(".promo__references")
}$(W).change(function(ax){var ay=ax.target;
if(ay.checked){if(A.length>1){for(var av=0;
av<T.length;
av++){if($(A[av]).hasClass("active")){var au=T[av].children;
for(var at=0;
at<au.length;
at++){if(au[at].getAttribute("class")==$(R).find(".duration__button.active").attr("data-duration-years")){ac($(au[at]).find(".promo__id").text(),$(au[at]).find(".promo__regular-price").text(),$(au[at]).find(".promo__sales-price").text(),$(au[at]).find(".promo__discount").text())
}}}}}else{var aw=T[0].children;
for(var ar=0;
ar<aw.length;
ar++){if(aw[ar].getAttribute("class")==$(R).find(".duration__button.active").attr("data-duration-years")){ac($(aw[ar]).find(".promo__id").text(),$(aw[ar]).find(".promo__regular-price").text(),$(aw[ar]).find(".promo__sales-price").text(),$(aw[ar]).find(".promo__discount").text())
}}}}else{ac($(R).find(".duration__button.active").attr("data-duration-id"),$(R).find(".duration__button.active").attr("data-regular-price"),$(R).find(".duration__button.active").attr("data-sale-price"),$(R).find(".duration__button.active").attr("data-discount-percentage"))
}});
function ac(av,au,j,at){M.innerHTML=av;
x.innerHTML=formatPrice(au,z,"");
H.innerHTML=formatPrice(j,z,"");
N.innerHTML=at;
var ar=h.getAttribute("data-base-url")+av;
h.setAttribute("href",ar);
U();
if(!D){$(R).find(".widget-content").removeClass("loader")
}}if($(R).find(".widget-wrap").hasClass("is__variation")){$(R).find(".widget-content").removeClass("loader")
}if(b[0].className=="consumerPriceWidget section"){var J=document.getElementsByClassName("consumerPriceWidget");
for(var P=0;
P<J.length;
P++){var ae=J[P];
var v=ae.getElementsByClassName("duration__button");
if(v.length===1){v[0].classList.add("single")
}var g=ae.getElementsByClassName("devices__button");
if(g.length===1){g[0].classList.add("single")
}}}}var b=document.querySelectorAll(".priceWidget, .consumerPriceWidget");
for(var a=0;
a<b.length;
a++){c(b[a])
}});
TrendMicro.PricingTool=function(){this.pricingToolSelector=".pricingTool";
this.tabContentSelector=".tab-content";
this.tableSelector=".pricingToolTable";
this.rowSelector=".pricingToolRow";
this.amountInput=this.pricingToolSelector+" "+this.rowSelector+" input[name='amount']";
this.tabSelector=this.pricingToolSelector+" .tab-navigation li";
this.selectAll=this.pricingToolSelector+" .select-all";
this.deselectAll=this.pricingToolSelector+" .deselect-all";
this.popoverSelector=this.pricingToolSelector+" .popover-selector";
this.stickyNavSelector=".sticky-nav-bar-container";
this.element=null;
this.unitsErrorMessage=null;
this.tables=[];
this.tabs=[];
this.stickyNav=null;
this.scrollActive=true
};
TrendMicro.PricingTool.prototype.init=function(){$(function(){$('[data-toggle="popover"]').popover()
});
if($(window).width()>=1024){$(this.popoverSelector).attr("data-placement","right")
}else{$(this.popoverSelector).attr("data-placement","bottom")
}var a=$(this.pricingToolSelector+" "+this.tableSelector);
for(var d=0;
d<a.length;
d++){this.tables.push(new TrendMicro.PricingTool.Table(a[d],this))
}var c=$(this.pricingToolSelector+" "+this.stickyNavSelector);
this.stickyNav=new TrendMicro.PricingTool.StickyNav(c[0]);
this.stickyNav.setupScrollHandlers();
var b=$(this.tabSelector);
for(d=0;
d<b.length;
d++){this.tabs.push(new TrendMicro.PricingTool.Tab(b[d]))
}this.unitsErrorMessage=$(this.pricingToolSelector+">"+this.tabContentSelector).attr("data-units-error-message");
this.validateInputFields();
this.tabOnClickEvent();
this.selectAllClickEvent();
this.deselectAllClickEvent();
this.setupAmountInputHandlers()
};
TrendMicro.PricingTool.prototype.componentCheck=function(){var a=$(this.pricingToolSelector);
if(a.length<1){return false
}if(a.length>1){console.error("There should not be more than 1 pricing tool on a page.")
}return true
};
TrendMicro.PricingTool.prototype.totalTables=function(){this.monthlyTotal=this.yearlyTotal=0;
for(var a=0;
a<this.tables.length;
a++){this.tables[a].getTotals();
this.monthlyTotal+=this.tables[a].monthlyTotal;
this.yearlyTotal+=this.tables[a].yearlyTotal
}this.stickyNav.updateTotals(this.monthlyTotal.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g,"$1,"),this.yearlyTotal.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g,"$1,"))
};
TrendMicro.PricingTool.prototype.validateInputFields=function(){$(this.amountInput).keyup(function(){$(".pricingTool .error-msg").hide();
if(!this.value.match(/^([0-9]*)$/)){$(this).next().css("display","flex");
$(this).css("border","#cc0000 solid 1px")
}else{$(this).css("border","none")
}});
$(this.amountInput).on("blur",function(){if(!this.value.match(/^([0-9]*)$/)){var a=this;
setTimeout(function(){a.focus()
},1)
}})
};
TrendMicro.PricingTool.prototype.tabOnClickEvent=function(){var b=$(this.tabSelector);
var a=this;
$(b).on("click",function(){var f=parseInt($(this).attr("tab-id"));
var h=a.tabs[f-1];
var c=a.tables[f-1];
if(!h.active){h.activate()
}else{h.deactivate()
}if(c.isModified()){h.modify()
}else{h.unmodify()
}var e=$(".pricingTool .tab-content .pricingToolTable[tab-content-id="+f+"]");
e.toggle().toggleClass("active");
if(a.scrollActive){var j=0;
var k=$(".nav-sticky-wrapper").height();
var d=$(".sticky-nav-bar-container").height();
var l=$(".sticky-nav-bar-container.sticky").height();
if($(".sticky-nav-bar-container.sticky").length){j=e.offset().top-(k+l)
}else{var g=(d-l);
j+=$(e).offset().top-(k+d+l+g);
if($(".nav-sticky-wrapper.navbar-main-fixed").length===0){j-=(k*2)
}}$("html,body").animate({scrollTop:j},"fast")
}})
};
TrendMicro.PricingTool.prototype.selectAllClickEvent=function(){var b=$(this.selectAll);
var a=this;
$(b).on("click",function(){a.scrollActive=false;
for(var c=0;
c<a.tabs.length;
c++){if(!a.tabs[c].active){$(a.tabs[c].liElement).click()
}}a.scrollActive=true
})
};
TrendMicro.PricingTool.prototype.deselectAllClickEvent=function(){var b=$(this.deselectAll);
var a=this;
$(b).on("click",function(){a.scrollActive=false;
for(var c=0;
c<a.tabs.length;
c++){if(a.tabs[c].active){$(a.tabs[c].liElement).click()
}}a.scrollActive=true
})
};
TrendMicro.PricingTool.prototype.amountInputHandler=function(b){var a=b.data.self;
a.totalTables()
};
TrendMicro.PricingTool.prototype.setupAmountInputHandlers=function(){var a=$(this.amountInput);
for(var b=0;
b<a.length;
b++){$(a[b]).on("input",{self:this},this.amountInputHandler)
}};
var pricingTool=new TrendMicro.PricingTool();
$(document).ready(function(){if(pricingTool.componentCheck()){pricingTool.init()
}});
TrendMicro.PricingTool.Table=function(a,b){this.element=a;
this.rowSelector=".pricingToolRow";
this.monthlyCostSelector=".cost-per-month-price";
this.yearlyCostSelector=".cost-per-year-price";
this.totalsSelector=".totals";
this.clearAllSelector=".clear-all";
this.rows=[];
this.monthlyTotal=0;
this.yearlyTotal=0;
this.parentTool=b;
this.currency=this.readCurrency();
this.monthlyCostTotalElement=$(this.element).find(this.monthlyCostSelector)[0];
this.yearlyCostTotalElement=$(this.element).find(this.yearlyCostSelector)[0];
this.setupRows();
this.setupClearAllHandler()
};
TrendMicro.PricingTool.Table.prototype.setupRows=function(){var b=$(this.element).find(this.rowSelector);
for(var a=0;
a<b.length;
a++){this.rows.push(new TrendMicro.PricingTool.Row(b[a]))
}};
TrendMicro.PricingTool.Table.prototype.getTotals=function(){this.monthlyTotal=0;
this.yearlyTotal=0;
for(var a=0;
a<this.rows.length;
a++){this.monthlyTotal+=this.roundToTwoDecimalPlaces(this.rows[a].getMonthlyTotal());
this.yearlyTotal+=this.roundToTwoDecimalPlaces(this.rows[a].getYearlyTotal())
}this.monthlyCostTotalElement.textContent=this.currency+this.formatCurrency(this.monthlyTotal);
this.yearlyCostTotalElement.textContent=this.currency+this.formatCurrency(this.yearlyTotal)
};
TrendMicro.PricingTool.Table.prototype.roundToTwoDecimalPlaces=function(a){return parseFloat(a.toFixed(2))
};
TrendMicro.PricingTool.Table.prototype.formatCurrency=function(a){return a.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g,"$1,")
};
TrendMicro.PricingTool.Table.prototype.isModified=function(b){for(var a=0;
a<this.rows.length;
a++){if(this.rows[a].isModified()){return true
}}return false
};
TrendMicro.PricingTool.Table.prototype.readCurrency=function(){return $(this.element).find(this.totalsSelector)[0].getAttribute("data-currency")
};
TrendMicro.PricingTool.Table.prototype.emptyRows=function(){for(var a=0;
a<this.rows.length;
a++){this.rows[a].empty()
}this.parentTool.totalTables()
};
TrendMicro.PricingTool.Table.prototype.clearAllHandler=function(b){var a=b.data.self;
a.emptyRows()
};
TrendMicro.PricingTool.Table.prototype.setupClearAllHandler=function(){$(this.element).find(this.clearAllSelector).on("click",{self:this},this.clearAllHandler)
};
TrendMicro.PricingTool.Row=function(a){this.dailyRate="daily";
this.hourlyRate="hourly";
this.rateAttribute="data-rate";
this.hoursInMonth=730;
this.hoursInYear=8760;
this.daysInMonth=30;
this.daysInYear=365;
this.element=a;
this.amountInput=null;
this.costDiv=null;
this.costSelector=".cost";
this.amountSelector="input[type='text']";
this.cost=0;
this.freeThreshold=0;
this.amount=0;
this.rate=null;
this.getMonthlyTotal=null;
this.getYearlyTotal=null;
this.setupDomElements();
this.init()
};
TrendMicro.PricingTool.Row.prototype.setupDomElements=function(){this.costDiv=$(this.element).find(this.costSelector)[0];
this.amountInput=$(this.element).find(this.amountSelector)[0]
};
TrendMicro.PricingTool.Row.prototype.init=function(){this.rate=this.readRate(this.costDiv);
switch(this.rate){case this.dailyRate:this.getMonthlyTotal=this.getMonthlyTotalDailyRate;
this.getYearlyTotal=this.getYearlyTotalDailyRate;
break;
case this.hourlyRate:this.getMonthlyTotal=this.getMonthlyTotalHourlyRate;
this.getYearlyTotal=this.getYearlyTotalHourlyRate;
break
}};
TrendMicro.PricingTool.Row.prototype.getValue=function(){this.cost=this.costDiv.getAttribute("data-cost");
this.freeThreshold=parseInt(this.costDiv.getAttribute("data-threshold"));
if(isNaN(this.freeThreshold)){this.freeThreshold=0
}this.amount=parseInt(this.amountInput.value);
if(isNaN(this.amount)){this.amount=0
}if(this.freeThreshold>0){if(this.freeThreshold>=this.amount){this.amount=0
}else{this.amount-=this.freeThreshold
}}return this.roundToThreeDecimalPlaces(this.cost*this.amount)
};
TrendMicro.PricingTool.Row.prototype.roundToThreeDecimalPlaces=function(a){return parseFloat(a.toFixed(3))
};
TrendMicro.PricingTool.Row.prototype.isModified=function(){return this.amount>0
};
TrendMicro.PricingTool.Row.prototype.empty=function(){this.amountInput.value=""
};
TrendMicro.PricingTool.Row.prototype.readRate=function(a){var b=this.costDiv.getAttribute(this.rateAttribute);
switch(b){case this.dailyRate:return this.dailyRate;
case this.hourlyRate:return this.hourlyRate;
default:return this.hourlyRate
}};
TrendMicro.PricingTool.Row.prototype.getMonthlyTotalDailyRate=function(){return(this.getValue()*this.daysInYear)/12
};
TrendMicro.PricingTool.Row.prototype.getMonthlyTotalHourlyRate=function(){return this.getValue()*this.hoursInMonth
};
TrendMicro.PricingTool.Row.prototype.getYearlyTotalDailyRate=function(){return this.getValue()*this.daysInYear
};
TrendMicro.PricingTool.Row.prototype.getYearlyTotalHourlyRate=function(){return this.getValue()*this.hoursInYear
};
TrendMicro.PricingTool.StickyNav=function(a){this.stickyNavContainerSelector=".pricingTool .sticky-nav-bar-container";
this.offsetHeightOfBusinessHeader=null;
this.offsetHeightOfConsumerHeader=null;
this.globalHeaderV2=".globalHeaderV2";
this.consumerHeaderV2=".consumerHeaderV2";
this.monthlyTotalSelector=".monthly-cost-container > .price";
this.yearlyTotalSelector=".yearly-cost-container > .price";
this.stickyNavHeight=null;
this.element=a;
this.monthlyTotal=0;
this.yearlyTotal=0;
this.currency=a.getAttribute("data-currency");
this.navbarElement=null;
this.monthlyTotalElement=$(a).find(this.monthlyTotalSelector)[0];
this.yearlyTotalElement=$(a).find(this.yearlyTotalSelector)[0];
this.sticky=null
};
TrendMicro.PricingTool.StickyNav.prototype.setupScrollHandlers=function(){if($("body").hasClass("context-business")&&document.querySelector(this.globalHeaderV2)){this.offsetHeightOfBusinessHeader=document.querySelector(this.globalHeaderV2).clientHeight
}else{if($("body").hasClass("context-home")&&document.querySelector(this.consumerHeaderV2)){this.offsetHeightOfConsumerHeader=document.querySelector(this.consumerHeaderV2).clientHeight
}}this.navbarElement=document.querySelector(this.stickyNavContainerSelector);
this.sticky=this.navbarElement.offsetTop;
var a=this;
window.onscroll=function(){a.stickyNavOnScroll(a.sticky,a.navbarElement)
}
};
TrendMicro.PricingTool.StickyNav.prototype.stickyNavOnScroll=function(b,a){if($(window).width()>=768){this.stickyNavHeight=(b-this.navbarElement.clientHeight)
}else{this.stickyNavHeight=b
}if(window.pageYOffset>this.stickyNavHeight){a.classList.add("sticky");
$(".tab-content").css("padding-top",163);
a.style.top=this.offsetHeightOfBusinessHeader+"px";
a.style.top=this.offsetHeightOfConsumerHeader+"px"
}else{a.classList.remove("sticky");
$(".tab-content").css("padding-top",0)
}};
TrendMicro.PricingTool.StickyNav.prototype.updateTotals=function(b,a){this.monthlyTotalElement.textContent=this.currency+b;
this.yearlyTotalElement.textContent=this.currency+a
};
TrendMicro.PricingTool.Tab=function(a){this.liElement=a;
this.active=false;
this.modified=false;
this.activeClassname="active";
this.modifiedClassname="modified"
};
TrendMicro.PricingTool.Tab.prototype.activate=function(){this.active=true;
$(this.liElement).addClass(this.activeClassname)
};
TrendMicro.PricingTool.Tab.prototype.deactivate=function(){this.active=false;
$(this.liElement).removeClass(this.activeClassname)
};
TrendMicro.PricingTool.Tab.prototype.modify=function(){this.modified=true;
$(this.liElement).addClass(this.modifiedClassname)
};
TrendMicro.PricingTool.Tab.prototype.unmodify=function(){this.modified=false;
$(this.liElement).removeClass(this.modifiedClassname)
};
$(document).ready(function(){if($(".prod-desc-full-width").length){$(".prod-desc-full-width").closest(".productDescriptionContainer").addClass("full-browser-width-wrap")
}$(".productDescriptionContainer .tooltip-button").on("click",function(){console.log("open");
$(this).closest(".tooltip-wrap").addClass("open")
});
$("body").on("click",function(b){var a=$(".productDescriptionContainer .tooltip-inner-wrap");
if(!a.is(b.target)&&a.has(b.target).length===0){$(a).closest(".tooltip-wrap").removeClass("open")
}})
});
$(document).ready(function(){if($(".productHighlight").length){prodHighlightCurrency();
matchProductHighlightHeight();
var a=debounce(matchProductHighlightHeight,250);
window.addEventListener("resize",a)
}});
function matchProductHighlightHeight(){matchSectionHeights(".product-highlight-text",".responsiveColumnControl")
}function prodHighlightCurrency(){$(".productHighlight").each(function(c,f){var e=f.querySelectorAll(".sale-price__value");
var k=f.querySelectorAll(".list-price__value");
var a=f.querySelector(".list-price").innerHTML.trim();
var h=f.querySelector(".properties__locale");
var g=f.querySelector(".price__format")?f.querySelector(".price__format").innerHTML.trim():"";
if(a!==""){var d=f.querySelector(".currency").innerHTML.trim();
addCurrencySymbol(f.querySelectorAll(".currency__symbol"),d,g)
}for(var b=0;
b<e.length;
b++){if(k[b]){k[b].innerHTML=formatPrice(a,g,"")
}if(e[b]){e[b].innerHTML=formatPrice(e[b].innerHTML.trim(),g,"")
}}})
}$(document).ready(function(){var a=-$("#trial-banner").height()-50;
$(".form-pane-wrapper").css("margin-top",a)
});
var rtime;
var timeout=false;
var delta=400;
$(window).resize(function(){rtime=new Date();
if(timeout===false){timeout=true;
setTimeout(resizeend,delta)
}});
function resizeend(){if(new Date()-rtime<delta){setTimeout(resizeend,delta)
}else{timeout=false;
var a=-$("#trial-banner").height()-50;
$(".form-pane-wrapper").css("margin-top",a)
}}TrendMicro.JSONSelect=function(c,b,a,d){this.element=$("select[name='"+c+"']");
this.sourceURL=b;
this.isNumber=a;
this.disableAllOption=d
};
TrendMicro.JSONSelect.prototype.init=function(b,c){var a=(b===null?this.sourceURL:b);
var d=this.readJSON(a,c)
};
TrendMicro.JSONSelect.prototype.addOptions=function(c){for(var a=0;
a<c.results.length;
a++){var d=c.results[a];
var b=new Option(d.label,d.value);
this.addCustomData(b,d);
this.element.append(b)
}};
TrendMicro.JSONSelect.prototype.addCustomData=function(){}