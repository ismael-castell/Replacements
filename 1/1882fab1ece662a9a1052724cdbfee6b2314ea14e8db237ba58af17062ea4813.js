
jQuery.coredata={"user":{"DEV_SERVER":false,"COMMON_RESOURCE_HOST":"https://astatic.ccmbg.com/ressource/","VARIANT_JS_CODESNIPPET":20190221100000,"VARIANT_JS_LINKMAKER":20190221100000,"VARIANT_JS_CROPPABLE":20190221100000,"VARIANT_JS_COMPLEXITY":20190221100000,"VARIANT_JS_COMPLEXITYUI":20190221100000,"VARIANT_JS_CCMUIEVENT":20190221100000,"VARIANT_JS_NOTE":20190221100000,"VARIANT_JS_CCMUITABS":20190221100000,"VARIANT_JS_LIVINGMOSAIC":20190221100000,"VARIANT_JS_ABUSE":20190221100000,"VARIANT_JS_UPLOAD":20190221100000,"VARIANT_JS_CMS":20190221100000,"VARIANT_JS_RATING":20190221100000,"VARIANT_JS_COVERFLOW":20190221100000,"VARIANT_JS_GEOLOCATION":20190221100000,"VARIANT_JS_GOOGLEANALYTICSEVENTS":20190221100000,"VARIANT_JS_PANELSUBSCRIBE":20190221100000,"VARIANT_JS_EVENTSFROMURL":20190221100000,"VARIANT_JS_MAGICLINKSMANAGER":20190221100000,"VARIANT_JS_SPIN":20190221100000,"VARIANT_JS_TRANSFORMER":20190221100000,"VARIANT_JS_HIGHCHARTS":20190221100000,"VARIANT_JS_MAPSTRACTION":20190221100000,"VARIANT_JS_MAPSTRACTION.GOOGLEV3":20190221100000,"VARIANT_JS_MAPSTRACTION.OPENLAYERS":20190221100000,"VARIANT_JS_HIGHCHARTS.OPENDATA":20190221100000,"VARIANT_JS_HIGHCHARTS.PROPERTYPRICES":20190221100000,"VARIANT_JS_HIGHCHARTS.INTENTION":20190221100000,"VARIANT_JS_WARNINGCNIL":20190221100000,"VARIANT_JS_IMGEDITOR":20190221100000,"VARIANT_JS_CONTENTS":20190221100000,"VARIANT_JS_FANCYBOX":20190221100000,"VARIANT_JS_CKEDITOR":20190221100000,"VARIANT_JS_CCMVIDEO":20190522153824,"VARIANT_JS_CCMVIDEOHTML5":20190522153824,"VARIANT_CSS_MAPAEL":20161010101034,"VARIANT_CSS_CROPPABLE":20161010101034,"VARIANT_CSS_RATING":20161010101034,"VARIANT_CSS_PANELSUBSCRIBE":20180123155641,"VARIANT_CSS_JET.PROFILER":20161010101034,"VARIANT_CSS_CODESNIPPET":20161010101034,"VARIANT_CSS_WARNCNIL":20190702113640,"VARIANT_CSS_FANCYBOX":20180111154308,"VARIANT_CSS_CCMOOYALASKIN":20190522153824}};(function(w,ts){var isObject=function(o){return typeof o!=='undefined'&&Object.prototype.toString.call(o)==="[object Object]";};!isObject(w.dam)&&(w.dam={});typeof w.dam.namespaces==='undefined'&&!isObject(w.dam.namespaces)&&(w.dam.namespaces={});for(var n in ts)
{if(!isObject(w.dam.namespaces[n]))
{w.dam.namespaces[n]=ts[n];}
else
{for(var t in ts[n].timestamps)
{!isObject(w.dam.namespaces[n].timestamps[t])&&(w.dam.namespaces[n].timestamps[t]={});for(var p in ts[n].timestamps[t])
{w.dam.namespaces[n].timestamps[t][p]=ts[n].timestamps[t][p];}}}}}(window,{"ressource":{"template":"//${host}/ressource/${type}/${packageName}?v=${timestamp}","host":"astatic.ccmbg.com","pkgSeparator":",","timestamps":{"js":{"core":20200701102144,"ckeditor":20190221100000}},"public":{"template":"//${host}/ressource/common/${path}","packages":["ckeditor"]}}}));(function(w)
{"use strict";var _require=function(namepath,options)
{return new Promise(function(resolve,reject)
{var key=null;if(_isRessourceExternal(namepath))
{if(typeof options.params!=='undefined')
{namepath=namepath+(/\?/.test(namepath)?'&':'?')+_formatUrlParameters(options.params);}
key=_namepathToKey(namepath);if(_getUrlState(key)==='cached'&&options.cache!==false)
{resolve();}
else
{resolve({key:key,data:{source:'url',path:namepath}});}}
else
{var packageInfos=_resolve(namepath);if(packageInfos!==null)
{if(typeof options.params!=='undefined'){packageInfos[3]=_formatUrlParameters(options.params);}
if(_getPackageState(packageInfos)==='cached'&&options.cache!==false)
{resolve();}
else
{key=_namepathToKey(packageInfos);resolve({key:key,data:{source:'package',path:packageInfos}});}}
else
{reject({name:'[dam-use] "resolve" - InvalidPackage',message:'Package "'+namepath+'" does not exist'});}}});},_on=function(event,handler,data)
{typeof _eventBuffer[event]==='undefined'&&(_eventBuffer[event]={handlers:[],data:data});_eventBuffer[event].handlers.push(handler);},_trigger=function(event)
{if(typeof _eventBuffer[event]!=='undefined'&&typeof _eventBuffer[event].handlers!=='undefined')
{for(var i=0,l=_eventBuffer[event].handlers.length;i<l;++i)
{_eventBuffer[event].handlers[i]({type:event});}
delete _eventBuffer[event];}},_remove=function(event)
{if(typeof _eventBuffer[event]!=='undefined')
{delete _eventBuffer[event];}},_namepathToKey=function(namepath)
{if(Object.prototype.toString.call(namepath)==="[object Array]")
{namepath=namepath.join('_');}
return namepath.replace(/[\/.\\]/g,'_');},_urlPattern=/(http:|https:|)\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/,_isRessourceExternal=function(namepath)
{return _urlPattern.test(namepath);},_getUrlState=function(urlKey)
{return dam.states.url[urlKey]?dam.states.url[urlKey]:null;},_setUrlState=function(urlKey,state)
{dam.states.url[urlKey]=state;},_getTimestamp=function(packageInfos)
{if(dam.namespaces[packageInfos[0]]&&dam.namespaces[packageInfos[0]].timestamps&&dam.namespaces[packageInfos[0]].timestamps[packageInfos[1]]&&typeof dam.namespaces[packageInfos[0]].timestamps[packageInfos[1]][packageInfos[2]]!=='undefined')
{return dam.namespaces[packageInfos[0]].timestamps[packageInfos[1]][packageInfos[2]];}
else if(dam.namespaces[packageInfos[0]]&&dam.namespaces[packageInfos[0]].timestamps&&dam.namespaces[packageInfos[0]].timestamps[packageInfos[1]]&&packageInfos[2].indexOf('.')>-1)
{var sepIndex=packageInfos[2].lastIndexOf('.'),pkg=null;while(sepIndex>-1)
{pkg=packageInfos[2].slice(0,sepIndex);if(typeof dam.namespaces[packageInfos[0]].timestamps[packageInfos[1]][pkg]!=='undefined')
{return dam.namespaces[packageInfos[0]].timestamps[packageInfos[1]][pkg];}
sepIndex=pkg.lastIndexOf('.');}}
return null;},_isPackageExists=function(packageInfos)
{return _getTimestamp(packageInfos)!==null;},_formatUrlParameters=function(params)
{var tmp=[];for(var p in params)
{if(!params.hasOwnProperty(p)){continue;}
tmp.push(p+'='+encodeURIComponent(params[p]));}
return tmp.join('&');},_getPackageState=function(packageInfos)
{var pkgWithParams=(typeof packageInfos[3]==='string')?packageInfos[2]+'_'+packageInfos[3]:packageInfos[2];if(dam.states.namespaces[packageInfos[0]]&&dam.states.namespaces[packageInfos[0]][packageInfos[1]]&&dam.states.namespaces[packageInfos[0]][packageInfos[1]][pkgWithParams])
{return dam.states.namespaces[packageInfos[0]][packageInfos[1]][pkgWithParams];}
else
{return null;}},_setPackageState=function(packageInfos,state)
{typeof dam.states.namespaces[packageInfos[0]]==='undefined'&&(dam.states.namespaces[packageInfos[0]]={});typeof dam.states.namespaces[packageInfos[0]][packageInfos[1]]==='undefined'&&(dam.states.namespaces[packageInfos[0]][packageInfos[1]]={});var pkgWithParams=(typeof packageInfos[3]==='string')?packageInfos[2]+'_'+packageInfos[3]:packageInfos[2];dam.states.namespaces[packageInfos[0]][packageInfos[1]][pkgWithParams]=state;},_mergePackage=function(dest,pkg)
{typeof dest[pkg[0]]==='undefined'&&(dest[pkg[0]]={});typeof dest[pkg[0]][pkg[1]]==='undefined'&&(dest[pkg[0]][pkg[1]]={});typeof dest[pkg[0]][pkg[1]][pkg[3]]==='undefined'&&(dest[pkg[0]][pkg[1]][pkg[3]]=[]);if(dest[pkg[0]][pkg[1]][pkg[3]].indexOf(pkg[2])===-1)
{dest[pkg[0]][pkg[1]][pkg[3]].push(pkg[2]);}
return dest;},_setupLoader=function()
{return new Promise(function(resolve,reject)
{if(typeof _loader==='undefined')
{if(typeof w[dam.options.loader]==='undefined')
{reject({name:'[dam-use] "_setupLoader" - UndefinedLoader',message:'Loader "'+dam.options.loader+'" is undefined'});return;}
_loader=w[dam.options.loader];}
resolve();});},_defaultTsResolution=function(namespace,type,packageNames)
{var timestamp=null;for(var i=0,l=packageNames.length;i<l;i++)
{timestamp=Math.max(timestamp,_getTimestamp([namespace,type,packageNames[i]]));}
timestamp=isNaN(timestamp)?null:timestamp;return timestamp;},_defaultPkgResolution=function(namepathParts)
{var tmp=[];if(namepathParts.length===3)
{if(_isPackageExists(namepathParts)){return namepathParts;}}
else if(namepathParts.length===2)
{for(var i=0,l=dam.options.defaultResolution[0].length;i<l;i++)
{tmp=namepathParts.slice(0);tmp.unshift(dam.options.defaultResolution[0][i]);if(_isPackageExists(tmp)){return tmp;}}}
else if(namepathParts.length===1)
{for(var j=0,m=dam.options.defaultResolution[0].length;j<m;j++)
{for(var k=0,n=dam.options.defaultResolution[1].length;k<n;k++)
{tmp=namepathParts.slice(0);tmp.unshift(dam.options.defaultResolution[1][k]);tmp.unshift(dam.options.defaultResolution[0][j]);if(_isPackageExists(tmp)){return tmp;}}}}
return null;},_resolve=function(namepath,pkgResolution)
{var namepathParts=namepath.split(dam.options.separator);pkgResolution=typeof pkgResolution==='function'?pkgResolution:_defaultPkgResolution;return pkgResolution.call(this,namepathParts);},_buildUrl=function(namespace,type,packageNames,params,tsResolution)
{var args=Array.prototype.slice.call(arguments);if(args.length===3||(args.length===4&&typeof args[3]!=='function'))
{tsResolution=_defaultTsResolution;}
else if(args.length===4&&typeof args[3]==='function')
{tsResolution=params;params=null;}
packageNames=[].concat(packageNames);var timestamp=tsResolution.call(this,namespace,type,packageNames);if(timestamp===null)
{return null;}
else
{if(Object.prototype.toString.call(params)==="[object Object]")
{params=_formatUrlParameters(params);}
var data={host:dam.namespaces[namespace].host,timestamp:timestamp,domain:namespace,type:type,packageName:packageNames.join(dam.namespaces[namespace].pkgSeparator)},url=dam.namespaces[namespace].template.replace(/\${([^}]+)}/gm,function(r,a){return(typeof(data[a])==='undefined'?'':data[a]);}),connector=/\?/.test(url)?'&':'?';url=(typeof params!=="undefined"&&params!==null)?url+connector+params:url;return url;}},_resolvePackage=function(namepath,pkgResolution)
{var resolvedPkg=_resolve(namepath,pkgResolution);if(resolvedPkg===null)
{return{error:{name:'[dam-use] "resolve" - InvalidPackage',message:'Package "'+namepath+'" does not exist'}};}
else
{return resolvedPkg;}},_getUrl=function(packages,options)
{options=typeof options!=='object'?{}:options;packages=[].concat(packages);var namepaths=[],np=null,error=false;for(var i=0,l=packages.length;i<l;i++)
{np=_resolve(packages[i],options.pkgResolution);if(np===null){error=true;break;}
namepaths.push(np);}
if(error)
{return{error:{name:'[dam-use] "getUrl" - InvalidPackage',message:'Package "'+packages[i]+'" does not exist'}};}
var namespace=namepaths[0][0],type=namepaths[0][1],packageNames=[namepaths[0][2]];if(namepaths.length>1)
{for(i=1,l=namepaths.length;i<l;i++)
{if(namepaths[i][0]!==namespace)
{return{error:{name:'[dam-use] "getUrl" - DifferentNamespace',message:'Packages don\'t have the same namespace ('+namepaths+')'}};}
if(namepaths[i][1]!==type)
{return{error:{name:'[dam-use] "getUrl" - DifferentType',message:'Packages don\'t have the same type ('+namepaths+')'}};}
if(packageNames.indexOf(namepaths[i][2])===-1)
{packageNames.push(namepaths[i][2]);}}}
var url=_buildUrl(namespace,type,packageNames,options.tsResolution);if(url===null){return{error:{name:'[dam-use] "getUrl" - UndefinedTimestamp',message:'Timestamp for "'+[namespace,type].join(dam.options.separator)+'.'+packages.join(dam.namespaces[namespace].pkgSeparator)+'" is undefined'}};}
return url;},_getPublicUrl=function(namespace,packageName,asset)
{var args=Array.prototype.slice.call(arguments);if(args.length<3)
{namespace=null;packageName=args[0];asset=args[1];}
if(typeof packageName!=='string'||typeof asset!=='string')
{return{error:'[dam-use] "getPublicUrl" - Bad parameters'};}
if(namespace===null)
{for(var i=0,l=dam.options.defaultResolution[0].length;i<l;i++)
{var dn=dam.options.defaultResolution[0][i];if(typeof dam.namespaces[dn]!=='undefined')
{if(dam.namespaces[dn].public.packages.indexOf(packageName)>-1)
{namespace=dn;break;}}}
if(namespace===null)
{return{error:'[dam-use] "getPublicUrl" - Unknown package "'+packageName+'" (no namespace contains this package)'};}}
else
{if(typeof dam.namespaces[namespace]==='undefined'||dam.namespaces[namespace].public.packages.indexOf(packageName)===-1)
{return{error:'[dam-use] "getPublicUrl" - namespace error "'+namespace+'" : this namespace does not exist or does not contain the pacakge "'+packageName+'"'};}}
var data={host:dam.namespaces[namespace].host,domain:namespace,path:['dam-pkg',packageName,asset].join('/')},url=dam.namespaces[namespace].public.template.replace(/\${([^}]+)}/gm,function(r,a){return(typeof(data[a])==='undefined'?'':data[a]);});return url;},_loader,_ready=false,_eventBuffer={};typeof w.dam==="undefined"&&(w.dam={});typeof w.dam.use==="undefined"&&(w.dam={use:function()
{var self=this,args=[].slice.call(arguments);return new Promise(function(resolve,reject)
{var opts={},namepaths=[],toRequire=[];if(args.length<1)
{reject('[dam-use] "use" - Not enough arguments');return;}
if(args.length>=2&&typeof args[args.length-1]==='object'){opts=args.pop();}
if(Object.prototype.toString.call(args[0])==="[object Array]")
{namepaths=args[0];}
else
{for(var i=0,l=args.length;i<l;i++)
{if(typeof args[i]==='string')
{namepaths.push(args[i]);}}}
for(var j=0,n=namepaths.length;j<n;j++)
{toRequire.push(_require(namepaths[j],opts));}
Promise.all(toRequire).then(function(required)
{var toFetch=[];for(var i in required)
{if(!required.hasOwnProperty(i)){continue;}
if(typeof required[i]!=='undefined')
{var key=_namepathToKey(required[i].data.path);if(required[i].data.source==='url')
{_setUrlState(key,'pending');}
else if(required[i].data.source==='package')
{_setPackageState(required[i].data.path,'pending');}
toFetch.push((function(key,data)
{return new Promise(function(resolve)
{_on('dam-use.'+key+'.cached',function()
{resolve();},data);});}(required[i].key,required[i].data)));}}
self.canFetch().then(function(canFetch)
{if(canFetch){self.fetch();}});return Promise.all(toFetch);}).then(function()
{resolve({});})
['catch'](function(err)
{reject(err);});});},resolvePackage:function()
{var self=this,args=arguments;return new Promise(function(resolve,reject)
{var result=_resolvePackage.apply(self,args);if(typeof result.error!=='undefined'){reject(result.error);}
else
{resolve(result);}});},resolvePackageSync:function()
{var result=_resolvePackage.apply(this,arguments);if(typeof result.error!=='undefined'){throw result.error;}
return result;},getUrl:function()
{var self=this,args=arguments;return new Promise(function(resolve,reject)
{var result=_getUrl.apply(self,args);if(typeof result.error!=='undefined'){reject(result.error);}
else
{resolve(result);}});},getUrlSync:function()
{var result=_getUrl.apply(this,arguments);if(typeof result.error!=='undefined'){throw result.error;}
return result;},getPublicUrl:function()
{var self=this,args=arguments;return new Promise(function(resolve,reject)
{var result=_getPublicUrl.apply(self,args);if(typeof result.error!=='undefined'){reject(result.error);}
else
{resolve(result);}});},getPublicUrlSync:function()
{var result=_getPublicUrl.apply(this,arguments);if(typeof result.error!=='undefined'){throw result.error;}
return result;},fetch:function()
{return new Promise(function(resolve,reject)
{var mergedPackages={},externalUrl=[],urlToGet=[],urlToLoad=[],resourcesToLoad=[],map={};_setupLoader().then(function()
{for(var i in _eventBuffer)
{if(!_eventBuffer.hasOwnProperty(i)){continue;}
if(_eventBuffer[i].data.source==='url')
{map[_eventBuffer[i].data.path]={source:'url',url:_eventBuffer[i].data.path,type:'js'};externalUrl.push(_eventBuffer[i].data.path);}
else if(_eventBuffer[i].data.source==='package')
{mergedPackages=_mergePackage(mergedPackages,_eventBuffer[i].data.path);}}
for(var namespace in mergedPackages)
{if(!mergedPackages.hasOwnProperty(namespace)){continue;}
for(var type in mergedPackages[namespace])
{if(!mergedPackages[namespace].hasOwnProperty(type)){continue;}
for(var params in mergedPackages[namespace][type])
{if(!mergedPackages[namespace][type].hasOwnProperty(params)){continue;}
urlToGet.push((function(namespace,type,packages,params)
{return new Promise(function(resolve,reject)
{var url=_buildUrl(namespace,type,packages,params);if(url!==null)
{map[url]={source:'package',namespace:namespace,type:type,packages:packages,params:params};resolve(url);}
else
{var packageInfos=[];for(var i in packages)
{if(!packages.hasOwnProperty(i)){continue;}
packageInfos=typeof params==='undefined'?[namespace,type,packages[i]]:[namespace,type,packages[i],params];_setPackageState(packageInfos,'failed');_remove('dam-use.'+_namepathToKey(packageInfos)+'.cached');}
reject({name:'[dam-use] "getUrl" - UndefinedTimestamp',message:'Timestamp for "'+[namespace,type].join(dam.options.separator)+'.'+packages.join(dam.namespaces[namespace].pkgSeparator)+'" is undefined'});}});}(namespace,type,mergedPackages[namespace][type][params],params==="undefined"?undefined:params)));}}}
return Promise.all(urlToGet);}).then(function(urls)
{urlToLoad=externalUrl.concat(urls);for(var i in urlToLoad)
{if(!urlToLoad.hasOwnProperty(i)){continue;}
resourcesToLoad.push((function(url)
{return new Promise(function(resolve,reject)
{_loader(url,{type:map[url].type}).then(function()
{if(map[url].source==='url')
{var key=_namepathToKey(url);_setUrlState(key,'cached');_trigger('dam-use.'+key+'.cached');}
else if(map[url].source==='package')
{var packageInfos=[];for(var i in map[url].packages)
{if(!map[url].packages.hasOwnProperty(i)){continue;}
packageInfos=typeof map[url].params==='undefined'?[map[url].namespace,map[url].type,map[url].packages[i]]:[map[url].namespace,map[url].type,map[url].packages[i],map[url].params];_setPackageState(packageInfos,'cached');_trigger('dam-use.'+_namepathToKey(packageInfos)+'.cached');}}
resolve({});})
['catch'](function(err)
{if(map[url].source==='url')
{var key=_namepathToKey(url);_setUrlState(key,'failed');_remove('dam-use.'+key+'.cached');}
else if(map[url].source==='package')
{var packageInfos=[];for(var i in map[url].packages)
{if(!map[url].packages.hasOwnProperty(i)){continue;}
packageInfos=typeof map[url].params==='undefined'?[map[url].namespace,map[url].type,map[url].packages[i]]:[map[url].namespace,map[url].type,map[url].packages[i],map[url].params];_setPackageState(packageInfos,'failed');_remove('dam-use.'+_namepathToKey(packageInfos)+'.cached');}}
reject(err);});});}(urlToLoad[i])));}
return Promise.all(resourcesToLoad);}).then(function()
{resolve({externalUrl:externalUrl,packages:mergedPackages});})
['catch'](function(err)
{reject(err);});});},canFetch:function()
{return Promise.resolve(_ready);},init:function()
{var self=this;return new Promise(function(resolve,reject)
{if(!_ready)
{_setupLoader().then(function()
{_ready=true;return self.fetch();}).then(function(loaded)
{resolve(loaded);})
['catch'](function(err)
{reject(err);});}
else
{resolve({externalUrl:[],packages:{}});}});},defaultResolutions:{tsResolution:_defaultTsResolution,pkgResolution:_defaultPkgResolution},options:{"defaultResolution":[["app","ressource"],["js"]],"loader":"vow","separator":"::"},namespaces:w.dam.namespaces||{},states:{url:{},namespaces:{}}});})(window);!window.console&&(console={log:function(){}});!console.info&&(console.info=console.warn=console.debug=console.log);!console.group&&(console.group=console.log&&(console.groupEnd=function(){}));!console.groupCollapsed&&(console.groupCollapsed=console.group);!console.assert&&(console.assert=function(){});console.now=(function()
{if(typeof performance=='object'&&typeof performance.now=='function'){return function(){return performance.now();};}
else if(typeof performance=='object'&&typeof performance.webkitNow=='function'){return function(){return performance.webkitNow();};}
else{return function(){return new Date().getTime();};}}());console.now.arrayTime=[];console.now.start=console.time=function(n)
{console.now.arrayTime[n]={s:console.now()};};console.now.end=console.timeEnd=function(n)
{if(typeof console.now.arrayTime[n]=='undefined')
{console.warn('Incorrect time label : '+n);return;}
console.now.arrayTime[n].e=console.now();var r=console.now.arrayTime[n].e-console.now.arrayTime[n].s;console.info(''+n+': '+r+'ms');return r;};(function(root,factory){if(typeof define==='function'&&define.amd){define([],factory);}else if(typeof exports==='object'){module.exports=factory();}else{root.logmatic=factory();}}(this,function(){var _url;var _metas;var _ipTrackingAttr;var _uaTrackingAttr;var _urlTrackingAttr;var _levelAttr="severity";var _bulkLingerMs=500;var _bulkMaxPostCount=10;var _bulkMaxWaitingCount=-1;var _queue=null;var _posting=false;var _scheduled=null;function assign(fromObject,toObject){if(fromObject){for(var key in fromObject){if(fromObject.hasOwnProperty(key)){toObject[key]=fromObject[key];}}}}
var init=function(key){_url='https://api.logmatic.io/v1/input/'+key;};var setBulkOptions=function(opts){opts=opts||{};if(opts.lingerMs!=null){_bulkLingerMs=opts.lingerMs;}
if(opts.maxPostCount!=null){_bulkMaxPostCount=opts.maxPostCount;}
if(opts.maxWaitingCount!=null){_bulkMaxWaitingCount=opts.maxWaitingCount;}};var log=function(message,context){if(!_url){console.error('Please init Logmatic before pushing events');return;}
var payload={message:message};if(_levelAttr){payload[_levelAttr]="info";}
assign(context,payload);queue(payload);};var queue=function(payload){assign(_metas,payload);if(_urlTrackingAttr){payload[_urlTrackingAttr]=window.location.href;}
_queue=_queue||[];_queue.push(JSON.stringify(payload));if(_bulkMaxWaitingCount>=0&&_queue.length>_bulkMaxWaitingCount){_queue.shift();}
trypost(true);};var trypost=function(linger){if(_posting||_scheduled||!(_queue&&_queue.length)){return;}
if(linger&&_bulkLingerMs>=0){_scheduled=setTimeout(post,_bulkLingerMs);}else{post();}};var post=function(){var data;if(_bulkMaxPostCount>0&&_queue.length>_bulkMaxPostCount){data='['+_queue.splice(0,_bulkMaxPostCount).join(',')+']';}else{data=_queue.length>1?'['+_queue.join(',')+']':_queue[0];_queue=null;}
_scheduled=null;_posting=true;var request;if(typeof(XDomainRequest)!=='undefined'){request=new XDomainRequest();}
request=new XMLHttpRequest();request.open('POST',_url,true);if(request.constructor===XMLHttpRequest){request.setRequestHeader('Content-Type','application/json; charset=UTF-8');if(_ipTrackingAttr){request.setRequestHeader('X-Logmatic-Add-IP',_ipTrackingAttr);}
if(_uaTrackingAttr){request.setRequestHeader('X-Logmatic-Add-UserAgent',_uaTrackingAttr);}}
request.onload=function(){_posting=false;trypost(false);};request.onerror=function(){_posting=false;trypost(false);};request.send(data);};var setMetas=function(metas){_metas=metas;};var setIPTracking=function(ipTrackingAttr){_ipTrackingAttr=ipTrackingAttr;};var setUserAgentTracking=function(uaTrackingAttr){_uaTrackingAttr=uaTrackingAttr;};return{init:init,log:log,setMetas:setMetas,setIPTracking:setIPTracking,setUserAgentTracking:setUserAgentTracking,setBulkOptions:setBulkOptions};}));(function(log,buf)
{"use strict";var _send=log.log,_initialized=false;log.log=function()
{if(!_initialized)
{_initialized=true;log.init('6nLnF4oNQvqVtEIXEcjhOw');log.setMetas({hostname:location.hostname,href:location.href,origin:'client'});log.setIPTracking('extra.client.IP');log.setUserAgentTracking('extra.client.user-agent');}
_send.apply(log,Array.prototype.slice.call(arguments));};Object.prototype.toString.call(buf)==='[object Array]'&&buf.forEach(function(args){log.log.apply(log,args);});}(logmatic,typeof _logmatic!=='undefined'?_logmatic:[]));jQuery.profile=window.document.URL.match(/jsprofile/i)!==null;jQuery.profile&&(console.time('core.start')||console.time('core.ready'));jQuery.debug=(window.document.URL.match(/dbgjs/i)&&window.console)?function(str){console.log(str);}:function(){};(function(w){'use strict';w.fluentPath=function(path,context,options)
{return new fluentPath.fn.init(path,context,options);};fluentPath.defaultOptions={cache:true};fluentPath.clone=function(item)
{if(!item){return item;}
var result,i=0,n='';if(typeof result=="undefined")
{if(Object.prototype.toString.call(item)==="[object Array]")
{result=[];for(i=0,l=item.length;i<l;++i)
{result[i]=fluentPath.clone(item[i]);}}else if(typeof item=="object")
{if(item.nodeType&&typeof item.cloneNode=="function")
{result=item.cloneNode(true);}else if(!item.prototype)
{if(item instanceof Date)
{result=new Date(item);}else
{result={};for(n in item)
{result[n]=fluentPath.clone(item[n]);}}}else
{if(false&&item.constructor)
{result=new item.constructor();}else
{result=item;}}}else
{result=item;}}
return result;};fluentPath.cache={};fluentPath.extend=function()
{var i=0,l=arguments.length,name='',recursive=typeof arguments[0]=='boolean'?(++i,arguments[0]):false,byReference=typeof arguments[1]=='boolean'?(++i,arguments[1]):false,target=arguments[i];for(i+=1;i<l;++i)
{for(name in arguments[i])
{switch(Object.prototype.toString.call(arguments[i][name]))
{case'[object Array]':recursive&&(target[name]=fluentPath.extend(true,byReference,(target[name]||[]),arguments[i][name]));break;case'[object Object]':recursive&&(target[name]=fluentPath.extend(true,byReference,(target[name]||{}),arguments[i][name]));break;case'[object RegExp]':case'[object Function]':target[name]=arguments[i][name];break;default:target[name]=byReference?arguments[i][name]:fluentPath.clone(arguments[i][name]);}}}
return target;};fluentPath.fn={version:'0.1a',init:function(path,context,options)
{this.parentContext=context||w;options=options||{cache:true};switch(typeof path)
{case'object':this._=path;this.path='direct';break;case'string':this._=this.parentContext;this.find(path,options);break;default:}
return this;},find:function(path,options)
{typeof this.path=='undefined'&&(this.path='');this.path+=path;if(options.cache&&typeof fluentPath.cache[path]!='undefined')
{this._=fluentPath.cache[path];}
else
{var fullPath=path.split(/\./),i=0,l=fullPath.length;this.parentContext=this._;for(;i<l;++i)
{typeof this._[fullPath[i]]=='undefined'&&(this._[fullPath[i]]={});this._=this._[fullPath[i]];}
fluentPath.cache[this.path]=this._;}
return this;},each:function(handler)
{for(var key in this._)
{handler.call(this._[key],handler);}
return this;},extend:function()
{var l=arguments.length,i=0,args=[],call;for(;i<l;++i){args[i]=arguments[i];}
call=[typeof arguments[0]=='boolean'?(args.shift(),arguments[0]):false,typeof arguments[1]=='boolean'?(args.shift(),arguments[1]):false,this._];for(l=args.length,i=0;i<l;++i){call[i+3]=args[i];}
fluentPath.extend.apply(this,call);return this;},clone:function()
{this._=fluentPath.clone(this);return this;}};fluentPath.fn.init.prototype=fluentPath.fn;typeof w._$=='undefined'&&(w._$=fluentPath);}(window));(function(w,$)
{var perform=function(perform)
{return new PerformBuilder(perform);},PerformBuilder=function(perform){this.perform=perform;this.retry=false;this.performed=false;return this;};PerformBuilder.prototype={onlyIf:function(isTrue)
{this.isTrue=isTrue;return this;},tryIt:function()
{if(this.isTrue()&&!this.performed){this.performed=true;this.perform();}
else if(this.retry){var self=this;setTimeout(function(){self.tryIt();},this.retryOn);}
return this;},orRetry:function(on)
{this.retry=true;this.retryOn=on;!this.performed&&this.tryIt();return this;},valueOf:function(){return'perform';}};if($)
{$.perform=perform;}
else{w&&(w.perform=perform);}}(window||global,jQuery||micro));typeof jQuery.support=='undefined'&&(jQuery.support={});jQuery.support.flash=(function(){var mimeTypes=navigator.mimeTypes;var plugins=navigator.plugins;if(plugins&&plugins.length>0){if(plugins['Shockwave Flash']){return true;}
return false;}else if(mimeTypes&&mimeTypes.length>0){var mimeTypesFlash=mimeTypes['application/x-shockwave-flash'];if(typeof mimeTypesFlash!=='undefined'){return mimeTypesFlash.enabledPlugin!==null;}
return false;}else if(window.ActiveXObject){try{new ActiveXObject('ShockwaveFlash.ShockwaveFlash');return true;}catch(e){return false;}}else{return false;}})();jQuery.support.touch=(function(){if(("ontouchstart"in window)||window.DocumentTouch&&document instanceof DocumentTouch){return true;}
return false;})();jQuery.support.svg=document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1");jQuery.support.canvas=!!window.HTMLCanvasElement;jQuery.support.video=!!document.createElement("video").canPlayType;jQuery.support.placeholder=(function(){var i=document.createElement('input');return'placeholder'in i;})();jQuery.support.localStorage=(function()
{try{return typeof window.localStorage==='object'&&typeof window.JSON==='object';}
catch(e)
{return false;}}());jQuery.support.upload=(function(){var i=document.createElement('input');i.type="file";return!i.disabled;})();jQuery.support.progress=(function(){return!!('value'in document.createElement('progress'));}());jQuery.support.supports=(function()
{var div=document.createElement('div'),vendors='Khtml Ms O Moz Webkit'.split(' '),len=vendors.length;return function(prop){if(prop in div.style)return true;prop=prop.replace(/^[a-z]/,function(val){return val.toUpperCase();});while(len--){if(vendors[len]+prop in div.style){return true;}}
return false;};})();jQuery.support.transition=jQuery.support.supports('transition');(function($){"use strict";$.jet=$.core=$.extend(true,{version:'0.60',dev:typeof $.coredata!='undefined'&&typeof $.coredata.user!='undefined'&&typeof $.coredata.user.DEV_SERVER=='boolean'?$.coredata.user.DEV_SERVER:false,env:{dev:window.document.URL.match(/dev|lan35|local/i)!==null,packager:{host:typeof $.coredata!='undefined'&&typeof $.coredata.user!='undefined'&&typeof $.coredata.user.COMMON_RESOURCE_HOST=='string'?$.coredata.user.COMMON_RESOURCE_HOST:'/',defaultPackageTimestamp:'js_core',url:{js:'js.php',css:'css.php'},variants:(function()
{if(typeof $.coredata!='undefined'&&typeof $.coredata.user!='undefined')
{var variants={},variantName='';for(variantName in $.coredata.user)
{if($.coredata.user.hasOwnProperty(variantName)&&variantName.substr(0,8).toLowerCase()=='variant_')
{variants[variantName.substr(8).toLowerCase()]=$.coredata.user[variantName];}}
return variants;}
return{};}()),splitChar:"|",getHostName:function()
{if($.jet.env.packager.host==='/')
{return'astatic.ccmbg.com';}
else
{var splittedHost=$.jet.env.packager.host.split(/\/\//);return splittedHost.length>=2?splittedHost[1].split(/\//)[0]:splittedHost[0].split(/\//)[0];}},get:function(packageName,type)
{type=type||'js';var variantName=type+'_'+packageName.toLowerCase(),self=this;return(type=='css'?'css!':'')+$.jet.env.packager.host
+$.jet.env.packager.url[type]+'?m='+packageName.toLowerCase()
+'&v='+(function()
{if(typeof $.jet.env.packager.variants[variantName]!='undefined')
{return $.jet.env.packager.variants[variantName]+'_';}
var splittedPackages=packageName.split(self.splitChar),i=0,l=splittedPackages.length,currentPackage='';for(;i<l;++i)
{currentPackage=type+'_'+splittedPackages[i].toLowerCase();if(typeof $.jet.env.packager.variants[currentPackage]!='undefined')
{return $.jet.env.packager.variants[currentPackage]+'_';}}
return $.jet.env.packager.variants[self.defaultPackageTimestamp]+'_';}())
+$.jet.version
+(function(){var j=window.location.href.match(/jsprofile=?[^&]*/);return j===null?'':'&'+j[0];}());},isReady:{onFirstJs:function(url,result,key){return(url.indexOf($.jet.env.packager.url.js)>0);},fully:function(url,result,key,loadedResources){return loadedResources==this.resources.length;}}}},startList:{refresh:[]},startListToRefresh:[],started:false,lastStartOptions:{},events:{},eventData:'core-on',$fake:$(1),services:{},defaultStartOptions:{group:'global',animDuration:100,startServices:true},packet:{read:function(jqXHR,textStatus)
{var json;try{json=$.parseJSON(jqXHR.responseText);}
catch(e)
{return;}
json&&json.$data&&$.extend(true,$data,json.$data);return json;}},tryOn:function(n,f)
{var r;try{r=f()||undefined;}
catch(e){}
finally{return r;}}},$.jet||{});$.start=function(f,options)
{var handler={name:'unknown',priority:1,group:(typeof options=='string'?options:'global'),fn:f,refresh:false};typeof options=='object'&&$.extend(handler,options);typeof $.jet.startList[handler.group]!='object'&&($.jet.startList[handler.group]=[]);$.jet.startList[handler.group].push(handler);};$.fn.start=function(f,options)
{$.start(f,options);return this;};$(document).bind('behavior',function(e,options)
{var service='';for(service in options.services)
{if(options.services.hasOwnProperty(service)&&options.services[service].start&&typeof options.services[service].init=='function')
{if(typeof options.services[service].resources=='object'&&(options.services[service].resources.length>0||options.services[service].dynamicResources)&&(typeof options.services[service].isLoaded=='function'&&options.services[service].isLoaded.call(options.services[service])===false))
{(function(localService){var loadedResources=0;$.proxyLoader({load:localService.resources,callback:function(url,result,key){++loadedResources;try{localService.isReady.call(localService,url,result,key,loadedResources)&&localService.init.call(localService);}
catch(e)
{console.group('An error occured during a jet service loading');console.log(e);typeof e.stack!=='undefined'&&console.log(e.stack);console.groupEnd();}}});})($.extend({isReady:$.jet.env.packager.isReady.onFirstJs},service,options.services[service],{resources:(function(){var r=[],t=0;for(t in options.services[service].resources)
{options.services[service].resources.hasOwnProperty(t)&&typeof options.services[service].resources[t]=='string'&&r.push(options.services[service].resources[t]);}
return r;})()}));}
else{options.services[service].init.call(options.services[service]);}}}
$(document).trigger('behaviorEnd');}).bind('start refresh',function(e,options)
{var f,i,ts,perf=0,percent;if(e.type=='start')
{if(typeof options!=='undefined'&&Array.isArray(options.services)){$.jet.env.dev&&console.warn('[JET] - start event - "services" can\'t be defined as an array.');options.services={};}
options=$.extend(true,{},$.jet.defaultStartOptions,{services:$.extend(true,{},$.jet.services)},options);$.jet.lastStartOptions=options;}
else
{options=arguments.length==2?$.extend(true,{startServices:true},{services:(function(lastServices){var services={};for(var name in lastServices)
{services[name]=$.extend(true,{},lastServices[name],{start:false});}
return services;}($.jet.lastStartOptions.services))},options):$.jet.lastStartOptions;options.group='refresh';$.jet.startList[options.group]=[];for(f in $.jet.startListToRefresh)
{$.jet.startListToRefresh.hasOwnProperty(f)&&$.jet.startList[options.group].push($.jet.startListToRefresh[f]);}}
for(i in options)
{if(options.hasOwnProperty(i)&&typeof options.services[i]=='object'&&typeof options[i]=='boolean'&&typeof options.services[i].start=='boolean')
{$.jet.env.dev&&console.warn('translating option '+i+' please convert this option to the new service structure !');options.services[i].start=options[i];}}
options.startServices&&$.start(function(){$(document).trigger('behavior',[options])},{priority:0,group:options.group,name:'Behavior',refresh:false});$.jet.startList[options.group].sort(function(a,b){return a.priority-b.priority;});for(f in $.jet.startList[options.group])
{if($.jet.startList[options.group].hasOwnProperty(f))
{try{$.jet.startList[options.group][f].fn&&$.jet.startList[options.group][f].fn.call(this,e,$.jet.startList[options.group][f]);}catch(e){console.error(e);}
e.type=='start'&&$.jet.startList[options.group][f].refresh&&$.jet.startListToRefresh.push($.jet.startList[options.group][f]);}}
options.group=='global'&&e.type=='start'&&($.jet.started=true);$(document).trigger(e.type+'End',[arguments[1],options]);});}(jQuery));(function($){'use strict';var _k='';$.$={caller:function()
{this.init();if($.$.aliases[this.name])
{$.$.aliases[this.name].apply(this,arguments);}
else{var loadedResources=0,self=this,args=arguments;$.proxyLoader({load:this.resources,callback:function(url,result,key){++loadedResources;self.isReady.call(self,url,result,key,loadedResources)&&self.launcher.apply(self,args);}});}},constructor:function(name,o){o=$.extend({resources:[],init:function(){this.resources.push($.jet.env.packager.get(this.name)+'?'+Math.random());},launcher:function()
{$.$.aliases[this.name]=$[this.name];$.$.aliases[this.name].apply(this,arguments);},isLoaded:function(){return false;},isReady:$.jet.env.packager.isReady.onFirstJs},o);return function()
{this.name=name;for(var k in o){this[k]=o[k];}
this.caller.apply(this,arguments);};},aliases:[]};$.$.delator=$.$.constructor('delator',{isLoaded:function(){return typeof $.delator=='object';}});}(jQuery));(function UMD(name,context,definition){context[name]=context[name]||definition();if(typeof module!="undefined"&&module.exports){module.exports=context[name];}
else if(typeof define=="function"&&define.amd){define(function $AMD$(){return context[name];});}})("Promise",typeof global!="undefined"?global:this,function DEF(){"use strict";var builtInProp,cycle,scheduling_queue,ToString=Object.prototype.toString,timer=(typeof setImmediate!="undefined")?function timer(fn){return setImmediate(fn);}:setTimeout;try{Object.defineProperty({},"x",{});builtInProp=function builtInProp(obj,name,val,config){return Object.defineProperty(obj,name,{value:val,writable:true,configurable:config!==false});};}
catch(err){builtInProp=function builtInProp(obj,name,val){obj[name]=val;return obj;};}
scheduling_queue=(function Queue(){var first,last,item;function Item(fn,self){this.fn=fn;this.self=self;this.next=void 0;}
return{add:function add(fn,self){item=new Item(fn,self);if(last){last.next=item;}
else{first=item;}
last=item;item=void 0;},drain:function drain(){var f=first;first=last=cycle=void 0;while(f){f.fn.call(f.self);f=f.next;}}};})();function schedule(fn,self){scheduling_queue.add(fn,self);if(!cycle){cycle=timer(scheduling_queue.drain);}}
function isThenable(o){var _then,o_type=typeof o;if(o!=null&&(o_type=="object"||o_type=="function")){_then=o.then;}
return typeof _then=="function"?_then:false;}
function notify(){for(var i=0;i<this.chain.length;i++){notifyIsolated(this,(this.state===1)?this.chain[i].success:this.chain[i].failure,this.chain[i]);}
this.chain.length=0;}
function notifyIsolated(self,cb,chain){var ret,_then;try{if(cb===false){chain.reject(self.msg);}
else{if(cb===true){ret=self.msg;}
else{ret=cb.call(void 0,self.msg);}
if(ret===chain.promise){chain.reject(TypeError("Promise-chain cycle"));}
else if(_then=isThenable(ret)){_then.call(ret,chain.resolve,chain.reject);}
else{chain.resolve(ret);}}}
catch(err){chain.reject(err);}}
function resolve(msg){var _then,def_wrapper,self=this;if(self.triggered){return;}
self.triggered=true;if(self.def){self=self.def;}
try{if(_then=isThenable(msg)){def_wrapper=new MakeDefWrapper(self);_then.call(msg,function $resolve$(){resolve.apply(def_wrapper,arguments);},function $reject$(){reject.apply(def_wrapper,arguments);});}
else{self.msg=msg;self.state=1;if(self.chain.length>0){schedule(notify,self);}}}
catch(err){reject.call(def_wrapper||(new MakeDefWrapper(self)),err);}}
function reject(msg){var self=this;if(self.triggered){return;}
self.triggered=true;if(self.def){self=self.def;}
self.msg=msg;self.state=2;if(self.chain.length>0){schedule(notify,self);}}
function iteratePromises(Constructor,arr,resolver,rejecter){for(var idx=0;idx<arr.length;idx++){(function IIFE(idx){Constructor.resolve(arr[idx]).then(function $resolver$(msg){resolver(idx,msg);},rejecter);})(idx);}}
function MakeDefWrapper(self){this.def=self;this.triggered=false;}
function MakeDef(self){this.promise=self;this.state=0;this.triggered=false;this.chain=[];this.msg=void 0;}
function Promise(executor){if(typeof executor!="function"){throw TypeError("Not a function");}
if(this.__NPO__!==0){throw TypeError("Not a promise");}
this.__NPO__=1;var def=new MakeDef(this);this["then"]=function then(success,failure){var o={success:typeof success=="function"?success:true,failure:typeof failure=="function"?failure:false};o.promise=new this.constructor(function extractChain(resolve,reject){if(typeof resolve!="function"||typeof reject!="function"){throw TypeError("Not a function");}
o.resolve=resolve;o.reject=reject;});def.chain.push(o);if(def.state!==0){schedule(notify,def);}
return o.promise;};this["catch"]=function $catch$(failure){return this.then(void 0,failure);};try{executor.call(void 0,function publicResolve(msg){resolve.call(def,msg);},function publicReject(msg){reject.call(def,msg);});}
catch(err){reject.call(def,err);}}
var PromisePrototype=builtInProp({},"constructor",Promise,false);builtInProp(Promise,"prototype",PromisePrototype,false);builtInProp(PromisePrototype,"__NPO__",0,false);builtInProp(Promise,"resolve",function Promise$resolve(msg){var Constructor=this;if(msg&&typeof msg=="object"&&msg.__NPO__===1){return msg;}
return new Constructor(function executor(resolve,reject){if(typeof resolve!="function"||typeof reject!="function"){throw TypeError("Not a function");}
resolve(msg);});});builtInProp(Promise,"reject",function Promise$reject(msg){return new this(function executor(resolve,reject){if(typeof resolve!="function"||typeof reject!="function"){throw TypeError("Not a function");}
reject(msg);});});builtInProp(Promise,"all",function Promise$all(arr){var Constructor=this;if(ToString.call(arr)!="[object Array]"){return Constructor.reject(TypeError("Not an array"));}
if(arr.length===0){return Constructor.resolve([]);}
return new Constructor(function executor(resolve,reject){if(typeof resolve!="function"||typeof reject!="function"){throw TypeError("Not a function");}
var len=arr.length,msgs=Array(len),count=0;iteratePromises(Constructor,arr,function resolver(idx,msg){msgs[idx]=msg;if(++count===len){resolve(msgs);}},reject);});});builtInProp(Promise,"race",function Promise$race(arr){var Constructor=this;if(ToString.call(arr)!="[object Array]"){return Constructor.reject(TypeError("Not an array"));}
return new Constructor(function executor(resolve,reject){if(typeof resolve!="function"||typeof reject!="function"){throw TypeError("Not a function");}
iteratePromises(Constructor,arr,function resolver(idx,msg){resolve(msg);},reject);});});return Promise;});(function(window,doc,undef){var docElement=doc.documentElement,sTimeout=window.setTimeout,firstScript=doc.getElementsByTagName("script")[0],toString={}.toString,execStack=[],started=0,noop=function(){},isGecko=("MozAppearance"in docElement.style),isGeckoLTE18=isGecko&&!!doc.createRange().compareNode,insBeforeObj=isGeckoLTE18?docElement:firstScript.parentNode,isOpera=window.opera&&toString.call(window.opera)=="[object Opera]",isIE=!!doc.attachEvent&&!isOpera,strJsElem=isGecko?"object":isIE?"script":"img",strCssElem=isIE?"script":strJsElem,isArray=Array.isArray||function(obj){return toString.call(obj)=="[object Array]";},isObject=function(obj){return Object(obj)===obj;},isString=function(s){return typeof s=="string";},isFunction=function(fn){return toString.call(fn)=="[object Function]";},globalFilters=[],scriptCache={},prefixes={timeout:function(resourceObj,prefix_parts){if(prefix_parts.length){resourceObj['timeout']=prefix_parts[0];}
return resourceObj;}},handler,yepnope;function isFileReady(readyState){return(!readyState||readyState=="loaded"||readyState=="complete"||readyState=="uninitialized");}
function injectJs(src,cb,attrs,timeout,err,internal){var script=doc.createElement("script"),done,i;timeout=timeout||yepnope['errorTimeout'];script.src=src;for(i in attrs){script.setAttribute(i,attrs[i]);}
cb=internal?executeStack:(cb||noop);script.onreadystatechange=script.onload=function(){if(!done&&isFileReady(script.readyState)){done=1;cb();script.onload=script.onreadystatechange=null;}};sTimeout(function(){if(!done){done=1;cb(1);}},timeout);err?script.onload():firstScript.parentNode.insertBefore(script,firstScript);}
function injectCss(href,cb,attrs,timeout,err,internal){var link=doc.createElement("link"),done,i;timeout=timeout||yepnope['errorTimeout'];cb=internal?executeStack:(cb||noop);link.href=href;link.rel="stylesheet";link.type="text/css";for(i in attrs){link.setAttribute(i,attrs[i]);}
if(!err){firstScript.parentNode.insertBefore(link,firstScript);sTimeout(cb,0);}}
function executeStack(){var i=execStack.shift();started=1;if(i){if(i['t']){sTimeout(function(){(i['t']=="c"?yepnope['injectCss']:yepnope['injectJs'])(i['s'],0,i['a'],i['x'],i['e'],1);},0);}
else{i();executeStack();}}
else{started=0;}}
function preloadFile(elem,url,type,splicePoint,dontExec,attrObj,timeout){timeout=timeout||yepnope['errorTimeout'];var preloadElem=doc.createElement(elem),done=0,firstFlag=0,stackObject={"t":type,"s":url,"e":dontExec,"a":attrObj,"x":timeout};if(scriptCache[url]===1){firstFlag=1;scriptCache[url]=[];}
function onload(first){if(!done&&isFileReady(preloadElem.readyState)){stackObject['r']=done=1;!started&&executeStack();preloadElem.onload=preloadElem.onreadystatechange=null;if(first){if(elem!="img"){sTimeout(function(){insBeforeObj.removeChild(preloadElem)},50);}
for(var i in scriptCache[url]){if(scriptCache[url].hasOwnProperty(i)){scriptCache[url][i].onload();}}}}}
if(elem=="object"){preloadElem.data=url;preloadElem.setAttribute("type","text/css");}else{preloadElem.src=url;preloadElem.type=elem;}
preloadElem.width=preloadElem.height="0";preloadElem.onerror=preloadElem.onload=preloadElem.onreadystatechange=function(){onload.call(this,firstFlag);};execStack.splice(splicePoint,0,stackObject);if(elem!="img"){if(firstFlag||scriptCache[url]===2){insBeforeObj.insertBefore(preloadElem,isGeckoLTE18?null:firstScript);sTimeout(onload,timeout);}
else{scriptCache[url].push(preloadElem);}}}
function load(resource,type,dontExec,attrObj,timeout){started=0;type=type||"j";if(isString(resource)){preloadFile(type=="c"?strCssElem:strJsElem,resource,type,this['i']++,dontExec,attrObj,timeout);}else{execStack.splice(this['i']++,0,resource);execStack.length==1&&executeStack();}
return this;}
function getYepnope(){var y=yepnope;y['loader']={"load":load,"i":0};return y;}
yepnope=function(needs){var i,need,chain=this['yepnope']['loader'];function satisfyPrefixes(url){var parts=url.split("!"),gLen=globalFilters.length,origUrl=parts.pop(),pLen=parts.length,res={"url":origUrl,"origUrl":origUrl,"prefixes":parts},mFunc,j,prefix_parts;for(j=0;j<pLen;j++){prefix_parts=parts[j].split('=');mFunc=prefixes[prefix_parts.shift()];if(mFunc){res=mFunc(res,prefix_parts);}}
for(j=0;j<gLen;j++){res=globalFilters[j](res);}
return res;}
function getExtension(url){var b=url.split('?')[0];return b.substr(b.lastIndexOf('.')+1);}
function loadScriptOrStyle(input,callback,chain,index,testResult){var resource=satisfyPrefixes(input),autoCallback=resource['autoCallback'],extension=getExtension(resource['url']);if(resource['bypass']){return;}
if(callback){callback=isFunction(callback)?callback:callback[input]||callback[index]||callback[(input.split("/").pop().split("?")[0])];}
if(resource['instead']){return resource['instead'](input,callback,chain,index,testResult);}
else{if(scriptCache[resource['url']]){resource['noexec']=true;}
else{scriptCache[resource['url']]=1;}
chain.load(resource['url'],((resource['forceCSS']||(!resource['forceJS']&&"css"==getExtension(resource['url']))))?"c":undef,resource['noexec'],resource['attrs'],resource['timeout']);if(isFunction(callback)||isFunction(autoCallback)){chain['load'](function(){getYepnope();callback&&callback(resource['origUrl'],testResult,index);autoCallback&&autoCallback(resource['origUrl'],testResult,index);scriptCache[resource['url']]=2;});}}}
function loadFromTestObject(testObject,chain){var testResult=!!testObject['test'],group=testResult?testObject['yep']:testObject['nope'],always=testObject['load']||testObject['both'],callback=testObject['callback']||noop,cbRef=callback,complete=testObject['complete']||noop,needGroupSize,callbackKey;function handleGroup(needGroup,moreToCome){if(!needGroup){!moreToCome&&complete();}
else if(isString(needGroup)){if(!moreToCome){callback=function(){var args=[].slice.call(arguments);cbRef.apply(this,args);complete();};}
loadScriptOrStyle(needGroup,callback,chain,0,testResult);}
else if(isObject(needGroup)){needGroupSize=(function(){var count=0,i
for(i in needGroup){if(needGroup.hasOwnProperty(i)){count++;}}
return count;})();for(callbackKey in needGroup){if(needGroup.hasOwnProperty(callbackKey)){if(!moreToCome&&!(--needGroupSize)){if(!isFunction(callback)){callback[callbackKey]=(function(innerCb){return function(){var args=[].slice.call(arguments);innerCb&&innerCb.apply(this,args);complete();};})(cbRef[callbackKey]);}
else{callback=function(){var args=[].slice.call(arguments);cbRef.apply(this,args);complete();};}}
loadScriptOrStyle(needGroup[callbackKey],callback,chain,callbackKey,testResult);}}}}
handleGroup(group,!!always);always&&handleGroup(always);}
if(isString(needs)){loadScriptOrStyle(needs,0,chain,0);}
else if(isArray(needs)){for(i=0;i<needs.length;i++){need=needs[i];if(isString(need)){loadScriptOrStyle(need,0,chain,0);}
else if(isArray(need)){yepnope(need);}
else if(isObject(need)){loadFromTestObject(need,chain);}}}
else if(isObject(needs)){loadFromTestObject(needs,chain);}};yepnope['addPrefix']=function(prefix,callback){prefixes[prefix]=callback;};yepnope['addFilter']=function(filter){globalFilters.push(filter);};yepnope['errorTimeout']=1e4;if(doc.readyState==null&&doc.addEventListener){doc.readyState="loading";doc.addEventListener("DOMContentLoaded",handler=function(){doc.removeEventListener("DOMContentLoaded",handler,0);doc.readyState="complete";},0);}
window['yepnope']=getYepnope();window['yepnope']['executeStack']=executeStack;window['yepnope']['injectJs']=injectJs;window['yepnope']['injectCss']=injectCss;})(this,document);(function($,w){"use strict";w.vow=function(url,options)
{return new Promise(function(resolve,reject)
{options=options||{};options.type=options.type||(/\.css$/.test(url)?'css':'js');options.async=(typeof options.async==='boolean')?options.async:true;options.nodeType=options.nodeType||(options.type==='js'?'script':'link');if(typeof url!=='string'){reject({message:'incorrect url type (not a string)'});return;}
var node=document.createElement(options.nodeType),isModern=(typeof node.onload!=='undefined'),success=function()
{!isModern&&document.getElementsByTagName('head')[0].appendChild(node);resolve({url:url,options:options,node:node});},fail=function(){}