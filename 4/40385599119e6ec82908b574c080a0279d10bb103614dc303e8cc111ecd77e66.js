(self.webpackChunkenterprise_platform=self.webpackChunkenterprise_platform||[]).push([[137],{47137:function(e,t,n){"use strict";n.r(t),n.d(t,{AdobeTargetOfferService:function(){return H},AdobeTargetResolverService:function(){return J},AdobeTargetService:function(){return W},AnalyticsInterface:function(){return O},AnalyticsService:function(){return $},AppOwner:function(){return w},ArticleGridUtilityService:function(){return Z},CmsConfigToken:function(){return m},CmsSdkService:function(){return y},ComponentMappingsToken:function(){return N},ComponentObserverService:function(){return ce},ComponentTestService:function(){return I},ContentInsightsService:function(){return D},CustomErrorHandler:function(){return he},DynamicDataHandler:function(){return Se},DynamicDataTag:function(){return me},DynamicTagTypes:function(){return fe},EnterpriseCoreModule:function(){return Y},EnvironmentService:function(){return M},ExperimentationArticleFolder:function(){return U},ExperimentationFolder:function(){return G},ExperimentationInterface:function(){return V},GaService:function(){return _},GeographicalDataService:function(){return b},GrvMapService:function(){return se},GtagActionEnum:function(){return A},GtagEventActionEnum:function(){return k},GtagEventCategoryEnum:function(){return T},GtagEventLabelEnum:function(){return j},GtagEventNameEnum:function(){return P},InternalLinkService:function(){return C},LinkUtilityService:function(){return ne},LobName:function(){return Q},LocalStorageService:function(){return de},MemoryCache:function(){return f},NewRelicService:function(){return v},OfferType:function(){return B},PageDataService:function(){return ae},QueryParamStorageService:function(){return pe},QueryParams:function(){return le},ResponsiveSizes:function(){return x},RouteDataResolverService:function(){return z},ScEventName:function(){return E},TrailingSlashUrlSerializer:function(){return F},VideoHelperService:function(){return ue},containsDynamicData:function(){return ve},getCtaText:function(){return ee},getFormattedArticleTime:function(){return X},nestedObject:function(){return ie},parseMetaData:function(){return te},siteCmsRegExp:function(){return S},substitute:function(){return ge}});var i=n(96356),r={};for(var s in i)["default","AdobeTargetOfferService","AdobeTargetResolverService","AdobeTargetService","AnalyticsInterface","AnalyticsService","AppOwner","ArticleGridUtilityService","CmsConfigToken","CmsSdkService","ComponentMappingsToken","ComponentObserverService","ComponentTestService","ContentInsightsService","CustomErrorHandler","DynamicDataHandler","DynamicDataTag","DynamicTagTypes","EnterpriseCoreModule","EnvironmentService","ExperimentationArticleFolder","ExperimentationFolder","ExperimentationInterface","GaService","GeographicalDataService","GrvMapService","GtagActionEnum","GtagEventActionEnum","GtagEventCategoryEnum","GtagEventLabelEnum","GtagEventNameEnum","InternalLinkService","LinkUtilityService","LobName","LocalStorageService","MemoryCache","NewRelicService","OfferType","PageDataService","QueryParamStorageService","QueryParams","ResponsiveSizes","RouteDataResolverService","ScEventName","TrailingSlashUrlSerializer","VideoHelperService","containsDynamicData","getCtaText","getFormattedArticleTime","nestedObject","parseMetaData","siteCmsRegExp","substitute"].indexOf(s)<0&&(r[s]=(function(e){return i[e]}).bind(0,s));n.d(t,r);var o=n(32999),a=n(31409),c=n(96853),l=n(50790),u=n(87441),h=n(62091),d=n(50198),p=n(52616);class f{constructor(e=null){this.cacheLimit=e,this.storage=new Map}isCacheValid(e){return null==e||(new Date).getTime()<=e}get(e){const t=this.storage.get(e);if(t&&this.storage.has(e)&&this.isCacheValid(t.expiration))return t.value;this.delete(e)}has(e){const t=this.storage.get(e);return!!(t&&this.storage.has(e)&&this.isCacheValid(t.expiration))||(this.delete(e),!1)}set(e,t){this.storage.set(e,{expiration:this.cacheLimit?(new Date).getTime()+this.cacheLimit:null,value:t})}delete(e){this.storage.delete(e)}}const m=new o.InjectionToken("cmsConfigToken"),g=["credit-cards","small-business/credit-cards","bank","commercial","military","relief","auto-financing","small-business-bank","tech","learn-grow","cars","page-not-found","privacy","homepage","software","about","digital","diversity","updates","shopping","environment","accessibility","trade-credit","power-of-attorney","partnerships","coders","lounges","help-center","capital-one-cup","examples","investor"];let v=(()=>{class e{constructor(e,t){this.platformId=e,this.document=t,this.isBrowser=(0,c.isPlatformBrowser)(this.platformId),this.isServer=(0,c.isPlatformServer)(this.platformId),this.scriptTag=this.document.createElement("script"),this.initialInteraction={save:()=>this.initialInteraction,setName:()=>this.initialInteraction},this.newRelic={setCustomAttribute:()=>{},setPageViewName:()=>{},noticeError:()=>{},interaction:()=>this.initialInteraction},this.isBrowser&&window.newrelic&&(this.newRelic=window.newrelic),this.insertScriptTag()}setCustomAttribute(e,t){if(this.isBrowser)this.newRelic.setCustomAttribute(e,t);else if(this.isServer){const n=this.sanitize(e);let i=t;"string"==typeof t&&(i=this.sanitize(t));const r=this.scriptTag.innerHTML;this.scriptTag.innerHTML=`${r.substring(0,r.length-5)}nr.setCustomAttribute("${n}", "${i}");\n})();`}}setPageViewName(e,t){this.newRelic.setPageViewName(e,t)}noticeError(e,t){this.newRelic.noticeError(e,t)}insertScriptTag(){if(!this.isServer)return;this.scriptTag.setAttribute("type","text/javascript"),this.scriptTag.setAttribute("id","new-relic-updates"),this.scriptTag.innerHTML="(function(){ var nr = window.newrelic; if (nr == undefined || nr.setCustomAttribute == undefined) { return; }\n})();";const e=this.document.getElementById("new-relic-init");e&&e.insertAdjacentElement("afterend",this.scriptTag)}save(e){const t=this.newRelic.interaction();return e&&t.setName(e),t.save()}sanitize(e){return e.replace(/\"/g,"&#34;").replace(/\''/g,"&#39;").replace(/'/g,"&#39;").replace(/"/g,"&#34;")}}return e.\u0275fac=function(t){return new(t||e)(o["\u0275\u0275inject"](o.PLATFORM_ID),o["\u0275\u0275inject"](c.DOCUMENT))},e.\u0275prov=o["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const S=/^(\/site\/)(?!_cmsinternal\/)/;let C=(()=>{class e{