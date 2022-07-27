"use strict";(self.webpackChunkserver_side_rendering=self.webpackChunkserver_side_rendering||[]).push([[6247],{36247:(t,e,n)=>{n.r(e),n.d(e,{EUMModule:()=>D});var i=n(42534),r=n(44382),s=n(59288),a=n(14805),o=n(34998);let c=(()=>{class t{constructor(t,e,n,i){this.siteConfigService=t,this.analyticsService=e,this.firstTimeVisitorService=n,this.router=i}calculatePageTransactionName(t){let e=this.removeTerritory(t);return e=this.removeParamsButOverlay(e),e=this.processIfHomePage(e),e=this.replaceSlashes(e),e}removeTerritory(t){const e=this.siteConfigService.getSiteConfig().urlPrefix;return e?t.replace(`/${e}`,""):t}removeParamsButOverlay(t){const e=t.split("?")[0].split("(")[0],n=this.router.parseUrl(t).queryParams.overlay;return n?`${e}?overlay=${n}`:e}processIfHomePage(t){return"/"!==t?t.replace("/",""):"home/"+(this.firstTimeVisitorService.isFirstTime?"ftv":"logged"===this.analyticsService.getPageLoginStatus()?"logged":"unlogged")}replaceSlashes(t){return t.split("/").join(":")}}return t.ɵfac=function(e){return new(e||t)(o["ɵɵinject"](r.r),o["ɵɵinject"](s.y),o["ɵɵinject"](a.HV),o["ɵɵinject"](i.Router))},t.ɵprov=o["ɵɵdefineInjectable"]({token:t,factory:t.ɵfac}),t})();var u=n(31264),l=n(89428);let g=(()=>{class t{constructor(t,e,n,i){this.siteConfigService=t,this.cookieStorageService=e,this.windowService=n,this.loadNameCalculator=i}buildConfig(t){return{serviceName:this.getServiceName(),serverUrl:this.getServerUrl(),capturePageLoad:this.getCapturePageLoad(),sendPageLoadTransaction:this.getSendPageLoadTransaction(),pageLoadTransactionName:this.getPageLoadTransactionName(t),queueLimit:this.getQueueLimit(),flushInterval:this.getFlushInterval(),transactionDurationThreshold:this.getTransactionDurationThreshold(),distributedTracingOrigins:this.getDistributedTracingOrigins(),logLevel:this.getLogLevel(),transactionSampleRate:+(this.getSamplingRate()/100).toFixed(2),disableInstrumentations:this.getDisableInstrumentations()}}getServiceName(){const{brandCode:t,territory:e}=this.siteConfigService.getSiteConfig();return[t,e].filter((t=>!!t)).join(" ")+" Site"}getServerUrl(){return this.siteConfigService.getSiteConfig().apmUri}getSamplingRate(){return this.siteConfigService.getSiteConfig().apmSamplingRate}getPageLoadTransactionName(t){return this.loadNameCalculator.calculatePageTransactionName(t)}getLogLevel(){return this.cookieStorageService.get("apmRumLogLevel")||"error"}getQueueLimit(){return 1}getFlushInterval(){return 100}getTransactionDurationThreshold(){return 9e5}getDistributedTracingOrigins(){return[`${this.windowService.window().location.protocol}//${this.siteConfigService.getSiteConfigProp("serviceDomain")}`]}getSendPageLoadTransaction(){return!0}getCapturePageLoad(){return!0}getDisableInstrumentations(){return this.siteConfigService.getSiteConfig().apmDisableInstrumentations}}return t.ɵfac=function(e){return new(e||t)(o["ɵɵinject"](r.r),o["ɵɵinject"](l.G),o["ɵɵinject"](u.u),o["ɵɵinject"](c))},t.ɵprov=o["ɵɵdefineInjectable"]({token:t,factory:t.ɵfac}),t})();var m=n(80151),h=n(42998),d=n(22057);let p=(()=>{class t{constructor(t,e){this.router=t,this.nameCalculator=e,this.subscribeToRouterEvents=()=>{this.router.events.pipe((0,h.filter)((t=>t instanceof i.NavigationStart))).subscribe((t=>this.navigationStartedUrl=t.url))},this.subscribeToRouterEvents()}build(t){return{"page-load":{marks:{renderTime:t}},"route-change":{calculateName:()=>this.nameCalculator.calculatePageTransactionName(this.navigationStartedUrl)}}}}return t.ɵfac=function(e){return new(e||t)(o["ɵɵinject"](i.Router),o["ɵɵinject"](c))},t.ɵprov=o["ɵɵdefineInjectable"]({token:t,factory:t.ɵfac}),t})();var v=n(18517);let f=(()=>{class t{constructor(t,e){this.windowService=t,this.siteConfigService=e}init(){return this.version=this.siteConfigService.getSiteConfig().apmRumVersion,this.loadScript(),new Promise((t=>{const e=()=>{if(this.apmAgent=window.elasticApm,!this.apmAgent)return setTimeout((()=>e()),500);t(this.apmAgent)};e()}))}getApmBase(){return this.apmAgent}loadScript(){this.windowService.injectScriptCode(this.generateScript())}generateScript(){return`(function(d, s) {var j = d.createElement(s),t = d.getElementsByTagName(s)[0];j.src = '/assets/js/vendor/elastic-apm-rum-${this.version}.umd.min.js';t.parentNode.insertBefore(j, t);})(document, 'script');`}}return t.ɵfac=function(e){return new(e||t)(o["ɵɵinject"](u.u),o["ɵɵinject"](r.r))},t.ɵprov=o["ɵɵdefineInjectable"]({token:t,factory:t.ɵfac}),t})(),b=(()=>{class t{constructor(t,e,n,i,r,s,a){this.siteConfigService=t,this.languageService=e,this.analyticsService=n,this.channelTypeService=i,this.apmAgentConfigurationService=r,this.extendedItemsBuilder=s,this.apmRumProvider=a}buildApiConfig(t,e){var n=this;return(0,m.Z)((function*(){return{apmAgentConfig:n.apmAgentConfigurationService.buildConfig(t),apmBase:yield n.apmRumProvider.init(),globalLabels:yield n.getGlobalLabels(),transactionExtendedItems:n.extendedItemsBuilder.build(e)}}))()}getGlobalLabels(){var t=this;return(0,m.Z)((function*(){const{brandCode:e,territory:n}=t.siteConfigService.getSiteConfig();return{brand_code:e,territory:n,language:yield t.getCurrentLanguage(),login_status:t.analyticsService.getPageLoginStatus(),channel_type:t.getChannelType()}}))()}getLoginStatus(){return this.analyticsService.getPageLoginStatus()}getCurrentLanguage(){return this.languageService.getLanguage().pipe((0,h.first)()).toPromise()}getChannelType(){return this.channelTypeService.getChannelType()}}return t.ɵfac=function(e){return new(e||t)(o["ɵɵinject"](r.r),o["ɵɵinject"](d.T),o["ɵɵinject"](s.y),o["ɵɵinject"](v.x),o["ɵɵinject"](g),o["ɵɵinject"](p),o["ɵɵinject"](f))},t.ɵprov=o["ɵɵdefineInjectable"]({token:t,factory:t.ɵfac}),t})();var S=n(3786),T=n(19127),C=n(5923),L=n(82802),y=n(56727),E=n(69125);const w="schedule",j="invoke",x="clear",P=O("xhrTask"),k=O("xhrListener"),I=O("xhrScheduled"),A=O("xhrIgnore"),R=O("xhrSync"),X=O("xhrURL"),M=O("xhrMethod");function N(t,e,n){let i=t;for(;i&&!i.hasOwnProperty(e);)i=Object.getPrototypeOf(i);!i&&t[e]&&(i=t);const r=O(e);let s;if(i&&!(s=i[r])&&(s=i[r]=i[e],!(a=i&&Object.getOwnPropertyDescriptor(i,e))||!1!==a.writable&&("function"!=typeof a.get||void 0!==a.set))){const t=n(s,r,e);i[e]=function(){return t(this,arguments)},o=s,i[e][O("OriginalDelegate")]=o}var a,o;return s}function O(t){return"__apm_symbol__"+t}var _=n(9714);const F="apmMonitoringServices";let H=(()=>{class t{constructor(t,e,n,i){this.iFrameXHRService=t,this.siteConfigService=e,this.cookieStorageService=n,this.apmRumProvider=i,this.isXhrInstrumentationEnabled()&&this.iFrameXHRService.getIFrameXMLHttpRequest()&&this.initXhrInstrumentation()}initXhrInstrumentation(){const t=this;this.patchXMLHttpRequest((function(e,n){const i=t.apmRumProvider.getApmBase();if(!i)return;if(!i.serviceFactory.getService("TransactionService").getCurrentTransaction())return;const r=i.serviceFactory.getService("PerformanceMonitoring");("v5"===t.siteConfigService.getSiteConfig().apmRumVersion?r.getXHRSub():r.getXhrPatchSubFn())(e,n)}))}isXhrInstrumentationEnabled(){return this.isXhrInstrumentationFeatureEnable()||this.isXhrInstrumentationCookieEnabled()}isXhrInstrumentationFeatureEnable(){return this.siteConfigService.getSiteConfigProp(F)}isXhrInstrumentationCookieEnabled(){return"true"===this.cookieStorageService.get(F)}patchXMLHttpRequest(t){const e=this.iFrameXHRService.getIFrameXMLHttpRequest().prototype,n="v5"===this.siteConfigService.getSiteConfig().apmRumVersion?"xmlhttprequest":"XMLHttpRequest.send";let i=e.addEventListener,r=e.removeEventListener;if(!i){const t=window.XMLHttpRequestEventTarget;if(t){const e=t.prototype;i=e.addEventListener,r=e.removeEventListener}}const s="readystatechange";function a(e){e.state=j,e.ignore||t(j,e)}const o=N(e,"open",(()=>function(t,e){return t[M]=e[0],t[X]=e[1],t[R]=!1===e[2],o.apply(t,e)})),c=N(e,"send",(()=>function(e,o){const u={source:n,state:"",type:"macroTask",ignore:e[A],data:{target:e,method:e[M],sync:e[R],url:e[X],args:o,aborted:!1}};let l=function(e){XMLHttpRequest[I]=!1,e.state=w,e.ignore||t(w,e);const n=e.data,o=n.target,u=o[k];i||(i=o.addEventListener,r=o.removeEventListener),u&&r.call(o,s,u);const l=o[k]=()=>{o.readyState===o.DONE&&!n.aborted&&XMLHttpRequest[I]&&e.state===w&&a(e)};i.call(o,s,l),o[P]||(o[P]=e);let g=c.apply(o,n.args);return XMLHttpRequest[I]=!0,g}(u);return e[R]&&a(u),l})),u=N(e,"abort",(()=>function(e,n){const i=e[P];if(i&&"string"==typeof i.type){if(i.data&&i.data.aborted)return;!function(e){e.state=x,t(x,e),e.data.aborted=!0}(i)}return u.apply(e,n)}))}}return t.ɵfac=function(e){return new(e||t)(o["ɵɵinject"](_.P),o["ɵɵinject"](r.r),o["ɵɵinject"](l.G),o["ɵɵinject"](f))},t.ɵprov=o["ɵɵdefineInjectable"]({token:t,factory:t.ɵfac}),t})(),B=class{constructor(t,e,n,i,r){var s=this;this.pageEventsService=t,this.customEventsService=e,this.eumConfigurationService=n,this.appState=i,this.eumXhrInstrumentationService=r,this.pageEventsService.getEvents(1).pipe((0,h.take)(1)).subscribe(function(){var t=(0,m.Z)((function*(t){const e=yield s.eumConfigurationService.buildApiConfig(t.renderedURL,t.duration);yield E.Q.init(e),s.reactToGlobalChanges()}));return function(e){return t.apply(this,arguments)}}()),this.handlePageNavigationEvents(),this.handleCustomEvents()}handlePageNavigationEvents(){this.pageEventsService.getEvents(2).subscribe((t=>{const e=E.Q.createTransaction(t.eventName,"page-navigation").setTimestamp(t.timestamp).setStartTimestamp(t.startTimestamp).end(t.endTimestamp);E.Q.submitTransaction(e)}))}handleCustomEvents(){this.customEventsService.getEvents().subscribe((t=>{const e=E.Q.createTransaction(t.eventName,"custom").addLabels(t.labels?t.labels:{}).setTimestamp(t.timestamp).setStartTimestamp(t.startTimestamp).end(t.endTimestamp);E.Q.submitTransaction(e)}))}reactToGlobalChanges(){var t=this;return(0,m.Z)((function*(){(0,T.U5)((()=>t.appState.loginState),(()=>{const e=t.eumConfigurationService.getLoginStatus();E.Q.addLabels({login_status:e})}))}))()}};var Q;B.ɵfac=function(t){return new(t||B)(o["ɵɵinject"](L.z),o["ɵɵinject"](C.V),o["ɵɵinject"](b),o["ɵɵinject"](y.X),o["ɵɵinject"](H))},B.ɵprov=o["ɵɵdefineInjectable"]({token:B,factory:B.ɵfac}),B=(0,S.__decorate)([(Q="EUMService",function(t){t.serviceId=Q}),(0,S.__metadata)("design:paramtypes",[L.z,C.V,b,y.X,H])],B);let D=(()=>{class t{}return t.ɵfac=function(e){return new(e||t)},t.ɵmod=o["ɵɵdefineNgModule"]({type:t}),t.ɵinj=o["ɵɵdefineInjector"]({providers:[c,g,b,p,B,H,f]}),t})()},69125:(t,e,n)=>{n.d(e,{Q:()=>h});var i=n(80151);class r{constructor(t,e){this.name=t,this.type=e,this.labels={},this.startTimestamp=window.performance.now(),this.timestamp=Date.now()}getTimestamp(){return this.timestamp}setTimestamp(t){return this.timestamp=t,this}getStartTimestamp(){return this.startTimestamp}setStartTimestamp(t){return this.startTimestamp=t,this}setContext(t){return this.context=t,this}getContext(){return this.context}addLabels(t){return this.labels=Object.assign(this.labels,t),this}getLabels(){return this.labels}end(){return this.isOpen()&&(this.endTimestamp=window.performance.now()),this}getEndTimestamp(){return this.endTimestamp}isOpen(){return!this.endTimestamp}}class s{constructor(t,e,n={},i={}){this.name=t,this.type=e,this.globalContext=n,this.globalLabels=i,this.timestamp=Date.now(),this.startTimestamp=window.performance.now(),this.context={},this.labels={},this.spans=[],this.marks={},this.errors=[]}getTimestamp(){return this.timestamp}setTimestamp(t){return this.timestamp=t,this}getStartTimestamp(){return this.startTimestamp}setStartTimestamp(t){return this.startTimestamp=t,this}getGlobalContext(){return this.globalContext}getGlobalLabels(){return this.globalLabels}getContext(){return this.context}setContext(t){return this.context=t,this}getLabels(){return this.labels}addLabels(t){return this.labels=Object.assign({},this.labels,t),this}getSpans(){return this.spans}addSpan(t,e,n){return this.createSpan(t,e,n),this}createSpan(t,e,n){const i=new r(t,e);if(n){const{labels:t,context:e}=n;i.addLabels(t).setContext(e)}return this.spans.push(i),i}getMarks(){return this.marks}addMark(t){return this.marks[t]=window.performance.now()-this.startTimestamp,this}end(t){return this.isOpen()&&(this.getSpans().forEach((t=>this.endNotEndedSpans(t))),this.endTimestamp=t||window.performance.now()),this}getEndTimestamp(){return this.endTimestamp}isOpen(){return!this.endTimestamp}getErrors(){return this.errors}addError(t){return this.errors.push(t),this}endNotEndedSpans(t){t.isOpen()&&t.end()}}let a=(()=>{class t{constructor(){}static init(e){t.apmAgent=e,t.startPooling()}static submit(e){if(e.isOpen())throw new Error("EUMTransaction is still open. It is required to end it prior to submit");t.submitTransactionsQueue.push(e)}static startPooling(){setInterval((()=>{if(void 0===t.apmAgent.getCurrentTransaction()){const e=t.submitTransactionsQueue.shift();if(void 0!==e){t.apmAgent.setCustomContext(e.getGlobalContext()),t.apmAgent.addLabels(e.getGlobalLabels());const n=t.startCustomisedApmTransaction(e);n._start=e.getStartTimestamp(),n.addContext(e.getContext(),e.type),n.addLabels(e.getLabels()),n.addMarks({navigationTiming:e.getMarks()}),e.getSpans().forEach((t=>class{constructor(){}static submitSpan(t,e){const n=t.startSpan(e.name,e.type,{timestamp:e.getTimestamp()});!function(t,e){const n=e.onEnd;e.onEnd=e=>{e._end=t.getEndTimestamp(),n(e)}}(e,n),n._start=e.getStartTimestamp(),n.addContext(e.getContext()),n.addLabels(e.getLabels()),n.end()}}.submitSpan(n,t))),0===n.spans.length&&n.startSpan("APM mandatory span",n.type).end(),e.getErrors().forEach((t=>this.apmAgent.captureError(t))),n.end()}}}),50)}static startCustomisedApmTransaction(e){const n=t.startTransaction(e),i=n.onEnd;return n.onEnd=t=>{t._end=e.getEndTimestamp(),i()},n}static startTransaction(e){return t.getTransactionStarter().startTransaction(e.name,e.type,{timestamp:e.getTimestamp(),checkBrowserResponsiveness:!1})}static getTransactionStarter(){return t.apmAgent.getTransactionService?t.apmAgent.getTransactionService():t.apmAgent}}return t.submitTransactionsQueue=[],t.apmAgent=!1,t})();class o{constructor(){}enrich(t,e){t.marks=t.marks||{},t.marks.agent=Object.assign({},t.marks.agent,e)}static create(){return new o}}class c{constructor(){}enrich(t,e){t.name=e()}static create(){return new c}}class u{constructor(t){this.extendedItems=t,this.enricherMap={marks:o.create(),calculateName:c.create()}}enrich(t){if(this.extendedItems){const e=this.extendedItems[t.type];e&&Object.keys(e).forEach((n=>{this.enricherMap[n].enrich(t,e[n])}))}}static create(t){return new u(t)}}let l=(()=>{class t{constructor(){this.addCachedLabel=e=>{const n=this.isCached(e);n&&(e.context=e.context||{},e.context.tags=e.context.tags||{},e.context.tags[t.CACHE_KEY]=n)}}enrich(t){this.addCachedLabel(t)}isCached(t){let e;if(t.marks&&t.marks.navigationTiming){const{domainLookupStart:n,domainLookupEnd:i}=t.marks.navigationTiming;void 0!==n&&void 0!==i&&(e=(n===i).toString())}return e}static create(){return new t}}return t.CACHE_KEY="cached",t})();class g{constructor(t){this.enrichers=t}getFilter(){return t=>this.filter(t)}filter(t){return(t.transactions||t.data||[]).filter((t=>t)).forEach((t=>this.enrich(t))),t}enrich(t){this.enrichers.forEach((e=>e.enrich(t)))}static create(t){return new g([u.create(t),l.create()])}}class m{static init(t){return new Promise((e=>{m.initGlobalContext(t),m.initGlobalLabels(t),m.initApmFilters(t),m.initApmAgent(t),a.init(t.apmBase),e(t.apmBase)}))}static initGlobalContext(t){t.apmBase.setCustomContext(t.globalContext||{})}static initGlobalLabels(t){t.globalLabels&&t.apmBase.addLabels(t.globalLabels)}static initApmFilters(t){const e=g.create(t.transactionExtendedItems);t.apmBase.addFilter(e.getFilter())}static initApmAgent(t){t.apmBase.init(t.apmAgentConfig)}}let h=(()=>{class t{constructor(){}static init(e){return(0,i.Z)((function*(){yield m.init(e),t.setContext(e.globalContext),t.addLabels(e.globalLabels),t.initialized=!0,t.processPendingTransactions()}))()}