function BOOMR_check_doc_domain(t){if(!t){if(window.parent===window||!document.getElementById("boomr-if-as"))return;t=document.domain}if(-1!==t.indexOf(".")){try{return void window.parent.document}catch(e){document.domain=t}try{return void window.parent.document}catch(e){t=t.replace(/^[\w\-]+\./,"")}BOOMR_check_doc_domain(t)}}BOOMR_start=(new Date).getTime(),BOOMR_check_doc_domain(),function(d){var u,t,l,e,o,a,n,i,r;(d.parent!==d&&document.getElementById("boomr-if-as")&&"script"===document.getElementById("boomr-if-as").nodeName.toLowerCase()&&(d=d.parent,e=document.getElementById("boomr-if-as").src),l=d.document,d.BOOMR||(d.BOOMR={}),BOOMR=d.BOOMR,BOOMR.version)||(BOOMR.version="0.9.1433512298",BOOMR.window=d,BOOMR.plugins||(BOOMR.plugins={}),function(){try{void 0!==new d.CustomEvent("CustomEvent")&&(o=function(e,t){return new d.CustomEvent(e,t)})}catch(e){}try{!o&&l.createEvent&&l.createEvent("CustomEvent")&&(o=function(e,t){var n=l.createEvent("CustomEvent");return t=t||{cancelable:!1,bubbles:!1},n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),n})}catch(e){}!o&&l.createEventObject&&(o=function(e,t){var n=l.createEventObject();return n.type=n.propertyName=e,n.detail=t.detail,n}),o||(o=function(){})}(),a=function(e,t,n){var r=o(e,{detail:t});function i(){l.dispatchEvent?l.dispatchEvent(r):l.fireEvent&&l.fireEvent("onpropertychange",r)}r&&(n?BOOMR.setImmediate(i):i())},void 0!==document.hidden?(n="visibilityState",i="visibilitychange"):void 0!==document.mozHidden?(n="mozVisibilityState",i="mozvisibilitychange"):void 0!==document.msHidden?(n="msVisibilityState",i="msvisibilitychange"):void 0!==document.webkitHidden&&(n="webkitVisibilityState",i="webkitvisibilitychange"),u={beacon_url:"",beacon_type:"AUTO",site_domain:d.location.hostname.replace(/.*?([^.]+\.[^.]+)\.?$/,"$1").toLowerCase(),user_ip:"",strip_query_string:!1,onloadfired:!1,handlers_attached:!1,events:{page_ready:[],page_unload:[],before_unload:[],dom_loaded:[],visibility_changed:[],before_beacon:[],onbeacon:[],xhr_load:[],click:[],form_submit:[]},public_events:{before_beacon:"onBeforeBoomerangBeacon",onbeacon:"onBoomerangBeacon",onboomerangloaded:"onBoomerangLoaded"},vars:{},errors:{},disabled_plugins:{},xb_handler:function(n){return function(e){var t;e||(e=d.event),e.target?t=e.target:e.srcElement&&(t=e.srcElement),3===t.nodeType&&(t=t.parentNode),t&&"OBJECT"===t.nodeName.toUpperCase()&&"application/x-shockwave-flash"===t.type||u.fireEvent(n,t)}},fireEvent:function(t,e){var n,r,i;if(t=t.toLowerCase(),!this.events.hasOwnProperty(t))return!1;for(this.public_events.hasOwnProperty(t)&&a(this.public_events[t],e),i=this.events[t],n=0;n<i.length;n++)try{(r=i[n]).fn.call(r.scope,e,r.cb_data)}catch(e){BOOMR.addError(e,"fireEvent."+t+"<"+n+">")}return!0}},t={t_lstart:null,t_start:BOOMR_start,t_end:null,url:e,utils:{objectToString:function(e,t,n){var r,i=[];if(!e||"object"!=typeof e)return e;if(void 0===t&&(t="\n\t"),n||(n=0),"[object Array]"===Object.prototype.toString.call(e)){for(r=0;r<e.length;r++)0<n&&null!==e[r]&&"object"==typeof e[r]?i.push(this.objectToString(e[r],t+("\n\t"===t?"\t":""),n-1)):"&"===t?i.push(encodeURIComponent(e[r])):i.push(e[r]);t=","}else for(r in e)Object.prototype.hasOwnProperty.call(e,r)&&(0<n&&null!==e[r]&&"object"==typeof e[r]?i.push(encodeURIComponent(r)+"="+this.objectToString(e[r],t+("\n\t"===t?"\t":""),n-1)):"&"===t?i.push(encodeURIComponent(r)+"="+encodeURIComponent(e[r])):i.push(r+"="+e[r]));return i.join(t)},getCookie:function(e){return e?(e=" "+e+"=",0<=(t=(n=" "+l.cookie+";").indexOf(e))?(t+=e.length,n=n.substring(t,n.indexOf(";",t))):null):null;var t,n},setCookie:function(e,t,n){var r,i,o,a,s;if(!e||!u.site_domain)return BOOMR.debug("No cookie name or site domain: "+e+"/"+u.site_domain),!1;if(a=[i=e+"="+(r=this.objectToString(t,"&")),"path=/","domain="+u.site_domain],n&&((s=new Date).setTime(s.getTime()+1e3*n),s=s.toGMTString(),a.push("expires="+s)),i.length<500){if(l.cookie=a.join("; "),r===(o=this.getCookie(e)))return!0;BOOMR.warn("Saved cookie value doesn't match what we tried to set:\n"+r+"\n"+o)}else BOOMR.warn("Cookie too long: "+i.length+" "+i);return!1},getSubCookies:function(e){var t,n,r,i,o=!1,a={};if(!e)return null;if("string"!=typeof e)return BOOMR.debug("TypeError: cookie is not a string: "+typeof e),null;for(n=0,r=(t=e.split("&")).length;n<r;n++)(i=t[n].split("="))[0]&&(i.push(""),a[decodeURIComponent(i[0])]=decodeURIComponent(i[1]),o=!0);return o?a:null},removeCookie:function(){},cleanupURL:function(e){return e?u.strip_query_string?e.replace(/\?.*/,"?qs-redacted"):e:""},hashQueryString:function(e,t){return e?e.match?(e.match(/^\/\//)&&(e=location.protocol+e),e.match(/^(https?|file):/)?(t&&(e=e.replace(/#.*/,"")),BOOMR.utils.MD5?e.replace(/\?([^#]*)/,function(){}):e):(BOOMR.error("Passed in URL is invalid: "+e),"")):(BOOMR.addError("TypeError: Not a string","hashQueryString",typeof e),""):e},pluginConfig:function(e,t,n,r){var i,o=0;if(!t||!t[n])return!1;for(i=0;i<r.length;i++)void 0!==t[n][r[i]]&&(e[r[i]]=t[n][r[i]],o++);return 0<o},addObserver:function(e,t,n,r,i,o){var a={observer:null,timer:null};if(!window.MutationObserver||!r||!e)return null;function s(e){var t=!1;a.timer&&(clearTimeout(a.timer),a.timer=null),r&&((t=r.call(o,e,i))||(r=null)),!t&&a.observer&&(a.observer.disconnect(),a.observer=null),"number"==typeof t&&0<t&&(a.timer=setTimeout(s,t))}return a.observer=new MutationObserver(s),n&&(a.timer=setTimeout(s,a.timeout)),a.observer.observe(e,t),a},addListener:function(e,t,n){e.addEventListener?e.addEventListener(t,n,!1):e.attachEvent&&e.attachEvent("on"+t,n)},removeListener:function(e,t,n){e.removeEventListener?e.removeEventListener(t,n,!1):e.detachEvent&&e.detachEvent("on"+t,n)},pushVars:function(e,t,n){var r,i,o,a=0;for(r in t)if(t.hasOwnProperty(r))if("[object Array]"===Object.prototype.toString.call(t[r]))for(i=0;i<t[r].length;++i)a+=BOOMR.utils.pushVars(e,t[r][i],r+"["+i+"]");else(o=document.createElement("input")).type="hidden",o.name=n?n+"["+r+"]":r,o.value=void 0===t[r]||null===t[r]?"":t[r],e.appendChild(o),a+=encodeURIComponent(o.name).length+encodeURIComponent(o.value).length+2;return a},sendData:function(r,e){document.createElement("input");var i=[u.beacon_url];function o(e){var t=document.getElementById(e);t&&t.parentNode.removeChild(t)}r.method=e,r.id="beacon_form",r.enctype="application/x-www-form-urlencoded",u.secondary_beacons&&u.secondary_beacons.length&&i.push.apply(i,u.secondary_beacons),function e(){var t,n="boomerang_post-"+encodeURIComponent(r.action)+"-"+Math.random();try{t=document.createElement('<iframe name="'+n+'">')}catch(e){t=document.createElement("iframe")}r.action=i.shift(),r.target=t.name=t.id=n,t.style.display=r.style.display="none",t.src="javascript:false",o(t.id),o(r.id),document.body.appendChild(t),document.body.appendChild(r),r.submit(),i.length&&BOOMR.setImmediate(e),setTimeout(function(){o(t.id)},1e4)}()}},init:function(e){var t,n,r=["beacon_url","beacon_type","site_domain","user_ip","strip_query_string","secondary_beacons"];for(BOOMR_check_doc_domain(),e||(e={}),t=0;t<r.length;t++)void 0!==e[r[t]]&&(u[r[t]]=e[r[t]]);for(n in void 0!==e.log&&(this.log=e.log),this.log||(this.log=function(){}),this.plugins)if(this.plugins.hasOwnProperty(n)){if(e[n]&&e[n].hasOwnProperty("enabled")&&!1===e[n].enabled){u.disabled_plugins[n]=1;continue}if(u.disabled_plugins[n]){if(!e[n]||!e[n].hasOwnProperty("enabled")||!0!==e[n].enabled)continue;delete u.disabled_plugins[n]}if("function"==typeof this.plugins[n].init)try{this.plugins[n].init(e)}catch(e){BOOMR.addError(e,n+".init")}}return u.handlers_attached||(u.onloadfired||void 0!==e.autorun&&!1===e.autorun||(l.readyState&&"complete"===l.readyState?(BOOMR.loadedLate=!0,this.setImmediate(BOOMR.page_ready,null,null,BOOMR)):d.onpagehide||null===d.onpagehide?BOOMR.utils.addListener(d,"pageshow",BOOMR.page_ready):BOOMR.utils.addListener(d,"load",BOOMR.page_ready)),BOOMR.utils.addListener(d,"DOMContentLoaded",function(){u.fireEvent("dom_loaded")}),function(){var e,t;for(void 0!==i&&(BOOMR.utils.addListener(l,i,function(){u.fireEvent("visibility_changed")}),BOOMR.subscribe("visibility_changed",function(){BOOMR.lastVisibilityEvent[BOOMR.visibilityState()]=BOOMR.now()})),BOOMR.utils.addListener(l,"mouseup",u.xb_handler("click")),e=l.getElementsByTagName("form"),t=0;t<e.length;t++)BOOMR.utils.addListener(e[t],"submit",u.xb_handler("form_submit"));d.onpagehide||null===d.onpagehide||BOOMR.utils.addListener(d,"unload",function(){})}(),u.handlers_attached=!0),this},page_ready:function(e){return e||(e=d.event),e||(e={name:"load"}),u.onloadfired||(u.fireEvent("page_ready",e),u.onloadfired=!0),this},setImmediate:function(e,t,n,r){var i=function(){e.call(r||null,t,n||{}),i=null};d.setImmediate?d.setImmediate(i):d.msSetImmediate?d.msSetImmediate(i):d.webkitSetImmediate?d.webkitSetImmediate(i):d.mozSetImmediate?d.mozSetImmediate(i):setTimeout(i,10)},now:function(){try{if("performance"in window&&window.performance&&window.performance.now)return function(){return Math.round(window.performance.now()+window.performance.timing.navigationStart)}}catch(e){}return Date.now||function(){return(new Date).getTime()}}(),visibilityState:void 0===n?function(){return"visible"}:function(){return l[n]},lastVisibilityEvent:{},subscribe:function(e,t,n,r){var i,o,a,s;if(e=e.toLowerCase(),!u.events.hasOwnProperty(e))return this;for(a=u.events[e],i=0;i<a.length;i++)if((o=a[i])&&o.fn===t&&o.cb_data===n&&o.scope===r)return this;return a.push({fn:t,cb_data:n||{},scope:r||null}),"page_ready"===e&&u.onloadfired&&this.setImmediate(t,null,n,r),"page_unload"!==e&&"before_unload"!==e||(s=function(e){t&&t.call(r,e||d.event,n)},"page_unload"===e&&(d.onpagehide||null===d.onpagehide?BOOMR.utils.addListener(d,"pagehide",s):BOOMR.utils.addListener(d,"unload",s)),BOOMR.utils.addListener(d,"beforeunload",s)),this},addError:function(e,t,n){var r;"string"!=typeof e&&((r=String(e)).match(/^\[object/)&&(r=e.name+": "+(e.description||e.message).replace(/\r\n$/,"")),e=r),void 0!==t&&(e="["+t+":"+BOOMR.now()+"] "+e),n&&(e+=":: "+n),u.errors[e]?u.errors[e]++:u.errors[e]=1},addVar:function(e,t){if("string"==typeof e)u.vars[e]=t;else if("object"==typeof e){var n,r=e;for(n in r)r.hasOwnProperty(n)&&(u.vars[n]=r[n])}return this},removeVar:function(e){var t,n;if(!arguments.length)return this;for(n=1===arguments.length&&"[object Array]"===Object.prototype.toString.apply(e)?e:arguments,t=0;t<n.length;t++)u.vars.hasOwnProperty(n[t])&&delete u.vars[n[t]];return this},hasVar:function(e){return u.vars.hasOwnProperty(e)},requestStart:function(t){var n=BOOMR.now();return BOOMR.plugins.RT.startTimer("xhr_"+t,n),{loaded:function(e){BOOMR.responseEnd(t,n,e)}}},responseEnd:function(e,t,n){"object"==typeof e&&e.url?u.fireEvent("xhr_load",e):(BOOMR.plugins.RT.startTimer("xhr_"+e,t),u.fireEvent("xhr_load",{name:"xhr_"+e,data:n}))},sendBeacon:function(){var e,t,n,r=[];for(e in BOOMR.debug("Checking if we can send beacon"),this.plugins)if(this.plugins.hasOwnProperty(e)){if(u.disabled_plugins[e])continue;if(!this.plugins[e].is_complete())return BOOMR.debug("Plugin "+e+" is not complete, deferring beacon send"),!1}for(e in u.vars.pgu=BOOMR.utils.cleanupURL(l.URL.replace(/#.*/,"")),u.vars.u||(u.vars.u=u.vars.pgu),u.vars.pgu===u.vars.u&&delete u.vars.pgu,u.vars.v=BOOMR.version,BOOMR.visibilityState()&&(u.vars["vis.st"]=BOOMR.visibilityState(),BOOMR.lastVisibilityEvent.visible&&(u.vars["vis.lv"]=BOOMR.now()-BOOMR.lastVisibilityEvent.visible),BOOMR.lastVisibilityEvent.hidden&&(u.vars["vis.lh"]=BOOMR.now()-BOOMR.lastVisibilityEvent.hidden)),d!==window&&(u.vars.if=""),u.errors)u.errors.hasOwnProperty(e)&&r.push(e+(1<u.errors[e]?" (*"+u.errors[e]+")":""));return 0<r.length&&(u.vars.errors=r.join("\n")),u.errors={},u.fireEvent("before_beacon",u.vars),BOOMR.debug("Ready to send beacon: "+BOOMR.utils.objectToString(u.vars)),u.beacon_url?(t=document.createElement("form"),n=BOOMR.utils.pushVars(t,u.vars),u.fireEvent("onbeacon",u.vars),n?(BOOMR.utils.sendData(t,"AUTO"===u.beacon_type?2e3<n?"POST":"GET":"POST"),!0):this):(BOOMR.debug("No beacon URL, so skipping."),!0)}},delete BOOMR_start,"number"==typeof BOOMR_lstart?(t.t_lstart=BOOMR_lstart,delete BOOMR_lstart):"number"==typeof BOOMR.window.BOOMR_lstart&&(t.t_lstart=BOOMR.window.BOOMR_lstart),"object"==typeof console&&void 0!==console.log&&(t.log=function(e,t,n){console.log(n+": ["+t+"] "+e)}),r=function(n){return function(e,t){return this.log(e,n,"boomerang"+(t?"."+t:"")),this}},t.debug=r("debug"),t.info=r("info"),t.warn=r("warn"),t.error=r("error"),function(){}