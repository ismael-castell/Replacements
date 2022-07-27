gapi.loaded_2(function(_){var window=this;
_.Fq=function(a){this.O=a};_.g=_.Fq.prototype;_.g.HG=function(a){this.O.anchor=a;return this};_.g.ti=function(){return this.O.anchor};_.g.Qz=_.ca(6);_.g.Ed=function(a){this.O.height=a;return this};_.g.Gc=function(){return this.O.height};_.g.ye=function(a){this.O.width=a;return this};_.g.Ub=function(){return this.O.width};_.g.setZIndex=function(a){this.O.zIndex=a;return this};_.g.getZIndex=function(){return this.O.zIndex};_.Gq=function(a,b){a.O.where=b;return a};
_.Hq=function(a){a.O.connectWithQueryParams=!0;return a};_.Iq=function(){_.aj.apply(this,arguments)};_.J(_.Iq,_.aj);

/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var ds;ds=function(a){return(a=a.exec(_.mb()))?a[1]:""};_.es=function(){if(_.Qg)return ds(/Firefox\/([0-9.]+)/);if(_.ad||_.bd||_.$c)return _.td;if(_.Ug){if(_.Bb()||_.ob("Macintosh")){var a=ds(/CriOS\/([0-9.]+)/);if(a)return a}return ds(/Chrome\/([0-9.]+)/)}if(_.Vg&&!_.Bb())return ds(/Version\/([0-9.]+)/);if(_.Rg||_.Sg){if(a=/Version\/(\S+).*Mobile\/(\S+)/.exec(_.mb()))return a[1]+"."+a[2]}else if(_.Tg)return(a=ds(/Android\s+([0-9.]+)/))?a:ds(/Version\/([0-9.]+)/);return""}();

/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var is;_.fs=function(a,b,c,d){this.left=a;this.top=b;this.width=c;this.height=d};_.g=_.fs.prototype;_.g.clone=function(){return new _.fs(this.left,this.top,this.width,this.height)};_.g.yE=_.ca(7);_.g.intersects=function(a){return this.left<=a.left+a.width&&a.left<=this.left+this.width&&this.top<=a.top+a.height&&a.top<=this.top+this.height};
_.g.contains=function(a){return a instanceof _.gr?a.x>=this.left&&a.x<=this.left+this.width&&a.y>=this.top&&a.y<=this.top+this.height:this.left<=a.left&&this.left+this.width>=a.left+a.width&&this.top<=a.top&&this.top+this.height>=a.top+a.height};_.g.distance=function(a){var b=a.x<this.left?this.left-a.x:Math.max(a.x-(this.left+this.width),0);a=a.y<this.top?this.top-a.y:Math.max(a.y-(this.top+this.height),0);return Math.sqrt(b*b+a*a)};_.g.getSize=function(){return new _.hr(this.width,this.height)};
_.g.getCenter=function(){return new _.gr(this.left+this.width/2,this.top+this.height/2)};_.g.ceil=function(){this.left=Math.ceil(this.left);this.top=Math.ceil(this.top);this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};_.g.floor=function(){this.left=Math.floor(this.left);this.top=Math.floor(this.top);this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
_.g.round=function(){this.left=Math.round(this.left);this.top=Math.round(this.top);this.width=Math.round(this.width);this.height=Math.round(this.height);return this};_.g.translate=function(a,b){a instanceof _.gr?(this.left+=a.x,this.top+=a.y):(this.left+=a,"number"===typeof b&&(this.top+=b));return this};_.g.scale=function(a,b){b="number"===typeof b?b:a;this.left*=a;this.width*=a;this.top*=b;this.height*=b;return this};_.gs=function(a){return _.Kr(a,"position")};
_.hs=function(a,b){a=a.style;"opacity"in a?a.opacity=b:"MozOpacity"in a?a.MozOpacity=b:"filter"in a&&(a.filter=""===b?"":"alpha(opacity="+100*Number(b)+")")};is=function(a,b){return(b=_.Jr(a,b))?_.as(a,b):0};_.js=function(a,b){if(_.ad){var c=is(a,b+"Left"),d=is(a,b+"Right"),e=is(a,b+"Top");a=is(a,b+"Bottom");return new _.Er(e,d,a,c)}c=_.Ir(a,b+"Left");d=_.Ir(a,b+"Right");e=_.Ir(a,b+"Top");a=_.Ir(a,b+"Bottom");return new _.Er(parseFloat(e),parseFloat(d),parseFloat(a),parseFloat(c))};
_.ks=function(){if(_.hd){var a=/Windows NT ([0-9.]+)/;return(a=a.exec(_.mb()))?a[1]:"0"}return _.gd?(a=/1[0|1][_.][0-9_.]+/,(a=a.exec(_.mb()))?a[0].replace(/_/g,"."):"10"):_.jd?(a=/Android\s+([^\);]+)(\)|;)/,(a=a.exec(_.mb()))?a[1]:""):_.kd||_.ld||_.md?(a=/(?:iPhone|CPU)\s+OS\s+(\S+)/,(a=a.exec(_.mb()))?a[1].replace(/_/g,"."):""):""}();

/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var Rs;_.Ps=_.ad?_.fc(_.Yb('javascript:""')):_.fc(_.Yb("about:blank"));_.Qs=_.bc(_.Ps);Rs=_.ad?_.fc(_.Yb('javascript:""')):_.fc(_.Yb("javascript:undefined"));_.bc(Rs);

/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
_.AC=function(a){var b=arguments.length;if(1==b&&Array.isArray(arguments[0]))return _.AC.apply(null,arguments[0]);for(var c={},d=0;d<b;d++)c[arguments[d]]=!0;return c};
var BC;
_.AC("A AREA BUTTON HEAD INPUT LINK MENU META OPTGROUP OPTION PROGRESS STYLE SELECT SOURCE TEXTAREA TITLE TRACK".split(" "));_.CC=function(a,b){b?a.setAttribute("role",b):a.removeAttribute("role")};
_.DC=function(a,b,c){Array.isArray(c)&&(c=c.join(" "));var d="aria-"+b;""===c||void 0==c?(BC||(c={},BC=(c.atomic=!1,c.autocomplete="none",c.dropeffect="none",c.haspopup=!1,c.live="off",c.multiline=!1,c.multiselectable=!1,c.orientation="vertical",c.readonly=!1,c.relevant="additions text",c.required=!1,c.sort="none",c.busy=!1,c.disabled=!1,c.hidden=!1,c.invalid="false",c)),c=BC,b in c?a.setAttribute(d,c[b]):a.removeAttribute(d)):a.setAttribute(d,c)};
_.EC=function(a,b){a=a.getAttribute("aria-"+b);return null==a||void 0==a?"":String(a)};_.FC=function(a,b){var c="";b&&(c=b.id);_.DC(a,"activedescendant",c)};

/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var GC,HC;GC=function(a){return"string"==typeof a.className?a.className:a.getAttribute&&a.getAttribute("class")||""};HC=function(a){return a.classList?a.classList:GC(a).match(/\S+/g)||[]};_.IC=function(a,b){"string"==typeof a.className?a.className=b:a.setAttribute&&a.setAttribute("class",b)};_.JC=function(a,b){return a.classList?a.classList.contains(b):_.hb(HC(a),b)};_.KC=function(a,b){if(a.classList)a.classList.add(b);else if(!_.JC(a,b)){var c=GC(a);_.IC(a,c+(0<c.length?" "+b:b))}};
_.LC=function(a,b){if(a.classList)Array.prototype.forEach.call(b,function(e){_.KC(a,e)});else{var c={};Array.prototype.forEach.call(HC(a),function(e){c[e]=!0});Array.prototype.forEach.call(b,function(e){c[e]=!0});b="";for(var d in c)b+=0<b.length?" "+d:d;_.IC(a,b)}};_.MC=function(a,b){a.classList?a.classList.remove(b):_.JC(a,b)&&_.IC(a,Array.prototype.filter.call(HC(a),function(c){return c!=b}).join(" "))};
_.NC=function(a,b){a.classList?Array.prototype.forEach.call(b,function(c){_.MC(a,c)}):_.IC(a,Array.prototype.filter.call(HC(a),function(c){return!_.hb(b,c)}).join(" "))};_.OC=function(a,b,c){c?_.KC(a,b):_.MC(a,b)};

/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
_.YC=function(a,b){b.parentNode&&b.parentNode.insertBefore(a,b.nextSibling)};

/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
_.PC=function(a,b){b in a&&delete a[b]};_.Yi.prototype.dA=_.bb(3,function(a){this.MF=a});_.QC=function(a){a.bn=void 0;a.Qa=function(){return a.bn?a.bn:a.bn=new a}};_.RC=function(a,b){b?a.tabIndex=0:(a.tabIndex=-1,a.removeAttribute("tabIndex"))};_.SC=function(){};_.QC(_.SC);_.SC.prototype.it=0;
_.UC=function(a){_.Yi.call(this);this.Lb=a||_.Ld();this.xz=TC;this.Ca=null;this.Za=!1;this.W=null;this.Pk=void 0;this.Xg=this.Mc=this.Db=this.Kp=null};_.Za(_.UC,_.Yi);_.UC.prototype.g0=_.SC.Qa();var TC=null;_.g=_.UC.prototype;_.g.getId=function(){return this.Ca||(this.Ca=":"+(this.g0.it++).toString(36))};_.g.xe=function(a){this.Db&&this.Db.Xg&&(_.PC(this.Db.Xg,this.Ca),_.ts(this.Db.Xg,a,this));this.Ca=a};_.g.N=function(){return this.W};_.g.ob=function(){this.Pk||(this.Pk=new _.ws(this));return this.Pk};
_.g.Jb=function(a){if(this==a)throw Error("La");if(a&&this.Db&&this.Ca&&this.Db.Wr(this.Ca)&&this.Db!=a)throw Error("La");this.Db=a;_.UC.H.dA.call(this,a)};_.g.getParent=function(){return this.Db};_.g.dA=function(a){if(this.Db&&this.Db!=a)throw Error("Ma");_.UC.H.dA.call(this,a)};_.g.Fa=function(){return this.Lb};_.g.na=function(){this.W=this.Lb.createElement("DIV")};_.g.va=function(a){this.En(a)};
_.g.En=function(a,b){if(this.Za)throw Error("Na");this.W||this.na();a?a.insertBefore(this.W,b||null):this.Lb.lb().body.appendChild(this.W);this.Db&&!this.Db.Za||this.mc()};_.g.mc=function(){this.Za=!0;_.VC(this,function(a){!a.Za&&a.N()&&a.mc()})};_.g.Ld=function(){_.VC(this,function(a){a.Za&&a.Ld()});this.Pk&&this.Pk.removeAll();this.Za=!1};
_.g.ta=function(){this.Za&&this.Ld();this.Pk&&(this.Pk.Ha(),delete this.Pk);_.VC(this,function(a){a.Ha()});this.W&&_.Yd(this.W);this.Db=this.Kp=this.W=this.Xg=this.Mc=null;_.UC.H.ta.call(this)};_.g.Vo=_.ca(20);_.g.vq=_.ca(21);_.g.Vl=_.ca(22);_.g.fj=_.ca(23);_.g.Pa=function(){return this.W};_.g.Mn=_.ca(24);_.g.Wr=function(a){if(this.Xg&&a){var b=this.Xg;a=(null!==b&&a in b?b[a]:void 0)||null}else a=null;return a};_.WC=function(a,b){return a.Mc?a.Mc[b]||null:null};
_.VC=function(a,b,c){a.Mc&&a.Mc.forEach(b,c)};_.UC.prototype.removeChild=function(a,b){if(a){var c="string"===typeof a?a:a.getId();a=this.Wr(c);c&&a&&(_.PC(this.Xg,c),_.ni(this.Mc,a),b&&(a.Ld(),a.W&&_.Yd(a.W)),a.Jb(null))}if(!a)throw Error("Pa");return a};_.XC=function(a,b,c){return a.removeChild(_.WC(a,b),c)};_.UC.prototype.Xd=function(a){for(var b=[];this.Mc&&0!=this.Mc.length;)b.push(_.XC(this,0,a));return b};

_.LG=function(a,b){Object.isFrozen(a)||(_.KG?a[_.KG]|=b:void 0!==a.fn?a.fn|=b:Object.defineProperties(a,{fn:{value:b,configurable:!0,writable:!0,enumerable:!1}}))};_.MG=function(a){_.LG(a,1);return a};
_.NG="undefined"!==typeof Uint8Array;
_.KG="function"===typeof Symbol&&"symbol"===typeof Symbol()?Symbol(void 0):void 0;
_.OG=Object.freeze(_.MG([]));_.PG="undefined"!=typeof Symbol&&"undefined"!=typeof Symbol.hasInstance;

var VG,YG,$G,aH,dH,fH,eH,gH,hH,iH,lH,nH,sH,RG,TG,rH,uH,vH,DH;_.QG=function(a){return _.NG&&null!=a&&a instanceof Uint8Array};_.SG=function(a){if(null==a||_.QG(a))return a;if("string"===typeof a)return RG(a);_.Db(a);return null};_.UG=function(){if(TG!==TG)throw Error("Wa");};VG=function(a){a=_.KG?a[_.KG]:a.fn;return null==a?0:a};_.WG=function(a){return Array.isArray(a)?!!(VG(a)&1):!1};_.XG=function(a){return Array.isArray(a)?!!(VG(a)&2):!1};
YG=function(a){if(!Array.isArray(a))throw Error("Ya");_.LG(a,2)};_.ZG=function(a,b){if(!Array.isArray(a))throw Error("$a");b?_.LG(a,8):Object.isFrozen(a)||(_.KG?a[_.KG]&=-9:void 0!==a.fn&&(a.fn&=-9))};$G=function(a){return null!==a&&"object"===typeof a&&!Array.isArray(a)&&a.constructor===Object};aH=function(a){return{value:a,configurable:!1,writable:!1,enumerable:!1}};_.bH=function(a,b,c){c=void 0===c?!1:c;if(Array.isArray(a))return new b(a);if(c)return new b};
dH=function(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "object":if(a&&!Array.isArray(a)){if(_.QG(a))return _.ah(a);if(a instanceof _.cH){var b=a.yb;null!=b&&"string"!==typeof b&&(_.NG&&b instanceof Uint8Array?b=_.ah(b):(_.Db(b),b=null));return null==b?"":a.yb=b}}}return a};fH=function(a,b){if(null!=a){if(Array.isArray(a))a=eH(a,b);else if($G(a)){var c={},d;for(d in a)c[d]=fH(a[d],b);a=c}else a=b(a);return a}};
eH=function(a,b){for(var c=a.slice(),d=0;d<c.length;d++)c[d]=fH(c[d],b);_.WG(a)&&_.MG(c);return c};gH=function(a){return _.QG(a)?new Uint8Array(a):a};hH=function(a,b){b=void 0===b?gH:b;return eH(a,b)};iH=function(){}