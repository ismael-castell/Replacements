(function(){var E;function Aa(a,b){switch(b){case 0:return""+a;case 1:return 1*a;case 2:return!!a;case 3:return 1E3*a}return a}function Ba(a){return"function"==typeof a}function Ca(a){return void 0!=a&&-1<(a.constructor+"").indexOf("String")}function F(a,b){return void 0==a||"-"==a&&!b||""==a}function Da(a){if(!a||""==a)return"";for(;a&&-1<" \n\r\t".indexOf(a.charAt(0));)a=a.substring(1);for(;a&&-1<" \n\r\t".indexOf(a.charAt(a.length-1));)a=a.substring(0,a.length-1);return a}
function Ea(){return Math.round(2147483647*Math.random())}function Fa(){}function G(a,b){if(encodeURIComponent instanceof Function)return b?encodeURI(a):encodeURIComponent(a);H(68);return escape(a)}function I(a){a=a.split("+").join(" ");if(decodeURIComponent instanceof Function)try{return decodeURIComponent(a)}catch(b){H(17)}else H(68);return unescape(a)}var Ga=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)};
function Ia(a,b){if(a){var c=J.createElement("script");c.type="text/javascript";c.async=!0;c.src=a;c.id=b;var d=J.getElementsByTagName("script")[0];d.parentNode.insertBefore(c,d);return c}}function K(a){return a&&0<a.length?a[0]:""}function L(a){var b=a?a.length:0;return 0<b?a[b-1]:""}var Bd=function(){this.prefix="ga.";this.values={}};Bd.prototype.set=function(a,b){this.values[this.prefix+a]=b};Bd.prototype.get=function(a){return this.values[this.prefix+a]};
Bd.prototype.contains=function(a){return void 0!==this.get(a)};function Ka(a){0==a.indexOf("www.")&&(a=a.substring(4));return a.toLowerCase()}
function La(a,b){var c,d={url:a,protocol:"http",host:"",path:"",R:new Bd,anchor:""};if(!a)return d;c=a.indexOf("://");0<=c&&(d.protocol=a.substring(0,c),a=a.substring(c+3));c=a.search("/|\\?|#");if(0<=c)d.host=a.substring(0,c).toLowerCase(),a=a.substring(c);else return d.host=a.toLowerCase(),d;c=a.indexOf("#");0<=c&&(d.anchor=a.substring(c+1),a=a.substring(0,c));c=a.indexOf("?");0<=c&&(Na(d.R,a.substring(c+1)),a=a.substring(0,c));d.anchor&&b&&Na(d.R,d.anchor);a&&"/"==a.charAt(0)&&(a=a.substring(1));
d.path=a;return d}
function Oa(a,b){function c(a){var b=(a.hostname||"").split(":")[0].toLowerCase(),c=(a.protocol||"").toLowerCase(),c=1*a.port||("http:"==c?80:"https:"==c?443:"");a=a.pathname||"";0==a.indexOf("/")||(a="/"+a);return[b,""+c,a]}var d=b||J.createElement("a");d.href=J.location.href;var e=(d.protocol||"").toLowerCase(),f=c(d),Be=d.search||"",n=e+"//"+f[0]+(f[1]?":"+f[1]:"");0==a.indexOf("//")?a=e+a:0==a.indexOf("/")?a=n+a:a&&0!=a.indexOf("?")?0>a.split("/")[0].indexOf(":")&&(a=n+f[2].substring(0,f[2].lastIndexOf("/"))+
"/"+a):a=n+f[2]+(a||Be);d.href=a;e=c(d);return{protocol:(d.protocol||"").toLowerCase(),host:e[0],port:e[1],path:e[2],Oa:d.search||"",url:a||""}}function Na(a,b){function c(b,c){a.contains(b)||a.set(b,[]);a.get(b).push(c)}for(var d=Da(b).split("&"),e=0;e<d.length;e++)if(d[e]){var f=d[e].indexOf("=");0>f?c(d[e],"1"):c(d[e].substring(0,f),d[e].substring(f+1))}}
function Pa(a,b){if(F(a)||"["==a.charAt(0)&&"]"==a.charAt(a.length-1))return"-";var c=J.domain;return a.indexOf(c+(b&&"/"!=b?b:""))==(0==a.indexOf("http://")?7:0==a.indexOf("https://")?8:0)?"0":a};var Qa=0;function Ra(a,b,c){1<=Qa||1<=100*Math.random()||ld()||(a=["utmt=error","utmerr="+a,"utmwv=5.6.7dc","utmn="+Ea(),"utmsp=1"],b&&a.push("api="+b),c&&a.push("msg="+G(c.substring(0,100))),M.w&&a.push("aip=1"),Sa(a.join("&")),Qa++)};var Ta=0,Ua={};function N(a){return Va("x"+Ta++,a)}function Va(a,b){Ua[a]=!!b;return a}
var Wa=N(),Xa=Va("anonymizeIp"),Ya=N(),$a=N(),ab=N(),bb=N(),O=N(),P=N(),cb=N(),db=N(),eb=N(),fb=N(),gb=N(),hb=N(),ib=N(),jb=N(),kb=N(),lb=N(),nb=N(),ob=N(),pb=N(),qb=N(),rb=N(),sb=N(),tb=N(),ub=N(),vb=N(),wb=N(),xb=N(),yb=N(),zb=N(),Ab=N(),Bb=N(),Cb=N(),Db=N(),Eb=N(),Fb=N(!0),Gb=Va("currencyCode"),Hb=Va("page"),Ib=Va("title"),Jb=N(),Kb=N(),Lb=N(),Mb=N(),Nb=N(),Ob=N(),Pb=N(),Qb=N(),Rb=N(),Q=N(!0),Sb=N(!0),Tb=N(!0),Ub=N(!0),Vb=N(!0),Wb=N(!0),Zb=N(!0),$b=N(!0),ac=N(!0),bc=N(!0),cc=N(!0),R=N(!0),dc=N(!0),
ec=N(!0),fc=N(!0),gc=N(!0),hc=N(!0),ic=N(!0),jc=N(!0),S=N(!0),kc=N(!0),lc=N(!0),mc=N(!0),nc=N(!0),oc=N(!0),pc=N(!0),qc=N(!0),rc=Va("campaignParams"),sc=N(),tc=Va("hitCallback"),uc=N();N();var vc=N(),wc=N(),xc=N(),yc=N(),zc=N(),Ac=N(),Bc=N(),Cc=N(),Dc=N(),Ec=N(),Fc=N(),Gc=N(),Hc=N(),Ic=N();N();var Mc=N(),Nc=N(),jf=N(),Yb=N(),kf=N(),lf=Va("utmtCookieName"),mf=Va("displayFeatures"),Oc=N(),Ie=Va("gtmid"),Ne=Va("uaName"),Oe=Va("uaDomain"),Pe=Va("uaPath"),Je=Va("linkid");var Qe=function(){function a(a,c,d){T(gf.prototype,a,c,d)}a("_createTracker",gf.prototype.hb,55);a("_getTracker",gf.prototype.oa,0);a("_getTrackerByName",gf.prototype.u,51);a("_getTrackers",gf.prototype.pa,130);a("_anonymizeIp",gf.prototype.aa,16);a("_forceSSL",gf.prototype.la,125);a("_getPlugin",Pc,120)},Re=function(){function(){}