/**
 * @version 4.22.5
 * Date: 2022-06-02T23:30:48.471Z
 */
!function(){"use strict";var root,isSupported,sendBeacon,objCommon;root="object"==typeof window?window:this,isSupported="navigator"in root&&"sendBeacon"in root.navigator,sendBeacon=function(url,data){var xhr="XMLHttpRequest"in window?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP");xhr.open("POST",url,!1),xhr.withCredentials=!0,xhr.setRequestHeader("Accept","*/*"),"string"==typeof data?(xhr.setRequestHeader("Content-Type","text/plain;charset=UTF-8"),xhr.responseType="text/plain"):"[object Blob]"==={}.toString.call(data)&&data.type&&xhr.setRequestHeader("Content-Type",data.type);try{xhr.send(data)}catch(error){console.log("error sending helper beacon...")}return!0},isSupported&&(sendBeacon=navigator.sendBeacon.bind(navigator)),"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=sendBeacon),exports.sendBeacon=sendBeacon):"function"==typeof define&&define.amd?define([],function(){return sendBeacon}):isSupported||(root.navigator.sendBeacon=sendBeacon),function(){if("function"==typeof window.CustomEvent)return!1;function CustomEvent(event,params){params=params||{bubbles:!1,cancelable:!1,detail:void 0};var evt=document.createEvent("CustomEvent");return evt.initCustomEvent(event,params.bubbles,params.cancelable,params.detail),evt}CustomEvent.prototype=window.Event.prototype,window.CustomEvent=CustomEvent}(),Object.assign||Object.defineProperty(Object,"assign",{enumerable:!1,configurable:!0,writable:!0,value:function(target){if(null==target)throw new TypeError("Cannot convert first argument to object");for(var to=Object(target),i=1;i<arguments.length;i++){var nextSource=arguments[i];if(null!=nextSource){nextSource=Object(nextSource);for(var keysArray=Object.keys(nextSource),nextIndex=0,len=keysArray.length;nextIndex<len;nextIndex++){var nextKey=keysArray[nextIndex],desc=Object.getOwnPropertyDescriptor(nextSource,nextKey);void 0!==desc&&desc.enumerable&&(to[nextKey]=nextSource[nextKey])}}}return to}}),Array.prototype.reduce||Object.defineProperty(Array.prototype,"reduce",{value:function(callback){if(null===this)throw new TypeError("Array.prototype.reduce called on null or undefined");if("function"!=typeof callback)throw new TypeError(callback+" is not a function");var value,o=Object(this),len=o.length>>>0,k=0;if(2<=arguments.length)value=arguments[1];else{for(;k<len&&!(k in o);)k++;if(k>=len)throw new TypeError("Reduce of empty array with no initial value");value=o[k++]}for(;k<len;)k in o&&(value=callback(value,o[k],k,o)),k++;return value}}),Array.prototype.find||Object.defineProperty(Array.prototype,"find",{value:function(predicate){if(null==this)throw TypeError('"this" is null or not defined');var o=Object(this),len=o.length>>>0;if("function"!=typeof predicate)throw TypeError("predicate must be a function");for(var thisArg=arguments[1],k=0;k<len;){var kValue=o[k];if(predicate.call(thisArg,kValue,k,o))return kValue;k++}},configurable:!0,writable:!0}),window.CDC=window.CDC||{},CDC.Common=CDC.Common||((objCommon={}).runtime=objCommon.runtime||{},objCommon.runtime.loggingEnabled=objCommon.runtime.loggingEnabled||!1,objCommon.cleanHTML=function(content){return"function"!=typeof window.DOMPurify?content:DOMPurify.sanitize(content)},objCommon.cleanAttr=function(attribute){return String(attribute).trim().replace(/&/g,"&amp;").replace(/'/g,"&apos;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\r\n/g,"").replace(/[\r\n]/g,"")},objCommon.cleanUrl=function(targetURL,blankValue){var urlScheme,urlSchemeParseResults,sanitizedUrl,decodedUrl;if(blankValue=void 0===blankValue?"about:blank":blankValue,!targetURL)return blankValue;sanitizedUrl=String(targetURL).replace(/[^\x20-\x7E]/gim,"").replace(/[^-A-Za-z0-9+&@#/%?=~_|!:,.;\(\)]+/g,"").trim();try{decodedUrl=decodeURI(sanitizedUrl)}catch(error){return blankValue}return/<script/im.test(decodedUrl)?blankValue:(urlSchemeParseResults=sanitizedUrl.match(/^([^:]+):/gm))?(urlScheme=urlSchemeParseResults[0],/^(%20|\s)*(javascript|data)/im.test(urlScheme)?blankValue:sanitizedUrl):sanitizedUrl},objCommon.parseJSON=function(string,props){var parsedObj,safeObj={};try{return"object"==typeof(parsedObj=$.parseJSON(String(string)))&&Array.isArray(props)?props.forEach(function(prop){parsedObj.hasOwnProperty(prop)&&(safeObj[prop]=parsedObj[prop])}):safeObj=parsedObj,safeObj}catch(e){return console.info("can't parse JSON string: ",string),null}},objCommon.open=function(targetURL,targetWindow){if(targetURL=objCommon.cleanUrl(targetURL,!1))if(targetWindow){var target=targetWindow;window.open(targetURL,target)}else location.href=targetURL;else console.error("URL is blank. ",targetURL)},objCommon.loadScript=function(scripts,callback){if(Array.isArray(scripts)||(scripts=[scripts]),scripts.length){var script=scripts.shift(),eleScript=document.createElement("script"),eleHead=document.getElementsByTagName("head")[0];if((script=objCommon.cleanUrl(script,!1))&&0<script.length){eleScript.src=script;var fctLocalCallback=function(){if(objCommon.log("Loading script: "+script),!scripts.length)return void 0!==callback?(objCommon.log("Executing Callback: "+script),callback()):void objCommon.log("No Callback Provided for: "+script);CDC.Common.loadScript(scripts,callback)};eleScript.addEventListener?eleScript.addEventListener("load",fctLocalCallback,!1):eleScript.readyState&&(eleScript.onreadystatechange=fctLocalCallback),eleHead.appendChild(eleScript)}}else callback()},objCommon.loadJS=objCommon.loadScript,objCommon.isArray=function(someVar){return"[object Array]"===Object.prototype.toString.call(someVar)},objCommon.typeof=function(){}