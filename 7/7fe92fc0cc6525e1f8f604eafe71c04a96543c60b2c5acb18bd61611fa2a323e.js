var _ssa=_ssa||{};var sa=sa||{};(function(window,document){if(_ssa&&_ssa.loaded){return}var jQuery=window.$||window.jQuery||window.Zepto;var $=window.$||window.jQuery||window.Zepto;var _empty="-",_tag="|",_no_data_tag="",_splited="*:*",expires_ms_2years=2*365*24*60*60*1000,expires_ms_24hours=24*60*60*1000,expires_ms_30mins=30*60*1000;var _crossDayFlag=0,_pvFlag=0,_inTime=_no_data_tag;var visitorId=_no_data_tag,sessionId=_no_data_tag,newVisitorFlg=0;var ua=navigator.userAgent,pf=navigator.platform,p="push",m="match",i="indexOf",npo="unknow but like Phone",npa="unknow but like Tablet",n="unknown",r;_ssa.pvSend=!_ssa.pvSend?false:_ssa.pvSend;_ssa.domain="";_ssa.versionId="SSAJS-2.21.06.09.1";_ssa.max_length=300;_ssa.cookie_domain="";_ssa.cookie_path="/";_ssa.ssa2Cfg=null;_ssa.hotClickObj={count:0,pointSet:""};window._sa_utils={loadTimes:1,getTopDomain:function(webUrl){var d=webUrl||location.host;var c=d.split(".");if(c instanceof Array){var a=0;var b=c.length;var num=2;var s="";var e=c.splice(b-num,b);if(d.indexOf(".com.cn")!=-1){e=d.split(".").splice(b-num-1,b)}for(var i=0;i<e.length;i++){s+="."+e[i]}return s}},fillCAndL:function(newEtag){sa.cAndl=sa.cAndl||0;sa.check=sa.check||"";sa.snvd=sa.snvd||"";var dm=this.getTopDomain(document.domain);if(newEtag){if(sa.cAndl==0){document.cookie="_snvd="+sa.check+";expires=Sun, 23-Jan-28 06:56:38 GMT; path=/ ;domain="+dm;if(window.localStorage){window.localStorage.setItem("_snvd",sa.check)}sa.snvd=sa.check}else{this.loadSnvdScript(sa.snvd)}}else{document.cookie="_snvd="+sa.check+";expires=Sun, 23-Jan-28 06:56:38 GMT; path=/ ;domain="+dm;if(window.localStorage){window.localStorage.setItem("_snvd",sa.check)}}},getSnvd:function(isCheck){sa.check="";sa.snvd="";sa.cAndl=0;var c="";var l="";if(window.localStorage){l=window.localStorage.getItem("_snvd")}else{sa.cAndl=sa.cAndl+2}if(l){sa.check=l;sa.snvd=l;sa.cAndl=sa.cAndl+2}var arrStr=document.cookie.split("; ");for(var i=0;i<arrStr.length;i++){var temp=arrStr[i].split("=");if(temp[0]=="_snvd"){c=temp[1]}}if(c){sa.check=c;sa.snvd=c;if(!l||c==l){sa.cAndl=sa.cAndl+1}}if(isCheck){this.loadSnvdScript()}else{if(sa.cAndl!=3){this.loadSnvdScript()}}},loadSnvdScript:function(isCheck){if(window._sa_utils.loadTimes>10){return}window._sa_utils.loadTimes++;var sc=document.createElement("script");sc.async=true;sc.type="text/javascript";sc.src=(window.location.protocol==="file:"?"https://":"//")+"sa.suning.cn/cc.js";if(isCheck){sc.src=sc.src+"?check="+isCheck}document.getElementsByTagName("head")[0].appendChild(sc)}};var Set=function(){this.isNullAdded=false;var map={};this.contains=function(key){if(key===null){return this.isNullAdded}else{if(key===undefined){return false}else{return map[key]?true:false}}};this.add=function(val){if(val===null){this.isNullAdded=true}else{if(val!==undefined){map[val]=true}}return this};this.addAll=function(val){if(val!==null&&val!==undefined&&val instanceof Array){for(var idx=0;idx<val.length;idx++){this.add(val[idx])}}return this};this.remove=function(val){if(val===null){this.isNullAdded=false}else{if(val!==undefined){delete map[val]}}return this};this.removeAll=function(val){if(val!==null&&val!==undefined&&val instanceof Array){for(var idx=0;idx<val.length;idx++){this.remove(val[idx])}}return this};this.clear=function(){this.isNullAdded=false;map={};return this};this.size=function(){return this.list().length};this.isEmpty=function(){return this.list().length>0?false:true};this.list=function(){var arr=[];if(this.isNullAdded){arr.push(null)}for(var o in map){if(map.hasOwnProperty(o)){arr.push(o)}}return arr}};var HashMap=function(){var size=0;var entry={};this.getThis=function(){return entry};this.put=function(key,value){if(!this.containsKey(key)){size++}entry[key]=value};this.get=function(key){if(this.containsKey(key)){return entry[key]}else{return null}};this.remove=function(key){if(delete entry[key]){size--}};this.containsKey=function(key){return key in entry};this.containsValue=function(value){for(var prop in entry){if(entry[prop]==value){return true}}return false};this.values=function(){var values=new Array(size);for(var prop in entry){values.push(entry[prop])}return values};this.keys=function(){var keys=new Array(size);for(var prop in entry){keys.push(prop)}return keys};this.size=function(){return size}};var Config={websiteId:"2aaef4fe-a99f-49a3-9fc3-fbc9d024e566",versionId:"SSAJS-1.0",domain:"pptv.com",cookieDomain:"*",cookiePath:"/",maxLength:"300",ssaSendUrl:"http://ssac.suning.com/js.gif",searchers:[".google.com",".baidu.com",".soso.com",".bing.com",".yahoo.com",".sogou.com",".360.cn",".so.com",".youdao.com",".haosou.com"],searchKeyWords:["wd","q","w","query","p","word"],sourceMediumArr:["direct","referral","organic"],ssa1_visitorCookieId:"_snma",ssa1_visitorCookieKeys:["constant","visitorid","firstViewTime","lastViewTime","thisViewTime","totalPvs","totalVisits"],cookieVisitorId:"__ssav",cookieSessionId:"__ssas",cookieSourceId:"__ssar",cookieSnvd:"_snvd",cookieVisitorKeys:["visitorId","firstViewTime","lastViewTime","thisViewTime","totalPvs","totalVisits","vType"],cookieSessionKeys:["sessionId","inTime","outTime","views"],cookieSourceKeys:["source","medium","content","campaign","theme"],cookieFromUrl:"__ssaf",clickPit:{tag:"a button input area li".split(" "),withName:"div span".split(" "),withAttr:"sa-data ext_info".split(" ")},init:function(){var _domain="",_dom=document.domain,_dn=this.domain;if("www."==_dom.substring(0,4)){_dom=_dom.substring(4,_dom.length)}if(""==this.domain){_domain=_dom}else{_dn="www."==_dn.substring(0,4)?_dn.substring(3,_dn.length):_dn;_dom=_dn.substring(0,1)=="."?"."+_dom:_dom;var l1=_dn.length;var l2=_dom.length;if(l2-l1>=0){if(_dom.indexOf(_dn)==l2-l1){_domain=_dn}}}if(this.cookieDomain=="*"){this.cookieDomain=PageUtils.getTopDomain()}if(!this.cookieDomain){this.cookieDomain=_domain.toLowerCase()}if(this.cookieDomain.indexOf(".")!=0){this.cookieDomain="."+this.cookieDomain}var _path="",_ccPath=this.cookiePath,_lcPath=document.location.pathname;if(_ccPath==""||_ccPath=="/"){_path=_ccPath}else{if(_ccPath.indexOf("/")==0){var _lastIndex=_ccPath.lastIndexOf("/");if(_lastIndex!=_ccPath.length-1){_ccPath+="/"}if(_lcPath.indexOf(_ccPath)==0){_path=_ccPath}}}this.cookiePath=_path}};var FieldConfig={dataType:{all:0,access:1,event:2,search:3,register:4,hotclick:5,cookie_mapping:6,product:7,storage:8,exposure:9,shopping_cart:10,order:11,pay:12,custom:13,play:14,playing:15},collectFlg:{access:1,event:1,search:1,register:1,hotclick:1,cookie_mapping:1,product:0,storage:1,exposure:1,shopping_cart:0,order:1,pay:0,custom:1,play:1,playing:1},commonData:{all:{st:{state:1,encode:0},curl:{state:1,encode:1},ac:{state:1,encode:1},con:{state:1,encode:1},os:{state:1,encode:1},i:{state:1,encode:0},pid:{state:1,encode:0},sid:{state:1,encode:0},vid:{state:1,encode:0},ct:{state:1,encode:0},t:{state:1,encode:0},th:{state:1,encode:1},v:{state:1,encode:0},md:{state:1,encode:0},furl:{state:1,encode:1},vt:{state:1,encode:0},sr:{state:1,encode:0}},access:{col:{state:1,encode:0},curl:{state:1,encode:1},con:{state:1,encode:1},pid:{state:1,encode:0},ua:{state:1,encode:1},sid:{state:1,encode:0},vid:{state:1,encode:0},sec:{state:1,encode:0},se:{state:1,encode:0},java:{state:1,encode:0},md:{state:1,encode:0},ptitle:{state:1,encode:1},sr:{state:1,encode:0},ter:{state:1,encode:1},st:{state:1,encode:0},ac:{state:1,encode:1},os:{state:1,encode:1},ip:{state:1,encode:0},ck:{state:1,encode:0},i:{state:1,encode:0},ct:{state:1,encode:0},t:{state:1,encode:0},th:{state:1,encode:1},v:{state:1,encode:0},pf:{state:1,encode:1},furl:{state:1,encode:1},vt:{state:1,encode:0},flash:{state:1,encode:0}},event:{st:{state:1,encode:0},curl:{state:1,encode:1},ac:{state:1,encode:1},con:{state:1,encode:1},i:{state:1,encode:0},tname:{state:1,encode:0},pid:{state:1,encode:0},title:{state:1,encode:1},env:{state:1,encode:0},tid:{state:1,encode:0},sid:{state:1,encode:0},vid:{state:1,encode:0},ct:{state:1,encode:0},t:{state:1,encode:0},th:{state:1,encode:1},v:{state:1,encode:0},md:{state:1,encode:0},furl:{state:1,encode:1},text:{state:1,encode:1},vt:{state:1,encode:0},sr:{state:1,encode:0}},search:{st:{state:1,encode:0},curl:{state:1,encode:1},ac:{state:1,encode:1},con:{state:1,encode:1},i:{state:1,encode:0},pid:{state:1,encode:0},sid:{state:1,encode:0},vid:{state:1,encode:0},ct:{state:1,encode:0},t:{state:1,encode:0},th:{state:1,encode:1},v:{state:1,encode:0},md:{state:1,encode:0},furl:{state:1,encode:1},vt:{state:1,encode:0},sr:{state:1,encode:0}},register:{st:{state:1,encode:0},curl:{state:1,encode:1},ac:{state:1,encode:1},con:{state:1,encode:1},i:{state:1,encode:0},pid:{state:1,encode:0},sid:{state:1,encode:0},vid:{state:1,encode:0},ct:{state:1,encode:0},t:{state:1,encode:0},th:{state:1,encode:1},v:{state:1,encode:0},md:{state:1,encode:0},furl:{state:1,encode:1},vt:{state:1,encode:0},sr:{state:1,encode:0}},hotclick:{st:{state:1,encode:0},xy:{state:1,encode:0},col:{state:1,encode:0},curl:{state:1,encode:1},ac:{state:1,encode:1},con:{state:1,encode:1},i:{state:1,encode:0},pid:{state:1,encode:0},ua:{state:1,encode:0},sid:{state:1,encode:0},vid:{state:1,encode:0},ct:{state:1,encode:0},se:{state:1,encode:0},t:{state:1,encode:0},th:{state:1,encode:1},v:{state:1,encode:0},md:{state:1,encode:0},furl:{state:1,encode:1},vt:{state:1,encode:0},sr:{state:1,encode:0}},cookie_mapping:null,product:null,storage:{st:{state:1,encode:0},curl:{state:1,encode:1},ac:{state:1,encode:1},con:{state:1,encode:1},ps:{state:1,encode:0},city:{state:1,encode:1},i:{state:1,encode:0},pid:{state:1,encode:0},sid:{state:1,encode:0},vid:{state:1,encode:0},ct:{state:1,encode:0},pc:{state:1,encode:0},t:{state:1,encode:0},th:{state:1,encode:1},v:{state:1,encode:0},md:{state:1,encode:0},furl:{state:1,encode:1},vt:{state:1,encode:0},sr:{state:1,encode:0}},exposure:{st:{state:1,encode:0},curl:{state:1,encode:1},ac:{state:1,encode:1},con:{state:1,encode:1},i:{state:1,encode:0},pid:{state:1,encode:0},sid:{state:1,encode:0},vid:{state:1,encode:0},ct:{state:1,encode:0},t:{state:1,encode:0},th:{state:1,encode:1},v:{state:1,encode:0},md:{state:1,encode:0},furl:{state:1,encode:1},vt:{state:1,encode:0},sr:{state:1,encode:0}},shopping_cart:null,order:{st:{state:1,encode:0},curl:{state:1,encode:1},ac:{state:1,encode:1},con:{state:1,encode:1},i:{state:1,encode:0},pid:{state:1,encode:0},oid:{state:1,encode:0},sid:{state:1,encode:0},vid:{state:1,encode:0},ct:{state:1,encode:0},ost:{state:1,encode:0},t:{state:1,encode:0},th:{state:1,encode:1},oin:{state:1,encode:1},v:{state:1,encode:0},md:{state:1,encode:0},furl:{state:1,encode:1},vt:{state:1,encode:0},sr:{state:1,encode:0}},pay:null,custom:{st:{state:1,encode:0},eid:{state:1,encode:1},curl:{state:1,encode:1},ac:{state:1,encode:1},con:{state:1,encode:1},i:{state:1,encode:0},pid:{state:1,encode:0},sid:{state:1,encode:0},vid:{state:1,encode:0},ct:{state:1,encode:0},t:{state:1,encode:0},th:{state:1,encode:1},v:{state:1,encode:0},md:{state:1,encode:0},furl:{state:1,encode:1},evi:{state:1,encode:1},vt:{state:1,encode:0},sr:{state:1,encode:0}},play:null,playing:null},htmlTagData:{access:[{columnName:"rety",tagIdent:"resourceType",identType:1,attrName:null,encode:0}],event:null,search:null,register:null,hotclick:null,cookie_mapping:null,product:null,storage:null,exposure:null,shopping_cart:null,order:null,pay:null,custom:null,play:null,playing:null},jsVarData:{access:null,event:null,search:null,register:null,hotclick:null,cookie_mapping:null,product:null,storage:null,exposure:null,shopping_cart:null,order:null,pay:null,custom:null,play:null,playing:null},cookieData:{access:[{columnName:"uid",cookieName:"ppid",cookieRule:null,encode:0},{columnName:"login_nm",cookieName:"PPName",cookieRule:"'%24',1",encode:0},{columnName:"snuid",cookieName:"snuid",cookieRule:null,encode:0},{columnName:"logintp",cookieName:"logintp",cookieRule:null,encode:0},{columnName:"utp",cookieName:"utp",cookieRule:null,encode:0},{columnName:"viptp",cookieName:"vipType",cookieRule:null,encode:0},{columnName:"sptviptp",cookieName:"sportsVipType",cookieRule:null,encode:0}],event:[{columnName:"uid",cookieName:"ppid",cookieRule:null,encode:0},{columnName:"login_nm",cookieName:"PPName",cookieRule:"'%24',1",encode:0},{columnName:"snuid",cookieName:"snuid",cookieRule:null,encode:0},{columnName:"logintp",cookieName:"logintp",cookieRule:null,encode:0},{columnName:"utp",cookieName:"utp",cookieRule:null,encode:0},{columnName:"viptp",cookieName:"vipType",cookieRule:null,encode:0},{columnName:"sptviptp",cookieName:"sportsVipType",cookieRule:null,encode:0}],search:[{columnName:"uid",cookieName:"ppid",cookieRule:null,encode:0},{columnName:"login_nm",cookieName:"PPName",cookieRule:"'%24',1",encode:0},{columnName:"snuid",cookieName:"snuid",cookieRule:null,encode:0},{columnName:"logintp",cookieName:"logintp",cookieRule:null,encode:0},{columnName:"utp",cookieName:"utp",cookieRule:null,encode:0},{columnName:"viptp",cookieName:"vipType",cookieRule:null,encode:0},{columnName:"sptviptp",cookieName:"sportsVipType",cookieRule:null,encode:0}],register:null,hotclick:null,cookie_mapping:null,product:null,storage:null,exposure:[{columnName:"login_nm",cookieName:"PPName",cookieRule:"'%24',1",encode:0},{columnName:"uid",cookieName:"ppid",cookieRule:null,encode:0},{columnName:"snuid",cookieName:"snuid",cookieRule:null,encode:0},{columnName:"logintp",cookieName:"logintp",cookieRule:null,encode:0},{columnName:"utp",cookieName:"utp",cookieRule:null,encode:0},{columnName:"viptp",cookieName:"vipType",cookieRule:null,encode:0},{columnName:"sptviptp",cookieName:"sportsVipType",cookieRule:null,encode:0}],shopping_cart:null,order:null,pay:null,custom:[{columnName:"login_nm",cookieName:"PPName",cookieRule:"'%24',1",encode:0},{columnName:"uid",cookieName:"ppid",cookieRule:null,encode:0},{columnName:"snuid",cookieName:"snuid",cookieRule:null,encode:0},{columnName:"logintp",cookieName:"logintp",cookieRule:null,encode:0},{columnName:"utp",cookieName:"utp",cookieRule:null,encode:0},{columnName:"viptp",cookieName:"vipType",cookieRule:null,encode:0},{columnName:"sptviptp",cookieName:"sportsVipType",cookieRule:null,encode:0}],play:[{columnName:"uid",cookieName:"ppid",cookieRule:null,encode:0},{columnName:"login_nm",cookieName:"PPName",cookieRule:"'%24',1",encode:0},{columnName:"snuid",cookieName:"snuid",cookieRule:null,encode:0},{columnName:"logintp",cookieName:"logintp",cookieRule:null,encode:0},{columnName:"utp",cookieName:"utp",cookieRule:null,encode:0},{columnName:"viptp",cookieName:"vipType",cookieRule:null,encode:0},{columnName:"sptviptp",cookieName:"sportsVipType",cookieRule:null,encode:0}],playing:[{columnName:"uid",cookieName:"ppid",cookieRule:null,encode:0},{columnName:"login_nm",cookieName:"PPName",cookieRule:"'%24',1",encode:0},{columnName:"snuid",cookieName:"snuid",cookieRule:null,encode:0},{columnName:"logintp",cookieName:"logintp",cookieRule:null,encode:0},{columnName:"utp",cookieName:"utp",cookieRule:null,encode:0},{columnName:"viptp",cookieName:"vipType",cookieRule:null,encode:0},{columnName:"sptviptp",cookieName:"sportsVipType",cookieRule:null,encode:0}]},htmlPageRange:{access:null,event:null,search:null,register:null,hotclick:null,cookie_mapping:null,product:null,storage:null,exposure:null,shopping_cart:null,order:null,pay:null,custom:null},cookieMapping:null,eventConfig:[{pageIdent:null,pageMatchRule:null,tagIdent:"input",tagMatchRule:3,eventType:"click",tagAttr:"type",attrKey:"inputtp"},{pageIdent:null,pageMatchRule:null,tagIdent:"a,button,[id^=sport_],[tid^=sport_],[tid^=pit_],[tid^=module_]",tagMatchRule:3,eventType:"click",tagAttr:null,attrKey:null}],shoppingCart:null,order:null,pay:null};FieldConfig.dataType.playheartbeat=22;FieldConfig.dataType.manuclick=2;FieldConfig.dataType.manuexpo=100;var Utils={getNowDateTime:function(){return(new Date).getTime()},isHttps:function(){return document.location.protocol==="https:"},getDomain:function(){return document.domain},isRegMatch:function(regExp,str){return new RegExp(regExp).test(str)},getDomainByUrl:function(url){var tmpdomain=url.substring(url.indexOf("/",url.indexOf("/")+1)+1);var domain=tmpdomain.substring(0,tmpdomain.indexOf("/"));return domain},isUseJQuery:function(){return !!jQuery},trim:function(str){return !str?"":str.replace(/(^\s*)|(\s*$)/g,"")},isNull:function(obj){return(undefined==obj||""==obj||_empty==obj)},isEmpty:function(){}