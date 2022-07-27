gapi.loaded_2(function(_){var window=this;
_.Jq=function(a){this.O=a};_.g=_.Jq.prototype;_.g.aG=function(a){this.O.anchor=a;return this};_.g.Yh=function(){return this.O.anchor};_.g.pz=_.ca(6);_.g.Ad=function(a){this.O.height=a;return this};_.g.Dc=function(){return this.O.height};_.g.re=function(a){this.O.width=a;return this};_.g.Rb=function(){return this.O.width};_.Kq=function(a,b){a.O.where=b;return a};_.Lq=function(a){a.O.connectWithQueryParams=!0;return a};_.Mq=function(){_.fj.apply(this,arguments)};_.J(_.Mq,_.fj);

/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var is;is=function(a){return(a=a.exec(_.mb()))?a[1]:""};_.js=function(){if(_.Tg)return is(/Firefox\/([0-9.]+)/);if(_.dd||_.ed||_.cd)return _.wd;if(_.Xg){if(_.Bb()||_.ob("Macintosh")){var a=is(/CriOS\/([0-9.]+)/);if(a)return a}return is(/Chrome\/([0-9.]+)/)}if(_.Yg&&!_.Bb())return is(/Version\/([0-9.]+)/);if(_.Ug||_.Vg){if(a=/Version\/(\S+).*Mobile\/(\S+)/.exec(_.mb()))return a[1]+"."+a[2]}else if(_.Wg)return(a=is(/Android\s+([0-9.]+)/))?a:is(/Version\/([0-9.]+)/);return""}();

/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var ns;_.ks=function(a,b,c,d){this.left=a;this.top=b;this.width=c;this.height=d};_.g=_.ks.prototype;_.g.clone=function(){return new _.ks(this.left,this.top,this.width,this.height)};_.g.UD=_.ca(7);_.g.intersects=function(a){return this.left<=a.left+a.width&&a.left<=this.left+this.width&&this.top<=a.top+a.height&&a.top<=this.top+this.height};
_.g.contains=function(a){return a instanceof _.lr?a.x>=this.left&&a.x<=this.left+this.width&&a.y>=this.top&&a.y<=this.top+this.height:this.left<=a.left&&this.left+this.width>=a.left+a.width&&this.top<=a.top&&this.top+this.height>=a.top+a.height};_.g.distance=function(a){var b=a.x<this.left?this.left-a.x:Math.max(a.x-(this.left+this.width),0);a=a.y<this.top?this.top-a.y:Math.max(a.y-(this.top+this.height),0);return Math.sqrt(b*b+a*a)};_.g.getSize=function(){return new _.mr(this.width,this.height)};
_.g.getCenter=function(){return new _.lr(this.left+this.width/2,this.top+this.height/2)};_.g.ceil=function(){this.left=Math.ceil(this.left);this.top=Math.ceil(this.top);this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};_.g.floor=function(){this.left=Math.floor(this.left);this.top=Math.floor(this.top);this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
_.g.round=function(){this.left=Math.round(this.left);this.top=Math.round(this.top);this.width=Math.round(this.width);this.height=Math.round(this.height);return this};_.g.translate=function(a,b){a instanceof _.lr?(this.left+=a.x,this.top+=a.y):(this.left+=a,"number"===typeof b&&(this.top+=b));return this};_.g.scale=function(a,b){b="number"===typeof b?b:a;this.left*=a;this.width*=a;this.top*=b;this.height*=b;return this};_.ls=function(a){return _.Pr(a,"position")};
_.ms=function(a,b){a=a.style;"opacity"in a?a.opacity=b:"MozOpacity"in a?a.MozOpacity=b:"filter"in a&&(a.filter=""===b?"":"alpha(opacity="+100*Number(b)+")")};ns=function(a,b){return(b=_.Or(a,b))?_.fs(a,b):0};_.os=function(a,b){if(_.dd){var c=ns(a,b+"Left"),d=ns(a,b+"Right"),e=ns(a,b+"Top");a=ns(a,b+"Bottom");return new _.Jr(e,d,a,c)}c=_.Nr(a,b+"Left");d=_.Nr(a,b+"Right");e=_.Nr(a,b+"Top");a=_.Nr(a,b+"Bottom");return new _.Jr(parseFloat(e),parseFloat(d),parseFloat(a),parseFloat(c))};
_.ps=function(){if(_.kd){var a=/Windows NT ([0-9.]+)/;return(a=a.exec(_.mb()))?a[1]:"0"}return _.jd?(a=/1[0|1][_.][0-9_.]+/,(a=a.exec(_.mb()))?a[0].replace(/_/g,"."):"10"):_.md?(a=/Android\s+([^\);]+)(\)|;)/,(a=a.exec(_.mb()))?a[1]:""):_.nd||_.od||_.pd?(a=/(?:iPhone|CPU)\s+OS\s+(\S+)/,(a=a.exec(_.mb()))?a[1].replace(/_/g,"."):""):""}();

/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var Ws;_.Us=_.dd?_.gc(_.Zb('javascript:""')):_.gc(_.Zb("about:blank"));_.Vs=_.cc(_.Us);Ws=_.dd?_.gc(_.Zb('javascript:""')):_.gc(_.Zb("javascript:undefined"));_.cc(Ws);

/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
_.GC=function(a){var b=arguments.length;if(1==b&&Array.isArray(arguments[0]))return _.GC.apply(null,arguments[0]);for(var c={},d=0;d<b;d++)c[arguments[d]]=!0;return c};
var HC;
_.GC("A AREA BUTTON HEAD INPUT LINK MENU META OPTGROUP OPTION PROGRESS STYLE SELECT SOURCE TEXTAREA TITLE TRACK".split(" "));_.IC=function(a,b){b?a.setAttribute("role",b):a.removeAttribute("role")};
_.JC=function(a,b,c){Array.isArray(c)&&(c=c.join(" "));var d="aria-"+b;""===c||void 0==c?(HC||(c={},HC=(c.atomic=!1,c.autocomplete="none",c.dropeffect="none",c.haspopup=!1,c.live="off",c.multiline=!1,c.multiselectable=!1,c.orientation="vertical",c.readonly=!1,c.relevant="additions text",c.required=!1,c.sort="none",c.busy=!1,c.disabled=!1,c.hidden=!1,c.invalid="false",c)),c=HC,b in c?a.setAttribute(d,c[b]):a.removeAttribute(d)):a.setAttribute(d,c)};
_.KC=function(a,b){a=a.getAttribute("aria-"+b);return null==a||void 0==a?"":String(a)};_.LC=function(a,b){var c="";b&&(c=b.id);_.JC(a,"activedescendant",c)};

/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var MC,NC;MC=function(a){return"string"==typeof a.className?a.className:a.getAttribute&&a.getAttribute("class")||""};NC=function(a){return a.classList?a.classList:MC(a).match(/\S+/g)||[]};_.OC=function(a,b){"string"==typeof a.className?a.className=b:a.setAttribute&&a.setAttribute("class",b)};_.PC=function(a,b){return a.classList?a.classList.contains(b):_.hb(NC(a),b)};_.QC=function(a,b){if(a.classList)a.classList.add(b);else if(!_.PC(a,b)){var c=MC(a);_.OC(a,c+(0<c.length?" "+b:b))}};
_.RC=function(a,b){if(a.classList)Array.prototype.forEach.call(b,function(e){_.QC(a,e)});else{var c={};Array.prototype.forEach.call(NC(a),function(e){c[e]=!0});Array.prototype.forEach.call(b,function(e){c[e]=!0});b="";for(var d in c)b+=0<b.length?" "+d:d;_.OC(a,b)}};_.SC=function(a,b){a.classList?a.classList.remove(b):_.PC(a,b)&&_.OC(a,Array.prototype.filter.call(NC(a),function(c){return c!=b}).join(" "))};
_.TC=function(a,b){a.classList?Array.prototype.forEach.call(b,function(c){_.SC(a,c)}):_.OC(a,Array.prototype.filter.call(NC(a),function(c){return!_.hb(b,c)}).join(" "))};_.UC=function(a,b,c){c?_.QC(a,b):_.SC(a,b)};

/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
_.dD=function(a,b){b.parentNode&&b.parentNode.insertBefore(a,b.nextSibling)};

/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
_.VC=function(a,b){b in a&&delete a[b]};_.cj.prototype.Dz=_.bb(3,function(a){this.gF=a});_.WC=function(a){a.Mm=void 0;a.Pa=function(){return a.Mm?a.Mm:a.Mm=new a}};_.XC=function(a,b){b?a.tabIndex=0:(a.tabIndex=-1,a.removeAttribute("tabIndex"))};_.YC=function(){};_.WC(_.YC);_.YC.prototype.Ls=0;
_.$C=function(a){_.cj.call(this);this.Ib=a||_.Od();this.Wy=ZC;this.Ba=null;this.Ya=!1;this.W=null;this.Dk=void 0;this.Pg=this.Jc=this.Ab=this.mp=null};_.Za(_.$C,_.cj);_.$C.prototype.h_=_.YC.Pa();var ZC=null;_.g=_.$C.prototype;_.g.getId=function(){return this.Ba||(this.Ba=":"+(this.h_.Ls++).toString(36))};_.g.qe=function(a){this.Ab&&this.Ab.Pg&&(_.VC(this.Ab.Pg,this.Ba),_.ys(this.Ab.Pg,a,this));this.Ba=a};_.g.N=function(){return this.W};_.g.lb=function(){this.Dk||(this.Dk=new _.Bs(this));return this.Dk};
_.g.Hb=function(a){if(this==a)throw Error("La");if(a&&this.Ab&&this.Ba&&this.Ab.Dr(this.Ba)&&this.Ab!=a)throw Error("La");this.Ab=a;_.$C.H.Dz.call(this,a)};_.g.getParent=function(){return this.Ab};_.g.Dz=function(a){if(this.Ab&&this.Ab!=a)throw Error("Ma");_.$C.H.Dz.call(this,a)};_.g.Ea=function(){return this.Ib};_.g.ma=function(){this.W=this.Ib.createElement("DIV")};_.g.ua=function(a){this.ln(a)};
_.g.ln=function(a,b){if(this.Ya)throw Error("Na");this.W||this.ma();a?a.insertBefore(this.W,b||null):this.Ib.$a().body.appendChild(this.W);this.Ab&&!this.Ab.Ya||this.jc()};_.g.jc=function(){this.Ya=!0;_.aD(this,function(a){!a.Ya&&a.N()&&a.jc()})};_.g.Hd=function(){_.aD(this,function(a){a.Ya&&a.Hd()});this.Dk&&this.Dk.removeAll();this.Ya=!1};
_.g.na=function(){this.Ya&&this.Hd();this.Dk&&(this.Dk.Ga(),delete this.Dk);_.aD(this,function(a){a.Ga()});this.W&&_.ae(this.W);this.Ab=this.mp=this.W=this.Pg=this.Jc=null;_.$C.H.na.call(this)};_.g.Eo=_.ca(20);_.g.Zp=_.ca(21);_.g.Il=_.ca(22);_.g.Ui=_.ca(23);_.g.Oa=function(){return this.W};_.g.wn=_.ca(24);_.g.Dr=function(a){if(this.Pg&&a){var b=this.Pg;a=(null!==b&&a in b?b[a]:void 0)||null}else a=null;return a};_.bD=function(a,b){return a.Jc?a.Jc[b]||null:null};
_.aD=function(a,b,c){a.Jc&&a.Jc.forEach(b,c)};_.$C.prototype.removeChild=function(a,b){if(a){var c="string"===typeof a?a:a.getId();a=this.Dr(c);c&&a&&(_.VC(this.Pg,c),_.si(this.Jc,a),b&&(a.Hd(),a.W&&_.ae(a.W)),a.Hb(null))}if(!a)throw Error("Pa");return a};_.cD=function(a,b,c){return a.removeChild(_.bD(a,b),c)};_.$C.prototype.Td=function(a){for(var b=[];this.Jc&&0!=this.Jc.length;)b.push(_.cD(this,0,a));return b};

_.RG=function(a,b){Object.isFrozen(a)||(_.QG?a[_.QG]|=b:void 0!==a.nx?a.nx|=b:Object.defineProperties(a,{nx:{value:b,configurable:!0,writable:!0,enumerable:!1}}))};_.SG=function(a){_.RG(a,1);return a};
_.TG="undefined"!==typeof Uint8Array;
_.QG="function"===typeof Symbol&&"symbol"===typeof Symbol()?Symbol(void 0):void 0;
_.UG=Object.freeze(_.SG([]));_.VG="undefined"!=typeof Symbol&&"undefined"!=typeof Symbol.hasInstance;

var aH,fH,hH,jH,iH,kH,lH,mH,qH,sH,XG,ZG,uH,EH;_.WG=function(a){return _.TG&&null!=a&&a instanceof Uint8Array};_.YG=function(a){if(null==a||_.WG(a))return a;if("string"===typeof a)return XG(a);_.Db(a);return null};_.$G=function(){if(ZG!==ZG)throw Error("Va");};aH=function(a){a=_.QG?a[_.QG]:a.nx;return null==a?0:a};_.bH=function(a){return Array.isArray(a)?!!(aH(a)&1):!1};_.cH=function(a){return Array.isArray(a)?!!(aH(a)&2):!1};_.dH=function(a){if(!Array.isArray(a))throw Error("Ya");_.RG(a,2)};
_.eH=function(a){return null!==a&&"object"===typeof a&&!Array.isArray(a)&&a.constructor===Object};fH=function(a){return{value:a,configurable:!1,writable:!1,enumerable:!1}};hH=function(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "object":if(a&&!Array.isArray(a)){if(_.WG(a))return _.dh(a);if("function"==typeof _.gH&&a instanceof _.gH){var b=a.tb;null!=b&&"string"!==typeof b&&(_.TG&&b instanceof Uint8Array?b=_.dh(b):(_.Db(b),b=null));return(a.tb=b)||""}}}return a};
jH=function(a,b){if(null!=a){if(Array.isArray(a))a=iH(a,b);else if(_.eH(a)){var c={},d;for(d in a)c[d]=jH(a[d],b);a=c}else a=b(a);return a}};iH=function(a,b){for(var c=a.slice(),d=0;d<c.length;d++)c[d]=jH(c[d],b);_.bH(a)&&_.SG(c);return c};kH=function(a){return _.WG(a)?new Uint8Array(a):a};lH=function(a,b){b=void 0===b?kH:b;return iH(a,b)};mH=function(){}