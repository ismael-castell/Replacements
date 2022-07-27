(self.webpackChunkdesktop=self.webpackChunkdesktop||[]).push([[179],{80703:(We,te,o)=>{var f={"./af":[54528,4528],"./af.ts":[54528,4528],"./bg":[77641,7641],"./bg.ts":[77641,7641],"./bs":[11610,1610],"./bs.ts":[11610,1610],"./cs":[82229,2229],"./cs.ts":[82229,2229],"./da":[82477,2477],"./da.ts":[82477,2477],"./de":[51494,1494],"./de-AT":[42941,2941],"./de-AT.ts":[42941,2941],"./de-CH":[27397,7397],"./de-CH.ts":[27397,7397],"./de.ts":[51494,1494],"./el":[41456,1456],"./el.ts":[41456,1456],"./en":[6784,6784],"./en-GB":[60946,946],"./en-GB.ts":[60946,946],"./en.ts":[6784,6784],"./es":[37840,7840],"./es.ts":[37840,7840],"./fr":[25075,5075],"./fr.ts":[25075,5075],"./hi":[21044,1044],"./hi.ts":[21044,1044],"./hr":[79982,9982],"./hr.ts":[79982,9982],"./hu":[91154,1154],"./hu.ts":[91154,1154],"./id":[99607,9607],"./id.ts":[99607,9607],"./it":[31082,1082],"./it.ts":[31082,1082],"./lt":[83138,3138],"./lt.ts":[83138,3138],"./lv":[66369,6369],"./lv.ts":[66369,6369],"./mk":[74363,4363],"./mk.ts":[74363,4363],"./nl":[45407,5407],"./nl.ts":[45407,5407],"./pl":[45850,5850],"./pl.ts":[45850,5850],"./pt":[46442,6442],"./pt-BR":[43772,3772],"./pt-BR.ts":[43772,3772],"./pt.ts":[46442,6442],"./ro":[15222,5222],"./ro.ts":[15222,5222],"./ru":[41450,1450],"./ru.ts":[41450,1450],"./sk":[45782,5782],"./sk.ts":[45782,5782],"./sl":[14139,4139],"./sl.ts":[14139,4139],"./sr":[59745,9745],"./sr-Latn":[55409,5409],"./sr-Latn.ts":[55409,5409],"./sr-ME":[19354,9354],"./sr-ME.ts":[19354,9354],"./sr.ts":[59745,9745],"./ta":[58986,8986],"./ta.ts":[58986,8986],"./tr":[34462,4462],"./tr.ts":[34462,4462],"./uk":[49786,9786],"./uk.ts":[49786,9786]};function E(F){if(!o.o(f,F))return Promise.resolve().then(()=>{var P=new Error("Cannot find module '"+F+"'");throw P.code="MODULE_NOT_FOUND",P});var v=f[F],w=v[0];return o.e(v[1]).then(()=>o(w))}E.keys=()=>Object.keys(f),E.id=80703,We.exports=E},25676:(We,te,o)=>{"use strict";o.d(te,{q:()=>f});const f="2022.12.3".replace("-X-REPLACE-KEY","")},64656:(We,te,o)=>{"use strict";o.d(te,{U:()=>E});var f=o(62892);let E=(()=>{class F{constructor(){this.allowed={wr:"WetterRadar",rr:"RegenRadar",temp:"Temperature",gust:"Gust",lightning:"Lightning",WetterRadar:"WetterRadar",RegenRadar:"RegenRadar",TemperaturRadar:"Temperature",WindRadar:"Gust"}}isAllowed(w){return w in this.allowed}convertToName(w){return this.allowed[w]}}return F.\u0275fac=function(w){return new(w||F)},F.\u0275prov=f.Yz7({token:F,factory:F.\u0275fac,providedIn:"root"}),F})()},14801:(We,te,o)=>{"use strict";o.d(te,{R:()=>P});var f=o(80243),E=o(51227),F=o(84246),v=o(62892),w=o(65969);let P=(()=>{class b{constructor(L,k){this.errorHandler=L,this.webGLRenderingError$=new f.t,this.alreadySentWebGLErrors=new Set,this.networkErrors$=new f.t,this.networkTimout$=new f.t,this.lastTimeChecked=0,k.webGLLogger={log(V,...H){(0,E.kg)().info("[WebGL-Lib]",V,...H)},warn(V,...H){(0,E.kg)().warn("[WebGL-Lib]",V,...H)},error(V,...H){const N="[WebGL-Lib] "+JSON.stringify(V)+" "+JSON.stringify(H);(0,E.kg)().error(N),this.errorHandler.handleError(N)}}}init(){}checkForError(L){if(Date.now()-this.lastTimeChecked>b.PERIOD_IN_MS){this.lastTimeChecked=Date.now();const k=this.translateWebGlErrorCode(L);k&&!this.alreadySentWebGLErrors.has(k)&&(this.alreadySentWebGLErrors.add(k),this.errorHandler.handleError(k))}}translateWebGlErrorCode(L){switch(L.getError()){case L.NO_ERROR:return;case L.INVALID_ENUM:return"[webGL] An unacceptable value has         been specified for an enumerated argument.The command is ignored and the error flag is set.";case L.INVALID_VALUE:return"[webGL] A numeric argument is out of range.The command is ignored and the error flag is set.";case L.INVALID_OPERATION:return"[webGL] The specified command is not allowed for the current state. The command is ignored and the error flag is set.";case L.INVALID_FRAMEBUFFER_OPERATION:return"[webGL] The currently bound framebuffer is not framebuffer complete when trying to render to or to read from it.";case L.OUT_OF_MEMORY:return"[webGL] Not enough memory is left to execute the command.";case L.CONTEXT_LOST_WEBGL:return"[webGL] If the WebGL context is lost, this error is returned on the first call to getError. Afterwards and until the context has been restored, it returns gl.NO_ERROR.";default:return"[webGL] Unknown"}}}return b.PERIOD_IN_MS=1e4,b.\u0275fac=function(L){return new(L||b)(v.LFG(w.d),v.LFG(F.m))},b.\u0275prov=v.Yz7({token:b,factory:b.\u0275fac,providedIn:"root"}),b})()},7118:(We,te,o)=>{"use strict";o.d(te,{Y:()=>N});var f=o(52315),E=o(80243),F=o(1776),v=o(36756),w=o(74345),P=o(28810),b=o(51227),_=o(46603),L=o(54279),k=o(84246),V=o(26108),H=o(62892);let N=(()=>{class W extends L.I{constructor(X){super(),this.tag="[tracking-queue.service]",this.pageLoadTime=(new Date).getTime(),this.activeLayerGroupShortKey$=new E.t(1),this.activePeriod$=new E.t(1),this.activePosition$=new E.t(1),this.buffer$=new Map,this.w=X,this.buffer$.set(P.II.TimeSlider,new F.x);for(const[Y,Me]of this.buffer$.entries())Me.pipe((0,w.f)(Me.pipe((0,_.Zf)(300)))).subscribe(He=>{this.addElasticAPMEvent(Y)});this.activePosition$.subscribe(Y=>{this.addLabel("wetterradar.geo_coordinate",Y)})}addLabel(X,Y){this.w.elasticApm&&this.w.elasticApm.addLabels({[X]:Y})}sendPageLoadEvent(){var X=this;return(0,f.Z)(function*(){if(yield X.w.elasticLoaded,X.w.elasticApm){const Y=Object.assign(Object.assign({},X.getSyncLabels()),yield X.getAsyncLabels());(0,b.kg)().debug("sendPageLoadEvent"),X.w.elasticApm._sendPageLoadMetrics(),X.w.elasticApm.startTransaction(void 0,"page-load",{managed:!0,canReuse:!0}).addLabels(Y)}})()}getTarget(X){let Y="main";return"desktop"===X&&(Y=window.location.pathname.includes("/interactive")?"interactive":window.location.pathname.includes("/embedded")?"embedded":window.location.pathname.includes("/compact")?"compact":"unknown"),Y}getSyncLabels(){const X=this.getMeta("wo-platform");return{"wetterradar.target":this.getTarget(X)}}getAsyncLabels(){var X=this;return(0,f.Z)(function*(){return{"wetterradar.layer":yield(0,v.z)(X.activeLayerGroupShortKey$),"wetterradar.renderer":V.g.SelectedRenderer}})()}getMeta(X){var Y;const Me=document.getElementsByTagName("meta");for(let He=0;He<Me.length;He++){const Ye=Me.item(He);if((null==Ye?void 0:Ye.getAttribute("name"))===X)return null!==(Y=Ye.getAttribute("content"))&&void 0!==Y?Y:""}return""}trackClickEvent(X,Y){var Me;switch((0,b.kg)().debug(this.tag,"trackClickEvent",X),X){case P.II.LegendOpen:case P.II.LegendClose:(0,b.kg)().error(this.tag,"this event should be tracked by tracking-legend service",X);break;case P.II.Locate:this.addElasticAPMEvent(X);break;case P.II.LoopStart:case P.II.LoopStop:this.addElasticAPMEvent(X,Y);break;case P.II.Search:this.addElasticAPMEvent(X);break;case P.II.TimeStepLeft:case P.II.TimeStepRight:this.addElasticAPMEvent(X,Y);break;case P.II.TimeSlider:null===(Me=this.buffer$.get(X))||void 0===Me||Me.next(null);break;default:this.addElasticAPMEvent(X,Y)}}trackToolOpen(X,Y){this.trackClickEvent(`tool_${X}`,Y)}trackZoomEvent(X){(0,b.kg)().debug(this.tag,"trackZoomEvent",X),this.addElasticAPMEvent("button_zoom",{"wetterradar.data":X})}addElasticAPMEvent(X,Y,Me={durationInSeconds:.1}){var He=this;return(0,f.Z)(function*(){const Ye=Object.assign(Object.assign(Object.assign({},He.getSyncLabels()),yield He.getAsyncLabels()),Y);if((0,b.kg)().debug(He.tag,"addElasticAPMEvent",X,Ye),He.w.elasticApm){const Ne=Me.startTime?Me.startTime:(new Date).getTime()-He.pageLoadTime,ge=Ne+1e3*Me.durationInSeconds;(0,b.kg)().debug(He.tag,`creating transaction for '${X}' - duration: ${Me.durationInSeconds} - startTime: ${Ne} - endTime: ${ge}`);const Ve=He.w.elasticApm.startTransaction(X,"custom",{startTime:Ne});return Ve.addLabels({"interaction.from":"","interaction.to":""}),Ve.addLabels(Ye),Ve.end(ge),Ve}(0,b.kg)().debug(He.tag,"elasticApm is not available")})()}rapidTransaction(X){if(this.w.elasticApm){const Y=Object.assign({},this.getSyncLabels()),He=this.w.elasticApm.startTransaction(X,"custom",{startTime:this.pageLoadTime});return He.addLabels(Y),He}return null}flush(){var X=this;return(0,f.Z)(function*(){if(X.w.elasticApm){const Y=X.w.elasticApm.serviceFactory.instances.ApmServer.queue.items;if((null==Y?void 0:Y.length)>0)return X.w.elasticApm.serviceFactory.instances.ApmServer.sendEvents(Y).catch(()=>{(0,b.kg)().debug(X.tag,"Successfully send data to server")});(0,b.kg)().warn(X.tag,"no new transactions found!")}})()}sendTransactionManually(X,Y){return X.duration=Math.round(1e3*Y),X.trace_id=X.traceId,X.span_count={started:0},delete X.traceId,delete X.context,delete X.options,delete X.breakdownTimings,delete X.captureTimings,delete X.blocked,delete X._start,delete X._activeTasks,delete X._activeSpans,delete X.ended,console.log(JSON.stringify(X)),this.w.elasticApm.serviceFactory.instances.ApmServer.sendEvents([{transactions:X}]).catch(()=>{(0,b.kg)().debug(this.tag,"Successfully send data to server")})}}return W.\u0275fac=function(X){return new(X||W)(H.LFG(k.m))},W.\u0275prov=H.Yz7({token:W,factory:W.\u0275fac,providedIn:"root"}),W})()},37526:(We,te,o)=>{"use strict";o.d(te,{e:()=>ot});var f=o(52315),E=o(8892),F=o(1776),v=o(72909),w=o(47255),P=o(52234),b=o(27982),_=o(67062),k=o(39704),V=o(68196),H=o(47734),N=o(87481),W=o(17345),X=o(11066),Y=o(8429),Me=o(26819),He=o(7056),Ye=o(74690),Ne=o(92413),ge=o(41184),Ve=o(1086),Xe=o(25676),me=o(99407),Q=o(26108),Se=o(2614),ae=o(51227),De=o(54279),we=o(50751),Fe=o(84246),be=o(62892),Qe=o(40244),ct=o(81880),$e=o(80092),yt=o(14801),Ze=o(58322),St=o(7118),bt=o(17601),Bt=o(44154);let ot=(()=>{class Rt extends De.I{constructor(re,Te,je,a,S,ce,_e,xe,Ue,Le){var lt;let Be;super(),lt=this,this.ngZone=a,this.layerGroupService=S,this.supportedRendererService=_e,this.trackingQueueService=xe,this.startTime=performance.now(),this.grafanaAnalyticsEvents$=new F.x,this.tag="[tracking.service]",this.rounding=.025,this.timers=new Map,(0,ae.kg)().debug(`${this.tag} environment.production`,me.N.production),this.w=re,this.w.healthTest=()=>this.runHealthTest(),Ue.radarReady.then(()=>{(0,ae.kg)().debug(this.tag,"Radar fully loaded"),this.trackTimeSinceNavigationStart(),this.trackingQueueService.sendPageLoadEvent()}),je.slowCenterAndZoom$.pipe((0,X.h)(nt=>0!==nt.center.lat&&0!==nt.center.lng),(0,Y.P)()).subscribe(nt=>{Be=nt}),je.slowCenterAndZoom$.pipe((0,X.h)(nt=>0!==nt.center.lat&&0!==nt.center.lng&&0!==nt.zoom),(0,Me.x)((nt,ve)=>nt.center.equals(ve.center,0)&&nt.zoom===ve.zoom),(0,He.T)(1),(0,Ye.b)(2e3)).subscribe(nt=>{const ve=this.roundHalf(Be.zoom),oe=this.roundHalf(nt.zoom),ue=this.roundedDegrees(Be.center.lat),ke=this.roundedDegrees(Be.center.lng),Ee=this.roundedDegrees(nt.center.lat),Oe=this.roundedDegrees(nt.center.lng);(ue!==Ee||ke!==Oe)&&this.trackingQueueService.addElasticAPMEvent("pan",{"interaction.from_geo_point":`${ue},${ke}`,"interaction.to_geo_point":`${Ee},${Oe}`}),ve!==oe&&this.trackingQueueService.addElasticAPMEvent("zoom",{"interaction.from":ve,"interaction.to":oe}),Be=nt}),this.layerGroupService.active$.subscribe(nt=>{this.trackingQueueService.activeLayerGroupShortKey$.next(nt.radar.shortKey)}),Te.period$.subscribe(nt=>{this.trackingQueueService.activePeriod$.next(nt.id)}),je.slowCenter$.subscribe(nt=>{const ve=`${this.roundedDegrees(nt.lat)},${this.roundedDegrees(nt.lng)}`;this.trackingQueueService.activePosition$.next(ve)}),this.layerGroupService.active$.pipe((0,Ne.w)(nt=>Te.period$.pipe((0,ge.U)(ve=>({lg:nt.radar.shortKey,periodKey:ve.id})),(0,Me.x)((ve,oe)=>ve.lg===oe.lg&&ve.periodKey===oe.periodKey),(0,Ve.G)(),function L(Rt){return(0,w.e)((Z,re)=>{let Te=!1;const je=(0,P.x)(re,()=>{null==je||je.unsubscribe(),Te=!0},_.Z);(0,b.Xf)(Rt).subscribe(je),Z.subscribe((0,P.x)(re,a=>Te&&re.next(a)))})}((0,v.H)(500))))).subscribe(([nt,ve])=>{(0,ae.kg)().debug(`${this.tag} Period changed (${nt.periodKey} -> ${ve.periodKey})`);const oe=this.timer("button_period_switched");this.trackingQueueService.addElasticAPMEvent("button_period_switched",{layer:ve.lg,"interaction.from":nt.periodKey,"interaction.to":ve.periodKey},oe)}),this.layerGroupService.active$.pipe((0,Ve.G)()).subscribe(([nt,ve])=>{(0,ae.kg)().debug(`${this.tag} User switched layer to: ${ve.radar.shortKey}`);const oe=this.timer("button_layer_switched");this.trackingQueueService.addElasticAPMEvent("button_layer_switched",{"interaction.from":nt.radar.shortKey,"interaction.to":ve.radar.shortKey},oe)}),this.ngZone.runOutsideAngular(()=>{this.grafanaAnalyticsEvents$.pipe(function $(Rt,...Z){var re,Te;const je=null!==(re=(0,N.yG)(Z))&&void 0!==re?re:H.z,a=null!==(Te=Z[0])&&void 0!==Te?Te:null,S=Z[1]||1/0;return(0,w.e)((ce,_e)=>{let xe=[],Ue=!1;const Le=st=>{const{buffer:dt,subs:nt}=st;nt.unsubscribe(),(0,V.P)(xe,st),_e.next(dt),Ue&&lt()},lt=()=>{if(xe){const st=new k.w0;_e.add(st);const nt={buffer:[],subs:st};xe.push(nt),(0,W.f)(st,je,()=>Le(nt),Rt)}};null!==a&&a>=0?(0,W.f)(_e,je,lt,a,!0):Ue=!0,lt();const Be=(0,P.x)(_e,st=>{const dt=xe.slice();for(const nt of dt){const{buffer:ve}=nt;ve.push(st),S<=ve.length&&Le(nt)}},()=>{for(;null==xe?void 0:xe.length;)_e.next(xe.shift().buffer);null==Be||Be.unsubscribe(),_e.complete(),_e.unsubscribe()},void 0,()=>xe=null);ce.subscribe(Be)})}(2500),(0,X.h)(nt=>nt.length>0),this.takeUntilDestroy()).subscribe(nt=>{this.sendBeacon(nt),me.N.production||(0,ae.kg)().debug(`${this.tag} beacon`,nt)})}),ce.networkErrors$.pipe(this.takeUntilDestroy()).subscribe(nt=>{this.w.error_network_generic=(this.w.error_network_generic||0)+1}),ce.networkTimout$.pipe(this.takeUntilDestroy()).subscribe(nt=>{this.w.error_network_timeout=(this.w.error_network_timeout||0)+1});let st=(new Date).getTime();const dt=function(){var nt=(0,f.Z)(function*(){const oe=((new Date).getTime()-st)/1e3-.1;(0,ae.kg)().debug(`page was visible for ${oe} seconds`);const ue=lt.trackingQueueService.rapidTransaction("page-visible");ue&&lt.trackingQueueService.sendTransactionManually(ue,oe)});return function(){return nt.apply(this,arguments)}}();Le.pageVisible$.subscribe(function(){var nt=(0,f.Z)(function*(ve){ve?st=(new Date).getTime():yield dt()});return function(ve){return nt.apply(this,arguments)}}())}timer(re){var Te;const je=null!==(Te=this.timers.get(re))&&void 0!==Te?Te:this.startTime,a=performance.now(),S=(a-je)/1e3;return this.timers.set(re,a),{startTime:a,durationInSeconds:S}}roundHalf(re){return Math.round(2*re)/2}roundedDegrees(re){const Te=Math.round(re/this.rounding)*this.rounding;return String(Math.round(1e3*Te)/1e3)}calculate_load_times(){console.log(performance.getEntriesByType("navigation")),console.log(performance.getEntriesByType("resource").filter(re=>re.name.includes("dynamic")))}sendBeacon(re){const Te=this.getSessionProps();Te.events=re;const je=JSON.stringify(Te);"boolean"==typeof this.w.NO_TRACKING&&!0===this.w.NO_TRACKING?(0,ae.kg)().debug(`${this.tag} Tracking is disabled`):((0,ae.kg)().debug(`${this.tag} Sending beacon to Grafana`),this.w.navigator.sendBeacon&&me.N.production&&this.w.navigator.sendBeacon("https://tiles.wo-cloud.com/analytics",je))}trackTimeSinceNavigationStart(){const re=Math.ceil(performance.now())/1e3,Te=Math.ceil(performance.now()-this.startTime)/1e3;this.trackGrafanaEvent({type:"onload",ttft:Te,tsns:re})}getSessionProps(){let re="dev";return"WO-INT-DEV"===Xe.q?re="dev":"master"===Xe.q&&(re="master"),{application:this.trackingQueueService.getMeta("wo-platform"),environment:re,renderer:Q.g.SelectedRenderer,version:Xe.q,browser:(0,Se.getBrowser)(),resolution:`${window.screen.availWidth}x${window.screen.availHeight}`,events:[]}}trackGrafanaEvent(re){this.grafanaAnalyticsEvents$.next(re)}runHealthTest(){var re=this;return(0,f.Z)(function*(){const Te=yield re.getInfo(),je=yield re.runIFrameWebGLTest(),a=yield re.getUserAgentData(),S=[];if(S.push("##################################"),S.push("WETTERONLINE HEALTH CHECK"),S.push("##################################"),re.supportedRendererService.logs.forEach(ce=>S.push(ce)),S.push("----------------------------------"),je.forEach(ce=>S.push(ce)),S.push("----------------------------------"),Object.keys(Te).forEach(ce=>S.push(`${ce}: ${Te[ce]}`)),S.push("----------------------------------"),Object.keys(a).forEach(ce=>S.push(`${ce}: ${a[ce]}`)),S.push("----------------------------------"),S.push(...re.supportedRendererService.printMapping().map(ce=>JSON.stringify(ce))),S.push("##################################"),S.push("WETTERONLINE HEALTH CHECK FINISHED"),S.push("##################################"),re.supportedRendererService.allLayersSupported())S.push(re.tag,"All layers are supported");else{S.push(re.tag,"NOT all layers are supported");let ce="";E.c.isWebGLSupported()?ce+="webgl-version: "+(E.c.isWebGL2()?"webgl2":"webgl1"):ce+="no-webgl",S.push(ce)}S.forEach(ce=>(0,ae.kg)().info(re.tag,ce))})()}runIFrameWebGLTest(){return(0,f.Z)(function*(){return new Promise((re,Te)=>{const je=document.createElement("iframe");je.className="webgl-iframe",je.src="./assets/shared/webgl-test/index.html",je.style.visibility="hidden",je.onload=()=>{var a,S,ce;const _e=null===(a=je.contentDocument)||void 0===a?void 0:a.getElementsByTagName("div");if(!_e)throw new we.Z("[DeveloperError] [runIFrameWebGLTest] tracking.service");const xe=[];for(let Ue=0;Ue<_e.length;Ue++)xe.push(null!==(ce=null===(S=_e.item(Ue))||void 0===S?void 0:S.textContent)&&void 0!==ce?ce:"");document.body.removeChild(je),0===xe.length&&xe.push("looks like this browser is not capable of running a webgl test... (probably webGL is not supported)"),re(xe)},je.onerror=a=>{(0,ae.kg)().error(a),Te(a)},document.body.appendChild(je)})})()}getUserAgentData(){return(0,f.Z)(function*(){try{return navigator.userAgentData.getHighEntropyValues(["architecture","model","platform","platformVersion","uaFullVersion"])}catch(re){return Promise.resolve({})}})()}getInfo(){return(0,f.Z)(function*(){var re,Te,je,a;return{timeOpened:new Date,timezone:(new Date).getTimezoneOffset()/60,pageon:window.location.pathname,referrer:document.referrer,browserName:navigator.appName,browserEngine:navigator.product,browserVersion1a:navigator.appVersion,browserVersion1b:navigator.userAgent,browserLanguage:navigator.language,browserOnline:navigator.onLine,browserPlatform:navigator.platform,dataCookiesEnabled:navigator.cookieEnabled,dataCookies1:document.cookie,dataStorage:JSON.stringify(localStorage),sizeScreenW:screen.width,sizeScreenH:screen.height,sizeInW:innerWidth,sizeInH:innerHeight,sizeAvailW:screen.availWidth,sizeAvailH:screen.availHeight,scrColorDepth:screen.colorDepth,scrPixelDepth:screen.pixelDepth,devicePixelRatio:window.devicePixelRatio,wrVersion:Xe.q,online:window.navigator.onLine,deviceMemory:navigator.deviceMemory,hardwareConcurrency:navigator.hardwareConcurrency,networkEffectiveType:null===(re=navigator.connection)||void 0===re?void 0:re.effectiveType,networkRtt:null===(Te=navigator.connection)||void 0===Te?void 0:Te.rtt,networkDownlink:null===(je=navigator.connection)||void 0===je?void 0:je.downlink,networkSaveData:null===(a=navigator.connection)||void 0===a?void 0:a.saveData}})()}}return Rt.\u0275fac=function(re){return new(re||Rt)(be.LFG(Fe.m),be.LFG(Qe.Y),be.LFG(ct.b),be.LFG(be.R0b),be.LFG($e.z),be.LFG(yt.R),be.LFG(Ze.S),be.LFG(St.Y),be.LFG(bt.e),be.LFG(Bt.B))},Rt.\u0275prov=be.Yz7({token:Rt,factory:Rt.\u0275fac,providedIn:"root"}),Rt})()},10070:(We,te,o)=>{"use strict";o.d(te,{Z:()=>F});var f=o(19944),E=o(62892);let F=(()=>{class v{constructor(){this._currentOpenSheet$=new f.X(null),this.currentOpenSheet$=this._currentOpenSheet$.asObservable()}openSheet(P,b=32){this._currentOpenSheet$.next(Object.assign(Object.assign({},P),{percent:b}))}closeSheet(){this._currentOpenSheet$.next(null)}isOpen(){return null!==this._currentOpenSheet$.value}}return v.\u0275fac=function(P){return new(P||v)},v.\u0275prov=E.Yz7({token:v,factory:v.\u0275fac,providedIn:"root"}),v})()},2079:(We,te,o)=>{"use strict";o.d(te,{t:()=>v});var f=o(16772),E=o(62892);let F=(()=>{class w{}return w.\u0275fac=function(b){return new(b||w)},w.\u0275mod=E.oAB({type:w}),w.\u0275inj=E.cJS({imports:[[f.ez]]}),w})(),v=(()=>{class w{}return w.\u0275fac=function(b){return new(b||w)},w.\u0275mod=E.oAB({type:w}),w.\u0275inj=E.cJS({imports:[[f.ez,F]]}),w})()},88403:(We,te,o)=>{"use strict";o.d(te,{r:()=>ge,J:()=>Ne});var f=o(52315),E=o(19944),F=o(26819),v=o(11066),w=o(19170),P=o(39204),b=o(37729),_=o(10070),L=o(24278),k=o(1972),V=o(51227),H=o(26953),N=o(62892),W=o(16772);function $(Ve,Xe){if(1&Ve&&N._UZ(0,"div",5),2&Ve){const me=Xe.$implicit;N.Udp("background-color",me.color)("--histogram-value",100*me.value+"%")}}let X=(()=>{class Ve{static normalize(me){const Q=Math.max(...me.map(Se=>Se.value));for(const Se of me)Se.value=Se.value/Q;return me}setData(me){this.pixels=me.pixels,this.bluePixels=me.bluePixels,this.edgePixels=me.edgePixels,this.bluePixelsPercentage=(100*me.bluePixels/me.pixels).toFixed(1),this.edgePixelsPercentage=(100*me.edgePixels/me.bluePixels).toFixed(1),this.url=me.url,this.histogram=Ve.normalize(me.histogram)}}return Ve.\u0275fac=function(me){return new(me||Ve)},Ve.\u0275cmp=N.Xpm({type:Ve,selectors:[["wo-xrain-debug"]],decls:11,vars:8,consts:[[1,"general"],["target","_blank",3,"href"],[1,"preview",3,"src"],[1,"histogram"],["class","item",3,"backgroundColor","--histogram-value",4,"ngFor","ngForOf"],[1,"item"]],template:function(me,Q){1&me&&(N.TgZ(0,"div",0)(1,"div"),N._uU(2),N.qZA(),N.TgZ(3,"div"),N._uU(4),N.qZA(),N.TgZ(5,"div"),N._uU(6),N.qZA()(),N.TgZ(7,"a",1),N._UZ(8,"img",2),N.qZA(),N.TgZ(9,"div",3),N.YNc(10,$,1,4,"div",4),N.qZA()),2&me&&(N.xp6(2),N.hij("Pixels: ",Q.pixels,""),N.xp6(2),N.AsE("Blue Pixels: ",Q.bluePixels," (",Q.bluePixelsPercentage,"%)"),N.xp6(2),N.AsE("Edge Pixels: ",Q.edgePixels," (",Q.edgePixelsPercentage,"%)"),N.xp6(1),N.Q6J("href",Q.url,N.LSH),N.xp6(1),N.Q6J("src",Q.url,N.LSH),N.xp6(2),N.Q6J("ngForOf",Q.histogram))},directives:[W.sg],styles:[".btn[_ngcontent-%COMP%]{display:block;cursor:pointer;background-color:#10658e;-webkit-appearance:none;outline:0;border:0;padding:12px;font-size:16px;border-radius:4px;margin:16px auto;text-decoration:none;color:#fff}.btn[_ngcontent-%COMP%]:hover{background:#003366}.btn[_ngcontent-%COMP%]:active{background:#00537f}.btn.disabled[_ngcontent-%COMP%]{color:#10658e;background:#e6eff3}.btn.secondary[_ngcontent-%COMP%]{background-color:#fff;border:1px solid #e6eff3;color:#10658e}.btn.secondary[_ngcontent-%COMP%]:active{background-color:#e6eff3;border:1px solid #10658e}.btn.secondary[_ngcontent-%COMP%]:hover{background:#e6eff3}.btn.secondary.disabled[_ngcontent-%COMP%]{border:1px solid #e6eff3;color:#a0a0a0}.btn.quarterly[_ngcontent-%COMP%]{background-color:#fff;color:#10658e;border:1px solid #e6eff3;border-radius:4px}.btn.quarterly[_ngcontent-%COMP%]:hover, .btn.quarterly[_ngcontent-%COMP%]:active{background-color:#f2f7f9;color:#003959}  wo-bottom-sheet{position:absolute;left:0;bottom:0;width:256px;height:256px;z-index:9}  .bottom-sheet-container{height:100%!important}.general[_ngcontent-%COMP%]{font-size:11px;color:#3c3c3c}.preview[_ngcontent-%COMP%]{position:absolute;right:4px;top:4px;width:64px}.histogram[_ngcontent-%COMP%]{width:100%;align-items:flex-end;display:flex;border:1px solid rgba(0,0,0,.1);height:190px}.histogram[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]{height:var(--histogram-value);display:flex;flex-direction:column;justify-content:flex-end;flex:1;align-items:center}.histogram[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%]{height:var(--histogram-value);width:100%;display:flex;justify-content:center;align-items:center}"]}),Ve})();var Y=o(30429),Me=o(81880),He=o(22482),Ye=o(70005);class Ne{constructor(){this.layer={background:!0,composite:!0,geo:!0,lightning:!0,particles:!0,cityLocations:!0,names:!0,annotation:!0,positionMarker:!0,bars:!0,contentMarker:!0,markerClusterAmount:!0},this.debug={wind:!1,tileBoundaries:"troubleshooting"===Y._.platform,mapcenter:!1,picking:!1}}}class ge{constructor(Xe,me,Q,Se,ae){this.mapView=Xe,this.mapClickService=me,this.bottomSheetService=Q,this.httpClient=ae,this.debug$=new E.X(!1),this.maxLogEventHistory=100,window.openDebug=()=>this.showDebugUI();const De="true"===(0,H._K)(window.location.href,"tiledebug","false"),we="true"===(0,H._K)(window.location.href,"pickingdebug","false");ge.renderDebug.debug=Object.assign(Object.assign({},ge.renderDebug.debug),{tileBoundaries:ge.renderDebug.debug.tileBoundaries||De,picking:ge.renderDebug.debug.tileBoundaries||we}),De&&this.mapClickService.click$.pipe((0,F.x)(),(0,v.h)(()=>this.mapView.renderer instanceof L.a)).subscribe(Fe=>{const be=this.mapView.containerToGeo(Fe),Qe=this.mapView.geoToTile(be,b.de.TILE_SIZE),ct=this.mapView.renderer.containers.get("composite");if(void 0!==ct){let $e;for(const yt of ct.meshes.keys())if(yt.startsWith(Qe.x+":"+Qe.y)){$e=yt;break}if($e){const yt=ct.getMesh($e);yt instanceof k.c&&this.httpClient.get(yt.getCurrentUrl()+"&debug=true",{observe:"response",responseType:"arraybuffer"}).subscribe(Ze=>{const St=Ze.headers.get("x-rain");let bt;St&&(bt=(St.match(/blueHistogram/g)||[]).length?JSON.parse("["+St+"]")[0]:JSON.parse(St),bt.url=yt.getCurrentUrl(),this.bottomSheetService.openSheet({component:X,data:bt}))})}}}),this.logEvents$=(0,V.kg)().logs$.pipe((0,w.R)((Fe,be)=>{for(Fe.push(be);Fe.length>this.maxLogEventHistory;)Fe.shift();return Fe},[]),(0,P.d)(1)),Se.runOutsideAngular(()=>{this.logEvents$.subscribe(()=>{})})}registerContainer(Xe){this.container=Xe}showDebugUI(){var Xe=this;return(0,f.Z)(function*(){if(Xe.componentRef)return Xe.componentRef.instance.toggle();const me=Xe.container;if(!me)throw new Error("No debug view container was set, include a <wo-debug-wrapper> element in your app");const Q=yield o.e(34).then(o.bind(o,40034));Xe.componentRef=me.createComponent(Q.DebugComponent)})()}}ge.renderDebug=new Ne,ge.\u0275fac=function(Xe){return new(Xe||ge)(N.LFG(Me.b),N.LFG(He.k),N.LFG(_.Z),N.LFG(N.R0b),N.LFG(Ye.eN))},ge.\u0275prov=N.Yz7({token:ge,factory:ge.\u0275fac,providedIn:"root"})},70541:(We,te,o)=>{"use strict";o.d(te,{c:()=>E});const E=new(o(62892).OlP)("LAYER_CONFIG")},22482:(We,te,o)=>{"use strict";o.d(te,{k:()=>F});var f=o(1776),E=o(62892);let F=(()=>{class v{constructor(){this.click$=new f.x,this.hold$=new f.x}}return v.\u0275fac=function(P){return new(P||v)},v.\u0275prov=E.Yz7({token:v,factory:v.\u0275fac,providedIn:"root"}),v})()},81880:(We,te,o)=>{"use strict";o.d(te,{b:()=>Ve});var f=o(568),E=o(37729),F=o(19944),v=o(1776),w=o(30930),P=o(41184),b=o(11066),_=o(43179),L=o(39204),k=o(30429),V=o(10486);class H{constructor(me,Q,Se,ae){this.view=me,this.fixedPoint=Q,this.callback=ae,this.startZoom=me.zoom,this.zoomOffset=Se-this.startZoom}runFrame(me){const Q=this.startZoom+me*this.zoomOffset,Se=this.view.getZoomScale(Q),ae=this.view.size._divideBy(2),De=this.fixedPoint.subtract(ae)._multiplyBy(1-1/Se),we=this.view.containerToGeo(ae.add(De));this.callback(we,Q)}}class N{constructor(me,Q,Se,ae){this.callback=ae,this.startZoom=me.zoom,this.zoomOffset=Se-this.startZoom,this.startCenter=me.center,this.centerOffset=new f.MP(Q.lat-this.startCenter.lat,Q.lng-this.startCenter.lng)}runFrame(me){const Q=this.startZoom+me*this.zoomOffset,Se=new f.MP(this.startCenter.lat+me*this.centerOffset.lat,this.startCenter.lng+me*this.centerOffset.lng);this.callback(Se,Q)}}var W=o(71189),$=o(50751),X=o(51227),Y=o(46603),Me=o(54279),He=o(84246),Ye=o(62892);let Ne=(()=>{class Xe{