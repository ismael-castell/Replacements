(function(){var rro=rro||{};window.rroa=function(){return a};var a=[];function rroLog(message){a.push({timestamp:Date.now(),message:message})}var isTenantized=false;var tenant="honey";function tenantizeName(input){if(isTenantized){return input+"-"+tenant}return input}function sendBeacon(data,rouid,ts){var url=window.location.href;data=ts+":"+data;var input={};input.url=url;input.data=data;input.roId=rouid;var httpRequest=new XMLHttpRequest();httpRequest.withCredentials=true;httpRequest.crossDomain=true;httpRequest.open("POST","https://r0.joinhoney.com/w/a");httpRequest.setRequestHeader("Accept","application/json");httpRequest.setRequestHeader("Content-Type","application/json");httpRequest.send(JSON.stringify(input))}var keylogErrorSent=false;function sendBeaconTime(tdTime,rouid){var currentTime=Date.now();var input={};input.url=window.location.href;input.data=tdTime+":"+currentTime;input.roId=rouid;if(keylogger&&keylogger.getLog){input.keylog=btoa(encodeURIComponent(JSON.stringify(keylogger.getLog())))}else{if(!keylogErrorSent){sendError("keylogger is missing. roId: "+rouid);keylogErrorSent=true}}if(rroGetCookieValue("sdid")){input.sdid=rroGetCookieValue("sdid")}if(rroGetCookieValue("fdid")){input.fdid=rroGetCookieValue("fdid")}if(rro.f){input.f=rro.f}if(rro.ips){input.ips=JSON.stringify(rro.ips);input.wrd=rro.wrd}var httpRequest=new XMLHttpRequest();httpRequest.withCredentials=true;httpRequest.crossDomain=true;httpRequest.open("POST","https://r0.joinhoney.com/w/p");httpRequest.setRequestHeader("Accept","application/json");httpRequest.setRequestHeader("Content-Type","application/json");httpRequest.send(JSON.stringify(input))}var ticks=0;var currentPingTime=1500;function sendBeaconTimeIntvl(tdtime,rouid){ticks++;if(ticks<=numTicks){sendBeaconTime(tdTime,rouid)}else{ticks=0;clearInterval(intvl);currentPingTime=currentPingTime*1.75;intvl=window.setInterval(sendBeaconTimeIntvl,currentPingTime,tdTime,rouid)}}function isEmpty(str){return(!str||0===str.length)}function decode(s){return decodeURIComponent(s.replace(/\+/g," "))}function rroGetCookieValue(key){var cookieValue=null;var tenantizedKey=tenantizeName(key);var cookies=document.cookie.split("; ");for(var i=0,parts;(parts=cookies[i]&&cookies[i].split("="));i++){if(decode(parts.shift())===tenantizedKey){if(!isEmpty(parts)){cookieValue=decode(parts.join("="))}}}if(!validCookie(cookieValue)){rroSetCookieValue(key,cookieValue)}return cookieValue}function partial(func){var args=Array.prototype.slice.call(arguments,1);return function(){var allArguments=args.concat(Array.prototype.slice.call(arguments));return func.apply(this,allArguments)}}var numTicks=1;var tdTime=Date.now();var rouid="6fbe90c1-24b4-4b1c-bb54-4b5153a4ecb4";var currentId=rouid;var sbtP=partial(sendBeaconTime,tdTime,rouid);window.addEventListener("pagehide",sbtP);window.addEventListener("unload",sbtP);window.addEventListener("beforeunload",sbtP);var intvl=window.setInterval(sendBeaconTimeIntvl,1500,tdTime,rouid);if(typeof(Storage)!=="undefined"){currentId=localStorage.getItem(tenantizeName("rouid"));if(!currentId){localStorage.setItem(tenantizeName("rouid"),rouid);currentId=rouid}}var obj={};obj.browserCodeName=navigator.appCodeName;obj.browserName=navigator.appName;obj.browserVersion=navigator.appVersion;obj.browserCookiesEnabled=navigator.cookieEnabled;obj.browserLanguage=navigator.language;obj.browserOnline=navigator.onLine;obj.browserPlatform=navigator.platform;obj.browserUserAgentHeader=navigator.userAgent;obj.windowURL=window.location.href;obj.windowAvailHeight=window.screen.availHeight;obj.windowAvailWidth=window.screen.availWidth;obj.rouid=rouid;obj.tz=new Date().getTimezoneOffset();obj.localStorageId=currentId;obj.referrer=document.referrer;obj.screenHeight=window.screen.height;obj.screenWidth=window.screen.width;obj.screenColorDepth=window.screen.colorDepth;var navStr="";if(navigator.mimeTypes&&navigator.mimeTypes.length>0){var mimes=navigator.mimeTypes;for(var i=0;i<mimes.length;i++){navStr+=mimes[i].type+" : "+mimes[i].description+"|"}}obj.navStr=navStr;var pluginsStr="";if(navigator.plugins&&navigator.plugins.length>0){var plugins=navigator.plugins;for(var i=0;i<plugins.length;i++){pluginsStr+=plugins[i].name+"|"}}obj.pluginsStr=pluginsStr;obj.javaEnabled=navigator.javaEnabled;obj.timeToCompute=0;sendBeacon(JSON.stringify(obj),rouid,"a4bf26ce6e074490e416e34e3b91b335071055366c925e125bf67aacaca428c1");findIP();function sendError(message){var postData={message:message};postAjax("https://r0.joinhoney.com/w/e",postData)}var keylogger=(function(){var log={};var noIds=[];var registrations=[];var excludeList=[];function logKeyEvent(e){var registrationMatch=getMatchingRegistration(e);if(registrationMatch){var elId=getName(e.target);if(!log[elId]){log[elId]=new Array()}log[elId].push(new KeyEventObject(e))}}function getMatchingRegistration(e){if(!e.target){return null}if(!e.target.getAttribute){return null}var len=registrations.length;for(var i=0;i<len;i++){if(e.target.getAttribute(registrations[i].attribute)==registrations[i].value||(registrations[i].includeChildren&&hasParent(e.target,registrations[i].attribute,registrations[i].value))){var len2=excludeList.length;for(var j=0;j<len2;j++){if(e.target.getAttribute(excludeList[j].attribute)==excludeList[j].value||(excludeList[j].includeChildren&&hasParent(e.target,excludeList[j].attribute,excludeList[j].value))){return null}}return registrations[i]}}return null}function hasParent(el,attribute,value){if(el.getAttribute(attribute)==value){return true}if(el.parentElement){return hasParent(el.parentElement,attribute,value)}return false}function getNoIdName(el){var length=noIds.length;for(var i=0;i<length;i++){if(noIds[i].el==el){return noIds[i].name}}return""}function setNoIdName(el){var i=1;while(noIdsContains(el.tagName+i)){i++}noIds.push({name:el.tagName+i,el:el});return el.tagName+i}function noIdsContains(name){var length=noIds.length;for(var i=0;i<length;i++){if(noIds[i].name==name){return true}}return false}function(){}