/*! jQuery v3.1.0 | (c) jQuery Foundation | jquery.org/license */
;
!function(d,c){"object"==typeof module&&"object"==typeof module.exports?module.exports=d.document?c(d,!0):function(b){if(!b.document){throw new Error("jQuery requires a window with a document")
}return c(b)
}:c(d)
}("undefined"!=typeof window?window:this,function(bP,bO){var bN=[],bM=bP.document,bL=Object.getPrototypeOf,bJ=bN.slice,bH=bN.concat,bG=bN.push,bF=bN.indexOf,bE={},bD=bE.toString,bC=bE.hasOwnProperty,bB=bC.toString,bA=bB.call(Object),bz={};
function by(e,d){d=d||bM;
var f=d.createElement("script");
f.text=e,d.head.appendChild(f).parentNode.removeChild(f)
}var bw="3.1.0",bv=function(d,c){return new bv.fn.init(d,c)
},bu=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,bt=/^-ms-/,bs=/-([a-z])/g,br=function(d,c){return c.toUpperCase()
};
bv.fn=bv.prototype={jquery:bw,constructor:bv,length:0,toArray:function(){return bJ.call(this)
},get:function(b){return null!=b?b<0?this[b+this.length]:this[b]:bJ.call(this)
},pushStack:function(d){var c=bv.merge(this.constructor(),d);
return c.prevObject=this,c
},each:function(b){return bv.each(this,b)
},map:function(b){return this.pushStack(bv.map(this,function(a,d){return b.call(a,d,a)
}))
},slice:function(){return this.pushStack(bJ.apply(this,arguments))
},first:function(){return this.eq(0)
},last:function(){return this.eq(-1)
},eq:function(e){var d=this.length,f=+e+(e<0?d:0);
return this.pushStack(f>=0&&f<d?[this[f]]:[])
},end:function(){return this.prevObject||this.constructor()
},push:bG,sort:bN.sort,splice:bN.splice},bv.extend=bv.fn.extend=function(){var v,u,s,r,q,o,n=arguments[0]||{},m=1,l=arguments.length,k=!1;
for("boolean"==typeof n&&(k=n,n=arguments[m]||{},m++),"object"==typeof n||bv.isFunction(n)||(n={}),m===l&&(n=this,m--);
m<l;
m++){if(null!=(v=arguments[m])){for(u in v){s=n[u],r=v[u],n!==r&&(k&&r&&(bv.isPlainObject(r)||(q=bv.isArray(r)))?(q?(q=!1,o=s&&bv.isArray(s)?s:[]):o=s&&bv.isPlainObject(s)?s:{},n[u]=bv.extend(k,o,r)):void 0!==r&&(n[u]=r))
}}}return n
},bv.extend({expando:"jQuery"+(bw+Math.random()).replace(/\D/g,""),isReady:!0,error:function(b){throw new Error(b)
},noop:function(){},isFunction:function(b){return"function"===bv.type(b)
},isArray:Array.isArray,isWindow:function(b){return null!=b&&b===b.window
},isNumeric:function(d){var c=bv.type(d);
return("number"===c||"string"===c)&&!isNaN(d-parseFloat(d))
},isPlainObject:function(e){var d,f;
return !(!e||"[object Object]"!==bD.call(e))&&(!(d=bL(e))||(f=bC.call(d,"constructor")&&d.constructor,"function"==typeof f&&bB.call(f)===bA))
},isEmptyObject:function(d){var c;
for(c in d){return !1
}return !0
},type:function(b){return null==b?b+"":"object"==typeof b||"function"==typeof b?bE[bD.call(b)]||"object":typeof b
},globalEval:function(b){by(b)
},camelCase:function(b){return b.replace(bt,"ms-").replace(bs,br)
},nodeName:function(d,c){return d.nodeName&&d.nodeName.toLowerCase()===c.toLowerCase()
},each:function(f,e){var h,g=0;
if(bq(f)){for(h=f.length;
g<h;
g++){if(e.call(f[g],g,f[g])===!1){break
}}}else{for(g in f){if(e.call(f[g],g,f[g])===!1){break
}}}return f
},trim:function(b){return null==b?"":(b+"").replace(bu,"")
},makeArray:function(e,d){var f=d||[];
return null!=e&&(bq(Object(e))?bv.merge(f,"string"==typeof e?[e]:e):bG.call(f,e)),f
},inArray:function(e,d,f){return null==d?-1:bF.call(d,e,f)
},merge:function(g,f){for(var k=+f.length,j=0,h=g.length;
j<k;
j++){g[h++]=f[j]
}return g.length=h,g
},grep:function(k,j,r){for(var q,o=[],n=0,m=k.length,l=!r;
n<m;
n++){q=!j(k[n],n),q!==l&&o.push(k[n])
}return o
},map:function(j,g,o){var n,m,l=0,k=[];
if(bq(j)){for(n=j.length;
l<n;
l++){m=g(j[l],l,o),null!=m&&k.push(m)
}}else{for(l in j){m=g(j[l],l,o),null!=m&&k.push(m)
}}return bH.apply([],k)
},guid:1,proxy:function(g,f){var k,j,h;
if("string"==typeof f&&(k=g[f],f=g,g=k),bv.isFunction(g)){return j=bJ.call(arguments,2),h=function(){return g.apply(f||this,j.concat(bJ.call(arguments)))
},h.guid=g.guid=g.guid||bv.guid++,h
}},now:Date.now,support:bz}),"function"==typeof Symbol&&(bv.fn[Symbol.iterator]=bN[Symbol.iterator]),bv.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(d,c){bE["[object "+c+"]"]=c.toLowerCase()
});
function bq(e){var d=!!e&&"length" in e&&e.length,f=bv.type(e);
return"function"!==f&&!bv.isWindow(e)&&("array"===f||0===d||"number"==typeof d&&d>0&&d-1 in e)
}var bp=function(dl){var dk,dj,dh,dg,df,de,dd,db,c9,c8,c7,c6,c4,c3,c2,c1,c0,cZ,cY,cX="sizzle"+1*new Date,cW=dl.document,cV=0,cU=0,cT=dH(),cS=dH(),dR=dH(),dQ=function(d,c){return d===c&&(c7=!0),0
},dP={}.hasOwnProperty,dO=[],dM=dO.pop,dL=dO.push,dK=dO.push,dJ=dO.slice,dI=function(f,e){for(var h=0,g=f.length;
h<g;
h++){if(f[h]===e){return h
}}return -1
},dG="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",dF="[\\x20\\t\\r\\n\\f]",dE="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",dD="\\["+dF+"*("+dE+")(?:"+dF+"*([*^$|!~]?=)"+dF+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+dE+"))|)"+dF+"*\\]",dC=":("+dE+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+dD+")*)|.*)\\)|)",dB=new RegExp(dF+"+","g"),dz=new RegExp("^"+dF+"+|((?:^|[^\\\\])(?:\\\\.)*)"+dF+"+$","g"),dy=new RegExp("^"+dF+"*,"+dF+"*"),dx=new RegExp("^"+dF+"*([>+~]|"+dF+")"+dF+"*"),dw=new RegExp("="+dF+"*([^\\]'\"]*?)"+dF+"*\\]","g"),dv=new RegExp(dC),du=new RegExp("^"+dE+"$"),dt={ID:new RegExp("^#("+dE+")"),CLASS:new RegExp("^\\.("+dE+")"),TAG:new RegExp("^("+dE+"|[*])"),ATTR:new RegExp("^"+dD),PSEUDO:new RegExp("^"+dC),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+dF+"*(even|odd|(([+-]|)(\\d*)n|)"+dF+"*(?:([+-]|)"+dF+"*(\\d+)|))"+dF+"*\\)|)","i"),bool:new RegExp("^(?:"+dG+")$","i"),needsContext:new RegExp("^"+dF+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+dF+"*((?:-\\d)?\\d*)"+dF+"*\\)|)(?=[^-]|$)","i")},ds=/^(?:input|select|textarea|button)$/i,dr=/^h\d$/i,dq=/^[^{]+\{\s*\[native \w/,dp=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,dX=/[+~]/,dn=new RegExp("\\\\([\\da-f]{1,6}"+dF+"?|("+dF+")|.)","ig"),dU=function(f,e,h){var g="0x"+e-65536;
return g!==g||h?e:g<0?String.fromCharCode(g+65536):String.fromCharCode(g>>10|55296,1023&g|56320)
},dA=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,c5=function(d,c){return c?"\0"===d?"\ufffd":d.slice(0,-1)+"\\"+d.charCodeAt(d.length-1).toString(16)+" ":"\\"+d
},cO=function(){c6()
},bb=dS(function(b){return b.disabled===!0
},{dir:"parentNode",next:"legend"});
try{dK.apply(dO=dJ.call(cW.childNodes),cW.childNodes),dO[cW.childNodes.length].nodeType
}catch(d0){dK={apply:dO.length?function(d,c){dL.apply(d,dJ.call(c))
}:function(f,e){var h=f.length,g=0;
while(f[h++]=e[g++]){}f.length=h-1
}}
}function dV(C,A,z,y){var v,u,q,n,m,g,c,E=A&&A.ownerDocument,D=A?A.nodeType:9;
if(z=z||[],"string"!=typeof C||!C||1!==D&&9!==D&&11!==D){return z
}if(!y&&((A?A.ownerDocument||A:cW)!==c4&&c6(A),A=A||c4,c2)){if(11!==D&&(m=dp.exec(C))){if(v=m[1]){if(9===D){if(!(q=A.getElementById(v))){return z
}if(q.id===v){return z.push(q),z
}}else{if(E&&(q=E.getElementById(v))&&cY(A,q)&&q.id===v){return z.push(q),z
}}}else{if(m[2]){return dK.apply(z,A.getElementsByTagName(C)),z
}if((v=m[3])&&dj.getElementsByClassName&&A.getElementsByClassName){return dK.apply(z,A.getElementsByClassName(v)),z
}}}if(dj.qsa&&!dR[C+" "]&&(!c1||!c1.test(C))){if(1!==D){E=A,c=C
}else{if("object"!==A.nodeName.toLowerCase()){(n=A.getAttribute("id"))?n=n.replace(dA,c5):A.setAttribute("id",n=cX),g=de(C),u=g.length;
while(u--){g[u]="#"+n+" "+dY(g[u])
}c=g.join(","),E=dX.test(C)&&cM(A.parentNode)||A
}}if(c){try{return dK.apply(z,E.querySelectorAll(c)),z
}catch(B){}finally{n===cX&&A.removeAttribute("id")
}}}}return db(C.replace(dz,"$1"),A,z,y)
}function dH(){var d=[];
function c(b,a){return d.push(b+" ")>dh.cacheLength&&delete c[d.shift()],c[b+" "]=a
}return c
}function dc(b){return b[cX]=!0,b
}function cP(e){var d=c4.createElement("fieldset");
try{return !!e(d)
}catch(f){return !1
}finally{d.parentNode&&d.parentNode.removeChild(d),d=null
}}function cb(f,d){var h=f.split("|"),g=h.length;
while(g--){dh.attrHandle[h[g]]=d
}}function d1(f,e){var h=e&&f,g=h&&1===f.nodeType&&1===e.nodeType&&f.sourceIndex-e.sourceIndex;
if(g){return g
}if(h){while(h=h.nextSibling){if(h===e){return -1
}}}return f?1:-1
}function dW(b){return function(a){var d=a.nodeName.toLowerCase();
return"input"===d&&a.type===b
}
}function dN(b){return function(a){var d=a.nodeName.toLowerCase();
return("input"===d||"button"===d)&&a.type===b
}
}function di(b){return function(a){return"label" in a&&a.disabled===b||"form" in a&&a.disabled===b||"form" in a&&a.disabled===!1&&(a.isDisabled===b||a.isDisabled!==!b&&("label" in a||!bb(a))!==b)
}
}function cQ(b){return dc(function(a){return a=+a,dc(function(m,l){var k,j=b([],m.length,a),h=j.length;
while(h--){m[k=j[h]]&&(m[k]=!(l[k]=m[k]))
}})
})
}function cM(b){return b&&"undefined"!=typeof b.getElementsByTagName&&b
}dj=dV.support={},df=dV.isXML=function(d){var c=d&&(d.ownerDocument||d).documentElement;
return !!c&&"HTML"!==c.nodeName
},c6=dV.setDocument=function(d){var c,h,f=d?d.ownerDocument||d:cW;
return f!==c4&&9===f.nodeType&&f.documentElement?(c4=f,c3=c4.documentElement,c2=!df(c4),cW!==c4&&(h=c4.defaultView)&&h.top!==h&&(h.addEventListener?h.addEventListener("unload",cO,!1):h.attachEvent&&h.attachEvent("onunload",cO)),dj.attributes=cP(function(b){return b.className="i",!b.getAttribute("className")
}),dj.getElementsByTagName=cP(function(b){return b.appendChild(c4.createComment("")),!b.getElementsByTagName("*").length
}),dj.getElementsByClassName=dq.test(c4.getElementsByClassName),dj.getById=cP(function(b){return c3.appendChild(b).id=cX,!c4.getElementsByName||!c4.getElementsByName(cX).length
}),dj.getById?(dh.find.ID=function(g,e){if("undefined"!=typeof e.getElementById&&c2){var j=e.getElementById(g);
return j?[j]:[]
}},dh.filter.ID=function(g){var e=g.replace(dn,dU);
return function(b){return b.getAttribute("id")===e
}
}):(delete dh.find.ID,dh.filter.ID=function(g){var e=g.replace(dn,dU);
return function(b){var j="undefined"!=typeof b.getAttributeNode&&b.getAttributeNode("id");
return j&&j.value===e
}
}),dh.find.TAG=dj.getElementsByTagName?function(g,e){return"undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(g):dj.qsa?e.querySelectorAll(g):void 0
}:function(j,g){var n,m=[],l=0,k=g.getElementsByTagName(j);
if("*"===j){while(n=k[l++]){1===n.nodeType&&m.push(n)
}return m
}return k
},dh.find.CLASS=dj.getElementsByClassName&&function(g,e){if("undefined"!=typeof e.getElementsByClassName&&c2){return e.getElementsByClassName(g)
}},c0=[],c1=[],(dj.qsa=dq.test(c4.querySelectorAll))&&(cP(function(b){c3.appendChild(b).innerHTML="<a id='"+cX+"'></a><select id='"+cX+"-\r\\' msallowcapture=''><option selected=''></option></select>",b.querySelectorAll("[msallowcapture^='']").length&&c1.push("[*^$]="+dF+"*(?:''|\"\")"),b.querySelectorAll("[selected]").length||c1.push("\\["+dF+"*(?:value|"+dG+")"),b.querySelectorAll("[id~="+cX+"-]").length||c1.push("~="),b.querySelectorAll(":checked").length||c1.push(":checked"),b.querySelectorAll("a#"+cX+"+*").length||c1.push(".#.+[+~]")
}),cP(function(g){g.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
var e=c4.createElement("input");
e.setAttribute("type","hidden"),g.appendChild(e).setAttribute("name","D"),g.querySelectorAll("[name=d]").length&&c1.push("name"+dF+"*[*^$|!~]?="),2!==g.querySelectorAll(":enabled").length&&c1.push(":enabled",":disabled"),c3.appendChild(g).disabled=!0,2!==g.querySelectorAll(":disabled").length&&c1.push(":enabled",":disabled"),g.querySelectorAll("*,:x"),c1.push(",.*:")
})),(dj.matchesSelector=dq.test(cZ=c3.matches||c3.webkitMatchesSelector||c3.mozMatchesSelector||c3.oMatchesSelector||c3.msMatchesSelector))&&cP(function(b){dj.disconnectedMatch=cZ.call(b,"*"),cZ.call(b,"[s!='']:x"),c0.push("!=",dC)
}),c1=c1.length&&new RegExp(c1.join("|")),c0=c0.length&&new RegExp(c0.join("|")),c=dq.test(c3.compareDocumentPosition),cY=c||dq.test(c3.contains)?function(g,e){var k=9===g.nodeType?g.documentElement:g,j=e&&e.parentNode;
return g===j||!(!j||1!==j.nodeType||!(k.contains?k.contains(j):g.compareDocumentPosition&&16&g.compareDocumentPosition(j)))
}:function(g,e){if(e){while(e=e.parentNode){if(e===g){return !0
}}}return !1
},dQ=c?function(g,e){if(g===e){return c7=!0,0
}var j=!g.compareDocumentPosition-!e.compareDocumentPosition;
return j?j:(j=(g.ownerDocument||g)===(e.ownerDocument||e)?g.compareDocumentPosition(e):1,1&j||!dj.sortDetached&&e.compareDocumentPosition(g)===j?g===c4||g.ownerDocument===cW&&cY(cW,g)?-1:e===c4||e.ownerDocument===cW&&cY(cW,e)?1:c8?dI(c8,g)-dI(c8,e):0:4&j?-1:1)
}:function(k,j){if(k===j){return c7=!0,0
}var r,q=0,o=k.parentNode,n=j.parentNode,m=[k],l=[j];
if(!o||!n){return k===c4?-1:j===c4?1:o?-1:n?1:c8?dI(c8,k)-dI(c8,j):0
}if(o===n){return d1(k,j)
}r=k;
while(r=r.parentNode){m.unshift(r)
}r=j;
while(r=r.parentNode){l.unshift(r)
}while(m[q]===l[q]){q++
}return q?d1(m[q],l[q]):m[q]===cW?-1:l[q]===cW?1:0
},c4):c4
},dV.matches=function(d,c){return dV(d,null,null,c)
},dV.matchesSelector=function(f,c){if((f.ownerDocument||f)!==c4&&c6(f),c=c.replace(dw,"='$1']"),dj.matchesSelector&&c2&&!dR[c+" "]&&(!c0||!c0.test(c))&&(!c1||!c1.test(c))){try{var h=cZ.call(f,c);
if(h||dj.disconnectedMatch||f.document&&11!==f.document.nodeType){return h
}}catch(g){}}return dV(c,c4,null,[f]).length>0
},dV.contains=function(d,c){return(d.ownerDocument||d)!==c4&&c6(d),cY(d,c)
},dV.attr=function(d,c){(d.ownerDocument||d)!==c4&&c6(d);
var h=dh.attrHandle[c.toLowerCase()],g=h&&dP.call(dh.attrHandle,c.toLowerCase())?h(d,c,!c2):void 0;
return void 0!==g?g:dj.attributes||!c2?d.getAttribute(c):(g=d.getAttributeNode(c))&&g.specified?g.value:null
},dV.escape=function(b){return(b+"").replace(dA,c5)
},dV.error=function(b){throw new Error("Syntax error, unrecognized expression: "+b)
},dV.uniqueSort=function(g){var c,k=[],j=0,h=0;
if(c7=!dj.detectDuplicates,c8=!dj.sortStable&&g.slice(0),g.sort(dQ),c7){while(c=g[h++]){c===g[h]&&(j=k.push(h))
}while(j--){g.splice(k[j],1)
}}return c8=null,g
},dg=dV.getText=function(g){var e,k="",j=0,h=g.nodeType;
if(h){if(1===h||9===h||11===h){if("string"==typeof g.textContent){return g.textContent
}for(g=g.firstChild;
g;
g=g.nextSibling){k+=dg(g)
}}else{if(3===h||4===h){return g.nodeValue
}}}else{while(e=g[j++]){k+=dg(e)
}}return k
},dh=dV.selectors={cacheLength:50,createPseudo:dc,match:dt,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(b){return b[1]=b[1].replace(dn,dU),b[3]=(b[3]||b[4]||b[5]||"").replace(dn,dU),"~="===b[2]&&(b[3]=" "+b[3]+" "),b.slice(0,4)
},CHILD:function(b){return b[1]=b[1].toLowerCase(),"nth"===b[1].slice(0,3)?(b[3]||dV.error(b[0]),b[4]=+(b[4]?b[5]+(b[6]||1):2*("even"===b[3]||"odd"===b[3])),b[5]=+(b[7]+b[8]||"odd"===b[3])):b[3]&&dV.error(b[0]),b
},PSEUDO:function(e){var d,f=!e[6]&&e[2];
return dt.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":f&&dv.test(f)&&(d=de(f,!0))&&(d=f.indexOf(")",f.length-d)-f.length)&&(e[0]=e[0].slice(0,d),e[2]=f.slice(0,d)),e.slice(0,3))
}},filter:{TAG:function(d){var c=d.replace(dn,dU).toLowerCase();
return"*"===d?function(){return !0
}:function(b){return b.nodeName&&b.nodeName.toLowerCase()===c
}
},CLASS:function(d){var c=cT[d+" "];
return c||(c=new RegExp("(^|"+dF+")"+d+"("+dF+"|$)"))&&cT(d,function(b){return c.test("string"==typeof b.className&&b.className||"undefined"!=typeof b.getAttribute&&b.getAttribute("class")||"")
})
},ATTR:function(e,d,f){return function(b){var a=dV.attr(b,e);
return null==a?"!="===d:!d||(a+="","="===d?a===f:"!="===d?a!==f:"^="===d?f&&0===a.indexOf(f):"*="===d?f&&a.indexOf(f)>-1:"$="===d?f&&a.slice(-f.length)===f:"~="===d?(" "+a.replace(dB," ")+" ").indexOf(f)>-1:"|="===d&&(a===f||a.slice(0,f.length+1)===f+"-"))
}
},CHILD:function(k,j,r,q,o){var n="nth"!==k.slice(0,3),m="last"!==k.slice(-4),l="of-type"===j;
return 1===q&&0===o?function(b){return !!b.parentNode
}:function(z,y,x){var w,v,u,h,g,f,e=n!==m?"nextSibling":"previousSibling",d=z.parentNode,a=l&&z.nodeName.toLowerCase(),B=!x&&!l,A=!1;
if(d){if(n){while(e){h=z;
while(h=h[e]){if(l?h.nodeName.toLowerCase()===a:1===h.nodeType){return !1
}}f=e="only"===k&&!f&&"nextSibling"
}return !0
}if(f=[m?d.firstChild:d.lastChild],m&&B){h=d,u=h[cX]||(h[cX]={}),v=u[h.uniqueID]||(u[h.uniqueID]={}),w=v[k]||[],g=w[0]===cV&&w[1],A=g&&w[2],h=g&&d.childNodes[g];
while(h=++g&&h&&h[e]||(A=g=0)||f.pop()){if(1===h.nodeType&&++A&&h===z){v[k]=[cV,g,A];
break
}}}else{if(B&&(h=z,u=h[cX]||(h[cX]={}),v=u[h.uniqueID]||(u[h.uniqueID]={}),w=v[k]||[],g=w[0]===cV&&w[1],A=g),A===!1){while(h=++g&&h&&h[e]||(A=g=0)||f.pop()){if((l?h.nodeName.toLowerCase()===a:1===h.nodeType)&&++A&&(B&&(u=h[cX]||(h[cX]={}),v=u[h.uniqueID]||(u[h.uniqueID]={}),v[k]=[cV,A]),h===z)){break
}}}}return A-=o,A===q||A%q===0&&A/q>=0
}}
},PSEUDO:function(f,d){var h,g=dh.pseudos[f]||dh.setFilters[f.toLowerCase()]||dV.error("unsupported pseudo: "+f);
return g[cX]?g(d):g.length>1?(h=[f,f,"",d],dh.setFilters.hasOwnProperty(f.toLowerCase())?dc(function(b,l){var k,j=g(b,d),e=j.length;
while(e--){k=dI(b,j[e]),b[k]=!(l[k]=j[e])
}}):function(b){return g(b,0,h)
}):g
}},pseudos:{not:dc(function(f){var e=[],h=[],g=dd(f.replace(dz,"$1"));
return g[cX]?dc(function(j,d,o,n){var m,l=g(j,null,n,[]),k=j.length;
while(k--){(m=l[k])&&(j[k]=!(d[k]=m))
}}):function(b,d,c){return e[0]=b,g(e,null,c,h),e[0]=null,!h.pop()
}
}),has:dc(function(b){return function(a){return dV(b,a).length>0
}
}),contains:dc(function(b){return b=b.replace(dn,dU),function(a){return(a.textContent||a.innerText||dg(a)).indexOf(b)>-1
}
}),lang:dc(function(b){return du.test(b||"")||dV.error("unsupported lang: "+b),b=b.replace(dn,dU).toLowerCase(),function(a){var d;
do{if(d=c2?a.lang:a.getAttribute("xml:lang")||a.getAttribute("lang")){return d=d.toLowerCase(),d===b||0===d.indexOf(b+"-")
}}while((a=a.parentNode)&&1===a.nodeType);
return !1
}
}),target:function(a){var d=dl.location&&dl.location.hash;
return d&&d.slice(1)===a.id
},root:function(b){return b===c3
},focus:function(b){return b===c4.activeElement&&(!c4.hasFocus||c4.hasFocus())&&!!(b.type||b.href||~b.tabIndex)
},enabled:di(!1),disabled:di(!0),checked:function(d){var c=d.nodeName.toLowerCase();
return"input"===c&&!!d.checked||"option"===c&&!!d.selected
},selected:function(b){return b.parentNode&&b.parentNode.selectedIndex,b.selected===!0
},empty:function(b){for(b=b.firstChild;
b;
b=b.nextSibling){if(b.nodeType<6){return !1
}}return !0
},parent:function(b){return !dh.pseudos.empty(b)
},header:function(b){return dr.test(b.nodeName)
},input:function(b){return ds.test(b.nodeName)
},button:function(d){var c=d.nodeName.toLowerCase();
return"input"===c&&"button"===d.type||"button"===c
},text:function(d){var c;
return"input"===d.nodeName.toLowerCase()&&"text"===d.type&&(null==(c=d.getAttribute("type"))||"text"===c.toLowerCase())
},first:cQ(function(){return[0]
}),last:cQ(function(d,c){return[c-1]
}),eq:cQ(function(e,d,f){return[f<0?f+d:f]
}),even:cQ(function(e,d){for(var f=0;
f<d;
f+=2){e.push(f)
}return e
}),odd:cQ(function(e,d){for(var f=1;
f<d;
f+=2){e.push(f)
}return e
}),lt:cQ(function(f,e,h){for(var g=h<0?h+e:h;
--g>=0;
){f.push(g)
}return f
}),gt:cQ(function(f,e,h){for(var g=h<0?h+e:h;
++g<e;
){f.push(g)
}return f
})}},dh.pseudos.nth=dh.pseudos.eq;
for(dk in {radio:!0,checkbox:!0,file:!0,password:!0,image:!0}){dh.pseudos[dk]=dW(dk)
}for(dk in {submit:!0,reset:!0}){dh.pseudos[dk]=dN(dk)
}function d2(){}d2.prototype=dh.filters=dh.pseudos,dh.setFilters=new d2,de=dV.tokenize=function(v,u){var s,r,q,o,n,m,l,d=cS[v+" "];
if(d){return u?0:d.slice(0)
}n=v,m=[],l=dh.preFilter;
while(n){s&&!(r=dy.exec(n))||(r&&(n=n.slice(r[0].length)||n),m.push(q=[])),s=!1,(r=dx.exec(n))&&(s=r.shift(),q.push({value:s,type:r[0].replace(dz," ")}),n=n.slice(s.length));
for(o in dh.filter){!(r=dt[o].exec(n))||l[o]&&!(r=l[o](r))||(s=r.shift(),q.push({value:s,type:o,matches:r}),n=n.slice(s.length))
}if(!s){break
}}return u?n.length:n?dV.error(v):cS(v,m).slice(0)
};
function dY(f){for(var e=0,h=f.length,g="";
e<h;
e++){g+=f[e].value
}return g
}function dS(k,j,r){var q=j.dir,o=j.next,n=o||q,m=r&&"parentNode"===n,l=cU++;
return j.first?function(a,f,d){while(a=a[q]){if(1===a.nodeType||m){return k(a,f,d)
}}}:function(d,s,h){var g,f,e,a=[cV,l];
if(h){while(d=d[q]){if((1===d.nodeType||m)&&k(d,s,h)){return !0
}}}else{while(d=d[q]){if(1===d.nodeType||m){if(e=d[cX]||(d[cX]={}),f=e[d.uniqueID]||(e[d.uniqueID]={}),o&&o===d.nodeName.toLowerCase()){d=d[q]||d
}else{if((g=f[n])&&g[0]===cV&&g[1]===l){return a[2]=g[2]
}if(f[n]=a,a[2]=k(d,s,h)){return !0
}}}}}}
}function dm(b){return b.length>1?function(a,h,g){var f=b.length;
while(f--){if(!b[f](a,h,g)){return !1
}}return !0
}:b[0]
}function cR(g,f,k){for(var j=0,h=f.length;
j<h;
j++){dV(g,f[j],k)
}return k
}function cN(v,u,s,r,q){for(var o,n=[],m=0,l=v.length,k=null!=u;
m<l;
m++){(o=v[m])&&(s&&!s(o,r,q)||(n.push(o),k&&u.push(m)))
}return n
}function ab(h,g,m,l,k,j){return l&&!l[cX]&&(l=ab(l)),k&&!k[cX]&&(k=ab(k,j)),dc(function(A,z,y,x){var w,v,u,s=[],e=[],d=z.length,c=A||cR(g||"*",y.nodeType?[y]:y,[]),b=!h||!A&&g?c:cN(c,s,h,y,x),a=m?k||(A?h:d||l)?[]:z:b;
if(m&&m(b,a,y,x),l){w=cN(a,e),l(w,[],y,x),v=w.length;
while(v--){(u=w[v])&&(a[e[v]]=!(b[e[v]]=u))
}}if(A){if(k||h){if(k){w=[],v=a.length;
while(v--){(u=a[v])&&w.push(b[v]=u)
}k(null,a=[],w,x)
}v=a.length;
while(v--){(u=a[v])&&(w=k?dI(A,u):s[v])>-1&&(A[w]=!(z[w]=u))
}}}else{a=cN(a===z?a.splice(d,a.length):a),k?k(null,z,a,x):dK.apply(z,a)
}})
}function dZ(x){for(var w,v,u,s=x.length,r=dh.relative[x[0].type],q=r||dh.relative[" "],o=r?1:0,n=dS(function(b){return b===w
},q,!0),j=dS(function(b){return dI(w,b)>-1
},q,!0),d=[function(b,h,g){var f=!r&&(g||h!==c9)||((w=h).nodeType?n(b,h,g):j(b,h,g));
return w=null,f
}];
o<s;
o++){if(v=dh.relative[x[o].type]){d=[dS(dm(d),v)]
}else{if(v=dh.filter[x[o].type].apply(null,x[o].matches),v[cX]){for(u=++o;
u<s;
u++){if(dh.relative[x[u].type]){break
}}return ab(o>1&&dm(d),o>1&&dY(x.slice(0,o-1).concat({value:" "===x[o-2].type?"*":""})).replace(dz,"$1"),v,o<u&&dZ(x.slice(o,u)),u<s&&dZ(x=x.slice(u)),u<s&&dY(x))
}d.push(v)
}}return dm(d)
}function dT(g,d){var k=d.length>0,j=g.length>0,h=function(B,A,w,n,m){var e,c,b,a=0,I="0",H=B&&[],G=[],F=c9,E=B||j&&dh.find.TAG("*",m),D=cV+=null==F?1:Math.random()||0.1,C=E.length;
for(m&&(c9=A===c4||A||m);
I!==C&&null!=(e=E[I]);
I++){if(j&&e){c=0,A||e.ownerDocument===c4||(c6(e),w=!c2);
while(b=g[c++]){if(b(e,A||c4,w)){n.push(e);
break
}}m&&(cV=D)
}k&&((e=!b&&e)&&a--,B&&H.push(e))
}if(a+=I,k&&I!==a){c=0;
while(b=d[c++]){b(H,G,A,w)
}if(B){if(a>0){while(I--){H[I]||G[I]||(G[I]=dM.call(n))
}}G=cN(G)
}dK.apply(n,G),m&&!B&&G.length>0&&a+d.length>1&&dV.uniqueSort(n)
}return m&&(cV=D,c9=F),H
};
return k?dc(h):h
}return dd=dV.compile=function(h,g){var m,l=[],k=[],j=dR[h+" "];
if(!j){g||(g=de(h)),m=g.length;
while(m--){j=dZ(g[m]),j[cX]?l.push(j):k.push(j)
}j=dR(h,dT(k,l)),j.selector=h
}return j
},db=dV.select=function(x,w,v,u){var s,r,q,h,g,d="function"==typeof x&&x,c=!u&&de(x=d.selector||x);
if(v=v||[],1===c.length){if(r=c[0]=c[0].slice(0),r.length>2&&"ID"===(q=r[0]).type&&dj.getById&&9===w.nodeType&&c2&&dh.relative[r[1].type]){if(w=(dh.find.ID(q.matches[0].replace(dn,dU),w)||[])[0],!w){return v
}d&&(w=w.parentNode),x=x.slice(r.shift().value.length)
}s=dt.needsContext.test(x)?0:r.length;
while(s--){if(q=r[s],dh.relative[h=q.type]){break
}if((g=dh.find[h])&&(u=g(q.matches[0].replace(dn,dU),dX.test(r[0].type)&&cM(w.parentNode)||w))){if(r.splice(s,1),x=u.length&&dY(r),!x){return dK.apply(v,u),v
}break
}}}return(d||dd(x,c))(u,w,!c2,v,!w||dX.test(x)&&cM(w.parentNode)||w),v
},dj.sortStable=cX.split("").sort(dQ).join("")===cX,dj.detectDuplicates=!!c7,c6(),dj.sortDetached=cP(function(b){return 1&b.compareDocumentPosition(c4.createElement("fieldset"))
}),cP(function(b){return b.innerHTML="<a href='#'></a>","#"===b.firstChild.getAttribute("href")
})||cb("type|href|height|width",function(e,d,f){if(!f){return e.getAttribute(d,"type"===d.toLowerCase()?1:2)
}}),dj.attributes&&cP(function(b){return b.innerHTML="<input/>",b.firstChild.setAttribute("value",""),""===b.firstChild.getAttribute("value")
})||cb("value",function(e,d,f){if(!f&&"input"===e.nodeName.toLowerCase()){return e.defaultValue
}}),cP(function(b){return null==b.getAttribute("disabled")
})||cb(dG,function(f,e,h){var g;
if(!h){return f[e]===!0?e.toLowerCase():(g=f.getAttributeNode(e))&&g.specified?g.value:null
}}),dV
}(bP);
bv.find=bp,bv.expr=bp.selectors,bv.expr[":"]=bv.expr.pseudos,bv.uniqueSort=bv.unique=bp.uniqueSort,bv.text=bp.getText,bv.isXMLDoc=bp.isXML,bv.contains=bp.contains,bv.escapeSelector=bp.escape;
var bo=function(g,f,k){var j=[],h=void 0!==k;
while((g=g[f])&&9!==g.nodeType){if(1===g.nodeType){if(h&&bv(g).is(k)){break
}j.push(g)
}}return j
},bm=function(e,d){for(var f=[];
e;
e=e.nextSibling){1===e.nodeType&&e!==d&&f.push(e)
}return f
},cp=bv.expr.match.needsContext,co=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,cn=/^.[^:#\[\.,]*$/;
function cm(e,d,f){if(bv.isFunction(d)){return bv.grep(e,function(b,c){return !!d.call(b,c,b)!==f
})
}if(d.nodeType){return bv.grep(e,function(b){return b===d!==f
})
}if("string"==typeof d){if(cn.test(d)){return bv.filter(d,e,f)
}d=bv.filter(d,e)
}return bv.grep(e,function(b){return bF.call(d,b)>-1!==f&&1===b.nodeType
})
}bv.filter=function(f,e,h){var g=e[0];
return h&&(f=":not("+f+")"),1===e.length&&1===g.nodeType?bv.find.matchesSelector(g,f)?[g]:[]:bv.find.matches(f,bv.grep(e,function(b){return 1===b.nodeType
}))
},bv.fn.extend({find:function(g){var f,k,j=this.length,h=this;
if("string"!=typeof g){return this.pushStack(bv(g).filter(function(){for(f=0;
f<j;
f++){if(bv.contains(h[f],this)){return !0
}}}))
}for(k=this.pushStack([]),f=0;
f<j;
f++){bv.find(g,h[f],k)
}return j>1?bv.uniqueSort(k):k
},filter:function(b){return this.pushStack(cm(this,b||[],!1))
},not:function(b){return this.pushStack(cm(this,b||[],!0))
},is:function(b){return !!cm(this,"string"==typeof b&&cp.test(b)?bv(b):b||[],!1).length
}});
var cl,ck=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,ci=bv.fn.init=function(g,d,k){var j,h;
if(!g){return this
}if(k=k||cl,"string"==typeof g){if(j="<"===g[0]&&">"===g[g.length-1]&&g.length>=3?[null,g,null]:ck.exec(g),!j||!j[1]&&d){return !d||d.jquery?(d||k).find(g):this.constructor(d).find(g)
}if(j[1]){if(d=d instanceof bv?d[0]:d,bv.merge(this,bv.parseHTML(j[1],d&&d.nodeType?d.ownerDocument||d:bM,!0)),co.test(j[1])&&bv.isPlainObject(d)){for(j in d){bv.isFunction(this[j])?this[j](d[j]):this.attr(j,d[j])
}}return this
}return h=bM.getElementById(j[2]),h&&(this[0]=h,this.length=1),this
}return g.nodeType?(this[0]=g,this.length=1,this):bv.isFunction(g)?void 0!==k.ready?k.ready(g):g(bv):bv.makeArray(g,this)
};
ci.prototype=bv.fn,cl=bv(bM);
var cg=/^(?:parents|prev(?:Until|All))/,cf={children:!0,contents:!0,next:!0,prev:!0};
bv.fn.extend({has:function(e){var d=bv(e,this),f=d.length;
return this.filter(function(){for(var b=0;
b<f;
b++){if(bv.contains(this,d[b])){return !0
}}})
},closest:function(j,h){var o,n=0,m=this.length,l=[],k="string"!=typeof j&&bv(j);
if(!cp.test(j)){for(;
n<m;
n++){for(o=this[n];
o&&o!==h;
o=o.parentNode){if(o.nodeType<11&&(k?k.index(o)>-1:1===o.nodeType&&bv.find.matchesSelector(o,j))){l.push(o);
break
}}}}return this.pushStack(l.length>1?bv.uniqueSort(l):l)
},index:function(b){return b?"string"==typeof b?bF.call(bv(b),this[0]):bF.call(this,b.jquery?b[0]:b):this[0]&&this[0].parentNode?this.first().prevAll().length:-1
},add:function(d,c){return this.pushStack(bv.uniqueSort(bv.merge(this.get(),bv(d,c))))
},addBack:function(b){return this.add(null==b?this.prevObject:this.prevObject.filter(b))
}});
function ce(d,c){while((d=d[c])&&1!==d.nodeType){}return d
}bv.each({parent:function(d){var c=d.parentNode;
return c&&11!==c.nodeType?c:null
},parents:function(b){return bo(b,"parentNode")
},parentsUntil:function(e,d,f){return bo(e,"parentNode",f)
},next:function(b){return ce(b,"nextSibling")
},prev:function(b){return ce(b,"previousSibling")
},nextAll:function(b){return bo(b,"nextSibling")
},prevAll:function(b){return bo(b,"previousSibling")
},nextUntil:function(e,d,f){return bo(e,"nextSibling",f)
},prevUntil:function(e,d,f){return bo(e,"previousSibling",f)
},siblings:function(b){return bm((b.parentNode||{}).firstChild,b)
},children:function(b){return bm(b.firstChild)
},contents:function(b){return b.contentDocument||bv.merge([],b.childNodes)
}},function(d,c){bv.fn[d]=function(f,b){var a=bv.map(this,c,f);
return"Until"!==d.slice(-5)&&(b=f),b&&"string"==typeof b&&(a=bv.filter(b,a)),this.length>1&&(cf[d]||bv.uniqueSort(a),cg.test(d)&&a.reverse()),this.pushStack(a)
}
});
var cd=/\S+/g;
function cc(d){var c={};
return bv.each(d.match(cd)||[],function(b,e){c[e]=!0
}),c
}bv.Callbacks=function(v){v="string"==typeof v?cc(v):bv.extend({},v);
var u,s,r,q,o=[],n=[],m=-1,l=function(){for(q=v.once,r=u=!0;
n.length;
m=-1){s=n.shift();
while(++m<o.length){o[m].apply(s[0],s[1])===!1&&v.stopOnFalse&&(m=o.length,s=!1)
}}v.memory||(s=!1),u=!1,q&&(o=s?[]:"")
},k={add:function(){return o&&(s&&!u&&(m=o.length-1,n.push(s)),function a(c){bv.each(c,function(d,e){bv.isFunction(e)?v.unique&&k.has(e)||o.push(e):e&&e.length&&"string"!==bv.type(e)&&a(e)
})
}(arguments),s&&!u&&l()),this
},remove:function(){return bv.each(arguments,function(e,d){var f;
while((f=bv.inArray(d,o,f))>-1){o.splice(f,1),f<=m&&m--
}}),this
},has:function(b){return b?bv.inArray(b,o)>-1:o.length>0
},empty:function(){return o&&(o=[]),this
},disable:function(){return q=n=[],o=s="",this
},disabled:function(){return !o
},lock:function(){return q=n=[],s||u||(o=s=""),this
},locked:function(){return !!q
},fireWith:function(b,d){return q||(d=d||[],d=[b,d.slice?d.slice():d],n.push(d),u||l()),this
},fire:function(){return k.fireWith(this,arguments),this
},fired:function(){return !!r
}};
return k
};
function b9(b){return b
}function b8(b){throw b
}function b7(f,e,h){var g;
try{f&&bv.isFunction(g=f.promise)?g.call(f).done(e).fail(h):f&&bv.isFunction(g=f.then)?g.call(f,e,h):e.call(void 0,f)
}catch(f){h.call(void 0,f)
}}bv.extend({Deferred:function(a){var k=[["notify","progress",bv.Callbacks("memory"),bv.Callbacks("memory"),2],["resolve","done",bv.Callbacks("once memory"),bv.Callbacks("once memory"),0,"resolved"],["reject","fail",bv.Callbacks("once memory"),bv.Callbacks("once memory"),1,"rejected"]],j="pending",h={state:function(){return j
},always:function(){return g.done(arguments).fail(arguments),this
},"catch":function(b){return h.then(null,b)
},pipe:function(){var b=arguments;
return bv.Deferred(function(c){bv.each(k,function(m,l){var f=bv.isFunction(b[l[4]])&&b[l[4]];
g[l[1]](function(){var d=f&&f.apply(this,arguments);
d&&bv.isFunction(d.promise)?d.promise().progress(c.notify).done(c.resolve).fail(c.reject):c[l[0]+"With"](this,f?[d]:arguments)
})
}),b=null
}).promise()
},then:function(c,o,n){var m=0;
function l(f,s,r,q){return function(){var u=this,e=arguments,d=function(){var v,w;
if(!(f<m)){if(v=r.apply(u,e),v===s.promise()){throw new TypeError("Thenable self-resolution")
}w=v&&("object"==typeof v||"function"==typeof v)&&v.then,bv.isFunction(w)?q?w.call(v,l(m,s,b9,q),l(m,s,b8,q)):(m++,w.call(v,l(m,s,b9,q),l(m,s,b8,q),l(m,s,b9,s.notifyWith))):(r!==b9&&(u=void 0,e=[v]),(q||s.resolveWith)(u,e))
}},b=q?d:function(){try{d()
}catch(v){bv.Deferred.exceptionHook&&bv.Deferred.exceptionHook(v,b.stackTrace),f+1>=m&&(r!==b8&&(u=void 0,e=[v]),s.rejectWith(u,e))
}};
f?b():(bv.Deferred.getStackHook&&(b.stackTrace=bv.Deferred.getStackHook()),bP.setTimeout(b))
}
}return bv.Deferred(function(b){k[0][3].add(l(0,b,bv.isFunction(n)?n:b9,b.notifyWith)),k[1][3].add(l(0,b,bv.isFunction(c)?c:b9)),k[2][3].add(l(0,b,bv.isFunction(o)?o:b8))
}).promise()
},promise:function(b){return null!=b?bv.extend(b,h):h
}},g={};
return bv.each(k,function(d,c){var f=c[2],e=c[5];
h[c[1]]=f.add,e&&f.add(function(){j=e
},k[3-d][2].disable,k[0][2].lock),f.add(c[3].fire),g[c[0]]=function(){return g[c[0]+"With"](this===g?void 0:this,arguments),this
},g[c[0]+"With"]=f.fireWith
}),h.promise(g),a&&a.call(g,g),g
},when:function(j){var f=arguments.length,o=f,n=Array(o),m=bJ.call(arguments),l=bv.Deferred(),k=function(b){return function(a){n[b]=this,m[b]=arguments.length>1?bJ.call(arguments):a,--f||l.resolveWith(n,m)
}
};
if(f<=1&&(b7(j,l.done(k(o)).resolve,l.reject),"pending"===l.state()||bv.isFunction(m[o]&&m[o].then))){return l.then()
}while(o--){b7(m[o],k(o),l.reject)
}return l.promise()
}});
var b6=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
bv.Deferred.exceptionHook=function(a,d){bP.console&&bP.console.warn&&a&&b6.test(a.name)&&bP.console.warn("jQuery.Deferred exception: "+a.message,a.stack,d)
},bv.readyException=function(a){bP.setTimeout(function(){throw a
})
};
var b5=bv.Deferred();
bv.fn.ready=function(b){return b5.then(b)["catch"](function(c){bv.readyException(c)
}),this
},bv.extend({isReady:!1,readyWait:1,holdReady:function(b){b?bv.readyWait++:bv.ready(!0)
},ready:function(b){(b===!0?--bv.readyWait:bv.isReady)||(bv.isReady=!0,b!==!0&&--bv.readyWait>0||b5.resolveWith(bM,[bv]))
}}),bv.ready.then=b5.then;
function b3(){bM.removeEventListener("DOMContentLoaded",b3),bP.removeEventListener("load",b3),bv.ready()
}"complete"===bM.readyState||"loading"!==bM.readyState&&!bM.documentElement.doScroll?bP.setTimeout(bv.ready):(bM.addEventListener("DOMContentLoaded",b3),bP.addEventListener("load",b3));
var b2=function(v,u,s,r,q,o,n){var m=0,l=v.length,k=null==s;
if("object"===bv.type(s)){q=!0;
for(m in s){b2(v,u,m,s[m],!0,o,n)
}}else{if(void 0!==r&&(q=!0,bv.isFunction(r)||(n=!0),k&&(n?(u.call(v,r),u=null):(k=u,u=function(e,d,f){return k.call(bv(e),f)
})),u)){for(;
m<l;
m++){u(v[m],s,n?r:r.call(v[m],m,u(v[m],s)))
}}}return q?v:k?u.call(v):l?u(v[0],s):o
},b1=function(b){return 1===b.nodeType||9===b.nodeType||!+b.nodeType
};
function b0(){this.expando=bv.expando+b0.uid++
}b0.uid=1,b0.prototype={cache:function(d){var c=d[this.expando];
return c||(c={},b1(d)&&(d.nodeType?d[this.expando]=c:Object.defineProperty(d,this.expando,{value:c,configurable:!0}))),c
},set:function(g,f,k){var j,h=this.cache(g);
if("string"==typeof f){h[bv.camelCase(f)]=k
}else{for(j in f){h[bv.camelCase(j)]=f[j]
}}return h
},get:function(d,c){return void 0===c?this.cache(d):d[this.expando]&&d[this.expando][bv.camelCase(c)]
},access:function(e,d,f){return void 0===d||d&&"string"==typeof d&&void 0===f?this.get(e,d):(this.set(e,d,f),void 0!==f?f:d)
},remove:function(f,e){var h,g=f[this.expando];
if(void 0!==g){if(void 0!==e){bv.isArray(e)?e=e.map(bv.camelCase):(e=bv.camelCase(e),e=e in g?[e]:e.match(cd)||[]),h=e.length;
while(h--){delete g[e[h]]
}}(void 0===e||bv.isEmptyObject(g))&&(f.nodeType?f[this.expando]=void 0:delete f[this.expando])
}},hasData:function(d){var c=d[this.expando];
return void 0!==c&&!bv.isEmptyObject(c)
}};
var bZ=new b0,bY=new b0,bX=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,bW=/[A-Z]/g;
function bV(g,f,k){var j;
if(void 0===k&&1===g.nodeType){if(j="data-"+f.replace(bW,"-$&").toLowerCase(),k=g.getAttribute(j),"string"==typeof k){try{k="true"===k||"false"!==k&&("null"===k?null:+k+""===k?+k:bX.test(k)?JSON.parse(k):k)
}catch(h){}bY.set(g,f,k)
}else{k=void 0
}}return k
}bv.extend({hasData:function(b){return bY.hasData(b)||bZ.hasData(b)
},data:function(e,d,f){return bY.access(e,d,f)
},removeData:function(d,c){bY.remove(d,c)
},_data:function(e,d,f){return bZ.access(e,d,f)
},_removeData:function(d,c){bZ.remove(d,c)
}}),bv.fn.extend({data:function(j,h){var o,n,m,l=this[0],k=l&&l.attributes;
if(void 0===j){if(this.length&&(m=bY.get(l),1===l.nodeType&&!bZ.get(l,"hasDataAttrs"))){o=k.length;
while(o--){k[o]&&(n=k[o].name,0===n.indexOf("data-")&&(n=bv.camelCase(n.slice(5)),bV(l,n,m[n])))
}bZ.set(l,"hasDataAttrs",!0)
}return m
}return"object"==typeof j?this.each(function(){bY.set(this,j)
}):b2(this,function(a){var d;
if(l&&void 0===a){if(d=bY.get(l,j),void 0!==d){return d
}if(d=bV(l,j),void 0!==d){return d
}}else{this.each(function(){bY.set(this,j,a)
})
}},null,h,arguments.length>1,null,!0)
},removeData:function(b){return this.each(function(){bY.remove(this,b)
})
}}),bv.extend({queue:function(f,e,h){var g;
if(f){return e=(e||"fx")+"queue",g=bZ.get(f,e),h&&(!g||bv.isArray(h)?g=bZ.access(f,e,bv.makeArray(h)):g.push(h)),g||[]
}},dequeue:function(j,h){h=h||"fx";
var o=bv.queue(j,h),n=o.length,m=o.shift(),l=bv._queueHooks(j,h),k=function(){bv.dequeue(j,h)
};
"inprogress"===m&&(m=o.shift(),n--),m&&("fx"===h&&o.unshift("inprogress"),delete l.stop,m.call(j,k,l)),!n&&l&&l.empty.fire()
},_queueHooks:function(e,d){var f=d+"queueHooks";
return bZ.get(e,f)||bZ.access(e,f,{empty:bv.Callbacks("once memory").add(function(){bZ.remove(e,[d+"queue",f])
})})
}}),bv.fn.extend({queue:function(e,d){var f=2;
return"string"!=typeof e&&(d=e,e="fx",f--),arguments.length<f?bv.queue(this[0],e):void 0===d?this:this.each(function(){var a=bv.queue(this,e,d);
bv._queueHooks(this,e),"fx"===e&&"inprogress"!==a[0]&&bv.dequeue(this,e)
})
},dequeue:function(b){return this.each(function(){bv.dequeue(this,b)
})
},clearQueue:function(b){return this.queue(b||"fx",[])
},promise:function(k,j){var r,q=1,o=bv.Deferred(),n=this,m=this.length,l=function(){--q||o.resolveWith(n,[n])
};
"string"!=typeof k&&(j=k,k=void 0),k=k||"fx";
while(m--){r=bZ.get(n[m],k+"queueHooks"),r&&r.empty&&(q++,r.empty.add(l))
}return l(),o.promise(j)
}});
var cB=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,bQ=new RegExp("^(?:([+-])=|)("+cB+")([a-z%]*)$","i"),cA=["Top","Right","Bottom","Left"],cj=function(d,c){return d=c||d,"none"===d.style.display||""===d.style.display&&bv.contains(d.ownerDocument,d)&&"none"===bv.css(d,"display")
},bK=function(j,h,o,n){var m,l,k={};
for(l in h){k[l]=j.style[l],j.style[l]=h[l]
}m=o.apply(j,n||[]);
for(l in h){j.style[l]=k[l]
}return m
};
function bi(x,w,v,u){var s,r=1,q=20,o=u?function(){return u.cur()
}:function(){return bv.css(x,w,"")
},n=o(),m=v&&v[3]||(bv.cssNumber[w]?"":"px"),l=(bv.cssNumber[w]||"px"!==m&&+n)&&bQ.exec(bv.css(x,w));
if(l&&l[3]!==m){m=m||l[3],v=v||[],l=+n||1;
do{r=r||".5",l/=r,bv.style(x,w,l+m)
}while(r!==(r=o()/n)&&1!==r&&--q)
}return v&&(l=+l||+n||0,s=v[1]?l+(v[1]+1)*v[2]:+v[2],u&&(u.unit=m,u.start=l,u.end=s)),s
}var a9={};
function a2(g){var f,k=g.ownerDocument,j=g.nodeName,h=a9[j];
return h?h:(f=k.body.appendChild(k.createElement(j)),h=bv.css(f,"display"),f.parentNode.removeChild(f),"none"===h&&(h="block"),a9[j]=h,h)
}function aT(j,h){for(var o,n,m=[],l=0,k=j.length;
l<k;
l++){n=j[l],n.style&&(o=n.style.display,h?("none"===o&&(m[l]=bZ.get(n,"display")||null,m[l]||(n.style.display="")),""===n.style.display&&cj(n)&&(m[l]=a2(n))):"none"!==o&&(m[l]="none",bZ.set(n,"display",o)))
}for(l=0;
l<k;
l++){null!=m[l]&&(j[l].style.display=m[l])
}return j
}bv.fn.extend({show:function(){return aT(this,!0)
},hide:function(){return aT(this)
},toggle:function(b){return"boolean"==typeof b?b?this.show():this.hide():this.each(function(){cj(this)?bv(this).show():bv(this).hide()
})
}});
var aL=/^(?:checkbox|radio)$/i,aD=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,av=/^$|\/(?:java|ecma)script/i,am={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};
am.optgroup=am.option,am.tbody=am.tfoot=am.colgroup=am.caption=am.thead,am.th=am.td;
function ad(e,d){var f="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(d||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(d||"*"):[];
return void 0===d||d&&bv.nodeName(e,d)?bv.merge([e],f):f
}function cF(f,e){for(var h=0,g=f.length;
h<g;
h++){bZ.set(f[h],"globalEval",!e||bZ.get(e[h],"globalEval"))
}}var cu=/<|&#?\w+;/;
function bU(F,E,D,C,B){for(var A,z,y,x,w,v,u=E.createDocumentFragment(),s=[],r=0,q=F.length;
r<q;
r++){if(A=F[r],A||0===A){if("object"===bv.type(A)){bv.merge(s,A.nodeType?[A]:A)
}else{if(cu.test(A)){z=z||u.appendChild(E.createElement("div")),y=(aD.exec(A)||["",""])[1].toLowerCase(),x=am[y]||am._default,z.innerHTML=x[1]+bv.htmlPrefilter(A)+x[2],v=x[0];
while(v--){z=z.lastChild
}bv.merge(s,z.childNodes),z=u.firstChild,z.textContent=""
}else{s.push(E.createTextNode(A))
}}}}u.textContent="",r=0;
while(A=s[r++]){if(C&&bv.inArray(A,C)>-1){B&&B.push(A)
}else{if(w=bv.contains(A.ownerDocument,A),z=ad(u.appendChild(A),"script"),w&&cF(z),D){v=0;
while(A=z[v++]){av.test(A.type||"")&&D.push(A)
}}}}return u
}!function(){var e=bM.createDocumentFragment(),d=e.appendChild(bM.createElement("div")),f=bM.createElement("input");
f.setAttribute("type","radio"),f.setAttribute("checked","checked"),f.setAttribute("name","t"),d.appendChild(f),bz.checkClone=d.cloneNode(!0).cloneNode(!0).lastChild.checked,d.innerHTML="<textarea>x</textarea>",bz.noCloneChecked=!!d.cloneNode(!0).lastChild.defaultValue
}();
var bn=bM.documentElement,bf=/^key/,a6=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,aX=/^([^.]*)(?:\.(.+)|)/;
function aP(){return !0
}function aH(){return !1
}function az(){try{return bM.activeElement
}catch(b){}}function aq(k,j,r,q,o,n){var m,l;
if("object"==typeof j){"string"!=typeof r&&(q=q||r,r=void 0);
for(l in j){aq(k,l,r,q,j[l],n)
}return k
}if(null==q&&null==o?(o=r,q=r=void 0):null==o&&("string"==typeof r?(o=q,q=void 0):(o=q,q=r,r=void 0)),o===!1){o=aH
}else{if(!o){return k
}}return 1===n&&(m=o,o=function(b){return bv().off(b),m.apply(this,arguments)
},o.guid=m.guid||(m.guid=bv.guid++)),k.each(function(){bv.event.add(this,j,o,q,r)
})
}bv.event={global:{},add:function(I,H,G,F,E){var D,C,B,A,z,y,x,w,v,u,s,r=bZ.get(I);
if(r){G.handler&&(D=G,G=D.handler,E=D.selector),E&&bv.find.matchesSelector(bn,E),G.guid||(G.guid=bv.guid++),(A=r.events)||(A=r.events={}),(C=r.handle)||(C=r.handle=function(a){return"undefined"!=typeof bv&&bv.event.triggered!==a.type?bv.event.dispatch.apply(I,arguments):void 0
}),H=(H||"").match(cd)||[""],z=H.length;
while(z--){B=aX.exec(H[z])||[],v=s=B[1],u=(B[2]||"").split(".").sort(),v&&(x=bv.event.special[v]||{},v=(E?x.delegateType:x.bindType)||v,x=bv.event.special[v]||{},y=bv.extend({type:v,origType:s,data:F,handler:G,guid:G.guid,selector:E,needsContext:E&&bv.expr.match.needsContext.test(E),namespace:u.join(".")},D),(w=A[v])||(w=A[v]=[],w.delegateCount=0,x.setup&&x.setup.call(I,F,u,C)!==!1||I.addEventListener&&I.addEventListener(v,C)),x.add&&(x.add.call(I,y),y.handler.guid||(y.handler.guid=G.guid)),E?w.splice(w.delegateCount++,0,y):w.push(y),bv.event.global[v]=!0)
}}},remove:function(I,H,G,F,E){var D,C,B,A,z,y,x,w,v,u,s,r=bZ.hasData(I)&&bZ.get(I);
if(r&&(A=r.events)){H=(H||"").match(cd)||[""],z=H.length;
while(z--){if(B=aX.exec(H[z])||[],v=s=B[1],u=(B[2]||"").split(".").sort(),v){x=bv.event.special[v]||{},v=(F?x.delegateType:x.bindType)||v,w=A[v]||[],B=B[2]&&new RegExp("(^|\\.)"+u.join("\\.(?:.*\\.|)")+"(\\.|$)"),C=D=w.length;
while(D--){y=w[D],!E&&s!==y.origType||G&&G.guid!==y.guid||B&&!B.test(y.namespace)||F&&F!==y.selector&&("**"!==F||!y.selector)||(w.splice(D,1),y.selector&&w.delegateCount--,x.remove&&x.remove.call(I,y))
}C&&!w.length&&(x.teardown&&x.teardown.call(I,u,r.handle)!==!1||bv.removeEvent(I,v,r.handle),delete A[v])
}else{for(v in A){bv.event.remove(I,v+H[z],G,F,!0)
}}}bv.isEmptyObject(A)&&bZ.remove(I,"handle events")
}},dispatch:function(x){var w=bv.event.fix(x),v,u,s,r,q,o,n=new Array(arguments.length),m=(bZ.get(this,"events")||{})[w.type]||[],l=bv.event.special[w.type]||{};
for(n[0]=w,v=1;
v<arguments.length;
v++){n[v]=arguments[v]
}if(w.delegateTarget=this,!l.preDispatch||l.preDispatch.call(this,w)!==!1){o=bv.event.handlers.call(this,w,m),v=0;
while((r=o[v++])&&!w.isPropagationStopped()){w.currentTarget=r.elem,u=0;
while((q=r.handlers[u++])&&!w.isImmediatePropagationStopped()){w.rnamespace&&!w.rnamespace.test(q.namespace)||(w.handleObj=q,w.data=q.data,s=((bv.event.special[q.origType]||{}).handle||q.handler).apply(r.elem,n),void 0!==s&&(w.result=s)===!1&&(w.preventDefault(),w.stopPropagation()))
}}return l.postDispatch&&l.postDispatch.call(this,w),w.result
}},handlers:function(s,r){var q,o,n,m,l=[],k=r.delegateCount,j=s.target;
if(k&&j.nodeType&&("click"!==s.type||isNaN(s.button)||s.button<1)){for(;
j!==this;
j=j.parentNode||this){if(1===j.nodeType&&(j.disabled!==!0||"click"!==s.type)){for(o=[],q=0;
q<k;
q++){m=r[q],n=m.selector+" ",void 0===o[n]&&(o[n]=m.needsContext?bv(n,this).index(j)>-1:bv.find(n,this,null,[j]).length),o[n]&&o.push(m)
}o.length&&l.push({elem:j,handlers:o})
}}}return k<r.length&&l.push({elem:this,handlers:r.slice(k)}),l
},addProp:function(d,c){Object.defineProperty(bv.Event.prototype,d,{enumerable:!0,configurable:!0,get:bv.isFunction(c)?function(){if(this.originalEvent){return c(this.originalEvent)
}}:function(){if(this.originalEvent){return this.originalEvent[d]
}},set:function(a){Object.defineProperty(this,d,{enumerable:!0,configurable:!0,writable:!0,value:a})
}})
},fix:function(b){return b[bv.expando]?b:new bv.Event(b)
},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==az()&&this.focus){return this.focus(),!1
}},delegateType:"focusin"},blur:{trigger:function(){if(this===az()&&this.blur){return this.blur(),!1
}},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&bv.nodeName(this,"input")){return this.click(),!1
}},_default:function(b){return bv.nodeName(b.target,"a")
}},beforeunload:{postDispatch:function(b){void 0!==b.result&&b.originalEvent&&(b.originalEvent.returnValue=b.result)
}}}},bv.removeEvent=function(e,d,f){e.removeEventListener&&e.removeEventListener(d,f)
},bv.Event=function(d,c){return this instanceof bv.Event?(d&&d.type?(this.originalEvent=d,this.type=d.type,this.isDefaultPrevented=d.defaultPrevented||void 0===d.defaultPrevented&&d.returnValue===!1?aP:aH,this.target=d.target&&3===d.target.nodeType?d.target.parentNode:d.target,this.currentTarget=d.currentTarget,this.relatedTarget=d.relatedTarget):this.type=d,c&&bv.extend(this,c),this.timeStamp=d&&d.timeStamp||bv.now(),void (this[bv.expando]=!0)):new bv.Event(d,c)
},bv.Event.prototype={constructor:bv.Event,isDefaultPrevented:aH,isPropagationStopped:aH,isImmediatePropagationStopped:aH,isSimulated:!1,preventDefault:function(){var b=this.originalEvent;
this.isDefaultPrevented=aP,b&&!this.isSimulated&&b.preventDefault()
},stopPropagation:function(){var b=this.originalEvent;
this.isPropagationStopped=aP,b&&!this.isSimulated&&b.stopPropagation()
},stopImmediatePropagation:function(){var b=this.originalEvent;
this.isImmediatePropagationStopped=aP,b&&!this.isSimulated&&b.stopImmediatePropagation(),this.stopPropagation()
}},bv.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(d){var c=d.button;
return null==d.which&&bf.test(d.type)?null!=d.charCode?d.charCode:d.keyCode:!d.which&&void 0!==c&&a6.test(d.type)?1&c?1:2&c?3:4&c?2:0:d.which
}},bv.event.addProp),bv.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(d,c){bv.event.special[d]={delegateType:c,bindType:c,handle:function(b){var k,j=this,h=b.relatedTarget,g=b.handleObj;
return h&&(h===j||bv.contains(j,h))||(b.type=g.origType,k=g.handler.apply(this,arguments),b.type=c),k
}}
}),bv.fn.extend({on:function(f,e,h,g){return aq(this,f,e,h,g)
},one:function(f,e,h,g){return aq(this,f,e,h,g,1)
},off:function(g,f,k){var j,h;
if(g&&g.preventDefault&&g.handleObj){return j=g.handleObj,bv(g.delegateTarget).off(j.namespace?j.origType+"."+j.namespace:j.origType,j.selector,j.handler),this
}if("object"==typeof g){for(h in g){this.off(h,f,g[h])
}return this
}return f!==!1&&"function"!=typeof f||(k=f,f=void 0),k===!1&&(k=aH),this.each(function(){bv.event.remove(this,g,k,f)
})
}});
var ah=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,cJ=/<script|<style|<link/i,cy=/checked\s*(?:[^=]|=\s*.checked.)/i,a0=/^true\/(.*)/,aR=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
function aJ(d,c){return bv.nodeName(d,"table")&&bv.nodeName(11!==c.nodeType?c:c.firstChild,"tr")?d.getElementsByTagName("tbody")[0]||d:d
}function aB(b){return b.type=(null!==b.getAttribute("type"))+"/"+b.type,b
}function at(d){var c=a0.exec(d.type);
return c?d.type=c[1]:d.removeAttribute("type"),d
}function ak(v,u){var s,r,q,o,n,m,l,k;
if(1===u.nodeType){if(bZ.hasData(v)&&(o=bZ.access(v),n=bZ.set(u,o),k=o.events)){delete n.handle,n.events={};
for(q in k){for(s=0,r=k[q].length;
s<r;
s++){bv.event.add(u,q,k[q][s])
}}}bY.hasData(v)&&(m=bY.access(v),l=bv.extend({},m),bY.set(u,l))
}}function cL(e,d){var f=d.nodeName.toLowerCase();
"input"===f&&aL.test(e.type)?d.checked=e.checked:"input"!==f&&"textarea"!==f||(d.defaultValue=e.defaultValue)
}function cD(E,D,C,B){D=bH.apply([],D);
var A,z,y,x,w,v,u=0,r=E.length,o=r-1,g=D[0],F=bv.isFunction(g);
if(F||r>1&&"string"==typeof g&&!bz.checkClone&&cy.test(g)){return E.each(function(b){var a=E.eq(b);
F&&(D[0]=g.call(this,b,a.html())),cD(a,D,C,B)
})
}if(r&&(A=bU(D,E[0].ownerDocument,!1,E,B),z=A.firstChild,1===A.childNodes.length&&(A=z),z||B)){for(y=bv.map(ad(A,"script"),aB),x=y.length;
u<r;
u++){w=A,u!==o&&(w=bv.clone(w,!0,!0),x&&bv.merge(y,ad(w,"script"))),C.call(E[u],w,u)
}if(x){for(v=y[y.length-1].ownerDocument,bv.map(y,at),u=0;
u<x;
u++){w=y[u],av.test(w.type||"")&&!bZ.access(w,"globalEval")&&bv.contains(v,w)&&(w.src?bv._evalUrl&&bv._evalUrl(w.src):by(w.textContent.replace(aR,""),v))
}}}return E
}function cs(h,g,m){for(var l,k=g?bv.filter(g,h):h,j=0;
null!=(l=k[j]);
j++){m||1!==l.nodeType||bv.cleanData(ad(l)),l.parentNode&&(m&&bv.contains(l.ownerDocument,l)&&cF(ad(l,"script")),l.parentNode.removeChild(l))
}return h
}bv.extend({htmlPrefilter:function(b){return b.replace(ah,"<$1></$2>")
},clone:function(s,r,q){var o,n,m,l,k=s.cloneNode(!0),j=bv.contains(s.ownerDocument,s);
if(!(bz.noCloneChecked||1!==s.nodeType&&11!==s.nodeType||bv.isXMLDoc(s))){for(l=ad(k),m=ad(s),o=0,n=m.length;
o<n;
o++){cL(m[o],l[o])
}}if(r){if(q){for(m=m||ad(s),l=l||ad(k),o=0,n=m.length;
o<n;
o++){ak(m[o],l[o])
}}else{ak(s,k)
}}return l=ad(k,"script"),l.length>0&&cF(l,!j&&ad(s,"script")),k
},cleanData:function(h){for(var g,m,l,k=bv.event.special,j=0;
void 0!==(m=h[j]);
j++){if(b1(m)){if(g=m[bZ.expando]){if(g.events){for(l in g.events){k[l]?bv.event.remove(m,l):bv.removeEvent(m,l,g.handle)
}}m[bZ.expando]=void 0
}m[bY.expando]&&(m[bY.expando]=void 0)
}}}}),bv.fn.extend({detach:function(b){return cs(this,b,!0)
},remove:function(b){return cs(this,b)
},text:function(b){return b2(this,function(c){return void 0===c?bv.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=c)
})
},null,b,arguments.length)
},append:function(){return cD(this,arguments,function(d){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var c=aJ(this,d);
c.appendChild(d)
}})
},prepend:function(){return cD(this,arguments,function(d){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var c=aJ(this,d);
c.insertBefore(d,c.firstChild)
}})
},before:function(){return cD(this,arguments,function(b){this.parentNode&&this.parentNode.insertBefore(b,this)
})
},after:function(){return cD(this,arguments,function(b){this.parentNode&&this.parentNode.insertBefore(b,this.nextSibling)
})
},empty:function(){for(var d,c=0;
null!=(d=this[c]);
c++){1===d.nodeType&&(bv.cleanData(ad(d,!1)),d.textContent="")
}return this
},clone:function(d,c){return d=null!=d&&d,c=null==c?d:c,this.map(function(){return bv.clone(this,d,c)
})
},html:function(b){return b2(this,function(g){var f=this[0]||{},k=0,j=this.length;
if(void 0===g&&1===f.nodeType){return f.innerHTML
}if("string"==typeof g&&!cJ.test(g)&&!am[(aD.exec(g)||["",""])[1].toLowerCase()]){g=bv.htmlPrefilter(g);
try{for(;
k<j;
k++){f=this[k]||{},1===f.nodeType&&(bv.cleanData(ad(f,!1)),f.innerHTML=g)
}f=0
}catch(h){}}f&&this.empty().append(g)
},null,b,arguments.length)
},replaceWith:function(){var b=[];
return cD(this,arguments,function(a){var d=this.parentNode;
bv.inArray(this,b)<0&&(bv.cleanData(ad(this)),d&&d.replaceChild(a,this))
},b)
}}),bv.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(d,c){bv.fn[d]=function(b){for(var m,l=[],k=bv(b),j=k.length-1,h=0;
h<=j;
h++){m=h===j?this:this.clone(!0),bv(k[h])[c](m),bG.apply(l,m.get())
}return this.pushStack(l)
}
});
var bS=/^margin/,bk=new RegExp("^("+cB+")(?!px)[a-z%]+$","i"),bd=function(a){var d=a.ownerDocument.defaultView;
return d&&d.opener||(d=bP),d.getComputedStyle(a)
};
!function(){function a(){if(d){d.style.cssText="box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",d.innerHTML="",bn.appendChild(j);
var c=bP.getComputedStyle(d);
n="1%"!==c.top,k="2px"===c.marginLeft,m="4px"===c.width,d.style.marginRight="50%",l="4px"===c.marginRight,bn.removeChild(j),d=null
}}var n,m,l,k,j=bM.createElement("div"),d=bM.createElement("div");
d.style&&(d.style.backgroundClip="content-box",d.cloneNode(!0).style.backgroundClip="",bz.clearCloneStyle="content-box"===d.style.backgroundClip,j.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",j.appendChild(d),bv.extend(bz,{pixelPosition:function(){return a(),n
},boxSizingReliable:function(){return a(),m
},pixelMarginRight:function(){return a(),l
},reliableMarginLeft:function(){return a(),k
}}))
}();
function a4(k,j,r){var q,o,n,m,l=k.style;
return r=r||bd(k),r&&(m=r.getPropertyValue(j)||r[j],""!==m||bv.contains(k.ownerDocument,k)||(m=bv.style(k,j)),!bz.pixelMarginRight()&&bk.test(m)&&bS.test(j)&&(q=l.width,o=l.minWidth,n=l.maxWidth,l.minWidth=l.maxWidth=l.width=m,m=r.width,l.width=q,l.minWidth=o,l.maxWidth=n)),void 0!==m?m+"":m
}function aV(d,c){return{get:function(){return d()?void delete this.get:(this.get=c).apply(this,arguments)
}}
}var aN=/^(none|table(?!-c[ea]).+)/,aF={position:"absolute",visibility:"hidden",display:"block"},ax={letterSpacing:"0",fontWeight:"400"},ao=["Webkit","Moz","ms"],af=bM.createElement("div").style;
function cH(e){if(e in af){return e
}var d=e[0].toUpperCase()+e.slice(1),f=ao.length;
while(f--){if(e=ao[f]+d,e in af){return e
}}}function cw(f,e,h){var g=bQ.exec(e);
return g?Math.max(0,g[2]-(h||0))+(g[3]||"px"):e
}function b4(j,h,o,n,m){for(var l=o===(n?"border":"content")?4:"width"===h?1:0,k=0;
l<4;
l+=2){"margin"===o&&(k+=bv.css(j,o+cA[l],!0,m)),n?("content"===o&&(k-=bv.css(j,"padding"+cA[l],!0,m)),"margin"!==o&&(k-=bv.css(j,"border"+cA[l]+"Width",!0,m))):(k+=bv.css(j,"padding"+cA[l],!0,m),"padding"!==o&&(k+=bv.css(j,"border"+cA[l]+"Width",!0,m)))
}return k
}function bx(j,h,o){var n,m=!0,l=bd(j),k="border-box"===bv.css(j,"boxSizing",!1,l);
if(j.getClientRects().length&&(n=j.getBoundingClientRect()[h]),n<=0||null==n){if(n=a4(j,h,l),(n<0||null==n)&&(n=j.style[h]),bk.test(n)){return n
}m=k&&(bz.boxSizingReliable()||n===j.style[h]),n=parseFloat(n)||0
}return n+b4(j,h,o||(k?"border":"content"),m,l)+"px"
}bv.extend({cssHooks:{opacity:{get:function(e,d){if(d){var f=a4(e,"opacity");
return""===f?"1":f
}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(s,r,q,o){if(s&&3!==s.nodeType&&8!==s.nodeType&&s.style){var n,m,l,k=bv.camelCase(r),j=s.style;
return r=bv.cssProps[k]||(bv.cssProps[k]=cH(k)||k),l=bv.cssHooks[r]||bv.cssHooks[k],void 0===q?l&&"get" in l&&void 0!==(n=l.get(s,!1,o))?n:j[r]:(m=typeof q,"string"===m&&(n=bQ.exec(q))&&n[1]&&(q=bi(s,r,n),m="number"),null!=q&&q===q&&("number"===m&&(q+=n&&n[3]||(bv.cssNumber[k]?"":"px")),bz.clearCloneStyle||""!==q||0!==r.indexOf("background")||(j[r]="inherit"),l&&"set" in l&&void 0===(q=l.set(s,q,o))||(j[r]=q)),void 0)
}},css:function(k,j,r,q){var o,n,m,l=bv.camelCase(j);
return j=bv.cssProps[l]||(bv.cssProps[l]=cH(l)||l),m=bv.cssHooks[j]||bv.cssHooks[l],m&&"get" in m&&(o=m.get(k,!0,r)),void 0===o&&(o=a4(k,j,q)),"normal"===o&&j in ax&&(o=ax[j]),""===r||r?(n=parseFloat(o),r===!0||isFinite(n)?n||0:o):o
}}),bv.each(["height","width"],function(d,c){bv.cssHooks[c]={get:function(b,f,e){if(f){return !aN.test(bv.css(b,"display"))||b.getClientRects().length&&b.getBoundingClientRect().width?bx(b,c,e):bK(b,aF,function(){return bx(b,c,e)
})
}},set:function(b,m,l){var k,j=l&&bd(b),h=l&&b4(b,c,l,"border-box"===bv.css(b,"boxSizing",!1,j),j);
return h&&(k=bQ.exec(m))&&"px"!==(k[3]||"px")&&(b.style[c]=m,m=bv.css(b,c)),cw(b,m,h)
}}
}),bv.cssHooks.marginLeft=aV(bz.reliableMarginLeft,function(d,c){if(c){return(parseFloat(a4(d,"marginLeft"))||d.getBoundingClientRect().left-bK(d,{marginLeft:0},function(){return d.getBoundingClientRect().left
}))+"px"
}}),bv.each({margin:"",padding:"",border:"Width"},function(d,c){bv.cssHooks[d+c]={expand:function(h){for(var g=0,b={},a="string"==typeof h?h.split(" "):[h];
g<4;
g++){b[d+cA[g]+c]=a[g]||a[g-2]||a[0]
}return b
}},bS.test(d)||(bv.cssHooks[d+c].set=cw)
}),bv.fn.extend({css:function(d,c){return b2(this,function(j,h,o){var n,m,l={},k=0;
if(bv.isArray(h)){for(n=bd(j),m=h.length;
k<m;
k++){l[h[k]]=bv.css(j,h[k],!1,n)
}return l
}return void 0!==o?bv.style(j,h,o):bv.css(j,h)
},d,c,arguments.length>1)
}});
function bg(g,f,k,j,h){return new bg.prototype.init(g,f,k,j,h)
}bv.Tween=bg,bg.prototype={constructor:bg,init:function(h,g,m,l,k,j){this.elem=h,this.prop=m,this.easing=k||bv.easing._default,this.options=g,this.start=this.now=this.cur(),this.end=l,this.unit=j||(bv.cssNumber[m]?"":"px")
},cur:function(){var b=bg.propHooks[this.prop];
return b&&b.get?b.get(this):bg.propHooks._default.get(this)
},run:function(e){var d,f=bg.propHooks[this.prop];
return this.options.duration?this.pos=d=bv.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=d=e,this.now=(this.end-this.start)*d+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),f&&f.set?f.set(this):bg.propHooks._default.set(this),this
}},bg.prototype.init.prototype=bg.prototype,bg.propHooks={_default:{get:function(d){var c;
return 1!==d.elem.nodeType||null!=d.elem[d.prop]&&null==d.elem.style[d.prop]?d.elem[d.prop]:(c=bv.css(d.elem,d.prop,""),c&&"auto"!==c?c:0)
},set:function(b){bv.fx.step[b.prop]?bv.fx.step[b.prop](b):1!==b.elem.nodeType||null==b.elem.style[bv.cssProps[b.prop]]&&!bv.cssHooks[b.prop]?b.elem[b.prop]=b.now:bv.style(b.elem,b.prop,b.now+b.unit)
}}},bg.propHooks.scrollTop=bg.propHooks.scrollLeft={set:function(b){b.elem.nodeType&&b.elem.parentNode&&(b.elem[b.prop]=b.now)
}},bv.easing={linear:function(b){return b
},swing:function(b){return 0.5-Math.cos(b*Math.PI)/2
},_default:"swing"},bv.fx=bg.prototype.init,bv.fx.step={};
var a7,aY,cq=/^(?:toggle|show|hide)$/,ai=/queueHooks$/;
function cz(){aY&&(bP.requestAnimationFrame(cz),bv.fx.tick())
}function ch(){return bP.setTimeout(function(){a7=void 0
}),a7=bv.now()
}function bI(g,f){var k,j=0,h={height:g};
for(f=f?1:0;
j<4;
j+=2-f){k=cA[j],h["margin"+k]=h["padding"+k]=g
}return f&&(h.opacity=h.width=g),h
}function bh(j,h,o){for(var n,m=(aS.tweeners[h]||[]).concat(aS.tweeners["*"]),l=0,k=m.length;
l<k;
l++){if(n=m[l].call(o,h,j)){return n
}}}function a8(I,H,G){var F,E,D,C,B,A,z,y,x="width" in H||"height" in H,w=this,v={},u=I.style,s=I.nodeType&&cj(I),r=bZ.get(I,"fxshow");
G.queue||(C=bv._queueHooks(I,"fx"),null==C.unqueued&&(C.unqueued=0,B=C.empty.fire,C.empty.fire=function(){C.unqueued||B()
}),C.unqueued++,w.always(function(){w.always(function(){C.unqueued--,bv.queue(I,"fx").length||C.empty.fire()
})
}));
for(F in H){if(E=H[F],cq.test(E)){if(delete H[F],D=D||"toggle"===E,E===(s?"hide":"show")){if("show"!==E||!r||void 0===r[F]){continue
}s=!0
}v[F]=r&&r[F]||bv.style(I,F)
}}if(A=!bv.isEmptyObject(H),A||!bv.isEmptyObject(v)){x&&1===I.nodeType&&(G.overflow=[u.overflow,u.overflowX,u.overflowY],z=r&&r.display,null==z&&(z=bZ.get(I,"display")),y=bv.css(I,"display"),"none"===y&&(z?y=z:(aT([I],!0),z=I.style.display||z,y=bv.css(I,"display"),aT([I]))),("inline"===y||"inline-block"===y&&null!=z)&&"none"===bv.css(I,"float")&&(A||(w.done(function(){u.display=z
}),null==z&&(y=u.display,z="none"===y?"":y)),u.display="inline-block")),G.overflow&&(u.overflow="hidden",w.always(function(){u.overflow=G.overflow[0],u.overflowX=G.overflow[1],u.overflowY=G.overflow[2]
})),A=!1;
for(F in v){A||(r?"hidden" in r&&(s=r.hidden):r=bZ.access(I,"fxshow",{display:z}),D&&(r.hidden=!s),s&&aT([I],!0),w.done(function(){s||aT([I]),bZ.remove(I,"fxshow");
for(F in v){bv.style(I,F,v[F])
}})),A=bh(s?r[F]:0,F,w),F in r||(r[F]=A.start,s&&(A.end=A.start,A.start=0))
}}}function a1(j,h){var o,n,m,l,k;
for(o in j){if(n=bv.camelCase(o),m=h[n],l=j[o],bv.isArray(l)&&(m=l[1],l=j[o]=l[0]),o!==n&&(j[n]=l,delete j[o]),k=bv.cssHooks[n],k&&"expand" in k){l=k.expand(l),delete j[n];
for(o in l){o in j||(j[o]=l[o],h[o]=m)
}}else{h[n]=m
}}}function aS(x,w,v){var u,s,r=0,q=aS.prefilters.length,o=bv.Deferred().always(function(){delete n.elem
}),n=function(){if(s){return !1
}for(var a=a7||ch(),y=Math.max(0,m.startTime+m.duration-a),k=y/m.duration||0,j=1-k,h=0,e=m.tweens.length;
h<e;
h++){m.tweens[h].run(j)
}return o.notifyWith(x,[m,j,y]),j<1&&e?y:(o.resolveWith(x,[m]),!1)
},m=o.promise({elem:x,props:bv.extend({},w),opts:bv.extend(!0,{specialEasing:{},easing:bv.easing._default},v),originalProperties:w,originalOptions:v,startTime:a7||ch(),duration:v.duration,tweens:[],createTween:function(a,f){var e=bv.Tween(x,m.opts,a,f,m.opts.specialEasing[a]||m.opts.easing);
return m.tweens.push(e),e
},stop:function(a){var f=0,e=a?m.tweens.length:0;
if(s){return this
}for(s=!0;
f<e;
f++){m.tweens[f].run(1)
}return a?(o.notifyWith(x,[m,1,0]),o.resolveWith(x,[m,a])):o.rejectWith(x,[m,a]),this
}}),l=m.props;
for(a1(l,m.opts.specialEasing);
r<q;
r++){if(u=aS.prefilters[r].call(m,x,l,m.opts)){return bv.isFunction(u.stop)&&(bv._queueHooks(m.elem,m.opts.queue).stop=bv.proxy(u.stop,u)),u
}}return bv.map(l,bh,m),bv.isFunction(m.opts.start)&&m.opts.start.call(x,m),bv.fx.timer(bv.extend(n,{elem:x,anim:m,queue:m.opts.queue})),m.progress(m.opts.progress).done(m.opts.done,m.opts.complete).fail(m.opts.fail).always(m.opts.always)
}bv.Animation=bv.extend(aS,{tweeners:{"*":[function(e,d){var f=this.createTween(e,d);
return bi(f.elem,e,bQ.exec(d),f),f
}]},tweener:function(g,f){bv.isFunction(g)?(f=g,g=["*"]):g=g.match(cd);
for(var k,j=0,h=g.length;
j<h;
j++){k=g[j],aS.tweeners[k]=aS.tweeners[k]||[],aS.tweeners[k].unshift(f)
}},prefilters:[a8],prefilter:function(d,c){c?aS.prefilters.unshift(d):aS.prefilters.push(d)
}}),bv.speed=function(f,d,h){var g=f&&"object"==typeof f?bv.extend({},f):{complete:h||!h&&d||bv.isFunction(f)&&f,duration:f,easing:h&&d||d&&!bv.isFunction(d)&&d};
return bv.fx.off||bM.hidden?g.duration=0:g.duration="number"==typeof g.duration?g.duration:g.duration in bv.fx.speeds?bv.fx.speeds[g.duration]:bv.fx.speeds._default,null!=g.queue&&g.queue!==!0||(g.queue="fx"),g.old=g.complete,g.complete=function(){bv.isFunction(g.old)&&g.old.call(this),g.queue&&bv.dequeue(this,g.queue)
},g
},bv.fn.extend({fadeTo:function(f,e,h,g){return this.filter(cj).css("opacity",0).show().end().animate({opacity:e},f,h,g)
},animate:function(j,h,o,n){var m=bv.isEmptyObject(j),l=bv.speed(h,o,n),k=function(){var a=aS(this,bv.extend({},j),l);
(m||bZ.get(this,"finish"))&&a.stop(!0)
};
return k.finish=k,m||l.queue===!1?this.each(k):this.queue(l.queue,k)
},stop:function(f,e,h){var g=function(d){var c=d.stop;
delete d.stop,c(h)
};
return"string"!=typeof f&&(h=e,e=f,f=void 0),e&&f!==!1&&this.queue(f||"fx",[]),this.each(function(){var a=!0,j=null!=f&&f+"queueHooks",d=bv.timers,c=bZ.get(this);
if(j){c[j]&&c[j].stop&&g(c[j])
}else{for(j in c){c[j]&&c[j].stop&&ai.test(j)&&g(c[j])
}}for(j=d.length;
j--;
){d[j].elem!==this||null!=f&&d[j].queue!==f||(d[j].anim.stop(h),a=!1,d.splice(j,1))
}!a&&h||bv.dequeue(this,f)
})
},finish:function(b){return b!==!1&&(b=b||"fx"),this.each(function(){var a,m=bZ.get(this),l=m[b+"queue"],k=m[b+"queueHooks"],j=bv.timers,h=l?l.length:0;
for(m.finish=!0,bv.queue(this,b,[]),k&&k.stop&&k.stop.call(this,!0),a=j.length;
a--;
){j[a].elem===this&&j[a].queue===b&&(j[a].anim.stop(!0),j.splice(a,1))
}for(a=0;
a<h;
a++){l[a]&&l[a].finish&&l[a].finish.call(this)
}delete m.finish
})
}}),bv.each(["toggle","show","hide"],function(e,d){var f=bv.fn[d];
bv.fn[d]=function(b,g,c){return null==b||"boolean"==typeof b?f.apply(this,arguments):this.animate(bI(d,!0),b,g,c)
}
}),bv.each({slideDown:bI("show"),slideUp:bI("hide"),slideToggle:bI("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(d,c){bv.fn[d]=function(b,f,e){return this.animate(c,b,f,e)
}
}),bv.timers=[],bv.fx.tick=function(){var e,d=0,f=bv.timers;
for(a7=bv.now();
d<f.length;
d++){e=f[d],e()||f[d]!==e||f.splice(d--,1)
}f.length||bv.fx.stop(),a7=void 0
},bv.fx.timer=function(b){bv.timers.push(b),b()?bv.fx.start():bv.timers.pop()
},bv.fx.interval=13,bv.fx.start=function(){aY||(aY=bP.requestAnimationFrame?bP.requestAnimationFrame(cz):bP.setInterval(bv.fx.tick,bv.fx.interval))
},bv.fx.stop=function(){bP.cancelAnimationFrame?bP.cancelAnimationFrame(aY):bP.clearInterval(aY),aY=null
},bv.fx.speeds={slow:600,fast:200,_default:400},bv.fn.delay=function(a,d){return a=bv.fx?bv.fx.speeds[a]||a:a,d=d||"fx",this.queue(d,function(g,f){var b=bP.setTimeout(g,a);
f.stop=function(){bP.clearTimeout(b)
}
})
},function(){var e=bM.createElement("input"),d=bM.createElement("select"),f=d.appendChild(bM.createElement("option"));
e.type="checkbox",bz.checkOn=""!==e.value,bz.optSelected=f.selected,e=bM.createElement("input"),e.value="t",e.type="radio",bz.radioValue="t"===e.value
}();
var aK,aC=bv.expr.attrHandle;
bv.fn.extend({attr:function(d,c){return b2(this,bv.attr,d,c,arguments.length>1)
},removeAttr:function(b){return this.each(function(){bv.removeAttr(this,b)
})
}}),bv.extend({attr:function(h,g,m){var l,k,j=h.nodeType;
if(3!==j&&8!==j&&2!==j){return"undefined"==typeof h.getAttribute?bv.prop(h,g,m):(1===j&&bv.isXMLDoc(h)||(k=bv.attrHooks[g.toLowerCase()]||(bv.expr.match.bool.test(g)?aK:void 0)),void 0!==m?null===m?void bv.removeAttr(h,g):k&&"set" in k&&void 0!==(l=k.set(h,m,g))?l:(h.setAttribute(g,m+""),m):k&&"get" in k&&null!==(l=k.get(h,g))?l:(l=bv.find.attr(h,g),null==l?void 0:l))
}},attrHooks:{type:{set:function(e,d){if(!bz.radioValue&&"radio"===d&&bv.nodeName(e,"input")){var f=e.value;
return e.setAttribute("type",d),f&&(e.value=f),d
}}}},removeAttr:function(g,f){var k,j=0,h=f&&f.match(cd);
if(h&&1===g.nodeType){while(k=h[j++]){g.removeAttribute(k)
}}}}),aK={set:function(e,d,f){return d===!1?bv.removeAttr(e,f):e.setAttribute(f,f),f
}},bv.each(bv.expr.match.bool.source.match(/\w+/g),function(e,d){var f=aC[d]||bv.find.attr;
aC[d]=function(h,c,m){var l,k,j=c.toLowerCase();
return m||(k=aC[j],aC[j]=l,l=null!=f(h,c,m)?j:null,aC[j]=k),l
}
});
var au=/^(?:input|select|textarea|button)$/i,al=/^(?:a|area)$/i;
bv.fn.extend({prop:function(d,c){return b2(this,bv.prop,d,c,arguments.length>1)
},removeProp:function(b){return this.each(function(){delete this[bv.propFix[b]||b]
})
}}),bv.extend({prop:function(h,g,m){var l,k,j=h.nodeType;
if(3!==j&&8!==j&&2!==j){return 1===j&&bv.isXMLDoc(h)||(g=bv.propFix[g]||g,k=bv.propHooks[g]),void 0!==m?k&&"set" in k&&void 0!==(l=k.set(h,m,g))?l:h[g]=m:k&&"get" in k&&null!==(l=k.get(h,g))?l:h[g]
}},propHooks:{tabIndex:{get:function(d){var c=bv.find.attr(d,"tabindex");
return c?parseInt(c,10):au.test(d.nodeName)||al.test(d.nodeName)&&d.href?0:-1
}}},propFix:{"for":"htmlFor","class":"className"}}),bz.optSelected||(bv.propHooks.selected={get:function(d){var c=d.parentNode;
return c&&c.parentNode&&c.parentNode.selectedIndex,null
},set:function(d){var c=d.parentNode;
c&&(c.selectedIndex,c.parentNode&&c.parentNode.selectedIndex)
}}),bv.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){bv.propFix[this.toLowerCase()]=this
});
var ac=/[\t\r\n\f]/g;
function cE(b){return b.getAttribute&&b.getAttribute("class")||""
}bv.fn.extend({addClass:function(s){var r,q,o,n,m,l,k,j=0;
if(bv.isFunction(s)){return this.each(function(a){bv(this).addClass(s.call(this,a,cE(this)))
})
}if("string"==typeof s&&s){r=s.match(cd)||[];
while(q=this[j++]){if(n=cE(q),o=1===q.nodeType&&(" "+n+" ").replace(ac," ")){l=0;
while(m=r[l++]){o.indexOf(" "+m+" ")<0&&(o+=m+" ")
}k=bv.trim(o),n!==k&&q.setAttribute("class",k)
}}}return this
},removeClass:function(s){var r,q,o,n,m,l,k,j=0;
if(bv.isFunction(s)){return this.each(function(a){bv(this).removeClass(s.call(this,a,cE(this)))
})
}if(!arguments.length){return this.attr("class","")
}if("string"==typeof s&&s){r=s.match(cd)||[];
while(q=this[j++]){if(n=cE(q),o=1===q.nodeType&&(" "+n+" ").replace(ac," ")){l=0;
while(m=r[l++]){while(o.indexOf(" "+m+" ")>-1){o=o.replace(" "+m+" "," ")
}}k=bv.trim(o),n!==k&&q.setAttribute("class",k)
}}}return this
},toggleClass:function(e,d){var f=typeof e;
return"boolean"==typeof d&&"string"===f?d?this.addClass(e):this.removeClass(e):bv.isFunction(e)?this.each(function(a){bv(this).toggleClass(e.call(this,a,cE(this),d),d)
}):this.each(function(){var a,h,g,c;
if("string"===f){h=0,g=bv(this),c=e.match(cd)||[];
while(a=c[h++]){g.hasClass(a)?g.removeClass(a):g.addClass(a)
}}else{void 0!==e&&"boolean"!==f||(a=cE(this),a&&bZ.set(this,"__className__",a),this.setAttribute&&this.setAttribute("class",a||e===!1?"":bZ.get(this,"__className__")||""))
}})
},hasClass:function(f){var e,h,g=0;
e=" "+f+" ";
while(h=this[g++]){if(1===h.nodeType&&(" "+cE(h)+" ").replace(ac," ").indexOf(e)>-1){return !0
}}return !1
}});
var ct=/\r/g,bT=/[\x20\t\r\n\f]+/g;
bv.fn.extend({val:function(g){var f,k,j,h=this[0];
if(arguments.length){return j=bv.isFunction(g),this.each(function(b){var a;
1===this.nodeType&&(a=j?g.call(this,b,bv(this).val()):g,null==a?a="":"number"==typeof a?a+="":bv.isArray(a)&&(a=bv.map(a,function(c){return null==c?"":c+""
})),f=bv.valHooks[this.type]||bv.valHooks[this.nodeName.toLowerCase()],f&&"set" in f&&void 0!==f.set(this,a,"value")||(this.value=a))
})
}if(h){return f=bv.valHooks[h.type]||bv.valHooks[h.nodeName.toLowerCase()],f&&"get" in f&&void 0!==(k=f.get(h,"value"))?k:(k=h.value,"string"==typeof k?k.replace(ct,""):null==k?"":k)
}}}),bv.extend({valHooks:{option:{get:function(d){var c=bv.find.attr(d,"value");
return null!=c?c:bv.trim(bv.text(d)).replace(bT," ")
}},select:{get:function(s){for(var r,q,o=s.options,n=s.selectedIndex,m="select-one"===s.type,l=m?null:[],k=m?n+1:o.length,j=n<0?k:m?n:0;
j<k;
j++){if(q=o[j],(q.selected||j===n)&&!q.disabled&&(!q.parentNode.disabled||!bv.nodeName(q.parentNode,"optgroup"))){if(r=bv(q).val(),m){return r
}l.push(r)
}}return l
},set:function(j,h){var o,n,m=j.options,l=bv.makeArray(h),k=m.length;
while(k--){n=m[k],(n.selected=bv.inArray(bv.valHooks.option.get(n),l)>-1)&&(o=!0)
}return o||(j.selectedIndex=-1),l
}}}}),bv.each(["radio","checkbox"],function(){bv.valHooks[this]={set:function(d,c){if(bv.isArray(c)){return d.checked=bv.inArray(bv(d).val(),c)>-1
}}},bz.checkOn||(bv.valHooks[this].get=function(b){return null===b.getAttribute("value")?"on":b.value
})
});
var bl=/^(?:focusinfocus|focusoutblur)$/;
bv.extend(bv.event,{trigger:function(C,B,A,z){var y,x,w,v,u,s,r,l=[A||bM],d=bC.call(C,"type")?C.type:C,a=bC.call(C,"namespace")?C.namespace.split("."):[];
if(x=w=A=A||bM,3!==A.nodeType&&8!==A.nodeType&&!bl.test(d+bv.event.triggered)&&(d.indexOf(".")>-1&&(a=d.split("."),d=a.shift(),a.sort()),u=d.indexOf(":")<0&&"on"+d,C=C[bv.expando]?C:new bv.Event(d,"object"==typeof C&&C),C.isTrigger=z?2:3,C.namespace=a.join("."),C.rnamespace=C.namespace?new RegExp("(^|\\.)"+a.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,C.result=void 0,C.target||(C.target=A),B=null==B?[C]:bv.makeArray(B,[C]),r=bv.event.special[d]||{},z||!r.trigger||r.trigger.apply(A,B)!==!1)){if(!z&&!r.noBubble&&!bv.isWindow(A)){for(v=r.delegateType||d,bl.test(v+d)||(x=x.parentNode);
x;
x=x.parentNode){l.push(x),w=x
}w===(A.ownerDocument||bM)&&l.push(w.defaultView||w.parentWindow||bP)
}y=0;
while((x=l[y++])&&!C.isPropagationStopped()){C.type=y>1?v:r.bindType||d,s=(bZ.get(x,"events")||{})[C.type]&&bZ.get(x,"handle"),s&&s.apply(x,B),s=u&&x[u],s&&s.apply&&b1(x)&&(C.result=s.apply(x,B),C.result===!1&&C.preventDefault())
}return C.type=d,z||C.isDefaultPrevented()||r._default&&r._default.apply(l.pop(),B)!==!1||!b1(A)||u&&bv.isFunction(A[d])&&!bv.isWindow(A)&&(w=A[u],w&&(A[u]=null),bv.event.triggered=d,A[d](),bv.event.triggered=void 0,w&&(A[u]=w)),C.result
}},simulate:function(f,e,h){var g=bv.extend(new bv.Event,h,{type:f,isSimulated:!0});
bv.event.trigger(g,null,e)
}}),bv.fn.extend({trigger:function(d,c){return this.each(function(){bv.event.trigger(d,c,this)
})
},triggerHandler:function(e,d){var f=this[0];
if(f){return bv.event.trigger(e,d,f,!0)
}}}),bv.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(d,c){bv.fn[c]=function(b,e){return arguments.length>0?this.on(c,null,b,e):this.trigger(c)
}
}),bv.fn.extend({hover:function(d,c){return this.mouseenter(d).mouseleave(c||d)
}}),bz.focusin="onfocusin" in bP,bz.focusin||bv.each({focus:"focusin",blur:"focusout"},function(e,d){var f=function(b){bv.event.simulate(d,b.target,bv.event.fix(b))
};
bv.event.special[d]={setup:function(){var b=this.ownerDocument||this,a=bZ.access(b,d);
a||b.addEventListener(e,f,!0),bZ.access(b,d,(a||0)+1)
},teardown:function(){var b=this.ownerDocument||this,a=bZ.access(b,d)-1;
a?bZ.access(b,d,a):(b.removeEventListener(e,f,!0),bZ.remove(b,d))
}}
});
var be=bP.location,a5=bv.now(),aW=/\?/;
bv.parseXML=function(a){var f;
if(!a||"string"!=typeof a){return null
}try{f=(new bP.DOMParser).parseFromString(a,"text/xml")
}catch(e){f=void 0
}return f&&!f.getElementsByTagName("parsererror").length||bv.error("Invalid XML: "+a),f
};
var aO=/\[\]$/,aG=/\r?\n/g,ay=/^(?:submit|button|image|reset|file)$/i,ap=/^(?:input|select|textarea|keygen)/i;
function ag(g,f,k,j){var h;
if(bv.isArray(f)){bv.each(f,function(a,c){k||aO.test(g)?j(g,c):ag(g+"["+("object"==typeof c&&null!=c?a:"")+"]",c,k,j)
})
}else{if(k||"object"!==bv.type(f)){j(g,f)
}else{for(h in f){ag(g+"["+h+"]",f[h],k,j)
}}}}bv.param=function(g,f){var k,j=[],h=function(e,d){var l=bv.isFunction(d)?d():d;
j[j.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==l?"":l)
};
if(bv.isArray(g)||g.jquery&&!bv.isPlainObject(g)){bv.each(g,function(){h(this.name,this.value)
})
}else{for(k in g){ag(k,g[k],f,h)
}}return j.join("&")
},bv.fn.extend({serialize:function(){return bv.param(this.serializeArray())
},serializeArray:function(){return this.map(function(){var b=bv.prop(this,"elements");
return b?bv.makeArray(b):this
}).filter(function(){var b=this.type;
return this.name&&!bv(this).is(":disabled")&&ap.test(this.nodeName)&&!ay.test(b)&&(this.checked||!aL.test(b))
}).map(function(e,d){var f=bv(this).val();
return null==f?null:bv.isArray(f)?bv.map(f,function(b){return{name:d.name,value:b.replace(aG,"\r\n")}
}):{name:d.name,value:f.replace(aG,"\r\n")}
}).get()
}});
var cI=/%20/g,cx=/#.*$/,aZ=/([?&])_=[^&]*/,aQ=/^(.*?):[ \t]*([^\r\n]*)$/gm,aI=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,aA=/^(?:GET|HEAD)$/,ar=/^\/\//,aj={},cK={},cC="*/".concat("*"),cr=bM.createElement("a");
cr.href=be.href;
function bR(b){return function(a,k){"string"!=typeof a&&(k=a,a="*");
var j,h=0,g=a.toLowerCase().match(cd)||[];
if(bv.isFunction(k)){while(j=g[h++]){"+"===j[0]?(j=j.slice(1)||"*",(b[j]=b[j]||[]).unshift(k)):(b[j]=b[j]||[]).push(k)
}}}
}function bj(j,h,o,n){var m={},l=j===cK;
function k(b){var a;
return m[b]=!0,bv.each(j[b]||[],function(c,e){var d=e(h,o,n);
return"string"!=typeof d||l||m[d]?l?!(a=d):void 0:(h.dataTypes.unshift(d),k(d),!1)
}),a
}return k(h.dataTypes[0])||!m["*"]&&k("*")
}function bc(g,f){var k,j,h=bv.ajaxSettings.flatOptions||{};
for(k in f){void 0!==f[k]&&((h[k]?g:j||(j={}))[k]=f[k])
}return j&&bv.extend(!0,g,j),g
}function a3(s,r,q){var o,n,m,l,k=s.contents,j=s.dataTypes;
while("*"===j[0]){j.shift(),void 0===o&&(o=s.mimeType||r.getResponseHeader("Content-Type"))
}if(o){for(n in k){if(k[n]&&k[n].test(o)){j.unshift(n);
break
}}}if(j[0] in q){m=j[0]
}else{for(n in q){if(!j[0]||s.converters[n+" "+j[0]]){m=n;
break
}l||(l=n)
}m=m||l
}if(m){return m!==j[0]&&j.unshift(m),q[m]
}}function aU(z,y,x,w){var v,u,s,r,q,o={},n=z.dataTypes.slice();
if(n[1]){for(s in z.converters){o[s.toLowerCase()]=z.converters[s]
}}u=n.shift();
while(u){if(z.responseFields[u]&&(x[z.responseFields[u]]=y),!q&&w&&z.dataFilter&&(y=z.dataFilter(y,z.dataType)),q=u,u=n.shift()){if("*"===u){u=q
}else{if("*"!==q&&q!==u){if(s=o[q+" "+u]||o["* "+u],!s){for(v in o){if(r=v.split(" "),r[1]===u&&(s=o[q+" "+r[0]]||o["* "+r[0]])){s===!0?s=o[v]:o[v]!==!0&&(u=r[0],n.unshift(r[1]));
break
}}}if(s!==!0){if(s&&z["throws"]){y=s(y)
}else{try{y=s(y)
}catch(m){return{state:"parsererror",error:s?m:"No conversion from "+q+" to "+u}
}}}}}}}return{state:"success",data:y}
}bv.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:be.href,type:"GET",isLocal:aI.test(be.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":cC,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":bv.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(d,c){return c?bc(bc(d,bv.ajaxSettings),c):bc(bv.ajaxSettings,d)
},ajaxPrefilter:bR(aj),ajaxTransport:bR(cK),ajax:function(V,U){"object"==typeof V&&(U=V,V=void 0),U=U||{};
var T,S,R,Q,P,O,N,M,L,K,J=bv.ajaxSetup({},U),I=J.context||J,G=J.context&&(I.nodeType||I.jquery)?bv(I):bv.event,F=bv.Deferred(),E=bv.Callbacks("once memory"),D=J.statusCode||{},C={},B={},r="canceled",d={readyState:0,getResponseHeader:function(e){var c;
if(N){if(!Q){Q={};
while(c=aQ.exec(R)){Q[c[1].toLowerCase()]=c[2]
}}c=Q[e.toLowerCase()]
}return null==c?null:c
},getAllResponseHeaders:function(){return N?R:null
},setRequestHeader:function(e,c){return null==N&&(e=B[e.toLowerCase()]=B[e.toLowerCase()]||e,C[e]=c),this
},overrideMimeType:function(b){return null==N&&(J.mimeType=b),this
},statusCode:function(e){var c;
if(e){if(N){d.always(e[d.status])
}else{for(c in e){D[c]=[D[c],e[c]]
}}}return this
},abort:function(e){var c=e||r;
return T&&T.abort(c),H(0,c),this
}};
if(F.promise(d),J.url=((V||J.url||be.href)+"").replace(ar,be.protocol+"//"),J.type=U.method||U.type||J.method||J.type,J.dataTypes=(J.dataType||"*").toLowerCase().match(cd)||[""],null==J.crossDomain){O=bM.createElement("a");
try{O.href=J.url,O.href=O.href,J.crossDomain=cr.protocol+"//"+cr.host!=O.protocol+"//"+O.host
}catch(a){J.crossDomain=!0
}}if(J.data&&J.processData&&"string"!=typeof J.data&&(J.data=bv.param(J.data,J.traditional)),bj(aj,J,U,d),N){return d
}M=bv.event&&J.global,M&&0===bv.active++&&bv.event.trigger("ajaxStart"),J.type=J.type.toUpperCase(),J.hasContent=!aA.test(J.type),S=J.url.replace(cx,""),J.hasContent?J.data&&J.processData&&0===(J.contentType||"").indexOf("application/x-www-form-urlencoded")&&(J.data=J.data.replace(cI,"+")):(K=J.url.slice(S.length),J.data&&(S+=(aW.test(S)?"&":"?")+J.data,delete J.data),J.cache===!1&&(S=S.replace(aZ,""),K=(aW.test(S)?"&":"?")+"_="+a5+++K),J.url=S+K),J.ifModified&&(bv.lastModified[S]&&d.setRequestHeader("If-Modified-Since",bv.lastModified[S]),bv.etag[S]&&d.setRequestHeader("If-None-Match",bv.etag[S])),(J.data&&J.hasContent&&J.contentType!==!1||U.contentType)&&d.setRequestHeader("Content-Type",J.contentType),d.setRequestHeader("Accept",J.dataTypes[0]&&J.accepts[J.dataTypes[0]]?J.accepts[J.dataTypes[0]]+("*"!==J.dataTypes[0]?", "+cC+"; q=0.01":""):J.accepts["*"]);
for(L in J.headers){d.setRequestHeader(L,J.headers[L])
}if(J.beforeSend&&(J.beforeSend.call(I,d,J)===!1||N)){return d.abort()
}if(r="abort",E.add(J.complete),d.done(J.success),d.fail(J.error),T=bj(cK,J,U,d)){if(d.readyState=1,M&&G.trigger("ajaxSend",[d,J]),N){return d
}J.async&&J.timeout>0&&(P=bP.setTimeout(function(){d.abort("timeout")
},J.timeout));
try{N=!1,T.send(C,H)
}catch(a){if(N){throw a
}H(-1,a)
}}else{H(-1,"No Transport")
}function H(q,o,l,k){var g,f,e,y,u,s=o;
N||(N=!0,P&&bP.clearTimeout(P),T=void 0,R=k||"",d.readyState=q>0?4:0,g=q>=200&&q<300||304===q,l&&(y=a3(J,d,l)),y=aU(J,y,d,g),g?(J.ifModified&&(u=d.getResponseHeader("Last-Modified"),u&&(bv.lastModified[S]=u),u=d.getResponseHeader("etag"),u&&(bv.etag[S]=u)),204===q||"HEAD"===J.type?s="nocontent":304===q?s="notmodified":(s=y.state,f=y.data,e=y.error,g=!e)):(e=s,!q&&s||(s="error",q<0&&(q=0))),d.status=q,d.statusText=(o||s)+"",g?F.resolveWith(I,[f,s,d]):F.rejectWith(I,[d,s,e]),d.statusCode(D),D=void 0,M&&G.trigger(g?"ajaxSuccess":"ajaxError",[d,J,g?f:e]),E.fireWith(I,[d,s]),M&&(G.trigger("ajaxComplete",[d,J]),--bv.active||bv.event.trigger("ajaxStop")))
}return d
},getJSON:function(e,d,f){return bv.get(e,d,f,"json")
},getScript:function(d,c){return bv.get(d,void 0,c,"script")
}}),bv.each(["get","post"],function(d,c){bv[c]=function(b,h,g,f){return bv.isFunction(h)&&(f=f||g,g=h,h=void 0),bv.ajax(bv.extend({url:b,type:c,dataType:f,data:h,success:g},bv.isPlainObject(b)&&b))
}
}),bv._evalUrl=function(b){return bv.ajax({url:b,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})
},bv.fn.extend({wrapAll:function(d){var c;
return this[0]&&(bv.isFunction(d)&&(d=d.call(this[0])),c=bv(d,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&c.insertBefore(this[0]),c.map(function(){var b=this;
while(b.firstElementChild){b=b.firstElementChild
}return b
}).append(this)),this
},wrapInner:function(b){return bv.isFunction(b)?this.each(function(a){bv(this).wrapInner(b.call(this,a))
}):this.each(function(){var a=bv(this),d=a.contents();
d.length?d.wrapAll(b):a.append(b)
})
},wrap:function(d){var c=bv.isFunction(d);
return this.each(function(a){bv(this).wrapAll(c?d.call(this,a):d)
})
},unwrap:function(b){return this.parent(b).not("body").each(function(){bv(this).replaceWith(this.childNodes)
}),this
}}),bv.expr.pseudos.hidden=function(b){return !bv.expr.pseudos.visible(b)
},bv.expr.pseudos.visible=function(b){return !!(b.offsetWidth||b.offsetHeight||b.getClientRects().length)
},bv.ajaxSettings.xhr=function(){try{return new bP.XMLHttpRequest
}catch(a){}};
var aM={0:200,1223:204},aE=bv.ajaxSettings.xhr();
bz.cors=!!aE&&"withCredentials" in aE,bz.ajax=aE=!!aE,bv.ajaxTransport(function(a){var f,e;
if(bz.cors||aE&&!a.crossDomain){return{send:function(k,j){var d,c=a.xhr();
if(c.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields){for(d in a.xhrFields){c[d]=a.xhrFields[d]
}}a.mimeType&&c.overrideMimeType&&c.overrideMimeType(a.mimeType),a.crossDomain||k["X-Requested-With"]||(k["X-Requested-With"]="XMLHttpRequest");
for(d in k){c.setRequestHeader(d,k[d])
}f=function(g){return function(){f&&(f=e=c.onload=c.onerror=c.onabort=c.onreadystatechange=null,"abort"===g?c.abort():"error"===g?"number"!=typeof c.status?j(0,"error"):j(c.status,c.statusText):j(aM[c.status]||c.status,c.statusText,"text"!==(c.responseType||"text")||"string"!=typeof c.responseText?{binary:c.response}:{text:c.responseText},c.getAllResponseHeaders()))
}
},c.onload=f(),e=c.onerror=f("error"),void 0!==c.onabort?c.onabort=e:c.onreadystatechange=function(){4===c.readyState&&bP.setTimeout(function(){f&&e()
})
},f=f("abort");
try{c.send(a.hasContent&&a.data||null)
}catch(b){if(f){throw b
}}},abort:function(){f&&f()
}}
}}),bv.ajaxPrefilter(function(b){b.crossDomain&&(b.contents.script=!1)
}),bv.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(b){return bv.globalEval(b),b
}}}),bv.ajaxPrefilter("script",function(b){void 0===b.cache&&(b.cache=!1),b.crossDomain&&(b.type="GET")
}),bv.ajaxTransport("script",function(e){if(e.crossDomain){var d,f;
return{send:function(b,a){d=bv("<script>").prop({charset:e.scriptCharset,src:e.url}).on("load error",f=function(c){d.remove(),f=null,c&&a("error"===c.type?404:200,c.type)
}),bM.head.appendChild(d[0])
},abort:function(){f&&f()
}}
}});
var aw=[],an=/(=)\?(?=&|$)|\?\?/;
bv.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var b=aw.pop()||bv.expando+"_"+a5++;
return this[b]=!0,b
}}),bv.ajaxPrefilter("json jsonp",function(a,o,n){var m,l,k,j=a.jsonp!==!1&&(an.test(a.url)?"url":"string"==typeof a.data&&0===(a.contentType||"").indexOf("application/x-www-form-urlencoded")&&an.test(a.data)&&"data");
if(j||"jsonp"===a.dataTypes[0]){return m=a.jsonpCallback=bv.isFunction(a.jsonpCallback)?a.jsonpCallback():a.jsonpCallback,j?a[j]=a[j].replace(an,"$1"+m):a.jsonp!==!1&&(a.url+=(aW.test(a.url)?"&":"?")+a.jsonp+"="+m),a.converters["script json"]=function(){return k||bv.error(m+" was not called"),k[0]
},a.dataTypes[0]="json",l=bP[m],bP[m]=function(){k=arguments
},n.always(function(){void 0===l?bv(bP).removeProp(m):bP[m]=l,a[m]&&(a.jsonpCallback=o.jsonpCallback,aw.push(m)),k&&bv.isFunction(l)&&l(k[0]),k=l=void 0
}),"script"
}}),bz.createHTMLDocument=function(){var b=bM.implementation.createHTMLDocument("").body;
return b.innerHTML="<form></form><form></form>",2===b.childNodes.length
}(),bv.parseHTML=function(h,d,m){if("string"!=typeof h){return[]
}"boolean"==typeof d&&(m=d,d=!1);
var l,k,j;
return d||(bz.createHTMLDocument?(d=bM.implementation.createHTMLDocument(""),l=d.createElement("base"),l.href=bM.location.href,d.head.appendChild(l)):d=bM),k=co.exec(h),j=!m&&[],k?[d.createElement(k[1])]:(k=bU([h],d,j),j&&j.length&&bv(j).remove(),bv.merge([],k.childNodes))
},bv.fn.load=function(k,j,r){var q,o,n,m=this,l=k.indexOf(" ");
return l>-1&&(q=bv.trim(k.slice(l)),k=k.slice(0,l)),bv.isFunction(j)?(r=j,j=void 0):j&&"object"==typeof j&&(o="POST"),m.length>0&&bv.ajax({url:k,type:o||"GET",dataType:"html",data:j}).done(function(b){n=arguments,m.html(q?bv("<div>").append(bv.parseHTML(b)).find(q):b)
}).always(r&&function(d,c){m.each(function(){r.apply(this,n||[d.responseText,c,d])
})
}),this
},bv.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(d,c){bv.fn[c]=function(b){return this.on(c,b)
}
}),bv.expr.pseudos.animated=function(b){return bv.grep(bv.timers,function(a){return b===a.elem
}).length
};
function ae(b){return bv.isWindow(b)?b:9===b.nodeType&&b.defaultView
}bv.offset={setOffset:function(B,A,z){var y,x,w,v,u,s,r,q=bv.css(B,"position"),o=bv(B),n={};
"static"===q&&(B.style.position="relative"),u=o.offset(),w=bv.css(B,"top"),s=bv.css(B,"left"),r=("absolute"===q||"fixed"===q)&&(w+s).indexOf("auto")>-1,r?(y=o.position(),v=y.top,x=y.left):(v=parseFloat(w)||0,x=parseFloat(s)||0),bv.isFunction(A)&&(A=A.call(B,z,bv.extend({},u))),null!=A.top&&(n.top=A.top-u.top+v),null!=A.left&&(n.left=A.left-u.left+x),"using" in A?A.using.call(B,n):o.css(n)
}},bv.fn.extend({offset:function(h){if(arguments.length){return void 0===h?this:this.each(function(a){bv.offset.setOffset(this,h,a)
})
}var g,m,l,k,j=this[0];
if(j){return j.getClientRects().length?(l=j.getBoundingClientRect(),l.width||l.height?(k=j.ownerDocument,m=ae(k),g=k.documentElement,{top:l.top+m.pageYOffset-g.clientTop,left:l.left+m.pageXOffset-g.clientLeft}):l):{top:0,left:0}
}},position:function(){if(this[0]){var f,e,h=this[0],g={top:0,left:0};
return"fixed"===bv.css(h,"position")?e=h.getBoundingClientRect():(f=this.offsetParent(),e=this.offset(),bv.nodeName(f[0],"html")||(g=f.offset()),g={top:g.top+bv.css(f[0],"borderTopWidth",!0),left:g.left+bv.css(f[0],"borderLeftWidth",!0)}),{top:e.top-g.top-bv.css(h,"marginTop",!0),left:e.left-g.left-bv.css(h,"marginLeft",!0)}
}},offsetParent:function(){return this.map(function(){var b=this.offsetParent;
while(b&&"static"===bv.css(b,"position")){b=b.offsetParent
}return b||bn
})
}}),bv.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,d){var f="pageYOffset"===d;
bv.fn[e]=function(a){return b2(this,function(b,h,g){var c=ae(b);
return void 0===g?c?c[d]:b[h]:void (c?c.scrollTo(f?c.pageXOffset:g,f?g:c.pageYOffset):b[h]=g)
},e,a,arguments.length)
}
}),bv.each(["top","left"],function(d,c){bv.cssHooks[c]=aV(bz.pixelPosition,function(b,e){if(e){return e=a4(b,c),bk.test(e)?bv(b).position()[c]+"px":e
}})
}),bv.each({Height:"height",Width:"width"},function(d,c){bv.each({padding:"inner"+d,content:c,"":"outer"+d},function(b,a){bv.fn[a]=function(m,l){var k=arguments.length&&(b||"boolean"!=typeof m),j=b||(m===!0||l===!0?"margin":"border");
return b2(this,function(g,o,n){var h;
return bv.isWindow(g)?0===a.indexOf("outer")?g["inner"+d]:g.document.documentElement["client"+d]:9===g.nodeType?(h=g.documentElement,Math.max(g.body["scroll"+d],h["scroll"+d],g.body["offset"+d],h["offset"+d],h["client"+d])):void 0===n?bv.css(g,o,j):bv.style(g,o,n,j)
},c,k?m:void 0,k)
}
})
}),bv.fn.extend({bind:function(e,d,f){return this.on(e,null,d,f)
},unbind:function(d,c){return this.off(d,null,c)
},delegate:function(f,e,h,g){return this.on(e,f,h,g)
},undelegate:function(e,d,f){return 1===arguments.length?this.off(e,"**"):this.off(d,e||"**",f)
}}),bv.parseJSON=JSON.parse,"function"==typeof define&&define.amd&&define("jquery",[],function(){return bv
});
var cG=bP.jQuery,cv=bP.$;
return bv.noConflict=function(a){return bP.$===bv&&(bP.$=cv),a&&bP.jQuery===bv&&(bP.jQuery=cG),bv
},bO||(bP.jQuery=bP.$=bv),bv
});
!function(g){var f=function(u,r){if(document.querySelectorAll){r=document.querySelectorAll(u)
}else{var v=document,o=v.styleSheets[0]||v.createStyleSheet();
o.addRule(u,"f:b");
for(var n=v.all,m=0,w=[],s=n.length;
m<s;
m++){n[m].currentStyle.f&&w.push(n[m])
}o.removeRule(0);
r=w
}return r
},c=function(l,m){g.addEventListener?this.addEventListener(l,m,false):(g.attachEvent)?this.attachEvent("on"+l,m):this["on"+l]=m
},a=function(m,l){return Object.prototype.hasOwnProperty.call(m,l)
};
function b(n,m){var l=new Image(),o=n.getAttribute("data-src");
l.onload=function(){if(!!n.parent){n.parent.replaceChild(l,n)
}else{n.src=o
}m?m():null
};
l.src=o
}function k(l){var m=l.getBoundingClientRect();
return(m.top>=0&&m.left>=0&&m.top<=(g.innerHeight||document.documentElement.clientHeight))
}var j=new Array(),h=f("img.lazy"),e=function(){for(var l=0;
l<j.length;
l++){if(k(j[l])){b(j[l],function(){j.splice(l,l)
})
}}};
for(var d=0;
d<h.length;
d++){j.push(h[d])
}e();
c("scroll",e)
}(this);
$(document).ready(function(){$('div[data-value*="mymenu0_tabs"]').attr("aria-selected","true");
$('a[data-value*="mymenu0_tabs"]').attr("aria-selected","true")
});
$(document).ready(function(a){$(".comment > p").contents().unwrap();
deviceCheck();
IpadViewChange();
setGridsHeight()
});
$(document).on("click change keypress",function(){setGridsHeight()
});
$(window).on("resize",function(){setGridsHeight();
IpadViewChange()
});
var urlParam=location.pathname.replace(".html","").trim();
$.getJSON("/gemservices/getLoginRedirectUrl.json?urlParam="+urlParam,function(a){var b=a.redirectUrl;
if(a&&b.length>0){$("#gnav_login").attr("href",b)
}});
function IpadViewChange(){var a=$(window).width();
if($(".card-component_container").is(":visible")){if(a>767&&a<1025){$(".card-component_container").find(".dls-card-tilt").removeClass("dls-card-lg").addClass("dls-card-md")
}else{$(".card-component_container").find(".dls-card-tilt").removeClass("dls-card-md").addClass("dls-card-lg")
}}}function setGridsHeight(){var d=document.getElementsByClassName("grid");
var e;
for(e=0;
e<d.length;
e++){var f=d[e].querySelectorAll("div.showcase-card");
var c=d[e].querySelectorAll("div.actionable-card");
var h=d[e].querySelectorAll("div.offer");
var g=d[e].querySelectorAll("div.roundedcorner-card");
if(f.length>1){equalheight(f)
}else{if(c.length>1){var b=d[e].querySelectorAll("div.actionable-card h4");
var a=d[e].querySelectorAll("div.actionable-card p");
equalheight(b);
equalheight(a)
}else{if(h.length>1){var l=d[e].querySelectorAll("div.offer-header");
var k=d[e].querySelectorAll("div.offer-desc");
var j=d[e].querySelectorAll("div.offer");
equalheight(l);
equalheight(k);
equalheight(j)
}else{if(g.length>1){equalheight(g)
}}}}}}equalheight=function(a){var b=0;
var c=$(window).width();
$(a).height("auto");
$(a).each(function(){if($(this).height()>b){b=$(this).height()
}});
if(c>667){$(a).height(b)
}else{if(c<=667){$(a).height("auto")
}}};
$(document).click(function(a){if(!$(a.target).closest(".open,.modal-content").length){$(".modal-content").hide();
$("body").find(".modal, .modal-content").removeClass("active")
}});
$(".open").on("click",function(a){a.preventDefault();
let uid=a.target.parentElement.id;
if(uid){uid="."+uid
}$(".modal"+uid+", .modal-content"+uid+"").addClass("active");
$(".modal-content"+uid+"").show()
});
$(".close-modal").on("click",function(){$(".modal-content").hide();
$(".modal, .modal-content").removeClass("active")
});
$(document).ready(function(){$(".multi-card-carousel").each(function(){var a=$(this);
if(a.find("li").length<4){a.find(".carousel-control").hide();
a.find(".carousel-indicators").hide()
}})
});
function checkCookie(){var a=document.cookie.indexOf("blueboxvalues");
var b=document.cookie.indexOf("amexsessioncookie");
if(a!=-1&&b!=-1){$(".loggedOut-State").hide();
$(".loggedIn-State").show()
}else{$(".loggedIn-State").hide();
$(".loggedOut-State").show()
}}function checkLoginWidget(){var a=document.cookie.indexOf("blueboxvalues");
var b=document.cookie.indexOf("amexsessioncookie");
if(a!=-1&&b!=-1){$(".login-wrapper").hide()
}else{$(".login-wrapper").show()
}if(!$(".login-wrapper").is(":visible")){$("div.hero").find(".hidden-md-down").removeClass("hidden-md-down").addClass("hero-content-temp")
}else{if($(".login-wrapper").is(":visible")){$("div.hero").find(".hero-content-temp").removeClass("hero-content-temp").addClass("hidden-md-down")
}}}$(document).ready(function(){$(".login-wrapper").hide();
checkCookie();
checkLoginWidget()
});
var moretext="Read More";
var lesstext="Read Less";
function deviceCheck(){$(".more").removeClass("comment").addClass("less-content");
$(".morecontent").show();
$(".morecontent").find(".morelink").html(moretext);
$(".morecontent").addClass("readMore")
}function expandtext(b){b.preventDefault();
var a=$(this).parent();
if(a.hasClass("readMore")){a.prev().removeClass("less-content").addClass("comment");
a.removeClass("readMore").addClass("readLess");
$(this).html(lesstext)
}else{a.removeClass("readLess").addClass("readMore");
a.prev().removeClass("comment").addClass("less-content");
$(this).html(moretext)
}}$(".morelink").on("click",expandtext);
function imageSectionHero(g,a,e,f){var h=a;
var d=e;
var c=f;
var b=$(window).width();
if((b<=767)&&c!=""){$(g).find(".breakPoint-selection").css("background-image","url("+c+")")
}else{if((b<=767)&&(c==""&&d!="")){$(g).find(".breakPoint-selection").css("background-image","url("+d+")")
}else{if((b<=767)&&(c==""&&d=="")){$(g).find(".breakPoint-selection").css("background-image","url("+h+")")
}else{if((b>767&&b<=1024)&&d!=""){$(g).find(".breakPoint-selection").css("background-image","url("+d+")")
}else{if((b>767&&b<=1024)&&d==""){$(g).find(".breakPoint-selection").css("background-image","url("+h+")")
}else{if(b>1024){$(g).find(".breakPoint-selection").css("background-image","url("+h+")")
}else{$(g).find(".breakPoint-selection").css("background-image","url("+h+")")
}}}}}}}$(document).ready(function(d){var a="";
var b="";
var c="";
$(".hero").each(function(){$(this).find("input:hidden").each(function(){if($(this).attr("id").toLowerCase()==="desktop-bg-reference"){a=$(this).val()
}else{if($(this).attr("id").toLowerCase()==="tablet-bg-reference"){b=$(this).val()
}else{if($(this).attr("id").toLowerCase()==="tablet-bg-reference"){imgmob$(this).val()
}}}});
if(a!=""||b!=""||c!=""){imageSectionHero(this,a,b,c)
}})
});
var res;
$(window).bind("resize",function(){if(res){clearTimeout(res)
}res=setTimeout(function(){imageSectionHero()
},100)
});
(function(){function k(v,s){v.prototype=ap(s.prototype);
v.prototype.constructor=v;
v.base=s.prototype
}function ap(v){function s(){}s.prototype=v;
return new s
}function aJ(y,s,v){"millisecond"===v?y.setMilliseconds(y.getMilliseconds()+1*s):"second"===v?y.setSeconds(y.getSeconds()+1*s):"minute"===v?y.setMinutes(y.getMinutes()+1*s):"hour"===v?y.setHours(y.getHours()+1*s):"day"===v?y.setDate(y.getDate()+1*s):"week"===v?y.setDate(y.getDate()+7*s):"month"===v?y.setMonth(y.getMonth()+1*s):"year"===v&&y.setFullYear(y.getFullYear()+1*s);
return y
}function j(y,s){var v=!1;
0>y&&(v=!0,y*=-1);
y=""+y;
for(s=s?s:1;
y.length<s;
){y="0"+y
}return v?"-"+y:y
}function ae(y){if(!y){return y
}y=y.replace(/^\s\s*/,"");
for(var s=/\s/,v=y.length;
s.test(y.charAt(--v));
){}return y.slice(0,v+1)
}function az(s){s.roundRect=function(Q,H,N,J,T,U,V,R){V&&(this.fillStyle=V);
R&&(this.strokeStyle=R);
"undefined"===typeof T&&(T=5);
this.lineWidth=U;
this.beginPath();
this.moveTo(Q+T,H);
this.lineTo(Q+N-T,H);
this.quadraticCurveTo(Q+N,H,Q+N,H+T);
this.lineTo(Q+N,H+J-T);
this.quadraticCurveTo(Q+N,H+J,Q+N-T,H+J);
this.lineTo(Q+T,H+J);
this.quadraticCurveTo(Q,H+J,Q,H+J-T);
this.lineTo(Q,H+T);
this.quadraticCurveTo(Q,H,Q+T,H);
this.closePath();
V&&this.fill();
R&&0<U&&this.stroke()
}
}function aH(v,s){return v-s
}function u(y){var s=((y&16711680)>>16).toString(16),v=((y&65280)>>8).toString(16);
y=((y&255)>>0).toString(16);
s=2>s.length?"0"+s:s;
v=2>v.length?"0"+v:v;
y=2>y.length?"0"+y:y;
return"#"+s+v+y
}function O(H,v){var y=this.length>>>0,F=Number(v)||0,F=0>F?Math.ceil(F):Math.floor(F);
for(0>F&&(F+=y);
F<y;
F++){if(F in this&&this[F]===H){return F
}}return -1
}function aB(s){return null===s||"undefined"===typeof s
}function ac(s){s.indexOf||(s.indexOf=O);
return s
}function a(s){if(n.fSDec){s[g("`eeDwdouMhrudods")](g("e`u`@ohl`uhnoHuds`uhnoDoe"),function(){n._fTWm&&n._fTWm(s)
})
}}function am(Q,F,H){H=H||"normal";
var N=Q+"_"+F+"_"+H,J=K[N];
if(isNaN(J)){try{Q="position:absolute; left:0px; top:-20000px; padding:0px;margin:0px;border:none;white-space:pre;line-height:normal;font-family:"+Q+"; font-size:"+F+"px; font-weight:"+H+";";
if(!af){var R=document.body;
af=document.createElement("span");
af.innerHTML="";
var T=document.createTextNode("Mpgyi");
af.appendChild(T);
R.appendChild(af)
}af.style.display="";
af.setAttribute("style",Q);
J=Math.round(af.offsetHeight);
af.style.display="none"
}catch(U){J=Math.ceil(1.1*F)
}J=Math.max(J,F);
K[N]=J
}return J
}function A(H,v){var y=[];
if(y={solid:[],shortDash:[3,1],shortDot:[1,1],shortDashDot:[3,1,1,1],shortDashDotDot:[3,1,1,1,1,1],dot:[1,2],dash:[4,2],dashDot:[4,2,1,2],longDash:[8,2],longDashDot:[8,2,1,2],longDashDotDot:[8,2,1,2,1,2]}[H||"solid"]){for(var F=0;
F<y.length;
F++){y[F]*=v
}}else{y=[]
}return y
}function D(H,s,y,F,J){F=F||[];
J=aB(J)?ar?{passive:!1,capture:!1}:!1:J;
F.push([H,s,y,J]);
return H.addEventListener?(H.addEventListener(s,y,J),y):H.attachEvent?(F=function(v){v=v||window.event;
v.preventDefault=v.preventDefault||function(){v.returnValue=!1
};
v.stopPropagation=v.stopPropagation||function(){v.cancelBubble=!0
};
y.call(H,v)
},H.attachEvent("on"+s,F),F):!1
}function S(y){if(y._menuButton){y.exportEnabled?ai(y._menuButton):q(y._menuButton)
}else{if(y.exportEnabled&&ax){var s=!1;
y._menuButton=document.createElement("button");
aC(y,y._menuButton,"menu");
y._toolBar.appendChild(y._menuButton);
D(y._menuButton,"touchstart",function(F){s=!0
},y.allDOMEventHandlers);
D(y._menuButton,"click",function(){"none"!==y._dropdownMenu.style.display||y._dropDownCloseTime&&500>=(new Date).getTime()-y._dropDownCloseTime.getTime()||(y._dropdownMenu.style.display="block",y._menuButton.blur(),y._dropdownMenu.focus())
},y.allDOMEventHandlers,!0);
D(y._menuButton,"mouseover",function(){s||(ay(y._menuButton,{backgroundColor:y.toolbar.backgroundColorOnHover,color:y.toolbar.fontColorOnHover}),0>=navigator.userAgent.search("MSIE")&&ay(y._menuButton.childNodes[0],{WebkitFilter:"invert(100%)",filter:"invert(100%)"}))
},y.allDOMEventHandlers,!0);
D(y._menuButton,"mouseout",function(){s||(ay(y._menuButton,{backgroundColor:y.toolbar.backgroundColor,color:y.toolbar.fontColor}),0>=navigator.userAgent.search("MSIE")&&ay(y._menuButton.childNodes[0],{WebkitFilter:"invert(0%)",filter:"invert(0%)"}))
},y.allDOMEventHandlers,!0)
}}if(!y._dropdownMenu&&y.exportEnabled&&ax){s=!1;
y._dropdownMenu=document.createElement("div");
y._dropdownMenu.setAttribute("tabindex",-1);
var v=-1!==y.theme.indexOf("dark")?"black":"#888888";
y._dropdownMenu.style.cssText="position: absolute; z-index: 1; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; cursor: pointer;right: 0px;top: 25px;min-width: 120px;outline: 0;font-size: 14px; font-family: Arial, Helvetica, sans-serif;padding: 5px 0px 5px 0px;text-align: left;line-height: 10px;background-color:"+y.toolbar.backgroundColor+";box-shadow: 2px 2px 10px "+v;
y._dropdownMenu.style.display="none";
y._toolBar.appendChild(y._dropdownMenu);
D(y._dropdownMenu,"blur",function(){q(y._dropdownMenu);
y._dropDownCloseTime=new Date
},y.allDOMEventHandlers,!0);
v=document.createElement("div");
v.style.cssText="padding: 12px 8px 12px 8px";
v.innerHTML=y._cultureInfo.printText;
v.style.backgroundColor=y.toolbar.backgroundColor;
v.style.color=y.toolbar.fontColor;
y._dropdownMenu.appendChild(v);
D(v,"touchstart",function(F){s=!0
},y.allDOMEventHandlers);
D(v,"mouseover",function(){s||(this.style.backgroundColor=y.toolbar.backgroundColorOnHover,this.style.color=y.toolbar.fontColorOnHover)
},y.allDOMEventHandlers,!0);
D(v,"mouseout",function(){s||(this.style.backgroundColor=y.toolbar.backgroundColor,this.style.color=y.toolbar.fontColor)
},y.allDOMEventHandlers,!0);
D(v,"click",function(){y.print();
q(y._dropdownMenu)
},y.allDOMEventHandlers,!0);
v=document.createElement("div");
v.style.cssText="padding: 12px 8px 12px 8px";
v.innerHTML=y._cultureInfo.saveJPGText;
v.style.backgroundColor=y.toolbar.backgroundColor;
v.style.color=y.toolbar.fontColor;
y._dropdownMenu.appendChild(v);
D(v,"touchstart",function(F){s=!0
},y.allDOMEventHandlers);
D(v,"mouseover",function(){s||(this.style.backgroundColor=y.toolbar.backgroundColorOnHover,this.style.color=y.toolbar.fontColorOnHover)
},y.allDOMEventHandlers,!0);
D(v,"mouseout",function(){s||(this.style.backgroundColor=y.toolbar.backgroundColor,this.style.color=y.toolbar.fontColor)
},y.allDOMEventHandlers,!0);
D(v,"click",function(){y.exportChart({format:"jpeg",fileName:y.exportFileName});
q(y._dropdownMenu)
},y.allDOMEventHandlers,!0);
v=document.createElement("div");
v.style.cssText="padding: 12px 8px 12px 8px";
v.innerHTML=y._cultureInfo.savePNGText;
v.style.backgroundColor=y.toolbar.backgroundColor;
v.style.color=y.toolbar.fontColor;
y._dropdownMenu.appendChild(v);
D(v,"touchstart",function(F){s=!0
},y.allDOMEventHandlers);
D(v,"mouseover",function(){s||(this.style.backgroundColor=y.toolbar.backgroundColorOnHover,this.style.color=y.toolbar.fontColorOnHover)
},y.allDOMEventHandlers,!0);
D(v,"mouseout",function(){s||(this.style.backgroundColor=y.toolbar.backgroundColor,this.style.color=y.toolbar.fontColor)
},y.allDOMEventHandlers,!0);
D(v,"click",function(){y.exportChart({format:"png",fileName:y.exportFileName});
q(y._dropdownMenu)
},y.allDOMEventHandlers,!0)
}}function aK(y,s,v){y*=W;
s*=W;
y=v.getImageData(y,s,2,2).data;
s=!0;
for(v=0;
4>v;
v++){if(y[v]!==y[v+4]|y[v]!==y[v+8]|y[v]!==y[v+12]){s=!1;
break
}}return s?y[0]<<16|y[1]<<8|y[2]:0
}function h(y,s,v){return y in s?s[y]:v[y]
}function z(H,v,y){if(ax&&an){var F=H.getContext("2d");
aG=F.webkitBackingStorePixelRatio||F.mozBackingStorePixelRatio||F.msBackingStorePixelRatio||F.oBackingStorePixelRatio||F.backingStorePixelRatio||1;
W=ak/aG;
H.width=v*W;
H.height=y*W;
ak!==aG&&(H.style.width=v+"px",H.style.height=y+"px",F.scale(W,W))
}else{H.width=v,H.height=y
}}function c(y){if(!at){var s=!1,v=!1;
"undefined"===typeof ab.Chart.creditHref?(y.creditHref=g("iuuqr;..b`ow`rkr/bnl."),y.creditText=g("B`ow`rKR/bnl")):(s=y.updateOption("creditText"),v=y.updateOption("creditHref"));
if(y.creditHref&&y.creditText){y._creditLink||(y._creditLink=document.createElement("a"),y._creditLink.setAttribute("class","canvasjs-chart-credit"),y._creditLink.setAttribute("title","JavaScript Charts"),y._creditLink.setAttribute("style","outline:none;margin:0px;position:absolute;right:2px;top:"+(y.height-14)+"px;color:dimgrey;text-decoration:none;font-size:11px;font-family: Calibri, Lucida Grande, Lucida Sans Unicode, Arial, sans-serif"),y._creditLink.setAttribute("tabIndex",-1),y._creditLink.setAttribute("target","_blank"));
if(0===y.renderCount||s||v){y._creditLink.setAttribute("href",y.creditHref),y._creditLink.innerHTML=y.creditText
}y._creditLink&&y.creditHref&&y.creditText?(y._creditLink.parentElement||y._canvasJSContainer.appendChild(y._creditLink),y._creditLink.style.top=y.height-14+"px"):y._creditLink.parentElement&&y._canvasJSContainer.removeChild(y._creditLink)
}}}function ad(y,s){aD&&(this.canvasCount|=0,window.console.log(++this.canvasCount));
var v=document.createElement("canvas");
v.setAttribute("class","canvasjs-chart-canvas");
z(v,y,s);
ax||"undefined"===typeof G_vmlCanvasManager||G_vmlCanvasManager.initElement(v);
return v
}function ay(y,s){for(var v in s){y.style[v]=s[v]
}}function aC(y,s,v){s.getAttribute("state")||(s.style.backgroundColor=y.toolbar.backgroundColor,s.style.color=y.toolbar.fontColor,s.style.border="none",ay(s,{WebkitUserSelect:"none",MozUserSelect:"none",msUserSelect:"none",userSelect:"none"}));
s.getAttribute("state")!==v&&(s.setAttribute("state",v),s.setAttribute("type","button"),ay(s,{padding:"5px 12px",cursor:"pointer","float":"left",width:"40px",height:"25px",outline:"0px",verticalAlign:"baseline",lineHeight:"0"}),s.setAttribute("title",y._cultureInfo[v+"Text"]),s.innerHTML="<img style='height:95%; pointer-events: none;' src='"+aa[v].image+"' alt='"+y._cultureInfo[v+"Text"]+"' />")
}function ai(){for(var v=null,s=0;
s<arguments.length;
s++){v=arguments[s],v.style&&(v.style.display="inline")
}}function q(){for(var v=null,s=0;
s<arguments.length;
s++){(v=arguments[s])&&v.style&&(v.style.display="none")
}}function C(N,y,F,J,H){if(null===N||"undefined"===typeof N){return"undefined"===typeof F?y:F
}N=parseFloat(N.toString())*(0<=N.toString().indexOf("%")?y/100:1);
"undefined"!==typeof J&&(N=Math.min(J,N),"undefined"!==typeof H&&(N=Math.max(H,N)));
return !isNaN(N)&&N<=y&&0<=N?N:"undefined"===typeof F?y:F
}function l(J,s,F,H,N){this._defaultsKey=J;
this._themeOptionsKey=s;
this._index=H;
this.parent=N;
this._eventListeners=[];
J={};
this.theme&&aB(this.parent)&&aB(s)&&aB(H)?J=aB(this.predefinedThemes[this.theme])?this.predefinedThemes.light1:this.predefinedThemes[this.theme]:this.parent&&(this.parent.themeOptions&&this.parent.themeOptions[s])&&(null===H?J=this.parent.themeOptions[s]:0<this.parent.themeOptions[s].length&&(H=Math.min(this.parent.themeOptions[s].length-1,H),J=this.parent.themeOptions[s][H]));
this.themeOptions=J;
this.options=F?F:{_isPlaceholder:!0};
this.setOptions(this.options,J)
}function o(N,y,F,J,H){"undefined"===typeof H&&(H=0);
this._padding=H;
this._x1=N;
this._y1=y;
this._x2=F;
this._y2=J;
this._rightOccupied=this._leftOccupied=this._bottomOccupied=this._topOccupied=this._padding
}function au(v,s){au.base.constructor.call(this,"TextBlock",null,s,null,null);
this.ctx=v;
this._isDirty=!0;
this._wrappedText=null;
this._initialize()
}function aI(v,s){aI.base.constructor.call(this,"Toolbar","toolbar",s,null,v);
this.chart=v;
this.canvas=v.canvas;
this.ctx=this.chart.ctx;
this.optionsName="toolbar"
}function aE(H,s){aE.base.constructor.call(this,"Title","title",s,null,H);
this.chart=H;
this.canvas=H.canvas;
this.ctx=this.chart.ctx;
this.optionsName="title";
if(aB(this.options.margin)&&H.options.subtitles){for(var y=H.options.subtitles,F=0;
F<y.length;
F++){if((aB(y[F].horizontalAlign)&&"center"===this.horizontalAlign||y[F].horizontalAlign===this.horizontalAlign)&&(aB(y[F].verticalAlign)&&"top"===this.verticalAlign||y[F].verticalAlign===this.verticalAlign)&&!y[F].dockInsidePlotArea===!this.dockInsidePlotArea){this.margin=0;
break
}}}"undefined"===typeof this.options.fontSize&&(this.fontSize=this.chart.getAutoFontSize(this.fontSize));
this.height=this.width=null;
this.bounds={x1:null,y1:null,x2:null,y2:null}
}function ag(y,s,v){ag.base.constructor.call(this,"Subtitle","subtitles",s,v,y);
this.chart=y;
this.canvas=y.canvas;
this.ctx=this.chart.ctx;
this.optionsName="subtitles";
this.isOptionsInArray=!0;
"undefined"===typeof this.options.fontSize&&(this.fontSize=this.chart.getAutoFontSize(this.fontSize));
this.height=this.width=null;
this.bounds={x1:null,y1:null,x2:null,y2:null}
}function al(){this.pool=[]
}function w(v){var s;
v&&aF[v]&&(s=aF[v]);
w.base.constructor.call(this,"CultureInfo",null,s,null,null)
}var aD=!1,n={},ax=!!document.createElement("canvas").getContext,ab={Chart:{width:500,height:400,zoomEnabled:!1,zoomType:"x",backgroundColor:"white",theme:"light1",animationEnabled:!1,animationDuration:1200,dataPointWidth:null,dataPointMinWidth:null,dataPointMaxWidth:null,colorSet:"colorSet1",culture:"en",creditHref:"",creditText:"CanvasJS",interactivityEnabled:!0,exportEnabled:!1,exportFileName:"Chart",rangeChanging:null,rangeChanged:null,publicProperties:{title:"readWrite",subtitles:"readWrite",toolbar:"readWrite",toolTip:"readWrite",legend:"readWrite",axisX:"readWrite",axisY:"readWrite",axisX2:"readWrite",axisY2:"readWrite",data:"readWrite",options:"readWrite",bounds:"readOnly",container:"readOnly",selectedColorSet:"readOnly"}},Title:{padding:0,text:null,verticalAlign:"top",horizontalAlign:"center",fontSize:20,fontFamily:"Calibri",fontWeight:"normal",fontColor:"black",fontStyle:"normal",borderThickness:0,borderColor:"black",cornerRadius:0,backgroundColor:ax?"transparent":null,margin:5,wrap:!0,maxWidth:null,dockInsidePlotArea:!1,publicProperties:{options:"readWrite",bounds:"readOnly",chart:"readOnly"}},Subtitle:{padding:0,text:null,verticalAlign:"top",horizontalAlign:"center",fontSize:14,fontFamily:"Calibri",fontWeight:"normal",fontColor:"black",fontStyle:"normal",borderThickness:0,borderColor:"black",cornerRadius:0,backgroundColor:null,margin:2,wrap:!0,maxWidth:null,dockInsidePlotArea:!1,publicProperties:{options:"readWrite",bounds:"readOnly",chart:"readOnly"}},Toolbar:{backgroundColor:"white",backgroundColorOnHover:"#2196f3",borderColor:"#2196f3",borderThickness:1,fontColor:"black",fontColorOnHover:"white",publicProperties:{options:"readWrite",chart:"readOnly"}},Legend:{name:null,verticalAlign:"center",horizontalAlign:"right",fontSize:14,fontFamily:"calibri",fontWeight:"normal",fontColor:"black",fontStyle:"normal",cursor:null,itemmouseover:null,itemmouseout:null,itemmousemove:null,itemclick:null,dockInsidePlotArea:!1,reversed:!1,backgroundColor:ax?"transparent":null,borderColor:ax?"transparent":null,borderThickness:0,cornerRadius:0,maxWidth:null,maxHeight:null,markerMargin:null,itemMaxWidth:null,itemWidth:null,itemWrap:!0,itemTextFormatter:null,publicProperties:{options:"readWrite",bounds:"readOnly",chart:"readOnly"}},ToolTip:{enabled:!0,shared:!1,animationEnabled:!0,content:null,contentFormatter:null,reversed:!1,backgroundColor:ax?"rgba(255,255,255,.9)":"rgb(255,255,255)",borderColor:null,borderThickness:2,cornerRadius:5,fontSize:14,fontColor:"black",fontFamily:"Calibri, Arial, Georgia, serif;",fontWeight:"normal",fontStyle:"italic",updated:null,hidden:null,publicProperties:{options:"readWrite",chart:"readOnly"}},Axis:{minimum:null,maximum:null,viewportMinimum:null,viewportMaximum:null,interval:null,intervalType:null,reversed:!1,logarithmic:!1,logarithmBase:10,title:null,titleFontColor:"black",titleFontSize:20,titleFontFamily:"arial",titleFontWeight:"normal",titleFontStyle:"normal",titleWrap:!0,titleMaxWidth:null,titleBackgroundColor:ax?"transparent":null,titleBorderColor:ax?"transparent":null,titleBorderThickness:0,titleCornerRadius:0,labelAngle:0,labelFontFamily:"arial",labelFontColor:"black",labelFontSize:12,labelFontWeight:"normal",labelFontStyle:"normal",labelAutoFit:!0,labelWrap:!0,labelMaxWidth:null,labelFormatter:null,labelBackgroundColor:ax?"transparent":null,labelBorderColor:ax?"transparent":null,labelBorderThickness:0,labelCornerRadius:0,labelPlacement:"outside",labelTextAlign:"left",prefix:"",suffix:"",includeZero:!1,tickLength:5,tickColor:"black",tickThickness:1,tickPlacement:"outside",lineColor:"black",lineThickness:1,lineDashType:"solid",gridColor:"#A0A0A0",gridThickness:0,gridDashType:"solid",interlacedColor:ax?"transparent":null,valueFormatString:null,margin:2,publicProperties:{options:"readWrite",stripLines:"readWrite",scaleBreaks:"readWrite",crosshair:"readWrite",bounds:"readOnly",chart:"readOnly"}},StripLine:{value:null,startValue:null,endValue:null,color:"orange",opacity:null,thickness:2,lineDashType:"solid",label:"",labelPlacement:"inside",labelAlign:"far",labelWrap:!0,labelMaxWidth:null,labelBackgroundColor:null,labelBorderColor:ax?"transparent":null,labelBorderThickness:0,labelCornerRadius:0,labelFontFamily:"arial",labelFontColor:"orange",labelFontSize:12,labelFontWeight:"normal",labelFontStyle:"normal",labelFormatter:null,showOnTop:!1,publicProperties:{options:"readWrite",axis:"readOnly",bounds:"readOnly",chart:"readOnly"}},ScaleBreaks:{autoCalculate:!1,collapsibleThreshold:"25%",maxNumberOfAutoBreaks:2,spacing:8,type:"straight",color:"#FFFFFF",fillOpacity:0.9,lineThickness:2,lineColor:"#E16E6E",lineDashType:"solid",publicProperties:{options:"readWrite",customBreaks:"readWrite",axis:"readOnly",autoBreaks:"readOnly",bounds:"readOnly",chart:"readOnly"}},Break:{startValue:null,endValue:null,spacing:8,type:"straight",color:"#FFFFFF",fillOpacity:0.9,lineThickness:2,lineColor:"#E16E6E",lineDashType:"solid",publicProperties:{options:"readWrite",scaleBreaks:"readOnly",bounds:"readOnly",chart:"readOnly"}},Crosshair:{enabled:!1,snapToDataPoint:!1,color:"grey",opacity:null,thickness:2,lineDashType:"solid",label:"",labelWrap:!0,labelMaxWidth:null,labelBackgroundColor:ax?"grey":null,labelBorderColor:ax?"grey":null,labelBorderThickness:0,labelCornerRadius:0,labelFontFamily:ax?"Calibri, Optima, Candara, Verdana, Geneva, sans-serif":"calibri",labelFontSize:12,labelFontColor:"#fff",labelFontWeight:"normal",labelFontStyle:"normal",labelFormatter:null,valueFormatString:null,updated:null,hidden:null,publicProperties:{options:"readWrite",axis:"readOnly",bounds:"readOnly",chart:"readOnly"}},DataSeries:{name:null,dataPoints:null,label:"",bevelEnabled:!1,highlightEnabled:!0,cursor:"default",indexLabel:"",indexLabelPlacement:"auto",indexLabelOrientation:"horizontal",indexLabelFontColor:"black",indexLabelFontSize:12,indexLabelFontStyle:"normal",indexLabelFontFamily:"Arial",indexLabelFontWeight:"normal",indexLabelBackgroundColor:null,indexLabelLineColor:"gray",indexLabelLineThickness:1,indexLabelLineDashType:"solid",indexLabelMaxWidth:null,indexLabelWrap:!0,indexLabelFormatter:null,lineThickness:2,lineDashType:"solid",connectNullData:!1,nullDataLineDashType:"dash",color:null,lineColor:null,risingColor:"white",fallingColor:"red",fillOpacity:null,startAngle:0,radius:null,innerRadius:null,neckHeight:null,neckWidth:null,reversed:!1,valueRepresents:null,linkedDataSeriesIndex:null,whiskerThickness:2,whiskerDashType:"solid",whiskerColor:null,whiskerLength:null,stemThickness:2,stemColor:null,stemDashType:"solid",upperBoxColor:"white",lowerBoxColor:"white",type:"column",xValueType:"number",axisXType:"primary",axisYType:"primary",axisXIndex:0,axisYIndex:0,xValueFormatString:null,yValueFormatString:null,zValueFormatString:null,percentFormatString:null,showInLegend:null,legendMarkerType:null,legendMarkerColor:null,legendText:null,legendMarkerBorderColor:ax?"transparent":null,legendMarkerBorderThickness:0,markerType:"circle",markerColor:null,markerSize:null,markerBorderColor:ax?"transparent":null,markerBorderThickness:0,mouseover:null,mouseout:null,mousemove:null,click:null,toolTipContent:null,visible:!0,publicProperties:{options:"readWrite",axisX:"readWrite",axisY:"readWrite",chart:"readOnly"}},TextBlock:{x:0,y:0,width:null,height:null,maxWidth:null,maxHeight:null,padding:0,angle:0,text:"",horizontalAlign:"center",textAlign:"left",fontSize:12,fontFamily:"calibri",fontWeight:"normal",fontColor:"black",fontStyle:"normal",borderThickness:0,borderColor:"black",cornerRadius:0,backgroundColor:null,textBaseline:"top"},CultureInfo:{decimalSeparator:".",digitGroupSeparator:",",zoomText:"Zoom",panText:"Pan",resetText:"Reset",menuText:"More Options",saveJPGText:"Save as JPEG",savePNGText:"Save as PNG",printText:"Print",days:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),shortDays:"Sun Mon Tue Wed Thu Fri Sat".split(" "),months:"January February March April May June July August September October November December".split(" "),shortMonths:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" ")}},aF={en:{}},aw=ax?"Trebuchet MS, Helvetica, sans-serif":"Arial",aA=ax?"Impact, Charcoal, sans-serif":"Arial",ah={colorSet1:"#4F81BC #C0504E #9BBB58 #23BFAA #8064A1 #4AACC5 #F79647 #7F6084 #77A033 #33558B #E59566".split(" "),colorSet2:"#6D78AD #51CDA0 #DF7970 #4C9CA0 #AE7D99 #C9D45C #5592AD #DF874D #52BCA8 #8E7AA3 #E3CB64 #C77B85 #C39762 #8DD17E #B57952 #FCC26C".split(" "),colorSet3:"#8CA1BC #36845C #017E82 #8CB9D0 #708C98 #94838D #F08891 #0366A7 #008276 #EE7757 #E5BA3A #F2990B #03557B #782970".split(" ")},I,ao,f,P,d;
ao="#333333";
f="#000000";
I="#666666";
d=P="#000000";
var m=20,L=14,G={colorSet:"colorSet1",backgroundColor:"#FFFFFF",title:{fontFamily:aA,fontSize:32,fontColor:ao,fontWeight:"normal",verticalAlign:"top",margin:5},subtitles:[{fontFamily:aA,fontSize:L,fontColor:ao,fontWeight:"normal",verticalAlign:"top",margin:5}],data:[{indexLabelFontFamily:aw,indexLabelFontSize:L,indexLabelFontColor:ao,indexLabelFontWeight:"normal",indexLabelLineThickness:1}],axisX:[{titleFontFamily:aw,titleFontSize:m,titleFontColor:ao,titleFontWeight:"normal",labelFontFamily:aw,labelFontSize:L,labelFontColor:f,labelFontWeight:"normal",lineThickness:1,lineColor:I,tickThickness:1,tickColor:I,gridThickness:0,gridColor:I,stripLines:[{labelFontFamily:aw,labelFontSize:L,labelFontColor:"#FF7300",labelFontWeight:"normal",labelBackgroundColor:null,color:"#FF7300",thickness:1}],crosshair:{labelFontFamily:aw,labelFontSize:L,labelFontColor:"#EEEEEE",labelFontWeight:"normal",labelBackgroundColor:d,color:P,thickness:1,lineDashType:"dash"},scaleBreaks:{type:"zigzag",spacing:"2%",lineColor:"#BBBBBB",lineThickness:1,lineDashType:"solid"}}],axisX2:[{titleFontFamily:aw,titleFontSize:m,titleFontColor:ao,titleFontWeight:"normal",labelFontFamily:aw,labelFontSize:L,labelFontColor:f,labelFontWeight:"normal",lineThickness:1,lineColor:I,tickThickness:1,tickColor:I,gridThickness:0,gridColor:I,stripLines:[{labelFontFamily:aw,labelFontSize:L,labelFontColor:"#FF7300",labelFontWeight:"normal",labelBackgroundColor:null,color:"#FF7300",thickness:1}],crosshair:{labelFontFamily:aw,labelFontSize:L,labelFontColor:"#EEEEEE",labelFontWeight:"normal",labelBackgroundColor:d,color:P,thickness:1,lineDashType:"dash"},scaleBreaks:{type:"zigzag",spacing:"2%",lineColor:"#BBBBBB",lineThickness:1,lineDashType:"solid"}}],axisY:[{titleFontFamily:aw,titleFontSize:m,titleFontColor:ao,titleFontWeight:"normal",labelFontFamily:aw,labelFontSize:L,labelFontColor:f,labelFontWeight:"normal",lineThickness:1,lineColor:I,tickThickness:1,tickColor:I,gridThickness:1,gridColor:I,stripLines:[{labelFontFamily:aw,labelFontSize:L,labelFontColor:"#FF7300",labelFontWeight:"normal",labelBackgroundColor:null,color:"#FF7300",thickness:1}],crosshair:{labelFontFamily:aw,labelFontSize:L,labelFontColor:"#EEEEEE",labelFontWeight:"normal",labelBackgroundColor:d,color:P,thickness:1,lineDashType:"dash"},scaleBreaks:{type:"zigzag",spacing:"2%",lineColor:"#BBBBBB",lineThickness:1,lineDashType:"solid"}}],axisY2:[{titleFontFamily:aw,titleFontSize:m,titleFontColor:ao,titleFontWeight:"normal",labelFontFamily:aw,labelFontSize:L,labelFontColor:f,labelFontWeight:"normal",lineThickness:1,lineColor:I,tickThickness:1,tickColor:I,gridThickness:1,gridColor:I,stripLines:[{labelFontFamily:aw,labelFontSize:L,labelFontColor:"#FF7300",labelFontWeight:"normal",labelBackgroundColor:null,color:"#FF7300",thickness:1}],crosshair:{labelFontFamily:aw,labelFontSize:L,labelFontColor:"#EEEEEE",labelFontWeight:"normal",labelBackgroundColor:d,color:P,thickness:1,lineDashType:"dash"},scaleBreaks:{type:"zigzag",spacing:"2%",lineColor:"#BBBBBB",lineThickness:1,lineDashType:"solid"}}],legend:{fontFamily:aw,fontSize:14,fontColor:ao,fontWeight:"bold",verticalAlign:"bottom",horizontalAlign:"center"},toolTip:{fontFamily:aw,fontSize:14,fontStyle:"normal",cornerRadius:0,borderThickness:1}};
f=ao="#F5F5F5";
I="#FFFFFF";
P="#40BAF1";
d="#F5F5F5";
var m=20,L=14,E={colorSet:"colorSet2",title:{fontFamily:aw,fontSize:33,fontColor:"#3A3A3A",fontWeight:"bold",verticalAlign:"top",margin:5},subtitles:[{fontFamily:aw,fontSize:L,fontColor:"#3A3A3A",fontWeight:"normal",verticalAlign:"top",margin:5}],data:[{indexLabelFontFamily:aw,indexLabelFontSize:L,indexLabelFontColor:"#666666",indexLabelFontWeight:"normal",indexLabelLineThickness:1}],axisX:[{titleFontFamily:aw,titleFontSize:m,titleFontColor:"#666666",titleFontWeight:"normal",labelFontFamily:aw,labelFontSize:L,labelFontColor:"#666666",labelFontWeight:"normal",lineThickness:1,lineColor:"#BBBBBB",tickThickness:1,tickColor:"#BBBBBB",gridThickness:1,gridColor:"#BBBBBB",stripLines:[{labelFontFamily:aw,labelFontSize:L,labelFontColor:"#FFA500",labelFontWeight:"normal",labelBackgroundColor:null,color:"#FFA500",thickness:1}],crosshair:{labelFontFamily:aw,labelFontSize:L,labelFontColor:"#EEEEEE",labelFontWeight:"normal",labelBackgroundColor:"black",color:"black",thickness:1,lineDashType:"dot"},scaleBreaks:{type:"zigzag",spacing:"2%",lineColor:"#BBBBBB",lineThickness:1,lineDashType:"solid"}}],axisX2:[{titleFontFamily:aw,titleFontSize:m,titleFontColor:"#666666",titleFontWeight:"normal",labelFontFamily:aw,labelFontSize:L,labelFontColor:"#666666",labelFontWeight:"normal",lineThickness:1,lineColor:"#BBBBBB",tickColor:"#BBBBBB",tickThickness:1,gridThickness:1,gridColor:"#BBBBBB",stripLines:[{labelFontFamily:aw,labelFontSize:L,labelFontColor:"#FFA500",labelFontWeight:"normal",labelBackgroundColor:null,color:"#FFA500",thickness:1}],crosshair:{labelFontFamily:aw,labelFontSize:L,labelFontColor:"#EEEEEE",labelFontWeight:"normal",labelBackgroundColor:"black",color:"black",thickness:1,lineDashType:"dot"},scaleBreaks:{type:"zigzag",spacing:"2%",lineColor:"#BBBBBB",lineThickness:1,lineDashType:"solid"}}],axisY:[{titleFontFamily:aw,titleFontSize:m,titleFontColor:"#666666",titleFontWeight:"normal",labelFontFamily:aw,labelFontSize:L,labelFontColor:"#666666",labelFontWeight:"normal",lineThickness:0,lineColor:"#BBBBBB",tickColor:"#BBBBBB",tickThickness:1,gridThickness:1,gridColor:"#BBBBBB",stripLines:[{labelFontFamily:aw,labelFontSize:L,labelFontColor:"#FFA500",labelFontWeight:"normal",labelBackgroundColor:null,color:"#FFA500",thickness:1}],crosshair:{labelFontFamily:aw,labelFontSize:L,labelFontColor:"#EEEEEE",labelFontWeight:"normal",labelBackgroundColor:"black",color:"black",thickness:1,lineDashType:"dot"},scaleBreaks:{type:"zigzag",spacing:"2%",lineColor:"#BBBBBB",lineThickness:1,lineDashType:"solid"}}],axisY2:[{titleFontFamily:aw,titleFontSize:m,titleFontColor:"#666666",titleFontWeight:"normal",labelFontFamily:aw,labelFontSize:L,labelFontColor:"#666666",labelFontWeight:"normal",lineThickness:0,lineColor:"#BBBBBB",tickColor:"#BBBBBB",tickThickness:1,gridThickness:1,gridColor:"#BBBBBB",stripLines:[{labelFontFamily:aw,labelFontSize:L,labelFontColor:"#FFA500",labelFontWeight:"normal",labelBackgroundColor:null,color:"#FFA500",thickness:1}],crosshair:{labelFontFamily:aw,labelFontSize:L,labelFontColor:"#EEEEEE",labelFontWeight:"normal",labelBackgroundColor:"black",color:"black",thickness:1,lineDashType:"dot"},scaleBreaks:{type:"zigzag",spacing:"2%",lineColor:"#BBBBBB",lineThickness:1,lineDashType:"solid"}}],legend:{fontFamily:aw,fontSize:14,fontColor:"#3A3A3A",fontWeight:"bold",verticalAlign:"bottom",horizontalAlign:"center"},toolTip:{fontFamily:aw,fontSize:14,fontStyle:"normal",cornerRadius:0,borderThickness:1}};
f=ao="#F5F5F5";
I="#FFFFFF";
P="#40BAF1";
d="#F5F5F5";
m=20;
L=14;
aA={colorSet:"colorSet12",backgroundColor:"#2A2A2A",title:{fontFamily:aA,fontSize:32,fontColor:ao,fontWeight:"normal",verticalAlign:"top",margin:5},subtitles:[{fontFamily:aA,fontSize:L,fontColor:ao,fontWeight:"normal",verticalAlign:"top",margin:5}],toolbar:{backgroundColor:"#666666",backgroundColorOnHover:"#FF7372",borderColor:"#FF7372",borderThickness:1,fontColor:"#F5F5F5",fontColorOnHover:"#F5F5F5"},data:[{indexLabelFontFamily:aw,indexLabelFontSize:L,indexLabelFontColor:f,indexLabelFontWeight:"normal",indexLabelLineThickness:1}],axisX:[{titleFontFamily:aw,titleFontSize:m,titleFontColor:f,titleFontWeight:"normal",labelFontFamily:aw,labelFontSize:L,labelFontColor:f,labelFontWeight:"normal",lineThickness:1,lineColor:I,tickThickness:1,tickColor:I,gridThickness:0,gridColor:I,stripLines:[{labelFontFamily:aw,labelFontSize:L,labelFontColor:"#FF7300",labelFontWeight:"normal",labelBackgroundColor:null,color:"#FF7300",thickness:1}],crosshair:{labelFontFamily:aw,labelFontSize:L,labelFontColor:"#000000",labelFontWeight:"normal",labelBackgroundColor:d,color:P,thickness:1,lineDashType:"dash"},scaleBreaks:{type:"zigzag",spacing:"2%",lineColor:"#777777",lineThickness:1,lineDashType:"solid",color:"#111111"}}],axisX2:[{titleFontFamily:aw,titleFontSize:m,titleFontColor:f,titleFontWeight:"normal",labelFontFamily:aw,labelFontSize:L,labelFontColor:f,labelFontWeight:"normal",lineThickness:1,lineColor:I,tickThickness:1,tickColor:I,gridThickness:0,gridColor:I,stripLines:[{labelFontFamily:aw,labelFontSize:L,labelFontColor:"#FF7300",labelFontWeight:"normal",labelBackgroundColor:null,color:"#FF7300",thickness:1}],crosshair:{labelFontFamily:aw,labelFontSize:L,labelFontColor:"#000000",labelFontWeight:"normal",labelBackgroundColor:d,color:P,thickness:1,lineDashType:"dash"},scaleBreaks:{type:"zigzag",spacing:"2%",lineColor:"#777777",lineThickness:1,lineDashType:"solid",color:"#111111"}}],axisY:[{titleFontFamily:aw,titleFontSize:m,titleFontColor:f,titleFontWeight:"normal",labelFontFamily:aw,labelFontSize:L,labelFontColor:f,labelFontWeight:"normal",lineThickness:1,lineColor:I,tickThickness:1,tickColor:I,gridThickness:1,gridColor:I,stripLines:[{labelFontFamily:aw,labelFontSize:L,labelFontColor:"#FF7300",labelFontWeight:"normal",labelBackgroundColor:null,color:"#FF7300",thickness:1}],crosshair:{labelFontFamily:aw,labelFontSize:L,labelFontColor:"#000000",labelFontWeight:"normal",labelBackgroundColor:d,color:P,thickness:1,lineDashType:"dash"},scaleBreaks:{type:"zigzag",spacing:"2%",lineColor:"#777777",lineThickness:1,lineDashType:"solid",color:"#111111"}}],axisY2:[{titleFontFamily:aw,titleFontSize:m,titleFontColor:f,titleFontWeight:"normal",labelFontFamily:aw,labelFontSize:L,labelFontColor:f,labelFontWeight:"normal",lineThickness:1,lineColor:I,tickThickness:1,tickColor:I,gridThickness:1,gridColor:I,stripLines:[{labelFontFamily:aw,labelFontSize:L,labelFontColor:"#FF7300",labelFontWeight:"normal",labelBackgroundColor:null,color:"#FF7300",thickness:1}],crosshair:{labelFontFamily:aw,labelFontSize:L,labelFontColor:"#000000",labelFontWeight:"normal",labelBackgroundColor:d,color:P,thickness:1,lineDashType:"dash"},scaleBreaks:{type:"zigzag",spacing:"2%",lineColor:"#777777",lineThickness:1,lineDashType:"solid",color:"#111111"}}],legend:{fontFamily:aw,fontSize:14,fontColor:ao,fontWeight:"bold",verticalAlign:"bottom",horizontalAlign:"center"},toolTip:{fontFamily:aw,fontSize:14,fontStyle:"normal",cornerRadius:0,borderThickness:1,fontColor:f,backgroundColor:"rgba(0, 0, 0, .7)"}};
I="#FFFFFF";
f=ao="#FAFAFA";
P="#40BAF1";
d="#F5F5F5";
var m=20,L=14,M={light1:G,light2:E,dark1:aA,dark2:{colorSet:"colorSet2",backgroundColor:"#32373A",title:{fontFamily:aw,fontSize:32,fontColor:ao,fontWeight:"normal",verticalAlign:"top",margin:5},subtitles:[{fontFamily:aw,fontSize:L,fontColor:ao,fontWeight:"normal",verticalAlign:"top",margin:5}],toolbar:{backgroundColor:"#666666",backgroundColorOnHover:"#FF7372",borderColor:"#FF7372",borderThickness:1,fontColor:"#F5F5F5",fontColorOnHover:"#F5F5F5"},data:[{indexLabelFontFamily:aw,indexLabelFontSize:L,indexLabelFontColor:f,indexLabelFontWeight:"normal",indexLabelLineThickness:1}],axisX:[{titleFontFamily:aw,titleFontSize:m,titleFontColor:f,titleFontWeight:"normal",labelFontFamily:aw,labelFontSize:L,labelFontColor:f,labelFontWeight:"normal",lineThickness:1,lineColor:I,tickThickness:1,tickColor:I,gridThickness:0,gridColor:I,stripLines:[{labelFontFamily:aw,labelFontSize:L,labelFontColor:"#FF7300",labelFontWeight:"normal",labelBackgroundColor:null,color:"#FF7300",thickness:1}],crosshair:{labelFontFamily:aw,labelFontSize:L,labelFontColor:"#000000",labelFontWeight:"normal",labelBackgroundColor:d,color:P,thickness:1,lineDashType:"dash"},scaleBreaks:{type:"zigzag",spacing:"2%",lineColor:"#777777",lineThickness:1,lineDashType:"solid",color:"#111111"}}],axisX2:[{titleFontFamily:aw,titleFontSize:m,titleFontColor:f,titleFontWeight:"normal",labelFontFamily:aw,labelFontSize:L,labelFontColor:f,labelFontWeight:"normal",lineThickness:1,lineColor:I,tickThickness:1,tickColor:I,gridThickness:0,gridColor:I,stripLines:[{labelFontFamily:aw,labelFontSize:L,labelFontColor:"#FF7300",labelFontWeight:"normal",labelBackgroundColor:null,color:"#FF7300",thickness:1}],crosshair:{labelFontFamily:aw,labelFontSize:L,labelFontColor:"#000000",labelFontWeight:"normal",labelBackgroundColor:d,color:P,thickness:1,lineDashType:"dash"},scaleBreaks:{type:"zigzag",spacing:"2%",lineColor:"#777777",lineThickness:1,lineDashType:"solid",color:"#111111"}}],axisY:[{titleFontFamily:aw,titleFontSize:m,titleFontColor:f,titleFontWeight:"normal",labelFontFamily:aw,labelFontSize:L,labelFontColor:f,labelFontWeight:"normal",lineThickness:0,lineColor:I,tickThickness:1,tickColor:I,gridThickness:1,gridColor:I,stripLines:[{labelFontFamily:aw,labelFontSize:L,labelFontColor:"#FF7300",labelFontWeight:"normal",labelBackgroundColor:null,color:"#FF7300",thickness:1}],crosshair:{labelFontFamily:aw,labelFontSize:L,labelFontColor:"#000000",labelFontWeight:"normal",labelBackgroundColor:d,color:P,thickness:1,lineDashType:"dash"},scaleBreaks:{type:"zigzag",spacing:"2%",lineColor:"#777777",lineThickness:1,lineDashType:"solid",color:"#111111"}}],axisY2:[{titleFontFamily:aw,titleFontSize:m,titleFontColor:f,titleFontWeight:"normal",labelFontFamily:aw,labelFontSize:L,labelFontColor:f,labelFontWeight:"normal",lineThickness:0,lineColor:I,tickThickness:1,tickColor:I,gridThickness:1,gridColor:I,stripLines:[{labelFontFamily:aw,labelFontSize:L,labelFontColor:"#FF7300",labelFontWeight:"normal",labelBackgroundColor:null,color:"#FF7300",thickness:1}],crosshair:{labelFontFamily:aw,labelFontSize:L,labelFontColor:"#000000",labelFontWeight:"normal",labelBackgroundColor:d,color:P,thickness:1,lineDashType:"dash"},scaleBreaks:{type:"zigzag",spacing:"2%",lineColor:"#777777",lineThickness:1,lineDashType:"solid",color:"#111111"}}],legend:{fontFamily:aw,fontSize:14,fontColor:ao,fontWeight:"bold",verticalAlign:"bottom",horizontalAlign:"center"},toolTip:{fontFamily:aw,fontSize:14,fontStyle:"normal",cornerRadius:0,borderThickness:1,fontColor:f,backgroundColor:"rgba(0, 0, 0, .7)"}},theme1:G,theme2:E,theme3:G},r={numberDuration:1,yearDuration:31449600000,monthDuration:2592000000,weekDuration:604800000,dayDuration:86400000,hourDuration:3600000,minuteDuration:60000,secondDuration:1000,millisecondDuration:1,dayOfWeekFromInt:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" ")};
(function(){n.fSDec=function(y){for(var s="",v=0;
v<y.length;
v++){s+=String.fromCharCode(Math.ceil(y.length/57/5)^y.charCodeAt(v))
}return s
};
n.obj={trVs:"B`ow`rKR!Ush`m",fntStr:"qy!B`mhcsh-!Mtbhe`!Fs`oed-!Mtbhe`!R`or!Tohbned-!@sh`m-!r`or,rdshg",txtBl:"udyuC`rdmhod",fnt:"gnou",fSy:"ghmmRuxmd",fTx:"ghmmUdyu",grClr:"fsdx",cntx:"buy",tp:"unq",msTxt:"ld`rtsdUdyu"};
delete ab[n.fSDec("Bi`su")][n.fSDec("bsdehuIsdg")];
n.pro={sCH:ab[n.fSDec("Bi`su")][n.fSDec("bsdehuIsdg")]};
n.pos=["cm","cs","um"];
n._fTWm=function(Q){if("undefined"===typeof n.pro.sCH&&!aL){try{var F=(new Date).getMonth()%3,H,N,J=Q[n.fSDec(n.obj.cntx)];
J[n.fSDec(n.obj.txtBl)]=n.fSDec(n.obj.tp);
J[n.fSDec(n.obj.fnt)]=11+n.fSDec(n.obj.fntStr);
J[n.fSDec(n.obj.fSy)]=n.fSDec(n.obj.grClr);
H="cm"===n.pos[F]||"um"===n.pos[F]?0:Q.width-J[n.fSDec(n.obj.msTxt)](n.fSDec(n.obj.trVs)).width;
N="um"===n.pos[F]?0:Q.height-11;
J[n.fSDec(n.obj.fTx)](n.fSDec(n.obj.trVs),H,N);
"cs"===n.pos[F]&&(Q[n.fSDec("^bsdehuMhoj")].style.right=n.fSDec("`tun"))
}catch(R){}}}
})();
var ar=function(){var y=!1;
try{var s=Object.defineProperty&&Object.defineProperty({},"passive",{get:function(){y=!0;
return !1
}});
window.addEventListener&&(window.addEventListener("test",null,s),window.removeEventListener("test",null,s))
}catch(v){y=!1
}return y
}(),K={},af=null,e=function(){this.ctx.clearRect(0,0,this.width,this.height);
this.backgroundColor&&(this.ctx.fillStyle=this.backgroundColor,this.ctx.fillRect(0,0,this.width,this.height))
},av=function(y,s,v){s=Math.min(this.width,this.height);
return Math.max("theme4"===this.theme?0:300<=s?12:11,Math.round(s*(y/400)))
},x=function(){var Q=/D{1,4}|M{1,4}|Y{1,4}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|f{1,3}|t{1,2}|T{1,2}|K|z{1,3}|"[^"]*"|'[^']*'/g,F="Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),H="Sun Mon Tue Wed Thu Fri Sat".split(" "),N="January February March April May June July August September October November December".split(" "),J="Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),T=/\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,R=/[^-+\dA-Z]/g;
return function(aV,aM,aO){var y=aO?aO.days:F,aU=aO?aO.months:N,X=aO?aO.shortDays:H,aT=aO?aO.shortMonths:J;
aO="";
var U=!1;
aV=aV&&aV.getTime?aV:aV?new Date(aV):new Date;
if(isNaN(aV)){throw SyntaxError("invalid date")
}"UTC:"===aM.slice(0,4)&&(aM=aM.slice(4),U=!0);
aO=U?"getUTC":"get";
var v=aV[aO+"Date"](),aQ=aV[aO+"Day"](),s=aV[aO+"Month"](),aS=aV[aO+"FullYear"](),aN=aV[aO+"Hours"](),aP=aV[aO+"Minutes"](),aR=aV[aO+"Seconds"](),Z=aV[aO+"Milliseconds"](),Y=U?0:aV.getTimezoneOffset();
return aO=aM.replace(Q,function(V){switch(V){case"D":return v;
case"DD":return j(v,2);
case"DDD":return X[aQ];
case"DDDD":return y[aQ];
case"M":return s+1;
case"MM":return j(s+1,2);
case"MMM":return aT[s];
case"MMMM":return aU[s];
case"Y":return parseInt(String(aS).slice(-2));
case"YY":return j(String(aS).slice(-2),2);
case"YYY":return j(String(aS).slice(-3),3);
case"YYYY":return j(aS,4);
case"h":return aN%12||12;
case"hh":return j(aN%12||12,2);
case"H":return aN;
case"HH":return j(aN,2);
case"m":return aP;
case"mm":return j(aP,2);
case"s":return aR;
case"ss":return j(aR,2);
case"f":return String(Z).slice(0,1);
case"ff":return j(String(Z).slice(0,2),2);
case"fff":return j(String(Z).slice(0,3),3);
case"t":return 12>aN?"a":"p";
case"tt":return 12>aN?"am":"pm";
case"T":return 12>aN?"A":"P";
case"TT":return 12>aN?"AM":"PM";
case"K":return U?"UTC":(String(aV).match(T)||[""]).pop().replace(R,"");
case"z":return(0<Y?"-":"+")+Math.floor(Math.abs(Y)/60);
case"zz":return(0<Y?"-":"+")+j(Math.floor(Math.abs(Y)/60),2);
case"zzz":return(0<Y?"-":"+")+j(Math.floor(Math.abs(Y)/60),2)+j(Math.abs(Y)%60,2);
default:return V.slice(1,V.length-1)
}})
}
}(),b=function(aZ,aY,aT){if(null===aZ){return""
}if(!isFinite(aZ)){return aZ
}aZ=Number(aZ);
var aW=0>aZ?!0:!1;
aW&&(aZ*=-1);
var aU=aT?aT.decimalSeparator:".",aR=aT?aT.digitGroupSeparator:",",aX="";
aY=String(aY);
var aX=1,aV=aT="",aN=-1,aO=[],Y=[],aS=0,aM=0,Z=0,aQ=!1,X=0,aV=aY.match(/"[^"]*"|'[^']*'|[eE][+-]*[0]+|[,]+[.]|\u2030|./g);
aY=null;
for(var aP=0;
aV&&aP<aV.length;
aP++){if(aY=aV[aP],"."===aY&&0>aN){aN=aP
}else{if("%"===aY){aX*=100
}else{if("\u2030"===aY){aX*=1000;
continue
}else{if(","===aY[0]&&"."===aY[aY.length-1]){aX/=Math.pow(1000,aY.length-1);
aN=aP+aY.length-1;
continue
}else{"E"!==aY[0]&&"e"!==aY[0]||"0"!==aY[aY.length-1]||(aQ=!0)
}}}0>aN?(aO.push(aY),"#"===aY||"0"===aY?aS++:","===aY&&Z++):(Y.push(aY),"#"!==aY&&"0"!==aY||aM++)
}}aQ&&(aY=Math.floor(aZ),aV=-Math.floor(Math.log(aZ)/Math.LN10+1),X=0===aZ?0:0===aY?-(aS+aV):String(aY).length-aS,aX/=Math.pow(10,X));
0>aN&&(aN=aP);
aX=(aZ*aX).toFixed(aM);
aY=aX.split(".");
aX=(aY[0]+"").split("");
aZ=(aY[1]+"").split("");
aX&&"0"===aX[0]&&aX.shift();
for(aQ=aV=aP=aM=aN=0;
0<aO.length;
){if(aY=aO.pop(),"#"===aY||"0"===aY){if(aN++,aN===aS){var U=aX,aX=[];
if("0"===aY){for(aY=aS-aM-(U?U.length:0);
0<aY;
){U.unshift("0"),aY--
}}for(;
0<U.length;
){aT=U.pop()+aT,aQ++,0===aQ%aV&&(aP===Z&&0<U.length)&&(aT=aR+aT)
}}else{0<aX.length?(aT=aX.pop()+aT,aM++,aQ++):"0"===aY&&(aT="0"+aT,aM++,aQ++),0===aQ%aV&&(aP===Z&&0<aX.length)&&(aT=aR+aT)
}}else{"E"!==aY[0]&&"e"!==aY[0]||"0"!==aY[aY.length-1]||!/[eE][+-]*[0]+/.test(aY)?","===aY?(aP++,aV=aQ,aQ=0,0<aX.length&&(aT=aR+aT)):aT=1<aY.length&&('"'===aY[0]&&'"'===aY[aY.length-1]||"'"===aY[0]&&"'"===aY[aY.length-1])?aY.slice(1,aY.length-1)+aT:aY+aT:(aY=0>X?aY.replace("+","").replace("-",""):aY.replace("-",""),aT+=aY.replace(/[0]+/,function(s){return j(X,s.length)
}))
}}aR="";
for(aO=!1;
0<Y.length;
){aY=Y.shift(),"#"===aY||"0"===aY?0<aZ.length&&0!==Number(aZ.join(""))?(aR+=aZ.shift(),aO=!0):"0"===aY&&(aR+="0",aO=!0):1<aY.length&&('"'===aY[0]&&'"'===aY[aY.length-1]||"'"===aY[0]&&"'"===aY[aY.length-1])?aR+=aY.slice(1,aY.length-1):"E"!==aY[0]&&"e"!==aY[0]||"0"!==aY[aY.length-1]||!/[eE][+-]*[0]+/.test(aY)?aR+=aY:(aY=0>X?aY.replace("+","").replace("-",""):aY.replace("-",""),aR+=aY.replace(/[0]+/,function(s){return j(X,s.length)
}))
}aT+=(aO?aU:"")+aR;
return aW?"-"+aT:aT
},aj=function(y){var s=0,v=0;
y=y||window.event;
y.offsetX||0===y.offsetX?(s=y.offsetX,v=y.offsetY):y.layerX||0==y.layerX?(s=y.layerX,v=y.layerY):(s=y.pageX-y.target.offsetLeft,v=y.pageY-y.target.offsetTop);
return{x:s,y:v}
},an=!0,ak=window.devicePixelRatio||1,aG=1,W=an?ak/aG:1,aq=function(Y,U,aP,aT,aR,aN,R,aS,Z,aM,V,X,aO){"undefined"===typeof aO&&(aO=1);
R=R||0;
aS=aS||"black";
var aQ=15<aT-U&&15<aR-aP?8:0.35*Math.min(aT-U,aR-aP);
Y.beginPath();
Y.moveTo(U,aP);
Y.save();
Y.fillStyle=aN;
Y.globalAlpha=aO;
Y.fillRect(U,aP,aT-U,aR-aP);
Y.globalAlpha=1;
0<R&&(aO=0===R%2?0:0.5,Y.beginPath(),Y.lineWidth=R,Y.strokeStyle=aS,Y.moveTo(U,aP),Y.rect(U-aO,aP-aO,aT-U+2*aO,aR-aP+2*aO),Y.stroke());
Y.restore();
!0===Z&&(Y.save(),Y.beginPath(),Y.moveTo(U,aP),Y.lineTo(U+aQ,aP+aQ),Y.lineTo(aT-aQ,aP+aQ),Y.lineTo(aT,aP),Y.closePath(),R=Y.createLinearGradient((aT+U)/2,aP+aQ,(aT+U)/2,aP),R.addColorStop(0,aN),R.addColorStop(1,"rgba(255, 255, 255, .4)"),Y.fillStyle=R,Y.fill(),Y.restore());
!0===aM&&(Y.save(),Y.beginPath(),Y.moveTo(U,aR),Y.lineTo(U+aQ,aR-aQ),Y.lineTo(aT-aQ,aR-aQ),Y.lineTo(aT,aR),Y.closePath(),R=Y.createLinearGradient((aT+U)/2,aR-aQ,(aT+U)/2,aR),R.addColorStop(0,aN),R.addColorStop(1,"rgba(255, 255, 255, .4)"),Y.fillStyle=R,Y.fill(),Y.restore());
!0===V&&(Y.save(),Y.beginPath(),Y.moveTo(U,aP),Y.lineTo(U+aQ,aP+aQ),Y.lineTo(U+aQ,aR-aQ),Y.lineTo(U,aR),Y.closePath(),R=Y.createLinearGradient(U+aQ,(aR+aP)/2,U,(aR+aP)/2),R.addColorStop(0,aN),R.addColorStop(1,"rgba(255, 255, 255, 0.1)"),Y.fillStyle=R,Y.fill(),Y.restore());
!0===X&&(Y.save(),Y.beginPath(),Y.moveTo(aT,aP),Y.lineTo(aT-aQ,aP+aQ),Y.lineTo(aT-aQ,aR-aQ),Y.lineTo(aT,aR),R=Y.createLinearGradient(aT-aQ,(aR+aP)/2,aT,(aR+aP)/2),R.addColorStop(0,aN),R.addColorStop(1,"rgba(255, 255, 255, 0.1)"),Y.fillStyle=R,R.addColorStop(0,aN),R.addColorStop(1,"rgba(255, 255, 255, 0.1)"),Y.fillStyle=R,Y.fill(),Y.closePath(),Y.restore())
},g=function(F){for(var v="",y=0;
y<F.length;
y++){v+=String.fromCharCode(Math.ceil(F.length/57/5)^F.charCodeAt(y))
}return v
},aL=window&&window[g("mnb`uhno")]&&window[g("mnb`uhno")].href&&window[g("mnb`uhno")].href.indexOf&&(-1!==window[g("mnb`uhno")].href.indexOf(g("b`ow`rkr/bnl"))||-1!==window[g("mnb`uhno")].href.indexOf(g("gdonqhy/bnl"))||-1!==window[g("mnb`uhno")].href.indexOf(g("gheemd"))),at=aL&&-1===window[g("mnb`uhno")].href.indexOf(g("gheemd")),aa={reset:{image:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAeCAYAAABJ/8wUAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAPjSURBVFhHxVdJaFNRFP1J/jwkP5MxsbaC1WJEglSxOFAXIsFpVRE3ggi1K90obioRRBA33XXnQnciirhQcMCdorgQxBkXWlREkFKsWkv5npvckp/XnzRpKh64kLw733fffe9L/wrL0+mVUdO8uTSZ3MBL/we2qg4rkuSpodCELstXE46ziVkLQ6FQcGOmeSSq6wd4aV50d3drWjj8kQKZJTUc9kxFGenv79dZrDksTSTWWJp2QYtEPiErysyzdX0LsxsCQR8keX8gs6RHIk8ysdgKFg2G53mhuOPsshTlBjKaFo1g7SqLNoShKLdFXT8huQ/paLSbxatYnc2mHMM4hr18Vi8TIvCmXF3vYrW6cF23gGTOk0M1wA4RKvOmq6vLZRVJipvmSWT6tZ6CSEYkco5V50VPT4+D7RwOqi6RiSZm0fJ+vggSqkeoypdsNmuyelNwbXsbgvkWYMtzDWNvWaijoyOBqE+hVK8abcssUeXQ/YfKyi0gFYv1Ipgfoj34fYGTJLOYJA0ODirok32GLN8XhUWCwSes1hIwBg6LydJ/tEeRRapAdUp+wSAiZchtZZWWgAZ+JNpD8peYXQVK9UwUxNpzOK8pq97kURZhYTCKBwPD7h2zK+js7Myi7D8Fod+0TkMI8+EMAngLGc/WtBFWawkFHFnoj/t9KLgGmF0B3QfkxC+EarxkdhnFYlFLY06USqUwL7UMjICHfh/wOc2sCqhpxGbCkLvL7EUDbF73+6DkmVWB6zi7xUDQSLeYvWjAILvm9zEnkJhlbRcDQZcv6Kg2AipyT/Axw6wKlqVSqxDdjF8Izfod13qURdrG/nxehY+xGh+h0CSzKygGvSNQIcc097BI24jb9hax6kj2E7OrMFX1il+ICEf2NrPbhiXLl+fYl+U7zK4iYdsDcyLGf+ofFlkwcN+s10KhmpuYhhtm0hCLVIFL0MDsqNlDIqy9x2CLs1jL6OvrI7vPRbtohXG6eFmsFnHDGAp6n9AgyuVySRZrGvROxRgIfLXhzjrNYnNBUxNX/dMgRWT1mt4XLDovaApD53E9W3ilNX5M55LJHpRtIsgAvciR4WWcgK2Dvb1YqgXevmF8z2zEBTcKG39EfSKsT9EbhVUaI2FZO+oZIqImxol6j66/hcAu4sSN4vc1ZPoKeoE6RGhYL2YYA+ymOSSi0Z0wWntbtkGUWCvfSDXIxONraZ/FY90KUfNTpfC5spnNLgxoYNnR9RO4F8ofXEHOgogCQE99w+fF2Xw+b7O59rEOsyRqGEfpVoaDMQQ1CZrG46bcM6AZ0C/wPqNfHliqejyTySxh9TqQpL+xmbIlkB9SlAAAAABJRU5ErkJggg=="},pan:{image:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAICSURBVEhLxZbPahNRGMUn/5MpuAiBEAIufQGfzr5E40YptBXajYzudCEuGqS+gGlrFwquDGRTutBdYfydzJ3LzeQmJGZue+Dw/Z17Mnfmu5Pof9Hr9Z61Wq0bWZMKj263O6xWq99wU9lOpzPMKgEhEcRucNOcioOK+0RzBhNvt9tPV4nmVF19+OWhVqt9xXgFXZq+8lCv119UKpUJ7iX2FmvFTKz8RH34YdBsNk8wVtjE4fGYwm8wrrDi3WBG5oKXZGRSS9hGuNFojLTe2lFz5xThWZIktayyiE2FdT3rzXBXz7krKiL8c17wAKFDjCus2AvW+YGZ9y2JF0VFRuMPfI//rsCE/C+s26s4gQu9ul7r4NteKx7H8XOC724xNNGbaNu++IrBqbOV7Tj3FgMRvc/YKOr3+3sE47wgEt/Bl/gaK5cHbNU11vYSXylfpK7XOvjuumPp4Wcoipu30Qsez2uMXYz4lfI+mOmwothY+SLiXJy7mKVpWs3Si0CoOMfeI9Od43Wic+jO+ZVv+crsm9QSNhUW9LXSeoPBYLXopthGuFQgdIxxhY+UDwlt1x5CZ1hX+NTUdt/OIvjKaDSmuOJfaIVNPKX+W18j/PLA2/kR44p5Sd8HbHngT/yTfNRWUXX14ZcL3wmX0+TLf8YO7CGT8yFE5zB3/gney25/OETRP9CtPDFe5jShAAAAAElFTkSuQmCC"},zoom:{image:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAJcEhZcwAADsMAAA7DAcdvqGQAAALWSURBVEhLvZZLaBNRFIabyftBIgEfqCCBoCC6MYqiXYiIj4U76U4X7sUHbhQhUBfixhZEUBDB16YuFERaUaQLK7ooCOJj4UKtYEFU0EptShO/A9Ph3js3k8lo/eHnP7n3nP/M3LlzMz1hkUwmNziOcyKRSFyFt+LxeD/c2Wq1Ym7Kv0M2m11Os1OxWGycn1OwZXCGuXfwIhezkd9/jRgNT2L4ldhs1pbkX5OLJe4euVxuGQaPCa3mnUjtJx7BDuKusJTCV6jVVGHTMuYRjxma7yIOhTgFY6jNaAKew2xPKpVay9ganmkvj+M448/MfJdT5K5Gg4HJacRngPFgqVRaRNwW1B4i7yehWfsEDdz1K+A01AoxPIqGAiuwGfkOTY8+1A6u7AyiFTB2Hu0KPIrdiOnzHLWDybeImvy+Wq2mZa5bUHsD0Zpz+KxHdWQymV6kAb1ElqeORgJLvgnRdj1+R1AfzkIvSUjxVjQSarVakrueIPT8+H1F5jSUy+WXiJrUYBVWyVxU4PEU8TzhfaijUqnMIWrjaY492eWRwdKOIqrnIxnXwLLeRLwk2GQzrEMjg0avEbXxkIxr4OoOImpj2QwyFgms1koa/SZUG8s+0iGnEhNfCNXEhzIXBVz0McTzEvJ+70P9oNFtxEzei3aFYrFYxmuSUPWSv9Yi9IMm2xE1We56Mp1OV4nDwqFmBDV9gk9AEh4gZtFHNt8W4kAUCoXF5MorY9Z/kDni9nDv7hc0i2fhgLvTtX8a99PoMPPagTFPxofRzmDJ9yM+AyEmTfgGysYbQcfhDzPPJDmX0c7gDg4gs9BqFIWhm/Nct5H8gtBq1I7UfIbtvmIuoaGQcp+fdpbbSM43eEH5wrwLbXmhm/fU63VHXjcuok7hEByFY/AeHGC8L5/PL3HT5xGH1uYwfPOICGo+CBcU0vwO1BqzUqILDl/z/9VYIMfpddiAc47jDP8BsUpb13wOLRwAAAAASUVORK5CYII="},menu:{image:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAeCAYAAABE4bxTAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAJcEhZcwAADsMAAA7DAcdvqGQAAADoSURBVFhH7dc9CsJAFATgRxIIBCwCqZKATX5sbawsY2MvWOtF9AB6AU8gguAJbD2AnZ2VXQT/Ko2TYGCL2OYtYQc+BuYA+1hCtnCVwMm27SGaXpDJIAiCvCkVR05hGOZNN3HkFMdx3nQRR06+76/R1IcFLJlNQEWlmWlBTwJtKLKHynehZqnjOGM0PYWRVXk61C37p7xlZ3Hk5HneCk1dmMH811xGoKLSzDiQwIBZB4ocoPJdqNkDt2yKlueWRVGUtzy3rPwo3sWRU3nLjuLI6OO67oZM00wMw3hrmpZx0XU9syxrR0T0BeMpb9dneSR2AAAAAElFTkSuQmCC"}};
l.prototype.setOptions=function(J,y){if(ab[this._defaultsKey]){var H=ab[this._defaultsKey],F;
for(F in H){"publicProperties"!==F&&H.hasOwnProperty(F)&&(this[F]=J&&F in J?J[F]:y&&F in y?y[F]:H[F])
}}else{aD&&window.console&&console.log("defaults not set")
}};
l.prototype.get=function(v){var s=ab[this._defaultsKey];
if("options"===v){return this.options&&this.options._isPlaceholder?null:this.options
}if(s.hasOwnProperty(v)||s.publicProperties&&s.publicProperties.hasOwnProperty(v)){return this[v]
}window.console&&window.console.log('Property "'+v+"\" doesn't exist. Please check for typo.")
};
l.prototype.set=function(J,y,H){H="undefined"===typeof H?!0:H;
var F=ab[this._defaultsKey];
if("options"===J){this.createUserOptions(y)
}else{if(F.hasOwnProperty(J)||F.publicProperties&&F.publicProperties.hasOwnProperty(J)&&"readWrite"===F.publicProperties[J]){this.options._isPlaceholder&&this.createUserOptions(),this.options[J]=y
}else{window.console&&(F.publicProperties&&F.publicProperties.hasOwnProperty(J)&&"readOnly"===F.publicProperties[J]?window.console.log('Property "'+J+'" is read-only.'):window.console.log('Property "'+J+"\" doesn't exist. Please check for typo."));
return
}}H&&(this.stockChart||this.chart||this).render()
};
l.prototype.addTo=function(N,F,J,H){H="undefined"===typeof H?!0:H;
var Q=ab[this._defaultsKey];
Q.hasOwnProperty(N)||Q.publicProperties&&Q.publicProperties.hasOwnProperty(N)&&"readWrite"===Q.publicProperties[N]?(this.options._isPlaceholder&&this.createUserOptions(),"undefined"===typeof this.options[N]&&(this.options[N]=[]),N=this.options[N],J="undefined"===typeof J||null===J?N.length:J,N.splice(J,0,F),H&&(this.stockChart||this.chart||this).render()):window.console&&(Q.publicProperties&&Q.publicProperties.hasOwnProperty(N)&&"readOnly"===Q.publicProperties[N]?window.console.log('Property "'+N+'" is read-only.'):window.console.log('Property "'+N+"\" doesn't exist. Please check for typo."))
};
l.prototype.createUserOptions=function(F){if("undefined"!==typeof F||this.options._isPlaceholder){if(this.parent.options._isPlaceholder&&this.parent.createUserOptions(),this.isOptionsInArray){this.parent.options[this.optionsName]||(this.parent.options[this.optionsName]=[]);
var v=this.parent.options[this.optionsName],y=v.length;
this.options._isPlaceholder||(ac(v),y=v.indexOf(this.options));
this.options="undefined"===typeof F?{}:F;
v[y]=this.options
}else{this.options="undefined"===typeof F?{}:F,F=this.parent.options,this.optionsName?v=this.optionsName:(v=this._defaultsKey)&&0!==v.length?(y=v.charAt(0).toLowerCase(),1<v.length&&(y=y.concat(v.slice(1))),v=y):v=void 0,F[v]=this.options
}}};
l.prototype.remove=function(F){F="undefined"===typeof F?!0:F;
if(this.isOptionsInArray){var v=this.parent.options[this.optionsName];
ac(v);
var y=v.indexOf(this.options);
0<=y&&v.splice(y,1)
}else{delete this.parent.options[this.optionsName]
}F&&(this.stockChart||this.chart||this).render()
};
l.prototype.updateOption=function(Q){!ab[this._defaultsKey]&&(aD&&window.console)&&console.log("defaults not set");
var s=ab[this._defaultsKey],J={},T=this[Q],R=this._themeOptionsKey,N=this._index;
this.theme&&aB(this.parent)&&aB(R)&&aB(N)?J=aB(this.predefinedThemes[this.theme])?this.predefinedThemes.light1:this.predefinedThemes[this.theme]:this.parent&&(this.parent.themeOptions&&this.parent.themeOptions[R])&&(null===N?J=this.parent.themeOptions[R]:0<this.parent.themeOptions[R].length&&(J=Math.min(this.parent.themeOptions[R].length-1,N),J=this.parent.themeOptions[R][J]));
this.themeOptions=J;
Q in s&&(T=Q in this.options?this.options[Q]:J&&Q in J?J[Q]:s[Q]);
if(T===this[Q]){return !1
}this[Q]=T;
return !0
};
l.prototype.trackChanges=function(s){if(!this.sessionVariables){throw"Session Variable Store not set"
}this.sessionVariables[s]=this.options[s]
};
l.prototype.isBeingTracked=function(s){this.options._oldOptions||(this.options._oldOptions={});
return this.options._oldOptions[s]?!0:!1
};
l.prototype.hasOptionChanged=function(s){if(!this.sessionVariables){throw"Session Variable Store not set"
}return this.sessionVariables[s]!==this.options[s]
};
l.prototype.addEventListener=function(F,v,y){F&&v&&(this._eventListeners[F]=this._eventListeners[F]||[],this._eventListeners[F].push({context:y||this,eventHandler:v}))
};
l.prototype.removeEventListener=function(J,y){if(J&&y&&this._eventListeners[J]){for(var H=this._eventListeners[J],F=0;
F<H.length;
F++){if(H[F].eventHandler===y){H[F].splice(F,1);
break
}}}};
l.prototype.removeAllEventListeners=function(){this._eventListeners=[]
};
l.prototype.dispatchEvent=function(N,F,J){if(N&&this._eventListeners[N]){F=F||{};
for(var H=this._eventListeners[N],Q=0;
Q<H.length;
Q++){H[Q].eventHandler.call(H[Q].context,F)
}}"function"===typeof this[N]&&this[N].call(J||this.chart,F)
};
o.prototype.registerSpace=function(v,s){"top"===v?this._topOccupied+=s.height:"bottom"===v?this._bottomOccupied+=s.height:"left"===v?this._leftOccupied+=s.width:"right"===v&&(this._rightOccupied+=s.width)
};
o.prototype.unRegisterSpace=function(v,s){"top"===v?this._topOccupied-=s.height:"bottom"===v?this._bottomOccupied-=s.height:"left"===v?this._leftOccupied-=s.width:"right"===v&&(this._rightOccupied-=s.width)
};
o.prototype.getFreeSpace=function(){return{x1:this._x1+this._leftOccupied,y1:this._y1+this._topOccupied,x2:this._x2-this._rightOccupied,y2:this._y2-this._bottomOccupied,width:this._x2-this._x1-this._rightOccupied-this._leftOccupied,height:this._y2-this._y1-this._bottomOccupied-this._topOccupied}
};
o.prototype.reset=function(){this._rightOccupied=this._leftOccupied=this._bottomOccupied=this._topOccupied=this._padding
};
k(au,l);
au.prototype._initialize=function(){aB(this.padding)||"object"!==typeof this.padding?this.topPadding=this.rightPadding=this.bottomPadding=this.leftPadding=Number(this.padding)|0:(this.topPadding=aB(this.padding.top)?0:Number(this.padding.top)|0,this.rightPadding=aB(this.padding.right)?0:Number(this.padding.right)|0,this.bottomPadding=aB(this.padding.bottom)?0:Number(this.padding.bottom)|0,this.leftPadding=aB(this.padding.left)?0:Number(this.padding.left)|0)
};
au.prototype.render=function(Q){if(0!==this.fontSize){Q&&this.ctx.save();
var H=this.ctx.font;
this.ctx.textBaseline=this.textBaseline;
var N=0;
this._isDirty&&this.measureText(this.ctx);
this.ctx.translate(this.x,this.y+N);
"middle"===this.textBaseline&&(N=-this._lineHeight/2);
this.ctx.font=this._getFontString();
this.ctx.rotate(Math.PI/180*this.angle);
var J=0,T=this.topPadding,R=null;
this.ctx.roundRect||az(this.ctx);
(0<this.borderThickness&&this.borderColor||this.backgroundColor)&&this.ctx.roundRect(0,N,this.width,this.height,this.cornerRadius,this.borderThickness,this.backgroundColor,this.borderColor);
this.ctx.fillStyle=this.fontColor;
for(N=0;
N<this._wrappedText.lines.length;
N++){R=this._wrappedText.lines[N];
if("right"===this.horizontalAlign||"right"===this.textAlign){J=this.width-R.width-this.rightPadding
}else{if("left"===this.horizontalAlign||"left"===this.textAlign){J=this.leftPadding
}else{if("center"===this.horizontalAlign||"center"===this.textAlign){J=(this.width-(this.leftPadding+this.rightPadding))/2-R.width/2+this.leftPadding
}}}this.ctx.fillText(R.text,J,T);
T+=R.height
}this.ctx.font=H;
Q&&this.ctx.restore()
}};
au.prototype.setText=function(){}