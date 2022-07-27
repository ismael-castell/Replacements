/*! jQuery v1.12.4 | (c) jQuery Foundation | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=a.document,e=c.slice,f=c.concat,g=c.push,h=c.indexOf,i={},j=i.toString,k=i.hasOwnProperty,l={},m="1.12.4",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return e.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:e.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a){return n.each(this,a)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(e.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:g,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],g!==c&&(j&&c&&(n.isPlainObject(c)||(b=n.isArray(c)))?(b?(b=!1,f=a&&n.isArray(a)?a:[]):f=a&&n.isPlainObject(a)?a:{},g[d]=n.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray||function(a){return"array"===n.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){var b=a&&a.toString();return!n.isArray(a)&&b-parseFloat(b)+1>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==n.type(a)||a.nodeType||n.isWindow(a))return!1;try{if(a.constructor&&!k.call(a,"constructor")&&!k.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(!l.ownFirst)for(b in a)return k.call(a,b);for(b in a);return void 0===b||k.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?i[j.call(a)]||"object":typeof a},globalEval:function(b){b&&n.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b){var c,d=0;if(s(a)){for(c=a.length;c>d;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):g.call(c,a)),c},inArray:function(a,b,c){var d;if(b){if(h)return h.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=+b.length,d=0,e=a.length;while(c>d)a[e++]=b[d++];if(c!==c)while(void 0!==b[d])a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,g=0,h=[];if(s(a))for(d=a.length;d>g;g++)e=b(a[g],g,c),null!=e&&h.push(e);else for(g in a)e=b(a[g],g,c),null!=e&&h.push(e);return f.apply([],h)},guid:1,proxy:function(a,b){var c,d,f;return"string"==typeof b&&(f=a[b],b=a,a=f),n.isFunction(a)?(c=e.call(arguments,2),d=function(){return a.apply(b||this,c.concat(e.call(arguments)))},d.guid=a.guid=a.guid||n.guid++,d):void 0},now:function(){return+new Date},support:l}),"function"==typeof Symbol&&(n.fn[Symbol.iterator]=c[Symbol.iterator]),n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){i["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=!!a&&"length"in a&&a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ga(),z=ga(),A=ga(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+M+"))|)"+L+"*\\]",O=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+N+")*)|.*)\\)|)",P=new RegExp(L+"+","g"),Q=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),R=new RegExp("^"+L+"*,"+L+"*"),S=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),T=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),U=new RegExp(O),V=new RegExp("^"+M+"$"),W={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M+"|[*])"),ATTR:new RegExp("^"+N),PSEUDO:new RegExp("^"+O),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},X=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Z=/^[^{]+\{\s*\[native \w/,$=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,_=/[+~]/,aa=/'|\\/g,ba=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),ca=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},da=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(ea){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fa(a,b,d,e){var f,h,j,k,l,o,r,s,w=b&&b.ownerDocument,x=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==x&&9!==x&&11!==x)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==x&&(o=$.exec(a)))if(f=o[1]){if(9===x){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(w&&(j=w.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(o[2])return H.apply(d,b.getElementsByTagName(a)),d;if((f=o[3])&&c.getElementsByClassName&&b.getElementsByClassName)return H.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==x)w=b,s=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(aa,"\\$&"):b.setAttribute("id",k=u),r=g(a),h=r.length,l=V.test(k)?"#"+k:"[id='"+k+"']";while(h--)r[h]=l+" "+qa(r[h]);s=r.join(","),w=_.test(a)&&oa(b.parentNode)||b}if(s)try{return H.apply(d,w.querySelectorAll(s)),d}catch(y){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(Q,"$1"),b,d,e)}function ga(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ha(a){return a[u]=!0,a}function ia(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ja(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function ka(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function la(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function na(a){return ha(function(b){return b=+b,ha(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function oa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=fa.support={},f=fa.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fa.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ia(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ia(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Z.test(n.getElementsByClassName),c.getById=ia(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return"undefined"!=typeof b.getElementsByClassName&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=Z.test(n.querySelectorAll))&&(ia(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ia(function(a){var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Z.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ia(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",O)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Z.test(o.compareDocumentPosition),t=b||Z.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return ka(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?ka(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},fa.matches=function(a,b){return fa(a,null,null,b)},fa.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(T,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fa(b,n,null,[a]).length>0},fa.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fa.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fa.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fa.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fa.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fa.selectors={cacheLength:50,createPseudo:ha,match:W,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ba,ca),a[3]=(a[3]||a[4]||a[5]||"").replace(ba,ca),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fa.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fa.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return W.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&U.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ba,ca).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fa.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(P," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fa.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ha(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ha(function(a){var b=[],c=[],d=h(a.replace(Q,"$1"));return d[u]?ha(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ha(function(a){return function(b){return fa(a,b).length>0}}),contains:ha(function(a){return a=a.replace(ba,ca),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ha(function(a){return V.test(a||"")||fa.error("unsupported lang: "+a),a=a.replace(ba,ca).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Y.test(a.nodeName)},input:function(a){return X.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:na(function(){return[0]}),last:na(function(a,b){return[b-1]}),eq:na(function(a,b,c){return[0>c?c+b:c]}),even:na(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:na(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:na(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:na(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=la(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=ma(b);function pa(){}pa.prototype=d.filters=d.pseudos,d.setFilters=new pa,g=fa.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=R.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=S.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(Q," ")}),h=h.slice(c.length));for(g in d.filter)!(e=W[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fa.error(a):z(a,i).slice(0)};function qa(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function ra(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j,k=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(j=b[u]||(b[u]={}),i=j[b.uniqueID]||(j[b.uniqueID]={}),(h=i[d])&&h[0]===w&&h[1]===f)return k[2]=h[2];if(i[d]=k,k[2]=a(b,c,g))return!0}}}function sa(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ta(a,b,c){for(var d=0,e=b.length;e>d;d++)fa(a,b[d],c);return c}function ua(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function va(a,b,c,d,e,f){return d&&!d[u]&&(d=va(d)),e&&!e[u]&&(e=va(e,f)),ha(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ta(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ua(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ua(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ua(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function wa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ra(function(a){return a===b},h,!0),l=ra(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[ra(sa(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return va(i>1&&sa(m),i>1&&qa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(Q,"$1"),c,e>i&&wa(a.slice(i,e)),f>e&&wa(a=a.slice(e)),f>e&&qa(a))}m.push(c)}return sa(m)}function xa(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=F.call(i));u=ua(u)}H.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&fa.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ha(f):f}return h=fa.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xa(e,d)),f.selector=a}return f},i=fa.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ba,ca),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=W.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ba,ca),_.test(j[0].type)&&oa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qa(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,!b||_.test(a)&&oa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ia(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ia(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ja("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ia(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ja("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ia(function(a){return null==a.getAttribute("disabled")})||ja(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fa}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.uniqueSort=n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},v=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},w=n.expr.match.needsContext,x=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,y=/^.[^:#\[\.,]*$/;function z(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(y.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return n.inArray(a,b)>-1!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;e>b;b++)if(n.contains(d[b],this))return!0}));for(b=0;e>b;b++)n.find(a,d[b],c);return c=this.pushStack(e>1?n.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(z(this,a||[],!1))},not:function(a){return this.pushStack(z(this,a||[],!0))},is:function(a){return!!z(this,"string"==typeof a&&w.test(a)?n(a):a||[],!1).length}});var A,B=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=n.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||A,"string"==typeof a){if(e="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:B.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),x.test(e[1])&&n.isPlainObject(b))for(e in b)n.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}if(f=d.getElementById(e[2]),f&&f.parentNode){if(f.id!==e[2])return A.find(a);this.length=1,this[0]=f}return this.context=d,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof c.ready?c.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};C.prototype=n.fn,A=n(d);var D=/^(?:parents|prev(?:Until|All))/,E={children:!0,contents:!0,next:!0,prev:!0};n.fn.extend({has:function(a){var b,c=n(a,this),d=c.length;return this.filter(function(){for(b=0;d>b;b++)if(n.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=w.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?n.inArray(this[0],n(a)):n.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.uniqueSort(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function F(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return u(a,"parentNode")},parentsUntil:function(a,b,c){return u(a,"parentNode",c)},next:function(a){return F(a,"nextSibling")},prev:function(a){return F(a,"previousSibling")},nextAll:function(a){return u(a,"nextSibling")},prevAll:function(a){return u(a,"previousSibling")},nextUntil:function(a,b,c){return u(a,"nextSibling",c)},prevUntil:function(a,b,c){return u(a,"previousSibling",c)},siblings:function(a){return v((a.parentNode||{}).firstChild,a)},children:function(a){return v(a.firstChild)},contents:function(a){return n.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(E[a]||(e=n.uniqueSort(e)),D.test(a)&&(e=e.reverse())),this.pushStack(e)}});var G=/\S+/g;function H(a){var b={};return n.each(a.match(G)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?H(a):n.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){n.each(b,function(b,c){n.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==n.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return n.each(arguments,function(a,b){var c;while((c=n.inArray(b,f,c))>-1)f.splice(c,1),h>=c&&h--}),this},has:function(a){return a?n.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=!0,c||j.disable(),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().progress(c.notify).done(c.resolve).fail(c.reject):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=e.call(arguments),d=c.length,f=1!==d||a&&n.isFunction(a.promise)?d:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(d){b[a]=this,c[a]=arguments.length>1?e.call(arguments):d,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(d>1)for(i=new Array(d),j=new Array(d),k=new Array(d);d>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().progress(h(b,j,i)).done(h(b,k,c)).fail(g.reject):--f;return f||g.resolveWith(k,c),g.promise()}});var I;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(I.resolveWith(d,[n]),n.fn.triggerHandler&&(n(d).triggerHandler("ready"),n(d).off("ready"))))}});function J(){d.addEventListener?(d.removeEventListener("DOMContentLoaded",K),a.removeEventListener("load",K)):(d.detachEvent("onreadystatechange",K),a.detachEvent("onload",K))}function K(){(d.addEventListener||"load"===a.event.type||"complete"===d.readyState)&&(J(),n.ready())}n.ready.promise=function(b){if(!I)if(I=n.Deferred(),"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll)a.setTimeout(n.ready);else if(d.addEventListener)d.addEventListener("DOMContentLoaded",K),a.addEventListener("load",K);else{d.attachEvent("onreadystatechange",K),a.attachEvent("onload",K);var c=!1;try{c=null==a.frameElement&&d.documentElement}catch(e){}c&&c.doScroll&&!function f(){if(!n.isReady){try{c.doScroll("left")}catch(b){return a.setTimeout(f,50)}J(),n.ready()}}()}return I.promise(b)},n.ready.promise();var L;for(L in n(l))break;l.ownFirst="0"===L,l.inlineBlockNeedsLayout=!1,n(function(){var a,b,c,e;c=d.getElementsByTagName("body")[0],c&&c.style&&(b=d.createElement("div"),e=d.createElement("div"),e.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(e).appendChild(b),"undefined"!=typeof b.style.zoom&&(b.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",l.inlineBlockNeedsLayout=a=3===b.offsetWidth,a&&(c.style.zoom=1)),c.removeChild(e))}),function(){var a=d.createElement("div");l.deleteExpando=!0;try{delete a.test}catch(b){l.deleteExpando=!1}a=null}();var M=function(a){var b=n.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b},N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(O,"-$1").toLowerCase();if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}n.data(a,b,c)}else c=void 0;
}return c}function Q(a){var b;for(b in a)if(("data"!==b||!n.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;return!0}function R(a,b,d,e){if(M(a)){var f,g,h=n.expando,i=a.nodeType,j=i?n.cache:a,k=i?a[h]:a[h]&&h;if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b)return k||(k=i?a[h]=c.pop()||n.guid++:h),j[k]||(j[k]=i?{}:{toJSON:n.noop}),"object"!=typeof b&&"function"!=typeof b||(e?j[k]=n.extend(j[k],b):j[k].data=n.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[n.camelCase(b)]=d),"string"==typeof b?(f=g[b],null==f&&(f=g[n.camelCase(b)])):f=g,f}}function S(a,b,c){if(M(a)){var d,e,f=a.nodeType,g=f?n.cache:a,h=f?a[n.expando]:n.expando;if(g[h]){if(b&&(d=c?g[h]:g[h].data)){n.isArray(b)?b=b.concat(n.map(b,n.camelCase)):b in d?b=[b]:(b=n.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;while(e--)delete d[b[e]];if(c?!Q(d):!n.isEmptyObject(d))return}(c||(delete g[h].data,Q(g[h])))&&(f?n.cleanData([a],!0):l.deleteExpando||g!=g.window?delete g[h]:g[h]=void 0)}}}n.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?n.cache[a[n.expando]]:a[n.expando],!!a&&!Q(a)},data:function(a,b,c){return R(a,b,c)},removeData:function(a,b){return S(a,b)},_data:function(a,b,c){return R(a,b,c,!0)},_removeData:function(a,b){return S(a,b,!0)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=n.data(f),1===f.nodeType&&!n._data(f,"parsedAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));n._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){n.data(this,a)}):arguments.length>1?this.each(function(){n.data(this,a,b)}):f?P(f,a,n.data(f,a)):void 0},removeData:function(a){return this.each(function(){n.removeData(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=n._data(a,b),c&&(!d||n.isArray(c)?d=n._data(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return n._data(a,c)||n._data(a,c,{empty:n.Callbacks("once memory").add(function(){n._removeData(a,b+"queue"),n._removeData(a,c)})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=n._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}}),function(){var a;l.shrinkWrapBlocks=function(){if(null!=a)return a;a=!1;var b,c,e;return c=d.getElementsByTagName("body")[0],c&&c.style?(b=d.createElement("div"),e=d.createElement("div"),e.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(e).appendChild(b),"undefined"!=typeof b.style.zoom&&(b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",b.appendChild(d.createElement("div")).style.width="5px",a=3!==b.offsetWidth),c.removeChild(e),a):void 0}}();var T=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,U=new RegExp("^(?:([+-])=|)("+T+")([a-z%]*)$","i"),V=["Top","Right","Bottom","Left"],W=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)};function X(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return n.css(a,b,"")},i=h(),j=c&&c[3]||(n.cssNumber[b]?"":"px"),k=(n.cssNumber[b]||"px"!==j&&+i)&&U.exec(n.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,n.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var Y=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)Y(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},Z=/^(?:checkbox|radio)$/i,$=/<([\w:-]+)/,_=/^$|\/(?:java|ecma)script/i,aa=/^\s+/,ba="abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";function ca(a){var b=ba.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}!function(){var a=d.createElement("div"),b=d.createDocumentFragment(),c=d.createElement("input");a.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",l.leadingWhitespace=3===a.firstChild.nodeType,l.tbody=!a.getElementsByTagName("tbody").length,l.htmlSerialize=!!a.getElementsByTagName("link").length,l.html5Clone="<:nav></:nav>"!==d.createElement("nav").cloneNode(!0).outerHTML,c.type="checkbox",c.checked=!0,b.appendChild(c),l.appendChecked=c.checked,a.innerHTML="<textarea>x</textarea>",l.noCloneChecked=!!a.cloneNode(!0).lastChild.defaultValue,b.appendChild(a),c=d.createElement("input"),c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),a.appendChild(c),l.checkClone=a.cloneNode(!0).cloneNode(!0).lastChild.checked,l.noCloneEvent=!!a.addEventListener,a[n.expando]=1,l.attributes=!a.getAttribute(n.expando)}();var da={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:l.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]};da.optgroup=da.option,da.tbody=da.tfoot=da.colgroup=da.caption=da.thead,da.th=da.td;function ea(a,b){var c,d,e=0,f="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||n.nodeName(d,b)?f.push(d):n.merge(f,ea(d,b));return void 0===b||b&&n.nodeName(a,b)?n.merge([a],f):f}function fa(a,b){for(var c,d=0;null!=(c=a[d]);d++)n._data(c,"globalEval",!b||n._data(b[d],"globalEval"))}var ga=/<|&#?\w+;/,ha=/<tbody/i;function ia(a){Z.test(a.type)&&(a.defaultChecked=a.checked)}function ja(a,b,c,d,e){for(var f,g,h,i,j,k,m,o=a.length,p=ca(b),q=[],r=0;o>r;r++)if(g=a[r],g||0===g)if("object"===n.type(g))n.merge(q,g.nodeType?[g]:g);else if(ga.test(g)){i=i||p.appendChild(b.createElement("div")),j=($.exec(g)||["",""])[1].toLowerCase(),m=da[j]||da._default,i.innerHTML=m[1]+n.htmlPrefilter(g)+m[2],f=m[0];while(f--)i=i.lastChild;if(!l.leadingWhitespace&&aa.test(g)&&q.push(b.createTextNode(aa.exec(g)[0])),!l.tbody){g="table"!==j||ha.test(g)?"<table>"!==m[1]||ha.test(g)?0:i:i.firstChild,f=g&&g.childNodes.length;while(f--)n.nodeName(k=g.childNodes[f],"tbody")&&!k.childNodes.length&&g.removeChild(k)}n.merge(q,i.childNodes),i.textContent="";while(i.firstChild)i.removeChild(i.firstChild);i=p.lastChild}else q.push(b.createTextNode(g));i&&p.removeChild(i),l.appendChecked||n.grep(ea(q,"input"),ia),r=0;while(g=q[r++])if(d&&n.inArray(g,d)>-1)e&&e.push(g);else if(h=n.contains(g.ownerDocument,g),i=ea(p.appendChild(g),"script"),h&&fa(i),c){f=0;while(g=i[f++])_.test(g.type||"")&&c.push(g)}return i=null,p}!function(){var b,c,e=d.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(l[b]=c in a)||(e.setAttribute(c,"t"),l[b]=e.attributes[c].expando===!1);e=null}();var ka=/^(?:input|select|textarea)$/i,la=/^key/,ma=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,na=/^(?:focusinfocus|focusoutblur)$/,oa=/^([^.]*)(?:\.(.+)|)/;function pa(){return!0}function qa(){return!1}function ra(){try{return d.activeElement}catch(a){}}function sa(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)sa(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=qa;else if(!e)return a;return 1===f&&(g=e,e=function(a){return n().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=n.guid++)),a.each(function(){n.event.add(this,b,e,d,c)})}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=n._data(a);if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=n.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return"undefined"==typeof n||a&&n.event.triggered===a.type?void 0:n.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(G)||[""],h=b.length;while(h--)f=oa.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=n.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=n.event.special[o]||{},l=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},i),(m=g[o])||(m=g[o]=[],m.delegateCount=0,j.setup&&j.setup.call(a,d,p,k)!==!1||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,l):m.push(l),n.event.global[o]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=n.hasData(a)&&n._data(a);if(r&&(k=r.events)){b=(b||"").match(G)||[""],j=b.length;while(j--)if(h=oa.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=m.length;while(f--)g=m[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(m.splice(f,1),g.selector&&m.delegateCount--,l.remove&&l.remove.call(a,g));i&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete k[o])}else for(o in k)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(k)&&(delete r.handle,n._removeData(a,"events"))}},trigger:function(b,c,e,f){var g,h,i,j,l,m,o,p=[e||d],q=k.call(b,"type")?b.type:b,r=k.call(b,"namespace")?b.namespace.split("."):[];if(i=m=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!na.test(q+n.event.triggered)&&(q.indexOf(".")>-1&&(r=q.split("."),q=r.shift(),r.sort()),h=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=r.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:n.makeArray(c,[b]),l=n.event.special[q]||{},f||!l.trigger||l.trigger.apply(e,c)!==!1)){if(!f&&!l.noBubble&&!n.isWindow(e)){for(j=l.delegateType||q,na.test(j+q)||(i=i.parentNode);i;i=i.parentNode)p.push(i),m=i;m===(e.ownerDocument||d)&&p.push(m.defaultView||m.parentWindow||a)}o=0;while((i=p[o++])&&!b.isPropagationStopped())b.type=o>1?j:l.bindType||q,g=(n._data(i,"events")||{})[b.type]&&n._data(i,"handle"),g&&g.apply(i,c),g=h&&i[h],g&&g.apply&&M(i)&&(b.result=g.apply(i,c),b.result===!1&&b.preventDefault());if(b.type=q,!f&&!b.isDefaultPrevented()&&(!l._default||l._default.apply(p.pop(),c)===!1)&&M(e)&&h&&e[q]&&!n.isWindow(e)){m=e[h],m&&(e[h]=null),n.event.triggered=q;try{e[q]()}catch(s){}n.event.triggered=void 0,m&&(e[h]=m)}return b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,d,f,g,h=[],i=e.call(arguments),j=(n._data(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())a.rnamespace&&!a.rnamespace.test(g.namespace)||(a.handleObj=g,a.data=g.data,d=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==d&&(a.result=d)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&("click"!==a.type||isNaN(a.button)||a.button<1))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>-1:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[n.expando])return a;var b,c,e,f=a.type,g=a,h=this.fixHooks[f];h||(this.fixHooks[f]=h=ma.test(f)?this.mouseHooks:la.test(f)?this.keyHooks:{}),e=h.props?this.props.concat(h.props):this.props,a=new n.Event(g),b=e.length;while(b--)c=e[b],a[c]=g[c];return a.target||(a.target=g.srcElement||d),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,h.filter?h.filter(a,g):a},props:"altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,e,f,g=b.button,h=b.fromElement;return null==a.pageX&&null!=b.clientX&&(e=a.target.ownerDocument||d,f=e.documentElement,c=e.body,a.pageX=b.clientX+(f&&f.scrollLeft||c&&c.scrollLeft||0)-(f&&f.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(f&&f.scrollTop||c&&c.scrollTop||0)-(f&&f.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&h&&(a.relatedTarget=h===a.target?b.toElement:h),a.which||void 0===g||(a.which=1&g?1:2&g?3:4&g?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==ra()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===ra()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return n.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c){var d=n.extend(new n.Event,c,{type:a,isSimulated:!0});n.event.trigger(d,null,b),d.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=d.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)}:function(a,b,c){var d="on"+b;a.detachEvent&&("undefined"==typeof a[d]&&(a[d]=null),a.detachEvent(d,c))},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?pa:qa):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={constructor:n.Event,isDefaultPrevented:qa,isPropagationStopped:qa,isImmediatePropagationStopped:qa,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=pa,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=pa,a&&!this.isSimulated&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=pa,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||n.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),l.submit||(n.event.special.submit={setup:function(){return n.nodeName(this,"form")?!1:void n.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=n.nodeName(b,"input")||n.nodeName(b,"button")?n.prop(b,"form"):void 0;c&&!n._data(c,"submit")&&(n.event.add(c,"submit._submit",function(a){a._submitBubble=!0}),n._data(c,"submit",!0))})},postDispatch:function(a){a._submitBubble&&(delete a._submitBubble,this.parentNode&&!a.isTrigger&&n.event.simulate("submit",this.parentNode,a))},teardown:function(){return n.nodeName(this,"form")?!1:void n.event.remove(this,"._submit")}}),l.change||(n.event.special.change={setup:function(){return ka.test(this.nodeName)?("checkbox"!==this.type&&"radio"!==this.type||(n.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._justChanged=!0)}),n.event.add(this,"click._change",function(a){this._justChanged&&!a.isTrigger&&(this._justChanged=!1),n.event.simulate("change",this,a)})),!1):void n.event.add(this,"beforeactivate._change",function(a){var b=a.target;ka.test(b.nodeName)&&!n._data(b,"change")&&(n.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||n.event.simulate("change",this.parentNode,a)}),n._data(b,"change",!0))})},handle:function(a){var b=a.target;return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return n.event.remove(this,"._change"),!ka.test(this.nodeName)}}),l.focusin||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a))};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=n._data(d,b);e||d.addEventListener(a,c,!0),n._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=n._data(d,b)-1;e?n._data(d,b,e):(d.removeEventListener(a,c,!0),n._removeData(d,b))}}}),n.fn.extend({on:function(a,b,c,d){return sa(this,a,b,c,d)},one:function(a,b,c,d){return sa(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=qa),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var ta=/ jQuery\d+="(?:null|\d+)"/g,ua=new RegExp("<(?:"+ba+")[\\s/>]","i"),va=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,wa=/<script|<style|<link/i,xa=/checked\s*(?:[^=]|=\s*.checked.)/i,ya=/^true\/(.*)/,za=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,Aa=ca(d),Ba=Aa.appendChild(d.createElement("div"));function Ca(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function Da(a){return a.type=(null!==n.find.attr(a,"type"))+"/"+a.type,a}function Ea(a){var b=ya.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Fa(a,b){if(1===b.nodeType&&n.hasData(a)){var c,d,e,f=n._data(a),g=n._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)n.event.add(b,c,h[c][d])}g.data&&(g.data=n.extend({},g.data))}}function Ga(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!l.noCloneEvent&&b[n.expando]){e=n._data(b);for(d in e.events)n.removeEvent(b,d,e.handle);b.removeAttribute(n.expando)}"script"===c&&b.text!==a.text?(Da(b).text=a.text,Ea(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),l.html5Clone&&a.innerHTML&&!n.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&Z.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}}function Ha(a,b,c,d){b=f.apply([],b);var e,g,h,i,j,k,m=0,o=a.length,p=o-1,q=b[0],r=n.isFunction(q);if(r||o>1&&"string"==typeof q&&!l.checkClone&&xa.test(q))return a.each(function(e){var f=a.eq(e);r&&(b[0]=q.call(this,e,f.html())),Ha(f,b,c,d)});if(o&&(k=ja(b,a[0].ownerDocument,!1,a,d),e=k.firstChild,1===k.childNodes.length&&(k=e),e||d)){for(i=n.map(ea(k,"script"),Da),h=i.length;o>m;m++)g=k,m!==p&&(g=n.clone(g,!0,!0),h&&n.merge(i,ea(g,"script"))),c.call(a[m],g,m);if(h)for(j=i[i.length-1].ownerDocument,n.map(i,Ea),m=0;h>m;m++)g=i[m],_.test(g.type||"")&&!n._data(g,"globalEval")&&n.contains(j,g)&&(g.src?n._evalUrl&&n._evalUrl(g.src):n.globalEval((g.text||g.textContent||g.innerHTML||"").replace(za,"")));k=e=null}return a}function Ia(a,b,c){for(var d,e=b?n.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||n.cleanData(ea(d)),d.parentNode&&(c&&n.contains(d.ownerDocument,d)&&fa(ea(d,"script")),d.parentNode.removeChild(d));return a}n.extend({htmlPrefilter:function(a){return a.replace(va,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h,i=n.contains(a.ownerDocument,a);if(l.html5Clone||n.isXMLDoc(a)||!ua.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(Ba.innerHTML=a.outerHTML,Ba.removeChild(f=Ba.firstChild)),!(l.noCloneEvent&&l.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(d=ea(f),h=ea(a),g=0;null!=(e=h[g]);++g)d[g]&&Ga(e,d[g]);if(b)if(c)for(h=h||ea(a),d=d||ea(f),g=0;null!=(e=h[g]);g++)Fa(e,d[g]);else Fa(a,f);return d=ea(f,"script"),d.length>0&&fa(d,!i&&ea(a,"script")),d=h=e=null,f},cleanData:function(a,b){for(var d,e,f,g,h=0,i=n.expando,j=n.cache,k=l.attributes,m=n.event.special;null!=(d=a[h]);h++)if((b||M(d))&&(f=d[i],g=f&&j[f])){if(g.events)for(e in g.events)m[e]?n.event.remove(d,e):n.removeEvent(d,e,g.handle);j[f]&&(delete j[f],k||"undefined"==typeof d.removeAttribute?d[i]=void 0:d.removeAttribute(i),c.push(f))}}}),n.fn.extend({domManip:Ha,detach:function(a){return Ia(this,a,!0)},remove:function(a){return Ia(this,a)},text:function(a){return Y(this,function(a){return void 0===a?n.text(this):this.empty().append((this[0]&&this[0].ownerDocument||d).createTextNode(a))},null,a,arguments.length)},append:function(){return Ha(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ca(this,a);b.appendChild(a)}})},prepend:function(){return Ha(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ca(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return Ha(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return Ha(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){1===a.nodeType&&n.cleanData(ea(a,!1));while(a.firstChild)a.removeChild(a.firstChild);a.options&&n.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return Y(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(ta,""):void 0;if("string"==typeof a&&!wa.test(a)&&(l.htmlSerialize||!ua.test(a))&&(l.leadingWhitespace||!aa.test(a))&&!da[($.exec(a)||["",""])[1].toLowerCase()]){a=n.htmlPrefilter(a);try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(ea(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return Ha(this,arguments,function(b){var c=this.parentNode;n.inArray(this,a)<0&&(n.cleanData(ea(this)),c&&c.replaceChild(b,this))},a)}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=0,e=[],f=n(a),h=f.length-1;h>=d;d++)c=d===h?this:this.clone(!0),n(f[d])[b](c),g.apply(e,c.get());return this.pushStack(e)}});var Ja,Ka={HTML:"block",BODY:"block"};function La(a,b){var c=n(b.createElement(a)).appendTo(b.body),d=n.css(c[0],"display");return c.detach(),d}function Ma(a){var b=d,c=Ka[a];return c||(c=La(a,b),"none"!==c&&c||(Ja=(Ja||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Ja[0].contentWindow||Ja[0].contentDocument).document,b.write(),b.close(),c=La(a,b),Ja.detach()),Ka[a]=c),c}var Na=/^margin/,Oa=new RegExp("^("+T+")(?!px)[a-z%]+$","i"),Pa=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e},Qa=d.documentElement;!function(){var b,c,e,f,g,h,i=d.createElement("div"),j=d.createElement("div");if(j.style){j.style.cssText="float:left;opacity:.5",l.opacity="0.5"===j.style.opacity,l.cssFloat=!!j.style.cssFloat,j.style.backgroundClip="content-box",j.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===j.style.backgroundClip,i=d.createElement("div"),i.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",j.innerHTML="",i.appendChild(j),l.boxSizing=""===j.style.boxSizing||""===j.style.MozBoxSizing||""===j.style.WebkitBoxSizing,n.extend(l,{reliableHiddenOffsets:function(){return null==b&&k(),f},boxSizingReliable:function(){return null==b&&k(),e},pixelMarginRight:function(){return null==b&&k(),c},pixelPosition:function(){return null==b&&k(),b},reliableMarginRight:function(){return null==b&&k(),g},reliableMarginLeft:function(){return null==b&&k(),h}});function k(){var k,l,m=d.documentElement;m.appendChild(i),j.style.cssText="-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",b=e=h=!1,c=g=!0,a.getComputedStyle&&(l=a.getComputedStyle(j),b="1%"!==(l||{}).top,h="2px"===(l||{}).marginLeft,e="4px"===(l||{width:"4px"}).width,j.style.marginRight="50%",c="4px"===(l||{marginRight:"4px"}).marginRight,k=j.appendChild(d.createElement("div")),k.style.cssText=j.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",k.style.marginRight=k.style.width="0",j.style.width="1px",g=!parseFloat((a.getComputedStyle(k)||{}).marginRight),j.removeChild(k)),j.style.display="none",f=0===j.getClientRects().length,f&&(j.style.display="",j.innerHTML="<table><tr><td></td><td>t</td></tr></table>",j.childNodes[0].style.borderCollapse="separate",k=j.getElementsByTagName("td"),k[0].style.cssText="margin:0;border:0;padding:0;display:none",f=0===k[0].offsetHeight,f&&(k[0].style.display="",k[1].style.display="none",f=0===k[0].offsetHeight)),m.removeChild(i)}}}();var Ra,Sa,Ta=/^(top|right|bottom|left)$/;a.getComputedStyle?(Ra=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)},Sa=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ra(a),g=c?c.getPropertyValue(b)||c[b]:void 0,""!==g&&void 0!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),c&&!l.pixelMarginRight()&&Oa.test(g)&&Na.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f),void 0===g?g:g+""}):Qa.currentStyle&&(Ra=function(a){return a.currentStyle},Sa=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ra(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Oa.test(g)&&!Ta.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"});function Ua(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Va=/alpha\([^)]*\)/i,Wa=/opacity\s*=\s*([^)]*)/i,Xa=/^(none|table(?!-c[ea]).+)/,Ya=new RegExp("^("+T+")(.*)$","i"),Za={position:"absolute",visibility:"hidden",display:"block"},$a={letterSpacing:"0",fontWeight:"400"},_a=["Webkit","O","Moz","ms"],ab=d.createElement("div").style;function bb(a){if(a in ab)return a;var b=a.charAt(0).toUpperCase()+a.slice(1),c=_a.length;while(c--)if(a=_a[c]+b,a in ab)return a}function cb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=n._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&W(d)&&(f[g]=n._data(d,"olddisplay",Ma(d.nodeName)))):(e=W(d),(c&&"none"!==c||!e)&&n._data(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function db(a,b,c){var d=Ya.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function eb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+V[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+V[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+V[f]+"Width",!0,e))):(g+=n.css(a,"padding"+V[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+V[f]+"Width",!0,e)));return g}function fb(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Ra(a),g=l.boxSizing&&"border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Sa(a,b,f),(0>e||null==e)&&(e=a.style[b]),Oa.test(e))return e;d=g&&(l.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+eb(a,b,c||(g?"border":"content"),d,f)+"px"}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Sa(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":l.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;if(b=n.cssProps[h]||(n.cssProps[h]=bb(h)||h),g=n.cssHooks[b]||n.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=U.exec(c))&&e[1]&&(c=X(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(n.cssNumber[h]?"":"px")),l.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=bb(h)||h),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Sa(a,b,d)),"normal"===f&&b in $a&&(f=$a[b]),""===c||c?(e=parseFloat(f),c===!0||isFinite(e)?e||0:f):f}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?Xa.test(n.css(a,"display"))&&0===a.offsetWidth?Pa(a,Za,function(){return fb(a,b,d)}):fb(a,b,d):void 0},set:function(a,c,d){var e=d&&Ra(a);return db(a,c,d?eb(a,b,d,l.boxSizing&&"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),l.opacity||(n.cssHooks.opacity={get:function(a,b){return Wa.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=n.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===n.trim(f.replace(Va,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Va.test(f)?f.replace(Va,e):f+" "+e)}}),n.cssHooks.marginRight=Ua(l.reliableMarginRight,function(a,b){return b?Pa(a,{display:"inline-block"},Sa,[a,"marginRight"]):void 0}),n.cssHooks.marginLeft=Ua(l.reliableMarginLeft,function(a,b){return b?(parseFloat(Sa(a,"marginLeft"))||(n.contains(a.ownerDocument,a)?a.getBoundingClientRect().left-Pa(a,{
marginLeft:0},function(){return a.getBoundingClientRect().left}):0))+"px":void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+V[d]+b]=f[d]||f[d-2]||f[0];return e}},Na.test(a)||(n.cssHooks[a+b].set=db)}),n.fn.extend({css:function(a,b){return Y(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=Ra(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return cb(this,!0)},hide:function(){return cb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){W(this)?n(this).show():n(this).hide()})}});function gb(a,b,c,d,e){return new gb.prototype.init(a,b,c,d,e)}n.Tween=gb,gb.prototype={constructor:gb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||n.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=gb.propHooks[this.prop];return a&&a.get?a.get(this):gb.propHooks._default.get(this)},run:function(a){var b,c=gb.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):gb.propHooks._default.set(this),this}},gb.prototype.init.prototype=gb.prototype,gb.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[n.cssProps[a.prop]]&&!n.cssHooks[a.prop]?a.elem[a.prop]=a.now:n.style(a.elem,a.prop,a.now+a.unit)}}},gb.propHooks.scrollTop=gb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},n.fx=gb.prototype.init,n.fx.step={};var hb,ib,jb=/^(?:toggle|show|hide)$/,kb=/queueHooks$/;function lb(){return a.setTimeout(function(){hb=void 0}),hb=n.now()}function mb(a,b){var c,d={height:a},e=0;for(b=b?1:0;4>e;e+=2-b)c=V[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function nb(a,b,c){for(var d,e=(qb.tweeners[b]||[]).concat(qb.tweeners["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function ob(a,b,c){var d,e,f,g,h,i,j,k,m=this,o={},p=a.style,q=a.nodeType&&W(a),r=n._data(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,m.always(function(){m.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=n.css(a,"display"),k="none"===j?n._data(a,"olddisplay")||Ma(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(l.inlineBlockNeedsLayout&&"inline"!==Ma(a.nodeName)?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",l.shrinkWrapBlocks()||m.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],jb.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d])continue;q=!0}o[d]=r&&r[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(o))"inline"===("none"===j?Ma(a.nodeName):j)&&(p.display=j);else{r?"hidden"in r&&(q=r.hidden):r=n._data(a,"fxshow",{}),f&&(r.hidden=!q),q?n(a).show():m.done(function(){n(a).hide()}),m.done(function(){var b;n._removeData(a,"fxshow");for(b in o)n.style(a,b,o[b])});for(d in o)g=nb(q?r[d]:0,d,m),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function pb(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function qb(a,b,c){var d,e,f=0,g=qb.prefilters.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=hb||lb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{},easing:n.easing._default},c),originalProperties:b,originalOptions:c,startTime:hb||lb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for(pb(k,j.opts.specialEasing);g>f;f++)if(d=qb.prefilters[f].call(j,a,k,j.opts))return n.isFunction(d.stop)&&(n._queueHooks(j.elem,j.opts.queue).stop=n.proxy(d.stop,d)),d;return n.map(k,nb,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(qb,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return X(c.elem,a,U.exec(b),c),c}]},tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.match(G);for(var c,d=0,e=a.length;e>d;d++)c=a[d],qb.tweeners[c]=qb.tweeners[c]||[],qb.tweeners[c].unshift(b)},prefilters:[ob],prefilter:function(a,b){b?qb.prefilters.unshift(a):qb.prefilters.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,null!=d.queue&&d.queue!==!0||(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(W).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=qb(this,n.extend({},a),f);(e||n._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=n._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&kb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=n._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(mb(b,!0),a,d,e)}}),n.each({slideDown:mb("show"),slideUp:mb("hide"),slideToggle:mb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=n.timers,c=0;for(hb=n.now();c<b.length;c++)a=b[c],a()||b[c]!==a||b.splice(c--,1);b.length||n.fx.stop(),hb=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){ib||(ib=a.setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){a.clearInterval(ib),ib=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(b,c){return b=n.fx?n.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a,b=d.createElement("input"),c=d.createElement("div"),e=d.createElement("select"),f=e.appendChild(d.createElement("option"));c=d.createElement("div"),c.setAttribute("className","t"),c.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",a=c.getElementsByTagName("a")[0],b.setAttribute("type","checkbox"),c.appendChild(b),a=c.getElementsByTagName("a")[0],a.style.cssText="top:1px",l.getSetAttribute="t"!==c.className,l.style=/top/.test(a.getAttribute("style")),l.hrefNormalized="/a"===a.getAttribute("href"),l.checkOn=!!b.value,l.optSelected=f.selected,l.enctype=!!d.createElement("form").enctype,e.disabled=!0,l.optDisabled=!f.disabled,b=d.createElement("input"),b.setAttribute("value",""),l.input=""===b.getAttribute("value"),b.value="t",b.setAttribute("type","radio"),l.radioValue="t"===b.value}();var rb=/\r/g,sb=/[\x20\t\r\n\f]+/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(rb,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a)).replace(sb," ")}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],(c.selected||i===e)&&(l.optDisabled?!c.disabled:null===c.getAttribute("disabled"))&&(!c.parentNode.disabled||!n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)if(d=e[g],n.inArray(n.valHooks.option.get(d),f)>-1)try{d.selected=c=!0}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>-1:void 0}},l.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var tb,ub,vb=n.expr.attrHandle,wb=/^(?:checked|selected)$/i,xb=l.getSetAttribute,yb=l.input;n.fn.extend({attr:function(a,b){return Y(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),e=n.attrHooks[b]||(n.expr.match.bool.test(b)?ub:tb)),void 0!==c?null===c?void n.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=n.find.attr(a,b),null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!l.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(G);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)?yb&&xb||!wb.test(c)?a[d]=!1:a[n.camelCase("default-"+c)]=a[d]=!1:n.attr(a,c,""),a.removeAttribute(xb?c:d)}}),ub={set:function(a,b,c){return b===!1?n.removeAttr(a,c):yb&&xb||!wb.test(c)?a.setAttribute(!xb&&n.propFix[c]||c,c):a[n.camelCase("default-"+c)]=a[c]=!0,c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=vb[b]||n.find.attr;yb&&xb||!wb.test(b)?vb[b]=function(a,b,d){var e,f;return d||(f=vb[b],vb[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,vb[b]=f),e}:vb[b]=function(a,b,c){return c?void 0:a[n.camelCase("default-"+b)]?b.toLowerCase():null}}),yb&&xb||(n.attrHooks.value={set:function(a,b,c){return n.nodeName(a,"input")?void(a.defaultValue=b):tb&&tb.set(a,b,c)}}),xb||(tb={set:function(a,b,c){var d=a.getAttributeNode(c);return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0}},vb.id=vb.name=vb.coords=function(a,b,c){var d;return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},n.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);return c&&c.specified?c.value:void 0},set:tb.set},n.attrHooks.contenteditable={set:function(a,b,c){tb.set(a,""===b?!1:b,c)}},n.each(["width","height"],function(a,b){n.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0}}})),l.style||(n.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var zb=/^(?:input|select|textarea|button|object)$/i,Ab=/^(?:a|area)$/i;n.fn.extend({prop:function(a,b){return Y(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return a=n.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),n.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&n.isXMLDoc(a)||(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=n.find.attr(a,"tabindex");return b?parseInt(b,10):zb.test(a.nodeName)||Ab.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),l.hrefNormalized||n.each(["href","src"],function(a,b){n.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),l.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this}),l.enctype||(n.propFix.enctype="encoding");var Bb=/[\t\r\n\f]/g;function Cb(a){return n.attr(a,"class")||""}n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,Cb(this)))});if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=Cb(c),d=1===c.nodeType&&(" "+e+" ").replace(Bb," ")){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=n.trim(d),e!==h&&n.attr(c,"class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,Cb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=Cb(c),d=1===c.nodeType&&(" "+e+" ").replace(Bb," ")){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=n.trim(d),e!==h&&n.attr(c,"class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):n.isFunction(a)?this.each(function(c){n(this).toggleClass(a.call(this,c,Cb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=n(this),f=a.match(G)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=Cb(this),b&&n._data(this,"__className__",b),n.attr(this,"class",b||a===!1?"":n._data(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+Cb(c)+" ").replace(Bb," ").indexOf(b)>-1)return!0;return!1}}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}});var Db=a.location,Eb=n.now(),Fb=/\?/,Gb=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;n.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=n.trim(b+"");return e&&!n.trim(e.replace(Gb,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():n.error("Invalid JSON: "+b)},n.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new a.DOMParser,c=d.parseFromString(b,"text/xml")):(c=new a.ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||n.error("Invalid XML: "+b),c};var Hb=/#.*$/,Ib=/([?&])_=[^&]*/,Jb=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Kb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Lb=/^(?:GET|HEAD)$/,Mb=/^\/\//,Nb=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Ob={},Pb={},Qb="*/".concat("*"),Rb=Db.href,Sb=Nb.exec(Rb.toLowerCase())||[];function Tb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(G)||[];if(n.isFunction(c))while(d=f[e++])"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Ub(a,b,c,d){var e={},f=a===Pb;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Vb(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&n.extend(!0,a,c),a}function Wb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}f=f||d}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Xb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Rb,type:"GET",isLocal:Kb.test(Sb[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Qb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Vb(Vb(a,n.ajaxSettings),b):Vb(n.ajaxSettings,a)},ajaxPrefilter:Tb(Ob),ajaxTransport:Tb(Pb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var d,e,f,g,h,i,j,k,l=n.ajaxSetup({},c),m=l.context||l,o=l.context&&(m.nodeType||m.jquery)?n(m):n.event,p=n.Deferred(),q=n.Callbacks("once memory"),r=l.statusCode||{},s={},t={},u=0,v="canceled",w={readyState:0,getResponseHeader:function(a){var b;if(2===u){if(!k){k={};while(b=Jb.exec(g))k[b[1].toLowerCase()]=b[2]}b=k[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===u?g:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return u||(a=t[c]=t[c]||a,s[a]=b),this},overrideMimeType:function(a){return u||(l.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>u)for(b in a)r[b]=[r[b],a[b]];else w.always(a[w.status]);return this},abort:function(a){var b=a||v;return j&&j.abort(b),y(0,b),this}};if(p.promise(w).complete=q.add,w.success=w.done,w.error=w.fail,l.url=((b||l.url||Rb)+"").replace(Hb,"").replace(Mb,Sb[1]+"//"),l.type=c.method||c.type||l.method||l.type,l.dataTypes=n.trim(l.dataType||"*").toLowerCase().match(G)||[""],null==l.crossDomain&&(d=Nb.exec(l.url.toLowerCase()),l.crossDomain=!(!d||d[1]===Sb[1]&&d[2]===Sb[2]&&(d[3]||("http:"===d[1]?"80":"443"))===(Sb[3]||("http:"===Sb[1]?"80":"443")))),l.data&&l.processData&&"string"!=typeof l.data&&(l.data=n.param(l.data,l.traditional)),Ub(Ob,l,c,w),2===u)return w;i=n.event&&l.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),l.type=l.type.toUpperCase(),l.hasContent=!Lb.test(l.type),f=l.url,l.hasContent||(l.data&&(f=l.url+=(Fb.test(f)?"&":"?")+l.data,delete l.data),l.cache===!1&&(l.url=Ib.test(f)?f.replace(Ib,"$1_="+Eb++):f+(Fb.test(f)?"&":"?")+"_="+Eb++)),l.ifModified&&(n.lastModified[f]&&w.setRequestHeader("If-Modified-Since",n.lastModified[f]),n.etag[f]&&w.setRequestHeader("If-None-Match",n.etag[f])),(l.data&&l.hasContent&&l.contentType!==!1||c.contentType)&&w.setRequestHeader("Content-Type",l.contentType),w.setRequestHeader("Accept",l.dataTypes[0]&&l.accepts[l.dataTypes[0]]?l.accepts[l.dataTypes[0]]+("*"!==l.dataTypes[0]?", "+Qb+"; q=0.01":""):l.accepts["*"]);for(e in l.headers)w.setRequestHeader(e,l.headers[e]);if(l.beforeSend&&(l.beforeSend.call(m,w,l)===!1||2===u))return w.abort();v="abort";for(e in{success:1,error:1,complete:1})w[e](l[e]);if(j=Ub(Pb,l,c,w)){if(w.readyState=1,i&&o.trigger("ajaxSend",[w,l]),2===u)return w;l.async&&l.timeout>0&&(h=a.setTimeout(function(){w.abort("timeout")},l.timeout));try{u=1,j.send(s,y)}catch(x){if(!(2>u))throw x;y(-1,x)}}else y(-1,"No Transport");function y(b,c,d,e){var k,s,t,v,x,y=c;2!==u&&(u=2,h&&a.clearTimeout(h),j=void 0,g=e||"",w.readyState=b>0?4:0,k=b>=200&&300>b||304===b,d&&(v=Wb(l,w,d)),v=Xb(l,v,w,k),k?(l.ifModified&&(x=w.getResponseHeader("Last-Modified"),x&&(n.lastModified[f]=x),x=w.getResponseHeader("etag"),x&&(n.etag[f]=x)),204===b||"HEAD"===l.type?y="nocontent":304===b?y="notmodified":(y=v.state,s=v.data,t=v.error,k=!t)):(t=y,!b&&y||(y="error",0>b&&(b=0))),w.status=b,w.statusText=(c||y)+"",k?p.resolveWith(m,[s,y,w]):p.rejectWith(m,[w,y,t]),w.statusCode(r),r=void 0,i&&o.trigger(k?"ajaxSuccess":"ajaxError",[w,l,k?s:t]),q.fireWith(m,[w,y]),i&&(o.trigger("ajaxComplete",[w,l]),--n.active||n.event.trigger("ajaxStop")))}return w},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax(n.extend({url:a,type:b,dataType:e,data:c,success:d},n.isPlainObject(a)&&a))}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){if(n.isFunction(a))return this.each(function(b){n(this).wrapAll(a.call(this,b))});if(this[0]){var b=n(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&1===a.firstChild.nodeType)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return n.isFunction(a)?this.each(function(b){n(this).wrapInner(a.call(this,b))}):this.each(function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}});function Yb(a){return a.style&&a.style.display||n.css(a,"display")}function Zb(a){if(!n.contains(a.ownerDocument||d,a))return!0;while(a&&1===a.nodeType){if("none"===Yb(a)||"hidden"===a.type)return!0;a=a.parentNode}return!1}n.expr.filters.hidden=function(a){return l.reliableHiddenOffsets()?a.offsetWidth<=0&&a.offsetHeight<=0&&!a.getClientRects().length:Zb(a)},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var $b=/%20/g,_b=/\[\]$/,ac=/\r?\n/g,bc=/^(?:submit|button|image|reset|file)$/i,cc=/^(?:input|select|textarea|keygen)/i;function dc(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||_b.test(a)?d(a,e):dc(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)dc(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)dc(c,a[c],b,e);return d.join("&").replace($b,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&cc.test(this.nodeName)&&!bc.test(a)&&(this.checked||!Z.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(ac,"\r\n")}}):{name:b.name,value:c.replace(ac,"\r\n")}}).get()}}),n.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return this.isLocal?ic():d.documentMode>8?hc():/^(get|post|head|put|delete|options)$/i.test(this.type)&&hc()||ic()}:hc;var ec=0,fc={},gc=n.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in fc)fc[a](void 0,!0)}),l.cors=!!gc&&"withCredentials"in gc,gc=l.ajax=!!gc,gc&&n.ajaxTransport(function(b){if(!b.crossDomain||l.cors){var c;return{send:function(d,e){var f,g=b.xhr(),h=++ec;if(g.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(f in b.xhrFields)g[f]=b.xhrFields[f];b.mimeType&&g.overrideMimeType&&g.overrideMimeType(b.mimeType),b.crossDomain||d["X-Requested-With"]||(d["X-Requested-With"]="XMLHttpRequest");for(f in d)void 0!==d[f]&&g.setRequestHeader(f,d[f]+"");g.send(b.hasContent&&b.data||null),c=function(a,d){var f,i,j;if(c&&(d||4===g.readyState))if(delete fc[h],c=void 0,g.onreadystatechange=n.noop,d)4!==g.readyState&&g.abort();else{j={},f=g.status,"string"==typeof g.responseText&&(j.text=g.responseText);try{i=g.statusText}catch(k){i=""}f||!b.isLocal||b.crossDomain?1223===f&&(f=204):f=j.text?200:404}j&&e(f,i,j,g.getAllResponseHeaders())},b.async?4===g.readyState?a.setTimeout(c):g.onreadystatechange=fc[h]=c:c()},abort:function(){c&&c(void 0,!0)}}}});function hc(){try{return new a.XMLHttpRequest}catch(b){}}function ic(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=d.head||n("head")[0]||d.documentElement;return{send:function(e,f){b=d.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||f(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var jc=[],kc=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=jc.pop()||n.expando+"_"+Eb++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(kc.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&kc.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(kc,"$1"+e):b.jsonp!==!1&&(b.url+=(Fb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?n(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,jc.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||d;var e=x.exec(a),f=!c&&[];return e?[b.createElement(e[1])]:(e=ja([a],b,f),f&&f.length&&n(f).remove(),n.merge([],e.childNodes))};var lc=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&lc)return lc.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=n.trim(a.slice(h,a.length)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};function mc(a){return n.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&n.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,n.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,n.contains(b,e)?("undefined"!=typeof e.getBoundingClientRect&&(d=e.getBoundingClientRect()),c=mc(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===n.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(c=a.offset()),c.top+=n.css(a[0],"borderTopWidth",!0),c.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-n.css(d,"marginTop",!0),left:b.left-c.left-n.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Qa})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);n.fn[a]=function(d){return Y(this,function(a,d,e){var f=mc(a);return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void(f?f.scrollTo(c?n(f).scrollLeft():e,c?e:n(f).scrollTop()):a[d]=e)},a,d,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=Ua(l.pixelPosition,function(a,c){return c?(c=Sa(a,b),Oa.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({
padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return Y(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var nc=a.jQuery,oc=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=oc),b&&a.jQuery===n&&(a.jQuery=nc),n},b||(a.jQuery=a.$=n),n});

/** vim: et:ts=4:sw=4:sts=4
 * @license RequireJS 2.3.6 Copyright jQuery Foundation and other contributors.
 * Released under MIT license, https://github.com/requirejs/requirejs/blob/master/LICENSE
 */
//Not using strict: uneven strict support in browsers, #392, and causes
//problems with requirejs.exec()/transpiler plugins that may not be strict.
/*jslint regexp: true, nomen: true, sloppy: true */
/*global window, navigator, document, importScripts, setTimeout, opera */

var requirejs, require, define;
(function (global, setTimeout) {
    var req, s, head, baseElement, dataMain, src,
        interactiveScript, currentlyAddingScript, mainScript, subPath,
        version = '2.3.6',
        commentRegExp = /\/\*[\s\S]*?\*\/|([^:"'=]|^)\/\/.*$/mg,
        cjsRequireRegExp = /[^.]\s*require\s*\(\s*["']([^'"\s]+)["']\s*\)/g,
        jsSuffixRegExp = /\.js$/,
        currDirRegExp = /^\.\//,
        op = Object.prototype,
        ostring = op.toString,
        hasOwn = op.hasOwnProperty,
        isBrowser = !!(typeof window !== 'undefined' && typeof navigator !== 'undefined' && window.document),
        isWebWorker = !isBrowser && typeof importScripts !== 'undefined',
        //PS3 indicates loaded and complete, but need to wait for complete
        //specifically. Sequence is 'loading', 'loaded', execution,
        // then 'complete'. The UA check is unfortunate, but not sure how
        //to feature test w/o causing perf issues.
        readyRegExp = isBrowser && navigator.platform === 'PLAYSTATION 3' ?
                      /^complete$/ : /^(complete|loaded)$/,
        defContextName = '_',
        //Oh the tragedy, detecting opera. See the usage of isOpera for reason.
        isOpera = typeof opera !== 'undefined' && opera.toString() === '[object Opera]',
        contexts = {},
        cfg = {},
        globalDefQueue = [],
        useInteractive = false;

    //Could match something like ')//comment', do not lose the prefix to comment.
    function commentReplace(match, singlePrefix) {
        return singlePrefix || '';
    }

    function isFunction(it) {
        return ostring.call(it) === '[object Function]';
    }

    function isArray(it) {
        return ostring.call(it) === '[object Array]';
    }

    /**
     * Helper function for iterating over an array. If the func returns
     * a true value, it will break out of the loop.
     */
    function each(ary, func) {
        if (ary) {
            var i;
            for (i = 0; i < ary.length; i += 1) {
                if (ary[i] && func(ary[i], i, ary)) {
                    break;
                }
            }
        }
    }

    /**
     * Helper function for iterating over an array backwards. If the func
     * returns a true value, it will break out of the loop.
     */
    function eachReverse(ary, func) {
        if (ary) {
            var i;
            for (i = ary.length - 1; i > -1; i -= 1) {
                if (ary[i] && func(ary[i], i, ary)) {
                    break;
                }
            }
        }
    }

    function hasProp(obj, prop) {
        return hasOwn.call(obj, prop);
    }

    function getOwn(obj, prop) {
        return hasProp(obj, prop) && obj[prop];
    }

    /**
     * Cycles over properties in an object and calls a function for each
     * property value. If the function returns a truthy value, then the
     * iteration is stopped.
     */
    function eachProp(obj, func) {
        var prop;
        for (prop in obj) {
            if (hasProp(obj, prop)) {
                if (func(obj[prop], prop)) {
                    break;
                }
            }
        }
    }

    /**
     * Simple function to mix in properties from source into target,
     * but only if target does not already have a property of the same name.
     */
    function mixin(target, source, force, deepStringMixin) {
        if (source) {
            eachProp(source, function (value, prop) {
                if (force || !hasProp(target, prop)) {
                    if (deepStringMixin && typeof value === 'object' && value &&
                        !isArray(value) && !isFunction(value) &&
                        !(value instanceof RegExp)) {

                        if (!target[prop]) {
                            target[prop] = {};
                        }
                        mixin(target[prop], value, force, deepStringMixin);
                    } else {
                        target[prop] = value;
                    }
                }
            });
        }
        return target;
    }

    //Similar to Function.prototype.bind, but the 'this' object is specified
    //first, since it is easier to read/figure out what 'this' will be.
    function bind(obj, fn) {
        return function () {
            return fn.apply(obj, arguments);
        };
    }

    function scripts() {
        return document.getElementsByTagName('script');
    }

    function defaultOnError(err) {
        throw err;
    }

    //Allow getting a global that is expressed in
    //dot notation, like 'a.b.c'.
    function getGlobal(value) {
        if (!value) {
            return value;
        }
        var g = global;
        each(value.split('.'), function (part) {
            g = g[part];
        });
        return g;
    }

    /**
     * Constructs an error with a pointer to an URL with more information.
     * @param {String} id the error ID that maps to an ID on a web page.
     * @param {String} message human readable error.
     * @param {Error} [err] the original error, if there is one.
     *
     * @returns {Error}
     */
    function makeError(id, msg, err, requireModules) {
        var e = new Error(msg + '\nhttps://requirejs.org/docs/errors.html#' + id);
        e.requireType = id;
        e.requireModules = requireModules;
        if (err) {
            e.originalError = err;
        }
        return e;
    }

    if (typeof define !== 'undefined') {
        //If a define is already in play via another AMD loader,
        //do not overwrite.
        return;
    }

    if (typeof requirejs !== 'undefined') {
        if (isFunction(requirejs)) {
            //Do not overwrite an existing requirejs instance.
            return;
        }
        cfg = requirejs;
        requirejs = undefined;
    }

    //Allow for a require config object
    if (typeof require !== 'undefined' && !isFunction(require)) {
        //assume it is a config object.
        cfg = require;
        require = undefined;
    }

    function newContext(contextName) {
        var inCheckLoaded, Module, context, handlers,
            checkLoadedTimeoutId,
            config = {
                //Defaults. Do not set a default for map
                //config to speed up normalize(), which
                //will run faster if there is no default.
                waitSeconds: 7,
                baseUrl: './',
                paths: {},
                bundles: {},
                pkgs: {},
                shim: {},
                config: {}
            },
            registry = {},
            //registry of just enabled modules, to speed
            //cycle breaking code when lots of modules
            //are registered, but not activated.
            enabledRegistry = {},
            undefEvents = {},
            defQueue = [],
            defined = {},
            urlFetched = {},
            bundlesMap = {},
            requireCounter = 1,
            unnormalizedCounter = 1;

        /**
         * Trims the . and .. from an array of path segments.
         * It will keep a leading path segment if a .. will become
         * the first path segment, to help with module name lookups,
         * which act like paths, but can be remapped. But the end result,
         * all paths that use this function should look normalized.
         * NOTE: this method MODIFIES the input array.
         * @param {Array} ary the array of path segments.
         */
        function trimDots(ary) {
            var i, part;
            for (i = 0; i < ary.length; i++) {
                part = ary[i];
                if (part === '.') {
                    ary.splice(i, 1);
                    i -= 1;
                } else if (part === '..') {
                    // If at the start, or previous value is still ..,
                    // keep them so that when converted to a path it may
                    // still work when converted to a path, even though
                    // as an ID it is less than ideal. In larger point
                    // releases, may be better to just kick out an error.
                    if (i === 0 || (i === 1 && ary[2] === '..') || ary[i - 1] === '..') {
                        continue;
                    } else if (i > 0) {
                        ary.splice(i - 1, 2);
                        i -= 2;
                    }
                }
            }
        }

        /**
         * Given a relative module name, like ./something, normalize it to
         * a real name that can be mapped to a path.
         * @param {String} name the relative name
         * @param {String} baseName a real name that the name arg is relative
         * to.
         * @param {Boolean} applyMap apply the map config to the value. Should
         * only be done if this normalization is for a dependency ID.
         * @returns {String} normalized name
         */
        function normalize(name, baseName, applyMap) {
            var pkgMain, mapValue, nameParts, i, j, nameSegment, lastIndex,
                foundMap, foundI, foundStarMap, starI, normalizedBaseParts,
                baseParts = (baseName && baseName.split('/')),
                map = config.map,
                starMap = map && map['*'];

            //Adjust any relative paths.
            if (name) {
                name = name.split('/');
                lastIndex = name.length - 1;

                // If wanting node ID compatibility, strip .js from end
                // of IDs. Have to do this here, and not in nameToUrl
                // because node allows either .js or non .js to map
                // to same file.
                if (config.nodeIdCompat && jsSuffixRegExp.test(name[lastIndex])) {
                    name[lastIndex] = name[lastIndex].replace(jsSuffixRegExp, '');
                }

                // Starts with a '.' so need the baseName
                if (name[0].charAt(0) === '.' && baseParts) {
                    //Convert baseName to array, and lop off the last part,
                    //so that . matches that 'directory' and not name of the baseName's
                    //module. For instance, baseName of 'one/two/three', maps to
                    //'one/two/three.js', but we want the directory, 'one/two' for
                    //this normalization.
                    normalizedBaseParts = baseParts.slice(0, baseParts.length - 1);
                    name = normalizedBaseParts.concat(name);
                }

                trimDots(name);
                name = name.join('/');
            }

            //Apply map config if available.
            if (applyMap && map && (baseParts || starMap)) {
                nameParts = name.split('/');

                outerLoop: for (i = nameParts.length; i > 0; i -= 1) {
                    nameSegment = nameParts.slice(0, i).join('/');

                    if (baseParts) {
                        //Find the longest baseName segment match in the config.
                        //So, do joins on the biggest to smallest lengths of baseParts.
                        for (j = baseParts.length; j > 0; j -= 1) {
                            mapValue = getOwn(map, baseParts.slice(0, j).join('/'));

                            //baseName segment has config, find if it has one for
                            //this name.
                            if (mapValue) {
                                mapValue = getOwn(mapValue, nameSegment);
                                if (mapValue) {
                                    //Match, update name to the new value.
                                    foundMap = mapValue;
                                    foundI = i;
                                    break outerLoop;
                                }
                            }
                        }
                    }

                    //Check for a star map match, but just hold on to it,
                    //if there is a shorter segment match later in a matching
                    //config, then favor over this star map.
                    if (!foundStarMap && starMap && getOwn(starMap, nameSegment)) {
                        foundStarMap = getOwn(starMap, nameSegment);
                        starI = i;
                    }
                }

                if (!foundMap && foundStarMap) {
                    foundMap = foundStarMap;
                    foundI = starI;
                }

                if (foundMap) {
                    nameParts.splice(0, foundI, foundMap);
                    name = nameParts.join('/');
                }
            }

            // If the name points to a package's name, use
            // the package main instead.
            pkgMain = getOwn(config.pkgs, name);

            return pkgMain ? pkgMain : name;
        }

        function removeScript(name) {
            if (isBrowser) {
                each(scripts(), function (scriptNode) {
                    if (scriptNode.getAttribute('data-requiremodule') === name &&
                            scriptNode.getAttribute('data-requirecontext') === context.contextName) {
                        scriptNode.parentNode.removeChild(scriptNode);
                        return true;
                    }
                });
            }
        }

        function hasPathFallback(id) {
            var pathConfig = getOwn(config.paths, id);
            if (pathConfig && isArray(pathConfig) && pathConfig.length > 1) {
                //Pop off the first array value, since it failed, and
                //retry
                pathConfig.shift();
                context.require.undef(id);

                //Custom require that does not do map translation, since
                //ID is "absolute", already mapped/resolved.
                context.makeRequire(null, {
                    skipMap: true
                })([id]);

                return true;
            }
        }

        //Turns a plugin!resource to [plugin, resource]
        //with the plugin being undefined if the name
        //did not have a plugin prefix.
        function splitPrefix(name) {
            var prefix,
                index = name ? name.indexOf('!') : -1;
            if (index > -1) {
                prefix = name.substring(0, index);
                name = name.substring(index + 1, name.length);
            }
            return [prefix, name];
        }

        /**
         * Creates a module mapping that includes plugin prefix, module
         * name, and path. If parentModuleMap is provided it will
         * also normalize the name via require.normalize()
         *
         * @param {String} name the module name
         * @param {String} [parentModuleMap] parent module map
         * for the module name, used to resolve relative names.
         * @param {Boolean} isNormalized: is the ID already normalized.
         * This is true if this call is done for a define() module ID.
         * @param {Boolean} applyMap: apply the map config to the ID.
         * Should only be true if this map is for a dependency.
         *
         * @returns {Object}
         */
        function makeModuleMap(name, parentModuleMap, isNormalized, applyMap) {
            var url, pluginModule, suffix, nameParts,
                prefix = null,
                parentName = parentModuleMap ? parentModuleMap.name : null,
                originalName = name,
                isDefine = true,
                normalizedName = '';

            //If no name, then it means it is a require call, generate an
            //internal name.
            if (!name) {
                isDefine = false;
                name = '_@r' + (requireCounter += 1);
            }

            nameParts = splitPrefix(name);
            prefix = nameParts[0];
            name = nameParts[1];

            if (prefix) {
                prefix = normalize(prefix, parentName, applyMap);
                pluginModule = getOwn(defined, prefix);
            }

            //Account for relative paths if there is a base name.
            if (name) {
                if (prefix) {
                    if (isNormalized) {
                        normalizedName = name;
                    } else if (pluginModule && pluginModule.normalize) {
                        //Plugin is loaded, use its normalize method.
                        normalizedName = pluginModule.normalize(name, function (name) {
                            return normalize(name, parentName, applyMap);
                        });
                    } else {
                        // If nested plugin references, then do not try to
                        // normalize, as it will not normalize correctly. This
                        // places a restriction on resourceIds, and the longer
                        // term solution is not to normalize until plugins are
                        // loaded and all normalizations to allow for async
                        // loading of a loader plugin. But for now, fixes the
                        // common uses. Details in #1131
                        normalizedName = name.indexOf('!') === -1 ?
                                         normalize(name, parentName, applyMap) :
                                         name;
                    }
                } else {
                    //A regular module.
                    normalizedName = normalize(name, parentName, applyMap);

                    //Normalized name may be a plugin ID due to map config
                    //application in normalize. The map config values must
                    //already be normalized, so do not need to redo that part.
                    nameParts = splitPrefix(normalizedName);
                    prefix = nameParts[0];
                    normalizedName = nameParts[1];
                    isNormalized = true;

                    url = context.nameToUrl(normalizedName);
                }
            }

            //If the id is a plugin id that cannot be determined if it needs
            //normalization, stamp it with a unique ID so two matching relative
            //ids that may conflict can be separate.
            suffix = prefix && !pluginModule && !isNormalized ?
                     '_unnormalized' + (unnormalizedCounter += 1) :
                     '';

            return {
                prefix: prefix,
                name: normalizedName,
                parentMap: parentModuleMap,
                unnormalized: !!suffix,
                url: url,
                originalName: originalName,
                isDefine: isDefine,
                id: (prefix ?
                        prefix + '!' + normalizedName :
                        normalizedName) + suffix
            };
        }

        function getModule(depMap) {
            var id = depMap.id,
                mod = getOwn(registry, id);

            if (!mod) {
                mod = registry[id] = new context.Module(depMap);
            }

            return mod;
        }

        function on(depMap, name, fn) {
            var id = depMap.id,
                mod = getOwn(registry, id);

            if (hasProp(defined, id) &&
                    (!mod || mod.defineEmitComplete)) {
                if (name === 'defined') {
                    fn(defined[id]);
                }
            } else {
                mod = getModule(depMap);
                if (mod.error && name === 'error') {
                    fn(mod.error);
                } else {
                    mod.on(name, fn);
                }
            }
        }

        function onError(err, errback) {
            var ids = err.requireModules,
                notified = false;

            if (errback) {
                errback(err);
            } else {
                each(ids, function (id) {
                    var mod = getOwn(registry, id);
                    if (mod) {
                        //Set error on module, so it skips timeout checks.
                        mod.error = err;
                        if (mod.events.error) {
                            notified = true;
                            mod.emit('error', err);
                        }
                    }
                });

                if (!notified) {
                    req.onError(err);
                }
            }
        }

        /**
         * Internal method to transfer globalQueue items to this context's
         * defQueue.
         */
        function takeGlobalQueue() {
            //Push all the globalDefQueue items into the context's defQueue
            if (globalDefQueue.length) {
                each(globalDefQueue, function(queueItem) {
                    var id = queueItem[0];
                    if (typeof id === 'string') {
                        context.defQueueMap[id] = true;
                    }
                    defQueue.push(queueItem);
                });
                globalDefQueue = [];
            }
        }

        handlers = {
            'require': function (mod) {
                if (mod.require) {
                    return mod.require;
                } else {
                    return (mod.require = context.makeRequire(mod.map));
                }
            },
            'exports': function (mod) {
                mod.usingExports = true;
                if (mod.map.isDefine) {
                    if (mod.exports) {
                        return (defined[mod.map.id] = mod.exports);
                    } else {
                        return (mod.exports = defined[mod.map.id] = {});
                    }
                }
            },
            'module': function (mod) {
                if (mod.module) {
                    return mod.module;
                } else {
                    return (mod.module = {
                        id: mod.map.id,
                        uri: mod.map.url,
                        config: function () {
                            return getOwn(config.config, mod.map.id) || {};
                        },
                        exports: mod.exports || (mod.exports = {})
                    });
                }
            }
        };

        function cleanRegistry(id) {
            //Clean up machinery used for waiting modules.
            delete registry[id];
            delete enabledRegistry[id];
        }

        function breakCycle(mod, traced, processed) {
            var id = mod.map.id;

            if (mod.error) {
                mod.emit('error', mod.error);
            } else {
                traced[id] = true;
                each(mod.depMaps, function (depMap, i) {
                    var depId = depMap.id,
                        dep = getOwn(registry, depId);

                    //Only force things that have not completed
                    //being defined, so still in the registry,
                    //and only if it has not been matched up
                    //in the module already.
                    if (dep && !mod.depMatched[i] && !processed[depId]) {
                        if (getOwn(traced, depId)) {
                            mod.defineDep(i, defined[depId]);
                            mod.check(); //pass false?
                        } else {
                            breakCycle(dep, traced, processed);
                        }
                    }
                });
                processed[id] = true;
            }
        }

        function checkLoaded() {
            var err, usingPathFallback,
                waitInterval = config.waitSeconds * 1000,
                //It is possible to disable the wait interval by using waitSeconds of 0.
                expired = waitInterval && (context.startTime + waitInterval) < new Date().getTime(),
                noLoads = [],
                reqCalls = [],
                stillLoading = false,
                needCycleCheck = true;

            //Do not bother if this call was a result of a cycle break.
            if (inCheckLoaded) {
                return;
            }

            inCheckLoaded = true;

            //Figure out the state of all the modules.
            eachProp(enabledRegistry, function (mod) {
                var map = mod.map,
                    modId = map.id;

                //Skip things that are not enabled or in error state.
                if (!mod.enabled) {
                    return;
                }

                if (!map.isDefine) {
                    reqCalls.push(mod);
                }

                if (!mod.error) {
                    //If the module should be executed, and it has not
                    //been inited and time is up, remember it.
                    if (!mod.inited && expired) {
                        if (hasPathFallback(modId)) {
                            usingPathFallback = true;
                            stillLoading = true;
                        } else {
                            noLoads.push(modId);
                            removeScript(modId);
                        }
                    } else if (!mod.inited && mod.fetched && map.isDefine) {
                        stillLoading = true;
                        if (!map.prefix) {
                            //No reason to keep looking for unfinished
                            //loading. If the only stillLoading is a
                            //plugin resource though, keep going,
                            //because it may be that a plugin resource
                            //is waiting on a non-plugin cycle.
                            return (needCycleCheck = false);
                        }
                    }
                }
            });

            if (expired && noLoads.length) {
                //If wait time expired, throw error of unloaded modules.
                err = makeError('timeout', 'Load timeout for modules: ' + noLoads, null, noLoads);
                err.contextName = context.contextName;
                return onError(err);
            }

            //Not expired, check for a cycle.
            if (needCycleCheck) {
                each(reqCalls, function (mod) {
                    breakCycle(mod, {}, {});
                });
            }

            //If still waiting on loads, and the waiting load is something
            //other than a plugin resource, or there are still outstanding
            //scripts, then just try back later.
            if ((!expired || usingPathFallback) && stillLoading) {
                //Something is still waiting to load. Wait for it, but only
                //if a timeout is not already in effect.
                if ((isBrowser || isWebWorker) && !checkLoadedTimeoutId) {
                    checkLoadedTimeoutId = setTimeout(function () {
                        checkLoadedTimeoutId = 0;
                        checkLoaded();
                    }, 50);
                }
            }

            inCheckLoaded = false;
        }

        Module = function (map) {
            this.events = getOwn(undefEvents, map.id) || {};
            this.map = map;
            this.shim = getOwn(config.shim, map.id);
            this.depExports = [];
            this.depMaps = [];
            this.depMatched = [];
            this.pluginMaps = {};
            this.depCount = 0;

            /* this.exports this.factory
               this.depMaps = [],
               this.enabled, this.fetched
            */
        };

        Module.prototype = {
            init: function (depMaps, factory, errback, options) {
                options = options || {};

                //Do not do more inits if already done. Can happen if there
                //are multiple define calls for the same module. That is not
                //a normal, common case, but it is also not unexpected.
                if (this.inited) {
                    return;
                }

                this.factory = factory;

                if (errback) {
                    //Register for errors on this module.
                    this.on('error', errback);
                } else if (this.events.error) {
                    //If no errback already, but there are error listeners
                    //on this module, set up an errback to pass to the deps.
                    errback = bind(this, function (err) {
                        this.emit('error', err);
                    });
                }

                //Do a copy of the dependency array, so that
                //source inputs are not modified. For example
                //"shim" deps are passed in here directly, and
                //doing a direct modification of the depMaps array
                //would affect that config.
                this.depMaps = depMaps && depMaps.slice(0);

                this.errback = errback;

                //Indicate this module has be initialized
                this.inited = true;

                this.ignore = options.ignore;

                //Could have option to init this module in enabled mode,
                //or could have been previously marked as enabled. However,
                //the dependencies are not known until init is called. So
                //if enabled previously, now trigger dependencies as enabled.
                if (options.enabled || this.enabled) {
                    //Enable this module and dependencies.
                    //Will call this.check()
                    this.enable();
                } else {
                    this.check();
                }
            },

            defineDep: function (i, depExports) {
                //Because of cycles, defined callback for a given
                //export can be called more than once.
                if (!this.depMatched[i]) {
                    this.depMatched[i] = true;
                    this.depCount -= 1;
                    this.depExports[i] = depExports;
                }
            },

            fetch: function () {
                if (this.fetched) {
                    return;
                }
                this.fetched = true;

                context.startTime = (new Date()).getTime();

                var map = this.map;

                //If the manager is for a plugin managed resource,
                //ask the plugin to load it now.
                if (this.shim) {
                    context.makeRequire(this.map, {
                        enableBuildCallback: true
                    })(this.shim.deps || [], bind(this, function () {
                        return map.prefix ? this.callPlugin() : this.load();
                    }));
                } else {
                    //Regular dependency.
                    return map.prefix ? this.callPlugin() : this.load();
                }
            },

            load: function () {
                var url = this.map.url;

                //Regular dependency.
                if (!urlFetched[url]) {
                    urlFetched[url] = true;
                    context.load(this.map.id, url);
                }
            },

            /**
             * Checks if the module is ready to define itself, and if so,
             * define it.
             */
            check: function () {
                if (!this.enabled || this.enabling) {
                    return;
                }

                var err, cjsModule,
                    id = this.map.id,
                    depExports = this.depExports,
                    exports = this.exports,
                    factory = this.factory;

                if (!this.inited) {
                    // Only fetch if not already in the defQueue.
                    if (!hasProp(context.defQueueMap, id)) {
                        this.fetch();
                    }
                } else if (this.error) {
                    this.emit('error', this.error);
                } else if (!this.defining) {
                    //The factory could trigger another require call
                    //that would result in checking this module to
                    //define itself again. If already in the process
                    //of doing that, skip this work.
                    this.defining = true;

                    if (this.depCount < 1 && !this.defined) {
                        if (isFunction(factory)) {
                            //If there is an error listener, favor passing
                            //to that instead of throwing an error. However,
                            //only do it for define()'d  modules. require
                            //errbacks should not be called for failures in
                            //their callbacks (#699). However if a global
                            //onError is set, use that.
                            if ((this.events.error && this.map.isDefine) ||
                                req.onError !== defaultOnError) {
                                try {
                                    exports = context.execCb(id, factory, depExports, exports);
                                } catch (e) {
                                    err = e;
                                }
                            } else {
                                exports = context.execCb(id, factory, depExports, exports);
                            }

                            // Favor return value over exports. If node/cjs in play,
                            // then will not have a return value anyway. Favor
                            // module.exports assignment over exports object.
                            if (this.map.isDefine && exports === undefined) {
                                cjsModule = this.module;
                                if (cjsModule) {
                                    exports = cjsModule.exports;
                                } else if (this.usingExports) {
                                    //exports already set the defined value.
                                    exports = this.exports;
                                }
                            }

                            if (err) {
                                err.requireMap = this.map;
                                err.requireModules = this.map.isDefine ? [this.map.id] : null;
                                err.requireType = this.map.isDefine ? 'define' : 'require';
                                return onError((this.error = err));
                            }

                        } else {
                            //Just a literal value
                            exports = factory;
                        }

                        this.exports = exports;

                        if (this.map.isDefine && !this.ignore) {
                            defined[id] = exports;

                            if (req.onResourceLoad) {
                                var resLoadMaps = [];
                                each(this.depMaps, function (depMap) {
                                    resLoadMaps.push(depMap.normalizedMap || depMap);
                                });
                                req.onResourceLoad(context, this.map, resLoadMaps);
                            }
                        }

                        //Clean up
                        cleanRegistry(id);

                        this.defined = true;
                    }

                    //Finished the define stage. Allow calling check again
                    //to allow define notifications below in the case of a
                    //cycle.
                    this.defining = false;

                    if (this.defined && !this.defineEmitted) {
                        this.defineEmitted = true;
                        this.emit('defined', this.exports);
                        this.defineEmitComplete = true;
                    }

                }
            },

            callPlugin: function () {
                var map = this.map,
                    id = map.id,
                    //Map already normalized the prefix.
                    pluginMap = makeModuleMap(map.prefix);

                //Mark this as a dependency for this plugin, so it
                //can be traced for cycles.
                this.depMaps.push(pluginMap);

                on(pluginMap, 'defined', bind(this, function (plugin) {
                    var load, normalizedMap, normalizedMod,
                        bundleId = getOwn(bundlesMap, this.map.id),
                        name = this.map.name,
                        parentName = this.map.parentMap ? this.map.parentMap.name : null,
                        localRequire = context.makeRequire(map.parentMap, {
                            enableBuildCallback: true
                        });

                    //If current map is not normalized, wait for that
                    //normalized name to load instead of continuing.
                    if (this.map.unnormalized) {
                        //Normalize the ID if the plugin allows it.
                        if (plugin.normalize) {
                            name = plugin.normalize(name, function (name) {
                                return normalize(name, parentName, true);
                            }) || '';
                        }

                        //prefix and name should already be normalized, no need
                        //for applying map config again either.
                        normalizedMap = makeModuleMap(map.prefix + '!' + name,
                                                      this.map.parentMap,
                                                      true);
                        on(normalizedMap,
                            'defined', bind(this, function (value) {
                                this.map.normalizedMap = normalizedMap;
                                this.init([], function () { return value; }, null, {
                                    enabled: true,
                                    ignore: true
                                });
                            }));

                        normalizedMod = getOwn(registry, normalizedMap.id);
                        if (normalizedMod) {
                            //Mark this as a dependency for this plugin, so it
                            //can be traced for cycles.
                            this.depMaps.push(normalizedMap);

                            if (this.events.error) {
                                normalizedMod.on('error', bind(this, function (err) {
                                    this.emit('error', err);
                                }));
                            }
                            normalizedMod.enable();
                        }

                        return;
                    }

                    //If a paths config, then just load that file instead to
                    //resolve the plugin, as it is built into that paths layer.
                    if (bundleId) {
                        this.map.url = context.nameToUrl(bundleId);
                        this.load();
                        return;
                    }

                    load = bind(this, function (value) {
                        this.init([], function () { return value; }, null, {
                            enabled: true
                        });
                    });

                    load.error = bind(this, function (err) {
                        this.inited = true;
                        this.error = err;
                        err.requireModules = [id];

                        //Remove temp unnormalized modules for this module,
                        //since they will never be resolved otherwise now.
                        eachProp(registry, function (mod) {
                            if (mod.map.id.indexOf(id + '_unnormalized') === 0) {
                                cleanRegistry(mod.map.id);
                            }
                        });

                        onError(err);
                    });

                    //Allow plugins to load other code without having to know the
                    //context or how to 'complete' the load.
                    load.fromText = bind(this, function (text, textAlt) {
                        /*jslint evil: true */
                        var moduleName = map.name,
                            moduleMap = makeModuleMap(moduleName),
                            hasInteractive = useInteractive;

                        //As of 2.1.0, support just passing the text, to reinforce
                        //fromText only being called once per resource. Still
                        //support old style of passing moduleName but discard
                        //that moduleName in favor of the internal ref.
                        if (textAlt) {
                            text = textAlt;
                        }

                        //Turn off interactive script matching for IE for any define
                        //calls in the text, then turn it back on at the end.
                        if (hasInteractive) {
                            useInteractive = false;
                        }

                        //Prime the system by creating a module instance for
                        //it.
                        getModule(moduleMap);

                        //Transfer any config to this other module.
                        if (hasProp(config.config, id)) {
                            config.config[moduleName] = config.config[id];
                        }

                        try {
                            req.exec(text);
                        } catch (e) {
                            return onError(makeError('fromtexteval',
                                             'fromText eval for ' + id +
                                            ' failed: ' + e,
                                             e,
                                             [id]));
                        }

                        if (hasInteractive) {
                            useInteractive = true;
                        }

                        //Mark this as a dependency for the plugin
                        //resource
                        this.depMaps.push(moduleMap);

                        //Support anonymous modules.
                        context.completeLoad(moduleName);

                        //Bind the value of that module to the value for this
                        //resource ID.
                        localRequire([moduleName], load);
                    });

                    //Use parentName here since the plugin's name is not reliable,
                    //could be some weird string with no path that actually wants to
                    //reference the parentName's path.
                    plugin.load(map.name, localRequire, load, config);
                }));

                context.enable(pluginMap, this);
                this.pluginMaps[pluginMap.id] = pluginMap;
            },

            enable: function () {
                enabledRegistry[this.map.id] = this;
                this.enabled = true;

                //Set flag mentioning that the module is enabling,
                //so that immediate calls to the defined callbacks
                //for dependencies do not trigger inadvertent load
                //with the depCount still being zero.
                this.enabling = true;

                //Enable each dependency
                each(this.depMaps, bind(this, function (depMap, i) {
                    var id, mod, handler;

                    if (typeof depMap === 'string') {
                        //Dependency needs to be converted to a depMap
                        //and wired up to this module.
                        depMap = makeModuleMap(depMap,
                                               (this.map.isDefine ? this.map : this.map.parentMap),
                                               false,
                                               !this.skipMap);
                        this.depMaps[i] = depMap;

                        handler = getOwn(handlers, depMap.id);

                        if (handler) {
                            this.depExports[i] = handler(this);
                            return;
                        }

                        this.depCount += 1;

                        on(depMap, 'defined', bind(this, function (depExports) {
                            if (this.undefed) {
                                return;
                            }
                            this.defineDep(i, depExports);
                            this.check();
                        }));

                        if (this.errback) {
                            on(depMap, 'error', bind(this, this.errback));
                        } else if (this.events.error) {
                            // No direct errback on this module, but something
                            // else is listening for errors, so be sure to
                            // propagate the error correctly.
                            on(depMap, 'error', bind(this, function(err) {
                                this.emit('error', err);
                            }));
                        }
                    }

                    id = depMap.id;
                    mod = registry[id];

                    //Skip special modules like 'require', 'exports', 'module'
                    //Also, don't call enable if it is already enabled,
                    //important in circular dependency cases.
                    if (!hasProp(handlers, id) && mod && !mod.enabled) {
                        context.enable(depMap, this);
                    }
                }));

                //Enable each plugin that is used in
                //a dependency
                eachProp(this.pluginMaps, bind(this, function (pluginMap) {
                    var mod = getOwn(registry, pluginMap.id);
                    if (mod && !mod.enabled) {
                        context.enable(pluginMap, this);
                    }
                }));

                this.enabling = false;

                this.check();
            },

            on: function (name, cb) {
                var cbs = this.events[name];
                if (!cbs) {
                    cbs = this.events[name] = [];
                }
                cbs.push(cb);
            },

            emit: function (name, evt) {
                each(this.events[name], function (cb) {
                    cb(evt);
                });
                if (name === 'error') {
                    //Now that the error handler was triggered, remove
                    //the listeners, since this broken Module instance
                    //can stay around for a while in the registry.
                    delete this.events[name];
                }
            }
        };

        function callGetModule(args) {
            //Skip modules already defined.
            if (!hasProp(defined, args[0])) {
                getModule(makeModuleMap(args[0], null, true)).init(args[1], args[2]);
            }
        }

        function removeListener(node, func, name, ieName) {
            //Favor detachEvent because of IE9
            //issue, see attachEvent/addEventListener comment elsewhere
            //in this file.
            if (node.detachEvent && !isOpera) {
                //Probably IE. If not it will throw an error, which will be
                //useful to know.
                if (ieName) {
                    node.detachEvent(ieName, func);
                }
            } else {
                node.removeEventListener(name, func, false);
            }
        }

        /**
         * Given an event from a script node, get the requirejs info from it,
         * and then removes the event listeners on the node.
         * @param {Event} evt
         * @returns {Object}
         */
        function getScriptData(evt) {
            //Using currentTarget instead of target for Firefox 2.0's sake. Not
            //all old browsers will be supported, but this one was easy enough
            //to support and still makes sense.
            var node = evt.currentTarget || evt.srcElement;

            //Remove the listeners once here.
            removeListener(node, context.onScriptLoad, 'load', 'onreadystatechange');
            removeListener(node, context.onScriptError, 'error');

            return {
                node: node,
                id: node && node.getAttribute('data-requiremodule')
            };
        }

        function intakeDefines() {
            var args;

            //Any defined modules in the global queue, intake them now.
            takeGlobalQueue();

            //Make sure any remaining defQueue items get properly processed.
            while (defQueue.length) {
                args = defQueue.shift();
                if (args[0] === null) {
                    return onError(makeError('mismatch', 'Mismatched anonymous define() module: ' +
                        args[args.length - 1]));
                } else {
                    //args are id, deps, factory. Should be normalized by the
                    //define() function.
                    callGetModule(args);
                }
            }
            context.defQueueMap = {};
        }

        context = {
            config: config,
            contextName: contextName,
            registry: registry,
            defined: defined,
            urlFetched: urlFetched,
            defQueue: defQueue,
            defQueueMap: {},
            Module: Module,
            makeModuleMap: makeModuleMap,
            nextTick: req.nextTick,
            onError: onError,

            /**
             * Set a configuration for the context.
             * @param {Object} cfg config object to integrate.
             */
            configure: function (cfg) {
                //Make sure the baseUrl ends in a slash.
                if (cfg.baseUrl) {
                    if (cfg.baseUrl.charAt(cfg.baseUrl.length - 1) !== '/') {
                        cfg.baseUrl += '/';
                    }
                }

                // Convert old style urlArgs string to a function.
                if (typeof cfg.urlArgs === 'string') {
                    var urlArgs = cfg.urlArgs;
                    cfg.urlArgs = function(id, url) {
                        return (url.indexOf('?') === -1 ? '?' : '&') + urlArgs;
                    };
                }

                //Save off the paths since they require special processing,
                //they are additive.
                var shim = config.shim,
                    objs = {
                        paths: true,
                        bundles: true,
                        config: true,
                        map: true
                    };

                eachProp(cfg, function (value, prop) {
                    if (objs[prop]) {
                        if (!config[prop]) {
                            config[prop] = {};
                        }
                        mixin(config[prop], value, true, true);
                    } else {
                        config[prop] = value;
                    }
                });

                //Reverse map the bundles
                if (cfg.bundles) {
                    eachProp(cfg.bundles, function (value, prop) {
                        each(value, function (v) {
                            if (v !== prop) {
                                bundlesMap[v] = prop;
                            }
                        });
                    });
                }

                //Merge shim
                if (cfg.shim) {
                    eachProp(cfg.shim, function (value, id) {
                        //Normalize the structure
                        if (isArray(value)) {
                            value = {
                                deps: value
                            };
                        }
                        if ((value.exports || value.init) && !value.exportsFn) {
                            value.exportsFn = context.makeShimExports(value);
                        }
                        shim[id] = value;
                    });
                    config.shim = shim;
                }

                //Adjust packages if necessary.
                if (cfg.packages) {
                    each(cfg.packages, function (pkgObj) {
                        var location, name;

                        pkgObj = typeof pkgObj === 'string' ? {name: pkgObj} : pkgObj;

                        name = pkgObj.name;
                        location = pkgObj.location;
                        if (location) {
                            config.paths[name] = pkgObj.location;
                        }

                        //Save pointer to main module ID for pkg name.
                        //Remove leading dot in main, so main paths are normalized,
                        //and remove any trailing .js, since different package
                        //envs have different conventions: some use a module name,
                        //some use a file name.
                        config.pkgs[name] = pkgObj.name + '/' + (pkgObj.main || 'main')
                                     .replace(currDirRegExp, '')
                                     .replace(jsSuffixRegExp, '');
                    });
                }

                //If there are any "waiting to execute" modules in the registry,
                //update the maps for them, since their info, like URLs to load,
                //may have changed.
                eachProp(registry, function (mod, id) {
                    //If module already has init called, since it is too
                    //late to modify them, and ignore unnormalized ones
                    //since they are transient.
                    if (!mod.inited && !mod.map.unnormalized) {
                        mod.map = makeModuleMap(id, null, true);
                    }
                });

                //If a deps array or a config callback is specified, then call
                //require with those args. This is useful when require is defined as a
                //config object before require.js is loaded.
                if (cfg.deps || cfg.callback) {
                    context.require(cfg.deps || [], cfg.callback);
                }
            },

            makeShimExports: function (value) {
                function fn() {
                    var ret;
                    if (value.init) {
                        ret = value.init.apply(global, arguments);
                    }
                    return ret || (value.exports && getGlobal(value.exports));
                }
                return fn;
            },

            makeRequire: function (relMap, options) {
                options = options || {};

                function localRequire(deps, callback, errback) {
                    var id, map, requireMod;

                    if (options.enableBuildCallback && callback && isFunction(callback)) {
                        callback.__requireJsBuild = true;
                    }

                    if (typeof deps === 'string') {
                        if (isFunction(callback)) {
                            //Invalid call
                            return onError(makeError('requireargs', 'Invalid require call'), errback);
                        }

                        //If require|exports|module are requested, get the
                        //value for them from the special handlers. Caveat:
                        //this only works while module is being defined.
                        if (relMap && hasProp(handlers, deps)) {
                            return handlers[deps](registry[relMap.id]);
                        }

                        //Synchronous access to one module. If require.get is
                        //available (as in the Node adapter), prefer that.
                        if (req.get) {
                            return req.get(context, deps, relMap, localRequire);
                        }

                        //Normalize module name, if it contains . or ..
                        map = makeModuleMap(deps, relMap, false, true);
                        id = map.id;

                        if (!hasProp(defined, id)) {
                            return onError(makeError('notloaded', 'Module name "' +
                                        id +
                                        '" has not been loaded yet for context: ' +
                                        contextName +
                                        (relMap ? '' : '. Use require([])')));
                        }
                        return defined[id];
                    }

                    //Grab defines waiting in the global queue.
                    intakeDefines();

                    //Mark all the dependencies as needing to be loaded.
                    context.nextTick(function () {
                        //Some defines could have been added since the
                        //require call, collect them.
                        intakeDefines();

                        requireMod = getModule(makeModuleMap(null, relMap));

                        //Store if map config should be applied to this require
                        //call for dependencies.
                        requireMod.skipMap = options.skipMap;

                        requireMod.init(deps, callback, errback, {
                            enabled: true
                        });

                        checkLoaded();
                    });

                    return localRequire;
                }

                mixin(localRequire, {
                    isBrowser: isBrowser,

                    /**
                     * Converts a module name + .extension into an URL path.
                     * *Requires* the use of a module name. It does not support using
                     * plain URLs like nameToUrl.
                     */
                    toUrl: function (moduleNamePlusExt) {
                        var ext,
                            index = moduleNamePlusExt.lastIndexOf('.'),
                            segment = moduleNamePlusExt.split('/')[0],
                            isRelative = segment === '.' || segment === '..';

                        //Have a file extension alias, and it is not the
                        //dots from a relative path.
                        if (index !== -1 && (!isRelative || index > 1)) {
                            ext = moduleNamePlusExt.substring(index, moduleNamePlusExt.length);
                            moduleNamePlusExt = moduleNamePlusExt.substring(0, index);
                        }

                        return context.nameToUrl(normalize(moduleNamePlusExt,
                                                relMap && relMap.id, true), ext,  true);
                    },

                    defined: function (id) {
                        return hasProp(defined, makeModuleMap(id, relMap, false, true).id);
                    },

                    specified: function (id) {
                        id = makeModuleMap(id, relMap, false, true).id;
                        return hasProp(defined, id) || hasProp(registry, id);
                    }
                });

                //Only allow undef on top level require calls
                if (!relMap) {
                    localRequire.undef = function (id) {
                        //Bind any waiting define() calls to this context,
                        //fix for #408
                        takeGlobalQueue();

                        var map = makeModuleMap(id, relMap, true),
                            mod = getOwn(registry, id);

                        mod.undefed = true;
                        removeScript(id);

                        delete defined[id];
                        delete urlFetched[map.url];
                        delete undefEvents[id];

                        //Clean queued defines too. Go backwards
                        //in array so that the splices do not
                        //mess up the iteration.
                        eachReverse(defQueue, function(args, i) {
                            if (args[0] === id) {
                                defQueue.splice(i, 1);
                            }
                        });
                        delete context.defQueueMap[id];

                        if (mod) {
                            //Hold on to listeners in case the
                            //module will be attempted to be reloaded
                            //using a different config.
                            if (mod.events.defined) {
                                undefEvents[id] = mod.events;
                            }

                            cleanRegistry(id);
                        }
                    };
                }

                return localRequire;
            },

            /**
             * Called to enable a module if it is still in the registry
             * awaiting enablement. A second arg, parent, the parent module,
             * is passed in for context, when this method is overridden by
             * the optimizer. Not shown here to keep code compact.
             */
            enable: function (depMap) {
                var mod = getOwn(registry, depMap.id);
                if (mod) {
                    getModule(depMap).enable();
                }
            },

            /**
             * Internal method used by environment adapters to complete a load event.
             * A load event could be a script load or just a load pass from a synchronous
             * load call.
             * @param {String} moduleName the name of the module to potentially complete.
             */
            completeLoad: function (moduleName) {
                var found, args, mod,
                    shim = getOwn(config.shim, moduleName) || {},
                    shExports = shim.exports;

                takeGlobalQueue();

                while (defQueue.length) {
                    args = defQueue.shift();
                    if (args[0] === null) {
                        args[0] = moduleName;
                        //If already found an anonymous module and bound it
                        //to this name, then this is some other anon module
                        //waiting for its completeLoad to fire.
                        if (found) {
                            break;
                        }
                        found = true;
                    } else if (args[0] === moduleName) {
                        //Found matching define call for this script!
                        found = true;
                    }

                    callGetModule(args);
                }
                context.defQueueMap = {};

                //Do this after the cycle of callGetModule in case the result
                //of those calls/init calls changes the registry.
                mod = getOwn(registry, moduleName);

                if (!found && !hasProp(defined, moduleName) && mod && !mod.inited) {
                    if (config.enforceDefine && (!shExports || !getGlobal(shExports))) {
                        if (hasPathFallback(moduleName)) {
                            return;
                        } else {
                            return onError(makeError('nodefine',
                                             'No define call for ' + moduleName,
                                             null,
                                             [moduleName]));
                        }
                    } else {
                        //A script that does not call define(), so just simulate
                        //the call for it.
                        callGetModule([moduleName, (shim.deps || []), shim.exportsFn]);
                    }
                }

                checkLoaded();
            },

            /**
             * Converts a module name to a file path. Supports cases where
             * moduleName may actually be just an URL.
             * Note that it **does not** call normalize on the moduleName,
             * it is assumed to have already been normalized. This is an
             * internal API, not a public one. Use toUrl for the public API.
             */
            nameToUrl: function (moduleName, ext, skipExt) {
                var paths, syms, i, parentModule, url,
                    parentPath, bundleId,
                    pkgMain = getOwn(config.pkgs, moduleName);

                if (pkgMain) {
                    moduleName = pkgMain;
                }

                bundleId = getOwn(bundlesMap, moduleName);

                if (bundleId) {
                    return context.nameToUrl(bundleId, ext, skipExt);
                }

                //If a colon is in the URL, it indicates a protocol is used and it is just
                //an URL to a file, or if it starts with a slash, contains a query arg (i.e. ?)
                //or ends with .js, then assume the user meant to use an url and not a module id.
                //The slash is important for protocol-less URLs as well as full paths.
                if (req.jsExtRegExp.test(moduleName)) {
                    //Just a plain path, not module name lookup, so just return it.
                    //Add extension if it is included. This is a bit wonky, only non-.js things pass
                    //an extension, this method probably needs to be reworked.
                    url = moduleName + (ext || '');
                } else {
                    //A module that needs to be converted to a path.
                    paths = config.paths;

                    syms = moduleName.split('/');
                    //For each module name segment, see if there is a path
                    //registered for it. Start with most specific name
                    //and work up from it.
                    for (i = syms.length; i > 0; i -= 1) {
                        parentModule = syms.slice(0, i).join('/');

                        parentPath = getOwn(paths, parentModule);
                        if (parentPath) {
                            //If an array, it means there are a few choices,
                            //Choose the one that is desired
                            if (isArray(parentPath)) {
                                parentPath = parentPath[0];
                            }
                            syms.splice(0, i, parentPath);
                            break;
                        }
                    }

                    //Join the path parts together, then figure out if baseUrl is needed.
                    url = syms.join('/');
                    url += (ext || (/^data\:|^blob\:|\?/.test(url) || skipExt ? '' : '.js'));
                    url = (url.charAt(0) === '/' || url.match(/^[\w\+\.\-]+:/) ? '' : config.baseUrl) + url;
                }

                return config.urlArgs && !/^blob\:/.test(url) ?
                       url + config.urlArgs(moduleName, url) : url;
            },

            //Delegates to req.load. Broken out as a separate function to
            //allow overriding in the optimizer.
            load: function (id, url) {
                req.load(context, id, url);
            },

            /**
             * Executes a module callback function. Broken out as a separate function
             * solely to allow the build system to sequence the files in the built
             * layer in the right sequence.
             *
             * @private
             */
            execCb: function (name, callback, args, exports) {
                return callback.apply(exports, args);
            },

            /**
             * callback for script loads, used to check status of loading.
             *
             * @param {Event} evt the event from the browser for the script
             * that was loaded.
             */
            onScriptLoad: function (evt) {
                //Using currentTarget instead of target for Firefox 2.0's sake. Not
                //all old browsers will be supported, but this one was easy enough
                //to support and still makes sense.
                if (evt.type === 'load' ||
                        (readyRegExp.test((evt.currentTarget || evt.srcElement).readyState))) {
                    //Reset interactive script so a script node is not held onto for
                    //to long.
                    interactiveScript = null;

                    //Pull out the name of the module and the context.
                    var data = getScriptData(evt);
                    context.completeLoad(data.id);
                }
            },

            /**
             * Callback for script errors.
             */
            onScriptError: function (evt) {
                var data = getScriptData(evt);
                if (!hasPathFallback(data.id)) {
                    var parents = [];
                    eachProp(registry, function(value, key) {
                        if (key.indexOf('_@r') !== 0) {
                            each(value.depMaps, function(depMap) {
                                if (depMap.id === data.id) {
                                    parents.push(key);
                                    return true;
                                }
                            });
                        }
                    });
                    return onError(makeError('scripterror', 'Script error for "' + data.id +
                                             (parents.length ?
                                             '", needed by: ' + parents.join(', ') :
                                             '"'), evt, [data.id]));
                }
            }
        };

        context.require = context.makeRequire();
        return context;
    }

    /**
     * Main entry point.
     *
     * If the only argument to require is a string, then the module that
     * is represented by that string is fetched for the appropriate context.
     *
     * If the first argument is an array, then it will be treated as an array
     * of dependency string names to fetch. An optional function callback can
     * be specified to execute when all of those dependencies are available.
     *
     * Make a local req variable to help Caja compliance (it assumes things
     * on a require that are not standardized), and to give a short
     * name for minification/local scope use.
     */
    req = requirejs = function (deps, callback, errback, optional) {

        //Find the right context, use default
        var context, config,
            contextName = defContextName;

        // Determine if have config object in the call.
        if (!isArray(deps) && typeof deps !== 'string') {
            // deps is a config object
            config = deps;
            if (isArray(callback)) {
                // Adjust args if there are dependencies
                deps = callback;
                callback = errback;
                errback = optional;
            } else {
                deps = [];
            }
        }

        if (config && config.context) {
            contextName = config.context;
        }

        context = getOwn(contexts, contextName);
        if (!context) {
            context = contexts[contextName] = req.s.newContext(contextName);
        }

        if (config) {
            context.configure(config);
        }

        return context.require(deps, callback, errback);
    };

    /**
     * Support require.config() to make it easier to cooperate with other
     * AMD loaders on globally agreed names.
     */
    req.config = function (config) {
        return req(config);
    };

    /**
     * Execute something after the current tick
     * of the event loop. Override for other envs
     * that have a better solution than setTimeout.
     * @param  {Function} fn function to execute later.
     */
    req.nextTick = typeof setTimeout !== 'undefined' ? function (fn) {
        setTimeout(fn, 4);
    } : function (fn) { fn(); };

    /**
     * Export require as a global, but only if it does not already exist.
     */
    if (!require) {
        require = req;
    }

    req.version = version;

    //Used to filter out dependencies that are already paths.
    req.jsExtRegExp = /^\/|:|\?|\.js$/;
    req.isBrowser = isBrowser;
    s = req.s = {
        contexts: contexts,
        newContext: newContext
    };

    //Create default context.
    req({});

    //Exports some context-sensitive methods on global require.
    each([
        'toUrl',
        'undef',
        'defined',
        'specified'
    ], function (prop) {
        //Reference from contexts instead of early binding to default context,
        //so that during builds, the latest instance of the default context
        //with its config gets used.
        req[prop] = function () {
            var ctx = contexts[defContextName];
            return ctx.require[prop].apply(ctx, arguments);
        };
    });

    if (isBrowser) {
        head = s.head = document.getElementsByTagName('head')[0];
        //If BASE tag is in play, using appendChild is a problem for IE6.
        //When that browser dies, this can be removed. Details in this jQuery bug:
        //http://dev.jquery.com/ticket/2709
        baseElement = document.getElementsByTagName('base')[0];
        if (baseElement) {
            head = s.head = baseElement.parentNode;
        }
    }

    /**
     * Any errors that require explicitly generates will be passed to this
     * function. Intercept/override it if you want custom error handling.
     * @param {Error} err the error object.
     */
    req.onError = defaultOnError;

    /**
     * Creates the node for the load command. Only used in browser envs.
     */
    req.createNode = function (config, moduleName, url) {
        var node = config.xhtml ?
                document.createElementNS('http://www.w3.org/1999/xhtml', 'html:script') :
                document.createElement('script');
        node.type = config.scriptType || 'text/javascript';
        node.charset = 'utf-8';
        node.async = true;
        return node;
    };

    /**
     * Does the request to load a module for the browser case.
     * Make this a separate function to allow other environments
     * to override it.
     *
     * @param {Object} context the require context to find state.
     * @param {String} moduleName the name of the module.
     * @param {Object} url the URL to the module.
     */
    req.load = function (context, moduleName, url) {
        var config = (context && context.config) || {},
            node;
        if (isBrowser) {
            //In the browser so use a script tag
            node = req.createNode(config, moduleName, url);

            node.setAttribute('data-requirecontext', context.contextName);
            node.setAttribute('data-requiremodule', moduleName);

            //Set up load listener. Test attachEvent first because IE9 has
            //a subtle issue in its addEventListener and script onload firings
            //that do not match the behavior of all other browsers with
            //addEventListener support, which fire the onload event for a
            //script right after the script execution. See:
            //https://connect.microsoft.com/IE/feedback/details/648057/script-onload-event-is-not-fired-immediately-after-script-execution
            //UNFORTUNATELY Opera implements attachEvent but does not follow the script
            //script execution mode.
            if (node.attachEvent &&
                    //Check if node.attachEvent is artificially added by custom script or
                    //natively supported by browser
                    //read https://github.com/requirejs/requirejs/issues/187
                    //if we can NOT find [native code] then it must NOT natively supported.
                    //in IE8, node.attachEvent does not have toString()
                    //Note the test for "[native code" with no closing brace, see:
                    //https://github.com/requirejs/requirejs/issues/273
                    !(node.attachEvent.toString && node.attachEvent.toString().indexOf('[native code') < 0) &&
                    !isOpera) {
                //Probably IE. IE (at least 6-8) do not fire
                //script onload right after executing the script, so
                //we cannot tie the anonymous define call to a name.
                //However, IE reports the script as being in 'interactive'
                //readyState at the time of the define call.
                useInteractive = true;

                node.attachEvent('onreadystatechange', context.onScriptLoad);
                //It would be great to add an error handler here to catch
                //404s in IE9+. However, onreadystatechange will fire before
                //the error handler, so that does not help. If addEventListener
                //is used, then IE will fire error before load, but we cannot
                //use that pathway given the connect.microsoft.com issue
                //mentioned above about not doing the 'script execute,
                //then fire the script load event listener before execute
                //next script' that other browsers do.
                //Best hope: IE10 fixes the issues,
                //and then destroys all installs of IE 6-9.
                //node.attachEvent('onerror', context.onScriptError);
            } else {
                node.addEventListener('load', context.onScriptLoad, false);
                node.addEventListener('error', context.onScriptError, false);
            }
            node.src = url;

            //Calling onNodeCreated after all properties on the node have been
            //set, but before it is placed in the DOM.
            if (config.onNodeCreated) {
                config.onNodeCreated(node, config, moduleName, url);
            }

            //For some cache cases in IE 6-8, the script executes before the end
            //of the appendChild execution, so to tie an anonymous define
            //call to the module name (which is stored on the node), hold on
            //to a reference to this node, but clear after the DOM insertion.
            currentlyAddingScript = node;
            if (baseElement) {
                head.insertBefore(node, baseElement);
            } else {
                head.appendChild(node);
            }
            currentlyAddingScript = null;

            return node;
        } else if (isWebWorker) {
            try {
                //In a web worker, use importScripts. This is not a very
                //efficient use of importScripts, importScripts will block until
                //its script is downloaded and evaluated. However, if web workers
                //are in play, the expectation is that a build has been done so
                //that only one script needs to be loaded anyway. This may need
                //to be reevaluated if other use cases become common.

                // Post a task to the event loop to work around a bug in WebKit
                // where the worker gets garbage-collected after calling
                // importScripts(): https://webkit.org/b/153317
                setTimeout(function() {}, 0);
                importScripts(url);

                //Account for anonymous modules
                context.completeLoad(moduleName);
            } catch (e) {
                context.onError(makeError('importscripts',
                                'importScripts failed for ' +
                                    moduleName + ' at ' + url,
                                e,
                                [moduleName]));
            }
        }
    };

    function getInteractiveScript() {
        if (interactiveScript && interactiveScript.readyState === 'interactive') {
            return interactiveScript;
        }

        eachReverse(scripts(), function (script) {
            if (script.readyState === 'interactive') {
                return (interactiveScript = script);
            }
        });
        return interactiveScript;
    }

    //Look for a data-main script attribute, which could also adjust the baseUrl.
    if (isBrowser && !cfg.skipDataMain) {
        //Figure out baseUrl. Get it from the script tag with require.js in it.
        eachReverse(scripts(), function (script) {
            //Set the 'head' where we can append children by
            //using the script's parent.
            if (!head) {
                head = script.parentNode;
            }

            //Look for a data-main attribute to set main script for the page
            //to load. If it is there, the path to data main becomes the
            //baseUrl, if it is not already set.
            dataMain = script.getAttribute('data-main');
            if (dataMain) {
                //Preserve dataMain in case it is a path (i.e. contains '?')
                mainScript = dataMain;

                //Set final baseUrl if there is not already an explicit one,
                //but only do so if the data-main value is not a loader plugin
                //module ID.
                if (!cfg.baseUrl && mainScript.indexOf('!') === -1) {
                    //Pull off the directory of data-main for use as the
                    //baseUrl.
                    src = mainScript.split('/');
                    mainScript = src.pop();
                    subPath = src.length ? src.join('/')  + '/' : './';

                    cfg.baseUrl = subPath;
                }

                //Strip off any trailing .js since mainScript is now
                //like a module name.
                mainScript = mainScript.replace(jsSuffixRegExp, '');

                //If mainScript is still a path, fall back to dataMain
                if (req.jsExtRegExp.test(mainScript)) {
                    mainScript = dataMain;
                }

                //Put the data-main script in the files to load.
                cfg.deps = cfg.deps ? cfg.deps.concat(mainScript) : [mainScript];

                return true;
            }
        });
    }

    /**
     * The function that handles definitions of modules. Differs from
     * require() in that a string for the module should be the first argument,
     * and the function to execute after dependencies are loaded should
     * return a value to define the module corresponding to the first argument's
     * name.
     */
    define = function (name, deps, callback) {
        var node, context;

        //Allow for anonymous modules
        if (typeof name !== 'string') {
            //Adjust args appropriately
            callback = deps;
            deps = name;
            name = null;
        }

        //This module may not have dependencies
        if (!isArray(deps)) {
            callback = deps;
            deps = null;
        }

        //If no name, and callback is a function, then figure out if it a
        //CommonJS thing with dependencies.
        if (!deps && isFunction(callback)) {
            deps = [];
            //Remove comments from the callback string,
            //look for require calls, and pull them into the dependencies,
            //but only if there are function args.
            if (callback.length) {
                callback
                    .toString()
                    .replace(commentRegExp, commentReplace)
                    .replace(cjsRequireRegExp, function (match, dep) {
                        deps.push(dep);
                    });

                //May be a CommonJS thing even without require calls, but still
                //could use exports, and module. Avoid doing exports and module
                //work though if it just needs require.
                //REQUIRES the function to expect the CommonJS variables in the
                //order listed below.
                deps = (callback.length === 1 ? ['require'] : ['require', 'exports', 'module']).concat(deps);
            }
        }

        //If in IE 6-8 and hit an anonymous define() call, do the interactive
        //work.
        if (useInteractive) {
            node = currentlyAddingScript || getInteractiveScript();
            if (node) {
                if (!name) {
                    name = node.getAttribute('data-requiremodule');
                }
                context = contexts[node.getAttribute('data-requirecontext')];
            }
        }

        //Always save off evaluating the def call until the script onload handler.
        //This allows multiple modules to be in a file without prematurely
        //tracing dependencies, and allows for anonymous module support,
        //where the module name is not known until the script onload event
        //occurs. If no context, use the global queue, and get it processed
        //in the onscript load callback.
        if (context) {
            context.defQueue.push([name, deps, callback]);
            context.defQueueMap[name] = true;
        } else {
            globalDefQueue.push([name, deps, callback]);
        }
    };

    define.amd = {
        jQuery: true
    };

    /**
     * Executes the text. Normally just uses eval, but can be modified
     * to use a better, environment-specific call. Only used for transpiling
     * loader plugins, not for plain JS modules.
     * @param {String} text the text to execute/evaluate.
     */
    req.exec = function (text) {
        /*jslint evil: true */
        return eval(text);
    };

    //Set up with config info.
    req(cfg);
}(this, (typeof setTimeout === 'undefined' ? undefined : setTimeout)));

requirejs.config({
    baseUrl: PORTAL_URL,
    paths: {
    "ace-mode-css": "++plone++static/components/ace-builds/src/mode-css",
    "ace-mode-javascript": "++plone++static/components/ace-builds/src/mode-javascript",
    "ace-mode-text": "++plone++static/components/ace-builds/src/mode-text",
    "ace-theme-monokai": "++plone++static/components/ace-builds/src/theme-monokai",
    "ace": "++plone++static/components/ace-builds/src/ace",
    "anonymouseditpatterns": "++plone++collective.anonymouseditpatterns/js/anonymouseditpatterns",
    "backbone": "++plone++static/components/backbone/backbone",
    "backbone.paginator": "++plone++static/components/backbone.paginator/lib/backbone.paginator",
    "bootstrap-alert": "++plone++static/components/bootstrap/js/alert",
    "bootstrap-collapse": "++plone++static/components/bootstrap/js/collapse",
    "bootstrap-dropdown": "++plone++static/components/bootstrap/js/dropdown",
    "bootstrap-tooltip": "++plone++static/components/bootstrap/js/tooltip",
    "bootstrap-transition": "++plone++static/components/bootstrap/js/transition",
    "collective-faq": "++resource++collective.faq/faq",
    "datatables.net-autofill-bs": "++plone++static/components/datatables.net-autofill-bs/js/autoFill.bootstrap",
    "datatables.net-autofill": "++plone++static/components/datatables.net-autofill/js/dataTables.autoFill.min",
    "datatables.net-bs": "++plone++static/components/datatables.net-bs/js/dataTables.bootstrap",
    "datatables.net-buttons-bs": "++plone++static/components/datatables.net-buttons-bs/js/buttons.bootstrap.min",
    "datatables.net-buttons-colvis": "++plone++static/components/datatables.net-buttons/js/buttons.colVis.min",
    "datatables.net-buttons-flash": "++plone++static/components/datatables.net-buttons/js/buttons.flash.min",
    "datatables.net-buttons-html5": "++plone++static/components/datatables.net-buttons/js/buttons.html5.min",
    "datatables.net-buttons-print": "++plone++static/components/datatables.net-buttons/js/buttons.print.min",
    "datatables.net-buttons": "++plone++static/components/datatables.net-buttons/js/dataTables.buttons.min",
    "datatables.net-colreorder": "++plone++static/components/datatables.net-colreorder/js/dataTables.colReorder.min",
    "datatables.net-fixedcolumns": "++plone++static/components/datatables.net-fixedcolumns/js/dataTables.fixedColumns.min",
    "datatables.net-fixedheader": "++plone++static/components/datatables.net-fixedheader/js/dataTables.fixedHeader.min",
    "datatables.net-keytable": "++plone++static/components/datatables.net-keytable/js/dataTables.keyTable.min",
    "datatables.net-responsive-bs": "++plone++static/components/datatables.net-responsive-bs/js/responsive.bootstrap.min",
    "datatables.net-responsive": "++plone++static/components/datatables.net-responsive/js/dataTables.responsive.min",
    "datatables.net-rowreorder": "++plone++static/components/datatables.net-rowreorder/js/dataTables.rowReorder.min",
    "datatables.net-scroller": "++plone++static/components/datatables.net-scroller/js/dataTables.scroller.min",
    "datatables.net-select": "++plone++static/components/datatables.net-select/js/dataTables.select.min",
    "datatables.net": "++plone++static/components/datatables.net/js/jquery.dataTables",
    "dropzone": "++plone++static/components/dropzone/dist/dropzone-amd-module",
    "filemanager": "++plone++static/filemanager",
    "humboldt.OKZwidget_js": "++resource++hu_okz_widget/hu_okz_widget",
    "humboldt.directsearch_css_js": "++resource++humboldt.directsearch.resource/javascript",
    "humboldt.folderimage_js": "++resource++humboldt.folderimage/folderimage",
    "humboldt.frontpageslider_css_js": "++resource++humboldt.frontpageslider.js/jquerybxslider/jquery.bxslider.min",
    "humboldt.menus_js": "++resource++humboldt.menus/javascript/menus",
    "humboldt.tablesorter_js": "++resource++humboldt.tablesorter/TableSort",
    "jqtree-contextmenu": "++plone++static/components/cs-jqtree-contextmenu/src/jqTreeContextMenu",
    "jqtree": "++plone++static/components/jqtree/tree.jquery",
    "jquery.browser": "++plone++static/components/jquery.browser/dist/jquery.browser",
    "jquery": "++plone++static/components/jquery/dist/jquery.min",
    "jquery.cookie": "++plone++static/components/jquery.cookie/jquery.cookie",
    "jquery.event.drag": "++resource++mockuplib/jquery.event.drag",
    "jquery.event.drop": "++resource++mockuplib/jquery.event.drop",
    "jquery.form": "++plone++static/components/jquery-form/src/jquery.form",
    "jquery.recurrenceinput": "++plone++static/components/jquery.recurrenceinput.js/src/jquery.recurrenceinput",
    "jquery.tmpl": "++plone++static/components/jquery.recurrenceinput.js/lib/jquery.tmpl",
    "layouts-editor": "++plone++mosaic/js/layouts-editor",
    "less": "++plone++static/components/less/dist/less",
    "logging": "++plone++static/components/logging/src/logging",
    "mockup-i18n": "++resource++mockupjs/i18n",
    "mockup-patterns-autotoc": "++resource++mockup/autotoc/pattern",
    "mockup-patterns-backdrop": "++resource++mockup/backdrop/pattern",
    "mockup-patterns-base": "++resource++mockup/base/pattern",
    "mockup-patterns-contentloader": "++resource++mockup/contentloader/pattern",
    "mockup-patterns-cookietrigger": "++resource++mockup/cookietrigger/pattern",
    "mockup-patterns-datatables": "++resource++mockup/datatables/pattern",
    "mockup-patterns-filemanager": "++resource++mockup/filemanager/pattern",
    "mockup-patterns-filemanager-url": "++resource++mockup/filemanager",
    "mockup-patterns-formautofocus": "++resource++mockup/formautofocus/pattern",
    "mockup-patterns-formunloadalert": "++resource++mockup/formunloadalert/pattern",
    "mockup-patterns-inlinevalidation": "++resource++mockup/inlinevalidation/pattern",
    "mockup-patterns-livesearch": "++resource++mockup/livesearch/pattern",
    "mockup-patterns-markspeciallinks": "++resource++mockup/markspeciallinks/pattern",
    "mockup-patterns-modal": "++resource++mockup/modal/pattern",
    "mockup-patterns-moment": "++resource++mockup/moment/pattern",
    "mockup-patterns-navigationmarker": "++resource++mockup/navigationmarker/pattern",
    "mockup-patterns-pickadate": "++resource++mockup/pickadate/pattern",
    "mockup-patterns-preventdoublesubmit": "++resource++mockup/preventdoublesubmit/pattern",
    "mockup-patterns-querystring": "++resource++mockup/querystring/pattern",
    "mockup-patterns-recurrence": "++resource++mockup/recurrence/pattern",
    "mockup-patterns-relateditems-upload": "++resource++mockup/relateditems/upload",
    "mockup-patterns-relateditems": "++resource++mockup/relateditems/pattern",
    "mockup-patterns-relateditems-url": "++resource++mockup/relateditems",
    "mockup-patterns-resourceregistry": "++resource++mockup/resourceregistry/pattern",
    "mockup-patterns-resourceregistry-url": "++resource++mockup/resourceregistry",
    "mockup-patterns-select2": "++resource++mockup/select2/pattern",
    "mockup-patterns-sortable": "++resource++mockup/sortable/pattern",
    "mockup-patterns-structure": "++resource++mockup/structure/pattern",
    "mockup-patterns-structure-url": "++resource++mockup/structure",
    "mockup-patterns-structureupdater": "++resource++mockup/structure/pattern-structureupdater",
    "mockup-patterns-textareamimetypeselector": "++resource++mockup/textareamimetypeselector/pattern",
    "mockup-patterns-texteditor": "++resource++mockup/texteditor/pattern",
    "mockup-patterns-thememapper": "++resource++mockup/thememapper/pattern",
    "mockup-patterns-thememapper-url": "++resource++mockup/thememapper",
    "mockup-patterns-tinymce": "++resource++mockup/tinymce/pattern",
    "mockup-patterns-tinymce-url": "++resource++mockup/tinymce",
    "mockup-patterns-toggle": "++resource++mockup/toggle/pattern",
    "mockup-patterns-tooltip": "++resource++mockup/tooltip/pattern",
    "mockup-patterns-tree": "++resource++mockup/tree/pattern",
    "mockup-patterns-upload": "++resource++mockup/upload/pattern",
    "mockup-patterns-upload-url": "++resource++mockup/upload",
    "mockup-router": "++resource++mockupjs/router",
    "mockup-ui-url": "++resource++mockupjs/ui",
    "mockup-utils": "++resource++mockupjs/utils",
    "moment": "++plone++static/components/moment/min/moment.min",
    "moment-url": "++plone++static/components/moment/locale",
    "mosaic-base-url": "++plone++mosaic/js",
    "mosaic": "++plone++mosaic/js/mosaic.pattern",
    "mosaic-url": "++plone++mosaic/js",
    "pat-base": "++plone++static/components/patternslib/src/core/base",
    "pat-compat": "++plone++static/components/patternslib/src/core/compat",
    "pat-jquery-ext": "++plone++static/components/patternslib/src/core/jquery-ext",
    "pat-logger": "++plone++static/components/patternslib/src/core/logger",
    "pat-mockup-parser": "++plone++static/components/patternslib/src/core/mockup-parser",
    "pat-registry": "++plone++static/components/patternslib/src/core/registry",
    "pat-utils": "++plone++static/components/patternslib/src/core/utils",
    "picker": "++plone++static/components/pickadate/lib/picker",
    "picker.date": "++plone++static/components/pickadate/lib/picker.date",
    "picker.time": "++plone++static/components/pickadate/lib/picker.time",
    "plone-app-discussion": "++plone++plone.app.discussion.javascripts/comments",
    "plone-app-event": "++plone++plone.app.event/event",
    "plone-base": "++resource++plone-base",
    "plone-datatables": "++resource++plone-datatables",
    "plone-editor-tools": "++resource++plone-editor-tools",
    "plone-logged-in": "++resource++plone-logged-in",
    "plone-moment": "++resource++plone-moment",
    "plone-patterns-portletmanager": "++resource++manage-portlets",
    "plone-patterns-toolbar": "++resource++mockup/toolbar/pattern",
    "plone-tinymce": "++resource++plone-tinymce",
    "plone": "++resource++plone",
    "plone_app_imagecropping": "++resource++plone.app.imagecropping.static/bundle",
    "plone_app_imagecropping_cropper": "++resource++plone.app.imagecropping.static/cropper-dist/cropper",
    "plone_app_imagecropping_cropperpattern": "++resource++plone.app.imagecropping.static/cropperpattern",
    "plone_app_imagecropping_cropscaleselect": "++resource++plone.app.imagecropping.static/cropscaleselect",
    "resource-plone-app-jquerytools-dateinput-js": "++plone++static/components/jquery.recurrenceinput.js/lib/jquery.tools.dateinput",
    "resource-plone-app-jquerytools-js": "++plone++static/components/jquery.recurrenceinput.js/lib/jquery.tools.overlay",
    "resourceregistry": "++plone++static/resourceregistry",
    "select2": "++plone++static/components/select2/select2",
    "spotlightjs": "++plone++plone.gallery/dist/spotlight",
    "text": "++plone++static/components/requirejs-text/text",
    "thememapper": "++plone++static/thememapper",
    "tinymce-advlist": "++plone++static/components/tinymce-builded/js/tinymce/plugins/advlist/plugin",
    "tinymce-anchor": "++plone++static/components/tinymce-builded/js/tinymce/plugins/anchor/plugin",
    "tinymce-autolink": "++plone++static/components/tinymce-builded/js/tinymce/plugins/autolink/plugin",
    "tinymce-autoresize": "++plone++static/components/tinymce-builded/js/tinymce/plugins/autoresize/plugin",
    "tinymce-autosave": "++plone++static/components/tinymce-builded/js/tinymce/plugins/autosave/plugin",
    "tinymce-bbcode": "++plone++static/components/tinymce-builded/js/tinymce/plugins/bbcode/plugin",
    "tinymce-charmap": "++plone++static/components/tinymce-builded/js/tinymce/plugins/charmap/plugin",
    "tinymce-code": "++plone++static/components/tinymce-builded/js/tinymce/plugins/code/plugin",
    "tinymce-colorpicker": "++plone++static/components/tinymce-builded/js/tinymce/plugins/colorpicker/plugin",
    "tinymce-compat3x": "++plone++static/components/tinymce-builded/js/tinymce/plugins/compat3x/plugin",
    "tinymce-contextmenu": "++plone++static/components/tinymce-builded/js/tinymce/plugins/contextmenu/plugin",
    "tinymce-directionality": "++plone++static/components/tinymce-builded/js/tinymce/plugins/directionality/plugin",
    "tinymce-emoticons": "++plone++static/components/tinymce-builded/js/tinymce/plugins/emoticons/plugin",
    "tinymce-fullpage": "++plone++static/components/tinymce-builded/js/tinymce/plugins/fullpage/plugin",
    "tinymce-fullscreen": "++plone++static/components/tinymce-builded/js/tinymce/plugins/fullscreen/plugin",
    "tinymce-hr": "++plone++static/components/tinymce-builded/js/tinymce/plugins/hr/plugin",
    "tinymce-image": "++plone++static/components/tinymce-builded/js/tinymce/plugins/image/plugin",
    "tinymce-importcss": "++plone++static/components/tinymce-builded/js/tinymce/plugins/importcss/plugin",
    "tinymce-insertdatetime": "++plone++static/components/tinymce-builded/js/tinymce/plugins/insertdatetime/plugin",
    "tinymce-legacyoutput": "++plone++static/components/tinymce-builded/js/tinymce/plugins/legacyoutput/plugin",
    "tinymce-link": "++plone++static/components/tinymce-builded/js/tinymce/plugins/link/plugin",
    "tinymce-lists": "++plone++static/components/tinymce-builded/js/tinymce/plugins/lists/plugin",
    "tinymce-media": "++plone++static/components/tinymce-builded/js/tinymce/plugins/media/plugin",
    "tinymce-modern-theme": "++plone++static/components/tinymce-builded/js/tinymce/themes/modern/theme",
    "tinymce-nonbreaking": "++plone++static/components/tinymce-builded/js/tinymce/plugins/nonbreaking/plugin",
    "tinymce-noneditable": "++plone++static/components/tinymce-builded/js/tinymce/plugins/noneditable/plugin",
    "tinymce-pagebreak": "++plone++static/components/tinymce-builded/js/tinymce/plugins/pagebreak/plugin",
    "tinymce-paste": "++plone++static/components/tinymce-builded/js/tinymce/plugins/paste/plugin",
    "tinymce-preview": "++plone++static/components/tinymce-builded/js/tinymce/plugins/preview/plugin",
    "tinymce-print": "++plone++static/components/tinymce-builded/js/tinymce/plugins/print/plugin",
    "tinymce-save": "++plone++static/components/tinymce-builded/js/tinymce/plugins/save/plugin",
    "tinymce-searchreplace": "++plone++static/components/tinymce-builded/js/tinymce/plugins/searchreplace/plugin",
    "tinymce-spellchecker": "++plone++static/components/tinymce-builded/js/tinymce/plugins/spellchecker/plugin",
    "tinymce-tabfocus": "++plone++static/components/tinymce-builded/js/tinymce/plugins/tabfocus/plugin",
    "tinymce-table": "++plone++static/components/tinymce-builded/js/tinymce/plugins/table/plugin",
    "tinymce-template": "++plone++static/components/tinymce-builded/js/tinymce/plugins/template/plugin",
    "tinymce-textcolor": "++plone++static/components/tinymce-builded/js/tinymce/plugins/textcolor/plugin",
    "tinymce-textpattern": "++plone++static/components/tinymce-builded/js/tinymce/plugins/textpattern/plugin",
    "tinymce-visualblocks": "++plone++static/components/tinymce-builded/js/tinymce/plugins/visualblocks/plugin",
    "tinymce-visualchars": "++plone++static/components/tinymce-builded/js/tinymce/plugins/visualchars/plugin",
    "tinymce-wordcount": "++plone++static/components/tinymce-builded/js/tinymce/plugins/wordcount/plugin",
    "tinymce": "++plone++static/components/tinymce-builded/js/tinymce/tinymce",
    "translate": "++resource++mockupjs/i18n-wrapper",
    "underscore": "++plone++static/components/underscore/underscore"
},
    shim: {
        "backbone": {
            exports: "window.Backbone",
            deps: ["underscore", "jquery"]
        },
        "backbone.paginator": {
            exports: "window.Backbone.Paginator",
            deps: ["backbone"]
        },
        "bootstrap-alert": {
            deps: ["jquery"]
        },
        "bootstrap-collapse": {
            exports: "window.jQuery.fn.collapse.Constructor",
            deps: ["jquery"]
        },
        "bootstrap-dropdown": {
            deps: ["jquery"]
        },
        "bootstrap-tooltip": {
            deps: ["jquery"]
        },
        "bootstrap-transition": {
            exports: "window.jQuery.support.transition",
            deps: ["jquery"]
        },
        "collective-faq": {
            deps: ["jquery"]
        },
        "jqtree-contextmenu": {
            deps: ["jqtree"]
        },
        "jqtree": {
            deps: ["jquery"]
        },
        "jquery.browser": {
            deps: ["jquery"]
        },
        "jquery.cookie": {
            deps: ["jquery"]
        },
        "jquery.event.drag": {
            deps: ["jquery"]
        },
        "jquery.event.drop": {
            exports: "$.drop",
            deps: ["jquery"]
        },
        "jquery.recurrenceinput": {
            deps: ["jquery", "resource-plone-app-jquerytools-js", "resource-plone-app-jquerytools-dateinput-js", "jquery.tmpl"]
        },
        "jquery.tmpl": {
            deps: ["jquery"]
        },
        "picker.date": {
            deps: ["picker"]
        },
        "picker.time": {
            deps: ["picker"]
        },
        "resource-plone-app-jquerytools-dateinput-js": {
            deps: ["jquery"]
        },
        "resource-plone-app-jquerytools-js": {
            deps: ["jquery"]
        },
        "tinymce-advlist": {
            deps: ["tinymce"]
        },
        "tinymce-anchor": {
            deps: ["tinymce"]
        },
        "tinymce-autolink": {
            deps: ["tinymce"]
        },
        "tinymce-autoresize": {
            deps: ["tinymce"]
        },
        "tinymce-autosave": {
            deps: ["tinymce"]
        },
        "tinymce-bbcode": {
            deps: ["tinymce"]
        },
        "tinymce-charmap": {
            deps: ["tinymce"]
        },
        "tinymce-code": {
            deps: ["tinymce"]
        },
        "tinymce-colorpicker": {
            deps: ["tinymce"]
        },
        "tinymce-compat3x": {
            deps: ["tinymce"]
        },
        "tinymce-contextmenu": {
            deps: ["tinymce"]
        },
        "tinymce-directionality": {
            deps: ["tinymce"]
        },
        "tinymce-emoticons": {
            deps: ["tinymce"]
        },
        "tinymce-fullpage": {
            deps: ["tinymce"]
        },
        "tinymce-fullscreen": {
            deps: ["tinymce"]
        },
        "tinymce-hr": {
            deps: ["tinymce"]
        },
        "tinymce-image": {
            deps: ["tinymce"]
        },
        "tinymce-importcss": {
            deps: ["tinymce"]
        },
        "tinymce-insertdatetime": {
            deps: ["tinymce"]
        },
        "tinymce-legacyoutput": {
            deps: ["tinymce"]
        },
        "tinymce-link": {
            deps: ["tinymce"]
        },
        "tinymce-lists": {
            deps: ["tinymce"]
        },
        "tinymce-media": {
            deps: ["tinymce"]
        },
        "tinymce-modern-theme": {
            deps: ["tinymce"]
        },
        "tinymce-nonbreaking": {
            deps: ["tinymce"]
        },
        "tinymce-noneditable": {
            deps: ["tinymce"]
        },
        "tinymce-pagebreak": {
            deps: ["tinymce"]
        },
        "tinymce-paste": {
            deps: ["tinymce"]
        },
        "tinymce-preview": {
            deps: ["tinymce"]
        },
        "tinymce-print": {
            deps: ["tinymce"]
        },
        "tinymce-save": {
            deps: ["tinymce"]
        },
        "tinymce-searchreplace": {
            deps: ["tinymce"]
        },
        "tinymce-spellchecker": {
            deps: ["tinymce"]
        },
        "tinymce-tabfocus": {
            deps: ["tinymce"]
        },
        "tinymce-table": {
            deps: ["tinymce"]
        },
        "tinymce-template": {
            deps: ["tinymce"]
        },
        "tinymce-textcolor": {
            deps: ["tinymce"]
        },
        "tinymce-textpattern": {
            deps: ["tinymce"]
        },
        "tinymce-visualblocks": {
            deps: ["tinymce"]
        },
        "tinymce-visualchars": {
            deps: ["tinymce"]
        },
        "tinymce-wordcount": {
            deps: ["tinymce"]
        },
        "tinymce": {
            exports: "window.tinyMCE",
            init: function () { this.tinyMCE.DOM.events.domLoaded = true; return this.tinyMCE; }
        },
        "underscore": {
            exports: "window._"
        }
    },
    optimize: 'uglify',
    wrapShim: true
});
define("mockup-patterns-inlinevalidation",["jquery","pat-base"],function(a,e){"use strict";return e.extend({name:"inlinevalidation",trigger:".pat-inlinevalidation",parser:"mockup",render_error:function(e,t){var i=a("div.fieldErrorBox",e);""!==t?(e.addClass("error"),i.html(t)):(e.removeClass("error"),i.html(""))},render_error_bootstrap:function(e,t){var i=a("input",e),e=a(".invalid-feedback",e);""!==t?(i.addClass("is-invalid"),e.length?e.html(t):a('<div class="invalid-feedback">'+t+"</div>").insertAfter(i)):(i.removeClass("is-invalid"),e.length&&e.remove())},append_url_path:function(e,t){var i,n=e.split(/\?/),o=n[0];for("/"!==o[o.length-1]&&(o+="/"),o+=t,i=1;i<n.length;i+=1)o+="?"+n[i];return o},queue:function(e,t){void 0===t&&(t=e,e="fx"),a(window).queue(e,t)},validate_archetypes_field:function(e){var t=a(e),i=t.closest(".field"),n=i.attr("data-uid"),o=i.attr("data-fieldname"),e=t.val();t.prop("multiple")&&null===e&&(e=a([]).serialize());var s=a.param({uid:n,fname:o,value:e},!0);i&&n&&o&&this.queue(a.proxy(function(t){a.ajax({type:"POST",url:a("base").attr("href")+"/at_validate_field?"+s,iframe:!1,success:a.proxy(function(e){this.render_error(i,e.errmsg),t()},this),error:function(){t()},dataType:"json"})},this))},validate_formlib_field:function(e){var i=a(e).closest(".field"),n=i.closest("form").clone(),o=i.attr("data-fieldname");n.find("input[type=file]").remove(),this.queue(a.proxy(function(t){n.ajaxSubmit({url:this.append_url_path(n.attr("action"),"@@formlib_validate_field"),data:{fname:o},iframe:!1,success:a.proxy(function(e){this.render_error(i,e.errmsg),t()},this),error:function(){t()},dataType:"json"})},this))},validate_z3cform_field:function(e){var t=a(e),i=t.closest(".field"),e=i.closest("form"),n=e.clone(),o=t.closest("fieldset").attr("data-fieldset"),s=i.attr("data-fieldname");a.each(a("select",e),function(e,t){a('select[name="'+t.name+'"]',n).val(a(t).val())}),n.find("input[type=file]").remove(),s&&this.queue(a.proxy(function(t){n.ajaxSubmit({url:this.append_url_path(n.attr("action"),"@@z3cform_validate_field"),data:{fname:s,fset:o},iframe:!1,success:a.proxy(function(e){i.hasClass("form-group")?this.render_error_bootstrap(i,e.errmsg):this.render_error(i,e.errmsg),t()},this),error:function(){t()},dataType:"json"})},this))},init:function(){this.$el.find('input[type="text"], input[type="password"], input[type="checkbox"], select, textarea').on("blur",a.proxy(function(e){"archetypes"===this.options.type?this.validate_archetypes_field(e.target):"z3c.form"===this.options.type?this.validate_z3cform_field(e.target):"formlib"===this.options.type&&this.validate_formlib_field(e.target)},this))}})}),define("mockup-utils",["jquery"],function(l){"use strict";function e(e){var i=this;return i.className="plone-loader",i.options=l.extend({},{backdrop:null,zIndex:10005},e=e||{}),i.init=function(){i.$el=l("."+i.className),0===i.$el.length&&(i.$el=l("<div><div></div></div>"),i.$el.addClass(i.className).hide().appendTo("body"))},i.show=function(e){i.init(),i.$el.show();var t=i.options.zIndex;"function"==typeof t?t=Math.max(t(),10005):(t=10005,l(".plone-modal-wrapper,.plone-modal-backdrop").each(function(){t=Math.max(t,l(this).css("zIndex")||10005)}),t+=1),i.$el.css("zIndex",t),void 0===e&&(e=!0),i.options.backdrop&&(i.options.backdrop.closeOnClick=e,i.options.backdrop.closeOnEsc=e,i.options.backdrop.init(),i.options.backdrop.show())},i.hide=function(){i.init(),i.$el.hide()},i}function n(e){return(e=void 0===e?"id":e)+Math.floor(65536*(1+Math.random())).toString(16).substring(1)}var t={get:function(e){if(window.localStorage){e=window.localStorage[e];return"string"==typeof e?JSON.parse(e):void 0}},set:function(e,t){window.localStorage&&(window.localStorage[e]=JSON.stringify(t))}};return{bool:function(e){return"string"==typeof e&&(e=l.trim(e).toLowerCase()),-1===["false",!1,"0",0,"",void 0,null].indexOf(e)},escapeHTML:function(e){return l("<div/>").text(e).html()},removeHTML:function(e){return e.replace(/<[^>]+>/gi,"")},featureSupport:{dragAndDrop:function(){return"draggable"in document.createElement("span")},fileApi:function(){return"undefined"!=typeof FileReader},history:function(){return!(!window.history||!window.history.pushState)}},generateId:n,getAuthenticator:function(){var e=l('input[name="_authenticator"]');return 0===e.length?0<(e=l('a[href*="_authenticator"]')).length?e.attr("href").split("_authenticator=")[1]:"":e.val()},getWindow:function(){var e=window;return e=e.parent!==window?e.parent:e},Loading:e,loading:new e,parseBodyTag:function(e){return l(/<body[^>]*>[^]*<\/body>/im.exec(e)[0].replace("<body","<div").replace("</body>","</div>")).eq(0).html()},QueryHelper:function(e){var r=this;return r.options=l.extend({},{pattern:null,vocabularyUrl:null,searchParam:"SearchableText",pathOperator:"plone.app.querystring.operation.string.path",attributes:["UID","Title","Description","getURL","portal_type"],batchSize:10,baseCriteria:[],sort_on:"is_folderish",sort_order:"reverse",pathDepth:1},e),r.pattern=r.options.pattern,void 0!==r.pattern&&null!==r.pattern||(r.pattern={browsing:!1,basePath:"/"}),r.options.url&&!r.options.vocabularyUrl?r.options.vocabularyUrl=r.options.url:r.pattern.vocabularyUrl&&(r.options.vocabularyUrl=r.pattern.vocabularyUrl),r.valid=Boolean(r.options.vocabularyUrl),r.getBatch=function(e){return{page:e||1,size:r.options.batchSize}},r.getCurrentPath=function(){var e=r.pattern,t=r.currentPath||e.currentPath,t=t="function"==typeof t?t():t;return t=t||(e.basePath||e.options.basePath||"/")},r.getCriterias=function(e,t){var i=[];return(t=l.extend({},{useBaseCriteria:!0,additionalCriterias:[]},t=void 0===t?{}:t)).useBaseCriteria&&(i=r.options.baseCriteria.slice(0)),e&&i.push({i:r.options.searchParam,o:"plone.app.querystring.operation.string.contains",v:e+="*"}),t.searchPath?i.push({i:"path",o:r.options.pathOperator,v:t.searchPath+"::"+r.options.pathDepth}):r.pattern.browsing&&i.push({i:"path",o:r.options.pathOperator,v:r.getCurrentPath()+"::"+r.options.pathDepth}),i=i.concat(t.additionalCriterias)},r.getQueryData=function(e,t){e={query:JSON.stringify({criteria:r.getCriterias(e),sort_on:r.options.sort_on,sort_order:r.options.sort_order}),attributes:JSON.stringify(r.options.attributes)};return t&&(e.batch=JSON.stringify(r.getBatch(t))),e},r.getUrl=function(){var e=r.options.vocabularyUrl;return-1===e.indexOf("?")?e+="?":e+="&",e+l.param(r.getQueryData())},r.selectAjax=function(){return{url:r.options.vocabularyUrl,dataType:"JSON",quietMillis:100,data:function(e,t){return r.getQueryData(e,t)},results:function(e,t){t=10*t<e.total;return{results:e.results,more:t}}}},r.search=function(e,t,i,n,o,s){void 0===s&&(s="GET");var a=[];(a=(o=void 0===o?!0:o)?r.options.baseCriteria.slice(0):a).push({i:e,o:t,v:i});a={query:JSON.stringify({criteria:a}),attributes:JSON.stringify(r.options.attributes)};l.ajax({url:r.options.vocabularyUrl,dataType:"JSON",data:a,type:s,success:n})},r},setId:function(e,t){void 0===t&&(t="id");var i=void 0===(i=e.attr("id"))?n(t):i.replace(/\./g,"-");return e.attr("id",i),i},storage:t,createElementFromHTML:function(e){var t=document.createElement("div");return t.innerHTML=e.trim(),t.firstChild}}}),define("mockup-i18n",["jquery"],function(n){"use strict";return function(){var r=this;r.baseUrl=n("body").attr("data-i18ncatalogurl"),r.currentLanguage=n("html").attr("lang")||"en",1<r.currentLanguage.split("-").length&&(r.currentLanguage=r.currentLanguage.split("-")[0]+"_"+r.currentLanguage.split("-")[1].toUpperCase()),r.storage=null,r.catalogs={},r.ttl=864e5,Date.now||(Date.now=function(){return(new Date).valueOf()});try{"localStorage"in window&&null!==window.localStorage&&"JSON"in window&&null!==window.JSON&&(r.storage=window.localStorage)}catch(e){}r.configure=function(e){for(var t in e)r[t]=e[t]},r._setCatalog=function(e,t,i){e in r.catalogs||(r.catalogs[e]={}),r.catalogs[e][t]=i},r._storeCatalog=function(e,t,i){t=e+"-"+t;null!==r.storage&&null!==i&&(r.storage.setItem(t,JSON.stringify(i)),r.storage.setItem(t+"-updated",Date.now()))},r.getUrl=function(e,t){return r.baseUrl+"?domain="+e+"&language="+t},r.loadCatalog=function(t,i){if(void 0===i&&(i=r.currentLanguage),null!==r.storage){var e=t+"-"+i;if(e in r.storage&&Date.now()-parseInt(r.storage.getItem(e+"-updated"),10)<r.ttl){e=JSON.parse(r.storage.getItem(e));return void r._setCatalog(t,i,e)}}r.baseUrl&&n.getJSON(r.getUrl(t,i),function(e){null!==e&&(r._setCatalog(t,i,e),r._storeCatalog(t,i,e))})},r.MessageFactory=function(s,a){return a=a||r.currentLanguage,function(e,t){var i,n,o=s in r.catalogs&&a in r.catalogs[s]&&e in r.catalogs[s][a]?r.catalogs[s][a][e]:e;if(t)for(n in t)t.hasOwnProperty(n)&&(i=new RegExp("\\$\\{"+n+"\\}","g"),o=o.replace(i,t[n]));return o}}}}),define("translate",["mockup-i18n"],function(n){"use strict";var o=null;return function(e,t){var i;return null===o&&((i=new n).loadCatalog("widgets"),o=i.MessageFactory("widgets")),o(e,t)}}),function(e){"function"==typeof define&&define.amd?define("picker",["jquery"],e):"object"==typeof exports?module.exports=e(require("jquery")):"object"==typeof window?window.Picker=e(jQuery):this.Picker=e(jQuery)}(function(m){var n=m(window),g=m(document),o=m(document.documentElement),v=null!=document.documentElement.style.transition;function b(o,e,t,i){if(!o)return b;function n(){return this.start()}var s=!1,r={id:o.id||"P"+Math.abs(~~(Math.random()*new Date)),handlingOpen:!1},l=t?m.extend(!0,{},t.defaults,i):i||{},a=m.extend({},b.klasses(),l.klass),c=m(o),h=n.prototype={constructor:n,$node:c,start:function(){return r&&r.start?h:(r.methods={},r.start=!0,r.open=!1,r.type=o.type,o.autofocus=o==k(),o.readOnly=!l.editable,o.id=o.id||r.id,"text"!=o.type&&(o.type="text"),h.component=new t(h,l),h.$root=m('<div class="'+a.picker+'" id="'+o.id+'_root" />'),S(h.$root[0],"hidden",!0),h.$holder=m(d()).appendTo(h.$root),u(),l.formatSubmit&&function(){var e;!0===l.hiddenName?(e=o.name,o.name=""):e=(e=["string"==typeof l.hiddenPrefix?l.hiddenPrefix:"","string"==typeof l.hiddenSuffix?l.hiddenSuffix:"_submit"])[0]+o.name+e[1];h._hidden=m('<input type=hidden name="'+e+'"'+(c.data("value")||o.value?' value="'+h.get("select",l.formatSubmit)+'"':"")+">")[0],c.on("change."+r.id,function(){h._hidden.value=o.value?h.get("select",l.formatSubmit):""})}(),function(){c.data(e,h).addClass(a.input).val(c.data("value")?h.get("select",l.format):o.value).on("focus."+r.id+" click."+r.id,function(e){e.preventDefault(),h.open()}).on("mousedown",function(){r.handlingOpen=!0;var e=function(){setTimeout(function(){m(document).off("mouseup",e),r.handlingOpen=!1},0)};m(document).on("mouseup",e)}),l.editable||c.on("keydown."+r.id,f);S(o,{haspopup:!0,expanded:!1,readonly:!1,owns:o.id+"_root"})}(),l.containerHidden?m(l.containerHidden).append(h._hidden):c.after(h._hidden),l.container?m(l.container).append(h.$root):c.after(h.$root),h.on({start:h.component.onStart,render:h.component.onRender,stop:h.component.onStop,open:h.component.onOpen,close:h.component.onClose,set:h.component.onSet}).on({start:l.onStart,render:l.onRender,stop:l.onStop,open:l.onOpen,close:l.onClose,set:l.onSet}),s=function(e){var t,i="position";e.currentStyle?t=e.currentStyle[i]:window.getComputedStyle&&(t=getComputedStyle(e)[i]);return"fixed"==t}(h.$holder[0]),o.autofocus&&h.open(),h.trigger("start").trigger("render"))},render:function(e){return e?(h.$holder=m(d()),u(),h.$root.html(h.$holder)):h.$root.find("."+a.box).html(h.component.nodes(r.open)),h.trigger("render")},stop:function(){return r.start&&(h.close(),h._hidden&&h._hidden.parentNode.removeChild(h._hidden),h.$root.remove(),c.removeClass(a.input).removeData(e),setTimeout(function(){c.off("."+r.id)},0),o.type=r.type,o.readOnly=!1,h.trigger("stop"),r.methods={},r.start=!1),h},open:function(e){return r.open?h:(c.addClass(a.active),S(o,"expanded",!0),setTimeout(function(){h.$root.addClass(a.opened),S(h.$root[0],"hidden",!1)},0),!1!==e&&(r.open=!0,s&&m("body").css("overflow","hidden").css("padding-right","+="+y()),s&&v?h.$holder.find("."+a.frame).one("transitionend",function(){h.$holder.eq(0).focus()}):setTimeout(function(){h.$holder.eq(0).focus()},0),g.on("click."+r.id+" focusin."+r.id,function(e){var t;r.handlingOpen||(t=w(e,o),e.isSimulated||t==o||t==document||3==e.which||h.close(t===h.$holder[0]))}).on("keydown."+r.id,function(e){var t=e.keyCode,i=h.component.key[t],n=w(e,o);27==t?h.close(!0):n!=h.$holder[0]||!i&&13!=t?m.contains(h.$root[0],n)&&13==t&&(e.preventDefault(),n.click()):(e.preventDefault(),i?b._.trigger(h.component.key.go,h,[b._.trigger(i)]):h.$root.find("."+a.highlighted).hasClass(a.disabled)||(h.set("select",h.component.item.highlight),l.closeOnSelect&&h.close(!0)))})),h.trigger("open"))},close:function(e){return e&&(l.editable?o.focus():(h.$holder.off("focus.toOpen").focus(),setTimeout(function(){h.$holder.on("focus.toOpen",p)},0))),c.removeClass(a.active),S(o,"expanded",!1),setTimeout(function(){h.$root.removeClass(a.opened+" "+a.focused),S(h.$root[0],"hidden",!0)},0),r.open?(r.open=!1,s&&m("body").css("overflow","").css("padding-right","-="+y()),g.off("."+r.id),h.trigger("close")):h},clear:function(e){return h.set("clear",null,e)},set:function(e,t,i){var n,o,s=m.isPlainObject(e),a=s?e:{};if(i=s&&m.isPlainObject(t)?t:i||{},e){for(n in s||(a[e]=t),a)o=a[n],n in h.component.item&&(void 0===o&&(o=null),h.component.set(n,o,i)),"select"!=n&&"clear"!=n||!l.updateInput||c.val("clear"==n?"":h.get(n,l.format)).trigger("change");h.render()}return i.muted?h:h.trigger("set",a)},get:function(e,t){if(null!=r[e=e||"value"])return r[e];if("valueSubmit"==e){if(h._hidden)return h._hidden.value;e="value"}if("value"==e)return o.value;if(e in h.component.item){if("string"!=typeof t)return h.component.get(e);e=h.component.get(e);return e?b._.trigger(h.component.formats.toString,h.component,[t,e]):""}},on:function(e,t,i){var n,o,s=m.isPlainObject(e),a=s?e:{};if(e)for(n in s||(a[e]=t),a)o=a[n],r.methods[n=i?"_"+n:n]=r.methods[n]||[],r.methods[n].push(o);return h},off:function(){var e,t=arguments,i=0;for(namesCount=t.length;i<namesCount;i+=1)(e=t[i])in r.methods&&delete r.methods[e];return h},trigger:function(e,t){function i(e){(e=r.methods[e])&&e.map(function(e){b._.trigger(e,h,[t])})}return i("_"+e),i(e),h}};function d(){return b._.node("div",b._.node("div",b._.node("div",b._.node("div",h.component.nodes(r.open),a.box),a.wrap),a.frame),a.holder,'tabindex="-1"')}function u(){h.$holder.on({keydown:f,"focus.toOpen":p,blur:function(){c.removeClass(a.target)},focusin:function(e){h.$root.removeClass(a.focused),e.stopPropagation()},"mousedown click":function(e){var t=w(e,o);t!=h.$holder[0]&&(e.stopPropagation(),"mousedown"!=e.type||m(t).is("input, select, textarea, button, option")||(e.preventDefault(),h.$holder.eq(0).focus()))}}).on("click","[data-pick], [data-nav], [data-clear], [data-close]",function(){var e=m(this),t=e.data(),i=e.hasClass(a.navDisabled)||e.hasClass(a.disabled),e=(e=k())&&(e.type||e.href?e:null);(i||e&&!m.contains(h.$root[0],e))&&h.$holder.eq(0).focus(),!i&&t.nav?h.set("highlight",h.component.item.highlight,{nav:t.nav}):!i&&"pick"in t?(h.set("select",t.pick),l.closeOnSelect&&h.close(!0)):t.clear?(h.clear(),l.closeOnClear&&h.close(!0)):t.close&&h.close(!0)})}function p(e){e.stopPropagation(),c.addClass(a.target),h.$root.addClass(a.focused),h.open()}function f(e){var t=e.keyCode,i=/^(8|46)$/.test(t);if(27==t)return h.close(!0),!1;(32==t||i||!r.open&&h.component.key[t])&&(e.preventDefault(),e.stopPropagation(),i?h.clear().close():h.open())}return new n}function y(){if(o.height()<=n.height())return 0;var e=m('<div style="visibility:hidden;width:100px" />').appendTo("body"),t=e[0].offsetWidth;e.css("overflow","scroll");var i=m('<div style="width:100%" />').appendTo(e)[0].offsetWidth;return e.remove(),t-i}function w(e,t){var i=[];return e.path&&(i=e.path),(i=e.originalEvent&&e.originalEvent.path?e.originalEvent.path:i)&&0<i.length?t&&0<=i.indexOf(t)?t:i[0]:e.target}function S(e,t,i){if(m.isPlainObject(t))for(var n in t)s(e,n,t[n]);else s(e,t,i)}function s(e,t,i){e.setAttribute(("role"==t?"":"aria-")+t,i)}function k(){try{return document.activeElement}catch(e){}}return b.klasses=function(e){return{picker:e=e||"picker",opened:e+"--opened",focused:e+"--focused",input:e+"__input",active:e+"__input--active",target:e+"__input--target",holder:e+"__holder",frame:e+"__frame",wrap:e+"__wrap",box:e+"__box"}},b._={group:function(e){for(var t,i="",n=b._.trigger(e.min,e);n<=b._.trigger(e.max,e,[n]);n+=e.i)t=b._.trigger(e.item,e,[n]),i+=b._.node(e.node,t[0],t[1],t[2]);return i},node:function(e,t,i,n){return t?"<"+e+(i=i?' class="'+i+'"':"")+(n=n?" "+n:"")+">"+(t=m.isArray(t)?t.join(""):t)+"</"+e+">":""},lead:function(e){return(e<10?"0":"")+e},trigger:function(e,t,i){return"function"==typeof e?e.apply(t,i||[]):e},digits:function(e){return/\d/.test(e[1])?2:1},isDate:function(e){return-1<{}.toString.call(e).indexOf("Date")&&this.isInteger(e.getDate())},isInteger:function(e){return-1<{}.toString.call(e).indexOf("Number")&&e%1==0},ariaAttr:function(e,t){m.isPlainObject(e)||(e={attribute:t});for(var i in t="",e){var n=("role"==i?"":"aria-")+i,o=e[i];t+=null==o?"":n+'="'+e[i]+'"'}return t}},b.extend=function(n,o){m.fn[n]=function(e,t){var i=this.data(n);return"picker"==e?i:i&&"string"==typeof e?b._.trigger(i[e],i,[t]):this.each(function(){m(this).data(n)||new b(this,n,o,e)})},m.fn[n].defaults=o.defaults},b}),function(e){"function"==typeof define&&define.amd?define("picker.date",["./picker","jquery"],e):"object"==typeof exports?module.exports=e(require("./picker.js"),require("jquery")):e(Picker,jQuery)}(function(e,f){var t,g=e._;function i(t,i){function e(){return o.currentStyle?"rtl"==o.currentStyle.direction:"rtl"==getComputedStyle(t.$root[0]).direction}var n=this,o=t.$node[0],s=o.value,a=t.$node.data("value"),r=a||s,s=a?i.formatSubmit:i.format;n.settings=i,n.$node=t.$node,n.queue={min:"measure create",max:"measure create",now:"now create",select:"parse create validate",highlight:"parse navigate create validate",view:"parse create validate viewset",disable:"deactivate",enable:"activate"},n.item={},n.item.clear=null,n.item.disable=(i.disable||[]).slice(0),n.item.enable=-(!0===(a=n.item.disable)[0]?a.shift():-1),n.set("min",i.min).set("max",i.max).set("now"),r?n.set("select",r,{format:s,defaultValue:!0}):n.set("select",null).set("highlight",n.item.now),n.key={40:7,38:-7,39:function(){return e()?-1:1},37:function(){return e()?1:-1},go:function(e){var t=n.item.highlight,t=new Date(t.year,t.month,t.date+e);n.set("highlight",t,{interval:e}),this.render()}},t.on("render",function(){t.$root.find("."+i.klass.selectMonth).on("change",function(){var e=this.value;e&&(t.set("highlight",[t.get("view").year,e,t.get("highlight").date]),t.$root.find("."+i.klass.selectMonth).trigger("focus"))}),t.$root.find("."+i.klass.selectYear).on("change",function(){var e=this.value;e&&(t.set("highlight",[e,t.get("view").month,t.get("highlight").date]),t.$root.find("."+i.klass.selectYear).trigger("focus"))})},1).on("open",function(){var e="";n.disabled(n.get("now"))&&(e=":not(."+i.klass.buttonToday+")"),t.$root.find("button"+e+", select").attr("disabled",!1)},1).on("close",function(){t.$root.find("button, select").attr("disabled",!0)},1)}function n(e,t,i){e=e.match(/[^\x00-\x7F]+|\w+/)[0];return i.mm||i.m||(i.m=t.indexOf(e)+1),e.length}function o(e){return e.match(/\w+/)[0].length}i.prototype.set=function(t,i,n){var o=this,e=o.item;return null===i?e[t="clear"==t?"select":t]=i:(e["enable"==t?"disable":"flip"==t?"enable":t]=o.queue[t].split(" ").map(function(e){return i=o[e](t,i,n)}).pop(),"select"==t?o.set("highlight",e.select,n):"highlight"==t?o.set("view",e.highlight,n):t.match(/^(flip|min|max|disable|enable)$/)&&(e.select&&o.disabled(e.select)&&o.set("select",e.select,n),e.highlight&&o.disabled(e.highlight)&&o.set("highlight",e.highlight,n))),o},i.prototype.get=function(e){return this.item[e]},i.prototype.create=function(e,t,i){var n;return(t=void 0===t?e:t)==-1/0||t==1/0?n=t:t=f.isPlainObject(t)&&g.isInteger(t.pick)?t.obj:f.isArray(t)?(t=new Date(t[0],t[1],t[2]),g.isDate(t)?t:this.create().obj):g.isInteger(t)||g.isDate(t)?this.normalize(new Date(t),i):this.now(e,t,i),{year:n||t.getFullYear(),month:n||t.getMonth(),date:n||t.getDate(),day:n||t.getDay(),obj:n||t,pick:n||t.getTime()}},i.prototype.createRange=function(e,t){function i(e){return!0===e||f.isArray(e)||g.isDate(e)?n.create(e):e}var n=this;return g.isInteger(e)||(e=i(e)),g.isInteger(t)||(t=i(t)),g.isInteger(e)&&f.isPlainObject(t)?e=[t.year,t.month,t.date+e]:g.isInteger(t)&&f.isPlainObject(e)&&(t=[e.year,e.month,e.date+t]),{from:i(e),to:i(t)}},i.prototype.withinRange=function(e,t){return e=this.createRange(e.from,e.to),t.pick>=e.from.pick&&t.pick<=e.to.pick},i.prototype.overlapRanges=function(e,t){var i=this;return e=i.createRange(e.from,e.to),t=i.createRange(t.from,t.to),i.withinRange(e,t.from)||i.withinRange(e,t.to)||i.withinRange(t,e.from)||i.withinRange(t,e.to)},i.prototype.now=function(e,t,i){return t=new Date,i&&i.rel&&t.setDate(t.getDate()+i.rel),this.normalize(t,i)},i.prototype.navigate=function(e,t,i){var n,o,s,a=f.isArray(t),r=f.isPlainObject(t),l=this.item.view;if(a||r){for(s=r?(n=t.year,o=t.month,t.date):(n=+t[0],o=+t[1],+t[2]),i&&i.nav&&l&&l.month!==o&&(n=l.year,o=l.month),n=(i=new Date(n,o+(i&&i.nav?i.nav:0),1)).getFullYear(),o=i.getMonth();new Date(n,o,s).getMonth()!==o;)--s;t=[n,o,s]}return t},i.prototype.normalize=function(e){return e.setHours(0,0,0,0),e},i.prototype.measure=function(e,t){return g.isInteger(t)?t=this.now(e,t,{rel:t}):t?"string"==typeof t&&(t=this.parse(e,t)):t="min"==e?-1/0:1/0,t},i.prototype.viewset=function(e,t){return this.create([t.year,t.month,1])},i.prototype.validate=function(e,i,t){var n,o,s,a,r=this,l=i,c=t&&t.interval?t.interval:1,h=-1===r.item.enable,d=r.item.min,u=r.item.max,p=h&&r.item.disable.filter(function(e){var t;return f.isArray(e)&&((t=r.create(e).pick)<i.pick?n=!0:t>i.pick&&(o=!0)),g.isInteger(e)}).length;if((!t||!t.nav&&!t.defaultValue)&&(!h&&r.disabled(i)||h&&r.disabled(i)&&(p||n||o)||!h&&(i.pick<=d.pick||i.pick>=u.pick)))for(h&&!p&&(!o&&0<c||!n&&c<0)&&(c*=-1);r.disabled(i)&&(1<Math.abs(c)&&(i.month<l.month||i.month>l.month)&&(i=l,c=0<c?1:-1),i.pick<=d.pick?(s=!0,c=1,i=r.create([d.year,d.month,d.date+(i.pick===d.pick?0:-1)])):i.pick>=u.pick&&(a=!0,c=-1,i=r.create([u.year,u.month,u.date+(i.pick===u.pick?0:1)])),!s||!a);)i=r.create([i.year,i.month,i.date+c]);return i},i.prototype.disabled=function(t){var i=this,e=(e=i.item.disable.filter(function(e){return g.isInteger(e)?t.day===(i.settings.firstDay?e:e-1)%7:f.isArray(e)||g.isDate(e)?t.pick===i.create(e).pick:f.isPlainObject(e)?i.withinRange(e,t):void 0})).length&&!e.filter(function(e){return f.isArray(e)&&"inverted"==e[3]||f.isPlainObject(e)&&e.inverted}).length;return-1===i.item.enable?!e:e||t.pick<i.item.min.pick||t.pick>i.item.max.pick},i.prototype.parse=function(e,n,t){var o=this,s={};return n&&"string"==typeof n?(t&&t.format||((t=t||{}).format=o.settings.format),o.formats.toArray(t.format).map(function(e){var t=o.formats[e],i=t?g.trigger(t,o,[n,s]):e.replace(/^!/,"").length;t&&(s[e]=n.substr(0,i)),n=n.substr(i)}),[s.yyyy||s.yy,+(s.mm||s.m)-1,s.dd||s.d]):n},i.prototype.formats={d:function(e,t){return e?g.digits(e):t.date},dd:function(e,t){return e?2:g.lead(t.date)},ddd:function(e,t){return e?o(e):this.settings.weekdaysShort[t.day]},dddd:function(e,t){return e?o(e):this.settings.weekdaysFull[t.day]},m:function(e,t){return e?g.digits(e):t.month+1},mm:function(e,t){return e?2:g.lead(t.month+1)},mmm:function(e,t){var i=this.settings.monthsShort;return e?n(e,i,t):i[t.month]},mmmm:function(e,t){var i=this.settings.monthsFull;return e?n(e,i,t):i[t.month]},yy:function(e,t){return e?2:(""+t.year).slice(2)},yyyy:function(e,t){return e?4:t.year},toArray:function(e){return e.split(/(d{1,4}|m{1,4}|y{4}|yy|!.)/g)},toString:function(e,t){var i=this;return i.formats.toArray(e).map(function(e){return g.trigger(i.formats[e],i,[0,t])||e.replace(/^!/,"")}).join("")}},i.prototype.isDateExact=function(e,t){return g.isInteger(e)&&g.isInteger(t)||"boolean"==typeof e&&"boolean"==typeof t?e===t:(g.isDate(e)||f.isArray(e))&&(g.isDate(t)||f.isArray(t))?this.create(e).pick===this.create(t).pick:!(!f.isPlainObject(e)||!f.isPlainObject(t))&&(this.isDateExact(e.from,t.from)&&this.isDateExact(e.to,t.to))},i.prototype.isDateOverlap=function(e,t){var i=this.settings.firstDay?1:0;return g.isInteger(e)&&(g.isDate(t)||f.isArray(t))?(e=e%7+i)===this.create(t).day+1:g.isInteger(t)&&(g.isDate(e)||f.isArray(e))?(t=t%7+i)===this.create(e).day+1:!(!f.isPlainObject(e)||!f.isPlainObject(t))&&this.overlapRanges(e,t)},i.prototype.flipEnable=function(e){var t=this.item;t.enable=e||(-1==t.enable?1:-1)},i.prototype.deactivate=function(e,t){var n=this,o=n.item.disable.slice(0);return"flip"==t?n.flipEnable():!1===t?(n.flipEnable(1),o=[]):!0===t?(n.flipEnable(-1),o=[]):t.map(function(e){for(var t,i=0;i<o.length;i+=1)if(n.isDateExact(e,o[i])){t=!0;break}t||(g.isInteger(e)||g.isDate(e)||f.isArray(e)||f.isPlainObject(e)&&e.from&&e.to)&&o.push(e)}),o},i.prototype.activate=function(e,t){var s=this,a=s.item.disable,r=a.length;return"flip"==t?s.flipEnable():!0===t?(s.flipEnable(1),a=[]):!1===t?(s.flipEnable(-1),a=[]):t.map(function(e){for(var t,i,n,o=0;o<r;o+=1){if(i=a[o],s.isDateExact(i,e)){n=!(t=a[o]=null);break}if(s.isDateOverlap(i,e)){f.isPlainObject(e)?(e.inverted=!0,t=e):f.isArray(e)?(t=e)[3]||t.push("inverted"):g.isDate(e)&&(t=[e.getFullYear(),e.getMonth(),e.getDate(),"inverted"]);break}}if(t)for(o=0;o<r;o+=1)if(s.isDateExact(a[o],e)){a[o]=null;break}if(n)for(o=0;o<r;o+=1)if(s.isDateOverlap(a[o],e)){a[o]=null;break}t&&a.push(t)}),a.filter(function(e){return null!=e})},i.prototype.nodes=function(a){function e(e){return g.node("div"," ",l.klass["nav"+(e?"Next":"Prev")]+(e&&u.year>=m.year&&u.month>=m.month||!e&&u.year<=f.year&&u.month<=f.month?" "+l.klass.navDisabled:""),"data-nav="+(e||-1)+" "+g.ariaAttr({role:"button",controls:r.$node[0].id+"_table"})+' title="'+(e?l.labelMonthNext:l.labelMonthPrev)+'"')}function t(){var t=l.showMonthsShort?l.monthsShort:l.monthsFull;return l.selectMonths?g.node("select",g.group({min:0,max:11,i:1,node:"option",item:function(e){return[t[e],0,"value="+e+(u.month==e?" selected":"")+(u.year==f.year&&e<f.month||u.year==m.year&&e>m.month?" disabled":"")]}}),l.klass.selectMonth,(a?"":"disabled")+" "+g.ariaAttr({controls:r.$node[0].id+"_table"})+' title="'+l.labelMonthSelect+'"'):g.node("div",t[u.month],l.klass.month)}function i(){var t=u.year,e=!0===l.selectYears?5:~~(l.selectYears/2);if(e){var i=f.year,n=m.year,o=t-e,s=t+e;return o<i&&(s+=i-o,o=i),n<s&&(o-=(e=s-n)<(i=o-i)?e:i,s=n),g.node("select",g.group({min:o,max:s,i:1,node:"option",item:function(e){return[e,0,"value="+e+(t==e?" selected":"")]}}),l.klass.selectYear,(a?"":"disabled")+" "+g.ariaAttr({controls:r.$node[0].id+"_table"})+' title="'+l.labelYearSelect+'"')}return g.node("div",t,l.klass.year)}var n,o,r=this,l=r.settings,s=r.item,c=s.now,h=s.select,d=s.highlight,u=s.view,p=s.disable,f=s.min,m=s.max,s=(n=(l.showWeekdaysFull?l.weekdaysFull:l.weekdaysShort).slice(0),o=l.weekdaysFull.slice(0),l.firstDay&&(n.push(n.shift()),o.push(o.shift())),g.node("thead",g.node("tr",g.group({min:0,max:6,i:1,node:"th",item:function(e){return[n[e],l.klass.weekdays,'scope=col title="'+o[e]+'"']}}))));return g.node("div",(l.selectYears?i()+t():t()+i())+e()+e(1),l.klass.header)+g.node("table",s+g.node("tbody",g.group({min:0,max:5,i:1,node:"tr",item:function(e){var t=l.firstDay&&0===r.create([u.year,u.month,1]).day?-7:0;return[g.group({min:7*e-u.day+t+1,max:function(){return this.min+7-1},i:1,node:"td",item:function(e){e=r.create([u.year,u.month,e+(l.firstDay?1:0)]);var t,i=h&&h.pick==e.pick,n=d&&d.pick==e.pick,o=p&&r.disabled(e)||e.pick<f.pick||e.pick>m.pick,s=g.trigger(r.formats.toString,r,[l.format,e]);return[g.node("div",e.date,((t=[l.klass.day]).push(u.month==e.month?l.klass.infocus:l.klass.outfocus),c.pick==e.pick&&t.push(l.klass.now),i&&t.push(l.klass.selected),n&&t.push(l.klass.highlighted),o&&t.push(l.klass.disabled),t.join(" ")),"data-pick="+e.pick+" "+g.ariaAttr({role:"gridcell",label:s,selected:!(!i||r.$node.val()!==s)||null,activedescendant:!!n||null,disabled:!!o||null})),"",g.ariaAttr({role:"presentation"})]}})]}})),l.klass.table,'id="'+r.$node[0].id+'_table" '+g.ariaAttr({role:"grid",controls:r.$node[0].id,readonly:!0}))+g.node("div",g.node("button",l.today,l.klass.buttonToday,"type=button data-pick="+c.pick+(a&&!r.disabled(c)?"":" disabled")+" "+g.ariaAttr({controls:r.$node[0].id}))+g.node("button",l.clear,l.klass.buttonClear,"type=button data-clear=1"+(a?"":" disabled")+" "+g.ariaAttr({controls:r.$node[0].id}))+g.node("button",l.close,l.klass.buttonClose,"type=button data-close=true "+(a?"":" disabled")+" "+g.ariaAttr({controls:r.$node[0].id})),l.klass.footer)},i.defaults={labelMonthNext:"Next month",labelMonthPrev:"Previous month",labelMonthSelect:"Select a month",labelYearSelect:"Select a year",monthsFull:["January","February","March","April","May","June","July","August","September","October","November","December"],monthsShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],weekdaysFull:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],weekdaysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],today:"Today",clear:"Clear",close:"Close",closeOnSelect:!0,closeOnClear:!0,updateInput:!0,format:"d mmmm, yyyy",klass:{table:(t=e.klasses().picker+"__")+"table",header:t+"header",navPrev:t+"nav--prev",navNext:t+"nav--next",navDisabled:t+"nav--disabled",month:t+"month",year:t+"year",selectMonth:t+"select--month",selectYear:t+"select--year",weekdays:t+"weekday",day:t+"day",disabled:t+"day--disabled",selected:t+"day--selected",highlighted:t+"day--highlighted",now:t+"day--today",infocus:t+"day--infocus",outfocus:t+"day--outfocus",footer:t+"footer",buttonClear:t+"button--clear",buttonToday:t+"button--today",buttonClose:t+"button--close"}},e.extend("pickadate",i)}),function(e){"function"==typeof define&&define.amd?define("picker.time",["./picker","jquery"],e):"object"==typeof exports?module.exports=e(require("./picker.js"),require("jquery")):e(Picker,jQuery)}(function(e,l){var t,o=1440,p=e._;function i(o,s){var t=this,e=o.$node[0].value,i=o.$node.data("value"),n=i||e,e=i?s.formatSubmit:s.format;t.settings=s,t.$node=o.$node,t.queue={interval:"i",min:"measure create",max:"measure create",now:"now create",select:"parse create validate",highlight:"parse create validate",view:"parse create validate",disable:"deactivate",enable:"activate"},t.item={},t.item.clear=null,t.item.interval=s.interval||30,t.item.disable=(s.disable||[]).slice(0),t.item.enable=-(!0===(i=t.item.disable)[0]?i.shift():-1),t.set("min",s.min).set("max",s.max).set("now"),n?t.set("select",n,{format:e}):t.set("select",null).set("highlight",t.item.now),t.key={40:1,38:-1,39:1,37:-1,go:function(e){t.set("highlight",t.item.highlight.pick+e*t.item.interval,{interval:e*t.item.interval}),this.render()}},o.on("render",function(){function e(t,i){n("transform").map(function(e){t.css(e,i)}),n("transition").map(function(e){t.css(e,i)})}var t=o.$root.children(),i=t.find("."+s.klass.viewset),n=function(t){return["webkit","moz","ms","o",""].map(function(e){return(e?"-"+e+"-":"")+t})};i.length&&(e(t,"none"),t[0].scrollTop=~~i.position().top-2*i[0].clientHeight,e(t,""))},1).on("open",function(){o.$root.find("button").attr("disabled",!1)},1).on("close",function(){o.$root.find("button").attr("disabled",!0)},1)}i.prototype.set=function(t,i,n){var o=this,e=o.item;return null===i?e[t="clear"==t?"select":t]=i:(e["enable"==t?"disable":"flip"==t?"enable":t]=o.queue[t].split(" ").map(function(e){return i=o[e](t,i,n)}).pop(),"select"==t?o.set("highlight",e.select,n):"highlight"==t?o.set("view",e.highlight,n):"interval"==t?o.set("min",e.min,n).set("max",e.max,n):t.match(/^(flip|min|max|disable|enable)$/)&&(e.select&&o.disabled(e.select)&&o.set("select",i,n),e.highlight&&o.disabled(e.highlight)&&o.set("highlight",i,n),"min"==t&&o.set("max",e.max,n))),o},i.prototype.get=function(e){return this.item[e]},i.prototype.create=function(e,t,i){var n=this;return p.isDate(t=void 0===t?e:t)&&(t=[t.getHours(),t.getMinutes()]),l.isPlainObject(t)&&p.isInteger(t.pick)?t=t.pick:l.isArray(t)?t=60*+t[0]+ +t[1]:p.isInteger(t)||(t=n.now(e,t,i)),"max"==e&&t<n.item.min.pick&&(t+=o),"min"!=e&&"max"!=e&&(t-n.item.min.pick)%n.item.interval!=0&&(t+=n.item.interval),{hour:~~(24+(t=n.normalize(e,t,i))/60)%24,mins:(60+t%60)%60,time:(o+t)%o,pick:t%o}},i.prototype.createRange=function(e,t){function i(e){return!0===e||l.isArray(e)||p.isDate(e)?n.create(e):e}var n=this;return p.isInteger(e)||(e=i(e)),p.isInteger(t)||(t=i(t)),p.isInteger(e)&&l.isPlainObject(t)?e=[t.hour,t.mins+e*n.settings.interval]:p.isInteger(t)&&l.isPlainObject(e)&&(t=[e.hour,e.mins+t*n.settings.interval]),{from:i(e),to:i(t)}},i.prototype.withinRange=function(e,t){return e=this.createRange(e.from,e.to),t.pick>=e.from.pick&&t.pick<=e.to.pick},i.prototype.overlapRanges=function(e,t){var i=this;return e=i.createRange(e.from,e.to),t=i.createRange(t.from,t.to),i.withinRange(e,t.from)||i.withinRange(e,t.to)||i.withinRange(t,e.from)||i.withinRange(t,e.to)},i.prototype.now=function(e,t){var i=this.item.interval,n=new Date,o=60*n.getHours()+n.getMinutes();return o-=o%i,n=t<0&&i*t+o<=-i,o+="min"==e&&n?0:i,p.isInteger(t)&&(o+=i*(n&&"max"!=e?t+1:t)),o},i.prototype.normalize=function(e,t){var i=this.item.interval,n=this.item.min&&this.item.min.pick||0;return t-="min"==e?0:(t-n)%i},i.prototype.measure=function(e,t,i){return"string"==typeof(t=t||("min"==e?[0,0]:[23,59]))?t=this.parse(e,t):!0===t||p.isInteger(t)?t=this.now(e,t,i):l.isPlainObject(t)&&p.isInteger(t.pick)&&(t=this.normalize(e,t.pick,i)),t},i.prototype.validate=function(e,t,i){var n=this,i=(i&&i.interval?i:n.item).interval;return n.disabled(t)&&(t=n.shift(t,i)),t=n.scope(t),t=n.disabled(t)?n.shift(t,-1*i):t},i.prototype.disabled=function(t){var i=this,e=(e=i.item.disable.filter(function(e){return p.isInteger(e)?t.hour==e:l.isArray(e)||p.isDate(e)?t.pick==i.create(e).pick:l.isPlainObject(e)?i.withinRange(e,t):void 0})).length&&!e.filter(function(e){return l.isArray(e)&&"inverted"==e[2]||l.isPlainObject(e)&&e.inverted}).length;return-1===i.item.enable?!e:e||t.pick<i.item.min.pick||t.pick>i.item.max.pick},i.prototype.shift=function(e,t){var i=this,n=i.item.min.pick,o=i.item.max.pick;for(t=t||i.item.interval;i.disabled(e)&&!((e=i.create(e.pick+=t)).pick<=n||e.pick>=o););return e},i.prototype.scope=function(e){var t=this.item.min.pick,i=this.item.max.pick;return this.create(e.pick>i?i:e.pick<t?t:e)},i.prototype.parse=function(e,n,t){var i,o,s,a,r,l=this,c={};if(!n||"string"!=typeof n)return n;for(a in t&&t.format||((t=t||{}).format=l.settings.format),l.formats.toArray(t.format).map(function(e){var t=l.formats[e],i=t?p.trigger(t,l,[n,c]):e.replace(/^!/,"").length;t&&(t=n.substr(0,i),c[e]=t.match(/^\d+$/)?+t:t),n=n.substr(i)}),c)r=c[a],p.isInteger(r)?a.match(/^(h|hh)$/i)?(i=r,"h"!=a&&"hh"!=a||(i%=12)):"i"==a&&(o=r):a.match(/^a$/i)&&r.match(/^p/i)&&("h"in c||"hh"in c)&&(s=!0);return 60*(s?i+12:i)+o},i.prototype.formats={h:function(e,t){return e?p.digits(e):t.hour%12||12},hh:function(e,t){return e?2:p.lead(t.hour%12||12)},H:function(e,t){return e?p.digits(e):""+t.hour%24},HH:function(e,t){return e?p.digits(e):p.lead(t.hour%24)},i:function(e,t){return e?2:p.lead(t.mins)},a:function(e,t){return e?4:t.time%o<720?"a.m.":"p.m."},A:function(e,t){return e?2:t.time%o<720?"AM":"PM"},toArray:function(e){return e.split(/(h{1,2}|H{1,2}|i|a|A|!.)/g)},toString:function(e,t){var i=this;return i.formats.toArray(e).map(function(e){return p.trigger(i.formats[e],i,[0,t])||e.replace(/^!/,"")}).join("")}},i.prototype.isTimeExact=function(e,t){return p.isInteger(e)&&p.isInteger(t)||"boolean"==typeof e&&"boolean"==typeof t?e===t:(p.isDate(e)||l.isArray(e))&&(p.isDate(t)||l.isArray(t))?this.create(e).pick===this.create(t).pick:!(!l.isPlainObject(e)||!l.isPlainObject(t))&&(this.isTimeExact(e.from,t.from)&&this.isTimeExact(e.to,t.to))},i.prototype.isTimeOverlap=function(e,t){return p.isInteger(e)&&(p.isDate(t)||l.isArray(t))?e===this.create(t).hour:p.isInteger(t)&&(p.isDate(e)||l.isArray(e))?t===this.create(e).hour:!(!l.isPlainObject(e)||!l.isPlainObject(t))&&this.overlapRanges(e,t)},i.prototype.flipEnable=function(e){var t=this.item;t.enable=e||(-1==t.enable?1:-1)},i.prototype.deactivate=function(e,t){var n=this,o=n.item.disable.slice(0);return"flip"==t?n.flipEnable():!1===t?(n.flipEnable(1),o=[]):!0===t?(n.flipEnable(-1),o=[]):t.map(function(e){for(var t,i=0;i<o.length;i+=1)if(n.isTimeExact(e,o[i])){t=!0;break}t||(p.isInteger(e)||p.isDate(e)||l.isArray(e)||l.isPlainObject(e)&&e.from&&e.to)&&o.push(e)}),o},i.prototype.activate=function(e,t){var s=this,a=s.item.disable,r=a.length;return"flip"==t?s.flipEnable():!0===t?(s.flipEnable(1),a=[]):!1===t?(s.flipEnable(-1),a=[]):t.map(function(e){for(var t,i,n,o=0;o<r;o+=1){if(i=a[o],s.isTimeExact(i,e)){n=!(t=a[o]=null);break}if(s.isTimeOverlap(i,e)){l.isPlainObject(e)?(e.inverted=!0,t=e):l.isArray(e)?(t=e)[2]||t.push("inverted"):p.isDate(e)&&(t=[e.getFullYear(),e.getMonth(),e.getDate(),"inverted"]);break}}if(t)for(o=0;o<r;o+=1)if(s.isTimeExact(a[o],e)){a[o]=null;break}if(n)for(o=0;o<r;o+=1)if(s.isTimeOverlap(a[o],e)){a[o]=null;break}t&&a.push(t)}),a.filter(function(e){return null!=e})},i.prototype.i=function(e,t){return p.isInteger(t)&&0<t?t:this.item.interval},i.prototype.nodes=function(e){var r=this,l=r.settings,c=r.item.select,h=r.item.highlight,d=r.item.view,u=r.item.disable;return p.node("ul",p.group({min:r.item.min.pick,max:r.item.max.pick,i:r.item.interval,node:"li",item:function(e){var t,i=(e=r.create(e)).pick,n=c&&c.pick==i,o=h&&h.pick==i,s=u&&r.disabled(e),a=p.trigger(r.formats.toString,r,[l.format,e]);return[p.trigger(r.formats.toString,r,[p.trigger(l.formatLabel,r,[e])||l.format,e]),(t=[l.klass.listItem],n&&t.push(l.klass.selected),o&&t.push(l.klass.highlighted),d&&d.pick==i&&t.push(l.klass.viewset),s&&t.push(l.klass.disabled),t.join(" ")),"data-pick="+e.pick+" "+p.ariaAttr({role:"option",label:a,selected:!(!n||r.$node.val()!==a)||null,activedescendant:!!o||null,disabled:!!s||null})]}})+p.node("li",p.node("button",l.clear,l.klass.buttonClear,"type=button data-clear=1"+(e?"":" disabled")+" "+p.ariaAttr({controls:r.$node[0].id})),"",p.ariaAttr({role:"presentation"})),l.klass.list,p.ariaAttr({role:"listbox",controls:r.$node[0].id}))},i.defaults={clear:"Clear",format:"h:i A",interval:30,closeOnSelect:!0,closeOnClear:!0,updateInput:!0,klass:{picker:(t=e.klasses().picker)+" "+t+"--time",holder:t+"__holder",list:t+"__list",listItem:t+"__list-item",disabled:t+"__list-item--disabled",selected:t+"__list-item--selected",highlighted:t+"__list-item--highlighted",viewset:t+"__list-item--viewset",now:t+"__list-item--now",buttonClear:t+"__button--clear"}},e.extend("pickatime",i)}),function(e){define("select2",[],function(){return function(){var o;void 0===(o=jQuery).fn.each2&&o.extend(o.fn,{each2:function(e){for(var t=o([0]),i=-1,n=this.length;++i<n&&(t.context=t[0]=this[i])&&!1!==e.call(t[0],i,t););return this}}),function(v,b){"use strict";var e,t,i,y,o,r,w,c,n,s,a;function l(e){var t=v(document.createTextNode(""));e.before(t),t.before(e),t.remove()}function h(e){return e.replace(/[^\u0000-\u007E]/g,function(e){return n[e]||e})}function d(e,t){for(var i=0,n=t.length;i<n;i+=1)if(u(e,t[i]))return i;return-1}function u(e,t){return e===t||e!==b&&t!==b&&(null!==e&&null!==t&&(e.constructor===String?e+""==t+"":t.constructor===String&&t+""==e+""))}function p(e,t,i){var n,o,s;if(null===e||e.length<1)return[];for(o=0,s=(n=e.split(t)).length;o<s;o+=1)n[o]=i(n[o]);return n}function f(e){return e.outerWidth(!1)-e.width()}function m(t){var i="keyup-change-value";t.on("keydown",function(){v.data(t,i)===b&&v.data(t,i,t.val())}),t.on("keyup",function(){var e=v.data(t,i);e!==b&&t.val()!==e&&(v.removeData(t,i),t.trigger("keyup-change"))})}function g(t,i,n){var o;return n=n||b,function(){var e=arguments;window.clearTimeout(o),o=window.setTimeout(function(){i.apply(n,e)},t)}}function S(e){e.preventDefault(),e.stopPropagation()}function k(e,t,i){var n,o=[],s=v.trim(e.attr("class"));s&&v((s=""+s).split(/\s+/)).each2(function(){0===this.indexOf("select2-")&&o.push(this)}),(s=v.trim(t.attr("class")))&&v((s=""+s).split(/\s+/)).each2(function(){0!==this.indexOf("select2-")&&(n=i(this))&&o.push(n)}),e.attr("class",o.join(" "))}function x(e,t,i,n){var o=h(e.toUpperCase()).indexOf(h(t.toUpperCase())),t=t.length;o<0?i.push(n(e)):(i.push(n(e.substring(0,o))),i.push("<span class='select2-match'>"),i.push(n(e.substring(o,o+t))),i.push("</span>"),i.push(n(e.substring(o+t,e.length))))}function C(e){var t={"\\":"&#92;","&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#47;"};return String(e).replace(/[&<>"'\/\\]/g,function(e){return t[e]})}function T(s){var e,a=null,t=s.quietMillis||100,r=s.url,l=this;return function(o){window.clearTimeout(e),e=window.setTimeout(function(){var e=s.data,t=r,i=s.transport||v.fn.select2.ajaxDefaults.transport,n={type:s.type||"GET",cache:s.cache||!1,jsonpCallback:s.jsonpCallback||b,dataType:s.dataType||"json"},n=v.extend({},v.fn.select2.ajaxDefaults.params,n),e=e?e.call(l,o.term,o.page,o.context):null,t="function"==typeof t?t.call(l,o.term,o.page,o.context):t;a&&"function"==typeof a.abort&&a.abort(),s.params&&(v.isFunction(s.params)?v.extend(n,s.params.call(l)):v.extend(n,s.params)),v.extend(n,{url:t,dataType:s.dataType,data:e,success:function(e){e=s.results(e,o.page,o);o.callback(e)},error:function(e,t,i){o.callback({hasError:!0,jqXHR:e,textStatus:t,errorThrown:i})}}),a=i.call(l,n)},t)}}function O(e){var t,i,n=e,r=function(e){return""+e.text};v.isArray(n)&&(n={results:i=n}),!1===v.isFunction(n)&&(i=n,n=function(){return i});e=n();return e.text&&(r=e.text,v.isFunction(r)||(t=e.text,r=function(e){return e[t]})),function(o){var s,a=o.term,i={results:[]};""!==a?(s=function(e,t){var i,n;if((e=e[0]).children){for(n in i={},e)e.hasOwnProperty(n)&&(i[n]=e[n]);i.children=[],v(e.children).each2(function(e,t){s(t,i.children)}),(i.children.length||o.matcher(a,r(i),e))&&t.push(i)}else o.matcher(a,r(e),e)&&t.push(e)},v(n().results).each2(function(e,t){s(t,i.results)}),o.callback(i)):o.callback(n())}}function E(t){var s=v.isFunction(t);return function(i){var n=i.term,o={results:[]},e=s?t(i):t;v.isArray(e)&&(v(e).each(function(){var e=this.text!==b,t=e?this.text:this;""!==n&&!i.matcher(n,t)||o.results.push(e?this:{id:this,text:this})}),i.callback(o))}}function D(e,t){if(v.isFunction(e))return 1;if(e){if("string"==typeof e)return 1;throw new Error(t+" must be a string, function, or falsy value")}}function P(e,t){if(v.isFunction(e)){var i=Array.prototype.slice.call(arguments,2);return e.apply(t,i)}return e}function I(){var i=this;v.each(arguments,function(e,t){i[t].remove(),i[t]=null})}function $(e,t){function i(){}return((i.prototype=new e).constructor=i).prototype.parent=e.prototype,i.prototype=v.extend(i.prototype,t),i}window.Select2===b&&(r={x:0,y:0},c={TAB:9,ENTER:13,ESC:27,SPACE:32,LEFT:37,UP:38,RIGHT:39,DOWN:40,SHIFT:16,CTRL:17,ALT:18,PAGE_UP:33,PAGE_DOWN:34,HOME:36,END:35,BACKSPACE:8,DELETE:46,isArrow:function(e){switch(e=e.which||e){case c.LEFT:case c.RIGHT:case c.UP:case c.DOWN:return!0}return!1},isControl:function(e){switch(e.which){case c.SHIFT:case c.CTRL:case c.ALT:return!0}return!!e.metaKey},isFunctionKey:function(e){return 112<=(e=e.which||e)&&e<=123}},n={"Ⓐ":"A","Ａ":"A","À":"A","Á":"A","Â":"A","Ầ":"A","Ấ":"A","Ẫ":"A","Ẩ":"A","Ã":"A","Ā":"A","Ă":"A","Ằ":"A","Ắ":"A","Ẵ":"A","Ẳ":"A","Ȧ":"A","Ǡ":"A","Ä":"A","Ǟ":"A","Ả":"A","Å":"A","Ǻ":"A","Ǎ":"A","Ȁ":"A","Ȃ":"A","Ạ":"A","Ậ":"A","Ặ":"A","Ḁ":"A","Ą":"A","Ⱥ":"A","Ɐ":"A","Ꜳ":"AA","Æ":"AE","Ǽ":"AE","Ǣ":"AE","Ꜵ":"AO","Ꜷ":"AU","Ꜹ":"AV","Ꜻ":"AV","Ꜽ":"AY","Ⓑ":"B","Ｂ":"B","Ḃ":"B","Ḅ":"B","Ḇ":"B","Ƀ":"B","Ƃ":"B","Ɓ":"B","Ⓒ":"C","Ｃ":"C","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","Ç":"C","Ḉ":"C","Ƈ":"C","Ȼ":"C","Ꜿ":"C","Ⓓ":"D","Ｄ":"D","Ḋ":"D","Ď":"D","Ḍ":"D","Ḑ":"D","Ḓ":"D","Ḏ":"D","Đ":"D","Ƌ":"D","Ɗ":"D","Ɖ":"D","Ꝺ":"D","Ǳ":"DZ","Ǆ":"DZ","ǲ":"Dz","ǅ":"Dz","Ⓔ":"E","Ｅ":"E","È":"E","É":"E","Ê":"E","Ề":"E","Ế":"E","Ễ":"E","Ể":"E","Ẽ":"E","Ē":"E","Ḕ":"E","Ḗ":"E","Ĕ":"E","Ė":"E","Ë":"E","Ẻ":"E","Ě":"E","Ȅ":"E","Ȇ":"E","Ẹ":"E","Ệ":"E","Ȩ":"E","Ḝ":"E","Ę":"E","Ḙ":"E","Ḛ":"E","Ɛ":"E","Ǝ":"E","Ⓕ":"F","Ｆ":"F","Ḟ":"F","Ƒ":"F","Ꝼ":"F","Ⓖ":"G","Ｇ":"G","Ǵ":"G","Ĝ":"G","Ḡ":"G","Ğ":"G","Ġ":"G","Ǧ":"G","Ģ":"G","Ǥ":"G","Ɠ":"G","Ꞡ":"G","Ᵹ":"G","Ꝿ":"G","Ⓗ":"H","Ｈ":"H","Ĥ":"H","Ḣ":"H","Ḧ":"H","Ȟ":"H","Ḥ":"H","Ḩ":"H","Ḫ":"H","Ħ":"H","Ⱨ":"H","Ⱶ":"H","Ɥ":"H","Ⓘ":"I","Ｉ":"I","Ì":"I","Í":"I","Î":"I","Ĩ":"I","Ī":"I","Ĭ":"I","İ":"I","Ï":"I","Ḯ":"I","Ỉ":"I","Ǐ":"I","Ȉ":"I","Ȋ":"I","Ị":"I","Į":"I","Ḭ":"I","Ɨ":"I","Ⓙ":"J","Ｊ":"J","Ĵ":"J","Ɉ":"J","Ⓚ":"K","Ｋ":"K","Ḱ":"K","Ǩ":"K","Ḳ":"K","Ķ":"K","Ḵ":"K","Ƙ":"K","Ⱪ":"K","Ꝁ":"K","Ꝃ":"K","Ꝅ":"K","Ꞣ":"K","Ⓛ":"L","Ｌ":"L","Ŀ":"L","Ĺ":"L","Ľ":"L","Ḷ":"L","Ḹ":"L","Ļ":"L","Ḽ":"L","Ḻ":"L","Ł":"L","Ƚ":"L","Ɫ":"L","Ⱡ":"L","Ꝉ":"L","Ꝇ":"L","Ꞁ":"L","Ǉ":"LJ","ǈ":"Lj","Ⓜ":"M","Ｍ":"M","Ḿ":"M","Ṁ":"M","Ṃ":"M","Ɱ":"M","Ɯ":"M","Ⓝ":"N","Ｎ":"N","Ǹ":"N","Ń":"N","Ñ":"N","Ṅ":"N","Ň":"N","Ṇ":"N","Ņ":"N","Ṋ":"N","Ṉ":"N","Ƞ":"N","Ɲ":"N","Ꞑ":"N","Ꞥ":"N","Ǌ":"NJ","ǋ":"Nj","Ⓞ":"O","Ｏ":"O","Ò":"O","Ó":"O","Ô":"O","Ồ":"O","Ố":"O","Ỗ":"O","Ổ":"O","Õ":"O","Ṍ":"O","Ȭ":"O","Ṏ":"O","Ō":"O","Ṑ":"O","Ṓ":"O","Ŏ":"O","Ȯ":"O","Ȱ":"O","Ö":"O","Ȫ":"O","Ỏ":"O","Ő":"O","Ǒ":"O","Ȍ":"O","Ȏ":"O","Ơ":"O","Ờ":"O","Ớ":"O","Ỡ":"O","Ở":"O","Ợ":"O","Ọ":"O","Ộ":"O","Ǫ":"O","Ǭ":"O","Ø":"O","Ǿ":"O","Ɔ":"O","Ɵ":"O","Ꝋ":"O","Ꝍ":"O","Ƣ":"OI","Ꝏ":"OO","Ȣ":"OU","Ⓟ":"P","Ｐ":"P","Ṕ":"P","Ṗ":"P","Ƥ":"P","Ᵽ":"P","Ꝑ":"P","Ꝓ":"P","Ꝕ":"P","Ⓠ":"Q","Ｑ":"Q","Ꝗ":"Q","Ꝙ":"Q","Ɋ":"Q","Ⓡ":"R","Ｒ":"R","Ŕ":"R","Ṙ":"R","Ř":"R","Ȑ":"R","Ȓ":"R","Ṛ":"R","Ṝ":"R","Ŗ":"R","Ṟ":"R","Ɍ":"R","Ɽ":"R","Ꝛ":"R","Ꞧ":"R","Ꞃ":"R","Ⓢ":"S","Ｓ":"S","ẞ":"S","Ś":"S","Ṥ":"S","Ŝ":"S","Ṡ":"S","Š":"S","Ṧ":"S","Ṣ":"S","Ṩ":"S","Ș":"S","Ş":"S","Ȿ":"S","Ꞩ":"S","Ꞅ":"S","Ⓣ":"T","Ｔ":"T","Ṫ":"T","Ť":"T","Ṭ":"T","Ț":"T","Ţ":"T","Ṱ":"T","Ṯ":"T","Ŧ":"T","Ƭ":"T","Ʈ":"T","Ⱦ":"T","Ꞇ":"T","Ꜩ":"TZ","Ⓤ":"U","Ｕ":"U","Ù":"U","Ú":"U","Û":"U","Ũ":"U","Ṹ":"U","Ū":"U","Ṻ":"U","Ŭ":"U","Ü":"U","Ǜ":"U","Ǘ":"U","Ǖ":"U","Ǚ":"U","Ủ":"U","Ů":"U","Ű":"U","Ǔ":"U","Ȕ":"U","Ȗ":"U","Ư":"U","Ừ":"U","Ứ":"U","Ữ":"U","Ử":"U","Ự":"U","Ụ":"U","Ṳ":"U","Ų":"U","Ṷ":"U","Ṵ":"U","Ʉ":"U","Ⓥ":"V","Ｖ":"V","Ṽ":"V","Ṿ":"V","Ʋ":"V","Ꝟ":"V","Ʌ":"V","Ꝡ":"VY","Ⓦ":"W","Ｗ":"W","Ẁ":"W","Ẃ":"W","Ŵ":"W","Ẇ":"W","Ẅ":"W","Ẉ":"W","Ⱳ":"W","Ⓧ":"X","Ｘ":"X","Ẋ":"X","Ẍ":"X","Ⓨ":"Y","Ｙ":"Y","Ỳ":"Y","Ý":"Y","Ŷ":"Y","Ỹ":"Y","Ȳ":"Y","Ẏ":"Y","Ÿ":"Y","Ỷ":"Y","Ỵ":"Y","Ƴ":"Y","Ɏ":"Y","Ỿ":"Y","Ⓩ":"Z","Ｚ":"Z","Ź":"Z","Ẑ":"Z","Ż":"Z","Ž":"Z","Ẓ":"Z","Ẕ":"Z","Ƶ":"Z","Ȥ":"Z","Ɀ":"Z","Ⱬ":"Z","Ꝣ":"Z","ⓐ":"a","ａ":"a","ẚ":"a","à":"a","á":"a","â":"a","ầ":"a","ấ":"a","ẫ":"a","ẩ":"a","ã":"a","ā":"a","ă":"a","ằ":"a","ắ":"a","ẵ":"a","ẳ":"a","ȧ":"a","ǡ":"a","ä":"a","ǟ":"a","ả":"a","å":"a","ǻ":"a","ǎ":"a","ȁ":"a","ȃ":"a","ạ":"a","ậ":"a","ặ":"a","ḁ":"a","ą":"a","ⱥ":"a","ɐ":"a","ꜳ":"aa","æ":"ae","ǽ":"ae","ǣ":"ae","ꜵ":"ao","ꜷ":"au","ꜹ":"av","ꜻ":"av","ꜽ":"ay","ⓑ":"b","ｂ":"b","ḃ":"b","ḅ":"b","ḇ":"b","ƀ":"b","ƃ":"b","ɓ":"b","ⓒ":"c","ｃ":"c","ć":"c","ĉ":"c","ċ":"c","č":"c","ç":"c","ḉ":"c","ƈ":"c","ȼ":"c","ꜿ":"c","ↄ":"c","ⓓ":"d","ｄ":"d","ḋ":"d","ď":"d","ḍ":"d","ḑ":"d","ḓ":"d","ḏ":"d","đ":"d","ƌ":"d","ɖ":"d","ɗ":"d","ꝺ":"d","ǳ":"dz","ǆ":"dz","ⓔ":"e","ｅ":"e","è":"e","é":"e","ê":"e","ề":"e","ế":"e","ễ":"e","ể":"e","ẽ":"e","ē":"e","ḕ":"e","ḗ":"e","ĕ":"e","ė":"e","ë":"e","ẻ":"e","ě":"e","ȅ":"e","ȇ":"e","ẹ":"e","ệ":"e","ȩ":"e","ḝ":"e","ę":"e","ḙ":"e","ḛ":"e","ɇ":"e","ɛ":"e","ǝ":"e","ⓕ":"f","ｆ":"f","ḟ":"f","ƒ":"f","ꝼ":"f","ⓖ":"g","ｇ":"g","ǵ":"g","ĝ":"g","ḡ":"g","ğ":"g","ġ":"g","ǧ":"g","ģ":"g","ǥ":"g","ɠ":"g","ꞡ":"g","ᵹ":"g","ꝿ":"g","ⓗ":"h","ｈ":"h","ĥ":"h","ḣ":"h","ḧ":"h","ȟ":"h","ḥ":"h","ḩ":"h","ḫ":"h","ẖ":"h","ħ":"h","ⱨ":"h","ⱶ":"h","ɥ":"h","ƕ":"hv","ⓘ":"i","ｉ":"i","ì":"i","í":"i","î":"i","ĩ":"i","ī":"i","ĭ":"i","ï":"i","ḯ":"i","ỉ":"i","ǐ":"i","ȉ":"i","ȋ":"i","ị":"i","į":"i","ḭ":"i","ɨ":"i","ı":"i","ⓙ":"j","ｊ":"j","ĵ":"j","ǰ":"j","ɉ":"j","ⓚ":"k","ｋ":"k","ḱ":"k","ǩ":"k","ḳ":"k","ķ":"k","ḵ":"k","ƙ":"k","ⱪ":"k","ꝁ":"k","ꝃ":"k","ꝅ":"k","ꞣ":"k","ⓛ":"l","ｌ":"l","ŀ":"l","ĺ":"l","ľ":"l","ḷ":"l","ḹ":"l","ļ":"l","ḽ":"l","ḻ":"l","ſ":"l","ł":"l","ƚ":"l","ɫ":"l","ⱡ":"l","ꝉ":"l","ꞁ":"l","ꝇ":"l","ǉ":"lj","ⓜ":"m","ｍ":"m","ḿ":"m","ṁ":"m","ṃ":"m","ɱ":"m","ɯ":"m","ⓝ":"n","ｎ":"n","ǹ":"n","ń":"n","ñ":"n","ṅ":"n","ň":"n","ṇ":"n","ņ":"n","ṋ":"n","ṉ":"n","ƞ":"n","ɲ":"n","ŉ":"n","ꞑ":"n","ꞥ":"n","ǌ":"nj","ⓞ":"o","ｏ":"o","ò":"o","ó":"o","ô":"o","ồ":"o","ố":"o","ỗ":"o","ổ":"o","õ":"o","ṍ":"o","ȭ":"o","ṏ":"o","ō":"o","ṑ":"o","ṓ":"o","ŏ":"o","ȯ":"o","ȱ":"o","ö":"o","ȫ":"o","ỏ":"o","ő":"o","ǒ":"o","ȍ":"o","ȏ":"o","ơ":"o","ờ":"o","ớ":"o","ỡ":"o","ở":"o","ợ":"o","ọ":"o","ộ":"o","ǫ":"o","ǭ":"o","ø":"o","ǿ":"o","ɔ":"o","ꝋ":"o","ꝍ":"o","ɵ":"o","ƣ":"oi","ȣ":"ou","ꝏ":"oo","ⓟ":"p","ｐ":"p","ṕ":"p","ṗ":"p","ƥ":"p","ᵽ":"p","ꝑ":"p","ꝓ":"p","ꝕ":"p","ⓠ":"q","ｑ":"q","ɋ":"q","ꝗ":"q","ꝙ":"q","ⓡ":"r","ｒ":"r","ŕ":"r","ṙ":"r","ř":"r","ȑ":"r","ȓ":"r","ṛ":"r","ṝ":"r","ŗ":"r","ṟ":"r","ɍ":"r","ɽ":"r","ꝛ":"r","ꞧ":"r","ꞃ":"r","ⓢ":"s","ｓ":"s","ß":"s","ś":"s","ṥ":"s","ŝ":"s","ṡ":"s","š":"s","ṧ":"s","ṣ":"s","ṩ":"s","ș":"s","ş":"s","ȿ":"s","ꞩ":"s","ꞅ":"s","ẛ":"s","ⓣ":"t","ｔ":"t","ṫ":"t","ẗ":"t","ť":"t","ṭ":"t","ț":"t","ţ":"t","ṱ":"t","ṯ":"t","ŧ":"t","ƭ":"t","ʈ":"t","ⱦ":"t","ꞇ":"t","ꜩ":"tz","ⓤ":"u","ｕ":"u","ù":"u","ú":"u","û":"u","ũ":"u","ṹ":"u","ū":"u","ṻ":"u","ŭ":"u","ü":"u","ǜ":"u","ǘ":"u","ǖ":"u","ǚ":"u","ủ":"u","ů":"u","ű":"u","ǔ":"u","ȕ":"u","ȗ":"u","ư":"u","ừ":"u","ứ":"u","ữ":"u","ử":"u","ự":"u","ụ":"u","ṳ":"u","ų":"u","ṷ":"u","ṵ":"u","ʉ":"u","ⓥ":"v","ｖ":"v","ṽ":"v","ṿ":"v","ʋ":"v","ꝟ":"v","ʌ":"v","ꝡ":"vy","ⓦ":"w","ｗ":"w","ẁ":"w","ẃ":"w","ŵ":"w","ẇ":"w","ẅ":"w","ẘ":"w","ẉ":"w","ⱳ":"w","ⓧ":"x","ｘ":"x","ẋ":"x","ẍ":"x","ⓨ":"y","ｙ":"y","ỳ":"y","ý":"y","ŷ":"y","ỹ":"y","ȳ":"y","ẏ":"y","ÿ":"y","ỷ":"y","ẙ":"y","ỵ":"y","ƴ":"y","ɏ":"y","ỿ":"y","ⓩ":"z","ｚ":"z","ź":"z","ẑ":"z","ż":"z","ž":"z","ẓ":"z","ẕ":"z","ƶ":"z","ȥ":"z","ɀ":"z","ⱬ":"z","ꝣ":"z","Ά":"Α","Έ":"Ε","Ή":"Η","Ί":"Ι","Ϊ":"Ι","Ό":"Ο","Ύ":"Υ","Ϋ":"Υ","Ώ":"Ω","ά":"α","έ":"ε","ή":"η","ί":"ι","ϊ":"ι","ΐ":"ι","ό":"ο","ύ":"υ","ϋ":"υ","ΰ":"υ","ω":"ω","ς":"σ"},a=v(document),s=1,y=function(){return s++},e=$(Object,{bind:function(e){var t=this;return function(){e.apply(t,arguments)}},init:function(e){var s,t,i,n,o,a=".select2-results";this.opts=e=this.prepareOpts(e),this.id=e.id,e.element.data("select2")!==b&&null!==e.element.data("select2")&&e.element.data("select2").destroy(),this.container=this.createContainer(),this.liveRegion=v(".select2-hidden-accessible"),0==this.liveRegion.length&&(this.liveRegion=v("<span>",{role:"status","aria-live":"polite"}).addClass("select2-hidden-accessible").appendTo(document.body)),this.containerId="s2id_"+(e.element.attr("id")||"autogen"+y()),this.containerEventName=this.containerId.replace(/([.])/g,"_").replace(/([;&,\-\.\+\*\~':"\!\^#$%@\[\]\(\)=>\|])/g,"\\$1"),this.container.attr("id",this.containerId),this.container.attr("title",e.element.attr("title")),this.body=v(document.body),k(this.container,this.opts.element,this.opts.adaptContainerCssClass),this.container.attr("style",e.element.attr("style")),this.container.css(P(e.containerCss,this.opts.element)),this.container.addClass(P(e.containerCssClass,this.opts.element)),this.elementTabIndex=this.opts.element.attr("tabindex"),this.opts.element.data("select2",this).attr("tabindex","-1").before(this.container).on("click.select2",S),this.container.data("select2",this),this.dropdown=this.container.find(".select2-drop"),k(this.dropdown,this.opts.element,this.opts.adaptDropdownCssClass),this.dropdown.addClass(P(e.dropdownCssClass,this.opts.element)),this.dropdown.data("select2",this),this.dropdown.on("click",S),this.results=s=this.container.find(a),this.search=t=this.container.find("input.select2-input"),this.queryCount=0,this.resultsPage=0,this.context=null,this.initContainer(),this.container.on("click",S),this.results.on("mousemove",function(e){var t=r;t!==b&&t.x===e.pageX&&t.y===e.pageY||v(e.target).trigger("mousemove-filtered",e)}),this.dropdown.on("mousemove-filtered",a,this.bind(this.highlightUnderEvent)),this.dropdown.on("touchstart touchmove touchend",a,this.bind(function(e){this._touchEvent=!0,this.highlightUnderEvent(e)})),this.dropdown.on("touchmove",a,this.bind(this.touchMoved)),this.dropdown.on("touchstart touchend",a,this.bind(this.clearTouchMoved)),this.dropdown.on("click",this.bind(function(e){this._touchEvent&&(this._touchEvent=!1,this.selectHighlighted())})),i=80,n=this.results,o=g(i,function(e){n.trigger("scroll-debounced",e)}),n.on("scroll",function(e){0<=d(e.target,n.get())&&o(e)}),this.dropdown.on("scroll-debounced",a,this.bind(this.loadMoreIfNeeded)),v(this.container).on("change",".select2-input",function(e){e.stopPropagation()}),v(this.dropdown).on("change",".select2-input",function(e){e.stopPropagation()}),v.fn.mousewheel&&s.mousewheel(function(e,t,i,n){var o=s.scrollTop();0<n&&o-n<=0?(s.scrollTop(0),S(e)):n<0&&s.get(0).scrollHeight-s.scrollTop()+n<=s.height()&&(s.scrollTop(s.get(0).scrollHeight-s.height()),S(e))}),m(t),t.on("keyup-change input paste",this.bind(this.updateResults)),t.on("focus",function(){t.addClass("select2-focused")}),t.on("blur",function(){t.removeClass("select2-focused")}),this.dropdown.on("mouseup",a,this.bind(function(e){0<v(e.target).closest(".select2-result-selectable").length&&(this.highlightUnderEvent(e),this.selectHighlighted(e))})),this.dropdown.on("click mouseup mousedown touchstart touchend focusin",function(e){e.stopPropagation()}),this.lastSearchTerm=b,v.isFunction(this.opts.initSelection)&&(this.initSelection(),this.monitorSource()),null!==e.maximumInputLength&&this.search.attr("maxlength",e.maximumInputLength);a=e.element.prop("disabled");this.enable(!(a=a===b?!1:a));a=e.element.prop("readonly");this.readonly(a=a===b?!1:a),w=w||function(){var e=v("<div class='select2-measure-scrollbar'></div>");e.appendTo(document.body);var t={width:e.width()-e[0].clientWidth,height:e.height()-e[0].clientHeight};return e.remove(),t}(),this.autofocus=e.element.prop("autofocus"),e.element.prop("autofocus",!1),this.autofocus&&this.focus(),this.search.attr("placeholder",e.searchInputPlaceholder)},destroy:function(){var e=this.opts.element,t=e.data("select2"),i=this;this.close(),e.length&&e[0].detachEvent&&i._sync&&e.each(function(){i._sync&&this.detachEvent("onpropertychange",i._sync)}),this.propertyObserver&&(this.propertyObserver.disconnect(),this.propertyObserver=null),this._sync=null,t!==b&&(t.container.remove(),t.liveRegion.remove(),t.dropdown.remove(),e.removeData("select2").off(".select2"),e.is("input[type='hidden']")?e.css("display",""):(e.show().prop("autofocus",this.autofocus||!1),this.elementTabIndex?e.attr({tabindex:this.elementTabIndex}):e.removeAttr("tabindex"),e.show())),I.call(this,"container","liveRegion","dropdown","results","search")},optionToData:function(e){return e.is("option")?{id:e.prop("value"),text:e.text(),element:e.get(),css:e.attr("class"),disabled:e.prop("disabled"),locked:u(e.attr("locked"),"locked")||u(e.data("locked"),!0)}:e.is("optgroup")?{text:e.attr("label"),children:[],element:e.get(),css:e.attr("class")}:void 0},prepareOpts:function(m){var t,e,i,g=this,a=m.element;if("select"===a.get(0).tagName.toLowerCase()&&(this.select=e=m.element),e&&v.each(["id","multiple","ajax","query","createSearchChoice","initSelection","data","tags"],function(){if(this in m)throw new Error("Option '"+this+"' is not allowed for Select2 when attached to a <select> element.")}),m.debug=m.debug||v.fn.select2.defaults.debug,m.debug&&console&&console.warn&&(null!=m.id&&console.warn("Select2: The `id` option has been removed in Select2 4.0.0, consider renaming your `id` property or mapping the property before your data makes it to Select2. You can read more at https://select2.github.io/announcements-4.0.html#changed-id"),null!=m.text&&console.warn("Select2: The `text` option has been removed in Select2 4.0.0, consider renaming your `text` property or mapping the property before your data makes it to Select2. You can read more at https://select2.github.io/announcements-4.0.html#changed-id"),null!=m.sortResults&&console.warn("Select2: the `sortResults` option has been renamed to `sorter` in Select2 4.0.0. "),null!=m.selectOnBlur&&console.warn("Select2: The `selectOnBlur` option has been renamed to `selectOnClose` in Select2 4.0.0."),null!=m.ajax&&null!=m.ajax.results&&console.warn("Select2: The `ajax.results` option has been renamed to `ajax.processResults` in Select2 4.0.0."),null!=m.formatNoResults&&console.warn("Select2: The `formatNoResults` option has been renamed to `language.noResults` in Select2 4.0.0."),null!=m.formatSearching&&console.warn("Select2: The `formatSearching` option has been renamed to `language.searching` in Select2 4.0.0."),null!=m.formatInputTooShort&&console.warn("Select2: The `formatInputTooShort` option has been renamed to `language.inputTooShort` in Select2 4.0.0."),null!=m.formatInputTooLong&&console.warn("Select2: The `formatInputTooLong` option has been renamed to `language.inputTooLong` in Select2 4.0.0."),null!=m.formatLoading&&console.warn("Select2: The `formatLoading` option has been renamed to `language.loadingMore` in Select2 4.0.0."),null!=m.formatSelectionTooBig&&console.warn("Select2: The `formatSelectionTooBig` option has been renamed to `language.maximumSelected` in Select2 4.0.0."),m.element.data("select2Tags")&&console.warn("Select2: The `data-select2-tags` attribute has been renamed to `data-tags` in Select2 4.0.0.")),null!=m.element.data("tags")&&(i=m.element.data("tags"),v.isArray(i)||(i=[]),m.element.data("select2Tags",i)),null!=m.sorter&&(m.sortResults=m.sorter),null!=m.selectOnClose&&(m.selectOnBlur=m.selectOnClose),null!=m.ajax&&v.isFunction(m.ajax.processResults)&&(m.ajax.results=m.ajax.processResults),null!=m.language&&(i=m.language,v.isFunction(i.noMatches)&&(m.formatNoMatches=i.noMatches),v.isFunction(i.searching)&&(m.formatSearching=i.searching),v.isFunction(i.inputTooShort)&&(m.formatInputTooShort=i.inputTooShort),v.isFunction(i.inputTooLong)&&(m.formatInputTooLong=i.inputTooLong),v.isFunction(i.loadingMore)&&(m.formatLoading=i.loadingMore),v.isFunction(i.maximumSelected)&&(m.formatSelectionTooBig=i.maximumSelected)),"function"!=typeof(m=v.extend({},{populateResults:function(e,t,d){var u=this.opts.id,p=this.liveRegion,f=function(e,t,i){for(var n,o,s,a,r,l=[],c=0,h=(e=m.sortResults(e,t,d)).length;c<h;c+=1)s=!(r=!0===(n=e[c]).disabled)&&u(n)!==b,a=n.children&&0<n.children.length,(o=v("<li></li>")).addClass("select2-results-dept-"+i),o.addClass("select2-result"),o.addClass(s?"select2-result-selectable":"select2-result-unselectable"),r&&o.addClass("select2-disabled"),a&&o.addClass("select2-result-with-children"),o.addClass(g.opts.formatResultCssClass(n)),o.attr("role","presentation"),(s=v(document.createElement("div"))).addClass("select2-result-label"),s.attr("id","select2-result-label-"+y()),s.attr("role","option"),(r=m.formatResult(n,s,d,g.opts.escapeMarkup))!==b&&(s.html(r),o.append(s)),a&&((a=v("<ul></ul>")).addClass("select2-result-sub"),f(n.children,a,i+1),o.append(a)),o.data("select2-data",n),l.push(o[0]);t.append(l),p.text(m.formatMatches(e.length))};f(t,e,0)}},v.fn.select2.defaults,m)).id&&(t=m.id,m.id=function(e){return e[t]}),v.isArray(m.element.data("select2Tags"))){if("tags"in m)throw"tags specified as both an attribute 'data-select2-tags' and in options of Select2 "+m.element.attr("id");m.tags=m.element.data("select2Tags")}if(e?(m.query=this.bind(function(n){var e,i={results:[],more:!1},o=n.term,s=function(e,t){var i;e.is("option")?n.matcher(o,e.text(),e)&&t.push(g.optionToData(e)):e.is("optgroup")&&(i=g.optionToData(e),e.children().each2(function(e,t){s(t,i.children)}),0<i.children.length&&t.push(i))},t=a.children();(t=this.getPlaceholder()!==b&&0<t.length&&(e=this.getPlaceholderOption())?t.not(e):t).each2(function(e,t){s(t,i.results)}),n.callback(i)}),m.id=function(e){return e.id}):"query"in m||("ajax"in m?((e=m.element.data("ajax-url"))&&0<e.length&&(m.ajax.url=e),m.query=T.call(m.element,m.ajax)):"data"in m?m.query=O(m.data):"tags"in m&&(m.query=E(m.tags),m.createSearchChoice===b&&(m.createSearchChoice=function(e){return{id:v.trim(e),text:v.trim(e)}}),m.initSelection===b&&(m.initSelection=function(e,t){var i=[];v(p(e.val(),m.separator,m.transformVal)).each(function(){var e={id:this,text:this},t=m.tags;v.isFunction(t)&&(t=t()),v(t).each(function(){if(u(this.id,e.id))return e=this,!1}),i.push(e)}),t(i)}))),"function"!=typeof m.query)throw"query function not defined for Select2 "+m.element.attr("id");if("top"===m.createSearchChoicePosition)m.createSearchChoicePosition=function(e,t){e.unshift(t)};else if("bottom"===m.createSearchChoicePosition)m.createSearchChoicePosition=function(e,t){e.push(t)};else if("function"!=typeof m.createSearchChoicePosition)throw"invalid createSearchChoicePosition option must be 'top', 'bottom' or a custom function";return m},monitorSource:function(){var e,t=this.opts.element,i=this;t.on("change.select2",this.bind(function(e){!0!==this.opts.element.data("select2-change-triggered")&&this.initSelection()})),this._sync=this.bind(function(){var e=t.prop("disabled");this.enable(!(e=e===b?!1:e));e=t.prop("readonly");this.readonly(e=e===b?!1:e),this.container&&(k(this.container,this.opts.element,this.opts.adaptContainerCssClass),this.container.addClass(P(this.opts.containerCssClass,this.opts.element))),this.dropdown&&(k(this.dropdown,this.opts.element,this.opts.adaptDropdownCssClass),this.dropdown.addClass(P(this.opts.dropdownCssClass,this.opts.element)))}),t.length&&t[0].attachEvent&&t.each(function(){this.attachEvent("onpropertychange",i._sync)}),(e=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver)!==b&&(this.propertyObserver&&(delete this.propertyObserver,this.propertyObserver=null),this.propertyObserver=new e(function(e){v.each(e,i._sync)}),this.propertyObserver.observe(t.get(0),{attributes:!0,subtree:!1}))},triggerSelect:function(e){e=v.Event("select2-selecting",{val:this.id(e),object:e,choice:e});return this.opts.element.trigger(e),!e.isDefaultPrevented()},triggerChange:function(e){e=v.extend({},e=e||{},{type:"change",val:this.val()}),this.opts.element.data("select2-change-triggered",!0),this.opts.element.trigger(e),this.opts.element.data("select2-change-triggered",!1),this.opts.element.click(),this.opts.blurOnChange&&this.opts.element.blur()},isInterfaceEnabled:function(){return!0===this.enabledInterface},enableInterface:function(){var e=this._enabled&&!this._readonly;return e!==this.enabledInterface&&(this.container.toggleClass("select2-container-disabled",!e),this.close(),this.enabledInterface=e,!0)},enable:function(e){this._enabled!==(e=e===b?!0:e)&&(this._enabled=e,this.opts.element.prop("disabled",!e),this.enableInterface())},disable:function(){this.enable(!1)},readonly:function(e){this._readonly!==(e=e===b?!1:e)&&(this._readonly=e,this.opts.element.prop("readonly",e),this.enableInterface())},opened:function(){return!!this.container&&this.container.hasClass("select2-dropdown-open")},positionDropdown:function(){var e,t,i,n=this.dropdown,o=this.container,s=o.offset(),a=o.outerHeight(!1),r=o.outerWidth(!1),l=n.outerHeight(!1),c=v(window),h=c.width(),d=c.height(),u=c.scrollLeft()+h,p=c.scrollTop()+d,f=s.top+a,m=s.left,g=f+l<=p,d=s.top-l>=c.scrollTop(),p=n.outerWidth(!1);n.hasClass("select2-drop-above")?(e=!0,!d&&g&&(e=!(t=!0))):(e=!1,!g&&d&&(e=t=!0)),t&&(n.hide(),s=this.container.offset(),a=this.container.outerHeight(!1),r=this.container.outerWidth(!1),l=n.outerHeight(!1),u=c.scrollLeft()+h,c.scrollTop(),f=s.top+a,m=s.left,p=n.outerWidth(!1),n.show(),this.focusSearch()),this.opts.dropdownAutoWidth?(i=v(".select2-results",n)[0],n.addClass("select2-drop-auto-width"),n.css("width",""),r<(p=n.outerWidth(!1)+(i.scrollHeight===i.clientHeight?0:w.width))?r=p:p=r,l=n.outerHeight(!1)):this.container.removeClass("select2-drop-auto-width"),"static"!==this.body.css("position")&&(f-=(i=this.body.offset()).top,m-=i.left),r={left:m=!(m+p<=u)&&s.left+u+o.outerWidth(!1)>p?s.left+this.container.outerWidth(!1)-p:m,width:r},e?(this.container.addClass("select2-drop-above"),n.addClass("select2-drop-above"),l=n.outerHeight(!1),r.top=s.top-l,r.bottom="auto"):(r.top=f,r.bottom="auto",this.container.removeClass("select2-drop-above"),n.removeClass("select2-drop-above")),r=v.extend(r,P(this.opts.dropdownCss,this.opts.element)),n.css(r)},shouldOpen:function(){var e;return!this.opened()&&(!1!==this._enabled&&!0!==this._readonly&&(e=v.Event("select2-opening"),this.opts.element.trigger(e),!e.isDefaultPrevented()))},clearDropdownAlignmentPreference:function(){this.container.removeClass("select2-drop-above"),this.dropdown.removeClass("select2-drop-above")},open:function(){return!!this.shouldOpen()&&(this.opening(),a.on("mousemove.select2Event",function(e){r.x=e.pageX,r.y=e.pageY}),!0)},opening:function(){var i,e=this.containerEventName,t="scroll."+e,n="resize."+e,o="orientationchange."+e;this.container.addClass("select2-dropdown-open").addClass("select2-container-active"),this.clearDropdownAlignmentPreference(),this.dropdown[0]!==this.body.children().last()[0]&&this.dropdown.detach().appendTo(this.body),0===(i=v("#select2-drop-mask")).length&&((i=v(document.createElement("div"))).attr("id","select2-drop-mask").attr("class","select2-drop-mask"),i.hide(),i.appendTo(this.body),i.on("mousedown touchstart click",function(e){l(i);var t=v("#select2-drop");0<t.length&&((t=t.data("select2")).opts.selectOnBlur&&t.selectHighlighted({noFocus:!0}),t.close(),e.preventDefault(),e.stopPropagation())})),this.dropdown.prev()[0]!==i[0]&&this.dropdown.before(i),v("#select2-drop").removeAttr("id"),this.dropdown.attr("id","select2-drop"),i.show(),this.positionDropdown(),this.dropdown.show(),this.positionDropdown(),this.dropdown.addClass("select2-drop-active");var s=this;this.container.parents().add(window).each(function(){v(this).on(n+" "+t+" "+o,function(e){s.opened()&&s.positionDropdown()})})},close:function(){var e,t,i,n;this.opened()&&(e=this.containerEventName,t="scroll."+e,i="resize."+e,n="orientationchange."+e,this.container.parents().add(window).each(function(){v(this).off(t).off(i).off(n)}),this.clearDropdownAlignmentPreference(),v("#select2-drop-mask").hide(),this.dropdown.removeAttr("id"),this.dropdown.hide(),this.container.removeClass("select2-dropdown-open").removeClass("select2-container-active"),this.results.empty(),a.off("mousemove.select2Event"),this.clearSearch(),this.search.removeClass("select2-active"),this.search.removeAttr("aria-activedescendant"),this.opts.element.trigger(v.Event("select2-close")))},externalSearch:function(e){this.open(),this.search.val(e),this.updateResults(!1)},clearSearch:function(){},prefillNextSearchTerm:function(){if(""!==this.search.val())return!1;var e=this.opts.nextSearchTerm(this.data(),this.lastSearchTerm);return e!==b&&(this.search.val(e),this.search.select(),!0)},getMaximumSelectionSize:function(){return P(this.opts.maximumSelectionSize,this.opts.element)},ensureHighlightVisible:function(){var e,t,i,n,o,s=this.results,a=this.highlight();a<0||(0!=a?(e=this.findHighlightableChoices().find(".select2-result-label"),i=(o=((t=v(e[a])).offset()||{}).top||0)+t.outerHeight(!0),a===e.length-1&&0<(n=s.find("li.select2-more-results")).length&&(i=n.offset().top+n.outerHeight(!0)),(n=s.offset().top+s.outerHeight(!1))<i&&s.scrollTop(s.scrollTop()+(i-n)),(o=o-s.offset().top)<0&&"none"!=t.css("display")&&s.scrollTop(s.scrollTop()+o)):s.scrollTop(0))},findHighlightableChoices:function(){return this.results.find(".select2-result-selectable:not(.select2-disabled):not(.select2-selected)")},moveHighlight:function(e){for(var t=this.findHighlightableChoices(),i=this.highlight();-1<i&&i<t.length;){var n=v(t[i+=e]);if(n.hasClass("select2-result-selectable")&&!n.hasClass("select2-disabled")&&!n.hasClass("select2-selected")){this.highlight(i);break}}},highlight:function(e){var t=this.findHighlightableChoices();if(0===arguments.length)return d(t.filter(".select2-highlighted")[0],t.get());(e=e>=t.length?t.length-1:e)<0&&(e=0),this.removeHighlight(),(e=v(t[e])).addClass("select2-highlighted"),this.search.attr("aria-activedescendant",e.find(".select2-result-label").attr("id")),this.ensureHighlightVisible(),this.liveRegion.text(e.text()),(e=e.data("select2-data"))&&this.opts.element.trigger({type:"select2-highlight",val:this.id(e),choice:e})},removeHighlight:function(){this.results.find(".select2-highlighted").removeClass("select2-highlighted")},touchMoved:function(){this._touchMoved=!0},clearTouchMoved:function(){this._touchMoved=!1},countSelectableResults:function(){return this.findHighlightableChoices().length},highlightUnderEvent:function(e){var t=v(e.target).closest(".select2-result-selectable");0<t.length&&!t.is(".select2-highlighted")?(e=this.findHighlightableChoices(),this.highlight(e.index(t))):0==t.length&&this.removeHighlight()},loadMoreIfNeeded:function(){var t=this.results,i=t.find("li.select2-more-results"),n=this.resultsPage+1,o=this,s=this.search.val(),a=this.context;0!==i.length&&i.offset().top-t.offset().top-t.height()<=this.opts.loadMorePadding&&(i.addClass("select2-active"),this.opts.query({element:this.opts.element,term:s,page:n,context:a,matcher:this.opts.matcher,callback:this.bind(function(e){o.opened()&&(o.opts.populateResults.call(this,t,e.results,{term:s,page:n,context:a}),o.postprocessResults(e,!1,!1),!0===e.more?(i.detach().appendTo(t).html(o.opts.escapeMarkup(P(o.opts.formatLoadMore,o.opts.element,n+1))),window.setTimeout(function(){o.loadMoreIfNeeded()},10)):i.remove(),o.positionDropdown(),o.resultsPage=n,o.context=e.context,this.opts.element.trigger({type:"select2-loaded",items:e}))})}))},tokenize:function(){},updateResults:function(i){var e,n=this.search,o=this.results,s=this.opts,a=this,t=n.val(),r=v.data(this.container,"select2-last-term");if((!0===i||!r||!u(t,r))&&(v.data(this.container,"select2-last-term",t),!0===i||!1!==this.showSearchInput&&this.opened())){var l=++this.queryCount,t=this.getMaximumSelectionSize();if(!(1<=t&&(e=this.data(),v.isArray(e)&&e.length>=t&&D(s.formatSelectionTooBig,"formatSelectionTooBig"))))return n.val().length<s.minimumInputLength?(D(s.formatInputTooShort,"formatInputTooShort")?h("<li class='select2-no-results'>"+P(s.formatInputTooShort,s.element,n.val(),s.minimumInputLength)+"</li>"):h(""),void(i&&this.showSearch&&this.showSearch(!0))):void(s.maximumInputLength&&n.val().length>s.maximumInputLength?D(s.formatInputTooLong,"formatInputTooLong")?h("<li class='select2-no-results'>"+P(s.formatInputTooLong,s.element,n.val(),s.maximumInputLength)+"</li>"):h(""):(s.formatSearching&&0===this.findHighlightableChoices().length&&h("<li class='select2-searching'>"+P(s.formatSearching,s.element)+"</li>"),n.addClass("select2-active"),this.removeHighlight(),(e=this.tokenize())!=b&&null!=e&&n.val(e),this.resultsPage=1,s.query({element:s.element,term:n.val(),page:this.resultsPage,context:null,matcher:s.matcher,callback:this.bind(function(e){var t;if(l==this.queryCount)if(this.opened())if(e.hasError!==b&&D(s.formatAjaxError,"formatAjaxError"))h("<li class='select2-ajax-error'>"+P(s.formatAjaxError,s.element,e.jqXHR,e.textStatus,e.errorThrown)+"</li>");else{if(this.context=e.context===b?null:e.context,this.opts.createSearchChoice&&""!==n.val()&&(t=this.opts.createSearchChoice.call(a,n.val(),e.results))!==b&&null!==t&&a.id(t)!==b&&null!==a.id(t)&&0===v(e.results).filter(function(){return u(a.id(this),a.id(t))}).length&&this.opts.createSearchChoicePosition(e.results,t),0===e.results.length&&D(s.formatNoMatches,"formatNoMatches"))return h("<li class='select2-no-results'>"+P(s.formatNoMatches,s.element,n.val())+"</li>"),void(this.showSearch&&this.showSearch(n.val()));o.empty(),a.opts.populateResults.call(this,o,e.results,{term:n.val(),page:this.resultsPage,context:null}),!0===e.more&&D(s.formatLoadMore,"formatLoadMore")&&(o.append("<li class='select2-more-results'>"+s.escapeMarkup(P(s.formatLoadMore,s.element,this.resultsPage))+"</li>"),window.setTimeout(function(){a.loadMoreIfNeeded()},10)),this.postprocessResults(e,i),c(),this.opts.element.trigger({type:"select2-loaded",items:e})}else this.search.removeClass("select2-active")})})));h("<li class='select2-selection-limit'>"+P(s.formatSelectionTooBig,s.element,t)+"</li>")}function c(){n.removeClass("select2-active"),a.positionDropdown(),o.find(".select2-no-results,.select2-selection-limit,.select2-searching").length?a.liveRegion.text(o.text()):a.liveRegion.text(a.opts.formatMatches(o.find('.select2-result-selectable:not(".select2-selected")').length))}function h(e){o.html(e),c()}},cancel:function(){this.close()},blur:function(){this.opts.selectOnBlur&&this.selectHighlighted({noFocus:!0}),this.close(),this.container.removeClass("select2-container-active"),this.search[0]===document.activeElement&&this.search.blur(),this.clearSearch(),this.selection.find(".select2-search-choice-focus").removeClass("select2-search-choice-focus")},focusSearch:function(){var i;(i=this.search)[0]!==document.activeElement&&window.setTimeout(function(){var e=i[0],t=i.val().length;i.focus(),(0<e.offsetWidth||0<e.offsetHeight)&&e===document.activeElement&&(e.setSelectionRange?e.setSelectionRange(t,t):e.createTextRange&&((e=e.createTextRange()).collapse(!1),e.select()))},0)},selectHighlighted:function(e){var t,i;this._touchMoved?this.clearTouchMoved():(t=this.highlight(),(i=this.results.find(".select2-highlighted").closest(".select2-result").data("select2-data"))?(this.highlight(t),this.onSelect(i,e)):e&&e.noFocus&&this.close())},getPlaceholder:function(){var e;return this.opts.element.attr("placeholder")||this.opts.element.attr("data-placeholder")||this.opts.element.data("placeholder")||this.opts.placeholder||((e=this.getPlaceholderOption())!==b?e.text():b)},getPlaceholderOption:function(){if(this.select){var e=this.select.children("option").first();return this.opts.placeholderOption!==b?"first"===this.opts.placeholderOption&&e||"function"==typeof this.opts.placeholderOption&&this.opts.placeholderOption(this.select):""===v.trim(e.text())&&""===e.val()?e:void 0}},initContainerWidth:function(){var e=function(){var e,t,i,n,o;if("off"===this.opts.width)return null;if("element"===this.opts.width)return 0===this.opts.element.outerWidth(!1)?"auto":this.opts.element.outerWidth(!1)+"px";if("copy"!==this.opts.width&&"resolve"!==this.opts.width)return v.isFunction(this.opts.width)?this.opts.width():this.opts.width;if("string"==typeof(e=this.opts.element.attr("style")))for(n=0,o=(t=e.split(";")).length;n<o;n+=1)if(null!==(i=t[n].replace(/\s/g,"").match(/^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i))&&1<=i.length)return i[1];return"resolve"===this.opts.width?0<(e=this.opts.element.css("width")).indexOf("%")?e:0===this.opts.element.outerWidth(!1)?"auto":this.opts.element.outerWidth(!1)+"px":null}.call(this);null!==e&&this.container.css("width",e)}}),t=$(e,{createContainer:function(){return v(document.createElement("div")).attr({class:"select2-container"}).html(["<a href='javascript:void(0)' class='select2-choice' tabindex='-1'>","   <span class='select2-chosen'>&#160;</span><abbr class='select2-search-choice-close'></abbr>","   <span class='select2-arrow' role='presentation'><b role='presentation'></b></span>","</a>","<label for='' class='select2-offscreen'></label>","<input class='select2-focusser select2-offscreen' type='text' aria-haspopup='true' role='button' />","<div class='select2-drop select2-display-none'>","   <div class='select2-search'>","       <label for='' class='select2-offscreen'></label>","       <input type='text' autocomplete='off' autocorrect='off' autocapitalize='off' spellcheck='false' class='select2-input' role='combobox' aria-expanded='true'","       aria-autocomplete='list' />","   </div>","   <ul class='select2-results' role='listbox'>","   </ul>","</div>"].join(""))},enableInterface:function(){this.parent.enableInterface.apply(this,arguments)&&this.focusser.prop("disabled",!this.isInterfaceEnabled())},opening:function(){var e,t;0<=this.opts.minimumResultsForSearch&&this.showSearch(!0),this.parent.opening.apply(this,arguments),!1!==this.showSearchInput&&this.search.val(this.focusser.val()),this.opts.shouldFocusInput(this)&&(this.search.focus(),(e=this.search.get(0)).createTextRange?((t=e.createTextRange()).collapse(!1),t.select()):e.setSelectionRange&&(t=this.search.val().length,e.setSelectionRange(t,t))),this.prefillNextSearchTerm(),this.focusser.prop("disabled",!0).val(""),this.updateResults(!0),this.opts.element.trigger(v.Event("select2-open"))},close:function(){this.opened()&&(this.parent.close.apply(this,arguments),this.focusser.prop("disabled",!1),this.opts.shouldFocusInput(this)&&this.focusser.focus())},focus:function(){this.opened()?this.close():(this.focusser.prop("disabled",!1),this.opts.shouldFocusInput(this)&&this.focusser.focus())},isFocused:function(){return this.container.hasClass("select2-container-active")},cancel:function(){this.parent.cancel.apply(this,arguments),this.focusser.prop("disabled",!1),this.opts.shouldFocusInput(this)&&this.focusser.focus()},destroy:function(){v("label[for='"+this.focusser.attr("id")+"']").attr("for",this.opts.element.attr("id")),this.parent.destroy.apply(this,arguments),I.call(this,"selection","focusser")},initContainer:function(){var t,e=this.container,i=this.dropdown,n=y();this.opts.minimumResultsForSearch<0?this.showSearch(!1):this.showSearch(!0),this.selection=t=e.find(".select2-choice"),this.focusser=e.find(".select2-focusser"),t.find(".select2-chosen").attr("id","select2-chosen-"+n),this.focusser.attr("aria-labelledby","select2-chosen-"+n),this.results.attr("id","select2-results-"+n),this.search.attr("aria-owns","select2-results-"+n),this.focusser.attr("id","s2id_autogen"+n),e=v("label[for='"+this.opts.element.attr("id")+"']"),this.opts.element.on("focus.select2",this.bind(function(){this.focus()})),this.focusser.prev().text(e.text()).attr("for",this.focusser.attr("id"));n=this.opts.element.attr("title");this.opts.element.attr("title",n||e.text()),this.focusser.attr("tabindex",this.elementTabIndex),this.search.attr("id",this.focusser.attr("id")+"_search"),this.search.prev().text(v("label[for='"+this.focusser.attr("id")+"']").text()).attr("for",this.search.attr("id")),this.search.on("keydown",this.bind(function(e){if(this.isInterfaceEnabled()&&229!=e.keyCode)if(e.which!==c.PAGE_UP&&e.which!==c.PAGE_DOWN)switch(e.which){case c.UP:case c.DOWN:return this.moveHighlight(e.which===c.UP?-1:1),void S(e);case c.ENTER:return this.selectHighlighted(),void S(e);case c.TAB:return void this.selectHighlighted({noFocus:!0});case c.ESC:return this.cancel(e),void S(e)}else S(e)})),this.search.on("blur",this.bind(function(e){document.activeElement===this.body.get(0)&&window.setTimeout(this.bind(function(){this.opened()&&this.results&&1<this.results.length&&this.search.focus()}),0)})),this.focusser.on("keydown",this.bind(function(e){if(this.isInterfaceEnabled()&&e.which!==c.TAB&&!c.isControl(e)&&!c.isFunctionKey(e)&&e.which!==c.ESC){if(!1!==this.opts.openOnEnter||e.which!==c.ENTER)return e.which==c.DOWN||e.which==c.UP||e.which==c.ENTER&&this.opts.openOnEnter?e.altKey||e.ctrlKey||e.shiftKey||e.metaKey?void 0:(this.open(),void S(e)):void(e.which!=c.DELETE&&e.which!=c.BACKSPACE||(this.opts.allowClear&&this.clear(),S(e)));S(e)}})),m(this.focusser),this.focusser.on("keyup-change input",this.bind(function(e){0<=this.opts.minimumResultsForSearch&&(e.stopPropagation(),this.opened()||this.open())})),t.on("mousedown touchstart","abbr",this.bind(function(e){this.isInterfaceEnabled()&&(this.clear(),(e=e).preventDefault(),e.stopImmediatePropagation(),this.close(),this.selection&&this.selection.focus())})),t.on("mousedown touchstart",this.bind(function(e){l(t),this.container.hasClass("select2-container-active")||this.opts.element.trigger(v.Event("select2-focus")),this.opened()?this.close():this.isInterfaceEnabled()&&this.open(),S(e)})),i.on("mousedown touchstart",this.bind(function(){this.opts.shouldFocusInput(this)&&this.search.focus()})),t.on("focus",this.bind(function(e){S(e)})),this.focusser.on("focus",this.bind(function(){this.container.hasClass("select2-container-active")||this.opts.element.trigger(v.Event("select2-focus")),this.container.addClass("select2-container-active")})).on("blur",this.bind(function(){this.opened()||(this.container.removeClass("select2-container-active"),this.opts.element.trigger(v.Event("select2-blur")))})),this.search.on("focus",this.bind(function(){this.container.hasClass("select2-container-active")||this.opts.element.trigger(v.Event("select2-focus")),this.container.addClass("select2-container-active")})),this.initContainerWidth(),this.opts.element.hide(),this.setPlaceholder()},clear:function(e){var t,i=this.selection.data("select2-data");i&&(t=v.Event("select2-clearing"),this.opts.element.trigger(t),t.isDefaultPrevented()||(t=this.getPlaceholderOption(),this.opts.element.val(t?t.val():""),this.selection.find(".select2-chosen").empty(),this.selection.removeData("select2-data"),this.setPlaceholder(),!1!==e&&(this.opts.element.trigger({type:"select2-removed",val:this.id(i),choice:i}),this.triggerChange({removed:i}))))},initSelection:function(){var t;this.isPlaceholderOptionSelected()?(this.updateSelection(null),this.close(),this.setPlaceholder()):(t=this).opts.initSelection.call(null,this.opts.element,function(e){e!==b&&null!==e&&(t.updateSelection(e),t.close(),t.setPlaceholder(),t.lastSearchTerm=t.search.val())})},isPlaceholderOptionSelected:function(){var e;return this.getPlaceholder()!==b&&((e=this.getPlaceholderOption())!==b&&e.prop("selected")||""===this.opts.element.val()||this.opts.element.val()===b||null===this.opts.element.val())},prepareOpts:function(){var a=this.parent.prepareOpts.apply(this,arguments),i=this;return"select"===a.element.get(0).tagName.toLowerCase()?a.initSelection=function(e,t){e=e.find("option").filter(function(){return this.selected&&!this.disabled});t(i.optionToData(e))}:"data"in a&&(a.initSelection=a.initSelection||function(e,t){var o=e.val(),s=null;a.query({matcher:function(e,t,i){var n=u(o,a.id(i));return n&&(s=i),n},callback:v.isFunction(t)?function(){t(s)}:v.noop})}),a},getPlaceholder:function(){return this.select&&this.getPlaceholderOption()===b?b:this.parent.getPlaceholder.apply(this,arguments)},setPlaceholder:function(){var e=this.getPlaceholder();this.isPlaceholderOptionSelected()&&e!==b&&(this.select&&this.getPlaceholderOption()===b||(this.selection.find(".select2-chosen").html(this.opts.escapeMarkup(e)),this.selection.addClass("select2-default"),this.container.removeClass("select2-allowclear")))},postprocessResults:function(e,t,i){var n=0,o=this;this.findHighlightableChoices().each2(function(e,t){if(u(o.id(t.data("select2-data")),o.opts.element.val()))return n=e,!1}),!1!==i&&(!0===t&&0<=n?this.highlight(n):this.highlight(0)),!0!==t||0<=(t=this.opts.minimumResultsForSearch)&&this.showSearch(function i(e){var n=0;return v.each(e,function(e,t){t.children?n+=i(t.children):n++}),n}(e.results)>=t)},showSearch:function(e){this.showSearchInput!==e&&(this.showSearchInput=e,this.dropdown.find(".select2-search").toggleClass("select2-search-hidden",!e),this.dropdown.find(".select2-search").toggleClass("select2-offscreen",!e),v(this.dropdown,this.container).toggleClass("select2-with-searchbox",e))},onSelect:function(e,t){var i,n;this.triggerSelect(e)&&(i=this.opts.element.val(),n=this.data(),this.opts.element.val(this.id(e)),this.updateSelection(e),this.opts.element.trigger({type:"select2-selected",val:this.id(e),choice:e}),this.lastSearchTerm=this.search.val(),this.close(),t&&t.noFocus||!this.opts.shouldFocusInput(this)||this.focusser.focus(),u(i,this.id(e))||this.triggerChange({added:e,removed:n}))},updateSelection:function(e){var t,i=this.selection.find(".select2-chosen");this.selection.data("select2-data",e),i.empty(),(t=null!==e?this.opts.formatSelection(e,i,this.opts.escapeMarkup):t)!==b&&i.append(t),(e=this.opts.formatSelectionCssClass(e,i))!==b&&i.addClass(e),this.selection.removeClass("select2-default"),this.opts.allowClear&&this.getPlaceholder()!==b&&this.container.addClass("select2-allowclear")},val:function(){var e,t=!1,i=null,n=this,o=this.data();if(0===arguments.length)return this.opts.element.val();if(e=arguments[0],1<arguments.length&&(t=arguments[1],this.opts.debug&&console&&console.warn&&console.warn('Select2: The second option to `select2("val")` is not supported in Select2 4.0.0. The `change` event will always be triggered in 4.0.0.')),this.select)this.opts.debug&&console&&console.warn&&console.warn('Select2: Setting the value on a <select> using `select2("val")` is no longer supported in 4.0.0. You can use the `.val(newValue).trigger("change")` method provided by jQuery instead.'),this.select.val(e).find("option").filter(function(){return this.selected}).each2(function(e,t){return i=n.optionToData(t),!1}),this.updateSelection(i),this.setPlaceholder(),t&&this.triggerChange({added:i,removed:o});else if(e||0===e){if(this.opts.initSelection===b)throw new Error("cannot call val() if initSelection() is not defined");this.opts.element.val(e),this.opts.initSelection(this.opts.element,function(e){n.opts.element.val(e?n.id(e):""),n.updateSelection(e),n.setPlaceholder(),t&&n.triggerChange({added:e,removed:o})})}else this.clear(t)},clearSearch:function(){this.search.val(""),this.focusser.val("")},data:function(e){var t,i=!1;if(0===arguments.length)return t=(t=this.selection.data("select2-data"))==b?null:t;this.opts.debug&&console&&console.warn&&console.warn('Select2: The `select2("data")` method can no longer set selected values in 4.0.0, consider using the `.val()` method instead.'),1<arguments.length&&(i=arguments[1]),e?(t=this.data(),this.opts.element.val(e?this.id(e):""),this.updateSelection(e),i&&this.triggerChange({added:e,removed:t})):this.clear(i)}}),i=$(e,{createContainer:function(){return v(document.createElement("div")).attr({class:"select2-container select2-container-multi"}).html(["<ul class='select2-choices'>","  <li class='select2-search-field'>","    <label for='' class='select2-offscreen'></label>","    <input type='text' autocomplete='off' autocorrect='off' autocapitalize='off' spellcheck='false' class='select2-input'>","  </li>","</ul>","<div class='select2-drop select2-drop-multi select2-display-none'>","   <ul class='select2-results'>","   </ul>","</div>"].join(""))},prepareOpts:function(){var l=this.parent.prepareOpts.apply(this,arguments),n=this;return"select"===l.element.get(0).tagName.toLowerCase()?l.initSelection=function(e,t){var i=[];e.find("option").filter(function(){return this.selected&&!this.disabled}).each2(function(e,t){i.push(n.optionToData(t))}),t(i)}:"data"in l&&(l.initSelection=l.initSelection||function(e,s){var a=p(e.val(),l.separator,l.transformVal),r=[];l.query({matcher:function(e,t,i){var n=v.grep(a,function(e){return u(e,l.id(i))}).length;return n&&r.push(i),n},callback:v.isFunction(s)?function(){for(var e=[],t=0;t<a.length;t++)for(var i=a[t],n=0;n<r.length;n++){var o=r[n];if(u(i,l.id(o))){e.push(o),r.splice(n,1);break}}s(e)}:v.noop})}),l},selectChoice:function(e){var t=this.container.find(".select2-search-choice-focus");t.length&&e&&e[0]==t[0]||(t.length&&this.opts.element.trigger("choice-deselected",t),t.removeClass("select2-search-choice-focus"),e&&e.length&&(this.close(),e.addClass("select2-search-choice-focus"),this.opts.element.trigger("choice-selected",e)))},destroy:function(){v("label[for='"+this.search.attr("id")+"']").attr("for",this.opts.element.attr("id")),this.parent.destroy.apply(this,arguments),I.call(this,"searchContainer","selection")},initContainer:function(){var l,e=".select2-choices";this.searchContainer=this.container.find(".select2-search-field"),this.selection=l=this.container.find(e);var t=this;this.selection.on("click",".select2-container:not(.select2-container-disabled) .select2-search-choice:not(.select2-locked)",function(e){t.search[0].focus(),t.selectChoice(v(this))}),this.search.attr("id","s2id_autogen"+y()),this.search.prev().text(v("label[for='"+this.opts.element.attr("id")+"']").text()).attr("for",this.search.attr("id")),this.opts.element.on("focus.select2",this.bind(function(){this.focus()})),this.search.on("input paste",this.bind(function(){this.search.attr("placeholder")&&0==this.search.val().length||this.isInterfaceEnabled()&&(this.opened()||this.open())})),this.search.attr("tabindex",this.elementTabIndex),this.keydowns=0,this.search.on("keydown",this.bind(function(e){if(this.isInterfaceEnabled()){++this.keydowns;var t,i,n=l.find(".select2-search-choice-focus"),o=n.prev(".select2-search-choice:not(.select2-locked)"),s=n.next(".select2-search-choice:not(.select2-locked)"),a=(t=this.search,r=a=0,"selectionStart"in(t=v(t)[0])?(a=t.selectionStart,r=t.selectionEnd-a):"selection"in document&&(t.focus(),i=document.selection.createRange(),r=document.selection.createRange().text.length,i.moveStart("character",-t.value.length),a=i.text.length-r),{offset:a,length:r});if(n.length&&(e.which==c.LEFT||e.which==c.RIGHT||e.which==c.BACKSPACE||e.which==c.DELETE||e.which==c.ENTER)){var r=n;return e.which==c.LEFT&&o.length?r=o:e.which==c.RIGHT?r=s.length?s:null:e.which===c.BACKSPACE?this.unselect(n.first())&&(this.search.width(10),r=o.length?o:s):e.which==c.DELETE?this.unselect(n.first())&&(this.search.width(10),r=s.length?s:null):e.which==c.ENTER&&(r=null),this.selectChoice(r),S(e),void(r&&r.length||this.open())}if((e.which===c.BACKSPACE&&1==this.keydowns||e.which==c.LEFT)&&0==a.offset&&!a.length)return this.selectChoice(l.find(".select2-search-choice:not(.select2-locked)").last()),void S(e);if(this.selectChoice(null),this.opened())switch(e.which){case c.UP:case c.DOWN:return this.moveHighlight(e.which===c.UP?-1:1),void S(e);case c.ENTER:return this.selectHighlighted(),void S(e);case c.TAB:return this.selectHighlighted({noFocus:!0}),void this.close();case c.ESC:return this.cancel(e),void S(e)}if(e.which!==c.TAB&&!c.isControl(e)&&!c.isFunctionKey(e)&&e.which!==c.BACKSPACE&&e.which!==c.ESC){if(e.which===c.ENTER){if(!1===this.opts.openOnEnter)return;if(e.altKey||e.ctrlKey||e.shiftKey||e.metaKey)return}this.open(),e.which!==c.PAGE_UP&&e.which!==c.PAGE_DOWN||S(e),e.which===c.ENTER&&S(e)}}})),this.search.on("keyup",this.bind(function(e){this.keydowns=0,this.resizeSearch()})),this.search.on("blur",this.bind(function(e){this.container.removeClass("select2-container-active"),this.search.removeClass("select2-focused"),this.selectChoice(null),this.opened()||this.clearSearch(),e.stopImmediatePropagation(),this.opts.element.trigger(v.Event("select2-blur"))})),this.container.on("click",e,this.bind(function(e){this.isInterfaceEnabled()&&(0<v(e.target).closest(".select2-search-choice").length||(this.selectChoice(null),this.clearPlaceholder(),this.container.hasClass("select2-container-active")||this.opts.element.trigger(v.Event("select2-focus")),this.open(),this.focusSearch(),e.preventDefault()))})),this.container.on("focus",e,this.bind(function(){this.isInterfaceEnabled()&&(this.container.hasClass("select2-container-active")||this.opts.element.trigger(v.Event("select2-focus")),this.container.addClass("select2-container-active"),this.dropdown.addClass("select2-drop-active"),this.clearPlaceholder())})),this.initContainerWidth(),this.opts.element.hide(),this.clearSearch()},enableInterface:function(){this.parent.enableInterface.apply(this,arguments)&&this.search.prop("disabled",!this.isInterfaceEnabled())},initSelection:function(){var t;""===this.opts.element.val()&&""===this.opts.element.text()&&(this.updateSelection([]),this.close(),this.clearSearch()),!this.select&&""===this.opts.element.val()||(t=this).opts.initSelection.call(null,this.opts.element,function(e){e!==b&&null!==e&&(t.updateSelection(e),t.close(),t.clearSearch())})},clearSearch:function(){var e=this.getPlaceholder(),t=this.getMaxSearchWidth();e!==b&&0===this.getVal().length&&!1===this.search.hasClass("select2-focused")?(this.search.val(e).addClass("select2-default"),this.search.width(0<t?t:this.container.css("width"))):this.search.val("").width(10)},clearPlaceholder:function(){this.search.hasClass("select2-default")&&this.search.val("").removeClass("select2-default")},opening:function(){this.clearPlaceholder(),this.resizeSearch(),this.parent.opening.apply(this,arguments),this.focusSearch(),this.prefillNextSearchTerm(),this.updateResults(!0),this.opts.shouldFocusInput(this)&&this.search.focus(),this.opts.element.trigger(v.Event("select2-open"))},close:function(){this.opened()&&this.parent.close.apply(this,arguments)},focus:function(){this.close(),this.search.focus()},isFocused:function(){return this.search.hasClass("select2-focused")},updateSelection:function(e){var t={},i=[],n=this;v(e).each(function(){n.id(this)in t||(t[n.id(this)]=0,i.push(this))}),this.selection.find(".select2-search-choice").remove(),this.addSelectedChoice(i),n.postprocessResults()},tokenize:function(){var e=this.search.val();null!=(e=this.opts.tokenizer.call(this,e,this.data(),this.bind(this.onSelect),this.opts))&&e!=b&&(this.search.val(e),0<e.length&&this.open())},onSelect:function(e,t){this.triggerSelect(e)&&""!==e.text&&(this.addSelectedChoice(e),this.opts.element.trigger({type:"selected",val:this.id(e),choice:e}),this.lastSearchTerm=this.search.val(),this.clearSearch(),this.updateResults(),!this.select&&this.opts.closeOnSelect||this.postprocessResults(e,!1,!0===this.opts.closeOnSelect),!this.opts.closeOnSelect&&0<this.countSelectableResults()?(this.search.width(10),this.resizeSearch(),0<this.getMaximumSelectionSize()&&this.val().length>=this.getMaximumSelectionSize()?this.updateResults(!0):this.prefillNextSearchTerm()&&this.updateResults(),this.positionDropdown()):(this.close(),this.search.width(10)),this.triggerChange({added:e}),t&&t.noFocus||this.focusSearch())},cancel:function(){this.close(),this.focusSearch()},addSelectedChoice:function(e){var t=this.getVal(),i=this;v(e).each(function(){t.push(i.createChoice(this))}),this.setVal(t)},createChoice:function(e){var t=!e.locked,i=v("<li class='select2-search-choice'>    <div></div>    <a href='#' class='select2-search-choice-close' tabindex='-1'></a></li>"),n=v("<li class='select2-search-choice select2-locked'><div></div></li>"),o=t?i:n,i=this.id(e),n=this.opts.formatSelection(e,o.find("div"),this.opts.escapeMarkup);return n!=b&&o.find("div").replaceWith(v("<div></div>").html(n)),(n=this.opts.formatSelectionCssClass(e,o.find("div")))!=b&&o.addClass(n),t&&o.find(".select2-search-choice-close").on("mousedown",S).on("click dblclick",this.bind(function(e){this.isInterfaceEnabled()&&(this.unselect(v(e.target)),this.selection.find(".select2-search-choice-focus").removeClass("select2-search-choice-focus"),S(e),this.close(),this.focusSearch())})).on("focus",this.bind(function(){this.isInterfaceEnabled()&&(this.container.addClass("select2-container-active"),this.dropdown.addClass("select2-drop-active"))})),o.data("select2-data",e),o.insertBefore(this.searchContainer),i},unselect:function(e){var t,i,n=this.getVal();if(0===(e=e.closest(".select2-search-choice")).length)throw"Invalid argument: "+e+". Must be .select2-search-choice";if(t=e.data("select2-data")){var o=v.Event("select2-removing");if(o.val=this.id(t),o.choice=t,this.opts.element.trigger(o),o.isDefaultPrevented())return!1;for(;0<=(i=d(this.id(t),n));)n.splice(i,1),this.setVal(n),this.select&&this.postprocessResults();return e.remove(),this.opts.element.trigger({type:"select2-removed",val:this.id(t),choice:t}),this.triggerChange({removed:t}),!0}},postprocessResults:function(e,t,i){var n=this.getVal(),o=this.results.find(".select2-result"),s=this.results.find(".select2-result-with-children"),a=this;o.each2(function(e,t){0<=d(a.id(t.data("select2-data")),n)&&(t.addClass("select2-selected"),t.find(".select2-result-selectable").addClass("select2-selected"))}),s.each2(function(e,t){t.is(".select2-result-selectable")||0!==t.find(".select2-result-selectable:not(.select2-selected)").length||t.addClass("select2-selected")}),-1==this.highlight()&&!1!==i&&!0===this.opts.closeOnSelect&&a.highlight(0),!this.opts.createSearchChoice&&0<!o.filter(".select2-result:not(.select2-selected)").length&&(e&&(e.more||0!==this.results.find(".select2-no-results").length)||D(a.opts.formatNoMatches,"formatNoMatches")&&this.results.append("<li class='select2-no-results'>"+P(a.opts.formatNoMatches,a.opts.element,a.search.val())+"</li>"))},getMaxSearchWidth:function(){return this.selection.width()-f(this.search)},resizeSearch:function(){var e,t,i,n=f(this.search);t=this.search,o||(i=t[0].currentStyle||window.getComputedStyle(t[0],null),(o=v(document.createElement("div")).css({position:"absolute",left:"-10000px",top:"-10000px",display:"none",fontSize:i.fontSize,fontFamily:i.fontFamily,fontStyle:i.fontStyle,fontWeight:i.fontWeight,letterSpacing:i.letterSpacing,textTransform:i.textTransform,whiteSpace:"nowrap"})).attr("class","select2-sizer"),v(document.body).append(o)),o.text(t.val()),e=o.width()+10,i=this.search.offset().left,(i=(i=(i=(t=this.selection.width())-(i-this.selection.offset().left)-n)<e?t-n:i)<40?t-n:i)<=0&&(i=e),this.search.width(Math.floor(i))},getVal:function(){var e;return this.select?null===(e=this.select.val())?[]:e:p(e=this.opts.element.val(),this.opts.separator,this.opts.transformVal)},setVal:function(e){var t,i;this.select?this.select.val(e):(t=[],i={},v(e).each(function(){this in i||(t.push(this),i[this]=0)}),this.opts.element.val(0===t.length?"":t.join(this.opts.separator)))},buildChangeDetails:function(e,t){for(var t=t.slice(0),e=e.slice(0),i=0;i<t.length;i++)for(var n=0;n<e.length;n++)if(u(this.opts.id(t[i]),this.opts.id(e[n]))){t.splice(i,1),i--,e.splice(n,1);break}return{added:t,removed:e}},val:function(e,i){var n,o=this;if(0===arguments.length)return this.getVal();if((n=this.data()).length||(n=[]),!e&&0!==e)return this.opts.element.val(""),this.updateSelection([]),this.clearSearch(),void(i&&this.triggerChange({added:this.data(),removed:n}));if(this.setVal(e),this.select)this.opts.initSelection(this.select,this.bind(this.updateSelection)),i&&this.triggerChange(this.buildChangeDetails(n,this.data()));else{if(this.opts.initSelection===b)throw new Error("val() cannot be called if initSelection() is not defined");this.opts.initSelection(this.opts.element,function(e){var t=v.map(e,o.id);o.setVal(t),o.updateSelection(e),o.clearSearch(),i&&o.triggerChange(o.buildChangeDetails(n,o.data()))})}this.clearSearch()},onSortStart:function(){if(this.select)throw new Error("Sorting of elements is not supported when attached to <select>. Attach to <input type='hidden'/> instead.");this.search.width(0),this.searchContainer.hide()},onSortEnd:function(){var e=[],t=this;this.searchContainer.show(),this.searchContainer.appendTo(this.searchContainer.parent()),this.resizeSearch(),this.selection.find(".select2-search-choice").each(function(){e.push(t.opts.id(v(this).data("select2-data")))}),this.setVal(e),this.triggerChange()},data:function(e,t){var i,n,o=this;if(0===arguments.length)return this.selection.children(".select2-search-choice").map(function(){return v(this).data("select2-data")}).get();n=this.data(),i=v.map(e=e||[],function(e){return o.opts.id(e)}),this.setVal(i),this.updateSelection(e),this.clearSearch(),t&&this.triggerChange(this.buildChangeDetails(n,this.data()))}}),v.fn.select2=function(){var e,t,i,n,o=Array.prototype.slice.call(arguments,0),s=["val","destroy","opened","open","close","focus","isFocused","container","dropdown","onSortStart","onSortEnd","enable","disable","readonly","positionDropdown","data","search"],a=["opened","isFocused","container","dropdown"],r=["val","data"],l={search:"externalSearch"};return this.each(function(){if(0===o.length||"object"==typeof o[0])(t=0===o.length?{}:v.extend({},o[0])).element=v(this),"select"===t.element.get(0).tagName.toLowerCase()?n=t.element.prop("multiple"):(n=t.multiple||!1,"tags"in t&&(t.multiple=n=!0)),(e=new(n?window.Select2.class.multi:window.Select2.class.single)).init(t);else{if("string"!=typeof o[0])throw"Invalid arguments to select2 plugin: "+o;if(d(o[0],s)<0)throw"Unknown method: "+o[0];if(i=b,(e=v(this).data("select2"))!==b)return t=o[0],i="container"===t?e.container:"dropdown"===t?e.dropdown:e[t=l[t]?l[t]:t].apply(e,o.slice(1)),!(0<=d(o[0],a)||0<=d(o[0],r)&&1==o.length)&&void 0}}),i===b?this:i},v.fn.select2.defaults={debug:!1,width:"copy",loadMorePadding:0,closeOnSelect:!0,openOnEnter:!0,containerCss:{},dropdownCss:{},containerCssClass:"",dropdownCssClass:"",formatResult:function(e,t,i,n){var o=[];return x(this.text(e),i.term,o,n),o.join("")},transformVal:function(e){return v.trim(e)},formatSelection:function(e,t,i){return e?i(this.text(e)):b},sortResults:function(e,t,i){return e},formatResultCssClass:function(e){return e.css},formatSelectionCssClass:function(e,t){return b},minimumResultsForSearch:0,minimumInputLength:0,maximumInputLength:null,maximumSelectionSize:0,id:function(e){return e==b?null:e.id},text:function(e){return e&&this.data&&this.data.text?v.isFunction(this.data.text)?this.data.text(e):e[this.data.text]:e.text},matcher:function(e,t){return 0<=h(""+t).toUpperCase().indexOf(h(""+e).toUpperCase())},separator:",",tokenSeparators:[],tokenizer:function(e,t,i,n){var o,s,a,r,l,c=e,h=!1;if(!n.createSearchChoice||!n.tokenSeparators||n.tokenSeparators.length<1)return b;for(;;){for(s=-1,a=0,r=n.tokenSeparators.length;a<r&&(l=n.tokenSeparators[a],!(0<=(s=e.indexOf(l))));a++);if(s<0)break;if(o=e.substring(0,s),e=e.substring(s+l.length),0<o.length&&(o=n.createSearchChoice.call(this,o,t))!==b&&null!==o&&n.id(o)!==b&&null!==n.id(o)){for(h=!1,a=0,r=t.length;a<r;a++)if(u(n.id(o),n.id(t[a]))){h=!0;break}h||i(o)}}return c!==e?e:void 0},escapeMarkup:C,blurOnChange:!1,selectOnBlur:!1,adaptContainerCssClass:function(e){return e},adaptDropdownCssClass:function(e){return null},nextSearchTerm:function(e,t){return b},searchInputPlaceholder:"",createSearchChoicePosition:"top",shouldFocusInput:function(e){return!("ontouchstart"in window||0<navigator.msMaxTouchPoints)||!(e.opts.minimumResultsForSearch<0)}},v.fn.select2.locales=[],v.fn.select2.locales.en={formatMatches:function(e){return 1===e?"One result is available, press enter to select it.":e+" results are available, use up and down arrow keys to navigate."},formatNoMatches:function(){return"No matches found"},formatAjaxError:function(e,t,i){return"Loading failed"},formatInputTooShort:function(e,t){e=t-e.length;return"Please enter "+e+" or more character"+(1==e?"":"s")},formatInputTooLong:function(e,t){t=e.length-t;return"Please delete "+t+" character"+(1==t?"":"s")},formatSelectionTooBig:function(e){return"You can only select "+e+" item"+(1==e?"":"s")},formatLoadMore:function(e){return"Loading more results…"},formatSearching:function(){return"Searching…"}},v.extend(v.fn.select2.defaults,v.fn.select2.locales.en),v.fn.select2.ajaxDefaults={transport:v.ajax,params:{type:"GET",cache:!1,dataType:"json"}},window.Select2={query:{ajax:T,local:O,tags:E},util:{debounce:g,markMatch:x,escapeMarkup:C,stripDiacritics:h},class:{abstract:e,single:t,multi:i}})}(jQuery)}.apply(e,arguments)})}(this),function(e){define("jquery.event.drag",["jquery"],function(){return function(){!function(u){u.fn.drag=function(e,t,i){var n="string"==typeof e?e:"",o=u.isFunction(e)?e:u.isFunction(t)?t:null;return 0!==n.indexOf("drag")&&(n="drag"+n),i=(e==o?t:i)||{},o?this.bind(n,i,o):this.trigger(n)};var p=u.event,n=p.special,f=n.drag={defaults:{which:1,distance:0,not:":input",handle:null,relative:!1,drop:!0,click:!1},datakey:"dragdata",noBubble:!0,add:function(e){var i=u.data(this,f.datakey),n=e.data||{};i.related+=1,u.each(f.defaults,function(e,t){void 0!==n[e]&&(i[e]=n[e])})},remove:function(){--u.data(this,f.datakey).related},setup:function(){var e;u.data(this,f.datakey)||(e=u.extend({related:0},f.defaults),u.data(this,f.datakey,e),p.add(this,"touchstart mousedown",f.init,e),this.attachEvent&&this.attachEvent("ondragstart",f.dontstart))},teardown:function(){(u.data(this,f.datakey)||{}).related||(u.removeData(this,f.datakey),p.remove(this,"touchstart mousedown",f.init),f.textselect(!0),this.detachEvent&&this.detachEvent("ondragstart",f.dontstart))},init:function(e){if(!f.touched){var t,i=e.data;if(!(0!=e.which&&0<i.which&&e.which!=i.which)&&!u(e.target).is(i.not)&&(!i.handle||u(e.target).closest(i.handle,e.currentTarget).length)&&(f.touched="touchstart"==e.type?this:null,i.propagates=1,i.mousedown=this,i.interactions=[f.interaction(this,i)],i.target=e.target,i.pageX=e.pageX,i.pageY=e.pageY,i.dragging=null,t=f.hijack(e,"draginit",i),i.propagates))return(t=f.flatten(t))&&t.length&&(i.interactions=[],u.each(t,function(){i.interactions.push(f.interaction(this,i))})),i.propagates=i.interactions.length,!1!==i.drop&&n.drop&&n.drop.handler(e,i),f.textselect(!1),f.touched?p.add(f.touched,"touchmove touchend",f.handler,i):p.add(document,"mousemove mouseup",f.handler,i),!(!f.touched||i.live)&&void 0}},interaction:function(e,t){t=u(e)[t.relative?"position":"offset"]()||{top:0,left:0};return{drag:e,callback:new f.callback,droppable:[],offset:t}},handler:function(e){var t=e.data;switch(e.type){case!t.dragging&&"touchmove":e.preventDefault();case!t.dragging&&"mousemove":if(Math.pow(e.pageX-t.pageX,2)+Math.pow(e.pageY-t.pageY,2)<Math.pow(t.distance,2))break;e.target=t.target,f.hijack(e,"dragstart",t),t.propagates&&(t.dragging=!0);case"touchmove":e.preventDefault();case"mousemove":if(t.dragging){if(f.hijack(e,"drag",t),t.propagates){!1!==t.drop&&n.drop&&n.drop.handler(e,t);break}e.type="mouseup"}default:f.touched?p.remove(f.touched,"touchmove touchend",f.handler):p.remove(document,"mousemove mouseup",f.handler),t.dragging&&(!1!==t.drop&&n.drop&&n.drop.handler(e,t),f.hijack(e,"dragend",t)),f.textselect(!0),!1===t.click&&t.dragging&&u.data(t.mousedown,"suppress.click",(new Date).getTime()+5),t.dragging=f.touched=!1}},hijack:function(i,n,o,e,t){if(o){var s,a,r,l={event:i.originalEvent,type:i.type},c=n.indexOf("drop")?"drag":"drop",h=e||0,d=isNaN(e)?o.interactions.length:e;i.type=n,i.originalEvent=null,o.results=[];do{if(a=o.interactions[h]){if("dragend"!==n&&a.cancelled)continue;r=f.properties(i,o,a),a.results=[],u(t||a[c]||o.droppable).each(function(e,t){if(r.target=t,!(i.isPropagationStopped=function(){return!1})===(s=t?p.dispatch.call(t,i,r):null)?("drag"==c&&(a.cancelled=!0,--o.propagates),"drop"==n&&(a[c][e]=null)):"dropinit"==n&&a.droppable.push(f.element(s)||t),"dragstart"==n&&(a.proxy=u(f.element(s)||a.drag)[0]),a.results.push(s),delete i.result,"dropinit"!==n)return s}),o.results[h]=f.flatten(a.results),"dropinit"==n&&(a.droppable=f.flatten(a.droppable)),"dragstart"!=n||a.cancelled||r.update()}}while(++h<d);return i.type=l.type,i.originalEvent=l.event,f.flatten(o.results)}},properties:function(e,t,i){var n=i.callback;return n.drag=i.drag,n.proxy=i.proxy||i.drag,n.startX=t.pageX,n.startY=t.pageY,n.deltaX=e.pageX-t.pageX,n.deltaY=e.pageY-t.pageY,n.originalX=i.offset.left,n.originalY=i.offset.top,n.offsetX=n.originalX+n.deltaX,n.offsetY=n.originalY+n.deltaY,n.drop=f.flatten((i.drop||[]).slice()),n.available=f.flatten((i.droppable||[]).slice()),n},element:function(e){if(e&&(e.jquery||1==e.nodeType))return e},flatten:function(e){return u.map(e,function(e){return e&&e.jquery?u.makeArray(e):e&&e.length?f.flatten(e):e})},textselect:function(e){u(document)[e?"unbind":"bind"]("selectstart",f.dontstart).css("MozUserSelect",e?"":"none"),document.unselectable=e?"off":"on"},dontstart:function(){return!1},callback:function(){}};f.callback.prototype={update:function(){n.drop&&this.available.length&&u.each(this.available,function(e){n.drop.locate(this,e)})}};var t=p.dispatch;p.dispatch=function(e){if(!(0<u.data(this,"suppress."+e.type)-(new Date).getTime()))return t.apply(this,arguments);u.removeData(this,"suppress."+e.type)};var o=p.fixHooks.touchstart=p.fixHooks.touchmove=p.fixHooks.touchend=p.fixHooks.touchcancel={props:"clientX clientY pageX pageY screenX screenY".split(" "),filter:function(i,e){var n;return!e||(n=e.touches&&e.touches[0]||e.changedTouches&&e.changedTouches[0]||null)&&u.each(o.props,function(e,t){i[t]=n[t]}),i}}}(jQuery)}.apply(e,arguments)})}(this),function(e){define("jquery.event.drop",["jquery"],function(){return function(){return function(p){p.fn.drop=function(e,t,i){var n="string"==typeof e?e:"",o=p.isFunction(e)?e:p.isFunction(t)?t:null;return 0!==n.indexOf("drop")&&(n="drop"+n),i=(e==o?t:i)||{},o?this.bind(n,i,o):this.trigger(n)},p.drop=function(e){m.multi=!0===(e=e||{}).multi?1/0:!1===e.multi?1:(isNaN(e.multi)?m:e).multi,m.delay=e.delay||m.delay,m.tolerance=p.isFunction(e.tolerance)?e.tolerance:null===e.tolerance?null:m.tolerance,m.mode=e.mode||m.mode||"intersect"};var f=p.event.special,m=p.event.special.drop={multi:1,delay:20,mode:"overlap",targets:[],datakey:"dropdata",noBubble:!0,add:function(e){p.data(this,m.datakey).related+=1},remove:function(){--p.data(this,m.datakey).related},setup:function(){p.data(this,m.datakey)||(p.data(this,m.datakey,{related:0,active:[],anyactive:0,winner:0,location:{}}),m.targets.push(this))},teardown:function(){var t;(p.data(this,m.datakey)||{}).related||(p.removeData(this,m.datakey),t=this,m.targets=p.grep(m.targets,function(e){return e!==t}))},handler:function(e,t){var i;if(t)switch(e.type){case"mousedown":case"touchstart":i=p(m.targets),(i="string"==typeof t.drop?i.filter(t.drop):i).each(function(){var e=p.data(this,m.datakey);e.active=[],e.anyactive=0,e.winner=0}),t.droppable=i,f.drag.hijack(e,"dropinit",t);break;case"mousemove":case"touchmove":m.event=e,m.timer||m.tolerate(t);break;case"mouseup":case"touchend":m.timer=clearTimeout(m.timer),t.propagates&&(f.drag.hijack(e,"drop",t),f.drag.hijack(e,"dropend",t))}},locate:function(e,t){var i=p.data(e,m.datakey),n=p(e),o=n.offset()||{},s=n.outerHeight(),n=n.outerWidth(),s={elem:e,width:n,height:s,top:o.top,left:o.left,right:o.left+n,bottom:o.top+s};return i&&(i.location=s,i.index=t,i.elem=e),s},contains:function(e,t){return(t[0]||t.left)>=e.left&&(t[0]||t.right)<=e.right&&(t[1]||t.top)>=e.top&&(t[1]||t.bottom)<=e.bottom},modes:{intersect:function(e,t,i){return this.contains(i,[e.pageX,e.pageY])?1e9:this.modes.overlap.apply(this,arguments)},overlap:function(e,t,i){return Math.max(0,Math.min(i.bottom,t.bottom)-Math.max(i.top,t.top))*Math.max(0,Math.min(i.right,t.right)-Math.max(i.left,t.left))},fit:function(e,t,i){return this.contains(i,t)?1:0},middle:function(e,t,i){return this.contains(i,[t.left+.5*t.width,t.top+.5*t.height])?1:0}},sort:function(e,t){return t.winner-e.winner||e.index-t.index},tolerate:function(e){var t,i,n,o,s,a,r,l,c=0,h=e.interactions.length,d=[m.event.pageX,m.event.pageY],u=m.tolerance||m.modes[m.mode];do{if(l=e.interactions[c]){if(!l)return;l.drop=[],s=[],a=l.droppable.length,u&&(n=m.locate(l.proxy)),t=0;do{if(r=l.droppable[t]){if(!(i=(o=p.data(r,m.datakey)).location))continue;o.winner=u?u.call(m,m.event,n,i):m.contains(i,d)?1:0,s.push(o)}}while(++t<a);for(s.sort(m.sort),t=0;(o=s[t])&&(o.winner&&l.drop.length<m.multi?(o.active[c]||o.anyactive||(!1!==f.drag.hijack(m.event,"dropstart",e,c,o.elem)[0]?(o.active[c]=1,o.anyactive+=1):o.winner=0),o.winner&&l.drop.push(o.elem)):o.active[c]&&1==o.anyactive&&(f.drag.hijack(m.event,"dropend",e,c,o.elem),o.active[c]=0,--o.anyactive)),++t<a;);}}while(++c<h);m.last&&d[0]==m.last.pageX&&d[1]==m.last.pageY?delete m.timer:m.timer=setTimeout(function(){m.tolerate(e)},m.delay),m.last=m.event}};f.dropinit=f.dropstart=f.dropend=m}(jQuery),$.drop}.apply(e,arguments)})}(this),define("mockup-patterns-select2",["jquery","pat-base","mockup-utils","select2","jquery.event.drag","jquery.event.drop"],function(r,e,l){"use strict";return e.extend({name:"select2",trigger:".pat-select2",parser:"mockup",defaults:{separator:","},initializeValues:function(){var o=this;o.options.initialValues&&(o.options.id=function(e){return e.id},o.options.initSelection=function(e,t){var i=[],e=e.val(),n=o.options.initialValues;"string"==typeof o.options.initialValues&&""!==o.options.initialValues&&("{"===o.options.initialValues[0]?n=JSON.parse(o.options.initialValues):(n={},r(o.options.initialValues.split(o.options.separator)).each(function(){var e=this.split(":"),t=r.trim(e[0]),e=r.trim(e[1]);n[t]=e}))),r(e.split(o.options.separator)).each(function(){var e=this;n[this]&&(e=n[this]),i.push({id:l.removeHTML(this),text:l.removeHTML(e)})}),t(i)})},initializeTags:function(){var e=this;e.options.tags&&"string"==typeof e.options.tags&&("["===e.options.tags.substr(0,1)?e.options.tags=JSON.parse(e.options.tags):e.options.tags=e.options.tags.split(e.options.separator)),e.options.tags&&!e.options.allowNewItems&&(e.options.data=r.map(e.options.tags,function(e,t){return{id:e,text:e}}),e.options.multiple=!0,delete e.options.tags)},initializeOrdering:function(){var i,n=this;n.options.orderable&&(i=function(e,t){return e?e.text:void 0},n.options.formatSelection&&(i=n.options.formatSelection),n.options.formatSelection=function(e,t){return t.parents("li").drag("start",function(e,t){return r(this).addClass("select2-choice-dragging"),n.$el.select2("onSortStart"),r.drop({tolerance:function(e,t,i){var n=e.pageY>i.top+i.height/2;return r.data(i.elem,"drop+reorder",n?"insertAfter":"insertBefore"),this.contains(i,[e.pageX,e.pageY])}}),r(this).clone().addClass("dragging").css({opacity:.75,position:"absolute"}).appendTo(document.body)}).drag(function(e,t){r(t.proxy).css({top:t.offsetY,left:t.offsetX});var i=t.drop[0],n=r.data(i||{},"drop+reorder");!i||i==t.current&&n==t.method||(r(this)[n](i),t.current=i,t.method=n,t.update())}).drag("end",function(e,t){r(this).removeClass("select2-choice-dragging"),n.$el.select2("onSortEnd"),r(t.proxy).remove()}).drop("init",function(e,t){return this!=t.drag}),i(e,t)})},initializeSelect2:function(){var i=this;function t(e,t){return e&&(i.options.debug&&console.debug("callback",e,t),(e="string"==typeof e?window[e]:e)(t))}i.options.formatResultCssClass=function(e){if(e.id)return"select2-option-"+e.id.toLowerCase().replace(/[ \:\)\(\[\]\{\}\_\+\=\&\*\%\#]/g,"-")},i.$el.select2(i.options),i.$el.on("select2-selected",function(e){t(i.options.onSelected,e)}),i.$el.on("select2-selecting",function(e){t(i.options.onSelecting,e)}),i.$el.on("select2-deselecting",function(e){t(i.options.onDeselecting,e)}),i.$el.on("select2-deselected",function(e){t(i.options.onDeselected,e)}),i.$select2=i.$el.parent().find(".select2-container"),i.$el.parent().off("close.plone-modal.patterns"),i.options.orderable&&i.$select2.addClass("select2-orderable")},opened:function(){return 1===r(".select2-dropdown-open",this.$el.parent()).length},init:function(){var s,e,t,i,a=this;a.options.allowNewItems=!a.options.hasOwnProperty("allowNewItems")||JSON.parse(a.options.allowNewItems),a.options.ajax||a.options.vocabularyUrl?(a.options.vocabularyUrl&&(a.options.multiple=void 0===a.options.multiple||a.options.multiple,a.options.ajax=a.options.ajax||{},a.options.ajax.url=a.options.vocabularyUrl,a.options.initSelection=function(e,t){var i=[],e=e.val();r(e.split(a.options.separator)).each(function(){var e=l.removeHTML(this);i.push({id:e,text:e})}),t(i)}),s="",a.options.ajax=r.extend({quietMillis:300,data:function(e,t){return{query:s=e,page_limit:10,page:t}},results:function(e,t){var i,n,o=e.results;return a.options.vocabularyUrl&&(i=[],r.each(e.results,function(e,t){i.push(t.id)}),o=[],n=""===s||0<=r.inArray(s,i),a.options.allowNewItems&&!n&&(s=l.removeHTML(s),o.push({id:s,text:s})),r.each(e.results,function(e,t){o.push(t)})),{results:o}}},a.options.ajax)):a.options.multiple&&a.$el.is("select")&&(e=a.$el.val()||[],t=r.map(a.$el.find("option"),function(e){return{text:r(e).html(),id:e.value}}),(i=r('<input type="hidden" />')).val(e.join(a.options.separator)),i.attr("class",a.$el.attr("class")),i.attr("name",a.$el.attr("name")),i.attr("id",a.$el.attr("id")),a.$orig=a.$el,a.$el.replaceWith(i),a.$el=i,a.options.data=t),a.initializeValues(),a.initializeTags(),a.initializeOrdering(),a.initializeSelect2()}})}),define("mockup-patterns-pickadate",["jquery","pat-base","mockup-utils","translate","picker","picker.date","picker.time","mockup-patterns-select2"],function(s,e,a,t){"use strict";return e.extend({name:"pickadate",trigger:".pat-pickadate",parser:"mockup",defaults:{separator:" ",date:{selectYears:!0,selectMonths:!0,formatSubmit:"yyyy-mm-dd",format:"yyyy-mm-dd",labelMonthNext:t("Next month"),labelMonthPrev:t("Previous month"),labelMonthSelect:t("Select a month"),labelYearSelect:t("Select a year"),clear:!1,close:!1,today:!1},time:{clear:!1},today:t("Today"),clear:t("Clear"),timezone:null,autoSetTimeOnDateChange:"+[0,0]",classWrapperName:"pattern-pickadate-wrapper",classSeparatorName:"pattern-pickadate-separator",classDateName:"pattern-pickadate-date",classDateWrapperName:"pattern-pickadate-date-wrapper",classTimeName:"pattern-pickadate-time",classTimeWrapperName:"pattern-pickadate-time-wrapper",classTimezoneName:"pattern-pickadate-timezone",classTimezoneWrapperName:"pattern-pickadate-timezone-wrapper",classClearName:"pattern-pickadate-clear",classNowName:"pattern-pickadate-now",placeholderDate:t("Enter date..."),placeholderTime:t("Enter time..."),placeholderTimezone:t("Enter timezone...")},parseTimeOffset:function(t){var e=void 0;0===t.indexOf("+")?t=t.split(e="+")[1]:0===t.indexOf("-")&&(t=t.split(e="-")[1]);try{t=JSON.parse(t)}catch(e){t=void 0}if(!1===t)return!1;if(!0===t||!0!==Array.isArray(t))return[0,0];var i,n=parseInt(t[0],10)||0,o=parseInt(t[1],10)||0;return"+"!==e&&"-"!==e||(t=(i=new Date).getHours(),i=i.getMinutes(),"+"===e?(23<(n=t+n)&&(n=23),59<(o=i+o)&&(o=59)):"-"===e&&((n=t-n)<0&&(n=0),(o=i-o)<0&&(o=0))),[n,o]},init:function(){var t,i=this,e=i.$el.val().split(" "),n=e[0]||"",o=e[1]||"";!1===a.bool(i.options.date)&&(i.options.date=!1),!1===a.bool(i.options.time)&&(i.options.time=!1),i.options.autoSetTimeOnDateChange=i.parseTimeOffset(i.options.autoSetTimeOnDateChange),!1===i.options.date&&(o=e[0]),i.$el.hide(),i.$wrapper=s("<div/>").addClass(i.options.classWrapperName).insertAfter(i.$el),!1!==i.options.date&&(i.$date=s('<input type="text"/>').attr("placeholder",i.options.placeholderDate).attr("data-value",n).addClass(i.options.classDateName).appendTo(s("<div/>").addClass(i.options.classDateWrapperName).appendTo(i.$wrapper)).pickadate(s.extend(!0,{},i.options.date,{onSet:function(e){void 0!==e.select&&(i.$date.attr("data-value",e.select),!1!==i.options.autoSetTimeOnDateChange&&i.$time&&(i.$time.pickatime("picker").get("select")||i.$time.pickatime("picker").set("select",i.options.autoSetTimeOnDateChange)),!1!==i.options.time&&""===i.$time.attr("data-value")||i.updateValue.call(i)),e.hasOwnProperty("clear")&&(i.$el.val(""),i.$date.attr("data-value",""))}}))),!1!==i.options.time&&(i.options.time.formatSubmit="HH:i",i.$time=s('<input type="text"/>').attr("placeholder",i.options.placeholderTime).attr("data-value",o).addClass(i.options.classTimeName).appendTo(s("<div/>").addClass(i.options.classTimeWrapperName).appendTo(i.$wrapper)).pickatime(s.extend(!0,{},i.options.time,{onSet:function(e){void 0!==e.select&&(i.$time.attr("data-value",e.select),!1!==i.options.date&&""===i.$date.attr("data-value")||i.updateValue.call(i)),e.hasOwnProperty("clear")&&(i.$el.val(""),i.$time.attr("data-value",""))}})),"string"==typeof o&&"00"===o.substring(0,2)&&(i.$time.pickatime("picker").set("select",o.split(":")),i.$time.attr("data-value",o))),!1!==i.options.date&&!1!==i.options.time&&i.options.timezone&&(i.$separator=s("<span/>").addClass(i.options.classSeparatorName).html(" "===i.options.separator?"&nbsp;":i.options.separator).appendTo(i.$wrapper)),null!==i.options.timezone&&(i.$timezone=s('<input type="text"/>').addClass(i.options.classTimezoneName).appendTo(s("<div/>").addClass(i.options.classTimezoneWrapperName).appendTo(i.$wrapper)).patternSelect2(s.extend(!0,{placeholder:i.options.placeholderTimezone,width:"10em"},i.options.timezone,{multiple:!1})).on("change",function(e){void 0!==e.val&&(i.$timezone.attr("data-value",e.val),!1!==i.options.date&&""===i.$date.attr("data-value")||!1!==i.options.time&&""===i.$time.attr("data-value")||i.updateValue.call(i))}),(o=i.options.timezone.default)&&(i.options.timezone.data.some(function(e){return t=e.text===i.options.timezone.default}),t&&(i.$timezone.attr("data-value",o),i.$timezone.parent().find(".select2-chosen").text(o))),1===i.options.timezone.data.length&&(i.$timezone.attr("data-value",i.options.timezone.data[0].text),i.$timezone.parent().find(".select2-chosen").text(i.options.timezone.data[0].text),i.$timezone.select2("enable",!1))),a.bool(i.options.today)&&(i.$now=s('<button type="button" class="btn btn-xs btn-info" title="'+i.options.today+'"><span class="glyphicon glyphicon-time"></span></button>').addClass(i.options.classNowName).on("click",function(e){e.preventDefault();e=new Date;i.$date&&i.$date.data("pickadate").set("select",e),i.$time&&i.$time.data("pickatime").set("select",e),i.emit("updated")}).appendTo(i.$wrapper)),a.bool(i.options.clear)&&(i.$clear=s('<button type="button" class="btn btn-xs btn-danger" title="'+i.options.clear+'"><span class="glyphicon glyphicon-trash"></span></button>').addClass(i.options.classClearName).on("click",function(e){e.preventDefault(),i.$date&&i.$date.data("pickadate").clear(),i.$time&&i.$time.data("pickatime").clear(),i.emit("updated")}).appendTo(i.$wrapper))},updateValue:function(){var e,t,i,n,o=this,s="";!1!==o.options.date&&(t=o.$date.data("pickadate").component,i=o.$date.data("pickadate").get("select"),e=t.formats.toString,i&&(s+=e.apply(t,[o.options.date.formatSubmit,i]))),!1!==o.options.date&&!1!==o.options.time&&(s+=" "),!1!==o.options.time&&(t=o.$time.data("pickatime").component,n=o.$time.data("pickatime").get("select"),i=t.formats.toString,n&&(s+=i.apply(t,["HH:i",n]))),null===o.options.timezone||(n=" "+o.$timezone.attr("data-value"))&&(s+=n),o.$el.val(s),o.emit("updated")}})}),require(["mockup-patterns-inlinevalidation","mockup-patterns-pickadate"],function(){}),define("/Users/fred/buildouts/zeelandia52/develop/collective.anonymouseditpatterns/src/collective/anonymouseditpatterns/browser/static/js/anonymouseditpatterns.js",function(){});
//# sourceMappingURL=anonymouseditpatterns-compiled.min.js.map
// Dummy JS file for mosaic-grid bundle

// Dummy JS file for mosaic-styles bundle

!function(){function n(){}var t="object"==typeof self&&self.self===self&&self||"object"==typeof global&&global.global===global&&global||this||{},e=t._,r=Array.prototype,a=Object.prototype,f="undefined"!=typeof Symbol?Symbol.prototype:null,i=r.push,l=r.slice,p=a.toString,o=a.hasOwnProperty,u=Array.isArray,c=Object.keys,s=Object.create,h=function(t){return t instanceof h?t:this instanceof h?void(this._wrapped=t):new h(t)};"undefined"==typeof exports||exports.nodeType?t._=h:("undefined"!=typeof module&&!module.nodeType&&module.exports&&(exports=module.exports=h),exports._=h),h.VERSION="1.9.1";function d(i,o,t){if(void 0===o)return i;switch(null==t?3:t){case 1:return function(t){return i.call(o,t)};case 3:return function(t,e,n){return i.call(o,t,e,n)};case 4:return function(t,e,n,r){return i.call(o,t,e,n,r)}}return function(){return i.apply(o,arguments)}}function y(t,e,n){return h.iteratee!==g?h.iteratee(t,e):null==t?h.identity:h.isFunction(t)?d(t,e,n):h.isObject(t)&&!h.isArray(t)?h.matcher(t):h.property(t)}var g;h.iteratee=g=function(t,e){return y(t,e,1/0)};function v(i,o){return o=null==o?i.length-1:+o,function(){for(var t=Math.max(arguments.length-o,0),e=Array(t),n=0;n<t;n++)e[n]=arguments[n+o];switch(o){case 0:return i.call(this,e);case 1:return i.call(this,arguments[0],e);case 2:return i.call(this,arguments[0],arguments[1],e)}for(var r=Array(o+1),n=0;n<o;n++)r[n]=arguments[n];return r[o]=e,i.apply(this,r)}}function m(t){if(!h.isObject(t))return{};if(s)return s(t);n.prototype=t;var e=new n;return n.prototype=null,e}function w(e){return function(t){return null==t?void 0:t[e]}}function b(t,e){return null!=t&&o.call(t,e)}function x(t,e){for(var n=e.length,r=0;r<n;r++){if(null==t)return;t=t[e[r]]}return n?t:void 0}function j(t){var e=_(t);return"number"==typeof e&&0<=e&&e<=A}var A=Math.pow(2,53)-1,_=w("length");h.each=h.forEach=function(t,e,n){if(e=d(e,n),j(t))for(i=0,o=t.length;i<o;i++)e(t[i],i,t);else for(var r=h.keys(t),i=0,o=r.length;i<o;i++)e(t[r[i]],r[i],t);return t},h.map=h.collect=function(t,e,n){e=y(e,n);for(var r=!j(t)&&h.keys(t),i=(r||t).length,o=Array(i),a=0;a<i;a++){var u=r?r[a]:a;o[a]=e(t[u],u,t)}return o};function E(l){return function(t,e,n,r){var i=3<=arguments.length;return function(t,e,n,r){var i=!j(t)&&h.keys(t),o=(i||t).length,a=0<l?0:o-1;for(r||(n=t[i?i[a]:a],a+=l);0<=a&&a<o;a+=l){var u=i?i[a]:a;n=e(n,t[u],u,t)}return n}(t,d(e,r,4),n,i)}}h.reduce=h.foldl=h.inject=E(1),h.reduceRight=h.foldr=E(-1),h.find=h.detect=function(t,e,n){var r=(j(t)?h.findIndex:h.findKey)(t,e,n);if(void 0!==r&&-1!==r)return t[r]},h.filter=h.select=function(t,r,e){var i=[];return r=y(r,e),h.each(t,function(t,e,n){r(t,e,n)&&i.push(t)}),i},h.reject=function(t,e,n){return h.filter(t,h.negate(y(e)),n)},h.every=h.all=function(t,e,n){e=y(e,n);for(var r=!j(t)&&h.keys(t),i=(r||t).length,o=0;o<i;o++){var a=r?r[o]:o;if(!e(t[a],a,t))return!1}return!0},h.some=h.any=function(t,e,n){e=y(e,n);for(var r=!j(t)&&h.keys(t),i=(r||t).length,o=0;o<i;o++){var a=r?r[o]:o;if(e(t[a],a,t))return!0}return!1},h.contains=h.includes=h.include=function(t,e,n,r){return j(t)||(t=h.values(t)),"number"==typeof n&&!r||(n=0),0<=h.indexOf(t,e,n)},h.invoke=v(function(t,n,r){var i,o;return h.isFunction(n)?o=n:h.isArray(n)&&(i=n.slice(0,-1),n=n[n.length-1]),h.map(t,function(t){var e=o;if(!e){if(i&&i.length&&(t=x(t,i)),null==t)return;e=t[n]}return null==e?e:e.apply(t,r)})}),h.pluck=function(t,e){return h.map(t,h.property(e))},h.where=function(t,e){return h.filter(t,h.matcher(e))},h.findWhere=function(t,e){return h.find(t,h.matcher(e))},h.max=function(t,r,e){var n,i,o=-1/0,a=-1/0;if(null==r||"number"==typeof r&&"object"!=typeof t[0]&&null!=t)for(var u=0,l=(t=j(t)?t:h.values(t)).length;u<l;u++)null!=(n=t[u])&&o<n&&(o=n);else r=y(r,e),h.each(t,function(t,e,n){i=r(t,e,n),(a<i||i===-1/0&&o===-1/0)&&(o=t,a=i)});return o},h.min=function(t,r,e){var n,i,o=1/0,a=1/0;if(null==r||"number"==typeof r&&"object"!=typeof t[0]&&null!=t)for(var u=0,l=(t=j(t)?t:h.values(t)).length;u<l;u++)null!=(n=t[u])&&n<o&&(o=n);else r=y(r,e),h.each(t,function(t,e,n){((i=r(t,e,n))<a||i===1/0&&o===1/0)&&(o=t,a=i)});return o},h.shuffle=function(t){return h.sample(t,1/0)},h.sample=function(t,e,n){if(null==e||n)return j(t)||(t=h.values(t)),t[h.random(t.length-1)];var r=j(t)?h.clone(t):h.values(t),i=_(r);e=Math.max(Math.min(e,i),0);for(var o=i-1,a=0;a<e;a++){var u=h.random(a,o),l=r[a];r[a]=r[u],r[u]=l}return r.slice(0,e)},h.sortBy=function(t,r,e){var i=0;return r=y(r,e),h.pluck(h.map(t,function(t,e,n){return{value:t,index:i++,criteria:r(t,e,n)}}).sort(function(t,e){var n=t.criteria,r=e.criteria;if(n!==r){if(r<n||void 0===n)return 1;if(n<r||void 0===r)return-1}return t.index-e.index}),"value")};function O(a,e){return function(r,i,t){var o=e?[[],[]]:{};return i=y(i,t),h.each(r,function(t,e){var n=i(t,e,r);a(o,t,n)}),o}}h.groupBy=O(function(t,e,n){b(t,n)?t[n].push(e):t[n]=[e]}),h.indexBy=O(function(t,e,n){t[n]=e}),h.countBy=O(function(t,e,n){b(t,n)?t[n]++:t[n]=1});var k=/[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g;h.toArray=function(t){return t?h.isArray(t)?l.call(t):h.isString(t)?t.match(k):j(t)?h.map(t,h.identity):h.values(t):[]},h.size=function(t){return null==t?0:j(t)?t.length:h.keys(t).length},h.partition=O(function(t,e,n){t[n?0:1].push(e)},!0),h.first=h.head=h.take=function(t,e,n){return null==t||t.length<1?null==e?void 0:[]:null==e||n?t[0]:h.initial(t,t.length-e)},h.initial=function(t,e,n){return l.call(t,0,Math.max(0,t.length-(null==e||n?1:e)))},h.last=function(t,e,n){return null==t||t.length<1?null==e?void 0:[]:null==e||n?t[t.length-1]:h.rest(t,Math.max(0,t.length-e))},h.rest=h.tail=h.drop=function(t,e,n){return l.call(t,null==e||n?1:e)},h.compact=function(t){return h.filter(t,Boolean)};var T=function(t,e,n,r){for(var i=(r=r||[]).length,o=0,a=_(t);o<a;o++){var u=t[o];if(j(u)&&(h.isArray(u)||h.isArguments(u)))if(e)for(var l=0,c=u.length;l<c;)r[i++]=u[l++];else T(u,e,n,r),i=r.length;else n||(r[i++]=u)}return r};h.flatten=function(t,e){return T(t,e,!1)},h.without=v(function(t,e){return h.difference(t,e)}),h.uniq=h.unique=function(t,e,n,r){h.isBoolean(e)||(r=n,n=e,e=!1),null!=n&&(n=y(n,r));for(var i=[],o=[],a=0,u=_(t);a<u;a++){var l=t[a],c=n?n(l,a,t):l;e&&!n?(a&&o===c||i.push(l),o=c):n?h.contains(o,c)||(o.push(c),i.push(l)):h.contains(i,l)||i.push(l)}return i},h.union=v(function(t){return h.uniq(T(t,!0,!0))}),h.intersection=function(t){for(var e=[],n=arguments.length,r=0,i=_(t);r<i;r++){var o=t[r];if(!h.contains(e,o)){for(var a=1;a<n&&h.contains(arguments[a],o);a++);a===n&&e.push(o)}}return e},h.difference=v(function(t,e){return e=T(e,!0,!0),h.filter(t,function(t){return!h.contains(e,t)})}),h.unzip=function(t){for(var e=t&&h.max(t,_).length||0,n=Array(e),r=0;r<e;r++)n[r]=h.pluck(t,r);return n},h.zip=v(h.unzip),h.object=function(t,e){for(var n={},r=0,i=_(t);r<i;r++)e?n[t[r]]=e[r]:n[t[r][0]]=t[r][1];return n};function I(o){return function(t,e,n){e=y(e,n);for(var r=_(t),i=0<o?0:r-1;0<=i&&i<r;i+=o)if(e(t[i],i,t))return i;return-1}}h.findIndex=I(1),h.findLastIndex=I(-1),h.sortedIndex=function(t,e,n,r){for(var i=(n=y(n,r,1))(e),o=0,a=_(t);o<a;){var u=Math.floor((o+a)/2);n(t[u])<i?o=u+1:a=u}return o};function S(o,a,u){return function(t,e,n){var r=0,i=_(t);if("number"==typeof n)0<o?r=0<=n?n:Math.max(n+i,r):i=0<=n?Math.min(n+1,i):n+i+1;else if(u&&n&&i)return t[n=u(t,e)]===e?n:-1;if(e!=e)return 0<=(n=a(l.call(t,r,i),h.isNaN))?n+r:-1;for(n=0<o?r:i-1;0<=n&&n<i;n+=o)if(t[n]===e)return n;return-1}}h.indexOf=S(1,h.findIndex,h.sortedIndex),h.lastIndexOf=S(-1,h.findLastIndex),h.range=function(t,e,n){null==e&&(e=t||0,t=0),n=n||(e<t?-1:1);for(var r=Math.max(Math.ceil((e-t)/n),0),i=Array(r),o=0;o<r;o++,t+=n)i[o]=t;return i},h.chunk=function(t,e){if(null==e||e<1)return[];for(var n=[],r=0,i=t.length;r<i;)n.push(l.call(t,r,r+=e));return n};function F(t,e,n,r,i){if(!(r instanceof e))return t.apply(n,i);var o=m(t.prototype),a=t.apply(o,i);return h.isObject(a)?a:o}h.bind=v(function(e,n,r){if(!h.isFunction(e))throw new TypeError("Bind must be called on a function");var i=v(function(t){return F(e,i,n,this,r.concat(t))});return i}),h.partial=v(function(i,o){var a=h.partial.placeholder,u=function(){for(var t=0,e=o.length,n=Array(e),r=0;r<e;r++)n[r]=o[r]===a?arguments[t++]:o[r];for(;t<arguments.length;)n.push(arguments[t++]);return F(i,u,this,this,n)};return u}),(h.partial.placeholder=h).bindAll=v(function(t,e){var n=(e=T(e,!1,!1)).length;if(n<1)throw new Error("bindAll must be passed function names");for(;n--;){var r=e[n];t[r]=h.bind(t[r],t)}}),h.memoize=function(r,i){var o=function(t){var e=o.cache,n=""+(i?i.apply(this,arguments):t);return b(e,n)||(e[n]=r.apply(this,arguments)),e[n]};return o.cache={},o},h.delay=v(function(t,e,n){return setTimeout(function(){return t.apply(null,n)},e)}),h.defer=h.partial(h.delay,h,1),h.throttle=function(n,r,i){var o,a,u,l,c=0;i=i||{};function s(){c=!1===i.leading?0:h.now(),o=null,l=n.apply(a,u),o||(a=u=null)}function t(){var t=h.now();c||!1!==i.leading||(c=t);var e=r-(t-c);return a=this,u=arguments,e<=0||r<e?(o&&(clearTimeout(o),o=null),c=t,l=n.apply(a,u),o||(a=u=null)):o||!1===i.trailing||(o=setTimeout(s,e)),l}return t.cancel=function(){clearTimeout(o),c=0,o=a=u=null},t},h.debounce=function(n,r,i){function o(t,e){a=null,e&&(u=n.apply(t,e))}var a,u,t=v(function(t){var e;return a&&clearTimeout(a),i?(e=!a,a=setTimeout(o,r),e&&(u=n.apply(this,t))):a=h.delay(o,r,this,t),u});return t.cancel=function(){clearTimeout(a),a=null},t},h.wrap=function(t,e){return h.partial(e,t)},h.negate=function(t){return function(){return!t.apply(this,arguments)}},h.compose=function(){var n=arguments,r=n.length-1;return function(){for(var t=r,e=n[r].apply(this,arguments);t--;)e=n[t].call(this,e);return e}},h.after=function(t,e){return function(){if(--t<1)return e.apply(this,arguments)}},h.before=function(t,e){var n;return function(){return 0<--t&&(n=e.apply(this,arguments)),t<=1&&(e=null),n}},h.once=h.partial(h.before,2),h.restArguments=v;function M(t,e){var n=L.length,r=t.constructor,i=h.isFunction(r)&&r.prototype||a,o="constructor";for(b(t,o)&&!h.contains(e,o)&&e.push(o);n--;)(o=L[n])in t&&t[o]!==i[o]&&!h.contains(e,o)&&e.push(o)}var N=!{toString:null}.propertyIsEnumerable("toString"),L=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"];h.keys=function(t){if(!h.isObject(t))return[];if(c)return c(t);var e=[];for(var n in t)b(t,n)&&e.push(n);return N&&M(t,e),e},h.allKeys=function(t){if(!h.isObject(t))return[];var e=[];for(var n in t)e.push(n);return N&&M(t,e),e},h.values=function(t){for(var e=h.keys(t),n=e.length,r=Array(n),i=0;i<n;i++)r[i]=t[e[i]];return r},h.mapObject=function(t,e,n){e=y(e,n);for(var r=h.keys(t),i=r.length,o={},a=0;a<i;a++){var u=r[a];o[u]=e(t[u],u,t)}return o},h.pairs=function(t){for(var e=h.keys(t),n=e.length,r=Array(n),i=0;i<n;i++)r[i]=[e[i],t[e[i]]];return r},h.invert=function(t){for(var e={},n=h.keys(t),r=0,i=n.length;r<i;r++)e[t[n[r]]]=n[r];return e},h.functions=h.methods=function(t){var e=[];for(var n in t)h.isFunction(t[n])&&e.push(n);return e.sort()};function P(l,c){return function(t){var e=arguments.length;if(c&&(t=Object(t)),e<2||null==t)return t;for(var n=1;n<e;n++)for(var r=arguments[n],i=l(r),o=i.length,a=0;a<o;a++){var u=i[a];c&&void 0!==t[u]||(t[u]=r[u])}return t}}h.extend=P(h.allKeys),h.extendOwn=h.assign=P(h.keys),h.findKey=function(t,e,n){e=y(e,n);for(var r,i=h.keys(t),o=0,a=i.length;o<a;o++)if(e(t[r=i[o]],r,t))return r};function q(t,e,n){return e in n}var R,C;h.pick=v(function(t,e){var n={},r=e[0];if(null==t)return n;h.isFunction(r)?(1<e.length&&(r=d(r,e[1])),e=h.allKeys(t)):(r=q,e=T(e,!1,!1),t=Object(t));for(var i=0,o=e.length;i<o;i++){var a=e[i],u=t[a];r(u,a,t)&&(n[a]=u)}return n}),h.omit=v(function(t,n){var e,r=n[0];return h.isFunction(r)?(r=h.negate(r),1<n.length&&(e=n[1])):(n=h.map(T(n,!1,!1),String),r=function(t,e){return!h.contains(n,e)}),h.pick(t,r,e)}),h.defaults=P(h.allKeys,!0),h.create=function(t,e){var n=m(t);return e&&h.extendOwn(n,e),n},h.clone=function(t){return h.isObject(t)?h.isArray(t)?t.slice():h.extend({},t):t},h.tap=function(t,e){return e(t),t},h.isMatch=function(t,e){var n=h.keys(e),r=n.length;if(null==t)return!r;for(var i=Object(t),o=0;o<r;o++){var a=n[o];if(e[a]!==i[a]||!(a in i))return!1}return!0},R=function(t,e,n,r){if(t===e)return 0!==t||1/t==1/e;if(null==t||null==e)return!1;if(t!=t)return e!=e;var i=typeof t;return("function"==i||"object"==i||"object"==typeof e)&&C(t,e,n,r)},C=function(t,e,n,r){t instanceof h&&(t=t._wrapped),e instanceof h&&(e=e._wrapped);var i=p.call(t);if(i!==p.call(e))return!1;switch(i){case"[object RegExp]":case"[object String]":return""+t==""+e;case"[object Number]":return+t!=+t?+e!=+e:0==+t?1/t==1/e:+t==+e;case"[object Date]":case"[object Boolean]":return+t==+e;case"[object Symbol]":return f.valueOf.call(t)===f.valueOf.call(e)}var o="[object Array]"===i;if(!o){if("object"!=typeof t||"object"!=typeof e)return!1;var a=t.constructor,u=e.constructor;if(a!==u&&!(h.isFunction(a)&&a instanceof a&&h.isFunction(u)&&u instanceof u)&&"constructor"in t&&"constructor"in e)return!1}r=r||[];for(var l=(n=n||[]).length;l--;)if(n[l]===t)return r[l]===e;if(n.push(t),r.push(e),o){if((l=t.length)!==e.length)return!1;for(;l--;)if(!R(t[l],e[l],n,r))return!1}else{var c,s=h.keys(t),l=s.length;if(h.keys(e).length!==l)return!1;for(;l--;)if(c=s[l],!b(e,c)||!R(t[c],e[c],n,r))return!1}return n.pop(),r.pop(),!0},h.isEqual=function(t,e){return R(t,e)},h.isEmpty=function(t){return null==t||(j(t)&&(h.isArray(t)||h.isString(t)||h.isArguments(t))?0===t.length:0===h.keys(t).length)},h.isElement=function(t){return!(!t||1!==t.nodeType)},h.isArray=u||function(t){return"[object Array]"===p.call(t)},h.isObject=function(t){var e=typeof t;return"function"==e||"object"==e&&!!t},h.each(["Arguments","Function","String","Number","Date","RegExp","Error","Symbol","Map","WeakMap","Set","WeakSet"],function(e){h["is"+e]=function(t){return p.call(t)==="[object "+e+"]"}}),h.isArguments(arguments)||(h.isArguments=function(t){return b(t,"callee")});var B=t.document&&t.document.childNodes;"function"!=typeof/./&&"object"!=typeof Int8Array&&"function"!=typeof B&&(h.isFunction=function(t){return"function"==typeof t||!1}),h.isFinite=function(t){return!h.isSymbol(t)&&isFinite(t)&&!isNaN(parseFloat(t))},h.isNaN=function(t){return h.isNumber(t)&&isNaN(t)},h.isBoolean=function(t){return!0===t||!1===t||"[object Boolean]"===p.call(t)},h.isNull=function(t){return null===t},h.isUndefined=function(t){return void 0===t},h.has=function(t,e){if(!h.isArray(e))return b(t,e);for(var n=e.length,r=0;r<n;r++){var i=e[r];if(null==t||!o.call(t,i))return!1;t=t[i]}return!!n},h.noConflict=function(){return t._=e,this},h.identity=function(t){return t},h.constant=function(t){return function(){return t}},h.noop=function(){},h.property=function(e){return h.isArray(e)?function(t){return x(t,e)}:w(e)},h.propertyOf=function(e){return null==e?function(){}:function(t){return h.isArray(t)?x(e,t):e[t]}},h.matcher=h.matches=function(e){return e=h.extendOwn({},e),function(t){return h.isMatch(t,e)}},h.times=function(t,e,n){var r=Array(Math.max(0,t));e=d(e,n,1);for(var i=0;i<t;i++)r[i]=e(i);return r},h.random=function(t,e){return null==e&&(e=t,t=0),t+Math.floor(Math.random()*(e-t+1))},h.now=Date.now||function(){return(new Date).getTime()};function W(e){function n(t){return e[t]}var t="(?:"+h.keys(e).join("|")+")",r=RegExp(t),i=RegExp(t,"g");return function(t){return t=null==t?"":""+t,r.test(t)?t.replace(i,n):t}}var D={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},$=h.invert(D);h.escape=W(D),h.unescape=W($),h.result=function(t,e,n){h.isArray(e)||(e=[e]);var r=e.length;if(!r)return h.isFunction(n)?n.call(t):n;for(var i=0;i<r;i++){var o=null==t?void 0:t[e[i]];void 0===o&&(o=n,i=r),t=h.isFunction(o)?o.call(t):o}return t};var U=0;h.uniqueId=function(t){var e=++U+"";return t?t+e:e},h.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};function z(t){return"\\"+G[t]}var Q=/(.)^/,G={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},H=/\\|'|\r|\n|\u2028|\u2029/g;h.template=function(o,t,e){!t&&e&&(t=e),t=h.defaults({},t,h.templateSettings);var n,r=RegExp([(t.escape||Q).source,(t.interpolate||Q).source,(t.evaluate||Q).source].join("|")+"|$","g"),a=0,u="__p+='";o.replace(r,function(t,e,n,r,i){return u+=o.slice(a,i).replace(H,z),a=i+t.length,e?u+="'+\n((__t=("+e+"))==null?'':_.escape(__t))+\n'":n?u+="'+\n((__t=("+n+"))==null?'':__t)+\n'":r&&(u+="';\n"+r+"\n__p+='"),t}),u+="';\n",t.variable||(u="with(obj||{}){\n"+u+"}\n"),u="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+u+"return __p;\n";try{n=new Function(t.variable||"obj","_",u)}catch(t){throw t.source=u,t}function i(t){return n.call(this,t,h)}var l=t.variable||"obj";return i.source="function("+l+"){\n"+u+"}",i},h.chain=function(t){var e=h(t);return e._chain=!0,e};function K(t,e){return t._chain?h(e).chain():e}h.mixin=function(n){return h.each(h.functions(n),function(t){var e=h[t]=n[t];h.prototype[t]=function(){var t=[this._wrapped];return i.apply(t,arguments),K(this,e.apply(h,t))}}),h},h.mixin(h),h.each(["pop","push","reverse","shift","sort","splice","unshift"],function(e){var n=r[e];h.prototype[e]=function(){var t=this._wrapped;return n.apply(t,arguments),"shift"!==e&&"splice"!==e||0!==t.length||delete t[0],K(this,t)}}),h.each(["concat","join","slice"],function(t){var e=r[t];h.prototype[t]=function(){return K(this,e.apply(this._wrapped,arguments))}}),h.prototype.value=function(){return this._wrapped},h.prototype.valueOf=h.prototype.toJSON=h.prototype.value,h.prototype.toString=function(){return String(this._wrapped)},"function"==typeof define&&define.amd&&define("underscore",[],function(){return h})}(),function(){var t,n;Function.prototype.bind||(Function.prototype.bind=function(t){if("function"!=typeof this)throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");function e(){}function n(){return i.apply(this instanceof e&&t?this:t,r.concat(Array.prototype.slice.call(arguments)))}var r=Array.prototype.slice.call(arguments,1),i=this;return e.prototype=this.prototype,n.prototype=new e,n});var i={DEBUG:10,INFO:20,WARN:30,ERROR:40,FATAL:50};function e(){}function r(){}function o(t,e){this._loggers={},this.name=t||"",this._parent=e||null,e||(this._enabled=!0,this._level=i.WARN)}function a(t){n=t}e.prototype={output:function(t,e,n){var r;void 0!==window.console&&void 0!==console.log&&(t&&n.unshift(t+":"),r=n.join(" "),console.info,e<=i.DEBUG?(r="[DEBUG] "+r,console.log(r)):e<=i.INFO?console.info(r):e<=i.WARN?console.warn(r):console.error(r))}},r.prototype={output:function(t,e,n){t&&n.unshift(t+":"),e<=i.DEBUG?(n.unshift("[DEBUG]"),console.log.apply(console,n)):e<=i.INFO?console.info.apply(console,n):e<=i.WARN?console.warn.apply(console,n):console.error.apply(console,n)}},o.prototype={getLogger:function(t){for(var e=t.split("."),n=this,r=this.name?[this.name]:[];e.length;){var i=e.shift();r.push(i),i in n._loggers||(n._loggers[i]=new o(r.join("."),n)),n=n._loggers[i]}return n},_getFlag:function(t){var e=this;for(t="_"+t;null!==e;){if(void 0!==e[t])return e[t];e=e._parent}return null},setEnabled:function(t){this._enabled=!!t},isEnabled:function(){this._getFlag("enabled")},setLevel:function(t){"number"==typeof t?this._level=t:"string"==typeof t&&(t=t.toUpperCase())in i&&(this._level=i[t])},getLevel:function(){return this._getFlag("level")},log:function(t,e){!e.length||!this._getFlag("enabled")||t<this._getFlag("level")||(e=Array.prototype.slice.call(e),n.output(this.name,t,e))},debug:function(){this.log(i.DEBUG,arguments)},info:function(){this.log(i.INFO,arguments)},warn:function(){this.log(i.WARN,arguments)},error:function(){this.log(i.ERROR,arguments)},fatal:function(){this.log(i.FATAL,arguments)}},window.console&&window.console.log&&"function"==typeof window.console.log.apply?a(new r):a(new e),t=new o;for(var u,l=/loglevel(|-[^=]+)=([^&]+)/g;null!==(u=l.exec(window.location.search));){(""===u[1]?t:t.getLogger(u[1].slice(1))).setLevel(u[2].toUpperCase())}var c={Level:i,getLogger:t.getLogger.bind(t),setEnabled:t.setEnabled.bind(t),isEnabled:t.isEnabled.bind(t),setLevel:t.setLevel.bind(t),getLevel:t.getLevel.bind(t),debug:t.debug.bind(t),info:t.info.bind(t),warn:t.warn.bind(t),error:t.error.bind(t),fatal:t.fatal.bind(t),getWriter:function(){return n},setWriter:a};"function"==typeof define?define("logging",[],function(){return c}):window.logging=c}(),define("pat-logger",["logging"],function(t){return t.getLogger("patterns")}),function(t){"function"==typeof define&&define.amd?define("jquery.browser",["jquery"],t):"object"==typeof module&&"object"==typeof module.exports?module.exports=t(require("jquery")):t(window.jQuery)}(function(t){"use strict";function e(t){void 0===t&&(t=window.navigator.userAgent),t=t.toLowerCase();var e,n,r,i,o=/(edge)\/([\w.]+)/.exec(t)||/(opr)[\/]([\w.]+)/.exec(t)||/(chrome)[ \/]([\w.]+)/.exec(t)||/(iemobile)[\/]([\w.]+)/.exec(t)||/(version)(applewebkit)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec(t)||/(webkit)[ \/]([\w.]+).*(version)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec(t)||/(webkit)[ \/]([\w.]+)/.exec(t)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(t)||/(msie) ([\w.]+)/.exec(t)||0<=t.indexOf("trident")&&/(rv)(?::| )([\w.]+)/.exec(t)||t.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(t)||[],a=/(ipad)/.exec(t)||/(ipod)/.exec(t)||/(windows phone)/.exec(t)||/(iphone)/.exec(t)||/(kindle)/.exec(t)||/(silk)/.exec(t)||/(android)/.exec(t)||/(win)/.exec(t)||/(mac)/.exec(t)||/(linux)/.exec(t)||/(cros)/.exec(t)||/(playbook)/.exec(t)||/(bb)/.exec(t)||/(blackberry)/.exec(t)||[],u={},l={browser:o[5]||o[3]||o[1]||"",version:o[2]||o[4]||"0",versionNumber:o[4]||o[2]||"0",platform:a[0]||""};return l.browser&&(u[l.browser]=!0,u.version=l.version,u.versionNumber=parseInt(l.versionNumber,10)),l.platform&&(u[l.platform]=!0),(u.android||u.bb||u.blackberry||u.ipad||u.iphone||u.ipod||u.kindle||u.playbook||u.silk||u["windows phone"])&&(u.mobile=!0),(u.cros||u.mac||u.linux||u.win)&&(u.desktop=!0),(u.chrome||u.opr||u.safari)&&(u.webkit=!0),(u.rv||u.iemobile)&&(l.browser="msie",u.msie=!0),u.edge&&(delete u.edge,l.browser="msedge",u.msedge=!0),u.safari&&u.blackberry&&(e="blackberry",u[l.browser=e]=!0),u.safari&&u.playbook&&(n="playbook",u[l.browser=n]=!0),u.bb&&(r="blackberry",u[l.browser=r]=!0),u.opr&&(l.browser="opera",u.opera=!0),u.safari&&u.android&&(i="android",u[l.browser=i]=!0),u.safari&&u.kindle&&(l.browser="kindle",u.kindle=!0),u.safari&&u.silk&&(l.browser="silk",u.silk=!0),u.name=l.browser,u.platform=l.platform,u}return window.jQBrowser=e(window.navigator.userAgent),window.jQBrowser.uaMatch=e,t&&(t.browser=window.jQBrowser),window.jQBrowser}),define("pat-utils",["jquery","underscore","jquery.browser"],function(o,a){o.fn.safeClone=function(){var t=this.clone();return void 0!==o.browser.msie&&t.findInclusive(":input[placeholder]").each(function(t,e){var n=o(e);n.attr("placeholder")===n.val()&&n.val("")}),t},Array.prototype.forEach||(Array.prototype.forEach=function(t,e){var n,r;if(null===this)throw new TypeError(" this is null or not defined");var i,o=Object(this),a=o.length>>>0;if("function"!=typeof t)throw new TypeError(t+" is not a function");for(1<arguments.length&&(n=e),r=0;r<a;){r in o&&(i=o[r],t.call(n,i,r,o)),r++}});function u(t){var e=typeof t;return"function"==e||"object"==e&&!!t}var l={none:{hide:"hide",show:"show"},fade:{hide:"fadeOut",show:"fadeIn"},slide:{hide:"slideUp",show:"slideDown"}};return isElementInViewport=function(t,e,n){if(t===[])return!1;t instanceof o&&(t=t[0]);var r=t.getBoundingClientRect(),i=[r.top,r.bottom,r.left,r.right];return!a.every(i,function(t){if(0===t)return!0})&&(e?(void 0===n&&(n=0),r.top<=0+n&&r.bottom>=0+n):0<=r.top&&0<=r.left&&r.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&r.right<=(window.innerWidth||document.documentElement.clientWidth))},{jqueryPlugin:function(n){return function(t,e){return 0===this.length?this:("object"==typeof t&&(e=t,t=void 0),"function"==typeof n?function(n,r,i){return this.each(function(){var t=o(this),e=n.init(t,i);if(r){if(void 0===e[r])return o.error("Method "+r+" does not exist on jQuery."+n.name),!1;if("_"===r.charAt(0))return o.error("Method "+r+" is private on jQuery."+n.name),!1;e[r].apply(e,[i])}}),this}.call(this,n,t,e):function(t,e,n){var r=this;if(e){if(t[e])return t[e].apply(r,[r].concat([n]));o.error("Method "+e+" does not exist on jQuery."+t.name)}else t.init.apply(r,[r].concat([n]));return r}.call(this,n,t,e))}},debounce:function(n,r){var i;return function(){var t=this,e=arguments;clearTimeout(i),i=setTimeout(function(){i=null,n.apply(t,e)},r)}},escapeRegExp:function(t){return t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")},isObject:u,extend:function(t){if(!u(t))return t;for(var e,n,r=1,i=arguments.length;r<i;r++)for(n in e=arguments[r])hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t},rebaseURL:function(t,e){return-1!==e.indexOf("://")||"/"===e[0]?e:t.slice(0,t.lastIndexOf("/")+1)+e},findLabel:function(t){for(var e,n=t.parentNode;n&&11!==n.nodeType;n=n.parentNode)if("LABEL"===n.tagName)return n;return t.id&&(e=o('label[for="'+t.id+'"]')),e&&0===e.length&&t.form&&(e=o('label[for="'+t.name+'"]',t.form)),e&&e.length?e[0]:null},elementInViewport:function(t){var e=t.getBoundingClientRect(),n=document.documentElement,r=window.innerWidth||n.clientWidth,i=window.innerHeight||n.clientHeight;return!(e.right<0||e.bottom<0||e.left>r||e.top>i)},removeWildcardClass:function(t,e){var i;-1===e.indexOf("*")?t.removeClass(e):(i=(i=e.replace(/[\-\[\]{}()+?.,\\\^$|#\s]/g,"\\$&")).replace(/[*]/g,".*"),i=new RegExp("^"+i+"$"),t.filter("[class]").each(function(){for(var t=o(this),e=t.attr("class").split(/\s+/),n=[],r=0;r<e.length;r++)i.test(e[r])||n.push(e[r]);n.length?t.attr("class",n.join(" ")):t.removeAttr("class")}))},hideOrShow:function(t,e,n,r){var i,o="css"===n.transition||"none"===n.transition?null:n.effect.duration;function a(){t.removeClass("in-progress").addClass(e?"visible":"hidden").trigger("pat-update",{pattern:r,transition:"complete"})}t.removeClass("visible hidden in-progress"),o?(i=l[n.transition],t.addClass("in-progress").trigger("pat-update",{pattern:r,transition:"start"}),t[e?i.show:i.hide]({duration:o,easing:n.effect.easing,complete:a})):("css"!==n.transition&&t[e?"show":"hide"](),a())},addURLQueryParameter:function(t,e,n){var r=new RegExp("(\\?|\\&)"+e+"=.*?(?=(&|$))"),i=t.toString().split("#"),o=i[0],a=i[1],u=o,u=r.test(o)?o.replace(r,"$1"+e+"="+n):/\?.+$/.test(o)?o+"&"+e+"="+n:o+"?"+e+"="+n;return a&&(u+="#"+a),u},removeDuplicateObjects:function(t){return a.reduce(t,function(t,e){var n=!1;return a.each(t,function(t){n=a.keys(t).length===a.keys(e).length&&!a.chain(t).omit(function(t,e){return this[e]===t}.bind(e)).keys().value().length}),n||t.push(e),t},[])},mergeStack:function(t,r){for(var i=[],e=0;e<r;e++)i.push({});return a.each(t,function(t){for(var e=t.length-1,n=0;n<r;n++)i[n]=o.extend(i[n]||{},t[e<n?e:n])}),i},isElementInViewport:isElementInViewport}}),define("pat-compat",[],function(){var i,o,a,u;Array.prototype.every||(Array.prototype.every=function(t){"use strict";if(null===this)throw new TypeError;var e=Object(this),n=e.length>>>0;if("function"!=typeof t)throw new TypeError;for(var r=arguments[1],i=0;i<n;i++)if(i in e&&!t.call(r,e[i],i,e))return!1;return!0}),Array.prototype.filter||(Array.prototype.filter=function(t){"use strict";if(null===this)throw new TypeError;var e=Object(this),n=e.length>>>0;if("function"!=typeof t)throw new TypeError;for(var r,i=[],o=arguments[1],a=0;a<n;a++){a in e&&(r=e[a],t.call(o,r,a,e)&&i.push(r))}return i}),Array.prototype.forEach||(Array.prototype.forEach=function(t,e){var n,r;if(null===this)throw new TypeError(" this is null or not defined");var i,o=Object(this),a=o.length>>>0;if("[object Function]"!=={}.toString.call(t))throw new TypeError(t+" is not a function");for(e&&(n=e),r=0;r<a;){r in o&&(i=o[r],t.call(n,i,r,o)),r++}}),Array.prototype.indexOf||(Array.prototype.indexOf=function(t){"use strict";if(null===this)throw new TypeError;var e=Object(this),n=e.length>>>0;if(0==n)return-1;var r=0;if(0<arguments.length&&((r=Number(arguments[1]))!=r?r=0:0!==r&&r!==1/0&&r!==-1/0&&(r=(0<r||-1)*Math.floor(Math.abs(r)))),n<=r)return-1;for(var i=0<=r?r:Math.max(n-Math.abs(r),0);i<n;i++)if(i in e&&e[i]===t)return i;return-1}),Array.prototype.lastIndexOf||(Array.prototype.lastIndexOf=function(t){"use strict";if(null===this)throw new TypeError;var e=Object(this),n=e.length>>>0;if(0==n)return-1;var r=n;1<arguments.length&&((r=Number(arguments[1]))!=r?r=0:0!==r&&r!==1/0&&r!==-1/0&&(r=(0<r||-1)*Math.floor(Math.abs(r))));for(var i=0<=r?Math.min(r,n-1):n-Math.abs(r);0<=i;i--)if(i in e&&e[i]===t)return i;return-1}),Array.prototype.map||(Array.prototype.map=function(t,e){var n,r,i;if(null===this)throw new TypeError(" this is null or not defined");var o,a,u=Object(this),l=u.length>>>0;if("[object Function]"!=={}.toString.call(t))throw new TypeError(t+" is not a function");for(e&&(n=e),r=new Array(l),i=0;i<l;){i in u&&(o=u[i],a=t.call(n,o,i,u),r[i]=a),i++}return r}),Array.prototype.reduce||(Array.prototype.reduce=function(t,e){if(null==this)throw new TypeError("Object is null or undefined");var n,r=0,i=this.length>>0;if("function"!=typeof t)throw new TypeError("First argument is not callable");if(arguments.length<2){if(0==i)throw new TypeError("Array length is 0 and no second argument");n=this[0],r=1}else n=e;for(;r<i;)r in this&&(n=t.call(void 0,n,this[r],r,this)),++r;return n}),Array.prototype.reduceRight||(Array.prototype.reduceRight=function(t){"use strict";if(null===this)throw new TypeError;var e=Object(this),n=e.length>>>0;if("function"!=typeof t)throw new TypeError;if(0==n&&1===arguments.length)throw new TypeError;var r,i=n-1;if(2<=arguments.length)r=arguments[1];else for(;;){if(i in this){r=this[i--];break}if(--i<0)throw new TypeError}for(;0<=i;)i in e&&(r=t.call(void 0,r,e[i],i,e)),i--;return r}),Array.prototype.some||(Array.prototype.some=function(t){"use strict";if(null===this)throw new TypeError;var e=Object(this),n=e.length>>>0;if("function"!=typeof t)throw new TypeError;for(var r=arguments[1],i=0;i<n;i++)if(i in e&&t.call(r,e[i],i,e))return!0;return!1}),Array.isArray||(Array.isArray=function(t){return"[object Array]"===Object.prototype.toString.call(t)}),String.prototype.trim||(String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")}),Function.prototype.bind||(Function.prototype.bind=function(t){if("function"!=typeof this)throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");function e(){}function n(){return i.apply(this instanceof e&&t?this:t,r.concat(Array.prototype.slice.call(arguments)))}var r=Array.prototype.slice.call(arguments,1),i=this;return e.prototype=this.prototype,n.prototype=new e,n}),Object.keys||(Object.keys=(i=Object.prototype.hasOwnProperty,o=!{toString:null}.propertyIsEnumerable("toString"),u=(a=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"]).length,function(t){if("object"!=typeof t&&"function"!=typeof t||null===t)throw new TypeError("Object.keys called on non-object");var e=[];for(var n in t)i.call(t,n)&&e.push(n);if(o)for(var r=0;r<u;r++)i.call(t,a[r])&&e.push(a[r]);return e}))}),define("pat-jquery-ext",["jquery"],function(s){var r={init:function(e){var n={time:3,initialTime:8,exceptionAreas:[]};return this.each(function(){var t=s(this);t.data("timeout")||(e&&s.extend(n,e),t.data("timeout",{lastEvent:new Date,trueTime:n.time,time:n.initialTime,untouched:!0,inExceptionArea:!1}),t.bind("mouseover.timeout",r.mouseMoved),t.bind("mouseenter.timeout",r.mouseMoved),s(n.exceptionAreas).each(function(){t.find(this).live("mouseover.timeout",{parent:t},r.enteredException).live("mouseleave.timeout",{parent:t},r.leftException)}),0<n.initialTime?t.timeout("startTimer"):t.addClass("timeout"))})},enteredException:function(t){var e=t.data.parent.data("timeout");e.inExceptionArea=!0,t.data.parent.data("timeout",e),t.data.parent.trigger("mouseover")},leftException:function(t){var e=t.data.parent.data("timeout");e.inExceptionArea=!1,t.data.parent.data("timeout",e)},destroy:function(){return this.each(function(){var t=s(this),e=t.data("timeout");s(window).unbind(".timeout"),e.timeout.remove(),t.removeData("timeout")})},mouseMoved:function(){var t=s(this),e=t.data("timeout");t.hasClass("timeout")?(t.removeClass("timeout"),t.timeout("startTimer")):e.untouched&&(e.untouched=!1,e.time=e.trueTime),e.lastEvent=new Date,t.data("timeout",e)},startTimer:function(){var r=s(this),t=r.data("timeout"),i=function(){var t,e,n=r.data("timeout");n&&n.lastEvent&&(n.inExceptionArea?setTimeout(i,Math.floor(1e3*n.time)):(t=new Date,0<(e=Math.floor(1e3*n.time)-(t-n.lastEvent))?setTimeout(i,100+e):r.addClass("timeout")))};setTimeout(i,Math.floor(1e3*t.time))}};s.fn.timeout=function(t){return r[t]?r[t].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof t&&t?void s.error("Method "+t+" does not exist on jQuery.timeout"):r.init.apply(this,arguments)},s.extend(s.expr[":"],{scrollable:function(t){return"scroll"===s(t).css("overflow")||"scroll"===s(t).css("overflowX")||"scroll"===s(t).css("overflowY")||(t.clientHeight<t.scrollHeight&&(-1!==s.inArray(s(t).css("overflowY"),["scroll","auto"])||-1!==s.inArray(s(t).css("overflow"),["scroll","auto"]))||t.clientWidth<t.scrollWidth&&(-1!==s.inArray(s(t).css("overflowX"),["scroll","auto"])||-1!==s.inArray(s(t).css("overflow"),["scroll","auto"])))}}),s.fn.makeVisibleInScroll=function(t){var a=null;return"string"==typeof t?a=s("#"+t):t&&(a=s(t)),this.each(function(){var t=s(this),e=a||(0<(e=t.parents(":scrollable")).length?s(e[0]):s(window)),n=t.position().top,r=t.height()+n,i=e.scrollTop(),o=e.height()+i;n<i?e.scrollTop(n):r>o-e.height()/2&&e.scrollTop(n-(e.height()-t.height())/2)})},s.fn.setPositionAbsolute=function(u,l,c){return this.each(function(){var t=s(this),e=s(this).width(),n=u.offset(),r=u.width(),i=u.height(),o=n.left+r-e+c,a=n.top+i+l;t.css({"z-index":1,position:"absolute",marginLeft:0,marginTop:0,left:o+"px",top:a+"px",width:e}),t.remove().appendTo("body").show()})},s.fn.positionAncestor=function(a){var u=0,l=0;return this.each(function(){var t=s(this).closest(a);if(t.length&&"static"!==t.css("position")){var e=s(this),n=e.offset().left-parseInt(e.css("marginLeft"),10),r=e.offset().top-parseInt(e.css("marginTop"),10),i=t.offset().left+parseInt(t.css("borderLeftWidth"),10),o=t.offset().top+parseInt(t.css("borderTopWidth"),10);return u=n-i,l=r-o,!1}}),{left:u,top:l}},String.prototype.startsWith=function(t){return null!==this.match("^"+t)},String.prototype.endsWith=function(t){return null!==this.match(t+"$")},s.simplePlaceholder={placeholder_class:null,hide_placeholder:function(){var t=s(this);t.val()===t.attr("placeholder")&&t.val("").removeClass(s.simplePlaceholder.placeholder_class)},show_placeholder:function(){var t=s(this);""===t.val()&&t.val(t.attr("placeholder")).addClass(s.simplePlaceholder.placeholder_class)},prevent_placeholder_submit:function(){return s(this).find(".simple-placeholder").each(function(){var t=s(this);t.val()===t.attr("placeholder")&&t.val("")}),!0}},s.fn.simplePlaceholder=function(t){var e;return void 0===document.createElement("input").placeholder&&(e={placeholder_class:"placeholding"},t&&s.extend(e,t),s.simplePlaceholder.placeholder_class=e.placeholder_class,this.each(function(){var t=s(this);t.focus(s.simplePlaceholder.hide_placeholder),t.blur(s.simplePlaceholder.show_placeholder),""===t.val()&&(t.val(t.attr("placeholder")),t.addClass(s.simplePlaceholder.placeholder_class)),t.addClass("simple-placeholder"),s(this.form).submit(s.simplePlaceholder.prevent_placeholder_submit)})),this},s.fn.findInclusive=function(t){return this.find("*").addBack().filter(t)},s.fn.slideIn=function(t,e,n){return this.animate({width:"show"},t,e,n)},s.fn.slideOut=function(t,e,n){return this.animate({width:"hide"},t,e,n)},s.expr[":"].Contains=function(t,e,n){return 0<=s(t).text().toUpperCase().indexOf(n[3].toUpperCase())},s.fn.scopedFind=function(t){return t.startsWith("#")?s(t):this.find(t)}}),define("pat-registry",["jquery","underscore","pat-logger","pat-utils","pat-compat","pat-jquery-ext"],function(o,a,u,r){for(var t,i=u.getLogger("registry"),e=/patterns-disable=([^&]+)/g,n=/patterns-dont-catch/g,l=!1,c={};null!==(t=e.exec(window.location.search));)c[t[1]]=!0,i.info("Pattern disabled via url config:",t[1]);for(;null!==(t=n.exec(window.location.search));)l=!0,i.info("I will not catch init exceptions");var s={patterns:{},initialized:!1,init:function(){o(document).ready(function(){i.info("loaded: "+Object.keys(s.patterns).sort().join(", ")),s.scan(document.body),s.initialized=!0,i.info("finished initial scan.")})},clear:function(){this.patterns={}},transformPattern:function(e,t){if(c[e])i.debug("Skipping disabled pattern:",e);else{var n=s.patterns[e];if(n.transform)try{n.transform(o(t))}catch(t){if(l)throw t;i.error("Transform error for pattern"+e,t)}}},initPattern:function(t,e,n){var r=o(e),i=s.patterns[t];if(i.init&&(plog=u.getLogger("pat."+t),r.is(i.trigger))){plog.debug("Initialising:",r);try{i.init(r,null,n),plog.debug("done.")}catch(t){if(l)throw t;plog.error("Caught error:",t)}}},orderPatterns:function(t){return a.contains(t,"validation")&&a.contains(t,"inject")&&(t.splice(t.indexOf("validation"),1),t.unshift("validation")),t},scan:function(t,n,r){var i=[];(n=this.orderPatterns(n||Object.keys(s.patterns))).forEach(a.partial(this.transformPattern,a,t)),n=a.each(n,function(t){var e=s.patterns[t];e.trigger&&i.unshift(e.trigger)}),o(t).findInclusive(i.join(",")).filter(function(){return 0===o(this).parents("pre").length}).filter(":not(.cant-touch-this)").toArray().reduceRight(function(t,e){n.forEach(a.partial(this.initPattern,a,e,r))}.bind(this),null),o("body").addClass("patterns-loaded")},register:function(t,e){var n;return(e=e||t.name)?s.patterns[e]?(i.error("Already have a pattern called: "+e),!1):((s.patterns[e]=t).jquery_plugin&&(n=("pat-"+e).replace(/-([a-zA-Z])/g,function(t,e){return e.toUpperCase()}),o.fn[n]=r.jqueryPlugin(t),o.fn[n.replace(/^pat/,"pattern")]=o.fn[n]),i.debug("Registered pattern:",e,t),s.initialized&&s.scan(document.body,[e]),!0):(i.error("Pattern lacks a name:",t),!1)}};return s}),define("pat-mockup-parser",["jquery"],function(a){"use strict";return{getOptions:function t(e,n,r){r=r||{},0===e.length||a.nodeName(e[0],"body")||(r=t(e.parent(),n,r));var i,o={};return 0!==e.length&&(o=e.data("pat-"+n))&&"string"==typeof o&&(i={},a.each(o.split(";"),function(t,e){(e=e.split(":")).reverse();var n=(n=e.pop()).replace(/^\s+|\s+$/g,"");e.reverse();var r=(r=e.join(":")).replace(/^\s+|\s+$/g,"");i[n]=r}),o=i),a.extend(!0,{},r,o)}}}),define("pat-base",["jquery","pat-registry","pat-mockup-parser","pat-logger"],function(i,a,u,l){"use strict";function o(t,e,n){var r=this.prototype.name,i=l.getLogger("pat."+r),o=t.data("pattern-"+r);if(void 0===o&&a.patterns[r]){try{e="mockup"===this.prototype.parser?u.getOptions(t,r,e):e,o=new a.patterns[r](t,e,n)}catch(t){i.error("Failed while initializing '"+r+"' pattern.",t)}t.data("pattern-"+r,o)}return o}function c(t,e,n){this.$el=t,this.options=i.extend(!0,{},this.defaults||{},e||{}),this.init(t,e,n),this.emit("init")}var s=l.getLogger("Patternslib Base");return c.prototype={constructor:c,on:function(t,e){this.$el.on(t+"."+this.name+".patterns",e)},emit:function(t,e){void 0===e&&(e=[]),this.$el.trigger(t+"."+this.name+".patterns",e)}},c.extend=function(t){var e,n=this;if(!t)throw new Error("Pattern configuration properties required when calling Base.extend");(e=t.hasOwnProperty("constructor")?t.constructor:function(){n.apply(this,arguments)}).extend=c.extend,e.init=o,e.jquery_plugin=!0,e.trigger=t.trigger;function r(){this.constructor=e}return r.prototype=n.prototype,e.prototype=new r,i.extend(!0,e.prototype,t),e.__super__=n.prototype,t.name?t.trigger?a.register(e,t.name):s.warn("The pattern '"+t.name+"' does not have a trigger attribute, it will not be registered."):s.warn("This pattern without a name attribute will not be registered!"),e},c}),window.jQuery&&define("jquery",[],function(){"use strict";return window.jQuery.ajaxPrefilter(function(t){t.crossDomain&&(t.contents.script=!1)}),window.jQuery}),require(["jquery","pat-registry","pat-base","pat-logger","pat-mockup-parser"],function(i,t){"use strict";window.parent!==window&&"IFRAME"!==window.frameElement.nodeName||i(document).ready(function(){i("body").addClass("pat-plone"),t.initialized||t.init()}),i(document).ready(function(){!0!=("selected"===i("#form-widgets-use_cookie_negotiation > input").value)?i("#formfield-form-widgets-authenticated_users_only").hide():i("#formfield-form-widgets-authenticated_users_only").show()}),i(document).ready(function(){function t(t){var e=i("#form-widgets-highpixeldensity_scales option:selected").attr("value"),n=i('div[data-fieldname="form.widgets.quality_2x"]'),r=i('div[data-fieldname="form.widgets.quality_3x"]');"disabled"==e?(n.fadeOut(),r.fadeOut()):"2x"==e?(n.fadeIn(),r.fadeOut()):"3x"==e&&(n.fadeIn(),r.fadeIn())}i("#ImagingSettings")&&(i('div[data-fieldname="form.widgets.quality_2x"]').hide(),i('div[data-fieldname="form.widgets.quality_3x"]').hide(),t(),i("#form-widgets-highpixeldensity_scales").change(t))})}),define("/home/vincentfretin/workspace/buildout.coredev-5.2/src/plone.staticresources/src/plone/staticresources/static/plone-base.js",function(){});
//# sourceMappingURL=plone-base-compiled.min.js.map
!function(n){"use strict";"function"==typeof define&&define.amd?define("datatables.net",["jquery"],function(t){return n(t,window,document)}):"object"==typeof exports?module.exports=function(t,e){return t=t||window,e=e||("undefined"!=typeof window?require("jquery"):require("jquery")(t)),n(e,t,t.document)}:n(jQuery,window,document)}(function(z,D,y,U){"use strict";function r(t){return!t||!0===t||"-"===t}function h(t){var e=parseInt(t,10);return!isNaN(e)&&isFinite(t)?e:null}function a(t,e){return n[e]||(n[e]=new RegExp(wt(e),"g")),"string"==typeof t&&"."!==e?t.replace(/\./g,"").replace(n[e],"."):t}function l(t,e,n){var o="string"==typeof t;return!!r(t)||(e&&o&&(t=a(t,e)),n&&o&&(t=t.replace(u,"")),!isNaN(parseFloat(t))&&isFinite(t))}function o(t,e,n){return!!r(t)||((r(o=t)||"string"==typeof o)&&!!l(f(t),e,n)||null);var o}function v(t,e,n,o){var r=[],a=0,l=e.length;if(o!==U)for(;a<l;a++)t[e[a]][n]&&r.push(t[e[a]][n][o]);else for(;a<l;a++)r.push(t[e[a]][n]);return r}function p(t,e){var n,o=[];e===U?(e=0,n=t):(n=e,e=t);for(var r=e;r<n;r++)o.push(r);return o}function x(t){for(var e=[],n=0,o=t.length;n<o;n++)t[n]&&e.push(t[n]);return e}var m,e,t,S=function(C){this.$=function(t,e){return this.api(!0).$(t,e)},this._=function(t,e){return this.api(!0).rows(t,e).data()},this.api=function(t){return new ge(t?re(this[m.iApiIndex]):this)},this.fnAddData=function(t,e){var n=this.api(!0),o=z.isArray(t)&&(z.isArray(t[0])||z.isPlainObject(t[0]))?n.rows.add(t):n.row.add(t);return e!==U&&!e||n.draw(),o.flatten().toArray()},this.fnAdjustColumnSizing=function(t){var e=this.api(!0).columns.adjust(),n=e.settings()[0],o=n.oScroll;t===U||t?e.draw(!1):""===o.sX&&""===o.sY||Wt(n)},this.fnClearTable=function(t){var e=this.api(!0).clear();t!==U&&!t||e.draw()},this.fnClose=function(t){this.api(!0).row(t).child.hide()},this.fnDeleteRow=function(t,e,n){var o=this.api(!0),r=o.rows(t),a=r.settings()[0],l=a.aoData[r[0][0]];return r.remove(),e&&e.call(this,a,l),n!==U&&!n||o.draw(),l},this.fnDestroy=function(t){this.api(!0).destroy(t)},this.fnDraw=function(t){this.api(!0).draw(t)},this.fnFilter=function(t,e,n,o,r,a){var l=this.api(!0);null===e||e===U?l.search(t,n,o,a):l.column(e).search(t,n,o,a),l.draw()},this.fnGetData=function(t,e){var n=this.api(!0);if(t===U)return n.data().toArray();var o=t.nodeName?t.nodeName.toLowerCase():"";return e!==U||"td"==o||"th"==o?n.cell(t,e).data():n.row(t).data()||null},this.fnGetNodes=function(t){var e=this.api(!0);return t!==U?e.row(t).node():e.rows().nodes().flatten().toArray()},this.fnGetPosition=function(t){var e=this.api(!0),n=t.nodeName.toUpperCase();if("TR"==n)return e.row(t).index();if("TD"!=n&&"TH"!=n)return null;var o=e.cell(t).index();return[o.row,o.columnVisible,o.column]},this.fnIsOpen=function(t){return this.api(!0).row(t).child.isShown()},this.fnOpen=function(t,e,n){return this.api(!0).row(t).child(e,n).show().child()[0]},this.fnPageChange=function(t,e){var n=this.api(!0).page(t);e!==U&&!e||n.draw(!1)},this.fnSetColumnVis=function(t,e,n){var o=this.api(!0).column(t).visible(e);n!==U&&!n||o.columns.adjust().draw()},this.fnSettings=function(){return re(this[m.iApiIndex])},this.fnSort=function(t){this.api(!0).order(t).draw()},this.fnSortListener=function(t,e,n){this.api(!0).order.listener(t,e,n)},this.fnUpdate=function(t,e,n,o,r){var a=this.api(!0);return n===U||null===n?a.row(e).data(t):a.cell(e,n).data(t),r!==U&&!r||a.columns.adjust(),o!==U&&!o||a.draw(),0},this.fnVersionCheck=m.fnVersionCheck;var _=this,T=C===U,F=this.length;for(var t in T&&(C={}),this.oApi=this.internal=m.internal,S.ext.internal)t&&(this[t]=Le(t));return this.each(function(){var a=1<F?ie({},C,!0):C,l=0,t=this.getAttribute("id"),i=!1,e=S.defaults,s=z(this);if("table"==this.nodeName.toLowerCase()){B(e),k(e.column),A(e,e,!0),A(e.column,e.column,!0),A(e,z.extend(a,s.data()));for(var n=S.settings,l=0,d=n.length;l<d;l++){var o=n[l];if(o.nTable==this||o.nTHead.parentNode==this||o.nTFoot&&o.nTFoot.parentNode==this){var r=a.bRetrieve!==U?a.bRetrieve:e.bRetrieve,c=a.bDestroy!==U?a.bDestroy:e.bDestroy;if(T||r)return o.oInstance;if(c){o.oInstance.fnDestroy();break}return void ae(o,0,"Cannot reinitialise DataTable",3)}if(o.sTableId==this.id){n.splice(l,1);break}}null!==t&&""!==t||(t="DataTables_Table_"+S.ext._unique++,this.id=t);var u=z.extend(!0,{},S.models.oSettings,{sDestroyWidth:s[0].style.width,sInstance:t,sTableId:t});u.nTable=this,u.oApi=_.internal,u.oInit=a,n.push(u),u.oInstance=1===_.length?_:s.dataTable(),B(a),a.oLanguage&&R(a.oLanguage),a.aLengthMenu&&!a.iDisplayLength&&(a.iDisplayLength=z.isArray(a.aLengthMenu[0])?a.aLengthMenu[0][0]:a.aLengthMenu[0]),a=ie(z.extend(!0,{},e),a),le(u.oFeatures,a,["bPaginate","bLengthChange","bFilter","bSort","bSortMulti","bInfo","bProcessing","bAutoWidth","bSortClasses","bServerSide","bDeferRender"]),le(u,a,["asStripeClasses","ajax","fnServerData","fnFormatNumber","sServerMethod","aaSorting","aaSortingFixed","aLengthMenu","sPaginationType","sAjaxSource","sAjaxDataProp","iStateDuration","sDom","bSortCellsTop","iTabIndex","fnStateLoadCallback","fnStateSaveCallback","renderer","searchDelay","rowId",["iCookieDuration","iStateDuration"],["oSearch","oPreviousSearch"],["aoSearchCols","aoPreSearchCols"],["iDisplayLength","_iDisplayLength"]]),le(u.oScroll,a,[["sScrollX","sX"],["sScrollXInner","sXInner"],["sScrollY","sY"],["bScrollCollapse","bCollapse"]]),le(u.oLanguage,a,"fnInfoCallback"),de(u,"aoDrawCallback",a.fnDrawCallback,"user"),de(u,"aoServerParams",a.fnServerParams,"user"),de(u,"aoStateSaveParams",a.fnStateSaveParams,"user"),de(u,"aoStateLoadParams",a.fnStateLoadParams,"user"),de(u,"aoStateLoaded",a.fnStateLoaded,"user"),de(u,"aoRowCallback",a.fnRowCallback,"user"),de(u,"aoRowCreatedCallback",a.fnCreatedRow,"user"),de(u,"aoHeaderCallback",a.fnHeaderCallback,"user"),de(u,"aoFooterCallback",a.fnFooterCallback,"user"),de(u,"aoInitComplete",a.fnInitComplete,"user"),de(u,"aoPreDrawCallback",a.fnPreDrawCallback,"user"),u.rowIdFn=J(a.rowId),N(u);var f,h=u.oClasses;z.extend(h,S.ext.classes,a.oClasses),s.addClass(h.sTable),u.iInitDisplayStart===U&&(u.iInitDisplayStart=a.iDisplayStart,u._iDisplayStart=a.iDisplayStart),null!==a.iDeferLoading&&(u.bDeferLoading=!0,f=z.isArray(a.iDeferLoading),u._iRecordsDisplay=f?a.iDeferLoading[0]:a.iDeferLoading,u._iRecordsTotal=f?a.iDeferLoading[1]:a.iDeferLoading);var p=u.oLanguage;z.extend(!0,p,a.oLanguage),p.sUrl&&(z.ajax({dataType:"json",url:p.sUrl,success:function(t){R(t),A(e.oLanguage,t),z.extend(!0,p,t),Bt(u)},error:function(){Bt(u)}}),i=!0),null===a.asStripeClasses&&(u.asStripeClasses=[h.sStripeOdd,h.sStripeEven]);var m=u.asStripeClasses,g=s.children("tbody").find("tr").eq(0);-1!==z.inArray(!0,z.map(m,function(t,e){return g.hasClass(t)}))&&(z("tbody tr",this).removeClass(m.join(" ")),u.asDestroyStripes=m.slice());var b,y,v=[],x=this.getElementsByTagName("thead");if(0!==x.length&&(dt(u.aoHeader,x[0]),v=ct(u)),null===a.aoColumns)for(b=[],l=0,d=v.length;l<d;l++)b.push(null);else b=a.aoColumns;for(l=0,d=b.length;l<d;l++)L(u,v?v[l]:null);j(u,a.aoColumnDefs,b,function(t,e){H(u,t,e)}),g.length&&(y=function(t,e){return null!==t.getAttribute("data-"+e)?e:null},z(g[0]).children("th, td").each(function(t,e){var n,o,r=u.aoColumns[t];r.mData===t&&(n=y(e,"sort")||y(e,"order"),o=y(e,"filter")||y(e,"search"),null===n&&null===o||(r.mData={_:t+".display",sort:null!==n?t+".@data-"+n:U,type:null!==n?t+".@data-"+n:U,filter:null!==o?t+".@data-"+o:U},H(u,t)))}));var I=u.oFeatures,w=function(){if(a.aaSorting===U){var t=u.aaSorting;for(l=0,d=t.length;l<d;l++)t[l][1]=u.aoColumns[l].asSorting[0]}te(u),I.bSort&&de(u,"aoDrawCallback",function(){var t,n;u.bSorted&&(t=Jt(u),n={},z.each(t,function(t,e){n[e.src]=e.dir}),ce(u,null,"order",[u,t,n]),Kt(u))}),de(u,"aoDrawCallback",function(){(u.bSorted||"ssp"===he(u)||I.bDeferRender)&&te(u)},"sc");var e=s.children("caption").each(function(){this._captionSide=z(this).css("caption-side")}),n=s.children("thead");0===n.length&&(n=z("<thead/>").appendTo(s)),u.nTHead=n[0];var o=s.children("tbody");0===o.length&&(o=z("<tbody/>").appendTo(s)),u.nTBody=o[0];var r=s.children("tfoot");if(0===r.length&&0<e.length&&(""!==u.oScroll.sX||""!==u.oScroll.sY)&&(r=z("<tfoot/>").appendTo(s)),0===r.length||0===r.children().length?s.addClass(h.sNoFooter):0<r.length&&(u.nTFoot=r[0],dt(u.aoFooter,u.nTFoot)),a.aaData)for(l=0;l<a.aaData.length;l++)E(u,a.aaData[l]);else!u.bDeferLoading&&"dom"!=he(u)||W(u,z(u.nTBody).children("tr"));u.aiDisplay=u.aiDisplayMaster.slice(),!(u.bInitialised=!0)===i&&Bt(u)};a.bStateSave?(I.bStateSave=!0,de(u,"aoDrawCallback",ne,"state_save"),oe(u,0,w)):w()}else ae(null,0,"Non-table node initialisation ("+this.nodeName+")",2)}),_=null,this},n={},i=/[\r\n]/g,s=/<.*?>/g,d=/^\d{2,4}[\.\/\-]\d{1,2}[\.\/\-]\d{1,2}([T ]{1}\d{1,2}[:\.]\d{2}([\.:]\d{2})?)?$/,c=new RegExp("(\\"+["/",".","*","+","?","|","(",")","[","]","{","}","\\","$","^","-"].join("|\\")+")","g"),u=/[',$£€¥%\u2009\u202F\u20BD\u20a9\u20BArfk]/gi,q=function(t,e,n){var o=[],r=0,a=t.length;if(n!==U)for(;r<a;r++)t[r]&&t[r][e]&&o.push(t[r][e][n]);else for(;r<a;r++)t[r]&&o.push(t[r][e]);return o},f=function(t){return t.replace(s,"")},g=function(t){if(function(t){if(t.length<2)return!0;for(var e=t.slice().sort(),n=e[0],o=1,r=e.length;o<r;o++){if(e[o]===n)return!1;n=e[o]}return!0}(t))return t.slice();var e,n,o,r=[],a=t.length,l=0;t:for(n=0;n<a;n++){for(e=t[n],o=0;o<l;o++)if(r[o]===e)continue t;r.push(e),l++}return r};function b(n){var o,r,a={};z.each(n,function(t,e){(o=t.match(/^([^A-Z]+?)([A-Z])/))&&-1!=="a aa ai ao as b fn i m o s ".indexOf(o[1]+" ")&&(r=t.replace(o[0],o[2].toLowerCase()),a[r]=t,"o"===o[1]&&b(n[t]))}),n._hungarianMap=a}function A(n,o,r){var a;n._hungarianMap||b(n),z.each(o,function(t,e){(a=n._hungarianMap[t])===U||!r&&o[a]!==U||("o"===a.charAt(0)?(o[a]||(o[a]={}),z.extend(!0,o[a],o[t]),A(n[a],o[a],r)):o[a]=o[t])})}function R(t){var e=S.defaults.oLanguage,n=t.sZeroRecords;!t.sEmptyTable&&n&&"No data available in table"===e.sEmptyTable&&le(t,t,"sZeroRecords","sEmptyTable"),!t.sLoadingRecords&&n&&"Loading..."===e.sLoadingRecords&&le(t,t,"sZeroRecords","sLoadingRecords"),t.sInfoThousands&&(t.sThousands=t.sInfoThousands);var o=t.sDecimal;o&&ke(o)}S.util={throttle:function(o,t){var r,a,l=t!==U?t:200;return function(){var t=this,e=+new Date,n=arguments;r&&e<r+l?(clearTimeout(a),a=setTimeout(function(){r=U,o.apply(t,n)},l)):(r=e,o.apply(t,n))}},escapeRegex:function(t){return t.replace(c,"\\$1")}};var I=function(t,e,n){t[e]!==U&&(t[n]=t[e])};function B(t){I(t,"ordering","bSort"),I(t,"orderMulti","bSortMulti"),I(t,"orderClasses","bSortClasses"),I(t,"orderCellsTop","bSortCellsTop"),I(t,"order","aaSorting"),I(t,"orderFixed","aaSortingFixed"),I(t,"paging","bPaginate"),I(t,"pagingType","sPaginationType"),I(t,"pageLength","iDisplayLength"),I(t,"searching","bFilter"),"boolean"==typeof t.sScrollX&&(t.sScrollX=t.sScrollX?"100%":""),"boolean"==typeof t.scrollX&&(t.scrollX=t.scrollX?"100%":"");var e=t.aoSearchCols;if(e)for(var n=0,o=e.length;n<o;n++)e[n]&&A(S.models.oSearch,e[n])}function k(t){I(t,"orderable","bSortable"),I(t,"orderData","aDataSort"),I(t,"orderSequence","asSorting"),I(t,"orderDataType","sortDataType");var e=t.aDataSort;"number"!=typeof e||z.isArray(e)||(t.aDataSort=[e])}function N(t){var e,n,o,r;S.__browser||(e={},S.__browser=e,r=(o=(n=z("<div/>").css({position:"fixed",top:0,left:-1*z(D).scrollLeft(),height:1,width:1,overflow:"hidden"}).append(z("<div/>").css({position:"absolute",top:1,left:1,width:100,overflow:"scroll"}).append(z("<div/>").css({width:"100%",height:10}))).appendTo("body")).children()).children(),e.barWidth=o[0].offsetWidth-o[0].clientWidth,e.bScrollOversize=100===r[0].offsetWidth&&100!==o[0].clientWidth,e.bScrollbarLeft=1!==Math.round(r.offset().left),e.bBounding=!!n[0].getBoundingClientRect().width,n.remove()),z.extend(t.oBrowser,S.__browser),t.oScroll.iBarWidth=S.__browser.barWidth}function w(t,e,n,o,r,a){var l,i=o,s=!1;for(n!==U&&(l=n,s=!0);i!==r;)t.hasOwnProperty(i)&&(l=s?e(l,t[i],i,t):t[i],s=!0,i+=a);return l}function L(t,e){var n=S.defaults.column,o=t.aoColumns.length,r=z.extend({},S.models.oColumn,n,{nTh:e||y.createElement("th"),sTitle:n.sTitle?n.sTitle:e?e.innerHTML:"",aDataSort:n.aDataSort?n.aDataSort:[o],mData:n.mData?n.mData:o,idx:o});t.aoColumns.push(r);var a=t.aoPreSearchCols;a[o]=z.extend({},S.models.oSearch,a[o]),H(t,o,z(e).data())}function H(t,e,n){var o,r=t.aoColumns[e],a=t.oClasses,l=z(r.nTh);r.sWidthOrig||(r.sWidthOrig=l.attr("width")||null,(o=(l.attr("style")||"").match(/width:\s*(\d+[pxem%]+)/))&&(r.sWidthOrig=o[1])),n!==U&&null!==n&&(k(n),A(S.defaults.column,n),n.mDataProp===U||n.mData||(n.mData=n.mDataProp),n.sType&&(r._sManualType=n.sType),n.className&&!n.sClass&&(n.sClass=n.className),n.sClass&&l.addClass(n.sClass),z.extend(r,n),le(r,n,"sWidth","sWidthOrig"),n.iDataSort!==U&&(r.aDataSort=[n.iDataSort]),le(r,n,"aDataSort"));function i(t){return"string"==typeof t&&-1!==t.indexOf("@")}var s=r.mData,d=J(s),c=r.mRender?J(r.mRender):null;r._bAttrSrc=z.isPlainObject(s)&&(i(s.sort)||i(s.type)||i(s.filter)),r._setter=null,r.fnGetData=function(t,e,n){var o=d(t,e,U,n);return c&&e?c(o,e,t,n):o},r.fnSetData=function(t,e,n){return Y(s)(t,e,n)},"number"!=typeof s&&(t._rowReadObject=!0),t.oFeatures.bSort||(r.bSortable=!1,l.addClass(a.sSortableNone));var u=-1!==z.inArray("asc",r.asSorting),f=-1!==z.inArray("desc",r.asSorting);r.bSortable&&(u||f)?u&&!f?(r.sSortingClass=a.sSortableAsc,r.sSortingClassJUI=a.sSortJUIAscAllowed):!u&&f?(r.sSortingClass=a.sSortableDesc,r.sSortingClassJUI=a.sSortJUIDescAllowed):(r.sSortingClass=a.sSortable,r.sSortingClassJUI=a.sSortJUI):(r.sSortingClass=a.sSortableNone,r.sSortingClassJUI="")}function X(t){if(!1!==t.oFeatures.bAutoWidth){var e=t.aoColumns;Ut(t);for(var n=0,o=e.length;n<o;n++)e[n].nTh.style.width=e[n].sWidth}var r=t.oScroll;""===r.sY&&""===r.sX||Wt(t),ce(t,null,"column-sizing",[t])}function V(t,e){var n=P(t,"bVisible");return"number"==typeof n[e]?n[e]:null}function C(t,e){var n=P(t,"bVisible"),o=z.inArray(e,n);return-1!==o?o:null}function O(t){var n=0;return z.each(t.aoColumns,function(t,e){e.bVisible&&"none"!==z(e.nTh).css("display")&&n++}),n}function P(t,n){var o=[];return z.map(t.aoColumns,function(t,e){t[n]&&o.push(e)}),o}function _(t){for(var e,n,o,r,a,l,i,s=t.aoColumns,d=t.aoData,c=S.ext.type.detect,u=0,f=s.length;u<f;u++)if(i=[],!(a=s[u]).sType&&a._sManualType)a.sType=a._sManualType;else if(!a.sType){for(e=0,n=c.length;e<n;e++){for(o=0,r=d.length;o<r&&(i[o]===U&&(i[o]=T(t,o,u,"type")),(l=c[e](i[o],t))||e===c.length-1)&&"html"!==l;o++);if(l){a.sType=l;break}}a.sType||(a.sType="string")}}function j(t,e,n,o){var r,a,l,i,s,d,c,u=t.aoColumns;if(e)for(r=e.length-1;0<=r;r--){var f=(c=e[r]).targets!==U?c.targets:c.aTargets;for(z.isArray(f)||(f=[f]),l=0,i=f.length;l<i;l++)if("number"==typeof f[l]&&0<=f[l]){for(;u.length<=f[l];)L(t);o(f[l],c)}else if("number"==typeof f[l]&&f[l]<0)o(u.length+f[l],c);else if("string"==typeof f[l])for(s=0,d=u.length;s<d;s++)"_all"!=f[l]&&!z(u[s].nTh).hasClass(f[l])||o(s,c)}if(n)for(r=0,a=n.length;r<a;r++)o(r,n[r])}function E(t,e,n,o){var r=t.aoData.length,a=z.extend(!0,{},S.models.oRow,{src:n?"dom":"data",idx:r});a._aData=e,t.aoData.push(a);for(var l=t.aoColumns,i=0,s=l.length;i<s;i++)l[i].sType=null;t.aiDisplayMaster.push(r);var d=t.rowIdFn(e);return d!==U&&(t.aIds[d]=a),!n&&t.oFeatures.bDeferRender||nt(t,r,n,o),r}function W(n,t){var o;return t instanceof z||(t=z(t)),t.map(function(t,e){return o=et(n,e),E(n,o.data,e,o.cells)})}function T(t,e,n,o){var r=t.iDraw,a=t.aoColumns[n],l=t.aoData[e]._aData,i=a.sDefaultContent,s=a.fnGetData(l,o,{settings:t,row:e,col:n});if(s===U)return t.iDrawError!=r&&null===i&&(ae(t,0,"Requested unknown parameter "+("function"==typeof a.mData?"{function}":"'"+a.mData+"'")+" for row "+e+", column "+n,4),t.iDrawError=r),i;if(s!==l&&null!==s||null===i||o===U){if("function"==typeof s)return s.call(l)}else s=i;return null===s&&"display"==o?"":s}function F(t,e,n,o){var r=t.aoColumns[n],a=t.aoData[e]._aData;r.fnSetData(a,o,{settings:t,row:e,col:n})}var M=/\[.*?\]$/,$=/\(\)$/;function G(t){return z.map(t.match(/(\\.|[^\.])+/g)||[""],function(t){return t.replace(/\\\./g,".")})}function J(r){if(z.isPlainObject(r)){var a={};return z.each(r,function(t,e){e&&(a[t]=J(e))}),function(t,e,n,o){var r=a[e]||a._;return r!==U?r(t,e,n,o):t}}if(null===r)return function(t){return t};if("function"==typeof r)return function(t,e,n,o){return r(t,e,n,o)};if("string"!=typeof r||-1===r.indexOf(".")&&-1===r.indexOf("[")&&-1===r.indexOf("("))return function(t,e){return t[r]};var h=function(t,e,n){var o,r,a,l;if(""!==n)for(var i=G(n),s=0,d=i.length;s<d;s++){if(o=i[s].match(M),r=i[s].match($),o){if(i[s]=i[s].replace(M,""),""!==i[s]&&(t=t[i[s]]),a=[],i.splice(0,s+1),l=i.join("."),z.isArray(t))for(var c=0,u=t.length;c<u;c++)a.push(h(t[c],e,l));var f=o[0].substring(1,o[0].length-1);t=""===f?a:a.join(f);break}if(r)i[s]=i[s].replace($,""),t=t[i[s]]();else{if(null===t||t[i[s]]===U)return U;t=t[i[s]]}}return t};return function(t,e){return h(t,e,r)}}function Y(o){if(z.isPlainObject(o))return Y(o._);if(null===o)return function(){};if("function"==typeof o)return function(t,e,n){o(t,"set",e,n)};if("string"!=typeof o||-1===o.indexOf(".")&&-1===o.indexOf("[")&&-1===o.indexOf("("))return function(t,e){t[o]=e};var p=function(t,e,n){for(var o,r,a,l,i,s=G(n),d=s[s.length-1],c=0,u=s.length-1;c<u;c++){if(r=s[c].match(M),a=s[c].match($),r){if(s[c]=s[c].replace(M,""),t[s[c]]=[],(o=s.slice()).splice(0,c+1),i=o.join("."),z.isArray(e))for(var f=0,h=e.length;f<h;f++)p(l={},e[f],i),t[s[c]].push(l);else t[s[c]]=e;return}a&&(s[c]=s[c].replace($,""),t=t[s[c]](e)),null!==t[s[c]]&&t[s[c]]!==U||(t[s[c]]={}),t=t[s[c]]}d.match($)?t=t[d.replace($,"")](e):t[d.replace(M,"")]=e};return function(t,e){return p(t,e,o)}}function K(t){return q(t.aoData,"_aData")}function Q(t){t.aoData.length=0,t.aiDisplayMaster.length=0,t.aiDisplay.length=0,t.aIds={}}function Z(t,e,n){for(var o=-1,r=0,a=t.length;r<a;r++)t[r]==e?o=r:t[r]>e&&t[r]--;-1!=o&&n===U&&t.splice(o,1)}function tt(n,o,t,e){function r(t,e){for(;t.childNodes.length;)t.removeChild(t.firstChild);t.innerHTML=T(n,o,e,"display")}var a,l,i=n.aoData[o];if("dom"!==t&&(t&&"auto"!==t||"dom"!==i.src)){var s=i.anCells;if(s)if(e!==U)r(s[e],e);else for(a=0,l=s.length;a<l;a++)r(s[a],a)}else i._aData=et(n,i,e,e===U?U:i._aData).data;i._aSortData=null,i._aFilterData=null;var d=n.aoColumns;if(e!==U)d[e].sType=null;else{for(a=0,l=d.length;a<l;a++)d[a].sType=null;ot(n,i)}}function et(t,e,n,r){var o,a,l,i=[],s=e.firstChild,d=0,c=t.aoColumns,u=t._rowReadObject;r=r!==U?r:u?{}:[];function f(t,e){var n,o;"string"!=typeof t||-1!==(n=t.indexOf("@"))&&(o=t.substring(n+1),Y(t)(r,e.getAttribute(o)))}function h(t){n!==U&&n!==d||(a=c[d],l=z.trim(t.innerHTML),a&&a._bAttrSrc?(Y(a.mData._)(r,l),f(a.mData.sort,t),f(a.mData.type,t),f(a.mData.filter,t)):u?(a._setter||(a._setter=Y(a.mData)),a._setter(r,l)):r[d]=l),d++}if(s)for(;s;)"TD"!=(o=s.nodeName.toUpperCase())&&"TH"!=o||(h(s),i.push(s)),s=s.nextSibling;else for(var p=0,m=(i=e.anCells).length;p<m;p++)h(i[p]);var g,b=e.firstChild?e:e.nTr;return!b||(g=b.getAttribute("id"))&&Y(t.rowId)(r,g),{data:r,cells:i}}function nt(t,e,n,o){var r,a,l,i,s,d=t.aoData[e],c=d._aData,u=[];if(null===d.nTr){for(r=n||y.createElement("tr"),d.nTr=r,d.anCells=u,r._DT_RowIndex=e,ot(t,d),i=0,s=t.aoColumns.length;i<s;i++)l=t.aoColumns[i],(a=n?o[i]:y.createElement(l.sCellType))._DT_CellIndex={row:e,column:i},u.push(a),n&&!l.mRender&&l.mData===i||z.isPlainObject(l.mData)&&l.mData._===i+".display"||(a.innerHTML=T(t,e,i,"display")),l.sClass&&(a.className+=" "+l.sClass),l.bVisible&&!n?r.appendChild(a):!l.bVisible&&n&&a.parentNode.removeChild(a),l.fnCreatedCell&&l.fnCreatedCell.call(t.oInstance,a,T(t,e,i),c,e,i);ce(t,"aoRowCreatedCallback",null,[r,c,e])}d.nTr.setAttribute("role","row")}function ot(t,e){var n,o,r=e.nTr,a=e._aData;r&&((n=t.rowIdFn(a))&&(r.id=n),a.DT_RowClass&&(o=a.DT_RowClass.split(" "),e.__rowc=e.__rowc?g(e.__rowc.concat(o)):o,z(r).removeClass(e.__rowc.join(" ")).addClass(a.DT_RowClass)),a.DT_RowAttr&&z(r).attr(a.DT_RowAttr),a.DT_RowData&&z(r).data(a.DT_RowData))}function rt(t){var e,n,o,r=t.nTHead,a=t.nTFoot,l=0===z("th, td",r).length,i=t.oClasses,s=t.aoColumns;for(l&&(n=z("<tr/>").appendTo(r)),c=0,u=s.length;c<u;c++)o=s[c],e=z(o.nTh).addClass(o.sClass),l&&e.appendTo(n),t.oFeatures.bSort&&(e.addClass(o.sSortingClass),!1!==o.bSortable&&(e.attr("tabindex",t.iTabIndex).attr("aria-controls",t.sTableId),Zt(t,o.nTh,c))),o.sTitle!=e[0].innerHTML&&e.html(o.sTitle),fe(t,"header")(t,e,o,i);if(l&&dt(t.aoHeader,r),z(r).find(">tr").attr("role","row"),z(r).find(">tr>th, >tr>td").addClass(i.sHeaderTH),z(a).find(">tr>th, >tr>td").addClass(i.sFooterTH),null!==a)for(var d=t.aoFooter[0],c=0,u=d.length;c<u;c++)(o=s[c]).nTf=d[c].cell,o.sClass&&z(o.nTf).addClass(o.sClass)}function at(t,e,n){var o,r,a,l,i,s,d,c,u,f=[],h=[],p=t.aoColumns.length;if(e){for(n===U&&(n=!1),o=0,r=e.length;o<r;o++){for(f[o]=e[o].slice(),f[o].nTr=e[o].nTr,a=p-1;0<=a;a--)t.aoColumns[a].bVisible||n||f[o].splice(a,1);h.push([])}for(o=0,r=f.length;o<r;o++){if(d=f[o].nTr)for(;s=d.firstChild;)d.removeChild(s);for(a=0,l=f[o].length;a<l;a++)if(u=c=1,h[o][a]===U){for(d.appendChild(f[o][a].cell),h[o][a]=1;f[o+c]!==U&&f[o][a].cell==f[o+c][a].cell;)h[o+c][a]=1,c++;for(;f[o][a+u]!==U&&f[o][a].cell==f[o][a+u].cell;){for(i=0;i<c;i++)h[o+i][a+u]=1;u++}z(f[o][a].cell).attr("rowspan",c).attr("colspan",u)}}}}function lt(t){var e=ce(t,"aoPreDrawCallback","preDraw",[t]);if(-1===z.inArray(!1,e)){var n=[],o=0,r=t.asStripeClasses,a=r.length,l=(t.aoOpenRows.length,t.oLanguage),i=t.iInitDisplayStart,s="ssp"==he(t),d=t.aiDisplay;t.bDrawing=!0,i!==U&&-1!==i&&(t._iDisplayStart=!s&&i>=t.fnRecordsDisplay()?0:i,t.iInitDisplayStart=-1);var c=t._iDisplayStart,u=t.fnDisplayEnd();if(t.bDeferLoading)t.bDeferLoading=!1,t.iDraw++,jt(t,!1);else if(s){if(!t.bDestroying&&!ft(t))return}else t.iDraw++;if(0!==d.length)for(var f=s?0:c,h=s?t.aoData.length:u,p=f;p<h;p++){var m=d[p],g=t.aoData[m];null===g.nTr&&nt(t,m);var b,y=g.nTr;0!==a&&(b=r[o%a],g._sRowStripe!=b&&(z(y).removeClass(g._sRowStripe).addClass(b),g._sRowStripe=b)),ce(t,"aoRowCallback",null,[y,g._aData,o,p]),n.push(y),o++}else{var v=l.sZeroRecords;1==t.iDraw&&"ajax"==he(t)?v=l.sLoadingRecords:l.sEmptyTable&&0===t.fnRecordsTotal()&&(v=l.sEmptyTable),n[0]=z("<tr/>",{class:a?r[0]:""}).append(z("<td />",{valign:"top",colSpan:O(t),class:t.oClasses.sRowEmpty}).html(v))[0]}ce(t,"aoHeaderCallback","header",[z(t.nTHead).children("tr")[0],K(t),c,u,d]),ce(t,"aoFooterCallback","footer",[z(t.nTFoot).children("tr")[0],K(t),c,u,d]);var x=z(t.nTBody);x.children().detach(),x.append(z(n)),ce(t,"aoDrawCallback","draw",[t]),t.bSorted=!1,t.bFiltered=!1,t.bDrawing=!1}else jt(t,!1)}function it(t,e){var n=t.oFeatures,o=n.bSort,r=n.bFilter;o&&Yt(t),r?bt(t,t.oPreviousSearch):t.aiDisplay=t.aiDisplayMaster.slice(),!0!==e&&(t._iDisplayStart=0),t._drawHold=e,lt(t),t._drawHold=!1}function st(t){var e=t.oClasses,n=z(t.nTable),o=z("<div/>").insertBefore(n),r=t.oFeatures,a=z("<div/>",{id:t.sTableId+"_wrapper",class:e.sWrapper+(t.nTFoot?"":" "+e.sNoFooter)});t.nHolding=o[0],t.nTableWrapper=a[0],t.nTableReinsertBefore=t.nTable.nextSibling;for(var l,i,s,d,c,u,f,h,p=t.sDom.split(""),m=0;m<p.length;m++){if(l=null,"<"==(i=p[m])){if(s=z("<div/>")[0],"'"==(d=p[m+1])||'"'==d){for(c="",u=2;p[m+u]!=d;)c+=p[m+u],u++;"H"==c?c=e.sJUIHeader:"F"==c&&(c=e.sJUIFooter),-1!=c.indexOf(".")?(f=c.split("."),s.id=f[0].substr(1,f[0].length-1),s.className=f[1]):"#"==c.charAt(0)?s.id=c.substr(1,c.length-1):s.className=c,m+=u}a.append(s),a=z(s)}else if(">"==i)a=a.parent();else if("l"==i&&r.bPaginate&&r.bLengthChange)l=Lt(t);else if("f"==i&&r.bFilter)l=gt(t);else if("r"==i&&r.bProcessing)l=Pt(t);else if("t"==i)l=Et(t);else if("i"==i&&r.bInfo)l=Dt(t);else if("p"==i&&r.bPaginate)l=Ht(t);else if(0!==S.ext.feature.length)for(var g=S.ext.feature,b=0,y=g.length;b<y;b++)if(i==g[b].cFeature){l=g[b].fnInit(t);break}l&&((h=t.aanFeatures)[i]||(h[i]=[]),h[i].push(l),a.append(l))}o.replaceWith(a),t.nHolding=null}function dt(t,e){var n,o,r,a,l,i,s,d,c,u,f=z(e).children("tr");for(t.splice(0,t.length),r=0,i=f.length;r<i;r++)t.push([]);for(r=0,i=f.length;r<i;r++)for(o=(n=f[r]).firstChild;o;){if("TD"==o.nodeName.toUpperCase()||"TH"==o.nodeName.toUpperCase())for(d=(d=+o.getAttribute("colspan"))&&0!==d&&1!==d?d:1,c=(c=+o.getAttribute("rowspan"))&&0!==c&&1!==c?c:1,s=function(t,e,n){for(var o=t[e];o[n];)n++;return n}(t,r,0),u=1===d,l=0;l<d;l++)for(a=0;a<c;a++)t[r+a][s+l]={cell:o,unique:u},t[r+a].nTr=n;o=o.nextSibling}}function ct(t,e,n){var o=[];n||(n=t.aoHeader,e&&dt(n=[],e));for(var r=0,a=n.length;r<a;r++)for(var l=0,i=n[r].length;l<i;l++)!n[r][l].unique||o[l]&&t.bSortCellsTop||(o[l]=n[r][l].cell);return o}function ut(r,t,e){var a,l,n;ce(r,"aoServerParams","serverParams",[t]),t&&z.isArray(t)&&(a={},l=/(.*?)\[\]$/,z.each(t,function(t,e){var n,o=e.name.match(l);o?(n=o[0],a[n]||(a[n]=[]),a[n].push(e.value)):a[e.name]=e.value}),t=a);function o(t){ce(r,null,"xhr",[r,t,r.jqXHR]),e(t)}var i,s=r.ajax,d=r.oInstance;z.isPlainObject(s)&&s.data&&(n=s.data,i=z.isFunction(n)?n(t,r):n,t=z.isFunction(n)&&i?i:z.extend(!0,t,i),delete s.data);var c={data:t,success:function(t){var e=t.error||t.sError;e&&ae(r,0,e),r.json=t,o(t)},dataType:"json",cache:!1,type:r.sServerMethod,error:function(t,e,n){var o=ce(r,null,"xhr",[r,null,r.jqXHR]);-1===z.inArray(!0,o)&&("parsererror"==e?ae(r,0,"Invalid JSON response",1):4===t.readyState&&ae(r,0,"Ajax error",7)),jt(r,!1)}};r.oAjaxData=t,ce(r,null,"preXhr",[r,t]),r.fnServerData?r.fnServerData.call(d,r.sAjaxSource,z.map(t,function(t,e){return{name:e,value:t}}),o,r):r.sAjaxSource||"string"==typeof s?r.jqXHR=z.ajax(z.extend(c,{url:s||r.sAjaxSource})):z.isFunction(s)?r.jqXHR=s.call(d,t,o,r):(r.jqXHR=z.ajax(z.extend(c,s)),s.data=n)}function ft(e){return!e.bAjaxDataGet||(e.iDraw++,jt(e,!0),ut(e,ht(e),function(t){pt(e,t)}),!1)}function ht(t){function n(t,e){c.push({name:t,value:e})}var e,o,r,a=t.aoColumns,l=a.length,i=t.oFeatures,s=t.oPreviousSearch,d=t.aoPreSearchCols,c=[],u=Jt(t),f=t._iDisplayStart,h=!1!==i.bPaginate?t._iDisplayLength:-1;n("sEcho",t.iDraw),n("iColumns",l),n("sColumns",q(a,"sName").join(",")),n("iDisplayStart",f),n("iDisplayLength",h);for(var p={draw:t.iDraw,columns:[],order:[],start:f,length:h,search:{value:s.sSearch,regex:s.bRegex}},m=0;m<l;m++)o=a[m],r=d[m],e="function"==typeof o.mData?"function":o.mData,p.columns.push({data:e,name:o.sName,searchable:o.bSearchable,orderable:o.bSortable,search:{value:r.sSearch,regex:r.bRegex}}),n("mDataProp_"+m,e),i.bFilter&&(n("sSearch_"+m,r.sSearch),n("bRegex_"+m,r.bRegex),n("bSearchable_"+m,o.bSearchable)),i.bSort&&n("bSortable_"+m,o.bSortable);i.bFilter&&(n("sSearch",s.sSearch),n("bRegex",s.bRegex)),i.bSort&&(z.each(u,function(t,e){p.order.push({column:e.col,dir:e.dir}),n("iSortCol_"+t,e.col),n("sSortDir_"+t,e.dir)}),n("iSortingCols",u.length));var g=S.ext.legacy.ajax;return null===g?t.sAjaxSource?c:p:g?c:p}function pt(t,n){function e(t,e){return n[t]!==U?n[t]:n[e]}var o=mt(t,n),r=e("sEcho","draw"),a=e("iTotalRecords","recordsTotal"),l=e("iTotalDisplayRecords","recordsFiltered");if(r){if(+r<t.iDraw)return;t.iDraw=+r}Q(t),t._iRecordsTotal=parseInt(a,10),t._iRecordsDisplay=parseInt(l,10);for(var i=0,s=o.length;i<s;i++)E(t,o[i]);t.aiDisplay=t.aiDisplayMaster.slice(),t.bAjaxDataGet=!1,lt(t),t._bInitComplete||kt(t,n),t.bAjaxDataGet=!0,jt(t,!1)}function mt(t,e){var n=z.isPlainObject(t.ajax)&&t.ajax.dataSrc!==U?t.ajax.dataSrc:t.sAjaxDataProp;return"data"===n?e.aaData||e[n]:""!==n?J(n)(e):e}function gt(n){function t(){l.f;var t=this.value?this.value:"";t!=a.sSearch&&(bt(n,{sSearch:t,bRegex:a.bRegex,bSmart:a.bSmart,bCaseInsensitive:a.bCaseInsensitive}),n._iDisplayStart=0,lt(n))}var e=n.oClasses,o=n.sTableId,r=n.oLanguage,a=n.oPreviousSearch,l=n.aanFeatures,i='<input type="search" class="'+e.sFilterInput+'"/>',s=(s=r.sSearch).match(/_INPUT_/)?s.replace("_INPUT_",i):s+i,d=z("<div/>",{id:l.f?null:o+"_filter",class:e.sFilter}).append(z("<label/>").append(s)),c=null!==n.searchDelay?n.searchDelay:"ssp"===he(n)?400:0,u=z("input",d).val(a.sSearch).attr("placeholder",r.sSearchPlaceholder).on("keyup.DT search.DT input.DT paste.DT cut.DT",c?qt(t,c):t).on("keypress.DT",function(t){if(13==t.keyCode)return!1}).attr("aria-controls",o);return z(n.nTable).on("search.dt.DT",function(t,e){if(n===e)try{u[0]!==y.activeElement&&u.val(a.sSearch)}catch(t){}}),d[0]}function bt(t,e,n){function o(t){a.sSearch=t.sSearch,a.bRegex=t.bRegex,a.bSmart=t.bSmart,a.bCaseInsensitive=t.bCaseInsensitive}function r(t){return t.bEscapeRegex!==U?!t.bEscapeRegex:t.bRegex}var a=t.oPreviousSearch,l=t.aoPreSearchCols;if(_(t),"ssp"!=he(t)){xt(t,e.sSearch,n,r(e),e.bSmart,e.bCaseInsensitive),o(e);for(var i=0;i<l.length;i++)vt(t,l[i].sSearch,i,r(l[i]),l[i].bSmart,l[i].bCaseInsensitive);yt(t)}else o(e);t.bFiltered=!0,ce(t,null,"search",[t])}function yt(t){for(var e,n,o=S.ext.search,r=t.aiDisplay,a=0,l=o.length;a<l;a++){for(var i=[],s=0,d=r.length;s<d;s++)n=r[s],e=t.aoData[n],o[a](t,e._aFilterData,n,e._aData,s)&&i.push(n);r.length=0,z.merge(r,i)}}function vt(t,e,n,o,r,a){if(""!==e){for(var l,i=[],s=t.aiDisplay,d=It(e,o,r,a),c=0;c<s.length;c++)l=t.aoData[s[c]]._aFilterData[n],d.test(l)&&i.push(s[c]);t.aiDisplay=i}}function xt(t,e,n,o,r,a){var l,i,s,d=It(e,o,r,a),c=t.oPreviousSearch.sSearch,u=t.aiDisplayMaster,f=[];if(0!==S.ext.search.length&&(n=!0),i=Tt(t),e.length<=0)t.aiDisplay=u.slice();else{for((i||n||c.length>e.length||0!==e.indexOf(c)||t.bSorted)&&(t.aiDisplay=u.slice()),l=t.aiDisplay,s=0;s<l.length;s++)d.test(t.aoData[l[s]]._sFilterRow)&&f.push(l[s]);t.aiDisplay=f}}function It(t,e,n,o){return t=e?t:wt(t),n&&(t="^(?=.*?"+z.map(t.match(/"[^"]+"|[^ ]+/g)||[""],function(t){var e;return'"'===t.charAt(0)&&(t=(e=t.match(/^"(.*)"$/))?e[1]:t),t.replace('"',"")}).join(")(?=.*?")+").*$"),new RegExp(t,o?"i":"")}var wt=S.util.escapeRegex,Ct=z("<div>")[0],_t=Ct.textContent!==U;function Tt(t){for(var e,n,o,r,a,l,i=t.aoColumns,s=S.ext.type.search,d=!1,c=0,u=t.aoData.length;c<u;c++)if(!(l=t.aoData[c])._aFilterData){for(r=[],n=0,o=i.length;n<o;n++)(e=i[n]).bSearchable?(a=T(t,c,n,"filter"),s[e.sType]&&(a=s[e.sType](a)),null===a&&(a=""),"string"!=typeof a&&a.toString&&(a=a.toString())):a="",a.indexOf&&-1!==a.indexOf("&")&&(Ct.innerHTML=a,a=_t?Ct.textContent:Ct.innerText),a.replace&&(a=a.replace(/[\r\n]/g,"")),r.push(a);l._aFilterData=r,l._sFilterRow=r.join("  "),d=!0}return d}function Ft(t){return{search:t.sSearch,smart:t.bSmart,regex:t.bRegex,caseInsensitive:t.bCaseInsensitive}}function St(t){return{sSearch:t.search,bSmart:t.smart,bRegex:t.regex,bCaseInsensitive:t.caseInsensitive}}function Dt(t){var e=t.sTableId,n=t.aanFeatures.i,o=z("<div/>",{class:t.oClasses.sInfo,id:n?null:e+"_info"});return n||(t.aoDrawCallback.push({fn:At,sName:"information"}),o.attr("role","status").attr("aria-live","polite"),z(t.nTable).attr("aria-describedby",e+"_info")),o[0]}function At(t){var e,n,o,r,a,l,i,s=t.aanFeatures.i;0!==s.length&&(e=t.oLanguage,n=t._iDisplayStart+1,o=t.fnDisplayEnd(),r=t.fnRecordsTotal(),l=(a=t.fnRecordsDisplay())?e.sInfo:e.sInfoEmpty,a!==r&&(l+=" "+e.sInfoFiltered),l=Rt(t,l+=e.sInfoPostFix),null!==(i=e.fnInfoCallback)&&(l=i.call(t.oInstance,t,n,o,r,a,l)),z(s).html(l))}function Rt(t,e){var n=t.fnFormatNumber,o=t._iDisplayStart+1,r=t._iDisplayLength,a=t.fnRecordsDisplay(),l=-1===r;return e.replace(/_START_/g,n.call(t,o)).replace(/_END_/g,n.call(t,t.fnDisplayEnd())).replace(/_MAX_/g,n.call(t,t.fnRecordsTotal())).replace(/_TOTAL_/g,n.call(t,a)).replace(/_PAGE_/g,n.call(t,l?1:Math.ceil(o/r))).replace(/_PAGES_/g,n.call(t,l?1:Math.ceil(a/r)))}function Bt(n){var o,t,e,r=n.iInitDisplayStart,a=n.aoColumns,l=n.oFeatures,i=n.bDeferLoading;if(n.bInitialised){for(st(n),rt(n),at(n,n.aoHeader),at(n,n.aoFooter),jt(n,!0),l.bAutoWidth&&Ut(n),o=0,t=a.length;o<t;o++)(e=a[o]).sWidth&&(e.nTh.style.width=Gt(e.sWidth));ce(n,null,"preInit",[n]),it(n);var s=he(n);"ssp"==s&&!i||("ajax"==s?ut(n,[],function(t){var e=mt(n,t);for(o=0;o<e.length;o++)E(n,e[o]);n.iInitDisplayStart=r,it(n),jt(n,!1),kt(n,t)}):(jt(n,!1),kt(n)))}else setTimeout(function(){Bt(n)},200)}function kt(t,e){t._bInitComplete=!0,(e||t.oInit.aaData)&&X(t),ce(t,null,"plugin-init",[t,e]),ce(t,"aoInitComplete","init",[t,e])}function Nt(t,e){var n=parseInt(e,10);t._iDisplayLength=n,ue(t),ce(t,null,"length",[t,n])}function Lt(o){for(var t=o.oClasses,e=o.sTableId,n=o.aLengthMenu,r=z.isArray(n[0]),a=r?n[0]:n,l=r?n[1]:n,i=z("<select/>",{name:e+"_length","aria-controls":e,class:t.sLengthSelect}),s=0,d=a.length;s<d;s++)i[0][s]=new Option("number"==typeof l[s]?o.fnFormatNumber(l[s]):l[s],a[s]);var c=z("<div><label/></div>").addClass(t.sLength);return o.aanFeatures.l||(c[0].id=e+"_length"),c.children().append(o.oLanguage.sLengthMenu.replace("_MENU_",i[0].outerHTML)),z("select",c).val(o._iDisplayLength).on("change.DT",function(t){Nt(o,z(this).val()),lt(o)}),z(o.nTable).on("length.dt.DT",function(t,e,n){o===e&&z("select",c).val(n)}),c[0]}function Ht(t){function c(t){lt(t)}var e=t.sPaginationType,u=S.ext.pager[e],f="function"==typeof u,n=z("<div/>").addClass(t.oClasses.sPaging+e)[0],h=t.aanFeatures;return f||u.fnInit(t,n,c),h.p||(n.id=t.sTableId+"_paginate",t.aoDrawCallback.push({fn:function(t){if(f)for(var e=t._iDisplayStart,n=t._iDisplayLength,o=t.fnRecordsDisplay(),r=-1===n,a=r?0:Math.ceil(e/n),l=r?1:Math.ceil(o/n),i=u(a,l),s=0,d=h.p.length;s<d;s++)fe(t,"pageButton")(t,h.p[s],s,i,a,l);else u.fnUpdate(t,c)},sName:"pagination"})),n}function Ot(t,e,n){var o=t._iDisplayStart,r=t._iDisplayLength,a=t.fnRecordsDisplay();0===a||-1===r?o=0:"number"==typeof e?a<(o=e*r)&&(o=0):"first"==e?o=0:"previous"==e?(o=0<=r?o-r:0)<0&&(o=0):"next"==e?o+r<a&&(o+=r):"last"==e?o=Math.floor((a-1)/r)*r:ae(t,0,"Unknown paging action: "+e,5);var l=t._iDisplayStart!==o;return t._iDisplayStart=o,l&&(ce(t,null,"page",[t]),n&&lt(t)),l}function Pt(t){return z("<div/>",{id:t.aanFeatures.r?null:t.sTableId+"_processing",class:t.oClasses.sProcessing}).html(t.oLanguage.sProcessing).insertBefore(t.nTable)[0]}function jt(t,e){t.oFeatures.bProcessing&&z(t.aanFeatures.r).css("display",e?"block":"none"),ce(t,null,"processing",[t,e])}function Et(t){var e=z(t.nTable);e.attr("role","grid");var n=t.oScroll;if(""===n.sX&&""===n.sY)return t.nTable;function o(t){return t?Gt(t):null}var r=n.sX,a=n.sY,l=t.oClasses,i=e.children("caption"),s=i.length?i[0]._captionSide:null,d=z(e[0].cloneNode(!1)),c=z(e[0].cloneNode(!1)),u=e.children("tfoot"),f="<div/>";u.length||(u=null);var h=z(f,{class:l.sScrollWrapper}).append(z(f,{class:l.sScrollHead}).css({overflow:"hidden",position:"relative",border:0,width:r?o(r):"100%"}).append(z(f,{class:l.sScrollHeadInner}).css({"box-sizing":"content-box",width:n.sXInner||"100%"}).append(d.removeAttr("id").css("margin-left",0).append("top"===s?i:null).append(e.children("thead"))))).append(z(f,{class:l.sScrollBody}).css({position:"relative",overflow:"auto",width:o(r)}).append(e));u&&h.append(z(f,{class:l.sScrollFoot}).css({overflow:"hidden",border:0,width:r?o(r):"100%"}).append(z(f,{class:l.sScrollFootInner}).append(c.removeAttr("id").css("margin-left",0).append("bottom"===s?i:null).append(e.children("tfoot")))));var p=h.children(),m=p[0],g=p[1],b=u?p[2]:null;return r&&z(g).on("scroll.DT",function(t){var e=this.scrollLeft;m.scrollLeft=e,u&&(b.scrollLeft=e)}),z(g).css(a&&n.bCollapse?"max-height":"height",a),t.nScrollHead=m,t.nScrollBody=g,t.nScrollFoot=b,t.aoDrawCallback.push({fn:Wt,sName:"scrolling"}),h[0]}function Wt(n){function t(t){var e=t.style;e.paddingTop="0",e.paddingBottom="0",e.borderTopWidth="0",e.borderBottomWidth="0",e.height=0}var e,o,r,a,l,i,s,d,c,u=n.oScroll,f=u.sX,h=u.sXInner,p=u.sY,m=u.iBarWidth,g=z(n.nScrollHead),b=g[0].style,y=g.children("div"),v=y[0].style,x=y.children("table"),I=n.nScrollBody,w=z(I),C=I.style,_=z(n.nScrollFoot).children("div"),T=_.children("table"),F=z(n.nTHead),S=z(n.nTable),D=S[0],A=D.style,R=n.nTFoot?z(n.nTFoot):null,B=n.oBrowser,k=B.bScrollOversize,N=q(n.aoColumns,"nTh"),L=[],H=[],O=[],P=[],j=I.scrollHeight>I.clientHeight;if(n.scrollBarVis!==j&&n.scrollBarVis!==U)return n.scrollBarVis=j,void X(n);n.scrollBarVis=j,S.children("thead, tfoot").remove(),R&&(i=R.clone().prependTo(S),o=R.find("tr"),a=i.find("tr")),l=F.clone().prependTo(S),e=F.find("tr"),r=l.find("tr"),l.find("th, td").removeAttr("tabindex"),f||(C.width="100%",g[0].style.width="100%"),z.each(ct(n,l),function(t,e){s=V(n,t),e.style.width=n.aoColumns[s].sWidth}),R&&Mt(function(t){t.style.width=""},a),c=S.outerWidth(),""===f?(A.width="100%",k&&(S.find("tbody").height()>I.offsetHeight||"scroll"==w.css("overflow-y"))&&(A.width=Gt(S.outerWidth()-m)),c=S.outerWidth()):""!==h&&(A.width=Gt(h),c=S.outerWidth()),Mt(t,r),Mt(function(t){O.push(t.innerHTML),L.push(Gt(z(t).css("width")))},r),Mt(function(t,e){-1!==z.inArray(t,N)&&(t.style.width=L[e])},e),z(r).height(0),R&&(Mt(t,a),Mt(function(t){P.push(t.innerHTML),H.push(Gt(z(t).css("width")))},a),Mt(function(t,e){t.style.width=H[e]},o),z(a).height(0)),Mt(function(t,e){t.innerHTML='<div class="dataTables_sizing" style="height:0;overflow:hidden;">'+O[e]+"</div>",t.style.width=L[e]},r),R&&Mt(function(t,e){t.innerHTML='<div class="dataTables_sizing" style="height:0;overflow:hidden;">'+P[e]+"</div>",t.style.width=H[e]},a),S.outerWidth()<c?(d=I.scrollHeight>I.offsetHeight||"scroll"==w.css("overflow-y")?c+m:c,k&&(I.scrollHeight>I.offsetHeight||"scroll"==w.css("overflow-y"))&&(A.width=Gt(d-m)),""!==f&&""===h||ae(n,1,"Possible column misalignment",6)):d="100%",C.width=Gt(d),b.width=Gt(d),R&&(n.nScrollFoot.style.width=Gt(d)),p||k&&(C.height=Gt(D.offsetHeight+m));var E=S.outerWidth();x[0].style.width=Gt(E),v.width=Gt(E);var W=S.height()>I.clientHeight||"scroll"==w.css("overflow-y"),M="padding"+(B.bScrollbarLeft?"Left":"Right");v[M]=W?m+"px":"0px",R&&(T[0].style.width=Gt(E),_[0].style.width=Gt(E),_[0].style[M]=W?m+"px":"0px"),S.children("colgroup").insertBefore(S.children("thead")),w.scroll(),!n.bSorted&&!n.bFiltered||n._drawHold||(I.scrollTop=0)}function Mt(t,e,n){for(var o,r,a=0,l=0,i=e.length;l<i;){for(o=e[l].firstChild,r=n?n[l].firstChild:null;o;)1===o.nodeType&&(n?t(o,r,a):t(o,a),a++),o=o.nextSibling,r=n?r.nextSibling:null;l++}}var zt=/<.*?>/g;function Ut(t){var e,n,o,r=t.nTable,a=t.aoColumns,l=t.oScroll,i=l.sY,s=l.sX,d=l.sXInner,c=a.length,u=P(t,"bVisible"),f=z("th",t.nTHead),h=r.getAttribute("width"),p=r.parentNode,m=!1,g=t.oBrowser,b=g.bScrollOversize,y=r.style.width;for(y&&-1!==y.indexOf("%")&&(h=y),_=0;_<u.length;_++)null!==(e=a[u[_]]).sWidth&&(e.sWidth=Xt(e.sWidthOrig,p),m=!0);if(b||!m&&!s&&!i&&c==O(t)&&c==f.length)for(_=0;_<c;_++){var v=V(t,_);null!==v&&(a[v].sWidth=Gt(f.eq(_).width()))}else{var x=z(r).clone().css("visibility","hidden").removeAttr("id");x.find("tbody tr").remove();var I=z("<tr/>").appendTo(x.find("tbody"));for(x.find("thead, tfoot").remove(),x.append(z(t.nTHead).clone()).append(z(t.nTFoot).clone()),x.find("tfoot th, tfoot td").css("width",""),f=ct(t,x.find("thead")[0]),_=0;_<u.length;_++)e=a[u[_]],f[_].style.width=null!==e.sWidthOrig&&""!==e.sWidthOrig?Gt(e.sWidthOrig):"",e.sWidthOrig&&s&&z(f[_]).append(z("<div/>").css({width:e.sWidthOrig,margin:0,padding:0,border:0,height:1}));if(t.aoData.length)for(_=0;_<u.length;_++)e=a[n=u[_]],z(Vt(t,n)).clone(!1).append(e.sContentPadding).appendTo(I);z("[name]",x).removeAttr("name");var w=z("<div/>").css(s||i?{position:"absolute",top:0,left:0,height:1,right:0,overflow:"hidden"}:{}).append(x).appendTo(p);s&&d?x.width(d):s?(x.css("width","auto"),x.removeAttr("width"),x.width()<p.clientWidth&&h&&x.width(p.clientWidth)):i?x.width(p.clientWidth):h&&x.width(h);for(var C=0,_=0;_<u.length;_++){var T=z(f[_]),F=T.outerWidth()-T.width(),S=g.bBounding?Math.ceil(f[_].getBoundingClientRect().width):T.outerWidth();C+=S,a[u[_]].sWidth=Gt(S-F)}r.style.width=Gt(C),w.remove()}h&&(r.style.width=Gt(h)),!h&&!s||t._reszEvt||(o=function(){z(D).on("resize.DT-"+t.sInstance,qt(function(){X(t)}))},b?setTimeout(o,1e3):o(),t._reszEvt=!0)}var qt=S.util.throttle;function Xt(t,e){if(!t)return 0;var n=z("<div/>").css("width",Gt(t)).appendTo(e||y.body),o=n[0].offsetWidth;return n.remove(),o}function Vt(t,e){var n=$t(t,e);if(n<0)return null;var o=t.aoData[n];return o.nTr?o.anCells[e]:z("<td/>").html(T(t,n,e,"display"))[0]}function $t(t,e){for(var n,o=-1,r=-1,a=0,l=t.aoData.length;a<l;a++)(n=(n=(n=T(t,a,e,"display")+"").replace(zt,"")).replace(/&nbsp;/g," ")).length>o&&(o=n.length,r=a);return r}function Gt(t){return null===t?"0px":"number"==typeof t?t<0?"0px":t+"px":t.match(/\d$/)?t+"px":t}function Jt(t){function e(t){t.length&&!z.isArray(t[0])?h.push(t):z.merge(h,t)}var n,o,r,a,l,i,s,d=[],c=t.aoColumns,u=t.aaSortingFixed,f=z.isPlainObject(u),h=[];for(z.isArray(u)&&e(u),f&&u.pre&&e(u.pre),e(t.aaSorting),f&&u.post&&e(u.post),n=0;n<h.length;n++)for(o=0,r=(a=c[s=h[n][0]].aDataSort).length;o<r;o++)i=c[l=a[o]].sType||"string",h[n]._idx===U&&(h[n]._idx=z.inArray(h[n][1],c[l].asSorting)),d.push({src:s,col:l,dir:h[n][1],index:h[n]._idx,type:i,formatter:S.ext.type.order[i+"-pre"]});return d}function Yt(t){var e,n,o,r,c,u=[],f=S.ext.type.order,h=t.aoData,a=(t.aoColumns,0),l=t.aiDisplayMaster;for(_(t),e=0,n=(c=Jt(t)).length;e<n;e++)(r=c[e]).formatter&&a++,ee(t,r.col);if("ssp"!=he(t)&&0!==c.length){for(e=0,o=l.length;e<o;e++)u[l[e]]=e;a===c.length?l.sort(function(t,e){for(var n,o,r,a,l=c.length,i=h[t]._aSortData,s=h[e]._aSortData,d=0;d<l;d++)if(0!=(r=(n=i[(a=c[d]).col])<(o=s[a.col])?-1:o<n?1:0))return"asc"===a.dir?r:-r;return(n=u[t])<(o=u[e])?-1:o<n?1:0}):l.sort(function(t,e){for(var n,o,r,a,l=c.length,i=h[t]._aSortData,s=h[e]._aSortData,d=0;d<l;d++)if(n=i[(a=c[d]).col],o=s[a.col],0!==(r=(f[a.type+"-"+a.dir]||f["string-"+a.dir])(n,o)))return r;return(n=u[t])<(o=u[e])?-1:o<n?1:0})}t.bSorted=!0}function Kt(t){for(var e,n=t.aoColumns,o=Jt(t),r=t.oLanguage.oAria,a=0,l=n.length;a<l;a++){var i=n[a],s=i.asSorting,d=i.sTitle.replace(/<.*?>/g,""),c=i.nTh;c.removeAttribute("aria-sort"),e=i.bSortable?d+("asc"===(0<o.length&&o[0].col==a?(c.setAttribute("aria-sort","asc"==o[0].dir?"ascending":"descending"),s[o[0].index+1]||s[0]):s[0])?r.sSortAscending:r.sSortDescending):d,c.setAttribute("aria-label",e)}}function Qt(t,e,n,o){function r(t,e){var n=t._idx;return n===U&&(n=z.inArray(t[1],d)),n+1<d.length?n+1:e?null:0}var a,l,i=t.aoColumns[e],s=t.aaSorting,d=i.asSorting;"number"==typeof s[0]&&(s=t.aaSorting=[s]),n&&t.oFeatures.bSortMulti?-1!==(l=z.inArray(e,q(s,"0")))?(null===(a=r(s[l],!0))&&1===s.length&&(a=0),null===a?s.splice(l,1):(s[l][1]=d[a],s[l]._idx=a)):(s.push([e,d[0],0]),s[s.length-1]._idx=0):s.length&&s[0][0]==e?(a=r(s[0]),s.length=1,s[0][1]=d[a],s[0]._idx=a):(s.length=0,s.push([e,d[0]]),s[0]._idx=0),it(t),"function"==typeof o&&o(t)}function Zt(e,t,n,o){var r=e.aoColumns[n];se(t,{},function(t){!1!==r.bSortable&&(e.oFeatures.bProcessing?(jt(e,!0),setTimeout(function(){Qt(e,n,t.shiftKey,o),"ssp"!==he(e)&&jt(e,!1)},0)):Qt(e,n,t.shiftKey,o))})}function te(t){var e,n,o,r=t.aLastSort,a=t.oClasses.sSortColumn,l=Jt(t),i=t.oFeatures;if(i.bSort&&i.bSortClasses){for(e=0,n=r.length;e<n;e++)o=r[e].src,z(q(t.aoData,"anCells",o)).removeClass(a+(e<2?e+1:3));for(e=0,n=l.length;e<n;e++)o=l[e].src,z(q(t.aoData,"anCells",o)).addClass(a+(e<2?e+1:3))}t.aLastSort=l}function ee(t,e){var n,o,r,a=t.aoColumns[e],l=S.ext.order[a.sSortDataType];l&&(n=l.call(t.oInstance,t,e,C(t,e)));for(var i=S.ext.type.order[a.sType+"-pre"],s=0,d=t.aoData.length;s<d;s++)(o=t.aoData[s])._aSortData||(o._aSortData=[]),o._aSortData[e]&&!l||(r=l?n[s]:T(t,s,e,"sort"),o._aSortData[e]=i?i(r):r)}function ne(n){var t;n.oFeatures.bStateSave&&!n.bDestroying&&(t={time:+new Date,start:n._iDisplayStart,length:n._iDisplayLength,order:z.extend(!0,[],n.aaSorting),search:Ft(n.oPreviousSearch),columns:z.map(n.aoColumns,function(t,e){return{visible:t.bVisible,search:Ft(n.aoPreSearchCols[e])}})},ce(n,"aoStateSaveParams","stateSaveParams",[n,t]),n.oSavedState=t,n.fnStateSaveCallback.call(n.oInstance,n,t))}function oe(r,t,a){function e(t){if(t&&t.time){var e=ce(r,"aoStateLoadParams","stateLoadParams",[r,t]);if(-1===z.inArray(!1,e)){var n=r.iStateDuration;if(0<n&&t.time<new Date-1e3*n)a();else if(t.columns&&s.length!==t.columns.length)a();else{if(r.oLoadedState=z.extend(!0,{},t),t.start!==U&&(r._iDisplayStart=t.start,r.iInitDisplayStart=t.start),t.length!==U&&(r._iDisplayLength=t.length),t.order!==U&&(r.aaSorting=[],z.each(t.order,function(t,e){r.aaSorting.push(e[0]>=s.length?[0,e[1]]:e)})),t.search!==U&&z.extend(r.oPreviousSearch,St(t.search)),t.columns)for(l=0,i=t.columns.length;l<i;l++){var o=t.columns[l];o.visible!==U&&(s[l].bVisible=o.visible),o.search!==U&&z.extend(r.aoPreSearchCols[l],St(o.search))}ce(r,"aoStateLoaded","stateLoaded",[r,t]),a()}}else a()}else a()}var l,i,n,s=r.aoColumns;r.oFeatures.bStateSave?(n=r.fnStateLoadCallback.call(r.oInstance,r,e))!==U&&e(n):a()}function re(t){var e=S.settings,n=z.inArray(t,q(e,"nTable"));return-1!==n?e[n]:null}function ae(t,e,n,o){if(n="DataTables warning: "+(t?"table id="+t.sTableId+" - ":"")+n,o&&(n+=". For more information about this error, please see http://datatables.net/tn/"+o),e)D.console&&console.log&&console.log(n);else{var r=S.ext,a=r.sErrMode||r.errMode;if(t&&ce(t,null,"error",[t,o,n]),"alert"==a)alert(n);else{if("throw"==a)throw new Error(n);"function"==typeof a&&a(t,o,n)}}}function le(n,o,t,e){z.isArray(t)?z.each(t,function(t,e){z.isArray(e)?le(n,o,e[0],e[1]):le(n,o,e)}):(e===U&&(e=t),o[t]!==U&&(n[e]=o[t]))}function ie(t,e,n){var o;for(var r in e)e.hasOwnProperty(r)&&(o=e[r],z.isPlainObject(o)?(z.isPlainObject(t[r])||(t[r]={}),z.extend(!0,t[r],o)):n&&"data"!==r&&"aaData"!==r&&z.isArray(o)?t[r]=o.slice():t[r]=o);return t}function se(e,t,n){z(e).on("click.DT",t,function(t){e.blur(),n(t)}).on("keypress.DT",t,function(t){13===t.which&&(t.preventDefault(),n(t))}).on("selectstart.DT",function(){return!1})}function de(t,e,n,o){n&&t[e].push({fn:n,sName:o})}function ce(n,t,e,o){var r,a=[];return t&&(a=z.map(n[t].slice().reverse(),function(t,e){return t.fn.apply(n.oInstance,o)})),null!==e&&(r=z.Event(e+".dt"),z(n.nTable).trigger(r,o),a.push(r.result)),a}function ue(t){var e=t._iDisplayStart,n=t.fnDisplayEnd(),o=t._iDisplayLength;n<=e&&(e=n-o),e-=e%o,(-1===o||e<0)&&(e=0),t._iDisplayStart=e}function fe(t,e){var n=t.renderer,o=S.ext.renderer[e];return z.isPlainObject(n)&&n[e]?o[n[e]]||o._:"string"==typeof n&&o[n]||o._}function he(t){return t.oFeatures.bServerSide?"ssp":t.ajax||t.sAjaxSource?"ajax":"dom"}var pe=[],me=Array.prototype,ge=function(t,e){if(!(this instanceof ge))return new ge(t,e);function n(t){var e,n,o,r,a,l=(e=t,r=S.settings,a=z.map(r,function(t,e){return t.nTable}),e?e.nTable&&e.oApi?[e]:e.nodeName&&"table"===e.nodeName.toLowerCase()?-1!==(n=z.inArray(e,a))?[r[n]]:null:e&&"function"==typeof e.settings?e.settings().toArray():("string"==typeof e?o=z(e):e instanceof z&&(o=e),o?o.map(function(t){return-1!==(n=z.inArray(this,a))?r[n]:null}).toArray():void 0):[]);l&&(i=i.concat(l))}var i=[];if(z.isArray(t))for(var o=0,r=t.length;o<r;o++)n(t[o]);else n(t);this.context=g(i),e&&z.merge(this,e),this.selector={rows:null,cols:null,opts:null},ge.extend(this,this,pe)};S.Api=ge,z.extend(ge.prototype,{any:function(){return 0!==this.count()},concat:me.concat,context:[],count:function(){return this.flatten().length},each:function(t){for(var e=0,n=this.length;e<n;e++)t.call(this,this[e],e,this);return this},eq:function(t){var e=this.context;return e.length>t?new ge(e[t],this[t]):null},filter:function(t){var e=[];if(me.filter)e=me.filter.call(this,t,this);else for(var n=0,o=this.length;n<o;n++)t.call(this,this[n],n,this)&&e.push(this[n]);return new ge(this.context,e)},flatten:function(){var t=[];return new ge(this.context,t.concat.apply(t,this.toArray()))},join:me.join,indexOf:me.indexOf||function(t,e){for(var n=e||0,o=this.length;n<o;n++)if(this[n]===t)return n;return-1},iterator:function(t,e,n,o){var r,a,l,i,s,d,c,u,f=[],h=this.context,p=this.selector;for("string"==typeof t&&(o=n,n=e,e=t,t=!1),a=0,l=h.length;a<l;a++){var m=new ge(h[a]);if("table"===e)(r=n.call(m,h[a],a))!==U&&f.push(r);else if("columns"===e||"rows"===e)(r=n.call(m,h[a],this[a],a))!==U&&f.push(r);else if("column"===e||"column-rows"===e||"row"===e||"cell"===e)for(c=this[a],"column-rows"===e&&(d=Ie(h[a],p.opts)),i=0,s=c.length;i<s;i++)u=c[i],(r="cell"===e?n.call(m,h[a],u.row,u.column,a,i):n.call(m,h[a],u,a,i,d))!==U&&f.push(r)}if(f.length||o){var g=new ge(h,t?f.concat.apply([],f):f),b=g.selector;return b.rows=p.rows,b.cols=p.cols,b.opts=p.opts,g}return this},lastIndexOf:me.lastIndexOf||function(t,e){return this.indexOf.apply(this.toArray.reverse(),arguments)},length:0,map:function(t){var e=[];if(me.map)e=me.map.call(this,t,this);else for(var n=0,o=this.length;n<o;n++)e.push(t.call(this,this[n],n));return new ge(this.context,e)},pluck:function(e){return this.map(function(t){return t[e]})},pop:me.pop,push:me.push,reduce:me.reduce||function(t,e){return w(this,t,e,0,this.length,1)},reduceRight:me.reduceRight||function(t,e){return w(this,t,e,this.length-1,-1,-1)},reverse:me.reverse,selector:null,shift:me.shift,slice:function(){return new ge(this.context,this)},sort:me.sort,splice:me.splice,toArray:function(){return me.slice.call(this)},to$:function(){return z(this)},toJQuery:function(){return z(this)},unique:function(){return new ge(this.context,g(this))},unshift:me.unshift}),ge.extend=function(t,e,n){if(n.length&&e&&(e instanceof ge||e.__dt_wrapper))for(var o,r=0,a=n.length;r<a;r++)e[(o=n[r]).name]="function"==typeof o.val?function(e,n,o){return function(){var t=n.apply(e,arguments);return ge.extend(t,t,o.methodExt),t}}(t,o.val,o):z.isPlainObject(o.val)?{}:o.val,e[o.name].__dt_wrapper=!0,ge.extend(t,e[o.name],o.propExt)},ge.register=e=function(t,e){if(z.isArray(t))for(var n=0,o=t.length;n<o;n++)ge.register(t[n],e);else for(var r,a,l=t.split("."),i=pe,s=0,d=l.length;s<d;s++){var c=function(t,e){for(var n=0,o=t.length;n<o;n++)if(t[n].name===e)return t[n];return null}(i,r=(a=-1!==l[s].indexOf("()"))?l[s].replace("()",""):l[s]);c||(c={name:r,val:{},methodExt:[],propExt:[]},i.push(c)),s===d-1?c.val=e:i=a?c.methodExt:c.propExt}},ge.registerPlural=t=function(t,e,n){ge.register(t,n),ge.register(e,function(){var t=n.apply(this,arguments);return t===this?this:t instanceof ge?t.length?z.isArray(t[0])?new ge(t.context,t[0]):t[0]:U:t})};e("tables()",function(t){return t?new ge(function(t,n){if("number"==typeof t)return[n[t]];var o=z.map(n,function(t,e){return t.nTable});return z(o).filter(t).map(function(t){var e=z.inArray(this,o);return n[e]}).toArray()}(t,this.context)):this}),e("table()",function(t){var e=this.tables(t),n=e.context;return n.length?new ge(n[0]):e}),t("tables().nodes()","table().node()",function(){return this.iterator("table",function(t){return t.nTable},1)}),t("tables().body()","table().body()",function(){return this.iterator("table",function(t){return t.nTBody},1)}),t("tables().header()","table().header()",function(){return this.iterator("table",function(t){return t.nTHead},1)}),t("tables().footer()","table().footer()",function(){return this.iterator("table",function(t){return t.nTFoot},1)}),t("tables().containers()","table().container()",function(){return this.iterator("table",function(t){return t.nTableWrapper},1)}),e("draw()",function(e){return this.iterator("table",function(t){"page"===e?lt(t):("string"==typeof e&&(e="full-hold"!==e),it(t,!1===e))})}),e("page()",function(e){return e===U?this.page.info().page:this.iterator("table",function(t){Ot(t,e)})}),e("page.info()",function(t){if(0===this.context.length)return U;var e=this.context[0],n=e._iDisplayStart,o=e.oFeatures.bPaginate?e._iDisplayLength:-1,r=e.fnRecordsDisplay(),a=-1===o;return{page:a?0:Math.floor(n/o),pages:a?1:Math.ceil(r/o),start:n,end:e.fnDisplayEnd(),length:o,recordsTotal:e.fnRecordsTotal(),recordsDisplay:r,serverSide:"ssp"===he(e)}}),e("page.len()",function(e){return e===U?0!==this.context.length?this.context[0]._iDisplayLength:U:this.iterator("table",function(t){Nt(t,e)})});function be(r,a,t){var e,n;t&&(e=new ge(r)).one("draw",function(){t(e.ajax.json())}),"ssp"==he(r)?it(r,a):(jt(r,!0),(n=r.jqXHR)&&4!==n.readyState&&n.abort(),ut(r,[],function(t){Q(r);for(var e=mt(r,t),n=0,o=e.length;n<o;n++)E(r,e[n]);it(r,a),jt(r,!1)}))}e("ajax.json()",function(){var t=this.context;if(0<t.length)return t[0].json}),e("ajax.params()",function(){var t=this.context;if(0<t.length)return t[0].oAjaxData}),e("ajax.reload()",function(e,n){return this.iterator("table",function(t){be(t,!1===n,e)})}),e("ajax.url()",function(e){var t=this.context;return e===U?0===t.length?U:(t=t[0]).ajax?z.isPlainObject(t.ajax)?t.ajax.url:t.ajax:t.sAjaxSource:this.iterator("table",function(t){z.isPlainObject(t.ajax)?t.ajax.url=e:t.ajax=e})}),e("ajax.url().load()",function(e,n){return this.iterator("table",function(t){be(t,!1===n,e)})});function ye(t,e,n,o,r){var a,l,i,s,d,c,u=[],f=typeof e;for(e&&"string"!=f&&"function"!=f&&e.length!==U||(e=[e]),i=0,s=e.length;i<s;i++)for(d=0,c=(l=e[i]&&e[i].split&&!e[i].match(/[\[\(:]/)?e[i].split(","):[e[i]]).length;d<c;d++)(a=n("string"==typeof l[d]?z.trim(l[d]):l[d]))&&a.length&&(u=u.concat(a));var h=m.selector[t];if(h.length)for(i=0,s=h.length;i<s;i++)u=h[i](o,r,u);return g(u)}function ve(t){return(t=t||{}).filter&&t.search===U&&(t.search=t.filter),z.extend({search:"none",order:"current",page:"all"},t)}function xe(t){for(var e=0,n=t.length;e<n;e++)if(0<t[e].length)return t[0]=t[e],t[0].length=1,t.length=1,t.context=[t.context[e]],t;return t.length=0,t}var Ie=function(t,e){var n,o,r,a=[],l=t.aiDisplay,i=t.aiDisplayMaster,s=e.search,d=e.order,c=e.page;if("ssp"==he(t))return"removed"===s?[]:p(0,i.length);if("current"==c)for(n=t._iDisplayStart,o=t.fnDisplayEnd();n<o;n++)a.push(l[n]);else if("current"==d||"applied"==d)a="none"==s?i.slice():"applied"==s?l.slice():z.map(i,function(t,e){return-1===z.inArray(t,l)?t:null});else if("index"==d||"original"==d)for(n=0,o=t.aoData.length;n<o;n++)("none"==s||-1===(r=z.inArray(n,l))&&"removed"==s||0<=r&&"applied"==s)&&a.push(n);return a};e("rows()",function(e,n){e===U?e="":z.isPlainObject(e)&&(n=e,e=""),n=ve(n);var t=this.iterator("table",function(t){return ye("row",e,function(n){var t=h(n);if(null!==t&&!l)return[t];if(i=i||Ie(a,l),null!==t&&-1!==z.inArray(t,i))return[t];if(null===n||n===U||""===n)return i;if("function"==typeof n)return z.map(i,function(t){var e=a.aoData[t];return n(t,e._aData,e.nTr)?t:null});var e=x(v(a.aoData,i,"nTr"));if(n.nodeName){if(n._DT_RowIndex!==U)return[n._DT_RowIndex];if(n._DT_CellIndex)return[n._DT_CellIndex.row];var o=z(n).closest("*[data-dt-row]");return o.length?[o.data("dt-row")]:[]}if("string"==typeof n&&"#"===n.charAt(0)){var r=a.aIds[n.replace(/^#/,"")];if(r!==U)return[r.idx]}return z(e).filter(n).map(function(){return this._DT_RowIndex}).toArray()},a=t,l=n);var a,l,i},1);return t.selector.rows=e,t.selector.opts=n,t}),e("rows().nodes()",function(){return this.iterator("row",function(t,e){return t.aoData[e].nTr||U},1)}),e("rows().data()",function(){return this.iterator(!0,"rows",function(t,e){return v(t.aoData,e,"_aData")},1)}),t("rows().cache()","row().cache()",function(o){return this.iterator("row",function(t,e){var n=t.aoData[e];return"search"===o?n._aFilterData:n._aSortData},1)}),t("rows().invalidate()","row().invalidate()",function(n){return this.iterator("row",function(t,e){tt(t,e,n)})}),t("rows().indexes()","row().index()",function(){return this.iterator("row",function(t,e){return e},1)}),t("rows().ids()","row().id()",function(t){for(var e=[],n=this.context,o=0,r=n.length;o<r;o++)for(var a=0,l=this[o].length;a<l;a++){var i=n[o].rowIdFn(n[o].aoData[this[o][a]]._aData);e.push((!0===t?"#":"")+i)}return new ge(n,e)}),t("rows().remove()","row().remove()",function(){var f=this;return this.iterator("row",function(t,e,n){var o,r,a,l,i,s,d=t.aoData,c=d[e];for(d.splice(e,1),o=0,r=d.length;o<r;o++)if(s=(i=d[o]).anCells,null!==i.nTr&&(i.nTr._DT_RowIndex=o),null!==s)for(a=0,l=s.length;a<l;a++)s[a]._DT_CellIndex.row=o;Z(t.aiDisplayMaster,e),Z(t.aiDisplay,e),Z(f[n],e,!1),0<t._iRecordsDisplay&&t._iRecordsDisplay--,ue(t);var u=t.rowIdFn(c._aData);u!==U&&delete t.aIds[u]}),this.iterator("table",function(t){for(var e=0,n=t.aoData.length;e<n;e++)t.aoData[e].idx=e}),this}),e("rows.add()",function(a){var t=this.iterator("table",function(t){for(var e,n=[],o=0,r=a.length;o<r;o++)(e=a[o]).nodeName&&"TR"===e.nodeName.toUpperCase()?n.push(W(t,e)[0]):n.push(E(t,e));return n},1),e=this.rows(-1);return e.pop(),z.merge(e,t),e}),e("row()",function(t,e){return xe(this.rows(t,e))}),e("row().data()",function(t){var e=this.context;return t===U?e.length&&this.length?e[0].aoData[this[0]]._aData:U:(e[0].aoData[this[0]]._aData=t,tt(e[0],this[0],"data"),this)}),e("row().node()",function(){var t=this.context;return t.length&&this.length&&t[0].aoData[this[0]].nTr||null}),e("row.add()",function(e){e instanceof z&&e.length&&(e=e[0]);var t=this.iterator("table",function(t){return e.nodeName&&"TR"===e.nodeName.toUpperCase()?W(t,e)[0]:E(t,e)});return this.row(t[0])});function we(t,e){var n,o=t.context;!o.length||(n=o[0].aoData[e!==U?e:t[0]])&&n._details&&(n._details.remove(),n._detailsShow=U,n._details=U)}function Ce(t,e){var n,o=t.context;o.length&&t.length&&((n=o[0].aoData[t[0]])._details&&((n._detailsShow=e)?n._details.insertAfter(n.nTr):n._details.detach(),_e(o[0])))}var _e=function(s){var r=new ge(s),t=".dt.DT_details",e="draw"+t,n="column-visibility"+t,o="destroy"+t,d=s.aoData;r.off(e+" "+n+" "+o),0<q(d,"_details").length&&(r.on(e,function(t,e){s===e&&r.rows({page:"current"}).eq(0).each(function(t){var e=d[t];e._detailsShow&&e._details.insertAfter(e.nTr)})}),r.on(n,function(t,e,n,o){if(s===e)for(var r,a=O(e),l=0,i=d.length;l<i;l++)(r=d[l])._details&&r._details.children("td[colspan]").attr("colspan",a)}),r.on(o,function(t,e){if(s===e)for(var n=0,o=d.length;n<o;n++)d[n]._details&&we(r,n)}))},Te="row().child",Fe=Te+"()";e(Fe,function(t,e){var a,n,l,i,o=this.context;return t===U?o.length&&this.length?o[0].aoData[this[0]]._details:U:(!0===t?this.child.show():!1===t?we(this):o.length&&this.length&&(a=o[0],n=o[0].aoData[this[0]],l=[],(i=function(t,e){var n;if(z.isArray(t)||t instanceof z)for(var o=0,r=t.length;o<r;o++)i(t[o],e);else t.nodeName&&"tr"===t.nodeName.toLowerCase()?l.push(t):(n=z("<tr><td/></tr>").addClass(e),z("td",n).addClass(e).html(t)[0].colSpan=O(a),l.push(n[0]))})(t,e),n._details&&n._details.detach(),n._details=z(l),n._detailsShow&&n._details.insertAfter(n.nTr)),this)}),e([Te+".show()",Fe+".show()"],function(t){return Ce(this,!0),this}),e([Te+".hide()",Fe+".hide()"],function(){return Ce(this,!1),this}),e([Te+".remove()",Fe+".remove()"],function(){return we(this),this}),e(Te+".isShown()",function(){var t=this.context;return t.length&&this.length&&t[0].aoData[this[0]]._detailsShow||!1});function Se(t,e,n,o,r){for(var a=[],l=0,i=r.length;l<i;l++)a.push(T(t,r[l],e));return a}var De=/^([^:]+):(name|visIdx|visible)$/;e("columns()",function(n,o){n===U?n="":z.isPlainObject(n)&&(o=n,n=""),o=ve(o);var t=this.iterator("table",function(t){return e=n,d=o,c=(s=t).aoColumns,u=q(c,"sName"),f=q(c,"nTh"),ye("column",e,function(n){var t=h(n);if(""===n)return p(c.length);if(null!==t)return[0<=t?t:c.length+t];if("function"==typeof n){var o=Ie(s,d);return z.map(c,function(t,e){return n(e,Se(s,e,0,0,o),f[e])?e:null})}var r="string"==typeof n?n.match(De):"";if(r)switch(r[2]){case"visIdx":case"visible":var e=parseInt(r[1],10);if(e<0){var a=z.map(c,function(t,e){return t.bVisible?e:null});return[a[a.length+e]]}return[V(s,e)];case"name":return z.map(u,function(t,e){return t===r[1]?e:null});default:return[]}if(n.nodeName&&n._DT_CellIndex)return[n._DT_CellIndex.column];var l=z(f).filter(n).map(function(){return z.inArray(this,f)}).toArray();if(l.length||!n.nodeName)return l;var i=z(n).closest("*[data-dt-column]");return i.length?[i.data("dt-column")]:[]},s,d);var s,e,d,c,u,f},1);return t.selector.cols=n,t.selector.opts=o,t}),t("columns().header()","column().header()",function(t,e){return this.iterator("column",function(t,e){return t.aoColumns[e].nTh},1)}),t("columns().footer()","column().footer()",function(t,e){return this.iterator("column",function(t,e){return t.aoColumns[e].nTf},1)}),t("columns().data()","column().data()",function(){return this.iterator("column-rows",Se,1)}),t("columns().dataSrc()","column().dataSrc()",function(){return this.iterator("column",function(t,e){return t.aoColumns[e].mData},1)}),t("columns().cache()","column().cache()",function(a){return this.iterator("column-rows",function(t,e,n,o,r){return v(t.aoData,r,"search"===a?"_aFilterData":"_aSortData",e)},1)}),t("columns().nodes()","column().nodes()",function(){return this.iterator("column-rows",function(t,e,n,o,r){return v(t.aoData,r,"anCells",e)},1)}),t("columns().visible()","column().visible()",function(n,o){var t=this.iterator("column",function(t,e){return n===U?t.aoColumns[e].bVisible:void function(t,e,n){var o,r,a=t.aoColumns,l=a[e],i=t.aoData;if(n===U)return l.bVisible;if(l.bVisible!==n){if(n)for(var s=z.inArray(!0,q(a,"bVisible"),e+1),d=0,c=i.length;d<c;d++)r=i[d].nTr,o=i[d].anCells,r&&r.insertBefore(o[e],o[s]||null);else z(q(t.aoData,"anCells",e)).detach();l.bVisible=n,at(t,t.aoHeader),at(t,t.aoFooter),ne(t)}}(t,e,n)});return n!==U&&(this.iterator("column",function(t,e){ce(t,null,"column-visibility",[t,e,n,o])}),o!==U&&!o||this.columns.adjust()),t}),t("columns().indexes()","column().index()",function(n){return this.iterator("column",function(t,e){return"visible"===n?C(t,e):e},1)}),e("columns.adjust()",function(){return this.iterator("table",function(t){X(t)},1)}),e("column.index()",function(t,e){if(0!==this.context.length){var n=this.context[0];if("fromVisible"===t||"toData"===t)return V(n,e);if("fromData"===t||"toVisible"===t)return C(n,e)}}),e("column()",function(t,e){return xe(this.columns(t,e))});e("cells()",function(g,t,b){if(z.isPlainObject(g)&&(g.row===U?(b=g,g=null):(b=t,t=null)),z.isPlainObject(t)&&(b=t,t=null),null===t||t===U)return this.iterator("table",function(t){return o=t,e=g,n=ve(b),u=o.aoData,f=Ie(o,n),h=x(v(u,f,"anCells")),p=z([].concat.apply([],h)),m=o.aoColumns.length,ye("cell",e,function(t){var e="function"==typeof t;if(null===t||t===U||e){for(a=[],l=0,i=f.length;l<i;l++)for(r=f[l],s=0;s<m;s++)d={row:r,column:s},e?(c=u[r],t(d,T(o,r,s),c.anCells?c.anCells[s]:null)&&a.push(d)):a.push(d);return a}if(z.isPlainObject(t))return[t];var n=p.filter(t).map(function(t,e){return{row:e._DT_CellIndex.row,column:e._DT_CellIndex.column}}).toArray();return n.length||!t.nodeName?n:(c=z(t).closest("*[data-dt-row]")).length?[{row:c.data("dt-row"),column:c.data("dt-column")}]:[]},o,n);var o,e,n,r,a,l,i,s,d,c,u,f,h,p,m});var n,o,r,a,l,i=this.columns(t,b),s=this.rows(g,b),e=this.iterator("table",function(t,e){for(n=[],o=0,r=s[e].length;o<r;o++)for(a=0,l=i[e].length;a<l;a++)n.push({row:s[e][o],column:i[e][a]});return n},1);return z.extend(e.selector,{cols:t,rows:g,opts:b}),e}),t("cells().nodes()","cell().node()",function(){return this.iterator("cell",function(t,e,n){var o=t.aoData[e];return o&&o.anCells?o.anCells[n]:U},1)}),e("cells().data()",function(){return this.iterator("cell",function(t,e,n){return T(t,e,n)},1)}),t("cells().cache()","cell().cache()",function(o){return o="search"===o?"_aFilterData":"_aSortData",this.iterator("cell",function(t,e,n){return t.aoData[e][o][n]},1)}),t("cells().render()","cell().render()",function(o){return this.iterator("cell",function(t,e,n){return T(t,e,n,o)},1)}),t("cells().indexes()","cell().index()",function(){return this.iterator("cell",function(t,e,n){return{row:e,column:n,columnVisible:C(t,n)}},1)}),t("cells().invalidate()","cell().invalidate()",function(o){return this.iterator("cell",function(t,e,n){tt(t,e,o,n)})}),e("cell()",function(t,e,n){return xe(this.cells(t,e,n))}),e("cell().data()",function(t){var e=this.context,n=this[0];return t===U?e.length&&n.length?T(e[0],n[0].row,n[0].column):U:(F(e[0],n[0].row,n[0].column,t),tt(e[0],n[0].row,"data",n[0].column),this)}),e("order()",function(e,t){var n=this.context;return e===U?0!==n.length?n[0].aaSorting:U:("number"==typeof e?e=[[e,t]]:e.length&&!z.isArray(e[0])&&(e=Array.prototype.slice.call(arguments)),this.iterator("table",function(t){t.aaSorting=e.slice()}))}),e("order.listener()",function(e,n,o){return this.iterator("table",function(t){Zt(t,e,n,o)})}),e("order.fixed()",function(e){if(e)return this.iterator("table",function(t){t.aaSortingFixed=z.extend(!0,{},e)});var t=this.context,n=t.length?t[0].aaSortingFixed:U;return z.isArray(n)?{pre:n}:n}),e(["columns().order()","column().order()"],function(o){var r=this;return this.iterator("table",function(t,e){var n=[];z.each(r[e],function(t,e){n.push([e,o])}),t.aaSorting=n})}),e("search()",function(e,n,o,r){var t=this.context;return e===U?0!==t.length?t[0].oPreviousSearch.sSearch:U:this.iterator("table",function(t){t.oFeatures.bFilter&&bt(t,z.extend({},t.oPreviousSearch,{sSearch:e+"",bRegex:null!==n&&n,bSmart:null===o||o,bCaseInsensitive:null===r||r}),1)})}),t("columns().search()","column().search()",function(o,r,a,l){return this.iterator("column",function(t,e){var n=t.aoPreSearchCols;if(o===U)return n[e].sSearch;t.oFeatures.bFilter&&(z.extend(n[e],{sSearch:o+"",bRegex:null!==r&&r,bSmart:null===a||a,bCaseInsensitive:null===l||l}),bt(t,t.oPreviousSearch,1))})}),e("state()",function(){return this.context.length?this.context[0].oSavedState:null}),e("state.clear()",function(){return this.iterator("table",function(t){t.fnStateSaveCallback.call(t.oInstance,t,{})})}),e("state.loaded()",function(){return this.context.length?this.context[0].oLoadedState:null}),e("state.save()",function(){return this.iterator("table",function(t){ne(t)})}),S.versionCheck=S.fnVersionCheck=function(t){for(var e,n,o=S.version.split("."),r=t.split("."),a=0,l=r.length;a<l;a++)if((e=parseInt(o[a],10)||0)!==(n=parseInt(r[a],10)||0))return n<e;return!0},S.isDataTable=S.fnIsDataTable=function(t){var r=z(t).get(0),a=!1;return t instanceof S.Api||(z.each(S.settings,function(t,e){var n=e.nScrollHead?z("table",e.nScrollHead)[0]:null,o=e.nScrollFoot?z("table",e.nScrollFoot)[0]:null;e.nTable!==r&&n!==r&&o!==r||(a=!0)}),a)},S.tables=S.fnTables=function(e){var t=!1;z.isPlainObject(e)&&(t=e.api,e=e.visible);var n=z.map(S.settings,function(t){if(!e||e&&z(t.nTable).is(":visible"))return t.nTable});return t?new ge(n):n},S.camelToHungarian=A,e("$()",function(t,e){var n=this.rows(e).nodes(),o=z(n);return z([].concat(o.filter(t).toArray(),o.find(t).toArray()))}),z.each(["on","one","off"],function(t,n){e(n+"()",function(){var t=Array.prototype.slice.call(arguments);t[0]=z.map(t[0].split(/\s/),function(t){return t.match(/\.dt\b/)?t:t+".dt"}).join(" ");var e=z(this.tables().nodes());return e[n].apply(e,t),this})}),e("clear()",function(){return this.iterator("table",function(t){Q(t)})}),e("settings()",function(){return new ge(this.context,this.context)}),e("init()",function(){var t=this.context;return t.length?t[0].oInit:null}),e("data()",function(){return this.iterator("table",function(t){return q(t.aoData,"_aData")}).flatten()}),e("destroy()",function(p){return p=p||!1,this.iterator("table",function(e){var n,t=e.nTableWrapper.parentNode,o=e.oClasses,r=e.nTable,a=e.nTBody,l=e.nTHead,i=e.nTFoot,s=z(r),d=z(a),c=z(e.nTableWrapper),u=z.map(e.aoData,function(t){return t.nTr});e.bDestroying=!0,ce(e,"aoDestroyCallback","destroy",[e]),p||new ge(e).columns().visible(!0),c.off(".DT").find(":not(tbody *)").off(".DT"),z(D).off(".DT-"+e.sInstance),r!=l.parentNode&&(s.children("thead").detach(),s.append(l)),i&&r!=i.parentNode&&(s.children("tfoot").detach(),s.append(i)),e.aaSorting=[],e.aaSortingFixed=[],te(e),z(u).removeClass(e.asStripeClasses.join(" ")),z("th, td",l).removeClass(o.sSortable+" "+o.sSortableAsc+" "+o.sSortableDesc+" "+o.sSortableNone),d.children().detach(),d.append(u);var f=p?"remove":"detach";s[f](),c[f](),!p&&t&&(t.insertBefore(r,e.nTableReinsertBefore),s.css("width",e.sDestroyWidth).removeClass(o.sTable),(n=e.asDestroyStripes.length)&&d.children().each(function(t){z(this).addClass(e.asDestroyStripes[t%n])}));var h=z.inArray(e,S.settings);-1!==h&&S.settings.splice(h,1)})}),z.each(["column","row","cell"],function(t,s){e(s+"s().every()",function(a){var l=this.selector.opts,i=this;return this.iterator(s,function(t,e,n,o,r){a.call(i[s](e,"cell"===s?n:l,"cell"===s?l:U),e,n,o,r)})})}),e("i18n()",function(t,e,n){var o=this.context[0],r=J(t)(o.oLanguage);return r===U&&(r=e),n!==U&&z.isPlainObject(r)&&(r=r[n]!==U?r[n]:r._),r.replace("%d",n)}),S.version="1.10.16",S.settings=[],S.models={},S.models.oSearch={bCaseInsensitive:!0,sSearch:"",bRegex:!1,bSmart:!0},S.models.oRow={nTr:null,anCells:null,_aData:[],_aSortData:null,_aFilterData:null,_sFilterRow:null,_sRowStripe:"",src:null,idx:-1},S.models.oColumn={idx:null,aDataSort:null,asSorting:null,bSearchable:null,bSortable:null,bVisible:null,_sManualType:null,_bAttrSrc:!1,fnCreatedCell:null,fnGetData:null,fnSetData:null,mData:null,mRender:null,nTh:null,nTf:null,sClass:null,sContentPadding:null,sDefaultContent:null,sName:null,sSortDataType:"std",sSortingClass:null,sSortingClassJUI:null,sTitle:null,sType:null,sWidth:null,sWidthOrig:null},S.defaults={aaData:null,aaSorting:[[0,"asc"]],aaSortingFixed:[],ajax:null,aLengthMenu:[10,25,50,100],aoColumns:null,aoColumnDefs:null,aoSearchCols:[],asStripeClasses:null,bAutoWidth:!0,bDeferRender:!1,bDestroy:!1,bFilter:!0,bInfo:!0,bLengthChange:!0,bPaginate:!0,bProcessing:!1,bRetrieve:!1,bScrollCollapse:!1,bServerSide:!1,bSort:!0,bSortMulti:!0,bSortCellsTop:!1,bSortClasses:!0,bStateSave:!1,fnCreatedRow:null,fnDrawCallback:null,fnFooterCallback:null,fnFormatNumber:function(t){return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,this.oLanguage.sThousands)},fnHeaderCallback:null,fnInfoCallback:null,fnInitComplete:null,fnPreDrawCallback:null,fnRowCallback:null,fnServerData:null,fnServerParams:null,fnStateLoadCallback:function(t){try{return JSON.parse((-1===t.iStateDuration?sessionStorage:localStorage).getItem("DataTables_"+t.sInstance+"_"+location.pathname))}catch(t){}},fnStateLoadParams:null,fnStateLoaded:null,fnStateSaveCallback:function(t,e){try{(-1===t.iStateDuration?sessionStorage:localStorage).setItem("DataTables_"+t.sInstance+"_"+location.pathname,JSON.stringify(e))}catch(t){}},fnStateSaveParams:null,iStateDuration:7200,iDeferLoading:null,iDisplayLength:10,iDisplayStart:0,iTabIndex:0,oClasses:{},oLanguage:{oAria:{sSortAscending:": activate to sort column ascending",sSortDescending:": activate to sort column descending"},oPaginate:{sFirst:"First",sLast:"Last",sNext:"Next",sPrevious:"Previous"},sEmptyTable:"No data available in table",sInfo:"Showing _START_ to _END_ of _TOTAL_ entries",sInfoEmpty:"Showing 0 to 0 of 0 entries",sInfoFiltered:"(filtered from _MAX_ total entries)",sInfoPostFix:"",sDecimal:"",sThousands:",",sLengthMenu:"Show _MENU_ entries",sLoadingRecords:"Loading...",sProcessing:"Processing...",sSearch:"Search:",sSearchPlaceholder:"",sUrl:"",sZeroRecords:"No matching records found"},oSearch:z.extend({},S.models.oSearch),sAjaxDataProp:"data",sAjaxSource:null,sDom:"lfrtip",searchDelay:null,sPaginationType:"simple_numbers",sScrollX:"",sScrollXInner:"",sScrollY:"",sServerMethod:"GET",renderer:null,rowId:"DT_RowId"},b(S.defaults),S.defaults.column={aDataSort:null,iDataSort:-1,asSorting:["asc","desc"],bSearchable:!0,bSortable:!0,bVisible:!0,fnCreatedCell:null,mData:null,mRender:null,sCellType:"td",sClass:"",sContentPadding:"",sDefaultContent:null,sName:"",sSortDataType:"std",sTitle:null,sType:null,sWidth:null},b(S.defaults.column),S.models.oSettings={oFeatures:{bAutoWidth:null,bDeferRender:null,bFilter:null,bInfo:null,bLengthChange:null,bPaginate:null,bProcessing:null,bServerSide:null,bSort:null,bSortMulti:null,bSortClasses:null,bStateSave:null},oScroll:{bCollapse:null,iBarWidth:0,sX:null,sXInner:null,sY:null},oLanguage:{fnInfoCallback:null},oBrowser:{bScrollOversize:!1,bScrollbarLeft:!1,bBounding:!1,barWidth:0},ajax:null,aanFeatures:[],aoData:[],aiDisplay:[],aiDisplayMaster:[],aIds:{},aoColumns:[],aoHeader:[],aoFooter:[],oPreviousSearch:{},aoPreSearchCols:[],aaSorting:null,aaSortingFixed:[],asStripeClasses:null,asDestroyStripes:[],sDestroyWidth:0,aoRowCallback:[],aoHeaderCallback:[],aoFooterCallback:[],aoDrawCallback:[],aoRowCreatedCallback:[],aoPreDrawCallback:[],aoInitComplete:[],aoStateSaveParams:[],aoStateLoadParams:[],aoStateLoaded:[],sTableId:"",nTable:null,nTHead:null,nTFoot:null,nTBody:null,nTableWrapper:null,bDeferLoading:!1,bInitialised:!1,aoOpenRows:[],sDom:null,searchDelay:null,sPaginationType:"two_button",iStateDuration:0,aoStateSave:[],aoStateLoad:[],oSavedState:null,oLoadedState:null,sAjaxSource:null,sAjaxDataProp:null,bAjaxDataGet:!0,jqXHR:null,json:U,oAjaxData:U,fnServerData:null,aoServerParams:[],sServerMethod:null,fnFormatNumber:null,aLengthMenu:null,iDraw:0,bDrawing:!1,iDrawError:-1,_iDisplayLength:10,_iDisplayStart:0,_iRecordsTotal:0,_iRecordsDisplay:0,oClasses:{},bFiltered:!1,bSorted:!1,bSortCellsTop:null,oInit:null,aoDestroyCallback:[],fnRecordsTotal:function(){return"ssp"==he(this)?+this._iRecordsTotal:this.aiDisplayMaster.length},fnRecordsDisplay:function(){return"ssp"==he(this)?+this._iRecordsDisplay:this.aiDisplay.length},fnDisplayEnd:function(){var t=this._iDisplayLength,e=this._iDisplayStart,n=e+t,o=this.aiDisplay.length,r=this.oFeatures,a=r.bPaginate;return r.bServerSide?!1===a||-1===t?e+o:Math.min(e+t,this._iRecordsDisplay):!a||o<n||-1===t?o:n},oInstance:null,sInstance:null,iTabIndex:0,nScrollHead:null,nScrollFoot:null,aLastSort:[],oPlugins:{},rowIdFn:null,rowId:null},S.ext=m={buttons:{},classes:{},builder:"-source-",errMode:"alert",feature:[],search:[],selector:{cell:[],column:[],row:[]},internal:{},legacy:{ajax:null},pager:{},renderer:{pageButton:{},header:{}},order:{},type:{detect:[],search:{},order:{}},_unique:0,fnVersionCheck:S.fnVersionCheck,iApiIndex:0,oJUIClasses:{},sVersion:S.version},z.extend(m,{afnFiltering:m.search,aTypes:m.type.detect,ofnSearch:m.type.search,oSort:m.type.order,afnSortData:m.order,aoFeatures:m.feature,oApi:m.internal,oStdClasses:m.classes,oPagination:m.pager}),z.extend(S.ext.classes,{sTable:"dataTable",sNoFooter:"no-footer",sPageButton:"paginate_button",sPageButtonActive:"current",sPageButtonDisabled:"disabled",sStripeOdd:"odd",sStripeEven:"even",sRowEmpty:"dataTables_empty",sWrapper:"dataTables_wrapper",sFilter:"dataTables_filter",sInfo:"dataTables_info",sPaging:"dataTables_paginate paging_",sLength:"dataTables_length",sProcessing:"dataTables_processing",sSortAsc:"sorting_asc",sSortDesc:"sorting_desc",sSortable:"sorting",sSortableAsc:"sorting_asc_disabled",sSortableDesc:"sorting_desc_disabled",sSortableNone:"sorting_disabled",sSortColumn:"sorting_",sFilterInput:"",sLengthSelect:"",sScrollWrapper:"dataTables_scroll",sScrollHead:"dataTables_scrollHead",sScrollHeadInner:"dataTables_scrollHeadInner",sScrollBody:"dataTables_scrollBody",sScrollFoot:"dataTables_scrollFoot",sScrollFootInner:"dataTables_scrollFootInner",sHeaderTH:"",sFooterTH:"",sSortJUIAsc:"",sSortJUIDesc:"",sSortJUI:"",sSortJUIAscAllowed:"",sSortJUIDescAllowed:"",sSortJUIWrapper:"",sSortIcon:"",sJUIHeader:"",sJUIFooter:""});var Ae=S.ext.pager;function Re(t,e){var n=[],o=Ae.numbers_length,r=Math.floor(o/2);return e<=o?n=p(0,e):t<=r?((n=p(0,o-2)).push("ellipsis"),n.push(e-1)):(e-1-r<=t?(n=p(e-(o-2),e)).splice(0,0,"ellipsis"):((n=p(t-r+2,t+r-1)).push("ellipsis"),n.push(e-1),n.splice(0,0,"ellipsis")),n.splice(0,0,0)),n.DT_el="span",n}z.extend(Ae,{simple:function(t,e){return["previous","next"]},full:function(t,e){return["first","previous","next","last"]},numbers:function(t,e){return[Re(t,e)]},simple_numbers:function(t,e){return["previous",Re(t,e),"next"]},full_numbers:function(t,e){return["first","previous",Re(t,e),"next","last"]},first_last_numbers:function(t,e){return["first",Re(t,e),"last"]},_numbers:Re,numbers_length:7}),z.extend(!0,S.ext.renderer,{pageButton:{_:function(i,t,s,e,d,c){var u,f,n,h=i.oClasses,p=i.oLanguage.oPaginate,m=i.oLanguage.oAria.paginate||{},g=0,b=function(t,e){for(var n,o=function(t){Ot(i,t.data.action,!0)},r=0,a=e.length;r<a;r++)if(n=e[r],z.isArray(n)){var l=z("<"+(n.DT_el||"div")+"/>").appendTo(t);b(l,n)}else{switch(u=null,f="",n){case"ellipsis":t.append('<span class="ellipsis">&#x2026;</span>');break;case"first":u=p.sFirst,f=n+(0<d?"":" "+h.sPageButtonDisabled);break;case"previous":u=p.sPrevious,f=n+(0<d?"":" "+h.sPageButtonDisabled);break;case"next":u=p.sNext,f=n+(d<c-1?"":" "+h.sPageButtonDisabled);break;case"last":u=p.sLast,f=n+(d<c-1?"":" "+h.sPageButtonDisabled);break;default:u=n+1,f=d===n?h.sPageButtonActive:""}null!==u&&(se(z("<a>",{class:h.sPageButton+" "+f,"aria-controls":i.sTableId,"aria-label":m[n],"data-dt-idx":g,tabindex:i.iTabIndex,id:0===s&&"string"==typeof n?i.sTableId+"_"+n:null}).html(u).appendTo(t),{action:n},o),g++)}};try{n=z(t).find(y.activeElement).data("dt-idx")}catch(t){}b(z(t).empty(),e),n!==U&&z(t).find("[data-dt-idx="+n+"]").focus()}}}),z.extend(S.ext.type.detect,[function(t,e){var n=e.oLanguage.sDecimal;return l(t,n)?"num"+n:null},function(t,e){if(t&&!(t instanceof Date)&&!d.test(t))return null;var n=Date.parse(t);return null!==n&&!isNaN(n)||r(t)?"date":null},function(t,e){var n=e.oLanguage.sDecimal;return l(t,n,!0)?"num-fmt"+n:null},function(t,e){var n=e.oLanguage.sDecimal;return o(t,n)?"html-num"+n:null},function(t,e){var n=e.oLanguage.sDecimal;return o(t,n,!0)?"html-num-fmt"+n:null},function(t,e){return r(t)||"string"==typeof t&&-1!==t.indexOf("<")?"html":null}]),z.extend(S.ext.type.search,{html:function(t){return r(t)?t:"string"==typeof t?t.replace(i," ").replace(s,""):""},string:function(t){return!r(t)&&"string"==typeof t?t.replace(i," "):t}});var Be=function(t,e,n,o){return 0===t||t&&"-"!==t?(e&&(t=a(t,e)),t.replace&&(n&&(t=t.replace(n,"")),o&&(t=t.replace(o,""))),+t):-1/0};function ke(n){z.each({num:function(t){return Be(t,n)},"num-fmt":function(t){return Be(t,n,u)},"html-num":function(t){return Be(t,n,s)},"html-num-fmt":function(t){return Be(t,n,s,u)}},function(t,e){m.type.order[t+n+"-pre"]=e,t.match(/^html\-/)&&(m.type.search[t+n]=m.type.search.html)})}z.extend(m.type.order,{"date-pre":function(t){return Date.parse(t)||-1/0},"html-pre":function(t){return r(t)?"":t.replace?t.replace(/<.*?>/g,"").toLowerCase():t+""},"string-pre":function(t){return r(t)?"":"string"==typeof t?t.toLowerCase():t.toString?t.toString():""},"string-asc":function(t,e){return t<e?-1:e<t?1:0},"string-desc":function(t,e){return t<e?1:e<t?-1:0}}),ke(""),z.extend(!0,S.ext.renderer,{header:{_:function(a,l,i,s){z(a.nTable).on("order.dt.DT",function(t,e,n,o){var r;a===e&&(r=i.idx,l.removeClass(i.sSortingClass+" "+s.sSortAsc+" "+s.sSortDesc).addClass("asc"==o[r]?s.sSortAsc:"desc"==o[r]?s.sSortDesc:i.sSortingClass))})},jqueryui:function(a,l,i,s){z("<div/>").addClass(s.sSortJUIWrapper).append(l.contents()).append(z("<span/>").addClass(s.sSortIcon+" "+i.sSortingClassJUI)).appendTo(l),z(a.nTable).on("order.dt.DT",function(t,e,n,o){var r;a===e&&(r=i.idx,l.removeClass(s.sSortAsc+" "+s.sSortDesc).addClass("asc"==o[r]?s.sSortAsc:"desc"==o[r]?s.sSortDesc:i.sSortingClass),l.find("span."+s.sSortIcon).removeClass(s.sSortJUIAsc+" "+s.sSortJUIDesc+" "+s.sSortJUI+" "+s.sSortJUIAscAllowed+" "+s.sSortJUIDescAllowed).addClass("asc"==o[r]?s.sSortJUIAsc:"desc"==o[r]?s.sSortJUIDesc:i.sSortingClassJUI))})}}});function Ne(t){return"string"==typeof t?t.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"):t}function Le(e){return function(){var t=[re(this[S.ext.iApiIndex])].concat(Array.prototype.slice.call(arguments));return S.ext.internal[e].apply(this,t)}}return S.render={number:function(a,l,i,s,d){return{display:function(t){if("number"!=typeof t&&"string"!=typeof t)return t;var e=t<0?"-":"",n=parseFloat(t);if(isNaN(n))return Ne(t);n=n.toFixed(i),t=Math.abs(n);var o=parseInt(t,10),r=i?l+(t-o).toFixed(i).substring(2):"";return e+(s||"")+o.toString().replace(/\B(?=(\d{3})+(?!\d))/g,a)+r+(d||"")}}},text:function(){return{display:Ne}}},z.extend(S.ext.internal,{_fnExternApiFunc:Le,_fnBuildAjax:ut,_fnAjaxUpdate:ft,_fnAjaxParameters:ht,_fnAjaxUpdateDraw:pt,_fnAjaxDataSrc:mt,_fnAddColumn:L,_fnColumnOptions:H,_fnAdjustColumnSizing:X,_fnVisibleToColumnIndex:V,_fnColumnIndexToVisible:C,_fnVisbleColumns:O,_fnGetColumns:P,_fnColumnTypes:_,_fnApplyColumnDefs:j,_fnHungarianMap:b,_fnCamelToHungarian:A,_fnLanguageCompat:R,_fnBrowserDetect:N,_fnAddData:E,_fnAddTr:W,_fnNodeToDataIndex:function(t,e){return e._DT_RowIndex!==U?e._DT_RowIndex:null},_fnNodeToColumnIndex:function(t,e,n){return z.inArray(n,t.aoData[e].anCells)},_fnGetCellData:T,_fnSetCellData:F,_fnSplitObjNotation:G,_fnGetObjectDataFn:J,_fnSetObjectDataFn:Y,_fnGetDataMaster:K,_fnClearTable:Q,_fnDeleteIndex:Z,_fnInvalidate:tt,_fnGetRowElements:et,_fnCreateTr:nt,_fnBuildHead:rt,_fnDrawHead:at,_fnDraw:lt,_fnReDraw:it,_fnAddOptionsHtml:st,_fnDetectHeader:dt,_fnGetUniqueThs:ct,_fnFeatureHtmlFilter:gt,_fnFilterComplete:bt,_fnFilterCustom:yt,_fnFilterColumn:vt,_fnFilter:xt,_fnFilterCreateSearch:It,_fnEscapeRegex:wt,_fnFilterData:Tt,_fnFeatureHtmlInfo:Dt,_fnUpdateInfo:At,_fnInfoMacros:Rt,_fnInitialise:Bt,_fnInitComplete:kt,_fnLengthChange:Nt,_fnFeatureHtmlLength:Lt,_fnFeatureHtmlPaginate:Ht,_fnPageChange:Ot,_fnFeatureHtmlProcessing:Pt,_fnProcessingDisplay:jt,_fnFeatureHtmlTable:Et,_fnScrollDraw:Wt,_fnApplyToChildren:Mt,_fnCalculateColumnWidths:Ut,_fnThrottle:qt,_fnConvertToWidth:Xt,_fnGetWidestNode:Vt,_fnGetMaxLenString:$t,_fnStringToCss:Gt,_fnSortFlatten:Jt,_fnSort:Yt,_fnSortAria:Kt,_fnSortListener:Qt,_fnSortAttachListener:Zt,_fnSortingClasses:te,_fnSortData:ee,_fnSaveState:ne,_fnLoadState:oe,_fnSettingsFromNode:re,_fnLog:ae,_fnMap:le,_fnBindAction:se,_fnCallbackReg:de,_fnCallbackFire:ce,_fnLengthOverflow:ue,_fnRenderer:fe,_fnDataSource:he,_fnRowAttributes:ot,_fnCalculateEnd:function(){}}),((z.fn.dataTable=S).$=z).fn.dataTableSettings=S.settings,z.fn.dataTableExt=S.ext,z.fn.DataTable=function(t){return z(this).dataTable(t).api()},z.each(S,function(t,e){z.fn.DataTable[t]=e}),z.fn.dataTable}),function(n){"function"==typeof define&&define.amd?define("datatables.net-bs",["jquery","datatables.net"],function(t){return n(t,window,document)}):"object"==typeof exports?module.exports=function(t,e){return t=t||window,e&&e.fn.dataTable||(e=require("datatables.net")(t,e).$),n(e,0,t.document)}:n(jQuery,window,document)}(function(v,t,o,r){"use strict";var a=v.fn.dataTable;return v.extend(!0,a.defaults,{dom:"<'row'<'col-sm-6'l><'col-sm-6'f>><'row'<'col-sm-12'tr>><'row'<'col-sm-5'i><'col-sm-7'p>>",renderer:"bootstrap"}),v.extend(a.ext.classes,{sWrapper:"dataTables_wrapper form-inline dt-bootstrap",sFilterInput:"form-control input-sm",sLengthSelect:"form-control input-sm",sProcessing:"dataTables_processing panel panel-default"}),a.ext.renderer.pageButton.bootstrap=function(i,t,s,e,d,c){var u,f,n,h=new a.Api(i),p=i.oClasses,m=i.oLanguage.oPaginate,g=i.oLanguage.oAria.paginate||{},b=0,y=function(t,e){for(var n,o,r=function(t){t.preventDefault(),v(t.currentTarget).hasClass("disabled")||h.page()==t.data.action||h.page(t.data.action).draw("page")},a=0,l=e.length;a<l;a++)if(o=e[a],v.isArray(o))y(t,o);else{switch(f=u="",o){case"ellipsis":u="&#x2026;",f="disabled";break;case"first":u=m.sFirst,f=o+(0<d?"":" disabled");break;case"previous":u=m.sPrevious,f=o+(0<d?"":" disabled");break;case"next":u=m.sNext,f=o+(d<c-1?"":" disabled");break;case"last":u=m.sLast,f=o+(d<c-1?"":" disabled");break;default:u=o+1,f=d===o?"active":""}u&&(n=v("<li>",{class:p.sPageButton+" "+f,id:0===s&&"string"==typeof o?i.sTableId+"_"+o:null}).append(v("<a>",{href:"#","aria-controls":i.sTableId,"aria-label":g[o],"data-dt-idx":b,tabindex:i.iTabIndex}).html(u)).appendTo(t),i.oApi._fnBindAction(n,{action:o},r),b++)}};try{n=v(t).find(o.activeElement).data("dt-idx")}catch(t){}y(v(t).empty().html('<ul class="pagination"/>').children("ul"),e),n!==r&&v(t).find("[data-dt-idx="+n+"]").focus()},a}),function(n){"function"==typeof define&&define.amd?define("datatables.net-buttons",["jquery","datatables.net"],function(t){return n(t,window,document)}):"object"==typeof exports?module.exports=function(t,e){return t=t||window,e&&e.fn.dataTable||(e=require("datatables.net")(t,e).$),n(e,t,t.document)}:n(jQuery,window,document)}(function(p,i,a,c){var r,m=p.fn.dataTable,n=0,d=0,s=m.ext.buttons,u=function(t,e){void 0===e&&(e={}),!0===e&&(e={}),p.isArray(e)&&(e={buttons:e}),this.c=p.extend(!0,{},u.defaults,e),e.buttons&&(this.c.buttons=e.buttons),this.s={dt:new m.Api(t),buttons:[],listenKeys:"",namespace:"dtb"+n++},this.dom={container:p("<"+this.c.dom.container.tag+"/>").addClass(this.c.dom.container.className)},this._constructor()};p.extend(u.prototype,{action:function(t,e){var n=this._nodeToButton(t);return e===c?n.conf.action:(n.conf.action=e,this)},active:function(t,e){var n=this._nodeToButton(t),o=this.c.dom.button.active,n=p(n.node);return e===c?n.hasClass(o):(n.toggleClass(o,e===c||e),this)},add:function(t,e){var n=this.s.buttons;if("string"==typeof e){for(var o=e.split("-"),n=this.s,r=0,a=o.length-1;r<a;r++)n=n.buttons[+o[r]];n=n.buttons,e=+o[o.length-1]}return this._expandButton(n,t,!1,e),this._draw(),this},container:function(){return this.dom.container},disable:function(t){return t=this._nodeToButton(t),p(t.node).addClass(this.c.dom.button.disabled),this},destroy:function(){p("body").off("keyup."+this.s.namespace);for(var t=this.s.buttons.slice(),e=0,n=t.length;e<n;e++)this.remove(t[e].node);for(this.dom.container.remove(),e=0,n=(t=this.s.dt.settings()[0]).length;e<n;e++)if(t.inst===this){t.splice(e,1);break}return this},enable:function(t,e){if(!1===e)return this.disable(t);var n=this._nodeToButton(t);return p(n.node).removeClass(this.c.dom.button.disabled),this},name:function(){return this.c.name},node:function(t){return t=this._nodeToButton(t),p(t.node)},processing:function(t,e){var n=this._nodeToButton(t);return e===c?p(n.node).hasClass("processing"):(p(n.node).toggleClass("processing",e),this)},remove:function(t){var e=this._nodeToButton(t),n=this._nodeToHost(t),o=this.s.dt;if(e.buttons.length)for(var r=e.buttons.length-1;0<=r;r--)this.remove(e.buttons[r].node);return e.conf.destroy&&e.conf.destroy.call(o.button(t),o,p(t),e.conf),this._removeKey(e.conf),p(e.node).remove(),t=p.inArray(e,n),n.splice(t,1),this},text:function(t,e){function n(t){return"function"==typeof t?t(a,l,o.conf):t}var o=this._nodeToButton(t),r=this.c.dom.collection.buttonLiner,r=o.inCollection&&r&&r.tag?r.tag:this.c.dom.buttonLiner.tag,a=this.s.dt,l=p(o.node);return e===c?n(o.conf.text):(o.conf.text=e,r?l.children(r).html(n(e)):l.html(n(e)),this)},_constructor:function(){var n=this,t=this.s.dt,e=t.settings()[0],o=this.c.buttons;e._buttons||(e._buttons=[]),e._buttons.push({inst:this,name:this.c.name});for(var e=0,r=o.length;e<r;e++)this.add(o[e]);t.on("destroy",function(){n.destroy()}),p("body").on("keyup."+this.s.namespace,function(t){var e;a.activeElement&&a.activeElement!==a.body||(e=String.fromCharCode(t.keyCode).toLowerCase(),-1!==n.s.listenKeys.toLowerCase().indexOf(e)&&n._keypress(e,t))})},_addKey:function(t){t.key&&(this.s.listenKeys+=p.isPlainObject(t.key)?t.key.key:t.key)},_draw:function(t,e){t||(t=this.dom.container,e=this.s.buttons),t.children().detach();for(var n=0,o=e.length;n<o;n++)t.append(e[n].inserter),t.append(" "),e[n].buttons&&e[n].buttons.length&&this._draw(e[n].collection,e[n].buttons)},_expandButton:function(t,e,n,o){for(var r=this.s.dt,a=0,l=(e=p.isArray(e)?e:[e]).length;a<l;a++){var i,s,d=this._resolveExtends(e[a]);d&&(p.isArray(d)?this._expandButton(t,d,n,o):(i=this._buildButton(d,n))&&(o!==c?(t.splice(o,0,i),o++):t.push(i),i.conf.buttons&&(s=this.c.dom.collection,i.collection=p("<"+s.tag+"/>").addClass(s.className).attr("role","menu"),i.conf._collection=i.collection,this._expandButton(i.buttons,i.conf.buttons,!0,o)),d.init&&d.init.call(r.button(i.node),r,p(i.node),d),0))}},_buildButton:function(e,t){function n(t){return"function"==typeof t?t(l,s,e):t}var o=this.c.dom.button,r=this.c.dom.buttonLiner,a=this.c.dom.collection,l=this.s.dt;if(t&&a.button&&(o=a.button),t&&a.buttonLiner&&(r=a.buttonLiner),e.available&&!e.available(l,e))return!1;function i(t,e,n,o){o.action.call(e.button(n),t,e,n,o),p(e.table().node()).triggerHandler("buttons-action.dt",[e.button(n),e,n,o])}var s=p("<"+o.tag+"/>").addClass(o.className).attr("tabindex",this.s.dt.settings()[0].iTabIndex).attr("aria-controls",this.s.dt.table().node().id).on("click.dtb",function(t){t.preventDefault(),!s.hasClass(o.disabled)&&e.action&&i(t,l,s,e),s.blur()}).on("keyup.dtb",function(t){13===t.keyCode&&!s.hasClass(o.disabled)&&e.action&&i(t,l,s,e)});return"a"===o.tag.toLowerCase()&&s.attr("href","#"),r.tag?(a=p("<"+r.tag+"/>").html(n(e.text)).addClass(r.className),"a"===r.tag.toLowerCase()&&a.attr("href","#"),s.append(a)):s.html(n(e.text)),!1===e.enabled&&s.addClass(o.disabled),e.className&&s.addClass(e.className),e.titleAttr&&s.attr("title",n(e.titleAttr)),e.namespace||(e.namespace=".dt-button-"+d++),r=(r=this.c.dom.buttonContainer)&&r.tag?p("<"+r.tag+"/>").addClass(r.className).append(s):s,this._addKey(e),{conf:e,node:s.get(0),inserter:r,buttons:[],inCollection:t,collection:null}},_nodeToButton:function(t,e){for(var n=0,o=(e=e||this.s.buttons).length;n<o;n++){if(e[n].node===t)return e[n];if(e[n].buttons.length){var r=this._nodeToButton(t,e[n].buttons);if(r)return r}}},_nodeToHost:function(t,e){for(var n=0,o=(e=e||this.s.buttons).length;n<o;n++){if(e[n].node===t)return e;if(e[n].buttons.length){var r=this._nodeToHost(t,e[n].buttons);if(r)return r}}},_keypress:function(a,l){var i=function(t){for(var e=0,n=t.length;e<n;e++){var o=t[e].conf,r=t[e].node;o.key&&(o.key!==a&&(!p.isPlainObject(o.key)||o.key.key!==a||o.key.shiftKey&&!l.shiftKey||o.key.altKey&&!l.altKey||o.key.ctrlKey&&!l.ctrlKey||o.key.metaKey&&!l.metaKey)||p(r).click()),t[e].buttons.length&&i(t[e].buttons)}};i(this.s.buttons)},_removeKey:function(t){var e;t.key&&(e=p.isPlainObject(t.key)?t.key.key:t.key,t=this.s.listenKeys.split(""),e=p.inArray(e,t),t.splice(e,1),this.s.listenKeys=t.join(""))},_resolveExtends:function(n){function t(t){for(var e=0;!p.isPlainObject(t)&&!p.isArray(t);){if(t===c)return;if("function"==typeof t){if(!(t=t(r,n)))return!1}else if("string"==typeof t){if(!s[t])throw"Unknown button type: "+t;t=s[t]}if(30<++e)throw"Buttons: Too many iterations"}return p.isArray(t)?t:p.extend({},t)}for(var e,o,r=this.s.dt,n=t(n);n&&n.extend;){if(!s[n.extend])throw"Cannot extend unknown button type: "+n.extend;var a=t(s[n.extend]);if(p.isArray(a))return a;if(!a)return!1;e=a.className,n=p.extend({},a,n),e&&n.className!==e&&(n.className=e+" "+n.className);var l=n.postfixButtons;if(l){for(n.buttons||(n.buttons=[]),e=0,o=l.length;e<o;e++)n.buttons.push(l[e]);n.postfixButtons=null}if(l=n.prefixButtons){for(n.buttons||(n.buttons=[]),e=0,o=l.length;e<o;e++)n.buttons.splice(e,0,l[e]);n.prefixButtons=null}n.extend=a.extend}return n}}),u.background=function(t,e,n){n===c&&(n=400),t?p("<div/>").addClass(e).css("display","none").appendTo("body").fadeIn(n):p("body > div."+e).fadeOut(n,function(){p(this).removeClass(e).remove()})},u.instanceSelector=function(t,o){if(!t)return p.map(o,function(t){return t.inst});var r=[],a=p.map(o,function(t){return t.name}),l=function(t){if(p.isArray(t))for(var e=0,n=t.length;e<n;e++)l(t[e]);else"string"==typeof t?-1!==t.indexOf(",")?l(t.split(",")):-1!==(t=p.inArray(p.trim(t),a))&&r.push(o[t].inst):"number"==typeof t&&r.push(o[t].inst)};return l(t),r},u.buttonSelector=function(t,e){for(var l=[],i=function(t,e,n){for(var o,r,a=0,l=e.length;a<l;a++)(o=e[a])&&(r=n!==c?n+a:a+"",t.push({node:o.node,name:o.conf.name,idx:r}),o.buttons&&i(t,o.buttons,r+"-"))},s=function(t,e){var n=[];if(i(n,e.s.buttons),r=p.map(n,function(t){return t.node}),p.isArray(t)||t instanceof p)for(r=0,a=t.length;r<a;r++)s(t[r],e);else if(null===t||t===c||"*"===t)for(r=0,a=n.length;r<a;r++)l.push({inst:e,node:n[r].node});else if("number"==typeof t)l.push({inst:e,node:e.s.buttons[t].node});else if("string"==typeof t)if(-1!==t.indexOf(","))for(r=0,a=(n=t.split(",")).length;r<a;r++)s(p.trim(n[r]),e);else if(t.match(/^\d+(\-\d+)*$/))r=p.map(n,function(t){return t.idx}),l.push({inst:e,node:n[p.inArray(t,r)].node});else if(-1!==t.indexOf(":name"))for(var o=t.replace(":name",""),r=0,a=n.length;r<a;r++)n[r].name===o&&l.push({inst:e,node:n[r].node});else p(r).filter(t).each(function(){l.push({inst:e,node:this})});else"object"==typeof t&&t.nodeName&&(-1!==(n=p.inArray(t,r))&&l.push({inst:e,node:r[n]}))},n=0,o=t.length;n<o;n++)s(e,t[n]);return l},u.defaults={buttons:["copy","excel","csv","pdf","print"],name:"main",tabIndex:0,dom:{container:{tag:"div",className:"dt-buttons"},collection:{tag:"div",className:"dt-button-collection"},button:{tag:"a",className:"dt-button",active:"active",disabled:"disabled"},buttonLiner:{tag:"span",className:""}}},u.version="1.4.2",p.extend(s,{collection:{text:function(t){return t.i18n("buttons.collection","Collection")},className:"buttons-collection",action:function(t,n,e,o){var t=e.offset(),r=p(n.table().container()),a=!1;p("div.dt-button-background").length&&(a=p(".dt-button-collection").offset(),p("body").trigger("click.dtb-collection")),o._collection.addClass(o.collectionLayout).css("display","none").appendTo("body").fadeIn(o.fade);var l=o._collection.css("position");a&&"absolute"===l?o._collection.css({top:a.top,left:a.left}):"absolute"===l?(o._collection.css({top:t.top+e.outerHeight(),left:t.left}),a=r.offset().top+r.height(),e=t.top+e.outerHeight()+o._collection.outerHeight()-a,a=t.top-o._collection.outerHeight(),(a=r.offset().top-a)<e&&o._collection.css("top",t.top-o._collection.outerHeight()-5),e=t.left+o._collection.outerWidth(),(r=r.offset().left+r.width())<e&&o._collection.css("left",t.left-(e-r))):((t=o._collection.height()/2)>p(i).height()/2&&(t=p(i).height()/2),o._collection.css("marginTop",-1*t)),o.background&&u.background(!0,o.backgroundClassName,o.fade),setTimeout(function(){p("div.dt-button-background").on("click.dtb-collection",function(){}),p("body").on("click.dtb-collection",function(t){var e=p.fn.addBack?"addBack":"andSelf";p(t.target).parents()[e]().filter(o._collection).length||(o._collection.fadeOut(o.fade,function(){o._collection.detach()}),p("div.dt-button-background").off("click.dtb-collection"),u.background(!1,o.backgroundClassName,o.fade),p("body").off("click.dtb-collection"),n.off("buttons-action.b-internal"))})},10),o.autoClose&&n.on("buttons-action.b-internal",function(){p("div.dt-button-background").click()})},background:!0,collectionLayout:"",backgroundClassName:"dt-button-background",autoClose:!1,fade:400},copy:function(t,e){return s.copyHtml5?"copyHtml5":s.copyFlash&&s.copyFlash.available(t,e)?"copyFlash":void 0},csv:function(t,e){return s.csvHtml5&&s.csvHtml5.available(t,e)?"csvHtml5":s.csvFlash&&s.csvFlash.available(t,e)?"csvFlash":void 0},excel:function(t,e){return s.excelHtml5&&s.excelHtml5.available(t,e)?"excelHtml5":s.excelFlash&&s.excelFlash.available(t,e)?"excelFlash":void 0},pdf:function(t,e){return s.pdfHtml5&&s.pdfHtml5.available(t,e)?"pdfHtml5":s.pdfFlash&&s.pdfFlash.available(t,e)?"pdfFlash":void 0},pageLength:function(t){function r(t){return t.i18n("buttons.pageLength",{"-1":"Show all rows",_:"Show %d rows"},t.page.len())}var t=t.settings()[0].aLengthMenu,e=p.isArray(t[0])?t[0]:t,n=p.isArray(t[0])?t[1]:t;return{extend:"collection",text:r,className:"buttons-page-length",autoClose:!0,buttons:p.map(e,function(r,t){return{text:n[t],className:"button-page-length",action:function(t,e){e.page.len(r).draw()},init:function(t,e,n){var o=this,e=function(){o.active(t.page.len()===r)};t.on("length.dt"+n.namespace,e),e()},destroy:function(t,e,n){t.off("length.dt"+n.namespace)}}}),init:function(t,e,n){var o=this;t.on("length.dt"+n.namespace,function(){o.text(r(t))})},destroy:function(t,e,n){t.off("length.dt"+n.namespace)}}}}),m.Api.register("buttons()",function(e,n){n===c&&(n=e,e=c),this.selector.buttonGroup=e;var t=this.iterator(!0,"table",function(t){if(t._buttons)return u.buttonSelector(u.instanceSelector(e,t._buttons),n)},!0);return t._groupSelector=e,t}),m.Api.register("button()",function(t,e){var n=this.buttons(t,e);return 1<n.length&&n.splice(1,n.length),n}),m.Api.registerPlural("buttons().active()","button().active()",function(e){return e===c?this.map(function(t){return t.inst.active(t.node)}):this.each(function(t){t.inst.active(t.node,e)})}),m.Api.registerPlural("buttons().action()","button().action()",function(e){return e===c?this.map(function(t){return t.inst.action(t.node)}):this.each(function(t){t.inst.action(t.node,e)})}),m.Api.register(["buttons().enable()","button().enable()"],function(e){return this.each(function(t){t.inst.enable(t.node,e)})}),m.Api.register(["buttons().disable()","button().disable()"],function(){return this.each(function(t){t.inst.disable(t.node)})}),m.Api.registerPlural("buttons().nodes()","button().node()",function(){var e=p();return p(this.each(function(t){e=e.add(t.inst.node(t.node))})),e}),m.Api.registerPlural("buttons().processing()","button().processing()",function(e){return e===c?this.map(function(t){return t.inst.processing(t.node)}):this.each(function(t){t.inst.processing(t.node,e)})}),m.Api.registerPlural("buttons().text()","button().text()",function(e){return e===c?this.map(function(t){return t.inst.text(t.node)}):this.each(function(t){t.inst.text(t.node,e)})}),m.Api.registerPlural("buttons().trigger()","button().trigger()",function(){return this.each(function(t){t.inst.node(t.node).trigger("click")})}),m.Api.registerPlural("buttons().containers()","buttons().container()",function(){var o=p(),r=this._groupSelector;return this.iterator(!0,"table",function(t){if(t._buttons)for(var e=0,n=(t=u.instanceSelector(r,t._buttons)).length;e<n;e++)o=o.add(t[e].container())}),o}),m.Api.register("button().add()",function(t,e){var n=this.context;return n.length&&((n=u.instanceSelector(this._groupSelector,n[0]._buttons)).length&&n[0].add(e,t)),this.button(this._groupSelector,t)}),m.Api.register("buttons().destroy()",function(){return this.pluck("inst").unique().each(function(t){t.destroy()}),this}),m.Api.registerPlural("buttons().remove()","buttons().remove()",function(){return this.each(function(t){t.inst.remove(t.node)}),this}),m.Api.register("buttons.info()",function(t,e,n){var o=this;return!1===t?(p("#datatables_buttons_info").fadeOut(function(){p(this).remove()}),clearTimeout(r),r=null):(r&&clearTimeout(r),p("#datatables_buttons_info").length&&p("#datatables_buttons_info").remove(),p('<div id="datatables_buttons_info" class="dt-button-info"/>').html(t?"<h2>"+t+"</h2>":"").append(p("<div/>")["string"==typeof e?"html":"append"](e)).css("display","none").appendTo("body").fadeIn(),n!==c&&0!==n&&(r=setTimeout(function(){o.buttons.info(!1)},n))),this}),m.Api.register("buttons.exportData()",function(t){if(this.context.length){for(var n=new m.Api(this.context[0]),o=p.extend(!0,{},{rows:null,columns:"",modifier:{search:"applied",order:"applied"},orthogonal:"display",stripHtml:!0,stripNewlines:!0,decodeEntities:!0,trim:!0,format:{header:function(t){return e(t)},footer:function(t){return e(t)},body:function(t){return e(t)}}},t),e=function(t){return"string"!=typeof t||(t=t.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,""),o.stripHtml&&(t=t.replace(/<[^>]*>/g,"")),o.trim&&(t=t.replace(/^\s+|\s+$/g,"")),o.stripNewlines&&(t=t.replace(/\n/g," ")),o.decodeEntities&&(g.innerHTML=t,t=g.value)),t},t=n.columns(o.columns).indexes().map(function(t){var e=n.column(t).header();return o.format.header(e.innerHTML,t,e)}).toArray(),r=n.table().footer()?n.columns(o.columns).indexes().map(function(t){var e=n.column(t).footer();return o.format.footer(e?e.innerHTML:"",t,e)}).toArray():null,a=n.rows(o.rows,o.modifier).indexes().toArray(),a=(l=n.cells(a,o.columns)).render(o.orthogonal).toArray(),l=l.nodes().toArray(),i=t.length,s=0<i?a.length/i:0,d=Array(s),c=0,u=0;u<s;u++){for(var f=Array(i),h=0;h<i;h++)f[h]=o.format.body(a[c],u,h,l[c]),c++;d[u]=f}return{header:t,footer:r,body:d}}}),m.Api.register("buttons.exportInfo()",function(t){var e,n=t=t||{};return"function"==typeof(e="*"===n.filename&&"*"!==n.title&&n.title!==c?n.title:n.filename)&&(e=e()),e===c||null===e?e=null:(-1!==e.indexOf("*")&&(e=p.trim(e.replace("*",p("title").text()))),e=e.replace(/[^a-zA-Z0-9_\u00A1-\uFFFF\.,\-_ !\(\)]/g,""),(n=o(n.extension))||(n=""),e+=n),{filename:e,title:n=null===(n=o(t.title))?null:-1!==n.indexOf("*")?n.replace("*",p("title").text()||"Exported data"):n,messageTop:l(this,t.messageTop||t.message,"top"),messageBottom:l(this,t.messageBottom,"bottom")}});var o=function(t){return null===t||t===c?null:"function"==typeof t?t():t},l=function(t,e,n){return null===(e=o(e))?null:(t=p("caption",t.table().container()).eq(0),"*"===e?t.css("caption-side")!==n?null:t.length?t.text():"":e)},g=p("<textarea/>")[0];return p.fn.dataTable.Buttons=u,p.fn.DataTable.Buttons=u,p(a).on("init.dt plugin-init.dt",function(t,e){var n;"dt"!==t.namespace||(n=e.oInit.buttons||m.defaults.buttons)&&!e._buttons&&new u(e,n).container()}),m.ext.feature.push({fnInit:function(t){var e=(t=new m.Api(t)).init().buttons||m.defaults.buttons;return new u(t,e).container()},cFeature:"B"}),u}),function(n){"function"==typeof define&&define.amd?define("datatables.net-buttons-colvis",["jquery","datatables.net","datatables.net-buttons"],function(t){return n(t,window,document)}):"object"==typeof exports?module.exports=function(t,e){return t=t||window,e&&e.fn.dataTable||(e=require("datatables.net")(t,e).$),e.fn.dataTable.Buttons||require("datatables.net-buttons")(t,e),n(e,t,t.document)}:n(jQuery,window,document)}(function(t,e,n,r){return e=t.fn.dataTable,t.extend(e.ext.buttons,{colvis:function(t,e){return{extend:"collection",text:function(t){return t.i18n("buttons.colvis","Column visibility")},className:"buttons-colvis",buttons:[{extend:"columnsToggle",columns:e.columns,columnText:e.columnText}]}},columnsToggle:function(t,e){return t.columns(e.columns).indexes().map(function(t){return{extend:"columnToggle",columns:t,columnText:e.columnText}}).toArray()},columnToggle:function(t,e){return{extend:"columnVisibility",columns:e.columns,columnText:e.columnText}},columnsVisibility:function(t,e){return t.columns(e.columns).indexes().map(function(){}