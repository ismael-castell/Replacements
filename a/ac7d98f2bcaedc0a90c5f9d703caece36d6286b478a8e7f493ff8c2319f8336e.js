(self.webpackChunktradingview=self.webpackChunktradingview||[]).push([[35268],{546322:(t,e,s)=>{var i,o,a;o=[s(823127)],void 0===(a="function"==typeof(i=function(t){var e,s,i=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],o="onwheel"in document||document.documentMode>=9?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],a=Array.prototype.slice;if(t.event.fixHooks)for(var r=i.length;r;)t.event.fixHooks[i[--r]]=t.event.mouseHooks;var n=t.event.special.mousewheel={version:"3.1.12",setup:function(){if(this.addEventListener)for(var e=o.length;e;)this.addEventListener(o[--e],l,!1);else this.onmousewheel=l;t.data(this,"mousewheel-line-height",n.getLineHeight(this)),t.data(this,"mousewheel-page-height",n.getPageHeight(this))},teardown:function(){if(this.removeEventListener)for(var e=o.length;e;)this.removeEventListener(o[--e],l,!1);else this.onmousewheel=null;t.removeData(this,"mousewheel-line-height"),t.removeData(this,"mousewheel-page-height")},getLineHeight:function(e){var s=t(e),i=s["offsetParent"in t.fn?"offsetParent":"parent"]();return i.length||(i=t("body")),parseInt(i.css("fontSize"),10)||parseInt(s.css("fontSize"),10)||16},getPageHeight:function(e){return t(e).height()},settings:{adjustOldDeltas:!0,normalizeOffset:!0}};function l(i){var o=i||window.event,r=a.call(arguments,1),l=0,c=0,m=0,g=0,u=0,p=0;if((i=t.event.fix(o)).type="mousewheel","detail"in o&&(m=-1*o.detail),"wheelDelta"in o&&(m=o.wheelDelta),"wheelDeltaY"in o&&(m=o.wheelDeltaY),"wheelDeltaX"in o&&(c=-1*o.wheelDeltaX),"axis"in o&&o.axis===o.HORIZONTAL_AXIS&&(c=-1*m,m=0),l=0===m?c:m,"deltaY"in o&&(l=m=-1*o.deltaY),"deltaX"in o&&(c=o.deltaX,0===m&&(l=-1*c)),0!==m||0!==c){if(1===o.deltaMode){var _=t.data(this,"mousewheel-line-height");l*=_,m*=_,c*=_}else if(2===o.deltaMode){var b=t.data(this,"mousewheel-page-height");l*=b,m*=b,c*=b}if(g=Math.max(Math.abs(m),Math.abs(c)),(!s||g<s)&&(s=g,d(o,g)&&(s/=40)),d(o,g)&&(l/=40,c/=40,m/=40),l=Math[l>=1?"floor":"ceil"](l/s),c=Math[c>=1?"floor":"ceil"](c/s),m=Math[m>=1?"floor":"ceil"](m/s),n.settings.normalizeOffset&&this.getBoundingClientRect){var y=this.getBoundingClientRect();u=i.clientX-y.left,p=i.clientY-y.top}return i.deltaX=c,i.deltaY=m,i.deltaFactor=s,i.offsetX=u,i.offsetY=p,i.deltaMode=0,r.unshift(i,l,c,m),e&&clearTimeout(e),e=setTimeout(h,200),(t.event.dispatch||t.event.handle).apply(this,r)}}function h(){s=null}function d(t,e){return n.settings.adjustOldDeltas&&"mousewheel"===t.type&&e%120==0}t.fn.extend({mousewheel:function(t){return t?this.bind("mousewheel",t):this.trigger("mousewheel")},unmousewheel:function(t){return this.unbind("mousewheel",t)}})})?i.apply(e,o):i)||(t.exports=a)},35413:()=>{},70741:()=>{},761850:(t,e,s)=>{"use strict";var i=s(270617).declareClassAsPureInterface;function o(){}TradingView.WEB_SOCKET_WAS_CONNECTED=!1,o.REBIND_STUDY_STANDALONE_TO_CHILD=1,o.REBIND_STUDY_CHILD_TO_STANDALONE=2,o.prototype.defaultWatchlistSymbols=function(){},o.prototype.defaultResolutions=function(){},o.prototype.availableCurrencies=function(){},o.prototype.availableUnits=function(){},
o.prototype.supportedSymbolsTypes=function(){},o.prototype.supportedExchangesList=function(){},o.prototype.symbolsGrouping=function(){},o.prototype.quoteCreateSession=function(t){},o.prototype.quoteDeleteSession=function(t){},o.prototype.quoteSetFields=function(t,e){},o.prototype.quoteAddSymbols=function(t,e){},o.prototype.quoteRemoveSymbols=function(t,e){},o.prototype.quoteFastSymbols=function(t,e){},o.prototype.depthCreateSession=function(t,e,s){},o.prototype.depthDeleteSession=function(t){},o.prototype.depthSetSymbol=function(t,e){},o.prototype.depthClearSymbol=function(t){},o.prototype.depthSetScale=function(t,e){},o.prototype.chartCreateSession=function(t,e){},o.prototype.chartDeleteSession=function(t){},o.prototype.createSession=function(t,e){},o.prototype.removeSession=function(t){},o.prototype.connected=function(){},o.prototype.connect=function(){},o.prototype.disconnect=function(){},o.prototype.switchTimezone=function(t,e){},o.prototype.resolveSymbol=function(t,e,s,i){},o.prototype.createSeries=function(t,e,s,i,o,a,r,n){},o.prototype.removeSeries=function(t,e,s){},o.prototype.modifySeries=function(t,e,s,i,o,a,r){},o.prototype.requestMoreData=function(t,e,s,i){},o.prototype.requestMetadata=function(t,e,s){},o.prototype.isCanCreateStudy=function(t,e){},o.prototype.createStudy=function(t,e,s,i,o,a,r){},o.prototype.rebindStudy=function(t,e,s,i,o,a,r,n){},o.prototype.removeStudy=function(t,e,s){},o.prototype.modifyStudy=function(t,e,s,i,o){},o.prototype.createPointset=function(t,e,s,i,o,a,r){},o.prototype.modifyPointset=function(t,e,s,i,o){},o.prototype.removePointset=function(t,e,s){},o.prototype.requestMoreTickmarks=function(t,e,s,i){},o.prototype.requestFirstBarTime=function(t,e,s,i){},o.prototype._invokeHandler=function(t,e){},o.prototype._sendRequest=function(t,e){},o.prototype._onMessage=function(t){},o.prototype._dispatchNotification=function(t){},o.prototype._invokeNotificationHandler=function(t,e,s){},o.prototype._notifySessions=function(t){},o.prototype.unpack=function(t){},o.prototype.searchSymbols=function(t,e,s,i,o,a,r,n,l,h){},o.prototype.serverTimeOffset=function(){},o.prototype.getMarks=function(t,e,s,i,o){},o.prototype.getTimescaleMarks=function(t,e,s,i,o){},i(o,"ChartApiInterface"),t.exports.HandlerInfo=function(t,e){this.handler=t,this.customId=e},t.exports.ChartApiInterface=o},285055:(t,e,s)=>{"use strict";var i,o;function a(t,e){return"period-back"===t.type&&"period-back"===e.type?t.value===e.value:"time-range"===t.type&&"time-range"===e.type&&(t.from===e.from&&t.to===e.to)}s.d(e,{TIMEFRAMETYPE:()=>o,areEqualTimeFrames:()=>a}),function(t){t.extractErrorReason=function(t){return t.params[1]}}(i||(i={})),function(t){t.PeriodBack="period-back",t.TimeRange="time-range"}(o||(o={}))},15693:(t,e,s)=>{"use strict";function i(t){return Boolean(t.inputs)||function(t){return Boolean(t.replay)}(t)||t.session||t.adjustment||t["currency-id"]||t["unit-id"]?function(t){return"="+JSON.stringify(t)}(t):t.symbol}function o(t){return"="===t[0]}function a(t){if(!o(t))return{symbol:t};try{
return JSON.parse(t.slice(1))}catch(e){return{symbol:t}}}function r(t){return"string"==typeof t?t:r(t.symbol)}s.d(e,{encodeExtendedSymbolOrGetSimpleSymbolString:()=>i,isEncodedExtendedSymbol:()=>o,decodeExtendedSymbol:()=>a,unwrapSimpleSymbol:()=>r})},908803:(t,e,s)=>{"use strict";var i;s.d(e,{SymbolErrorPermissionDeniedReason:()=>i,permissionDenied:()=>o,invalidSymbol:()=>a}),function(t){t.Symbol="symbol",t.GroupPermission="group"}(i||(i={}));const o="permission denied",a="invalid symbol"},695078:(t,e,s)=>{"use strict";s.d(e,{ensureTimePointIndexIndex:()=>r,unpackNonSeriesData:()=>n});var i=s(706617),o=s(588537);function a(t){if(!(0,i.isObject)(t))throw new Error("Graphics commands should be wrapped in an object");if((0,i.hasProperty)(t,"create"),(0,i.hasProperty)(t,"erase")){const e=t.erase;(0,o.assert)(Array.isArray(e),"Collection of erase commands should be array");for(const t of e){if(!(0,i.isObject)(t)||!(0,i.hasProperty)(t,"action"))throw new Error("Command should be an object with 'action' property");(0,o.assert)("all"===t.action||"one"===t.action,"Erase command action should be 'all' or 'one'")}}return t}function r(t){if(t<0)throw new Error("TimePointIndexIndex should be non-negative integer");return t}async function n(t){if(""===t)return null;const e=JSON.parse(t);if(!(0,i.isObject)(e)||"function"==typeof e)throw new Error("Non-object content in the non-series envelope");if((0,i.hasProperty)(e,"indexes_replace"))return{indexes_replace:!0};const o={indexes_replace:!1};if((0,i.hasProperty)(e,"offsets")&&(o.offsets=e.offsets),(0,i.hasProperty)(e,"isUpdate")){if("boolean"!=typeof e.isUpdate)throw new Error('Invalid type of "isUpdate" field');o.isUpdate=e.isUpdate}if((0,i.hasProperty)(e,"data")&&(o.data=e.data),(0,i.hasProperty)(e,"graphicsCmds")&&(o.graphicsCmds=a(e.graphicsCmds)),(0,i.hasProperty)(e,"dataCompressed")||(0,i.hasProperty)(e,"graphicsCmdsCompressed")){const{default:t}=await Promise.all([s.e(93194),s.e(81578)]).then(s.t.bind(s,593194,23));if((0,i.hasProperty)(e,"dataCompressed")){const s=await(new t).loadAsync(e.dataCompressed,{base64:!0});o.data=JSON.parse(await s.file("").async("text"))}if((0,i.hasProperty)(e,"graphicsCmdsCompressed")){const s=await(new t).loadAsync(e.graphicsCmdsCompressed,{base64:!0});o.graphicsCmds=a(JSON.parse(await s.file("").async("text")))}return o}return o}},103653:(t,e,s)=>{"use strict";s.d(e,{seriesPlotFunctionMap:()=>l,barFunction:()=>h,SeriesData:()=>c});var i,o=s(588537),a=s(752280);!function(t){t[t.FromLeft=-1]="FromLeft",t[t.FromRight=1]="FromRight"}(i||(i={}));const r={open:t=>t[1],high:t=>t[2],low:t=>t[3],close:t=>t[4],hl2:t=>(t[2]+t[3])/2,hlc3:t=>(t[2]+t[3]+t[4])/3,ohlc4:t=>(t[1]+t[2]+t[3]+t[4])/4},n=["open","high","low","close","hl2","hlc3","ohlc4"];function l(){const t=new Map;return n.forEach((e,s)=>{t.set(e,h(e))}),t}function h(t){return r[t]}function d(t,e){return null==t[e]}class c{constructor(){this.m_bars=new a.PlotList(l(),d),this.m_nsBars=new a.PlotList(l(),d)}bars(){return this.m_bars}nsBars(){return this.m_nsBars}