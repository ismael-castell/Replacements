(()=>{var t={9916:(t,e,r)=>{"use strict";function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){if(null==t)return{};var r,n,i=function(t,e){if(null==t)return{};var r,n,i={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(i[r]=t[r]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function s(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}r(1466),r(6059),r(9357),r(5115),r(7476),r(6253),r(6997),r(1181),r(2773),r(9371),r(3403),r(1246),r(6331),r(6108),r(3369),r(1876),r(9730),r(4564),r(2850),r(5767),r(8837),r(4882),r(4336),r(8351),r(7470),r(8388),t=r.hmd(t),function(e,n){var a="object"==("undefined"==typeof self?"undefined":o(self))&&self.self===self&&self||"object"==(void 0===r.g?"undefined":o(r.g))&&r.g.global===r.g&&r.g||this||{};if(!a.a_p_l||!a.addelv_player){var c=function(t){function e(){}function r(){var e=t.location.protocol;"file:"===e&&(e="http:"),this.url=e+"//de.as.pptv.com/webdelivery/webafp",this.uid=c.getUID(),this.id="addelv_player",this.className="addelv_player",this.update={},this.options={ap:[],ct:"json",referrer:document.referrer,o:"",pageUrl:location.href,username:"",skeyword:"",callback:"jsonp"+this.uid}}function n(t,e){this.core=t,this.key=e;var r=this.getTarget(e);r.parent&&(this.$parent=r.parent),this.$el=r.target,this.ad=this.core.ads[e],this.dataset=this.core.dataset,this.api={http:"http://show.g.mediav.com/s",https:"https://show-g.mediav.com/s"},this.params={type:1,of:4,newf:2,showids:"",refurl:document.referrer,uid:this.core.uid,scheme:"",jsonp:"callback"+this.core.uid},this.init()}e.prototype={path:"//mediamax.suning.com/adssp/sdk/images/",style:".addelv_player img{cursor:pointer;vertical-align:top;}.addelv_player .hide{opacity:0;position:absolute;z-index:-1;visibility:hidden;width:0;height:0;}.addelv_player_close{position:absolute;top:5px;right:5px;width:23px;height:23px;z-index:1;background-image:url(//mediamax.suning.com/adssp/sdk/images/close.png);background-size:23px 23px;background-repeat:no-repeat;cursor:pointer;}.addelv_player_carousel:hover .carousel-icon{opacity:1;z-index:11;}.addelv_player_carousel .carousel-icon{width:30px;position:absolute;top:0;bottom:0;opacity:0;background-size:30px;background-repeat:no-repeat;background-position:center center;background-color:#7f7f7f;cursor:pointer;}.addelv_player_preview{position:absolute;z-index:10;width:0;height:100%;overflow:hidden;transition:width 0.4s ease 0s;}.addelv_player_preview.addelv_player_preview_show{width:100%;}.addelv_player_carousel ul{margin:0;padding:0;}.addelv_player_carousel .addelv_player_items{margin-left:-20px;overflow:hidden;transition:left 0.4s ease 0s;position:relative;left:0;}.addelv_player_carousel li{list-style:none;}.feed__wrapper .singleImage .feed__link{padding:0 !important;}.textual{font-size:14px;}.textual .textual__body .adTag{display:none !important;}.textual .textual__title{padding:0 10px !important;}.textual .feed__link{display:inline-block !important;max-width:66.666666%;vertical-align:top;}.addelv_palyer_textual{display:table-cell;vertical-align:middle;background-repeat:no-repeat;background-position:center;}.addelv_palyer_textual_right .textual__body{text-align:right;}.addelv_palyer_textual_word_break .textual__title{height:auto !important;text-overflow:inherit !important;white-space:inherit !important;}.addelv_player_ad_tag{position:absolute;bottom:5px;opacity:0.95;background:rgba(0,0,0,0.64);width:32px;height:20px;line-height:20px;text-align:center;font-size:10px;color:#979993;font-style:normal;}#A_D_QIHOO_USER_ID{width:0;height:0;border:0;visibility:hidden;}",getDataset:function(t){if(t.dataset)return t.dataset;for(var e,r=t.attributes,n={},i=0;i<r.length;i++)(e=r[i].name.match(/^data-(.+)/))&&(n[e[1].replace(/-([\da-z])/gi,(function(t,e){return e.toUpperCase()}))]=r[i].value);return n},assign:function(t,e){if(null==t)throw new Error("Cannot convert undefined or null to object");if("[object Function]"===toString.call(Object.assign))return Object.assign(t,e);var r=Object(t);if(null!=e)for(var n in e)e.hasOwnProperty(n)&&(r[n]=e[n]);return r},isArray:function(t){return"[object Array]"===toString.call(t)},isFunction:function(t){return"[object Function]"===toString.call(t)},isObject:function(t){return"[object Object]"===toString.call(t)},isjQuery:function(e){return(t.jQuery||t.$)&&e instanceof(t.jQuery||t.$)&&this.isObject(e)},keys:Object.keys,isEmpty:function(t){return 0===this.keys(t).length},URLencode:function(t){var e="";for(var r in t){var n=t[r];c.isFunction(n)||(c.isArray(t[r])&&(n=t[r].join("_")),e+="&"+r+"="+n)}return e.substr(1)},unique:function(t){for(var e=[],r=0,n=t.length;r<n;r++)e.includes(t[r])||e.push(t[r]);return e},jsonp:function(e,r,n){t[r.callback||r.jsonp]=function(t){n&&n(t),o.removeChild(i)};var i=document.createElement("script");i.type="text/javascript",i.src=e+"?"+this.URLencode(r),o.appendChild(i)},reporting:function(t,e,r){var n=this,i=new XMLHttpRequest;i.open("GET",e,!0),i.send(),i.onload=r||function(e){n.info("Report over",t+" for xhr")}},reportingForJsonp:function(t,e,r){var n=this,i=new Image;i.onload=i.onerror=function(){n.info("Report over",t+" for jsonp"),a.removeChild(i),r&&r()},i.src=e,a.appendChild(i)},parse:function(t){if(!t)return t;try{t=JSON.parse(t)}catch(t){}return t},getHash:function(t){var e,r=1,n=0;if(t)for(r=0,e=t.length-1;e>=0;e--)r=0!=(n=266338304&(r=(r<<6&268435455)+(n=t.charCodeAt(e))+(n<<14)))?r^n>>21:r;return r},getUID:function(){return(""+this.getHash(t.location.href)+this.getHash(document.domain)+(new Date-0)+Math.floor(1e3*Math.random())).substr(0,32)},attr:function(t,e){for(var r in e)t.setAttribute?t.setAttribute(r,e[r]):t.key=e[r];return this},css:function(t,e){if(this.isObject(e))return this.keys(e).map((function(r){(e[r]||Number.isFinite(e[r]))&&(t.style.cssText+=r+":"+e[r])})),this},conversion:function(t,e,r){var n,i=e.$el,o=e.$parent||i.parentNode;return(t=t.toString()).indexOf("%")>-1&&(n=o.offsetWidth,t=parseFloat(t)/100*n),r?parseFloat(t)+r:parseFloat(t)},getJsName:function(t){var e,r;return r=(r=(e=t.split("?")[0].split("#")[0].split("/"))[e.length-1]).split(".")[0],this.getJsFunName(r)},getJsFunName:function(t){var e;t=t.split("_");for(var r=0;r<t.length;r++)e=t[r],t[r]=e.substring(0,1).toUpperCase()+e.substring(1);return t.join("To")},trim:function(t){return t.replace(/(^\s*)|(\s*$)/g,"")},empty:function(t){for(;t.firstChild;)t.removeChild(t.firstChild)},update:function(t){for(var e=0;e<a_p_l.length;e++)a_p_l[e].id===t&&a_p_l[e].handleResizeChange()},info:function(t,e){console.log("%c "+t+": %c "+e,"padding: 1px; border-radius: 3px 0 0 3px; color: #fff; background: #606060;","padding: 1px 10px 1px 1px; border-radius: 0 3px 3px 0; color: #fff; background: #42c02e;")},timeout:null,debounce:function(t,e){return function(){for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];null!==c.timeout&&c._clearTimeout(),c.timeout=setTimeout((function(){t.apply(void 0,n)}),e||500)}},_clearTimeout:function(){clearTimeout(c.timeout)}},r.prototype.init=function(t,e){var r;c.isjQuery(t)?r=t:this.id=t,c.assign(this.options,e),this.options.ap=[],this.ap=[],this.reset(r),this.getAdList()},r.prototype.getSizeType=function(){var t=document.documentElement.clientWidth;if(t>1920)return 1921;for(var e=[1e3,1040,1260,1320,1560,1610,1920],r=0;r<e.length;r++)if(t-e[r]<=0)return e[r]},r.prototype.handleListener=function(){var t=this,e=document.documentElement,r=this.getSizeType(),n="orientationchange"in window?"orientationchange":"resize";e.addEventListener&&"360KP"!==this.type&&!this.isNotResize&&window.addEventListener(n,(function(){var n=t.getSizeType();e.clientWidth&&r!==n&&(r=n,t.handleResizeChange(r),console.log(r))}),!1)},r.prototype.handleResizeChange=function(){if("360KP"!==this.layout.type)for(var t in this.update)this.update[t]&&c.isFunction(this.update[t])&&this.update[t]()},r.prototype.reset=function(t){var e;t||(t=this.getElements(this.id)),this.handleInitClass(t[0]),this.$els={},this.dataset={};for(var r=0;r<t.length;r++){var n=t[r];e=this.getAttrData(n),this.id=e.adSolt,this.options.ap.push(e.adSolt),this.ap=this.ap.concat(e.adSolt.split("_")),this.setElements(e.adSolt,n),e.hasOwnProperty("adClose")&&this.renderClose(n)}},r.prototype.handleInitClass=function(t){~(t||{}).className.indexOf(this.className)||(t.className=this.className+" "+t.className)},r.prototype.getElements=function(t){return[document.querySelector('[data-ad-solt="'+t+'"]')]},r.prototype.setElements=function(t,e){var r=t.split("_");if(1!==r.length){this.$els={};for(var n=0;n<r.length;n++)this.$els[r[n]]={target:e.querySelector("[solt='"+r[n]+"']"),parent:e}}else this.$els=e},r.prototype.getAttrData=function(t){var e,r,n=c.getDataset(t),i=n.adSolt.split("_");if(1===i.length)return this.dataset=n,n;this.dataset={};for(var o=0;o<i.length;o++)e=t.querySelector("[solt='"+i[o]+"']"),(r=c.getDataset(e)).adSolt=i[o],this.dataset[i[o]]=r;return n},r.prototype.getAdList=function(){!this.$els||c.isObject(this.$els)&&c.isEmpty(this.$els)||c.jsonp(this.url,this.options,this.callback.bind(this))},r.prototype.callback=function(t){this.ads=t||{},this.eachAd()},r.prototype.eachAd=function(){this.jsSource=[];for(var t=0;t<this.ap.length;t++){var e=this.ap[t],r=!1;this.ads[e]?r=this.resetData(e):this.onfailCallback({key:e}),r&&this.setLayout(e)}this.renderForJs(),this.renderInitStyle(),this.handleListener()},r.prototype.renderInitStyle=function(){if(!document.getElementById("A_D_QIHOO_FEED_CSS")){var t=document.createElement("style");c.attr(t,{id:"A_D_QIHOO_FEED_CSS"}),t.innerHTML=c.style,document.head.appendChild(t)}},r.prototype.getDataSet=function(t){return this.dataset[t]?this.dataset[t]:this.dataset},r.prototype.resetData=function(t){if(c.isArray(this.ads[t]))return this.type="TOUCHBANNER",!0;var e=this.getMaterial(t),r=this.getDataSet(t);return e.type=e.type.toUpperCase(),this.isNotResize=!!Number(e.text["not-resize"]),this.ads[t].material=e,c.assign(e,r),"360JS"!==e.type&&"JS"!==e.type||(e.text.jsSource=c.trim(e.text.jsSource),this.jsSource.push(e.text.jsSource),this.jsSource=c.unique(this.jsSource),!1)},r.prototype.getMaterial=function(t){var e=this.ads[t].material,r=e[0],n=r;return r.text=c.parse(r.text),2===e.length&&~e[0].type.indexOf("JS")?(r.text?r=e[1]:(n=e[1]).text=c.parse(n.text),"textual"===n.text.inject&&(n.src=r.src),n):r},r.prototype.setLayout=function(t){this.layout=new n(this,t)},r.prototype.renderClose=function(t){if(t||(t=this.$els),t.style){var e=document.createElement("i");c.path,e.alert="close",e.className="addelv_player_close",c.css(t,{position:"relative"}),t.appendChild(e),this.$close=e,e.addEventListener("click",this.handleClose.bind(this,t),!1)}},r.prototype.handleClose=function(t,e){t.remove();var r=c.getDataset(t).adSolt.split("_");if(!r.length)return e.stopImmediatePropagation(),!1;if(1===r.length)return this.update[r[0]]="",e.stopImmediatePropagation(),!1;for(var n=0;n<r.length;n++)this.update[r[n]]="";e.stopImmediatePropagation()},r.prototype.renderForJs=function(){}