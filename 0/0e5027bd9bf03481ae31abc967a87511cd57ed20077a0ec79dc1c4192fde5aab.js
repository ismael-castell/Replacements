(function(){var k=this||self,l=function(a,b){a=a.split(".");var c=k;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c=c[d]&&c[d]!==Object.prototype[d]?c[d]:c[d]={}:c[d]=b};var n=function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])},p=function(a){for(var b in a)if(a.hasOwnProperty(b))return!0;return!1};var q=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;var r=window,u=document,v=function(a,b){u.addEventListener?u.addEventListener(a,b,!1):u.attachEvent&&u.attachEvent("on"+a,b)};var w={},x=function(){w.TAGGING=w.TAGGING||[];w.TAGGING[1]=!0};var y=/:[0-9]+$/,A=function(a,b){b&&(b=String(b).toLowerCase());if("protocol"===b||"port"===b)a.protocol=z(a.protocol)||z(r.location.protocol);"port"===b?a.port=String(Number(a.hostname?a.port:r.location.port)||("http"==a.protocol?80:"https"==a.protocol?443:"")):"host"===b&&(a.hostname=(a.hostname||r.location.hostname).replace(y,"").toLowerCase());var c=z(a.protocol);b&&(b=String(b).toLowerCase());switch(b){case "url_no_fragment":b="";a&&a.href&&(b=a.href.indexOf("#"),b=0>b?a.href:a.href.substr(0,
    b));a=b;break;case "protocol":a=c;break;case "host":a=a.hostname.replace(y,"").toLowerCase();break;case "port":a=String(Number(a.port)||("http"==c?80:"https"==c?443:""));break;case "path":a.pathname||a.hostname||x();a="/"==a.pathname.substr(0,1)?a.pathname:"/"+a.pathname;a=a.split("/");a:if(b=a[a.length-1],c=[],Array.prototype.indexOf)b=c.indexOf(b),b="number"==typeof b?b:-1;else{for(var d=0;d<c.length;d++)if(c[d]===b){b=d;break a}b=-1}0<=b&&(a[a.length-1]="");a=a.join("/");break;case "query":a=a.search.replace("?",
    "");break;case "extension":a=a.pathname.split(".");a=1<a.length?a[a.length-1]:"";a=a.split("/")[0];break;case "fragment":a=a.hash.replace("#","");break;default:a=a&&a.href}return a},z=function(a){return a?a.replace(":","").toLowerCase():""},B=function(a){var b=u.createElement("a");a&&(b.href=a);var c=b.pathname;"/"!==c[0]&&(a||x(),c="/"+c);a=b.hostname.replace(y,"");return{href:b.href,protocol:b.protocol,host:b.host,hostname:a,pathname:c,search:b.search,hash:b.hash,port:b.port}};function C(){for(var a=D,b={},c=0;c<a.length;++c)b[a[c]]=c;return b}function E(){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZ";a+=a.toLowerCase()+"0123456789-_";return a+"."}
    var D,F,G=function(a){D=D||E();F=F||C();for(var b=[],c=0;c<a.length;c+=3){var d=c+1<a.length,e=c+2<a.length,g=a.charCodeAt(c),f=d?a.charCodeAt(c+1):0,h=e?a.charCodeAt(c+2):0,m=g>>2;g=(g&3)<<4|f>>4;f=(f&15)<<2|h>>6;h&=63;e||(h=64,d||(f=64));b.push(D[m],D[g],D[f],D[h])}return b.join("")},H=function(a){function b(m){for(;d<a.length;){var t=a.charAt(d++),L=F[t];if(null!=L)return L;if(!/^[\s\xa0]*$/.test(t))throw Error("Unknown base64 encoding at char: "+t);}return m}D=D||E();F=F||C();for(var c="",d=0;;){var e=
    b(-1),g=b(0),f=b(64),h=b(64);if(64===h&&-1===e)return c;c+=String.fromCharCode(e<<2|g>>4);64!=f&&(c+=String.fromCharCode(g<<4&240|f>>2),64!=h&&(c+=String.fromCharCode(f<<6&192|h)))}};var I;function J(a,b){if(!a||b===u.location.hostname)return!1;for(var c=0;c<a.length;c++)if(a[c]instanceof RegExp){if(a[c].test(b))return!0}else if(0<=b.indexOf(a[c]))return!0;return!1}
    var O=function(){var a=K,b=M,c=N(),d=function(f){a(f.target||f.srcElement||{})},e=function(f){b(f.target||f.srcElement||{})};if(!c.init){v("mousedown",d);v("keyup",d);v("submit",e);var g=HTMLFormElement.prototype.submit;HTMLFormElement.prototype.submit=function(){b(this);g.call(this)};c.init=!0}},N=function(){var a={};var b=r.google_tag_data;r.google_tag_data=void 0===b?a:b;a=r.google_tag_data;b=a.gl;b&&b.decorators||(b={decorators:[]},a.gl=b);return b};var P=/(.*?)\*(.*?)\*(.*)/,Q=/([^?#]+)(\?[^#]*)?(#.*)?/,R=/(.*?)(^|&)_gl=([^&]*)&?(.*)/,T=function(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];void 0!==d&&d===d&&null!==d&&"[object Object]"!==d.toString()&&(b.push(c),b.push(G(String(d))))}a=b.join("*");return["1",S(a),a].join("*")},S=function(a,b){a=[window.navigator.userAgent,(new Date).getTimezoneOffset(),window.navigator.userLanguage||window.navigator.language,Math.floor((new Date).getTime()/60/1E3)-(void 0===b?0:b),a].join("*");
    if(!(b=I)){b=Array(256);for(var c=0;256>c;c++){for(var d=c,e=0;8>e;e++)d=d&1?d>>>1^3988292384:d>>>1;b[c]=d}}I=b;b=4294967295;for(c=0;c<a.length;c++)b=b>>>8^I[(b^a.charCodeAt(c))&255];return((b^-1)>>>0).toString(36)},ba=function(a){return function(b){var c=B(r.location.href),d=c.search.replace("?","");a:{var e=d.split("&");for(var g=0;g<e.length;g++){var f=e[g].split("=");if("_gl"===decodeURIComponent(f[0]).replace(/\+/g," ")){e=f.slice(1).join("=");break a}}e=void 0}b.query=U(e||"")||{};e=A(c,"fragment");
    g=e.match(R);b.fragment=U(g&&g[3]||"")||{};a&&aa(c,d,e)}};function V(a){var b=R.exec(a);if(b){var c=b[2],d=b[4];a=b[1];d&&(a=a+c+d)}return a}
    var aa=function(a,b,c){function d(e,g){e=V(e);e.length&&(e=g+e);return e}r.history&&r.history.replaceState&&(R.test(b)||R.test(c))&&(a=A(a,"path"),b=d(b,"?"),c=d(c,"#"),r.history.replaceState({},void 0,""+a+b+c))},U=function(a){var b=void 0===b?3:b;try{if(a){a:{for(var c=0;3>c;++c){var d=P.exec(a);if(d){var e=d;break a}a=decodeURIComponent(a)}e=void 0}if(e&&"1"===e[1]){var g=e[2],f=e[3];a:{for(e=0;e<b;++e)if(g===S(f,e)){var h=!0;break a}h=!1}if(h){b={};var m=f?f.split("*"):[];for(f=0;f<m.length;f+=
    2)b[m[f]]=H(m[f+1]);return b}}}}catch(t){}};function W(a,b,c){function d(h){h=V(h);var m=h.charAt(h.length-1);h&&"&"!==m&&(h+="&");return h+f}c=void 0===c?!1:c;var e=Q.exec(b);if(!e)return"";b=e[1];var g=e[2]||"";e=e[3]||"";var f="_gl="+a;c?e="#"+d(e.substring(1)):g="?"+d(g.substring(1));return""+b+g+e}
    function X(a,b,c){for(var d={},e={},g=N().decorators,f=0;f<g.length;++f){var h=g[f];(!c||h.forms)&&J(h.domains,b)&&(h.fragment?n(e,h.callback()):n(d,h.callback()))}p(d)&&(b=T(d),c?Y(b,a):Z(b,a,!1));!c&&p(e)&&(c=T(e),Z(c,a,!0))}function Z(a,b,c){b.href&&(a=W(a,b.href,void 0===c?!1:c),q.test(a)&&(b.href=a))}
    function Y(a,b){if(b&&b.action){var c=(b.method||"").toLowerCase();if("get"===c){c=b.childNodes||[];for(var d=!1,e=0;e<c.length;e++){var g=c[e];if("_gl"===g.name){g.setAttribute("value",a);d=!0;break}}d||(c=u.createElement("input"),c.setAttribute("type","hidden"),c.setAttribute("name","_gl"),c.setAttribute("value",a),b.appendChild(c))}else"post"===c&&(a=W(a,b.action),q.test(a)&&(b.action=a))}}
    var K=function(a){try{a:{for(var b=100;a&&0<b;){if(a.href&&a.nodeName.match(/^a(?:rea)?$/i)){var c=a;break a}a=a.parentNode;b--}c=null}if(c){var d=c.protocol;"http:"!==d&&"https:"!==d||X(c,c.hostname,!1)}}catch(e){}},M=function(a){try{if(a.action){var b=A(B(a.action),"host");X(a,b,!0)}}catch(c){}};l("google_tag_data.glBridge.auto",function(a,b,c,d){O();a={callback:a,domains:b,fragment:"fragment"===c,forms:!!d};N().decorators.push(a)});l("google_tag_data.glBridge.decorate",function(a,b,c){c=!!c;a=T(a);if(b.tagName){if("a"==b.tagName.toLowerCase())return Z(a,b,c);if("form"==b.tagName.toLowerCase())return Y(a,b)}if("string"==typeof b)return W(a,b,c)});l("google_tag_data.glBridge.generate",T);
    l("google_tag_data.glBridge.get",function(a,b){var c=ba(!!b);b=N();b.data||(b.data={query:{},fragment:{}},c(b.data));c={};if(b=b.data)n(c,b.query),a&&n(c,b.fragment);return c});})(window);
    (function(){function La(a){var b=1,c;if(a)for(b=0,c=a.length-1;0<=c;c--){var d=a.charCodeAt(c);b=(b<<6&268435455)+d+(d<<14);d=b&266338304;b=0!=d?b^d>>21:b}return b};var $c=function(a){this.w=a||[]};$c.prototype.set=function(a){this.w[a]=!0};$c.prototype.encode=function(){for(var a=[],b=0;b<this.w.length;b++)this.w[b]&&(a[Math.floor(b/6)]^=1<<b%6);for(b=0;b<a.length;b++)a[b]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(a[b]||0);return a.join("")+"~"};var ha=window.GoogleAnalyticsObject,wa;if(wa=void 0!=ha)wa=-1<(ha.constructor+"").indexOf("String");var Za;if(Za=wa){var Qa=window.GoogleAnalyticsObject;Za=Qa?Qa.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""):""}var gb=Za||"ga",jd=/^(?:utma\.)?\d+\.\d+$/,kd=/^amp-[\w.-]{22,64}$/,Ba=!1;var vd=new $c;function J(a){vd.set(a)}var Td=function(a){a=Dd(a);a=new $c(a);for(var b=vd.w.slice(),c=0;c<a.w.length;c++)b[c]=b[c]||a.w[c];return(new $c(b)).encode()},Dd=function(a){a=a.get(Gd);ka(a)||(a=[]);return a};var ea=function(a){return"function"==typeof a},ka=function(a){return"[object Array]"==Object.prototype.toString.call(Object(a))},qa=function(a){return void 0!=a&&-1<(a.constructor+"").indexOf("String")},D=function(a,b){return 0==a.indexOf(b)},sa=function(a){return a?a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""):""},ra=function(){for(var a=O.navigator.userAgent+(M.cookie?M.cookie:"")+(M.referrer?M.referrer:""),b=a.length,c=O.history.length;0<c;)a+=c--^b++;return[hd()^La(a)&2147483647,Math.round((new Date).getTime()/
    1E3)].join(".")},ta=function(a){var b=M.createElement("img");b.width=1;b.height=1;b.src=a;return b},ua=function(){},K=function(a){if(encodeURIComponent instanceof Function)return encodeURIComponent(a);J(28);return a},L=function(a,b,c,d){try{a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)}catch(e){J(27)}},f=/^[\w\-:/.?=&%!\[\]]+$/,Nd=/^[\w+/_-]+[=]{0,2}$/,be=function(a,b){return E(M.location[b?"href":"search"],a)},E=function(a,b){return(a=a.match("(?:&|#|\\?)"+
    K(b).replace(/([.*+?^=!:${}()|\[\]\/\\])/g,"\\$1")+"=([^&#]*)"))&&2==a.length?a[1]:""},xa=function(){var a=""+M.location.hostname;return 0==a.indexOf("www.")?a.substring(4):a},de=function(a,b){var c=a.indexOf(b);if(5==c||6==c)if(a=a.charAt(c+b.length),"/"==a||"?"==a||""==a||":"==a)return!0;return!1},ya=function(a,b){var c=M.referrer;if(/^(https?|android-app):\/\//i.test(c)){if(a)return c;a="//"+M.location.hostname;if(!de(c,a))return b&&(b=a.replace(/\./g,"-")+".cdn.ampproject.org",de(c,b))?void 0:
    c}},za=function(a,b){if(1==b.length&&null!=b[0]&&"object"===typeof b[0])return b[0];for(var c={},d=Math.min(a.length+1,b.length),e=0;e<d;e++)if("object"===typeof b[e]){for(var g in b[e])b[e].hasOwnProperty(g)&&(c[g]=b[e][g]);break}else e<a.length&&(c[a[e]]=b[e]);return c};var ee=function(){this.keys=[];this.values={};this.m={}};ee.prototype.set=function(a,b,c){this.keys.push(a);c?this.m[":"+a]=b:this.values[":"+a]=b};ee.prototype.get=function(a){return this.m.hasOwnProperty(":"+a)?this.m[":"+a]:this.values[":"+a]};ee.prototype.map=function(a){for(var b=0;b<this.keys.length;b++){var c=this.keys[b],d=this.get(c);d&&a(c,d)}};var O=window,M=document,va=function(a,b){return setTimeout(a,b)};var F=window,Ea=document,G=function(a){var b=F._gaUserPrefs;if(b&&b.ioo&&b.ioo()||a&&!0===F["ga-disable-"+a])return!0;try{var c=F.external;if(c&&c._gaUserPrefs&&"oo"==c._gaUserPrefs)return!0}catch(g){}a=[];b=String(Ea.cookie||document.cookie).split(";");for(c=0;c<b.length;c++){var d=b[c].split("="),e=d[0].replace(/^\s*|\s*$/g,"");e&&"AMP_TOKEN"==e&&((d=d.slice(1).join("=").replace(/^\s*|\s*$/g,""))&&(d=decodeURIComponent(d)),a.push(d))}for(b=0;b<a.length;b++)if("$OPT_OUT"==a[b])return!0;return Ea.getElementById("__gaOptOutExtension")?
    !0:!1};var Ca=function(a){var b=[],c=M.cookie.split(";");a=new RegExp("^\\s*"+a+"=\\s*(.*?)\\s*$");for(var d=0;d<c.length;d++){var e=c[d].match(a);e&&b.push(e[1])}return b},zc=function(a,b,c,d,e,g){e=G(e)?!1:eb.test(M.location.hostname)||"/"==c&&vc.test(d)?!1:!0;if(!e)return!1;b&&1200<b.length&&(b=b.substring(0,1200));c=a+"="+b+"; path="+c+"; ";g&&(c+="expires="+(new Date((new Date).getTime()+g)).toGMTString()+"; ");d&&"none"!==d&&(c+="domain="+d+";");d=M.cookie;M.cookie=c;if(!(d=d!=M.cookie))a:{a=Ca(a);
    for(d=0;d<a.length;d++)if(b==a[d]){d=!0;break a}d=!1}return d},Cc=function(a){return encodeURIComponent?encodeURIComponent(a).replace(/\(/g,"%28").replace(/\)/g,"%29"):a},vc=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,eb=/(^|\.)doubleclick\.net$/i;var oc,Id=/^.*Version\/?(\d+)[^\d].*$/i,ne=function(){if(void 0!==O.__ga4__)return O.__ga4__;if(void 0===oc){var a=O.navigator.userAgent;if(a){var b=a;try{b=decodeURIComponent(a)}catch(c){}if(a=!(0<=b.indexOf("Chrome"))&&!(0<=b.indexOf("CriOS"))&&(0<=b.indexOf("Safari/")||0<=b.indexOf("Safari,")))b=Id.exec(b),a=11<=(b?Number(b[1]):-1);oc=a}else oc=!1}return oc};var Fa,Ga,fb,Ab,ja=/^https?:\/\/[^/]*cdn\.ampproject\.org\//,Ue=/^(?:www\.|m\.|amp\.)+/,Ub=[],da=function(a){if(ye(a[Kd])){if(void 0===Ab){var b;if(b=(b=De.get())&&b._ga||void 0)Ab=b,J(81)}if(void 0!==Ab)return a[Q]||(a[Q]=Ab),!1}if(a[Kd]){J(67);if(a[ac]&&"cookie"!=a[ac])return!1;if(void 0!==Ab)a[Q]||(a[Q]=Ab);else{a:{b=String(a[W]||xa());var c=String(a[Yb]||"/"),d=Ca(String(a[U]||"_ga"));b=na(d,b,c);if(!b||jd.test(b))b=!0;else if(b=Ca("AMP_TOKEN"),0==b.length)b=!0;else{if(1==b.length&&(b=decodeURIComponent(b[0]),
    "$RETRIEVING"==b||"$OPT_OUT"==b||"$ERROR"==b||"$NOT_FOUND"==b)){b=!0;break a}b=!1}}if(b&&tc(ic,String(a[Na])))return!0}}return!1},ic=function(){Z.D([ua])},tc=function(a,b){var c=Ca("AMP_TOKEN");if(1<c.length)return J(55),!1;c=decodeURIComponent(c[0]||"");if("$OPT_OUT"==c||"$ERROR"==c||G(b))return J(62),!1;if(!ja.test(M.referrer)&&"$NOT_FOUND"==c)return J(68),!1;if(void 0!==Ab)return J(56),va(function(){a(Ab)},0),!0;if(Fa)return Ub.push(a),!0;if("$RETRIEVING"==c)return J(57),va(function(){tc(a,b)},
    1E4),!0;Fa=!0;c&&"$"!=c[0]||(xc("$RETRIEVING",3E4),setTimeout(Mc,3E4),c="");return Pc(c,b)?(Ub.push(a),!0):!1},Pc=function(a,b,c){if(!window.JSON)return J(58),!1;var d=O.XMLHttpRequest;if(!d)return J(59),!1;var e=new d;if(!("withCredentials"in e))return J(60),!1;e.open("POST",(c||"https://ampcid.google.com/v1/publisher:getClientId")+"?key=AIzaSyA65lEHUEizIsNtlbNo-l2K18dT680nsaM",!0);e.withCredentials=!0;e.setRequestHeader("Content-Type","text/plain");e.onload=function(){Fa=!1;if(4==e.readyState){try{200!=
    e.status&&(J(61),Qc("","$ERROR",3E4));var g=JSON.parse(e.responseText);g.optOut?(J(63),Qc("","$OPT_OUT",31536E6)):g.clientId?Qc(g.clientId,g.securityToken,31536E6):!c&&g.alternateUrl?(Ga&&clearTimeout(Ga),Fa=!0,Pc(a,b,g.alternateUrl)):(J(64),Qc("","$NOT_FOUND",36E5))}catch(ca){J(65),Qc("","$ERROR",3E4)}e=null}};d={originScope:"AMP_ECID_GOOGLE"};a&&(d.securityToken=a);e.send(JSON.stringify(d));Ga=va(function(){J(66);Qc("","$ERROR",3E4)},1E4);return!0},Mc=function(){Fa=!1},xc=function(a,b){if(void 0===
    fb){fb="";for(var c=id(),d=0;d<c.length;d++){var e=c[d];if(zc("AMP_TOKEN",encodeURIComponent(a),"/",e,"",b)){fb=e;return}}}zc("AMP_TOKEN",encodeURIComponent(a),"/",fb,"",b)},Qc=function(a,b,c){Ga&&clearTimeout(Ga);b&&xc(b,c);Ab=a;b=Ub;Ub=[];for(c=0;c<b.length;c++)b[c](a)},ye=function(a){a:{if(ja.test(M.referrer)){var b=M.location.hostname.replace(Ue,"");b:{var c=M.referrer;c=c.replace(/^https?:\/\//,"");var d=c.replace(/^[^/]+/,"").split("/"),e=d[2];d=(d="s"==e?d[3]:e)?decodeURIComponent(d):d;if(!d){if(0==
    c.indexOf("xn--")){c="";break b}(c=c.match(/(.*)\.cdn\.ampproject\.org\/?$/))&&2==c.length&&(d=c[1].replace(/-/g,".").replace(/\.\./g,"-"))}c=d?d.replace(Ue,""):""}(d=b===c)||(c="."+c,d=b.substring(b.length-c.length,b.length)===c);if(d){b=!0;break a}else J(78)}b=!1}return b&&!1!==a};var bd=function(a){return(a?"https:":Ba||"https:"==M.location.protocol?"https:":"http:")+"//www.google-analytics.com"},Da=function(a){this.name="len";this.message=a+"-8192"},ba=function(a,b,c){c=c||ua;if(2036>=b.length)wc(a,b,c);else if(8192>=b.length)x(a,b,c)||wd(a,b,c)||wc(a,b,c);else throw ge("len",b.length),new Da(b.length);},pe=function(a,b,c,d){d=d||ua;wd(a+"?"+b,"",d,c)},wc=function(a,b,c){var d=ta(a+"?"+b);d.onload=d.onerror=function(){d.onload=null;d.onerror=null;c()}},wd=function(a,b,c,
    d){var e=O.XMLHttpRequest;if(!e)return!1;var g=new e;if(!("withCredentials"in g))return!1;a=a.replace(/^http:/,"https:");g.open("POST",a,!0);g.withCredentials=!0;g.setRequestHeader("Content-Type","text/plain");g.onreadystatechange=function(){if(4==g.readyState){if(d)try{var ca=g.responseText;if(1>ca.length)ge("xhr","ver","0"),c();else if("1"!=ca.charAt(0))ge("xhr","ver",String(ca.length)),c();else if(3<d.count++)ge("xhr","tmr",""+d.count),c();else if(1==ca.length)c();else{var l=ca.charAt(1);if("d"==
    l)pe("https://stats.g.doubleclick.net/j/collect",d.U,d,c);else if("g"==l){wc("https://www.google.%/ads/ga-audiences".replace("%","com"),d.google,c);var k=ca.substring(2);k&&(/^[a-z.]{1,6}$/.test(k)?wc("https://www.google.%/ads/ga-audiences".replace("%",k),d.google,ua):ge("tld","bcc",k))}else ge("xhr","brc",l),c()}}catch(w){ge("xhr","rsp"),c()}else c();g=null}};g.send(b);return!0},x=function(a,b,c){return O.navigator.sendBeacon?O.navigator.sendBeacon(a,b)?(c(),!0):!1:!1},ge=function(a,b,c){1<=100*
    Math.random()||G("?")||(a=["t=error","_e="+a,"_v=j79","sr=1"],b&&a.push("_f="+b),c&&a.push("_m="+K(c.substring(0,100))),a.push("aip=1"),a.push("z="+hd()),wc(bd(!0)+"/u/d",a.join("&"),ua))};var qc=function(){return O.gaData=O.gaData||{}},h=function(a){var b=qc();return b[a]=b[a]||{}};var Ha=function(){this.M=[]};Ha.prototype.add=function(a){this.M.push(a)};Ha.prototype.D=function(a){try{for(var b=0;b<this.M.length;b++){var c=a.get(this.M[b]);c&&ea(c)&&c.call(O,a)}}catch(d){}b=a.get(Ia);b!=ua&&ea(b)&&(a.set(Ia,ua,!0),setTimeout(b,10))};function Ja(a){if(100!=a.get(Ka)&&La(P(a,Q))%1E4>=100*R(a,Ka))throw"abort";}function Ma(a){if(G(P(a,Na)))throw"abort";}function Oa(){var a=M.location.protocol;if("http:"!=a&&"https:"!=a)throw"abort";}
    function Pa(a){try{O.navigator.sendBeacon?J(42):O.XMLHttpRequest&&"withCredentials"in new O.XMLHttpRequest&&J(40)}catch(c){}a.set(ld,Td(a),!0);a.set(Ac,R(a,Ac)+1);var b=[];ue.map(function(c,d){d.F&&(c=a.get(c),void 0!=c&&c!=d.defaultValue&&("boolean"==typeof c&&(c*=1),b.push(d.F+"="+K(""+c))))});b.push("z="+Bd());a.set(Ra,b.join("&"),!0)}
    function Sa(a){var b=P(a,fa);!b&&a.get(Vd)&&(b="beacon");var c=P(a,gd),d=P(a,oe),e=c||(d?d+"/3":bd(!1)+"/collect");switch(P(a,ad)){case "d":e=c||(d?d+"/32":bd(!1)+"/j/collect");b=a.get(qe)||void 0;pe(e,P(a,Ra),b,a.Z(Ia));break;case "b":e=c||(d?d+"/31":bd(!1)+"/r/collect");default:b?(c=P(a,Ra),d=(d=a.Z(Ia))||ua,"image"==b?wc(e,c,d):"xhr"==b&&wd(e,c,d)||"beacon"==b&&x(e,c,d)||ba(e,c,d)):ba(e,P(a,Ra),a.Z(Ia))}e=P(a,Na);e=h(e);b=e.hitcount;e.hitcount=b?b+1:1;e=P(a,Na);delete h(e).pending_experiments;
    a.set(Ia,ua,!0)}function Hc(a){qc().expId&&a.set(Nc,qc().expId);qc().expVar&&a.set(Oc,qc().expVar);var b=P(a,Na);if(b=h(b).pending_experiments){var c=[];for(d in b)b.hasOwnProperty(d)&&b[d]&&c.push(encodeURIComponent(d)+"."+encodeURIComponent(b[d]));var d=c.join("!")}else d=void 0;d&&a.set(m,d,!0)}function cd(){if(O.navigator&&"preview"==O.navigator.loadPurpose)throw"abort";}function yd(a){var b=O.gaDevIds;ka(b)&&0!=b.length&&a.set("&did",b.join(","),!0)}
    function vb(a){if(!a.get(Na))throw"abort";};var hd=function(){return Math.round(2147483647*Math.random())},Bd=function(){try{var a=new Uint32Array(1);O.crypto.getRandomValues(a);return a[0]&2147483647}catch(b){return hd()}};function Ta(a){var b=R(a,Ua);500<=b&&J(15);var c=P(a,Va);if("transaction"!=c&&"item"!=c){c=R(a,Wa);var d=(new Date).getTime(),e=R(a,Xa);0==e&&a.set(Xa,d);e=Math.round(2*(d-e)/1E3);0<e&&(c=Math.min(c+e,20),a.set(Xa,d));if(0>=c)throw"abort";a.set(Wa,--c)}a.set(Ua,++b)};var Ya=function(){this.data=new ee};Ya.prototype.get=function(a){var b=$a(a),c=this.data.get(a);b&&void 0==c&&(c=ea(b.defaultValue)?b.defaultValue():b.defaultValue);return b&&b.Z?b.Z(this,a,c):c};var P=function(a,b){a=a.get(b);return void 0==a?"":""+a},R=function(a,b){a=a.get(b);return void 0==a||""===a?0:Number(a)};Ya.prototype.Z=function(a){return(a=this.get(a))&&ea(a)?a:ua};
    Ya.prototype.set=function(a,b,c){if(a)if("object"==typeof a)for(var d in a)a.hasOwnProperty(d)&&ab(this,d,a[d],c);else ab(this,a,b,c)};var ab=function(a,b,c,d){if(void 0!=c)switch(b){case Na:wb.test(c)}var e=$a(b);e&&e.o?e.o(a,b,c,d):a.data.set(b,c,d)};var ue=new ee,ve=[],bb=function(a,b,c,d,e){this.name=a;this.F=b;this.Z=d;this.o=e;this.defaultValue=c},$a=function(a){var b=ue.get(a);if(!b)for(var c=0;c<ve.length;c++){var d=ve[c],e=d[0].exec(a);if(e){b=d[1](e);ue.set(b.name,b);break}}return b},yc=function(a){var b;ue.map(function(c,d){d.F==a&&(b=d)});return b&&b.name},S=function(a,b,c,d,e){a=new bb(a,b,c,d,e);ue.set(a.name,a);return a.name},cb=function(a,b){ve.push([new RegExp("^"+a+"$"),b])},T=function(a,b,c){return S(a,b,c,void 0,db)},db=function(){};var hb=T("apiVersion","v"),ib=T("clientVersion","_v");S("anonymizeIp","aip");var jb=S("adSenseId","a"),Va=S("hitType","t"),Ia=S("hitCallback"),Ra=S("hitPayload");S("nonInteraction","ni");S("currencyCode","cu");S("dataSource","ds");var Vd=S("useBeacon",void 0,!1),fa=S("transport");S("sessionControl","sc","");S("sessionGroup","sg");S("queueTime","qt");var Ac=S("_s","_s");S("screenName","cd");var kb=S("location","dl",""),lb=S("referrer","dr"),mb=S("page","dp","");S("hostname","dh");
    var nb=S("language","ul"),ob=S("encoding","de");S("title","dt",function(){return M.title||void 0});cb("contentGroup([0-9]+)",function(a){return new bb(a[0],"cg"+a[1])});var pb=S("screenColors","sd"),qb=S("screenResolution","sr"),rb=S("viewportSize","vp"),sb=S("javaEnabled","je"),tb=S("flashVersion","fl");S("campaignId","ci");S("campaignName","cn");S("campaignSource","cs");S("campaignMedium","cm");S("campaignKeyword","ck");S("campaignContent","cc");
    var ub=S("eventCategory","ec"),xb=S("eventAction","ea"),yb=S("eventLabel","el"),zb=S("eventValue","ev"),Bb=S("socialNetwork","sn"),Cb=S("socialAction","sa"),Db=S("socialTarget","st"),Eb=S("l1","plt"),Fb=S("l2","pdt"),Gb=S("l3","dns"),Hb=S("l4","rrt"),Ib=S("l5","srt"),Jb=S("l6","tcp"),Kb=S("l7","dit"),Lb=S("l8","clt"),Ve=S("l9","_gst"),We=S("l10","_gbt"),Xe=S("l11","_cst"),Ye=S("l12","_cbt"),Mb=S("timingCategory","utc"),Nb=S("timingVar","utv"),Ob=S("timingLabel","utl"),Pb=S("timingValue","utt");
    S("appName","an");S("appVersion","av","");S("appId","aid","");S("appInstallerId","aiid","");S("exDescription","exd");S("exFatal","exf");var Nc=S("expId","xid"),Oc=S("expVar","xvar"),m=S("exp","exp"),Rc=S("_utma","_utma"),Sc=S("_utmz","_utmz"),Tc=S("_utmht","_utmht"),Ua=S("_hc",void 0,0),Xa=S("_ti",void 0,0),Wa=S("_to",void 0,20);cb("dimension([0-9]+)",function(a){return new bb(a[0],"cd"+a[1])});cb("metric([0-9]+)",function(a){return new bb(a[0],"cm"+a[1])});S("linkerParam",void 0,void 0,Bc,db);
    var Ze=T("_cd2l",void 0,!1),ld=S("usage","_u"),Gd=S("_um");S("forceSSL",void 0,void 0,function(){return Ba},function(a,b,c){J(34);Ba=!!c});var ed=S("_j1","jid"),ia=S("_j2","gjid");cb("\\&(.*)",function(a){var b=new bb(a[0],a[1]),c=yc(a[0].substring(1));c&&(b.Z=function(d){return d.get(c)},b.o=function(d,e,g,ca){d.set(c,g,ca)},b.F=void 0);return b});
    var Qb=T("_oot"),dd=S("previewTask"),Rb=S("checkProtocolTask"),md=S("validationTask"),Sb=S("checkStorageTask"),Uc=S("historyImportTask"),Tb=S("samplerTask"),Vb=S("_rlt"),Wb=S("buildHitTask"),Xb=S("sendHitTask"),Vc=S("ceTask"),zd=S("devIdTask"),Cd=S("timingTask"),Ld=S("displayFeaturesTask"),oa=S("customTask"),V=T("name"),Q=T("clientId","cid"),n=T("clientIdTime"),xd=T("storedClientId"),Ad=S("userId","uid"),Na=T("trackingId","tid"),U=T("cookieName",void 0,"_ga"),W=T("cookieDomain"),Yb=T("cookiePath",
    void 0,"/"),Zb=T("cookieExpires",void 0,63072E3),Hd=T("cookieUpdate",void 0,!0),$b=T("legacyCookieDomain"),Wc=T("legacyHistoryImport",void 0,!0),ac=T("storage",void 0,"cookie"),bc=T("allowLinker",void 0,!1),cc=T("allowAnchor",void 0,!0),Ka=T("sampleRate","sf",100),dc=T("siteSpeedSampleRate",void 0,1),ec=T("alwaysSendReferrer",void 0,!1),I=T("_gid","_gid"),la=T("_gcn"),Kd=T("useAmpClientId"),ce=T("_gclid"),fe=T("_gt"),he=T("_ge",void 0,7776E6),ie=T("_gclsrc"),je=T("storeGac",void 0,!0),oe=S("_x_19"),
    gd=S("transportUrl"),Md=S("_r","_r"),qe=S("_dp"),ad=S("_jt",void 0,"n"),Ud=S("allowAdFeatures",void 0,!0);function X(a,b,c,d){b[a]=function(){try{return d&&J(d),c.apply(this,arguments)}catch(e){throw ge("exc",a,e&&e.name),e;}}};var Od=function(){this.V=100;this.$=this.fa=!1;this.oa="detourexp";this.groups=1},Ed=function(a){var b=new Od,c;if(b.fa&&b.$)return 0;b.$=!0;if(a){if(b.oa&&void 0!==a.get(b.oa))return R(a,b.oa);if(0==a.get(dc))return 0}if(0==b.V)return 0;void 0===c&&(c=Bd());return 0==c%b.V?Math.floor(c/b.V)%b.groups+1:0};function fc(){var a,b;if((b=(b=O.navigator)?b.plugins:null)&&b.length)for(var c=0;c<b.length&&!a;c++){var d=b[c];-1<d.name.indexOf("Shockwave Flash")&&(a=d.description)}if(!a)try{var e=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");a=e.GetVariable("$version")}catch(g){}if(!a)try{e=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6"),a="WIN 6,0,21,0",e.AllowScriptAccess="always",a=e.GetVariable("$version")}catch(g){}if(!a)try{e=new ActiveXObject("ShockwaveFlash.ShockwaveFlash"),a=e.GetVariable("$version")}catch(g){}a&&
    (e=a.match(/[\d]+/g))&&3<=e.length&&(a=e[0]+"."+e[1]+" r"+e[2]);return a||void 0};var aa=function(a){var b=Math.min(R(a,dc),100);return La(P(a,Q))%100>=b?!1:!0},gc=function(a){var b={};if(Ec(b)||Fc(b)){var c=b[Eb];void 0==c||Infinity==c||isNaN(c)||(0<c?(Y(b,Gb),Y(b,Jb),Y(b,Ib),Y(b,Fb),Y(b,Hb),Y(b,Kb),Y(b,Lb),Y(b,Ve),Y(b,We),Y(b,Xe),Y(b,Ye),va(function(){a(b)},10)):L(O,"load",function(){gc(a)},!1))}},Ec=function(a){var b=O.performance||O.webkitPerformance;b=b&&b.timing;if(!b)return!1;var c=b.navigationStart;if(0==c)return!1;a[Eb]=b.loadEventStart-c;a[Gb]=b.domainLookupEnd-b.domainLookupStart;
    a[Jb]=b.connectEnd-b.connectStart;a[Ib]=b.responseStart-b.requestStart;a[Fb]=b.responseEnd-b.responseStart;a[Hb]=b.fetchStart-c;a[Kb]=b.domInteractive-c;a[Lb]=b.domContentLoadedEventStart-c;a[Ve]=N.L-c;a[We]=N.ya-c;O.google_tag_manager&&O.google_tag_manager._li&&(b=O.google_tag_manager._li,a[Xe]=b.cst,a[Ye]=b.cbt);return!0},Fc=function(a){if(O.top!=O)return!1;var b=O.external,c=b&&b.onloadT;b&&!b.isValidLoadTime&&(c=void 0);2147483648<c&&(c=void 0);0<c&&b.setPageReadyTime();if(void 0==c)return!1;
    a[Eb]=c;return!0},Y=function(a,b){var c=a[b];if(isNaN(c)||Infinity==c||0>c)a[b]=void 0},Fd=function(a){return function(b){if("pageview"==b.get(Va)&&!a.I){a.I=!0;var c=aa(b),d=0<E(P(b,kb),"gclid").length;(c||d)&&gc(function(e){c&&a.send("timing",e);d&&a.send("adtiming",e)})}}};var hc=!1,mc=function(a){if("cookie"==P(a,ac)){if(a.get(Hd)||P(a,xd)!=P(a,Q)){var b=1E3*R(a,Zb);ma(a,Q,U,b)}(a.get(Hd)||uc(a)!=P(a,I))&&ma(a,I,la,864E5);if(a.get(je)){var c=P(a,ce);if(c){var d=Math.min(R(a,he),1E3*R(a,Zb));d=Math.min(d,1E3*R(a,fe)+d-(new Date).getTime());a.data.set(he,d);b={};var e=P(a,fe),g=P(a,ie),ca=kc(P(a,Yb)),l=lc(P(a,W));a=P(a,Na);g&&"aw.ds"!=g?b&&(b.ua=!0):(c=["1",e,Cc(c)].join("."),0<d&&(b&&(b.ta=!0),zc("_gac_"+Cc(a),c,ca,l,a,d)));le(b)}}else J(75)}},ma=function(a,b,c,d){var e=
    nd(a,b);if(e){c=P(a,c);var g=kc(P(a,Yb)),ca=lc(P(a,W)),l=P(a,Na);if("auto"!=ca)zc(c,e,g,ca,l,d)&&(hc=!0);else{J(32);for(var k=id(),w=0;w<k.length;w++)if(ca=k[w],a.data.set(W,ca),e=nd(a,b),zc(c,e,g,ca,l,d)){hc=!0;return}a.data.set(W,"auto")}}},uc=function(a){var b=Ca(P(a,la));return Xd(a,b)},nc=function(a){if("cookie"==P(a,ac)&&!hc&&(mc(a),!hc))throw"abort";},Yc=function(a){if(a.get(Wc)){var b=P(a,W),c=P(a,$b)||xa(),d=Xc("__utma",c,b);d&&(J(19),a.set(Tc,(new Date).getTime(),!0),a.set(Rc,d.R),(b=Xc("__utmz",
    c,b))&&d.hash==b.hash&&a.set(Sc,b.R))}},nd=function(a,b){b=Cc(P(a,b));var c=lc(P(a,W)).split(".").length;a=jc(P(a,Yb));1<a&&(c+="-"+a);return b?["GA1",c,b].join("."):""},Xd=function(a,b){return na(b,P(a,W),P(a,Yb))},na=function(a,b,c){if(!a||1>a.length)J(12);else{for(var d=[],e=0;e<a.length;e++){var g=a[e];var ca=g.split(".");var l=ca.shift();("GA1"==l||"1"==l)&&1<ca.length?(g=ca.shift().split("-"),1==g.length&&(g[1]="1"),g[0]*=1,g[1]*=1,ca={H:g,s:ca.join(".")}):ca=kd.test(g)?{H:[0,0],s:g}:void 0;
    ca&&d.push(ca)}if(1==d.length)return J(13),d[0].s;if(0==d.length)J(12);else{J(14);d=Gc(d,lc(b).split(".").length,0);if(1==d.length)return d[0].s;d=Gc(d,jc(c),1);1<d.length&&J(41);return d[0]&&d[0].s}}},Gc=function(a,b,c){for(var d=[],e=[],g,ca=0;ca<a.length;ca++){var l=a[ca];l.H[c]==b?d.push(l):void 0==g||l.H[c]<g?(e=[l],g=l.H[c]):l.H[c]==g&&e.push(l)}return 0<d.length?d:e},lc=function(a){return 0==a.indexOf(".")?a.substr(1):a},id=function(){var a=[],b=xa().split(".");if(4==b.length){var c=b[b.length-
    1];if(parseInt(c,10)==c)return["none"]}for(c=b.length-2;0<=c;c--)a.push(b.slice(c).join("."));b=M.location.hostname;eb.test(b)||vc.test(b)||a.push("none");return a},kc=function(a){if(!a)return"/";1<a.length&&a.lastIndexOf("/")==a.length-1&&(a=a.substr(0,a.length-1));0!=a.indexOf("/")&&(a="/"+a);return a},jc=function(a){a=kc(a);return"/"==a?1:a.split("/").length},le=function(a){a.ta&&J(77);a.na&&J(74);a.pa&&J(73);a.ua&&J(69)};function Xc(a,b,c){"none"==b&&(b="");var d=[],e=Ca(a);a="__utma"==a?6:2;for(var g=0;g<e.length;g++){var ca=(""+e[g]).split(".");ca.length>=a&&d.push({hash:ca[0],R:e[g],O:ca})}if(0!=d.length)return 1==d.length?d[0]:Zc(b,d)||Zc(c,d)||Zc(null,d)||d[0]}function Zc(a,b){if(null==a)var c=a=1;else c=La(a),a=La(D(a,".")?a.substring(1):"."+a);for(var d=0;d<b.length;d++)if(b[d].hash==c||b[d].hash==a)return b[d]};var Jc=new RegExp(/^https?:\/\/([^\/:]+)/),De=O.google_tag_data.glBridge,Kc=/(.*)([?&#])(?:_ga=[^&#]*)(?:&?)(.*)/,od=/(.*)([?&#])(?:_gac=[^&#]*)(?:&?)(.*)/;function Bc(a){if(a.get(Ze))return J(35),De.generate($e(a));var b=P(a,Q),c=P(a,I)||"";b="_ga=2."+K(pa(c+b,0)+"."+c+"-"+b);(a=af(a))?(J(44),a="&_gac=1."+K([pa(a.qa,0),a.timestamp,a.qa].join("."))):a="";return b+a}
    function Ic(a,b){var c=new Date,d=O.navigator,e=d.plugins||[];a=[a,d.userAgent,c.getTimezoneOffset(),c.getYear(),c.getDate(),c.getHours(),c.getMinutes()+b];for(b=0;b<e.length;++b)a.push(e[b].description);return La(a.join("."))}function pa(a,b){var c=new Date,d=O.navigator,e=c.getHours()+Math.floor((c.getMinutes()+b)/60);return La([a,d.userAgent,d.language||"",c.getTimezoneOffset(),c.getYear(),c.getDate()+Math.floor(e/24),(24+e)%24,(60+c.getMinutes()+b)%60].join("."))}
    var Dc=function(a){J(48);this.target=a;this.T=!1};Dc.prototype.ca=function(a,b){if(a){if(this.target.get(Ze))return De.decorate($e(this.target),a,b);if(a.tagName){if("a"==a.tagName.toLowerCase()){a.href&&(a.href=qd(this,a.href,b));return}if("form"==a.tagName.toLowerCase())return rd(this,a)}if("string"==typeof a)return qd(this,a,b)}};
    var qd=function(a,b,c){var d=Kc.exec(b);d&&3<=d.length&&(b=d[1]+(d[3]?d[2]+d[3]:""));(d=od.exec(b))&&3<=d.length&&(b=d[1]+(d[3]?d[2]+d[3]:""));a=a.target.get("linkerParam");var e=b.indexOf("?");d=b.indexOf("#");c?b+=(-1==d?"#":"&")+a:(c=-1==e?"?":"&",b=-1==d?b+(c+a):b.substring(0,d)+c+a+b.substring(d));b=b.replace(/&+_ga=/,"&_ga=");return b=b.replace(/&+_gac=/,"&_gac=")},rd=function(a,b){if(b&&b.action)if("get"==b.method.toLowerCase()){a=a.target.get("linkerParam").split("&");for(var c=0;c<a.length;c++){var d=
    a[c].split("="),e=d[1];d=d[0];for(var g=b.childNodes||[],ca=!1,l=0;l<g.length;l++)if(g[l].name==d){g[l].setAttribute("value",e);ca=!0;break}ca||(g=M.createElement("input"),g.setAttribute("type","hidden"),g.setAttribute("name",d),g.setAttribute("value",e),b.appendChild(g))}}else"post"==b.method.toLowerCase()&&(b.action=qd(a,b.action))};
    Dc.prototype.S=function(a,b,c){function d(g){try{g=g||O.event;a:{var ca=g.target||g.srcElement;for(g=100;ca&&0<g;){if(ca.href&&ca.nodeName.match(/^a(?:rea)?$/i)){var l=ca;break a}ca=ca.parentNode;g--}l={}}("http:"==l.protocol||"https:"==l.protocol)&&sd(a,l.hostname||"")&&l.href&&(l.href=qd(e,l.href,b))}catch(k){J(26)}}var e=this;this.target.get(Ze)?De.auto(function(){return $e(e.target)},a,b?"fragment":"",c):(this.T||(this.T=!0,L(M,"mousedown",d,!1),L(M,"keyup",d,!1)),c&&L(M,"submit",function(g){g=
    g||O.event;if((g=g.target||g.srcElement)&&g.action){var ca=g.action.match(Jc);ca&&sd(a,ca[1])&&rd(e,g)}}))};function sd(a,b){if(b==M.location.hostname)return!1;for(var c=0;c<a.length;c++)if(a[c]instanceof RegExp){if(a[c].test(b))return!0}else if(0<=b.indexOf(a[c]))return!0;return!1}function ke(a,b){return b!=Ic(a,0)&&b!=Ic(a,-1)&&b!=Ic(a,-2)&&b!=pa(a,0)&&b!=pa(a,-1)&&b!=pa(a,-2)}function $e(a){var b=af(a);return{_ga:a.get(Q),_gid:a.get(I)||void 0,_gac:b?[b.qa,b.timestamp].join("."):void 0}}
    function af(a){function b(e){return void 0==e||""===e?0:Number(e)}var c=a.get(ce);if(c&&a.get(je)){var d=b(a.get(fe));if(1E3*d+b(a.get(he))<=(new Date).getTime())J(76);else return{timestamp:d,qa:c}}};var p=/^(GTM|OPT)-[A-Z0-9]+$/,q=/;_gaexp=[^;]*/g,r=/;((__utma=)|([^;=]+=GAX?\d+\.))[^;]*/g,Aa=/^https?:\/\/[\w\-.]+\.google.com(:\d+)?\/optimize\/opt-launch\.html\?.*$/,t=function(a){function(){}