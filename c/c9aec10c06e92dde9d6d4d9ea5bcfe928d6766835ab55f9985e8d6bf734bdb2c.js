var urlPart=window.location.href;function readCookieF(name){if(!document.cookie){return null}else{var cookies=document.cookie.split(";");var cookieName=name+"=";for(var i=0;i<cookies.length;i++){var cookie=cookies[i];while(cookie.charAt(0)==" "){cookie=cookie.substring(1,cookie.length)}
if(cookie.indexOf(cookieName)===0){return cookie.substring(cookieName.length,cookie.length)}}
return null}}
function setDFPCookieF(cname,cvalue,exdays){var d=new Date();d.setTime(d.getTime()+(exdays*24*60*60*1000));var expires="expires="+d.toUTCString();document.cookie=cname+"="+cvalue+";"+expires+";path=/";}
var fabrickId=readCookieF("fabrickId");if(!fabrickId){jQuery.ajax({type:"GET",dataType:"json",url:"https://fid.agkn.com/f?apiKey=2123015699&e="+NFUserInfo.email+"&i4="+NFUserInfo.ip+"",success:function(data){if(data){setDFPCookieF('fabrickId',data.fabrickId,7);}}});}
if(~urlPart.indexOf('/gallery/')){getScript("//native.sharethrough.com/assets/sfp.js");}
if(~urlPart.indexOf('/news-media/')){getScript("//native.sharethrough.com/assets/sfp.js");window._taboola=window._taboola||[];_taboola.push({article:'auto'});!function(e,f,u,i){if(!document.getElementById){e.async=1;e.src=u;e.id=i;f.parentNode.insertBefore(e,f);}}(document.createElement('script'),document.getElementsByTagName('script')[0],'http://cdn.taboola.com/libtrc/nascar-nascar/loader.js','tb_loader_script');_taboola.push({mode:'thumbnails-a',container:'taboola-below-article-thumbnails',placement:'Below Article Thumbnails',target_type:'mix'});_taboola.push({mode:'organic-thumbnails-a',container:'taboola-below-article-thumbnails-2nd',placement:'Below Article Thumbnails 2nd',target_type:'mix'});_taboola.push({flush:true});}
setTimeout(function(){getScript("https://z.moatads.com/nascarprebidheader909901596129/moatheader.js?del="+Math.random());},200);if(~urlPart.indexOf('/stn/recap/')){window._taboola=window._taboola||[];_taboola.push({article:'auto'});!function(e,f,u,i){if(!document.getElementById(i)){e.async=1;e.src=u;e.id=i;f.parentNode.insertBefore(e,f);}}(document.createElement('script'),document.getElementsByTagName('script')[0],'//cdn.taboola.com/libtrc/nascar-nascar/loader.js','tb_loader_script');if(window.performance&&typeof window.performance.mark=='function'){window.performance.mark('tbl_ic');}
window._taboola=window._taboola||[];_taboola.push({flush:true});}
if(~urlPart.indexOf('/weekend-schedule/')){window._taboola=window._taboola||[];_taboola.push({video:'auto'});!function(e,f,u,i){if(!document.getElementById){e.async=1;e.src=u;e.id=i;f.parentNode.insertBefore(e,f);}}(document.createElement('script'),document.getElementsByTagName('script')[0],'http://cdn.taboola.com/libtrc/nascar-nascar/loader.js','tb_loader_script');console.log('TTTTTTTTTT22222TTTTTTTTTTT');_taboola.push({mode:'thumbnails-a',container:'taboola-below-article-thumbnails',placement:'Below Article Thumbnails',target_type:'mix'});_taboola.push({mode:'organic-thumbnails-a',container:'taboola-below-article-thumbnails-2nd',placement:'Below Article Thumbnails 2nd',target_type:'mix'});_taboola.push({flush:true});}
if(~urlPart.indexOf('/video/')){window._taboola=window._taboola||[];_taboola.push({video:'auto'});!function(e,f,u,i){if(!document.getElementById){e.async=1;e.src=u;e.id=i;f.parentNode.insertBefore(e,f);}}
(document.createElement('script'),document.getElementsByTagName('script')[0],'http://cdn.taboola.com/libtrc/nascar-nascar/loader.js','tb_loader_script');_taboola.push({mode:'thumbnails-a',container:'taboola-below-article-thumbnails',placement:'Below Article Thumbnails',target_type:'mix'});}
if(~urlPart.indexOf('/news-media/')||~urlPart.indexOf('/news/')||~urlPart.indexOf('/video/')){getScript("https://apv-launcher.minute.ly/api/v3/launcher/MIN-80800.js");}
(function(){'use strict';var g=function(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}},l=this||self,m=/^[\w+/_-]+[=]{0,2}$/,p=null,q=function(){},r=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==b&&"undefined"==typeof a.call)return"object";return b},u=function(a,b){function c(){}c.prototype=b.prototype;a.prototype=new c;a.prototype.constructor=a};var v=function(a,b){Object.defineProperty(l,a,{configurable:!1,get:function(){return b},set:q})};var y=function(a,b){this.b=a===w&&b||"";this.a=x},x={},w={};var aa=function(a,b){a.src=b instanceof y&&b.constructor===y&&b.a===x?b.b:"type_error:TrustedResourceUrl";if(null===p)b:{b=l.document;if((b=b.querySelector&&b.querySelector("script[nonce]"))&&(b=b.nonce||b.getAttribute("nonce"))&&m.test(b)){p=b;break b}p=""}b=p;b&&a.setAttribute("nonce",b)};var z=function(){return Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^+new Date).toString(36)};var A=function(a,b){b=String(b);"application/xhtml+xml"===a.contentType&&(b=b.toLowerCase());return a.createElement(b)},B=function(a){this.a=a||l.document||document};B.prototype.appendChild=function(a,b){a.appendChild(b)};var C=function(a,b,c,d,e,f){try{var k=a.a,h=A(a.a,"SCRIPT");h.async=!0;aa(h,b);k.head.appendChild(h);h.addEventListener("load",function(){});h.addEventListener("error",function(){}